"use strict";(self.webpackChunkhelloworld=self.webpackChunkhelloworld||[]).push([[78519],{78519:(e,t,i)=>{i.r(t),i.d(t,{default:()=>H});var l=i(35143),o=i(68134),s=i(46053),n=(i(81806),i(76460)),a=(i(47249),i(85842)),r=i(25329),u=i(77666),d=i(98108),v=i(15062),c=(i(76099),i(63582)),p=i(12254),h=i(54761),_=i(19276);let m=class extends r.A{constructor(e,t){super(e,t),this.type=null,this.viewModel=null}};(0,l._)([(0,s.MZ)()],m.prototype,"type",void 0),(0,l._)([(0,s.MZ)()],m.prototype,"viewModel",void 0),m=(0,l._)([(0,a.$)("esri.widgets.ValuePicker.ValuePickerBaseComponent")],m);const y=m;let M=class extends y{constructor(e,t){super(e,t),this.collection=null,this.type="collection"}get canNext(){var e,t;return!(null===(e=this.collection)||void 0===e||!e.length||!this.viewModel)&&this.collection.at(-1)!==(null===(t=this.viewModel.values)||void 0===t?void 0:t[0])}get canPlay(){var e;return null!=this.viewModel&&!(null===(e=this.collection)||void 0===e||!e.length)}get canPrevious(){var e,t;return!(null===(e=this.collection)||void 0===e||!e.length||!this.viewModel)&&this.collection.at(0)!==(null===(t=this.viewModel.values)||void 0===t?void 0:t[0])}render(){return(0,h.K)("div",null)}animate(e){this._step(1,e)}next(){this._step(1)}previous(){this._step(-1)}_step(e){var t;let i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.viewModel||null===(t=this.collection)||void 0===t||!t.length)return;if(!this.viewModel.values)return void(this.viewModel.values=[this.collection.at(0)]);if(!this.collection.includes(this.viewModel.values[0]))return void(this.viewModel.values=[this.collection.at(0)]);const l=this.collection.indexOf(this.viewModel.values[0])+e;l<0||l>=this.collection.length?this.viewModel.loop||i?this.viewModel.values=[this.collection.at(1===e?0:-1)]:"playing"===this.viewModel.state&&this.viewModel.pause():this.viewModel.values=[this.collection.at(l)]}};(0,l._)([(0,s.MZ)()],M.prototype,"canNext",null),(0,l._)([(0,s.MZ)()],M.prototype,"canPlay",null),(0,l._)([(0,s.MZ)()],M.prototype,"canPrevious",null),(0,l._)([(0,s.MZ)({type:_.A})],M.prototype,"collection",void 0),(0,l._)([(0,s.MZ)()],M.prototype,"type",void 0),M=(0,l._)([(0,a.$)("esri.widgets.ValuePicker.ValuePickerCollection")],M);const b=M;let g=class extends y{constructor(e,t){super(e,t),this.items=null,this.placeholder=null,this.type="combobox"}loadDependencies(){return(0,u.W)({combobox:()=>Promise.all([i.e(39879),i.e(62785),i.e(95203),i.e(48347),i.e(13859),i.e(85292),i.e(19246)]).then(i.bind(i,19246)),"combobox-item":()=>Promise.all([i.e(39879),i.e(79012)]).then(i.bind(i,79012))})}get canNext(){return!(!this.items||!this.viewModel)&&this.items.findIndex((e=>{var t;let{value:i}=e;return i===(null===(t=this.viewModel.values)||void 0===t?void 0:t[0])}))!==this.items.length-1}get canPlay(){var e;return null!=this.viewModel&&!(null===(e=this.items)||void 0===e||!e.length)}get canPrevious(){const{items:e,viewModel:t}=this;return!(!e||!t)&&0!==e.findIndex((e=>{var i;let{value:l}=e;return l===(null===(i=t.values)||void 0===i?void 0:i[0])}))}render(){var e,t,i;const{viewModel:l}=this;if(null==l)return(0,h.K)("div",null);const o=null===(e=l.values)||void 0===e?void 0:e[0];return(0,h.K)("div",{class:"esri-value-picker__combobox"},(0,h.K)("calcite-combobox",{disabled:l.disabled,label:this.label,maxItems:10,overlayPositioning:"fixed",placeholder:null!==(t=this.placeholder)&&void 0!==t?t:void 0,selectionMode:"single",onCalciteComboboxChange:e=>{Array.isArray(e.target.value)||(null!=l.values?l.values[0]!==e.target.value&&(l.values=[e.target.value]):l.values=[e.target.value])}},null===(i=this.items)||void 0===i?void 0:i.map(((e,t)=>{let{value:i,label:l}=e;return(0,h.K)("calcite-combobox-item",{key:t,selected:i===o,textLabel:l,value:i})}))))}animate(e){this._step(1,e)}next(){this._step(1)}previous(){this._step(-1)}_step(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{viewModel:i,items:l}=this;if(null===l||void 0===l||!l.length||!i)return;if(!i.values)return void(i.values=[l[0].value]);const o=l.findIndex((e=>{let{value:t}=e;return t===i.values[0]}));if(-1===o)return void(i.values=[l[0].value]);const s=o+e;s<0||s>=l.length?i.loop||t?i.values=[l[1===e?0:l.length-1].value]:"playing"===i.state&&i.pause():i.values=[l[s].value]}};(0,l._)([(0,s.MZ)()],g.prototype,"canNext",null),(0,l._)([(0,s.MZ)()],g.prototype,"canPlay",null),(0,l._)([(0,s.MZ)()],g.prototype,"canPrevious",null),(0,l._)([(0,s.MZ)()],g.prototype,"items",void 0),(0,l._)([(0,s.MZ)()],g.prototype,"placeholder",void 0),(0,l._)([(0,s.MZ)()],g.prototype,"type",void 0),g=(0,l._)([(0,a.$)("esri.widgets.ValuePicker.ValuePickerCombobox")],g);const w=g,x="esri-value-picker__label",Z={border:"".concat(x,"-border"),text:"".concat(x,"-text")};let k=class extends y{constructor(e,t){super(e,t),this.items=null,this.type="label"}get canNext(){return!(!this.items||!this.viewModel)&&this.items.findIndex((e=>{var t;let{value:i}=e;return i===(null===(t=this.viewModel.values)||void 0===t?void 0:t[0])}))!==this.items.length-1}get canPlay(){var e;return null!=this.viewModel&&!(null===(e=this.items)||void 0===e||!e.length)}get canPrevious(){const{items:e,viewModel:t}=this;return!(!e||!t)&&0!==e.findIndex((e=>{var i;let{value:l}=e;return l===(null===(i=t.values)||void 0===i?void 0:i[0])}))}render(){var e;const{viewModel:t}=this;if(null==t)return(0,h.K)("div",null);const i=null===(e=this.items)||void 0===e?void 0:e.find((e=>{var i;let{value:l}=e;return l===(null===(i=t.values)||void 0===i?void 0:i[0])}));return(0,h.K)("div",{class:x},(0,h.K)("div",{class:Z.border},(0,h.K)("div",{class:Z.text},null===i||void 0===i?void 0:i.label)))}animate(e){this._step(1,e)}next(){this._step(1)}previous(){this._step(-1)}_step(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{viewModel:i,items:l}=this;if(null===l||void 0===l||!l.length||!i)return;if(!i.values)return void(i.values=[l[0].value]);const o=l.findIndex((e=>{let{value:t}=e;return t===i.values[0]}));if(-1===o)return void(i.values=[l[0].value]);const s=o+e;s<0||s>=l.length?i.loop||t?i.values=[l[1===e?0:l.length-1].value]:"playing"===i.state&&i.pause():i.values=[l[s].value]}};(0,l._)([(0,s.MZ)()],k.prototype,"canNext",null),(0,l._)([(0,s.MZ)()],k.prototype,"canPlay",null),(0,l._)([(0,s.MZ)()],k.prototype,"canPrevious",null),(0,l._)([(0,s.MZ)()],k.prototype,"items",void 0),(0,l._)([(0,s.MZ)()],k.prototype,"type",void 0),k=(0,l._)([(0,a.$)("esri.widgets.ValuePicker.ValuePickerLabel")],k);const P=k;var f=i(50346),C=i(22785),N=i(91967);let T=class extends N.A{constructor(e){super(e),this.steps=!1,this.thumbTooltip=!1}};(0,l._)([(0,s.MZ)({nonNullable:!0})],T.prototype,"steps",void 0),(0,l._)([(0,s.MZ)({nonNullable:!0})],T.prototype,"thumbTooltip",void 0),T=(0,l._)([(0,a.$)("esri.widgets.ValuePicker.ValuePickerSliderVisibleElements")],T);const V=T,K="esri-value-picker__slider",F={minorTick:"".concat(K,"__tick-minor"),majorTick:"".concat(K,"__tick-major"),stepsTick:"".concat(K,"__tick-steps"),tooltip:"".concat(K,"__tooltip")};function E(e){return(t,i)=>{null===i||void 0===i||i.classList.add(e)}}let A=class extends y{constructor(e,t){super(e,t),this._majorTickCreatedFunction=E(F.majorTick),this._minorTickCreatedFunction=E(F.minorTick),this._stepsTickCreatedFunction=E(F.stepsTick),this._thumbNode=null,this._tooltip=null,this._slider=new C.default({thumbCreatedFunction:(e,t,i)=>{this._thumbNode=i}}),this.labelFormatFunction=null,this.labels=null,this.min=null,this.minorTicks=null,this.majorTicks=null,this.max=null,this.reversed=!1,this.steps=null,this.type="slider",this.visibleElements=new V,this._thumbDragDebounced=(0,f.sg)((async e=>{var t;await(null===(t=this._tooltip)||void 0===t?void 0:t.reposition(!1))}))}initialize(){this.addHandles([(0,o.watch)((()=>{var e;return null===(e=this.viewModel)||void 0===e?void 0:e.values}),(e=>{this._slider.values=e}),o.initial),(0,o.watch)((()=>this._slider.values),(e=>{this.viewModel&&this.viewModel.values!==e&&(this.viewModel.values=e)})),this._slider.on("thumb-drag",this._thumbDragDebounced)])}destroy(){this._slider.destroy()}loadDependencies(){return(0,u.W)({tooltip:()=>Promise.all([i.e(39879),i.e(48347),i.e(73786)]).then(i.bind(i,73786))})}get _ascending(){const{reversed:e,viewModel:t}=this;if(!t)return null;const{layout:i}=t;return"horizontal"===i&&!e||"vertical"===i&&e}get canNext(){const{_ascending:e,min:t,max:i,steps:l,viewModel:o}=this;if(null==e||null==t||null==i||null===l||void 0===l||!l.length||!o)return!1;const{values:s}=o,n=null===s||void 0===s?void 0:s[0];return null==n||(e?n!==l[l.length-1]:n!==l[0])}get canPlay(){var e;return null!=this.viewModel&&!(null===(e=this.steps)||void 0===e||!e.length)&&null!=this.min&&null!=this.max}get canPrevious(){const{_ascending:e,min:t,max:i,steps:l,viewModel:o}=this;if(null==e||null==t||null==i||null===l||void 0===l||!l.length||!o)return!1;const{values:s}=o,n=null===s||void 0===s?void 0:s[0];return null==n||(e?n!==l[0]:n!==l[l.length-1])}render(){const{labels:e,labelFormatFunction:t,min:i,max:l,steps:o,minorTicks:s,majorTicks:n,reversed:a,viewModel:r}=this;if(!r)return(0,h.K)("div",null);const{disabled:u,layout:d}=r,v="".concat(d).concat(a?"-reversed":""),c="position",p=[];return null!=i&&null!=l&&(s&&p.push({mode:c,values:s,tickCreatedFunction:this._minorTickCreatedFunction}),n&&p.push({mode:c,values:n,tickCreatedFunction:this._majorTickCreatedFunction}),e&&p.push({mode:c,values:e,labelsVisible:!0}),this.visibleElements.steps&&this.steps&&p.push({mode:c,values:this.steps,tickCreatedFunction:this._stepsTickCreatedFunction})),this._slider.set({disabled:u,labelFormatFunction:t,layout:v,min:i,max:l,steps:o,tickConfigs:p}),(0,h.K)("div",{class:K},this._slider.render(),this._renderToolTip())}animate(e){this._step(1,e)}next(){this._step(this._ascending?1:-1)}previous(){this._step(this._ascending?-1:1)}_onTooltipAfterCreate(e){this._tooltip=e}_renderToolTip(){if(!this.visibleElements.thumbTooltip||!this._thumbNode||!this._slider.values)return null;const e=this._slider.viewModel.getLabelForValue(this._slider.values[0],"value");return e?(0,h.K)("calcite-tooltip",{afterCreate:this._onTooltipAfterCreate,class:F.tooltip,referenceElement:this._thumbNode},e):null}_step(e){var t;let i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.viewModel||null===(t=this.steps)||void 0===t||!t.length)return;if(!this.viewModel.values||!this.steps.includes(this.viewModel.values[0]))return void(this.viewModel.values=[this.steps[0]]);const l=this.steps.indexOf(this.viewModel.values[0])+e;l<0||l>=this.steps.length?this.viewModel.loop||i?this.viewModel.values=[this.steps[1===e?0:this.steps.length-1]]:"playing"===this.viewModel.state&&this.viewModel.pause():this.viewModel.values=[this.steps[l]]}};(0,l._)([(0,s.MZ)()],A.prototype,"_ascending",null),(0,l._)([(0,s.MZ)()],A.prototype,"canNext",null),(0,l._)([(0,s.MZ)()],A.prototype,"canPlay",null),(0,l._)([(0,s.MZ)()],A.prototype,"canPrevious",null),(0,l._)([(0,s.MZ)()],A.prototype,"labelFormatFunction",void 0),(0,l._)([(0,s.MZ)()],A.prototype,"labels",void 0),(0,l._)([(0,s.MZ)()],A.prototype,"min",void 0),(0,l._)([(0,s.MZ)()],A.prototype,"minorTicks",void 0),(0,l._)([(0,s.MZ)()],A.prototype,"majorTicks",void 0),(0,l._)([(0,s.MZ)()],A.prototype,"max",void 0),(0,l._)([(0,s.MZ)({nonNullable:!0})],A.prototype,"reversed",void 0),(0,l._)([(0,s.MZ)()],A.prototype,"steps",void 0),(0,l._)([(0,s.MZ)()],A.prototype,"type",void 0),(0,l._)([(0,s.MZ)({type:V,nonNullable:!0})],A.prototype,"visibleElements",void 0),A=(0,l._)([(0,a.$)("esri.widgets.ValuePicker.ValuePickerSlider")],A);const B=A;var D=i(54099);const I={first:!0},$={first:!1};let j=class extends D.A.EventedAccessor{constructor(e){super(e),this._animationController=null,this.disabled=!1,this.layout="horizontal",this.loop=!1,this.playRate=1e3,this.values=null}destroy(){this._pause()}get state(){return this._animationController?"playing":"ready"}next(){this.emit("next")}pause(){this.emit("pause"),this._pause()}play(){this.emit("play"),this._play()}previous(){this.emit("previous")}_pause(){var e;null!==(e=this._animationController)&&void 0!==e&&e.abort(),this._animationController=null}_play(){this._pause(),this._animationController=new AbortController,this._animate(I)}async _animate(e){if(this.emit("animate",e),this._animationController){try{await(0,f.Pl)(this.playRate,null,this._animationController.signal)}catch(t){return(0,f.zf)(t)||n.A.getLogger(this).error(t),void this._pause()}this._animate($)}}};(0,l._)([(0,s.MZ)()],j.prototype,"_animationController",void 0),(0,l._)([(0,s.MZ)({nonNullable:!0})],j.prototype,"disabled",void 0),(0,l._)([(0,s.MZ)({nonNullable:!0})],j.prototype,"layout",void 0),(0,l._)([(0,s.MZ)({nonNullable:!0})],j.prototype,"loop",void 0),(0,l._)([(0,s.MZ)({nonNullable:!0})],j.prototype,"playRate",void 0),(0,l._)([(0,s.MZ)({readOnly:!0})],j.prototype,"state",null),(0,l._)([(0,s.MZ)()],j.prototype,"values",void 0),(0,l._)([(0,s.MZ)()],j.prototype,"next",null),(0,l._)([(0,s.MZ)()],j.prototype,"pause",null),(0,l._)([(0,s.MZ)()],j.prototype,"play",null),(0,l._)([(0,s.MZ)()],j.prototype,"previous",null),j=(0,l._)([(0,a.$)("esri.widgets.ValuePicker.ValuePickerViewModel")],j);const R=j;let z=class extends N.A{constructor(e){super(e),this.nextButton=!0,this.playButton=!0,this.previousButton=!0}};(0,l._)([(0,s.MZ)({nonNullable:!0})],z.prototype,"nextButton",void 0),(0,l._)([(0,s.MZ)({nonNullable:!0})],z.prototype,"playButton",void 0),(0,l._)([(0,s.MZ)({nonNullable:!0})],z.prototype,"previousButton",void 0),z=(0,l._)([(0,a.$)("esri.widgets.ValuePicker.ValuePickerVisibleElements")],z);const L=z,O="esri-value-picker",S={widgetIcon:v.T.playCircled,actionBar:"".concat(O,"__action-bar"),caption:"".concat(O,"__caption"),captionBorder:"".concat(O,"__caption-border"),captionText:"".concat(O,"__caption-text"),separator:"".concat(O,"__separator")},W={base:null,key:"type",typeMap:{collection:b,combobox:w,label:P,slider:B}};let G=class extends r.A{constructor(e,t){super(e,t),this.caption=null,this.messages=null,this.messagesCommon=null,this.viewModel=new R,this.visibleElements=new L}initialize(){this.addHandles([(0,o.on)((()=>this.viewModel),"animate",(e=>{var t;let{first:i}=e;null===(t=this.component)||void 0===t||t.animate(i)})),(0,o.on)((()=>this.viewModel),"next",(()=>{var e;null===(e=this.component)||void 0===e||e.next()})),(0,o.on)((()=>this.viewModel),"previous",(()=>{var e;null===(e=this.component)||void 0===e||e.previous()}))])}loadDependencies(){return(0,u.W)({action:()=>Promise.all([i.e(39879),i.e(62785),i.e(48897),i.e(37918)]).then(i.bind(i,92111)),"action-bar":()=>Promise.all([i.e(39879),i.e(62785),i.e(48347),i.e(60731),i.e(48897),i.e(53794),i.e(24706),i.e(22143)]).then(i.bind(i,22143))})}get canNext(){var e,t;return null===(e=null===(t=this.component)||void 0===t?void 0:t.canNext)||void 0===e||e}get canPlay(){var e,t;return null===(e=null===(t=this.component)||void 0===t?void 0:t.canPlay)||void 0===e||e}get canPrevious(){var e,t;return null===(e=null===(t=this.component)||void 0===t?void 0:t.canPrevious)||void 0===e||e}set component(e){var t;e&&(null!==(t=e.viewModel)&&void 0!==t||(e.viewModel=this.viewModel)),this._set("component",e)}get disabled(){return this.viewModel.disabled}set disabled(e){this.viewModel.disabled=e}get label(){return this.messages.widgetLabel}set label(e){this._overrideIfSome("label",e)}get layout(){return this.viewModel.layout}set layout(e){this.viewModel.layout=e}get loop(){return this.viewModel.loop}set loop(e){this.viewModel.loop=e}get playRate(){return this.viewModel.playRate}set playRate(e){this.viewModel.playRate=e}get values(){return this.viewModel.values}set values(e){this.viewModel.values=e}next(){this.viewModel.next()}pause(){this.viewModel.pause()}play(){this.viewModel.play()}previous(){this.viewModel.previous()}render(){var e,t,i,l,o;const{disabled:s,state:n}=this.viewModel,a="playing"===n,r="horizontal"===this.layout,{control:u,pagination:v}=this.messagesCommon,{pause:c,play:p}=u,{previous:_,up:m,next:y,down:M}=v,b=this.visibleElements.playButton&&(0,h.K)("calcite-action",{active:a,alignment:"center",bind:this,disabled:s||!this.canPlay,icon:a?"pause":"play",key:"play",onclick:a?this.pause:this.play,text:a?c:p}),g=this.visibleElements.previousButton&&(0,h.K)("calcite-action",{alignment:"center",bind:this,disabled:s||a||!this.canPrevious,icon:r?"chevron-left":"chevron-up",key:"previous",onclick:this.previous,text:r?_:m}),w=this.visibleElements.nextButton&&(0,h.K)("calcite-action",{alignment:"center",bind:this,disabled:s||a||!this.canNext,icon:r?"chevron-right":"chevron-down",key:"next",onclick:this.next,text:r?y:M}),x=this.caption&&(0,h.K)("div",{class:S.caption},(0,h.K)("div",{class:S.captionBorder},(0,h.K)("div",{class:S.captionText},this.caption))),Z="combobox"===(null===(e=this.component)||void 0===e?void 0:e.type)||"label"===(null===(t=this.component)||void 0===t?void 0:t.type)||"slider"===(null===(i=this.component)||void 0===i?void 0:i.type),k=(b||g||w)&&(x||Z)&&(0,h.K)("div",{class:S.separator}),P=null===(l=this.component)||void 0===l?void 0:l.render();return(0,h.K)("div",{"aria-label":this.label,class:this.classes(O,d.D.widget,"".concat(O,"__layout--").concat(this.layout),"".concat(O,"__type--").concat(null===(o=this.component)||void 0===o?void 0:o.type))},(0,h.K)("calcite-action-bar",{class:S.actionBar,expandDisabled:!0,layout:this.layout},[b,g,w,k,x,P]))}};(0,l._)([(0,s.MZ)()],G.prototype,"canNext",null),(0,l._)([(0,s.MZ)()],G.prototype,"canPlay",null),(0,l._)([(0,s.MZ)()],G.prototype,"canPrevious",null),(0,l._)([(0,s.MZ)()],G.prototype,"caption",void 0),(0,l._)([(0,s.MZ)({types:W,value:null})],G.prototype,"component",null),(0,l._)([(0,s.MZ)()],G.prototype,"disabled",null),(0,l._)([(0,s.MZ)()],G.prototype,"label",null),(0,l._)([(0,s.MZ)()],G.prototype,"layout",null),(0,l._)([(0,s.MZ)()],G.prototype,"loop",null),(0,l._)([(0,s.MZ)(),(0,c.G)("esri/widgets/ValuePicker/t9n/ValuePicker")],G.prototype,"messages",void 0),(0,l._)([(0,s.MZ)(),(0,c.G)("esri/t9n/common")],G.prototype,"messagesCommon",void 0),(0,l._)([(0,s.MZ)()],G.prototype,"playRate",null),(0,l._)([(0,s.MZ)()],G.prototype,"values",null),(0,l._)([(0,s.MZ)(),(0,p.U)(["animate","next","pause","play","previous"])],G.prototype,"viewModel",void 0),(0,l._)([(0,s.MZ)({type:L,nonNullable:!0})],G.prototype,"visibleElements",void 0),G=(0,l._)([(0,a.$)("esri.widgets.ValuePicker")],G);const H=G},12254:(e,t,i)=>{function l(e){return t=>{t.hasOwnProperty("_delegatedEventNames")||(t._delegatedEventNames=t._delegatedEventNames?t._delegatedEventNames.slice():[]);const i=t._delegatedEventNames,l=Array.isArray(e)?e:function(e){return e.split(",").map((e=>e.trim()))}(e);i.push(...l)}}i.d(t,{U:()=>l})}}]);
//# sourceMappingURL=78519.a68b3c86.chunk.js.map