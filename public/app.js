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
const ICON_FACTURATION = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2.5h8l4 4v14.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1z"></path><path d="M14 2.5V6.5h4"></path><path d="M7.5 12h5M7.5 15h5M7.5 18h3"></path></svg>';
const ICON_EXTERNAL = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><path d="M9 5H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"></path><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path></svg>';
const ICON_ETABLISSEMENT = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 21V9l8-5 8 5v12"></path><path d="M9 21v-6h6v6"></path><path d="M9 12h.01M15 12h.01M9 8h.01M15 8h.01"></path></svg>';
const ICON_MENU = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><path d="M3 6h18M3 12h18M3 18h18"></path></svg>';
const ICON_NOTIF = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.7 21a2 2 0 0 1-3.4 0"></path></svg>';

const FNE_URL = 'https://fne.dgi.gouv.ci';
// The 4 fixed DGI tax codes accepted by the real FNE certification API —
// mirrors server.js's FNE_TAX_RATES exactly, needed here to auto-derive the
// A4 invoice's displayed VAT rate from whichever code is configured, so the
// printed facture can never disagree with what's actually certified.
const FNE_TAX_RATES = { TVA: 18, TVAB: 9, TVAC: 0, TVAD: 0 };

const EXPENSE_CATEGORIES = ['Salaires', 'Facture CIE', 'Facture SODECI', 'Paiement fournisseur', 'Achat marchandise', 'Don personnel', 'Imprévus', 'Autre'];
// "Gérant" is special — it's the only value that grants manager-level
// permissions (see server.js: `role === 'Gérant' ? 'manager' : 'cashier'`).
// Every other option here, including a free-text "Autre" entry, is purely a
// job-title label for the staff roster — none of them change what the
// account can do, and none of them appear on the login screen (which only
// ever offers the Gérant/Caissier buttons, matching the two real
// permission levels).
const EMPLOYEE_ROLES = ['Gérant', 'Caissier', 'Employé', 'Chauffeur', 'Magasinier', 'Gardien', 'Comptable', 'Technicien', 'Coursier', 'Autre'];

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
  { key: 'notifications', label: 'Notifications', icon: ICON_NOTIF, managerOnly: false },
  { key: 'expenses', label: 'Dépenses', icon: ICON_EXPENSE, managerOnly: true },
  { key: 'facturation', label: 'Facturation', icon: ICON_FACTURATION, managerOnly: false, external: FNE_URL },
  { key: 'rapports', label: 'Rapports', icon: ICON_RAPPORTS, managerOnly: true },
  { key: 'employes', label: 'Employés', icon: ICON_EMP, managerOnly: true },
  { key: 'etablissement', label: 'Établissement', icon: ICON_ETABLISSEMENT, managerOnly: true },
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
  notifications: ['Notifications', 'Rappels de crédit et alertes de disponibilité'],
  expenses: ['Dépenses', 'Suivi des sorties de caisse'],
  rapports: ['Rapports', 'Performance commerciale'],
  employes: ['Employés', 'Équipe et accès'],
  etablissement: ['Établissement', "Informations et logo de l'entreprise (affichés sur le ticket de caisse)"],
  account: ['Mon compte', 'Sécurité de votre compte'],
};

// ---------- State ----------
const state = {
  loggedIn: false, role: null, userId: null, userName: '',
  loginMode: null, loginUsername: '', loginPassword: '', loginError: null,
  screen: 'dashboard',
  depots: [], categories: [], suppliers: [], clients: [], employees: [], products: [], sales: [], expenses: [], messageLog: [],
  currentDepotId: '', // depot the signed-in user is currently operating / selling from
  stockDepotFilter: '', dashDepotFilter: '', repDepotFilter: '', expenseDepotFilter: '', // 'all' or a depot id
  repDateMode: 'all', repDateFrom: '', repDateTo: '', // 'all'|'day'|'week'|'month'|'custom' — Rapports date filter
  cart: [], posCategory: 'all', posSearch: '', posClientId: '', paymentMethod: 'Espèces', posAdvance: '',
  showUnitPicker: false, unitPickerProductId: null,
  scanInput: '', showScanner: false, scanError: null, scanMode: 'sell', scanDevices: [], scanDeviceId: '',
  stockSearch: '', stockCatFilter: 'all', showAddProduct: false,
  npName: '', npBarcode: '', npCategoryId: '', npSupplierId: '', npDepotId: '', npPrice: '', npCost: '', npStock: '', npMinStock: '',
  npUnitsPerPack: '', npPricePerPack: '', npUnitsPerCarton: '', npPricePerCarton: '', npImage: '', npLocation: '', editingProductId: null,
  confirmDeleteProductId: null,
  showImportPreview: false, impFileName: '', impRows: [], impNewCount: 0, impUpdateCount: 0, impParseErrors: [], impResult: null, impBusy: false,
  showAddCategory: false, ncName: '',
  showAddSupplier: false, nsName: '', nsPhone: '', nsEmail: '',
  showAddClient: false, ncliName: '', ncliPhone: '', ncliEmail: '', ncliNcc: '', editingClientId: null, confirmDeleteClientId: null,
  showCreditReminderForm: false, msgClientId: '', msgChannel: 'sms', msgSubject: '', msgText: '',
  showAvailabilityForm: false, msgProductId: '', msgRecipientMode: 'all', msgSelectedClientIds: [],
  showAddEmployee: false, neName: '', neRole: 'Caissier', neCustomRole: '', nePhone: '', neDepotId: '', nePassword: '',
  editingEmployeeId: null, confirmDeleteEmployeeId: null,
  showAddDepot: false, ndName: '', ndAddress: '',
  showTransfer: false, trProductId: '', trFromDepotId: '', trToDepotId: '', trQty: '',
  showRestock: false, rsProductId: '', rsDepotId: '', rsQty: '', rsUnit: 'detail',
  creditFilter: 'open', showCreditPayment: false, cpSaleId: '', cpAmount: '',
  showAddExpense: false, exCategory: EXPENSE_CATEGORIES[0], exCustomCategory: '', exAmount: '', exDepotId: '', exNote: '',
  pwCurrent: '', pwNew: '', pwConfirm: '', pwError: null, pwSuccess: null,
  estCompanyName: '', estAddress: '', estPhone: '', estEmail: '', estTaxId: '', estLogo: '',
  estNcc: '', estTaxRegime: '', estTaxCenter: '', estBankDetails: '', estVatRate: '0',
  fneEnabled: false, fneBaseUrl: '', fneTaxCode: '', fneHasApiKey: false, fneApiKeyInput: '', fneCertifying: false,
  msgCfgEmailEnabled: false, msgCfgGmailUser: '', msgCfgGmailAppPasswordInput: '', msgCfgHasAppPassword: false,
  msgCfgSmsEnabled: false, msgCfgClientId: '', msgCfgClientSecretInput: '', msgCfgHasClientSecret: false, msgCfgSenderAddress: '',
  receiptView: 'ticket', // 'ticket' (A6) or 'invoice' (A4 Facture) — see renderReceiptModal
  toast: null,
  showReceipt: false, lastReceipt: null,
  mobileNavOpen: false, // sidebar drawer state on phone-width screens (see the max-width:900px block in styles.css)
  offlineMode: false, // true when resumed via "Travailler hors ligne" — see the offline-mode section
  offlineSyncBlocked: false, // true when a sync attempt hit a 401 (expired cached token) — outbox is safe, just needs a fresh online login
};

