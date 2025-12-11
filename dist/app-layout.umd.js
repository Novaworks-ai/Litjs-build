(function($,T){typeof exports=="object"&&typeof module<"u"?T(exports):typeof define=="function"&&define.amd?define(["exports"],T):($=typeof globalThis<"u"?globalThis:$||self,T($.AppLayout={}))})(this,function($){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ve;const T=globalThis,St=T.ShadowRoot&&(T.ShadyCSS===void 0||T.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ot=Symbol(),Jt=new WeakMap;let Kt=class{constructor(t,r,o){if(this._$cssResult$=!0,o!==Ot)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(St&&t===void 0){const o=r!==void 0&&r.length===1;o&&(t=Jt.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Jt.set(r,t))}return t}toString(){return this.cssText}};const Xt=e=>new Kt(typeof e=="string"?e:e+"",void 0,Ot),b=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((o,a,i)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[i+1],e[0]);return new Kt(r,e,Ot)},ye=(e,t)=>{if(St)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const o=document.createElement("style"),a=T.litNonce;a!==void 0&&o.setAttribute("nonce",a),o.textContent=r.cssText,e.appendChild(o)}},Gt=St?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return Xt(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:xe,defineProperty:$e,getOwnPropertyDescriptor:ke,getOwnPropertyNames:_e,getOwnPropertySymbols:Ce,getPrototypeOf:Ae}=Object,M=globalThis,Zt=M.trustedTypes,Se=Zt?Zt.emptyScript:"",zt=M.reactiveElementPolyfillSupport,Q=(e,t)=>e,ut={toAttribute(e,t){switch(t){case Boolean:e=e?Se:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Dt=(e,t)=>!xe(e,t),Qt={attribute:!0,type:String,converter:ut,reflect:!1,useDefault:!1,hasChanged:Dt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),M.litPropertyMetadata??(M.litPropertyMetadata=new WeakMap);let Y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Qt){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const o=Symbol(),a=this.getPropertyDescriptor(t,o,r);a!==void 0&&$e(this.prototype,t,a)}}static getPropertyDescriptor(t,r,o){const{get:a,set:i}=ke(this.prototype,t)??{get(){return this[r]},set(s){this[r]=s}};return{get:a,set(s){const l=a==null?void 0:a.call(this);i==null||i.call(this,s),this.requestUpdate(t,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Qt}static _$Ei(){if(this.hasOwnProperty(Q("elementProperties")))return;const t=Ae(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Q("properties"))){const r=this.properties,o=[..._e(r),...Ce(r)];for(const a of o)this.createProperty(a,r[a])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[o,a]of r)this.elementProperties.set(o,a)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const a=this._$Eu(r,o);a!==void 0&&this._$Eh.set(a,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const a of o)r.unshift(Gt(a))}else t!==void 0&&r.push(Gt(t));return r}static _$Eu(t,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$EO)==null||r.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ye(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var o;return(o=r.hostConnected)==null?void 0:o.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(r=>{var o;return(o=r.hostDisconnected)==null?void 0:o.call(r)})}attributeChangedCallback(t,r,o){this._$AK(t,o)}_$ET(t,r){var i;const o=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,o);if(a!==void 0&&o.reflect===!0){const s=(((i=o.converter)==null?void 0:i.toAttribute)!==void 0?o.converter:ut).toAttribute(r,o.type);this._$Em=t,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$Em=null}}_$AK(t,r){var i,s;const o=this.constructor,a=o._$Eh.get(t);if(a!==void 0&&this._$Em!==a){const l=o.getPropertyOptions(a),n=typeof l.converter=="function"?{fromAttribute:l.converter}:((i=l.converter)==null?void 0:i.fromAttribute)!==void 0?l.converter:ut;this._$Em=a;const h=n.fromAttribute(r,l.type);this[a]=h??((s=this._$Ej)==null?void 0:s.get(a))??h,this._$Em=null}}requestUpdate(t,r,o){var a;if(t!==void 0){const i=this.constructor,s=this[t];if(o??(o=i.getPropertyOptions(t)),!((o.hasChanged??Dt)(s,r)||o.useDefault&&o.reflect&&s===((a=this._$Ej)==null?void 0:a.get(t))&&!this.hasAttribute(i._$Eu(t,o))))return;this.C(t,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:o,reflect:a,wrapped:i},s){o&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,s??r??this[t]),i!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||o||(r=void 0),this._$AL.set(t,r)),a===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const a=this.constructor.elementProperties;if(a.size>0)for(const[i,s]of a){const{wrapped:l}=s,n=this[i];l!==!0||this._$AL.has(i)||n===void 0||this.C(i,void 0,s,n)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(o=this._$EO)==null||o.forEach(a=>{var i;return(i=a.hostUpdate)==null?void 0:i.call(a)}),this.update(r)):this._$EM()}catch(a){throw t=!1,this._$EM(),a}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$EO)==null||r.forEach(o=>{var a;return(a=o.hostUpdated)==null?void 0:a.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(t){}firstUpdated(t){}};Y.elementStyles=[],Y.shadowRootOptions={mode:"open"},Y[Q("elementProperties")]=new Map,Y[Q("finalized")]=new Map,zt==null||zt({ReactiveElement:Y}),(M.reactiveElementVersions??(M.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=globalThis,gt=tt.trustedTypes,te=gt?gt.createPolicy("lit-html",{createHTML:e=>e}):void 0,ee="$lit$",N=`lit$${Math.random().toFixed(9).slice(2)}$`,re="?"+N,Oe=`<${re}>`,U=document,et=()=>U.createComment(""),rt=e=>e===null||typeof e!="object"&&typeof e!="function",Pt=Array.isArray,ze=e=>Pt(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Et=`[ 	
\f\r]`,at=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ae=/-->/g,oe=/>/g,I=RegExp(`>|${Et}(?:([^\\s"'>=/]+)(${Et}*=${Et}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ie=/'/g,se=/"/g,ne=/^(?:script|style|textarea|title)$/i,De=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),c=De(1),_=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),le=new WeakMap,R=U.createTreeWalker(U,129);function ce(e,t){if(!Pt(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return te!==void 0?te.createHTML(t):t}const Pe=(e,t)=>{const r=e.length-1,o=[];let a,i=t===2?"<svg>":t===3?"<math>":"",s=at;for(let l=0;l<r;l++){const n=e[l];let h,m,d=-1,g=0;for(;g<n.length&&(s.lastIndex=g,m=s.exec(n),m!==null);)g=s.lastIndex,s===at?m[1]==="!--"?s=ae:m[1]!==void 0?s=oe:m[2]!==void 0?(ne.test(m[2])&&(a=RegExp("</"+m[2],"g")),s=I):m[3]!==void 0&&(s=I):s===I?m[0]===">"?(s=a??at,d=-1):m[1]===void 0?d=-2:(d=s.lastIndex-m[2].length,h=m[1],s=m[3]===void 0?I:m[3]==='"'?se:ie):s===se||s===ie?s=I:s===ae||s===oe?s=at:(s=I,a=void 0);const u=s===I&&e[l+1].startsWith("/>")?" ":"";i+=s===at?n+Oe:d>=0?(o.push(h),n.slice(0,d)+ee+n.slice(d)+N+u):n+N+(d===-2?l:u)}return[ce(e,i+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class ot{constructor({strings:t,_$litType$:r},o){let a;this.parts=[];let i=0,s=0;const l=t.length-1,n=this.parts,[h,m]=Pe(t,r);if(this.el=ot.createElement(h,o),R.currentNode=this.el.content,r===2||r===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(a=R.nextNode())!==null&&n.length<l;){if(a.nodeType===1){if(a.hasAttributes())for(const d of a.getAttributeNames())if(d.endsWith(ee)){const g=m[s++],u=a.getAttribute(d).split(N),w=/([.?@])?(.*)/.exec(g);n.push({type:1,index:i,name:w[2],strings:u,ctor:w[1]==="."?Te:w[1]==="?"?Me:w[1]==="@"?Ne:bt}),a.removeAttribute(d)}else d.startsWith(N)&&(n.push({type:6,index:i}),a.removeAttribute(d));if(ne.test(a.tagName)){const d=a.textContent.split(N),g=d.length-1;if(g>0){a.textContent=gt?gt.emptyScript:"";for(let u=0;u<g;u++)a.append(d[u],et()),R.nextNode(),n.push({type:2,index:++i});a.append(d[g],et())}}}else if(a.nodeType===8)if(a.data===re)n.push({type:2,index:i});else{let d=-1;for(;(d=a.data.indexOf(N,d+1))!==-1;)n.push({type:7,index:i}),d+=N.length-1}i++}}static createElement(t,r){const o=U.createElement("template");return o.innerHTML=t,o}}function V(e,t,r=e,o){var s,l;if(t===_)return t;let a=o!==void 0?(s=r._$Co)==null?void 0:s[o]:r._$Cl;const i=rt(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==i&&((l=a==null?void 0:a._$AO)==null||l.call(a,!1),i===void 0?a=void 0:(a=new i(e),a._$AT(e,r,o)),o!==void 0?(r._$Co??(r._$Co=[]))[o]=a:r._$Cl=a),a!==void 0&&(t=V(e,a._$AS(e,t.values),a,o)),t}let Ee=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:o}=this._$AD,a=((t==null?void 0:t.creationScope)??U).importNode(r,!0);R.currentNode=a;let i=R.nextNode(),s=0,l=0,n=o[0];for(;n!==void 0;){if(s===n.index){let h;n.type===2?h=new J(i,i.nextSibling,this,t):n.type===1?h=new n.ctor(i,n.name,n.strings,this,t):n.type===6&&(h=new je(i,this,t)),this._$AV.push(h),n=o[++l]}s!==(n==null?void 0:n.index)&&(i=R.nextNode(),s++)}return R.currentNode=U,a}p(t){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,r),r+=o.strings.length-2):o._$AI(t[r])),r++}};class J{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,o,a){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=a,this._$Cv=(a==null?void 0:a.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=V(this,t,r),rt(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==_&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ze(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==v&&rt(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){var i;const{values:r,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=ot.createElement(ce(o.h,o.h[0]),this.options)),o);if(((i=this._$AH)==null?void 0:i._$AD)===a)this._$AH.p(r);else{const s=new Ee(a,this),l=s.u(this.options);s.p(r),this.T(l),this._$AH=s}}_$AC(t){let r=le.get(t.strings);return r===void 0&&le.set(t.strings,r=new ot(t)),r}k(t){Pt(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,a=0;for(const i of t)a===r.length?r.push(o=new J(this.O(et()),this.O(et()),this,this.options)):o=r[a],o._$AI(i),a++;a<r.length&&(this._$AR(o&&o._$AB.nextSibling,a),r.length=a)}_$AR(t=this._$AA.nextSibling,r){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,r);t!==this._$AB;){const a=t.nextSibling;t.remove(),t=a}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class bt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,o,a,i){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=r,this._$AM=a,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=v}_$AI(t,r=this,o,a){const i=this.strings;let s=!1;if(i===void 0)t=V(this,t,r,0),s=!rt(t)||t!==this._$AH&&t!==_,s&&(this._$AH=t);else{const l=t;let n,h;for(t=i[0],n=0;n<i.length-1;n++)h=V(this,l[o+n],r,n),h===_&&(h=this._$AH[n]),s||(s=!rt(h)||h!==this._$AH[n]),h===v?t=v:t!==v&&(t+=(h??"")+i[n+1]),this._$AH[n]=h}s&&!a&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Te extends bt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}}class Me extends bt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==v)}}class Ne extends bt{constructor(t,r,o,a,i){super(t,r,o,a,i),this.type=5}_$AI(t,r=this){if((t=V(this,t,r,0)??v)===_)return;const o=this._$AH,a=t===v&&o!==v||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==v&&(o===v||a);a&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class je{constructor(t,r,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const Le={I:J},Tt=tt.litHtmlPolyfillSupport;Tt==null||Tt(ot,J),(tt.litHtmlVersions??(tt.litHtmlVersions=[])).push("3.3.1");const Ue=(e,t,r)=>{const o=(r==null?void 0:r.renderBefore)??t;let a=o._$litPart$;if(a===void 0){const i=(r==null?void 0:r.renderBefore)??null;o._$litPart$=a=new J(t.insertBefore(et(),i),i,void 0,r??{})}return a._$AI(e),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis;let f=class extends Y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ue(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return _}};f._$litElement$=!0,f.finalized=!0,(ve=H.litElementHydrateSupport)==null||ve.call(H,{LitElement:f});const Mt=H.litElementPolyfillSupport;Mt==null||Mt({LitElement:f}),(H.litElementVersions??(H.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ie={attribute:!0,type:String,converter:ut,reflect:!1,hasChanged:Dt},Re=(e=Ie,t,r)=>{const{kind:o,metadata:a}=r;let i=globalThis.litPropertyMetadata.get(a);if(i===void 0&&globalThis.litPropertyMetadata.set(a,i=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(r.name,e),o==="accessor"){const{name:s}=r;return{set(l){const n=t.get.call(this);t.set.call(this,l),this.requestUpdate(s,n,e)},init(l){return l!==void 0&&this.C(s,void 0,e,l),l}}}if(o==="setter"){const{name:s}=r;return function(l){const n=this[s];t.call(this,l),this.requestUpdate(s,n,e)}}throw Error("Unsupported decorator location: "+o)};function p(e){return(t,r)=>typeof r=="object"?Re(e,t,r):((o,a,i)=>{const s=a.hasOwnProperty(i);return a.constructor.createProperty(i,o),s?Object.getOwnPropertyDescriptor(a,i):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function x(e){return p({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft={ATTRIBUTE:1,CHILD:2},mt=e=>(...t)=>({_$litDirective$:e,values:t});let vt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,o){this._$Ct=t,this._$AM=r,this._$Ci=o}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=mt(class extends vt{constructor(e){var t;if(super(e),e.type!==ft.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var o,a;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((o=this.nt)!=null&&o.has(i))&&this.st.add(i);return this.render(t)}const r=e.element.classList;for(const i of this.st)i in t||(r.remove(i),this.st.delete(i));for(const i in t){const s=!!t[i];s===this.st.has(i)||(a=this.nt)!=null&&a.has(i)||(s?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return _}});var He=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,K=(e,t,r,o)=>{for(var a=o>1?void 0:o?Be(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(a=(o?s(t,r,a):s(a))||a);return o&&a&&He(t,r,a),a};let B=class extends f{constructor(){super(...arguments),this.tabs=[],this.showTabsCount=3,this.variant="primary",this.selectedTab="",this.moreOpen=!1,this.outsideClickHandler=e=>{const t=typeof e.composedPath=="function"?e.composedPath():this.fallbackPath(e.target);Array.isArray(t)&&!t.includes(this)&&(this.moreOpen=!1)},this.onKeyDownTablist=e=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(e.key))return;const r=Array.from(this.renderRoot.querySelectorAll('[role="tab"]')).filter(s=>!s.closest('[data-more="true"]')||this.moreOpen);if(!r.length)return;const o=document.activeElement,a=r.indexOf(o),i=s=>{const l=r[s];l==null||l.focus(),l==null||l.click()};switch(e.preventDefault(),e.key){case"ArrowRight":i((a+1+r.length)%r.length);break;case"ArrowLeft":i((a-1+r.length)%r.length);break;case"Home":i(0);break;case"End":i(r.length-1);break}}}createRenderRoot(){return this}fallbackPath(e){const t=[];let r=e;for(;r;)t.push(r),r=r.parentNode;return t}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.outsideClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.outsideClickHandler)}firstUpdated(){this.tabs.length>0&&(this.selectedTab=this.tabs[0].value)}selectTab(e){this.selectedTab=e.value,this.moreOpen=!1,this.dispatchEvent(new CustomEvent("tab-change",{detail:{value:e.value},bubbles:!0,composed:!0}))}toggleMore(e){e.stopPropagation(),this.moreOpen=!this.moreOpen}getVariantClasses(){switch(this.variant){case"primary":return"text-primary hover:text-primary-800 border-primary";case"secondary":return"text-gray-600 hover:text-gray-800 border-gray-300";case"success":return"text-green-600 hover:text-green-700 border-green-400";case"danger":return"text-red-600 hover:text-red-700 border-red-400";default:return"text-hover:text-primary border-indigo-500"}}render(){const e=this.tabs.slice(0,this.showTabsCount),t=this.tabs.slice(this.showTabsCount),r=this.getVariantClasses();return c`
      <div
        class="flex items-center gap-1 relative select-none"
        role="tablist"
        @keydown=${this.onKeyDownTablist}
      >
        <!-- Visible Tabs -->
        ${e.map(o=>{const a=this.selectedTab===o.value,i="px-12 py-8 border-b-2 transition-all text-sm",s=`font-semibold border-current ${r}`,n=`${i} ${a?s:"font-normal text-gray-600 hover:text-primary-900 border-transparent"}`;return c`
            <button
              role="tab"
              aria-selected=${String(a)}
              tabindex=${a?"0":"-1"}
              aria-controls=${`${o.value}-panel`}
              class=${n}
              @click=${()=>this.selectTab(o)}
            >
              ${o.label}
            </button>
          `})}

        <!-- More Dropdown -->
        ${t.length>0?c`
              <div class="relative" data-more="true">
                <button
                  class="px-4 py-2 border-b-2 text-sm font-normal text-gray-700 hover:text-gray-900 border-transparent flex items-center gap-1 transition"
                  @click=${this.toggleMore}
                  aria-haspopup="listbox"
                  aria-expanded=${String(this.moreOpen)}
                  type="button"
                >
                  More
                  <svg
                    class="w-3 h-3 transition-transform ${this.moreOpen?"rotate-180":"rotate-0"}"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                ${this.moreOpen?c`
                      <div
                        class="absolute top-full right-0 mt-2 min-w-[150px] bg-white border border-gray-200 rounded-sm shadow-lg overflow-hidden z-20 animate-fadeIn"
                        role="listbox"
                      >
                        ${t.map(o=>{const a=this.selectedTab===o.value,i=Nt({"w-full text-left py-8 px-12 text-sm hover:bg-gray-100 transition":!0,"font-semibold text-primary":a,"font-normal text-gray-700":!a});return c`
                            <button
                              role="tab"
                              aria-selected=${String(a)}
                              tabindex=${a?"0":"-1"}
                              aria-controls=${`${o.value}-panel`}
                              class=${i}
                              @click=${()=>this.selectTab(o)}
                              data-more-item="true"
                            >
                              ${o.label}
                            </button>
                          `})}
                      </div>
                    `:""}
              </div>
            `:""}
      </div>
    `}};K([p({type:Array})],B.prototype,"tabs",2),K([p({type:Number})],B.prototype,"showTabsCount",2),K([p({type:String})],B.prototype,"variant",2),K([x()],B.prototype,"selectedTab",2),K([x()],B.prototype,"moreOpen",2),B=K([y("tabs-component")],B);const qe='@import"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap";*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:Inter,sans-serif;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}body{background-color:#f4f4f6;font-family:Poppins,Inter,sans-serif}.card{border-radius:24px;border-width:1px;--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));padding:1.5rem;--tw-shadow: 0 2px 8px rgba(0,0,0,.08);--tw-shadow-colored: 0 2px 8px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.visible{visibility:visible}.collapse{visibility:collapse}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.inset-0{top:0;right:0;bottom:0;left:0}.-right-2{right:-.5rem}.-top-2{top:-.5rem}.left-3{left:.75rem}.right-0{right:0}.top-0{top:0}.top-1\\/2{top:50%}.top-full{top:100%}.z-20{z-index:20}.z-50{z-index:50}.mx-3{margin-left:.75rem;margin-right:.75rem}.mx-auto{margin-left:auto;margin-right:auto}.my-1{margin-top:.25rem;margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:4px}.ml-4{margin-left:4px}.ml-auto{margin-left:auto}.mr-1{margin-right:.25rem}.mr-2{margin-right:.5rem}.mt-0\\.5{margin-top:.125rem}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:4px}.mt-6{margin-top:1.5rem}.mt-8{margin-top:8px}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.hidden{display:none}.h-12{height:12px}.h-14{height:3.5rem}.h-16{height:16px}.h-2{height:.5rem}.h-3{height:.75rem}.h-4{height:4px}.h-5{height:1.25rem}.h-8{height:8px}.h-9{height:2.25rem}.h-\\[100px\\]{height:100px}.h-full{height:100%}.w-12{width:12px}.w-14{width:3.5rem}.w-16{width:16px}.w-2{width:.5rem}.w-3{width:.75rem}.w-3\\/4{width:75%}.w-4{width:4px}.w-48{width:48px}.w-5{width:1.25rem}.w-5\\/6{width:83.333333%}.w-64{width:16rem}.w-8{width:8px}.w-9{width:2.25rem}.w-\\[100px\\]{width:100px}.w-full{width:100%}.min-w-0{min-width:0px}.min-w-\\[150px\\]{min-width:150px}.max-w-5xl{max-width:64rem}.max-w-md{max-width:28rem}.max-w-sm{max-width:24rem}.flex-1{flex:1 1 0%}.flex-shrink{flex-shrink:1}.border-collapse{border-collapse:collapse}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-0{--tw-rotate: 0deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-105{--tw-scale-x: 1.05;--tw-scale-y: 1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.list-inside{list-style-position:inside}.list-disc{list-style-type:disc}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:4px}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-3>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.75rem * var(--tw-space-x-reverse));margin-left:calc(.75rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(4px * var(--tw-space-x-reverse));margin-left:calc(4px * calc(1 - var(--tw-space-x-reverse)))}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.75rem * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(4px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(4px * var(--tw-space-y-reverse))}.overflow-hidden{overflow:hidden}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rounded{border-radius:.25rem}.rounded-full{border-radius:999px}.rounded-lg{border-radius:24px}.rounded-md{border-radius:16px}.rounded-sm{border-radius:8px}.rounded-xl{border-radius:32px}.border{border-width:1px}.border-2{border-width:2px}.border-\\[5px\\]{border-width:5px}.border-b{border-bottom-width:1px}.border-b-2{border-bottom-width:2px}.border-l{border-left-width:1px}.border-l-4{border-left-width:4px}.border-t{border-top-width:1px}.border-current{border-color:currentColor}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-gray-200\\/50{border-color:#e5e7eb80}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.border-green-400{--tw-border-opacity: 1;border-color:rgb(74 222 128 / var(--tw-border-opacity, 1))}.border-indigo-100{--tw-border-opacity: 1;border-color:rgb(224 231 255 / var(--tw-border-opacity, 1))}.border-indigo-200{--tw-border-opacity: 1;border-color:rgb(199 210 254 / var(--tw-border-opacity, 1))}.border-indigo-500{--tw-border-opacity: 1;border-color:rgb(99 102 241 / var(--tw-border-opacity, 1))}.border-primary{--tw-border-opacity: 1;border-color:rgb(var(--color-primary) / var(--tw-border-opacity, 1))}.border-primary-100{--tw-border-opacity: 1;border-color:rgb(237 233 254 / var(--tw-border-opacity, 1))}.border-red-200{--tw-border-opacity: 1;border-color:rgb(254 202 202 / var(--tw-border-opacity, 1))}.border-red-400{--tw-border-opacity: 1;border-color:rgb(248 113 113 / var(--tw-border-opacity, 1))}.border-transparent{border-color:transparent}.border-white{--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity, 1))}.bg-black\\/40{background-color:#0006}.bg-black\\/50{background-color:#00000080}.bg-blue-100{--tw-bg-opacity: 1;background-color:rgb(219 234 254 / var(--tw-bg-opacity, 1))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.bg-gray-300{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity, 1))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.bg-indigo-100{--tw-bg-opacity: 1;background-color:rgb(224 231 255 / var(--tw-bg-opacity, 1))}.bg-primary{--tw-bg-opacity: 1;background-color:rgb(var(--color-primary) / var(--tw-bg-opacity, 1))}.bg-primary-100{--tw-bg-opacity: 1;background-color:rgb(237 233 254 / var(--tw-bg-opacity, 1))}.bg-primary-50{--tw-bg-opacity: 1;background-color:rgb(245 243 255 / var(--tw-bg-opacity, 1))}.bg-red-50{--tw-bg-opacity: 1;background-color:rgb(254 242 242 / var(--tw-bg-opacity, 1))}.bg-rose-500{--tw-bg-opacity: 1;background-color:rgb(244 63 94 / var(--tw-bg-opacity, 1))}.bg-secondary{--tw-bg-opacity: 1;background-color:rgb(var(--color-secondary) / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-white\\/80{background-color:#fffc}.bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.from-indigo-50{--tw-gradient-from: #eef2ff var(--tw-gradient-from-position);--tw-gradient-to: rgb(238 242 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.from-indigo-500{--tw-gradient-from: #6366f1 var(--tw-gradient-from-position);--tw-gradient-to: rgb(99 102 241 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.from-indigo-600{--tw-gradient-from: #4f46e5 var(--tw-gradient-from-position);--tw-gradient-to: rgb(79 70 229 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.to-purple-50{--tw-gradient-to: #faf5ff var(--tw-gradient-to-position)}.to-purple-600{--tw-gradient-to: #9333ea var(--tw-gradient-to-position)}.bg-clip-text{-webkit-background-clip:text;background-clip:text}.object-cover{-o-object-fit:cover;object-fit:cover}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:4px}.p-5{padding:1.25rem}.p-6{padding:1.5rem}.px-12{padding-left:12px;padding-right:12px}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:4px;padding-right:4px}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-8{padding-left:8px;padding-right:8px}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:4px;padding-bottom:4px}.py-8{padding-top:8px;padding-bottom:8px}.pl-10{padding-left:2.5rem}.pl-4{padding-left:4px}.pr-4{padding-right:4px}.pt-2{padding-top:.5rem}.pt-4{padding-top:4px}.pt-6{padding-top:1.5rem}.text-left{text-align:left}.text-center{text-align:center}.text-2xl{font-size:1.5rem;line-height:2rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-normal{font-weight:400}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.tracking-wide{letter-spacing:.01em}.text-blue-800{--tw-text-opacity: 1;color:rgb(30 64 175 / var(--tw-text-opacity, 1))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.text-green-600{--tw-text-opacity: 1;color:rgb(22 163 74 / var(--tw-text-opacity, 1))}.text-indigo-400{--tw-text-opacity: 1;color:rgb(129 140 248 / var(--tw-text-opacity, 1))}.text-indigo-800{--tw-text-opacity: 1;color:rgb(55 48 163 / var(--tw-text-opacity, 1))}.text-primary{--tw-text-opacity: 1;color:rgb(var(--color-primary) / var(--tw-text-opacity, 1))}.text-primary-600{--tw-text-opacity: 1;color:rgb(124 58 237 / var(--tw-text-opacity, 1))}.text-primary-700{--tw-text-opacity: 1;color:rgb(109 40 217 / var(--tw-text-opacity, 1))}.text-primary-800{--tw-text-opacity: 1;color:rgb(91 33 182 / var(--tw-text-opacity, 1))}.text-red-400{--tw-text-opacity: 1;color:rgb(248 113 113 / var(--tw-text-opacity, 1))}.text-red-600{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity, 1))}.text-red-800{--tw-text-opacity: 1;color:rgb(153 27 27 / var(--tw-text-opacity, 1))}.text-transparent{color:transparent}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.underline{text-decoration-line:underline}.opacity-25{opacity:.25}.opacity-50{opacity:.5}.opacity-75{opacity:.75}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 4px 20px rgba(0,0,0,.12);--tw-shadow-colored: 0 4px 20px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px rgba(0,0,0,.04);--tw-shadow-colored: 0 1px 2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.ring-2{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.ring-indigo-300{--tw-ring-opacity: 1;--tw-ring-color: rgb(165 180 252 / var(--tw-ring-opacity, 1))}.blur{--tw-blur: blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.drop-shadow{--tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / .1)) drop-shadow(0 1px 1px rgb(0 0 0 / .06));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-sm{--tw-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.backdrop-blur-xl{--tw-backdrop-blur: blur(24px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}:root{--color-primary: 130 0 219;--color-secondary: 249 115 22}.hover\\:-translate-y-0\\.5:hover{--tw-translate-y: -.125rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:scale-105:hover{--tw-scale-x: 1.05;--tw-scale-y: 1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:border-primary-300:hover{--tw-border-opacity: 1;border-color:rgb(196 181 253 / var(--tw-border-opacity, 1))}.hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-50:hover{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.hover\\:bg-indigo-50:hover{--tw-bg-opacity: 1;background-color:rgb(238 242 255 / var(--tw-bg-opacity, 1))}.hover\\:bg-primary-50:hover{--tw-bg-opacity: 1;background-color:rgb(245 243 255 / var(--tw-bg-opacity, 1))}.hover\\:bg-primary-700:hover{--tw-bg-opacity: 1;background-color:rgb(109 40 217 / var(--tw-bg-opacity, 1))}.hover\\:bg-primary\\/10:hover{background-color:rgb(var(--color-primary) / .1)}.hover\\:bg-red-50:hover{--tw-bg-opacity: 1;background-color:rgb(254 242 242 / var(--tw-bg-opacity, 1))}.hover\\:bg-secondary-700:hover{--tw-bg-opacity: 1;background-color:rgb(194 65 12 / var(--tw-bg-opacity, 1))}.hover\\:text-gray-800:hover{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.hover\\:text-gray-900:hover{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.hover\\:text-green-700:hover{--tw-text-opacity: 1;color:rgb(21 128 61 / var(--tw-text-opacity, 1))}.hover\\:text-primary:hover{--tw-text-opacity: 1;color:rgb(var(--color-primary) / var(--tw-text-opacity, 1))}.hover\\:text-primary-800:hover{--tw-text-opacity: 1;color:rgb(91 33 182 / var(--tw-text-opacity, 1))}.hover\\:text-primary-900:hover{--tw-text-opacity: 1;color:rgb(76 29 149 / var(--tw-text-opacity, 1))}.hover\\:text-red-700:hover{--tw-text-opacity: 1;color:rgb(185 28 28 / var(--tw-text-opacity, 1))}.hover\\:shadow-lg:hover{--tw-shadow: 0 4px 20px rgba(0,0,0,.12);--tw-shadow-colored: 0 4px 20px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.hover\\:shadow-md:hover{--tw-shadow: 0 2px 8px rgba(0,0,0,.08);--tw-shadow-colored: 0 2px 8px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.focus\\:border-indigo-500:focus{--tw-border-opacity: 1;border-color:rgb(99 102 241 / var(--tw-border-opacity, 1))}.focus\\:border-primary:focus{--tw-border-opacity: 1;border-color:rgb(var(--color-primary) / var(--tw-border-opacity, 1))}.focus\\:border-transparent:focus{border-color:transparent}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-indigo-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(99 102 241 / var(--tw-ring-opacity, 1))}.focus\\:ring-primary:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(var(--color-primary) / var(--tw-ring-opacity, 1))}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:ring-2:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-visible\\:ring-indigo-300:focus-visible{--tw-ring-opacity: 1;--tw-ring-color: rgb(165 180 252 / var(--tw-ring-opacity, 1))}.focus-visible\\:ring-primary:focus-visible{--tw-ring-opacity: 1;--tw-ring-color: rgb(var(--color-primary) / var(--tw-ring-opacity, 1))}.focus-visible\\:ring-secondary:focus-visible{--tw-ring-opacity: 1;--tw-ring-color: rgb(var(--color-secondary) / var(--tw-ring-opacity, 1))}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width: 2px}.active\\:scale-95:active{--tw-scale-x: .95;--tw-scale-y: .95;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}';var Fe=Object.defineProperty,We=Object.getOwnPropertyDescriptor,j=(e,t,r,o)=>{for(var a=o>1?void 0:o?We(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(a=(o?s(t,r,a):s(a))||a);return o&&a&&Fe(t,r,a),a};let C=class extends f{constructor(){super(...arguments),this.variant="primary",this.size="md",this.disabled=!1,this.loading=!1,this.type="button",this.block=!1,this.ariaLabel=""}render(){const e=!(this.disabled||this.loading),t={"inline-flex items-center justify-center transition-all duration-200 gap-2":!0,"rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2":!0,"opacity-50 cursor-not-allowed":!e,"active:scale-95 hover:scale-105":e,"w-full":this.block,"px-3 py-1.5 text-sm":this.size==="sm","px-4 py-2 text-base":this.size==="md","px-5 py-3 text-lg":this.size==="lg","bg-primary text-white hover:bg-primary-700 focus-visible:ring-primary":this.variant==="primary"&&e,"bg-gray-300 text-gray-700":this.variant==="primary"&&!e,"bg-secondary text-white hover:bg-secondary-700 focus-visible:ring-secondary":this.variant==="secondary"&&e,"border-2 border-primary text-primary hover:bg-primary/10 focus-visible:ring-primary":this.variant==="outline"&&e,"border-2 border-gray-300 text-gray-400":this.variant==="outline"&&!e,"text-primary hover:bg-primary-50 focus-visible:ring-primary":this.variant==="ghost"&&e,"text-gray-400":this.variant==="ghost"&&!e},r=this.ariaLabel||void 0;return c`
      <button
        class=${Nt(t)}
        type=${this.type}
        ?disabled=${!e}
        aria-disabled=${!e}
        aria-busy=${this.loading}
        aria-label=${r}
        data-variant=${this.variant}
        data-size=${this.size}
        data-loading=${this.loading}
        @click=${this.handleClick}
        @mouseenter=${this.handleHover}
        @mouseleave=${this.handleLeave}
      >
        ${this.loading?this.renderSpinner():""}
        <slot name="prefix"></slot>
        <slot></slot>
        <slot name="suffix"></slot>
      </button>
    `}renderSpinner(){return c`
      <svg
        class="animate-spin h-4 w-4 mr-1"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    `}handleClick(e){(this.disabled||this.loading)&&(e.preventDefault(),e.stopPropagation())}handleHover(){!this.disabled&&!this.loading&&this.dispatchEvent(new CustomEvent("hover",{bubbles:!0}))}handleLeave(){this.dispatchEvent(new CustomEvent("leave",{bubbles:!0}))}};C.styles=b`
    ${Xt(qe)}
    // Outline: always keep the border visible
      "border-2 border-primary text-primary hover:bg-primary/10 focus-visible:ring-primary":
        this.variant === "outline" && isInteractive,
      "border-2 border-gray-300 text-gray-400":
        this.variant === "outline" && !isInteractive,
    button {
      border: none;
      font-family: inherit;
      cursor: pointer;
      outline: none;
    }
    button:disabled {
      cursor: not-allowed;
    }
  `,j([p({type:String,reflect:!0})],C.prototype,"variant",2),j([p({type:String,reflect:!0})],C.prototype,"size",2),j([p({type:Boolean,reflect:!0})],C.prototype,"disabled",2),j([p({type:Boolean,reflect:!0})],C.prototype,"loading",2),j([p({type:String,reflect:!0})],C.prototype,"type",2),j([p({type:Boolean,attribute:"block",reflect:!0})],C.prototype,"block",2),j([p({type:String})],C.prototype,"ariaLabel",2),C=j([y("ui-button")],C);/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var Ye={prefix:"fas",iconName:"map-pin",icon:[320,512,[128205],"f276","M192 284.4C256.1 269.9 304 212.5 304 144 304 64.5 239.5 0 160 0S16 64.5 16 144c0 68.5 47.9 125.9 112 140.4L128 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-195.6zM168 96c-30.9 0-56 25.1-56 56 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.4 46.6-104 104-104 13.3 0 24 10.7 24 24s-10.7 24-24 24z"]},Ve={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]},Je={icon:[448,512,[128276,61602],"f0f3","M224 0c-17.7 0-32 14.3-32 32l0 3.2C119 50 64 114.6 64 192l0 21.7c0 48.1-16.4 94.8-46.4 132.4L7.8 358.3C2.7 364.6 0 372.4 0 380.5 0 400.1 15.9 416 35.5 416l376.9 0c19.6 0 35.5-15.9 35.5-35.5 0-8.1-2.7-15.9-7.8-22.2l-9.8-12.2C400.4 308.5 384 261.8 384 213.7l0-21.7c0-77.4-55-142-128-156.8l0-3.2c0-17.7-14.3-32-32-32zM162 464c7.1 27.6 32.2 48 62 48s54.9-20.4 62-48l-124 0z"]},Ke={prefix:"fas",iconName:"mobile",icon:[384,512,[128241,"mobile-android","mobile-phone"],"f3ce","M80 0C44.7 0 16 28.7 16 64l0 384c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L80 0zm72 416l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]},Xe={icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Ge=Xe,Ze={icon:[448,512,[],"f077","M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},Qe={prefix:"fas",iconName:"building",icon:[384,512,[127970,61687],"f1ad","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM176 352l32 0c17.7 0 32 14.3 32 32l0 80-96 0 0-80c0-17.7 14.3-32 32-32zM96 112c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM240 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM96 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm144-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"]},tr={icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]},de=tr,er={icon:[512,512,[62108,"question-circle"],"f059","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-336c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},rr=er,ar={icon:[512,512,["sign-out-alt"],"f2f5","M505 273c9.4-9.4 9.4-24.6 0-33.9L361 95c-6.9-6.9-17.2-8.9-26.2-5.2S320 102.3 320 112l0 80-112 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l112 0 0 80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L505 273zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]},or={prefix:"fas",iconName:"calendar",icon:[448,512,[128197,128198],"f133","M128 0C110.3 0 96 14.3 96 32l0 32-32 0C28.7 64 0 92.7 0 128l0 48 448 0 0-48c0-35.3-28.7-64-64-64l-32 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32-128 0 0-32c0-17.7-14.3-32-32-32zM0 224L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192-448 0z"]},pe={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144,62470,"user-alt","user-large"],"f007","M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"]},ir={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"]},sr={icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},nr={icon:[384,512,["map-marker"],"f041","M192 0C86 0 0 84.4 0 188.6 0 307.9 120.2 450.9 170.4 505.4 182.2 518.2 201.8 518.2 213.6 505.4 263.8 450.9 384 307.9 384 188.6 384 84.4 298 0 192 0z"]},lr={prefix:"fas",iconName:"tag",icon:[512,512,[127991],"f02b","M32.5 96l0 149.5c0 17 6.7 33.3 18.7 45.3l192 192c25 25 65.5 25 90.5 0L483.2 333.3c25-25 25-65.5 0-90.5l-192-192C279.2 38.7 263 32 246 32L96.5 32c-35.3 0-64 28.7-64 64zm112 16a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},cr={prefix:"fas",iconName:"briefcase",icon:[512,512,[128188],"f0b1","M200 48l112 0c4.4 0 8 3.6 8 8l0 40-128 0 0-40c0-4.4 3.6-8 8-8zm-56 8l0 40-80 0C28.7 96 0 124.7 0 160l0 96 512 0 0-96c0-35.3-28.7-64-64-64l-80 0 0-40c0-30.9-25.1-56-56-56L200 0c-30.9 0-56 25.1-56 56zM512 304l-192 0 0 16c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-16-192 0 0 112c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-112z"]};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class jt extends vt{constructor(t){if(super(t),this.it=v,t.type!==ft.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===v||t==null)return this._t=void 0,this.it=t;if(t===_)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}jt.directiveName="unsafeHTML",jt.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Lt=class extends jt{};Lt.directiveName="unsafeSVG",Lt.resultType=2;const dr=mt(Lt),k=(e,t="")=>{if(!e||!e.icon)return c``;const r=e.icon[0],o=e.icon[1],a=e.icon[4],i=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${r} ${o}" fill="currentColor" aria-hidden="true"><path d="${a}"/></svg>`;return c`<span class="${t} inline-block">${dr(i)}</span>`};var pr=Object.defineProperty,hr=Object.getOwnPropertyDescriptor,wt=(e,t,r,o)=>{for(var a=o>1?void 0:o?hr(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(a=(o?s(t,r,a):s(a))||a);return o&&a&&pr(t,r,a),a};let it=class extends f{constructor(){super(...arguments),this.employeeId="",this.employee={fullName:"John Doe",title:"Senior Frontend Engineer",location:"New York, USA",avatarUrl:"https://i.pravatar.cc/150?img=12"}}createRenderRoot(){return this}updated(e){e.has("employeeId")&&this._loadEmployee(this.employeeId)}async _loadEmployee(e){}_handleOrgChartClick(){this.onOrgChartClick&&this.onOrgChartClick(this.employeeId,this.employee),this.dispatchEvent(new CustomEvent("org-chart-click",{detail:{employeeId:this.employeeId,employee:this.employee},bubbles:!0}))}_onTabChange(e){this.dispatchEvent(new CustomEvent("section-change",{detail:e.detail,bubbles:!0,composed:!0}))}render(){const e=this.employee;return c`
      <section
        class="w-full pt-6 border-b"
        style="background: linear-gradient(90deg, #FAF5FF 0%, #FDF2F8 50%, #FFF7ED 100%);"
      >
        <div class="max-w-5xl mx-auto px-4">
          <!-- main header row -->
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
              <img
                class="w-[100px] h-[100px] rounded-full border-[5px] border-white shadow-sm"
                src=${(e==null?void 0:e.avatarUrl)??""}
                alt=${e?`${e.fullName} avatar`:"Employee avatar"}
                width="100"
                height="100"
                loading="lazy"
              />

              <div>
                <div class="text-2xl font-semibold">${(e==null?void 0:e.fullName)??""}</div>
                <div class="text-sm text-primary">${(e==null?void 0:e.title)??""}</div>

                <div class="flex items-center gap-1 mt-1 text-sm text-gray-600">
                  <span>${k(nr,"w-3 h-3")}</span>
                  <span>${(e==null?void 0:e.location)??""}</span>
                </div>
              </div>
            </div>

            <ui-button
              @click=${this._handleOrgChartClick}
              variant="outline"
              size="sm"
              aria-label="View organization chart"
            >
              View org chart
            </ui-button>
          </div>

          <!-- Tabs -->
          <div class="mt-6 pt-4" role="region" aria-label="Profile sections">
            <tabs-component
              .tabs=${[{label:"Overview",value:"overview"},{label:"Career",value:"career"},{label:"Benefits",value:"benefits"},{label:"Documents",value:"documents"},{label:"Compensation",value:"compensation"},{label:"Attendance",value:"attendance"}]}
              @tab-change=${t=>this._onTabChange(t)}
            ></tabs-component>
          </div>
        </div>
      </section>
    `}};wt([p({type:String})],it.prototype,"employeeId",2),wt([x()],it.prototype,"employee",2),wt([p({type:Function})],it.prototype,"onOrgChartClick",2),it=wt([y("profile-header")],it);const A=b`
  :host {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  :host {
    margin: 0;
  }

  ::slotted(*) {
    box-sizing: inherit;
  }
`,S=b`
  :host {
    color: var(--color-text, #111827);
  }

  .text-primary {
    color: var(--color-primary, #6d28d9);
  }

  .text-subtle {
    color: var(--color-text-subtle, #6b7280);
  }

  .surface-card {
    background: var(--color-surface, #ffffff);
    border: 1px solid var(--color-border, #e5e7eb);
    border-radius: var(--radius-md, 12px);
    box-shadow: var(--shadow-card, 0 12px 30px rgba(17, 24, 39, 0.08));
  }
`,O=b`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

  :host {
    font-family: var(
      --font-family-base,
      "Poppins",
      "Inter",
      system-ui,
      -apple-system,
      sans-serif
    );
    font-size: var(--font-size-base, 16px);
    line-height: var(--line-height-base, 1.5);
    font-weight: var(--font-weight-regular, 400);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: var(--font-weight-semibold, 600);
    line-height: var(--line-height-tight, 1.2);
  }

  p {
    margin: 0;
  }
`,L=b`
  .stack {
    display: flex;
    flex-direction: column;
    gap: var(--space-3, 12px);
  }

  .cluster {
    display: flex;
    align-items: center;
    gap: var(--space-2, 8px);
  }
`,z=b`
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .inline-block {
    display: inline-block;
  }

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: inherit;
  }

  .icon-sm {
    width: 14px;
    height: 14px;
  }

  .icon-md {
    width: 18px;
    height: 18px;
  }

  .muted {
    color: var(--color-text-subtle, #6b7280);
  }
`,D=b`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

  :root,
  :host {
    font-family: var(
      --font-family-base,
      "Poppins",
      "Inter",
      system-ui,
      -apple-system,
      sans-serif
    );
    font-size: var(--font-size-base, 16px);

    /* Brand palette */
    --color-primary: #6d28d9;
    --color-primary-strong: #5b21b6;
    --color-primary-subtle: #ede9fe;
    --color-accent: #f97316;

    /* Neutrals */
    --color-surface: #ffffff;
    --color-surface-alt: #f5f7fb;
    --color-border: #e5e7eb;
    --color-border-strong: #d1d5db;
    --color-text: #111827;
    --color-text-subtle: #6b7280;
    --color-text-faint: #9ca3af;

    /* Shadows & radius */
    --shadow-card: 0 12px 30px rgba(17, 24, 39, 0.08);
    --shadow-subtle: 0 2px 6px rgba(17, 24, 39, 0.06);
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;

    /* Typography */
    --font-family-base: "Poppins", "Inter", system-ui, -apple-system, sans-serif;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --font-size-2xs: 0.7rem;
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-md: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --line-height-tight: 1.2;
    --line-height-base: 1.5;

    /* Spacing scale */
    --space-1: 4px;
    --space-2: 8px;
    --space-3: 12px;
    --space-4: 16px;
    --space-5: 20px;
    --space-6: 24px;
    --space-7: 28px;
  }
`,X=b`
  .pattern-card {
    background: var(--color-surface, #ffffff);
    border: 1px solid var(--color-border, #e5e7eb);
    border-radius: var(--radius-sm, 8px);
    box-shadow: var(--shadow-card, 0 12px 30px rgba(17, 24, 39, 0.08));
    padding: var(--space-4, 16px);
  }

  .pattern-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-2, 8px);
    padding-bottom: var(--space-2, 8px);
    border-bottom: 1px solid var(--color-border, #e5e7eb);
    margin-bottom: var(--space-3, 12px);
  }

  .pattern-card-title {
    margin: 0;
    font-size: var(--font-size-lg, 1.125rem);
    font-weight: var(--font-weight-semibold, 600);
    color: var(--color-text, #111827);
  }
`,ur=b`
  .pattern-table {
    width: 100%;
    border-collapse: collapse;
    overflow: hidden;
    background: var(--color-surface, #ffffff);
  }

  .pattern-table thead {
    background: var(--color-primary-subtle, #ede9fe);
  }

  .pattern-table th {
    text-align: left;
    padding: var(--space-3, 12px) var(--space-4, 16px);
    font-size: var(--font-size-2xs, 0.7rem);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-text-subtle, #6b7280);
    font-weight: var(--font-weight-semibold, 600);
  }

  .pattern-table td {
    padding: var(--space-3, 12px) var(--space-4, 16px);
    font-size: var(--font-size-sm, 0.875rem);
    color: var(--color-text, #111827);
    border-top: 1px solid var(--color-border, #e5e7eb);
  }

  .pattern-table tr:first-child td {
    border-top: none;
  }

  .pattern-table .pattern-empty {
    text-align: center;
    color: var(--color-text-subtle, #6b7280);
  }

  .pattern-status {
    color: var(--color-text-subtle, #6b7280);
    font-weight: var(--font-weight-medium, 500);
  }

  .pattern-status.is-yes {
    color: var(--color-primary, #6d28d9);
    font-weight: var(--font-weight-semibold, 600);
  }
`,gr=b`
  .pattern-section-title {
    margin: 0 0 var(--space-3, 12px) 0;
    font-size: var(--font-size-sm, 0.875rem);
    font-weight: var(--font-weight-semibold, 600);
    color: var(--color-text, #111827);
  }

  .pattern-chip-list {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2, 8px);
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .pattern-chip {
    display: inline-flex;
    align-items: center;
    padding: 6px 10px;
    border-radius: 999px;
    border: 1px solid var(--color-border, #e5e7eb);
    background: var(--color-surface, #ffffff);
    box-shadow: var(--shadow-subtle, 0 2px 6px rgba(17, 24, 39, 0.06));
    font-size: var(--font-size-xs, 0.75rem);
    color: var(--color-text, #111827);
    font-weight: var(--font-weight-medium, 500);
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }

  .pattern-chip:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 14px rgba(17, 24, 39, 0.08);
  }
`,br=b`
  .pattern-list {
    display: flex;
    flex-direction: column;
  }

  .pattern-list-item {
    display: flex;
    align-items: center;
    gap: var(--space-3, 12px);
    padding: var(--space-3, 12px) 0;
    border-bottom: 1px solid var(--color-border, #e5e7eb);
  }

  .pattern-list-item:last-of-type {
    border-bottom: none;
  }

  .pattern-avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
    border: 2px solid var(--color-primary-subtle, #ede9fe);
  }

  .pattern-avatar-fallback {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: var(--color-primary, #6d28d9);
    color: #fff;
    font-weight: var(--font-weight-semibold, 600);
    font-size: var(--font-size-sm, 0.875rem);
    flex-shrink: 0;
  }

  .pattern-item-body {
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex: 1;
    min-width: 0;
  }

  .pattern-item-title {
    font-size: var(--font-size-sm, 0.875rem);
    font-weight: var(--font-weight-semibold, 600);
    color: var(--color-text, #111827);
  }

  .pattern-item-subtitle {
    font-size: var(--font-size-2xs, 0.7rem);
    color: var(--color-text-subtle, #6b7280);
  }

  .pattern-link {
    background: none;
    border: none;
    color: var(--color-primary, #6d28d9);
    font-weight: var(--font-weight-semibold, 600);
    font-size: var(--font-size-sm, 0.875rem);
    cursor: pointer;
    padding: 0;
  }

  .pattern-link:hover {
    text-decoration: underline;
  }
`,fr=b`
  .pattern-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
  }

  .pattern-modal {
    background: var(--color-surface, #ffffff);
    border-radius: var(--radius-md, 12px);
    box-shadow: var(--shadow-card, 0 12px 30px rgba(17, 24, 39, 0.08));
    width: min(480px, 90vw);
    padding: var(--space-5, 20px);
  }

  .pattern-modal-title {
    margin: 0 0 var(--space-4, 16px) 0;
    font-size: var(--font-size-lg, 1.125rem);
    font-weight: var(--font-weight-semibold, 600);
    color: var(--color-text, #111827);
  }

  .pattern-modal-form {
    display: flex;
    flex-direction: column;
    gap: var(--space-3, 12px);
  }

  .pattern-field {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: var(--font-size-sm, 0.875rem);
    font-weight: var(--font-weight-medium, 500);
    color: var(--color-text, #111827);
  }

  .pattern-input {
    width: 100%;
    border: 1px solid var(--color-border, #e5e7eb);
    border-radius: var(--radius-sm, 8px);
    padding: 10px 12px;
    font-size: var(--font-size-sm, 0.875rem);
    color: var(--color-text, #111827);
    outline: none;
    background: var(--color-surface, #ffffff);
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
  }

  .pattern-input:focus {
    border-color: var(--color-primary, #6d28d9);
    box-shadow: 0 0 0 3px rgba(109, 40, 217, 0.15);
  }

  .pattern-checkbox {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2, 8px);
    font-size: var(--font-size-sm, 0.875rem);
    color: var(--color-text, #111827);
  }

  .pattern-checkbox-input {
    width: 16px;
    height: 16px;
    accent-color: var(--color-primary, #6d28d9);
  }

  .pattern-modal-actions {
    display: flex;
    justify-content: flex-end;
    gap: var(--space-2, 8px);
    padding-top: var(--space-2, 8px);
  }

  .pattern-btn {
    border: 1px solid transparent;
    border-radius: var(--radius-sm, 8px);
    padding: 10px 14px;
    font-size: var(--font-size-sm, 0.875rem);
    font-weight: var(--font-weight-semibold, 600);
    cursor: pointer;
    transition: background-color 0.15s ease, color 0.15s ease,
      border-color 0.15s ease, box-shadow 0.15s ease;
  }

  .pattern-btn-primary {
    background: var(--color-primary, #6d28d9);
    color: #fff;
    border-color: var(--color-primary, #6d28d9);
  }

  .pattern-btn-primary:hover {
    background: var(--color-primary-strong, #5b21b6);
  }

  .pattern-btn-ghost {
    background: transparent;
    color: var(--color-text, #111827);
    border-color: var(--color-border, #e5e7eb);
  }

  .pattern-btn-ghost:hover {
    border-color: var(--color-border-strong, #d1d5db);
  }
`;var mr=Object.defineProperty,vr=Object.getOwnPropertyDescriptor,yt=(e,t,r,o)=>{for(var a=o>1?void 0:o?vr(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(a=(o?s(t,r,a):s(a))||a);return o&&a&&mr(t,r,a),a};let he=0,G=class extends f{constructor(){super(...arguments),this.title="Title",this.collapsed=!1,this.contentId=`accordion-content-${++he}`,this.buttonId=`accordion-button-${he}`}toggle(){this.collapsed=!this.collapsed}render(){return c`
      <div class="accordion">
        <button
          id=${this.buttonId}
          class="header"
          @click=${this.toggle}
          aria-expanded=${String(!this.collapsed)}
          aria-controls=${this.contentId}
          type="button"
        >
          <span class="flex items-center gap-2">
            ${this.icon?c`<span>${this.icon}</span>`:null}
            <span>${this.title}</span>
          </span>
          <svg
            class="chevron ${this.collapsed?"":"rotate-180"}"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M5 12.5L10 7.5L15 12.5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <!-- Content slot -->
        <div
          id=${this.contentId}
          role="region"
          aria-labelledby=${this.buttonId}
          aria-hidden=${String(this.collapsed)}
          class="content"
          style=${this.collapsed?"max-height: 0; opacity: 0;":"max-height: 1000px; opacity: 1;"}
        >
          <div class="slot-wrap">
            <slot></slot>
          </div>
        </div>
      </div>
    `}};G.styles=[D,A,O,S,L,z,X,b`
      :host {
        display: block;
      }

      .accordion {
        composes: pattern-card;
        overflow: hidden;
        margin-bottom: var(--space-3, 12px);
        background: var(--color-surface, #ffffff);
        border: 1px solid var(--color-border, #e5e7eb);
        border-radius: var(--radius-sm, 8px);
        box-shadow: var(--shadow-card, 0 12px 30px rgba(17, 24, 39, 0.08));
        padding: var(--space-0, 0px);
      }

      .header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--space-4, 16px) var(--space-4, 16px);
        background: transparent;
        border: none;
        cursor: pointer;
        color: var(--color-text, #111827);
        font-weight: var(--font-weight-semibold, 600);
        font-size: var(--font-size-md, 1rem);
        transition: background-color 0.2s ease;
      }

      .header:hover {
        background: var(--color-primary-subtle, #ede9fe);
      }

      .chevron {
        width: 16px;
        height: 16px;
        transition: transform 0.2s ease;
      }

      .rotate-180 {
        transform: rotate(180deg);
      }

      .content {
        overflow: hidden;
        transition: max-height 0.25s ease, opacity 0.2s ease;
      }

      .slot-wrap {
        padding: var(--space-4, 16px);
      }
    `],yt([p({type:String})],G.prototype,"title",2),yt([p({type:String})],G.prototype,"icon",2),yt([x()],G.prototype,"collapsed",2),G=yt([y("accordion-widget")],G);var wr=Object.defineProperty,yr=Object.getOwnPropertyDescriptor,Ut=(e,t,r,o)=>{for(var a=o>1?void 0:o?yr(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(a=(o?s(t,r,a):s(a))||a);return o&&a&&wr(t,r,a),a};let st=class extends f{constructor(){super(...arguments),this.title="",this.icon=""}render(){return c`
      <div class="pattern-card card">
        ${this.title?c`
              <div class="pattern-card-header">
                ${this.icon?c`<span>${this.icon}</span>`:null}
                <span class="pattern-card-title">${this.title}</span>
              </div>
            `:null}
        <div>
          <slot></slot>
        </div>
      </div>
    `}};st.styles=[D,A,O,S,L,z,X,b`
      :host {
        display: block;
      }

    `],Ut([p({type:String})],st.prototype,"title",2),Ut([p({type:String})],st.prototype,"icon",2),st=Ut([y("card-widget")],st);var xr=Object.defineProperty,$r=Object.getOwnPropertyDescriptor,It=(e,t,r,o)=>{for(var a=o>1?void 0:o?$r(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(a=(o?s(t,r,a):s(a))||a);return o&&a&&xr(t,r,a),a};let nt=class extends f{constructor(){super(...arguments),this.label="About"}render(){const e=!!(this.text&&this.text.trim());return c`
      <div role="region" aria-label=${this.label}>
        <h2 class="sr-only">${this.label}</h2>
        ${e?c`<p class="text">${this.text}</p>`:c`<slot></slot>`}
      </div>
    `}};nt.styles=[D,A,O,S,L,z,X,b`
      :host {
        display: block;
      }

      .text {
        white-space: pre-line;
        margin: 0;
      }
    `],It([p({type:String,attribute:"text"})],nt.prototype,"text",2),It([p({type:String})],nt.prototype,"label",2),nt=It([y("about-widget")],nt);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:kr}=Le,ue=()=>document.createComment(""),lt=(e,t,r)=>{var i;const o=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0){const s=o.insertBefore(ue(),a),l=o.insertBefore(ue(),a);r=new kr(s,l,e,e.options)}else{const s=r._$AB.nextSibling,l=r._$AM,n=l!==e;if(n){let h;(i=r._$AQ)==null||i.call(r,e),r._$AM=e,r._$AP!==void 0&&(h=e._$AU)!==l._$AU&&r._$AP(h)}if(s!==a||n){let h=r._$AA;for(;h!==s;){const m=h.nextSibling;o.insertBefore(h,a),h=m}}}return r},q=(e,t,r=e)=>(e._$AI(t,r),e),_r={},Cr=(e,t=_r)=>e._$AH=t,Ar=e=>e._$AH,Rt=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=(e,t,r)=>{const o=new Map;for(let a=t;a<=r;a++)o.set(e[a],a);return o},xt=mt(class extends vt{constructor(e){if(super(e),e.type!==ft.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let o;r===void 0?r=t:t!==void 0&&(o=t);const a=[],i=[];let s=0;for(const l of e)a[s]=o?o(l,s):s,i[s]=r(l,s),s++;return{values:i,keys:a}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,o]){const a=Ar(e),{values:i,keys:s}=this.dt(t,r,o);if(!Array.isArray(a))return this.ut=s,i;const l=this.ut??(this.ut=[]),n=[];let h,m,d=0,g=a.length-1,u=0,w=i.length-1;for(;d<=g&&u<=w;)if(a[d]===null)d++;else if(a[g]===null)g--;else if(l[d]===s[u])n[u]=q(a[d],i[u]),d++,u++;else if(l[g]===s[w])n[w]=q(a[g],i[w]),g--,w--;else if(l[d]===s[w])n[w]=q(a[d],i[w]),lt(e,n[w+1],a[d]),d++,w--;else if(l[g]===s[u])n[u]=q(a[g],i[u]),lt(e,a[d],a[g]),g--,u++;else if(h===void 0&&(h=ge(s,u,w),m=ge(l,d,g)),h.has(l[d]))if(h.has(l[g])){const E=m.get(s[u]),Vt=E!==void 0?a[E]:null;if(Vt===null){const we=lt(e,a[d]);q(we,i[u]),n[u]=we}else n[u]=q(Vt,i[u]),lt(e,a[d],Vt),a[E]=null;u++}else Rt(a[g]),g--;else Rt(a[d]),d++;for(;u<=w;){const E=lt(e,n[w+1]);q(E,i[u]),n[u++]=E}for(;d<=g;){const E=a[d++];E!==null&&Rt(E)}return this.ut=s,Cr(e,n),_}});var Sr=Object.defineProperty,Or=Object.getOwnPropertyDescriptor,Ht=(e,t,r,o)=>{for(var a=o>1?void 0:o?Or(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(a=(o?s(t,r,a):s(a))||a);return o&&a&&Sr(t,r,a),a};let ct=class extends f{constructor(){super(...arguments),this.skillsData=null,this.sections=[]}updated(e){e.has("skillsData")&&this.transformSkillsData()}transformSkillsData(){var r,o;if(!this.skillsData){this.sections=[];return}if(Array.isArray(this.skillsData)){this.sections=this.skillsData;return}const e=this.skillsData,t=[];(r=e.required_skills)!=null&&r.length&&t.push({sectionTitle:"Required Skills",skills:e.required_skills}),(o=e.additional_skills)!=null&&o.length&&t.push({sectionTitle:"Additional Skills",skills:e.additional_skills}),this.sections=t}getSections(){return this.sections}setSkillsData(e){this.skillsData=e}renderSection(e,t){return c`
      <div class="section" role="group" aria-label=${e.sectionTitle}>
        <p class="pattern-section-title">
          ${e.sectionTitle} (${e.skills.length})
        </p>
        <ul class="pattern-chip-list">
          ${xt(e.skills,(r,o)=>`${r}-${o}`,r=>c`
              <li class="pattern-chip">
                <span>${r}</span>
              </li>
            `)}
        </ul>
      </div>
    `}render(){var e;return(e=this.sections)!=null&&e.length?c`
      <section class="skills" role="region" aria-label="Employee skills">
        ${xt(this.sections,(t,r)=>`${t.sectionTitle}-${r}`,(t,r)=>this.renderSection(t,r))}
      </section>
    `:c`<p class="empty-state" role="status">No skills available.</p>`}};ct.styles=[D,A,O,S,L,z,gr,b`
      :host {
        display: block;
        color: var(--color-text, #111827);
      }

      .skills {
        display: flex;
        flex-direction: column;
        gap: var(--space-4, 16px);
      }

      .section {
        padding: var(--space-2, 8px) 0;
      }

      .section-title {
        composes: pattern-section-title;
      }

      .empty-state {
        color: var(--color-text-subtle, #6b7280);
        font-size: var(--font-size-sm, 0.875rem);
        margin: 0;
      }
    `],Ht([p({attribute:!1})],ct.prototype,"skillsData",2),Ht([x()],ct.prototype,"sections",2),ct=Ht([y("employee-skills-widget")],ct);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be="important",zr=" !"+be,Dr=mt(class extends vt{constructor(e){var t;if(super(e),e.type!==ft.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const o=e[r];return o==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:r}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const o of this.ft)t[o]==null&&(this.ft.delete(o),o.includes("-")?r.removeProperty(o):r[o]=null);for(const o in t){const a=t[o];if(a!=null){this.ft.add(o);const i=typeof a=="string"&&a.endsWith(zr);o.includes("-")||i?r.setProperty(o,i?a.slice(0,-11):a,i?be:""):r[o]=a}}return _}});var Pr=Object.defineProperty,Er=Object.getOwnPropertyDescriptor,Bt=(e,t,r,o)=>{for(var a=o>1?void 0:o?Er(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(a=(o?s(t,r,a):s(a))||a);return o&&a&&Pr(t,r,a),a};let dt=class extends f{constructor(){super(...arguments),this.fields=[],this.columns=2}getIconTemplate(e){return e.iconTemplate?e.iconTemplate:e.icon?k(e.icon,"icon icon-sm text-primary"):null}render(){if(!this.fields||this.fields.length===0)return c`<p class="empty-state">No data available.</p>`;const t={"--columns":`${Math.max(1,this.columns||1)}`};return c`
      <div class="field-grid" style=${Dr(t)}>
        ${xt(this.fields,(r,o)=>r.label??`${o}`,r=>{const o=this.getIconTemplate(r);return c`
              <div class="field-item">
                ${o?c`<div class="field-icon">${o}</div>`:""}
                <div class="field-content">
                  <div class="field-label">${r.label}</div>
                  <div
                    class=${`field-value ${r.highlight?"is-highlight":""}`}
                  >
                    ${r.title}
                  </div>
                </div>
              </div>
            `})}
      </div>
    `}};dt.styles=[D,A,O,S,z,b`
      :host {
        display: block;
        color: var(--color-text, #111827);
        background: none;
        background-color: transparent;
      }

      .field-grid {
        display: grid;
        gap: var(--space-4, 16px);
        grid-template-columns: 1fr;
      }

      @media (min-width: 768px) {
        .field-grid {
          grid-template-columns: repeat(var(--columns, 2), minmax(0, 1fr));
        }
      }

      .field-item {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: var(--space-3, 12px);
        align-items: flex-start;
        padding: var(--space-2, 8px) 0;
      }

      .field-icon {
        width: 28px;
        height: 28px;
        border-radius: var(--radius-sm, 8px);
        color: var(--color-primary, #6d28d9);
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      .field-content {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .field-label {
        font-size: var(--font-size-2xs, 0.7rem);
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--color-text-subtle, #6b7280);
        font-weight: var(--font-weight-medium, 500);
      }

      .field-value {
        font-size: var(--font-size-md, 1rem);
        color: var(--color-text, #111827);
        font-weight: var(--font-weight-medium, 500);
      }

      .field-value.is-highlight {
        color: var(--color-primary, #6d28d9);
        font-weight: var(--font-weight-semibold, 600);
      }

      .empty-state {
        color: var(--color-text-subtle, #6b7280);
        font-size: var(--font-size-sm, 0.875rem);
      }
    `],Bt([p({type:Array,attribute:!1})],dt.prototype,"fields",2),Bt([p({type:Number})],dt.prototype,"columns",2),dt=Bt([y("field-list-widget")],dt);var Tr=Object.defineProperty,Mr=Object.getOwnPropertyDescriptor,qt=(e,t,r,o)=>{for(var a=o>1?void 0:o?Mr(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(a=(o?s(t,r,a):s(a))||a);return o&&a&&Tr(t,r,a),a};const Nr=[{label:"Manager",title:"Maria Thompson",icon:"user",highlight:!0},{label:"Location",title:"Dallas Distribution Center, Building C",icon:"map-pin"},{label:"Work phone",title:"+1 (214) 555-0182",icon:"phone"},{label:"Job Title",title:"Forklift Operator",icon:"briefcase"},{label:"Work Schedule",title:"Mon-Fri, 6:00 AM – 2:30 PM",icon:"calendar"},{label:"Department",title:"Warehouse Operations",icon:"building"},{label:"Email",title:"james.davis@nova.com",icon:"envelope",highlight:!0},{label:"Nickname",title:"JD",icon:"tag"}];let pt=class extends f{constructor(){super(),this.fields=[],this.columns=2,this.fields=[...Nr]}getIconFromString(e){const t={user:pe,"map-pin":Ye,phone:ir,briefcase:cr,calendar:or,building:Qe,envelope:Ve,tag:lr,mobile:Ke},r=t[e];return r||(console.warn(`[employee-details-widget] Unknown icon "${e}", defaulting to "user".`),t.user)}render(){const e=this.fields.map(t=>{const r=this.getIconFromString(t.icon);return{...t,iconTemplate:k(r,"icon icon-sm text-primary")}});return c`
      <section role="region">
        <field-list-widget
          .fields=${e}
          .columns=${this.columns}
        ></field-list-widget>
      </section>
    `}};pt.styles=[D,A,O,S,L,z,X,b`
      :host {
        display: block;
      }
    `],qt([p({attribute:"fields",converter:{fromAttribute:e=>{if(!e)return[];try{return JSON.parse(e)}catch(t){return console.warn("[employee-details-widget] Unable to parse fields attribute, expected JSON array.",t),[]}}}})],pt.prototype,"fields",2),qt([p({type:Number})],pt.prototype,"columns",2),pt=qt([y("employee-details-widget")],pt);var jr=Object.defineProperty,Lr=Object.getOwnPropertyDescriptor,fe=(e,t,r,o)=>{for(var a=o>1?void 0:o?Lr(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(a=(o?s(t,r,a):s(a))||a);return o&&a&&jr(t,r,a),a};let $t=class extends f{constructor(){super(...arguments),this.fields=[]}render(){var e;return(e=this.fields)!=null&&e.length?c`
      <ul role="list" class="user-list">
        ${this.fields.map(t=>this.renderUser(t))}
      </ul>
    `:c``}renderUser(e){const t=e.avatar?c`<span class="avatar"
          ><img src="${e.avatar}" alt="${e.name}"
        /></span>`:this.renderInitials(e);return c`
      <li class="user-item">
        ${t}
        <div>
          <p class="name">${e.name}</p>
          ${e.designation?c`<p class="role">${e.designation}</p>`:""}
        </div>
      </li>
    `}renderInitials(e){const t=this.getInitials(e);return c` <span class="avatar">${t}</span> `}getInitials(e){var r,o;if(e.firstName||e.lastName)return((((r=e.firstName)==null?void 0:r.charAt(0))??"")+(((o=e.lastName)==null?void 0:o.charAt(0))??"")).toUpperCase();const t=e.name.split(" ");return t.length>=2?(t[0][0]+t[1][0]).toUpperCase():t[0][0].toUpperCase()}};$t.styles=[D,A,O,S,z,b`
      :host {
        display: block;
        color: var(--color-text, #111827);
      }

      .user-list {
        display: flex;
        flex-direction: column;
        gap: var(--space-2, 8px);
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .user-item {
        display: flex;
        align-items: center;
        gap: var(--space-3, 12px);
      }

      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 999px;
        background: var(--color-primary-subtle, #ede9fe);
        color: var(--color-primary, #6d28d9);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-weight: var(--font-weight-semibold, 600);
        font-size: var(--font-size-sm, 0.875rem);
        object-fit: cover;
      }

      .avatar img {
        width: 100%;
        height: 100%;
        border-radius: 999px;
        object-fit: cover;
        display: block;
      }

      .name {
        font-size: var(--font-size-sm, 0.875rem);
        font-weight: var(--font-weight-semibold, 600);
        color: var(--color-primary, #6d28d9);
        line-height: var(--line-height-tight, 1.2);
      }

      .role {
        font-size: var(--font-size-2xs, 0.7rem);
        color: var(--color-text-subtle, #6b7280);
        line-height: var(--line-height-tight, 1.2);
        margin-top: 2px;
      }
    `],fe([p({type:Array})],$t.prototype,"fields",2),$t=fe([y("field-users-widget")],$t);var Ur=Object.defineProperty,Ir=Object.getOwnPropertyDescriptor,kt=(e,t,r,o)=>{for(var a=o>1?void 0:o?Ir(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(a=(o?s(t,r,a):s(a))||a);return o&&a&&Ur(t,r,a),a};let Z=class extends f{constructor(){super(...arguments),this.teamData=null,this.openStates=[],this.sections=[]}updated(e){e.has("teamData")&&(this.transformTeamData(),this.syncOpenStates())}syncOpenStates(){this.openStates=this.sections.map((e,t)=>this.openStates[t]??!0)}transformTeamData(){var r,o,a;if(!this.teamData){this.sections=[];return}if(Array.isArray(this.teamData)){this.sections=this.teamData;return}const e=this.teamData,t=[];e.direct_manager&&t.push({sectionTitle:"Direct manager",users:[e.direct_manager]}),(r=e.other_managers)!=null&&r.length&&t.push({sectionTitle:"Other managers",users:e.other_managers}),(o=e.coworkers)!=null&&o.length&&t.push({sectionTitle:"Coworkers",users:e.coworkers}),(a=e.direct_reports)!=null&&a.length&&t.push({sectionTitle:"Direct reports",users:e.direct_reports}),this.sections=t}getSections(){return this.sections}setTeamData(e){this.teamData=e}toggleSection(e){const t=[...this.openStates];t[e]=!t[e],this.openStates=t}renderSection(e,t){const r=this.openStates[t],o=`team-panel-${t}`,a=`team-toggle-${t}`;return c`
      <div class="section">
        <button
          id=${a}
          type="button"
          @click=${()=>this.toggleSection(t)}
          class="section-toggle"
          aria-expanded=${String(r)}
          aria-controls=${o}
        >
          <span class="section-title">
            ${e.sectionTitle} (${e.users.length})
          </span>
          <span class="chevron">
            ${k(r?Ze:sr,"icon icon-sm muted")}
          </span>
        </button>

        <div
          id=${o}
          role="region"
          aria-labelledby=${a}
          style=${r?"max-height: var(--team-section-max-height, 9999px); opacity: 1;":"max-height: 0; opacity: 0;"}
          class="section-panel"
        >
          <div class="section-body">
            <field-users-widget .fields=${e.users}></field-users-widget>
          </div>
        </div>
      </div>
    `}render(){return!this.sections||this.sections.length===0?c`<p class="empty-state" role="status">
        No team information available.
      </p>`:c`
      ${xt(this.sections,(e,t)=>`${e.sectionTitle}-${t}`,(e,t)=>this.renderSection(e,t))}
    `}};Z.styles=[D,A,O,S,L,z,X,b`
      :host {
        display: block;
        color: var(--color-text, #111827);
      }

      .section {
        composes: pattern-card;
        margin-bottom: var(--space-3, 12px);
      }

      .section-toggle {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--space-3, 12px) var(--space-4, 16px);
        background: transparent;
        border: none;
        cursor: pointer;
        color: inherit;
        transition: background-color 0.2s ease, color 0.2s ease;
      }

      .section-toggle:hover {
        background: var(--color-primary-subtle, #ede9fe);
      }

      .section-title {
        font-size: var(--font-size-sm, 0.875rem);
        font-weight: var(--font-weight-semibold, 600);
        color: var(--color-text, #111827);
      }

      .chevron {
        display: inline-flex;
      }

      .section-panel {
        transition: max-height 0.25s ease, opacity 0.2s ease;
        overflow: hidden;
      }

      .section-body {
        padding: 0 var(--space-4, 16px) var(--space-3, 12px);
      }

      .empty-state {
        color: var(--color-text-subtle, #6b7280);
        font-size: var(--font-size-sm, 0.875rem);
        margin: 0;
      }
    `],kt([p({attribute:!1})],Z.prototype,"teamData",2),kt([x()],Z.prototype,"openStates",2),kt([x()],Z.prototype,"sections",2),Z=kt([y("employee-team-widget")],Z);var Rr=Object.defineProperty,Hr=Object.getOwnPropertyDescriptor,F=(e,t,r,o)=>{for(var a=o>1?void 0:o?Hr(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(a=(o?s(t,r,a):s(a))||a);return o&&a&&Rr(t,r,a),a};let P=class extends f{constructor(){super(...arguments),this.contacts=[],this.addModalOpen=!1,this.draft={name:"",relationship:"",emergencyContact:!1},this.handleOpenClick=()=>{this.onRequestOpen?this.onRequestOpen():this.addModalOpen=!0},this.handleSubmit=e=>{var r;e.preventDefault();const t={...this.draft};(r=this.onAddContact)==null||r.call(this,t),this.dispatchEvent(new CustomEvent("add-contact",{detail:t,bubbles:!0,composed:!0})),this.resetDraft(),this.addModalOpen=!1},this.handleClose=()=>{var e;this.resetDraft(),this.addModalOpen=!1,(e=this.onRequestClose)==null||e.call(this)}}resetDraft(){this.draft={name:"",relationship:"",emergencyContact:!1}}render(){var t;const e=((t=this.contacts)==null?void 0:t.length)>0;return c`
      <div class="contacts">
        <table class="pattern-table">
          <caption class="sr-only">
            Employee contacts
          </caption>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Relationship</th>
              <th scope="col">Emergency Contact</th>
            </tr>
          </thead>
          <tbody aria-live="polite">
            ${e?this.contacts.map((r,o)=>c`
                    <tr data-row=${o}>
                      <td>${r.name}</td>
                      <td>${r.relationship}</td>
                      <td
                        class=${`pattern-status ${r.emergencyContact?"is-yes":""}`}
                      >
                        ${r.emergencyContact?"Yes":"No"}
                      </td>
                    </tr>
                  `):c`<tr>
                  <td colspan="3" class="pattern-empty" role="status">
                    No contacts available
                  </td>
                </tr>`}
          </tbody>
        </table>

        <div class="actions">
          <button
            type="button"
            class="pattern-link"
            @click=${this.handleOpenClick}
          >
            Add Contact
          </button>
        </div>
      </div>

      ${this.addModalOpen?c`
            <div class="pattern-modal-backdrop" role="dialog" aria-modal="true">
              <div class="pattern-modal">
                <h3 class="pattern-modal-title">Add Contact</h3>
                <form class="pattern-modal-form" @submit=${this.handleSubmit}>
                  <label class="pattern-field">
                    Name
                    <input
                      class="pattern-input"
                      required
                      .value=${this.draft.name}
                      @input=${r=>this.draft={...this.draft,name:r.target.value}}
                    />
                  </label>

                  <label class="pattern-field">
                    Relationship
                    <input
                      class="pattern-input"
                      required
                      .value=${this.draft.relationship}
                      @input=${r=>this.draft={...this.draft,relationship:r.target.value}}
                    />
                  </label>

                  <label class="pattern-checkbox">
                    <input
                      type="checkbox"
                      class="pattern-checkbox-input"
                      .checked=${this.draft.emergencyContact}
                      @change=${r=>this.draft={...this.draft,emergencyContact:r.target.checked}}
                    />
                    Emergency contact
                  </label>

                  <div class="pattern-modal-actions">
                    <button
                      type="button"
                      class="pattern-btn pattern-btn-ghost"
                      @click=${this.handleClose}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      class="pattern-btn pattern-btn-primary"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          `:null}
    `}};P.styles=[D,A,O,S,L,z,ur,fr,br,b`
      :host {
        display: block;
        color: var(--color-text, #111827);
      }

      .contacts {
        display: flex;
        flex-direction: column;
        gap: var(--space-3, 12px);
      }

      .actions {
        display: flex;
        justify-content: flex-end;
      }
    `],F([p({attribute:!1})],P.prototype,"contacts",2),F([p({type:Boolean})],P.prototype,"addModalOpen",2),F([p({attribute:!1})],P.prototype,"onAddContact",2),F([p({attribute:!1})],P.prototype,"onRequestOpen",2),F([p({attribute:!1})],P.prototype,"onRequestClose",2),F([x()],P.prototype,"draft",2),P=F([y("employee-contacts-widget")],P);var Br=Object.defineProperty,qr=Object.getOwnPropertyDescriptor,Ft=(e,t,r,o)=>{for(var a=o>1?void 0:o?qr(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(a=(o?s(t,r,a):s(a))||a);return o&&a&&Br(t,r,a),a};let _t=class extends f{constructor(){super(...arguments),this.open=!1,this.draft={name:"",relationship:"",emergencyContact:!1},this.submit=e=>{e.preventDefault(),this.dispatchEvent(new CustomEvent("submit-contact",{detail:{...this.draft},bubbles:!0,composed:!0})),this.close()}}createRenderRoot(){return this}willUpdate(e){e.has("open")&&this.open&&(this.draft={name:"",relationship:"",emergencyContact:!1})}close(){this.dispatchEvent(new CustomEvent("close-modal",{bubbles:!0,composed:!0}))}render(){return this.open?c`
      <div
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
        role="dialog"
        aria-modal="true"
      >
        <div
          class="bg-white rounded-md shadow-lg w-full max-w-md p-6 border border-gray-200"
        >
          <h3 class="text-base font-semibold text-gray-900 mb-4">
            Add Contact
          </h3>

          <form class="space-y-4" @submit=${this.submit}>
            <label class="block text-sm  text-gray-800">
              Name
              <input
                class="mt-1 w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                required
                .value=${this.draft.name}
                @input=${e=>this.draft={...this.draft,name:e.target.value}}
              />
            </label>

            <label class="block text-sm font-semibold text-gray-800">
              Relationship
              <input
                class="mt-1 w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                required
                .value=${this.draft.relationship}
                @input=${e=>this.draft={...this.draft,relationship:e.target.value}}
              />
            </label>

            <label
              class="inline-flex items-center gap-2 text-sm text-gray-800 select-none"
            >
              <input
                type="checkbox"
                class="h-3 w-3 text-primary border-gray-300 rounded-sm focus:ring-2 focus:ring-primary"
                .checked=${this.draft.emergencyContact}
                @change=${e=>this.draft={...this.draft,emergencyContact:e.target.checked}}
              />
              Emergency contact
            </label>

            <div class="flex justify-end gap-3 pt-2">
              <ui-button
                variant="ghost"
                size="sm"
                type="button"
                @click=${this.close}
              >
                Cancel
              </ui-button>
              <ui-button variant="primary" size="sm" type="submit">
                Save
              </ui-button>
            </div>
          </form>
        </div>
      </div>
    `:null}};Ft([p({type:Boolean})],_t.prototype,"open",2),Ft([x()],_t.prototype,"draft",2),_t=Ft([y("add-contact-modal")],_t);var Fr=Object.defineProperty,Wr=Object.getOwnPropertyDescriptor,ht=(e,t,r,o)=>{for(var a=o>1?void 0:o?Wr(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(a=(o?s(t,r,a):s(a))||a);return o&&a&&Fr(t,r,a),a};let W=class extends f{constructor(){super(...arguments),this.profileData={},this.showSections=["about","details","skills","team","contacts"],this.sectionTitles={about:"About me",details:"Employee Details",skills:"Skills",team:"Team Members",contacts:"Contacts"},this.addContactOpen=!1,this.openAddContact=()=>{this.addContactOpen=!0},this.closeAddContact=()=>{this.addContactOpen=!1},this.handleAddContact=e=>{var r;const t=((r=this.profileData.contacts)==null?void 0:r.contacts)??this.getDefaultContactsData().contacts??[];this.profileData={...this.profileData,contacts:{contacts:[...t,e]}},this.addContactOpen=!1}}getDefaultDetailsData(){return{headerTitle:"Employee details",fields:[{label:"Manager",title:"Maria Thompson",icon:"user",highlight:!0},{label:"Location",title:"Dallas Distribution Center, Building C",icon:"map-pin"},{label:"Work phone",title:"+1 (214) 555-0182",icon:"phone"},{label:"Job Title",title:"Forklift Operator",icon:"briefcase"},{label:"Work Schedule",title:"Mon-Fri, 6:00 AM – 2:30 PM",icon:"calendar"},{label:"Department",title:"Warehouse Operations",icon:"building"},{label:"Email",title:"james.davis@nova.com",icon:"envelope",highlight:!0},{label:"Nickname",title:"JD",icon:"tag"}]}}getDefaultAboutData(){return{text:"I'm a dedicated forklift operator with over 12 years of experience in warehouse operations and logistics. Safety is my top priority, and I take pride in maintaining a perfect safety record throughout my career. I'm certified in operating multiple types of forklifts and material handling equipment. When I'm not at work, I enjoy spending time with my family, mentoring young professionals in the industry, and playing basketball on weekends. I'm passionate about continuous improvement and always looking for ways to optimize our warehouse processes."}}getDefaultSkillsData(){return{required_skills:["Project Management","Team Leadership","Data Analysis"],additional_skills:["Public Speaking","Graphic Design","Cloud Computing"]}}getDefaultTeamData(){return{direct_manager:{avatar:"https://i.pravatar.cc/150?img=8",name:"Eve Davis",firstName:"Eve",lastName:"Davis",designation:"Shift Manager"},other_managers:[{avatar:"https://i.pravatar.cc/150?img=12",name:"Michael Thompson",firstName:"Michael",lastName:"Thompson",designation:"Operations Manager"},{avatar:"https://i.pravatar.cc/150?img=15",name:"Sarah Lee",firstName:"Sarah",lastName:"Lee",designation:"Department Manager"}],coworkers:[{avatar:"https://i.pravatar.cc/150?img=22",name:"John Carter",firstName:"John",lastName:"Carter",designation:"Senior Analyst"},{avatar:"https://i.pravatar.cc/150?img=31",name:"Priya Nair",firstName:"Priya",lastName:"Nair",designation:"HR Coordinator"},{avatar:"https://i.pravatar.cc/150?img=27",name:"David Miller",firstName:"David",lastName:"Miller",designation:"Software Engineer"}],direct_reports:[{avatar:"https://i.pravatar.cc/150?img=35",name:"Anita Sharma",firstName:"Anita",lastName:"Sharma",designation:"Junior Associate"},{avatar:"https://i.pravatar.cc/150?img=40",name:"Kevin Brooks",firstName:"Kevin",lastName:"Brooks",designation:"Trainee Engineer"}]}}getDefaultContactsData(){return{contacts:[{name:"Lisa Davis",relationship:"Spouse",emergencyContact:!0},{name:"Mark Johnson",relationship:"Brother",emergencyContact:!1},{name:"Priya Nair",relationship:"Friend",emergencyContact:!1}]}}shouldShowSection(e){return this.showSections.includes(e)}renderAboutSection(){if(!this.shouldShowSection("about"))return null;const e=this.profileData.about||this.getDefaultAboutData();return e.text?c`
      <card-widget title=${this.sectionTitles.about}>
        <about-widget .text=${e.text}></about-widget>
      </card-widget>
    `:c`<card-widget title=${this.sectionTitles.about}>
        <p class="text-gray-500 text-sm p-2">No about information available.</p>
      </card-widget>`}renderDetailsSection(){if(!this.shouldShowSection("details"))return null;const e=this.profileData.details||this.getDefaultDetailsData();return!e.fields||e.fields.length===0?c`<accordion-widget title=${this.sectionTitles.details}>
        <p class="text-gray-500 text-sm p-2">No employee details available.</p>
      </accordion-widget>`:c`
      <accordion-widget title=${this.sectionTitles.details}>
        <employee-details-widget
          .headerTitle=${e.headerTitle||"Employee details"}
          .fields=${e.fields}
        >
        </employee-details-widget>
      </accordion-widget>
    `}renderSkillsSection(){if(!this.shouldShowSection("skills"))return null;const e=this.profileData.skills||this.getDefaultSkillsData();return e.required_skills&&e.required_skills.length>0||e.additional_skills&&e.additional_skills.length>0?c`
      <accordion-widget title=${this.sectionTitles.skills}>
        <employee-skills-widget
          .skillsData=${e}
        ></employee-skills-widget>
      </accordion-widget>
    `:c`<accordion-widget title=${this.sectionTitles.skills}>
        <p class="text-gray-500 text-sm p-2">No skills available.</p>
      </accordion-widget>`}renderTeamSection(){if(!this.shouldShowSection("team"))return null;const e=this.profileData.team||this.getDefaultTeamData();return e.direct_manager||e.other_managers&&e.other_managers.length>0||e.coworkers&&e.coworkers.length>0||e.direct_reports&&e.direct_reports.length>0?c`
      <card-widget title=${this.sectionTitles.team}>
        <employee-team-widget .teamData=${e}></employee-team-widget>
      </card-widget>
    `:c`<card-widget title=${this.sectionTitles.team}>
        <p class="text-gray-500 text-sm p-2">No team information available.</p>
      </card-widget>`}renderContactsSection(){if(!this.shouldShowSection("contacts"))return null;const e=this.profileData.contacts||this.getDefaultContactsData();return!e.contacts||e.contacts.length===0?c`
        <card-widget title=${this.sectionTitles.contacts}>
          <p class="text-gray-500 text-sm p-2">
            No contacts information available.
          </p>
        </card-widget>
      `:c`
      <card-widget title=${this.sectionTitles.contacts}>
        <employee-contacts-widget
          .contacts=${e.contacts??[]}
          .addModalOpen=${this.addContactOpen}
          .onRequestOpen=${this.openAddContact}
          .onRequestClose=${this.closeAddContact}
          .onAddContact=${this.handleAddContact}
        ></employee-contacts-widget>
      </card-widget>
    `}render(){return c`
      <div class="profile-details">
        ${this.renderAboutSection()} ${this.renderDetailsSection()}
        ${this.renderSkillsSection()} ${this.renderTeamSection()}
        ${this.renderContactsSection()}
      </div>

      <add-contact-modal
        .open=${this.addContactOpen}
        @submit-contact=${e=>this.handleAddContact(e.detail)}
        @close-modal=${this.closeAddContact}
      ></add-contact-modal>
    `}};W.styles=[D,A,O,S,L,z,X,b`
      :host {
        display: block;
      }

      .profile-details {
        display: flex;
        flex-direction: column;
        gap: var(--space-4, 16px);
      }

      p {
        margin: 0;
      }
    `],ht([p({type:Object,attribute:!1})],W.prototype,"profileData",2),ht([p({type:Array,attribute:!1})],W.prototype,"showSections",2),ht([p({type:Object,attribute:!1})],W.prototype,"sectionTitles",2),ht([x()],W.prototype,"addContactOpen",2),W=ht([y("profile-details")],W);var Yr=Object.defineProperty,Vr=Object.getOwnPropertyDescriptor,me=(e,t,r,o)=>{for(var a=o>1?void 0:o?Vr(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(a=(o?s(t,r,a):s(a))||a);return o&&a&&Yr(t,r,a),a};let Wt=class extends f{constructor(){super(...arguments),this.profileOpen=!1,this.onWindowClick=e=>{var r;(((r=e.composedPath)==null?void 0:r.call(e))??(()=>{const o=[];let a=e.target;for(;a;)o.push(a),a=a.parentNode;return o})()).includes(this)||(this.profileOpen=!1)},this.onKeyDown=e=>{e.key==="Escape"&&(this.profileOpen=!1,this.focusProfileButton())},this.onMenuKeyDown=e=>{if(!this.profileOpen)return;const t=this.getMenuItems();if(!t.length)return;const r=t.indexOf(document.activeElement),o=a=>{const i=t[a];i&&i.focus()};switch(e.key){case"ArrowDown":e.preventDefault(),o((r+1)%t.length);break;case"ArrowUp":e.preventDefault(),o((r-1+t.length)%t.length);break;case"Home":e.preventDefault(),o(0);break;case"End":e.preventDefault(),o(t.length-1);break;case"Escape":e.preventDefault(),this.profileOpen=!1,this.focusProfileButton();break}}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),window.addEventListener("click",this.onWindowClick),window.addEventListener("keydown",this.onKeyDown)}disconnectedCallback(){window.removeEventListener("click",this.onWindowClick),window.removeEventListener("keydown",this.onKeyDown),super.disconnectedCallback()}focusProfileButton(){var t;const e=(t=this.renderRoot)==null?void 0:t.querySelector("#profile-button");e==null||e.focus()}focusFirstMenuItem(){const[e]=this.getMenuItems();e==null||e.focus()}getMenuItems(){var t;const e=(t=this.renderRoot)==null?void 0:t.querySelector("#profile-menu");return e?Array.from(e.querySelectorAll('[role="menuitem"]')):[]}toggleProfile(e){e.stopPropagation();const t=!this.profileOpen;this.profileOpen=t,t?this.updateComplete.then(()=>this.focusFirstMenuItem()):this.focusProfileButton()}iconButton(e,t){return c`
      <button
        class="p-2 rounded-md hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:outline-none transition flex items-center justify-center text-gray-700"
        title=${e}
        aria-label=${e}
        type="button"
      >
        <span class="inline-block">${t}</span>
      </button>
    `}render(){const e=Nt({"absolute right-0 mt-2 w-48 rounded-lg shadow-lg z-50 bg-white border":!0,"ring-2 ring-indigo-300":this.profileOpen,hidden:!this.profileOpen});return c`
      <header
        class="w-full bg-white border-b px-6 py-3 flex items-center justify-between sticky top-0 z-50"
      >
        <!-- Left: Brand -->
        <div
          class="text-2xl font-bold tracking-wide bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          Nova
        </div>

        <!-- Middle: Search -->
        <div class="mx-3 w-full max-w-sm">
          <div class="relative">
            <label for="topbar-search" class="sr-only">Search</label>
            <span
              class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              ${k(Ge,"w-3 h-3")}
            </span>

            <input
              id="topbar-search"
              type="text"
              placeholder="Search..."
              aria-label="Search"
              class="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus-visible:outline-none text-sm bg-gray-50"
            />
          </div>
        </div>

        <!-- Right: Icon group -->
        <div class="flex items-center gap-4">
          <!-- Notifications -->
          ${this.iconButton("Notifications",k(Je,"w-5 h-5"))}

          <!-- Help -->
          ${this.iconButton("Help",k(rr,"w-5 h-5"))}

          <!-- Settings -->
          ${this.iconButton("Settings",k(de,"w-5 h-5"))}

          <!-- Profile -->
          <div class="relative">
            <button
              id="profile-button"
              aria-controls="profile-menu"
              @click=${t=>this.toggleProfile(t)}
              class="flex items-center gap-2 p-1 rounded-md hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:outline-none transition"
              aria-haspopup="true"
              aria-expanded=${this.profileOpen?"true":"false"}
              type="button"
            >
              <img
                src="https://i.pravatar.cc/40?img=8"
                class="w-9 h-9 rounded-full border border-gray-300 shadow-sm"
                alt="Profile"
              />
            </button>

            <div
              id="profile-menu"
              class=${e}
              role="menu"
              aria-labelledby="profile-button"
              aria-hidden=${!this.profileOpen}
              @keydown=${this.onMenuKeyDown}
            >
              <div class="py-1">
                <button
                  role="menuitem"
                  tabindex="-1"
                  class="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:outline-none rounded"
                  type="button"
                >
                  <span class="w-4 h-4">${k(pe,"w-4 h-4")}</span>
                  <span>Profile</span>
                </button>

                <button
                  role="menuitem"
                  tabindex="-1"
                  class="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:outline-none rounded"
                  type="button"
                >
                  <span class="w-4 h-4">${k(de,"w-4 h-4")}</span>
                  <span>Settings</span>
                </button>

                <div class="border-t my-1"></div>

                <button
                  role="menuitem"
                  tabindex="-1"
                  class="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:outline-none rounded"
                  type="button"
                >
                  <span class="w-4 h-4"
                    >${k(ar,"w-4 h-4")}</span
                  >
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    `}};me([x()],Wt.prototype,"profileOpen",2),Wt=me([y("top-bar")],Wt);var Jr=Object.defineProperty,Kr=Object.getOwnPropertyDescriptor,Yt=(e,t,r,o)=>{for(var a=o>1?void 0:o?Kr(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(a=(o?s(t,r,a):s(a))||a);return o&&a&&Jr(t,r,a),a};let Ct=class extends f{constructor(){super(...arguments),this.open=!1,this.employee=null}createRenderRoot(){return this}_onClose(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_onOpenOrgChart(){this.dispatchEvent(new CustomEvent("open-org-chart",{detail:this.employee,bubbles:!0,composed:!0}))}render(){if(!this.open||!this.employee)return null;const e=this.employee;return c`
      <div
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        role="dialog"
        aria-modal="true"
      >
        <div
          class="bg-white rounded-md shadow-lg max-w-md w-full border border-gray-200"
        >
          <!-- Header -->
          <div class="flex items-center justify-between p-5 border-b">
            <div>
              <h3 class="text-base font-semibold text-gray-900">
                Organization Chart
              </h3>
              <p class="text-sm text-gray-600">
                View this employee in the hierarchy
              </p>
            </div>
            <ui-button
              variant="ghost"
              size="sm"
              type="button"
              aria-label="Close"
              @click=${this._onClose}
            >
              ✕
            </ui-button>
          </div>

          <!-- Body -->
          <div class="p-5 space-y-4">
            <div class="flex items-center gap-4">
              <img
                src="${e.avatarUrl}"
                alt="${e.fullName}"
                class="w-16 h-16 rounded-full border border-gray-200 object-cover"
                onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(e.fullName)}&background=random'"
              />
              <div>
                <h4 class="text-sm font-semibold text-gray-900">
                  ${e.fullName}
                </h4>
                <p class="text-sm text-gray-600">${e.title}</p>
                <p class="text-xs text-gray-500">${e.location}</p>
              </div>
            </div>

            <div class="space-y-3">
              <div
                class="p-3 bg-primary-50 rounded-md border border-primary-100"
              >
                <p class="text-sm text-primary-800">
                  The organization chart view would show ${e.fullName}'s
                  position, including:
                </p>
                <ul
                  class="mt-2 text-sm text-primary-700 list-disc list-inside space-y-1"
                >
                  <li>Direct manager and chain of command</li>
                  <li>Team members reporting to them</li>
                  <li>Peers in the department</li>
                  <li>Complete reporting structure</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="flex justify-end gap-3 p-5 border-t">
            <ui-button
              variant="ghost"
              size="sm"
              type="button"
              @click=${this._onClose}
            >
              Cancel
            </ui-button>
            <ui-button
              variant="primary"
              size="sm"
              type="button"
              @click=${this._onOpenOrgChart}
            >
              Open Full Org Chart
            </ui-button>
          </div>
        </div>
      </div>
    `}};Yt([p({type:Boolean})],Ct.prototype,"open",2),Yt([p({type:Object})],Ct.prototype,"employee",2),Ct=Yt([y("org-chart-modal")],Ct);var Xr=Object.defineProperty,Gr=Object.getOwnPropertyDescriptor,At=(e,t,r,o)=>{for(var a=o>1?void 0:o?Gr(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(a=(o?s(t,r,a):s(a))||a);return o&&a&&Xr(t,r,a),a};$.AppLayout=class extends f{constructor(){super(...arguments),this.activeTab="overview",this.showOrgChartModal=!1,this.selectedEmployee=null}createRenderRoot(){return this}onSectionChange(t){this.activeTab=t.detail.value}onOrgChartClick(t){const{employeeId:r,employee:o}=t.detail;this.selectedEmployee={id:r,...o},this.showOrgChartModal=!0}closeModal(){this.showOrgChartModal=!1,this.selectedEmployee=null}handleOpenOrgChart(t){const r=t.detail;alert(`Opening full organization chart for ${r.fullName}...

This would navigate to: /org-chart/${r.id}`),this.closeModal()}render(){return c`
      <top-bar></top-bar>

      <profile-header
        employee-id="emp-1"
        @section-change=${this.onSectionChange}
        @org-chart-click=${this.onOrgChartClick}
      ></profile-header>

      <div class="max-w-5xl mx-auto mt-6 px-4">${this.renderSection()}</div>

      <!-- Org Chart Modal Component -->
      <org-chart-modal
        .open=${this.showOrgChartModal}
        .employee=${this.selectedEmployee}
        @close=${this.closeModal}
        @open-org-chart=${this.handleOpenOrgChart}
      ></org-chart-modal>

      <footer class="py-3 text-center text-xs text-gray-500 border-t mt-8">
        © 2025 Nova Logistics
      </footer>
    `}renderSection(){switch(this.activeTab){case"overview":return c`<profile-details></profile-details>`}}},At([x()],$.AppLayout.prototype,"activeTab",2),At([x()],$.AppLayout.prototype,"showOrgChartModal",2),At([x()],$.AppLayout.prototype,"selectedEmployee",2),$.AppLayout=At([y("app-layout")],$.AppLayout),Object.defineProperty($,Symbol.toStringTag,{value:"Module"})});
