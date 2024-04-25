"use strict";(self.webpackChunkhelloworld=self.webpackChunkhelloworld||[]).push([[14826],{14835:(e,t,i)=>{i.d(t,{w:()=>v});var r=i(35143),s=i(69539),o=i(91967),n=i(59784),l=i(46053),a=(i(81806),i(76460),i(47249),i(85842)),h=i(75655),c=i(45463),d=i(35925);const u=.3;function p(e,t){t&&Object.assign(e,t)}class f{constructor(e){this.height=90,this.coneHeight=40,this.coneWidth=23,this.width=3,this.renderOccluded=c.m$.Opaque,this.color=e.accent}}class _{constructor(e){let{colors:t,...i}=e;this.size=11,this.outlineSize=1,this.collisionPadding=9,this.color=t.accent,this.outlineColor=t.outline,this.renderOccluded=c.m$.Opaque,this.hoverOutlineColor=t.selectedOutline,p(this,i)}applyColor(e){this._apply(this.color,e)}applyOutline(e){this._apply(this.outlineColor,e)}applyHoverOutline(e){this._apply(this.hoverOutlineColor,e)}_apply(e,t){t.setParameters({color:(0,n.QP)(e),renderOccluded:this.renderOccluded})}}class g{constructor(e){let{colors:t,...i}=e;this.size=40,this.height=.2,this.offset=.25,this.collisionPadding=2,this.renderOccluded=c.m$.Transparent,this.minSquaredEdgeLength=900,this.color=(0,n._L)(t.accent,.5),this.hoverColor=t.accent,p(this,i)}applyColor(e){this._apply(this.color,e)}applyHover(e){this._apply(this.hoverColor,e)}_apply(e,t){t.setParameters({color:(0,n.QP)(e),renderOccluded:this.renderOccluded})}}class m{constructor(e){this.vertex=new _({colors:e,color:e.accent,outlineColor:e.outline}),this.edge=new _({colors:e,color:(0,n.Vl)((0,n._L)(e.accent,2/3),.5),outlineColor:(0,n._L)(e.outline,.5),size:8,collisionPadding:8}),this.selected=new _({colors:e,color:e.selected,outlineColor:e.outline}),this.edgeOffset=new g({colors:e})}}class y{constructor(e){let{colors:t,...i}=e;this.width=1.5,this.stipplePattern=(0,d.wk)(3.3),this.falloff=0,this.innerWidth=1.5,this.renderOccluded=c.m$.OccludeAndTransparent,this.color=t.selected,this.stippleOffColor=t.outline,this.innerColor=t.selected,p(this,i)}apply(e){e.color=(0,n.QP)(this.color),e.width=this.width,e.stipplePattern=this.stipplePattern,e.stippleOffColor=(0,n.QP)(this.stippleOffColor),e.falloff=this.falloff,e.innerWidth=this.innerWidth,e.innerColor=(0,n.QP)(this.innerColor),e.renderOccluded=this.renderOccluded}}class O{constructor(e){let{colors:t,...i}=e;this.size=4,this.outlineSize=1,this.shape="square",this.color=t.selected,this.outlineColor=t.outline,p(this,i)}apply(e){e.color=(0,n.QP)(this.color),e.size=this.size,e.outlineSize=this.outlineSize,e.outlineColor=(0,n.QP)(this.outlineColor),e.primitive=this.shape}}class A{constructor(e){let{colors:t,...i}=e;this.innerWidth=1,this.glowWidth=8,this.glowFalloff=8,this.globalAlpha=u,this.globalAlphaContrastBoost=1.5,this.radius=3,this.innerColor=t.selected,this.glowColor=t.accent,this.heightFillColor=t.accent,p(this,i)}apply(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const i={glowColor:s.A.toUnitRGB(this.glowColor),glowFalloff:this.glowFalloff,glowWidth:this.glowWidth,innerColor:s.A.toUnitRGB(this.innerColor),innerWidth:this.innerWidth,globalAlpha:this.globalAlpha*t*this.glowColor.a,globalAlphaContrastBoost:this.globalAlphaContrastBoost,intersectsLineRadius:this.radius};"style"in e?e.style=i:e.laserlineStyle=i}}class E{constructor(e){this.outline=new y({colors:e,color:e.stippleOff,renderOccluded:c.m$.OccludeAndTransparentStencil,stippleOffColor:e.stippleOn,innerWidth:0}),this.staged=new y({colors:e,color:e.stippleOn,renderOccluded:c.m$.OccludeAndTransparentStencil,innerColor:e.stagedSolid,stippleOffColor:e.stippleOff}),this.shadowStyle=new A({colors:e,globalAlpha:u,glowColor:e.accent,glowFalloff:8,glowWidth:8,innerColor:e.selected,innerWidth:1})}}class R{constructor(e){this.outline=new O({colors:e,color:e.selected,outlineColor:e.outline,outlineSize:1,shape:"circle",size:4}),this.shadowStyle=new A({colors:e,globalAlpha:u,glowColor:e.accent,glowFalloff:1.5,glowWidth:6,innerColor:e.selected,innerWidth:1,radius:2})}}class w extends y{constructor(e){let{colors:t,...i}=e;super({colors:t}),this.extensionType=h.A.GROUND_RAY,p(this,i)}}class C{constructor(e){this.laserlineAlphaMultiplier=1.5,this.heightPlaneAngleCutoff=20,this.lineGraphics=new E(e),this.pointGraphics=new R(e),this.heightPlane=new A({colors:e,globalAlpha:u,glowColor:e.accent,glowFalloff:8,glowWidth:8,innerColor:e.selected,innerWidth:1}),this.heightBox=new A({colors:e,globalAlpha:u,glowColor:e.accent,glowFalloff:8,glowWidth:8,innerColor:e.selected,innerWidth:0,heightFillColor:e.accent}),this.zVerticalLine=new w({colors:e,color:(0,n._L)(e.accent,.5),falloff:2,innerColor:(0,n._L)(e.selected,0),renderOccluded:c.m$.OccludeAndTransparent,stipplePattern:null,width:5,extensionType:h.A.GROUND_RAY})}}let v=class extends o.A{constructor(e){super(e)}get colors(){const e=this.getTheme().accentColor,t=e.a;return{accent:e,contrast:(0,n.bJ)(e),selected:s.A.fromArray([255,255,255,t]),selectedOutline:s.A.fromArray([255,255,255,t]),staged:s.A.fromArray([12,207,255,t]),stagedSolid:s.A.fromArray([12,207,255,1]),outline:s.A.fromArray([0,0,0,.5*t]),stippleOn:s.A.fromArray([255,255,255,1]),stippleOff:s.A.fromArray([0,0,0,.5])}}get visualElements(){return new C(this.colors)}get manipulators(){return new m(this.colors)}get zManipulator(){return new f(this.colors)}};(0,r._)([(0,l.MZ)()],v.prototype,"colors",null),(0,r._)([(0,l.MZ)()],v.prototype,"visualElements",null),(0,r._)([(0,l.MZ)()],v.prototype,"manipulators",null),(0,r._)([(0,l.MZ)()],v.prototype,"zManipulator",null),(0,r._)([(0,l.MZ)()],v.prototype,"getTheme",void 0),v=(0,r._)([(0,a.$)("esri.views.3d.interactive.editingTools.settings.Settings")],v)},73074:(e,t,i)=>{i.d(t,{P:()=>w});var r=i(54099),s=i(20664),o=i(9392),n=i(43047),l=i(28608),a=i(45308),h=i(42294),c=i(44815),d=i(18117),u=i(12482),p=i(731),f=i(85746),_=i(99469),g=i(49296),m=i(70667),y=i(29889),O=i(45463),A=i(442),E=i(66470),R=i(425);class w extends f.X{constructor(e){var t;super(e),this._attachmentOrigin=(0,d.T)(0,0,0,null),this._attachmentOriginDirty=!0,this.events=new r.A,this._geometry=null,this._width=1,this._color=(0,l.fA)(1,0,1,1),this._innerWidth=0,this._innerColor=(0,l.fA)(1,1,1,1),this._stipplePattern=null,this._stippleOffColor=null,this._falloff=0,this._elevationInfo=null,this._laserlineStyle=null,this._laserlineEnabled=!1,this._renderOccluded=O.m$.OccludeAndTransparentStencil,this._attachmentOrigin.spatialReference=e.view.spatialReference,this._laserline=new _.o({view:e.view,isDecoration:e.isDecoration}),this.applyProperties(e),this.attached=null===(t=e.attached)||void 0===t||t}destroy(){this._laserline.destroy(),super.destroy()}createObject3DResourceFactory(e){return{view:e,createResources:e=>this._createObject3DResources(e),destroyResources:e=>this._destroyExternalResources(e),recreateGeometry:(e,t)=>{e.geometries.length=0,this._recreateGeometry(t,e.material,e.geometries)}}}createDrapedResourceFactory(e){return{view:e,createResources:()=>this._createDrapedResources(),destroyResources:e=>this._destroyExternalResources(e),recreateGeometry:e=>{e.geometries=this._createRenderGeometriesDraped(e.material),this._attachmentOriginChanged()}}}get _laserlineAttached(){return this.attached&&this.visible&&null!=this._laserlineStyle&&!this.isDraped&&this.laserlineEnabled}onAttachedChange(e){this._laserline.attached=this._laserlineAttached,e&&this._attachmentOriginChanged()}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.recreateGeometry()}get width(){return this._width}set width(e){e!==this._width&&(this._width=e,this._updateMaterial())}get color(){return this._color}set color(e){(0,n.a)(e,this._color)||((0,n.c)(this._color,e),this._updateMaterial())}get innerWidth(){return this._innerWidth}set innerWidth(e){e!==this._innerWidth&&(this._innerWidth=e,this._updateMaterial())}get innerColor(){return this._innerColor}set innerColor(e){(0,n.a)(e,this._innerColor)||((0,n.c)(this._innerColor,e),this._updateMaterial())}get stipplePattern(){return this._stipplePattern}set stipplePattern(e){const t=null!=e!=(null!=this._stipplePattern);this._stipplePattern=e,t?this.recreate():this._updateMaterial()}get stippleOffColor(){return this._stippleOffColor}set stippleOffColor(e){e&&this._stippleOffColor&&(0,n.a)(e,this._stippleOffColor)||(this._stippleOffColor=e?(0,l.o8)(e):null,this._updateMaterial())}get falloff(){return this._falloff}set falloff(e){e!==this._falloff&&(this._falloff=e,this._updateMaterial())}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this.recreateGeometry()}get laserlineStyle(){return this._laserlineStyle}set laserlineStyle(e){this._laserlineStyle=e,this._laserline.attached=this._laserlineAttached,null!=e&&(this._laserline.style=e)}get laserlineEnabled(){return this._laserlineEnabled}set laserlineEnabled(e){this._laserlineEnabled!==e&&(this._laserlineEnabled=e,this._laserline.attached=this._laserlineAttached)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}get attachmentOrigin(){var e;if(!this._attachmentOriginDirty)return this._attachmentOrigin;const t=null===(e=this.object3dResources.resources)||void 0===e?void 0:e.geometries;if(!t||0===t.length)return null;(0,s.s)(v,0,0,0);let i=0;for(const r of t)r.computeAttachmentOrigin(C)&&((0,s.g)(v,v,C),i++);return 0===i?null:((0,s.h)(v,v,1/i),this.view.renderCoordsHelper.fromRenderCoords(v,this._attachmentOrigin),this._attachmentOriginDirty=!1,this._attachmentOrigin)}_updateMaterial(){null!=this.object3dResources.resources&&this.object3dResources.resources.material.setParameters(this._materialParameters),null!=this.drapedResources.resources&&this.drapedResources.resources.material.setParameters(this._materialParameters)}get _isClosed(){return null!=this.geometry&&"polygon"===this.geometry.type}get _materialParameters(){return{width:this._width,color:this._color,stippleOffColor:this._stippleOffColor,stipplePattern:this._stipplePattern,stipplePreferContinuous:!1,isClosed:this._isClosed,falloff:this._falloff,innerColor:this._innerColor,innerWidth:this._innerWidth,join:"round",hasPolygonOffset:!0,renderOccluded:this._normalizedRenderOccluded,isDecoration:this.isDecoration}}get _normalizedRenderOccluded(){return this.isDraped&&this._renderOccluded===O.m$.OccludeAndTransparentStencil?O.m$.OccludeAndTransparent:this._renderOccluded}_recreateGeometry(e,t,i){this._createRenderGeometries(t,i);for(const r of i)e.addGeometry(r);this._attachmentOriginChanged()}_attachmentOriginChanged(){this._attachmentOriginDirty=!0,this.events.emit("attachment-origin-changed")}_destroyExternalResources(e){e.geometries=[]}_createObject3DResources(e){const t=new R.W(this._materialParameters),i=new Array;return this._recreateGeometry(e,t,i),{material:t,geometries:i,forEach:e=>{e(t),i.forEach(e)}}}_createDrapedResources(){const e=new R.W(this._materialParameters);return{material:e,geometries:this._createRenderGeometriesDraped(e)}}_createRenderGeometriesDraped(e){const{geometry:t,view:i}=this,r=i.basemapTerrain.spatialReference;return null==t||null==r?[]:(0,y.A)(t,r).lines.map((t=>{let{position:s}=t;const o={overlayInfo:{spatialReference:r,renderCoordsHelper:i.renderCoordsHelper},attributeData:{position:s},removeDuplicateStartEnd:this._isClosed};return new A.$((0,m.t)(e,o))}))}calculateMapBounds(e){if(null==this.object3dResources.resources)return!1;const t=this.view.renderCoordsHelper;for(const i of this.object3dResources.resources.geometries){const r=i.attributes.get(E.r.POSITION),s=(0,c.jh)(r.data.length);(0,a.projectBuffer)(r.data,t.spatialReference,0,s,this.view.spatialReference,0,r.data.length/3),(0,h.Hq)(e,s)}return!0}_createRenderGeometries(e,t){var i;const r=this.geometry;if(null==r)return;const s=(0,y.C)(r,this.view.elevationProvider,this.view.renderCoordsHelper,g.F.fromElevationInfo(null!==(i=this.elevationInfo)&&void 0!==i?i:new p.A({mode:(0,u.w7)(r,null)}))),o=new Array;for(const{position:n,mapPositions:l}of s.lines){const i={mapPositions:l,attributeData:{position:n},removeDuplicateStartEnd:this._isClosed};t.push((0,m.t)(e,i)),o.push(n)}this._laserline.pathVerticalPlane=o}}const C=(0,o.vt)(),v=(0,o.vt)()},52447:(e,t,i)=>{i.d(t,{y:()=>l});var r=i(35143),s=i(54099),o=i(46053),n=(i(81806),i(76460),i(47249),i(85842));let l=class extends s.A.EventedAccessor{constructor(e){super(e),this.tracking=!1,this.displaying=!1,this.isDraped=!1}};(0,r._)([(0,o.MZ)({constructOnly:!0})],l.prototype,"graphic",void 0),(0,r._)([(0,o.MZ)()],l.prototype,"tracking",void 0),(0,r._)([(0,o.MZ)()],l.prototype,"displaying",void 0),(0,r._)([(0,o.MZ)()],l.prototype,"isDraped",void 0),l=(0,r._)([(0,n.$)("esri.views.3d.layers.graphics.GraphicState")],l)},70667:(e,t,i)=>{i.d(t,{t:()=>g,z:()=>O});var r=i(19555),s=i(72745),o=i(55855),n=i(34111),l=i(482),a=i(44815),h=i(75002),c=i(38496),d=i(64465),u=i(50468),p=i(87634),f=i(51799),_=i(66470);function g(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const s=[],g=t.mapPositions;!function(e,t){const{attributeData:{position:i},removeDuplicateStartEnd:r}=e,s=function(e){const t=e.length;return e[0]===e[t-3]&&e[1]===e[t-2]&&e[2]===e[t-1]}(i)&&r,o=i.length/3-(s?1:0),n=new Array(2*(o-1)),l=s?i.slice(0,-3):i;let a=0;for(let h=0;h<o-1;h++)n[a++]=h,n[a++]=h+1;t.push([_.r.POSITION,new u.n(l,n,3,s)])}(t,s);const O=s[0][1].data,A=s[0][1].indices.length,E=(0,c.EH)(A);return function(e,t,i){if(null!=e.attributeData.colorFeature)return;const r=e.attributeData.color;t.push([_.r.COLOR,new u.n(null!==r&&void 0!==r?r:o.Un,i,4)])}(t,s,E),function(e,t,i){var r;null==e.attributeData.sizeFeature&&t.push([_.r.SIZE,new u.n([null!==(r=e.attributeData.size)&&void 0!==r?r:1],i,1,!0)])}(t,s,E),function(e,t,i){e.attributeData.normal&&t.push([_.r.NORMAL,new u.n(e.attributeData.normal,i,3)])}(t,s,E),function(e,t,i){null!=e.attributeData.colorFeature&&t.push([_.r.COLORFEATUREATTRIBUTE,new u.n([e.attributeData.colorFeature],i,1,!0)])}(t,s,E),function(e,t,i){null!=e.attributeData.sizeFeature&&t.push([_.r.SIZEFEATUREATTRIBUTE,new u.n([e.attributeData.sizeFeature],i,1,!0)])}(t,s,E),function(e,t,i){null!=e.attributeData.opacityFeature&&t.push([_.r.OPACITYFEATUREATTRIBUTE,new u.n([e.attributeData.opacityFeature],i,1,!0)])}(t,s,E),function(e,t,i){if(null==e.overlayInfo||e.overlayInfo.renderCoordsHelper.viewingMode!==d.RT.Global||!e.overlayInfo.spatialReference.isGeographic)return;const s=(0,a.jh)(i.length),o=(0,n.tO)(e.overlayInfo.spatialReference);for(let r=0;r<s.length;r+=3)(0,l.RC)(i,r,s,r,o);const c=i.length/3,p=(0,h.oe)(c+1);let f=m,g=y,O=0,A=0;(0,r.hZ)(f,s[A++],s[A++]),A++,p[0]=0;for(let n=1;n<c+1;++n)n===c&&(A=0),(0,r.hZ)(g,s[A++],s[A++]),A++,O+=(0,r.xg)(f,g),p[n]=O,[f,g]=[g,f];t.push([_.r.DISTANCETOSTART,new u.n(p,t[0][1].indices,1,!0)])}(t,s,O),new f.V(e,s,g,p.X.Line,i)}const m=(0,s.vt)(),y=(0,s.vt)();function O(e,t){if(null==e||0===e.length)return[];const i=[];return e.forEach((e=>{const r=e.length,s=(0,a.jh)(3*r);e.forEach(((e,t)=>{s[3*t]=e[0],s[3*t+1]=e[1],s[3*t+2]=e[2]}));const o={attributeData:{position:s,normal:t},removeDuplicateStartEnd:!1};i.push(o)})),i}},29889:(e,t,i)=>{i.d(t,{A:()=>h,C:()=>a});var r=i(45308),s=i(44815),o=i(99785),n=i(67425),l=i(33169);function a(e,t,i,r){const l="polygon"===e.type?o.Wq.CCW_IS_HOLE:o.Wq.NONE,a="polygon"===e.type?e.rings:e.paths,{position:h,outlines:d}=(0,o.jp)(a,!!e.hasZ,l,e.spatialReference),u=(0,s.jh)(h.length),p=(0,n.au)(h,e.spatialReference,0,u,0,h,0,h.length/3,t,i,r),f=null!=p;return{lines:f?c(d,h,u):[],projectionSuccess:f,sampledElevation:p}}function h(e,t){const i="polygon"===e.type?o.Wq.CCW_IS_HOLE:o.Wq.NONE,s="polygon"===e.type?e.rings:e.paths,{position:n,outlines:a}=(0,o.jp)(s,!1,i),h=(0,r.projectBuffer)(n,e.spatialReference,0,n,t,0,n.length/3);for(let r=2;r<n.length;r+=3)n[r]=l.bi;return{lines:h?c(a,n):[],projectionSuccess:h}}function c(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const r=new Array;for(const{index:o,count:n}of e){if(n<=1)continue;const e=3*o,l=3*n;r.push({position:(0,s.l5)(t,3*o,3*n),mapPositions:null!=i?(0,s.l5)(i,e,l):void 0})}return r}},35925:(e,t,i)=>{i.d(t,{Xq:()=>l,wk:()=>n});const r={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},s={dash:r.dash,"dash-dot":[...r.dash,...r.dot],dot:r.dot,"long-dash":r["long-dash"],"long-dash-dot":[...r["long-dash"],...r.dot],"long-dash-dot-dot":[...r["long-dash"],...r.dot,...r.dot],none:null,"short-dash":r["short-dash"],"short-dash-dot":[...r["short-dash"],...r["short-dot"]],"short-dash-dot-dot":[...r["short-dash"],...r["short-dot"],...r["short-dot"]],"short-dot":r["short-dot"],solid:null},o=8;function n(e){return{pattern:[e,e],pixelRatio:2}}function l(e){return null!=e&&"style"===e.type?function(e){return null!=e?function(e,t){return null==e?e:{pattern:e.slice(),pixelRatio:t}}(s[e],o):null}(e.style):null}},76718:(e,t,i)=>{i.d(t,{g:()=>h});var r=i(18690),s=i(76460),o=i(78393),n=i(61678),l=i(93345);const a=()=>s.A.getLogger("esri.views.webgl.BufferObject");class h{static createIndex(e,t,i){return new h(e,l.NZ.ELEMENT_ARRAY_BUFFER,t,i)}static createVertex(e,t,i){return new h(e,l.NZ.ARRAY_BUFFER,t,i)}static createUniform(e,t,i){return new h(e,l.NZ.UNIFORM_BUFFER,t,i)}static createPixelPack(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l._U.STREAM_READ,i=arguments.length>2?arguments[2]:void 0;const r=new h(e,l.NZ.PIXEL_PACK_BUFFER,t);return i&&r.setSize(i),r}static createPixelUnpack(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l._U.STREAM_DRAW,i=arguments.length>2?arguments[2]:void 0;return new h(e,l.NZ.PIXEL_UNPACK_BUFFER,t,i)}static createTransformFeedback(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l._U.STATIC_DRAW,i=arguments.length>2?arguments[2]:void 0;const r=new h(e,l.NZ.TRANSFORM_FEEDBACK_BUFFER,t);return r.setSize(i),r}constructor(e,t,i,r){this._context=e,this.bufferType=t,this.usage=i,this._glName=null,this._size=-1,this._indexType=void 0,e.instanceCounter.increment(l.vt.BufferObject,this),this._glName=this._context.gl.createBuffer(),(0,n.Y2)(this._context.gl),r&&this.setData(r)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get usedMemory(){return this.bufferType===l.NZ.ELEMENT_ARRAY_BUFFER?this._indexType===l.pe.UNSIGNED_INT?4*this._size:2*this._size:this._size}get _isVAOAware(){return this.bufferType===l.NZ.ELEMENT_ARRAY_BUFFER||this.bufferType===l.NZ.ARRAY_BUFFER}dispose(){var e;null!==(e=this._context)&&void 0!==e&&e.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(l.vt.BufferObject,this),this._context=null):this._glName&&a().warn("Leaked WebGL buffer object")}setSize(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(e<=0&&a().error("Buffer size needs to be positive!"),this.bufferType===l.NZ.ELEMENT_ARRAY_BUFFER&&null!=t)switch(this._indexType=t,t){case l.pe.UNSIGNED_SHORT:e*=2;break;case l.pe.UNSIGNED_INT:e*=4}this._setBufferData(e)}setData(e){if(!e)return;let t=e.byteLength;this.bufferType===l.NZ.ELEMENT_ARRAY_BUFFER&&((0,o.jq)(e)&&(t/=2,this._indexType=l.pe.UNSIGNED_SHORT),(0,o.XJ)(e)&&(t/=4,this._indexType=l.pe.UNSIGNED_INT)),this._setBufferData(t,e)}_setBufferData(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._size=e;const i=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const r=this._context.gl;null!=t?r.bufferData(this.bufferType,t,this.usage):r.bufferData(this.bufferType,e,this.usage),(0,n.Y2)(r),this._isVAOAware&&this._context.bindVAO(i)}setSubData(e,t,i,r){if(!e)return;(t<0||t*e.BYTES_PER_ELEMENT>=this.usedMemory)&&a().error("offset is out of range!"),i>=r&&a().error("end must be bigger than start!"),(t+(r-i))*e.BYTES_PER_ELEMENT>this.usedMemory&&a().error("An attempt to write beyond the end of the buffer!");const s=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const{gl:o}=this._context;o.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,e,i,r-i),(0,n.Y2)(o),this._isVAOAware&&this._context.bindVAO(s)}getSubData(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0;if(i<0||s<0)return void a().error("Problem getting subdata: offset and length were less than zero!");const o=function(e){return(0,r.Xj)(e)}(e)?e.BYTES_PER_ELEMENT:1;if(o*((null!==i&&void 0!==i?i:0)+(null!==s&&void 0!==s?s:0))>e.byteLength)return void a().error("Problem getting subdata: offset and length exceeded destination size!");t+o*(null!==s&&void 0!==s?s:0)>this.usedMemory&&a().warn("Potential problem getting subdata: requested data exceeds buffer size!");const n=this._context.gl;this.bufferType===l.NZ.TRANSFORM_FEEDBACK_BUFFER?(this._context.bindBuffer(this,l.NZ.TRANSFORM_FEEDBACK_BUFFER),n.getBufferSubData(l.NZ.TRANSFORM_FEEDBACK_BUFFER,t,e,i,s),this._context.unbindBuffer(l.NZ.TRANSFORM_FEEDBACK_BUFFER)):(this._context.bindBuffer(this,l.NZ.COPY_READ_BUFFER),n.getBufferSubData(l.NZ.COPY_READ_BUFFER,t,e,i,s),this._context.unbindBuffer(l.NZ.COPY_READ_BUFFER))}async getSubDataAsync(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;await this._context.clientWaitAsync(),this.getSubData(e,t,i,r)}}},21812:(e,t,i)=>{i.d(t,{_:()=>r});class r{constructor(e,t,i,r,s){let o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],n=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;this.name=e,this.count=t,this.type=i,this.offset=r,this.stride=s,this.normalized=o,this.divisor=n}}}}]);
//# sourceMappingURL=14826.ea0a61f4.chunk.js.map