// TrackMyTrain.com.pk Service Worker — Offline + Push Notifications
const CACHE_VERSION = 'trackmytrain-v2';
const STATIC_CACHE = `static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `dynamic-${CACHE_VERSION}`;

// Core shell files to precache on install
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/offline.html',
  '/manifest.json',
  '/favicon.ico',
];

// Pages to cache for offline access
const CACHEABLE_PAGES = [
  '/live-train',
  '/train-schedule',
  '/stations',
  '/train-routes',
  '/train-journey-planner',
  '/find-my-train',
  '/express-trains',
  '/ticket-pricing',
  '/faq',
  '/about',
  '/contact',
  '/blog',
  '/green-line-express',
  '/check-train-delays',
  '/buy-train-tickets',
  '/schedule-guide',
  '/railway-helpline',
];

// Install — precache core shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== STATIC_CACHE && key !== DYNAMIC_CACHE)
          .map((key) => caches.delete(key))
      )
    ).then(() => clients.claim())
  );
});

// Fetch — Network-first for navigation, Cache-first for assets
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET, chrome-extension, and external API calls
  if (request.method !== 'GET') return;
  if (url.protocol === 'chrome-extension:') return;
  if (url.origin !== self.location.origin) return;

  // Skip Supabase/API calls — always need fresh data
  if (url.pathname.startsWith('/rest/') || url.pathname.startsWith('/functions/')) return;

  // HTML pages — Network first, fallback to cache, then offline page
  if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache successful page responses for offline use
          if (response.ok) {
            const clone = response.clone();
            caches.open(DYNAMIC_CACHE).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() =>
          caches.match(request).then((cached) => cached || caches.match('/offline.html'))
        )
    );
    return;
  }

  // JS, CSS, images, fonts — Cache first, network fallback
  if (
    url.pathname.match(/\.(js|css|png|jpg|jpeg|webp|svg|ico|woff2?|ttf|otf)$/) ||
    url.pathname.startsWith('/assets/')
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(STATIC_CACHE).then((cache) => cache.put(request, clone));
          }
          return response;
        });
      })
    );
    return;
  }

  // Everything else — network with cache fallback
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => cache.put(request, clone));
        }
        return response;
      })
      .catch(() => caches.match(request))
  );
});

// Push Notifications
self.addEventListener('push', (event) => {
  let data = { title: 'TrackMyTrain.com.pk', body: 'Train update available!', icon: '/favicon.ico' };

  if (event.data) {
    try {
      data = { ...data, ...event.data.json() };
    } catch {
      data.body = event.data.text();
    }
  }

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: data.icon || '/favicon.ico',
      badge: '/favicon.ico',
      vibrate: [200, 100, 200],
      tag: data.tag || 'train-update',
      data: { url: data.url || '/' },
      actions: [
        { action: 'open', title: 'View Train' },
        { action: 'dismiss', title: 'Dismiss' }
      ]
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = event.notification.data?.url || '/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      for (const client of windowClients) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          client.navigate(url);
          return client.focus();
        }
      }
      return clients.openWindow(url);
    })
  );
});
