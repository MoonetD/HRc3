import{Z as a,a0 as l}from"./GISSearch.b73a2371.js";import{a as m,e as p}from"./heatmapUtils.32f7f254.js";import{n as h}from"./BitmapTileContainer.13635666.js";import{o as d}from"./BaseTileRenderer.9758fe9b.js";import"./index.8ac88fb7.js";import"./ProjectWeberRenew.dc78a7b0.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Bitmap.2f3b8999.js";import"./Container.e5cc492f.js";import"./enums.457e23f9.js";import"./Texture.df7d53ef.js";import"./TileContainer.9dcdd226.js";import"./Utils.e0214b13.js";import"./enums.84480fc7.js";import"./number.dc47462b.js";import"./VertexElementDescriptor.0406f2d4.js";import"./WGLContainer.ad96b13e.js";import"./pixelUtils.9fff4c99.js";import"./VertexArrayObject.4ccd043a.js";import"./ProgramTemplate.85782ebc.js";import"./StyleDefinition.809d5a5e.js";import"./config.bd364997.js";import"./GeometryUtils.5ea26345.js";import"./MaterialKey.9859c524.js";import"./alignmentUtils.03ee467b.js";import"./earcut.91e104de.js";class c{constructor(){this.gradient=null,this.height=512,this.width=512}render(i){m(i,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity)}}let o=class extends d{constructor(t){super(t),this._intensityInfo={minPixelIntensity:0,maxPixelIntensity:0},this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new h(t.tileInfoView)}createTile(t){const i=this._container.createTile(t);return this.tileInfoView.getTileCoords(i.bitmap,t),i.bitmap.resolution=this.tileInfoView.getTileResolution(t),i}onConfigUpdate(){const t=this.layer.renderer;if(t.type==="heatmap"){const{minPixelIntensity:i,maxPixelIntensity:n}=t;this._intensityInfo.minPixelIntensity=i,this._intensityInfo.maxPixelIntensity=n,this._gradient=p(t.colorStops),this.tiles.forEach(s=>{const e=s.bitmap.source;e&&(e.minPixelIntensity=i,e.maxPixelIntensity=n,e.gradient=this._gradient,s.bitmap.invalidateTexture())})}}hitTest(){return Promise.resolve([])}install(t){t.addChild(this._container)}uninstall(t){this._container.removeAllChildren(),t.removeChild(this._container)}disposeTile(t){this._container.removeChild(t),t.destroy()}supportsRenderer(t){return t&&t.type==="heatmap"}onTileData(t){const i=this.tiles.get(t.tileKey);if(!i)return;const n=t.intensityInfo,{minPixelIntensity:s,maxPixelIntensity:e}=this._intensityInfo,r=i.bitmap.source||new c;r.intensities=n&&n.matrix||null,r.minPixelIntensity=s,r.maxPixelIntensity=e,r.gradient=this._gradient,i.bitmap.source=r,this._container.addChild(i),this._container.requestRender(),this.requestUpdate()}onTileError(t){console.error(t)}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(t,i){return console.error(t),Promise.reject()}};o=a([l("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],o);const K=o;export{K as default};
