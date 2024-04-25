"use strict";(self.webpackChunkhelloworld=self.webpackChunkhelloworld||[]).push([[50709],{50709:(e,t,r)=>{r.r(t),r.d(t,{default:()=>V});var s=r(35143),i=(r(35238),r(16868)),o=(r(63844),r(14873),r(47662),r(72690),r(86946),r(71832),r(5766),r(35039),r(86616),r(31382)),n=r(77717),l=r(50346),a=r(90534),u=r(46053),p=r(81806),d=r(76460),c=(r(47249),r(85842)),h=r(31608),y=r(25515),f=r(50076),m=r(49304),v=r(16783),g=r(40296),w=r(77725),_=r(76797),b=r(65215);let x=class extends m.A{constructor(){super(...arguments),this.type="geojson",this.refresh=(0,l.sg)((async e=>{await this.load();const{extent:t,timeExtent:r}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}))}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;null!==(e=this._connection)&&void 0!==e&&e.close(),this._connection=null}applyEdits(e){return this.load().then((()=>this._applyEdits(e)))}openPorts(){return this.load().then((()=>this._connection.openPorts()))}queryFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))).then((e=>w.A.fromJSON(e)))}queryFeaturesJSON(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)))}queryFeatureCount(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:_.A.fromJSON(e.extent)})))}querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}_applyEdits(e){if(!this._connection)throw new f.A("geojson-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField,r=[],s=[],i=[];if(e.addFeatures)for(const o of e.addFeatures)r.push(this._serializeFeature(o));if(e.deleteFeatures)for(const o of e.deleteFeatures)"objectId"in o&&null!=o.objectId?s.push(o.objectId):"attributes"in o&&null!=o.attributes[t]&&s.push(o.attributes[t]);if(e.updateFeatures)for(const o of e.updateFeatures)i.push(this._serializeFeature(o));return this._connection.invoke("applyEdits",{adds:r,updates:i,deletes:s}).then((e=>{let{extent:t,timeExtent:r,featureEditResults:s}=e;return this.sourceJSON.extent=t,r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),this._createEditsResult(s)}))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new f.A("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e);return r?{geometry:r.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return null==t?null:"mesh"===t.type||"extent"===t.type?b.A.fromExtent(t.extent):t}async _startWorker(e){var t;this._connection=await(0,v.ho)("GeoJSONSourceWorker",{strategy:(0,p.A)("feature-layers-workers")?"dedicated":"local",signal:e,registryTarget:this});const{fields:r,spatialReference:s,hasZ:i,geometryType:o,objectIdField:n,url:l,timeInfo:a,customParameters:u}=this.layer,c="defaults"===this.layer.originOf("spatialReference"),y={url:l,customParameters:u,fields:r&&r.map((e=>e.toJSON())),geometryType:h.g.toJSON(o),hasZ:i,objectIdField:n,timeInfo:a?a.toJSON():null,spatialReference:c?null:s&&s.toJSON()},f=await this._connection.invoke("load",y,{signal:e});for(const p of f.warnings){var m;d.A.getLogger(this.layer).warn("#load()","$".concat(p.message," (title: '").concat(this.layer.title||"no title","', id: '").concat(null!==(m=this.layer.id)&&void 0!==m?m:"no id","')"),{warning:p})}f.featureErrors.length&&d.A.getLogger(this.layer).warn("#load()","Encountered ".concat(f.featureErrors.length," validation errors while loading features. (title: '").concat(this.layer.title||"no title","', id: '").concat(null!==(t=this.layer.id)&&void 0!==t?t:"no id","')"),{errors:f.featureErrors}),this.sourceJSON=f.layerDefinition,this.capabilities=(0,g.f)(this.sourceJSON.hasZ,!0)}};(0,s._)([(0,u.MZ)()],x.prototype,"capabilities",void 0),(0,s._)([(0,u.MZ)()],x.prototype,"type",void 0),(0,s._)([(0,u.MZ)({constructOnly:!0})],x.prototype,"layer",void 0),(0,s._)([(0,u.MZ)()],x.prototype,"sourceJSON",void 0),x=(0,s._)([(0,c.$)("esri.layers.graphics.sources.GeoJSONSource")],x);var S=r(65624),E=r(31362),M=r(74440),F=r(71448),R=r(11270),Z=r(37534),O=r(94729),I=r(21617),j=r(5682),A=r(78817),N=r(95363),P=r(15427),J=r(44135),q=r(76350),C=r(53430),T=r(71401),k=r(27937),D=r(68295),Q=r(30973),L=r(67478),B=r(13312);const G=(0,q.p)();let U=class extends((0,Z.f)((0,E.d)((0,F.J)((0,M.F)((0,S.d)((0,A.e)((0,j.j)((0,I.J)((0,R.q)((0,O.A)((0,n.P)(y.A)))))))))))){constructor(e){super(e),this.copyright=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new x({layer:this}),this.spatialReference=B.A.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson"}destroy(){var e;null===(e=this.source)||void 0===e||e.destroy()}load(e){const t=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},e).catch(l.QP).then((()=>this.source.load(e))).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),(0,C.yp)(this.renderer,this.fieldsIndex),(0,C.sv)(this.timeInfo,this.fieldsIndex)}));return this.addResolvingPromise(t),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}get parsedUrl(){return this.url?(0,a.An)(this.url):null}set renderer(e){(0,C.yp)(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);const t=(0,a.An)(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async applyEdits(e,t){const{applyEdits:s}=await r.e(54610).then(r.bind(r,54610));await this.load();const i=await s(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),i}on(e,t){return super.on(e,t)}createPopupTemplate(e){return(0,Q.tn)(this,e)}createQuery(){var e;const t=new D.A,r=null===(e=this.capabilities)||void 0===e?void 0:e.data;t.returnGeometry=!0,r&&r.supportsZ&&(t.returnZ=!0),t.outFields=["*"],t.where=this.definitionExpression||"1=1";const{timeOffset:s,timeExtent:i}=this;return t.timeExtent=null!=s&&null!=i?i.offset(-s.value,s.unit):i||null,t}getFieldDomain(e,t){var r;return null===(r=this.getField(e))||void 0===r?void 0:r.domain}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(D.A.from(e)||this.createQuery(),t))).then((e=>{if(null!==e&&void 0!==e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(D.A.from(e)||this.createQuery(),t)))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(D.A.from(e)||this.createQuery(),t)))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(D.A.from(e)||this.createQuery(),t)))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return null!=t&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};(0,s._)([(0,u.MZ)({readOnly:!0,json:{read:!1,write:!1}})],U.prototype,"capabilities",null),(0,s._)([(0,u.MZ)({type:String})],U.prototype,"copyright",void 0),(0,s._)([(0,u.MZ)({readOnly:!0})],U.prototype,"createQueryVersion",null),(0,s._)([(0,u.MZ)((0,L.P6)("dateFieldsTimeReference"))],U.prototype,"dateFieldsTimeZone",void 0),(0,s._)([(0,u.MZ)({readOnly:!0})],U.prototype,"defaultPopupTemplate",null),(0,s._)([(0,u.MZ)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],U.prototype,"definitionExpression",void 0),(0,s._)([(0,u.MZ)({type:String})],U.prototype,"displayField",void 0),(0,s._)([(0,u.MZ)({type:Boolean})],U.prototype,"editingEnabled",void 0),(0,s._)([(0,u.MZ)(N.Yj)],U.prototype,"elevationInfo",void 0),(0,s._)([(0,u.MZ)({type:[J.A],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],U.prototype,"fields",void 0),(0,s._)([(0,u.MZ)(G.fieldsIndex)],U.prototype,"fieldsIndex",void 0),(0,s._)([(0,u.MZ)({type:_.A,json:{name:"extent"}})],U.prototype,"fullExtent",void 0),(0,s._)([(0,u.MZ)({type:["point","polygon","polyline","multipoint"],json:{read:{reader:h.g.read}}})],U.prototype,"geometryType",void 0),(0,s._)([(0,u.MZ)({type:Boolean})],U.prototype,"hasZ",void 0),(0,s._)([(0,u.MZ)(N.id)],U.prototype,"id",void 0),(0,s._)([(0,u.MZ)({type:Boolean,readOnly:!0})],U.prototype,"isTable",null),(0,s._)([(0,u.MZ)(N.kF)],U.prototype,"labelsVisible",void 0),(0,s._)([(0,u.MZ)({type:[T.A],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:k.w},write:!0}})],U.prototype,"labelingInfo",void 0),(0,s._)([(0,u.MZ)(N.fV)],U.prototype,"legendEnabled",void 0),(0,s._)([(0,u.MZ)({type:["show","hide"]})],U.prototype,"listMode",void 0),(0,s._)([(0,u.MZ)({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],U.prototype,"objectIdField",void 0),(0,s._)([(0,u.MZ)(N.ke)],U.prototype,"opacity",void 0),(0,s._)([(0,u.MZ)({type:["GeoJSON"]})],U.prototype,"operationalLayerType",void 0),(0,s._)([(0,u.MZ)({readOnly:!0})],U.prototype,"parsedUrl",null),(0,s._)([(0,u.MZ)(N.M6)],U.prototype,"popupEnabled",void 0),(0,s._)([(0,u.MZ)({type:i.A,json:{name:"popupInfo",write:!0}})],U.prototype,"popupTemplate",void 0),(0,s._)([(0,u.MZ)({types:o.H,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:o.X}}}})],U.prototype,"renderer",null),(0,s._)([(0,u.MZ)(N.PY)],U.prototype,"screenSizePerspectiveEnabled",void 0),(0,s._)([(0,u.MZ)({readOnly:!0})],U.prototype,"source",void 0),(0,s._)([(0,u.MZ)({type:B.A})],U.prototype,"spatialReference",void 0),(0,s._)([(0,u.MZ)({type:[P.A]})],U.prototype,"templates",void 0),(0,s._)([(0,u.MZ)()],U.prototype,"title",void 0),(0,s._)([(0,u.MZ)({json:{read:!1},readOnly:!0})],U.prototype,"type",void 0),(0,s._)([(0,u.MZ)(N.OZ)],U.prototype,"url",null),U=(0,s._)([(0,c.$)("esri.layers.GeoJSONLayer")],U);const V=U},8298:(e,t,r)=>{r.d(t,{F:()=>s});const s={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByAnonymous:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},40296:(e,t,r)=>{r.d(t,{F0:()=>l,Vx:()=>p,e2:()=>d,f:()=>c});var s=r(81806),i=r(53084),o=r(8298),n=r(44460);function l(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?n.Cb:"esriGeometryPolyline"===e?n.yM:n.WR}}}const a=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let u=1;function p(e,t){if((0,s.A)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let r="this.".concat(t," = null;");for(const t in e)r+="this".concat(a.test(t)?".".concat(t):'["'.concat(t,'"]')," = ").concat(JSON.stringify(e[t]),";");const s=new Function("\n      return class AttributesClass$".concat(u++," {\n        constructor() {\n          ").concat(r,";\n        }\n      }\n    "))();return()=>new s}catch(r){return()=>({[t]:null,...e})}}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,i.o8)(e)}}]}function c(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:o.F,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}},74440:(e,t,r)=>{r.d(t,{F:()=>a});var s=r(35143),i=r(46053),o=(r(81806),r(76460),r(47249),r(85842)),n=r(10252);const l={write:{allowNull:!0}},a=e=>{let t=class extends e{constructor(){super(...arguments),this.featureEffect=null}};return(0,s._)([(0,i.MZ)({type:n.A,json:{origins:{"web-map":l,"portal-item":l}}})],t.prototype,"featureEffect",void 0),t=(0,s._)([(0,o.$)("esri.layers.mixins.FeatureEffectLayer")],t),t}},37534:(e,t,r)=>{r.d(t,{f:()=>p});var s=r(35143),i=r(48611),o=r(46053),n=(r(81806),r(76460),r(47249),r(85842)),l=r(51162);function a(e,t,r){if(!e)return null;const s=e.find((e=>!!e.field));if(!s)return null;const i=new l.A;return i.read(s,r),[i]}function u(e,t,r,s){const o=e.find((e=>!!e.field));o&&(0,i.sM)(r,[o.toJSON()],t)}const p=e=>{let t=class extends e{constructor(){super(...arguments),this.orderBy=null}};return(0,s._)([(0,o.MZ)({type:[l.A],json:{origins:{"web-scene":{write:!1,read:!1}},read:{source:"layerDefinition.orderBy",reader:a},write:{target:"layerDefinition.orderBy",writer:u}}})],t.prototype,"orderBy",void 0),t=(0,s._)([(0,n.$)("esri.layers.mixins.OrderedLayer")],t),t}},10252:(e,t,r)=>{r.d(t,{A:()=>m});var s,i=r(35143),o=r(50076),n=r(42553),l=r(48611),a=r(46053),u=(r(81806),r(76460),r(47249),r(85842)),p=r(44081),d=r(8203);const c={read:{reader:p.LF},write:{writer:p.M9,overridePolicy(){return{allowNull:null!=this.excludedEffect,isRequired:null==this.excludedEffect}}}},h={read:{reader:p.LF},write:{writer:p.M9,overridePolicy(){return{allowNull:null!=this.includedEffect,isRequired:null==this.includedEffect}}}},y={name:"showExcludedLabels",default:!0};let f=s=class extends n.oY{constructor(e){super(e),this.filter=null,this.includedEffect=null,this.excludedEffect=null,this.excludedLabelsVisible=!1}write(e,t){const r=super.write(e,t);if(null!==t&&void 0!==t&&t.origin){var s;if(r.filter){var i;const e=Object.keys(r.filter);if(e.length>1||"where"!==e[0])return null!==(i=t.messages)&&void 0!==i&&i.push(new o.A("web-document-write:unsupported-feature-effect","Invalid feature effect 'filter'. A filter can only contain a 'where' property",{layer:t.layer,effect:this})),null}if("showExcludedLabels"in r)return null!==(s=t.messages)&&void 0!==s&&s.push(new o.A("web-document-write:unsupported-feature-effect","Invalid value for property 'excludedLabelsVisible' which should always be 'true'",{layer:t.layer,effect:this})),null}return r}clone(){return new s({filter:null!=this.filter?this.filter.clone():null,includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})}};(0,i._)([(0,a.MZ)({type:d.A,json:{write:{allowNull:!0,writer(e,t,r,s){const i=null===e||void 0===e?void 0:e.write({},s);i&&0!==Object.keys(i).length?(0,l.sM)(r,i,t):(0,l.sM)(r,null,t)}}}})],f.prototype,"filter",void 0),(0,i._)([(0,a.MZ)({json:{write:!0,origins:{"web-map":c,"portal-item":c}}})],f.prototype,"includedEffect",void 0),(0,i._)([(0,a.MZ)({json:{write:!0,origins:{"web-map":h,"portal-item":h}}})],f.prototype,"excludedEffect",void 0),(0,i._)([(0,a.MZ)({type:Boolean,json:{write:!0,name:"showExcludedLabels",origins:{"web-map":y,"portal-item":y}}})],f.prototype,"excludedLabelsVisible",void 0),f=s=(0,i._)([(0,u.$)("esri.layers.support.FeatureEffect")],f);const m=f},8203:(e,t,r)=>{r.d(t,{A:()=>m});var s,i=r(35143),o=r(35238),n=r(82111),l=r(45802),a=r(42553),u=r(53084),p=r(46053),d=(r(81806),r(76460),r(85842)),c=r(68295);const h=new l.J({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),y=new l.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let f=s=class extends a.oY{constructor(e){super(e),this.where=null,this.geometry=null,this.spatialRelationship="intersects",this.distance=void 0,this.objectIds=null,this.units=null,this.timeExtent=null}createQuery(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{where:t,geometry:r,spatialRelationship:s,timeExtent:i,objectIds:o,units:n,distance:l}=this;return new c.A({geometry:(0,u.o8)(r),objectIds:(0,u.o8)(o),spatialRelationship:s,timeExtent:(0,u.o8)(i),where:t,units:n,distance:l,...e})}clone(){const{where:e,geometry:t,spatialRelationship:r,timeExtent:i,objectIds:o,units:n,distance:l}=this;return new s({geometry:(0,u.o8)(t),objectIds:(0,u.o8)(o),spatialRelationship:r,timeExtent:(0,u.o8)(i),where:e,units:n,distance:l})}};(0,i._)([(0,p.MZ)({type:String,json:{write:!0}})],f.prototype,"where",void 0),(0,i._)([(0,p.MZ)({types:o.yR,json:{write:!0}})],f.prototype,"geometry",void 0),(0,i._)([(0,p.MZ)({type:h.apiValues,json:{name:"spatialRel",read:{reader:h.read},write:{allowNull:!1,writer:h.write,overridePolicy(){return{enabled:null!=this.geometry}}}}})],f.prototype,"spatialRelationship",void 0),(0,i._)([(0,p.MZ)({type:Number,json:{write:{overridePolicy(e){return{enabled:null!=e&&null!=this.geometry}}}}})],f.prototype,"distance",void 0),(0,i._)([(0,p.MZ)({type:[Number],json:{write:!0}})],f.prototype,"objectIds",void 0),(0,i._)([(0,p.MZ)({type:y.apiValues,json:{read:y.read,write:{writer:y.write,overridePolicy(e){return{enabled:null!=e&&null!=this.geometry}}}}})],f.prototype,"units",void 0),(0,i._)([(0,p.MZ)({type:n.A,json:{write:!0}})],f.prototype,"timeExtent",void 0),f=s=(0,i._)([(0,d.$)("esri.layers.support.FeatureFilter")],f);const m=f},51162:(e,t,r)=>{r.d(t,{A:()=>d});var s,i=r(35143),o=r(45802),n=r(42553),l=r(46053),a=(r(81806),r(76460),r(47249),r(85842));const u=new o.J({asc:"ascending",desc:"descending"});let p=s=class extends n.oY{constructor(e){super(e),this.field=null,this.valueExpression=null,this.order="ascending"}clone(){return new s({field:this.field,valueExpression:this.valueExpression,order:this.order})}};(0,i._)([(0,l.MZ)({type:String,json:{write:!0}})],p.prototype,"field",void 0),(0,i._)([(0,l.MZ)({type:String,json:{write:!0}})],p.prototype,"valueExpression",void 0),(0,i._)([(0,l.MZ)({type:u.apiValues,json:{read:u.read,write:u.write}})],p.prototype,"order",void 0),p=s=(0,i._)([(0,a.$)("esri.layers.support.OrderByInfo")],p);const d=p}}]);
//# sourceMappingURL=50709.10013645.chunk.js.map