'use strict';

// ---------- Icons ----------
const ICON_DASH = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="9" rx="1.5"></rect><rect x="14" y="3" width="7" height="5" rx="1.5"></rect><rect x="14" y="12" width="7" height="9" rx="1.5"></rect><rect x="3" y="16" width="7" height="5" rx="1.5"></rect></svg>';
const ICON_CAISSE = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="20" r="1.3"></circle><circle cx="18" cy="20" r="1.3"></circle><path d="M2.5 3h2.6l2.4 12.2a2 2 0 0 0 2 1.6h8.3a2 2 0 0 0 2-1.6L21.5 7H6"></path></svg>';
const ICON_STOCKS = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7l9-4 9 4-9 4-9-4z"></path><path d="M3 7v10l9 4 9-4V7"></path><path d="M12 11v10"></path></svg>';
const ICON_DEPOT = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 10.5 12 4l9 6.5"></path><path d="M5 10v9.5h14V10"></path><path d="M9.5 19.5v-6h5v6"></path></svg>';
const ICON_CAT = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.6 12.3 12.7 4.4a2 2 0 0 0-1.4-.6H4.7a1 1 0 0 0-1 1v6.6a2 2 0 0 0 .6 1.4l7.9 7.9a2 2 0 0 0 2.8 0l6.6-6.6a2 2 0 0 0 0-2.8z"></path><circle cx="7.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>';
const ICON_FOURN = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="8" width="14" height="9" rx="1"></rect><path d="M15 11h3.5l3.5 3.5V17h-7"></path><circle cx="6" cy="19.5" r="1.6"></circle><circle cx="17.5" cy="19.5" r="1.6"></circle></svg>';
const ICON_CLIENTS = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3.2"></circle><path d="M2.5 20c0-3.6 2.9-6.2 6.5-6.2s6.5 2.6 6.5 6.2"></path><circle cx="17.5" cy="7.5" r="2.6"></circle><path d="M15.8 13.6c2.9.5 4.7 2.8 4.7 6.4h-3"></path></svg>';
const ICON_RAPPORTS = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19V10"></path><path d="M11 19V5"></path><path d="M18 19v-7"></path><path d="M3 19h18"></path></svg>';
const ICON_EMP = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="3.4"></circle><path d="M4.5 20c0-4.1 3.4-7 7.5-7s7.5 2.9 7.5 7"></path><path d="M15.5 5.2a3 3 0 0 1 0 5.8"></path></svg>';
const ICON_LOGOUT = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><path d="M16 17l5-5-5-5"></path><path d="M21 12H9"></path></svg>';
const ICON_ACCOUNT = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="9" rx="2"></rect><path d="M8 11V7a4 4 0 0 1 8 0v4"></path><circle cx="12" cy="15.5" r="1.4" fill="currentColor" stroke="none"></circle></svg>';
const ICON_EDIT = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>';
const ICON_TRASH = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path><path d="M10 11v6M14 11v6"></path></svg>';
const ICON_CHECK = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"></path></svg>';
const ICON_CLOSE = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6 6 18M6 6l12 12"></path></svg>';
const ICON_RESTOCK = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><path d="M12 4v11"></path><path d="M8 11l4 4 4-4"></path><path d="M4 18h16"></path></svg>';
const ICON_CAMERA = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect><path d="M14 14h3v3h-3zM20 14v7M14 20h4"></path></svg>';
const ICON_CREDIT = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"></rect><path d="M2 10h20"></path><path d="M6 15h4"></path></svg>';
const ICON_EXPENSE = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="3"></circle><path d="M6 9v.01M18 15v.01"></path></svg>';

const EXPENSE_CATEGORIES = ['Salaires', 'Facture CIE', 'Facture SODECI', 'Paiement fournisseur', 'Achat marchandise', 'Don personnel', 'Imprévus', 'Autre'];

const CAT_ICONS = {
  sodas: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2h4v3.5c1.3.6 2 1.7 2 3v11.5a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V8.5c0-1.3.7-2.4 2-3V2z"></path><path d="M8 12h8"></path><circle cx="14.5" cy="9.5" r="0.4" fill="currentColor" stroke="none"></circle></svg>',
  bieres: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 9h11v9.5A1.5 1.5 0 0 1 14.5 20h-8A1.5 1.5 0 0 1 5 18.5V9z"></path><path d="M16 10.5h1.8A1.7 1.7 0 0 1 19.5 12.2v1.6a1.7 1.7 0 0 1-1.7 1.7H16"></path><path d="M5 9c-.3-1.4.3-2 .3-3.2S5 4 5 4"></path><path d="M8.3 9c-.3-1.6.4-2.3.4-3.6S8.3 3 8.3 3"></path><path d="M11.6 9c-.3-1.4.3-2 .3-3.2S11.3 4 11.3 4"></path></svg>',
  eaux: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.5c3 4 6 7.8 6 11.5a6 6 0 1 1-12 0c0-3.7 3-7.5 6-11.5z"></path></svg>',
  jus: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 8h10l-1 11.2a2 2 0 0 1-2 1.8H10a2 2 0 0 1-2-1.8L7 8z"></path><path d="M6.5 8h11"></path><path d="M15 4l1.5 4"></path></svg>',
  vins: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3h8c0 5-1.5 8-4 8s-4-3-4-8z"></path><path d="M12 11v7"></path><path d="M8.5 20.5h7"></path></svg>',
  spiritueux: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h10l-1 16.5A1.5 1.5 0 0 1 14.5 21h-5A1.5 1.5 0 0 1 8 19.5L7 3z"></path><path d="M7.6 11h8.8"></path></svg>',
  sucreries: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5.2"></circle><path d="M12 13.2V21"></path><path d="M9.5 6.5c1-1 4-1 5 0"></path></svg>',
  other: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2h4v3.5c1.3.6 2 1.7 2 3v11.5a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V8.5c0-1.3.7-2.4 2-3V2z"></path><path d="M8 12h8"></path></svg>',
};

const NAV_ITEMS = [
  { key: 'dashboard', label: 'Tableau de bord', icon: ICON_DASH, managerOnly: false },
  { key: 'caisse', label: 'Caisse', icon: ICON_CAISSE, managerOnly: false },
  { key: 'stocks', label: 'Stocks', icon: ICON_STOCKS, managerOnly: false },
  { key: 'depots', label: 'Dépôts', icon: ICON_DEPOT, managerOnly: true },
  { key: 'categories', label: 'Catégories', icon: ICON_CAT, managerOnly: false },
  { key: 'fournisseurs', label: 'Fournisseurs', icon: ICON_FOURN, managerOnly: true },
  { key: 'clients', label: 'Clients', icon: ICON_CLIENTS, managerOnly: false },
  { key: 'credits', label: 'Crédits', icon: ICON_CREDIT, managerOnly: false },
  { key: 'expenses', label: 'Dépenses', icon: ICON_EXPENSE, managerOnly: true },
  { key: 'rapports', label: 'Rapports', icon: ICON_RAPPORTS, managerOnly: true },
  { key: 'employes', label: 'Employés', icon: ICON_EMP, managerOnly: true },
  { key: 'account', label: 'Mon compte', icon: ICON_ACCOUNT, managerOnly: false },
];

const TITLES = {
  dashboard: ['Tableau de bord', "Vue d'ensemble de l'activité"],
  caisse: ['Point de vente', 'Encaisser une vente rapidement'],
  stocks: ['Gestion des stocks', 'Suivi des niveaux de stock produit'],
  depots: ['Dépôts', 'Entrepôts et points de vente'],
  categories: ['Catégories', 'Organisation des familles de produits'],
  fournisseurs: ['Fournisseurs', 'Partenaires et approvisionnement'],
  clients: ['Clients', 'Base clients et fidélité'],
  credits: ['Crédits', 'Ventes à crédit et versements'],
  expenses: ['Dépenses', 'Suivi des sorties de caisse'],
  rapports: ['Rapports', 'Performance commerciale'],
  employes: ['Employés', 'Équipe et accès'],
  account: ['Mon compte', 'Sécurité de votre compte'],
};

// ---------- State ----------
const state = {
  loggedIn: false, role: null, userId: null, userName: '',
  loginMode: null, loginUsername: '', loginPassword: '', loginError: null,
  screen: 'dashboard',
  depots: [], categories: [], suppliers: [], clients: [], employees: [], products: [], sales: [], expenses: [],
  currentDepotId: '', // depot the signed-in user is currently operating / selling from
  stockDepotFilter: '', dashDepotFilter: '', repDepotFilter: '', expenseDepotFilter: '', // 'all' or a depot id
  cart: [], posCategory: 'all', posSearch: '', posClientId: '', paymentMethod: 'Espèces', posAdvance: '',
  scanInput: '', showScanner: false, scanError: null,
  stockSearch: '', stockCatFilter: 'all', showAddProduct: false,
  npName: '', npCategoryId: '', npSupplierId: '', npDepotId: '', npPrice: '', npCost: '', npStock: '', npMinStock: '',
  npUnitsPerPack: '', npPricePerPack: '', npUnitsPerCarton: '', npPricePerCarton: '', editingProductId: null,
  showAddCategory: false, ncName: '',
  showAddSupplier: false, nsName: '', nsPhone: '', nsEmail: '',
  showAddClient: false, ncliName: '', ncliPhone: '',
  showAddEmployee: false, neName: '', neRole: 'Caissier', nePhone: '', neDepotId: '', nePassword: '',
  editingEmployeeId: null, confirmDeleteEmployeeId: null,
  showAddDepot: false, ndName: '', ndAddress: '',
  showTransfer: false, trProductId: '', trFromDepotId: '', trToDepotId: '', trQty: '',
  showRestock: false, rsProductId: '', rsDepotId: '', rsQty: '', rsUnit: 'detail',
  creditFilter: 'open', showCreditPayment: false, cpSaleId: '', cpAmount: '',
  showAddExpense: false, exCategory: EXPENSE_CATEGORIES[0], exCustomCategory: '', exAmount: '', exDepotId: '', exNote: '',
  pwCurrent: '', pwNew: '', pwConfirm: '', pwError: null, pwSuccess: null,
  toast: null,
  showReceipt: false, lastReceipt: null,
};

// ---------- Helpers ----------
function esc(v) {
  return String(v == null ? '' : v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function fcfa(n) { return Math.round(n || 0).toLocaleString('fr-FR') + ' FCFA'; }
function capitalize(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : s; }
function stockStatus(qty, minStock) {
  if (qty <= 0) return { label: 'Rupture', cls: 'danger' };
  if (qty <= minStock) return { label: 'Faible', cls: 'warning' };
  return { label: 'OK', cls: 'ok' };
}
function stockAt(product, depotId) { return (product.stockByDepot && product.stockByDepot[depotId]) || 0; }
function stockTotal(product) {
  if (!product.stockByDepot) return 0;
  return Object.keys(product.stockByDepot).reduce((a, k) => a + (product.stockByDepot[k] || 0), 0);
}
function depotName(depotId) { const d = state.depots.find((x) => x.id === depotId); return d ? d.name : ''; }
function categoryIconKey(name) {
  const n = (name || '').toLowerCase();
  if (n.includes('soda')) return 'sodas';
  if (n.includes('biere') || n.includes('bière')) return 'bieres';
  if (n.includes('eau')) return 'eaux';
  if (n.includes('jus')) return 'jus';
  if (n.includes('vin')) return 'vins';
  if (n.includes('spiritueu')) return 'spiritueux';
  if (n.includes('sucrerie') || n.includes('bonbon') || n.includes('confiserie')) return 'sucreries';
  return 'other';
}
function dayLabel(iso) {
  const d0 = new Date(iso); d0.setHours(0, 0, 0, 0);
  const today0 = new Date(); today0.setHours(0, 0, 0, 0);
  const diff = Math.round((today0 - d0) / 86400000);
  return diff <= 0 ? "Aujourd'hui" : `Il y a ${diff} j`;
}
function computeWeekBars(sales) {
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(); d.setHours(0, 0, 0, 0); d.setDate(d.getDate() - i);
    days.push(d);
  }
  const totals = days.map((d) => {
    const start = d.getTime(), end = start + 86400000;
    return sales.filter((sa) => { const t = new Date(sa.date).getTime(); return t >= start && t < end; }).reduce((a, sa) => a + sa.total, 0);
  });
  const max = Math.max(1, ...totals);
  return days.map((d, i) => ({
    label: capitalize(d.toLocaleDateString('fr-FR', { weekday: 'short' }).replace('.', '')),
    height: Math.max(4, (totals[i] / max) * 120),
  }));
}
// Sales scoped to a depot filter value ('all' or a depot id).
function salesForDepot(filterId) {
  return filterId === 'all' ? state.sales : state.sales.filter((sa) => sa.depotId === filterId);
}

// ---------- API ----------
async function api(method, url, body) {
  const opts = { method, headers: {} };
  if (body !== undefined) { opts.headers['Content-Type'] = 'application/json'; opts.body = JSON.stringify(body); }
  const res = await fetch(url, opts);
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Erreur serveur');
  return data;
}

// ---------- Toast ----------
let toastTimer = null;
function flashToast(msg) {
  state.toast = msg;
  rerender();
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { state.toast = null; rerender(); }, 2200);
}

