const cacheName = "pwa-search-cache-v1";
const filesToCache = [
    "/thi/",
    "/thi/index.html",
    "/thi/manifest.json",
    "/thi/service-worker.js",
    "/thi/icons/icon-192x192.png",
    "/thi/icons/icon-512x512.png"
];


self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            console.log("Caching app shell...");
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
