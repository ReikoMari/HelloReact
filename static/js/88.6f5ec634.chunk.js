"use strict";(self.webpackChunkhelloworld=self.webpackChunkhelloworld||[]).push([[88],{7200:(e,t,i)=>{i.d(t,{S:()=>z,b:()=>j});var n,s,r,o,a,c,l,h,d,u,_=i(57528),g=i(55855),p=i(18261),v=i(34981),f=i(26917),m=i(59395),b=i(81993),y=i(90235),S=i(80883),w=i(3799),E=i(5517),A=i(58350),T=i(64839),L=i(32307),O=i(10773),R=i(66470);function j(e){const t=new L.N5,i=e.multipassEnabled&&(e.output===v.V.Color||e.output===v.V.Alpha);t.include(m.d,e),t.include(p.L,e),t.include(f.HQ,e);const{vertex:g,fragment:j}=t;return j.include(S.a),(0,w.NB)(g,e),j.uniforms.add(new A.E("uColor",(e=>e.color))),t.attributes.add(R.r.POSITION,"vec3"),t.varyings.add("vWorldPosition","vec3"),i&&t.varyings.add("depth","float"),e.screenSizeEnabled&&t.attributes.add(R.r.OFFSET,"vec3"),e.shadingEnabled&&((0,w.S7)(g),t.attributes.add(R.r.NORMAL,"vec3"),t.varyings.add("vViewNormal","vec3")),g.code.add((0,T.H)(n||(n=(0,_.A)(["\n    void main(void) {\n      vWorldPosition = ",";\n  "])),e.screenSizeEnabled?"screenSizeScaling(offset, position)":"position")),e.shadingEnabled&&g.code.add((0,T.H)(s||(s=(0,_.A)(["vec3 worldNormal = normal;\nvViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;"])))),g.code.add((0,T.H)(r||(r=(0,_.A)(["\n    ","\n    gl_Position = transformPosition(proj, view, vWorldPosition);\n  }\n  "])),i?"depth = (view * vec4(vWorldPosition, 1.0)).z;":"")),i&&t.include(b.Q,e),j.code.add((0,T.H)(o||(o=(0,_.A)(["\n    void main() {\n      discardBySlice(vWorldPosition);\n      ","\n    "])),i?"terrainDepthTest(depth);":"")),e.shadingEnabled?(j.uniforms.add(new E.t("shadingDirection",(e=>e.shadingDirection))),j.uniforms.add(new A.E("shadedColor",(e=>P(e.shadingTint,e.color)))),j.code.add((0,T.H)(a||(a=(0,_.A)(["vec3 viewNormalNorm = normalize(vViewNormal);\nfloat shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);\nvec4 finalColor = mix(uColor, shadedColor, shadingFactor);"]))))):j.code.add((0,T.H)(c||(c=(0,_.A)(["vec4 finalColor = uColor;"])))),j.code.add((0,T.H)(l||(l=(0,_.A)(["\n      ","\n      if (finalColor.a < ",") {\n        discard;\n      }\n      ","\n\n      ","\n    }\n    "])),e.output===v.V.ObjectAndLayerIdColor?(0,T.H)(h||(h=(0,_.A)(["finalColor.a = 1.0;"]))):"",T.H.float(y.y),e.output===v.V.Alpha?(0,T.H)(d||(d=(0,_.A)(["fragColor = vec4(finalColor.a);"]))):"",e.output===v.V.Color?(0,T.H)(u||(u=(0,_.A)(["fragColor = highlightSlice(finalColor, vWorldPosition); ",""])),e.transparencyPassType===O.y.Color?"fragColor = premultiplyAlpha(fragColor);":""):"")),t}function P(e,t){const i=1-e[3],n=e[3]+t[3]*i;return 0===n?(F[3]=n,F):(F[0]=(e[0]*e[3]+t[0]*t[3]*i)/n,F[1]=(e[1]*e[3]+t[1]*t[3]*i)/n,F[2]=(e[2]*e[3]+t[2]*t[3]*i)/n,F[3]=t[3],F)}const F=(0,g.vt)(),z=Object.freeze(Object.defineProperty({__proto__:null,build:j},Symbol.toStringTag,{value:"Module"}))},56121:(e,t,i)=>{i.d(t,{q:()=>M});i(35238);var n=i(4212),s=i(54099),r=i(54901),o=i(15941),a=i(30726),c=i(76931),l=i(63919),h=i(44680),d=i(34761),u=i(13191),_=i(19555),g=i(20664),p=i(9392),v=i(34111),f=i(9624),m=i(4437),b=i(482),y=i(2413),S=i(44230),w=i(13927),E=i(95925),A=i(75762),T=i(32535),L=i(12482),O=i(80935),R=i(37431),j=i(46034),P=i(37046),F=i(44513),z=i(8918),D=i(76336),C=i(13904);class M{constructor(e){var t;this.metadata=void 0,this._camera=new j.i,this._elevation={offset:0,override:null},this.collisionType={type:"point"},this.collisionPriority=0,this._renderObjects=new Array,this.autoScaleRenderObjects=!0,this._available=!0,this._noDisplayCount=0,this._radius=10,this._worldSized=!1,this.focusMultiplier=2,this.touchMultiplier=2.5,this.worldOriented=!1,this._modelTransform=(0,u.vt)(),this._worldFrame=null,this._renderLocation=(0,p.vt)(),this._renderLocationDirty=!0,this._location=new C.A({x:0,y:0,z:0}),this._elevationAlignedLocation=new C.A,this._elevationAlignedLocationDirty=!0,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.consumesClicks=!0,this.cursor=null,this.grabCursor=null,this._grabbing=!1,this.dragging=!1,this._hovering=!1,this._selected=!1,this._state=D.SJ.None,this._focused=!1,this.events=new s.A.EventEmitter,this._screenLocation={screenPointArray:(0,c.gs)(),renderScreenPointArray:(0,c.r_)(),pixelSize:0},this._screenLocationDirty=!0,this._engineResourcesAddedToStage=!1,this._attached=!1,this._location.spatialReference=e.view.spatialReference,Object.assign(this,e);const i=null===(t=this.view.state)||void 0===t?void 0:t.camera;i&&this._camera.copyFrom(i)}destroy(){this._applyObjectTransform=J,this._removeResourcesFromStage(),this._engineResources=null,this.view=null,this._camera=null}get _stage(){var e;return null===(e=this.view)||void 0===e?void 0:e._stage}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this._elevationAlignedLocationDirty=!0,this._renderLocationDirty=!0,this._updateEngineObject()}get renderObjects(){return this._renderObjects}set renderObjects(e){this._removeResourcesFromStage(),this._engineResources=null,this._renderObjects=e.slice(),this._updateEngineObject()}set available(e){e!==this._available&&(this._available=e,this._updateEngineObject())}get available(){return this._available}disableDisplay(){return this._noDisplayCount++,1===this._noDisplayCount&&this._updateEngineObject(),(0,r.hA)((()=>{this._noDisplayCount--,0===this._noDisplayCount&&this._updateEngineObject()}))}set radius(e){e!==this._radius&&(this._radius=e,this._updateEngineObject())}get radius(){return this._radius}set worldSized(e){e!==this._worldSized&&(this._worldSized=e,this._updateEngineObject())}get worldSized(){return this._worldSized}get modelTransform(){return this._modelTransform}set modelTransform(e){x(e)&&(this._screenLocationDirty=!0),(0,d.C)(this._modelTransform,e),this._updateEngineObject()}get renderLocation(){return this._renderLocationDirty&&(this._renderLocationDirty=!1,this.view.renderCoordsHelper.toRenderCoords(this.elevationAlignedLocation,this._renderLocation),this.worldOriented?(this._worldFrame||(this._worldFrame=(0,u.vt)()),function(e,t,i){switch(e.viewingMode){case"local":return(0,d.D_)(i),!0;case"global":{const n=(0,v.tO)(e.renderCoordsHelper.spatialReference);(0,b.n4)(t,0,q,0,n.radius),(0,m.y)((0,o.kU)(q[0]),(0,o.kU)(q[1]),i)}}}(this.view,this._renderLocation,this._worldFrame)):this._worldFrame&&(this._worldFrame=null)),this._renderLocation}set renderLocation(e){this.view.renderCoordsHelper.fromRenderCoords(e,this._location),this.elevationAlignedLocation=this._location}get location(){return this._location}set location(e){(0,T.EL)(e,this._location),this._notifyLocationChanged()}_notifyLocationChanged(){this._renderLocationDirty=!0,this._screenLocationDirty=!0,this._elevationAlignedLocationDirty=!0,this._updateEngineObject(),this.events.emit("location-update",{location:this._location})}get elevationAlignedLocation(){return this._elevationAlignedLocationDirty?(this._evaluateElevationAlignment(),this._updateElevationAlignedLocation(),this._elevationAlignedLocation):this._elevationAlignedLocation}set elevationAlignedLocation(e){(0,T.EL)(e,this._location),this._evaluateElevationAlignment(),this._location.z-=this._elevation.offset,this._updateElevationAlignedLocation(),this._updateEngineObject(),this.events.emit("location-update",{location:this._location})}_updateElevationAlignedLocation(){const e=null!=this._elevation.override?this._elevation.override:this.location.z||0;this._elevationAlignedLocation.x=this.location.x,this._elevationAlignedLocation.y=this.location.y,this._elevationAlignedLocation.z=e+this._elevation.offset,this._elevationAlignedLocation.spatialReference=(0,T.RS)(this.location.spatialReference),this._renderLocationDirty=!0,this._screenLocationDirty=!0,this._elevationAlignedLocationDirty=!1}grabbableForEvent(){return!0}get grabbing(){return this._grabbing}set grabbing(e){e!==this._grabbing&&(this._grabbing=e,this._setFocused(this._hovering||this._grabbing),this._updateEngineObject())}get hovering(){return this._hovering}set hovering(e){e!==this._hovering&&(this._hovering=e,this._setFocused(this._hovering||this._grabbing),this._updateEngineObject())}get selected(){return this._selected}set selected(e){e!==this._selected&&(this._selected=e,this._updateEngineObject(),this.events.emit("select-changed",{action:e?"select":"deselect"}))}get state(){return this._state}set state(e){e!==this._state&&(this._state=e,this._updateEngineObject())}updateStateEnabled(e,t){t?this.state|=e:this.state&=~e}_setFocused(e){e!==this._focused&&(this._focused=e,this.events.emit("focus-changed",{action:!0===e?"focus":"unfocus"}))}get focused(){return this._focused}get screenLocation(){return this._ensureScreenLocation(),this._screenLocation}_ensureScreenLocation(){if(!this._screenLocationDirty)return;let e;if(this._screenLocation.pixelSize=this._camera.computeScreenPixelSizeAt(this.renderLocation),this._screenLocationDirty=!1,x(this._modelTransform)){const t=this._calculateModelTransformOffset(Z);e=(0,g.g)(t,t,this.renderLocation)}else e=this.renderLocation;this._camera.projectToRenderScreen(e,this._screenLocation.renderScreenPointArray),this._camera.renderToScreen(this._screenLocation.renderScreenPointArray,this._screenLocation.screenPointArray)}get applyObjectTransform(){return this._applyObjectTransform}set applyObjectTransform(e){this._applyObjectTransform=e,this._screenLocationDirty=!0,this._updateEngineObject()}get attached(){return this._attached}intersectionDistance(e,t){if(!this.available)return null;const i=(0,c.WA)(e,N),s=this._getCollisionRadius(t),r=-1*this.collisionPriority;switch(this.collisionType.type){case"point":if((0,_.hG)(this.screenLocation.screenPointArray,i)<s*s)return this.screenLocation.renderScreenPointArray[2]+r;break;case"line":{const e=this.collisionType.paths,t=this._getWorldToScreenObjectScale(),n=this._calculateObjectTransform(t,V),o=s*this.screenLocation.pixelSize,a=(0,R.Z4)(this._camera,i,W);if(null==a)return null;for(const i of e){if(0===i.length)continue;const e=(0,g.e)(q,i[0],n);for(let t=1;t<i.length;t++){const s=(0,g.e)(U,i[t],n),l=(0,S.dz)((0,S.Cr)(e,s,I),a);if(null!=l&&l<o*o){const t=(0,g.g)(A.rq.get(),e,s);(0,g.h)(t,t,.5);const i=(0,c.rX)(A.rq.get());return this._camera.projectToRenderScreen(t,i),i[2]+r}(0,g.c)(e,s)}}break}case"disc":{var o;const e=this.collisionType.direction,t=null!==(o=this.collisionType.offset)&&void 0!==o?o:p.uY,n=this._getWorldToScreenObjectScale(),a=this._calculateObjectTransform(n,V),c=s*this.screenLocation.pixelSize,h=(0,R.Z4)(this._camera,i,W);if(null==h)return null;const d=(0,l.z0)(k,a),u=(0,g.t)(X,e,d),_=(0,g.e)(Q,t,a);(0,w.O_)(_,u,H);const v=G;if((0,w.Ui)(H,h,v)&&(0,g.a)(v,_)<c*c)return this.screenLocation.renderScreenPointArray[2]+r;break}case"ribbon":{const{paths:e,direction:t}=this.collisionType,n=this._getWorldToScreenObjectScale(),o=this._calculateObjectTransform(n,V),a=s*this._camera.computeScreenPixelSizeAt(this.renderLocation),h=(0,R.Z4)(this._camera,i,W);if(null==h)return null;const d=(0,l.z0)(k,o),u=(0,g.t)(X,t,d),_=this._calculateModelTransformPosition(Q);(0,w.O_)(_,u,H);const p=G;if(!(0,w.Ui)(H,h,p))break;for(const i of e){if(0===i.length)continue;const e=(0,g.e)(q,i[0],o);for(let t=1;t<i.length;t++){const n=(0,g.e)(U,i[t],o),s=(0,S.kb)((0,S.Cr)(e,n,I),p);if(null!=s&&s<a*a){const t=(0,g.g)(A.rq.get(),e,n);(0,g.h)(t,t,.5);const i=(0,c.rX)(A.rq.get());return this._camera.projectToRenderScreen(t,i),i[2]+r}(0,g.c)(e,n)}}break}default:(0,n.Xb)(this.collisionType)}return null}attach(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{manipulator3D:{}};const t=this._stage;if(!t)return;const i=e.manipulator3D;null==i.engineLayerId?(this._engineLayer=new z.x(t,{pickable:!1,updatePolicy:F.q.SYNC}),i.engineLayerId=this._engineLayer.id):(null===t||void 0===t?void 0:t.getObject)&&(this._engineLayer=t.getObject(i.engineLayerId)),i.engineLayerReferences=(i.engineLayerReferences||0)+1,this._materialIdReferences=i.materialIdReferences,null==this._materialIdReferences&&(this._materialIdReferences=new Map,i.materialIdReferences=this._materialIdReferences),this._camera.copyFrom(this.view.state.camera),this._attached=!0,this._updateEngineObject(),(0,f.canProjectWithoutEngine)(this._location.spatialReference,this.view.spatialReference)||(this.location=new C.A({x:0,y:0,z:0,spatialReference:this.view.spatialReference}))}detach(){const e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{manipulator3D:{}}).manipulator3D;e.engineLayerReferences--;const t=0===e.engineLayerReferences;this._removeResourcesFromStage(),t&&(e.engineLayerId=null,(0,a.pR)(this._engineLayer)),this._engineResources=null,this._engineLayer=null,this._materialIdReferences=null,this._attached=!1}onViewChange(){this._camera.copyFrom(this.view.state.camera),this._screenLocationDirty=!0,this._updateEngineObject()}onElevationChange(e){(0,f.projectPoint)(this.location,Y,e.spatialReference)&&(0,y.vR)(e.extent,Y)&&this._notifyLocationChanged()}_evaluateElevationAlignment(){var e,t,i,n;if(null==this.elevationInfo)return;let s=null,r=0;const o=(0,L.Ze)(this.elevationInfo,null!==(e=this.location.spatialReference)&&void 0!==e?e:this.view.elevationProvider.spatialReference);switch(this.elevationInfo.mode){case"on-the-ground":s=null!==(t=(0,O.R1)(this.view.elevationProvider,this.location,"ground"))&&void 0!==t?t:0;break;case"relative-to-ground":r=(null!==(i=(0,O.R1)(this.view.elevationProvider,this.location,"ground"))&&void 0!==i?i:0)+o;break;case"relative-to-scene":r=(null!==(n=(0,O.R1)(this.view.elevationProvider,this.location,"scene"))&&void 0!==n?n:0)+o;break;case"absolute-height":r=o}return r!==this._elevation.offset||s!==this._elevation.override?(this._elevation.offset=r,void(this._elevation.override=s)):void 0}_updateEngineObject(){if(!this._attached)return;if(!this.available)return void this._removeResourcesFromStage();const e=this._getWorldToScreenObjectScale(),t=V;if(!0===this.autoScaleRenderObjects){const i=this._getFocusedSize(this._radius,this.focused)*e;this._calculateObjectTransform(i,t)}else this._calculateObjectTransform(e,t);const{objectsByState:i}=this._ensureEngineResources(),n=(this.focused?D.p7.Focused:D.p7.Unfocused)|(this.selected?D.p7.Selected:D.p7.Unselected),s=this._noDisplayCount>0;for(const{stateMask:r,objects:o}of i){if(s){for(const e of o)e.visible=!1;continue}const e=(r&D.p7.All)!==D.p7.None,i=(r&D.SJ.All)!==D.SJ.None,a=!e||(n&r)==(r&D.p7.All),c=!i||(this.state&r)==(r&D.SJ.All);if(a&&c)for(const n of o)n.visible=!0,n.transformation=t;else for(const t of o)t.visible=!1}}_ensureEngineResources(){if(null==this._engineResources){const e=this._engineLayer,t=[],i=new Set;this.renderObjects.forEach((e=>{let{geometry:{material:n}}=e;i.has(n)||(t.push(n),i.add(n))}));const n=new Map;this._renderObjects.forEach((e=>{const t=new P.B({castShadow:!1,geometries:[e.geometry]}),i=n.get(e.stateMask)||[];i.push(t),n.set(e.stateMask,i)}));const s=[];n.forEach(((e,t)=>s.push({stateMask:t,objects:e}))),this._engineResources={objectsByState:s,layer:e,materials:t}}return this._addResourcesToStage(),this._engineResources}_addResourcesToStage(){const e=this._stage;if(this._engineResourcesAddedToStage||null==this._engineResources||!e)return;const{objectsByState:t,layer:i,materials:n}=this._engineResources;n.forEach((t=>{const i=this._materialIdReferences,n=i.get(t.id)||0;0===n&&e.add(t),i.set(t.id,n+1)})),t.forEach((t=>{let{objects:n}=t;i.addMany(n),e.addMany(n)})),this._engineResourcesAddedToStage=!0}_removeResourcesFromStage(){const e=this._stage;if(!this._engineResourcesAddedToStage||null==this._engineResources||!e)return;const{objectsByState:t,layer:i,materials:n}=this._engineResources;t.forEach((t=>{let{objects:n}=t;i.removeMany(n),e.removeMany(n)})),n.forEach((t=>{const i=this._materialIdReferences,n=i.get(t.id);1===n?(e.remove(t),i.delete(t.id)):i.set(t.id,n-1)})),this._engineResourcesAddedToStage=!1}_getCollisionRadius(e){return this._getFocusedSize(this.radius,!0)*("touch"===e?this.touchMultiplier:1)}_getFocusedSize(e,t){return e*(t?this.focusMultiplier:1)}_getWorldToScreenObjectScale(){return this._worldSized?1:this.screenLocation.pixelSize}_calculateModelTransformPosition(e){const t=this._getWorldToScreenObjectScale(),i=this._calculateObjectTransform(t,B);return(0,g.s)(e,i[12],i[13],i[14])}_calculateModelTransformOffset(e){const t=this._calculateModelTransformPosition(e);return(0,g.f)(e,t,this.renderLocation)}_calculateObjectTransform(e,t){return(0,d.hZ)(t,e,0,0,0,0,e,0,0,0,0,e,0,0,0,0,1),this._worldFrame&&(0,d.lw)(t,t,this._worldFrame),(0,d.lw)(t,t,this._modelTransform),t[12]+=this.renderLocation[0],t[13]+=this.renderLocation[1],t[14]+=this.renderLocation[2],t[15]=1,null!=this._applyObjectTransform&&this._applyObjectTransform(t),t}get test(){let e=!1;if(null!=this._engineResources)for(const t of this._engineResources.objectsByState){for(const i of t.objects)if(i.visible){e=!0;break}if(e)break}return{areAnyResourcesVisible:e}}}function x(e){return 0!==e[12]||0!==e[13]||0!==e[14]}const N=(0,c.gs)(),I=(0,S.vt)(),W=(0,E.vt)(),k=(0,h.vt)(),B=(0,u.vt)(),V=(0,u.vt)(),H=(0,w.vt)(),q=(0,p.vt)(),U=(0,p.vt)(),G=(0,p.vt)(),X=(0,p.vt)(),Q=(0,p.vt)(),Z=(0,p.vt)(),Y=new C.A({x:0,y:0,z:0,spatialReference:null}),J=()=>{}},91175:(e,t,i)=>{i.d(t,{M:()=>s});var n=i(76336);class s{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.p7.None;this.geometry=e,this.stateMask=t}}},38317:(e,t,i)=>{i.d(t,{FY:()=>f,MO:()=>v,QI:()=>g,UM:()=>_,V1:()=>y,Yk:()=>b,eO:()=>p,wQ:()=>m});var n=i(59784),s=i(34761),r=i(20664),o=i(75762),a=i(32535),c=i(36423),l=i(83490),h=i(45463),d=i(76956),u=i(84294);function _(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h.m$.OccludeAndTransparent,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const s=(0,n.pf)(e),r=!(e[3]<1);return i?new u.A({color:s,writeDepth:r,cullFace:l.s2.Back,renderOccluded:t,isDecoration:!0}):new d.v({color:s,writeDepth:r,cullFace:l.s2.Back,renderOccluded:t,isDecoration:!0})}function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h.m$.OccludeAndTransparent;const i=(0,n.pf)(e);return new d.v({color:i,writeDepth:!0,cullFace:l.s2.Front,renderOccluded:t,isDecoration:!0})}const p=Object.freeze({calloutLength:40,calloutWidth:1,discRadius:27,focusMultiplier:1.1}),v=Object.freeze({autoScaleRenderObjects:!1,worldSized:!0});function f(e,t,i,n){const a=(0,r.f)(o.rq.get(),e,i),c=m(a,(0,r.b)(o.rq.get(),n,a),i,o.Rc.get());(0,s.B8)(c,c);const l=(0,r.e)(o.rq.get(),t,c);return Math.atan2(l[1],l[0])}function m(e,t,i,n){const s=(0,r.n)(o.rq.get(),e),a=(0,r.n)(o.rq.get(),t),c=(0,r.b)(o.rq.get(),s,a);return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=0,n[4]=a[0],n[5]=a[1],n[6]=a[2],n[7]=0,n[8]=c[0],n[9]=c[1],n[10]=c[2],n[11]=0,n[12]=i[0],n[13]=i[1],n[14]=i[2],n[15]=1,n}function b(e,t){const i=e.getViewForGraphic(t);return null!=i&&"computeAttachmentOrigin"in i?i.computeAttachmentOrigin(t,e.spatialReference):null}function y(e,t,i){const n=b(e,i);null==n?function(e,t){if(null==t)return;const i="mesh"===t.type?t.anchor:(0,c.W$)(t);null!=i&&(e.location=(0,a.wZ)(i))}(t,i.geometry):t.elevationAlignedLocation=n}},32314:(e,t,i)=>{i.d(t,{X:()=>l});var n=i(34761),s=i(13191),r=i(69230),o=i(37046),a=i(44513),c=i(8918);class l extends r.B{constructor(e){super(e),this._resources=null,this._transform=(0,s.vt)()}get object(){return null!=this._resources?this._resources.object:null}get transform(){return this._transform}set transform(e){(0,n.C)(this._transform,e),null!=this._resources&&(this._resources.object.transformation=this._transform)}recreate(){this.attached&&this.createResources()}recreateGeometry(){if(null==this._resources)return;const e=this._resources.object,t=this.view._stage;t.removeMany(e.geometries),e.removeAllGeometries(),this.createGeometries(e),e.visible=this.visible,t.addMany(e.geometries)}createResources(){this.destroyResources();const e=this.view._stage;if(!e)return;const t=new c.x(e,{pickable:!1,updatePolicy:a.q.SYNC}),i=new o.B({castShadow:!1});i.transformation=this._transform,this.createExternalResources(),this.createGeometries(i),e.addMany(i.geometries),this.forEachExternalMaterial((t=>e.add(t))),e.add(i),t.add(i),i.visible=this.visible,this._resources={layer:t,object:i}}destroyResources(){const e=this.view._stage;null!=this._resources&&e&&(e.remove(this._resources.object),this._resources.layer.destroy(),this.forEachExternalMaterial((t=>{e.remove(t)})),e.removeMany(this._resources.object.geometries),this._resources.object.dispose(),this.destroyExternalResources(),this._resources=null)}updateVisibility(e){null!=this._resources&&(this._resources.object.visible=e)}}},18261:(e,t,i)=>{i.d(t,{L:()=>c});var n,s=i(57528),r=i(3799),o=i(21390),a=i(64839);function c(e,t){if(!t.screenSizeEnabled)return;const i=e.vertex;(0,r.yu)(i,t),i.uniforms.add(new o.m("perScreenPixelRatio",((e,t)=>t.camera.perScreenPixelRatio)),new o.m("screenSizeScale",(e=>e.screenSizeScale))),i.code.add((0,a.H)(n||(n=(0,s.A)(["float computeRenderPixelSizeAt( vec3 pWorld ){\nvec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);\nfloat viewDirectionDistance = abs(dot(viewForward, pWorld - cameraPosition));\nreturn viewDirectionDistance * perScreenPixelRatio;\n}\nvec3 screenSizeScaling(vec3 position, vec3 anchor){\nreturn position * screenSizeScale * computeRenderPixelSizeAt(anchor) + anchor;\n}"]))))}},84294:(e,t,i)=>{i.d(t,{A:()=>z});var n=i(20664),s=i(9392),r=i(55855),o=i(42294),a=i(88105),c=i(48549),l=i(34981),h=i(83490),d=i(59696),u=i(45463),_=i(77730),g=i(86994),p=i(66470),v=i(52757),f=i(99362),m=i(35143),b=i(16506),y=i(42693),S=i(99415),w=i(60322),E=i(28584),A=i(10773),T=i(92656),L=i(7200),O=i(93345),R=i(57162);class j extends y.w{initializeProgram(e){return new E.B(e.rctx,j.shader.get().build(this.configuration),F)}_setPipelineState(e){const t=this.configuration,i=e===A.y.NONE,n=e===A.y.FrontFace;return(0,R.Ey)({blending:t.output!==l.V.Color&&t.output!==l.V.Alpha||!t.transparent?null:i?w.V0:(0,w.ez)(e),culling:(0,R.Xt)(t.cullFace),depthTest:{func:n?O.MT.LESS:t.shadingEnabled?O.MT.LEQUAL:O.MT.LESS},depthWrite:i?t.writeDepth?R.kn:null:(0,w.XO)(e),colorWrite:R.wE,polygonOffset:i||n?null:w.SE})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}}j.shader=new b.$(L.S,(()=>i.e(19086).then(i.bind(i,19086))));class P extends T.E{constructor(){super(...arguments),this.output=l.V.Color,this.cullFace=h.s2.None,this.transparencyPassType=A.y.NONE,this.hasSlicePlane=!1,this.transparent=!1,this.writeDepth=!0,this.screenSizeEnabled=!0,this.shadingEnabled=!0,this.multipassEnabled=!1,this.cullAboveGround=!1}}(0,m._)([(0,S.W)({count:l.V.COUNT})],P.prototype,"output",void 0),(0,m._)([(0,S.W)({count:h.s2.COUNT})],P.prototype,"cullFace",void 0),(0,m._)([(0,S.W)({count:A.y.COUNT})],P.prototype,"transparencyPassType",void 0),(0,m._)([(0,S.W)()],P.prototype,"hasSlicePlane",void 0),(0,m._)([(0,S.W)()],P.prototype,"transparent",void 0),(0,m._)([(0,S.W)()],P.prototype,"writeDepth",void 0),(0,m._)([(0,S.W)()],P.prototype,"screenSizeEnabled",void 0),(0,m._)([(0,S.W)()],P.prototype,"shadingEnabled",void 0),(0,m._)([(0,S.W)()],P.prototype,"multipassEnabled",void 0),(0,m._)([(0,S.W)()],P.prototype,"cullAboveGround",void 0),(0,m._)([(0,S.W)({constValue:!1})],P.prototype,"occlusionPass",void 0);const F=new Map([[p.r.POSITION,0],[p.r.NORMAL,1],[p.r.OFFSET,2]]);class z extends u.im{constructor(e){super(e,new C),this.supportsEdges=!0,this.produces=new Map([[_.N.OPAQUE_MATERIAL,e=>e===l.V.Highlight||(0,l.BF)(e)&&!this._isTransparent],[_.N.TRANSPARENT_MATERIAL,e=>(0,l.BF)(e)&&this._isTransparent&&this.parameters.writeDepth],[_.N.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,e=>(0,l.BF)(e)&&this._isTransparent&&!this.parameters.writeDepth]]),this._configuration=new P,this._vertexAttributeLocations=F}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this._isTransparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.screenSizeEnabled=this.parameters.screenSizeEnabled,this._configuration.shadingEnabled=this.parameters.shadingEnabled,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}intersect(e,t,i,s,r,a){if(this.parameters.screenSizeEnabled){const t=e.attributes.get(p.r.OFFSET),c={applyToVertex:(e,s,r,o)=>{const a=(0,n.s)(x,t.data[3*o],t.data[3*o+1],t.data[3*o+2]),c=(0,n.s)(N,e,s,r);return(0,n.h)(a,a,this.parameters.screenSizeScale*i.camera.computeScreenPixelSizeAt(a)),(0,n.g)(c,c,a),[c[0],c[1],c[2]]},applyToAabb:e=>{const t=(0,o.gX)(e,x);return(0,o.hs)(e,this.parameters.screenSizeScale*i.camera.computeScreenPixelSizeAt(t))}};(0,f.Uy)(e,i,s,r,c,a)}else(0,f.Uy)(e,i,s,r,void 0,a)}createGLMaterial(e){return new D(e)}createBufferWriter(){return new M(this.parameters.screenSizeEnabled)}get _isTransparent(){return this.parameters.color[3]<1||this.parameters.forceTransparentMode}}class D extends d.A{beginSlot(e){return this.ensureTechnique(j,e)}}class C extends u.qA{constructor(){super(...arguments),this.color=(0,r.fA)(1,1,1,1),this.shadingTint=(0,r.fA)(0,0,0,.25),this.shadingDirection=(0,n.n)((0,s.vt)(),[.5,-.5,-.5]),this.screenSizeScale=14,this.forceTransparentMode=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=h.s2.None,this.screenSizeEnabled=!1,this.shadingEnabled=!0}}class M{constructor(e){this.screenSizeEnabled=e;const t=(0,c.BP)().vec3f(p.r.POSITION).vec3f(p.r.NORMAL);this.screenSizeEnabled&&t.vec3f(p.r.OFFSET),this.vertexBufferLayout=t}elementCount(e){return e.attributes.get(p.r.POSITION).indices.length}write(e,t,i,n,s){if((0,v.SA)(i,this.vertexBufferLayout,e,t,n,s),this.screenSizeEnabled){if(!i.attributes.has(p.r.OFFSET))throw new Error("".concat(p.r.OFFSET," vertex attribute required for screenSizeEnabled ShadedColorMaterial"));{const e=i.attributes.get(p.r.OFFSET);(0,g.vA)(3===e.size);const r=n.getField(p.r.OFFSET,a.xs);if(!r)throw new Error("unable to acquire view for "+p.r.OFFSET);(0,v.Hk)(e,t,r,s)}}}}const x=(0,s.vt)(),N=(0,s.vt)()}}]);
//# sourceMappingURL=88.6f5ec634.chunk.js.map