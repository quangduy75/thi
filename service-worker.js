const cacheName = "pwa-search-cache-v1";
const filesToCache = [
    "/",
    "/index.html",
    "/manifest.json",
    "/service-worker.js",
    "/icons/icon-192x192.png",
    "/icons/icon-512x512.png",
    "/csvjson.json", // Đường dẫn đến tệp csvjson.json

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
