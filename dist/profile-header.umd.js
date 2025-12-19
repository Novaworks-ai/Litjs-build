(function(b,v){typeof exports=="object"&&typeof module<"u"?v(exports):typeof define=="function"&&define.amd?define(["exports"],v):(b=typeof globalThis<"u"?globalThis:b||self,v(b.ProfileHeader={}))})(this,(function(b){"use strict";const v=globalThis,q=v.ShadowRoot&&(v.ShadyCSS===void 0||v.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),se=new WeakMap;let ne=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(q&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=se.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&se.set(t,e))}return e}toString(){return this.cssText}};const Ae=i=>new ne(typeof i=="string"?i:i+"",void 0,W),p=(i,...e)=>{const t=i.length===1?i[0]:e.reduce(((r,o,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[s+1]),i[0]);return new ne(t,i,W)},ke=(i,e)=>{if(q)i.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const t of e){const r=document.createElement("style"),o=v.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=t.cssText,i.appendChild(r)}},ae=q?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return Ae(t)})(i):i;const{is:Se,defineProperty:Ee,getOwnPropertyDescriptor:ze,getOwnPropertyNames:Ce,getOwnPropertySymbols:Pe,getPrototypeOf:Te}=Object,R=globalThis,le=R.trustedTypes,Oe=le?le.emptyScript:"",He=R.reactiveElementPolyfillSupport,O=(i,e)=>i,D={toAttribute(i,e){switch(e){case Boolean:i=i?Oe:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Y=(i,e)=>!Se(i,e),de={attribute:!0,type:String,converter:D,reflect:!1,useDefault:!1,hasChanged:Y};Symbol.metadata??=Symbol("metadata"),R.litPropertyMetadata??=new WeakMap;let C=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=de){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,t);o!==void 0&&Ee(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){const{get:o,set:s}=ze(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:o,set(n){const l=o?.call(this);s?.call(this,n),this.requestUpdate(e,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??de}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;const e=Te(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){const t=this.properties,r=[...Ce(t),...Pe(t)];for(const o of r)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,o]of t)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const o=this._$Eu(t,r);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)t.unshift(ae(o))}else e!==void 0&&t.push(ae(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ke(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){const s=(r.converter?.toAttribute!==void 0?r.converter:D).toAttribute(t,r.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){const r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const s=r.getPropertyOptions(o),n=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:D;this._$Em=o;const l=n.fromAttribute(t,s.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(e,t,r){if(e!==void 0){const o=this.constructor,s=this[e];if(r??=o.getPropertyOptions(e),!((r.hasChanged??Y)(s,t)||r.useDefault&&r.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:o,wrapped:s},n){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),s!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,s]of r){const{wrapped:n}=s,l=this[o];n!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,s,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((r=>r.hostUpdate?.())),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[O("elementProperties")]=new Map,C[O("finalized")]=new Map,He?.({ReactiveElement:C}),(R.reactiveElementVersions??=[]).push("2.1.1");const F=globalThis,I=F.trustedTypes,pe=I?I.createPolicy("lit-html",{createHTML:i=>i}):void 0,ce="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,he="?"+y,je=`<${he}>`,k=document,H=()=>k.createComment(""),j=i=>i===null||typeof i!="object"&&typeof i!="function",K=Array.isArray,Ue=i=>K(i)||typeof i?.[Symbol.iterator]=="function",J=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fe=/-->/g,ue=/>/g,S=RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),be=/'/g,me=/"/g,ge=/^(?:script|style|textarea|title)$/i,Me=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),m=Me(1),$=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),xe=new WeakMap,E=k.createTreeWalker(k,129);function ve(i,e){if(!K(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return pe!==void 0?pe.createHTML(e):e}const Ne=(i,e)=>{const t=i.length-1,r=[];let o,s=e===2?"<svg>":e===3?"<math>":"",n=U;for(let l=0;l<t;l++){const a=i[l];let h,f,d=-1,x=0;for(;x<a.length&&(n.lastIndex=x,f=n.exec(a),f!==null);)x=n.lastIndex,n===U?f[1]==="!--"?n=fe:f[1]!==void 0?n=ue:f[2]!==void 0?(ge.test(f[2])&&(o=RegExp("</"+f[2],"g")),n=S):f[3]!==void 0&&(n=S):n===S?f[0]===">"?(n=o??U,d=-1):f[1]===void 0?d=-2:(d=n.lastIndex-f[2].length,h=f[1],n=f[3]===void 0?S:f[3]==='"'?me:be):n===me||n===be?n=S:n===fe||n===ue?n=U:(n=S,o=void 0);const A=n===S&&i[l+1].startsWith("/>")?" ":"";s+=n===U?a+je:d>=0?(r.push(h),a.slice(0,d)+ce+a.slice(d)+y+A):a+y+(d===-2?l:A)}return[ve(i,s+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class M{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let s=0,n=0;const l=e.length-1,a=this.parts,[h,f]=Ne(e,t);if(this.el=M.createElement(h,r),E.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=E.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(ce)){const x=f[n++],A=o.getAttribute(d).split(y),V=/([.?@])?(.*)/.exec(x);a.push({type:1,index:s,name:V[2],strings:A,ctor:V[1]==="."?De:V[1]==="?"?Ie:V[1]==="@"?Le:L}),o.removeAttribute(d)}else d.startsWith(y)&&(a.push({type:6,index:s}),o.removeAttribute(d));if(ge.test(o.tagName)){const d=o.textContent.split(y),x=d.length-1;if(x>0){o.textContent=I?I.emptyScript:"";for(let A=0;A<x;A++)o.append(d[A],H()),E.nextNode(),a.push({type:2,index:++s});o.append(d[x],H())}}}else if(o.nodeType===8)if(o.data===he)a.push({type:2,index:s});else{let d=-1;for(;(d=o.data.indexOf(y,d+1))!==-1;)a.push({type:7,index:s}),d+=y.length-1}s++}}static createElement(e,t){const r=k.createElement("template");return r.innerHTML=e,r}}function P(i,e,t=i,r){if(e===$)return e;let o=r!==void 0?t._$Co?.[r]:t._$Cl;const s=j(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(i),o._$AT(i,t,r)),r!==void 0?(t._$Co??=[])[r]=o:t._$Cl=o),o!==void 0&&(e=P(i,o._$AS(i,e.values),o,r)),e}class Re{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,o=(e?.creationScope??k).importNode(t,!0);E.currentNode=o;let s=E.nextNode(),n=0,l=0,a=r[0];for(;a!==void 0;){if(n===a.index){let h;a.type===2?h=new N(s,s.nextSibling,this,e):a.type===1?h=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(h=new Be(s,this,e)),this._$AV.push(h),a=r[++l]}n!==a?.index&&(s=E.nextNode(),n++)}return E.currentNode=k,o}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class N{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=P(this,e,t),j(e)?e===c||e==null||e===""?(this._$AH!==c&&this._$AR(),this._$AH=c):e!==this._$AH&&e!==$&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ue(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==c&&j(this._$AH)?this._$AA.nextSibling.data=e:this.T(k.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=M.createElement(ve(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(t);else{const s=new Re(o,this),n=s.u(this.options);s.p(t),this.T(n),this._$AH=s}}_$AC(e){let t=xe.get(e.strings);return t===void 0&&xe.set(e.strings,t=new M(e)),t}k(e){K(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,o=0;for(const s of e)o===t.length?t.push(r=new N(this.O(H()),this.O(H()),this,this.options)):r=t[o],r._$AI(s),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class L{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,s){this.type=1,this._$AH=c,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=c}_$AI(e,t=this,r,o){const s=this.strings;let n=!1;if(s===void 0)e=P(this,e,t,0),n=!j(e)||e!==this._$AH&&e!==$,n&&(this._$AH=e);else{const l=e;let a,h;for(e=s[0],a=0;a<s.length-1;a++)h=P(this,l[r+a],t,a),h===$&&(h=this._$AH[a]),n||=!j(h)||h!==this._$AH[a],h===c?e=c:e!==c&&(e+=(h??"")+s[a+1]),this._$AH[a]=h}n&&!o&&this.j(e)}j(e){e===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class De extends L{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===c?void 0:e}}class Ie extends L{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==c)}}class Le extends L{constructor(e,t,r,o,s){super(e,t,r,o,s),this.type=5}_$AI(e,t=this){if((e=P(this,e,t,0)??c)===$)return;const r=this._$AH,o=e===c&&r!==c||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==c&&(r===c||o);o&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Be{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){P(this,e)}}const Ve=F.litHtmlPolyfillSupport;Ve?.(M,N),(F.litHtmlVersions??=[]).push("3.3.1");const qe=(i,e,t)=>{const r=t?.renderBefore??e;let o=r._$litPart$;if(o===void 0){const s=t?.renderBefore??null;r._$litPart$=o=new N(e.insertBefore(H(),s),s,void 0,t??{})}return o._$AI(i),o};const Z=globalThis;let z=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=qe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return $}};z._$litElement$=!0,z.finalized=!0,Z.litElementHydrateSupport?.({LitElement:z});const We=Z.litElementPolyfillSupport;We?.({LitElement:z}),(Z.litElementVersions??=[]).push("4.2.1");const G=i=>(e,t)=>{t!==void 0?t.addInitializer((()=>{customElements.define(i,e)})):customElements.define(i,e)};const Ye={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:Y},Fe=(i=Ye,e,t)=>{const{kind:r,metadata:o}=t;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),r==="setter"&&((i=Object.create(i)).wrapped=!0),s.set(t.name,i),r==="accessor"){const{name:n}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(n,a,i)},init(l){return l!==void 0&&this.C(n,void 0,i,l),l}}}if(r==="setter"){const{name:n}=t;return function(l){const a=this[n];e.call(this,l),this.requestUpdate(n,a,i)}}throw Error("Unsupported decorator location: "+r)};function u(i){return(e,t)=>typeof t=="object"?Fe(i,e,t):((r,o,s)=>{const n=o.hasOwnProperty(s);return o.constructor.createProperty(s,r),n?Object.getOwnPropertyDescriptor(o,s):void 0})(i,e,t)}function ye(i){return u({...i,state:!0,attribute:!1})}const $e={ATTRIBUTE:1,CHILD:2},we=i=>(...e)=>({_$litDirective$:i,values:e});class _e{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const Q=we(class extends _e{constructor(i){if(super(i),i.type!==$e.ATTRIBUTE||i.name!=="class"||i.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter((e=>i[e])).join(" ")+" "}update(i,[e]){if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter((r=>r!==""))));for(const r in e)e[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(e)}const t=i.element.classList;for(const r of this.st)r in e||(t.remove(r),this.st.delete(r));for(const r in e){const o=!!e[r];o===this.st.has(r)||this.nt?.has(r)||(o?(t.add(r),this.st.add(r)):(t.remove(r),this.st.delete(r)))}return $}}),X=p`
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
`;p`
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
`;const ee=p`
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
`;p`
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
`,p`
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
`;const te=p`
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
`;p`
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
`,p`
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
`,p`
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
`,p`
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
`,p`
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
`,p`
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
`;const re=p`
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
`,Ke=p`
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
`;const Je=p`
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
`,Ze=p`
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
`;p`
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
`,p`
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
`,p`
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
`;const Ge=p`
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
`;var Qe=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,T=(i,e,t,r)=>{for(var o=r>1?void 0:r?Xe(e,t):e,s=i.length-1,n;s>=0;s--)(n=i[s])&&(o=(r?n(e,t,o):n(o))||o);return r&&o&&Qe(e,t,o),o};let w=class extends z{constructor(){super(...arguments),this.tabs=[],this.showTabsCount=3,this.variant="primary",this.selectedTab="",this.moreOpen=!1,this.outsideClickHandler=i=>{const e=typeof i.composedPath=="function"?i.composedPath():this.fallbackPath(i.target);Array.isArray(e)&&!e.includes(this)&&(this.moreOpen=!1)},this.onKeyDownTablist=i=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(i.key))return;const t=Array.from(this.shadowRoot.querySelectorAll('[role="tab"]'));if(!t.length)return;const r=t.findIndex(s=>s.getAttribute("aria-selected")==="true"),o=s=>{const n=t[s],l=n.classList.contains("tab-dropdown-item");l&&!this.moreOpen?this.moreOpen=!0:!l&&this.moreOpen&&(this.moreOpen=!1),setTimeout(()=>{n?.focus(),this.selectTab(this.tabs[s])},0)};switch(i.preventDefault(),i.key){case"ArrowRight":o((r+1)%t.length);break;case"ArrowLeft":o((r-1+t.length)%t.length);break;case"Home":o(0);break;case"End":o(t.length-1);break}}}fallbackPath(i){const e=[];let t=i;for(;t;)e.push(t),t=t.parentNode;return e}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.outsideClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.outsideClickHandler)}firstUpdated(){this.tabs.length>0&&(this.selectedTab=this.tabs[0].value)}selectTab(i){this.selectedTab=i.value,this.moreOpen=!1,this.dispatchEvent(new CustomEvent("tab-change",{detail:{value:i.value},bubbles:!0,composed:!0}))}toggleMore(i){i.stopPropagation(),this.moreOpen=!this.moreOpen}render(){const i=this.tabs.slice(0,this.showTabsCount),e=this.tabs.slice(this.showTabsCount);return m`
      <div
        class="tabs-container"
        role="tablist"
        @keydown=${this.onKeyDownTablist}
      >
        <!-- Visible Tabs -->
        ${i.map(t=>{const r=this.selectedTab===t.value,o={"tab-btn":!0,"tab-btn--active":r};return m`
            <button
              role="tab"
              aria-selected=${String(r)}
              tabindex=${r?"0":"-1"}
              aria-controls=${`${t.value}-panel`}
              class=${Q(o)}
              @click=${()=>this.selectTab(t)}
            >
              ${t.label}
            </button>
          `})}

        <!-- More Dropdown -->
        ${e.length>0?m`
              <div class="tab-more" data-more="true">
                <button
                  class="tab-more-btn"
                  @click=${this.toggleMore}
                  aria-haspopup="listbox"
                  aria-expanded=${String(this.moreOpen)}
                  type="button"
                >
                  More
                  <svg
                    class="tab-more-icon ${this.moreOpen?"tab-more-icon--open":""}"
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

                ${this.moreOpen?m`
                      <div class="tab-dropdown" role="listbox">
                        ${e.map(t=>{const r=this.selectedTab===t.value,o={"tab-dropdown-item":!0,"tab-dropdown-item--active":r};return m`
                            <button
                              role="tab"
                              aria-selected=${String(r)}
                              tabindex=${r?"0":"-1"}
                              aria-controls=${`${t.value}-panel`}
                              class=${Q(o)}
                              @click=${()=>this.selectTab(t)}
                            >
                              ${t.label}
                            </button>
                          `})}
                      </div>
                    `:""}
              </div>
            `:""}
      </div>
    `}};w.styles=[te,X,ee,re,Ze],T([u({type:Array})],w.prototype,"tabs",2),T([u({type:Number})],w.prototype,"showTabsCount",2),T([u({type:String})],w.prototype,"variant",2),T([ye()],w.prototype,"selectedTab",2),T([ye()],w.prototype,"moreOpen",2),w=T([G("tabs-component")],w);var et=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,_=(i,e,t,r)=>{for(var o=r>1?void 0:r?tt(e,t):e,s=i.length-1,n;s>=0;s--)(n=i[s])&&(o=(r?n(e,t,o):n(o))||o);return r&&o&&et(e,t,o),o};let g=class extends z{constructor(){super(...arguments),this.variant="primary",this.size="md",this.disabled=!1,this.loading=!1,this.type="button",this.block=!1,this.ariaLabel=""}render(){const i=!(this.disabled||this.loading),e={"ui-btn":!0,"ui-btn-sm":this.size==="sm","ui-btn-md":this.size==="md","ui-btn-lg":this.size==="lg","ui-btn-primary":this.variant==="primary","ui-btn-secondary":this.variant==="secondary","ui-btn-outline":this.variant==="outline","ui-btn-ghost":this.variant==="ghost","ui-btn-block":this.block},t=this.ariaLabel||void 0;return m`
      <button
        class=${Q(e)}
        type=${this.type}
        ?disabled=${!i}
        aria-disabled=${!i}
        aria-busy=${this.loading}
        aria-label=${t}
        @click=${this.handleClick}
      >
        ${this.loading?this.renderSpinner():""}
        <slot name="prefix"></slot>
        <slot></slot>
        <slot name="suffix"></slot>
      </button>
    `}renderSpinner(){return m`
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
    `}handleClick(i){(this.disabled||this.loading)&&(i.preventDefault(),i.stopPropagation())}};g.styles=[te,X,ee,re,Ke],_([u({type:String,reflect:!0})],g.prototype,"variant",2),_([u({type:String,reflect:!0})],g.prototype,"size",2),_([u({type:Boolean,reflect:!0})],g.prototype,"disabled",2),_([u({type:Boolean,reflect:!0})],g.prototype,"loading",2),_([u({type:String,reflect:!0})],g.prototype,"type",2),_([u({type:Boolean,attribute:"block",reflect:!0})],g.prototype,"block",2),_([u({type:String})],g.prototype,"ariaLabel",2),g=_([G("ui-button")],g);var rt={icon:[384,512,["map-marker"],"f041","M192 0C86 0 0 84.4 0 188.6 0 307.9 120.2 450.9 170.4 505.4 182.2 518.2 201.8 518.2 213.6 505.4 263.8 450.9 384 307.9 384 188.6 384 84.4 298 0 192 0z"]};class oe extends _e{constructor(e){if(super(e),this.it=c,e.type!==$e.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===c||e==null)return this._t=void 0,this.it=e;if(e===$)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}oe.directiveName="unsafeHTML",oe.resultType=1;class ie extends oe{}ie.directiveName="unsafeSVG",ie.resultType=2;const ot=we(ie),it=(i,e="")=>{if(!i||!i.icon)return m``;const t=i.icon[0],r=i.icon[1],o=i.icon[4],s=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${t} ${r}" fill="currentColor" aria-hidden="true"><path d="${o}"/></svg>`;return m`<span class="${e} inline-block">${ot(s)}</span>`};var st=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,B=(i,e,t,r)=>{for(var o=r>1?void 0:r?nt(e,t):e,s=i.length-1,n;s>=0;s--)(n=i[s])&&(o=(r?n(e,t,o):n(o))||o);return r&&o&&st(e,t,o),o};b.ProfileHeader=class extends z{constructor(){super(...arguments),this.employeeId="",this.employee={fullName:"John Doe",title:"Senior Frontend Engineer",location:"New York, USA",avatarUrl:"https://i.pravatar.cc/150?img=12"}}updated(e){e.has("employeeId")&&this._loadEmployee(this.employeeId)}async _loadEmployee(e){}_handleOrgChartClick(){this.onOrgChartClick&&this.onOrgChartClick(this.employeeId,this.employee),this.dispatchEvent(new CustomEvent("org-chart-click",{detail:{employeeId:this.employeeId,employee:this.employee},bubbles:!0}))}_onTabChange(e){this.dispatchEvent(new CustomEvent("section-change",{detail:e.detail,bubbles:!0,composed:!0}))}render(){const e=this.employee;return m`
      <section class="profile-header">
        <div class="profile-header-container">
          <!-- main header row -->
          <div class="profile-header-main">
            <div class="profile-header-info">
              <img
                class="profile-header-avatar"
                src=${e?.avatarUrl??""}
                alt=${e?`${e.fullName} avatar`:"Employee avatar"}
                width="100"
                height="100"
                loading="lazy"
              />

              <div>
                <h1 class="profile-header-name">${e?.fullName??""}</h1>
                <p class="profile-header-title">${e?.title??""}</p>
                <div class="profile-header-location">
                  <span class="icon icon-xs">${it(rt,"")}</span>
                  <span>${e?.location??""}</span>
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
          <div class="profile-header-tabs" role="region" aria-label="Profile sections">
            <tabs-component
              .tabs=${[{label:"Overview",value:"overview"},{label:"Career",value:"career"},{label:"Benefits",value:"benefits"},{label:"Documents",value:"documents"},{label:"Compensation",value:"compensation"},{label:"Attendance",value:"attendance"}]}
              @tab-change=${t=>this._onTabChange(t)}
            ></tabs-component>
          </div>
        </div>
      </section>
    `}},b.ProfileHeader.styles=[te,X,ee,re,Je,Ge],B([u({type:String})],b.ProfileHeader.prototype,"employeeId",2),B([u({type:Object})],b.ProfileHeader.prototype,"employee",2),B([u({type:Function})],b.ProfileHeader.prototype,"onOrgChartClick",2),b.ProfileHeader=B([G("profile-header")],b.ProfileHeader),Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})}));
