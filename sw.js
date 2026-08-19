const CACHE_NAME = "small-engine-pro-v13";

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  let target = null;

  // The current index.html points to these paths, but the PNGs/PDF
  // are actually stored in the repository root. Redirect those requests
  // internally so no index.html replacement is required.
  const m = url.pathname.match(/\/assets\/kohler_cv730\/page-(\d+)\.png$/i);
  if (m) {
    target = new URL(url.origin + "/Small-engine-pro/page-" + m[1] + ".png");
  }

  if (/\/assets\/kohler_cv730\/Kohler_CV620_CV730_Service_Manual\.pdf$/i.test(url.pathname)) {
    target = new URL(url.origin + "/Small-engine-pro/Kohler_CV620_CV730_Service_Manual.pdf");
  }

  const requestToFetch = target
    ? new Request(target.href, { method: "GET", headers: event.request.headers })
    : event.request;

  event.respondWith(
    fetch(requestToFetch, { cache: "no-store" })
      .then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(requestToFetch, copy));
        return response;
      })
      .catch(() => caches.match(requestToFetch))
  );
});
