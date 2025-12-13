(function($,k){typeof exports=="object"&&typeof module<"u"?k(exports):typeof define=="function"&&define.amd?define(["exports"],k):($=typeof globalThis<"u"?globalThis:$||self,k($.ProfileDetails={}))})(this,(function($){"use strict";const k=globalThis,ht=k.ShadowRoot&&(k.ShadyCSS===void 0||k.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ut=Symbol(),zt=new WeakMap;let Mt=class{constructor(t,s,r){if(this._$cssResult$=!0,r!==ut)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const s=this.t;if(ht&&t===void 0){const r=s!==void 0&&s.length===1;r&&(t=zt.get(s)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&zt.set(s,t))}return t}toString(){return this.cssText}};const te=e=>new Mt(typeof e=="string"?e:e+"",void 0,ut),m=(e,...t)=>{const s=e.length===1?e[0]:t.reduce(((r,i,a)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[a+1]),e[0]);return new Mt(s,e,ut)},ee=(e,t)=>{if(ht)e.adoptedStyleSheets=t.map((s=>s instanceof CSSStyleSheet?s:s.styleSheet));else for(const s of t){const r=document.createElement("style"),i=k.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=s.cssText,e.appendChild(r)}},Nt=ht?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(const r of t.cssRules)s+=r.cssText;return te(s)})(e):e;const{is:se,defineProperty:ie,getOwnPropertyDescriptor:re,getOwnPropertyNames:ae,getOwnPropertySymbols:oe,getPrototypeOf:ne}=Object,it=globalThis,jt=it.trustedTypes,le=jt?jt.emptyScript:"",ce=it.reactiveElementPolyfillSupport,F=(e,t)=>e,rt={toAttribute(e,t){switch(t){case Boolean:e=e?le:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},ft=(e,t)=>!se(e,t),Ut={attribute:!0,type:String,converter:rt,reflect:!1,useDefault:!1,hasChanged:ft};Symbol.metadata??=Symbol("metadata"),it.litPropertyMetadata??=new WeakMap;let R=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=Ut){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,s);i!==void 0&&ie(this.prototype,t,i)}}static getPropertyDescriptor(t,s,r){const{get:i,set:a}=re(this.prototype,t)??{get(){return this[s]},set(o){this[s]=o}};return{get:i,set(o){const d=i?.call(this);a?.call(this,o),this.requestUpdate(t,d,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ut}static _$Ei(){if(this.hasOwnProperty(F("elementProperties")))return;const t=ne(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(F("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(F("properties"))){const s=this.properties,r=[...ae(s),...oe(s)];for(const i of r)this.createProperty(i,s[i])}const t=this[Symbol.metadata];if(t!==null){const s=litPropertyMetadata.get(t);if(s!==void 0)for(const[r,i]of s)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[s,r]of this.elementProperties){const i=this._$Eu(s,r);i!==void 0&&this._$Eh.set(i,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)s.unshift(Nt(i))}else t!==void 0&&s.push(Nt(t));return s}static _$Eu(t,s){const r=s.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const r of s.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ee(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,s,r){this._$AK(t,r)}_$ET(t,s){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const a=(r.converter?.toAttribute!==void 0?r.converter:rt).toAttribute(s,r.type);this._$Em=t,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(t,s){const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const a=r.getPropertyOptions(i),o=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:rt;this._$Em=i;const d=o.fromAttribute(s,a.type);this[i]=d??this._$Ej?.get(i)??d,this._$Em=null}}requestUpdate(t,s,r){if(t!==void 0){const i=this.constructor,a=this[t];if(r??=i.getPropertyOptions(t),!((r.hasChanged??ft)(a,s)||r.useDefault&&r.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,r))))return;this.C(t,s,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,s,{useDefault:r,reflect:i,wrapped:a},o){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??s??this[t]),a!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(s=void 0),this._$AL.set(t,s)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,a]of r){const{wrapped:o}=a,d=this[i];o!==!0||this._$AL.has(i)||d===void 0||this.C(i,void 0,a,d)}}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((r=>r.hostUpdate?.())),this.update(s)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$EO?.forEach((s=>s.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((s=>this._$ET(s,this[s]))),this._$EM()}updated(t){}firstUpdated(t){}};R.elementStyles=[],R.shadowRootOptions={mode:"open"},R[F("elementProperties")]=new Map,R[F("finalized")]=new Map,ce?.({ReactiveElement:R}),(it.reactiveElementVersions??=[]).push("2.1.1");const mt=globalThis,at=mt.trustedTypes,Lt=at?at.createPolicy("lit-html",{createHTML:e=>e}):void 0,Rt="$lit$",O=`lit$${Math.random().toFixed(9).slice(2)}$`,It="?"+O,de=`<${It}>`,z=document,J=()=>z.createComment(""),V=e=>e===null||typeof e!="object"&&typeof e!="function",gt=Array.isArray,pe=e=>gt(e)||typeof e?.[Symbol.iterator]=="function",vt=`[ 	
\f\r]`,K=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ht=/-->/g,Bt=/>/g,M=RegExp(`>|${vt}(?:([^\\s"'>=/]+)(${vt}*=${vt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qt=/'/g,Wt=/"/g,Ft=/^(?:script|style|textarea|title)$/i,he=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),l=he(1),D=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Jt=new WeakMap,N=z.createTreeWalker(z,129);function Vt(e,t){if(!gt(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Lt!==void 0?Lt.createHTML(t):t}const ue=(e,t)=>{const s=e.length-1,r=[];let i,a=t===2?"<svg>":t===3?"<math>":"",o=K;for(let d=0;d<s;d++){const n=e[d];let h,v,c=-1,u=0;for(;u<n.length&&(o.lastIndex=u,v=o.exec(n),v!==null);)u=o.lastIndex,o===K?v[1]==="!--"?o=Ht:v[1]!==void 0?o=Bt:v[2]!==void 0?(Ft.test(v[2])&&(i=RegExp("</"+v[2],"g")),o=M):v[3]!==void 0&&(o=M):o===M?v[0]===">"?(o=i??K,c=-1):v[1]===void 0?c=-2:(c=o.lastIndex-v[2].length,h=v[1],o=v[3]===void 0?M:v[3]==='"'?Wt:qt):o===Wt||o===qt?o=M:o===Ht||o===Bt?o=K:(o=M,i=void 0);const p=o===M&&e[d+1].startsWith("/>")?" ":"";a+=o===K?n+de:c>=0?(r.push(h),n.slice(0,c)+Rt+n.slice(c)+O+p):n+O+(c===-2?d:p)}return[Vt(e,a+(e[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class Z{constructor({strings:t,_$litType$:s},r){let i;this.parts=[];let a=0,o=0;const d=t.length-1,n=this.parts,[h,v]=ue(t,s);if(this.el=Z.createElement(h,r),N.currentNode=this.el.content,s===2||s===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=N.nextNode())!==null&&n.length<d;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(Rt)){const u=v[o++],p=i.getAttribute(c).split(O),b=/([.?@])?(.*)/.exec(u);n.push({type:1,index:a,name:b[2],strings:p,ctor:b[1]==="."?me:b[1]==="?"?ge:b[1]==="@"?ve:ot}),i.removeAttribute(c)}else c.startsWith(O)&&(n.push({type:6,index:a}),i.removeAttribute(c));if(Ft.test(i.tagName)){const c=i.textContent.split(O),u=c.length-1;if(u>0){i.textContent=at?at.emptyScript:"";for(let p=0;p<u;p++)i.append(c[p],J()),N.nextNode(),n.push({type:2,index:++a});i.append(c[u],J())}}}else if(i.nodeType===8)if(i.data===It)n.push({type:2,index:a});else{let c=-1;for(;(c=i.data.indexOf(O,c+1))!==-1;)n.push({type:7,index:a}),c+=O.length-1}a++}}static createElement(t,s){const r=z.createElement("template");return r.innerHTML=t,r}}function I(e,t,s=e,r){if(t===D)return t;let i=r!==void 0?s._$Co?.[r]:s._$Cl;const a=V(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,s,r)),r!==void 0?(s._$Co??=[])[r]=i:s._$Cl=i),i!==void 0&&(t=I(e,i._$AS(e,t.values),i,r)),t}let fe=class{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:r}=this._$AD,i=(t?.creationScope??z).importNode(s,!0);N.currentNode=i;let a=N.nextNode(),o=0,d=0,n=r[0];for(;n!==void 0;){if(o===n.index){let h;n.type===2?h=new H(a,a.nextSibling,this,t):n.type===1?h=new n.ctor(a,n.name,n.strings,this,t):n.type===6&&(h=new be(a,this,t)),this._$AV.push(h),n=r[++d]}o!==n?.index&&(a=N.nextNode(),o++)}return N.currentNode=z,i}p(t){let s=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,s),s+=r.strings.length-2):r._$AI(t[s])),s++}};class H{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,s,r,i){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&t?.nodeType===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=I(this,t,s),V(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==D&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):pe(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&V(this._$AH)?this._$AA.nextSibling.data=t:this.T(z.createTextNode(t)),this._$AH=t}$(t){const{values:s,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Z.createElement(Vt(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(s);else{const a=new fe(i,this),o=a.u(this.options);a.p(s),this.T(o),this._$AH=a}}_$AC(t){let s=Jt.get(t.strings);return s===void 0&&Jt.set(t.strings,s=new Z(t)),s}k(t){gt(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let r,i=0;for(const a of t)i===s.length?s.push(r=new H(this.O(J()),this.O(J()),this,this.options)):r=s[i],r._$AI(a),i++;i<s.length&&(this._$AR(r&&r._$AB.nextSibling,i),s.length=i)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class ot{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,r,i,a){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=s,this._$AM=i,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=g}_$AI(t,s=this,r,i){const a=this.strings;let o=!1;if(a===void 0)t=I(this,t,s,0),o=!V(t)||t!==this._$AH&&t!==D,o&&(this._$AH=t);else{const d=t;let n,h;for(t=a[0],n=0;n<a.length-1;n++)h=I(this,d[r+n],s,n),h===D&&(h=this._$AH[n]),o||=!V(h)||h!==this._$AH[n],h===g?t=g:t!==g&&(t+=(h??"")+a[n+1]),this._$AH[n]=h}o&&!i&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class me extends ot{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}}class ge extends ot{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}}class ve extends ot{constructor(t,s,r,i,a){super(t,s,r,i,a),this.type=5}_$AI(t,s=this){if((t=I(this,t,s,0)??g)===D)return;const r=this._$AH,i=t===g&&r!==g||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,a=t!==g&&(r===g||i);i&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class be{constructor(t,s,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}}const ye={I:H},$e=mt.litHtmlPolyfillSupport;$e?.(Z,H),(mt.litHtmlVersions??=[]).push("3.3.1");const xe=(e,t,s)=>{const r=s?.renderBefore??t;let i=r._$litPart$;if(i===void 0){const a=s?.renderBefore??null;r._$litPart$=i=new H(t.insertBefore(J(),a),a,void 0,s??{})}return i._$AI(e),i};const bt=globalThis;let y=class extends R{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=xe(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return D}};y._$litElement$=!0,y.finalized=!0,bt.litElementHydrateSupport?.({LitElement:y});const _e=bt.litElementPolyfillSupport;_e?.({LitElement:y}),(bt.litElementVersions??=[]).push("4.2.1");const x=e=>(t,s)=>{s!==void 0?s.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)};const we={attribute:!0,type:String,converter:rt,reflect:!1,hasChanged:ft},Ae=(e=we,t,s)=>{const{kind:r,metadata:i}=s;let a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(s.name,e),r==="accessor"){const{name:o}=s;return{set(d){const n=t.get.call(this);t.set.call(this,d),this.requestUpdate(o,n,e)},init(d){return d!==void 0&&this.C(o,void 0,e,d),d}}}if(r==="setter"){const{name:o}=s;return function(d){const n=this[o];t.call(this,d),this.requestUpdate(o,n,e)}}throw Error("Unsupported decorator location: "+r)};function f(e){return(t,s)=>typeof s=="object"?Ae(e,t,s):((r,i,a)=>{const o=i.hasOwnProperty(a);return i.constructor.createProperty(a,r),o?Object.getOwnPropertyDescriptor(i,a):void 0})(e,t,s)}function j(e){return f({...e,state:!0,attribute:!1})}const _=m`
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
`,T=m`
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
    --font-size-2xs: 0.7em;
    --font-size-xs: 0.75em;
    --font-size-sm: 0.875em;
    --font-size-md: 1em;
    --font-size-lg: 1.125em;
    --font-size-xl: 1.25em;
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
`,B=m`
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
    font-size: var(--font-size-lg, 1.125em);
    font-weight: var(--font-weight-semibold, 600);
    color: var(--color-text, #111827);
  }
`,Se=m`
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
    font-size: var(--font-size-2xs, 0.7em);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-text-subtle, #6b7280);
    font-weight: var(--font-weight-semibold, 600);
  }

  .pattern-table td {
    padding: var(--space-3, 12px) var(--space-4, 16px);
    font-size: var(--font-size-sm, 0.875em);
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
`,Ce=m`
  .pattern-section-title {
    margin: 0 0 var(--space-3, 12px) 0;
    font-size: var(--font-size-sm, 0.875em);
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
    font-size: var(--font-size-xs, 0.75em);
    color: var(--color-text, #111827);
    font-weight: var(--font-weight-medium, 500);
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }

  .pattern-chip:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 14px rgba(17, 24, 39, 0.08);
  }
`,De=m`
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
    font-size: var(--font-size-sm, 0.875em);
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
    font-size: var(--font-size-sm, 0.875em);
    font-weight: var(--font-weight-semibold, 600);
    color: var(--color-text, #111827);
  }

  .pattern-item-subtitle {
    font-size: var(--font-size-2xs, 0.7em);
    color: var(--color-text-subtle, #6b7280);
  }

  .pattern-link {
    background: none;
    border: none;
    color: var(--color-primary, #6d28d9);
    font-weight: var(--font-weight-semibold, 600);
    font-size: var(--font-size-sm, 0.875em);
    cursor: pointer;
    padding: 0;
  }

  .pattern-link:hover {
    text-decoration: underline;
  }
`,Pe=m`
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
    font-size: var(--font-size-lg, 1.125em);
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
    font-size: var(--font-size-sm, 0.875em);
    font-weight: var(--font-weight-medium, 500);
    color: var(--color-text, #111827);
  }

  .pattern-input {
    width: 100%;
    border: 1px solid var(--color-border, #e5e7eb);
    border-radius: var(--radius-sm, 8px);
    padding: 10px 12px;
    font-size: var(--font-size-sm, 0.875em);
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
    font-size: var(--font-size-sm, 0.875em);
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
    font-size: var(--font-size-sm, 0.875em);
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
`;var Ee=Object.defineProperty,ke=Object.getOwnPropertyDescriptor,nt=(e,t,s,r)=>{for(var i=r>1?void 0:r?ke(t,s):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,s,i):o(i))||i);return r&&i&&Ee(t,s,i),i};let Kt=0,q=class extends y{constructor(){super(...arguments),this.title="Title",this.collapsed=!1,this.contentId=`accordion-content-${++Kt}`,this.buttonId=`accordion-button-${Kt}`}toggle(){this.collapsed=!this.collapsed}render(){return l`
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
    `}};q.styles=[C,_,A,w,T,S,B,m`
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
        font-size: var(--font-size-md, 1em);
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
    `],nt([f({type:String})],q.prototype,"title",2),nt([f({type:String})],q.prototype,"icon",2),nt([j()],q.prototype,"collapsed",2),q=nt([x("accordion-widget")],q);var Oe=Object.defineProperty,Te=Object.getOwnPropertyDescriptor,yt=(e,t,s,r)=>{for(var i=r>1?void 0:r?Te(t,s):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,s,i):o(i))||i);return r&&i&&Oe(t,s,i),i};let G=class extends y{constructor(){super(...arguments),this.title="",this.icon=""}render(){return l`
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
    `}};G.styles=[C,_,A,w,T,S,B,m`
      :host {
        display: block;
      }

    `],yt([f({type:String})],G.prototype,"title",2),yt([f({type:String})],G.prototype,"icon",2),G=yt([x("card-widget")],G);var ze=Object.defineProperty,Me=Object.getOwnPropertyDescriptor,$t=(e,t,s,r)=>{for(var i=r>1?void 0:r?Me(t,s):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,s,i):o(i))||i);return r&&i&&ze(t,s,i),i};let Y=class extends y{constructor(){super(...arguments),this.label="About"}render(){const e=!!(this.text&&this.text.trim());return l`
      <div role="region" aria-label=${this.label}>
        <h2 class="sr-only">${this.label}</h2>
        ${e?l`<p class="text">${this.text}</p>`:l`<slot></slot>`}
      </div>
    `}};Y.styles=[C,_,A,w,T,S,B,m`
      :host {
        display: block;
      }

      .text {
        white-space: pre-line;
        margin: 0;
      }
    `],$t([f({type:String,attribute:"text"})],Y.prototype,"text",2),$t([f({type:String})],Y.prototype,"label",2),Y=$t([x("about-widget")],Y);const xt={ATTRIBUTE:1,CHILD:2},_t=e=>(...t)=>({_$litDirective$:e,values:t});let wt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,r){this._$Ct=t,this._$AM=s,this._$Ci=r}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};const{I:Ne}=ye,Zt=()=>document.createComment(""),Q=(e,t,s)=>{const r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(s===void 0){const a=r.insertBefore(Zt(),i),o=r.insertBefore(Zt(),i);s=new Ne(a,o,e,e.options)}else{const a=s._$AB.nextSibling,o=s._$AM,d=o!==e;if(d){let n;s._$AQ?.(e),s._$AM=e,s._$AP!==void 0&&(n=e._$AU)!==o._$AU&&s._$AP(n)}if(a!==i||d){let n=s._$AA;for(;n!==a;){const h=n.nextSibling;r.insertBefore(n,i),n=h}}}return s},U=(e,t,s=e)=>(e._$AI(t,s),e),je={},Ue=(e,t=je)=>e._$AH=t,Le=e=>e._$AH,At=e=>{e._$AR(),e._$AA.remove()};const Gt=(e,t,s)=>{const r=new Map;for(let i=t;i<=s;i++)r.set(e[i],i);return r},lt=_t(class extends wt{constructor(e){if(super(e),e.type!==xt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,s){let r;s===void 0?s=t:t!==void 0&&(r=t);const i=[],a=[];let o=0;for(const d of e)i[o]=r?r(d,o):o,a[o]=s(d,o),o++;return{values:a,keys:i}}render(e,t,s){return this.dt(e,t,s).values}update(e,[t,s,r]){const i=Le(e),{values:a,keys:o}=this.dt(t,s,r);if(!Array.isArray(i))return this.ut=o,a;const d=this.ut??=[],n=[];let h,v,c=0,u=i.length-1,p=0,b=a.length-1;for(;c<=u&&p<=b;)if(i[c]===null)c++;else if(i[u]===null)u--;else if(d[c]===o[p])n[p]=U(i[c],a[p]),c++,p++;else if(d[u]===o[b])n[b]=U(i[u],a[b]),u--,b--;else if(d[c]===o[b])n[b]=U(i[c],a[b]),Q(e,n[b+1],i[c]),c++,b--;else if(d[u]===o[p])n[p]=U(i[u],a[p]),Q(e,i[c],i[u]),u--,p++;else if(h===void 0&&(h=Gt(o,p,b),v=Gt(d,c,u)),h.has(d[c]))if(h.has(d[u])){const E=v.get(o[p]),Tt=E!==void 0?i[E]:null;if(Tt===null){const Xt=Q(e,i[c]);U(Xt,a[p]),n[p]=Xt}else n[p]=U(Tt,a[p]),Q(e,i[c],Tt),i[E]=null;p++}else At(i[u]),u--;else At(i[c]),c++;for(;p<=b;){const E=Q(e,n[b+1]);U(E,a[p]),n[p++]=E}for(;c<=u;){const E=i[c++];E!==null&&At(E)}return this.ut=o,Ue(e,n),D}});var Re=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,St=(e,t,s,r)=>{for(var i=r>1?void 0:r?Ie(t,s):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,s,i):o(i))||i);return r&&i&&Re(t,s,i),i};let X=class extends y{constructor(){super(...arguments),this.skillsData=null,this.sections=[]}updated(e){e.has("skillsData")&&this.transformSkillsData()}transformSkillsData(){if(!this.skillsData){this.sections=[];return}if(Array.isArray(this.skillsData)){this.sections=this.skillsData;return}const e=this.skillsData,t=[];e.required_skills?.length&&t.push({sectionTitle:"Required Skills",skills:e.required_skills}),e.additional_skills?.length&&t.push({sectionTitle:"Additional Skills",skills:e.additional_skills}),this.sections=t}getSections(){return this.sections}setSkillsData(e){this.skillsData=e}renderSection(e,t){return l`
      <div class="section" role="group" aria-label=${e.sectionTitle}>
        <p class="pattern-section-title">
          ${e.sectionTitle} (${e.skills.length})
        </p>
        <ul class="pattern-chip-list">
          ${lt(e.skills,(s,r)=>`${s}-${r}`,s=>l`
              <li class="pattern-chip">
                <span>${s}</span>
              </li>
            `)}
        </ul>
      </div>
    `}render(){return this.sections?.length?l`
      <section class="skills" role="region" aria-label="Employee skills">
        ${lt(this.sections,(e,t)=>`${e.sectionTitle}-${t}`,(e,t)=>this.renderSection(e,t))}
      </section>
    `:l`<p class="empty-state" role="status">No skills available.</p>`}};X.styles=[C,_,A,w,T,S,Ce,m`
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
        font-size: var(--font-size-sm, 0.875em);
        margin: 0;
      }
    `],St([f({attribute:!1})],X.prototype,"skillsData",2),St([j()],X.prototype,"sections",2),X=St([x("employee-skills-widget")],X);const Yt="important",He=" !"+Yt,Be=_t(class extends wt{constructor(e){if(super(e),e.type!==xt.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,s)=>{const r=e[s];return r==null?t:t+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(e,[t]){const{style:s}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const r of this.ft)t[r]==null&&(this.ft.delete(r),r.includes("-")?s.removeProperty(r):s[r]=null);for(const r in t){const i=t[r];if(i!=null){this.ft.add(r);const a=typeof i=="string"&&i.endsWith(He);r.includes("-")||a?s.setProperty(r,a?i.slice(0,-11):i,a?Yt:""):s[r]=i}}return D}});class Ct extends wt{constructor(t){if(super(t),this.it=g,t.type!==xt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===g||t==null)return this._t=void 0,this.it=t;if(t===D)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const s=[t];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}Ct.directiveName="unsafeHTML",Ct.resultType=1;class Dt extends Ct{}Dt.directiveName="unsafeSVG",Dt.resultType=2;const qe=_t(Dt),Pt=(e,t="")=>{if(!e||!e.icon)return l``;const s=e.icon[0],r=e.icon[1],i=e.icon[4],a=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${r}" fill="currentColor" aria-hidden="true"><path d="${i}"/></svg>`;return l`<span class="${t} inline-block">${qe(a)}</span>`};var We=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,Et=(e,t,s,r)=>{for(var i=r>1?void 0:r?Fe(t,s):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,s,i):o(i))||i);return r&&i&&We(t,s,i),i};let tt=class extends y{constructor(){super(...arguments),this.fields=[],this.columns=2}getIconTemplate(e){return e.iconTemplate?e.iconTemplate:e.icon?Pt(e.icon,"icon icon-sm text-primary"):null}render(){if(!this.fields||this.fields.length===0)return l`<p class="empty-state">No data available.</p>`;const t={"--columns":`${Math.max(1,this.columns||1)}`};return l`
      <div class="field-grid" style=${Be(t)}>
        ${lt(this.fields,(s,r)=>s.label??`${r}`,s=>{const r=this.getIconTemplate(s);return l`
              <div class="field-item">
                ${r?l`<div class="field-icon">${r}</div>`:""}
                <div class="field-content">
                  <div class="field-label">${s.label}</div>
                  <div
                    class=${`field-value ${s.highlight?"is-highlight":""}`}
                  >
                    ${s.title}
                  </div>
                </div>
              </div>
            `})}
      </div>
    `}};tt.styles=[C,_,A,w,S,m`
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
        font-size: 0.7em;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--color-text-subtle, #6b7280);
        font-weight: var(--font-weight-medium, 500);
      }

      .field-value {
        font-size: 1em;
        color: var(--color-text, #111827);
        font-weight: var(--font-weight-medium, 500);
      }

      .field-value.is-highlight {
        color: var(--color-primary, #6d28d9);
        font-weight: var(--font-weight-semibold, 600);
      }

      .empty-state {
        color: var(--color-text-subtle, #6b7280);
        font-size: 0.875em;
      }
    `],Et([f({type:Array,attribute:!1})],tt.prototype,"fields",2),Et([f({type:Number})],tt.prototype,"columns",2),tt=Et([x("field-list-widget")],tt);var Je={prefix:"fas",iconName:"map-pin",icon:[320,512,[128205],"f276","M192 284.4C256.1 269.9 304 212.5 304 144 304 64.5 239.5 0 160 0S16 64.5 16 144c0 68.5 47.9 125.9 112 140.4L128 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-195.6zM168 96c-30.9 0-56 25.1-56 56 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.4 46.6-104 104-104 13.3 0 24 10.7 24 24s-10.7 24-24 24z"]},Ve={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]},Ke={prefix:"fas",iconName:"mobile",icon:[384,512,[128241,"mobile-android","mobile-phone"],"f3ce","M80 0C44.7 0 16 28.7 16 64l0 384c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L80 0zm72 416l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]},Ze={icon:[448,512,[],"f077","M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},Ge={prefix:"fas",iconName:"building",icon:[384,512,[127970,61687],"f1ad","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM176 352l32 0c17.7 0 32 14.3 32 32l0 80-96 0 0-80c0-17.7 14.3-32 32-32zM96 112c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM240 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM96 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm144-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"]},Ye={prefix:"fas",iconName:"calendar",icon:[448,512,[128197,128198],"f133","M128 0C110.3 0 96 14.3 96 32l0 32-32 0C28.7 64 0 92.7 0 128l0 48 448 0 0-48c0-35.3-28.7-64-64-64l-32 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32-128 0 0-32c0-17.7-14.3-32-32-32zM0 224L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192-448 0z"]},Qe={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144,62470,"user-alt","user-large"],"f007","M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"]},Xe={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"]},ts={icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},es={prefix:"fas",iconName:"tag",icon:[512,512,[127991],"f02b","M32.5 96l0 149.5c0 17 6.7 33.3 18.7 45.3l192 192c25 25 65.5 25 90.5 0L483.2 333.3c25-25 25-65.5 0-90.5l-192-192C279.2 38.7 263 32 246 32L96.5 32c-35.3 0-64 28.7-64 64zm112 16a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},ss={prefix:"fas",iconName:"briefcase",icon:[512,512,[128188],"f0b1","M200 48l112 0c4.4 0 8 3.6 8 8l0 40-128 0 0-40c0-4.4 3.6-8 8-8zm-56 8l0 40-80 0C28.7 96 0 124.7 0 160l0 96 512 0 0-96c0-35.3-28.7-64-64-64l-80 0 0-40c0-30.9-25.1-56-56-56L200 0c-30.9 0-56 25.1-56 56zM512 304l-192 0 0 16c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-16-192 0 0 112c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-112z"]},is=Object.defineProperty,rs=Object.getOwnPropertyDescriptor,kt=(e,t,s,r)=>{for(var i=r>1?void 0:r?rs(t,s):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,s,i):o(i))||i);return r&&i&&is(t,s,i),i};const as=[{label:"Manager",title:"Maria Thompson",icon:"user",highlight:!0},{label:"Location",title:"Dallas Distribution Center, Building C",icon:"map-pin"},{label:"Work phone",title:"+1 (214) 555-0182",icon:"phone"},{label:"Job Title",title:"Forklift Operator",icon:"briefcase"},{label:"Work Schedule",title:"Mon-Fri, 6:00 AM – 2:30 PM",icon:"calendar"},{label:"Department",title:"Warehouse Operations",icon:"building"},{label:"Email",title:"james.davis@nova.com",icon:"envelope",highlight:!0},{label:"Nickname",title:"JD",icon:"tag"}];let et=class extends y{constructor(){super(),this.fields=[],this.columns=2,this.fields=[...as]}getIconFromString(e){const t={user:Qe,"map-pin":Je,phone:Xe,briefcase:ss,calendar:Ye,building:Ge,envelope:Ve,tag:es,mobile:Ke},s=t[e];return s||(console.warn(`[employee-details-widget] Unknown icon "${e}", defaulting to "user".`),t.user)}render(){const e=this.fields.map(t=>{const s=this.getIconFromString(t.icon);return{...t,iconTemplate:Pt(s,"icon icon-sm text-primary")}});return l`
      <section role="region">
        <field-list-widget
          .fields=${e}
          .columns=${this.columns}
        ></field-list-widget>
      </section>
    `}};et.styles=[C,_,A,w,T,S,B,m`
      :host {
        display: block;
      }
    `],kt([f({attribute:"fields",converter:{fromAttribute:e=>{if(!e)return[];try{return JSON.parse(e)}catch(t){return console.warn("[employee-details-widget] Unable to parse fields attribute, expected JSON array.",t),[]}}}})],et.prototype,"fields",2),kt([f({type:Number})],et.prototype,"columns",2),et=kt([x("employee-details-widget")],et);var os=Object.defineProperty,ns=Object.getOwnPropertyDescriptor,Qt=(e,t,s,r)=>{for(var i=r>1?void 0:r?ns(t,s):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,s,i):o(i))||i);return r&&i&&os(t,s,i),i};let ct=class extends y{constructor(){super(...arguments),this.fields=[]}render(){return this.fields?.length?l`
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
    `}renderInitials(e){const t=this.getInitials(e);return l` <span class="avatar">${t}</span> `}getInitials(e){if(e.firstName||e.lastName)return((e.firstName?.charAt(0)??"")+(e.lastName?.charAt(0)??"")).toUpperCase();const t=e.name.split(" ");return t.length>=2?(t[0][0]+t[1][0]).toUpperCase():t[0][0].toUpperCase()}};ct.styles=[C,_,A,w,S,m`
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
        font-size: var(--font-size-sm, 0.875em);
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
        font-size: var(--font-size-sm, 0.875em);
        font-weight: var(--font-weight-semibold, 600);
        color: var(--color-primary, #6d28d9);
        line-height: var(--line-height-tight, 1.2);
      }

      .role {
        font-size: var(--font-size-2xs, 0.7em);
        color: var(--color-text-subtle, #6b7280);
        line-height: var(--line-height-tight, 1.2);
        margin-top: 2px;
      }
    `],Qt([f({type:Array})],ct.prototype,"fields",2),ct=Qt([x("field-users-widget")],ct);var ls=Object.defineProperty,cs=Object.getOwnPropertyDescriptor,dt=(e,t,s,r)=>{for(var i=r>1?void 0:r?cs(t,s):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,s,i):o(i))||i);return r&&i&&ls(t,s,i),i};let W=class extends y{constructor(){super(...arguments),this.teamData=null,this.openStates=[],this.sections=[]}updated(e){e.has("teamData")&&(this.transformTeamData(),this.syncOpenStates())}syncOpenStates(){this.openStates=this.sections.map((e,t)=>this.openStates[t]??!0)}transformTeamData(){if(!this.teamData){this.sections=[];return}if(Array.isArray(this.teamData)){this.sections=this.teamData;return}const e=this.teamData,t=[];e.direct_manager&&t.push({sectionTitle:"Direct manager",users:[e.direct_manager]}),e.other_managers?.length&&t.push({sectionTitle:"Other managers",users:e.other_managers}),e.coworkers?.length&&t.push({sectionTitle:"Coworkers",users:e.coworkers}),e.direct_reports?.length&&t.push({sectionTitle:"Direct reports",users:e.direct_reports}),this.sections=t}getSections(){return this.sections}setTeamData(e){this.teamData=e}toggleSection(e){const t=[...this.openStates];t[e]=!t[e],this.openStates=t}renderSection(e,t){const s=this.openStates[t],r=`team-panel-${t}`,i=`team-toggle-${t}`;return l`
      <div class="section">
        <button
          id=${i}
          type="button"
          @click=${()=>this.toggleSection(t)}
          class="section-toggle"
          aria-expanded=${String(s)}
          aria-controls=${r}
        >
          <span class="section-title">
            ${e.sectionTitle} (${e.users.length})
          </span>
          <span class="chevron">
            ${Pt(s?Ze:ts,"icon icon-sm muted")}
          </span>
        </button>

        <div
          id=${r}
          role="region"
          aria-labelledby=${i}
          style=${s?"max-height: var(--team-section-max-height, 9999px); opacity: 1;":"max-height: 0; opacity: 0;"}
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
      ${lt(this.sections,(e,t)=>`${e.sectionTitle}-${t}`,(e,t)=>this.renderSection(e,t))}
    `}};W.styles=[C,_,A,w,T,S,B,m`
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
        font-size: var(--font-size-sm, 0.875em);
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
        font-size: var(--font-size-sm, 0.875em);
        margin: 0;
      }
    `],dt([f({attribute:!1})],W.prototype,"teamData",2),dt([j()],W.prototype,"openStates",2),dt([j()],W.prototype,"sections",2),W=dt([x("employee-team-widget")],W);var ds=Object.defineProperty,ps=Object.getOwnPropertyDescriptor,L=(e,t,s,r)=>{for(var i=r>1?void 0:r?ps(t,s):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,s,i):o(i))||i);return r&&i&&ds(t,s,i),i};let P=class extends y{constructor(){super(...arguments),this.contacts=[],this.addModalOpen=!1,this.draft={name:"",relationship:"",emergencyContact:!1},this.handleOpenClick=()=>{this.onRequestOpen?this.onRequestOpen():this.addModalOpen=!0},this.handleSubmit=e=>{e.preventDefault();const t={...this.draft};this.onAddContact?.(t),this.dispatchEvent(new CustomEvent("add-contact",{detail:t,bubbles:!0,composed:!0})),this.resetDraft(),this.addModalOpen=!1},this.handleClose=()=>{this.resetDraft(),this.addModalOpen=!1,this.onRequestClose?.()}}resetDraft(){this.draft={name:"",relationship:"",emergencyContact:!1}}render(){const e=this.contacts?.length>0;return l`
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
            ${e?this.contacts.map((t,s)=>l`
                    <tr data-row=${s}>
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
    `}};P.styles=[C,_,A,w,T,S,Se,Pe,De,m`
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
    `],L([f({attribute:!1})],P.prototype,"contacts",2),L([f({type:Boolean})],P.prototype,"addModalOpen",2),L([f({attribute:!1})],P.prototype,"onAddContact",2),L([f({attribute:!1})],P.prototype,"onRequestOpen",2),L([f({attribute:!1})],P.prototype,"onRequestClose",2),L([j()],P.prototype,"draft",2),P=L([x("employee-contacts-widget")],P);var hs=Object.defineProperty,us=Object.getOwnPropertyDescriptor,Ot=(e,t,s,r)=>{for(var i=r>1?void 0:r?us(t,s):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,s,i):o(i))||i);return r&&i&&hs(t,s,i),i};let pt=class extends y{constructor(){super(...arguments),this.open=!1,this.draft={name:"",relationship:"",emergencyContact:!1},this.submit=e=>{e.preventDefault(),this.dispatchEvent(new CustomEvent("submit-contact",{detail:{...this.draft},bubbles:!0,composed:!0})),this.close()}}createRenderRoot(){return this}willUpdate(e){e.has("open")&&this.open&&(this.draft={name:"",relationship:"",emergencyContact:!1})}close(){this.dispatchEvent(new CustomEvent("close-modal",{bubbles:!0,composed:!0}))}render(){return this.open?l`
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
    `:null}};Ot([f({type:Boolean})],pt.prototype,"open",2),Ot([j()],pt.prototype,"draft",2),pt=Ot([x("add-contact-modal")],pt);var fs=Object.defineProperty,ms=Object.getOwnPropertyDescriptor,st=(e,t,s,r)=>{for(var i=r>1?void 0:r?ms(t,s):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,s,i):o(i))||i);return r&&i&&fs(t,s,i),i};$.ProfileDetails=class extends y{constructor(){super(...arguments),this.profileData={},this.showSections=["about","details","skills","team","contacts"],this.sectionTitles={about:"About me",details:"Employee Details",skills:"Skills",team:"Team Members",contacts:"Contacts"},this.addContactOpen=!1,this.openAddContact=()=>{this.addContactOpen=!0},this.closeAddContact=()=>{this.addContactOpen=!1},this.handleAddContact=t=>{const s=this.profileData.contacts?.contacts??this.getDefaultContactsData().contacts??[];this.profileData={...this.profileData,contacts:{contacts:[...s,t]}},this.addContactOpen=!1}}getDefaultDetailsData(){return{headerTitle:"Employee details",fields:[{label:"Manager",title:"Maria Thompson",icon:"user",highlight:!0},{label:"Location",title:"Dallas Distribution Center, Building C",icon:"map-pin"},{label:"Work phone",title:"+1 (214) 555-0182",icon:"phone"},{label:"Job Title",title:"Forklift Operator",icon:"briefcase"},{label:"Work Schedule",title:"Mon-Fri, 6:00 AM – 2:30 PM",icon:"calendar"},{label:"Department",title:"Warehouse Operations",icon:"building"},{label:"Email",title:"james.davis@nova.com",icon:"envelope",highlight:!0},{label:"Nickname",title:"JD",icon:"tag"}]}}getDefaultAboutData(){return{text:"I'm a dedicated forklift operator with over 12 years of experience in warehouse operations and logistics. Safety is my top priority, and I take pride in maintaining a perfect safety record throughout my career. I'm certified in operating multiple types of forklifts and material handling equipment. When I'm not at work, I enjoy spending time with my family, mentoring young professionals in the industry, and playing basketball on weekends. I'm passionate about continuous improvement and always looking for ways to optimize our warehouse processes."}}getDefaultSkillsData(){return{required_skills:["Project Management","Team Leadership","Data Analysis"],additional_skills:["Public Speaking","Graphic Design","Cloud Computing"]}}getDefaultTeamData(){return{direct_manager:{avatar:"https://i.pravatar.cc/150?img=8",name:"Eve Davis",firstName:"Eve",lastName:"Davis",designation:"Shift Manager"},other_managers:[{avatar:"https://i.pravatar.cc/150?img=12",name:"Michael Thompson",firstName:"Michael",lastName:"Thompson",designation:"Operations Manager"},{avatar:"https://i.pravatar.cc/150?img=15",name:"Sarah Lee",firstName:"Sarah",lastName:"Lee",designation:"Department Manager"}],coworkers:[{avatar:"https://i.pravatar.cc/150?img=22",name:"John Carter",firstName:"John",lastName:"Carter",designation:"Senior Analyst"},{avatar:"https://i.pravatar.cc/150?img=31",name:"Priya Nair",firstName:"Priya",lastName:"Nair",designation:"HR Coordinator"},{avatar:"https://i.pravatar.cc/150?img=27",name:"David Miller",firstName:"David",lastName:"Miller",designation:"Software Engineer"}],direct_reports:[{avatar:"https://i.pravatar.cc/150?img=35",name:"Anita Sharma",firstName:"Anita",lastName:"Sharma",designation:"Junior Associate"},{avatar:"https://i.pravatar.cc/150?img=40",name:"Kevin Brooks",firstName:"Kevin",lastName:"Brooks",designation:"Trainee Engineer"}]}}getDefaultContactsData(){return{contacts:[{name:"Lisa Davis",relationship:"Spouse",emergencyContact:!0},{name:"Mark Johnson",relationship:"Brother",emergencyContact:!1},{name:"Priya Nair",relationship:"Friend",emergencyContact:!1}]}}shouldShowSection(t){return this.showSections.includes(t)}renderAboutSection(){if(!this.shouldShowSection("about"))return null;const t=this.profileData.about||this.getDefaultAboutData();return t.text?l`
      <card-widget title=${this.sectionTitles.about}>
        <about-widget .text=${t.text}></about-widget>
      </card-widget>
    `:l`<card-widget title=${this.sectionTitles.about}>
        <p class="text-gray-500 text-sm p-2">No about information available.</p>
      </card-widget>`}renderDetailsSection(){if(!this.shouldShowSection("details"))return null;const t=this.profileData.details||this.getDefaultDetailsData();return!t.fields||t.fields.length===0?l`<accordion-widget title=${this.sectionTitles.details}>
        <p class="text-gray-500 text-sm p-2">No employee details available.</p>
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
        <p class="text-gray-500 text-sm p-2">No skills available.</p>
      </accordion-widget>`}renderTeamSection(){if(!this.shouldShowSection("team"))return null;const t=this.profileData.team||this.getDefaultTeamData();return t.direct_manager||t.other_managers&&t.other_managers.length>0||t.coworkers&&t.coworkers.length>0||t.direct_reports&&t.direct_reports.length>0?l`
      <card-widget title=${this.sectionTitles.team}>
        <employee-team-widget .teamData=${t}></employee-team-widget>
      </card-widget>
    `:l`<card-widget title=${this.sectionTitles.team}>
        <p class="text-gray-500 text-sm p-2">No team information available.</p>
      </card-widget>`}renderContactsSection(){if(!this.shouldShowSection("contacts"))return null;const t=this.profileData.contacts||this.getDefaultContactsData();return!t.contacts||t.contacts.length===0?l`
        <card-widget title=${this.sectionTitles.contacts}>
          <p class="text-gray-500 text-sm p-2">
            No contacts information available.
          </p>
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
    `}},$.ProfileDetails.styles=[C,_,A,w,T,S,B,m`
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
    `],st([f({type:Object,attribute:!1})],$.ProfileDetails.prototype,"profileData",2),st([f({type:Array,attribute:!1})],$.ProfileDetails.prototype,"showSections",2),st([f({type:Object,attribute:!1})],$.ProfileDetails.prototype,"sectionTitles",2),st([j()],$.ProfileDetails.prototype,"addContactOpen",2),$.ProfileDetails=st([x("profile-details")],$.ProfileDetails),Object.defineProperty($,Symbol.toStringTag,{value:"Module"})}));
