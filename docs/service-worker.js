if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let n={};const o=e=>s(e,a),d={module:{uri:a},exports:n,require:o};i[a]=Promise.all(c.map((e=>d[e]||o(e)))).then((e=>(r(...e),n)))}}define(["./workbox-dce15169"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"config.js",revision:"23ee62c2638c26ddd93deeda5721fc10"},{url:"index.html",revision:"af0294108b1e87a07c85996b28c53c04"},{url:"js/prism/prism.css",revision:"343ab6c1b213d253d82d6c7afad86079"},{url:"js/prism/prism.js",revision:"0dd62d25c1a7fe66e4c7256e8ada30b5"},{url:"js/zuix/animate-css.js",revision:"7db39f961eb3b537fa15888331b4712d"},{url:"js/zuix/zuix-bundler.js",revision:"a4980b6bb60ca32a072ba7d31b90432a"},{url:"js/zuix/zuix-bundler.min.js",revision:"f9455c17445b9e2c52fd78c52fb80921"},{url:"js/zuix/zuix-bundler.module.js",revision:"1e062e3bae339edc4e2ac9f61a2385fc"},{url:"js/zuix/zuix-bundler.module.min.js",revision:"a11fd2cf449453de9553b6feb4a19fbd"},{url:"js/zuix/zuix.js",revision:"b6f91b5892eff5b479bdf9cec55e5420"},{url:"js/zuix/zuix.min.js",revision:"dabcda6a4f47966f1571faa9dbd645fc"},{url:"js/zuix/zuix.module.js",revision:"e85e57bf37c03464f685f148a369178f"},{url:"js/zuix/zuix.module.min.js",revision:"00afbcb04def50a4cdd3c5b9727f2e63"},{url:"lib/1.1/components/context-menu.css",revision:"31375958fb9086ed4208de923ffd0909"},{url:"lib/1.1/components/context-menu.html",revision:"b6d6672432b81bdc209c5d9e07ef2458"},{url:"lib/1.1/components/context-menu.js",revision:"a88fd10ea242e042e8d9b60179be4bc9"},{url:"lib/1.1/components/hamburger-icon.css",revision:"dd81a60d1bfa7bd4463bb551eae81e35"},{url:"lib/1.1/components/hamburger-icon.html",revision:"14b9b9c25ea92bd9660a2e6ea53c1b0d"},{url:"lib/1.1/components/hamburger-icon.js",revision:"44cf41b6ac1d2dd49f7bf004a5d628a4"},{url:"lib/1.1/components/media-browser.css",revision:"e3c8aeadb91484d0a0fc984e24b469b1"},{url:"lib/1.1/components/media-browser.html",revision:"8c664dc6772bd13ca0660a752986b1d5"},{url:"lib/1.1/components/media-browser.js",revision:"aff895f205bf4a3ac8ae4e8aa0e87678"},{url:"lib/1.1/components/media-browser/article.css",revision:"e7f0f5dbe26e76dcd13f7973dc768308"},{url:"lib/1.1/components/media-browser/article.html",revision:"817ccb127ce00476644de9f7a25611e5"},{url:"lib/1.1/components/media-browser/image.css",revision:"3a1499bcedfd546b1e3e4de0c645bf8d"},{url:"lib/1.1/components/media-browser/image.html",revision:"0a6a67e7280fa668ffb1ed016bec7780"},{url:"lib/1.1/components/media-browser/image.js",revision:"b12865e8955465caed5139dd16200c77"},{url:"lib/1.1/components/media-browser/video.css",revision:"d01c44cf05b7832ec57d6181159c52fa"},{url:"lib/1.1/components/media-browser/video.html",revision:"934e6febc1d7c6c64ef99cddf0a6f99f"},{url:"lib/1.1/components/media-browser/video.js",revision:"d596ec76a6c1d46b0541abdb9bf05c3b"},{url:"lib/1.1/components/menu-overlay.css",revision:"8827135796d18cb967678abcbfbf812f"},{url:"lib/1.1/components/menu-overlay.html",revision:"220c3005881852f0387e61ea8ac2a6c5"},{url:"lib/1.1/components/menu-overlay.js",revision:"e4ed14af2dbd877f7446ee8544c1f904"},{url:"lib/1.1/controllers/drawer-layout.js",revision:"12a23bacbb039fefb2850e3f015e000e"},{url:"lib/1.1/controllers/gesture-helper.js",revision:"ab579cc76b0d15a03996494602fb8268"},{url:"lib/1.1/controllers/header_auto_hide.js",revision:"c9d2b589da08a8f0de4266bae14a3ca9"},{url:"lib/1.1/controllers/list_view.js",revision:"535eba11165949fd636e144a9e6d3435"},{url:"lib/1.1/controllers/mdl-button.js",revision:"c2a4ac575ee439b1e19beb42ea7d016f"},{url:"lib/1.1/controllers/mdl-checkbox.js",revision:"20911a2c2aec81f9ab42615987b21364"},{url:"lib/1.1/controllers/mdl-menu.js",revision:"4fe7db2d50efac92573c1a7097756d62"},{url:"lib/1.1/controllers/scroll-helper.js",revision:"47dd0aa493d8a3dd93cae32bcc89a2a2"},{url:"lib/1.1/controllers/view-pager.js",revision:"626efacf2304d1fea6fe3995a7726ced"},{url:"lib/1.1/extensions/animate-css.js",revision:"f16cb7fb3162d74d7c0c58695abe5596"},{url:"lib/1.1/templates/mdl-card-image.css",revision:"5462946c03df2c00c284f4680c716125"},{url:"lib/1.1/templates/mdl-card-image.html",revision:"0536b5d14c1c83f8a2939da9ab7f2d0d"},{url:"lib/1.1/templates/mdl-card-square.css",revision:"0cd25031cce1ceb63fb6660f9249ebe3"},{url:"lib/1.1/templates/mdl-card-square.html",revision:"6a0884fea45748a54e0d6c4936f145c9"},{url:"lib/1.1/templates/mdl-card.css",revision:"d8c8685be5e6fc793835eddec3acd241"},{url:"lib/1.1/templates/mdl-card.html",revision:"8f4162c548d4eb34d2e592c499f31aa0"},{url:"lib/components/context_menu.css",revision:"8ca90565ab7071c6062a44400aeeef26"},{url:"lib/components/context_menu.html",revision:"169086cf43d8fdd3882a2c764b4f65be"},{url:"lib/components/context_menu.js",revision:"60d98d9f77eb467902c90f4712506768"},{url:"lib/components/hamburger_icon.css",revision:"dd81a60d1bfa7bd4463bb551eae81e35"},{url:"lib/components/hamburger_icon.html",revision:"14b9b9c25ea92bd9660a2e6ea53c1b0d"},{url:"lib/components/hamburger_icon.js",revision:"a0bcebe6f27de04e19bb5aae9f07c084"},{url:"lib/components/media_browser.css",revision:"02bf1a706d945a836e3ba43e4521345d"},{url:"lib/components/media_browser.html",revision:"27b42f4a8cecbb5da1fe28034bc7ec47"},{url:"lib/components/media_browser.js",revision:"316c82ade0f9bbe1a13282c8e57a96fc"},{url:"lib/components/media_browser/article.css",revision:"922f392e98cd6812dc59d1b007d96e16"},{url:"lib/components/media_browser/article.html",revision:"dc712c282458aa1ac6bed32ff2a31d8a"},{url:"lib/components/media_browser/image.css",revision:"cf5a4704af21281f5440307cd16c154f"},{url:"lib/components/media_browser/image.html",revision:"f14af3ebc29559117372c9af37a0f313"},{url:"lib/components/media_browser/image.js",revision:"2436897f418899f6566ffaba5f794f97"},{url:"lib/components/media_browser/video.css",revision:"02f6d109360ce0c2cbd108542282656d"},{url:"lib/components/media_browser/video.html",revision:"84bf58f509119a6b118bc541175ac346"},{url:"lib/components/media_browser/video.js",revision:"de7cfdea145bf969ddf9caf9e300cd7e"},{url:"lib/components/menu_overlay.css",revision:"da22f627f1ad0eac48a8309dc7e81c57"},{url:"lib/components/menu_overlay.html",revision:"e6951bef43b9af00e484f7cc506a3323"},{url:"lib/components/menu_overlay.js",revision:"3db02fcc03bfd438294713a3825cdcde"},{url:"lib/components/social_sharing.css",revision:"0b0a47fa081f1c12f590a9faaa2a8449"},{url:"lib/components/social_sharing.html",revision:"c430e8b7c7de35a8e1745c7fef67e781"},{url:"lib/components/social_sharing.js",revision:"6400d6a28cd1beb8617844d58a712ba8"},{url:"lib/controllers/drawer_layout.js",revision:"dd4b28e90a9d95a39a1556df75db5b10"},{url:"lib/controllers/gesture_helper.js",revision:"181624b9afacb381f0fc1276ed9473bd"},{url:"lib/controllers/header_auto_hide.js",revision:"bf95824f26936fd303f9b0e7df375aa0"},{url:"lib/controllers/list_view.js",revision:"fc2930407b29c707ab8bfca33685e9be"},{url:"lib/controllers/scroll_helper.js",revision:"f90e34e8826a4a9ebb6ba69d5c0ad4cb"},{url:"lib/controllers/view_pager.js",revision:"67acc517e3dfeafb47f49cb27c0a5c60"},{url:"lib/extensions/animate_css.js",revision:"9958c9d78193bad8bb6f8956c66f4dd9"},{url:"lib/templates/spinkit/circle.css",revision:"e605150d128455248875cf8b704e4cd7"},{url:"lib/templates/spinkit/circle.html",revision:"286f7cfd97f5260c25b035a756da4e78"},{url:"lib/templates/spinkit/cube_grid.css",revision:"83427891b4e22468af0c577e87907349"},{url:"lib/templates/spinkit/cube_grid.html",revision:"cc51572a5290f77a59cdd0c6ccd65cb4"},{url:"lib/templates/spinkit/fading_circle.css",revision:"124ee683f2a29ec4cd040bbd74c96746"},{url:"lib/templates/spinkit/fading_circle.html",revision:"3f231b39520b1138b1a1ad80d88f49a9"},{url:"lib/templates/spinkit/folding_cube.css",revision:"22353c2d6e4a7998baaad1d824041652"},{url:"lib/templates/spinkit/folding_cube.html",revision:"e420d0814ba3544a2473afdbfddc45c2"},{url:"lib/templates/spinkit/rects.css",revision:"78e86abb396a6c786a3f062cc94ddfb1"},{url:"lib/templates/spinkit/rects.html",revision:"a41d42cb5e95f483c3ce52a0ec9f30c4"},{url:"lib/templates/spinkit/spinner_cubes.css",revision:"700643a3b4ced17608d3bb6262497bc1"},{url:"lib/templates/spinkit/spinner_cubes.html",revision:"43a591eff4a997f36516c94240a9a883"},{url:"lib/templates/spinkit/spinner_grow.css",revision:"f61806734b7c8fb0c437312b63882133"},{url:"lib/templates/spinkit/spinner_grow.html",revision:"687844e0d4466832710422cad2b2b378"},{url:"lib/templates/spinkit/spinner.css",revision:"848ac13177b296af3720901c40160992"},{url:"lib/templates/spinkit/spinner.html",revision:"b283c2089f5f4d96f36c92a2997b1fe8"},{url:"lib/widgets/timeclock.css",revision:"d6acbfd22af28ce13562b8693c9d13b9"},{url:"lib/widgets/timeclock.html",revision:"4c687f8a0d9d08f7fdf1118610df1a27"},{url:"lib/widgets/timeclock.js",revision:"41e4d5fdaaa451e63d07ae10d4dc173a"},{url:"manifest.json",revision:"10231bceb6bf625a754e38394f9a7f0c"},{url:"pages/blog/index.html",revision:"6483b17f43c22aa9cb15a5d7ba10092e"},{url:"pages/blog/my-first-post/index.html",revision:"2b6fa8e6c25c1c017e41455a71b42acd"},{url:"pages/docs/index.html",revision:"712116c06333b6de0b11c90a5d6cd13c"},{url:"pages/docs/material-design-light/index.html",revision:"32957ac3e6d04c1b024abc0d22609539"},{url:"pages/docs/welcome/index.html",revision:"df46d1b790d92d7e03162978d43d1c8f"},{url:"pages/home/index.html",revision:"0ce3a6fe8db721b47165be7cd582b781"},{url:"pages/search/index.html",revision:"fdd50e7b9a8b201b42f96f0bf52e86d4"},{url:"search-index.json",revision:"f0bd36ac8a279dff3c1f44f66878e8e6"},{url:"images/icons/desktop/android-chrome-192x192.png",revision:"93d5e77e9ee1e9c6975f3c0bd1a21574"},{url:"images/icons/desktop/android-chrome-512x512.png",revision:"6df83c6c13be17a2ea70d29e340c5ddb"},{url:"images/icons/desktop/apple-touch-icon.png",revision:"2b78ed332644d19d9779c069c5842538"},{url:"images/icons/desktop/favicon-16x16.png",revision:"6c047cdbd3d5c4c962a3a692a5025d27"},{url:"images/icons/desktop/favicon-32x32.png",revision:"7413528d5e59c22af1ccf38187bc950b"},{url:"images/icons/desktop/mstile-150x150.png",revision:"540caa78f56655281b2d4b17ad52f2ce"},{url:"images/icons/desktop/safari-pinned-tab.svg",revision:"a0ab2c612c6a5019b3e4ae7c38043b98"},{url:"images/icons/icon-128x128.png",revision:"69f3f1f3f956bb71f35ce66b7717e1a0"},{url:"images/icons/icon-144x144.png",revision:"45e24db8671c41ca95c440df0cadf2a3"},{url:"images/icons/icon-152x152.png",revision:"e0867fd6e9bc25afd831b1eabdd83f8d"},{url:"images/icons/icon-192x192.png",revision:"cf383c3d4500d31884326cc9d53a8c3a"},{url:"images/icons/icon-384x384.png",revision:"19007d16c73f442f44c926beddc34637"},{url:"images/icons/icon-512x512.png",revision:"274298ed7162d12352fa836d3a2cb11e"},{url:"images/icons/icon-72x72.png",revision:"919cb6b3e8a1b5d0c963921dba0e4388"},{url:"images/icons/icon-96x96.png",revision:"5547ad1a33334c0f5c04f6de1f6d2c52"},{url:"images/menu_open_black_48dp.svg",revision:"6a65883ec5d5058af76c169ed17edc71"},{url:"images/page-speed-insight-icon.png",revision:"85f446592394b827475c3c5d11f66924"},{url:"images/profile-icon.png",revision:"56f0c7de57fdae6d0a9ddc43448b6dff"},{url:"images/zuix-logo.svg",revision:"48e6defd57440a6d0f0d12241ff9d6c5"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET"),e.registerRoute(/\.(?:html|json|js|css)$/,new e.CacheFirst({cacheName:"default",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
