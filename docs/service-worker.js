if(!self.define){let e,i={};const a=(a,o)=>(a=new URL(a+".js",o).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(o,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let l={};const n=e=>a(e,d),r={module:{uri:d},exports:l,require:n};i[d]=Promise.all(o.map((e=>r[e]||n(e)))).then((e=>(s(...e),l)))}}define(["./workbox-dce15169"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app/pages/view-pager/about.css",revision:"cb44e2e570d6a3fb18577212697d8704"},{url:"app/pages/view-pager/about.html",revision:"ab64efb3c0790629d87839bd5aff263a"},{url:"app/pages/view-pager/notifications.css",revision:"8c6b5be647dc8bcf2e4a733512fd5f23"},{url:"app/pages/view-pager/notifications.html",revision:"2cbc84c36eb5ce6ae0cb00659e964fef"},{url:"app/pages/view-pager/search.css",revision:"8c6b5be647dc8bcf2e4a733512fd5f23"},{url:"app/pages/view-pager/search.html",revision:"580882fe15f0c1240a72e370bbe8f9d3"},{url:"app/shared/input_box.css",revision:"2d60dd9628549fcde08948637584af45"},{url:"app/shared/input_box.html",revision:"5ce442655756ba82537b075221a1310a"},{url:"app/shared/input_box.js",revision:"f9f368957becacb5d651043dd793da6f"},{url:"config.js",revision:"23ee62c2638c26ddd93deeda5721fc10"},{url:"index.html",revision:"ee1e54f135ba573f597808e844b1d35a"},{url:"js/prism/prism.css",revision:"343ab6c1b213d253d82d6c7afad86079"},{url:"js/prism/prism.js",revision:"0dd62d25c1a7fe66e4c7256e8ada30b5"},{url:"js/zuix/animate-css.js",revision:"7db39f961eb3b537fa15888331b4712d"},{url:"js/zuix/zuix-bundler.js",revision:"45771ed96f3d8f5e3a4864e85db83bb4"},{url:"js/zuix/zuix-bundler.min.js",revision:"bc3029bde1667107ab43d6fe703db850"},{url:"js/zuix/zuix-bundler.module.js",revision:"1e062e3bae339edc4e2ac9f61a2385fc"},{url:"js/zuix/zuix-bundler.module.min.js",revision:"a11fd2cf449453de9553b6feb4a19fbd"},{url:"js/zuix/zuix.js",revision:"4de93ac56a5b135c23766873919c84de"},{url:"js/zuix/zuix.min.js",revision:"ff6c978a7d41d6946797174b40f3f425"},{url:"js/zuix/zuix.module.js",revision:"4c74ad0e55df90445ae7747bc748502a"},{url:"js/zuix/zuix.module.min.js",revision:"4d1310ed62a9068ebb53170f41c4eb3c"},{url:"lib/1.1/components/context-menu.css",revision:"c6a8ce930271984f9fcaf3eaa85bdf25"},{url:"lib/1.1/components/context-menu.html",revision:"b6d6672432b81bdc209c5d9e07ef2458"},{url:"lib/1.1/components/context-menu.js",revision:"f2ee385a2a0907b5ed4cf7060068334a"},{url:"lib/1.1/components/hamburger-icon.css",revision:"dd81a60d1bfa7bd4463bb551eae81e35"},{url:"lib/1.1/components/hamburger-icon.html",revision:"14b9b9c25ea92bd9660a2e6ea53c1b0d"},{url:"lib/1.1/components/hamburger-icon.js",revision:"44cf41b6ac1d2dd49f7bf004a5d628a4"},{url:"lib/1.1/components/media-browser.css",revision:"e3c8aeadb91484d0a0fc984e24b469b1"},{url:"lib/1.1/components/media-browser.html",revision:"8c664dc6772bd13ca0660a752986b1d5"},{url:"lib/1.1/components/media-browser.js",revision:"aff895f205bf4a3ac8ae4e8aa0e87678"},{url:"lib/1.1/components/media-browser/article.css",revision:"e7f0f5dbe26e76dcd13f7973dc768308"},{url:"lib/1.1/components/media-browser/article.html",revision:"817ccb127ce00476644de9f7a25611e5"},{url:"lib/1.1/components/media-browser/image.css",revision:"3a1499bcedfd546b1e3e4de0c645bf8d"},{url:"lib/1.1/components/media-browser/image.html",revision:"0a6a67e7280fa668ffb1ed016bec7780"},{url:"lib/1.1/components/media-browser/image.js",revision:"b12865e8955465caed5139dd16200c77"},{url:"lib/1.1/components/media-browser/video.css",revision:"d01c44cf05b7832ec57d6181159c52fa"},{url:"lib/1.1/components/media-browser/video.html",revision:"934e6febc1d7c6c64ef99cddf0a6f99f"},{url:"lib/1.1/components/media-browser/video.js",revision:"d596ec76a6c1d46b0541abdb9bf05c3b"},{url:"lib/1.1/components/menu-overlay.css",revision:"5a726d9ce4630f2eacfdf931f1a5b733"},{url:"lib/1.1/components/menu-overlay.html",revision:"220c3005881852f0387e61ea8ac2a6c5"},{url:"lib/1.1/components/menu-overlay.js",revision:"2f191342bb867e3669cc28791acefe10"},{url:"lib/1.1/controllers/drawer-layout.js",revision:"1f487a709e6a0a284fdf7ea3a4dd26d7"},{url:"lib/1.1/controllers/gesture-helper.js",revision:"ab579cc76b0d15a03996494602fb8268"},{url:"lib/1.1/controllers/header-auto-hide.js",revision:"cbfda69c3678e89a177f1956e83c5ab4"},{url:"lib/1.1/controllers/list_view.js",revision:"535eba11165949fd636e144a9e6d3435"},{url:"lib/1.1/controllers/mdl-button.js",revision:"c2a4ac575ee439b1e19beb42ea7d016f"},{url:"lib/1.1/controllers/mdl-checkbox.js",revision:"20911a2c2aec81f9ab42615987b21364"},{url:"lib/1.1/controllers/mdl-menu.js",revision:"4fe7db2d50efac92573c1a7097756d62"},{url:"lib/1.1/controllers/scroll-helper.js",revision:"438a1070998c61f67a0b87afc6d98cbc"},{url:"lib/1.1/controllers/view-pager.js",revision:"9db55b4420ce9745b9553375dd3c74cd"},{url:"lib/1.1/extensions/animate-css.js",revision:"f16cb7fb3162d74d7c0c58695abe5596"},{url:"lib/1.1/templates/mdl-card-image.css",revision:"5462946c03df2c00c284f4680c716125"},{url:"lib/1.1/templates/mdl-card-image.html",revision:"0536b5d14c1c83f8a2939da9ab7f2d0d"},{url:"lib/1.1/templates/mdl-card-square.css",revision:"0cd25031cce1ceb63fb6660f9249ebe3"},{url:"lib/1.1/templates/mdl-card-square.html",revision:"6a0884fea45748a54e0d6c4936f145c9"},{url:"lib/1.1/templates/mdl-card.css",revision:"d8c8685be5e6fc793835eddec3acd241"},{url:"lib/1.1/templates/mdl-card.html",revision:"8f4162c548d4eb34d2e592c499f31aa0"},{url:"manifest.json",revision:"10231bceb6bf625a754e38394f9a7f0c"},{url:"pages/docs/index.html",revision:"0e03b574af8b66273f485c8d8a062b83"},{url:"pages/docs/material-design-light/index.html",revision:"2bde0fab20a46fa45fd5b9658567e2e3"},{url:"pages/docs/welcome/index.html",revision:"95911395bf91d3d1325fc90e6abd2d04"},{url:"pages/home/index.html",revision:"e1e9836d5ca99b9f298f40bb5b535617"},{url:"pages/news-blog/europe/ageza-kericlas-rol-wije-ridi/index.html",revision:"9e50274f2f13f19dc242ca0844015215"},{url:"pages/news-blog/europe/agikuljum-ihsegec-mifhoj-biowe/index.html",revision:"0bc1e95e074811aa3594c7e9e4b223cb"},{url:"pages/news-blog/europe/akepo-luewi-matov-gov-tonefake/index.html",revision:"dea98f5f25b15f4b0cce4ae950f69e2a"},{url:"pages/news-blog/europe/alivo-ofwobij-fa-fojteco/index.html",revision:"f4d8d0365da9f2fbc9331efca7dcca23"},{url:"pages/news-blog/europe/cesa-nak-dael-agivogit/index.html",revision:"c1efb5359a938713e2129ef1724104fe"},{url:"pages/news-blog/europe/cibmu-hizihda-cecev-ladem-fido/index.html",revision:"6e6fce52a2e8a5626aafe5bc83fadcd3"},{url:"pages/news-blog/europe/cud-togmota-mamis-soef/index.html",revision:"636324682a688f7ab5191ed894799863"},{url:"pages/news-blog/europe/ej-zu-ditwepdi-gesjom-ciuso/index.html",revision:"14d22a2d40d6eaaf40958b854b550b86"},{url:"pages/news-blog/europe/fe-lusfuw-ce-fici/index.html",revision:"ad28e912a88a9018663d3e53cb9005f3"},{url:"pages/news-blog/europe/fefeh-mosegpo-atawaj-niohi/index.html",revision:"81d36eb09fba8540d8a10c19373b467f"},{url:"pages/news-blog/europe/filus-dutfopos-ogedik-ifehov-o/index.html",revision:"081f0703a499e04512e734012d37f7a7"},{url:"pages/news-blog/europe/hem-huni-mi-hisgud-vedki/index.html",revision:"3494c25358e9004543500e45a85749d3"},{url:"pages/news-blog/europe/hifa-hujne-konconon/index.html",revision:"3525f6c02c2b2a3899d123825be24ebb"},{url:"pages/news-blog/europe/if-kihjeh-sowokvad/index.html",revision:"9c07932cf23ac952eba3eff165c73bff"},{url:"pages/news-blog/europe/index.html",revision:"838f27a9593d0456f52aaf4091ef3e48"},{url:"pages/news-blog/europe/ko-jekkumgaj-za-ma/index.html",revision:"0cabab6c250b1c68f9dec265b3879b03"},{url:"pages/news-blog/europe/mimpigmef-juvowu-zuszol-na-alk/index.html",revision:"11050b05aef7ba0226dbf89e3ea907b7"},{url:"pages/news-blog/europe/mokowaifo-tulkejdi-jojin-owego/index.html",revision:"815c17e03a7222725c6e7c184a6f54ce"},{url:"pages/news-blog/europe/netta-gi-ov/index.html",revision:"4f469a9df03bbac6d05b772f674e88f3"},{url:"pages/news-blog/europe/ni-losegefew-getwab/index.html",revision:"d3f49181624dd4c041167537b3f7b888"},{url:"pages/news-blog/europe/nob-verge-ro/index.html",revision:"02d6a61caf2dd7a58ab37fc25d03b1ae"},{url:"pages/news-blog/europe/okufet-jolov-juliwuve-goed-zof/index.html",revision:"d49d7d27b03f302443681a2f835a205c"},{url:"pages/news-blog/europe/pim-pa-zowhud-noswik/index.html",revision:"5272aef1daf6499442837a12763e81c1"},{url:"pages/news-blog/europe/pitif-un-luani-befvup/index.html",revision:"62feb7f77114b9aad41dacc0f04feaa1"},{url:"pages/news-blog/europe/poni-cezto-ohaveecu-azpiswe/index.html",revision:"27df4d8cec042c60d73e248ed4d469cc"},{url:"pages/news-blog/europe/re-runwo-woplos-tatoneg/index.html",revision:"1c564679e19d7bfc16122d3c672f3824"},{url:"pages/news-blog/europe/rojzigpe-gi-bosev/index.html",revision:"de879a0719ea27fc1f47ad318229a1fb"},{url:"pages/news-blog/europe/tiahatoc-behi-wivduw-idfomdu-i/index.html",revision:"f985e5cbac3b04d892c5faf65447f489"},{url:"pages/news-blog/europe/uhhihzi-ne-fechoczek-seh/index.html",revision:"526ada94faedd63deb576ab1e3f00fe8"},{url:"pages/news-blog/europe/uteib-felja-te/index.html",revision:"f8e57c7352b85e53ce412fd5716294c7"},{url:"pages/news-blog/europe/vew-kobir-evesomas-naamoge/index.html",revision:"68b41cc55d60771bc72096b14dba6df4"},{url:"pages/news-blog/europe/vioje-pakmito-mepru-kocom/index.html",revision:"dd7bb7ce553310414e3a1489128d5cc5"},{url:"pages/news-blog/europe/waw-powhi-dicurceh/index.html",revision:"89863944341c64bb66ed4e78c65f9f31"},{url:"pages/news-blog/europe/zapuvjo-me-owugioju/index.html",revision:"58e98f2143e24789f493037494b059d4"},{url:"pages/news-blog/index.html",revision:"0cee73eea3b6ad45d89ccf7e8aab4873"},{url:"pages/news-blog/top/an-ha-fir/index.html",revision:"10ef2302dda7b5f6e6d0636b8a04f8c3"},{url:"pages/news-blog/top/bece-nubsow-notor-el/index.html",revision:"1eda50a02ca08be1616652130ba5d0f5"},{url:"pages/news-blog/top/bisonigo-wi-tifi-pehce-es/index.html",revision:"a2dd2842a0d2d6a7cc98cf95a5458784"},{url:"pages/news-blog/top/bodmimde-puda-ete-undon/index.html",revision:"d9aec583adf9a2a5144cf6f0a21b33b8"},{url:"pages/news-blog/top/cehhehzas-sit-taiso/index.html",revision:"55bf389a94052e08ef633ec9cab8ff67"},{url:"pages/news-blog/top/egeju-iwi-winzib-puopkos/index.html",revision:"3eecb13378c350babf6405d9933df766"},{url:"pages/news-blog/top/egipeg-ovazadvef-vo-wuno/index.html",revision:"fe3bae8fa6dcf2b5ad7ed831fcbb3b25"},{url:"pages/news-blog/top/ejogokeg-fomzev-sepe/index.html",revision:"3b6874653618d073ee3d7f640766da50"},{url:"pages/news-blog/top/giwgauvo-zimto-wi-vor/index.html",revision:"c9b3791218080c55e21c46c55a2a4380"},{url:"pages/news-blog/top/go-wokrajsu-il-rufi/index.html",revision:"2d42f44dfd4ca3d1683d05ff32cc51e4"},{url:"pages/news-blog/top/hoto-edurefgow-sertil-ir/index.html",revision:"77d55c3971624c7e0dd9899fbf917f5d"},{url:"pages/news-blog/top/index.html",revision:"74a401322c52c20c8655a802a44affc7"},{url:"pages/news-blog/top/jitam-bofim-nec-ajged/index.html",revision:"9ebde2de83c803ca2b3a94c96098adfe"},{url:"pages/news-blog/top/jowtic-irkih-ito-tepiz/index.html",revision:"ddf1404257e87969cf21ece10a855934"},{url:"pages/news-blog/top/kitrator-pegod-zic-nennehwil/index.html",revision:"1118fa94d3f7cd8d1fe35b603290f063"},{url:"pages/news-blog/top/laro-motit-gis-si-tuskehe/index.html",revision:"c7d1d7c38068a7869a7b31b6f2bac2ad"},{url:"pages/news-blog/top/ma-hilow-gec-kaema/index.html",revision:"928c8da8c4593a399c174be0788ec3eb"},{url:"pages/news-blog/top/murja-ge-lesgo-odagouj/index.html",revision:"8ba97951c71da525f43c29ce1335b886"},{url:"pages/news-blog/top/ne-pob-ehseto-vo/index.html",revision:"4a6c51c16aa7009a25df4eae07f8faa5"},{url:"pages/news-blog/top/og-wo-hiveh-levewi/index.html",revision:"f1a0b9209c561d82fee3ca7486f2fdfd"},{url:"pages/news-blog/top/okdocgij-mu-gifep/index.html",revision:"cc4c453048d7139bddb58066b426fb0a"},{url:"pages/news-blog/top/padivagez-bo-ro-fap/index.html",revision:"e18f0f1e34e0f0d0bed26975f62fe6e4"},{url:"pages/news-blog/top/pu-sihnu-te/index.html",revision:"571d6361e6232b81dc53833f92758bea"},{url:"pages/news-blog/top/pucevaf-genpu-legluet-ute-uto/index.html",revision:"36edc0c51d12bca90d5c0815535e8e97"},{url:"pages/news-blog/top/rec-tozzikjep-da-ujman/index.html",revision:"d81525acc647027e8207c5083c85a44a"},{url:"pages/news-blog/top/ridadte-togebtu-ca-wimma/index.html",revision:"f594e7d0926f950e08e3dc85c23ad370"},{url:"pages/news-blog/top/romene-loat-ehasopil/index.html",revision:"48114b7c542200516cb73dead8690cfb"},{url:"pages/news-blog/top/sej-resocu-du-ewosic/index.html",revision:"e927d675aa8f28fe540db013e1f99b55"},{url:"pages/news-blog/top/soziz-vi-fove-ok/index.html",revision:"84f3a55bf9efc88bcd33ac18f8710070"},{url:"pages/news-blog/top/teac-tospepip-hif-afu/index.html",revision:"afdd6a421f3b2bb3f94892f38082346a"},{url:"pages/news-blog/top/varocpen-re-muteb-evleges/index.html",revision:"de16d1cb287aa544d7d927f04ac404e8"},{url:"pages/news-blog/top/vidaifu-rowi-calkis-owoze-loc/index.html",revision:"dff9758f41e0e291a3b577dc320f8cf9"},{url:"pages/news-blog/top/wicvim-lesec-dicaw-sitilu/index.html",revision:"6bbdbe4f319ef8b26cb59e3f7982852c"},{url:"pages/news-blog/top/zel-cusjiv-atoega-fuuh/index.html",revision:"eef6fdc2a74b683e9e8af95b8ab692c1"},{url:"pages/news-blog/travel/cek-takuruh-aj-covtowre-so/index.html",revision:"4e886277fd6df7b8d19600d9edaf04d1"},{url:"pages/news-blog/travel/cukurko-vomamo-zireggav-iltich/index.html",revision:"57ef6cae02add8e1357682763ecc694c"},{url:"pages/news-blog/travel/dikwov-paiku-zudcec-ereco/index.html",revision:"31b7248cb3e09ed06e5f9738ea459f56"},{url:"pages/news-blog/travel/ene-daotu-ra-rimooj/index.html",revision:"4ed5541a351d309d6a5aa840a2d9cd0c"},{url:"pages/news-blog/travel/fifval-mi-enbatcif/index.html",revision:"b07d9a6442e86e2f27e774c160416b53"},{url:"pages/news-blog/travel/gipime-zovaref-nenbog-pontil/index.html",revision:"da763a83de66c46b79cdd5d77b8d2b85"},{url:"pages/news-blog/travel/gocsole-moemu-ejir-totcos/index.html",revision:"070b6236c4706c6544928bde830ada26"},{url:"pages/news-blog/travel/gomog-gopow-elmi/index.html",revision:"91a70477344427e19eb53e19e62759e0"},{url:"pages/news-blog/travel/hiwow-juiki-fenu-zifatimo/index.html",revision:"5b1e3b5ab1fb209fc58ffd554fdd4179"},{url:"pages/news-blog/travel/ihuco-cigew-kijsig-giwe/index.html",revision:"a5ec822f4993f4454daa75b6154e79d7"},{url:"pages/news-blog/travel/index.html",revision:"d0587a567c630220d29e3a0d84e1ffda"},{url:"pages/news-blog/travel/ken-ma-rotid/index.html",revision:"c16a8e6d849fc4aaf160dc22830d493b"},{url:"pages/news-blog/travel/kokmep-ugepowop-vuhfajij-zotar/index.html",revision:"37a0403a3873a94e74ee0f3af8cc4715"},{url:"pages/news-blog/travel/liv-mejcon-icgigfo-hudiza/index.html",revision:"27c58da124fcd93ad8b4f88482ade8b7"},{url:"pages/news-blog/travel/luravot-awvo-hofne/index.html",revision:"8ae235952f93ddc8798f27243e980391"},{url:"pages/news-blog/travel/nipos-locjo-omha/index.html",revision:"c70188092c384fa8a8630349e96e0f45"},{url:"pages/news-blog/travel/oglob-agpi-ok-wanrifu-reffo/index.html",revision:"4e6e4ab492a9f57e6a3331a68a79ab39"},{url:"pages/news-blog/travel/olubo-matecpi-is/index.html",revision:"ab47e07af884141c9c5c3732b81aacd4"},{url:"pages/news-blog/travel/pe-fehde-tiol-re/index.html",revision:"059837b0b3c4c8f2799491aee6d15dce"},{url:"pages/news-blog/travel/popokno-dozo-jekosus-murmom/index.html",revision:"c971fd5dde49f03f8a4d9214d65500e1"},{url:"pages/news-blog/travel/retgim-ot-ed-loka/index.html",revision:"b25fc2c0791d4ae945de3b0a97a5892e"},{url:"pages/news-blog/travel/rez-virda-uroruzso-zocivo/index.html",revision:"871327c281576a7881670101f8ae1d5f"},{url:"pages/news-blog/travel/rosewofo-lenehak-giha-ojtu-kip/index.html",revision:"c15387a0cf93bc1889f00d9404dd4409"},{url:"pages/news-blog/travel/ruz-za-jeckeh/index.html",revision:"01c052edd714cf185b93cf06e8fa50ce"},{url:"pages/news-blog/travel/sekusi-fimtik-oh/index.html",revision:"9d78f94d4dae3d1bce1cd5dafc49d143"},{url:"pages/news-blog/travel/ser-esunok-ref-winug/index.html",revision:"0aa975e74382a35147ae08368c813376"},{url:"pages/news-blog/travel/uj-wode-tifip-godcuv/index.html",revision:"fcb0c7b857214f076f4f36072ff324cb"},{url:"pages/news-blog/travel/vadmot-jouj-padoz/index.html",revision:"b54989a218c0d383420ca32523f85e34"},{url:"pages/news-blog/travel/vehesi-fultefco-agten-rotog-ot/index.html",revision:"5661524edf75d9a6d2a1e79c16f51c1a"},{url:"pages/news-blog/travel/wid-kiraake-arooga-jefzo/index.html",revision:"d230fa18541f773be5670caf0a2c3632"},{url:"pages/news-blog/travel/wot-icoziw-fuv-jelmi-ejanow/index.html",revision:"33ddbe57b9976597447736cbbd385a92"},{url:"pages/news-blog/travel/zab-oj-gacwis-foso-bowew/index.html",revision:"e2f7bccd5e0b252b560a3cb81d659fae"},{url:"pages/news-blog/travel/ze-ijoto-jazane-hiute/index.html",revision:"ce6d478ed291ba404ad06303a07f15b3"},{url:"pages/news-blog/travel/zek-lo-ji/index.html",revision:"63bf035ab84f19126d83c4bb213364e9"},{url:"pages/news-blog/world/acrah-ne-rep-id/index.html",revision:"82db7b61855091674ded73d3b21d15a3"},{url:"pages/news-blog/world/aji-guiro-ilojis-ogepevaf/index.html",revision:"ba3fc36e3215cfbd954f499a228e737a"},{url:"pages/news-blog/world/asoodfi-jojkipi-jagif-edirar/index.html",revision:"3cf776d34cf5be155dd3508eccb2b7f7"},{url:"pages/news-blog/world/bepnu-dihik-pil/index.html",revision:"87fa8688a79eb57bf630244cc332a3dd"},{url:"pages/news-blog/world/bifnujten-kev-gulneh-sop-gi/index.html",revision:"53d8e782e7c04c53b3c8af9b5e956ded"},{url:"pages/news-blog/world/catin-guzsad-jibal-awvoz/index.html",revision:"01fb5d44e142ff1e2fe6ebe6cfae0ff4"},{url:"pages/news-blog/world/cen-aweebke-sefje-gijud/index.html",revision:"bf54d8175dbf3875cb60bc84fa9e56fa"},{url:"pages/news-blog/world/dojbe-amo-insivti-alavodvu/index.html",revision:"6654ca802ac093ffe9aa40d62281f64b"},{url:"pages/news-blog/world/ew-egure-tecur/index.html",revision:"98eac1d51235680730d20e0d259b05aa"},{url:"pages/news-blog/world/feh-podim-lorina-epeled-fo/index.html",revision:"9236754e4c98aae6cd2178994bd6897e"},{url:"pages/news-blog/world/fu-urahih-ufoihu-onehge-girlo/index.html",revision:"c597be6f5c54166918d714608df0eb43"},{url:"pages/news-blog/world/ger-nevikac-riprip-niem-kacipp/index.html",revision:"fd041d3e6d67a7ba1e442118414adfc9"},{url:"pages/news-blog/world/gijepoj-batopu-himamu-jegew/index.html",revision:"7f9820988ff435fb76f69b8a6397e0b6"},{url:"pages/news-blog/world/gotu-zina-lamrib-jiv/index.html",revision:"2d61228d456a4dba4654ca8f3689b93f"},{url:"pages/news-blog/world/index.html",revision:"10f2b257ed345202e14c468bc26bcb33"},{url:"pages/news-blog/world/jil-has-noaju/index.html",revision:"e74396e5a747804fe792b6ee8955c6ea"},{url:"pages/news-blog/world/jukwi-geric-do-jintaj/index.html",revision:"18d83c087ad587032dac06178ea18819"},{url:"pages/news-blog/world/li-ig-zi-reca/index.html",revision:"0d0673591aed46d71404b2834c2e375a"},{url:"pages/news-blog/world/lufke-udedu-zec-jowikto/index.html",revision:"b3ee8dc528a49838093c74139f312a41"},{url:"pages/news-blog/world/mosol-hihu-wovu-edri-waihri/index.html",revision:"b37d649927e4fae1acd058367cfdaf52"},{url:"pages/news-blog/world/muspu-avomec-fobmid-ekoso-mizo/index.html",revision:"4eacc3cafc3f25a6e357724f23fb4833"},{url:"pages/news-blog/world/nob-kiah-rel-huhev/index.html",revision:"be2c0a18ae7f0b863923bcf702d0c21e"},{url:"pages/news-blog/world/nuhehaj-ret-puphothu-fezedi/index.html",revision:"e74baf478a952c2092d843116d05c95d"},{url:"pages/news-blog/world/oguvev-naj-necka-aki/index.html",revision:"a6a0cc2cb136e1a574afa87c8666c884"},{url:"pages/news-blog/world/rifo-tijkin-se-aken/index.html",revision:"a5a31f7df79f04c593137a2cc639f4e4"},{url:"pages/news-blog/world/ritbiv-sewlod-wokupac-ad-orkej/index.html",revision:"e66ccde3cc82fd1f7c985426104d8876"},{url:"pages/news-blog/world/se-setco-vawikfo-az/index.html",revision:"227994758ca59a9ce3075d79b476a6f7"},{url:"pages/news-blog/world/sicerje-gihdepki-heh-cemiroug-/index.html",revision:"c7b50f8ba89e865f8778a08941754f83"},{url:"pages/news-blog/world/tiga-wodo-uhitat-co-gebubop/index.html",revision:"4834556c36065ba11de4431f7b31f3e0"},{url:"pages/news-blog/world/til-vo-fohiv/index.html",revision:"9a604b35b718f3b8e38d6166786f12f2"},{url:"pages/news-blog/world/tolev-akfe-bebob/index.html",revision:"def69691cb465530027dd6ca364973a6"},{url:"pages/news-blog/world/um-legajofoh-zos-voif/index.html",revision:"910e14deba401ec2a42d98deaf79ecd3"},{url:"pages/news-blog/world/ura-jufe-kub/index.html",revision:"3430a657d96ec2c02fb2b0ea161b15d6"},{url:"pages/news-blog/world/vutco-ko-vacbonzo-ug/index.html",revision:"eb71583295bbb93439f89c8d686472fa"},{url:"pages/search/index.html",revision:"1a38722ee01c8f4d08e779eec1356830"},{url:"pages/templates/another-post/index.html",revision:"6540b8edf3fcd53b9ed6d39c10033adc"},{url:"pages/templates/index.html",revision:"98e1ad6fb2a166243157a4199c2ff00c"},{url:"pages/templates/my-first-post/index.html",revision:"f380ed086b47813954a4d05f5741b0d0"},{url:"search-index.json",revision:"87819d057b12aa7093a7683a9377470f"},{url:"images/icons/desktop/android-chrome-192x192.png",revision:"93d5e77e9ee1e9c6975f3c0bd1a21574"},{url:"images/icons/desktop/android-chrome-512x512.png",revision:"6df83c6c13be17a2ea70d29e340c5ddb"},{url:"images/icons/desktop/apple-touch-icon.png",revision:"2b78ed332644d19d9779c069c5842538"},{url:"images/icons/desktop/favicon-16x16.png",revision:"6c047cdbd3d5c4c962a3a692a5025d27"},{url:"images/icons/desktop/favicon-32x32.png",revision:"7413528d5e59c22af1ccf38187bc950b"},{url:"images/icons/desktop/mstile-150x150.png",revision:"540caa78f56655281b2d4b17ad52f2ce"},{url:"images/icons/desktop/safari-pinned-tab.svg",revision:"a0ab2c612c6a5019b3e4ae7c38043b98"},{url:"images/icons/icon-128x128.png",revision:"69f3f1f3f956bb71f35ce66b7717e1a0"},{url:"images/icons/icon-144x144.png",revision:"45e24db8671c41ca95c440df0cadf2a3"},{url:"images/icons/icon-152x152.png",revision:"e0867fd6e9bc25afd831b1eabdd83f8d"},{url:"images/icons/icon-192x192.png",revision:"cf383c3d4500d31884326cc9d53a8c3a"},{url:"images/icons/icon-384x384.png",revision:"19007d16c73f442f44c926beddc34637"},{url:"images/icons/icon-512x512.png",revision:"274298ed7162d12352fa836d3a2cb11e"},{url:"images/icons/icon-72x72.png",revision:"919cb6b3e8a1b5d0c963921dba0e4388"},{url:"images/icons/icon-96x96.png",revision:"5547ad1a33334c0f5c04f6de1f6d2c52"},{url:"images/menu_open_black_48dp.svg",revision:"6a65883ec5d5058af76c169ed17edc71"},{url:"images/page-speed-insight-icon.png",revision:"85f446592394b827475c3c5d11f66924"},{url:"images/profile-icon.png",revision:"56f0c7de57fdae6d0a9ddc43448b6dff"},{url:"images/zuix-logo.svg",revision:"48e6defd57440a6d0f0d12241ff9d6c5"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET"),e.registerRoute(/\.(?:html|json|js|css)$/,new e.CacheFirst({cacheName:"default",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
