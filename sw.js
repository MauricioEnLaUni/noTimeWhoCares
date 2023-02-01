const STATIC_CACHE = "static";

const APP_SHELL = [
  "/",
  "/index.html",
  "/css/style.css",
  "/public/index.js",
  "/assets/icons/brachyIcon.png",
  "/assets/img/brachydios/mh3u/fmD73q.avif",
  "/assets/img/brachydios/mh4u/YRFwgT.avif",
  "/assets/img/brachydios/mhwi/WrJesY.avif",
  "/assets/img/logo/qBBV84.avif",
  "/assets/img/mugshot/50ZOpY.avif"

];

self.addEventListener("install", (e) => {
  const cacheStatic = caches
    .open(STATIC_CACHE)
    .then((cache) => cache.addAll(APP_SHELL));

  e.wait;
});

self.addEventListener("fetch", (e) => {
  console.log("fetch!", e.request)
  e.respondWith(
    caches
      .match(e.request)
      .then(res => res || fetch(e.request))
      .catch(console.log)
  );
});