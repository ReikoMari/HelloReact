"use strict";(self.webpackChunkhelloworld=self.webpackChunkhelloworld||[]).push([[18242],{86236:(e,t,i)=>{i.d(t,{Zn:()=>n,aZ:()=>o,lh:()=>a,nA:()=>l,p3:()=>s,r9:()=>u});var r=i(73103);function a(e,t){if(null==e)return null;const i={},a=new RegExp("^".concat(t),"i");for(const s of Object.keys(e))if(a.test(s)){const a=s.substring(t.length);i[r.et.fromJSON(a)]=e[s]}return i}function s(e,t,i){if(null!=e){t.attributes||(t.attributes={});for(const a in e){const s=r.et.toJSON(a);t.attributes["".concat(i).concat(s)]=e[a]}}}function o(e){const t={};for(const i of Object.keys(e)){const a=i;t[r.et.fromJSON(a)]=e[i]}return t}function l(e){const t={};for(const i of Object.keys(e)){const a=i;t[r.et.toJSON(a)]=e[i]}return t}function n(e,t){return null==e||null==t?null:Math.round((e-t)/6e4)}function u(e){var t,i,r;const a=e.toJSON(),s=a;return s.accumulateAttributeNames&&(s.accumulateAttributeNames=null===(t=a.accumulateAttributeNames)||void 0===t?void 0:t.join()),s.attributeParameterValues&&(s.attributeParameterValues=JSON.stringify(a.attributeParameterValues)),s.barriers&&(s.barriers=JSON.stringify(a.barriers)),s.outSR&&(s.outSR=null===(i=a.outSR)||void 0===i?void 0:i.wkid),s.overrides&&(s.overrides=JSON.stringify(a.overrides)),s.polygonBarriers&&(s.polygonBarriers=JSON.stringify(a.polygonBarriers)),s.polylineBarriers&&(s.polylineBarriers=JSON.stringify(a.polylineBarriers)),s.restrictionAttributeNames&&(s.restrictionAttributeNames=null===(r=a.restrictionAttributeNames)||void 0===r?void 0:r.join()),s.stops&&(s.stops=JSON.stringify(a.stops)),s.travelMode&&(s.travelMode=JSON.stringify(a.travelMode)),s}},75747:(e,t,i)=>{i.d(t,{A:()=>y});var r,a=i(35143),s=i(39356),o=i(16868),l=i(95444),n=i(69098),u=i(42553),d=i(46053),p=(i(81806),i(76460),i(47249),i(28379)),m=i(85842),c=i(17707),b=i(13904),v=i(86236),h=i(73103);let T=r=class extends((0,n.O)(u.oY)){constructor(e){super(e),this.arriveCurbApproach=null,this.arriveTime=null,this.arriveTimeOffset=null,this.bearing=null,this.bearingTol=null,this.cumulativeCosts=null,this.cumulativeDistance=null,this.cumulativeDuration=null,this.curbApproach=null,this.departCurbApproach=null,this.departTime=null,this.departTimeOffset=null,this.distanceToNetworkInMeters=null,this.geometry=null,this.lateDuration=null,this.locationType=null,this.name=null,this.navLatency=null,this.objectId=null,this.popupTemplate=null,this.posAlong=null,this.routeName=null,this.serviceCosts=null,this.serviceDistance=null,this.serviceDuration=null,this.sequence=null,this.sideOfEdge=null,this.snapX=null,this.snapY=null,this.snapZ=null,this.sourceId=null,this.sourceOid=null,this.status=null,this.symbol=null,this.timeWindowEnd=null,this.timeWindowEndOffset=null,this.timeWindowStart=null,this.timeWindowStartOffset=null,this.type="stop",this.violations=null,this.waitDuration=null,this.wait=null}readArriveTimeOffset(e,t){return(0,v.Zn)(t.attributes.ArriveTime,t.attributes.ArriveTimeUTC)}readCumulativeCosts(e,t){return(0,v.lh)(t.attributes,"Cumul_")}readDepartTimeOffset(e,t){return(0,v.Zn)(t.attributes.DepartTime,t.attributes.DepartTimeUTC)}readServiceCosts(e,t){return(0,v.lh)(t.attributes,"Attr_")}writeServiceCosts(e,t){(0,v.p3)(e,t,"Attr_")}writeTimeWindowEnd(e,t){null!=e&&(t.attributes||(t.attributes={}),t.attributes.TimeWindowEnd=e.getTime())}writeTimeWindowStart(e,t){null!=e&&(t.attributes||(t.attributes={}),t.attributes.TimeWindowStart=e.getTime())}readViolations(e,t){return(0,v.lh)(t.attributes,"Violation_")}readWait(e,t){return(0,v.lh)(t.attributes,"Wait_")}static fromGraphic(e){var t,i,a,s,o,l,n,u,d,p,m;return new r({arriveCurbApproach:null!=e.attributes.ArrivalCurbApproach?h.JJ.fromJSON(e.attributes.ArrivalCurbApproach):null,arriveTime:null!=e.attributes.ArrivalTime?new Date(e.attributes.ArrivalTime):null,arriveTimeOffset:e.attributes.ArrivalUTCOffset,cumulativeCosts:null!=e.attributes.CumulativeCosts?(0,v.aZ)(JSON.parse(e.attributes.CumulativeCosts)):null,cumulativeDistance:null!==(t=e.attributes.CumulativeMeters)&&void 0!==t?t:null,cumulativeDuration:null!==(i=e.attributes.CumulativeMinutes)&&void 0!==i?i:null,curbApproach:null!=e.attributes.CurbApproach?h.JJ.fromJSON(e.attributes.CurbApproach):null,departCurbApproach:null!=e.attributes.DepartureCurbApproach?h.JJ.fromJSON(e.attributes.DepartureCurbApproach):null,departTime:null!=e.attributes.DepartureTime?new Date(e.attributes.DepartureTime):null,departTimeOffset:null!==(a=e.attributes.DepartureUTCOffset)&&void 0!==a?a:null,geometry:e.geometry,lateDuration:null!==(s=e.attributes.LateMinutes)&&void 0!==s?s:null,locationType:null!=e.attributes.LocationType?h.EM.fromJSON(e.attributes.LocationType):null,name:e.attributes.Name,objectId:null!==(o=e.attributes.ObjectID)&&void 0!==o?o:e.attributes.__OBJECTID,popupTemplate:e.popupTemplate,routeName:e.attributes.RouteName,sequence:null!==(l=e.attributes.Sequence)&&void 0!==l?l:null,serviceCosts:null!=e.attributes.ServiceCosts?(0,v.aZ)(JSON.parse(e.attributes.ServiceCosts)):null,serviceDistance:null!==(n=e.attributes.ServiceMeters)&&void 0!==n?n:null,serviceDuration:null!==(u=e.attributes.ServiceMinutes)&&void 0!==u?u:null,status:null!=e.attributes.Status?h.$r.fromJSON(e.attributes.Status):null,symbol:e.symbol,timeWindowEnd:null!=e.attributes.TimeWindowEnd?new Date(e.attributes.TimeWindowEnd):null,timeWindowEndOffset:null!==(d=e.attributes.TimeWindowEndUTCOffset)&&void 0!==d?d:null,timeWindowStart:null!=e.attributes.TimeWindowStart?new Date(e.attributes.TimeWindowStart):null,timeWindowStartOffset:null!==(p=e.attributes.TimeWindowStartUTCOffset)&&void 0!==p?p:null,waitDuration:null!==(m=e.attributes.WaitMinutes)&&void 0!==m?m:null})}toGraphic(){var e,t;const i={ObjectID:this.objectId,ArrivalCurbApproach:null!=this.arriveCurbApproach?h.JJ.toJSON(this.arriveCurbApproach):null,ArrivalTime:null!=this.arriveTime?this.arriveTime.getTime():null,ArrivalUTCOffset:this.arriveTimeOffset,CumulativeCosts:null!=this.cumulativeCosts?JSON.stringify((0,v.nA)(this.cumulativeCosts)):null,CumulativeMeters:this.cumulativeDistance,CumulativeMinutes:this.cumulativeDuration,CurbApproach:null!=this.curbApproach?h.JJ.toJSON(this.curbApproach):null,DepartureCurbApproach:null!=this.departCurbApproach?h.JJ.toJSON(this.departCurbApproach):null,DepartureTime:null!=this.departTime?this.departTime.getTime():null,DepartureUTCOffset:this.departTimeOffset,LateMinutes:this.lateDuration,LocationType:null!=this.locationType?h.EM.toJSON(this.locationType):null,Name:this.name,RouteName:this.routeName,Sequence:this.sequence,ServiceCosts:null!=this.serviceCosts?JSON.stringify((0,v.nA)(this.serviceCosts)):null,ServiceMeters:this.serviceDistance,ServiceMinutes:this.serviceDuration,Status:null!=this.status?h.$r.toJSON(this.status):null,TimeWindowEnd:null!=this.timeWindowEnd?this.timeWindowEnd.getTime():null,TimeWindowEndUTCOffset:null!==(e=this.timeWindowEndOffset)&&void 0!==e?e:this.arriveTimeOffset,TimeWindowStart:null!=this.timeWindowStart?this.timeWindowStart.getTime():null,TimeWindowStartUTCOffset:null!==(t=this.timeWindowStartOffset)&&void 0!==t?t:this.arriveTimeOffset,WaitMinutes:this.waitDuration};return new s.A({geometry:this.geometry,attributes:i,symbol:this.symbol,popupTemplate:this.popupTemplate})}};T.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID",editable:!1,nullable:!1,domain:null},{name:"ArrivalCurbApproach",alias:"Arrival Curb Approach",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0,domain:{type:"codedValue",name:"esriNACurbApproachType",codedValues:[{name:"Either side",code:0},{name:"From the right",code:1},{name:"From the left",code:2},{name:"Depart in the same direction",code:3}]}},{name:"ArrivalTime",alias:"Arrival Time",type:"esriFieldTypeDate",length:36,editable:!0,nullable:!0,visible:!0},{name:"ArrivalUTCOffset",alias:"Arrival Time: Offset from UTC in Minutes",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"CumulativeCosts",alias:"Cumulative Costs",type:"esriFieldTypeString",length:1048576,editable:!0,nullable:!0,visible:!1,domain:null},{name:"CumulativeMeters",alias:"Cumulative Meters",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!0},{name:"CumulativeMinutes",alias:"Cumulative Minutes",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!0},{name:"CurbApproach",alias:"Curb Approach",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!1,domain:{type:"codedValue",name:"esriNACurbApproachType",codedValues:[{name:"Either side",code:0},{name:"From the right",code:1},{name:"From the left",code:2},{name:"Depart in the same direction",code:3}]}},{name:"DepartureCurbApproach",alias:"Departure Curb Approach",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0,domain:{type:"codedValue",name:"esriNACurbApproachType",codedValues:[{name:"Either side",code:0},{name:"From the right",code:1},{name:"From the left",code:2},{name:"Depart in the same direction",code:3}]}},{name:"DepartureTime",alias:"Departure Time",type:"esriFieldTypeDate",length:36,editable:!0,nullable:!0,visible:!0},{name:"DepartureUTCOffset",alias:"Departure Time: Offset from UTC in Minutes",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"LateMinutes",alias:"Minutes Late",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!1},{name:"LocationType",alias:"Location Type",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0,domain:{type:"codedValue",name:"esriNALocationType",codedValues:[{name:"Stop",code:0},{name:"Waypoint",code:1}]}},{name:"Name",alias:"Name",type:"esriFieldTypeString",length:255,editable:!0,nullable:!0,visible:!0},{name:"RouteName",alias:"Route Name",type:"esriFieldTypeString",length:255,editable:!0,nullable:!0,visible:!0},{name:"Sequence",alias:"Sequence",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"ServiceCosts",alias:"Service Costs",type:"esriFieldTypeString",length:1048576,editable:!0,nullable:!0,visible:!1,domain:null},{name:"ServiceMeters",alias:"Service Meters",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!1},{name:"ServiceMinutes",alias:"Service Minutes",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!1},{name:"Status",alias:"Status",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0,domain:{type:"codedValue",name:"esriNAObjectStatus",codedValues:[{name:"OK",code:0},{name:"Not Located on Network",code:1},{name:"Network Unbuilt",code:2},{name:"Prohibited Street",code:3},{name:"Invalid Field Values",code:4},{name:"Cannot Reach",code:5},{name:"Time Window Violation",code:6}]}},{name:"TimeWindowEnd",alias:"Time Window End",type:"esriFieldTypeDate",length:36,editable:!0,nullable:!0,visible:!1},{name:"TimeWindowEndUTCOffset",alias:"Time Window End: Offset from UTC in Minutes",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"TimeWindowStart",alias:"Time Window Start",type:"esriFieldTypeDate",length:36,editable:!0,nullable:!0,visible:!1},{name:"TimeWindowStartUTCOffset",alias:"Time Window Start: Offset from UTC in Minutes",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"WaitMinutes",alias:"Minutes Early",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!1}],T.popupInfo={title:"{Name}",fieldInfos:[{fieldName:"Name",label:"Name",isEditable:!0,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"RouteName",label:"Route Name",isEditable:!0,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"Sequence",label:"Sequence",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"ArrivalTime",label:"Arrival Time",isEditable:!0,tooltip:"",visible:!0,format:{dateFormat:"shortDateShortTime24"},stringFieldOption:"textbox"},{fieldName:"ArrivalUTCOffset",label:"Arrival Time: Offset from UTC in Minutes",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"DepartureTime",label:"Departure Time",isEditable:!0,tooltip:"",visible:!0,format:{dateFormat:"shortDateShortTime24"},stringFieldOption:"textbox"},{fieldName:"DepartureUTCOffset",label:"Departure Time: Offset from UTC in Minutes",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"CurbApproach",label:"Curb Approach",isEditable:!0,tooltip:"",visible:!1,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"ArrivalCurbApproach",label:"Arrival Curb Approach",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"DepartureCurbApproach",label:"Departure Curb Approach",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"Status",label:"Status",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"LocationType",label:"Location Type",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"TimeWindowStart",label:"Time Window Start",isEditable:!0,tooltip:"",visible:!1,format:{dateFormat:"shortDateShortTime24"},stringFieldOption:"textbox"},{fieldName:"TimeWindowStartUTCOffset",label:"Time Window Start: Offset from UTC in Minutes",isEditable:!1,tooltip:"",visible:!1,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"TimeWindowEnd",label:"Time Window End",isEditable:!0,tooltip:"",visible:!1,format:{dateFormat:"shortDateShortTime24"},stringFieldOption:"textbox"},{fieldName:"TimeWindowEndUTCOffset",label:"Time Window End: Offset from UTC in Minutes",isEditable:!1,tooltip:"",visible:!1,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"ServiceMinutes",label:"Service Minutes",isEditable:!0,tooltip:"",visible:!1,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"ServiceMeters",label:"Service Meters",isEditable:!0,tooltip:"",visible:!1,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"ServiceCosts",label:"Service Costs",isEditable:!0,tooltip:"",visible:!1,stringFieldOption:"textbox"},{fieldName:"CumulativeMinutes",label:"Cumulative Minutes",isEditable:!1,tooltip:"",visible:!0,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"CumulativeMeters",label:"Cumulative Meters",isEditable:!1,tooltip:"",visible:!0,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"CumulativeCosts",label:"Cumulative Costs",isEditable:!0,tooltip:"",visible:!1,stringFieldOption:"textbox"},{fieldName:"LateMinutes",label:"Minutes Late",isEditable:!1,tooltip:"",visible:!1,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"WaitMinutes",label:"Minutes Early",isEditable:!1,tooltip:"",visible:!1,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"}],description:null,showAttachments:!1,mediaInfos:[]},(0,a._)([(0,d.MZ)({type:h.JJ.apiValues,json:{read:{source:"attributes.ArrivalCurbApproach",reader:h.JJ.read}}})],T.prototype,"arriveCurbApproach",void 0),(0,a._)([(0,d.MZ)({type:Date,json:{read:{source:"attributes.ArriveTimeUTC"}}})],T.prototype,"arriveTime",void 0),(0,a._)([(0,d.MZ)()],T.prototype,"arriveTimeOffset",void 0),(0,a._)([(0,p.w)("arriveTimeOffset",["attributes.ArriveTime","attributes.ArriveTimeUTC"])],T.prototype,"readArriveTimeOffset",null),(0,a._)([(0,d.MZ)({json:{name:"attributes.Bearing",read:!1,write:!0}})],T.prototype,"bearing",void 0),(0,a._)([(0,d.MZ)({json:{name:"attributes.BearingTol",read:!1,write:!0}})],T.prototype,"bearingTol",void 0),(0,a._)([(0,d.MZ)()],T.prototype,"cumulativeCosts",void 0),(0,a._)([(0,p.w)("cumulativeCosts",["attributes"])],T.prototype,"readCumulativeCosts",null),(0,a._)([(0,d.MZ)()],T.prototype,"cumulativeDistance",void 0),(0,a._)([(0,d.MZ)()],T.prototype,"cumulativeDuration",void 0),(0,a._)([(0,d.MZ)({type:h.JJ.apiValues,json:{name:"attributes.CurbApproach",read:{reader:h.JJ.read},write:{writer:h.JJ.write}}})],T.prototype,"curbApproach",void 0),(0,a._)([(0,d.MZ)({type:h.JJ.apiValues,json:{read:{source:"attributes.DepartCurbApproach",reader:h.JJ.read}}})],T.prototype,"departCurbApproach",void 0),(0,a._)([(0,d.MZ)({type:Date,json:{read:{source:"attributes.DepartTimeUTC"}}})],T.prototype,"departTime",void 0),(0,a._)([(0,d.MZ)()],T.prototype,"departTimeOffset",void 0),(0,a._)([(0,p.w)("departTimeOffset",["attributes.DepartTime","attributes.DepartTimeUTC"])],T.prototype,"readDepartTimeOffset",null),(0,a._)([(0,d.MZ)({json:{read:{source:"attributes.DistanceToNetworkInMeters"}}})],T.prototype,"distanceToNetworkInMeters",void 0),(0,a._)([(0,d.MZ)({type:b.A,json:{write:!0}})],T.prototype,"geometry",void 0),(0,a._)([(0,d.MZ)()],T.prototype,"lateDuration",void 0),(0,a._)([(0,d.MZ)({type:h.EM.apiValues,json:{name:"attributes.LocationType",read:{reader:h.EM.read},write:{writer:h.EM.write}}})],T.prototype,"locationType",void 0),(0,a._)([(0,d.MZ)({json:{name:"attributes.Name"}})],T.prototype,"name",void 0),(0,a._)([(0,d.MZ)({json:{name:"attributes.NavLatency",read:!1,write:!0}})],T.prototype,"navLatency",void 0),(0,a._)([(0,d.MZ)({json:{name:"attributes.ObjectID"}})],T.prototype,"objectId",void 0),(0,a._)([(0,d.MZ)({type:o.A})],T.prototype,"popupTemplate",void 0),(0,a._)([(0,d.MZ)({json:{read:{source:"attributes.PosAlong"}}})],T.prototype,"posAlong",void 0),(0,a._)([(0,d.MZ)({json:{name:"attributes.RouteName"}})],T.prototype,"routeName",void 0),(0,a._)([(0,d.MZ)()],T.prototype,"serviceCosts",void 0),(0,a._)([(0,p.w)("serviceCosts",["attributes"])],T.prototype,"readServiceCosts",null),(0,a._)([(0,c.K)("serviceCosts")],T.prototype,"writeServiceCosts",null),(0,a._)([(0,d.MZ)()],T.prototype,"serviceDistance",void 0),(0,a._)([(0,d.MZ)()],T.prototype,"serviceDuration",void 0),(0,a._)([(0,d.MZ)({json:{name:"attributes.Sequence"}})],T.prototype,"sequence",void 0),(0,a._)([(0,d.MZ)({type:h.mt.apiValues,json:{read:{source:"attributes.SideOfEdge",reader:h.mt.read}}})],T.prototype,"sideOfEdge",void 0),(0,a._)([(0,d.MZ)({json:{read:{source:"attributes.SnapX"}}})],T.prototype,"snapX",void 0),(0,a._)([(0,d.MZ)({json:{read:{source:"attributes.SnapY"}}})],T.prototype,"snapY",void 0),(0,a._)([(0,d.MZ)({json:{read:{source:"attributes.SnapZ"}}})],T.prototype,"snapZ",void 0),(0,a._)([(0,d.MZ)({json:{read:{source:"attributes.SourceID"}}})],T.prototype,"sourceId",void 0),(0,a._)([(0,d.MZ)({json:{read:{source:"attributes.SourceOID"}}})],T.prototype,"sourceOid",void 0),(0,a._)([(0,d.MZ)({type:h.$r.apiValues,json:{read:{source:"attributes.Status",reader:h.$r.read}}})],T.prototype,"status",void 0),(0,a._)([(0,d.MZ)({types:l.Es})],T.prototype,"symbol",void 0),(0,a._)([(0,d.MZ)({type:Date,json:{name:"attributes.TimeWindowEnd"}})],T.prototype,"timeWindowEnd",void 0),(0,a._)([(0,c.K)("timeWindowEnd")],T.prototype,"writeTimeWindowEnd",null),(0,a._)([(0,d.MZ)()],T.prototype,"timeWindowEndOffset",void 0),(0,a._)([(0,d.MZ)({type:Date,json:{name:"attributes.TimeWindowStart"}})],T.prototype,"timeWindowStart",void 0),(0,a._)([(0,c.K)("timeWindowStart")],T.prototype,"writeTimeWindowStart",null),(0,a._)([(0,d.MZ)()],T.prototype,"timeWindowStartOffset",void 0),(0,a._)([(0,d.MZ)({readOnly:!0,json:{read:!1}})],T.prototype,"type",void 0),(0,a._)([(0,d.MZ)()],T.prototype,"violations",void 0),(0,a._)([(0,p.w)("violations",["attributes"])],T.prototype,"readViolations",null),(0,a._)([(0,d.MZ)()],T.prototype,"waitDuration",void 0),(0,a._)([(0,d.MZ)()],T.prototype,"wait",void 0),(0,a._)([(0,p.w)("wait",["attributes"])],T.prototype,"readWait",null),T=r=(0,a._)([(0,m.$)("esri.rest.support.Stop")],T);const y=T},41344:(e,t,i)=>{i.d(t,{A:()=>c});var r=i(35143),a=i(69098),s=i(42553),o=i(46053),l=(i(81806),i(76460),i(47249),i(6409)),n=i(28379),u=i(85842),d=i(17707),p=i(73103);let m=class extends((0,a.O)(s.oY)){constructor(e){super(e),this.attributeParameterValues=null,this.description=null,this.distanceAttributeName=null,this.id=null,this.impedanceAttributeName=null,this.name=null,this.restrictionAttributeNames=null,this.simplificationTolerance=null,this.simplificationToleranceUnits=null,this.timeAttributeName=null,this.type=null,this.useHierarchy=null,this.uturnAtJunctions=null}readId(e,t){var i,r;return null!==(i=null!==(r=t.id)&&void 0!==r?r:t.itemId)&&void 0!==i?i:null}readRestrictionAttributes(e,t){const{restrictionAttributeNames:i}=t;return null==i?null:i.map((e=>p.OC.fromJSON(e)))}writeRestrictionAttributes(e,t,i){null!=e&&(t[i]=e.map((e=>p.OC.toJSON(e))))}};(0,r._)([(0,o.MZ)({type:[Object],json:{write:!0}})],m.prototype,"attributeParameterValues",void 0),(0,r._)([(0,o.MZ)({type:String,json:{write:!0}})],m.prototype,"description",void 0),(0,r._)([(0,l.e)(p.dd,{ignoreUnknown:!1})],m.prototype,"distanceAttributeName",void 0),(0,r._)([(0,o.MZ)({type:String,json:{write:!0}})],m.prototype,"id",void 0),(0,r._)([(0,n.w)("id",["id","itemId"])],m.prototype,"readId",null),(0,r._)([(0,l.e)(p.et,{ignoreUnknown:!1})],m.prototype,"impedanceAttributeName",void 0),(0,r._)([(0,o.MZ)({type:String,json:{write:!0}})],m.prototype,"name",void 0),(0,r._)([(0,o.MZ)({type:[String],json:{write:!0}})],m.prototype,"restrictionAttributeNames",void 0),(0,r._)([(0,n.w)("restrictionAttributeNames")],m.prototype,"readRestrictionAttributes",null),(0,r._)([(0,d.K)("restrictionAttributeNames")],m.prototype,"writeRestrictionAttributes",null),(0,r._)([(0,o.MZ)({type:Number,json:{write:{allowNull:!0}}})],m.prototype,"simplificationTolerance",void 0),(0,r._)([(0,l.e)(p.hY)],m.prototype,"simplificationToleranceUnits",void 0),(0,r._)([(0,l.e)(p.Mm,{ignoreUnknown:!1})],m.prototype,"timeAttributeName",void 0),(0,r._)([(0,l.e)(p.ow)],m.prototype,"type",void 0),(0,r._)([(0,o.MZ)({type:Boolean,json:{write:!0}})],m.prototype,"useHierarchy",void 0),(0,r._)([(0,l.e)(p.hE)],m.prototype,"uturnAtJunctions",void 0),m=(0,r._)([(0,u.$)("esri.rest.support.TravelMode")],m);const c=m},73103:(e,t,i)=>{i.d(t,{$n:()=>f,$r:()=>c,EM:()=>m,Ec:()=>D,JJ:()=>p,Mm:()=>g,OC:()=>N,Sr:()=>n,Vj:()=>w,WU:()=>C,Z7:()=>s,_6:()=>T,aJ:()=>l,dd:()=>A,dn:()=>o,et:()=>S,fe:()=>h,gD:()=>y,hE:()=>u,hY:()=>a,iM:()=>v,mt:()=>b,ow:()=>d,vS:()=>O});var r=i(45802);const a=(0,r.O)()({esriCentimeters:"centimeters",esriDecimalDegrees:"decimal-degrees",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriPoints:"points",esriUnknownUnits:"unknown",esriYards:"yards"}),s=(0,r.O)()({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards"}),o=((0,r.O)()({esriNAUDays:"days",esriNAUHours:"hours",esriNAUMinutes:"minutes",esriNAUSeconds:"seconds"}),(0,r.O)()({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards",esriNAUDays:"days",esriNAUHours:"hours",esriNAUMinutes:"minutes",esriNAUSeconds:"seconds",esriNAUKilometersPerHour:"kilometers-per-hour",esriNAUMilesPerHour:"miles-per-hour",esriNAUUnknown:"unknown"})),l=(0,r.O)()({esriDOTComplete:"complete",esriDOTCompleteNoEvents:"complete-no-events",esriDOTFeatureSets:"featuresets",esriDOTInstructionsOnly:"instructions-only",esriDOTStandard:"standard",esriDOTSummaryOnly:"summary-only"}),n=(0,r.O)()({esriNAOutputLineNone:"none",esriNAOutputLineStraight:"straight",esriNAOutputLineTrueShape:"true-shape",esriNAOutputLineTrueShapeWithMeasure:"true-shape-with-measure"}),u=((0,r.O)()({esriNAOutputPolygonNone:"none",esriNAOutputPolygonSimplified:"simplified",esriNAOutputPolygonDetailed:"detailed"}),(0,r.O)()({esriNFSBAllowBacktrack:"allow-backtrack",esriNFSBAtDeadEndsOnly:"at-dead-ends-only",esriNFSBNoBacktrack:"no-backtrack",esriNFSBAtDeadEndsAndIntersections:"at-dead-ends-and-intersections"})),d=((0,r.O)()({esriNATravelDirectionFromFacility:"from-facility",esriNATravelDirectionToFacility:"to-facility"}),(0,r.O)()({esriNATimeOfDayNotUsed:"not-used",esriNATimeOfDayUseAsStartTime:"start",esriNATimeOfDayUseAsEndTime:"end"}),(0,r.O)()({AUTOMOBILE:"automobile",TRUCK:"truck",WALK:"walk",OTHER:"other"})),p=(0,r.O)()({0:"either-side-of-vehicle",1:"right-side-of-vehicle",2:"left-side-of-vehicle",3:"no-u-turn"},{useNumericKeys:!0}),m=(0,r.O)()({0:"stop",1:"waypoint",2:"break"},{useNumericKeys:!0}),c=(0,r.O)()({0:"ok",1:"not-located",2:"network-element-not-located",3:"element-not-traversable",4:"invalid-field-values",5:"not-reached",6:"time-window-violation",7:"not-located-on-closest"},{useNumericKeys:!0}),b=(0,r.O)()({1:"right",2:"left"},{useNumericKeys:!0}),v=(0,r.O)()({0:"restriction",1:"scaled-cost",2:"added-cost"},{useNumericKeys:!0}),h=(0,r.O)()({0:"permit",1:"restrict"},{useNumericKeys:!0}),T=(0,r.O)()({1:"header",50:"arrive",51:"depart",52:"straight",100:"on-ferry",101:"off-ferry",102:"central-fork",103:"roundabout",104:"u-turn",150:"door",151:"stairs",152:"elevator",153:"escalator",154:"pedestrian-ramp",200:"left-fork",201:"left-ramp",202:"clockwise-roundabout",203:"left-handed-u-turn",204:"bear-left",205:"left-turn",206:"sharp-left",207:"left-turn-and-immediate-left-turn",208:"left-turn-and-immediate-right-turn",300:"right-fork",301:"right-ramp",302:"counter-clockwise-roundabout",303:"right-handed-u-turn",304:"bear-right",305:"right-turn",306:"sharp-right",307:"right-turn-and-immediate-left-turn",308:"right-turn-and-immediate-right-turn",400:"up-elevator",401:"up-escalator",402:"up-stairs",500:"down-elevator",501:"down-escalator",502:"down-stairs",1e3:"general-event",1001:"landmark",1002:"time-zone-change",1003:"traffic-event",1004:"scaled-cost-barrier-event",1005:"boundary-crossing",1006:"restriction-violation",1007:"lane"},{useNumericKeys:!0}),y=(0,r.O)()({0:"unknown",1:"segment",2:"maneuver-segment",3:"restriction-violation",4:"scaled-cost-barrier",5:"heavy-traffic",6:"slow-traffic",7:"moderate-traffic"},{useNumericKeys:!0}),f=(0,r.O)()({"NA Campus":"campus","NA Desktop":"desktop","NA Navigation":"navigation"}),A=(0,r.O)()({Kilometers:"kilometers",Miles:"miles",Meters:"meters"},{ignoreUnknown:!1}),g=(0,r.O)()({Minutes:"minutes",TimeAt1KPH:"time-at-1-kph",TravelTime:"travel-time",TruckMinutes:"truck-minutes",TruckTravelTime:"truck-travel-time",WalkTime:"walk-time"},{ignoreUnknown:!1}),S=(0,r.O)()({Kilometers:"kilometers",Miles:"miles",Meters:"meters",Minutes:"minutes",TimeAt1KPH:"time-at-1-kph",TravelTime:"travel-time",TruckMinutes:"truck-minutes",TruckTravelTime:"truck-travel-time",WalkTime:"walk-time"},{ignoreUnknown:!1}),N=(0,r.O)()({"Any Hazmat Prohibited":"any-hazmat-prohibited","Avoid Carpool Roads":"avoid-carpool-roads","Avoid Express Lanes":"avoid-express-lanes","Avoid Ferries":"avoid-ferries","Avoid Gates":"avoid-gates","Avoid Limited Access Roads":"avoid-limited-access-roads","Avoid Private Roads":"avoid-private-roads","Avoid Roads Unsuitable for Pedestrians":"avoid-roads-unsuitable-for-pedestrians","Avoid Stairways":"avoid-stairways","Avoid Toll Roads":"avoid-toll-roads","Avoid Toll Roads for Trucks":"avoid-toll-roads-for-trucks","Avoid Truck Restricted Roads":"avoid-truck-restricted-roads","Avoid Unpaved Roads":"avoid-unpaved-roads","Axle Count Restriction":"axle-count-restriction","Driving a Bus":"driving-a-bus","Driving a Taxi":"driving-a-taxi","Driving a Truck":"driving-a-truck","Driving an Automobile":"driving-an-automobile","Driving an Emergency Vehicle":"driving-an-emergency-vehicle","Height Restriction":"height-restriction","Kingpin to Rear Axle Length Restriction":"kingpin-to-rear-axle-length-restriction","Length Restriction":"length-restriction","Preferred for Pedestrians":"preferred-for-pedestrians","Riding a Motorcycle":"riding-a-motorcycle","Roads Under Construction Prohibited":"roads-under-construction-prohibited","Semi or Tractor with One or More Trailers Prohibited":"semi-or-tractor-with-one-or-more-trailers-prohibited","Single Axle Vehicles Prohibited":"single-axle-vehicles-prohibited","Tandem Axle Vehicles Prohibited":"tandem-axle-vehicles-prohibited","Through Traffic Prohibited":"through-traffic-prohibited","Truck with Trailers Restriction":"truck-with-trailers-restriction","Use Preferred Hazmat Routes":"use-preferred-hazmat-routes","Use Preferred Truck Routes":"use-preferred-truck-routes",Walking:"walking","Weight Restriction":"weight-restriction"},{ignoreUnknown:!1}),O=(0,r.O)()({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),w=(0,r.O)()({esriGeometryPoint:"point",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"envelope",esriGeometryMultipoint:"multipoint"}),C=(0,r.O)()({esriNAUTCost:"cost",esriNAUTDescriptor:"descriptor",esriNAUTRestriction:"restriction",esriNAUTHierarchy:"hierarchy"}),D=(0,r.O)()({esriDSTAltName:"alt-name",esriDSTArrive:"arrive",esriDSTBranch:"branch",esriDSTCrossStreet:"cross-street",esriDSTCumulativeLength:"cumulative-length",esriDSTDepart:"depart",esriDSTEstimatedArrivalTime:"estimated-arrival-time",esriDSTExit:"exit",esriDSTGeneral:"general",esriDSTLength:"length",esriDSTServiceTime:"service-time",esriDSTStreetName:"street-name",esriDSTSummary:"summary",esriDSTTime:"time",esriDSTTimeWindow:"time-window",esriDSTToward:"toward",esriDSTViolationTime:"violation-time",esriDSTWaitTime:"wait-time"})}}]);
//# sourceMappingURL=18242.5781b83b.chunk.js.map