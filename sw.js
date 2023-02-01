const STATIC_CACHE = "static";

const APP_SHELL = [
  "/",
  "index.html",
  "css/style.css",
  "public/index.js",
  "assets/icons/brachyIcon.svg"
];

self.addEventListener("install", (e) => {
  const cacheStatic = caches
    .open(STATIC_CACHE)
    .then((cache) => cache.addAll(APP_SHELL));

    // @ts-ignore
  e.wait;
});

self.addEventListener("fetch", (e) => {
  // @ts-ignore
  console.log("fetch!", e.request)
// @ts-ignore
  e.respondWith(
    caches
    // @ts-ignore
      .match(e.request)
      // @ts-ignore
      .then(res => res || fetch(e.request))
      .catch(console.log)
  );
});