self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => 
      cache.addAll([
        '/',                  // page principale
        '/index.html',        // ton HTML
        '/manifest.json',     // manifest PWA
        '/icon-192.png',      // icônes
        '/icon-512.png',
        '/style.css',         // ton CSS externe si tu en utilises un
        '/app.js'             // ton JS externe si tu en utilises un
      ])
    )
  );
});

// Intercepter les requêtes pour servir le cache si disponible
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

