"use strict";(self.webpackChunkhelloworld=self.webpackChunkhelloworld||[]).push([[28096],{96422:(t,e,i)=>{i.d(e,{K:()=>r,R:()=>n});var o=i(55171),s=i(3825);async function r(t,e,i){var r;if(!(null===o.id||void 0===o.id?void 0:o.id.findCredential(t.restUrl)))return null;if("loaded"===t.loadStatus&&""===e&&null!==(r=t.user)&&void 0!==r&&r.sourceJSON&&!1===i)return t.user.sourceJSON;const n={responseType:"json",query:{f:"json"}};if(i&&(n.query.returnUserLicenseTypeExtensions=!0),""===e){const e=await(0,s.A)(t.restUrl+"/community/self",n);if(e.data){const t=e.data;if(null!==t&&void 0!==t&&t.username)return t}return null}const a=await(0,s.A)(t.restUrl+"/community/users/"+e,n);if(a.data){const t=a.data;return t.error?null:t}return null}async function n(t,e,i){var o,s;const n=await r(t,e,!0);return null!==(o=null===n||void 0===n||null===(s=n.userLicenseTypeExtensions)||void 0===s?void 0:s.includes(i))&&void 0!==o&&o}},28096:(t,e,i)=>{i.r(e),i.d(e,{default:()=>M});var o=i(35143),s=i(46053),r=(i(81806),i(76460)),n=(i(47249),i(85842)),a=i(25329),l=i(77666),d=(i(76099),i(63582)),c=i(54761),u=(i(11265),i(91967)),h=i(19276),v=i(50076),y=i(68134),p=i(19451),g=i(31933),w=i(65308),_=i(96422),k=i(38042),E=i(63860);const m=-2147208940,x=-2147217146,N=-2147220947;let V=class extends u.A{constructor(t){super(t),this._activeOperationDidSucceed=!1,this._initialValidationsFinished=!1,this._dirtyAreasLayer=null,this._serverVersion=null,this._updatingHandles=new p.U,this._validConstructProperties=!1,this.executionError="",this.extentToValidate="current",this.loadErrors=new h.A}initialize(){const t=async()=>{this.messages||(this.messages=await(0,E.ud)("esri/widgets/UtilityNetworkValidateTopology/t9n/UtilityNetworkValidateTopology"))};t().then((()=>{this.view||(this.view=null),this.utilityNetwork||(this.utilityNetwork=null),this.addHandles([(0,y.watch)((()=>[this.view,this.utilityNetwork]),(async()=>{var t,e;const{loadErrors:i,messages:{info:{noUtilityNetwork:o,noView:s}}}=this;this._initialValidationsFinished=!1,i.removeAll(),this._validConstructProperties=!0,this._dirtyAreasLayer=null,this._serverVersion=null,"utility"!==(null===(t=this.utilityNetwork)||void 0===t?void 0:t.type)&&(this.loadErrors.push(o),r.A.getLogger(this).error(new v.A("utilityNetworkValidateTopology:missing-property",o)),this._validConstructProperties=!1),"2d"!==(null===(e=this.view)||void 0===e?void 0:e.type)&&(this.loadErrors.push(s),r.A.getLogger(this).error(new v.A("utilityNetworkValidateTopology:missing-property",s)),this._validConstructProperties=!1),this._validConstructProperties&&(this.utilityNetwork.loaded||await this.utilityNetwork.load().catch((t=>{r.A.getLogger(this).error(t),this._validConstructProperties=!1})),await this._setDirtyAreasLayer()),this._validConstructProperties&&await this._validateNetworkExtension()}),y.initial),(0,y.on)((()=>{var t;return null===(t=this.view)||void 0===t||null===(t=t.map)||void 0===t?void 0:t.layers}),"change",(async()=>{const{loadErrors:t,messages:{info:{noUtilityNetwork:e}}}=this,i=t.find((t=>t===e));this._initialValidationsFinished=!1,i||(t.removeAll(),await this._validateNetworkExtension(),await this._setDirtyAreasLayer()),this._initialValidationsFinished=!0})),(0,k.oQ)(t)])}))}destroy(){this._updatingHandles.destroy()}get state(){return this.loadErrors.length||!this._validConstructProperties?"disabled":this.executionError?"failed":this._updatingHandles.updating?"executing":this._activeOperationDidSucceed?"success":this._initialValidationsFinished?"ready":"loading"}set utilityNetwork(t){this._get("utilityNetwork")!==t&&this._set("utilityNetwork",t)}set view(t){this._get("view")!==t&&this._set("view",t)}async validateTopology(){const{messages:{info:{cannotAcquireVersionLock:t,noDirtyAreasInExtent:e}},utilityNetwork:i,view:o}=this;this.loadErrors.length||(this._activeOperationDidSucceed=!1,this._set("executionError",""),this._updatingHandles.addPromise(null===i||void 0===i?void 0:i.validateTopology({validateArea:"current"===this.extentToValidate?o.extent.clone():i.fullExtent.clone()}).then((()=>{this._activeOperationDidSucceed=!0}),(i=>{var o;let s="Error: "+i;if(i instanceof v.A&&null!==(o=i.details)&&void 0!==o&&o.raw)switch(i.details.raw.extendedCode){case m:s=e;break;case x:case N:s=t;break;default:s=i.details.message}this._set("executionError",s)}))))}async _setDirtyAreasLayer(){var t,e;const{messages:{info:{noDirtyAreasLayer:i}}}=this,o=null===(t=this.view)||void 0===t?void 0:t.map.allLayers.items.filter((t=>(0,g.yZ)(t))).find((t=>{var e,i;return(null===(e=t.parsedUrl)||void 0===e?void 0:e.path)===(null===(i=this.utilityNetwork)||void 0===i?void 0:i.networkSystemLayers.dirtyAreasLayerUrl)}));o?(this._dirtyAreasLayer=o,await this._dirtyAreasLayer.load(),this._serverVersion=null!==(e=this._dirtyAreasLayer.version)&&void 0!==e?e:0,this._validConstructProperties=!0):(this.loadErrors.push(i),r.A.getLogger(this).error(new v.A("utilityNetworkValidateTopology:missing-layer",i)),this._validConstructProperties=!1)}async _validateNetworkExtension(){var t;const{messages:{info:{noAdvancedEditingUserTypeExtension:e,noUtilityNetworkServiceUserTypeExtension:i}}}=this,o=await new w.A({url:new URL(this.utilityNetwork.layerUrl).origin+"/portal"}).load(),s=null===o||void 0===o||null===(t=o.user)||void 0===t?void 0:t.username;if(!s){const t="No portal user found.";return this.loadErrors.push(t),r.A.getLogger(this).error(new v.A("utilityNetworkValidateTopology:no-user",t)),this._validConstructProperties=!1,void(this._initialValidationsFinished=!0)}const n=Number(this._serverVersion)<=11.1?"utilityNetwork":"advediting";(0,_.R)(o,s,n).then((t=>{if(!t){const t=Number(this._serverVersion)<=11.1?i:e;this.loadErrors.push(t),r.A.getLogger(this).error(new v.A("utilityNetworkValidateTopology:no-user-type-extension",t)),this._validConstructProperties=!1}})).catch((t=>{this.loadErrors.push(Number(this._serverVersion)<=11.1?i:e),r.A.getLogger(this).error(t),this._validConstructProperties=!1})).finally((()=>{this._initialValidationsFinished=!0}))}};(0,o._)([(0,s.MZ)()],V.prototype,"_initialValidationsFinished",void 0),(0,o._)([(0,s.MZ)()],V.prototype,"_dirtyAreasLayer",void 0),(0,o._)([(0,s.MZ)()],V.prototype,"_validConstructProperties",void 0),(0,o._)([(0,s.MZ)({readOnly:!0})],V.prototype,"executionError",void 0),(0,o._)([(0,s.MZ)()],V.prototype,"extentToValidate",void 0),(0,o._)([(0,s.MZ)()],V.prototype,"loadErrors",void 0),(0,o._)([(0,s.MZ)()],V.prototype,"messages",void 0),(0,o._)([(0,s.MZ)({readOnly:!0})],V.prototype,"state",null),(0,o._)([(0,s.MZ)()],V.prototype,"utilityNetwork",null),(0,o._)([(0,s.MZ)()],V.prototype,"view",null),V=(0,o._)([(0,n.$)("esri.widgets.UtilityNetworkValidateTopology.UtilityNetworkValidateTopologyViewModel")],V);const A=V,f="esri-un-validate-topology",T={container:"".concat(f,"__container"),content:"".concat(f,"__content"),controlsContainer:"".concat(f,"__controls-container"),statusIconError:"".concat(f,"__status-icon-error"),statusIconSuccess:"".concat(f,"__status-icon-success"),statusIconContainer:"".concat(f,"__status-icon-container")};let b=class extends a.A{constructor(t,e){super(t,e),this.messages=null,this.viewModel=new A}loadDependencies(){return(0,l.W)({action:()=>Promise.all([i.e(39879),i.e(62785),i.e(48897),i.e(37918)]).then(i.bind(i,92111)),block:()=>Promise.all([i.e(39879),i.e(62785),i.e(48347),i.e(60731),i.e(48897),i.e(53794),i.e(24706),i.e(14388)]).then(i.bind(i,14388)),icon:()=>Promise.all([i.e(39879),i.e(95012)]).then(i.bind(i,95012)),notice:()=>Promise.all([i.e(39879),i.e(62785),i.e(81985)]).then(i.bind(i,81985)),option:()=>i.e(70383).then(i.bind(i,92764)),select:()=>Promise.all([i.e(39879),i.e(95203),i.e(81381)]).then(i.bind(i,81381)),tooltip:()=>Promise.all([i.e(39879),i.e(48347),i.e(73786)]).then(i.bind(i,73786))})}get extentToValidate(){return this.viewModel.extentToValidate}set extentToValidate(t){this.viewModel.extentToValidate=t}get label(){var t,e;return null!==(t=null===(e=this.messages)||void 0===e?void 0:e.label)&&void 0!==t?t:""}set label(t){this._overrideIfSome("label",t)}get utilityNetwork(){return this.viewModel.utilityNetwork}set utilityNetwork(t){this.viewModel.utilityNetwork=t}get view(){return this.viewModel.view}set view(t){this.viewModel.view=t}render(){const{viewModel:t}=this;return"disabled"===t.state?(0,c.K)("div",{class:T.container},(0,c.K)("calcite-block",{class:T.content,collapsible:!1,heading:this.label,open:!0},this._renderLoadErrorStatusIcon(),this._renderLoadErrorsNotices())):(0,c.K)("div",{class:T.container},(0,c.K)("calcite-block",{class:T.content,collapsible:!0,heading:this.label,open:!1},this._renderStatusIcon(),this._renderValidateTopologyAction(),this._renderControls()))}_extentOptionSelectChange(t){this.extentToValidate=t.target.value}_getLoadErrorMessagesAsNotices(t,e){return(0,c.K)("calcite-notice",{closable:!1,key:"error-notice-"+e,kind:"warning",open:!0,scale:"s"},(0,c.K)("div",{slot:"message"},t))}_handleValidateTopologyAction(){this.viewModel.validateTopology().catch((()=>{}))}_renderControls(){const{viewModel:t}=this;return"failed"===t.state?(0,c.K)("div",{class:T.controlsContainer},this._renderExtentOptionSelect(),this._renderStatusNotice()):this._renderExtentOptionSelect()}_renderExtentOptionSelect(){const{messages:t,viewModel:e}=this;return(0,c.K)("div",{key:"selectExtentDiv"},(0,c.K)("calcite-select",{bind:this,disabled:"loading"===e.state||"executing"===e.state,label:t.input.extentToValidate,onCalciteSelectChange:this._extentOptionSelectChange},(0,c.K)("calcite-option",{value:"current"},t.input.currentExtent),(0,c.K)("calcite-option",{value:"entire"},t.input.entireExtent)))}_renderLoadErrorsNotices(){const{viewModel:t}=this;return(0,c.K)("div",{class:T.controlsContainer,key:"loadErrorsDiv"},t.loadErrors.items.map(this._getLoadErrorMessagesAsNotices))}_renderLoadErrorStatusIcon(){return(0,c.K)("div",{class:T.statusIconContainer,key:"statusDiv",slot:"control"},(0,c.K)("calcite-icon",{class:T.statusIconError,icon:"exclamation-mark-triangle",scale:"s"}))}_renderStatusIcon(){const{messages:t,viewModel:e}=this,i="".concat(this.id,"-validation-status-action"),o="".concat(this.id,"-error-status-icon"),s="".concat(this.id,"-success-status-icon");return"executing"===e.state?(0,c.K)("div",{key:"statusDivExecuting",slot:"control"},(0,c.K)("calcite-action",{id:i,loading:!0,text:t.status.executing,textEnabled:!1}),(0,c.K)("calcite-tooltip",{referenceElement:i},(0,c.K)("span",null,t.status.executing))):"success"===e.state?(0,c.K)("div",{afterCreate:t=>{setTimeout((()=>{t.innerHTML=""}),3500)},class:T.statusIconContainer,key:"statusDivSuccess",slot:"control"},(0,c.K)("calcite-icon",{class:T.statusIconSuccess,icon:"check-circle",id:s,scale:"s"}),(0,c.K)("calcite-tooltip",{referenceElement:s},(0,c.K)("span",null,t.status.success))):"failed"===e.state?(0,c.K)("div",{class:T.statusIconContainer,key:"statusDivFailed",slot:"control"},(0,c.K)("calcite-icon",{class:T.statusIconError,icon:"exclamation-mark-triangle",id:o,scale:"s"}),(0,c.K)("calcite-tooltip",{referenceElement:o},(0,c.K)("span",null,e.executionError))):(0,c.K)("div",{class:T.statusIconContainer,key:"statusDiv",slot:"control"})}_renderStatusNotice(){const{viewModel:t}=this;return(0,c.K)("div",{key:"executionErrorDiv"},(0,c.K)("calcite-notice",{closable:!0,kind:"warning",open:!0,scale:"s"},(0,c.K)("div",{slot:"message"},t.executionError)))}_renderValidateTopologyAction(){const{messages:t,viewModel:e}=this,i="".concat(this.id,"-validation-action");return(0,c.K)("div",{key:"actionDiv",slot:"control"},(0,c.K)("calcite-action",{bind:this,disabled:"executing"===e.state,icon:"play-f",id:i,loading:"loading"===e.state,onclick:this._handleValidateTopologyAction,text:t.input.validateTopology,textEnabled:!1}),(0,c.K)("calcite-tooltip",{referenceElement:i},(0,c.K)("span",null,"loading"===e.state?t.status.loading:t.input.validateTopology)))}};(0,o._)([(0,s.MZ)()],b.prototype,"extentToValidate",null),(0,o._)([(0,s.MZ)()],b.prototype,"label",null),(0,o._)([(0,s.MZ)(),(0,d.G)("esri/widgets/UtilityNetworkValidateTopology/t9n/UtilityNetworkValidateTopology")],b.prototype,"messages",void 0),(0,o._)([(0,s.MZ)()],b.prototype,"utilityNetwork",null),(0,o._)([(0,s.MZ)()],b.prototype,"view",null),(0,o._)([(0,s.MZ)({type:A})],b.prototype,"viewModel",void 0),b=(0,o._)([(0,n.$)("esri.widgets.UtilityNetworkValidateTopology")],b);const M=b}}]);
//# sourceMappingURL=28096.8848c0d3.chunk.js.map