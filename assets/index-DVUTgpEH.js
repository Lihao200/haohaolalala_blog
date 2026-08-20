const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PostView-DL6IT1Yo.js","assets/PostView-DjYVvUel.css","assets/ArchiveView-C6KqjkZe.js","assets/ArchiveView-C84tIl6_.css","assets/AboutView-DjBe-eBh.js","assets/AboutView-BOdZp7GN.css"])))=>i.map(i=>d[i]);
var Hl=Object.defineProperty;var Vl=(e,t,n)=>t in e?Hl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var oe=(e,t,n)=>Vl(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function as(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const le={},Zt=[],ot=()=>{},Ji=()=>!1,or=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),lr=e=>e.startsWith("onUpdate:"),ve=Object.assign,cs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},zl=Object.prototype.hasOwnProperty,X=(e,t)=>zl.call(e,t),j=Array.isArray,Qt=e=>On(e)==="[object Map]",Zi=e=>On(e)==="[object Set]",Gs=e=>On(e)==="[object Date]",H=e=>typeof e=="function",ue=e=>typeof e=="string",at=e=>typeof e=="symbol",ee=e=>e!==null&&typeof e=="object",Qi=e=>(ee(e)||H(e))&&H(e.then)&&H(e.catch),Yi=Object.prototype.toString,On=e=>Yi.call(e),Ul=e=>On(e).slice(8,-1),Xi=e=>On(e)==="[object Object]",us=e=>ue(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,dn=as(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ar=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Gl=/-\w/g,Le=ar(e=>e.replace(Gl,t=>t.slice(1).toUpperCase())),ql=/\B([A-Z])/g,zt=ar(e=>e.replace(ql,"-$1").toLowerCase()),cr=ar(e=>e.charAt(0).toUpperCase()+e.slice(1)),Cr=ar(e=>e?`on${cr(e)}`:""),st=(e,t)=>!Object.is(e,t),Ar=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},eo=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Wl=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Kl=e=>{const t=ue(e)?Number(e):NaN;return isNaN(t)?e:t};let qs;const ur=()=>qs||(qs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fr(e){if(j(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=ue(r)?Yl(r):fr(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(ue(e)||ee(e))return e}const Jl=/;(?![^(]*\))/g,Zl=/:([^]+)/,Ql=/\/\*[^]*?\*\//g;function Yl(e){const t={};return e.replace(Ql,"").split(Jl).forEach(n=>{if(n){const r=n.split(Zl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Sn(e){let t="";if(ue(e))t=e;else if(j(e))for(let n=0;n<e.length;n++){const r=Sn(e[n]);r&&(t+=r+" ")}else if(ee(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Xl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ea=as(Xl);function to(e){return!!e||e===""}function ta(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=fs(e[r],t[r]);return n}function fs(e,t){if(e===t)return!0;let n=Gs(e),r=Gs(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=at(e),r=at(t),n||r)return e===t;if(n=j(e),r=j(t),n||r)return n&&r?ta(e,t):!1;if(n=ee(e),r=ee(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const l in e){const o=e.hasOwnProperty(l),a=t.hasOwnProperty(l);if(o&&!a||!o&&a||!fs(e[l],t[l]))return!1}}return String(e)===String(t)}const no=e=>!!(e&&e.__v_isRef===!0),Tt=e=>ue(e)?e:e==null?"":j(e)||ee(e)&&(e.toString===Yi||!H(e.toString))?no(e)?Tt(e.value):JSON.stringify(e,ro,2):String(e),ro=(e,t)=>no(t)?ro(e,t.value):Qt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[Er(r,i)+" =>"]=s,n),{})}:Zi(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Er(n))}:at(t)?Er(t):ee(t)&&!j(t)&&!Xi(t)?String(t):t,Er=(e,t="")=>{var n;return at(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xe;class na{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&xe&&(xe.active?(this.parent=xe,this.index=(xe.scopes||(xe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const r=this.scopes.slice();for(t=0,n=r.length;t<n;t++)r[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const s=this.scopes.slice();for(t=0,n=s.length;t<n;t++)s[t].resume()}const r=this.effects.slice();for(t=0,n=r.length;t<n;t++)r[t].resume()}}run(t){if(this._active){const n=xe;try{return xe=this,t()}finally{xe=n}}}on(){++this._on===1&&(this.prevScope=xe,xe=this)}off(){if(this._on>0&&--this._on===0){if(xe===this)xe=this.prevScope;else{let t=xe;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ra(){return xe}let ce;const Rr=new WeakSet;class so{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xe&&(xe.active?xe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Rr.has(this)&&(Rr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||oo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ws(this),lo(this);const t=ce,n=qe;ce=this,qe=!0;try{return this.fn()}finally{ao(this),ce=t,qe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ds(t);this.deps=this.depsTail=void 0,Ws(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Rr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){zr(this)&&this.run()}get dirty(){return zr(this)}}let io=0,gn,mn;function oo(e,t=!1){if(e.flags|=8,t){e.next=mn,mn=e;return}e.next=gn,gn=e}function hs(){io++}function ps(){if(--io>0)return;if(mn){let t=mn;for(mn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;gn;){let t=gn;for(gn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function lo(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ao(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ds(r),sa(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function zr(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(co(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function co(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===wn)||(e.globalVersion=wn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!zr(e))))return;e.flags|=2;const t=e.dep,n=ce,r=qe;ce=e,qe=!0;try{lo(e);const s=e.fn(e._value);(t.version===0||st(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{ce=n,qe=r,ao(e),e.flags&=-3}}function ds(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ds(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function sa(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let qe=!0;const uo=[];function _t(){uo.push(qe),qe=!1}function xt(){const e=uo.pop();qe=e===void 0?!0:e}function Ws(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ce;ce=void 0;try{t()}finally{ce=n}}}let wn=0;class ia{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class gs{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ce||!qe||ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ce)n=this.activeLink=new ia(ce,this),ce.deps?(n.prevDep=ce.depsTail,ce.depsTail.nextDep=n,ce.depsTail=n):ce.deps=ce.depsTail=n,fo(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ce.depsTail,n.nextDep=void 0,ce.depsTail.nextDep=n,ce.depsTail=n,ce.deps===n&&(ce.deps=r)}return n}trigger(t){this.version++,wn++,this.notify(t)}notify(t){hs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ps()}}}function fo(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)fo(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Ur=new WeakMap,jt=Symbol(""),Gr=Symbol(""),kn=Symbol("");function we(e,t,n){if(qe&&ce){let r=Ur.get(e);r||Ur.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new gs),s.map=r,s.key=n),s.track()}}function gt(e,t,n,r,s,i){const l=Ur.get(e);if(!l){wn++;return}const o=a=>{a&&a.trigger()};if(hs(),t==="clear")l.forEach(o);else{const a=j(e),u=a&&us(n);if(a&&n==="length"){const c=Number(r);l.forEach((f,p)=>{(p==="length"||p===kn||!at(p)&&p>=c)&&o(f)})}else switch((n!==void 0||l.has(void 0))&&o(l.get(n)),u&&o(l.get(kn)),t){case"add":a?u&&o(l.get("length")):(o(l.get(jt)),Qt(e)&&o(l.get(Gr)));break;case"delete":a||(o(l.get(jt)),Qt(e)&&o(l.get(Gr)));break;case"set":Qt(e)&&o(l.get(jt));break}}ps()}function Wt(e){const t=J(e);return t===e?t:(we(t,"iterate",kn),Ue(e)?t:t.map(We))}function hr(e){return we(e=J(e),"iterate",kn),e}function nt(e,t){return St(e)?tn(Ft(e)?We(t):t):We(t)}const oa={__proto__:null,[Symbol.iterator](){return Tr(this,Symbol.iterator,e=>nt(this,e))},concat(...e){return Wt(this).concat(...e.map(t=>j(t)?Wt(t):t))},entries(){return Tr(this,"entries",e=>(e[1]=nt(this,e[1]),e))},every(e,t){return ut(this,"every",e,t,void 0,arguments)},filter(e,t){return ut(this,"filter",e,t,n=>n.map(r=>nt(this,r)),arguments)},find(e,t){return ut(this,"find",e,t,n=>nt(this,n),arguments)},findIndex(e,t){return ut(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ut(this,"findLast",e,t,n=>nt(this,n),arguments)},findLastIndex(e,t){return ut(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ut(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ir(this,"includes",e)},indexOf(...e){return Ir(this,"indexOf",e)},join(e){return Wt(this).join(e)},lastIndexOf(...e){return Ir(this,"lastIndexOf",e)},map(e,t){return ut(this,"map",e,t,void 0,arguments)},pop(){return on(this,"pop")},push(...e){return on(this,"push",e)},reduce(e,...t){return Ks(this,"reduce",e,t)},reduceRight(e,...t){return Ks(this,"reduceRight",e,t)},shift(){return on(this,"shift")},some(e,t){return ut(this,"some",e,t,void 0,arguments)},splice(...e){return on(this,"splice",e)},toReversed(){return Wt(this).toReversed()},toSorted(e){return Wt(this).toSorted(e)},toSpliced(...e){return Wt(this).toSpliced(...e)},unshift(...e){return on(this,"unshift",e)},values(){return Tr(this,"values",e=>nt(this,e))}};function Tr(e,t,n){const r=hr(e),s=r[t]();return r!==e&&!Ue(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const la=Array.prototype;function ut(e,t,n,r,s,i){const l=hr(e),o=l!==e&&!Ue(e),a=l[t];if(a!==la[t]){const f=a.apply(e,i);return o?We(f):f}let u=n;l!==e&&(o?u=function(f,p){return n.call(this,nt(e,f),p,e)}:n.length>2&&(u=function(f,p){return n.call(this,f,p,e)}));const c=a.call(l,u,r);return o&&s?s(c):c}function Ks(e,t,n,r){const s=hr(e),i=s!==e&&!Ue(e);let l=n,o=!1;s!==e&&(i?(o=r.length===0,l=function(u,c,f){return o&&(o=!1,u=nt(e,u)),n.call(this,u,nt(e,c),f,e)}):n.length>3&&(l=function(u,c,f){return n.call(this,u,c,f,e)}));const a=s[t](l,...r);return o?nt(e,a):a}function Ir(e,t,n){const r=J(e);we(r,"iterate",kn);const s=r[t](...n);return(s===-1||s===!1)&&vs(n[0])?(n[0]=J(n[0]),r[t](...n)):s}function on(e,t,n=[]){_t(),hs();const r=J(e)[t].apply(e,n);return ps(),xt(),r}const aa=as("__proto__,__v_isRef,__isVue"),ho=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(at));function ca(e){at(e)||(e=String(e));const t=J(this);return we(t,"has",e),t.hasOwnProperty(e)}class po{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?ya:vo:i?bo:mo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const l=j(t);if(!s){let a;if(l&&(a=oa[n]))return a;if(n==="hasOwnProperty")return ca}const o=Reflect.get(t,n,Ce(t)?t:r);if((at(n)?ho.has(n):aa(n))||(s||we(t,"get",n),i))return o;if(Ce(o)){const a=l&&us(n)?o:o.value;return s&&ee(a)?Wr(a):a}return ee(o)?s?Wr(o):pr(o):o}}class go extends po{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];const l=j(t)&&us(n);if(!this._isShallow){const u=St(i);if(!Ue(r)&&!St(r)&&(i=J(i),r=J(r)),!l&&Ce(i)&&!Ce(r))return u||(i.value=r),!0}const o=l?Number(n)<t.length:X(t,n),a=Reflect.set(t,n,r,Ce(t)?t:s);return t===J(s)&&a&&(o?st(r,i)&&gt(t,"set",n,r):gt(t,"add",n,r)),a}deleteProperty(t,n){const r=X(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&gt(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!at(n)||!ho.has(n))&&we(t,"has",n),r}ownKeys(t){return we(t,"iterate",j(t)?"length":jt),Reflect.ownKeys(t)}}class ua extends po{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const fa=new go,ha=new ua,pa=new go(!0);const qr=e=>e,Dn=e=>Reflect.getPrototypeOf(e);function da(e,t,n){return function(...r){const s=this.__v_raw,i=J(s),l=Qt(i),o=e==="entries"||e===Symbol.iterator&&l,a=e==="keys"&&l,u=s[e](...r),c=n?qr:t?tn:We;return!t&&we(i,"iterate",a?Gr:jt),ve(Object.create(u),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:o?[c(f[0]),c(f[1])]:c(f),done:p}}})}}function $n(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ga(e,t){const n={get(s){const i=this.__v_raw,l=J(i),o=J(s);e||(st(s,o)&&we(l,"get",s),we(l,"get",o));const{has:a}=Dn(l),u=t?qr:e?tn:We;if(a.call(l,s))return u(i.get(s));if(a.call(l,o))return u(i.get(o));i!==l&&i.get(s)},get size(){const s=this.__v_raw;return!e&&we(J(s),"iterate",jt),s.size},has(s){const i=this.__v_raw,l=J(i),o=J(s);return e||(st(s,o)&&we(l,"has",s),we(l,"has",o)),s===o?i.has(s):i.has(s)||i.has(o)},forEach(s,i){const l=this,o=l.__v_raw,a=J(o),u=t?qr:e?tn:We;return!e&&we(a,"iterate",jt),o.forEach((c,f)=>s.call(i,u(c),u(f),l))}};return ve(n,e?{add:$n("add"),set:$n("set"),delete:$n("delete"),clear:$n("clear")}:{add(s){const i=J(this),l=Dn(i),o=J(s),a=!t&&!Ue(s)&&!St(s)?o:s;return l.has.call(i,a)||st(s,a)&&l.has.call(i,s)||st(o,a)&&l.has.call(i,o)||(i.add(a),gt(i,"add",a,a)),this},set(s,i){!t&&!Ue(i)&&!St(i)&&(i=J(i));const l=J(this),{has:o,get:a}=Dn(l);let u=o.call(l,s);u||(s=J(s),u=o.call(l,s));const c=a.call(l,s);return l.set(s,i),u?st(i,c)&&gt(l,"set",s,i):gt(l,"add",s,i),this},delete(s){const i=J(this),{has:l,get:o}=Dn(i);let a=l.call(i,s);a||(s=J(s),a=l.call(i,s)),o&&o.call(i,s);const u=i.delete(s);return a&&gt(i,"delete",s,void 0),u},clear(){const s=J(this),i=s.size!==0,l=s.clear();return i&&gt(s,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=da(s,e,t)}),n}function ms(e,t){const n=ga(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(X(n,s)&&s in r?n:r,s,i)}const ma={get:ms(!1,!1)},ba={get:ms(!1,!0)},va={get:ms(!0,!1)};const mo=new WeakMap,bo=new WeakMap,vo=new WeakMap,ya=new WeakMap;function _a(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pr(e){return St(e)?e:bs(e,!1,fa,ma,mo)}function yo(e){return bs(e,!1,pa,ba,bo)}function Wr(e){return bs(e,!0,ha,va,vo)}function bs(e,t,n,r,s){if(!ee(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const i=s.get(e);if(i)return i;const l=_a(Ul(e));if(l===0)return e;const o=new Proxy(e,l===2?r:n);return s.set(e,o),o}function Ft(e){return St(e)?Ft(e.__v_raw):!!(e&&e.__v_isReactive)}function St(e){return!!(e&&e.__v_isReadonly)}function Ue(e){return!!(e&&e.__v_isShallow)}function vs(e){return e?!!e.__v_raw:!1}function J(e){const t=e&&e.__v_raw;return t?J(t):e}function xa(e){return!X(e,"__v_skip")&&Object.isExtensible(e)&&eo(e,"__v_skip",!0),e}const We=e=>ee(e)?pr(e):e,tn=e=>ee(e)?Wr(e):e;function Ce(e){return e?e.__v_isRef===!0:!1}function ys(e){return _o(e,!1)}function Sa(e){return _o(e,!0)}function _o(e,t){return Ce(e)?e:new wa(e,t)}class wa{constructor(t,n){this.dep=new gs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:J(t),this._value=n?t:We(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Ue(t)||St(t);t=r?t:J(t),st(t,n)&&(this._rawValue=t,this._value=r?t:We(t),this.dep.trigger())}}function it(e){return Ce(e)?e.value:e}const ka={get:(e,t,n)=>t==="__v_raw"?e:it(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Ce(s)&&!Ce(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function xo(e){return Ft(e)?e:new Proxy(e,ka)}class Ca{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new gs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=wn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ce!==this)return oo(this,!0),!0}get value(){const t=this.dep.track();return co(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Aa(e,t,n=!1){let r,s;return H(e)?r=e:(r=e.get,s=e.set),new Ca(r,s,n)}const Bn={},qn=new WeakMap;let Dt;function Ea(e,t=!1,n=Dt){if(n){let r=qn.get(n);r||qn.set(n,r=[]),r.push(e)}}function Ra(e,t,n=le){const{immediate:r,deep:s,once:i,scheduler:l,augmentJob:o,call:a}=n,u=T=>s?T:Ue(T)||s===!1||s===0?mt(T,1):mt(T);let c,f,p,m,x=!1,w=!1;if(Ce(e)?(f=()=>e.value,x=Ue(e)):Ft(e)?(f=()=>u(e),x=!0):j(e)?(w=!0,x=e.some(T=>Ft(T)||Ue(T)),f=()=>e.map(T=>{if(Ce(T))return T.value;if(Ft(T))return u(T);if(H(T))return a?a(T,2):T()})):H(e)?t?f=a?()=>a(e,2):e:f=()=>{if(p){_t();try{p()}finally{xt()}}const T=Dt;Dt=c;try{return a?a(e,3,[m]):e(m)}finally{Dt=T}}:f=ot,t&&s){const T=f,z=s===!0?1/0:s;f=()=>mt(T(),z)}const $=ra(),N=()=>{c.stop(),$&&$.active&&cs($.effects,c)};if(i&&t){const T=t;t=(...z)=>{const q=T(...z);return N(),q}}let E=w?new Array(e.length).fill(Bn):Bn;const P=T=>{if(!(!(c.flags&1)||!c.dirty&&!T))if(t){const z=c.run();if(T||s||x||(w?z.some((q,U)=>st(q,E[U])):st(z,E))){p&&p();const q=Dt;Dt=c;try{const U=[z,E===Bn?void 0:w&&E[0]===Bn?[]:E,m];E=z,a?a(t,3,U):t(...U)}finally{Dt=q}}}else c.run()};return o&&o(P),c=new so(f),c.scheduler=l?()=>l(P,!1):P,m=T=>Ea(T,!1,c),p=c.onStop=()=>{const T=qn.get(c);if(T){if(a)a(T,4);else for(const z of T)z();qn.delete(c)}},t?r?P(!0):E=c.run():l?l(P.bind(null,!0),!0):c.run(),N.pause=c.pause.bind(c),N.resume=c.resume.bind(c),N.stop=N,N}function mt(e,t=1/0,n){if(t<=0||!ee(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ce(e))mt(e.value,t,n);else if(j(e))for(let r=0;r<e.length;r++)mt(e[r],t,n);else if(Zi(e)||Qt(e))e.forEach(r=>{mt(r,t,n)});else if(Xi(e)){for(const r in e)mt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&mt(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ln(e,t,n,r){try{return r?e(...r):e()}catch(s){dr(s,t,n)}}function Ge(e,t,n,r){if(H(e)){const s=Ln(e,t,n,r);return s&&Qi(s)&&s.catch(i=>{dr(i,t,n)}),s}if(j(e)){const s=[];for(let i=0;i<e.length;i++)s.push(Ge(e[i],t,n,r));return s}}function dr(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||le;if(t){let o=t.parent;const a=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const c=o.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,a,u)===!1)return}o=o.parent}if(i){_t(),Ln(i,null,10,[e,a,u]),xt();return}}Ta(e,n,s,r,l)}function Ta(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const Te=[];let tt=-1;const Yt=[];let Et=null,Kt=0;const So=Promise.resolve();let Wn=null;function wo(e){const t=Wn||So;return e?t.then(this?e.bind(this):e):t}function Ia(e){let t=tt+1,n=Te.length;for(;t<n;){const r=t+n>>>1,s=Te[r],i=Cn(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function _s(e){if(!(e.flags&1)){const t=Cn(e),n=Te[Te.length-1];!n||!(e.flags&2)&&t>=Cn(n)?Te.push(e):Te.splice(Ia(t),0,e),e.flags|=1,ko()}}function ko(){Wn||(Wn=So.then(Ao))}function Pa(e){if(!j(e))Et&&e.id===-1?Et.splice(Kt+1,0,e):e.flags&1||(Yt.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)Yt.push(e[t]);ko()}function Js(e,t,n=tt+1){for(;n<Te.length;n++){const r=Te[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Te.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Co(e){if(Yt.length){const t=[...new Set(Yt)].sort((n,r)=>Cn(n)-Cn(r));if(Yt.length=0,Et){for(let n=0;n<t.length;n++)Et.push(t[n]);return}for(Et=t,Kt=0;Kt<Et.length;Kt++){const n=Et[Kt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Et=null,Kt=0}}const Cn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ao(e){try{for(tt=0;tt<Te.length;tt++){const t=Te[tt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ln(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;tt<Te.length;tt++){const t=Te[tt];t&&(t.flags&=-2)}tt=-1,Te.length=0,Co(),Wn=null,(Te.length||Yt.length)&&Ao()}}let je=null,Eo=null;function Kn(e){const t=je;return je=e,Eo=e&&e.type.__scopeId||null,t}function bt(e,t=je,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Xn(-1);const i=Kn(t),l=Ht.length;let o;try{o=e(...s)}finally{for(let a=Ht.length;a>l;a--)il();Kn(i),r._d&&Xn(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Oa(e,t){if(je===null)return e;const n=xr(je),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,l,o,a=le]=t[s];i&&(H(i)&&(i={mounted:i,updated:i}),i.deep&&mt(l),r.push({dir:i,instance:n,value:l,oldValue:void 0,arg:o,modifiers:a}))}return e}function Ot(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let l=0;l<s.length;l++){const o=s[l];i&&(o.oldValue=i[l].value);let a=o.dir[r];a&&(_t(),Ge(a,n,8,[e.el,o,e,t]),xt())}}function Fn(e,t){if(ke){let n=ke.provides;const r=ke.parent&&ke.parent.provides;r===n&&(n=ke.provides=Object.create(r)),n[e]=t}}function lt(e,t,n=!1){const r=cl();if(r||Xt){let s=Xt?Xt._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&H(t)?t.call(r&&r.proxy):t}}const La=Symbol.for("v-scx"),Na=()=>lt(La);function Hn(e,t,n){return Ro(e,t,n)}function Ro(e,t,n=le){const{immediate:r,deep:s,flush:i,once:l}=n,o=ve({},n),a=t&&r||!t&&i!=="post";let u;if(Tn){if(i==="sync"){const m=Na();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!a){const m=()=>{};return m.stop=ot,m.resume=ot,m.pause=ot,m}}const c=ke;o.call=(m,x,w)=>Ge(m,c,x,w);let f=!1;i==="post"?o.scheduler=m=>{Me(m,c&&c.suspense)}:i!=="sync"&&(f=!0,o.scheduler=(m,x)=>{x?m():_s(m)}),o.augmentJob=m=>{t&&(m.flags|=4),f&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const p=Ra(e,t,o);return Tn&&(u?u.push(p):a&&p()),p}function Ma(e,t,n){const r=this.proxy,s=ue(e)?e.includes(".")?To(r,e):()=>r[e]:e.bind(r,r);let i;H(t)?i=t:(i=t.handler,n=t);const l=Nn(this),o=Ro(s,i.bind(r),n);return l(),o}function To(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Da=Symbol("_vte"),gr=e=>e.__isTeleport,ze=Symbol("_leaveCb"),ln=Symbol("_enterCb");function $a(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Bo(()=>{e.isMounted=!0}),jo(()=>{e.isUnmounting=!0}),e}const Ve=[Function,Array],Io={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ve,onEnter:Ve,onAfterEnter:Ve,onEnterCancelled:Ve,onBeforeLeave:Ve,onLeave:Ve,onAfterLeave:Ve,onLeaveCancelled:Ve,onBeforeAppear:Ve,onAppear:Ve,onAfterAppear:Ve,onAppearCancelled:Ve},Po=e=>{const t=e.subTree;return t.component?Po(t.component):t},Ba={name:"BaseTransition",props:Io,setup(e,{slots:t}){const n=cl(),r=$a();return()=>{const s=t.default&&No(t.default(),!0),i=s&&s.length?Oo(s):n.subTree?en():void 0;if(!i)return;const l=J(e),{mode:o}=l;if(r.isLeaving)return Pr(i);const a=Jn(i);if(!a)return Pr(i);let u=Kr(a,l,r,n,f=>u=f);a.type!==Pe&&An(a,u);let c=n.subTree&&Jn(n.subTree);if(c&&c.type!==Pe&&!$t(c,a)&&Po(n).type!==Pe){let f=Kr(c,l,r,n);if(An(c,f),o==="out-in"&&a.type!==Pe)return r.isLeaving=!0,f.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,c=void 0},Pr(i);o==="in-out"&&a.type!==Pe?f.delayLeave=(p,m,x)=>{const w=Lo(r,c);w[String(c.key)]=c,p[ze]=()=>{m(),p[ze]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{x(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return i}}};function Oo(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Pe){t=n;break}}return t}const ja=Ba;function Lo(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Kr(e,t,n,r,s){const{appear:i,mode:l,persisted:o=!1,onBeforeEnter:a,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:p,onLeave:m,onAfterLeave:x,onLeaveCancelled:w,onBeforeAppear:$,onAppear:N,onAfterAppear:E,onAppearCancelled:P}=t,T=String(e.key),z=Lo(n,e),q=(V,K)=>{V&&Ge(V,r,9,K)},U=(V,K)=>{const ae=K[1];q(V,K),j(V)?V.every(O=>O.length<=1)&&ae():V.length<=1&&ae()},Se={mode:l,persisted:o,beforeEnter(V){let K=a;if(!n.isMounted)if(i)K=$||a;else return;V[ze]&&V[ze](!0);const ae=z[T];ae&&$t(e,ae)&&ae.el[ze]&&ae.el[ze](),q(K,[V])},enter(V){if(z[T]===e)return;let K=u,ae=c,O=f;if(!n.isMounted)if(i)K=N||u,ae=E||c,O=P||f;else return;let Z=!1;V[ln]=De=>{Z||(Z=!0,De?q(O,[V]):q(ae,[V]),Se.delayedLeave&&Se.delayedLeave(),V[ln]=void 0)};const ye=V[ln].bind(null,!1);K?U(K,[V,ye]):ye()},leave(V,K){const ae=String(e.key);if(V[ln]&&V[ln](!0),n.isUnmounting)return K();q(p,[V]);let O=!1;V[ze]=ye=>{O||(O=!0,K(),ye?q(w,[V]):q(x,[V]),V[ze]=void 0,z[ae]===e&&delete z[ae])};const Z=V[ze].bind(null,!1);z[ae]=e,m?U(m,[V,Z]):Z()},clone(V){const K=Kr(V,t,n,r,s);return s&&s(K),K}};return Se}function Pr(e){if(mr(e))return e=It(e),e.children=null,e}function Jn(e){if(!mr(e))return gr(e.type)&&e.children?Oo(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&H(n.default))return n.default()}}function An(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;An(gr(n.type)&&Jn(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function No(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let l=e[i];const o=n==null?l.key:String(n)+String(l.key!=null?l.key:i);l.type===Ie?(l.patchFlag&128&&s++,r=r.concat(No(l.children,t,o))):(t||l.type!==Pe)&&r.push(o!=null?It(l,{key:o}):l)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Mo(e,t){return H(e)?ve({name:e.name},t,{setup:e}):e}function Do(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Zs(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Zn=new WeakMap;function bn(e,t,n,r,s=!1){if(j(e)){e.forEach((w,$)=>bn(w,t&&(j(t)?t[$]:t),n,r,s));return}if(vn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&bn(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?xr(r.component):r.el,l=s?null:i,{i:o,r:a}=e,u=t&&t.r,c=o.refs===le?o.refs={}:o.refs,f=o.setupState,p=J(f),m=f===le?Ji:w=>Zs(c,w)?!1:X(p,w),x=(w,$)=>!($&&Zs(c,$));if(u!=null&&u!==a){if(Qs(t),ue(u))c[u]=null,m(u)&&(f[u]=null);else if(Ce(u)){const w=t;x(u,w.k)&&(u.value=null),w.k&&(c[w.k]=null)}}if(H(a))Ln(a,o,12,[l,c]);else{const w=ue(a),$=Ce(a);if(w||$){const N=()=>{if(e.f){const E=w?m(a)?f[a]:c[a]:x()||!e.k?a.value:c[e.k];if(s)j(E)&&cs(E,i);else if(j(E))E.includes(i)||E.push(i);else if(w)c[a]=[i],m(a)&&(f[a]=c[a]);else{const P=[i];x(a,e.k)&&(a.value=P),e.k&&(c[e.k]=P)}}else w?(c[a]=l,m(a)&&(f[a]=l)):$&&(x(a,e.k)&&(a.value=l),e.k&&(c[e.k]=l))};if(l){const E=()=>{N(),Zn.delete(e)};E.id=-1,Zn.set(e,E),Me(E,n)}else Qs(e),N()}}}function Qs(e){const t=Zn.get(e);t&&(t.flags|=8,Zn.delete(e))}ur().requestIdleCallback;ur().cancelIdleCallback;const vn=e=>!!e.type.__asyncLoader,mr=e=>e.type.__isKeepAlive;function Fa(e,t){$o(e,"a",t)}function Ha(e,t){$o(e,"da",t)}function $o(e,t,n=ke){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(br(t,r,n),n){let s=n.parent;for(;s&&s.parent;)mr(s.parent.vnode)&&Va(r,t,n,s),s=s.parent}}function Va(e,t,n,r){const s=br(t,e,r,!0);Fo(()=>{cs(r[t],s)},n)}function br(e,t,n=ke,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...l)=>{_t();const o=Nn(n),a=Ge(t,n,e,l);return o(),xt(),a});return r?s.unshift(i):s.push(i),i}}const wt=e=>(t,n=ke)=>{(!Tn||e==="sp")&&br(e,(...r)=>t(...r),n)},za=wt("bm"),Bo=wt("m"),Ua=wt("bu"),Ga=wt("u"),jo=wt("bum"),Fo=wt("um"),qa=wt("sp"),Wa=wt("rtg"),Ka=wt("rtc");function Ja(e,t=ke){br("ec",e,t)}const xs="components",Za="directives";function Ss(e,t){return ws(xs,e,!0,t)||e}const Ho=Symbol.for("v-ndc");function Qa(e){return ue(e)?ws(xs,e,!1)||e:e||Ho}function Ya(e){return ws(Za,e)}function ws(e,t,n=!0,r=!1){const s=je||ke;if(s){const i=s.type;if(e===xs){const o=Mc(i,!1);if(o&&(o===t||o===Le(t)||o===cr(Le(t))))return i}const l=Ys(s[e]||i[e],t)||Ys(s.appContext[e],t);return!l&&r?i:l}}function Ys(e,t){return e&&(e[t]||e[Le(t)]||e[cr(Le(t))])}function Qn(e,t,n,r){let s;const i=n,l=j(e);if(l||ue(e)){const o=l&&Ft(e);let a=!1,u=!1;o&&(a=!Ue(e),u=St(e),e=hr(e)),s=new Array(e.length);for(let c=0,f=e.length;c<f;c++)s[c]=t(a?u?tn(We(e[c])):We(e[c]):e[c],c,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i)}else if(ee(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,u=o.length;a<u;a++){const c=o[a];s[a]=t(e[c],c,a,i)}}else s=[];return s}const Jr=e=>e?ul(e)?xr(e):Jr(e.parent):null,yn=ve(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Jr(e.parent),$root:e=>Jr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>zo(e),$forceUpdate:e=>e.f||(e.f=()=>{_s(e.update)}),$nextTick:e=>e.n||(e.n=wo.bind(e.proxy)),$watch:e=>Ma.bind(e)}),Or=(e,t)=>e!==le&&!e.__isScriptSetup&&X(e,t),Xa={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:l,type:o,appContext:a}=e;if(t[0]!=="$"){const p=l[t];if(p!==void 0)switch(p){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Or(r,t))return l[t]=1,r[t];if(s!==le&&X(s,t))return l[t]=2,s[t];if(X(i,t))return l[t]=3,i[t];if(n!==le&&X(n,t))return l[t]=4,n[t];Zr&&(l[t]=0)}}const u=yn[t];let c,f;if(u)return t==="$attrs"&&we(e.attrs,"get",""),u(e);if((c=o.__cssModules)&&(c=c[t]))return c;if(n!==le&&X(n,t))return l[t]=4,n[t];if(f=a.config.globalProperties,X(f,t))return f[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Or(s,t)?(s[t]=n,!0):r!==le&&X(r,t)?(r[t]=n,!0):X(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,props:i,type:l}},o){let a;return!!(n[o]||e!==le&&o[0]!=="$"&&X(e,o)||Or(t,o)||X(i,o)||X(r,o)||X(yn,o)||X(s.config.globalProperties,o)||(a=l.__cssModules)&&a[o])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:X(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Xs(e){return j(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Zr=!0;function ec(e){const t=zo(e),n=e.proxy,r=e.ctx;Zr=!1,t.beforeCreate&&ei(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:l,watch:o,provide:a,inject:u,created:c,beforeMount:f,mounted:p,beforeUpdate:m,updated:x,activated:w,deactivated:$,beforeDestroy:N,beforeUnmount:E,destroyed:P,unmounted:T,render:z,renderTracked:q,renderTriggered:U,errorCaptured:Se,serverPrefetch:V,expose:K,inheritAttrs:ae,components:O,directives:Z,filters:ye}=t;if(u&&tc(u,r,null),l)for(const re in l){const Q=l[re];H(Q)&&(r[re]=Q.bind(n))}if(s){const re=s.call(n,n);ee(re)&&(e.data=pr(re))}if(Zr=!0,i)for(const re in i){const Q=i[re],ct=H(Q)?Q.bind(n,n):H(Q.get)?Q.get.bind(n,n):ot,kt=!H(Q)&&H(Q.set)?Q.set.bind(n):ot,Je=Be({get:ct,set:kt});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>Je.value,set:Ne=>Je.value=Ne})}if(o)for(const re in o)Vo(o[re],r,n,re);if(a){const re=H(a)?a.call(n):a;Reflect.ownKeys(re).forEach(Q=>{Fn(Q,re[Q])})}c&&ei(c,e,"c");function de(re,Q){j(Q)?Q.forEach(ct=>re(ct.bind(n))):Q&&re(Q.bind(n))}if(de(za,f),de(Bo,p),de(Ua,m),de(Ga,x),de(Fa,w),de(Ha,$),de(Ja,Se),de(Ka,q),de(Wa,U),de(jo,E),de(Fo,T),de(qa,V),j(K))if(K.length){const re=e.exposed||(e.exposed={});K.forEach(Q=>{Object.defineProperty(re,Q,{get:()=>n[Q],set:ct=>n[Q]=ct,enumerable:!0})})}else e.exposed||(e.exposed={});z&&e.render===ot&&(e.render=z),ae!=null&&(e.inheritAttrs=ae),O&&(e.components=O),Z&&(e.directives=Z),V&&Do(e)}function tc(e,t,n=ot){j(e)&&(e=Qr(e));for(const r in e){const s=e[r];let i;ee(s)?"default"in s?i=lt(s.from||r,s.default,!0):i=lt(s.from||r):i=lt(s),Ce(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:l=>i.value=l}):t[r]=i}}function ei(e,t,n){Ge(j(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Vo(e,t,n,r){let s=r.includes(".")?To(n,r):()=>n[r];if(ue(e)){const i=t[e];H(i)&&Hn(s,i)}else if(H(e))Hn(s,e.bind(n));else if(ee(e))if(j(e))e.forEach(i=>Vo(i,t,n,r));else{const i=H(e.handler)?e.handler.bind(n):t[e.handler];H(i)&&Hn(s,i,e)}}function zo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:l}}=e.appContext,o=i.get(t);let a;return o?a=o:!s.length&&!n&&!r?a=t:(a={},s.length&&s.forEach(u=>Yn(a,u,l,!0)),Yn(a,t,l)),ee(t)&&i.set(t,a),a}function Yn(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Yn(e,i,n,!0),s&&s.forEach(l=>Yn(e,l,n,!0));for(const l in t)if(!(r&&l==="expose")){const o=nc[l]||n&&n[l];e[l]=o?o(e[l],t[l]):t[l]}return e}const nc={data:ti,props:ni,emits:ni,methods:hn,computed:hn,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:hn,directives:hn,watch:sc,provide:ti,inject:rc};function ti(e,t){return t?e?function(){return ve(H(e)?e.call(this,this):e,H(t)?t.call(this,this):t)}:t:e}function rc(e,t){return hn(Qr(e),Qr(t))}function Qr(e){if(j(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ae(e,t){return e?[...new Set([].concat(e,t))]:t}function hn(e,t){return e?ve(Object.create(null),e,t):t}function ni(e,t){return e?j(e)&&j(t)?[...new Set([...e,...t])]:ve(Object.create(null),Xs(e),Xs(t??{})):t}function sc(e,t){if(!e)return t;if(!t)return e;const n=ve(Object.create(null),e);for(const r in t)n[r]=Ae(e[r],t[r]);return n}function Uo(){return{app:null,config:{isNativeTag:Ji,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ic=0;function oc(e,t){return function(r,s=null){H(r)||(r=ve({},r)),s!=null&&!ee(s)&&(s=null);const i=Uo(),l=new WeakSet,o=[];let a=!1;const u=i.app={_uid:ic++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:$c,get config(){return i.config},set config(c){},use(c,...f){return l.has(c)||(c&&H(c.install)?(l.add(c),c.install(u,...f)):H(c)&&(l.add(c),c(u,...f))),u},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),u},component(c,f){return f?(i.components[c]=f,u):i.components[c]},directive(c,f){return f?(i.directives[c]=f,u):i.directives[c]},mount(c,f,p){if(!a){const m=u._ceVNode||pe(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),e(m,c,p),a=!0,u._container=c,c.__vue_app__=u,xr(m.component)}},onUnmount(c){o.push(c)},unmount(){a&&(Ge(o,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,f){return i.provides[c]=f,u},runWithContext(c){const f=Xt;Xt=u;try{return c()}finally{Xt=f}}};return u}}let Xt=null;const lc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Le(t)}Modifiers`]||e[`${zt(t)}Modifiers`];function ac(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||le;let s=n;const i=t.startsWith("update:"),l=i&&lc(r,t.slice(7));l&&(l.trim&&(s=n.map(c=>ue(c)?c.trim():c)),l.number&&(s=n.map(Wl)));let o,a=r[o=Cr(t)]||r[o=Cr(Le(t))];!a&&i&&(a=r[o=Cr(zt(t))]),a&&Ge(a,e,6,s);const u=r[o+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Ge(u,e,6,s)}}const cc=new WeakMap;function Go(e,t,n=!1){const r=n?cc:t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let l={},o=!1;if(!H(e)){const a=u=>{const c=Go(u,t,!0);c&&(o=!0,ve(l,c))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!i&&!o?(ee(e)&&r.set(e,null),null):(j(i)?i.forEach(a=>l[a]=null):ve(l,i),ee(e)&&r.set(e,l),l)}function vr(e,t){return!e||!or(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),X(e,t[0].toLowerCase()+t.slice(1))||X(e,zt(t))||X(e,t))}function ri(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:l,attrs:o,emit:a,render:u,renderCache:c,props:f,data:p,setupState:m,ctx:x,inheritAttrs:w}=e,$=Kn(e);let N,E;try{if(n.shapeFlag&4){const T=s||r,z=T;N=rt(u.call(z,T,c,f,m,p,x)),E=o}else{const T=t;N=rt(T.length>1?T(f,{attrs:o,slots:l,emit:a}):T(f,null)),E=t.props?o:uc(o)}}catch(T){Ht.length=0,dr(T,e,1),N=pe(Pe)}let P=N;if(E&&w!==!1){const T=Object.keys(E),{shapeFlag:z}=P;T.length&&z&7&&(i&&T.some(lr)&&(E=fc(E,i)),P=It(P,E,!1,!0))}if(n.dirs&&(P=It(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition){const T=gr(P.type)&&Jn(P)||P;An(T,n.transition)}return N=P,Kn($),N}const uc=e=>{let t;for(const n in e)(n==="class"||n==="style"||or(n))&&((t||(t={}))[n]=e[n]);return t},fc=(e,t)=>{const n={};for(const r in e)(!lr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function hc(e,t,n){const{props:r,children:s,component:i}=e,{props:l,children:o,patchFlag:a}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?si(r,l,u):!!l;if(a&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const p=c[f];if(qo(l,r,p)&&!vr(u,p))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:r===l?!1:r?l?si(r,l,u):!0:!!l;return!1}function si(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(qo(t,e,i)&&!vr(n,i))return!0}return!1}function qo(e,t,n){const r=e[n],s=t[n];return n==="style"&&ee(r)&&ee(s)?!fs(r,s):r!==s}function pc({vnode:e,parent:t,suspense:n},r){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=r,e=s),s===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}const Wo={},Ko=()=>Object.create(Wo),Jo=e=>Object.getPrototypeOf(e)===Wo;function dc(e,t,n,r=!1){const s={},i=Ko();e.propsDefaults=Object.create(null),Zo(e,t,s,i);for(const l in e.propsOptions[0])l in s||(s[l]=void 0);n?e.props=r?s:yo(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function gc(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:l}}=e,o=J(s),[a]=e.propsOptions;let u=!1;if((r||l>0)&&!(l&16)){if(l&8){const c=e.vnode.dynamicProps;for(let f=0;f<c.length;f++){let p=c[f];if(vr(e.emitsOptions,p))continue;const m=t[p];if(a)if(X(i,p))m!==i[p]&&(i[p]=m,u=!0);else{const x=Le(p);s[x]=Yr(a,o,x,m,e,!1)}else m!==i[p]&&(i[p]=m,u=!0)}}}else{Zo(e,t,s,i)&&(u=!0);let c;for(const f in o)(!t||!X(t,f)&&((c=zt(f))===f||!X(t,c)))&&(a?n&&(n[f]!==void 0||n[c]!==void 0)&&(s[f]=Yr(a,o,f,void 0,e,!0)):delete s[f]);if(i!==o)for(const f in i)(!t||!X(t,f))&&(delete i[f],u=!0)}u&&gt(e.attrs,"set","")}function Zo(e,t,n,r){const[s,i]=e.propsOptions;let l=!1,o;if(t)for(let a in t){if(dn(a))continue;const u=t[a];let c;s&&X(s,c=Le(a))?!i||!i.includes(c)?n[c]=u:(o||(o={}))[c]=u:vr(e.emitsOptions,a)||(!(a in r)||u!==r[a])&&(r[a]=u,l=!0)}if(i){const a=J(n),u=o||le;for(let c=0;c<i.length;c++){const f=i[c];n[f]=Yr(s,a,f,u[f],e,!X(u,f))}}return l}function Yr(e,t,n,r,s,i){const l=e[n];if(l!=null){const o=X(l,"default");if(o&&r===void 0){const a=l.default;if(l.type!==Function&&!l.skipFactory&&H(a)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const c=Nn(s);r=u[n]=a.call(null,t),c()}}else r=a;s.ce&&s.ce._setProp(n,r)}l[0]&&(i&&!o?r=!1:l[1]&&(r===""||r===zt(n))&&(r=!0))}return r}const mc=new WeakMap;function Qo(e,t,n=!1){const r=n?mc:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,l={},o=[];let a=!1;if(!H(e)){const c=f=>{a=!0;const[p,m]=Qo(f,t,!0);ve(l,p),m&&o.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!a)return ee(e)&&r.set(e,Zt),Zt;if(j(i))for(let c=0;c<i.length;c++){const f=Le(i[c]);ii(f)&&(l[f]=le)}else if(i)for(const c in i){const f=Le(c);if(ii(f)){const p=i[c],m=l[f]=j(p)||H(p)?{type:p}:ve({},p),x=m.type;let w=!1,$=!0;if(j(x))for(let N=0;N<x.length;++N){const E=x[N],P=H(E)&&E.name;if(P==="Boolean"){w=!0;break}else P==="String"&&($=!1)}else w=H(x)&&x.name==="Boolean";m[0]=w,m[1]=$,(w||X(m,"default"))&&o.push(f)}}const u=[l,o];return ee(e)&&r.set(e,u),u}function ii(e){return e[0]!=="$"&&!dn(e)}const ks=e=>e==="_"||e==="_ctx"||e==="$stable",Cs=e=>j(e)?e.map(rt):[rt(e)],bc=(e,t,n)=>{if(t._n)return t;const r=bt((...s)=>Cs(t(...s)),n);return r._c=!1,r},Yo=(e,t,n)=>{const r=e._ctx;for(const s in e){if(ks(s))continue;const i=e[s];if(H(i))t[s]=bc(s,i,r);else if(i!=null){const l=Cs(i);t[s]=()=>l}}},Xo=(e,t)=>{const n=Cs(t);e.slots.default=()=>n},el=(e,t,n)=>{for(const r in t)(n||!ks(r))&&(e[r]=t[r])},vc=(e,t,n)=>{const r=e.slots=Ko();if(e.vnode.shapeFlag&32){const s=t._;s?(el(r,t,n),n&&eo(r,"_",s,!0)):Yo(t,r)}else t&&Xo(e,t)},yc=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,l=le;if(r.shapeFlag&32){const o=t._;o?n&&o===1?i=!1:el(s,t,n):(i=!t.$stable,Yo(t,s)),l=t}else t&&(Xo(e,t),l={default:1});if(i)for(const o in s)!ks(o)&&l[o]==null&&delete s[o]},Me=kc;function _c(e){return xc(e)}function xc(e,t){const n=ur();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:l,createText:o,createComment:a,setText:u,setElementText:c,parentNode:f,nextSibling:p,setScopeId:m=ot,insertStaticContent:x}=e,w=(h,d,g,v=null,_=null,b=null,A=void 0,C=null,k=!!d.dynamicChildren)=>{if(h===d)return;h&&!$t(h,d)&&(v=y(h),Ne(h,_,b,!0),h=null),d.patchFlag===-2&&(k=!1,d.dynamicChildren=null);const{type:S,ref:B,shapeFlag:I}=d;switch(S){case yr:$(h,d,g,v);break;case Pe:N(h,d,g,v);break;case Vn:h==null&&E(d,g,v,A);break;case Ie:O(h,d,g,v,_,b,A,C,k);break;default:I&1?z(h,d,g,v,_,b,A,C,k):I&6?Z(h,d,g,v,_,b,A,C,k):(I&64||I&128)&&S.process(h,d,g,v,_,b,A,C,k,M)}B!=null&&_?bn(B,h&&h.ref,b,d||h,!d):B==null&&h&&h.ref!=null&&bn(h.ref,null,b,h,!0)},$=(h,d,g,v)=>{if(h==null)r(d.el=o(d.children),g,v);else{const _=d.el=h.el;d.children!==h.children&&u(_,d.children)}},N=(h,d,g,v)=>{h==null?r(d.el=a(d.children||""),g,v):d.el=h.el},E=(h,d,g,v)=>{[h.el,h.anchor]=x(h.children,d,g,v,h.el,h.anchor)},P=({el:h,anchor:d},g,v)=>{let _;for(;h&&h!==d;)_=p(h),r(h,g,v),h=_;r(d,g,v)},T=({el:h,anchor:d})=>{let g;for(;h&&h!==d;)g=p(h),s(h),h=g;s(d)},z=(h,d,g,v,_,b,A,C,k)=>{if(d.type==="svg"?A="svg":d.type==="math"&&(A="mathml"),h==null)q(d,g,v,_,b,A,C,k);else{const S=h.el&&h.el._isVueCE?h.el:null;try{S&&S._beginPatch(),V(h,d,_,b,A,C,k)}finally{S&&S._endPatch()}}},q=(h,d,g,v,_,b,A,C)=>{let k,S;const{props:B,shapeFlag:I,transition:D,dirs:F}=h;if(k=h.el=l(h.type,b,B&&B.is,B),I&8?c(k,h.children):I&16&&Se(h.children,k,null,v,_,Lr(h,b),A,C),F&&Ot(h,null,v,"created"),U(k,h,h.scopeId,A,v),B){for(const ie in B)ie!=="value"&&!dn(ie)&&i(k,ie,null,B[ie],b,v);"value"in B&&i(k,"value",null,B.value,b),(S=B.onVnodeBeforeMount)&&Xe(S,v,h)}F&&Ot(h,null,v,"beforeMount");const W=Sc(_,D);W&&D.beforeEnter(k),r(k,d,g),((S=B&&B.onVnodeMounted)||W||F)&&Me(()=>{try{S&&Xe(S,v,h),W&&D.enter(k),F&&Ot(h,null,v,"mounted")}finally{}},_)},U=(h,d,g,v,_)=>{if(g&&m(h,g),v)for(let b=0;b<v.length;b++)m(h,v[b]);if(_){let b=_.subTree;if(d===b||sl(b.type)&&(b.ssContent===d||b.ssFallback===d)){const A=_.vnode;U(h,A,A.scopeId,A.slotScopeIds,_.parent)}}},Se=(h,d,g,v,_,b,A,C,k=0)=>{for(let S=k;S<h.length;S++){const B=h[S]=C?dt(h[S]):rt(h[S]);w(null,B,d,g,v,_,b,A,C)}},V=(h,d,g,v,_,b,A)=>{const C=d.el=h.el;let{patchFlag:k,dynamicChildren:S,dirs:B}=d;k|=h.patchFlag&16;const I=h.props||le,D=d.props||le;let F;if(g&&Lt(g,!1),(F=D.onVnodeBeforeUpdate)&&Xe(F,g,d,h),B&&Ot(d,h,g,"beforeUpdate"),g&&Lt(g,!0),S&&(!h.dynamicChildren||h.dynamicChildren.length!==S.length)&&(k=0,A=!1,S=null),(I.innerHTML&&D.innerHTML==null||I.textContent&&D.textContent==null)&&c(C,""),S?K(h.dynamicChildren,S,C,g,v,Lr(d,_),b):A||Q(h,d,C,null,g,v,Lr(d,_),b,!1),k>0){if(k&16)ae(C,I,D,g,_);else if(k&2&&I.class!==D.class&&i(C,"class",null,D.class,_),k&4&&i(C,"style",I.style,D.style,_),k&8){const W=d.dynamicProps;for(let ie=0;ie<W.length;ie++){const se=W[ie],ge=I[se],_e=D[se];(_e!==ge||se==="value")&&i(C,se,ge,_e,_,g)}}k&1&&h.children!==d.children&&c(C,d.children)}else!A&&S==null&&ae(C,I,D,g,_);((F=D.onVnodeUpdated)||B)&&Me(()=>{F&&Xe(F,g,d,h),B&&Ot(d,h,g,"updated")},v)},K=(h,d,g,v,_,b,A)=>{for(let C=0;C<d.length;C++){const k=h[C],S=d[C],B=k.el&&(k.type===Ie||!$t(k,S)||k.shapeFlag&198)?f(k.el):g;w(k,S,B,null,v,_,b,A,!0)}},ae=(h,d,g,v,_)=>{if(d!==g){if(d!==le)for(const b in d)!dn(b)&&!(b in g)&&i(h,b,d[b],null,_,v);for(const b in g){if(dn(b))continue;const A=g[b],C=d[b];A!==C&&b!=="value"&&i(h,b,C,A,_,v)}"value"in g&&i(h,"value",d.value,g.value,_)}},O=(h,d,g,v,_,b,A,C,k)=>{const S=d.el=h?h.el:o(""),B=d.anchor=h?h.anchor:o("");let{patchFlag:I,dynamicChildren:D,slotScopeIds:F}=d;F&&(C=C?C.concat(F):F),h==null?(r(S,g,v),r(B,g,v),Se(d.children||[],g,B,_,b,A,C,k)):I>0&&I&64&&D&&h.dynamicChildren&&h.dynamicChildren.length===D.length?(K(h.dynamicChildren,D,g,_,b,A,C),(d.key!=null||_&&d===_.subTree)&&tl(h,d,!0)):Q(h,d,g,B,_,b,A,C,k)},Z=(h,d,g,v,_,b,A,C,k)=>{d.slotScopeIds=C,h==null?d.shapeFlag&512?_.ctx.activate(d,g,v,A,k):ye(d,g,v,_,b,A,k):De(h,d,k)},ye=(h,d,g,v,_,b,A)=>{const C=h.component=Ic(h,v,_);if(mr(h)&&(C.ctx.renderer=M),Pc(C,!1,A),C.asyncDep){if(_&&_.registerDep(C,de,A),!h.el){const k=C.subTree=pe(Pe);N(null,k,d,g),h.placeholder=k.el}}else de(C,h,d,g,_,b,A)},De=(h,d,g)=>{const v=d.component=h.component;if(hc(h,d,g))if(v.asyncDep&&!v.asyncResolved){re(v,d,g);return}else v.next=d,v.update();else d.el=h.el,v.vnode=d},de=(h,d,g,v,_,b,A)=>{const C=()=>{if(h.isMounted){let{next:I,bu:D,u:F,parent:W,vnode:ie}=h;{const Qe=nl(h);if(Qe){I&&(I.el=ie.el,re(h,I,A)),Qe.asyncDep.then(()=>{Me(()=>{h.isUnmounted||S()},_)});return}}let se=I,ge;Lt(h,!1),I?(I.el=ie.el,re(h,I,A)):I=ie,D&&Ar(D),(ge=I.props&&I.props.onVnodeBeforeUpdate)&&Xe(ge,W,I,ie),Lt(h,!0);const _e=ri(h),Ze=h.subTree;h.subTree=_e,w(Ze,_e,f(Ze.el),y(Ze),h,_,b),I.el=_e.el,se===null&&pc(h,_e.el),F&&Me(F,_),(ge=I.props&&I.props.onVnodeUpdated)&&Me(()=>Xe(ge,W,I,ie),_)}else{let I;const{el:D,props:F}=d,{bm:W,m:ie,parent:se,root:ge,type:_e}=h,Ze=vn(d);Lt(h,!1),W&&Ar(W),!Ze&&(I=F&&F.onVnodeBeforeMount)&&Xe(I,se,d),Lt(h,!0);{ge.ce&&ge.ce._hasShadowRoot()&&ge.ce._injectChildStyle(_e,h.parent?h.parent.type:void 0);const Qe=h.subTree=ri(h);w(null,Qe,g,v,h,_,b),d.el=Qe.el}if(ie&&Me(ie,_),!Ze&&(I=F&&F.onVnodeMounted)){const Qe=d;Me(()=>Xe(I,se,Qe),_)}(d.shapeFlag&256||se&&vn(se.vnode)&&se.vnode.shapeFlag&256)&&h.a&&Me(h.a,_),h.isMounted=!0,d=g=v=null}};h.scope.on();const k=h.effect=new so(C);h.scope.off();const S=h.update=k.run.bind(k),B=h.job=k.runIfDirty.bind(k);B.i=h,B.id=h.uid,k.scheduler=()=>_s(B),Lt(h,!0),S()},re=(h,d,g)=>{d.component=h;const v=h.vnode.props;h.vnode=d,h.next=null,gc(h,d.props,v,g),yc(h,d.children,g),_t(),Js(h),xt()},Q=(h,d,g,v,_,b,A,C,k=!1)=>{const S=h&&h.children,B=h?h.shapeFlag:0,I=d.children,{patchFlag:D,shapeFlag:F}=d;if(D>0){if(D&128){kt(S,I,g,v,_,b,A,C,k);return}else if(D&256){ct(S,I,g,v,_,b,A,C,k);return}}F&8?(B&16&&He(S,_,b),I!==S&&c(g,I)):B&16?F&16?kt(S,I,g,v,_,b,A,C,k):He(S,_,b,!0):(B&8&&c(g,""),F&16&&Se(I,g,v,_,b,A,C,k))},ct=(h,d,g,v,_,b,A,C,k)=>{h=h||Zt,d=d||Zt;const S=h.length,B=d.length,I=Math.min(S,B);let D;for(D=0;D<I;D++){const F=d[D]=k?dt(d[D]):rt(d[D]);w(h[D],F,g,null,_,b,A,C,k)}S>B?He(h,_,b,!0,!1,I):Se(d,g,v,_,b,A,C,k,I)},kt=(h,d,g,v,_,b,A,C,k)=>{let S=0;const B=d.length;let I=h.length-1,D=B-1;for(;S<=I&&S<=D;){const F=h[S],W=d[S]=k?dt(d[S]):rt(d[S]);if($t(F,W))w(F,W,g,null,_,b,A,C,k);else break;S++}for(;S<=I&&S<=D;){const F=h[I],W=d[D]=k?dt(d[D]):rt(d[D]);if($t(F,W))w(F,W,g,null,_,b,A,C,k);else break;I--,D--}if(S>I){if(S<=D){const F=D+1,W=F<B?d[F].el:v;for(;S<=D;)w(null,d[S]=k?dt(d[S]):rt(d[S]),g,W,_,b,A,C,k),S++}}else if(S>D)for(;S<=I;)Ne(h[S],_,b,!0),S++;else{const F=S,W=S,ie=new Map;for(S=W;S<=D;S++){const $e=d[S]=k?dt(d[S]):rt(d[S]);$e.key!=null&&ie.set($e.key,S)}let se,ge=0;const _e=D-W+1;let Ze=!1,Qe=0;const sn=new Array(_e);for(S=0;S<_e;S++)sn[S]=0;for(S=F;S<=I;S++){const $e=h[S];if(ge>=_e){Ne($e,_,b,!0);continue}let Ye;if($e.key!=null)Ye=ie.get($e.key);else for(se=W;se<=D;se++)if(sn[se-W]===0&&$t($e,d[se])){Ye=se;break}Ye===void 0?Ne($e,_,b,!0):(sn[Ye-W]=S+1,Ye>=Qe?Qe=Ye:Ze=!0,w($e,d[Ye],g,null,_,b,A,C,k),ge++)}const Vs=Ze?wc(sn):Zt;for(se=Vs.length-1,S=_e-1;S>=0;S--){const $e=W+S,Ye=d[$e],zs=d[$e+1],Us=$e+1<B?zs.el||rl(zs):v;sn[S]===0?w(null,Ye,g,Us,_,b,A,C,k):Ze&&(se<0||S!==Vs[se]?Je(Ye,g,Us,2):se--)}}},Je=(h,d,g,v,_=null)=>{const{el:b,type:A,transition:C,children:k,shapeFlag:S}=h;if(S&6){Je(h.component.subTree,d,g,v);return}if(S&128){h.suspense.move(d,g,v);return}if(S&64){A.move(h,d,g,M);return}if(A===Ie){r(b,d,g);for(let I=0;I<k.length;I++)Je(k[I],d,g,v);r(h.anchor,d,g);return}if(A===Vn){P(h,d,g);return}if(v!==2&&S&1&&C)if(v===0)C.persisted&&!b[ze]?r(b,d,g):(C.beforeEnter(b),r(b,d,g),Me(()=>C.enter(b),_));else{const{leave:I,delayLeave:D,afterLeave:F}=C,W=()=>{h.ctx.isUnmounted?s(b):r(b,d,g)},ie=()=>{const se=b._isLeaving||!!b[ze];b._isLeaving&&b[ze](!0),C.persisted&&!se?W():I(b,()=>{W(),F&&F()})};D?D(b,W,ie):ie()}else r(b,d,g)},Ne=(h,d,g,v=!1,_=!1)=>{const{type:b,props:A,ref:C,children:k,dynamicChildren:S,shapeFlag:B,patchFlag:I,dirs:D,cacheIndex:F,memo:W}=h;if(I===-2&&(_=!1),C!=null&&(_t(),bn(C,null,g,h,!0),xt()),F!=null&&(d.renderCache[F]=void 0),B&256){d.ctx.deactivate(h);return}const ie=B&1&&D,se=!vn(h);let ge;if(se&&(ge=A&&A.onVnodeBeforeUnmount)&&Xe(ge,d,h),B&6)Pt(h.component,g,v);else{if(B&128){h.suspense.unmount(g,v);return}ie&&Ot(h,null,d,"beforeUnmount"),B&64?h.type.remove(h,d,g,M,v):S&&!S.hasOnce&&(b!==Ie||I>0&&I&64)?He(S,d,g,!1,!0):(b===Ie&&I&384||!_&&B&16)&&He(k,d,g),v&&Gt(h)}const _e=W!=null&&F==null;(se&&(ge=A&&A.onVnodeUnmounted)||ie||_e)&&Me(()=>{ge&&Xe(ge,d,h),ie&&Ot(h,null,d,"unmounted"),_e&&(h.el=null)},g)},Gt=h=>{const{type:d,el:g,anchor:v,transition:_}=h;if(d===Ie){qt(g,v);return}if(d===Vn){T(h);return}const b=()=>{s(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(h.shapeFlag&1&&_&&!_.persisted){const{leave:A,delayLeave:C}=_,k=()=>A(g,b);C?C(h.el,b,k):k()}else b()},qt=(h,d)=>{let g;for(;h!==d;)g=p(h),s(h),h=g;s(d)},Pt=(h,d,g)=>{const{bum:v,scope:_,job:b,subTree:A,um:C,m:k,a:S}=h;oi(k),oi(S),v&&Ar(v),_.stop(),b&&(b.flags|=8,Ne(A,h,d,g)),C&&Me(C,d),Me(()=>{h.isUnmounted=!0},d)},He=(h,d,g,v=!1,_=!1,b=0)=>{for(let A=b;A<h.length;A++)Ne(h[A],d,g,v,_)},y=h=>{if(h.shapeFlag&6)return y(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const d=p(h.anchor||h.el),g=d&&d[Da];return g?p(g):d};let L=!1;const R=(h,d,g)=>{let v;h==null?d._vnode&&(Ne(d._vnode,null,null,!0),v=d._vnode.component):w(d._vnode||null,h,d,null,null,null,g),d._vnode=h,L||(L=!0,Js(v),Co(),L=!1)},M={p:w,um:Ne,m:Je,r:Gt,mt:ye,mc:Se,pc:Q,pbc:K,n:y,o:e};return{render:R,hydrate:void 0,createApp:oc(R)}}function Lr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Lt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Sc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function tl(e,t,n=!1){const r=e.children,s=t.children;if(j(r)&&j(s))for(let i=0;i<r.length;i++){const l=r[i];let o=s[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[i]=dt(s[i]),o.el=l.el),!n&&o.patchFlag!==-2&&tl(l,o)),o.type===yr&&(o.patchFlag===-1&&(o=s[i]=dt(o)),o.el=l.el),o.type===Pe&&!o.el&&(o.el=l.el)}}function wc(e){const t=e.slice(),n=[0];let r,s,i,l,o;const a=e.length;for(r=0;r<a;r++){const u=e[r];if(u!==0){if(s=n[n.length-1],e[s]<u){t[r]=s,n.push(r);continue}for(i=0,l=n.length-1;i<l;)o=i+l>>1,e[n[o]]<u?i=o+1:l=o;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,l=n[i-1];i-- >0;)n[i]=l,l=t[l];return n}function nl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:nl(t)}function oi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function rl(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?rl(t.subTree):null}const sl=e=>e.__isSuspense;function kc(e,t){t&&t.pendingBranch?j(e)?t.effects.push(...e):t.effects.push(e):Pa(e)}const Ie=Symbol.for("v-fgt"),yr=Symbol.for("v-txt"),Pe=Symbol.for("v-cmt"),Vn=Symbol.for("v-stc"),Ht=[];let Fe=null;function be(e=!1){Ht.push(Fe=e?null:[])}function il(){Ht.pop(),Fe=Ht[Ht.length-1]||null}let En=1;function Xn(e,t=!1){En+=e,e<0&&Fe&&t&&(Fe.hasOnce=!0)}function ol(e){return e.dynamicChildren=En>0?Fe||Zt:null,il(),En>0&&Fe&&Fe.push(e),e}function Re(e,t,n,r,s,i){return ol(he(e,t,n,r,s,i,!0))}function _r(e,t,n,r,s){return ol(pe(e,t,n,r,s,!0))}function er(e){return e?e.__v_isVNode===!0:!1}function $t(e,t){return e.type===t.type&&e.key===t.key}const ll=({key:e})=>e??null,zn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ue(e)||Ce(e)||H(e)?{i:je,r:e,k:t,f:!!n}:e:null);function he(e,t=null,n=null,r=0,s=null,i=e===Ie?0:1,l=!1,o=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ll(t),ref:t&&zn(t),scopeId:Eo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:je};return o?(tr(a,n),i&128&&e.normalize(a)):n&&(a.shapeFlag|=ue(n)?8:16),En>0&&!l&&Fe&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Fe.push(a),a}const pe=Cc;function Cc(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Ho)&&(e=Pe),er(e)){const o=It(e,t,!0);return n&&tr(o,n),En>0&&!i&&Fe&&(o.shapeFlag&6?Fe[Fe.indexOf(e)]=o:Fe.push(o)),o.patchFlag=-2,o}if(Dc(e)&&(e=e.__vccOpts),t){t=Ac(t);let{class:o,style:a}=t;o&&!ue(o)&&(t.class=Sn(o)),ee(a)&&(vs(a)&&!j(a)&&(a=ve({},a)),t.style=fr(a))}const l=ue(e)?1:sl(e)?128:gr(e)?64:ee(e)?4:H(e)?2:0;return he(e,t,n,r,s,l,i,!0)}function Ac(e){return e?vs(e)||Jo(e)?ve({},e):e:null}function It(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:l,children:o,transition:a}=e,u=t?Ec(s||{},t):s,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&ll(u),ref:t&&t.ref?n&&i?j(i)?i.concat(zn(t)):[i,zn(t)]:zn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ie?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&It(e.ssContent),ssFallback:e.ssFallback&&It(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&r&&An(c,a.clone(c)),c}function Un(e=" ",t=0){return pe(yr,null,e,t)}function al(e,t){const n=pe(Vn,null,e);return n.staticCount=t,n}function en(e="",t=!1){return t?(be(),_r(Pe,null,e)):pe(Pe,null,e)}function rt(e){return e==null||typeof e=="boolean"?pe(Pe):j(e)?pe(Ie,null,e.slice()):er(e)?dt(e):pe(yr,null,String(e))}function dt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:It(e)}function tr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(j(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),tr(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Jo(t)?t._ctx=je:s===3&&je&&(je.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(H(t)){if(r&65){tr(e,{default:t});return}t={default:t,_ctx:je},n=32}else t=String(t),r&64?(n=16,t=[Un(t)]):n=8;e.children=t,e.shapeFlag|=n}function Ec(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Sn([t.class,r.class]));else if(s==="style")t.style=fr([t.style,r.style]);else if(or(s)){const i=t[s],l=r[s];l&&i!==l&&!(j(i)&&i.includes(l))?t[s]=i?[].concat(i,l):l:l==null&&i==null&&!lr(s)&&(t[s]=l)}else s!==""&&(t[s]=r[s])}return t}function Xe(e,t,n,r=null){Ge(e,t,7,[n,r])}const Rc=Uo();let Tc=0;function Ic(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Rc,i={uid:Tc++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new na(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qo(r,s),emitsOptions:Go(r,s),emit:null,emitted:null,propsDefaults:le,inheritAttrs:r.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ac.bind(null,i),e.ce&&e.ce(i),i}let ke=null;const cl=()=>ke||je;let nr,Rn;{const e=ur(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(l=>l(i)):s[0](i)}};nr=t("__VUE_INSTANCE_SETTERS__",n=>ke=n),Rn=t("__VUE_SSR_SETTERS__",n=>Tn=n)}const Nn=e=>{const t=ke;return nr(e),e.scope.on(),()=>{e.scope.off(),nr(t)}},li=()=>{ke&&ke.scope.off(),nr(null)};function ul(e){return e.vnode.shapeFlag&4}let Tn=!1;function Pc(e,t=!1,n=!1){t&&Rn(t);const{props:r,children:s}=e.vnode,i=ul(e);dc(e,r,i,t),vc(e,s,n||t);const l=i?Oc(e,t):void 0;return t&&Rn(!1),l}function Oc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Xa);const{setup:r}=n;if(r){_t();const s=e.setupContext=r.length>1?Nc(e):null,i=Nn(e),l=Ln(r,e,0,[e.props,s]),o=Qi(l);if(xt(),i(),(o||e.sp)&&!vn(e)&&Do(e),o){if(l.then(li,li),t)return l.then(a=>{Rn(!0);try{ai(e,a,t)}finally{Rn(!1)}}).catch(a=>{dr(a,e,0)});e.asyncDep=l}else ai(e,l)}else fl(e)}function ai(e,t,n){H(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ee(t)&&(e.setupState=xo(t)),fl(e)}function fl(e,t,n){const r=e.type;e.render||(e.render=r.render||ot);{const s=Nn(e);_t();try{ec(e)}finally{xt(),s()}}}const Lc={get(e,t){return we(e,"get",""),e[t]}};function Nc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Lc),slots:e.slots,emit:e.emit,expose:t}}function xr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(xo(xa(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in yn)return yn[n](e)},has(t,n){return n in t||n in yn}})):e.proxy}function Mc(e,t=!0){return H(e)?e.displayName||e.name:e.name||t&&e.__name}function Dc(e){return H(e)&&"__vccOpts"in e}const Be=(e,t)=>Aa(e,t,Tn);function As(e,t,n){try{Xn(-1);const r=arguments.length;return r===2?ee(t)&&!j(t)?er(t)?pe(e,null,[t]):pe(e,t):pe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&er(n)&&(n=[n]),pe(e,t,n))}finally{Xn(1)}}const $c="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xr;const ci=typeof window<"u"&&window.trustedTypes;if(ci)try{Xr=ci.createPolicy("vue",{createHTML:e=>e})}catch{}const hl=Xr?e=>Xr.createHTML(e):e=>e,Bc="http://www.w3.org/2000/svg",jc="http://www.w3.org/1998/Math/MathML",pt=typeof document<"u"?document:null,ui=pt&&pt.createElement("template"),Fc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?pt.createElementNS(Bc,e):t==="mathml"?pt.createElementNS(jc,e):n?pt.createElement(e,{is:n}):pt.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>pt.createTextNode(e),createComment:e=>pt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>pt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const l=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ui.innerHTML=hl(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const o=ui.content;if(r==="svg"||r==="mathml"){const a=o.firstChild;for(;a.firstChild;)o.appendChild(a.firstChild);o.removeChild(a)}t.insertBefore(o,n)}return[l?l.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ct="transition",an="animation",In=Symbol("_vtc"),pl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Hc=ve({},Io,pl),Vc=e=>(e.displayName="Transition",e.props=Hc,e),dl=Vc((e,{slots:t})=>As(ja,zc(e),t)),Nt=(e,t=[])=>{j(e)?e.forEach(n=>n(...t)):e&&e(...t)},fi=e=>e?j(e)?e.some(t=>t.length>1):e.length>1:!1;function zc(e){const t={};for(const O in e)O in pl||(t[O]=e[O]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:l=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:a=i,appearActiveClass:u=l,appearToClass:c=o,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,x=Uc(s),w=x&&x[0],$=x&&x[1],{onBeforeEnter:N,onEnter:E,onEnterCancelled:P,onLeave:T,onLeaveCancelled:z,onBeforeAppear:q=N,onAppear:U=E,onAppearCancelled:Se=P}=t,V=(O,Z,ye,De)=>{O._enterCancelled=De,Mt(O,Z?c:o),Mt(O,Z?u:l),ye&&ye()},K=(O,Z)=>{O._isLeaving=!1,Mt(O,f),Mt(O,m),Mt(O,p),Z&&Z()},ae=O=>(Z,ye)=>{const De=O?U:E,de=()=>V(Z,O,ye);Nt(De,[Z,de]),hi(()=>{Mt(Z,O?a:i),ft(Z,O?c:o),fi(De)||pi(Z,r,w,de)})};return ve(t,{onBeforeEnter(O){Nt(N,[O]),ft(O,i),ft(O,l)},onBeforeAppear(O){Nt(q,[O]),ft(O,a),ft(O,u)},onEnter:ae(!1),onAppear:ae(!0),onLeave(O,Z){O._isLeaving=!0;const ye=()=>K(O,Z);ft(O,f),O._enterCancelled?(ft(O,p),mi(O)):(mi(O),ft(O,p)),hi(()=>{O._isLeaving&&(Mt(O,f),ft(O,m),fi(T)||pi(O,r,$,ye))}),Nt(T,[O,ye])},onEnterCancelled(O){V(O,!1,void 0,!0),Nt(P,[O])},onAppearCancelled(O){V(O,!0,void 0,!0),Nt(Se,[O])},onLeaveCancelled(O){K(O),Nt(z,[O])}})}function Uc(e){if(e==null)return null;if(ee(e))return[Nr(e.enter),Nr(e.leave)];{const t=Nr(e);return[t,t]}}function Nr(e){return Kl(e)}function ft(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[In]||(e[In]=new Set)).add(t)}function Mt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[In];n&&(n.delete(t),n.size||(e[In]=void 0))}function hi(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Gc=0;function pi(e,t,n,r){const s=e._endId=++Gc,i=()=>{s===e._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:l,timeout:o,propCount:a}=qc(e,t);if(!l)return r();const u=l+"end";let c=0;const f=()=>{e.removeEventListener(u,p),i()},p=m=>{m.target===e&&++c>=a&&f()};setTimeout(()=>{c<a&&f()},o+1),e.addEventListener(u,p)}function qc(e,t){const n=window.getComputedStyle(e),r=x=>(n[x]||"").split(", "),s=r(`${Ct}Delay`),i=r(`${Ct}Duration`),l=di(s,i),o=r(`${an}Delay`),a=r(`${an}Duration`),u=di(o,a);let c=null,f=0,p=0;t===Ct?l>0&&(c=Ct,f=l,p=i.length):t===an?u>0&&(c=an,f=u,p=a.length):(f=Math.max(l,u),c=f>0?l>u?Ct:an:null,p=c?c===Ct?i.length:a.length:0);const m=c===Ct&&/\b(?:transform|all)(?:,|$)/.test(r(`${Ct}Property`).toString());return{type:c,timeout:f,propCount:p,hasTransform:m}}function di(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>gi(n)+gi(e[r])))}function gi(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function mi(e){return(e?e.ownerDocument:document).body.offsetHeight}function Wc(e,t,n){const r=e[In];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const bi=Symbol("_vod"),Kc=Symbol("_vsh"),Jc=Symbol(""),Zc=/(?:^|;)\s*display\s*:/;function Qc(e,t,n){const r=e.style,s=ue(n);let i=!1;if(n&&!s){if(t)if(ue(t))for(const l of t.split(";")){const o=l.slice(0,l.indexOf(":")).trim();n[o]==null&&pn(r,o,"")}else for(const l in t)n[l]==null&&pn(r,l,"");for(const l in n){l==="display"&&(i=!0);const o=n[l];o!=null?Xc(e,l,!ue(t)&&t?t[l]:void 0,o)||pn(r,l,o):pn(r,l,"")}}else if(s){if(t!==n){const l=r[Jc];l&&(n+=";"+l),r.cssText=n,i=Zc.test(n)}}else t&&e.removeAttribute("style");bi in e&&(e[bi]=i?r.display:"",e[Kc]&&(r.display="none"))}const vi=/\s*!important$/;function pn(e,t,n){if(j(n))n.forEach(r=>pn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Yc(e,t);vi.test(n)?e.setProperty(zt(r),n.replace(vi,""),"important"):e[r]=n}}const yi=["Webkit","Moz","ms"],Mr={};function Yc(e,t){const n=Mr[t];if(n)return n;let r=Le(t);if(r!=="filter"&&r in e)return Mr[t]=r;r=cr(r);for(let s=0;s<yi.length;s++){const i=yi[s]+r;if(i in e)return Mr[t]=i}return t}function Xc(e,t,n,r){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&ue(r)&&n===r}const _i="http://www.w3.org/1999/xlink";function xi(e,t,n,r,s,i=ea(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(_i,t.slice(6,t.length)):e.setAttributeNS(_i,t,n):n==null||i&&!to(n)?e.removeAttribute(t):e.setAttribute(t,i?"":at(n)?String(n):n)}function Si(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?hl(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const o=i==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(o!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const o=typeof e[t];o==="boolean"?n=to(n):n==null&&o==="string"?(n="",l=!0):o==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(s||t)}function eu(e,t,n,r){e.addEventListener(t,n,r)}function tu(e,t,n,r){e.removeEventListener(t,n,r)}const wi=Symbol("_vei");function nu(e,t,n,r,s=null){const i=e[wi]||(e[wi]={}),l=i[t];if(r&&l)l.value=r;else{const[o,a]=iu(t);if(r){const u=i[t]=au(r,s);eu(e,o,u,a)}else l&&(tu(e,o,l,a),i[t]=void 0)}}const ru=/(Once|Passive|Capture)$/,su=/^on:?(?:Once|Passive|Capture)$/;function iu(e){let t,n;for(;(n=e.match(ru))&&!su.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):zt(e.slice(2)),t]}let Dr=0;const ou=Promise.resolve(),lu=()=>Dr||(ou.then(()=>Dr=0),Dr=Date.now());function au(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(j(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const l=s.slice(),o=[r];for(let a=0;a<l.length&&!r._stopped;a++){const u=l[a];u&&Ge(u,t,5,o)}}else Ge(s,t,5,[r])};return n.value=e,n.attached=lu(),n}const ki=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,cu=(e,t,n,r,s,i)=>{const l=s==="svg";t==="class"?Wc(e,r,l):t==="style"?Qc(e,n,r):or(t)?lr(t)||nu(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):uu(e,t,r,l))?(Si(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&xi(e,t,r,l,i,t!=="value")):e._isVueCE&&(fu(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!ue(r)))?Si(e,Le(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),xi(e,t,r,l))};function uu(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&ki(t)&&H(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ki(t)&&ue(n)?!1:t in e}function fu(e,t){const n=e._def.props;if(!n)return!1;const r=Le(t);return Array.isArray(n)?n.some(s=>Le(s)===r):Object.keys(n).some(s=>Le(s)===r)}const hu=ve({patchProp:cu},Fc);let Ci;function pu(){return Ci||(Ci=_c(hu))}const du=((...e)=>{const t=pu().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=mu(r);if(!s)return;const i=t._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const l=n(s,!1,gu(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),l},t});function gu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function mu(e){return ue(e)?document.querySelector(e):e}const gl="/avatar.png",ml="blog-theme",es=ys(!0);function bl(e){es.value=e,e?document.documentElement.removeAttribute("data-theme"):document.documentElement.setAttribute("data-theme","light")}function bu(){const e=localStorage.getItem(ml);bl(e!=="light")}function vu(){function e(){const t=!es.value;bl(t),localStorage.setItem(ml,t?"dark":"light")}return{isDark:es,toggleTheme:e}}const Es=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},yu={class:"navbar"},_u={class:"container nav-inner"},xu={class:"nav-right"},Su={class:"nav-links"},wu=["title"],ku={__name:"NavBar",setup(e){const{isDark:t,toggleTheme:n}=vu();return(r,s)=>{const i=Ss("router-link");return be(),Re("header",yu,[he("div",_u,[pe(i,{to:"/",class:"logo"},{default:bt(()=>[...s[1]||(s[1]=[he("img",{class:"avatar",src:gl,alt:"头像"},null,-1),he("span",null,"我的博客",-1)])]),_:1}),he("div",xu,[he("nav",Su,[pe(i,{to:"/","exact-active-class":"active"},{default:bt(()=>[...s[2]||(s[2]=[Un("首页",-1)])]),_:1}),pe(i,{to:"/archive","active-class":"active"},{default:bt(()=>[...s[3]||(s[3]=[Un("归档",-1)])]),_:1}),pe(i,{to:"/about","active-class":"active"},{default:bt(()=>[...s[4]||(s[4]=[Un("关于我",-1)])]),_:1})]),he("button",{class:"theme-toggle",onClick:s[0]||(s[0]=(...l)=>it(n)&&it(n)(...l)),title:it(t)?"切换到浅色模式":"切换到深色模式"},Tt(it(t)?"浅色":"深色"),9,wu)])])])}}},Cu=Es(ku,[["__scopeId","data-v-4d3ae338"]]),Au={class:"bg-animation","aria-hidden":"true"},Eu={class:"container"},Ru={__name:"App",setup(e){const t=[{left:"8%",size:"3px",color:"var(--accent)",duration:"14s",delay:"0s"},{left:"18%",size:"5px",color:"var(--accent-2)",duration:"18s",delay:"3s"},{left:"28%",size:"3px",color:"var(--accent-3)",duration:"12s",delay:"6s"},{left:"40%",size:"4px",color:"var(--accent)",duration:"20s",delay:"1s"},{left:"52%",size:"3px",color:"var(--accent-2)",duration:"16s",delay:"8s"},{left:"63%",size:"5px",color:"var(--accent-3)",duration:"14s",delay:"2s"},{left:"75%",size:"3px",color:"var(--accent)",duration:"19s",delay:"5s"},{left:"86%",size:"4px",color:"var(--accent-2)",duration:"13s",delay:"9s"},{left:"93%",size:"3px",color:"var(--accent-3)",duration:"17s",delay:"4s"}];return(n,r)=>{const s=Ss("router-view");return be(),Re(Ie,null,[he("div",Au,[r[0]||(r[0]=al('<div class="bg-flow"></div><div class="blob blob-1"></div><div class="blob blob-2"></div><div class="blob blob-3"></div><div class="bg-grid"></div>',5)),(be(),Re(Ie,null,Qn(t,(i,l)=>he("span",{key:l,class:"particle",style:fr({left:i.left,width:i.size,height:i.size,background:i.color,boxShadow:`0 0 8px ${i.color}`,animationDuration:i.duration,animationDelay:i.delay})},null,4)),64))]),pe(Cu),he("main",Eu,[pe(s,null,{default:bt(({Component:i})=>[pe(dl,{name:"page",mode:"out-in"},{default:bt(()=>[(be(),_r(Qa(i)))]),_:2},1024)]),_:1})]),r[1]||(r[1]=he("footer",{class:"site-footer"},[he("div",{class:"container"},[he("p",null,"© 2026 我的博客 · Powered by Vue 3 + Vite")])],-1))],64)}}},Tu="modulepreload",Iu=function(e){return"/"+e},Ai={},$r=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let l=function(u){return Promise.all(u.map(c=>Promise.resolve(c).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=l(n.map(u=>{if(u=Iu(u),u in Ai)return;Ai[u]=!0;const c=u.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":Tu,c||(p.as="script"),p.crossOrigin="",p.href=u,a&&p.setAttribute("nonce",a),document.head.appendChild(p),c)return new Promise((m,x)=>{p.addEventListener("load",m),p.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(l){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=l,window.dispatchEvent(o),!o.defaultPrevented)throw l}return s.then(l=>{for(const o of l||[])o.status==="rejected"&&i(o.reason);return t().catch(i)})};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Jt=typeof document<"u";function vl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Pu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&vl(e.default)}const Y=Object.assign;function Br(e,t){const n={};for(const r in t){const s=t[r];n[r]=Ke(s)?s.map(e):e(s)}return n}const _n=()=>{},Ke=Array.isArray;function Ei(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const yl=/#/g,Ou=/&/g,Lu=/\//g,Nu=/=/g,Mu=/\?/g,_l=/\+/g,Du=/%5B/g,$u=/%5D/g,xl=/%5E/g,Bu=/%60/g,Sl=/%7B/g,ju=/%7C/g,wl=/%7D/g,Fu=/%20/g;function Rs(e){return e==null?"":encodeURI(""+e).replace(ju,"|").replace(Du,"[").replace($u,"]")}function Hu(e){return Rs(e).replace(Sl,"{").replace(wl,"}").replace(xl,"^")}function ts(e){return Rs(e).replace(_l,"%2B").replace(Fu,"+").replace(yl,"%23").replace(Ou,"%26").replace(Bu,"`").replace(Sl,"{").replace(wl,"}").replace(xl,"^")}function Vu(e){return ts(e).replace(Nu,"%3D")}function zu(e){return Rs(e).replace(yl,"%23").replace(Mu,"%3F")}function Uu(e){return zu(e).replace(Lu,"%2F")}function Pn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Gu=/\/$/,qu=e=>e.replace(Gu,"");function jr(e,t,n="/"){let r,s={},i="",l="";const o=t.indexOf("#");let a=t.indexOf("?");return a=o>=0&&a>o?-1:a,a>=0&&(r=t.slice(0,a),i=t.slice(a,o>0?o:t.length),s=e(i.slice(1))),o>=0&&(r=r||t.slice(0,o),l=t.slice(o,t.length)),r=Zu(r??t,n),{fullPath:r+i+l,path:r,query:s,hash:Pn(l)}}function Wu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ri(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ku(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&nn(t.matched[r],n.matched[s])&&kl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function nn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function kl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Ju(e[n],t[n]))return!1;return!0}function Ju(e,t){return Ke(e)?Ti(e,t):Ke(t)?Ti(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function Ti(e,t){return Ke(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Zu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,l,o;for(l=0;l<r.length;l++)if(o=r[l],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(l).join("/")}const At={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let ns=(function(e){return e.pop="pop",e.push="push",e})({}),Fr=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Qu(e){if(!e)if(Jt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),qu(e)}const Yu=/^[^#]+#/;function Xu(e,t){return e.replace(Yu,"#")+t}function ef(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Sr=()=>({left:window.scrollX,top:window.scrollY});function tf(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=ef(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Ii(e,t){return(history.state?history.state.position-t:-1)+e}const rs=new Map;function nf(e,t){rs.set(e,t)}function rf(e){const t=rs.get(e);return rs.delete(e),t}function sf(e){return typeof e=="string"||e&&typeof e=="object"}function Cl(e){return typeof e=="string"||typeof e=="symbol"}let fe=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Al=Symbol("");fe.MATCHER_NOT_FOUND+"",fe.NAVIGATION_GUARD_REDIRECT+"",fe.NAVIGATION_ABORTED+"",fe.NAVIGATION_CANCELLED+"",fe.NAVIGATION_DUPLICATED+"";function rn(e,t){return Y(new Error,{type:e,[Al]:!0},t)}function ht(e,t){return e instanceof Error&&Al in e&&(t==null||!!(e.type&t))}const of=["params","query","hash"];function lf(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of of)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function af(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(_l," "),i=s.indexOf("="),l=Pn(i<0?s:s.slice(0,i)),o=i<0?null:Pn(s.slice(i+1));if(l in t){let a=t[l];Ke(a)||(a=t[l]=[a]),a.push(o)}else t[l]=o}return t}function Pi(e){let t="";for(let n in e){const r=e[n];if(n=Vu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ke(r)?r.map(s=>s&&ts(s)):[r&&ts(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function cf(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Ke(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const uf=Symbol(""),Oi=Symbol(""),Ts=Symbol(""),Is=Symbol(""),ss=Symbol("");function cn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Rt(e,t,n,r,s,i=l=>l()){const l=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const u=p=>{p===!1?a(rn(fe.NAVIGATION_ABORTED,{from:n,to:t})):p instanceof Error?a(p):sf(p)?a(rn(fe.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(l&&r.enterCallbacks[s]===l&&typeof p=="function"&&l.push(p),o())},c=i(()=>e.call(r&&r.instances[s],t,n,u));let f=Promise.resolve(c);e.length<3&&(f=f.then(u)),f.catch(p=>a(p))})}function Hr(e,t,n,r,s=i=>i()){const i=[];for(const l of e)for(const o in l.components){let a=l.components[o];if(!(t!=="beforeRouteEnter"&&!l.instances[o]))if(vl(a)){const u=(a.__vccOpts||a)[t];u&&i.push(Rt(u,n,r,l,o,s))}else{let u=a();i.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${o}" at "${l.path}"`);const f=Pu(c)?c.default:c;l.mods[o]=c,l.components[o]=f;const p=(f.__vccOpts||f)[t];return p&&Rt(p,n,r,l,o,s)()}))}}return i}function ff(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let l=0;l<i;l++){const o=t.matched[l];o&&(e.matched.find(u=>nn(u,o))?r.push(o):n.push(o));const a=e.matched[l];a&&(t.matched.find(u=>nn(u,a))||s.push(a))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let hf=()=>location.protocol+"//"+location.host;function El(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let l=s.includes(e.slice(i))?e.slice(i).length:1,o=s.slice(l);return o[0]!=="/"&&(o="/"+o),Ri(o,"")}return Ri(n,e)+r+s}function pf(e,t,n,r){let s=[],i=[],l=null;const o=({state:p})=>{const m=El(e,location),x=n.value,w=t.value;let $=0;if(p){if(n.value=m,t.value=p,l&&l===x){l=null;return}$=w?p.position-w.position:0}else r(m);s.forEach(N=>{N(n.value,x,{delta:$,type:ns.pop,direction:$?$>0?Fr.forward:Fr.back:Fr.unknown})})};function a(){l=n.value}function u(p){s.push(p);const m=()=>{const x=s.indexOf(p);x>-1&&s.splice(x,1)};return i.push(m),m}function c(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(Y({},p.state,{scroll:Sr()}),"")}}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:a,listen:u,destroy:f}}function Li(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Sr():null}}function df(e){const{history:t,location:n}=window,r={value:El(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(a,u,c){const f=e.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+a:hf()+e+a;try{t[c?"replaceState":"pushState"](u,"",p),s.value=u}catch(m){console.error(m),n[c?"replace":"assign"](p)}}function l(a,u){i(a,Y({},t.state,Li(s.value.back,a,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=a}function o(a,u){const c=Y({},s.value,t.state,{forward:a,scroll:Sr()});i(c.current,c,!0),i(a,Y({},Li(r.value,a,null),{position:c.position+1},u),!1),r.value=a}return{location:r,state:s,push:o,replace:l}}function gf(e){e=Qu(e);const t=df(e),n=pf(e,t.state,t.location,t.replace);function r(i,l=!0){l||n.pauseListeners(),history.go(i)}const s=Y({location:"",base:e,go:r,createHref:Xu.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function mf(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),gf(e)}let Bt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var me=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(me||{});const bf={type:Bt.Static,value:""},vf=/[a-zA-Z0-9_]/;function yf(e){if(!e)return[[]];if(e==="/")return[[bf]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=me.Static,r=n;const s=[];let i;function l(){i&&s.push(i),i=[]}let o=0,a,u="",c="";function f(){u&&(n===me.Static?i.push({type:Bt.Static,value:u}):n===me.Param||n===me.ParamRegExp||n===me.ParamRegExpEnd?(i.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Bt.Param,value:u,regexp:c,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),u="")}function p(){u+=a}for(;o<e.length;){if(a=e[o++],a==="\\"&&n!==me.ParamRegExp){r=n,n=me.EscapeNext;continue}switch(n){case me.Static:a==="/"?(u&&f(),l()):a===":"?(f(),n=me.Param):p();break;case me.EscapeNext:p(),n=r;break;case me.Param:a==="("?n=me.ParamRegExp:vf.test(a)?p():(f(),n=me.Static,a!=="*"&&a!=="?"&&a!=="+"&&o--);break;case me.ParamRegExp:a===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+a:n=me.ParamRegExpEnd:c+=a;break;case me.ParamRegExpEnd:f(),n=me.Static,a!=="*"&&a!=="?"&&a!=="+"&&o--,c="";break;default:t("Unknown state");break}}return n===me.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),f(),l(),s}const Ni="[^/]+?",_f={sensitive:!1,strict:!1,start:!0,end:!0};var Ee=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Ee||{});const xf=/[.+*?^${}()[\]/\\]/g;function Sf(e,t){const n=Y({},_f,t),r=[];let s=n.start?"^":"";const i=[];for(const u of e){const c=u.length?[]:[Ee.Root];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const p=u[f];let m=Ee.Segment+(n.sensitive?Ee.BonusCaseSensitive:0);if(p.type===Bt.Static)f||(s+="/"),s+=p.value.replace(xf,"\\$&"),m+=Ee.Static;else if(p.type===Bt.Param){const{value:x,repeatable:w,optional:$,regexp:N}=p;i.push({name:x,repeatable:w,optional:$});const E=N||Ni;if(E!==Ni){m+=Ee.BonusCustomRegExp;try{`${E}`}catch(T){throw new Error(`Invalid custom RegExp for param "${x}" (${E}): `+T.message)}}let P=w?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;f||(P=$&&u.length<2?`(?:/${P})`:"/"+P),$&&(P+="?"),s+=P,m+=Ee.Dynamic,$&&(m+=Ee.BonusOptional),w&&(m+=Ee.BonusRepeatable),E===".*"&&(m+=Ee.BonusWildcard)}c.push(m)}r.push(c)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=Ee.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const l=new RegExp(s,n.sensitive?"":"i");function o(u){const c=u.match(l),f={};if(!c)return null;for(let p=1;p<c.length;p++){const m=c[p]||"",x=i[p-1];f[x.name]=m&&x.repeatable?m.split("/"):m}return f}function a(u){let c="",f=!1;for(const p of e){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const m of p)if(m.type===Bt.Static)c+=m.value;else if(m.type===Bt.Param){const{value:x,repeatable:w,optional:$}=m,N=x in u?u[x]:"";if(Ke(N)&&!w)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const E=Ke(N)?N.join("/"):N;if(!E)if($)p.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${x}"`);c+=E}}return c||"/"}return{re:l,score:r,keys:i,parse:o,stringify:a}}function wf(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===Ee.Static+Ee.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ee.Static+Ee.Segment?1:-1:0}function Rl(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=wf(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Mi(r))return 1;if(Mi(s))return-1}return s.length-r.length}function Mi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const kf={strict:!1,end:!0,sensitive:!1};function Cf(e,t,n){const r=Sf(yf(e.path),n),s=Y(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Af(e,t){const n=[],r=new Map;t=Ei(kf,t);function s(f){return r.get(f)}function i(f,p,m){const x=!m,w=$i(f);w.aliasOf=m&&m.record;const $=Ei(t,f),N=[w];if("alias"in f){const T=typeof f.alias=="string"?[f.alias]:f.alias;for(const z of T)N.push($i(Y({},w,{components:m?m.record.components:w.components,path:z,aliasOf:m?m.record:w})))}let E,P;for(const T of N){const{path:z}=T;if(p&&z[0]!=="/"){const q=p.record.path,U=q[q.length-1]==="/"?"":"/";T.path=p.record.path+(z&&U+z)}if(E=Cf(T,p,$),m?m.alias.push(E):(P=P||E,P!==E&&P.alias.push(E),x&&f.name&&!Bi(E)&&l(f.name)),Tl(E)&&a(E),w.children){const q=w.children;for(let U=0;U<q.length;U++)i(q[U],E,m&&m.children[U])}m=m||E}return P?()=>{l(P)}:_n}function l(f){if(Cl(f)){const p=r.get(f);p&&(r.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(l),p.alias.forEach(l))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(l),f.alias.forEach(l))}}function o(){return n}function a(f){const p=Tf(f,n);n.splice(p,0,f),f.record.name&&!Bi(f)&&r.set(f.record.name,f)}function u(f,p){let m,x={},w,$;if("name"in f&&f.name){if(m=r.get(f.name),!m)throw rn(fe.MATCHER_NOT_FOUND,{location:f});$=m.record.name,x=Y(Di(p.params,m.keys.filter(P=>!P.optional).concat(m.parent?m.parent.keys.filter(P=>P.optional):[]).map(P=>P.name)),f.params&&Di(f.params,m.keys.map(P=>P.name))),w=m.stringify(x)}else if(f.path!=null)w=f.path,m=n.find(P=>P.re.test(w)),m&&(x=m.parse(w),$=m.record.name);else{if(m=p.name?r.get(p.name):n.find(P=>P.re.test(p.path)),!m)throw rn(fe.MATCHER_NOT_FOUND,{location:f,currentLocation:p});$=m.record.name,x=Y({},p.params,f.params),w=m.stringify(x)}const N=[];let E=m;for(;E;)N.unshift(E.record),E=E.parent;return{name:$,path:w,params:x,matched:N,meta:Rf(N)}}e.forEach(f=>i(f));function c(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:l,clearRoutes:c,getRoutes:o,getRecordMatcher:s}}function Di(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function $i(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Ef(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Ef(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Bi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Rf(e){return e.reduce((t,n)=>Y(t,n.meta),{})}function Tf(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;Rl(e,t[i])<0?r=i:n=i+1}const s=If(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function If(e){let t=e;for(;t=t.parent;)if(Tl(t)&&Rl(e,t)===0)return t}function Tl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function ji(e){const t=lt(Ts),n=lt(Is),r=Be(()=>{const a=it(e.to);return t.resolve(a)}),s=Be(()=>{const{matched:a}=r.value,{length:u}=a,c=a[u-1],f=n.matched;if(!c||!f.length)return-1;const p=f.findIndex(nn.bind(null,c));if(p>-1)return p;const m=Fi(a[u-2]);return u>1&&Fi(c)===m&&f[f.length-1].path!==m?f.findIndex(nn.bind(null,a[u-2])):p}),i=Be(()=>s.value>-1&&Mf(n.params,r.value.params)),l=Be(()=>s.value>-1&&s.value===n.matched.length-1&&kl(n.params,r.value.params));function o(a={}){if(Nf(a)){const u=t[it(e.replace)?"replace":"push"](it(e.to)).catch(_n);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Be(()=>r.value.href),isActive:i,isExactActive:l,navigate:o}}function Pf(e){return e.length===1?e[0]:e}const Of=Mo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ji,setup(e,{slots:t}){const n=pr(ji(e)),{options:r}=lt(Ts),s=Be(()=>({[Hi(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Hi(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&Pf(t.default(n));return e.custom?i:As("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Lf=Of;function Nf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Mf(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ke(s)||s.length!==r.length||r.some((i,l)=>i.valueOf()!==s[l].valueOf()))return!1}return!0}function Fi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Hi=(e,t,n)=>e??t??n,Df=Mo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=lt(ss),s=Be(()=>e.route||r.value),i=lt(Oi,0),l=Be(()=>{let u=it(i);const{matched:c}=s.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),o=Be(()=>s.value.matched[l.value]);Fn(Oi,Be(()=>l.value+1)),Fn(uf,o),Fn(ss,s);const a=ys();return Hn(()=>[a.value,o.value,e.name],([u,c,f],[p,m,x])=>{c&&(c.instances[f]=u,m&&m!==c&&u&&u===p&&(c.leaveGuards.size||(c.leaveGuards=m.leaveGuards),c.updateGuards.size||(c.updateGuards=m.updateGuards))),u&&c&&(!m||!nn(c,m)||!p)&&(c.enterCallbacks[f]||[]).forEach(w=>w(u))},{flush:"post"}),()=>{const u=s.value,c=e.name,f=o.value,p=f&&f.components[c];if(!p)return Vi(n.default,{Component:p,route:u});const m=f.props[c],x=m?m===!0?u.params:typeof m=="function"?m(u):m:null,$=As(p,Y({},x,t,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(f.instances[c]=null)},ref:a}));return Vi(n.default,{Component:$,route:u})||$}}});function Vi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const $f=Df;function Bf(e){const t=Af(e.routes,e),n=e.parseQuery||af,r=e.stringifyQuery||Pi,s=e.history,i=cn(),l=cn(),o=cn(),a=Sa(At);let u=At;Jt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Br.bind(null,y=>""+y),f=Br.bind(null,Uu),p=Br.bind(null,Pn);function m(y,L){let R,M;return Cl(y)?(R=t.getRecordMatcher(y),M=L):M=y,t.addRoute(M,R)}function x(y){const L=t.getRecordMatcher(y);L&&t.removeRoute(L)}function w(){return t.getRoutes().map(y=>y.record)}function $(y){return!!t.getRecordMatcher(y)}function N(y,L){if(L=Y({},L||a.value),typeof y=="string"){const g=jr(n,y,L.path),v=t.resolve({path:g.path},L),_=s.createHref(g.fullPath);return Y(g,v,{params:p(v.params),hash:Pn(g.hash),redirectedFrom:void 0,href:_})}let R;if(y.path!=null)R=Y({},y,{path:jr(n,y.path,L.path).path});else{const g=Y({},y.params);for(const v in g)g[v]==null&&delete g[v];R=Y({},y,{params:f(g)}),L.params=f(L.params)}const M=t.resolve(R,L),G=y.hash||"";M.params=c(p(M.params));const h=Wu(r,Y({},y,{hash:Hu(G),path:M.path})),d=s.createHref(h);return Y({fullPath:h,hash:G,query:r===Pi?cf(y.query):y.query||{}},M,{redirectedFrom:void 0,href:d})}function E(y){return typeof y=="string"?jr(n,y,a.value.path):Y({},y)}function P(y,L){if(u!==y)return rn(fe.NAVIGATION_CANCELLED,{from:L,to:y})}function T(y){return U(y)}function z(y){return T(Y(E(y),{replace:!0}))}function q(y,L){const R=y.matched[y.matched.length-1];if(R&&R.redirect){const{redirect:M}=R;let G=typeof M=="function"?M(y,L):M;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=E(G):{path:G},G.params={}),Y({query:y.query,hash:y.hash,params:G.path!=null?{}:y.params},G)}}function U(y,L){const R=u=N(y),M=a.value,G=y.state,h=y.force,d=y.replace===!0,g=q(R,M);if(g)return U(Y(E(g),{state:typeof g=="object"?Y({},G,g.state):G,force:h,replace:d}),L||R);const v=R;v.redirectedFrom=L;let _;return!h&&Ku(r,M,R)&&(_=rn(fe.NAVIGATION_DUPLICATED,{to:v,from:M}),Je(M,M,!0,!1)),(_?Promise.resolve(_):K(v,M)).catch(b=>ht(b)?ht(b,fe.NAVIGATION_GUARD_REDIRECT)?b:kt(b):Q(b,v,M)).then(b=>{if(b){if(ht(b,fe.NAVIGATION_GUARD_REDIRECT))return U(Y({replace:d},E(b.to),{state:typeof b.to=="object"?Y({},G,b.to.state):G,force:h}),L||v)}else b=O(v,M,!0,d,G);return ae(v,M,b),b})}function Se(y,L){const R=P(y,L);return R?Promise.reject(R):Promise.resolve()}function V(y){const L=qt.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(y):y()}function K(y,L){let R;const[M,G,h]=ff(y,L);R=Hr(M.reverse(),"beforeRouteLeave",y,L);for(const g of M)g.leaveGuards.forEach(v=>{R.push(Rt(v,y,L))});const d=Se.bind(null,y,L);return R.push(d),He(R).then(()=>{R=[];for(const g of i.list())R.push(Rt(g,y,L));return R.push(d),He(R)}).then(()=>{R=Hr(G,"beforeRouteUpdate",y,L);for(const g of G)g.updateGuards.forEach(v=>{R.push(Rt(v,y,L))});return R.push(d),He(R)}).then(()=>{R=[];for(const g of h)if(g.beforeEnter)if(Ke(g.beforeEnter))for(const v of g.beforeEnter)R.push(Rt(v,y,L));else R.push(Rt(g.beforeEnter,y,L));return R.push(d),He(R)}).then(()=>(y.matched.forEach(g=>g.enterCallbacks={}),R=Hr(h,"beforeRouteEnter",y,L,V),R.push(d),He(R))).then(()=>{R=[];for(const g of l.list())R.push(Rt(g,y,L));return R.push(d),He(R)}).catch(g=>ht(g,fe.NAVIGATION_CANCELLED)?g:Promise.reject(g))}function ae(y,L,R){o.list().forEach(M=>V(()=>M(y,L,R)))}function O(y,L,R,M,G){const h=P(y,L);if(h)return h;const d=L===At,g=Jt?history.state:{};R&&(M||d?s.replace(y.fullPath,Y({scroll:d&&g&&g.scroll},G)):s.push(y.fullPath,G)),a.value=y,Je(y,L,R,d),kt()}let Z;function ye(){Z||(Z=s.listen((y,L,R)=>{if(!Pt.listening)return;const M=N(y),G=q(M,Pt.currentRoute.value);if(G){U(Y(G,{replace:!0,force:!0}),M).catch(_n);return}u=M;const h=a.value;Jt&&nf(Ii(h.fullPath,R.delta),Sr()),K(M,h).catch(d=>ht(d,fe.NAVIGATION_ABORTED|fe.NAVIGATION_CANCELLED)?d:ht(d,fe.NAVIGATION_GUARD_REDIRECT)?(U(Y(E(d.to),{force:!0}),M).then(g=>{ht(g,fe.NAVIGATION_ABORTED|fe.NAVIGATION_DUPLICATED)&&!R.delta&&R.type===ns.pop&&s.go(-1,!1)}).catch(_n),Promise.reject()):(R.delta&&s.go(-R.delta,!1),Q(d,M,h))).then(d=>{d=d||O(M,h,!1),d&&(R.delta&&!ht(d,fe.NAVIGATION_CANCELLED)?s.go(-R.delta,!1):R.type===ns.pop&&ht(d,fe.NAVIGATION_ABORTED|fe.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),ae(M,h,d)}).catch(_n)}))}let De=cn(),de=cn(),re;function Q(y,L,R){kt(y);const M=de.list();return M.length?M.forEach(G=>G(y,L,R)):console.error(y),Promise.reject(y)}function ct(){return re&&a.value!==At?Promise.resolve():new Promise((y,L)=>{De.add([y,L])})}function kt(y){return re||(re=!y,ye(),De.list().forEach(([L,R])=>y?R(y):L()),De.reset()),y}function Je(y,L,R,M){const{scrollBehavior:G}=e;if(!Jt||!G)return Promise.resolve();const h=!R&&rf(Ii(y.fullPath,0))||(M||!R)&&history.state&&history.state.scroll||null;return wo().then(()=>G(y,L,h)).then(d=>d&&tf(d)).catch(d=>Q(d,y,L))}const Ne=y=>s.go(y);let Gt;const qt=new Set,Pt={currentRoute:a,listening:!0,addRoute:m,removeRoute:x,clearRoutes:t.clearRoutes,hasRoute:$,getRoutes:w,resolve:N,options:e,push:T,replace:z,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:i.add,beforeResolve:l.add,afterEach:o.add,onError:de.add,isReady:ct,install(y){y.component("RouterLink",Lf),y.component("RouterView",$f),y.config.globalProperties.$router=Pt,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>it(a)}),Jt&&!Gt&&a.value===At&&(Gt=!0,T(s.location).catch(M=>{}));const L={};for(const M in At)Object.defineProperty(L,M,{get:()=>a.value[M],enumerable:!0});y.provide(Ts,Pt),y.provide(Is,yo(L)),y.provide(ss,a);const R=y.unmount;qt.add(y),y.unmount=function(){qt.delete(y),qt.size<1&&(u=At,Z&&Z(),Z=null,a.value=At,Gt=!1,re=!1),R()}}};function He(y){return y.reduce((L,R)=>L.then(()=>V(R)),Promise.resolve())}return Pt}function Qh(e){return lt(Is)}const jf=`---\r
title: Git 清单速查\r
date: 2026-08-18\r
tags: [Git]\r
category: 工具\r
excerpt: Git 常用命令速查：日常开发三连、分支、撤销、忽略文件等。\r
---\r
\r
### 🚀 日常开发三连（最常用）\r
\r
| 命令                   | 作用           | 一句话说明         |\r
| :--------------------- | :------------- | :----------------- |\r
| \`git add .\`            | 暂存所有改动   | 把修改放进“购物车” |\r
| \`git commit -m "信息"\` | 提交暂存内容   | 打包并写备注       |\r
| \`git push\`             | 上传到远程仓库 | 把包裹发走         |\r
\r
------\r
\r
### 🧭 辅助与查看命令\r
\r
| 命令                | 作用                       | 使用场景                     |\r
| :------------------ | :------------------------- | :--------------------------- |\r
| \`git status\`        | 查看当前状态               | 提交前检查，确认哪些文件改了 |\r
| \`git pull\`          | 拉取并合并远程更新         | 每天开始工作前执行           |\r
| \`git log\`           | 查看提交历史               | 想看之前的改动记录           |\r
| \`git log --oneline\` | 简洁版历史（一行一个提交） | 快速浏览历史                 |\r
| \`git diff\`          | 查看具体改动内容           | 确认自己改了哪些代码         |\r
| \`git branch\`        | 查看所有分支               | 确认当前在哪个分支           |\r
| \`git branch -a\`     | 查看所有分支（含远程）     | 想看远程有哪些分支           |\r
\r
------\r
\r
### 🛠️ 分支相关（入门级）\r
\r
| 命令                       | 作用                     | 使用场景                 |\r
| :------------------------- | :----------------------- | :----------------------- |\r
| \`git checkout -b 新分支名\` | 创建并切换到新分支       | 开始开发新功能           |\r
| \`git checkout 分支名\`      | 切换到已有分支           | 在不同分支间切换         |\r
| \`git merge 分支名\`         | 将指定分支合并到当前分支 | 功能开发完，合并回主分支 |\r
| \`git branch -d 分支名\`     | 删除本地分支             | 分支已完成使命，清理用   |\r
\r
------\r
\r
### ⏪ 急救与撤销命令\r
\r
| 命令                             | 作用                       | 使用场景              |\r
| :------------------------------- | :------------------------- | :-------------------- |\r
| \`git reset HEAD 文件名\`          | 从暂存区撤出（取消 add）   | add 了不该 add 的文件 |\r
| \`git restore 文件名\`             | 丢弃工作区修改（恢复文件） | 改乱了，想直接放弃    |\r
| \`git commit --amend -m "新信息"\` | 修改最近一次提交的备注     | commit 信息写错了     |\r
| \`git reset --soft HEAD~1\`        | 撤销最近一次提交，保留改动 | commit 后想重新打包   |\r
\r
------\r
\r
### 🚫 忽略文件（需提前配置）\r
\r
| 命令/文件                | 作用                                                         |\r
| :----------------------- | :----------------------------------------------------------- |\r
| \`.gitignore\` 文件        | 在里面列出不需要 Git 管理的文件/文件夹（如 \`node_modules/\`、\`.env\`） |\r
| \`git rm --cached 文件名\` | 停止追踪某个文件（但保留本地文件）                           |\r
\r
------\r
\r
### 📋 完整速查表（一图流）\r
\r
| 类别         | 命令                           | 作用                                       |\r
| :----------- | :----------------------------- | :----------------------------------------- |\r
| **基本操作** | \`git init\`                     | 初始化新仓库（一般用不到，项目已经建好了） |\r
|              | \`git clone <地址>\`             | 首次下载项目到本地                         |\r
| **日常同步** | \`git pull\`                     | 拉取远程更新                               |\r
|              | \`git push\`                     | 推送本地提交到远程                         |\r
| **暂存提交** | \`git add .\` / \`git add 文件名\` | 添加文件到暂存区                           |\r
|              | \`git commit -m "..."\`          | 提交暂存区内容                             |\r
| **查看信息** | \`git status\`                   | 查看状态                                   |\r
|              | \`git log\`                      | 查看历史                                   |\r
|              | \`git diff\`                     | 查看改动                                   |\r
| **分支操作** | \`git branch\`                   | 查看本地分支                               |\r
|              | \`git checkout -b <分支>\`       | 新建并切换分支                             |\r
|              | \`git merge <分支>\`             | 合并分支                                   |\r
| **撤销操作** | \`git reset HEAD <文件>\`        | 从暂存区移除                               |\r
|              | \`git restore <文件>\`           | 丢弃工作区修改                             |\r
|              | \`git commit --amend\`           | 修改上一次提交                             |`,Ff=`---\r
title: 电吉他练习笔记\r
date: 2026-08-18\r
tags: [音乐, 吉他]\r
category: 音乐\r
excerpt: 电吉他练习记录：推弦、轮拨、扫拨、护弦、音阶与节奏基本功等。\r
---\r
\r
电吉他：\r
\r
芬达5个档位（从上到下）：1：饱满圆润大颗（fat）\r
\r
2：低高频都有，中频少了，听感上清澈透亮，声音小，甜\r
\r
3：声音不厚，很集中很硬\r
\r
4：和第二档像，有中空的感觉，没那么圆润，清澈，类似DI声音\r
\r
5：\r
\r
单独的档位功率会比较大135 24因为并联降低电阻提高功率\r
\r
\r
\r
名词：立柱，弦码，（弦的）张力\r
\r
\r
\r
灰色轨迹 A\r
\r
1\r
\r
\r
\r
亡灵序曲 bG\r
\r
1--7\r
\r
6 4 1 3    6 4 1 5\r
\r
2 b7 4 1  b7  1\r
\r
\r
\r
小技巧：\r
\r
人工泛音\r
\r
 \r
\r
\r
\r
----------保姆级技术教学----------\r
\r
训练？\r
\r
在实际中，手法无对错之分，只要能达到目的\r
\r
怎样训练（手段）\r
\r
专业\r
\r
分清目的和手段\r
\r
\r
\r
反天性\r
\r
\r
\r
练琴力度 练琴速度\r
\r
练用不分家\r
\r
细节会不同\r
\r
练习小力度 实际大力度\r
\r
慢速：音的准确和质量\r
\r
快速：超量训练（比如单音200bpm）\r
\r
练习没有对错之分，有对立有统一\r
\r
取其上着得其中，取其中者得其下\r
\r
\r
\r
技术动作\r
\r
指尖按弦：接触面积小了，压强变大，小力度可把弦摁响->谈清楚\r
\r
勾弦：不要倒下（蹭响）\r
\r
小指抬起不要超过0.5cm 练的时候0.5 实际可能1.0 1.5\r
\r
小拇指靠不靠？练习不靠，那实际靠的话会更准确\r
\r
\r
\r
速弹心理建设\r
\r
没有武林秘籍\r
\r
人性爱骗自己（一天5个小时 实际很少 埋怨其他，自己不努力，练习量，先到量再埋怨）\r
\r
区分方法和训练量 （例子：做小吃）\r
\r
好老师：引导作用\r
\r
姿势都是动态的集合\r
\r
对一些小的姿势问题，有疑惑，可以去网上看大师的一些演奏\r
\r
速弹要有耐心 每天练3小时 练3年 才能基本成为速弹手\r
\r
长期坚持，需要时间的积累才能找到感觉\r
\r
扒带+弹 需要挺长时间\r
\r
回顾自己 比如1个月前的自己，发现有变化，老师感觉更大\r
\r
\r
\r
超量训练\r
\r
弹不准就放慢，放到直到谈准（刻意练习，纠正错误）\r
\r
量去刺激\r
\r
\r
\r
轮拨动作：\r
\r
6弦糊：加闷音 or 用23档\r
\r
3要求 平行 不远 角度\r
\r
大拇指碰低音弦，支撑，护弦\r
\r
轻松上200bpm\r
\r
\r
\r
轮拨超量\r
\r
练习关键速度\r
\r
刺激肌肉\r
\r
下降多一些\r
\r
一组：15-20分钟\r
\r
\r
\r
轮拨作用：\r
\r
1左手机能\r
\r
2力度，控制，渐变\r
\r
3强迫把动作幅度变小（弹音阶）\r
\r
\r
\r
灵活训练计划：\r
\r
没有固定时间，多感受自己身体状态\r
\r
看个人优缺点，短板多练一练\r
\r
\r
\r
爬格子清晰度：\r
\r
开失真会糊弄过去，用清音尽量弹清晰些\r
\r
\r
\r
高效爬格子：\r
\r
初期建议用3个指型爬格子\r
\r
可以结合音阶弹（134 124 124跨5）\r
\r
eg. 6717 7176  1767 7671\r
\r
      6171 1716 7161 1617\r
\r
\r
\r
爬格子只练一种，上面方法符合实际\r
\r
开节拍器弹\r
\r
爆发力训练（连续弹可能会效率变低） 集中到加速上，更快弹，尽量弹最快速度，可以不用节拍器，类似超量 紧张和轻松间切换\r
\r
爆发力很重要\r
\r
速度 力量 清晰度\r
\r
爆发力可以增加组数 逐渐加->连起来了\r
\r
\r
\r
高效爬格子在音阶上的作用\r
\r
134 124 124跨5 ->可以组成音阶\r
\r
每个弦都弹到\r
\r
组合练习\r
\r
\r
\r
推弦步骤：\r
\r
把音推准\r
\r
\r
\r
推弦细节：\r
\r
左手：\r
\r
有空间旋转，掌下有空间\r
\r
发力:大臂带小臂\r
\r
门把手\r
\r
拇指做支点 食指 两个支点\r
\r
不要抬肘 保持放松\r
\r
食指可以折指 一开始不要求食指横按\r
\r
右手：\r
\r
比较直，稍微起来一点 握琴姿势\r
\r
护弦，不建议用鱼侧，用拇指内侧 其他手指可以搭在需要护弦的弦上\r
\r
音要推准\r
\r
\r
\r
练习：\r
\r
先唱音再推，每个音都可以试一下，123弦\r
\r
音先调准\r
\r
上下拉推弦 下拉可以用手指力量 456弦\r
\r
6弦对音敏感 1弦对音不敏感，调弦声音变化小 粗细问题\r
\r
音回问题，不需要时用拨片质音（都练一下）\r
\r
练音阶都全半音都推一遍\r
\r
\r
\r
节拍器推弦：\r
\r
慢速 直接\r
\r
不要推弦释放\r
\r
都要练\r
\r
\r
\r
预推弦：\r
\r
\r
\r
\r
\r
手腕没有多余动作，只有旋转\r
\r
3个技术要领\r
\r
1 3个支点 手指嗯弦位置 大拇指 食指根部\r
\r
2 手指任何推弦动作都没有，整个在移动 手腕发力 形状不改变，位置动了 怎么旋转手腕找感觉？ -> 不摁，单独做动作\r
\r
食指根部一定要顶住 手腕顶起来一些 留空间可以推\r
\r
\r
\r
同音双音推弦\r
\r
分开练习\r
\r
同时推\r
\r
可以借助手指力量\r
\r
推准，音不会刺耳\r
\r
双摇吉他音色会偏\r
\r
\r
\r
推弦训练：\r
\r
 \r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
---右手---\r
\r
古典手型和摇滚手型\r
\r
古典手型\r
\r
摇滚手型：食指根部做支撑\r
\r
动态的集合，不断变化的\r
\r
\r
\r
----------高效练习方法论----------\r
\r
\r
\r
\r
\r
\r
\r
----------极简基本功音阶----------\r
\r
四度摸进\r
\r
摸进目的主要是唱： 找到音程之间的感觉 纯四度增四度感觉 纸板上的关系\r
\r
没琴的时候也可以想一想，音关系，唱出来\r
\r
缩指\r
\r
\r
\r
----------连奏----------\r
\r
\r
\r
ligato\r
\r
\r
\r
作用：1. 提速\r
\r
2\\. 练习模进，练习音阶，即兴\r
\r
练习之前：\r
\r
练习1：把7个音阶弹熟（每弦3音，好演奏）\r
\r
交替拨弦练好\r
\r
练习所有乐句，把原版乐句放在各个指型，用在即兴\r
\r
转调\r
\r
练习2: 三连音不要断，连起来\r
\r
右手混合拨弦\r
\r
换弦是否流畅\r
\r
不同练习节奏感产生影响\r
\r
节拍器不快不慢 开两倍\r
\r
\r
\r
2346连音转换\r
\r
对平均分节奏控制力\r
\r
\r
\r
连奏4-5\r
\r
提速------追求速度\r
\r
稳------，熟悉纸板，提高控制力\r
\r
速度随着熟悉程度提高，若只想提高速度，会忽略质量，得不偿失\r
\r
\r
\r
节奏移位\r
\r
非重拍换弦\r
\r
练习目的：节奏感（一直强调的）\r
\r
合在44拍律动\r
\r
各个指型，各个调\r
\r
右手：同样\r
\r
\r
\r
滑弦：连接不同把位\r
\r
\r
\r
速度上不去->高效练习方法论：痛点练习法\r
\r
\r
\r
为练习做变化的能力\r
\r
\r
\r
节奏移位\r
\r
## ----------护弦----------\r
\r
#### 拨弦时候护弦\r
\r
食指倒下\r
\r
指尖碰上面\r
\r
\r
\r
右手：用拇指侧面\r
\r
只用大鱼际是错的（不推荐）\r
\r
有利于经济拨弦\r
\r
#### 推弦时候护弦\r
\r
用大拇指侧面\r
\r
手指靠弦\r
\r
\r
\r
几根手指慢慢护也可以（初学）\r
\r
\r
\r
很多细节，结合曲子，在老师指导下，才能真正理解\r
\r
\r
\r
护弦和音色\r
\r
动态不错，音箱，效果器\r
\r
不要买塑料音箱\r
\r
\r
\r
不护弦---弹的够快，噪音跟不上你\r
\r
#### 连奏和扫拨时候护弦\r
\r
不要为了追求速度而忽略了细节\r
\r
和上节课讲的很像\r
\r
###### 左手\r
\r
食指有点滚指，不能嗯太死\r
\r
食指放松\r
\r
按弦时机\r
\r
右手\r
\r
连奏时候，和之前左手护弦一样，有顿感，但要连贯\r
\r
别处泛音\r
\r
\r
\r
扫拨\r
\r
左手\r
\r
左手摁弦时机\r
\r
一样\r
\r
右手\r
\r
一样\r
\r
但要扫拨的连续感\r
\r
开失真练（除了野蜂飞舞，失真比较常见）\r
\r
干净程度：和整体质量有关系\r
\r
电吉他有噪音很正常\r
\r
\r
\r
## ----------扫拨----------\r
\r
琶音，电线，钩机弦\r
\r
\r
\r
扫拨技巧演奏琶音内容\r
\r
\r
\r
练习开节拍器，左右手控制力\r
\r
\r
\r
音阶，滚指\r
\r
\r
\r
手指柔韧性要好，扫拨琶音跨度大，不要手腕动，扩张韧带\r
\r
\r
\r
对护弦要求高\r
\r
\r
\r
要求：1.平行琴面，靠近地面方向\r
\r
\r
\r
2.拨片顺着\r
\r
\r
\r
3.质音\r
\r
\r
\r
4，开节拍器，稳节奏\r
\r
\r
\r
延迟 混响 失真\r
\r
\r
\r
sus\r
\r
下上上 律动感，有味道\r
\r
全上全下 速度快\r
\r
变换节奏\r
\r
小动机用在爵士演奏中\r
\r
\r
\r
摇滚卡农\r
\r
速度快，智能大量练习达到\r
\r
很多指型链接，大量换把\r
\r
旋律与扫拨结合\r
\r
\r
\r
大七和弦琶音\r
\r
\r
\r
## ----------金属节奏----------\r
\r
16音符 6连音 快速桥段\r
\r
现代金属乐很常见这些节奏，否则无从下手\r
\r
极简基本功上册练过 没用闷音 \r
\r
小幅度拨弦对节奏感要求高\r
\r
手幅度越小越难保持节奏感\r
\r
没有捷径\r
\r
开节拍器，慢速，一点一点来，第一条是16分音符  \r
\r
在速度不是很快的情况下\r
\r
脚手嘴脑节拍器合在一起，这种方式才能增强大家节奏感\r
\r
不要只是看谱子，配合身体，不然复杂节奏型无法掌握\r
\r
嘴唱一下，手打一下，脑， 节拍器开着，和节奏基本功一样\r
\r
脚踩一下，手弹四下，嘴数一下 ，嘴和脚永远扮演节拍器角色，除非32分音符 \r
\r
右手姿势：不是绝对的，学习小林克己or红鱼乔一精讲，不同的地方适用不同姿势\r
\r
基础练习一定要做好\r
\r
不同练习方法：空ddd\r
\r
结合左手制 音右手闷音\r
\r
最基础的 1制音的\r
\r
2开放的 注意左手护弦\r
\r
3两者结合\r
\r
\r
\r
左手质音 闷音的（前卫金属）开放的（现代金属乐）\r
\r
\r
\r
\r
\r
## ----------极简基本功节奏----------\r
\r
### 前言：\r
\r
有人天生节奏感不好，但可以通过学习16种节奏单元来获得\r
\r
节奏是锻炼右脑\r
\r
不要纠结于乐理，16分音符，8分，像学数学一样，不要公式化，这是左脑思考，应该身体体会（节奏感）\r
\r
即兴：节奏感不好，会变成弹音阶\r
\r
不要想谱子上面的音符节奏\r
\r
\r
\r
3种形式\r
\r
扫弦，节奏，脱琴\r
\r
\r
\r
4个\r
\r
手 脚 嘴 节拍器、\r
\r
\r
\r
第一课\r
\r
不加节拍器 1 2 3 4\r
\r
练习2\r
\r
一个位置加休止符\r
\r
练习3\r
\r
2个\r
\r
练习4\r
\r
三个\r
\r
练习5\r
\r
综合上述\r
\r
第二种练习方法：打乱顺序，达到所有可能\r
\r
注意：4个部分缺一不可\r
\r
bpm达到200合格\r
\r
\r
\r
加上方向的变化 一下一上\r
\r
遇到空拍，用位置决定空拍\r
\r
右手一直下上\r
\r
和funk吉他演奏方式相同\r
\r
练习6-10和1-5类似\r
\r
拨弦\r
\r
速弹，通过拨片方向控制节奏，习惯一定要养成，这是常用的，科学的，大师的情况后面再做讲解\r
\r
\r
\r
10-15\r
\r
踩一下，弹两下\r
\r
## ----------极简基本功音阶----------\r
\r
归纳了7种指型\r
\r
转调方便 指型规律掌握 找到某些调的某个音\r
\r
9个要求 \r
\r
1.唱出来，难听也要唱\r
\r
2.指尖按弦，钩击弦好，清晰度好\r
\r
3.手指独立运动。手腕手掌不动，其余手指不动，4垮5动一根，可以更稳定的演奏\r
\r
4.减小动作，手指太低，速度动作放慢，govan说：速度是精确性的副产品\r
\r
5.交替拨弦\r
\r
6.节奏，带给你节奏感，让没有节奏感的人有节奏感，让有节奏感的人更准确，让你速度慢下来（弹快了合不上），有人心态浮躁，无效练习\r
\r
7.保留指(大拇指指肚捏住)，放下来，手腕垂下来\r
\r
8.微力度练习,轻弹，轻到拨片再松就要掉的程度来弹，锻炼手指放松，如果轻弹可以弹好，动作就完美，加速起来就没有多余错误的动作，eg.太极拳,卸掉无用力。正常演奏时要有力度变化\r
\r
9.指法,否则谈不快 14品 5品，用124\r
\r
少看六线谱，把谱子记到脑子里\r
\r
放慢再放慢？一开始的时候\r
\r
\r
\r
A指型利于以后勾击弦\r
\r
记不住音？弹过的歌在各个指型里找，后续几种摸进也加强训练\r
\r
练熟练可以在音阶即兴\r
\r
\r
\r
第一种练习方法 ：交替拨弦\r
\r
2：击弦，只用左手，最好的练习，govan讲过，助于产生干净的按弦动作和左右手的同步性，锻炼放松程度\r
\r
3：勾击弦，锻炼流畅勾击弦技巧\r
\r
\r
\r
清音？失真？\r
\r
用干净，方便听出错误\r
\r
红鱼老师：推荐失真，弹错用失真也能听出来，但是多加了左右手护弦，学习滚指做准备\r
\r
每一天只练一种，练两小时，练熟熟的，学习曲子，即兴，都有很大帮助\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
摇滚卡农\r
\r
后半段：\r
\r
新古典喜欢琶音\r
\r
小技巧：失真情况下：音量旋钮控制失真度\r
\r
不用 小提琴演奏法 就把音量一点一点开起来 变成过载\r
\r
进入下一段瞬间改变大\r
\r
\r
\r
同名大小调\r
\r
d小小调指型找到，和之前一样\r
\r
\r
\r
琶音有颗粒感\r
\r
high gain bossGT8GT6大失真，有颗粒感，但如今比较塑料\r
\r
\r
\r
\r
\r
111\r
\r
打卡新年愿望\r
\r
练琴方面：继续提升机能，争取驾驭如今大部分流行曲，无论是简单的还是难的都能弹稳弹好\r
\r
掌握一定的跑场水平，能够在台上无论是即兴编曲还是演奏都能摸到些门路\r
\r
\r
\r
生活方面：现在大三了也在为将来走进职场而学习，目标进入互联网公司，打算先做后端，练琴的时间相对来说不是很多了，但尽量每天留1小时左右时间练习，希望自己能找到一个平衡点，当然生活也需要放松和娱乐。\r
\r
\r
\r
开心幸福\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
`,Hf=`---
title: 欢迎来到我的博客
date: 2026-08-18
tags: [随笔]
category: 随笔
excerpt: 这是我的第一篇博客，记录搭建个人博客的过程与想法。
---

这是我的第一篇博客文章。

## 为什么写博客

写博客是为了记录学习与生活，希望这里能沉淀一些有价值的内容。

## 技术栈

- 前端：Vue 3 + Vite
- 内容：Markdown
- 未来：Java（Spring Boot）后端

> 保持输出，保持热爱。

欢迎常来逛逛！
`,Vf=`---
title: Java 学习笔记：常用集合
date: 2026-08-15
tags: [Java]
category: Java
excerpt: 整理 List、Set、Map 的常用实现与区别。
---

记录一下 Java 集合框架的常用实现。

## List

有序、可重复。

| 实现 | 底层 | 特点 |
| --- | --- | --- |
| ArrayList | 数组 | 查询快，增删慢 |
| LinkedList | 链表 | 增删快，查询慢 |

## Set

无序、不可重复。

- HashSet：基于 HashMap，查询 O(1)
- TreeSet：基于红黑树，有序

## Map

键值对存储。

- HashMap：线程不安全
- ConcurrentHashMap：线程安全

\`\`\`java
Map<String, Integer> map = new HashMap<>();
map.put("a", 1);
\`\`\`

后续继续补充更多内容。
`,zf=`---\r
title: Java Stream 流用法清单\r
date: 2026-08-18\r
tags: [Java]\r
category: Java\r
excerpt: Stream 常用 API 速查：创建方式、中间操作、终止操作、并行流与常用 Collector。\r
---\r
\r
## 一、什么是 Stream 流？\r
\r
**Stream 是 Java 8 引入的一套函数式编程风格的 API**，用于对集合（Collection）数据进行**声明式**处理。\r
\r
### 核心特点：\r
\r
| 特点           | 说明                                                        |\r
| :------------- | :---------------------------------------------------------- |\r
| **不存储数据** | 不是数据结构，只是数据源的视图                              |\r
| **函数式编程** | 对流的操作产生新结果，不修改数据源                          |\r
| **惰性执行**   | 中间操作（如 \`filter\`）不会立即执行，只有遇到终止操作才执行 |\r
| **链式调用**   | 支持方法链，代码简洁优雅                                    |\r
| **可并行**     | 通过 \`parallelStream()\` 轻松实现并行处理                    |\r
\r
------\r
\r
## 二、Stream 的三种创建方式\r
\r
\`\`\`java\r
// 1. 从集合创建\r
List<String> list = Arrays.asList("a", "b", "c");\r
Stream<String> stream1 = list.stream();\r
\r
// 2. 从数组创建\r
String[] arr = {"a", "b", "c"};\r
Stream<String> stream2 = Arrays.stream(arr);\r
// 或 Stream.of(arr)\r
\r
// 3. 直接创建\r
Stream<String> stream3 = Stream.of("a", "b", "c");\r
Stream<Integer> stream4 = Stream.iterate(0, n -> n + 1).limit(10); // 无限流\r
Stream<Double> stream5 = Stream.generate(Math::random).limit(5);\r
\`\`\`\r
\r
\r
\r
------\r
\r
## 三、Stream 操作分类\r
\r
Stream 的操作分为两类：\r
\r
| 类型                        | 说明                    | 返回值                           |\r
| :-------------------------- | :---------------------- | :------------------------------- |\r
| **中间操作 (Intermediate)** | 返回新 Stream，惰性执行 | \`Stream\`                         |\r
| **终止操作 (Terminal)**     | 触发实际执行，产生结果  | 非 Stream 类型（集合、值、void） |\r
\r
------\r
\r
## 四、中间操作（筛选/映射/去重/排序等）\r
\r
### 1. 筛选与切片\r
\r
| 方法                                | 说明                                |\r
| :---------------------------------- | :---------------------------------- |\r
| \`filter(Predicate<T> predicate)\`    | 过滤出符合条件的元素                |\r
| \`distinct()\`                        | 去重（根据 \`equals\` 和 \`hashCode\`） |\r
| \`limit(long maxSize)\`               | 截取前 N 个元素                     |\r
| \`skip(long n)\`                      | 跳过前 N 个元素                     |\r
| \`takeWhile(Predicate<T>)\` (Java 9+) | 从开始取，直到条件不成立（短循环）  |\r
| \`dropWhile(Predicate<T>)\` (Java 9+) | 从开始丢弃，直到条件不成立          |\r
\r
\`\`\`java\r
List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5, 5, 6);\r
nums.stream()\r
    .filter(n -> n > 3)      // [4,5,5,6]\r
    .distinct()              // [4,5,6]\r
    .limit(2)                // [4,5]\r
    .forEach(System.out::println);\r
\`\`\`\r
\r
\r
\r
### 2. 映射\r
\r
| 方法                                           | 说明                             |\r
| :--------------------------------------------- | :------------------------------- |\r
| \`map(Function<T, R> mapper)\`                   | 一对一转换（元素类型可改变）     |\r
| \`flatMap(Function<T, Stream<R>> mapper)\`       | 一对多转换，将多个流合并成一个流 |\r
| \`mapToInt()\` / \`mapToLong()\` / \`mapToDouble()\` | 转为基本类型流（避免装箱开销）   |\r
| \`flatMapToInt()\` 等                            | 类似 flatMap，返回基本类型流     |\r
| \`peek(Consumer<T> action)\`                     | 查看每个元素（常用于调试）       |\r
\r
\`\`\`java\r
// map 示例：字符串转长度\r
List<String> words = Arrays.asList("Hello", "World");\r
words.stream()\r
     .map(String::length)   // [5, 5]\r
     .collect(Collectors.toList());\r
\r
// flatMap 示例：将多个数组合并\r
List<List<Integer>> lists = Arrays.asList(\r
    Arrays.asList(1, 2),\r
    Arrays.asList(3, 4)\r
);\r
lists.stream()\r
     .flatMap(List::stream)  // [1,2,3,4]\r
     .collect(Collectors.toList());\r
\r
// peek 调试\r
nums.stream()\r
    .filter(n -> n > 3)\r
    .peek(System.out::println)  // 打印中间结果\r
    .collect(Collectors.toList());\r
\`\`\`\r
\r
\r
\r
### 3. 排序\r
\r
| 方法                               | 说明                              |\r
| :--------------------------------- | :-------------------------------- |\r
| \`sorted()\`                         | 自然排序（元素需实现 Comparable） |\r
| \`sorted(Comparator<T> comparator)\` | 自定义排序                        |\r
\r
\`\`\`java\r
list.stream()\r
    .sorted()                          // 自然升序\r
    .sorted(Comparator.reverseOrder()) // 降序\r
    .sorted(Comparator.comparing(String::length)) // 按长度排序\r
    .collect(Collectors.toList());\r
\`\`\`\r
\r
\r
\r
------\r
\r
## 五、终止操作（触发执行）\r
\r
### 1. 匹配与查找（返回值：boolean / Optional）\r
\r
| 方法                        | 说明                               |\r
| :-------------------------- | :--------------------------------- |\r
| \`allMatch(Predicate<T> p)\`  | 所有元素都匹配                     |\r
| \`anyMatch(Predicate<T> p)\`  | 任意一个元素匹配                   |\r
| \`noneMatch(Predicate<T> p)\` | 没有元素匹配                       |\r
| \`findFirst()\`               | 返回第一个元素（有序流）           |\r
| \`findAny()\`                 | 返回任意一个元素（并行流效率更高） |\r
| \`max(Comparator<T>)\`        | 返回最大值                         |\r
| \`min(Comparator<T>)\`        | 返回最小值                         |\r
\r
\`\`\`java\r
boolean allEven = nums.stream().allMatch(n -> n % 2 == 0);\r
Optional<Integer> first = nums.stream().filter(n -> n > 3).findFirst();\r
Optional<Integer> max = nums.stream().max(Integer::compareTo);\r
\`\`\`\r
\r
\r
\r
### 2. 归约（聚合）\r
\r
| 方法                                                | 说明                                     |\r
| :-------------------------------------------------- | :--------------------------------------- |\r
| \`reduce(T identity, BinaryOperator<T> accumulator)\` | 初始值 + 累加函数                        |\r
| \`reduce(BinaryOperator<T> accumulator)\`             | 返回 Optional                            |\r
| \`count()\`                                           | 统计元素数量                             |\r
| \`sum()\` / \`average()\` 等                            | 基本类型流特有（IntStream/DoubleStream） |\r
\r
\`\`\`java\r
// 求和\r
int sum = nums.stream().reduce(0, Integer::sum);   // 15\r
// 求乘积\r
int product = nums.stream().reduce(1, (a, b) -> a * b);\r
\r
// 拼接字符串\r
String concat = list.stream().reduce("", (a, b) -> a + b);\r
\`\`\`\r
\r
\r
\r
### 3. 收集（转为集合）\r
\r
| 方法                                    | 说明                |\r
| :-------------------------------------- | :------------------ |\r
| \`collect(Collector<T, A, R> collector)\` | 使用 Collector 收集 |\r
\r
**常用 Collectors 工具方法：**\r
\r
| 方法                                         | 说明                                 |\r
| :------------------------------------------- | :----------------------------------- |\r
| \`Collectors.toList()\`                        | 转为 List                            |\r
| \`Collectors.toSet()\`                         | 转为 Set                             |\r
| \`Collectors.toMap(keyMapper, valueMapper)\`   | 转为 Map（需处理 key 冲突）          |\r
| \`Collectors.toCollection(Supplier)\`          | 转为指定集合（如 TreeSet）           |\r
| \`Collectors.joining()\`                       | 拼接字符串                           |\r
| \`Collectors.groupingBy(Function)\`            | 分组                                 |\r
| \`Collectors.partitioningBy(Predicate)\`       | 分区（按 true/false 分组）           |\r
| \`Collectors.summingInt()\` / \`averagingInt()\` | 统计                                 |\r
| \`Collectors.summarizingInt()\`                | 一次性获取 count/sum/min/max/average |\r
\r
\`\`\`java\r
// 收集为 List\r
List<String> result = list.stream()\r
    .filter(s -> s.length() > 3)\r
    .collect(Collectors.toList());\r
\r
// 收集为 Map（key=字符串，value=长度）\r
Map<String, Integer> map = list.stream()\r
    .collect(Collectors.toMap(\r
        Function.identity(),  // key 自身\r
        String::length,       // value 为长度\r
        (old, new) -> old     // 冲突处理保留旧值\r
    ));\r
\r
// 分组：按字符串长度分组\r
Map<Integer, List<String>> group = list.stream()\r
    .collect(Collectors.groupingBy(String::length));\r
\r
// 分区：是否大于3\r
Map<Boolean, List<String>> partition = list.stream()\r
    .collect(Collectors.partitioningBy(s -> s.length() > 3));\r
\r
// 拼接：用逗号分隔\r
String joined = list.stream().collect(Collectors.joining(", "));\r
\r
// 统计\r
IntSummaryStatistics stats = list.stream()\r
    .collect(Collectors.summarizingInt(String::length));\r
// stats.getCount(), getSum(), getMin(), getMax(), getAverage()\r
\`\`\`\r
\r
\r
\r
### 4. 遍历\r
\r
| 方法                                 | 说明                           |\r
| :----------------------------------- | :----------------------------- |\r
| \`forEach(Consumer<T> action)\`        | 遍历每个元素（不保证顺序）     |\r
| \`forEachOrdered(Consumer<T> action)\` | 按顺序遍历（并行流中保证顺序） |\r
\r
------\r
\r
## 六、基本类型专用流（避免装箱开销）\r
\r
| 流类型         | 创建方式                                    | 特有方法                                         |\r
| :------------- | :------------------------------------------ | :----------------------------------------------- |\r
| \`IntStream\`    | \`list.stream().mapToInt(Integer::intValue)\` | \`sum()\`、\`average()\`、\`range()\`、\`rangeClosed()\` |\r
| \`LongStream\`   | \`mapToLong()\`                               | 同上                                             |\r
| \`DoubleStream\` | \`mapToDouble()\`                             | 同上                                             |\r
\r
\`\`\`java\r
// 创建范围\r
IntStream.range(1, 10)       // 1-9\r
IntStream.rangeClosed(1, 10) // 1-10\r
\r
int sum = IntStream.rangeClosed(1, 100).sum(); // 5050\r
\`\`\`\r
\r
\r
\r
------\r
\r
## 七、并行流\r
\r
\`\`\`java\r
// 方式1：从集合创建\r
list.parallelStream()\r
\r
// 方式2：将串行流转并行\r
list.stream().parallel()\r
\`\`\`\r
\r
\r
\r
\`\`\`java\r
// 并行求和（大集合性能提升明显）\r
long count = list.parallelStream()\r
    .filter(s -> s.length() > 3)\r
    .count();\r
\`\`\`\r
\r
\r
\r
**注意**：并行流使用 \`ForkJoinPool.commonPool()\`，不适合 I/O 密集型任务，适合 CPU 密集型且数据量大的场景。\r
\r
------\r
\r
## 八、完整使用示例（综合）\r
\r
\`\`\`java\r
// 场景：从学生列表中找出年龄大于18的，按成绩降序取前3名的姓名拼接\r
List<Student> students = getStudents();\r
\r
String result = students.stream()\r
    .filter(s -> s.getAge() > 18)\r
    .sorted(Comparator.comparing(Student::getScore).reversed())\r
    .limit(3)\r
    .map(Student::getName)\r
    .collect(Collectors.joining(", "));\r
\r
System.out.println(result); // "张三, 李四, 王五"\r
\`\`\`\r
\r
\r
\r
------\r
\r
## 九、速查总结表\r
\r
| 分类     | 方法                                                         |\r
| :------- | :----------------------------------------------------------- |\r
| **创建** | \`stream()\`、\`parallelStream()\`、\`Stream.of()\`、\`Arrays.stream()\` |\r
| **筛选** | \`filter()\`、\`distinct()\`、\`limit()\`、\`skip()\`                |\r
| **映射** | \`map()\`、\`flatMap()\`、\`mapToInt()\`、\`peek()\`                 |\r
| **排序** | \`sorted()\`、\`sorted(Comparator)\`                             |\r
| **匹配** | \`allMatch()\`、\`anyMatch()\`、\`noneMatch()\`                    |\r
| **查找** | \`findFirst()\`、\`findAny()\`、\`max()\`、\`min()\`                 |\r
| **归约** | \`reduce()\`、\`count()\`                                        |\r
| **收集** | \`collect(Collectors.toList())\`、\`toMap()\`、\`groupingBy()\`、\`partitioningBy()\`、\`joining()\` |\r
| **遍历** | \`forEach()\`                                                  |\r
| **并行** | \`parallelStream()\`                                           |\r
\r
------\r
\r
## 十、常用 Collector 速查\r
\r
\`\`\`java\r
Collectors.toList()                 // → List\r
Collectors.toSet()                  // → Set\r
Collectors.toMap(k, v)              // → Map\r
Collectors.toCollection(TreeSet::new) // → TreeSet\r
Collectors.joining(", ")            // → 拼接字符串\r
Collectors.groupingBy(key)          // → 分组 Map<K, List<T>>\r
Collectors.partitioningBy(pred)     // → 分区 Map<Boolean, List<T>>\r
Collectors.summingInt(ToIntFunction) // → 求和\r
Collectors.averagingInt(...)        // → 平均值\r
Collectors.summarizingInt(...)      // → 统计对象\r
\`\`\`\r
\r
\r
\r
`,Uf='---\r\ntitle: Java String 用法清单\r\ndate: 2026-08-18\r\ntags: [Java]\r\ncategory: Java\r\nexcerpt: String 常用方法速查：创建、比较、查找、截取、替换、拼接，以及面试常考点。\r\n---\r\n\r\n## 一、创建字符串\r\n\r\n```java\r\n// 字面量（推荐，存于字符串常量池）\r\nString s1 = "Hello";\r\n\r\n// new 对象（存于堆内存）\r\nString s2 = new String("Hello");\r\n\r\n// 字符数组转字符串\r\nchar[] chars = {\'H\', \'e\', \'l\', \'l\', \'o\'};\r\nString s3 = new String(chars);\r\n\r\n// 字节数组转字符串（可指定字符集）\r\nbyte[] bytes = {72, 101, 108, 108, 111};\r\nString s4 = new String(bytes, StandardCharsets.UTF_8);\r\n```\r\n\r\n---\r\n\r\n## 二、判断与比较\r\n\r\n| 方法                          | 说明                           |\r\n| ----------------------------- | ------------------------------ |\r\n| `equals(Object obj)`          | 比较内容是否相等（区分大小写） |\r\n| `equalsIgnoreCase(String)`    | 比较内容是否相等（忽略大小写） |\r\n| `compareTo(String)`           | 字典序比较，返回正/负/0        |\r\n| `compareToIgnoreCase(String)` | 忽略大小写的字典序比较         |\r\n| `contentEquals(CharSequence)` | 与任意字符序列比较内容         |\r\n| `matches(String regex)`       | 正则匹配                       |\r\n\r\n```java\r\n"abc".equals("ABC");       // false\r\n"abc".equalsIgnoreCase("ABC"); // true\r\n"abc".compareTo("abd");    // -1\r\n```\r\n\r\n---\r\n\r\n## 三、查找与判断位置\r\n\r\n| 方法                             | 说明                       |\r\n| -------------------------------- | -------------------------- |\r\n| `indexOf(int ch)`                | 返回某个字符首次出现的位置 |\r\n| `indexOf(String str)`            | 返回子串首次出现的位置     |\r\n| `indexOf(int ch, int fromIndex)` | 从指定位置开始查找         |\r\n| `lastIndexOf(...)`               | 从后往前查找               |\r\n| `contains(CharSequence s)`       | 是否包含子串               |\r\n| `startsWith(String prefix)`      | 是否以某前缀开头           |\r\n| `endsWith(String suffix)`        | 是否以某后缀结尾           |\r\n\r\n```java\r\n"Hello World".indexOf(\'o\');      // 4\r\n"Hello World".lastIndexOf(\'o\');  // 7\r\n"Hello".contains("ell");         // true\r\n```\r\n\r\n---\r\n\r\n## 四、截取与拆分\r\n\r\n| 方法                             | 说明                      |\r\n| -------------------------------- | ------------------------- |\r\n| `substring(int beginIndex)`      | 从指定位置截取到末尾      |\r\n| `substring(int begin, int end)`  | 截取 [begin, end) 区间    |\r\n| `split(String regex)`            | 按正则拆分，返回 String[] |\r\n| `split(String regex, int limit)` | 限制拆分次数              |\r\n\r\n```java\r\n"abcdef".substring(2);      // "cdef"\r\n"abcdef".substring(2, 5);   // "cde"\r\n"a,b,c".split(",");         // ["a","b","c"]\r\n```\r\n\r\n---\r\n\r\n## 五、转换与替换\r\n\r\n| 方法                                                     | 说明                         |\r\n| -------------------------------------------------------- | ---------------------------- |\r\n| `toLowerCase()` / `toUpperCase()`                        | 大小写转换                   |\r\n| `trim()`                                                 | 去除首尾空白字符（≤ U+0020） |\r\n| `strip()`（Java 11+）                                    | 去除首尾 Unicode 空白        |\r\n| `stripLeading()` / `stripTrailing()`                     | 只去除前/后空白              |\r\n| `replace(char old, char new)`                            | 替换所有字符                 |\r\n| `replace(CharSequence target, CharSequence replacement)` | 替换所有子串                 |\r\n| `replaceAll(String regex, String replacement)`           | 正则替换                     |\r\n| `replaceFirst(String regex, String replacement)`         | 替换首个匹配                 |\r\n| `toCharArray()`                                          | 转为 char[]                  |\r\n| `getBytes()` / `getBytes(String charset)`                | 转为 byte[]                  |\r\n\r\n```java\r\n" Hello ".trim();           // "Hello"\r\n"a1b1c".replaceAll("\\\\d", "-"); // "a-b-c"\r\n```\r\n\r\n---\r\n\r\n## 六、拼接与格式化\r\n\r\n| 方法                                                         | 说明                             |\r\n| ------------------------------------------------------------ | -------------------------------- |\r\n| `concat(String str)`                                         | 拼接（等价于 +）                 |\r\n| `join(CharSequence delimiter, CharSequence... elements)`（静态） | 用分隔符拼接多个字符串           |\r\n| `String.format(String format, Object... args)`               | 格式化字符串（类似 C 的 printf） |\r\n| `formatted(Object... args)`（Java 15+）                      | `"Hello %s".formatted("World")`  |\r\n\r\n```java\r\nString.join("-", "a", "b", "c");   // "a-b-c"\r\nString.format("age: %d", 18);      // "age: 18"\r\n```\r\n\r\n---\r\n\r\n## 七、长度与判空\r\n\r\n| 方法                    | 说明                                 |\r\n| ----------------------- | ------------------------------------ |\r\n| `length()`              | 返回字符个数（注意：中文字符为一个） |\r\n| `isEmpty()`             | 是否为 `""`                          |\r\n| `isBlank()`（Java 11+） | 是否为空白（含空格、制表符等）       |\r\n| `charAt(int index)`     | 获取指定位置的字符                   |\r\n\r\n```java\r\n"".isEmpty();    // true\r\n"   ".isBlank(); // true (Java 11+)\r\n```\r\n\r\n---\r\n\r\n## 八、字符串特性相关（面试常考）\r\n\r\n### 1. 不可变性\r\n- `String` 是不可变的，所有修改操作都会返回**新对象**。\r\n- 频繁修改字符串请使用 `StringBuilder` 或 `StringBuffer`。\r\n\r\n### 2. 常量池\r\n- 字面量创建会放到常量池，`new` 创建在堆中。\r\n```java\r\nString a = "abc";\r\nString b = "abc";\r\nString c = new String("abc");\r\nSystem.out.println(a == b);  // true\r\nSystem.out.println(a == c);  // false\r\n```\r\n\r\n### 3. intern()\r\n- 手动将字符串对象放入常量池（如果池中已有则返回池中引用）。\r\n```java\r\nString s1 = new String("abc");\r\nString s2 = s1.intern();\r\nString s3 = "abc";\r\nSystem.out.println(s2 == s3); // true\r\n```\r\n\r\n---\r\n\r\n## 九、String、StringBuilder、StringBuffer 区别\r\n\r\n| 类型            | 可变性 | 线程安全             | 使用场景                   |\r\n| --------------- | ------ | -------------------- | -------------------------- |\r\n| `String`        | 不可变 | 安全                 | 少量拼接/不修改            |\r\n| `StringBuilder` | 可变   | 不安全               | 单线程大量拼接（**首选**） |\r\n| `StringBuffer`  | 可变   | 安全（synchronized） | 多线程大量拼接             |\r\n\r\n```java\r\nStringBuilder sb = new StringBuilder();\r\nsb.append("a").append("b").append("c");\r\nString result = sb.toString();  // "abc"\r\n```\r\n\r\n---\r\n\r\n## 十、常用工具方法汇总速查表（简洁版）\r\n\r\n| 分类     | 方法                                                         |\r\n| -------- | ------------------------------------------------------------ |\r\n| **判空** | `isEmpty()`、`isBlank()`、`length()`                         |\r\n| **比较** | `equals()`、`equalsIgnoreCase()`、`compareTo()`              |\r\n| **查找** | `indexOf()`、`lastIndexOf()`、`contains()`、`startsWith()`   |\r\n| **截取** | `substring()`、`split()`                                     |\r\n| **替换** | `replace()`、`replaceAll()`、`replaceFirst()`                |\r\n| **转换** | `toLowerCase()`、`toUpperCase()`、`trim()`/`strip()`、`toCharArray()`、`getBytes()` |\r\n| **拼接** | `concat()`、`join()`、`format()`                             |\r\n| **特性** | `intern()`、`charAt()`、`length()`                           |\r\n\r\n',Gf=`---
title: Vue 3 入门笔记：组合式 API
date: 2026-08-12
tags: [Vue, 前端]
category: Vue
excerpt: 记录 Vue 3 组合式 API 的基础用法。
---

记录一下 Vue 3 组合式 API 的基础用法。

## setup 语法糖

\`\`\`vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
<\/script>
\`\`\`

## 常用 API

- ref：定义响应式数据
- computed：计算属性
- watch：监听变化

后续继续补充。
`;function Ps(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ut=Ps();function Il(e){Ut=e}var xn={exec:()=>null};function te(e,t=""){let n=typeof e=="string"?e:e.source;const r={replace:(s,i)=>{let l=typeof i=="string"?i:i.source;return l=l.replace(Oe.caret,"$1"),n=n.replace(s,l),r},getRegex:()=>new RegExp(n,t)};return r}var Oe={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},qf=/^(?:[ \t]*(?:\n|$))+/,Wf=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Kf=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Mn=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Jf=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Os=/(?:[*+-]|\d{1,9}[.)])/,Pl=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Ol=te(Pl).replace(/bull/g,Os).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Zf=te(Pl).replace(/bull/g,Os).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Ls=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Qf=/^[^\n]+/,Ns=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Yf=te(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Ns).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Xf=te(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Os).getRegex(),wr="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Ms=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,eh=te("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Ms).replace("tag",wr).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ll=te(Ls).replace("hr",Mn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",wr).getRegex(),th=te(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Ll).getRegex(),Ds={blockquote:th,code:Wf,def:Yf,fences:Kf,heading:Jf,hr:Mn,html:eh,lheading:Ol,list:Xf,newline:qf,paragraph:Ll,table:xn,text:Qf},zi=te("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Mn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",wr).getRegex(),nh={...Ds,lheading:Zf,table:zi,paragraph:te(Ls).replace("hr",Mn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",zi).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",wr).getRegex()},rh={...Ds,html:te(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Ms).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:xn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:te(Ls).replace("hr",Mn).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Ol).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},sh=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,ih=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Nl=/^( {2,}|\\)\n(?!\s*$)/,oh=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,kr=/[\p{P}\p{S}]/u,$s=/[\s\p{P}\p{S}]/u,Ml=/[^\s\p{P}\p{S}]/u,lh=te(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,$s).getRegex(),Dl=/(?!~)[\p{P}\p{S}]/u,ah=/(?!~)[\s\p{P}\p{S}]/u,ch=/(?:[^\s\p{P}\p{S}]|~)/u,uh=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,$l=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,fh=te($l,"u").replace(/punct/g,kr).getRegex(),hh=te($l,"u").replace(/punct/g,Dl).getRegex(),Bl="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",ph=te(Bl,"gu").replace(/notPunctSpace/g,Ml).replace(/punctSpace/g,$s).replace(/punct/g,kr).getRegex(),dh=te(Bl,"gu").replace(/notPunctSpace/g,ch).replace(/punctSpace/g,ah).replace(/punct/g,Dl).getRegex(),gh=te("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Ml).replace(/punctSpace/g,$s).replace(/punct/g,kr).getRegex(),mh=te(/\\(punct)/,"gu").replace(/punct/g,kr).getRegex(),bh=te(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),vh=te(Ms).replace("(?:-->|$)","-->").getRegex(),yh=te("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",vh).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),rr=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,_h=te(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",rr).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),jl=te(/^!?\[(label)\]\[(ref)\]/).replace("label",rr).replace("ref",Ns).getRegex(),Fl=te(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ns).getRegex(),xh=te("reflink|nolink(?!\\()","g").replace("reflink",jl).replace("nolink",Fl).getRegex(),Bs={_backpedal:xn,anyPunctuation:mh,autolink:bh,blockSkip:uh,br:Nl,code:ih,del:xn,emStrongLDelim:fh,emStrongRDelimAst:ph,emStrongRDelimUnd:gh,escape:sh,link:_h,nolink:Fl,punctuation:lh,reflink:jl,reflinkSearch:xh,tag:yh,text:oh,url:xn},Sh={...Bs,link:te(/^!?\[(label)\]\((.*?)\)/).replace("label",rr).getRegex(),reflink:te(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",rr).getRegex()},is={...Bs,emStrongRDelimAst:dh,emStrongLDelim:hh,url:te(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},wh={...is,br:te(Nl).replace("{2,}","*").getRegex(),text:te(is.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},jn={normal:Ds,gfm:nh,pedantic:rh},un={normal:Bs,gfm:is,breaks:wh,pedantic:Sh},kh={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ui=e=>kh[e];function et(e,t){if(t){if(Oe.escapeTest.test(e))return e.replace(Oe.escapeReplace,Ui)}else if(Oe.escapeTestNoEncode.test(e))return e.replace(Oe.escapeReplaceNoEncode,Ui);return e}function Gi(e){try{e=encodeURI(e).replace(Oe.percentDecode,"%")}catch{return null}return e}function qi(e,t){var i;const n=e.replace(Oe.findPipe,(l,o,a)=>{let u=!1,c=o;for(;--c>=0&&a[c]==="\\";)u=!u;return u?"|":" |"}),r=n.split(Oe.splitPipe);let s=0;if(r[0].trim()||r.shift(),r.length>0&&!((i=r.at(-1))!=null&&i.trim())&&r.pop(),t)if(r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(Oe.slashPipe,"|");return r}function fn(e,t,n){const r=e.length;if(r===0)return"";let s=0;for(;s<r&&e.charAt(r-s-1)===t;)s++;return e.slice(0,r-s)}function Ch(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]==="\\")r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function Wi(e,t,n,r,s){const i=t.href,l=t.title||null,o=e[1].replace(s.other.outputLinkReplace,"$1");r.state.inLink=!0;const a={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:i,title:l,text:o,tokens:r.inlineTokens(o)};return r.state.inLink=!1,a}function Ah(e,t,n){const r=e.match(n.other.indentCodeCompensation);if(r===null)return t;const s=r[1];return t.split(`
`).map(i=>{const l=i.match(n.other.beginningSpace);if(l===null)return i;const[o]=l;return o.length>=s.length?i.slice(s.length):i}).join(`
`)}var sr=class{constructor(e){oe(this,"options");oe(this,"rules");oe(this,"lexer");this.options=e||Ut}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:fn(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],r=Ah(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:r}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){const r=fn(n,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(n=r.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:fn(t[0],`
`)}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let n=fn(t[0],`
`).split(`
`),r="",s="";const i=[];for(;n.length>0;){let l=!1;const o=[];let a;for(a=0;a<n.length;a++)if(this.rules.other.blockquoteStart.test(n[a]))o.push(n[a]),l=!0;else if(!l)o.push(n[a]);else break;n=n.slice(a);const u=o.join(`
`),c=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${u}`:u,s=s?`${s}
${c}`:c;const f=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=f,n.length===0)break;const p=i.at(-1);if((p==null?void 0:p.type)==="code")break;if((p==null?void 0:p.type)==="blockquote"){const m=p,x=m.raw+`
`+n.join(`
`),w=this.blockquote(x);i[i.length-1]=w,r=r.substring(0,r.length-m.raw.length)+w.raw,s=s.substring(0,s.length-m.text.length)+w.text;break}else if((p==null?void 0:p.type)==="list"){const m=p,x=m.raw+`
`+n.join(`
`),w=this.list(x);i[i.length-1]=w,r=r.substring(0,r.length-p.raw.length)+w.raw,s=s.substring(0,s.length-m.raw.length)+w.raw,n=x.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:i,text:s}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const r=n.length>1,s={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");const i=this.rules.other.listItemRegex(n);let l=!1;for(;e;){let a=!1,u="",c="";if(!(t=i.exec(e))||this.rules.block.hr.test(e))break;u=t[0],e=e.substring(u.length);let f=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,N=>" ".repeat(3*N.length)),p=e.split(`
`,1)[0],m=!f.trim(),x=0;if(this.options.pedantic?(x=2,c=f.trimStart()):m?x=t[1].length+1:(x=t[2].search(this.rules.other.nonSpaceChar),x=x>4?1:x,c=f.slice(x),x+=t[1].length),m&&this.rules.other.blankLine.test(p)&&(u+=p+`
`,e=e.substring(p.length+1),a=!0),!a){const N=this.rules.other.nextBulletRegex(x),E=this.rules.other.hrRegex(x),P=this.rules.other.fencesBeginRegex(x),T=this.rules.other.headingBeginRegex(x),z=this.rules.other.htmlBeginRegex(x);for(;e;){const q=e.split(`
`,1)[0];let U;if(p=q,this.options.pedantic?(p=p.replace(this.rules.other.listReplaceNesting,"  "),U=p):U=p.replace(this.rules.other.tabCharGlobal,"    "),P.test(p)||T.test(p)||z.test(p)||N.test(p)||E.test(p))break;if(U.search(this.rules.other.nonSpaceChar)>=x||!p.trim())c+=`
`+U.slice(x);else{if(m||f.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||P.test(f)||T.test(f)||E.test(f))break;c+=`
`+p}!m&&!p.trim()&&(m=!0),u+=q+`
`,e=e.substring(q.length+1),f=U.slice(x)}}s.loose||(l?s.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(l=!0));let w=null,$;this.options.gfm&&(w=this.rules.other.listIsTask.exec(c),w&&($=w[0]!=="[ ] ",c=c.replace(this.rules.other.listReplaceTask,""))),s.items.push({type:"list_item",raw:u,task:!!w,checked:$,loose:!1,text:c,tokens:[]}),s.raw+=u}const o=s.items.at(-1);if(o)o.raw=o.raw.trimEnd(),o.text=o.text.trimEnd();else return;s.raw=s.raw.trimEnd();for(let a=0;a<s.items.length;a++)if(this.lexer.state.top=!1,s.items[a].tokens=this.lexer.blockTokens(s.items[a].text,[]),!s.loose){const u=s.items[a].tokens.filter(f=>f.type==="space"),c=u.length>0&&u.some(f=>this.rules.other.anyLine.test(f.raw));s.loose=c}if(s.loose)for(let a=0;a<s.items.length;a++)s.items[a].loose=!0;return s}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:r,title:s}}}table(e){var l;const t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;const n=qi(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=(l=t[3])!=null&&l.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===r.length){for(const o of r)this.rules.other.tableAlignRight.test(o)?i.align.push("right"):this.rules.other.tableAlignCenter.test(o)?i.align.push("center"):this.rules.other.tableAlignLeft.test(o)?i.align.push("left"):i.align.push(null);for(let o=0;o<n.length;o++)i.header.push({text:n[o],tokens:this.lexer.inline(n[o]),header:!0,align:i.align[o]});for(const o of s)i.rows.push(qi(o,i.header.length).map((a,u)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:i.align[u]})));return i}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;const i=fn(n.slice(0,-1),"\\");if((n.length-i.length)%2===0)return}else{const i=Ch(t[2],"()");if(i===-2)return;if(i>-1){const o=(t[0].indexOf("!")===0?5:4)+t[1].length+i;t[2]=t[2].substring(0,i),t[0]=t[0].substring(0,o).trim(),t[3]=""}}let r=t[2],s="";if(this.options.pedantic){const i=this.rules.other.pedanticHrefTitle.exec(r);i&&(r=i[1],s=i[3])}else s=t[3]?t[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?r=r.slice(1):r=r.slice(1,-1)),Wi(t,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const r=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=t[r.toLowerCase()];if(!s){const i=n[0].charAt(0);return{type:"text",raw:i,text:i}}return Wi(n,s,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let r=this.rules.inline.emStrongLDelim.exec(e);if(!r||r[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(r[1]||r[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const i=[...r[0]].length-1;let l,o,a=i,u=0;const c=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+i);(r=c.exec(t))!=null;){if(l=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!l)continue;if(o=[...l].length,r[3]||r[4]){a+=o;continue}else if((r[5]||r[6])&&i%3&&!((i+o)%3)){u+=o;continue}if(a-=o,a>0)continue;o=Math.min(o,o+a+u);const f=[...r[0]][0].length,p=e.slice(0,i+r.index+f+o);if(Math.min(i,o)%2){const x=p.slice(1,-1);return{type:"em",raw:p,text:x,tokens:this.lexer.inlineTokens(x)}}const m=p.slice(2,-2);return{type:"strong",raw:p,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," ");const r=this.rules.other.nonSpaceChar.test(n),s=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return r&&s&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,r;return t[2]==="@"?(n=t[1],r="mailto:"+n):(n=t[1],r=n),{type:"link",raw:t[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let r,s;if(t[2]==="@")r=t[0],s="mailto:"+r;else{let i;do i=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(i!==t[0]);r=t[0],t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){const n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},vt=class os{constructor(t){oe(this,"tokens");oe(this,"options");oe(this,"state");oe(this,"tokenizer");oe(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Ut,this.options.tokenizer=this.options.tokenizer||new sr,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:Oe,block:jn.normal,inline:un.normal};this.options.pedantic?(n.block=jn.pedantic,n.inline=un.pedantic):this.options.gfm&&(n.block=jn.gfm,this.options.breaks?n.inline=un.breaks:n.inline=un.gfm),this.tokenizer.rules=n}static get rules(){return{block:jn,inline:un}}static lex(t,n){return new os(n).lex(t)}static lexInline(t,n){return new os(n).inlineTokens(t)}lex(t){t=t.replace(Oe.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],r=!1){var s,i,l;for(this.options.pedantic&&(t=t.replace(Oe.tabCharGlobal,"    ").replace(Oe.spaceLine,""));t;){let o;if((i=(s=this.options.extensions)==null?void 0:s.block)!=null&&i.some(u=>(o=u.call({lexer:this},t,n))?(t=t.substring(o.raw.length),n.push(o),!0):!1))continue;if(o=this.tokenizer.space(t)){t=t.substring(o.raw.length);const u=n.at(-1);o.raw.length===1&&u!==void 0?u.raw+=`
`:n.push(o);continue}if(o=this.tokenizer.code(t)){t=t.substring(o.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+o.raw,u.text+=`
`+o.text,this.inlineQueue.at(-1).src=u.text):n.push(o);continue}if(o=this.tokenizer.fences(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.heading(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.hr(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.blockquote(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.list(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.html(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.def(t)){t=t.substring(o.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+o.raw,u.text+=`
`+o.raw,this.inlineQueue.at(-1).src=u.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title});continue}if(o=this.tokenizer.table(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.lheading(t)){t=t.substring(o.raw.length),n.push(o);continue}let a=t;if((l=this.options.extensions)!=null&&l.startBlock){let u=1/0;const c=t.slice(1);let f;this.options.extensions.startBlock.forEach(p=>{f=p.call({lexer:this},c),typeof f=="number"&&f>=0&&(u=Math.min(u,f))}),u<1/0&&u>=0&&(a=t.substring(0,u+1))}if(this.state.top&&(o=this.tokenizer.paragraph(a))){const u=n.at(-1);r&&(u==null?void 0:u.type)==="paragraph"?(u.raw+=`
`+o.raw,u.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(o),r=a.length!==t.length,t=t.substring(o.raw.length);continue}if(o=this.tokenizer.text(t)){t=t.substring(o.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="text"?(u.raw+=`
`+o.raw,u.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(o);continue}if(t){const u="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){var o,a,u;let r=t,s=null;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)c.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,s.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(s=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let i=!1,l="";for(;t;){i||(l=""),i=!1;let c;if((a=(o=this.options.extensions)==null?void 0:o.inline)!=null&&a.some(p=>(c=p.call({lexer:this},t,n))?(t=t.substring(c.raw.length),n.push(c),!0):!1))continue;if(c=this.tokenizer.escape(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.tag(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.link(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(c.raw.length);const p=n.at(-1);c.type==="text"&&(p==null?void 0:p.type)==="text"?(p.raw+=c.raw,p.text+=c.text):n.push(c);continue}if(c=this.tokenizer.emStrong(t,r,l)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.codespan(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.br(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.del(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.autolink(t)){t=t.substring(c.raw.length),n.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(t))){t=t.substring(c.raw.length),n.push(c);continue}let f=t;if((u=this.options.extensions)!=null&&u.startInline){let p=1/0;const m=t.slice(1);let x;this.options.extensions.startInline.forEach(w=>{x=w.call({lexer:this},m),typeof x=="number"&&x>=0&&(p=Math.min(p,x))}),p<1/0&&p>=0&&(f=t.substring(0,p+1))}if(c=this.tokenizer.inlineText(f)){t=t.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(l=c.raw.slice(-1)),i=!0;const p=n.at(-1);(p==null?void 0:p.type)==="text"?(p.raw+=c.raw,p.text+=c.text):n.push(c);continue}if(t){const p="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return n}},ir=class{constructor(e){oe(this,"options");oe(this,"parser");this.options=e||Ut}space(e){return""}code({text:e,lang:t,escaped:n}){var i;const r=(i=(t||"").match(Oe.notSpaceStart))==null?void 0:i[0],s=e.replace(Oe.endingNewline,"")+`
`;return r?'<pre><code class="language-'+et(r)+'">'+(n?s:et(s,!0))+`</code></pre>
`:"<pre><code>"+(n?s:et(s,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){const t=e.ordered,n=e.start;let r="";for(let l=0;l<e.items.length;l++){const o=e.items[l];r+=this.listitem(o)}const s=t?"ol":"ul",i=t&&n!==1?' start="'+n+'"':"";return"<"+s+i+`>
`+r+"</"+s+`>
`}listitem(e){var n;let t="";if(e.task){const r=this.checkbox({checked:!!e.checked});e.loose?((n=e.tokens[0])==null?void 0:n.type)==="paragraph"?(e.tokens[0].text=r+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=r+" "+et(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:r+" ",text:r+" ",escaped:!0}):t+=r+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let s=0;s<e.header.length;s++)n+=this.tablecell(e.header[s]);t+=this.tablerow({text:n});let r="";for(let s=0;s<e.rows.length;s++){const i=e.rows[s];n="";for(let l=0;l<i.length;l++)n+=this.tablecell(i[l]);r+=this.tablerow({text:n})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${et(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){const r=this.parser.parseInline(n),s=Gi(e);if(s===null)return r;e=s;let i='<a href="'+e+'"';return t&&(i+=' title="'+et(t)+'"'),i+=">"+r+"</a>",i}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));const s=Gi(e);if(s===null)return et(n);e=s;let i=`<img src="${e}" alt="${n}"`;return t&&(i+=` title="${et(t)}"`),i+=">",i}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:et(e.text)}},js=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}},yt=class ls{constructor(t){oe(this,"options");oe(this,"renderer");oe(this,"textRenderer");this.options=t||Ut,this.options.renderer=this.options.renderer||new ir,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new js}static parse(t,n){return new ls(n).parse(t)}static parseInline(t,n){return new ls(n).parseInline(t)}parse(t,n=!0){var s,i;let r="";for(let l=0;l<t.length;l++){const o=t[l];if((i=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&i[o.type]){const u=o,c=this.options.extensions.renderers[u.type].call({parser:this},u);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)){r+=c||"";continue}}const a=o;switch(a.type){case"space":{r+=this.renderer.space(a);continue}case"hr":{r+=this.renderer.hr(a);continue}case"heading":{r+=this.renderer.heading(a);continue}case"code":{r+=this.renderer.code(a);continue}case"table":{r+=this.renderer.table(a);continue}case"blockquote":{r+=this.renderer.blockquote(a);continue}case"list":{r+=this.renderer.list(a);continue}case"html":{r+=this.renderer.html(a);continue}case"paragraph":{r+=this.renderer.paragraph(a);continue}case"text":{let u=a,c=this.renderer.text(u);for(;l+1<t.length&&t[l+1].type==="text";)u=t[++l],c+=`
`+this.renderer.text(u);n?r+=this.renderer.paragraph({type:"paragraph",raw:c,text:c,tokens:[{type:"text",raw:c,text:c,escaped:!0}]}):r+=c;continue}default:{const u='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return r}parseInline(t,n=this.renderer){var s,i;let r="";for(let l=0;l<t.length;l++){const o=t[l];if((i=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&i[o.type]){const u=this.options.extensions.renderers[o.type].call({parser:this},o);if(u!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){r+=u||"";continue}}const a=o;switch(a.type){case"escape":{r+=n.text(a);break}case"html":{r+=n.html(a);break}case"link":{r+=n.link(a);break}case"image":{r+=n.image(a);break}case"strong":{r+=n.strong(a);break}case"em":{r+=n.em(a);break}case"codespan":{r+=n.codespan(a);break}case"br":{r+=n.br(a);break}case"del":{r+=n.del(a);break}case"text":{r+=n.text(a);break}default:{const u='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return r}},Vr,Gn=(Vr=class{constructor(e){oe(this,"options");oe(this,"block");this.options=e||Ut}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?vt.lex:vt.lexInline}provideParser(){return this.block?yt.parse:yt.parseInline}},oe(Vr,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Vr),Eh=class{constructor(...e){oe(this,"defaults",Ps());oe(this,"options",this.setOptions);oe(this,"parse",this.parseMarkdown(!0));oe(this,"parseInline",this.parseMarkdown(!1));oe(this,"Parser",yt);oe(this,"Renderer",ir);oe(this,"TextRenderer",js);oe(this,"Lexer",vt);oe(this,"Tokenizer",sr);oe(this,"Hooks",Gn);this.use(...e)}walkTokens(e,t){var r,s;let n=[];for(const i of e)switch(n=n.concat(t.call(this,i)),i.type){case"table":{const l=i;for(const o of l.header)n=n.concat(this.walkTokens(o.tokens,t));for(const o of l.rows)for(const a of o)n=n.concat(this.walkTokens(a.tokens,t));break}case"list":{const l=i;n=n.concat(this.walkTokens(l.items,t));break}default:{const l=i;(s=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&s[l.type]?this.defaults.extensions.childTokens[l.type].forEach(o=>{const a=l[o].flat(1/0);n=n.concat(this.walkTokens(a,t))}):l.tokens&&(n=n.concat(this.walkTokens(l.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const i=t.renderers[s.name];i?t.renderers[s.name]=function(...l){let o=s.renderer.apply(this,l);return o===!1&&(o=i.apply(this,l)),o}:t.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const i=t[s.level];i?i.unshift(s.tokenizer):t[s.level]=[s.tokenizer],s.start&&(s.level==="block"?t.startBlock?t.startBlock.push(s.start):t.startBlock=[s.start]:s.level==="inline"&&(t.startInline?t.startInline.push(s.start):t.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(t.childTokens[s.name]=s.childTokens)}),r.extensions=t),n.renderer){const s=this.defaults.renderer||new ir(this.defaults);for(const i in n.renderer){if(!(i in s))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;const l=i,o=n.renderer[l],a=s[l];s[l]=(...u)=>{let c=o.apply(s,u);return c===!1&&(c=a.apply(s,u)),c||""}}r.renderer=s}if(n.tokenizer){const s=this.defaults.tokenizer||new sr(this.defaults);for(const i in n.tokenizer){if(!(i in s))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;const l=i,o=n.tokenizer[l],a=s[l];s[l]=(...u)=>{let c=o.apply(s,u);return c===!1&&(c=a.apply(s,u)),c}}r.tokenizer=s}if(n.hooks){const s=this.defaults.hooks||new Gn;for(const i in n.hooks){if(!(i in s))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;const l=i,o=n.hooks[l],a=s[l];Gn.passThroughHooks.has(i)?s[l]=u=>{if(this.defaults.async)return Promise.resolve(o.call(s,u)).then(f=>a.call(s,f));const c=o.call(s,u);return a.call(s,c)}:s[l]=(...u)=>{let c=o.apply(s,u);return c===!1&&(c=a.apply(s,u)),c}}r.hooks=s}if(n.walkTokens){const s=this.defaults.walkTokens,i=n.walkTokens;r.walkTokens=function(l){let o=[];return o.push(i.call(this,l)),s&&(o=o.concat(s.call(this,l))),o}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return vt.lex(e,t??this.defaults)}parser(e,t){return yt.parse(e,t??this.defaults)}parseMarkdown(e){return(n,r)=>{const s={...r},i={...this.defaults,...s},l=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&s.async===!1)return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));i.hooks&&(i.hooks.options=i,i.hooks.block=e);const o=i.hooks?i.hooks.provideLexer():e?vt.lex:vt.lexInline,a=i.hooks?i.hooks.provideParser():e?yt.parse:yt.parseInline;if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(n):n).then(u=>o(u,i)).then(u=>i.hooks?i.hooks.processAllTokens(u):u).then(u=>i.walkTokens?Promise.all(this.walkTokens(u,i.walkTokens)).then(()=>u):u).then(u=>a(u,i)).then(u=>i.hooks?i.hooks.postprocess(u):u).catch(l);try{i.hooks&&(n=i.hooks.preprocess(n));let u=o(n,i);i.hooks&&(u=i.hooks.processAllTokens(u)),i.walkTokens&&this.walkTokens(u,i.walkTokens);let c=a(u,i);return i.hooks&&(c=i.hooks.postprocess(c)),c}catch(u){return l(u)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const r="<p>An error occurred:</p><pre>"+et(n.message+"",!0)+"</pre>";return t?Promise.resolve(r):r}if(t)return Promise.reject(n);throw n}}},Vt=new Eh;function ne(e,t){return Vt.parse(e,t)}ne.options=ne.setOptions=function(e){return Vt.setOptions(e),ne.defaults=Vt.defaults,Il(ne.defaults),ne};ne.getDefaults=Ps;ne.defaults=Ut;ne.use=function(...e){return Vt.use(...e),ne.defaults=Vt.defaults,Il(ne.defaults),ne};ne.walkTokens=function(e,t){return Vt.walkTokens(e,t)};ne.parseInline=Vt.parseInline;ne.Parser=yt;ne.parser=yt.parse;ne.Renderer=ir;ne.TextRenderer=js;ne.Lexer=vt;ne.lexer=vt.lex;ne.Tokenizer=sr;ne.Hooks=Gn;ne.parse=ne;ne.options;ne.setOptions;ne.use;ne.walkTokens;ne.parseInline;yt.parse;vt.lex;const Rh=/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;function Th(e){const t=Rh.exec(e);if(!t)return{data:{},content:e};const n={};for(const r of t[1].split(/\r?\n/)){const s=r.indexOf(":");if(s===-1)continue;const i=r.slice(0,s).trim();let l=r.slice(s+1).trim();l.startsWith("[")&&l.endsWith("]")?l=l.slice(1,-1).split(",").map(o=>o.trim()).filter(Boolean):(l.startsWith('"')&&l.endsWith('"')||l.startsWith("'")&&l.endsWith("'"))&&(l=l.slice(1,-1)),n[i]=l}return{data:n,content:t[2].replace(/^\r?\n/,"")}}const Ih=Object.assign({"../content/posts/git-cheatsheet.md":jf,"../content/posts/guitar-notes.md":Ff,"../content/posts/hello-world.md":Hf,"../content/posts/java-collections.md":Vf,"../content/posts/java-stream.md":zf,"../content/posts/java-string.md":Uf,"../content/posts/vue-basics.md":Gf}),Fs=Object.entries(Ih).map(([e,t])=>{const{data:n,content:r}=Th(t),s=e.split("/").pop().replace(/\.md$/,"");return{slug:s,title:n.title||s,date:n.date?new Date(n.date):null,category:n.category||"",tags:Array.isArray(n.tags)?n.tags:[],excerpt:n.excerpt||"",content:r}}).sort((e,t)=>(t.date?t.date.getTime():0)-(e.date?e.date.getTime():0));function Ph(){return Fs}function Oh(){const e=new Set;for(const t of Fs)t.category&&e.add(t.category);return[...e]}function Yh(e){return Fs.find(t=>t.slug===e)}function Xh(e){return ne.parse(e)}function ep(e){if(!e)return"";const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}const Lh={class:"post-title"},Nh={class:"meta"},Mh={key:0,class:"category"},Dh={key:0,class:"excerpt"},$h={key:1,class:"tags"},Bh={__name:"PostCard",props:{post:{type:Object,required:!0}},setup(e){function t(n){if(!n)return"";const r=new Date(n);return Number.isNaN(r.getTime())?n:`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`}return(n,r)=>{const s=Ss("router-link");return be(),_r(s,{to:`/post/${e.post.slug}`,class:"post-card glass"},{default:bt(()=>{var i;return[he("h2",Lh,Tt(e.post.title),1),he("div",Nh,[e.post.category?(be(),Re("span",Mh,Tt(e.post.category),1)):en("",!0),he("time",null,Tt(t(e.post.date)),1)]),e.post.excerpt?(be(),Re("p",Dh,Tt(e.post.excerpt),1)):en("",!0),(i=e.post.tags)!=null&&i.length?(be(),Re("div",$h,[(be(!0),Re(Ie,null,Qn(e.post.tags,l=>(be(),Re("span",{key:l,class:"tag"},Tt(l),1))),128))])):en("",!0)]}),_:1},8,["to"])}}},jh=Es(Bh,[["__scopeId","data-v-268e41b4"]]),Fh={class:"home"},Hh={class:"category-filter"},Vh=["onClick"],zh={key:0,class:"empty"},Uh={class:"reveal blog-intro"},Gh={__name:"HomeView",setup(e){const t=ys(""),n=Be(()=>Oh()),r=Be(()=>{const s=Ph();return t.value?s.filter(i=>i.category===t.value):s});return(s,i)=>{const l=Ya("reveal");return be(),Re("section",Fh,[i[2]||(i[2]=al('<div class="hero" data-v-91a9e0e8><img class="hero-avatar" src="'+gl+'" alt="头像" data-v-91a9e0e8><h1 class="hero-title" data-v-91a9e0e8>昊昊啦啦啦的博客</h1><p class="hero-subtitle" data-v-91a9e0e8>在这里，总结我的技术笔记，音乐日常</p></div><h2 class="section-title" data-v-91a9e0e8>最新文章</h2>',2)),he("div",Hh,[he("button",{class:Sn(["filter-btn",{active:t.value===""}]),onClick:i[0]||(i[0]=o=>t.value="")}," 全部 ",2),(be(!0),Re(Ie,null,Qn(n.value,o=>(be(),Re("button",{key:o,class:Sn(["filter-btn",{active:t.value===o}]),onClick:a=>t.value=o},Tt(o),11,Vh))),128))]),pe(dl,{name:"fade",mode:"out-in"},{default:bt(()=>[r.value.length?(be(),Re("div",{key:t.value,class:"post-list"},[(be(!0),Re(Ie,null,Qn(r.value,o=>(be(),_r(jh,{key:o.slug,post:o},null,8,["post"]))),128))])):en("",!0)]),_:1}),r.value.length?en("",!0):(be(),Re("p",zh,"暂无文章")),Oa((be(),Re("section",Uh,[...i[1]||(i[1]=[he("h2",null,"博客介绍",-1),he("p",null,"这里是我的个人博客，主要记录 Java 开发、前端学习的技术笔记，也分享一些生活与音乐的日常。",-1),he("p",null,"希望你能在这里有所收获，也欢迎交流想法。",-1)])])),[[l]])])}}},qh=Es(Gh,[["__scopeId","data-v-91a9e0e8"]]),Wh=[{path:"/",name:"home",component:qh},{path:"/post/:slug",name:"post",component:()=>$r(()=>import("./PostView-DL6IT1Yo.js"),__vite__mapDeps([0,1]))},{path:"/archive",name:"archive",component:()=>$r(()=>import("./ArchiveView-C6KqjkZe.js"),__vite__mapDeps([2,3]))},{path:"/about",name:"about",component:()=>$r(()=>import("./AboutView-DjBe-eBh.js"),__vite__mapDeps([4,5]))}],Kh=Bf({history:mf(),routes:Wh,scrollBehavior(){return{top:0}}}),Ki=new IntersectionObserver(e=>{e.forEach(t=>{t.target.classList.toggle("reveal-visible",t.isIntersecting)})},{threshold:.2}),Jh={mounted(e){Ki.observe(e)},unmounted(e){Ki.unobserve(e)}};bu();const Hs=du(Ru);Hs.use(Kh);Hs.directive("reveal",Jh);Hs.mount("#app");export{Ie as F,Es as _,he as a,en as b,Re as c,Be as d,Qh as e,ep as f,Yh as g,Xh as h,pe as i,Un as j,Ss as k,Ph as l,be as o,Qn as r,Tt as t,it as u,bt as w};
