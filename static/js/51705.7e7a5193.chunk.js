"use strict";(self.webpackChunkhelloworld=self.webpackChunkhelloworld||[]).push([[51705],{51705:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var i=n(35143),a=(n(11265),n(46053)),r=(n(81806),n(76460),n(47249),n(85842)),s=n(25329),o=n(91967);let l=class extends o.A{constructor(e){super(e),this.average=null,this.bins=null,this.max=null,this.min=null}get binRange(){const{bins:e}=this;return e&&e.length>1?e[e.length-1].maxValue-e[0].minValue:0}set labelFormatFunction(e){this._set("labelFormatFunction",e)}get range(){const{max:e,min:t}=this;return null!=e&&null!=t?e-t:0}get state(){const{bins:e,range:t}=this;return t>0&&null!==e&&void 0!==e&&e.length?"ready":"disabled"}};(0,i._)([(0,a.MZ)()],l.prototype,"average",void 0),(0,i._)([(0,a.MZ)()],l.prototype,"bins",void 0),(0,i._)([(0,a.MZ)({readOnly:!0})],l.prototype,"binRange",null),(0,i._)([(0,a.MZ)()],l.prototype,"labelFormatFunction",null),(0,i._)([(0,a.MZ)()],l.prototype,"max",void 0),(0,i._)([(0,a.MZ)()],l.prototype,"min",void 0),(0,i._)([(0,a.MZ)({readOnly:!0})],l.prototype,"range",null),(0,i._)([(0,a.MZ)({readOnly:!0})],l.prototype,"state",null),l=(0,i._)([(0,r.$)("esri.widgets.Histogram.HistogramViewModel")],l);const d=l;var u,h=n(98108),c=n(15062),g=n(76099),_=n(63582),p=n(54761),b=n(39348);const v="esri-histogram",m={base:v,widgetIcon:c.T.edit,horizontalLayout:"".concat(v,"--horizontal"),verticalLayout:"".concat(v,"--vertical"),content:"".concat(v,"__content"),svg:"".concat(v,"__svg"),bar:"".concat(v,"__bar"),bars:"".concat(v,"__bars"),label:"".concat(v,"__label"),dataLines:"".concat(v,"__data-lines"),dataLinesSubgroup:"".concat(v,"__data-lines-subgroup"),dataLine:"".concat(v,"__data-line"),averageLabel:"".concat(v,"__average-label"),averageDataLine:"".concat(v,"__average-data-line"),averageSymbol:"".concat(v,"__average-symbol")};let y=u=class extends s.A{constructor(e,t){super(e,t),this._bgFillId="".concat(this.id,"-bg-fill"),this._containerNode=null,this._containerDimensions={width:0,height:0},this._defaultBarColor="#d8d8d8",this.barCreatedFunction=null,this.dataLines=null,this.dataLineCreatedFunction=null,this.dataLineUpdatedFunction=null,this.messages=null,this.viewModel=new d}get average(){return this.viewModel.average}set average(e){this.viewModel.average=e}get bins(){return this.viewModel.bins}set bins(e){this.viewModel.bins=e}get label(){var e,t;return null!==(e=null===(t=this.messages)||void 0===t?void 0:t.widgetLabel)&&void 0!==e?e:""}set label(e){this._overrideIfSome("label",e)}get labelFormatFunction(){return this.viewModel.labelFormatFunction}set labelFormatFunction(e){this.viewModel.labelFormatFunction=e}set layout(e){"vertical"!==e&&(e="horizontal"),this._set("layout",e)}get max(){return this.viewModel.max}set max(e){this.viewModel.max=e}get min(){return this.viewModel.min}set min(e){this.viewModel.min=e}get state(){return this.viewModel.state}static fromHistogramResult(e){const{bins:t,maxValue:n,minValue:i}=e;return new u({bins:t,max:n,min:i})}render(){const{label:e,layout:t,state:n}=this,i=this.classes(m.base,h.D.widget,"horizontal"===t?m.horizontalLayout:m.verticalLayout,"disabled"===n?h.D.disabled:null);return(0,p.K)("div",{afterCreate:this._afterContainerNodeCreate,"aria-label":e,bind:this,class:i},"ready"===n?this._renderContent():null)}_renderContent(){if(!this._containerNode)return;const e=this._bgFillId,t="clip-path: url(#".concat(e,")");return(0,p.K)("div",{class:m.content},(0,p.K)("svg",{class:m.svg,xmlns:"http://www.w3.org/2000/svg"},(0,p.K)("defs",null,this._renderFillDefinition(e)),(0,p.K)("g",{style:t},this._renderBarsGroup()),this._renderLinesGroup()))}_renderBarsGroup(){return(0,p.K)("g",{class:this.classes(m.bars)},this._renderBars())}_renderBars(){const{layout:e,viewModel:{binRange:t,range:n}}=this;if(!t||!n)return;const i=t/n,{width:a,height:r}=this._containerDimensions;if(0===r&&0===a)return;if(0===r&&0!==a)return void this.scheduleRender();const[s,o]="vertical"===e?[r*i,a]:[r,a*i];return this._getBarDimensions(s,o).map(((e,t)=>{let[n,i]=e;return this._renderBar(t,n,i)}))}_renderBar(e,t,n){const{bins:i,layout:a,max:r,messages:s,viewModel:{range:o}}=this;if(!i||null==r)return;const{width:l,height:d}=this._containerDimensions,u=i.slice()[e],{count:h,maxValue:c,minValue:g}=u,_=r-c,[v,y]="vertical"===a?[0,_*(d/o)]:[l-n-_*(l/o),d-t],L=(0,b.V)(s.barLabel,{count:h,maxValue:c,minValue:g});return(0,p.K)("rect",{afterCreate:this._afterBarCreate,"aria-label":L,bind:this,class:m.bar,"data-index":e,fill:this._defaultBarColor,height:t,role:"img","shape-rendering":"crispEdges","stroke-width":"0",width:n,x:v,y:y})}_renderLinesGroup(){return(0,p.K)("g",{class:this.classes(m.dataLines)},this._renderAverageLine(),this._renderCustomLines())}_renderAverageLine(){const{average:e}=this;if(null==e)return;const t=[(0,p.K)("tspan",{class:this.classes(m.averageSymbol)},"x\u0304 "),(0,p.K)("tspan",{class:this.classes(m.averageLabel)},this.labelFormatFunction?this.labelFormatFunction(e,"average"):e)];return(0,p.K)("g",{afterCreate:this._afterLinesSubgroupCreate,afterUpdate:this._afterLinesSubgroupUpdate,bind:this,class:this.classes(m.dataLinesSubgroup)},(0,p.K)("title",{key:"title"},e),this._renderLine(e,this.classes(m.averageDataLine)),this._renderLabel({label:t,value:e}))}_renderCustomLines(){var e;if(null!==(e=this.dataLines)&&void 0!==e&&e.length)return this.dataLines.map(((e,t)=>this._renderLineSubgroup(e,t)))}_renderLineSubgroup(e,t){const{value:n}=e;return(0,p.K)("g",{afterCreate:this._afterLinesSubgroupCreate,afterUpdate:this._afterLinesSubgroupUpdate,bind:this,class:this.classes(m.dataLinesSubgroup),"data-index":t},(0,p.K)("title",{key:"title"},n),this._renderLine(n),this._renderLabel(e))}_renderLine(e,t){const[n,i,a,r]=this._getLinePosition(e);return(0,p.K)("line",{class:this.classes(m.dataLine,t),"shape-rendering":"crispEdges",x1:n,x2:i,y1:a,y2:r})}_renderLabel(e,t){const{label:n,value:i}=e,[a,r]=this._getLabelPosition(i);return(0,p.K)("text",{class:this.classes(m.label,t),"text-anchor":"end",transform:"horizontal"===this.layout?"rotate(270)":null,x:a,y:r-2},null!==n&&void 0!==n?n:"")}_renderFillDefinition(e){const{width:t,height:n}=this._containerDimensions;return(0,p.K)("clipPath",{id:e},(0,p.K)("rect",{height:n,width:t,x:"0",y:"0"}))}_afterContainerNodeCreate(e){this._containerNode=e,this.addHandles((0,g.EV)(e,(e=>{const{width:t,height:n}=e.contentRect;this._containerDimensions={width:t,height:n}})))}_getIndexFromElement(e){var t;const n=null===(t=e.dataset)||void 0===t?void 0:t.index,i=e.getAttribute("data-index");return null!=n?parseInt(n,10):null!=i?parseInt(i,10):null}_afterBarCreate(e){if(this.barCreatedFunction){var t;const n=null!==(t=this._getIndexFromElement(e))&&void 0!==t?t:-1;this.barCreatedFunction(n,e)}}_afterLinesSubgroupCreate(e){if(this.dataLineCreatedFunction){const t=this._getIndexFromElement(e),n=e.childNodes[1],i=e.childNodes[2]?e.childNodes[2]:null;this.dataLineCreatedFunction(n,i,t)}}_afterLinesSubgroupUpdate(e){if(this.dataLineUpdatedFunction){const t=this._getIndexFromElement(e),n=e.childNodes[1],i=e.childNodes[2]?e.childNodes[2]:null;this.dataLineUpdatedFunction(n,i,t)}}_getBarDimensions(e,t){const{bins:n,layout:i}=this,a=n?n.map((e=>e.count)):[],r=Math.max.apply(Math,a);return a.map((n=>"vertical"===i?[e/a.length,0!==r?n/r*t:0]:[0!==r?n/r*e:0,t/a.length]))}_getLinePosition(e){const{layout:t,min:n,viewModel:{range:i}}=this;if(null==n)return[0,0,0,0];const a=Math.round((e-n)/i*100)/100,{width:r,height:s}=this._containerDimensions,[o,l]=[a*r||1,s-a*s||1];return"vertical"===t?[0,"100%",l,l]:[o,o,"100%",0]}_getLabelPosition(e){const{layout:t,min:n,viewModel:{range:i}}=this;if(null==n)return[0,0];const a=Math.round((e-n)/i*100)/100,{width:r,height:s}=this._containerDimensions;return"vertical"===t?[r,s-a*s]:[0,a*r]}};(0,i._)([(0,a.MZ)()],y.prototype,"_bgFillId",void 0),(0,i._)([(0,a.MZ)()],y.prototype,"_containerNode",void 0),(0,i._)([(0,a.MZ)()],y.prototype,"_containerDimensions",void 0),(0,i._)([(0,a.MZ)()],y.prototype,"_defaultBarColor",void 0),(0,i._)([(0,a.MZ)()],y.prototype,"average",null),(0,i._)([(0,a.MZ)()],y.prototype,"barCreatedFunction",void 0),(0,i._)([(0,a.MZ)()],y.prototype,"dataLines",void 0),(0,i._)([(0,a.MZ)()],y.prototype,"dataLineCreatedFunction",void 0),(0,i._)([(0,a.MZ)()],y.prototype,"dataLineUpdatedFunction",void 0),(0,i._)([(0,a.MZ)()],y.prototype,"label",null),(0,i._)([(0,a.MZ)()],y.prototype,"labelFormatFunction",null),(0,i._)([(0,a.MZ)({value:"horizontal"})],y.prototype,"layout",null),(0,i._)([(0,a.MZ)()],y.prototype,"max",null),(0,i._)([(0,a.MZ)(),(0,_.G)("esri/widgets/Histogram/t9n/Histogram")],y.prototype,"messages",void 0),(0,i._)([(0,a.MZ)()],y.prototype,"min",null),(0,i._)([(0,a.MZ)({readOnly:!0})],y.prototype,"state",null),(0,i._)([(0,a.MZ)()],y.prototype,"viewModel",void 0),y=u=(0,i._)([(0,r.$)("esri.widgets.Histogram")],y);const L=y}}]);
//# sourceMappingURL=51705.7e7a5193.chunk.js.map