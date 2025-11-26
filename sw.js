const CACHE_NAME = "time-tracker-v1";
const ASSETS = [
  "/time-tracker/",
  "/time-tracker/index.html",
  "/time-tracker/manifest.json"
  // falls du eigene JS/CSS-Dateien hast, hier ergänzen:
  // "/time-tracker/app.js",
  // "/time-tracker/styles.css",
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
