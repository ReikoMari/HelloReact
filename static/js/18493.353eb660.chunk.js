"use strict";(self.webpackChunkhelloworld=self.webpackChunkhelloworld||[]).push([[18493],{71334:(e,t,o)=>{o.d(t,{C:()=>d});var i=o(3825),a=o(40565),r=o(19902),n=o(54994),l=o(71838),s=o(70414);const c=(0,a.dp)(s.A);async function d(e,t,o){t=c(t);const a=(0,n.Dl)(e),s={...a.query,f:"json",...t.toJSON()},d=t.outSpatialReference,p=(0,r.$B)(t.geometries[0]),u=(0,n.jV)(s,o);return(0,i.A)(a.path+"/project",u).then((e=>{let{data:{geometries:t}}=e;return(0,l.V)(t,p,d)}))}},70414:(e,t,o)=>{o.d(t,{A:()=>d});var i=o(35143),a=o(42553),r=o(46053),n=(o(81806),o(76460),o(47249),o(85842)),l=o(19902),s=o(80963);let c=class extends a.oY{constructor(e){super(e),this.geometries=[],this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const e=this.geometries.map((e=>e.toJSON())),t=this.geometries[0],o={};return o.outSR=(0,s.YX)(this.outSpatialReference),o.inSR=(0,s.YX)(t.spatialReference),o.geometries=JSON.stringify({geometryType:(0,l.$B)(t),geometries:e}),this.transformation&&(o.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(o.transformForward=this.transformForward),o}};(0,i._)([(0,r.MZ)()],c.prototype,"geometries",void 0),(0,i._)([(0,r.MZ)({json:{read:{source:"outSR"}}})],c.prototype,"outSpatialReference",void 0),(0,i._)([(0,r.MZ)()],c.prototype,"transformation",void 0),(0,i._)([(0,r.MZ)()],c.prototype,"transformForward",void 0),c=(0,i._)([(0,n.$)("esri.rest.support.ProjectParameters")],c);const d=c},18493:(e,t,o)=>{o.r(t),o.d(t,{default:()=>P});var i=o(35143),a=o(63241),r=o(76460),n=o(46053),l=(o(81806),o(47249),o(85842)),s=o(25329),c=(o(11265),o(16868)),d=o(50076),p=o(50346),u=o(85012),g=o(51287),h=o(99403),m=o(38042),v=o(63860);let y=class extends g.A{constructor(e){super(e),this._locateController=null,this.error=void 0,this.popupEnabled=!0,this.locate=this.locate.bind(this)}initialize(){this.addHandles([(0,m.oQ)((()=>{var e;const{graphic:t,view:o}=this;if(!t)return;(null===o||void 0===o||null===(e=o.graphics)||void 0===e?void 0:e.includes(t))&&this._updatePopupTemplate(t)}))])}destroy(){this.cancelLocate()}get state(){var e;return this._geolocationUsable?null!==(e=this.view)&&void 0!==e&&e.ready?this._locateController?"locating":null!=this.error?"error":"ready":"disabled":"feature-unsupported"}async locate(){if(this.cancelLocate(),"disabled"===this.state)throw new d.A("locate:disabled-state","Cannot locate when disabled.");if("feature-unsupported"===this.state)throw new d.A("locate:feature-unsupported-state","Cannot locate in unsecure domain.");const e=new AbortController;this._locateController=e,this.error=void 0;try{const t=await(0,h.J1)(this.geolocationOptions);if(await this.updatePosition(t,e),this._locateController!==e)return null;const{graphic:o}=this;return o&&await this._updatePopupTemplate(o),this._addGraphic(),this.emit("locate",{position:t}),this._locateController=null,t}catch(t){if((0,p.zf)(t))return null;throw e===this._locateController&&(this._locateController=null),this.error=t,this.emit("locate-error",{error:t}),t}}cancelLocate(){this._clearGraphic(),this._locateController&&this._locateController.abort(),this._locateController=null}async _updatePopupTemplate(e){if(!this.popupEnabled)return;const t=await async function(){const e=await(0,v.ud)("esri/widgets/Locate/t9n/Locate");return new c.A({title:e.currentLocation,fieldInfos:[{fieldName:"timestamp",label:e.timestamp,format:{dateFormat:"short-date-short-time"}},{fieldName:"latitude",label:e.latitude,format:{places:4,digitSeparator:!0}},{fieldName:"longitude",label:e.longitude,format:{places:4,digitSeparator:!0}},{fieldName:"accuracy",label:e.accuracy,format:{places:0,digitSeparator:!0}},{fieldName:"altitude",label:e.altitude,format:{places:0,digitSeparator:!0}},{fieldName:"altitudeAccuracy",label:e.altitudeAccuracy,format:{places:0,digitSeparator:!0}},{fieldName:"heading",label:e.heading,format:{places:0,digitSeparator:!0}},{fieldName:"speed",label:e.speed,format:{places:0,digitSeparator:!0}}],actions:[u.oq.clone()],content:[{type:"fields"}]})}(),o=e!==this.graphic;this.destroyed||o||(e.popupTemplate=t)}};(0,i._)([(0,n.MZ)()],y.prototype,"_locateController",void 0),(0,i._)([(0,n.MZ)()],y.prototype,"error",void 0),(0,i._)([(0,n.MZ)()],y.prototype,"popupEnabled",void 0),(0,i._)([(0,n.MZ)({readOnly:!0})],y.prototype,"state",null),(0,i._)([(0,n.MZ)()],y.prototype,"locate",null),(0,i._)([(0,n.MZ)()],y.prototype,"cancelLocate",null),y=(0,i._)([(0,l.$)("esri.widgets.Locate.LocateViewModel")],y);const w=y;var f=o(77666),A=o(98108),b=o(15062),M=(o(76099),o(63582)),E=o(12254),S=o(54761);const C={base:"esri-locate",widgetIcon:b.T.northNavigation};let _=class extends s.A{constructor(e,t){super(e,t),this.iconClass=C.widgetIcon,this.icon=null,this.messages=null,this.messagesCommon=null,this.viewModel=new w,this._locate=()=>{const{viewModel:e}=this;"locating"===e.state?e.cancelLocate():e.locate().catch((()=>{}))}}loadDependencies(){return(0,f.W)({button:()=>Promise.all([o.e(39879),o.e(62785),o.e(95203),o.e(75151),o.e(11309)]).then(o.bind(o,11309)),loader:()=>o.e(76454).then(o.bind(o,76454)),tooltip:()=>Promise.all([o.e(39879),o.e(48347),o.e(73786)]).then(o.bind(o,73786))})}get geolocationOptions(){return this.viewModel.geolocationOptions}set geolocationOptions(e){this.viewModel.geolocationOptions=e}get goToLocationEnabled(){return this.viewModel.goToLocationEnabled}set goToLocationEnabled(e){this.viewModel.goToLocationEnabled=e}get goToOverride(){return this.viewModel.goToOverride}set goToOverride(e){this.viewModel.goToOverride=e}get graphic(){return this.viewModel.graphic}set graphic(e){this.viewModel.graphic=e}get label(){var e,t;return null!==(e=null===(t=this.messages)||void 0===t?void 0:t.widgetLabel)&&void 0!==e?e:""}set label(e){this._overrideIfSome("label",e)}get popupEnabled(){return this.viewModel.popupEnabled}set popupEnabled(e){this.viewModel.popupEnabled=e}get rotationEnabled(){return(0,a.Lx)(r.A.getLogger(this),"rotationEnabled",{replacement:"use Track widget",version:"4.29",warnOnce:!0}),this.viewModel.rotationEnabled}set rotationEnabled(e){(0,a.Lx)(r.A.getLogger(this),"rotationEnabled",{replacement:"use Track widget",version:"4.29",warnOnce:!0}),this.viewModel.rotationEnabled=e}get scale(){return this.viewModel.scale}set scale(e){this.viewModel.scale=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}cancelLocate(){this.viewModel.cancelLocate()}locate(){return this.viewModel.locate()}render(){var e;const{viewModel:t,icon:o,iconClass:i}=this,{state:a}=t,r="locating"===a,n=r?this.messagesCommon.cancel:this.messages.title,l="feature-unsupported"===a,s=i===C.widgetIcon?void 0:i,c=void 0===s?"gps-off":void 0,d=null==o&&s,p=this._localizeError(null===(e=this.viewModel)||void 0===e?void 0:e.error);return(0,S.K)("div",{class:this.classes(C.base,A.D.widget)},!l&&(0,S.K)("calcite-button",{class:A.D.widgetButton,disabled:"disabled"===a,iconStart:r?void 0:null!==o&&void 0!==o?o:c,kind:"neutral",label:n,onclick:this._locate,scale:d?"s":"m",title:n},r?(0,S.K)("calcite-loader",{inline:!0,label:"",scale:"m"}):d?this._renderLegacyIcon(s):null),p?(0,S.K)("calcite-tooltip",{open:!0,overlayPositioning:"fixed",referenceElement:this.container},p):null)}_renderLegacyIcon(e){return(0,S.K)("span",{"aria-hidden":"true",class:e,styles:{display:"flex"}})}_localizeError(e){var t,o,i;return e instanceof GeolocationPositionError?e.code===GeolocationPositionError.PERMISSION_DENIED?null===(t=this.messages)||void 0===t?void 0:t.permissionError:e.code===GeolocationPositionError.TIMEOUT?null===(o=this.messages)||void 0===o?void 0:o.timeoutError:null===(i=this.messages)||void 0===i?void 0:i.positionUnavailable:e instanceof Error?e.message:void 0}};(0,i._)([(0,n.MZ)()],_.prototype,"geolocationOptions",null),(0,i._)([(0,n.MZ)()],_.prototype,"goToLocationEnabled",null),(0,i._)([(0,n.MZ)()],_.prototype,"goToOverride",null),(0,i._)([(0,n.MZ)()],_.prototype,"graphic",null),(0,i._)([(0,n.MZ)()],_.prototype,"iconClass",void 0),(0,i._)([(0,n.MZ)()],_.prototype,"icon",void 0),(0,i._)([(0,n.MZ)()],_.prototype,"label",null),(0,i._)([(0,n.MZ)(),(0,M.G)("esri/widgets/Locate/t9n/Locate")],_.prototype,"messages",void 0),(0,i._)([(0,n.MZ)(),(0,M.G)("esri/t9n/common")],_.prototype,"messagesCommon",void 0),(0,i._)([(0,n.MZ)()],_.prototype,"popupEnabled",null),(0,i._)([(0,n.MZ)()],_.prototype,"rotationEnabled",null),(0,i._)([(0,n.MZ)()],_.prototype,"scale",null),(0,i._)([(0,n.MZ)()],_.prototype,"view",null),(0,i._)([(0,n.MZ)({type:w}),(0,E.U)(["locate","locate-error"])],_.prototype,"viewModel",void 0),_=(0,i._)([(0,l.$)("esri.widgets.Locate")],_);const P=_},85012:(e,t,o)=>{o.d(t,{E$:()=>s,HZ:()=>p,RP:()=>c,oq:()=>d,po:()=>u});var i=o(19276),a=o(50037),r=o(16700),n=o(76192),l=o(15062);const s=i.A.ofType({key:"type",defaultKeyValue:"button",base:a.A,typeMap:{button:r.A,toggle:n.A}}),c=new r.A({icon:"magnifying-glass-plus",id:"zoom-to-feature",title:"{messages.zoom}",className:l.T.zoomInMagnifyingGlass}),d=new r.A({icon:"trash",id:"remove-selected-feature",title:"{messages.remove}",className:l.T.trash}),p=new r.A({icon:"magnifying-glass-plus",id:"zoom-to-clustered-features",title:"{messages.zoom}",className:l.T.zoomInMagnifyingGlass}),u=new n.A({icon:"table",id:"browse-clustered-features",title:"{messages.browseClusteredFeatures}",className:l.T.table,value:!1})},51287:(e,t,o)=>{o.d(t,{A:()=>w});var i=o(35143),a=o(39356),r=o(91967),n=o(50076),l=o(54099),s=o(50346),c=o(68134),d=o(46053),p=(o(81806),o(76460),o(47249),o(85842)),u=o(89465),g=o(99403),h=o(79535);const m={type:"CIMPictureMarker",primitiveName:"headingOverride",enable:!0,anchorPoint:{x:0,y:-.5},anchorPointUnits:"Relative",dominantSizeAxis3D:"Y",size:36,billboardMode3D:"FaceNearPlane",invertBackfaceTexture:!0,scaleX:1,textureFilter:"Picture",url:"data:image/png;base64,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"},v=new u.A({data:{type:"CIMSymbolReference",symbol:{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:0},anchorPointUnits:"Relative",dominantSizeAxis3D:"Y",size:14,billboardMode3D:"FaceNearPlane",frame:{xmin:0,ymin:0,xmax:17,ymax:17},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[8.5,0],[7.02,.13],[5.59,.51],[4.25,1.14],[3.04,1.99],[1.99,3.04],[1.14,4.25],[.51,5.59],[.13,7.02],[0,8.5],[.13,9.98],[.51,11.41],[1.14,12.75],[1.99,13.96],[3.04,15.01],[4.25,15.86],[5.59,16.49],[7.02,16.87],[8.5,17],[9.98,16.87],[11.41,16.49],[12.75,15.86],[13.96,15.01],[15.01,13.96],[15.86,12.75],[16.49,11.41],[16.87,9.98],[17,8.5],[16.87,7.02],[16.49,5.59],[15.86,4.25],[15.01,3.04],[13.96,1.99],[12.75,1.14],[11.41,.51],[9.98,.13],[8.5,0]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:"Round",joinStyle:"Round",lineStyle3D:"Strip",miterLimit:10,width:2,color:[255,255,255,255]},{type:"CIMSolidFill",enable:!0,color:[0,122,194,255]}]}}],scaleSymbolsProportionally:!0,respectFrame:!0},{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:0},anchorPointUnits:"Relative",dominantSizeAxis3D:"Y",size:16,billboardMode3D:"FaceNearPlane",frame:{xmin:0,ymin:0,xmax:17,ymax:17},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[8.5,0],[7.02,.13],[5.59,.51],[4.25,1.14],[3.04,1.99],[1.99,3.04],[1.14,4.25],[.51,5.59],[.13,7.02],[0,8.5],[.13,9.98],[.51,11.41],[1.14,12.75],[1.99,13.96],[3.04,15.01],[4.25,15.86],[5.59,16.49],[7.02,16.87],[8.5,17],[9.98,16.87],[11.41,16.49],[12.75,15.86],[13.96,15.01],[15.01,13.96],[15.86,12.75],[16.49,11.41],[16.87,9.98],[17,8.5],[16.87,7.02],[16.49,5.59],[15.86,4.25],[15.01,3.04],[13.96,1.99],[12.75,1.14],[11.41,.51],[9.98,.13],[8.5,0]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:"Round",joinStyle:"Round",lineStyle3D:"Strip",miterLimit:10,width:0,color:[255,255,255,255]},{type:"CIMSolidFill",enable:!0,color:[0,0,0,66]}]}}],scaleSymbolsProportionally:!0,respectFrame:!0,offsetX:0,offsetY:-1},m],angleAlignment:"Map"},primitiveOverrides:[{type:"CIMPrimitiveOverride",primitiveName:"headingOverride",propertyName:"Rotation",valueExpressionInfo:{type:"CIMExpressionInfo",title:"Rotation override",expression:"360 - $feature.heading",returnType:"Default"}},{type:"CIMPrimitiveOverride",primitiveName:"headingOverride",propertyName:"TintColor",valueExpressionInfo:{type:"CIMExpressionInfo",title:"TintColor override",expression:"IIF(IsEmpty($feature.heading), [255, 255, 255, 0], [255, 255, 255, 1])",returnType:"Default"}}]}});let y=class extends((0,h.R)(l.A.EventedMixin(r.A))){constructor(){super(...arguments),this._geolocationUsable=!0,this.geolocationOptions=null,this.goToLocationEnabled=!0,this.graphic=new a.A({symbol:v}),this.scale=null,this.rotationEnabled=!0,this.view=null}initialize(){(0,g.$j)()||(this._geolocationUsable=!1),this.addHandles([(0,c.watch)((()=>{var e;return null===(e=this.view)||void 0===e?void 0:e.type}),(()=>this._handleViewTypeChange()),c.initial)])}destroy(){this._clearGraphic(),this.view=null}_clearGraphic(){const{view:e,graphic:t}=this;e&&t&&e.graphics.remove(t)}_addGraphic(){const{view:e,graphic:t}=this;(null===e||void 0===e?void 0:e.graphics)&&t&&!e.graphics.includes(t)&&e.graphics.push(t)}_handleViewTypeChange(){var e;m.enable="2d"===(null===(e=this.view)||void 0===e?void 0:e.type)}_getScaleWithinConstraints(e,t){if(!t)return e;if("2d"===t.type){const{effectiveMaxScale:o,effectiveMinScale:i}=t.constraints;return Math.min(i,Math.max(o,e))}return e}_getScale(e){const{scale:t}=this,o="number"==typeof t?t:2500;return this._getScaleWithinConstraints(o,e)}_getHeading(e,t){var o;const i=null===t||void 0===t?void 0:t.spatialReference,a=(null===i||void 0===i?void 0:i.isWebMercator)||(null===i||void 0===i?void 0:i.isGeographic),r=null===(o=e.coords)||void 0===o?void 0:o.heading;return!a||"number"!=typeof r||isNaN(r)||r<0||r>360?null:r}_addHeading(e){const{heading:t,target:o,view:i}=e;i&&null!==t&&("3d"!==i.type?"2d"===i.type&&(o.rotation=360-t):o.heading=t)}async _animatePoint(e,t,o,i){const{view:a}=this;if(!this.goToLocationEnabled||!a)return;const r={target:e,scale:t};this.rotationEnabled&&this._addHeading({heading:o,target:r,view:a});const n={signal:i.signal};(0,s.Te)(n),await this.callGoTo({target:r,options:n})}async updatePosition(e,t){try{const o=this.view,i=await(0,g.Ly)({position:e,view:o},{signal:t.signal}),{graphic:a}=this,{timestamp:r,coords:n}=e,{accuracy:l,altitude:s,altitudeAccuracy:c,latitude:d,longitude:p,speed:u}=n,h=this._getHeading(e,o),m={timestamp:r,accuracy:l,altitude:s,altitudeAccuracy:c,heading:h,latitude:d,longitude:p,speed:u};a&&(a.geometry=i,a.attributes=m);const v=this._getScale(o);await this._animatePoint(i,v,h,t)}catch(o){if(!(0,s.zf)(o))throw new n.A("geolocation-positioning:invalid-point","Cannot position invalid point",{error:o})}return e}};(0,i._)([(0,d.MZ)()],y.prototype,"_geolocationUsable",void 0),(0,i._)([(0,d.MZ)()],y.prototype,"geolocationOptions",void 0),(0,i._)([(0,d.MZ)()],y.prototype,"goToLocationEnabled",void 0),(0,i._)([(0,d.MZ)({type:a.A,nonNullable:!0})],y.prototype,"graphic",void 0),(0,i._)([(0,d.MZ)()],y.prototype,"scale",void 0),(0,i._)([(0,d.MZ)()],y.prototype,"rotationEnabled",void 0),(0,i._)([(0,d.MZ)()],y.prototype,"view",void 0),y=(0,i._)([(0,p.$)("esri.widgets.support.GeolocationPositioning")],y);const w=y},12254:(e,t,o)=>{function i(e){return t=>{t.hasOwnProperty("_delegatedEventNames")||(t._delegatedEventNames=t._delegatedEventNames?t._delegatedEventNames.slice():[]);const o=t._delegatedEventNames,i=Array.isArray(e)?e:function(e){return e.split(",").map((e=>e.trim()))}(e);o.push(...i)}}o.d(t,{U:()=>i})},99403:(e,t,o)=>{o.d(t,{$j:()=>h,J1:()=>m,Ly:()=>y});var i=o(86560),a=o(50076),r=o(81806),n=o(76460),l=o(13904),s=o(45417),c=o(65308),d=o(71334),p=o(70414);const u=()=>n.A.getLogger("esri.widgets.support.geolocationUtils"),g={maximumAge:0,timeout:15e3,enableHighAccuracy:!0};function h(){return function(){const e=(0,r.A)("esri-geolocation");return e||u().warn("geolocation-unsupported","Geolocation unsupported."),e}()&&function(){const e=window.isSecureContext;return e||u().warn("insecure-context","Geolocation requires a secure origin."),e}()}function m(e){return e||(e=g),new Promise(((t,o)=>{var i;setTimeout((()=>o(new a.A("geolocation:timeout","getting the current geolocation position timed out"))),15e3),navigator.geolocation.getCurrentPosition(t,o,null!==(i=e)&&void 0!==i?i:void 0)}))}let v;function y(e,t){if(v)return v(e,t);const{position:o,view:r}=e,n=function(e){const t=e&&e.coords||{},o={accuracy:t.accuracy,altitude:t.altitude,altitudeAccuracy:t.altitudeAccuracy,heading:t.heading,latitude:t.latitude,longitude:t.longitude,speed:t.speed};return e?{coords:o,timestamp:e.timestamp}:e}(o),u=null===n||void 0===n?void 0:n.coords;if(!u)throw new a.A("geometry-service:no-coords","Geolocation has no coordinates");return function(e,t,o){if(!t)return Promise.resolve(e);const r=t.spatialReference;return r.isWGS84?Promise.resolve(e):r.isWebMercator?Promise.resolve((0,s.Gh)(e)):function(e){if(i.A.geometryServiceUrl)return Promise.resolve(i.A.geometryServiceUrl);const t=c.A.getDefault();return t.load(e).catch((()=>{})).then((()=>{var e;return null===(e=t.helperServices)||void 0===e||null===(e=e.geometry)||void 0===e?void 0:e.url}))}(o).then((t=>{if(!t)throw new a.A("geometry-service:missing-url","Geometry service URL is missing");const i=new p.A({geometries:[e],outSpatialReference:r});return(0,d.C)(t,i,o).then((e=>e[0]))}))}(function(e){let{longitude:t,latitude:o,altitude:i}=e;return new l.A({longitude:t,latitude:o,z:i||void 0,spatialReference:{wkid:4326}})}(u),r,t)}}}]);
//# sourceMappingURL=18493.353eb660.chunk.js.map