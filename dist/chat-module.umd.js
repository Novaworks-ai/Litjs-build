(function(u,y){typeof exports=="object"&&typeof module<"u"?y(exports):typeof define=="function"&&define.amd?define(["exports"],y):(u=typeof globalThis<"u"?globalThis:u||self,y(u.ChatModule={}))})(this,(function(u){"use strict";const y=globalThis,V=y.ShadowRoot&&(y.ShadyCSS===void 0||y.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),it=new WeakMap;let st=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(V&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=it.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&it.set(e,t))}return t}toString(){return this.cssText}};const xt=s=>new st(typeof s=="string"?s:s+"",void 0,W),m=(s,...t)=>{const e=s.length===1?s[0]:t.reduce(((o,i,r)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[r+1]),s[0]);return new st(e,s,W)},wt=(s,t)=>{if(V)s.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const o=document.createElement("style"),i=y.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=e.cssText,s.appendChild(o)}},rt=V?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return xt(e)})(s):s;const{is:yt,defineProperty:_t,getOwnPropertyDescriptor:$t,getOwnPropertyNames:kt,getOwnPropertySymbols:Ct,getPrototypeOf:At}=Object,N=globalThis,at=N.trustedTypes,Et=at?at.emptyScript:"",St=N.reactiveElementPolyfillSupport,P=(s,t)=>s,R={toAttribute(s,t){switch(t){case Boolean:s=s?Et:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},Y=(s,t)=>!yt(s,t),nt={attribute:!0,type:String,converter:R,reflect:!1,useDefault:!1,hasChanged:Y};Symbol.metadata??=Symbol("metadata"),N.litPropertyMetadata??=new WeakMap;let z=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=nt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(t,o,e);i!==void 0&&_t(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){const{get:i,set:r}=$t(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:i,set(a){const l=i?.call(this);r?.call(this,a),this.requestUpdate(t,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??nt}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;const t=At(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){const e=this.properties,o=[...kt(e),...Ct(e)];for(const i of o)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[o,i]of e)this.elementProperties.set(o,i)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const i=this._$Eu(e,o);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const i of o)e.unshift(rt(i))}else t!==void 0&&e.push(rt(t));return e}static _$Eu(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return wt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ET(t,e){const o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(i!==void 0&&o.reflect===!0){const r=(o.converter?.toAttribute!==void 0?o.converter:R).toAttribute(e,o.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const o=this.constructor,i=o._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const r=o.getPropertyOptions(i),a=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:R;this._$Em=i;const l=a.fromAttribute(e,r.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,e,o){if(t!==void 0){const i=this.constructor,r=this[t];if(o??=i.getPropertyOptions(t),!((o.hasChanged??Y)(r,e)||o.useDefault&&o.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,o))))return;this.C(t,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:o,reflect:i,wrapped:r},a){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),r!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||o||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,r]of o){const{wrapped:a}=r,l=this[i];a!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,r,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((o=>o.hostUpdate?.())),this.update(e)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};z.elementStyles=[],z.shadowRootOptions={mode:"open"},z[P("elementProperties")]=new Map,z[P("finalized")]=new Map,St?.({ReactiveElement:z}),(N.reactiveElementVersions??=[]).push("2.1.1");const F=globalThis,L=F.trustedTypes,lt=L?L.createPolicy("lit-html",{createHTML:s=>s}):void 0,ct="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,dt="?"+_,zt=`<${dt}>`,C=document,T=()=>C.createComment(""),I=s=>s===null||typeof s!="object"&&typeof s!="function",G=Array.isArray,Mt=s=>G(s)||typeof s?.[Symbol.iterator]=="function",Z=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ht=/-->/g,pt=/>/g,A=RegExp(`>|${Z}(?:([^\\s"'>=/]+)(${Z}*=${Z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ut=/'/g,ft=/"/g,mt=/^(?:script|style|textarea|title)$/i,Ot=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),h=Ot(1),M=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),bt=new WeakMap,E=C.createTreeWalker(C,129);function vt(s,t){if(!G(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return lt!==void 0?lt.createHTML(t):t}const Pt=(s,t)=>{const e=s.length-1,o=[];let i,r=t===2?"<svg>":t===3?"<math>":"",a=U;for(let l=0;l<e;l++){const n=s[l];let d,p,c=-1,w=0;for(;w<n.length&&(a.lastIndex=w,p=a.exec(n),p!==null);)w=a.lastIndex,a===U?p[1]==="!--"?a=ht:p[1]!==void 0?a=pt:p[2]!==void 0?(mt.test(p[2])&&(i=RegExp("</"+p[2],"g")),a=A):p[3]!==void 0&&(a=A):a===A?p[0]===">"?(a=i??U,c=-1):p[1]===void 0?c=-2:(c=a.lastIndex-p[2].length,d=p[1],a=p[3]===void 0?A:p[3]==='"'?ft:ut):a===ft||a===ut?a=A:a===ht||a===pt?a=U:(a=A,i=void 0);const k=a===A&&s[l+1].startsWith("/>")?" ":"";r+=a===U?n+zt:c>=0?(o.push(d),n.slice(0,c)+ct+n.slice(c)+_+k):n+_+(c===-2?l:k)}return[vt(s,r+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class D{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let r=0,a=0;const l=t.length-1,n=this.parts,[d,p]=Pt(t,e);if(this.el=D.createElement(d,o),E.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=E.nextNode())!==null&&n.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(ct)){const w=p[a++],k=i.getAttribute(c).split(_),q=/([.?@])?(.*)/.exec(w);n.push({type:1,index:r,name:q[2],strings:k,ctor:q[1]==="."?It:q[1]==="?"?Ut:q[1]==="@"?Dt:B}),i.removeAttribute(c)}else c.startsWith(_)&&(n.push({type:6,index:r}),i.removeAttribute(c));if(mt.test(i.tagName)){const c=i.textContent.split(_),w=c.length-1;if(w>0){i.textContent=L?L.emptyScript:"";for(let k=0;k<w;k++)i.append(c[k],T()),E.nextNode(),n.push({type:2,index:++r});i.append(c[w],T())}}}else if(i.nodeType===8)if(i.data===dt)n.push({type:2,index:r});else{let c=-1;for(;(c=i.data.indexOf(_,c+1))!==-1;)n.push({type:7,index:r}),c+=_.length-1}r++}}static createElement(t,e){const o=C.createElement("template");return o.innerHTML=t,o}}function O(s,t,e=s,o){if(t===M)return t;let i=o!==void 0?e._$Co?.[o]:e._$Cl;const r=I(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(s),i._$AT(s,e,o)),o!==void 0?(e._$Co??=[])[o]=i:e._$Cl=i),i!==void 0&&(t=O(s,i._$AS(s,t.values),i,o)),t}class Tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,i=(t?.creationScope??C).importNode(e,!0);E.currentNode=i;let r=E.nextNode(),a=0,l=0,n=o[0];for(;n!==void 0;){if(a===n.index){let d;n.type===2?d=new j(r,r.nextSibling,this,t):n.type===1?d=new n.ctor(r,n.name,n.strings,this,t):n.type===6&&(d=new jt(r,this,t)),this._$AV.push(d),n=o[++l]}a!==n?.index&&(r=E.nextNode(),a++)}return E.currentNode=C,i}p(t){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class j{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,i){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),I(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==M&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Mt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==f&&I(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=D.createElement(vt(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(e);else{const r=new Tt(i,this),a=r.u(this.options);r.p(e),this.T(a),this._$AH=r}}_$AC(t){let e=bt.get(t.strings);return e===void 0&&bt.set(t.strings,e=new D(t)),e}k(t){G(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const r of t)i===e.length?e.push(o=new j(this.O(T()),this.O(T()),this,this.options)):o=e[i],o._$AI(r),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class B{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,i,r){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=f}_$AI(t,e=this,o,i){const r=this.strings;let a=!1;if(r===void 0)t=O(this,t,e,0),a=!I(t)||t!==this._$AH&&t!==M,a&&(this._$AH=t);else{const l=t;let n,d;for(t=r[0],n=0;n<r.length-1;n++)d=O(this,l[o+n],e,n),d===M&&(d=this._$AH[n]),a||=!I(d)||d!==this._$AH[n],d===f?t=f:t!==f&&(t+=(d??"")+r[n+1]),this._$AH[n]=d}a&&!i&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class It extends B{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}}class Ut extends B{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}}class Dt extends B{constructor(t,e,o,i,r){super(t,e,o,i,r),this.type=5}_$AI(t,e=this){if((t=O(this,t,e,0)??f)===M)return;const o=this._$AH,i=t===f&&o!==f||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==f&&(o===f||i);i&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class jt{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const Ht=F.litHtmlPolyfillSupport;Ht?.(D,j),(F.litHtmlVersions??=[]).push("3.3.1");const Nt=(s,t,e)=>{const o=e?.renderBefore??t;let i=o._$litPart$;if(i===void 0){const r=e?.renderBefore??null;o._$litPart$=i=new j(t.insertBefore(T(),r),r,void 0,e??{})}return i._$AI(s),i};const J=globalThis;class S extends z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Nt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return M}}S._$litElement$=!0,S.finalized=!0,J.litElementHydrateSupport?.({LitElement:S});const Rt=J.litElementPolyfillSupport;Rt?.({LitElement:S}),(J.litElementVersions??=[]).push("4.2.1");const K=s=>(t,e)=>{e!==void 0?e.addInitializer((()=>{customElements.define(s,t)})):customElements.define(s,t)};const Lt={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:Y},Bt=(s=Lt,t,e)=>{const{kind:o,metadata:i}=e;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),o==="setter"&&((s=Object.create(s)).wrapped=!0),r.set(e.name,s),o==="accessor"){const{name:a}=e;return{set(l){const n=t.get.call(this);t.set.call(this,l),this.requestUpdate(a,n,s)},init(l){return l!==void 0&&this.C(a,void 0,s,l),l}}}if(o==="setter"){const{name:a}=e;return function(l){const n=this[a];t.call(this,l),this.requestUpdate(a,n,s)}}throw Error("Unsupported decorator location: "+o)};function b(s){return(t,e)=>typeof e=="object"?Bt(s,t,e):((o,i,r)=>{const a=i.hasOwnProperty(r);return i.constructor.createProperty(r,o),a?Object.getOwnPropertyDescriptor(i,r):void 0})(s,t,e)}function $(s){return b({...s,state:!0,attribute:!1})}const X=m`
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
`,Q=m`
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
`,tt=m`
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
`;m`
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
`,m`
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
`;const et=m`
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
`;m`
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
`,m`
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
`,m`
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
`,m`
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
`,m`
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
`,m`
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
`;const qt=[et,X,tt,Q,m`
    :host {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 999;
    }

    .launcher {
      position: relative;
      width: 72px;
      height: 72px;
    }

    .fab {
      position: absolute;
      inset: 0;
      width: 72px;
      height: 72px;
      border-radius: 50%;
      border: none;
      background: linear-gradient(135deg, #7c3aed, #6366f1);
      color: #fff;
      font-size: 26px;
      font-weight: 800;
      cursor: pointer;
      box-shadow: 0 18px 45px rgba(109, 40, 217, 0.35);
      transition: transform 0.18s ease, box-shadow 0.18s ease;
    }

    .fab:hover {
      transform: translateY(-2px);
      box-shadow: 0 22px 55px rgba(99, 102, 241, 0.38);
    }

    .sheet {
      position: absolute;
      bottom: 88px;
      right: 0;
      width: min(640px, calc(100vw - 32px));
      height: 560px;
    }

    .sheet-content {
      position: relative;
      width: 100%;
      height: 100%;
    }

    chat-window {
      position: absolute;
      inset: 0;
    }

    .drawer-layer {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      pointer-events: auto;
      z-index: 3;
    }

    .drawer {
      width: 320px;
      max-width: 100%;
      height: 100%;
      background: var(--color-surface, #ffffff);
      border-radius: 16px;
      box-shadow: 0 12px 34px rgba(17, 24, 39, 0.14);
      border: 1px solid var(--color-border, #e5e7eb);
      transform: translateX(-104%);
      transition: transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
        opacity 180ms ease;
      opacity: 0;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .drawer.open {
      transform: translateX(0);
      opacity: 1;
    }

    @media (max-width: 900px) {
      :host {
        right: 12px;
        bottom: 12px;
      }

      .sheet {
        width: min(560px, calc(100vw - 24px));
        height: 520px;
      }

      .overlay {
        padding: 12px;
      }
    }

    @media (max-width: 640px) {
      .sheet {
        width: calc(100vw - 16px);
        height: 500px;
        right: -8px;
      }

      .drawer {
        width: 100%;
        transform: translateX(-100%);
      }
    }
  `],Vt=[et,X,tt,Q,m`
    :host {
      display: block;
      width: 320px;
    }

    .panel {
      padding: 12px;
      background: var(--color-surface, #ffffff);
      border-right: 1px solid var(--color-border, #e5e7eb);
      height: 100%;
      box-sizing: border-box;
      overflow-y: auto;
    }

    .panel-header {
      display: flex;
      flex-direction: column;
      gap: 2px;
      margin-bottom: 12px;
    }

    .panel-header h3 {
      margin: 0;
      font-size: 1em;
      font-weight: 700;
      color: var(--color-text, #111827);
    }

    .muted {
      margin: 0;
      color: var(--color-text-subtle, #6b7280);
      font-size: 0.85em;
    }

    .list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding-right: 10px;
    }

    .item {
      width: 100%;
      text-align: left;
      border: none;
      background: var(--color-surface, #ffffff);
      border-radius: 10px;
      padding: 12px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      gap: 6px;
      transition: border-color 0.2s ease, box-shadow 0.2s ease,
        background-color 0.2s ease;
      box-shadow: 0 0 5px var(--color-border, #e5e7eb);
    }

    .item.active {
      background: #f4f4f5;
      box-shadow: none;
      border-left: 4px solid var(--color-primary, #6d28d9);
      padding-left: 8px;
    }

    .item:hover {
      background: var(--color-surface-alt, #f9fafb);
    }

    .item-top {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 6px;
    }

    .item-title {
      font-size: 0.95em;
      font-weight: 700;
      color: var(--color-text, #111827);
    }

    .item-sub {
      font-size: 0.85em;
      color: var(--color-text-subtle, #6b7280);
    }

    .item-status {
      margin-top: 6px;
      width: 100%;
    }

    .item-status .badge {
      width: 100%;
      justify-content: center;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      padding: 6px 10px;
      font-size: 0.78em;
      font-weight: 700;
    }

    .badge-primary {
      background: #e9d5ff;
      color: #6d28d9;
    }

    .badge-warn {
      background: #ffedd5;
      color: #9a3412;
    }

    .badge-success {
      background: #dcfce7;
      color: #15803d;
    }

    .badge-info {
      background: #e0e7ff;
      color: #4338ca;
    }
  `],Wt=[et,X,tt,Q,m`
    :host {
      display: block;
      height: 100%;
    }

    .window {
      background: var(--color-surface, #ffffff);
      height: 100%;
      border-radius: 16px;
      box-shadow: 0 18px 50px rgba(17, 24, 39, 0.12);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      border: 1px solid var(--color-border, #e5e7eb);
    }

    .header {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      padding: 12px 14px;
      border-bottom: 1px solid var(--color-border, #e5e7eb);
      gap: 10px;
    }

    .icon-btn {
      background: transparent;
      border: none;
      color: var(--color-text, #111827);
      cursor: pointer;
      width: 32px;
      height: 32px;
      border-radius: 8px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s ease;
      font-size: 20px;
    }

    .icon-btn:hover {
      background: var(--color-surface-alt, #f3f4f6);
    }

    .icon-btn.close {
      font-size: 24px;
      line-height: 1;
    }

    .icon-bars,
    .icon-bars::before,
    .icon-bars::after {
      display: block;
      width: 14px;
      height: 2px;
      background: currentColor;
      border-radius: 4px;
      position: relative;
      content: "";
    }

    .icon-bars::before {
      position: absolute;
      top: -5px;
      left: 0;
    }

    .icon-bars::after {
      position: absolute;
      bottom: -5px;
      left: 0;
    }

    .agent {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .agent-meta {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .agent-name {
      font-weight: 700;
      color: var(--color-text, #111827);
    }

    .agent-role {
      color: var(--color-text-subtle, #6b7280);
      font-size: 0.85em;
    }

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: linear-gradient(135deg, #a855f7, #6366f1);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-weight: 700;
      overflow: hidden;
    }

    .avatar-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .avatar-fallback {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .avatar.tiny {
      width: 28px;
      height: 28px;
      font-size: 0.8em;
    }

    .avatar.tiny.user {
      background: linear-gradient(135deg, #06b6d4, #2563eb);
    }

    .spacer {
      width: 28px;
    }

    .chat-title {
      padding: 0 16px;
      font-weight: 700;
      color: var(--color-text, #111827);
      margin-bottom: 4px;
    }

    .messages {
      flex: 1;
      overflow-y: auto;
      padding: 8px 14px 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      background: var(--color-surface-alt, #f8fafc);
    }

    .bubble-row {
      display: grid;
      grid-template-columns: 36px 1fr 36px;
      align-items: end;
      gap: 8px;
    }

    .bubble-row.outgoing {
      justify-items: end;
    }

    .bubble {
      max-width: 100%;
      border-radius: 14px;
      padding: 10px 12px;
      background: #ede9fe;
      color: #1f2937;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
    }

    .bubble-row.outgoing .bubble {
      background: #7c3aed;
      color: #fff;
    }

    .text {
      margin: 0 0 4px 0;
      line-height: 1.4;
    }

    .meta {
      font-size: 0.78em;
      color: rgba(255, 255, 255, 0.8);
    }

    .bubble-row.incoming .meta {
      color: #6b7280;
    }

    .empty {
      text-align: center;
      color: var(--color-text-subtle, #6b7280);
      padding: 32px 12px;
    }

    .composer {
      padding: 12px;
      border-top: 1px solid var(--color-border, #e5e7eb);
      background: var(--color-surface, #ffffff);
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .composer-shell {
      position: relative;
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      gap: 10px;
      border: 1px solid var(--color-border, #e5e7eb);
      background: #fff;
      border-radius: 18px;
      padding: 6px 10px;
      box-shadow: inset 0 1px 2px rgba(17, 24, 39, 0.04);
    }

    .icon-inline {
      width: 34px;
      height: 34px;
      border-radius: 12px;
      border: none;
      background: #f4f4f6;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background-color 0.18s ease, transform 0.12s ease;
    }

    .icon-inline svg {
      width: 18px;
      height: 18px;
    }

    .icon-inline:hover {
      background: #ede9fe;
    }

    .icon-inline:active {
      transform: translateY(1px);
    }

    .input {
      width: 100%;
      border: none;
      resize: none;
      padding: 6px 4px;
      font-size: 0.95em;
      font-family: inherit;
      min-height: 34px;
      box-sizing: border-box;
      background: transparent;
    }

    .input:focus {
      outline: none;
    }

    .right-actions {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .send-inline {
      width: 38px;
      height: 38px;
      border-radius: 12px;
      border: none;
      background: linear-gradient(135deg, #7c3aed, #6366f1);
      color: #fff;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: transform 0.12s ease, box-shadow 0.18s ease;
      box-shadow: 0 8px 16px rgba(109, 40, 217, 0.24);
    }

    .send-inline:hover {
      box-shadow: 0 10px 20px rgba(109, 40, 217, 0.3);
    }

    .send-inline:active {
      transform: translateY(1px);
      box-shadow: 0 6px 12px rgba(109, 40, 217, 0.2);
    }

    .attachment-menu {
      position: absolute;
      bottom: 54px;
      left: 6px;
      display: grid;
      gap: 6px;
      padding: 8px;
      border-radius: 12px;
      background: #ffffff;
      border: 1px solid var(--color-border, #e5e7eb);
      box-shadow: 0 10px 30px rgba(17, 24, 39, 0.18);
      z-index: 5;
      min-width: 180px;
    }

    .attachment-item {
      border: none;
      background: #f9fafb;
      border-radius: 10px;
      padding: 8px 10px;
      text-align: left;
      cursor: pointer;
      font-weight: 600;
      color: var(--color-text, #111827);
      transition: background-color 0.15s ease, transform 0.1s ease;
    }

    .attachment-item:hover {
      background: #eef2ff;
    }

    .attachment-item:active {
      transform: translateY(1px);
    }

    .disclaimer {
      font-size: 0.8em;
      color: var(--color-text-subtle, #6b7280);
      padding-left: 2px;
    }

    .voice-hint {
      font-size: 0.8em;
      color: var(--color-text-subtle, #6b7280);
      padding-left: 2px;
    }
  `];function Yt(s=""){if(typeof crypto<"u"&&typeof crypto.randomUUID=="function"){const o=crypto.randomUUID();return s?`${s}_${o}`:o}const e=`${Date.now()}-${Math.random().toString(16).slice(2)}`;return s?`${s}_${e}`:e}var Ft=Object.defineProperty,Gt=Object.getOwnPropertyDescriptor,x=(s,t,e,o)=>{for(var i=o>1?void 0:o?Gt(t,e):t,r=s.length-1,a;r>=0;r--)(a=s[r])&&(i=(o?a(t,e,i):a(i))||i);return o&&i&&Ft(t,e,i),i};let v=class extends S{constructor(){super(...arguments),this.agent={name:"Agent"},this.user={name:"You"},this.showMenuButton=!0,this.showCloseButton=!0,this.draft="",this.showAttachmentMenu=!1,this.voiceHint=""}get messages(){return this.conversation?.messages??[]}handleSend(){const s=this.draft.trim();if(!s||!this.conversation)return;const e={id:Yt("msg"),from:"user",text:s,time:"Now",status:"sent"};this.dispatchEvent(new CustomEvent("send-message",{detail:{message:e,conversationId:this.conversation.id},bubbles:!0,composed:!0})),this.draft=""}handleAttachment(){this.dispatchEvent(new CustomEvent("add-attachment",{detail:{action:"open-attachments"},bubbles:!0,composed:!0})),this.showAttachmentMenu=!this.showAttachmentMenu}handleVoice(){this.showAttachmentMenu=!1,this.voiceHint="Listening for voice... (stub action)",this.dispatchEvent(new CustomEvent("voice-attachment",{detail:{action:"start-voice"},bubbles:!0,composed:!0})),setTimeout(()=>{this.voiceHint=""},2e3)}handleEnter(s){s.key==="Enter"&&!s.shiftKey&&(s.preventDefault(),this.handleSend())}requestToggleConversations(){this.dispatchEvent(new CustomEvent("toggle-conversations",{bubbles:!0,composed:!0}))}requestClose(){this.dispatchEvent(new CustomEvent("close-chat",{bubbles:!0,composed:!0}))}renderAvatar(s,t="A"){return s?.avatar?h`<img
        class="avatar-img"
        src=${s.avatar}
        alt=${s.name}
      />`:h`<div class="avatar-fallback">
      ${(s?.initials??s?.name?.charAt(0)??t).toUpperCase()}
    </div>`}render(){const s=this.conversation?.title??"Conversation";return h`
      <div class="window">
        <header class="header">
          ${this.showMenuButton?h`
                <button
                  class="icon-btn"
                  @click=${this.requestToggleConversations}
                  aria-label="Open conversations"
                >
                  <span class="icon-bars"></span>
                </button>
              `:null}
          <div class="agent">
            <div class="avatar">${this.renderAvatar(this.agent)}</div>
            <div class="agent-meta">
              <div class="agent-name">${this.agent.name}</div>
              <div class="agent-role">${this.agent.role??"Assistant"}</div>
            </div>
          </div>
          ${this.showCloseButton?h`
                <button
                  class="icon-btn close"
                  @click=${this.requestClose}
                  aria-label="Close chat"
                >
                  ×
                </button>
              `:h`<span></span>`}
        </header>

        <div class="chat-title">${s}</div>

        <section class="messages">
          ${this.messages.length===0?h`<div class="empty">No messages yet.</div>`:this.messages.map(t=>h`<div
                    class=${`bubble-row ${t.from==="user"?"outgoing":"incoming"}`}
                  >
                    ${t.from==="agent"?h`<div class="avatar tiny">
                          ${this.renderAvatar(this.agent,"A")}
                        </div>`:h`<div class="spacer"></div>`}
                    <div class="bubble">
                      <p class="text">${t.text}</p>
                      <span class="meta">${t.time}</span>
                    </div>
                    ${t.from==="user"?h`<div class="avatar tiny user">
                          ${this.renderAvatar(this.user,"U")}
                        </div>`:h`<div class="spacer"></div>`}
                  </div>`)}
        </section>

        <footer class="composer">
          <div class="composer-shell">
            <button
              class="icon-inline"
              @click=${t=>{t.stopPropagation(),this.handleAttachment()}}
              aria-label="Add attachment"
              title="Add attachment"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 5v14m-7-7h14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>
            <textarea
              class="input"
              aria-label="Reply to conversation"
              placeholder="Reply..."
              .value=${this.draft}
              rows="1"
              @input=${t=>{const e=t.target;this.draft=e.value,e.style.height="auto",e.style.height=`${Math.min(e.scrollHeight,120)}px`}}
              @keydown=${this.handleEnter}
            ></textarea>
            <div class="right-actions">
              <button
                class="icon-inline"
                @click=${t=>{t.stopPropagation(),this.handleVoice()}}
                aria-label="Record voice note"
                title="Record voice note"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 4a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V7a3 3 0 0 0-3-3Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <path
                    d="M5 11v1a7 7 0 0 0 14 0v-1M12 19v3"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
              <button
                class="send-inline"
                @click=${this.handleSend}
                aria-label="Send message"
                title="Send"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m5 12 14-7-4 7 4 7-14-7Z" fill="currentColor" />
                </svg>
              </button>
            </div>
            ${this.showAttachmentMenu?h`
                  <div
                    class="attachment-menu"
                    @click=${t=>t.stopPropagation()}
                  >
                    <button
                      class="attachment-item"
                      @click=${()=>{this.showAttachmentMenu=!1,this.dispatchEvent(new CustomEvent("add-attachment",{detail:{action:"upload-file"},bubbles:!0,composed:!0}))}}
                    >
                      Upload file
                    </button>
                    <button
                      class="attachment-item"
                      @click=${()=>{this.showAttachmentMenu=!1,this.dispatchEvent(new CustomEvent("add-attachment",{detail:{action:"take-photo"},bubbles:!0,composed:!0}))}}
                    >
                      Take photo
                    </button>
                    <button
                      class="attachment-item"
                      @click=${()=>{this.showAttachmentMenu=!1,this.dispatchEvent(new CustomEvent("add-attachment",{detail:{action:"choose-document"},bubbles:!0,composed:!0}))}}
                    >
                      Choose document
                    </button>
                  </div>
                `:null}
          </div>
          <div class="disclaimer">
            AI can make mistakes. Verify important information.
          </div>
          ${this.voiceHint?h`<div class="voice-hint">${this.voiceHint}</div>`:null}
        </footer>
      </div>
    `}};v.styles=[...Wt],x([b({type:Object})],v.prototype,"conversation",2),x([b({type:Object})],v.prototype,"agent",2),x([b({type:Object})],v.prototype,"user",2),x([b({type:Boolean})],v.prototype,"showMenuButton",2),x([b({type:Boolean})],v.prototype,"showCloseButton",2),x([$()],v.prototype,"draft",2),x([$()],v.prototype,"showAttachmentMenu",2),x([$()],v.prototype,"voiceHint",2),v=x([K("chat-window")],v);var Zt=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,ot=(s,t,e,o)=>{for(var i=o>1?void 0:o?Jt(t,e):t,r=s.length-1,a;r>=0;r--)(a=s[r])&&(i=(o?a(t,e,i):a(i))||i);return o&&i&&Zt(t,e,i),i};let H=class extends S{constructor(){super(...arguments),this.conversations=[]}handleSelect(s){this.dispatchEvent(new CustomEvent("conversation-select",{detail:{conversation:s},bubbles:!0,composed:!0}))}handleNewChat(s){s.stopPropagation(),this.dispatchEvent(new CustomEvent("new-conversation",{bubbles:!0,composed:!0}))}statusClass(s){switch(s){case"active":return"badge badge-primary";case"waiting":return"badge badge-warn";case"completed":return"badge badge-success";case"in-progress":return"badge badge-info badge-inprogress";default:return"badge badge-info"}}render(){return h`
      <div class="panel">
        <div class="panel-header">
          <div>
            <h3>Conversations</h3>
            <p class="muted">${this.conversations.length} active threads</p>
          </div>
          
          <button 
            class="icon-btn" 
            @click=${this.handleNewChat}
            aria-label="Start new conversation"
            title="Start new conversation"
            style="background: none; border: none; cursor: pointer; color: var(--text-primary);"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 5v14m-7-7h14" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <div class="list">
          ${this.conversations.map(s=>h`
              <button
                type="button"
                class=${`item ${s.id===this.activeId?"active":""}`}
                @click=${()=>this.handleSelect(s)}
              >
                <div class="item-top">
                  <div class="item-title">${s.title}</div>
                </div>
                <div class="item-sub">
                  ${s.subtitle??s.preview}
                </div>
                <div class="item-status">
                  <span class=${this.statusClass(s.status)}>
                    ${s.badge??s.status}
                  </span>
                </div>
              </button>
            `)}
        </div>
      </div>
    `}};H.styles=[...Vt],ot([b({type:Array})],H.prototype,"conversations",2),ot([b({type:String})],H.prototype,"activeId",2),H=ot([K("chat-conversation-list")],H);const gt=[{workflow_id:"conv_test_002",conversation_history:[{role:"user",content:"clock me in"},{role:"assistant",content:"What time did System Administrator clock in?"},{role:"user",content:"right now"},{role:"assistant",content:"Can you provide the latitude and longitude for your current location?"},{role:"user",content:"office location, bangalore"},{role:"assistant",content:"I've recorded your clock-in intent for the office location in Bangalore. Your clock-in has been successfully processed."}]},{workflow_id:"nb_chat_896386ab",conversation_history:[{role:"user",content:"hello"},{role:"assistant",content:"Hi there! How can I help today?"}]},{workflow_id:"nb_chat_2e5a613a",conversation_history:[{role:"user",content:"hello i want to clock in and get my leave balance"},{role:"assistant",content:"Sure, let's handle clock-in first."}]}],Kt={user_id:"6816f79cc0a8016401c5a33be04be441",count:18,workflows:[{workflow_id:"conv_test_002",checkpoint_id:"conv_test_002-final",title:"Clock In Request",summary:"Clock in on 15/DEC/2025",status:"completed",done:!0,updated_at:"2025-12-15T09:00:00.000Z"},{workflow_id:"nb_chat_896386ab",checkpoint_id:"1f0da6b2-3f4b-684b-8001-2c3d299896e2",title:"Greeting",summary:"hello",status:"completed",updated_at:"2025-12-16T10:36:54.806329",conversation_history:[]},{workflow_id:"sse_chat_af6481bd",checkpoint_id:"1f0da6af-f148-6096-8001-8f5d2b53b02e",title:"Greeting",summary:"hello",status:"completed",updated_at:"2025-12-16T10:35:52.938543",conversation_history:[]},{workflow_id:"nb_chat_20342e85",checkpoint_id:"1f0da6ae-7852-6851-8001-c8a48a9c24f0",title:"Greeting",summary:"helo",status:"completed",updated_at:"2025-12-16T10:35:13.411363",conversation_history:[]},{workflow_id:"nb_chat_69f35f65",checkpoint_id:"1f0da665-cee9-633c-8002-1622fbedbd7e",title:"Greeting",summary:"hello",status:"completed",updated_at:"2025-12-16T10:02:42.912666",conversation_history:[]},{workflow_id:"nb_chat_2e5a613a",checkpoint_id:"1f0da61a-7c92-6bf9-8003-ada7668d7b61",title:"Clock In & Leave Balance",summary:"hello i want to clock in and get my leave balance]",status:"completed",updated_at:"2025-12-16T09:29:01.012971",conversation_history:[]},{workflow_id:"nb_chat_f2c957ec",checkpoint_id:"1f0da60c-75dd-647f-8003-34fa2069c835",title:"Login Preferences",summary:"i prefer morning logins",status:"completed",updated_at:"2025-12-16T09:22:44.500221",conversation_history:[]},{workflow_id:"nb_test_c6a33648",checkpoint_id:"1f0da602-9da8-6868-8002-56e99831fcc1",title:"Clock In Request",summary:"Clock me in",status:"need_input",updated_at:"2025-12-16T09:18:20.236739",conversation_history:[]},{workflow_id:"e2e_clock_in_attempt_2",checkpoint_id:"1f0da5f2-78bc-6da0-8003-b83577998d9c",title:"Clock In Request",summary:"Clock me in",status:"completed",updated_at:"2025-12-16T09:11:06.869741",conversation_history:[]},{workflow_id:"e2e_memories_check_002",checkpoint_id:"1f0da5ed-8b74-6805-8002-82f3d8bbdfd2",title:"Preferences Inquiry",summary:"Hi, what do you know about my preferences?",status:"completed",updated_at:"2025-12-16T09:08:54.614668",conversation_history:[]},{workflow_id:"leave_flow_test_001",checkpoint_id:"1f0da5af-93d7-6f52-8003-290c7bb2a13a",title:"Leave Application",summary:"I want to apply for casual leave tomorrow",status:"completed",updated_at:"2025-12-16T08:41:11.193779",conversation_history:[]},{workflow_id:"e2e_full_test_001",checkpoint_id:"1f0da5ac-1a31-6e6a-8004-1d794bdea664",title:"Memory Check",summary:"Hi, what do you remember about me?",status:"completed",updated_at:"2025-12-16T08:39:37.907082",conversation_history:[]},{workflow_id:"leave_test_v1",checkpoint_id:"1f0da586-6e9a-6a92-8002-a1a47a3ea1c1",title:"Leave Balance Check",summary:"Check my leave balance",status:"need_input",updated_at:"2025-12-16T08:22:46.702626",conversation_history:[]},{workflow_id:"clock_in_test_v3",checkpoint_id:"1f0da585-121d-6e09-8002-5987656fb6c8",title:"Clock In Request",summary:"Clock me in",status:"need_input",updated_at:"2025-12-16T08:22:10.161368",conversation_history:[]},{workflow_id:"clock_in_test_v2",checkpoint_id:"1f0da579-e8ab-6ecf-8003-b7fd6c5ca898",title:"Clock In Request",summary:"Clock me in",status:"completed",updated_at:"2025-12-16T08:17:10.537390",conversation_history:[]},{workflow_id:"multi_turn_test",checkpoint_id:"1f0da51f-e7a9-69b8-8004-a8eef1086954",title:"Leave Balance Inquiry",summary:"Hi, I need to check my leave balance",status:"completed",updated_at:"2025-12-16T07:36:54.513036",conversation_history:[]},{workflow_id:"e2e_test_clock_in",checkpoint_id:"1f0da51d-181c-69b9-8005-847760b4d133",title:"Clock In Request",summary:"Clock me in",status:"completed",updated_at:"2025-12-16T07:35:39.062553",conversation_history:[]},{workflow_id:"test_user_prefix_001",checkpoint_id:"1f0da51b-1540-6ba1-8001-0441f38642bd",title:"General Inquiry",summary:"Hello, what can you help me with?",status:"completed",updated_at:"2025-12-16T07:34:45.074584",conversation_history:[]}]};var Xt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,g=(s,t,e,o)=>{for(var i=o>1?void 0:o?Qt(t,e):t,r=s.length-1,a;r>=0;r--)(a=s[r])&&(i=(o?a(t,e,i):a(i))||i);return o&&i&&Xt(t,e,i),i};u.ChatModule=class extends S{constructor(){super(...arguments),this.events={},this.internalData={agent:{name:"Agent",role:"Virtual Assistant",initials:"A"},user:{name:"You"},conversations:[]},this.isOpen=!1,this.showList=!1,this.loadedSampleFallback=!1,this.handleOutsideClick=t=>{if(!this.isOpen)return;t.composedPath().includes(this)||(this.isOpen=!1,this.showList=!1)}}connectedCallback(){super.connectedCallback(),window.addEventListener("click",this.handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("click",this.handleOutsideClick)}updated(t){if(t.has("apiData")&&this.apiData){const e=this.mapApiToChatData(this.apiData);let o=e.conversations;if(this.activeConversationId){const i=this.internalData.conversations.find(a=>a.id===this.activeConversationId),r=o.find(a=>a.id===this.activeConversationId);i&&!r&&(o=[i,...o])}this.internalData={...e,conversations:o},this.activeConversationId||(this.activeConversationId=e.activeConversationId);return}if(t.has("data")&&this.data){this.internalData={...this.data,conversations:[...this.data.conversations??[]]},this.activeConversationId||(this.activeConversationId=this.data.activeConversationId??this.data.conversations[0]?.id);return}if(!this.data&&!this.apiData&&!this.loadedSampleFallback){const e=this.mapApiToChatData(Kt,this.historyData??gt);this.internalData=e,this.activeConversationId=e.activeConversationId,this.loadedSampleFallback=!0}}get conversations(){return this.internalData.conversations??[]}get activeConversation(){return this.conversations.find(t=>t.id===this.activeConversationId)}toggleOpen(){const t=this.isOpen;this.isOpen=!this.isOpen,this.showList=!1,!t&&this.isOpen&&this.createNewConversation()}createNewConversation(){const t=`req_${Date.now()}`,e=new Date().toISOString(),o=this.formatUpdated(e),i={id:t,title:"New Conversation",subtitle:`Started ${o}`,status:"active",badge:"New",updatedAt:e,preview:"Start a new conversation...",messages:[]};this.internalData={...this.internalData,conversations:[i,...this.internalData.conversations]},this.activeConversationId=t,this.showList=!1}openList(){this.showList=!0}closeList(){this.showList=!1}handleConversationSelect(t){this.activeConversationId=t.id,this.showList=!1,this.events.onConversationChange?.(t),this.dispatchEvent(new CustomEvent("conversation-change",{detail:t,bubbles:!0,composed:!0}))}handleSendMessage(t){const{conversationId:e,message:o}=t,i=this.conversations.map(r=>{if(r.id===e){const a=r.title==="New Conversation";return{...r,title:a?o.text:r.title,messages:[...r.messages,o],preview:o.text,updatedAt:o.time}}return r});this.internalData={...this.internalData,conversations:i},this.events.onSendMessage?.({conversationId:e,message:o}),this.dispatchEvent(new CustomEvent("message-sent",{detail:{conversationId:e,message:o},bubbles:!0,composed:!0}))}mapApiToChatData(t,e){const o=r=>r==="completed"?"completed":r==="need_input"?"waiting":r==="active"?"active":"in-progress",i=(t.workflows??[]).map(r=>{const a=r.summary??r.summart??"Conversation",l=r.title??a,n=r.status??(r.done===!0?"completed":void 0),d=o(n),p=this.formatUpdated(r.updated_at),c=this.mapHistoryToMessages(r,e??gt)??this.sampleMessagesForId(r.workflow_id,l);return{id:r.workflow_id,title:l,subtitle:`${a} • Updated ${p}`,status:d,badge:d==="completed"?"Completed":d==="waiting"?"Waiting for response":"In progress",updatedAt:r.updated_at??p,preview:a,messages:c}});return{agent:this.internalData.agent??{name:"Agent",role:"Virtual Assistant",initials:"A"},user:{name:t.user_id??"You"},conversations:i,activeConversationId:i[0]?.id}}mapHistoryToMessages(t,e){const o=t.conversation_history||e?.find(i=>i.workflow_id===t.workflow_id)?.conversation_history||void 0;if(!(!o||o.length===0))return o.map((i,r)=>({id:`${t.workflow_id}-h${r+1}`,from:i.role==="assistant"?"agent":i.role==="system"?"system":"user",text:i.content,time:i.timestamp?this.formatUpdated(i.timestamp):"Just now"}))}formatUpdated(t){if(!t)return"Just now";const e=new Date(t);return Number.isNaN(e.getTime())?t:e.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}sampleMessagesForId(t,e){return[]}render(){return h`
      <div class="launcher">
        <button
          class="fab"
          aria-label=${this.isOpen?"Close chat":"Open chat"}
          @click=${this.toggleOpen}
        >
          ${this.isOpen?h`×`:h`💬`}
        </button>

        ${this.isOpen?h`
              <div class="sheet">
                <div class="sheet-content">
                  <chat-window
                    .conversation=${this.activeConversation}
                    .agent=${this.internalData.agent}
                    .user=${this.internalData.user}
                    .showMenuButton=${!0}
                    .showCloseButton=${!0}
                    @toggle-conversations=${this.openList}
                    @close-chat=${this.toggleOpen}
                    @send-message=${t=>this.handleSendMessage(t.detail)}
                  ></chat-window>

                  ${this.showList?h`
                        <div class="drawer-layer" @click=${this.closeList}>
                          <div
                            class=${`drawer ${this.showList?"open":""}`}
                            @click=${t=>t.stopPropagation()}
                          >
                            <chat-conversation-list
                              .conversations=${this.conversations}
                              .activeId=${this.activeConversationId}
                              @conversation-select=${t=>this.handleConversationSelect(t.detail.conversation)}
                              @new-conversation=${()=>this.createNewConversation()}
                            ></chat-conversation-list>
                          </div>
                        </div>
                      `:null}
                </div>
              </div>
            `:null}
      </div>
    `}},u.ChatModule.styles=[...qt],g([b({type:Object})],u.ChatModule.prototype,"data",2),g([b({type:Object})],u.ChatModule.prototype,"apiData",2),g([b({type:Object})],u.ChatModule.prototype,"historyData",2),g([b({type:Object})],u.ChatModule.prototype,"events",2),g([$()],u.ChatModule.prototype,"internalData",2),g([$()],u.ChatModule.prototype,"isOpen",2),g([$()],u.ChatModule.prototype,"showList",2),g([$()],u.ChatModule.prototype,"activeConversationId",2),g([$()],u.ChatModule.prototype,"loadedSampleFallback",2),u.ChatModule=g([K("chat-module")],u.ChatModule),Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})}));