// ---------- Auth ----------
async function submitLogin() {
  const username = state.loginUsername.trim();
  const password = state.loginPassword;
  if (!username || !password) { state.loginError = 'Identifiant et mot de passe requis'; rerender(); return; }
  try {
    const data = await api('POST', '/api/login', { username, password, expectedRole: state.loginMode });
    state.loggedIn = true; state.role = data.role; state.userId = data.userId; state.userName = data.userName; state.screen = 'dashboard';
    state.loginMode = null; state.loginUsername = ''; state.loginPassword = ''; state.loginError = null;
    const depotId = data.depotId || (state.depots[0] && state.depots[0].id) || '';
    state.currentDepotId = depotId;
    state.stockDepotFilter = depotId; state.dashDepotFilter = depotId; state.repDepotFilter = depotId; state.expenseDepotFilter = depotId;
    state.npDepotId = depotId; state.neDepotId = depotId; state.exDepotId = depotId;
    rerender();
  } catch (e) {
    state.loginError = e.message || 'Connexion impossible';
    rerender();
  }
}
function logout() {
  state.loggedIn = false; state.role = null; state.userName = ''; state.userId = null; state.screen = 'dashboard'; state.cart = [];
  state.loginMode = null; state.loginUsername = ''; state.loginPassword = ''; state.loginError = null;
  rerender();
}
async function changePassword() {
  state.pwError = null; state.pwSuccess = null;
  if (!state.pwCurrent || !state.pwNew || !state.pwConfirm) { state.pwError = 'Tous les champs sont requis'; rerender(); return; }
  if (state.pwNew.length < 4) { state.pwError = 'Le nouveau mot de passe doit contenir au moins 4 caractères'; rerender(); return; }
  if (state.pwNew !== state.pwConfirm) { state.pwError = 'La confirmation ne correspond pas au nouveau mot de passe'; rerender(); return; }
  try {
    await api('POST', '/api/change-password', { userId: state.userId, currentPassword: state.pwCurrent, newPassword: state.pwNew });
    state.pwCurrent = ''; state.pwNew = ''; state.pwConfirm = '';
    state.pwSuccess = 'Mot de passe mis à jour.';
    flashToast('Mot de passe mis à jour');
    rerender();
  } catch (e) {
    state.pwError = e.message || 'Erreur lors de la mise à jour';
    rerender();
  }
}

// ---------- Cart / POS ----------
// Resolves the unit price and base-unit multiplier for a sale unit
// ('pack'/'carton'), falling back to the per-unit ('detail') price if the
// product doesn't have that packaging configured — mirrors server.js.
function packagingFor(product, unit) {
  if (unit === 'pack' && product.unitsPerPack > 0) return { price: product.pricePerPack, multiplier: product.unitsPerPack, label: 'paquet' };
  if (unit === 'carton' && product.unitsPerCarton > 0) return { price: product.pricePerCarton, multiplier: product.unitsPerCarton, label: 'carton' };
  return { price: product.price, multiplier: 1, label: 'unité' };
}
function addToCart(productId, unit) {
  const product = state.products.find((p) => p.id === productId);
  if (!product) return;
  unit = unit || 'detail';
  const pkg = packagingFor(product, unit);
  const available = stockAt(product, state.currentDepotId);
  const existing = state.cart.find((c) => c.productId === productId && c.unit === unit);
  const usedBase = existing ? existing.qty * pkg.multiplier : 0;
  if (usedBase + pkg.multiplier > available) return;
  if (existing) existing.qty++;
  else state.cart.push({ productId, unit, qty: 1 });
  rerender();
}
function changeCartQty(productId, unit, delta) {
  const product = state.products.find((p) => p.id === productId);
  const item = state.cart.find((c) => c.productId === productId && c.unit === unit);
  if (!item || !product) return;
  const pkg = packagingFor(product, unit);
  const available = stockAt(product, state.currentDepotId);
  const maxQty = Math.floor(available / pkg.multiplier);
  item.qty = Math.max(0, Math.min(maxQty, item.qty + delta));
  state.cart = state.cart.filter((c) => c.qty > 0);
  rerender();
}
function removeFromCart(productId, unit) {
  state.cart = state.cart.filter((c) => !(c.productId === productId && c.unit === unit));
  rerender();
}
async function checkout() {
  if (state.cart.length === 0) return;
  if (state.paymentMethod === 'Crédit' && !state.posClientId) {
    flashToast('Sélectionnez un client pour une vente à crédit');
    return;
  }
  try {
    const data = await api('POST', '/api/checkout', {
      cart: state.cart, clientId: state.posClientId, paymentMethod: state.paymentMethod, cashier: state.userName, depotId: state.currentDepotId,
      advance: state.paymentMethod === 'Crédit' ? (Number(state.posAdvance) || 0) : undefined,
    });
    const sale = data.sale;
    sale.items.forEach((it) => {
      const p = state.products.find((pp) => pp.id === it.productId);
      if (p) { p.stockByDepot[sale.depotId] = stockAt(p, sale.depotId) - it.baseQty; p.sold += it.baseQty; }
    });
    if (sale.clientId) {
      const c = state.clients.find((cc) => cc.id === sale.clientId);
      if (c) { c.points += Math.floor(sale.total / 100); c.totalSpent += sale.total; }
    }
    state.sales.unshift(sale);
    state.cart = []; state.posClientId = ''; state.posAdvance = '';
    state.lastReceipt = sale; state.showReceipt = true;
    rerender();
  } catch (e) {
    flashToast(e.message || "Erreur lors de l'encaissement");
    rerender();
  }
}

// ---------- Barcode scanning ----------
function lookupAndAddByBarcode(code) {
  const product = state.products.find((p) => p.barcode === code.trim());
  if (!product) { state.scanError = 'Code inconnu : ' + code; rerender(); return; }
  if (stockAt(product, state.currentDepotId) <= 0) { state.scanError = product.name + ' — rupture de stock au ' + depotName(state.currentDepotId); rerender(); return; }
  addToCart(product.id);
  state.scanError = null;
  flashToast(product.name + ' ajouté au panier');
}
function submitScan() {
  const code = state.scanInput.trim();
  if (!code) return;
  state.scanInput = '';
  lookupAndAddByBarcode(code);
}
let zxingReader = null;
let scanningActive = false;
let lastCode = null, lastCodeAt = 0;
function handleDetectedCode(code) {
  const now = Date.now();
  if (lastCode === code && now - lastCodeAt < 1500) return;
  lastCode = code; lastCodeAt = now;
  lookupAndAddByBarcode(code);
}
function startCamera() {
  if (!window.ZXing || !window.ZXing.BrowserMultiFormatReader) {
    state.scanError = 'Bibliothèque de scan indisponible (vérifiez la connexion internet). Utilisez le champ de saisie avec un lecteur USB.';
    rerender();
    return;
  }
  try {
    zxingReader = new window.ZXing.BrowserMultiFormatReader();
    zxingReader.decodeFromVideoDevice(undefined, 'scanner-video', (result) => {
      if (!scanningActive || !result) return;
      handleDetectedCode(result.getText());
    }).catch(() => { state.scanError = 'Accès à la caméra refusé ou indisponible.'; rerender(); });
  } catch (e) {
    state.scanError = 'Accès à la caméra refusé ou indisponible.'; rerender();
  }
}
function stopCamera() {
  if (zxingReader) { try { zxingReader.reset(); } catch (e) {} zxingReader = null; }
}
function syncScanner() {
  if (state.showScanner && !scanningActive) { scanningActive = true; startCamera(); }
  if (!state.showScanner && scanningActive) { scanningActive = false; stopCamera(); }
}

// ---------- Stocks ----------
function adjustStock(productId, delta, depotId) {
  if (!depotId || depotId === 'all') return;
  const product = state.products.find((p) => p.id === productId);
  if (!product) return;
  product.stockByDepot[depotId] = Math.max(0, stockAt(product, depotId) + delta);
  rerender();
  api('PATCH', `/api/products/${productId}/stock`, { depotId, delta }).catch(() => flashToast('Erreur de synchronisation du stock'));
}
function resetProductForm() {
  state.showAddProduct = false; state.editingProductId = null;
  state.npName = ''; state.npPrice = ''; state.npCost = ''; state.npStock = ''; state.npMinStock = '';
  state.npUnitsPerPack = ''; state.npPricePerPack = ''; state.npUnitsPerCarton = ''; state.npPricePerCarton = '';
}
function openAddProductForm() {
  resetProductForm();
  state.npCategoryId = state.categories[0] ? state.categories[0].id : '';
  state.npSupplierId = state.suppliers[0] ? state.suppliers[0].id : '';
  state.npDepotId = state.currentDepotId;
  state.showAddProduct = true;
}
function openEditProductForm(id) {
  const p = state.products.find((pp) => pp.id === id);
  if (!p) return;
  resetProductForm();
  state.editingProductId = id;
  state.npName = p.name; state.npCategoryId = p.categoryId; state.npSupplierId = p.supplierId;
  state.npPrice = p.price; state.npCost = p.cost; state.npMinStock = p.minStock;
  state.npUnitsPerPack = p.unitsPerPack || ''; state.npPricePerPack = p.pricePerPack || '';
  state.npUnitsPerCarton = p.unitsPerCarton || ''; state.npPricePerCarton = p.pricePerCarton || '';
  state.showAddProduct = true;
}
function saveProduct() {
  return state.editingProductId ? updateProduct() : addProduct();
}
async function addProduct() {
  if (!state.npName.trim()) return;
  try {
    const product = await api('POST', '/api/products', {
      name: state.npName.trim(), categoryId: state.npCategoryId, supplierId: state.npSupplierId, depotId: state.npDepotId,
      price: Number(state.npPrice) || 0, cost: Number(state.npCost) || 0, stock: Number(state.npStock) || 0, minStock: Number(state.npMinStock) || 10,
      unitsPerPack: Number(state.npUnitsPerPack) || 0, pricePerPack: Number(state.npPricePerPack) || 0,
      unitsPerCarton: Number(state.npUnitsPerCarton) || 0, pricePerCarton: Number(state.npPricePerCarton) || 0,
    });
    state.products.push(product);
    resetProductForm();
    flashToast('Produit ajouté : ' + product.name);
    rerender();
  } catch (e) { flashToast(e.message); }
}
async function updateProduct() {
  if (!state.npName.trim()) return;
  try {
    const updated = await api('PATCH', `/api/products/${state.editingProductId}`, {
      name: state.npName.trim(), categoryId: state.npCategoryId, supplierId: state.npSupplierId,
      price: Number(state.npPrice) || 0, cost: Number(state.npCost) || 0, minStock: Number(state.npMinStock) || 10,
      unitsPerPack: Number(state.npUnitsPerPack) || 0, pricePerPack: Number(state.npPricePerPack) || 0,
      unitsPerCarton: Number(state.npUnitsPerCarton) || 0, pricePerCarton: Number(state.npPricePerCarton) || 0,
    });
    const idx = state.products.findIndex((p) => p.id === updated.id);
    if (idx >= 0) state.products[idx] = updated;
    resetProductForm();
    flashToast('Produit mis à jour : ' + updated.name);
    rerender();
  } catch (e) { flashToast(e.message); }
}
async function stockTransfer() {
  if (!state.trProductId || !state.trFromDepotId || !state.trToDepotId) return;
  if (state.trFromDepotId === state.trToDepotId) { flashToast('Choisissez deux dépôts différents'); return; }
  const qty = Number(state.trQty) || 0;
  if (qty <= 0) return;
  try {
    const product = await api('POST', '/api/stock-transfer', {
      productId: state.trProductId, fromDepotId: state.trFromDepotId, toDepotId: state.trToDepotId, qty,
    });
    const idx = state.products.findIndex((p) => p.id === product.id);
    if (idx >= 0) state.products[idx] = product;
    state.showTransfer = false; state.trProductId = ''; state.trQty = '';
    flashToast('Transfert effectué : ' + qty + ' unité(s)');
    rerender();
  } catch (e) { flashToast(e.message); }
}
async function restockProduct() {
  if (!state.rsProductId || !state.rsDepotId) return;
  const qty = Number(state.rsQty) || 0;
  if (qty <= 0) return;
  const product = state.products.find((p) => p.id === state.rsProductId);
  if (!product) return;
  const unit = state.rsUnit;
  const pkg = packagingFor(product, unit);
  const baseQty = qty * pkg.multiplier;
  try {
    const updated = await api('PATCH', `/api/products/${state.rsProductId}/stock`, { depotId: state.rsDepotId, delta: baseQty });
    const idx = state.products.findIndex((p) => p.id === updated.id);
    if (idx >= 0) state.products[idx] = updated;
    state.showRestock = false; state.rsProductId = ''; state.rsQty = ''; state.rsUnit = 'detail';
    const label = unit !== 'detail' ? `${qty} ${pkg.label}(s) (${baseQty} unités)` : `${qty}`;
    flashToast('Réapprovisionné : +' + label + ' ' + product.name);
    rerender();
  } catch (e) { flashToast(e.message); }
}

