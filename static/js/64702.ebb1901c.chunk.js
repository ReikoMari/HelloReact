"use strict";(self.webpackChunkhelloworld=self.webpackChunkhelloworld||[]).push([[64702],{56287:(e,t,r)=>{r.d(t,{r:()=>l});var s=r(35143),a=r(91967),i=r(46053),o=(r(81806),r(76460),r(47249),r(85842));const n={visible:"visibleSublayers"};let l=class extends a.A{constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(n[e.propertyName])))],"layer"))}get layers(){return this.visibleSublayers.filter((e=>{let{name:t}=e;return t})).map((e=>{let{name:t}=e;return t})).join()}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:t}=this,r=null===e||void 0===e?void 0:e.sublayers,s=[],a=e=>{const{minScale:r,maxScale:i,sublayers:o,visible:n}=e;n&&(0===t||(0===r||t<=r)&&(0===i||t>=i))&&(o?o.forEach(a):s.push(e))};return null!==r&&void 0!==r&&r.forEach(a),s}toJSON(){const{layer:e,layers:t}=this,{imageFormat:r,imageTransparency:s,version:a}=e;return{format:r,request:"GetMap",service:"WMS",styles:"",transparent:s?"TRUE":"FALSE",version:a,layers:t}}};(0,s._)([(0,i.MZ)()],l.prototype,"layer",null),(0,s._)([(0,i.MZ)({readOnly:!0})],l.prototype,"layers",null),(0,s._)([(0,i.MZ)({type:Number})],l.prototype,"scale",void 0),(0,s._)([(0,i.MZ)({readOnly:!0})],l.prototype,"version",null),(0,s._)([(0,i.MZ)({readOnly:!0})],l.prototype,"visibleSublayers",null),l=(0,s._)([(0,o.$)("esri.layers.support.ExportWMSImageParameters")],l)},64702:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var s=r(35143),a=r(50076),i=(r(76460),r(81806),r(47249),r(85842)),o=r(76797),n=r(10183),l=r(96537);let p=class extends((0,l.A)(n.A)){constructor(){super(...arguments),this.type="wms-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new a.A("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view"))),this._updatingHandles.add((()=>{var e;return null===(e=this.exportImageParameters)||void 0===e?void 0:e.version}),(()=>{this._updatingHandles.addPromise(this.refreshDebounced())}))}createFetchPopupFeaturesQuery(e){const t=this.findExtentInfoAt(e),r=t.extent,s=new o.A(r[0],r[1],r[2],r[3],this._spatialReference),a=t.imageSize,i=a.width,n=a.height,l=s.width/i;return{extent:s,width:i,height:n,x:Math.round((e.x-s.xmin)/l),y:Math.round((s.ymax-e.y)/l)}}getFetchOptions(){return{timeExtent:this.timeExtent}}};p=(0,s._)([(0,i.$)("esri.views.3d.layers.WMSLayerView3D")],p);const h=p},96537:(e,t,r)=>{r.d(t,{A:()=>u});var s=r(35143),a=r(50076),i=r(30726),o=r(50346),n=r(46053),l=(r(81806),r(76460),r(47249),r(85842)),p=r(95363),h=r(56287);const u=e=>{let t=class extends e{initialize(){this.exportImageParameters=new h.r({layer:this.layer})}destroy(){this.exportImageParameters=(0,i.pR)(this.exportImageParameters)}get exportImageVersion(){var e;return null!==(e=this.exportImageParameters)&&void 0!==e&&e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeaturesAtLocation(e,t){const{layer:r}=this;if(!e)throw new a.A("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r});const{popupEnabled:s}=r;if(!s)throw new a.A("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:s});const i=this.createFetchPopupFeaturesQuery(e);if(!i)return[];const{extent:n,width:l,height:p,x:h,y:u}=i;if(!(n&&l&&p))throw new a.A("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:n,width:l,height:p});const y=await r.fetchFeatureInfo(n,l,p,h,u);return(0,o.Te)(t),y}};return(0,s._)([(0,n.MZ)()],t.prototype,"exportImageParameters",void 0),(0,s._)([(0,n.MZ)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,s._)([(0,n.MZ)()],t.prototype,"layer",void 0),(0,s._)([(0,n.MZ)(p.ui)],t.prototype,"timeExtent",void 0),t=(0,s._)([(0,l.$)("esri.layers.mixins.WMSLayerView")],t),t}}}]);
//# sourceMappingURL=64702.ebb1901c.chunk.js.map