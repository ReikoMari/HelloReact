"use strict";(self.webpackChunkhelloworld=self.webpackChunkhelloworld||[]).push([[27802],{27802:(e,t,l)=>{l.r(t),l.d(t,{I3STreeDebugger:()=>b});var s=l(35143),i=(l(35238),l(18690)),o=l(46053),r=(l(81806),l(76460),l(85842)),n=l(34761),a=l(13191),h=l(20664),c=l(9392),u=l(45308),p=l(29614),y=l(65215);let b=class extends p.E{constructor(e){super(e)}getTiles(){const e=this.lv.getVisibleNodes(),t=this.view.renderSpatialReference,l=this.nodeSR;return e.map((e=>function(e,t,l){const s=e.serviceObbInIndexSR;if(null==s||null==t)return null;(0,n.I0)(d,s.quaternion),(0,h.c)(f,s.center),(0,u.projectBuffer)(f,l,0,f,t,0,1),d[12]=f[0],d[13]=f[1],d[14]=f[2];const i=[[],[],[]];(0,h.e)(f,s.halfSize,d),(0,u.projectBuffer)(f,t,0,f,l,0,1),i[0].push([f[0],f[1]]),(0,h.c)(f,s.halfSize),f[0]=-f[0],(0,h.e)(f,f,d),(0,u.projectBuffer)(f,t,0,f,l,0,1),i[0].push([f[0],f[1]]),(0,h.c)(f,s.halfSize),f[0]=-f[0],f[1]=-f[1],(0,h.e)(f,f,d),(0,u.projectBuffer)(f,t,0,f,l,0,1),i[0].push([f[0],f[1]]),(0,h.c)(f,s.halfSize),f[1]=-f[1],(0,h.e)(f,f,d),(0,u.projectBuffer)(f,t,0,f,l,0,1),i[0].push([f[0],f[1]]),i[1].push(i[0][0]),i[1].push(i[0][1]),(0,h.c)(f,s.halfSize),f[0]=-f[0],f[2]=-f[2],(0,h.e)(f,f,d),(0,u.projectBuffer)(f,t,0,f,l,0,1),i[1].push([f[0],f[1]]),(0,h.c)(f,s.halfSize),f[2]=-f[2],(0,h.e)(f,f,d),(0,u.projectBuffer)(f,t,0,f,l,0,1),i[1].push([f[0],f[1]]),i[2].push(i[0][0]),i[2].push(i[0][3]),(0,h.c)(f,s.halfSize),f[1]=-f[1],f[2]=-f[2],(0,h.e)(f,f,d),(0,u.projectBuffer)(f,t,0,f,l,0,1),i[2].push([f[0],f[1]]),i[2].push(i[1][3]);const o=new y.A({rings:i,spatialReference:l});return{lij:[e.level,e.childCount,0],label:e.id,geometry:o}}(e,t,l))).filter(i.Ru).sort(((e,t)=>e.lij[0]===t.lij[0]?e.label>t.label?-1:1:e.lij[0]-t.lij[0]))}};(0,s._)([(0,o.MZ)({constructOnly:!0})],b.prototype,"lv",void 0),(0,s._)([(0,o.MZ)({constructOnly:!0})],b.prototype,"nodeSR",void 0),b=(0,s._)([(0,r.$)("esri.views.3d.layers.support.I3STreeDebugger")],b);const d=(0,a.vt)(),f=(0,c.vt)()},29614:(e,t,l)=>{l.d(t,{E:()=>_});var s=l(35143),i=l(69539),o=l(39356),r=(l(95444),l(91967)),n=l(19276),a=l(15941),h=l(46053),c=(l(81806),l(76460),l(47249),l(85842)),u=l(37471),p=l(86875),y=l(86659),b=l(21405),d=l(48670),f=l(92135),g=l(68905);const w=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];let _=class extends r.A{constructor(e){super(e),this.updating=!1,this.enablePolygons=!0,this.enableLabels=!0,this._polygons=new Map,this._labels=new Map,this._enabled=!0}initialize(){this._symbols=w.map((e=>new p.default({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}}))),this.update()}destroy(){this._enabled=!1,this.clear()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&(this._enabled=e,this.update())}update(){if(!this._enabled)return void this.clear();const e=this.getTiles(),t=new Array,l=new Set((this._labels.size,this._labels.keys()));e.forEach(((s,r)=>{const h=s.lij.toString();l.delete(h);const c=s.lij[0],p=s.geometry;if(this.enablePolygons&&!this._polygons.has(h)){const e=new o.A({geometry:p,symbol:this._symbols[c%this._symbols.length]});this._polygons.set(h,e),t.push(e)}if(this.enableLabels){const l=(e=>{if(null!=e.label)return e.label;let t=e.lij.toString();return null!=e.loadPriority&&(t+=" (".concat(e.loadPriority,")")),t})(s),c=r/(e.length-1),w=(0,a.Cc)(0,200,c),_=(0,a.Cc)(20,6,c)/.75,v=null!=s.loadPriority&&s.loadPriority>=e.length,m=new i.A([w,v?0:w,v?0:w]),S="3d"===this.view.type?()=>new u.A({verticalOffset:new d.A({screenLength:40/.75}),callout:new f.A({color:new i.A("white"),border:new g.A({color:new i.A("black")})}),symbolLayers:new n.A([new b.A({text:l,halo:{color:"white",size:1/.75},material:{color:m},size:_})])}):()=>new y.A({text:l,haloColor:"white",haloSize:1/.75,color:m,size:_}),A=this._labels.get(h);if(A){const e=S();null!=A.symbol&&JSON.stringify(e)===JSON.stringify(A.symbol)||(A.symbol=e)}else{const e=new o.A({geometry:p.extent.center,symbol:S()});this._labels.set(h,e),t.push(e)}}}));const s=new Array;l.forEach((e=>{const t=this._polygons.get(e);null!=t&&(s.push(t),this._polygons.delete(e));const l=this._labels.get(e);null!=l&&(s.push(l),this._labels.delete(e))})),this.view.graphics.removeMany(s),this.view.graphics.addMany(t)}clear(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}};(0,s._)([(0,h.MZ)({constructOnly:!0})],_.prototype,"view",void 0),(0,s._)([(0,h.MZ)({readOnly:!0})],_.prototype,"updating",void 0),(0,s._)([(0,h.MZ)()],_.prototype,"enabled",null),_=(0,s._)([(0,c.$)("esri.views.support.TileTreeDebugger")],_)}}]);
//# sourceMappingURL=27802.0abebdad.chunk.js.map