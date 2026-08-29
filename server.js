// BoissonMan — serveur local (aucune dépendance npm).
// Sert l'app statique (public/) et une API JSON multi-boutiques (chaque
// boutique = un tenant isolé) persistée sous data/tenants/<id>/db.json.
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const tls = require('tls');

const DEFAULT_PASSWORD = '1234'; // seeded/legacy accounts only — set at creation for new employees

const PORT = Number(process.env.PORT) || 8791;
// Cloud platforms (Railway, Render, ...) route traffic to the container
// over its internal network, not 127.0.0.1 — they set PORT but not HOST,
// so infer 0.0.0.0 whenever PORT came from the environment; local runs
// (no PORT set) keep the previous localhost-only default unchanged.
const HOST = process.env.HOST || (process.env.PORT ? '0.0.0.0' : '127.0.0.1');
const PUBLIC_DIR = path.join(__dirname, 'public');
// DATA_DIR is separate from the app's own source location so a cloud
// deployment can point it at a mounted persistent volume (e.g. Railway) —
// otherwise data would live on the container's ephemeral filesystem and
// be wiped on every redeploy/restart.
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, 'data');
// Pre-multi-tenant layout: a single flat db.json directly under DATA_DIR.
// Kept only as a migration source (see migrateSingleTenantLayout below).
const LEGACY_DB_PATH = path.join(DATA_DIR, 'db.json');
const TENANTS_DIR = path.join(DATA_DIR, 'tenants');
const TENANTS_META_PATH = path.join(TENANTS_DIR, 'tenants.json');
// Shared secret for the owner-only shop-management endpoints
// (POST/GET /api/admin/tenants). Not a per-user login — there is exactly
// one operator (the platform owner) who creates shops; per-shop Gérants
// never see or use this. Must be set via env var to enable those routes.
const ADMIN_SECRET = process.env.ADMIN_SECRET || '';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
};

// ---------- Seed data (identique à l'esprit du prototype de design) ----------
function daysAgo(n, hour, min) {
  const d = new Date();
  d.setHours(hour, min, 0, 0);
  d.setDate(d.getDate() - n);
  return d.toISOString();
}
// Splits a total quantity across depot ids using the given ratios (same
// length/order as depotIds), keeping the exact sum by putting the rounding
// remainder on the last depot.
function splitStock(total, depotIds, ratios) {
  const out = {};
  let used = 0;
  depotIds.forEach((id, i) => {
    if (i === depotIds.length - 1) { out[id] = total - used; return; }
    const qty = Math.round(total * ratios[i]);
    out[id] = qty;
    used += qty;
  });
  return out;
}

function buildSeed() {
  const depots = [
    { id: 'd1', name: 'Dépôt Central', address: 'Ouagadougou, Secteur 15' },
    { id: 'd2', name: 'Dépôt Nord', address: 'Ouagadougou, Secteur 30' },
  ];
  const depotIds = depots.map((d) => d.id);
  const categories = [
    { id: 'c1', name: 'Sodas', color: '#c1440e' },
    { id: 'c2', name: 'Bières', color: '#b8862f' },
    { id: 'c3', name: 'Eaux', color: '#2f7f9e' },
    { id: 'c4', name: 'Jus', color: '#d9812f' },
    { id: 'c5', name: 'Vins', color: '#7d3b56' },
    { id: 'c6', name: 'Spiritueux', color: '#5a4a34' },
    { id: 'c7', name: 'Sucreries', color: '#c99a2e' },
  ];
  const suppliers = [
    { id: 's1', name: 'Brasseries du Faso', phone: '+226 70 11 22 33', email: 'contact@bf-boissons.bf' },
    { id: 's2', name: 'SOBEBRA Distribution', phone: '+226 70 22 33 44', email: 'ventes@sobebra.bf' },
    { id: 's3', name: 'Aqua Distribution', phone: '+226 70 33 44 55', email: 'info@aquadist.bf' },
    { id: 's4', name: 'Fruito SARL', phone: '+226 70 44 55 66', email: 'commande@fruito.bf' },
    { id: 's5', name: 'Cave Excellence', phone: '+226 70 55 66 77', email: 'cave@excellence.bf' },
    { id: 's6', name: 'Import Spiritueux CI', phone: '+226 70 66 77 88', email: 'import@spiritueux.ci' },
    { id: 's7', name: 'Confiserie Plus', phone: '+226 70 77 88 99', email: 'contact@confiserieplus.bf' },
  ];
  const productsRaw = [
    { id: 'p1', name: 'Coca-Cola 50cl', categoryId: 'c1', supplierId: 's1', price: 500, cost: 350, stock: 120, minStock: 30, sold: 210, unitsPerPack: 6, pricePerPack: 2700, unitsPerCarton: 24, pricePerCarton: 10500 },
    { id: 'p2', name: 'Fanta Orange 50cl', categoryId: 'c1', supplierId: 's1', price: 500, cost: 350, stock: 85, minStock: 30, sold: 150, unitsPerPack: 6, pricePerPack: 2700, unitsPerCarton: 24, pricePerCarton: 10500 },
    { id: 'p3', name: 'Sprite 50cl', categoryId: 'c1', supplierId: 's1', price: 500, cost: 350, stock: 60, minStock: 30, sold: 98, unitsPerPack: 6, pricePerPack: 2700, unitsPerCarton: 24, pricePerCarton: 10500 },
    { id: 'p4', name: 'Pulpy Orange 50cl', categoryId: 'c1', supplierId: 's1', price: 600, cost: 420, stock: 15, minStock: 20, sold: 64 },
    { id: 'p5', name: 'Castel Beer 65cl', categoryId: 'c2', supplierId: 's2', price: 700, cost: 480, stock: 200, minStock: 40, sold: 340, unitsPerCarton: 12, pricePerCarton: 7800 },
    { id: 'p6', name: 'Guinness 33cl', categoryId: 'c2', supplierId: 's2', price: 900, cost: 620, stock: 55, minStock: 25, sold: 180, unitsPerCarton: 12, pricePerCarton: 10000 },
    { id: 'p7', name: 'Heineken 33cl', categoryId: 'c2', supplierId: 's2', price: 1000, cost: 700, stock: 8, minStock: 20, sold: 96, unitsPerCarton: 12, pricePerCarton: 11000 },
    { id: 'p8', name: 'Beaufort 65cl', categoryId: 'c2', supplierId: 's2', price: 650, cost: 450, stock: 130, minStock: 30, sold: 220, unitsPerCarton: 12, pricePerCarton: 7200 },
    { id: 'p9', name: 'Eau Vive 1.5L', categoryId: 'c3', supplierId: 's3', price: 350, cost: 220, stock: 300, minStock: 50, sold: 410, unitsPerPack: 6, pricePerPack: 1950, unitsPerCarton: 12, pricePerCarton: 3800 },
    { id: 'p10', name: 'Eau Vive 50cl', categoryId: 'c3', supplierId: 's3', price: 200, cost: 120, stock: 250, minStock: 50, sold: 330, unitsPerPack: 12, pricePerPack: 2200, unitsPerCarton: 24, pricePerCarton: 4200 },
    { id: 'p11', name: 'Awa 1.5L', categoryId: 'c3', supplierId: 's3', price: 350, cost: 220, stock: 40, minStock: 40, sold: 120 },
    { id: 'p12', name: 'Youki Ananas 1L', categoryId: 'c4', supplierId: 's4', price: 1200, cost: 850, stock: 45, minStock: 20, sold: 88 },
    { id: 'p13', name: 'Youki Cocktail 1L', categoryId: 'c4', supplierId: 's4', price: 1200, cost: 850, stock: 38, minStock: 20, sold: 76 },
    { id: 'p14', name: 'Tampico 1L', categoryId: 'c4', supplierId: 's4', price: 1100, cost: 780, stock: 5, minStock: 15, sold: 52 },
    { id: 'p15', name: 'Vin Rouge Rochebelle', categoryId: 'c5', supplierId: 's5', price: 4500, cost: 3200, stock: 22, minStock: 10, sold: 34 },
    { id: 'p16', name: 'Vin Blanc Doux', categoryId: 'c5', supplierId: 's5', price: 4200, cost: 3000, stock: 18, minStock: 10, sold: 29 },
    { id: 'p17', name: 'Vin Rosé', categoryId: 'c5', supplierId: 's5', price: 4300, cost: 3050, stock: 12, minStock: 10, sold: 21 },
    { id: 'p18', name: 'Whisky Label 5', categoryId: 'c6', supplierId: 's6', price: 15000, cost: 11000, stock: 9, minStock: 8, sold: 18 },
    { id: 'p19', name: 'Pastis 51', categoryId: 'c6', supplierId: 's6', price: 8500, cost: 6200, stock: 14, minStock: 8, sold: 22 },
    { id: 'p20', name: 'Rhum Négrita', categoryId: 'c6', supplierId: 's6', price: 9000, cost: 6500, stock: 0, minStock: 8, sold: 15 },
    { id: 'p21', name: 'Chewing-gum Malabar', categoryId: 'c7', supplierId: 's7', price: 100, cost: 50, stock: 400, minStock: 50, sold: 520 },
    { id: 'p22', name: 'Chocolat Cadbury', categoryId: 'c7', supplierId: 's7', price: 500, cost: 320, stock: 90, minStock: 30, sold: 140 },
    { id: 'p23', name: 'Biscuit Pocket', categoryId: 'c7', supplierId: 's7', price: 300, cost: 190, stock: 150, minStock: 40, sold: 210 },
  ];
  const products = productsRaw.map((p, i) => {
    const { stock, ...rest } = p;
    return Object.assign({ unitsPerPack: 0, pricePerPack: 0, unitsPerCarton: 0, pricePerCarton: 0, location: '', weight: 0 }, rest, {
      stockByDepot: splitStock(stock, depotIds, [0.6]),
      barcode: '20000000000' + String(i + 1).padStart(2, '0'),
    });
  });
  const clients = [
    { id: 'cl1', name: 'Aminata Traoré', phone: '+226 76 10 20 30', points: 340, totalSpent: 125000 },
    { id: 'cl2', name: 'Boureima Kaboré', phone: '+226 76 20 30 40', points: 120, totalSpent: 48000 },
    { id: 'cl3', name: 'Fatou Ouédraogo', phone: '+226 76 30 40 50', points: 560, totalSpent: 198000 },
    { id: 'cl4', name: 'Issa Sawadogo', phone: '+226 76 40 50 60', points: 75, totalSpent: 26000 },
    { id: 'cl5', name: 'Mariam Zongo', phone: '+226 76 50 60 70', points: 410, totalSpent: 152000 },
  ];
  const employees = [
    { id: 'e1', name: 'Ismaël Nassua', role: 'Gérant', phone: '+226 70 00 00 01', active: true, depotId: null },
    { id: 'e2', name: 'Adama Kéré', role: 'Caissier', phone: '+226 70 00 00 02', active: true, depotId: 'd1' },
    { id: 'e3', name: 'Salimata Diallo', role: 'Caissier', phone: '+226 70 00 00 03', active: true, depotId: 'd2' },
    { id: 'e4', name: 'Yacouba Sanou', role: 'Caissier', phone: '+226 70 00 00 04', active: false, depotId: 'd1' },
  ].map((e) => Object.assign(e, hashPassword(DEFAULT_PASSWORD)));
  const empDepot = {}; employees.forEach((e) => { empDepot[e.name] = e.depotId; });
  const depotName = {}; depots.forEach((d) => { depotName[d.id] = d.name; });
  const salesSeed = [
    { dayOffset: 6, hour: 9, min: 15, cashier: 'Adama Kéré', itemCount: 4, total: 5400, paymentMethod: 'Espèces' },
    { dayOffset: 6, hour: 14, min: 40, cashier: 'Salimata Diallo', itemCount: 2, total: 1900, paymentMethod: 'Mobile Money' },
    { dayOffset: 5, hour: 10, min: 5, cashier: 'Adama Kéré', itemCount: 6, total: 8300, paymentMethod: 'Espèces' },
    { dayOffset: 5, hour: 16, min: 20, cashier: 'Salimata Diallo', itemCount: 1, total: 4500, paymentMethod: 'Carte' },
    { dayOffset: 4, hour: 9, min: 50, cashier: 'Adama Kéré', itemCount: 3, total: 2600, paymentMethod: 'Espèces' },
    { dayOffset: 4, hour: 17, min: 10, cashier: 'Yacouba Sanou', itemCount: 5, total: 6100, paymentMethod: 'Mobile Money' },
    { dayOffset: 3, hour: 11, min: 30, cashier: 'Salimata Diallo', itemCount: 2, total: 15900, paymentMethod: 'Carte' },
    { dayOffset: 3, hour: 15, min: 45, cashier: 'Adama Kéré', itemCount: 8, total: 9800, paymentMethod: 'Espèces' },
    { dayOffset: 2, hour: 10, min: 20, cashier: 'Adama Kéré', itemCount: 3, total: 3300, paymentMethod: 'Espèces' },
    { dayOffset: 2, hour: 18, min: 5, cashier: 'Salimata Diallo', itemCount: 4, total: 5200, paymentMethod: 'Mobile Money' },
    { dayOffset: 1, hour: 9, min: 40, cashier: 'Adama Kéré', itemCount: 6, total: 7600, paymentMethod: 'Espèces' },
    { dayOffset: 1, hour: 13, min: 15, cashier: 'Salimata Diallo', itemCount: 2, total: 2000, paymentMethod: 'Carte' },
    { dayOffset: 0, hour: 9, min: 5, cashier: 'Adama Kéré', itemCount: 5, total: 6900, paymentMethod: 'Espèces' },
    { dayOffset: 0, hour: 12, min: 30, cashier: 'Salimata Diallo', itemCount: 3, total: 8500, paymentMethod: 'Mobile Money' },
  ];
  const sales = salesSeed.map((s, i) => {
    const depotId = empDepot[s.cashier] || 'd1';
    return {
      id: 'sale-seed-' + (i + 1),
      date: daysAgo(s.dayOffset, s.hour, s.min),
      cashier: s.cashier,
      depotId,
      depotName: depotName[depotId] || '',
      clientId: '',
      clientName: '',
      itemCount: s.itemCount,
      total: s.total,
      paymentMethod: s.paymentMethod,
      items: [],
    };
  });
  const expensesSeed = [
    { dayOffset: 5, cashier: 'Ismaël Nassua', category: 'Facture CIE', amount: 45000, note: 'Facture électricité du mois' },
    { dayOffset: 4, cashier: 'Ismaël Nassua', category: 'Achat marchandise', amount: 320000, note: 'Réassort Brasseries du Faso' },
    { dayOffset: 2, cashier: 'Ismaël Nassua', category: 'Facture SODECI', amount: 18000, note: '' },
    { dayOffset: 1, cashier: 'Ismaël Nassua', category: 'Salaires', amount: 150000, note: 'Avance sur salaire — Adama Kéré' },
    { dayOffset: 0, cashier: 'Ismaël Nassua', category: 'Imprévus', amount: 5000, note: 'Réparation frigo' },
  ];
  const expenses = expensesSeed.map((e, i) => {
    const depotId = empDepot[e.cashier] || 'd1';
    return {
      id: 'exp-seed-' + (i + 1),
      date: daysAgo(e.dayOffset, 10, 0),
      category: e.category,
      amount: e.amount,
      note: e.note,
      depotId,
      depotName: depotName[depotId] || '',
      recordedBy: e.cashier,
    };
  });
  return { depots, categories, suppliers, products, clients, employees, sales, expenses, messageLog: [], settings: defaultSettings(), fneConfig: defaultFneConfig(), messagingConfig: defaultMessagingConfig() };
}

