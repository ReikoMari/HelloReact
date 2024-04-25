/*! For license information please see 71813.848f26ff.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhelloworld=self.webpackChunkhelloworld||[]).push([[71813],{71813:(e,i,t)=>{t.r(i),t.d(i,{arcgis_feature_form:()=>o});var a=t(85643),n=t(83308),s=t(82754),r=t(9598);const o=class{constructor(e){(0,a.r)(this,e),this.widgetReady=(0,a.c)(this,"widgetReady",7),this.featureFormSubmit=(0,a.c)(this,"featureFormSubmit",7),this.featureFormValueChange=(0,a.c)(this,"featureFormValueChange",7),this._watchHandles=[],this.referenceElement=void 0,this.position="bottom-left",this.expandable=!1,this.feature=void 0,this.formTemplate=void 0,this.groupDisplay=void 0,this.layer=void 0,this.timeZone=void 0,this.view=void 0,this.widget=void 0}referenceElementWatcher(e){(0,s.r)(this,e)}positionWatcher(e){void 0!==e&&this.widget&&this.view.ui.move(this.childElem,e)}featureWatcher(e){this.widget&&(this.widget.feature=e)}formTemplateWatcher(e){this.widget&&(this.widget.formTemplate=e)}groupDisplayWatcher(e){this.widget&&(this.widget.groupDisplay=e)}layerWatcher(e){this.widget&&(this.widget.layer=e)}timeZoneWatcher(e){this.widget&&(this.widget.timeZone=e)}viewWatcher(e){void 0!==e&&this.widget&&(this.widget.map=e.map)}async getValues(){var e;return null===(e=this.widget)||void 0===e?void 0:e.getValues()}async submit(){var e;return null===(e=this.widget)||void 0===e?void 0:e.submit()}async componentDidLoad(){const e=this._createParams(),i=await(0,n.w)(e);this.widget=i,this._proxyEvents(),this.widgetReady.emit({widget:this.widget})}disconnectedCallback(){(0,r.o)(this)}render(){return this.expandable?(0,a.h)("arcgis-expand",{position:this.position,ref:e=>this.expandElem=e},(0,a.h)("div",{ref:e=>this.childElem=e})):(0,a.h)("div",{ref:e=>this.childElem=e})}_createParams(){const e={container:this.childElem};return this.feature&&(e.feature=this.feature),this.formTemplate&&(e.formTemplate=this.formTemplate),this.groupDisplay&&(e.groupDisplay=this.groupDisplay),this.layer&&(e.layer=this.layer),this.timeZone&&(e.timeZone=this.timeZone),this.view&&(e.map=this.view.map),e}_proxyEvents(){this.widget.on("submit",(e=>this.featureFormSubmit.emit(e))),this.widget.on("value-change",(e=>this.featureFormValueChange.emit(e)))}get el(){return(0,a.g)(this)}static get watchers(){return{referenceElement:["referenceElementWatcher"],position:["positionWatcher"],feature:["featureWatcher"],formTemplate:["formTemplateWatcher"],groupDisplay:["groupDisplayWatcher"],layer:["layerWatcher"],timeZone:["timeZoneWatcher"],view:["viewWatcher"]}}};o.style=""},82754:(e,i,t)=>{function a(e){const i=e.el.closest("arcgis-expand")||e.expandElem;if(null!==i&&void 0!==i&&i.widget)return e.view=i.view,i.widget.content=e.childElem,i.expandIcon||(i.widget.expandIcon=e.widget.icon,i.widget.expandIconClass=e.widget.iconClass),!0;if(i){const t=()=>{i.removeEventListener("arcgisExpandReady",t,!1),e.view=i.view,i.widget.content=e.childElem,i.expandIcon||(i.widget.expandIcon=e.widget.icon,i.widget.expandIconClass=e.widget.iconClass)};return i.addEventListener("arcgisExpandReady",t,!1),!0}return!1}function n(e,i){Array.isArray(i)?e._watchHandles=[...e._watchHandles,...i]:e._watchHandles.push(i)}function s(e){let i=!1;if(a(e)){var t;const i=null!==(t=e.el.closest("arcgis-map"))&&void 0!==t?t:e.el.closest("arcgis-scene");if(null!==i&&void 0!==i&&i.view)e.view=i.view;else if(i){const t=()=>{i.removeEventListener("arcgisViewReadyChange",t,!1),e.view=i.view};i.addEventListener("arcgisViewReadyChange",t,!1)}}else{var n,s;let t=null!==(n=e.el.closest("arcgis-map"))&&void 0!==n?n:e.el.closest("arcgis-scene");if(t||"string"!==typeof e.referenceElement||(t=document.querySelector(e.referenceElement),i=!0),null!==(s=t)&&void 0!==s&&s.view){var r;e.view=t.view;const a=null!==(r=e.childElem)&&void 0!==r?r:e.el;i||e.view.ui.add(a,e.position)}else t&&function(e,i,t){const a=()=>{e.removeEventListener("arcgisViewReadyChange",a,!1),i.view=e.view,t||(i.childElem?i.view.ui.add(i.childElem,i.position):i.view.ui.add(i.el,i.position))};e.addEventListener("arcgisViewReadyChange",a,!1)}(t,e,i)}}function r(e){return void 0===e||null===e||""===e}function o(e){return null!=e&&e%1===0}function d(e,i){return void 0===i||e.position!==i.position||e.heading!==i.heading||e.tilt!==i.tilt}function l(e,i){return void 0===i||i.atmosphereEnabled!==e.atmosphereEnabled||i.lighting.date!==e.lighting.date||i.lighting.directShadowsEnabled!==e.lighting.directShadowsEnabled||i.lighting.cameraTrackingEnabled!==e.lighting.cameraTrackingEnabled||i.lighting.date!==e.lighting.date||i.lighting.displayUTCOffset!==e.lighting.displayUTCOffset}function c(e,i){return void 0===i||e.targetGeometry!==i.targetGeometry||e.rotation!==i.rotation||e.scale!==i.scale}async function h(e,i){"string"===typeof i?e.view=await async function(e){const i=document.querySelector(e);return await new Promise((e=>{if(void 0!==(null===i||void 0===i?void 0:i.view))e(i.view);else if(i){const t=()=>{i.removeEventListener("arcgisViewReadyChange",t,!1),e(i.view)};i.addEventListener("arcgisViewReadyChange",t,!1)}}))}(i):e.widget&&(e.view=i.view)}t.d(i,{a:()=>n,b:()=>c,c:()=>s,d:()=>a,e:()=>d,f:()=>l,g:()=>o,i:()=>r,r:()=>h})},9598:(e,i,t)=>{function a(e){var i,t;e.childElem?e.el.isConnected||(e.view?e.view.ui.remove(e.childElem):null!==(i=e.widget)&&void 0!==i&&i.view&&e.widget.view.ui.remove(e.childElem),e._watchHandles&&e._watchHandles.forEach((e=>{e.remove()})),e._watchHandles=[],null===(t=e.widget)||void 0===t||t.destroy()):setTimeout((()=>{var i,t;e.el.isConnected||(e.view?e.view.ui.remove(e.el):null!==(i=e.widget)&&void 0!==i&&i.view&&e.widget.view.ui.remove(e.el),e._watchHandles&&e._watchHandles.forEach((e=>{e.remove()})),e._watchHandles=[],null===(t=e.widget)||void 0===t||t.destroy())}),1e3)}t.d(i,{o:()=>a})}}]);
//# sourceMappingURL=71813.848f26ff.chunk.js.map