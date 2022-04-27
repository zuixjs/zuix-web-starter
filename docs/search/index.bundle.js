zuix.setComponentCache([{componentId:"/zuix-web-starter/lib/1.1/components/menu-overlay",controller:((module={}).exports=function(s){let l=!1,d=!1,p,f,c,o,u,i=null,a=0,m="right";function r(){(d?h:g)()}function h(){p.isPlaying()||(d=!1,p.playTransition({classes:"fadeIn fadeOutDown",onEnd:function(){this.hide(),s.trigger("hide")}}))}function g(){p.isPlaying()||(d=!0,p.playTransition("fadeOutDown fadeIn"),p.show(),s.trigger("show"))}function x(){if(!c.isPlaying()){const r="fadeIn";let i="fadeOutDown",a=("right"===m?i="fadeOutRight":"left"===m&&(i="fadeOutLeft"),200/u.length());if(l){if(l){l=!1,s.trigger("close"),d?(f.playTransition({classes:"rotateIn rotateOutLeft",onEnd:f.hide}),p.playTransition("rotateOutRight rotateIn")):f.playTransition({classes:"fadeIn fadeOutDown",onEnd:f.hide}),c.playTransition({classes:"fadeIn fadeOut",holdState:!0,onEnd:function(){this.visibility("hidden")}});let o=a*u.length();"left"!==m&&"right"!==m||(o=0,a*=-1),u.each(function(n,t,e){o-=a,e.playTransition({classes:[r,i],options:{duration:"200ms",delay:o+"ms"},onEnd:e.hide}).show()}),p.show()}}else{l=!0,s.trigger("open"),p.playTransition({classes:"rotateIn rotateOutRight",onEnd:p.hide}),f.playTransition("rotateOutLeft rotateIn").show();let e=0;"left"!==m&&"right"!==m||(e=a*u.length(),a*=-1),c.playTransition("fadeOut fadeIn").visibility(""),u.each(function(n,t){e+=a,this.playTransition({classes:[i,r],options:{duration:"200ms",delay:e+"ms"}}).show()})}}}s.create=function(){m=s.options().position||s.view().attr("data-o-position")||m,p=s.field("menu_button").addClass(m).hide().on("click",x),f=s.field("menu_button_close").addClass(m).hide().on("click",x),c=s.field("menu_overlay").addClass(m).visibility("hidden").on("click",x),o=s.field("items_wrapper").addClass(m);const n=zuix.$(s.model().items).children(),t=(n.each(function(n,t){const e=zuix.$(document.createElement("div")).addClass("menu-item").append(t.observableTarget||t);o.append(e.get())}),u=o.find('div[class*="menu-item"]'),s.view());var e=s.options().buttonColor||t.attr("data-o-button-color"),e=(null!=e&&t.find(".circle-button").css({background:e}),s.options().iconColor||t.attr("data-o-icon-color")),e=(null!=e&&t.find(".circle-button i").css({fill:e,color:e}),t.attr("data-o-scroller"));if(null!=(i=null!=e?zuix.field(e):zuix.$(window))){let e=s.options().before||t.attr("data-o-before"),o=(e=e&&zuix.field(e).get(),s.options().after||t.attr("data-o-after"));o=o&&zuix.field(o).get(),i.on("scroll",function(n){var t=i.get()===window?document.documentElement.scrollTop||document.body.scrollTop:i.get().scrollTop;d?a-t<-2&&(null==o||t>o.offsetTop+o.offsetHeight-56)&&setTimeout(h,100):d||2<a-t&&(null==e||t+window.innerHeight<e.offsetTop+56)&&g(),a=t,l&&x()})}s.expose({show:t.show,hide:t.hide,toggleButton:r,showButton:g,hideButton:h,showing:function(){return d}}),e={duration:"0.25s",timingFunction:"ease-in-out"},s.addTransition("fadeIn",{transform:"translateXY(0,0)",opacity:"1"},e),s.addTransition("fadeOut",{transform:"translateXY(0,0)",opacity:"0"},e),s.addTransition("fadeOutUp",{transform:"translateY(-200px)",opacity:"0"},e),s.addTransition("fadeOutDown",{transform:"translateY(200px)",opacity:"0"},e),s.addTransition("fadeOutLeft",{transform:"translateX(-200px)",opacity:0},e),s.addTransition("fadeOutRight",{transform:"translateX(200px)",opacity:0},e),s.addTransition("rotateIn",{transform:"rotate(0)",opacity:1},e),s.addTransition("rotateOutRight",{transform:"rotate(+135deg)",opacity:0},e),s.addTransition("rotateOutLeft",{transform:"rotate(-135deg)",opacity:0},e),setTimeout(function(){d||g()},1e3)}},module.exports),css:'button, .button {\n    background: transparent;\n    outline: transparent;\n    border: none;\n    color: inherit;\n    font-weight: bold;\n    display: inline-flex;\n    align-items: center;\n    gap: 12px;\n    justify-content: center;\n    padding-right: 12px;\n    padding-left: 12px;\n    margin-right: 0;\n    margin-left: 0;\n    height: 42px;\n}\n.item-title {\n    font-size: 150%;\n    padding: 16px;\n    opacity: 0.7;\n}\n.menu-button {\n    z-index: 100; /* topmost */\n    position: fixed;\n    right: calc(50% - 28px);\n    left: calc(50% - 28px);\n    bottom: 24px;\n}\n.menu-button.left {\n    left: 24px;\n    right: unset!important;\n}\n.menu-button.right {\n    right: 24px;\n    left: unset!important;\n}\ndiv[z-field="menu_overlay"] {\n    z-index: 100; /* topmost */\n    position: fixed;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    padding-top: 80px;\n    padding-bottom: 80px;\n    background: radial-gradient(circle at bottom, white, #ffffffee, #ffffff88, transparent);\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column-reverse;\n}\ndiv[z-field="menu_overlay"].left {\n    background: linear-gradient(230deg, transparent, #ffffff88, #ffffffee, white);\n}\ndiv[z-field="menu_overlay"].right {\n    background: linear-gradient(130deg, transparent, #ffffff88, #ffffffee, white);\n}\ndiv[z-field="items_wrapper"] {\n    text-align: center;\n    margin-top: auto;\n    margin-bottom: 24px;\n}\ndiv[z-field="items_wrapper"].left {\n    padding-left: 24px;\n    text-align: left;\n}\ndiv[z-field="items_wrapper"].right {\n    padding-right: 24px;\n    text-align: right;\n}\n\n.circle-button {\n    cursor: pointer;\n    border-radius: 50%;\n    width: 56px;\n    height: 56px;\n    background: deeppink;\n    fill: white;\n    color: white;\n    box-shadow: 0 0 10px rgb(0 0 0 / 25%), 0 0 4px rgb(0 0 0 / 25%);\n    font-size: 0;\n    transition: all 0.1s cubic-bezier(.25,.8,.25,1);\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    -webkit-tap-highlight-color: transparent;\n}\n.circle-button:active {\n    transform: scale(97%);\n    transition: 0s;\n}\n\n@media screen and (max-width: 960px), screen and (max-height: 480px) {\n    .menu-button {\n        bottom: 24px;\n    }\n    div[z-field="menu_overlay"] {\n        padding-bottom: 72px;\n    }\n}\n',view:'<div #menu_overlay="">\n    <div #items_wrapper=""></div>\n</div>\n\n\x3c!-- Colored FAB menu button --\x3e\n<div #menu_button="" class="menu-button">\n    <div class="circle-button">\n        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>\n            <path d="M0 0h24v24H0z" fill="none"></path>\n        </svg>\n    </div>\n</div>\n<div #menu_button_close="" class="menu-button">\n    <div class="circle-button">\n        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>\n            <path d="M0 0h24v24H0z" fill="none"></path>\n        </svg>\n    </div>\n</div>\n'},{componentId:"/zuix-web-starter/lib/1.1/controllers/header-auto-hide",controller:((module={}).exports=function(o){let i,t,a,r,s,l=0,d;function p(){null!=i&&i.hasClass("header-collapse")&&i.removeClass("header-collapse").addClass("header-expand"),null!=t&&t.hasClass("footer-collapse")&&t.removeClass("footer-collapse").addClass("footer-expand"),d&&d.check()}function f(){i.hasClass("header-collapse")||i.removeClass("header-expand").addClass("header-collapse"),null==t||t.hasClass("footer-collapse")||t.removeClass("footer-expand").addClass("footer-collapse")}o.init=function(){o.options().css=!1,o.options().html=!1},o.create=function(){if(a=o.options().showEnd||"true"===o.view().attr("data-o-show-end"),!(i=o.options().header||o.view().attr("data-o-header")))throw new Error("Header element not specified.");if(0===(i=zuix.field(i)).length())throw new Error('Header element not found: "'+i+'".');r=i.position().rect.height;var n=getComputedStyle(i.get()).position;"fixed"!==n&&"absolute"!==n&&(l=r);const e=o.view();zuix.$.appendCss("\n/* Header bar shrink/expand */\n@keyframes header-collapse-anim {\n  from { top: 0; }\n  to { top: -"+r+"px; }\n}\n@keyframes header-expand-anim {\n  from { top: -"+r+"px; }\n  to { top: 0; }\n}\n.header-collapse {\n  animation-fill-mode: forwards;\n  animation-name: header-collapse-anim;\n  animation-duration: 0.5s;\n  top: -"+r+"px;\n}\n.header-expand {\n  animation-fill-mode: forwards;\n  animation-name: header-expand-anim;\n  animation-duration: 0.5s;\n  top: 0px;\n}\n",null,"onscroll_header_hide_show");n=o.options().footer||o.view().attr("data-o-footer");null!=n&&((t=zuix.field(n)).css({position:"fixed",zIndex:1}),s=t.position().rect.height,zuix.$.appendCss("\n/* Footer bar shrink/expand */\n@keyframes footer-collapse-anim {\n  from { bottom: 0; }\n  to { bottom: -"+s+"px; }\n}\n@keyframes footer-expand-anim {\n  from { bottom: -"+s+"px; }\n  to { bottom: 0; }\n}\n.footer-collapse {\n  animation-fill-mode: forwards;\n  animation-name: footer-collapse-anim;\n  animation-duration: 0.5s;\n  bottom: -"+s+"px;\n}\n.footer-expand {\n  animation-fill-mode: forwards;\n  animation-name: footer-expand-anim;\n  animation-duration: 0.5s;\n  bottom: 0;\n}\n",null,"zkit_onscroll_hide_show")),zuix.load("@lib/controllers/scroll-helper",{view:e,on:{"scroll:change":function(n,t){"scroll"===t.event&&t.info.viewport.y<-l?t.info.shift.y<-4?(0<l&&"fixed"!==i.css("position")&&(e.css({paddingTop:r+"px"}),i.hide().css({position:"fixed",zIndex:1})),f()):4<t.info.shift.y&&(i.show(),p()):"hit-bottom"===t.event&&a?(i.show(),p()):0<l&&0===t.info.viewport.y&&(e.css({paddingTop:null}),i.show().css({position:null,zIndex:null})),o.trigger("page:scroll",t)}},ready:function(n){d=n,o.expose("scroll",{get:function(){return d}}),o.trigger("scroll:ready",d)}}),o.expose("show",p),o.expose("hide",f)}},module.exports)},{componentId:"/zuix-web-starter/lib/1.1/controllers/list-view",controller:(module={},zuix.controller(function(r){const s="full",l="paged",d="incremental";let p=s,f=30;const c={page:{current:0,count:0},items:{loaded:0,count:0}},u=[];function n(n){if(!isNaN(n)&&0<=n&&n<h()){if(p==l){var t=c.page.current,e=r.model().itemList;if(null!=e){var o=t*f;for(let n=o;n<u.length&&n<o+f;n++){var i=r.model().getItem(n,e[n]).itemId;void 0!==u[i]&&(u[i].style.display="none")}}}c.page.current=parseInt(n),r.update()}return c.page.current}function m(){r.trigger("status",c)}function h(){return Math.ceil(r.model().itemList.length/f)}function t(n){null!=n.itemsPerPage&&(f=n.itemsPerPage),null!=n.listMode&&(p=n.listMode)}function e(){for(let n=0;n<u.length;n++)zuix.unload(u[n]);u.length=0,c.page.current=0,c.page.count=0,c.items.loaded=0,c.items.count=0,r.view().html("")}r.init=function(){r.options().html=!1,r.options().css=!1},r.create=function(){r.expose("config",t),r.expose("page",n),r.expose("status",m),r.expose("more",function(){c.page.current++,r.update()}),r.expose("clear",e),e()},r.destroy=function(){e()},r.update=function(){const o=r.model().itemList;if(null!=o){c.page.count=h(),c.items.count=o.length;var t=c.page.current*f;let n=0;for(p===l&&0<t&&(n=t);n<o.length;n++){var e=r.model().getItem(n,o[n]),i=e.itemId;if(p===s||p===l&&n>=t&&n<t+f||p===d&&n<t+f)if(void 0===u[i]){const a=zuix.createComponent(e.componentId,e.options).container();null!=e.options.className?a.classList.add(e.options.className):a.style["min-height"]=e.options.height||"48px";(function(n,t){function e(){t.removeEventListener("component:ready",e),c.items.loaded++,m(),n===o.length-1&&r.trigger("complete")}a.addEventListener("component:ready",e)})(n,a);u[i]=a,r.view().insert(n-t,u[i])}else e.options.static||zuix.context(u[i]).model(e.options.model);if(void 0!==u[i]&&(p===l&&n<c.page.current*f||p!==s&&n>(c.page.current+1)*f-1?u[i].style.display="none":u[i].style.display=""),(p===l||p===d)&&n>t+f)break}m(),zuix.componentize(r.view())}}}),module.exports)}]);