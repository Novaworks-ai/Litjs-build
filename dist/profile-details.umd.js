(function(v,_){typeof exports=="object"&&typeof module<"u"?_(exports):typeof define=="function"&&define.amd?define(["exports"],_):(v=typeof globalThis<"u"?globalThis:v||self,_(v.ProfileDetails={}))})(this,function(v){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Zt;const _=globalThis,st=_.ShadowRoot&&(_.ShadyCSS===void 0||_.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,nt=Symbol(),Et=new WeakMap;let Pt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==nt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(st&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Et.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Et.set(e,t))}return t}toString(){return this.cssText}};const lt=r=>new Pt(typeof r=="string"?r:r+"",void 0,nt),Ot=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,a,o)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+r[o+1],r[0]);return new Pt(e,r,nt)},Qt=(r,t)=>{if(st)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),a=_.litNonce;a!==void 0&&i.setAttribute("nonce",a),i.textContent=e.cssText,r.appendChild(i)}},Tt=st?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return lt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:te,defineProperty:ee,getOwnPropertyDescriptor:re,getOwnPropertyNames:ae,getOwnPropertySymbols:ie,getPrototypeOf:oe}=Object,k=globalThis,Mt=k.trustedTypes,se=Mt?Mt.emptyScript:"",ct=k.reactiveElementPolyfillSupport,U=(r,t)=>r,X={toAttribute(r,t){switch(t){case Boolean:r=r?se:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},dt=(r,t)=>!te(r,t),zt={attribute:!0,type:String,converter:X,reflect:!1,useDefault:!1,hasChanged:dt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),k.litPropertyMetadata??(k.litPropertyMetadata=new WeakMap);let M=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=zt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(t,i,e);a!==void 0&&ee(this.prototype,t,a)}}static getPropertyDescriptor(t,e,i){const{get:a,set:o}=re(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get:a,set(s){const l=a==null?void 0:a.call(this);o==null||o.call(this,s),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??zt}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;const t=oe(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){const e=this.properties,i=[...ae(e),...ie(e)];for(const a of i)this.createProperty(a,e[a])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,a]of e)this.elementProperties.set(i,a)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const a=this._$Eu(e,i);a!==void 0&&this._$Eh.set(a,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const a of i)e.unshift(Tt(a))}else t!==void 0&&e.push(Tt(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Qt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){var o;const i=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,i);if(a!==void 0&&i.reflect===!0){const s=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:X).toAttribute(e,i.type);this._$Em=t,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$Em=null}}_$AK(t,e){var o,s;const i=this.constructor,a=i._$Eh.get(t);if(a!==void 0&&this._$Em!==a){const l=i.getPropertyOptions(a),n=typeof l.converter=="function"?{fromAttribute:l.converter}:((o=l.converter)==null?void 0:o.fromAttribute)!==void 0?l.converter:X;this._$Em=a;const p=n.fromAttribute(e,l.type);this[a]=p??((s=this._$Ej)==null?void 0:s.get(a))??p,this._$Em=null}}requestUpdate(t,e,i){var a;if(t!==void 0){const o=this.constructor,s=this[t];if(i??(i=o.getPropertyOptions(t)),!((i.hasChanged??dt)(s,e)||i.useDefault&&i.reflect&&s===((a=this._$Ej)==null?void 0:a.get(t))&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:a,wrapped:o},s){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,s??e??this[t]),o!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),a===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const a=this.constructor.elementProperties;if(a.size>0)for(const[o,s]of a){const{wrapped:l}=s,n=this[o];l!==!0||this._$AL.has(o)||n===void 0||this.C(o,void 0,s,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(a=>{var o;return(o=a.hostUpdate)==null?void 0:o.call(a)}),this.update(e)):this._$EM()}catch(a){throw t=!1,this._$EM(),a}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var a;return(a=i.hostUpdated)==null?void 0:a.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};M.elementStyles=[],M.shadowRootOptions={mode:"open"},M[U("elementProperties")]=new Map,M[U("finalized")]=new Map,ct==null||ct({ReactiveElement:M}),(k.reactiveElementVersions??(k.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=globalThis,K=L.trustedTypes,Nt=K?K.createPolicy("lit-html",{createHTML:r=>r}):void 0,jt="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,Rt="?"+A,ne=`<${Rt}>`,S=document,I=()=>S.createComment(""),H=r=>r===null||typeof r!="object"&&typeof r!="function",pt=Array.isArray,le=r=>pt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",ht=`[ 	
\f\r]`,B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ut=/-->/g,Lt=/>/g,C=RegExp(`>|${ht}(?:([^\\s"'>=/]+)(${ht}*=${ht}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),It=/'/g,Ht=/"/g,Bt=/^(?:script|style|textarea|title)$/i,ce=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),c=ce(1),x=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),qt=new WeakMap,D=S.createTreeWalker(S,129);function Wt(r,t){if(!pt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Nt!==void 0?Nt.createHTML(t):t}const de=(r,t)=>{const e=r.length-1,i=[];let a,o=t===2?"<svg>":t===3?"<math>":"",s=B;for(let l=0;l<e;l++){const n=r[l];let p,w,d=-1,g=0;for(;g<n.length&&(s.lastIndex=g,w=s.exec(n),w!==null);)g=s.lastIndex,s===B?w[1]==="!--"?s=Ut:w[1]!==void 0?s=Lt:w[2]!==void 0?(Bt.test(w[2])&&(a=RegExp("</"+w[2],"g")),s=C):w[3]!==void 0&&(s=C):s===C?w[0]===">"?(s=a??B,d=-1):w[1]===void 0?d=-2:(d=s.lastIndex-w[2].length,p=w[1],s=w[3]===void 0?C:w[3]==='"'?Ht:It):s===Ht||s===It?s=C:s===Ut||s===Lt?s=B:(s=C,a=void 0);const h=s===C&&r[l+1].startsWith("/>")?" ":"";o+=s===B?n+ne:d>=0?(i.push(p),n.slice(0,d)+jt+n.slice(d)+A+h):n+A+(d===-2?l:h)}return[Wt(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class q{constructor({strings:t,_$litType$:e},i){let a;this.parts=[];let o=0,s=0;const l=t.length-1,n=this.parts,[p,w]=de(t,e);if(this.el=q.createElement(p,i),D.currentNode=this.el.content,e===2||e===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(a=D.nextNode())!==null&&n.length<l;){if(a.nodeType===1){if(a.hasAttributes())for(const d of a.getAttributeNames())if(d.endsWith(jt)){const g=w[s++],h=a.getAttribute(d).split(A),f=/([.?@])?(.*)/.exec(g);n.push({type:1,index:o,name:f[2],strings:h,ctor:f[1]==="."?he:f[1]==="?"?ge:f[1]==="@"?ue:Z}),a.removeAttribute(d)}else d.startsWith(A)&&(n.push({type:6,index:o}),a.removeAttribute(d));if(Bt.test(a.tagName)){const d=a.textContent.split(A),g=d.length-1;if(g>0){a.textContent=K?K.emptyScript:"";for(let h=0;h<g;h++)a.append(d[h],I()),D.nextNode(),n.push({type:2,index:++o});a.append(d[g],I())}}}else if(a.nodeType===8)if(a.data===Rt)n.push({type:2,index:o});else{let d=-1;for(;(d=a.data.indexOf(A,d+1))!==-1;)n.push({type:7,index:o}),d+=A.length-1}o++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function z(r,t,e=r,i){var s,l;if(t===x)return t;let a=i!==void 0?(s=e._$Co)==null?void 0:s[i]:e._$Cl;const o=H(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==o&&((l=a==null?void 0:a._$AO)==null||l.call(a,!1),o===void 0?a=void 0:(a=new o(r),a._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=a:e._$Cl=a),a!==void 0&&(t=z(r,a._$AS(r,t.values),a,i)),t}let pe=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,a=((t==null?void 0:t.creationScope)??S).importNode(e,!0);D.currentNode=a;let o=D.nextNode(),s=0,l=0,n=i[0];for(;n!==void 0;){if(s===n.index){let p;n.type===2?p=new N(o,o.nextSibling,this,t):n.type===1?p=new n.ctor(o,n.name,n.strings,this,t):n.type===6&&(p=new we(o,this,t)),this._$AV.push(p),n=i[++l]}s!==(n==null?void 0:n.index)&&(o=D.nextNode(),s++)}return D.currentNode=S,a}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}};class N{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,a){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=a,this._$Cv=(a==null?void 0:a.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),H(t)?t===b||t==null||t===""?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==x&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):le(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==b&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:i}=t,a=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=q.createElement(Wt(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===a)this._$AH.p(e);else{const s=new pe(a,this),l=s.u(this.options);s.p(e),this.T(l),this._$AH=s}}_$AC(t){let e=qt.get(t.strings);return e===void 0&&qt.set(t.strings,e=new q(t)),e}k(t){pt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,a=0;for(const o of t)a===e.length?e.push(i=new N(this.O(I()),this.O(I()),this,this.options)):i=e[a],i._$AI(o),a++;a<e.length&&(this._$AR(i&&i._$AB.nextSibling,a),e.length=a)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t!==this._$AB;){const a=t.nextSibling;t.remove(),t=a}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,a,o){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=e,this._$AM=a,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=b}_$AI(t,e=this,i,a){const o=this.strings;let s=!1;if(o===void 0)t=z(this,t,e,0),s=!H(t)||t!==this._$AH&&t!==x,s&&(this._$AH=t);else{const l=t;let n,p;for(t=o[0],n=0;n<o.length-1;n++)p=z(this,l[i+n],e,n),p===x&&(p=this._$AH[n]),s||(s=!H(p)||p!==this._$AH[n]),p===b?t=b:t!==b&&(t+=(p??"")+o[n+1]),this._$AH[n]=p}s&&!a&&this.j(t)}j(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class he extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===b?void 0:t}}class ge extends Z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==b)}}class ue extends Z{constructor(t,e,i,a,o){super(t,e,i,a,o),this.type=5}_$AI(t,e=this){if((t=z(this,t,e,0)??b)===x)return;const i=this._$AH,a=t===b&&i!==b||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==b&&(i===b||a);a&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class we{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const be={I:N},gt=L.litHtmlPolyfillSupport;gt==null||gt(q,N),(L.litHtmlVersions??(L.litHtmlVersions=[])).push("3.3.1");const fe=(r,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let a=i._$litPart$;if(a===void 0){const o=(e==null?void 0:e.renderBefore)??null;i._$litPart$=a=new N(t.insertBefore(I(),o),o,void 0,e??{})}return a._$AI(r),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=globalThis;let m=class extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=fe(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return x}};m._$litElement$=!0,m.finalized=!0,(Zt=E.litElementHydrateSupport)==null||Zt.call(E,{LitElement:m});const ut=E.litElementPolyfillSupport;ut==null||ut({LitElement:m}),(E.litElementVersions??(E.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:dt},ve=(r=me,t,e)=>{const{kind:i,metadata:a}=e;let o=globalThis.litPropertyMetadata.get(a);if(o===void 0&&globalThis.litPropertyMetadata.set(a,o=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(e.name,r),i==="accessor"){const{name:s}=e;return{set(l){const n=t.get.call(this);t.set.call(this,l),this.requestUpdate(s,n,r)},init(l){return l!==void 0&&this.C(s,void 0,r,l),l}}}if(i==="setter"){const{name:s}=e;return function(l){const n=this[s];t.call(this,l),this.requestUpdate(s,n,r)}}throw Error("Unsupported decorator location: "+i)};function u(r){return(t,e)=>typeof e=="object"?ve(r,t,e):((i,a,o)=>{const s=a.hasOwnProperty(o);return a.constructor.createProperty(o,i),s?Object.getOwnPropertyDescriptor(a,o):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function P(r){return u({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wt={ATTRIBUTE:1,CHILD:2},bt=r=>(...t)=>({_$litDirective$:r,values:t});class ft{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt=bt(class extends ft{constructor(r){var t;if(super(r),r.type!==wt.ATTRIBUTE||r.name!=="class"||((t=r.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){var i,a;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((i=this.nt)!=null&&i.has(o))&&this.st.add(o);return this.render(t)}const e=r.element.classList;for(const o of this.st)o in t||(e.remove(o),this.st.delete(o));for(const o in t){const s=!!t[o];s===this.st.has(o)||(a=this.nt)!=null&&a.has(o)||(s?(e.add(o),this.st.add(o)):(e.remove(o),this.st.delete(o)))}return x}}),Ft='@import"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap";*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:Inter,sans-serif;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}body{background-color:#f4f4f6;font-family:Poppins,Inter,sans-serif}.card{border-radius:24px;border-width:1px;--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));padding:1.5rem;--tw-shadow: 0 2px 8px rgba(0,0,0,.08);--tw-shadow-colored: 0 2px 8px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.visible{visibility:visible}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.inset-0{top:0;right:0;bottom:0;left:0}.-right-2{right:-.5rem}.-top-2{top:-.5rem}.left-3{left:.75rem}.right-0{right:0}.top-0{top:0}.top-1\\/2{top:50%}.top-full{top:100%}.z-20{z-index:20}.z-50{z-index:50}.mx-3{margin-left:.75rem;margin-right:.75rem}.mx-auto{margin-left:auto;margin-right:auto}.my-1{margin-top:.25rem;margin-bottom:.25rem}.mb-12{margin-bottom:12px}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:4px}.mb-8{margin-bottom:8px}.ml-0{margin-left:0}.ml-4{margin-left:4px}.ml-auto{margin-left:auto}.mr-1{margin-right:.25rem}.mr-2{margin-right:.5rem}.mt-0\\.5{margin-top:.125rem}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:4px}.mt-6{margin-top:1.5rem}.mt-8{margin-top:8px}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.hidden{display:none}.size-10{width:2.5rem;height:2.5rem}.h-10{height:2.5rem}.h-12{height:12px}.h-14{height:3.5rem}.h-16{height:16px}.h-2{height:.5rem}.h-3{height:.75rem}.h-4{height:4px}.h-5{height:1.25rem}.h-8{height:8px}.h-9{height:2.25rem}.h-\\[100px\\]{height:100px}.h-full{height:100%}.w-10{width:2.5rem}.w-12{width:12px}.w-14{width:3.5rem}.w-16{width:16px}.w-2{width:.5rem}.w-3{width:.75rem}.w-3\\/4{width:75%}.w-4{width:4px}.w-48{width:48px}.w-5{width:1.25rem}.w-5\\/6{width:83.333333%}.w-64{width:16rem}.w-8{width:8px}.w-9{width:2.25rem}.w-\\[100px\\]{width:100px}.w-full{width:100%}.min-w-0{min-width:0px}.min-w-\\[150px\\]{min-width:150px}.max-w-5xl{max-width:64rem}.max-w-md{max-width:28rem}.max-w-sm{max-width:24rem}.flex-1{flex:1 1 0%}.flex-auto{flex:1 1 auto}.flex-none{flex:none}.flex-shrink{flex-shrink:1}.border-collapse{border-collapse:collapse}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-0{--tw-rotate: 0deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-105{--tw-scale-x: 1.05;--tw-scale-y: 1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.list-inside{list-style-position:inside}.list-disc{list-style-type:disc}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:4px}.gap-6{gap:1.5rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-3>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.75rem * var(--tw-space-x-reverse));margin-left:calc(.75rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(4px * var(--tw-space-x-reverse));margin-left:calc(4px * calc(1 - var(--tw-space-x-reverse)))}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.75rem * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(4px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(4px * var(--tw-space-y-reverse))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-pre-line{white-space:pre-line}.rounded{border-radius:.25rem}.rounded-full{border-radius:999px}.rounded-lg{border-radius:24px}.rounded-md{border-radius:16px}.rounded-sm{border-radius:8px}.rounded-xl{border-radius:32px}.border{border-width:1px}.border-2{border-width:2px}.border-\\[5px\\]{border-width:5px}.border-b{border-bottom-width:1px}.border-b-2{border-bottom-width:2px}.border-l{border-left-width:1px}.border-l-4{border-left-width:4px}.border-t{border-top-width:1px}.border-current{border-color:currentColor}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-gray-200\\/50{border-color:#e5e7eb80}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.border-green-400{--tw-border-opacity: 1;border-color:rgb(74 222 128 / var(--tw-border-opacity, 1))}.border-indigo-100{--tw-border-opacity: 1;border-color:rgb(224 231 255 / var(--tw-border-opacity, 1))}.border-indigo-200{--tw-border-opacity: 1;border-color:rgb(199 210 254 / var(--tw-border-opacity, 1))}.border-indigo-500{--tw-border-opacity: 1;border-color:rgb(99 102 241 / var(--tw-border-opacity, 1))}.border-primary{--tw-border-opacity: 1;border-color:rgb(var(--color-primary) / var(--tw-border-opacity, 1))}.border-primary-100{--tw-border-opacity: 1;border-color:rgb(237 233 254 / var(--tw-border-opacity, 1))}.border-red-200{--tw-border-opacity: 1;border-color:rgb(254 202 202 / var(--tw-border-opacity, 1))}.border-red-400{--tw-border-opacity: 1;border-color:rgb(248 113 113 / var(--tw-border-opacity, 1))}.border-transparent{border-color:transparent}.border-white{--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity, 1))}.bg-black\\/40{background-color:#0006}.bg-black\\/50{background-color:#00000080}.bg-blue-100{--tw-bg-opacity: 1;background-color:rgb(219 234 254 / var(--tw-bg-opacity, 1))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.bg-gray-300{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity, 1))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.bg-indigo-100{--tw-bg-opacity: 1;background-color:rgb(224 231 255 / var(--tw-bg-opacity, 1))}.bg-primary{--tw-bg-opacity: 1;background-color:rgb(var(--color-primary) / var(--tw-bg-opacity, 1))}.bg-primary-100{--tw-bg-opacity: 1;background-color:rgb(237 233 254 / var(--tw-bg-opacity, 1))}.bg-primary-50{--tw-bg-opacity: 1;background-color:rgb(245 243 255 / var(--tw-bg-opacity, 1))}.bg-purple-600{--tw-bg-opacity: 1;background-color:rgb(147 51 234 / var(--tw-bg-opacity, 1))}.bg-red-50{--tw-bg-opacity: 1;background-color:rgb(254 242 242 / var(--tw-bg-opacity, 1))}.bg-rose-500{--tw-bg-opacity: 1;background-color:rgb(244 63 94 / var(--tw-bg-opacity, 1))}.bg-secondary{--tw-bg-opacity: 1;background-color:rgb(var(--color-secondary) / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-white\\/80{background-color:#fffc}.bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.from-indigo-50{--tw-gradient-from: #eef2ff var(--tw-gradient-from-position);--tw-gradient-to: rgb(238 242 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.from-indigo-500{--tw-gradient-from: #6366f1 var(--tw-gradient-from-position);--tw-gradient-to: rgb(99 102 241 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.from-indigo-600{--tw-gradient-from: #4f46e5 var(--tw-gradient-from-position);--tw-gradient-to: rgb(79 70 229 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.to-purple-50{--tw-gradient-to: #faf5ff var(--tw-gradient-to-position)}.to-purple-600{--tw-gradient-to: #9333ea var(--tw-gradient-to-position)}.bg-clip-text{-webkit-background-clip:text;background-clip:text}.object-cover{-o-object-fit:cover;object-fit:cover}.p-1{padding:.25rem}.p-12{padding:12px}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:4px}.p-5{padding:1.25rem}.p-6{padding:1.5rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-12{padding-left:12px;padding-right:12px}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:4px;padding-right:4px}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-8{padding-left:8px;padding-right:8px}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.py-12{padding-top:12px;padding-bottom:12px}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:4px;padding-bottom:4px}.py-8{padding-top:8px;padding-bottom:8px}.pb-2{padding-bottom:.5rem}.pl-1{padding-left:.25rem}.pl-10{padding-left:2.5rem}.pl-4{padding-left:4px}.pr-4{padding-right:4px}.pt-2{padding-top:.5rem}.pt-4{padding-top:4px}.pt-6{padding-top:1.5rem}.text-left{text-align:left}.text-center{text-align:center}.text-2xl{font-size:1.5rem;line-height:2rem}.text-\\[11px\\]{font-size:11px}.text-\\[13px\\]{font-size:13px}.text-\\[15px\\]{font-size:15px}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.leading-relaxed{line-height:1.6}.leading-tight{line-height:1.2}.tracking-wide{letter-spacing:.01em}.text-blue-800{--tw-text-opacity: 1;color:rgb(30 64 175 / var(--tw-text-opacity, 1))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.text-green-600{--tw-text-opacity: 1;color:rgb(22 163 74 / var(--tw-text-opacity, 1))}.text-indigo-400{--tw-text-opacity: 1;color:rgb(129 140 248 / var(--tw-text-opacity, 1))}.text-indigo-800{--tw-text-opacity: 1;color:rgb(55 48 163 / var(--tw-text-opacity, 1))}.text-primary{--tw-text-opacity: 1;color:rgb(var(--color-primary) / var(--tw-text-opacity, 1))}.text-primary-600{--tw-text-opacity: 1;color:rgb(124 58 237 / var(--tw-text-opacity, 1))}.text-primary-700{--tw-text-opacity: 1;color:rgb(109 40 217 / var(--tw-text-opacity, 1))}.text-primary-800{--tw-text-opacity: 1;color:rgb(91 33 182 / var(--tw-text-opacity, 1))}.text-purple-600{--tw-text-opacity: 1;color:rgb(147 51 234 / var(--tw-text-opacity, 1))}.text-purple-700{--tw-text-opacity: 1;color:rgb(126 34 206 / var(--tw-text-opacity, 1))}.text-red-400{--tw-text-opacity: 1;color:rgb(248 113 113 / var(--tw-text-opacity, 1))}.text-red-600{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity, 1))}.text-red-800{--tw-text-opacity: 1;color:rgb(153 27 27 / var(--tw-text-opacity, 1))}.text-transparent{color:transparent}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.opacity-25{opacity:.25}.opacity-50{opacity:.5}.opacity-75{opacity:.75}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 4px 20px rgba(0,0,0,.12);--tw-shadow-colored: 0 4px 20px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px rgba(0,0,0,.04);--tw-shadow-colored: 0 1px 2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-xl{--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.ring-2{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.ring-indigo-300{--tw-ring-opacity: 1;--tw-ring-color: rgb(165 180 252 / var(--tw-ring-opacity, 1))}.blur{--tw-blur: blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.drop-shadow{--tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / .1)) drop-shadow(0 1px 1px rgb(0 0 0 / .06));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-sm{--tw-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.backdrop-blur-xl{--tw-backdrop-blur: blur(24px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}:root{--color-primary: 130 0 219;--color-secondary: 249 115 22}.hover\\:-translate-y-0\\.5:hover{--tw-translate-y: -.125rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:scale-105:hover{--tw-scale-x: 1.05;--tw-scale-y: 1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:border-primary-300:hover{--tw-border-opacity: 1;border-color:rgb(196 181 253 / var(--tw-border-opacity, 1))}.hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-50:hover{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.hover\\:bg-indigo-50:hover{--tw-bg-opacity: 1;background-color:rgb(238 242 255 / var(--tw-bg-opacity, 1))}.hover\\:bg-primary-50:hover{--tw-bg-opacity: 1;background-color:rgb(245 243 255 / var(--tw-bg-opacity, 1))}.hover\\:bg-primary-700:hover{--tw-bg-opacity: 1;background-color:rgb(109 40 217 / var(--tw-bg-opacity, 1))}.hover\\:bg-primary\\/10:hover{background-color:rgb(var(--color-primary) / .1)}.hover\\:bg-red-50:hover{--tw-bg-opacity: 1;background-color:rgb(254 242 242 / var(--tw-bg-opacity, 1))}.hover\\:bg-secondary-700:hover{--tw-bg-opacity: 1;background-color:rgb(194 65 12 / var(--tw-bg-opacity, 1))}.hover\\:text-gray-800:hover{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.hover\\:text-gray-900:hover{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.hover\\:text-green-700:hover{--tw-text-opacity: 1;color:rgb(21 128 61 / var(--tw-text-opacity, 1))}.hover\\:text-primary:hover{--tw-text-opacity: 1;color:rgb(var(--color-primary) / var(--tw-text-opacity, 1))}.hover\\:text-primary-800:hover{--tw-text-opacity: 1;color:rgb(91 33 182 / var(--tw-text-opacity, 1))}.hover\\:text-primary-900:hover{--tw-text-opacity: 1;color:rgb(76 29 149 / var(--tw-text-opacity, 1))}.hover\\:text-red-700:hover{--tw-text-opacity: 1;color:rgb(185 28 28 / var(--tw-text-opacity, 1))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:shadow-lg:hover{--tw-shadow: 0 4px 20px rgba(0,0,0,.12);--tw-shadow-colored: 0 4px 20px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.hover\\:shadow-md:hover{--tw-shadow: 0 2px 8px rgba(0,0,0,.08);--tw-shadow-colored: 0 2px 8px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.focus\\:border-indigo-500:focus{--tw-border-opacity: 1;border-color:rgb(99 102 241 / var(--tw-border-opacity, 1))}.focus\\:border-primary:focus{--tw-border-opacity: 1;border-color:rgb(var(--color-primary) / var(--tw-border-opacity, 1))}.focus\\:border-transparent:focus{border-color:transparent}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-indigo-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(99 102 241 / var(--tw-ring-opacity, 1))}.focus\\:ring-primary:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(var(--color-primary) / var(--tw-ring-opacity, 1))}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:ring-2:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-visible\\:ring-indigo-300:focus-visible{--tw-ring-opacity: 1;--tw-ring-color: rgb(165 180 252 / var(--tw-ring-opacity, 1))}.focus-visible\\:ring-primary:focus-visible{--tw-ring-opacity: 1;--tw-ring-color: rgb(var(--color-primary) / var(--tw-ring-opacity, 1))}.focus-visible\\:ring-secondary:focus-visible{--tw-ring-opacity: 1;--tw-ring-color: rgb(var(--color-secondary) / var(--tw-ring-opacity, 1))}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width: 2px}.active\\:scale-95:active{--tw-scale-x: .95;--tw-scale-y: .95;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@media (min-width: 768px){.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}';var ye=Object.defineProperty,xe=Object.getOwnPropertyDescriptor,G=(r,t,e,i)=>{for(var a=i>1?void 0:i?xe(t,e):t,o=r.length-1,s;o>=0;o--)(s=r[o])&&(a=(i?s(t,e,a):s(a))||a);return i&&a&&ye(t,e,a),a};let Jt=0,j=class extends m{constructor(){super(...arguments),this.title="Title",this.collapsed=!1,this.contentId=`accordion-content-${++Jt}`,this.buttonId=`accordion-button-${Jt}`}toggle(){this.collapsed=!this.collapsed}render(){const r=Yt({"w-full flex justify-between items-center px-12 py-12 hover:bg-gray-100 text-gray-800 font-semibold focus:outline-none":!0}),t=Yt({"w-16 h-16 transform transition-transform duration-200":!0,"rotate-180":!this.collapsed}),e=this.collapsed?"max-height: 0; opacity: 0;":"max-height: 1000px; opacity: 1;";return c`
      <div
        class="bg-white rounded-sm border border-gray-200 shadow-xs overflow-hidden mb-12"
      >
        <!-- Header -->
        <button
          id=${this.buttonId}
          class=${r}
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
            class=${t}
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
          class="overflow-hidden transition-all duration-300"
          style=${e}
        >
          <div class="p-12">
            <slot></slot>
          </div>
        </div>
      </div>
    `}};j.styles=Ot`
    ${lt(Ft)}
  `,G([u({type:String})],j.prototype,"title",2),G([u({type:String})],j.prototype,"icon",2),G([P()],j.prototype,"collapsed",2),j=G([y("accordion-widget")],j);var $e=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,mt=(r,t,e,i)=>{for(var a=i>1?void 0:i?_e(t,e):t,o=r.length-1,s;o>=0;o--)(s=r[o])&&(a=(i?s(t,e,a):s(a))||a);return i&&a&&$e(t,e,a),a};let W=class extends m{constructor(){super(...arguments),this.title="",this.icon=""}render(){return c`
      <div
        class="bg-white rounded-sm shadow-xs p-12 border border-gray-200 mb-3"
      >
        ${this.title?c`
              <div
                class="flex items-center gap-2 mb-3 text-gray-900 font-semibold"
              >
                ${this.icon?c`<span>${this.icon}</span>`:null}
                <span>${this.title}</span>
              </div>
            `:null}
        <div>
          <slot></slot>
        </div>
      </div>
    `}};W.styles=Ot`
    ${lt(Ft)}
  `,mt([u({type:String})],W.prototype,"title",2),mt([u({type:String})],W.prototype,"icon",2),W=mt([y("card-widget")],W);var ke=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor,vt=(r,t,e,i)=>{for(var a=i>1?void 0:i?Ae(t,e):t,o=r.length-1,s;o>=0;o--)(s=r[o])&&(a=(i?s(t,e,a):s(a))||a);return i&&a&&ke(t,e,a),a};let Q=class extends m{constructor(){super(...arguments),this.label="About"}createRenderRoot(){return this}render(){const r=!!(this.text&&this.text.trim());return c`
      <div
        role="region"
        aria-label=${this.label}
        class="bg-white leading-relaxed text-gray-700 text-sm"
      >
        <h2 class="sr-only">${this.label}</h2>
        ${r?c`<p class="whitespace-pre-line">${this.text}</p>`:c`<slot></slot>`}
      </div>
    `}};vt([u({type:String,attribute:"text"})],Q.prototype,"text",2),vt([u({type:String})],Q.prototype,"label",2),Q=vt([y("about-widget")],Q);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Se}=be,Vt=()=>document.createComment(""),Y=(r,t,e)=>{var o;const i=r._$AA.parentNode,a=t===void 0?r._$AB:t._$AA;if(e===void 0){const s=i.insertBefore(Vt(),a),l=i.insertBefore(Vt(),a);e=new Se(s,l,r,r.options)}else{const s=e._$AB.nextSibling,l=e._$AM,n=l!==r;if(n){let p;(o=e._$AQ)==null||o.call(e,r),e._$AM=r,e._$AP!==void 0&&(p=r._$AU)!==l._$AU&&e._$AP(p)}if(s!==a||n){let p=e._$AA;for(;p!==s;){const w=p.nextSibling;i.insertBefore(p,a),p=w}}}return e},O=(r,t,e=r)=>(r._$AI(t,e),r),Ce={},De=(r,t=Ce)=>r._$AH=t,Ee=r=>r._$AH,yt=r=>{r._$AR(),r._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt=(r,t,e)=>{const i=new Map;for(let a=t;a<=e;a++)i.set(r[a],a);return i},tt=bt(class extends ft{constructor(r){if(super(r),r.type!==wt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,t,e){let i;e===void 0?e=t:t!==void 0&&(i=t);const a=[],o=[];let s=0;for(const l of r)a[s]=i?i(l,s):s,o[s]=e(l,s),s++;return{values:o,keys:a}}render(r,t,e){return this.dt(r,t,e).values}update(r,[t,e,i]){const a=Ee(r),{values:o,keys:s}=this.dt(t,e,i);if(!Array.isArray(a))return this.ut=s,o;const l=this.ut??(this.ut=[]),n=[];let p,w,d=0,g=a.length-1,h=0,f=o.length-1;for(;d<=g&&h<=f;)if(a[d]===null)d++;else if(a[g]===null)g--;else if(l[d]===s[h])n[h]=O(a[d],o[h]),d++,h++;else if(l[g]===s[f])n[f]=O(a[g],o[f]),g--,f--;else if(l[d]===s[f])n[f]=O(a[d],o[f]),Y(r,n[f+1],a[d]),d++,f--;else if(l[g]===s[h])n[h]=O(a[g],o[h]),Y(r,a[d],a[g]),g--,h++;else if(p===void 0&&(p=Xt(s,h,f),w=Xt(l,d,g)),p.has(l[d]))if(p.has(l[g])){const $=w.get(s[h]),Dt=$!==void 0?a[$]:null;if(Dt===null){const Gt=Y(r,a[d]);O(Gt,o[h]),n[h]=Gt}else n[h]=O(Dt,o[h]),Y(r,a[d],Dt),a[$]=null;h++}else yt(a[g]),g--;else yt(a[d]),d++;for(;h<=f;){const $=Y(r,n[f+1]);O($,o[h]),n[h++]=$}for(;d<=g;){const $=a[d++];$!==null&&yt($)}return this.ut=s,De(r,n),x}});var Pe=Object.defineProperty,Oe=Object.getOwnPropertyDescriptor,xt=(r,t,e,i)=>{for(var a=i>1?void 0:i?Oe(t,e):t,o=r.length-1,s;o>=0;o--)(s=r[o])&&(a=(i?s(t,e,a):s(a))||a);return i&&a&&Pe(t,e,a),a};let et=class extends m{constructor(){super(...arguments),this.skillsData=null,this.sections=[]}createRenderRoot(){return this}updated(r){r.has("skillsData")&&this.transformSkillsData()}transformSkillsData(){var e,i;if(!this.skillsData){this.sections=[];return}if(Array.isArray(this.skillsData)){this.sections=this.skillsData;return}const r=this.skillsData,t=[];(e=r.required_skills)!=null&&e.length&&t.push({sectionTitle:"Required Skills",skills:r.required_skills}),(i=r.additional_skills)!=null&&i.length&&t.push({sectionTitle:"Additional Skills",skills:r.additional_skills}),this.sections=t}getSections(){return this.sections}setSkillsData(r){this.skillsData=r}renderSection(r,t){return c`
      <div class="mb-12" role="group" aria-label=${r.sectionTitle}>
        <p class="text-sm font-semibold text-gray-700 mb-4">
          ${r.sectionTitle} (${r.skills.length})
        </p>
        <ul class="flex flex-wrap gap-2">
          ${tt(r.skills,(e,i)=>`${e}-${i}`,e=>c`
              <li class="flex">
                <span
                  class="px-3 py-2 bg-white rounded-full border border-gray-300 text-xs text-gray-800 shadow-sm hover:bg-gray-50 transition-colors"
                >
                  ${e}
                </span>
              </li>
            `)}
        </ul>
      </div>
    `}render(){var r;return(r=this.sections)!=null&&r.length?c`
      <section class="w-full mb-8" role="region" aria-label="Employee skills">
        ${tt(this.sections,(t,e)=>`${t.sectionTitle}-${e}`,(t,e)=>this.renderSection(t,e))}
      </section>
    `:c`<p class="text-gray-500 text-sm p-2" role="status">
        No skills available.
      </p>`}};xt([u({attribute:!1})],et.prototype,"skillsData",2),xt([P()],et.prototype,"sections",2),et=xt([y("employee-skills-widget")],et);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class $t extends ft{constructor(t){if(super(t),this.it=b,t.type!==wt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===b||t==null)return this._t=void 0,this.it=t;if(t===x)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}$t.directiveName="unsafeHTML",$t.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class _t extends $t{}_t.directiveName="unsafeSVG",_t.resultType=2;const Te=bt(_t),kt=(r,t="")=>{if(!r||!r.icon)return c``;const e=r.icon[0],i=r.icon[1],a=r.icon[4],o=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${e} ${i}" fill="currentColor" aria-hidden="true"><path d="${a}"/></svg>`;return c`<span class="${t} inline-block">${Te(o)}</span>`};var Me=Object.defineProperty,ze=Object.getOwnPropertyDescriptor,At=(r,t,e,i)=>{for(var a=i>1?void 0:i?ze(t,e):t,o=r.length-1,s;o>=0;o--)(s=r[o])&&(a=(i?s(t,e,a):s(a))||a);return i&&a&&Me(t,e,a),a};let rt=class extends m{constructor(){super(...arguments),this.fields=[],this.columns=2}createRenderRoot(){return this}getIconTemplate(r){return r.iconTemplate?r.iconTemplate:r.icon?kt(r.icon,"w-3 h-3 text-primary inline-block"):null}render(){if(!this.fields||this.fields.length===0)return c`<p class="text-gray-500 text-sm">No data available.</p>`;const r=this.columns===4?"md:grid-cols-4":this.columns===3?"md:grid-cols-3":"md:grid-cols-2";return c`
      <div class="grid gap-6 grid-cols-1 ${r}">
        ${tt(this.fields,(t,e)=>t.label??`${e}`,t=>{const e=this.getIconTemplate(t);return c`
              <div class="flex items-start gap-3">
                ${e?c`<div class="mt-1">${e}</div>`:""}
                <div class="flex flex-col ${e?"":"ml-0"}">
                  <div
                    class="text-[11px] text-gray-500 uppercase tracking-wide"
                  >
                    ${t.label}
                  </div>
                  <div
                    class="text-[15px] ${t.highlight?"text-primary font-500":"text-gray-900"}"
                  >
                    ${t.title}
                  </div>
                </div>
              </div>
            `})}
      </div>
    `}};At([u({type:Array,attribute:!1})],rt.prototype,"fields",2),At([u({type:Number})],rt.prototype,"columns",2),rt=At([y("field-list-widget")],rt);/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var Ne={prefix:"fas",iconName:"map-pin",icon:[320,512,[128205],"f276","M192 284.4C256.1 269.9 304 212.5 304 144 304 64.5 239.5 0 160 0S16 64.5 16 144c0 68.5 47.9 125.9 112 140.4L128 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-195.6zM168 96c-30.9 0-56 25.1-56 56 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.4 46.6-104 104-104 13.3 0 24 10.7 24 24s-10.7 24-24 24z"]},je={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]},Re={prefix:"fas",iconName:"mobile",icon:[384,512,[128241,"mobile-android","mobile-phone"],"f3ce","M80 0C44.7 0 16 28.7 16 64l0 384c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L80 0zm72 416l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]},Ue={icon:[448,512,[],"f077","M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},Le={prefix:"fas",iconName:"building",icon:[384,512,[127970,61687],"f1ad","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM176 352l32 0c17.7 0 32 14.3 32 32l0 80-96 0 0-80c0-17.7 14.3-32 32-32zM96 112c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM240 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM96 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm144-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"]},Ie={prefix:"fas",iconName:"calendar",icon:[448,512,[128197,128198],"f133","M128 0C110.3 0 96 14.3 96 32l0 32-32 0C28.7 64 0 92.7 0 128l0 48 448 0 0-48c0-35.3-28.7-64-64-64l-32 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32-128 0 0-32c0-17.7-14.3-32-32-32zM0 224L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192-448 0z"]},He={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144,62470,"user-alt","user-large"],"f007","M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"]},Be={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"]},qe={icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},We={prefix:"fas",iconName:"tag",icon:[512,512,[127991],"f02b","M32.5 96l0 149.5c0 17 6.7 33.3 18.7 45.3l192 192c25 25 65.5 25 90.5 0L483.2 333.3c25-25 25-65.5 0-90.5l-192-192C279.2 38.7 263 32 246 32L96.5 32c-35.3 0-64 28.7-64 64zm112 16a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Ye={prefix:"fas",iconName:"briefcase",icon:[512,512,[128188],"f0b1","M200 48l112 0c4.4 0 8 3.6 8 8l0 40-128 0 0-40c0-4.4 3.6-8 8-8zm-56 8l0 40-80 0C28.7 96 0 124.7 0 160l0 96 512 0 0-96c0-35.3-28.7-64-64-64l-80 0 0-40c0-30.9-25.1-56-56-56L200 0c-30.9 0-56 25.1-56 56zM512 304l-192 0 0 16c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-16-192 0 0 112c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-112z"]},Fe=Object.defineProperty,Je=Object.getOwnPropertyDescriptor,at=(r,t,e,i)=>{for(var a=i>1?void 0:i?Je(t,e):t,o=r.length-1,s;o>=0;o--)(s=r[o])&&(a=(i?s(t,e,a):s(a))||a);return i&&a&&Fe(t,e,a),a};const Ve=[{label:"Manager",title:"Maria Thompson",icon:"user",highlight:!0},{label:"Location",title:"Dallas Distribution Center, Building C",icon:"map-pin"},{label:"Work phone",title:"+1 (214) 555-0182",icon:"phone"},{label:"Job Title",title:"Forklift Operator",icon:"briefcase"},{label:"Work Schedule",title:"Mon-Fri, 6:00 AM – 2:30 PM",icon:"calendar"},{label:"Department",title:"Warehouse Operations",icon:"building"},{label:"Email",title:"james.davis@nova.com",icon:"envelope",highlight:!0},{label:"Nickname",title:"JD",icon:"tag"}];let F=class extends m{constructor(){super(),this.headerTitle="Employee details",this.fields=[],this.columns=2,this.fields=[...Ve]}createRenderRoot(){return this}getIconFromString(r){const t={user:He,"map-pin":Ne,phone:Be,briefcase:Ye,calendar:Ie,building:Le,envelope:je,tag:We,mobile:Re},e=t[r];return e||(console.warn(`[employee-details-widget] Unknown icon "${r}", defaulting to "user".`),t.user)}render(){const r=this.fields.map(t=>{const e=this.getIconFromString(t.icon);return{...t,iconTemplate:kt(e,"w-3 h-3 text-primary inline-block")}});return c`
      <section role="region" aria-label=${this.headerTitle}>
        <h2 class="sr-only">${this.headerTitle}</h2>
        <field-list-widget
          .fields=${r}
          .columns=${this.columns}
        ></field-list-widget>
      </section>
    `}};at([u({type:String})],F.prototype,"headerTitle",2),at([u({attribute:!1})],F.prototype,"fields",2),at([u({type:Number})],F.prototype,"columns",2),F=at([y("employee-details-widget")],F);var Xe=Object.defineProperty,Ke=Object.getOwnPropertyDescriptor,Kt=(r,t,e,i)=>{for(var a=i>1?void 0:i?Ke(t,e):t,o=r.length-1,s;o>=0;o--)(s=r[o])&&(a=(i?s(t,e,a):s(a))||a);return i&&a&&Xe(t,e,a),a};let St=class extends m{constructor(){super(...arguments),this.fields=[]}createRenderRoot(){return this}render(){var r;return(r=this.fields)!=null&&r.length?c`
      <ul role="list" class="space-y-2">
        ${this.fields.map(t=>this.renderUser(t))}
      </ul>
    `:c``}renderUser(r){const t=r.avatar?c`
          <img
            src="${r.avatar}"
            alt="${r.name}"
            class="size-10 flex-none rounded-full bg-gray-100 object-cover"
          />
        `:this.renderInitials(r);return c`
      <li class="flex items-center gap-3 py-1">
        <!-- Avatar -->
        ${t}

        <!-- User Info -->
        <div class="min-w-0 flex-auto">
          <p class="text-sm font-medium text-primary leading-tight">
            ${r.name}
          </p>

          ${r.designation?c`
                <p class="text-xs text-gray-500 leading-tight mt-0.5">
                  ${r.designation}
                </p>
              `:""}
        </div>
      </li>
    `}renderInitials(r){const t=this.getInitials(r);return c`
      <div
        class="size-10 flex-none rounded-full bg-gray-300 flex items-center justify-center"
      >
        <span class="text-xs font-semibold text-gray-700">${t}</span>
      </div>
    `}getInitials(r){var e,i;if(r.firstName||r.lastName)return((((e=r.firstName)==null?void 0:e.charAt(0))??"")+(((i=r.lastName)==null?void 0:i.charAt(0))??"")).toUpperCase();const t=r.name.split(" ");return t.length>=2?(t[0][0]+t[1][0]).toUpperCase():t[0][0].toUpperCase()}};Kt([u({type:Array})],St.prototype,"fields",2),St=Kt([y("field-users-widget")],St);var Ze=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor,it=(r,t,e,i)=>{for(var a=i>1?void 0:i?Ge(t,e):t,o=r.length-1,s;o>=0;o--)(s=r[o])&&(a=(i?s(t,e,a):s(a))||a);return i&&a&&Ze(t,e,a),a};let J=class extends m{constructor(){super(...arguments),this.teamData=null,this.openStates=[],this.sections=[]}createRenderRoot(){return this}updated(r){r.has("teamData")&&(this.transformTeamData(),this.syncOpenStates())}syncOpenStates(){this.openStates=this.sections.map((r,t)=>this.openStates[t]??!0)}transformTeamData(){var e,i,a;if(!this.teamData){this.sections=[];return}if(Array.isArray(this.teamData)){this.sections=this.teamData;return}const r=this.teamData,t=[];r.direct_manager&&t.push({sectionTitle:"Direct manager",users:[r.direct_manager]}),(e=r.other_managers)!=null&&e.length&&t.push({sectionTitle:"Other managers",users:r.other_managers}),(i=r.coworkers)!=null&&i.length&&t.push({sectionTitle:"Coworkers",users:r.coworkers}),(a=r.direct_reports)!=null&&a.length&&t.push({sectionTitle:"Direct reports",users:r.direct_reports}),this.sections=t}getSections(){return this.sections}setTeamData(r){this.teamData=r}toggleSection(r){const t=[...this.openStates];t[r]=!t[r],this.openStates=t}renderSection(r,t){const e=this.openStates[t],i=`team-panel-${t}`,a=`team-toggle-${t}`;return c`
      <div class="mb-2">
        <!-- HEADER -->
        <button
          id=${a}
          type="button"
          @click=${()=>this.toggleSection(t)}
          class="w-full flex items-center justify-between px-1 py-2 hover:bg-gray-50 rounded transition-colors"
          aria-expanded=${String(e)}
          aria-controls=${i}
        >
          <span class="text-[13px] font-semibold text-gray-800">
            ${r.sectionTitle} (${r.users.length})
          </span>
          <span class="w-2 h-2 inline-block">
            ${kt(e?Ue:qe,"w-3 h-3 text-gray-600")}
          </span>
        </button>

        <!-- LIST -->
        <div
          id=${i}
          role="region"
          aria-labelledby=${a}
          class="transition-all duration-300 overflow-hidden"
          style=${e?"max-height: var(--team-section-max-height, 9999px); opacity: 1;":"max-height: 0; opacity: 0;"}
        >
          <div class="pl-1">
            <field-users-widget .fields=${r.users}></field-users-widget>
          </div>
        </div>
      </div>
    `}render(){return!this.sections||this.sections.length===0?c`<p class="text-gray-500 text-sm p-2" role="status">
        No team information available.
      </p>`:c`
      ${tt(this.sections,(r,t)=>`${r.sectionTitle}-${t}`,(r,t)=>this.renderSection(r,t))}
    `}};it([u({attribute:!1})],J.prototype,"teamData",2),it([P()],J.prototype,"openStates",2),it([P()],J.prototype,"sections",2),J=it([y("employee-team-widget")],J);var Qe=Object.defineProperty,tr=Object.getOwnPropertyDescriptor,R=(r,t,e,i)=>{for(var a=i>1?void 0:i?tr(t,e):t,o=r.length-1,s;o>=0;o--)(s=r[o])&&(a=(i?s(t,e,a):s(a))||a);return i&&a&&Qe(t,e,a),a};let T=class extends m{constructor(){super(...arguments),this.contacts=[],this.addModalOpen=!1,this.draft={name:"",relationship:"",emergencyContact:!1},this.handleOpenClick=()=>{this.onRequestOpen?this.onRequestOpen():this.addModalOpen=!0},this.handleSubmit=r=>{var e;r.preventDefault();const t={...this.draft};(e=this.onAddContact)==null||e.call(this,t),this.dispatchEvent(new CustomEvent("add-contact",{detail:t,bubbles:!0,composed:!0})),this.resetDraft(),this.addModalOpen=!1},this.handleClose=()=>{this.resetDraft(),this.addModalOpen=!1}}createRenderRoot(){return this}resetDraft(){this.draft={name:"",relationship:"",emergencyContact:!1}}render(){var t;const r=((t=this.contacts)==null?void 0:t.length)>0;return c`
      <div class="space-y-3">
        <table class="w-full text-left border-collapse">
          <caption class="sr-only">
            Employee contacts
          </caption>
          <thead>
            <tr class="border-b border-gray-300">
              <th
                scope="col"
                class="px-3 py-2 text-xs text-gray-500 uppercase tracking-wide"
              >
                Name
              </th>
              <th
                scope="col"
                class="px-3 py-2 text-xs text-gray-500 uppercase tracking-wide"
              >
                Relationship
              </th>
              <th
                scope="col"
                class="px-3 py-2 text-xs text-gray-500 uppercase tracking-wide"
              >
                Emergency Contact
              </th>
            </tr>
          </thead>
          <tbody aria-live="polite">
            ${r?this.contacts.map((e,i)=>c`
                    <tr
                      class="border-b border-gray-200 hover:bg-gray-50"
                      data-row=${i}
                    >
                      <td class="px-3 py-2 text-sm text-gray-900">
                        ${e.name}
                      </td>
                      <td class="px-3 py-2 text-sm text-gray-700">
                        ${e.relationship}
                      </td>
                      <td
                        class="px-3 py-2 text-sm ${e.emergencyContact?"text-primary font-semibold":"text-gray-500"}"
                      >
                        ${e.emergencyContact?"Yes":"No"}
                      </td>
                    </tr>
                  `):c`<tr>
                  <td
                    colspan="3"
                    class="px-3 py-2 text-gray-500 text-sm"
                    role="status"
                  >
                    No contacts available
                  </td>
                </tr>`}
          </tbody>
        </table>

        <div class="flex justify-end items-center">
          <button
            type="button"
            class="text-primary text-sm font-semibold hover:underline"
            @click=${this.handleOpenClick}
          >
            Add Contact
          </button>
        </div>
      </div>

      ${this.addModalOpen?c`
            <div
              class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
              role="dialog"
              aria-modal="true"
            >
              <div class="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">
                  Add Contact
                </h3>
                <form class="space-y-4" @submit=${this.handleSubmit}>
                  <label class="block text-sm font-semibold text-gray-700">
                    Name
                    <input
                      class="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                      required
                      .value=${this.draft.name}
                      @input=${e=>this.draft={...this.draft,name:e.target.value}}
                    />
                  </label>

                  <label class="block text-sm font-semibold text-gray-700">
                    Relationship
                    <input
                      class="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                      required
                      .value=${this.draft.relationship}
                      @input=${e=>this.draft={...this.draft,relationship:e.target.value}}
                    />
                  </label>

                  <label
                    class="inline-flex items-center gap-2 text-sm text-gray-700"
                  >
                    <input
                      type="checkbox"
                      class="h-4 w-4 text-primary border-gray-300 rounded"
                      .checked=${this.draft.emergencyContact}
                      @change=${e=>this.draft={...this.draft,emergencyContact:e.target.checked}}
                    />
                    Emergency contact
                  </label>

                  <div class="flex justify-end gap-3 pt-2">
                    <button
                      type="button"
                      class="px-4 py-2 text-sm text-gray-700 hover:text-gray-900"
                      @click=${this.handleClose}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      class="px-4 py-2 text-sm bg-primary text-white rounded-md hover:bg-primary-700 focus:ring-2 focus:ring-primary"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          `:null}
    `}};R([u({attribute:!1})],T.prototype,"contacts",2),R([u({type:Boolean})],T.prototype,"addModalOpen",2),R([u({attribute:!1})],T.prototype,"onAddContact",2),R([u({attribute:!1})],T.prototype,"onRequestOpen",2),R([P()],T.prototype,"draft",2),T=R([y("employee-contacts-widget")],T);var er=Object.defineProperty,rr=Object.getOwnPropertyDescriptor,Ct=(r,t,e,i)=>{for(var a=i>1?void 0:i?rr(t,e):t,o=r.length-1,s;o>=0;o--)(s=r[o])&&(a=(i?s(t,e,a):s(a))||a);return i&&a&&er(t,e,a),a};let ot=class extends m{constructor(){super(...arguments),this.open=!1,this.draft={name:"",relationship:"",emergencyContact:!1},this.submit=r=>{r.preventDefault(),this.dispatchEvent(new CustomEvent("submit-contact",{detail:{...this.draft},bubbles:!0,composed:!0})),this.close()}}createRenderRoot(){return this}willUpdate(r){r.has("open")&&this.open&&(this.draft={name:"",relationship:"",emergencyContact:!1})}close(){this.dispatchEvent(new CustomEvent("close-modal",{bubbles:!0,composed:!0}))}render(){return this.open?c`
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
                @input=${r=>this.draft={...this.draft,name:r.target.value}}
              />
            </label>

            <label class="block text-sm font-semibold text-gray-800">
              Relationship
              <input
                class="mt-1 w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                required
                .value=${this.draft.relationship}
                @input=${r=>this.draft={...this.draft,relationship:r.target.value}}
              />
            </label>

            <label
              class="inline-flex items-center gap-2 text-sm text-gray-800 select-none"
            >
              <input
                type="checkbox"
                class="h-3 w-3 text-primary border-gray-300 rounded-sm focus:ring-2 focus:ring-primary"
                .checked=${this.draft.emergencyContact}
                @change=${r=>this.draft={...this.draft,emergencyContact:r.target.checked}}
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
    `:null}};Ct([u({type:Boolean})],ot.prototype,"open",2),Ct([P()],ot.prototype,"draft",2),ot=Ct([y("add-contact-modal")],ot);var ar=Object.defineProperty,ir=Object.getOwnPropertyDescriptor,V=(r,t,e,i)=>{for(var a=i>1?void 0:i?ir(t,e):t,o=r.length-1,s;o>=0;o--)(s=r[o])&&(a=(i?s(t,e,a):s(a))||a);return i&&a&&ar(t,e,a),a};v.ProfileDetails=class extends m{constructor(){super(...arguments),this.profileData={},this.showSections=["about","details","skills","team","contacts"],this.sectionTitles={about:"About me",details:"Employee Details",skills:"Skills",team:"Team Members",contacts:"Contacts"},this.addContactOpen=!1,this.openAddContact=()=>{this.addContactOpen=!0},this.closeAddContact=()=>{this.addContactOpen=!1},this.handleAddContact=t=>{var i;const e=((i=this.profileData.contacts)==null?void 0:i.contacts)??this.getDefaultContactsData().contacts??[];this.profileData={...this.profileData,contacts:{contacts:[...e,t]}},this.addContactOpen=!1}}createRenderRoot(){return this}getDefaultDetailsData(){return{headerTitle:"Employee details",fields:[{label:"Manager",title:"Maria Thompson",icon:"user",highlight:!0},{label:"Location",title:"Dallas Distribution Center, Building C",icon:"map-pin"},{label:"Work phone",title:"+1 (214) 555-0182",icon:"phone"},{label:"Job Title",title:"Forklift Operator",icon:"briefcase"},{label:"Work Schedule",title:"Mon-Fri, 6:00 AM – 2:30 PM",icon:"calendar"},{label:"Department",title:"Warehouse Operations",icon:"building"},{label:"Email",title:"james.davis@nova.com",icon:"envelope",highlight:!0},{label:"Nickname",title:"JD",icon:"tag"}]}}getDefaultAboutData(){return{text:"I'm a dedicated forklift operator with over 12 years of experience in warehouse operations and logistics. Safety is my top priority, and I take pride in maintaining a perfect safety record throughout my career. I'm certified in operating multiple types of forklifts and material handling equipment. When I'm not at work, I enjoy spending time with my family, mentoring young professionals in the industry, and playing basketball on weekends. I'm passionate about continuous improvement and always looking for ways to optimize our warehouse processes."}}getDefaultSkillsData(){return{required_skills:["Project Management","Team Leadership","Data Analysis"],additional_skills:["Public Speaking","Graphic Design","Cloud Computing"]}}getDefaultTeamData(){return{direct_manager:{avatar:"https://i.pravatar.cc/150?img=8",name:"Eve Davis",firstName:"Eve",lastName:"Davis",designation:"Shift Manager"},other_managers:[{avatar:"https://i.pravatar.cc/150?img=12",name:"Michael Thompson",firstName:"Michael",lastName:"Thompson",designation:"Operations Manager"},{avatar:"https://i.pravatar.cc/150?img=15",name:"Sarah Lee",firstName:"Sarah",lastName:"Lee",designation:"Department Manager"}],coworkers:[{avatar:"https://i.pravatar.cc/150?img=22",name:"John Carter",firstName:"John",lastName:"Carter",designation:"Senior Analyst"},{avatar:"https://i.pravatar.cc/150?img=31",name:"Priya Nair",firstName:"Priya",lastName:"Nair",designation:"HR Coordinator"},{avatar:"https://i.pravatar.cc/150?img=27",name:"David Miller",firstName:"David",lastName:"Miller",designation:"Software Engineer"}],direct_reports:[{avatar:"https://i.pravatar.cc/150?img=35",name:"Anita Sharma",firstName:"Anita",lastName:"Sharma",designation:"Junior Associate"},{avatar:"https://i.pravatar.cc/150?img=40",name:"Kevin Brooks",firstName:"Kevin",lastName:"Brooks",designation:"Trainee Engineer"}]}}getDefaultContactsData(){return{contacts:[{name:"Lisa Davis",relationship:"Spouse",emergencyContact:!0},{name:"Mark Johnson",relationship:"Brother",emergencyContact:!1},{name:"Priya Nair",relationship:"Friend",emergencyContact:!1}]}}shouldShowSection(t){return this.showSections.includes(t)}renderAboutSection(){if(!this.shouldShowSection("about"))return null;const t=this.profileData.about||this.getDefaultAboutData();return t.text?c`
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
      <div class="profile-details space-y-4 max-w-5xl mx-auto mt-6">
        ${this.renderAboutSection()} ${this.renderDetailsSection()}
        ${this.renderSkillsSection()} ${this.renderTeamSection()}
        ${this.renderContactsSection()}
      </div>

      <add-contact-modal
        .open=${this.addContactOpen}
        @submit-contact=${t=>this.handleAddContact(t.detail)}
        @close-modal=${this.closeAddContact}
      ></add-contact-modal>
    `}},V([u({type:Object,attribute:!1})],v.ProfileDetails.prototype,"profileData",2),V([u({type:Array,attribute:!1})],v.ProfileDetails.prototype,"showSections",2),V([u({type:Object,attribute:!1})],v.ProfileDetails.prototype,"sectionTitles",2),V([P()],v.ProfileDetails.prototype,"addContactOpen",2),v.ProfileDetails=V([y("profile-details")],v.ProfileDetails),Object.defineProperty(v,Symbol.toStringTag,{value:"Module"})});
