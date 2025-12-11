(function($,k){typeof exports=="object"&&typeof module<"u"?k(exports):typeof define=="function"&&define.amd?define(["exports"],k):($=typeof globalThis<"u"?globalThis:$||self,k($.ProfileDetails={}))})(this,function($){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var se;const k=globalThis,ft=k.ShadowRoot&&(k.ShadyCSS===void 0||k.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,mt=Symbol(),jt=new WeakMap;let Ut=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==mt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ft&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=jt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&jt.set(e,t))}return t}toString(){return this.cssText}};const re=s=>new Ut(typeof s=="string"?s:s+"",void 0,mt),m=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((r,i,o)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[o+1],s[0]);return new Ut(e,s,mt)},ae=(s,t)=>{if(ft)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),i=k.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=e.cssText,s.appendChild(r)}},Lt=ft?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return re(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:oe,defineProperty:ne,getOwnPropertyDescriptor:le,getOwnPropertyNames:ce,getOwnPropertySymbols:de,getPrototypeOf:pe}=Object,O=globalThis,Rt=O.trustedTypes,he=Rt?Rt.emptyScript:"",gt=O.reactiveElementPolyfillSupport,V=(s,t)=>s,ot={toAttribute(s,t){switch(t){case Boolean:s=s?he:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},vt=(s,t)=>!oe(s,t),It={attribute:!0,type:String,converter:ot,reflect:!1,useDefault:!1,hasChanged:vt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),O.litPropertyMetadata??(O.litPropertyMetadata=new WeakMap);let H=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=It){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,e);i!==void 0&&ne(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){const{get:i,set:o}=le(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:i,set(a){const l=i==null?void 0:i.call(this);o==null||o.call(this,a),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??It}static _$Ei(){if(this.hasOwnProperty(V("elementProperties")))return;const t=pe(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(V("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(V("properties"))){const e=this.properties,r=[...ce(e),...de(e)];for(const i of r)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,i]of e)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const i=this._$Eu(e,r);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)e.unshift(Lt(i))}else t!==void 0&&e.push(Lt(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ae(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){var o;const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const a=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:ot).toAttribute(e,r.type);this._$Em=t,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(t,e){var o,a;const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const l=r.getPropertyOptions(i),n=typeof l.converter=="function"?{fromAttribute:l.converter}:((o=l.converter)==null?void 0:o.fromAttribute)!==void 0?l.converter:ot;this._$Em=i;const p=n.fromAttribute(e,l.type);this[i]=p??((a=this._$Ej)==null?void 0:a.get(i))??p,this._$Em=null}}requestUpdate(t,e,r){var i;if(t!==void 0){const o=this.constructor,a=this[t];if(r??(r=o.getPropertyOptions(t)),!((r.hasChanged??vt)(a,e)||r.useDefault&&r.reflect&&a===((i=this._$Ej)==null?void 0:i.get(t))&&!this.hasAttribute(o._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:i,wrapped:o},a){r&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,a??e??this[t]),o!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,a]of i){const{wrapped:l}=a,n=this[o];l!==!0||this._$AL.has(o)||n===void 0||this.C(o,void 0,a,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(r=this._$EO)==null||r.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};H.elementStyles=[],H.shadowRootOptions={mode:"open"},H[V("elementProperties")]=new Map,H[V("finalized")]=new Map,gt==null||gt({ReactiveElement:H}),(O.reactiveElementVersions??(O.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=globalThis,nt=K.trustedTypes,Ht=nt?nt.createPolicy("lit-html",{createHTML:s=>s}):void 0,Bt="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,qt="?"+T,ue=`<${qt}>`,M=document,Z=()=>M.createComment(""),G=s=>s===null||typeof s!="object"&&typeof s!="function",bt=Array.isArray,fe=s=>bt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",yt=`[ 	
\f\r]`,Y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Wt=/-->/g,Ft=/>/g,N=RegExp(`>|${yt}(?:([^\\s"'>=/]+)(${yt}*=${yt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Jt=/'/g,Vt=/"/g,Kt=/^(?:script|style|textarea|title)$/i,me=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),c=me(1),D=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Zt=new WeakMap,j=M.createTreeWalker(M,129);function Gt(s,t){if(!bt(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ht!==void 0?Ht.createHTML(t):t}const ge=(s,t)=>{const e=s.length-1,r=[];let i,o=t===2?"<svg>":t===3?"<math>":"",a=Y;for(let l=0;l<e;l++){const n=s[l];let p,g,d=-1,u=0;for(;u<n.length&&(a.lastIndex=u,g=a.exec(n),g!==null);)u=a.lastIndex,a===Y?g[1]==="!--"?a=Wt:g[1]!==void 0?a=Ft:g[2]!==void 0?(Kt.test(g[2])&&(i=RegExp("</"+g[2],"g")),a=N):g[3]!==void 0&&(a=N):a===N?g[0]===">"?(a=i??Y,d=-1):g[1]===void 0?d=-2:(d=a.lastIndex-g[2].length,p=g[1],a=g[3]===void 0?N:g[3]==='"'?Vt:Jt):a===Vt||a===Jt?a=N:a===Wt||a===Ft?a=Y:(a=N,i=void 0);const h=a===N&&s[l+1].startsWith("/>")?" ":"";o+=a===Y?n+ue:d>=0?(r.push(p),n.slice(0,d)+Bt+n.slice(d)+T+h):n+T+(d===-2?l:h)}return[Gt(s,o+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class Q{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let o=0,a=0;const l=t.length-1,n=this.parts,[p,g]=ge(t,e);if(this.el=Q.createElement(p,r),j.currentNode=this.el.content,e===2||e===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=j.nextNode())!==null&&n.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(Bt)){const u=g[a++],h=i.getAttribute(d).split(T),b=/([.?@])?(.*)/.exec(u);n.push({type:1,index:o,name:b[2],strings:h,ctor:b[1]==="."?be:b[1]==="?"?ye:b[1]==="@"?$e:lt}),i.removeAttribute(d)}else d.startsWith(T)&&(n.push({type:6,index:o}),i.removeAttribute(d));if(Kt.test(i.tagName)){const d=i.textContent.split(T),u=d.length-1;if(u>0){i.textContent=nt?nt.emptyScript:"";for(let h=0;h<u;h++)i.append(d[h],Z()),j.nextNode(),n.push({type:2,index:++o});i.append(d[u],Z())}}}else if(i.nodeType===8)if(i.data===qt)n.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(T,d+1))!==-1;)n.push({type:7,index:o}),d+=T.length-1}o++}}static createElement(t,e){const r=M.createElement("template");return r.innerHTML=t,r}}function B(s,t,e=s,r){var a,l;if(t===D)return t;let i=r!==void 0?(a=e._$Co)==null?void 0:a[r]:e._$Cl;const o=G(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),o===void 0?i=void 0:(i=new o(s),i._$AT(s,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=i:e._$Cl=i),i!==void 0&&(t=B(s,i._$AS(s,t.values),i,r)),t}let ve=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,i=((t==null?void 0:t.creationScope)??M).importNode(e,!0);j.currentNode=i;let o=j.nextNode(),a=0,l=0,n=r[0];for(;n!==void 0;){if(a===n.index){let p;n.type===2?p=new q(o,o.nextSibling,this,t):n.type===1?p=new n.ctor(o,n.name,n.strings,this,t):n.type===6&&(p=new xe(o,this,t)),this._$AV.push(p),n=r[++l]}a!==(n==null?void 0:n.index)&&(o=j.nextNode(),a++)}return j.currentNode=M,i}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}};class q{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=B(this,t,e),G(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==D&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):fe(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==v&&G(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Q.createElement(Gt(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(e);else{const a=new ve(i,this),l=a.u(this.options);a.p(e),this.T(l),this._$AH=a}}_$AC(t){let e=Zt.get(t.strings);return e===void 0&&Zt.set(t.strings,e=new Q(t)),e}k(t){bt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const o of t)i===e.length?e.push(r=new q(this.O(Z()),this.O(Z()),this,this.options)):r=e[i],r._$AI(o),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class lt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,o){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=v}_$AI(t,e=this,r,i){const o=this.strings;let a=!1;if(o===void 0)t=B(this,t,e,0),a=!G(t)||t!==this._$AH&&t!==D,a&&(this._$AH=t);else{const l=t;let n,p;for(t=o[0],n=0;n<o.length-1;n++)p=B(this,l[r+n],e,n),p===D&&(p=this._$AH[n]),a||(a=!G(p)||p!==this._$AH[n]),p===v?t=v:t!==v&&(t+=(p??"")+o[n+1]),this._$AH[n]=p}a&&!i&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class be extends lt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}}class ye extends lt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==v)}}class $e extends lt{constructor(t,e,r,i,o){super(t,e,r,i,o),this.type=5}_$AI(t,e=this){if((t=B(this,t,e,0)??v)===D)return;const r=this._$AH,i=t===v&&r!==v||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==v&&(r===v||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class xe{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}}const _e={I:q},$t=K.litHtmlPolyfillSupport;$t==null||$t(Q,q),(K.litHtmlVersions??(K.litHtmlVersions=[])).push("3.3.1");const we=(s,t,e)=>{const r=(e==null?void 0:e.renderBefore)??t;let i=r._$litPart$;if(i===void 0){const o=(e==null?void 0:e.renderBefore)??null;r._$litPart$=i=new q(t.insertBefore(Z(),o),o,void 0,e??{})}return i._$AI(s),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=globalThis;let y=class extends H{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=we(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return D}};y._$litElement$=!0,y.finalized=!0,(se=U.litElementHydrateSupport)==null||se.call(U,{LitElement:y});const xt=U.litElementPolyfillSupport;xt==null||xt({LitElement:y}),(U.litElementVersions??(U.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=s=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,t)}):customElements.define(s,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ae={attribute:!0,type:String,converter:ot,reflect:!1,hasChanged:vt},Se=(s=Ae,t,e)=>{const{kind:r,metadata:i}=e;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),r==="setter"&&((s=Object.create(s)).wrapped=!0),o.set(e.name,s),r==="accessor"){const{name:a}=e;return{set(l){const n=t.get.call(this);t.set.call(this,l),this.requestUpdate(a,n,s)},init(l){return l!==void 0&&this.C(a,void 0,s,l),l}}}if(r==="setter"){const{name:a}=e;return function(l){const n=this[a];t.call(this,l),this.requestUpdate(a,n,s)}}throw Error("Unsupported decorator location: "+r)};function f(s){return(t,e)=>typeof e=="object"?Se(s,t,e):((r,i,o)=>{const a=i.hasOwnProperty(o);return i.constructor.createProperty(o,r),a?Object.getOwnPropertyDescriptor(i,o):void 0})(s,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function L(s){return f({...s,state:!0,attribute:!1})}const _=m`
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
`,w=m`
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
`,A=m`
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
`,z=m`
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
`,S=m`
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
`,C=m`
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
`,W=m`
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
`,Ce=m`
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
`,De=m`
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
`,Pe=m`
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
`,Ee=m`
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
`;var ke=Object.defineProperty,Oe=Object.getOwnPropertyDescriptor,ct=(s,t,e,r)=>{for(var i=r>1?void 0:r?Oe(t,e):t,o=s.length-1,a;o>=0;o--)(a=s[o])&&(i=(r?a(t,e,i):a(i))||i);return r&&i&&ke(t,e,i),i};let Yt=0,F=class extends y{constructor(){super(...arguments),this.title="Title",this.collapsed=!1,this.contentId=`accordion-content-${++Yt}`,this.buttonId=`accordion-button-${Yt}`}toggle(){this.collapsed=!this.collapsed}render(){return c`
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
    `}};F.styles=[C,_,A,w,z,S,W,m`
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
    `],ct([f({type:String})],F.prototype,"title",2),ct([f({type:String})],F.prototype,"icon",2),ct([L()],F.prototype,"collapsed",2),F=ct([x("accordion-widget")],F);var Te=Object.defineProperty,ze=Object.getOwnPropertyDescriptor,_t=(s,t,e,r)=>{for(var i=r>1?void 0:r?ze(t,e):t,o=s.length-1,a;o>=0;o--)(a=s[o])&&(i=(r?a(t,e,i):a(i))||i);return r&&i&&Te(t,e,i),i};let X=class extends y{constructor(){super(...arguments),this.title="",this.icon=""}render(){return c`
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
    `}};X.styles=[C,_,A,w,z,S,W,m`
      :host {
        display: block;
      }

    `],_t([f({type:String})],X.prototype,"title",2),_t([f({type:String})],X.prototype,"icon",2),X=_t([x("card-widget")],X);var Me=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,wt=(s,t,e,r)=>{for(var i=r>1?void 0:r?Ne(t,e):t,o=s.length-1,a;o>=0;o--)(a=s[o])&&(i=(r?a(t,e,i):a(i))||i);return r&&i&&Me(t,e,i),i};let tt=class extends y{constructor(){super(...arguments),this.label="About"}render(){const s=!!(this.text&&this.text.trim());return c`
      <div role="region" aria-label=${this.label}>
        <h2 class="sr-only">${this.label}</h2>
        ${s?c`<p class="text">${this.text}</p>`:c`<slot></slot>`}
      </div>
    `}};tt.styles=[C,_,A,w,z,S,W,m`
      :host {
        display: block;
      }

      .text {
        white-space: pre-line;
        margin: 0;
      }
    `],wt([f({type:String,attribute:"text"})],tt.prototype,"text",2),wt([f({type:String})],tt.prototype,"label",2),tt=wt([x("about-widget")],tt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At={ATTRIBUTE:1,CHILD:2},St=s=>(...t)=>({_$litDirective$:s,values:t});let Ct=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:je}=_e,Qt=()=>document.createComment(""),et=(s,t,e)=>{var o;const r=s._$AA.parentNode,i=t===void 0?s._$AB:t._$AA;if(e===void 0){const a=r.insertBefore(Qt(),i),l=r.insertBefore(Qt(),i);e=new je(a,l,s,s.options)}else{const a=e._$AB.nextSibling,l=e._$AM,n=l!==s;if(n){let p;(o=e._$AQ)==null||o.call(e,s),e._$AM=s,e._$AP!==void 0&&(p=s._$AU)!==l._$AU&&e._$AP(p)}if(a!==i||n){let p=e._$AA;for(;p!==a;){const g=p.nextSibling;r.insertBefore(p,i),p=g}}}return e},R=(s,t,e=s)=>(s._$AI(t,e),s),Ue={},Le=(s,t=Ue)=>s._$AH=t,Re=s=>s._$AH,Dt=s=>{s._$AR(),s._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt=(s,t,e)=>{const r=new Map;for(let i=t;i<=e;i++)r.set(s[i],i);return r},dt=St(class extends Ct{constructor(s){if(super(s),s.type!==At.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,t,e){let r;e===void 0?e=t:t!==void 0&&(r=t);const i=[],o=[];let a=0;for(const l of s)i[a]=r?r(l,a):a,o[a]=e(l,a),a++;return{values:o,keys:i}}render(s,t,e){return this.dt(s,t,e).values}update(s,[t,e,r]){const i=Re(s),{values:o,keys:a}=this.dt(t,e,r);if(!Array.isArray(i))return this.ut=a,o;const l=this.ut??(this.ut=[]),n=[];let p,g,d=0,u=i.length-1,h=0,b=o.length-1;for(;d<=u&&h<=b;)if(i[d]===null)d++;else if(i[u]===null)u--;else if(l[d]===a[h])n[h]=R(i[d],o[h]),d++,h++;else if(l[u]===a[b])n[b]=R(i[u],o[b]),u--,b--;else if(l[d]===a[b])n[b]=R(i[d],o[b]),et(s,n[b+1],i[d]),d++,b--;else if(l[u]===a[h])n[h]=R(i[u],o[h]),et(s,i[d],i[u]),u--,h++;else if(p===void 0&&(p=Xt(a,h,b),g=Xt(l,d,u)),p.has(l[d]))if(p.has(l[u])){const E=g.get(a[h]),Nt=E!==void 0?i[E]:null;if(Nt===null){const ie=et(s,i[d]);R(ie,o[h]),n[h]=ie}else n[h]=R(Nt,o[h]),et(s,i[d],Nt),i[E]=null;h++}else Dt(i[u]),u--;else Dt(i[d]),d++;for(;h<=b;){const E=et(s,n[b+1]);R(E,o[h]),n[h++]=E}for(;d<=u;){const E=i[d++];E!==null&&Dt(E)}return this.ut=a,Le(s,n),D}});var Ie=Object.defineProperty,He=Object.getOwnPropertyDescriptor,Pt=(s,t,e,r)=>{for(var i=r>1?void 0:r?He(t,e):t,o=s.length-1,a;o>=0;o--)(a=s[o])&&(i=(r?a(t,e,i):a(i))||i);return r&&i&&Ie(t,e,i),i};let st=class extends y{constructor(){super(...arguments),this.skillsData=null,this.sections=[]}updated(s){s.has("skillsData")&&this.transformSkillsData()}transformSkillsData(){var e,r;if(!this.skillsData){this.sections=[];return}if(Array.isArray(this.skillsData)){this.sections=this.skillsData;return}const s=this.skillsData,t=[];(e=s.required_skills)!=null&&e.length&&t.push({sectionTitle:"Required Skills",skills:s.required_skills}),(r=s.additional_skills)!=null&&r.length&&t.push({sectionTitle:"Additional Skills",skills:s.additional_skills}),this.sections=t}getSections(){return this.sections}setSkillsData(s){this.skillsData=s}renderSection(s,t){return c`
      <div class="section" role="group" aria-label=${s.sectionTitle}>
        <p class="pattern-section-title">
          ${s.sectionTitle} (${s.skills.length})
        </p>
        <ul class="pattern-chip-list">
          ${dt(s.skills,(e,r)=>`${e}-${r}`,e=>c`
              <li class="pattern-chip">
                <span>${e}</span>
              </li>
            `)}
        </ul>
      </div>
    `}render(){var s;return(s=this.sections)!=null&&s.length?c`
      <section class="skills" role="region" aria-label="Employee skills">
        ${dt(this.sections,(t,e)=>`${t.sectionTitle}-${e}`,(t,e)=>this.renderSection(t,e))}
      </section>
    `:c`<p class="empty-state" role="status">No skills available.</p>`}};st.styles=[C,_,A,w,z,S,De,m`
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
    `],Pt([f({attribute:!1})],st.prototype,"skillsData",2),Pt([L()],st.prototype,"sections",2),st=Pt([x("employee-skills-widget")],st);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const te="important",Be=" !"+te,qe=St(class extends Ct{constructor(s){var t;if(super(s),s.type!==At.ATTRIBUTE||s.name!=="style"||((t=s.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((t,e)=>{const r=s[e];return r==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(s,[t]){const{style:e}=s.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const r of this.ft)t[r]==null&&(this.ft.delete(r),r.includes("-")?e.removeProperty(r):e[r]=null);for(const r in t){const i=t[r];if(i!=null){this.ft.add(r);const o=typeof i=="string"&&i.endsWith(Be);r.includes("-")||o?e.setProperty(r,o?i.slice(0,-11):i,o?te:""):e[r]=i}}return D}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Et extends Ct{constructor(t){if(super(t),this.it=v,t.type!==At.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===v||t==null)return this._t=void 0,this.it=t;if(t===D)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Et.directiveName="unsafeHTML",Et.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class kt extends Et{}kt.directiveName="unsafeSVG",kt.resultType=2;const We=St(kt),Ot=(s,t="")=>{if(!s||!s.icon)return c``;const e=s.icon[0],r=s.icon[1],i=s.icon[4],o=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${e} ${r}" fill="currentColor" aria-hidden="true"><path d="${i}"/></svg>`;return c`<span class="${t} inline-block">${We(o)}</span>`};var Fe=Object.defineProperty,Je=Object.getOwnPropertyDescriptor,Tt=(s,t,e,r)=>{for(var i=r>1?void 0:r?Je(t,e):t,o=s.length-1,a;o>=0;o--)(a=s[o])&&(i=(r?a(t,e,i):a(i))||i);return r&&i&&Fe(t,e,i),i};let it=class extends y{constructor(){super(...arguments),this.fields=[],this.columns=2}getIconTemplate(s){return s.iconTemplate?s.iconTemplate:s.icon?Ot(s.icon,"icon icon-sm text-primary"):null}render(){if(!this.fields||this.fields.length===0)return c`<p class="empty-state">No data available.</p>`;const t={"--columns":`${Math.max(1,this.columns||1)}`};return c`
      <div class="field-grid" style=${qe(t)}>
        ${dt(this.fields,(e,r)=>e.label??`${r}`,e=>{const r=this.getIconTemplate(e);return c`
              <div class="field-item">
                ${r?c`<div class="field-icon">${r}</div>`:""}
                <div class="field-content">
                  <div class="field-label">${e.label}</div>
                  <div
                    class=${`field-value ${e.highlight?"is-highlight":""}`}
                  >
                    ${e.title}
                  </div>
                </div>
              </div>
            `})}
      </div>
    `}};it.styles=[C,_,A,w,S,m`
      :host {
        all: initial;
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
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--color-text-subtle, #6b7280);
        font-weight: var(--font-weight-medium, 500);
      }

      .field-value {
        font-size: 16px;
        color: var(--color-text, #111827);
        font-weight: var(--font-weight-medium, 500);
      }

      .field-value.is-highlight {
        color: var(--color-primary, #6d28d9);
        font-weight: var(--font-weight-semibold, 600);
      }

      .empty-state {
        color: var(--color-text-subtle, #6b7280);
        font-size: 14px;
      }
    `],Tt([f({type:Array,attribute:!1})],it.prototype,"fields",2),Tt([f({type:Number})],it.prototype,"columns",2),it=Tt([x("field-list-widget")],it);/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var Ve={prefix:"fas",iconName:"map-pin",icon:[320,512,[128205],"f276","M192 284.4C256.1 269.9 304 212.5 304 144 304 64.5 239.5 0 160 0S16 64.5 16 144c0 68.5 47.9 125.9 112 140.4L128 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-195.6zM168 96c-30.9 0-56 25.1-56 56 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.4 46.6-104 104-104 13.3 0 24 10.7 24 24s-10.7 24-24 24z"]},Ke={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]},Ze={prefix:"fas",iconName:"mobile",icon:[384,512,[128241,"mobile-android","mobile-phone"],"f3ce","M80 0C44.7 0 16 28.7 16 64l0 384c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L80 0zm72 416l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]},Ge={icon:[448,512,[],"f077","M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},Ye={prefix:"fas",iconName:"building",icon:[384,512,[127970,61687],"f1ad","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM176 352l32 0c17.7 0 32 14.3 32 32l0 80-96 0 0-80c0-17.7 14.3-32 32-32zM96 112c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM240 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM96 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm144-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"]},Qe={prefix:"fas",iconName:"calendar",icon:[448,512,[128197,128198],"f133","M128 0C110.3 0 96 14.3 96 32l0 32-32 0C28.7 64 0 92.7 0 128l0 48 448 0 0-48c0-35.3-28.7-64-64-64l-32 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32-128 0 0-32c0-17.7-14.3-32-32-32zM0 224L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192-448 0z"]},Xe={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144,62470,"user-alt","user-large"],"f007","M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"]},ts={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"]},es={icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},ss={prefix:"fas",iconName:"tag",icon:[512,512,[127991],"f02b","M32.5 96l0 149.5c0 17 6.7 33.3 18.7 45.3l192 192c25 25 65.5 25 90.5 0L483.2 333.3c25-25 25-65.5 0-90.5l-192-192C279.2 38.7 263 32 246 32L96.5 32c-35.3 0-64 28.7-64 64zm112 16a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},is={prefix:"fas",iconName:"briefcase",icon:[512,512,[128188],"f0b1","M200 48l112 0c4.4 0 8 3.6 8 8l0 40-128 0 0-40c0-4.4 3.6-8 8-8zm-56 8l0 40-80 0C28.7 96 0 124.7 0 160l0 96 512 0 0-96c0-35.3-28.7-64-64-64l-80 0 0-40c0-30.9-25.1-56-56-56L200 0c-30.9 0-56 25.1-56 56zM512 304l-192 0 0 16c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-16-192 0 0 112c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-112z"]},rs=Object.defineProperty,as=Object.getOwnPropertyDescriptor,zt=(s,t,e,r)=>{for(var i=r>1?void 0:r?as(t,e):t,o=s.length-1,a;o>=0;o--)(a=s[o])&&(i=(r?a(t,e,i):a(i))||i);return r&&i&&rs(t,e,i),i};const os=[{label:"Manager",title:"Maria Thompson",icon:"user",highlight:!0},{label:"Location",title:"Dallas Distribution Center, Building C",icon:"map-pin"},{label:"Work phone",title:"+1 (214) 555-0182",icon:"phone"},{label:"Job Title",title:"Forklift Operator",icon:"briefcase"},{label:"Work Schedule",title:"Mon-Fri, 6:00 AM – 2:30 PM",icon:"calendar"},{label:"Department",title:"Warehouse Operations",icon:"building"},{label:"Email",title:"james.davis@nova.com",icon:"envelope",highlight:!0},{label:"Nickname",title:"JD",icon:"tag"}];let rt=class extends y{constructor(){super(),this.fields=[],this.columns=2,this.fields=[...os]}getIconFromString(s){const t={user:Xe,"map-pin":Ve,phone:ts,briefcase:is,calendar:Qe,building:Ye,envelope:Ke,tag:ss,mobile:Ze},e=t[s];return e||(console.warn(`[employee-details-widget] Unknown icon "${s}", defaulting to "user".`),t.user)}render(){const s=this.fields.map(t=>{const e=this.getIconFromString(t.icon);return{...t,iconTemplate:Ot(e,"icon icon-sm text-primary")}});return c`
      <section role="region">
        <field-list-widget
          .fields=${s}
          .columns=${this.columns}
        ></field-list-widget>
      </section>
    `}};rt.styles=[C,_,A,w,z,S,W,m`
      :host {
        display: block;
      }
    `],zt([f({attribute:"fields",converter:{fromAttribute:s=>{if(!s)return[];try{return JSON.parse(s)}catch(t){return console.warn("[employee-details-widget] Unable to parse fields attribute, expected JSON array.",t),[]}}}})],rt.prototype,"fields",2),zt([f({type:Number})],rt.prototype,"columns",2),rt=zt([x("employee-details-widget")],rt);var ns=Object.defineProperty,ls=Object.getOwnPropertyDescriptor,ee=(s,t,e,r)=>{for(var i=r>1?void 0:r?ls(t,e):t,o=s.length-1,a;o>=0;o--)(a=s[o])&&(i=(r?a(t,e,i):a(i))||i);return r&&i&&ns(t,e,i),i};let pt=class extends y{constructor(){super(...arguments),this.fields=[]}render(){var s;return(s=this.fields)!=null&&s.length?c`
      <ul role="list" class="user-list">
        ${this.fields.map(t=>this.renderUser(t))}
      </ul>
    `:c``}renderUser(s){const t=s.avatar?c`<span class="avatar"
          ><img src="${s.avatar}" alt="${s.name}"
        /></span>`:this.renderInitials(s);return c`
      <li class="user-item">
        ${t}
        <div>
          <p class="name">${s.name}</p>
          ${s.designation?c`<p class="role">${s.designation}</p>`:""}
        </div>
      </li>
    `}renderInitials(s){const t=this.getInitials(s);return c` <span class="avatar">${t}</span> `}getInitials(s){var e,r;if(s.firstName||s.lastName)return((((e=s.firstName)==null?void 0:e.charAt(0))??"")+(((r=s.lastName)==null?void 0:r.charAt(0))??"")).toUpperCase();const t=s.name.split(" ");return t.length>=2?(t[0][0]+t[1][0]).toUpperCase():t[0][0].toUpperCase()}};pt.styles=[C,_,A,w,S,m`
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
    `],ee([f({type:Array})],pt.prototype,"fields",2),pt=ee([x("field-users-widget")],pt);var cs=Object.defineProperty,ds=Object.getOwnPropertyDescriptor,ht=(s,t,e,r)=>{for(var i=r>1?void 0:r?ds(t,e):t,o=s.length-1,a;o>=0;o--)(a=s[o])&&(i=(r?a(t,e,i):a(i))||i);return r&&i&&cs(t,e,i),i};let J=class extends y{constructor(){super(...arguments),this.teamData=null,this.openStates=[],this.sections=[]}updated(s){s.has("teamData")&&(this.transformTeamData(),this.syncOpenStates())}syncOpenStates(){this.openStates=this.sections.map((s,t)=>this.openStates[t]??!0)}transformTeamData(){var e,r,i;if(!this.teamData){this.sections=[];return}if(Array.isArray(this.teamData)){this.sections=this.teamData;return}const s=this.teamData,t=[];s.direct_manager&&t.push({sectionTitle:"Direct manager",users:[s.direct_manager]}),(e=s.other_managers)!=null&&e.length&&t.push({sectionTitle:"Other managers",users:s.other_managers}),(r=s.coworkers)!=null&&r.length&&t.push({sectionTitle:"Coworkers",users:s.coworkers}),(i=s.direct_reports)!=null&&i.length&&t.push({sectionTitle:"Direct reports",users:s.direct_reports}),this.sections=t}getSections(){return this.sections}setTeamData(s){this.teamData=s}toggleSection(s){const t=[...this.openStates];t[s]=!t[s],this.openStates=t}renderSection(s,t){const e=this.openStates[t],r=`team-panel-${t}`,i=`team-toggle-${t}`;return c`
      <div class="section">
        <button
          id=${i}
          type="button"
          @click=${()=>this.toggleSection(t)}
          class="section-toggle"
          aria-expanded=${String(e)}
          aria-controls=${r}
        >
          <span class="section-title">
            ${s.sectionTitle} (${s.users.length})
          </span>
          <span class="chevron">
            ${Ot(e?Ge:es,"icon icon-sm muted")}
          </span>
        </button>

        <div
          id=${r}
          role="region"
          aria-labelledby=${i}
          style=${e?"max-height: var(--team-section-max-height, 9999px); opacity: 1;":"max-height: 0; opacity: 0;"}
          class="section-panel"
        >
          <div class="section-body">
            <field-users-widget .fields=${s.users}></field-users-widget>
          </div>
        </div>
      </div>
    `}render(){return!this.sections||this.sections.length===0?c`<p class="empty-state" role="status">
        No team information available.
      </p>`:c`
      ${dt(this.sections,(s,t)=>`${s.sectionTitle}-${t}`,(s,t)=>this.renderSection(s,t))}
    `}};J.styles=[C,_,A,w,z,S,W,m`
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
    `],ht([f({attribute:!1})],J.prototype,"teamData",2),ht([L()],J.prototype,"openStates",2),ht([L()],J.prototype,"sections",2),J=ht([x("employee-team-widget")],J);var ps=Object.defineProperty,hs=Object.getOwnPropertyDescriptor,I=(s,t,e,r)=>{for(var i=r>1?void 0:r?hs(t,e):t,o=s.length-1,a;o>=0;o--)(a=s[o])&&(i=(r?a(t,e,i):a(i))||i);return r&&i&&ps(t,e,i),i};let P=class extends y{constructor(){super(...arguments),this.contacts=[],this.addModalOpen=!1,this.draft={name:"",relationship:"",emergencyContact:!1},this.handleOpenClick=()=>{this.onRequestOpen?this.onRequestOpen():this.addModalOpen=!0},this.handleSubmit=s=>{var e;s.preventDefault();const t={...this.draft};(e=this.onAddContact)==null||e.call(this,t),this.dispatchEvent(new CustomEvent("add-contact",{detail:t,bubbles:!0,composed:!0})),this.resetDraft(),this.addModalOpen=!1},this.handleClose=()=>{var s;this.resetDraft(),this.addModalOpen=!1,(s=this.onRequestClose)==null||s.call(this)}}resetDraft(){this.draft={name:"",relationship:"",emergencyContact:!1}}render(){var t;const s=((t=this.contacts)==null?void 0:t.length)>0;return c`
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
            ${s?this.contacts.map((e,r)=>c`
                    <tr data-row=${r}>
                      <td>${e.name}</td>
                      <td>${e.relationship}</td>
                      <td
                        class=${`pattern-status ${e.emergencyContact?"is-yes":""}`}
                      >
                        ${e.emergencyContact?"Yes":"No"}
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
                      @input=${e=>this.draft={...this.draft,name:e.target.value}}
                    />
                  </label>

                  <label class="pattern-field">
                    Relationship
                    <input
                      class="pattern-input"
                      required
                      .value=${this.draft.relationship}
                      @input=${e=>this.draft={...this.draft,relationship:e.target.value}}
                    />
                  </label>

                  <label class="pattern-checkbox">
                    <input
                      type="checkbox"
                      class="pattern-checkbox-input"
                      .checked=${this.draft.emergencyContact}
                      @change=${e=>this.draft={...this.draft,emergencyContact:e.target.checked}}
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
    `}};P.styles=[C,_,A,w,z,S,Ce,Ee,Pe,m`
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
    `],I([f({attribute:!1})],P.prototype,"contacts",2),I([f({type:Boolean})],P.prototype,"addModalOpen",2),I([f({attribute:!1})],P.prototype,"onAddContact",2),I([f({attribute:!1})],P.prototype,"onRequestOpen",2),I([f({attribute:!1})],P.prototype,"onRequestClose",2),I([L()],P.prototype,"draft",2),P=I([x("employee-contacts-widget")],P);var us=Object.defineProperty,fs=Object.getOwnPropertyDescriptor,Mt=(s,t,e,r)=>{for(var i=r>1?void 0:r?fs(t,e):t,o=s.length-1,a;o>=0;o--)(a=s[o])&&(i=(r?a(t,e,i):a(i))||i);return r&&i&&us(t,e,i),i};let ut=class extends y{constructor(){super(...arguments),this.open=!1,this.draft={name:"",relationship:"",emergencyContact:!1},this.submit=s=>{s.preventDefault(),this.dispatchEvent(new CustomEvent("submit-contact",{detail:{...this.draft},bubbles:!0,composed:!0})),this.close()}}createRenderRoot(){return this}willUpdate(s){s.has("open")&&this.open&&(this.draft={name:"",relationship:"",emergencyContact:!1})}close(){this.dispatchEvent(new CustomEvent("close-modal",{bubbles:!0,composed:!0}))}render(){return this.open?c`
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
                @input=${s=>this.draft={...this.draft,name:s.target.value}}
              />
            </label>

            <label class="block text-sm font-semibold text-gray-800">
              Relationship
              <input
                class="mt-1 w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                required
                .value=${this.draft.relationship}
                @input=${s=>this.draft={...this.draft,relationship:s.target.value}}
              />
            </label>

            <label
              class="inline-flex items-center gap-2 text-sm text-gray-800 select-none"
            >
              <input
                type="checkbox"
                class="h-3 w-3 text-primary border-gray-300 rounded-sm focus:ring-2 focus:ring-primary"
                .checked=${this.draft.emergencyContact}
                @change=${s=>this.draft={...this.draft,emergencyContact:s.target.checked}}
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
    `:null}};Mt([f({type:Boolean})],ut.prototype,"open",2),Mt([L()],ut.prototype,"draft",2),ut=Mt([x("add-contact-modal")],ut);var ms=Object.defineProperty,gs=Object.getOwnPropertyDescriptor,at=(s,t,e,r)=>{for(var i=r>1?void 0:r?gs(t,e):t,o=s.length-1,a;o>=0;o--)(a=s[o])&&(i=(r?a(t,e,i):a(i))||i);return r&&i&&ms(t,e,i),i};$.ProfileDetails=class extends y{constructor(){super(...arguments),this.profileData={},this.showSections=["about","details","skills","team","contacts"],this.sectionTitles={about:"About me",details:"Employee Details",skills:"Skills",team:"Team Members",contacts:"Contacts"},this.addContactOpen=!1,this.openAddContact=()=>{this.addContactOpen=!0},this.closeAddContact=()=>{this.addContactOpen=!1},this.handleAddContact=t=>{var r;const e=((r=this.profileData.contacts)==null?void 0:r.contacts)??this.getDefaultContactsData().contacts??[];this.profileData={...this.profileData,contacts:{contacts:[...e,t]}},this.addContactOpen=!1}}getDefaultDetailsData(){return{headerTitle:"Employee details",fields:[{label:"Manager",title:"Maria Thompson",icon:"user",highlight:!0},{label:"Location",title:"Dallas Distribution Center, Building C",icon:"map-pin"},{label:"Work phone",title:"+1 (214) 555-0182",icon:"phone"},{label:"Job Title",title:"Forklift Operator",icon:"briefcase"},{label:"Work Schedule",title:"Mon-Fri, 6:00 AM – 2:30 PM",icon:"calendar"},{label:"Department",title:"Warehouse Operations",icon:"building"},{label:"Email",title:"james.davis@nova.com",icon:"envelope",highlight:!0},{label:"Nickname",title:"JD",icon:"tag"}]}}getDefaultAboutData(){return{text:"I'm a dedicated forklift operator with over 12 years of experience in warehouse operations and logistics. Safety is my top priority, and I take pride in maintaining a perfect safety record throughout my career. I'm certified in operating multiple types of forklifts and material handling equipment. When I'm not at work, I enjoy spending time with my family, mentoring young professionals in the industry, and playing basketball on weekends. I'm passionate about continuous improvement and always looking for ways to optimize our warehouse processes."}}getDefaultSkillsData(){return{required_skills:["Project Management","Team Leadership","Data Analysis"],additional_skills:["Public Speaking","Graphic Design","Cloud Computing"]}}getDefaultTeamData(){return{direct_manager:{avatar:"https://i.pravatar.cc/150?img=8",name:"Eve Davis",firstName:"Eve",lastName:"Davis",designation:"Shift Manager"},other_managers:[{avatar:"https://i.pravatar.cc/150?img=12",name:"Michael Thompson",firstName:"Michael",lastName:"Thompson",designation:"Operations Manager"},{avatar:"https://i.pravatar.cc/150?img=15",name:"Sarah Lee",firstName:"Sarah",lastName:"Lee",designation:"Department Manager"}],coworkers:[{avatar:"https://i.pravatar.cc/150?img=22",name:"John Carter",firstName:"John",lastName:"Carter",designation:"Senior Analyst"},{avatar:"https://i.pravatar.cc/150?img=31",name:"Priya Nair",firstName:"Priya",lastName:"Nair",designation:"HR Coordinator"},{avatar:"https://i.pravatar.cc/150?img=27",name:"David Miller",firstName:"David",lastName:"Miller",designation:"Software Engineer"}],direct_reports:[{avatar:"https://i.pravatar.cc/150?img=35",name:"Anita Sharma",firstName:"Anita",lastName:"Sharma",designation:"Junior Associate"},{avatar:"https://i.pravatar.cc/150?img=40",name:"Kevin Brooks",firstName:"Kevin",lastName:"Brooks",designation:"Trainee Engineer"}]}}getDefaultContactsData(){return{contacts:[{name:"Lisa Davis",relationship:"Spouse",emergencyContact:!0},{name:"Mark Johnson",relationship:"Brother",emergencyContact:!1},{name:"Priya Nair",relationship:"Friend",emergencyContact:!1}]}}shouldShowSection(t){return this.showSections.includes(t)}renderAboutSection(){if(!this.shouldShowSection("about"))return null;const t=this.profileData.about||this.getDefaultAboutData();return t.text?c`
      <card-widget title=${this.sectionTitles.about}>
        <about-widget .text=${t.text}></about-widget>
      </card-widget>
    `:c`<card-widget title=${this.sectionTitles.about}>
        <p class="text-gray-500 text-sm p-2">No about information available.</p>
      </card-widget>`}renderDetailsSection(){if(!this.shouldShowSection("details"))return null;const t=this.profileData.details||this.getDefaultDetailsData();return!t.fields||t.fields.length===0?c`<accordion-widget title=${this.sectionTitles.details}>
        <p class="text-gray-500 text-sm p-2">No employee details available.</p>
      </accordion-widget>`:c`
      <accordion-widget title=${this.sectionTitles.details}>
        <employee-details-widget
          .headerTitle=${t.headerTitle||"Employee details"}
          .fields=${t.fields}
        >
        </employee-details-widget>
      </accordion-widget>
    `}renderSkillsSection(){if(!this.shouldShowSection("skills"))return null;const t=this.profileData.skills||this.getDefaultSkillsData();return t.required_skills&&t.required_skills.length>0||t.additional_skills&&t.additional_skills.length>0?c`
      <accordion-widget title=${this.sectionTitles.skills}>
        <employee-skills-widget
          .skillsData=${t}
        ></employee-skills-widget>
      </accordion-widget>
    `:c`<accordion-widget title=${this.sectionTitles.skills}>
        <p class="text-gray-500 text-sm p-2">No skills available.</p>
      </accordion-widget>`}renderTeamSection(){if(!this.shouldShowSection("team"))return null;const t=this.profileData.team||this.getDefaultTeamData();return t.direct_manager||t.other_managers&&t.other_managers.length>0||t.coworkers&&t.coworkers.length>0||t.direct_reports&&t.direct_reports.length>0?c`
      <card-widget title=${this.sectionTitles.team}>
        <employee-team-widget .teamData=${t}></employee-team-widget>
      </card-widget>
    `:c`<card-widget title=${this.sectionTitles.team}>
        <p class="text-gray-500 text-sm p-2">No team information available.</p>
      </card-widget>`}renderContactsSection(){if(!this.shouldShowSection("contacts"))return null;const t=this.profileData.contacts||this.getDefaultContactsData();return!t.contacts||t.contacts.length===0?c`
        <card-widget title=${this.sectionTitles.contacts}>
          <p class="text-gray-500 text-sm p-2">
            No contacts information available.
          </p>
        </card-widget>
      `:c`
      <card-widget title=${this.sectionTitles.contacts}>
        <employee-contacts-widget
          .contacts=${t.contacts??[]}
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
        @submit-contact=${t=>this.handleAddContact(t.detail)}
        @close-modal=${this.closeAddContact}
      ></add-contact-modal>
    `}},$.ProfileDetails.styles=[C,_,A,w,z,S,W,m`
      :host {
        all: initial;
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
    `],at([f({type:Object,attribute:!1})],$.ProfileDetails.prototype,"profileData",2),at([f({type:Array,attribute:!1})],$.ProfileDetails.prototype,"showSections",2),at([f({type:Object,attribute:!1})],$.ProfileDetails.prototype,"sectionTitles",2),at([L()],$.ProfileDetails.prototype,"addContactOpen",2),$.ProfileDetails=at([x("profile-details")],$.ProfileDetails),Object.defineProperty($,Symbol.toStringTag,{value:"Module"})});
