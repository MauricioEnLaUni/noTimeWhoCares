class ServiceWorker {
  register = () => {
    const STATIC_CACHE = "static";

    const APP_SHELL = [
      "/",
      "noTimeWhoCares/index.html",
      "noTimeWhoCares/css/style.css",
      "noTimeWhoCares/public/index.js",
      "noTimeWhoCares/assets/icons/brachyIcon.png",
      "noTimeWhoCares/assets/img/brachydios/mh3u/fmD73q.avif",
      "noTimeWhoCares/assets/img/brachydios/mh4u/YRFwgT.avif",
      "noTimeWhoCares/assets/img/brachydios/mhwi/WrJesY.avif",
      "noTimeWhoCares/assets/img/logo/qBBV84.avif",
      "noTimeWhoCares/assets/img/mugshot/50ZOpY.avif"

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