// ---------- Helpers ----------
function esc(v) {
  return String(v == null ? '' : v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function fcfa(n) { return Math.round(n || 0).toLocaleString('fr-FR') + ' FCFA'; }
function capitalize(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : s; }
function stockStatus(qty, minStock) {
  // Negative stock only happens via an offline sale synced after another
  // device already sold the same product down to zero during the same
  // outage — a rare, accepted trade-off (see server.js's
  // tolerateNegativeStock) that needs manual correction, so it's flagged
  // distinctly from a normal Rupture (simply sold out, nothing wrong).
  if (qty < 0) return { label: 'Négatif', cls: 'negative' };
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
// Resolves Rapports' date filter (state.repDateMode) into a concrete
// [start, end] range, or null for 'all' (no filtering). 'day'/'week'/'month'
// are always relative to *now* — a week starts Monday, a month starts on
// the 1st — never a stored anchor date, so the same option always means
// "this week"/"this month" whenever it's picked.
function reportDateRange() {
  const mode = state.repDateMode || 'all';
  const now = new Date();
  if (mode === 'day') {
    const start = new Date(now); start.setHours(0, 0, 0, 0);
    return { start, end: now };
  }
  if (mode === 'week') {
    const start = new Date(now); start.setHours(0, 0, 0, 0);
    start.setDate(start.getDate() - ((start.getDay() + 6) % 7)); // back to Monday
    return { start, end: now };
  }
  if (mode === 'month') {
    return { start: new Date(now.getFullYear(), now.getMonth(), 1), end: now };
  }
  if (mode === 'custom') {
    if (!state.repDateFrom || !state.repDateTo) return null;
    return { start: new Date(state.repDateFrom + 'T00:00:00'), end: new Date(state.repDateTo + 'T23:59:59.999') };
  }
  return null;
}
function inDateRange(iso, range) {
  if (!range) return true;
  const t = new Date(iso).getTime();
  return t >= range.start.getTime() && t <= range.end.getTime();
}

// ---------- API ----------
// Kept only in memory (never localStorage) for the normal login flow — a
// fresh page load always requires re-login, unchanged. The one deliberate
// exception is OFFLINE_SNAPSHOT_KEY below: a minimal resumable snapshot
// (including the token) written to localStorage after every successful
// online login specifically so "Travailler hors ligne" can work at all when
// the page is reloaded during an outage — see the offline-mode section.
let authToken = null;
async function api(method, url, body) {
  const opts = { method, headers: {} };
  if (authToken) opts.headers['Authorization'] = 'Bearer ' + authToken;
  if (body !== undefined) { opts.headers['Content-Type'] = 'application/json'; opts.body = JSON.stringify(body); }
  let res;
  try {
    res = await fetch(url, opts);
  } catch (e) {
    const netErr = new Error('Pas de connexion Internet — cette action nécessite d’être en ligne.');
    netErr.isNetworkError = true;
    throw netErr;
  }
  const data = await res.json().catch(() => ({}));
  if (res.status === 401 && url !== '/api/login' && state.loggedIn) {
    logout();
    state.loginError = 'Session expirée. Veuillez vous reconnecter.';
    rerender();
  }
  if (!res.ok) throw new Error(data.error || 'Erreur serveur');
  return data;
}

// ---------- Offline mode ----------
// Caisse-only (see checkout()/syncOfflineSales() below). Two localStorage
// keys: OFFLINE_SNAPSHOT_KEY holds one resumable snapshot PER EMPLOYEE who
// has ever logged in online on this device — keyed by the normalized
// username/phone they typed at login — so a shared till device can offer
// each cashier their own identity offline instead of only whoever happened
// to log in most recently (a real bug found by testing: a cashier trying to
// resume offline was only ever offered a manager's cached session because
// the manager had logged in online last on that machine). Each entry lets
// that one employee resume without a password (an explicit, informed
// trade-off — see project notes). OFFLINE_OUTBOX_KEY holds sales made while
// offline, pending sync, and is never cleared by logout() (losing a
// recorded sale would be a real bug, not just a UX rough edge).
const OFFLINE_SNAPSHOT_KEY = 'bm_offline_snapshot';
const OFFLINE_OUTBOX_KEY = 'bm_offline_outbox';
function normalizeLoginKey(username) {
  return String(username || '').trim().toLowerCase();
}
function loadOfflineSnapshots() {
  try {
    const raw = localStorage.getItem(OFFLINE_SNAPSHOT_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    if (!parsed || typeof parsed !== 'object') return {};
    // Before the per-employee rework, this key held ONE flat snapshot object
    // directly (`{token, userId, userName, ...}`), not a dict keyed by
    // username. A device that had already cached a snapshot under that old
    // shape would otherwise get its top-level fields (token/userId/...)
    // merged in as if each were its own cached identity the next time
    // saveOfflineSnapshot() ran — exactly the "Travailler hors ligne
    // (token)" / "(userId)" / "(role)" ... corruption a real user hit.
    // Detect and discard rather than trying to guess which username it
    // belonged to (that information didn't exist in the old shape) — losing
    // one stale cached identity just means that one employee needs to log
    // in online once more, no real data is at risk.
    if ('token' in parsed && 'userName' in parsed) return {};
    return parsed;
  } catch (e) { return {}; }
}
function saveOfflineSnapshot(username) {
  try {
    const all = loadOfflineSnapshots();
    all[normalizeLoginKey(username)] = {
      username, token: authToken, userId: state.userId, userName: state.userName, role: state.role, depotId: state.currentDepotId,
      products: state.products, categories: state.categories, clients: state.clients, depots: state.depots,
      savedAt: new Date().toISOString(),
    };
    localStorage.setItem(OFFLINE_SNAPSHOT_KEY, JSON.stringify(all));
  } catch (e) {}
}
function loadOfflineSnapshot(username) {
  return loadOfflineSnapshots()[normalizeLoginKey(username)] || null;
}
// Removes only this employee's own cached entries (matched by userId, since
// they may have logged in under slightly different strings — phone vs.
// name) — other cashiers' cached offline identities on a shared device must
// survive one person's logout.
function clearOfflineSnapshot(userId) {
  try {
    const all = loadOfflineSnapshots();
    Object.keys(all).forEach((k) => { if (all[k].userId === userId) delete all[k]; });
    localStorage.setItem(OFFLINE_SNAPSHOT_KEY, JSON.stringify(all));
  } catch (e) {}
}
function hasOfflineSnapshot() {
  return Object.keys(loadOfflineSnapshots()).length > 0;
}
function getOutbox() {
  try {
    const raw = localStorage.getItem(OFFLINE_OUTBOX_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) { return []; }
}
function setOutbox(list) {
  try { localStorage.setItem(OFFLINE_OUTBOX_KEY, JSON.stringify(list)); } catch (e) {}
}
function addToOutbox(sale) {
  const outbox = getOutbox();
  outbox.push(sale); // chronological order matters for sync — see syncOfflineSales()
  setOutbox(outbox);
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
// Loads the full app dataset — only callable once a session token is set,
// /api/state now 401s for anonymous requests. Called right after login
// (not at boot) since there's nothing to fetch before the user is
// authenticated.
async function loadAppState() {
  try {
    const data = await api('GET', '/api/state');
    state.depots = data.depots || [];
    state.categories = data.categories; state.suppliers = data.suppliers; state.products = data.products;
    state.clients = data.clients; state.employees = data.employees; state.sales = data.sales; state.expenses = data.expenses || [];
    state.messageLog = data.messageLog || [];
    const settings = data.settings || {};
    state.estCompanyName = settings.companyName || ''; state.estAddress = settings.address || '';
    state.estPhone = settings.phone || ''; state.estEmail = settings.email || '';
    state.estTaxId = settings.taxId || ''; state.estLogo = settings.logo || '';
    state.estNcc = settings.ncc || ''; state.estTaxRegime = settings.taxRegime || '';
    state.estTaxCenter = settings.taxCenter || ''; state.estBankDetails = settings.bankDetails || '';
    state.estVatRate = String(settings.vatRate || 0);
    const fneConfig = data.fneConfig || {};
    state.fneEnabled = !!fneConfig.enabled; state.fneBaseUrl = fneConfig.baseUrl || '';
    state.fneTaxCode = fneConfig.taxCode || ''; state.fneHasApiKey = !!fneConfig.hasApiKey;
    state.fneApiKeyInput = '';
    const msgConfig = data.messagingConfig || {};
    state.msgCfgEmailEnabled = !!(msgConfig.email && msgConfig.email.enabled);
    state.msgCfgGmailUser = (msgConfig.email && msgConfig.email.gmailUser) || '';
    state.msgCfgHasAppPassword = !!(msgConfig.email && msgConfig.email.hasAppPassword);
    state.msgCfgGmailAppPasswordInput = '';
    state.msgCfgSmsEnabled = !!(msgConfig.sms && msgConfig.sms.enabled);
    state.msgCfgClientId = (msgConfig.sms && msgConfig.sms.clientId) || '';
    state.msgCfgSenderAddress = (msgConfig.sms && msgConfig.sms.senderAddress) || '';
    state.msgCfgHasClientSecret = !!(msgConfig.sms && msgConfig.sms.hasClientSecret);
    state.msgCfgClientSecretInput = '';
    // Once a real FNE tax code is configured, it becomes the authoritative
    // rate for the A4 invoice too — otherwise the printed facture and what's
    // actually certified with the DGI could show two different VAT figures.
    if (state.fneTaxCode) state.estVatRate = String(FNE_TAX_RATES[state.fneTaxCode]);
    state.npCategoryId = data.categories[0] ? data.categories[0].id : '';
    state.npSupplierId = data.suppliers[0] ? data.suppliers[0].id : '';
    state.npDepotId = state.depots[0] ? state.depots[0].id : '';
    state.exDepotId = state.depots[0] ? state.depots[0].id : '';
    return true;
  } catch (e) {
    console.error('Impossible de charger les données', e);
    return false;
  }
}
async function submitLogin() {
  const username = state.loginUsername.trim();
  const password = state.loginPassword;
  if (!username || !password) { state.loginError = 'Identifiant et mot de passe requis'; rerender(); return; }
  try {
    const data = await api('POST', '/api/login', { username, password, expectedRole: state.loginMode });
    authToken = data.token;
    await loadAppState();
    state.loggedIn = true; state.role = data.role; state.userId = data.userId; state.userName = data.userName; state.screen = 'dashboard';
    state.offlineMode = false;
    state.loginMode = null; state.loginUsername = ''; state.loginPassword = ''; state.loginError = null;
    const depotId = data.depotId || (state.depots[0] && state.depots[0].id) || '';
    state.currentDepotId = depotId;
    state.stockDepotFilter = depotId; state.dashDepotFilter = depotId; state.repDepotFilter = depotId; state.expenseDepotFilter = depotId;
    state.npDepotId = depotId; state.neDepotId = depotId; state.exDepotId = depotId;
    saveOfflineSnapshot(username);
    rerender();
    // Fire-and-forget: a fresh online login is exactly the moment to flush
    // any sales queued during a prior offline session on this device.
    syncOfflineSales();
  } catch (e) {
    authToken = null;
    state.loginError = e.message || 'Connexion impossible';
    rerender();
  }
}
// "Travailler hors ligne": resumes ONE specific employee's last successful
// online login on this device (matched by the normalized username/phone
// they logged in with — see OFFLINE_SNAPSHOT_KEY above), with no password
// (there's no way to verify one without the server) — an explicit,
// user-requested trade-off.
function workOffline(key) {
  const snap = loadOfflineSnapshot(key);
  if (!snap) return;
  authToken = snap.token;
  state.loggedIn = true; state.offlineMode = true;
  state.role = snap.role; state.userId = snap.userId; state.userName = snap.userName;
  state.products = snap.products; state.categories = snap.categories; state.clients = snap.clients; state.depots = snap.depots;
  state.currentDepotId = snap.depotId;
  state.stockDepotFilter = snap.depotId; state.dashDepotFilter = snap.depotId; state.repDepotFilter = snap.depotId; state.expenseDepotFilter = snap.depotId;
  state.screen = 'caisse'; // the only screen this mode actually supports
  state.loginMode = null; state.loginUsername = ''; state.loginPassword = ''; state.loginError = null;
  rerender();
}
function logout() {
  if (getOutbox().length > 0) {
    flashToast('Ventes hors ligne non synchronisées — connectez-vous à Internet avant de vous déconnecter.');
    return;
  }
  if (authToken && !state.offlineMode) api('POST', '/api/logout').catch(() => {});
  authToken = null;
  const loggedOutUserId = state.userId;
  state.loggedIn = false; state.role = null; state.userName = ''; state.userId = null; state.screen = 'dashboard'; state.cart = [];
  state.offlineMode = false;
  state.loginMode = null; state.loginUsername = ''; state.loginPassword = ''; state.loginError = null;
  // Drop any data fetched under the previous session so a slow-to-close tab
  // never shows one user's data after another logs in on the same browser.
  state.depots = []; state.categories = []; state.suppliers = []; state.products = [];
  state.clients = []; state.employees = []; state.sales = []; state.expenses = []; state.messageLog = [];
  clearOfflineSnapshot(loggedOutUserId); // only this employee's cached entry — others on a shared device stay usable offline
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
  state.showUnitPicker = false;
  state.unitPickerProductId = null;
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
// Applies a completed sale (from the server, or built locally while
// offline) to local state the same way regardless of where it came from —
// used by both the online and offline branches of checkout() below.
function applySaleLocally(sale) {
  sale.items.forEach((it) => {
    const p = state.products.find((pp) => pp.id === it.productId);
    if (p) { p.stockByDepot[sale.depotId] = stockAt(p, sale.depotId) - it.baseQty; p.sold += it.baseQty; }
  });
  if (sale.clientId) {
    const c = state.clients.find((cc) => cc.id === sale.clientId);
    if (c) { c.points += Math.floor(sale.total / 100); c.totalSpent += sale.total; }
  }
  state.sales.unshift(sale);
}
// Builds a sale entirely client-side from the current cart, using the same
// pricing helper (packagingFor) the online path's server call would use —
// mirrors server.js's buildSaleFromCart(..., {tolerateNegativeStock:true}).
// Basic input validation (advance vs. total) still happens here, same as
// the online path would reject it — only the *stock-availability* check is
// the part offline mode deliberately skips (per the accepted trade-off),
// and addToCart()/changeCartQty() already cap quantities against locally-
// known stock, so this never knowingly oversells against itself.
function buildOfflineSale() {
  const depotId = state.currentDepotId;
  let total = 0;
  const items = state.cart.map((ci) => {
    const p = state.products.find((pp) => pp.id === ci.productId);
    const pkg = packagingFor(p, ci.unit);
    const baseQty = ci.qty * pkg.multiplier;
    const lineTotal = pkg.price * ci.qty;
    total += lineTotal;
    return { productId: ci.productId, name: p ? p.name : ci.productId, unit: ci.unit || 'detail', qty: ci.qty, unitPrice: pkg.price, lineTotal, baseQty };
  });
  let advance = 0;
  if (state.paymentMethod === 'Crédit') {
    advance = Number(state.posAdvance) || 0;
    if (advance < 0 || advance > total) return { error: "L'avance ne peut pas dépasser le total de la vente" };
  }
  let clientName = '';
  if (state.posClientId) {
    const c = state.clients.find((cc) => cc.id === state.posClientId);
    if (c) clientName = c.name;
  }
  const now = new Date().toISOString();
  const offlineKey = crypto.randomUUID();
  const sale = {
    id: 'offline-' + offlineKey,
    offlineKey,
    date: now,
    cashier: state.userName || 'Caissier',
    depotId, depotName: depotName(depotId),
    clientId: state.posClientId || '', clientName,
    itemCount: items.reduce((a, it) => a + it.baseQty, 0),
    total,
    paymentMethod: state.paymentMethod,
    items,
    pending: true,
  };
  if (state.paymentMethod === 'Crédit') {
    sale.creditPaid = advance;
    sale.creditRemaining = total - advance;
    sale.creditPayments = advance > 0 ? [{ id: 'offline-pay-' + crypto.randomUUID(), date: now, amount: advance }] : [];
  }
  const syncPayload = {
    offlineKey, clientDate: now,
    cart: items.map((it) => ({ productId: it.productId, name: it.name, unit: it.unit, qty: it.qty, unitPrice: it.unitPrice, lineTotal: it.lineTotal, baseQty: it.baseQty })),
    clientId: state.posClientId || '', paymentMethod: state.paymentMethod, cashier: state.userName, depotId,
    advance: state.paymentMethod === 'Crédit' ? advance : undefined,
  };
  return { sale, syncPayload };
}
function checkoutOffline() {
  const built = buildOfflineSale();
  if (built.error) { flashToast(built.error); rerender(); return; }
  applySaleLocally(built.sale);
  addToOutbox(built.syncPayload);
  state.cart = []; state.posClientId = ''; state.posAdvance = '';
  state.lastReceipt = built.sale; state.showReceipt = true; state.receiptView = 'ticket';
  rerender();
  flashToast('Vente enregistrée hors ligne — sera synchronisée au retour de la connexion.');
}
async function checkout() {
  if (state.cart.length === 0) return;
  if (state.paymentMethod === 'Crédit' && !state.posClientId) {
    flashToast('Sélectionnez un client pour une vente à crédit');
    return;
  }
  if (state.offlineMode || !navigator.onLine) { checkoutOffline(); return; }
  try {
    const data = await api('POST', '/api/checkout', {
      cart: state.cart, clientId: state.posClientId, paymentMethod: state.paymentMethod, cashier: state.userName, depotId: state.currentDepotId,
      advance: state.paymentMethod === 'Crédit' ? (Number(state.posAdvance) || 0) : undefined,
    });
    applySaleLocally(data.sale);
    state.cart = []; state.posClientId = ''; state.posAdvance = '';
    state.lastReceipt = data.sale; state.showReceipt = true; state.receiptView = 'ticket';
    rerender();
  } catch (e) {
    if (e.isNetworkError) { checkoutOffline(); return; }
    flashToast(e.message || "Erreur lors de l'encaissement");
    rerender();
  }
}
// Flushes the offline outbox to the server. Deliberately uses fetch()
// directly rather than the shared api() helper: api() auto-logs-out on any
// 401, which would be exactly wrong here — an expired cached token during a
// background sync attempt must never wipe state.sales/state.products out
// from under a mid-shift cashier, and must never risk the outbox itself.
// Triggered by the browser's `online` event, a periodic retry (the `online`
// event alone isn't fully reliable), a manual "Synchroniser" action, and
// automatically at the tail of every successful online login.
async function syncOfflineSales() {
  const outbox = getOutbox();
  if (outbox.length === 0 || !authToken) return;
  let res;
  try {
    res = await fetch('/api/sync/offline-sales', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + authToken },
      body: JSON.stringify({ sales: outbox }),
    });
  } catch (e) {
    return; // still unreachable — a later trigger will retry, outbox untouched
  }
  if (res.status === 401) {
    state.offlineSyncBlocked = true;
    rerender();
    return; // outbox untouched — retried automatically after the next successful login
  }
  if (!res.ok) return; // unexpected server-side failure — leave the outbox intact, retry later
  const count = outbox.length;
  setOutbox([]);
  state.offlineSyncBlocked = false;
  await loadAppState(); // authoritative reconciliation, rather than hand-patching local state
  flashToast(count === 1 ? '1 vente hors ligne synchronisée' : count + ' ventes hors ligne synchronisées');
  rerender();
}

// ---------- Barcode scanning ----------
let audioCtx = null;
function playBeep() {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.value = 1800;
    gain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.3, audioCtx.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.12);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.13);
  } catch (e) {}
}
function lookupAndAddByBarcode(code) {
  const product = state.products.find((p) => p.barcode === code.trim());
  if (!product) { state.scanError = 'Code inconnu : ' + code; rerender(); return; }
  if (stockAt(product, state.currentDepotId) <= 0) { state.scanError = product.name + ' — rupture de stock au ' + depotName(state.currentDepotId); rerender(); return; }
  addToCart(product.id);
  state.scanError = null;
  playBeep();
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
  if (state.scanMode === 'register') {
    state.npBarcode = code;
    state.showScanner = false;
    state.scanError = null;
    playBeep();
    flashToast('Code-barres capturé : ' + code);
    return;
  }
  lookupAndAddByBarcode(code);
}
function buildScanDeviceSelectHtml() {
  const deviceOptions = state.scanDevices.map((d, i) => `<option value="${esc(d.deviceId)}"${state.scanDeviceId === d.deviceId ? ' selected' : ''}>${esc(d.label || 'Caméra ' + (i + 1))}</option>`).join('');
  return state.scanDevices.length > 1
    ? `<select id="field-scanDeviceId" class="field" style="margin-top:10px" data-bind="scanDeviceId">${deviceOptions}</select>
       <div class="pos-hint" style="text-align:center;margin-top:4px">Un téléphone utilisé comme webcam (via une appli comme DroidCam/Iriun) apparaît ici — sélectionnez-le pour scanner avec.</div>`
    : '';
}
async function refreshScanDevices() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) return;
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    state.scanDevices = devices.filter((d) => d.kind === 'videoinput');
    // Patch just the device picker in place rather than calling rerender():
    // a full rerender replaces the <video> element too, which would tear
    // down the camera stream we just finished attaching.
    const wrap = document.getElementById('scanner-device-select-wrap');
    if (wrap) wrap.innerHTML = buildScanDeviceSelectHtml();
  } catch (e) {}
}
function startCamera() {
  if (!window.ZXing || !window.ZXing.BrowserMultiFormatReader) {
    state.scanError = 'Bibliothèque de scan indisponible (vérifiez la connexion internet). Utilisez le champ de saisie avec un lecteur USB.';
    rerender();
    return;
  }
  try {
    // Restricting to the formats actually used here (retail barcodes + QR)
    // skips the decoder's attempts at every other 1D/2D format on each
    // frame, and scanning every 80ms instead of the 500ms default makes a
    // detection register almost as soon as the code is in frame.
    const hints = new Map();
    hints.set(window.ZXing.DecodeHintType.POSSIBLE_FORMATS, [
      window.ZXing.BarcodeFormat.EAN_13, window.ZXing.BarcodeFormat.EAN_8,
      window.ZXing.BarcodeFormat.UPC_A, window.ZXing.BarcodeFormat.UPC_E,
      window.ZXing.BarcodeFormat.CODE_128, window.ZXing.BarcodeFormat.QR_CODE,
    ]);
    zxingReader = new window.ZXing.BrowserMultiFormatReader(hints, 80);
    zxingReader.decodeFromVideoDevice(state.scanDeviceId || undefined, 'scanner-video', (result) => {
      if (!scanningActive || !result) return;
      handleDetectedCode(result.getText());
    }).then(() => refreshScanDevices()).catch(() => { state.scanError = 'Accès à la caméra refusé ou indisponible.'; rerender(); });
  } catch (e) {
    state.scanError = 'Accès à la caméra refusé ou indisponible.'; rerender();
  }
}
function stopCamera() {
  if (zxingReader) { try { zxingReader.reset(); } catch (e) {} zxingReader = null; }
}
function switchCameraDevice(deviceId) {
  state.scanDeviceId = deviceId;
  stopCamera();
  scanningActive = true;
  startCamera();
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
  state.npName = ''; state.npBarcode = ''; state.npPrice = ''; state.npCost = ''; state.npStock = ''; state.npMinStock = '';
  state.npUnitsPerPack = ''; state.npPricePerPack = ''; state.npUnitsPerCarton = ''; state.npPricePerCarton = ''; state.npImage = ''; state.npLocation = '';
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
  state.npName = p.name; state.npBarcode = p.barcode || ''; state.npCategoryId = p.categoryId; state.npSupplierId = p.supplierId;
  state.npPrice = p.price; state.npCost = p.cost; state.npMinStock = p.minStock;
  state.npUnitsPerPack = p.unitsPerPack || ''; state.npPricePerPack = p.pricePerPack || '';
  state.npUnitsPerCarton = p.unitsPerCarton || ''; state.npPricePerCarton = p.pricePerCarton || '';
  state.npImage = p.image || ''; state.npLocation = p.location || '';
  state.showAddProduct = true;
}
function saveProduct() {
  return state.editingProductId ? updateProduct() : addProduct();
}
async function addProduct() {
  if (!state.npName.trim()) return;
  try {
    const product = await api('POST', '/api/products', {
      name: state.npName.trim(), barcode: state.npBarcode.trim(), categoryId: state.npCategoryId, supplierId: state.npSupplierId, depotId: state.npDepotId,
      price: Number(state.npPrice) || 0, cost: Number(state.npCost) || 0, stock: Number(state.npStock) || 0, minStock: Number(state.npMinStock) || 10,
      unitsPerPack: Number(state.npUnitsPerPack) || 0, pricePerPack: Number(state.npPricePerPack) || 0,
      unitsPerCarton: Number(state.npUnitsPerCarton) || 0, pricePerCarton: Number(state.npPricePerCarton) || 0,
      image: state.npImage, location: state.npLocation.trim(),
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
      name: state.npName.trim(), barcode: state.npBarcode.trim(), categoryId: state.npCategoryId, supplierId: state.npSupplierId,
      price: Number(state.npPrice) || 0, cost: Number(state.npCost) || 0, minStock: Number(state.npMinStock) || 10,
      unitsPerPack: Number(state.npUnitsPerPack) || 0, pricePerPack: Number(state.npPricePerPack) || 0,
      unitsPerCarton: Number(state.npUnitsPerCarton) || 0, pricePerCarton: Number(state.npPricePerCarton) || 0,
      image: state.npImage, location: state.npLocation.trim(),
    });
    const idx = state.products.findIndex((p) => p.id === updated.id);
    if (idx >= 0) state.products[idx] = updated;
    resetProductForm();
    flashToast('Produit mis à jour : ' + updated.name);
    rerender();
  } catch (e) { flashToast(e.message); }
}
async function deleteProduct(id) {
  try {
    await api('DELETE', `/api/products/${id}`);
    state.products = state.products.filter((p) => p.id !== id);
    state.confirmDeleteProductId = null;
    flashToast('Produit supprimé');
    rerender();
  } catch (e) {
    state.confirmDeleteProductId = null;
    flashToast(e.message);
    rerender();
  }
}
// Same cap/pattern as the Établissement logo (MAX_LOGO_FILE_BYTES) — kept
// comfortably under the server's ~700 000-char MAX_PRODUCT_IMAGE_LENGTH
// (base64 inflates raw bytes by ~4/3) so an oversized image is rejected
// here, before an upload, rather than a 400 from the server after the read.
const MAX_PRODUCT_IMAGE_FILE_BYTES = 500 * 1024;
function handleProductImageFile(file) {
  if (!file) return;
  if (!file.type.startsWith('image/')) { flashToast("L'image du produit doit être une image"); return; }
  if (file.size > MAX_PRODUCT_IMAGE_FILE_BYTES) { flashToast('Image trop volumineuse (max 500 Ko)'); return; }
  const reader = new FileReader();
  reader.onload = () => { state.npImage = reader.result; rerender(); };
  reader.readAsDataURL(file);
}
function removeProductImage() { state.npImage = ''; rerender(); }
// ---------- Product CSV import/export ----------
// Delimiter is ';' (not ',') and the export is BOM-prefixed: French-locale
// Excel (this app's audience) treats ',' as the decimal separator and
// expects ';'-delimited CSVs by default — a comma-delimited export would
// dump every row into one Excel column on open. The BOM is needed for
// accented characters (é, à, ô — this whole app is French) to render
// correctly instead of mojibake.
const CSV_DELIMITER = ';';
const PRODUCT_CSV_COLUMNS = ['ID', 'Nom', 'Catégorie', 'Fournisseur', 'Prix vente', 'Prix achat', 'Stock minimum', 'Code-barres', 'Emplacement', 'Unités/Paquet', 'Prix Paquet', 'Unités/Carton', 'Prix Carton'];
function csvEscape(cell) {
  const s = cell === undefined || cell === null ? '' : String(cell);
  if (s.includes(CSV_DELIMITER) || s.includes(',') || s.includes('"') || s.includes('\n') || s.includes('\r')) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
}
function buildProductsCsv() {
  const catById = {}; state.categories.forEach((c) => { catById[c.id] = c.name; });
  const supById = {}; state.suppliers.forEach((s) => { supById[s.id] = s.name; });
  const depotCols = state.depots.map((d) => 'Stock ' + d.name);
  const header = PRODUCT_CSV_COLUMNS.concat(depotCols);
  const lines = [header.map(csvEscape).join(CSV_DELIMITER)];
  state.products.forEach((p) => {
    const row = [
      p.id, p.name, catById[p.categoryId] || '', supById[p.supplierId] || '',
      p.price, p.cost, p.minStock, p.barcode, p.location || '',
      p.unitsPerPack || '', p.pricePerPack || '', p.unitsPerCarton || '', p.pricePerCarton || '',
    ];
    state.depots.forEach((d) => row.push(stockAt(p, d.id)));
    lines.push(row.map(csvEscape).join(CSV_DELIMITER));
  });
  return lines.join('\r\n');
}
function exportProductsCsv() {
  const csv = '﻿' + buildProductsCsv();
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'produits.csv';
  a.click();
  URL.revokeObjectURL(url);
  flashToast('Export CSV téléchargé (' + state.products.length + ' produits)');
}
// Real character-state-machine parser (not a naive split) so quoted cells
// containing the delimiter/a quote/a newline round-trip correctly, and a
// hand-edited file doesn't silently corrupt. Auto-detects ';' vs ',' from
// the header line (whichever is more frequent) and strips a leading BOM —
// both needed so re-importing this app's OWN export works: without BOM
// stripping the header's first cell would literally read "﻿ID" and
// every header-name match below would silently fail.
function parseCsv(text) {
  if (text.charCodeAt(0) === 0xFEFF) text = text.slice(1);
  const headerLineEnd = text.search(/\r\n|\n|\r/);
  const headerLine = headerLineEnd === -1 ? text : text.slice(0, headerLineEnd);
  const semiCount = (headerLine.match(/;/g) || []).length;
  const commaCount = (headerLine.match(/,/g) || []).length;
  const delimiter = semiCount >= commaCount ? ';' : ',';

  const rows = [];
  let row = [], cell = '', inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { cell += '"'; i++; } else { inQuotes = false; }
      } else cell += c;
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === delimiter) {
      row.push(cell); cell = '';
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(cell); cell = '';
      rows.push(row); row = [];
    } else {
      cell += c;
    }
  }
  if (cell !== '' || row.length) { row.push(cell); rows.push(row); }
  const nonEmpty = rows.filter((r) => !(r.length === 1 && r[0].trim() === ''));
  if (nonEmpty.length === 0) return [];
  const headers = nonEmpty[0].map((h) => h.trim());
  return nonEmpty.slice(1).map((r) => {
    const obj = {};
    headers.forEach((h, i) => { obj[h] = r[i] !== undefined ? r[i].trim() : ''; });
    return obj;
  }).map((obj) => ({ __delimiter: delimiter, ...obj }));
}
// French-locale cells (';'-delimited files) use ',' as the decimal
// separator ("1500,50") and sometimes a space/NBSP as a thousands
// separator ("1 500,50") — both need stripping before Number() works.
function parseImportNumber(str, delimiter) {
  if (str === undefined || str === null || String(str).trim() === '') return undefined;
  let s = String(str).trim();
  if (delimiter === ';') s = s.replace(/[\s ]/g, '').replace(',', '.');
  const n = Number(s);
  return Number.isFinite(n) ? n : NaN;
}
function rowsToImportPayload(parsedRows, depots) {
  let newCount = 0, updateCount = 0;
  const parseErrors = [];
  const payload = [];
  parsedRows.forEach((r, idx) => {
    const delimiter = r.__delimiter;
    const id = (r['ID'] || '').trim();
    if (id) updateCount++; else newCount++;
    // Name is only required to create a new product — an update row (ID
    // present) may leave it blank to mean "don't change the name," same as
    // every other optional column (matches server.js's own rule).
    if (!id && !(r['Nom'] || '').trim()) { parseErrors.push('Ligne ' + (idx + 2) + ' : nom manquant (obligatoire pour un nouveau produit)'); return; }
    const stockByDepotName = {};
    depots.forEach((d) => {
      const col = 'Stock ' + d.name;
      if (r[col] !== undefined && r[col] !== '') stockByDepotName[d.name] = r[col];
    });
    payload.push({
      id, name: r['Nom'], categoryName: r['Catégorie'], supplierName: r['Fournisseur'],
      price: parseImportNumber(r['Prix vente'], delimiter), cost: parseImportNumber(r['Prix achat'], delimiter),
      minStock: parseImportNumber(r['Stock minimum'], delimiter), barcode: r['Code-barres'], location: r['Emplacement'],
      unitsPerPack: parseImportNumber(r['Unités/Paquet'], delimiter), pricePerPack: parseImportNumber(r['Prix Paquet'], delimiter),
      unitsPerCarton: parseImportNumber(r['Unités/Carton'], delimiter), pricePerCarton: parseImportNumber(r['Prix Carton'], delimiter),
      stockByDepotName,
    });
  });
  return { payload, newCount, updateCount, parseErrors };
}
function handleImportCsvFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const parsed = parseCsv(String(reader.result));
    const { payload, newCount, updateCount, parseErrors } = rowsToImportPayload(parsed, state.depots);
    state.impFileName = file.name;
    state.impRows = payload;
    state.impNewCount = newCount;
    state.impUpdateCount = updateCount;
    state.impParseErrors = parseErrors;
    state.impResult = null;
    state.showImportPreview = true;
    rerender();
  };
  reader.readAsText(file, 'utf-8');
}
async function confirmImportProducts() {
  state.impBusy = true;
  rerender();
  try {
    const result = await api('POST', '/api/products/import', { rows: state.impRows });
    await loadAppState(); // category/supplier auto-create touches more than state.products — full resync is simplest and safe
    state.impResult = result;
    state.impBusy = false;
    flashToast(result.created + ' créé(s), ' + result.updated + ' mis à jour' + (result.errors.length ? ', ' + result.errors.length + ' ignoré(s)' : ''));
    rerender();
  } catch (e) {
    state.impBusy = false;
    flashToast(e.message || "Erreur lors de l'import");
    rerender();
  }
}
function closeImportPreview() {
  state.showImportPreview = false; state.impFileName = ''; state.impRows = [];
  state.impNewCount = 0; state.impUpdateCount = 0; state.impParseErrors = []; state.impResult = null;
  rerender();
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

// ---------- Notifications (rappels de crédit / disponibilité produit) ----------
// No SMS/email gateway is wired up yet — Orange SMS API and Gmail are the
// planned targets, pending real credentials. Every action here only drafts a
// message and copies it (and the recipient contacts) to the clipboard for a
// manual send; "Marquer comme envoyé" just logs that the shop did so, it
// never claims an automatic send happened. Wiring a real gateway later means
// adding an actual server-side send call behind these same buttons — the
// recipient-selection and message-drafting UI doesn't need to change.
function clientsWithOutstandingCredit() {
  const creditByClient = {};
  state.sales.forEach((sa) => {
    if (sa.paymentMethod === 'Crédit' && sa.creditRemaining > 0 && sa.clientId) {
      creditByClient[sa.clientId] = (creditByClient[sa.clientId] || 0) + sa.creditRemaining;
    }
  });
  return state.clients
    .filter((c) => creditByClient[c.id] > 0)
    .map((c) => ({ client: c, owed: creditByClient[c.id] }))
    .sort((a, b) => b.owed - a.owed);
}
function shopName() { return state.estCompanyName || 'NassuaGroup'; }
function openCreditReminderForm(clientId) {
  const entry = clientsWithOutstandingCredit().find((x) => x.client.id === clientId);
  if (!entry) return;
  state.showCreditReminderForm = true;
  state.msgClientId = clientId;
  state.msgChannel = entry.client.phone ? 'sms' : 'email';
  state.msgSubject = 'Rappel de solde — ' + shopName();
  state.msgText = `Bonjour ${entry.client.name}, vous avez un solde de crédit de ${fcfa(entry.owed)} chez ${shopName()}. Merci de régulariser votre situation dès que possible.`;
  rerender();
}
function closeCreditReminderForm() {
  state.showCreditReminderForm = false; state.msgClientId = ''; state.msgSubject = ''; state.msgText = '';
  rerender();
}
function setMsgChannel(channel) { state.msgChannel = channel; rerender(); }
async function copyMsgText() {
  const text = state.msgChannel === 'email' && state.msgSubject
    ? `Objet : ${state.msgSubject}\n\n${state.msgText}` : state.msgText;
  await copyText(text, 'Message copié');
}
function currentMsgClient() { return state.clients.find((c) => c.id === state.msgClientId); }
async function copyMsgContact() {
  const c = currentMsgClient();
  if (!c) return;
  const value = state.msgChannel === 'email' ? c.email : c.phone;
  if (!value) { flashToast(state.msgChannel === 'email' ? "Ce client n'a pas d'email enregistré" : "Ce client n'a pas de téléphone enregistré"); return; }
  await copyText(value, (state.msgChannel === 'email' ? 'Email' : 'Téléphone') + ' copié');
}
async function copyDebtorsList() {
  const list = clientsWithOutstandingCredit();
  if (!list.length) return;
  const text = list.map(({ client: c, owed }) => `${c.name} — ${c.phone || 'pas de téléphone'}${c.email ? ' / ' + c.email : ''} — ${fcfa(owed)}`).join('\n');
  await copyText(text, 'Liste des ' + list.length + ' client(s) endetté(s) copiée');
}
function channelIsConfigured(channel) {
  return channel === 'email' ? (state.msgCfgEmailEnabled && state.msgCfgHasAppPassword) : (state.msgCfgSmsEnabled && state.msgCfgHasClientSecret);
}
async function markMessageSent(type, recipientIds, productId) {
  try {
    const entry = await api('POST', '/api/messages/log', {
      type, channel: state.msgChannel, recipientIds, message: state.msgText,
      subject: state.msgChannel === 'email' ? state.msgSubject : '', productId: productId || '', recordedBy: state.userName,
    });
    state.messageLog.unshift(entry);
    if (entry.sent) {
      const okCount = entry.sendResults.filter((r) => r.ok).length;
      const failCount = entry.sendResults.length - okCount;
      if (failCount === 0) flashToast('Envoyé avec succès à ' + okCount + ' destinataire(s)');
      else if (okCount === 0) flashToast("Échec de l'envoi : " + entry.sendResults[0].error);
      else flashToast(okCount + ' envoyé(s), ' + failCount + ' échec(s) — voir historique');
    } else {
      flashToast('Marqué comme envoyé (' + entry.recipientNames.length + ' destinataire(s))');
    }
    return true;
  } catch (e) { flashToast(e.message); return false; }
}
async function sendCreditReminder() {
  if (!state.msgClientId || !state.msgText.trim()) return;
  const ok = await markMessageSent('credit-reminder', [state.msgClientId]);
  if (ok) closeCreditReminderForm(); else rerender();
}

function toggleAvailabilityForm() {
  state.showAvailabilityForm = !state.showAvailabilityForm;
  if (state.showAvailabilityForm) {
    state.msgProductId = state.products[0] ? state.products[0].id : '';
    state.msgRecipientMode = 'all';
    state.msgSelectedClientIds = [];
    state.msgChannel = 'sms';
    regenerateAvailabilityMessage();
  }
  rerender();
}
function regenerateAvailabilityMessage() {
  const p = state.products.find((pp) => pp.id === state.msgProductId);
  const productLabel = p ? `"${p.name}"` : 'ce produit';
  const priceLabel = p ? ` Prix : ${fcfa(p.price)}.` : '';
  state.msgSubject = 'Disponibilité : ' + (p ? p.name : '');
  state.msgText = `Bonjour, ${productLabel} est de nouveau disponible chez ${shopName()}.${priceLabel} N'hésitez pas à passer nous voir !`;
}
function toggleMsgRecipient(clientId) {
  const idx = state.msgSelectedClientIds.indexOf(clientId);
  if (idx >= 0) state.msgSelectedClientIds.splice(idx, 1); else state.msgSelectedClientIds.push(clientId);
  rerender();
}
function availabilityRecipients() {
  if (state.msgRecipientMode === 'all') return state.clients;
  return state.clients.filter((c) => state.msgSelectedClientIds.includes(c.id));
}
async function copyAvailabilityContacts() {
  const recipients = availabilityRecipients();
  const values = recipients.map((c) => (state.msgChannel === 'email' ? c.email : c.phone)).filter(Boolean);
  if (!values.length) { flashToast('Aucun contact ' + (state.msgChannel === 'email' ? 'email' : 'téléphone') + ' disponible parmi les destinataires'); return; }
  await copyText(values.join(', '), values.length + ' contact(s) copié(s)');
}
async function sendAvailabilityBroadcast() {
  const recipients = availabilityRecipients();
  if (!recipients.length || !state.msgText.trim()) return;
  const ok = await markMessageSent('availability', recipients.map((c) => c.id), state.msgProductId);
  if (ok) { state.showAvailabilityForm = false; rerender(); } else rerender();
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

// ---------- Établissement ----------
// Kept comfortably under the server's ~700 000-char logo cap (base64 inflates
// raw bytes by ~4/3) so an oversized image gets rejected here, before an
// upload, rather than a 400 from the server after the read.
const MAX_LOGO_FILE_BYTES = 500 * 1024;
function handleLogoFile(file) {
  if (!file) return;
  if (!file.type.startsWith('image/')) { flashToast('Le logo doit être une image'); return; }
  if (file.size > MAX_LOGO_FILE_BYTES) { flashToast('Image trop volumineuse (max 500 Ko)'); return; }
  const reader = new FileReader();
  reader.onload = () => { state.estLogo = reader.result; rerender(); };
  reader.readAsDataURL(file);
}
async function saveSettings() {
  try {
    const settings = await api('PATCH', '/api/settings', {
      companyName: state.estCompanyName, address: state.estAddress, phone: state.estPhone,
      email: state.estEmail, taxId: state.estTaxId, logo: state.estLogo,
      ncc: state.estNcc, taxRegime: state.estTaxRegime, taxCenter: state.estTaxCenter,
      bankDetails: state.estBankDetails, vatRate: Number(state.estVatRate) || 0,
    });
    state.estCompanyName = settings.companyName; state.estAddress = settings.address;
    state.estPhone = settings.phone; state.estEmail = settings.email;
    state.estTaxId = settings.taxId; state.estLogo = settings.logo;
    state.estNcc = settings.ncc; state.estTaxRegime = settings.taxRegime;
    state.estTaxCenter = settings.taxCenter; state.estBankDetails = settings.bankDetails;
    state.estVatRate = String(settings.vatRate || 0);
    flashToast('Établissement mis à jour');
    rerender();
  } catch (e) { flashToast(e.message); }
}

// ---------- FNE (facturation électronique DGI) ----------
async function saveFNEConfig() {
  if (state.fneTaxCode) state.estVatRate = String(FNE_TAX_RATES[state.fneTaxCode]);
  try {
    const cfg = await api('PATCH', '/api/fne/config', {
      apiKey: state.fneApiKeyInput, baseUrl: state.fneBaseUrl, enabled: state.fneEnabled, taxCode: state.fneTaxCode,
    });
    state.fneEnabled = cfg.enabled; state.fneBaseUrl = cfg.baseUrl;
    state.fneTaxCode = cfg.taxCode; state.fneHasApiKey = cfg.hasApiKey;
    state.fneApiKeyInput = '';
    flashToast('Configuration FNE enregistrée');
    rerender();
  } catch (e) { flashToast(e.message); }
}

// ---------- Messagerie (envoi réel des rappels/annonces) ----------
async function saveMessagingConfig() {
  try {
    const cfg = await api('PATCH', '/api/messaging/config', {
      emailEnabled: state.msgCfgEmailEnabled, gmailUser: state.msgCfgGmailUser, gmailAppPassword: state.msgCfgGmailAppPasswordInput,
      smsEnabled: state.msgCfgSmsEnabled, clientId: state.msgCfgClientId, clientSecret: state.msgCfgClientSecretInput, senderAddress: state.msgCfgSenderAddress,
    });
    state.msgCfgEmailEnabled = cfg.email.enabled; state.msgCfgGmailUser = cfg.email.gmailUser; state.msgCfgHasAppPassword = cfg.email.hasAppPassword;
    state.msgCfgGmailAppPasswordInput = '';
    state.msgCfgSmsEnabled = cfg.sms.enabled; state.msgCfgClientId = cfg.sms.clientId; state.msgCfgSenderAddress = cfg.sms.senderAddress;
    state.msgCfgHasClientSecret = cfg.sms.hasClientSecret; state.msgCfgClientSecretInput = '';
    flashToast('Configuration de messagerie enregistrée');
    rerender();
  } catch (e) { flashToast(e.message); }
}

async function certifyWithFNE() {
  const r = state.lastReceipt;
  if (!r || state.fneCertifying) return;
  state.fneCertifying = true;
  rerender();
  try {
    const fne = await api('POST', `/api/fne/certify/${r.id}`);
    r.fne = fne;
    const sale = state.sales.find((s) => s.id === r.id);
    if (sale) sale.fne = fne;
    flashToast('Facture certifiée FNE : ' + fne.reference);
  } catch (e) {
    flashToast(e.message || 'Échec de la certification FNE');
  } finally {
    state.fneCertifying = false;
    rerender();
  }
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
function resetClientForm() {
  state.showAddClient = false; state.editingClientId = null;
  state.ncliName = ''; state.ncliPhone = ''; state.ncliEmail = ''; state.ncliNcc = '';
}
function openAddClientForm() {
  resetClientForm();
  state.showAddClient = true;
}
function openEditClientForm(id) {
  const c = state.clients.find((cl) => cl.id === id);
  if (!c) return;
  resetClientForm();
  state.editingClientId = id;
  state.ncliName = c.name; state.ncliPhone = c.phone || ''; state.ncliEmail = c.email || ''; state.ncliNcc = c.ncc || '';
  state.confirmDeleteClientId = null;
  state.showAddClient = true;
}
function saveClient() {
  return state.editingClientId ? updateClient() : addClient();
}
async function addClient() {
  if (!state.ncliName.trim()) return;
  try {
    const client = await api('POST', '/api/clients', { name: state.ncliName.trim(), phone: state.ncliPhone, email: state.ncliEmail, ncc: state.ncliNcc });
    state.clients.push(client);
    resetClientForm();
    flashToast('Client ajouté : ' + client.name);
    rerender();
  } catch (e) { flashToast(e.message); }
}
async function updateClient() {
  if (!state.ncliName.trim()) return;
  try {
    const updated = await api('PATCH', `/api/clients/${state.editingClientId}`, {
      name: state.ncliName.trim(), phone: state.ncliPhone, email: state.ncliEmail, ncc: state.ncliNcc,
    });
    const idx = state.clients.findIndex((c) => c.id === updated.id);
    if (idx >= 0) state.clients[idx] = updated;
    resetClientForm();
    flashToast('Client mis à jour : ' + updated.name);
    rerender();
  } catch (e) { flashToast(e.message); }
}
async function deleteClient(id) {
  try {
    await api('DELETE', `/api/clients/${id}`);
    state.clients = state.clients.filter((c) => c.id !== id);
    state.confirmDeleteClientId = null;
    flashToast('Client supprimé');
    rerender();
  } catch (e) {
    state.confirmDeleteClientId = null;
    flashToast(e.message);
    rerender();
  }
}
function resetEmployeeForm() {
  state.showAddEmployee = false; state.editingEmployeeId = null;
  state.neName = ''; state.neRole = 'Caissier'; state.neCustomRole = ''; state.nePhone = ''; state.neDepotId = ''; state.nePassword = '';
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
  state.neName = e.name; state.nePhone = e.phone || ''; state.neDepotId = e.depotId || '';
  // A stored role outside the fixed list only happens via a free-text
  // "Autre" entry — reselect Autre and prefill the custom field so editing
  // doesn't silently discard it.
  if (EMPLOYEE_ROLES.includes(e.role)) { state.neRole = e.role; state.neCustomRole = ''; }
  else { state.neRole = 'Autre'; state.neCustomRole = e.role; }
  state.nePassword = '';
  state.confirmDeleteEmployeeId = null;
  state.showAddEmployee = true;
}
function saveEmployee() {
  return state.editingEmployeeId ? updateEmployee() : addEmployee();
}
async function addEmployee() {
  if (!state.neName.trim() || state.nePassword.length < 4) return;
  const role = state.neRole === 'Autre' ? state.neCustomRole.trim() : state.neRole;
  if (!role) { flashToast('Précisez le poste'); return; }
  try {
    const employee = await api('POST', '/api/employees', {
      name: state.neName.trim(), role, phone: state.nePhone, depotId: state.neDepotId || null, password: state.nePassword,
    });
    state.employees.push(employee);
    resetEmployeeForm();
    flashToast('Employé ajouté : ' + employee.name);
    rerender();
  } catch (e) { flashToast(e.message); }
}
async function updateEmployee() {
  if (!state.neName.trim()) return;
  const role = state.neRole === 'Autre' ? state.neCustomRole.trim() : state.neRole;
  if (!role) { flashToast('Précisez le poste'); return; }
  try {
    const updated = await api('PATCH', `/api/employees/${state.editingEmployeeId}`, {
      name: state.neName.trim(), role, phone: state.nePhone, depotId: state.neDepotId || null,
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
// Lists every employee who has ever logged in online on this device — not
// just whoever did so most recently — so a shared till can offer each
// cashier their own cached identity instead of only a manager's (a real bug
// found by testing: only the last online login was ever cached, so anyone
// else trying to resume offline was silently offered someone else's name).
function renderOfflineLoginLink() {
  const all = loadOfflineSnapshots();
  const keys = Object.keys(all);
  if (keys.length === 0) return '';
  const rows = keys.map((k) => `<div class="login-offline-link" data-action="workOffline" data-key="${esc(k)}">Travailler hors ligne (${esc(all[k].userName || k)})</div>`).join('');
  return `<div class="login-offline-list">${rows}</div>`;
}
function renderLogin() {
  const brandHtml = `<div class="login-brand"><div class="login-logo">N</div><div class="login-title">NassuaGroup</div></div>
    <div class="login-sub">Gestionnaire Magasin</div>`;

  if (!state.loginMode) {
    return `<div class="login-screen"><div class="login-card">
      ${brandHtml}
      <div class="login-label">SE CONNECTER EN TANT QUE</div>
      <div class="login-buttons">
        <div class="login-btn manager" data-action="chooseLoginMode" data-mode="manager">Gérant</div>
        <div class="login-btn cashier" data-action="chooseLoginMode" data-mode="cashier">Caissier</div>
      </div>
      ${renderOfflineLoginLink()}
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
    ${renderOfflineLoginLink()}
  </div></div>`;
}

function renderShell() {
  return `<div class="shell${state.mobileNavOpen ? ' mobile-nav-open' : ''}">
    ${renderSidebar()}
    <div class="sidebar-backdrop" data-action="closeMobileNav"></div>
    <div class="main">${renderTopbar()}<div class="content">${renderScreen()}</div></div>
    ${renderScannerModal()}
    ${renderUnitPickerModal()}
    ${renderReceiptModal()}
    ${renderImportPreviewModal()}
    ${renderToastEl()}
  </div>`;
}

function renderSidebar() {
  const isManager = state.role === 'manager';
  const navHtml = NAV_ITEMS.filter((n) => !n.managerOnly || isManager).map((n) => {
    if (n.external) {
      return `<div class="nav-item" data-action="openExternal" data-url="${esc(n.external)}" title="Ouvre dans un nouvel onglet">${n.icon}<span style="flex:1">${n.label}</span><span style="opacity:.55">${ICON_EXTERNAL}</span></div>`;
    }
    const active = state.screen === n.key;
    return `<div class="nav-item${active ? ' active' : ''}" data-action="nav" data-screen="${n.key}">${n.icon}<span>${n.label}</span></div>`;
  }).join('');
  return `<div class="sidebar">
    <div class="sidebar-brand"><div class="sidebar-logo">N</div><div><div class="sidebar-brand-name">NassuaGroup</div><div class="sidebar-brand-sub">Gestionnaire Magasin</div></div></div>
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

// Shown whenever there's something offline-related worth a cashier
// noticing: currently in offline mode, sales still queued (even if back
// online — the sync just hasn't run yet), or a sync blocked on an expired
// cached token. Clicking it manually retries the sync.
function renderOfflineChip() {
  const pending = getOutbox().length;
  if (!state.offlineMode && pending === 0 && !state.offlineSyncBlocked) return '';
  if (state.offlineSyncBlocked) {
    return `<div class="offline-chip blocked" data-action="syncOfflineNow" title="Reconnectez-vous pour synchroniser">⚠ Reconnexion requise (${pending})</div>`;
  }
  const label = state.offlineMode
    ? `● Mode hors ligne${pending ? ` · ${pending} en attente` : ''}`
    : `${pending} vente(s) en attente · Synchroniser`;
  return `<div class="offline-chip" data-action="syncOfflineNow" title="Synchroniser maintenant">${label}</div>`;
}
function renderTopbar() {
  const t = TITLES[state.screen] || TITLES.dashboard;
  const today = new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
  return `<div class="topbar">
    <div style="display:flex;align-items:center;gap:12px;min-width:0">
      <div class="menu-toggle" data-action="toggleMobileNav" aria-label="Menu">${ICON_MENU}</div>
      <div style="min-width:0"><div class="topbar-title">${t[0]}</div><div class="topbar-subtitle">${t[1]}</div></div>
    </div>
    <div style="display:flex;align-items:center;gap:16px">${renderOfflineChip()}<div class="topbar-date">${esc(today)}</div></div>
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
    case 'notifications': return renderNotifications();
    case 'expenses': return renderExpenses();
    case 'rapports': return renderRapports();
    case 'employes': return renderEmployes();
    case 'etablissement': return renderEtablissement();
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
      <div class="table-card" style="border:none;border-radius:0"><table class="data-table">
        <tr><th>DATE</th><th>CAISSIER</th><th>DÉPÔT</th><th>ARTICLES</th><th>PAIEMENT</th><th class="right">TOTAL</th></tr>
        ${salesRowsHtml}
      </table></div>
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
    const hasPackaging = p.unitsPerPack > 1 || p.unitsPerCarton > 1;
    const cardAction = disabled ? '' : hasPackaging
      ? ` data-action="selectUnit" data-id="${p.id}"`
      : ` data-action="addToCart" data-id="${p.id}" data-unit="detail"`;
    return `<div class="pos-product-card${disabled ? ' disabled' : ''}"${cardAction}>
      <div class="pos-product-info">
        <div class="pos-product-dot" style="background:${cat ? cat.color : '#888'}"></div>
        <div class="pos-product-name">${esc(p.name)}</div>
        <div class="pos-product-stock">${disabled ? 'Rupture de stock' : qty + ' en stock'}</div>
        <div class="pos-product-price">${fcfa(p.price)}${hasPackaging ? '<span class="pos-packaging-hint">Détail/Paquet/Carton</span>' : ''}</div>
      </div>
      ${p.image ? `<img class="pos-product-image" src="${p.image}" alt="" />` : ''}
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
        <div class="camera-btn" data-action="openScanner" data-mode="sell" title="Scanner avec une caméra (webcam ou téléphone)">${ICON_CAMERA} Caméra</div>
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
  // Cashiers get read-only stock visibility: no add/edit/delete, no stepper,
  // no restock/transfer/CSV import-export — just the table, search, and
  // filters. Enforced server-side too (see MANAGER_ONLY in server.js); this
  // is just so a cashier never even sees a control that would 403.
  const isManager = state.role === 'manager';
  const catOptions = state.categories.map((c) => `<option value="${c.id}"${state.stockCatFilter === c.id ? ' selected' : ''}>${esc(c.name)}</option>`).join('');
  const npCatOptions = state.categories.map((c) => `<option value="${c.id}"${state.npCategoryId === c.id ? ' selected' : ''}>${esc(c.name)}</option>`).join('');
  const npSupOptions = state.suppliers.map((s) => `<option value="${s.id}"${state.npSupplierId === s.id ? ' selected' : ''}>${esc(s.name)}</option>`).join('');
  const npDepotOptions = state.depots.map((d) => `<option value="${d.id}"${state.npDepotId === d.id ? ' selected' : ''}>${esc(d.name)}</option>`).join('');

  const filterId = state.stockDepotFilter || 'all';
  let list = state.products;
  if (state.stockCatFilter !== 'all') list = list.filter((p) => p.categoryId === state.stockCatFilter);
  if (state.stockSearch.trim()) {
    const q = state.stockSearch.trim().toLowerCase();
    list = list.filter((p) => p.name.toLowerCase().includes(q) || (p.location || '').toLowerCase().includes(q));
  }
  const catById = {}; state.categories.forEach((c) => { catById[c.id] = c; });

  const rowsHtml = list.map((p) => {
    const cat = catById[p.categoryId];
    const qty = filterId === 'all' ? stockTotal(p) : stockAt(p, filterId);
    const st = stockStatus(qty, p.minStock);
    const adjustHtml = !isManager ? '' : filterId === 'all'
      ? `<span style="color:var(--muted);font-size:12px">tous dépôts</span>`
      : `<div class="stepper">
          <div class="stepper-btn" data-action="stockDec" data-id="${p.id}">−</div>
          <div class="stepper-btn" data-action="stockInc" data-id="${p.id}">+</div>
          <div class="stepper-btn" style="color:var(--green)" data-action="quickRestock" data-id="${p.id}" title="Réapprovisionner">${ICON_RESTOCK}</div>
        </div>`;
    const packagingHint = (p.unitsPerPack > 1 || p.unitsPerCarton > 1)
      ? `<div style="font-size:10.5px;color:var(--muted)">${p.unitsPerPack > 1 ? `paquet ${p.unitsPerPack}` : ''}${p.unitsPerPack > 1 && p.unitsPerCarton > 1 ? ' · ' : ''}${p.unitsPerCarton > 1 ? `carton ${p.unitsPerCarton}` : ''}</div>` : '';
    const nameActionsHtml = !isManager ? '' : state.confirmDeleteProductId === p.id
      ? ` <span style="font-size:11px;color:var(--danger);font-weight:600">Supprimer ?</span> <span style="cursor:pointer;color:var(--danger);vertical-align:middle" data-action="confirmDeleteProduct" data-id="${p.id}" title="Confirmer">${ICON_CHECK}</span> <span style="cursor:pointer;color:var(--muted);vertical-align:middle" data-action="cancelDeleteProduct" title="Annuler">${ICON_CLOSE}</span>`
      : ` <span style="cursor:pointer;color:var(--muted);vertical-align:middle" data-action="editProduct" data-id="${p.id}" title="Modifier">${ICON_EDIT}</span> <span style="cursor:pointer;color:var(--danger);vertical-align:middle" data-action="askDeleteProduct" data-id="${p.id}" title="Supprimer">${ICON_TRASH}</span>`;
    return `<tr>
      <td style="font-weight:600">${p.image ? `<img class="product-thumb" src="${p.image}" alt="" />` : ''}${esc(p.name)}${nameActionsHtml}${packagingHint}</td>
      <td><span class="dot" style="background:${cat ? cat.color : '#888'}"></span>${cat ? esc(cat.name) : '—'}</td>
      <td>${p.location ? esc(p.location) : '<span style="color:var(--muted)">—</span>'}</td>
      <td class="right">${fcfa(p.price)}</td>
      <td class="center" style="font-weight:700">${qty}</td>
      <td class="center"><span class="badge ${st.cls}">${st.label}</span></td>
      ${isManager ? `<td class="center">${adjustHtml}</td>` : ''}
    </tr>`;
  }).join('');

  const isEditingProduct = !!state.editingProductId;
  const addFormHtml = isManager && state.showAddProduct ? `<div class="add-form cols-4">
    <input id="field-npName" class="field" type="text" placeholder="Nom du produit" value="${esc(state.npName)}" data-bind="npName" />
    <div style="display:flex;gap:6px">
      <input id="field-npBarcode" class="field" style="flex:1" type="text" placeholder="Code-barres (scanner USB ou saisir)" autofocus value="${esc(state.npBarcode)}" data-bind="npBarcode" />
      <div class="camera-btn" data-action="openScanner" data-mode="register" title="Scanner avec une caméra (webcam ou téléphone)">${ICON_CAMERA}</div>
    </div>
    <div class="pos-hint" style="grid-column:1/-1;margin:0">Astuce : cliquez dans le champ code-barres puis scannez le produit avec un lecteur USB — le code s'y saisit tout seul. Ou utilisez le bouton caméra pour scanner avec une webcam ou un téléphone connecté au PC. Laissez vide pour générer un code interne automatiquement.</div>
    <div style="grid-column:1/-1;display:flex;gap:12px;align-items:center;flex-wrap:wrap">
      ${state.npImage ? `<div class="product-image-preview"><img src="${state.npImage}" alt="" /></div>` : ''}
      <input id="field-npImageFile" type="file" accept="image/*" data-bind="npImageFile" />
      ${state.npImage ? `<span style="cursor:pointer;color:var(--danger);font-size:12.5px;font-weight:600" data-action="removeProductImage">Supprimer l'image</span>` : ''}
    </div>
    <select id="field-npCategoryId" class="field" data-bind="npCategoryId">${npCatOptions}</select>
    <select id="field-npSupplierId" class="field" data-bind="npSupplierId">${npSupOptions}</select>
    ${isEditingProduct ? '' : `<select id="field-npDepotId" class="field" data-bind="npDepotId" title="Dépôt de réception du stock initial">${npDepotOptions}</select>`}
    <input id="field-npPrice" class="field" type="number" placeholder="Prix vente au détail (FCFA)" value="${esc(state.npPrice)}" data-bind="npPrice" />
    <input id="field-npCost" class="field" type="number" placeholder="Prix achat (FCFA)" value="${esc(state.npCost)}" data-bind="npCost" />
    ${isEditingProduct ? '' : `<input id="field-npStock" class="field" type="number" placeholder="Stock initial" value="${esc(state.npStock)}" data-bind="npStock" />`}
    <input id="field-npMinStock" class="field" type="number" placeholder="Seuil minimum" value="${esc(state.npMinStock)}" data-bind="npMinStock" />
    <input id="field-npLocation" class="field" type="text" placeholder="Emplacement en magasin (ex: Allée 3, Étagère B)" value="${esc(state.npLocation)}" data-bind="npLocation" />
    <input id="field-npUnitsPerPack" class="field" type="number" placeholder="Unités par paquet (optionnel)" value="${esc(state.npUnitsPerPack)}" data-bind="npUnitsPerPack" />
    <input id="field-npPricePerPack" class="field" type="number" placeholder="Prix du paquet (FCFA)" value="${esc(state.npPricePerPack)}" data-bind="npPricePerPack" />
    <input id="field-npUnitsPerCarton" class="field" type="number" placeholder="Unités par carton (optionnel)" value="${esc(state.npUnitsPerCarton)}" data-bind="npUnitsPerCarton" />
    <input id="field-npPricePerCarton" class="field" type="number" placeholder="Prix du carton (FCFA)" value="${esc(state.npPricePerCarton)}" data-bind="npPricePerCarton" />
    <div class="save-btn" data-action="saveProduct">${isEditingProduct ? 'Mettre à jour' : 'Enregistrer'}</div>
  </div>` : '';

  const transferHtml = isManager && state.showTransfer ? renderTransferForm() : '';
  const restockHtml = isManager && state.showRestock ? renderRestockForm() : '';

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
      ${isManager ? `<div style="display:flex;gap:10px">
        ${state.depots.length > 1 ? `<div class="add-btn" style="background:#fff;color:var(--green);border:1px solid var(--border)" data-action="toggleTransfer">⇄ Transférer du stock</div>` : ''}
        <div class="add-btn" style="background:#fff;color:var(--green);border:1px solid var(--border)" data-action="toggleRestock">↓ Réapprovisionner</div>
        <div class="add-btn" style="background:#fff;color:var(--green);border:1px solid var(--border)" data-action="exportProductsCsv" title="Télécharger le catalogue en CSV">↓ Exporter CSV</div>
        <div class="add-btn" style="background:#fff;color:var(--green);border:1px solid var(--border)" data-action="triggerImportFile" title="Importer un fichier CSV">↑ Importer CSV</div>
        <input id="field-impFile" type="file" accept=".csv,text/csv" data-bind="impFile" style="display:none" />
        <div class="add-btn" data-action="toggleAddProduct">+ Ajouter un produit</div>
      </div>` : ''}
    </div>
    ${transferHtml}
    ${restockHtml}
    ${addFormHtml}
    <div class="table-card"><table class="data-table">
      <tr><th>PRODUIT</th><th>CATÉGORIE</th><th>EMPLACEMENT</th><th class="right">PRIX</th><th class="center">STOCK</th><th class="center">STATUT</th>${isManager ? '<th class="center">AJUSTER</th>' : ''}</tr>
      ${rowsHtml}
    </table></div>
  </div>`;
}

function renderImportPreviewModal() {
  if (!state.showImportPreview) return '';
  const r = state.impResult;
  if (r) {
    const errorsHtml = r.errors.length
      ? `<div style="max-height:180px;overflow-y:auto;margin-top:10px;font-size:12px;color:var(--danger)">${r.errors.map((e) => `Ligne ${e.row} : ${esc(e.error)}`).join('<br/>')}</div>` : '';
    const warningsHtml = r.warnings.length
      ? `<div style="margin-top:10px;font-size:12px;color:var(--warning)">${r.warnings.map(esc).join('<br/>')}</div>` : '';
    return `<div class="modal-overlay">
      <div class="modal-card" style="width:440px">
        <div class="modal-header"><div class="modal-title">Résultat de l'import</div><div class="modal-close" data-action="closeImportPreview">×</div></div>
        <div class="modal-body">
          <div>${r.created} produit(s) créé(s), ${r.updated} mis à jour${r.errors.length ? `, ${r.errors.length} ligne(s) ignorée(s)` : ''}.</div>
          ${errorsHtml}
          ${warningsHtml}
        </div>
        <div class="modal-footer"><div class="modal-footer-btn primary" data-action="closeImportPreview">Fermer</div></div>
      </div>
    </div>`;
  }
  const parseErrorsHtml = state.impParseErrors.length
    ? `<div style="max-height:120px;overflow-y:auto;margin-top:10px;font-size:12px;color:var(--danger)">${state.impParseErrors.map(esc).join('<br/>')}</div>` : '';
  return `<div class="modal-overlay">
    <div class="modal-card" style="width:420px">
      <div class="modal-header"><div class="modal-title">Importer ${esc(state.impFileName)}</div><div class="modal-close" data-action="closeImportPreview">×</div></div>
      <div class="modal-body">
        <div>${state.impRows.length} ligne(s) détectée(s) — ${state.impNewCount} nouveau(x) produit(s), ${state.impUpdateCount} mise(s) à jour (si l'ID est valide).</div>
        ${parseErrorsHtml}
      </div>
      <div class="modal-footer">
        <div class="modal-footer-btn secondary" data-action="closeImportPreview">Annuler</div>
        <div class="modal-footer-btn primary" data-action="confirmImportProducts"${state.impBusy || state.impRows.length === 0 ? ' style="opacity:.6;pointer-events:none"' : ''}>${state.impBusy ? 'Import en cours…' : "Confirmer l'import"}</div>
      </div>
    </div>
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
  const isEditing = !!state.editingClientId;
  const rows = state.clients.map((c) => {
    const owed = creditByClient[c.id] || 0;
    const actionsHtml = state.confirmDeleteClientId === c.id
      ? `<div style="display:flex;gap:6px;align-items:center;justify-content:center">
          <span style="font-size:11px;color:var(--danger);font-weight:600">Supprimer ?</span>
          <div class="stepper-btn" style="color:var(--danger)" data-action="confirmDeleteClient" data-id="${c.id}" title="Confirmer">${ICON_CHECK}</div>
          <div class="stepper-btn" data-action="cancelDeleteClient" title="Annuler">${ICON_CLOSE}</div>
        </div>`
      : `<div style="display:flex;gap:10px;justify-content:center">
          <div style="cursor:pointer;color:var(--muted)" data-action="editClient" data-id="${c.id}" title="Modifier">${ICON_EDIT}</div>
          ${state.role === 'manager' ? `<div style="cursor:pointer;color:var(--danger)" data-action="askDeleteClient" data-id="${c.id}" title="Supprimer">${ICON_TRASH}</div>` : ''}
        </div>`;
    return `<tr><td style="font-weight:600">${esc(c.name)}</td><td>${esc(c.phone)}</td><td>${c.email ? esc(c.email) : '<span style="color:var(--muted)">—</span>'}</td><td class="center">${c.points}</td><td class="right">${fcfa(c.totalSpent)}</td><td class="right"${owed ? ' style="color:var(--danger);font-weight:700"' : ''}>${owed ? fcfa(owed) : '—'}</td><td class="center">${actionsHtml}</td></tr>`;
  }).join('');
  const addFormHtml = state.showAddClient ? `<div class="add-form cols-inline" style="gap:10px">
    <input id="field-ncliName" class="field" style="flex:1" type="text" placeholder="Nom du client" value="${esc(state.ncliName)}" data-bind="ncliName" />
    <input id="field-ncliPhone" class="field" style="flex:1" type="text" placeholder="Téléphone" value="${esc(state.ncliPhone)}" data-bind="ncliPhone" />
    <input id="field-ncliEmail" class="field" style="flex:1" type="email" placeholder="Email (optionnel)" value="${esc(state.ncliEmail)}" data-bind="ncliEmail" />
    <input id="field-ncliNcc" class="field" style="flex:1" type="text" placeholder="NCC (si client professionnel, optionnel)" value="${esc(state.ncliNcc)}" data-bind="ncliNcc" />
    <div class="save-btn" data-action="saveClient">${isEditing ? 'Mettre à jour' : 'Enregistrer'}</div>
    ${isEditing ? `<div class="add-btn" style="background:#fff;color:var(--muted);border:1px solid var(--border)" data-action="cancelEditClient">Annuler</div>` : ''}
  </div>` : '';
  return `<div>
    <div style="display:flex;justify-content:flex-end;margin-bottom:16px"><div class="add-btn" data-action="toggleAddClient">+ Ajouter un client</div></div>
    ${addFormHtml}
    <div class="table-card"><table class="data-table">
      <tr><th>CLIENT</th><th>TÉLÉPHONE</th><th>EMAIL</th><th class="center">POINTS FIDÉLITÉ</th><th class="right">TOTAL DÉPENSÉ</th><th class="right">CRÉDIT EN COURS</th><th class="center">ACTIONS</th></tr>
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

// A message-compose block shared by both the credit-reminder form (single
// client) and the availability broadcast form (many clients) — the caller
// passes what differs: the recipient summary line, whether a subject field
// applies, and the send/cancel actions.
function renderMessageComposeFields(recipientSummaryHtml) {
  const configured = channelIsConfigured(state.msgChannel);
  const bannerHtml = configured
    ? `<div style="grid-column:1/-1;color:var(--green);font-weight:600;font-size:11.5px">✓ Envoi réel activé (${state.msgChannel === 'email' ? 'Gmail' : 'Orange SMS'}) — "Envoyer" enverra vraiment le message.</div>`
    : `<div style="grid-column:1/-1" class="pos-hint">Aucune passerelle ${state.msgChannel === 'email' ? 'email' : 'SMS'} connectée pour l'instant (configurable sur l'écran Établissement) — copiez le message ci-dessous et envoyez-le manuellement, puis marquez-le comme envoyé.</div>`;
  return `
    ${bannerHtml}
    <div style="grid-column:1/-1">${recipientSummaryHtml}</div>
    <div class="pay-tabs" style="grid-column:1/-1;max-width:220px">
      <div class="pay-tab${state.msgChannel === 'sms' ? ' active' : ''}" data-action="setMsgChannelSms">SMS</div>
      <div class="pay-tab${state.msgChannel === 'email' ? ' active' : ''}" data-action="setMsgChannelEmail">Email</div>
    </div>
    ${state.msgChannel === 'email' ? `<input id="field-msgSubject" class="field" style="grid-column:1/-1" type="text" placeholder="Objet" value="${esc(state.msgSubject)}" data-bind="msgSubject" />` : ''}
    <textarea id="field-msgText" class="field" style="grid-column:1/-1;min-height:90px;resize:vertical" placeholder="Message" data-bind="msgText">${esc(state.msgText)}</textarea>`;
}

function renderCreditReminderForm() {
  const c = currentMsgClient();
  if (!c) return '';
  const contactValue = state.msgChannel === 'email' ? c.email : c.phone;
  const summaryHtml = `Destinataire : <strong>${esc(c.name)}</strong> — ${contactValue ? esc(contactValue) : `<span style="color:var(--danger)">pas de ${state.msgChannel === 'email' ? 'email' : 'téléphone'} enregistré</span>`}`;
  return `<div class="add-form cols-2">
    ${renderMessageComposeFields(summaryHtml)}
    <div class="save-btn" data-action="copyMsgTextAction">Copier le message</div>
    <div class="add-btn" style="background:#fff;color:var(--green);border:1px solid var(--border)" data-action="copyMsgContactAction">Copier le ${state.msgChannel === 'email' ? 'email' : 'numéro'}</div>
    <div class="save-btn" style="background:var(--green)" data-action="sendCreditReminderAction">${channelIsConfigured(state.msgChannel) ? 'Envoyer' : 'Marquer comme envoyé'}</div>
    <div class="add-btn" style="background:#fff;color:var(--muted);border:1px solid var(--border)" data-action="closeCreditReminderForm">Annuler</div>
  </div>`;
}

function renderAvailabilityForm() {
  if (!state.showAvailabilityForm) return '';
  const productOptions = state.products.slice().sort((a, b) => a.name.localeCompare(b.name))
    .map((p) => `<option value="${p.id}"${state.msgProductId === p.id ? ' selected' : ''}>${esc(p.name)}</option>`).join('');
  const recipients = availabilityRecipients();
  const clientRowsHtml = state.clients.map((c) => {
    const selected = state.msgSelectedClientIds.includes(c.id);
    const contact = state.msgChannel === 'email' ? (c.email || 'pas d\'email') : (c.phone || 'pas de téléphone');
    return `<div class="msg-recipient-row${selected ? ' selected' : ''}" data-action="toggleMsgRecipient" data-id="${c.id}">
      <span>${selected ? ICON_CHECK : ''}</span>
      <span style="flex:1">${esc(c.name)}</span>
      <span style="color:var(--muted);font-size:12px">${esc(contact)}</span>
    </div>`;
  }).join('');
  const recipientPickerHtml = state.msgRecipientMode === 'specific'
    ? `<div style="grid-column:1/-1;max-height:180px;overflow-y:auto;border:1px solid var(--border);border-radius:8px">${clientRowsHtml || '<div style="padding:12px;color:var(--muted);font-size:13px">Aucun client enregistré.</div>'}</div>` : '';
  const summaryHtml = `Destinataires : <strong>${recipients.length}</strong> client(s) ${state.msgRecipientMode === 'all' ? '(tous les clients)' : 'sélectionné(s)'}`;
  return `<div class="add-form cols-2">
    <select id="field-msgProductId" class="field" style="grid-column:1/-1" data-bind="msgProductId">${productOptions}</select>
    <div class="pay-tabs" style="grid-column:1/-1;max-width:320px">
      <div class="pay-tab${state.msgRecipientMode === 'all' ? ' active' : ''}" data-action="setMsgRecipientModeAll">Tous les clients</div>
      <div class="pay-tab${state.msgRecipientMode === 'specific' ? ' active' : ''}" data-action="setMsgRecipientModeSpecific">Clients spécifiques</div>
    </div>
    ${recipientPickerHtml}
    ${renderMessageComposeFields(summaryHtml)}
    <div class="save-btn" data-action="copyMsgTextAction">Copier le message</div>
    <div class="add-btn" style="background:#fff;color:var(--green);border:1px solid var(--border)" data-action="copyAvailabilityContactsAction">Copier les ${state.msgChannel === 'email' ? 'emails' : 'numéros'}</div>
    <div class="save-btn" style="background:var(--green)" data-action="sendAvailabilityBroadcastAction">${channelIsConfigured(state.msgChannel) ? 'Envoyer' : 'Marquer comme envoyé'}</div>
    <div class="add-btn" style="background:#fff;color:var(--muted);border:1px solid var(--border)" data-action="toggleAvailabilityForm">Annuler</div>
  </div>`;
}

function renderMessageLogTable() {
  const rows = state.messageLog.slice(0, 50).map((m) => {
    const typeLabel = m.type === 'credit-reminder' ? 'Rappel de crédit' : 'Disponibilité' + (m.productName ? ' — ' + esc(m.productName) : '');
    const recipientsLabel = m.recipientNames.length > 2
      ? m.recipientNames.length + ' destinataires'
      : m.recipientNames.map(esc).join(', ');
    let statusHtml = '<span class="badge" style="background:#eef0ea;color:#4a5548">Copié manuellement</span>';
    if (m.sent && Array.isArray(m.sendResults)) {
      const failCount = m.sendResults.filter((r) => !r.ok).length;
      statusHtml = failCount === 0
        ? `<span class="badge ok">Envoyé</span>`
        : failCount === m.sendResults.length
          ? `<span class="badge" style="background:var(--danger-bg);color:var(--danger)" title="${esc(m.sendResults[0].error || '')}">Échec</span>`
          : `<span class="badge warning" title="${esc(m.sendResults.find((r) => !r.ok).error || '')}">${m.sendResults.length - failCount}/${m.sendResults.length} envoyés</span>`;
    }
    return `<tr>
      <td>${esc(dayLabel(m.sentAt))}</td>
      <td style="font-weight:600">${typeLabel}</td>
      <td class="center">${m.channel === 'email' ? 'Email' : 'SMS'}</td>
      <td>${recipientsLabel}</td>
      <td style="max-width:260px;white-space:normal;font-size:12.5px;color:var(--muted)">${esc(m.message)}</td>
      <td class="center">${statusHtml}</td>
      <td>${esc(m.recordedBy) || '—'}</td>
    </tr>`;
  }).join('');
  return `<div class="table-card"><table class="data-table">
    <tr><th>DATE</th><th>TYPE</th><th class="center">CANAL</th><th>DESTINATAIRES</th><th>MESSAGE</th><th class="center">STATUT</th><th>PAR</th></tr>
    ${rows || '<tr><td colspan="7" style="text-align:center;color:var(--muted);padding:20px">Aucun message enregistré.</td></tr>'}
  </table></div>`;
}

function renderNotifications() {
  const debtors = clientsWithOutstandingCredit();
  const debtorRowsHtml = debtors.map(({ client: c, owed }) => `<tr>
    <td style="font-weight:600">${esc(c.name)}</td>
    <td>${esc(c.phone) || '—'}</td>
    <td>${c.email ? esc(c.email) : '—'}</td>
    <td class="right" style="font-weight:700;color:var(--danger)">${fcfa(owed)}</td>
    <td class="center"><div class="add-btn" style="background:#fff;color:var(--green);border:1px solid var(--border);padding:6px 12px;font-size:12px" data-action="openCreditReminderForm" data-id="${c.id}">Composer un rappel</div></td>
  </tr>`).join('');
  const creditReminderFormHtml = state.showCreditReminderForm ? renderCreditReminderForm() : '';

  const availabilitySectionHtml = state.role === 'manager' ? `
    <div style="display:flex;justify-content:space-between;align-items:center;margin:28px 0 16px">
      <div class="card-title" style="margin:0">Disponibilité produit</div>
      <div class="add-btn" data-action="toggleAvailabilityForm">${state.showAvailabilityForm ? 'Fermer' : '+ Composer une annonce'}</div>
    </div>
    ${renderAvailabilityForm()}` : '';

  return `<div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:10px">
      <div class="card-title" style="margin:0">Rappels de crédit</div>
      ${debtors.length ? `<div class="add-btn" style="background:#fff;color:var(--green);border:1px solid var(--border)" data-action="copyDebtorsListAction">Copier la liste des clients endettés</div>` : ''}
    </div>
    ${creditReminderFormHtml}
    <div class="table-card"><table class="data-table">
      <tr><th>CLIENT</th><th>TÉLÉPHONE</th><th>EMAIL</th><th class="right">MONTANT DÛ</th><th class="center">ACTION</th></tr>
      ${debtorRowsHtml || '<tr><td colspan="5" style="text-align:center;color:var(--muted);padding:20px">Aucun client avec un crédit en cours.</td></tr>'}
    </table></div>

    ${availabilitySectionHtml}

    <div class="card-title" style="margin:28px 0 16px">Historique des communications</div>
    ${renderMessageLogTable()}
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

function renderReportDateFilter() {
  const mode = state.repDateMode || 'all';
  const options = [
    ['all', "Tout l'historique"], ['day', "Aujourd'hui"], ['week', 'Cette semaine'],
    ['month', 'Ce mois-ci'], ['custom', 'Période personnalisée'],
  ].map(([v, label]) => `<option value="${v}"${mode === v ? ' selected' : ''}>${esc(label)}</option>`).join('');
  const customInputs = mode === 'custom' ? `
    <input id="field-repDateFrom" class="field" type="date" value="${esc(state.repDateFrom)}" data-bind="repDateFrom" />
    <span style="color:var(--muted);font-size:12px">→</span>
    <input id="field-repDateTo" class="field" type="date" value="${esc(state.repDateTo)}" data-bind="repDateTo" />` : '';
  return `<div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
    <select id="field-repDateMode" class="field" data-bind="repDateMode">${options}</select>
    ${customInputs}
  </div>`;
}

function renderRapports() {
  const filterId = state.repDepotFilter || 'all';
  const dateRange = reportDateRange();
  const relevantSales = salesForDepot(filterId).filter((sa) => inDateRange(sa.date, dateRange));
  const totalRevenue = relevantSales.reduce((a, sa) => a + sa.total, 0);
  const salesCount = relevantSales.length;
  const avgBasket = salesCount ? totalRevenue / salesCount : 0;
  const unitsSold = relevantSales.reduce((a, sa) => a + sa.itemCount, 0);

  const relevantExpenses = (filterId === 'all' ? state.expenses : state.expenses.filter((e) => e.depotId === filterId))
    .filter((e) => inDateRange(e.date, dateRange));
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
  // product.sold counter. They stay intentionally depot-unfiltered (always
  // every dépôt) — but do respect the date filter, same as everything else
  // on this screen — see the caption below the KPIs.
  const soldMap = {}, revMap = {};
  state.sales.filter((sa) => inDateRange(sa.date, dateRange)).forEach((sa) => (sa.items || []).forEach((it) => {
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
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:16px">
      ${renderReportDateFilter()}
      ${renderDepotFilter('repDepotFilter', true)}
    </div>
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
    <div style="font-size:11.5px;color:var(--muted);margin-bottom:14px">Le solde de caisse compte les ventes payées immédiatement en totalité, et les ventes à crédit seulement pour l'avance et les versements déjà reçus (pas le solde restant) — moins les dépenses. Le revenu par catégorie et le classement produits ci-dessous couvrent tous les dépôts (pas seulement celui sélectionné), mais respectent la période choisie.</div>
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
  const roleOptionsHtml = EMPLOYEE_ROLES.map((r) => `<option value="${esc(r)}"${state.neRole === r ? ' selected' : ''}>${esc(r)}</option>`).join('');
  const customRoleHtml = state.neRole === 'Autre'
    ? `<input id="field-neCustomRole" class="field" type="text" placeholder="Préciser le poste" value="${esc(state.neCustomRole)}" data-bind="neCustomRole" />` : '';
  const addFormHtml = state.showAddEmployee ? `<div class="add-form cols-4">
    <input id="field-neName" class="field" type="text" placeholder="Nom complet" value="${esc(state.neName)}" data-bind="neName" />
    <select id="field-neRole" class="field" data-bind="neRole">${roleOptionsHtml}</select>
    ${customRoleHtml}
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

function renderEtablissement() {
  const logoPreview = state.estLogo
    ? `<div class="est-logo-preview"><img src="${state.estLogo}" alt="Logo" /></div>` : '';
  const removeBtn = state.estLogo
    ? `<span style="cursor:pointer;color:var(--danger);font-size:12.5px;font-weight:600" data-action="removeLogo">Supprimer le logo</span>` : '';
  return `<div style="max-width:480px">
    <div class="card">
      <div class="card-title">Informations de l'entreprise</div>
      <div style="font-size:12.5px;color:var(--muted);margin-bottom:14px">Ces informations et ce logo apparaissent sur le ticket de caisse imprimable.</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        <input id="field-estCompanyName" class="field-lg" type="text" placeholder="Nom de l'entreprise" value="${esc(state.estCompanyName)}" data-bind="estCompanyName" />
        <input id="field-estAddress" class="field-lg" type="text" placeholder="Adresse" value="${esc(state.estAddress)}" data-bind="estAddress" />
        <input id="field-estPhone" class="field-lg" type="text" placeholder="Téléphone" value="${esc(state.estPhone)}" data-bind="estPhone" />
        <input id="field-estEmail" class="field-lg" type="email" placeholder="Email" value="${esc(state.estEmail)}" data-bind="estEmail" />
        <input id="field-estTaxId" class="field-lg" type="text" placeholder="Identifiant fiscal (RCCM / IFU)" value="${esc(state.estTaxId)}" data-bind="estTaxId" />
        <div class="card-title" style="font-size:12.5px;margin:6px 0 0">Pour la facture A4</div>
        <input id="field-estNcc" class="field-lg" type="text" placeholder="NCC (Numéro de Compte Contribuable)" value="${esc(state.estNcc)}" data-bind="estNcc" />
        <input id="field-estTaxRegime" class="field-lg" type="text" placeholder="Régime d'imposition" value="${esc(state.estTaxRegime)}" data-bind="estTaxRegime" />
        <input id="field-estTaxCenter" class="field-lg" type="text" placeholder="Centre des impôts" value="${esc(state.estTaxCenter)}" data-bind="estTaxCenter" />
        <input id="field-estBankDetails" class="field-lg" type="text" placeholder="Références bancaires" value="${esc(state.estBankDetails)}" data-bind="estBankDetails" />
        <input id="field-estVatRate" class="field-lg" type="number" min="0" max="100" step="0.5" placeholder="Taux de TVA (%) — laisser 0 si non applicable" value="${esc(state.estVatRate)}" data-bind="estVatRate"${state.fneTaxCode ? ' readonly title="Déterminé par le code TVA FNE ci-dessous"' : ''} />
        <div>
          <div style="font-size:12px;color:var(--muted);margin-bottom:6px">Logo</div>
          ${logoPreview}
          <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
            <input id="field-estLogoFile" type="file" accept="image/*" data-bind="estLogoFile" />
            ${removeBtn}
          </div>
        </div>
        <div class="save-btn" style="padding:11px;justify-content:center" data-action="saveSettings">Enregistrer</div>
      </div>
    </div>
    ${renderFNEConfigCard()}
    ${renderMessagingConfigCard()}
  </div>`;
}

function renderFNEConfigCard() {
  const taxCodeOptions = [
    ['', 'Non configuré'],
    ['TVA', 'TVA — normal 18%'],
    ['TVAB', 'TVAB — réduit 9%'],
    ['TVAC', 'TVAC — exonération conventionnelle 0%'],
    ['TVAD', 'TVAD — exonération légale 0% (TEE/RME)'],
  ].map(([v, label]) => `<option value="${v}"${state.fneTaxCode === v ? ' selected' : ''}>${esc(label)}</option>`).join('');
  const keyPlaceholder = state.fneHasApiKey ? 'Clé déjà enregistrée — laisser vide pour ne pas la changer' : "Clé API fournie par la DGI (espace FNE > Paramétrage)";
  return `<div class="card" style="margin-top:16px">
    <div class="card-title">Intégration FNE (facturation électronique DGI)</div>
    <div style="font-size:12.5px;color:var(--muted);margin-bottom:14px">Nécessite une inscription et une clé API obtenues sur le portail FNE de la DGI. Certification réelle de facture de vente uniquement (pas les avoirs ni les bordereaux d'achat).</div>
    <div style="display:flex;flex-direction:column;gap:10px">
      <label style="display:flex;align-items:center;gap:8px;font-size:13px;font-weight:600">
        <input type="checkbox" data-action="toggleFneEnabled"${state.fneEnabled ? ' checked' : ''} /> Activer la certification FNE
      </label>
      <input id="field-fneApiKeyInput" class="field-lg" type="password" placeholder="${esc(keyPlaceholder)}" value="${esc(state.fneApiKeyInput)}" data-bind="fneApiKeyInput" autocomplete="off" />
      <input id="field-fneBaseUrl" class="field-lg" type="text" placeholder="URL de l'API (test par défaut)" value="${esc(state.fneBaseUrl)}" data-bind="fneBaseUrl" />
      <select id="field-fneTaxCode" class="field-lg" data-bind="fneTaxCode">${taxCodeOptions}</select>
      <div class="save-btn" style="padding:11px;justify-content:center" data-action="saveFNEConfig">Enregistrer la configuration FNE</div>
    </div>
  </div>`;
}

function renderMessagingConfigCard() {
  const passwordPlaceholder = state.msgCfgHasAppPassword ? 'Mot de passe déjà enregistré — laisser vide pour ne pas le changer' : "Mot de passe d'application Gmail (16 caractères)";
  const secretPlaceholder = state.msgCfgHasClientSecret ? 'Client Secret déjà enregistré — laisser vide pour ne pas le changer' : 'Client Secret Orange';
  return `<div class="card" style="margin-top:16px">
    <div class="card-title">Envoi des rappels et annonces (SMS / email)</div>
    <div style="font-size:12.5px;color:var(--muted);margin-bottom:14px">Une fois activé ici, le bouton "Envoyer" des écrans Notifications envoie réellement le message au lieu de se contenter de le copier.</div>
    <div style="display:flex;flex-direction:column;gap:10px">
      <div style="font-size:12.5px;font-weight:700;color:var(--muted)">EMAIL (Gmail)</div>
      <label style="display:flex;align-items:center;gap:8px;font-size:13px;font-weight:600">
        <input type="checkbox" data-action="toggleMsgCfgEmailEnabled"${state.msgCfgEmailEnabled ? ' checked' : ''} /> Activer l'envoi par email
      </label>
      <input id="field-msgCfgGmailUser" class="field-lg" type="email" placeholder="Adresse Gmail" value="${esc(state.msgCfgGmailUser)}" data-bind="msgCfgGmailUser" />
      <input id="field-msgCfgGmailAppPasswordInput" class="field-lg" type="password" placeholder="${esc(passwordPlaceholder)}" value="${esc(state.msgCfgGmailAppPasswordInput)}" data-bind="msgCfgGmailAppPasswordInput" autocomplete="off" />
      <div class="pos-hint" style="margin:0">Le mot de passe d'application se génère sur myaccount.google.com/apppasswords (nécessite la validation en 2 étapes activée sur le compte).</div>

      <div style="font-size:12.5px;font-weight:700;color:var(--muted);margin-top:6px">SMS (Orange SMS API)</div>
      <label style="display:flex;align-items:center;gap:8px;font-size:13px;font-weight:600">
        <input type="checkbox" data-action="toggleMsgCfgSmsEnabled"${state.msgCfgSmsEnabled ? ' checked' : ''} /> Activer l'envoi par SMS
      </label>
      <input id="field-msgCfgClientId" class="field-lg" type="text" placeholder="Client ID Orange" value="${esc(state.msgCfgClientId)}" data-bind="msgCfgClientId" />
      <input id="field-msgCfgClientSecretInput" class="field-lg" type="password" placeholder="${esc(secretPlaceholder)}" value="${esc(state.msgCfgClientSecretInput)}" data-bind="msgCfgClientSecretInput" autocomplete="off" />
      <input id="field-msgCfgSenderAddress" class="field-lg" type="text" placeholder="Numéro expéditeur approuvé (ex: +2250000000)" value="${esc(state.msgCfgSenderAddress)}" data-bind="msgCfgSenderAddress" />
      <div class="pos-hint" style="margin:0">Identifiants obtenus sur developer.orange.com — le numéro expéditeur doit être approuvé par Orange.</div>

      <div class="save-btn" style="padding:11px;justify-content:center" data-action="saveMessagingConfig">Enregistrer la configuration d'envoi</div>
    </div>
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

function renderUnitPickerModal() {
  if (!state.showUnitPicker) return '';
  const p = state.products.find((pp) => pp.id === state.unitPickerProductId);
  if (!p) return '';
  const available = stockAt(p, state.currentDepotId);
  const options = [{ unit: 'detail', label: 'Détail', sub: '1 unité', price: p.price, ok: available >= 1 }];
  if (p.unitsPerPack > 1) options.push({ unit: 'pack', label: 'Paquet', sub: `${p.unitsPerPack} unités`, price: p.pricePerPack, ok: available >= p.unitsPerPack });
  if (p.unitsPerCarton > 1) options.push({ unit: 'carton', label: 'Carton', sub: `${p.unitsPerCarton} unités`, price: p.pricePerCarton, ok: available >= p.unitsPerCarton });
  const optionsHtml = options.map((o) => `
    <div class="unit-option${o.ok ? '' : ' disabled'}"${o.ok ? ` data-action="addToCart" data-id="${p.id}" data-unit="${o.unit}"` : ''}>
      <div><div class="unit-option-label">${o.label}</div><div class="unit-option-sub">${o.ok ? o.sub : 'Stock insuffisant'}</div></div>
      <div class="unit-option-price">${fcfa(o.price)}</div>
    </div>`).join('');
  return `<div class="modal-overlay">
    <div class="modal-card">
      <div class="modal-header"><div class="modal-title">${esc(p.name)}</div><div class="modal-close" data-action="closeUnitPicker">×</div></div>
      <div class="modal-body">${optionsHtml}</div>
    </div>
  </div>`;
}

function renderScannerModal() {
  if (!state.showScanner) return '';
  const errorHtml = state.scanError ? `<div class="pos-error" style="text-align:center;margin-top:8px">${esc(state.scanError)}</div>` : '';
  const title = state.scanMode === 'register' ? 'Scanner le code-barres du produit' : 'Scanner un produit';
  return `<div class="modal-overlay">
    <div class="modal-card scanner-modal">
      <div class="modal-header"><div class="modal-title">${title}</div><div class="modal-close" data-action="closeScanner">×</div></div>
      <div class="modal-body">
        <div class="scanner-frame"><video id="scanner-video" autoplay muted playsinline></video><div class="scanner-reticle"></div></div>
        <div class="scanner-hint">Placez le code-barres ou QR code du produit devant la caméra.</div>
        <div id="scanner-device-select-wrap">${buildScanDeviceSelectHtml()}</div>
        ${errorHtml}
      </div>
      <div class="modal-footer"><div class="modal-footer-btn secondary" style="flex:1" data-action="closeScanner">Fermer</div></div>
    </div>
  </div>`;
}

function renderTicketHtml(r) {
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
  // Falls back to the platform's own "NassuaGroup" brand block when the shop
  // hasn't filled in its Établissement info yet — see renderEtablissement().
  const brandName = state.estCompanyName || 'NassuaGroup';
  const brandLogo = state.estLogo ? `<img src="${state.estLogo}" alt="" />` : 'N';
  const contactLine = [state.estAddress, state.estPhone].filter(Boolean).join(' · ');
  const taxLine = state.estTaxId ? `RCCM/IFU : ${state.estTaxId}` : '';
  const brandSubHtml = state.estCompanyName
    ? `${contactLine ? `<div class="receipt-brand-sub">${esc(contactLine)}</div>` : ''}${taxLine ? `<div class="receipt-brand-sub">${esc(taxLine)}</div>` : ''}`
    : `<div class="receipt-brand-sub">Gestionnaire Magasin</div>`;
  return `<div id="receipt-print">
      <div class="receipt-brand"><div class="receipt-logo">${brandLogo}</div><div class="receipt-brand-name">${esc(brandName)}</div>${brandSubHtml}</div>
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
    </div>`;
}

// Prices in this app have never carried a separate tax component — they're
// the actual amount collected (TTC). When a VAT rate is configured, HT is
// back-computed from that TTC line total rather than added on top, so
// TOTAL HT + TVA always reconciles exactly to r.total (what was really
// charged). A 0% rate (the default) makes HT == TTC, i.e. no VAT at all —
// this app has no per-product tax data to justify inventing anything else.
function renderInvoiceHtml(r) {
  const dateObj = new Date(r.date);
  const dateTimeLabel = `${dateObj.toLocaleDateString('fr-FR')} ${dateObj.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}`;
  const vatRate = Number(state.estVatRate) || 0;
  const client = r.clientId ? state.clients.find((c) => c.id === r.clientId) : null;

  let totalHT = 0, totalVAT = 0;
  const rows = r.items.map((it) => {
    const product = state.products.find((p) => p.id === it.productId);
    const ref = (product && product.barcode) || it.productId;
    const unitLabel = it.unit === 'pack' ? 'Paquet' : it.unit === 'carton' ? 'Carton' : 'Détail';
    const ht = it.lineTotal / (1 + vatRate / 100);
    totalHT += ht; totalVAT += it.lineTotal - ht;
    return `<tr>
      <td>${esc(ref)}</td>
      <td>${esc(it.name)}</td>
      <td class="right">${fcfa(ht / it.qty)}</td>
      <td class="center">${it.qty}</td>
      <td class="center">${esc(unitLabel)}</td>
      <td class="center">${vatRate}</td>
      <td class="center">0</td>
      <td class="right">${fcfa(ht)}</td>
    </tr>`;
  }).join('');

  const identityBox = `<div class="inv-box">
    <div style="font-weight:700">${esc(state.estCompanyName || 'Établissement non renseigné')}</div>
    ${state.estNcc ? `<div>NCC : ${esc(state.estNcc)}</div>` : ''}
    ${state.estTaxRegime ? `<div>Régime d'imposition : ${esc(state.estTaxRegime)}</div>` : ''}
    ${state.estTaxCenter ? `<div>Centre des impôts : ${esc(state.estTaxCenter)}</div>` : ''}
  </div>`;
  const logoHtml = state.estLogo ? `<img class="inv-logo" src="${state.estLogo}" alt="Logo" />` : '';

  const vatLabel = vatRate > 0 ? `TVA ${vatRate}%` : 'Pas de TVA appliquée (0%)';

  return `<div id="invoice-print">
    <div class="inv-header">
      ${identityBox}
      ${logoHtml}
    </div>
    ${state.estTaxId ? `<div class="inv-line">RCCM : ${esc(state.estTaxId)}</div>` : ''}
    <div class="inv-line">Références bancaires : ${esc(state.estBankDetails || '')}</div>
    <div class="inv-cols">
      <div>
        <div class="inv-section-title">Établissement</div>
        <div class="inv-line">${esc(state.estCompanyName || '')}</div>
        ${state.estAddress ? `<div class="inv-line">Adresse : ${esc(state.estAddress)}</div>` : ''}
        ${state.estPhone ? `<div class="inv-line">N° Tel : ${esc(state.estPhone)}</div>` : ''}
        ${state.estEmail ? `<div class="inv-line">Mail : ${esc(state.estEmail)}</div>` : ''}
        <div class="inv-line">Nom du vendeur : ${esc(r.cashier)}</div>
        <div class="inv-line">Nom de PDV : ${esc(r.depotName || '')}</div>
        <div class="inv-line">Date et heure : ${esc(dateTimeLabel)}</div>
        <div class="inv-line">Mode de paiement : ${esc(r.paymentMethod)}</div>
      </div>
      <div>
        <div class="inv-section-title">Client</div>
        <div class="inv-line">Nom : ${esc(r.clientName || 'Client de passage')}</div>
        ${client && client.phone ? `<div class="inv-line">Téléphone : ${esc(client.phone)}</div>` : ''}
      </div>
    </div>
    <table class="inv-table">
      <tr><th>Réf</th><th>Désignation</th><th class="right">P.U HT</th><th class="center">Qté</th><th class="center">Unité</th><th class="center">Taxes (%)</th><th class="center">Rem. (%)</th><th class="right">Montant HT</th></tr>
      ${rows}
    </table>
    <table class="inv-totals">
      <tr><td>TOTAL HT</td><td class="right">${fcfa(totalHT)}</td></tr>
      <tr><td>TVA</td><td class="right">${fcfa(totalVAT)}</td></tr>
      <tr><td style="font-weight:700">TOTAL TTC</td><td class="right" style="font-weight:700">${fcfa(totalHT + totalVAT)}</td></tr>
      <tr><td>AUTRES TAXES</td><td class="right">${fcfa(0)}</td></tr>
      <tr><td>TIMBRE DE QUITTANCE</td><td class="right">${fcfa(0)}</td></tr>
      <tr><td style="font-weight:700">TOTAL A PAYER</td><td class="right" style="font-weight:700">${fcfa(r.total)}</td></tr>
      ${r.paymentMethod === 'Crédit' && r.creditPaid > 0 ? `<tr><td>Avance versée</td><td class="right">${fcfa(r.creditPaid)}</td></tr>` : ''}
      ${r.paymentMethod === 'Crédit' ? `<tr><td>Solde restant</td><td class="right">${fcfa(r.creditRemaining)}</td></tr>` : ''}
    </table>
    <div class="inv-section-title" style="margin-top:16px">Résumé de la facture</div>
    <table class="inv-table">
      <tr><th>Catégorie</th><th class="right">Sous-total</th><th class="center">Taux (%)</th><th class="right">Total taxes</th></tr>
      <tr><td>${esc(vatLabel)}</td><td class="right">${fcfa(totalHT)}</td><td class="center">${vatRate}</td><td class="right">${fcfa(totalVAT)}</td></tr>
    </table>
  </div>`;
}

// Shared HT/TVA math + field prep for every FNE copy helper below, so the
// full-text copy and the per-section copies can never disagree with each
// other or with renderInvoiceHtml (this app has no FNE API integration —
// no DGI credentials, no verified API contract — so all of this is about
// making manual re-entry into the DGI's own portal fast, not submitting
// electronically).
function computeInvoiceCore(r) {
  const dateObj = new Date(r.date);
  const dateTimeLabel = `${dateObj.toLocaleDateString('fr-FR')} ${dateObj.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}`;
  const vatRate = Number(state.estVatRate) || 0;
  const client = r.clientId ? state.clients.find((c) => c.id === r.clientId) : null;
  let totalHT = 0, totalVAT = 0;
  const items = r.items.map((it) => {
    const product = state.products.find((p) => p.id === it.productId);
    const ref = (product && product.barcode) || it.productId;
    const unitLabel = it.unit === 'pack' ? 'Paquet' : it.unit === 'carton' ? 'Carton' : 'Détail';
    const ht = it.lineTotal / (1 + vatRate / 100);
    totalHT += ht; totalVAT += it.lineTotal - ht;
    return { name: it.name, ref, unitLabel, qty: it.qty, htUnit: ht / it.qty, ht };
  });
  return { dateTimeLabel, vatRate, client, items, totalHT, totalVAT };
}
// null marks an omitted optional field (dropped by the caller's filter);
// '' is a deliberate blank spacer line (kept) — kept distinct so dropping
// omitted fields never eats an intentional blank line too.
function buildFNEIdentityText(core) {
  return [
    `Établissement : ${state.estCompanyName || ''}`,
    state.estNcc ? `NCC : ${state.estNcc}` : null,
    state.estTaxRegime ? `Régime d'imposition : ${state.estTaxRegime}` : null,
    state.estTaxCenter ? `Centre des impôts : ${state.estTaxCenter}` : null,
    state.estTaxId ? `RCCM : ${state.estTaxId}` : null,
    state.estBankDetails ? `Références bancaires : ${state.estBankDetails}` : null,
  ].filter((line) => line !== null).join('\n');
}
function buildFNEPartiesText(r, core) {
  return [
    state.estAddress ? `Adresse : ${state.estAddress}` : null,
    state.estPhone ? `N° Tel : ${state.estPhone}` : null,
    state.estEmail ? `Mail : ${state.estEmail}` : null,
    `Nom du vendeur : ${r.cashier}`,
    `Nom de PDV : ${r.depotName || ''}`,
    `Date et heure : ${core.dateTimeLabel}`,
    `Mode de paiement : ${r.paymentMethod}`,
    '',
    `Client — Nom : ${r.clientName || 'Client de passage'}`,
    core.client && core.client.phone ? `Client — Téléphone : ${core.client.phone}` : null,
  ].filter((line) => line !== null).join('\n');
}
// Tab-separated so a single paste can fill a whole grid row at once in any
// form/spreadsheet-like widget that supports it, in the exact column order
// shown on the printed facture (Réf, Désignation, P.U HT, Qté, Unité,
// Taxes (%), Rem. (%), Montant HT).
function buildFNEItemsTSV(core) {
  const header = ['Réf', 'Désignation', 'P.U HT', 'Qté', 'Unité', 'Taxes (%)', 'Rem. (%)', 'Montant HT'].join('\t');
  const rows = core.items.map((it) =>
    [it.ref, it.name, Math.round(it.htUnit), it.qty, it.unitLabel, core.vatRate, 0, Math.round(it.ht)].join('\t'));
  return [header, ...rows].join('\n');
}
function buildFNETotalsText(r, core) {
  return [
    `TOTAL HT : ${fcfa(core.totalHT)}`,
    `TVA (${core.vatRate}%) : ${fcfa(core.totalVAT)}`,
    `TOTAL TTC : ${fcfa(core.totalHT + core.totalVAT)}`,
    `TOTAL A PAYER : ${fcfa(r.total)}`,
  ].join('\n');
}
function buildInvoiceText(r) {
  const core = computeInvoiceCore(r);
  return [
    'FACTURE', '',
    buildFNEIdentityText(core), '',
    buildFNEPartiesText(r, core), '',
    'Articles :',
    ...core.items.map((it) => `- ${it.name} | Réf ${it.ref} | Qté ${it.qty} (${it.unitLabel}) | P.U HT ${fcfa(it.htUnit)} | Montant HT ${fcfa(it.ht)}`),
    '',
    buildFNETotalsText(r, core),
  ].join('\n');
}
async function copyText(text, successMsg) {
  try {
    await navigator.clipboard.writeText(text);
    flashToast(successMsg);
  } catch (e) {
    flashToast('Impossible de copier automatiquement — sélectionnez et copiez manuellement');
  }
}
const FNE_SECTION_BUILDERS = {
  identity: { build: (r, core) => buildFNEIdentityText(core), msg: 'Identité entreprise copiée (NCC, régime, centre des impôts, RCCM, RIB)' },
  parties: { build: (r, core) => buildFNEPartiesText(r, core), msg: 'Établissement et client copiés' },
  items: { build: (r, core) => buildFNEItemsTSV(core), msg: 'Articles copiés (collez dans le tableau FNE, une ligne complète à la fois)' },
  totals: { build: (r, core) => buildFNETotalsText(r, core), msg: 'Totaux copiés (HT / TVA / TTC)' },
};
function copyFNESection(section) {
  const r = state.lastReceipt;
  const entry = FNE_SECTION_BUILDERS[section];
  if (!r || !entry) return;
  copyText(entry.build(r, computeInvoiceCore(r)), entry.msg);
}
async function sendToFNE() {
  const r = state.lastReceipt;
  if (!r) return;
  try {
    await navigator.clipboard.writeText(buildInvoiceText(r));
    flashToast('Détails de la facture copiés — collez-les dans le portail FNE');
  } catch (e) {
    flashToast("Impossible de copier automatiquement — ouvrez le portail et saisissez les infos depuis la facture");
  }
  window.open(FNE_URL, '_blank', 'noopener');
}

// Renders the DGI verification token as a scannable QR code, so a shopper
// can check authenticity with their phone instead of typing/clicking the
// link. Uses the same CDN-script pattern as ZXing (see index.html) rather
// than a hand-rolled encoder — a from-scratch QR implementation (Reed-Solomon
// ECC, mask selection) is easy to get subtly wrong in a way that produces
// codes that *look* right but don't scan, which isn't worth the risk here.
function buildFneQrSvg(url) {
  try {
    const qr = window.qrcode(0, 'M');
    qr.addData(url);
    qr.make();
    return qr.createSvgTag({ cellSize: 4, margin: 2 });
  } catch (e) {
    return '';
  }
}
function renderFNECertifyPanel(r) {
  const configured = state.fneEnabled && state.fneHasApiKey && state.fneTaxCode;
  if (!configured) return '';
  if (r.fne && r.fne.reference) {
    const stickerLine = Number.isFinite(r.fne.balanceSticker)
      ? `<div${r.fne.warning ? ' style="color:var(--danger)"' : ''}>${r.fne.warning ? '⚠ ' : ''}Stickers FNE restants : ${r.fne.balanceSticker}</div>`
      : '';
    const qrSvg = r.fne.token ? buildFneQrSvg(r.fne.token) : '';
    return `<div class="no-print fne-certify-panel fne-certify-done">
      <div><strong>Certifiée FNE</strong> — Référence : ${esc(r.fne.reference)}</div>
      ${stickerLine}
      ${r.fne.token ? `<a href="${esc(r.fne.token)}" target="_blank" rel="noopener" style="color:var(--green);font-weight:600">Voir la vérification officielle →</a>` : ''}
      ${qrSvg ? `<div class="fne-qr">${qrSvg}</div>` : ''}
    </div>`;
  }
  return `<div class="no-print fne-certify-panel">
    <div>Envoyer cette vente à la plateforme FNE de la DGI pour obtenir une facture certifiée officielle (numéro + lien de vérification).</div>
    <div class="fne-copy-chip" data-action="certifyWithFNE"${state.fneCertifying ? ' style="opacity:.6;pointer-events:none"' : ''}>${state.fneCertifying ? 'Certification en cours…' : 'Certifier via FNE (API)'}</div>
  </div>`;
}

function renderReceiptModal() {
  if (!state.showReceipt || !state.lastReceipt) return '';
  const r = state.lastReceipt;
  const isInvoice = state.receiptView === 'invoice';
  // Deliberately NOT .no-print on this outer wrapper: it's an ancestor of
  // #receipt-print/#invoice-print, and display:none on an ancestor can't be
  // undone by visibility:visible on a descendant — that combination
  // silently printed a fully blank page. The print stylesheet's
  // `body * { visibility: hidden }` already hides this overlay's own
  // background at print time; only the UI-chrome children (header, footer,
  // FNE panels) need their own .no-print.
  return `<div class="modal-overlay">
    <div class="modal-card receipt-modal${isInvoice ? ' invoice-mode' : ''}">
      <div class="modal-header no-print">
        <div class="modal-title">${isInvoice ? 'Facture (A4)' : 'Reçu de vente'}${r.pending ? ' <span class="badge warning" style="margin-left:8px">En attente de synchronisation</span>' : ''}</div>
        <div style="display:flex;align-items:center;gap:14px">
          <span style="cursor:pointer;color:var(--green);font-size:12.5px;font-weight:600" data-action="toggleReceiptView">${isInvoice ? '← Voir le reçu' : 'Voir la facture A4'}</span>
          <div class="modal-close" data-action="closeReceipt">×</div>
        </div>
      </div>
      <div class="receipt-body">${isInvoice ? renderInvoiceHtml(r) : renderTicketHtml(r)}</div>
      ${isInvoice ? renderFNECertifyPanel(r) : ''}
      ${isInvoice ? `<div class="no-print fne-copy-panel">
        <div class="fne-copy-title">Aide à la saisie FNE — copiez juste le bloc qu'il vous faut pour le coller au bon endroit sur le portail</div>
        <div class="fne-copy-chips">
          <div class="fne-copy-chip" data-action="copyFNESection" data-section="identity">Identité entreprise</div>
          <div class="fne-copy-chip" data-action="copyFNESection" data-section="parties">Établissement + Client</div>
          <div class="fne-copy-chip" data-action="copyFNESection" data-section="items">Articles (tableau)</div>
          <div class="fne-copy-chip" data-action="copyFNESection" data-section="totals">Totaux</div>
        </div>
      </div>` : ''}
      <div class="modal-footer no-print">
        <div class="modal-footer-btn secondary" data-action="closeReceipt">Fermer</div>
        ${isInvoice ? `<div class="modal-footer-btn secondary" data-action="sendToFNE" title="Copie les infos de la facture et ouvre le portail officiel fne.dgi.gouv.ci pour les y saisir">Migrer vers FNE</div>` : ''}
        <div class="modal-footer-btn primary" data-action="printReceipt">${isInvoice ? 'Imprimer (A4)' : 'Imprimer (A6)'}</div>
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
  workOffline: (ds) => workOffline(ds.key),
  syncOfflineNow: () => syncOfflineSales(),
  nav: (ds) => { state.screen = ds.screen; state.pwError = null; state.pwSuccess = null; state.confirmDeleteEmployeeId = null; state.confirmDeleteProductId = null; state.confirmDeleteClientId = null; state.mobileNavOpen = false; rerender(); },
  toggleMobileNav: () => { state.mobileNavOpen = !state.mobileNavOpen; rerender(); },
  closeMobileNav: () => { state.mobileNavOpen = false; rerender(); },
  openExternal: (ds) => { window.open(ds.url, '_blank', 'noopener'); },
  setPosCatAll: () => { state.posCategory = 'all'; rerender(); },
  setPosCategory: (ds) => { state.posCategory = ds.id; rerender(); },
  addToCart: (ds) => addToCart(ds.id, ds.unit),
  selectUnit: (ds) => { state.showUnitPicker = true; state.unitPickerProductId = ds.id; rerender(); },
  closeUnitPicker: () => { state.showUnitPicker = false; state.unitPickerProductId = null; rerender(); },
  cartMinus: (ds) => changeCartQty(ds.id, ds.unit, -1),
  cartPlus: (ds) => changeCartQty(ds.id, ds.unit, 1),
  cartRemove: (ds) => removeFromCart(ds.id, ds.unit),
  setPayCash: () => { state.paymentMethod = 'Espèces'; state.posAdvance = ''; rerender(); },
  setPayMobile: () => { state.paymentMethod = 'Mobile Money'; state.posAdvance = ''; rerender(); },
  setPayCard: () => { state.paymentMethod = 'Carte'; state.posAdvance = ''; rerender(); },
  setPayCredit: () => { state.paymentMethod = 'Crédit'; rerender(); },
  checkout: () => checkout(),
  openScanner: (ds) => { state.showScanner = true; state.scanMode = (ds && ds.mode) || 'sell'; state.scanError = null; rerender(); },
  closeScanner: () => { state.showScanner = false; state.scanError = null; rerender(); },
  toggleAddProduct: () => { if (state.showAddProduct) resetProductForm(); else openAddProductForm(); rerender(); },
  removeProductImage: () => removeProductImage(),
  exportProductsCsv: () => exportProductsCsv(),
  triggerImportFile: () => { const el = document.getElementById('field-impFile'); if (el) el.click(); },
  confirmImportProducts: () => confirmImportProducts(),
  closeImportPreview: () => closeImportPreview(),
  editProduct: (ds) => { openEditProductForm(ds.id); rerender(); },
  askDeleteProduct: (ds) => { state.confirmDeleteProductId = ds.id; rerender(); },
  cancelDeleteProduct: () => { state.confirmDeleteProductId = null; rerender(); },
  confirmDeleteProduct: (ds) => deleteProduct(ds.id),
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
  openCreditReminderForm: (ds) => openCreditReminderForm(ds.id),
  closeCreditReminderForm: () => closeCreditReminderForm(),
  setMsgChannelSms: () => setMsgChannel('sms'),
  setMsgChannelEmail: () => setMsgChannel('email'),
  copyMsgTextAction: () => copyMsgText(),
  copyMsgContactAction: () => copyMsgContact(),
  sendCreditReminderAction: () => sendCreditReminder(),
  copyDebtorsListAction: () => copyDebtorsList(),
  toggleAvailabilityForm: () => toggleAvailabilityForm(),
  setMsgRecipientModeAll: () => { state.msgRecipientMode = 'all'; rerender(); },
  setMsgRecipientModeSpecific: () => { state.msgRecipientMode = 'specific'; rerender(); },
  toggleMsgRecipient: (ds) => toggleMsgRecipient(ds.id),
  copyAvailabilityContactsAction: () => copyAvailabilityContacts(),
  sendAvailabilityBroadcastAction: () => sendAvailabilityBroadcast(),
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
  toggleAddClient: () => { if (state.showAddClient) resetClientForm(); else openAddClientForm(); rerender(); },
  editClient: (ds) => { openEditClientForm(ds.id); rerender(); },
  saveClient: () => saveClient(),
  cancelEditClient: () => { resetClientForm(); rerender(); },
  askDeleteClient: (ds) => { state.confirmDeleteClientId = ds.id; rerender(); },
  cancelDeleteClient: () => { state.confirmDeleteClientId = null; rerender(); },
  confirmDeleteClient: (ds) => deleteClient(ds.id),
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
  closeReceipt: () => { state.showReceipt = false; state.receiptView = 'ticket'; rerender(); },
  toggleReceiptView: () => { state.receiptView = state.receiptView === 'ticket' ? 'invoice' : 'ticket'; rerender(); },
  sendToFNE: () => sendToFNE(),
  copyFNESection: (ds) => copyFNESection(ds.section),
  printReceipt: () => window.print(),
  submitChangePassword: () => changePassword(),
  saveSettings: () => saveSettings(),
  removeLogo: () => { state.estLogo = ''; rerender(); },
  toggleFneEnabled: () => { state.fneEnabled = !state.fneEnabled; rerender(); },
  saveFNEConfig: () => saveFNEConfig(),
  toggleMsgCfgEmailEnabled: () => { state.msgCfgEmailEnabled = !state.msgCfgEmailEnabled; rerender(); },
  toggleMsgCfgSmsEnabled: () => { state.msgCfgSmsEnabled = !state.msgCfgSmsEnabled; rerender(); },
  saveMessagingConfig: () => saveMessagingConfig(),
  certifyWithFNE: () => certifyWithFNE(),
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
  if (el.type === 'file' && el.dataset && el.dataset.bind === 'estLogoFile') {
    handleLogoFile(el.files && el.files[0]);
    return;
  }
  if (el.type === 'file' && el.dataset && el.dataset.bind === 'npImageFile') {
    handleProductImageFile(el.files && el.files[0]);
    return;
  }
  if (el.type === 'file' && el.dataset && el.dataset.bind === 'impFile') {
    handleImportCsvFile(el.files && el.files[0]);
    el.value = ''; // allow re-selecting the same file name after a cancel/retry
    return;
  }
  // Date inputs commit on `change` (blur/Enter/date-picker close), not per
  // keystroke like text/number fields do — safe to rerender here the same
  // way selects do, without the caret-reset problem a live onInput rerender
  // would cause while a segment (day/month/year) is still being edited.
  const isDateInput = el.tagName === 'INPUT' && el.type === 'date';
  if (!el.dataset || !el.dataset.bind || !(el.tagName === 'SELECT' || isDateInput)) return;
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
  } else if (bind === 'msgProductId') {
    // Re-derive the availability message for the newly picked product —
    // otherwise the draft would keep naming the previous product.
    regenerateAvailabilityMessage();
  } else if (bind === 'scanDeviceId') {
    // Switching camera (e.g. to a phone used as a webcam) needs the video
    // stream itself restarted, not just the state value updated.
    switchCameraDevice(el.value);
    return;
  } else if (bind === 'fneTaxCode') {
    // Keep the A4 invoice's displayed rate in lockstep with whichever FNE
    // code is picked, live, before the config is even saved.
    state.estVatRate = el.value ? String(FNE_TAX_RATES[el.value]) : state.estVatRate;
  } else if (bind === 'repDateMode' && el.value === 'custom' && !state.repDateFrom && !state.repDateTo) {
    // Prefill both ends to today rather than leaving the pickers blank —
    // an empty custom range would silently fall back to "Tout l'historique".
    const today = new Date().toISOString().slice(0, 10);
    state.repDateFrom = today; state.repDateTo = today;
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
  // No data fetch here: /api/state requires a session now, and there's
  // nothing to show before login anyway. loadAppState() runs after
  // submitLogin() succeeds instead.
  rerender();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }
  window.addEventListener('online', () => syncOfflineSales());
  // The browser's `online` event isn't fully reliable (e.g. a flaky
  // connection can reconnect without firing it) — a periodic check is the
  // backstop. No-ops instantly whenever the outbox is empty.
  setInterval(() => syncOfflineSales(), 30000);
}
boot();