// ---------- Crédits ----------
async function submitCreditPayment() {
  if (!state.cpSaleId) return;
  const amount = Number(state.cpAmount) || 0;
  if (amount <= 0) return;
  try {
    const updated = await api('POST', `/api/credit-sales/${state.cpSaleId}/payment`, { amount });
    const idx = state.sales.findIndex((s) => s.id === updated.id);
    if (idx >= 0) state.sales[idx] = updated;
    state.showCreditPayment = false; state.cpSaleId = ''; state.cpAmount = '';
    flashToast(updated.creditRemaining > 0
      ? 'Versement enregistré. Reste à payer : ' + fcfa(updated.creditRemaining)
      : 'Crédit soldé !');
    rerender();
  } catch (e) { flashToast(e.message); }
}

// ---------- Dépenses ----------
async function addExpense() {
  const category = state.exCategory === 'Autre' ? state.exCustomCategory.trim() : state.exCategory;
  if (!category) return;
  const amount = Number(state.exAmount) || 0;
  if (amount <= 0) return;
  if (!state.exDepotId) return;
  try {
    const expense = await api('POST', '/api/expenses', {
      category, amount, depotId: state.exDepotId, note: state.exNote, recordedBy: state.userName,
    });
    state.expenses.unshift(expense);
    state.showAddExpense = false;
    state.exCategory = EXPENSE_CATEGORIES[0]; state.exCustomCategory = ''; state.exAmount = ''; state.exNote = '';
    flashToast('Dépense enregistrée : ' + fcfa(amount));
    rerender();
  } catch (e) { flashToast(e.message); }
}

// ---------- Depots ----------
async function addDepot() {
  if (!state.ndName.trim()) return;
  try {
    const depot = await api('POST', '/api/depots', { name: state.ndName.trim(), address: state.ndAddress });
    state.depots.push(depot);
    state.showAddDepot = false; state.ndName = ''; state.ndAddress = '';
    flashToast('Dépôt ajouté : ' + depot.name);
    rerender();
  } catch (e) { flashToast(e.message); }
}

// ---------- Categories / Suppliers / Clients / Employees ----------
async function addCategory() {
  if (!state.ncName.trim()) return;
  try {
    const category = await api('POST', '/api/categories', { name: state.ncName.trim() });
    state.categories.push(category);
    state.showAddCategory = false; state.ncName = '';
    flashToast('Catégorie ajoutée : ' + category.name);
    rerender();
  } catch (e) { flashToast(e.message); }
}
async function addSupplier() {
  if (!state.nsName.trim()) return;
  try {
    const supplier = await api('POST', '/api/suppliers', { name: state.nsName.trim(), phone: state.nsPhone, email: state.nsEmail });
    state.suppliers.push(supplier);
    state.showAddSupplier = false; state.nsName = ''; state.nsPhone = ''; state.nsEmail = '';
    flashToast('Fournisseur ajouté : ' + supplier.name);
    rerender();
  } catch (e) { flashToast(e.message); }
}
async function addClient() {
  if (!state.ncliName.trim()) return;
  try {
    const client = await api('POST', '/api/clients', { name: state.ncliName.trim(), phone: state.ncliPhone });
    state.clients.push(client);
    state.showAddClient = false; state.ncliName = ''; state.ncliPhone = '';
    flashToast('Client ajouté : ' + client.name);
    rerender();
  } catch (e) { flashToast(e.message); }
}
function resetEmployeeForm() {
  state.showAddEmployee = false; state.editingEmployeeId = null;
  state.neName = ''; state.neRole = 'Caissier'; state.nePhone = ''; state.neDepotId = ''; state.nePassword = '';
}
function openAddEmployeeForm() {
  resetEmployeeForm();
  state.neDepotId = state.currentDepotId;
  state.showAddEmployee = true;
}
function openEditEmployeeForm(id) {
  const e = state.employees.find((emp) => emp.id === id);
  if (!e) return;
  state.editingEmployeeId = id;
  state.neName = e.name; state.neRole = e.role; state.nePhone = e.phone || ''; state.neDepotId = e.depotId || '';
  state.nePassword = '';
  state.confirmDeleteEmployeeId = null;
  state.showAddEmployee = true;
}
function saveEmployee() {
  return state.editingEmployeeId ? updateEmployee() : addEmployee();
}
async function addEmployee() {
  if (!state.neName.trim() || state.nePassword.length < 4) return;
  try {
    const employee = await api('POST', '/api/employees', {
      name: state.neName.trim(), role: state.neRole, phone: state.nePhone, depotId: state.neDepotId || null, password: state.nePassword,
    });
    state.employees.push(employee);
    resetEmployeeForm();
    flashToast('Employé ajouté : ' + employee.name);
    rerender();
  } catch (e) { flashToast(e.message); }
}
async function updateEmployee() {
  if (!state.neName.trim()) return;
  try {
    const updated = await api('PATCH', `/api/employees/${state.editingEmployeeId}`, {
      name: state.neName.trim(), role: state.neRole, phone: state.nePhone, depotId: state.neDepotId || null,
    });
    const idx = state.employees.findIndex((e) => e.id === updated.id);
    if (idx >= 0) state.employees[idx] = updated;
    if (state.userId === updated.id) state.userName = updated.name;
    resetEmployeeForm();
    flashToast('Employé mis à jour : ' + updated.name);
    rerender();
  } catch (e) { flashToast(e.message); }
}
async function deleteEmployee(id) {
  try {
    await api('DELETE', `/api/employees/${id}`);
    state.employees = state.employees.filter((e) => e.id !== id);
    state.confirmDeleteEmployeeId = null;
    flashToast('Employé supprimé');
    rerender();
  } catch (e) {
    state.confirmDeleteEmployeeId = null;
    flashToast(e.message);
    rerender();
  }
}
function toggleEmployeeActive(id) {
  const employee = state.employees.find((e) => e.id === id);
  if (!employee) return;
  employee.active = !employee.active;
  rerender();
  api('PATCH', `/api/employees/${id}/toggle`, {}).catch(() => flashToast('Erreur de synchronisation'));
}

// ---------- Rendering ----------
function renderLogin() {
  const brandHtml = `<div class="login-brand"><div class="login-logo">B</div><div class="login-title">BoissonMan</div></div>
    <div class="login-sub">Gestion de supermarché de boissons</div>`;

  if (!state.loginMode) {
    return `<div class="login-screen"><div class="login-card">
      ${brandHtml}
      <div class="login-label">SE CONNECTER EN TANT QUE</div>
      <div class="login-buttons">
        <div class="login-btn manager" data-action="chooseLoginMode" data-mode="manager">Gérant</div>
        <div class="login-btn cashier" data-action="chooseLoginMode" data-mode="cashier">Caissier</div>
      </div>
    </div></div>`;
  }

  const roleLabel = state.loginMode === 'manager' ? 'Gérant' : 'Caissier';
  const errorHtml = state.loginError ? `<div class="pos-error" style="margin-bottom:2px">${esc(state.loginError)}</div>` : '';
  return `<div class="login-screen"><div class="login-card">
    ${brandHtml}
    <div class="login-label">CONNEXION — ${esc(roleLabel.toUpperCase())}</div>
    <div class="login-buttons">
      <input id="field-loginUsername" class="field-lg" type="text" placeholder="Nom d'utilisateur ou téléphone" value="${esc(state.loginUsername)}" data-bind="loginUsername" autocomplete="username" />
      <input id="field-loginPassword" class="field-lg" type="password" placeholder="Mot de passe" value="${esc(state.loginPassword)}" data-bind="loginPassword" autocomplete="current-password" />
      ${errorHtml}
      <div class="login-btn manager" data-action="submitLogin">Se connecter</div>
      <div class="login-back" data-action="backToRoleSelect">← Choisir un autre rôle</div>
    </div>
  </div></div>`;
}

function renderShell() {
  return `<div class="shell">
    ${renderSidebar()}
    <div class="main">${renderTopbar()}<div class="content">${renderScreen()}</div></div>
    ${renderScannerModal()}
    ${renderReceiptModal()}
    ${renderToastEl()}
  </div>`;
}

function renderSidebar() {
  const isManager = state.role === 'manager';
  const navHtml = NAV_ITEMS.filter((n) => !n.managerOnly || isManager).map((n) => {
    const active = state.screen === n.key;
    return `<div class="nav-item${active ? ' active' : ''}" data-action="nav" data-screen="${n.key}">${n.icon}<span>${n.label}</span></div>`;
  }).join('');
  return `<div class="sidebar">
    <div class="sidebar-brand"><div class="sidebar-logo">B</div><div><div class="sidebar-brand-name">BoissonMan</div><div class="sidebar-brand-sub">Supermarché de boissons</div></div></div>
    <div class="sidebar-nav">${navHtml}</div>
    ${renderDepotSwitcher()}
    <div class="sidebar-footer">
      <div class="sidebar-avatar">${esc(state.userName ? state.userName.charAt(0) : '?')}</div>
      <div style="flex:1;min-width:0">
        <div class="sidebar-user-name">${esc(state.userName)}</div>
        <div class="sidebar-user-role">${isManager ? 'Gérant' : 'Caissier'}</div>
      </div>
      <div class="sidebar-logout" data-action="logout" title="Déconnexion">${ICON_LOGOUT}</div>
    </div>
  </div>`;
}

function renderDepotSwitcher() {
  if (state.role === 'manager') {
    const options = state.depots.map((d) => `<option value="${d.id}"${state.currentDepotId === d.id ? ' selected' : ''}>${esc(d.name)}</option>`).join('');
    return `<div class="sidebar-depot">
      <div class="sidebar-depot-label">DÉPÔT ACTIF</div>
      <select id="field-currentDepotId" class="sidebar-depot-select" data-bind="currentDepotId">${options}</select>
    </div>`;
  }
  return `<div class="sidebar-depot">
    <div class="sidebar-depot-label">DÉPÔT</div>
    <div class="sidebar-depot-static">${esc(depotName(state.currentDepotId)) || '—'}</div>
  </div>`;
}

