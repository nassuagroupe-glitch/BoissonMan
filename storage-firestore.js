// storage-firestore.js — Firestore-backed tenant storage for the hosted
// Firebase deployment (Hosting + Cloud Functions), selected only when
// FIRESTORE_PROJECT_ID is set (see storage.js). One Firestore document per
// tenant, same JSON shape the file adapter already produces, so route
// handlers never need to know which backend is active.
//
// NOT YET EXERCISED AGAINST A REAL FIREBASE PROJECT — written per the
// migration plan's Step 2 ("adapters extracted, no real Firebase yet") and
// meant to be tested for real in Step 3 against a scratch project before
// any real tenant data ever touches it.
//
// Product/logo images are stored inline as base64 data: URIs by the rest of
// the app (see MAX_LOGO_LENGTH/MAX_PRODUCT_IMAGE_LENGTH in server.js) — up
// to ~700KB each, which can push a tenant past Firestore's 1MiB per-document
// limit. Before every write, any data: URI is offloaded to Cloud Storage and
// replaced with its download URL — idempotent, since an https:// URL
// already in place is left untouched rather than re-uploaded.
const { admin } = require('./firebase-admin-client');

async function offloadDataUri(bucket, dataUri, slotPath) {
  if (typeof dataUri !== 'string' || !dataUri.startsWith('data:')) return dataUri;
  const match = dataUri.match(/^data:([^;]+);base64,(.+)$/);
  if (!match) return dataUri; // malformed — leave as-is rather than silently drop the field
  const [, mime, b64] = match;
  const ext = (mime.split('/')[1] || 'bin').split('+')[0];
  const file = bucket.file(`${slotPath}-${Date.now()}.${ext}`);
  await file.save(Buffer.from(b64, 'base64'), { metadata: { contentType: mime }, public: true });
  return `https://storage.googleapis.com/${bucket.name}/${file.name}`;
}
async function offloadImages(bucket, tenantId, data) {
  if (data.settings) {
    data.settings.logo = await offloadDataUri(bucket, data.settings.logo, `tenants/${tenantId}/logo`);
  }
  if (Array.isArray(data.products)) {
    for (const p of data.products) {
      p.image = await offloadDataUri(bucket, p.image, `tenants/${tenantId}/products/${p.id}`);
    }
  }
}

module.exports = function createFirestoreStorage({ tenants, tenantsMeta, buildSeed, migrateTenantData, ADMIN_SECRET }) {
  const { firestore, bucket } = admin();
  const tenantsCol = firestore.collection('tenants');
  // A single small doc holding the [{id,name,createdAt}] index, mirroring
  // the file adapter's tenants.json — kept separate from the per-tenant
  // documents themselves so listing shops never requires reading every
  // tenant's full data.
  const metaDoc = firestore.collection('_meta').doc('tenants');

  // tenantsMeta is owned by server.js and shared by reference — never
  // reassign it, only mutate in place (see storage-file.js for the same
  // constraint).
  function replaceTenantsMeta(list) {
    tenantsMeta.length = 0;
    tenantsMeta.push(...list);
  }

  async function saveTenant(id) {
    const data = tenants.get(id);
    await offloadImages(bucket, id, data);
    await tenantsCol.doc(id).set(data);
  }
  async function saveTenantsMeta() {
    await metaDoc.set({ list: tenantsMeta });
  }
  async function loadAllTenants() {
    const metaSnap = await metaDoc.get();
    if (metaSnap.exists) {
      replaceTenantsMeta((metaSnap.data() || {}).list || []);
    } else if (ADMIN_SECRET) {
      // Hosted multi-tenant platform: a genuinely fresh project stays empty
      // on purpose — only the platform owner mints new shops, via the
      // ADMIN_SECRET-gated POST /api/admin/tenants. Mirrors storage-file.js.
      replaceTenantsMeta([]);
      await saveTenantsMeta();
    } else {
      // No ADMIN_SECRET set: auto-seed one demo tenant, same fallback as the
      // file adapter (relevant for a from-scratch Firestore project used
      // without the hosted admin flow).
      const id = 'default';
      tenants.set(id, buildSeed());
      replaceTenantsMeta([{ id, name: 'Boutique principale', createdAt: new Date().toISOString() }]);
      await saveTenant(id);
      await saveTenantsMeta();
    }
    tenants.clear();
    for (const t of tenantsMeta) {
      const snap = await tenantsCol.doc(t.id).get();
      if (!snap.exists) continue; // meta/data got out of sync — skip rather than crash, same as the file adapter
      const data = snap.data();
      if (migrateTenantData(data)) await tenantsCol.doc(t.id).set(data);
      tenants.set(t.id, data);
    }
  }

  return { saveTenant, saveTenantsMeta, loadAllTenants };
};
