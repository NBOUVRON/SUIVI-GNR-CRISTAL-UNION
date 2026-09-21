// Service worker minimal : necessaire pour que Chrome/Edge propose
// l'installation de l'appli sur ordinateur. Ne met rien en cache pour
// l'instant afin que les mises a jour soient toujours visibles immediatement.
self.addEventListener("install", (event) => {
  self.skipWaiting();
});
self.addEventListener("activate", (event) => {
  self.clients.claim();
});
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
