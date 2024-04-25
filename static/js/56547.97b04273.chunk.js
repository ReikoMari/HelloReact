/*! For license information please see 56547.97b04273.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhelloworld=self.webpackChunkhelloworld||[]).push([[56547],{56547:(e,t,i)=>{i.r(t),i.d(t,{arcgis_utility_network_trace:()=>n});var s=i(85643),r=i(83308),a=i(82754),l=i(9598);const n=class{constructor(e){(0,s.r)(this,e),this.arcgisUtilityNetworkTraceReady=(0,s.c)(this,"arcgisUtilityNetworkTraceReady",7),this.utilityNetworkTraceAddFlag=(0,s.c)(this,"utilityNetworkTraceAddFlag",7),this.utilityNetworkTraceAddFlagComplete=(0,s.c)(this,"utilityNetworkTraceAddFlagComplete",7),this.utilityNetworkTraceAddFlagError=(0,s.c)(this,"utilityNetworkTraceAddFlagError",7),this.utilityNetworkTraceAddResultArea=(0,s.c)(this,"utilityNetworkTraceAddResultArea",7),this.utilityNetworkTraceRemoveResultArea=(0,s.c)(this,"utilityNetworkTraceRemoveResultArea",7),this._watchHandles=[],this.referenceElement=void 0,this.enableResultArea=!1,this.defaultGraphicColor={color:[255,255,0,.6],haloOpacity:.9,fillOpacity:.2,hex:"#FFFF00"},this.disabled=!1,this.flags=[],this.gdbVersion="sde.DEFAULT",this.inputSettings=[],this.resultAreaProperties=void 0,this.selectedTraces=[],this.selectOnComplete=!0,this.showGraphicsOnComplete=!0,this.showSelectionAttributes=!0,this.position="bottom-left",this.view=void 0,this.widget=void 0}referenceElementWatcher(e){(0,a.r)(this,e)}enableResultAreaWatcher(e){this.widget&&(this.widget.enableResultArea=e)}defaultGraphicColorWatcher(e){this.widget&&(this.widget.defaultGraphicColor=e)}disabledWatcher(e,t){this.widget&&e!==t&&(this.widget.disabled=e)}flagsWatcher(e){this.widget&&(this.widget.flags=e)}gdbVersionWatcher(e){this.widget&&(this.widget.gdbVersion=e)}inputSettingsWatcher(e){this.widget&&(this.widget.inputSettings=e)}resultAreaPropertiesWatcher(e){this.widget&&(this.widget.resultAreaProperties=e)}selectedTracesWatcher(e){this.widget&&(this.widget.selectedTraces=e)}selectOnCompleteWatcher(e){void 0!==e&&this.widget&&(this.widget.selectOnComplete=e)}showGraphicsOnCompleteWatcher(e){void 0!==e&&this.widget&&(this.widget.showGraphicsOnComplete=e)}showSelectionAttributesWatcher(e){void 0!==e&&this.widget&&(this.widget.showSelectionAttributes=e)}positionWatcher(e){void 0!==e&&this.widget&&this.view.ui.move(this.childElem,e)}viewWatcher(e){void 0!==e&&this.widget&&(this.widget.view=e)}async checkCanTrace(){var e;await(null===(e=this.widget)||void 0===e?void 0:e.checkCanTrace())}async confirmReset(){var e;null===(e=this.widget)||void 0===e||e.confirmReset()}async componentDidLoad(){const e=this._createParams(),t=await(0,r.a0)(e);this.widget=t,await this._addWatchers(),this._proxyEvents(),this._addContainer(),this.arcgisUtilityNetworkTraceReady.emit(),(0,a.c)(this)}disconnectedCallback(){(0,l.o)(this)}render(){return(0,s.h)("div",{ref:e=>this.childElem=e})}_addContainer(){this.widget.container=this.childElem}async _addWatchers(){const{watch:e}=await(0,r.i)();(0,a.a)(this,e((()=>this.widget.disabled),(e=>this.disabled=e)))}_createParams(){const e={};return this.defaultGraphicColor&&(e.defaultGraphicColor=this.defaultGraphicColor),void 0!==this.enableResultArea&&(e.enableResultArea=this.enableResultArea),this.flags&&(e.flags=this.flags),this.gdbVersion&&(e.gdbVersion=this.gdbVersion),this.inputSettings&&(e.inputSettings=this.inputSettings),this.resultAreaProperties&&(e.resultAreaProperties=this.resultAreaProperties),this.selectedTraces&&(e.selectedTraces=this.selectedTraces),void 0!==this.selectOnComplete&&(e.selectOnComplete=this.selectOnComplete),void 0!==this.showGraphicsOnComplete&&(e.showGraphicsOnComplete=this.showGraphicsOnComplete),void 0!==this.showSelectionAttributes&&(e.showSelectionAttributes=this.showSelectionAttributes),this.view&&(e.view=this.view),e}_proxyEvents(){this.widget.on("add-flag",(e=>this.utilityNetworkTraceAddFlag.emit(e))),this.widget.on("add-flag-complete",(e=>this.utilityNetworkTraceAddFlagComplete.emit(e))),this.widget.on("add-flag-error",(e=>this.utilityNetworkTraceAddFlagError.emit(e))),this.widget.on("add-result-area",(e=>this.utilityNetworkTraceAddResultArea.emit(e))),this.widget.on("remove-result-area",(e=>this.utilityNetworkTraceRemoveResultArea.emit(e)))}get el(){return(0,s.g)(this)}static get watchers(){return{referenceElement:["referenceElementWatcher"],enableResultArea:["enableResultAreaWatcher"],defaultGraphicColor:["defaultGraphicColorWatcher"],disabled:["disabledWatcher"],flags:["flagsWatcher"],gdbVersion:["gdbVersionWatcher"],inputSettings:["inputSettingsWatcher"],resultAreaProperties:["resultAreaPropertiesWatcher"],selectedTraces:["selectedTracesWatcher"],selectOnComplete:["selectOnCompleteWatcher"],showGraphicsOnComplete:["showGraphicsOnCompleteWatcher"],showSelectionAttributes:["showSelectionAttributesWatcher"],position:["positionWatcher"],view:["viewWatcher"]}}};n.style=""},82754:(e,t,i)=>{function s(e){const t=e.el.closest("arcgis-expand")||e.expandElem;if(null!==t&&void 0!==t&&t.widget)return e.view=t.view,t.widget.content=e.childElem,t.expandIcon||(t.widget.expandIcon=e.widget.icon,t.widget.expandIconClass=e.widget.iconClass),!0;if(t){const i=()=>{t.removeEventListener("arcgisExpandReady",i,!1),e.view=t.view,t.widget.content=e.childElem,t.expandIcon||(t.widget.expandIcon=e.widget.icon,t.widget.expandIconClass=e.widget.iconClass)};return t.addEventListener("arcgisExpandReady",i,!1),!0}return!1}function r(e,t){Array.isArray(t)?e._watchHandles=[...e._watchHandles,...t]:e._watchHandles.push(t)}function a(e){let t=!1;if(s(e)){var i;const t=null!==(i=e.el.closest("arcgis-map"))&&void 0!==i?i:e.el.closest("arcgis-scene");if(null!==t&&void 0!==t&&t.view)e.view=t.view;else if(t){const i=()=>{t.removeEventListener("arcgisViewReadyChange",i,!1),e.view=t.view};t.addEventListener("arcgisViewReadyChange",i,!1)}}else{var r,a;let i=null!==(r=e.el.closest("arcgis-map"))&&void 0!==r?r:e.el.closest("arcgis-scene");if(i||"string"!==typeof e.referenceElement||(i=document.querySelector(e.referenceElement),t=!0),null!==(a=i)&&void 0!==a&&a.view){var l;e.view=i.view;const s=null!==(l=e.childElem)&&void 0!==l?l:e.el;t||e.view.ui.add(s,e.position)}else i&&function(e,t,i){const s=()=>{e.removeEventListener("arcgisViewReadyChange",s,!1),t.view=e.view,i||(t.childElem?t.view.ui.add(t.childElem,t.position):t.view.ui.add(t.el,t.position))};e.addEventListener("arcgisViewReadyChange",s,!1)}(i,e,t)}}function l(e){return void 0===e||null===e||""===e}function n(e){return null!=e&&e%1===0}function o(e,t){return void 0===t||e.position!==t.position||e.heading!==t.heading||e.tilt!==t.tilt}function d(e,t){return void 0===t||t.atmosphereEnabled!==e.atmosphereEnabled||t.lighting.date!==e.lighting.date||t.lighting.directShadowsEnabled!==e.lighting.directShadowsEnabled||t.lighting.cameraTrackingEnabled!==e.lighting.cameraTrackingEnabled||t.lighting.date!==e.lighting.date||t.lighting.displayUTCOffset!==e.lighting.displayUTCOffset}function c(e,t){return void 0===t||e.targetGeometry!==t.targetGeometry||e.rotation!==t.rotation||e.scale!==t.scale}async function h(e,t){"string"===typeof t?e.view=await async function(e){const t=document.querySelector(e);return await new Promise((e=>{if(void 0!==(null===t||void 0===t?void 0:t.view))e(t.view);else if(t){const i=()=>{t.removeEventListener("arcgisViewReadyChange",i,!1),e(t.view)};t.addEventListener("arcgisViewReadyChange",i,!1)}}))}(t):e.widget&&(e.view=t.view)}i.d(t,{a:()=>r,b:()=>c,c:()=>a,d:()=>s,e:()=>o,f:()=>d,g:()=>n,i:()=>l,r:()=>h})},9598:(e,t,i)=>{function s(e){var t,i;e.childElem?e.el.isConnected||(e.view?e.view.ui.remove(e.childElem):null!==(t=e.widget)&&void 0!==t&&t.view&&e.widget.view.ui.remove(e.childElem),e._watchHandles&&e._watchHandles.forEach((e=>{e.remove()})),e._watchHandles=[],null===(i=e.widget)||void 0===i||i.destroy()):setTimeout((()=>{var t,i;e.el.isConnected||(e.view?e.view.ui.remove(e.el):null!==(t=e.widget)&&void 0!==t&&t.view&&e.widget.view.ui.remove(e.el),e._watchHandles&&e._watchHandles.forEach((e=>{e.remove()})),e._watchHandles=[],null===(i=e.widget)||void 0===i||i.destroy())}),1e3)}i.d(t,{o:()=>s})}}]);
//# sourceMappingURL=56547.97b04273.chunk.js.map