/*! For license information please see 42821.cfddf696.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhelloworld=self.webpackChunkhelloworld||[]).push([[42821],{72552:(e,n,t)=>{t.r(n),t.d(n,{CalcitePopover:()=>o,defineCustomElement:()=>r});var i=t(53794);const o=i.P,r=i.d},80416:(e,n,t)=>{function i(e){return"l"===e?"m":"s"}async function o(e){await(function(e){return"function"===typeof e.componentOnReady}(e)?e.componentOnReady():new Promise((e=>requestAnimationFrame((()=>e())))))}t.d(n,{c:()=>o,g:()=>i})},65079:(e,n,t)=>{t.d(n,{I:()=>E,c:()=>w,d:()=>g,g:()=>o,u:()=>f});var i=t(82108);function o(){if(!i.L2.isBrowser)return"";const e=navigator.userAgentData;return null!==e&&void 0!==e&&e.brands?e.brands.map((e=>{let{brand:n,version:t}=e;return"".concat(n,"/").concat(t)})).join(" "):navigator.userAgent}const r=/firefox/i.test(o()),a=r?new WeakMap:null;function c(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function s(e){const n=e.target;if(r&&!a.get(n))return;const{disabled:t}=n;t&&e.preventDefault()}const u=["mousedown","mouseup","click"];function l(e){const n=e.target;r&&!a.get(n)||n.disabled&&(e.stopImmediatePropagation(),e.preventDefault())}const d={capture:!0};function f(e){if(e.disabled)return e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void m(e);p(e),e.el.removeAttribute("aria-disabled")}function m(e){if(e.el.click=c,r){const n=function(e){return e.el.parentElement||e.el}(e),t=a.get(e.el);return t!==n&&(b(t),a.set(e.el,n)),void v(a.get(e.el))}v(e.el)}function v(e){e&&(e.addEventListener("pointerdown",s,d),u.forEach((n=>e.addEventListener(n,l,d))))}function p(e){if(delete e.el.click,r)return b(a.get(e.el)),void a.delete(e.el);b(e.el)}function b(e){e&&(e.removeEventListener("pointerdown",s,d),u.forEach((n=>e.removeEventListener(n,l,d))))}function w(e){e.disabled&&r&&m(e)}function g(e){r&&p(e)}const k={container:"interaction-container"};function E(e,n){let{disabled:t}=e;return(0,i.h)("div",{class:k.container,inert:t},...n)}},76527:(e,n,t)=>{t.d(n,{a:()=>c,b:()=>s,c:()=>u,s:()=>a});var i=t(82108);const o=new WeakMap,r=new WeakMap;function a(e){r.set(e,new Promise((n=>o.set(e,n))))}function c(e){o.get(e)()}function s(e){return r.get(e)}async function u(e){if(await s(e),i.L2.isBrowser)return(0,i.$x)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}}}]);
//# sourceMappingURL=42821.cfddf696.chunk.js.map