// Depot filter used at the top of Dashboard/Stocks/Rapports. Managers get a
// dropdown (optionally including "Tous les dépôts"); cashiers are locked to
// their own depot, shown as a plain label.
function renderDepotFilter(bind, allowAll) {
  if (state.role !== 'manager') {
    return `<div class="depot-filter-static">Dépôt : <strong>${esc(depotName(state.currentDepotId))}</strong></div>`;
  }
  const value = state[bind];
  let opts = allowAll ? `<option value="all"${value === 'all' ? ' selected' : ''}>Tous les dépôts</option>` : '';
  opts += state.depots.map((d) => `<option value="${d.id}"${value === d.id ? ' selected' : ''}>${esc(d.name)}</option>`).join('');
  return `<select id="field-${bind}" class="field" data-bind="${bind}">${opts}</select>`;
}

function renderTopbar() {
  const t = TITLES[state.screen] || TITLES.dashboard;
  const today = new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
  return `<div class="topbar">
    <div><div class="topbar-title">${t[0]}</div><div class="topbar-subtitle">${t[1]}</div></div>
    <div style="display:flex;align-items:center;gap:16px"><div class="topbar-date">${esc(today)}</div></div>
  </div>`;
}

function renderScreen() {
  switch (state.screen) {
    case 'caisse': return renderCaisse();
    case 'stocks': return renderStocks();
    case 'depots': return renderDepots();
    case 'categories': return renderCategories();
    case 'fournisseurs': return renderFournisseurs();
    case 'clients': return renderClients();
    case 'credits': return renderCredits();
    case 'expenses': return renderExpenses();
    case 'rapports': return renderRapports();
    case 'employes': return renderEmployes();
    case 'account': return renderAccount();
    default: return renderDashboard();
  }
}

function renderDashboard() {
  const filterId = state.dashDepotFilter || 'all';
  const relevantSales = salesForDepot(filterId);
  const sorted = relevantSales.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
  const now = Date.now();
  const last7 = sorted.filter((sa) => now - new Date(sa.date).getTime() <= 7 * 86400000);
  const kpiSalesCount = last7.length;
  const kpiRevenue = last7.reduce((a, sa) => a + sa.total, 0);
  const qtyOf = (p) => (filterId === 'all' ? stockTotal(p) : stockAt(p, filterId));
  const kpiOutOfStock = state.products.filter((p) => qtyOf(p) <= 0).length;
  const kpiClients = state.clients.length;
  const weekBars = computeWeekBars(relevantSales);
  const lowStock = state.products.filter((p) => qtyOf(p) <= p.minStock).slice(0, 6);
  const recent = sorted.slice(0, 5);

  const weekBarsHtml = weekBars.map((b) => `
    <div class="week-bar-col"><div class="week-bar" style="height:${b.height}px"></div><div class="week-bar-label">${esc(b.label)}</div></div>`).join('');

  const lowStockHtml = lowStock.length ? lowStock.map((p) => {
    const st = stockStatus(qtyOf(p), p.minStock);
    return `<div class="low-stock-row"><div class="low-stock-name">${esc(p.name)}</div><span class="badge ${st.cls}">${st.label}</span></div>`;
  }).join('') : `<div style="font-size:13px;color:var(--muted);padding:8px 10px">Tous les stocks sont sains.</div>`;

  const salesRowsHtml = recent.map((sa) => `<tr>
    <td>${esc(dayLabel(sa.date))}</td><td>${esc(sa.cashier)}</td><td>${esc(sa.depotName || '—')}</td><td>${sa.itemCount}</td><td>${esc(sa.paymentMethod)}</td>
    <td class="right" style="font-weight:700">${fcfa(sa.total)}</td></tr>`).join('');

  return `
    <div style="display:flex;justify-content:flex-end;margin-bottom:16px">${renderDepotFilter('dashDepotFilter', true)}</div>
    <div class="kpi-grid">
      <div class="card"><div class="kpi-label">VENTES (7 JOURS)</div><div class="kpi-value">${kpiSalesCount}</div></div>
      <div class="card"><div class="kpi-label">REVENU (7 JOURS)</div><div class="kpi-value" style="color:var(--green)">${fcfa(kpiRevenue)}</div></div>
      <div class="card"><div class="kpi-label">RUPTURES DE STOCK</div><div class="kpi-value" style="color:var(--danger)">${kpiOutOfStock}</div></div>
      <div class="card"><div class="kpi-label">CLIENTS ENREGISTRÉS</div><div class="kpi-value">${kpiClients}</div></div>
    </div>
    <div class="dash-grid">
      <div class="card"><div class="card-title">Revenu des 7 derniers jours</div><div class="week-bars">${weekBarsHtml}</div></div>
      <div class="card"><div class="card-title">Stock faible / rupture</div><div class="low-stock-list">${lowStockHtml}</div></div>
    </div>
    <div class="card" style="margin-top:16px">
      <div class="card-title">Ventes récentes</div>
      <table class="data-table">
        <tr><th>DATE</th><th>CAISSIER</th><th>DÉPÔT</th><th>ARTICLES</th><th>PAIEMENT</th><th class="right">TOTAL</th></tr>
        ${salesRowsHtml}
      </table>
    </div>`;
}

function renderCaisse() {
  const catTabs = `<div class="pos-tab${state.posCategory === 'all' ? ' active' : ''}" data-action="setPosCatAll">Tous</div>` +
    state.categories.map((c) => `<div class="pos-tab${state.posCategory === c.id ? ' active' : ''}" data-action="setPosCategory" data-id="${c.id}">${esc(c.name)}</div>`).join('');

  let products = state.products;
  if (state.posCategory !== 'all') products = products.filter((p) => p.categoryId === state.posCategory);
  if (state.posSearch.trim()) products = products.filter((p) => p.name.toLowerCase().includes(state.posSearch.trim().toLowerCase()));
  const catById = {}; state.categories.forEach((c) => { catById[c.id] = c; });

  const productsHtml = products.map((p) => {
    const qty = stockAt(p, state.currentDepotId);
    const disabled = qty <= 0;
    const cat = catById[p.categoryId];
    const packHtml = (!disabled && p.unitsPerPack > 1 && qty >= p.unitsPerPack)
      ? `<div class="pos-unit-chip" data-action="addToCart" data-id="${p.id}" data-unit="pack" title="Ajouter un paquet de ${p.unitsPerPack}">Paquet (${p.unitsPerPack}) · ${fcfa(p.pricePerPack)}</div>` : '';
    const cartonHtml = (!disabled && p.unitsPerCarton > 1 && qty >= p.unitsPerCarton)
      ? `<div class="pos-unit-chip" data-action="addToCart" data-id="${p.id}" data-unit="carton" title="Ajouter un carton de ${p.unitsPerCarton}">Carton (${p.unitsPerCarton}) · ${fcfa(p.pricePerCarton)}</div>` : '';
    return `<div class="pos-product-card${disabled ? ' disabled' : ''}"${disabled ? '' : ` data-action="addToCart" data-id="${p.id}" data-unit="detail"`}>
      <div class="pos-product-dot" style="background:${cat ? cat.color : '#888'}"></div>
      <div class="pos-product-name">${esc(p.name)}</div>
      <div class="pos-product-stock">${disabled ? 'Rupture de stock' : qty + ' en stock'}</div>
      <div class="pos-product-price">${fcfa(p.price)}</div>
      ${(packHtml || cartonHtml) ? `<div class="pos-unit-chips">${packHtml}${cartonHtml}</div>` : ''}
    </div>`;
  }).join('');

  const cartHtml = state.cart.length ? state.cart.map((ci) => {
    const p = state.products.find((pp) => pp.id === ci.productId);
    if (!p) return '';
    const pkg = packagingFor(p, ci.unit);
    const unitLabel = ci.unit === 'pack' ? 'paquet' : ci.unit === 'carton' ? 'carton' : 'unité';
    return `<div class="cart-row">
      <div style="flex:1;min-width:0"><div class="cart-row-name">${esc(p.name)}</div><div class="cart-row-price">${fcfa(pkg.price)} / ${unitLabel}${ci.unit !== 'detail' ? ` <span class="cart-row-unit">(${pkg.multiplier} u.)</span>` : ''}</div></div>
      <div class="stepper">
        <div class="stepper-btn" data-action="cartMinus" data-id="${p.id}" data-unit="${ci.unit}">−</div>
        <div style="width:22px;text-align:center;font-size:13px;font-weight:700">${ci.qty}</div>
        <div class="stepper-btn" data-action="cartPlus" data-id="${p.id}" data-unit="${ci.unit}">+</div>
      </div>
      <div class="cart-row-total">${fcfa(pkg.price * ci.qty)}</div>
      <div class="cart-row-remove" data-action="cartRemove" data-id="${p.id}" data-unit="${ci.unit}">×</div>
    </div>`;
  }).join('') : `<div class="cart-empty">Le panier est vide.<br/>Cliquez sur un produit pour l'ajouter.</div>`;

  const cartCount = state.cart.reduce((a, c) => { const p = state.products.find((pp) => pp.id === c.productId); return a + (p ? c.qty * packagingFor(p, c.unit).multiplier : 0); }, 0);
  const cartTotal = state.cart.reduce((a, ci) => { const p = state.products.find((pp) => pp.id === ci.productId); return a + (p ? packagingFor(p, ci.unit).price * ci.qty : 0); }, 0);
  const clientOptions = state.clients.map((c) => `<option value="${c.id}"${state.posClientId === c.id ? ' selected' : ''}>${esc(c.name)} (${c.points} pts)</option>`).join('');
  const errorHtml = state.scanError
    ? `<div class="pos-error">${esc(state.scanError)}</div>`
    : `<div class="pos-hint">Astuce : un lecteur de code-barres USB fonctionne directement dans ce champ.</div>`;

  return `<div class="pos-grid">
    <div class="pos-products-col">
      <div style="display:flex;gap:10px;margin-bottom:10px">
        <input id="field-posSearch" type="text" class="field-lg" style="flex:1" placeholder="Rechercher un produit..." value="${esc(state.posSearch)}" data-bind="posSearch" />
      </div>
      <div style="display:flex;gap:10px;margin-bottom:6px">
        <input id="field-scanInput" type="text" class="field-lg" style="flex:1" placeholder="Scanner ou saisir un code-barres..." value="${esc(state.scanInput)}" data-bind="scanInput" />
        <div class="camera-btn" data-action="openScanner">${ICON_CAMERA} Caméra</div>
      </div>
      ${errorHtml}
      <div class="pos-cat-tabs">${catTabs}</div>
      <div class="pos-product-grid">${productsHtml}</div>
    </div>
    <div class="cart-panel">
      <div class="cart-header">Panier (${cartCount}) <span style="font-weight:600;color:var(--muted);font-size:12px">· ${esc(depotName(state.currentDepotId))}</span></div>
      <div class="cart-items">${cartHtml}</div>
      <div class="cart-footer">
        <select id="field-posClientId" class="field" data-bind="posClientId">
          <option value=""${state.posClientId === '' ? ' selected' : ''}>Client de passage</option>
          ${clientOptions}
        </select>
        <div class="pay-tabs">
          <div class="pay-tab${state.paymentMethod === 'Espèces' ? ' active' : ''}" data-action="setPayCash">Espèces</div>
          <div class="pay-tab${state.paymentMethod === 'Mobile Money' ? ' active' : ''}" data-action="setPayMobile">Mobile Money</div>
          <div class="pay-tab${state.paymentMethod === 'Carte' ? ' active' : ''}" data-action="setPayCard">Carte</div>
          <div class="pay-tab${state.paymentMethod === 'Crédit' ? ' active' : ''}" data-action="setPayCredit">Crédit</div>
        </div>
        ${state.paymentMethod === 'Crédit' && !state.posClientId ? `<div class="pos-error">Sélectionnez un client pour une vente à crédit.</div>` : ''}
        ${state.paymentMethod === 'Crédit' ? `<input id="field-posAdvance" class="field" type="number" placeholder="Avance versée maintenant (optionnel)" value="${esc(state.posAdvance)}" data-bind="posAdvance" />` : ''}
        <div class="cart-total-row"><span>Total</span><span class="cart-total-value">${fcfa(cartTotal)}</span></div>
        <div class="checkout-btn" style="${state.cart.length && !(state.paymentMethod === 'Crédit' && !state.posClientId) ? '' : 'opacity:0.5;cursor:not-allowed'}" data-action="checkout">Encaisser</div>
      </div>
    </div>
  </div>`;
}

