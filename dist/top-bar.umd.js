(function(u,g){typeof exports=="object"&&typeof module<"u"?g(exports):typeof define=="function"&&define.amd?define(["exports"],g):(u=typeof globalThis<"u"?globalThis:u||self,g(u.TopBar={}))})(this,(function(u){"use strict";const g=globalThis,B=g.ShadowRoot&&(g.ShadyCSS===void 0||g.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,R=Symbol(),Y=new WeakMap;let G=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==R)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(B&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=Y.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Y.set(t,e))}return e}toString(){return this.cssText}};const ce=i=>new G(typeof i=="string"?i:i+"",void 0,R),d=(i,...e)=>{const t=i.length===1?i[0]:e.reduce(((r,o,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[s+1]),i[0]);return new G(t,i,R)},he=(i,e)=>{if(B)i.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const t of e){const r=document.createElement("style"),o=g.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=t.cssText,i.appendChild(r)}},J=B?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return ce(t)})(i):i;const{is:fe,defineProperty:ue,getOwnPropertyDescriptor:be,getOwnPropertyNames:ge,getOwnPropertySymbols:me,getPrototypeOf:xe}=Object,U=globalThis,Q=U.trustedTypes,ve=Q?Q.emptyScript:"",ye=U.reactiveElementPolyfillSupport,z=(i,e)=>i,j={toAttribute(i,e){switch(e){case Boolean:i=i?ve:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},D=(i,e)=>!fe(i,e),Z={attribute:!0,type:String,converter:j,reflect:!1,useDefault:!1,hasChanged:D};Symbol.metadata??=Symbol("metadata"),U.litPropertyMetadata??=new WeakMap;let A=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Z){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,t);o!==void 0&&ue(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){const{get:o,set:s}=be(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:o,set(n){const l=o?.call(this);s?.call(this,n),this.requestUpdate(e,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Z}static _$Ei(){if(this.hasOwnProperty(z("elementProperties")))return;const e=xe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(z("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(z("properties"))){const t=this.properties,r=[...ge(t),...me(t)];for(const o of r)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,o]of t)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const o=this._$Eu(t,r);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)t.unshift(J(o))}else e!==void 0&&t.push(J(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return he(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){const s=(r.converter?.toAttribute!==void 0?r.converter:j).toAttribute(t,r.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){const r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const s=r.getPropertyOptions(o),n=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:j;this._$Em=o;const l=n.fromAttribute(t,s.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(e,t,r){if(e!==void 0){const o=this.constructor,s=this[e];if(r??=o.getPropertyOptions(e),!((r.hasChanged??D)(s,t)||r.useDefault&&r.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:o,wrapped:s},n){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),s!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,s]of r){const{wrapped:n}=s,l=this[o];n!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,s,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((r=>r.hostUpdate?.())),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[z("elementProperties")]=new Map,A[z("finalized")]=new Map,ye?.({ReactiveElement:A}),(U.reactiveElementVersions??=[]).push("2.1.1");const I=globalThis,H=I.trustedTypes,X=H?H.createPolicy("lit-html",{createHTML:i=>i}):void 0,ee="$lit$",m=`lit$${Math.random().toFixed(9).slice(2)}$`,te="?"+m,we=`<${te}>`,v=document,S=()=>v.createComment(""),E=i=>i===null||typeof i!="object"&&typeof i!="function",q=Array.isArray,$e=i=>q(i)||typeof i?.[Symbol.iterator]=="function",W=`[ 	
\f\r]`,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,re=/-->/g,oe=/>/g,y=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ie=/'/g,se=/"/g,ne=/^(?:script|style|textarea|title)$/i,_e=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),P=_e(1),w=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),ae=new WeakMap,$=v.createTreeWalker(v,129);function le(i,e){if(!q(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return X!==void 0?X.createHTML(e):e}const Ae=(i,e)=>{const t=i.length-1,r=[];let o,s=e===2?"<svg>":e===3?"<math>":"",n=C;for(let l=0;l<t;l++){const a=i[l];let h,f,p=-1,b=0;for(;b<a.length&&(n.lastIndex=b,f=n.exec(a),f!==null);)b=n.lastIndex,n===C?f[1]==="!--"?n=re:f[1]!==void 0?n=oe:f[2]!==void 0?(ne.test(f[2])&&(o=RegExp("</"+f[2],"g")),n=y):f[3]!==void 0&&(n=y):n===y?f[0]===">"?(n=o??C,p=-1):f[1]===void 0?p=-2:(p=n.lastIndex-f[2].length,h=f[1],n=f[3]===void 0?y:f[3]==='"'?se:ie):n===se||n===ie?n=y:n===re||n===oe?n=C:(n=y,o=void 0);const x=n===y&&i[l+1].startsWith("/>")?" ":"";s+=n===C?a+we:p>=0?(r.push(h),a.slice(0,p)+ee+a.slice(p)+m+x):a+m+(p===-2?l:x)}return[le(i,s+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class M{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let s=0,n=0;const l=e.length-1,a=this.parts,[h,f]=Ae(e,t);if(this.el=M.createElement(h,r),$.currentNode=this.el.content,t===2||t===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=$.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const p of o.getAttributeNames())if(p.endsWith(ee)){const b=f[n++],x=o.getAttribute(p).split(m),L=/([.?@])?(.*)/.exec(b);a.push({type:1,index:s,name:L[2],strings:x,ctor:L[1]==="."?ze:L[1]==="?"?Se:L[1]==="@"?Ee:N}),o.removeAttribute(p)}else p.startsWith(m)&&(a.push({type:6,index:s}),o.removeAttribute(p));if(ne.test(o.tagName)){const p=o.textContent.split(m),b=p.length-1;if(b>0){o.textContent=H?H.emptyScript:"";for(let x=0;x<b;x++)o.append(p[x],S()),$.nextNode(),a.push({type:2,index:++s});o.append(p[b],S())}}}else if(o.nodeType===8)if(o.data===te)a.push({type:2,index:s});else{let p=-1;for(;(p=o.data.indexOf(m,p+1))!==-1;)a.push({type:7,index:s}),p+=m.length-1}s++}}static createElement(e,t){const r=v.createElement("template");return r.innerHTML=e,r}}function k(i,e,t=i,r){if(e===w)return e;let o=r!==void 0?t._$Co?.[r]:t._$Cl;const s=E(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(i),o._$AT(i,t,r)),r!==void 0?(t._$Co??=[])[r]=o:t._$Cl=o),o!==void 0&&(e=k(i,o._$AS(i,e.values),o,r)),e}class ke{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,o=(e?.creationScope??v).importNode(t,!0);$.currentNode=o;let s=$.nextNode(),n=0,l=0,a=r[0];for(;a!==void 0;){if(n===a.index){let h;a.type===2?h=new O(s,s.nextSibling,this,e):a.type===1?h=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(h=new Ce(s,this,e)),this._$AV.push(h),a=r[++l]}n!==a?.index&&(s=$.nextNode(),n++)}return $.currentNode=v,o}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class O{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=k(this,e,t),E(e)?e===c||e==null||e===""?(this._$AH!==c&&this._$AR(),this._$AH=c):e!==this._$AH&&e!==w&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):$e(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==c&&E(this._$AH)?this._$AA.nextSibling.data=e:this.T(v.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=M.createElement(le(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(t);else{const s=new ke(o,this),n=s.u(this.options);s.p(t),this.T(n),this._$AH=s}}_$AC(e){let t=ae.get(e.strings);return t===void 0&&ae.set(e.strings,t=new M(e)),t}k(e){q(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,o=0;for(const s of e)o===t.length?t.push(r=new O(this.O(S()),this.O(S()),this,this.options)):r=t[o],r._$AI(s),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class N{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,s){this.type=1,this._$AH=c,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=c}_$AI(e,t=this,r,o){const s=this.strings;let n=!1;if(s===void 0)e=k(this,e,t,0),n=!E(e)||e!==this._$AH&&e!==w,n&&(this._$AH=e);else{const l=e;let a,h;for(e=s[0],a=0;a<s.length-1;a++)h=k(this,l[r+a],t,a),h===w&&(h=this._$AH[a]),n||=!E(h)||h!==this._$AH[a],h===c?e=c:e!==c&&(e+=(h??"")+s[a+1]),this._$AH[a]=h}n&&!o&&this.j(e)}j(e){e===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ze extends N{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===c?void 0:e}}class Se extends N{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==c)}}class Ee extends N{constructor(e,t,r,o,s){super(e,t,r,o,s),this.type=5}_$AI(e,t=this){if((e=k(this,e,t,0)??c)===w)return;const r=this._$AH,o=e===c&&r!==c||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==c&&(r===c||o);o&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Ce{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){k(this,e)}}const Pe=I.litHtmlPolyfillSupport;Pe?.(M,O),(I.litHtmlVersions??=[]).push("3.3.1");const Me=(i,e,t)=>{const r=t?.renderBefore??e;let o=r._$litPart$;if(o===void 0){const s=t?.renderBefore??null;r._$litPart$=o=new O(e.insertBefore(S(),s),s,void 0,t??{})}return o._$AI(i),o};const V=globalThis;let T=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Me(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return w}};T._$litElement$=!0,T.finalized=!0,V.litElementHydrateSupport?.({LitElement:T});const Oe=V.litElementPolyfillSupport;Oe?.({LitElement:T}),(V.litElementVersions??=[]).push("4.2.1");const Te=i=>(e,t)=>{t!==void 0?t.addInitializer((()=>{customElements.define(i,e)})):customElements.define(i,e)};const Ue={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:D},je=(i=Ue,e,t)=>{const{kind:r,metadata:o}=t;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),r==="setter"&&((i=Object.create(i)).wrapped=!0),s.set(t.name,i),r==="accessor"){const{name:n}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(n,a,i)},init(l){return l!==void 0&&this.C(n,void 0,i,l),l}}}if(r==="setter"){const{name:n}=t;return function(l){const a=this[n];e.call(this,l),this.requestUpdate(n,a,i)}}throw Error("Unsupported decorator location: "+r)};function He(i){return(e,t)=>typeof t=="object"?je(i,e,t):((r,o,s)=>{const n=o.hasOwnProperty(s);return o.constructor.createProperty(s,r),n?Object.getOwnPropertyDescriptor(o,s):void 0})(i,e,t)}function Ne(i){return He({...i,state:!0,attribute:!1})}const Le={CHILD:2},Be=i=>(...e)=>({_$litDirective$:i,values:e});class Re{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}class K extends Re{constructor(e){if(super(e),this.it=c,e.type!==Le.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===c||e==null)return this._t=void 0,this.it=e;if(e===w)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}K.directiveName="unsafeHTML",K.resultType=1;class F extends K{}F.directiveName="unsafeSVG",F.resultType=2;const De=Be(F),_=(i,e="")=>{if(!i||!i.icon)return P``;const t=i.icon[0],r=i.icon[1],o=i.icon[4],s=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${t} ${r}" fill="currentColor" aria-hidden="true"><path d="${o}"/></svg>`;return P`<span class="${e} inline-block">${De(s)}</span>`};var Ie={icon:[448,512,[128276,61602],"f0f3","M224 0c-17.7 0-32 14.3-32 32l0 3.2C119 50 64 114.6 64 192l0 21.7c0 48.1-16.4 94.8-46.4 132.4L7.8 358.3C2.7 364.6 0 372.4 0 380.5 0 400.1 15.9 416 35.5 416l376.9 0c19.6 0 35.5-15.9 35.5-35.5 0-8.1-2.7-15.9-7.8-22.2l-9.8-12.2C400.4 308.5 384 261.8 384 213.7l0-21.7c0-77.4-55-142-128-156.8l0-3.2c0-17.7-14.3-32-32-32zM162 464c7.1 27.6 32.2 48 62 48s54.9-20.4 62-48l-124 0z"]},qe={icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},We=qe,Ve={icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]},pe=Ve,Ke={icon:[512,512,[62108,"question-circle"],"f059","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-336c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},Fe=Ke,Ye={icon:[512,512,["sign-out-alt"],"f2f5","M505 273c9.4-9.4 9.4-24.6 0-33.9L361 95c-6.9-6.9-17.2-8.9-26.2-5.2S320 102.3 320 112l0 80-112 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l112 0 0 80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L505 273zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]},Ge={icon:[448,512,[128100,62144,62470,"user-alt","user-large"],"f007","M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"]};const Je=d`
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
`;d`
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
`;const Qe=d`
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
`;d`
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
`,d`
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
`;const Ze=d`
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
`;d`
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
`,d`
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
`,d`
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
`,d`
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
`,d`
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
`,d`
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
`;const Xe=d`
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
`;d`
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
`;const et=d`
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
`;d`
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
`,d`
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
`,d`
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
`,d`
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
`,d`
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
`,d`
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
`;const tt=d`
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
`;var rt=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,de=(i,e,t,r)=>{for(var o=r>1?void 0:r?ot(e,t):e,s=i.length-1,n;s>=0;s--)(n=i[s])&&(o=(r?n(e,t,o):n(o))||o);return r&&o&&rt(e,t,o),o};u.TopBar=class extends T{constructor(){super(...arguments),this.profileOpen=!1,this.onWindowClick=e=>{(e.composedPath?.()??(()=>{const r=[];let o=e.target;for(;o;)r.push(o),o=o.parentNode;return r})()).includes(this)||(this.profileOpen=!1)},this.onKeyDown=e=>{e.key==="Escape"&&(this.profileOpen=!1,this.focusProfileButton())},this.onMenuKeyDown=e=>{if(!this.profileOpen)return;const t=this.getMenuItems();if(!t.length)return;const r=t.indexOf(document.activeElement),o=s=>{const n=t[s];n&&n.focus()};switch(e.key){case"ArrowDown":e.preventDefault(),o((r+1)%t.length);break;case"ArrowUp":e.preventDefault(),o((r-1+t.length)%t.length);break;case"Home":e.preventDefault(),o(0);break;case"End":e.preventDefault(),o(t.length-1);break;case"Escape":e.preventDefault(),this.profileOpen=!1,this.focusProfileButton();break}}}connectedCallback(){super.connectedCallback(),window.addEventListener("click",this.onWindowClick),window.addEventListener("keydown",this.onKeyDown)}disconnectedCallback(){window.removeEventListener("click",this.onWindowClick),window.removeEventListener("keydown",this.onKeyDown),super.disconnectedCallback()}focusProfileButton(){this.renderRoot?.querySelector("#profile-button")?.focus()}focusFirstMenuItem(){const[e]=this.getMenuItems();e?.focus()}getMenuItems(){const e=this.renderRoot?.querySelector("#profile-menu");return e?Array.from(e.querySelectorAll('[role="menuitem"]')):[]}toggleProfile(e){e.stopPropagation();const t=!this.profileOpen;this.profileOpen=t,t?this.updateComplete.then(()=>this.focusFirstMenuItem()):this.focusProfileButton()}iconButton(e,t){return P`
      <button
        class="topbar-icon-btn"
        title=${e}
        aria-label=${e}
        type="button"
      >
        <span class="icon icon-md">${t}</span>
      </button>
    `}render(){return P`
      <header class="topbar">
        <!-- Left: Brand -->
        <div class="topbar-brand">Nova</div>

        <!-- Middle: Search -->
        <div class="topbar-search">
          <div class="topbar-search-wrap">
            <label for="topbar-search" class="sr-only">Search</label>
            <span class="topbar-search-icon icon icon-sm">
              ${_(We,"")}
            </span>
            <input
              id="topbar-search"
              type="text"
              placeholder="Search..."
              aria-label="Search"
              class="topbar-search-input"
            />
          </div>
        </div>

        <!-- Right: Icon group -->
        <div class="topbar-actions">
          ${this.iconButton("Notifications",_(Ie,""))}
          ${this.iconButton("Help",_(Fe,""))}
          ${this.iconButton("Settings",_(pe,""))}

          <!-- Profile -->
          <div class="topbar-profile">
            <button
              id="profile-button"
              aria-controls="profile-menu"
              @click=${e=>this.toggleProfile(e)}
              class="topbar-profile-btn"
              aria-haspopup="true"
              aria-expanded=${this.profileOpen?"true":"false"}
              type="button"
            >
              <img
                src="https://i.pravatar.cc/40?img=8"
                class="topbar-avatar"
                alt="Profile"
              />
            </button>

            ${this.profileOpen?P`
                  <div
                    id="profile-menu"
                    class="topbar-dropdown"
                    role="menu"
                    aria-labelledby="profile-button"
                    @keydown=${this.onMenuKeyDown}
                  >
                    <div style="padding: 4px 0;">
                      <button
                        role="menuitem"
                        tabindex="-1"
                        class="topbar-dropdown-item"
                        type="button"
                      >
                        <span class="icon icon-sm">${_(Ge,"")}</span>
                        <span>Profile</span>
                      </button>

                      <button
                        role="menuitem"
                        tabindex="-1"
                        class="topbar-dropdown-item"
                        type="button"
                      >
                        <span class="icon icon-sm">${_(pe,"")}</span>
                        <span>Settings</span>
                      </button>

                      <div class="topbar-dropdown-divider"></div>

                      <button
                        role="menuitem"
                        tabindex="-1"
                        class="topbar-dropdown-item topbar-dropdown-item--danger"
                        type="button"
                      >
                        <span class="icon icon-sm">${_(Ye,"")}</span>
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                `:""}
          </div>
        </div>
      </header>
    `}},u.TopBar.styles=[Ze,Je,Qe,Xe,et,tt],de([Ne()],u.TopBar.prototype,"profileOpen",2),u.TopBar=de([Te("top-bar")],u.TopBar),Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})}));
