const staticCacheName = 'pwa-jr-v1';
const staticAssets = [
  './',
  './index.html',
  './index.js',
  './tailwind.css'
];

// TODO: use this when we introduce hashed paths
function prioritizeCache(req) {
  return caches.open(staticCacheName)
    .then(cache => cache.match(req))
    .then(cachedResponse => cachedResponse || prioritizeNetwork(req));
}

function prioritizeNetwork(req) {
  return caches.open(staticCacheName)
  .then(cache => {
    return fetch(req)
      .then(fresh => {
        cache.put(req, fresh.clone());
        return Promise.resolve(fresh);
      }).catch(() => cache.match(req));
  });
}

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      cache.addAll(staticAssets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(prioritizeNetwork(event.request));
});
