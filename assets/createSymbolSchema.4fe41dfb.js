var b=Object.defineProperty,x=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var K=(e,r,t)=>r in e?b(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,l=(e,r)=>{for(var t in r||(r={}))z.call(r,t)&&K(e,t,r[t]);if(d)for(var t of d(r))F.call(r,t)&&K(e,t,r[t]);return e},m=(e,r)=>x(e,O(r));import{b as h}from"./Utils.e0214b13.js";import{L as p}from"./MaterialKey.9859c524.js";import"./GISSearch.b73a2371.js";import"./index.8ac88fb7.js";import"./ProjectWeberRenew.dc78a7b0.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./enums.84480fc7.js";import"./number.dc47462b.js";import"./enums.457e23f9.js";import"./Texture.df7d53ef.js";import"./VertexElementDescriptor.0406f2d4.js";import"./alignmentUtils.03ee467b.js";function y(e){if(e.type==="line-marker"){var r;return{type:"line-marker",color:(r=e.color)==null?void 0:r.toJSON(),placement:e.placement,style:e.style}}return e.constructor.fromJSON(e.toJSON()).toJSON()}function f(e){return hydrateKey(e)}function $(e,r,t){if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return E(e,r,t);case"simple-marker":case"picture-marker":return L(e,r,t);case"simple-line":return g(e,r,t);case"text":return N(e,r,t);case"label":return v(e,r,t);case"cim":return{type:"cim",rendererKey:r.vvFlags,data:e.data,maxVVSize:r.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:r.vvFlags,data:e,maxVVSize:r.maxVVSize};case"web-style":return m(l({},y(e)),{type:"web-style",hash:e.hash(),rendererKey:r.vvFlags,maxVVSize:r.maxVVSize});default:throw new Error(`symbol not supported ${e.type}`)}}function v(e,r,t){const a=e.toJSON(),s=p(h.LABEL,m(l({},r),{placement:a.labelPlacement}));return m(l({materialKey:t?f(s):s,hash:e.hash()},a),{labelPlacement:a.labelPlacement})}function E(e,r,t){const a=r.supportsOutlineFills,s=p(h.FILL,m(l({},r),{isOutlinedFill:a})),i=t?f(s):s,o=e.clone(),u=o.outline;r.supportsOutlineFills||(o.outline=null);const V=l({materialKey:i,hash:o.hash(),isOutlinedFill:!!r.supportsOutlineFills},y(o));if(r.supportsOutlineFills)return V;const n=[];if(n.push(V),u){const c=p(h.LINE,m(l({},r),{isOutline:!0})),S=l({materialKey:t?f(c):c,hash:u.hash()},y(u));n.push(S)}return{type:"composite-symbol",layers:n,hash:n.reduce((c,S)=>S.hash+c,"")}}function g(e,r,t){const a=p(h.LINE,r),s=t?f(a):a,i=e.clone(),o=i.marker;i.marker=null;const u=[];if(u.push(l({materialKey:s,hash:i.hash()},y(i))),o){var V;const n=p(h.MARKER,r),c=t?f(n):n;o.color=(V=o.color)!=null?V:i.color,u.push(l({materialKey:c,hash:o.hash(),lineWidth:i.width},y(o)))}return{type:"composite-symbol",layers:u,hash:u.reduce((n,c)=>c.hash+n,"")}}function L(e,r,t){const a=p(h.MARKER,r),s=t?f(a):a,i=y(e);return m(l({materialKey:s,hash:e.hash()},i),{angle:e.angle,maxVVSize:r.maxVVSize})}function N(e,r,t){const a=p(h.TEXT,r),s=t?f(a):a,i=y(e);return m(l({materialKey:s,hash:e.hash()},i),{angle:e.angle,maxVVSize:r.maxVVSize})}export{$ as createSymbolSchema};
