"use strict";(self.webpackChunkhelloworld=self.webpackChunkhelloworld||[]).push([[25745],{90321:(e,t,i)=>{function s(e,t){return e?t?4:3:t?3:2}function r(e,t,i,r){if(null===t||void 0===t||!t.lengths.length)return null;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const o=e.coords,a=[],u=i?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:d,coords:c}=t,p=s(i,r);let h=0;for(const s of d){const e=n(u,c,h,s,i,r);e&&a.push(e),h+=s*p}if(a.sort(((e,t)=>{let s=e[2]-t[2];return 0===s&&i&&(s=e[4]-t[4]),s})),a.length){let e=6*a[0][2];o[0]=a[0][0]/e,o[1]=a[0][1]/e,i&&(e=6*a[0][4],o[2]=0!==e?a[0][3]/e:0),(o[0]<u[0]||o[0]>u[1]||o[1]<u[2]||o[1]>u[3]||i&&(o[2]<u[4]||o[2]>u[5]))&&(o.length=0)}if(!o.length){const e=t.lengths[0]?l(c,0,d[0],i,r):null;if(!e)return null;o[0]=e[0],o[1]=e[1],i&&e.length>2&&(o[2]=e[2])}return e}function n(e,t,i,r,n,l){const o=s(n,l);let a=i,u=i+o,d=0,c=0,p=0,h=0,g=0;for(let s=0,v=r-1;s<v;s++,a+=o,u+=o){const i=t[a],s=t[a+1],r=t[a+2],l=t[u],o=t[u+1],y=t[u+2];let v=i*o-l*s;h+=v,d+=(i+l)*v,c+=(s+o)*v,n&&(v=i*y-l*r,p+=(r+y)*v,g+=v),i<e[0]&&(e[0]=i),i>e[1]&&(e[1]=i),s<e[2]&&(e[2]=s),s>e[3]&&(e[3]=s),n&&(r<e[4]&&(e[4]=r),r>e[5]&&(e[5]=r))}if(h>0&&(h*=-1),g>0&&(g*=-1),!h)return null;const y=[d,c,.5*h];return n&&(y[3]=p,y[4]=.5*g),y}function l(e,t,i,r,n){const l=s(r,n);let c=t,p=t+l,h=0,g=0,y=0,v=0;for(let s=0,f=i-1;s<f;s++,c+=l,p+=l){const t=e[c],i=e[c+1],s=e[c+2],n=e[p],l=e[p+1],f=e[p+2],m=r?a(t,i,s,n,l,f):o(t,i,n,l);if(m)if(h+=m,r){const e=d(t,i,s,n,l,f);g+=m*e[0],y+=m*e[1],v+=m*e[2]}else{const e=u(t,i,n,l);g+=m*e[0],y+=m*e[1]}}return h>0?r?[g/h,y/h,v/h]:[g/h,y/h]:i>0?r?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function o(e,t,i,s){const r=i-e,n=s-t;return Math.sqrt(r*r+n*n)}function a(e,t,i,s,r,n){const l=s-e,o=r-t,a=n-i;return Math.sqrt(l*l+o*o+a*a)}function u(e,t,i,s){return[e+.5*(i-e),t+.5*(s-t)]}function d(e,t,i,s,r,n){return[e+.5*(s-e),t+.5*(r-t),i+.5*(n-i)]}i.d(t,{Q:()=>r})},33376:(e,t,i)=>{i.d(t,{T:()=>l});var s=i(90321),r=i(20176),n=i(1484);const l={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new r.Om(t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>(null==e.centroid&&(e.centroid=(0,s.Q)(new n.A,e.geometry,t.hasZ,t.hasM)),e.centroid)}},42208:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var s=i(35143),r=i(50076),n=i(30726),l=i(68134),o=i(46053),a=(i(81806),i(76460),i(47249),i(85842)),u=i(83491),d=i(19321),c=i(183),p=i(43804),h=i(65768),g=i(40200),y=i(44513),v=i(91196);let f=class extends((0,u.w)(v.A)){constructor(){super(...arguments),this.type="graphics-3d",this.symbologySnappingSupported=!0,this._slicePlaneEnabled=!1,this.fullExtentInLocalViewSpatialReference=null,this.ignoresMemoryFactor=!0}initialize(){this._set("processor",new c.K({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.initializePromise),this.addHandles(this.layer.on("graphic-update",(e=>this.processor.graphicsCore.graphicUpdateHandler(e)))),this.addResolvingPromise((0,g.V)(this).then((e=>this.fullExtentInLocalViewSpatialReference=e))),this.layer.internal?this.notifyChange("updating"):this.addHandles((0,l.when)((()=>{var e;return null===(e=this.view)||void 0===e||null===(e=e.basemapTerrain)||void 0===e?void 0:e.ready}),(()=>()=>this.notifyChange("updating")),{once:!0}))}destroy(){this._updatingHandles.removeAll(),this._set("processor",(0,n.pR)(this.processor))}get loadedGraphics(){return this.layer.graphics}get legendEnabled(){var e;return this.canResume()&&!(null!==(e=this.processor)&&void 0!==e&&e.frustumVisibilitySuspended)}get slicePlaneEnabled(){const e=this.layer.internal;return this._slicePlaneEnabled&&!e}set slicePlaneEnabled(e){this._slicePlaneEnabled=e}getSuspendInfo(){var e,t,i,s;const r=super.getSuspendInfo();return r.outsideScaleRange=null!==(e=null===(t=this.processor)||void 0===t?void 0:t.scaleVisibilitySuspended)&&void 0!==e&&e,r.outsideOfView=null!==(i=null===(s=this.processor)||void 0===s?void 0:s.frustumVisibilitySuspended)&&void 0!==i&&i,r}getHit(e){return this.processor.getHit(e)}whenGraphicBounds(e,t){return this.processor.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){var i;return null===(i=this.processor)||void 0===i?void 0:i.computeAttachmentOrigin(e,t)}getSymbolLayerSize(e,t){return this.processor.getSymbolLayerSize(e,t)}queryGraphics(){return Promise.resolve(this.loadedGraphics)}maskOccludee(e){return this.processor.maskOccludee(e)}highlight(e){return this.processor.highlight(e)}async elevationAlignPointsInFeatures(e,t){const{processor:i}=this;if(null==(null===i||void 0===i?void 0:i.graphics3DGraphics))throw new r.A("graphicslayerview3d:missing-processor","A Graphics3D processor is needed to resolve graphics elevation.");const{graphics3DGraphics:s}=i;return(0,d.a)(this.view,this.layer,(e=>"number"==typeof e?s.get(e):void 0),e,t)}async queryForSymbologySnapping(e,t){return(0,p.N)(this.processor,e,t)}get updatePolicy(){var e;return(null===(e=this.processor)||void 0===e?void 0:e.graphicsCore.effectiveUpdatePolicy)||y.q.SYNC}canResume(){var e;return super.canResume()&&!(null!==(e=this.processor)&&void 0!==e&&e.scaleVisibilitySuspended)}isUpdating(){var e,t;return this.view&&this.layer&&!((null===(e=this.processor)||void 0===e||!e.updating)&&(this.layer.internal||null!==(t=this.view.basemapTerrain)&&void 0!==t&&t.ready))}get performanceInfo(){return new h.P(this.usedMemory,this.loadedGraphics.length,-1,-1)}get usedMemory(){var e,t;return null!==(e=null===(t=this.processor)||void 0===t||null===(t=t.graphicsCore)||void 0===t?void 0:t.usedMemory)&&void 0!==e?e:0}get unloadedMemory(){var e;return null===(e=this.processor)||void 0===e||null===(e=e.graphicsCore)||void 0===e?void 0:e.unprocessedMemoryEstimate}};(0,s._)([(0,o.MZ)()],f.prototype,"loadedGraphics",null),(0,s._)([(0,o.MZ)({readOnly:!0})],f.prototype,"legendEnabled",null),(0,s._)([(0,o.MZ)()],f.prototype,"layer",void 0),(0,s._)([(0,o.MZ)({readOnly:!0})],f.prototype,"processor",void 0),(0,s._)([(0,o.MZ)()],f.prototype,"_slicePlaneEnabled",void 0),(0,s._)([(0,o.MZ)({type:Boolean})],f.prototype,"slicePlaneEnabled",null),f=(0,s._)([(0,a.$)("esri.views.3d.layers.GraphicsLayerView3D")],f);const m=f},83491:(e,t,i)=>{i.d(t,{w:()=>d});var s=i(35143),r=i(54901),n=i(50346),l=i(68134),o=i(46053),a=(i(81806),i(76460),i(47249),i(85842)),u=i(47700);const d=e=>{let t=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(e){super.postscript(e),(0,u.jI)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.addHandles((0,r.hA)((()=>e.abort()))),await(0,l.whenOnce)((()=>{var e;return null===(e=this.view.defaultsFromMap)||void 0===e?void 0:e.heightModelInfoReady}),t),(0,n.Te)(t);const i=(0,u.Hu)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!(null!==e&&void 0!==e&&e.minScale)||!e.maxScale||e.minScale>=e.maxScale)}getSuspendInfo(){const e=super.getSuspendInfo(),t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return t&&t.minScale&&t.maxScale&&t.minScale<t.maxScale&&(e.outsideScaleRange=!0),e}};return(0,s._)([(0,o.MZ)()],t.prototype,"view",void 0),(0,s._)([(0,o.MZ)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,s._)([(0,a.$)("esri.views.3d.layers.LayerView3D")],t),t}},183:(e,t,i)=>{i.d(t,{K:()=>O});var s=i(35143),r=i(39356),n=i(91967),l=i(19276),o=i(54901),a=i(30726),u=i(50346),d=i(68134),c=i(46053),p=(i(81806),i(76460),i(47249),i(85842)),h=i(15011),g=i(19451),y=i(25515),v=i(32535),f=i(86486),m=i(68295),b=i(57662),w=i(38865),I=i(23475),_=i(35148),S=i(44220),E=i(90592),C=i(93788),M=i(36423),V=i(83490),P=i(44513);let O=class extends n.A{constructor(e){super(e),this.type="graphics-3d",this.graphicsCore=null,this.drapeSourceType=b.Om.Features,this.scaleVisibilityEnabled=!1,this.frustumVisibilityEnabled=!1,this._suspendResumeExtent=null,this._updatingHandles=new g.U}initialize(){const{layer:e}=this,t="effectiveScaleRange"in e?e:null,i=this.scaleVisibilityEnabled&&null!=t,s=new I.w({owner:this,layer:this.owner.layer,preferredUpdatePolicy:P.q.SYNC,graphicSymbolSupported:!0,componentFactories:{elevationAlignment:(e,t)=>new _.V({graphicsCoreOwner:this,graphicsCore:e,queryGraphicUIDsInExtent:t,elevationProvider:this.view.elevationProvider}),scaleVisibility:i?(e,i)=>new C.N({graphicsCoreOwner:this,layer:t,queryGraphicUIDsInExtent:i,graphicsCore:e,basemapTerrain:this.owner.view.basemapTerrain}):null,objectStates:e=>new E.w(e)}});if(this._set("graphicsCore",s),this.frustumVisibilityEnabled&&this._set("frustumVisibility",new S.p({graphicsCoreOwner:this})),"fullOpacity"in this.owner){const e=this.owner;this._updatingHandles.add((()=>e.fullOpacity),(()=>this.graphicsCore.opacityChange()))}if("elevationInfo"in e){const t=e;this._updatingHandles.add((()=>t.elevationInfo),((e,t)=>{(0,h.Ui)(e,t)&&this._updatingHandles.addPromise(this.graphicsCore.elevationInfoChange())}))}this._set("initializePromise",this._initializeAsync()),this._updatingHandles.addPromise(this.initializePromise)}async _initializeAsync(){try{await this.graphicsCore.initializePromise}catch(e){if((0,u.zf)(e))return;throw e}this.destroyed||(this.addHandles((0,d.watch)((()=>this.view.clippingArea),(()=>this._updateClippingExtent()),d.sync)),this._updateClippingExtent(),this._setupSuspendResumeExtent(),this.graphicsCore.startCreateGraphics())}destroy(){this._updatingHandles.destroy(),this._set("frustumVisibility",(0,a.pR)(this.frustumVisibility)),this._set("graphicsCore",(0,a.pR)(this.graphicsCore))}get layer(){return this.owner.layer}get view(){return this.owner.view}get scaleVisibility(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.scaleVisibility}get elevationAlignment(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.elevationAlignment}get objectStates(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.objectStates}get scaleVisibilitySuspended(){return!(null==this.scaleVisibility||!this.scaleVisibility.suspended)}get frustumVisibilitySuspended(){return null!=this.frustumVisibility&&this.frustumVisibility.suspended}get suspended(){var e;return null!==(e=this.owner.suspended)&&void 0!==e&&e}get updating(){var e;return!!(null!==(e=this.graphicsCore)&&void 0!==e&&e.updating||null!=this.scaleVisibility&&this.scaleVisibility.updating||null!=this.frustumVisibility&&this.frustumVisibility.updating||this._updatingHandles.updating)}get graphics3DGraphics(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.graphics3DGraphics}get graphics3DGraphicsByObjectID(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.graphics3DGraphicsByObjectID}get loadedGraphics(){return this.owner.loadedGraphics}get fullOpacity(){var e;return null!==(e=this.owner.fullOpacity)&&void 0!==e?e:1}get slicePlaneEnabled(){return this.owner.slicePlaneEnabled}get updatePolicy(){return this.owner.updatePolicy}notifyGraphicGeometryChanged(e){this.graphicsCore.notifyGraphicGeometryChanged(e)}notifyGraphicVisibilityChanged(e){this.graphicsCore.notifyGraphicVisibilityChanged(e)}getRenderingInfo(e,t,i){const s=(0,f.vl)(e,{renderer:t,arcade:i});if(null!==s&&void 0!==s&&s.color){const e=s.color;e[0]=e[0]/255,e[1]=e[1]/255,e[2]=e[2]/255}return s}getRenderingInfoAsync(e,t,i,s){return(0,f.LO)(e,{renderer:t,arcade:i,...s})}getHit(e){if(this.owner.loadedGraphics){const t=this.owner.loadedGraphics.find((t=>t.uid===e));if(t){const e=this.layer instanceof y.A?this.layer:null,i=(0,v.wP)(t,e);return{type:"graphic",graphic:i,layer:i.layer}}}return null}whenGraphicBounds(e,t){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(e,t):Promise.reject()}computeAttachmentOrigin(e,t){return this.graphicsCore?this.graphicsCore.computeAttachmentOrigin(e,t):null}getSymbolLayerSize(e,t){return this.graphicsCore?this.graphicsCore.getSymbolLayerSize(e,t):null}maskOccludee(e){const{set:t,handle:i}=this.objectStates.acquireSet(V.Mg.MaskOccludee,null);return this.objectStates.setUid(t,e.uid),i}highlight(e){if(e instanceof m.A)return A;if("number"==typeof e)return this.highlight([e]);if(e instanceof r.A)return this.highlight([e]);if(e instanceof l.A&&(e=e.toArray()),Array.isArray(e)&&e.length>0){if(e[0]instanceof r.A){const t=e.map((e=>e.uid)),{set:i,handle:s}=this.objectStates.acquireSet(V.Mg.Highlight,null);return this.objectStates.setUids(i,t),s}if("number"==typeof e[0]){const t=e,{set:i,handle:s}=this.objectStates.acquireSet(V.Mg.Highlight,null);return this.objectStates.setObjectIds(i,t),s}}return A}_setupSuspendResumeExtent(){const{scaleVisibility:e,frustumVisibility:t}=this;if(null==e&&null==t)return;const i=i=>{let{computedExtent:s,extentPadding:r}=i;this._suspendResumeExtent=(0,M.t8)(s,this._suspendResumeExtent,w.qD,r),null!=e&&e.setExtent(this._suspendResumeExtent),null!=t&&t.setExtent(this._suspendResumeExtent)};this.addHandles((0,d.watch)((()=>{var e,t;return{computedExtent:null===(e=this.graphicsCore)||void 0===e?void 0:e.computedExtent,extentPadding:null===(t=this.graphicsCore)||void 0===t?void 0:t.extentPadding}}),(e=>i(e)),d.syncAndInitial))}_updateClippingExtent(){const e=this.view.clippingArea;this.graphicsCore.setClippingExtent(e,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()}};(0,s._)([(0,c.MZ)()],O.prototype,"type",void 0),(0,s._)([(0,c.MZ)({constructOnly:!0})],O.prototype,"owner",void 0),(0,s._)([(0,c.MZ)()],O.prototype,"layer",null),(0,s._)([(0,c.MZ)()],O.prototype,"view",null),(0,s._)([(0,c.MZ)({constructOnly:!0})],O.prototype,"graphicsCore",void 0),(0,s._)([(0,c.MZ)()],O.prototype,"scaleVisibility",null),(0,s._)([(0,c.MZ)({constructOnly:!0})],O.prototype,"frustumVisibility",void 0),(0,s._)([(0,c.MZ)()],O.prototype,"elevationAlignment",null),(0,s._)([(0,c.MZ)()],O.prototype,"objectStates",null),(0,s._)([(0,c.MZ)()],O.prototype,"scaleVisibilitySuspended",null),(0,s._)([(0,c.MZ)({readOnly:!0})],O.prototype,"frustumVisibilitySuspended",null),(0,s._)([(0,c.MZ)()],O.prototype,"suspended",null),(0,s._)([(0,c.MZ)({readOnly:!0})],O.prototype,"updating",null),(0,s._)([(0,c.MZ)()],O.prototype,"loadedGraphics",null),(0,s._)([(0,c.MZ)()],O.prototype,"fullOpacity",null),(0,s._)([(0,c.MZ)()],O.prototype,"slicePlaneEnabled",null),(0,s._)([(0,c.MZ)()],O.prototype,"drapeSourceType",void 0),(0,s._)([(0,c.MZ)()],O.prototype,"updatePolicy",null),(0,s._)([(0,c.MZ)({constructOnly:!0})],O.prototype,"scaleVisibilityEnabled",void 0),(0,s._)([(0,c.MZ)({constructOnly:!0})],O.prototype,"frustumVisibilityEnabled",void 0),(0,s._)([(0,c.MZ)()],O.prototype,"initializePromise",void 0),O=(0,s._)([(0,p.$)("esri.views.3d.layers.graphics.GraphicsProcessor")],O);const A=(0,o.hA)()},19321:(e,t,i)=>{i.d(t,{a:()=>p});i(35238);var s=i(50346),r=i(9392),n=i(64232),l=i(18117),o=i(12482),a=i(67425),u=i(49296),d=i(41595),c=i(13312);async function p(e,t,i,p,h){var g;const{elevationProvider:y,renderCoordsHelper:v}=e,{elevationInfo:f}=t,{pointsInFeatures:m,spatialReference:b}=p,w=c.A.fromJSON(b),I=(0,d.MF)(f,!0),_=await(0,d.q6)(I,w,h);(0,s.Te)(h);const S=[],E=new Set,C=new Set,M=new u.F,V=(0,l.T)(0,0,0,c.A.WGS84),P=new a.Uk,O=(0,r.vt)();V.spatialReference=w;const A=null!==(g=e.elevationProvider.spatialReference)&&void 0!==g?g:e.spatialReference;for(const{objectId:s,points:r}of m){const e=i(s);if(null==e){for(const e of r){var R;S.push(null!==(R=e.z)&&void 0!==R?R:0)}E.add(s);continue}e.isDraped&&C.add(s);const l=e.graphic.geometry;M.setFromElevationInfo((0,o.ze)(l,f)),M.updateFeatureExpressionInfoContext(_,e.graphic,t);for(const{x:t,y:i,z:s}of r)V.x=t,V.y=i,V.z=null!==s&&void 0!==s?s:0,await(0,n.W)(V,O,A,0,{signal:h}),(0,a.sE)(O,y,M,v,P),S.push(P.z)}return{elevations:S,drapedObjectIds:C,failedObjectIds:E}}},43804:(e,t,i)=>{i.d(t,{N:()=>n});var s=i(50346),r=i(98976);async function n(e,t,i){var n;if(null==e||0===t.candidates.length)return l;const o=null!==(n=e.graphics3DGraphicsByObjectID)&&void 0!==n?n:e.graphics3DGraphics,a=[],u=[],{renderer:d}=e,c=null!=d&&"arcadeRequired"in d&&d.arcadeRequired?(0,r.lw)():null,p=async(t,s)=>{let{graphic:r,graphics3DSymbol:n}=s;const l=await c,o=await e.getRenderingInfoAsync(r,d,l,{signal:i});return null==o?[]:n.queryForSnapping(t,g,o,i)},{candidates:h,spatialReference:g}=t;for(let s=0;s<h.length;++s){const e=h[s],{objectId:t}=e,i="number"==typeof t?null===o||void 0===o?void 0:o.get(t):void 0;if(null==i)continue;const{graphics3DSymbol:r}=i;r.symbologySnappingSupported&&(a.push(p(e,i)),u.push(s))}if(0===a.length)return l;const y=await Promise.all(a);(0,s.Te)(i);const v=[],f=[];for(let s=0;s<y.length;++s){const e=y[s],t=u[s];for(const i of e)v.push(i),f.push(t)}return{candidates:v,sourceCandidateIndices:f}}const l={candidates:[],sourceCandidateIndices:[]}},40200:(e,t,i)=>{i.d(t,{V:()=>n});var s=i(45417),r=i(39483);function n(e){const t=e.view.spatialReference,i=e.layer.fullExtent,n=null!=i&&i.spatialReference;if(null==i||!n)return Promise.resolve(null);if(n.equals(t))return Promise.resolve(i.clone());const l=(0,s.Cv)(i,t);return null!=l?Promise.resolve(l):e.view.state.isLocal?(0,r.projectGeometry)(i,t,e.layer.portalItem).then((t=>!e.destroyed&&t?t:null)).catch((()=>null)):Promise.resolve(null)}},91196:(e,t,i)=>{i.d(t,{A:()=>g});var s=i(35143),r=i(91967),n=i(54099),l=i(5632),o=i(76460),a=i(30726),u=i(91291),d=i(46053),c=(i(81806),i(47249),i(85842)),p=i(19451);let h=class extends((0,l.sA)((0,u.g)(n.A.EventedMixin(r.A)))){constructor(e){super(e),this._updatingHandles=new p.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",s=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";o.A.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(s,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,a.pR)(this._updatingHandles)}get fullOpacity(){var e,t,i,s;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(s=this.parent)||void 0===s?void 0:s.fullOpacity)&&void 0!==i?i:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};return null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,s._)([(0,d.MZ)()],h.prototype,"fullOpacity",null),(0,s._)([(0,d.MZ)()],h.prototype,"layer",void 0),(0,s._)([(0,d.MZ)()],h.prototype,"parent",void 0),(0,s._)([(0,d.MZ)({readOnly:!0})],h.prototype,"suspended",null),(0,s._)([(0,d.MZ)({readOnly:!0})],h.prototype,"suspendInfo",null),(0,s._)([(0,d.MZ)({readOnly:!0})],h.prototype,"legendEnabled",null),(0,s._)([(0,d.MZ)({type:Boolean,readOnly:!0})],h.prototype,"updating",null),(0,s._)([(0,d.MZ)({readOnly:!0})],h.prototype,"updatingProgress",null),(0,s._)([(0,d.MZ)()],h.prototype,"visible",null),(0,s._)([(0,d.MZ)()],h.prototype,"view",void 0),h=(0,s._)([(0,c.$)("esri.views.layers.LayerView")],h);const g=h}}]);
//# sourceMappingURL=25745.cb0a0a7e.chunk.js.map