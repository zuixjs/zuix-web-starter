if(!self.define){let e,i={};const a=(a,o)=>(a=new URL(a+".js",o).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(o,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let l={};const n=e=>a(e,d),r={module:{uri:d},exports:l,require:n};i[d]=Promise.all(o.map((e=>r[e]||n(e)))).then((e=>(s(...e),l)))}}define(["./workbox-dce15169"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app/pages/view-pager/about.css",revision:"cb44e2e570d6a3fb18577212697d8704"},{url:"app/pages/view-pager/about.html",revision:"ab64efb3c0790629d87839bd5aff263a"},{url:"app/pages/view-pager/notifications.css",revision:"8c6b5be647dc8bcf2e4a733512fd5f23"},{url:"app/pages/view-pager/notifications.html",revision:"2cbc84c36eb5ce6ae0cb00659e964fef"},{url:"app/pages/view-pager/search.css",revision:"8c6b5be647dc8bcf2e4a733512fd5f23"},{url:"app/pages/view-pager/search.html",revision:"580882fe15f0c1240a72e370bbe8f9d3"},{url:"app/shared/input_box.css",revision:"2d60dd9628549fcde08948637584af45"},{url:"app/shared/input_box.html",revision:"5ce442655756ba82537b075221a1310a"},{url:"app/shared/input_box.js",revision:"f9f368957becacb5d651043dd793da6f"},{url:"config.js",revision:"23ee62c2638c26ddd93deeda5721fc10"},{url:"index.html",revision:"ee1e54f135ba573f597808e844b1d35a"},{url:"js/prism/prism.css",revision:"343ab6c1b213d253d82d6c7afad86079"},{url:"js/prism/prism.js",revision:"0dd62d25c1a7fe66e4c7256e8ada30b5"},{url:"js/zuix/animate-css.js",revision:"7db39f961eb3b537fa15888331b4712d"},{url:"js/zuix/zuix-bundler.js",revision:"45771ed96f3d8f5e3a4864e85db83bb4"},{url:"js/zuix/zuix-bundler.min.js",revision:"bc3029bde1667107ab43d6fe703db850"},{url:"js/zuix/zuix-bundler.module.js",revision:"1e062e3bae339edc4e2ac9f61a2385fc"},{url:"js/zuix/zuix-bundler.module.min.js",revision:"a11fd2cf449453de9553b6feb4a19fbd"},{url:"js/zuix/zuix.js",revision:"4de93ac56a5b135c23766873919c84de"},{url:"js/zuix/zuix.min.js",revision:"ff6c978a7d41d6946797174b40f3f425"},{url:"js/zuix/zuix.module.js",revision:"4c74ad0e55df90445ae7747bc748502a"},{url:"js/zuix/zuix.module.min.js",revision:"4d1310ed62a9068ebb53170f41c4eb3c"},{url:"lib/1.1/components/context-menu.css",revision:"c6a8ce930271984f9fcaf3eaa85bdf25"},{url:"lib/1.1/components/context-menu.html",revision:"b6d6672432b81bdc209c5d9e07ef2458"},{url:"lib/1.1/components/context-menu.js",revision:"f2ee385a2a0907b5ed4cf7060068334a"},{url:"lib/1.1/components/hamburger-icon.css",revision:"dd81a60d1bfa7bd4463bb551eae81e35"},{url:"lib/1.1/components/hamburger-icon.html",revision:"14b9b9c25ea92bd9660a2e6ea53c1b0d"},{url:"lib/1.1/components/hamburger-icon.js",revision:"44cf41b6ac1d2dd49f7bf004a5d628a4"},{url:"lib/1.1/components/media-browser.css",revision:"e3c8aeadb91484d0a0fc984e24b469b1"},{url:"lib/1.1/components/media-browser.html",revision:"8c664dc6772bd13ca0660a752986b1d5"},{url:"lib/1.1/components/media-browser.js",revision:"aff895f205bf4a3ac8ae4e8aa0e87678"},{url:"lib/1.1/components/media-browser/article.css",revision:"e7f0f5dbe26e76dcd13f7973dc768308"},{url:"lib/1.1/components/media-browser/article.html",revision:"817ccb127ce00476644de9f7a25611e5"},{url:"lib/1.1/components/media-browser/image.css",revision:"3a1499bcedfd546b1e3e4de0c645bf8d"},{url:"lib/1.1/components/media-browser/image.html",revision:"0a6a67e7280fa668ffb1ed016bec7780"},{url:"lib/1.1/components/media-browser/image.js",revision:"b12865e8955465caed5139dd16200c77"},{url:"lib/1.1/components/media-browser/video.css",revision:"d01c44cf05b7832ec57d6181159c52fa"},{url:"lib/1.1/components/media-browser/video.html",revision:"934e6febc1d7c6c64ef99cddf0a6f99f"},{url:"lib/1.1/components/media-browser/video.js",revision:"d596ec76a6c1d46b0541abdb9bf05c3b"},{url:"lib/1.1/components/menu-overlay.css",revision:"5a726d9ce4630f2eacfdf931f1a5b733"},{url:"lib/1.1/components/menu-overlay.html",revision:"220c3005881852f0387e61ea8ac2a6c5"},{url:"lib/1.1/components/menu-overlay.js",revision:"2f191342bb867e3669cc28791acefe10"},{url:"lib/1.1/controllers/drawer-layout.js",revision:"1f487a709e6a0a284fdf7ea3a4dd26d7"},{url:"lib/1.1/controllers/gesture-helper.js",revision:"ab579cc76b0d15a03996494602fb8268"},{url:"lib/1.1/controllers/header-auto-hide.js",revision:"cd39abe5c294dd1c7aaabe698e33b462"},{url:"lib/1.1/controllers/list_view.js",revision:"535eba11165949fd636e144a9e6d3435"},{url:"lib/1.1/controllers/mdl-button.js",revision:"c2a4ac575ee439b1e19beb42ea7d016f"},{url:"lib/1.1/controllers/mdl-checkbox.js",revision:"20911a2c2aec81f9ab42615987b21364"},{url:"lib/1.1/controllers/mdl-menu.js",revision:"4fe7db2d50efac92573c1a7097756d62"},{url:"lib/1.1/controllers/scroll-helper.js",revision:"438a1070998c61f67a0b87afc6d98cbc"},{url:"lib/1.1/controllers/view-pager.js",revision:"9db55b4420ce9745b9553375dd3c74cd"},{url:"lib/1.1/extensions/animate-css.js",revision:"f16cb7fb3162d74d7c0c58695abe5596"},{url:"lib/1.1/templates/mdl-card-image.css",revision:"5462946c03df2c00c284f4680c716125"},{url:"lib/1.1/templates/mdl-card-image.html",revision:"0536b5d14c1c83f8a2939da9ab7f2d0d"},{url:"lib/1.1/templates/mdl-card-square.css",revision:"0cd25031cce1ceb63fb6660f9249ebe3"},{url:"lib/1.1/templates/mdl-card-square.html",revision:"6a0884fea45748a54e0d6c4936f145c9"},{url:"lib/1.1/templates/mdl-card.css",revision:"d8c8685be5e6fc793835eddec3acd241"},{url:"lib/1.1/templates/mdl-card.html",revision:"8f4162c548d4eb34d2e592c499f31aa0"},{url:"manifest.json",revision:"10231bceb6bf625a754e38394f9a7f0c"},{url:"pages/docs/index.html",revision:"c1939cb4dbaa39f99623569d35bccefb"},{url:"pages/docs/material-design-light/index.html",revision:"c461ad936da86893855d17c8a7ede015"},{url:"pages/docs/welcome/index.html",revision:"267e2a6631ff59d771bed329b9d877c7"},{url:"pages/home/index.html",revision:"2a309d2a6b9157209457b949d946cacc"},{url:"pages/news-blog/europe/ab-vodpok-utijendo/index.html",revision:"8d8d09f483446b60900ba0d18ce3f88d"},{url:"pages/news-blog/europe/anpebo-dus-rozok-movnimo-vijoz/index.html",revision:"ce9b0fe4301aa0ec21687c35310528f6"},{url:"pages/news-blog/europe/boc-piovezi-monup-seh/index.html",revision:"f8e276ea99ff95bfd131746c1245c3c1"},{url:"pages/news-blog/europe/bogeat-ekhon-zetum-pav-lijan/index.html",revision:"55759af71cb97573861e4cb44351b828"},{url:"pages/news-blog/europe/didro-fukmukkel-luneik-sa-rik/index.html",revision:"73ab5d2eedd9f2402c4aa98714fc18a2"},{url:"pages/news-blog/europe/dozigej-wojwuf-nodfen/index.html",revision:"4d5642f9c6ddacb89c0e40af4333d3f7"},{url:"pages/news-blog/europe/esodiw-wefem-nifrijco-jajle-ge/index.html",revision:"a196d27d97d0aa48bf71b95a49fbc99b"},{url:"pages/news-blog/europe/gesod-roriag-vomnev/index.html",revision:"58a071dbae510233230ef36e7ed33540"},{url:"pages/news-blog/europe/gumrov-legnowa-lo-evgi/index.html",revision:"2a92f52cfb5a7163bcb22dcbc7e9c1fd"},{url:"pages/news-blog/europe/hegid-epkun-hujpek-daphi/index.html",revision:"e82eba2e8c08a95517154e3096d7735f"},{url:"pages/news-blog/europe/index.html",revision:"76a7e88e41eaf009925798ecc5315a66"},{url:"pages/news-blog/europe/iti-ecopne-nukit-vurudrul-feab/index.html",revision:"26845f4daae64278b846ac632a1748c7"},{url:"pages/news-blog/europe/ji-poav-pectilho-hi/index.html",revision:"3fcd7118ce3ce80f0d9afb08ee05b86f"},{url:"pages/news-blog/europe/jon-komir-wouwi-vieve/index.html",revision:"725bf4bed3a7d3c124c07275e5518894"},{url:"pages/news-blog/europe/kelavi-ufi-jacgomih-jujvope/index.html",revision:"d881c42ae85ff914d590c8a76fc32dbe"},{url:"pages/news-blog/europe/kipav-evsof-uroja-sun/index.html",revision:"0586f72560cbfc47cfa71efdfcf7f5ed"},{url:"pages/news-blog/europe/kisgo-kac-ogtedje-we/index.html",revision:"fa41404e90b87da6fd02059f672b1251"},{url:"pages/news-blog/europe/le-ho-fi-ejhi/index.html",revision:"23a9249692a60e434e43cf1acaba8b3c"},{url:"pages/news-blog/europe/lijhic-tafru-la-ipugo-zilakom/index.html",revision:"df579570b08395679a9b1b73a25a269c"},{url:"pages/news-blog/europe/mali-peim-bahojko-wi-fidi/index.html",revision:"7ce457ffcbaa9220492d611f12dec5b4"},{url:"pages/news-blog/europe/me-joipe-dihmukni-pogid-tovmin/index.html",revision:"16c69d42550373a5f30cedcc28893001"},{url:"pages/news-blog/europe/mialo-sihceit-opfi-zevge/index.html",revision:"6aa33fa2b1a0a1eaf30373d81e84911b"},{url:"pages/news-blog/europe/ni-ob-wijoc-dot/index.html",revision:"2ad920886fc0604d5b85d049d5cd3ae8"},{url:"pages/news-blog/europe/ofebo-ednonji-nemeg-go/index.html",revision:"e598f3e514ec9f3dc17cf7e9997d567e"},{url:"pages/news-blog/europe/oteeje-fepuc-ebonac-difab/index.html",revision:"b6e68702c950a0bd3dfa26b05ca4c61a"},{url:"pages/news-blog/europe/ovpoam-ohlofov-med/index.html",revision:"6a42d467855d9cd97d9b1b61b8f579c5"},{url:"pages/news-blog/europe/pikefda-pogri-cebwaf-basdem/index.html",revision:"65b25dd3530c0830446db9e7ef7c75b4"},{url:"pages/news-blog/europe/posvirtis-fatcid-zonmu-afoip/index.html",revision:"4617213831672f35436b8405e5f559c5"},{url:"pages/news-blog/europe/reki-tulefwap-jeh-girow-tenen/index.html",revision:"4dbca7bc83de5065abfc6a40795c962c"},{url:"pages/news-blog/europe/so-varki-hipel-gej/index.html",revision:"a7d9dd058d9f069066d90ab1540585de"},{url:"pages/news-blog/europe/werais-naisinu-enmo-te/index.html",revision:"e69e0a6a09b94972e4d81b4dab79bedd"},{url:"pages/news-blog/europe/wetok-firu-tefnif-emidi/index.html",revision:"3e5b6f81a8c001c38bacafea5ed3b725"},{url:"pages/news-blog/europe/wezijjer-kifuseos-ez-zoadu/index.html",revision:"306b25f45fbd5a094e0d693aa68e5e35"},{url:"pages/news-blog/europe/wuso-bujsi-imut-coh/index.html",revision:"960b788186a800473f8e6cb9620e0ec4"},{url:"pages/news-blog/top/bitdikse-favmi-dehohjis-gopir/index.html",revision:"511a1f14c6d85cf294c47267a81f530b"},{url:"pages/news-blog/top/bo-ipe-pog/index.html",revision:"632e6673839de83975ee3ac8ab5505b0"},{url:"pages/news-blog/top/egilecvos-ikho-vi-il-hiapir/index.html",revision:"25d5eca484418a8fa1ccbadc0b5ef576"},{url:"pages/news-blog/top/epolu-segmaci-orteve-at/index.html",revision:"f07cfb44fe839fae576056e9b576c1c9"},{url:"pages/news-blog/top/esku-ek-apumitkud-pip-ha/index.html",revision:"4f591be9f0f4fdb6697b43d4ec8f5f3f"},{url:"pages/news-blog/top/esu-boewe-jezhec-nanhe/index.html",revision:"124a33b39b02fe60575f79a943817d01"},{url:"pages/news-blog/top/feib-retufjet-nenhaupa-omte-ge/index.html",revision:"112adb3d06c7ef313bd8b79bb35228ad"},{url:"pages/news-blog/top/gigacfe-ag-mu-ref-aliwi/index.html",revision:"35e5a84bf83caa74c1af024075d56b07"},{url:"pages/news-blog/top/giguvto-sos-uk-jule/index.html",revision:"bbec366a3cd69ed51bd2365a571e4aa3"},{url:"pages/news-blog/top/gofwu-dadviz-mahfonzo-lijgo-ah/index.html",revision:"ef17bef05c151cc1d1d1bda825ebabd2"},{url:"pages/news-blog/top/hekroc-de-ropo-ne/index.html",revision:"4ba4c34b262e6e12cb9edba944ce052a"},{url:"pages/news-blog/top/ih-wo-rulfigle-lofawease-ta/index.html",revision:"9b7dd491cbfd78cbe02b6a8020874a91"},{url:"pages/news-blog/top/imetol-rof-ahtuf-ja/index.html",revision:"2eb89c2bde324127a76b9b6c3fb70fa1"},{url:"pages/news-blog/top/index.html",revision:"f2d7fc4f1313ea81866284bc10fb52dd"},{url:"pages/news-blog/top/itiku-no-tovlitahi-fifikivug/index.html",revision:"d8ff94492013f0edc1d527599bf8fab5"},{url:"pages/news-blog/top/jav-cigde-tojug/index.html",revision:"9b0a03f3287d0a01520faf9e6469d03e"},{url:"pages/news-blog/top/jek-hawgiz-wunap/index.html",revision:"a6b252fbb7ba73fe1558e5a58cc82ec8"},{url:"pages/news-blog/top/kemfen-fadnamlag-sekitred-rije/index.html",revision:"e9eff57d12d059bab0de688c850ac02f"},{url:"pages/news-blog/top/laki-luanajo-reino/index.html",revision:"94eb8f6edb2f4972458f1690bfbf48d0"},{url:"pages/news-blog/top/leceb-be-giw-fu/index.html",revision:"ca43ed62f4b79cbdb5ce3c6fbe51b31c"},{url:"pages/news-blog/top/lened-mizeipo-cocid/index.html",revision:"0acb548585a7ce2d3eef30b6db5dd927"},{url:"pages/news-blog/top/lewabgag-wikwawjug-jalnupo/index.html",revision:"9907b5d0cdc218dfa7b9462ef960ef09"},{url:"pages/news-blog/top/lunson-ba-sadapo/index.html",revision:"07c47022e2a94017a7640241edaaba6f"},{url:"pages/news-blog/top/ni-vuule-po-te/index.html",revision:"cd681c3982d63b97292b3caca2acba88"},{url:"pages/news-blog/top/pehepkod-sam-ivsa/index.html",revision:"a8edfb15d1271130f78741797ede651d"},{url:"pages/news-blog/top/penca-kowin-seljuzir-ladhij/index.html",revision:"f90d302c13340b9e15c6658b710a52e8"},{url:"pages/news-blog/top/rapu-aw-no/index.html",revision:"c4bad95b79c005f9ca8c758c5dbf0443"},{url:"pages/news-blog/top/sefifa-guker-mic-koc-zescila/index.html",revision:"f1d86da263f281763ec264501263ddde"},{url:"pages/news-blog/top/vi-wobifi-zuaw/index.html",revision:"ba8445d0188b22a5440f088e8dc4dbc8"},{url:"pages/news-blog/top/zehevhes-fe-fejhezke-tofkuzus-/index.html",revision:"8c8e7d6853a7922b6c903007c3178f05"},{url:"pages/news-blog/top/zek-cikop-ofo-onidi/index.html",revision:"23f78eb6f85d8a8e8dbcb0aedc81d7cf"},{url:"pages/news-blog/top/zekid-hemfi-migi/index.html",revision:"dc4717c571ac5fe545b625c5b84cc943"},{url:"pages/news-blog/top/zodowode-ejwaime-gimfim-mi-nun/index.html",revision:"293303ad9be1b1eadb041d30880efc4a"},{url:"pages/news-blog/top/zosok-togsisil-good-fefuk/index.html",revision:"1c4811bb246aa7539abed2ad608bae70"},{url:"pages/news-blog/travel/as-furof-refe-kespe/index.html",revision:"76a8efa9393ea912d9f6a3b08fcca176"},{url:"pages/news-blog/travel/ce-mun-mekfud/index.html",revision:"c6427e434a1cafc10825a8613e7bd25d"},{url:"pages/news-blog/travel/coho-ficlic-vizehob/index.html",revision:"0b8a91a5a239b733d7b137620fda83a1"},{url:"pages/news-blog/travel/egapunev-delzacdop-vikgel-huok/index.html",revision:"87749ddf0e9829a9f0b9250095a6ddc5"},{url:"pages/news-blog/travel/egiwiv-vebigule-isiv-uboijo-le/index.html",revision:"e27bc0ac434dcea22c1155a2b080a84c"},{url:"pages/news-blog/travel/eszodver-apawo-no/index.html",revision:"fcb79983212556622f102d2590aa1b69"},{url:"pages/news-blog/travel/ewogik-apif-togmod-fihkecic/index.html",revision:"0f5b08fce4a631c9f77faa6ce85f89cd"},{url:"pages/news-blog/travel/fip-le-acuvithe/index.html",revision:"167c34b733d02e45e6b4486d2ef8d1bd"},{url:"pages/news-blog/travel/fosdi-tiggapu-diucino/index.html",revision:"bcfd7c8163e8aa1c462fc6ccf481fae9"},{url:"pages/news-blog/travel/gaem-cedjivi-mistieja/index.html",revision:"289af4ffdb4b4bae8b7c90d4864722af"},{url:"pages/news-blog/travel/gi-coge-vuv-boleoga/index.html",revision:"0dc4c2fa766f5929993069bef2a1de7f"},{url:"pages/news-blog/travel/gimom-tiz-tocto-di/index.html",revision:"35a05d53f937fa12358da8ee8ea0dbbb"},{url:"pages/news-blog/travel/godod-fili-cecer-ehu/index.html",revision:"e7610c715f94242ef7ea565e88b4ba77"},{url:"pages/news-blog/travel/hamek-zati-enrec-mimoptef/index.html",revision:"fb111273f058470f8ddaf2ea82564584"},{url:"pages/news-blog/travel/hovduc-dini-mihatfej-kicuv/index.html",revision:"2da503f40c2f013d9af266771e688a46"},{url:"pages/news-blog/travel/index.html",revision:"96541801620189f78e9758f866a74762"},{url:"pages/news-blog/travel/jefil-efdet-megga-duzis-ze/index.html",revision:"20dd521d6146df45980fd9f36750a11e"},{url:"pages/news-blog/travel/jewi-izta-vefis-une/index.html",revision:"feffca19da074aa2aace20e8e18dfecc"},{url:"pages/news-blog/travel/ki-mutatul-ka/index.html",revision:"5ec066f535b15590a591232d37a7a8ee"},{url:"pages/news-blog/travel/lonrisa-rehu-eketivvov/index.html",revision:"8b54c87cb31b781f953f108674588bec"},{url:"pages/news-blog/travel/moken-ve-heki-ninviv/index.html",revision:"e8a82b8282398453666ec9f78f849808"},{url:"pages/news-blog/travel/mum-we-luv-fedzon-liwih/index.html",revision:"0755b7609abc3addc09cce793eb60931"},{url:"pages/news-blog/travel/oja-tibrak-has/index.html",revision:"3abc0e41c0570128669d1eac0d3a4a08"},{url:"pages/news-blog/travel/okjom-fiw-epfa-sajzohbu/index.html",revision:"3d2b7437e1bad5979319ff86cda9f2e9"},{url:"pages/news-blog/travel/otitu-kep-esovuj-peer-tovijoc/index.html",revision:"2e777783a5af287119aa74d920276c0c"},{url:"pages/news-blog/travel/piged-ir-vubusa-kecti/index.html",revision:"aff9927f48505f91901a1ad33f32e03f"},{url:"pages/news-blog/travel/piwro-ziotu-sose-povip-zuwdof/index.html",revision:"416969c98419111719b12eab94a9ba8e"},{url:"pages/news-blog/travel/pugo-wut-seslil/index.html",revision:"c13b11deb3689cb485fb816d8d42356b"},{url:"pages/news-blog/travel/pul-cirtu-fed-deto/index.html",revision:"4636cb6b9b6a3bbe24177a7ad66612f5"},{url:"pages/news-blog/travel/sene-wujzo-zenobo-rijanam/index.html",revision:"dbc6f9d35a8c47ace6482a8b5f2f577e"},{url:"pages/news-blog/travel/sufzad-kuibij-rokde/index.html",revision:"dcfd16ee2a1626a6ae6a7b8f0a48cece"},{url:"pages/news-blog/travel/uno-jo-migcaw-si/index.html",revision:"e19ecdb84990a5e975c098b81a8067ee"},{url:"pages/news-blog/travel/urve-hemina-daf/index.html",revision:"ce927c2608ab05b0dc6e3418e72069c8"},{url:"pages/news-blog/travel/zisnempin-saze-keze/index.html",revision:"6a6e719e7f8e8ed5b102ab27d3f0e996"},{url:"pages/news-blog/world/aldon-atmusrur-kengimi-temcof/index.html",revision:"3effb780f3d1794b6e8500850e8bdc51"},{url:"pages/news-blog/world/apula-fegom-hozu-imziz/index.html",revision:"e33582e7f6863b6bd28637bdcf0897fc"},{url:"pages/news-blog/world/cin-gi-vejicu-lovbo/index.html",revision:"abd5dd448ed029f0674ec8e46ecd37c1"},{url:"pages/news-blog/world/cinan-pevwoko-fim-himete/index.html",revision:"4b8d60929663521846adad1ade5a0887"},{url:"pages/news-blog/world/citat-nikje-anbu-ah/index.html",revision:"1484fa927a863b1f0ee95e91f8f41de3"},{url:"pages/news-blog/world/da-onwef-ze-zohedde/index.html",revision:"a11ea5575d70bd9238f443ec38de4226"},{url:"pages/news-blog/world/dodahuvi-zopwen-ozihocpa-nehme/index.html",revision:"31993841391d280e1253801b2a1b6956"},{url:"pages/news-blog/world/ek-dame-owoowe/index.html",revision:"a5cd1f1e6bb65ac428558893956bbc51"},{url:"pages/news-blog/world/gazow-jedje-verwem-wajwec/index.html",revision:"7b70587d86f1de0ee40bd3bad08655e8"},{url:"pages/news-blog/world/hiknek-iruce-eraonajik/index.html",revision:"df0d283d7185c98eb9fd18b37921a765"},{url:"pages/news-blog/world/hiroh-fonaw-ole/index.html",revision:"d4dcd1a699fe671977cbcf1be6e5f056"},{url:"pages/news-blog/world/ho-nosti-sumdo-cetso/index.html",revision:"ddc8c429f8419fd42fb0fe88ecb078a3"},{url:"pages/news-blog/world/ijovudeg-sogva-sokesilic-kecdi/index.html",revision:"6cebfc98bf8656526622be03d5baedfa"},{url:"pages/news-blog/world/inaagoese-boka-zumpe-avgel-tok/index.html",revision:"aad41755d51ace3c91b51b150957d510"},{url:"pages/news-blog/world/index.html",revision:"4a12d2cecaf48937997020ee2228d084"},{url:"pages/news-blog/world/jutawigeg-tuziivi-ter-pego/index.html",revision:"6e4498314eccdbc3d4f28b8a31cb1434"},{url:"pages/news-blog/world/lieniho-nig-ovu-di/index.html",revision:"22f21d99587fffe6e9f8a1ee65fafc20"},{url:"pages/news-blog/world/ne-fikig-roaf-sidtom-pet/index.html",revision:"74e155d55f4f8a0f0bff33caf0a6e754"},{url:"pages/news-blog/world/nibgiji-ekfum-emlil/index.html",revision:"adbab81f58f8250ec0498a02d879d4e4"},{url:"pages/news-blog/world/odovi-kodkaga-kece-suzu/index.html",revision:"a38ed0a048e0477b563af5b180589f41"},{url:"pages/news-blog/world/olekeeci-otu-liot-johrir/index.html",revision:"6874f85ef2caea09b140148bccfcde82"},{url:"pages/news-blog/world/pocorir-zesih-tesip-jeh/index.html",revision:"82fc969e7943bb933f7dda6b512de215"},{url:"pages/news-blog/world/rafnejfil-biire-zaotu-igimi/index.html",revision:"cb581ee803a2b7d6308d1674823a1746"},{url:"pages/news-blog/world/res-na-goame/index.html",revision:"d5315309cd8b8c2682d5e96043b318c1"},{url:"pages/news-blog/world/sozi-josved-idcul-we-nuere/index.html",revision:"cd20b2e2b7208fcec6d3fa4424048bcf"},{url:"pages/news-blog/world/tipik-seofiotu-arononpe-jonut/index.html",revision:"8cc853238f989fee92c2891deba6cc64"},{url:"pages/news-blog/world/tozewefe-vuzegi-zozlun/index.html",revision:"36601b57decee1850bfe50257133c5fc"},{url:"pages/news-blog/world/ujtu-opa-nukrit-lugmirmob/index.html",revision:"14e58b22572fba93689b133da8d3f0dd"},{url:"pages/news-blog/world/vepfazlaf-omawut-albo-vole/index.html",revision:"492a931c2741e17d23cf230e5c752b32"},{url:"pages/news-blog/world/waruige-okhad-vapera-re/index.html",revision:"f9d884580580d6970f4241cf57d59602"},{url:"pages/news-blog/world/we-cin-ga-gigo/index.html",revision:"1ab624f1848cabf3e702b8ba644ea18f"},{url:"pages/news-blog/world/zifkit-filhof-sokerde-fessunuc/index.html",revision:"0195be693a8594d2fb78a895df131ad9"},{url:"pages/news-blog/world/zika-jilof-adhecok/index.html",revision:"2d30def85875e9316a2e897a02e569b2"},{url:"pages/news-blog/world/zotefum-kiffab-olo-ce-pa/index.html",revision:"80cd7968c0d8e76af17340612d7f809e"},{url:"pages/search/index.html",revision:"2ad85c50b526ba84012d6b6ac29cf419"},{url:"pages/templates/another-post/index.html",revision:"903844108b035a509b8f9c5e018bf5ff"},{url:"pages/templates/index.html",revision:"d4f6586f16eeb41a60613e748965710e"},{url:"pages/templates/my-first-post/index.html",revision:"ddd01bff98a9a4f8d50c544dc0713394"},{url:"pages/templates/news-blog/index.html",revision:"2a38aa1cc735e109b34674afee58b174"},{url:"search-index.json",revision:"0785cbee78d51ec828a241d8d5b28866"},{url:"images/icons/desktop/android-chrome-192x192.png",revision:"93d5e77e9ee1e9c6975f3c0bd1a21574"},{url:"images/icons/desktop/android-chrome-512x512.png",revision:"6df83c6c13be17a2ea70d29e340c5ddb"},{url:"images/icons/desktop/apple-touch-icon.png",revision:"2b78ed332644d19d9779c069c5842538"},{url:"images/icons/desktop/favicon-16x16.png",revision:"6c047cdbd3d5c4c962a3a692a5025d27"},{url:"images/icons/desktop/favicon-32x32.png",revision:"7413528d5e59c22af1ccf38187bc950b"},{url:"images/icons/desktop/mstile-150x150.png",revision:"540caa78f56655281b2d4b17ad52f2ce"},{url:"images/icons/desktop/safari-pinned-tab.svg",revision:"a0ab2c612c6a5019b3e4ae7c38043b98"},{url:"images/icons/icon-128x128.png",revision:"69f3f1f3f956bb71f35ce66b7717e1a0"},{url:"images/icons/icon-144x144.png",revision:"45e24db8671c41ca95c440df0cadf2a3"},{url:"images/icons/icon-152x152.png",revision:"e0867fd6e9bc25afd831b1eabdd83f8d"},{url:"images/icons/icon-192x192.png",revision:"cf383c3d4500d31884326cc9d53a8c3a"},{url:"images/icons/icon-384x384.png",revision:"19007d16c73f442f44c926beddc34637"},{url:"images/icons/icon-512x512.png",revision:"274298ed7162d12352fa836d3a2cb11e"},{url:"images/icons/icon-72x72.png",revision:"919cb6b3e8a1b5d0c963921dba0e4388"},{url:"images/icons/icon-96x96.png",revision:"5547ad1a33334c0f5c04f6de1f6d2c52"},{url:"images/menu_open_black_48dp.svg",revision:"6a65883ec5d5058af76c169ed17edc71"},{url:"images/page-speed-insight-icon.png",revision:"85f446592394b827475c3c5d11f66924"},{url:"images/profile-icon.png",revision:"56f0c7de57fdae6d0a9ddc43448b6dff"},{url:"images/zuix-logo.svg",revision:"48e6defd57440a6d0f0d12241ff9d6c5"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET"),e.registerRoute(/\.(?:html|json|js|css)$/,new e.CacheFirst({cacheName:"default",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
