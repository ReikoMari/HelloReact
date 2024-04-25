/*! For license information please see 82122.433a5c7d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhelloworld=self.webpackChunkhelloworld||[]).push([[82122],{82122:(e,i,t)=>{t.r(i),t.d(i,{arcgis_slice:()=>l});var a=t(85643),n=t(83308),d=t(82754),s=t(9598);const l=class{constructor(e){(0,a.r)(this,e),this.arcgisSliceReady=(0,a.c)(this,"arcgisSliceReady",7),this._watchHandles=[],this.referenceElement=void 0,this.analysis=void 0,this.excludedLayers=void 0,this.excludeGroundSurface=!1,this.icon=void 0,this.shape=void 0,this.tiltEnabled=!1,this.position="bottom-left",this.view=void 0,this.widget=void 0}referenceElementWatcher(e){(0,d.r)(this,e)}excludedLayersWatcher(e){this.widget&&(this.widget.viewModel.excludedLayers=e)}excludeGroundSurfaceWatcher(e){this.widget&&(this.widget.viewModel.excludeGroundSurface=e)}iconWatcher(e){void 0!==e&&this.widget&&(this.widget.icon=e,this.widget.iconClass=e)}shapeWatcher(e){this.widget&&(this.widget.viewModel.shape=e)}tiltEnabledWatcher(e){this.widget&&(this.widget.viewModel.tiltEnabled=e)}positionWatcher(e){void 0!==e&&this.widget&&this.view.ui.move(this.childElem,e)}viewWatcher(e){void 0!==e&&this.widget&&(this.widget.view=e)}async clear(){var e;null===(e=this.widget)||void 0===e||e.viewModel.clear()}async start(){var e;null===(e=this.widget)||void 0===e||e.viewModel.start()}async componentDidLoad(){const e=this._createParams(),i=await(0,n.V)(e);this.widget=i,await this._addWatchers(),this._addContainer(),this.arcgisSliceReady.emit(),(0,d.c)(this)}disconnectedCallback(){(0,s.o)(this)}render(){return(0,a.h)("div",{ref:e=>this.childElem=e})}_addContainer(){this.widget.container=this.childElem}async _addWatchers(){const{watch:e}=await(0,n.i)();(0,d.a)(this,e((()=>this.widget.analysis),(e=>this.analysis=e),{initial:!0}))}_createParams(){const e={};return e.viewModel={excludeGroundSurface:this.excludeGroundSurface,tiltEnabled:this.tiltEnabled},this.excludedLayers&&(e.viewModel.excludedLayers=this.excludedLayers),this.shape&&(e.viewModel.shape=this.shape),this.view&&(e.view=this.view),e}get el(){return(0,a.g)(this)}static get watchers(){return{referenceElement:["referenceElementWatcher"],excludedLayers:["excludedLayersWatcher"],excludeGroundSurface:["excludeGroundSurfaceWatcher"],icon:["iconWatcher"],shape:["shapeWatcher"],tiltEnabled:["tiltEnabledWatcher"],position:["positionWatcher"],view:["viewWatcher"]}}};l.style="arcgis-slice{}"},82754:(e,i,t)=>{function a(e){const i=e.el.closest("arcgis-expand")||e.expandElem;if(null!==i&&void 0!==i&&i.widget)return e.view=i.view,i.widget.content=e.childElem,i.expandIcon||(i.widget.expandIcon=e.widget.icon,i.widget.expandIconClass=e.widget.iconClass),!0;if(i){const t=()=>{i.removeEventListener("arcgisExpandReady",t,!1),e.view=i.view,i.widget.content=e.childElem,i.expandIcon||(i.widget.expandIcon=e.widget.icon,i.widget.expandIconClass=e.widget.iconClass)};return i.addEventListener("arcgisExpandReady",t,!1),!0}return!1}function n(e,i){Array.isArray(i)?e._watchHandles=[...e._watchHandles,...i]:e._watchHandles.push(i)}function d(e){let i=!1;if(a(e)){var t;const i=null!==(t=e.el.closest("arcgis-map"))&&void 0!==t?t:e.el.closest("arcgis-scene");if(null!==i&&void 0!==i&&i.view)e.view=i.view;else if(i){const t=()=>{i.removeEventListener("arcgisViewReadyChange",t,!1),e.view=i.view};i.addEventListener("arcgisViewReadyChange",t,!1)}}else{var n,d;let t=null!==(n=e.el.closest("arcgis-map"))&&void 0!==n?n:e.el.closest("arcgis-scene");if(t||"string"!==typeof e.referenceElement||(t=document.querySelector(e.referenceElement),i=!0),null!==(d=t)&&void 0!==d&&d.view){var s;e.view=t.view;const a=null!==(s=e.childElem)&&void 0!==s?s:e.el;i||e.view.ui.add(a,e.position)}else t&&function(e,i,t){const a=()=>{e.removeEventListener("arcgisViewReadyChange",a,!1),i.view=e.view,t||(i.childElem?i.view.ui.add(i.childElem,i.position):i.view.ui.add(i.el,i.position))};e.addEventListener("arcgisViewReadyChange",a,!1)}(t,e,i)}}function s(e){return void 0===e||null===e||""===e}function l(e){return null!=e&&e%1===0}function c(e,i){return void 0===i||e.position!==i.position||e.heading!==i.heading||e.tilt!==i.tilt}function r(e,i){return void 0===i||i.atmosphereEnabled!==e.atmosphereEnabled||i.lighting.date!==e.lighting.date||i.lighting.directShadowsEnabled!==e.lighting.directShadowsEnabled||i.lighting.cameraTrackingEnabled!==e.lighting.cameraTrackingEnabled||i.lighting.date!==e.lighting.date||i.lighting.displayUTCOffset!==e.lighting.displayUTCOffset}function o(e,i){return void 0===i||e.targetGeometry!==i.targetGeometry||e.rotation!==i.rotation||e.scale!==i.scale}async function h(e,i){"string"===typeof i?e.view=await async function(e){const i=document.querySelector(e);return await new Promise((e=>{if(void 0!==(null===i||void 0===i?void 0:i.view))e(i.view);else if(i){const t=()=>{i.removeEventListener("arcgisViewReadyChange",t,!1),e(i.view)};i.addEventListener("arcgisViewReadyChange",t,!1)}}))}(i):e.widget&&(e.view=i.view)}t.d(i,{a:()=>n,b:()=>o,c:()=>d,d:()=>a,e:()=>c,f:()=>r,g:()=>l,i:()=>s,r:()=>h})},9598:(e,i,t)=>{function a(e){var i,t;e.childElem?e.el.isConnected||(e.view?e.view.ui.remove(e.childElem):null!==(i=e.widget)&&void 0!==i&&i.view&&e.widget.view.ui.remove(e.childElem),e._watchHandles&&e._watchHandles.forEach((e=>{e.remove()})),e._watchHandles=[],null===(t=e.widget)||void 0===t||t.destroy()):setTimeout((()=>{var i,t;e.el.isConnected||(e.view?e.view.ui.remove(e.el):null!==(i=e.widget)&&void 0!==i&&i.view&&e.widget.view.ui.remove(e.el),e._watchHandles&&e._watchHandles.forEach((e=>{e.remove()})),e._watchHandles=[],null===(t=e.widget)||void 0===t||t.destroy())}),1e3)}t.d(i,{o:()=>a})}}]);
//# sourceMappingURL=82122.433a5c7d.chunk.js.map