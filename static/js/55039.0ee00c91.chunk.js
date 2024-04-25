"use strict";(self.webpackChunkhelloworld=self.webpackChunkhelloworld||[]).push([[55039],{55039:(e,t,r)=>{r.r(t),r.d(t,{createConnection:()=>R});var o=r(35143),n=(r(35238),r(3825)),s=r(50076),i=r(76460),c=r(50346),a=r(90534),l=(r(81806),r(47249),r(85842)),u=r(46053),h=r(86729),d=r(54099);let g=class extends d.A.EventedAccessor{destroy(){this.emit("destroy")}get connectionError(){return this.errorString?new s.A("stream-connection",this.errorString):null}onFeature(e){this.emit("data-received",e)}onMessage(e){this.emit("message-received",e)}};(0,o._)([(0,u.MZ)({readOnly:!0})],g.prototype,"connectionError",null),g=(0,o._)([(0,l.$)("esri.layers.support.StreamConnection")],g);const f=g;var y,_;(_=y||(y={}))[_.CONNECTING=0]="CONNECTING",_[_.OPEN=1]="OPEN",_[_.CLOSING=2]="CLOSING",_[_.CLOSED=3]="CLOSED";let w=class extends f{constructor(e){super({}),this._outstandingMessages=[],this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:o}=e;this._config=e,this._featureZScaler=(0,h.N)(t,o,r),this._open()}normalizeCtorArgs(){return{}}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){super.destroy(),null!=this._websocket&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if(null==this._websocket)return"disconnected";switch(this._websocket.readyState){case y.CONNECTING:case y.OPEN:return"connected";case y.CLOSING:case y.CLOSED:return"disconnected"}}sendMessageToSocket(e){null!=this._websocket?this._websocket.send(JSON.stringify(e)):this._outstandingMessages.push(e)}sendMessageToClient(e){this._onMessage(e)}updateCustomParameters(e){this._config.customParameters=e,null!=this._websocket&&this._websocket.close()}async _tryCreateWebSocket(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._config.source.path,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;try{var o;if(this.destroyed)return;const t=(0,a.a6)(e,null!==(o=this._config.customParameters)&&void 0!==o?o:{});this._websocket=await this._createWebSocket(t),this.notifyChange("connectionStatus")}catch(g){const n=t/1e3;return this._config.maxReconnectionAttempts&&r>=this._config.maxReconnectionAttempts?(i.A.getLogger(this).error(new s.A("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(i.A.getLogger(this).error(new s.A("websocket-connection","Failed to connect. Attempting to reconnect in ".concat(n,"s"),g)),await(0,c.Pl)(t),this._tryCreateWebSocket(e,Math.min(1.5*t,1e3*this._config.maxReconnectionInterval),r+1))}}_setWebSocketJSONParseHandler(e){e.onmessage=e=>{try{const t=JSON.parse(e.data);this._onMessage(t)}catch(t){return void i.A.getLogger(this).error(new s.A("websocket-connection","Failed to parse message, invalid JSON",{error:t}))}}}_createWebSocket(e){return new Promise(((t,r)=>{const o=new WebSocket(e);o.onopen=()=>{if(o.onopen=null,this.destroyed)return o.onclose=null,void o.close();o.onclose=e=>this._onClose(e),o.onerror=e=>this._onError(e),this._setWebSocketJSONParseHandler(o),t(o)},o.onclose=e=>{o.onopen=o.onclose=null,r(e)}}))}async _handshake(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e4;const t=this._websocket;if(null==t)return;const r=(0,c.Tw)(),o=t.onmessage,{filter:n,outFields:a,spatialReference:l}=this._config;return r.timeout(e),t.onmessage=e=>{var c;let u=null;try{u=JSON.parse(e.data)}catch(y){}u&&"object"==typeof u||(i.A.getLogger(this).error(new s.A("websocket-connection","Protocol violation. Handshake failed - malformed message",e.data)),r.reject(),this.destroy()),(null===(c=u.spatialReference)||void 0===c?void 0:c.wkid)!==(null===l||void 0===l?void 0:l.wkid)&&(i.A.getLogger(this).error(new s.A("websocket-connection","Protocol violation. Handshake failed - expected wkid of ".concat(l.wkid),e.data)),r.reject(),this.destroy()),"json"!==u.format&&(i.A.getLogger(this).error(new s.A("websocket-connection","Protocol violation. Handshake failed - format is not set",e.data)),r.reject(),this.destroy()),n&&u.filter!==n&&i.A.getLogger(this).error(new s.A("websocket-connection","Tried to set filter, but server doesn't support it")),a&&u.outFields!==a&&i.A.getLogger(this).error(new s.A("websocket-connection","Tried to set outFields, but server doesn't support it")),t.onmessage=o;for(const r of this._outstandingMessages)t.send(JSON.stringify(r));this._outstandingMessages=[],r.resolve()},t.send(JSON.stringify({filter:n,outFields:a,format:"json",spatialReference:{wkid:l.wkid}})),r.promise}_onMessage(e){if(this.onMessage(e),"type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)null!=this._featureZScaler&&this._featureZScaler(t.geometry),this.onFeature(t)}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),i.A.getLogger(this).error("websocket-connection",t)}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),1e3!==e.code&&i.A.getLogger(this).error("websocket-connection","WebSocket closed unexpectedly with error code ".concat(e.code)),this.destroyed||this._open()}};(0,o._)([(0,u.MZ)()],w.prototype,"connectionStatus",null),(0,o._)([(0,u.MZ)()],w.prototype,"errorString",void 0),w=(0,o._)([(0,l.$)("esri.layers.graphics.sources.connections.WebSocketConnection")],w);var p=r(36643),m=r(68295),S=r(19902),v=r(13312);const b={maxQueryDepth:5,maxRecordCountFactor:3};let k=class extends w{constructor(e){super({...b,...e}),this._buddyServicesQuery=null,this._relatedFeatures=null}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||i.A.getLogger(this).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:r,outFields:o}=this._config;this.destroyed||this._setFilter(r,o)}_onMessage(e){if("attributes"in e){let r;try{r=this._enrich(e),null!=this._featureZScaler&&this._featureZScaler(r.geometry)}catch(t){return void i.A.getLogger(this).error(new s.A("geoevent-connection","Failed to parse message",t))}this.onFeature(r)}else this.onMessage(e)}async _fetchServiceDefinition(e){const t={f:"json",...this._config.customParameters},r=(0,n.A)(e.path,{query:t,responseType:"json"}),o=(await r).data;return this._serviceDefinition=o,o}_fetchWebSocketUrl(e,t){const r=e[0],{urls:o,token:n}=r,s=this._inferWebSocketBaseUrl(o);return(0,a.a6)("".concat(s,"/subscribe"),{outSR:""+t.wkid,token:n})}_inferWebSocketBaseUrl(e){if(1===e.length)return e[0];for(const t of e)if(t.includes("wss"))return t;return i.A.getLogger(this).error(new s.A("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const r=this._websocket;if(null==r||null==e&&null==t)return;const o=JSON.stringify({filter:this._serializeFilter(e,t)});let n=!1;const a=(0,c.Tw)();return r.onmessage=e=>{const t=JSON.parse(e.data);t.filter&&(t.error&&(i.A.getLogger(this).error(new s.A("geoevent-connection","Failed to set service filter",t.error)),this._set("errorString","Could not set service filter - ".concat(t.error)),a.reject(t.error)),this._setWebSocketJSONParseHandler(r),n=!0,a.resolve())},r.send(o),setTimeout((()=>{n||(this.destroyed||this._websocket!==r||i.A.getLogger(this).error(new s.A("geoevent-connection","Server timed out when setting filter")),a.reject())}),1e4),a.promise}_serializeFilter(e,t){const r={};if(null==e&&null==t)return r;if(null!==e&&void 0!==e&&e.geometry)try{const t=(0,S.rS)(e.geometry);if("extent"!==t.type)throw new s.A("Expected extent but found type ".concat(t.type));r.geometry=JSON.stringify(t.shiftCentralMeridian())}catch(o){i.A.getLogger(this).error(new s.A("geoevent-connection","Encountered an error when setting connection geometryDefinition",o))}return null!==e&&void 0!==e&&e.where&&"1 = 1"!==e.where&&"1=1"!==e.where&&(r.where=e.where),null!=t&&(r.outFields=t.join(",")),r}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,r=e.attributes[t],o=this._relatedFeatures.get(r);if(!o)return i.A.getLogger(this).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:n,geometry:c}=o;for(const s in n)e.attributes[s]=n[s];return c&&(e.geometry=c),e.geometry||e.centroid||i.A.getLogger(this).error(new s.A("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,r=this._queryRelatedFeatures(e),o=this._queryArchive(t);await r;const n=await o;if(!n)return;for(const s of n.features)this.onFeature(this._enrich(s))}catch(_){i.A.getLogger(this).error(new s.A("geoevent-connection","Encountered an error when querying buddy services",{error:_}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){var t,o,n;const s=new((await Promise.all([r.e(87200),r.e(71448),r.e(44582),r.e(78504),r.e(38451)]).then(r.bind(r,38451))).default)({url:e}),{capabilities:i}=await s.load(),c=i.query.supportsMaxRecordCountFactor,a=i.query.supportsPagination,l=i.query.supportsCentroid,u=this._config.maxRecordCountFactor,h=s.capabilities.query.maxRecordCount,d=c?h*u:h,g=new m.A;if(g.outFields=null!==(t=this._config.outFields)&&void 0!==t?t:["*"],g.where=null!==(o=null===(n=this._config.filter)||void 0===n?void 0:n.where)&&void 0!==o?o:"1=1",g.returnGeometry=!0,g.returnExceededLimitFeatures=!0,g.outSpatialReference=v.A.fromJSON(this._config.spatialReference),l&&(g.returnCentroid=!0),c&&(g.maxRecordCountFactor=u),a)return g.num=d,s.destroy(),this._queryPages(e,g);const f=await(0,p.eW)(e,g,this._config.sourceSpatialReference);return s.destroy(),f.data}async _queryPages(e,t){var r;let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;t.start=null!=t.num?n*t.num:null;const{data:s}=await(0,p.eW)(e,t,this._config.sourceSpatialReference);return s.exceededTransferLimit&&n<(null!==(r=this._config.maxQueryDepth)&&void 0!==r?r:0)?(s.features.forEach((e=>o.push(e))),this._queryPages(e,t,o,n+1)):(o.forEach((e=>s.features.push(e))),s)}_addRelatedFeatures(e){const t=new Map,r=e.features,o=this._serviceDefinition.relatedFeatures.joinField;for(const n of r){const e=n.attributes[o];t.set(e,n)}this._relatedFeatures=t}};k=(0,o._)([(0,l.$)("esri.layers.graphics.sources.connections.GeoEventConnection")],k);const A=k;let C=class extends f{constructor(e){super({}),this.connectionStatus="connected",this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:o}=e;this._featureZScaler=(0,h.N)(t,o,r)}normalizeCtorArgs(){return{}}updateCustomParameters(e){}sendMessageToSocket(e){}sendMessageToClient(e){if("type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)null!=this._featureZScaler&&this._featureZScaler(t.geometry),this.onFeature(t)}this.onMessage(e)}};function F(e,t){if(null==e&&null==t)return null;const r={};return null!=t&&(r.geometry=t),null!=e&&(r.where=e),r}function R(e,t,r,o,n,s,i,c,a){const l={source:e,sourceSpatialReference:t,spatialReference:r,geometryType:o,filter:F(n,s),maxReconnectionAttempts:i,maxReconnectionInterval:c,customParameters:a};return e?e.path.startsWith("wss://")||e.path.startsWith("ws://")?new w(l):new A(l):new C(l)}(0,o._)([(0,u.MZ)()],C.prototype,"connectionStatus",void 0),(0,o._)([(0,u.MZ)()],C.prototype,"errorString",void 0),C=(0,o._)([(0,l.$)("esri.layers.support.ClientSideConnection")],C)}}]);
//# sourceMappingURL=55039.0ee00c91.chunk.js.map