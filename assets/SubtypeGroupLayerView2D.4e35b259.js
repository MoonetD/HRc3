var y=Object.defineProperty,u=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var n=(r,e,i)=>e in r?y(r,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[e]=i,a=(r,e)=>{for(var i in e||(e={}))h.call(e,i)&&n(r,i,e[i]);if(p)for(var i of p(e))b.call(e,i)&&n(r,i,e[i]);return r},m=(r,e)=>u(r,d(e));import{Z as c,a0 as f,K as g,r as w,cX as x}from"./GISSearch.b73a2371.js";import S from"./FeatureLayerView2D.b01fc1d0.js";import"./index.8ac88fb7.js";import"./ProjectWeberRenew.dc78a7b0.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./enums.84480fc7.js";import"./LayerView.95538f08.js";import"./Container.e5cc492f.js";import"./schemaUtils.d3838579.js";import"./Utils.e0214b13.js";import"./number.dc47462b.js";import"./enums.457e23f9.js";import"./Texture.df7d53ef.js";import"./VertexElementDescriptor.0406f2d4.js";import"./visualVariablesUtils.54823ca9.js";import"./createSymbolSchema.4fe41dfb.js";import"./MaterialKey.9859c524.js";import"./alignmentUtils.03ee467b.js";import"./CIMSymbolHelper.1040926f.js";import"./BidiEngine.b9926823.js";import"./GeometryUtils.e53da643.js";import"./cimAnalyzer.74547477.js";import"./quantizationUtils.48cd94ed.js";import"./ExpandedCIM.d4661ffb.js";import"./MD5.67d7a872.js";import"./util.837deeb3.js";import"./popupUtils.9bc51a64.js";import"./RefreshableLayerView.8dc1308b.js";function v(r,e){return!r.visible||r.minScale!==0&&e>r.minScale||r.maxScale!==0&&e<r.maxScale}let l=class extends S{initialize(){this.handles.add([g(this.view,"viewpoint",()=>this._update())])}_injectOverrides(r){let e=super._injectOverrides(r);const i=this.view.scale,s=this.layer.sublayers.filter(o=>v(o,i)).map(o=>o.subtypeCode);if(!s.length)return e;e=w(e)?e:new x().toJSON();const t=`NOT ${this.layer.subtypeField} IN (${s.join(",")})`;return e.where=e.where?`(${e.where}) AND (${t})`:t,e}_setLayersForFeature(r){const e=this.layer.fieldsIndex.get(this.layer.subtypeField),i=r.attributes[e.name],s=this.layer.sublayers.find(t=>t.subtypeCode===i);r.layer=s,r.sourceLayer=this.layer}_createSchemaConfig(){const r={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(t=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:t.labelingInfo,labelsVisible:t.labelsVisible,renderer:t.renderer,subtypeCode:t.subtypeCode,orderBy:null}))},e=this.layer.sublayers.map(t=>t.subtypeCode).join(","),i=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${e})`:"1=2";let s=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return s+=i,m(a(a({},super._createSchemaConfig()),r),{definitionExpression:s})}};l=c([f("esri.views.2d.layers.SubtypeGroupLayerView2D")],l);const W=l;export{W as default};
