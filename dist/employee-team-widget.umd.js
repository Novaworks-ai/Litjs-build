(function(v,y){typeof exports=="object"&&typeof module<"u"?y(exports):typeof define=="function"&&define.amd?define(["exports"],y):(v=typeof globalThis<"u"?globalThis:v||self,y(v.EmployeeTeamWidget={}))})(this,(function(v){"use strict";const y=globalThis,W=y.ShadowRoot&&(y.ShadyCSS===void 0||y.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,V=Symbol(),et=new WeakMap;let st=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==V)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(W&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=et.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&et.set(e,t))}return t}toString(){return this.cssText}};const Tt=i=>new st(typeof i=="string"?i:i+"",void 0,V),g=(i,...t)=>{const e=i.length===1?i[0]:t.reduce(((s,r,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[o+1]),i[0]);return new st(e,i,V)},Ut=(i,t)=>{if(W)i.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const s=document.createElement("style"),r=y.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}},rt=W?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Tt(e)})(i):i;const{is:Ot,defineProperty:kt,getOwnPropertyDescriptor:Mt,getOwnPropertyNames:Nt,getOwnPropertySymbols:Ht,getPrototypeOf:Dt}=Object,D=globalThis,it=D.trustedTypes,jt=it?it.emptyScript:"",Rt=D.reactiveElementPolyfillSupport,U=(i,t)=>i,j={toAttribute(i,t){switch(t){case Boolean:i=i?jt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},q=(i,t)=>!Ot(i,t),ot={attribute:!0,type:String,converter:j,reflect:!1,useDefault:!1,hasChanged:q};Symbol.metadata??=Symbol("metadata"),D.litPropertyMetadata??=new WeakMap;let C=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ot){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&kt(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){const{get:r,set:o}=Mt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:r,set(n){const c=r?.call(this);o?.call(this,n),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ot}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;const t=Dt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){const e=this.properties,s=[...Nt(e),...Ht(e)];for(const r of s)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const r of s)e.unshift(rt(r))}else t!==void 0&&e.push(rt(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ut(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){const o=(s.converter?.toAttribute!==void 0?s.converter:j).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const o=s.getPropertyOptions(r),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:j;this._$Em=r;const c=n.fromAttribute(e,o.type);this[r]=c??this._$Ej?.get(r)??c,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){const r=this.constructor,o=this[t];if(s??=r.getPropertyOptions(t),!((s.hasChanged??q)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,o]of s){const{wrapped:n}=o,c=this[r];n!==!0||this._$AL.has(r)||c===void 0||this.C(r,void 0,o,c)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((s=>s.hostUpdate?.())),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[U("elementProperties")]=new Map,C[U("finalized")]=new Map,Rt?.({ReactiveElement:C}),(D.reactiveElementVersions??=[]).push("2.1.1");const Z=globalThis,R=Z.trustedTypes,nt=R?R.createPolicy("lit-html",{createHTML:i=>i}):void 0,at="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,lt="?"+x,It=`<${lt}>`,A=document,O=()=>A.createComment(""),k=i=>i===null||typeof i!="object"&&typeof i!="function",F=Array.isArray,Lt=i=>F(i)||typeof i?.[Symbol.iterator]=="function",J=`[ 	
\f\r]`,M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ct=/-->/g,ht=/>/g,w=RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pt=/'/g,dt=/"/g,ft=/^(?:script|style|textarea|title)$/i,Bt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),$=Bt(1),_=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),ut=new WeakMap,S=A.createTreeWalker(A,129);function mt(i,t){if(!F(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return nt!==void 0?nt.createHTML(t):t}const Wt=(i,t)=>{const e=i.length-1,s=[];let r,o=t===2?"<svg>":t===3?"<math>":"",n=M;for(let c=0;c<e;c++){const a=i[c];let p,u,l=-1,d=0;for(;d<a.length&&(n.lastIndex=d,u=n.exec(a),u!==null);)d=n.lastIndex,n===M?u[1]==="!--"?n=ct:u[1]!==void 0?n=ht:u[2]!==void 0?(ft.test(u[2])&&(r=RegExp("</"+u[2],"g")),n=w):u[3]!==void 0&&(n=w):n===w?u[0]===">"?(n=r??M,l=-1):u[1]===void 0?l=-2:(l=n.lastIndex-u[2].length,p=u[1],n=u[3]===void 0?w:u[3]==='"'?dt:pt):n===dt||n===pt?n=w:n===ct||n===ht?n=M:(n=w,r=void 0);const h=n===w&&i[c+1].startsWith("/>")?" ":"";o+=n===M?a+It:l>=0?(s.push(p),a.slice(0,l)+at+a.slice(l)+x+h):a+x+(l===-2?c:h)}return[mt(i,o+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class N{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let o=0,n=0;const c=t.length-1,a=this.parts,[p,u]=Wt(t,e);if(this.el=N.createElement(p,s),S.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(r=S.nextNode())!==null&&a.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(const l of r.getAttributeNames())if(l.endsWith(at)){const d=u[n++],h=r.getAttribute(l).split(x),m=/([.?@])?(.*)/.exec(d);a.push({type:1,index:o,name:m[2],strings:h,ctor:m[1]==="."?qt:m[1]==="?"?Zt:m[1]==="@"?Ft:I}),r.removeAttribute(l)}else l.startsWith(x)&&(a.push({type:6,index:o}),r.removeAttribute(l));if(ft.test(r.tagName)){const l=r.textContent.split(x),d=l.length-1;if(d>0){r.textContent=R?R.emptyScript:"";for(let h=0;h<d;h++)r.append(l[h],O()),S.nextNode(),a.push({type:2,index:++o});r.append(l[d],O())}}}else if(r.nodeType===8)if(r.data===lt)a.push({type:2,index:o});else{let l=-1;for(;(l=r.data.indexOf(x,l+1))!==-1;)a.push({type:7,index:o}),l+=x.length-1}o++}}static createElement(t,e){const s=A.createElement("template");return s.innerHTML=t,s}}function P(i,t,e=i,s){if(t===_)return t;let r=s!==void 0?e._$Co?.[s]:e._$Cl;const o=k(t)?void 0:t._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),o===void 0?r=void 0:(r=new o(i),r._$AT(i,e,s)),s!==void 0?(e._$Co??=[])[s]=r:e._$Cl=r),r!==void 0&&(t=P(i,r._$AS(i,t.values),r,s)),t}let Vt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,r=(t?.creationScope??A).importNode(e,!0);S.currentNode=r;let o=S.nextNode(),n=0,c=0,a=s[0];for(;a!==void 0;){if(n===a.index){let p;a.type===2?p=new z(o,o.nextSibling,this,t):a.type===1?p=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(p=new Jt(o,this,t)),this._$AV.push(p),a=s[++c]}n!==a?.index&&(o=S.nextNode(),n++)}return S.currentNode=A,r}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}};class z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),k(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==_&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Lt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==f&&k(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=N.createElement(mt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(e);else{const o=new Vt(r,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=ut.get(t.strings);return e===void 0&&ut.set(t.strings,e=new N(t)),e}k(t){F(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,r=0;for(const o of t)r===e.length?e.push(s=new z(this.O(O()),this.O(O()),this,this.options)):s=e[r],s._$AI(o),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class I{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,o){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=f}_$AI(t,e=this,s,r){const o=this.strings;let n=!1;if(o===void 0)t=P(this,t,e,0),n=!k(t)||t!==this._$AH&&t!==_,n&&(this._$AH=t);else{const c=t;let a,p;for(t=o[0],a=0;a<o.length-1;a++)p=P(this,c[s+a],e,a),p===_&&(p=this._$AH[a]),n||=!k(p)||p!==this._$AH[a],p===f?t=f:t!==f&&(t+=(p??"")+o[a+1]),this._$AH[a]=p}n&&!r&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class qt extends I{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}}class Zt extends I{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}}class Ft extends I{constructor(t,e,s,r,o){super(t,e,s,r,o),this.type=5}_$AI(t,e=this){if((t=P(this,t,e,0)??f)===_)return;const s=this._$AH,r=t===f&&s!==f||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==f&&(s===f||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Jt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const Kt={I:z},Gt=Z.litHtmlPolyfillSupport;Gt?.(N,z),(Z.litHtmlVersions??=[]).push("3.3.1");const Qt=(i,t,e)=>{const s=e?.renderBefore??t;let r=s._$litPart$;if(r===void 0){const o=e?.renderBefore??null;s._$litPart$=r=new z(t.insertBefore(O(),o),o,void 0,e??{})}return r._$AI(i),r};const K=globalThis;let T=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Qt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return _}};T._$litElement$=!0,T.finalized=!0,K.litElementHydrateSupport?.({LitElement:T});const Yt=K.litElementPolyfillSupport;Yt?.({LitElement:T}),(K.litElementVersions??=[]).push("4.2.1");const gt=i=>(t,e)=>{e!==void 0?e.addInitializer((()=>{customElements.define(i,t)})):customElements.define(i,t)};const Xt={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:q},te=(i=Xt,t,e)=>{const{kind:s,metadata:r}=e;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),s==="setter"&&((i=Object.create(i)).wrapped=!0),o.set(e.name,i),s==="accessor"){const{name:n}=e;return{set(c){const a=t.get.call(this);t.set.call(this,c),this.requestUpdate(n,a,i)},init(c){return c!==void 0&&this.C(n,void 0,i,c),c}}}if(s==="setter"){const{name:n}=e;return function(c){const a=this[n];t.call(this,c),this.requestUpdate(n,a,i)}}throw Error("Unsupported decorator location: "+s)};function G(i){return(t,e)=>typeof e=="object"?te(i,t,e):((s,r,o)=>{const n=r.hasOwnProperty(o);return r.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(r,o):void 0})(i,t,e)}function vt(i){return G({...i,state:!0,attribute:!1})}const $t={CHILD:2},bt=i=>(...t)=>({_$litDirective$:i,values:t});class yt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const{I:ee}=Kt,xt=()=>document.createComment(""),H=(i,t,e)=>{const s=i._$AA.parentNode,r=t===void 0?i._$AB:t._$AA;if(e===void 0){const o=s.insertBefore(xt(),r),n=s.insertBefore(xt(),r);e=new ee(o,n,i,i.options)}else{const o=e._$AB.nextSibling,n=e._$AM,c=n!==i;if(c){let a;e._$AQ?.(i),e._$AM=i,e._$AP!==void 0&&(a=i._$AU)!==n._$AU&&e._$AP(a)}if(o!==r||c){let a=e._$AA;for(;a!==o;){const p=a.nextSibling;s.insertBefore(a,r),a=p}}}return e},E=(i,t,e=i)=>(i._$AI(t,e),i),se={},re=(i,t=se)=>i._$AH=t,ie=i=>i._$AH,Q=i=>{i._$AR(),i._$AA.remove()};const _t=(i,t,e)=>{const s=new Map;for(let r=t;r<=e;r++)s.set(i[r],r);return s},oe=bt(class extends yt{constructor(i){if(super(i),i.type!==$t.CHILD)throw Error("repeat() can only be used in text expressions")}dt(i,t,e){let s;e===void 0?e=t:t!==void 0&&(s=t);const r=[],o=[];let n=0;for(const c of i)r[n]=s?s(c,n):n,o[n]=e(c,n),n++;return{values:o,keys:r}}render(i,t,e){return this.dt(i,t,e).values}update(i,[t,e,s]){const r=ie(i),{values:o,keys:n}=this.dt(t,e,s);if(!Array.isArray(r))return this.ut=n,o;const c=this.ut??=[],a=[];let p,u,l=0,d=r.length-1,h=0,m=o.length-1;for(;l<=d&&h<=m;)if(r[l]===null)l++;else if(r[d]===null)d--;else if(c[l]===n[h])a[h]=E(r[l],o[h]),l++,h++;else if(c[d]===n[m])a[m]=E(r[d],o[m]),d--,m--;else if(c[l]===n[m])a[m]=E(r[l],o[m]),H(i,a[m+1],r[l]),l++,m--;else if(c[d]===n[h])a[h]=E(r[d],o[h]),H(i,r[l],r[d]),d--,h++;else if(p===void 0&&(p=_t(n,h,m),u=_t(c,l,d)),p.has(c[l]))if(p.has(c[d])){const b=u.get(n[h]),tt=b!==void 0?r[b]:null;if(tt===null){const zt=H(i,r[l]);E(zt,o[h]),a[h]=zt}else a[h]=E(tt,o[h]),H(i,r[l],tt),r[b]=null;h++}else Q(r[d]),d--;else Q(r[l]),l++;for(;h<=m;){const b=H(i,a[m+1]);E(b,o[h]),a[h++]=b}for(;l<=d;){const b=r[l++];b!==null&&Q(b)}return this.ut=n,re(i,a),_}});var ne={icon:[448,512,[],"f077","M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},ae={icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]};const At=g`
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
`,wt=g`
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
`,St=g`
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
`,le=g`
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
`,Et=g`
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
`,Ct=g`
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
`,ce=g`
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
`,g`
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
`;var he=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,Pt=(i,t,e,s)=>{for(var r=s>1?void 0:s?pe(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(r=(s?n(t,e,r):n(r))||r);return s&&r&&he(t,e,r),r};let L=class extends T{constructor(){super(...arguments),this.fields=[]}render(){return this.fields?.length?$`
      <ul role="list" class="user-list">
        ${this.fields.map(i=>this.renderUser(i))}
      </ul>
    `:$``}renderUser(i){const t=i.avatar?$`<span class="avatar"
          ><img src="${i.avatar}" alt="${i.name}"
        /></span>`:this.renderInitials(i);return $`
      <li class="user-item">
        ${t}
        <div>
          <p class="name">${i.name}</p>
          ${i.designation?$`<p class="role">${i.designation}</p>`:""}
        </div>
      </li>
    `}renderInitials(i){const t=this.getInitials(i);return $` <span class="avatar">${t}</span> `}getInitials(i){if(i.firstName||i.lastName)return((i.firstName?.charAt(0)??"")+(i.lastName?.charAt(0)??"")).toUpperCase();const t=i.name.split(" ");return t.length>=2?(t[0][0]+t[1][0]).toUpperCase():t[0][0].toUpperCase()}};L.styles=[Ct,At,St,wt,Et,g`
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
    `],Pt([G({type:Array})],L.prototype,"fields",2),L=Pt([gt("field-users-widget")],L);class Y extends yt{constructor(t){if(super(t),this.it=f,t.type!==$t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===f||t==null)return this._t=void 0,this.it=t;if(t===_)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Y.directiveName="unsafeHTML",Y.resultType=1;class X extends Y{}X.directiveName="unsafeSVG",X.resultType=2;const de=bt(X),fe=(i,t="")=>{if(!i||!i.icon)return $``;const e=i.icon[0],s=i.icon[1],r=i.icon[4],o=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${e} ${s}" fill="currentColor" aria-hidden="true"><path d="${r}"/></svg>`;return $`<span class="${t} inline-block">${de(o)}</span>`};var ue=Object.defineProperty,me=Object.getOwnPropertyDescriptor,B=(i,t,e,s)=>{for(var r=s>1?void 0:s?me(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(r=(s?n(t,e,r):n(r))||r);return s&&r&&ue(t,e,r),r};v.EmployeeTeamWidget=class extends T{constructor(){super(...arguments),this.teamData=null,this.openStates=[],this.sections=[]}updated(t){t.has("teamData")&&(this.transformTeamData(),this.syncOpenStates())}syncOpenStates(){this.openStates=this.sections.map((t,e)=>this.openStates[e]??!0)}transformTeamData(){if(!this.teamData){this.sections=[];return}if(Array.isArray(this.teamData)){this.sections=this.teamData;return}const t=this.teamData,e=[];t.direct_manager&&e.push({sectionTitle:"Direct manager",users:[t.direct_manager]}),t.other_managers?.length&&e.push({sectionTitle:"Other managers",users:t.other_managers}),t.coworkers?.length&&e.push({sectionTitle:"Coworkers",users:t.coworkers}),t.direct_reports?.length&&e.push({sectionTitle:"Direct reports",users:t.direct_reports}),this.sections=e}getSections(){return this.sections}setTeamData(t){this.teamData=t}toggleSection(t){const e=[...this.openStates];e[t]=!e[t],this.openStates=e}renderSection(t,e){const s=this.openStates[e],r=`team-panel-${e}`,o=`team-toggle-${e}`;return $`
      <div class="section">
        <button
          id=${o}
          type="button"
          @click=${()=>this.toggleSection(e)}
          class="section-toggle"
          aria-expanded=${String(s)}
          aria-controls=${r}
        >
          <span class="section-title">
            ${t.sectionTitle} (${t.users.length})
          </span>
          <span class="chevron">
            ${fe(s?ne:ae,"icon icon-sm muted")}
          </span>
        </button>

        <div
          id=${r}
          role="region"
          aria-labelledby=${o}
          style=${s?"max-height: var(--team-section-max-height, 9999px); opacity: 1;":"max-height: 0; opacity: 0;"}
          class="section-panel"
        >
          <div class="section-body">
            <field-users-widget .fields=${t.users}></field-users-widget>
          </div>
        </div>
      </div>
    `}render(){return!this.sections||this.sections.length===0?$`<p class="empty-state" role="status">
        No team information available.
      </p>`:$`
      ${oe(this.sections,(t,e)=>`${t.sectionTitle}-${e}`,(t,e)=>this.renderSection(t,e))}
    `}},v.EmployeeTeamWidget.styles=[Ct,At,St,wt,le,Et,ce,g`
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
    `],B([G({type:Array})],v.EmployeeTeamWidget.prototype,"teamData",2),B([vt()],v.EmployeeTeamWidget.prototype,"openStates",2),B([vt()],v.EmployeeTeamWidget.prototype,"sections",2),v.EmployeeTeamWidget=B([gt("employee-team-widget")],v.EmployeeTeamWidget),Object.defineProperty(v,Symbol.toStringTag,{value:"Module"})}));
