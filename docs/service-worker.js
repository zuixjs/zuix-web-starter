if(!self.define){let e,i={};const o=(o,a)=>(o=new URL(o+".js",a).href,i[o]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=i,document.head.appendChild(e)}else e=o,importScripts(o),i()})).then((()=>{let e=i[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(a,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let l={};const n=e=>o(e,d),r={module:{uri:d},exports:l,require:n};i[d]=Promise.all(a.map((e=>r[e]||n(e)))).then((e=>(s(...e),l)))}}define(["./workbox-dce15169"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app/pages/view-pager/about.css",revision:"cb44e2e570d6a3fb18577212697d8704"},{url:"app/pages/view-pager/about.html",revision:"ab64efb3c0790629d87839bd5aff263a"},{url:"app/pages/view-pager/notifications.css",revision:"8c6b5be647dc8bcf2e4a733512fd5f23"},{url:"app/pages/view-pager/notifications.html",revision:"2cbc84c36eb5ce6ae0cb00659e964fef"},{url:"app/pages/view-pager/search.css",revision:"8c6b5be647dc8bcf2e4a733512fd5f23"},{url:"app/pages/view-pager/search.html",revision:"580882fe15f0c1240a72e370bbe8f9d3"},{url:"app/shared/input_box.css",revision:"2d60dd9628549fcde08948637584af45"},{url:"app/shared/input_box.html",revision:"5ce442655756ba82537b075221a1310a"},{url:"app/shared/input_box.js",revision:"f9f368957becacb5d651043dd793da6f"},{url:"config.js",revision:"23ee62c2638c26ddd93deeda5721fc10"},{url:"index.html",revision:"ee1e54f135ba573f597808e844b1d35a"},{url:"js/prism/prism.css",revision:"343ab6c1b213d253d82d6c7afad86079"},{url:"js/prism/prism.js",revision:"0dd62d25c1a7fe66e4c7256e8ada30b5"},{url:"js/zuix/animate-css.js",revision:"7db39f961eb3b537fa15888331b4712d"},{url:"js/zuix/zuix-bundler.js",revision:"45771ed96f3d8f5e3a4864e85db83bb4"},{url:"js/zuix/zuix-bundler.min.js",revision:"bc3029bde1667107ab43d6fe703db850"},{url:"js/zuix/zuix-bundler.module.js",revision:"1e062e3bae339edc4e2ac9f61a2385fc"},{url:"js/zuix/zuix-bundler.module.min.js",revision:"a11fd2cf449453de9553b6feb4a19fbd"},{url:"js/zuix/zuix.js",revision:"4de93ac56a5b135c23766873919c84de"},{url:"js/zuix/zuix.min.js",revision:"ff6c978a7d41d6946797174b40f3f425"},{url:"js/zuix/zuix.module.js",revision:"4c74ad0e55df90445ae7747bc748502a"},{url:"js/zuix/zuix.module.min.js",revision:"4d1310ed62a9068ebb53170f41c4eb3c"},{url:"lib/1.1/components/context-menu.css",revision:"c6a8ce930271984f9fcaf3eaa85bdf25"},{url:"lib/1.1/components/context-menu.html",revision:"b6d6672432b81bdc209c5d9e07ef2458"},{url:"lib/1.1/components/context-menu.js",revision:"f2ee385a2a0907b5ed4cf7060068334a"},{url:"lib/1.1/components/hamburger-icon.css",revision:"dd81a60d1bfa7bd4463bb551eae81e35"},{url:"lib/1.1/components/hamburger-icon.html",revision:"14b9b9c25ea92bd9660a2e6ea53c1b0d"},{url:"lib/1.1/components/hamburger-icon.js",revision:"44cf41b6ac1d2dd49f7bf004a5d628a4"},{url:"lib/1.1/components/media-browser.css",revision:"e3c8aeadb91484d0a0fc984e24b469b1"},{url:"lib/1.1/components/media-browser.html",revision:"8c664dc6772bd13ca0660a752986b1d5"},{url:"lib/1.1/components/media-browser.js",revision:"aff895f205bf4a3ac8ae4e8aa0e87678"},{url:"lib/1.1/components/media-browser/article.css",revision:"e7f0f5dbe26e76dcd13f7973dc768308"},{url:"lib/1.1/components/media-browser/article.html",revision:"817ccb127ce00476644de9f7a25611e5"},{url:"lib/1.1/components/media-browser/image.css",revision:"3a1499bcedfd546b1e3e4de0c645bf8d"},{url:"lib/1.1/components/media-browser/image.html",revision:"0a6a67e7280fa668ffb1ed016bec7780"},{url:"lib/1.1/components/media-browser/image.js",revision:"b12865e8955465caed5139dd16200c77"},{url:"lib/1.1/components/media-browser/video.css",revision:"d01c44cf05b7832ec57d6181159c52fa"},{url:"lib/1.1/components/media-browser/video.html",revision:"934e6febc1d7c6c64ef99cddf0a6f99f"},{url:"lib/1.1/components/media-browser/video.js",revision:"d596ec76a6c1d46b0541abdb9bf05c3b"},{url:"lib/1.1/components/menu-overlay.css",revision:"5a726d9ce4630f2eacfdf931f1a5b733"},{url:"lib/1.1/components/menu-overlay.html",revision:"220c3005881852f0387e61ea8ac2a6c5"},{url:"lib/1.1/components/menu-overlay.js",revision:"2f191342bb867e3669cc28791acefe10"},{url:"lib/1.1/controllers/drawer-layout.js",revision:"1f487a709e6a0a284fdf7ea3a4dd26d7"},{url:"lib/1.1/controllers/gesture-helper.js",revision:"ab579cc76b0d15a03996494602fb8268"},{url:"lib/1.1/controllers/header-auto-hide.js",revision:"cbfda69c3678e89a177f1956e83c5ab4"},{url:"lib/1.1/controllers/list_view.js",revision:"535eba11165949fd636e144a9e6d3435"},{url:"lib/1.1/controllers/mdl-button.js",revision:"c2a4ac575ee439b1e19beb42ea7d016f"},{url:"lib/1.1/controllers/mdl-checkbox.js",revision:"20911a2c2aec81f9ab42615987b21364"},{url:"lib/1.1/controllers/mdl-menu.js",revision:"4fe7db2d50efac92573c1a7097756d62"},{url:"lib/1.1/controllers/scroll-helper.js",revision:"438a1070998c61f67a0b87afc6d98cbc"},{url:"lib/1.1/controllers/view-pager.js",revision:"9db55b4420ce9745b9553375dd3c74cd"},{url:"lib/1.1/extensions/animate-css.js",revision:"f16cb7fb3162d74d7c0c58695abe5596"},{url:"lib/1.1/templates/mdl-card-image.css",revision:"5462946c03df2c00c284f4680c716125"},{url:"lib/1.1/templates/mdl-card-image.html",revision:"0536b5d14c1c83f8a2939da9ab7f2d0d"},{url:"lib/1.1/templates/mdl-card-square.css",revision:"0cd25031cce1ceb63fb6660f9249ebe3"},{url:"lib/1.1/templates/mdl-card-square.html",revision:"6a0884fea45748a54e0d6c4936f145c9"},{url:"lib/1.1/templates/mdl-card.css",revision:"d8c8685be5e6fc793835eddec3acd241"},{url:"lib/1.1/templates/mdl-card.html",revision:"8f4162c548d4eb34d2e592c499f31aa0"},{url:"manifest.json",revision:"10231bceb6bf625a754e38394f9a7f0c"},{url:"pages/docs/index.html",revision:"b4f088abefe765486f276cf7839b7175"},{url:"pages/docs/material-design-light/index.html",revision:"fe71793a0918509ba9e4baea43990169"},{url:"pages/docs/welcome/index.html",revision:"a98b8c1845bb6ae4f96b1852b2315deb"},{url:"pages/home/index.html",revision:"c0f42a989f863efc053e0547d27678f9"},{url:"pages/news-blog/europe/ageza-kericlas-rol-wije-ridi/index.html",revision:"4c76e92c44d7d6773746ec11ccdf88f5"},{url:"pages/news-blog/europe/agikuljum-ihsegec-mifhoj-biowe/index.html",revision:"6fd0a15c3315d3707e226c9a3e693698"},{url:"pages/news-blog/europe/akepo-luewi-matov-gov-tonefake/index.html",revision:"dbb3fdace8b9da6171619f2095883b33"},{url:"pages/news-blog/europe/alivo-ofwobij-fa-fojteco/index.html",revision:"7c35e02bf75c62e3db553dd3e04e9267"},{url:"pages/news-blog/europe/cesa-nak-dael-agivogit/index.html",revision:"ea210bf154041b42f23d0a9d9e516ed9"},{url:"pages/news-blog/europe/cibmu-hizihda-cecev-ladem-fido/index.html",revision:"0e8d921011042f738e960a9d7c886dc6"},{url:"pages/news-blog/europe/cud-togmota-mamis-soef/index.html",revision:"cfbcd0ad2fe3a3a08e48c92648e4c7d5"},{url:"pages/news-blog/europe/ej-zu-ditwepdi-gesjom-ciuso/index.html",revision:"0069bed545b0736b1c551e54b43901be"},{url:"pages/news-blog/europe/fe-lusfuw-ce-fici/index.html",revision:"13872a2de7d4e05515fa3add7b7b0b4c"},{url:"pages/news-blog/europe/fefeh-mosegpo-atawaj-niohi/index.html",revision:"1b580d54a94f0cf2080ec9f8f0b8cb4c"},{url:"pages/news-blog/europe/filus-dutfopos-ogedik-ifehov-o/index.html",revision:"d8427b7821b60ed944dc5a3a27274c4b"},{url:"pages/news-blog/europe/hem-huni-mi-hisgud-vedki/index.html",revision:"d603204e10597f74d33c5544bcf5d049"},{url:"pages/news-blog/europe/hifa-hujne-konconon/index.html",revision:"d93b07b2318c1330c31b84bb9c3caffc"},{url:"pages/news-blog/europe/if-kihjeh-sowokvad/index.html",revision:"438b219b59823697b0397f7f9c43fbe8"},{url:"pages/news-blog/europe/index.html",revision:"838f27a9593d0456f52aaf4091ef3e48"},{url:"pages/news-blog/europe/ko-jekkumgaj-za-ma/index.html",revision:"3abcfd9717748861334d9e1aa90955be"},{url:"pages/news-blog/europe/mimpigmef-juvowu-zuszol-na-alk/index.html",revision:"f8e9dff7359265b30b962a2ced771dc0"},{url:"pages/news-blog/europe/mokowaifo-tulkejdi-jojin-owego/index.html",revision:"c0e3cada6df49e90245e5d2cbf0ed97e"},{url:"pages/news-blog/europe/netta-gi-ov/index.html",revision:"aa4c365a78953e4de7b54e1ebdb43904"},{url:"pages/news-blog/europe/ni-losegefew-getwab/index.html",revision:"5122f91b30fe7104b697f807a1f6609c"},{url:"pages/news-blog/europe/nob-verge-ro/index.html",revision:"2fe1b985a53b3a28db271568b12b3b46"},{url:"pages/news-blog/europe/okufet-jolov-juliwuve-goed-zof/index.html",revision:"029d3224e95703bd34824b72a840bdff"},{url:"pages/news-blog/europe/pim-pa-zowhud-noswik/index.html",revision:"e61b9476003a76b37db2968ff3884cfd"},{url:"pages/news-blog/europe/pitif-un-luani-befvup/index.html",revision:"00a400493a647aeeaccb686909f0f9bf"},{url:"pages/news-blog/europe/poni-cezto-ohaveecu-azpiswe/index.html",revision:"c702baa15e8e1ef01212e71be8ee001a"},{url:"pages/news-blog/europe/re-runwo-woplos-tatoneg/index.html",revision:"3341ad21ccc9110473ce228076ac1de4"},{url:"pages/news-blog/europe/rojzigpe-gi-bosev/index.html",revision:"8cca4beedd545f6999bda87867e0e8e7"},{url:"pages/news-blog/europe/tiahatoc-behi-wivduw-idfomdu-i/index.html",revision:"757903c7f241d561deb60258a9e9b77b"},{url:"pages/news-blog/europe/uhhihzi-ne-fechoczek-seh/index.html",revision:"2adbd7b12c600f2bde49a18b37198bb4"},{url:"pages/news-blog/europe/uteib-felja-te/index.html",revision:"76b3badc866e65c847edecbe96cec6cb"},{url:"pages/news-blog/europe/vew-kobir-evesomas-naamoge/index.html",revision:"73327e56b9eb580e22a40e059fdd896c"},{url:"pages/news-blog/europe/vioje-pakmito-mepru-kocom/index.html",revision:"cd0d9236b450d4304adc5a47b341fc30"},{url:"pages/news-blog/europe/waw-powhi-dicurceh/index.html",revision:"fcdafa45e188785a59683cfb7232332d"},{url:"pages/news-blog/europe/zapuvjo-me-owugioju/index.html",revision:"dfc21c9d9cde578901921180c863a6e0"},{url:"pages/news-blog/top/an-ha-fir/index.html",revision:"952150549c57c4f165987da26f4dfc14"},{url:"pages/news-blog/top/bece-nubsow-notor-el/index.html",revision:"2b3abb899d934681d3bbe2d6b36db05e"},{url:"pages/news-blog/top/bisonigo-wi-tifi-pehce-es/index.html",revision:"259fc98401069b11d6feb2a5b5b0c08c"},{url:"pages/news-blog/top/bodmimde-puda-ete-undon/index.html",revision:"71a1576986bf5161aa258a8c8fb9b203"},{url:"pages/news-blog/top/cehhehzas-sit-taiso/index.html",revision:"98a3f67b3561142c4931612837caaaf3"},{url:"pages/news-blog/top/egeju-iwi-winzib-puopkos/index.html",revision:"f74840cd5f37a99e94c8702a7dd89f32"},{url:"pages/news-blog/top/egipeg-ovazadvef-vo-wuno/index.html",revision:"edf4d6d5b776ab9d210a02a0381070eb"},{url:"pages/news-blog/top/ejogokeg-fomzev-sepe/index.html",revision:"4321f12cbeb594296a23648167d6b972"},{url:"pages/news-blog/top/giwgauvo-zimto-wi-vor/index.html",revision:"2aff8dc4b36b341650f33348f0ff73cd"},{url:"pages/news-blog/top/go-wokrajsu-il-rufi/index.html",revision:"b50f72f4c9d8e17c8d8eeaf8406976e7"},{url:"pages/news-blog/top/hoto-edurefgow-sertil-ir/index.html",revision:"87d446f73285e9a58a1bd5774b384d87"},{url:"pages/news-blog/top/index.html",revision:"74a401322c52c20c8655a802a44affc7"},{url:"pages/news-blog/top/jitam-bofim-nec-ajged/index.html",revision:"dca1d05cd6eadc1f0bc0638a24624f46"},{url:"pages/news-blog/top/jowtic-irkih-ito-tepiz/index.html",revision:"7c4f408b4c66153bfc28ea23be59263f"},{url:"pages/news-blog/top/kitrator-pegod-zic-nennehwil/index.html",revision:"4969c62fbd01dc68dcc7f8a58e135daf"},{url:"pages/news-blog/top/laro-motit-gis-si-tuskehe/index.html",revision:"447a6e927bf6de14e8a60ad259658e78"},{url:"pages/news-blog/top/ma-hilow-gec-kaema/index.html",revision:"593844e1dba9b3a562075f8631a82eac"},{url:"pages/news-blog/top/murja-ge-lesgo-odagouj/index.html",revision:"212dc70540e3e397e16f405141f0c904"},{url:"pages/news-blog/top/ne-pob-ehseto-vo/index.html",revision:"da5b5db77a4d6aad9758f008c27f205f"},{url:"pages/news-blog/top/og-wo-hiveh-levewi/index.html",revision:"7f0e7561c4421a3fca43e92f338e2104"},{url:"pages/news-blog/top/okdocgij-mu-gifep/index.html",revision:"04ec520acba9b162c29f9161fb7e2d6b"},{url:"pages/news-blog/top/padivagez-bo-ro-fap/index.html",revision:"74c5ea0a0cf0f004f9627e36603666e1"},{url:"pages/news-blog/top/pu-sihnu-te/index.html",revision:"e6d70a1800c6958835929ca3caca6b1d"},{url:"pages/news-blog/top/pucevaf-genpu-legluet-ute-uto/index.html",revision:"37914f943ed17373ca6c2c9e82b1a141"},{url:"pages/news-blog/top/rec-tozzikjep-da-ujman/index.html",revision:"a45b80fade7f74a7f14511ac359ad7bd"},{url:"pages/news-blog/top/ridadte-togebtu-ca-wimma/index.html",revision:"c8f85878a1e3fcabaaa50433f821f785"},{url:"pages/news-blog/top/romene-loat-ehasopil/index.html",revision:"5614d10b23830f559431d5ee1dcace4e"},{url:"pages/news-blog/top/sej-resocu-du-ewosic/index.html",revision:"adc0628be23426aee341e760ea5f4d73"},{url:"pages/news-blog/top/soziz-vi-fove-ok/index.html",revision:"7b6c1150906e7a873c0489cfa1573e2b"},{url:"pages/news-blog/top/teac-tospepip-hif-afu/index.html",revision:"48197a35ed96c4cf18da575fc43244e5"},{url:"pages/news-blog/top/varocpen-re-muteb-evleges/index.html",revision:"edfa16921d8c1015cb58b6d3452f56ae"},{url:"pages/news-blog/top/vidaifu-rowi-calkis-owoze-loc/index.html",revision:"6ba8845f1803e38df08a910ea2ac41cf"},{url:"pages/news-blog/top/wicvim-lesec-dicaw-sitilu/index.html",revision:"3db0a9c3e471e050e85d47df9cb591ed"},{url:"pages/news-blog/top/zel-cusjiv-atoega-fuuh/index.html",revision:"abf34aa88f210b87d1871308724f0a07"},{url:"pages/news-blog/travel/cek-takuruh-aj-covtowre-so/index.html",revision:"6d848d65903f755f4c195094fec3e6f9"},{url:"pages/news-blog/travel/cukurko-vomamo-zireggav-iltich/index.html",revision:"788d33559f0d5ce93aeb69c5a86ea8a7"},{url:"pages/news-blog/travel/dikwov-paiku-zudcec-ereco/index.html",revision:"1c10fc33653ce3c65f5ed99593a81ef0"},{url:"pages/news-blog/travel/ene-daotu-ra-rimooj/index.html",revision:"a92efa41508f5ef0b326842d80b5d94b"},{url:"pages/news-blog/travel/fifval-mi-enbatcif/index.html",revision:"e478dcf2cfaa56d39198297cc51fa7d5"},{url:"pages/news-blog/travel/gipime-zovaref-nenbog-pontil/index.html",revision:"62d06f6ab61d47590ed56f8ef6a396f6"},{url:"pages/news-blog/travel/gocsole-moemu-ejir-totcos/index.html",revision:"93517e05c00e87622f1d5bf40d71badb"},{url:"pages/news-blog/travel/gomog-gopow-elmi/index.html",revision:"f071b426b9dfb61057fd93baed86c60f"},{url:"pages/news-blog/travel/hiwow-juiki-fenu-zifatimo/index.html",revision:"3ded426d5b2d36ffea32baa5346b9acf"},{url:"pages/news-blog/travel/ihuco-cigew-kijsig-giwe/index.html",revision:"e7011e035e892bea0ab5647cf882255f"},{url:"pages/news-blog/travel/index.html",revision:"d0587a567c630220d29e3a0d84e1ffda"},{url:"pages/news-blog/travel/ken-ma-rotid/index.html",revision:"42d657a2018e066bc979289dcea8c858"},{url:"pages/news-blog/travel/kokmep-ugepowop-vuhfajij-zotar/index.html",revision:"d98d6f6b166c236e2d748ddb56e0c807"},{url:"pages/news-blog/travel/liv-mejcon-icgigfo-hudiza/index.html",revision:"3d7814f06281168b70b962ae7c9e4cc3"},{url:"pages/news-blog/travel/luravot-awvo-hofne/index.html",revision:"b3eccf585433a50901812f50e69e53f9"},{url:"pages/news-blog/travel/nipos-locjo-omha/index.html",revision:"328f5244ad77520bd6e8864cdf2c44b6"},{url:"pages/news-blog/travel/oglob-agpi-ok-wanrifu-reffo/index.html",revision:"6a7b0f1c833b2b45bbd6cfd44c982554"},{url:"pages/news-blog/travel/olubo-matecpi-is/index.html",revision:"98a0b9d85ebb1269f44413978c020b5d"},{url:"pages/news-blog/travel/pe-fehde-tiol-re/index.html",revision:"bb8dfe91d125365b3d0467684162eec9"},{url:"pages/news-blog/travel/popokno-dozo-jekosus-murmom/index.html",revision:"c875390660f27ea7b6f19a5beed0ae17"},{url:"pages/news-blog/travel/retgim-ot-ed-loka/index.html",revision:"ca7049b56f51ec8b70cf87df0bb8224a"},{url:"pages/news-blog/travel/rez-virda-uroruzso-zocivo/index.html",revision:"194690a79f6a3dae7df68df95a25512f"},{url:"pages/news-blog/travel/rosewofo-lenehak-giha-ojtu-kip/index.html",revision:"11460415ce2ae56088507b8cdb565806"},{url:"pages/news-blog/travel/ruz-za-jeckeh/index.html",revision:"0afd0f4999f16b02666dfb4c4b70a29a"},{url:"pages/news-blog/travel/sekusi-fimtik-oh/index.html",revision:"93bfc884fd133285f3fda87bd0d48967"},{url:"pages/news-blog/travel/ser-esunok-ref-winug/index.html",revision:"c82091adc26a7972aa07c8e841e093dd"},{url:"pages/news-blog/travel/uj-wode-tifip-godcuv/index.html",revision:"9ae5ab2695671be1219a39157b49249d"},{url:"pages/news-blog/travel/vadmot-jouj-padoz/index.html",revision:"4e057a596272ca3dee9e2cffe753fbfd"},{url:"pages/news-blog/travel/vehesi-fultefco-agten-rotog-ot/index.html",revision:"e6bd5f80a0bc36bbf62446194a8a76ed"},{url:"pages/news-blog/travel/wid-kiraake-arooga-jefzo/index.html",revision:"cd073da82108ac7a582c8c062d761baf"},{url:"pages/news-blog/travel/wot-icoziw-fuv-jelmi-ejanow/index.html",revision:"0fd628d2c9451c08d5511b45ed8d8119"},{url:"pages/news-blog/travel/zab-oj-gacwis-foso-bowew/index.html",revision:"eb1a8ffc1ef6daf31992d57b4a6491dd"},{url:"pages/news-blog/travel/ze-ijoto-jazane-hiute/index.html",revision:"c6c0e03885b2ca80febd2d506e0e8866"},{url:"pages/news-blog/travel/zek-lo-ji/index.html",revision:"1a4acdc4fe3cbd57a1139f20564fcb03"},{url:"pages/news-blog/world/acrah-ne-rep-id/index.html",revision:"59596ee01f7fbb895e27ece6a6825577"},{url:"pages/news-blog/world/aji-guiro-ilojis-ogepevaf/index.html",revision:"9710fa8bce8dc4573c92d3045ec4e3fa"},{url:"pages/news-blog/world/asoodfi-jojkipi-jagif-edirar/index.html",revision:"4d1c819e17aa6e1da0334692cea07d5c"},{url:"pages/news-blog/world/bepnu-dihik-pil/index.html",revision:"27ca507b51873d6cd84ba818c79f0810"},{url:"pages/news-blog/world/bifnujten-kev-gulneh-sop-gi/index.html",revision:"7ee6710f33abb46a74991b3fdc03aee9"},{url:"pages/news-blog/world/catin-guzsad-jibal-awvoz/index.html",revision:"d6438ae4d74a03434af7f3440977926f"},{url:"pages/news-blog/world/cen-aweebke-sefje-gijud/index.html",revision:"48cfc97a95be606481048c4b571cb7a5"},{url:"pages/news-blog/world/dojbe-amo-insivti-alavodvu/index.html",revision:"e4b772acf5295777577a4a7423843d39"},{url:"pages/news-blog/world/ew-egure-tecur/index.html",revision:"430a1eabba462626f26326f57488225d"},{url:"pages/news-blog/world/feh-podim-lorina-epeled-fo/index.html",revision:"8ccfcec811cd4b6f7a03deb3e462cfd4"},{url:"pages/news-blog/world/fu-urahih-ufoihu-onehge-girlo/index.html",revision:"17d9ba15181497f737d6f559a8fd2a98"},{url:"pages/news-blog/world/ger-nevikac-riprip-niem-kacipp/index.html",revision:"4b5e4cd5983c013e7f7291fa252affe3"},{url:"pages/news-blog/world/gijepoj-batopu-himamu-jegew/index.html",revision:"30f429ba8d29f1d84f1431097c32f4a0"},{url:"pages/news-blog/world/gotu-zina-lamrib-jiv/index.html",revision:"2f92ac9f7693038870d87de0af250b04"},{url:"pages/news-blog/world/index.html",revision:"10f2b257ed345202e14c468bc26bcb33"},{url:"pages/news-blog/world/jil-has-noaju/index.html",revision:"13c783106cf9c60d8dc564a504a70250"},{url:"pages/news-blog/world/jukwi-geric-do-jintaj/index.html",revision:"a765bc1eae1d9695ec451c99277273b5"},{url:"pages/news-blog/world/li-ig-zi-reca/index.html",revision:"3d1d2bac625f8e6a09dde088cb5d7c7e"},{url:"pages/news-blog/world/lufke-udedu-zec-jowikto/index.html",revision:"2304b7eb89fe6f682e37ff8132327b84"},{url:"pages/news-blog/world/mosol-hihu-wovu-edri-waihri/index.html",revision:"1d25fceb4be5891a9dee1f16197b4a90"},{url:"pages/news-blog/world/muspu-avomec-fobmid-ekoso-mizo/index.html",revision:"1f522079168d476453773d5cb8410646"},{url:"pages/news-blog/world/nob-kiah-rel-huhev/index.html",revision:"9f1e551824c0837c393567f005ddaa90"},{url:"pages/news-blog/world/nuhehaj-ret-puphothu-fezedi/index.html",revision:"f2a67476648097a22acc992ab38adb09"},{url:"pages/news-blog/world/oguvev-naj-necka-aki/index.html",revision:"8090a07ce5f9c3cd128cbe48fc72e1cb"},{url:"pages/news-blog/world/rifo-tijkin-se-aken/index.html",revision:"44a9669f9e63c177ab933c40d3a0e006"},{url:"pages/news-blog/world/ritbiv-sewlod-wokupac-ad-orkej/index.html",revision:"6fbd5a051d90b3b030fac7ca1c88464b"},{url:"pages/news-blog/world/se-setco-vawikfo-az/index.html",revision:"a3f8a3f11a7e4c64f9884cf9e2857b6b"},{url:"pages/news-blog/world/sicerje-gihdepki-heh-cemiroug-/index.html",revision:"d1dfea8ca72bab95e1e8130ebc4b8ad9"},{url:"pages/news-blog/world/tiga-wodo-uhitat-co-gebubop/index.html",revision:"5e04ab17dee5260ec61bc62e467daf28"},{url:"pages/news-blog/world/til-vo-fohiv/index.html",revision:"207909342432c94c4f60263fbadb16c1"},{url:"pages/news-blog/world/tolev-akfe-bebob/index.html",revision:"7e71542fb3d261b8daf88bc1be1ff5a6"},{url:"pages/news-blog/world/um-legajofoh-zos-voif/index.html",revision:"e6f61c5154e20c4e85ed4dd6e3c6729e"},{url:"pages/news-blog/world/ura-jufe-kub/index.html",revision:"cff292382909293827a80f86a2f5a57d"},{url:"pages/news-blog/world/vutco-ko-vacbonzo-ug/index.html",revision:"399de779c4eff58bdd641d767a17781f"},{url:"pages/search/index.html",revision:"7eae9357a0590d645e40b9612e264f8b"},{url:"pages/templates/another-post/index.html",revision:"d592b4fa3625099febf303c0512b8aa9"},{url:"pages/templates/index.html",revision:"b546fc633fe5e6326cdb3eb4594d1c2c"},{url:"pages/templates/my-first-post/index.html",revision:"f70dfe7a1d5115dcf4d3ce4b22e8e3fe"},{url:"pages/templates/news-blog/index.html",revision:"7510d4d348953c5f1a0b4b8616cbbdf1"},{url:"search-index.json",revision:"8fb5a8f5437a72dddf7d0ddc2b949922"},{url:"images/icons/desktop/android-chrome-192x192.png",revision:"93d5e77e9ee1e9c6975f3c0bd1a21574"},{url:"images/icons/desktop/android-chrome-512x512.png",revision:"6df83c6c13be17a2ea70d29e340c5ddb"},{url:"images/icons/desktop/apple-touch-icon.png",revision:"2b78ed332644d19d9779c069c5842538"},{url:"images/icons/desktop/favicon-16x16.png",revision:"6c047cdbd3d5c4c962a3a692a5025d27"},{url:"images/icons/desktop/favicon-32x32.png",revision:"7413528d5e59c22af1ccf38187bc950b"},{url:"images/icons/desktop/mstile-150x150.png",revision:"540caa78f56655281b2d4b17ad52f2ce"},{url:"images/icons/desktop/safari-pinned-tab.svg",revision:"a0ab2c612c6a5019b3e4ae7c38043b98"},{url:"images/icons/icon-128x128.png",revision:"69f3f1f3f956bb71f35ce66b7717e1a0"},{url:"images/icons/icon-144x144.png",revision:"45e24db8671c41ca95c440df0cadf2a3"},{url:"images/icons/icon-152x152.png",revision:"e0867fd6e9bc25afd831b1eabdd83f8d"},{url:"images/icons/icon-192x192.png",revision:"cf383c3d4500d31884326cc9d53a8c3a"},{url:"images/icons/icon-384x384.png",revision:"19007d16c73f442f44c926beddc34637"},{url:"images/icons/icon-512x512.png",revision:"274298ed7162d12352fa836d3a2cb11e"},{url:"images/icons/icon-72x72.png",revision:"919cb6b3e8a1b5d0c963921dba0e4388"},{url:"images/icons/icon-96x96.png",revision:"5547ad1a33334c0f5c04f6de1f6d2c52"},{url:"images/menu_open_black_48dp.svg",revision:"6a65883ec5d5058af76c169ed17edc71"},{url:"images/page-speed-insight-icon.png",revision:"85f446592394b827475c3c5d11f66924"},{url:"images/profile-icon.png",revision:"56f0c7de57fdae6d0a9ddc43448b6dff"},{url:"images/zuix-logo.svg",revision:"48e6defd57440a6d0f0d12241ff9d6c5"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET"),e.registerRoute(/\.(?:html|json|js|css)$/,new e.CacheFirst({cacheName:"default",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
