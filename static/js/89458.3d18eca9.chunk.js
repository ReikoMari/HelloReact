/*! For license information please see 89458.3d18eca9.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhelloworld=self.webpackChunkhelloworld||[]).push([[89458],{89458:(e,t,a)=>{a.r(t),a.d(t,{CalciteTab:()=>i,defineCustomElement:()=>l});var n=a(41024);const i=n.T,l=n.d},41024:(e,t,a)=>{a.d(t,{T:()=>o,d:()=>d});var n=a(82108),i=a(39879),l=a(66418);const c="container",s="content",o=(0,n.w$)(class extends n.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalTabRegister=(0,n.lh)(this,"calciteInternalTabRegister",6),this.guid="calcite-tab-title-".concat((0,l.g)()),this.tab=void 0,this.selected=!1,this.scale="m",this.labeledBy=void 0}render(){const e=this.el.id||this.guid;return(0,n.h)(n.xr,{"aria-labelledby":this.labeledBy,id:e},(0,n.h)("div",{class:{[c]:!0,["scale-".concat(this.scale)]:!0},role:"tabpanel",tabIndex:this.selected?0:-1},(0,n.h)("section",{class:s},(0,n.h)("slot",null))))}connectedCallback(){this.parentTabsEl=this.el.closest("calcite-tabs")}componentDidLoad(){this.calciteInternalTabRegister.emit()}disconnectedCallback(){var e;null===(e=document.body)||void 0===e||e.dispatchEvent(new CustomEvent("calciteTabUnregister",{detail:this.el}))}internalTabChangeHandler(e){e.composedPath().find((e=>"CALCITE-TABS"===e.tagName))===this.parentTabsEl&&(this.tab?this.selected=this.tab===e.detail.tab:this.getTabIndex().then((t=>{this.selected=t===e.detail.tab})),e.stopPropagation())}async getTabIndex(){return Array.prototype.indexOf.call((0,i.x)(this.el.parentElement.children).filter((e=>e.matches("calcite-tab"))),this.el)}async updateAriaInfo(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];this.labeledBy=t[e.indexOf(this.el.id)]||null}get el(){return this}static get style(){return":host([selected]) section,:host([selected]) .container{display:block}:host{display:none;block-size:100%;inline-size:100%}:host([selected]){display:block;block-size:100%;inline-size:100%;overflow:auto}.content{box-sizing:border-box;padding-block:var(--calcite-internal-tab-content-block-padding)}.scale-s{--calcite-internal-tab-content-block-padding:var(--calcite-tab-content-block-padding, 0.25rem);font-size:var(--calcite-font-size--2);line-height:1rem}.scale-m{--calcite-internal-tab-content-block-padding:var(--calcite-tab-content-block-padding, 0.5rem);font-size:var(--calcite-font-size--1);line-height:1rem}.scale-l{--calcite-internal-tab-content-block-padding:var(--calcite-tab-content-block-padding, 0.625rem);font-size:var(--calcite-font-size-0);line-height:1.25rem}section,.container{display:none;block-size:100%;inline-size:100%}.container{outline-color:transparent}.container:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-tab",{tab:[513],selected:[1540],scale:[1],labeledBy:[32],getTabIndex:[64],updateAriaInfo:[64]},[[16,"calciteInternalTabChange","internalTabChangeHandler"]]]);function d(){if("undefined"===typeof customElements)return;["calcite-tab"].forEach((e=>{if("calcite-tab"===e)customElements.get(e)||customElements.define(e,o)}))}d()}}]);
//# sourceMappingURL=89458.3d18eca9.chunk.js.map