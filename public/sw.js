const CACHE_NAME = 'nova-dev-v1';
const STATIC_CACHE = 'nova-dev-static-v1';
const DYNAMIC_CACHE = 'nova-dev-dynamic-v1';

// Resources to cache immediately
const STATIC_ASSETS = [
  '/',
  '/_astro/index.css',
  '/team/logo.webp',
  '/team/team-nova.webp'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  // Skip non-GET requests
  if (request.method !== 'GET') return;
  
  // Skip external requests
  if (!request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            // Determine cache strategy based on request type
            const url = new URL(request.url);
            let cacheName = DYNAMIC_CACHE;

            // Cache static assets in static cache
            if (url.pathname.includes('/_astro/') || 
                url.pathname.includes('/team/') ||
                url.pathname.includes('/logos/') ||
                url.pathname.includes('/blog/')) {
              cacheName = STATIC_CACHE;
            }

            caches.open(cacheName)
              .then((cache) => {
                cache.put(request, responseToCache);
              });

            return response;
          });
      })
  );
});