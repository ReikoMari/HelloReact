"use strict";(self.webpackChunkhelloworld=self.webpackChunkhelloworld||[]).push([[44582],{61979:(e,t,i)=>{i.d(t,{$9:()=>y,Jz:()=>p,Mk:()=>m,Zk:()=>c,dP:()=>u,gz:()=>f,w6:()=>M});var r=i(35143),o=i(54099),s=i(53084),n=i(50346),l=(i(76460),i(81806),i(50076),i(85842)),d=i(35298);const a=new o.A.EventEmitter;function p(e){return a.on("apply-edits",new WeakRef(e))}function u(e){return a.on("update-moment",new WeakRef(e))}function c(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const o=(0,n.Tw)();return r=null==t||r,a.emit("apply-edits",{serviceUrl:e,layerId:t,gdbVersion:i,mayReceiveServiceEdits:r,result:o.promise}),o}function y(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0;a.emit("update-moment",{serviceUrl:e,layerId:t,gdbVersion:i,moment:r})}const h="esri.layers.mixins.EditBusLayer",v=Symbol(h);function m(e){return null!=e&&"object"==typeof e&&v in e}function g(e){return null!=e&&"object"==typeof e&&"gdbVersion"in e}function f(e,t,i){const r=new URL(e).host,o=d.Z3.get(r),s=e=>!e||e===o;return s(t)&&s(i)||t===i}const M=e=>{var t;let i=class extends e{constructor(){super(...arguments),this[t]=!0,this._applyEditsHandler=e=>{const{serviceUrl:t,layerId:i,gdbVersion:r,mayReceiveServiceEdits:o,result:n}=e,l=t===this.url,a=null!=i&&null!=this.layerId&&i===this.layerId,p=g(this),u=g(this)&&f(t,r,this.gdbVersion);if(!l||p&&!u||!a&&!o)return;const c=n.then((e=>{var t;if(a&&(e.addedFeatures.length||e.updatedFeatures.length||e.deletedFeatures.length||e.addedAttachments.length||e.updatedAttachments.length||e.deletedAttachments.length))return this.emit("edits",(0,s.o8)(e)),e;const i=null===(t=e.editedFeatures)||void 0===t?void 0:t.find((e=>{let{layerId:t}=e;return t===this.layerId}));if(i){const{adds:t,updates:r,deletes:o}=i.editedFeatures,n={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:t?t.map((e=>{let{attributes:t}=e;return{objectId:this.objectIdField&&t[this.objectIdField],globalId:this.globalIdField&&t[this.globalIdField]}})):[],deletedFeatures:o?o.map((e=>{let{attributes:t}=e;return{objectId:this.objectIdField&&t[this.objectIdField],globalId:this.globalIdField&&t[this.globalIdField]}})):[],updatedFeatures:r?r.map((e=>{let{current:{attributes:t}}=e;return{objectId:this.objectIdField&&t[this.objectIdField],globalId:this.globalIdField&&t[this.globalIdField]}})):[],editedFeatures:(0,s.o8)(e.editedFeatures),exceededTransferLimit:!1,historicMoment:(0,s.o8)(e.historicMoment)};return this.emit("edits",n),n}return{edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:[],deletedFeatures:[],updatedFeatures:[],editedFeatures:(0,s.o8)(e.editedFeatures),exceededTransferLimit:!1,historicMoment:(0,s.o8)(e.historicMoment)}})).then((e=>("historicMoment"in this&&this.historicMoment!==e.historicMoment&&(0,d.w5)(t,r)&&(this.historicMoment=e.historicMoment),e)));this.emit("apply-edits",{result:c})},this._updateMomentHandler=e=>{const{serviceUrl:t,gdbVersion:i,moment:r}=e,o=t===this.url,s=g(this),n=g(this)&&f(t,i,this.gdbVersion),l=g(this)&&!f(t,this.gdbVersion,null);o&&s&&n&&l&&"historicMoment"in this&&this.historicMoment!==r&&(this.historicMoment=r)},this.when().then((()=>{this.addHandles(p(this._applyEditsHandler)),"historicMoment"in this&&this.addHandles(u(this._updateMomentHandler))}),(()=>{}))}};return t=v,i=(0,r._)([(0,l.$)(h)],i),i}},42040:(e,t,i)=>{i.d(t,{j:()=>U});var r=i(35143),o=i(19276),s=i(53084),n=i(76460),l=i(46053),d=(i(81806),i(28379)),a=i(85842),p=i(17707),u=i(80979),c=i(76797),y=i(91605),h=i(13312),v=i(13096),m=i(95363),g=i(69098),f=i(42553),M=(i(47249),i(67478));let F=class extends((0,g.O)(f.oY)){constructor(e){super(e),this.creatorField=null,this.creationDateField=null,this.editorField=null,this.editDateField=null,this.realm=null,this.timeZone=null}};(0,r._)([(0,l.MZ)()],F.prototype,"creatorField",void 0),(0,r._)([(0,l.MZ)()],F.prototype,"creationDateField",void 0),(0,r._)([(0,l.MZ)()],F.prototype,"editorField",void 0),(0,r._)([(0,l.MZ)()],F.prototype,"editDateField",void 0),(0,r._)([(0,l.MZ)()],F.prototype,"realm",void 0),(0,r._)([(0,l.MZ)((0,M.P6)("dateFieldsTimeReference",!0))],F.prototype,"timeZone",void 0),F=(0,r._)([(0,a.$)("esri.layers.support.EditFieldsInfo")],F);const I=F;let _=class extends((0,g.O)(f.oY)){constructor(e){super(e)}};(0,r._)([(0,l.MZ)({constructOnly:!0,json:{write:!0}})],_.prototype,"name",void 0),(0,r._)([(0,l.MZ)({constructOnly:!0,json:{write:!0}})],_.prototype,"fields",void 0),(0,r._)([(0,l.MZ)({constructOnly:!0,json:{write:!0}})],_.prototype,"isAscending",void 0),(0,r._)([(0,l.MZ)({constructOnly:!0,json:{write:!0}})],_.prototype,"indexType",void 0),(0,r._)([(0,l.MZ)({constructOnly:!0,json:{write:!0}})],_.prototype,"isUnique",void 0),(0,r._)([(0,l.MZ)({constructOnly:!0,json:{write:!0}})],_.prototype,"description",void 0),_=(0,r._)([(0,a.$)("esri.layers.support.FeatureIndex")],_);var b=i(91447),Z=i(31633);let w=class extends((0,g.O)(f.oY)){constructor(e){super(e),this.shapeAreaField=null,this.shapeLengthField=null,this.units=null}};(0,r._)([(0,l.MZ)({type:String,json:{read:{source:"shapeAreaFieldName"}}})],w.prototype,"shapeAreaField",void 0),(0,r._)([(0,l.MZ)({type:String,json:{read:{source:"shapeLengthFieldName"}}})],w.prototype,"shapeLengthField",void 0),(0,r._)([(0,l.MZ)({type:String,json:{read:e=>Z.dk.read(e)||Z.Sk.read(e)}})],w.prototype,"units",void 0),w=(0,r._)([(0,a.$)("esri.layers.support.GeometryFieldsInfo")],w);const S=w;var j=i(5618),O=i(45802);const x=new O.J({esriRelCardinalityOneToOne:"one-to-one",esriRelCardinalityOneToMany:"one-to-many",esriRelCardinalityManyToMany:"many-to-many"}),E=new O.J({esriRelRoleOrigin:"origin",esriRelRoleDestination:"destination"});let T=class extends((0,g.O)(f.oY)){constructor(e){super(e),this.cardinality=null,this.composite=null,this.id=null,this.keyField=null,this.keyFieldInRelationshipTable=null,this.name=null,this.relatedTableId=null,this.relationshipTableId=null,this.role=null}};(0,r._)([(0,l.MZ)({json:{read:x.read,write:x.write}})],T.prototype,"cardinality",void 0),(0,r._)([(0,l.MZ)({json:{read:!0,write:!0}})],T.prototype,"composite",void 0),(0,r._)([(0,l.MZ)({json:{read:!0,write:!0}})],T.prototype,"id",void 0),(0,r._)([(0,l.MZ)({json:{read:!0,write:!0}})],T.prototype,"keyField",void 0),(0,r._)([(0,l.MZ)({json:{read:!0,write:!0}})],T.prototype,"keyFieldInRelationshipTable",void 0),(0,r._)([(0,l.MZ)({json:{read:!0,write:!0}})],T.prototype,"name",void 0),(0,r._)([(0,l.MZ)({json:{read:!0,write:!0}})],T.prototype,"relatedTableId",void 0),(0,r._)([(0,l.MZ)({json:{read:!0,write:!0}})],T.prototype,"relationshipTableId",void 0),(0,r._)([(0,l.MZ)({json:{read:E.read,write:E.write}})],T.prototype,"role",void 0),T=(0,r._)([(0,a.$)("esri.layers.support.Relationship")],T);const A=T;var D=i(43505),R=i(17305);const U=e=>{let t=class extends e{constructor(){super(...arguments),this.copyright=null,this.capabilities=null,this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.definitionExpression=null,this.displayField=null,this.editFieldsInfo=null,this.editingInfo=null,this.elevationInfo=null,this.floorInfo=null,this.fullExtent=null,this.gdbVersion=null,this.geometryFieldsInfo=null,this.geometryType=null,this.globalIdField=null,this.hasM=void 0,this.hasZ=void 0,this.heightModelInfo=null,this.historicMoment=null,this.indexes=new(o.A.ofType(_)),this.isTable=!1,this.layerId=void 0,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.preferredTimeZone=null,this.relationships=null,this.returnM=void 0,this.returnZ=void 0,this.serviceDefinitionExpression=null,this.serviceItemId=null,this.sourceJSON=null,this.spatialReference=h.A.WGS84,this.subtypeField=null,this.subtypes=null,this.trackIdField=null,this.version=void 0}get authenticationTriggerEvent(){if(!this.url)return null;const{capabilities:e}=this;if(e){const{query:t,operations:i,editing:r}=e;if(!t.supportsQueryByOthers||!t.supportsQueryByAnonymous)return"load";if(i.supportsEditing&&!(r.supportsUpdateByOthers&&r.supportsUpdateByAnonymous&&r.supportsDeleteByOthers&&r.supportsDeleteByAnonymous))return"load"}if(this.userHasUpdateItemPrivileges){if((0,b.tG)(this))return"load";if(this.hasUpdateItemRestrictions)return e.operations.supportsQuery?"editing":"load"}if(this.userHasFullEditingPrivileges&&this.hasFullEditingRestrictions)return"editing";const t=this.editFieldsInfo;return(null!==t&&void 0!==t&&t.creatorField||null!==t&&void 0!==t&&t.editorField)&&null!==e&&void 0!==e&&e.operations.supportsEditing?"editing":null}readCapabilitiesFromService(e,t){return(0,D.S)(t,this.url)}readEditingInfo(e,t){const{editingInfo:i}=t;return i?{lastEditDate:null!=i.lastEditDate?new Date(i.lastEditDate):null}:null}get effectiveCapabilities(){var e;const t=this.capabilities;if(!t)return null;const i=(0,s.o8)(t),{operations:r,editing:o}=i;return null!==(e=this.sourceJSON)&&void 0!==e&&e.isMultiServicesView?(this.userHasUpdateItemPrivileges&&(r.supportsQuery=!0),i):this.userHasUpdateItemPrivileges?(r.supportsAdd=r.supportsDelete=r.supportsEditing=r.supportsQuery=r.supportsUpdate=o.supportsDeleteByOthers=o.supportsGeometryUpdate=o.supportsUpdateByOthers=!0,i):(this.userHasFullEditingPrivileges&&r.supportsEditing&&(r.supportsAdd=r.supportsDelete=r.supportsUpdate=o.supportsGeometryUpdate=!0),i)}readGlobalIdFieldFromService(e,t){return(0,b.jD)(t)}get hasFullEditingRestrictions(){var e;const t=this.capabilities;if(!t||null!==(e=this.sourceJSON)&&void 0!==e&&e.isMultiServicesView)return!1;const{operations:i,editing:r}=t;return i.supportsEditing&&!(i.supportsAdd&&i.supportsDelete&&i.supportsUpdate&&r.supportsGeometryUpdate)}get hasUpdateItemRestrictions(){var e;const t=this.capabilities;if(!t)return!1;const{operations:i,editing:r}=t;return null!==(e=this.sourceJSON)&&void 0!==e&&e.isMultiServicesView?!i.supportsQuery:!(i.supportsAdd&&i.supportsDelete&&i.supportsEditing&&i.supportsQuery&&i.supportsUpdate&&r.supportsDeleteByOthers&&r.supportsGeometryUpdate&&r.supportsUpdateByOthers)}readIsTableFromService(e,t){return"Table"===t.type}readMaxScale(e,t){return t.effectiveMaxScale||e||0}readMinScale(e,t){return t.effectiveMinScale||e||0}readObjectIdFieldFromService(e,t){return(0,b.Zm)(t)}readServiceDefinitionExpression(e,t){return t.definitionQuery||t.definitionExpression}set url(e){const t=(0,v.HZ)({layer:this,url:e,nonStandardUrlAllowed:!0,logger:n.A.getLogger(this)});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,i,r){(0,v.LS)(this,e,null,t,r)}readVersion(e,t){return(0,b.$4)(t)}};return(0,r._)([(0,l.MZ)({readOnly:!0})],t.prototype,"authenticationTriggerEvent",null),(0,r._)([(0,l.MZ)({type:String,json:{origins:{service:{read:{source:"copyrightText"}}}}})],t.prototype,"copyright",void 0),(0,r._)([(0,l.MZ)({readOnly:!0,json:{read:!1,origins:{service:{read:{source:["advancedQueryCapabilities","allowGeometryUpdates","allowUpdateWithoutMValues","archivingInfo","capabilities","datesInUnknownTimezone","hasAttachments","hasM","hasZ","maxRecordCount","maxRecordCountFactor","ownershipBasedAccessControlForFeatures","standardMaxRecordCount","supportedQueryFormats","supportsAdvancedQueries","supportsApplyEditsWithGlobalIds","supportsAttachmentsByUploadId","supportsAttachmentsResizing","supportsCalculate","supportsCoordinatesQuantization","supportsExceedsLimitStatistics","supportsFieldDescriptionProperty","supportsQuantizationEditMode","supportsRollbackOnFailureParameter","supportsStatistics","supportsTruncate","supportsValidateSql","tileMaxRecordCount","useStandardizedQueries"]}}}}})],t.prototype,"capabilities",void 0),(0,r._)([(0,d.w)("service","capabilities")],t.prototype,"readCapabilitiesFromService",null),(0,r._)([(0,l.MZ)((0,M.P6)("dateFieldsTimeReference"))],t.prototype,"dateFieldsTimeZone",void 0),(0,r._)([(0,l.MZ)({type:Boolean})],t.prototype,"datesInUnknownTimezone",void 0),(0,r._)([(0,l.MZ)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],t.prototype,"definitionExpression",void 0),(0,r._)([(0,l.MZ)({type:String,json:{origins:{service:{read:{source:"displayField"}}}}})],t.prototype,"displayField",void 0),(0,r._)([(0,l.MZ)({readOnly:!0,type:I})],t.prototype,"editFieldsInfo",void 0),(0,r._)([(0,l.MZ)({readOnly:!0})],t.prototype,"editingInfo",void 0),(0,r._)([(0,d.w)("editingInfo")],t.prototype,"readEditingInfo",null),(0,r._)([(0,l.MZ)({readOnly:!0})],t.prototype,"effectiveCapabilities",null),(0,r._)([(0,l.MZ)((()=>{const e=(0,s.o8)(m.Yj),t=e.json.origins;return t["web-map"]={read:!1,write:!1},t["portal-item"]={read:!1,write:!1},e})())],t.prototype,"elevationInfo",void 0),(0,r._)([(0,l.MZ)({type:j.A,json:{name:"layerDefinition.floorInfo",write:!0,origins:{"web-scene":{name:"layerDefinition.floorInfo",write:{enabled:!0,layerContainerTypes:u.K}}}}})],t.prototype,"floorInfo",void 0),(0,r._)([(0,l.MZ)({type:c.A,json:{origins:{service:{read:{source:"extent"}}}}})],t.prototype,"fullExtent",void 0),(0,r._)([(0,l.MZ)()],t.prototype,"gdbVersion",void 0),(0,r._)([(0,l.MZ)({readOnly:!0,type:S,json:{read:{source:"geometryProperties"}}})],t.prototype,"geometryFieldsInfo",void 0),(0,r._)([(0,l.MZ)({type:["point","polygon","polyline","multipoint","multipatch","mesh"],json:{origins:{service:{read:b.iX.read}}}})],t.prototype,"geometryType",void 0),(0,r._)([(0,l.MZ)({type:String})],t.prototype,"globalIdField",void 0),(0,r._)([(0,d.w)("service","globalIdField",["globalIdField","fields"])],t.prototype,"readGlobalIdFieldFromService",null),(0,r._)([(0,l.MZ)({readOnly:!0})],t.prototype,"hasFullEditingRestrictions",null),(0,r._)([(0,l.MZ)({type:Boolean,json:{origins:{service:{read:!0}}}})],t.prototype,"hasM",void 0),(0,r._)([(0,l.MZ)({readOnly:!0})],t.prototype,"hasUpdateItemRestrictions",null),(0,r._)([(0,l.MZ)({type:Boolean,json:{origins:{service:{read:!0}}}})],t.prototype,"hasZ",void 0),(0,r._)([(0,l.MZ)({readOnly:!0,type:y.A})],t.prototype,"heightModelInfo",void 0),(0,r._)([(0,l.MZ)({type:Date})],t.prototype,"historicMoment",void 0),(0,r._)([(0,l.MZ)({type:o.A.ofType(_),readOnly:!0})],t.prototype,"indexes",void 0),(0,r._)([(0,l.MZ)({readOnly:!0})],t.prototype,"isTable",void 0),(0,r._)([(0,d.w)("service","isTable",["type"])],t.prototype,"readIsTableFromService",null),(0,r._)([(0,l.MZ)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{read:!1,write:{target:"id"}}},read:!1}})],t.prototype,"layerId",void 0),(0,r._)([(0,l.MZ)(m.hG)],t.prototype,"maxScale",void 0),(0,r._)([(0,d.w)("service","maxScale",["maxScale","effectiveMaxScale"])],t.prototype,"readMaxScale",null),(0,r._)([(0,l.MZ)(m.hn)],t.prototype,"minScale",void 0),(0,r._)([(0,d.w)("service","minScale",["minScale","effectiveMinScale"])],t.prototype,"readMinScale",null),(0,r._)([(0,l.MZ)({type:String})],t.prototype,"objectIdField",void 0),(0,r._)([(0,d.w)("service","objectIdField",["objectIdField","fields"])],t.prototype,"readObjectIdFieldFromService",null),(0,r._)([(0,l.MZ)((0,M.P6)("preferredTimeReference"))],t.prototype,"preferredTimeZone",void 0),(0,r._)([(0,l.MZ)({type:[A],readOnly:!0})],t.prototype,"relationships",void 0),(0,r._)([(0,l.MZ)({type:Boolean})],t.prototype,"returnM",void 0),(0,r._)([(0,l.MZ)({type:Boolean})],t.prototype,"returnZ",void 0),(0,r._)([(0,l.MZ)({readOnly:!0,json:{write:!1}})],t.prototype,"serverGens",void 0),(0,r._)([(0,l.MZ)({readOnly:!0})],t.prototype,"serviceDefinitionExpression",void 0),(0,r._)([(0,d.w)("service","serviceDefinitionExpression",["definitionQuery","definitionExpression"])],t.prototype,"readServiceDefinitionExpression",null),(0,r._)([(0,l.MZ)({type:String,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],t.prototype,"serviceItemId",void 0),(0,r._)([(0,l.MZ)()],t.prototype,"sourceJSON",void 0),(0,r._)([(0,l.MZ)({type:h.A,json:{origins:{service:{read:{source:"extent.spatialReference"}}}}})],t.prototype,"spatialReference",void 0),(0,r._)([(0,l.MZ)({type:String,readOnly:!0,json:{origins:{service:{read:!0}}}})],t.prototype,"subtypeField",void 0),(0,r._)([(0,l.MZ)({type:[R.A],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],t.prototype,"subtypes",void 0),(0,r._)([(0,l.MZ)({type:String,json:{read:{source:"timeInfo.trackIdField"}}})],t.prototype,"trackIdField",void 0),(0,r._)([(0,l.MZ)(m.OZ)],t.prototype,"url",null),(0,r._)([(0,p.K)("url")],t.prototype,"writeUrl",null),(0,r._)([(0,l.MZ)({json:{origins:{service:{read:!0}},read:!1}})],t.prototype,"version",void 0),(0,r._)([(0,d.w)("service","version",["currentVersion","capabilities","drawingInfo","hasAttachments","htmlPopupType","relationships","timeInfo","typeIdField","types"])],t.prototype,"readVersion",null),t=(0,r._)([(0,a.$)("esri.layers.mixins.FeatureLayerBase")],t),t}},17305:(e,t,i)=>{i.d(t,{A:()=>c});var r=i(35143),o=i(69098),s=i(42553),n=i(46053),l=(i(81806),i(76460),i(47249),i(28379)),d=i(85842),a=i(17707),p=i(76866);let u=class extends((0,o.O)(s.oY)){constructor(e){super(e),this.code=null,this.defaultValues={},this.domains=null,this.name=null}readDomains(e){if(!e)return null;const t={};for(const i of Object.keys(e))t[i]=(0,p.rS)(e[i]);return t}writeDomains(e,t){if(!e)return;const i={};for(const o of Object.keys(e)){var r;e[o]&&(i[o]=null===(r=e[o])||void 0===r?void 0:r.toJSON())}t.domains=i}};(0,r._)([(0,n.MZ)({type:Number,json:{write:!0}})],u.prototype,"code",void 0),(0,r._)([(0,n.MZ)({type:Object,json:{write:!0}})],u.prototype,"defaultValues",void 0),(0,r._)([(0,n.MZ)({json:{write:!0}})],u.prototype,"domains",void 0),(0,r._)([(0,l.w)("domains")],u.prototype,"readDomains",null),(0,r._)([(0,a.K)("domains")],u.prototype,"writeDomains",null),(0,r._)([(0,n.MZ)({type:String,json:{write:!0}})],u.prototype,"name",void 0),u=(0,r._)([(0,d.$)("esri.layers.support.Subtype")],u);const c=u},35298:(e,t,i)=>{i.d(t,{CD:()=>l,DC:()=>n,TA:()=>o,We:()=>d,Z3:()=>s,ZJ:()=>a,w5:()=>p});var r=i(3825);const o=(0,i(49723).vD)(),s=new Map,n=new Map,l=new Map;async function d(e,t,i){if(!e||!i)return!1;if(!t)return!0;const o=new URL(e).host;let n=s.get(o);if(!n){const t=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,"");n=(await(0,r.A)(t,{responseType:"json",query:{f:"json"}})).data.defaultVersionName}return n===t}async function a(e,t){var r;let s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||!t)return!0;const l=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),d=null===(r=n.get(l))||void 0===r?void 0:r.entries();if(d)for(const[n,p]of d)if(p.name===t){var a;const e=!(null!==(a=p.stack)&&void 0!==a&&a.hasForwardEdits());if(!e&&s){const[{deleteForwardEdits:e},{default:t}]=await Promise.all([i.e(56868).then(i.bind(i,56868)),i.e(37028).then(i.bind(i,37028))]);return e(l,n,new t({sessionId:o,moment:p.moment}))}return e}return!0}function p(e,t){var i;if(!e)return!1;const r=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),o=null===(i=n.get(r))||void 0===i?void 0:i.entries();if(o)for(const[s,n]of o)if(n.name===t)return"edit"===n.lockType;return!1}}}]);
//# sourceMappingURL=44582.8bb1356d.chunk.js.map