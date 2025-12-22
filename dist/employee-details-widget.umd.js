(function(v,x){typeof exports=="object"&&typeof module<"u"?x(exports):typeof define=="function"&&define.amd?define(["exports"],x):(v=typeof globalThis<"u"?globalThis:v||self,x(v.EmployeeDetailsWidget={}))})(this,(function(v){"use strict";const x=globalThis,q=x.ShadowRoot&&(x.ShadyCSS===void 0||x.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,F=Symbol(),fe=new WeakMap;let ue=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==F)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(q&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=fe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&fe.set(t,e))}return e}toString(){return this.cssText}};const Ne=s=>new ue(typeof s=="string"?s:s+"",void 0,F),g=(s,...e)=>{const t=s.length===1?s[0]:e.reduce(((r,i,o)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[o+1]),s[0]);return new ue(t,s,F)},De=(s,e)=>{if(q)s.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const t of e){const r=document.createElement("style"),i=x.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=t.cssText,s.appendChild(r)}},me=q?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return Ne(t)})(s):s;const{is:je,defineProperty:He,getOwnPropertyDescriptor:Le,getOwnPropertyNames:Re,getOwnPropertySymbols:Ie,getPrototypeOf:Be}=Object,R=globalThis,ge=R.trustedTypes,We=ge?ge.emptyScript:"",Ve=R.reactiveElementPolyfillSupport,O=(s,e)=>s,I={toAttribute(s,e){switch(e){case Boolean:s=s?We:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},J=(s,e)=>!je(s,e),ve={attribute:!0,type:String,converter:I,reflect:!1,useDefault:!1,hasChanged:J};Symbol.metadata??=Symbol("metadata"),R.litPropertyMetadata??=new WeakMap;let P=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ve){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,t);i!==void 0&&He(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){const{get:i,set:o}=Le(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:i,set(n){const c=i?.call(this);o?.call(this,n),this.requestUpdate(e,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ve}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;const e=Be(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){const t=this.properties,r=[...Re(t),...Ie(t)];for(const i of r)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,i]of t)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const i=this._$Eu(t,r);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)t.unshift(me(i))}else e!==void 0&&t.push(me(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return De(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const o=(r.converter?.toAttribute!==void 0?r.converter:I).toAttribute(t,r.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const o=r.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:I;this._$Em=i;const c=n.fromAttribute(t,o.type);this[i]=c??this._$Ej?.get(i)??c,this._$Em=null}}requestUpdate(e,t,r){if(e!==void 0){const i=this.constructor,o=this[e];if(r??=i.getPropertyOptions(e),!((r.hasChanged??J)(o,t)||r.useDefault&&r.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:i,wrapped:o},n){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),o!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,o]of r){const{wrapped:n}=o,c=this[i];n!==!0||this._$AL.has(i)||c===void 0||this.C(i,void 0,o,c)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((r=>r.hostUpdate?.())),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[O("elementProperties")]=new Map,P[O("finalized")]=new Map,Ve?.({ReactiveElement:P}),(R.reactiveElementVersions??=[]).push("2.1.1");const Z=globalThis,B=Z.trustedTypes,be=B?B.createPolicy("lit-html",{createHTML:s=>s}):void 0,$e="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,ye="?"+_,qe=`<${ye}>`,w=document,U=()=>w.createComment(""),k=s=>s===null||typeof s!="object"&&typeof s!="function",K=Array.isArray,Fe=s=>K(s)||typeof s?.[Symbol.iterator]=="function",G=`[ 	
\f\r]`,N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xe=/-->/g,_e=/>/g,A=RegExp(`>|${G}(?:([^\\s"'>=/]+)(${G}*=${G}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),we=/'/g,Ae=/"/g,Ee=/^(?:script|style|textarea|title)$/i,Je=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),b=Je(1),$=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),Se=new WeakMap,E=w.createTreeWalker(w,129);function ze(s,e){if(!K(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return be!==void 0?be.createHTML(e):e}const Ze=(s,e)=>{const t=s.length-1,r=[];let i,o=e===2?"<svg>":e===3?"<math>":"",n=N;for(let c=0;c<t;c++){const a=s[c];let p,u,l=-1,h=0;for(;h<a.length&&(n.lastIndex=h,u=n.exec(a),u!==null);)h=n.lastIndex,n===N?u[1]==="!--"?n=xe:u[1]!==void 0?n=_e:u[2]!==void 0?(Ee.test(u[2])&&(i=RegExp("</"+u[2],"g")),n=A):u[3]!==void 0&&(n=A):n===A?u[0]===">"?(n=i??N,l=-1):u[1]===void 0?l=-2:(l=n.lastIndex-u[2].length,p=u[1],n=u[3]===void 0?A:u[3]==='"'?Ae:we):n===Ae||n===we?n=A:n===xe||n===_e?n=N:(n=A,i=void 0);const d=n===A&&s[c+1].startsWith("/>")?" ":"";o+=n===N?a+qe:l>=0?(r.push(p),a.slice(0,l)+$e+a.slice(l)+_+d):a+_+(l===-2?c:d)}return[ze(s,o+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class D{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let o=0,n=0;const c=e.length-1,a=this.parts,[p,u]=Ze(e,t);if(this.el=D.createElement(p,r),E.currentNode=this.el.content,t===2||t===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=E.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith($e)){const h=u[n++],d=i.getAttribute(l).split(_),m=/([.?@])?(.*)/.exec(h);a.push({type:1,index:o,name:m[2],strings:d,ctor:m[1]==="."?Ge:m[1]==="?"?Qe:m[1]==="@"?Ye:W}),i.removeAttribute(l)}else l.startsWith(_)&&(a.push({type:6,index:o}),i.removeAttribute(l));if(Ee.test(i.tagName)){const l=i.textContent.split(_),h=l.length-1;if(h>0){i.textContent=B?B.emptyScript:"";for(let d=0;d<h;d++)i.append(l[d],U()),E.nextNode(),a.push({type:2,index:++o});i.append(l[h],U())}}}else if(i.nodeType===8)if(i.data===ye)a.push({type:2,index:o});else{let l=-1;for(;(l=i.data.indexOf(_,l+1))!==-1;)a.push({type:7,index:o}),l+=_.length-1}o++}}static createElement(e,t){const r=w.createElement("template");return r.innerHTML=e,r}}function M(s,e,t=s,r){if(e===$)return e;let i=r!==void 0?t._$Co?.[r]:t._$Cl;const o=k(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(s),i._$AT(s,t,r)),r!==void 0?(t._$Co??=[])[r]=i:t._$Cl=i),i!==void 0&&(e=M(s,i._$AS(s,e.values),i,r)),e}let Ke=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??w).importNode(t,!0);E.currentNode=i;let o=E.nextNode(),n=0,c=0,a=r[0];for(;a!==void 0;){if(n===a.index){let p;a.type===2?p=new T(o,o.nextSibling,this,e):a.type===1?p=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(p=new Xe(o,this,e)),this._$AV.push(p),a=r[++c]}n!==a?.index&&(o=E.nextNode(),n++)}return E.currentNode=w,i}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}};class T{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=M(this,e,t),k(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==$&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Fe(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==f&&k(this._$AH)?this._$AA.nextSibling.data=e:this.T(w.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=D.createElement(ze(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{const o=new Ke(i,this),n=o.u(this.options);o.p(t),this.T(n),this._$AH=o}}_$AC(e){let t=Se.get(e.strings);return t===void 0&&Se.set(e.strings,t=new D(e)),t}k(e){K(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const o of e)i===t.length?t.push(r=new T(this.O(U()),this.O(U()),this,this.options)):r=t[i],r._$AI(o),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class W{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,o){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=f}_$AI(e,t=this,r,i){const o=this.strings;let n=!1;if(o===void 0)e=M(this,e,t,0),n=!k(e)||e!==this._$AH&&e!==$,n&&(this._$AH=e);else{const c=e;let a,p;for(e=o[0],a=0;a<o.length-1;a++)p=M(this,c[r+a],t,a),p===$&&(p=this._$AH[a]),n||=!k(p)||p!==this._$AH[a],p===f?e=f:e!==f&&(e+=(p??"")+o[a+1]),this._$AH[a]=p}n&&!i&&this.j(e)}j(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ge extends W{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===f?void 0:e}}class Qe extends W{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==f)}}class Ye extends W{constructor(e,t,r,i,o){super(e,t,r,i,o),this.type=5}_$AI(e,t=this){if((e=M(this,e,t,0)??f)===$)return;const r=this._$AH,i=e===f&&r!==f||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==f&&(r===f||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Xe{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){M(this,e)}}const et={I:T},tt=Z.litHtmlPolyfillSupport;tt?.(D,T),(Z.litHtmlVersions??=[]).push("3.3.1");const rt=(s,e,t)=>{const r=t?.renderBefore??e;let i=r._$litPart$;if(i===void 0){const o=t?.renderBefore??null;r._$litPart$=i=new T(e.insertBefore(U(),o),o,void 0,t??{})}return i._$AI(s),i};const Q=globalThis;let S=class extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=rt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return $}};S._$litElement$=!0,S.finalized=!0,Q.litElementHydrateSupport?.({LitElement:S});const it=Q.litElementPolyfillSupport;it?.({LitElement:S}),(Q.litElementVersions??=[]).push("4.2.1");const Y=s=>(e,t)=>{t!==void 0?t.addInitializer((()=>{customElements.define(s,e)})):customElements.define(s,e)};const st={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:J},ot=(s=st,e,t)=>{const{kind:r,metadata:i}=t;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),r==="setter"&&((s=Object.create(s)).wrapped=!0),o.set(t.name,s),r==="accessor"){const{name:n}=t;return{set(c){const a=e.get.call(this);e.set.call(this,c),this.requestUpdate(n,a,s)},init(c){return c!==void 0&&this.C(n,void 0,s,c),c}}}if(r==="setter"){const{name:n}=t;return function(c){const a=this[n];e.call(this,c),this.requestUpdate(n,a,s)}}throw Error("Unsupported decorator location: "+r)};function z(s){return(e,t)=>typeof t=="object"?ot(s,e,t):((r,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,r),n?Object.getOwnPropertyDescriptor(i,o):void 0})(s,e,t)}const X={ATTRIBUTE:1,CHILD:2},ee=s=>(...e)=>({_$litDirective$:s,values:e});let te=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};const{I:nt}=et,Ce=()=>document.createComment(""),j=(s,e,t)=>{const r=s._$AA.parentNode,i=e===void 0?s._$AB:e._$AA;if(t===void 0){const o=r.insertBefore(Ce(),i),n=r.insertBefore(Ce(),i);t=new nt(o,n,s,s.options)}else{const o=t._$AB.nextSibling,n=t._$AM,c=n!==s;if(c){let a;t._$AQ?.(s),t._$AM=s,t._$AP!==void 0&&(a=s._$AU)!==n._$AU&&t._$AP(a)}if(o!==i||c){let a=t._$AA;for(;a!==o;){const p=a.nextSibling;r.insertBefore(a,i),a=p}}}return t},C=(s,e,t=s)=>(s._$AI(e,t),s),at={},lt=(s,e=at)=>s._$AH=e,ct=s=>s._$AH,re=s=>{s._$AR(),s._$AA.remove()};const Pe=(s,e,t)=>{const r=new Map;for(let i=e;i<=t;i++)r.set(s[i],i);return r},dt=ee(class extends te{constructor(s){if(super(s),s.type!==X.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,e,t){let r;t===void 0?t=e:e!==void 0&&(r=e);const i=[],o=[];let n=0;for(const c of s)i[n]=r?r(c,n):n,o[n]=t(c,n),n++;return{values:o,keys:i}}render(s,e,t){return this.dt(s,e,t).values}update(s,[e,t,r]){const i=ct(s),{values:o,keys:n}=this.dt(e,t,r);if(!Array.isArray(i))return this.ut=n,o;const c=this.ut??=[],a=[];let p,u,l=0,h=i.length-1,d=0,m=o.length-1;for(;l<=h&&d<=m;)if(i[l]===null)l++;else if(i[h]===null)h--;else if(c[l]===n[d])a[d]=C(i[l],o[d]),l++,d++;else if(c[h]===n[m])a[m]=C(i[h],o[m]),h--,m--;else if(c[l]===n[m])a[m]=C(i[l],o[m]),j(s,a[m+1],i[l]),l++,m--;else if(c[h]===n[d])a[d]=C(i[h],o[d]),j(s,i[l],i[h]),h--,d++;else if(p===void 0&&(p=Pe(n,d,m),u=Pe(c,l,h)),p.has(c[l]))if(p.has(c[h])){const y=u.get(n[d]),he=y!==void 0?i[y]:null;if(he===null){const ke=j(s,i[l]);C(ke,o[d]),a[d]=ke}else a[d]=C(he,o[d]),j(s,i[l],he),i[y]=null;d++}else re(i[h]),h--;else re(i[l]),l++;for(;d<=m;){const y=j(s,a[m+1]);C(y,o[d]),a[d++]=y}for(;l<=h;){const y=i[l++];y!==null&&re(y)}return this.ut=n,lt(s,a),$}});const Me="important",pt=" !"+Me,ht=ee(class extends te{constructor(s){if(super(s),s.type!==X.ATTRIBUTE||s.name!=="style"||s.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce(((e,t)=>{const r=s[t];return r==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(s,[e]){const{style:t}=s.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const r of this.ft)e[r]==null&&(this.ft.delete(r),r.includes("-")?t.removeProperty(r):t[r]=null);for(const r in e){const i=e[r];if(i!=null){this.ft.add(r);const o=typeof i=="string"&&i.endsWith(pt);r.includes("-")||o?t.setProperty(r,o?i.slice(0,-11):i,o?Me:""):t[r]=i}}return $}});class ie extends te{constructor(e){if(super(e),this.it=f,e.type!==X.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===f||e==null)return this._t=void 0,this.it=e;if(e===$)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}ie.directiveName="unsafeHTML",ie.resultType=1;class se extends ie{}se.directiveName="unsafeSVG",se.resultType=2;const ft=ee(se),Te=(s,e="")=>{if(!s||!s.icon)return b``;const t=s.icon[0],r=s.icon[1],i=s.icon[4],o=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${t} ${r}" fill="currentColor" aria-hidden="true"><path d="${i}"/></svg>`;return b`<span class="${e} inline-block">${ft(o)}</span>`},oe=g`
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
`,ne=g`
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
`,ae=g`
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
`,Oe=g`
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
`,le=g`
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
`,ce=g`
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
`,Ue=g`
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
`;g`
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
`,g`
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
`,g`
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
`,g`
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
`,g`
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
`;var ut=Object.defineProperty,mt=Object.getOwnPropertyDescriptor,de=(s,e,t,r)=>{for(var i=r>1?void 0:r?mt(e,t):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(i=(r?n(e,t,i):n(i))||i);return r&&i&&ut(e,t,i),i};let H=class extends S{constructor(){super(...arguments),this.fields=[],this.columns=2}getIconTemplate(s){return s.iconTemplate?s.iconTemplate:s.icon?Te(s.icon,"icon icon-sm text-primary"):null}render(){if(!this.fields||this.fields.length===0)return b`<p class="empty-state">No data available.</p>`;const e={"--columns":`${Math.max(1,this.columns||1)}`};return b`
      <div class="field-grid" style=${ht(e)}>
        ${dt(this.fields,(t,r)=>t.label??`${r}`,t=>{const r=this.getIconTemplate(t);return b`
              <div class="field-item">
                ${r?b`<div class="field-icon">${r}</div>`:""}
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
    `}};H.styles=[ce,oe,ae,ne,le,g`
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
    `],de([z({type:Array,attribute:!1})],H.prototype,"fields",2),de([z({type:Number})],H.prototype,"columns",2),H=de([Y("field-list-widget")],H);var gt=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,pe=(s,e,t,r)=>{for(var i=r>1?void 0:r?vt(e,t):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(i=(r?n(e,t,i):n(i))||i);return r&&i&&gt(e,t,i),i};let L=class extends S{constructor(){super(...arguments),this.title="",this.icon=""}render(){return b`
      <div class="pattern-card card">
        ${this.title?b`
              <div class="pattern-card-header">
                ${this.icon?b`<span>${this.icon}</span>`:null}
                <span class="pattern-card-title">${this.title}</span>
              </div>
            `:null}
        <div>
          <slot></slot>
        </div>
      </div>
    `}};L.styles=[ce,oe,ae,ne,Oe,le,Ue,g`
      :host {
        display: block;
      }

    `],pe([z({type:String})],L.prototype,"title",2),pe([z({type:String})],L.prototype,"icon",2),L=pe([Y("card-widget")],L);var bt={prefix:"fas",iconName:"map-pin",icon:[320,512,[128205],"f276","M192 284.4C256.1 269.9 304 212.5 304 144 304 64.5 239.5 0 160 0S16 64.5 16 144c0 68.5 47.9 125.9 112 140.4L128 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-195.6zM168 96c-30.9 0-56 25.1-56 56 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.4 46.6-104 104-104 13.3 0 24 10.7 24 24s-10.7 24-24 24z"]},$t={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]},yt={prefix:"fas",iconName:"mobile",icon:[384,512,[128241,"mobile-android","mobile-phone"],"f3ce","M80 0C44.7 0 16 28.7 16 64l0 384c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L80 0zm72 416l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]},xt={prefix:"fas",iconName:"building",icon:[384,512,[127970,61687],"f1ad","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM176 352l32 0c17.7 0 32 14.3 32 32l0 80-96 0 0-80c0-17.7 14.3-32 32-32zM96 112c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM240 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM96 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm144-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"]},_t={prefix:"fas",iconName:"calendar",icon:[448,512,[128197,128198],"f133","M128 0C110.3 0 96 14.3 96 32l0 32-32 0C28.7 64 0 92.7 0 128l0 48 448 0 0-48c0-35.3-28.7-64-64-64l-32 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32-128 0 0-32c0-17.7-14.3-32-32-32zM0 224L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192-448 0z"]},wt={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144,62470,"user-alt","user-large"],"f007","M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"]},At={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"]},Et={prefix:"fas",iconName:"tag",icon:[512,512,[127991],"f02b","M32.5 96l0 149.5c0 17 6.7 33.3 18.7 45.3l192 192c25 25 65.5 25 90.5 0L483.2 333.3c25-25 25-65.5 0-90.5l-192-192C279.2 38.7 263 32 246 32L96.5 32c-35.3 0-64 28.7-64 64zm112 16a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},St={prefix:"fas",iconName:"briefcase",icon:[512,512,[128188],"f0b1","M200 48l112 0c4.4 0 8 3.6 8 8l0 40-128 0 0-40c0-4.4 3.6-8 8-8zm-56 8l0 40-80 0C28.7 96 0 124.7 0 160l0 96 512 0 0-96c0-35.3-28.7-64-64-64l-80 0 0-40c0-30.9-25.1-56-56-56L200 0c-30.9 0-56 25.1-56 56zM512 304l-192 0 0 16c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-16-192 0 0 112c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-112z"]},zt=Object.defineProperty,Ct=Object.getOwnPropertyDescriptor,V=(s,e,t,r)=>{for(var i=r>1?void 0:r?Ct(e,t):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(i=(r?n(e,t,i):n(i))||i);return r&&i&&zt(e,t,i),i};const Pt=[{label:"Manager",title:"Maria Thompson",icon:"user",highlight:!0},{label:"Location",title:"Dallas Distribution Center, Building C",icon:"map-pin"},{label:"Work phone",title:"+1 (214) 555-0182",icon:"phone"},{label:"Job Title",title:"Forklift Operator",icon:"briefcase"},{label:"Work Schedule",title:"Mon-Fri, 6:00 AM – 2:30 PM",icon:"calendar"},{label:"Department",title:"Warehouse Operations",icon:"building"},{label:"Email",title:"james.davis@nova.com",icon:"envelope",highlight:!0},{label:"Nickname",title:"JD",icon:"tag"}];v.EmployeeDetailsWidget=class extends S{constructor(){super(),this.fields=[],this.columns=2,this.title="Employee Details",this.fields=[...Pt]}getIconFromString(e){const t={user:wt,"map-pin":bt,phone:At,briefcase:St,calendar:_t,building:xt,envelope:$t,tag:Et,mobile:yt},r=t[e];return r||(console.warn(`[employee-details-widget] Unknown icon "${e}", defaulting to "user".`),t.user)}render(){const e=this.fields.map(t=>{const r=this.getIconFromString(t.icon);return{...t,iconTemplate:Te(r,"icon icon-sm text-primary")}});return b`
      <card-widget title=${this.title}>
        <section role="region">
          <field-list-widget
            .fields=${e}
            .columns=${this.columns}
          ></field-list-widget>
        </section>
      </card-widget>
    `}},v.EmployeeDetailsWidget.styles=[ce,oe,ae,ne,Oe,le,Ue,g`
      :host {
        display: block;
      }
    `],V([z({attribute:"fields",converter:{fromAttribute:s=>{if(!s)return[];try{return JSON.parse(s)}catch(e){return console.warn("[employee-details-widget] Unable to parse fields attribute, expected JSON array.",e),[]}}}})],v.EmployeeDetailsWidget.prototype,"fields",2),V([z({type:Number})],v.EmployeeDetailsWidget.prototype,"columns",2),V([z({type:String})],v.EmployeeDetailsWidget.prototype,"title",2),v.EmployeeDetailsWidget=V([Y("employee-details-widget")],v.EmployeeDetailsWidget),Object.defineProperty(v,Symbol.toStringTag,{value:"Module"})}));
