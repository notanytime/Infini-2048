(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ql(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ft={},Hr=[],Vn=()=>{},Rh=()=>!1,Wa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Xa=t=>t.startsWith("onUpdate:"),Bt=Object.assign,jl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},vm=Object.prototype.hasOwnProperty,tt=(t,e)=>vm.call(t,e),Ue=Array.isArray,zr=t=>Bs(t)==="[object Map]",Ch=t=>Bs(t)==="[object Set]",Oc=t=>Bs(t)==="[object Date]",We=t=>typeof t=="function",yt=t=>typeof t=="string",gn=t=>typeof t=="symbol",ot=t=>t!==null&&typeof t=="object",Lh=t=>(ot(t)||We(t))&&We(t.then)&&We(t.catch),Ph=Object.prototype.toString,Bs=t=>Ph.call(t),xm=t=>Bs(t).slice(8,-1),Ih=t=>Bs(t)==="[object Object]",$a=t=>yt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,xs=ql(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ya=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Mm=/-\w/g,Cn=Ya(t=>t.replace(Mm,e=>e.slice(1).toUpperCase())),Sm=/\B([A-Z])/g,_r=Ya(t=>t.replace(Sm,"-$1").toLowerCase()),Nh=Ya(t=>t.charAt(0).toUpperCase()+t.slice(1)),go=Ya(t=>t?`on${Nh(t)}`:""),Bn=(t,e)=>!Object.is(t,e),vo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Dh=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Em=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Fc;const qa=()=>Fc||(Fc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Kl(t){if(Ue(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=yt(i)?Am(i):Kl(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(yt(t)||ot(t))return t}const ym=/;(?![^(]*\))/g,Tm=/:([^]+)/,bm=/\/\*[^]*?\*\//g;function Am(t){const e={};return t.replace(bm,"").split(ym).forEach(n=>{if(n){const i=n.split(Tm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Zl(t){let e="";if(yt(t))e=t;else if(Ue(t))for(let n=0;n<t.length;n++){const i=Zl(t[n]);i&&(e+=i+" ")}else if(ot(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const wm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rm=ql(wm);function Uh(t){return!!t||t===""}function Cm(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Jl(t[i],e[i]);return n}function Jl(t,e){if(t===e)return!0;let n=Oc(t),i=Oc(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=gn(t),i=gn(e),n||i)return t===e;if(n=Ue(t),i=Ue(e),n||i)return n&&i?Cm(t,e):!1;if(n=ot(t),i=ot(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in t){const o=t.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!Jl(t[a],e[a]))return!1}}return String(t)===String(e)}const Oh=t=>!!(t&&t.__v_isRef===!0),St=t=>yt(t)?t:t==null?"":Ue(t)||ot(t)&&(t.toString===Ph||!We(t.toString))?Oh(t)?St(t.value):JSON.stringify(t,Fh,2):String(t),Fh=(t,e)=>Oh(e)?Fh(t,e.value):zr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[xo(i,s)+" =>"]=r,n),{})}:Ch(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>xo(n))}:gn(e)?xo(e):ot(e)&&!Ue(e)&&!Ih(e)?String(e):e,xo=(t,e="")=>{var n;return gn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bt;class Bh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&bt&&(bt.active?(this.parent=bt,this.index=(bt.scopes||(bt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=bt;try{return bt=this,e()}finally{bt=n}}}on(){++this._on===1&&(this.prevScope=bt,bt=this)}off(){if(this._on>0&&--this._on===0){if(bt===this)bt=this.prevScope;else{let e=bt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Ql(t){return new Bh(t)}function Gh(){return bt}function Lm(t,e=!1){bt&&bt.cleanups.push(t)}let ut;const Mo=new WeakSet;class kh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,bt&&(bt.active?bt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Mo.has(this)&&(Mo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bc(this),Vh(this);const e=ut,n=Ln;ut=this,Ln=!0;try{return this.fn()}finally{Wh(this),ut=e,Ln=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)nc(e);this.deps=this.depsTail=void 0,Bc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Mo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){pl(this)&&this.run()}get dirty(){return pl(this)}}let Hh=0,Ms,Ss;function zh(t,e=!1){if(t.flags|=8,e){t.next=Ss,Ss=t;return}t.next=Ms,Ms=t}function ec(){Hh++}function tc(){if(--Hh>0)return;if(Ss){let e=Ss;for(Ss=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ms;){let e=Ms;for(Ms=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Vh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Wh(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),nc(i),Pm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function pl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Xh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Xh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Rs)||(t.globalVersion=Rs,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!pl(t))))return;t.flags|=2;const e=t.dep,n=ut,i=Ln;ut=t,Ln=!0;try{Vh(t);const r=t.fn(t._value);(e.version===0||Bn(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{ut=n,Ln=i,Wh(t),t.flags&=-3}}function nc(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)nc(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Pm(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ln=!0;const $h=[];function ui(){$h.push(Ln),Ln=!1}function fi(){const t=$h.pop();Ln=t===void 0?!0:t}function Bc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ut;ut=void 0;try{e()}finally{ut=n}}}let Rs=0;class Im{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ic{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ut||!Ln||ut===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ut)n=this.activeLink=new Im(ut,this),ut.deps?(n.prevDep=ut.depsTail,ut.depsTail.nextDep=n,ut.depsTail=n):ut.deps=ut.depsTail=n,Yh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=ut.depsTail,n.nextDep=void 0,ut.depsTail.nextDep=n,ut.depsTail=n,ut.deps===n&&(ut.deps=i)}return n}trigger(e){this.version++,Rs++,this.notify(e)}notify(e){ec();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{tc()}}}function Yh(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Yh(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const wa=new WeakMap,or=Symbol(""),ml=Symbol(""),Cs=Symbol("");function Vt(t,e,n){if(Ln&&ut){let i=wa.get(t);i||wa.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new ic),r.map=i,r.key=n),r.track()}}function si(t,e,n,i,r,s){const a=wa.get(t);if(!a){Rs++;return}const o=l=>{l&&l.trigger()};if(ec(),e==="clear")a.forEach(o);else{const l=Ue(t),c=l&&$a(n);if(l&&n==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===Cs||!gn(h)&&h>=u)&&o(f)})}else switch((n!==void 0||a.has(void 0))&&o(a.get(n)),c&&o(a.get(Cs)),e){case"add":l?c&&o(a.get("length")):(o(a.get(or)),zr(t)&&o(a.get(ml)));break;case"delete":l||(o(a.get(or)),zr(t)&&o(a.get(ml)));break;case"set":zr(t)&&o(a.get(or));break}}tc()}function Nm(t,e){const n=wa.get(t);return n&&n.get(e)}function vr(t){const e=Qe(t);return e===t?e:(Vt(e,"iterate",Cs),_n(t)?e:e.map(hi))}function rc(t){return Vt(t=Qe(t),"iterate",Cs),t}function Un(t,e){return Di(t)?Ls(Li(t)?hi(e):e):hi(e)}const Dm={__proto__:null,[Symbol.iterator](){return So(this,Symbol.iterator,t=>Un(this,t))},concat(...t){return vr(this).concat(...t.map(e=>Ue(e)?vr(e):e))},entries(){return So(this,"entries",t=>(t[1]=Un(this,t[1]),t))},every(t,e){return qn(this,"every",t,e,void 0,arguments)},filter(t,e){return qn(this,"filter",t,e,n=>n.map(i=>Un(this,i)),arguments)},find(t,e){return qn(this,"find",t,e,n=>Un(this,n),arguments)},findIndex(t,e){return qn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return qn(this,"findLast",t,e,n=>Un(this,n),arguments)},findLastIndex(t,e){return qn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return qn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Eo(this,"includes",t)},indexOf(...t){return Eo(this,"indexOf",t)},join(t){return vr(this).join(t)},lastIndexOf(...t){return Eo(this,"lastIndexOf",t)},map(t,e){return qn(this,"map",t,e,void 0,arguments)},pop(){return os(this,"pop")},push(...t){return os(this,"push",t)},reduce(t,...e){return Gc(this,"reduce",t,e)},reduceRight(t,...e){return Gc(this,"reduceRight",t,e)},shift(){return os(this,"shift")},some(t,e){return qn(this,"some",t,e,void 0,arguments)},splice(...t){return os(this,"splice",t)},toReversed(){return vr(this).toReversed()},toSorted(t){return vr(this).toSorted(t)},toSpliced(...t){return vr(this).toSpliced(...t)},unshift(...t){return os(this,"unshift",t)},values(){return So(this,"values",t=>Un(this,t))}};function So(t,e,n){const i=rc(t),r=i[e]();return i!==t&&!_n(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=n(s.value)),s}),r}const Um=Array.prototype;function qn(t,e,n,i,r,s){const a=rc(t),o=a!==t&&!_n(t),l=a[e];if(l!==Um[e]){const f=l.apply(t,s);return o?hi(f):f}let c=n;a!==t&&(o?c=function(f,h){return n.call(this,Un(t,f),h,t)}:n.length>2&&(c=function(f,h){return n.call(this,f,h,t)}));const u=l.call(a,c,i);return o&&r?r(u):u}function Gc(t,e,n,i){const r=rc(t),s=r!==t&&!_n(t);let a=n,o=!1;r!==t&&(s?(o=i.length===0,a=function(c,u,f){return o&&(o=!1,c=Un(t,c)),n.call(this,c,Un(t,u),f,t)}):n.length>3&&(a=function(c,u,f){return n.call(this,c,u,f,t)}));const l=r[e](a,...i);return o?Un(t,l):l}function Eo(t,e,n){const i=Qe(t);Vt(i,"iterate",Cs);const r=i[e](...n);return(r===-1||r===!1)&&ja(n[0])?(n[0]=Qe(n[0]),i[e](...n)):r}function os(t,e,n=[]){ui(),ec();const i=Qe(t)[e].apply(t,n);return tc(),fi(),i}const Om=ql("__proto__,__v_isRef,__isVue"),qh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(gn));function Fm(t){gn(t)||(t=String(t));const e=Qe(this);return Vt(e,"has",t),e.hasOwnProperty(t)}class jh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?Ym:Qh:s?Jh:Zh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Ue(e);if(!r){let l;if(a&&(l=Dm[n]))return l;if(n==="hasOwnProperty")return Fm}const o=Reflect.get(e,n,vt(e)?e:i);if((gn(n)?qh.has(n):Om(n))||(r||Vt(e,"get",n),s))return o;if(vt(o)){const l=a&&$a(n)?o:o.value;return r&&ot(l)?gl(l):l}return ot(o)?r?gl(o):ts(o):o}}class Kh extends jh{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];const a=Ue(e)&&$a(n);if(!this._isShallow){const c=Di(s);if(!_n(i)&&!Di(i)&&(s=Qe(s),i=Qe(i)),!a&&vt(s)&&!vt(i))return c||(s.value=i),!0}const o=a?Number(n)<e.length:tt(e,n),l=Reflect.set(e,n,i,vt(e)?e:r);return e===Qe(r)&&(o?Bn(i,s)&&si(e,"set",n,i):si(e,"add",n,i)),l}deleteProperty(e,n){const i=tt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&si(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!gn(n)||!qh.has(n))&&Vt(e,"has",n),i}ownKeys(e){return Vt(e,"iterate",Ue(e)?"length":or),Reflect.ownKeys(e)}}class Bm extends jh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Gm=new Kh,km=new Bm,Hm=new Kh(!0);const _l=t=>t,js=t=>Reflect.getPrototypeOf(t);function zm(t,e,n){return function(...i){const r=this.__v_raw,s=Qe(r),a=zr(s),o=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,c=r[t](...i),u=n?_l:e?Ls:hi;return!e&&Vt(s,"iterate",l?ml:or),Bt(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function Ks(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Vm(t,e){const n={get(r){const s=this.__v_raw,a=Qe(s),o=Qe(r);t||(Bn(r,o)&&Vt(a,"get",r),Vt(a,"get",o));const{has:l}=js(a),c=e?_l:t?Ls:hi;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Vt(Qe(r),"iterate",or),r.size},has(r){const s=this.__v_raw,a=Qe(s),o=Qe(r);return t||(Bn(r,o)&&Vt(a,"has",r),Vt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=Qe(o),c=e?_l:t?Ls:hi;return!t&&Vt(l,"iterate",or),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return Bt(n,t?{add:Ks("add"),set:Ks("set"),delete:Ks("delete"),clear:Ks("clear")}:{add(r){const s=Qe(this),a=js(s),o=Qe(r),l=!e&&!_n(r)&&!Di(r)?o:r;return a.has.call(s,l)||Bn(r,l)&&a.has.call(s,r)||Bn(o,l)&&a.has.call(s,o)||(s.add(l),si(s,"add",l,l)),this},set(r,s){!e&&!_n(s)&&!Di(s)&&(s=Qe(s));const a=Qe(this),{has:o,get:l}=js(a);let c=o.call(a,r);c||(r=Qe(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?Bn(s,u)&&si(a,"set",r,s):si(a,"add",r,s),this},delete(r){const s=Qe(this),{has:a,get:o}=js(s);let l=a.call(s,r);l||(r=Qe(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&si(s,"delete",r,void 0),c},clear(){const r=Qe(this),s=r.size!==0,a=r.clear();return s&&si(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=zm(r,t,e)}),n}function sc(t,e){const n=Vm(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(tt(n,r)&&r in i?n:i,r,s)}const Wm={get:sc(!1,!1)},Xm={get:sc(!1,!0)},$m={get:sc(!0,!1)};const Zh=new WeakMap,Jh=new WeakMap,Qh=new WeakMap,Ym=new WeakMap;function qm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jm(t){return t.__v_skip||!Object.isExtensible(t)?0:qm(xm(t))}function ts(t){return Di(t)?t:ac(t,!1,Gm,Wm,Zh)}function Km(t){return ac(t,!1,Hm,Xm,Jh)}function gl(t){return ac(t,!0,km,$m,Qh)}function ac(t,e,n,i,r){if(!ot(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=jm(t);if(s===0)return t;const a=r.get(t);if(a)return a;const o=new Proxy(t,s===2?i:n);return r.set(t,o),o}function Li(t){return Di(t)?Li(t.__v_raw):!!(t&&t.__v_isReactive)}function Di(t){return!!(t&&t.__v_isReadonly)}function _n(t){return!!(t&&t.__v_isShallow)}function ja(t){return t?!!t.__v_raw:!1}function Qe(t){const e=t&&t.__v_raw;return e?Qe(e):t}function oc(t){return!tt(t,"__v_skip")&&Object.isExtensible(t)&&Dh(t,"__v_skip",!0),t}const hi=t=>ot(t)?ts(t):t,Ls=t=>ot(t)?gl(t):t;function vt(t){return t?t.__v_isRef===!0:!1}function nn(t){return td(t,!1)}function ed(t){return td(t,!0)}function td(t,e){return vt(t)?t:new Zm(t,e)}class Zm{constructor(e,n){this.dep=new ic,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Qe(e),this._value=n?e:hi(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||_n(e)||Di(e);e=i?e:Qe(e),Bn(e,n)&&(this._rawValue=e,this._value=i?e:hi(e),this.dep.trigger())}}function nt(t){return vt(t)?t.value:t}const Jm={get:(t,e,n)=>e==="__v_raw"?t:nt(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return vt(r)&&!vt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function nd(t){return Li(t)?t:new Proxy(t,Jm)}function Qm(t){const e=Ue(t)?new Array(t.length):{};for(const n in t)e[n]=t_(t,n);return e}class e_{constructor(e,n,i){this._object=e,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._key=gn(n)?n:String(n),this._raw=Qe(e);let r=!0,s=e;if(!Ue(e)||gn(this._key)||!$a(this._key))do r=!ja(s)||_n(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=nt(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&vt(this._raw[this._key])){const n=this._object[this._key];if(vt(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return Nm(this._raw,this._key)}}function t_(t,e,n){return new e_(t,e,n)}class n_{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ic(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Rs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ut!==this)return zh(this,!0),!0}get value(){const e=this.dep.track();return Xh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function i_(t,e,n=!1){let i,r;return We(t)?i=t:(i=t.get,r=t.set),new n_(i,r,n)}const Zs={},Ra=new WeakMap;let tr;function r_(t,e=!1,n=tr){if(n){let i=Ra.get(n);i||Ra.set(n,i=[]),i.push(t)}}function s_(t,e,n=ft){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=n,c=x=>r?x:_n(x)||r===!1||r===0?Ai(x,1):Ai(x);let u,f,h,_,S=!1,E=!1;if(vt(t)?(f=()=>t.value,S=_n(t)):Li(t)?(f=()=>c(t),S=!0):Ue(t)?(E=!0,S=t.some(x=>Li(x)||_n(x)),f=()=>t.map(x=>{if(vt(x))return x.value;if(Li(x))return c(x);if(We(x))return l?l(x,2):x()})):We(t)?e?f=l?()=>l(t,2):t:f=()=>{if(h){ui();try{h()}finally{fi()}}const x=tr;tr=u;try{return l?l(t,3,[_]):t(_)}finally{tr=x}}:f=Vn,e&&r){const x=f,A=r===!0?1/0:r;f=()=>Ai(x(),A)}const p=Gh(),d=()=>{u.stop(),p&&p.active&&jl(p.effects,u)};if(s&&e){const x=e;e=(...A)=>{x(...A),d()}}let C=E?new Array(t.length).fill(Zs):Zs;const v=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const A=u.run();if(r||S||(E?A.some((T,b)=>Bn(T,C[b])):Bn(A,C))){h&&h();const T=tr;tr=u;try{const b=[A,C===Zs?void 0:E&&C[0]===Zs?[]:C,_];C=A,l?l(e,3,b):e(...b)}finally{tr=T}}}else u.run()};return o&&o(v),u=new kh(f),u.scheduler=a?()=>a(v,!1):v,_=x=>r_(x,!1,u),h=u.onStop=()=>{const x=Ra.get(u);if(x){if(l)l(x,4);else for(const A of x)A();Ra.delete(u)}},e?i?v(!0):C=u.run():a?a(v.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function Ai(t,e=1/0,n){if(e<=0||!ot(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,vt(t))Ai(t.value,e,n);else if(Ue(t))for(let i=0;i<t.length;i++)Ai(t[i],e,n);else if(Ch(t)||zr(t))t.forEach(i=>{Ai(i,e,n)});else if(Ih(t)){for(const i in t)Ai(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Ai(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Gs(t,e,n,i){try{return i?t(...i):t()}catch(r){Ka(r,e,n)}}function Xn(t,e,n,i){if(We(t)){const r=Gs(t,e,n,i);return r&&Lh(r)&&r.catch(s=>{Ka(s,e,n)}),r}if(Ue(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Xn(t[s],e,n,i));return r}}function Ka(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ft;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}o=o.parent}if(s){ui(),Gs(s,null,10,[t,l,c]),fi();return}}a_(t,n,r,i,a)}function a_(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const jt=[];let Dn=-1;const Vr=[];let bi=null,Or=0;const id=Promise.resolve();let Ca=null;function rd(t){const e=Ca||id;return t?e.then(this?t.bind(this):t):e}function o_(t){let e=Dn+1,n=jt.length;for(;e<n;){const i=e+n>>>1,r=jt[i],s=Ps(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function lc(t){if(!(t.flags&1)){const e=Ps(t),n=jt[jt.length-1];!n||!(t.flags&2)&&e>=Ps(n)?jt.push(t):jt.splice(o_(e),0,t),t.flags|=1,sd()}}function sd(){Ca||(Ca=id.then(od))}function l_(t){Ue(t)?Vr.push(...t):bi&&t.id===-1?bi.splice(Or+1,0,t):t.flags&1||(Vr.push(t),t.flags|=1),sd()}function kc(t,e,n=Dn+1){for(;n<jt.length;n++){const i=jt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;jt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ad(t){if(Vr.length){const e=[...new Set(Vr)].sort((n,i)=>Ps(n)-Ps(i));if(Vr.length=0,bi){bi.push(...e);return}for(bi=e,Or=0;Or<bi.length;Or++){const n=bi[Or];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}bi=null,Or=0}}const Ps=t=>t.id==null?t.flags&2?-1:1/0:t.id;function od(t){try{for(Dn=0;Dn<jt.length;Dn++){const e=jt[Dn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Gs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Dn<jt.length;Dn++){const e=jt[Dn];e&&(e.flags&=-2)}Dn=-1,jt.length=0,ad(),Ca=null,(jt.length||Vr.length)&&od()}}let Hn=null,ld=null;function La(t){const e=Hn;return Hn=t,ld=t&&t.type.__scopeId||null,e}function c_(t,e=Hn,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Na(-1);const s=La(e);let a;try{a=t(...r)}finally{La(s),i._d&&Na(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Xi(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(ui(),Xn(l,n,8,[t.el,o,t,e]),fi())}}function u_(t,e){if(Zt){let n=Zt.provides;const i=Zt.parent&&Zt.parent.provides;i===n&&(n=Zt.provides=Object.create(i)),n[t]=e}}function Wr(t,e,n=!1){const i=hr();if(i||lr){let r=lr?lr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&We(e)?e.call(i&&i.proxy):e}}function f_(){return!!(hr()||lr)}const h_=Symbol.for("v-scx"),d_=()=>Wr(h_);function ci(t,e,n){return cd(t,e,n)}function cd(t,e,n=ft){const{immediate:i,deep:r,flush:s,once:a}=n,o=Bt({},n),l=e&&i||!e&&s!=="post";let c;if(Ns){if(s==="sync"){const _=d_();c=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=Vn,_.resume=Vn,_.pause=Vn,_}}const u=Zt;o.call=(_,S,E)=>Xn(_,u,S,E);let f=!1;s==="post"?o.scheduler=_=>{tn(_,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(_,S)=>{S?_():lc(_)}),o.augmentJob=_=>{e&&(_.flags|=4),f&&(_.flags|=2,u&&(_.id=u.uid,_.i=u))};const h=s_(t,e,o);return Ns&&(c?c.push(h):l&&h()),h}function p_(t,e,n){const i=this.proxy,r=yt(t)?t.includes(".")?ud(i,t):()=>i[t]:t.bind(i,i);let s;We(e)?s=e:(s=e.handler,n=e);const a=zs(this),o=cd(r,s.bind(i),n);return a(),o}function ud(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const m_=Symbol("_vte"),__=t=>t.__isTeleport,g_=Symbol("_leaveCb");function cc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,cc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function pi(t,e){return We(t)?Bt({name:t.name},e,{setup:t}):t}function fd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Hc(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Pa=new WeakMap;function Es(t,e,n,i,r=!1){if(Ue(t)){t.forEach((E,p)=>Es(E,e&&(Ue(e)?e[p]:e),n,i,r));return}if(ys(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Es(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?dc(i.component):i.el,a=r?null:s,{i:o,r:l}=t,c=e&&e.r,u=o.refs===ft?o.refs={}:o.refs,f=o.setupState,h=Qe(f),_=f===ft?Rh:E=>Hc(u,E)?!1:tt(h,E),S=(E,p)=>!(p&&Hc(u,p));if(c!=null&&c!==l){if(zc(e),yt(c))u[c]=null,_(c)&&(f[c]=null);else if(vt(c)){const E=e;S(c,E.k)&&(c.value=null),E.k&&(u[E.k]=null)}}if(We(l))Gs(l,o,12,[a,u]);else{const E=yt(l),p=vt(l);if(E||p){const d=()=>{if(t.f){const C=E?_(l)?f[l]:u[l]:S()||!t.k?l.value:u[t.k];if(r)Ue(C)&&jl(C,s);else if(Ue(C))C.includes(s)||C.push(s);else if(E)u[l]=[s],_(l)&&(f[l]=u[l]);else{const v=[s];S(l,t.k)&&(l.value=v),t.k&&(u[t.k]=v)}}else E?(u[l]=a,_(l)&&(f[l]=a)):p&&(S(l,t.k)&&(l.value=a),t.k&&(u[t.k]=a))};if(a){const C=()=>{d(),Pa.delete(t)};C.id=-1,Pa.set(t,C),tn(C,n)}else zc(t),d()}}}function zc(t){const e=Pa.get(t);e&&(e.flags|=8,Pa.delete(t))}qa().requestIdleCallback;qa().cancelIdleCallback;const ys=t=>!!t.type.__asyncLoader,hd=t=>t.type.__isKeepAlive;function v_(t,e){dd(t,"a",e)}function x_(t,e){dd(t,"da",e)}function dd(t,e,n=Zt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Za(e,i,n),n){let r=n.parent;for(;r&&r.parent;)hd(r.parent.vnode)&&M_(i,e,n,r),r=r.parent}}function M_(t,e,n,i){const r=Za(e,t,i,!0);ks(()=>{jl(i[e],r)},n)}function Za(t,e,n=Zt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...a)=>{ui();const o=zs(n),l=Xn(e,n,t,a);return o(),fi(),l});return i?r.unshift(s):r.push(s),s}}const mi=t=>(e,n=Zt)=>{(!Ns||t==="sp")&&Za(t,(...i)=>e(...i),n)},pd=mi("bm"),Ja=mi("m"),S_=mi("bu"),E_=mi("u"),y_=mi("bum"),ks=mi("um"),T_=mi("sp"),b_=mi("rtg"),A_=mi("rtc");function w_(t,e=Zt){Za("ec",t,e)}const R_=Symbol.for("v-ndc"),vl=t=>t?Ud(t)?dc(t):vl(t.parent):null,Ts=Bt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vl(t.parent),$root:t=>vl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>_d(t),$forceUpdate:t=>t.f||(t.f=()=>{lc(t.update)}),$nextTick:t=>t.n||(t.n=rd.bind(t.proxy)),$watch:t=>p_.bind(t)}),yo=(t,e)=>t!==ft&&!t.__isScriptSetup&&tt(t,e),C_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=t;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(yo(i,e))return a[e]=1,i[e];if(r!==ft&&tt(r,e))return a[e]=2,r[e];if(tt(s,e))return a[e]=3,s[e];if(n!==ft&&tt(n,e))return a[e]=4,n[e];xl&&(a[e]=0)}}const c=Ts[e];let u,f;if(c)return e==="$attrs"&&Vt(t.attrs,"get",""),c(t);if((u=o.__cssModules)&&(u=u[e]))return u;if(n!==ft&&tt(n,e))return a[e]=4,n[e];if(f=l.config.globalProperties,tt(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return yo(r,e)?(r[e]=n,!0):i!==ft&&tt(i,e)?(i[e]=n,!0):tt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(n[o]||t!==ft&&o[0]!=="$"&&tt(t,o)||yo(e,o)||tt(s,o)||tt(i,o)||tt(Ts,o)||tt(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:tt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Vc(t){return Ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let xl=!0;function L_(t){const e=_d(t),n=t.proxy,i=t.ctx;xl=!1,e.beforeCreate&&Wc(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:_,updated:S,activated:E,deactivated:p,beforeDestroy:d,beforeUnmount:C,destroyed:v,unmounted:x,render:A,renderTracked:T,renderTriggered:b,errorCaptured:D,serverPrefetch:U,expose:M,inheritAttrs:L,components:W,directives:ie,filters:F}=e;if(c&&P_(c,i,null),a)for(const Z in a){const q=a[Z];We(q)&&(i[Z]=q.bind(n))}if(r){const Z=r.call(n,n);ot(Z)&&(t.data=ts(Z))}if(xl=!0,s)for(const Z in s){const q=s[Z],oe=We(q)?q.bind(n,n):We(q.get)?q.get.bind(n,n):Vn,le=!We(q)&&We(q.set)?q.set.bind(n):Vn,de=ln({get:oe,set:le});Object.defineProperty(i,Z,{enumerable:!0,configurable:!0,get:()=>de.value,set:me=>de.value=me})}if(o)for(const Z in o)md(o[Z],i,n,Z);if(l){const Z=We(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(q=>{u_(q,Z[q])})}u&&Wc(u,t,"c");function Y(Z,q){Ue(q)?q.forEach(oe=>Z(oe.bind(n))):q&&Z(q.bind(n))}if(Y(pd,f),Y(Ja,h),Y(S_,_),Y(E_,S),Y(v_,E),Y(x_,p),Y(w_,D),Y(A_,T),Y(b_,b),Y(y_,C),Y(ks,x),Y(T_,U),Ue(M))if(M.length){const Z=t.exposed||(t.exposed={});M.forEach(q=>{Object.defineProperty(Z,q,{get:()=>n[q],set:oe=>n[q]=oe,enumerable:!0})})}else t.exposed||(t.exposed={});A&&t.render===Vn&&(t.render=A),L!=null&&(t.inheritAttrs=L),W&&(t.components=W),ie&&(t.directives=ie),U&&fd(t)}function P_(t,e,n=Vn){Ue(t)&&(t=Ml(t));for(const i in t){const r=t[i];let s;ot(r)?"default"in r?s=Wr(r.from||i,r.default,!0):s=Wr(r.from||i):s=Wr(r),vt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Wc(t,e,n){Xn(Ue(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function md(t,e,n,i){let r=i.includes(".")?ud(n,i):()=>n[i];if(yt(t)){const s=e[t];We(s)&&ci(r,s)}else if(We(t))ci(r,t.bind(n));else if(ot(t))if(Ue(t))t.forEach(s=>md(s,e,n,i));else{const s=We(t.handler)?t.handler.bind(n):e[t.handler];We(s)&&ci(r,s,t)}}function _d(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Ia(l,c,a,!0)),Ia(l,e,a)),ot(e)&&s.set(e,l),l}function Ia(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Ia(t,s,n,!0),r&&r.forEach(a=>Ia(t,a,n,!0));for(const a in e)if(!(i&&a==="expose")){const o=I_[a]||n&&n[a];t[a]=o?o(t[a],e[a]):e[a]}return t}const I_={data:Xc,props:$c,emits:$c,methods:gs,computed:gs,beforeCreate:Xt,created:Xt,beforeMount:Xt,mounted:Xt,beforeUpdate:Xt,updated:Xt,beforeDestroy:Xt,beforeUnmount:Xt,destroyed:Xt,unmounted:Xt,activated:Xt,deactivated:Xt,errorCaptured:Xt,serverPrefetch:Xt,components:gs,directives:gs,watch:D_,provide:Xc,inject:N_};function Xc(t,e){return e?t?function(){return Bt(We(t)?t.call(this,this):t,We(e)?e.call(this,this):e)}:e:t}function N_(t,e){return gs(Ml(t),Ml(e))}function Ml(t){if(Ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Xt(t,e){return t?[...new Set([].concat(t,e))]:e}function gs(t,e){return t?Bt(Object.create(null),t,e):e}function $c(t,e){return t?Ue(t)&&Ue(e)?[...new Set([...t,...e])]:Bt(Object.create(null),Vc(t),Vc(e??{})):e}function D_(t,e){if(!t)return e;if(!e)return t;const n=Bt(Object.create(null),t);for(const i in e)n[i]=Xt(t[i],e[i]);return n}function gd(){return{app:null,config:{isNativeTag:Rh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let U_=0;function O_(t,e){return function(i,r=null){We(i)||(i=Bt({},i)),r!=null&&!ot(r)&&(r=null);const s=gd(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:U_++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:pg,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&We(u.install)?(a.add(u),u.install(c,...f)):We(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const _=c._ceVNode||It(i,r);return _.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),t(_,u,h),l=!0,c._container=u,u.__vue_app__=c,dc(_.component)}},onUnmount(u){o.push(u)},unmount(){l&&(Xn(o,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=lr;lr=c;try{return u()}finally{lr=f}}};return c}}let lr=null;const F_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Cn(e)}Modifiers`]||t[`${_r(e)}Modifiers`];function B_(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ft;let r=n;const s=e.startsWith("update:"),a=s&&F_(i,e.slice(7));a&&(a.trim&&(r=n.map(u=>yt(u)?u.trim():u)),a.number&&(r=n.map(Em)));let o,l=i[o=go(e)]||i[o=go(Cn(e))];!l&&s&&(l=i[o=go(_r(e))]),l&&Xn(l,t,6,r);const c=i[o+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,Xn(c,t,6,r)}}const G_=new WeakMap;function vd(t,e,n=!1){const i=n?G_:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let a={},o=!1;if(!We(t)){const l=c=>{const u=vd(c,e,!0);u&&(o=!0,Bt(a,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!o?(ot(t)&&i.set(t,null),null):(Ue(s)?s.forEach(l=>a[l]=null):Bt(a,s),ot(t)&&i.set(t,a),a)}function Qa(t,e){return!t||!Wa(e)?!1:(e=e.slice(2).replace(/Once$/,""),tt(t,e[0].toLowerCase()+e.slice(1))||tt(t,_r(e))||tt(t,e))}function Yc(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:_,ctx:S,inheritAttrs:E}=t,p=La(t);let d,C;try{if(n.shapeFlag&4){const x=r||i,A=x;d=On(c.call(A,x,u,f,_,h,S)),C=o}else{const x=e;d=On(x.length>1?x(f,{attrs:o,slots:a,emit:l}):x(f,null)),C=e.props?o:k_(o)}}catch(x){bs.length=0,Ka(x,t,1),d=It(Ui)}let v=d;if(C&&E!==!1){const x=Object.keys(C),{shapeFlag:A}=v;x.length&&A&7&&(s&&x.some(Xa)&&(C=H_(C,s)),v=qr(v,C,!1,!0))}return n.dirs&&(v=qr(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&cc(v,n.transition),d=v,La(p),d}const k_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Wa(n))&&((e||(e={}))[n]=t[n]);return e},H_=(t,e)=>{const n={};for(const i in t)(!Xa(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function z_(t,e,n){const{props:i,children:r,component:s}=t,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?qc(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(xd(a,i,h)&&!Qa(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?qc(i,a,c):!0:!!a;return!1}function qc(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(xd(e,t,s)&&!Qa(n,s))return!0}return!1}function xd(t,e,n){const i=t[n],r=e[n];return n==="style"&&ot(i)&&ot(r)?!Jl(i,r):i!==r}function V_({vnode:t,parent:e,suspense:n},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.suspense.vnode.el=r.el=i,t=r),r===t)(t=e.vnode).el=i,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=i)}const Md={},Sd=()=>Object.create(Md),Ed=t=>Object.getPrototypeOf(t)===Md;function W_(t,e,n,i=!1){const r={},s=Sd();t.propsDefaults=Object.create(null),yd(t,e,r,s);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=i?r:Km(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function X_(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=t,o=Qe(r),[l]=t.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Qa(t.emitsOptions,h))continue;const _=e[h];if(l)if(tt(s,h))_!==s[h]&&(s[h]=_,c=!0);else{const S=Cn(h);r[S]=Sl(l,o,S,_,t,!1)}else _!==s[h]&&(s[h]=_,c=!0)}}}else{yd(t,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!tt(e,f)&&((u=_r(f))===f||!tt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Sl(l,o,f,void 0,t,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!tt(e,f))&&(delete s[f],c=!0)}c&&si(t.attrs,"set","")}function yd(t,e,n,i){const[r,s]=t.propsOptions;let a=!1,o;if(e)for(let l in e){if(xs(l))continue;const c=e[l];let u;r&&tt(r,u=Cn(l))?!s||!s.includes(u)?n[u]=c:(o||(o={}))[u]=c:Qa(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Qe(n),c=o||ft;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Sl(r,l,f,c[f],t,!tt(c,f))}}return a}function Sl(t,e,n,i,r,s){const a=t[n];if(a!=null){const o=tt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&We(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=zs(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===_r(n))&&(i=!0))}return i}const $_=new WeakMap;function Td(t,e,n=!1){const i=n?$_:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,a={},o=[];let l=!1;if(!We(t)){const u=f=>{l=!0;const[h,_]=Td(f,e,!0);Bt(a,h),_&&o.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return ot(t)&&i.set(t,Hr),Hr;if(Ue(s))for(let u=0;u<s.length;u++){const f=Cn(s[u]);jc(f)&&(a[f]=ft)}else if(s)for(const u in s){const f=Cn(u);if(jc(f)){const h=s[u],_=a[f]=Ue(h)||We(h)?{type:h}:Bt({},h),S=_.type;let E=!1,p=!0;if(Ue(S))for(let d=0;d<S.length;++d){const C=S[d],v=We(C)&&C.name;if(v==="Boolean"){E=!0;break}else v==="String"&&(p=!1)}else E=We(S)&&S.name==="Boolean";_[0]=E,_[1]=p,(E||tt(_,"default"))&&o.push(f)}}const c=[a,o];return ot(t)&&i.set(t,c),c}function jc(t){return t[0]!=="$"&&!xs(t)}const uc=t=>t==="_"||t==="_ctx"||t==="$stable",fc=t=>Ue(t)?t.map(On):[On(t)],Y_=(t,e,n)=>{if(e._n)return e;const i=c_((...r)=>fc(e(...r)),n);return i._c=!1,i},bd=(t,e,n)=>{const i=t._ctx;for(const r in t){if(uc(r))continue;const s=t[r];if(We(s))e[r]=Y_(r,s,i);else if(s!=null){const a=fc(s);e[r]=()=>a}}},Ad=(t,e)=>{const n=fc(e);t.slots.default=()=>n},wd=(t,e,n)=>{for(const i in e)(n||!uc(i))&&(t[i]=e[i])},q_=(t,e,n)=>{const i=t.slots=Sd();if(t.vnode.shapeFlag&32){const r=e._;r?(wd(i,e,n),n&&Dh(i,"_",r,!0)):bd(e,i)}else e&&Ad(t,e)},j_=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,a=ft;if(i.shapeFlag&32){const o=e._;o?n&&o===1?s=!1:wd(r,e,n):(s=!e.$stable,bd(e,r)),a=e}else e&&(Ad(t,e),a={default:1});if(s)for(const o in r)!uc(o)&&a[o]==null&&delete r[o]},tn=eg;function K_(t){return Z_(t)}function Z_(t,e){const n=qa();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:_=Vn,insertStaticContent:S}=t,E=(y,O,P,H=null,X=null,J=null,se=void 0,ae=null,w=!!O.dynamicChildren)=>{if(y===O)return;y&&!ls(y,O)&&(H=Ce(y),me(y,X,J,!0),y=null),O.patchFlag===-2&&(w=!1,O.dynamicChildren=null);const{type:m,ref:g,shapeFlag:I}=O;switch(m){case Hs:p(y,O,P,H);break;case Ui:d(y,O,P,H);break;case bo:y==null&&C(O,P,H,se);break;case yn:W(y,O,P,H,X,J,se,ae,w);break;default:I&1?A(y,O,P,H,X,J,se,ae,w):I&6?ie(y,O,P,H,X,J,se,ae,w):(I&64||I&128)&&m.process(y,O,P,H,X,J,se,ae,w,Ge)}g!=null&&X?Es(g,y&&y.ref,J,O||y,!O):g==null&&y&&y.ref!=null&&Es(y.ref,null,J,y,!0)},p=(y,O,P,H)=>{if(y==null)i(O.el=o(O.children),P,H);else{const X=O.el=y.el;O.children!==y.children&&c(X,O.children)}},d=(y,O,P,H)=>{y==null?i(O.el=l(O.children||""),P,H):O.el=y.el},C=(y,O,P,H)=>{[y.el,y.anchor]=S(y.children,O,P,H,y.el,y.anchor)},v=({el:y,anchor:O},P,H)=>{let X;for(;y&&y!==O;)X=h(y),i(y,P,H),y=X;i(O,P,H)},x=({el:y,anchor:O})=>{let P;for(;y&&y!==O;)P=h(y),r(y),y=P;r(O)},A=(y,O,P,H,X,J,se,ae,w)=>{if(O.type==="svg"?se="svg":O.type==="math"&&(se="mathml"),y==null)T(O,P,H,X,J,se,ae,w);else{const m=y.el&&y.el._isVueCE?y.el:null;try{m&&m._beginPatch(),U(y,O,X,J,se,ae,w)}finally{m&&m._endPatch()}}},T=(y,O,P,H,X,J,se,ae)=>{let w,m;const{props:g,shapeFlag:I,transition:B,dirs:k}=y;if(w=y.el=a(y.type,J,g&&g.is,g),I&8?u(w,y.children):I&16&&D(y.children,w,null,H,X,To(y,J),se,ae),k&&Xi(y,null,H,"created"),b(w,y,y.scopeId,se,H),g){for(const z in g)z!=="value"&&!xs(z)&&s(w,z,null,g[z],J,H);"value"in g&&s(w,"value",null,g.value,J),(m=g.onVnodeBeforeMount)&&Nn(m,H,y)}k&&Xi(y,null,H,"beforeMount");const N=J_(X,B);N&&B.beforeEnter(w),i(w,O,P),((m=g&&g.onVnodeMounted)||N||k)&&tn(()=>{try{m&&Nn(m,H,y),N&&B.enter(w),k&&Xi(y,null,H,"mounted")}finally{}},X)},b=(y,O,P,H,X)=>{if(P&&_(y,P),H)for(let J=0;J<H.length;J++)_(y,H[J]);if(X){let J=X.subTree;if(O===J||Pd(J.type)&&(J.ssContent===O||J.ssFallback===O)){const se=X.vnode;b(y,se,se.scopeId,se.slotScopeIds,X.parent)}}},D=(y,O,P,H,X,J,se,ae,w=0)=>{for(let m=w;m<y.length;m++){const g=y[m]=ae?ri(y[m]):On(y[m]);E(null,g,O,P,H,X,J,se,ae)}},U=(y,O,P,H,X,J,se)=>{const ae=O.el=y.el;let{patchFlag:w,dynamicChildren:m,dirs:g}=O;w|=y.patchFlag&16;const I=y.props||ft,B=O.props||ft;let k;if(P&&$i(P,!1),(k=B.onVnodeBeforeUpdate)&&Nn(k,P,O,y),g&&Xi(O,y,P,"beforeUpdate"),P&&$i(P,!0),(I.innerHTML&&B.innerHTML==null||I.textContent&&B.textContent==null)&&u(ae,""),m?M(y.dynamicChildren,m,ae,P,H,To(O,X),J):se||q(y,O,ae,null,P,H,To(O,X),J,!1),w>0){if(w&16)L(ae,I,B,P,X);else if(w&2&&I.class!==B.class&&s(ae,"class",null,B.class,X),w&4&&s(ae,"style",I.style,B.style,X),w&8){const N=O.dynamicProps;for(let z=0;z<N.length;z++){const ce=N[z],re=I[ce],he=B[ce];(he!==re||ce==="value")&&s(ae,ce,re,he,X,P)}}w&1&&y.children!==O.children&&u(ae,O.children)}else!se&&m==null&&L(ae,I,B,P,X);((k=B.onVnodeUpdated)||g)&&tn(()=>{k&&Nn(k,P,O,y),g&&Xi(O,y,P,"updated")},H)},M=(y,O,P,H,X,J,se)=>{for(let ae=0;ae<O.length;ae++){const w=y[ae],m=O[ae],g=w.el&&(w.type===yn||!ls(w,m)||w.shapeFlag&198)?f(w.el):P;E(w,m,g,null,H,X,J,se,!0)}},L=(y,O,P,H,X)=>{if(O!==P){if(O!==ft)for(const J in O)!xs(J)&&!(J in P)&&s(y,J,O[J],null,X,H);for(const J in P){if(xs(J))continue;const se=P[J],ae=O[J];se!==ae&&J!=="value"&&s(y,J,ae,se,X,H)}"value"in P&&s(y,"value",O.value,P.value,X)}},W=(y,O,P,H,X,J,se,ae,w)=>{const m=O.el=y?y.el:o(""),g=O.anchor=y?y.anchor:o("");let{patchFlag:I,dynamicChildren:B,slotScopeIds:k}=O;k&&(ae=ae?ae.concat(k):k),y==null?(i(m,P,H),i(g,P,H),D(O.children||[],P,g,X,J,se,ae,w)):I>0&&I&64&&B&&y.dynamicChildren&&y.dynamicChildren.length===B.length?(M(y.dynamicChildren,B,P,X,J,se,ae),(O.key!=null||X&&O===X.subTree)&&Rd(y,O,!0)):q(y,O,P,g,X,J,se,ae,w)},ie=(y,O,P,H,X,J,se,ae,w)=>{O.slotScopeIds=ae,y==null?O.shapeFlag&512?X.ctx.activate(O,P,H,se,w):F(O,P,H,X,J,se,w):$(y,O,w)},F=(y,O,P,H,X,J,se)=>{const ae=y.component=lg(y,H,X);if(hd(y)&&(ae.ctx.renderer=Ge),cg(ae,!1,se),ae.asyncDep){if(X&&X.registerDep(ae,Y,se),!y.el){const w=ae.subTree=It(Ui);d(null,w,O,P),y.placeholder=w.el}}else Y(ae,y,O,P,X,J,se)},$=(y,O,P)=>{const H=O.component=y.component;if(z_(y,O,P))if(H.asyncDep&&!H.asyncResolved){Z(H,O,P);return}else H.next=O,H.update();else O.el=y.el,H.vnode=O},Y=(y,O,P,H,X,J,se)=>{const ae=()=>{if(y.isMounted){let{next:I,bu:B,u:k,parent:N,vnode:z}=y;{const ue=Cd(y);if(ue){I&&(I.el=z.el,Z(y,I,se)),ue.asyncDep.then(()=>{tn(()=>{y.isUnmounted||m()},X)});return}}let ce=I,re;$i(y,!1),I?(I.el=z.el,Z(y,I,se)):I=z,B&&vo(B),(re=I.props&&I.props.onVnodeBeforeUpdate)&&Nn(re,N,I,z),$i(y,!0);const he=Yc(y),we=y.subTree;y.subTree=he,E(we,he,f(we.el),Ce(we),y,X,J),I.el=he.el,ce===null&&V_(y,he.el),k&&tn(k,X),(re=I.props&&I.props.onVnodeUpdated)&&tn(()=>Nn(re,N,I,z),X)}else{let I;const{el:B,props:k}=O,{bm:N,m:z,parent:ce,root:re,type:he}=y,we=ys(O);$i(y,!1),N&&vo(N),!we&&(I=k&&k.onVnodeBeforeMount)&&Nn(I,ce,O),$i(y,!0);{re.ce&&re.ce._hasShadowRoot()&&re.ce._injectChildStyle(he,y.parent?y.parent.type:void 0);const ue=y.subTree=Yc(y);E(null,ue,P,H,y,X,J),O.el=ue.el}if(z&&tn(z,X),!we&&(I=k&&k.onVnodeMounted)){const ue=O;tn(()=>Nn(I,ce,ue),X)}(O.shapeFlag&256||ce&&ys(ce.vnode)&&ce.vnode.shapeFlag&256)&&y.a&&tn(y.a,X),y.isMounted=!0,O=P=H=null}};y.scope.on();const w=y.effect=new kh(ae);y.scope.off();const m=y.update=w.run.bind(w),g=y.job=w.runIfDirty.bind(w);g.i=y,g.id=y.uid,w.scheduler=()=>lc(g),$i(y,!0),m()},Z=(y,O,P)=>{O.component=y;const H=y.vnode.props;y.vnode=O,y.next=null,X_(y,O.props,H,P),j_(y,O.children,P),ui(),kc(y),fi()},q=(y,O,P,H,X,J,se,ae,w=!1)=>{const m=y&&y.children,g=y?y.shapeFlag:0,I=O.children,{patchFlag:B,shapeFlag:k}=O;if(B>0){if(B&128){le(m,I,P,H,X,J,se,ae,w);return}else if(B&256){oe(m,I,P,H,X,J,se,ae,w);return}}k&8?(g&16&&ge(m,X,J),I!==m&&u(P,I)):g&16?k&16?le(m,I,P,H,X,J,se,ae,w):ge(m,X,J,!0):(g&8&&u(P,""),k&16&&D(I,P,H,X,J,se,ae,w))},oe=(y,O,P,H,X,J,se,ae,w)=>{y=y||Hr,O=O||Hr;const m=y.length,g=O.length,I=Math.min(m,g);let B;for(B=0;B<I;B++){const k=O[B]=w?ri(O[B]):On(O[B]);E(y[B],k,P,null,X,J,se,ae,w)}m>g?ge(y,X,J,!0,!1,I):D(O,P,H,X,J,se,ae,w,I)},le=(y,O,P,H,X,J,se,ae,w)=>{let m=0;const g=O.length;let I=y.length-1,B=g-1;for(;m<=I&&m<=B;){const k=y[m],N=O[m]=w?ri(O[m]):On(O[m]);if(ls(k,N))E(k,N,P,null,X,J,se,ae,w);else break;m++}for(;m<=I&&m<=B;){const k=y[I],N=O[B]=w?ri(O[B]):On(O[B]);if(ls(k,N))E(k,N,P,null,X,J,se,ae,w);else break;I--,B--}if(m>I){if(m<=B){const k=B+1,N=k<g?O[k].el:H;for(;m<=B;)E(null,O[m]=w?ri(O[m]):On(O[m]),P,N,X,J,se,ae,w),m++}}else if(m>B)for(;m<=I;)me(y[m],X,J,!0),m++;else{const k=m,N=m,z=new Map;for(m=N;m<=B;m++){const Te=O[m]=w?ri(O[m]):On(O[m]);Te.key!=null&&z.set(Te.key,m)}let ce,re=0;const he=B-N+1;let we=!1,ue=0;const it=new Array(he);for(m=0;m<he;m++)it[m]=0;for(m=k;m<=I;m++){const Te=y[m];if(re>=he){me(Te,X,J,!0);continue}let Ee;if(Te.key!=null)Ee=z.get(Te.key);else for(ce=N;ce<=B;ce++)if(it[ce-N]===0&&ls(Te,O[ce])){Ee=ce;break}Ee===void 0?me(Te,X,J,!0):(it[Ee-N]=m+1,Ee>=ue?ue=Ee:we=!0,E(Te,O[Ee],P,null,X,J,se,ae,w),re++)}const He=we?Q_(it):Hr;for(ce=He.length-1,m=he-1;m>=0;m--){const Te=N+m,Ee=O[Te],Ae=O[Te+1],Ke=Te+1<g?Ae.el||Ld(Ae):H;it[m]===0?E(null,Ee,P,Ke,X,J,se,ae,w):we&&(ce<0||m!==He[ce]?de(Ee,P,Ke,2):ce--)}}},de=(y,O,P,H,X=null)=>{const{el:J,type:se,transition:ae,children:w,shapeFlag:m}=y;if(m&6){de(y.component.subTree,O,P,H);return}if(m&128){y.suspense.move(O,P,H);return}if(m&64){se.move(y,O,P,Ge);return}if(se===yn){i(J,O,P);for(let I=0;I<w.length;I++)de(w[I],O,P,H);i(y.anchor,O,P);return}if(se===bo){v(y,O,P);return}if(H!==2&&m&1&&ae)if(H===0)ae.beforeEnter(J),i(J,O,P),tn(()=>ae.enter(J),X);else{const{leave:I,delayLeave:B,afterLeave:k}=ae,N=()=>{y.ctx.isUnmounted?r(J):i(J,O,P)},z=()=>{J._isLeaving&&J[g_](!0),I(J,()=>{N(),k&&k()})};B?B(J,N,z):z()}else i(J,O,P)},me=(y,O,P,H=!1,X=!1)=>{const{type:J,props:se,ref:ae,children:w,dynamicChildren:m,shapeFlag:g,patchFlag:I,dirs:B,cacheIndex:k,memo:N}=y;if(I===-2&&(X=!1),ae!=null&&(ui(),Es(ae,null,P,y,!0),fi()),k!=null&&(O.renderCache[k]=void 0),g&256){O.ctx.deactivate(y);return}const z=g&1&&B,ce=!ys(y);let re;if(ce&&(re=se&&se.onVnodeBeforeUnmount)&&Nn(re,O,y),g&6)fe(y.component,P,H);else{if(g&128){y.suspense.unmount(P,H);return}z&&Xi(y,null,O,"beforeUnmount"),g&64?y.type.remove(y,O,P,Ge,H):m&&!m.hasOnce&&(J!==yn||I>0&&I&64)?ge(m,O,P,!1,!0):(J===yn&&I&384||!X&&g&16)&&ge(w,O,P),H&&Pe(y)}const he=N!=null&&k==null;(ce&&(re=se&&se.onVnodeUnmounted)||z||he)&&tn(()=>{re&&Nn(re,O,y),z&&Xi(y,null,O,"unmounted"),he&&(y.el=null)},P)},Pe=y=>{const{type:O,el:P,anchor:H,transition:X}=y;if(O===yn){te(P,H);return}if(O===bo){x(y);return}const J=()=>{r(P),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(y.shapeFlag&1&&X&&!X.persisted){const{leave:se,delayLeave:ae}=X,w=()=>se(P,J);ae?ae(y.el,J,w):w()}else J()},te=(y,O)=>{let P;for(;y!==O;)P=h(y),r(y),y=P;r(O)},fe=(y,O,P)=>{const{bum:H,scope:X,job:J,subTree:se,um:ae,m:w,a:m}=y;Kc(w),Kc(m),H&&vo(H),X.stop(),J&&(J.flags|=8,me(se,y,O,P)),ae&&tn(ae,O),tn(()=>{y.isUnmounted=!0},O)},ge=(y,O,P,H=!1,X=!1,J=0)=>{for(let se=J;se<y.length;se++)me(y[se],O,P,H,X)},Ce=y=>{if(y.shapeFlag&6)return Ce(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const O=h(y.anchor||y.el),P=O&&O[m_];return P?h(P):O};let be=!1;const Se=(y,O,P)=>{let H;y==null?O._vnode&&(me(O._vnode,null,null,!0),H=O._vnode.component):E(O._vnode||null,y,O,null,null,null,P),O._vnode=y,be||(be=!0,kc(H),ad(),be=!1)},Ge={p:E,um:me,m:de,r:Pe,mt:F,mc:D,pc:q,pbc:M,n:Ce,o:t};return{render:Se,hydrate:void 0,createApp:O_(Se)}}function To({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function $i({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function J_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Rd(t,e,n=!1){const i=t.children,r=e.children;if(Ue(i)&&Ue(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=ri(r[s]),o.el=a.el),!n&&o.patchFlag!==-2&&Rd(a,o)),o.type===Hs&&(o.patchFlag===-1&&(o=r[s]=ri(o)),o.el=a.el),o.type===Ui&&!o.el&&(o.el=a.el)}}function Q_(t){const e=t.slice(),n=[0];let i,r,s,a,o;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,t[n[o]]<c?s=o+1:a=o;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=e[a];return n}function Cd(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Cd(e)}function Kc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Ld(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Ld(e.subTree):null}const Pd=t=>t.__isSuspense;function eg(t,e){e&&e.pendingBranch?Ue(t)?e.effects.push(...t):e.effects.push(t):l_(t)}const yn=Symbol.for("v-fgt"),Hs=Symbol.for("v-txt"),Ui=Symbol.for("v-cmt"),bo=Symbol.for("v-stc"),bs=[];let cn=null;function Pn(t=!1){bs.push(cn=t?null:[])}function tg(){bs.pop(),cn=bs[bs.length-1]||null}let Is=1;function Na(t,e=!1){Is+=t,t<0&&cn&&e&&(cn.hasOnce=!0)}function Id(t){return t.dynamicChildren=Is>0?cn||Hr:null,tg(),Is>0&&cn&&cn.push(t),t}function di(t,e,n,i,r,s){return Id(Ne(t,e,n,i,r,s,!0))}function Nd(t,e,n,i,r){return Id(It(t,e,n,i,r,!0))}function Da(t){return t?t.__v_isVNode===!0:!1}function ls(t,e){return t.type===e.type&&t.key===e.key}const Dd=({key:t})=>t??null,ya=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?yt(t)||vt(t)||We(t)?{i:Hn,r:t,k:e,f:!!n}:t:null);function Ne(t,e=null,n=null,i=0,r=null,s=t===yn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Dd(e),ref:e&&ya(e),scopeId:ld,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Hn};return o?(hc(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=yt(n)?8:16),Is>0&&!a&&cn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&cn.push(l),l}const It=ng;function ng(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===R_)&&(t=Ui),Da(t)){const o=qr(t,e,!0);return n&&hc(o,n),Is>0&&!s&&cn&&(o.shapeFlag&6?cn[cn.indexOf(t)]=o:cn.push(o)),o.patchFlag=-2,o}if(dg(t)&&(t=t.__vccOpts),e){e=ig(e);let{class:o,style:l}=e;o&&!yt(o)&&(e.class=Zl(o)),ot(l)&&(ja(l)&&!Ue(l)&&(l=Bt({},l)),e.style=Kl(l))}const a=yt(t)?1:Pd(t)?128:__(t)?64:ot(t)?4:We(t)?2:0;return Ne(t,e,n,i,r,a,s,!0)}function ig(t){return t?ja(t)||Ed(t)?Bt({},t):t:null}function qr(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=t,c=e?sg(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Dd(c),ref:e&&e.ref?n&&s?Ue(s)?s.concat(ya(e)):[s,ya(e)]:ya(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==yn?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&qr(t.ssContent),ssFallback:t.ssFallback&&qr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&cc(u,l.clone(u)),u}function rg(t=" ",e=0){return It(Hs,null,t,e)}function eo(t="",e=!1){return e?(Pn(),Nd(Ui,null,t)):It(Ui,null,t)}function On(t){return t==null||typeof t=="boolean"?It(Ui):Ue(t)?It(yn,null,t.slice()):Da(t)?ri(t):It(Hs,null,String(t))}function ri(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:qr(t)}function hc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ue(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),hc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Ed(e)?e._ctx=Hn:r===3&&Hn&&(Hn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else We(e)?(e={default:e,_ctx:Hn},n=32):(e=String(e),i&64?(n=16,e=[rg(e)]):n=8);t.children=e,t.shapeFlag|=n}function sg(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Zl([e.class,i.class]));else if(r==="style")e.style=Kl([e.style,i.style]);else if(Wa(r)){const s=e[r],a=i[r];a&&s!==a&&!(Ue(s)&&s.includes(a))?e[r]=s?[].concat(s,a):a:a==null&&s==null&&!Xa(r)&&(e[r]=a)}else r!==""&&(e[r]=i[r])}return e}function Nn(t,e,n,i=null){Xn(t,e,7,[n,i])}const ag=gd();let og=0;function lg(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||ag,s={uid:og++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Bh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Td(i,r),emitsOptions:vd(i,r),emit:null,emitted:null,propsDefaults:ft,inheritAttrs:i.inheritAttrs,ctx:ft,data:ft,props:ft,attrs:ft,slots:ft,refs:ft,setupState:ft,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=B_.bind(null,s),t.ce&&t.ce(s),s}let Zt=null;const hr=()=>Zt||Hn;let Ua,El;{const t=qa(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Ua=e("__VUE_INSTANCE_SETTERS__",n=>Zt=n),El=e("__VUE_SSR_SETTERS__",n=>Ns=n)}const zs=t=>{const e=Zt;return Ua(t),t.scope.on(),()=>{t.scope.off(),Ua(e)}},Zc=()=>{Zt&&Zt.scope.off(),Ua(null)};function Ud(t){return t.vnode.shapeFlag&4}let Ns=!1;function cg(t,e=!1,n=!1){e&&El(e);const{props:i,children:r}=t.vnode,s=Ud(t);W_(t,i,s,e),q_(t,r,n||e);const a=s?ug(t,e):void 0;return e&&El(!1),a}function ug(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,C_);const{setup:i}=n;if(i){ui();const r=t.setupContext=i.length>1?hg(t):null,s=zs(t),a=Gs(i,t,0,[t.props,r]),o=Lh(a);if(fi(),s(),(o||t.sp)&&!ys(t)&&fd(t),o){if(a.then(Zc,Zc),e)return a.then(l=>{Jc(t,l)}).catch(l=>{Ka(l,t,0)});t.asyncDep=a}else Jc(t,a)}else Od(t)}function Jc(t,e,n){We(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ot(e)&&(t.setupState=nd(e)),Od(t)}function Od(t,e,n){const i=t.type;t.render||(t.render=i.render||Vn);{const r=zs(t);ui();try{L_(t)}finally{fi(),r()}}}const fg={get(t,e){return Vt(t,"get",""),t[e]}};function hg(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,fg),slots:t.slots,emit:t.emit,expose:e}}function dc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(nd(oc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ts)return Ts[n](t)},has(e,n){return n in e||n in Ts}})):t.proxy}function dg(t){return We(t)&&"__vccOpts"in t}const ln=(t,e)=>i_(t,e,Ns);function Fd(t,e,n){try{Na(-1);const i=arguments.length;return i===2?ot(e)&&!Ue(e)?Da(e)?It(t,null,[e]):It(t,e):It(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Da(n)&&(n=[n]),It(t,e,n))}finally{Na(1)}}const pg="3.5.34";/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yl;const Qc=typeof window<"u"&&window.trustedTypes;if(Qc)try{yl=Qc.createPolicy("vue",{createHTML:t=>t})}catch{}const Bd=yl?t=>yl.createHTML(t):t=>t,mg="http://www.w3.org/2000/svg",_g="http://www.w3.org/1998/Math/MathML",ii=typeof document<"u"?document:null,eu=ii&&ii.createElement("template"),gg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?ii.createElementNS(mg,t):e==="mathml"?ii.createElementNS(_g,t):n?ii.createElement(t,{is:n}):ii.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>ii.createTextNode(t),createComment:t=>ii.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ii.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const a=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{eu.innerHTML=Bd(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const o=eu.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},vg=Symbol("_vtc");function xg(t,e,n){const i=t[vg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const tu=Symbol("_vod"),Mg=Symbol("_vsh"),Sg=Symbol(""),Eg=/(?:^|;)\s*display\s*:/;function yg(t,e,n){const i=t.style,r=yt(n);let s=!1;if(n&&!r){if(e)if(yt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();n[o]==null&&vs(i,o,"")}else for(const a in e)n[a]==null&&vs(i,a,"");for(const a in n){a==="display"&&(s=!0);const o=n[a];o!=null?bg(t,a,!yt(e)&&e?e[a]:void 0,o)||vs(i,a,o):vs(i,a,"")}}else if(r){if(e!==n){const a=i[Sg];a&&(n+=";"+a),i.cssText=n,s=Eg.test(n)}}else e&&t.removeAttribute("style");tu in t&&(t[tu]=s?i.display:"",t[Mg]&&(i.display="none"))}const nu=/\s*!important$/;function vs(t,e,n){if(Ue(n))n.forEach(i=>vs(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Tg(t,e);nu.test(n)?t.setProperty(_r(i),n.replace(nu,""),"important"):t[i]=n}}const iu=["Webkit","Moz","ms"],Ao={};function Tg(t,e){const n=Ao[e];if(n)return n;let i=Cn(e);if(i!=="filter"&&i in t)return Ao[e]=i;i=Nh(i);for(let r=0;r<iu.length;r++){const s=iu[r]+i;if(s in t)return Ao[e]=s}return e}function bg(t,e,n,i){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&yt(i)&&n===i}const ru="http://www.w3.org/1999/xlink";function su(t,e,n,i,r,s=Rm(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ru,e.slice(6,e.length)):t.setAttributeNS(ru,e,n):n==null||s&&!Uh(n)?t.removeAttribute(e):t.setAttribute(e,s?"":gn(n)?String(n):n)}function au(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Bd(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=Uh(n):n==null&&o==="string"?(n="",a=!0):o==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(r||e)}function Ag(t,e,n,i){t.addEventListener(e,n,i)}function wg(t,e,n,i){t.removeEventListener(e,n,i)}const ou=Symbol("_vei");function Rg(t,e,n,i,r=null){const s=t[ou]||(t[ou]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Cg(e);if(i){const c=s[e]=Ig(i,r);Ag(t,o,c,l)}else a&&(wg(t,o,a,l),s[e]=void 0)}}const lu=/(?:Once|Passive|Capture)$/;function Cg(t){let e;if(lu.test(t)){e={};let i;for(;i=t.match(lu);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):_r(t.slice(2)),e]}let wo=0;const Lg=Promise.resolve(),Pg=()=>wo||(Lg.then(()=>wo=0),wo=Date.now());function Ig(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Xn(Ng(i,n.value),e,5,[i])};return n.value=t,n.attached=Pg(),n}function Ng(t,e){if(Ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const cu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Dg=(t,e,n,i,r,s)=>{const a=r==="svg";e==="class"?xg(t,i,a):e==="style"?yg(t,n,i):Wa(e)?Xa(e)||Rg(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ug(t,e,i,a))?(au(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&su(t,e,i,a,s,e!=="value")):t._isVueCE&&(Og(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!yt(i)))?au(t,Cn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),su(t,e,i,a))};function Ug(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&cu(e)&&We(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return cu(e)&&yt(n)?!1:e in t}function Og(t,e){const n=t._def.props;if(!n)return!1;const i=Cn(e);return Array.isArray(n)?n.some(r=>Cn(r)===i):Object.keys(n).some(r=>Cn(r)===i)}const Fg=["ctrl","shift","alt","meta"],Bg={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Fg.some(n=>t[`${n}Key`]&&!e.includes(n))},Gd=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(r,...s)=>{for(let a=0;a<e.length;a++){const o=Bg[e[a]];if(o&&o(r,e))return}return t(r,...s)})},Gg=Bt({patchProp:Dg},gg);let uu;function kg(){return uu||(uu=K_(Gg))}const Hg=(...t)=>{const e=kg().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Vg(i);if(!r)return;const s=e._component;!We(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=n(r,!1,zg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function zg(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Vg(t){return yt(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let kd;const to=t=>kd=t,Hd=Symbol();function Tl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var As;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(As||(As={}));function Wg(){const t=Ql(!0),e=t.run(()=>nn({}));let n=[],i=[];const r=oc({install(s){to(r),r._a=s,s.provide(Hd,r),s.config.globalProperties.$pinia=r,i.forEach(a=>n.push(a)),i=[]},use(s){return this._a?n.push(s):i.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const zd=()=>{};function fu(t,e,n,i=zd){t.push(e);const r=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),i())};return!n&&Gh()&&Lm(r),r}function xr(t,...e){t.slice().forEach(n=>{n(...e)})}const Xg=t=>t(),hu=Symbol(),Ro=Symbol();function bl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];Tl(r)&&Tl(i)&&t.hasOwnProperty(n)&&!vt(i)&&!Li(i)?t[n]=bl(r,i):t[n]=i}return t}const $g=Symbol();function Yg(t){return!Tl(t)||!t.hasOwnProperty($g)}const{assign:Ti}=Object;function qg(t){return!!(vt(t)&&t.effect)}function jg(t,e,n,i){const{state:r,actions:s,getters:a}=e,o=n.state.value[t];let l;function c(){o||(n.state.value[t]=r?r():{});const u=Qm(n.state.value[t]);return Ti(u,s,Object.keys(a||{}).reduce((f,h)=>(f[h]=oc(ln(()=>{to(n);const _=n._s.get(t);return a[h].call(_,_)})),f),{}))}return l=Vd(t,c,e,n,i,!0),l}function Vd(t,e,n={},i,r,s){let a;const o=Ti({actions:{}},n),l={deep:!0};let c,u,f=[],h=[],_;const S=i.state.value[t];!s&&!S&&(i.state.value[t]={});let E;function p(D){let U;c=u=!1,typeof D=="function"?(D(i.state.value[t]),U={type:As.patchFunction,storeId:t,events:_}):(bl(i.state.value[t],D),U={type:As.patchObject,payload:D,storeId:t,events:_});const M=E=Symbol();rd().then(()=>{E===M&&(c=!0)}),u=!0,xr(f,U,i.state.value[t])}const d=s?function(){const{state:U}=n,M=U?U():{};this.$patch(L=>{Ti(L,M)})}:zd;function C(){a.stop(),f=[],h=[],i._s.delete(t)}const v=(D,U="")=>{if(hu in D)return D[Ro]=U,D;const M=function(){to(i);const L=Array.from(arguments),W=[],ie=[];function F(Z){W.push(Z)}function $(Z){ie.push(Z)}xr(h,{args:L,name:M[Ro],store:A,after:F,onError:$});let Y;try{Y=D.apply(this&&this.$id===t?this:A,L)}catch(Z){throw xr(ie,Z),Z}return Y instanceof Promise?Y.then(Z=>(xr(W,Z),Z)).catch(Z=>(xr(ie,Z),Promise.reject(Z))):(xr(W,Y),Y)};return M[hu]=!0,M[Ro]=U,M},x={_p:i,$id:t,$onAction:fu.bind(null,h),$patch:p,$reset:d,$subscribe(D,U={}){const M=fu(f,D,U.detached,()=>L()),L=a.run(()=>ci(()=>i.state.value[t],W=>{(U.flush==="sync"?u:c)&&D({storeId:t,type:As.direct,events:_},W)},Ti({},l,U)));return M},$dispose:C},A=ts(x);i._s.set(t,A);const b=(i._a&&i._a.runWithContext||Xg)(()=>i._e.run(()=>(a=Ql()).run(()=>e({action:v}))));for(const D in b){const U=b[D];if(vt(U)&&!qg(U)||Li(U))s||(S&&Yg(U)&&(vt(U)?U.value=S[D]:bl(U,S[D])),i.state.value[t][D]=U);else if(typeof U=="function"){const M=v(U,D);b[D]=M,o.actions[D]=U}}return Ti(A,b),Ti(Qe(A),b),Object.defineProperty(A,"$state",{get:()=>i.state.value[t],set:D=>{p(U=>{Ti(U,D)})}}),i._p.forEach(D=>{Ti(A,a.run(()=>D({store:A,app:i._a,pinia:i,options:o})))}),S&&s&&n.hydrate&&n.hydrate(A.$state,S),c=!0,u=!0,A}/*! #__NO_SIDE_EFFECTS__ */function Wd(t,e,n){let i,r;const s=typeof e=="function";typeof t=="string"?(i=t,r=s?n:e):(r=t,i=t.id);function a(o,l){const c=f_();return o=o||(c?Wr(Hd,null):null),o&&to(o),o=kd,o._s.has(i)||(s?Vd(i,e,r,o):jg(i,r,o)),o._s.get(i)}return a.$id=i,a}/*!
  * shared v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function Kg(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const Oa=typeof window<"u",Gi=(t,e=!1)=>e?Symbol.for(t):Symbol(t),Zg=(t,e,n)=>Jg({l:t,k:e,s:n}),Jg=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Et=t=>typeof t=="number"&&isFinite(t),Qg=t=>$d(t)==="[object Date]",Oi=t=>$d(t)==="[object RegExp]",no=t=>Fe(t)&&Object.keys(t).length===0,Ot=Object.assign,ev=Object.create,at=(t=null)=>ev(t);let du;const ai=()=>du||(du=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:at());function pu(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function mu(t){return t.replace(/&(?![a-zA-Z0-9#]{2,6};)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function tv(t){return t=t.replace(/(\w+)\s*=\s*"([^"]*)"/g,(i,r,s)=>`${r}="${mu(s)}"`),t=t.replace(/(\w+)\s*=\s*'([^']*)'/g,(i,r,s)=>`${r}='${mu(s)}'`),/\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(t)&&(t=t.replace(/(\s+)(on)(\w+\s*=)/gi,"$1&#111;n$3")),[/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,/(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(i=>{t=t.replace(i,"$1javascript&#58;")}),t}const nv=Object.prototype.hasOwnProperty;function wn(t,e){return nv.call(t,e)}const pt=Array.isArray,ht=t=>typeof t=="function",ve=t=>typeof t=="string",je=t=>typeof t=="boolean",et=t=>t!==null&&typeof t=="object",iv=t=>et(t)&&ht(t.then)&&ht(t.catch),Xd=Object.prototype.toString,$d=t=>Xd.call(t),Fe=t=>{if(!et(t))return!1;const e=Object.getPrototypeOf(t);return e===null||e.constructor===Object},rv=t=>t==null?"":pt(t)||Fe(t)&&t.toString===Xd?JSON.stringify(t,null,2):String(t);function sv(t,e=""){return t.reduce((n,i,r)=>r===0?n+i:n+e+i,"")}function io(t){let e=t;return()=>++e}const Js=t=>!et(t)||pt(t);function Ta(t,e){if(Js(t)||Js(e))throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:i,des:r}=n.pop();Object.keys(i).forEach(s=>{s!=="__proto__"&&(et(i[s])&&!et(r[s])&&(r[s]=Array.isArray(i[s])?[]:at()),Js(r[s])||Js(i[s])?r[s]=i[s]:n.push({src:i[s],des:r[s]}))})}}/*!
  * message-compiler v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function av(t,e,n){return{line:t,column:e,offset:n}}function Fa(t,e,n){return{start:t,end:e}}const ov=/\{([0-9a-zA-Z]+)\}/g;function Yd(t,...e){return e.length===1&&lv(e[0])&&(e=e[0]),(!e||!e.hasOwnProperty)&&(e={}),t.replace(ov,(n,i)=>e.hasOwnProperty(i)?e[i]:"")}const qd=Object.assign,_u=t=>typeof t=="string",lv=t=>t!==null&&typeof t=="object";function jd(t,e=""){return t.reduce((n,i,r)=>r===0?n+i:n+e+i,"")}const pc={USE_MODULO_SYNTAX:1,__EXTEND_POINT__:2},cv={[pc.USE_MODULO_SYNTAX]:"Use modulo before '{{0}}'."};function uv(t,e,...n){const i=Yd(cv[t],...n||[]),r={message:String(i),code:t};return e&&(r.location=e),r}const Ie={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},fv={[Ie.EXPECTED_TOKEN]:"Expected token: '{0}'",[Ie.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[Ie.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[Ie.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[Ie.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[Ie.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[Ie.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[Ie.EMPTY_PLACEHOLDER]:"Empty placeholder",[Ie.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[Ie.INVALID_LINKED_FORMAT]:"Invalid linked format",[Ie.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[Ie.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[Ie.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[Ie.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[Ie.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[Ie.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function ns(t,e,n={}){const{domain:i,messages:r,args:s}=n,a=Yd((r||fv)[t]||"",...s||[]),o=new SyntaxError(String(a));return o.code=t,e&&(o.location=e),o.domain=i,o}function hv(t){throw t}const jn=" ",dv="\r",Yt=`
`,pv="\u2028",mv="\u2029";function _v(t){const e=t;let n=0,i=1,r=1,s=0;const a=b=>e[b]===dv&&e[b+1]===Yt,o=b=>e[b]===Yt,l=b=>e[b]===mv,c=b=>e[b]===pv,u=b=>a(b)||o(b)||l(b)||c(b),f=()=>n,h=()=>i,_=()=>r,S=()=>s,E=b=>a(b)||l(b)||c(b)?Yt:e[b],p=()=>E(n),d=()=>E(n+s);function C(){return s=0,u(n)&&(i++,r=0),a(n)&&n++,n++,r++,e[n]}function v(){return a(n+s)&&s++,s++,e[n+s]}function x(){n=0,i=1,r=1,s=0}function A(b=0){s=b}function T(){const b=n+s;for(;b!==n;)C();s=0}return{index:f,line:h,column:_,peekOffset:S,charAt:E,currentChar:p,currentPeek:d,next:C,peek:v,reset:x,resetPeek:A,skipToPeek:T}}const gi=void 0,gv=".",gu="'",vv="tokenizer";function xv(t,e={}){const n=e.location!==!1,i=_v(t),r=()=>i.index(),s=()=>av(i.line(),i.column(),i.index()),a=s(),o=r(),l={currentType:14,offset:o,startLoc:a,endLoc:a,lastType:14,lastOffset:o,lastStartLoc:a,lastEndLoc:a,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function f(w,m,g,...I){const B=c();if(m.column+=g,m.offset+=g,u){const k=n?Fa(B.startLoc,m):null,N=ns(w,k,{domain:vv,args:I});u(N)}}function h(w,m,g){w.endLoc=s(),w.currentType=m;const I={type:m};return n&&(I.loc=Fa(w.startLoc,w.endLoc)),g!=null&&(I.value=g),I}const _=w=>h(w,14);function S(w,m){return w.currentChar()===m?(w.next(),m):(f(Ie.EXPECTED_TOKEN,s(),0,m),"")}function E(w){let m="";for(;w.currentPeek()===jn||w.currentPeek()===Yt;)m+=w.currentPeek(),w.peek();return m}function p(w){const m=E(w);return w.skipToPeek(),m}function d(w){if(w===gi)return!1;const m=w.charCodeAt(0);return m>=97&&m<=122||m>=65&&m<=90||m===95}function C(w){if(w===gi)return!1;const m=w.charCodeAt(0);return m>=48&&m<=57}function v(w,m){const{currentType:g}=m;if(g!==2)return!1;E(w);const I=d(w.currentPeek());return w.resetPeek(),I}function x(w,m){const{currentType:g}=m;if(g!==2)return!1;E(w);const I=w.currentPeek()==="-"?w.peek():w.currentPeek(),B=C(I);return w.resetPeek(),B}function A(w,m){const{currentType:g}=m;if(g!==2)return!1;E(w);const I=w.currentPeek()===gu;return w.resetPeek(),I}function T(w,m){const{currentType:g}=m;if(g!==8)return!1;E(w);const I=w.currentPeek()===".";return w.resetPeek(),I}function b(w,m){const{currentType:g}=m;if(g!==9)return!1;E(w);const I=d(w.currentPeek());return w.resetPeek(),I}function D(w,m){const{currentType:g}=m;if(!(g===8||g===12))return!1;E(w);const I=w.currentPeek()===":";return w.resetPeek(),I}function U(w,m){const{currentType:g}=m;if(g!==10)return!1;const I=()=>{const k=w.currentPeek();return k==="{"?d(w.peek()):k==="@"||k==="%"||k==="|"||k===":"||k==="."||k===jn||!k?!1:k===Yt?(w.peek(),I()):W(w,!1)},B=I();return w.resetPeek(),B}function M(w){E(w);const m=w.currentPeek()==="|";return w.resetPeek(),m}function L(w){const m=E(w),g=w.currentPeek()==="%"&&w.peek()==="{";return w.resetPeek(),{isModulo:g,hasSpace:m.length>0}}function W(w,m=!0){const g=(B=!1,k="",N=!1)=>{const z=w.currentPeek();return z==="{"?k==="%"?!1:B:z==="@"||!z?k==="%"?!0:B:z==="%"?(w.peek(),g(B,"%",!0)):z==="|"?k==="%"||N?!0:!(k===jn||k===Yt):z===jn?(w.peek(),g(!0,jn,N)):z===Yt?(w.peek(),g(!0,Yt,N)):!0},I=g();return m&&w.resetPeek(),I}function ie(w,m){const g=w.currentChar();return g===gi?gi:m(g)?(w.next(),g):null}function F(w){const m=w.charCodeAt(0);return m>=97&&m<=122||m>=65&&m<=90||m>=48&&m<=57||m===95||m===36}function $(w){return ie(w,F)}function Y(w){const m=w.charCodeAt(0);return m>=97&&m<=122||m>=65&&m<=90||m>=48&&m<=57||m===95||m===36||m===45}function Z(w){return ie(w,Y)}function q(w){const m=w.charCodeAt(0);return m>=48&&m<=57}function oe(w){return ie(w,q)}function le(w){const m=w.charCodeAt(0);return m>=48&&m<=57||m>=65&&m<=70||m>=97&&m<=102}function de(w){return ie(w,le)}function me(w){let m="",g="";for(;m=oe(w);)g+=m;return g}function Pe(w){p(w);const m=w.currentChar();return m!=="%"&&f(Ie.EXPECTED_TOKEN,s(),0,m),w.next(),"%"}function te(w){let m="";for(;;){const g=w.currentChar();if(g==="{"||g==="}"||g==="@"||g==="|"||!g)break;if(g==="%")if(W(w))m+=g,w.next();else break;else if(g===jn||g===Yt)if(W(w))m+=g,w.next();else{if(M(w))break;m+=g,w.next()}else m+=g,w.next()}return m}function fe(w){p(w);let m="",g="";for(;m=Z(w);)g+=m;return w.currentChar()===gi&&f(Ie.UNTERMINATED_CLOSING_BRACE,s(),0),g}function ge(w){p(w);let m="";return w.currentChar()==="-"?(w.next(),m+=`-${me(w)}`):m+=me(w),w.currentChar()===gi&&f(Ie.UNTERMINATED_CLOSING_BRACE,s(),0),m}function Ce(w){return w!==gu&&w!==Yt}function be(w){p(w),S(w,"'");let m="",g="";for(;m=ie(w,Ce);)m==="\\"?g+=Se(w):g+=m;const I=w.currentChar();return I===Yt||I===gi?(f(Ie.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,s(),0),I===Yt&&(w.next(),S(w,"'")),g):(S(w,"'"),g)}function Se(w){const m=w.currentChar();switch(m){case"\\":case"'":return w.next(),`\\${m}`;case"u":return Ge(w,m,4);case"U":return Ge(w,m,6);default:return f(Ie.UNKNOWN_ESCAPE_SEQUENCE,s(),0,m),""}}function Ge(w,m,g){S(w,m);let I="";for(let B=0;B<g;B++){const k=de(w);if(!k){f(Ie.INVALID_UNICODE_ESCAPE_SEQUENCE,s(),0,`\\${m}${I}${w.currentChar()}`);break}I+=k}return`\\${m}${I}`}function Le(w){return w!=="{"&&w!=="}"&&w!==jn&&w!==Yt}function y(w){p(w);let m="",g="";for(;m=ie(w,Le);)g+=m;return g}function O(w){let m="",g="";for(;m=$(w);)g+=m;return g}function P(w){const m=g=>{const I=w.currentChar();return I==="{"||I==="%"||I==="@"||I==="|"||I==="("||I===")"||!I||I===jn?g:(g+=I,w.next(),m(g))};return m("")}function H(w){p(w);const m=S(w,"|");return p(w),m}function X(w,m){let g=null;switch(w.currentChar()){case"{":return m.braceNest>=1&&f(Ie.NOT_ALLOW_NEST_PLACEHOLDER,s(),0),w.next(),g=h(m,2,"{"),p(w),m.braceNest++,g;case"}":return m.braceNest>0&&m.currentType===2&&f(Ie.EMPTY_PLACEHOLDER,s(),0),w.next(),g=h(m,3,"}"),m.braceNest--,m.braceNest>0&&p(w),m.inLinked&&m.braceNest===0&&(m.inLinked=!1),g;case"@":return m.braceNest>0&&f(Ie.UNTERMINATED_CLOSING_BRACE,s(),0),g=J(w,m)||_(m),m.braceNest=0,g;default:{let B=!0,k=!0,N=!0;if(M(w))return m.braceNest>0&&f(Ie.UNTERMINATED_CLOSING_BRACE,s(),0),g=h(m,1,H(w)),m.braceNest=0,m.inLinked=!1,g;if(m.braceNest>0&&(m.currentType===5||m.currentType===6||m.currentType===7))return f(Ie.UNTERMINATED_CLOSING_BRACE,s(),0),m.braceNest=0,se(w,m);if(B=v(w,m))return g=h(m,5,fe(w)),p(w),g;if(k=x(w,m))return g=h(m,6,ge(w)),p(w),g;if(N=A(w,m))return g=h(m,7,be(w)),p(w),g;if(!B&&!k&&!N)return g=h(m,13,y(w)),f(Ie.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,g.value),p(w),g;break}}return g}function J(w,m){const{currentType:g}=m;let I=null;const B=w.currentChar();switch((g===8||g===9||g===12||g===10)&&(B===Yt||B===jn)&&f(Ie.INVALID_LINKED_FORMAT,s(),0),B){case"@":return w.next(),I=h(m,8,"@"),m.inLinked=!0,I;case".":return p(w),w.next(),h(m,9,".");case":":return p(w),w.next(),h(m,10,":");default:return M(w)?(I=h(m,1,H(w)),m.braceNest=0,m.inLinked=!1,I):T(w,m)||D(w,m)?(p(w),J(w,m)):b(w,m)?(p(w),h(m,12,O(w))):U(w,m)?(p(w),B==="{"?X(w,m)||I:h(m,11,P(w))):(g===8&&f(Ie.INVALID_LINKED_FORMAT,s(),0),m.braceNest=0,m.inLinked=!1,se(w,m))}}function se(w,m){let g={type:14};if(m.braceNest>0)return X(w,m)||_(m);if(m.inLinked)return J(w,m)||_(m);switch(w.currentChar()){case"{":return X(w,m)||_(m);case"}":return f(Ie.UNBALANCED_CLOSING_BRACE,s(),0),w.next(),h(m,3,"}");case"@":return J(w,m)||_(m);default:{if(M(w))return g=h(m,1,H(w)),m.braceNest=0,m.inLinked=!1,g;const{isModulo:B,hasSpace:k}=L(w);if(B)return k?h(m,0,te(w)):h(m,4,Pe(w));if(W(w))return h(m,0,te(w));break}}return g}function ae(){const{currentType:w,offset:m,startLoc:g,endLoc:I}=l;return l.lastType=w,l.lastOffset=m,l.lastStartLoc=g,l.lastEndLoc=I,l.offset=r(),l.startLoc=s(),i.currentChar()===gi?h(l,14):se(i,l)}return{nextToken:ae,currentOffset:r,currentPosition:s,context:c}}const Mv="parser",Sv=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function Ev(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||n,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function yv(t={}){const e=t.location!==!1,{onError:n,onWarn:i}=t;function r(v,x,A,T,...b){const D=v.currentPosition();if(D.offset+=T,D.column+=T,n){const U=e?Fa(A,D):null,M=ns(x,U,{domain:Mv,args:b});n(M)}}function s(v,x,A,T,...b){const D=v.currentPosition();if(D.offset+=T,D.column+=T,i){const U=e?Fa(A,D):null;i(uv(x,U,b))}}function a(v,x,A){const T={type:v};return e&&(T.start=x,T.end=x,T.loc={start:A,end:A}),T}function o(v,x,A,T){e&&(v.end=x,v.loc&&(v.loc.end=A))}function l(v,x){const A=v.context(),T=a(3,A.offset,A.startLoc);return T.value=x,o(T,v.currentOffset(),v.currentPosition()),T}function c(v,x){const A=v.context(),{lastOffset:T,lastStartLoc:b}=A,D=a(5,T,b);return D.index=parseInt(x,10),v.nextToken(),o(D,v.currentOffset(),v.currentPosition()),D}function u(v,x,A){const T=v.context(),{lastOffset:b,lastStartLoc:D}=T,U=a(4,b,D);return U.key=x,A===!0&&(U.modulo=!0),v.nextToken(),o(U,v.currentOffset(),v.currentPosition()),U}function f(v,x){const A=v.context(),{lastOffset:T,lastStartLoc:b}=A,D=a(9,T,b);return D.value=x.replace(Sv,Ev),v.nextToken(),o(D,v.currentOffset(),v.currentPosition()),D}function h(v){const x=v.nextToken(),A=v.context(),{lastOffset:T,lastStartLoc:b}=A,D=a(8,T,b);return x.type!==12?(r(v,Ie.UNEXPECTED_EMPTY_LINKED_MODIFIER,A.lastStartLoc,0),D.value="",o(D,T,b),{nextConsumeToken:x,node:D}):(x.value==null&&r(v,Ie.UNEXPECTED_LEXICAL_ANALYSIS,A.lastStartLoc,0,vn(x)),D.value=x.value||"",o(D,v.currentOffset(),v.currentPosition()),{node:D})}function _(v,x){const A=v.context(),T=a(7,A.offset,A.startLoc);return T.value=x,o(T,v.currentOffset(),v.currentPosition()),T}function S(v){const x=v.context(),A=a(6,x.offset,x.startLoc);let T=v.nextToken();if(T.type===9){const b=h(v);A.modifier=b.node,T=b.nextConsumeToken||v.nextToken()}switch(T.type!==10&&r(v,Ie.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,vn(T)),T=v.nextToken(),T.type===2&&(T=v.nextToken()),T.type){case 11:T.value==null&&r(v,Ie.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,vn(T)),A.key=_(v,T.value||"");break;case 5:T.value==null&&r(v,Ie.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,vn(T)),A.key=u(v,T.value||"");break;case 6:T.value==null&&r(v,Ie.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,vn(T)),A.key=c(v,T.value||"");break;case 7:T.value==null&&r(v,Ie.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,vn(T)),A.key=f(v,T.value||"");break;default:{r(v,Ie.UNEXPECTED_EMPTY_LINKED_KEY,x.lastStartLoc,0);const b=v.context(),D=a(7,b.offset,b.startLoc);return D.value="",o(D,b.offset,b.startLoc),A.key=D,o(A,b.offset,b.startLoc),{nextConsumeToken:T,node:A}}}return o(A,v.currentOffset(),v.currentPosition()),{node:A}}function E(v){const x=v.context(),A=x.currentType===1?v.currentOffset():x.offset,T=x.currentType===1?x.endLoc:x.startLoc,b=a(2,A,T);b.items=[];let D=null,U=null;do{const W=D||v.nextToken();switch(D=null,W.type){case 0:W.value==null&&r(v,Ie.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,vn(W)),b.items.push(l(v,W.value||""));break;case 6:W.value==null&&r(v,Ie.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,vn(W)),b.items.push(c(v,W.value||""));break;case 4:U=!0;break;case 5:W.value==null&&r(v,Ie.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,vn(W)),b.items.push(u(v,W.value||"",!!U)),U&&(s(v,pc.USE_MODULO_SYNTAX,x.lastStartLoc,0,vn(W)),U=null);break;case 7:W.value==null&&r(v,Ie.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,vn(W)),b.items.push(f(v,W.value||""));break;case 8:{const ie=S(v);b.items.push(ie.node),D=ie.nextConsumeToken||null;break}}}while(x.currentType!==14&&x.currentType!==1);const M=x.currentType===1?x.lastOffset:v.currentOffset(),L=x.currentType===1?x.lastEndLoc:v.currentPosition();return o(b,M,L),b}function p(v,x,A,T){const b=v.context();let D=T.items.length===0;const U=a(1,x,A);U.cases=[],U.cases.push(T);do{const M=E(v);D||(D=M.items.length===0),U.cases.push(M)}while(b.currentType!==14);return D&&r(v,Ie.MUST_HAVE_MESSAGES_IN_PLURAL,A,0),o(U,v.currentOffset(),v.currentPosition()),U}function d(v){const x=v.context(),{offset:A,startLoc:T}=x,b=E(v);return x.currentType===14?b:p(v,A,T,b)}function C(v){const x=xv(v,qd({},t)),A=x.context(),T=a(0,A.offset,A.startLoc);return e&&T.loc&&(T.loc.source=v),T.body=d(x),t.onCacheKey&&(T.cacheKey=t.onCacheKey(v)),A.currentType!==14&&r(x,Ie.UNEXPECTED_LEXICAL_ANALYSIS,A.lastStartLoc,0,v[A.offset]||""),o(T,x.currentOffset(),x.currentPosition()),T}return{parse:C}}function vn(t){if(t.type===14)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function Tv(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:s=>(n.helpers.add(s),s)}}function vu(t,e){for(let n=0;n<t.length;n++)mc(t[n],e)}function mc(t,e){switch(t.type){case 1:vu(t.cases,e),e.helper("plural");break;case 2:vu(t.items,e);break;case 6:{mc(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function bv(t,e={}){const n=Tv(t);n.helper("normalize"),t.body&&mc(t.body,n);const i=n.context();t.helpers=Array.from(i.helpers)}function Av(t){const e=t.body;return e.type===2?xu(e):e.cases.forEach(n=>xu(n)),t}function xu(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const i=t.items[n];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===t.items.length){t.static=jd(e);for(let n=0;n<t.items.length;n++){const i=t.items[n];(i.type===3||i.type===9)&&delete i.value}}}}const wv="minifier";function Fr(t){switch(t.t=t.type,t.type){case 0:{const e=t;Fr(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let i=0;i<n.length;i++)Fr(n[i]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let i=0;i<n.length;i++)Fr(n[i]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;Fr(e.key),e.k=e.key,delete e.key,e.modifier&&(Fr(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}default:throw ns(Ie.UNHANDLED_MINIFIER_NODE_TYPE,null,{domain:wv,args:[t.type]})}delete t.type}const Rv="parser";function Cv(t,e){const{filename:n,breakLineCode:i,needIndent:r}=e,s=e.location!==!1,a={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:r,indentLevel:0};s&&t.loc&&(a.source=t.loc.source);const o=()=>a;function l(E,p){a.code+=E}function c(E,p=!0){const d=p?i:"";l(r?d+"  ".repeat(E):d)}function u(E=!0){const p=++a.indentLevel;E&&c(p)}function f(E=!0){const p=--a.indentLevel;E&&c(p)}function h(){c(a.indentLevel)}return{context:o,push:l,indent:u,deindent:f,newline:h,helper:E=>`_${E}`,needIndent:()=>a.needIndent}}function Lv(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),jr(t,e.key),e.modifier?(t.push(", "),jr(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function Pv(t,e){const{helper:n,needIndent:i}=t;t.push(`${n("normalize")}([`),t.indent(i());const r=e.items.length;for(let s=0;s<r&&(jr(t,e.items[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}function Iv(t,e){const{helper:n,needIndent:i}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(i());const r=e.cases.length;for(let s=0;s<r&&(jr(t,e.cases[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}}function Nv(t,e){e.body?jr(t,e.body):t.push("null")}function jr(t,e){const{helper:n}=t;switch(e.type){case 0:Nv(t,e);break;case 1:Iv(t,e);break;case 2:Pv(t,e);break;case 6:Lv(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break;default:throw ns(Ie.UNHANDLED_CODEGEN_NODE_TYPE,null,{domain:Rv,args:[e.type]})}}const Dv=(t,e={})=>{const n=_u(e.mode)?e.mode:"normal",i=_u(e.filename)?e.filename:"message.intl";e.sourceMap;const r=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,s=e.needIndent?e.needIndent:n!=="arrow",a=t.helpers||[],o=Cv(t,{filename:i,breakLineCode:r,needIndent:s});o.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),o.indent(s),a.length>0&&(o.push(`const { ${jd(a.map(u=>`${u}: _${u}`),", ")} } = ctx`),o.newline()),o.push("return "),jr(o,t),o.deindent(s),o.push("}"),delete t.helpers;const{code:l,map:c}=o.context();return{ast:t,code:l,map:c?c.toJSON():void 0}};function Uv(t,e={}){const n=qd({},e),i=!!n.jit,r=!!n.minify,s=n.optimize==null?!0:n.optimize,o=yv(n).parse(t);return i?(s&&Av(o),r&&Fr(o),{ast:o,code:""}):(bv(o,n),Dv(o,n))}/*!
  * core-base v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function Ov(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(ai().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(ai().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(ai().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function Wn(t){return et(t)&&_c(t)===0&&(wn(t,"b")||wn(t,"body"))}const Kd=["b","body"];function Fv(t){return ki(t,Kd)}const Zd=["c","cases"];function Bv(t){return ki(t,Zd,[])}const Jd=["s","static"];function Gv(t){return ki(t,Jd)}const Qd=["i","items"];function kv(t){return ki(t,Qd,[])}const ep=["t","type"];function _c(t){return ki(t,ep)}const tp=["v","value"];function Qs(t,e){const n=ki(t,tp);if(n!=null)return n;throw Ds(e)}const np=["m","modifier"];function Hv(t){return ki(t,np)}const ip=["k","key"];function zv(t){const e=ki(t,ip);if(e)return e;throw Ds(6)}function ki(t,e,n){for(let i=0;i<e.length;i++){const r=e[i];if(wn(t,r)&&t[r]!=null)return t[r]}return n}const rp=[...Kd,...Zd,...Jd,...Qd,...ip,...np,...tp,...ep];function Ds(t){return new Error(`unhandled node type: ${t}`)}const Hi=[];Hi[0]={w:[0],i:[3,0],"[":[4],o:[7]};Hi[1]={w:[1],".":[2],"[":[4],o:[7]};Hi[2]={w:[2],i:[3,0],0:[3,0]};Hi[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};Hi[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};Hi[5]={"'":[4,0],o:8,l:[5,0]};Hi[6]={'"':[4,0],o:8,l:[6,0]};const Vv=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function Wv(t){return Vv.test(t)}function Xv(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function $v(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function Yv(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:Wv(e)?Xv(e):"*"+e}function qv(t){const e=[];let n=-1,i=0,r=0,s,a,o,l,c,u,f;const h=[];h[0]=()=>{a===void 0?a=o:a+=o},h[1]=()=>{a!==void 0&&(e.push(a),a=void 0)},h[2]=()=>{h[0](),r++},h[3]=()=>{if(r>0)r--,i=4,h[0]();else{if(r=0,a===void 0||(a=Yv(a),a===!1))return!1;h[1]()}};function _(){const S=t[n+1];if(i===5&&S==="'"||i===6&&S==='"')return n++,o="\\"+S,h[0](),!0}for(;i!==null;)if(n++,s=t[n],!(s==="\\"&&_())){if(l=$v(s),f=Hi[i],c=f[l]||f.l||8,c===8||(i=c[0],c[1]!==void 0&&(u=h[c[1]],u&&(o=s,u()===!1))))return;if(i===7)return e}}const Mu=new Map;function jv(t,e){return et(t)?t[e]:null}function Kv(t,e){if(!et(t))return null;let n=Mu.get(e);if(n||(n=qv(e),n&&Mu.set(e,n)),!n)return null;const i=n.length;let r=t,s=0;for(;s<i;){const a=n[s];if(rp.includes(a)&&Wn(r))return null;const o=r[a];if(o===void 0||ht(r))return null;r=o,s++}return r}const Zv=t=>t,Jv=t=>"",Qv="text",e0=t=>t.length===0?"":sv(t),t0=rv;function Su(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function n0(t){const e=Et(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(Et(t.named.count)||Et(t.named.n))?Et(t.named.count)?t.named.count:Et(t.named.n)?t.named.n:e:e}function i0(t,e){e.count||(e.count=t),e.n||(e.n=t)}function r0(t={}){const e=t.locale,n=n0(t),i=et(t.pluralRules)&&ve(e)&&ht(t.pluralRules[e])?t.pluralRules[e]:Su,r=et(t.pluralRules)&&ve(e)&&ht(t.pluralRules[e])?Su:void 0,s=d=>d[i(n,d.length,r)],a=t.list||[],o=d=>a[d],l=t.named||at();Et(t.pluralIndex)&&i0(n,l);const c=d=>l[d];function u(d){const C=ht(t.messages)?t.messages(d):et(t.messages)?t.messages[d]:!1;return C||(t.parent?t.parent.message(d):Jv)}const f=d=>t.modifiers?t.modifiers[d]:Zv,h=Fe(t.processor)&&ht(t.processor.normalize)?t.processor.normalize:e0,_=Fe(t.processor)&&ht(t.processor.interpolate)?t.processor.interpolate:t0,S=Fe(t.processor)&&ve(t.processor.type)?t.processor.type:Qv,p={list:o,named:c,plural:s,linked:(d,...C)=>{const[v,x]=C;let A="text",T="";C.length===1?et(v)?(T=v.modifier||T,A=v.type||A):ve(v)&&(T=v||T):C.length===2&&(ve(v)&&(T=v||T),ve(x)&&(A=x||A));const b=u(d)(p),D=A==="vnode"&&pt(b)&&T?b[0]:b;return T?f(T)(D,A):D},message:u,type:S,interpolate:_,normalize:h,values:Ot(at(),a,l)};return p}let Us=null;function s0(t){Us=t}function a0(t,e,n){Us&&Us.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const o0=l0("function:translate");function l0(t){return e=>Us&&Us.emit(t,e)}const c0=pc.__EXTEND_POINT__,Yi=io(c0),u0={FALLBACK_TO_TRANSLATE:Yi(),CANNOT_FORMAT_NUMBER:Yi(),FALLBACK_TO_NUMBER_FORMAT:Yi(),CANNOT_FORMAT_DATE:Yi(),FALLBACK_TO_DATE_FORMAT:Yi(),EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:Yi(),__EXTEND_POINT__:Yi()},sp=Ie.__EXTEND_POINT__,qi=io(sp),Rn={INVALID_ARGUMENT:sp,INVALID_DATE_ARGUMENT:qi(),INVALID_ISO_DATE_ARGUMENT:qi(),NOT_SUPPORT_NON_STRING_MESSAGE:qi(),NOT_SUPPORT_LOCALE_PROMISE_VALUE:qi(),NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:qi(),NOT_SUPPORT_LOCALE_TYPE:qi(),__EXTEND_POINT__:qi()};function zn(t){return ns(t,null,void 0)}function gc(t,e){return e.locale!=null?Eu(e.locale):Eu(t.locale)}let Co;function Eu(t){if(ve(t))return t;if(ht(t)){if(t.resolvedOnce&&Co!=null)return Co;if(t.constructor.name==="Function"){const e=t();if(iv(e))throw zn(Rn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return Co=e}else throw zn(Rn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw zn(Rn.NOT_SUPPORT_LOCALE_TYPE)}function f0(t,e,n){return[...new Set([n,...pt(e)?e:et(e)?Object.keys(e):ve(e)?[e]:[n]])]}function ap(t,e,n){const i=ve(n)?n:Kr,r=t;r.__localeChainCache||(r.__localeChainCache=new Map);let s=r.__localeChainCache.get(i);if(!s){s=[];let a=[n];for(;pt(a);)a=yu(s,a,e);const o=pt(e)||!Fe(e)?e:e.default?e.default:null;a=ve(o)?[o]:o,pt(a)&&yu(s,a,!1),r.__localeChainCache.set(i,s)}return s}function yu(t,e,n){let i=!0;for(let r=0;r<e.length&&je(i);r++){const s=e[r];ve(s)&&(i=h0(t,e[r],n))}return i}function h0(t,e,n){let i;const r=e.split("-");do{const s=r.join("-");i=d0(t,s,n),r.splice(-1,1)}while(r.length&&i===!0);return i}function d0(t,e,n){let i=!1;if(!t.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const r=e.replace(/!/g,"");t.push(r),(pt(n)||Fe(n))&&n[r]&&(i=n[r])}return i}const p0="9.14.5",ro=-1,Kr="en-US",Tu="",bu=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function m0(){return{upper:(t,e)=>e==="text"&&ve(t)?t.toUpperCase():e==="vnode"&&et(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&ve(t)?t.toLowerCase():e==="vnode"&&et(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&ve(t)?bu(t):e==="vnode"&&et(t)&&"__v_isVNode"in t?bu(t.children):t}}let op;function Au(t){op=t}let lp;function _0(t){lp=t}let cp;function g0(t){cp=t}let up=null;const v0=t=>{up=t},x0=()=>up;let fp=null;const wu=t=>{fp=t},M0=()=>fp;let Ru=0;function S0(t={}){const e=ht(t.onWarn)?t.onWarn:Kg,n=ve(t.version)?t.version:p0,i=ve(t.locale)||ht(t.locale)?t.locale:Kr,r=ht(i)?Kr:i,s=pt(t.fallbackLocale)||Fe(t.fallbackLocale)||ve(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:r,a=Fe(t.messages)?t.messages:Lo(r),o=Fe(t.datetimeFormats)?t.datetimeFormats:Lo(r),l=Fe(t.numberFormats)?t.numberFormats:Lo(r),c=Ot(at(),t.modifiers,m0()),u=t.pluralRules||at(),f=ht(t.missing)?t.missing:null,h=je(t.missingWarn)||Oi(t.missingWarn)?t.missingWarn:!0,_=je(t.fallbackWarn)||Oi(t.fallbackWarn)?t.fallbackWarn:!0,S=!!t.fallbackFormat,E=!!t.unresolving,p=ht(t.postTranslation)?t.postTranslation:null,d=Fe(t.processor)?t.processor:null,C=je(t.warnHtmlMessage)?t.warnHtmlMessage:!0,v=!!t.escapeParameter,x=ht(t.messageCompiler)?t.messageCompiler:op,A=ht(t.messageResolver)?t.messageResolver:lp||jv,T=ht(t.localeFallbacker)?t.localeFallbacker:cp||f0,b=et(t.fallbackContext)?t.fallbackContext:void 0,D=t,U=et(D.__datetimeFormatters)?D.__datetimeFormatters:new Map,M=et(D.__numberFormatters)?D.__numberFormatters:new Map,L=et(D.__meta)?D.__meta:{};Ru++;const W={version:n,cid:Ru,locale:i,fallbackLocale:s,messages:a,modifiers:c,pluralRules:u,missing:f,missingWarn:h,fallbackWarn:_,fallbackFormat:S,unresolving:E,postTranslation:p,processor:d,warnHtmlMessage:C,escapeParameter:v,messageCompiler:x,messageResolver:A,localeFallbacker:T,fallbackContext:b,onWarn:e,__meta:L};return W.datetimeFormats=o,W.numberFormats=l,W.__datetimeFormatters=U,W.__numberFormatters=M,__INTLIFY_PROD_DEVTOOLS__&&a0(W,n,L),W}const Lo=t=>({[t]:at()});function vc(t,e,n,i,r){const{missing:s,onWarn:a}=t;if(s!==null){const o=s(t,n,e,r);return ve(o)?o:e}else return e}function cs(t,e,n){const i=t;i.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}function E0(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function y0(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let i=n+1;i<e.length;i++)if(E0(t,e[i]))return!0;return!1}function Po(t){return n=>T0(n,t)}function T0(t,e){const n=Fv(e);if(n==null)throw Ds(0);if(_c(n)===1){const s=Bv(n);return t.plural(s.reduce((a,o)=>[...a,Cu(t,o)],[]))}else return Cu(t,n)}function Cu(t,e){const n=Gv(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const i=kv(e).reduce((r,s)=>[...r,Al(t,s)],[]);return t.normalize(i)}}function Al(t,e){const n=_c(e);switch(n){case 3:return Qs(e,n);case 9:return Qs(e,n);case 4:{const i=e;if(wn(i,"k")&&i.k)return t.interpolate(t.named(i.k));if(wn(i,"key")&&i.key)return t.interpolate(t.named(i.key));throw Ds(n)}case 5:{const i=e;if(wn(i,"i")&&Et(i.i))return t.interpolate(t.list(i.i));if(wn(i,"index")&&Et(i.index))return t.interpolate(t.list(i.index));throw Ds(n)}case 6:{const i=e,r=Hv(i),s=zv(i);return t.linked(Al(t,s),r?Al(t,r):void 0,t.type)}case 7:return Qs(e,n);case 8:return Qs(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const hp=t=>t;let Br=at();function dp(t,e={}){let n=!1;const i=e.onError||hv;return e.onError=r=>{n=!0,i(r)},{...Uv(t,e),detectError:n}}const b0=(t,e)=>{if(!ve(t))throw zn(Rn.NOT_SUPPORT_NON_STRING_MESSAGE);{je(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||hp)(t),r=Br[i];if(r)return r;const{code:s,detectError:a}=dp(t,e),o=new Function(`return ${s}`)();return a?o:Br[i]=o}};function A0(t,e){if(__INTLIFY_JIT_COMPILATION__&&!__INTLIFY_DROP_MESSAGE_COMPILER__&&ve(t)){je(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||hp)(t),r=Br[i];if(r)return r;const{ast:s,detectError:a}=dp(t,{...e,location:!1,jit:!0}),o=Po(s);return a?o:Br[i]=o}else{const n=t.cacheKey;if(n){const i=Br[n];return i||(Br[n]=Po(t))}else return Po(t)}}const Lu=()=>"",mn=t=>ht(t);function Pu(t,...e){const{fallbackFormat:n,postTranslation:i,unresolving:r,messageCompiler:s,fallbackLocale:a,messages:o}=t,[l,c]=wl(...e),u=je(c.missingWarn)?c.missingWarn:t.missingWarn,f=je(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,h=je(c.escapeParameter)?c.escapeParameter:t.escapeParameter,_=!!c.resolvedMessage,S=ve(c.default)||je(c.default)?je(c.default)?s?l:()=>l:c.default:n?s?l:()=>l:"",E=n||S!=="",p=gc(t,c);h&&w0(c);let[d,C,v]=_?[l,p,o[p]||at()]:pp(t,l,p,a,f,u),x=d,A=l;if(!_&&!(ve(x)||Wn(x)||mn(x))&&E&&(x=S,A=x),!_&&(!(ve(x)||Wn(x)||mn(x))||!ve(C)))return r?ro:l;let T=!1;const b=()=>{T=!0},D=mn(x)?x:mp(t,l,C,x,A,b);if(T)return x;const U=L0(t,C,v,c),M=r0(U),L=R0(t,D,M);let W=i?i(L,l):L;if(h&&ve(W)&&(W=tv(W)),__INTLIFY_PROD_DEVTOOLS__){const ie={timestamp:Date.now(),key:ve(l)?l:mn(x)?x.key:"",locale:C||(mn(x)?x.locale:""),format:ve(x)?x:mn(x)?x.source:"",message:W};ie.meta=Ot({},t.__meta,x0()||{}),o0(ie)}return W}function w0(t){pt(t.list)?t.list=t.list.map(e=>ve(e)?pu(e):e):et(t.named)&&Object.keys(t.named).forEach(e=>{ve(t.named[e])&&(t.named[e]=pu(t.named[e]))})}function pp(t,e,n,i,r,s){const{messages:a,onWarn:o,messageResolver:l,localeFallbacker:c}=t,u=c(t,i,n);let f=at(),h,_=null;const S="translate";for(let E=0;E<u.length&&(h=u[E],f=a[h]||at(),(_=l(f,e))===null&&(_=f[e]),!(ve(_)||Wn(_)||mn(_)));E++)if(!y0(h,u)){const p=vc(t,e,h,s,S);p!==e&&(_=p)}return[_,h,f]}function mp(t,e,n,i,r,s){const{messageCompiler:a,warnHtmlMessage:o}=t;if(mn(i)){const c=i;return c.locale=c.locale||n,c.key=c.key||e,c}if(a==null){const c=()=>i;return c.locale=n,c.key=e,c}const l=a(i,C0(t,n,r,i,o,s));return l.locale=n,l.key=e,l.source=i,l}function R0(t,e,n){return e(n)}function wl(...t){const[e,n,i]=t,r=at();if(!ve(e)&&!Et(e)&&!mn(e)&&!Wn(e))throw zn(Rn.INVALID_ARGUMENT);const s=Et(e)?String(e):(mn(e),e);return Et(n)?r.plural=n:ve(n)?r.default=n:Fe(n)&&!no(n)?r.named=n:pt(n)&&(r.list=n),Et(i)?r.plural=i:ve(i)?r.default=i:Fe(i)&&Ot(r,i),[s,r]}function C0(t,e,n,i,r,s){return{locale:e,key:n,warnHtmlMessage:r,onError:a=>{throw s&&s(a),a},onCacheKey:a=>Zg(e,n,a)}}function L0(t,e,n,i){const{modifiers:r,pluralRules:s,messageResolver:a,fallbackLocale:o,fallbackWarn:l,missingWarn:c,fallbackContext:u}=t,h={locale:e,modifiers:r,pluralRules:s,messages:_=>{let S=a(n,_);if(S==null&&u){const[,,E]=pp(u,_,e,o,l,c);S=a(E,_)}if(ve(S)||Wn(S)){let E=!1;const d=mp(t,_,e,S,_,()=>{E=!0});return E?Lu:d}else return mn(S)?S:Lu}};return t.processor&&(h.processor=t.processor),i.list&&(h.list=i.list),i.named&&(h.named=i.named),Et(i.plural)&&(h.pluralIndex=i.plural),h}function Iu(t,...e){const{datetimeFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:a}=t,{__datetimeFormatters:o}=t,[l,c,u,f]=Rl(...e),h=je(u.missingWarn)?u.missingWarn:t.missingWarn;je(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const _=!!u.part,S=gc(t,u),E=a(t,r,S);if(!ve(l)||l==="")return new Intl.DateTimeFormat(S,f).format(c);let p={},d,C=null;const v="datetime format";for(let T=0;T<E.length&&(d=E[T],p=n[d]||{},C=p[l],!Fe(C));T++)vc(t,l,d,h,v);if(!Fe(C)||!ve(d))return i?ro:l;let x=`${d}__${l}`;no(f)||(x=`${x}__${JSON.stringify(f)}`);let A=o.get(x);return A||(A=new Intl.DateTimeFormat(d,Ot({},C,f)),o.set(x,A)),_?A.formatToParts(c):A.format(c)}const _p=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Rl(...t){const[e,n,i,r]=t,s=at();let a=at(),o;if(ve(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw zn(Rn.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();o=new Date(c);try{o.toISOString()}catch{throw zn(Rn.INVALID_ISO_DATE_ARGUMENT)}}else if(Qg(e)){if(isNaN(e.getTime()))throw zn(Rn.INVALID_DATE_ARGUMENT);o=e}else if(Et(e))o=e;else throw zn(Rn.INVALID_ARGUMENT);return ve(n)?s.key=n:Fe(n)&&Object.keys(n).forEach(l=>{_p.includes(l)?a[l]=n[l]:s[l]=n[l]}),ve(i)?s.locale=i:Fe(i)&&(a=i),Fe(r)&&(a=r),[s.key||"",o,s,a]}function Nu(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__datetimeFormatters.has(s)&&i.__datetimeFormatters.delete(s)}}function Du(t,...e){const{numberFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:a}=t,{__numberFormatters:o}=t,[l,c,u,f]=Cl(...e),h=je(u.missingWarn)?u.missingWarn:t.missingWarn;je(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const _=!!u.part,S=gc(t,u),E=a(t,r,S);if(!ve(l)||l==="")return new Intl.NumberFormat(S,f).format(c);let p={},d,C=null;const v="number format";for(let T=0;T<E.length&&(d=E[T],p=n[d]||{},C=p[l],!Fe(C));T++)vc(t,l,d,h,v);if(!Fe(C)||!ve(d))return i?ro:l;let x=`${d}__${l}`;no(f)||(x=`${x}__${JSON.stringify(f)}`);let A=o.get(x);return A||(A=new Intl.NumberFormat(d,Ot({},C,f)),o.set(x,A)),_?A.formatToParts(c):A.format(c)}const gp=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Cl(...t){const[e,n,i,r]=t,s=at();let a=at();if(!Et(e))throw zn(Rn.INVALID_ARGUMENT);const o=e;return ve(n)?s.key=n:Fe(n)&&Object.keys(n).forEach(l=>{gp.includes(l)?a[l]=n[l]:s[l]=n[l]}),ve(i)?s.locale=i:Fe(i)&&(a=i),Fe(r)&&(a=r),[s.key||"",o,s,a]}function Uu(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__numberFormatters.has(s)&&i.__numberFormatters.delete(s)}}Ov();/*!
  * vue-i18n v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */const P0="9.14.5";function I0(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(ai().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(ai().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(ai().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(ai().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(ai().__INTLIFY_PROD_DEVTOOLS__=!1)}const N0=u0.__EXTEND_POINT__,Kn=io(N0);Kn(),Kn(),Kn(),Kn(),Kn(),Kn(),Kn(),Kn(),Kn();const vp=Rn.__EXTEND_POINT__,Qt=io(vp),At={UNEXPECTED_RETURN_TYPE:vp,INVALID_ARGUMENT:Qt(),MUST_BE_CALL_SETUP_TOP:Qt(),NOT_INSTALLED:Qt(),NOT_AVAILABLE_IN_LEGACY_MODE:Qt(),REQUIRED_VALUE:Qt(),INVALID_VALUE:Qt(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:Qt(),NOT_INSTALLED_WITH_PROVIDE:Qt(),UNEXPECTED_ERROR:Qt(),NOT_COMPATIBLE_LEGACY_VUE_I18N:Qt(),BRIDGE_SUPPORT_VUE_2_ONLY:Qt(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:Qt(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:Qt(),__EXTEND_POINT__:Qt()};function Dt(t,...e){return ns(t,null,void 0)}const Ll=Gi("__translateVNode"),Pl=Gi("__datetimeParts"),Il=Gi("__numberParts"),xp=Gi("__setPluralRules"),Mp=Gi("__injectWithOption"),Nl=Gi("__dispose");function Os(t){if(!et(t)||Wn(t))return t;for(const e in t)if(wn(t,e))if(!e.includes("."))et(t[e])&&Os(t[e]);else{const n=e.split("."),i=n.length-1;let r=t,s=!1;for(let a=0;a<i;a++){if(n[a]==="__proto__")throw new Error(`unsafe key: ${n[a]}`);if(n[a]in r||(r[n[a]]=at()),!et(r[n[a]])){s=!0;break}r=r[n[a]]}if(s||(Wn(r)?rp.includes(n[i])||delete t[e]:(r[n[i]]=t[e],delete t[e])),!Wn(r)){const a=r[n[i]];et(a)&&Os(a)}}return t}function so(t,e){const{messages:n,__i18n:i,messageResolver:r,flatJson:s}=e,a=Fe(n)?n:pt(i)?at():{[t]:at()};if(pt(i)&&i.forEach(o=>{if("locale"in o&&"resource"in o){const{locale:l,resource:c}=o;l?(a[l]=a[l]||at(),Ta(c,a[l])):Ta(c,a)}else ve(o)&&Ta(JSON.parse(o),a)}),r==null&&s)for(const o in a)wn(a,o)&&Os(a[o]);return a}function Sp(t){return t.type}function Ep(t,e,n){let i=et(e.messages)?e.messages:at();"__i18nGlobal"in n&&(i=so(t.locale.value,{messages:i,__i18n:n.__i18nGlobal}));const r=Object.keys(i);r.length&&r.forEach(s=>{t.mergeLocaleMessage(s,i[s])});{if(et(e.datetimeFormats)){const s=Object.keys(e.datetimeFormats);s.length&&s.forEach(a=>{t.mergeDateTimeFormat(a,e.datetimeFormats[a])})}if(et(e.numberFormats)){const s=Object.keys(e.numberFormats);s.length&&s.forEach(a=>{t.mergeNumberFormat(a,e.numberFormats[a])})}}}function Ou(t){return It(Hs,null,t,0)}const Fu="__INTLIFY_META__",Bu=()=>[],D0=()=>!1;let Gu=0;function ku(t){return(e,n,i,r)=>t(n,i,hr()||void 0,r)}const U0=()=>{const t=hr();let e=null;return t&&(e=Sp(t)[Fu])?{[Fu]:e}:null};function xc(t={},e){const{__root:n,__injectWithOption:i}=t,r=n===void 0,s=t.flatJson,a=Oa?nn:ed,o=!!t.translateExistCompatible;let l=je(t.inheritLocale)?t.inheritLocale:!0;const c=a(n&&l?n.locale.value:ve(t.locale)?t.locale:Kr),u=a(n&&l?n.fallbackLocale.value:ve(t.fallbackLocale)||pt(t.fallbackLocale)||Fe(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:c.value),f=a(so(c.value,t)),h=a(Fe(t.datetimeFormats)?t.datetimeFormats:{[c.value]:{}}),_=a(Fe(t.numberFormats)?t.numberFormats:{[c.value]:{}});let S=n?n.missingWarn:je(t.missingWarn)||Oi(t.missingWarn)?t.missingWarn:!0,E=n?n.fallbackWarn:je(t.fallbackWarn)||Oi(t.fallbackWarn)?t.fallbackWarn:!0,p=n?n.fallbackRoot:je(t.fallbackRoot)?t.fallbackRoot:!0,d=!!t.fallbackFormat,C=ht(t.missing)?t.missing:null,v=ht(t.missing)?ku(t.missing):null,x=ht(t.postTranslation)?t.postTranslation:null,A=n?n.warnHtmlMessage:je(t.warnHtmlMessage)?t.warnHtmlMessage:!0,T=!!t.escapeParameter;const b=n?n.modifiers:Fe(t.modifiers)?t.modifiers:{};let D=t.pluralRules||n&&n.pluralRules,U;U=(()=>{r&&wu(null);const N={version:P0,locale:c.value,fallbackLocale:u.value,messages:f.value,modifiers:b,pluralRules:D,missing:v===null?void 0:v,missingWarn:S,fallbackWarn:E,fallbackFormat:d,unresolving:!0,postTranslation:x===null?void 0:x,warnHtmlMessage:A,escapeParameter:T,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};N.datetimeFormats=h.value,N.numberFormats=_.value,N.__datetimeFormatters=Fe(U)?U.__datetimeFormatters:void 0,N.__numberFormatters=Fe(U)?U.__numberFormatters:void 0;const z=S0(N);return r&&wu(z),z})(),cs(U,c.value,u.value);function L(){return[c.value,u.value,f.value,h.value,_.value]}const W=ln({get:()=>c.value,set:N=>{c.value=N,U.locale=c.value}}),ie=ln({get:()=>u.value,set:N=>{u.value=N,U.fallbackLocale=u.value,cs(U,c.value,N)}}),F=ln(()=>f.value),$=ln(()=>h.value),Y=ln(()=>_.value);function Z(){return ht(x)?x:null}function q(N){x=N,U.postTranslation=N}function oe(){return C}function le(N){N!==null&&(v=ku(N)),C=N,U.missing=v}const de=(N,z,ce,re,he,we)=>{L();let ue;try{__INTLIFY_PROD_DEVTOOLS__,r||(U.fallbackContext=n?M0():void 0),ue=N(U)}finally{__INTLIFY_PROD_DEVTOOLS__,r||(U.fallbackContext=void 0)}if(ce!=="translate exists"&&Et(ue)&&ue===ro||ce==="translate exists"&&!ue){const[it,He]=z();return n&&p?re(n):he(it)}else{if(we(ue))return ue;throw Dt(At.UNEXPECTED_RETURN_TYPE)}};function me(...N){return de(z=>Reflect.apply(Pu,null,[z,...N]),()=>wl(...N),"translate",z=>Reflect.apply(z.t,z,[...N]),z=>z,z=>ve(z))}function Pe(...N){const[z,ce,re]=N;if(re&&!et(re))throw Dt(At.INVALID_ARGUMENT);return me(z,ce,Ot({resolvedMessage:!0},re||{}))}function te(...N){return de(z=>Reflect.apply(Iu,null,[z,...N]),()=>Rl(...N),"datetime format",z=>Reflect.apply(z.d,z,[...N]),()=>Tu,z=>ve(z))}function fe(...N){return de(z=>Reflect.apply(Du,null,[z,...N]),()=>Cl(...N),"number format",z=>Reflect.apply(z.n,z,[...N]),()=>Tu,z=>ve(z))}function ge(N){return N.map(z=>ve(z)||Et(z)||je(z)?Ou(String(z)):z)}const be={normalize:ge,interpolate:N=>N,type:"vnode"};function Se(...N){return de(z=>{let ce;const re=z;try{re.processor=be,ce=Reflect.apply(Pu,null,[re,...N])}finally{re.processor=null}return ce},()=>wl(...N),"translate",z=>z[Ll](...N),z=>[Ou(z)],z=>pt(z))}function Ge(...N){return de(z=>Reflect.apply(Du,null,[z,...N]),()=>Cl(...N),"number format",z=>z[Il](...N),Bu,z=>ve(z)||pt(z))}function Le(...N){return de(z=>Reflect.apply(Iu,null,[z,...N]),()=>Rl(...N),"datetime format",z=>z[Pl](...N),Bu,z=>ve(z)||pt(z))}function y(N){D=N,U.pluralRules=D}function O(N,z){return de(()=>{if(!N)return!1;const ce=ve(z)?z:c.value,re=X(ce),he=U.messageResolver(re,N);return o?he!=null:Wn(he)||mn(he)||ve(he)},()=>[N],"translate exists",ce=>Reflect.apply(ce.te,ce,[N,z]),D0,ce=>je(ce))}function P(N){let z=null;const ce=ap(U,u.value,c.value);for(let re=0;re<ce.length;re++){const he=f.value[ce[re]]||{},we=U.messageResolver(he,N);if(we!=null){z=we;break}}return z}function H(N){const z=P(N);return z??(n?n.tm(N)||{}:{})}function X(N){return f.value[N]||{}}function J(N,z){if(s){const ce={[N]:z};for(const re in ce)wn(ce,re)&&Os(ce[re]);z=ce[N]}f.value[N]=z,U.messages=f.value}function se(N,z){f.value[N]=f.value[N]||{};const ce={[N]:z};if(s)for(const re in ce)wn(ce,re)&&Os(ce[re]);z=ce[N],Ta(z,f.value[N]),U.messages=f.value}function ae(N){return h.value[N]||{}}function w(N,z){h.value[N]=z,U.datetimeFormats=h.value,Nu(U,N,z)}function m(N,z){h.value[N]=Ot(h.value[N]||{},z),U.datetimeFormats=h.value,Nu(U,N,z)}function g(N){return _.value[N]||{}}function I(N,z){_.value[N]=z,U.numberFormats=_.value,Uu(U,N,z)}function B(N,z){_.value[N]=Ot(_.value[N]||{},z),U.numberFormats=_.value,Uu(U,N,z)}Gu++,n&&Oa&&(ci(n.locale,N=>{l&&(c.value=N,U.locale=N,cs(U,c.value,u.value))}),ci(n.fallbackLocale,N=>{l&&(u.value=N,U.fallbackLocale=N,cs(U,c.value,u.value))}));const k={id:Gu,locale:W,fallbackLocale:ie,get inheritLocale(){return l},set inheritLocale(N){l=N,N&&n&&(c.value=n.locale.value,u.value=n.fallbackLocale.value,cs(U,c.value,u.value))},get availableLocales(){return Object.keys(f.value).sort()},messages:F,get modifiers(){return b},get pluralRules(){return D||{}},get isGlobal(){return r},get missingWarn(){return S},set missingWarn(N){S=N,U.missingWarn=S},get fallbackWarn(){return E},set fallbackWarn(N){E=N,U.fallbackWarn=E},get fallbackRoot(){return p},set fallbackRoot(N){p=N},get fallbackFormat(){return d},set fallbackFormat(N){d=N,U.fallbackFormat=d},get warnHtmlMessage(){return A},set warnHtmlMessage(N){A=N,U.warnHtmlMessage=N},get escapeParameter(){return T},set escapeParameter(N){T=N,U.escapeParameter=N},t:me,getLocaleMessage:X,setLocaleMessage:J,mergeLocaleMessage:se,getPostTranslationHandler:Z,setPostTranslationHandler:q,getMissingHandler:oe,setMissingHandler:le,[xp]:y};return k.datetimeFormats=$,k.numberFormats=Y,k.rt=Pe,k.te=O,k.tm=H,k.d=te,k.n=fe,k.getDateTimeFormat=ae,k.setDateTimeFormat=w,k.mergeDateTimeFormat=m,k.getNumberFormat=g,k.setNumberFormat=I,k.mergeNumberFormat=B,k[Mp]=i,k[Ll]=Se,k[Pl]=Le,k[Il]=Ge,k}function O0(t){const e=ve(t.locale)?t.locale:Kr,n=ve(t.fallbackLocale)||pt(t.fallbackLocale)||Fe(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,i=ht(t.missing)?t.missing:void 0,r=je(t.silentTranslationWarn)||Oi(t.silentTranslationWarn)?!t.silentTranslationWarn:!0,s=je(t.silentFallbackWarn)||Oi(t.silentFallbackWarn)?!t.silentFallbackWarn:!0,a=je(t.fallbackRoot)?t.fallbackRoot:!0,o=!!t.formatFallbackMessages,l=Fe(t.modifiers)?t.modifiers:{},c=t.pluralizationRules,u=ht(t.postTranslation)?t.postTranslation:void 0,f=ve(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,h=!!t.escapeParameterHtml,_=je(t.sync)?t.sync:!0;let S=t.messages;if(Fe(t.sharedMessages)){const T=t.sharedMessages;S=Object.keys(T).reduce((D,U)=>{const M=D[U]||(D[U]={});return Ot(M,T[U]),D},S||{})}const{__i18n:E,__root:p,__injectWithOption:d}=t,C=t.datetimeFormats,v=t.numberFormats,x=t.flatJson,A=t.translateExistCompatible;return{locale:e,fallbackLocale:n,messages:S,flatJson:x,datetimeFormats:C,numberFormats:v,missing:i,missingWarn:r,fallbackWarn:s,fallbackRoot:a,fallbackFormat:o,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:f,escapeParameter:h,messageResolver:t.messageResolver,inheritLocale:_,translateExistCompatible:A,__i18n:E,__root:p,__injectWithOption:d}}function Dl(t={},e){{const n=xc(O0(t)),{__extender:i}=t,r={id:n.id,get locale(){return n.locale.value},set locale(s){n.locale.value=s},get fallbackLocale(){return n.fallbackLocale.value},set fallbackLocale(s){n.fallbackLocale.value=s},get messages(){return n.messages.value},get datetimeFormats(){return n.datetimeFormats.value},get numberFormats(){return n.numberFormats.value},get availableLocales(){return n.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(s){},get missing(){return n.getMissingHandler()},set missing(s){n.setMissingHandler(s)},get silentTranslationWarn(){return je(n.missingWarn)?!n.missingWarn:n.missingWarn},set silentTranslationWarn(s){n.missingWarn=je(s)?!s:s},get silentFallbackWarn(){return je(n.fallbackWarn)?!n.fallbackWarn:n.fallbackWarn},set silentFallbackWarn(s){n.fallbackWarn=je(s)?!s:s},get modifiers(){return n.modifiers},get formatFallbackMessages(){return n.fallbackFormat},set formatFallbackMessages(s){n.fallbackFormat=s},get postTranslation(){return n.getPostTranslationHandler()},set postTranslation(s){n.setPostTranslationHandler(s)},get sync(){return n.inheritLocale},set sync(s){n.inheritLocale=s},get warnHtmlInMessage(){return n.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(s){n.warnHtmlMessage=s!=="off"},get escapeParameterHtml(){return n.escapeParameter},set escapeParameterHtml(s){n.escapeParameter=s},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(s){},get pluralizationRules(){return n.pluralRules||{}},__composer:n,t(...s){const[a,o,l]=s,c={};let u=null,f=null;if(!ve(a))throw Dt(At.INVALID_ARGUMENT);const h=a;return ve(o)?c.locale=o:pt(o)?u=o:Fe(o)&&(f=o),pt(l)?u=l:Fe(l)&&(f=l),Reflect.apply(n.t,n,[h,u||f||{},c])},rt(...s){return Reflect.apply(n.rt,n,[...s])},tc(...s){const[a,o,l]=s,c={plural:1};let u=null,f=null;if(!ve(a))throw Dt(At.INVALID_ARGUMENT);const h=a;return ve(o)?c.locale=o:Et(o)?c.plural=o:pt(o)?u=o:Fe(o)&&(f=o),ve(l)?c.locale=l:pt(l)?u=l:Fe(l)&&(f=l),Reflect.apply(n.t,n,[h,u||f||{},c])},te(s,a){return n.te(s,a)},tm(s){return n.tm(s)},getLocaleMessage(s){return n.getLocaleMessage(s)},setLocaleMessage(s,a){n.setLocaleMessage(s,a)},mergeLocaleMessage(s,a){n.mergeLocaleMessage(s,a)},d(...s){return Reflect.apply(n.d,n,[...s])},getDateTimeFormat(s){return n.getDateTimeFormat(s)},setDateTimeFormat(s,a){n.setDateTimeFormat(s,a)},mergeDateTimeFormat(s,a){n.mergeDateTimeFormat(s,a)},n(...s){return Reflect.apply(n.n,n,[...s])},getNumberFormat(s){return n.getNumberFormat(s)},setNumberFormat(s,a){n.setNumberFormat(s,a)},mergeNumberFormat(s,a){n.mergeNumberFormat(s,a)},getChoiceIndex(s,a){return-1}};return r.__extender=i,r}}const Mc={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function F0({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((i,r)=>[...i,...r.type===yn?r.children:[r]],[]):e.reduce((n,i)=>{const r=t[i];return r&&(n[i]=r()),n},at())}function yp(t){return yn}const B0=pi({name:"i18n-t",props:Ot({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>Et(t)||!isNaN(t)}},Mc),setup(t,e){const{slots:n,attrs:i}=e,r=t.i18n||gr({useScope:t.scope,__useComponent:!0});return()=>{const s=Object.keys(n).filter(f=>f!=="_"),a=at();t.locale&&(a.locale=t.locale),t.plural!==void 0&&(a.plural=ve(t.plural)?+t.plural:t.plural);const o=F0(e,s),l=r[Ll](t.keypath,o,a),c=Ot(at(),i),u=ve(t.tag)||et(t.tag)?t.tag:yp();return Fd(u,c,l)}}}),Hu=B0;function G0(t){return pt(t)&&!ve(t[0])}function Tp(t,e,n,i){const{slots:r,attrs:s}=e;return()=>{const a={part:!0};let o=at();t.locale&&(a.locale=t.locale),ve(t.format)?a.key=t.format:et(t.format)&&(ve(t.format.key)&&(a.key=t.format.key),o=Object.keys(t.format).reduce((h,_)=>n.includes(_)?Ot(at(),h,{[_]:t.format[_]}):h,at()));const l=i(t.value,a,o);let c=[a.key];pt(l)?c=l.map((h,_)=>{const S=r[h.type],E=S?S({[h.type]:h.value,index:_,parts:l}):[h.value];return G0(E)&&(E[0].key=`${h.type}-${_}`),E}):ve(l)&&(c=[l]);const u=Ot(at(),s),f=ve(t.tag)||et(t.tag)?t.tag:yp();return Fd(f,u,c)}}const k0=pi({name:"i18n-n",props:Ot({value:{type:Number,required:!0},format:{type:[String,Object]}},Mc),setup(t,e){const n=t.i18n||gr({useScope:t.scope,__useComponent:!0});return Tp(t,e,gp,(...i)=>n[Il](...i))}}),zu=k0,H0=pi({name:"i18n-d",props:Ot({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Mc),setup(t,e){const n=t.i18n||gr({useScope:t.scope,__useComponent:!0});return Tp(t,e,_p,(...i)=>n[Pl](...i))}}),Vu=H0;function z0(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const i=n.__getInstance(e);return i!=null?i.__composer:t.global.__composer}}function V0(t){const e=a=>{const{instance:o,modifiers:l,value:c}=a;if(!o||!o.$)throw Dt(At.UNEXPECTED_ERROR);const u=z0(t,o.$),f=Wu(c);return[Reflect.apply(u.t,u,[...Xu(f)]),u]};return{created:(a,o)=>{const[l,c]=e(o);Oa&&t.global===c&&(a.__i18nWatcher=ci(c.locale,()=>{o.instance&&o.instance.$forceUpdate()})),a.__composer=c,a.textContent=l},unmounted:a=>{Oa&&a.__i18nWatcher&&(a.__i18nWatcher(),a.__i18nWatcher=void 0,delete a.__i18nWatcher),a.__composer&&(a.__composer=void 0,delete a.__composer)},beforeUpdate:(a,{value:o})=>{if(a.__composer){const l=a.__composer,c=Wu(o);a.textContent=Reflect.apply(l.t,l,[...Xu(c)])}},getSSRProps:a=>{const[o]=e(a);return{textContent:o}}}}function Wu(t){if(ve(t))return{path:t};if(Fe(t)){if(!("path"in t))throw Dt(At.REQUIRED_VALUE,"path");return t}else throw Dt(At.INVALID_VALUE)}function Xu(t){const{path:e,locale:n,args:i,choice:r,plural:s}=t,a={},o=i||{};return ve(n)&&(a.locale=n),Et(r)&&(a.plural=r),Et(s)&&(a.plural=s),[e,o,a]}function W0(t,e,...n){const i=Fe(n[0])?n[0]:{},r=!!i.useI18nComponentName;(je(i.globalInstall)?i.globalInstall:!0)&&([r?"i18n":Hu.name,"I18nT"].forEach(a=>t.component(a,Hu)),[zu.name,"I18nN"].forEach(a=>t.component(a,zu)),[Vu.name,"I18nD"].forEach(a=>t.component(a,Vu))),t.directive("t",V0(e))}function X0(t,e,n){return{beforeCreate(){const i=hr();if(!i)throw Dt(At.UNEXPECTED_ERROR);const r=this.$options;if(r.i18n){const s=r.i18n;if(r.__i18n&&(s.__i18n=r.__i18n),s.__root=e,this===this.$root)this.$i18n=$u(t,s);else{s.__injectWithOption=!0,s.__extender=n.__vueI18nExtend,this.$i18n=Dl(s);const a=this.$i18n;a.__extender&&(a.__disposer=a.__extender(this.$i18n))}}else if(r.__i18n)if(this===this.$root)this.$i18n=$u(t,r);else{this.$i18n=Dl({__i18n:r.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const s=this.$i18n;s.__extender&&(s.__disposer=s.__extender(this.$i18n))}else this.$i18n=t;r.__i18nGlobal&&Ep(e,r,r),this.$t=(...s)=>this.$i18n.t(...s),this.$rt=(...s)=>this.$i18n.rt(...s),this.$tc=(...s)=>this.$i18n.tc(...s),this.$te=(s,a)=>this.$i18n.te(s,a),this.$d=(...s)=>this.$i18n.d(...s),this.$n=(...s)=>this.$i18n.n(...s),this.$tm=s=>this.$i18n.tm(s),n.__setInstance(i,this.$i18n)},mounted(){},unmounted(){const i=hr();if(!i)throw Dt(At.UNEXPECTED_ERROR);const r=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,r.__disposer&&(r.__disposer(),delete r.__disposer,delete r.__extender),n.__deleteInstance(i),delete this.$i18n}}}function $u(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[xp](e.pluralizationRules||t.pluralizationRules);const n=so(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(i=>t.mergeLocaleMessage(i,n[i])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>t.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>t.mergeNumberFormat(i,e.numberFormats[i])),t}const $0=Gi("global-vue-i18n");function Y0(t={},e){const n=__VUE_I18N_LEGACY_API__&&je(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,i=je(t.globalInjection)?t.globalInjection:!0,r=__VUE_I18N_LEGACY_API__&&n?!!t.allowComposition:!0,s=new Map,[a,o]=q0(t,n),l=Gi("");function c(h){return s.get(h)||null}function u(h,_){s.set(h,_)}function f(h){s.delete(h)}{const h={get mode(){return __VUE_I18N_LEGACY_API__&&n?"legacy":"composition"},get allowComposition(){return r},async install(_,...S){if(_.__VUE_I18N_SYMBOL__=l,_.provide(_.__VUE_I18N_SYMBOL__,h),Fe(S[0])){const d=S[0];h.__composerExtend=d.__composerExtend,h.__vueI18nExtend=d.__vueI18nExtend}let E=null;!n&&i&&(E=ix(_,h.global)),__VUE_I18N_FULL_INSTALL__&&W0(_,h,...S),__VUE_I18N_LEGACY_API__&&n&&_.mixin(X0(o,o.__composer,h));const p=_.unmount;_.unmount=()=>{E&&E(),h.dispose(),p()}},get global(){return o},dispose(){a.stop()},__instances:s,__getInstance:c,__setInstance:u,__deleteInstance:f};return h}}function gr(t={}){const e=hr();if(e==null)throw Dt(At.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw Dt(At.NOT_INSTALLED);const n=j0(e),i=Z0(n),r=Sp(e),s=K0(t,r);if(__VUE_I18N_LEGACY_API__&&n.mode==="legacy"&&!t.__useComponent){if(!n.allowComposition)throw Dt(At.NOT_AVAILABLE_IN_LEGACY_MODE);return tx(e,s,i,t)}if(s==="global")return Ep(i,t,r),i;if(s==="parent"){let l=J0(n,e,t.__useComponent);return l==null&&(l=i),l}const a=n;let o=a.__getInstance(e);if(o==null){const l=Ot({},t);"__i18n"in r&&(l.__i18n=r.__i18n),i&&(l.__root=i),o=xc(l),a.__composerExtend&&(o[Nl]=a.__composerExtend(o)),ex(a,e,o),a.__setInstance(e,o)}return o}function q0(t,e,n){const i=Ql();{const r=__VUE_I18N_LEGACY_API__&&e?i.run(()=>Dl(t)):i.run(()=>xc(t));if(r==null)throw Dt(At.UNEXPECTED_ERROR);return[i,r]}}function j0(t){{const e=Wr(t.isCE?$0:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw Dt(t.isCE?At.NOT_INSTALLED_WITH_PROVIDE:At.UNEXPECTED_ERROR);return e}}function K0(t,e){return no(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function Z0(t){return t.mode==="composition"?t.global:t.global.__composer}function J0(t,e,n=!1){let i=null;const r=e.root;let s=Q0(e,n);for(;s!=null;){const a=t;if(t.mode==="composition")i=a.__getInstance(s);else if(__VUE_I18N_LEGACY_API__){const o=a.__getInstance(s);o!=null&&(i=o.__composer,n&&i&&!i[Mp]&&(i=null))}if(i!=null||r===s)break;s=s.parent}return i}function Q0(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function ex(t,e,n){Ja(()=>{},e),ks(()=>{const i=n;t.__deleteInstance(e);const r=i[Nl];r&&(r(),delete i[Nl])},e)}function tx(t,e,n,i={}){const r=e==="local",s=ed(null);if(r&&t.proxy&&!(t.proxy.$options.i18n||t.proxy.$options.__i18n))throw Dt(At.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const a=je(i.inheritLocale)?i.inheritLocale:!ve(i.locale),o=nn(!r||a?n.locale.value:ve(i.locale)?i.locale:Kr),l=nn(!r||a?n.fallbackLocale.value:ve(i.fallbackLocale)||pt(i.fallbackLocale)||Fe(i.fallbackLocale)||i.fallbackLocale===!1?i.fallbackLocale:o.value),c=nn(so(o.value,i)),u=nn(Fe(i.datetimeFormats)?i.datetimeFormats:{[o.value]:{}}),f=nn(Fe(i.numberFormats)?i.numberFormats:{[o.value]:{}}),h=r?n.missingWarn:je(i.missingWarn)||Oi(i.missingWarn)?i.missingWarn:!0,_=r?n.fallbackWarn:je(i.fallbackWarn)||Oi(i.fallbackWarn)?i.fallbackWarn:!0,S=r?n.fallbackRoot:je(i.fallbackRoot)?i.fallbackRoot:!0,E=!!i.fallbackFormat,p=ht(i.missing)?i.missing:null,d=ht(i.postTranslation)?i.postTranslation:null,C=r?n.warnHtmlMessage:je(i.warnHtmlMessage)?i.warnHtmlMessage:!0,v=!!i.escapeParameter,x=r?n.modifiers:Fe(i.modifiers)?i.modifiers:{},A=i.pluralRules||r&&n.pluralRules;function T(){return[o.value,l.value,c.value,u.value,f.value]}const b=ln({get:()=>s.value?s.value.locale.value:o.value,set:P=>{s.value&&(s.value.locale.value=P),o.value=P}}),D=ln({get:()=>s.value?s.value.fallbackLocale.value:l.value,set:P=>{s.value&&(s.value.fallbackLocale.value=P),l.value=P}}),U=ln(()=>s.value?s.value.messages.value:c.value),M=ln(()=>u.value),L=ln(()=>f.value);function W(){return s.value?s.value.getPostTranslationHandler():d}function ie(P){s.value&&s.value.setPostTranslationHandler(P)}function F(){return s.value?s.value.getMissingHandler():p}function $(P){s.value&&s.value.setMissingHandler(P)}function Y(P){return T(),P()}function Z(...P){return s.value?Y(()=>Reflect.apply(s.value.t,null,[...P])):Y(()=>"")}function q(...P){return s.value?Reflect.apply(s.value.rt,null,[...P]):""}function oe(...P){return s.value?Y(()=>Reflect.apply(s.value.d,null,[...P])):Y(()=>"")}function le(...P){return s.value?Y(()=>Reflect.apply(s.value.n,null,[...P])):Y(()=>"")}function de(P){return s.value?s.value.tm(P):{}}function me(P,H){return s.value?s.value.te(P,H):!1}function Pe(P){return s.value?s.value.getLocaleMessage(P):{}}function te(P,H){s.value&&(s.value.setLocaleMessage(P,H),c.value[P]=H)}function fe(P,H){s.value&&s.value.mergeLocaleMessage(P,H)}function ge(P){return s.value?s.value.getDateTimeFormat(P):{}}function Ce(P,H){s.value&&(s.value.setDateTimeFormat(P,H),u.value[P]=H)}function be(P,H){s.value&&s.value.mergeDateTimeFormat(P,H)}function Se(P){return s.value?s.value.getNumberFormat(P):{}}function Ge(P,H){s.value&&(s.value.setNumberFormat(P,H),f.value[P]=H)}function Le(P,H){s.value&&s.value.mergeNumberFormat(P,H)}const y={get id(){return s.value?s.value.id:-1},locale:b,fallbackLocale:D,messages:U,datetimeFormats:M,numberFormats:L,get inheritLocale(){return s.value?s.value.inheritLocale:a},set inheritLocale(P){s.value&&(s.value.inheritLocale=P)},get availableLocales(){return s.value?s.value.availableLocales:Object.keys(c.value)},get modifiers(){return s.value?s.value.modifiers:x},get pluralRules(){return s.value?s.value.pluralRules:A},get isGlobal(){return s.value?s.value.isGlobal:!1},get missingWarn(){return s.value?s.value.missingWarn:h},set missingWarn(P){s.value&&(s.value.missingWarn=P)},get fallbackWarn(){return s.value?s.value.fallbackWarn:_},set fallbackWarn(P){s.value&&(s.value.missingWarn=P)},get fallbackRoot(){return s.value?s.value.fallbackRoot:S},set fallbackRoot(P){s.value&&(s.value.fallbackRoot=P)},get fallbackFormat(){return s.value?s.value.fallbackFormat:E},set fallbackFormat(P){s.value&&(s.value.fallbackFormat=P)},get warnHtmlMessage(){return s.value?s.value.warnHtmlMessage:C},set warnHtmlMessage(P){s.value&&(s.value.warnHtmlMessage=P)},get escapeParameter(){return s.value?s.value.escapeParameter:v},set escapeParameter(P){s.value&&(s.value.escapeParameter=P)},t:Z,getPostTranslationHandler:W,setPostTranslationHandler:ie,getMissingHandler:F,setMissingHandler:$,rt:q,d:oe,n:le,tm:de,te:me,getLocaleMessage:Pe,setLocaleMessage:te,mergeLocaleMessage:fe,getDateTimeFormat:ge,setDateTimeFormat:Ce,mergeDateTimeFormat:be,getNumberFormat:Se,setNumberFormat:Ge,mergeNumberFormat:Le};function O(P){P.locale.value=o.value,P.fallbackLocale.value=l.value,Object.keys(c.value).forEach(H=>{P.mergeLocaleMessage(H,c.value[H])}),Object.keys(u.value).forEach(H=>{P.mergeDateTimeFormat(H,u.value[H])}),Object.keys(f.value).forEach(H=>{P.mergeNumberFormat(H,f.value[H])}),P.escapeParameter=v,P.fallbackFormat=E,P.fallbackRoot=S,P.fallbackWarn=_,P.missingWarn=h,P.warnHtmlMessage=C}return pd(()=>{if(t.proxy==null||t.proxy.$i18n==null)throw Dt(At.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const P=s.value=t.proxy.$i18n.__composer;e==="global"?(o.value=P.locale.value,l.value=P.fallbackLocale.value,c.value=P.messages.value,u.value=P.datetimeFormats.value,f.value=P.numberFormats.value):r&&O(P)}),y}const nx=["locale","fallbackLocale","availableLocales"],Yu=["t","rt","d","n","tm","te"];function ix(t,e){const n=Object.create(null);return nx.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s)throw Dt(At.UNEXPECTED_ERROR);const a=vt(s.value)?{get(){return s.value.value},set(o){s.value.value=o}}:{get(){return s.get&&s.get()}};Object.defineProperty(n,r,a)}),t.config.globalProperties.$i18n=n,Yu.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s||!s.value)throw Dt(At.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${r}`,s)}),()=>{delete t.config.globalProperties.$i18n,Yu.forEach(r=>{delete t.config.globalProperties[`$${r}`]})}}I0();__INTLIFY_JIT_COMPILATION__?Au(A0):Au(b0);_0(Kv);g0(ap);if(__INTLIFY_PROD_DEVTOOLS__){const t=ai();t.__INTLIFY__=!0,s0(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}let ba=0;function Io(t,e,n){return{id:ba++,value:t,row:e,col:n}}function qu(t){return Array.from({length:t},()=>Array(t).fill(null))}function ju(t){return t.map(e=>e.map(n=>n?{...n}:null))}function rx(){const t=ts({grid:qu(4),score:0,highScore:0,gridSize:4,comboCount:0,bestCombo:0,gameOver:!1,won:!1,history:[]});let e=2;const n=new Set;t.highScore=i();function i(){try{return Number(localStorage.getItem("infini2048_highScore"))||0}catch{return 0}}function r(){try{localStorage.setItem("infini2048_highScore",String(t.highScore))}catch{}}function s(){try{const v=localStorage.getItem("infini2048_save");if(!v)return!1;const x=JSON.parse(v);t.grid=x.grid.map(A=>A.map(T=>T?{...T}:null)),t.score=x.score,t.gridSize=x.gridSize,t.gameOver=x.gameOver,t.comboCount=0,t.bestCombo=0,ba=x.tileIdCounter||0,e=x.maxTileEver||2,n.clear();for(const A of x.expandedMilestones||[])n.add(A);return!0}catch{return!1}}function a(){try{localStorage.setItem("infini2048_save",JSON.stringify({grid:t.grid,score:t.score,gridSize:t.gridSize,gameOver:t.gameOver,tileIdCounter:ba,expandedMilestones:Array.from(n),maxTileEver:e}))}catch{}}function o(){return{grid:ju(t.grid),score:t.score,comboCount:t.comboCount,gridSize:t.gridSize}}function l(){t.history.push(o()),t.history.length>50&&t.history.shift()}function c(){const v=[];for(let x=0;x<t.gridSize;x++)for(let A=0;A<t.gridSize;A++)t.grid[x][A]||v.push([x,A]);return v}function u(){const v=c();if(v.length===0)return!1;const[x,A]=v[Math.floor(Math.random()*v.length)];return t.grid[x][A]=Io(Math.random()<.9?2:4,x,A),!0}function f(v=4){ba=0,n.clear(),e=2,t.grid=qu(v),t.score=0,t.gridSize=v,t.gameOver=!1,t.won=!1,t.comboCount=0,t.bestCombo=0,t.history=[],u(),u(),a()}function h(){const v=t.gridSize,x=v+1,A=Array.from({length:x},(b,D)=>Array.from({length:x},(U,M)=>D<v&&M<v&&t.grid[D][M]?{...t.grid[D][M],row:D,col:M}:null));t.gridSize=x,t.grid=A;const T=[];for(let b=0;b<x;b++)A[b][x-1]||T.push([b,x-1]);for(let b=0;b<x-1;b++)A[x-1][b]||T.push([x-1,b]);for(let b=0;b<Math.min(2,T.length);b++){const[D,U]=T[b];A[D][U]=Io(Math.random()<.9?2:4,D,U)}a()}function _(){const v=2048*Math.pow(2,t.gridSize-4);return e>=v&&!n.has(v)?(n.add(v),!0):!1}function S(v){const x=v.filter(U=>U!==null),A=[];let T=0,b=0,D=0;for(;D<x.length;)if(D+1<x.length&&x[D].value===x[D+1].value){const U=x[D].value*2,M=Io(U,0,0);M.mergedFrom=!0,A.push(M),T+=U,b++,U>e&&(e=U),D+=2}else A.push(x[D]),D++;for(;A.length<v.length;)A.push(null);return{result:A,scoreGain:T,mergeCount:b}}function E(v){if(t.gameOver)return{moved:!1,mergeCount:0,expanded:!1};for(let M=0;M<t.gridSize;M++)for(let L=0;L<t.gridSize;L++)t.grid[M][L]&&(t.grid[M][L].mergedFrom=!1);l();const x=t.gridSize;let A=0,T=0;const b=ju(t.grid);if(v==="left")for(let M=0;M<x;M++){const{result:L,scoreGain:W,mergeCount:ie}=S(t.grid[M].slice());t.grid[M]=L.map((F,$)=>F?{...F,row:M,col:$}:null),T+=W,A+=ie}else if(v==="right")for(let M=0;M<x;M++){const L=t.grid[M].slice().reverse(),{result:W,scoreGain:ie,mergeCount:F}=S(L);t.grid[M]=W.reverse().map(($,Y)=>$?{...$,row:M,col:Y}:null),T+=ie,A+=F}else if(v==="up")for(let M=0;M<x;M++){const L=[];for(let $=0;$<x;$++)L.push(t.grid[$][M]);const{result:W,scoreGain:ie,mergeCount:F}=S(L);for(let $=0;$<x;$++)t.grid[$][M]=W[$]?{...W[$],row:$,col:M}:null;T+=ie,A+=F}else if(v==="down")for(let M=0;M<x;M++){const L=[];for(let $=x-1;$>=0;$--)L.push(t.grid[$][M]);const{result:W,scoreGain:ie,mergeCount:F}=S(L);for(let $=0;$<x;$++)t.grid[x-1-$][M]=W[$]?{...W[$],row:x-1-$,col:M}:null;T+=ie,A+=F}if(!!p(b,t.grid))return t.history.pop(),{moved:!1,mergeCount:0,expanded:!1};if(A>0){const M=A>=4?2:A>=3?1.5:A>=2?1.2:1;T=Math.round(T*M),t.comboCount=A,A>t.bestCombo&&(t.bestCombo=A)}else t.comboCount=0;t.score+=T,t.score>t.highScore&&(t.highScore=t.score,r());const U=_();return U&&h(),u(),d()||(t.gameOver=!0),a(),{moved:!0,mergeCount:A,expanded:U}}function p(v,x){for(let A=0;A<v.length;A++)for(let T=0;T<v[A].length;T++){const b=v[A][T],D=x[A][T];if(!(!b&&!D)&&(!b||!D||b.value!==D.value))return!1}return!0}function d(){var v,x;for(let A=0;A<t.gridSize;A++)for(let T=0;T<t.gridSize;T++){if(!t.grid[A][T])return!0;const b=t.grid[A][T].value;if(A+1<t.gridSize&&((v=t.grid[A+1][T])==null?void 0:v.value)===b||T+1<t.gridSize&&((x=t.grid[A][T+1])==null?void 0:x.value)===b)return!0}return!1}function C(){if(t.history.length===0)return!1;const v=t.history.pop();return t.grid=v.grid,t.score=v.score,t.comboCount=v.comboCount,t.gridSize=v.gridSize,t.gameOver=!1,a(),!0}return{state:t,initGame:f,loadGame:s,move:E,undo:C,canMove:d}}const ao=Wd("game",()=>{const t=rx(),e=nn(0),n=nn(!1),i=ln(()=>{var c;const l=[];for(let u=0;u<t.state.gridSize;u++)for(let f=0;f<t.state.gridSize;f++){const h=(c=t.state.grid[u])==null?void 0:c[f];h&&l.push({row:h.row,col:h.col,value:h.value,id:h.id,mergedFrom:h.mergedFrom})}return l});function r(){t.loadGame()||t.initGame(4)}function s(){t.initGame(4),e.value=0,n.value=!1}function a(l){const c=t.move(l);return e.value=c.moved?c.mergeCount:0,n.value=c.expanded,c}function o(){return t.undo()}return{state:t.state,tiles:i,lastMergeCount:e,lastExpanded:n,init:r,newGame:s,move:a,undo:o}}),Sc=Wd("settings",()=>{const t=ts({effectIntensity:.7,muted:!1,locale:navigator.language.startsWith("zh")?"zh-CN":"en-US"});function e(s){t.effectIntensity=Math.max(0,Math.min(1,s))}function n(){t.muted=!t.muted}function i(s){t.muted=s}function r(s){t.locale=s}return{settings:t,setEffectIntensity:e,toggleMuted:n,setMuted:i,setLocale:r}});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ec="162",sx=0,Ku=1,ax=2,bp=1,Ap=2,ni=3,Fi=0,rn=1,Gn=2,Pi=0,Xr=1,Ul=2,Zu=3,Ju=4,ox=5,rr=100,lx=101,cx=102,Qu=103,ef=104,ux=200,fx=201,hx=202,dx=203,Ol=204,Fl=205,px=206,mx=207,_x=208,gx=209,vx=210,xx=211,Mx=212,Sx=213,Ex=214,yx=0,Tx=1,bx=2,Ba=3,Ax=4,wx=5,Rx=6,Cx=7,wp=0,Lx=1,Px=2,Ii=0,Ix=1,Nx=2,Dx=3,Rp=4,Ux=5,Ox=6,Fx=7,Cp=300,Zr=301,Jr=302,Bl=303,Gl=304,oo=306,kl=1e3,bn=1001,Hl=1002,qt=1003,tf=1004,us=1005,zt=1006,No=1007,ar=1008,Ni=1009,Bx=1010,Gx=1011,yc=1012,Lp=1013,Ri=1014,oi=1015,Fs=1016,Pp=1017,Ip=1018,cr=1020,kx=1021,An=1023,Hx=1024,zx=1025,ur=1026,Qr=1027,Vx=1028,Np=1029,Wx=1030,Dp=1031,Up=1033,Do=33776,Uo=33777,Oo=33778,Fo=33779,nf=35840,rf=35841,sf=35842,af=35843,Op=36196,of=37492,lf=37496,cf=37808,uf=37809,ff=37810,hf=37811,df=37812,pf=37813,mf=37814,_f=37815,gf=37816,vf=37817,xf=37818,Mf=37819,Sf=37820,Ef=37821,Bo=36492,yf=36494,Tf=36495,Xx=36283,bf=36284,Af=36285,wf=36286,$x=3200,Yx=3201,Fp=0,qx=1,wi="",En="srgb",zi="srgb-linear",Tc="display-p3",lo="display-p3-linear",Ga="linear",dt="srgb",ka="rec709",Ha="p3",Mr=7680,Rf=519,jx=512,Kx=513,Zx=514,Bp=515,Jx=516,Qx=517,eM=518,tM=519,Cf=35044,Lf="300 es",zl=1035,li=2e3,za=2001;class is{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Go=Math.PI/180,Vl=180/Math.PI;function Vs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[t&255]+kt[t>>8&255]+kt[t>>16&255]+kt[t>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[n&63|128]+kt[n>>8&255]+"-"+kt[n>>16&255]+kt[n>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function Kt(t,e,n){return Math.max(e,Math.min(n,t))}function nM(t,e){return(t%e+e)%e}function ko(t,e,n){return(1-n)*t+n*e}function Pf(t){return(t&t-1)===0&&t!==0}function Wl(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function fs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function en(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,n=0){Je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,n,i,r,s,a,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],_=i[5],S=i[8],E=r[0],p=r[3],d=r[6],C=r[1],v=r[4],x=r[7],A=r[2],T=r[5],b=r[8];return s[0]=a*E+o*C+l*A,s[3]=a*p+o*v+l*T,s[6]=a*d+o*x+l*b,s[1]=c*E+u*C+f*A,s[4]=c*p+u*v+f*T,s[7]=c*d+u*x+f*b,s[2]=h*E+_*C+S*A,s[5]=h*p+_*v+S*T,s[8]=h*d+_*x+S*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,_=c*s-a*l,S=n*f+i*h+r*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=f*E,e[1]=(r*c-u*i)*E,e[2]=(o*i-r*a)*E,e[3]=h*E,e[4]=(u*n-r*l)*E,e[5]=(r*s-o*n)*E,e[6]=_*E,e[7]=(i*l-c*n)*E,e[8]=(a*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Ho.makeScale(e,n)),this}rotate(e){return this.premultiply(Ho.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ho.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ho=new Ye;function Gp(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Va(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function iM(){const t=Va("canvas");return t.style.display="block",t}const If={};function rM(t){t in If||(If[t]=!0,console.warn(t))}const Nf=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Df=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ea={[zi]:{transfer:Ga,primaries:ka,toReference:t=>t,fromReference:t=>t},[En]:{transfer:dt,primaries:ka,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[lo]:{transfer:Ga,primaries:Ha,toReference:t=>t.applyMatrix3(Df),fromReference:t=>t.applyMatrix3(Nf)},[Tc]:{transfer:dt,primaries:Ha,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Df),fromReference:t=>t.applyMatrix3(Nf).convertLinearToSRGB()}},sM=new Set([zi,lo]),st={enabled:!0,_workingColorSpace:zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!sM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ea[e].toReference,r=ea[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ea[t].primaries},getTransfer:function(t){return t===wi?Ga:ea[t].transfer}};function $r(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function zo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Sr;class kp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Sr===void 0&&(Sr=Va("canvas")),Sr.width=e.width,Sr.height=e.height;const i=Sr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Sr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Va("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=$r(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor($r(n[i]/255)*255):n[i]=$r(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aM=0;class Hp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=Vs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Vo(r[a].image)):s.push(Vo(r[a]))}else s=Vo(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Vo(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?kp.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oM=0;class Jt extends is{constructor(e=Jt.DEFAULT_IMAGE,n=Jt.DEFAULT_MAPPING,i=bn,r=bn,s=zt,a=ar,o=An,l=Ni,c=Jt.DEFAULT_ANISOTROPY,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=Vs(),this.name="",this.source=new Hp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kl:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case Hl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kl:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case Hl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Cp;Jt.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,n=0,i=0,r=1){Nt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],_=l[5],S=l[9],E=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-E)<.01&&Math.abs(S-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+E)<.1&&Math.abs(S+p)<.1&&Math.abs(c+_+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,x=(_+1)/2,A=(d+1)/2,T=(u+h)/4,b=(f+E)/4,D=(S+p)/4;return v>x&&v>A?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=b/i):x>A?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=T/r,s=D/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=b/s,r=D/s),this.set(i,r,s,n),this}let C=Math.sqrt((p-S)*(p-S)+(f-E)*(f-E)+(h-u)*(h-u));return Math.abs(C)<.001&&(C=1),this.x=(p-S)/C,this.y=(f-E)/C,this.z=(h-u)/C,this.w=Math.acos((c+_+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lM extends is{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new Jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Hp(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dr extends lM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class zp extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cM extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ws{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],_=s[a+1],S=s[a+2],E=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(o===1){e[n+0]=h,e[n+1]=_,e[n+2]=S,e[n+3]=E;return}if(f!==E||l!==h||c!==_||u!==S){let p=1-o;const d=l*h+c*_+u*S+f*E,C=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const A=Math.sqrt(v),T=Math.atan2(A,d*C);p=Math.sin(p*T)/A,o=Math.sin(o*T)/A}const x=o*C;if(l=l*p+h*x,c=c*p+_*x,u=u*p+S*x,f=f*p+E*x,p===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],_=s[a+2],S=s[a+3];return e[n]=o*S+u*f+l*_-c*h,e[n+1]=l*S+u*h+c*f-o*_,e[n+2]=c*S+u*_+o*h-l*f,e[n+3]=u*S-o*f-l*h-c*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),_=l(r/2),S=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*_*S,this._y=c*_*f-h*u*S,this._z=c*u*S+h*_*f,this._w=c*u*f-h*_*S;break;case"YXZ":this._x=h*u*f+c*_*S,this._y=c*_*f-h*u*S,this._z=c*u*S-h*_*f,this._w=c*u*f+h*_*S;break;case"ZXY":this._x=h*u*f-c*_*S,this._y=c*_*f+h*u*S,this._z=c*u*S+h*_*f,this._w=c*u*f-h*_*S;break;case"ZYX":this._x=h*u*f-c*_*S,this._y=c*_*f+h*u*S,this._z=c*u*S-h*_*f,this._w=c*u*f+h*_*S;break;case"YZX":this._x=h*u*f+c*_*S,this._y=c*_*f+h*u*S,this._z=c*u*S-h*_*f,this._w=c*u*f-h*_*S;break;case"XZY":this._x=h*u*f-c*_*S,this._y=c*_*f-h*u*S,this._z=c*u*S+h*_*f,this._w=c*u*f+h*_*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+o+f;if(h>0){const _=.5/Math.sqrt(h+1);this._w=.25/_,this._x=(u-l)*_,this._y=(s-c)*_,this._z=(a-r)*_}else if(i>o&&i>f){const _=2*Math.sqrt(1+i-o-f);this._w=(u-l)/_,this._x=.25*_,this._y=(r+a)/_,this._z=(s+c)/_}else if(o>f){const _=2*Math.sqrt(1+o-i-f);this._w=(s-c)/_,this._x=(r+a)/_,this._y=.25*_,this._z=(l+u)/_}else{const _=2*Math.sqrt(1+f-i-o);this._w=(a-r)/_,this._x=(s+c)/_,this._y=(l+u)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const _=1-n;return this._w=_*a+n*this._w,this._x=_*i+n*this._x,this._y=_*r+n*this._y,this._z=_*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,n=0,i=0){K.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Uf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Uf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wo.copy(this).projectOnVector(e),this.sub(Wo)}reflect(e){return this.sub(Wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wo=new K,Uf=new Ws;class Xs{constructor(e=new K(1/0,1/0,1/0),n=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(xn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(xn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=xn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,xn):xn.fromBufferAttribute(s,a),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ta.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ta.copy(i.boundingBox)),ta.applyMatrix4(e.matrixWorld),this.union(ta)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hs),na.subVectors(this.max,hs),Er.subVectors(e.a,hs),yr.subVectors(e.b,hs),Tr.subVectors(e.c,hs),vi.subVectors(yr,Er),xi.subVectors(Tr,yr),ji.subVectors(Er,Tr);let n=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-ji.z,ji.y,vi.z,0,-vi.x,xi.z,0,-xi.x,ji.z,0,-ji.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-ji.y,ji.x,0];return!Xo(n,Er,yr,Tr,na)||(n=[1,0,0,0,1,0,0,0,1],!Xo(n,Er,yr,Tr,na))?!1:(ia.crossVectors(vi,xi),n=[ia.x,ia.y,ia.z],Xo(n,Er,yr,Tr,na))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new K,new K,new K,new K,new K,new K,new K,new K],xn=new K,ta=new Xs,Er=new K,yr=new K,Tr=new K,vi=new K,xi=new K,ji=new K,hs=new K,na=new K,ia=new K,Ki=new K;function Xo(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Ki.fromArray(t,s);const o=r.x*Math.abs(Ki.x)+r.y*Math.abs(Ki.y)+r.z*Math.abs(Ki.z),l=e.dot(Ki),c=n.dot(Ki),u=i.dot(Ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const uM=new Xs,ds=new K,$o=new K;class co{constructor(e=new K,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):uM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ds.subVectors(e,this.center);const n=ds.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ds,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ds.copy(e.center).add($o)),this.expandByPoint(ds.copy(e.center).sub($o))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new K,Yo=new K,ra=new K,Mi=new K,qo=new K,sa=new K,jo=new K;class Vp{constructor(e=new K,n=new K(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Jn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,n),Jn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Yo.copy(e).add(n).multiplyScalar(.5),ra.copy(n).sub(e).normalize(),Mi.copy(this.origin).sub(Yo);const s=e.distanceTo(n)*.5,a=-this.direction.dot(ra),o=Mi.dot(this.direction),l=-Mi.dot(ra),c=Mi.lengthSq(),u=Math.abs(1-a*a);let f,h,_,S;if(u>0)if(f=a*l-o,h=a*o-l,S=s*u,f>=0)if(h>=-S)if(h<=S){const E=1/u;f*=E,h*=E,_=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),_=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),_=-f*f+h*(h+2*l)+c;else h<=-S?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),_=-f*f+h*(h+2*l)+c):h<=S?(f=0,h=Math.min(Math.max(-s,-l),s),_=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),_=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),_=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Yo).addScaledVector(ra,h),_}intersectSphere(e,n){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),r=Jn.dot(Jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,n,i,r,s){qo.subVectors(n,e),sa.subVectors(i,e),jo.crossVectors(qo,sa);let a=this.direction.dot(jo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mi.subVectors(this.origin,e);const l=o*this.direction.dot(sa.crossVectors(Mi,sa));if(l<0)return null;const c=o*this.direction.dot(qo.cross(Mi));if(c<0||l+c>a)return null;const u=-o*Mi.dot(jo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,n,i,r,s,a,o,l,c,u,f,h,_,S,E,p){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,f,h,_,S,E,p)}set(e,n,i,r,s,a,o,l,c,u,f,h,_,S,E,p){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=_,d[7]=S,d[11]=E,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/br.setFromMatrixColumn(e,0).length(),s=1/br.setFromMatrixColumn(e,1).length(),a=1/br.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,_=a*f,S=o*u,E=o*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=_+S*c,n[5]=h-E*c,n[9]=-o*l,n[2]=E-h*c,n[6]=S+_*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*u,_=l*f,S=c*u,E=c*f;n[0]=h+E*o,n[4]=S*o-_,n[8]=a*c,n[1]=a*f,n[5]=a*u,n[9]=-o,n[2]=_*o-S,n[6]=E+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*u,_=l*f,S=c*u,E=c*f;n[0]=h-E*o,n[4]=-a*f,n[8]=S+_*o,n[1]=_+S*o,n[5]=a*u,n[9]=E-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*u,_=a*f,S=o*u,E=o*f;n[0]=l*u,n[4]=S*c-_,n[8]=h*c+E,n[1]=l*f,n[5]=E*c+h,n[9]=_*c-S,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,_=a*c,S=o*l,E=o*c;n[0]=l*u,n[4]=E-h*f,n[8]=S*f+_,n[1]=f,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=_*f+S,n[10]=h-E*f}else if(e.order==="XZY"){const h=a*l,_=a*c,S=o*l,E=o*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+E,n[5]=a*u,n[9]=_*f-S,n[2]=S*f-_,n[6]=o*u,n[10]=E*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fM,e,hM)}lookAt(e,n,i){const r=this.elements;return an.subVectors(e,n),an.lengthSq()===0&&(an.z=1),an.normalize(),Si.crossVectors(i,an),Si.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Si.crossVectors(i,an)),Si.normalize(),aa.crossVectors(an,Si),r[0]=Si.x,r[4]=aa.x,r[8]=an.x,r[1]=Si.y,r[5]=aa.y,r[9]=an.y,r[2]=Si.z,r[6]=aa.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],_=i[13],S=i[2],E=i[6],p=i[10],d=i[14],C=i[3],v=i[7],x=i[11],A=i[15],T=r[0],b=r[4],D=r[8],U=r[12],M=r[1],L=r[5],W=r[9],ie=r[13],F=r[2],$=r[6],Y=r[10],Z=r[14],q=r[3],oe=r[7],le=r[11],de=r[15];return s[0]=a*T+o*M+l*F+c*q,s[4]=a*b+o*L+l*$+c*oe,s[8]=a*D+o*W+l*Y+c*le,s[12]=a*U+o*ie+l*Z+c*de,s[1]=u*T+f*M+h*F+_*q,s[5]=u*b+f*L+h*$+_*oe,s[9]=u*D+f*W+h*Y+_*le,s[13]=u*U+f*ie+h*Z+_*de,s[2]=S*T+E*M+p*F+d*q,s[6]=S*b+E*L+p*$+d*oe,s[10]=S*D+E*W+p*Y+d*le,s[14]=S*U+E*ie+p*Z+d*de,s[3]=C*T+v*M+x*F+A*q,s[7]=C*b+v*L+x*$+A*oe,s[11]=C*D+v*W+x*Y+A*le,s[15]=C*U+v*ie+x*Z+A*de,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],_=e[14],S=e[3],E=e[7],p=e[11],d=e[15];return S*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*_-i*l*_)+E*(+n*l*_-n*c*h+s*a*h-r*a*_+r*c*u-s*l*u)+p*(+n*c*f-n*o*_-s*a*f+i*a*_+s*o*u-i*c*u)+d*(-r*o*u-n*l*f+n*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],_=e[11],S=e[12],E=e[13],p=e[14],d=e[15],C=f*p*c-E*h*c+E*l*_-o*p*_-f*l*d+o*h*d,v=S*h*c-u*p*c-S*l*_+a*p*_+u*l*d-a*h*d,x=u*E*c-S*f*c+S*o*_-a*E*_-u*o*d+a*f*d,A=S*f*l-u*E*l-S*o*h+a*E*h+u*o*p-a*f*p,T=n*C+i*v+r*x+s*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return e[0]=C*b,e[1]=(E*h*s-f*p*s-E*r*_+i*p*_+f*r*d-i*h*d)*b,e[2]=(o*p*s-E*l*s+E*r*c-i*p*c-o*r*d+i*l*d)*b,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*_-i*l*_)*b,e[4]=v*b,e[5]=(u*p*s-S*h*s+S*r*_-n*p*_-u*r*d+n*h*d)*b,e[6]=(S*l*s-a*p*s-S*r*c+n*p*c+a*r*d-n*l*d)*b,e[7]=(a*h*s-u*l*s+u*r*c-n*h*c-a*r*_+n*l*_)*b,e[8]=x*b,e[9]=(S*f*s-u*E*s-S*i*_+n*E*_+u*i*d-n*f*d)*b,e[10]=(a*E*s-S*o*s+S*i*c-n*E*c-a*i*d+n*o*d)*b,e[11]=(u*o*s-a*f*s-u*i*c+n*f*c+a*i*_-n*o*_)*b,e[12]=A*b,e[13]=(u*E*r-S*f*r+S*i*h-n*E*h-u*i*p+n*f*p)*b,e[14]=(S*o*r-a*E*r-S*i*l+n*E*l+a*i*p-n*o*p)*b,e[15]=(a*f*r-u*o*r+u*i*l-n*f*l-a*i*h+n*o*h)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,f=o+o,h=s*c,_=s*u,S=s*f,E=a*u,p=a*f,d=o*f,C=l*c,v=l*u,x=l*f,A=i.x,T=i.y,b=i.z;return r[0]=(1-(E+d))*A,r[1]=(_+x)*A,r[2]=(S-v)*A,r[3]=0,r[4]=(_-x)*T,r[5]=(1-(h+d))*T,r[6]=(p+C)*T,r[7]=0,r[8]=(S+v)*b,r[9]=(p-C)*b,r[10]=(1-(h+E))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=br.set(r[0],r[1],r[2]).length();const a=br.set(r[4],r[5],r[6]).length(),o=br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);const c=1/s,u=1/a,f=1/o;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=f,Mn.elements[9]*=f,Mn.elements[10]*=f,n.setFromRotationMatrix(Mn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=li){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let _,S;if(o===li)_=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===za)_=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=li){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(a-s),h=(n+e)*c,_=(i+r)*u;let S,E;if(o===li)S=(a+s)*f,E=-2*f;else if(o===za)S=s*f,E=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=E,l[14]=-S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const br=new K,Mn=new xt,fM=new K(0,0,0),hM=new K(1,1,1),Si=new K,aa=new K,an=new K,Of=new xt,Ff=new Ws;class $n{constructor(e=0,n=0,i=0,r=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],_=r[10];switch(n){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,_),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Of.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Of,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ff.setFromEuler(this),this.setFromQuaternion(Ff,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class Wp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dM=0;const Bf=new K,Ar=new Ws,Qn=new xt,oa=new K,ps=new K,pM=new K,mM=new Ws,Gf=new K(1,0,0),kf=new K(0,1,0),Hf=new K(0,0,1),_M={type:"added"},gM={type:"removed"},Ko={type:"childadded",child:null},Zo={type:"childremoved",child:null};class Ft extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=Vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new K,n=new $n,i=new Ws,r=new K(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new Ye}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ar.setFromAxisAngle(e,n),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(e,n){return Ar.setFromAxisAngle(e,n),this.quaternion.premultiply(Ar),this}rotateX(e){return this.rotateOnAxis(Gf,e)}rotateY(e){return this.rotateOnAxis(kf,e)}rotateZ(e){return this.rotateOnAxis(Hf,e)}translateOnAxis(e,n){return Bf.copy(e).applyQuaternion(this.quaternion),this.position.add(Bf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Gf,e)}translateY(e){return this.translateOnAxis(kf,e)}translateZ(e){return this.translateOnAxis(Hf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?oa.copy(e):oa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(ps,oa,this.up):Qn.lookAt(oa,ps,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),Ar.setFromRotationMatrix(Qn),this.quaternion.premultiply(Ar.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_M),Ko.child=e,this.dispatchEvent(Ko),Ko.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(gM),Zo.child=e,this.dispatchEvent(Zo),Zo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,e,pM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,mM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),_=a(e.animations),S=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),_.length>0&&(i.animations=_),S.length>0&&(i.nodes=S)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new K(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new K,ei=new K,Jo=new K,ti=new K,wr=new K,Rr=new K,zf=new K,Qo=new K,el=new K,tl=new K;class kn{constructor(e=new K,n=new K,i=new K){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Sn.subVectors(e,n),r.cross(Sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Sn.subVectors(r,n),ei.subVectors(i,n),Jo.subVectors(e,n);const a=Sn.dot(Sn),o=Sn.dot(ei),l=Sn.dot(Jo),c=ei.dot(ei),u=ei.dot(Jo),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,_=(c*l-o*u)*h,S=(a*u-o*l)*h;return s.set(1-_-S,S,_)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l)}static isFrontFacing(e,n,i,r){return Sn.subVectors(i,n),ei.subVectors(e,n),Sn.cross(ei).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Sn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return kn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;wr.subVectors(r,i),Rr.subVectors(s,i),Qo.subVectors(e,i);const l=wr.dot(Qo),c=Rr.dot(Qo);if(l<=0&&c<=0)return n.copy(i);el.subVectors(e,r);const u=wr.dot(el),f=Rr.dot(el);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(wr,a);tl.subVectors(e,s);const _=wr.dot(tl),S=Rr.dot(tl);if(S>=0&&_<=S)return n.copy(s);const E=_*c-l*S;if(E<=0&&c>=0&&S<=0)return o=c/(c-S),n.copy(i).addScaledVector(Rr,o);const p=u*S-_*f;if(p<=0&&f-u>=0&&_-S>=0)return zf.subVectors(s,r),o=(f-u)/(f-u+(_-S)),n.copy(r).addScaledVector(zf,o);const d=1/(p+E+h);return a=E*d,o=h*d,n.copy(i).addScaledVector(wr,a).addScaledVector(Rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},la={h:0,s:0,l:0};function nl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Be{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=nM(e,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=nl(a,s,e+1/3),this.g=nl(a,s,e),this.b=nl(a,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,n=En){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=En){const i=Xp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}copyLinearToSRGB(e){return this.r=zo(e.r),this.g=zo(e.g),this.b=zo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return st.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Kt(Ht.r*255,0,255))*65536+Math.round(Kt(Ht.g*255,0,255))*256+Math.round(Kt(Ht.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=st.workingColorSpace){return st.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=En){st.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==En?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+n,Ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ei),e.getHSL(la);const i=ko(Ei.h,la.h,n),r=ko(Ei.s,la.s,n),s=ko(Ei.l,la.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Be;Be.NAMES=Xp;let vM=0;class rs extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=Vs(),this.name="",this.type="Material",this.blending=Xr,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ol,this.blendDst=Fl,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ol&&(i.blendSrc=this.blendSrc),this.blendDst!==Fl&&(i.blendDst=this.blendDst),this.blendEquation!==rr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ba&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class uo extends rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=wp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new K,ca=new Je;class fn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Cf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return rM("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ca.fromBufferAttribute(this,n),ca.applyMatrix3(e),this.setXY(n,ca.x,ca.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=fs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=fs(n,this.array)),n}setX(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=fs(n,this.array)),n}setY(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=fs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=fs(n,this.array)),n}setW(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cf&&(e.usage=this.usage),e}}class $p extends fn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Yp extends fn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class fr extends fn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let xM=0;const pn=new xt,il=new Ft,Cr=new K,on=new Xs,ms=new Xs,Lt=new K;class _i extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=Vs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gp(e)?Yp:$p)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,n,i){return pn.makeTranslation(e,n,i),this.applyMatrix4(pn),this}scale(e,n,i){return pn.makeScale(e,n,i),this.applyMatrix4(pn),this}lookAt(e){return il.lookAt(e),il.updateMatrix(),this.applyMatrix4(il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new fr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];on.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new co);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(on.min,ms.min),on.expandByPoint(Lt),Lt.addVectors(on.max,ms.max),on.expandByPoint(Lt)):(on.expandByPoint(ms.min),on.expandByPoint(ms.max))}on.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Lt.fromBufferAttribute(o,c),l&&(Cr.fromBufferAttribute(e,c),Lt.add(Cr)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new K,l[D]=new K;const c=new K,u=new K,f=new K,h=new Je,_=new Je,S=new Je,E=new K,p=new K;function d(D,U,M){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,U),f.fromBufferAttribute(i,M),h.fromBufferAttribute(s,D),_.fromBufferAttribute(s,U),S.fromBufferAttribute(s,M),u.sub(c),f.sub(c),_.sub(h),S.sub(h);const L=1/(_.x*S.y-S.x*_.y);isFinite(L)&&(E.copy(u).multiplyScalar(S.y).addScaledVector(f,-_.y).multiplyScalar(L),p.copy(f).multiplyScalar(_.x).addScaledVector(u,-S.x).multiplyScalar(L),o[D].add(E),o[U].add(E),o[M].add(E),l[D].add(p),l[U].add(p),l[M].add(p))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let D=0,U=C.length;D<U;++D){const M=C[D],L=M.start,W=M.count;for(let ie=L,F=L+W;ie<F;ie+=3)d(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const v=new K,x=new K,A=new K,T=new K;function b(D){A.fromBufferAttribute(r,D),T.copy(A);const U=o[D];v.copy(U),v.sub(A.multiplyScalar(A.dot(U))).normalize(),x.crossVectors(T,U);const L=x.dot(l[D])<0?-1:1;a.setXYZW(D,v.x,v.y,v.z,L)}for(let D=0,U=C.length;D<U;++D){const M=C[D],L=M.start,W=M.count;for(let ie=L,F=L+W;ie<F;ie+=3)b(e.getX(ie+0)),b(e.getX(ie+1)),b(e.getX(ie+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,_=i.count;h<_;h++)i.setXYZ(h,0,0,0);const r=new K,s=new K,a=new K,o=new K,l=new K,c=new K,u=new K,f=new K;if(e)for(let h=0,_=e.count;h<_;h+=3){const S=e.getX(h+0),E=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,S),s.fromBufferAttribute(n,E),a.fromBufferAttribute(n,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,S),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(S,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,_=n.count;h<_;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let _=0,S=0;for(let E=0,p=l.length;E<p;E++){o.isInterleavedBufferAttribute?_=l[E]*o.data.stride+o.offset:_=l[E]*u;for(let d=0;d<u;d++)h[S++]=c[_++]}return new fn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new _i,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],_=e(h,i);l.push(_)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const _=c[f];u.push(_.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,_=f.length;h<_;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vf=new xt,Zi=new Vp,ua=new co,Wf=new K,Lr=new K,Pr=new K,Ir=new K,rl=new K,fa=new K,ha=new Je,da=new Je,pa=new Je,Xf=new K,$f=new K,Yf=new K,ma=new K,_a=new K;class un extends Ft{constructor(e=new _i,n=new uo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){fa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(rl.fromBufferAttribute(f,e),a?fa.addScaledVector(rl,u):fa.addScaledVector(rl.sub(n),u))}n.add(fa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ua.copy(i.boundingSphere),ua.applyMatrix4(s),Zi.copy(e.ray).recast(e.near),!(ua.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(ua,Wf)===null||Zi.origin.distanceToSquared(Wf)>(e.far-e.near)**2))&&(Vf.copy(s).invert(),Zi.copy(e.ray).applyMatrix4(Vf),!(i.boundingBox!==null&&Zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Zi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,_=s.drawRange;if(o!==null)if(Array.isArray(a))for(let S=0,E=h.length;S<E;S++){const p=h[S],d=a[p.materialIndex],C=Math.max(p.start,_.start),v=Math.min(o.count,Math.min(p.start+p.count,_.start+_.count));for(let x=C,A=v;x<A;x+=3){const T=o.getX(x),b=o.getX(x+1),D=o.getX(x+2);r=ga(this,d,e,i,c,u,f,T,b,D),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const S=Math.max(0,_.start),E=Math.min(o.count,_.start+_.count);for(let p=S,d=E;p<d;p+=3){const C=o.getX(p),v=o.getX(p+1),x=o.getX(p+2);r=ga(this,a,e,i,c,u,f,C,v,x),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let S=0,E=h.length;S<E;S++){const p=h[S],d=a[p.materialIndex],C=Math.max(p.start,_.start),v=Math.min(l.count,Math.min(p.start+p.count,_.start+_.count));for(let x=C,A=v;x<A;x+=3){const T=x,b=x+1,D=x+2;r=ga(this,d,e,i,c,u,f,T,b,D),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const S=Math.max(0,_.start),E=Math.min(l.count,_.start+_.count);for(let p=S,d=E;p<d;p+=3){const C=p,v=p+1,x=p+2;r=ga(this,a,e,i,c,u,f,C,v,x),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function MM(t,e,n,i,r,s,a,o){let l;if(e.side===rn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Fi,o),l===null)return null;_a.copy(o),_a.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(_a);return c<n.near||c>n.far?null:{distance:c,point:_a.clone(),object:t}}function ga(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Lr),t.getVertexPosition(l,Pr),t.getVertexPosition(c,Ir);const u=MM(t,e,n,i,Lr,Pr,Ir,ma);if(u){r&&(ha.fromBufferAttribute(r,o),da.fromBufferAttribute(r,l),pa.fromBufferAttribute(r,c),u.uv=kn.getInterpolation(ma,Lr,Pr,Ir,ha,da,pa,new Je)),s&&(ha.fromBufferAttribute(s,o),da.fromBufferAttribute(s,l),pa.fromBufferAttribute(s,c),u.uv1=kn.getInterpolation(ma,Lr,Pr,Ir,ha,da,pa,new Je)),a&&(Xf.fromBufferAttribute(a,o),$f.fromBufferAttribute(a,l),Yf.fromBufferAttribute(a,c),u.normal=kn.getInterpolation(ma,Lr,Pr,Ir,Xf,$f,Yf,new K),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new K,materialIndex:0};kn.getNormal(Lr,Pr,Ir,f.normal),u.face=f}return u}class pr extends _i{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,_=0;S("z","y","x",-1,-1,i,n,e,a,s,0),S("z","y","x",1,-1,i,n,-e,a,s,1),S("x","z","y",1,1,e,i,n,r,a,2),S("x","z","y",1,-1,e,i,-n,r,a,3),S("x","y","z",1,-1,e,n,i,r,s,4),S("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new fr(c,3)),this.setAttribute("normal",new fr(u,3)),this.setAttribute("uv",new fr(f,2));function S(E,p,d,C,v,x,A,T,b,D,U){const M=x/b,L=A/D,W=x/2,ie=A/2,F=T/2,$=b+1,Y=D+1;let Z=0,q=0;const oe=new K;for(let le=0;le<Y;le++){const de=le*L-ie;for(let me=0;me<$;me++){const Pe=me*M-W;oe[E]=Pe*C,oe[p]=de*v,oe[d]=F,c.push(oe.x,oe.y,oe.z),oe[E]=0,oe[p]=0,oe[d]=T>0?1:-1,u.push(oe.x,oe.y,oe.z),f.push(me/b),f.push(1-le/D),Z+=1}}for(let le=0;le<D;le++)for(let de=0;de<b;de++){const me=h+de+$*le,Pe=h+de+$*(le+1),te=h+(de+1)+$*(le+1),fe=h+(de+1)+$*le;l.push(me,Pe,fe),l.push(Pe,te,fe),q+=6}o.addGroup(_,q,U),_+=q,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function es(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=es(t[n]);for(const r in i)e[r]=i[r]}return e}function SM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function qp(t){return t.getRenderTarget()===null?t.outputColorSpace:st.workingColorSpace}const EM={clone:es,merge:$t};var yM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yM,this.fragmentShader=TM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=es(e.uniforms),this.uniformsGroups=SM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class jp extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=li}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yi=new K,qf=new Je,jf=new Je;class Tn extends jp{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Vl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vl*2*Math.atan(Math.tan(Go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,n){return this.getViewBounds(e,qf,jf),n.subVectors(jf,qf)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Go*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Nr=-90,Dr=1;class bM extends Ft{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tn(Nr,Dr,e,n);r.layers=this.layers,this.add(r);const s=new Tn(Nr,Dr,e,n);s.layers=this.layers,this.add(s);const a=new Tn(Nr,Dr,e,n);a.layers=this.layers,this.add(a);const o=new Tn(Nr,Dr,e,n);o.layers=this.layers,this.add(o);const l=new Tn(Nr,Dr,e,n);l.layers=this.layers,this.add(l);const c=new Tn(Nr,Dr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===za)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,_),e.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class Kp extends Jt{constructor(e,n,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Zr,super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class AM extends dr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Kp(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:zt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new pr(5,5,5),s=new Bi({name:"CubemapFromEquirect",uniforms:es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Pi});s.uniforms.tEquirect.value=n;const a=new un(r,s),o=n.minFilter;return n.minFilter===ar&&(n.minFilter=zt),new bM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const sl=new K,wM=new K,RM=new Ye;class nr{constructor(e=new K(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=sl.subVectors(i,n).cross(wM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(sl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||RM.getNormalMatrix(e),r=this.coplanarPoint(sl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new co,va=new K;class bc{constructor(e=new nr,n=new nr,i=new nr,r=new nr,s=new nr,a=new nr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=li){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],_=r[8],S=r[9],E=r[10],p=r[11],d=r[12],C=r[13],v=r[14],x=r[15];if(i[0].setComponents(l-s,h-c,p-_,x-d).normalize(),i[1].setComponents(l+s,h+c,p+_,x+d).normalize(),i[2].setComponents(l+a,h+u,p+S,x+C).normalize(),i[3].setComponents(l-a,h-u,p-S,x-C).normalize(),i[4].setComponents(l-o,h-f,p-E,x-v).normalize(),n===li)i[5].setComponents(l+o,h+f,p+E,x+v).normalize();else if(n===za)i[5].setComponents(o,f,E,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(va.x=r.normal.x>0?e.max.x:e.min.x,va.y=r.normal.y>0?e.max.y:e.min.y,va.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(va)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zp(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function CM(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,_=f.byteLength,S=t.createBuffer();t.bindBuffer(u,S),t.bufferData(u,f,h),c.onUploadCallback();let E;if(f instanceof Float32Array)E=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)E=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)E=t.SHORT;else if(f instanceof Uint32Array)E=t.UNSIGNED_INT;else if(f instanceof Int32Array)E=t.INT;else if(f instanceof Int8Array)E=t.BYTE;else if(f instanceof Uint8Array)E=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)E=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:S,type:E,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:_}}function s(c,u,f){const h=u.array,_=u._updateRange,S=u.updateRanges;if(t.bindBuffer(f,c),_.count===-1&&S.length===0&&t.bufferSubData(f,0,h),S.length!==0){for(let E=0,p=S.length;E<p;E++){const d=S[E];n?t.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):t.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}_.count!==-1&&(n?t.bufferSubData(f,_.offset*h.BYTES_PER_ELEMENT,h,_.offset,_.count):t.bufferSubData(f,_.offset*h.BYTES_PER_ELEMENT,h.subarray(_.offset,_.offset+_.count)),_.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:a,remove:o,update:l}}class mr extends _i{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=n/l,_=[],S=[],E=[],p=[];for(let d=0;d<u;d++){const C=d*h-a;for(let v=0;v<c;v++){const x=v*f-s;S.push(x,-C,0),E.push(0,0,1),p.push(v/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let C=0;C<o;C++){const v=C+c*d,x=C+c*(d+1),A=C+1+c*(d+1),T=C+1+c*d;_.push(v,x,T),_.push(x,A,T)}this.setIndex(_),this.setAttribute("position",new fr(S,3)),this.setAttribute("normal",new fr(E,3)),this.setAttribute("uv",new fr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mr(e.width,e.height,e.widthSegments,e.heightSegments)}}var LM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,PM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,IM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,NM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,FM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,GM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,kM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,VM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,WM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,KM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,JM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,QM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aS="gl_FragColor = linearToOutputTexel( gl_FragColor );",oS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,lS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_S=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,MS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ES=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,TS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,CS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,LS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,PS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,IS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,US=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,OS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,FS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,$S=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,YS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,qS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,KS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,QS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,aE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,dE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_E=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ME=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,EE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,TE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,CE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,FE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,BE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,GE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,XE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$E=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ZE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,JE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ey=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ty=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ny=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ry=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ay=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ly=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:LM,alphahash_pars_fragment:PM,alphamap_fragment:IM,alphamap_pars_fragment:NM,alphatest_fragment:DM,alphatest_pars_fragment:UM,aomap_fragment:OM,aomap_pars_fragment:FM,batching_pars_vertex:BM,batching_vertex:GM,begin_vertex:kM,beginnormal_vertex:HM,bsdfs:zM,iridescence_fragment:VM,bumpmap_pars_fragment:WM,clipping_planes_fragment:XM,clipping_planes_pars_fragment:$M,clipping_planes_pars_vertex:YM,clipping_planes_vertex:qM,color_fragment:jM,color_pars_fragment:KM,color_pars_vertex:ZM,color_vertex:JM,common:QM,cube_uv_reflection_fragment:eS,defaultnormal_vertex:tS,displacementmap_pars_vertex:nS,displacementmap_vertex:iS,emissivemap_fragment:rS,emissivemap_pars_fragment:sS,colorspace_fragment:aS,colorspace_pars_fragment:oS,envmap_fragment:lS,envmap_common_pars_fragment:cS,envmap_pars_fragment:uS,envmap_pars_vertex:fS,envmap_physical_pars_fragment:yS,envmap_vertex:hS,fog_vertex:dS,fog_pars_vertex:pS,fog_fragment:mS,fog_pars_fragment:_S,gradientmap_pars_fragment:gS,lightmap_fragment:vS,lightmap_pars_fragment:xS,lights_lambert_fragment:MS,lights_lambert_pars_fragment:SS,lights_pars_begin:ES,lights_toon_fragment:TS,lights_toon_pars_fragment:bS,lights_phong_fragment:AS,lights_phong_pars_fragment:wS,lights_physical_fragment:RS,lights_physical_pars_fragment:CS,lights_fragment_begin:LS,lights_fragment_maps:PS,lights_fragment_end:IS,logdepthbuf_fragment:NS,logdepthbuf_pars_fragment:DS,logdepthbuf_pars_vertex:US,logdepthbuf_vertex:OS,map_fragment:FS,map_pars_fragment:BS,map_particle_fragment:GS,map_particle_pars_fragment:kS,metalnessmap_fragment:HS,metalnessmap_pars_fragment:zS,morphinstance_vertex:VS,morphcolor_vertex:WS,morphnormal_vertex:XS,morphtarget_pars_vertex:$S,morphtarget_vertex:YS,normal_fragment_begin:qS,normal_fragment_maps:jS,normal_pars_fragment:KS,normal_pars_vertex:ZS,normal_vertex:JS,normalmap_pars_fragment:QS,clearcoat_normal_fragment_begin:eE,clearcoat_normal_fragment_maps:tE,clearcoat_pars_fragment:nE,iridescence_pars_fragment:iE,opaque_fragment:rE,packing:sE,premultiplied_alpha_fragment:aE,project_vertex:oE,dithering_fragment:lE,dithering_pars_fragment:cE,roughnessmap_fragment:uE,roughnessmap_pars_fragment:fE,shadowmap_pars_fragment:hE,shadowmap_pars_vertex:dE,shadowmap_vertex:pE,shadowmask_pars_fragment:mE,skinbase_vertex:_E,skinning_pars_vertex:gE,skinning_vertex:vE,skinnormal_vertex:xE,specularmap_fragment:ME,specularmap_pars_fragment:SE,tonemapping_fragment:EE,tonemapping_pars_fragment:yE,transmission_fragment:TE,transmission_pars_fragment:bE,uv_pars_fragment:AE,uv_pars_vertex:wE,uv_vertex:RE,worldpos_vertex:CE,background_vert:LE,background_frag:PE,backgroundCube_vert:IE,backgroundCube_frag:NE,cube_vert:DE,cube_frag:UE,depth_vert:OE,depth_frag:FE,distanceRGBA_vert:BE,distanceRGBA_frag:GE,equirect_vert:kE,equirect_frag:HE,linedashed_vert:zE,linedashed_frag:VE,meshbasic_vert:WE,meshbasic_frag:XE,meshlambert_vert:$E,meshlambert_frag:YE,meshmatcap_vert:qE,meshmatcap_frag:jE,meshnormal_vert:KE,meshnormal_frag:ZE,meshphong_vert:JE,meshphong_frag:QE,meshphysical_vert:ey,meshphysical_frag:ty,meshtoon_vert:ny,meshtoon_frag:iy,points_vert:ry,points_frag:sy,shadow_vert:ay,shadow_frag:oy,sprite_vert:ly,sprite_frag:cy},_e={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Fn={basic:{uniforms:$t([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:$t([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Be(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:$t([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:$t([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:$t([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Be(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:$t([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:$t([_e.points,_e.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:$t([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:$t([_e.common,_e.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:$t([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:$t([_e.sprite,_e.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:$t([_e.common,_e.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:$t([_e.lights,_e.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Fn.physical={uniforms:$t([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const xa={r:0,b:0,g:0},Qi=new $n,uy=new xt;function fy(t,e,n,i,r,s,a){const o=new Be(0);let l=s===!0?0:1,c,u,f=null,h=0,_=null;function S(p,d){let C=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?n:e).get(v)),v===null?E(o,l):v&&v.isColor&&(E(v,1),C=!0);const x=t.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||C)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===oo)?(u===void 0&&(u=new un(new pr(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:es(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Qi.copy(d.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(uy.makeRotationFromEuler(Qi)),u.material.toneMapped=st.getTransfer(v.colorSpace)!==dt,(f!==v||h!==v.version||_!==t.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,_=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new un(new mr(2,2),new Bi({name:"BackgroundMaterial",uniforms:es(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=st.getTransfer(v.colorSpace)!==dt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||_!==t.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,_=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function E(p,d){p.getRGB(xa,qp(t)),i.buffers.color.setClear(xa.r,xa.g,xa.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),l=d,E(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,E(o,l)},render:S}}function hy(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function f(F,$,Y,Z,q){let oe=!1;if(a){const le=E(Z,Y,$);c!==le&&(c=le,_(c.object)),oe=d(F,Z,Y,q),oe&&C(F,Z,Y,q)}else{const le=$.wireframe===!0;(c.geometry!==Z.id||c.program!==Y.id||c.wireframe!==le)&&(c.geometry=Z.id,c.program=Y.id,c.wireframe=le,oe=!0)}q!==null&&n.update(q,t.ELEMENT_ARRAY_BUFFER),(oe||u)&&(u=!1,D(F,$,Y,Z),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(q).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function _(F){return i.isWebGL2?t.bindVertexArray(F):s.bindVertexArrayOES(F)}function S(F){return i.isWebGL2?t.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function E(F,$,Y){const Z=Y.wireframe===!0;let q=o[F.id];q===void 0&&(q={},o[F.id]=q);let oe=q[$.id];oe===void 0&&(oe={},q[$.id]=oe);let le=oe[Z];return le===void 0&&(le=p(h()),oe[Z]=le),le}function p(F){const $=[],Y=[],Z=[];for(let q=0;q<r;q++)$[q]=0,Y[q]=0,Z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:Y,attributeDivisors:Z,object:F,attributes:{},index:null}}function d(F,$,Y,Z){const q=c.attributes,oe=$.attributes;let le=0;const de=Y.getAttributes();for(const me in de)if(de[me].location>=0){const te=q[me];let fe=oe[me];if(fe===void 0&&(me==="instanceMatrix"&&F.instanceMatrix&&(fe=F.instanceMatrix),me==="instanceColor"&&F.instanceColor&&(fe=F.instanceColor)),te===void 0||te.attribute!==fe||fe&&te.data!==fe.data)return!0;le++}return c.attributesNum!==le||c.index!==Z}function C(F,$,Y,Z){const q={},oe=$.attributes;let le=0;const de=Y.getAttributes();for(const me in de)if(de[me].location>=0){let te=oe[me];te===void 0&&(me==="instanceMatrix"&&F.instanceMatrix&&(te=F.instanceMatrix),me==="instanceColor"&&F.instanceColor&&(te=F.instanceColor));const fe={};fe.attribute=te,te&&te.data&&(fe.data=te.data),q[me]=fe,le++}c.attributes=q,c.attributesNum=le,c.index=Z}function v(){const F=c.newAttributes;for(let $=0,Y=F.length;$<Y;$++)F[$]=0}function x(F){A(F,0)}function A(F,$){const Y=c.newAttributes,Z=c.enabledAttributes,q=c.attributeDivisors;Y[F]=1,Z[F]===0&&(t.enableVertexAttribArray(F),Z[F]=1),q[F]!==$&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,$),q[F]=$)}function T(){const F=c.newAttributes,$=c.enabledAttributes;for(let Y=0,Z=$.length;Y<Z;Y++)$[Y]!==F[Y]&&(t.disableVertexAttribArray(Y),$[Y]=0)}function b(F,$,Y,Z,q,oe,le){le===!0?t.vertexAttribIPointer(F,$,Y,q,oe):t.vertexAttribPointer(F,$,Y,Z,q,oe)}function D(F,$,Y,Z){if(i.isWebGL2===!1&&(F.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const q=Z.attributes,oe=Y.getAttributes(),le=$.defaultAttributeValues;for(const de in oe){const me=oe[de];if(me.location>=0){let Pe=q[de];if(Pe===void 0&&(de==="instanceMatrix"&&F.instanceMatrix&&(Pe=F.instanceMatrix),de==="instanceColor"&&F.instanceColor&&(Pe=F.instanceColor)),Pe!==void 0){const te=Pe.normalized,fe=Pe.itemSize,ge=n.get(Pe);if(ge===void 0)continue;const Ce=ge.buffer,be=ge.type,Se=ge.bytesPerElement,Ge=i.isWebGL2===!0&&(be===t.INT||be===t.UNSIGNED_INT||Pe.gpuType===Lp);if(Pe.isInterleavedBufferAttribute){const Le=Pe.data,y=Le.stride,O=Pe.offset;if(Le.isInstancedInterleavedBuffer){for(let P=0;P<me.locationSize;P++)A(me.location+P,Le.meshPerAttribute);F.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let P=0;P<me.locationSize;P++)x(me.location+P);t.bindBuffer(t.ARRAY_BUFFER,Ce);for(let P=0;P<me.locationSize;P++)b(me.location+P,fe/me.locationSize,be,te,y*Se,(O+fe/me.locationSize*P)*Se,Ge)}else{if(Pe.isInstancedBufferAttribute){for(let Le=0;Le<me.locationSize;Le++)A(me.location+Le,Pe.meshPerAttribute);F.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let Le=0;Le<me.locationSize;Le++)x(me.location+Le);t.bindBuffer(t.ARRAY_BUFFER,Ce);for(let Le=0;Le<me.locationSize;Le++)b(me.location+Le,fe/me.locationSize,be,te,fe*Se,fe/me.locationSize*Le*Se,Ge)}}else if(le!==void 0){const te=le[de];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(me.location,te);break;case 3:t.vertexAttrib3fv(me.location,te);break;case 4:t.vertexAttrib4fv(me.location,te);break;default:t.vertexAttrib1fv(me.location,te)}}}}T()}function U(){W();for(const F in o){const $=o[F];for(const Y in $){const Z=$[Y];for(const q in Z)S(Z[q].object),delete Z[q];delete $[Y]}delete o[F]}}function M(F){if(o[F.id]===void 0)return;const $=o[F.id];for(const Y in $){const Z=$[Y];for(const q in Z)S(Z[q].object),delete Z[q];delete $[Y]}delete o[F.id]}function L(F){for(const $ in o){const Y=o[$];if(Y[F.id]===void 0)continue;const Z=Y[F.id];for(const q in Z)S(Z[q].object),delete Z[q];delete Y[F.id]}}function W(){ie(),u=!0,c!==l&&(c=l,_(c.object))}function ie(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:W,resetDefaultState:ie,dispose:U,releaseStatesOfGeometry:M,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:x,disableUnusedAttributes:T}}function dy(t,e,n,i){const r=i.isWebGL2;let s;function a(u){s=u}function o(u,f){t.drawArrays(s,u,f),n.update(f,s,1)}function l(u,f,h){if(h===0)return;let _,S;if(r)_=t,S="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[S](s,u,f,h),n.update(f,s,h)}function c(u,f,h){if(h===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let S=0;S<h;S++)this.render(u[S],f[S]);else{_.multiDrawArraysWEBGL(s,u,0,f,0,h);let S=0;for(let E=0;E<h;E++)S+=f[E];n.update(S,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function py(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),S=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),E=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),C=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,x=a||e.has("OES_texture_float"),A=v&&x,T=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:_,maxCubemapSize:S,maxAttributes:E,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:C,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:A,maxSamples:T}}function my(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new nr,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const _=f.length!==0||h||i!==0||r;return r=h,i=f.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,_){const S=f.clippingPlanes,E=f.clipIntersection,p=f.clipShadows,d=t.get(f);if(!r||S===null||S.length===0||s&&!p)s?u(null):c();else{const C=s?0:i,v=C*4;let x=d.clippingState||null;l.value=x,x=u(S,h,v,_);for(let A=0;A!==v;++A)x[A]=n[A];d.clippingState=x,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,_,S){const E=f!==null?f.length:0;let p=null;if(E!==0){if(p=l.value,S!==!0||p===null){const d=_+E*4,C=h.matrixWorldInverse;o.getNormalMatrix(C),(p===null||p.length<d)&&(p=new Float32Array(d));for(let v=0,x=_;v!==E;++v,x+=4)a.copy(f[v]).applyMatrix4(C,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,p}}function _y(t){let e=new WeakMap;function n(a,o){return o===Bl?a.mapping=Zr:o===Gl&&(a.mapping=Jr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Bl||o===Gl)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new AM(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ac extends jp{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Gr=4,Kf=[.125,.215,.35,.446,.526,.582],sr=20,al=new Ac,Zf=new Be;let ol=null,ll=0,cl=0;const ir=(1+Math.sqrt(5))/2,Ur=1/ir,Jf=[new K(1,1,1),new K(-1,1,1),new K(1,1,-1),new K(-1,1,-1),new K(0,ir,Ur),new K(0,ir,-Ur),new K(Ur,0,ir),new K(-Ur,0,ir),new K(ir,Ur,0),new K(-ir,Ur,0)];class Qf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ol=this._renderer.getRenderTarget(),ll=this._renderer.getActiveCubeFace(),cl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ol,ll,cl),e.scissorTest=!1,Ma(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Zr||e.mapping===Jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ol=this._renderer.getRenderTarget(),ll=this._renderer.getActiveCubeFace(),cl=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:Fs,format:An,colorSpace:zi,depthBuffer:!1},r=eh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eh(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gy(s)),this._blurMaterial=vy(s,e,n)}return r}_compileMaterial(e){const n=new un(this._lodPlanes[0],e);this._renderer.compile(n,al)}_sceneToCubeUV(e,n,i,r){const o=new Tn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Zf),u.toneMapping=Ii,u.autoClear=!1;const _=new uo({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),S=new un(new pr,_);let E=!1;const p=e.background;p?p.isColor&&(_.color.copy(p),e.background=null,E=!0):(_.color.copy(Zf),E=!0);for(let d=0;d<6;d++){const C=d%3;C===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):C===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const v=this._cubeSize;Ma(r,C*v,d>2?v:0,v,v),u.setRenderTarget(r),E&&u.render(S,o),u.render(e,o)}S.geometry.dispose(),S.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Zr||e.mapping===Jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=th());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new un(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ma(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,al)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Jf[(r-1)%Jf.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new un(this._lodPlanes[r],c),h=c.uniforms,_=this._sizeLods[i]-1,S=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*sr-1),E=s/S,p=isFinite(s)?1+Math.floor(u*E):sr;p>sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${sr}`);const d=[];let C=0;for(let b=0;b<sr;++b){const D=b/E,U=Math.exp(-D*D/2);d.push(U),b===0?C+=U:b<p&&(C+=2*U)}for(let b=0;b<d.length;b++)d[b]=d[b]/C;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=S,h.mipInt.value=v-i;const x=this._sizeLods[r],A=3*x*(r>v-Gr?r-v+Gr:0),T=4*(this._cubeSize-x);Ma(n,A,T,3*x,2*x),l.setRenderTarget(n),l.render(f,al)}}function gy(t){const e=[],n=[],i=[];let r=t;const s=t-Gr+1+Kf.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-Gr?l=Kf[a-t+Gr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],_=6,S=6,E=3,p=2,d=1,C=new Float32Array(E*S*_),v=new Float32Array(p*S*_),x=new Float32Array(d*S*_);for(let T=0;T<_;T++){const b=T%3*2/3-1,D=T>2?0:-1,U=[b,D,0,b+2/3,D,0,b+2/3,D+1,0,b,D,0,b+2/3,D+1,0,b,D+1,0];C.set(U,E*S*T),v.set(h,p*S*T);const M=[T,T,T,T,T,T];x.set(M,d*S*T)}const A=new _i;A.setAttribute("position",new fn(C,E)),A.setAttribute("uv",new fn(v,p)),A.setAttribute("faceIndex",new fn(x,d)),e.push(A),r>Gr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function eh(t,e,n){const i=new dr(t,e,n);return i.texture.mapping=oo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ma(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function vy(t,e,n){const i=new Float32Array(sr),r=new K(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function th(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function nh(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function wc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xy(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Bl||l===Gl,u=l===Zr||l===Jr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return n===null&&(n=new Qf(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new Qf(t));const h=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function My(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Sy(t,e,n,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const S in h.attributes)e.remove(h.attributes[S]);for(const S in h.morphAttributes){const E=h.morphAttributes[S];for(let p=0,d=E.length;p<d;p++)e.remove(E[p])}h.removeEventListener("dispose",a),delete r[h.id];const _=s.get(h);_&&(e.remove(_),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const S in h)e.update(h[S],t.ARRAY_BUFFER);const _=f.morphAttributes;for(const S in _){const E=_[S];for(let p=0,d=E.length;p<d;p++)e.update(E[p],t.ARRAY_BUFFER)}}function c(f){const h=[],_=f.index,S=f.attributes.position;let E=0;if(_!==null){const C=_.array;E=_.version;for(let v=0,x=C.length;v<x;v+=3){const A=C[v+0],T=C[v+1],b=C[v+2];h.push(A,T,T,b,b,A)}}else if(S!==void 0){const C=S.array;E=S.version;for(let v=0,x=C.length/3-1;v<x;v+=3){const A=v+0,T=v+1,b=v+2;h.push(A,T,T,b,b,A)}}else return;const p=new(Gp(h)?Yp:$p)(h,1);p.version=E;const d=s.get(f);d&&e.remove(d),s.set(f,p)}function u(f){const h=s.get(f);if(h){const _=f.index;_!==null&&h.version<_.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Ey(t,e,n,i){const r=i.isWebGL2;let s;function a(_){s=_}let o,l;function c(_){o=_.type,l=_.bytesPerElement}function u(_,S){t.drawElements(s,S,o,_*l),n.update(S,s,1)}function f(_,S,E){if(E===0)return;let p,d;if(r)p=t,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,S,o,_*l,E),n.update(S,s,E)}function h(_,S,E){if(E===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<E;d++)this.render(_[d]/l,S[d]);else{p.multiDrawElementsWEBGL(s,S,0,o,_,0,E);let d=0;for(let C=0;C<E;C++)d+=S[C];n.update(d,s,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function yy(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Ty(t,e){return t[0]-e[0]}function by(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Ay(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new Nt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const S=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,E=S!==void 0?S.length:0;let p=s.get(u);if(p===void 0||p.count!==E){let ie=function(){L.dispose(),s.delete(u),u.removeEventListener("dispose",ie)};var _=ie;p!==void 0&&p.texture.dispose();const d=u.morphAttributes.position!==void 0,C=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,x=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let b=0;d===!0&&(b=1),C===!0&&(b=2),v===!0&&(b=3);let D=u.attributes.position.count*b,U=1;D>e.maxTextureSize&&(U=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const M=new Float32Array(D*U*4*E),L=new zp(M,D,U,E);L.type=oi,L.needsUpdate=!0;const W=b*4;for(let F=0;F<E;F++){const $=x[F],Y=A[F],Z=T[F],q=D*U*4*F;for(let oe=0;oe<$.count;oe++){const le=oe*W;d===!0&&(a.fromBufferAttribute($,oe),M[q+le+0]=a.x,M[q+le+1]=a.y,M[q+le+2]=a.z,M[q+le+3]=0),C===!0&&(a.fromBufferAttribute(Y,oe),M[q+le+4]=a.x,M[q+le+5]=a.y,M[q+le+6]=a.z,M[q+le+7]=0),v===!0&&(a.fromBufferAttribute(Z,oe),M[q+le+8]=a.x,M[q+le+9]=a.y,M[q+le+10]=a.z,M[q+le+11]=Z.itemSize===4?a.w:1)}}p={count:E,texture:L,size:new Je(D,U)},s.set(u,p),u.addEventListener("dispose",ie)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(t,"morphTexture",c.morphTexture,n);else{let d=0;for(let v=0;v<h.length;v++)d+=h[v];const C=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(t,"morphTargetBaseInfluence",C),f.getUniforms().setValue(t,"morphTargetInfluences",h)}f.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const S=h===void 0?0:h.length;let E=i[u.id];if(E===void 0||E.length!==S){E=[];for(let x=0;x<S;x++)E[x]=[x,0];i[u.id]=E}for(let x=0;x<S;x++){const A=E[x];A[0]=x,A[1]=h[x]}E.sort(by);for(let x=0;x<8;x++)x<S&&E[x][1]?(o[x][0]=E[x][0],o[x][1]=E[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Ty);const p=u.morphAttributes.position,d=u.morphAttributes.normal;let C=0;for(let x=0;x<8;x++){const A=o[x],T=A[0],b=A[1];T!==Number.MAX_SAFE_INTEGER&&b?(p&&u.getAttribute("morphTarget"+x)!==p[T]&&u.setAttribute("morphTarget"+x,p[T]),d&&u.getAttribute("morphNormal"+x)!==d[T]&&u.setAttribute("morphNormal"+x,d[T]),r[x]=b,C+=b):(p&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),d&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const v=u.morphTargetsRelative?1:1-C;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function wy(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class Jp extends Jt{constructor(e,n,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:ur,u!==ur&&u!==Qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ur&&(i=Ri),i===void 0&&u===Qr&&(i=cr),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:qt,this.minFilter=l!==void 0?l:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Qp=new Jt,em=new Jp(1,1);em.compareFunction=Bp;const tm=new zp,nm=new cM,im=new Kp,ih=[],rh=[],sh=new Float32Array(16),ah=new Float32Array(9),oh=new Float32Array(4);function ss(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=ih[r];if(s===void 0&&(s=new Float32Array(r),ih[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function fo(t,e){let n=rh[e];n===void 0&&(n=new Int32Array(e),rh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Ry(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Cy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2fv(this.addr,e),Rt(n,e)}}function Ly(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wt(n,e))return;t.uniform3fv(this.addr,e),Rt(n,e)}}function Py(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4fv(this.addr,e),Rt(n,e)}}function Iy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rt(n,e)}else{if(wt(n,i))return;oh.set(i),t.uniformMatrix2fv(this.addr,!1,oh),Rt(n,i)}}function Ny(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rt(n,e)}else{if(wt(n,i))return;ah.set(i),t.uniformMatrix3fv(this.addr,!1,ah),Rt(n,i)}}function Dy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rt(n,e)}else{if(wt(n,i))return;sh.set(i),t.uniformMatrix4fv(this.addr,!1,sh),Rt(n,i)}}function Uy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Oy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2iv(this.addr,e),Rt(n,e)}}function Fy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3iv(this.addr,e),Rt(n,e)}}function By(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4iv(this.addr,e),Rt(n,e)}}function Gy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ky(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2uiv(this.addr,e),Rt(n,e)}}function Hy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3uiv(this.addr,e),Rt(n,e)}}function zy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4uiv(this.addr,e),Rt(n,e)}}function Vy(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?em:Qp;n.setTexture2D(e||s,r)}function Wy(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||nm,r)}function Xy(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||im,r)}function $y(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||tm,r)}function Yy(t){switch(t){case 5126:return Ry;case 35664:return Cy;case 35665:return Ly;case 35666:return Py;case 35674:return Iy;case 35675:return Ny;case 35676:return Dy;case 5124:case 35670:return Uy;case 35667:case 35671:return Oy;case 35668:case 35672:return Fy;case 35669:case 35673:return By;case 5125:return Gy;case 36294:return ky;case 36295:return Hy;case 36296:return zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Vy;case 35679:case 36299:case 36307:return Wy;case 35680:case 36300:case 36308:case 36293:return Xy;case 36289:case 36303:case 36311:case 36292:return $y}}function qy(t,e){t.uniform1fv(this.addr,e)}function jy(t,e){const n=ss(e,this.size,2);t.uniform2fv(this.addr,n)}function Ky(t,e){const n=ss(e,this.size,3);t.uniform3fv(this.addr,n)}function Zy(t,e){const n=ss(e,this.size,4);t.uniform4fv(this.addr,n)}function Jy(t,e){const n=ss(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Qy(t,e){const n=ss(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function eT(t,e){const n=ss(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function tT(t,e){t.uniform1iv(this.addr,e)}function nT(t,e){t.uniform2iv(this.addr,e)}function iT(t,e){t.uniform3iv(this.addr,e)}function rT(t,e){t.uniform4iv(this.addr,e)}function sT(t,e){t.uniform1uiv(this.addr,e)}function aT(t,e){t.uniform2uiv(this.addr,e)}function oT(t,e){t.uniform3uiv(this.addr,e)}function lT(t,e){t.uniform4uiv(this.addr,e)}function cT(t,e,n){const i=this.cache,r=e.length,s=fo(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Qp,s[a])}function uT(t,e,n){const i=this.cache,r=e.length,s=fo(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||nm,s[a])}function fT(t,e,n){const i=this.cache,r=e.length,s=fo(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||im,s[a])}function hT(t,e,n){const i=this.cache,r=e.length,s=fo(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||tm,s[a])}function dT(t){switch(t){case 5126:return qy;case 35664:return jy;case 35665:return Ky;case 35666:return Zy;case 35674:return Jy;case 35675:return Qy;case 35676:return eT;case 5124:case 35670:return tT;case 35667:case 35671:return nT;case 35668:case 35672:return iT;case 35669:case 35673:return rT;case 5125:return sT;case 36294:return aT;case 36295:return oT;case 36296:return lT;case 35678:case 36198:case 36298:case 36306:case 35682:return cT;case 35679:case 36299:case 36307:return uT;case 35680:case 36300:case 36308:case 36293:return fT;case 36289:case 36303:case 36311:case 36292:return hT}}class pT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Yy(n.type)}}class mT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=dT(n.type)}}class _T{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const ul=/(\w+)(\])?(\[|\.)?/g;function lh(t,e){t.seq.push(e),t.map[e.id]=e}function gT(t,e,n){const i=t.name,r=i.length;for(ul.lastIndex=0;;){const s=ul.exec(i),a=ul.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){lh(n,c===void 0?new pT(o,t,e):new mT(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new _T(o),lh(n,f)),n=f}}}class Aa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);gT(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function ch(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const vT=37297;let xT=0;function MT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function ST(t){const e=st.getPrimaries(st.workingColorSpace),n=st.getPrimaries(t);let i;switch(e===n?i="":e===Ha&&n===ka?i="LinearDisplayP3ToLinearSRGB":e===ka&&n===Ha&&(i="LinearSRGBToLinearDisplayP3"),t){case zi:case lo:return[i,"LinearTransferOETF"];case En:case Tc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function uh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+MT(t.getShaderSource(e),a)}else return r}function ET(t,e){const n=ST(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function yT(t,e){let n;switch(e){case Ix:n="Linear";break;case Nx:n="Reinhard";break;case Dx:n="OptimizedCineon";break;case Rp:n="ACESFilmic";break;case Ox:n="AgX";break;case Fx:n="Neutral";break;case Ux:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function TT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(kr).join(`
`)}function bT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kr).join(`
`)}function AT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function wT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function kr(t){return t!==""}function fh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xl(t){return t.replace(RT,LT)}const CT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function LT(t,e){let n=$e[e];if(n===void 0){const i=CT.get(e);if(i!==void 0)n=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xl(n)}const PT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dh(t){return t.replace(PT,IT)}function IT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ph(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	`;return t.isWebGL2&&(e+=`precision ${t.precision} sampler3D;
		precision ${t.precision} sampler2DArray;
		precision ${t.precision} sampler2DShadow;
		precision ${t.precision} samplerCubeShadow;
		precision ${t.precision} sampler2DArrayShadow;
		precision ${t.precision} isampler2D;
		precision ${t.precision} isampler3D;
		precision ${t.precision} isamplerCube;
		precision ${t.precision} isampler2DArray;
		precision ${t.precision} usampler2D;
		precision ${t.precision} usampler3D;
		precision ${t.precision} usamplerCube;
		precision ${t.precision} usampler2DArray;
		`),t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function NT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===bp?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Ap?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function DT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Zr:case Jr:e="ENVMAP_TYPE_CUBE";break;case oo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function UT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Jr:e="ENVMAP_MODE_REFRACTION";break}return e}function OT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case wp:e="ENVMAP_BLENDING_MULTIPLY";break;case Lx:e="ENVMAP_BLENDING_MIX";break;case Px:e="ENVMAP_BLENDING_ADD";break}return e}function FT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function BT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=NT(n),c=DT(n),u=UT(n),f=OT(n),h=FT(n),_=n.isWebGL2?"":TT(n),S=bT(n),E=AT(s),p=r.createProgram();let d,C,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(kr).join(`
`),d.length>0&&(d+=`
`),C=[_,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(kr).join(`
`),C.length>0&&(C+=`
`)):(d=[ph(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),C=[_,ph(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ii?"#define TONE_MAPPING":"",n.toneMapping!==Ii?$e.tonemapping_pars_fragment:"",n.toneMapping!==Ii?yT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,ET("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(kr).join(`
`)),a=Xl(a),a=fh(a,n),a=hh(a,n),o=Xl(o),o=fh(o,n),o=hh(o,n),a=dh(a),o=dh(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[S,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,C=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Lf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Lf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+C);const x=v+d+a,A=v+C+o,T=ch(r,r.VERTEX_SHADER,x),b=ch(r,r.FRAGMENT_SHADER,A);r.attachShader(p,T),r.attachShader(p,b),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function D(W){if(t.debug.checkShaderErrors){const ie=r.getProgramInfoLog(p).trim(),F=r.getShaderInfoLog(T).trim(),$=r.getShaderInfoLog(b).trim();let Y=!0,Z=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,T,b);else{const q=uh(r,T,"vertex"),oe=uh(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+ie+`
`+q+`
`+oe)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(F===""||$==="")&&(Z=!1);Z&&(W.diagnostics={runnable:Y,programLog:ie,vertexShader:{log:F,prefix:d},fragmentShader:{log:$,prefix:C}})}r.deleteShader(T),r.deleteShader(b),U=new Aa(r,p),M=wT(r,p)}let U;this.getUniforms=function(){return U===void 0&&D(this),U};let M;this.getAttributes=function(){return M===void 0&&D(this),M};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(p,vT)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=xT++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=b,this}let GT=0;class kT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new HT(e),n.set(e,i)),i}}class HT{constructor(e){this.id=GT++,this.code=e,this.usedTimes=0}}function zT(t,e,n,i,r,s,a){const o=new Wp,l=new kT,c=new Set,u=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,_=r.vertexTextures;let S=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return c.add(M),M===0?"uv":`uv${M}`}function d(M,L,W,ie,F){const $=ie.fog,Y=F.geometry,Z=M.isMeshStandardMaterial?ie.environment:null,q=(M.isMeshStandardMaterial?n:e).get(M.envMap||Z),oe=q&&q.mapping===oo?q.image.height:null,le=E[M.type];M.precision!==null&&(S=r.getMaxPrecision(M.precision),S!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",S,"instead."));const de=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,me=de!==void 0?de.length:0;let Pe=0;Y.morphAttributes.position!==void 0&&(Pe=1),Y.morphAttributes.normal!==void 0&&(Pe=2),Y.morphAttributes.color!==void 0&&(Pe=3);let te,fe,ge,Ce;if(le){const lt=Fn[le];te=lt.vertexShader,fe=lt.fragmentShader}else te=M.vertexShader,fe=M.fragmentShader,l.update(M),ge=l.getVertexShaderID(M),Ce=l.getFragmentShaderID(M);const be=t.getRenderTarget(),Se=F.isInstancedMesh===!0,Ge=F.isBatchedMesh===!0,Le=!!M.map,y=!!M.matcap,O=!!q,P=!!M.aoMap,H=!!M.lightMap,X=!!M.bumpMap,J=!!M.normalMap,se=!!M.displacementMap,ae=!!M.emissiveMap,w=!!M.metalnessMap,m=!!M.roughnessMap,g=M.anisotropy>0,I=M.clearcoat>0,B=M.iridescence>0,k=M.sheen>0,N=M.transmission>0,z=g&&!!M.anisotropyMap,ce=I&&!!M.clearcoatMap,re=I&&!!M.clearcoatNormalMap,he=I&&!!M.clearcoatRoughnessMap,we=B&&!!M.iridescenceMap,ue=B&&!!M.iridescenceThicknessMap,it=k&&!!M.sheenColorMap,He=k&&!!M.sheenRoughnessMap,Te=!!M.specularMap,Ee=!!M.specularColorMap,Ae=!!M.specularIntensityMap,Ke=N&&!!M.transmissionMap,ze=N&&!!M.thicknessMap,mt=!!M.gradientMap,G=!!M.alphaMap,xe=M.alphaTest>0,Q=!!M.alphaHash,pe=!!M.extensions;let Me=Ii;M.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Me=t.toneMapping);const Ze={isWebGL2:f,shaderID:le,shaderType:M.type,shaderName:M.name,vertexShader:te,fragmentShader:fe,defines:M.defines,customVertexShaderID:ge,customFragmentShaderID:Ce,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:S,batching:Ge,instancing:Se,instancingColor:Se&&F.instanceColor!==null,instancingMorph:Se&&F.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:be===null?t.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:zi,alphaToCoverage:!!M.alphaToCoverage,map:Le,matcap:y,envMap:O,envMapMode:O&&q.mapping,envMapCubeUVHeight:oe,aoMap:P,lightMap:H,bumpMap:X,normalMap:J,displacementMap:_&&se,emissiveMap:ae,normalMapObjectSpace:J&&M.normalMapType===qx,normalMapTangentSpace:J&&M.normalMapType===Fp,metalnessMap:w,roughnessMap:m,anisotropy:g,anisotropyMap:z,clearcoat:I,clearcoatMap:ce,clearcoatNormalMap:re,clearcoatRoughnessMap:he,iridescence:B,iridescenceMap:we,iridescenceThicknessMap:ue,sheen:k,sheenColorMap:it,sheenRoughnessMap:He,specularMap:Te,specularColorMap:Ee,specularIntensityMap:Ae,transmission:N,transmissionMap:Ke,thicknessMap:ze,gradientMap:mt,opaque:M.transparent===!1&&M.blending===Xr&&M.alphaToCoverage===!1,alphaMap:G,alphaTest:xe,alphaHash:Q,combine:M.combine,mapUv:Le&&p(M.map.channel),aoMapUv:P&&p(M.aoMap.channel),lightMapUv:H&&p(M.lightMap.channel),bumpMapUv:X&&p(M.bumpMap.channel),normalMapUv:J&&p(M.normalMap.channel),displacementMapUv:se&&p(M.displacementMap.channel),emissiveMapUv:ae&&p(M.emissiveMap.channel),metalnessMapUv:w&&p(M.metalnessMap.channel),roughnessMapUv:m&&p(M.roughnessMap.channel),anisotropyMapUv:z&&p(M.anisotropyMap.channel),clearcoatMapUv:ce&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:re&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:it&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:He&&p(M.sheenRoughnessMap.channel),specularMapUv:Te&&p(M.specularMap.channel),specularColorMapUv:Ee&&p(M.specularColorMap.channel),specularIntensityMapUv:Ae&&p(M.specularIntensityMap.channel),transmissionMapUv:Ke&&p(M.transmissionMap.channel),thicknessMapUv:ze&&p(M.thicknessMap.channel),alphaMapUv:G&&p(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(J||g),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(Le||G),fog:!!$,useFog:M.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:F.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Pe,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&W.length>0,shadowMapType:t.shadowMap.type,toneMapping:Me,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Le&&M.map.isVideoTexture===!0&&st.getTransfer(M.map.colorSpace)===dt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Gn,flipSided:M.side===rn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:pe&&M.extensions.derivatives===!0,extensionFragDepth:pe&&M.extensions.fragDepth===!0,extensionDrawBuffers:pe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:pe&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze}function C(M){const L=[];if(M.shaderID?L.push(M.shaderID):(L.push(M.customVertexShaderID),L.push(M.customFragmentShaderID)),M.defines!==void 0)for(const W in M.defines)L.push(W),L.push(M.defines[W]);return M.isRawShaderMaterial===!1&&(v(L,M),x(L,M),L.push(t.outputColorSpace)),L.push(M.customProgramCacheKey),L.join()}function v(M,L){M.push(L.precision),M.push(L.outputColorSpace),M.push(L.envMapMode),M.push(L.envMapCubeUVHeight),M.push(L.mapUv),M.push(L.alphaMapUv),M.push(L.lightMapUv),M.push(L.aoMapUv),M.push(L.bumpMapUv),M.push(L.normalMapUv),M.push(L.displacementMapUv),M.push(L.emissiveMapUv),M.push(L.metalnessMapUv),M.push(L.roughnessMapUv),M.push(L.anisotropyMapUv),M.push(L.clearcoatMapUv),M.push(L.clearcoatNormalMapUv),M.push(L.clearcoatRoughnessMapUv),M.push(L.iridescenceMapUv),M.push(L.iridescenceThicknessMapUv),M.push(L.sheenColorMapUv),M.push(L.sheenRoughnessMapUv),M.push(L.specularMapUv),M.push(L.specularColorMapUv),M.push(L.specularIntensityMapUv),M.push(L.transmissionMapUv),M.push(L.thicknessMapUv),M.push(L.combine),M.push(L.fogExp2),M.push(L.sizeAttenuation),M.push(L.morphTargetsCount),M.push(L.morphAttributeCount),M.push(L.numDirLights),M.push(L.numPointLights),M.push(L.numSpotLights),M.push(L.numSpotLightMaps),M.push(L.numHemiLights),M.push(L.numRectAreaLights),M.push(L.numDirLightShadows),M.push(L.numPointLightShadows),M.push(L.numSpotLightShadows),M.push(L.numSpotLightShadowsWithMaps),M.push(L.numLightProbes),M.push(L.shadowMapType),M.push(L.toneMapping),M.push(L.numClippingPlanes),M.push(L.numClipIntersection),M.push(L.depthPacking)}function x(M,L){o.disableAll(),L.isWebGL2&&o.enable(0),L.supportsVertexTextures&&o.enable(1),L.instancing&&o.enable(2),L.instancingColor&&o.enable(3),L.instancingMorph&&o.enable(4),L.matcap&&o.enable(5),L.envMap&&o.enable(6),L.normalMapObjectSpace&&o.enable(7),L.normalMapTangentSpace&&o.enable(8),L.clearcoat&&o.enable(9),L.iridescence&&o.enable(10),L.alphaTest&&o.enable(11),L.vertexColors&&o.enable(12),L.vertexAlphas&&o.enable(13),L.vertexUv1s&&o.enable(14),L.vertexUv2s&&o.enable(15),L.vertexUv3s&&o.enable(16),L.vertexTangents&&o.enable(17),L.anisotropy&&o.enable(18),L.alphaHash&&o.enable(19),L.batching&&o.enable(20),M.push(o.mask),o.disableAll(),L.fog&&o.enable(0),L.useFog&&o.enable(1),L.flatShading&&o.enable(2),L.logarithmicDepthBuffer&&o.enable(3),L.skinning&&o.enable(4),L.morphTargets&&o.enable(5),L.morphNormals&&o.enable(6),L.morphColors&&o.enable(7),L.premultipliedAlpha&&o.enable(8),L.shadowMapEnabled&&o.enable(9),L.useLegacyLights&&o.enable(10),L.doubleSided&&o.enable(11),L.flipSided&&o.enable(12),L.useDepthPacking&&o.enable(13),L.dithering&&o.enable(14),L.transmission&&o.enable(15),L.sheen&&o.enable(16),L.opaque&&o.enable(17),L.pointsUvs&&o.enable(18),L.decodeVideoTexture&&o.enable(19),L.alphaToCoverage&&o.enable(20),M.push(o.mask)}function A(M){const L=E[M.type];let W;if(L){const ie=Fn[L];W=EM.clone(ie.uniforms)}else W=M.uniforms;return W}function T(M,L){let W;for(let ie=0,F=u.length;ie<F;ie++){const $=u[ie];if($.cacheKey===L){W=$,++W.usedTimes;break}}return W===void 0&&(W=new BT(t,L,M,s),u.push(W)),W}function b(M){if(--M.usedTimes===0){const L=u.indexOf(M);u[L]=u[u.length-1],u.pop(),M.destroy()}}function D(M){l.remove(M)}function U(){l.dispose()}return{getParameters:d,getProgramCacheKey:C,getUniforms:A,acquireProgram:T,releaseProgram:b,releaseShaderCache:D,programs:u,dispose:U}}function VT(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function WT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function mh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function _h(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,h,_,S,E,p){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:_,groupOrder:S,renderOrder:f.renderOrder,z:E,group:p},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=_,d.groupOrder=S,d.renderOrder=f.renderOrder,d.z=E,d.group=p),e++,d}function o(f,h,_,S,E,p){const d=a(f,h,_,S,E,p);_.transmission>0?i.push(d):_.transparent===!0?r.push(d):n.push(d)}function l(f,h,_,S,E,p){const d=a(f,h,_,S,E,p);_.transmission>0?i.unshift(d):_.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||WT),i.length>1&&i.sort(h||mh),r.length>1&&r.sort(h||mh)}function u(){for(let f=e,h=t.length;f<h;f++){const _=t[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function XT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new _h,t.set(i,[a])):r>=s.length?(a=new _h,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function $T(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new K,color:new Be};break;case"SpotLight":n={position:new K,direction:new K,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new K,color:new Be,distance:0,decay:0};break;case"HemisphereLight":n={direction:new K,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":n={color:new Be,position:new K,halfWidth:new K,halfHeight:new K};break}return t[e.id]=n,n}}}function YT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let qT=0;function jT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function KT(t,e){const n=new $T,i=YT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new K);const s=new K,a=new xt,o=new xt;function l(u,f){let h=0,_=0,S=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let E=0,p=0,d=0,C=0,v=0,x=0,A=0,T=0,b=0,D=0,U=0;u.sort(jT);const M=f===!0?Math.PI:1;for(let W=0,ie=u.length;W<ie;W++){const F=u[W],$=F.color,Y=F.intensity,Z=F.distance,q=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)h+=$.r*Y*M,_+=$.g*Y*M,S+=$.b*Y*M;else if(F.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(F.sh.coefficients[oe],Y);U++}else if(F.isDirectionalLight){const oe=n.get(F);if(oe.color.copy(F.color).multiplyScalar(F.intensity*M),F.castShadow){const le=F.shadow,de=i.get(F);de.shadowBias=le.bias,de.shadowNormalBias=le.normalBias,de.shadowRadius=le.radius,de.shadowMapSize=le.mapSize,r.directionalShadow[E]=de,r.directionalShadowMap[E]=q,r.directionalShadowMatrix[E]=F.shadow.matrix,x++}r.directional[E]=oe,E++}else if(F.isSpotLight){const oe=n.get(F);oe.position.setFromMatrixPosition(F.matrixWorld),oe.color.copy($).multiplyScalar(Y*M),oe.distance=Z,oe.coneCos=Math.cos(F.angle),oe.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),oe.decay=F.decay,r.spot[d]=oe;const le=F.shadow;if(F.map&&(r.spotLightMap[b]=F.map,b++,le.updateMatrices(F),F.castShadow&&D++),r.spotLightMatrix[d]=le.matrix,F.castShadow){const de=i.get(F);de.shadowBias=le.bias,de.shadowNormalBias=le.normalBias,de.shadowRadius=le.radius,de.shadowMapSize=le.mapSize,r.spotShadow[d]=de,r.spotShadowMap[d]=q,T++}d++}else if(F.isRectAreaLight){const oe=n.get(F);oe.color.copy($).multiplyScalar(Y),oe.halfWidth.set(F.width*.5,0,0),oe.halfHeight.set(0,F.height*.5,0),r.rectArea[C]=oe,C++}else if(F.isPointLight){const oe=n.get(F);if(oe.color.copy(F.color).multiplyScalar(F.intensity*M),oe.distance=F.distance,oe.decay=F.decay,F.castShadow){const le=F.shadow,de=i.get(F);de.shadowBias=le.bias,de.shadowNormalBias=le.normalBias,de.shadowRadius=le.radius,de.shadowMapSize=le.mapSize,de.shadowCameraNear=le.camera.near,de.shadowCameraFar=le.camera.far,r.pointShadow[p]=de,r.pointShadowMap[p]=q,r.pointShadowMatrix[p]=F.shadow.matrix,A++}r.point[p]=oe,p++}else if(F.isHemisphereLight){const oe=n.get(F);oe.skyColor.copy(F.color).multiplyScalar(Y*M),oe.groundColor.copy(F.groundColor).multiplyScalar(Y*M),r.hemi[v]=oe,v++}}C>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=_,r.ambient[2]=S;const L=r.hash;(L.directionalLength!==E||L.pointLength!==p||L.spotLength!==d||L.rectAreaLength!==C||L.hemiLength!==v||L.numDirectionalShadows!==x||L.numPointShadows!==A||L.numSpotShadows!==T||L.numSpotMaps!==b||L.numLightProbes!==U)&&(r.directional.length=E,r.spot.length=d,r.rectArea.length=C,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=T+b-D,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=U,L.directionalLength=E,L.pointLength=p,L.spotLength=d,L.rectAreaLength=C,L.hemiLength=v,L.numDirectionalShadows=x,L.numPointShadows=A,L.numSpotShadows=T,L.numSpotMaps=b,L.numLightProbes=U,r.version=qT++)}function c(u,f){let h=0,_=0,S=0,E=0,p=0;const d=f.matrixWorldInverse;for(let C=0,v=u.length;C<v;C++){const x=u[C];if(x.isDirectionalLight){const A=r.directional[h];A.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),h++}else if(x.isSpotLight){const A=r.spot[S];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),S++}else if(x.isRectAreaLight){const A=r.rectArea[E];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(d),o.identity(),a.copy(x.matrixWorld),a.premultiply(d),o.extractRotation(a),A.halfWidth.set(x.width*.5,0,0),A.halfHeight.set(0,x.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),E++}else if(x.isPointLight){const A=r.point[_];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(d),_++}else if(x.isHemisphereLight){const A=r.hemi[p];A.direction.setFromMatrixPosition(x.matrixWorld),A.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:r}}function gh(t,e){const n=new KT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function ZT(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new gh(t,e),n.set(s,[l])):a>=o.length?(l=new gh(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class JT extends rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$x,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class QT extends rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const eb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nb(t,e,n){let i=new bc;const r=new Je,s=new Je,a=new Nt,o=new JT({depthPacking:Yx}),l=new QT,c={},u=n.maxTextureSize,f={[Fi]:rn,[rn]:Fi,[Gn]:Gn},h=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:eb,fragmentShader:tb}),_=h.clone();_.defines.HORIZONTAL_PASS=1;const S=new _i;S.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new un(S,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bp;let d=this.type;this.render=function(T,b,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const U=t.getRenderTarget(),M=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),W=t.state;W.setBlending(Pi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const ie=d!==ni&&this.type===ni,F=d===ni&&this.type!==ni;for(let $=0,Y=T.length;$<Y;$++){const Z=T[$],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const oe=q.getFrameExtents();if(r.multiply(oe),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/oe.x),r.x=s.x*oe.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/oe.y),r.y=s.y*oe.y,q.mapSize.y=s.y)),q.map===null||ie===!0||F===!0){const de=this.type!==ni?{minFilter:qt,magFilter:qt}:{};q.map!==null&&q.map.dispose(),q.map=new dr(r.x,r.y,de),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}t.setRenderTarget(q.map),t.clear();const le=q.getViewportCount();for(let de=0;de<le;de++){const me=q.getViewport(de);a.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),W.viewport(a),q.updateMatrices(Z,de),i=q.getFrustum(),x(b,D,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===ni&&C(q,D),q.needsUpdate=!1}d=this.type,p.needsUpdate=!1,t.setRenderTarget(U,M,L)};function C(T,b){const D=e.update(E);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,_.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,_.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new dr(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(b,null,D,h,E,null),_.uniforms.shadow_pass.value=T.mapPass.texture,_.uniforms.resolution.value=T.mapSize,_.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(b,null,D,_,E,null)}function v(T,b,D,U){let M=null;const L=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)M=L;else if(M=D.isPointLight===!0?l:o,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const W=M.uuid,ie=b.uuid;let F=c[W];F===void 0&&(F={},c[W]=F);let $=F[ie];$===void 0&&($=M.clone(),F[ie]=$,b.addEventListener("dispose",A)),M=$}if(M.visible=b.visible,M.wireframe=b.wireframe,U===ni?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:f[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=t.properties.get(M);W.light=D}return M}function x(T,b,D,U,M){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===ni)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);const ie=e.update(T),F=T.material;if(Array.isArray(F)){const $=ie.groups;for(let Y=0,Z=$.length;Y<Z;Y++){const q=$[Y],oe=F[q.materialIndex];if(oe&&oe.visible){const le=v(T,oe,U,M);T.onBeforeShadow(t,T,b,D,ie,le,q),t.renderBufferDirect(D,null,ie,le,T,q),T.onAfterShadow(t,T,b,D,ie,le,q)}}}else if(F.visible){const $=v(T,F,U,M);T.onBeforeShadow(t,T,b,D,ie,$,null),t.renderBufferDirect(D,null,ie,$,T,null),T.onAfterShadow(t,T,b,D,ie,$,null)}}const W=T.children;for(let ie=0,F=W.length;ie<F;ie++)x(W[ie],b,D,U,M)}function A(T){T.target.removeEventListener("dispose",A);for(const D in c){const U=c[D],M=T.target.uuid;M in U&&(U[M].dispose(),delete U[M])}}}function ib(t,e,n){const i=n.isWebGL2;function r(){let G=!1;const xe=new Nt;let Q=null;const pe=new Nt(0,0,0,0);return{setMask:function(Me){Q!==Me&&!G&&(t.colorMask(Me,Me,Me,Me),Q=Me)},setLocked:function(Me){G=Me},setClear:function(Me,Ze,lt,Ut,hn){hn===!0&&(Me*=Ut,Ze*=Ut,lt*=Ut),xe.set(Me,Ze,lt,Ut),pe.equals(xe)===!1&&(t.clearColor(Me,Ze,lt,Ut),pe.copy(xe))},reset:function(){G=!1,Q=null,pe.set(-1,0,0,0)}}}function s(){let G=!1,xe=null,Q=null,pe=null;return{setTest:function(Me){Me?Se(t.DEPTH_TEST):Ge(t.DEPTH_TEST)},setMask:function(Me){xe!==Me&&!G&&(t.depthMask(Me),xe=Me)},setFunc:function(Me){if(Q!==Me){switch(Me){case yx:t.depthFunc(t.NEVER);break;case Tx:t.depthFunc(t.ALWAYS);break;case bx:t.depthFunc(t.LESS);break;case Ba:t.depthFunc(t.LEQUAL);break;case Ax:t.depthFunc(t.EQUAL);break;case wx:t.depthFunc(t.GEQUAL);break;case Rx:t.depthFunc(t.GREATER);break;case Cx:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Q=Me}},setLocked:function(Me){G=Me},setClear:function(Me){pe!==Me&&(t.clearDepth(Me),pe=Me)},reset:function(){G=!1,xe=null,Q=null,pe=null}}}function a(){let G=!1,xe=null,Q=null,pe=null,Me=null,Ze=null,lt=null,Ut=null,hn=null;return{setTest:function(ct){G||(ct?Se(t.STENCIL_TEST):Ge(t.STENCIL_TEST))},setMask:function(ct){xe!==ct&&!G&&(t.stencilMask(ct),xe=ct)},setFunc:function(ct,Wt,In){(Q!==ct||pe!==Wt||Me!==In)&&(t.stencilFunc(ct,Wt,In),Q=ct,pe=Wt,Me=In)},setOp:function(ct,Wt,In){(Ze!==ct||lt!==Wt||Ut!==In)&&(t.stencilOp(ct,Wt,In),Ze=ct,lt=Wt,Ut=In)},setLocked:function(ct){G=ct},setClear:function(ct){hn!==ct&&(t.clearStencil(ct),hn=ct)},reset:function(){G=!1,xe=null,Q=null,pe=null,Me=null,Ze=null,lt=null,Ut=null,hn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},_={},S=new WeakMap,E=[],p=null,d=!1,C=null,v=null,x=null,A=null,T=null,b=null,D=null,U=new Be(0,0,0),M=0,L=!1,W=null,ie=null,F=null,$=null,Y=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,oe=0;const le=t.getParameter(t.VERSION);le.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(le)[1]),q=oe>=1):le.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),q=oe>=2);let de=null,me={};const Pe=t.getParameter(t.SCISSOR_BOX),te=t.getParameter(t.VIEWPORT),fe=new Nt().fromArray(Pe),ge=new Nt().fromArray(te);function Ce(G,xe,Q,pe){const Me=new Uint8Array(4),Ze=t.createTexture();t.bindTexture(G,Ze),t.texParameteri(G,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(G,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let lt=0;lt<Q;lt++)i&&(G===t.TEXTURE_3D||G===t.TEXTURE_2D_ARRAY)?t.texImage3D(xe,0,t.RGBA,1,1,pe,0,t.RGBA,t.UNSIGNED_BYTE,Me):t.texImage2D(xe+lt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Me);return Ze}const be={};be[t.TEXTURE_2D]=Ce(t.TEXTURE_2D,t.TEXTURE_2D,1),be[t.TEXTURE_CUBE_MAP]=Ce(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(be[t.TEXTURE_2D_ARRAY]=Ce(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),be[t.TEXTURE_3D]=Ce(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Se(t.DEPTH_TEST),l.setFunc(Ba),se(!1),ae(Ku),Se(t.CULL_FACE),X(Pi);function Se(G){h[G]!==!0&&(t.enable(G),h[G]=!0)}function Ge(G){h[G]!==!1&&(t.disable(G),h[G]=!1)}function Le(G,xe){return _[G]!==xe?(t.bindFramebuffer(G,xe),_[G]=xe,i&&(G===t.DRAW_FRAMEBUFFER&&(_[t.FRAMEBUFFER]=xe),G===t.FRAMEBUFFER&&(_[t.DRAW_FRAMEBUFFER]=xe)),!0):!1}function y(G,xe){let Q=E,pe=!1;if(G){Q=S.get(xe),Q===void 0&&(Q=[],S.set(xe,Q));const Me=G.textures;if(Q.length!==Me.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let Ze=0,lt=Me.length;Ze<lt;Ze++)Q[Ze]=t.COLOR_ATTACHMENT0+Ze;Q.length=Me.length,pe=!0}}else Q[0]!==t.BACK&&(Q[0]=t.BACK,pe=!0);if(pe)if(n.isWebGL2)t.drawBuffers(Q);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function O(G){return p!==G?(t.useProgram(G),p=G,!0):!1}const P={[rr]:t.FUNC_ADD,[lx]:t.FUNC_SUBTRACT,[cx]:t.FUNC_REVERSE_SUBTRACT};if(i)P[Qu]=t.MIN,P[ef]=t.MAX;else{const G=e.get("EXT_blend_minmax");G!==null&&(P[Qu]=G.MIN_EXT,P[ef]=G.MAX_EXT)}const H={[ux]:t.ZERO,[fx]:t.ONE,[hx]:t.SRC_COLOR,[Ol]:t.SRC_ALPHA,[vx]:t.SRC_ALPHA_SATURATE,[_x]:t.DST_COLOR,[px]:t.DST_ALPHA,[dx]:t.ONE_MINUS_SRC_COLOR,[Fl]:t.ONE_MINUS_SRC_ALPHA,[gx]:t.ONE_MINUS_DST_COLOR,[mx]:t.ONE_MINUS_DST_ALPHA,[xx]:t.CONSTANT_COLOR,[Mx]:t.ONE_MINUS_CONSTANT_COLOR,[Sx]:t.CONSTANT_ALPHA,[Ex]:t.ONE_MINUS_CONSTANT_ALPHA};function X(G,xe,Q,pe,Me,Ze,lt,Ut,hn,ct){if(G===Pi){d===!0&&(Ge(t.BLEND),d=!1);return}if(d===!1&&(Se(t.BLEND),d=!0),G!==ox){if(G!==C||ct!==L){if((v!==rr||T!==rr)&&(t.blendEquation(t.FUNC_ADD),v=rr,T=rr),ct)switch(G){case Xr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ul:t.blendFunc(t.ONE,t.ONE);break;case Zu:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ju:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Xr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ul:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Zu:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ju:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}x=null,A=null,b=null,D=null,U.set(0,0,0),M=0,C=G,L=ct}return}Me=Me||xe,Ze=Ze||Q,lt=lt||pe,(xe!==v||Me!==T)&&(t.blendEquationSeparate(P[xe],P[Me]),v=xe,T=Me),(Q!==x||pe!==A||Ze!==b||lt!==D)&&(t.blendFuncSeparate(H[Q],H[pe],H[Ze],H[lt]),x=Q,A=pe,b=Ze,D=lt),(Ut.equals(U)===!1||hn!==M)&&(t.blendColor(Ut.r,Ut.g,Ut.b,hn),U.copy(Ut),M=hn),C=G,L=!1}function J(G,xe){G.side===Gn?Ge(t.CULL_FACE):Se(t.CULL_FACE);let Q=G.side===rn;xe&&(Q=!Q),se(Q),G.blending===Xr&&G.transparent===!1?X(Pi):X(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),l.setFunc(G.depthFunc),l.setTest(G.depthTest),l.setMask(G.depthWrite),o.setMask(G.colorWrite);const pe=G.stencilWrite;c.setTest(pe),pe&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),m(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Se(t.SAMPLE_ALPHA_TO_COVERAGE):Ge(t.SAMPLE_ALPHA_TO_COVERAGE)}function se(G){W!==G&&(G?t.frontFace(t.CW):t.frontFace(t.CCW),W=G)}function ae(G){G!==sx?(Se(t.CULL_FACE),G!==ie&&(G===Ku?t.cullFace(t.BACK):G===ax?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ge(t.CULL_FACE),ie=G}function w(G){G!==F&&(q&&t.lineWidth(G),F=G)}function m(G,xe,Q){G?(Se(t.POLYGON_OFFSET_FILL),($!==xe||Y!==Q)&&(t.polygonOffset(xe,Q),$=xe,Y=Q)):Ge(t.POLYGON_OFFSET_FILL)}function g(G){G?Se(t.SCISSOR_TEST):Ge(t.SCISSOR_TEST)}function I(G){G===void 0&&(G=t.TEXTURE0+Z-1),de!==G&&(t.activeTexture(G),de=G)}function B(G,xe,Q){Q===void 0&&(de===null?Q=t.TEXTURE0+Z-1:Q=de);let pe=me[Q];pe===void 0&&(pe={type:void 0,texture:void 0},me[Q]=pe),(pe.type!==G||pe.texture!==xe)&&(de!==Q&&(t.activeTexture(Q),de=Q),t.bindTexture(G,xe||be[G]),pe.type=G,pe.texture=xe)}function k(){const G=me[de];G!==void 0&&G.type!==void 0&&(t.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function N(){try{t.compressedTexImage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function z(){try{t.compressedTexImage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{t.texSubImage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function re(){try{t.texSubImage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function he(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{t.texStorage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function it(){try{t.texStorage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function He(){try{t.texImage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(){try{t.texImage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(G){fe.equals(G)===!1&&(t.scissor(G.x,G.y,G.z,G.w),fe.copy(G))}function Ae(G){ge.equals(G)===!1&&(t.viewport(G.x,G.y,G.z,G.w),ge.copy(G))}function Ke(G,xe){let Q=f.get(xe);Q===void 0&&(Q=new WeakMap,f.set(xe,Q));let pe=Q.get(G);pe===void 0&&(pe=t.getUniformBlockIndex(xe,G.name),Q.set(G,pe))}function ze(G,xe){const pe=f.get(xe).get(G);u.get(xe)!==pe&&(t.uniformBlockBinding(xe,pe,G.__bindingPointIndex),u.set(xe,pe))}function mt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},de=null,me={},_={},S=new WeakMap,E=[],p=null,d=!1,C=null,v=null,x=null,A=null,T=null,b=null,D=null,U=new Be(0,0,0),M=0,L=!1,W=null,ie=null,F=null,$=null,Y=null,fe.set(0,0,t.canvas.width,t.canvas.height),ge.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Se,disable:Ge,bindFramebuffer:Le,drawBuffers:y,useProgram:O,setBlending:X,setMaterial:J,setFlipSided:se,setCullFace:ae,setLineWidth:w,setPolygonOffset:m,setScissorTest:g,activeTexture:I,bindTexture:B,unbindTexture:k,compressedTexImage2D:N,compressedTexImage3D:z,texImage2D:He,texImage3D:Te,updateUBOMapping:Ke,uniformBlockBinding:ze,texStorage2D:ue,texStorage3D:it,texSubImage2D:ce,texSubImage3D:re,compressedTexSubImage2D:he,compressedTexSubImage3D:we,scissor:Ee,viewport:Ae,reset:mt}}function rb(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Je,f=new WeakMap;let h;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(m,g){return S?new OffscreenCanvas(m,g):Va("canvas")}function p(m,g,I,B){let k=1;const N=w(m);if((N.width>B||N.height>B)&&(k=B/Math.max(N.width,N.height)),k<1||g===!0)if(typeof HTMLImageElement<"u"&&m instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&m instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&m instanceof ImageBitmap||typeof VideoFrame<"u"&&m instanceof VideoFrame){const z=g?Wl:Math.floor,ce=z(k*N.width),re=z(k*N.height);h===void 0&&(h=E(ce,re));const he=I?E(ce,re):h;return he.width=ce,he.height=re,he.getContext("2d").drawImage(m,0,0,ce,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+ce+"x"+re+")."),he}else return"data"in m&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),m;return m}function d(m){const g=w(m);return Pf(g.width)&&Pf(g.height)}function C(m){return o?!1:m.wrapS!==bn||m.wrapT!==bn||m.minFilter!==qt&&m.minFilter!==zt}function v(m,g){return m.generateMipmaps&&g&&m.minFilter!==qt&&m.minFilter!==zt}function x(m){t.generateMipmap(m)}function A(m,g,I,B,k=!1){if(o===!1)return g;if(m!==null){if(t[m]!==void 0)return t[m];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+m+"'")}let N=g;if(g===t.RED&&(I===t.FLOAT&&(N=t.R32F),I===t.HALF_FLOAT&&(N=t.R16F),I===t.UNSIGNED_BYTE&&(N=t.R8)),g===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&(N=t.R8UI),I===t.UNSIGNED_SHORT&&(N=t.R16UI),I===t.UNSIGNED_INT&&(N=t.R32UI),I===t.BYTE&&(N=t.R8I),I===t.SHORT&&(N=t.R16I),I===t.INT&&(N=t.R32I)),g===t.RG&&(I===t.FLOAT&&(N=t.RG32F),I===t.HALF_FLOAT&&(N=t.RG16F),I===t.UNSIGNED_BYTE&&(N=t.RG8)),g===t.RG_INTEGER&&(I===t.UNSIGNED_BYTE&&(N=t.RG8UI),I===t.UNSIGNED_SHORT&&(N=t.RG16UI),I===t.UNSIGNED_INT&&(N=t.RG32UI),I===t.BYTE&&(N=t.RG8I),I===t.SHORT&&(N=t.RG16I),I===t.INT&&(N=t.RG32I)),g===t.RGBA){const z=k?Ga:st.getTransfer(B);I===t.FLOAT&&(N=t.RGBA32F),I===t.HALF_FLOAT&&(N=t.RGBA16F),I===t.UNSIGNED_BYTE&&(N=z===dt?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT_4_4_4_4&&(N=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&(N=t.RGB5_A1)}return(N===t.R16F||N===t.R32F||N===t.RG16F||N===t.RG32F||N===t.RGBA16F||N===t.RGBA32F)&&e.get("EXT_color_buffer_float"),N}function T(m,g,I){return v(m,I)===!0||m.isFramebufferTexture&&m.minFilter!==qt&&m.minFilter!==zt?Math.log2(Math.max(g.width,g.height))+1:m.mipmaps!==void 0&&m.mipmaps.length>0?m.mipmaps.length:m.isCompressedTexture&&Array.isArray(m.image)?g.mipmaps.length:1}function b(m){return m===qt||m===tf||m===us?t.NEAREST:t.LINEAR}function D(m){const g=m.target;g.removeEventListener("dispose",D),M(g),g.isVideoTexture&&f.delete(g)}function U(m){const g=m.target;g.removeEventListener("dispose",U),W(g)}function M(m){const g=i.get(m);if(g.__webglInit===void 0)return;const I=m.source,B=_.get(I);if(B){const k=B[g.__cacheKey];k.usedTimes--,k.usedTimes===0&&L(m),Object.keys(B).length===0&&_.delete(I)}i.remove(m)}function L(m){const g=i.get(m);t.deleteTexture(g.__webglTexture);const I=m.source,B=_.get(I);delete B[g.__cacheKey],a.memory.textures--}function W(m){const g=i.get(m);if(m.depthTexture&&m.depthTexture.dispose(),m.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(g.__webglFramebuffer[B]))for(let k=0;k<g.__webglFramebuffer[B].length;k++)t.deleteFramebuffer(g.__webglFramebuffer[B][k]);else t.deleteFramebuffer(g.__webglFramebuffer[B]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[B])}else{if(Array.isArray(g.__webglFramebuffer))for(let B=0;B<g.__webglFramebuffer.length;B++)t.deleteFramebuffer(g.__webglFramebuffer[B]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let B=0;B<g.__webglColorRenderbuffer.length;B++)g.__webglColorRenderbuffer[B]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[B]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const I=m.textures;for(let B=0,k=I.length;B<k;B++){const N=i.get(I[B]);N.__webglTexture&&(t.deleteTexture(N.__webglTexture),a.memory.textures--),i.remove(I[B])}i.remove(m)}let ie=0;function F(){ie=0}function $(){const m=ie;return m>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+m+" texture units while this GPU supports only "+r.maxTextures),ie+=1,m}function Y(m){const g=[];return g.push(m.wrapS),g.push(m.wrapT),g.push(m.wrapR||0),g.push(m.magFilter),g.push(m.minFilter),g.push(m.anisotropy),g.push(m.internalFormat),g.push(m.format),g.push(m.type),g.push(m.generateMipmaps),g.push(m.premultiplyAlpha),g.push(m.flipY),g.push(m.unpackAlignment),g.push(m.colorSpace),g.join()}function Z(m,g){const I=i.get(m);if(m.isVideoTexture&&se(m),m.isRenderTargetTexture===!1&&m.version>0&&I.__version!==m.version){const B=m.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(I,m,g);return}}n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+g)}function q(m,g){const I=i.get(m);if(m.version>0&&I.__version!==m.version){ge(I,m,g);return}n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+g)}function oe(m,g){const I=i.get(m);if(m.version>0&&I.__version!==m.version){ge(I,m,g);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+g)}function le(m,g){const I=i.get(m);if(m.version>0&&I.__version!==m.version){Ce(I,m,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+g)}const de={[kl]:t.REPEAT,[bn]:t.CLAMP_TO_EDGE,[Hl]:t.MIRRORED_REPEAT},me={[qt]:t.NEAREST,[tf]:t.NEAREST_MIPMAP_NEAREST,[us]:t.NEAREST_MIPMAP_LINEAR,[zt]:t.LINEAR,[No]:t.LINEAR_MIPMAP_NEAREST,[ar]:t.LINEAR_MIPMAP_LINEAR},Pe={[jx]:t.NEVER,[tM]:t.ALWAYS,[Kx]:t.LESS,[Bp]:t.LEQUAL,[Zx]:t.EQUAL,[eM]:t.GEQUAL,[Jx]:t.GREATER,[Qx]:t.NOTEQUAL};function te(m,g,I){if(g.type===oi&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===zt||g.magFilter===No||g.magFilter===us||g.magFilter===ar||g.minFilter===zt||g.minFilter===No||g.minFilter===us||g.minFilter===ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),I?(t.texParameteri(m,t.TEXTURE_WRAP_S,de[g.wrapS]),t.texParameteri(m,t.TEXTURE_WRAP_T,de[g.wrapT]),(m===t.TEXTURE_3D||m===t.TEXTURE_2D_ARRAY)&&t.texParameteri(m,t.TEXTURE_WRAP_R,de[g.wrapR]),t.texParameteri(m,t.TEXTURE_MAG_FILTER,me[g.magFilter]),t.texParameteri(m,t.TEXTURE_MIN_FILTER,me[g.minFilter])):(t.texParameteri(m,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(m,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(m===t.TEXTURE_3D||m===t.TEXTURE_2D_ARRAY)&&t.texParameteri(m,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(g.wrapS!==bn||g.wrapT!==bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(m,t.TEXTURE_MAG_FILTER,b(g.magFilter)),t.texParameteri(m,t.TEXTURE_MIN_FILTER,b(g.minFilter)),g.minFilter!==qt&&g.minFilter!==zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(t.texParameteri(m,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(m,t.TEXTURE_COMPARE_FUNC,Pe[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===qt||g.minFilter!==us&&g.minFilter!==ar||g.type===oi&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===Fs&&e.has("OES_texture_half_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(m,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function fe(m,g){let I=!1;m.__webglInit===void 0&&(m.__webglInit=!0,g.addEventListener("dispose",D));const B=g.source;let k=_.get(B);k===void 0&&(k={},_.set(B,k));const N=Y(g);if(N!==m.__cacheKey){k[N]===void 0&&(k[N]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,I=!0),k[N].usedTimes++;const z=k[m.__cacheKey];z!==void 0&&(k[m.__cacheKey].usedTimes--,z.usedTimes===0&&L(g)),m.__cacheKey=N,m.__webglTexture=k[N].texture}return I}function ge(m,g,I){let B=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(B=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(B=t.TEXTURE_3D);const k=fe(m,g),N=g.source;n.bindTexture(B,m.__webglTexture,t.TEXTURE0+I);const z=i.get(N);if(N.version!==z.__version||k===!0){n.activeTexture(t.TEXTURE0+I);const ce=st.getPrimaries(st.workingColorSpace),re=g.colorSpace===wi?null:st.getPrimaries(g.colorSpace),he=g.colorSpace===wi||ce===re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const we=C(g)&&d(g.image)===!1;let ue=p(g.image,we,!1,r.maxTextureSize);ue=ae(g,ue);const it=d(ue)||o,He=s.convert(g.format,g.colorSpace);let Te=s.convert(g.type),Ee=A(g.internalFormat,He,Te,g.colorSpace,g.isVideoTexture);te(B,g,it);let Ae;const Ke=g.mipmaps,ze=o&&g.isVideoTexture!==!0&&Ee!==Op,mt=z.__version===void 0||k===!0,G=N.dataReady,xe=T(g,ue,it);if(g.isDepthTexture)Ee=t.DEPTH_COMPONENT,o?g.type===oi?Ee=t.DEPTH_COMPONENT32F:g.type===Ri?Ee=t.DEPTH_COMPONENT24:g.type===cr?Ee=t.DEPTH24_STENCIL8:Ee=t.DEPTH_COMPONENT16:g.type===oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===ur&&Ee===t.DEPTH_COMPONENT&&g.type!==yc&&g.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=Ri,Te=s.convert(g.type)),g.format===Qr&&Ee===t.DEPTH_COMPONENT&&(Ee=t.DEPTH_STENCIL,g.type!==cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=cr,Te=s.convert(g.type))),mt&&(ze?n.texStorage2D(t.TEXTURE_2D,1,Ee,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,Ee,ue.width,ue.height,0,He,Te,null));else if(g.isDataTexture)if(Ke.length>0&&it){ze&&mt&&n.texStorage2D(t.TEXTURE_2D,xe,Ee,Ke[0].width,Ke[0].height);for(let Q=0,pe=Ke.length;Q<pe;Q++)Ae=Ke[Q],ze?G&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,Ae.width,Ae.height,He,Te,Ae.data):n.texImage2D(t.TEXTURE_2D,Q,Ee,Ae.width,Ae.height,0,He,Te,Ae.data);g.generateMipmaps=!1}else ze?(mt&&n.texStorage2D(t.TEXTURE_2D,xe,Ee,ue.width,ue.height),G&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue.width,ue.height,He,Te,ue.data)):n.texImage2D(t.TEXTURE_2D,0,Ee,ue.width,ue.height,0,He,Te,ue.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){ze&&mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Ee,Ke[0].width,Ke[0].height,ue.depth);for(let Q=0,pe=Ke.length;Q<pe;Q++)Ae=Ke[Q],g.format!==An?He!==null?ze?G&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,Ae.width,Ae.height,ue.depth,He,Ae.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,Ee,Ae.width,Ae.height,ue.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?G&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,Ae.width,Ae.height,ue.depth,He,Te,Ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,Ee,Ae.width,Ae.height,ue.depth,0,He,Te,Ae.data)}else{ze&&mt&&n.texStorage2D(t.TEXTURE_2D,xe,Ee,Ke[0].width,Ke[0].height);for(let Q=0,pe=Ke.length;Q<pe;Q++)Ae=Ke[Q],g.format!==An?He!==null?ze?G&&n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,Ae.width,Ae.height,He,Ae.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,Ee,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?G&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,Ae.width,Ae.height,He,Te,Ae.data):n.texImage2D(t.TEXTURE_2D,Q,Ee,Ae.width,Ae.height,0,He,Te,Ae.data)}else if(g.isDataArrayTexture)ze?(mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Ee,ue.width,ue.height,ue.depth),G&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,He,Te,ue.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ee,ue.width,ue.height,ue.depth,0,He,Te,ue.data);else if(g.isData3DTexture)ze?(mt&&n.texStorage3D(t.TEXTURE_3D,xe,Ee,ue.width,ue.height,ue.depth),G&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,He,Te,ue.data)):n.texImage3D(t.TEXTURE_3D,0,Ee,ue.width,ue.height,ue.depth,0,He,Te,ue.data);else if(g.isFramebufferTexture){if(mt)if(ze)n.texStorage2D(t.TEXTURE_2D,xe,Ee,ue.width,ue.height);else{let Q=ue.width,pe=ue.height;for(let Me=0;Me<xe;Me++)n.texImage2D(t.TEXTURE_2D,Me,Ee,Q,pe,0,He,Te,null),Q>>=1,pe>>=1}}else if(Ke.length>0&&it){if(ze&&mt){const Q=w(Ke[0]);n.texStorage2D(t.TEXTURE_2D,xe,Ee,Q.width,Q.height)}for(let Q=0,pe=Ke.length;Q<pe;Q++)Ae=Ke[Q],ze?G&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,He,Te,Ae):n.texImage2D(t.TEXTURE_2D,Q,Ee,He,Te,Ae);g.generateMipmaps=!1}else if(ze){if(mt){const Q=w(ue);n.texStorage2D(t.TEXTURE_2D,xe,Ee,Q.width,Q.height)}G&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,He,Te,ue)}else n.texImage2D(t.TEXTURE_2D,0,Ee,He,Te,ue);v(g,it)&&x(B),z.__version=N.version,g.onUpdate&&g.onUpdate(g)}m.__version=g.version}function Ce(m,g,I){if(g.image.length!==6)return;const B=fe(m,g),k=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,m.__webglTexture,t.TEXTURE0+I);const N=i.get(k);if(k.version!==N.__version||B===!0){n.activeTexture(t.TEXTURE0+I);const z=st.getPrimaries(st.workingColorSpace),ce=g.colorSpace===wi?null:st.getPrimaries(g.colorSpace),re=g.colorSpace===wi||z===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const he=g.isCompressedTexture||g.image[0].isCompressedTexture,we=g.image[0]&&g.image[0].isDataTexture,ue=[];for(let Q=0;Q<6;Q++)!he&&!we?ue[Q]=p(g.image[Q],!1,!0,r.maxCubemapSize):ue[Q]=we?g.image[Q].image:g.image[Q],ue[Q]=ae(g,ue[Q]);const it=ue[0],He=d(it)||o,Te=s.convert(g.format,g.colorSpace),Ee=s.convert(g.type),Ae=A(g.internalFormat,Te,Ee,g.colorSpace),Ke=o&&g.isVideoTexture!==!0,ze=N.__version===void 0||B===!0,mt=k.dataReady;let G=T(g,it,He);te(t.TEXTURE_CUBE_MAP,g,He);let xe;if(he){Ke&&ze&&n.texStorage2D(t.TEXTURE_CUBE_MAP,G,Ae,it.width,it.height);for(let Q=0;Q<6;Q++){xe=ue[Q].mipmaps;for(let pe=0;pe<xe.length;pe++){const Me=xe[pe];g.format!==An?Te!==null?Ke?mt&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,0,0,Me.width,Me.height,Te,Me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,Ae,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?mt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,0,0,Me.width,Me.height,Te,Ee,Me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,Ae,Me.width,Me.height,0,Te,Ee,Me.data)}}}else{if(xe=g.mipmaps,Ke&&ze){xe.length>0&&G++;const Q=w(ue[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,G,Ae,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(we){Ke?mt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ue[Q].width,ue[Q].height,Te,Ee,ue[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ae,ue[Q].width,ue[Q].height,0,Te,Ee,ue[Q].data);for(let pe=0;pe<xe.length;pe++){const Ze=xe[pe].image[Q].image;Ke?mt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,0,0,Ze.width,Ze.height,Te,Ee,Ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,Ae,Ze.width,Ze.height,0,Te,Ee,Ze.data)}}else{Ke?mt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Te,Ee,ue[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ae,Te,Ee,ue[Q]);for(let pe=0;pe<xe.length;pe++){const Me=xe[pe];Ke?mt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,0,0,Te,Ee,Me.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,Ae,Te,Ee,Me.image[Q])}}}v(g,He)&&x(t.TEXTURE_CUBE_MAP),N.__version=k.version,g.onUpdate&&g.onUpdate(g)}m.__version=g.version}function be(m,g,I,B,k,N){const z=s.convert(I.format,I.colorSpace),ce=s.convert(I.type),re=A(I.internalFormat,z,ce,I.colorSpace);if(!i.get(g).__hasExternalTextures){const we=Math.max(1,g.width>>N),ue=Math.max(1,g.height>>N);k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?n.texImage3D(k,N,re,we,ue,g.depth,0,z,ce,null):n.texImage2D(k,N,re,we,ue,0,z,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,m),J(g)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,B,k,i.get(I).__webglTexture,0,X(g)):(k===t.TEXTURE_2D||k>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,B,k,i.get(I).__webglTexture,N),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Se(m,g,I){if(t.bindRenderbuffer(t.RENDERBUFFER,m),g.depthBuffer&&!g.stencilBuffer){let B=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(I||J(g)){const k=g.depthTexture;k&&k.isDepthTexture&&(k.type===oi?B=t.DEPTH_COMPONENT32F:k.type===Ri&&(B=t.DEPTH_COMPONENT24));const N=X(g);J(g)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,N,B,g.width,g.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,N,B,g.width,g.height)}else t.renderbufferStorage(t.RENDERBUFFER,B,g.width,g.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,m)}else if(g.depthBuffer&&g.stencilBuffer){const B=X(g);I&&J(g)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,B,t.DEPTH24_STENCIL8,g.width,g.height):J(g)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,B,t.DEPTH24_STENCIL8,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,m)}else{const B=g.textures;for(let k=0;k<B.length;k++){const N=B[k],z=s.convert(N.format,N.colorSpace),ce=s.convert(N.type),re=A(N.internalFormat,z,ce,N.colorSpace),he=X(g);I&&J(g)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,re,g.width,g.height):J(g)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,re,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,re,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ge(m,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,m),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Z(g.depthTexture,0);const B=i.get(g.depthTexture).__webglTexture,k=X(g);if(g.depthTexture.format===ur)J(g)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,B,0,k):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,B,0);else if(g.depthTexture.format===Qr)J(g)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,B,0,k):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,B,0);else throw new Error("Unknown depthTexture format")}function Le(m){const g=i.get(m),I=m.isWebGLCubeRenderTarget===!0;if(m.depthTexture&&!g.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");Ge(g.__webglFramebuffer,m)}else if(I){g.__webglDepthbuffer=[];for(let B=0;B<6;B++)n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[B]),g.__webglDepthbuffer[B]=t.createRenderbuffer(),Se(g.__webglDepthbuffer[B],m,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=t.createRenderbuffer(),Se(g.__webglDepthbuffer,m,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function y(m,g,I){const B=i.get(m);g!==void 0&&be(B.__webglFramebuffer,m,m.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&Le(m)}function O(m){const g=m.texture,I=i.get(m),B=i.get(g);m.addEventListener("dispose",U);const k=m.textures,N=m.isWebGLCubeRenderTarget===!0,z=k.length>1,ce=d(m)||o;if(z||(B.__webglTexture===void 0&&(B.__webglTexture=t.createTexture()),B.__version=g.version,a.memory.textures++),N){I.__webglFramebuffer=[];for(let re=0;re<6;re++)if(o&&g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[re]=[];for(let he=0;he<g.mipmaps.length;he++)I.__webglFramebuffer[re][he]=t.createFramebuffer()}else I.__webglFramebuffer[re]=t.createFramebuffer()}else{if(o&&g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let re=0;re<g.mipmaps.length;re++)I.__webglFramebuffer[re]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(z)if(r.drawBuffers)for(let re=0,he=k.length;re<he;re++){const we=i.get(k[re]);we.__webglTexture===void 0&&(we.__webglTexture=t.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&m.samples>0&&J(m)===!1){I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let re=0;re<k.length;re++){const he=k[re];I.__webglColorRenderbuffer[re]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[re]);const we=s.convert(he.format,he.colorSpace),ue=s.convert(he.type),it=A(he.internalFormat,we,ue,he.colorSpace,m.isXRRenderTarget===!0),He=X(m);t.renderbufferStorageMultisample(t.RENDERBUFFER,He,it,m.width,m.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+re,t.RENDERBUFFER,I.__webglColorRenderbuffer[re])}t.bindRenderbuffer(t.RENDERBUFFER,null),m.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),Se(I.__webglDepthRenderbuffer,m,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(N){n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture),te(t.TEXTURE_CUBE_MAP,g,ce);for(let re=0;re<6;re++)if(o&&g.mipmaps&&g.mipmaps.length>0)for(let he=0;he<g.mipmaps.length;he++)be(I.__webglFramebuffer[re][he],m,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,he);else be(I.__webglFramebuffer[re],m,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);v(g,ce)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(z){for(let re=0,he=k.length;re<he;re++){const we=k[re],ue=i.get(we);n.bindTexture(t.TEXTURE_2D,ue.__webglTexture),te(t.TEXTURE_2D,we,ce),be(I.__webglFramebuffer,m,we,t.COLOR_ATTACHMENT0+re,t.TEXTURE_2D,0),v(we,ce)&&x(t.TEXTURE_2D)}n.unbindTexture()}else{let re=t.TEXTURE_2D;if((m.isWebGL3DRenderTarget||m.isWebGLArrayRenderTarget)&&(o?re=m.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(re,B.__webglTexture),te(re,g,ce),o&&g.mipmaps&&g.mipmaps.length>0)for(let he=0;he<g.mipmaps.length;he++)be(I.__webglFramebuffer[he],m,g,t.COLOR_ATTACHMENT0,re,he);else be(I.__webglFramebuffer,m,g,t.COLOR_ATTACHMENT0,re,0);v(g,ce)&&x(re),n.unbindTexture()}m.depthBuffer&&Le(m)}function P(m){const g=d(m)||o,I=m.textures;for(let B=0,k=I.length;B<k;B++){const N=I[B];if(v(N,g)){const z=m.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ce=i.get(N).__webglTexture;n.bindTexture(z,ce),x(z),n.unbindTexture()}}}function H(m){if(o&&m.samples>0&&J(m)===!1){const g=m.textures,I=m.width,B=m.height;let k=t.COLOR_BUFFER_BIT;const N=[],z=m.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(m),re=g.length>1;if(re)for(let he=0;he<g.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let he=0;he<g.length;he++){N.push(t.COLOR_ATTACHMENT0+he),m.depthBuffer&&N.push(z);const we=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(we===!1&&(m.depthBuffer&&(k|=t.DEPTH_BUFFER_BIT),m.stencilBuffer&&(k|=t.STENCIL_BUFFER_BIT)),re&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[he]),we===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[z]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[z])),re){const ue=i.get(g[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ue,0)}t.blitFramebuffer(0,0,I,B,0,0,I,B,k,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,N)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),re)for(let he=0;he<g.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,ce.__webglColorRenderbuffer[he]);const we=i.get(g[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,we,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function X(m){return Math.min(r.maxSamples,m.samples)}function J(m){const g=i.get(m);return o&&m.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function se(m){const g=a.render.frame;f.get(m)!==g&&(f.set(m,g),m.update())}function ae(m,g){const I=m.colorSpace,B=m.format,k=m.type;return m.isCompressedTexture===!0||m.isVideoTexture===!0||m.format===zl||I!==zi&&I!==wi&&(st.getTransfer(I)===dt?o===!1?e.has("EXT_sRGB")===!0&&B===An?(m.format=zl,m.minFilter=zt,m.generateMipmaps=!1):g=kp.sRGBToLinear(g):(B!==An||k!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),g}function w(m){return typeof HTMLImageElement<"u"&&m instanceof HTMLImageElement?(u.width=m.naturalWidth||m.width,u.height=m.naturalHeight||m.height):typeof VideoFrame<"u"&&m instanceof VideoFrame?(u.width=m.displayWidth,u.height=m.displayHeight):(u.width=m.width,u.height=m.height),u}this.allocateTextureUnit=$,this.resetTextureUnits=F,this.setTexture2D=Z,this.setTexture2DArray=q,this.setTexture3D=oe,this.setTextureCube=le,this.rebindTextures=y,this.setupRenderTarget=O,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=be,this.useMultisampledRTT=J}function sb(t,e,n){const i=n.isWebGL2;function r(s,a=wi){let o;const l=st.getTransfer(a);if(s===Ni)return t.UNSIGNED_BYTE;if(s===Pp)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Ip)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Bx)return t.BYTE;if(s===Gx)return t.SHORT;if(s===yc)return t.UNSIGNED_SHORT;if(s===Lp)return t.INT;if(s===Ri)return t.UNSIGNED_INT;if(s===oi)return t.FLOAT;if(s===Fs)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===kx)return t.ALPHA;if(s===An)return t.RGBA;if(s===Hx)return t.LUMINANCE;if(s===zx)return t.LUMINANCE_ALPHA;if(s===ur)return t.DEPTH_COMPONENT;if(s===Qr)return t.DEPTH_STENCIL;if(s===zl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Vx)return t.RED;if(s===Np)return t.RED_INTEGER;if(s===Wx)return t.RG;if(s===Dp)return t.RG_INTEGER;if(s===Up)return t.RGBA_INTEGER;if(s===Do||s===Uo||s===Oo||s===Fo)if(l===dt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Do)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Uo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Oo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Do)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Uo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Oo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Fo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===nf||s===rf||s===sf||s===af)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===nf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===rf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===sf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===af)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Op)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===of||s===lf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===of)return l===dt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===lf)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===cf||s===uf||s===ff||s===hf||s===df||s===pf||s===mf||s===_f||s===gf||s===vf||s===xf||s===Mf||s===Sf||s===Ef)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===cf)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===uf)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ff)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===hf)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===df)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===pf)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===mf)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===_f)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===gf)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vf)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===xf)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Mf)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Sf)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ef)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Bo||s===yf||s===Tf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Bo)return l===dt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===yf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Tf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Xx||s===bf||s===Af||s===wf)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Bo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===bf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Af)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===cr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class ab extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ci extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ob={type:"move"};class fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const E of e.hand.values()){const p=n.getJointPose(E,i),d=this._getHandJoint(c,E);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),_=.02,S=.005;c.inputState.pinching&&h>_+S?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=_-S&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ob)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ci;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const lb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ub{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Jt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Bi({extensions:{fragDepth:!0},vertexShader:lb,fragmentShader:cb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new un(new mr(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class fb extends is{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,_=null,S=null;const E=new ub,p=n.getContextAttributes();let d=null,C=null;const v=[],x=[],A=new Je;let T=null;const b=new Tn;b.layers.enable(1),b.viewport=new Nt;const D=new Tn;D.layers.enable(2),D.viewport=new Nt;const U=[b,D],M=new ab;M.layers.enable(1),M.layers.enable(2);let L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let fe=v[te];return fe===void 0&&(fe=new fl,v[te]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(te){let fe=v[te];return fe===void 0&&(fe=new fl,v[te]=fe),fe.getGripSpace()},this.getHand=function(te){let fe=v[te];return fe===void 0&&(fe=new fl,v[te]=fe),fe.getHandSpace()};function ie(te){const fe=x.indexOf(te.inputSource);if(fe===-1)return;const ge=v[fe];ge!==void 0&&(ge.update(te.inputSource,te.frame,c||a),ge.dispatchEvent({type:te.type,data:te.inputSource}))}function F(){r.removeEventListener("select",ie),r.removeEventListener("selectstart",ie),r.removeEventListener("selectend",ie),r.removeEventListener("squeeze",ie),r.removeEventListener("squeezestart",ie),r.removeEventListener("squeezeend",ie),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",$);for(let te=0;te<v.length;te++){const fe=x[te];fe!==null&&(x[te]=null,v[te].disconnect(fe))}L=null,W=null,E.reset(),e.setRenderTarget(d),_=null,h=null,f=null,r=null,C=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return h!==null?h:_},this.getBinding=function(){return f},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",ie),r.addEventListener("selectstart",ie),r.addEventListener("selectend",ie),r.addEventListener("squeeze",ie),r.addEventListener("squeezestart",ie),r.addEventListener("squeezeend",ie),r.addEventListener("end",F),r.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const fe={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,n,fe),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),C=new dr(_.framebufferWidth,_.framebufferHeight,{format:An,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let fe=null,ge=null,Ce=null;p.depth&&(Ce=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=p.stencil?Qr:ur,ge=p.stencil?cr:Ri);const be={colorFormat:n.RGBA8,depthFormat:Ce,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(be),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),C=new dr(h.textureWidth,h.textureHeight,{format:An,type:Ni,depthTexture:new Jp(h.textureWidth,h.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const Se=e.properties.get(C);Se.__ignoreDepthValues=h.ignoreDepthValues}C.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Pe.setContext(r),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function $(te){for(let fe=0;fe<te.removed.length;fe++){const ge=te.removed[fe],Ce=x.indexOf(ge);Ce>=0&&(x[Ce]=null,v[Ce].disconnect(ge))}for(let fe=0;fe<te.added.length;fe++){const ge=te.added[fe];let Ce=x.indexOf(ge);if(Ce===-1){for(let Se=0;Se<v.length;Se++)if(Se>=x.length){x.push(ge),Ce=Se;break}else if(x[Se]===null){x[Se]=ge,Ce=Se;break}if(Ce===-1)break}const be=v[Ce];be&&be.connect(ge)}}const Y=new K,Z=new K;function q(te,fe,ge){Y.setFromMatrixPosition(fe.matrixWorld),Z.setFromMatrixPosition(ge.matrixWorld);const Ce=Y.distanceTo(Z),be=fe.projectionMatrix.elements,Se=ge.projectionMatrix.elements,Ge=be[14]/(be[10]-1),Le=be[14]/(be[10]+1),y=(be[9]+1)/be[5],O=(be[9]-1)/be[5],P=(be[8]-1)/be[0],H=(Se[8]+1)/Se[0],X=Ge*P,J=Ge*H,se=Ce/(-P+H),ae=se*-P;fe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ae),te.translateZ(se),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const w=Ge+se,m=Le+se,g=X-ae,I=J+(Ce-ae),B=y*Le/m*w,k=O*Le/m*w;te.projectionMatrix.makePerspective(g,I,B,k,w,m),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function oe(te,fe){fe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(fe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;E.texture!==null&&(te.near=E.depthNear,te.far=E.depthFar),M.near=D.near=b.near=te.near,M.far=D.far=b.far=te.far,(L!==M.near||W!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,W=M.far,b.near=L,b.far=W,D.near=L,D.far=W,b.updateProjectionMatrix(),D.updateProjectionMatrix(),te.updateProjectionMatrix());const fe=te.parent,ge=M.cameras;oe(M,fe);for(let Ce=0;Ce<ge.length;Ce++)oe(ge[Ce],fe);ge.length===2?q(M,b,D):M.projectionMatrix.copy(b.projectionMatrix),le(te,M,fe)};function le(te,fe,ge){ge===null?te.matrix.copy(fe.matrixWorld):(te.matrix.copy(ge.matrixWorld),te.matrix.invert(),te.matrix.multiply(fe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(fe.projectionMatrix),te.projectionMatrixInverse.copy(fe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Vl*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&_===null))return l},this.setFoveation=function(te){l=te,h!==null&&(h.fixedFoveation=te),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=te)},this.hasDepthSensing=function(){return E.texture!==null};let de=null;function me(te,fe){if(u=fe.getViewerPose(c||a),S=fe,u!==null){const ge=u.views;_!==null&&(e.setRenderTargetFramebuffer(C,_.framebuffer),e.setRenderTarget(C));let Ce=!1;ge.length!==M.cameras.length&&(M.cameras.length=0,Ce=!0);for(let Se=0;Se<ge.length;Se++){const Ge=ge[Se];let Le=null;if(_!==null)Le=_.getViewport(Ge);else{const O=f.getViewSubImage(h,Ge);Le=O.viewport,Se===0&&(e.setRenderTargetTextures(C,O.colorTexture,h.ignoreDepthValues?void 0:O.depthStencilTexture),e.setRenderTarget(C))}let y=U[Se];y===void 0&&(y=new Tn,y.layers.enable(Se),y.viewport=new Nt,U[Se]=y),y.matrix.fromArray(Ge.transform.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale),y.projectionMatrix.fromArray(Ge.projectionMatrix),y.projectionMatrixInverse.copy(y.projectionMatrix).invert(),y.viewport.set(Le.x,Le.y,Le.width,Le.height),Se===0&&(M.matrix.copy(y.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Ce===!0&&M.cameras.push(y)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const Se=f.getDepthInformation(ge[0]);Se&&Se.isValid&&Se.texture&&E.init(e,Se,r.renderState)}}for(let ge=0;ge<v.length;ge++){const Ce=x[ge],be=v[ge];Ce!==null&&be!==void 0&&be.update(Ce,fe,c||a)}E.render(e,M),de&&de(te,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),S=null}const Pe=new Zp;Pe.setAnimationLoop(me),this.setAnimationLoop=function(te){de=te},this.dispose=function(){}}}const er=new $n,hb=new xt;function db(t,e){function n(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,qp(t)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,C,v,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&_(p,d,x)):d.isMeshMatcapMaterial?(s(p,d),S(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),E(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,C,v):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,n(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===rn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,n(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===rn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,n(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,n(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const C=e.get(d),v=C.envMap,x=C.envMapRotation;if(v&&(p.envMap.value=v,er.copy(x),er.x*=-1,er.y*=-1,er.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),p.envMapRotation.value.setFromMatrix4(hb.makeRotationFromEuler(er)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const A=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*A,n(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,C,v){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*C,p.scale.value=v*.5,d.map&&(p.map.value=d.map,n(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function _(p,d,C){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===rn&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=C.texture,p.transmissionSamplerSize.value.set(C.width,C.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,p.specularIntensityMapTransform))}function S(p,d){d.matcap&&(p.matcap.value=d.matcap)}function E(p,d){const C=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(C.matrixWorld),p.nearDistance.value=C.shadow.camera.near,p.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function pb(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(C,v){const x=v.program;i.uniformBlockBinding(C,x)}function c(C,v){let x=r[C.id];x===void 0&&(S(C),x=u(C),r[C.id]=x,C.addEventListener("dispose",p));const A=v.program;i.updateUBOMapping(C,A);const T=e.render.frame;s[C.id]!==T&&(h(C),s[C.id]=T)}function u(C){const v=f();C.__bindingPointIndex=v;const x=t.createBuffer(),A=C.__size,T=C.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,A,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,x),x}function f(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(C){const v=r[C.id],x=C.uniforms,A=C.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let T=0,b=x.length;T<b;T++){const D=Array.isArray(x[T])?x[T]:[x[T]];for(let U=0,M=D.length;U<M;U++){const L=D[U];if(_(L,T,U,A)===!0){const W=L.__offset,ie=Array.isArray(L.value)?L.value:[L.value];let F=0;for(let $=0;$<ie.length;$++){const Y=ie[$],Z=E(Y);typeof Y=="number"||typeof Y=="boolean"?(L.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,W+F,L.__data)):Y.isMatrix3?(L.__data[0]=Y.elements[0],L.__data[1]=Y.elements[1],L.__data[2]=Y.elements[2],L.__data[3]=0,L.__data[4]=Y.elements[3],L.__data[5]=Y.elements[4],L.__data[6]=Y.elements[5],L.__data[7]=0,L.__data[8]=Y.elements[6],L.__data[9]=Y.elements[7],L.__data[10]=Y.elements[8],L.__data[11]=0):(Y.toArray(L.__data,F),F+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function _(C,v,x,A){const T=C.value,b=v+"_"+x;if(A[b]===void 0)return typeof T=="number"||typeof T=="boolean"?A[b]=T:A[b]=T.clone(),!0;{const D=A[b];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return A[b]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function S(C){const v=C.uniforms;let x=0;const A=16;for(let b=0,D=v.length;b<D;b++){const U=Array.isArray(v[b])?v[b]:[v[b]];for(let M=0,L=U.length;M<L;M++){const W=U[M],ie=Array.isArray(W.value)?W.value:[W.value];for(let F=0,$=ie.length;F<$;F++){const Y=ie[F],Z=E(Y),q=x%A;q!==0&&A-q<Z.boundary&&(x+=A-q),W.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=x,x+=Z.storage}}}const T=x%A;return T>0&&(x+=A-T),C.__size=x,C.__cache={},this}function E(C){const v={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(v.boundary=4,v.storage=4):C.isVector2?(v.boundary=8,v.storage=8):C.isVector3||C.isColor?(v.boundary=16,v.storage=12):C.isVector4?(v.boundary=16,v.storage=16):C.isMatrix3?(v.boundary=48,v.storage=48):C.isMatrix4?(v.boundary=64,v.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),v}function p(C){const v=C.target;v.removeEventListener("dispose",p);const x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const C in r)t.deleteBuffer(r[C]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class rm{constructor(e={}){const{canvas:n=iM(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const _=new Uint32Array(4),S=new Int32Array(4);let E=null,p=null;const d=[],C=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this._useLegacyLights=!1,this.toneMapping=Ii,this.toneMappingExposure=1;const v=this;let x=!1,A=0,T=0,b=null,D=-1,U=null;const M=new Nt,L=new Nt;let W=null;const ie=new Be(0);let F=0,$=n.width,Y=n.height,Z=1,q=null,oe=null;const le=new Nt(0,0,$,Y),de=new Nt(0,0,$,Y);let me=!1;const Pe=new bc;let te=!1,fe=!1,ge=null;const Ce=new xt,be=new Je,Se=new K,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return b===null?Z:1}let y=i;function O(R,V){for(let ee=0;ee<R.length;ee++){const ne=R[ee],j=n.getContext(ne,V);if(j!==null)return j}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ec}`),n.addEventListener("webglcontextlost",mt,!1),n.addEventListener("webglcontextrestored",G,!1),n.addEventListener("webglcontextcreationerror",xe,!1),y===null){const V=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&V.shift(),y=O(V,R),y===null)throw O(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),y.getShaderPrecisionFormat===void 0&&(y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let P,H,X,J,se,ae,w,m,g,I,B,k,N,z,ce,re,he,we,ue,it,He,Te,Ee,Ae;function Ke(){P=new My(y),H=new py(y,P,e),P.init(H),Te=new sb(y,P,H),X=new ib(y,P,H),J=new yy(y),se=new VT,ae=new rb(y,P,X,se,H,Te,J),w=new _y(v),m=new xy(v),g=new CM(y,H),Ee=new hy(y,P,g,H),I=new Sy(y,g,J,Ee),B=new wy(y,I,g,J),ue=new Ay(y,H,ae),re=new my(se),k=new zT(v,w,m,P,H,Ee,re),N=new db(v,se),z=new XT,ce=new ZT(P,H),we=new fy(v,w,m,X,B,h,l),he=new nb(v,B,H),Ae=new pb(y,J,H,X),it=new dy(y,P,J,H),He=new Ey(y,P,J,H),J.programs=k.programs,v.capabilities=H,v.extensions=P,v.properties=se,v.renderLists=z,v.shadowMap=he,v.state=X,v.info=J}Ke();const ze=new fb(v,y);this.xr=ze,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const R=P.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=P.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(R){R!==void 0&&(Z=R,this.setSize($,Y,!1))},this.getSize=function(R){return R.set($,Y)},this.setSize=function(R,V,ee=!0){if(ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=R,Y=V,n.width=Math.floor(R*Z),n.height=Math.floor(V*Z),ee===!0&&(n.style.width=R+"px",n.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set($*Z,Y*Z).floor()},this.setDrawingBufferSize=function(R,V,ee){$=R,Y=V,Z=ee,n.width=Math.floor(R*ee),n.height=Math.floor(V*ee),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(M)},this.getViewport=function(R){return R.copy(le)},this.setViewport=function(R,V,ee,ne){R.isVector4?le.set(R.x,R.y,R.z,R.w):le.set(R,V,ee,ne),X.viewport(M.copy(le).multiplyScalar(Z).round())},this.getScissor=function(R){return R.copy(de)},this.setScissor=function(R,V,ee,ne){R.isVector4?de.set(R.x,R.y,R.z,R.w):de.set(R,V,ee,ne),X.scissor(L.copy(de).multiplyScalar(Z).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(R){X.setScissorTest(me=R)},this.setOpaqueSort=function(R){q=R},this.setTransparentSort=function(R){oe=R},this.getClearColor=function(R){return R.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(R=!0,V=!0,ee=!0){let ne=0;if(R){let j=!1;if(b!==null){const ye=b.texture.format;j=ye===Up||ye===Dp||ye===Np}if(j){const ye=b.texture.type,Re=ye===Ni||ye===Ri||ye===yc||ye===cr||ye===Pp||ye===Ip,De=we.getClearColor(),Oe=we.getClearAlpha(),qe=De.r,ke=De.g,Ve=De.b;Re?(_[0]=qe,_[1]=ke,_[2]=Ve,_[3]=Oe,y.clearBufferuiv(y.COLOR,0,_)):(S[0]=qe,S[1]=ke,S[2]=Ve,S[3]=Oe,y.clearBufferiv(y.COLOR,0,S))}else ne|=y.COLOR_BUFFER_BIT}V&&(ne|=y.DEPTH_BUFFER_BIT),ee&&(ne|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",mt,!1),n.removeEventListener("webglcontextrestored",G,!1),n.removeEventListener("webglcontextcreationerror",xe,!1),z.dispose(),ce.dispose(),se.dispose(),w.dispose(),m.dispose(),B.dispose(),Ee.dispose(),Ae.dispose(),k.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",hn),ze.removeEventListener("sessionend",ct),ge&&(ge.dispose(),ge=null),Wt.stop()};function mt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const R=J.autoReset,V=he.enabled,ee=he.autoUpdate,ne=he.needsUpdate,j=he.type;Ke(),J.autoReset=R,he.enabled=V,he.autoUpdate=ee,he.needsUpdate=ne,he.type=j}function xe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Q(R){const V=R.target;V.removeEventListener("dispose",Q),pe(V)}function pe(R){Me(R),se.remove(R)}function Me(R){const V=se.get(R).programs;V!==void 0&&(V.forEach(function(ee){k.releaseProgram(ee)}),R.isShaderMaterial&&k.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,ee,ne,j,ye){V===null&&(V=Ge);const Re=j.isMesh&&j.matrixWorld.determinant()<0,De=pm(R,V,ee,ne,j);X.setMaterial(ne,Re);let Oe=ee.index,qe=1;if(ne.wireframe===!0){if(Oe=I.getWireframeAttribute(ee),Oe===void 0)return;qe=2}const ke=ee.drawRange,Ve=ee.attributes.position;let Mt=ke.start*qe,sn=(ke.start+ke.count)*qe;ye!==null&&(Mt=Math.max(Mt,ye.start*qe),sn=Math.min(sn,(ye.start+ye.count)*qe)),Oe!==null?(Mt=Math.max(Mt,0),sn=Math.min(sn,Oe.count)):Ve!=null&&(Mt=Math.max(Mt,0),sn=Math.min(sn,Ve.count));const Ct=sn-Mt;if(Ct<0||Ct===1/0)return;Ee.setup(j,ne,De,ee,Oe);let Yn,gt=it;if(Oe!==null&&(Yn=g.get(Oe),gt=He,gt.setIndex(Yn)),j.isMesh)ne.wireframe===!0?(X.setLineWidth(ne.wireframeLinewidth*Le()),gt.setMode(y.LINES)):gt.setMode(y.TRIANGLES);else if(j.isLine){let Xe=ne.linewidth;Xe===void 0&&(Xe=1),X.setLineWidth(Xe*Le()),j.isLineSegments?gt.setMode(y.LINES):j.isLineLoop?gt.setMode(y.LINE_LOOP):gt.setMode(y.LINE_STRIP)}else j.isPoints?gt.setMode(y.POINTS):j.isSprite&&gt.setMode(y.TRIANGLES);if(j.isBatchedMesh)gt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)gt.renderInstances(Mt,Ct,j.count);else if(ee.isInstancedBufferGeometry){const Xe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,ho=Math.min(ee.instanceCount,Xe);gt.renderInstances(Mt,Ct,ho)}else gt.render(Mt,Ct)};function Ze(R,V,ee){R.transparent===!0&&R.side===Gn&&R.forceSinglePass===!1?(R.side=rn,R.needsUpdate=!0,qs(R,V,ee),R.side=Fi,R.needsUpdate=!0,qs(R,V,ee),R.side=Gn):qs(R,V,ee)}this.compile=function(R,V,ee=null){ee===null&&(ee=R),p=ce.get(ee),p.init(),C.push(p),ee.traverseVisible(function(j){j.isLight&&j.layers.test(V.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),R!==ee&&R.traverseVisible(function(j){j.isLight&&j.layers.test(V.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),p.setupLights(v._useLegacyLights);const ne=new Set;return R.traverse(function(j){const ye=j.material;if(ye)if(Array.isArray(ye))for(let Re=0;Re<ye.length;Re++){const De=ye[Re];Ze(De,ee,j),ne.add(De)}else Ze(ye,ee,j),ne.add(ye)}),C.pop(),p=null,ne},this.compileAsync=function(R,V,ee=null){const ne=this.compile(R,V,ee);return new Promise(j=>{function ye(){if(ne.forEach(function(Re){se.get(Re).currentProgram.isReady()&&ne.delete(Re)}),ne.size===0){j(R);return}setTimeout(ye,10)}P.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let lt=null;function Ut(R){lt&&lt(R)}function hn(){Wt.stop()}function ct(){Wt.start()}const Wt=new Zp;Wt.setAnimationLoop(Ut),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(R){lt=R,ze.setAnimationLoop(R),R===null?Wt.stop():Wt.start()},ze.addEventListener("sessionstart",hn),ze.addEventListener("sessionend",ct),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(V),V=ze.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,V,b),p=ce.get(R,C.length),p.init(),C.push(p),Ce.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Pe.setFromProjectionMatrix(Ce),fe=this.localClippingEnabled,te=re.init(this.clippingPlanes,fe),E=z.get(R,d.length),E.init(),d.push(E),In(R,V,0,v.sortObjects),E.finish(),v.sortObjects===!0&&E.sort(q,oe),this.info.render.frame++,te===!0&&re.beginShadows();const ee=p.state.shadowsArray;if(he.render(ee,R,V),te===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ze.enabled===!1||ze.isPresenting===!1||ze.hasDepthSensing()===!1)&&we.render(E,R),p.setupLights(v._useLegacyLights),V.isArrayCamera){const ne=V.cameras;for(let j=0,ye=ne.length;j<ye;j++){const Re=ne[j];Lc(E,R,Re,Re.viewport)}}else Lc(E,R,V);b!==null&&(ae.updateMultisampleRenderTarget(b),ae.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(v,R,V),Ee.resetDefaultState(),D=-1,U=null,C.pop(),C.length>0?p=C[C.length-1]:p=null,d.pop(),d.length>0?E=d[d.length-1]:E=null};function In(R,V,ee,ne){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)ee=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Pe.intersectsSprite(R)){ne&&Se.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ce);const Re=B.update(R),De=R.material;De.visible&&E.push(R,Re,De,ee,Se.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Pe.intersectsObject(R))){const Re=B.update(R),De=R.material;if(ne&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Se.copy(R.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Se.copy(Re.boundingSphere.center)),Se.applyMatrix4(R.matrixWorld).applyMatrix4(Ce)),Array.isArray(De)){const Oe=Re.groups;for(let qe=0,ke=Oe.length;qe<ke;qe++){const Ve=Oe[qe],Mt=De[Ve.materialIndex];Mt&&Mt.visible&&E.push(R,Re,Mt,ee,Se.z,Ve)}}else De.visible&&E.push(R,Re,De,ee,Se.z,null)}}const ye=R.children;for(let Re=0,De=ye.length;Re<De;Re++)In(ye[Re],V,ee,ne)}function Lc(R,V,ee,ne){const j=R.opaque,ye=R.transmissive,Re=R.transparent;p.setupLightsView(ee),te===!0&&re.setGlobalState(v.clippingPlanes,ee),ye.length>0&&dm(j,ye,V,ee),ne&&X.viewport(M.copy(ne)),j.length>0&&Ys(j,V,ee),ye.length>0&&Ys(ye,V,ee),Re.length>0&&Ys(Re,V,ee),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function dm(R,V,ee,ne){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;const ye=H.isWebGL2;ge===null&&(ge=new dr(1,1,{generateMipmaps:!0,type:P.has("EXT_color_buffer_half_float")?Fs:Ni,minFilter:ar,samples:ye?4:0})),v.getDrawingBufferSize(be),ye?ge.setSize(be.x,be.y):ge.setSize(Wl(be.x),Wl(be.y));const Re=v.getRenderTarget();v.setRenderTarget(ge),v.getClearColor(ie),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear();const De=v.toneMapping;v.toneMapping=Ii,Ys(R,ee,ne),ae.updateMultisampleRenderTarget(ge),ae.updateRenderTargetMipmap(ge);let Oe=!1;for(let qe=0,ke=V.length;qe<ke;qe++){const Ve=V[qe],Mt=Ve.object,sn=Ve.geometry,Ct=Ve.material,Yn=Ve.group;if(Ct.side===Gn&&Mt.layers.test(ne.layers)){const gt=Ct.side;Ct.side=rn,Ct.needsUpdate=!0,Pc(Mt,ee,ne,sn,Ct,Yn),Ct.side=gt,Ct.needsUpdate=!0,Oe=!0}}Oe===!0&&(ae.updateMultisampleRenderTarget(ge),ae.updateRenderTargetMipmap(ge)),v.setRenderTarget(Re),v.setClearColor(ie,F),v.toneMapping=De}function Ys(R,V,ee){const ne=V.isScene===!0?V.overrideMaterial:null;for(let j=0,ye=R.length;j<ye;j++){const Re=R[j],De=Re.object,Oe=Re.geometry,qe=ne===null?Re.material:ne,ke=Re.group;De.layers.test(ee.layers)&&Pc(De,V,ee,Oe,qe,ke)}}function Pc(R,V,ee,ne,j,ye){R.onBeforeRender(v,V,ee,ne,j,ye),R.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(v,V,ee,ne,R,ye),j.transparent===!0&&j.side===Gn&&j.forceSinglePass===!1?(j.side=rn,j.needsUpdate=!0,v.renderBufferDirect(ee,V,ne,j,R,ye),j.side=Fi,j.needsUpdate=!0,v.renderBufferDirect(ee,V,ne,j,R,ye),j.side=Gn):v.renderBufferDirect(ee,V,ne,j,R,ye),R.onAfterRender(v,V,ee,ne,j,ye)}function qs(R,V,ee){V.isScene!==!0&&(V=Ge);const ne=se.get(R),j=p.state.lights,ye=p.state.shadowsArray,Re=j.state.version,De=k.getParameters(R,j.state,ye,V,ee),Oe=k.getProgramCacheKey(De);let qe=ne.programs;ne.environment=R.isMeshStandardMaterial?V.environment:null,ne.fog=V.fog,ne.envMap=(R.isMeshStandardMaterial?m:w).get(R.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,qe===void 0&&(R.addEventListener("dispose",Q),qe=new Map,ne.programs=qe);let ke=qe.get(Oe);if(ke!==void 0){if(ne.currentProgram===ke&&ne.lightsStateVersion===Re)return Nc(R,De),ke}else De.uniforms=k.getUniforms(R),R.onBuild(ee,De,v),R.onBeforeCompile(De,v),ke=k.acquireProgram(De,Oe),qe.set(Oe,ke),ne.uniforms=De.uniforms;const Ve=ne.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ve.clippingPlanes=re.uniform),Nc(R,De),ne.needsLights=_m(R),ne.lightsStateVersion=Re,ne.needsLights&&(Ve.ambientLightColor.value=j.state.ambient,Ve.lightProbe.value=j.state.probe,Ve.directionalLights.value=j.state.directional,Ve.directionalLightShadows.value=j.state.directionalShadow,Ve.spotLights.value=j.state.spot,Ve.spotLightShadows.value=j.state.spotShadow,Ve.rectAreaLights.value=j.state.rectArea,Ve.ltc_1.value=j.state.rectAreaLTC1,Ve.ltc_2.value=j.state.rectAreaLTC2,Ve.pointLights.value=j.state.point,Ve.pointLightShadows.value=j.state.pointShadow,Ve.hemisphereLights.value=j.state.hemi,Ve.directionalShadowMap.value=j.state.directionalShadowMap,Ve.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ve.spotShadowMap.value=j.state.spotShadowMap,Ve.spotLightMatrix.value=j.state.spotLightMatrix,Ve.spotLightMap.value=j.state.spotLightMap,Ve.pointShadowMap.value=j.state.pointShadowMap,Ve.pointShadowMatrix.value=j.state.pointShadowMatrix),ne.currentProgram=ke,ne.uniformsList=null,ke}function Ic(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=Aa.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function Nc(R,V){const ee=se.get(R);ee.outputColorSpace=V.outputColorSpace,ee.batching=V.batching,ee.instancing=V.instancing,ee.instancingColor=V.instancingColor,ee.instancingMorph=V.instancingMorph,ee.skinning=V.skinning,ee.morphTargets=V.morphTargets,ee.morphNormals=V.morphNormals,ee.morphColors=V.morphColors,ee.morphTargetsCount=V.morphTargetsCount,ee.numClippingPlanes=V.numClippingPlanes,ee.numIntersection=V.numClipIntersection,ee.vertexAlphas=V.vertexAlphas,ee.vertexTangents=V.vertexTangents,ee.toneMapping=V.toneMapping}function pm(R,V,ee,ne,j){V.isScene!==!0&&(V=Ge),ae.resetTextureUnits();const ye=V.fog,Re=ne.isMeshStandardMaterial?V.environment:null,De=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:zi,Oe=(ne.isMeshStandardMaterial?m:w).get(ne.envMap||Re),qe=ne.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,ke=!!ee.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ve=!!ee.morphAttributes.position,Mt=!!ee.morphAttributes.normal,sn=!!ee.morphAttributes.color;let Ct=Ii;ne.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Ct=v.toneMapping);const Yn=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,gt=Yn!==void 0?Yn.length:0,Xe=se.get(ne),ho=p.state.lights;if(te===!0&&(fe===!0||R!==U)){const dn=R===U&&ne.id===D;re.setState(ne,R,dn)}let _t=!1;ne.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==ho.state.version||Xe.outputColorSpace!==De||j.isBatchedMesh&&Xe.batching===!1||!j.isBatchedMesh&&Xe.batching===!0||j.isInstancedMesh&&Xe.instancing===!1||!j.isInstancedMesh&&Xe.instancing===!0||j.isSkinnedMesh&&Xe.skinning===!1||!j.isSkinnedMesh&&Xe.skinning===!0||j.isInstancedMesh&&Xe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Xe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Xe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Xe.instancingMorph===!1&&j.morphTexture!==null||Xe.envMap!==Oe||ne.fog===!0&&Xe.fog!==ye||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==re.numPlanes||Xe.numIntersection!==re.numIntersection)||Xe.vertexAlphas!==qe||Xe.vertexTangents!==ke||Xe.morphTargets!==Ve||Xe.morphNormals!==Mt||Xe.morphColors!==sn||Xe.toneMapping!==Ct||H.isWebGL2===!0&&Xe.morphTargetsCount!==gt)&&(_t=!0):(_t=!0,Xe.__version=ne.version);let Vi=Xe.currentProgram;_t===!0&&(Vi=qs(ne,V,j));let Dc=!1,as=!1,po=!1;const Gt=Vi.getUniforms(),Wi=Xe.uniforms;if(X.useProgram(Vi.program)&&(Dc=!0,as=!0,po=!0),ne.id!==D&&(D=ne.id,as=!0),Dc||U!==R){Gt.setValue(y,"projectionMatrix",R.projectionMatrix),Gt.setValue(y,"viewMatrix",R.matrixWorldInverse);const dn=Gt.map.cameraPosition;dn!==void 0&&dn.setValue(y,Se.setFromMatrixPosition(R.matrixWorld)),H.logarithmicDepthBuffer&&Gt.setValue(y,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Gt.setValue(y,"isOrthographic",R.isOrthographicCamera===!0),U!==R&&(U=R,as=!0,po=!0)}if(j.isSkinnedMesh){Gt.setOptional(y,j,"bindMatrix"),Gt.setOptional(y,j,"bindMatrixInverse");const dn=j.skeleton;dn&&(H.floatVertexTextures?(dn.boneTexture===null&&dn.computeBoneTexture(),Gt.setValue(y,"boneTexture",dn.boneTexture,ae)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}j.isBatchedMesh&&(Gt.setOptional(y,j,"batchingTexture"),Gt.setValue(y,"batchingTexture",j._matricesTexture,ae));const mo=ee.morphAttributes;if((mo.position!==void 0||mo.normal!==void 0||mo.color!==void 0&&H.isWebGL2===!0)&&ue.update(j,ee,Vi),(as||Xe.receiveShadow!==j.receiveShadow)&&(Xe.receiveShadow=j.receiveShadow,Gt.setValue(y,"receiveShadow",j.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Wi.envMap.value=Oe,Wi.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),as&&(Gt.setValue(y,"toneMappingExposure",v.toneMappingExposure),Xe.needsLights&&mm(Wi,po),ye&&ne.fog===!0&&N.refreshFogUniforms(Wi,ye),N.refreshMaterialUniforms(Wi,ne,Z,Y,ge),Aa.upload(y,Ic(Xe),Wi,ae)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Aa.upload(y,Ic(Xe),Wi,ae),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Gt.setValue(y,"center",j.center),Gt.setValue(y,"modelViewMatrix",j.modelViewMatrix),Gt.setValue(y,"normalMatrix",j.normalMatrix),Gt.setValue(y,"modelMatrix",j.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const dn=ne.uniformsGroups;for(let _o=0,gm=dn.length;_o<gm;_o++)if(H.isWebGL2){const Uc=dn[_o];Ae.update(Uc,Vi),Ae.bind(Uc,Vi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vi}function mm(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function _m(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,V,ee){se.get(R.texture).__webglTexture=V,se.get(R.depthTexture).__webglTexture=ee;const ne=se.get(R);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=ee===void 0,ne.__autoAllocateDepthBuffer||P.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,V){const ee=se.get(R);ee.__webglFramebuffer=V,ee.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,ee=0){b=R,A=V,T=ee;let ne=!0,j=null,ye=!1,Re=!1;if(R){const Oe=se.get(R);Oe.__useDefaultFramebuffer!==void 0?(X.bindFramebuffer(y.FRAMEBUFFER,null),ne=!1):Oe.__webglFramebuffer===void 0?ae.setupRenderTarget(R):Oe.__hasExternalTextures&&ae.rebindTextures(R,se.get(R.texture).__webglTexture,se.get(R.depthTexture).__webglTexture);const qe=R.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Re=!0);const ke=se.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ke[V])?j=ke[V][ee]:j=ke[V],ye=!0):H.isWebGL2&&R.samples>0&&ae.useMultisampledRTT(R)===!1?j=se.get(R).__webglMultisampledFramebuffer:Array.isArray(ke)?j=ke[ee]:j=ke,M.copy(R.viewport),L.copy(R.scissor),W=R.scissorTest}else M.copy(le).multiplyScalar(Z).floor(),L.copy(de).multiplyScalar(Z).floor(),W=me;if(X.bindFramebuffer(y.FRAMEBUFFER,j)&&H.drawBuffers&&ne&&X.drawBuffers(R,j),X.viewport(M),X.scissor(L),X.setScissorTest(W),ye){const Oe=se.get(R.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+V,Oe.__webglTexture,ee)}else if(Re){const Oe=se.get(R.texture),qe=V||0;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,Oe.__webglTexture,ee||0,qe)}D=-1},this.readRenderTargetPixels=function(R,V,ee,ne,j,ye,Re){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=se.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){X.bindFramebuffer(y.FRAMEBUFFER,De);try{const Oe=R.texture,qe=Oe.format,ke=Oe.type;if(qe!==An&&Te.convert(qe)!==y.getParameter(y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=ke===Fs&&(P.has("EXT_color_buffer_half_float")||H.isWebGL2&&P.has("EXT_color_buffer_float"));if(ke!==Ni&&Te.convert(ke)!==y.getParameter(y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===oi&&(H.isWebGL2||P.has("OES_texture_float")||P.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-ne&&ee>=0&&ee<=R.height-j&&y.readPixels(V,ee,ne,j,Te.convert(qe),Te.convert(ke),ye)}finally{const Oe=b!==null?se.get(b).__webglFramebuffer:null;X.bindFramebuffer(y.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(R,V,ee=0){const ne=Math.pow(2,-ee),j=Math.floor(V.image.width*ne),ye=Math.floor(V.image.height*ne);ae.setTexture2D(V,0),y.copyTexSubImage2D(y.TEXTURE_2D,ee,0,0,R.x,R.y,j,ye),X.unbindTexture()},this.copyTextureToTexture=function(R,V,ee,ne=0){const j=V.image.width,ye=V.image.height,Re=Te.convert(ee.format),De=Te.convert(ee.type);ae.setTexture2D(ee,0),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,ee.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,ee.unpackAlignment),V.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,ne,R.x,R.y,j,ye,Re,De,V.image.data):V.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,ne,R.x,R.y,V.mipmaps[0].width,V.mipmaps[0].height,Re,V.mipmaps[0].data):y.texSubImage2D(y.TEXTURE_2D,ne,R.x,R.y,Re,De,V.image),ne===0&&ee.generateMipmaps&&y.generateMipmap(y.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(R,V,ee,ne,j=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=Math.round(R.max.x-R.min.x),Re=Math.round(R.max.y-R.min.y),De=R.max.z-R.min.z+1,Oe=Te.convert(ne.format),qe=Te.convert(ne.type);let ke;if(ne.isData3DTexture)ae.setTexture3D(ne,0),ke=y.TEXTURE_3D;else if(ne.isDataArrayTexture||ne.isCompressedArrayTexture)ae.setTexture2DArray(ne,0),ke=y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,ne.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,ne.unpackAlignment);const Ve=y.getParameter(y.UNPACK_ROW_LENGTH),Mt=y.getParameter(y.UNPACK_IMAGE_HEIGHT),sn=y.getParameter(y.UNPACK_SKIP_PIXELS),Ct=y.getParameter(y.UNPACK_SKIP_ROWS),Yn=y.getParameter(y.UNPACK_SKIP_IMAGES),gt=ee.isCompressedTexture?ee.mipmaps[j]:ee.image;y.pixelStorei(y.UNPACK_ROW_LENGTH,gt.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,gt.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,R.min.x),y.pixelStorei(y.UNPACK_SKIP_ROWS,R.min.y),y.pixelStorei(y.UNPACK_SKIP_IMAGES,R.min.z),ee.isDataTexture||ee.isData3DTexture?y.texSubImage3D(ke,j,V.x,V.y,V.z,ye,Re,De,Oe,qe,gt.data):ne.isCompressedArrayTexture?y.compressedTexSubImage3D(ke,j,V.x,V.y,V.z,ye,Re,De,Oe,gt.data):y.texSubImage3D(ke,j,V.x,V.y,V.z,ye,Re,De,Oe,qe,gt),y.pixelStorei(y.UNPACK_ROW_LENGTH,Ve),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Mt),y.pixelStorei(y.UNPACK_SKIP_PIXELS,sn),y.pixelStorei(y.UNPACK_SKIP_ROWS,Ct),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Yn),j===0&&ne.generateMipmaps&&y.generateMipmap(ke),X.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?ae.setTextureCube(R,0):R.isData3DTexture?ae.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ae.setTexture2DArray(R,0):ae.setTexture2D(R,0),X.unbindTexture()},this.resetState=function(){A=0,T=0,b=null,X.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Tc?"display-p3":"srgb",n.unpackColorSpace=st.workingColorSpace===lo?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class mb extends rm{}mb.prototype.isWebGL1Renderer=!0;class _b extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class sm extends rs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vh=new xt,$l=new Vp,Sa=new co,Ea=new K;class gb extends Ft{constructor(e=new _i,n=new sm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(r),Sa.radius+=s,e.ray.intersectsSphere(Sa)===!1)return;vh.copy(r).invert(),$l.copy(e.ray).applyMatrix4(vh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),_=Math.min(c.count,a.start+a.count);for(let S=h,E=_;S<E;S++){const p=c.getX(S);Ea.fromBufferAttribute(f,p),xh(Ea,p,l,r,e,n,this)}}else{const h=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let S=h,E=_;S<E;S++)Ea.fromBufferAttribute(f,S),xh(Ea,S,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function xh(t,e,n,i,r,s,a){const o=$l.distanceSqToPoint(t);if(o<n){const l=new K;$l.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class am extends Jt{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yr extends rs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fp,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vb extends Yr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class om extends Ft{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const hl=new xt,Mh=new K,Sh=new K;class xb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bc,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Mh.setFromMatrixPosition(e.matrixWorld),n.position.copy(Mh),Sh.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Sh),n.updateMatrixWorld(),hl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Mb extends xb{constructor(){super(new Ac(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Eh extends om{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Mb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Sb extends om{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ec}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ec);function Eb(t){const e=new rm({canvas:t,antialias:!0,alpha:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setSize(t.clientWidth,t.clientHeight),e.toneMapping=Rp,e.toneMappingExposure=1.2,e.shadowMap.enabled=!0,e.shadowMap.type=Ap;const n=new _b;n.background=new Be("#1a1a2e");const i=16,r=t.clientWidth/t.clientHeight,s=new Ac(i*r/-2,i*r/2,i/2,i/-2,.1,100);s.position.set(0,14,3),s.lookAt(0,0,0);const a=new Ci;n.add(a);const o=new Sb("#667799",.45);a.add(o);const l=new Eh("#ffffff",2);l.position.set(15,20,10),l.castShadow=!0,l.shadow.mapSize.width=1024,l.shadow.mapSize.height=1024,l.shadow.camera.near=.5,l.shadow.camera.far=100,l.shadow.camera.left=-20,l.shadow.camera.right=20,l.shadow.camera.top=20,l.shadow.camera.bottom=-20,l.shadow.bias=-1e-4,a.add(l);const c=new Eh("#8899ff",.4);c.position.set(-5,3,-5),a.add(c);const u=new Ci;n.add(u);const f=new Ci;return n.add(f),n.add(s),{scene:n,camera:s,renderer:e,boardGroup:u,particleGroup:f,lightGroup:a}}function yb(t,e,n){t.renderer.setSize(e,n);const i=16,r=e/n;t.camera.left=i*r/-2,t.camera.right=i*r/2,t.camera.top=i/2,t.camera.bottom=i/-2,t.camera.updateProjectionMatrix()}const Tb={2:"#eee4da",4:"#ede0c8",8:"#f2b179",16:"#f59563"},bb={32:"#c0c0c0",64:"#cd7f32",128:"#ffd700",256:"#e5e4e2"},yh={512:"#5bc0de",1024:"#33b5e5",2048:"#9b59b6",4096:"#e74c3c"},Th={8192:"#1abc9c",16384:"#e67e22",32768:"#2ecc71",65536:"#c0392b"};function Ab(t){return t<=16?"matte":t<=256?"metal":t<=4096?"crystal":"energy"}function wb(t){switch(Ab(t)){case"matte":return new Yr({color:new Be(Tb[t]||"#f59563"),roughness:.9,metalness:.02});case"metal":return new Yr({color:new Be(bb[t]||"#e5e4e2"),roughness:.12,metalness:.95});case"crystal":return new vb({color:new Be(yh[t]||"#e74c3c"),roughness:.05,metalness:.1,clearcoat:.6,clearcoatRoughness:.1,emissive:new Be(yh[t]||"#e74c3c"),emissiveIntensity:.25,transparent:!0,opacity:.88});case"energy":return new Yr({color:new Be(Th[t]||"#ff6bff"),roughness:.03,metalness:.03,emissive:new Be(Th[t]||"#ff6bff"),emissiveIntensity:.9})}}const ws=new Map;function Rb(t,e=256){const n=`${t}_${e}`;if(ws.has(n)){const u=ws.get(n);return u.needsUpdate=!0,u}const i=document.createElement("canvas");i.width=e,i.height=e;const r=i.getContext("2d");r.clearRect(0,0,e,e);const s=t<1e3?e*.42:t<1e4?e*.32:t<1e5?e*.26:e*.2;r.font=`700 ${s}px 'Poppins', 'Segoe UI', sans-serif`,r.textAlign="center",r.textBaseline="middle";const a=e/2,o=e/2,l=t<=4?"rgba(180,160,140,0.4)":"rgba(255,255,255,0.5)";for(let u=4;u>=0;u--)r.shadowColor=l,r.shadowBlur=e*.04+u*e*.03,r.shadowOffsetX=0,r.shadowOffsetY=0,r.fillStyle=t<=4?"#776e65":"#ffffff",r.fillText(String(t),a,o);const c=new am(i);return c.minFilter=zt,c.magFilter=zt,c.colorSpace=En,c.needsUpdate=!0,ws.set(n,c),c}function Cb(t,e,n){const i=Rb(t),r=new mr(e*.85,n*.85),s=new uo({map:i,transparent:!0,depthTest:!1,depthWrite:!1,side:Gn}),a=new un(r,s);return a.renderOrder=999,a}function Lb(){for(const[t,e]of ws)e.dispose();ws.clear()}const rt={boxMeshes:new Map,textMeshes:new Map,floorMesh:null,gridCells:null,size:0},lm=.15,Pb=.2,Ib=12;function Rc(t){return Ib/t}function cm(t){return Rc(t)-lm}function um(t,e,n){const i=Rc(n),r=(n-1)*i/2,s=e*i-r,a=t*i-r;return[s,a]}function Nb(t){return Math.log2(t)*Pb}function Db(t,e){fm(),rt.size=e;const n=Rc(e),i=cm(e),r=e*n+lm,s=new mr(r,r),a=new Yr({color:"#1a1a3a",roughness:.8,metalness:.1}),o=new un(s,a);o.rotation.x=-Math.PI/2,o.position.y=-.08,o.receiveShadow=!0,t.add(o),rt.floorMesh=o;const l=new Ci;for(let c=0;c<e;c++)for(let u=0;u<e;u++){const[f,h]=um(c,u,e),_=new mr(i*.95,i*.95),S=new Yr({color:"#252540",roughness:.7,metalness:.05}),E=new un(_,S);E.rotation.x=-Math.PI/2,E.position.set(f,.01,h),E.receiveShadow=!0,l.add(E)}t.add(l),rt.gridCells=l}function bh(t,e,n){var r,s;rt.size!==n&&Db(t,n);const i=new Set(e.map(a=>a.id));for(const[a,o]of rt.boxMeshes)i.has(a)||((r=o.parent)==null||r.remove(o),o.geometry.dispose(),rt.boxMeshes.delete(a));for(const[a,o]of rt.textMeshes)i.has(a)||((s=o.parent)==null||s.remove(o),o.geometry.dispose(),rt.textMeshes.delete(a));for(const a of e){const[o,l]=um(a.row,a.col,n),c=cm(n),u=Nb(a.value),f=u/2;let h=rt.boxMeshes.get(a.id);if(h)h.geometry.dispose(),h.geometry=new pr(c*.92,u,c*.92);else{const S=new pr(c*.92,u,c*.92),E=wb(a.value);h=new un(S,E),h.castShadow=!0,h.receiveShadow=!0,t.add(h),rt.boxMeshes.set(a.id,h)}h.position.set(o,f,l),h.scale.set(1,1,1);let _=rt.textMeshes.get(a.id);_||(_=Cb(a.value,c*.92,c*.92),t.add(_),rt.textMeshes.set(a.id,_)),_.position.set(o,u+.02,l),_.rotation.x=-Math.PI/2}}function fm(t){var e,n,i,r;for(const s of rt.boxMeshes.values())(e=s.parent)==null||e.remove(s),s.geometry.dispose(),s.material.dispose();for(const s of rt.textMeshes.values()){(n=s.parent)==null||n.remove(s),s.geometry.dispose();const a=s.material;a.dispose();const o=a instanceof uo?a.map:null;o instanceof am&&o.dispose()}if(rt.floorMesh&&((i=rt.floorMesh.parent)==null||i.remove(rt.floorMesh),rt.floorMesh.geometry.dispose(),rt.floorMesh.material.dispose()),rt.gridCells){(r=rt.gridCells.parent)==null||r.remove(rt.gridCells);for(const s of[...rt.gridCells.children])s.geometry.dispose(),s.material.dispose()}rt.boxMeshes.clear(),rt.textMeshes.clear(),rt.floorMesh=null,rt.gridCells=null,rt.size=0,Lb()}let Pt={points:null,particles:[]};function Ub(t){Pt.points=null,Pt.particles=[]}function Ob(t,e,n,i,r,s){const a=Fb(r),o=Bb(r),l=Gb(r),c=kb(r);for(let u=0;u<a;u++){const f=Math.random()*Math.PI*2,h=Math.random()*Math.PI*.5,_=(.3+Math.random()*1.5)*s;Pt.particles.push({x:e+(Math.random()-.5)*.5,y:n+Math.random()*.3,z:i+(Math.random()-.5)*.5,vx:Math.cos(f)*Math.cos(h)*_,vy:Math.sin(h)*_*1.5,vz:Math.sin(f)*Math.cos(h)*_,life:o,maxLife:o,size:l*(.5+Math.random()*.5),color:c})}}function Fb(t){return t<=16?4+Math.floor(Math.random()*5):t<=128?8+Math.floor(Math.random()*8):t<=1024?15+Math.floor(Math.random()*11):t<=8192?25+Math.floor(Math.random()*16):40+Math.floor(Math.random()*41)}function Bb(t){return t<=16?.2+Math.random()*.2:t<=128?.4+Math.random()*.3:t<=1024?.6+Math.random()*.4:t<=8192?.9+Math.random()*.5:1.2+Math.random()*.6}function Gb(t){return t<=16?.02:t<=128?.04:t<=1024?.07:t<=8192?.12:.18}function kb(t){return{2:"#eee4da",4:"#ede0c8",8:"#f2b179",16:"#f59563",32:"#c0c0c0",64:"#b87333",128:"#ffd700",256:"#e5e4e2",512:"#5bc0de",1024:"#33b5e5",2048:"#9b59b6",4096:"#e74c3c",8192:"#00ffff",16384:"#ff00ff",32768:"#ffff00"}[t]||"#ffffff"}function Hb(t,e){Pt.points&&(t.remove(Pt.points),Pt.points.geometry.dispose(),Pt.points.material.dispose(),Pt.points=null);const n=Pt.particles.filter(l=>(l.life-=e,l.life<=0?!1:(l.x+=l.vx*e,l.y+=l.vy*e,l.z+=l.vz*e,l.vy-=2*e,!0)));if(Pt.particles=n,n.length===0)return;const i=new Float32Array(n.length*3),r=new Float32Array(n.length*3),s=new Float32Array(n.length);for(let l=0;l<n.length;l++){const c=n[l],u=1-c.life/c.maxLife;i[l*3]=c.x,i[l*3+1]=c.y,i[l*3+2]=c.z;const f=new Be(c.color);r[l*3]=f.r,r[l*3+1]=f.g,r[l*3+2]=f.b,s[l]=c.size*(1-u*.8)}const a=new _i;a.setAttribute("position",new fn(i,3)),a.setAttribute("color",new fn(r,3)),a.setAttribute("size",new fn(s,1));const o=new sm({size:.3,vertexColors:!0,blending:Ul,depthWrite:!1,transparent:!0,opacity:.8});Pt.points=new gb(a,o),t.add(Pt.points)}function zb(t){Pt.points&&(t.remove(Pt.points),Pt.points.geometry.dispose(),Pt.points.material.dispose(),Pt.points=null),Pt.particles=[]}let _s=null;function Yl(){return _s||(_s=new AudioContext),_s.state==="suspended"&&_s.resume(),_s}const Ah=[261.63,293.66,329.63,392,440,523.25,587.33,659.25,783.99,880,1046.5];function wh(t){return Ah[t%Ah.length]}function dl(t,e,n="sine",i=.15,r=0){const s=Yl(),a=s.createOscillator(),o=s.createGain();a.type=n,a.frequency.setValueAtTime(t,s.currentTime+r),o.gain.setValueAtTime(i,s.currentTime+r),o.gain.exponentialRampToValueAtTime(.001,s.currentTime+r+e),a.connect(o),o.connect(s.destination),a.start(s.currentTime+r),a.stop(s.currentTime+r+e)}function hm(){function t(s){const a=Math.min(Math.floor(Math.log2(s)),10),o=Math.min(Math.floor(Math.log2(s)/2),8);for(let l=0;l<o;l++){const c=wh(a+l);dl(c,.12,"triangle",.12,l*.04)}}function e(){const s=Yl(),a=s.createBufferSource(),o=s.createBuffer(1,s.sampleRate*.05,s.sampleRate),l=o.getChannelData(0);for(let f=0;f<l.length;f++)l[f]=(Math.random()*2-1)*.1*(1-f/l.length);a.buffer=o;const c=s.createGain();c.gain.setValueAtTime(.08,s.currentTime),c.gain.exponentialRampToValueAtTime(.001,s.currentTime+.05);const u=s.createBiquadFilter();u.type="highpass",u.frequency.setValueAtTime(800,s.currentTime),a.connect(u),u.connect(c),c.connect(s.destination),a.start(),a.stop(s.currentTime+.05)}function n(){const s=[523.25,659.25,783.99,1046.5];for(let a=0;a<4;a++)dl(s[a],.3,"triangle",.18,a*.15)}function i(){const s=Yl(),a=s.createOscillator(),o=s.createGain();a.type="sawtooth",a.frequency.setValueAtTime(200,s.currentTime),a.frequency.linearRampToValueAtTime(80,s.currentTime+.8),o.gain.setValueAtTime(.2,s.currentTime),o.gain.exponentialRampToValueAtTime(.001,s.currentTime+.8),a.connect(o),o.connect(s.destination),a.start(),a.stop(s.currentTime+.8)}function r(){for(let s=3;s>=0;s--){const a=wh(s);dl(a,.1,"sine",.08,(3-s)*.04)}}return{playMergeSound:t,playSlideSound:e,playExpandSound:n,playGameOverSound:i,playUndoSound:r}}const Vb=pi({__name:"GameCanvas",setup(t){const e=nn(null),n=nn(null),i=ao(),r=Sc(),s=hm();let a=null,o=0,l=0,c=1;function u(U){if(o=requestAnimationFrame(u),!a)return;const M=Math.min((U-l)/1e3,.1);l=U,Hb(a.particleGroup,M),a.renderer.render(a.scene,a.camera)}function f(U){const L={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",w:"up",s:"down",a:"left",d:"right"}[U.key];L&&(U.preventDefault(),h(L))}function h(U){var L;const M=i.move(U);if(M.moved){if(!r.settings.muted){if(s.playSlideSound(),M.mergeCount>0){let W=0;for(let ie=0;ie<i.state.gridSize;ie++)for(let F=0;F<i.state.gridSize;F++){const $=(L=i.state.grid[ie])==null?void 0:L[F];$!=null&&$.mergedFrom&&$.value>W&&(W=$.value)}W>0&&s.playMergeSound(W)}M.expanded&&s.playExpandSound()}M.mergeCount>0&&a&&S(),i.state.gameOver&&!r.settings.muted&&s.playGameOverSound()}}function _(U,M){const L=i.state.gridSize,W=12/L,ie=(L-1)*W/2;return[M*W-ie,U*W-ie]}function S(){var U;for(let M=0;M<i.state.gridSize;M++)for(let L=0;L<i.state.gridSize;L++){const W=(U=i.state.grid[M])==null?void 0:U[L];if(W!=null&&W.mergedFrom){const[ie,F]=_(M,L);Ob(a.particleGroup,ie,Math.log2(W.value)*.15,F,W.value,r.settings.effectIntensity)}}}let E=0,p=0,d=0;function C(U){U.touches.length===1&&(E=U.touches[0].clientX,p=U.touches[0].clientY,d=Date.now())}function v(U){U.touches.length===1&&U.preventDefault()}function x(U){if(U.touches.length!==0)return;const M=U.changedTouches[0].clientX-E,L=U.changedTouches[0].clientY-p;if(Date.now()-d>1e3||Math.abs(M)<20&&Math.abs(L)<20)return;const ie=Math.abs(M)>Math.abs(L)?M>0?"right":"left":L>0?"down":"up";h(ie)}function A(U){if(U.preventDefault(),!a)return;c=Math.max(.5,Math.min(3,c-U.deltaY*.002));const M=16/c,L=a.renderer.domElement.clientWidth/a.renderer.domElement.clientHeight;a.camera.left=M*L/-2,a.camera.right=M*L/2,a.camera.top=M/2,a.camera.bottom=M/-2,a.camera.updateProjectionMatrix()}function T(){if(!a||!n.value)return;const U=n.value.getBoundingClientRect();yb(a,U.width,U.height)}async function b(){if(await document.fonts.ready,!e.value||!n.value)return;const U=n.value.getBoundingClientRect();e.value.width=U.width,e.value.height=U.height,a=Eb(e.value),Ub(a.particleGroup),bh(a.boardGroup,i.tiles,i.state.gridSize),l=performance.now(),o=requestAnimationFrame(u),window.addEventListener("keydown",f),window.addEventListener("resize",T),e.value.addEventListener("wheel",A,{passive:!1}),n.value&&(n.value.addEventListener("touchstart",C,{passive:!1}),n.value.addEventListener("touchmove",v,{passive:!1}),n.value.addEventListener("touchend",x))}function D(){var U;cancelAnimationFrame(o),window.removeEventListener("keydown",f),window.removeEventListener("resize",T),(U=e.value)==null||U.removeEventListener("wheel",A),n.value&&(n.value.removeEventListener("touchstart",C),n.value.removeEventListener("touchmove",v),n.value.removeEventListener("touchend",x)),a&&(zb(a.particleGroup),fm(a.boardGroup),a.renderer.dispose())}return ci(()=>i.tiles,U=>{a&&bh(a.boardGroup,U,i.state.gridSize)},{deep:!0}),ci(()=>i.state.gameOver,U=>{U&&!r.settings.muted&&s.playGameOverSound()}),Ja(async()=>{i.init(),await b()}),ks(()=>{D()}),(U,M)=>(Pn(),di("div",{ref_key:"containerRef",ref:n,class:"canvas-container"},[Ne("canvas",{ref_key:"canvasRef",ref:e,class:"game-canvas"},null,512)],512))}}),$s=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},Wb=$s(Vb,[["__scopeId","data-v-6f6d38e4"]]),Xb={class:"score-board"},$b={class:"score-item"},Yb={class:"score-label"},qb={class:"score-value"},jb={class:"score-item"},Kb={class:"score-label"},Zb={class:"score-value"},Jb={key:0,class:"score-item"},Qb={class:"score-label"},eA={class:"score-value combo"},tA={class:"score-item"},nA={class:"score-label"},iA={class:"score-value"},rA=pi({__name:"ScoreBoard",setup(t){const e=ao(),{t:n}=gr();return(i,r)=>(Pn(),di("div",Xb,[Ne("div",$b,[Ne("span",Yb,St(nt(n)("score.current")),1),Ne("span",qb,St(nt(e).state.score),1)]),Ne("div",jb,[Ne("span",Kb,St(nt(n)("score.high")),1),Ne("span",Zb,St(nt(e).state.highScore),1)]),nt(e).state.comboCount>1?(Pn(),di("div",Jb,[Ne("span",Qb,St(nt(n)("score.combo")),1),Ne("span",eA,St(nt(n)("game.comboLabel",{count:nt(e).state.comboCount})),1)])):eo("",!0),Ne("div",tA,[Ne("span",nA,St(nt(n)("score.grid")),1),Ne("span",iA,St(nt(e).state.gridSize)+"×"+St(nt(e).state.gridSize),1)])]))}}),sA=$s(rA,[["__scopeId","data-v-a4fa208e"]]),aA={class:"controls"},oA=["disabled"],lA={class:"confirm-box"},cA=pi({__name:"Controls",setup(t){const e=ao(),n=Sc(),i=hm(),{t:r}=gr(),s=nn(!1);function a(){s.value=!0}function o(){e.newGame(),s.value=!1}function l(){s.value=!1}function c(){e.undo()&&!n.settings.muted&&i.playUndoSound()}return(u,f)=>(Pn(),di("div",aA,[Ne("button",{class:"btn",onClick:a},St(nt(r)("controls.newGame")),1),Ne("button",{class:"btn",onClick:c,disabled:nt(e).state.history.length===0},St(nt(r)("controls.undo")),9,oA),s.value?(Pn(),di("div",{key:0,class:"confirm-overlay",onClick:Gd(l,["self"])},[Ne("div",lA,[Ne("p",null,St(nt(r)("controls.confirmNewGame")),1),Ne("button",{class:"btn btn-danger",onClick:o},St(nt(r)("controls.newGame")),1),Ne("button",{class:"btn",onClick:l},St(nt(r)("settings.close")),1)])])):eo("",!0)]))}}),uA=$s(cA,[["__scopeId","data-v-64967c8c"]]),fA={class:"settings-wrapper"},hA={class:"settings-box"},dA={class:"setting-row"},pA=["value"],mA={class:"setting-row"},_A=["checked"],gA={class:"setting-row"},vA=["value"],xA=pi({__name:"SettingsPanel",setup(t){const e=Sc(),{t:n,locale:i}=gr(),r=nn(!1);function s(){r.value=!r.value}function a(o){e.setLocale(o),i.value=o}return(o,l)=>(Pn(),di("div",fA,[Ne("button",{class:"btn-settings",onClick:s},St(nt(n)("controls.settings")),1),r.value?(Pn(),di("div",{key:0,class:"settings-panel",onClick:l[4]||(l[4]=Gd(c=>r.value=!1,["self"]))},[Ne("div",hA,[Ne("h3",null,St(nt(n)("settings.title")),1),Ne("label",dA,[Ne("span",null,St(nt(n)("settings.effectIntensity")),1),Ne("input",{type:"range",min:"0",max:"1",step:"0.1",value:nt(e).settings.effectIntensity,onInput:l[0]||(l[0]=c=>nt(e).setEffectIntensity(Number(c.target.value)))},null,40,pA)]),Ne("label",mA,[Ne("span",null,St(nt(n)("settings.muted")),1),Ne("input",{type:"checkbox",checked:nt(e).settings.muted,onChange:l[1]||(l[1]=c=>nt(e).toggleMuted())},null,40,_A)]),Ne("div",gA,[Ne("span",null,St(nt(n)("settings.language")),1),Ne("select",{value:nt(e).settings.locale,onChange:l[2]||(l[2]=c=>a(c.target.value))},[...l[5]||(l[5]=[Ne("option",{value:"zh-CN"},"中文",-1),Ne("option",{value:"en-US"},"English",-1)])],40,vA)]),Ne("button",{class:"btn",onClick:l[3]||(l[3]=c=>r.value=!1)},St(nt(n)("settings.close")),1)])])):eo("",!0)]))}}),MA=$s(xA,[["__scopeId","data-v-77e02319"]]),SA={class:"debug-panel"},EA=pi({__name:"DebugPanel",setup(t){const e=ao();function n(){var c;const o=[2,4,8,16,32,64,128,256,512,1024];let l=0;for(let u=0;u<e.state.gridSize;u++)for(let f=0;f<e.state.gridSize;f++){const h=(c=e.state.grid[u])==null?void 0:c[f];h&&h.id>l&&(l=h.id)}for(let u=0;u<e.state.gridSize;u++)for(let f=0;f<e.state.gridSize;f++)e.state.grid[u][f]||(e.state.grid[u][f]={id:++l,value:o[Math.floor(Math.random()*o.length)],row:u,col:f})}function i(){const o=e.state.gridSize,l=o+1,c=Array.from({length:l},(u,f)=>Array.from({length:l},(h,_)=>{var S;return f<o&&_<o&&((S=e.state.grid[f])!=null&&S[_])?{...e.state.grid[f][_],row:f,col:_}:null}));e.state.gridSize=l,e.state.grid=c}function r(){localStorage.removeItem("infini2048_save"),localStorage.removeItem("infini2048_highScore")}function s(){e.newGame();const o=[[1024,1024,512,512],[256,256,128,64],[32,16,8,4],[2,0,0,0]];let l=0;for(let c=0;c<4;c++)for(let u=0;u<4;u++)o[c][u]&&(e.state.grid[c][u]={id:++l,value:o[c][u],row:c,col:u})}function a(){e.newGame();const o=[[0,0,2],[0,1,8],[0,2,64],[0,3,256],[1,0,512],[1,1,1024],[1,2,2048],[1,3,8192],[2,0,16384],[2,1,32768],[2,2,16],[2,3,128]];let l=0;for(const[c,u,f]of o)e.state.grid[c][u]={id:++l,value:f,row:c,col:u}}return(o,l)=>(Pn(),di("div",SA,[Ne("div",{class:"debug-grid"},[Ne("div",{class:"debug-section"},[l[0]||(l[0]=Ne("h4",null,"快捷操作",-1)),Ne("button",{onClick:n},"随机填充空位"),Ne("button",{onClick:i},"强制扩棋盘"),Ne("button",{onClick:r,class:"danger"},"清空存档")]),Ne("div",{class:"debug-section"},[l[1]||(l[1]=Ne("h4",null,"预设布局",-1)),Ne("button",{onClick:s},"合并演示"),Ne("button",{onClick:a},"全材质展示")])])]))}}),yA=$s(EA,[["__scopeId","data-v-ebb732c8"]]),TA={class:"app-container"},bA={class:"game-header"},AA={class:"game-main"},wA={class:"game-footer"},RA=pi({__name:"App",setup(t){const{t:e}=gr(),n=nn(!1);function i(r){(r.key==="`"||r.key==="~")&&(r.preventDefault(),n.value=!n.value)}return Ja(()=>window.addEventListener("keydown",i)),ks(()=>window.removeEventListener("keydown",i)),(r,s)=>(Pn(),di("div",TA,[Ne("header",bA,[s[0]||(s[0]=Ne("h1",{class:"game-title"},"Infini-2048",-1)),It(sA)]),Ne("main",AA,[It(Wb)]),Ne("footer",wA,[It(uA),It(MA),n.value?(Pn(),Nd(yA,{key:0})):eo("",!0)])]))}}),CA={score:{current:"分数",high:"最高分",combo:"连击",grid:"网格"},controls:{newGame:"新游戏",undo:"撤销",settings:"设置",hint:"方向键移动 | 滚轮缩放",confirmNewGame:"确定要开始新游戏吗？"},settings:{title:"设置",effectIntensity:"特效强度",muted:"静音",language:"语言",close:"关闭"},game:{gameOver:"游戏结束",comboLabel:"连击 ×{count}"}},LA={score:{current:"Score",high:"Best",combo:"Combo",grid:"Grid"},controls:{newGame:"New Game",undo:"Undo",settings:"Settings",hint:"Arrow keys to move | Scroll to zoom",confirmNewGame:"Start a new game?"},settings:{title:"Settings",effectIntensity:"Effect Intensity",muted:"Mute",language:"Language",close:"Close"},game:{gameOver:"Game Over",comboLabel:"Combo ×{count}"}},PA=Y0({legacy:!1,locale:navigator.language.startsWith("zh")?"zh-CN":"en-US",fallbackLocale:"zh-CN",messages:{"zh-CN":CA,"en-US":LA}}),Cc=Hg(RA);Cc.use(Wg());Cc.use(PA);Cc.mount("#app");
