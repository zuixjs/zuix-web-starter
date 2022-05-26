zuix.setComponentCache([{componentId:"/zuix-web-starter/lib/1.1/components/menu-overlay",controller:function(){"use strict";let t={};return t.exports=function(r){let l=!1,d=!1,c,p,f,o,u,i=null,a=0,h="right";function s(){(d?m:g)()}function m(){c.isPlaying()||(d=!1,c.playTransition({classes:"fadeIn fadeOutDown",onEnd:function(){this.hide(),r.trigger("hide")}}))}function g(){c.isPlaying()||(d=!0,c.playTransition("fadeOutDown fadeIn"),c.show(),r.trigger("show"))}function w(){if(!f.isPlaying()){const s="fadeIn";let i="fadeOutDown",a=("right"===h?i="fadeOutRight":"left"===h&&(i="fadeOutLeft"),200/u.length());if(l){if(l){l=!1,r.trigger("close"),d?(p.playTransition({classes:"rotateIn rotateOutLeft",onEnd:p.hide}),c.playTransition("rotateOutRight rotateIn")):p.playTransition({classes:"fadeIn fadeOutDown",onEnd:p.hide}),f.playTransition({classes:"fadeIn fadeOut",holdState:!0,onEnd:function(){this.visibility("hidden")}});let o=a*u.length();"left"!==h&&"right"!==h||(o=0,a*=-1),u.each(function(t,n,e){o-=a,e.playTransition({classes:[s,i],options:{duration:"200ms",delay:o+"ms"},onEnd:e.hide}).show()}),c.show()}}else{l=!0,r.trigger("open"),c.playTransition({classes:"rotateIn rotateOutRight",onEnd:c.hide}),p.playTransition("rotateOutLeft rotateIn").show();let e=0;"left"!==h&&"right"!==h||(e=a*u.length(),a*=-1),f.playTransition("fadeOut fadeIn").visibility(""),u.each(function(t,n){e+=a,this.playTransition({classes:[i,s],options:{duration:"200ms",delay:e+"ms"}}).show()})}}}r.create=function(){h=r.options().position||r.view().attr("data-o-position")||h,c=r.field("menu_button").addClass(h).hide().on("click",w),p=r.field("menu_button_close").addClass(h).hide().on("click",w),f=r.field("menu_overlay").addClass(h).visibility("hidden").on("click",w),o=r.field("items_wrapper").addClass(h);const t=zuix.$(r.model().items).children(),n=(t.each(function(t,n){const e=zuix.$(document.createElement("div")).addClass("menu-item").append(n.observableTarget||n);o.append(e.get())}),u=o.find('div[class*="menu-item"]'),r.view());var e=r.options().buttonColor||n.attr("data-o-button-color"),e=(null!=e&&n.find(".circle-button").css({background:e}),r.options().iconColor||n.attr("data-o-icon-color")),e=(null!=e&&n.find(".circle-button i").css({fill:e,color:e}),n.attr("data-o-scroller"));if(null!=(i=null!=e?zuix.field(e):zuix.$(window))){let e=r.options().before||n.attr("data-o-before"),o=(e=e&&zuix.field(e).get(),r.options().after||n.attr("data-o-after"));o=o&&zuix.field(o).get(),i.on("scroll",function(t){var n=i.get()===window?document.documentElement.scrollTop||document.body.scrollTop:i.get().scrollTop;d?a-n<-2&&(null==o||n>o.offsetTop+o.offsetHeight-56)&&setTimeout(m,100):d||2<a-n&&(null==e||n+window.innerHeight<e.offsetTop+56)&&g(),a=n,l&&w()})}r.expose({show:n.show,hide:n.hide,toggleButton:s,showButton:g,hideButton:m,showing:function(){return d}}),e={duration:"0.25s",timingFunction:"ease-in-out"},r.addTransition("fadeIn",{transform:"translateXY(0,0)",opacity:"1"},e),r.addTransition("fadeOut",{transform:"translateXY(0,0)",opacity:"0"},e),r.addTransition("fadeOutUp",{transform:"translateY(-200px)",opacity:"0"},e),r.addTransition("fadeOutDown",{transform:"translateY(200px)",opacity:"0"},e),r.addTransition("fadeOutLeft",{transform:"translateX(-200px)",opacity:0},e),r.addTransition("fadeOutRight",{transform:"translateX(200px)",opacity:0},e),r.addTransition("rotateIn",{transform:"rotate(0)",opacity:1},e),r.addTransition("rotateOutRight",{transform:"rotate(+135deg)",opacity:0},e),r.addTransition("rotateOutLeft",{transform:"rotate(-135deg)",opacity:0},e),setTimeout(function(){d||g()},1e3)}},t.exports}(),css:'button, .button {\n    background: transparent;\n    outline: transparent;\n    border: none;\n    color: inherit;\n    font-weight: bold;\n    display: inline-flex;\n    align-items: center;\n    gap: 12px;\n    justify-content: center;\n    padding-right: 12px;\n    padding-left: 12px;\n    margin-right: 0;\n    margin-left: 0;\n    height: 42px;\n}\n.item-title {\n    font-size: 150%;\n    padding: 16px;\n    opacity: 0.7;\n}\n.menu-button {\n    z-index: 100; /* topmost */\n    position: fixed;\n    right: calc(50% - 28px);\n    left: calc(50% - 28px);\n    bottom: 24px;\n}\n.menu-button.left {\n    left: 24px;\n    right: unset!important;\n}\n.menu-button.right {\n    right: 24px;\n    left: unset!important;\n}\ndiv[z-field="menu_overlay"] {\n    z-index: 100; /* topmost */\n    position: fixed;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    padding-top: 80px;\n    padding-bottom: 80px;\n    background: radial-gradient(circle at bottom, white, #ffffffee, #ffffff88, transparent);\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column-reverse;\n}\ndiv[z-field="menu_overlay"].left {\n    background: linear-gradient(230deg, transparent, #ffffff88, #ffffffee, white);\n}\ndiv[z-field="menu_overlay"].right {\n    background: linear-gradient(130deg, transparent, #ffffff88, #ffffffee, white);\n}\ndiv[z-field="items_wrapper"] {\n    text-align: center;\n    margin-top: auto;\n    margin-bottom: 24px;\n}\ndiv[z-field="items_wrapper"].left {\n    padding-left: 24px;\n    text-align: left;\n}\ndiv[z-field="items_wrapper"].right {\n    padding-right: 24px;\n    text-align: right;\n}\n\n.circle-button {\n    cursor: pointer;\n    border-radius: 50%;\n    width: 56px;\n    height: 56px;\n    background: deeppink;\n    fill: white;\n    color: white;\n    box-shadow: 0 0 10px rgb(0 0 0 / 25%), 0 0 4px rgb(0 0 0 / 25%);\n    font-size: 0;\n    transition: all 0.1s cubic-bezier(.25,.8,.25,1);\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    -webkit-tap-highlight-color: transparent;\n}\n.circle-button:active {\n    transform: scale(97%);\n    transition: 0s;\n}\n\n@media screen and (max-width: 960px), screen and (max-height: 480px) {\n    .menu-button {\n        bottom: 24px;\n    }\n    div[z-field="menu_overlay"] {\n        padding-bottom: 72px;\n    }\n}\n',view:'<div #menu_overlay="">\n    <div #items_wrapper=""></div>\n</div>\n\n\x3c!-- Colored FAB menu button --\x3e\n<div #menu_button="" class="menu-button">\n    <div class="circle-button">\n        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>\n            <path d="M0 0h24v24H0z" fill="none"></path>\n        </svg>\n    </div>\n</div>\n<div #menu_button_close="" class="menu-button">\n    <div class="circle-button">\n        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>\n            <path d="M0 0h24v24H0z" fill="none"></path>\n        </svg>\n    </div>\n</div>\n'},{componentId:"/zuix-web-starter/lib/1.1/controllers/header-auto-hide",controller:function(){"use strict";let t={};return t.exports=function(i){let a,n,s,r,l,d=0,c;function p(){null!=a&&a.hasClass("header-collapse")&&a.removeClass("header-collapse").addClass("header-expand"),null!=n&&n.hasClass("footer-collapse")&&n.removeClass("footer-collapse").addClass("footer-expand"),c&&c.check()}function f(){a.hasClass("header-collapse")||a.removeClass("header-expand").addClass("header-collapse"),null==n||n.hasClass("footer-collapse")||n.removeClass("footer-expand").addClass("footer-collapse")}i.init=function(){i.options().css=!1,i.options().html=!1},i.create=function(){s=i.options().showEnd||"true"===i.view().attr("data-o-show-end"),a=i.options().header||i.view().attr("data-o-header");const e=i.options().zIndex||10;if(!a)throw new Error("Header element not specified.");if(0===(a=zuix.field(a)).length())throw new Error('Header element not found: "'+a+'".');r=a.position().rect.height;var t=getComputedStyle(a.get()).position;"fixed"!==t&&"absolute"!==t&&(d=r);const o=i.view();zuix.$.appendCss("\n/* Header bar shrink/expand */\n@keyframes header-collapse-anim {\n  from { top: 0; }\n  to { top: -"+r+"px; }\n}\n@keyframes header-expand-anim {\n  from { top: -"+r+"px; }\n  to { top: 0; }\n}\n.header-collapse {\n  animation-fill-mode: forwards;\n  animation-name: header-collapse-anim;\n  animation-duration: 0.5s;\n  top: -"+r+"px;\n}\n.header-expand {\n  animation-fill-mode: forwards;\n  animation-name: header-expand-anim;\n  animation-duration: 0.5s;\n  top: 0px;\n}\n",null,"onscroll_header_hide_show");t=i.options().footer||i.view().attr("data-o-footer");null!=t&&((n=zuix.field(t)).css({position:"fixed",zIndex:e}),l=n.position().rect.height,zuix.$.appendCss("\n/* Footer bar shrink/expand */\n@keyframes footer-collapse-anim {\n  from { bottom: 0; }\n  to { bottom: -"+l+"px; }\n}\n@keyframes footer-expand-anim {\n  from { bottom: -"+l+"px; }\n  to { bottom: 0; }\n}\n.footer-collapse {\n  animation-fill-mode: forwards;\n  animation-name: footer-collapse-anim;\n  animation-duration: 0.5s;\n  bottom: -"+l+"px;\n}\n.footer-expand {\n  animation-fill-mode: forwards;\n  animation-name: footer-expand-anim;\n  animation-duration: 0.5s;\n  bottom: 0;\n}\n",null,"zkit_onscroll_hide_show")),zuix.load("@lib/controllers/scroll-helper",{view:o,on:{"scroll:change":function(t,n){"scroll"===n.event&&n.info.viewport.y<-d?n.info.shift.y<-4?(0<d&&"fixed"!==a.css("position")&&(o.css({paddingTop:r+"px"}),a.hide().css({position:"fixed",zIndex:e})),f()):4<n.info.shift.y&&(a.show(),p()):"hit-bottom"===n.event&&s?(a.show(),p()):0<d&&0===n.info.viewport.y&&(o.css({paddingTop:null}),a.show().css({position:null,zIndex:null})),i.trigger("page:scroll",n)}},ready:function(t){c=t,i.expose("scroll",{get:function(){return c}}),i.trigger("scroll:ready",c)}}),i.expose("show",p),i.expose("hide",f)}},t.exports}()},{componentId:"/zuix-web-starter/lib/1.1/controllers/scroll-helper",controller:function(){"use strict";let t={};function o(e,o){let i=void 0,a=void 0;return function(){const t=this,n=arguments;a?(clearTimeout(i),i=setTimeout(function(){Date.now()-a>=o&&(e.apply(t,n),a=Date.now())},o-(Date.now()-a))):(e.apply(t,n),a=Date.now())}}return t.exports=function(){const a={timestamp:0,size:{width:0,height:0},viewport:{x:0,y:0,width:0,height:0}};let n,e,i,s=0,r;const l=this;function d(){null!=n&&clearTimeout(n);var t=(new Date).getTime();if(100<t-a.timestamp?c():n=setTimeout(function(){c()},99),!(t<s&&t-r<66)){r=t;const o="scroll-helper-visible";null!=e&&null!=i&&e.each(function(t,n){const e=this.position();if(!e.visible&&this.hasClass(o))this.removeClass(o),e.event="exit";else if(e.visible){if(!e.visible)return;this.hasClass(o)?e.event="scroll":(e.event="enter",this.addClass(o))}else e.event="off-scroll";i(this,e)})}}function c(){const t=l.view().get();var n=t.getBoundingClientRect();const e={top:n.top,right:n.right,bottom:n.bottom,left:n.left,width:n.width,height:n.height,x:n.x,y:n.y};e.y=-l.view().get().scrollTop||e.y||0,e.height=l.view().get().scrollHeight||e.height||0,a.size.width=e.width,a.size.height=e.height,t===document.body?(a.size.width=document.body.offsetWidth,a.size.height=document.body.offsetHeight,a.viewport.width=document.documentElement.clientWidth||a.size.width,a.viewport.height=document.documentElement.clientHeight||a.size.height):(a.viewport.width=t.offsetWidth,a.viewport.height=t.offsetHeight),a.timestamp=(new Date).getTime(),a.shift={x:e.x-a.viewport.x,y:e.y-a.viewport.y},a.viewport.x=e.x,a.viewport.y=e.y,0==a.size.height+e.y-a.viewport.height||0===e.y?l.trigger("scroll:change",{event:0===e.y?"hit-top":"hit-bottom",info:a}):l.trigger("scroll:change",{event:"scroll",info:a})}function p(t,n){if((t instanceof Element||t instanceof zuix.$.ZxQuery)&&(t=zuix.$(t).position().y-a.viewport.y),-1===n)return f(t);var e=Date.now(),e=(n=(s=null!=n?e+n:s)-e,l.view().get());let o=0;o=e===document.body?void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop:e.scrollTop;e=t-o;if(n<=0||0==e)return f(t),void d();const i=o+e/n*33;requestAnimationFrame(function(){f(i),p(t)})}function f(t){const n=l.view().get();n===document.body?(document.documentElement.scrollTop=t,document.body.scrollTop=t):n.scrollTop=t}l.init=function(){l.options().html=!1,l.options().css=!1},l.create=function(){l.view().get()===document.body?0<l.options().throttle?window.onscroll=o(d,l.options().throttle):window.onscroll=d:0<l.options().throttle?l.view().on("scroll",{handler:o(d,l.options().throttle),passive:!0}):l.view().on("scroll",{handler:d,passive:!0});l.expose("watch",function(t,n){return t=t,n=n,i=null!=t?(e=l.view(t),n):e=null,l.context}),l.expose("scrollStart",function(t){return p(0,t=null==t?-1:t),l.context}).expose("scrollEnd",function(t){return null==t&&(t=-1),p(a.size.height,t),l.context}).expose("scrollTo",function(t,n){return p(t,n=null==n?-1:n),l.context}).expose("info",function(){return a}).expose("check",d)}},t.exports}()}]);