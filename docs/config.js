/* eslint-disable quotes */
(function() {
  zuix.store('config', {
    "title": "Web App Template",
    "subtitle": "Simple, yet powerful!",
    "baseUrl": "/web-app/",
    "resourcePath": "/web-app/app/",
    "libraryPath": {
      "@lib": "/web-app/lib/1.1/",
      "@hgui": "https://genielabs.github.io/homegenie-web-ui/app/",
      "@cdnjs": "https://cdnjs.cloudflare.com/ajax/libs/"
    },
    "googleSiteId": "UA-123-456",
    "siteMapUrl": "https://zuixjs.github.io/web-app/"
  });
  // Check that service workers are registered
  if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/web-app/service-worker.js');
    });
  }
})();