// Upgrades a pre-multi-dépôt tenant db (flat product.stock, no depots) in
// place. Existing stock is preserved by putting all of it into a single new
// "Dépôt principal" depot — splitting it across invented depots would
// misrepresent real inventory already entered.
function migrateToDepots(data) {
  let changed = false;
  if (!Array.isArray(data.depots) || data.depots.length === 0) {
    data.depots = [{ id: 'd1', name: 'Dépôt principal', address: '' }];
    changed = true;
  }
  const defaultDepotId = data.depots[0].id;
  const depotName = {}; data.depots.forEach((d) => { depotName[d.id] = d.name; });

  (data.products || []).forEach((p) => {
    if (!p.stockByDepot) {
      p.stockByDepot = { [defaultDepotId]: typeof p.stock === 'number' ? p.stock : 0 };
      delete p.stock;
      changed = true;
    }
  });
  (data.employees || []).forEach((e) => {
    if (!('depotId' in e)) {
      e.depotId = e.role === 'Gérant' ? null : defaultDepotId;
      changed = true;
    }
    if (!e.passwordHash) {
      Object.assign(e, hashPassword(DEFAULT_PASSWORD));
      changed = true;
    }
  });
  (data.sales || []).forEach((s) => {
    if (!s.depotId) {
      s.depotId = defaultDepotId;
      s.depotName = depotName[defaultDepotId] || '';
      changed = true;
    }
  });
  return changed;
}
// Per-tenant migrations that used to run in the old single-tenant loadDB();
// applied to every tenant on every boot so an older tenant db.json on disk
// keeps working after a code update, same as before multi-tenancy existed.
function migrateTenantData(data) {
  let changed = migrateToDepots(data);
  if (!Array.isArray(data.expenses)) { data.expenses = []; changed = true; }
  if (!Array.isArray(data.messageLog)) { data.messageLog = []; changed = true; }
  if (!data.messagingConfig) { data.messagingConfig = defaultMessagingConfig(); changed = true; }
  (data.clients || []).forEach((c) => {
    if (c.email === undefined) { c.email = ''; changed = true; }
  });
  (data.products || []).forEach((p) => {
    if (p.unitsPerPack === undefined) {
      p.unitsPerPack = 0; p.pricePerPack = 0; p.unitsPerCarton = 0; p.pricePerCarton = 0;
      changed = true;
    }
    if (p.location === undefined) { p.location = ''; changed = true; }
    if (p.weight === undefined) { p.weight = 0; changed = true; }
  });
  if (!data.settings) { data.settings = defaultSettings(); changed = true; }
  else if (data.settings.ncc === undefined) {
    Object.assign(data.settings, { ncc: '', taxRegime: '', taxCenter: '', bankDetails: '', vatRate: 0 });
    changed = true;
  }
  if (!data.fneConfig) { data.fneConfig = defaultFneConfig(); changed = true; }
  return changed;
}

// ---------- Persistence (multi-tenant) ----------
const tenants = new Map(); // tenantId -> db object ({depots, categories, ...})
let tenantsMeta = []; // [{id, name, createdAt}], mirrors tenants.keys()

