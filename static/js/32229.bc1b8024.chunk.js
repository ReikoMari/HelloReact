"use strict";(self.webpackChunkhelloworld=self.webpackChunkhelloworld||[]).push([[32229],{54610:(e,t,a)=>{a.d(t,{Gm:()=>R,Tj:()=>k,applyEdits:()=>F,pz:()=>O,r3:()=>b,uploadAssets:()=>U,zp:()=>A});var r=a(39356),n=a(19276),o=a(50076),i=a(53084),l=a(76460),s=a(50346),d=a(90534),u=a(49723),c=a(1438),p=a(80963),h=a(61979),y=a(53430),f=a(19463),m=a(31933);function g(e){return null!=(null===e||void 0===e?void 0:e.applyEdits)}function v(e){return"object"==typeof e&&null!=e&&"objectId"in e&&!!e.objectId}function b(e){return e.every(v)}function w(e){return"object"==typeof e&&null!=e&&"globalId"in e&&!!e.globalId}function A(e){return e.every(w)}async function F(e,t,a){var r;let n,d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const c="gdbVersion"in e?e.gdbVersion:null,p=null!==(r=d.gdbVersion)&&void 0!==r?r:c;if((0,h.Mk)(e)&&e.url)n=(0,h.Zk)(e.url,e.layerId,p,"original-and-current-features"===d.returnServiceEditsOption);else{n=(0,s.Tw)(),n.promise.then((t=>{(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length)&&e.emit("edits",t)}));const t={result:n.promise};e.emit("apply-edits",t)}try{var y;const{results:r,edits:s}=await async function(e,t,a,r){var n,i,s,d,c,p;if(await e.load(),!g(t))throw new o.A("".concat(e.type,"-layer:no-editing-support"),"Layer source does not support applyEdits capability",{layer:e});if(!(0,m.tk)(e))throw new o.A("".concat(e.type,"-layer:editing-disabled"),"Editing is disabled for layer",{layer:e});const{edits:h,options:y}=await async function(e,t,a){const r=(0,m.BR)(e),n=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),i=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),s=null!=e.infoFor3D;if(O(t,r,a,!!n,!!i,"".concat(e.type,"-layer")),!r.data.isVersioned&&null!==a&&void 0!==a&&a.gdbVersion)throw new o.A("".concat(e.type,"-layer:invalid-parameter"),"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!r.editing.supportsRollbackOnFailure&&null!==a&&void 0!==a&&a.rollbackOnFailureEnabled)throw new o.A("".concat(e.type,"-layer:invalid-parameter"),"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");const d={...a};if(null!=d.rollbackOnFailureEnabled||r.editing.supportsRollbackOnFailure||(d.rollbackOnFailureEnabled=!0),d.rollbackOnFailureEnabled||"original-and-current-features"!==d.returnServiceEditsOption||(!1===d.rollbackOnFailureEnabled&&l.A.getLogger("esri.layers.graphics.editingSupport").warn("".concat(e.type,"-layer:invalid-parameter"),"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwritten and set to true."),d.rollbackOnFailureEnabled=!0),!r.editing.supportsReturnServiceEditsInSourceSpatialReference&&d.returnServiceEditsInSourceSR)throw new o.A("".concat(e.type,"-layer:invalid-parameter"),"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(d.returnServiceEditsInSourceSR&&"original-and-current-features"!==d.returnServiceEditsOption)throw new o.A("".concat(e.type,"-layer:invalid-parameter"),"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const c=k(t,r,"".concat(e.type,"-layer")),p=(null===a||void 0===a?void 0:a.globalIdUsed)||s,h=e.fields.filter((e=>"big-integer"===e.type||"oid"===e.type&&(e.length||0)>=8));if(p){const{globalIdField:t}=e;if(null==t)throw new o.A("".concat(e.type,"-layer:invalid-parameter"),"Layer does not specify a global id field.");c.addFeatures.forEach((e=>function(e,t){const{attributes:a}=e;null==a[t]&&(a[t]=(0,u.yS)())}(e,t)))}return c.addFeatures.forEach((t=>function(e,t,a,r){I(e,t,a,r),E(e,t)}(t,e,p,h))),c.updateFeatures.forEach((t=>function(e,t,a,r){I(e,t,a,r),E(e,t);const n=(0,m.BR)(t);if("geometry"in e&&null!=e.geometry&&(null===n||void 0===n||!n.editing.supportsGeometryUpdate))throw new o.A("".concat(t.type,"-layer:unsupported-operation"),"Layer does not support geometry updates.")}(t,e,p,h))),c.deleteFeatures.forEach((t=>function(e,t,a,r){I(e,t,a,r)}(t,e,p,h))),c.addAttachments.forEach((t=>S(t,e))),c.updateAttachments.forEach((t=>S(t,e))),s&&await async function(e,t){var a,r;if(null==t.infoFor3D)return;const{infoFor3D:n}=t,i=null!==(a=(0,f.R_)("model/gltf-binary",n.supportedFormats))&&void 0!==a?a:(0,f.E1)("glb",n.supportedFormats);if(!i||!n.editFormats.includes(i))throw new o.A("".concat(t.type,"-layer:binary-gltf-asset-not-supported"),"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");null!==(r=e.addAssetFeatures)&&void 0!==r||(e.addAssetFeatures=[]);const{addAssetFeatures:l}=e;for(const o of null!==(s=e.addFeatures)&&void 0!==s?s:[]){var s;T(o)&&l.push(o)}for(const o of null!==(d=e.updateFeatures)&&void 0!==d?d:[]){var d;T(o)&&l.push(o)}}(c,e),{edits:await R(c),options:d}}(e,a,r);return null!==(n=h.addFeatures)&&void 0!==n&&n.length||null!==(i=h.updateFeatures)&&void 0!==i&&i.length||null!==(s=h.deleteFeatures)&&void 0!==s&&s.length||null!==(d=h.addAttachments)&&void 0!==d&&d.length||null!==(c=h.updateAttachments)&&void 0!==c&&c.length||null!==(p=h.deleteAttachments)&&void 0!==p&&p.length?{edits:h,results:await t.applyEdits(h,y)}:{edits:h,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}(e,t,a,d),c=e=>e.filter((e=>!e.error)).map(i.o8),p={edits:s,addedFeatures:c(r.addFeatureResults),updatedFeatures:c(r.updateFeatureResults),deletedFeatures:c(r.deleteFeatureResults),addedAttachments:c(r.addAttachmentResults),updatedAttachments:c(r.updateAttachmentResults),deletedAttachments:c(r.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:r.editMoment?new Date(r.editMoment):null,globalIdToObjectId:d.globalIdToObjectId};return null!==(y=r.editedFeatureResults)&&void 0!==y&&y.length&&(p.editedFeatures=r.editedFeatureResults),n.resolve(p),r}catch(v){throw n.reject(v),v}}function I(e,t,a,r){if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new o.A("".concat(t.type,"-layer:invalid-parameter"),"Feature should have '".concat(t.globalIdField,"' when 'globalIdUsed' is true"));if(!("attributes"in e)&&!e.globalId)throw new o.A("".concat(t.type,"-layer:invalid-parameter"),"`'globalId' of the feature should be passed when 'globalIdUsed' is true")}if(r.length&&"attributes"in e)for(const l of r){const a=e.attributes[l.name];if(void 0!==a&&!(0,y.OG)(l,a))throw new o.A("".concat(t.type,"-layer:invalid-parameter"),"Big-integer field '".concat(l.name,"' of the feature must be less than ").concat(Number.MAX_SAFE_INTEGER),{feature:e})}if("geometry"in e&&null!=e.geometry){var n,i;if(e.geometry.hasZ&&!1===(null===(n=t.capabilities)||void 0===n?void 0:n.data.supportsZ))throw new o.A("".concat(t.type,"-layer:z-unsupported"),"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===(null===(i=t.capabilities)||void 0===i?void 0:i.data.supportsM))throw new o.A("".concat(t.type,"-layer:m-unsupported"),"Layer does not support m values while feature has m values.")}}function E(e,t){var a;if("geometry"in e&&"mesh"===(null===(a=e.geometry)||void 0===a?void 0:a.type)&&null!=t.infoFor3D&&null!=t.spatialReference){const{geometry:a}=e,{spatialReference:r,vertexSpace:n}=a,i=t.spatialReference,l="local"===n.type,s=(0,p.EA)(i),d=(0,p.aI)(i,r),u=d||(0,p.oT)(i)&&((0,p.oT)(r)||(0,p.K8)(r));if(!(l&&s&&u||!l&&!s&&d))throw new o.A("".concat(t.type,"-layer:mesh-unsupported"),"Uploading a mesh with a ".concat(n.type," vertex space and a spatial reference wkid:").concat(r.wkid," to a layer with a spatial reference wkid:").concat(i.wkid," is not supported."))}}function S(e,t){var a;const{feature:r,attachment:n}=e;if(!r||"attributes"in r&&!r.attributes[t.globalIdField])throw new o.A("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in r)&&!r.globalId)throw new o.A("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have reference to 'globalId' of the parent feature");if(!n.globalId)throw new o.A("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have 'globalId'");if(!n.data&&!n.uploadId)throw new o.A("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have 'data' or 'uploadId'");if(!(n.data instanceof File&&n.data.name)&&!n.name)throw new o.A("".concat(t.type,"-layer:invalid-parameter"),"'name' is required when attachment is specified as Base64 encoded string using 'data'");if((null===(a=t.capabilities)||void 0===a||!a.editing.supportsUploadWithItemId)&&n.uploadId)throw new o.A("".concat(t.type,"-layer:invalid-parameter"),"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof n.data){const e=(0,d.r$)(n.data);if(e&&!e.isBase64)throw new o.A("".concat(t.type,"-layer:invalid-parameter"),"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function R(e){var t,a;const r=null!==(t=e.addFeatures)&&void 0!==t?t:[],n=null!==(a=e.updateFeatures)&&void 0!==a?a:[],o=r.concat(n).map((e=>e.geometry)),i=await(0,c.el)(o),l=r.length,s=n.length;return i.slice(0,l).forEach(((e,t)=>r[t].geometry=e)),i.slice(l,l+s).forEach(((e,t)=>n[t].geometry=e)),e}function k(e,t,a){var r,i,l;const s=function(e){var t,a;return{addFeatures:Array.from(null!==(t=null===e||void 0===e?void 0:e.addFeatures)&&void 0!==t?t:[]),updateFeatures:Array.from(null!==(a=null===e||void 0===e?void 0:e.updateFeatures)&&void 0!==a?a:[]),deleteFeatures:e&&n.A.isCollection(e.deleteFeatures)?e.deleteFeatures.toArray():e.deleteFeatures||[],addAttachments:e.addAttachments||[],updateAttachments:e.updateAttachments||[],deleteAttachments:e.deleteAttachments||[]}}(e);if(null!==(r=s.addFeatures)&&void 0!==r&&r.length&&!t.operations.supportsAdd)throw new o.A("".concat(a,":unsupported-operation"),"Layer does not support adding features.");if(null!==(i=s.updateFeatures)&&void 0!==i&&i.length&&!t.operations.supportsUpdate)throw new o.A("".concat(a,":unsupported-operation"),"Layer does not support updating features.");if(null!==(l=s.deleteFeatures)&&void 0!==l&&l.length&&!t.operations.supportsDelete)throw new o.A("".concat(a,":unsupported-operation"),"Layer does not support deleting features.");return s.addFeatures=s.addFeatures.map(L),s.updateFeatures=s.updateFeatures.map(L),s.addAssetFeatures=[],s}function O(e,t,a,r,n,i){if(!e||!r&&!n)throw new o.A("".concat(i,":missing-parameters"),"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!t.editing.supportsGlobalId&&null!==a&&void 0!==a&&a.globalIdUsed)throw new o.A("".concat(i,":invalid-parameter"),"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!t.editing.supportsGlobalId&&n)throw new o.A("".concat(i,":invalid-parameter"),"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if((null===a||void 0===a||!a.globalIdUsed)&&n)throw new o.A("".concat(i,":invalid-parameter"),"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true")}function L(e){const t=new r.A;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}function T(e){var t;return"mesh"===(null===e||void 0===e||null===(t=e.geometry)||void 0===t?void 0:t.type)}function U(e,t,a,r){if(!g(t))throw new o.A("".concat(e.type,"-layer:no-editing-support"),"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new o.A("".concat(e.type,"-layer:no-asset-upload-support"),"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(a,r)}}}]);
//# sourceMappingURL=32229.bc1b8024.chunk.js.map