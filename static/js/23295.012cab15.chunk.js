/*! For license information please see 23295.012cab15.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhelloworld=self.webpackChunkhelloworld||[]).push([[23295],{23295:(i,e,t)=>{t.r(e),t.d(e,{arcgis_basemap_gallery:()=>r,arcgis_map:()=>o});var s=t(85643),a=t(83308),h=t(82754),n=t(9598);const r=class{constructor(i){(0,s.r)(this,i),this.arcgisBasemapGalleryReady=(0,s.c)(this,"arcgisBasemapGalleryReady",7),this._watchHandles=[],this.referenceElement=void 0,this.activeBasemap=void 0,this.disabled=!1,this.icon=void 0,this.source=void 0,this.position="bottom-left",this.view=void 0,this.widget=void 0}referenceElementWatcher(i){(0,h.r)(this,i)}disabledWatcher(i,e){this.widget&&i!==e&&(this.widget.disabled=i)}iconWatcher(i){this.widget&&(this.widget.icon=i,this.widget.iconClass=i)}sourceWatcher(i){this.widget&&(this.widget.source=i)}positionWatcher(i){void 0!==i&&this.widget&&this.view.ui.move(this.childElem,i)}viewWatcher(i){void 0!==i&&this.widget&&(this.widget.view=i)}async componentDidLoad(){const i=this._createParams(),e=await(0,a.n)(i);this.widget=e,await this._addWatchers(),this._addContainer(),this.arcgisBasemapGalleryReady.emit(),(0,h.c)(this)}disconnectedCallback(){(0,n.o)(this)}render(){return(0,s.h)("div",{ref:i=>this.childElem=i})}_addContainer(){this.widget.container=this.childElem}async _addWatchers(){const{watch:i}=await(0,a.i)();(0,h.a)(this,[i((()=>this.widget.source),(()=>this.source=this.widget.source),{initial:!0}),i((()=>this.widget.activeBasemap),(i=>this.activeBasemap=i),{initial:!0}),i((()=>this.widget.disabled),(i=>this.disabled=i))])}_createParams(){const i={};return this.icon&&(i.icon=this.icon,i.iconClass=this.icon),this.source&&(i.source=this.source),this.view&&(i.view=this.view),i}get el(){return(0,s.g)(this)}static get watchers(){return{referenceElement:["referenceElementWatcher"],disabled:["disabledWatcher"],icon:["iconWatcher"],source:["sourceWatcher"],position:["positionWatcher"],view:["viewWatcher"]}}};r.style="";const o=class{constructor(i){(0,s.r)(this,i),this.arcgisViewReadyChange=(0,s.c)(this,"arcgisViewReadyChange",7),this.arcgisViewChange=(0,s.c)(this,"arcgisViewChange",7),this.arcgisViewClick=(0,s.c)(this,"arcgisViewClick",7),this.arcgisViewDoubleClick=(0,s.c)(this,"arcgisViewDoubleClick",7),this.arcgisViewDrag=(0,s.c)(this,"arcgisViewDrag",7),this.arcgisViewHold=(0,s.c)(this,"arcgisViewHold",7),this.arcgisViewImmediateClick=(0,s.c)(this,"arcgisViewImmediateClick",7),this.arcgisViewImmediateDoubleClick=(0,s.c)(this,"arcgisViewImmediateDoubleClick",7),this.arcgisViewKeyDown=(0,s.c)(this,"arcgisViewKeyDown",7),this.arcgisViewKeyUp=(0,s.c)(this,"arcgisViewKeyUp",7),this.arcgisViewLayerviewCreate=(0,s.c)(this,"arcgisViewLayerviewCreate",7),this.arcgisViewLayerviewCreateError=(0,s.c)(this,"arcgisViewLayerviewCreateError",7),this.arcgisViewLayerviewDestroy=(0,s.c)(this,"arcgisViewLayerviewDestroy",7),this.arcgisViewMouseWheel=(0,s.c)(this,"arcgisViewMouseWheel",7),this.arcgisViewPointerDown=(0,s.c)(this,"arcgisViewPointerDown",7),this.arcgisViewPointerEnter=(0,s.c)(this,"arcgisViewPointerEnter",7),this.arcgisViewPointerLeave=(0,s.c)(this,"arcgisViewPointerLeave",7),this.arcgisViewPointerMove=(0,s.c)(this,"arcgisViewPointerMove",7),this.arcgisViewPointerUp=(0,s.c)(this,"arcgisViewPointerUp",7),this._watchHandles=[],this.allLayerViews=void 0,this.background=void 0,this.basemapView=void 0,this.basemap=void 0,this.center=void 0,this.constraints=void 0,this.destroyDisabled=!1,this.extent=void 0,this.fatalError=void 0,this.floors=void 0,this.gamepad=void 0,this.graphics=void 0,this.highlightOptions=void 0,this.interacting=!1,this.itemId=void 0,this.layerViews=void 0,this.magnifier=void 0,this.map=void 0,this.navigating=!1,this.navigation=void 0,this.padding=void 0,this.popup=void 0,this.popupEnabled=!0,this.ready=!1,this.resizeAlign=void 0,this.resolution=void 0,this.rotation=0,this.scale=void 0,this.spatialReference=void 0,this.stationary=void 0,this.suspended=!0,this.theme=void 0,this.timeExtent=void 0,this.timeZone="system",this.toMap=void 0,this.toScreen=void 0,this.updating=!1,this.viewpoint=void 0,this.zoom=void 0,this.view=void 0}backgroundWatcher(i){this.view&&(this.background=i)}basemapWatcher(i){var e,t;("string"===typeof i&&null!==(e=this.view)&&void 0!==e&&e.map&&!(0,h.i)(i)||null!==(t=this.view)&&void 0!==t&&t.map)&&(this.view.map.basemap=i)}centerWatcher(i,e){if(i!==e&&this.view)if("string"===typeof i){const e=i.split(",").map((i=>Number(i)));e[0]!==this.view.center.longitude&&e[1]!==this.view.center.latitude&&(this.view.center=e)}else Array.isArray(i)?i[0]!==this.view.center.longitude&&i[1]!==this.view.center.latitude&&(this.view.center=i):this.view.center.equals(i)||(this.view.center=i)}constraintsWatcher(i){this.view&&(this.view.constraints=i)}extentWatcher(i){this.view&&i&&!this.view.extent.equals(i)&&(this.view.extent=i)}floorsWatcher(i){this.view&&(this.view.floors=i)}graphicsWatcher(i){this.view&&(this.view.graphics=i)}highlightOptionsWatcher(i){this.view&&(this.view.highlightOptions=i)}itemIdWatcher(i,e){var t;i!==e&&(null!==(t=this.view)&&void 0!==t&&t.map?this._updateMap():this._loadMap())}mapWatcher(i){this.view&&(this.view.map=i)}navigationWatcher(i){this.view&&(this.view.navigation=i)}paddingWatcher(i){this.view&&(this.view.padding=i)}popupWatcher(i){this.view&&(this.view.popup=i)}popupEnabledWatcher(i,e){i!==e&&this.view&&(this.view.popupEnabled=i)}resizeAlignWatcher(i){this.view&&(this.view.resizeAlign=i)}rotationWatcher(i){this.view&&this.view.rotation!==i&&(this.view.rotation=i)}scaleWatcher(i,e){var t;null!==(t=this.view)&&void 0!==t&&t.interacting||null==i||i===e||(this.view.scale=i)}spatialReferenceWatcher(i){this.view&&i&&!this.view.spatialReference.equals(i)&&(this.view.spatialReference=i)}themeWatcher(i){this.view&&(this.view.theme=i)}timeExtentWatcher(i){this.view&&(this.view.timeExtent=i)}timeZoneWatcher(i){this.view&&(this.view.timeZone=i)}viewpointWatcher(i){this.view&&(0,h.b)(this.view.viewpoint,i)&&(this.view.viewpoint=i)}zoomWatcher(i,e){var t;null!==(t=this.view)&&void 0!==t&&t.interacting||null==i||i===e||(this.view.zoom=i)}async closePopup(){var i;null===(i=this.view)||void 0===i||i.closePopup()}async destroy(){this.destroyDisabled&&(this._clearWatchHandles(),this.view.destroy())}async goTo(i,e){var t;return await(null===(t=this.view)||void 0===t?void 0:t.goTo(i,e))}async hitTest(i,e){var t;return await(null===(t=this.view)||void 0===t?void 0:t.hitTest(i,e))}async openPopup(i){var e;null===(e=this.view)||void 0===e||e.openPopup(i)}async takeScreenshot(i){var e;return await(null===(e=this.view)||void 0===e?void 0:e.takeScreenshot(i))}async tryFatalErrorRecovery(){var i;null===(i=this.view)||void 0===i||i.tryFatalErrorRecovery()}async whenLayerView(i){var e;return await(null===(e=this.view)||void 0===e?void 0:e.whenLayerView(i))}async componentWillLoad(){this.view||await this._loadMap()}componentDidRender(){this.view&&!this.view.container&&(this.view.container=this.el)}componentDidLoad(){this._proxyEvents()}disconnectedCallback(){this.destroy()}render(){return(0,s.h)("div",{class:"arcgis-map",ref:i=>this.el=i})}_clearWatchHandles(){this._watchHandles.forEach((i=>i.remove())),this._watchHandles=[]}async _addWatchers(){const{watch:i,when:e}=await(0,a.i)();(0,h.a)(this,[i((()=>this.view.stationary),(()=>{this.stationary=this.view.stationary,this.interacting=this.view.interacting,this.navigating=this.view.navigating,this.arcgisViewChange.emit()}),{initial:!0}),e((()=>this.view.stationary),(()=>{this.center=this.view.center,this.extent=this.view.extent,this.scale=this.view.scale,this.viewpoint=this.view.viewpoint,this.zoom=this.view.zoom,this.spatialReference=this.view.spatialReference})),i((()=>this.view.allLayerViews),(()=>{this.allLayerViews=this.view.allLayerViews}),{initial:!0}),i((()=>{var i;return null===(i=this.view.map)||void 0===i?void 0:i.basemap}),(()=>{var i;this.basemap=null===(i=this.view.map)||void 0===i?void 0:i.basemap}),{initial:!0}),i((()=>this.view.fatalError),(()=>{this.fatalError=this.view.fatalError}),{initial:!0}),i((()=>this.view.input.gamepad),(()=>{this.gamepad=this.view.input.gamepad}),{initial:!0}),i((()=>this.view.graphics),(()=>{this.graphics=this.view.graphics}),{initial:!0}),i((()=>this.view.layerViews),(()=>{this.layerViews=this.view.layerViews}),{initial:!0}),i((()=>this.view.navigation),(()=>{this.navigation=this.view.navigation}),{initial:!0}),i((()=>this.view.map),(()=>{this.map=this.view.map}),{initial:!0}),i((()=>this.view.popup),(()=>{this.popup=this.view.popup}),{initial:!0}),i((()=>this.view.resolution),(()=>{this.resolution=this.view.resolution}),{initial:!0}),i((()=>this.view.rotation),(()=>{this.rotation=this.view.rotation}),{initial:!0}),i((()=>this.view.suspended),(()=>{this.suspended=this.view.suspended}),{initial:!0}),i((()=>this.view.updating),(()=>{this.updating=this.view.updating}),{initial:!0}),i((()=>this.view.ready),(()=>{this.ready=this.view.ready,this.arcgisViewReadyChange.emit()}),{initial:!0})])}async _createMap(){const i={};this.itemId&&(i.portalItem=await this._createPortalItem()),this.basemap?i.basemap=this.basemap:(0,h.i)(this.itemId)&&(i.basemap="topo-vector");return await(0,a.a)(i)}async _createPortalItem(){const i={};return this.itemId&&(i.id=this.itemId),i}_createViewParams(){const i={};return this.background&&(i.background=this.background),this.center&&("string"===typeof this.center?i.center=this.center.split(",").map((i=>Number(i))):i.center=this.center),this.constraints&&(i.constraints=this.constraints),this.extent&&(i.extent=this.extent),this.floors&&(i.floors=this.floors),this.graphics&&(i.graphics=this.graphics),this.highlightOptions&&(i.highlightOptions=this.highlightOptions),this.map&&(i.map=this.map),this.navigation&&(i.navigation=this.navigation),this.padding&&(i.padding=this.padding),this.popup&&(i.popup=this.popup),void 0!==this.popupEnabled&&(i.popupEnabled=this.popupEnabled),void 0!==this.rotation&&(i.rotation=this.rotation),void 0!==this.scale&&(i.scale=this.scale),this.spatialReference&&(i.spatialReference=this.spatialReference),this.theme&&(i.theme=this.theme),this.timeExtent&&(i.timeExtent=this.timeExtent),this.timeZone&&(i.timeZone=this.timeZone),this.viewpoint&&(i.viewpoint=this.viewpoint),void 0!==this.zoom&&(i.zoom=this.zoom),i}async _loadMap(){this.map||(this.map=await this._createMap());const i=this._createViewParams(),e=await(0,a.b)({...i});this.view=e,e.when((async()=>{this.toMap=e.toMap.bind(e),this.toScreen=e.toScreen.bind(e),await this._addWatchers()}))}_proxyEvents(){(0,h.a)(this,[this.view.on("click",(i=>{this.arcgisViewClick.emit(i)})),this.view.on("double-click",(i=>{this.arcgisViewDoubleClick.emit(i)})),this.view.on("drag",(i=>{this.arcgisViewDrag.emit(i)})),this.view.on("hold",(i=>{this.arcgisViewHold.emit(i)})),this.view.on("immediate-click",(i=>{this.arcgisViewImmediateClick.emit(i)})),this.view.on("immediate-double-click",(i=>{this.arcgisViewImmediateDoubleClick.emit(i)})),this.view.on("key-down",(i=>{this.arcgisViewKeyDown.emit(i)})),this.view.on("key-up",(i=>{this.arcgisViewKeyUp.emit(i)})),this.view.on("layerview-create",(i=>{this.arcgisViewLayerviewCreate.emit(i)})),this.view.on("layerview-create-error",(i=>{this.arcgisViewLayerviewCreateError.emit(i)})),this.view.on("layerview-destroy",(i=>{this.arcgisViewLayerviewDestroy.emit(i)})),this.view.on("mouse-wheel",(i=>{this.arcgisViewMouseWheel.emit(i)})),this.view.on("pointer-down",(i=>{this.arcgisViewPointerDown.emit(i)})),this.view.on("pointer-enter",(i=>{this.arcgisViewPointerEnter.emit(i)})),this.view.on("pointer-leave",(i=>{this.arcgisViewPointerLeave.emit(i)})),this.view.on("pointer-move",(i=>{this.arcgisViewPointerMove.emit(i)})),this.view.on("pointer-up",(i=>{this.arcgisViewPointerUp.emit(i)}))])}async _updateMap(){var i;if(null!==(i=this.view)&&void 0!==i&&i.map){this.view.map.destroy();const i=await this._createMap();this.view.map=i}}get _hostElement(){return(0,s.g)(this)}static get watchers(){return{background:["backgroundWatcher"],basemap:["basemapWatcher"],center:["centerWatcher"],constraints:["constraintsWatcher"],extent:["extentWatcher"],floors:["floorsWatcher"],graphics:["graphicsWatcher"],highlightOptions:["highlightOptionsWatcher"],itemId:["itemIdWatcher"],map:["mapWatcher"],navigation:["navigationWatcher"],padding:["paddingWatcher"],popup:["popupWatcher"],popupEnabled:["popupEnabledWatcher"],resizeAlign:["resizeAlignWatcher"],rotation:["rotationWatcher"],scale:["scaleWatcher"],spatialReference:["spatialReferenceWatcher"],theme:["themeWatcher"],timeExtent:["timeExtentWatcher"],timeZone:["timeZoneWatcher"],viewpoint:["viewpointWatcher"],zoom:["zoomWatcher"]}}};o.style=".arcgis-map{padding:0;margin:0;height:100%;width:100%}"},82754:(i,e,t)=>{function s(i){const e=i.el.closest("arcgis-expand")||i.expandElem;if(null!==e&&void 0!==e&&e.widget)return i.view=e.view,e.widget.content=i.childElem,e.expandIcon||(e.widget.expandIcon=i.widget.icon,e.widget.expandIconClass=i.widget.iconClass),!0;if(e){const t=()=>{e.removeEventListener("arcgisExpandReady",t,!1),i.view=e.view,e.widget.content=i.childElem,e.expandIcon||(e.widget.expandIcon=i.widget.icon,e.widget.expandIconClass=i.widget.iconClass)};return e.addEventListener("arcgisExpandReady",t,!1),!0}return!1}function a(i,e){Array.isArray(e)?i._watchHandles=[...i._watchHandles,...e]:i._watchHandles.push(e)}function h(i){let e=!1;if(s(i)){var t;const e=null!==(t=i.el.closest("arcgis-map"))&&void 0!==t?t:i.el.closest("arcgis-scene");if(null!==e&&void 0!==e&&e.view)i.view=e.view;else if(e){const t=()=>{e.removeEventListener("arcgisViewReadyChange",t,!1),i.view=e.view};e.addEventListener("arcgisViewReadyChange",t,!1)}}else{var a,h;let t=null!==(a=i.el.closest("arcgis-map"))&&void 0!==a?a:i.el.closest("arcgis-scene");if(t||"string"!==typeof i.referenceElement||(t=document.querySelector(i.referenceElement),e=!0),null!==(h=t)&&void 0!==h&&h.view){var n;i.view=t.view;const s=null!==(n=i.childElem)&&void 0!==n?n:i.el;e||i.view.ui.add(s,i.position)}else t&&function(i,e,t){const s=()=>{i.removeEventListener("arcgisViewReadyChange",s,!1),e.view=i.view,t||(e.childElem?e.view.ui.add(e.childElem,e.position):e.view.ui.add(e.el,e.position))};i.addEventListener("arcgisViewReadyChange",s,!1)}(t,i,e)}}function n(i){return void 0===i||null===i||""===i}function r(i){return null!=i&&i%1===0}function o(i,e){return void 0===e||i.position!==e.position||i.heading!==e.heading||i.tilt!==e.tilt}function c(i,e){return void 0===e||e.atmosphereEnabled!==i.atmosphereEnabled||e.lighting.date!==i.lighting.date||e.lighting.directShadowsEnabled!==i.lighting.directShadowsEnabled||e.lighting.cameraTrackingEnabled!==i.lighting.cameraTrackingEnabled||e.lighting.date!==i.lighting.date||e.lighting.displayUTCOffset!==i.lighting.displayUTCOffset}function w(i,e){return void 0===e||i.targetGeometry!==e.targetGeometry||i.rotation!==e.rotation||i.scale!==e.scale}async function d(i,e){"string"===typeof e?i.view=await async function(i){const e=document.querySelector(i);return await new Promise((i=>{if(void 0!==(null===e||void 0===e?void 0:e.view))i(e.view);else if(e){const t=()=>{e.removeEventListener("arcgisViewReadyChange",t,!1),i(e.view)};e.addEventListener("arcgisViewReadyChange",t,!1)}}))}(e):i.widget&&(i.view=e.view)}t.d(e,{a:()=>a,b:()=>w,c:()=>h,d:()=>s,e:()=>o,f:()=>c,g:()=>r,i:()=>n,r:()=>d})},9598:(i,e,t)=>{function s(i){var e,t;i.childElem?i.el.isConnected||(i.view?i.view.ui.remove(i.childElem):null!==(e=i.widget)&&void 0!==e&&e.view&&i.widget.view.ui.remove(i.childElem),i._watchHandles&&i._watchHandles.forEach((i=>{i.remove()})),i._watchHandles=[],null===(t=i.widget)||void 0===t||t.destroy()):setTimeout((()=>{var e,t;i.el.isConnected||(i.view?i.view.ui.remove(i.el):null!==(e=i.widget)&&void 0!==e&&e.view&&i.widget.view.ui.remove(i.el),i._watchHandles&&i._watchHandles.forEach((i=>{i.remove()})),i._watchHandles=[],null===(t=i.widget)||void 0===t||t.destroy())}),1e3)}t.d(e,{o:()=>s})}}]);
//# sourceMappingURL=23295.012cab15.chunk.js.map