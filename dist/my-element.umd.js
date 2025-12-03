(function(u,$){typeof exports=="object"&&typeof module<"u"?$(exports):typeof define=="function"&&define.amd?define(["exports"],$):(u=typeof globalThis<"u"?globalThis:u||self,$(u.MyElement={}))})(this,(function(u){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=globalThis,R=$.ShadowRoot&&($.ShadyCSS===void 0||$.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,z=Symbol(),q=new WeakMap;let W=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(R&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&q.set(e,t))}return t}toString(){return this.cssText}};const nt=o=>new W(typeof o=="string"?o:o+"",void 0,z),ht=(o,...t)=>{const e=o.length===1?o[0]:t.reduce(((s,i,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[r+1]),o[0]);return new W(e,o,z)},lt=(o,t)=>{if(R)o.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const s=document.createElement("style"),i=$.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)}},J=R?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return nt(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:at,defineProperty:ct,getOwnPropertyDescriptor:dt,getOwnPropertyNames:pt,getOwnPropertySymbols:ut,getPrototypeOf:ft}=Object,U=globalThis,K=U.trustedTypes,$t=K?K.emptyScript:"",mt=U.reactiveElementPolyfillSupport,w=(o,t)=>o,T={toAttribute(o,t){switch(t){case Boolean:o=o?$t:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},j=(o,t)=>!at(o,t),Z={attribute:!0,type:String,converter:T,reflect:!1,useDefault:!1,hasChanged:j};Symbol.metadata??=Symbol("metadata"),U.litPropertyMetadata??=new WeakMap;let v=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Z){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&ct(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=dt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){const l=i?.call(this);r?.call(this,n),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Z}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const t=ft(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const e=this.properties,s=[...pt(e),...ut(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(J(i))}else t!==void 0&&e.push(J(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return lt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const r=(s.converter?.toAttribute!==void 0?s.converter:T).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const r=s.getPropertyOptions(i),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:T;this._$Em=i;const l=n.fromAttribute(e,r.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){const i=this.constructor,r=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??j)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),r!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,r]of s){const{wrapped:n}=r,l=this[i];n!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,r,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((s=>s.hostUpdate?.())),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[w("elementProperties")]=new Map,v[w("finalized")]=new Map,mt?.({ReactiveElement:v}),(U.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=globalThis,D=L.trustedTypes,G=D?D.createPolicy("lit-html",{createHTML:o=>o}):void 0,Q="$lit$",m=`lit$${Math.random().toFixed(9).slice(2)}$`,X="?"+m,_t=`<${X}>`,g=document,x=()=>g.createComment(""),P=o=>o===null||typeof o!="object"&&typeof o!="function",I=Array.isArray,gt=o=>I(o)||typeof o?.[Symbol.iterator]=="function",F=`[ 	
\f\r]`,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Y=/-->/g,tt=/>/g,b=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),et=/'/g,st=/"/g,it=/^(?:script|style|textarea|title)$/i,bt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),yt=bt(1),E=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),ot=new WeakMap,y=g.createTreeWalker(g,129);function rt(o,t){if(!I(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return G!==void 0?G.createHTML(t):t}const At=(o,t)=>{const e=o.length-1,s=[];let i,r=t===2?"<svg>":t===3?"<math>":"",n=C;for(let l=0;l<e;l++){const h=o[l];let d,p,a=-1,f=0;for(;f<h.length&&(n.lastIndex=f,p=n.exec(h),p!==null);)f=n.lastIndex,n===C?p[1]==="!--"?n=Y:p[1]!==void 0?n=tt:p[2]!==void 0?(it.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=b):p[3]!==void 0&&(n=b):n===b?p[0]===">"?(n=i??C,a=-1):p[1]===void 0?a=-2:(a=n.lastIndex-p[2].length,d=p[1],n=p[3]===void 0?b:p[3]==='"'?st:et):n===st||n===et?n=b:n===Y||n===tt?n=C:(n=b,i=void 0);const _=n===b&&o[l+1].startsWith("/>")?" ":"";r+=n===C?h+_t:a>=0?(s.push(d),h.slice(0,a)+Q+h.slice(a)+m+_):h+m+(a===-2?l:_)}return[rt(o,r+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class M{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const l=t.length-1,h=this.parts,[d,p]=At(t,e);if(this.el=M.createElement(d,s),y.currentNode=this.el.content,e===2||e===3){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(i=y.nextNode())!==null&&h.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const a of i.getAttributeNames())if(a.endsWith(Q)){const f=p[n++],_=i.getAttribute(a).split(m),N=/([.?@])?(.*)/.exec(f);h.push({type:1,index:r,name:N[2],strings:_,ctor:N[1]==="."?Et:N[1]==="?"?St:N[1]==="@"?wt:H}),i.removeAttribute(a)}else a.startsWith(m)&&(h.push({type:6,index:r}),i.removeAttribute(a));if(it.test(i.tagName)){const a=i.textContent.split(m),f=a.length-1;if(f>0){i.textContent=D?D.emptyScript:"";for(let _=0;_<f;_++)i.append(a[_],x()),y.nextNode(),h.push({type:2,index:++r});i.append(a[f],x())}}}else if(i.nodeType===8)if(i.data===X)h.push({type:2,index:r});else{let a=-1;for(;(a=i.data.indexOf(m,a+1))!==-1;)h.push({type:7,index:r}),a+=m.length-1}r++}}static createElement(t,e){const s=g.createElement("template");return s.innerHTML=t,s}}function S(o,t,e=o,s){if(t===E)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl;const r=P(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(o),i._$AT(o,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=S(o,i._$AS(o,t.values),i,s)),t}class vt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??g).importNode(e,!0);y.currentNode=i;let r=y.nextNode(),n=0,l=0,h=s[0];for(;h!==void 0;){if(n===h.index){let d;h.type===2?d=new O(r,r.nextSibling,this,t):h.type===1?d=new h.ctor(r,h.name,h.strings,this,t):h.type===6&&(d=new xt(r,this,t)),this._$AV.push(d),h=s[++l]}n!==h?.index&&(r=y.nextNode(),n++)}return y.currentNode=g,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class O{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),P(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):gt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==c&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(g.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=M.createElement(rt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const r=new vt(i,this),n=r.u(this.options);r.p(e),this.T(n),this._$AH=r}}_$AC(t){let e=ot.get(t.strings);return e===void 0&&ot.set(t.strings,e=new M(t)),e}k(t){I(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new O(this.O(x()),this.O(x()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=c}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(r===void 0)t=S(this,t,e,0),n=!P(t)||t!==this._$AH&&t!==E,n&&(this._$AH=t);else{const l=t;let h,d;for(t=r[0],h=0;h<r.length-1;h++)d=S(this,l[s+h],e,h),d===E&&(d=this._$AH[h]),n||=!P(d)||d!==this._$AH[h],d===c?t=c:t!==c&&(t+=(d??"")+r[h+1]),this._$AH[h]=d}n&&!i&&this.j(t)}j(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Et extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===c?void 0:t}}class St extends H{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==c)}}class wt extends H{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=S(this,t,e,0)??c)===E)return;const s=this._$AH,i=t===c&&s!==c||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==c&&(s===c||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class xt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const Pt=L.litHtmlPolyfillSupport;Pt?.(M,O),(L.litHtmlVersions??=[]).push("3.3.1");const Ct=(o,t,e)=>{const s=e?.renderBefore??t;let i=s._$litPart$;if(i===void 0){const r=e?.renderBefore??null;s._$litPart$=i=new O(t.insertBefore(x(),r),r,void 0,e??{})}return i._$AI(o),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=globalThis;class A extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ct(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return E}}A._$litElement$=!0,A.finalized=!0,V.litElementHydrateSupport?.({LitElement:A});const Mt=V.litElementPolyfillSupport;Mt?.({LitElement:A}),(V.litElementVersions??=[]).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=o=>(t,e)=>{e!==void 0?e.addInitializer((()=>{customElements.define(o,t)})):customElements.define(o,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ut={attribute:!0,type:String,converter:T,reflect:!1,hasChanged:j},Tt=(o=Ut,t,e)=>{const{kind:s,metadata:i}=e;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),s==="setter"&&((o=Object.create(o)).wrapped=!0),r.set(e.name,o),s==="accessor"){const{name:n}=e;return{set(l){const h=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,h,o)},init(l){return l!==void 0&&this.C(n,void 0,o,l),l}}}if(s==="setter"){const{name:n}=e;return function(l){const h=this[n];t.call(this,l),this.requestUpdate(n,h,o)}}throw Error("Unsupported decorator location: "+s)};function B(o){return(t,e)=>typeof e=="object"?Tt(o,t,e):((s,i,r)=>{const n=i.hasOwnProperty(r);return i.constructor.createProperty(r,s),n?Object.getOwnPropertyDescriptor(i,r):void 0})(o,t,e)}var Dt=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,k=(o,t,e,s)=>{for(var i=s>1?void 0:s?Ht(t,e):t,r=o.length-1,n;r>=0;r--)(n=o[r])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Dt(t,e,i),i};u.MyElement=class extends A{constructor(){super(...arguments),this.shortDescriptionPlaceholder="",this.fullDescriptionPlaceholder="",this.buttonLabel="Submit",this.shortDescriptionValue="",this.fullDescriptionValue=""}render(){return yt`
      <div class="form-container">
        <div class="form-box">
          <input
            type="text"
            placeholder=${this.shortDescriptionPlaceholder}
            @input=${this.handleShortDescriptionInput}
            class="short-description-input"
          />
          <textarea
            placeholder=${this.fullDescriptionPlaceholder}
            @input=${this.handleFullDescriptionInput}
            class="full-description-textarea"
            rows="6"
          ></textarea>
          <div class="button-container">
            <button @click=${this.handleClick} class="submit-button">${this.buttonLabel}</button>
          </div>
        </div>
      </div>
    `}handleClick(){var t=this;this.dispatchEvent(new CustomEvent("handle-button-click",{detail:{shortDescription:t.shortDescriptionValue,fullDescription:t.fullDescriptionValue}}))}handleShortDescriptionInput(t){this.shortDescriptionValue=t.target.value}handleFullDescriptionInput(t){this.fullDescriptionValue=t.target.value}},u.MyElement.styles=ht`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      min-height: 100vh;
      background: linear-gradient(90deg, #FAF5FF 0%, #FDF2F8 50%, #FFF7ED 100%);
      padding: 2rem;
      margin: 0;
      box-sizing: border-box;
    }

    .form-container {
      width: 100%;
      max-width: 600px;
      display: flex;
      justify-content: center;
    }

    .form-box {
      background: white;
      border-radius: 10px;
      padding: 2rem;
      width: 100%;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .short-description-input {
      border-radius: 10px;
      border: 1px solid #d0d0d0;
      padding: 0.875em 1.25em;
      font-size: 1em;
      font-weight: 400;
      font-family: inherit;
      background-color: #f5f5f5;
      color: #333;
      width: 100%;
      box-sizing: border-box;
      transition: border-color 0.25s, background-color 0.25s;
    }

    .short-description-input:focus {
      outline: none;
      border-color: #7950F2;
      background-color: #ffffff;
    }

    .short-description-input::placeholder {
      color: #999;
    }

    .full-description-textarea {
      border-radius: 10px;
      border: 1px solid #d0d0d0;
      padding: 0.875em 1.25em;
      font-size: 1em;
      font-weight: 400;
      font-family: inherit;
      background-color: #f5f5f5;
      color: #333;
      width: 100%;
      box-sizing: border-box;
      resize: vertical;
      min-height: 120px;
      transition: border-color 0.25s, background-color 0.25s;
    }

    .full-description-textarea:focus {
      outline: none;
      border-color: #7950F2;
      background-color: #ffffff;
    }

    .full-description-textarea::placeholder {
      color: #999;
    }

    .button-container {
      display: flex;
      justify-content: center;
      margin-top: 0.5rem;
    }

    .submit-button {
      border-radius: 10px;
      border: 1px solid #d0d0d0;
      padding: 0.875em 2.5em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #f5f5f5;
      color: #333;
      cursor: pointer;
      transition: border-color 0.25s, background-color 0.25s;
      min-width: 120px;
    }

    .submit-button:hover {
      background-color: #e8e8e8;
      border-color: #b0b0b0;
    }

    .submit-button:active {
      background-color: #d8d8d8;
    }

    .submit-button:focus,
    .submit-button:focus-visible {
      outline: 2px solid #7950F2;
      outline-offset: 2px;
    }

    /* Responsive styles */
    @media (max-width: 768px) {
      :host {
        padding: 1.5rem;
      }

      .form-box {
        padding: 1.5rem;
      }
    }

    @media (max-width: 480px) {
      :host {
        padding: 1rem;
      }

      .form-box {
        padding: 1.25rem;
        gap: 1rem;
      }

      .short-description-input,
      .full-description-textarea {
        font-size: 0.9375em;
        padding: 0.75em 1em;
      }

      .submit-button {
        font-size: 0.9375em;
        padding: 0.75em 2em;
      }
    }

    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.lit:hover {
      filter: drop-shadow(0 0 2em #325cffaa);
    }

    .card {
      padding: 2em;
    }

    .read-the-docs {
      color: #888;
    }

    ::slotted(h1) {
      font-size: 3.2em;
      line-height: 1.1;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
    }
  `,k([B()],u.MyElement.prototype,"shortDescriptionPlaceholder",2),k([B()],u.MyElement.prototype,"fullDescriptionPlaceholder",2),k([B()],u.MyElement.prototype,"buttonLabel",2),u.MyElement=k([Ot("my-element")],u.MyElement),typeof globalThis<"u"&&(globalThis.MyElement=globalThis.MyElement||{},globalThis.MyElement.LitElement=A),u.LitElement=A,Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})}));
