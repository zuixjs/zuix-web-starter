if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,n)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const a=e=>s(e,d),o={module:{uri:d},exports:r,require:a};i[d]=Promise.all(c.map((e=>o[e]||a(e)))).then((e=>(n(...e),r)))}}define(["./workbox-dce15169"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app/components/context_menu.css",revision:"31375958fb9086ed4208de923ffd0909"},{url:"app/components/context_menu.html",revision:"b6d6672432b81bdc209c5d9e07ef2458"},{url:"app/components/context_menu.js",revision:"7c6aebc531e03f3c922bb54ebc5ff787"},{url:"app/controllers/drawer_layout.js",revision:"a2be36f1cc25ac5d609803173939c627"},{url:"app/controllers/mdl_button.js",revision:"c2a4ac575ee439b1e19beb42ea7d016f"},{url:"app/controllers/mdl_checkbox.js",revision:"20911a2c2aec81f9ab42615987b21364"},{url:"app/controllers/mdl_menu.js",revision:"4fe7db2d50efac92573c1a7097756d62"},{url:"app/controllers/scroll_helper.js",revision:"36af6446bd7090d53cfaaf1d47033a1d"},{url:"app/templates/mdl_card.css",revision:"a3338ce3a4cd981ccea088fa3ed94128"},{url:"app/templates/mdl_card.html",revision:"cfafb2802317099808e8758034741ee3"},{url:"config.js",revision:"acefe0e3e6ddeecf1b711cb05659b972"},{url:"index.css",revision:"2a913cb693852af36550ab2db61f1e42"},{url:"index.html",revision:"5d1efb6fc6f69ddf4150cbb3eef988eb"},{url:"index.js",revision:"65dfbc3d014827d5e7880fb2687abc62"},{url:"js/prism/prism.css",revision:"343ab6c1b213d253d82d6c7afad86079"},{url:"js/prism/prism.js",revision:"0dd62d25c1a7fe66e4c7256e8ada30b5"},{url:"js/zuix/animate_css.js",revision:"b105ebcd078f9e3ccd950b60d4eeb3c2"},{url:"js/zuix/zuix-bundler.js",revision:"d9b97ac25acf1eb32dda52502a38af7f"},{url:"js/zuix/zuix-bundler.min.js",revision:"d188cf5b12d5018966dd7dade53e0240"},{url:"js/zuix/zuix-bundler.module.js",revision:"1e062e3bae339edc4e2ac9f61a2385fc"},{url:"js/zuix/zuix-bundler.module.min.js",revision:"a11fd2cf449453de9553b6feb4a19fbd"},{url:"js/zuix/zuix.js",revision:"16b0033a44f86f99fea85c807760b204"},{url:"js/zuix/zuix.min.js",revision:"ea91f716d42e6e584304d8324be13433"},{url:"js/zuix/zuix.module.js",revision:"0e7eb5237b41469f38c2243364595494"},{url:"js/zuix/zuix.module.min.js",revision:"329dcdbc2376e69d80e437168a937174"},{url:"manifest.json",revision:"10231bceb6bf625a754e38394f9a7f0c"},{url:"pages/blog/my-first-post/index.html",revision:"cecd62578ec50129d0d7daced316f598"},{url:"pages/docs/material-design-light/index.html",revision:"f97113ea70b85cce2b9fb5f0259edabd"},{url:"pages/docs/welcome/index.html",revision:"76f89a6bb32cfc3e54853e5511e2c639"},{url:"pages/search/index.html",revision:"58eb3bf2a4314181bfabdf8e1a5dd6b2"},{url:"search-index.json",revision:"b125117697d55013c8e3b2edafe1f039"},{url:"images/icons/desktop/android-chrome-192x192.png",revision:"93d5e77e9ee1e9c6975f3c0bd1a21574"},{url:"images/icons/desktop/android-chrome-512x512.png",revision:"6df83c6c13be17a2ea70d29e340c5ddb"},{url:"images/icons/desktop/apple-touch-icon.png",revision:"2b78ed332644d19d9779c069c5842538"},{url:"images/icons/desktop/favicon-16x16.png",revision:"6c047cdbd3d5c4c962a3a692a5025d27"},{url:"images/icons/desktop/favicon-32x32.png",revision:"7413528d5e59c22af1ccf38187bc950b"},{url:"images/icons/desktop/mstile-150x150.png",revision:"540caa78f56655281b2d4b17ad52f2ce"},{url:"images/icons/desktop/safari-pinned-tab.svg",revision:"a0ab2c612c6a5019b3e4ae7c38043b98"},{url:"images/icons/icon-128x128.png",revision:"69f3f1f3f956bb71f35ce66b7717e1a0"},{url:"images/icons/icon-144x144.png",revision:"45e24db8671c41ca95c440df0cadf2a3"},{url:"images/icons/icon-152x152.png",revision:"e0867fd6e9bc25afd831b1eabdd83f8d"},{url:"images/icons/icon-192x192.png",revision:"cf383c3d4500d31884326cc9d53a8c3a"},{url:"images/icons/icon-384x384.png",revision:"19007d16c73f442f44c926beddc34637"},{url:"images/icons/icon-512x512.png",revision:"274298ed7162d12352fa836d3a2cb11e"},{url:"images/icons/icon-72x72.png",revision:"919cb6b3e8a1b5d0c963921dba0e4388"},{url:"images/icons/icon-96x96.png",revision:"5547ad1a33334c0f5c04f6de1f6d2c52"},{url:"images/menu_open_black_48dp.svg",revision:"6a65883ec5d5058af76c169ed17edc71"},{url:"images/profile-icon.png",revision:"56f0c7de57fdae6d0a9ddc43448b6dff"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET"),e.registerRoute(/\.(?:html|json|js|css)$/,new e.CacheFirst({cacheName:"default",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
