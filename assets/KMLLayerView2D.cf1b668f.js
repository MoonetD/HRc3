var E=Object.defineProperty;var P=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var M=(i,t,e)=>t in i?E(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,m=(i,t)=>{for(var e in t||(t={}))F.call(t,e)&&M(i,e,t[e]);if(P)for(var e of P(t))W.call(t,e)&&M(i,e,t[e]);return i};import{ak as z,dm as _,ch as G,cM as K,C as N,cp as D,bn as j,cB as B,r as V,t as H,ds as J,cC as L,aT as U,dC as Q,dD as $,dE as O,dF as Y,Z as h,_ as d,a0 as Z}from"./GISSearch.b73a2371.js";import{b,g as X,d as ii}from"./kmlUtils.3f41ebcd.js";import{v as ti}from"./Bitmap.2f3b8999.js";import{t as ei}from"./BitmapContainer.45b58859.js";import{f as si,u as ai}from"./LayerView.95538f08.js";import{i as v}from"./GraphicContainer.21c2e17d.js";import{r as f}from"./BaseGraphicContainer.438c4e75.js";import"./index.8ac88fb7.js";import"./ProjectWeberRenew.dc78a7b0.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Container.e5cc492f.js";import"./enums.457e23f9.js";import"./Texture.df7d53ef.js";import"./WGLContainer.ad96b13e.js";import"./pixelUtils.9fff4c99.js";import"./VertexArrayObject.4ccd043a.js";import"./VertexElementDescriptor.0406f2d4.js";import"./enums.84480fc7.js";import"./Utils.e0214b13.js";import"./number.dc47462b.js";import"./ProgramTemplate.85782ebc.js";import"./StyleDefinition.809d5a5e.js";import"./config.bd364997.js";import"./GeometryUtils.5ea26345.js";import"./MaterialKey.9859c524.js";import"./alignmentUtils.03ee467b.js";import"./earcut.91e104de.js";import"./CIMSymbolHelper.1040926f.js";import"./BidiEngine.b9926823.js";import"./GeometryUtils.e53da643.js";import"./projectionSupport.66acda0b.js";import"./json.da51edc4.js";import"./FeatureContainer.2f011771.js";import"./TileContainer.9dcdd226.js";import"./visualVariablesUtils.65d2f75d.js";import"./visualVariablesUtils.54823ca9.js";import"./Matcher.4b2c4793.js";import"./tileUtils.fab497ef.js";import"./TileClipper.2c69e8d5.js";import"./Geometry.e891c191.js";import"./cimAnalyzer.74547477.js";import"./quantizationUtils.48cd94ed.js";import"./ExpandedCIM.d4661ffb.js";import"./schemaUtils.d3838579.js";import"./createSymbolSchema.4fe41dfb.js";import"./MD5.67d7a872.js";import"./util.837deeb3.js";import"./ComputedAttributeStorage.2a68a55c.js";import"./vec3f32.8179e08f.js";class T{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let r=class extends si(ai){constructor(){super(...arguments),this._handles=new z,this._bitmapIndex=new Map,this._mapImageContainer=new ei,this._kmlVisualData=new T,this.allVisiblePoints=new _,this.allVisiblePolylines=new _,this.allVisiblePolygons=new _,this.allVisibleMapImages=new G}async hitTest(i,t){var e,l,s;return(await Promise.all([(e=this._pointsView)==null?void 0:e.hitTest(i),(l=this._polylinesView)==null?void 0:l.hitTest(i),(s=this._polygonsView)==null?void 0:s.hitTest(i)])).flat().filter(a=>!!a&&(a.layer=this.layer,a.sourceLayer=this.layer,!0))}update(i){this._polygonsView&&this._polygonsView.processUpdate(i),this._polylinesView&&this._polylinesView.processUpdate(i),this._pointsView&&this._pointsView.processUpdate(i)}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new f({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new v(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new f({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new v(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new f({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new v(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.handles.add([this.allVisibleMapImages.on("change",i=>{i.added.forEach(t=>this._addMapImage(t)),i.removed.forEach(t=>this._removeMapImage(t))}),K(()=>this.layer.visibleSublayers,i=>{for(const[t,e]of this._kmlVisualData.allSublayers)e.visibility=0;for(const t of i){const e=this._kmlVisualData.allSublayers.get(t.id);e&&(e.visibility=1)}this._refreshCollections()})]),this.updatingHandles.addPromise(this._fetchService(this._fetchController.signal))}detach(){this._fetchController.abort(),this._fetchController=null,this._handles.removeAll(),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView&&(this._polygonsView.destroy(),this._polygonsView=null),this._polylinesView&&(this._polylinesView.destroy(),this._polylinesView=null),this._pointsView&&(this._pointsView.destroy(),this._pointsView=null)}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(i){(this.view.spatialReference.isWGS84||this.view.spatialReference.isWebMercator)&&N(i.href,{responseType:"image"}).then(({data:t})=>{let e=D.fromJSON(i.extent);j(e,this.view.spatialReference)&&(e=B(e,this.view.spatialReference));const l=new ti(t,"standard");l.x=e.xmin,l.y=e.ymax,l.resolution=e.width/t.naturalWidth,l.rotation=i.rotation,this._mapImageContainer.addChild(l),this._bitmapIndex.set(i,l)})}async _getViewDependentUrl(i,t){const{viewFormat:e,viewBoundScale:l,httpQuery:s}=i;if(V(e)){if(H(t))throw new Error("Loading this network link requires a view state.");let a;if(await J(),V(l)&&l!==1){const n=new D(t.extent);n.expand(l),a=n}else a=t.extent;a=L(a,U.WGS84);const p=L(a,U.WebMercator),c=a.xmin,y=a.xmax,o=a.ymin,A=a.ymax,q=t.size[0]*t.pixelRatio,R=t.size[1]*t.pixelRatio,S=Math.max(p.width,p.height),I={"[bboxWest]":c.toString(),"[bboxEast]":y.toString(),"[bboxSouth]":o.toString(),"[bboxNorth]":A.toString(),"[lookatLon]":a.center.x.toString(),"[lookatLat]":a.center.y.toString(),"[lookatRange]":S.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":a.center.x.toString(),"[lookatTerrainLat]":a.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":a.center.x.toString(),"[cameraLat]":a.center.y.toString(),"[cameraAlt]":S.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":q.toString(),"[vertPixels]":R.toString(),"[terrainEnabled]":"0","[clientVersion]":Q,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},C=n=>{for(const x in n)for(const k in I)n[x]=n[x].replace(k,I[k])},w=$(e);C(w);let g={};V(s)&&(g=$(s),C(g));const u=O(i.href);return u.query=m(m(m({},u.query),w),g),`${u.path}?${Y(w)}`}return i.href}async _fetchService(i){const t=new T;await this._loadVisualData(this.layer.url,t,i),this._kmlVisualData=t,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i))}_isSublayerVisible(i){const t=this._kmlVisualData.allSublayers.get(i);return!!t.visibility&&(t.parentFolderId===-1||this._isSublayerVisible(t.parentFolderId))}_loadVisualData(i,t,e){return this._fetchParsedKML(i,e).then(async l=>{for(const s of l.sublayers){t.allSublayers.set(s.id,s);const a=s.points?await b(s.points):[],p=s.polylines?await b(s.polylines):[],c=s.polygons?await b(s.polygons):[],y=s.mapImages||[];if(t.allPoints.push(...a.map(o=>({item:o,sublayerId:s.id}))),t.allPolylines.push(...p.map(o=>({item:o,sublayerId:s.id}))),t.allPolygons.push(...c.map(o=>({item:o,sublayerId:s.id}))),t.allMapImages.push(...y.map(o=>({item:o,sublayerId:s.id}))),s.networkLink){const o=await this._getViewDependentUrl(s.networkLink,this.view.state);await this._loadVisualData(o,t,e)}}})}_fetchParsedKML(i,t){return X(i,this.view.spatialReference,this.layer.refreshInterval,t).then(e=>ii(e.data))}_removeMapImage(i){const t=this._bitmapIndex.get(i);t&&(this._mapImageContainer.removeChild(t),this._bitmapIndex.delete(i))}};h([d()],r.prototype,"_pointsView",void 0),h([d()],r.prototype,"_polylinesView",void 0),h([d()],r.prototype,"_polygonsView",void 0),h([d()],r.prototype,"updating",void 0),r=h([Z("esri.views.2d.layers.KMLLayerView2D")],r);const tt=r;export{tt as default};
