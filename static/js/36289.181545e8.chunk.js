"use strict";(self.webpackChunkhelloworld=self.webpackChunkhelloworld||[]).push([[36289],{36289:(e,r,s)=>{s.r(r),s.d(r,{alterVersion:()=>c,serverVersionCacheMap:()=>o});var n=s(3825),t=s(50076),i=s(54994),a=s(94487);const o=new Map;async function c(e,r,s,c){var l;o.has(e)||await(0,a.t)(o,e);const u=o.get(e);if((null!==(l=null===u||void 0===u?void 0:u.serverVersion)&&void 0!==l?l:0)<=11.1)throw new t.A("alterVersion:enterprise-version","versioning API requires ArcGIS Enterprise version 11.2 or higher");if(!r)throw new t.A("alterVersion:missing-guid","guid for version is missing");const v=(0,i.Dl)(e),h=s.toJSON(),d=(0,i.jV)(v.query,{query:(0,i.lF)({...h,f:"json"}),...c,authMode:"immediate",method:"post"});r.startsWith("{")&&(r=r.slice(1,-1));const p="".concat(v.path,"/versions/").concat(r,"/alter"),{data:f}=await(0,n.A)(p,d);return!!f&&f.success}},94487:(e,r,s)=>{s.d(r,{t:()=>t});var n=s(3825);async function t(e,r){let s=null;const t="string"==typeof r?r:r.path;if(!e.has(t)){const i=await(0,n.A)(t.replace(/\/VersionManagementServer/i,"/FeatureServer"),{query:{f:"json"}});s={serverVersion:Number(i.data.currentVersion),featureServerUrl:t.replace(/\/VersionManagementServer/i,"/FeatureServer")},e.set(r,s)}}}}]);
//# sourceMappingURL=36289.181545e8.chunk.js.map