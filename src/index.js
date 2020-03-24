import('./module')

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker", { scope: "/" });
}