function renderStocks() {
  const catOptions = state.categories.map((c) => `<option value="${c.id}"${state.stockCatFilter === c.id ? ' selected' : ''}>${esc(c.name)}</option>`).join('');
  const npCatOptions = state.categories.map((c) => `<option value="${c.id}"${state.npCategoryId === c.id ? ' selected' : ''}>${esc(c.name)}</option>`).join('');
  const npSupOptions = state.suppliers.map((s) => `<option value="${s.id}"${state.npSupplierId === s.id ? ' selected' : ''}>${esc(s.name)}</option>`).join('');
  const npDepotOptions = state.depots.map((d) => `<option value="${d.id}"${state.npDepotId === d.id ? ' selected' : ''}>${esc(d.name)}</option>`).join('');

  const filterId = state.stockDepotFilter || 'all';
  let list = state.products;
  if (state.stockCatFilter !== 'all') list = list.filter((p) => p.categoryId === state.stockCatFilter);
  if (state.stockSearch.trim()) list = list.filter((p) => p.name.toLowerCase().includes(state.stockSearch.trim().toLowerCase()));
  const catById = {}; state.categories.forEach((c) => { catById[c.id] = c; });

  const rowsHtml = list.map((p) => {
    const cat = catById[p.categoryId];
    const qty = filterId === 'all' ? stockTotal(p) : stockAt(p, filterId);
    const st = stockStatus(qty, p.minStock);
    const adjustHtml = filterId === 'all'
      ? `<span style="color:var(--muted);font-size:12px">tous dépôts</span>`
      : `<div class="stepper">
          <div class="stepper-btn" data-action="stockDec" data-id="${p.id}">−</div>
          <div class="stepper-btn" data-action="stockInc" data-id="${p.id}">+</div>
          <div class="stepper-btn" style="color:var(--green)" data-action="quickRestock" data-id="${p.id}" title="Réapprovisionner">${ICON_RESTOCK}</div>
        </div>`;
    const packagingHint = (p.unitsPerPack > 1 || p.unitsPerCarton > 1)
      ? `<div style="font-size:10.5px;color:var(--muted)">${p.unitsPerPack > 1 ? `paquet ${p.unitsPerPack}` : ''}${p.unitsPerPack > 1 && p.unitsPerCarton > 1 ? ' · ' : ''}${p.unitsPerCarton > 1 ? `carton ${p.unitsPerCarton}` : ''}</div>` : '';
    return `<tr>
      <td style="font-weight:600">${esc(p.name)} <span style="cursor:pointer;color:var(--muted);vertical-align:middle" data-action="editProduct" data-id="${p.id}" title="Modifier">${ICON_EDIT}</span>${packagingHint}</td>
      <td><span class="dot" style="background:${cat ? cat.color : '#888'}"></span>${cat ? esc(cat.name) : '—'}</td>
      <td class="right">${fcfa(p.price)}</td>
      <td class="center" style="font-weight:700">${qty}</td>
      <td class="center"><span class="badge ${st.cls}">${st.label}</span></td>
      <td class="center">${adjustHtml}</td>
    </tr>`;
  }).join('');

  const isEditingProduct = !!state.editingProductId;
  const addFormHtml = state.showAddProduct ? `<div class="add-form cols-4">
    <input id="field-npName" class="field" type="text" placeholder="Nom du produit" value="${esc(state.npName)}" data-bind="npName" />
    <select id="field-npCategoryId" class="field" data-bind="npCategoryId">${npCatOptions}</select>
    <select id="field-npSupplierId" class="field" data-bind="npSupplierId">${npSupOptions}</select>
    ${isEditingProduct ? '' : `<select id="field-npDepotId" class="field" data-bind="npDepotId" title="Dépôt de réception du stock initial">${npDepotOptions}</select>`}
    <input id="field-npPrice" class="field" type="number" placeholder="Prix vente au détail (FCFA)" value="${esc(state.npPrice)}" data-bind="npPrice" />
    <input id="field-npCost" class="field" type="number" placeholder="Prix achat (FCFA)" value="${esc(state.npCost)}" data-bind="npCost" />
    ${isEditingProduct ? '' : `<input id="field-npStock" class="field" type="number" placeholder="Stock initial" value="${esc(state.npStock)}" data-bind="npStock" />`}
    <input id="field-npMinStock" class="field" type="number" placeholder="Seuil minimum" value="${esc(state.npMinStock)}" data-bind="npMinStock" />
    <input id="field-npUnitsPerPack" class="field" type="number" placeholder="Unités par paquet (optionnel)" value="${esc(state.npUnitsPerPack)}" data-bind="npUnitsPerPack" />
    <input id="field-npPricePerPack" class="field" type="number" placeholder="Prix du paquet (FCFA)" value="${esc(state.npPricePerPack)}" data-bind="npPricePerPack" />
    <input id="field-npUnitsPerCarton" class="field" type="number" placeholder="Unités par carton (optionnel)" value="${esc(state.npUnitsPerCarton)}" data-bind="npUnitsPerCarton" />
    <input id="field-npPricePerCarton" class="field" type="number" placeholder="Prix du carton (FCFA)" value="${esc(state.npPricePerCarton)}" data-bind="npPricePerCarton" />
    <div class="save-btn" data-action="saveProduct">${isEditingProduct ? 'Mettre à jour' : 'Enregistrer'}</div>
  </div>` : '';

  const transferHtml = state.showTransfer && state.role === 'manager' ? renderTransferForm() : '';
  const restockHtml = state.showRestock ? renderRestockForm() : '';

  return `<div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:10px">
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <input id="field-stockSearch" class="field-lg" style="width:240px" type="text" placeholder="Rechercher..." value="${esc(state.stockSearch)}" data-bind="stockSearch" />
        <select id="field-stockCatFilter" class="field" data-bind="stockCatFilter">
          <option value="all"${state.stockCatFilter === 'all' ? ' selected' : ''}>Toutes les catégories</option>
          ${catOptions}
        </select>
        ${renderDepotFilter('stockDepotFilter', true)}
      </div>
      <div style="display:flex;gap:10px">
        ${state.depots.length > 1 && state.role === 'manager' ? `<div class="add-btn" style="background:#fff;color:var(--green);border:1px solid var(--border)" data-action="toggleTransfer">⇄ Transférer du stock</div>` : ''}
        <div class="add-btn" style="background:#fff;color:var(--green);border:1px solid var(--border)" data-action="toggleRestock">↓ Réapprovisionner</div>
        <div class="add-btn" data-action="toggleAddProduct">+ Ajouter un produit</div>
      </div>
    </div>
    ${transferHtml}
    ${restockHtml}
    ${addFormHtml}
    <div class="table-card"><table class="data-table">
      <tr><th>PRODUIT</th><th>CATÉGORIE</th><th class="right">PRIX</th><th class="center">STOCK</th><th class="center">STATUT</th><th class="center">AJUSTER</th></tr>
      ${rowsHtml}
    </table></div>
  </div>`;
}

function renderTransferForm() {
  const productOptions = state.products.slice().sort((a, b) => a.name.localeCompare(b.name))
    .map((p) => `<option value="${p.id}"${state.trProductId === p.id ? ' selected' : ''}>${esc(p.name)}</option>`).join('');
  const fromOptions = state.depots.map((d) => `<option value="${d.id}"${state.trFromDepotId === d.id ? ' selected' : ''}>${esc(d.name)}</option>`).join('');
  const toOptions = state.depots.map((d) => `<option value="${d.id}"${state.trToDepotId === d.id ? ' selected' : ''}>${esc(d.name)}</option>`).join('');
  const product = state.products.find((p) => p.id === state.trProductId);
  const availableHint = product && state.trFromDepotId
    ? `<div style="font-size:11.5px;color:var(--muted);grid-column:1/-1">Disponible au dépôt source : ${stockAt(product, state.trFromDepotId)}</div>` : '';
  return `<div class="add-form cols-4">
    <select id="field-trProductId" class="field" data-bind="trProductId"><option value="">Choisir un produit</option>${productOptions}</select>
    <select id="field-trFromDepotId" class="field" data-bind="trFromDepotId"><option value="">Depuis...</option>${fromOptions}</select>
    <select id="field-trToDepotId" class="field" data-bind="trToDepotId"><option value="">Vers...</option>${toOptions}</select>
    <input id="field-trQty" class="field" type="number" placeholder="Quantité" value="${esc(state.trQty)}" data-bind="trQty" />
    ${availableHint}
    <div class="save-btn" data-action="doTransfer">Transférer</div>
  </div>`;
}

function renderRestockForm() {
  const productOptions = state.products.slice().sort((a, b) => a.name.localeCompare(b.name))
    .map((p) => `<option value="${p.id}"${state.rsProductId === p.id ? ' selected' : ''}>${esc(p.name)}</option>`).join('');
  const depotOptions = state.depots.map((d) => `<option value="${d.id}"${state.rsDepotId === d.id ? ' selected' : ''}>${esc(d.name)}</option>`).join('');
  const product = state.products.find((p) => p.id === state.rsProductId);

  let unitOptions = `<option value="detail"${state.rsUnit === 'detail' ? ' selected' : ''}>Détail (unité)</option>`;
  if (product && product.unitsPerPack > 1) unitOptions += `<option value="pack"${state.rsUnit === 'pack' ? ' selected' : ''}>Paquet (${product.unitsPerPack})</option>`;
  if (product && product.unitsPerCarton > 1) unitOptions += `<option value="carton"${state.rsUnit === 'carton' ? ' selected' : ''}>Carton (${product.unitsPerCarton})</option>`;
  const unitSelectHtml = `<select id="field-rsUnit" class="field" data-bind="rsUnit">${unitOptions}</select>`;

  const qtyPlaceholder = state.rsUnit === 'pack' ? 'Nombre de paquets reçus' : state.rsUnit === 'carton' ? 'Nombre de cartons reçus' : 'Quantité reçue (unités)';

  let currentHint = '';
  if (product && state.rsDepotId) {
    const pkg = packagingFor(product, state.rsUnit);
    const multiplierHint = state.rsUnit !== 'detail' ? ` (1 ${pkg.label} = ${pkg.multiplier} unités)` : '';
    currentHint = `<div style="font-size:11.5px;color:var(--muted);grid-column:1/-1">Stock actuel au dépôt choisi : ${stockAt(product, state.rsDepotId)}${multiplierHint}</div>`;
  }
  return `<div class="add-form cols-4">
    <select id="field-rsProductId" class="field" data-bind="rsProductId"><option value="">Choisir un produit</option>${productOptions}</select>
    <select id="field-rsDepotId" class="field" data-bind="rsDepotId"><option value="">Choisir un dépôt</option>${depotOptions}</select>
    ${unitSelectHtml}
    <input id="field-rsQty" class="field" type="number" placeholder="${qtyPlaceholder}" value="${esc(state.rsQty)}" data-bind="rsQty" />
    <div class="save-btn" data-action="doRestock">Réapprovisionner</div>
    ${currentHint}
  </div>`;
}

function renderDepots() {
  const cards = state.depots.map((d) => {
    let units = 0, value = 0;
    state.products.forEach((p) => { const q = stockAt(p, d.id); units += q; value += q * p.price; });
    return `<div class="card">
      <div class="cat-name">${esc(d.name)}</div>
      <div class="cat-meta">${esc(d.address || 'Adresse non renseignée')}</div>
      <div class="cat-meta" style="margin-top:8px">${units} unités en stock</div>
      <div class="cat-meta">Valeur stock : ${fcfa(value)}</div>
    </div>`;
  }).join('');
  const addFormHtml = state.showAddDepot ? `<div class="add-form cols-inline" style="gap:10px">
    <input id="field-ndName" class="field" style="flex:1" type="text" placeholder="Nom du dépôt" value="${esc(state.ndName)}" data-bind="ndName" />
    <input id="field-ndAddress" class="field" style="flex:1" type="text" placeholder="Adresse" value="${esc(state.ndAddress)}" data-bind="ndAddress" />
    <div class="save-btn" data-action="addDepot">Enregistrer</div>
  </div>` : '';
  return `<div>
    <div style="display:flex;justify-content:flex-end;margin-bottom:16px"><div class="add-btn" data-action="toggleAddDepot">+ Ajouter un dépôt</div></div>
    ${addFormHtml}
    <div class="cat-grid">${cards}</div>
  </div>`;
}

