import{Z as r,_ as o,a0 as E,cl as N,dc as Q,r as j,aT as g,t as k,k3 as z,e as O,iN as Z,j7 as J,j8 as U,iy as V,j6 as W,j9 as H,iz as K,e7 as X,e8 as Y,iA as ee,e9 as te,ed as re,ja as R,iE as ie,d1 as $,jb as se,iR as oe,jc as ne,ey as ae,cp as pe,gZ as D,je as le,jf as ue,jd as de,j1 as ce,iH as ye,dh as he,jh as fe,iG as me,ji as ge,jk as ve,ec as Se,iI as xe}from"./GISSearch.b73a2371.js";import{N as we,v as T,x as je,k as Ie,T as be,S as Fe,I as Oe,F as C,j as Re}from"./ogcFeatureUtils.f31af8ed.js";import"./index.8ac88fb7.js";import"./ProjectWeberRenew.dc78a7b0.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./geojson.9b2f9361.js";import"./clientSideDefaults.9630694d.js";import"./QueryEngineCapabilities.650d7541.js";let f=class extends N{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getFeatureDefinition(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:n,supportedCrs:i},layer:{apiKey:a,capabilities:l,customParameters:p}}=this;return{capabilities:l,collection:e,layerDefinition:t,queryParameters:{apiKey:a,customParameters:p},spatialReference:n,supportedCrs:i}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then(n=>Q.fromJSON(n))}queryFeaturesJSON(e,t={}){const n=this.getFeatureDefinition();return this.load(t).then(()=>we(n,e,t))}queryObjectIds(e,t={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){var n;const i=new RegExp(`^${t}$`,"i");return(n=e.conformsTo.some(a=>i.test(a)))!=null&&n}_getCapabilities(e,t){var n,i,a,l,p,u,c;const d=j(t)?(n=t.components)==null?void 0:n.parameters:null;return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:(i=(a=d==null||(l=d.limit)==null||(p=l.schema)==null?void 0:p.maximum)!=null?a:d==null||(u=d.limitFeatures)==null||(c=u.schema)==null?void 0:c.maximum)!=null?i:5e3,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}_getExtent(e){var t;const n=(t=e.extent)==null?void 0:t.spatial;if(!n)return null;const i=n.bbox[0],a=i.length===4,l=i[0],p=i[1],u=a?void 0:i[2];return{xmin:l,ymin:p,xmax:a?i[2]:i[3],ymax:a?i[3]:i[4],zmin:u,zmax:a?void 0:i[5],spatialReference:g.WGS84.toJSON()}}_getStorageSpatialReference(e){var t;const n=(t=e.storageCrs)!=null?t:C,i=T(n);return k(i)?g.WGS84:new g({wkid:i})}_getSupportedSpatialReferences(e,t){var n;const i="#/crs",a=(n=e.crs)!=null?n:[C],l=a.includes(i)?a.filter(u=>u!==i).concat(t.crs):a,p=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return l.filter(u=>!p.test(u))}async _loadOGCServices(e,t){const n=j(t)?t.signal:null,{apiKey:i,collectionId:a,customParameters:l,fields:p,geometryType:u,hasZ:c,objectIdField:d,timeInfo:I,url:P}=e,_={fields:p==null?void 0:p.map(h=>h.toJSON()),geometryType:z.toJSON(u),hasZ:c,objectIdField:d,timeInfo:I==null?void 0:I.toJSON()},m={apiKey:i,customParameters:l,signal:n},v=await je(P,m),[b,F]=await Promise.all([Ie(v,m),be(v,m)]);if(!this._conformsToType(b,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new O("ogc-feature-layer:no-geojson-support","Server does not support geojson");const y=F.collections.find(h=>h.id===a);if(!y)throw new O("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const G=this._conformsToType(b,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await Fe(v,m):null,S=await Oe(y,_,m),q=this._getCapabilities(S.hasZ,G),B=this._getExtent(y),A=this._getStorageSpatialReference(y).toJSON(),L=this._getSupportedSpatialReferences(y,F),M=new RegExp(`^${Re}`,"i"),x={};for(const h of L){const w=T(h);j(w)&&(x[w]||(x[w]=h.replace(M,"")))}S.extent=B,this.featureDefinition={capabilities:q,collection:y,layerDefinition:S,queryParameters:{},spatialReference:A,supportedCrs:x}}};r([o()],f.prototype,"featureDefinition",void 0),r([o({constructOnly:!0})],f.prototype,"layer",void 0),r([o()],f.prototype,"type",void 0),f=r([E("esri.layers.graphics.sources.OGCFeatureSource")],f);const $e=f,De=xe();let s=class extends Z(J(U(V(W(H(K(X(Y(ee(te(re))))))))))){constructor(e){super(e),this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new $e({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}set renderer(e){R(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return ie(this,e)}createQuery(){return new $}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var n;let i,a=!1;const l=t==null||(n=t.feature)==null?void 0:n.attributes,p=this.typeIdField&&(l==null?void 0:l[this.typeIdField]);return p!=null&&this.types&&(a=this.types.some(u=>{var c,d;return u.id==p&&(i=(c=u.domains)==null?void 0:c[e],((d=i)==null?void 0:d.type)==="inherited"&&(i=this._getLayerDomain(e)),!0)})),a||i||(i=this._getLayerDomain(e)),i}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures($.from(e)||this.createQuery(),t)).then(n=>{var i;return n==null||(i=n.features)==null||i.forEach(a=>{a.layer=a.sourceLayer=this}),n})}serviceSupportsSpatialReference(e){var t,n;return(t=(n=this.source)==null?void 0:n.serviceSupportsSpatialReference(e))!=null&&t}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),R(this.renderer,this.fieldsIndex),se(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};r([o({readOnly:!0,json:{origins:{service:{read:!0}}}})],s.prototype,"capabilities",void 0),r([o({type:String,json:{write:!0}})],s.prototype,"collectionId",void 0),r([o({type:String})],s.prototype,"copyright",void 0),r([o({readOnly:!0})],s.prototype,"defaultPopupTemplate",null),r([o({type:String})],s.prototype,"definitionExpression",void 0),r([o({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],s.prototype,"description",void 0),r([o({type:String})],s.prototype,"displayField",void 0),r([o(oe)],s.prototype,"elevationInfo",void 0),r([o(ne)],s.prototype,"featureReduction",void 0),r([o({type:[ae],json:{origins:{service:{name:"layerDefinition.fields"}}}})],s.prototype,"fields",void 0),r([o(De.fieldsIndex)],s.prototype,"fieldsIndex",void 0),r([o({readOnly:!0,type:pe,json:{origins:{service:{name:"layerDefinition.extent"}}}})],s.prototype,"fullExtent",void 0),r([o({type:D.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:D.read}}}}})],s.prototype,"geometryType",void 0),r([o({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],s.prototype,"hasZ",void 0),r([o({type:Boolean,readOnly:!0})],s.prototype,"isTable",null),r([o({type:[le],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ue},write:!0}}}})],s.prototype,"labelingInfo",void 0),r([o(de)],s.prototype,"labelsVisible",void 0),r([o(ce)],s.prototype,"legendEnabled",void 0),r([o({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],s.prototype,"objectIdField",void 0),r([o({type:["OGCFeatureLayer"]})],s.prototype,"operationalLayerType",void 0),r([o(ye)],s.prototype,"popupEnabled",void 0),r([o({type:he,json:{name:"popupInfo",write:!0}})],s.prototype,"popupTemplate",void 0),r([o({types:fe,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:me,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],s.prototype,"renderer",null),r([o(ge)],s.prototype,"screenSizePerspectiveEnabled",void 0),r([o({readOnly:!0})],s.prototype,"source",void 0),r([o({readOnly:!0,type:g,json:{origins:{service:{read:!0}}}})],s.prototype,"spatialReference",void 0),r([o({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],s.prototype,"title",void 0),r([o({readOnly:!0,json:{read:!1}})],s.prototype,"type",void 0),r([o({type:String,readOnly:!0})],s.prototype,"typeIdField",void 0),r([o({type:[ve]})],s.prototype,"types",void 0),r([o(Se)],s.prototype,"url",void 0),s=r([E("esri.layers.OGCFeatureLayer")],s);const Ae=s;export{Ae as default};
