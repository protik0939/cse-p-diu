const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"];
const self = this;

// Installation event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache and caching resources");
      return cache.addAll(urlsToCache);
    }).catch((err) => console.log("Cache open failed", err))
  );
  // Ensure the new service worker is activated right after installation
  self.skipWaiting();
});

// Fetch event - handle network and offline behavior
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Try the network first, fallback to cache or offline page if network fails
      return cachedResponse || fetch(event.request).catch(() => caches.match("offline.html"));
    })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log("Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
  // Force the newly activated service worker to control the page immediately
  return self.clients.claim();
});