function renderCategories() {
  const cards = state.categories.map((c) => {
    const prods = state.products.filter((p) => p.categoryId === c.id);
    const stockValue = prods.reduce((a, p) => a + stockTotal(p) * p.price, 0);
    const key = categoryIconKey(c.name);
    return `<div class="card">
      <div class="cat-icon-wrap" style="background:${c.color}20;color:${c.color}">${CAT_ICONS[key]}</div>
      <div class="cat-name">${esc(c.name)}</div>
      <div class="cat-meta">${prods.length} produits</div>
      <div class="cat-meta">Valeur stock: ${fcfa(stockValue)}</div>
    </div>`;
  }).join('');
  const addFormHtml = state.showAddCategory ? `<div class="add-form cols-inline" style="gap:10px">
    <input id="field-ncName" class="field" style="flex:1" type="text" placeholder="Nom de la catégorie" value="${esc(state.ncName)}" data-bind="ncName" />
    <div class="save-btn" data-action="addCategory">Enregistrer</div>
  </div>` : '';
  return `<div>
    <div style="display:flex;justify-content:flex-end;margin-bottom:16px"><div class="add-btn" data-action="toggleAddCategory">+ Ajouter une catégorie</div></div>
    ${addFormHtml}
    <div class="cat-grid">${cards}</div>
  </div>`;
}

function renderFournisseurs() {
  const rows = state.suppliers.map((s) => {
    const count = state.products.filter((p) => p.supplierId === s.id).length;
    return `<tr><td style="font-weight:600">${esc(s.name)}</td><td>${esc(s.phone)}</td><td>${esc(s.email)}</td><td class="center">${count}</td></tr>`;
  }).join('');
  const addFormHtml = state.showAddSupplier ? `<div class="add-form cols-4">
    <input id="field-nsName" class="field" type="text" placeholder="Nom du fournisseur" value="${esc(state.nsName)}" data-bind="nsName" />
    <input id="field-nsPhone" class="field" type="text" placeholder="Téléphone" value="${esc(state.nsPhone)}" data-bind="nsPhone" />
    <input id="field-nsEmail" class="field" type="text" placeholder="Email" value="${esc(state.nsEmail)}" data-bind="nsEmail" />
    <div class="save-btn" data-action="addSupplier">Enregistrer</div>
  </div>` : '';
  return `<div>
    <div style="display:flex;justify-content:flex-end;margin-bottom:16px"><div class="add-btn" data-action="toggleAddSupplier">+ Ajouter un fournisseur</div></div>
    ${addFormHtml}
    <div class="table-card"><table class="data-table">
      <tr><th>FOURNISSEUR</th><th>TÉLÉPHONE</th><th>EMAIL</th><th class="center">PRODUITS FOURNIS</th></tr>
      ${rows}
    </table></div>
  </div>`;
}

function renderClients() {
  const creditByClient = {};
  state.sales.forEach((sa) => {
    if (sa.paymentMethod === 'Crédit' && sa.creditRemaining > 0 && sa.clientId) {
      creditByClient[sa.clientId] = (creditByClient[sa.clientId] || 0) + sa.creditRemaining;
    }
  });
  const rows = state.clients.map((c) => {
    const owed = creditByClient[c.id] || 0;
    return `<tr><td style="font-weight:600">${esc(c.name)}</td><td>${esc(c.phone)}</td><td class="center">${c.points}</td><td class="right">${fcfa(c.totalSpent)}</td><td class="right"${owed ? ' style="color:var(--danger);font-weight:700"' : ''}>${owed ? fcfa(owed) : '—'}</td></tr>`;
  }).join('');
  const addFormHtml = state.showAddClient ? `<div class="add-form cols-inline" style="gap:10px">
    <input id="field-ncliName" class="field" style="flex:1" type="text" placeholder="Nom du client" value="${esc(state.ncliName)}" data-bind="ncliName" />
    <input id="field-ncliPhone" class="field" style="flex:1" type="text" placeholder="Téléphone" value="${esc(state.ncliPhone)}" data-bind="ncliPhone" />
    <div class="save-btn" data-action="addClient">Enregistrer</div>
  </div>` : '';
  return `<div>
    <div style="display:flex;justify-content:flex-end;margin-bottom:16px"><div class="add-btn" data-action="toggleAddClient">+ Ajouter un client</div></div>
    ${addFormHtml}
    <div class="table-card"><table class="data-table">
      <tr><th>CLIENT</th><th>TÉLÉPHONE</th><th class="center">POINTS FIDÉLITÉ</th><th class="right">TOTAL DÉPENSÉ</th><th class="right">CRÉDIT EN COURS</th></tr>
      ${rows}
    </table></div>
  </div>`;
}

function renderCredits() {
  const filter = state.creditFilter || 'open';
  let creditSales = state.sales.filter((sa) => sa.paymentMethod === 'Crédit');
  const totalOutstanding = creditSales.reduce((a, sa) => a + (sa.creditRemaining || 0), 0);
  if (filter === 'open') creditSales = creditSales.filter((sa) => sa.creditRemaining > 0);
  creditSales = creditSales.slice().sort((a, b) => new Date(b.date) - new Date(a.date));

  const rows = creditSales.map((sa) => {
    const settled = sa.creditRemaining <= 0;
    const st = settled ? { label: 'Soldé', cls: 'ok' } : { label: 'En cours', cls: 'warning' };
    const actionHtml = settled ? '' : `<div class="add-btn" style="background:#fff;color:var(--green);border:1px solid var(--border);padding:6px 12px;font-size:12px" data-action="openCreditPayment" data-id="${sa.id}">Encaisser un versement</div>`;
    return `<tr>
      <td style="font-weight:600">${esc(sa.clientName || '—')}</td>
      <td>${esc(sa.depotName || '—')}</td>
      <td>${esc(dayLabel(sa.date))}</td>
      <td class="right">${fcfa(sa.total)}</td>
      <td class="right">${fcfa(sa.creditPaid || 0)}</td>
      <td class="right" style="font-weight:700;color:${settled ? 'var(--green)' : 'var(--danger)'}">${fcfa(sa.creditRemaining || 0)}</td>
      <td class="center"><span class="badge ${st.cls}">${st.label}</span></td>
      <td class="center">${actionHtml}</td>
    </tr>`;
  }).join('');

  const paymentFormHtml = state.showCreditPayment ? renderCreditPaymentForm() : '';

  return `<div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:10px">
      <div class="card" style="padding:14px 18px"><div class="kpi-label">CRÉDIT TOTAL EN COURS</div><div class="kpi-value" style="color:var(--danger)">${fcfa(totalOutstanding)}</div></div>
      <select id="field-creditFilter" class="field" data-bind="creditFilter">
        <option value="open"${filter === 'open' ? ' selected' : ''}>Crédits en cours</option>
        <option value="all"${filter === 'all' ? ' selected' : ''}>Tout l'historique</option>
      </select>
    </div>
    ${paymentFormHtml}
    <div class="table-card"><table class="data-table">
      <tr><th>CLIENT</th><th>DÉPÔT</th><th>DATE</th><th class="right">TOTAL</th><th class="right">PAYÉ</th><th class="right">RESTANT</th><th class="center">STATUT</th><th class="center">ACTION</th></tr>
      ${rows || '<tr><td colspan="8" style="text-align:center;color:var(--muted);padding:20px">Aucune vente à crédit.</td></tr>'}
    </table></div>
  </div>`;
}

function renderCreditPaymentForm() {
  const sale = state.sales.find((s) => s.id === state.cpSaleId);
  if (!sale) return '';
  return `<div class="add-form cols-4">
    <div style="grid-column:1/-1;font-size:13px">${esc(sale.clientName)} — reste à payer : <strong>${fcfa(sale.creditRemaining)}</strong></div>
    <input id="field-cpAmount" class="field" type="number" placeholder="Montant du versement" value="${esc(state.cpAmount)}" data-bind="cpAmount" />
    <div class="save-btn" data-action="doCreditPayment">Encaisser</div>
    <div class="add-btn" style="background:#fff;color:var(--muted);border:1px solid var(--border)" data-action="cancelCreditPayment">Annuler</div>
  </div>`;
}

function renderExpenses() {
  const filterId = state.expenseDepotFilter || 'all';
  let list = filterId === 'all' ? state.expenses : state.expenses.filter((e) => e.depotId === filterId);
  const total = list.reduce((a, e) => a + e.amount, 0);
  list = list.slice().sort((a, b) => new Date(b.date) - new Date(a.date));

  const rows = list.map((e) => `<tr>
    <td>${esc(dayLabel(e.date))}</td>
    <td style="font-weight:600">${esc(e.category)}</td>
    <td>${esc(e.depotName || '—')}</td>
    <td>${e.note ? esc(e.note) : '<span style="color:var(--muted)">—</span>'}</td>
    <td>${esc(e.recordedBy) || '—'}</td>
    <td class="right" style="font-weight:700;color:var(--danger)">${fcfa(e.amount)}</td>
  </tr>`).join('');

  const catOptions = EXPENSE_CATEGORIES.map((c) => `<option value="${c}"${state.exCategory === c ? ' selected' : ''}>${esc(c)}</option>`).join('');
  const depotOptions = state.depots.map((d) => `<option value="${d.id}"${state.exDepotId === d.id ? ' selected' : ''}>${esc(d.name)}</option>`).join('');
  const customCatHtml = state.exCategory === 'Autre'
    ? `<input id="field-exCustomCategory" class="field" type="text" placeholder="Préciser la catégorie" value="${esc(state.exCustomCategory)}" data-bind="exCustomCategory" />` : '';

  const addFormHtml = state.showAddExpense ? `<div class="add-form cols-4">
    <select id="field-exCategory" class="field" data-bind="exCategory">${catOptions}</select>
    ${customCatHtml}
    <input id="field-exAmount" class="field" type="number" placeholder="Montant (FCFA)" value="${esc(state.exAmount)}" data-bind="exAmount" />
    <select id="field-exDepotId" class="field" data-bind="exDepotId">${depotOptions}</select>
    <input id="field-exNote" class="field" type="text" placeholder="Note (optionnel)" value="${esc(state.exNote)}" data-bind="exNote" />
    <div class="save-btn" data-action="addExpense">Enregistrer</div>
  </div>` : '';

  return `<div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:10px">
      <div class="card" style="padding:14px 18px"><div class="kpi-label">TOTAL DÉPENSES</div><div class="kpi-value" style="color:var(--danger)">${fcfa(total)}</div></div>
      <div style="display:flex;gap:10px;align-items:center">
        ${renderDepotFilter('expenseDepotFilter', true)}
        <div class="add-btn" data-action="toggleAddExpense">+ Ajouter une dépense</div>
      </div>
    </div>
    ${addFormHtml}
    <div class="table-card"><table class="data-table">
      <tr><th>DATE</th><th>CATÉGORIE</th><th>DÉPÔT</th><th>NOTE</th><th>ENREGISTRÉ PAR</th><th class="right">MONTANT</th></tr>
      ${rows || '<tr><td colspan="6" style="text-align:center;color:var(--muted);padding:20px">Aucune dépense enregistrée.</td></tr>'}
    </table></div>
  </div>`;
}

