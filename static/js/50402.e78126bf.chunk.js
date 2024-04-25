/*! For license information please see 50402.e78126bf.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhelloworld=self.webpackChunkhelloworld||[]).push([[50402],{50402:(e,t,i)=>{i.r(t),i.d(t,{CalciteBlockSection:()=>S,defineCustomElement:()=>I});var n=i(82108),o=i(39879),s=i(15520),a=i(62785),c=i(76988),l=i(76527),r=i(67294),d=i(4301),h=i(84679);const u="content",g="toggle",b="content",p="focus-guard",m="invalid",v="section-header",f="section-header__text",k="status-icon",w="toggle",x="toggle--switch",y="toggle--switch-container",z="toggle--switch__content",C="toggle--switch__text",E="valid",_={menuOpen:"chevron-down",menuClosedLeft:"chevron-left",menuClosedRight:"chevron-right",valid:"check-circle",invalid:"exclamation-mark-triangle"},D=(0,n.w$)(class extends n.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteBlockSectionToggle=(0,n.lh)(this,"calciteBlockSectionToggle",6),this.handleHeaderKeyDown=e=>{(0,s.i)(e.key)&&(this.toggleSection(),e.preventDefault(),e.stopPropagation())},this.toggleSection=()=>{this.open=!this.open,this.calciteBlockSectionToggle.emit()},this.open=!1,this.status=void 0,this.text=void 0,this.toggleDisplay="button",this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}onMessagesChange(){}async setFocus(){await(0,l.c)(this),(0,o.f)(this.el)}effectiveLocaleChange(){(0,c.u)(this,this.effectiveLocale)}connectedCallback(){(0,a.c)(this),(0,c.c)(this)}async componentWillLoad(){await(0,c.s)(this),(0,l.s)(this)}componentDidLoad(){(0,l.a)(this)}disconnectedCallback(){(0,a.d)(this),(0,c.d)(this)}renderStatusIcon(){var e;const{status:t}=this,i=null!==(e=_[t])&&void 0!==e&&e,o={[k]:!0,[E]:"valid"==t,[m]:"invalid"==t};return i?(0,n.h)("calcite-icon",{class:o,icon:i,scale:"s"}):null}render(){const{el:e,messages:t,open:i,text:s,toggleDisplay:a}=this,c=(0,o.a)(e),l=i?_.menuOpen:"rtl"===c?_.menuClosedLeft:_.menuClosedRight,r=i?t.collapse:t.expand,d="switch"===a?(0,n.h)("div",{class:{[y]:!0}},(0,n.h)("div",{"aria-controls":u,"aria-expanded":(0,o.t)(i),class:{[w]:!0,[x]:!0},id:g,onClick:this.toggleSection,onKeyDown:this.handleHeaderKeyDown,role:"button",tabIndex:0,title:r},(0,n.h)("div",{class:z},(0,n.h)("span",{class:C},s)),this.renderStatusIcon()),(0,n.h)("calcite-label",{class:p,layout:"inline",tabIndex:-1},(0,n.h)("calcite-switch",{checked:i,label:r,scale:"s"}))):(0,n.h)("button",{"aria-controls":u,"aria-expanded":(0,o.t)(i),class:{[v]:!0,[w]:!0},id:g,onClick:this.toggleSection},(0,n.h)("calcite-icon",{icon:l,scale:"s"}),(0,n.h)("span",{class:f},s),this.renderStatusIcon());return(0,n.h)(n.xr,null,d,(0,n.h)("section",{"aria-labelledby":g,class:b,hidden:!i,id:u},(0,n.h)("slot",null)))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{box-sizing:border-box;display:block;background-color:var(--calcite-color-foreground-1);font-size:var(--calcite-font-size--1);color:var(--calcite-color-text-2)}:host([open]){border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-color-border-3)}:host(:last-child){border-block-end-width:0px}.toggle{inline-size:100%;border-width:0px;background-color:transparent;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2)}.toggle--switch,.section-header{margin-inline:0px;margin-block:0.25rem;display:flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;padding-inline:0px;padding-block:0.5rem;font-size:var(--calcite-font-size--1);outline-color:transparent}.toggle--switch:focus,.section-header:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.toggle--switch:hover,.section-header:hover{color:var(--calcite-color-text-1)}.section-header .status-icon{align-self:flex-end}.section-header__text{margin-inline:0.75rem;margin-block:0px;flex:1 1 auto;text-align:initial;word-wrap:anywhere}.toggle--switch-container{position:relative;display:flex;inline-size:100%;align-items:center;background-color:transparent;word-break:break-word}.toggle--switch-container .focus-guard{--calcite-label-margin-bottom:0;pointer-events:none;position:absolute;inset-inline-end:0;margin-inline-start:0.25rem}.toggle--switch .status-icon{margin-inline-start:0.5rem}.toggle--switch__content{display:flex;flex:1 1 auto;align-items:center}.status-icon.valid{color:var(--calcite-color-status-success)}.status-icon.invalid{color:var(--calcite-color-status-danger)}:host([toggle-display=switch]) .toggle .toggle--switch__content{margin-inline-end:1.75rem}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-block-section",{open:[1540],status:[513],text:[1],toggleDisplay:[513,"toggle-display"],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function L(){if("undefined"===typeof customElements)return;["calcite-block-section","calcite-icon","calcite-label","calcite-switch"].forEach((e=>{switch(e){case"calcite-block-section":customElements.get(e)||customElements.define(e,D);break;case"calcite-icon":customElements.get(e)||(0,r.d)();break;case"calcite-label":customElements.get(e)||(0,d.d)();break;case"calcite-switch":customElements.get(e)||(0,h.d)()}}))}L();const S=D,I=L},67294:(e,t,i)=>{i.d(t,{I:()=>h,d:()=>u});var n=i(82108),o=i(39879),s=i(6676);const a="flip-rtl",c={},l={},r={s:16,m:24,l:32};async function d(e){let{icon:t,scale:i}=e;const o=r[i],s=function(e){const t=!isNaN(Number(e.charAt(0))),i=e.split("-");if(i.length>0){const t=/[a-z]/i;e=i.map(((e,i)=>e.replace(t,(function(e,t){return 0===i&&0===t?e:e.toUpperCase()})))).join("")}return t?"i".concat(e):e}(t),a="F"===s.charAt(s.length-1),d=a?s.substring(0,s.length-1):s,h="".concat(d).concat(o).concat(a?"F":"");if(c[h])return c[h];l[h]||(l[h]=fetch((0,n.OX)("./assets/icon/".concat(h,".json"))).then((e=>e.json())).catch((()=>(console.error('"'.concat(h,'" is not a valid calcite-ui-icon name')),""))));const u=await l[h];return c[h]=u,u}const h=(0,n.w$)(class extends n.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.waitUntilVisible((()=>{this.visible=!0,this.loadIconPathData()}))}disconnectedCallback(){var e;null===(e=this.intersectionObserver)||void 0===e||e.disconnect(),this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const{el:e,flipRtl:t,pathData:i,scale:s,textLabel:c}=this,l=(0,o.a)(e),d=r[s],h=!!c,u=[].concat(i||"");return(0,n.h)(n.xr,{"aria-hidden":(0,o.t)(!h),"aria-label":h?c:null,role:h?"img":null},(0,n.h)("svg",{"aria-hidden":"true",class:{[a]:"rtl"===l&&t,svg:!0},fill:"currentColor",height:"100%",viewBox:"0 0 ".concat(d," ").concat(d),width:"100%",xmlns:"http://www.w3.org/2000/svg"},u.map((e=>"string"===typeof e?(0,n.h)("path",{d:e}):(0,n.h)("path",{d:e.d,opacity:"opacity"in e?e.opacity:1})))))}async loadIconPathData(){const{icon:e,scale:t,visible:i}=this;if(!n.L2.isBrowser||!e||!i)return;const o=await d({icon:e,scale:t});e===this.icon&&(this.pathData=o)}waitUntilVisible(e){this.intersectionObserver=(0,s.c)("intersection",(t=>{t.forEach((t=>{t.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,e())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):e()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]},void 0,{icon:["loadIconPathData"],scale:["loadIconPathData"]}]);function u(){if("undefined"===typeof customElements)return;["calcite-icon"].forEach((e=>{if("calcite-icon"===e)customElements.get(e)||customElements.define(e,h)}))}u()},4301:(e,t,i)=>{i.d(t,{L:()=>a,d:()=>c});var n=i(82108),o=i(22943);const s="container",a=(0,n.w$)(class extends n.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalLabelClick=(0,n.lh)(this,"calciteInternalLabelClick",2),this.labelClickHandler=e=>{this.calciteInternalLabelClick.emit({sourceEvent:e})},this.alignment="start",this.for=void 0,this.scale="m",this.layout="default"}handleForChange(){(0,o.a)(this.el)}connectedCallback(){document.dispatchEvent(new CustomEvent(o.l))}disconnectedCallback(){document.dispatchEvent(new CustomEvent(o.b))}render(){return(0,n.h)(n.xr,{onClick:this.labelClickHandler},(0,n.h)("div",{class:s},(0,n.h)("slot",null)))}get el(){return this}static get watchers(){return{for:["handleForChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}:host([alignment=start]){text-align:start}:host([alignment=end]){text-align:end}:host([alignment=center]){text-align:center}:host([scale=s]) .container{gap:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.5rem)}:host([scale=m]) .container{gap:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.75rem)}:host([scale=l]) .container{gap:0.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-block-end:var(--calcite-label-margin-bottom, 1rem)}:host .container{margin-inline:0px;margin-block-start:0px;inline-size:100%;line-height:1.375;color:var(--calcite-color-text-1)}:host([layout=default]) .container{display:flex;flex-direction:column}:host([layout=inline]) .container,:host([layout=inline-space-between]) .container{display:flex;flex-direction:row;align-items:center;gap:0.5rem}:host([layout=inline][scale=l]) .container{gap:0.75rem}:host([layout=inline-space-between]) .container{justify-content:space-between}:host([disabled])>.container{opacity:var(--calcite-opacity-disabled)}:host([disabled]) ::slotted(*[disabled]),:host([disabled]) ::slotted(*[disabled] *){--tw-bg-opacity:1}:host([disabled]) ::slotted(calcite-input-message:not([active])){--tw-bg-opacity:0}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-label",{alignment:[513],for:[513],scale:[513],layout:[513]},void 0,{for:["handleForChange"]}]);function c(){if("undefined"===typeof customElements)return;["calcite-label"].forEach((e=>{if("calcite-label"===e)customElements.get(e)||customElements.define(e,a)}))}c()},84679:(e,t,i)=>{i.d(t,{S:()=>d,d:()=>h});var n=i(82108),o=i(39879),s=i(13349),a=i(65079),c=i(15520),l=i(22943),r=i(76527);const d=(0,n.w$)(class extends n.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteSwitchChange=(0,n.lh)(this,"calciteSwitchChange",6),this.keyDownHandler=e=>{!this.disabled&&(0,c.i)(e.key)&&(this.toggle(),e.preventDefault())},this.clickHandler=()=>{this.disabled||this.toggle()},this.setSwitchEl=e=>{this.switchEl=e},this.disabled=!1,this.form=void 0,this.label=void 0,this.name=void 0,this.scale="m",this.checked=!1,this.value=void 0}async setFocus(){await(0,r.c)(this),(0,o.e)(this.switchEl)}syncHiddenFormInput(e){e.type="checkbox"}onLabelClick(){this.disabled||(this.toggle(),this.setFocus())}toggle(){this.checked=!this.checked,this.calciteSwitchChange.emit()}connectedCallback(){(0,a.c)(this),(0,l.c)(this),(0,s.c)(this)}componentWillLoad(){(0,r.s)(this)}componentDidLoad(){(0,r.a)(this)}disconnectedCallback(){(0,a.d)(this),(0,l.d)(this),(0,s.d)(this)}componentDidRender(){(0,a.u)(this)}render(){return(0,n.h)(n.xr,{onClick:this.clickHandler,onKeyDown:this.keyDownHandler},(0,n.h)(a.I,{disabled:this.disabled},(0,n.h)("div",{"aria-checked":(0,o.t)(this.checked),"aria-label":(0,l.g)(this),class:"container",role:"switch",tabIndex:0,ref:this.setSwitchEl},(0,n.h)("div",{class:"track"},(0,n.h)("div",{class:"handle"})),(0,n.h)(s.H,{component:this}))))}get el(){return this}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([scale=s]) .container{block-size:0.75rem}:host([scale=s]) .track{block-size:0.75rem;inline-size:1.5rem}:host([scale=s]) .handle{block-size:0.5rem;inline-size:0.5rem}:host([scale=m]) .container{block-size:1rem}:host([scale=m]) .track{block-size:1rem;inline-size:2rem}:host([scale=m]) .handle{block-size:0.75rem;inline-size:0.75rem}:host([scale=l]) .container{block-size:1.5rem}:host([scale=l]) .track{block-size:1.5rem;inline-size:3rem}:host([scale=l]) .handle{block-size:1.25rem;inline-size:1.25rem}:host{position:relative;display:inline-block;inline-size:auto;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:middle;tap-highlight-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{outline-width:0px}.track{pointer-events:none;position:relative;box-sizing:border-box;display:inline-block;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-2);background-color:var(--calcite-color-foreground-2);vertical-align:top;outline-color:transparent}:host(:focus) .track{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.handle{pointer-events:none;position:absolute;display:block;border-radius:9999px;border-width:2px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);inset-block-start:-1px;inset-inline:-1px auto}:host(:hover) .handle,:host(:focus) .handle{border-color:var(--calcite-color-brand);box-shadow:inset 0 0 0 1px var(--calcite-color-brand)}:host([checked]) .track{border-color:var(--calcite-color-brand-hover);background-color:var(--calcite-color-brand)}:host([checked]) .handle{border-color:var(--calcite-color-brand);inset-inline:auto -1px}:host([checked]:hover) .track{border-color:var(--calcite-color-brand-hover);background-color:var(--calcite-color-brand)}:host([checked]:hover) .handle{border-color:var(--calcite-color-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-color-brand-hover)}@media (forced-colors: active){:host([checked]) .track{background-color:canvasText}}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-switch",{disabled:[516],form:[513],label:[1],name:[513],scale:[513],checked:[1540],value:[8],setFocus:[64]}]);function h(){if("undefined"===typeof customElements)return;["calcite-switch"].forEach((e=>{if("calcite-switch"===e)customElements.get(e)||customElements.define(e,d)}))}h()},76988:(e,t,i)=>{i.d(t,{c:()=>h,d:()=>u,s:()=>l,u:()=>d});var n=i(82108),o=i(62785);const s={};function a(){throw new Error("could not fetch component message bundle")}function c(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function l(e){e.defaultMessages=await r(e,e.effectiveLocale),c(e)}async function r(e,t){if(!n.L2.isBrowser)return{};const{el:i}=e,c=i.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const i="".concat(t,"_").concat(e);return s[i]||(s[i]=fetch((0,n.OX)("./assets/".concat(t,"/t9n/messages_").concat(e,".json"))).then((e=>(e.ok||a(),e.json()))).catch((()=>a()))),s[i]}((0,o.g)(t,"t9n"),c)}async function d(e,t){e.defaultMessages=await r(e,t),c(e)}function h(e){e.onMessagesChange=g}function u(e){e.onMessagesChange=void 0}function g(){c(this)}}}]);
//# sourceMappingURL=50402.e78126bf.chunk.js.map