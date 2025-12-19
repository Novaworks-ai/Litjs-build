(function(y,O){typeof exports=="object"&&typeof module<"u"?O(exports):typeof define=="function"&&define.amd?define(["exports"],O):(y=typeof globalThis<"u"?globalThis:y||self,O(y.ProfileDetails={}))})(this,(function(y){"use strict";const O=globalThis,bt=O.ShadowRoot&&(O.ShadyCSS===void 0||O.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vt=Symbol(),jt=new WeakMap;let Nt=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==vt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(bt&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=jt.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&jt.set(r,t))}return t}toString(){return this.cssText}};const ie=e=>new Nt(typeof e=="string"?e:e+"",void 0,vt),p=(e,...t)=>{const r=e.length===1?e[0]:t.reduce(((i,s,o)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[o+1]),e[0]);return new Nt(r,e,vt)},se=(e,t)=>{if(bt)e.adoptedStyleSheets=t.map((r=>r instanceof CSSStyleSheet?r:r.styleSheet));else for(const r of t){const i=document.createElement("style"),s=O.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=r.cssText,e.appendChild(i)}},Ut=bt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return ie(r)})(e):e;const{is:oe,defineProperty:ae,getOwnPropertyDescriptor:ne,getOwnPropertyNames:le,getOwnPropertySymbols:ce,getPrototypeOf:de}=Object,at=globalThis,It=at.trustedTypes,pe=It?It.emptyScript:"",he=at.reactiveElementPolyfillSupport,V=(e,t)=>e,nt={toAttribute(e,t){switch(t){case Boolean:e=e?pe:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},xt=(e,t)=>!oe(e,t),Lt={attribute:!0,type:String,converter:nt,reflect:!1,useDefault:!1,hasChanged:xt};Symbol.metadata??=Symbol("metadata"),at.litPropertyMetadata??=new WeakMap;let H=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Lt){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,r);s!==void 0&&ae(this.prototype,t,s)}}static getPropertyDescriptor(t,r,i){const{get:s,set:o}=ne(this.prototype,t)??{get(){return this[r]},set(a){this[r]=a}};return{get:s,set(a){const d=s?.call(this);o?.call(this,a),this.requestUpdate(t,d,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Lt}static _$Ei(){if(this.hasOwnProperty(V("elementProperties")))return;const t=de(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(V("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(V("properties"))){const r=this.properties,i=[...le(r),...ce(r)];for(const s of i)this.createProperty(s,r[s])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[i,s]of r)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const s=this._$Eu(r,i);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)r.unshift(Ut(s))}else t!==void 0&&r.push(Ut(t));return r}static _$Eu(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return se(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$ET(t,r){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const o=(i.converter?.toAttribute!==void 0?i.converter:nt).toAttribute(r,i.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,r){const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:nt;this._$Em=s;const d=a.fromAttribute(r,o.type);this[s]=d??this._$Ej?.get(s)??d,this._$Em=null}}requestUpdate(t,r,i){if(t!==void 0){const s=this.constructor,o=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??xt)(o,r)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:i,reflect:s,wrapped:o},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??r??this[t]),o!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(r=void 0),this._$AL.set(t,r)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,o]of i){const{wrapped:a}=o,d=this[s];a!==!0||this._$AL.has(s)||d===void 0||this.C(s,void 0,o,d)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach((i=>i.hostUpdate?.())),this.update(r)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach((r=>r.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((r=>this._$ET(r,this[r]))),this._$EM()}updated(t){}firstUpdated(t){}};H.elementStyles=[],H.shadowRootOptions={mode:"open"},H[V("elementProperties")]=new Map,H[V("finalized")]=new Map,he?.({ReactiveElement:H}),(at.reactiveElementVersions??=[]).push("2.1.1");const yt=globalThis,lt=yt.trustedTypes,Rt=lt?lt.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ht="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,Bt="?"+E,fe=`<${Bt}>`,j=document,Y=()=>j.createComment(""),K=e=>e===null||typeof e!="object"&&typeof e!="function",$t=Array.isArray,ue=e=>$t(e)||typeof e?.[Symbol.iterator]=="function",wt=`[ 	
\f\r]`,Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qt=/-->/g,Wt=/>/g,N=RegExp(`>|${wt}(?:([^\\s"'>=/]+)(${wt}*=${wt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ft=/'/g,Jt=/"/g,Vt=/^(?:script|style|textarea|title)$/i,me=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),l=me(1),S=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Yt=new WeakMap,U=j.createTreeWalker(j,129);function Kt(e,t){if(!$t(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Rt!==void 0?Rt.createHTML(t):t}const ge=(e,t)=>{const r=e.length-1,i=[];let s,o=t===2?"<svg>":t===3?"<math>":"",a=Z;for(let d=0;d<r;d++){const n=e[d];let u,b,c=-1,m=0;for(;m<n.length&&(a.lastIndex=m,b=a.exec(n),b!==null);)m=a.lastIndex,a===Z?b[1]==="!--"?a=qt:b[1]!==void 0?a=Wt:b[2]!==void 0?(Vt.test(b[2])&&(s=RegExp("</"+b[2],"g")),a=N):b[3]!==void 0&&(a=N):a===N?b[0]===">"?(a=s??Z,c=-1):b[1]===void 0?c=-2:(c=a.lastIndex-b[2].length,u=b[1],a=b[3]===void 0?N:b[3]==='"'?Jt:Ft):a===Jt||a===Ft?a=N:a===qt||a===Wt?a=Z:(a=N,s=void 0);const f=a===N&&e[d+1].startsWith("/>")?" ":"";o+=a===Z?n+fe:c>=0?(i.push(u),n.slice(0,c)+Ht+n.slice(c)+E+f):n+E+(c===-2?d:f)}return[Kt(e,o+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class G{constructor({strings:t,_$litType$:r},i){let s;this.parts=[];let o=0,a=0;const d=t.length-1,n=this.parts,[u,b]=ge(t,r);if(this.el=G.createElement(u,i),U.currentNode=this.el.content,r===2||r===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=U.nextNode())!==null&&n.length<d;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(Ht)){const m=b[a++],f=s.getAttribute(c).split(E),v=/([.?@])?(.*)/.exec(m);n.push({type:1,index:o,name:v[2],strings:f,ctor:v[1]==="."?ve:v[1]==="?"?xe:v[1]==="@"?ye:ct}),s.removeAttribute(c)}else c.startsWith(E)&&(n.push({type:6,index:o}),s.removeAttribute(c));if(Vt.test(s.tagName)){const c=s.textContent.split(E),m=c.length-1;if(m>0){s.textContent=lt?lt.emptyScript:"";for(let f=0;f<m;f++)s.append(c[f],Y()),U.nextNode(),n.push({type:2,index:++o});s.append(c[m],Y())}}}else if(s.nodeType===8)if(s.data===Bt)n.push({type:2,index:o});else{let c=-1;for(;(c=s.data.indexOf(E,c+1))!==-1;)n.push({type:7,index:o}),c+=E.length-1}o++}}static createElement(t,r){const i=j.createElement("template");return i.innerHTML=t,i}}function B(e,t,r=e,i){if(t===S)return t;let s=i!==void 0?r._$Co?.[i]:r._$Cl;const o=K(t)?void 0:t._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(e),s._$AT(e,r,i)),i!==void 0?(r._$Co??=[])[i]=s:r._$Cl=s),s!==void 0&&(t=B(e,s._$AS(e,t.values),s,i)),t}let be=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:i}=this._$AD,s=(t?.creationScope??j).importNode(r,!0);U.currentNode=s;let o=U.nextNode(),a=0,d=0,n=i[0];for(;n!==void 0;){if(a===n.index){let u;n.type===2?u=new q(o,o.nextSibling,this,t):n.type===1?u=new n.ctor(o,n.name,n.strings,this,t):n.type===6&&(u=new $e(o,this,t)),this._$AV.push(u),n=i[++d]}a!==n?.index&&(o=U.nextNode(),a++)}return U.currentNode=j,s}p(t){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}};class q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,i,s){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=B(this,t,r),K(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ue(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&K(this._$AH)?this._$AA.nextSibling.data=t:this.T(j.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=G.createElement(Kt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(r);else{const o=new be(s,this),a=o.u(this.options);o.p(r),this.T(a),this._$AH=o}}_$AC(t){let r=Yt.get(t.strings);return r===void 0&&Yt.set(t.strings,r=new G(t)),r}k(t){$t(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,s=0;for(const o of t)s===r.length?r.push(i=new q(this.O(Y()),this.O(Y()),this,this.options)):i=r[s],i._$AI(o),s++;s<r.length&&(this._$AR(i&&i._$AB.nextSibling,s),r.length=s)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class ct{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,i,s,o){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=r,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=g}_$AI(t,r=this,i,s){const o=this.strings;let a=!1;if(o===void 0)t=B(this,t,r,0),a=!K(t)||t!==this._$AH&&t!==S,a&&(this._$AH=t);else{const d=t;let n,u;for(t=o[0],n=0;n<o.length-1;n++)u=B(this,d[i+n],r,n),u===S&&(u=this._$AH[n]),a||=!K(u)||u!==this._$AH[n],u===g?t=g:t!==g&&(t+=(u??"")+o[n+1]),this._$AH[n]=u}a&&!s&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ve extends ct{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}}class xe extends ct{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}}class ye extends ct{constructor(t,r,i,s,o){super(t,r,i,s,o),this.type=5}_$AI(t,r=this){if((t=B(this,t,r,0)??g)===S)return;const i=this._$AH,s=t===g&&i!==g||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==g&&(i===g||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class $e{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}}const we={I:q},_e=yt.litHtmlPolyfillSupport;_e?.(G,q),(yt.litHtmlVersions??=[]).push("3.3.1");const Ae=(e,t,r)=>{const i=r?.renderBefore??t;let s=i._$litPart$;if(s===void 0){const o=r?.renderBefore??null;i._$litPart$=s=new q(t.insertBefore(Y(),o),o,void 0,r??{})}return s._$AI(e),s};const _t=globalThis;let x=class extends H{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ae(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return S}};x._$litElement$=!0,x.finalized=!0,_t.litElementHydrateSupport?.({LitElement:x});const Se=_t.litElementPolyfillSupport;Se?.({LitElement:x}),(_t.litElementVersions??=[]).push("4.2.1");const $=e=>(t,r)=>{r!==void 0?r.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)};const ke={attribute:!0,type:String,converter:nt,reflect:!1,hasChanged:xt},Ce=(e=ke,t,r)=>{const{kind:i,metadata:s}=r;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(r.name,e),i==="accessor"){const{name:a}=r;return{set(d){const n=t.get.call(this);t.set.call(this,d),this.requestUpdate(a,n,e)},init(d){return d!==void 0&&this.C(a,void 0,e,d),d}}}if(i==="setter"){const{name:a}=r;return function(d){const n=this[a];t.call(this,d),this.requestUpdate(a,n,e)}}throw Error("Unsupported decorator location: "+i)};function h(e){return(t,r)=>typeof r=="object"?Ce(e,t,r):((i,s,o)=>{const a=s.hasOwnProperty(o);return s.constructor.createProperty(o,i),a?Object.getOwnPropertyDescriptor(s,o):void 0})(e,t,r)}function I(e){return h({...e,state:!0,attribute:!1})}const w=p`
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
`,k=p`
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
`,_=p`
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
`,T=p`
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
`,C=p`
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
`,A=p`
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
`,W=p`
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
`,De=p`
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
`,ze=p`
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
`,Pe=p`
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
`;p`
  .pattern-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-2, 8px);
  }

  .pattern-heading-left {
    display: flex;
    align-items: center;
    gap: var(--space-2, 8px);
    color: var(--color-primary, #6d28d9);
    flex: 1;
  }

  .pattern-heading-title {
    margin: 0;
    font-size: var(--font-size-lg, 1.125rem);
    font-weight: var(--font-weight-semibold, 600);
    // color: var(--color-text, text-primary);
  }

  .pattern-heading-subtitle {
    margin: 0;
    font-size: var(--font-size-2xs, 0.7rem);
    color: var(--color-text-subtle, #6b7280);
  }

  .pattern-heading-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: rgba(109, 40, 217, 0.12);
    color: var(--color-primary, #6d28d9);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .pattern-heading-icon svg {
    width: 16px;
    height: 16px;
  }

  .pattern-heading-icon icon-element {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    color: inherit;
  }

  .pattern-heading-icon icon-element svg {
    width: 100%;
    height: 100%;
  }

  .pattern-icon-btn {
    background: transparent;
    border: none;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .pattern-icon-btn:hover {
    opacity: 0.9;
  }
`;const Oe=p`
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
`;var Ee=Object.defineProperty,Te=Object.getOwnPropertyDescriptor,dt=(e,t,r,i)=>{for(var s=i>1?void 0:i?Te(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Ee(t,r,s),s};let Zt=0,F=class extends x{constructor(){super(...arguments),this.title="Title",this.collapsed=!1,this.contentId=`accordion-content-${++Zt}`,this.buttonId=`accordion-button-${Zt}`}toggle(){this.collapsed=!this.collapsed}render(){return l`
      <div class="accordion">
        <button
          id=${this.buttonId}
          class="header"
          @click=${this.toggle}
          aria-expanded=${String(!this.collapsed)}
          aria-controls=${this.contentId}
          type="button"
        >
          <span class="header-content">
            ${this.icon?l`<span>${this.icon}</span>`:null}
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
    `}};F.styles=[A,w,_,k,T,C,W,p`
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

      .header-content {
        display: flex;
        align-items: center;
        gap: 8px;
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
    `],dt([h({type:String})],F.prototype,"title",2),dt([h({type:String})],F.prototype,"icon",2),dt([I()],F.prototype,"collapsed",2),F=dt([$("accordion-widget")],F);var Me=Object.defineProperty,je=Object.getOwnPropertyDescriptor,At=(e,t,r,i)=>{for(var s=i>1?void 0:i?je(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Me(t,r,s),s};let Q=class extends x{constructor(){super(...arguments),this.title="",this.icon=""}render(){return l`
      <div class="pattern-card card">
        ${this.title?l`
              <div class="pattern-card-header">
                ${this.icon?l`<span>${this.icon}</span>`:null}
                <span class="pattern-card-title">${this.title}</span>
              </div>
            `:null}
        <div>
          <slot></slot>
        </div>
      </div>
    `}};Q.styles=[A,w,_,k,T,C,W,p`
      :host {
        display: block;
      }

    `],At([h({type:String})],Q.prototype,"title",2),At([h({type:String})],Q.prototype,"icon",2),Q=At([$("card-widget")],Q);var Ne=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor,St=(e,t,r,i)=>{for(var s=i>1?void 0:i?Ue(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Ne(t,r,s),s};let X=class extends x{constructor(){super(...arguments),this.label="About"}render(){const e=!!(this.text&&this.text.trim());return l`
      <div role="region" aria-label=${this.label}>
        <h2 class="sr-only">${this.label}</h2>
        ${e?l`<p class="text">${this.text}</p>`:l`<slot></slot>`}
      </div>
    `}};X.styles=[A,w,_,k,T,C,W,p`
      :host {
        display: block;
      }

      .text {
        white-space: pre-line;
        margin: 0;
      }
    `],St([h({type:String,attribute:"text"})],X.prototype,"text",2),St([h({type:String})],X.prototype,"label",2),X=St([$("about-widget")],X);const pt={ATTRIBUTE:1,CHILD:2},ht=e=>(...t)=>({_$litDirective$:e,values:t});let ft=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};const{I:Ie}=we,Gt=()=>document.createComment(""),tt=(e,t,r)=>{const i=e._$AA.parentNode,s=t===void 0?e._$AB:t._$AA;if(r===void 0){const o=i.insertBefore(Gt(),s),a=i.insertBefore(Gt(),s);r=new Ie(o,a,e,e.options)}else{const o=r._$AB.nextSibling,a=r._$AM,d=a!==e;if(d){let n;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(n=e._$AU)!==a._$AU&&r._$AP(n)}if(o!==s||d){let n=r._$AA;for(;n!==o;){const u=n.nextSibling;i.insertBefore(n,s),n=u}}}return r},L=(e,t,r=e)=>(e._$AI(t,r),e),Le={},Re=(e,t=Le)=>e._$AH=t,He=e=>e._$AH,kt=e=>{e._$AR(),e._$AA.remove()};const Qt=(e,t,r)=>{const i=new Map;for(let s=t;s<=r;s++)i.set(e[s],s);return i},ut=ht(class extends ft{constructor(e){if(super(e),e.type!==pt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let i;r===void 0?r=t:t!==void 0&&(i=t);const s=[],o=[];let a=0;for(const d of e)s[a]=i?i(d,a):a,o[a]=r(d,a),a++;return{values:o,keys:s}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,i]){const s=He(e),{values:o,keys:a}=this.dt(t,r,i);if(!Array.isArray(s))return this.ut=a,o;const d=this.ut??=[],n=[];let u,b,c=0,m=s.length-1,f=0,v=o.length-1;for(;c<=m&&f<=v;)if(s[c]===null)c++;else if(s[m]===null)m--;else if(d[c]===a[f])n[f]=L(s[c],o[f]),c++,f++;else if(d[m]===a[v])n[v]=L(s[m],o[v]),m--,v--;else if(d[c]===a[v])n[v]=L(s[c],o[v]),tt(e,n[v+1],s[c]),c++,v--;else if(d[m]===a[f])n[f]=L(s[m],o[f]),tt(e,s[c],s[m]),m--,f++;else if(u===void 0&&(u=Qt(a,f,v),b=Qt(d,c,m)),u.has(d[c]))if(u.has(d[m])){const P=b.get(a[f]),Mt=P!==void 0?s[P]:null;if(Mt===null){const re=tt(e,s[c]);L(re,o[f]),n[f]=re}else n[f]=L(Mt,o[f]),tt(e,s[c],Mt),s[P]=null;f++}else kt(s[m]),m--;else kt(s[c]),c++;for(;f<=v;){const P=tt(e,n[v+1]);L(P,o[f]),n[f++]=P}for(;c<=m;){const P=s[c++];P!==null&&kt(P)}return this.ut=a,Re(e,n),S}});var Be=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,Ct=(e,t,r,i)=>{for(var s=i>1?void 0:i?qe(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Be(t,r,s),s};let et=class extends x{constructor(){super(...arguments),this.skillsData=null,this.sections=[]}updated(e){e.has("skillsData")&&this.transformSkillsData()}transformSkillsData(){if(!this.skillsData){this.sections=[];return}if(Array.isArray(this.skillsData)){this.sections=this.skillsData;return}const e=this.skillsData,t=[];e.required_skills?.length&&t.push({sectionTitle:"Required Skills",skills:e.required_skills}),e.additional_skills?.length&&t.push({sectionTitle:"Additional Skills",skills:e.additional_skills}),this.sections=t}getSections(){return this.sections}setSkillsData(e){this.skillsData=e}renderSection(e,t){return l`
      <div class="section" role="group" aria-label=${e.sectionTitle}>
        <p class="pattern-section-title">
          ${e.sectionTitle} (${e.skills.length})
        </p>
        <ul class="pattern-chip-list">
          ${ut(e.skills,(r,i)=>`${r}-${i}`,r=>l`
              <li class="pattern-chip">
                <span>${r}</span>
              </li>
            `)}
        </ul>
      </div>
    `}render(){return this.sections?.length?l`
      <section class="skills" role="region" aria-label="Employee skills">
        ${ut(this.sections,(e,t)=>`${e.sectionTitle}-${t}`,(e,t)=>this.renderSection(e,t))}
      </section>
    `:l`<p class="empty-state" role="status">No skills available.</p>`}};et.styles=[A,w,_,k,T,C,ze,p`
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
    `],Ct([h({attribute:!1})],et.prototype,"skillsData",2),Ct([I()],et.prototype,"sections",2),et=Ct([$("employee-skills-widget")],et);const Xt="important",We=" !"+Xt,Fe=ht(class extends ft{constructor(e){if(super(e),e.type!==pt.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,r)=>{const i=e[r];return i==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(e,[t]){const{style:r}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?r.removeProperty(i):r[i]=null);for(const i in t){const s=t[i];if(s!=null){this.ft.add(i);const o=typeof s=="string"&&s.endsWith(We);i.includes("-")||o?r.setProperty(i,o?s.slice(0,-11):s,o?Xt:""):r[i]=s}}return S}});let Dt=class extends ft{constructor(t){if(super(t),this.it=g,t.type!==pt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===g||t==null)return this._t=void 0,this.it=t;if(t===S)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Dt.directiveName="unsafeHTML",Dt.resultType=1;class zt extends Dt{}zt.directiveName="unsafeSVG",zt.resultType=2;const Je=ht(zt),Pt=(e,t="")=>{if(!e||!e.icon)return l``;const r=e.icon[0],i=e.icon[1],s=e.icon[4],o=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${r} ${i}" fill="currentColor" aria-hidden="true"><path d="${s}"/></svg>`;return l`<span class="${t} inline-block">${Je(o)}</span>`};var Ve=Object.defineProperty,Ye=Object.getOwnPropertyDescriptor,Ot=(e,t,r,i)=>{for(var s=i>1?void 0:i?Ye(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Ve(t,r,s),s};let rt=class extends x{constructor(){super(...arguments),this.fields=[],this.columns=2}getIconTemplate(e){return e.iconTemplate?e.iconTemplate:e.icon?Pt(e.icon,"icon icon-sm text-primary"):null}render(){if(!this.fields||this.fields.length===0)return l`<p class="empty-state">No data available.</p>`;const t={"--columns":`${Math.max(1,this.columns||1)}`};return l`
      <div class="field-grid" style=${Fe(t)}>
        ${ut(this.fields,(r,i)=>r.label??`${i}`,r=>{const i=this.getIconTemplate(r);return l`
              <div class="field-item">
                ${i?l`<div class="field-icon">${i}</div>`:""}
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
    `}};rt.styles=[A,w,_,k,C,p`
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
    `],Ot([h({type:Array,attribute:!1})],rt.prototype,"fields",2),Ot([h({type:Number})],rt.prototype,"columns",2),rt=Ot([$("field-list-widget")],rt);var Ke={prefix:"fas",iconName:"map-pin",icon:[320,512,[128205],"f276","M192 284.4C256.1 269.9 304 212.5 304 144 304 64.5 239.5 0 160 0S16 64.5 16 144c0 68.5 47.9 125.9 112 140.4L128 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-195.6zM168 96c-30.9 0-56 25.1-56 56 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.4 46.6-104 104-104 13.3 0 24 10.7 24 24s-10.7 24-24 24z"]},Ze={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]},Ge={prefix:"fas",iconName:"mobile",icon:[384,512,[128241,"mobile-android","mobile-phone"],"f3ce","M80 0C44.7 0 16 28.7 16 64l0 384c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L80 0zm72 416l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]},Qe={icon:[448,512,[],"f077","M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},Xe={prefix:"fas",iconName:"building",icon:[384,512,[127970,61687],"f1ad","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM176 352l32 0c17.7 0 32 14.3 32 32l0 80-96 0 0-80c0-17.7 14.3-32 32-32zM96 112c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM240 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM96 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm144-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"]},tr={prefix:"fas",iconName:"calendar",icon:[448,512,[128197,128198],"f133","M128 0C110.3 0 96 14.3 96 32l0 32-32 0C28.7 64 0 92.7 0 128l0 48 448 0 0-48c0-35.3-28.7-64-64-64l-32 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32-128 0 0-32c0-17.7-14.3-32-32-32zM0 224L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192-448 0z"]},er={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144,62470,"user-alt","user-large"],"f007","M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"]},rr={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"]},ir={icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},sr={prefix:"fas",iconName:"tag",icon:[512,512,[127991],"f02b","M32.5 96l0 149.5c0 17 6.7 33.3 18.7 45.3l192 192c25 25 65.5 25 90.5 0L483.2 333.3c25-25 25-65.5 0-90.5l-192-192C279.2 38.7 263 32 246 32L96.5 32c-35.3 0-64 28.7-64 64zm112 16a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},or={prefix:"fas",iconName:"briefcase",icon:[512,512,[128188],"f0b1","M200 48l112 0c4.4 0 8 3.6 8 8l0 40-128 0 0-40c0-4.4 3.6-8 8-8zm-56 8l0 40-80 0C28.7 96 0 124.7 0 160l0 96 512 0 0-96c0-35.3-28.7-64-64-64l-80 0 0-40c0-30.9-25.1-56-56-56L200 0c-30.9 0-56 25.1-56 56zM512 304l-192 0 0 16c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-16-192 0 0 112c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-112z"]},ar=Object.defineProperty,nr=Object.getOwnPropertyDescriptor,Et=(e,t,r,i)=>{for(var s=i>1?void 0:i?nr(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&ar(t,r,s),s};const lr=[{label:"Manager",title:"Maria Thompson",icon:"user",highlight:!0},{label:"Location",title:"Dallas Distribution Center, Building C",icon:"map-pin"},{label:"Work phone",title:"+1 (214) 555-0182",icon:"phone"},{label:"Job Title",title:"Forklift Operator",icon:"briefcase"},{label:"Work Schedule",title:"Mon-Fri, 6:00 AM – 2:30 PM",icon:"calendar"},{label:"Department",title:"Warehouse Operations",icon:"building"},{label:"Email",title:"james.davis@nova.com",icon:"envelope",highlight:!0},{label:"Nickname",title:"JD",icon:"tag"}];let it=class extends x{constructor(){super(),this.fields=[],this.columns=2,this.fields=[...lr]}getIconFromString(e){const t={user:er,"map-pin":Ke,phone:rr,briefcase:or,calendar:tr,building:Xe,envelope:Ze,tag:sr,mobile:Ge},r=t[e];return r||(console.warn(`[employee-details-widget] Unknown icon "${e}", defaulting to "user".`),t.user)}render(){const e=this.fields.map(t=>{const r=this.getIconFromString(t.icon);return{...t,iconTemplate:Pt(r,"icon icon-sm text-primary")}});return l`
      <section role="region">
        <field-list-widget
          .fields=${e}
          .columns=${this.columns}
        ></field-list-widget>
      </section>
    `}};it.styles=[A,w,_,k,T,C,W,p`
      :host {
        display: block;
      }
    `],Et([h({attribute:"fields",converter:{fromAttribute:e=>{if(!e)return[];try{return JSON.parse(e)}catch(t){return console.warn("[employee-details-widget] Unable to parse fields attribute, expected JSON array.",t),[]}}}})],it.prototype,"fields",2),Et([h({type:Number})],it.prototype,"columns",2),it=Et([$("employee-details-widget")],it);var cr=Object.defineProperty,dr=Object.getOwnPropertyDescriptor,te=(e,t,r,i)=>{for(var s=i>1?void 0:i?dr(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&cr(t,r,s),s};let mt=class extends x{constructor(){super(...arguments),this.fields=[]}render(){return this.fields?.length?l`
      <ul role="list" class="user-list">
        ${this.fields.map(e=>this.renderUser(e))}
      </ul>
    `:l``}renderUser(e){const t=e.avatar?l`<span class="avatar"
          ><img src="${e.avatar}" alt="${e.name}"
        /></span>`:this.renderInitials(e);return l`
      <li class="user-item">
        ${t}
        <div>
          <p class="name">${e.name}</p>
          ${e.designation?l`<p class="role">${e.designation}</p>`:""}
        </div>
      </li>
    `}renderInitials(e){const t=this.getInitials(e);return l` <span class="avatar">${t}</span> `}getInitials(e){if(e.firstName||e.lastName)return((e.firstName?.charAt(0)??"")+(e.lastName?.charAt(0)??"")).toUpperCase();const t=e.name.split(" ");return t.length>=2?(t[0][0]+t[1][0]).toUpperCase():t[0][0].toUpperCase()}};mt.styles=[A,w,_,k,C,p`
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
    `],te([h({type:Array})],mt.prototype,"fields",2),mt=te([$("field-users-widget")],mt);var pr=Object.defineProperty,hr=Object.getOwnPropertyDescriptor,gt=(e,t,r,i)=>{for(var s=i>1?void 0:i?hr(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&pr(t,r,s),s};let J=class extends x{constructor(){super(...arguments),this.teamData=null,this.openStates=[],this.sections=[]}updated(e){e.has("teamData")&&(this.transformTeamData(),this.syncOpenStates())}syncOpenStates(){this.openStates=this.sections.map((e,t)=>this.openStates[t]??!0)}transformTeamData(){if(!this.teamData){this.sections=[];return}if(Array.isArray(this.teamData)){this.sections=this.teamData;return}const e=this.teamData,t=[];e.direct_manager&&t.push({sectionTitle:"Direct manager",users:[e.direct_manager]}),e.other_managers?.length&&t.push({sectionTitle:"Other managers",users:e.other_managers}),e.coworkers?.length&&t.push({sectionTitle:"Coworkers",users:e.coworkers}),e.direct_reports?.length&&t.push({sectionTitle:"Direct reports",users:e.direct_reports}),this.sections=t}getSections(){return this.sections}setTeamData(e){this.teamData=e}toggleSection(e){const t=[...this.openStates];t[e]=!t[e],this.openStates=t}renderSection(e,t){const r=this.openStates[t],i=`team-panel-${t}`,s=`team-toggle-${t}`;return l`
      <div class="section">
        <button
          id=${s}
          type="button"
          @click=${()=>this.toggleSection(t)}
          class="section-toggle"
          aria-expanded=${String(r)}
          aria-controls=${i}
        >
          <span class="section-title">
            ${e.sectionTitle} (${e.users.length})
          </span>
          <span class="chevron">
            ${Pt(r?Qe:ir,"icon icon-sm muted")}
          </span>
        </button>

        <div
          id=${i}
          role="region"
          aria-labelledby=${s}
          style=${r?"max-height: var(--team-section-max-height, 9999px); opacity: 1;":"max-height: 0; opacity: 0;"}
          class="section-panel"
        >
          <div class="section-body">
            <field-users-widget .fields=${e.users}></field-users-widget>
          </div>
        </div>
      </div>
    `}render(){return!this.sections||this.sections.length===0?l`<p class="empty-state" role="status">
        No team information available.
      </p>`:l`
      ${ut(this.sections,(e,t)=>`${e.sectionTitle}-${t}`,(e,t)=>this.renderSection(e,t))}
    `}};J.styles=[A,w,_,k,T,C,W,p`
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
    `],gt([h({attribute:!1})],J.prototype,"teamData",2),gt([I()],J.prototype,"openStates",2),gt([I()],J.prototype,"sections",2),J=gt([$("employee-team-widget")],J);var fr=Object.defineProperty,ur=Object.getOwnPropertyDescriptor,R=(e,t,r,i)=>{for(var s=i>1?void 0:i?ur(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&fr(t,r,s),s};let z=class extends x{constructor(){super(...arguments),this.contacts=[],this.addModalOpen=!1,this.draft={name:"",relationship:"",emergencyContact:!1},this.handleOpenClick=()=>{this.onRequestOpen?this.onRequestOpen():this.addModalOpen=!0},this.handleSubmit=e=>{e.preventDefault();const t={...this.draft};this.onAddContact?.(t),this.dispatchEvent(new CustomEvent("add-contact",{detail:t,bubbles:!0,composed:!0})),this.resetDraft(),this.addModalOpen=!1},this.handleClose=()=>{this.resetDraft(),this.addModalOpen=!1,this.onRequestClose?.()}}resetDraft(){this.draft={name:"",relationship:"",emergencyContact:!1}}render(){const e=this.contacts?.length>0;return l`
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
            ${e?this.contacts.map((t,r)=>l`
                    <tr data-row=${r}>
                      <td>${t.name}</td>
                      <td>${t.relationship}</td>
                      <td
                        class=${`pattern-status ${t.emergencyContact?"is-yes":""}`}
                      >
                        ${t.emergencyContact?"Yes":"No"}
                      </td>
                    </tr>
                  `):l`<tr>
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

      ${this.addModalOpen?l`
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
                      @input=${t=>this.draft={...this.draft,name:t.target.value}}
                    />
                  </label>

                  <label class="pattern-field">
                    Relationship
                    <input
                      class="pattern-input"
                      required
                      .value=${this.draft.relationship}
                      @input=${t=>this.draft={...this.draft,relationship:t.target.value}}
                    />
                  </label>

                  <label class="pattern-checkbox">
                    <input
                      type="checkbox"
                      class="pattern-checkbox-input"
                      .checked=${this.draft.emergencyContact}
                      @change=${t=>this.draft={...this.draft,emergencyContact:t.target.checked}}
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
    `}};z.styles=[A,w,_,k,T,C,De,Oe,Pe,p`
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
    `],R([h({attribute:!1})],z.prototype,"contacts",2),R([h({type:Boolean})],z.prototype,"addModalOpen",2),R([h({attribute:!1})],z.prototype,"onAddContact",2),R([h({attribute:!1})],z.prototype,"onRequestOpen",2),R([h({attribute:!1})],z.prototype,"onRequestClose",2),R([I()],z.prototype,"draft",2),z=R([$("employee-contacts-widget")],z);const mr=ht(class extends ft{constructor(e){if(super(e),e.type!==pt.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((i=>i!==""))));for(const i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}const r=e.element.classList;for(const i of this.st)i in t||(r.remove(i),this.st.delete(i));for(const i in t){const s=!!t[i];s===this.st.has(i)||this.nt?.has(i)||(s?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return S}}),ee=p`
  :host {
    display: block;
    font-family: var(
      --font-family-base,
      "Poppins",
      "Inter",
      system-ui,
      sans-serif
    );
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

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

  .hidden {
    display: none !important;
  }

  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,gr=p`
  .ui-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 2px solid transparent;
    font-family: inherit;
    outline: none;
  }

  .ui-btn:focus-visible {
    outline: 2px solid var(--color-primary, #6d28d9);
    outline-offset: 2px;
  }

  .ui-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .ui-btn:not(:disabled):active {
    transform: scale(0.98);
  }

  /* Sizes */
  .ui-btn-sm {
    padding: 6px 12px;
    font-size: 0.875rem;
  }

  .ui-btn-md {
    padding: 8px 16px;
    font-size: 1rem;
  }

  .ui-btn-lg {
    padding: 12px 20px;
    font-size: 1.125rem;
  }

  /* Variants */
  .ui-btn-primary {
    background: var(--color-primary, #6d28d9);
    color: #fff;
    border-color: var(--color-primary, #6d28d9);
  }

  .ui-btn-primary:not(:disabled):hover {
    background: var(--color-primary-strong, #5b21b6);
    border-color: var(--color-primary-strong, #5b21b6);
  }

  .ui-btn-secondary {
    background: #f97316;
    color: #fff;
    border-color: #f97316;
  }

  .ui-btn-secondary:not(:disabled):hover {
    background: #ea580c;
    border-color: #ea580c;
  }

  .ui-btn-outline {
    background: transparent;
    color: var(--color-primary, #6d28d9);
    border-color: var(--color-primary, #6d28d9);
  }

  .ui-btn-outline:not(:disabled):hover {
    background: rgba(109, 40, 217, 0.08);
  }

  .ui-btn-ghost {
    background: transparent;
    color: var(--color-primary, #6d28d9);
    border-color: transparent;
  }

  .ui-btn-ghost:not(:disabled):hover {
    background: rgba(109, 40, 217, 0.08);
  }

  .ui-btn-block {
    width: 100%;
  }

  /* Spinner */
  .ui-btn-spinner {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;p`
  .topbar {
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #e5e7eb;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 50;
  }

  .topbar-brand {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.025em;
    background: linear-gradient(90deg, #6366f1 0%, #9333ea 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .topbar-search {
    margin: 0 12px;
    width: 100%;
    max-width: 320px;
  }

  .topbar-search-wrap {
    position: relative;
  }

  .topbar-search-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #9ca3af;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .topbar-search-input {
    width: 100%;
    padding: 8px 16px 8px 40px;
    border-radius: 12px;
    border: 1px solid #d1d5db;
    background: #f9fafb;
    font-size: 0.875rem;
    outline: none;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
  }

  .topbar-search-input:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  .topbar-actions {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .topbar-icon-btn {
    padding: 8px;
    border-radius: 6px;
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #374151;
    transition: background-color 0.15s ease;
  }

  .topbar-icon-btn:hover {
    background: #f3f4f6;
  }

  .topbar-icon-btn:focus-visible {
    outline: 2px solid #818cf8;
    outline-offset: 2px;
  }

  .topbar-profile {
    position: relative;
  }

  .topbar-profile-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px;
    border-radius: 6px;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: background-color 0.15s ease;
  }

  .topbar-profile-btn:hover {
    background: #f3f4f6;
  }

  .topbar-profile-btn:focus-visible {
    outline: 2px solid #818cf8;
    outline-offset: 2px;
  }

  .topbar-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid #d1d5db;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    object-fit: cover;
  }

  .topbar-dropdown {
    position: absolute;
    right: 0;
    top: calc(100% + 8px);
    width: 192px;
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    z-index: 50;
    overflow: hidden;
  }

  .topbar-dropdown-item {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 16px;
    font-size: 0.875rem;
    background: transparent;
    border: none;
    cursor: pointer;
    color: #374151;
    transition: background-color 0.15s ease;
    text-align: left;
  }

  .topbar-dropdown-item:hover {
    background: #f3f4f6;
  }

  .topbar-dropdown-item:focus-visible {
    outline: 2px solid #818cf8;
    outline-offset: -2px;
  }

  .topbar-dropdown-item--danger {
    color: #dc2626;
  }

  .topbar-dropdown-item--danger:hover {
    background: #fef2f2;
  }

  .topbar-dropdown-divider {
    border-top: 1px solid #e5e7eb;
    margin: 4px 0;
  }
`,p`
  .profile-header {
    width: 100%;
    padding-top: 24px;
    border-bottom: 1px solid #e5e7eb;
    background: linear-gradient(90deg, #faf5ff 0%, #fdf2f8 50%, #fff7ed 100%);
  }

  .profile-header-container {
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 16px;
  }

  .profile-header-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .profile-header-info {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .profile-header-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 5px solid #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    object-fit: cover;
  }

  .profile-header-name {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
    color: #111827;
  }

  .profile-header-title {
    font-size: 0.875rem;
    color: var(--color-primary, #6d28d9);
    margin: 4px 0 0 0;
  }

  .profile-header-location {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 4px;
    font-size: 0.875rem;
    color: #4b5563;
  }

  .profile-header-tabs {
    margin-top: 24px;
    padding-top: 16px;
  }
`,p`
  .tabs-container {
    display: flex;
    align-items: center;
    gap: 4px;
    position: relative;
    user-select: none;
  }

  .tab-btn {
    padding: 8px 32px;
    border: none;
    border-bottom: 2px solid transparent;
    background: transparent;
    font-size: 0.875rem;
    font-weight: 400;
    color: #4b5563;
    cursor: pointer;
    transition: all 0.15s ease;
    font-family: inherit;
  }

  .tab-btn:hover {
    color: var(--color-primary, #6d28d9);
  }

  .tab-btn--active {
    font-weight: 600;
    color: var(--color-primary, #6d28d9);
    border-bottom-color: var(--color-primary, #6d28d9);
  }

  .tab-more {
    position: relative;
  }

  .tab-more-btn {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px 16px;
    border: none;
    border-bottom: 2px solid transparent;
    background: transparent;
    font-size: 0.875rem;
    font-weight: 400;
    color: #374151;
    cursor: pointer;
    transition: all 0.15s ease;
    font-family: inherit;
  }

  .tab-more-btn:hover {
    color: #111827;
  }

  .tab-more-icon {
    width: 12px;
    height: 12px;
    transition: transform 0.15s ease;
  }

  .tab-more-icon--open {
    transform: rotate(180deg);
  }

  .tab-dropdown {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    min-width: 150px;
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    z-index: 20;
    animation: fadeIn 0.15s ease;
  }

  .tab-dropdown-item {
    width: 100%;
    padding: 8px 25px 8px 16px;
    text-align: left;
    font-size: 0.875rem;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: background-color 0.15s ease;
    font-family: inherit;
  }

  .tab-dropdown-item:hover {
    background: #f3f4f6;
  }

  .tab-dropdown-item--active {
    font-weight: 600;
    color: var(--color-primary, #6d28d9);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;const br=p`
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
    padding: 16px;
  }

  .modal-backdrop-blur {
    backdrop-filter: blur(4px);
  }

  .modal-content {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    width: 100%;
    max-width: 448px;
    border: 1px solid #e5e7eb;
  }

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid #e5e7eb;
  }

  .modal-title {
    font-size: 1rem;
    font-weight: 600;
    color: #111827;
    margin: 0;
  }

  .modal-subtitle {
    font-size: 0.875rem;
    color: #4b5563;
    margin: 4px 0 0 0;
  }

  .modal-body {
    padding: 20px;
  }

  .modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    padding: 20px;
    border-top: 1px solid #e5e7eb;
  }

  .modal-info-box {
    padding: 12px;
    background: #f5f3ff;
    border: 1px solid #e9d5ff;
    border-radius: 6px;
  }

  .modal-info-text {
    font-size: 0.875rem;
    color: #6b21a8;
    margin: 0;
  }

  .modal-info-list {
    margin: 8px 0 0 0;
    padding-left: 20px;
    font-size: 0.875rem;
    color: #7c3aed;
  }

  .modal-info-list li {
    margin: 4px 0;
  }
`,vr=p`
  .form-group {
    display: block;
    margin-bottom: 16px;
  }

  .form-label {
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
    margin-bottom: 4px;
  }

  .form-input {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    font-size: 0.875rem;
    outline: none;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
    font-family: inherit;
  }

  .form-input:focus {
    border-color: var(--color-primary, #6d28d9);
    box-shadow: 0 0 0 3px rgba(109, 40, 217, 0.1);
  }

  .form-checkbox-label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.875rem;
    color: #374151;
    cursor: pointer;
    user-select: none;
  }

  .form-checkbox {
    width: 16px;
    height: 16px;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    cursor: pointer;
    accent-color: var(--color-primary, #6d28d9);
  }
`;p`
  .user-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .user-item:hover {
    background: rgba(109, 40, 217, 0.04);
  }

  .user-item--active {
    background: rgba(109, 40, 217, 0.08);
    border-left: 4px solid var(--color-primary, #6d28d9);
  }

  .user-item--card {
    background: #fff;
    border: 1px solid #e5e7eb;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }

  .user-item--card:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border-color: rgba(109, 40, 217, 0.3);
  }

  .user-item--compact {
    padding: 8px;
  }

  .user-avatar {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    overflow: hidden;
    flex-shrink: 0;
    background: rgba(109, 40, 217, 0.1);
    color: var(--color-primary, #6d28d9);
  }

  .user-avatar--sm {
    width: 32px;
    height: 32px;
    font-size: 0.875rem;
  }

  .user-avatar--md {
    width: 48px;
    height: 48px;
    font-size: 1.125rem;
  }

  .user-avatar--lg {
    width: 56px;
    height: 56px;
    font-size: 1.25rem;
  }

  .user-avatar--active {
    background: var(--color-primary, #6d28d9);
    color: #fff;
  }

  .user-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
  }

  .user-name {
    font-weight: 700;
    color: #111827;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .user-name--sm {
    font-size: 0.875rem;
  }

  .user-name--active {
    color: #6b21a8;
  }

  .user-secondary {
    color: #4b5563;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 2px;
  }

  .user-secondary--sm {
    font-size: 0.75rem;
  }

  .user-secondary--active {
    color: #7c3aed;
  }

  .user-active-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--color-primary, #6d28d9);
    margin-left: auto;
    margin-top: 8px;
    flex-shrink: 0;
  }
`,p`
  .app-layout {
    min-height: 100vh;
    background: #f4f4f6;
  }

  .app-content {
    max-width: 1024px;
    margin: 0 auto;
    margin-top: 24px;
    padding: 0 16px;
  }

  .app-footer {
    padding: 12px 0;
    text-align: center;
    font-size: 0.75rem;
    color: #6b7280;
    border-top: 1px solid #e5e7eb;
    margin-top: 32px;
  }
`,p`
  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
  }

  .icon svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  .icon-xs {
    width: 12px;
    height: 12px;
  }

  .icon-sm {
    width: 16px;
    height: 16px;
  }

  .icon-md {
    width: 20px;
    height: 20px;
  }

  .icon-lg {
    width: 24px;
    height: 24px;
  }

  .icon-xl {
    width: 32px;
    height: 32px;
  }
`;var xr=Object.defineProperty,yr=Object.getOwnPropertyDescriptor,M=(e,t,r,i)=>{for(var s=i>1?void 0:i?yr(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&xr(t,r,s),s};let D=class extends x{constructor(){super(...arguments),this.variant="primary",this.size="md",this.disabled=!1,this.loading=!1,this.type="button",this.block=!1,this.ariaLabel=""}render(){const e=!(this.disabled||this.loading),t={"ui-btn":!0,"ui-btn-sm":this.size==="sm","ui-btn-md":this.size==="md","ui-btn-lg":this.size==="lg","ui-btn-primary":this.variant==="primary","ui-btn-secondary":this.variant==="secondary","ui-btn-outline":this.variant==="outline","ui-btn-ghost":this.variant==="ghost","ui-btn-block":this.block},r=this.ariaLabel||void 0;return l`
      <button
        class=${mr(t)}
        type=${this.type}
        ?disabled=${!e}
        aria-disabled=${!e}
        aria-busy=${this.loading}
        aria-label=${r}
        @click=${this.handleClick}
      >
        ${this.loading?this.renderSpinner():""}
        <slot name="prefix"></slot>
        <slot></slot>
        <slot name="suffix"></slot>
      </button>
    `}renderSpinner(){return l`
      <svg
        class="ui-btn-spinner"
        style="width: 16px; height: 16px; margin-right: 4px;"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          style="opacity: 0.25;"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          style="opacity: 0.75;"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    `}handleClick(e){(this.disabled||this.loading)&&(e.preventDefault(),e.stopPropagation())}};D.styles=[A,w,_,ee,gr],M([h({type:String,reflect:!0})],D.prototype,"variant",2),M([h({type:String,reflect:!0})],D.prototype,"size",2),M([h({type:Boolean,reflect:!0})],D.prototype,"disabled",2),M([h({type:Boolean,reflect:!0})],D.prototype,"loading",2),M([h({type:String,reflect:!0})],D.prototype,"type",2),M([h({type:Boolean,attribute:"block",reflect:!0})],D.prototype,"block",2),M([h({type:String})],D.prototype,"ariaLabel",2),D=M([$("ui-button")],D);var $r=Object.defineProperty,wr=Object.getOwnPropertyDescriptor,Tt=(e,t,r,i)=>{for(var s=i>1?void 0:i?wr(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&$r(t,r,s),s};let st=class extends x{constructor(){super(...arguments),this.open=!1,this.draft={name:"",relationship:"",emergencyContact:!1},this.submit=e=>{e.preventDefault(),this.dispatchEvent(new CustomEvent("submit-contact",{detail:{...this.draft},bubbles:!0,composed:!0})),this.close()}}willUpdate(e){e.has("open")&&this.open&&(this.draft={name:"",relationship:"",emergencyContact:!1})}close(){this.dispatchEvent(new CustomEvent("close-modal",{bubbles:!0,composed:!0}))}render(){return this.open?l`
      <div class="modal-overlay modal-backdrop-blur" role="dialog" aria-modal="true">
        <div class="modal-content" style="padding: 24px;">
          <h3 class="modal-title" style="margin-bottom: 16px;">Add Contact</h3>

          <form @submit=${this.submit}>
            <label class="form-group">
              <span class="form-label">Name</span>
              <input
                class="form-input"
                required
                .value=${this.draft.name}
                @input=${e=>this.draft={...this.draft,name:e.target.value}}
              />
            </label>

            <label class="form-group">
              <span class="form-label">Relationship</span>
              <input
                class="form-input"
                required
                .value=${this.draft.relationship}
                @input=${e=>this.draft={...this.draft,relationship:e.target.value}}
              />
            </label>

            <label class="form-checkbox-label" style="margin-bottom: 16px;">
              <input
                type="checkbox"
                class="form-checkbox"
                .checked=${this.draft.emergencyContact}
                @change=${e=>this.draft={...this.draft,emergencyContact:e.target.checked}}
              />
              Emergency contact
            </label>

            <div style="display: flex; justify-content: flex-end; gap: 12px; padding-top: 8px;">
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
    `:null}};st.styles=[A,w,_,ee,br,vr],Tt([h({type:Boolean})],st.prototype,"open",2),Tt([I()],st.prototype,"draft",2),st=Tt([$("add-contact-modal")],st);var _r=Object.defineProperty,Ar=Object.getOwnPropertyDescriptor,ot=(e,t,r,i)=>{for(var s=i>1?void 0:i?Ar(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&_r(t,r,s),s};y.ProfileDetails=class extends x{constructor(){super(...arguments),this.profileData={},this.showSections=["about","details","skills","team","contacts"],this.sectionTitles={about:"About me",details:"Employee Details",skills:"Skills",team:"Team Members",contacts:"Contacts"},this.addContactOpen=!1,this.openAddContact=()=>{this.addContactOpen=!0},this.closeAddContact=()=>{this.addContactOpen=!1},this.handleAddContact=t=>{const r=this.profileData.contacts?.contacts??this.getDefaultContactsData().contacts??[];this.profileData={...this.profileData,contacts:{contacts:[...r,t]}},this.addContactOpen=!1}}getDefaultDetailsData(){return{headerTitle:"Employee details",fields:[{label:"Manager",title:"Maria Thompson",icon:"user",highlight:!0},{label:"Location",title:"Dallas Distribution Center, Building C",icon:"map-pin"},{label:"Work phone",title:"+1 (214) 555-0182",icon:"phone"},{label:"Job Title",title:"Forklift Operator",icon:"briefcase"},{label:"Work Schedule",title:"Mon-Fri, 6:00 AM – 2:30 PM",icon:"calendar"},{label:"Department",title:"Warehouse Operations",icon:"building"},{label:"Email",title:"james.davis@nova.com",icon:"envelope",highlight:!0},{label:"Nickname",title:"JD",icon:"tag"}]}}getDefaultAboutData(){return{text:"I'm a dedicated forklift operator with over 12 years of experience in warehouse operations and logistics. Safety is my top priority, and I take pride in maintaining a perfect safety record throughout my career. I'm certified in operating multiple types of forklifts and material handling equipment. When I'm not at work, I enjoy spending time with my family, mentoring young professionals in the industry, and playing basketball on weekends. I'm passionate about continuous improvement and always looking for ways to optimize our warehouse processes."}}getDefaultSkillsData(){return{required_skills:["Project Management","Team Leadership","Data Analysis"],additional_skills:["Public Speaking","Graphic Design","Cloud Computing"]}}getDefaultTeamData(){return{direct_manager:{avatar:"https://i.pravatar.cc/150?img=8",name:"Eve Davis",firstName:"Eve",lastName:"Davis",designation:"Shift Manager"},other_managers:[{avatar:"https://i.pravatar.cc/150?img=12",name:"Michael Thompson",firstName:"Michael",lastName:"Thompson",designation:"Operations Manager"},{avatar:"https://i.pravatar.cc/150?img=15",name:"Sarah Lee",firstName:"Sarah",lastName:"Lee",designation:"Department Manager"}],coworkers:[{avatar:"https://i.pravatar.cc/150?img=22",name:"John Carter",firstName:"John",lastName:"Carter",designation:"Senior Analyst"},{avatar:"https://i.pravatar.cc/150?img=31",name:"Priya Nair",firstName:"Priya",lastName:"Nair",designation:"HR Coordinator"},{avatar:"https://i.pravatar.cc/150?img=27",name:"David Miller",firstName:"David",lastName:"Miller",designation:"Software Engineer"}],direct_reports:[{avatar:"https://i.pravatar.cc/150?img=35",name:"Anita Sharma",firstName:"Anita",lastName:"Sharma",designation:"Junior Associate"},{avatar:"https://i.pravatar.cc/150?img=40",name:"Kevin Brooks",firstName:"Kevin",lastName:"Brooks",designation:"Trainee Engineer"}]}}getDefaultContactsData(){return{contacts:[{name:"Lisa Davis",relationship:"Spouse",emergencyContact:!0},{name:"Mark Johnson",relationship:"Brother",emergencyContact:!1},{name:"Priya Nair",relationship:"Friend",emergencyContact:!1}]}}shouldShowSection(t){return this.showSections.includes(t)}renderAboutSection(){if(!this.shouldShowSection("about"))return null;const t=this.profileData.about||this.getDefaultAboutData();return t.text?l`
      <card-widget title=${this.sectionTitles.about}>
        <about-widget .text=${t.text}></about-widget>
      </card-widget>
    `:l`<card-widget title=${this.sectionTitles.about}>
        <p class="empty-text">No about information available.</p>
      </card-widget>`}renderDetailsSection(){if(!this.shouldShowSection("details"))return null;const t=this.profileData.details||this.getDefaultDetailsData();return!t.fields||t.fields.length===0?l`<accordion-widget title=${this.sectionTitles.details}>
        <p class="empty-text">No employee details available.</p>
      </accordion-widget>`:l`
      <accordion-widget title=${this.sectionTitles.details}>
        <employee-details-widget
          .headerTitle=${t.headerTitle||"Employee details"}
          .fields=${t.fields}
        >
        </employee-details-widget>
      </accordion-widget>
    `}renderSkillsSection(){if(!this.shouldShowSection("skills"))return null;const t=this.profileData.skills||this.getDefaultSkillsData();return t.required_skills&&t.required_skills.length>0||t.additional_skills&&t.additional_skills.length>0?l`
      <accordion-widget title=${this.sectionTitles.skills}>
        <employee-skills-widget
          .skillsData=${t}
        ></employee-skills-widget>
      </accordion-widget>
    `:l`<accordion-widget title=${this.sectionTitles.skills}>
        <p class="empty-text">No skills available.</p>
      </accordion-widget>`}renderTeamSection(){if(!this.shouldShowSection("team"))return null;const t=this.profileData.team||this.getDefaultTeamData();return t.direct_manager||t.other_managers&&t.other_managers.length>0||t.coworkers&&t.coworkers.length>0||t.direct_reports&&t.direct_reports.length>0?l`
      <card-widget title=${this.sectionTitles.team}>
        <employee-team-widget .teamData=${t}></employee-team-widget>
      </card-widget>
    `:l`<card-widget title=${this.sectionTitles.team}>
        <p class="empty-text">No team information available.</p>
      </card-widget>`}renderContactsSection(){if(!this.shouldShowSection("contacts"))return null;const t=this.profileData.contacts||this.getDefaultContactsData();return!t.contacts||t.contacts.length===0?l`
        <card-widget title=${this.sectionTitles.contacts}>
          <p class="empty-text">No contacts information available.</p>
        </card-widget>
      `:l`
      <card-widget title=${this.sectionTitles.contacts}>
        <employee-contacts-widget
          .contacts=${t.contacts??[]}
          .addModalOpen=${this.addContactOpen}
          .onRequestOpen=${this.openAddContact}
          .onRequestClose=${this.closeAddContact}
          .onAddContact=${this.handleAddContact}
        ></employee-contacts-widget>
      </card-widget>
    `}render(){return l`
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
    `}},y.ProfileDetails.styles=[A,w,_,k,T,C,W,p`
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

      .empty-text {
        color: var(--color-text-subtle, #6b7280);
        font-size: var(--font-size-sm, 0.875rem);
        padding: 8px;
      }
    `],ot([h({type:Object,attribute:!1})],y.ProfileDetails.prototype,"profileData",2),ot([h({type:Array,attribute:!1})],y.ProfileDetails.prototype,"showSections",2),ot([h({type:Object,attribute:!1})],y.ProfileDetails.prototype,"sectionTitles",2),ot([I()],y.ProfileDetails.prototype,"addContactOpen",2),y.ProfileDetails=ot([$("profile-details")],y.ProfileDetails),Object.defineProperty(y,Symbol.toStringTag,{value:"Module"})}));
