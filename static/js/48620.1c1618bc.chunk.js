"use strict";(self.webpackChunkhelloworld=self.webpackChunkhelloworld||[]).push([[48620],{32186:(t,e,n)=>{n.d(e,{A:()=>d});var r,o=n(35143),i=n(42553),l=n(46053),a=(n(81806),n(76460),n(47249),n(85842)),c=n(34761),u=n(13191),s=n(60008),f=n(4336),p=n(20664),g=n(9392),v=n(52896);let h=r=class extends i.oY{constructor(t){super(t),this.translation=(0,g.vt)(),this.rotationAxis=(0,g.ci)(v.up),this.rotationAngle=0,this.scale=(0,g.fA)(1,1,1)}get rotation(){return(0,v.i4)(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=(0,g.o8)((0,v.yo)(t)),this.rotationAngle=(0,v.g7)(t)}get localMatrix(){const t=(0,u.vt)();return(0,s.x8)(y,(0,v.yo)(this.rotation),(0,v.$I)(this.rotation)),(0,c.o1)(t,y,this.translation,this.scale),t}get localMatrixInverse(){return(0,c.B8)((0,u.vt)(),this.localMatrix)}applyLocal(t,e){return(0,p.e)(e,t,this.localMatrix)}applyLocalInverse(t,e){return(0,p.e)(e,t,this.localMatrixInverse)}equals(t){return this===t||null!=t&&(0,c.t2)(this.localMatrix,t.localMatrix)}clone(){const t={translation:(0,g.o8)(this.translation),rotationAxis:(0,g.o8)(this.rotationAxis),rotationAngle:this.rotationAngle,scale:(0,g.o8)(this.scale)};return new r(t)}};(0,o._)([(0,l.MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],h.prototype,"translation",void 0),(0,o._)([(0,l.MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],h.prototype,"rotationAxis",void 0),(0,o._)([(0,l.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],h.prototype,"rotationAngle",void 0),(0,o._)([(0,l.MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],h.prototype,"scale",void 0),(0,o._)([(0,l.MZ)()],h.prototype,"rotation",null),(0,o._)([(0,l.MZ)()],h.prototype,"localMatrix",null),(0,o._)([(0,l.MZ)()],h.prototype,"localMatrixInverse",null),h=r=(0,o._)([(0,a.$)("esri.geometry.support.MeshTransform")],h);const y=(0,f.vt)(),d=h},52896:(t,e,n)=>{n.d(e,{$I:()=>A,AU:()=>h,Cr:()=>p,g7:()=>d,i4:()=>f,ui:()=>g,up:()=>x,vt:()=>s,yo:()=>y});var r=n(15941),o=n(34761),i=n(60008),l=n(4336),a=n(20664),c=n(9392),u=n(55855);function s(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x;return[t[0],t[1],t[2],t[3]]}function f(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s();return(0,a.c)(n,t),n[3]=e,n}function p(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,u.vt)();return(0,a.b)(n,t,e),(0,a.n)(n,n),n[3]=-(0,a.d)(t,e),n}function g(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s();const n=(0,o.l)(w,t);return m(e,(0,r.KJ)((0,i.Xd)(e,n))),e}function v(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s();return(0,i.x8)(w,t,A(t)),(0,i.x8)(M,e,A(e)),(0,i.lw)(w,M,w),m(n,(0,r.KJ)((0,i.Xd)(n,w)))}function h(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:s();return f(c.Cw,t,F),f(c.JP,e,b),f(c.Cb,n,P),v(F,b,F),v(F,P,r),r}function y(t){return t}function d(t){return t[3]}function A(t){return(0,r.kU)(t[3])}function m(t,e){return t[3]=e,t}const x=[0,0,1,0],w=(0,l.vt)(),M=(0,l.vt)(),F=(s(),s()),b=s(),P=s()},84640:(t,e,n)=>{n.d(e,{Hm:()=>a,QD:()=>c,WN:()=>l});var r=n(63241),o=n(76460),i=n(99773);function l(t,e){return t.isGeographic||t.isWebMercator&&(null===e||void 0===e||e)}function a(t,e){switch(t.type){case"georeferenced":return e.isGeographic;case"local":return e.isGeographic||e.isWebMercator}}function c(t,e,n,l){if(void 0!==l){(0,r.io)(o.A.getLogger(t),"option: geographic",{replacement:"use mesh vertexSpace and spatial reference to control how operations are performed",version:"4.29",warnOnce:!0});const a="local"===e.type;if(!(0,i.Hq)(e)||l===a)return n.isGeographic||n.isWebMercator&&l;o.A.getLogger(t).warnOnce("Specifying the 'geographic' parameter (".concat(l,') for a Mesh vertex space of type "').concat(e.type,'" is not supported. This parameter will be ignored.'))}return a(e,n)}},48620:(t,e,n)=>{n.d(e,{NW:()=>w,RN:()=>_,bA:()=>M,h7:()=>P,nX:()=>j,project:()=>T,qD:()=>F,wD:()=>C});var r=n(31633),o=n(44680),i=n(34761),l=n(13191),a=n(20664),c=n(9392),u=n(63919),s=n(9624),f=n(98510),p=n(5809),g=n(45308),v=n(44815),h=n(32186),y=n(99773),d=n(45136),A=n(84640),m=n(26375);function x(t,e,n){return(0,A.WN)(e.spatialReference,null===n||void 0===n?void 0:n.geographic)?C(t,e,!1,n):function(t,e,n){var r;const o=new Float64Array(t.position.length),i=t.position,l=e.x,a=e.y,c=null!==(r=e.z)&&void 0!==r?r:0,u=j(n?n.unit:null,e.spatialReference);for(let s=0;s<i.length;s+=3)o[s]=i[s]*u+l,o[s+1]=i[s+1]*u+a,o[s+2]=i[s+2]*u+c;return{position:o,normal:t.normal,tangent:t.tangent}}(t,e,n)}function w(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.zK;const{position:n,normal:r,tangent:o}=t;return{position:(0,d.a)(new Float64Array(n.length),n,e),normal:null!=r?(0,m.qs)(r,new Float32Array(r.length),e):null,tangent:null!=o?(0,m.KM)(o,new Float32Array(o.length),e):null}}function M(t,e,n,r){const{position:o,normal:i,tangent:l}=t;if(!(0,y.Hq)(e))return{position:o,normal:i,tangent:l};const a=(0,y.MW)(e,r);return x(w(t,null===n||void 0===n?void 0:n.localMatrix),a,{geographic:"local"===e.type})}function F(t,e,n){const r=(0,y.TE)(e,n),o=e.spatialReference,i=(0,y.Hq)(r);if(!i)return{vertexAttributes:x(t,e,n),vertexSpace:r,transform:null};const{position:l,normal:a,tangent:c}=t,u=(0,A.Hm)(r,o);switch(r.type){case"georeferenced":return u?{vertexAttributes:C(t,e,i,n),vertexSpace:r,transform:null}:{vertexAttributes:{position:l,normal:a,tangent:c},vertexSpace:r,transform:new h.A};case"local":return{vertexAttributes:{position:l,normal:a,tangent:c},vertexSpace:r,transform:new h.A}}}function b(t,e,n){return(0,A.WN)(e.spatialReference,null===n||void 0===n?void 0:n.geographic)?_(t,e,n):R(t,e,n)}function P(t,e,n,r,o){if(!(0,y.Hq)(e))return b(t,r,o);const{spatialReference:i}=r,l=M(t,e,n,i);return r.equals((0,y.MW)(e,i))?R(l,r,o):b(l,r,o)}function T(t){var e,n;let{positions:r,transform:o,vertexSpace:u,inSpatialReference:h,outSpatialReference:y,outPositions:A,localMode:m}=t;const x=null!==(e=u.origin)&&void 0!==e?e:c.uY,w=null!=u.origin&&null!==(n=null===o||void 0===o?void 0:o.localMatrix)&&void 0!==n?n:l.zK;if("georeferenced"===u.type){const t=null!==A&&void 0!==A?A:(0,v.jh)(r.length);if((0,i.aI)(w,l.zK)?(0,v.s)(t,r):(0,d.a)(t,r,w),!(0,a.j)(x,c.uY)){const[e,n,r]=x;for(let o=0;o<t.length;o+=3)t[o]+=e,t[o+1]+=n,t[o+2]+=r}return(0,g.projectBuffer)(t,h,0,t,y,0,t.length/3),t}let M=h;const F=(0,f.lO)(h);M=y.isWebMercator&&m||!(0,s.canProjectWithoutEngine)(h,F)?M:F,(0,p.l)(h,x,N,M),(0,i.lw)(N,N,w);const b=null!==A&&void 0!==A?A:(0,v.jh)(r.length);return(0,d.a)(b,r,N),(0,g.projectBuffer)(b,M,0,b,y,0,b.length/3),b}function C(t,e,n,r){const o=e.spatialReference,i=S(e,r,N),l=new Float64Array(t.position.length),a=function(t,e,n,r){(0,d.a)(r,t,e);const o=new Float64Array(t.length);return(0,m.$5)(r,o,n)}(t.position,i,o,l),c=(0,u.Ge)(z,i),s=function(t,e,n,r,o){if(null==n)return null;const i=new Float32Array(n.length);return(0,d.b)(i,n,r),(0,m.si)(i,t,e,o,i),i}(a,l,t.normal,c,o),f=function(t,e,n,r,o){if(null==n)return null;const i=new Float32Array(n.length);(0,d.b)(i,n,r,4);for(let l=3;l<i.length;l+=4)i[l]=n[l];return(0,m.Mv)(i,t,e,o,i),i}(a,l,t.tangent,c,o);if(n){const{x:t,y:n,z:r}=e;(0,d.t)(a,a,[-t,-n,-(null!==r&&void 0!==r?r:0)])}return{position:a,normal:s,tangent:f}}function R(t,e,n){var r;const o=new Float64Array(t.position.length),i=t.position,l=e.x,a=e.y,c=null!==(r=e.z)&&void 0!==r?r:0,u=j(n?n.unit:null,e.spatialReference);for(let s=0;s<i.length;s+=3)o[s]=(i[s]-l)/u,o[s+1]=(i[s+1]-a)/u,o[s+2]=(i[s+2]-c)/u;return{position:o,normal:t.normal,tangent:t.tangent}}function _(t,e,n){const r=e.spatialReference;S(e,n,N);const o=(0,i.B8)(X,N),l=new Float64Array(t.position.length),a=function(t,e,n,r){const o=(0,m.gr)(t,e,r),i=new Float64Array(o.length);return(0,d.a)(i,o,n),i}(t.position,r,o,l),c=(0,u.Ge)(z,o);return{position:a,normal:O(t.normal,t.position,l,r,c),tangent:W(t.tangent,t.position,l,r,c)}}function S(t,e,n){var r;(0,p.l)(t.spatialReference,[t.x,t.y,null!==(r=t.z)&&void 0!==r?r:0],n,(0,f.lO)(t.spatialReference));const o=j(e?e.unit:null,t.spatialReference);return(0,i.hs)(n,n,[o,o,o]),n}function O(t,e,n,r,o){if(null==t)return null;const i=(0,m.X4)(t,e,n,r,new Float32Array(t.length));return(0,d.b)(i,i,o),i}function W(t,e,n,r,o){if(null==t)return null;const i=(0,m.xA)(t,e,n,r,new Float32Array(t.length));return(0,d.b)(i,i,o,4),i}function j(t,e){if(null==t)return 1;const n=(0,r.KX)(e);return 1/(0,r.oU)(n,"meters",t)}const N=(0,l.vt)(),X=(0,l.vt)(),z=(0,o.vt)()},26375:(t,e,n)=>{n.d(e,{$5:()=>x,KM:()=>M,Mv:()=>b,X4:()=>d,gr:()=>m,qs:()=>w,si:()=>A,xA:()=>F});var r=n(76460),o=n(63919),i=n(44680),l=n(13191),a=n(20664),c=n(9392),u=n(98510),s=n(5809),f=n(45308),p=n(80963),g=n(45417),v=n(88105),h=n(45136);const y=()=>r.A.getLogger("esri.geometry.support.meshUtils.normalProjection");function d(t,e,n,r,o){return T(r)?(P(R.TO_PCPF,v.xs.fromTypedArray(t),v.Xm.fromTypedArray(e),v.Xm.fromTypedArray(n),r,v.xs.fromTypedArray(o)),o):(y().error("Cannot convert spatial reference to PCPF"),o)}function A(t,e,n,r,o){return T(r)?(P(R.FROM_PCPF,v.xs.fromTypedArray(t),v.Xm.fromTypedArray(e),v.Xm.fromTypedArray(n),r,v.xs.fromTypedArray(o)),o):(y().error("Cannot convert to spatial reference from PCPF"),o)}function m(t,e,n){return(0,f.projectBuffer)(t,e,0,n,(0,u.lO)(e),0,t.length/3),n}function x(t,e,n){return(0,f.projectBuffer)(t,(0,u.lO)(n),0,e,n,0,t.length/3),e}function w(t,e,n){return(0,o.Ge)(j,n),(0,h.b)(e,t,j),(0,o.ut)(j)||(0,h.n)(e,e),e}function M(t,e,n){if((0,o.Ge)(j,n),(0,h.b)(e,t,j,4),(0,o.ut)(j)||(0,h.n)(e,e,4),t!==e)for(let r=3;r<t.length;r+=4)e[r]=t[r];return e}function F(t,e,n,r,o){if(!T(r))return y().error("Cannot convert spatial reference to PCPF"),o;P(R.TO_PCPF,v.xs.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),v.Xm.fromTypedArray(e),v.Xm.fromTypedArray(n),r,v.xs.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT));for(let i=3;i<t.length;i+=4)o[i]=t[i];return o}function b(t,e,n,r,o){if(!T(r))return y().error("Cannot convert to spatial reference from PCPF"),o;P(R.FROM_PCPF,v.xs.fromTypedArray(t,16),v.Xm.fromTypedArray(e),v.Xm.fromTypedArray(n),r,v.xs.fromTypedArray(o,16));for(let i=3;i<t.length;i+=4)o[i]=t[i];return o}function P(t,e,n,r,i,l){if(!e)return;const c=n.count,f=(0,u.lO)(i);if(C(i))for(let u=0;u<c;u++)r.getVec(u,S),e.getVec(u,O),(0,s.l)(f,S,W,f),(0,o.z0)(j,W),t===R.FROM_PCPF&&(0,o.mg)(j,j),(0,a.t)(O,O,j),l.setVec(u,O);else for(let u=0;u<c;u++){r.getVec(u,S),e.getVec(u,O),(0,s.l)(f,S,W,f),(0,o.z0)(j,W);const i=(0,g.jg)(n.get(u,1));let c=Math.cos(i);t===R.TO_PCPF&&(c=1/c),j[0]*=c,j[1]*=c,j[2]*=c,j[3]*=c,j[4]*=c,j[5]*=c,t===R.FROM_PCPF&&(0,o.mg)(j,j),(0,a.t)(O,O,j),(0,a.n)(O,O),l.setVec(u,O)}return l}function T(t){return C(t)||function(t){return t.isWebMercator}(t)}function C(t){return t.isWGS84||(0,p.x1)(t)||(0,p.q8)(t)||(0,p.KQ)(t)}var R,_;(_=R||(R={}))[_.TO_PCPF=0]="TO_PCPF",_[_.FROM_PCPF=1]="FROM_PCPF";const S=(0,c.vt)(),O=(0,c.vt)(),W=(0,l.vt)(),j=(0,i.vt)()},99773:(t,e,n)=>{n.d(e,{CK:()=>p,Hq:()=>f,MW:()=>g,TE:()=>v,Uj:()=>h,by:()=>y,kp:()=>s});var r=n(63241),o=n(76460),i=n(13904),l=n(14894),a=n(5845),c=n(45136);function u(){return o.A.getLogger("esri.geometry.Mesh")}function s(t){var e;const{vertexSpace:n}=t;if(null!=n.origin)return t.clone();const{anchor:r}=t,o=r.clone(),i=new l.A({origin:[o.x,o.y,o.z]}),a=t.cloneWithVertexSpace(i),{position:u}=a.vertexAttributes;return a.vertexAttributes.position=(0,c.t)(new Float64Array(u.length),u,[-o.x,-o.y,-(null!==(e=o.z)&&void 0!==e?e:0)]),a.vertexAttributesChanged(),a}function f(t){return null!=t.origin}function p(t){return f(t.vertexSpace)}function g(t,e){if(!f(t))return null;const[n,r,o]=t.origin;return new i.A({x:n,y:r,z:o,spatialReference:e})}function v(t,e){const{x:n,y:o,z:i,spatialReference:c}=t,s=[n,o,null!==i&&void 0!==i?i:0];if(void 0!==(null===e||void 0===e?void 0:e.geographic)){if((0,r.io)(u(),"option: geographic",{replacement:"use vertexSpace option instead",version:"4.29",warnOnce:!0}),null===e||void 0===e||!e.vertexSpace)return null!==e&&void 0!==e&&e.geographic?new a.A({origin:s}):new l.A({origin:s});u().warn("Deprecated geographic flag ignored since vertexSpace option is provided.")}if(null===e||void 0===e||!e.vertexSpace)return c.isGeographic||c.isWebMercator?new a.A({origin:s}):new l.A({origin:s});switch(e.vertexSpace){case"local":return new a.A({origin:s});case"georeferenced":return new l.A({origin:s});case"georeferenced-absolute":return new l.A}}function h(t){return t.isGeographic||t.isWebMercator?"local":"georeferenced"}function y(t,e){return"local"===t?new a.A({origin:e}):new l.A({origin:e})}}}]);
//# sourceMappingURL=48620.1c1618bc.chunk.js.map