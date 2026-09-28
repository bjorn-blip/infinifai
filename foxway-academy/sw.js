/* Offline support when served over http(s). Bump VERSION after content updates. */
const VERSION = "fxa-v1";
const FILES = [
  "./", "index.html", "manifest.webmanifest", "assets/styles.css", "assets/icon.svg",
  "assets/core.js", "assets/ui.js", "assets/app.js",
  "content/modules.js", "content/lessons-industry-1.js", "content/lessons-industry-2.js", "content/lessons-benelux.js",
  "content/lessons-commercial.js", "content/scenarios.js", "content/glossary.js", "content/generators.js", "content/facts.js"
];
self.addEventListener("install", e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
// Network-first so content updates arrive immediately; cache as fallback offline.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); return r; }).catch(() => caches.match(e.request)));
});
