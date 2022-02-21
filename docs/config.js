/* eslint-disable quotes */
(function() {
  zuix.store('config', {
    "title": "<code>zuix.js</code> Web Starter",
    "subtitle": "Simple, yet powerful!",
    "googleSiteId": "UA-123-456",
    "siteMapUrl": "https://zuixjs.github.io/zuix-web-starter",
    "baseUrl": "/zuix-web-starter/",
    "resourcePath": "/app/",
    "libraryPath": {
      "@lib": "https://zuixjs.github.io/zuix-web-starter/lib/1.1/",
      "@hgui": "https://genielabs.github.io/homegenie-web-ui/app/",
      "@cdnjs": "https://cdnjs.cloudflare.com/ajax/libs/"
    },
    "zuixjs.github.io": {
      "resourcePath": "/zuix-web-starter/app/",
      "libraryPath": {
        "@lib": "https://zuixjs.github.io/zuix-web-starter/lib/1.1/",
        "@hgui": "https://genielabs.github.io/homegenie-web-ui/app/",
        "@cdnjs": "https://cdnjs.cloudflare.com/ajax/libs/"
      }
    }
  });
  // Check that service workers are registered
  const app = zuix.store('config');
  if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
      navigator.serviceWorker.register(app.baseUrl + 'service-worker.js');
    });
  }
})();