function tenantDbPath(id) {
  return path.join(TENANTS_DIR, id, 'db.json');
}
function saveTenant(id) {
  const p = tenantDbPath(id);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify(tenants.get(id), null, 2));
}
function saveTenantsMeta() {
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
  tenantsMeta = [{ id, name: 'Boutique principale', createdAt: new Date().toISOString() }];
  saveTenantsMeta();
  return true;
}
function loadAllTenants() {
  fs.mkdirSync(TENANTS_DIR, { recursive: true });
  migrateSingleTenantLayout();
  if (fs.existsSync(TENANTS_META_PATH)) {
    tenantsMeta = JSON.parse(fs.readFileSync(TENANTS_META_PATH, 'utf8'));
  } else if (ADMIN_SECRET) {
    // Hosted multi-tenant platform (e.g. Railway): a genuinely fresh install
    // stays empty on purpose — only the platform owner mints new shops, via
    // the ADMIN_SECRET-gated POST /api/admin/tenants.
    tenantsMeta = [];
  } else {
    // Standalone install (e.g. the Windows installer put on a shop's own
    // PC): there is no platform owner and no ADMIN_SECRET to call the admin
    // route with, so a shop with zero tenants would be permanently stuck at
    // the login screen with nothing to log into. Auto-create one demo-seeded
    // "Boutique principale" tenant, mirroring the old pre-multi-tenant
    // fresh-install behavior.
    const id = 'default';
    tenants.set(id, buildSeed());
    saveTenant(id);
    tenantsMeta = [{ id, name: 'Boutique principale', createdAt: new Date().toISOString() }];
    saveTenantsMeta();
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
// ---------- FNE (Facture Normalisée Électronique — DGI Côte d'Ivoire) ----------
// Real API integration, per "PROCEDURE D'INTERFACAGE DES ENTREPRISES PAR API"
// (DGI, mai 2025) supplied by the user. Scope: certification de facture de
// vente only (POST /external/invoices/sign) — avoir/refund needs a returns
// feature this app doesn't have, and bordereau d'achat is a different
// (agricultural purchase) flow this app doesn't model. DGI's own test
// environment URL from the doc; production URL is only handed out by DGI
// after they validate the shop's test submissions.
// Declared above loadAllTenants() below since migrateTenantData() (called
// from it) needs defaultFneConfig() at module-load time — a const declared
// after that call would still be in its temporal dead zone.
const FNE_TEST_BASE_URL = 'http://54.247.95.108/ws';
// The four tax codes DGI's API accepts — fixed legal categories, not a free
// percentage. Which one applies is a real tax-status fact only the shop
// owner can know, so it's a config choice (see PATCH /api/fne/config) never
// inferred here. Rates are DGI's own, used only to back out HT from this
// app's TTC selling prices when building the certification request.
const FNE_TAX_RATES = { TVA: 18, TVAB: 9, TVAC: 0, TVAD: 0 };
const FNE_PAYMENT_METHODS = { 'Espèces': 'cash', 'Mobile Money': 'mobile-money', Carte: 'card', Crédit: 'deferred' };
function defaultFneConfig() {
  return { apiKey: '', baseUrl: FNE_TEST_BASE_URL, enabled: false, taxCode: '' };
}
// Never send the raw key to any client, manager included — same posture as
// employee passwordHash. The Gérant sets/replaces it write-only (see PATCH
// /api/fne/config); hasApiKey just tells the UI whether one is on file.
function publicFneConfig(db) {
  const c = db.fneConfig || defaultFneConfig();
  return { enabled: c.enabled, baseUrl: c.baseUrl, taxCode: c.taxCode, hasApiKey: !!c.apiKey };
}

// ---------- Messaging config (credit reminders / availability broadcasts) ----------
// Same write-only-secret posture as fneConfig above: gmailAppPassword and
// clientSecret never reach any client; the rest (which email/sender is
// configured, whether sending is turned on) is fine to show so the UI can
// reflect real state without re-typing everything on every visit.
function defaultMessagingConfig() {
  return {
    email: { enabled: false, gmailUser: '', gmailAppPassword: '' },
    sms: { enabled: false, clientId: '', clientSecret: '', senderAddress: '' },
  };
}
function publicMessagingConfig(db) {
  const c = db.messagingConfig || defaultMessagingConfig();
  return {
    email: { enabled: c.email.enabled, gmailUser: c.email.gmailUser, hasAppPassword: !!c.email.gmailAppPassword },
    sms: { enabled: c.sms.enabled, clientId: c.sms.clientId, senderAddress: c.sms.senderAddress, hasClientSecret: !!c.sms.clientSecret },
  };
}

// ---------- Email sending (Gmail SMTP over raw TLS, no npm dependency) ----------
// SMTP is a fixed, well-documented text protocol — unlike e.g. QR encoding
// (deliberately NOT hand-rolled elsewhere in this app, for being easy to get
// subtly wrong in a way that looks right but isn't), a wrong SMTP command
// just gets a clear numeric error code back, so implementing it directly
// against Node's built-in `tls` module is a reasonable way to avoid a new
// npm dependency (nodemailer) for what is otherwise a zero-dependency app.
function smtpReadReply(socket) {
  return new Promise((resolve, reject) => {
    let buf = '';
    function onData(chunk) {
      buf += chunk.toString('utf8');
      // Only treat the buffer as a complete reply once it actually ends on a
      // line boundary — checking `lines[last]` alone (without this) could
      // false-positive-resolve on a reply chunked mid-line by TLS/TCP.
      if (!buf.endsWith('\r\n')) return;
      const lines = buf.split('\r\n').filter(Boolean);
      const last = lines[lines.length - 1];
      // Multi-line replies use "250-" for every line but the last, which
      // uses "250 " (space) — only resolve on a non-continuation line.
      if (last && /^\d{3} /.test(last)) { cleanup(); resolve(buf); }
    }
    function onError(e) { cleanup(); reject(e); }
    function cleanup() { socket.removeListener('data', onData); socket.removeListener('error', onError); }
    socket.on('data', onData);
    socket.on('error', onError);
  });
}
function smtpCommand(socket, cmd) {
  socket.write(cmd + '\r\n');
  return smtpReadReply(socket);
}
// RFC 2047 encoded-word — only needed once a header value has non-ASCII
// bytes (French accents in a Subject line, mainly); a plain-ASCII value is
// left untouched so headers stay human-readable in a raw message view.
function mimeEncodeHeader(str) {
  if (/^[\x00-\x7F]*$/.test(str)) return str;
  return '=?UTF-8?B?' + Buffer.from(str, 'utf8').toString('base64') + '?=';
}
async function sendEmailViaGmail(cfg, to, subject, textBody) {
  const socket = tls.connect({ host: 'smtp.gmail.com', port: 465, servername: 'smtp.gmail.com' });
  socket.setTimeout(15000);
  try {
    await new Promise((resolve, reject) => {
      socket.once('secureConnect', resolve);
      socket.once('error', reject);
      socket.once('timeout', () => reject(new Error('Connexion à Gmail expirée')));
    });
    await smtpReadReply(socket); // 220 greeting
    await smtpCommand(socket, 'EHLO boissonman.local');
    await smtpCommand(socket, 'AUTH LOGIN');
    await smtpCommand(socket, Buffer.from(cfg.gmailUser, 'utf8').toString('base64'));
    const authReply = await smtpCommand(socket, Buffer.from(cfg.gmailAppPassword, 'utf8').toString('base64'));
    if (!/^235/.test(authReply)) {
      throw new Error("Authentification Gmail refusée — vérifiez l'adresse et le mot de passe d'application");
    }
    await smtpCommand(socket, `MAIL FROM:<${cfg.gmailUser}>`);
    const rcptReply = await smtpCommand(socket, `RCPT TO:<${to}>`);
    if (!/^25\d/.test(rcptReply)) throw new Error('Adresse destinataire refusée : ' + to);
    await smtpCommand(socket, 'DATA');
    // Dot-stuffing: a line starting with "." must be escaped as ".." per the
    // SMTP transparency rule, or the server would misread it as the
    // end-of-data marker.
    const escapedBody = textBody.replace(/\r\n/g, '\n').split('\n')
      .map((l) => (l.startsWith('.') ? '.' + l : l)).join('\r\n');
    const message = [
      `From: ${cfg.gmailUser}`,
      `To: ${to}`,
      `Subject: ${mimeEncodeHeader(subject)}`,
      `Date: ${new Date().toUTCString()}`,
      'MIME-Version: 1.0',
      'Content-Type: text/plain; charset=UTF-8',
      'Content-Transfer-Encoding: 8bit',
      '',
      escapedBody,
      '.',
    ].join('\r\n');
    const dataReply = await smtpCommand(socket, message);
    if (!/^250/.test(dataReply)) throw new Error('Le serveur Gmail a refusé le message');
    await smtpCommand(socket, 'QUIT');
  } finally {
    socket.destroy();
  }
}

// ---------- SMS sending (Orange SMS API, OAuth2 client_credentials) ----------
async function orangeGetToken(cfg) {
  const basic = Buffer.from(cfg.clientId + ':' + cfg.clientSecret).toString('base64');
  let res, data;
  try {
    res = await fetch('https://api.orange.com/oauth/v3/token', {
      method: 'POST',
      headers: { Authorization: 'Basic ' + basic, 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'grant_type=client_credentials',
    });
    data = await res.json().catch(() => ({}));
  } catch (e) {
    throw new Error('Impossible de contacter Orange : ' + e.message);
  }
  if (!res.ok || !data.access_token) {
    throw new Error(data.error_description || data.error || 'Authentification Orange refusée');
  }
  return data.access_token;
}
// Orange's `tel:` URIs need E.164 (a leading "+"); numbers are commonly
// typed/copied with the "00" international-access-code prefix instead
// (e.g. "002250747666848"), which normalizes to the same "+2250747...".
function toTelUri(phone) {
  if (phone.startsWith('tel:')) return phone;
  const digits = phone.replace(/[\s.-]/g, '');
  return 'tel:' + (digits.startsWith('00') ? '+' + digits.slice(2) : digits);
}
async function sendSmsViaOrange(cfg, toPhone, message) {
  const token = await orangeGetToken(cfg);
  const sender = toTelUri(cfg.senderAddress);
  const address = toTelUri(toPhone);
  let res, data;
  try {
    res = await fetch(`https://api.orange.com/smsmessaging/v1/outbound/${encodeURIComponent(sender)}/requests`, {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        outboundSMSMessageRequest: { address: [address], senderAddress: sender, outboundSMSTextMessage: { message } },
      }),
    });
    data = await res.json().catch(() => ({}));
  } catch (e) {
    throw new Error('Impossible de contacter Orange : ' + e.message);
  }
  if (!res.ok) {
    // The human-readable detail (e.g. "Expired contract...") lives in
    // `variables[0]`, not `text` — `text` is just the generic
    // "A policy error occurred. Error code is %1" template string.
    const exc = (data.requestError && (data.requestError.serviceException || data.requestError.policyException)) || {};
    const detail = (Array.isArray(exc.variables) && exc.variables[0]) || exc.text;
    throw new Error(detail || 'Erreur Orange SMS (' + res.status + ')');
  }
}

loadAllTenants();

// ---------- Helpers ----------
function uid(prefix) {
  return prefix + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}
// Establishment info shown on printed receipts (company name/address/phone/
// email/tax id + logo) — per-tenant, blank by default rather than fabricated,
// same as every other per-tenant field.
function defaultSettings(companyName) {
  return {
    companyName: companyName || '', address: '', phone: '', email: '', taxId: '', logo: '',
    // Used by the printable A4 "Facture" (see POST-checkout invoice view in
    // app.js) — NCC/régime/centre des impôts/RIB have no sensible fallback,
    // left blank until the shop fills them in rather than fabricated.
    ncc: '', taxRegime: '', taxCenter: '', bankDetails: '', vatRate: 0,
  };
}
// A data: URI logo is stored inline in the tenant's JSON (no file storage in
// this zero-dependency app) — capped well under readJSONBody's 1MB request
// cap so an oversized upload gets a clean 400 instead of the request being
// silently destroyed mid-read.
const MAX_LOGO_LENGTH = 700000;
// Same data:-URI-inline, same-order-of-magnitude cap as the logo above,
// just per-product instead of per-tenant. Product create/update use the
// default 1MB readJSONBody cap, so this leaves headroom for the rest of
// a normal product payload alongside the image.
const MAX_PRODUCT_IMAGE_LENGTH = 700000;
function sendJSON(res, status, data) {
  const body = JSON.stringify(data);
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(body);
}
// maxBytes defaults to 1MB, plenty for every normal request body in this
// app; POST /api/products/import passes a higher cap since a few thousand
// rows of repeated-key JSON (categoryName, supplierName, stockByDepotName
// per row) can plausibly exceed that even though the same data as compact
// CSV wouldn't. Overflow used to just req.destroy() — a dead connection
// with no client-visible error. Rejecting as soon as the limit is hit
// doesn't actually fix that: Node destroys a keep-alive socket itself
// whenever a response ends before its request body has been fully read
// (it has no way to safely reuse the socket otherwise), so the client
// still just sees a reset. The fix is to keep draining and discarding
// incoming chunks (bounded memory — `chunks` is only reset once, not
// left growing) until the real `end` event, and only reject then, so the
// request is always fully consumed before sendJSON's response goes out.
function readJSONBody(req, maxBytes = 1e6) {
  return new Promise((resolve, reject) => {
    let chunks = '';
    let overflowed = false;
    req.on('data', (c) => {
      if (overflowed) return;
      chunks += c;
      if (chunks.length > maxBytes) { overflowed = true; chunks = ''; }
    });
    req.on('end', () => {
      if (overflowed) return reject(new Error('Fichier trop volumineux'));
      if (!chunks) return resolve({});
      try { resolve(JSON.parse(chunks)); } catch (e) { reject(e); }
    });
    req.on('error', (e) => { if (!overflowed) reject(e); });
  });
}
function stockAt(product, depotId) {
  return (product.stockByDepot && product.stockByDepot[depotId]) || 0;
}
// Resolves the unit price and base-unit multiplier for a cart line's sale
// unit ('pack'/'carton'), falling back to the per-unit ('detail') price if
// the product doesn't have that packaging configured.
function packagingInfo(product, unit) {
  if (unit === 'pack' && product.unitsPerPack > 0) return { price: product.pricePerPack, multiplier: product.unitsPerPack };
  if (unit === 'carton' && product.unitsPerCarton > 0) return { price: product.pricePerCarton, multiplier: product.unitsPerCarton };
  return { price: product.price, multiplier: 1 };
}
// Builds a sale record from a cart, shared by the normal online POST
// /api/checkout and the offline-sync endpoint. The two modes genuinely
// differ (not just a flag on identical logic), so they're kept as separate
// blocks rather than unified line-by-line:
//   - tolerateNegativeStock:false (normal online sale) — prices every line
//     LIVE from current server data (packagingInfo), pre-validates the whole
//     cart and rejects with an error before mutating anything if any line is
//     out of stock or the request is malformed. This is byte-for-byte the
//     same behavior /api/checkout always had.
//   - tolerateNegativeStock:true (offline sync) — the sale already happened
//     out in the shop while offline; rejecting it now would be a real data
//     loss, not a validation nicety. So it trusts the client's own snapshot
//     of each line (name/unitPrice/lineTotal/qty/baseQty, computed at the
//     moment of the offline sale — reusing today's live price would make the
//     recorded sale disagree with what the customer's receipt actually
//     showed) and only uses the live product record to deduct stock, letting
//     it go negative and flagging the line with stockConflict when it does
//     (or when the product was deleted before sync — its snapshot fields are
//     kept instead of aborting the whole sale).
function buildSaleFromCart(db, depot, body, opts) {
  const tolerateNegativeStock = !!(opts && opts.tolerateNegativeStock);
  const cart = Array.isArray(body.cart) ? body.cart : [];
  if (cart.length === 0) return { error: 'Panier vide' };
  const paymentMethod = body.paymentMethod || 'Espèces';
  if (paymentMethod === 'Crédit' && !body.clientId) {
    return { error: 'Un client est requis pour une vente à crédit' };
  }

  let items, total, advance = 0;

  if (!tolerateNegativeStock) {
    // Validate the whole cart before mutating anything.
    let precomputedTotal = 0;
    for (const ci of cart) {
      const product = db.products.find((p) => p.id === ci.productId);
      if (!product) return { error: 'Produit introuvable : ' + ci.productId };
      const pkg = packagingInfo(product, ci.unit);
      const baseQty = ci.qty * pkg.multiplier;
      if (ci.qty <= 0 || baseQty > stockAt(product, depot.id)) {
        return { error: 'Stock insuffisant pour ' + product.name + ' au ' + depot.name, status: 409 };
      }
      precomputedTotal += pkg.price * ci.qty;
    }
    if (paymentMethod === 'Crédit') {
      advance = Number(body.advance) || 0;
      if (advance < 0) return { error: 'Avance invalide' };
      if (advance > precomputedTotal) return { error: "L'avance ne peut pas dépasser le total de la vente" };
    }

    total = 0;
    items = cart.map((ci) => {
      const product = db.products.find((p) => p.id === ci.productId);
      const pkg = packagingInfo(product, ci.unit);
      const baseQty = ci.qty * pkg.multiplier;
      product.stockByDepot[depot.id] = stockAt(product, depot.id) - baseQty;
      product.sold += baseQty;
      const lineTotal = pkg.price * ci.qty;
      total += lineTotal;
      return { productId: product.id, name: product.name, unit: ci.unit || 'detail', qty: ci.qty, unitPrice: pkg.price, lineTotal, baseQty };
    });
  } else {
    total = 0;
    items = cart.map((ci) => {
      const product = db.products.find((p) => p.id === ci.productId);
      const baseQty = Number(ci.baseQty) || 0;
      let stockConflict = false;
      if (product) {
        const available = stockAt(product, depot.id);
        if (baseQty > available) stockConflict = true;
        product.stockByDepot[depot.id] = available - baseQty;
        product.sold += baseQty;
      } else {
        stockConflict = true; // product deleted before this offline sale synced
      }
      const qty = Number(ci.qty) || 0;
      const unitPrice = Number(ci.unitPrice) || 0;
      const lineTotal = Number(ci.lineTotal) || unitPrice * qty;
      total += lineTotal;
      return {
        productId: ci.productId, name: ci.name || (product && product.name) || 'Produit supprimé',
        unit: ci.unit || 'detail', qty, unitPrice, lineTotal, baseQty, stockConflict,
      };
    });
    if (paymentMethod === 'Crédit') {
      // Already validated client-side at the moment of the offline sale
      // (same rule as the online path) — clamp defensively rather than
      // reject, since an offline sale must never be refused after the fact.
      advance = Math.min(Math.max(Number(body.advance) || 0, 0), total);
    }
  }

  let clientName = '';
  if (body.clientId) {
    const client = db.clients.find((c) => c.id === body.clientId);
    if (client) {
      clientName = client.name;
      client.points += Math.floor(total / 100);
      client.totalSpent += total;
    }
  }

  const sale = {
    id: uid('sale'),
    date: (tolerateNegativeStock && body.clientDate) || new Date().toISOString(),
    cashier: body.cashier || 'Caissier',
    depotId: depot.id,
    depotName: depot.name,
    clientId: body.clientId || '',
    clientName,
    itemCount: items.reduce((a, it) => a + it.baseQty, 0),
    total,
    paymentMethod,
    items,
  };
  if (tolerateNegativeStock && items.some((it) => it.stockConflict)) sale.stockConflict = true;
  if (paymentMethod === 'Crédit') {
    sale.creditPaid = advance;
    sale.creditRemaining = total - advance;
    sale.creditPayments = advance > 0 ? [{ id: uid('pay'), date: sale.date, amount: advance }] : [];
  }
  return { sale };
}
// True if removing/demoting/deactivating employeeId would leave zero active Gérant accounts.
function lastActiveManager(db, employeeId) {
  return db.employees.filter((e) => e.role === 'Gérant' && e.active && e.id !== employeeId).length === 0;
}
// "Gérant" is the only role string that grants manager-level permissions
// (see the login handler: `role === 'Gérant' ? 'manager' : 'cashier'`).
// Every other value — Caissier, or any of the job-title options the client
// offers on the Employés page (Employé, Chauffeur, Magasinier, ... or a
// free-text "Autre" entry) — is just a roster label and always maps to
// cashier-level access, so this only needs to protect the "Gérant" string
// itself; anything else the client sends is trusted as-is (falling back to
// "Caissier" only when nothing usable was sent at all).
function resolveEmployeeRole(rawRole) {
  if (rawRole === 'Gérant') return 'Gérant';
  const trimmed = String(rawRole || '').trim();
  return trimmed || 'Caissier';
}
function hashPassword(password, salt) {
  salt = salt || crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return { passwordSalt: salt, passwordHash: hash };
}
function verifyPassword(password, salt, hash) {
  if (!salt || !hash) return false;
  const check = crypto.scryptSync(password, salt, 64).toString('hex');
  const a = Buffer.from(check, 'hex'), b = Buffer.from(hash, 'hex');
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}
// Strips credential fields before an employee record ever leaves the server.
function publicEmployee(e) {
  const { passwordHash, passwordSalt, ...rest } = e;
  return rest;
}
// isManager gates db.expenses (contains Salaires/payroll entries) out of the
// payload for cashiers — the Dépenses nav screen is already hidden from them
// client-side, but /api/state used to send the raw data anyway to anyone with
// valid cashier credentials.
function publicState(db, isManager) {
  const state = Object.assign({}, db, { employees: db.employees.map(publicEmployee), fneConfig: publicFneConfig(db), messagingConfig: publicMessagingConfig(db) });
  if (!isManager) {
    state.expenses = [];
    // Cost (prix d'achat) is margin/business data — cashiers get read-only
    // stock visibility (see MANAGER_ONLY below) but must never see it, not
    // even via the network response for a hidden UI field.
    state.products = db.products.map((p) => { const { cost, ...rest } = p; return rest; });
  }
  return state;
}
// Finds which tenant a login username (phone or name, case-insensitive)
// belongs to. Login has no separate "shop code" field by design — phone
// numbers are enforced unique across every tenant at employee-creation time
// (see POST /api/employees and POST /api/admin/tenants) specifically so this
// lookup is unambiguous. Name-based login keeps the same best-effort
// small-team assumption it always had, just platform-wide now instead of
// per-shop.
function findEmployeeAcrossTenants(username) {
  for (const [tenantId, db] of tenants) {
    const employee = db.employees.find((e) =>
      e.phone === username || e.name.toLowerCase() === username.toLowerCase());
    if (employee) return { tenantId, db, employee };
  }
  return null;
}
function phoneUsedByAnyTenant(phone) {
  if (!phone) return false;
  for (const db of tenants.values()) {
    if (db.employees.some((e) => e.phone === phone)) return true;
  }
  return false;
}
function checkAdminSecret(req) {
  if (!ADMIN_SECRET) return false;
  const provided = String(req.headers['x-admin-secret'] || '');
  const a = Buffer.from(provided);
  const b = Buffer.from(ADMIN_SECRET);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

// ---------- Sessions ----------
// In-memory only (no DB table): sessions are lost on server restart, which
// just forces everyone to log in again — acceptable since the client never
// persisted login across a page reload anyway (see app.js: authToken lives
// in a JS variable, never localStorage).
const sessions = new Map(); // token -> { tenantId, employeeId, role, createdAt }
const SESSION_TTL_MS = 12 * 60 * 60 * 1000; // 12h
function createSession(tenantId, employee) {
  const token = crypto.randomBytes(32).toString('hex');
  sessions.set(token, {
    tenantId,
    employeeId: employee.id,
    role: employee.role === 'Gérant' ? 'manager' : 'cashier',
    createdAt: Date.now(),
  });
  return token;
}
function getSession(req) {
  const header = req.headers['authorization'] || '';
  const match = header.match(/^Bearer (.+)$/);
  if (!match) return null;
  const token = match[1];
  const session = sessions.get(token);
  if (!session) return null;
  if (Date.now() - session.createdAt > SESSION_TTL_MS) { sessions.delete(token); return null; }
  return { token, tenantId: session.tenantId, employeeId: session.employeeId, role: session.role };
}

const CAT_PALETTE = ['#c1440e', '#b8862f', '#2f7f9e', '#d9812f', '#7d3b56', '#5a4a34', '#c99a2e', '#3b6e5c', '#4a6fa5', '#8a5a83'];

// ---------- API ----------
async function handleApi(req, res, pathname) {
  const method = req.method;

  if (pathname === '/api/login' && method === 'POST') {
    const body = await readJSONBody(req);
    const username = (body.username || '').trim();
    const password = body.password || '';
    if (!username || !password) return sendJSON(res, 400, { error: 'Identifiant et mot de passe requis' });
    const found = findEmployeeAcrossTenants(username);
    if (!found || !verifyPassword(password, found.employee.passwordSalt, found.employee.passwordHash)) {
      return sendJSON(res, 401, { error: 'Identifiant ou mot de passe incorrect' });
    }
    const { tenantId, employee } = found;
    if (!employee.active) return sendJSON(res, 403, { error: 'Ce compte est désactivé' });
    const role = employee.role === 'Gérant' ? 'manager' : 'cashier';
    if (body.expectedRole && body.expectedRole !== role) {
      return sendJSON(res, 403, { error: `Ce compte est un compte ${employee.role}. Utilisez le bouton correspondant.` });
    }
    const token = createSession(tenantId, employee);
    return sendJSON(res, 200, { token, role, userId: employee.id, userName: employee.name, depotId: employee.depotId });
  }

  // Owner-only shop management — a separate auth mechanism (shared secret
  // header, not a session token) since it isn't scoped to any one tenant.
  // Disabled entirely unless ADMIN_SECRET is configured server-side.
  if (pathname === '/api/admin/tenants' && method === 'POST') {
    if (!checkAdminSecret(req)) return sendJSON(res, 403, { error: 'Non autorisé' });
    const body = await readJSONBody(req);
    const shopName = (body.shopName || '').trim();
    const managerName = (body.managerName || '').trim();
    const managerPhone = (body.managerPhone || '').trim();
    const managerPassword = body.managerPassword || '';
    if (!shopName || !managerName || !managerPhone) return sendJSON(res, 400, { error: 'shopName, managerName et managerPhone sont requis' });
    if (managerPassword.length < 4) return sendJSON(res, 400, { error: 'Mot de passe trop court (4 caractères minimum)' });
    if (phoneUsedByAnyTenant(managerPhone)) return sendJSON(res, 409, { error: 'Ce numéro de téléphone est déjà utilisé sur une autre boutique' });
    const tenantId = uid('t');
    const managerEmployee = Object.assign(
      { id: uid('e'), name: managerName, role: 'Gérant', phone: managerPhone, active: true, depotId: null },
      hashPassword(managerPassword)
    );
    const newDb = {
      depots: [{ id: 'd1', name: 'Dépôt principal', address: '' }],
      categories: [], suppliers: [], products: [], clients: [],
      employees: [managerEmployee], sales: [], expenses: [], messageLog: [],
      settings: defaultSettings(shopName), fneConfig: defaultFneConfig(), messagingConfig: defaultMessagingConfig(),
    };
    tenants.set(tenantId, newDb);
    tenantsMeta.push({ id: tenantId, name: shopName, createdAt: new Date().toISOString() });
    saveTenant(tenantId);
    saveTenantsMeta();
    return sendJSON(res, 201, { tenantId, shopName });
  }
  if (pathname === '/api/admin/tenants' && method === 'GET') {
    if (!checkAdminSecret(req)) return sendJSON(res, 403, { error: 'Non autorisé' });
    return sendJSON(res, 200, tenantsMeta.map((t) => ({
      id: t.id, name: t.name, createdAt: t.createdAt,
      employeeCount: (tenants.get(t.id) || { employees: [] }).employees.length,
    })));
  }

  // Every route below requires a valid session — the app has no anonymous
  // read/write access at all. Without this, anyone who can reach the server
  // (guaranteed once it's hosted publicly, not just on the shop's own PC)
  // could read the full database or mutate it via /api/state and friends
  // without ever logging in.
  const session = getSession(req);
  if (!session) return sendJSON(res, 401, { error: 'Session invalide ou expirée. Veuillez vous reconnecter.' });
  const db = tenants.get(session.tenantId);
  if (!db) { sessions.delete(session.token); return sendJSON(res, 401, { error: 'Session invalide ou expirée. Veuillez vous reconnecter.' }); }
  const currentUser = db.employees.find((e) => e.id === session.employeeId);
  if (!currentUser || !currentUser.active) {
    sessions.delete(session.token);
    return sendJSON(res, 401, { error: 'Session invalide ou expirée. Veuillez vous reconnecter.' });
  }
  const isManager = session.role === 'manager';
  // Mirrors NAV_ITEMS' managerOnly flags in app.js (Dépôts, Fournisseurs,
  // Employés, Dépenses) plus stock-transfer, which is manager-gated the
  // same way client-side, plus every product-catalog/stock-quantity mutation
  // (cashiers get read-only stock visibility, no changes at all). Every
  // other route stays open to both roles.
  const MANAGER_ONLY = [
    pathname === '/api/depots' && method === 'POST',
    pathname === '/api/suppliers' && method === 'POST',
    pathname === '/api/employees' && method === 'POST',
    pathname === '/api/stock-transfer' && method === 'POST',
    pathname === '/api/expenses' && method === 'POST',
    pathname === '/api/settings' && method === 'PATCH',
    pathname === '/api/fne/config' && method === 'PATCH',
    pathname === '/api/messaging/config' && method === 'PATCH',
    /^\/api\/employees\/[^/]+(\/toggle)?$/.test(pathname) && method !== 'GET',
    // Cashiers get read-only stock visibility: no add/edit/delete on the
    // catalog and no quantity adjustments (the stepper/restock endpoint
    // below), full stop — not just the pre-existing delete/transfer/import
    // gates.
    pathname === '/api/products' && method === 'POST',
    /^\/api\/products\/[^/]+$/.test(pathname) && method === 'PATCH',
    /^\/api\/products\/[^/]+$/.test(pathname) && method === 'DELETE',
    /^\/api\/products\/[^/]+\/stock$/.test(pathname) && method === 'PATCH',
    // Client edit stays open to both roles (routine contact-info fixes,
    // same tier as product edit); delete is manager-gated like product
    // delete — removing a customer record entirely is more structurally
    // impactful than fixing their phone number.
    /^\/api\/clients\/[^/]+$/.test(pathname) && method === 'DELETE',
    // Redundant with the single-product POST gate above now that product
    // add/edit is manager-only too, but kept explicit rather than relying on
    // that overlap.
    pathname === '/api/products/import' && method === 'POST',
  ].some(Boolean);
  if (MANAGER_ONLY && !isManager) {
    return sendJSON(res, 403, { error: 'Action réservée au Gérant' });
  }

  if (pathname === '/api/logout' && method === 'POST') {
    sessions.delete(session.token);
    return sendJSON(res, 200, { ok: true });
  }

  if (pathname === '/api/state' && method === 'GET') {
    return sendJSON(res, 200, publicState(db, isManager));
  }

  if (pathname === '/api/change-password' && method === 'POST') {
    const body = await readJSONBody(req);
    // Always the logged-in user's own account — body.userId is ignored so a
    // session can never be used to change someone else's password.
    const employee = currentUser;
    if (!verifyPassword(body.currentPassword || '', employee.passwordSalt, employee.passwordHash)) {
      return sendJSON(res, 401, { error: 'Mot de passe actuel incorrect' });
    }
    const newPassword = body.newPassword || '';
    if (newPassword.length < 4) return sendJSON(res, 400, { error: 'Le nouveau mot de passe doit contenir au moins 4 caractères' });
    Object.assign(employee, hashPassword(newPassword));
    saveTenant(session.tenantId);
    return sendJSON(res, 200, { ok: true });
  }

  if (pathname === '/api/depots' && method === 'POST') {
    const body = await readJSONBody(req);
    const name = (body.name || '').trim();
    if (!name) return sendJSON(res, 400, { error: 'Nom requis' });
    const depot = { id: uid('d'), name, address: body.address || '' };
    db.depots.push(depot);
    saveTenant(session.tenantId);
    return sendJSON(res, 201, depot);
  }

  if (pathname === '/api/categories' && method === 'POST') {
    const body = await readJSONBody(req);
    const name = (body.name || '').trim();
    if (!name) return sendJSON(res, 400, { error: 'Nom requis' });
    const color = CAT_PALETTE[db.categories.length % CAT_PALETTE.length];
    const category = { id: uid('c'), name, color };
    db.categories.push(category);
    saveTenant(session.tenantId);
    return sendJSON(res, 201, category);
  }

  if (pathname === '/api/suppliers' && method === 'POST') {
    const body = await readJSONBody(req);
    const name = (body.name || '').trim();
    if (!name) return sendJSON(res, 400, { error: 'Nom requis' });
    const supplier = { id: uid('s'), name, phone: body.phone || '', email: body.email || '' };
    db.suppliers.push(supplier);
    saveTenant(session.tenantId);
    return sendJSON(res, 201, supplier);
  }

  if (pathname === '/api/clients' && method === 'POST') {
    const body = await readJSONBody(req);
    const name = (body.name || '').trim();
    if (!name) return sendJSON(res, 400, { error: 'Nom requis' });
    const client = { id: uid('cl'), name, phone: body.phone || '', email: (body.email || '').trim(), ncc: (body.ncc || '').trim(), points: 0, totalSpent: 0 };
    db.clients.push(client);
    saveTenant(session.tenantId);
    return sendJSON(res, 201, client);
  }

  const clientMatch = pathname.match(/^\/api\/clients\/([^/]+)$/);
  if (clientMatch && method === 'PATCH') {
    const client = db.clients.find((c) => c.id === clientMatch[1]);
    if (!client) return sendJSON(res, 404, { error: 'Client introuvable' });
    const body = await readJSONBody(req);
    if (body.name !== undefined) {
      const name = body.name.trim();
      if (!name) return sendJSON(res, 400, { error: 'Nom requis' });
      client.name = name;
    }
    if (body.phone !== undefined) client.phone = body.phone.trim();
    if (body.email !== undefined) client.email = body.email.trim();
    if (body.ncc !== undefined) client.ncc = body.ncc.trim();
    saveTenant(session.tenantId);
    return sendJSON(res, 200, client);
  }

  if (clientMatch && method === 'DELETE') {
    const client = db.clients.find((c) => c.id === clientMatch[1]);
    if (!client) return sendJSON(res, 404, { error: 'Client introuvable' });
    // A deleted client's name still lives on in sale.clientName (snapshotted
    // at checkout time, same as product name/price on sale.items) so past
    // receipts/history are unaffected — but an OPEN credit balance is only
    // ever surfaced by looking the client back up from db.clients (Clients'
    // "Crédit en cours" column, the Notifications screen's debtor list), so
    // deleting the client record would make a real, still-owed debt
    // invisible everywhere except the raw Crédits sales list. Blocked,
    // mirroring the existing "can't delete the last active Gérant" guard.
    const owed = db.sales
      .filter((sa) => sa.clientId === client.id && sa.paymentMethod === 'Crédit')
      .reduce((a, sa) => a + (sa.creditRemaining || 0), 0);
    if (owed > 0) {
      return sendJSON(res, 409, { error: `Impossible de supprimer ce client : il a un crédit en cours de ${Math.round(owed)} FCFA. Réglez le solde d'abord.` });
    }
    db.clients = db.clients.filter((c) => c.id !== client.id);
    saveTenant(session.tenantId);
    return sendJSON(res, 200, { ok: true });
  }

  if (pathname === '/api/employees' && method === 'POST') {
    const body = await readJSONBody(req);
    const name = (body.name || '').trim();
    if (!name) return sendJSON(res, 400, { error: 'Nom requis' });
    const password = body.password || '';
    if (password.length < 4) return sendJSON(res, 400, { error: 'Mot de passe trop court (4 caractères minimum)' });
    const phone = (body.phone || '').trim();
    // Phone must be unique across ALL tenants, not just this one — login
    // has no separate shop-code field, so it's what resolves which shop an
    // employee belongs to (see findEmployeeAcrossTenants above).
    if (phoneUsedByAnyTenant(phone)) return sendJSON(res, 409, { error: 'Ce numéro de téléphone est déjà utilisé par un autre employé' });
    const role = resolveEmployeeRole(body.role);
    const employee = Object.assign({
      id: uid('e'), name, role, phone, active: true,
      depotId: body.depotId || null,
    }, hashPassword(password));
    db.employees.push(employee);
    saveTenant(session.tenantId);
    return sendJSON(res, 201, publicEmployee(employee));
  }

  const empToggleMatch = pathname.match(/^\/api\/employees\/([^/]+)\/toggle$/);
  if (empToggleMatch && method === 'PATCH') {
    const employee = db.employees.find((e) => e.id === empToggleMatch[1]);
    if (!employee) return sendJSON(res, 404, { error: 'Employé introuvable' });
    if (employee.active && employee.role === 'Gérant' && lastActiveManager(db, employee.id)) {
      return sendJSON(res, 409, { error: 'Impossible de désactiver le dernier compte Gérant actif' });
    }
    employee.active = !employee.active;
    saveTenant(session.tenantId);
    return sendJSON(res, 200, publicEmployee(employee));
  }

  const empUpdateMatch = pathname.match(/^\/api\/employees\/([^/]+)$/);
  if (empUpdateMatch && method === 'PATCH') {
    const employee = db.employees.find((e) => e.id === empUpdateMatch[1]);
    if (!employee) return sendJSON(res, 404, { error: 'Employé introuvable' });
    const body = await readJSONBody(req);
    if (body.name !== undefined) {
      const name = body.name.trim();
      if (!name) return sendJSON(res, 400, { error: 'Nom requis' });
      employee.name = name;
    }
    if (body.role !== undefined) {
      const newRole = resolveEmployeeRole(body.role);
      if (employee.role === 'Gérant' && newRole !== 'Gérant' && employee.active && lastActiveManager(db, employee.id)) {
        return sendJSON(res, 409, { error: 'Impossible de rétrograder le dernier compte Gérant actif' });
      }
      employee.role = newRole;
    }
    if (body.phone !== undefined) {
      const phone = body.phone.trim();
      if (phone && phone !== employee.phone && phoneUsedByAnyTenant(phone)) {
        return sendJSON(res, 409, { error: 'Ce numéro de téléphone est déjà utilisé par un autre employé' });
      }
      employee.phone = phone;
    }
    if (body.depotId !== undefined) employee.depotId = body.depotId || null;
    saveTenant(session.tenantId);
    return sendJSON(res, 200, publicEmployee(employee));
  }

  if (empUpdateMatch && method === 'DELETE') {
    const employee = db.employees.find((e) => e.id === empUpdateMatch[1]);
    if (!employee) return sendJSON(res, 404, { error: 'Employé introuvable' });
    if (employee.active && employee.role === 'Gérant' && lastActiveManager(db, employee.id)) {
      return sendJSON(res, 409, { error: 'Impossible de supprimer le dernier compte Gérant actif' });
    }
    db.employees = db.employees.filter((e) => e.id !== employee.id);
    saveTenant(session.tenantId);
    return sendJSON(res, 200, { ok: true });
  }

  if (pathname === '/api/products' && method === 'POST') {
    const body = await readJSONBody(req);
    const name = (body.name || '').trim();
    if (!name) return sendJSON(res, 400, { error: 'Nom requis' });
    const scannedBarcode = (body.barcode || '').trim();
    if (scannedBarcode && db.products.some((p) => p.barcode === scannedBarcode)) {
      return sendJSON(res, 400, { error: 'Ce code-barres est déjà utilisé par un autre produit' });
    }
    if (typeof body.image === 'string' && body.image.length > MAX_PRODUCT_IMAGE_LENGTH) {
      return sendJSON(res, 400, { error: 'Image trop volumineuse (taille maximale ~500 Ko)' });
    }
    const initialDepotId = body.depotId || (db.depots[0] && db.depots[0].id) || '';
    const stockByDepot = {};
    db.depots.forEach((d) => { stockByDepot[d.id] = d.id === initialDepotId ? (Number(body.stock) || 0) : 0; });
    const product = {
      id: uid('p'), name,
      categoryId: body.categoryId || (db.categories[0] && db.categories[0].id) || '',
      supplierId: body.supplierId || (db.suppliers[0] && db.suppliers[0].id) || '',
      price: Number(body.price) || 0,
      cost: Number(body.cost) || 0,
      stockByDepot,
      minStock: Number(body.minStock) || 10,
      sold: 0,
      barcode: scannedBarcode || uid('bc').slice(0, 13),
      unitsPerPack: Number(body.unitsPerPack) || 0,
      pricePerPack: Number(body.pricePerPack) || 0,
      unitsPerCarton: Number(body.unitsPerCarton) || 0,
      pricePerCarton: Number(body.pricePerCarton) || 0,
      image: typeof body.image === 'string' ? body.image : '',
      location: (body.location || '').trim(),
      weight: Number(body.weight) || 0,
    };
    db.products.push(product);
    saveTenant(session.tenantId);
    return sendJSON(res, 201, product);
  }

  const productUpdateMatch = pathname.match(/^\/api\/products\/([^/]+)$/);
  if (productUpdateMatch && method === 'PATCH') {
    const product = db.products.find((p) => p.id === productUpdateMatch[1]);
    if (!product) return sendJSON(res, 404, { error: 'Produit introuvable' });
    const body = await readJSONBody(req);
    if (body.name !== undefined) {
      const name = body.name.trim();
      if (!name) return sendJSON(res, 400, { error: 'Nom requis' });
      product.name = name;
    }
    if (body.barcode !== undefined) {
      const barcode = body.barcode.trim();
      if (barcode && db.products.some((p) => p.barcode === barcode && p.id !== product.id)) {
        return sendJSON(res, 400, { error: 'Ce code-barres est déjà utilisé par un autre produit' });
      }
      if (barcode) product.barcode = barcode;
    }
    if (body.categoryId !== undefined) product.categoryId = body.categoryId;
    if (body.supplierId !== undefined) product.supplierId = body.supplierId;
    if (body.price !== undefined) product.price = Number(body.price) || 0;
    if (body.cost !== undefined) product.cost = Number(body.cost) || 0;
    if (body.minStock !== undefined) product.minStock = Number(body.minStock) || 0;
    if (body.unitsPerPack !== undefined) product.unitsPerPack = Number(body.unitsPerPack) || 0;
    if (body.pricePerPack !== undefined) product.pricePerPack = Number(body.pricePerPack) || 0;
    if (body.unitsPerCarton !== undefined) product.unitsPerCarton = Number(body.unitsPerCarton) || 0;
    if (body.pricePerCarton !== undefined) product.pricePerCarton = Number(body.pricePerCarton) || 0;
    if (body.location !== undefined) product.location = String(body.location).trim();
    if (body.weight !== undefined) product.weight = Number(body.weight) || 0;
    if (body.image !== undefined) {
      // Unlike barcode above, an empty string is a valid, intentional value
      // here (the form's "Supprimer l'image" link) — same write-and-clear
      // convention as the Établissement logo, not the "blank = untouched"
      // rule most other fields on this route follow.
      if (typeof body.image === 'string' && body.image.length > MAX_PRODUCT_IMAGE_LENGTH) {
        return sendJSON(res, 400, { error: 'Image trop volumineuse (taille maximale ~500 Ko)' });
      }
      product.image = typeof body.image === 'string' ? body.image : '';
    }
    saveTenant(session.tenantId);
    return sendJSON(res, 200, product);
  }

  if (productUpdateMatch && method === 'DELETE') {
    const product = db.products.find((p) => p.id === productUpdateMatch[1]);
    if (!product) return sendJSON(res, 404, { error: 'Produit introuvable' });
    // Safe to remove even with sale history: checkout snapshots name/price/
    // qty into sale.items at sale time (see POST /api/checkout), so past
    // sales never look the product up live and don't break on deletion.
    db.products = db.products.filter((p) => p.id !== product.id);
    saveTenant(session.tenantId);
    return sendJSON(res, 200, { ok: true });
  }

  if (pathname === '/api/products/import' && method === 'POST') {
    const body = await readJSONBody(req, 8e6);
    const rows = Array.isArray(body.rows) ? body.rows : [];
    const byName = (list) => (name) => {
      const key = String(name || '').trim().toLowerCase();
      if (!key) return null;
      return list.find((x) => x.name.trim().toLowerCase() === key) || null;
    };
    const findCategory = byName(db.categories);
    const findSupplier = byName(db.suppliers);
    const findDepot = byName(db.depots);

    // Depot-column mismatches are collected once (by name, not per-row) so a
    // typo'd "Stock <Depot>" header is surfaced rather than silently
    // discarding that column's data for every row with zero trace.
    const unmatchedDepotNames = new Set();
    rows.forEach((r) => {
      Object.keys(r.stockByDepotName || {}).forEach((depotName) => {
        if (!findDepot(depotName)) unmatchedDepotNames.add(depotName);
      });
    });

    let created = 0, updated = 0;
    const errors = [];

    rows.forEach((row, idx) => {
      try {
        // Name is only required to CREATE a product — an update row (valid
        // ID) may reasonably touch just price/stock/etc. and leave the name
        // column blank, same "blank = untouched" rule as every other field.
        // Resolving id-vs-not comes before the name check for exactly this
        // reason (a naive "require name unconditionally, then resolve id"
        // ordering would wrongly reject a perfectly valid partial-update row).
        let product = null;
        const rowId = String(row.id || '').trim();
        if (rowId) {
          product = db.products.find((p) => p.id === rowId);
          if (!product) throw new Error('ID inconnu — laissez la colonne ID vide pour créer un nouveau produit');
        }
        const name = String(row.name || '').trim();
        if (!product && !name) throw new Error('Nom requis');

        // Bulk import deliberately REJECTS a bad numeric cell rather than
        // silently coercing it to 0 like the single-product form does
        // (Number(x) || 0) — that's fine for one field typed by hand, but
        // would silently zero out a garbled price across a whole file here.
        const parseNum = (val, label) => {
          if (val === undefined || val === null || val === '') return undefined;
          const n = Number(val);
          if (!Number.isFinite(n) || n < 0) throw new Error(`${label} invalide`);
          return n;
        };
        const price = parseNum(row.price, 'Prix vente');
        const cost = parseNum(row.cost, 'Prix achat');
        const minStock = parseNum(row.minStock, 'Stock minimum');
        const unitsPerPack = parseNum(row.unitsPerPack, 'Unités/Paquet');
        const pricePerPack = parseNum(row.pricePerPack, 'Prix Paquet');
        const unitsPerCarton = parseNum(row.unitsPerCarton, 'Unités/Carton');
        const pricePerCarton = parseNum(row.pricePerCarton, 'Prix Carton');

        const location = row.location !== undefined ? String(row.location).trim() : undefined;
        const weight = parseNum(row.weight, 'Poids');
        const barcode = row.barcode !== undefined ? String(row.barcode).trim() : undefined;
        if (barcode) {
          const clash = db.products.find((p) => p.barcode === barcode && (!product || p.id !== product.id));
          if (clash) throw new Error('Ce code-barres est déjà utilisé par un autre produit');
        }

        // Category/supplier are resolved (and auto-created) LAST, only once
        // every other validation on this row has already passed — a row
        // that fails for some other reason should never leave an orphan
        // category/supplier behind just because it also named a new one.
        let categoryId, supplierId;
        if (row.categoryName !== undefined && String(row.categoryName).trim()) {
          let cat = findCategory(row.categoryName);
          if (!cat) {
            cat = { id: uid('c'), name: String(row.categoryName).trim(), color: CAT_PALETTE[db.categories.length % CAT_PALETTE.length] };
            db.categories.push(cat);
          }
          categoryId = cat.id;
        }
        if (row.supplierName !== undefined && String(row.supplierName).trim()) {
          let sup = findSupplier(row.supplierName);
          if (!sup) {
            sup = { id: uid('s'), name: String(row.supplierName).trim(), phone: '', email: '' };
            db.suppliers.push(sup);
          }
          supplierId = sup.id;
        }

        if (product) {
          // Update: every field is independently optional, same convention
          // as PATCH /api/products/:id — a blank cell means "leave this
          // untouched," never "clear it," so a routine "bulk-update prices
          // only" re-import can't silently wipe stock or packaging.
          if (name) product.name = name;
          if (barcode) product.barcode = barcode;
          if (categoryId !== undefined) product.categoryId = categoryId;
          if (supplierId !== undefined) product.supplierId = supplierId;
          if (price !== undefined) product.price = price;
          if (cost !== undefined) product.cost = cost;
          if (minStock !== undefined) product.minStock = minStock;
          if (unitsPerPack !== undefined) product.unitsPerPack = unitsPerPack;
          if (pricePerPack !== undefined) product.pricePerPack = pricePerPack;
          if (unitsPerCarton !== undefined) product.unitsPerCarton = unitsPerCarton;
          if (pricePerCarton !== undefined) product.pricePerCarton = pricePerCarton;
          if (location !== undefined) product.location = location;
          if (weight !== undefined) product.weight = weight;
          Object.keys(row.stockByDepotName || {}).forEach((depotName) => {
            const val = row.stockByDepotName[depotName];
            if (val === undefined || val === null || val === '') return; // blank = untouched
            const depot = findDepot(depotName);
            if (!depot) return; // already reported once in `warnings`
            const qty = Number(val);
            if (!Number.isFinite(qty) || qty < 0) throw new Error(`Stock ${depotName} invalide`);
            product.stockByDepot[depot.id] = qty;
          });
          updated++;
        } else {
          const stockByDepot = {};
          db.depots.forEach((d) => { stockByDepot[d.id] = 0; });
          Object.keys(row.stockByDepotName || {}).forEach((depotName) => {
            const depot = findDepot(depotName);
            if (!depot) return;
            const val = row.stockByDepotName[depotName];
            const qty = val === undefined || val === null || val === '' ? 0 : Number(val);
            if (!Number.isFinite(qty) || qty < 0) throw new Error(`Stock ${depotName} invalide`);
            stockByDepot[depot.id] = qty;
          });
          db.products.push({
            id: uid('p'), name,
            categoryId: categoryId || (db.categories[0] && db.categories[0].id) || '',
            supplierId: supplierId || (db.suppliers[0] && db.suppliers[0].id) || '',
            price: price || 0, cost: cost || 0, stockByDepot,
            minStock: minStock === undefined ? 10 : minStock,
            sold: 0,
            barcode: barcode || uid('bc').slice(0, 13),
            unitsPerPack: unitsPerPack || 0, pricePerPack: pricePerPack || 0,
            unitsPerCarton: unitsPerCarton || 0, pricePerCarton: pricePerCarton || 0,
            location: location || '', weight: weight || 0,
          });
          created++;
        }
      } catch (e) {
        // Row-scoped: anything thrown here — a validation error above, or
        // anything unexpected — becomes a row error and processing moves on
        // to the next row, rather than aborting the whole request. Without
        // this, an unhandled exception mid-loop would leave already-applied
        // mutations sitting in memory but never saved, until some unrelated
        // later request happened to call saveTenant() and silently flush a
        // batch the client was told had failed.
        errors.push({ row: idx + 1, error: e.message || 'Erreur inconnue' });
      }
    });

    if (created + updated > 0) saveTenant(session.tenantId);
    return sendJSON(res, 200, {
      created, updated, errors,
      warnings: [...unmatchedDepotNames].map((n) => `Colonne "Stock ${n}" ignorée — aucun dépôt de ce nom`),
    });
  }

  const stockMatch = pathname.match(/^\/api\/products\/([^/]+)\/stock$/);
  if (stockMatch && method === 'PATCH') {
    const body = await readJSONBody(req);
    const product = db.products.find((p) => p.id === stockMatch[1]);
    if (!product) return sendJSON(res, 404, { error: 'Produit introuvable' });
    const depotId = body.depotId;
    if (!depotId || !db.depots.some((d) => d.id === depotId)) return sendJSON(res, 400, { error: 'Dépôt invalide' });
    const delta = Number(body.delta) || 0;
    product.stockByDepot[depotId] = Math.max(0, stockAt(product, depotId) + delta);
    saveTenant(session.tenantId);
    return sendJSON(res, 200, product);
  }

  if (pathname === '/api/stock-transfer' && method === 'POST') {
    const body = await readJSONBody(req);
    const product = db.products.find((p) => p.id === body.productId);
    if (!product) return sendJSON(res, 400, { error: 'Produit introuvable' });
    const { fromDepotId, toDepotId } = body;
    const qty = Number(body.qty) || 0;
    if (!fromDepotId || !toDepotId || fromDepotId === toDepotId) return sendJSON(res, 400, { error: 'Dépôts invalides' });
    if (qty <= 0) return sendJSON(res, 400, { error: 'Quantité invalide' });
    if (stockAt(product, fromDepotId) < qty) return sendJSON(res, 409, { error: 'Stock insuffisant au dépôt source' });
    product.stockByDepot[fromDepotId] -= qty;
    product.stockByDepot[toDepotId] = stockAt(product, toDepotId) + qty;
    saveTenant(session.tenantId);
    return sendJSON(res, 200, product);
  }

  if (pathname === '/api/checkout' && method === 'POST') {
    const body = await readJSONBody(req);
    const depot = db.depots.find((d) => d.id === body.depotId);
    if (!depot) return sendJSON(res, 400, { error: 'Dépôt invalide' });
    const result = buildSaleFromCart(db, depot, body, { tolerateNegativeStock: false });
    if (result.error) return sendJSON(res, result.status || 400, { error: result.error });
    db.sales.unshift(result.sale);
    saveTenant(session.tenantId);
    return sendJSON(res, 201, { sale: result.sale });
  }

  const offlineSyncMatch = pathname === '/api/sync/offline-sales' && method === 'POST';
  if (offlineSyncMatch) {
    const body = await readJSONBody(req);
    const pending = Array.isArray(body.sales) ? body.sales : [];
    const results = [];
    const seenThisBatch = new Set();
    // Oldest-first, matching the client outbox's chronological order — every
    // other insertion point in this app unshifts under a newest-first
    // invariant, so processing oldest-to-newest and unshifting each one, in
    // order, is what keeps db.sales correctly ordered after a multi-sale batch.
    for (const saleBody of pending) {
      const offlineKey = saleBody.offlineKey;
      if (!offlineKey || seenThisBatch.has(offlineKey)) continue;
      seenThisBatch.add(offlineKey);
      // Idempotent: a retried batch (e.g. after a dropped connection mid-sync)
      // must never create a duplicate sale for a key already recorded.
      const existing = db.sales.find((s) => s.offlineKey === offlineKey);
      if (existing) { results.push({ offlineKey, sale: existing }); continue; }
      const depot = db.depots.find((d) => d.id === saleBody.depotId);
      if (!depot) { results.push({ offlineKey, error: 'Dépôt invalide' }); continue; }
      const result = buildSaleFromCart(db, depot, saleBody, { tolerateNegativeStock: true });
      if (result.error) { results.push({ offlineKey, error: result.error }); continue; }
      result.sale.offlineKey = offlineKey;
      db.sales.unshift(result.sale);
      results.push({ offlineKey, sale: result.sale });
    }
    saveTenant(session.tenantId);
    return sendJSON(res, 200, { results });
  }

  const creditPaymentMatch = pathname.match(/^\/api\/credit-sales\/([^/]+)\/payment$/);
  if (creditPaymentMatch && method === 'POST') {
    const sale = db.sales.find((s) => s.id === creditPaymentMatch[1]);
    if (!sale) return sendJSON(res, 404, { error: 'Vente introuvable' });
    if (sale.paymentMethod !== 'Crédit') return sendJSON(res, 400, { error: "Cette vente n'est pas une vente à crédit" });
    const body = await readJSONBody(req);
    const amount = Number(body.amount) || 0;
    if (amount <= 0) return sendJSON(res, 400, { error: 'Montant invalide' });
    if (amount > sale.creditRemaining) {
      return sendJSON(res, 400, { error: `Le montant dépasse le solde restant (${sale.creditRemaining.toLocaleString('fr-FR')} FCFA)` });
    }
    sale.creditPayments.push({ id: uid('pay'), date: new Date().toISOString(), amount });
    sale.creditPaid += amount;
    sale.creditRemaining -= amount;
    saveTenant(session.tenantId);
    return sendJSON(res, 200, sale);
  }

  if (pathname === '/api/expenses' && method === 'POST') {
    const body = await readJSONBody(req);
    const category = (body.category || '').trim();
    if (!category) return sendJSON(res, 400, { error: 'Catégorie requise' });
    const amount = Number(body.amount) || 0;
    if (amount <= 0) return sendJSON(res, 400, { error: 'Montant invalide' });
    const depot = db.depots.find((d) => d.id === body.depotId);
    if (!depot) return sendJSON(res, 400, { error: 'Dépôt invalide' });
    const expense = {
      id: uid('exp'),
      date: new Date().toISOString(),
      category,
      amount,
      note: (body.note || '').trim(),
      depotId: depot.id,
      depotName: depot.name,
      recordedBy: body.recordedBy || '',
    };
    db.expenses.unshift(expense);
    saveTenant(session.tenantId);
    return sendJSON(res, 201, expense);
  }

  // Records that a credit reminder or product-availability message was
  // composed and (per the shop's own confirmation) sent manually — there is
  // no SMS/email gateway wired up yet (Orange SMS API / Gmail are the
  // planned targets, pending real credentials), so this is a self-reported
  // communication log, not a delivery receipt. The client only ever offers
  // "copy the message" + "mark as sent" actions, never claims an automatic
  // send happened.
  if (pathname === '/api/messages/log' && method === 'POST') {
    const body = await readJSONBody(req);
    const type = body.type;
    if (type !== 'credit-reminder' && type !== 'availability') {
      return sendJSON(res, 400, { error: 'Type de message invalide' });
    }
    // Only "availability" (a bulk broadcast to potentially every client) is
    // manager-gated here — it can't go in the static MANAGER_ONLY list above
    // since that's checked before the body (and therefore `type`) is known.
    // Credit reminders stay open to both roles, same tier as the rest of
    // the Crédits screen.
    if (type === 'availability' && !isManager) {
      return sendJSON(res, 403, { error: 'Action réservée au Gérant' });
    }
    const channel = body.channel;
    if (channel !== 'sms' && channel !== 'email') {
      return sendJSON(res, 400, { error: 'Canal invalide' });
    }
    const recipientIds = Array.isArray(body.recipientIds) ? body.recipientIds : [];
    if (recipientIds.length === 0) return sendJSON(res, 400, { error: 'Aucun destinataire' });
    const message = (body.message || '').trim();
    if (!message) return sendJSON(res, 400, { error: 'Message vide' });
    const recipientNames = recipientIds.map((id) => {
      const c = db.clients.find((cl) => cl.id === id);
      return c ? c.name : 'Client supprimé';
    });
    let productName = '';
    if (type === 'availability' && body.productId) {
      const p = db.products.find((pp) => pp.id === body.productId);
      productName = p ? p.name : '';
    }
    const subject = (body.subject || '').trim();

    // Real send, only when the shop has actually turned the channel on and
    // filled in real credentials — otherwise this stays the manual-copy
    // flow it always was (sendResults stays null, `sent` stays false), with
    // zero behavior change for a shop that hasn't configured anything.
    const cfg = db.messagingConfig || defaultMessagingConfig();
    const canSendReal = channel === 'email'
      ? !!(cfg.email.enabled && cfg.email.gmailUser && cfg.email.gmailAppPassword)
      : !!(cfg.sms.enabled && cfg.sms.clientId && cfg.sms.clientSecret && cfg.sms.senderAddress);
    let sendResults = null;
    if (canSendReal) {
      sendResults = [];
      for (const id of recipientIds) {
        const c = db.clients.find((cl) => cl.id === id);
        const contact = c && (channel === 'email' ? c.email : c.phone);
        if (!c) { sendResults.push({ clientId: id, ok: false, error: 'Client introuvable' }); continue; }
        if (!contact) { sendResults.push({ clientId: id, ok: false, error: channel === 'email' ? "Pas d'email enregistré" : 'Pas de téléphone enregistré' }); continue; }
        try {
          if (channel === 'email') await sendEmailViaGmail(cfg.email, contact, subject, message);
          else await sendSmsViaOrange(cfg.sms, contact, message);
          sendResults.push({ clientId: id, ok: true });
        } catch (e) {
          sendResults.push({ clientId: id, ok: false, error: e.message });
        }
      }
    }

    const entry = {
      id: uid('msg'),
      type,
      channel,
      recipientIds,
      recipientNames,
      message,
      subject,
      productId: body.productId || '',
      productName,
      recordedBy: body.recordedBy || '',
      sentAt: new Date().toISOString(),
      sent: canSendReal,
      sendResults,
    };
    db.messageLog.unshift(entry);
    saveTenant(session.tenantId);
    return sendJSON(res, 201, entry);
  }

  if (pathname === '/api/messaging/config' && method === 'PATCH') {
    const body = await readJSONBody(req);
    const current = db.messagingConfig || defaultMessagingConfig();
    db.messagingConfig = {
      email: {
        enabled: !!body.emailEnabled,
        gmailUser: (body.gmailUser !== undefined ? body.gmailUser : current.email.gmailUser || '').trim(),
        // A blank submission keeps the existing password — same write-and-
        // clear-only-with-an-explicit-value convention as the FNE apiKey and
        // Établissement logo. Gmail app passwords are shown with spaces in
        // groups of 4 on Google's own page; strip them since the real
        // secret has none and a pasted space would break AUTH LOGIN.
        gmailAppPassword: body.gmailAppPassword ? body.gmailAppPassword.replace(/\s+/g, '') : (current.email.gmailAppPassword || ''),
      },
      sms: {
        enabled: !!body.smsEnabled,
        clientId: (body.clientId !== undefined ? body.clientId : current.sms.clientId || '').trim(),
        clientSecret: body.clientSecret ? body.clientSecret.trim() : (current.sms.clientSecret || ''),
        senderAddress: (body.senderAddress !== undefined ? body.senderAddress : current.sms.senderAddress || '').trim(),
      },
    };
    saveTenant(session.tenantId);
    return sendJSON(res, 200, publicMessagingConfig(db));
  }

  if (pathname === '/api/settings' && method === 'PATCH') {
    const body = await readJSONBody(req);
    if (typeof body.logo === 'string' && body.logo.length > MAX_LOGO_LENGTH) {
      return sendJSON(res, 400, { error: 'Logo trop volumineux (taille maximale ~500 Ko)' });
    }
    const vatRate = Math.max(0, Math.min(100, Number(body.vatRate) || 0));
    db.settings = {
      companyName: (body.companyName || '').trim(),
      address: (body.address || '').trim(),
      phone: (body.phone || '').trim(),
      email: (body.email || '').trim(),
      taxId: (body.taxId || '').trim(),
      logo: typeof body.logo === 'string' ? body.logo : (db.settings.logo || ''),
      ncc: (body.ncc || '').trim(),
      taxRegime: (body.taxRegime || '').trim(),
      taxCenter: (body.taxCenter || '').trim(),
      bankDetails: (body.bankDetails || '').trim(),
      vatRate,
    };
    saveTenant(session.tenantId);
    return sendJSON(res, 200, db.settings);
  }

  if (pathname === '/api/fne/config' && method === 'PATCH') {
    const body = await readJSONBody(req);
    const taxCode = body.taxCode || '';
    if (taxCode && !(taxCode in FNE_TAX_RATES)) {
      return sendJSON(res, 400, { error: 'Code TVA FNE invalide' });
    }
    const current = db.fneConfig || defaultFneConfig();
    db.fneConfig = {
      // Blank submission keeps the existing key — same write-only pattern
      // as the logo field, so the Gérant never has to re-paste it on every
      // unrelated config change.
      apiKey: typeof body.apiKey === 'string' && body.apiKey.trim() ? body.apiKey.trim() : current.apiKey,
      baseUrl: (body.baseUrl || '').trim() || FNE_TEST_BASE_URL,
      enabled: !!body.enabled,
      taxCode,
    };
    saveTenant(session.tenantId);
    return sendJSON(res, 200, publicFneConfig(db));
  }

  const fneCertifyMatch = pathname.match(/^\/api\/fne\/certify\/([^/]+)$/);
  if (fneCertifyMatch && method === 'POST') {
    const sale = db.sales.find((s) => s.id === fneCertifyMatch[1]);
    if (!sale) return sendJSON(res, 404, { error: 'Vente introuvable' });
    // Never resubmit an already-certified sale — that would mint a second
    // legal FNE invoice for the same transaction. Return the existing result.
    if (sale.fne && sale.fne.reference) return sendJSON(res, 200, sale.fne);
    const cfg = db.fneConfig || defaultFneConfig();
    if (!cfg.enabled || !cfg.apiKey || !cfg.taxCode) {
      return sendJSON(res, 400, { error: "Intégration FNE non configurée (activez-la et renseignez la clé API et le code TVA dans Établissement)" });
    }
    const rate = FNE_TAX_RATES[cfg.taxCode];
    const client = sale.clientId ? db.clients.find((c) => c.id === sale.clientId) : null;
    const payload = {
      invoiceType: 'sale',
      paymentMethod: FNE_PAYMENT_METHODS[sale.paymentMethod] || 'cash',
      template: client && client.ncc ? 'B2B' : 'B2C',
      isRne: false,
      clientNcc: (client && client.ncc) || '',
      clientCompanyName: sale.clientName || 'Client de passage',
      clientPhone: (client && client.phone) || '',
      clientEmail: '',
      clientSellerName: sale.cashier || '',
      pointOfSale: sale.depotName || '',
      establishment: (db.settings && db.settings.companyName) || '',
      commercialMessage: '',
      footer: '',
      foreignCurrency: '',
      foreignCurrencyRate: 0,
      // Our selling prices have always been tax-inclusive (TTC) — HT is
      // backed out here using the DGI's own fixed rate for the configured
      // code, the same reconciliation approach as the printable A4 facture.
      items: sale.items.map((it) => {
        const product = db.products.find((p) => p.id === it.productId);
        return {
          taxes: [cfg.taxCode],
          reference: (product && product.barcode) || it.productId,
          description: it.name,
          quantity: it.qty,
          amount: Math.round((it.unitPrice / (1 + rate / 100)) * 100) / 100,
          discount: 0,
          measurementUnit: it.unit === 'pack' ? 'paquet' : it.unit === 'carton' ? 'carton' : 'unité',
        };
      }),
      discount: 0,
    };
    let fneRes, fneData;
    try {
      fneRes = await fetch(cfg.baseUrl.replace(/\/$/, '') + '/external/invoices/sign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json', Authorization: 'Bearer ' + cfg.apiKey },
        body: JSON.stringify(payload),
      });
      fneData = await fneRes.json().catch(() => ({}));
    } catch (e) {
      return sendJSON(res, 502, { error: 'Impossible de contacter la plateforme FNE : ' + e.message });
    }
    if (!fneRes.ok) {
      return sendJSON(res, fneRes.status, { error: fneData.message || 'Erreur FNE (' + fneRes.status + ')' });
    }
    sale.fne = {
      reference: fneData.reference, token: fneData.token, ncc: fneData.ncc,
      balanceSticker: fneData.balance_sticker, warning: !!fneData.warning,
      certifiedAt: new Date().toISOString(),
    };
    saveTenant(session.tenantId);
    return sendJSON(res, 200, sale.fne);
  }

  return sendJSON(res, 404, { error: 'Route inconnue' });
}

// ---------- Static file serving ----------
function serveStatic(req, res, pathname) {
  let reqPath = pathname === '/' ? '/index.html' : pathname;
  const filePath = path.normalize(path.join(PUBLIC_DIR, reqPath));
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found: ' + reqPath);
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const pathname = decodeURIComponent(req.url.split('?')[0]);
  if (pathname.startsWith('/api/')) {
    handleApi(req, res, pathname).catch((err) => {
      console.error(err);
      sendJSON(res, 400, { error: 'Requête invalide' });
    });
    return;
  }
  serveStatic(req, res, pathname);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    // Déjà lancé depuis un précédent démarrage — rien à faire.
    process.exit(0);
  }
  console.error(err);
  process.exit(1);
});

server.listen(PORT, HOST, () => {
  console.log(`NassuaGroup disponible sur http://${HOST}:${PORT}`);
});
