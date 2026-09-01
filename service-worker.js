const CACHE_NAME = "tumu-1.1";

const APP_FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png", 
  "./TemplateData/favicon.ico",
  "./TemplateData/style.css",
  "./TemplateData/unity-logo-dark.png",
  "./TemplateData/unity-logo-light.png",
  "./TemplateData/webgl-logo.png",
  "./TemplateData/fullscreen-button.png",
  "./TemplateData/progress-bar-empty-dark.png",
  "./TemplateData/progress-bar-empty-light.png",
  "./TemplateData/progress-bar-full-dark.png",
  "./TemplateData/progress-bar-full-light.png",
  "./Build/WebGL_GitHub_PWA_Camerasize.loader.js",
  "./Build/WebGL_GitHub_PWA_Camerasize.data",
  "./Build/WebGL_GitHub_PWA_Camerasize.framework.js",
  "./Build/WebGL_GitHub_PWA_Camerasize.wasm"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});