const STATIC_CACHE = "static";
const APP_SHELL = [
    "/",
    "index.html",
    "styles/style.css",
    "js/functions.js",
    "js/main.js",
    "js/script1.js",
    "js/script2.js",
    "img/beerjs-logo.png"
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
    console.log("fetch!", e.request);
    // @ts-ignore
    e.respondWith(caches
        // @ts-ignore
        .match(e.request)
        // @ts-ignore
        .then(res => res || fetch(e.request))
        .catch(console.log));
});
//# sourceMappingURL=sw.js.map