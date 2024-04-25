"use strict";(self.webpackChunkhelloworld=self.webpackChunkhelloworld||[]).push([[65529],{48397:(e,t,i)=>{i.d(t,{A:()=>d});var l=i(35143),n=i(46053),u=(i(81806),i(76460),i(47249),i(85842)),o=i(31933),r=i(3320),s=i(84668);let a=class extends s.A{constructor(e){super(e),this.arcadeEditType="NA",this.editableExpressionExecutor=null}get editable(){var e;return!!this.layerAllowsEdits&&(null===(e=this.evaluatedEditableExpression)||void 0===e||e)}get evaluatedEditableExpression(){const{editableExpressionExecutor:e}=this;return null!=e?!!e.lastEvaluatedValue:null}get layerAllowsEdits(){const{layer:e}=this;if(!e)return!1;const t=(0,o.BR)(e),i=null===t||void 0===t?void 0:t.operations.supportsEditing,l=(0,r.of)(t,this.arcadeEditType);return!(!i||!l)}};(0,l._)([(0,n.MZ)()],a.prototype,"arcadeEditType",void 0),(0,l._)([(0,n.MZ)()],a.prototype,"editable",null),(0,l._)([(0,n.MZ)()],a.prototype,"editableExpressionExecutor",void 0),(0,l._)([(0,n.MZ)()],a.prototype,"evaluatedEditableExpression",null),(0,l._)([(0,n.MZ)()],a.prototype,"layerAllowsEdits",null),a=(0,l._)([(0,u.$)("esri.widgets.FeatureForm.EditableInput")],a);const d=a},65529:(e,t,i)=>{i.d(t,{A:()=>M});var l,n,u=i(35143),o=i(50076),r=i(68134),s=i(46053),a=(i(81806),i(76460),i(47249),i(85842)),d=i(92115),p=i(72599),v=(i(44631),i(32173),i(50654),i(15142)),y=i(53430),m=i(42633),h=i(9912),c=i(48397),f=i(3320),_=i(11571),g=i(20639);(n=l||(l={})).Text="text",n.Number="number",n.Date="date",n.Unsupported="unsupported";const b="__internal-type-based-coded-value-domain__";let E=class extends c.A{constructor(e){super(e),this._storedValue=null,this.error=null,this.preservesValueWhenHidden=!0,this.field=null,this.group=null,this.requiredExpressionExecutor=null,this.type="field",this._fieldInputWasVisibleDuringLifetime=!1,this.valueExpressionExecutor=null}initialize(){this.addHandles((0,r.watch)((()=>this.feature),(()=>this._fieldInputWasVisibleDuringLifetime=!1),r.sync))}get _dateFormRange(){var e,t,i,l;const{element:n,field:u}=this;if("date"!==this.dataType)return{};const o=null!==n&&void 0!==n&&n.domain?(0,v.A5)(u,n.domain):null;if(null===n||void 0===n||!n.input)return null!==o&&void 0!==o?o:{};const r=n.input,{type:s}=r;let a={};if("date-picker"!==s&&"time-picker"!==s&&"datetimeoffset-picker"!==s||(a=(0,v.nm)(u,r.max,r.min)),"datetime-picker"===s){const{max:e,min:t}=r;a={max:null!=e&&x(e)?e.getTime():null,min:null!=t&&x(t)?t.getTime():null}}const{max:d,min:p}=a;if(o){var y,m,h,c;const{max:e,min:t}=o,i=(0,_.E)(e)&&(null==d||null!=d&&e<d),l=(0,_.E)(t)&&(null==p||null!=p&&t>p);return{max:i?e:null!==d&&void 0!==d?d:null,min:l?t:null!==p&&void 0!==p?p:null,rawMax:i?o.rawMax:null!==(y=null===(m=a)||void 0===m?void 0:m.rawMax)&&void 0!==y?y:null,rawMin:l?o.rawMin:null!==(h=null===(c=a)||void 0===c?void 0:c.rawMin)&&void 0!==h?h:null}}return{min:p,max:d,rawMax:null!==(e=null===(t=a)||void 0===t?void 0:t.rawMax)&&void 0!==e?e:null,rawMin:null!==(i=null===(l=a)||void 0===l?void 0:l.rawMin)&&void 0!==i?i:null}}get _dateRange(){const{_dateFormRange:e,field:t}=this;if("date"!==this.dataType)return{};const i=(0,v.A5)(t);if(!i)return e;const{max:l,min:n,rawMax:u,rawMin:o}=e;if("date"===t.type){const{max:e,min:t}=i;return{max:(0,_.E)(l)&&(null===e||null!=e&&l<e)?l:null!==e&&void 0!==e?e:null,min:(0,_.E)(n)&&(null===t||null!=t&&n>t)?n:null!==t&&void 0!==t?t:null}}if("date-only"===t.type||"time-only"===t.type||"timestamp-offset"===t.type){const{max:e,min:t,rawMax:r,rawMin:s}=i,a=(0,_.E)(l)&&u&&(null==e||l<e);return{max:a?l:e,min:(0,_.E)(n)&&o&&(null==t||n>t)?n:t,rawMax:a?u:r,rawMin:a?o:s}}return{max:null,min:null}}get _configAllowsEdits(){var e,t;const{element:i,layer:l,name:n}=this;if(null!=i)return i.editableExpression?!!this.evaluatedEditableExpression:!1!==i.editable;if(null!==l&&void 0!==l&&l.userHasUpdateItemPrivileges)return!0;const u=l&&"popupTemplate"in l?null===l||void 0===l||null===(e=l.popupTemplate)||void 0===e||null===(e=e.fieldInfos)||void 0===e?void 0:e.find((e=>{let{fieldName:t}=e;return t===n})):null;return null===(t=null===u||void 0===u?void 0:u.isEditable)||void 0===t||t}get _layerAndFieldAllowEdits(){var e;return this.layerAllowsEdits&&(null===(e=this.field)||void 0===e?void 0:e.editable)}get _isVisibleByDefault(){const{field:e,layer:t}=this;return!(null===e||void 0===e||!e.visible)&&(0,y.Bz)(e,t)}get _isEditTrackingField(){var e;return(0,y.aQ)(this.layer).includes(null===(e=this.name)||void 0===e?void 0:e.toLowerCase())}get _shouldUseValueExpression(){return this._layerAndFieldAllowEdits&&!this._configAllowsEdits&&null!=this.valueExpressionExecutor}get _isSubtypeField(){const{layer:e}=this;if(e&&"subtypeField"in e){var t,i;const{subtypeField:l,fieldsIndex:n}=e;return(null!==(t=null===(i=n.get(l))||void 0===i?void 0:i.name)&&void 0!==t?t:l)===this.name}return!1}get test(){return{_isSubtypeField:this._isSubtypeField}}get dataType(){const{field:e}=this;return(0,y.WA)(e)?l.Number:(0,y.yM)(e)?l.Text:(0,m.fs)(e)||(0,y.OH)(e)?l.Date:l.Unsupported}get dateDataType(){if(this.dataType===l.Date)return"date"!==this.field.type?"string":"number"}get description(){const{element:e,feature:t,layer:i,timeZone:l}=this,n=null===e||void 0===e?void 0:e.description;return null!=i&&null!=n?(0,f.LZ)({label:n,attributes:t.attributes,fieldsIndex:i.fieldsIndex,timeZone:l}):n}get domain(){var e;const{layer:t}=this,{typeFieldName:i,types:l}=(0,f.CU)(t);if(this._isSubtypeField&&"subtypes"in t&&t.subtypes)return new p.A({name:b,codedValues:t.subtypes.map((e=>{let{code:t,name:i}=e;return new d.H({code:t,name:i})}))});if(i===this.name&&null==this.field.domain)return new p.A({name:b,codedValues:l.map((e=>{let{code:t,name:i}=e;return new d.H({code:t,name:i})}))});const{feature:n}=this,u=null===t||void 0===t?void 0:t.getFieldDomain(this.name,{feature:n}),o=null===(e=this.element)||void 0===e?void 0:e.domain;return null!=o&&this._isDomainCompatible(o)?o:u}get editable(){var e;return!!this._layerAndFieldAllowEdits&&(null!==(e=this.evaluatedEditableExpression)&&void 0!==e?e:this._configAllowsEdits)}get evaluatedRequiredExpression(){const{requiredExpressionExecutor:e}=this;return null!=e?!!e.lastEvaluatedValue:null}get evaluatedValueExpression(){const{valueExpressionExecutor:e}=this;return null!=e?e.lastEvaluatedValue:null}get hint(){var e;return null===(e=this.element)||void 0===e?void 0:e.hint}get includeDate(){return!(this.dataType!==l.Date||"time-only"===this.field.type)}get includeTime(){var e;const{element:t,field:i}=this;if(this.dataType!==l.Date)return!1;if("time-only"===i.type)return!0;if("date-only"===i.type)return!1;const n="datetime-picker"===(null===t||void 0===t||null===(e=t.input)||void 0===e?void 0:e.type)?t.input.includeTime:void 0;return void 0===n||n}get includeTimeOffset(){var e;if("timestamp-offset"!==this.field.type)return!1;const t=null===(e=this.element)||void 0===e?void 0:e.input;return!t||"datetimeoffset-picker"===t.type&&t.includeTimeOffset}set initialFeature(e){this._set("initialFeature",e),this.notifyChange("valid")}get inputType(){var e;return null===(e=this.element)||void 0===e||null===(e=e.input)||void 0===e?void 0:e.type}get hasInvalidSwitchValue(){const{element:e}=this,t=(0,f.HG)(e,"switch")?e.input:null;return!t||(0,f.Kn)(this.value,t)}get isRelationshipKeyField(){var e;const{field:t,layer:i}=this;return(0,h.sS)(i)&&!(null===(e=i.relationships)||void 0===e||!e.some((e=>e.keyField===t.name)))}get label(){const{element:e,feature:t,field:i,layer:l,timeZone:n}=this;return null!=l&&null!=(null===e||void 0===e?void 0:e.label)?(0,f.LZ)({label:e.label,attributes:t.attributes,fieldsIndex:l.fieldsIndex,timeZone:n}):(null===e||void 0===e?void 0:e.label)||i.alias||i.name}get maxLength(){var e;if(this.dataType===l.Date)return-1;const{field:t,element:i}=this,n=null!==(e=null===t||void 0===t?void 0:t.length)&&void 0!==e?e:-1,u=(0,f.qD)(i)?i.input.maxLength:NaN;return null!=u&&!isNaN(u)&&u>=-1&&(-1===n||u<=n)?u:n}get minLength(){var e;if(this.dataType===l.Date)return-1;const{field:t,element:i}=this,n=null!==(e=null===t||void 0===t?void 0:t.length)&&void 0!==e?e:-1,u=(0,f.qD)(i)?i.input.minLength:NaN;return null!=u&&!isNaN(u)&&u>=-1&&(-1===n||u<=n)?u:-1}get name(){var e;return null===(e=this.field)||void 0===e?void 0:e.name}get range(){var e,t;const{domain:i,element:l,field:n}=this;if("date"===this.dataType)return this._dateRange;const u=(0,v.A5)(n,i)||(0,y.km)(n,i),o=(null===u||void 0===u?void 0:u.max)===Number.MAX_VALUE?null:null!==(e=null===u||void 0===u?void 0:u.max)&&void 0!==e?e:null,r=(null===u||void 0===u?void 0:u.min)===-Number.MAX_VALUE?null:null!==(t=null===u||void 0===u?void 0:u.min)&&void 0!==t?t:null;if(null===l||void 0===l||!l.domain||"range"!==l.domain.type)return{max:o,min:r};const{max:s,min:a}=(0,v.A5)(n)||{};return{max:null!=s&&(null===o||null!=o&&s<o)?s:o,min:null!=a&&(null===r||null!=r&&a>r)?a:r}}get required(){var e;const{editable:t,evaluatedRequiredExpression:i,field:l,visible:n,_isSubtypeField:u}=this;return!!t&&(!1===(null===l||void 0===l?void 0:l.nullable)||(!!u||!(!n||!1===(null===(e=this.group)||void 0===e?void 0:e.visible)||null==i)&&i))}set required(e){this._overrideIfSome("required",e)}get showNoValueOptionEnabled(){const{element:e}=this;return!this.required&&(!(0,f.XI)(e)||e.input.showNoValueOption)}get showNoValueLabel(){const{element:e}=this;return(0,f.XI)(e)?e.input.noValueOptionLabel:null}get submittable(){const{field:e,required:t,valid:i,value:l}=this;return(!t||null!=l)&&(!!i||this.initialFeature.getAttribute(e.name)===l)}get timeResolution(){var e,t;const i=null===(e=this.element)||void 0===e?void 0:e.input;if(i&&("datetimeoffset-picker"===i.type||"time-picker"===i.type))return null!==(t=i.timeResolution)&&void 0!==t?t:"minutes"}get timeStep(){return null!=this.timeResolution?g.fl.get(this.timeResolution):void 0}get updating(){const{editableExpressionExecutor:e,valueExpressionExecutor:t,visibilityExpressionExecutor:i,preservesValueWhenHidden:l}=this;return null!=t&&t.updating||null!=e&&e.updating||!1===l&&null!=i&&i.updating}get valid(){const e=this.editable?this._validate():null;return this._set("error",e),null===e}get value(){var e,t,i;if(this._fieldInputWasVisibleDuringLifetime=this._fieldInputWasVisibleDuringLifetime||this.visible&&!1!==(null===(e=this.group)||void 0===e?void 0:e.visible),!1===this.preservesValueWhenHidden&&this._fieldInputWasVisibleDuringLifetime&&(!1===(null===(t=this.visibilityExpressionExecutor)||void 0===t?void 0:t.lastEvaluatedValue)||!1===(null===(i=this.group)||void 0===i||null===(i=i.visibilityExpressionExecutor)||void 0===i?void 0:i.lastEvaluatedValue)))return null!==this._storedValue&&this.set("_storedValue",null),null;if(this._shouldUseValueExpression){const e=this.evaluatedValueExpression;return this.dataType===l.Date?this._arcadeOutputToDateFieldValue(e):null!=e&&"object"==typeof e?e.toString():e}return this._storedValue}set value(e){this.notifyChange("evaluatedVisibilityExpression"),this.set("_storedValue",e)}get visible(){return!this._isEditTrackingField&&(null!=this.evaluatedVisibilityExpression?this.evaluatedVisibilityExpression:null!=this.element||this._isVisibleByDefault)}_arcadeOutputToDateFieldValue(e){const t=this.field.type;try{if("object"==typeof e){if(null===e)throw new o.A("feature-form:invalid-date-value");if((0,g.rX)(e))return(0,g.fD)(e,t);if("getTime"in e&&"function"==typeof e.getTime&&"date"===t)return parseInt(e.getTime(),10);if("date-only"===t||"time-only"===t||"timestamp-offset"===t)return e.toString()}else{if("string"==typeof e)return"date"===t?parseInt(e,10):e;if("number"==typeof e&&"date"===t)return e}throw new o.A("feature-form:invalid-date-value")}catch{return"date"===t?NaN:""}}_isDomainCompatible(e){const{field:t}=this;if("coded-value"===(null===e||void 0===e?void 0:e.type)){const i=typeof e.codedValues[0].code;if("string"===i&&(0,y.yM)(t)||"number"===i&&(0,y.WA)(t))return!0}return!!("range"===(null===e||void 0===e?void 0:e.type)&&(0,y.WA)(t)||(0,m.fs)(t)||(0,y.OH)(t))}_validate(){const{dataType:e,domain:t,field:i,initialFeature:l,minLength:n,range:u,required:o,valid:r,value:s}=this,a=o&&null==s,d=void 0!==r;return!a&&l.getAttribute(i.name)===s&&d?null:a?y.iM.INVALID_TYPE:"text"===e&&n>-1&&"string"==typeof s&&s.length<n?f.uW.TOO_SHORT:"date"!==e||null==s||(0,g.yk)({type:i.type,range:u,value:s})?t?null!==s||o?(0,v.wb)(i,s):null:(0,y.CJ)(i,s):y.YF.OUT_OF_RANGE}};(0,u._)([(0,s.MZ)()],E.prototype,"_dateFormRange",null),(0,u._)([(0,s.MZ)()],E.prototype,"_dateRange",null),(0,u._)([(0,s.MZ)()],E.prototype,"_storedValue",void 0),(0,u._)([(0,s.MZ)()],E.prototype,"_configAllowsEdits",null),(0,u._)([(0,s.MZ)()],E.prototype,"_layerAndFieldAllowEdits",null),(0,u._)([(0,s.MZ)()],E.prototype,"_isVisibleByDefault",null),(0,u._)([(0,s.MZ)()],E.prototype,"_isEditTrackingField",null),(0,u._)([(0,s.MZ)()],E.prototype,"_shouldUseValueExpression",null),(0,u._)([(0,s.MZ)()],E.prototype,"_isSubtypeField",null),(0,u._)([(0,s.MZ)()],E.prototype,"dataType",null),(0,u._)([(0,s.MZ)()],E.prototype,"dateDataType",null),(0,u._)([(0,s.MZ)()],E.prototype,"description",null),(0,u._)([(0,s.MZ)()],E.prototype,"domain",null),(0,u._)([(0,s.MZ)()],E.prototype,"editable",null),(0,u._)([(0,s.MZ)({readOnly:!0})],E.prototype,"error",void 0),(0,u._)([(0,s.MZ)({constructOnly:!0})],E.prototype,"preservesValueWhenHidden",void 0),(0,u._)([(0,s.MZ)()],E.prototype,"evaluatedRequiredExpression",null),(0,u._)([(0,s.MZ)()],E.prototype,"evaluatedValueExpression",null),(0,u._)([(0,s.MZ)()],E.prototype,"field",void 0),(0,u._)([(0,s.MZ)()],E.prototype,"group",void 0),(0,u._)([(0,s.MZ)({readOnly:!0})],E.prototype,"hint",null),(0,u._)([(0,s.MZ)()],E.prototype,"includeDate",null),(0,u._)([(0,s.MZ)()],E.prototype,"includeTime",null),(0,u._)([(0,s.MZ)()],E.prototype,"includeTimeOffset",null),(0,u._)([(0,s.MZ)()],E.prototype,"initialFeature",null),(0,u._)([(0,s.MZ)({readOnly:!0})],E.prototype,"inputType",null),(0,u._)([(0,s.MZ)()],E.prototype,"hasInvalidSwitchValue",null),(0,u._)([(0,s.MZ)()],E.prototype,"isRelationshipKeyField",null),(0,u._)([(0,s.MZ)()],E.prototype,"label",null),(0,u._)([(0,s.MZ)()],E.prototype,"maxLength",null),(0,u._)([(0,s.MZ)()],E.prototype,"minLength",null),(0,u._)([(0,s.MZ)({readOnly:!0})],E.prototype,"name",null),(0,u._)([(0,s.MZ)()],E.prototype,"range",null),(0,u._)([(0,s.MZ)()],E.prototype,"required",null),(0,u._)([(0,s.MZ)()],E.prototype,"requiredExpressionExecutor",void 0),(0,u._)([(0,s.MZ)()],E.prototype,"showNoValueOptionEnabled",null),(0,u._)([(0,s.MZ)()],E.prototype,"submittable",null),(0,u._)([(0,s.MZ)()],E.prototype,"timeResolution",null),(0,u._)([(0,s.MZ)()],E.prototype,"timeStep",null),(0,u._)([(0,s.MZ)({readOnly:!0})],E.prototype,"type",void 0),(0,u._)([(0,s.MZ)()],E.prototype,"updating",null),(0,u._)([(0,s.MZ)()],E.prototype,"valid",null),(0,u._)([(0,s.MZ)({value:null})],E.prototype,"value",null),(0,u._)([(0,s.MZ)()],E.prototype,"valueExpressionExecutor",void 0),(0,u._)([(0,s.MZ)()],E.prototype,"visible",null),E=(0,u._)([(0,a.$)("esri.widgets.FeatureForm.FieldInput")],E);const x=e=>e&&!Number.isNaN(e.valueOf()),M=E},84668:(e,t,i)=>{i.d(t,{A:()=>s});var l=i(35143),n=i(91967),u=i(46053),o=(i(81806),i(76460),i(47249),i(85842));let r=class extends n.A{constructor(e){super(e),this.element=null,this.feature=null,this.layer=null,this.timeZone=null,this.type=null,this.visibilityExpressionExecutor=null}get description(){var e;return null===(e=this.element)||void 0===e?void 0:e.description}get evaluatedVisibilityExpression(){const{visibilityExpressionExecutor:e}=this;return null!=e?!!e.lastEvaluatedValue:null}get label(){var e;return null===(e=this.element)||void 0===e?void 0:e.label}get visible(){return null!=this.evaluatedVisibilityExpression?this.evaluatedVisibilityExpression:null!=this.element}};(0,l._)([(0,u.MZ)({readOnly:!0})],r.prototype,"description",null),(0,l._)([(0,u.MZ)({constructOnly:!0})],r.prototype,"element",void 0),(0,l._)([(0,u.MZ)()],r.prototype,"evaluatedVisibilityExpression",null),(0,l._)([(0,u.MZ)()],r.prototype,"feature",void 0),(0,l._)([(0,u.MZ)()],r.prototype,"label",null),(0,l._)([(0,u.MZ)()],r.prototype,"layer",void 0),(0,l._)([(0,u.MZ)()],r.prototype,"timeZone",void 0),(0,l._)([(0,u.MZ)()],r.prototype,"type",void 0),(0,l._)([(0,u.MZ)()],r.prototype,"visible",null),(0,l._)([(0,u.MZ)()],r.prototype,"visibilityExpressionExecutor",void 0),r=(0,l._)([(0,o.$)("esri.widgets.FeatureForm.InputBase")],r);const s=r}}]);
//# sourceMappingURL=65529.076caf22.chunk.js.map