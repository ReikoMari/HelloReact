"use strict";(self.webpackChunkhelloworld=self.webpackChunkhelloworld||[]).push([[8341],{8341:(t,s,e)=>{e.r(s),e.d(s,{queryNamedTraceConfigurations:()=>d});var r=e(3825),a=e(54994),o=e(35143),n=e(42553),i=e(46053),c=(e(81806),e(76460),e(47249),e(85842)),l=e(99666);let g=class extends n.oY{constructor(t){super(t),this.namedTraceConfigurations=[]}};(0,o._)([(0,i.MZ)({type:[l.A],json:{read:{source:"traceConfigurations"},write:{target:"traceConfigurations"}}})],g.prototype,"namedTraceConfigurations",void 0),g=(0,o._)([(0,c.$)("esri.rest.networks.support.QueryNamedTraceConfigurationsResult")],g);const u=g;async function d(t,s,e){const o=(0,a.Dl)(t),n=s.toJSON();s.globalIds&&s.globalIds.length>0&&(n.globalIds=JSON.stringify(s.globalIds)),s.creators&&s.creators.length>0&&(n.creators=JSON.stringify(s.creators)),s.tags&&s.tags.length>0&&(n.tags=JSON.stringify(s.tags)),s.names&&s.names.length>0&&(n.names=JSON.stringify(s.names));const i={...n,f:"json"},c=(0,a.lF)({...o.query,...i}),l=(0,a.jV)(c,{...e,method:"post"}),g="".concat(o.path,"/traceConfigurations/query"),{data:d}=await(0,r.A)(g,l);return u.fromJSON(d)}}}]);
//# sourceMappingURL=8341.2007eb3c.chunk.js.map