function renderRapports() {
  const filterId = state.repDepotFilter || 'all';
  const relevantSales = salesForDepot(filterId);
  const totalRevenue = relevantSales.reduce((a, sa) => a + sa.total, 0);
  const salesCount = relevantSales.length;
  const avgBasket = salesCount ? totalRevenue / salesCount : 0;
  const unitsSold = relevantSales.reduce((a, sa) => a + sa.itemCount, 0);

  const relevantExpenses = filterId === 'all' ? state.expenses : state.expenses.filter((e) => e.depotId === filterId);
  const totalExpenses = relevantExpenses.reduce((a, e) => a + e.amount, 0);
  const creditOutstanding = relevantSales.filter((sa) => sa.paymentMethod === 'Crédit').reduce((a, sa) => a + (sa.creditRemaining || 0), 0);
  // Cash actually collected: non-credit sales count in full (assumed paid on
  // the spot); credit sales only count creditPaid — the advance taken at
  // sale time plus any later tranche payments — never the uncollected
  // remainder. Dépenses are then subtracted to get the real cash position.
  const cashCollected = relevantSales.reduce((a, sa) => a + (sa.paymentMethod === 'Crédit' ? (sa.creditPaid || 0) : sa.total), 0);
  const soldeCaisse = cashCollected - totalExpenses;

  // Revenue-by-category and top-products are derived from the itemised
  // history of real checkouts (sale.items) rather than the lifetime
  // product.sold counter, so they can be filtered by depot correctly —
  // they always cover every depot's full history, not just this filter.
  const soldMap = {}, revMap = {};
  state.sales.forEach((sa) => (sa.items || []).forEach((it) => {
    soldMap[it.productId] = (soldMap[it.productId] || 0) + (it.baseQty != null ? it.baseQty : it.qty);
    revMap[it.productId] = (revMap[it.productId] || 0) + it.lineTotal;
  }));
  const catRevenue = state.categories.map((c) => {
    const rev = state.products.filter((p) => p.categoryId === c.id).reduce((a, p) => a + (revMap[p.id] || 0), 0);
    return { c, rev };
  });
  const maxCatRev = Math.max(1, ...catRevenue.map((x) => x.rev));
  const catRows = catRevenue.slice().sort((a, b) => b.rev - a.rev).map((x) => `
    <div>
      <div class="rev-row-head"><span style="font-weight:600">${esc(x.c.name)}</span><span style="color:var(--muted)">${fcfa(x.rev)}</span></div>
      <div class="rev-bar-track"><div class="rev-bar-fill" style="width:${(x.rev / maxCatRev) * 100}%;background:${x.c.color}"></div></div>
    </div>`).join('');
  const topProducts = state.products.map((p) => ({ p, sold: soldMap[p.id] || 0 })).filter((x) => x.sold > 0)
    .sort((a, b) => b.sold - a.sold).slice(0, 5).map((x, i) =>
      `<div class="top-product-row"><div style="font-size:13px;font-weight:600">${i + 1}. ${esc(x.p.name)}</div><div style="font-size:12.5px;color:var(--muted)">${x.sold} unités</div></div>`).join('');

  return `<div>
    <div style="display:flex;justify-content:flex-end;margin-bottom:16px">${renderDepotFilter('repDepotFilter', true)}</div>
    <div class="kpi-grid" style="margin-bottom:6px">
      <div class="card"><div class="kpi-label">REVENU TOTAL</div><div class="kpi-value" style="font-size:24px;color:var(--green)">${fcfa(totalRevenue)}</div></div>
      <div class="card"><div class="kpi-label">NOMBRE DE VENTES</div><div class="kpi-value" style="font-size:24px">${salesCount}</div></div>
      <div class="card"><div class="kpi-label">PANIER MOYEN</div><div class="kpi-value" style="font-size:24px">${fcfa(avgBasket)}</div></div>
      <div class="card"><div class="kpi-label">UNITÉS VENDUES</div><div class="kpi-value" style="font-size:24px">${unitsSold}</div></div>
    </div>
    <div class="kpi-grid" style="grid-template-columns:repeat(3,1fr);margin-bottom:6px">
      <div class="card"><div class="kpi-label">SOLDE DE CAISSE</div><div class="kpi-value" style="font-size:24px;color:${soldeCaisse >= 0 ? 'var(--green)' : 'var(--danger)'}">${fcfa(soldeCaisse)}</div></div>
      <div class="card"><div class="kpi-label">DÉPENSES</div><div class="kpi-value" style="font-size:24px;color:var(--danger)">${fcfa(totalExpenses)}</div></div>
      <div class="card"><div class="kpi-label">CRÉDIT EN COURS</div><div class="kpi-value" style="font-size:24px;color:var(--danger)">${fcfa(creditOutstanding)}</div></div>
    </div>
    <div style="font-size:11.5px;color:var(--muted);margin-bottom:14px">Le solde de caisse compte les ventes payées immédiatement en totalité, et les ventes à crédit seulement pour l'avance et les versements déjà reçus (pas le solde restant) — moins les dépenses. Le revenu par catégorie et le classement produits ci-dessous couvrent l'historique complet de toutes les boutiques.</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
      <div class="card"><div class="card-title">Revenu par catégorie</div><div style="display:flex;flex-direction:column;gap:12px">${catRows}</div></div>
      <div class="card"><div class="card-title">Top 5 produits</div><div style="display:flex;flex-direction:column;gap:10px">${topProducts || '<div style="font-size:13px;color:var(--muted)">Aucune vente enregistrée pour le moment.</div>'}</div></div>
    </div>
  </div>`;
}

function renderEmployes() {
  const isEditing = !!state.editingEmployeeId;
  const depotOptions = state.depots.map((d) => `<option value="${d.id}"${state.neDepotId === d.id ? ' selected' : ''}>${esc(d.name)}</option>`).join('');
  const rows = state.employees.map((e) => {
    const roleStyle = e.role === 'Gérant' ? 'background:var(--ok-bg);color:var(--green)' : 'background:#eef0ea;color:#4a5548';
    const statusStyle = e.active ? 'background:var(--ok-bg);color:var(--green)' : 'background:var(--danger-bg);color:var(--danger)';
    const actionsHtml = state.confirmDeleteEmployeeId === e.id
      ? `<div style="display:flex;gap:6px;align-items:center;justify-content:center">
          <span style="font-size:11px;color:var(--danger);font-weight:600">Supprimer ?</span>
          <div class="stepper-btn" style="color:var(--danger)" data-action="confirmDeleteEmployee" data-id="${e.id}" title="Confirmer">${ICON_CHECK}</div>
          <div class="stepper-btn" data-action="cancelDeleteEmployee" title="Annuler">${ICON_CLOSE}</div>
        </div>`
      : `<div style="display:flex;gap:10px;justify-content:center">
          <div style="cursor:pointer;color:var(--muted)" data-action="editEmployee" data-id="${e.id}" title="Modifier">${ICON_EDIT}</div>
          <div style="cursor:pointer;color:var(--danger)" data-action="askDeleteEmployee" data-id="${e.id}" title="Supprimer">${ICON_TRASH}</div>
        </div>`;
    return `<tr>
      <td style="font-weight:600">${esc(e.name)}</td>
      <td><span class="badge" style="${roleStyle}">${esc(e.role)}</span></td>
      <td>${esc(e.phone)}</td>
      <td>${e.depotId ? esc(depotName(e.depotId)) : 'Tous les dépôts'}</td>
      <td class="center"><span class="badge" style="cursor:pointer;${statusStyle}" data-action="toggleEmployeeActive" data-id="${e.id}">${e.active ? 'Actif' : 'Inactif'}</span></td>
      <td class="center">${actionsHtml}</td>
    </tr>`;
  }).join('');
  const passwordFieldHtml = isEditing ? '' : `<input id="field-nePassword" class="field" type="password" placeholder="Mot de passe (4 car. min)" value="${esc(state.nePassword)}" data-bind="nePassword" autocomplete="new-password" />`;
  const addFormHtml = state.showAddEmployee ? `<div class="add-form cols-4">
    <input id="field-neName" class="field" type="text" placeholder="Nom complet" value="${esc(state.neName)}" data-bind="neName" />
    <select id="field-neRole" class="field" data-bind="neRole">
      <option value="Gérant"${state.neRole === 'Gérant' ? ' selected' : ''}>Gérant</option>
      <option value="Caissier"${state.neRole === 'Caissier' ? ' selected' : ''}>Caissier</option>
    </select>
    <input id="field-nePhone" class="field" type="text" placeholder="Téléphone" value="${esc(state.nePhone)}" data-bind="nePhone" />
    <select id="field-neDepotId" class="field" data-bind="neDepotId"><option value="">Tous les dépôts</option>${depotOptions}</select>
    ${passwordFieldHtml}
    <div class="save-btn" data-action="saveEmployee">${isEditing ? 'Mettre à jour' : 'Enregistrer'}</div>
  </div>` : '';
  return `<div>
    <div style="display:flex;justify-content:flex-end;margin-bottom:16px"><div class="add-btn" data-action="toggleAddEmployee">+ Ajouter un employé</div></div>
    ${addFormHtml}
    <div class="table-card"><table class="data-table">
      <tr><th>NOM</th><th>RÔLE</th><th>TÉLÉPHONE</th><th>DÉPÔT</th><th class="center">STATUT</th><th class="center">ACTIONS</th></tr>
      ${rows}
    </table></div>
  </div>`;
}

function renderAccount() {
  const errorHtml = state.pwError ? `<div class="pos-error" style="margin-bottom:2px">${esc(state.pwError)}</div>` : '';
  const successHtml = state.pwSuccess ? `<div style="color:var(--green);font-size:12.5px;font-weight:600;margin-bottom:2px">${esc(state.pwSuccess)}</div>` : '';
  return `<div style="max-width:420px">
    <div class="card">
      <div class="card-title">Changer le mot de passe</div>
      <div style="font-size:12.5px;color:var(--muted);margin-bottom:14px">Connecté en tant que <strong>${esc(state.userName)}</strong></div>
      <div style="display:flex;flex-direction:column;gap:10px">
        <input id="field-pwCurrent" class="field-lg" type="password" placeholder="Mot de passe actuel" value="${esc(state.pwCurrent)}" data-bind="pwCurrent" autocomplete="current-password" />
        <input id="field-pwNew" class="field-lg" type="password" placeholder="Nouveau mot de passe (4 car. min)" value="${esc(state.pwNew)}" data-bind="pwNew" autocomplete="new-password" />
        <input id="field-pwConfirm" class="field-lg" type="password" placeholder="Confirmer le nouveau mot de passe" value="${esc(state.pwConfirm)}" data-bind="pwConfirm" autocomplete="new-password" />
        ${errorHtml}${successHtml}
        <div class="save-btn" style="padding:11px;justify-content:center" data-action="submitChangePassword">Mettre à jour le mot de passe</div>
      </div>
    </div>
  </div>`;
}

function renderScannerModal() {
  if (!state.showScanner) return '';
  const errorHtml = state.scanError ? `<div class="pos-error" style="text-align:center;margin-top:8px">${esc(state.scanError)}</div>` : '';
  return `<div class="modal-overlay">
    <div class="modal-card scanner-modal">
      <div class="modal-header"><div class="modal-title">Scanner un produit</div><div class="modal-close" data-action="closeScanner">×</div></div>
      <div class="modal-body">
        <div class="scanner-frame"><video id="scanner-video" autoplay muted playsinline></video><div class="scanner-reticle"></div></div>
        <div class="scanner-hint">Placez le code-barres ou QR code du produit devant la caméra.</div>
        ${errorHtml}
      </div>
      <div class="modal-footer"><div class="modal-footer-btn secondary" style="flex:1" data-action="closeScanner">Fermer</div></div>
    </div>
  </div>`;
}

