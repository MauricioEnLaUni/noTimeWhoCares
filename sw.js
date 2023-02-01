class ServiceWorker {
  register = () => {
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
  }
}