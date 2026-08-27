// Lets the app shell load at all while offline — without this, reloading
// the tab during an outage can't fetch index.html/app.js/styles.css from
// the network, so there'd be nothing to show the "Travailler hors ligne"
// option in. Strategy is deliberately network-first (not cache-first): this
// project deploys many times a day with no build/version step, so
// network-first means an online user always gets current code with zero
// staleness risk — the cache exists purely as an offline fallback, kept
// fresh opportunistically on every successful network fetch.
const CACHE_NAME = 'boissonman-shell-v1';
const SHELL_URLS = [
  '/',
  '/index.html',
  '/app.js',
  '/styles.css',
  '/icon.ico',
  'https://unpkg.com/@zxing/library@0.21.3/umd/index.min.js',
  'https://unpkg.com/qrcode-generator@1.4.4/qrcode.js',
];
const NETWORK_TIMEOUT_MS = 3000;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL_URLS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

function timeoutPromise(ms) {
  return new Promise((_, reject) => setTimeout(() => reject(new Error('network timeout')), ms));
}

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  // Never intercept API calls — the app's own JS handles offline behavior
  // for those (queueing, clear error messages); serving a stale cached API
  // response would be actively wrong, not just unhelpful.
  if (url.pathname.startsWith('/api/')) return;
  if (event.request.method !== 'GET') return;

  event.respondWith(
    Promise.race([fetch(event.request), timeoutPromise(NETWORK_TIMEOUT_MS)])
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(event.request).then((cached) => cached || Promise.reject('no cache')))
  );
});
