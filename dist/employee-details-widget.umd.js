(function($,v){typeof exports=="object"&&typeof module<"u"?v(exports):typeof define=="function"&&define.amd?define(["exports"],v):($=typeof globalThis<"u"?globalThis:$||self,v($.EmployeeDetailsWidget={}))})(this,function($){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ue;const v=globalThis,F=v.ShadowRoot&&(v.ShadyCSS===void 0||v.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),ae=new WeakMap;let ce=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(F&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=ae.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ae.set(t,e))}return e}toString(){return this.cssText}};const He=r=>new ce(typeof r=="string"?r:r+"",void 0,J),_=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new ce(t,r,J)},De=(r,e)=>{if(F)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=v.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},he=F?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return He(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Le,defineProperty:Re,getOwnPropertyDescriptor:ke,getOwnPropertyNames:je,getOwnPropertySymbols:Be,getPrototypeOf:Ie}=Object,b=globalThis,de=b.trustedTypes,We=de?de.emptyScript:"",Z=b.reactiveElementPolyfillSupport,U=(r,e)=>r,I={toAttribute(r,e){switch(e){case Boolean:r=r?We:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},K=(r,e)=>!Le(r,e),pe={attribute:!0,type:String,converter:I,reflect:!1,useDefault:!1,hasChanged:K};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),b.litPropertyMetadata??(b.litPropertyMetadata=new WeakMap);let M=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=pe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Re(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=ke(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:s,set(o){const a=s==null?void 0:s.call(this);n==null||n.call(this,o),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??pe}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;const e=Ie(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){const t=this.properties,i=[...je(t),...Be(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(he(s))}else e!==void 0&&t.push(he(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return De(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:I).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){var n,o;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:I;this._$Em=s;const h=l.fromAttribute(t,a.type);this[s]=h??((o=this._$Ej)==null?void 0:o.get(s))??h,this._$Em=null}}requestUpdate(e,t,i){var s;if(e!==void 0){const n=this.constructor,o=this[e];if(i??(i=n.getPropertyOptions(e)),!((i.hasChanged??K)(o,t)||i.useDefault&&i.reflect&&o===((s=this._$Ej)==null?void 0:s.get(e))&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:n},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??t??this[e]),n!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s){const{wrapped:a}=o,l=this[n];a!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,o,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};M.elementStyles=[],M.shadowRootOptions={mode:"open"},M[U("elementProperties")]=new Map,M[U("finalized")]=new Map,Z==null||Z({ReactiveElement:M}),(b.reactiveElementVersions??(b.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,W=N.trustedTypes,ue=W?W.createPolicy("lit-html",{createHTML:r=>r}):void 0,fe="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,me="?"+A,Ve=`<${me}>`,x=document,H=()=>x.createComment(""),D=r=>r===null||typeof r!="object"&&typeof r!="function",G=Array.isArray,qe=r=>G(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Q=`[ 	
\f\r]`,L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$e=/-->/g,ge=/>/g,w=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ye=/'/g,ve=/"/g,_e=/^(?:script|style|textarea|title)$/i,Fe=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),E=Fe(1),g=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),be=new WeakMap,S=x.createTreeWalker(x,129);function Ae(r,e){if(!G(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ue!==void 0?ue.createHTML(e):e}const Je=(r,e)=>{const t=r.length-1,i=[];let s,n=e===2?"<svg>":e===3?"<math>":"",o=L;for(let a=0;a<t;a++){const l=r[a];let h,u,c=-1,p=0;for(;p<l.length&&(o.lastIndex=p,u=o.exec(l),u!==null);)p=o.lastIndex,o===L?u[1]==="!--"?o=$e:u[1]!==void 0?o=ge:u[2]!==void 0?(_e.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=w):u[3]!==void 0&&(o=w):o===w?u[0]===">"?(o=s??L,c=-1):u[1]===void 0?c=-2:(c=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?w:u[3]==='"'?ve:ye):o===ve||o===ye?o=w:o===$e||o===ge?o=L:(o=w,s=void 0);const d=o===w&&r[a+1].startsWith("/>")?" ":"";n+=o===L?l+Ve:c>=0?(i.push(h),l.slice(0,c)+fe+l.slice(c)+A+d):l+A+(c===-2?a:d)}return[Ae(r,n+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class R{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,o=0;const a=e.length-1,l=this.parts,[h,u]=Je(e,t);if(this.el=R.createElement(h,i),S.currentNode=this.el.content,t===2||t===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=S.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(fe)){const p=u[o++],d=s.getAttribute(c).split(A),m=/([.?@])?(.*)/.exec(p);l.push({type:1,index:n,name:m[2],strings:d,ctor:m[1]==="."?Ke:m[1]==="?"?Ge:m[1]==="@"?Qe:V}),s.removeAttribute(c)}else c.startsWith(A)&&(l.push({type:6,index:n}),s.removeAttribute(c));if(_e.test(s.tagName)){const c=s.textContent.split(A),p=c.length-1;if(p>0){s.textContent=W?W.emptyScript:"";for(let d=0;d<p;d++)s.append(c[d],H()),S.nextNode(),l.push({type:2,index:++n});s.append(c[p],H())}}}else if(s.nodeType===8)if(s.data===me)l.push({type:2,index:n});else{let c=-1;for(;(c=s.data.indexOf(A,c+1))!==-1;)l.push({type:7,index:n}),c+=A.length-1}n++}}static createElement(e,t){const i=x.createElement("template");return i.innerHTML=e,i}}function T(r,e,t=r,i){var o,a;if(e===g)return e;let s=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const n=D(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=T(r,s._$AS(r,e.values),s,i)),e}let Ze=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??x).importNode(t,!0);S.currentNode=s;let n=S.nextNode(),o=0,a=0,l=i[0];for(;l!==void 0;){if(o===l.index){let h;l.type===2?h=new z(n,n.nextSibling,this,e):l.type===1?h=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(h=new Xe(n,this,e)),this._$AV.push(h),l=i[++a]}o!==(l==null?void 0:l.index)&&(n=S.nextNode(),o++)}return S.currentNode=x,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}};class z{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=T(this,e,t),D(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==g&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):qe(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==f&&D(this._$AH)?this._$AA.nextSibling.data=e:this.T(x.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=R.createElement(Ae(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const o=new Ze(s,this),a=o.u(this.options);o.p(t),this.T(a),this._$AH=o}}_$AC(e){let t=be.get(e.strings);return t===void 0&&be.set(e.strings,t=new R(e)),t}k(e){G(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new z(this.O(H()),this.O(H()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class V{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=f}_$AI(e,t=this,i,s){const n=this.strings;let o=!1;if(n===void 0)e=T(this,e,t,0),o=!D(e)||e!==this._$AH&&e!==g,o&&(this._$AH=e);else{const a=e;let l,h;for(e=n[0],l=0;l<n.length-1;l++)h=T(this,a[i+l],t,l),h===g&&(h=this._$AH[l]),o||(o=!D(h)||h!==this._$AH[l]),h===f?e=f:e!==f&&(e+=(h??"")+n[l+1]),this._$AH[l]=h}o&&!s&&this.j(e)}j(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ke extends V{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===f?void 0:e}}class Ge extends V{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==f)}}class Qe extends V{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=T(this,e,t,0)??f)===g)return;const i=this._$AH,s=e===f&&i!==f||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==f&&(i===f||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Xe{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){T(this,e)}}const Ye={I:z},X=N.litHtmlPolyfillSupport;X==null||X(R,z),(N.litHtmlVersions??(N.litHtmlVersions=[])).push("3.3.1");const et=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new z(e.insertBefore(H(),n),n,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis;let O=class extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=et(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return g}};O._$litElement$=!0,O.finalized=!0,(Ue=C.litElementHydrateSupport)==null||Ue.call(C,{LitElement:O});const Y=C.litElementPolyfillSupport;Y==null||Y({LitElement:O}),(C.litElementVersions??(C.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xe=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:K},it=(r=tt,e,t)=>{const{kind:i,metadata:s}=t;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),n.set(t.name,r),i==="accessor"){const{name:o}=t;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,l,r)},init(a){return a!==void 0&&this.C(o,void 0,r,a),a}}}if(i==="setter"){const{name:o}=t;return function(a){const l=this[o];e.call(this,a),this.requestUpdate(o,l,r)}}throw Error("Unsupported decorator location: "+i)};function k(r){return(e,t)=>typeof t=="object"?it(r,e,t):((i,s,n)=>{const o=s.hasOwnProperty(n);return s.constructor.createProperty(n,i),o?Object.getOwnPropertyDescriptor(s,n):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ee={ATTRIBUTE:1,CHILD:2},te=r=>(...e)=>({_$litDirective$:r,values:e});let ie=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:st}=Ye,we=()=>document.createComment(""),j=(r,e,t)=>{var n;const i=r._$AA.parentNode,s=e===void 0?r._$AB:e._$AA;if(t===void 0){const o=i.insertBefore(we(),s),a=i.insertBefore(we(),s);t=new st(o,a,r,r.options)}else{const o=t._$AB.nextSibling,a=t._$AM,l=a!==r;if(l){let h;(n=t._$AQ)==null||n.call(t,r),t._$AM=r,t._$AP!==void 0&&(h=r._$AU)!==a._$AU&&t._$AP(h)}if(o!==s||l){let h=t._$AA;for(;h!==o;){const u=h.nextSibling;i.insertBefore(h,s),h=u}}}return t},P=(r,e,t=r)=>(r._$AI(e,t),r),rt={},ot=(r,e=rt)=>r._$AH=e,nt=r=>r._$AH,se=r=>{r._$AR(),r._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ee=(r,e,t)=>{const i=new Map;for(let s=e;s<=t;s++)i.set(r[s],s);return i},lt=te(class extends ie{constructor(r){if(super(r),r.type!==ee.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);const s=[],n=[];let o=0;for(const a of r)s[o]=i?i(a,o):o,n[o]=t(a,o),o++;return{values:n,keys:s}}render(r,e,t){return this.dt(r,e,t).values}update(r,[e,t,i]){const s=nt(r),{values:n,keys:o}=this.dt(e,t,i);if(!Array.isArray(s))return this.ut=o,n;const a=this.ut??(this.ut=[]),l=[];let h,u,c=0,p=s.length-1,d=0,m=n.length-1;for(;c<=p&&d<=m;)if(s[c]===null)c++;else if(s[p]===null)p--;else if(a[c]===o[d])l[d]=P(s[c],n[d]),c++,d++;else if(a[p]===o[m])l[m]=P(s[p],n[m]),p--,m--;else if(a[c]===o[m])l[m]=P(s[c],n[m]),j(r,l[m+1],s[c]),c++,m--;else if(a[p]===o[d])l[d]=P(s[p],n[d]),j(r,s[c],s[p]),p--,d++;else if(h===void 0&&(h=Ee(o,d,m),u=Ee(a,c,p)),h.has(a[c]))if(h.has(a[p])){const y=u.get(o[d]),le=y!==void 0?s[y]:null;if(le===null){const Ne=j(r,s[c]);P(Ne,n[d]),l[d]=Ne}else l[d]=P(le,n[d]),j(r,s[c],le),s[y]=null;d++}else se(s[p]),p--;else se(s[c]),c++;for(;d<=m;){const y=j(r,l[m+1]);P(y,n[d]),l[d++]=y}for(;c<=p;){const y=s[c++];y!==null&&se(y)}return this.ut=o,ot(r,l),g}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se="important",at=" !"+Se,ct=te(class extends ie{constructor(r){var e;if(super(r),r.type!==ee.ATTRIBUTE||r.name!=="style"||((e=r.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((e,t)=>{const i=r[t];return i==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(r,[e]){const{style:t}=r.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?t.removeProperty(i):t[i]=null);for(const i in e){const s=e[i];if(s!=null){this.ft.add(i);const n=typeof s=="string"&&s.endsWith(at);i.includes("-")||n?t.setProperty(i,n?s.slice(0,-11):s,n?Se:""):t[i]=s}}return g}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class re extends ie{constructor(e){if(super(e),this.it=f,e.type!==ee.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===f||e==null)return this._t=void 0,this.it=e;if(e===g)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}re.directiveName="unsafeHTML",re.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class oe extends re{}oe.directiveName="unsafeSVG",oe.resultType=2;const ht=te(oe),Ce=(r,e="",t="")=>{if(!r||!r.icon)return E``;const i=r.icon[0],s=r.icon[1],n=r.icon[4],o=t?`font-size: ${t};`:"",a=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${i} ${s}" fill="currentColor" aria-hidden="true"><path d="${n}"/></svg>`;return E`<span class="${e} inline-block" style="${o}">${ht(a)}</span>`},Pe=_`
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
`,Me=_`
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
`,Te=_`
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
`,dt=_`
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
`,ze=_`
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
`,Oe=_`
  :root,
  :host {
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
`;var pt=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,ne=(r,e,t,i)=>{for(var s=i>1?void 0:i?ut(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&pt(e,t,s),s};let B=class extends O{constructor(){super(...arguments),this.fields=[],this.columns=2}getIconTemplate(r){return r.iconTemplate?r.iconTemplate:r.icon?Ce(r.icon,"icon icon-sm text-primary"):null}render(){if(!this.fields||this.fields.length===0)return E`<p class="empty-state">No data available.</p>`;const e={"--columns":`${Math.max(1,this.columns||1)}`};return E`
      <div class="field-grid" style=${ct(e)}>
        ${lt(this.fields,(t,i)=>t.label??`${i}`,t=>{const i=this.getIconTemplate(t);return E`
              <div class="field-item">
                ${i?E`<div class="field-icon">${i}</div>`:""}
                <div class="field-content">
                  <div class="field-label">${t.label}</div>
                  <div
                    class=${`field-value ${t.highlight?"is-highlight":""}`}
                  >
                    ${t.title}
                  </div>
                </div>
              </div>
            `})}
      </div>
    `}};B.styles=[Oe,Pe,Te,Me,ze,_`
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
    `],ne([k({type:Array,attribute:!1})],B.prototype,"fields",2),ne([k({type:Number})],B.prototype,"columns",2),B=ne([xe("field-list-widget")],B);/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var ft={prefix:"fas",iconName:"map-pin",icon:[320,512,[128205],"f276","M192 284.4C256.1 269.9 304 212.5 304 144 304 64.5 239.5 0 160 0S16 64.5 16 144c0 68.5 47.9 125.9 112 140.4L128 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-195.6zM168 96c-30.9 0-56 25.1-56 56 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.4 46.6-104 104-104 13.3 0 24 10.7 24 24s-10.7 24-24 24z"]},mt={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]},$t={prefix:"fas",iconName:"mobile",icon:[384,512,[128241,"mobile-android","mobile-phone"],"f3ce","M80 0C44.7 0 16 28.7 16 64l0 384c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L80 0zm72 416l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]},gt={prefix:"fas",iconName:"building",icon:[384,512,[127970,61687],"f1ad","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM176 352l32 0c17.7 0 32 14.3 32 32l0 80-96 0 0-80c0-17.7 14.3-32 32-32zM96 112c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM240 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM96 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm144-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"]},yt={prefix:"fas",iconName:"calendar",icon:[448,512,[128197,128198],"f133","M128 0C110.3 0 96 14.3 96 32l0 32-32 0C28.7 64 0 92.7 0 128l0 48 448 0 0-48c0-35.3-28.7-64-64-64l-32 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32-128 0 0-32c0-17.7-14.3-32-32-32zM0 224L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192-448 0z"]},vt={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144,62470,"user-alt","user-large"],"f007","M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"]},_t={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"]},bt={prefix:"fas",iconName:"tag",icon:[512,512,[127991],"f02b","M32.5 96l0 149.5c0 17 6.7 33.3 18.7 45.3l192 192c25 25 65.5 25 90.5 0L483.2 333.3c25-25 25-65.5 0-90.5l-192-192C279.2 38.7 263 32 246 32L96.5 32c-35.3 0-64 28.7-64 64zm112 16a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},At={prefix:"fas",iconName:"briefcase",icon:[512,512,[128188],"f0b1","M200 48l112 0c4.4 0 8 3.6 8 8l0 40-128 0 0-40c0-4.4 3.6-8 8-8zm-56 8l0 40-80 0C28.7 96 0 124.7 0 160l0 96 512 0 0-96c0-35.3-28.7-64-64-64l-80 0 0-40c0-30.9-25.1-56-56-56L200 0c-30.9 0-56 25.1-56 56zM512 304l-192 0 0 16c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-16-192 0 0 112c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-112z"]},xt=Object.defineProperty,wt=Object.getOwnPropertyDescriptor,q=(r,e,t,i)=>{for(var s=i>1?void 0:i?wt(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&xt(e,t,s),s};const Et=[{label:"Manager",title:"Maria Thompson",icon:"user",highlight:!0},{label:"Location",title:"Dallas Distribution Center, Building C",icon:"map-pin"},{label:"Work phone",title:"+1 (214) 555-0182",icon:"phone"},{label:"Job Title",title:"Forklift Operator",icon:"briefcase"},{label:"Work Schedule",title:"Mon-Fri, 6:00 AM – 2:30 PM",icon:"calendar"},{label:"Department",title:"Warehouse Operations",icon:"building"},{label:"Email",title:"james.davis@nova.com",icon:"envelope",highlight:!0},{label:"Nickname",title:"JD",icon:"tag"}];$.EmployeeDetailsWidget=class extends O{constructor(){super(),this.headerTitle="Employee details",this.fields=[],this.columns=2,this.fields=[...Et]}getIconFromString(e){const t={user:vt,"map-pin":ft,phone:_t,briefcase:At,calendar:yt,building:gt,envelope:mt,tag:bt,mobile:$t},i=t[e];return i||(console.warn(`[employee-details-widget] Unknown icon "${e}", defaulting to "user".`),t.user)}render(){const e=this.fields.map(t=>{const i=this.getIconFromString(t.icon);return{...t,iconTemplate:Ce(i,"icon icon-sm text-primary")}});return E`
      <section role="region" aria-label=${this.headerTitle}>
        <field-list-widget
          .fields=${e}
          .columns=${this.columns}
        ></field-list-widget>
      </section>
    `}},$.EmployeeDetailsWidget.styles=[Oe,Pe,Te,Me,dt,ze,_`
      :host {
        display: block;
      }

      /* .details-card {
        background: var(--color-surface, #ffffff);
        border: 1px solid var(--color-border, #e5e7eb);
        border-radius: var(--radius-lg, 16px);
        box-shadow: var(--shadow-card, 0 12px 30px rgba(17, 24, 39, 0.08));
        padding: var(--space-5, 20px);
      }

      .card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: var(--space-4, 16px);
      }

      .title {
        font-size: var(--font-size-lg, 1.125rem);
        font-weight: var(--font-weight-semibold, 600);
        color: var(--color-text, #111827);
      }
      */
    `],q([k({type:String})],$.EmployeeDetailsWidget.prototype,"headerTitle",2),q([k({type:Array})],$.EmployeeDetailsWidget.prototype,"fields",2),q([k({type:Number})],$.EmployeeDetailsWidget.prototype,"columns",2),$.EmployeeDetailsWidget=q([xe("employee-details-widget")],$.EmployeeDetailsWidget),Object.defineProperty($,Symbol.toStringTag,{value:"Module"})});
