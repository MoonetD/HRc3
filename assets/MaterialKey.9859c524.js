var Z=Object.defineProperty,X=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var E=(i,t,e)=>t in i?Z(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,o=(i,t)=>{for(var e in t||(t={}))P.call(t,e)&&E(i,e,t[e]);if(m)for(var e of m(t))G.call(t,e)&&E(i,e,t[e]);return i},l=(i,t)=>X(i,$(t));import{e as K}from"./GISSearch.b73a2371.js";import{i as k}from"./alignmentUtils.03ee467b.js";import{b as a,c as r,_ as u}from"./Utils.e0214b13.js";function H(i,t){const e=r.SIZE_FIELD_STOPS|r.SIZE_MINMAX_VALUE|r.SIZE_SCALE_STOPS|r.SIZE_UNIT_VALUE,s=(i&(u.FIELD_TARGETS_OUTLINE|u.MINMAX_TARGETS_OUTLINE|u.SCALE_TARGETS_OUTLINE|u.UNIT_TARGETS_OUTLINE))>>>4;return t.isOutline||t.isOutlinedFill?e&s:e&~s}const T=0,M=8,Y=7,_=8,F=11,O=11,L=12,I=13,x=14,A=15,f=15,U=16,B=17,b=18,R=19,C=20,w=21,N=22;function W(i,t){switch(i){case a.FILL:return p.from(t);case a.LINE:return z.from(t);case a.MARKER:return c.from(t);case a.TEXT:return g.from(t);case a.LABEL:return y.from(t);default:throw new Error(`Unable to createMaterialKey for unknown geometryType ${i}`)}}class n{constructor(t){this._data=0,this._data=t}static load(t){const e=this.shared;return e.data=t,e}set data(t){this._data=t}get data(){return this._data}get geometryType(){return this.bits(_,F)}set geometryType(t){this.setBits(t,_,F)}get mapAligned(){return!!this.bit(C)}set mapAligned(t){this.setBit(C,t)}get sdf(){return!!this.bit(O)}set sdf(t){this.setBit(O,t)}get pattern(){return!!this.bit(L)}set pattern(t){this.setBit(L,t)}get textureBinding(){return this.bits(T,M)}set textureBinding(t){this.setBits(t,T,M)}get geometryTypeString(){switch(this.geometryType){case a.FILL:return"fill";case a.MARKER:return"marker";case a.LINE:return"line";case a.TEXT:return"text";case a.LABEL:return"label";default:throw new K(`Unable to handle unknown geometryType: ${this.geometryType}`)}}setBit(t,e){const s=1<<t;e?this._data|=s:this._data&=~s}bit(t){return(this._data&1<<t)>>t}setBits(t,e,s){for(let v=e,h=0;v<s;v++,h++)this.setBit(v,(t&1<<h)!=0)}bits(t,e){let s=0;for(let v=t,h=0;v<e;v++,h++)s|=this.bit(v)<<h;return s}hasVV(){return!1}setVV(t,e){}getVariation(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf}}getVariationHash(){return this._data&~(Y&this.textureBinding)}}n.shared=new n(0);const S=i=>class extends i{get vvSizeMinMaxValue(){return this.bit(U)!==0}set vvSizeMinMaxValue(t){this.setBit(U,t)}get vvSizeScaleStops(){return this.bit(B)!==0}set vvSizeScaleStops(t){this.setBit(B,t)}get vvSizeFieldStops(){return this.bit(b)!==0}set vvSizeFieldStops(t){this.setBit(b,t)}get vvSizeUnitValue(){return this.bit(R)!==0}set vvSizeUnitValue(t){this.setBit(R,t)}hasVV(){return super.hasVV()||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}setVV(t,e){super.setVV(t,e);const s=H(t,e)&t;this.vvSizeMinMaxValue=!!(s&r.SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(s&r.SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(s&r.SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(s&r.SIZE_SCALE_STOPS)}},D=i=>class extends i{get vvRotation(){return this.bit(A)!==0}set vvRotation(t){this.setBit(A,t)}hasVV(){return super.hasVV()||this.vvRotation}setVV(t,e){super.setVV(t,e),this.vvRotation=!e.isOutline&&!!(t&r.ROTATION)}},d=i=>class extends i{get vvColor(){return this.bit(I)!==0}set vvColor(t){this.setBit(I,t)}hasVV(){return super.hasVV()||this.vvColor}setVV(t,e){super.setVV(t,e),this.vvColor=!e.isOutline&&!!(t&r.COLOR)}},V=i=>class extends i{get vvOpacity(){return this.bit(x)!==0}set vvOpacity(t){this.setBit(x,t)}hasVV(){return super.hasVV()||this.vvOpacity}setVV(t,e){super.setVV(t,e),this.vvOpacity=!e.isOutline&&!!(t&r.OPACITY)}};class p extends d(V(S(n))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=a.FILL,e.dotDensity=t.stride.fill==="dot-density",e.simple=t.stride.fill==="simple",e.outlinedFill=t.isOutlinedFill,e.dotDensity||e.setVV(t.vvFlags,t),e.data}getVariation(){return l(o({},super.getVariation()),{dotDensity:this.dotDensity,outlinedFill:this.outlinedFill,simple:this.simple,vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}get dotDensity(){return!!this.bit(f)}set dotDensity(t){this.setBit(f,t)}get simple(){return!!this.bit(N)}set simple(t){this.setBit(N,t)}get outlinedFill(){return!!this.bit(w)}set outlinedFill(t){this.setBit(w,t)}}p.shared=new p(0);class c extends d(V(D(S(n)))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=a.MARKER,e.setVV(t.vvFlags,t),e.data}getVariation(){return l(o({},super.getVariation()),{vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}}c.shared=new c(0);class z extends d(V(S(n))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=a.LINE,e.setVV(t.vvFlags,t),e.data}getVariation(){return l(o({},super.getVariation()),{vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}}z.shared=new z(0);class g extends d(V(D(S(n)))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=a.TEXT,e.setVV(t.vvFlags,t),e.data}getVariation(){return l(o({},super.getVariation()),{vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}}g.shared=new g(0);class y extends S(n){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=a.LABEL,e.setVV(t.vvFlags,t),e.mapAligned=k(t.placement),e.data}getVariation(){return l(o({},super.getVariation()),{vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}}y.shared=new y(0);export{z as B,W as L,g as R,c as U,n as _,y as b,p as x};
