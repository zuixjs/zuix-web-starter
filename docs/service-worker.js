if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let d={};const r=e=>s(e,n),o={module:{uri:n},exports:d,require:r};i[n]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(a(...e),d)))}}define(["./workbox-8bc485fe"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"config.js",revision:"f54d4a175218dabdcc257195fcd083e9"},{url:"css/animate.min.css",revision:"c0be8e53226ac34833fd9b5dbc01ebc5"},{url:"css/fla/flex-layout-attribute.css",revision:"c9bc58fccb5b4c9d1d7a6e76edddffa7"},{url:"css/fla/flex-layout-attribute.min.css",revision:"c55488315343d9afb4d13ebf9cc8f97b"},{url:"css/prism-tomorrow.min.css",revision:"c6b4dce537526ed1ac67d9b7bd3e7158"},{url:"index.bundle.ext.js",revision:"6776c6f3d9d583bda16f4922ae9673a4"},{url:"index.bundle.js",revision:"8d70675a49c24c9da1bfcd65235196eb"},{url:"index.html",revision:"a74ba1ee353a9afad24826fe9a501c76"},{url:"js/elasticlunr/elasticlunr.js",revision:"9df81143ce5ad0e8b2204da08f547ad4"},{url:"js/elasticlunr/elasticlunr.min.js",revision:"392b3cd0a12183cf87406428d2989e90"},{url:"js/zuix/zuix-bundler.js",revision:"987551bfd48353b0aed701077d31aab2"},{url:"js/zuix/zuix-bundler.min.js",revision:"46d85f0aa0ed849f60c24cee63e00cbe"},{url:"js/zuix/zuix-bundler.module.js",revision:"c4039f8cfaad5874e8269502e2c4f4c4"},{url:"js/zuix/zuix-bundler.module.min.js",revision:"b844e9c9b4de6aae6dfc8a35b770a20c"},{url:"js/zuix/zuix.js",revision:"af67ac9d32e7f7def445362fe5be8f46"},{url:"js/zuix/zuix.min.js",revision:"78ba2a29023f39dc0d98ed1597373f11"},{url:"js/zuix/zuix.module.js",revision:"0c4dc2c6ae9a7958a26aa36a6083780f"},{url:"js/zuix/zuix.module.min.js",revision:"4ae0214b7e26fdc1ed5a79fe56a3cc42"},{url:"lib/1.1/components/media-browser.css",revision:"e889174b42c1b4abd01bcd04e4cdaa0f"},{url:"lib/1.1/components/media-browser.html",revision:"c50c6964afcc48275feffd4a0f4adfe8"},{url:"lib/1.1/components/media-browser.js",revision:"294e73860cfcd363ecc665592186d65d"},{url:"lib/1.1/components/media-browser/article.css",revision:"e7f0f5dbe26e76dcd13f7973dc768308"},{url:"lib/1.1/components/media-browser/article.html",revision:"817ccb127ce00476644de9f7a25611e5"},{url:"lib/1.1/components/media-browser/image.css",revision:"28505ebf9c74c7655c57c346c6f43767"},{url:"lib/1.1/components/media-browser/image.html",revision:"0a6a67e7280fa668ffb1ed016bec7780"},{url:"lib/1.1/components/media-browser/image.js",revision:"14a326ff1ff3be44f77d5da1e385c816"},{url:"lib/1.1/components/media-browser/video-yt.css",revision:"839ca99567cd703a0d0a2a44ec21d071"},{url:"lib/1.1/components/media-browser/video-yt.html",revision:"f6a23e0704b03974ea7f9cfbfd952171"},{url:"lib/1.1/components/media-browser/video-yt.js",revision:"d8c7cf3da790277bd86990bdafd62691"},{url:"lib/1.1/components/media-browser/video.css",revision:"abcce193fe296d742c6d0f52a81889cd"},{url:"lib/1.1/components/media-browser/video.html",revision:"df3aa153d7596104450d6ab59e29e255"},{url:"lib/1.1/components/media-browser/video.js",revision:"bf9c52a0f24192242230fc2281090015"},{url:"lib/1.1/components/menu-overlay.css",revision:"c780ae2fbcf5c89efa030dd25ff358e1"},{url:"lib/1.1/components/menu-overlay.html",revision:"220c3005881852f0387e61ea8ac2a6c5"},{url:"lib/1.1/components/menu-overlay.js",revision:"7df2804e61ae6e5bf8858272579d66c4"},{url:"lib/1.1/controllers/drawer-layout.js",revision:"efd643eb309cafec496b8f5b60dacf4a"},{url:"lib/1.1/controllers/gesture-helper.js",revision:"1776574c57c1a6115edfbcb3887ed147"},{url:"lib/1.1/controllers/header-auto-hide.js",revision:"4b6783cbe749df25907f5faa0f92e257"},{url:"lib/1.1/controllers/list-view.js",revision:"fc2930407b29c707ab8bfca33685e9be"},{url:"lib/1.1/controllers/mdl-button.js",revision:"c2a4ac575ee439b1e19beb42ea7d016f"},{url:"lib/1.1/controllers/mdl-checkbox.js",revision:"20911a2c2aec81f9ab42615987b21364"},{url:"lib/1.1/controllers/mdl-menu.js",revision:"8f620c9a13b8c47720b24b46205fc906"},{url:"lib/1.1/controllers/scroll-helper.js",revision:"d35210ea8c416fdad067aedad98c9063"},{url:"lib/1.1/controllers/view-pager.js",revision:"d7e48fa1226efe9fb2e1a53730203d82"},{url:"manifest.json",revision:"10231bceb6bf625a754e38394f9a7f0c"},{url:"pages/building-and-publishing/index.bundle.ext.js",revision:"6776c6f3d9d583bda16f4922ae9673a4"},{url:"pages/building-and-publishing/index.bundle.js",revision:"8d70675a49c24c9da1bfcd65235196eb"},{url:"pages/building-and-publishing/index.html",revision:"7a93ab009b2f6fa76d3fa8cc6e3dabb8"},{url:"pages/liquid-tags/index.bundle.ext.js",revision:"6776c6f3d9d583bda16f4922ae9673a4"},{url:"pages/liquid-tags/index.bundle.js",revision:"8d70675a49c24c9da1bfcd65235196eb"},{url:"pages/liquid-tags/index.html",revision:"7304486bef85e8885f744e0844781254"},{url:"pages/page-editing-and-options/index.bundle.ext.js",revision:"6776c6f3d9d583bda16f4922ae9673a4"},{url:"pages/page-editing-and-options/index.bundle.js",revision:"8d70675a49c24c9da1bfcd65235196eb"},{url:"pages/page-editing-and-options/index.html",revision:"be512d8b0cf5c00746ebf3f7b119a1f6"},{url:"search-index.json",revision:"d59db0f0e2304e33010206a0caa0177c"},{url:"images/github-mark.png",revision:"add1026fb07009c6879400cbcf145301"},{url:"images/icons/desktop/android-chrome-192x192.png",revision:"93d5e77e9ee1e9c6975f3c0bd1a21574"},{url:"images/icons/desktop/android-chrome-512x512.png",revision:"6df83c6c13be17a2ea70d29e340c5ddb"},{url:"images/icons/desktop/apple-touch-icon.png",revision:"2b78ed332644d19d9779c069c5842538"},{url:"images/icons/desktop/favicon-16x16.png",revision:"6c047cdbd3d5c4c962a3a692a5025d27"},{url:"images/icons/desktop/favicon-32x32.png",revision:"7413528d5e59c22af1ccf38187bc950b"},{url:"images/icons/desktop/mstile-150x150.png",revision:"540caa78f56655281b2d4b17ad52f2ce"},{url:"images/icons/desktop/safari-pinned-tab.svg",revision:"a0ab2c612c6a5019b3e4ae7c38043b98"},{url:"images/icons/icon-128x128.png",revision:"69f3f1f3f956bb71f35ce66b7717e1a0"},{url:"images/icons/icon-144x144.png",revision:"45e24db8671c41ca95c440df0cadf2a3"},{url:"images/icons/icon-152x152.png",revision:"e0867fd6e9bc25afd831b1eabdd83f8d"},{url:"images/icons/icon-192x192.png",revision:"cf383c3d4500d31884326cc9d53a8c3a"},{url:"images/icons/icon-384x384.png",revision:"31fd304cf6c5ff72928b7a91fbd68343"},{url:"images/icons/icon-512x512.png",revision:"47d9af0508ab29138dcb8ca6a4664cf2"},{url:"images/icons/icon-72x72.png",revision:"919cb6b3e8a1b5d0c963921dba0e4388"},{url:"images/icons/icon-96x96.png",revision:"5547ad1a33334c0f5c04f6de1f6d2c52"},{url:"images/lighthouse.png",revision:"b5cad18f7bb11643253bc672249a8dfd"},{url:"images/page-speed-insight-icon.png",revision:"8806237a2557fb748e7eaae4158899fb"},{url:"images/zuix-logo.svg",revision:"48e6defd57440a6d0f0d12241ff9d6c5"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET"),e.registerRoute(/\.(?:html|json|js|css)$/,new e.CacheFirst({cacheName:"default",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
