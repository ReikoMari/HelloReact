/*! For license information please see 10360.a0922587.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhelloworld=self.webpackChunkhelloworld||[]).push([[10360],{10360:(e,i,t)=>{t.r(i),t.d(i,{arcgis_area_measurement_3d:()=>o});var n=t(85643),a=t(83308),s=t(82754),d=t(9598);const o=class{constructor(e){(0,n.r)(this,e),this.arcgisAreaMeasurement3dReady=(0,n.c)(this,"arcgisAreaMeasurement3dReady",7),this._watchHandles=[],this.referenceElement=void 0,this.analysis=void 0,this.icon=void 0,this.unit=void 0,this.unitOptions=void 0,this.position="bottom-left",this.view=void 0,this.widget=void 0}referenceElementWatcher(e){(0,s.r)(this,e)}iconWatcher(e){this.widget&&(this.widget.icon=e,this.widget.iconClass=e)}unitWatcher(e){this.widget&&(this.widget.unit=e)}positionWatcher(e){void 0!==e&&this.widget&&this.view.ui.move(this.childElem,e)}viewWatcher(e){void 0!==e&&this.widget&&(this.widget.view=e)}async clear(){var e;null===(e=this.widget)||void 0===e||e.viewModel.clear()}async start(){var e;null===(e=this.widget)||void 0===e||e.viewModel.start()}async componentDidLoad(){const e=this._createParams(),i=await(0,a.d)(e);this.widget=i,await this._addWatchers(),this.arcgisAreaMeasurement3dReady.emit(),(0,s.c)(this)}disconnectedCallback(){(0,d.o)(this)}render(){return(0,n.h)("div",{ref:e=>this.childElem=e})}async _addWatchers(){const{watch:e,whenOnce:i}=await(0,a.i)();(0,s.a)(this,[e((()=>this.widget.analysis),(e=>this.analysis=e))]),await i((()=>this.widget.unitOptions)),this.unitOptions=this.widget.unitOptions}_createParams(){const e={container:this.childElem};return this.view&&(e.view=this.view),this.unit&&(e.unit=this.unit),this.unitOptions&&(e.unitOptions=this.unitOptions),e}get el(){return(0,n.g)(this)}static get watchers(){return{referenceElement:["referenceElementWatcher"],icon:["iconWatcher"],unit:["unitWatcher"],position:["positionWatcher"],view:["viewWatcher"]}}};o.style=""},82754:(e,i,t)=>{function n(e){const i=e.el.closest("arcgis-expand")||e.expandElem;if(null!==i&&void 0!==i&&i.widget)return e.view=i.view,i.widget.content=e.childElem,i.expandIcon||(i.widget.expandIcon=e.widget.icon,i.widget.expandIconClass=e.widget.iconClass),!0;if(i){const t=()=>{i.removeEventListener("arcgisExpandReady",t,!1),e.view=i.view,i.widget.content=e.childElem,i.expandIcon||(i.widget.expandIcon=e.widget.icon,i.widget.expandIconClass=e.widget.iconClass)};return i.addEventListener("arcgisExpandReady",t,!1),!0}return!1}function a(e,i){Array.isArray(i)?e._watchHandles=[...e._watchHandles,...i]:e._watchHandles.push(i)}function s(e){let i=!1;if(n(e)){var t;const i=null!==(t=e.el.closest("arcgis-map"))&&void 0!==t?t:e.el.closest("arcgis-scene");if(null!==i&&void 0!==i&&i.view)e.view=i.view;else if(i){const t=()=>{i.removeEventListener("arcgisViewReadyChange",t,!1),e.view=i.view};i.addEventListener("arcgisViewReadyChange",t,!1)}}else{var a,s;let t=null!==(a=e.el.closest("arcgis-map"))&&void 0!==a?a:e.el.closest("arcgis-scene");if(t||"string"!==typeof e.referenceElement||(t=document.querySelector(e.referenceElement),i=!0),null!==(s=t)&&void 0!==s&&s.view){var d;e.view=t.view;const n=null!==(d=e.childElem)&&void 0!==d?d:e.el;i||e.view.ui.add(n,e.position)}else t&&function(e,i,t){const n=()=>{e.removeEventListener("arcgisViewReadyChange",n,!1),i.view=e.view,t||(i.childElem?i.view.ui.add(i.childElem,i.position):i.view.ui.add(i.el,i.position))};e.addEventListener("arcgisViewReadyChange",n,!1)}(t,e,i)}}function d(e){return void 0===e||null===e||""===e}function o(e){return null!=e&&e%1===0}function r(e,i){return void 0===i||e.position!==i.position||e.heading!==i.heading||e.tilt!==i.tilt}function c(e,i){return void 0===i||i.atmosphereEnabled!==e.atmosphereEnabled||i.lighting.date!==e.lighting.date||i.lighting.directShadowsEnabled!==e.lighting.directShadowsEnabled||i.lighting.cameraTrackingEnabled!==e.lighting.cameraTrackingEnabled||i.lighting.date!==e.lighting.date||i.lighting.displayUTCOffset!==e.lighting.displayUTCOffset}function l(e,i){return void 0===i||e.targetGeometry!==i.targetGeometry||e.rotation!==i.rotation||e.scale!==i.scale}async function h(e,i){"string"===typeof i?e.view=await async function(e){const i=document.querySelector(e);return await new Promise((e=>{if(void 0!==(null===i||void 0===i?void 0:i.view))e(i.view);else if(i){const t=()=>{i.removeEventListener("arcgisViewReadyChange",t,!1),e(i.view)};i.addEventListener("arcgisViewReadyChange",t,!1)}}))}(i):e.widget&&(e.view=i.view)}t.d(i,{a:()=>a,b:()=>l,c:()=>s,d:()=>n,e:()=>r,f:()=>c,g:()=>o,i:()=>d,r:()=>h})},9598:(e,i,t)=>{function n(e){var i,t;e.childElem?e.el.isConnected||(e.view?e.view.ui.remove(e.childElem):null!==(i=e.widget)&&void 0!==i&&i.view&&e.widget.view.ui.remove(e.childElem),e._watchHandles&&e._watchHandles.forEach((e=>{e.remove()})),e._watchHandles=[],null===(t=e.widget)||void 0===t||t.destroy()):setTimeout((()=>{var i,t;e.el.isConnected||(e.view?e.view.ui.remove(e.el):null!==(i=e.widget)&&void 0!==i&&i.view&&e.widget.view.ui.remove(e.el),e._watchHandles&&e._watchHandles.forEach((e=>{e.remove()})),e._watchHandles=[],null===(t=e.widget)||void 0===t||t.destroy())}),1e3)}t.d(i,{o:()=>n})}}]);
//# sourceMappingURL=10360.a0922587.chunk.js.map