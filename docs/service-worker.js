if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,a)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let n={};const r=e=>s(e,d),o={module:{uri:d},exports:n,require:r};i[d]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(a(...e),n)))}}define(["./workbox-dce15169"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app/components/context_menu.css",revision:"31375958fb9086ed4208de923ffd0909"},{url:"app/components/context_menu.html",revision:"b6d6672432b81bdc209c5d9e07ef2458"},{url:"app/components/context_menu.js",revision:"7c6aebc531e03f3c922bb54ebc5ff787"},{url:"app/controllers/drawer_layout.js",revision:"a2be36f1cc25ac5d609803173939c627"},{url:"app/controllers/mdl_button.js",revision:"c2a4ac575ee439b1e19beb42ea7d016f"},{url:"app/controllers/mdl_checkbox.js",revision:"20911a2c2aec81f9ab42615987b21364"},{url:"app/controllers/mdl_menu.js",revision:"4fe7db2d50efac92573c1a7097756d62"},{url:"app/controllers/scroll_helper.js",revision:"36af6446bd7090d53cfaaf1d47033a1d"},{url:"app/templates/mdl_card_image.css",revision:"2be1eb75481fb9c3fbfae266d340ec99"},{url:"app/templates/mdl_card_image.html",revision:"fba6ad08f13ce6f9e42aaa8209f798b8"},{url:"app/templates/mdl_card_square.css",revision:"2e91e4a38e98bf5eea135c46af580b3e"},{url:"app/templates/mdl_card_square.html",revision:"92aad19c39433e21383e0349708b978a"},{url:"app/templates/mdl_card.css",revision:"4a6a120c043ba10a4438f71e46087cd8"},{url:"app/templates/mdl_card.html",revision:"436ba546f437c31d30d8d26eb8871eb9"},{url:"config.js",revision:"bdff8b4d3fafb2f80ff23f81cdec90e6"},{url:"index.html",revision:"f70ce857a9b0f304f4bcaa163b61e44b"},{url:"js/prism/prism.css",revision:"343ab6c1b213d253d82d6c7afad86079"},{url:"js/prism/prism.js",revision:"0dd62d25c1a7fe66e4c7256e8ada30b5"},{url:"js/zuix/animate_css.js",revision:"b105ebcd078f9e3ccd950b60d4eeb3c2"},{url:"js/zuix/zuix-bundler.js",revision:"d9b97ac25acf1eb32dda52502a38af7f"},{url:"js/zuix/zuix-bundler.min.js",revision:"d188cf5b12d5018966dd7dade53e0240"},{url:"js/zuix/zuix-bundler.module.js",revision:"1e062e3bae339edc4e2ac9f61a2385fc"},{url:"js/zuix/zuix-bundler.module.min.js",revision:"a11fd2cf449453de9553b6feb4a19fbd"},{url:"js/zuix/zuix.js",revision:"16b0033a44f86f99fea85c807760b204"},{url:"js/zuix/zuix.min.js",revision:"ea91f716d42e6e584304d8324be13433"},{url:"js/zuix/zuix.module.js",revision:"0e7eb5237b41469f38c2243364595494"},{url:"js/zuix/zuix.module.min.js",revision:"329dcdbc2376e69d80e437168a937174"},{url:"manifest.json",revision:"10231bceb6bf625a754e38394f9a7f0c"},{url:"pages/blog/index.html",revision:"98a9e37e443496ad1fb5d7e2ccd411cd"},{url:"pages/blog/my-first-post/index.html",revision:"fdd0c9c835a5cccfd8b36ece52b2a4ef"},{url:"pages/docs/index.html",revision:"e0bcd1f6f7f7d9cea6bd6f263cb6f74b"},{url:"pages/docs/material-design-light/index.html",revision:"4de298d707cef7bf16b2ba80a9354b72"},{url:"pages/docs/welcome/index.html",revision:"e7db70c1759cdc3c2c44db694fa42d70"},{url:"pages/home/index.html",revision:"3251439b5a4e3c1c6c0622fac58fdc72"},{url:"pages/search/index.html",revision:"b8d6f52bf50b25f1a0c9c4a3e292e5e4"},{url:"search-index.json",revision:"4d3316fc12de3a03e4124589721a6c1e"},{url:"images/icons/desktop/android-chrome-192x192.png",revision:"93d5e77e9ee1e9c6975f3c0bd1a21574"},{url:"images/icons/desktop/android-chrome-512x512.png",revision:"6df83c6c13be17a2ea70d29e340c5ddb"},{url:"images/icons/desktop/apple-touch-icon.png",revision:"2b78ed332644d19d9779c069c5842538"},{url:"images/icons/desktop/favicon-16x16.png",revision:"6c047cdbd3d5c4c962a3a692a5025d27"},{url:"images/icons/desktop/favicon-32x32.png",revision:"7413528d5e59c22af1ccf38187bc950b"},{url:"images/icons/desktop/mstile-150x150.png",revision:"540caa78f56655281b2d4b17ad52f2ce"},{url:"images/icons/desktop/safari-pinned-tab.svg",revision:"a0ab2c612c6a5019b3e4ae7c38043b98"},{url:"images/icons/icon-128x128.png",revision:"69f3f1f3f956bb71f35ce66b7717e1a0"},{url:"images/icons/icon-144x144.png",revision:"45e24db8671c41ca95c440df0cadf2a3"},{url:"images/icons/icon-152x152.png",revision:"e0867fd6e9bc25afd831b1eabdd83f8d"},{url:"images/icons/icon-192x192.png",revision:"cf383c3d4500d31884326cc9d53a8c3a"},{url:"images/icons/icon-384x384.png",revision:"19007d16c73f442f44c926beddc34637"},{url:"images/icons/icon-512x512.png",revision:"274298ed7162d12352fa836d3a2cb11e"},{url:"images/icons/icon-72x72.png",revision:"919cb6b3e8a1b5d0c963921dba0e4388"},{url:"images/icons/icon-96x96.png",revision:"5547ad1a33334c0f5c04f6de1f6d2c52"},{url:"images/menu_open_black_48dp.svg",revision:"6a65883ec5d5058af76c169ed17edc71"},{url:"images/profile-icon.png",revision:"56f0c7de57fdae6d0a9ddc43448b6dff"},{url:"images/zuix-logo.svg",revision:"48e6defd57440a6d0f0d12241ff9d6c5"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET"),e.registerRoute(/\.(?:html|json|js|css)$/,new e.CacheFirst({cacheName:"default",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
