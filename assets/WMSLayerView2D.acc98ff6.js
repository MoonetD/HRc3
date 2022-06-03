var R=Object.defineProperty;var M=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var S=(r,e,t)=>e in r?R(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,F=(r,e)=>{for(var t in e||(e={}))b.call(e,t)&&S(r,t,e[t]);if(M)for(var t of M(e))q.call(e,t)&&S(r,t,e[t]);return r};import{Z as s,_ as m,cY as U,a0 as V,e as x,s as W,j as L,cM as $,cp as j}from"./GISSearch.b73a2371.js";import{t as z}from"./BitmapContainer.45b58859.js";import{f as C,u as D}from"./LayerView.95538f08.js";import{S as H}from"./ExportStrategy.898cd4f1.js";import{i as N}from"./RefreshableLayerView.8dc1308b.js";import{l as Q}from"./ExportWMSImageParameters.5dc69354.js";import"./index.8ac88fb7.js";import"./ProjectWeberRenew.dc78a7b0.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./WGLContainer.ad96b13e.js";import"./enums.457e23f9.js";import"./pixelUtils.9fff4c99.js";import"./Container.e5cc492f.js";import"./VertexArrayObject.4ccd043a.js";import"./Texture.df7d53ef.js";import"./VertexElementDescriptor.0406f2d4.js";import"./enums.84480fc7.js";import"./Utils.e0214b13.js";import"./number.dc47462b.js";import"./ProgramTemplate.85782ebc.js";import"./StyleDefinition.809d5a5e.js";import"./config.bd364997.js";import"./GeometryUtils.5ea26345.js";import"./MaterialKey.9859c524.js";import"./alignmentUtils.03ee467b.js";import"./earcut.91e104de.js";import"./Bitmap.2f3b8999.js";const _=r=>{let e=class extends r{initialize(){this.exportImageParameters=new Q({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var t;return(t=this.exportImageParameters)==null||t.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(t){const{layer:i}=this;if(!t)return Promise.reject(new x("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i}));const{popupEnabled:p}=i;if(!p)return Promise.reject(new x("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:p}));const u=this.createFetchPopupFeaturesQuery(t);if(!u)return Promise.resolve([]);const{extent:o,width:a,height:n,x:c,y:l}=u;if(!(o&&a&&n))throw new x("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:o,width:a,height:n});const d=i.fetchFeatureInfo(o,a,n,c,l);return Promise.resolve(d?[d]:[])}};return s([m()],e.prototype,"exportImageParameters",void 0),s([m({readOnly:!0})],e.prototype,"exportImageVersion",null),s([m()],e.prototype,"layer",void 0),s([m(U)],e.prototype,"timeExtent",void 0),e=s([V("esri.layers.mixins.WMSLayerView")],e),e},A=W.getLogger("esri.views.2d.layers.WMSLayerView2D");let h=class extends _(N(C(D))){constructor(){super(...arguments),this.container=new z}supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}update(r){this.strategy.update(r).catch(e=>{L(e)||A.error(e)})}attach(){const{layer:r,container:e}=this,{imageMaxHeight:t,imageMaxWidth:i}=r;this.strategy=new H({container:e,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:i,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add($(()=>this.exportImageVersion,()=>this.requestUpdate()),"exportImageVersion")}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.strategy=null,this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(r){const{view:e,container:t}=this,{x:i,y:p}=r,{spatialReference:u}=e;let o=null,a=0,n=0;if(t.children.some(E=>{const{width:f,height:w,resolution:v,x:y,y:g}=E,P=y+v*f,I=g-v*w;return i>=y&&i<=P&&p<=g&&p>=I&&(o=new j({xmin:y,ymin:I,xmax:P,ymax:g,spatialReference:u}),a=f,n=w,!0)}),!o)return null;const c=o.width/a,l=Math.round((i-o.xmin)/c),d=Math.round((o.ymax-p)/c);return{extent:o,width:a,height:n,x:l,y:d}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(r,e,t,i){return this.layer.fetchImage(r,e,t,F({timeExtent:this.timeExtent},i))}};s([m()],h.prototype,"strategy",void 0),s([m()],h.prototype,"updating",void 0),h=s([V("esri.views.2d.layers.WMSLayerView2D")],h);const fe=h;export{fe as default};