function renderReceiptModal() {
  if (!state.showReceipt || !state.lastReceipt) return '';
  const r = state.lastReceipt;
  const dateObj = new Date(r.date);
  const dateLabel = dateObj.toLocaleDateString('fr-FR');
  const timeLabel = dateObj.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  const itemsHtml = r.items.map((it) => {
    const unitLabel = it.unit === 'pack' ? 'paquet' : it.unit === 'carton' ? 'carton' : null;
    const qtyLabel = unitLabel ? `${it.qty} ${unitLabel}${it.qty > 1 ? 's' : ''}` : `${it.qty}`;
    return `<div class="receipt-item">
    <div class="receipt-item-top"><span>${esc(it.name)}</span><span>${fcfa(it.lineTotal)}</span></div>
    <div class="receipt-item-sub"><span>${qtyLabel} × ${fcfa(it.unitPrice)}</span></div>
  </div>`;
  }).join('');
  const clientRow = r.clientName ? `<div class="receipt-meta-row"><span>Client</span><span>${esc(r.clientName)}</span></div>` : '';
  return `<div class="modal-overlay no-print">
    <div class="modal-card receipt-modal">
      <div class="modal-header no-print"><div class="modal-title">Reçu de vente</div><div class="modal-close" data-action="closeReceipt">×</div></div>
      <div class="receipt-body">
        <div id="receipt-print">
          <div class="receipt-brand"><div class="receipt-logo">B</div><div class="receipt-brand-name">BoissonMan</div><div class="receipt-brand-sub">Supermarché de boissons</div></div>
          <div class="receipt-meta">
            <div class="receipt-meta-row"><span>Reçu</span><span>#${esc(r.id.slice(-6).toUpperCase())}</span></div>
            <div class="receipt-meta-row"><span>Date</span><span>${esc(dateLabel)} — ${esc(timeLabel)}</span></div>
            <div class="receipt-meta-row"><span>Dépôt</span><span>${esc(r.depotName || '')}</span></div>
            <div class="receipt-meta-row"><span>Caissier</span><span>${esc(r.cashier)}</span></div>
            ${clientRow}
          </div>
          <div class="receipt-items">${itemsHtml}</div>
          <div class="receipt-total"><span>Total</span><span>${fcfa(r.total)}</span></div>
          <div class="receipt-pay"><span>Paiement</span><span>${esc(r.paymentMethod)}</span></div>
          ${r.paymentMethod === 'Crédit' && r.creditPaid > 0 ? `<div class="receipt-pay"><span>Avance versée</span><span>${fcfa(r.creditPaid)}</span></div>` : ''}
          ${r.paymentMethod === 'Crédit' ? `<div class="receipt-pay"><span>Solde restant</span><span>${fcfa(r.creditRemaining)}</span></div>` : ''}
          <div class="receipt-thanks">Merci de votre achat !</div>
        </div>
      </div>
      <div class="modal-footer no-print">
        <div class="modal-footer-btn secondary" data-action="closeReceipt">Fermer</div>
        <div class="modal-footer-btn primary" data-action="printReceipt">Imprimer (A6)</div>
      </div>
    </div>
  </div>`;
}

function renderToastEl() {
  if (!state.toast) return '';
  return `<div class="toast">${esc(state.toast)}</div>`;
}

// ---------- Event wiring ----------
const Actions = {
  chooseLoginMode: (ds) => { state.loginMode = ds.mode; state.loginError = null; rerender(); },
  backToRoleSelect: () => { state.loginMode = null; state.loginUsername = ''; state.loginPassword = ''; state.loginError = null; rerender(); },
  submitLogin: () => submitLogin(),
  logout: () => logout(),
  nav: (ds) => { state.screen = ds.screen; state.pwError = null; state.pwSuccess = null; state.confirmDeleteEmployeeId = null; rerender(); },
  setPosCatAll: () => { state.posCategory = 'all'; rerender(); },
  setPosCategory: (ds) => { state.posCategory = ds.id; rerender(); },
  addToCart: (ds) => addToCart(ds.id, ds.unit),
  cartMinus: (ds) => changeCartQty(ds.id, ds.unit, -1),
  cartPlus: (ds) => changeCartQty(ds.id, ds.unit, 1),
  cartRemove: (ds) => removeFromCart(ds.id, ds.unit),
  setPayCash: () => { state.paymentMethod = 'Espèces'; state.posAdvance = ''; rerender(); },
  setPayMobile: () => { state.paymentMethod = 'Mobile Money'; state.posAdvance = ''; rerender(); },
  setPayCard: () => { state.paymentMethod = 'Carte'; state.posAdvance = ''; rerender(); },
  setPayCredit: () => { state.paymentMethod = 'Crédit'; rerender(); },
  checkout: () => checkout(),
  openScanner: () => { state.showScanner = true; state.scanError = null; rerender(); },
  closeScanner: () => { state.showScanner = false; state.scanError = null; rerender(); },
  toggleAddProduct: () => { if (state.showAddProduct) resetProductForm(); else openAddProductForm(); rerender(); },
  editProduct: (ds) => { openEditProductForm(ds.id); rerender(); },
  saveProduct: () => saveProduct(),
  stockDec: (ds) => adjustStock(ds.id, -1, state.stockDepotFilter),
  stockInc: (ds) => adjustStock(ds.id, 1, state.stockDepotFilter),
  toggleTransfer: () => { state.showTransfer = !state.showTransfer; rerender(); },
  doTransfer: () => stockTransfer(),
  toggleRestock: () => {
    state.showRestock = !state.showRestock;
    if (state.showRestock) {
      state.rsProductId = ''; state.rsQty = ''; state.rsUnit = 'detail';
      state.rsDepotId = state.stockDepotFilter !== 'all' ? state.stockDepotFilter : state.currentDepotId;
    }
    rerender();
  },
  quickRestock: (ds) => {
    state.showRestock = true; state.rsProductId = ds.id; state.rsQty = ''; state.rsUnit = 'detail';
    state.rsDepotId = state.stockDepotFilter !== 'all' ? state.stockDepotFilter : state.currentDepotId;
    rerender();
  },
  doRestock: () => restockProduct(),
  openCreditPayment: (ds) => { state.showCreditPayment = true; state.cpSaleId = ds.id; state.cpAmount = ''; rerender(); },
  cancelCreditPayment: () => { state.showCreditPayment = false; state.cpSaleId = ''; state.cpAmount = ''; rerender(); },
  doCreditPayment: () => submitCreditPayment(),
  toggleAddExpense: () => {
    state.showAddExpense = !state.showAddExpense;
    if (state.showAddExpense) {
      state.exCategory = EXPENSE_CATEGORIES[0]; state.exCustomCategory = ''; state.exAmount = ''; state.exNote = '';
      state.exDepotId = state.expenseDepotFilter !== 'all' ? state.expenseDepotFilter : state.currentDepotId;
    }
    rerender();
  },
  addExpense: () => addExpense(),
  toggleAddDepot: () => { state.showAddDepot = !state.showAddDepot; rerender(); },
  addDepot: () => addDepot(),
  toggleAddCategory: () => { state.showAddCategory = !state.showAddCategory; rerender(); },
  addCategory: () => addCategory(),
  toggleAddSupplier: () => { state.showAddSupplier = !state.showAddSupplier; rerender(); },
  addSupplier: () => addSupplier(),
  toggleAddClient: () => { state.showAddClient = !state.showAddClient; rerender(); },
  addClient: () => addClient(),
  toggleAddEmployee: () => { if (state.showAddEmployee) resetEmployeeForm(); else openAddEmployeeForm(); rerender(); },
  editEmployee: (ds) => { openEditEmployeeForm(ds.id); rerender(); },
  saveEmployee: () => saveEmployee(),
  askDeleteEmployee: (ds) => {
    if (ds.id === state.userId) { flashToast('Vous ne pouvez pas supprimer votre propre compte'); return; }
    state.confirmDeleteEmployeeId = ds.id; rerender();
  },
  cancelDeleteEmployee: () => { state.confirmDeleteEmployeeId = null; rerender(); },
  confirmDeleteEmployee: (ds) => deleteEmployee(ds.id),
  toggleEmployeeActive: (ds) => toggleEmployeeActive(ds.id),
  closeReceipt: () => { state.showReceipt = false; rerender(); },
  printReceipt: () => window.print(),
  submitChangePassword: () => changePassword(),
};

function onClick(e) {
  const el = e.target.closest('[data-action]');
  if (!el) return;
  const handler = Actions[el.dataset.action];
  if (handler) handler(el.dataset);
}
// Inputs whose value affects other visible content as you type (so the DOM
// must be redrawn live). Every other bound input is just captured into state
// without a redraw — re-rendering on each keystroke would recreate the input
// element and reset its caret, which breaks typing (especially on
// type="number" inputs, where the caret position can't be restored at all).
const LIVE_BINDS = new Set(['posSearch', 'stockSearch']);
function onInput(e) {
  const el = e.target;
  if (!el.dataset || !el.dataset.bind || el.tagName === 'SELECT') return;
  state[el.dataset.bind] = el.value;
  if (LIVE_BINDS.has(el.dataset.bind)) rerender();
}
const DEPOT_VIEW_FILTER_BINDS = new Set(['dashDepotFilter', 'stockDepotFilter', 'repDepotFilter', 'expenseDepotFilter']);
function onChange(e) {
  const el = e.target;
  if (!el.dataset || !el.dataset.bind || el.tagName !== 'SELECT') return;
  const bind = el.dataset.bind;
  state[bind] = el.value;
  if (bind === 'currentDepotId') {
    // Switching the operating depot re-scopes every other depot-aware filter
    // to match, so the whole app consistently reflects "where I am now".
    state.stockDepotFilter = el.value;
    state.dashDepotFilter = el.value;
    state.repDepotFilter = el.value;
    state.expenseDepotFilter = el.value;
  } else if (DEPOT_VIEW_FILTER_BINDS.has(bind) && el.value !== 'all') {
    // Picking a specific depot from any of these view filters (Dashboard,
    // Stocks, Rapports) also becomes the operating depot, so it stays the
    // one Caisse sells from until explicitly changed again — not just a
    // read-only filter that quietly diverges from where sales actually go.
    // "Tous les dépôts" stays a pure view and never touches it.
    state.currentDepotId = el.value;
    state.stockDepotFilter = el.value;
    state.dashDepotFilter = el.value;
    state.repDepotFilter = el.value;
    state.expenseDepotFilter = el.value;
  } else if (bind === 'rsProductId') {
    // A unit picked for the previous product may not apply to the new one
    // (e.g. it has no carton configured) — reset to avoid a stale mismatch.
    state.rsUnit = 'detail';
  }
  rerender();
}
function onKeyDown(e) {
  if (!e.target || e.key !== 'Enter') return;
  if (e.target.id === 'field-scanInput') submitScan();
  if (e.target.id === 'field-loginUsername' || e.target.id === 'field-loginPassword') submitLogin();
  if (e.target.id === 'field-pwCurrent' || e.target.id === 'field-pwNew' || e.target.id === 'field-pwConfirm') changePassword();
}

// ---------- Render loop ----------
function rerender() {
  const root = document.getElementById('app');
  const active = document.activeElement;
  const activeId = active && active.id;
  let selStart = null, selEnd = null;
  if (active && typeof active.selectionStart === 'number') { selStart = active.selectionStart; selEnd = active.selectionEnd; }
  root.innerHTML = state.loggedIn ? renderShell() : renderLogin();
  if (activeId) {
    const el = document.getElementById(activeId);
    if (el) {
      el.focus();
      if (selStart != null && typeof el.setSelectionRange === 'function') {
        try { el.setSelectionRange(selStart, selEnd); } catch (e) {}
      }
    }
  }
  syncScanner();
}

// ---------- Boot ----------
async function boot() {
  const app = document.getElementById('app');
  app.addEventListener('click', onClick);
  app.addEventListener('input', onInput);
  app.addEventListener('change', onChange);
  app.addEventListener('keydown', onKeyDown);
  try {
    const data = await api('GET', '/api/state');
    state.depots = data.depots || [];
    state.categories = data.categories; state.suppliers = data.suppliers; state.products = data.products;
    state.clients = data.clients; state.employees = data.employees; state.sales = data.sales; state.expenses = data.expenses || [];
    state.npCategoryId = data.categories[0] ? data.categories[0].id : '';
    state.npSupplierId = data.suppliers[0] ? data.suppliers[0].id : '';
    state.npDepotId = state.depots[0] ? state.depots[0].id : '';
    state.exDepotId = state.depots[0] ? state.depots[0].id : '';
  } catch (e) {
    console.error('Impossible de charger les données', e);
  }
  rerender();
}
boot();
