"use strict";(self.webpackChunkhelloworld=self.webpackChunkhelloworld||[]).push([[91739],{45755:(e,t,l)=>{l.d(t,{N:()=>i});const i={absolute:"absolute-direction",relative:"relative-direction"}},38283:(e,t,l)=>{l.d(t,{A:()=>v});var i=l(35143),n=l(19276),s=l(54099),o=l(68134),a=l(46053),r=(l(81806),l(76460),l(47249),l(85842)),d=l(13964),c=l(50912);const p="view",h="view-layers",u="map-layers",g="layer-views",y="layer-list-mode",b=n.A.ofType(d.A);let _=class extends s.A.EventedAccessor{constructor(e){super(e),this.checkPublishStatusEnabled=!1,this.listItemCreatedFunction=null,this.operationalItems=new b,this.view=null}initialize(){this.addHandles([(0,o.watch)((()=>{var e;return!0===(null===(e=this.view)||void 0===e?void 0:e.ready)}),(()=>this._viewHandles()),o.initial),(0,o.watch)((()=>[this.listItemCreatedFunction,this.checkPublishStatusEnabled]),(()=>this._recompileList()))],p)}destroy(){this.view=null,this.operationalItems.removeAll()}get state(){const{view:e}=this;return null!==e&&void 0!==e&&e.ready?"ready":e?"loading":"disabled"}get totalItems(){return this.operationalItems.flatten((e=>e.children)).length}triggerAction(e,t){e&&!e.disabled&&this.emit("trigger-action",{action:e,item:t})}moveListItem(e,t,l,i){var n;const s=null===e||void 0===e?void 0:e.layer;if(!s||"subtype-sublayer"===s.type)return;const o=null===(n=this.view)||void 0===n||null===(n=n.map)||void 0===n?void 0:n.layers,a=t?(0,c.ES)(t):o,r=l?(0,c.ES)(l):o;if(!a||!r)return;const{operationalItems:d}=this,p=(null===t||void 0===t?void 0:t.children)||d,h=(null===l||void 0===l?void 0:l.children)||d,u=r.length-i;e.parent=l||null,p.remove(e),a.remove(s),h.includes(e)||h.add(e,u),r.includes(s)||r.add(s,u),this._compileList()}_createLayerViewHandles(e){this.removeHandles(g),this._compileList(),e&&this.addHandles(e.on("change",(()=>this._compileList())),g)}_createMapLayerHandles(e){this.removeHandles(u),this._compileList(),e&&this.addHandles(e.on("change",(()=>this._compileList())),u)}_createListItem(e){const{view:t,listItemCreatedFunction:l,checkPublishStatusEnabled:i}=this;return new d.A({checkPublishStatusEnabled:i,layer:e,listItemCreatedFunction:l,view:t})}_removeAllItems(){this.operationalItems.removeAll()}_getViewableLayers(e){if(e)return e.filter((e=>"hide"!==(0,c.Qv)(e)))}_watchLayersListMode(e){this.removeHandles(y),e&&e.forEach((e=>{"listMode"in e&&this.addHandles((0,o.watch)((()=>e.listMode),(()=>this._compileList())),y)}))}_compileList(){var e;const t=null===(e=this.view)||void 0===e||null===(e=e.map)||void 0===e?void 0:e.layers;this._watchLayersListMode(t);const l=this._getViewableLayers(t);null!==l&&void 0!==l&&l.length?(this._createNewItems(l),this._removeItems(l),this._sortItems(l)):this._removeAllItems()}_createNewItems(e){const{operationalItems:t}=this;e.forEach((e=>{t.some((t=>t.layer===e))||t.add(this._createListItem(e))}))}_removeItems(e){const{operationalItems:t}=this,l=[];t.forEach((t=>{t&&e&&e.includes(t.layer)||l.push(t)})),t.removeMany(l)}_sortItems(e){const{operationalItems:t}=this;t.sort(((t,l)=>{const i=e.indexOf(t.layer),n=e.indexOf(l.layer);return i>n?-1:i<n?1:0}))}_recompileList(){this._removeAllItems(),this._compileList()}_viewHandles(){const{view:e}=this;this.removeHandles([u,g,h]),null!==e&&void 0!==e&&e.ready?this.addHandles([(0,o.watch)((()=>{var e;return null===(e=this.view)||void 0===e||null===(e=e.map)||void 0===e?void 0:e.allLayers}),(e=>this._createMapLayerHandles(e)),o.initial),(0,o.watch)((()=>{var e;return null===(e=this.view)||void 0===e?void 0:e.allLayerViews}),(e=>this._createLayerViewHandles(e)),o.initial)],h):this._removeAllItems()}};(0,i._)([(0,a.MZ)()],_.prototype,"checkPublishStatusEnabled",void 0),(0,i._)([(0,a.MZ)()],_.prototype,"listItemCreatedFunction",void 0),(0,i._)([(0,a.MZ)({type:b})],_.prototype,"operationalItems",void 0),(0,i._)([(0,a.MZ)({readOnly:!0})],_.prototype,"state",null),(0,i._)([(0,a.MZ)()],_.prototype,"totalItems",null),(0,i._)([(0,a.MZ)()],_.prototype,"view",void 0),_=(0,i._)([(0,r.$)("esri.widgets.LayerList.LayerListViewModel")],_);const v=_},71981:(e,t,l)=>{l.d(t,{m:()=>s,o:()=>r});var i=l(77666),n=(l(76099),l(54761));const s=()=>Promise.all([(0,i.W)({icon:()=>Promise.all([l.e(39879),l.e(95012)]).then(l.bind(l,95012)),label:()=>Promise.all([l.e(39879),l.e(65423)]).then(l.bind(l,65423)),switch:()=>Promise.all([l.e(39879),l.e(95203),l.e(97813)]).then(l.bind(l,97813)),tooltip:()=>Promise.all([l.e(39879),l.e(48347),l.e(73786)]).then(l.bind(l,73786))})]),o="esri-labeled-switch",a={label:"".concat(o,"__label"),labelContent:"".concat(o,"__label-content"),icon:"".concat(o,"__icon"),tooltip:"".concat(o,"__tooltip")};function r(e){let{checked:t,disabled:l,hint:i,key:s,label:o,onChange:r}=e;return(0,n.K)("calcite-label",{class:a.label,disabled:l,key:s,layout:"inline-space-between",scale:"s"},(0,n.K)("div",{class:a.labelContent,key:"label-content"},i?(0,n.K)(n.w,null,(0,n.K)("div",null,o),(0,n.K)("calcite-icon",{class:a.icon,icon:"information",id:s,scale:"s"}),(0,n.K)("calcite-tooltip",{class:a.tooltip,referenceElement:s},i)):o),(0,n.K)("calcite-switch",{checked:t,disabled:l,scale:"s",onCalciteSwitchChange:e=>r(e.target.checked)}))}},78431:(e,t,l)=>{l.d(t,{A:()=>L});var i=l(35143),n=l(18690),s=l(46053),o=(l(81806),l(76460),l(85842)),a=l(97513),r=l(45755),d=l(25329),c=l(77666),p=l(98108),h=l(71981),u=(l(76099),l(63582)),g=l(54761),y=l(91967);l(47249);let b=class extends y.A{constructor(e){super(e),this.directionModePicker=!1,this.header=!1,this.labelsToggle=!0,this.tooltipsToggle=!0}};(0,i._)([(0,s.MZ)({type:Boolean,nonNullable:!0})],b.prototype,"directionModePicker",void 0),(0,i._)([(0,s.MZ)({type:Boolean,nonNullable:!0})],b.prototype,"header",void 0),(0,i._)([(0,s.MZ)({type:Boolean,nonNullable:!0})],b.prototype,"labelsToggle",void 0),(0,i._)([(0,s.MZ)({type:Boolean,nonNullable:!0})],b.prototype,"tooltipsToggle",void 0),b=(0,i._)([(0,o.$)("esri.widgets.support.SketchTooltipControls.VisibleElements")],b);const _=b,v="esri-sketch-tooltip-controls",m={base:v,block:"".concat(v,"__block"),blockContent:"".concat(v,"__block-content"),hintIcon:"".concat(v,"__hint-icon"),radioButtonLabelWrapper:"".concat(v,"__radio-button-label-wrapper")};let w=class extends d.A{constructor(e,t){super(e,t),this.viewModel=null,this.visibleElements=new _,this.sketchOptions=new a.A,this.viewType=void 0,this._onTooltipsEnabledChange=e=>{this.sketchOptions.tooltips.enabled=e},this._onLabelsEnabledChange=e=>{this.sketchOptions.labels.enabled=e},this._onDirectionModeChange=e=>{this.sketchOptions.values.directionMode=e.target.selectedItem.value}}loadDependencies(){return Promise.all([(0,c.W)({block:()=>Promise.all([l.e(39879),l.e(62785),l.e(48347),l.e(60731),l.e(48897),l.e(53794),l.e(24706),l.e(14388)]).then(l.bind(l,14388)),label:()=>Promise.all([l.e(39879),l.e(65423)]).then(l.bind(l,65423)),icon:()=>Promise.all([l.e(39879),l.e(95012)]).then(l.bind(l,95012)),"radio-button":()=>Promise.all([l.e(39879),l.e(95203),l.e(48381)]).then(l.bind(l,48381)),"radio-button-group":()=>Promise.all([l.e(39879),l.e(66577)]).then(l.bind(l,66577))}),(0,h.m)()])}render(){const{label:e,visibleElements:t}=this,l=this._renderContent();return(0,g.K)("div",{"aria-label":e,class:this.classes(m.base,p.D.widget)},l?(0,g.K)("calcite-block",{class:m.block,heading:t.header?this.label:"",key:"content-block",open:!0},(0,g.K)("div",{class:m.blockContent,key:"content"},l)):void 0)}get label(){var e,t;return null!==(e=null===(t=this.messages)||void 0===t?void 0:t.widgetLabel)&&void 0!==e?e:""}set label(e){this._overrideIfSome("label",e)}_renderContent(){const{visibleElements:e,viewType:t}=this,l=[e.tooltipsToggle?this._renderTooltipsToggle():null,e.labelsToggle&&"2d"!==t?this._renderLabelsToggle():null,e.directionModePicker?this._renderDirectionModePicker():null].filter(n.Ru);return 0===l.length?null:l}_renderTooltipsToggle(){const{messages:e,sketchOptions:t}=this;return(0,g.K)(h.o,{checked:t.tooltips.effectiveEnabled,hint:e.tooltipsToggleHint,key:"".concat(this.id,"__tooltips"),label:e.tooltipsToggle,onChange:this._onTooltipsEnabledChange})}_renderLabelsToggle(){const{messages:e,sketchOptions:t}=this;return(0,g.K)(h.o,{checked:t.labels.enabled,hint:e.labelsToggleHint,key:"".concat(this.id,"__labels"),label:e.labelsToggle,onChange:this._onLabelsEnabledChange})}_renderDirectionModePicker(){const{messages:e,sketchOptions:t}=this,{directionMode:l}=t.values;return(0,g.K)("calcite-label",{key:"direction-mode",layout:"default",scale:"s"},e.directionModePicker,(0,g.K)("calcite-radio-button-group",{key:"radio-button-group",layout:"horizontal",name:this.id,scale:"s",value:l,onCalciteRadioButtonGroupChange:this._onDirectionModeChange},this._renderDirectionModeOption("relative",l,e.directionModeRelative),this._renderDirectionModeOption("absolute",l,e.directionModeAbsolute)))}_renderDirectionModeOption(e,t,l){return(0,g.K)("calcite-label",{key:e,layout:"inline",scale:"s"},(0,g.K)("calcite-radio-button",{checked:e===t,scale:"s",value:e}),(0,g.K)("div",{class:m.radioButtonLabelWrapper,key:"label-wrapper"},(0,g.K)("calcite-icon",{icon:r.N[e],scale:"s"}),l))}};(0,i._)([(0,s.MZ)()],w.prototype,"label",null),(0,i._)([(0,s.MZ)({type:_,nonNullable:!0})],w.prototype,"visibleElements",void 0),(0,i._)([(0,s.MZ)(),(0,u.G)("esri/widgets/support/SketchTooltipControls/t9n/SketchTooltipControls")],w.prototype,"messages",void 0),(0,i._)([(0,s.MZ)({nonNullable:!0,type:a.A})],w.prototype,"sketchOptions",void 0),(0,i._)([(0,s.MZ)({type:String})],w.prototype,"viewType",void 0),w=(0,i._)([(0,o.$)("esri.widgets.support.SketchTooltipControls")],w);const L=w},76137:(e,t,l)=>{l.d(t,{A:()=>H});var i=l(35143),n=l(18690),s=l(30726),o=l(90632),a=l(46053),r=(l(81806),l(76460),l(85842)),d=l(25329),c=l(77666),p=l(98108),h=l(71981),u=l(15062),g=(l(76099),l(63582)),y=l(54761),b=l(91967),_=l(50076),v=l(68134),m=(l(47249),l(3589)),w=l(83973),L=l(50912),M=l(19276),f=l(38283);const k=e=>S(e)||C(e),S=e=>{if(!("type"in e))return!1;switch(e.type){case"feature":case"geojson":case"csv":case"graphics":case"wfs":case"map-notes":case"oriented-imagery":case"scene":case"building-scene":case"subtype-sublayer":return!0;default:return!1}},C=e=>{const t=(0,L.oZ)(e);if(null!=t&&e.hasOwnProperty(t)&&null!=e[t])for(const l of e[t])if(k(l))return!0;return!1};var I,E=l(13964);let T=I=class extends E.A{constructor(e){super(e),this.children=new M.A,this.parent=null}get allChildrenEnabled(){var e;return null!==(e=this.children.every((e=>e.enabled)))&&void 0!==e&&e}get childLayerIds(){return this.children.map((e=>e.layer.id)).toArray()}get enabled(){return null!=this.featureSource&&this.featureSource.enabled}get featureSource(){const{layer:e,getFeatureSnappingSources:t}=this;return t().find((t=>t.layer===e))}get hasChildrenEnabled(){return this.children.some((e=>e.enabled))}_initializeChildLayers(e){if(!e)return;const t=e.filter(k);super._initializeChildLayers(t)}_makeChildren(e){return e.map((e=>(0,L.oU)(e)?new I({layer:e,parent:this,view:this.view,getFeatureSnappingSources:this.getFeatureSnappingSources}):null)).filter(n.Ru).reverse()}};(0,i._)([(0,a.MZ)()],T.prototype,"allChildrenEnabled",null),(0,i._)([(0,a.MZ)()],T.prototype,"children",void 0),(0,i._)([(0,a.MZ)()],T.prototype,"childLayerIds",null),(0,i._)([(0,a.MZ)()],T.prototype,"enabled",null),(0,i._)([(0,a.MZ)()],T.prototype,"featureSource",null),(0,i._)([(0,a.MZ)({constructOnly:!0})],T.prototype,"getFeatureSnappingSources",void 0),(0,i._)([(0,a.MZ)()],T.prototype,"hasChildrenEnabled",null),(0,i._)([(0,a.MZ)()],T.prototype,"parent",void 0),T=I=(0,i._)([(0,r.$)("esri.widgets.support.SnappingControls.SnappingListItem")],T);let Z=class extends f.A{constructor(){super(...arguments),this.featureSnappingSources=new M.A}get operationalItemsFlat(){return this.operationalItems.flatten((e=>e.children))}get selectableItems(){return this.operationalItemsFlat.filter((e=>{var t;return!(null!==(t=e.children)&&void 0!==t&&t.length)}))}_compileList(){var e;const t=null===(e=this.view)||void 0===e||null===(e=e.map)||void 0===e?void 0:e.layers;if(!t)return;const l=t.filter(k);this._watchLayersListMode(l);const i=this._getViewableLayers(l);null!==i&&void 0!==i&&i.length?(this._createNewItems(i),this._removeItems(i),this._sortItems(i)):this._removeAllItems()}_createListItem(e){return new T({layer:e,view:this.view,getFeatureSnappingSources:()=>this.featureSnappingSources})}};(0,i._)([(0,a.MZ)()],Z.prototype,"featureSnappingSources",void 0),(0,i._)([(0,a.MZ)()],Z.prototype,"operationalItems",void 0),(0,i._)([(0,a.MZ)()],Z.prototype,"operationalItemsFlat",null),(0,i._)([(0,a.MZ)()],Z.prototype,"selectableItems",null),Z=(0,i._)([(0,r.$)("esri.widgets.support.SnappingControls.SnappingLayerListViewModel")],Z);let F=class extends b.A{constructor(e){super(e),this.layerListViewModel=new Z,this.snappingOptions=new w.A,this.view=null}initialize(){this.addHandles([(0,v.watch)((()=>({viewModel:this.layerListViewModel,view:this.view})),(e=>{let{viewModel:t,view:l}=e;t.view=l}),v.initial),(0,v.watch)((()=>{var e;return{viewModel:this.layerListViewModel,sources:null===(e=this.snappingOptions)||void 0===e?void 0:e.featureSources}}),(e=>{let{viewModel:t,sources:l}=e;t.featureSnappingSources=l}),v.initial)])}get allLayersEnabled(){var e,t;return(null!==(e=null===(t=this.layerListViewModel)||void 0===t?void 0:t.selectableItems)&&void 0!==e?e:[]).every((e=>e.enabled))}get allLayersDisabled(){var e,t;return(null!==(e=null===(t=this.layerListViewModel)||void 0===t?void 0:t.selectableItems)&&void 0!==e?e:[]).every((e=>!e.enabled))}get layersEnabledCount(){var e,t;return null!==(e=null===(t=this.layerListViewModel)||void 0===t||null===(t=t.selectableItems)||void 0===t?void 0:t.filter((e=>e.enabled)).length)&&void 0!==e?e:0}get state(){return this.snappingOptions?"ready":"disabled"}toggleSnappingForLayers(e,t){null===e||void 0===e||e.forEach((e=>t?this.enableSnappingForLayer(e):this.disableSnappingForLayer(e)))}toggleSnappingForAllLayers(e){this.layerListViewModel.selectableItems.forEach((t=>{let{layer:{id:l}}=t;e?this.enableSnappingForLayer(l):this.disableSnappingForLayer(l)}))}enableSnappingForLayer(e){var t;(null!==(t=this._findSnappingSourceForLayer(e))&&void 0!==t?t:this._makeSnappingSourceForLayer(e)).enabled=!0}disableSnappingForLayer(e){const t=this._findSnappingSourceForLayer(e);t&&(t.enabled=!1)}updateEnabledFeatureSources(e){for(const t of this.snappingOptions.featureSources)(0,L.oU)(t.layer)&&(t.enabled=e.includes(t.layer.id))}_findSnappingSourceForLayer(e){return this.snappingOptions.featureSources.find((t=>t.layer.id===e))}_makeSnappingSourceForLayer(e){var t;const l=null===(t=this.layerListViewModel.operationalItemsFlat.find((t=>t.layer.id===e)))||void 0===t?void 0:t.layer;if(!l)throw new _.A("snapping-controls:layer-not-found","cannot enable snapping for layer with id ".concat(e," because no such layer was found in the view"));const i=new m.A({layer:l});return this.snappingOptions.featureSources.add(i),i}};(0,i._)([(0,a.MZ)()],F.prototype,"allLayersEnabled",null),(0,i._)([(0,a.MZ)()],F.prototype,"allLayersDisabled",null),(0,i._)([(0,a.MZ)({constructOnly:!0})],F.prototype,"layerListViewModel",void 0),(0,i._)([(0,a.MZ)()],F.prototype,"layersEnabledCount",null),(0,i._)([(0,a.MZ)({type:w.A,nonNullable:!0})],F.prototype,"snappingOptions",void 0),(0,i._)([(0,a.MZ)()],F.prototype,"state",null),(0,i._)([(0,a.MZ)()],F.prototype,"view",void 0),F=(0,i._)([(0,r.$)("esri.widgets.support.SnappingControls.SnappingControlsViewModel")],F);const A=F;var O=l(61750);const K="esri-snapping-controls",P={base:K,widgetIcon:u.T.vertexGps,container:"".concat(K,"__container"),item:"".concat(K,"__item"),toggleBlock:"".concat(K,"__toggle-block"),layerListBlock:"".concat(K,"__layer-list-block"),layerList:"".concat(K,"__layer-list"),layerListFilter:"".concat(K,"__layer-list__filter"),layerListButton:"".concat(K,"__layer-list__button"),layerListItem:"".concat(K,"__layer-list__item"),layerListGroup:"".concat(K,"__layer-list__group"),nestedContainer:"".concat(K,"__nested-container")},V="check-square-f",B="square",D="minus-square";let N=class extends d.A{constructor(e,t){super(e,t),this._defaultViewModel=null,this._layerListFilter=null,this.iconClass=P.widgetIcon,this.icon=null,this.layerListOpen=!0,this.messages=null,this.visibleElements=new O.A,this._enableSnappingSwitchChange=e=>{this.snappingOptions.enabled=e},this._featureEnabledSwitchChange=e=>{this.snappingOptions.featureEnabled=e},this._selfEnabledSwitchChange=e=>{this.snappingOptions.selfEnabled=e},this._onToggleLayersButtonClick=e=>{this.viewModel.toggleSnappingForAllLayers(!this.viewModel.allLayersEnabled),requestAnimationFrame((()=>e.target.setFocus()))};const{snappingOptions:l,view:i,viewModel:n}=e;this.viewModel=null!==n&&void 0!==n?n:this._defaultViewModel=new A({snappingOptions:l,view:i})}normalizeCtorArgs(e){const{snappingOptions:t,view:l,viewModel:i,...n}=e;return n}destroy(){this.viewModel!==this._defaultViewModel&&(this._defaultViewModel=(0,s.pR)(this._defaultViewModel))}loadDependencies(){return Promise.all([(0,c.W)({accordion:()=>l.e(69007).then(l.bind(l,69007)),"accordion-item":()=>Promise.all([l.e(39879),l.e(57815)]).then(l.bind(l,57815)),action:()=>Promise.all([l.e(39879),l.e(62785),l.e(48897),l.e(37918)]).then(l.bind(l,92111)),block:()=>Promise.all([l.e(39879),l.e(62785),l.e(48347),l.e(60731),l.e(48897),l.e(53794),l.e(24706),l.e(14388)]).then(l.bind(l,14388)),button:()=>Promise.all([l.e(39879),l.e(62785),l.e(95203),l.e(75151),l.e(11309)]).then(l.bind(l,11309)),icon:()=>Promise.all([l.e(39879),l.e(95012)]).then(l.bind(l,95012)),input:()=>Promise.all([l.e(39879),l.e(62785),l.e(95203),l.e(79545),l.e(56685)]).then(l.bind(l,29625)),list:()=>Promise.all([l.e(39879),l.e(62785),l.e(95203),l.e(13859),l.e(79545),l.e(58838)]).then(l.bind(l,58838)),"list-item":()=>Promise.all([l.e(39879),l.e(62785),l.e(48897),l.e(3732)]).then(l.bind(l,84661))}),(0,h.m)()])}get label(){var e,t;return null!==(e=null===(t=this.messages)||void 0===t?void 0:t.widgetLabel)&&void 0!==e?e:""}set label(e){this._overrideIfSome("label",e)}get snappingOptions(){return this.viewModel.snappingOptions}set snappingOptions(e){this.viewModel.snappingOptions=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}set viewModel(e){e!==this._get("viewModel")&&(null!=this._defaultViewModel&&this._defaultViewModel===e||(this._defaultViewModel=(0,s.pR)(this._defaultViewModel)),this._set("viewModel",e))}render(){const{label:e}=this;return(0,y.K)("div",{"aria-label":e,class:this.classes(P.base,p.D.widget)},(0,y.K)("div",{class:P.container},this._renderContent()))}_renderContent(){return[this._renderToggles(),this._renderLayerList()]}_renderToggles(){const{visibleElements:e}=this,t=[e.selfEnabledToggle?this._renderSelfEnabledToggle():null,e.featureEnabledToggle?this._renderFeatureEnabledToggle():null].filter(n.Ru),l=[e.enabledToggle?this._renderEnabledToggle():null,t.length>0?(0,y.K)("div",{class:P.nestedContainer},t):null].filter(n.Ru);return 0===l.length?null:(0,y.K)("calcite-block",{class:P.toggleBlock,heading:e.header?this.label:"",key:"toggle-block",open:!0},l)}_renderEnabledToggle(){const{messages:e,viewModel:t}=this,{snappingOptions:l}=t;return(0,y.K)(h.o,{checked:l.enabled,disabled:this._enabledToggleDisabled,key:"".concat(this.id,"__enabled-toggle"),label:e.enableSnapping,onChange:this._enableSnappingSwitchChange})}_renderSelfEnabledToggle(){const{messages:e,viewModel:t}=this,{snappingOptions:l}=t,i=l.enabled&&l.selfEnabled;return(0,y.K)(h.o,{checked:i,disabled:this._secondaryElementsDisabled,key:"".concat(this.id,"__self-enabled-toggle"),label:e.geometryGuides,onChange:this._selfEnabledSwitchChange})}_renderFeatureEnabledToggle(){const{messages:e,viewModel:t}=this,{snappingOptions:l}=t,i=l.enabled&&l.featureEnabled;return(0,y.K)(h.o,{checked:i,disabled:this._secondaryElementsDisabled,key:"".concat(this.id,"__feature-enabled-toggle"),label:e.featureToFeature,onChange:this._featureEnabledSwitchChange})}_renderLayerList(){if(!this.visibleElements.layerList)return null;const{messages:e,viewModel:t}=this,l=t.layerListViewModel.operationalItems.length>9?(0,y.K)("calcite-input",{class:P.layerListFilter,clearable:!0,placeholder:null===e||void 0===e?void 0:e.searchLayers,onCalciteInputInput:e=>{let{target:{value:t}}=e;this._layerListFilter=""===t?null:new RegExp(t,"i")}}):null,i=this._secondaryElementsDisabled,n=this.layerListOpen&&!i;return(0,y.K)("calcite-block",{class:P.layerListBlock,collapsible:!0,disabled:this._secondaryElementsDisabled,heading:e.snappingLayers,key:"list-block",open:n,onCalciteBlockToggle:e=>this.layerListOpen=e.target.open},l,this._renderToggleLayersButton(),(0,y.K)("calcite-list",{class:P.layerList},this._renderLayerListItemCollection(t.layerListViewModel.operationalItems,this._layerListFilter)))}_renderLayerListItemCollection(e,t){return e.map((e=>{if(!t||this._itemTitleMatchesFilter(e,t))return e.children.length>0?this._renderLayerListItemGroup(e):this._renderLayerListItem(e);const l=e.children.filter((e=>this._itemTitleMatchesFilter(e,t)));return l.length>0?this._renderLayerListItemGroup(e,l):null})).toArray().filter(n.Ru)}_renderToggleLayersButton(){if(!this.visibleElements.layerListToggleLayersButton)return null;const{viewModel:{allLayersEnabled:e},messages:t}=this,l=e?t.disableAllLayers:t.enableAllLayers;return(0,y.K)("calcite-button",{appearance:"transparent",class:P.layerListButton,label:l,name:"layer-toggle",onclick:this._onToggleLayersButtonClick,scale:"m"},l)}_renderLayerListItem(e){const{messages:{untitledLayer:t}}=this,l=e.title||t,i=e.enabled;return(0,y.K)("calcite-list-item",{class:P.layerListItem,key:"".concat(this.id,"-list-item-").concat(e.uid),label:l,onCalciteListItemSelect:()=>{this._handleLayerListItemChange({checked:!i,value:e.layer.id})}},(0,y.K)("calcite-icon",{icon:i?V:B,scale:"s",slot:"content-start"}))}_renderLayerListItemGroup(e,t){const{allChildrenEnabled:l,children:i,hasChildrenEnabled:n,title:s}=e,a=this.messages,r=s||a.untitledLayer,d=s&&""!==s?s:(0,o.c)(),c=!!t,p=null!==t&&void 0!==t?t:i,h=l?V:n?D:B,u=l?a.disableAllLayers:a.enableAllLayers;return(0,y.K)("calcite-list-item",{class:P.layerListItem,key:d},(0,y.K)("calcite-accordion",{appearance:"transparent",class:P.layerListGroup},(0,y.K)("calcite-accordion-item",{expanded:c,heading:r,key:e.uid},(0,y.K)("calcite-action",{onclick:()=>{this.viewModel.toggleSnappingForLayers(e.childLayerIds,!l)},scale:"m",slot:"actions-start",text:u,textEnabled:!1},(0,y.K)("calcite-icon",{icon:h,scale:"s"})),(0,y.K)("calcite-list",null,this._renderLayerListItemCollection(p)))))}_itemTitleMatchesFilter(e,t){return null!=t&&t.test(e.title)}async _handleLayerListItemChange(e){e.checked?this.viewModel.enableSnappingForLayer(e.value):this.viewModel.disableSnappingForLayer(e.value)}get _enabledToggleDisabled(){const e=this.snappingOptions;return e.enabledToggled||e.forceDisabled}get _secondaryElementsDisabled(){return this._enabledToggleDisabled||!this.snappingOptions.enabled}};(0,i._)([(0,a.MZ)()],N.prototype,"_defaultViewModel",void 0),(0,i._)([(0,a.MZ)()],N.prototype,"_layerListFilter",void 0),(0,i._)([(0,a.MZ)()],N.prototype,"iconClass",void 0),(0,i._)([(0,a.MZ)()],N.prototype,"icon",void 0),(0,i._)([(0,a.MZ)()],N.prototype,"label",null),(0,i._)([(0,a.MZ)({type:Boolean,nonNullable:!0})],N.prototype,"layerListOpen",void 0),(0,i._)([(0,a.MZ)(),(0,g.G)("esri/widgets/support/SnappingControls/t9n/SnappingControls")],N.prototype,"messages",void 0),(0,i._)([(0,a.MZ)()],N.prototype,"snappingOptions",null),(0,i._)([(0,a.MZ)()],N.prototype,"view",null),(0,i._)([(0,a.MZ)()],N.prototype,"viewModel",null),(0,i._)([(0,a.MZ)({type:O.A,nonNullable:!0})],N.prototype,"visibleElements",void 0),(0,i._)([(0,a.MZ)()],N.prototype,"_enabledToggleDisabled",null),(0,i._)([(0,a.MZ)()],N.prototype,"_secondaryElementsDisabled",null),N=(0,i._)([(0,r.$)("esri.widgets.support.SnappingControls")],N);const H=N},61750:(e,t,l)=>{l.d(t,{A:()=>r});var i=l(35143),n=l(91967),s=l(46053),o=(l(81806),l(76460),l(47249),l(85842));let a=class extends n.A{constructor(e){super(e),this.enabledToggle=!0,this.featureEnabledToggle=!0,this.header=!1,this.layerList=!0,this.layerListToggleLayersButton=!0,this.selfEnabledToggle=!0}};(0,i._)([(0,s.MZ)({type:Boolean,nonNullable:!0})],a.prototype,"enabledToggle",void 0),(0,i._)([(0,s.MZ)({type:Boolean,nonNullable:!0})],a.prototype,"featureEnabledToggle",void 0),(0,i._)([(0,s.MZ)({type:Boolean,nonNullable:!0})],a.prototype,"header",void 0),(0,i._)([(0,s.MZ)({type:Boolean,nonNullable:!0})],a.prototype,"layerList",void 0),(0,i._)([(0,s.MZ)({type:Boolean,nonNullable:!0})],a.prototype,"layerListToggleLayersButton",void 0),(0,i._)([(0,s.MZ)({type:Boolean,nonNullable:!0})],a.prototype,"selfEnabledToggle",void 0),a=(0,i._)([(0,o.$)("esri.widgets.support.SnappingControls.VisibleElements")],a);const r=a}}]);
//# sourceMappingURL=91739.3e89edb8.chunk.js.map