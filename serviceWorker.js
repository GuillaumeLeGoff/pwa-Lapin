const staticDevLapin = "dev-lapin-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/lapin1.jpg",
  "/images/lapin2.jpg",
  "/images/lapin3.jpg",
  "/images/lapin4.jpg",
  "/images/lapin5.jpg",
  "/images/lapin6.jpg",
  "/images/lapin7.jpg",
  "/images/lapin8.jpg",
  "/images/lapin9.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevLapin).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
