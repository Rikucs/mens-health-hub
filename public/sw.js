// Simple service worker for PWA functionality
const CACHE_NAME = 'mens-health-hub-v1';
const urlsToCache = [
  '/',
  '/images/cover.png',
  '/images/page2a.png',
  '/images/page2b.png',
  '/images/page3a.png',
  '/images/page3b.png',
  '/images/page4a.png',
  '/images/page4b.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});