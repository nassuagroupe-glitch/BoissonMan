// storage-file.js — the app's original file-based tenant storage, moved out
// of server.js verbatim. Used whenever FIRESTORE_PROJECT_ID is unset (see
// storage.js): local dev, and the standalone Windows installer, which sets
// no env vars at all and must keep working with zero npm dependencies.
const fs = require('fs');
const path = require('path');

module.exports = function createFileStorage({ tenants, tenantsMeta, buildSeed, migrateTenantData, ADMIN_SECRET, DATA_DIR }) {
  // Pre-multi-tenant layout: a single flat db.json directly under DATA_DIR.
  // Kept only as a migration source (see migrateSingleTenantLayout below).
  const LEGACY_DB_PATH = path.join(DATA_DIR, 'db.json');
  const TENANTS_DIR = path.join(DATA_DIR, 'tenants');
  const TENANTS_META_PATH = path.join(TENANTS_DIR, 'tenants.json');

  function tenantDbPath(id) {
    return path.join(TENANTS_DIR, id, 'db.json');
  }
  // tenantsMeta is owned by server.js and shared by reference — never
  // reassign it (that would only rebind this module's local variable), only
  // mutate it in place so callers holding the same array see the update.
  function replaceTenantsMeta(list) {
    tenantsMeta.length = 0;
    tenantsMeta.push(...list);
  }
  async function saveTenant(id) {
    const p = tenantDbPath(id);
    fs.mkdirSync(path.dirname(p), { recursive: true });
    fs.writeFileSync(p, JSON.stringify(tenants.get(id), null, 2));
  }
  async function saveTenantsMeta() {
    fs.mkdirSync(TENANTS_DIR, { recursive: true });
    fs.writeFileSync(TENANTS_META_PATH, JSON.stringify(tenantsMeta, null, 2));
  }
  // One-time upgrade from the pre-multi-tenant layout (a single flat
  // DATA_DIR/db.json) into tenants/default/db.json. Only runs when there is
  // no tenants.json yet at all — never overwrites an existing multi-tenant
  // setup, and the original flat file is left in place afterward (untouched,
  // not deleted) as a safety net rather than removed.
  function migrateSingleTenantLayout() {
    if (fs.existsSync(TENANTS_META_PATH)) return false;
    if (!fs.existsSync(LEGACY_DB_PATH)) return false;
    const data = JSON.parse(fs.readFileSync(LEGACY_DB_PATH, 'utf8'));
    migrateTenantData(data);
    const id = 'default';
    fs.mkdirSync(path.dirname(tenantDbPath(id)), { recursive: true });
    fs.writeFileSync(tenantDbPath(id), JSON.stringify(data, null, 2));
    replaceTenantsMeta([{ id, name: 'Boutique principale', createdAt: new Date().toISOString() }]);
    fs.mkdirSync(TENANTS_DIR, { recursive: true });
    fs.writeFileSync(TENANTS_META_PATH, JSON.stringify(tenantsMeta, null, 2));
    return true;
  }
  async function loadAllTenants() {
    fs.mkdirSync(TENANTS_DIR, { recursive: true });
    migrateSingleTenantLayout();
    if (fs.existsSync(TENANTS_META_PATH)) {
      replaceTenantsMeta(JSON.parse(fs.readFileSync(TENANTS_META_PATH, 'utf8')));
    } else if (ADMIN_SECRET) {
      // Hosted multi-tenant platform (e.g. Railway): a genuinely fresh install
      // stays empty on purpose — only the platform owner mints new shops, via
      // the ADMIN_SECRET-gated POST /api/admin/tenants.
      replaceTenantsMeta([]);
    } else {
      // Standalone install (e.g. the Windows installer put on a shop's own
      // PC): there is no platform owner and no ADMIN_SECRET to call the admin
      // route with, so a shop with zero tenants would be permanently stuck at
      // the login screen with nothing to log into. Auto-create one demo-seeded
      // "Boutique principale" tenant, mirroring the old pre-multi-tenant
      // fresh-install behavior.
      const id = 'default';
      tenants.set(id, buildSeed());
      await saveTenant(id);
      replaceTenantsMeta([{ id, name: 'Boutique principale', createdAt: new Date().toISOString() }]);
      await saveTenantsMeta();
    }
    tenants.clear();
    tenantsMeta.forEach((t) => {
      const p = tenantDbPath(t.id);
      if (!fs.existsSync(p)) return; // meta/data got out of sync — skip rather than crash
      const data = JSON.parse(fs.readFileSync(p, 'utf8'));
      if (migrateTenantData(data)) fs.writeFileSync(p, JSON.stringify(data, null, 2));
      tenants.set(t.id, data);
    });
  }

  return { saveTenant, saveTenantsMeta, loadAllTenants };
};
