"use strict";(self.webpackChunkhelloworld=self.webpackChunkhelloworld||[]).push([[77096,25745],{90321:(e,t,i)=>{function n(e,t){return e?t?4:3:t?3:2}function r(e,t,i,r){if(null===t||void 0===t||!t.lengths.length)return null;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const l=e.coords,a=[],u=i?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:c,coords:d}=t,h=n(i,r);let p=0;for(const n of c){const e=s(u,d,p,n,i,r);e&&a.push(e),p+=n*h}if(a.sort(((e,t)=>{let n=e[2]-t[2];return 0===n&&i&&(n=e[4]-t[4]),n})),a.length){let e=6*a[0][2];l[0]=a[0][0]/e,l[1]=a[0][1]/e,i&&(e=6*a[0][4],l[2]=0!==e?a[0][3]/e:0),(l[0]<u[0]||l[0]>u[1]||l[1]<u[2]||l[1]>u[3]||i&&(l[2]<u[4]||l[2]>u[5]))&&(l.length=0)}if(!l.length){const e=t.lengths[0]?o(d,0,c[0],i,r):null;if(!e)return null;l[0]=e[0],l[1]=e[1],i&&e.length>2&&(l[2]=e[2])}return e}function s(e,t,i,r,s,o){const l=n(s,o);let a=i,u=i+l,c=0,d=0,h=0,p=0,g=0;for(let n=0,y=r-1;n<y;n++,a+=l,u+=l){const i=t[a],n=t[a+1],r=t[a+2],o=t[u],l=t[u+1],f=t[u+2];let y=i*l-o*n;p+=y,c+=(i+o)*y,d+=(n+l)*y,s&&(y=i*f-o*r,h+=(r+f)*y,g+=y),i<e[0]&&(e[0]=i),i>e[1]&&(e[1]=i),n<e[2]&&(e[2]=n),n>e[3]&&(e[3]=n),s&&(r<e[4]&&(e[4]=r),r>e[5]&&(e[5]=r))}if(p>0&&(p*=-1),g>0&&(g*=-1),!p)return null;const f=[c,d,.5*p];return s&&(f[3]=h,f[4]=.5*g),f}function o(e,t,i,r,s){const o=n(r,s);let d=t,h=t+o,p=0,g=0,f=0,y=0;for(let n=0,v=i-1;n<v;n++,d+=o,h+=o){const t=e[d],i=e[d+1],n=e[d+2],s=e[h],o=e[h+1],v=e[h+2],m=r?a(t,i,n,s,o,v):l(t,i,s,o);if(m)if(p+=m,r){const e=c(t,i,n,s,o,v);g+=m*e[0],f+=m*e[1],y+=m*e[2]}else{const e=u(t,i,s,o);g+=m*e[0],f+=m*e[1]}}return p>0?r?[g/p,f/p,y/p]:[g/p,f/p]:i>0?r?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function l(e,t,i,n){const r=i-e,s=n-t;return Math.sqrt(r*r+s*s)}function a(e,t,i,n,r,s){const o=n-e,l=r-t,a=s-i;return Math.sqrt(o*o+l*l+a*a)}function u(e,t,i,n){return[e+.5*(i-e),t+.5*(n-t)]}function c(e,t,i,n,r,s){return[e+.5*(n-e),t+.5*(r-t),i+.5*(s-i)]}i.d(t,{Q:()=>r})},33376:(e,t,i)=>{i.d(t,{T:()=>o});var n=i(90321),r=i(20176),s=i(1484);const o={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new r.Om(t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>(null==e.centroid&&(e.centroid=(0,n.Q)(new s.A,e.geometry,t.hasZ,t.hasM)),e.centroid)}},28808:(e,t,i)=>{var n,r,s,o,l,a,u,c,d,h,p,g,f,y,v,m,b,_,E,S,R,C,T,N,A,w,P,M,O,I,B,F,x,D,L,U,V,Z,G,H,Y,W,z,k,j,q,K,X,J,Q,$,ee,te,ie,ne,re,se,oe,le,ae,ue;i.d(t,{$2:()=>l,C1:()=>s,JO:()=>r,M1:()=>C,O$:()=>se,Q1:()=>q,TZ:()=>m,WE:()=>M,Y:()=>u,YI:()=>X,bj:()=>c,e_:()=>j,f0:()=>re,fu:()=>p,g7:()=>d,ip:()=>K,mU:()=>O,oF:()=>S,uQ:()=>R,uT:()=>U,vG:()=>le,wd:()=>H,xR:()=>n,xn:()=>b,xw:()=>A,yS:()=>V}),function(e){e[e.BUTT=0]="BUTT",e[e.ROUND=1]="ROUND",e[e.SQUARE=2]="SQUARE",e[e.UNKNOWN=4]="UNKNOWN"}(n||(n={})),function(e){e[e.BEVEL=0]="BEVEL",e[e.ROUND=1]="ROUND",e[e.MITER=2]="MITER",e[e.UNKNOWN=4]="UNKNOWN"}(r||(r={})),function(e){e[e.SCREEN=0]="SCREEN",e[e.MAP=1]="MAP"}(s||(s={})),function(e){e[e.Tint=0]="Tint",e[e.Ignore=1]="Ignore",e[e.Multiply=99]="Multiply"}(o||(o={})),function(e){e.Both="Both",e.JustBegin="JustBegin",e.JustEnd="JustEnd",e.None="None"}(l||(l={})),function(e){e[e.Mosaic=0]="Mosaic",e[e.Centered=1]="Centered"}(a||(a={})),function(e){e[e.Normal=0]="Normal",e[e.Superscript=1]="Superscript",e[e.Subscript=2]="Subscript"}(u||(u={})),function(e){e[e.MSSymbol=0]="MSSymbol",e[e.Unicode=1]="Unicode"}(c||(c={})),function(e){e[e.Unspecified=0]="Unspecified",e[e.TrueType=1]="TrueType",e[e.PSOpenType=2]="PSOpenType",e[e.TTOpenType=3]="TTOpenType",e[e.Type1=4]="Type1"}(d||(d={})),function(e){e[e.Display=0]="Display",e[e.Map=1]="Map"}(h||(h={})),function(e){e.None="None",e.Loop="Loop",e.Oscillate="Oscillate"}(p||(p={})),function(e){e[e.Z=0]="Z",e[e.X=1]="X",e[e.Y=2]="Y"}(g||(g={})),function(e){e[e.XYZ=0]="XYZ",e[e.ZXY=1]="ZXY",e[e.YXZ=2]="YXZ"}(f||(f={})),function(e){e[e.Rectangle=0]="Rectangle",e[e.RoundedRectangle=1]="RoundedRectangle",e[e.Oval=2]="Oval"}(y||(y={})),function(e){e[e.None=0]="None",e[e.Alpha=1]="Alpha",e[e.Screen=2]="Screen",e[e.Multiply=3]="Multiply",e[e.Add=4]="Add"}(v||(v={})),function(e){e[e.TTB=0]="TTB",e[e.RTL=1]="RTL",e[e.BTT=2]="BTT"}(m||(m={})),function(e){e[e.None=0]="None",e[e.SignPost=1]="SignPost",e[e.FaceNearPlane=2]="FaceNearPlane"}(b||(b={})),function(e){e[e.Float=0]="Float",e[e.String=1]="String",e[e.Boolean=2]="Boolean"}(_||(_={})),function(e){e[e.Intersect=0]="Intersect",e[e.Subtract=1]="Subtract"}(E||(E={})),function(e){e.OpenEnded="OpenEnded",e.Block="Block",e.Crossed="Crossed"}(S||(S={})),function(e){e.FullGeometry="FullGeometry",e.PerpendicularFromFirstSegment="PerpendicularFromFirstSegment",e.ReversedFirstSegment="ReversedFirstSegment",e.PerpendicularToSecondSegment="PerpendicularToSecondSegment",e.SecondSegmentWithTicks="SecondSegmentWithTicks",e.DoublePerpendicular="DoublePerpendicular",e.OppositeToFirstSegment="OppositeToFirstSegment",e.TriplePerpendicular="TriplePerpendicular",e.HalfCircleFirstSegment="HalfCircleFirstSegment",e.HalfCircleSecondSegment="HalfCircleSecondSegment",e.HalfCircleExtended="HalfCircleExtended",e.OpenCircle="OpenCircle",e.CoverageEdgesWithTicks="CoverageEdgesWithTicks",e.GapExtentWithDoubleTicks="GapExtentWithDoubleTicks",e.GapExtentMidline="GapExtentMidline",e.Chevron="Chevron",e.PerpendicularWithArc="PerpendicularWithArc",e.ClosedHalfCircle="ClosedHalfCircle",e.TripleParallelExtended="TripleParallelExtended",e.ParallelWithTicks="ParallelWithTicks",e.Parallel="Parallel",e.PerpendicularToFirstSegment="PerpendicularToFirstSegment",e.ParallelOffset="ParallelOffset",e.OffsetOpposite="OffsetOpposite",e.OffsetSame="OffsetSame",e.CircleWithArc="CircleWithArc",e.DoubleJog="DoubleJog",e.PerpendicularOffset="PerpendicularOffset",e.LineExcludingLastSegment="LineExcludingLastSegment",e.MultivertexArrow="MultivertexArrow",e.CrossedArrow="CrossedArrow",e.ChevronArrow="ChevronArrow",e.ChevronArrowOffset="ChevronArrowOffset",e.PartialFirstSegment="PartialFirstSegment",e.Arch="Arch",e.CurvedParallelTicks="CurvedParallelTicks",e.Arc90Degrees="Arc90Degrees"}(R||(R={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square",e.TrueBuffer="TrueBuffer"}(C||(C={})),function(e){e.ClosePath="ClosePath",e.ConvexHull="ConvexHull",e.RectangularBox="RectangularBox"}(T||(T={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(N||(N={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square"}(A||(A={})),function(e){e.Fast="Fast",e.Accurate="Accurate"}(w||(w={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(P||(P={})),function(e){e.Sinus="Sinus",e.Square="Square",e.Triangle="Triangle",e.Random="Random"}(M||(M={})),function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Force=2]="Force"}(O||(O={})),function(e){e[e.Buffered=0]="Buffered",e[e.Left=1]="Left",e[e.Right=2]="Right",e[e.AlongLine=3]="AlongLine"}(I||(I={})),function(e){e[e.Linear=0]="Linear",e[e.Rectangular=1]="Rectangular",e[e.Circular=2]="Circular",e[e.Buffered=3]="Buffered"}(B||(B={})),function(e){e[e.Discrete=0]="Discrete",e[e.Continuous=1]="Continuous"}(F||(F={})),function(e){e[e.AcrossLine=0]="AcrossLine",e[e.AloneLine=1]="AloneLine"}(x||(x={})),function(e){e[e.Left=0]="Left",e[e.Right=1]="Right",e[e.Center=2]="Center",e[e.Justify=3]="Justify"}(D||(D={})),function(e){e[e.Base=0]="Base",e[e.MidPoint=1]="MidPoint",e[e.ThreePoint=2]="ThreePoint",e[e.FourPoint=3]="FourPoint",e[e.Underline=4]="Underline",e[e.CircularCW=5]="CircularCW",e[e.CircularCCW=6]="CircularCCW"}(L||(L={})),function(e){e.Butt="Butt",e.Round="Round",e.Square="Square"}(U||(U={})),function(e){e.NoConstraint="NoConstraint",e.HalfPattern="HalfPattern",e.HalfGap="HalfGap",e.FullPattern="FullPattern",e.FullGap="FullGap",e.Custom="Custom"}(V||(V={})),function(e){e[e.None=-1]="None",e[e.Custom=0]="Custom",e[e.Circle=1]="Circle",e[e.OpenArrow=2]="OpenArrow",e[e.ClosedArrow=3]="ClosedArrow",e[e.Diamond=4]="Diamond"}(Z||(Z={})),function(e){e[e.ExtraLeading=0]="ExtraLeading",e[e.Multiple=1]="Multiple",e[e.Exact=2]="Exact"}(G||(G={})),function(e){e.Bevel="Bevel",e.Round="Round",e.Miter="Miter"}(H||(H={})),function(e){e[e.Default=0]="Default",e[e.String=1]="String",e[e.Numeric=2]="Numeric"}(Y||(Y={})),function(e){e[e.InsidePolygon=0]="InsidePolygon",e[e.PolygonCenter=1]="PolygonCenter",e[e.RandomlyInsidePolygon=2]="RandomlyInsidePolygon"}(W||(W={})),function(e){e[e.Tint=0]="Tint",e[e.Replace=1]="Replace",e[e.Multiply=2]="Multiply"}(z||(z={})),function(e){e[e.ClipAtBoundary=0]="ClipAtBoundary",e[e.RemoveIfCenterOutsideBoundary=1]="RemoveIfCenterOutsideBoundary",e[e.DoNotTouchBoundary=2]="DoNotTouchBoundary",e[e.DoNotClip=3]="DoNotClip"}(k||(k={})),function(e){e.NoConstraint="NoConstraint",e.WithMarkers="WithMarkers",e.WithFullGap="WithFullGap",e.WithHalfGap="WithHalfGap",e.Custom="Custom"}(j||(j={})),function(e){e.Fixed="Fixed",e.Random="Random",e.RandomFixedQuantity="RandomFixedQuantity"}(q||(q={})),function(e){e.LineMiddle="LineMiddle",e.LineBeginning="LineBeginning",e.LineEnd="LineEnd",e.SegmentMidpoint="SegmentMidpoint"}(K||(K={})),function(e){e.OnPolygon="OnPolygon",e.CenterOfMass="CenterOfMass",e.BoundingBoxCenter="BoundingBoxCenter"}(X||(X={})),function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High"}(J||(J={})),function(e){e[e.MarkerCenter=0]="MarkerCenter",e[e.MarkerBounds=1]="MarkerBounds"}(Q||(Q={})),function(e){e[e.None=0]="None",e[e.PropUniform=1]="PropUniform",e[e.PropNonuniform=2]="PropNonuniform",e[e.DifUniform=3]="DifUniform",e[e.DifNonuniform=4]="DifNonuniform"}($||($={})),function(e){e.Tube="Tube",e.Strip="Strip",e.Wall="Wall"}(ee||(ee={})),function(e){e[e.Random=0]="Random",e[e.Increasing=1]="Increasing",e[e.Decreasing=2]="Decreasing",e[e.IncreasingThenDecreasing=3]="IncreasingThenDecreasing"}(te||(te={})),function(e){e[e.Relative=0]="Relative",e[e.Absolute=1]="Absolute"}(ie||(ie={})),function(e){e[e.Normal=0]="Normal",e[e.LowerCase=1]="LowerCase",e[e.Allcaps=2]="Allcaps"}(ne||(ne={})),function(e){e[e.LTR=0]="LTR",e[e.RTL=1]="RTL"}(re||(re={})),function(e){e.Draft="Draft",e.Picture="Picture",e.Text="Text"}(se||(se={})),function(e){e[e.Top=0]="Top",e[e.Center=1]="Center",e[e.Baseline=2]="Baseline",e[e.Bottom=3]="Bottom"}(oe||(oe={})),function(e){e[e.Right=0]="Right",e[e.Upright=1]="Upright"}(le||(le={})),function(e){e[e.Small=0]="Small",e[e.Medium=1]="Medium",e[e.Large=2]="Large"}(ae||(ae={})),function(e){e[e.Calm=0]="Calm",e[e.Rippled=1]="Rippled",e[e.Slight=2]="Slight",e[e.Moderate=3]="Moderate"}(ue||(ue={}))},42208:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var n=i(35143),r=i(50076),s=i(30726),o=i(68134),l=i(46053),a=(i(81806),i(76460),i(47249),i(85842)),u=i(83491),c=i(19321),d=i(183),h=i(43804),p=i(65768),g=i(40200),f=i(44513),y=i(91196);let v=class extends((0,u.w)(y.A)){constructor(){super(...arguments),this.type="graphics-3d",this.symbologySnappingSupported=!0,this._slicePlaneEnabled=!1,this.fullExtentInLocalViewSpatialReference=null,this.ignoresMemoryFactor=!0}initialize(){this._set("processor",new d.K({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.initializePromise),this.addHandles(this.layer.on("graphic-update",(e=>this.processor.graphicsCore.graphicUpdateHandler(e)))),this.addResolvingPromise((0,g.V)(this).then((e=>this.fullExtentInLocalViewSpatialReference=e))),this.layer.internal?this.notifyChange("updating"):this.addHandles((0,o.when)((()=>{var e;return null===(e=this.view)||void 0===e||null===(e=e.basemapTerrain)||void 0===e?void 0:e.ready}),(()=>()=>this.notifyChange("updating")),{once:!0}))}destroy(){this._updatingHandles.removeAll(),this._set("processor",(0,s.pR)(this.processor))}get loadedGraphics(){return this.layer.graphics}get legendEnabled(){var e;return this.canResume()&&!(null!==(e=this.processor)&&void 0!==e&&e.frustumVisibilitySuspended)}get slicePlaneEnabled(){const e=this.layer.internal;return this._slicePlaneEnabled&&!e}set slicePlaneEnabled(e){this._slicePlaneEnabled=e}getSuspendInfo(){var e,t,i,n;const r=super.getSuspendInfo();return r.outsideScaleRange=null!==(e=null===(t=this.processor)||void 0===t?void 0:t.scaleVisibilitySuspended)&&void 0!==e&&e,r.outsideOfView=null!==(i=null===(n=this.processor)||void 0===n?void 0:n.frustumVisibilitySuspended)&&void 0!==i&&i,r}getHit(e){return this.processor.getHit(e)}whenGraphicBounds(e,t){return this.processor.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){var i;return null===(i=this.processor)||void 0===i?void 0:i.computeAttachmentOrigin(e,t)}getSymbolLayerSize(e,t){return this.processor.getSymbolLayerSize(e,t)}queryGraphics(){return Promise.resolve(this.loadedGraphics)}maskOccludee(e){return this.processor.maskOccludee(e)}highlight(e){return this.processor.highlight(e)}async elevationAlignPointsInFeatures(e,t){const{processor:i}=this;if(null==(null===i||void 0===i?void 0:i.graphics3DGraphics))throw new r.A("graphicslayerview3d:missing-processor","A Graphics3D processor is needed to resolve graphics elevation.");const{graphics3DGraphics:n}=i;return(0,c.a)(this.view,this.layer,(e=>"number"==typeof e?n.get(e):void 0),e,t)}async queryForSymbologySnapping(e,t){return(0,h.N)(this.processor,e,t)}get updatePolicy(){var e;return(null===(e=this.processor)||void 0===e?void 0:e.graphicsCore.effectiveUpdatePolicy)||f.q.SYNC}canResume(){var e;return super.canResume()&&!(null!==(e=this.processor)&&void 0!==e&&e.scaleVisibilitySuspended)}isUpdating(){var e,t;return this.view&&this.layer&&!((null===(e=this.processor)||void 0===e||!e.updating)&&(this.layer.internal||null!==(t=this.view.basemapTerrain)&&void 0!==t&&t.ready))}get performanceInfo(){return new p.P(this.usedMemory,this.loadedGraphics.length,-1,-1)}get usedMemory(){var e,t;return null!==(e=null===(t=this.processor)||void 0===t||null===(t=t.graphicsCore)||void 0===t?void 0:t.usedMemory)&&void 0!==e?e:0}get unloadedMemory(){var e;return null===(e=this.processor)||void 0===e||null===(e=e.graphicsCore)||void 0===e?void 0:e.unprocessedMemoryEstimate}};(0,n._)([(0,l.MZ)()],v.prototype,"loadedGraphics",null),(0,n._)([(0,l.MZ)({readOnly:!0})],v.prototype,"legendEnabled",null),(0,n._)([(0,l.MZ)()],v.prototype,"layer",void 0),(0,n._)([(0,l.MZ)({readOnly:!0})],v.prototype,"processor",void 0),(0,n._)([(0,l.MZ)()],v.prototype,"_slicePlaneEnabled",void 0),(0,n._)([(0,l.MZ)({type:Boolean})],v.prototype,"slicePlaneEnabled",null),v=(0,n._)([(0,a.$)("esri.views.3d.layers.GraphicsLayerView3D")],v);const m=v},83491:(e,t,i)=>{i.d(t,{w:()=>c});var n=i(35143),r=i(54901),s=i(50346),o=i(68134),l=i(46053),a=(i(81806),i(76460),i(47249),i(85842)),u=i(47700);const c=e=>{let t=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(e){super.postscript(e),(0,u.jI)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.addHandles((0,r.hA)((()=>e.abort()))),await(0,o.whenOnce)((()=>{var e;return null===(e=this.view.defaultsFromMap)||void 0===e?void 0:e.heightModelInfoReady}),t),(0,s.Te)(t);const i=(0,u.Hu)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!(null!==e&&void 0!==e&&e.minScale)||!e.maxScale||e.minScale>=e.maxScale)}getSuspendInfo(){const e=super.getSuspendInfo(),t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return t&&t.minScale&&t.maxScale&&t.minScale<t.maxScale&&(e.outsideScaleRange=!0),e}};return(0,n._)([(0,l.MZ)()],t.prototype,"view",void 0),(0,n._)([(0,l.MZ)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,n._)([(0,a.$)("esri.views.3d.layers.LayerView3D")],t),t}},183:(e,t,i)=>{i.d(t,{K:()=>P});var n=i(35143),r=i(39356),s=i(91967),o=i(19276),l=i(54901),a=i(30726),u=i(50346),c=i(68134),d=i(46053),h=(i(81806),i(76460),i(47249),i(85842)),p=i(15011),g=i(19451),f=i(25515),y=i(32535),v=i(86486),m=i(68295),b=i(57662),_=i(38865),E=i(23475),S=i(35148),R=i(44220),C=i(90592),T=i(93788),N=i(36423),A=i(83490),w=i(44513);let P=class extends s.A{constructor(e){super(e),this.type="graphics-3d",this.graphicsCore=null,this.drapeSourceType=b.Om.Features,this.scaleVisibilityEnabled=!1,this.frustumVisibilityEnabled=!1,this._suspendResumeExtent=null,this._updatingHandles=new g.U}initialize(){const{layer:e}=this,t="effectiveScaleRange"in e?e:null,i=this.scaleVisibilityEnabled&&null!=t,n=new E.w({owner:this,layer:this.owner.layer,preferredUpdatePolicy:w.q.SYNC,graphicSymbolSupported:!0,componentFactories:{elevationAlignment:(e,t)=>new S.V({graphicsCoreOwner:this,graphicsCore:e,queryGraphicUIDsInExtent:t,elevationProvider:this.view.elevationProvider}),scaleVisibility:i?(e,i)=>new T.N({graphicsCoreOwner:this,layer:t,queryGraphicUIDsInExtent:i,graphicsCore:e,basemapTerrain:this.owner.view.basemapTerrain}):null,objectStates:e=>new C.w(e)}});if(this._set("graphicsCore",n),this.frustumVisibilityEnabled&&this._set("frustumVisibility",new R.p({graphicsCoreOwner:this})),"fullOpacity"in this.owner){const e=this.owner;this._updatingHandles.add((()=>e.fullOpacity),(()=>this.graphicsCore.opacityChange()))}if("elevationInfo"in e){const t=e;this._updatingHandles.add((()=>t.elevationInfo),((e,t)=>{(0,p.Ui)(e,t)&&this._updatingHandles.addPromise(this.graphicsCore.elevationInfoChange())}))}this._set("initializePromise",this._initializeAsync()),this._updatingHandles.addPromise(this.initializePromise)}async _initializeAsync(){try{await this.graphicsCore.initializePromise}catch(e){if((0,u.zf)(e))return;throw e}this.destroyed||(this.addHandles((0,c.watch)((()=>this.view.clippingArea),(()=>this._updateClippingExtent()),c.sync)),this._updateClippingExtent(),this._setupSuspendResumeExtent(),this.graphicsCore.startCreateGraphics())}destroy(){this._updatingHandles.destroy(),this._set("frustumVisibility",(0,a.pR)(this.frustumVisibility)),this._set("graphicsCore",(0,a.pR)(this.graphicsCore))}get layer(){return this.owner.layer}get view(){return this.owner.view}get scaleVisibility(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.scaleVisibility}get elevationAlignment(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.elevationAlignment}get objectStates(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.objectStates}get scaleVisibilitySuspended(){return!(null==this.scaleVisibility||!this.scaleVisibility.suspended)}get frustumVisibilitySuspended(){return null!=this.frustumVisibility&&this.frustumVisibility.suspended}get suspended(){var e;return null!==(e=this.owner.suspended)&&void 0!==e&&e}get updating(){var e;return!!(null!==(e=this.graphicsCore)&&void 0!==e&&e.updating||null!=this.scaleVisibility&&this.scaleVisibility.updating||null!=this.frustumVisibility&&this.frustumVisibility.updating||this._updatingHandles.updating)}get graphics3DGraphics(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.graphics3DGraphics}get graphics3DGraphicsByObjectID(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.graphics3DGraphicsByObjectID}get loadedGraphics(){return this.owner.loadedGraphics}get fullOpacity(){var e;return null!==(e=this.owner.fullOpacity)&&void 0!==e?e:1}get slicePlaneEnabled(){return this.owner.slicePlaneEnabled}get updatePolicy(){return this.owner.updatePolicy}notifyGraphicGeometryChanged(e){this.graphicsCore.notifyGraphicGeometryChanged(e)}notifyGraphicVisibilityChanged(e){this.graphicsCore.notifyGraphicVisibilityChanged(e)}getRenderingInfo(e,t,i){const n=(0,v.vl)(e,{renderer:t,arcade:i});if(null!==n&&void 0!==n&&n.color){const e=n.color;e[0]=e[0]/255,e[1]=e[1]/255,e[2]=e[2]/255}return n}getRenderingInfoAsync(e,t,i,n){return(0,v.LO)(e,{renderer:t,arcade:i,...n})}getHit(e){if(this.owner.loadedGraphics){const t=this.owner.loadedGraphics.find((t=>t.uid===e));if(t){const e=this.layer instanceof f.A?this.layer:null,i=(0,y.wP)(t,e);return{type:"graphic",graphic:i,layer:i.layer}}}return null}whenGraphicBounds(e,t){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(e,t):Promise.reject()}computeAttachmentOrigin(e,t){return this.graphicsCore?this.graphicsCore.computeAttachmentOrigin(e,t):null}getSymbolLayerSize(e,t){return this.graphicsCore?this.graphicsCore.getSymbolLayerSize(e,t):null}maskOccludee(e){const{set:t,handle:i}=this.objectStates.acquireSet(A.Mg.MaskOccludee,null);return this.objectStates.setUid(t,e.uid),i}highlight(e){if(e instanceof m.A)return M;if("number"==typeof e)return this.highlight([e]);if(e instanceof r.A)return this.highlight([e]);if(e instanceof o.A&&(e=e.toArray()),Array.isArray(e)&&e.length>0){if(e[0]instanceof r.A){const t=e.map((e=>e.uid)),{set:i,handle:n}=this.objectStates.acquireSet(A.Mg.Highlight,null);return this.objectStates.setUids(i,t),n}if("number"==typeof e[0]){const t=e,{set:i,handle:n}=this.objectStates.acquireSet(A.Mg.Highlight,null);return this.objectStates.setObjectIds(i,t),n}}return M}_setupSuspendResumeExtent(){const{scaleVisibility:e,frustumVisibility:t}=this;if(null==e&&null==t)return;const i=i=>{let{computedExtent:n,extentPadding:r}=i;this._suspendResumeExtent=(0,N.t8)(n,this._suspendResumeExtent,_.qD,r),null!=e&&e.setExtent(this._suspendResumeExtent),null!=t&&t.setExtent(this._suspendResumeExtent)};this.addHandles((0,c.watch)((()=>{var e,t;return{computedExtent:null===(e=this.graphicsCore)||void 0===e?void 0:e.computedExtent,extentPadding:null===(t=this.graphicsCore)||void 0===t?void 0:t.extentPadding}}),(e=>i(e)),c.syncAndInitial))}_updateClippingExtent(){const e=this.view.clippingArea;this.graphicsCore.setClippingExtent(e,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()}};(0,n._)([(0,d.MZ)()],P.prototype,"type",void 0),(0,n._)([(0,d.MZ)({constructOnly:!0})],P.prototype,"owner",void 0),(0,n._)([(0,d.MZ)()],P.prototype,"layer",null),(0,n._)([(0,d.MZ)()],P.prototype,"view",null),(0,n._)([(0,d.MZ)({constructOnly:!0})],P.prototype,"graphicsCore",void 0),(0,n._)([(0,d.MZ)()],P.prototype,"scaleVisibility",null),(0,n._)([(0,d.MZ)({constructOnly:!0})],P.prototype,"frustumVisibility",void 0),(0,n._)([(0,d.MZ)()],P.prototype,"elevationAlignment",null),(0,n._)([(0,d.MZ)()],P.prototype,"objectStates",null),(0,n._)([(0,d.MZ)()],P.prototype,"scaleVisibilitySuspended",null),(0,n._)([(0,d.MZ)({readOnly:!0})],P.prototype,"frustumVisibilitySuspended",null),(0,n._)([(0,d.MZ)()],P.prototype,"suspended",null),(0,n._)([(0,d.MZ)({readOnly:!0})],P.prototype,"updating",null),(0,n._)([(0,d.MZ)()],P.prototype,"loadedGraphics",null),(0,n._)([(0,d.MZ)()],P.prototype,"fullOpacity",null),(0,n._)([(0,d.MZ)()],P.prototype,"slicePlaneEnabled",null),(0,n._)([(0,d.MZ)()],P.prototype,"drapeSourceType",void 0),(0,n._)([(0,d.MZ)()],P.prototype,"updatePolicy",null),(0,n._)([(0,d.MZ)({constructOnly:!0})],P.prototype,"scaleVisibilityEnabled",void 0),(0,n._)([(0,d.MZ)({constructOnly:!0})],P.prototype,"frustumVisibilityEnabled",void 0),(0,n._)([(0,d.MZ)()],P.prototype,"initializePromise",void 0),P=(0,n._)([(0,h.$)("esri.views.3d.layers.graphics.GraphicsProcessor")],P);const M=(0,l.hA)()},19321:(e,t,i)=>{i.d(t,{a:()=>h});i(35238);var n=i(50346),r=i(9392),s=i(64232),o=i(18117),l=i(12482),a=i(67425),u=i(49296),c=i(41595),d=i(13312);async function h(e,t,i,h,p){var g;const{elevationProvider:f,renderCoordsHelper:y}=e,{elevationInfo:v}=t,{pointsInFeatures:m,spatialReference:b}=h,_=d.A.fromJSON(b),E=(0,c.MF)(v,!0),S=await(0,c.q6)(E,_,p);(0,n.Te)(p);const R=[],C=new Set,T=new Set,N=new u.F,A=(0,o.T)(0,0,0,d.A.WGS84),w=new a.Uk,P=(0,r.vt)();A.spatialReference=_;const M=null!==(g=e.elevationProvider.spatialReference)&&void 0!==g?g:e.spatialReference;for(const{objectId:n,points:r}of m){const e=i(n);if(null==e){for(const e of r){var O;R.push(null!==(O=e.z)&&void 0!==O?O:0)}C.add(n);continue}e.isDraped&&T.add(n);const o=e.graphic.geometry;N.setFromElevationInfo((0,l.ze)(o,v)),N.updateFeatureExpressionInfoContext(S,e.graphic,t);for(const{x:t,y:i,z:n}of r)A.x=t,A.y=i,A.z=null!==n&&void 0!==n?n:0,await(0,s.W)(A,P,M,0,{signal:p}),(0,a.sE)(P,f,N,y,w),R.push(w.z)}return{elevations:R,drapedObjectIds:T,failedObjectIds:C}}},43804:(e,t,i)=>{i.d(t,{N:()=>s});var n=i(50346),r=i(98976);async function s(e,t,i){var s;if(null==e||0===t.candidates.length)return o;const l=null!==(s=e.graphics3DGraphicsByObjectID)&&void 0!==s?s:e.graphics3DGraphics,a=[],u=[],{renderer:c}=e,d=null!=c&&"arcadeRequired"in c&&c.arcadeRequired?(0,r.lw)():null,h=async(t,n)=>{let{graphic:r,graphics3DSymbol:s}=n;const o=await d,l=await e.getRenderingInfoAsync(r,c,o,{signal:i});return null==l?[]:s.queryForSnapping(t,g,l,i)},{candidates:p,spatialReference:g}=t;for(let n=0;n<p.length;++n){const e=p[n],{objectId:t}=e,i="number"==typeof t?null===l||void 0===l?void 0:l.get(t):void 0;if(null==i)continue;const{graphics3DSymbol:r}=i;r.symbologySnappingSupported&&(a.push(h(e,i)),u.push(n))}if(0===a.length)return o;const f=await Promise.all(a);(0,n.Te)(i);const y=[],v=[];for(let n=0;n<f.length;++n){const e=f[n],t=u[n];for(const i of e)y.push(i),v.push(t)}return{candidates:y,sourceCandidateIndices:v}}const o={candidates:[],sourceCandidateIndices:[]}},40200:(e,t,i)=>{i.d(t,{V:()=>s});var n=i(45417),r=i(39483);function s(e){const t=e.view.spatialReference,i=e.layer.fullExtent,s=null!=i&&i.spatialReference;if(null==i||!s)return Promise.resolve(null);if(s.equals(t))return Promise.resolve(i.clone());const o=(0,n.Cv)(i,t);return null!=o?Promise.resolve(o):e.view.state.isLocal?(0,r.projectGeometry)(i,t,e.layer.portalItem).then((t=>!e.destroyed&&t?t:null)).catch((()=>null)):Promise.resolve(null)}},91196:(e,t,i)=>{i.d(t,{A:()=>g});var n=i(35143),r=i(91967),s=i(54099),o=i(5632),l=i(76460),a=i(30726),u=i(91291),c=i(46053),d=(i(81806),i(47249),i(85842)),h=i(19451);let p=class extends((0,o.sA)((0,u.g)(s.A.EventedMixin(r.A)))){constructor(e){super(e),this._updatingHandles=new h.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",n=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";l.A.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(n,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,a.pR)(this._updatingHandles)}get fullOpacity(){var e,t,i,n;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(n=this.parent)||void 0===n?void 0:n.fullOpacity)&&void 0!==i?i:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};return null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,n._)([(0,c.MZ)()],p.prototype,"fullOpacity",null),(0,n._)([(0,c.MZ)()],p.prototype,"layer",void 0),(0,n._)([(0,c.MZ)()],p.prototype,"parent",void 0),(0,n._)([(0,c.MZ)({readOnly:!0})],p.prototype,"suspended",null),(0,n._)([(0,c.MZ)({readOnly:!0})],p.prototype,"suspendInfo",null),(0,n._)([(0,c.MZ)({readOnly:!0})],p.prototype,"legendEnabled",null),(0,n._)([(0,c.MZ)({type:Boolean,readOnly:!0})],p.prototype,"updating",null),(0,n._)([(0,c.MZ)({readOnly:!0})],p.prototype,"updatingProgress",null),(0,n._)([(0,c.MZ)()],p.prototype,"visible",null),(0,n._)([(0,c.MZ)()],p.prototype,"view",void 0),p=(0,n._)([(0,d.$)("esri.views.layers.LayerView")],p);const g=p},76718:(e,t,i)=>{i.d(t,{g:()=>u});var n=i(18690),r=i(76460),s=i(78393),o=i(61678),l=i(93345);const a=()=>r.A.getLogger("esri.views.webgl.BufferObject");class u{static createIndex(e,t,i){return new u(e,l.NZ.ELEMENT_ARRAY_BUFFER,t,i)}static createVertex(e,t,i){return new u(e,l.NZ.ARRAY_BUFFER,t,i)}static createUniform(e,t,i){return new u(e,l.NZ.UNIFORM_BUFFER,t,i)}static createPixelPack(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l._U.STREAM_READ,i=arguments.length>2?arguments[2]:void 0;const n=new u(e,l.NZ.PIXEL_PACK_BUFFER,t);return i&&n.setSize(i),n}static createPixelUnpack(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l._U.STREAM_DRAW,i=arguments.length>2?arguments[2]:void 0;return new u(e,l.NZ.PIXEL_UNPACK_BUFFER,t,i)}static createTransformFeedback(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l._U.STATIC_DRAW,i=arguments.length>2?arguments[2]:void 0;const n=new u(e,l.NZ.TRANSFORM_FEEDBACK_BUFFER,t);return n.setSize(i),n}constructor(e,t,i,n){this._context=e,this.bufferType=t,this.usage=i,this._glName=null,this._size=-1,this._indexType=void 0,e.instanceCounter.increment(l.vt.BufferObject,this),this._glName=this._context.gl.createBuffer(),(0,o.Y2)(this._context.gl),n&&this.setData(n)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get usedMemory(){return this.bufferType===l.NZ.ELEMENT_ARRAY_BUFFER?this._indexType===l.pe.UNSIGNED_INT?4*this._size:2*this._size:this._size}get _isVAOAware(){return this.bufferType===l.NZ.ELEMENT_ARRAY_BUFFER||this.bufferType===l.NZ.ARRAY_BUFFER}dispose(){var e;null!==(e=this._context)&&void 0!==e&&e.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(l.vt.BufferObject,this),this._context=null):this._glName&&a().warn("Leaked WebGL buffer object")}setSize(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(e<=0&&a().error("Buffer size needs to be positive!"),this.bufferType===l.NZ.ELEMENT_ARRAY_BUFFER&&null!=t)switch(this._indexType=t,t){case l.pe.UNSIGNED_SHORT:e*=2;break;case l.pe.UNSIGNED_INT:e*=4}this._setBufferData(e)}setData(e){if(!e)return;let t=e.byteLength;this.bufferType===l.NZ.ELEMENT_ARRAY_BUFFER&&((0,s.jq)(e)&&(t/=2,this._indexType=l.pe.UNSIGNED_SHORT),(0,s.XJ)(e)&&(t/=4,this._indexType=l.pe.UNSIGNED_INT)),this._setBufferData(t,e)}_setBufferData(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._size=e;const i=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const n=this._context.gl;null!=t?n.bufferData(this.bufferType,t,this.usage):n.bufferData(this.bufferType,e,this.usage),(0,o.Y2)(n),this._isVAOAware&&this._context.bindVAO(i)}setSubData(e,t,i,n){if(!e)return;(t<0||t*e.BYTES_PER_ELEMENT>=this.usedMemory)&&a().error("offset is out of range!"),i>=n&&a().error("end must be bigger than start!"),(t+(n-i))*e.BYTES_PER_ELEMENT>this.usedMemory&&a().error("An attempt to write beyond the end of the buffer!");const r=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const{gl:s}=this._context;s.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,e,i,n-i),(0,o.Y2)(s),this._isVAOAware&&this._context.bindVAO(r)}getSubData(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;if(i<0||r<0)return void a().error("Problem getting subdata: offset and length were less than zero!");const s=function(e){return(0,n.Xj)(e)}(e)?e.BYTES_PER_ELEMENT:1;if(s*((null!==i&&void 0!==i?i:0)+(null!==r&&void 0!==r?r:0))>e.byteLength)return void a().error("Problem getting subdata: offset and length exceeded destination size!");t+s*(null!==r&&void 0!==r?r:0)>this.usedMemory&&a().warn("Potential problem getting subdata: requested data exceeds buffer size!");const o=this._context.gl;this.bufferType===l.NZ.TRANSFORM_FEEDBACK_BUFFER?(this._context.bindBuffer(this,l.NZ.TRANSFORM_FEEDBACK_BUFFER),o.getBufferSubData(l.NZ.TRANSFORM_FEEDBACK_BUFFER,t,e,i,r),this._context.unbindBuffer(l.NZ.TRANSFORM_FEEDBACK_BUFFER)):(this._context.bindBuffer(this,l.NZ.COPY_READ_BUFFER),o.getBufferSubData(l.NZ.COPY_READ_BUFFER,t,e,i,r),this._context.unbindBuffer(l.NZ.COPY_READ_BUFFER))}async getSubDataAsync(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;await this._context.clientWaitAsync(),this.getSubData(e,t,i,n)}}},21812:(e,t,i)=>{i.d(t,{_:()=>n});class n{constructor(e,t,i,n,r){let s=arguments.length>5&&void 0!==arguments[5]&&arguments[5],o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;this.name=e,this.count=t,this.type=i,this.offset=n,this.stride=r,this.normalized=s,this.divisor=o}}}}]);
//# sourceMappingURL=77096.a6fcb6ae.chunk.js.map