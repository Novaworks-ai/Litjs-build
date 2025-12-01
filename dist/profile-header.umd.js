(function(u,b){typeof exports=="object"&&typeof module<"u"?b(exports):typeof define=="function"&&define.amd?define(["exports"],b):(u=typeof globalThis<"u"?globalThis:u||self,b(u.ProfileHeader={}))})(this,(function(u){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=globalThis,q=b.ShadowRoot&&(b.ShadyCSS===void 0||b.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),X=new WeakMap;let Y=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(q&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=X.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&X.set(t,e))}return e}toString(){return this.cssText}};const fe=r=>new Y(typeof r=="string"?r:r+"",void 0,W),k=(r,...e)=>{const t=r.length===1?r[0]:e.reduce(((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1]),r[0]);return new Y(t,r,W)},me=(r,e)=>{if(q)r.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const t of e){const s=document.createElement("style"),i=b.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},ee=q?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return fe(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ge,defineProperty:$e,getOwnPropertyDescriptor:ve,getOwnPropertyNames:be,getOwnPropertySymbols:ye,getPrototypeOf:_e}=Object,R=globalThis,te=R.trustedTypes,Ae=te?te.emptyScript:"",we=R.reactiveElementPolyfillSupport,T=(r,e)=>r,j={toAttribute(r,e){switch(e){case Boolean:r=r?Ae:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},V=(r,e)=>!ge(r,e),se={attribute:!0,type:String,converter:j,reflect:!1,useDefault:!1,hasChanged:V};Symbol.metadata??=Symbol("metadata"),R.litPropertyMetadata??=new WeakMap;let S=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=se){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&$e(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:o}=ve(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:i,set(n){const l=i?.call(this);o?.call(this,n),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??se}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;const e=_e(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){const t=this.properties,s=[...be(t),...ye(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(ee(i))}else e!==void 0&&t.push(ee(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return me(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const o=(s.converter?.toAttribute!==void 0?s.converter:j).toAttribute(t,s.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:j;this._$Em=i;const l=n.fromAttribute(t,o.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(e,t,s){if(e!==void 0){const i=this.constructor,o=this[e];if(s??=i.getPropertyOptions(e),!((s.hasChanged??V)(o,t)||s.useDefault&&s.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),o!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,o]of s){const{wrapped:n}=o,l=this[i];n!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,o,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((s=>s.hostUpdate?.())),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[T("elementProperties")]=new Map,S[T("finalized")]=new Map,we?.({ReactiveElement:S}),(R.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=globalThis,D=J.trustedTypes,ie=D?D.createPolicy("lit-html",{createHTML:r=>r}):void 0,re="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,oe="?"+y,xe=`<${oe}>`,A=document,I=()=>A.createComment(""),M=r=>r===null||typeof r!="object"&&typeof r!="function",G=Array.isArray,Ee=r=>G(r)||typeof r?.[Symbol.iterator]=="function",K=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ne=/-->/g,ae=/>/g,w=RegExp(`>|${K}(?:([^\\s"'>=/]+)(${K}*=${K}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),le=/'/g,he=/"/g,ce=/^(?:script|style|textarea|title)$/i,Se=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),g=Se(1),P=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),de=new WeakMap,x=A.createTreeWalker(A,129);function pe(r,e){if(!G(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ie!==void 0?ie.createHTML(e):e}const Pe=(r,e)=>{const t=r.length-1,s=[];let i,o=e===2?"<svg>":e===3?"<math>":"",n=U;for(let l=0;l<t;l++){const a=r[l];let d,p,h=-1,v=0;for(;v<a.length&&(n.lastIndex=v,p=n.exec(a),p!==null);)v=n.lastIndex,n===U?p[1]==="!--"?n=ne:p[1]!==void 0?n=ae:p[2]!==void 0?(ce.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=w):p[3]!==void 0&&(n=w):n===w?p[0]===">"?(n=i??U,h=-1):p[1]===void 0?h=-2:(h=n.lastIndex-p[2].length,d=p[1],n=p[3]===void 0?w:p[3]==='"'?he:le):n===he||n===le?n=w:n===ne||n===ae?n=U:(n=w,i=void 0);const _=n===w&&r[l+1].startsWith("/>")?" ":"";o+=n===U?a+xe:h>=0?(s.push(d),a.slice(0,h)+re+a.slice(h)+y+_):a+y+(h===-2?l:_)}return[pe(r,o+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class H{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let o=0,n=0;const l=e.length-1,a=this.parts,[d,p]=Pe(e,t);if(this.el=H.createElement(d,s),x.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=x.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(re)){const v=p[n++],_=i.getAttribute(h).split(y),F=/([.?@])?(.*)/.exec(v);a.push({type:1,index:o,name:F[2],strings:_,ctor:F[1]==="."?Oe:F[1]==="?"?Te:F[1]==="@"?Ie:L}),i.removeAttribute(h)}else h.startsWith(y)&&(a.push({type:6,index:o}),i.removeAttribute(h));if(ce.test(i.tagName)){const h=i.textContent.split(y),v=h.length-1;if(v>0){i.textContent=D?D.emptyScript:"";for(let _=0;_<v;_++)i.append(h[_],I()),x.nextNode(),a.push({type:2,index:++o});i.append(h[v],I())}}}else if(i.nodeType===8)if(i.data===oe)a.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(y,h+1))!==-1;)a.push({type:7,index:o}),h+=y.length-1}o++}}static createElement(e,t){const s=A.createElement("template");return s.innerHTML=e,s}}function C(r,e,t=r,s){if(e===P)return e;let i=s!==void 0?t._$Co?.[s]:t._$Cl;const o=M(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,t,s)),s!==void 0?(t._$Co??=[])[s]=i:t._$Cl=i),i!==void 0&&(e=C(r,i._$AS(r,e.values),i,s)),e}class Ce{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??A).importNode(t,!0);x.currentNode=i;let o=x.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new z(o,o.nextSibling,this,e):a.type===1?d=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(d=new Me(o,this,e)),this._$AV.push(d),a=s[++l]}n!==a?.index&&(o=x.nextNode(),n++)}return x.currentNode=A,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=C(this,e,t),M(e)?e===c||e==null||e===""?(this._$AH!==c&&this._$AR(),this._$AH=c):e!==this._$AH&&e!==P&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ee(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==c&&M(this._$AH)?this._$AA.nextSibling.data=e:this.T(A.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=H.createElement(pe(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{const o=new Ce(i,this),n=o.u(this.options);o.p(t),this.T(n),this._$AH=o}}_$AC(e){let t=de.get(e.strings);return t===void 0&&de.set(e.strings,t=new H(e)),t}k(e){G(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const o of e)i===t.length?t.push(s=new z(this.O(I()),this.O(I()),this,this.options)):s=t[i],s._$AI(o),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class L{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,o){this.type=1,this._$AH=c,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=c}_$AI(e,t=this,s,i){const o=this.strings;let n=!1;if(o===void 0)e=C(this,e,t,0),n=!M(e)||e!==this._$AH&&e!==P,n&&(this._$AH=e);else{const l=e;let a,d;for(e=o[0],a=0;a<o.length-1;a++)d=C(this,l[s+a],t,a),d===P&&(d=this._$AH[a]),n||=!M(d)||d!==this._$AH[a],d===c?e=c:e!==c&&(e+=(d??"")+o[a+1]),this._$AH[a]=d}n&&!i&&this.j(e)}j(e){e===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Oe extends L{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===c?void 0:e}}class Te extends L{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==c)}}class Ie extends L{constructor(e,t,s,i,o){super(e,t,s,i,o),this.type=5}_$AI(e,t=this){if((e=C(this,e,t,0)??c)===P)return;const s=this._$AH,i=e===c&&s!==c||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==c&&(s===c||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Me{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){C(this,e)}}const Ue=J.litHtmlPolyfillSupport;Ue?.(H,z),(J.litHtmlVersions??=[]).push("3.3.1");const He=(r,e,t)=>{const s=t?.renderBefore??e;let i=s._$litPart$;if(i===void 0){const o=t?.renderBefore??null;s._$litPart$=i=new z(e.insertBefore(I(),o),o,void 0,t??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=globalThis;class m extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=He(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return P}}m._$litElement$=!0,m.finalized=!0,Z.litElementHydrateSupport?.({LitElement:m});const ze=Z.litElementPolyfillSupport;ze?.({LitElement:m}),(Z.litElementVersions??=[]).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q=r=>(e,t)=>{t!==void 0?t.addInitializer((()=>{customElements.define(r,e)})):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ne={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:V},ke=(r=Ne,e,t)=>{const{kind:s,metadata:i}=t;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(t.name,r),s==="accessor"){const{name:n}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(n,a,r)},init(l){return l!==void 0&&this.C(n,void 0,r,l),l}}}if(s==="setter"){const{name:n}=t;return function(l){const a=this[n];e.call(this,l),this.requestUpdate(n,a,r)}}throw Error("Unsupported decorator location: "+s)};function f(r){return(e,t)=>typeof t=="object"?ke(r,e,t):((s,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ue(r){return f({...r,state:!0,attribute:!1})}const Re=k`
  /* 1. GLOBAL DEFAULTS (Applied to everyone) */
  :host {
    /* UPDATED: Shortened names to match your new component */
    --size: 44px; 
    --font: 0.875rem;
    --bg: #e0e0e0;
    --color: #374151;
    --border: none;
    --radius: 50%;
  }

  /* 2. PURPLE THEME */
  :host([theme="purple"]) {
    --bg: linear-gradient(135deg, #8a2be2 0%, #9370db 100%);
    --color: white;
    --border: 2px solid #8a2be2;
  }

  /* 3. FOREST THEME */
  :host([theme="forest"]) {
    --bg: linear-gradient(135deg, #134e5e 0%, #71b280 100%);
    --color: #ffffff;
    --border: 2px solid #71b280;
  }

  /* 4. DARK THEME */
  :host([theme="dark"]) {
    --bg: #1f2937;
    --color: #f3f4f6;
    --border: 1px solid #374151;
  }
`;var je=Object.defineProperty,De=Object.getOwnPropertyDescriptor,E=(r,e,t,s)=>{for(var i=s>1?void 0:s?De(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&je(e,t,i),i};let $=class extends m{constructor(){super(...arguments),this.image="",this.name="",this.theme="default",this.size="md",this.shape="circle",this._error=!1}get initials(){if(!this.name)return"--";const r=this.name.trim().split(/\s+/);return(r.length>1?r[0][0]+r[1][0]:r[0].slice(0,2)).toUpperCase()}render(){const r=this.image&&!this._error;return g`
      <div title="${this.name}" class="avatar">
        ${r?g`<img class="avatar" src="${this.image}" alt="${this.name}" @error="${()=>this._error=!0}">`:this.initials}
      </div>
    `}};$.styles=[Re,k`
      :host { display: inline-block; line-height: 0; }
      
      /* Size Overrides (Cleaner Syntax) */
      :host([size="sm"]) { --size: 32px; --font: 0.75rem; }
      :host([size="lg"]) { --size: 64px; --font: 1.25rem; }
      :host([size="xl"]) { --size: 96px; --font: 2rem; }

      /* Shape Overrides */
      :host([shape="square"])  { --radius: 0; }
      :host([shape="rounded"]) { --radius: 8px; }

      .avatar {
        width: var(--size);
        height: var(--size);
        border-radius: var(--radius);
        background: var(--bg);
        color: var(--color);
        border: var(--border);
        
        /* Flexbox for Initials */
        display: flex;
        align-items: center;
        justify-content: center;
        
        /* Font & Image props */
        font-weight: 600;
        font-size: var(--font);
        object-fit: cover;
        box-sizing: border-box;
        user-select: none;
      }
    `],E([f({type:String})],$.prototype,"image",2),E([f({type:String})],$.prototype,"name",2),E([f({reflect:!0})],$.prototype,"theme",2),E([f({reflect:!0})],$.prototype,"size",2),E([f({reflect:!0})],$.prototype,"shape",2),E([ue()],$.prototype,"_error",2),$=E([Q("user-avatar-new")],$),typeof globalThis<"u"&&(globalThis.MyElement=globalThis.MyElement||{},globalThis.MyElement.LitElement=m);var Le=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,B=(r,e,t,s)=>{for(var i=s>1?void 0:s?Be(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&Le(e,t,i),i};let O=class extends m{constructor(){super(...arguments),this.items="",this.activeItemId="",this.parsed=[],this._clickListenerAttached=!1}willUpdate(r){r.has("items")&&this.parseItems()}parseItems(){if(!this.items){this.parsed=[];return}try{const r=JSON.parse(this.items);this.parsed=r.map(e=>({type:e.type||"tab",label:e.label||"",itemId:e.itemId||"",children:e.children||[]})),!this.activeItemId&&this.parsed.length>0&&this.parsed[0].type!=="dropdown"&&(this.activeItemId=this.parsed[0].itemId||"")}catch(r){console.warn("Invalid JSON",r),this.parsed=[]}}onSelect(r){if(r.type==="dropdown")return;this.activeItemId=r.itemId||"",this.dispatchEvent(new CustomEvent("nav-select",{detail:{item:r},bubbles:!0,composed:!0})),this.shadowRoot.querySelectorAll(".menu.open").forEach(t=>t.classList.remove("open"))}toggleDropdown(r,e){r.stopPropagation(),this.shadowRoot.querySelectorAll(".menu").forEach((s,i)=>{i===e?s.classList.toggle("open"):s.classList.remove("open")}),this._clickListenerAttached||(window.addEventListener("click",()=>{this.shadowRoot.querySelectorAll(".menu.open").forEach(i=>i.classList.remove("open"))}),this._clickListenerAttached=!0)}renderItem(r,e){const t=this.activeItemId===r.itemId;if(r.type==="dropdown"){const s=r.children&&r.children.length>0;return g`
        <div class="dropdown">
          <div class="item" @click=${i=>this.toggleDropdown(i,e)}>
            ${r.label} ▾
          </div>
          <div class="menu" @click=${i=>i.stopPropagation()}>
             ${s?r.children.map(i=>g`
                   <div class="menu-item-link" @click=${()=>this.onSelect(i)}>
                     ${i.label}
                   </div>
                 `):g`<div style="padding:10px 16px; color:#999;">No items</div>`}
          </div>
        </div>
      `}return g`
        <div class="item ${t?"active":""}" @click=${()=>this.onSelect(r)}>
            ${r.label}
        </div>
    `}render(){return g`
      <nav>
        ${this.parsed.map((r,e)=>this.renderItem(r,e))}
      </nav>
    `}};O.styles=k`
    :host { display: block; width: 100%; }
    
    nav { 
      display: flex; 
      gap: 32px; 
      align-items: center;
      /* Scroll Logic for Mobile */
      overflow-x: auto;
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE 10+ */
      padding-bottom: 2px; /* Prevent scrollbar clipping underline */
    }
    
    /* Hide scrollbar for Chrome/Safari/Edge */
    nav::-webkit-scrollbar { 
      display: none; 
    }
    
    .item { 
        cursor: pointer; 
        color: var(--nav-color, #5f6368); 
        padding: 12px 4px; 
        font-weight: 500;
        font-size: 0.95rem;
        position: relative;
        transition: color 0.2s;
        white-space: nowrap; /* Prevent line breaks on mobile */
        flex-shrink: 0; /* Prevent squishing on mobile */
    }
    
    .item.active { 
        color: var(--accent, #9c27b0); 
    }
    
    .item.active::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: var(--accent, #9c27b0);
        border-radius: 3px 3px 0 0;
    }
    
    .item:hover { color: var(--accent, #9c27b0); }

    .dropdown { position: relative; }

    .menu { 
        position: absolute; 
        top: 100%; 
        left: 0; 
        background: white; 
        box-shadow: 0 4px 20px rgba(0,0,0,0.15); 
        border: 1px solid rgba(0,0,0,0.05);
        border-radius: 8px; 
        padding: 8px 0; 
        display: none; 
        min-width: 180px; 
        z-index: 100;
        margin-top: 8px;
    }

    .menu.open { display: block; }

    /* Adjust dropdown for small screens so it doesn't overflow right side */
    @media (max-width: 600px) {
        /* Reduce gap for mobile to fit more items */
        nav { gap: 20px; }
        
        /* If a dropdown is the last item, align it to the right */
        .dropdown:last-child .menu {
            left: auto;
            right: 0;
        }
    }

    .menu-item-link {
        display: block;
        padding: 10px 16px;
        color: #333;
        text-decoration: none;
        cursor: pointer;
        font-size: 0.9rem;
    }
    .menu-item-link:hover {
        background-color: #f5f5f5;
        color: var(--accent, #9c27b0);
    }
  `,B([f({type:String})],O.prototype,"items",2),B([f({type:String})],O.prototype,"activeItemId",2),B([ue()],O.prototype,"parsed",2),O=B([Q("profile-nav")],O),typeof globalThis<"u"&&(globalThis.MyElement=globalThis.MyElement||{},globalThis.MyElement.LitElement=m);var Fe=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,N=(r,e,t,s)=>{for(var i=s>1?void 0:s?qe(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&Fe(e,t,i),i};u.ProfileHeader=class extends m{constructor(){super(...arguments),this.showOrg=!0,this.userData=null,this.navItems=[],this.activeTabId=""}render(){const e=this.userData?.name||"Loading...",t=this.userData?.title||"",s=this.userData?.location||"",i=this.userData?.image||"",o=this.navItems.map(l=>({itemId:l.id,label:l.label,type:l.type,children:l.children})),n=JSON.stringify(o);return g`
      <header class="hero">
        <div class="container">
          <div class="avatar-wrapper">
             <user-avatar-new 
                .image="${i}" 
                .name="${e}">
             </user-avatar-new>
          </div>
          
          <div class="meta">
            <div class="header-top">
              <div class="info">
                <div class="name">${e}</div>
                <div class="job-title">${t}</div>
                <div class="location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="opacity:0.5">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>${s}</span>
                </div>
              </div>
              
              <div class="actions">
                ${this.showOrg?g`<button class="org-btn" @click=${this.onOrgClick}>View org chart</button>`:null}
              </div>
            </div>
          </div>
        </div>

        <div class="nav-wrap">
          <profile-nav 
            .items="${n}"
            .activeItemId="${this.activeTabId}"
            @nav-select="${this.handleNavSelect}">
          </profile-nav>
        </div>
      </header>
    `}handleNavSelect(e){const t=e.detail.item;this.activeTabId=t.itemId,this.dispatchEvent(new CustomEvent("header-tab-changed",{detail:{id:t.itemId,type:t.type,label:t.label},bubbles:!0,composed:!0}))}onOrgClick(){this.dispatchEvent(new CustomEvent("view-org",{bubbles:!0,composed:!0}))}},u.ProfileHeader.styles=k`
    :host { 
      display: block; 
      font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; 
    }
    
    .hero { 
      padding: 32px 32px 0 32px; 
      border-radius: 12px 12px 0 0; 
      color: var(--header-fore, #2a2a2a); 
      background: linear-gradient(90deg, #FDF0FF 0%, #FFF5EB 100%);
    }

    .container { 
      display: flex; 
      gap: 24px; 
      align-items: center; 
      margin-bottom: 24px;
      /* Allow wrapping if the screen is extremely small */
      flex-wrap: nowrap; 
    }

    .avatar-wrapper {
      flex: 0 0 auto;
      border-radius: 50%;
      border: 5px solid white; 
      box-shadow: 0 2px 10px rgba(0,0,0,0.05); 
      background: white;
      line-height: 0;
    }

    user-avatar-new {
      --size: 100px; 
      --font: 2.5rem; 
      display: block; 
      --radius: 50%;
    }

    .meta { 
      flex: 1; 
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-width: 0; /* Important for text truncation in flex containers */
    }

    .header-top {
      display: flex;
      justify-content: space-between;
      align-items: center; 
      width: 100%;
      gap: 16px; /* Ensure space between info and button */
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 4px; 
    }

    .name { 
      font-size: 1.75rem; 
      font-weight: 700; 
      color: #111;
      line-height: 1.2;
    }

    .job-title { 
      color: var(--accent, #9c27b0); 
      font-weight: 600;
      font-size: 1rem;
    }

    .location {
      color: #666;
      font-size: 0.95rem;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .actions { 
      flex: 0 0 auto;
    }

    .org-btn { 
      background: transparent; 
      border: 1px solid var(--accent, #9c27b0); 
      padding: 9px 24px; 
      border-radius: 50px; 
      color: var(--accent, #9c27b0); 
      cursor: pointer;
      font-weight: 600;
      font-size: 0.9rem;
      transition: all 0.2s ease-in-out;
      white-space: nowrap;
    }

    .org-btn:hover {
      background: rgba(156, 39, 176, 0.05);
    }

    .nav-wrap { 
      margin-top: 8px;
    }

    /* --- RESPONSIVE LOGIC --- */
    
    /* Scenario 1: Tablet/Intermediate Widths (max-width: 850px)
       The button starts hitting the text. We move the button below the text,
       but keep the avatar on the left.
    */
    @media (max-width: 850px) {
      .header-top {
        flex-direction: column; 
        align-items: flex-start; /* Align text and button to the left */
        gap: 12px;
      }
      
      .actions {
        margin-top: 4px; /* Give button breathing room */
      }
    }

    /* Scenario 2: Mobile Widths (max-width: 576px)
       Full stack: Avatar Top Center, Text Center, Button Center.
    */
    @media (max-width: 576px) {
      .hero {
        padding: 24px 20px 0 20px;
      }

      .container {
        flex-direction: column;
        text-align: center;
        gap: 16px;
      }

      .header-top {
        align-items: center; /* Center align text and button */
      }
      
      .info {
        align-items: center; /* Center the internal text items */
      }

      .location {
        justify-content: center;
      }

      /* Adjust Avatar Size for Mobile */
      user-avatar-new {
        --size: 80px; 
        --font: 2rem;
      }
      
      .name { 
        font-size: 1.5rem; 
      }
      
      .org-btn {
        width: 100%; /* Make button full width for easier tapping */
        max-width: 200px;
        display: flex;
        justify-content: center;
      }
    }
  `,N([f({type:Boolean})],u.ProfileHeader.prototype,"showOrg",2),N([f({type:Object})],u.ProfileHeader.prototype,"userData",2),N([f({type:Array})],u.ProfileHeader.prototype,"navItems",2),N([f({type:String})],u.ProfileHeader.prototype,"activeTabId",2),u.ProfileHeader=N([Q("profile-header")],u.ProfileHeader),typeof globalThis<"u"&&(globalThis.MyElement=globalThis.MyElement||{},globalThis.MyElement.LitElement=m),Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})}));
