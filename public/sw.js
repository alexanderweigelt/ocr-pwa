const CACHE_NAME = "ocr-pwa-v1";

const BASE = new URL(self.registration.scope).pathname.replace(/\/$/, "");
const withBase = (p) => `${BASE}${p.startsWith("/") ? p : `/${p}`}`;

const PRECACHE = [
  withBase("/"),
  withBase("/manifest.webmanifest"),
  withBase("/icons/android-chrome-192x192.png"),
  withBase("/icons/android-chrome-512x512.png"),
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE)),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.map((k) => (k === CACHE_NAME ? undefined : caches.delete(k))),
      );
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  if (req.method !== "GET" || url.origin !== self.location.origin) return;

  if (req.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          return await fetch(req);
        } catch {
          const cache = await caches.open(CACHE_NAME);
          return (await cache.match(withBase("/"))) || Response.error();
        }
      })(),
    );
    return;
  }

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(req);
      const fetchPromise = fetch(req)
        .then((res) => {
          if (res && res.status === 200 && res.type === "basic") {
            cache.put(req, res.clone());
          }
          return res;
        })
        .catch(() => undefined);
      return cached || fetchPromise;
    })(),
  );
});
