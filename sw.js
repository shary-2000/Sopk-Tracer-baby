self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => 
      cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/icon-192.png',
        '/icon-512.png',
        '/style.css',   // ton CSS externe
        '/app.js'       // ton JS externe
      ])
    )
  );
});
