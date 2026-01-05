(function(u,m){typeof exports=="object"&&typeof module<"u"?m(exports):typeof define=="function"&&define.amd?define(["exports"],m):(u=typeof globalThis<"u"?globalThis:u||self,m(u.AccordionWidget={}))})(this,(function(u){"use strict";const m=globalThis,R=m.ShadowRoot&&(m.ShadyCSS===void 0||m.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,I=Symbol(),J=new WeakMap;let K=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==I)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(R&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=J.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&J.set(e,t))}return t}toString(){return this.cssText}};const ct=o=>new K(typeof o=="string"?o:o+"",void 0,I),f=(o,...t)=>{const e=o.length===1?o[0]:t.reduce(((r,s,i)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[i+1]),o[0]);return new K(e,o,I)},dt=(o,t)=>{if(R)o.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const r=document.createElement("style"),s=m.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=e.cssText,o.appendChild(r)}},Z=R?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return ct(e)})(o):o;const{is:pt,defineProperty:ht,getOwnPropertyDescriptor:ft,getOwnPropertyNames:ut,getOwnPropertySymbols:gt,getPrototypeOf:mt}=Object,U=globalThis,F=U.trustedTypes,bt=F?F.emptyScript:"",vt=U.reactiveElementPolyfillSupport,E=(o,t)=>o,T={toAttribute(o,t){switch(t){case Boolean:o=o?bt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},D=(o,t)=>!pt(o,t),Y={attribute:!0,type:String,converter:T,reflect:!1,useDefault:!1,hasChanged:D};Symbol.metadata??=Symbol("metadata"),U.litPropertyMetadata??=new WeakMap;let _=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,e);s!==void 0&&ht(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){const{get:s,set:i}=ft(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){const l=s?.call(this);i?.call(this,n),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Y}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const t=mt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const e=this.properties,r=[...ut(e),...gt(e)];for(const s of r)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,s]of e)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const s=this._$Eu(e,r);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)e.unshift(Z(s))}else t!==void 0&&e.push(Z(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return dt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const i=(r.converter?.toAttribute!==void 0?r.converter:T).toAttribute(e,r.type);this._$Em=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,e){const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const i=r.getPropertyOptions(s),n=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:T;this._$Em=s;const l=n.fromAttribute(e,i.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){const s=this.constructor,i=this[t];if(r??=s.getPropertyOptions(t),!((r.hasChanged??D)(i,e)||r.useDefault&&r.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:s,wrapped:i},n){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),i!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,i]of r){const{wrapped:n}=i,l=this[s];n!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,i,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((r=>r.hostUpdate?.())),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[E("elementProperties")]=new Map,_[E("finalized")]=new Map,vt?.({ReactiveElement:_}),(U.reactiveElementVersions??=[]).push("2.1.1");const L=globalThis,M=L.trustedTypes,G=M?M.createPolicy("lit-html",{createHTML:o=>o}):void 0,Q="$lit$",b=`lit$${Math.random().toFixed(9).slice(2)}$`,X="?"+b,$t=`<${X}>`,$=document,S=()=>$.createComment(""),P=o=>o===null||typeof o!="object"&&typeof o!="function",W=Array.isArray,xt=o=>W(o)||typeof o?.[Symbol.iterator]=="function",B=`[ 	
\f\r]`,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tt=/-->/g,et=/>/g,x=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),rt=/'/g,st=/"/g,ot=/^(?:script|style|textarea|title)$/i,yt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),it=yt(1),w=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),nt=new WeakMap,y=$.createTreeWalker($,129);function at(o,t){if(!W(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return G!==void 0?G.createHTML(t):t}const _t=(o,t)=>{const e=o.length-1,r=[];let s,i=t===2?"<svg>":t===3?"<math>":"",n=z;for(let l=0;l<e;l++){const a=o[l];let p,h,c=-1,g=0;for(;g<a.length&&(n.lastIndex=g,h=n.exec(a),h!==null);)g=n.lastIndex,n===z?h[1]==="!--"?n=tt:h[1]!==void 0?n=et:h[2]!==void 0?(ot.test(h[2])&&(s=RegExp("</"+h[2],"g")),n=x):h[3]!==void 0&&(n=x):n===x?h[0]===">"?(n=s??z,c=-1):h[1]===void 0?c=-2:(c=n.lastIndex-h[2].length,p=h[1],n=h[3]===void 0?x:h[3]==='"'?st:rt):n===st||n===rt?n=x:n===tt||n===et?n=z:(n=x,s=void 0);const v=n===x&&o[l+1].startsWith("/>")?" ":"";i+=n===z?a+$t:c>=0?(r.push(p),a.slice(0,c)+Q+a.slice(c)+b+v):a+b+(c===-2?l:v)}return[at(o,i+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class C{constructor({strings:t,_$litType$:e},r){let s;this.parts=[];let i=0,n=0;const l=t.length-1,a=this.parts,[p,h]=_t(t,e);if(this.el=C.createElement(p,r),y.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=y.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(Q)){const g=h[n++],v=s.getAttribute(c).split(b),N=/([.?@])?(.*)/.exec(g);a.push({type:1,index:i,name:N[2],strings:v,ctor:N[1]==="."?At:N[1]==="?"?Et:N[1]==="@"?St:H}),s.removeAttribute(c)}else c.startsWith(b)&&(a.push({type:6,index:i}),s.removeAttribute(c));if(ot.test(s.tagName)){const c=s.textContent.split(b),g=c.length-1;if(g>0){s.textContent=M?M.emptyScript:"";for(let v=0;v<g;v++)s.append(c[v],S()),y.nextNode(),a.push({type:2,index:++i});s.append(c[g],S())}}}else if(s.nodeType===8)if(s.data===X)a.push({type:2,index:i});else{let c=-1;for(;(c=s.data.indexOf(b,c+1))!==-1;)a.push({type:7,index:i}),c+=b.length-1}i++}}static createElement(t,e){const r=$.createElement("template");return r.innerHTML=t,r}}function A(o,t,e=o,r){if(t===w)return t;let s=r!==void 0?e._$Co?.[r]:e._$Cl;const i=P(t)?void 0:t._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(o),s._$AT(o,e,r)),r!==void 0?(e._$Co??=[])[r]=s:e._$Cl=s),s!==void 0&&(t=A(o,s._$AS(o,t.values),s,r)),t}class wt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,s=(t?.creationScope??$).importNode(e,!0);y.currentNode=s;let i=y.nextNode(),n=0,l=0,a=r[0];for(;a!==void 0;){if(n===a.index){let p;a.type===2?p=new k(i,i.nextSibling,this,t):a.type===1?p=new a.ctor(i,a.name,a.strings,this,t):a.type===6&&(p=new Pt(i,this,t)),this._$AV.push(p),a=r[++l]}n!==a?.index&&(i=y.nextNode(),n++)}return y.currentNode=$,s}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=A(this,t,e),P(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==w&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):xt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T($.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=C.createElement(at(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===s)this._$AH.p(e);else{const i=new wt(s,this),n=i.u(this.options);i.p(e),this.T(n),this._$AH=i}}_$AC(t){let e=nt.get(t.strings);return e===void 0&&nt.set(t.strings,e=new C(t)),e}k(t){W(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,s=0;for(const i of t)s===e.length?e.push(r=new k(this.O(S()),this.O(S()),this,this.options)):r=e[s],r._$AI(i),s++;s<e.length&&(this._$AR(r&&r._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,s,i){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=d}_$AI(t,e=this,r,s){const i=this.strings;let n=!1;if(i===void 0)t=A(this,t,e,0),n=!P(t)||t!==this._$AH&&t!==w,n&&(this._$AH=t);else{const l=t;let a,p;for(t=i[0],a=0;a<i.length-1;a++)p=A(this,l[r+a],e,a),p===w&&(p=this._$AH[a]),n||=!P(p)||p!==this._$AH[a],p===d?t=d:t!==d&&(t+=(p??"")+i[a+1]),this._$AH[a]=p}n&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class At extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Et extends H{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class St extends H{constructor(t,e,r,s,i){super(t,e,r,s,i),this.type=5}_$AI(t,e=this){if((t=A(this,t,e,0)??d)===w)return;const r=this._$AH,s=t===d&&r!==d||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==d&&(r===d||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Pt{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){A(this,t)}}const zt=L.litHtmlPolyfillSupport;zt?.(C,k),(L.litHtmlVersions??=[]).push("3.3.1");const Ct=(o,t,e)=>{const r=e?.renderBefore??t;let s=r._$litPart$;if(s===void 0){const i=e?.renderBefore??null;r._$litPart$=s=new k(t.insertBefore(S(),i),i,void 0,e??{})}return s._$AI(o),s};const q=globalThis;class O extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ct(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return w}}O._$litElement$=!0,O.finalized=!0,q.litElementHydrateSupport?.({LitElement:O});const kt=q.litElementPolyfillSupport;kt?.({LitElement:O}),(q.litElementVersions??=[]).push("4.2.1");const Ot=o=>(t,e)=>{e!==void 0?e.addInitializer((()=>{customElements.define(o,t)})):customElements.define(o,t)};const Ut={attribute:!0,type:String,converter:T,reflect:!1,hasChanged:D},Tt=(o=Ut,t,e)=>{const{kind:r,metadata:s}=e;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),r==="setter"&&((o=Object.create(o)).wrapped=!0),i.set(e.name,o),r==="accessor"){const{name:n}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,o)},init(l){return l!==void 0&&this.C(n,void 0,o,l),l}}}if(r==="setter"){const{name:n}=e;return function(l){const a=this[n];t.call(this,l),this.requestUpdate(n,a,o)}}throw Error("Unsupported decorator location: "+r)};function V(o){return(t,e)=>typeof e=="object"?Tt(o,t,e):((r,s,i)=>{const n=s.hasOwnProperty(i);return s.constructor.createProperty(i,r),n?Object.getOwnPropertyDescriptor(s,i):void 0})(o,t,e)}function Mt(o){return V({...o,state:!0,attribute:!1})}const Ht=f`
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
`,jt=f`
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
`,Nt=f`
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
`,Rt=f`
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
`,It=f`
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
`,Dt=f`
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
`,Lt=f`
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
`;f`
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
`,f`
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
`,f`
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
`,f`
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
    font-size: var(--font-size-lg, 1.125em);
    font-weight: var(--font-weight-semibold, 600);
    // color: var(--color-text, text-primary);
  }

  .pattern-heading-subtitle {
    margin: 0;
    font-size: var(--font-size-2xs, 0.7em);
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
`,f`
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
`;var Wt=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,j=(o,t,e,r)=>{for(var s=r>1?void 0:r?Bt(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&Wt(t,e,s),s};let lt=0;u.AccordionWidget=class extends O{constructor(){super(...arguments),this.title="Title",this.collapsed=!1,this.contentId=`accordion-content-${++lt}`,this.buttonId=`accordion-button-${lt}`}toggle(){this.collapsed=!this.collapsed}render(){return it`
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
            ${this.icon?it`<span>${this.icon}</span>`:null}
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
    `}},u.AccordionWidget.styles=[Dt,Ht,Nt,jt,Rt,It,Lt,f`
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
    `],j([V({type:String})],u.AccordionWidget.prototype,"title",2),j([V({type:String})],u.AccordionWidget.prototype,"icon",2),j([Mt()],u.AccordionWidget.prototype,"collapsed",2),u.AccordionWidget=j([Ot("accordion-widget")],u.AccordionWidget),Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})}));
