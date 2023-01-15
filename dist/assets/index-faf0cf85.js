(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function GC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var hc={},HC={get exports(){return hc},set exports(t){hc=t}},fh={},xe={},KC={get exports(){return xe},set exports(t){xe=t}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pu=Symbol.for("react.element"),QC=Symbol.for("react.portal"),YC=Symbol.for("react.fragment"),XC=Symbol.for("react.strict_mode"),JC=Symbol.for("react.profiler"),ZC=Symbol.for("react.provider"),eA=Symbol.for("react.context"),tA=Symbol.for("react.forward_ref"),nA=Symbol.for("react.suspense"),rA=Symbol.for("react.memo"),iA=Symbol.for("react.lazy"),Av=Symbol.iterator;function sA(t){return t===null||typeof t!="object"?null:(t=Av&&t[Av]||t["@@iterator"],typeof t=="function"?t:null)}var q1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W1=Object.assign,G1={};function xo(t,e,n){this.props=t,this.context=e,this.refs=G1,this.updater=n||q1}xo.prototype.isReactComponent={};xo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function H1(){}H1.prototype=xo.prototype;function $m(t,e,n){this.props=t,this.context=e,this.refs=G1,this.updater=n||q1}var Mm=$m.prototype=new H1;Mm.constructor=$m;W1(Mm,xo.prototype);Mm.isPureReactComponent=!0;var bv=Array.isArray,K1=Object.prototype.hasOwnProperty,Fm={current:null},Q1={key:!0,ref:!0,__self:!0,__source:!0};function Y1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)K1.call(e,r)&&!Q1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Pu,type:t,key:s,ref:o,props:i,_owner:Fm.current}}function oA(t,e){return{$$typeof:Pu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Um(t){return typeof t=="object"&&t!==null&&t.$$typeof===Pu}function aA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xv=/\/+/g;function Hd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?aA(""+t.key):e.toString(36)}function zl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Pu:case QC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Hd(o,0):r,bv(i)?(n="",t!=null&&(n=t.replace(xv,"$&/")+"/"),zl(i,e,n,"",function(l){return l})):i!=null&&(Um(i)&&(i=oA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(xv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",bv(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Hd(s,a);o+=zl(s,e,n,u,i)}else if(u=sA(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Hd(s,a++),o+=zl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function hl(t,e,n){if(t==null)return t;var r=[],i=0;return zl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function uA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var jt={current:null},jl={transition:null},lA={ReactCurrentDispatcher:jt,ReactCurrentBatchConfig:jl,ReactCurrentOwner:Fm};re.Children={map:hl,forEach:function(t,e,n){hl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return hl(t,function(){e++}),e},toArray:function(t){return hl(t,function(e){return e})||[]},only:function(t){if(!Um(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=xo;re.Fragment=YC;re.Profiler=JC;re.PureComponent=$m;re.StrictMode=XC;re.Suspense=nA;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lA;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=W1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Fm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)K1.call(e,u)&&!Q1.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:Pu,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:eA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ZC,_context:t},t.Consumer=t};re.createElement=Y1;re.createFactory=function(t){var e=Y1.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:tA,render:t}};re.isValidElement=Um;re.lazy=function(t){return{$$typeof:iA,_payload:{_status:-1,_result:t},_init:uA}};re.memo=function(t,e){return{$$typeof:rA,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=jl.transition;jl.transition={};try{t()}finally{jl.transition=e}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(t,e){return jt.current.useCallback(t,e)};re.useContext=function(t){return jt.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return jt.current.useDeferredValue(t)};re.useEffect=function(t,e){return jt.current.useEffect(t,e)};re.useId=function(){return jt.current.useId()};re.useImperativeHandle=function(t,e,n){return jt.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return jt.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return jt.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return jt.current.useMemo(t,e)};re.useReducer=function(t,e,n){return jt.current.useReducer(t,e,n)};re.useRef=function(t){return jt.current.useRef(t)};re.useState=function(t){return jt.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return jt.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return jt.current.useTransition()};re.version="18.2.0";(function(t){t.exports=re})(KC);const ph=GC(xe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cA=xe,hA=Symbol.for("react.element"),dA=Symbol.for("react.fragment"),fA=Object.prototype.hasOwnProperty,pA=cA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mA={key:!0,ref:!0,__self:!0,__source:!0};function X1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)fA.call(e,r)&&!mA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:hA,type:t,key:s,ref:o,props:i,_owner:pA.current}}fh.Fragment=dA;fh.jsx=X1;fh.jsxs=X1;(function(t){t.exports=fh})(HC);const H=hc.jsx,it=hc.jsxs;var Gf={},Hf={},gA={get exports(){return Hf},set exports(t){Hf=t}},fn={},Kf={},yA={get exports(){return Kf},set exports(t){Kf=t}},J1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,W){var K=R.length;R.push(W);e:for(;0<K;){var we=K-1>>>1,O=R[we];if(0<i(O,W))R[we]=W,R[K]=O,K=we;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var W=R[0],K=R.pop();if(K!==W){R[0]=K;e:for(var we=0,O=R.length,M=O>>>1;we<M;){var U=2*(we+1)-1,Q=R[U],I=U+1,ie=R[I];if(0>i(Q,K))I<O&&0>i(ie,Q)?(R[we]=ie,R[I]=K,we=I):(R[we]=Q,R[U]=K,we=U);else if(I<O&&0>i(ie,K))R[we]=ie,R[I]=K,we=I;else break e}}return W}function i(R,W){var K=R.sortIndex-W.sortIndex;return K!==0?K:R.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],l=[],c=1,h=null,d=3,p=!1,y=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var W=n(l);W!==null;){if(W.callback===null)r(l);else if(W.startTime<=R)r(l),W.sortIndex=W.expirationTime,e(u,W);else break;W=n(l)}}function _(R){if(v=!1,g(R),!y)if(n(u)!==null)y=!0,nr(T);else{var W=n(l);W!==null&&Lt(_,W.startTime-R)}}function T(R,W){y=!1,v&&(v=!1,m($),$=-1),p=!0;var K=d;try{for(g(W),h=n(u);h!==null&&(!(h.expirationTime>W)||R&&!et());){var we=h.callback;if(typeof we=="function"){h.callback=null,d=h.priorityLevel;var O=we(h.expirationTime<=W);W=t.unstable_now(),typeof O=="function"?h.callback=O:h===n(u)&&r(u),g(W)}else r(u);h=n(u)}if(h!==null)var M=!0;else{var U=n(l);U!==null&&Lt(_,U.startTime-W),M=!1}return M}finally{h=null,d=K,p=!1}}var b=!1,N=null,$=-1,te=5,G=-1;function et(){return!(t.unstable_now()-G<te)}function Ke(){if(N!==null){var R=t.unstable_now();G=R;var W=!0;try{W=N(!0,R)}finally{W?ft():(b=!1,N=null)}}else b=!1}var ft;if(typeof f=="function")ft=function(){f(Ke)};else if(typeof MessageChannel<"u"){var nn=new MessageChannel,At=nn.port2;nn.port1.onmessage=Ke,ft=function(){At.postMessage(null)}}else ft=function(){S(Ke,0)};function nr(R){N=R,b||(b=!0,ft())}function Lt(R,W){$=S(function(){R(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,nr(T))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(R){switch(d){case 1:case 2:case 3:var W=3;break;default:W=d}var K=d;d=W;try{return R()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,W){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var K=d;d=R;try{return W()}finally{d=K}},t.unstable_scheduleCallback=function(R,W,K){var we=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?we+K:we):K=we,R){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=K+O,R={id:c++,callback:W,priorityLevel:R,startTime:K,expirationTime:O,sortIndex:-1},K>we?(R.sortIndex=K,e(l,R),n(u)===null&&R===n(l)&&(v?(m($),$=-1):v=!0,Lt(_,K-we))):(R.sortIndex=O,e(u,R),y||p||(y=!0,nr(T))),R},t.unstable_shouldYield=et,t.unstable_wrapCallback=function(R){var W=d;return function(){var K=d;d=W;try{return R.apply(this,arguments)}finally{d=K}}}})(J1);(function(t){t.exports=J1})(yA);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z1=xe,cn=Kf;function A(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var eI=new Set,ja={};function fs(t,e){ro(t,e),ro(t+"Capture",e)}function ro(t,e){for(ja[t]=e,t=0;t<e.length;t++)eI.add(e[t])}var pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qf=Object.prototype.hasOwnProperty,vA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nv={},Dv={};function wA(t){return Qf.call(Dv,t)?!0:Qf.call(Nv,t)?!1:vA.test(t)?Dv[t]=!0:(Nv[t]=!0,!1)}function IA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _A(t,e,n,r){if(e===null||typeof e>"u"||IA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var St={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){St[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];St[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){St[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){St[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){St[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){St[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){St[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){St[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){St[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Vm=/[\-:]([a-z])/g;function Bm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Vm,Bm);St[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Vm,Bm);St[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Vm,Bm);St[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){St[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});St.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){St[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function zm(t,e,n,r){var i=St.hasOwnProperty(e)?St[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(_A(e,n,i,r)&&(n=null),r||i===null?wA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var _r=Z1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,dl=Symbol.for("react.element"),Ds=Symbol.for("react.portal"),Rs=Symbol.for("react.fragment"),jm=Symbol.for("react.strict_mode"),Yf=Symbol.for("react.profiler"),tI=Symbol.for("react.provider"),nI=Symbol.for("react.context"),qm=Symbol.for("react.forward_ref"),Xf=Symbol.for("react.suspense"),Jf=Symbol.for("react.suspense_list"),Wm=Symbol.for("react.memo"),Pr=Symbol.for("react.lazy"),rI=Symbol.for("react.offscreen"),Rv=Symbol.iterator;function Qo(t){return t===null||typeof t!="object"?null:(t=Rv&&t[Rv]||t["@@iterator"],typeof t=="function"?t:null)}var Re=Object.assign,Kd;function fa(t){if(Kd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Kd=e&&e[1]||""}return`
`+Kd+t}var Qd=!1;function Yd(t,e){if(!t||Qd)return"";Qd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){r=l}t.call(e.prototype)}else{try{throw Error()}catch(l){r=l}t()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Qd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?fa(t):""}function EA(t){switch(t.tag){case 5:return fa(t.type);case 16:return fa("Lazy");case 13:return fa("Suspense");case 19:return fa("SuspenseList");case 0:case 2:case 15:return t=Yd(t.type,!1),t;case 11:return t=Yd(t.type.render,!1),t;case 1:return t=Yd(t.type,!0),t;default:return""}}function Zf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Rs:return"Fragment";case Ds:return"Portal";case Yf:return"Profiler";case jm:return"StrictMode";case Xf:return"Suspense";case Jf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case nI:return(t.displayName||"Context")+".Consumer";case tI:return(t._context.displayName||"Context")+".Provider";case qm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Wm:return e=t.displayName||null,e!==null?e:Zf(t.type)||"Memo";case Pr:e=t._payload,t=t._init;try{return Zf(t(e))}catch{}}return null}function SA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zf(e);case 8:return e===jm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ei(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function iI(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function TA(t){var e=iI(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function fl(t){t._valueTracker||(t._valueTracker=TA(t))}function sI(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=iI(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function dc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ep(t,e){var n=e.checked;return Re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Pv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ei(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function oI(t,e){e=e.checked,e!=null&&zm(t,"checked",e,!1)}function tp(t,e){oI(t,e);var n=ei(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?np(t,e.type,n):e.hasOwnProperty("defaultValue")&&np(t,e.type,ei(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ov(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function np(t,e,n){(e!=="number"||dc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var pa=Array.isArray;function Gs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ei(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function rp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(A(91));return Re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Lv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(A(92));if(pa(n)){if(1<n.length)throw Error(A(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ei(n)}}function aI(t,e){var n=ei(e.value),r=ei(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function $v(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function uI(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ip(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?uI(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var pl,lI=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(pl=pl||document.createElement("div"),pl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=pl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Sa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kA=["Webkit","ms","Moz","O"];Object.keys(Sa).forEach(function(t){kA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Sa[e]=Sa[t]})});function cI(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Sa.hasOwnProperty(t)&&Sa[t]?(""+e).trim():e+"px"}function hI(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=cI(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var CA=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sp(t,e){if(e){if(CA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(A(62))}}function op(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ap=null;function Gm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var up=null,Hs=null,Ks=null;function Mv(t){if(t=$u(t)){if(typeof up!="function")throw Error(A(280));var e=t.stateNode;e&&(e=wh(e),up(t.stateNode,t.type,e))}}function dI(t){Hs?Ks?Ks.push(t):Ks=[t]:Hs=t}function fI(){if(Hs){var t=Hs,e=Ks;if(Ks=Hs=null,Mv(t),e)for(t=0;t<e.length;t++)Mv(e[t])}}function pI(t,e){return t(e)}function mI(){}var Xd=!1;function gI(t,e,n){if(Xd)return t(e,n);Xd=!0;try{return pI(t,e,n)}finally{Xd=!1,(Hs!==null||Ks!==null)&&(mI(),fI())}}function Wa(t,e){var n=t.stateNode;if(n===null)return null;var r=wh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(A(231,e,typeof n));return n}var lp=!1;if(pr)try{var Yo={};Object.defineProperty(Yo,"passive",{get:function(){lp=!0}}),window.addEventListener("test",Yo,Yo),window.removeEventListener("test",Yo,Yo)}catch{lp=!1}function AA(t,e,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(c){this.onError(c)}}var Ta=!1,fc=null,pc=!1,cp=null,bA={onError:function(t){Ta=!0,fc=t}};function xA(t,e,n,r,i,s,o,a,u){Ta=!1,fc=null,AA.apply(bA,arguments)}function NA(t,e,n,r,i,s,o,a,u){if(xA.apply(this,arguments),Ta){if(Ta){var l=fc;Ta=!1,fc=null}else throw Error(A(198));pc||(pc=!0,cp=l)}}function ps(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function yI(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fv(t){if(ps(t)!==t)throw Error(A(188))}function DA(t){var e=t.alternate;if(!e){if(e=ps(t),e===null)throw Error(A(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Fv(i),t;if(s===r)return Fv(i),e;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?t:e}function vI(t){return t=DA(t),t!==null?wI(t):null}function wI(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=wI(t);if(e!==null)return e;t=t.sibling}return null}var II=cn.unstable_scheduleCallback,Uv=cn.unstable_cancelCallback,RA=cn.unstable_shouldYield,PA=cn.unstable_requestPaint,ze=cn.unstable_now,OA=cn.unstable_getCurrentPriorityLevel,Hm=cn.unstable_ImmediatePriority,_I=cn.unstable_UserBlockingPriority,mc=cn.unstable_NormalPriority,LA=cn.unstable_LowPriority,EI=cn.unstable_IdlePriority,mh=null,Gn=null;function $A(t){if(Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(mh,t,void 0,(t.current.flags&128)===128)}catch{}}var Dn=Math.clz32?Math.clz32:UA,MA=Math.log,FA=Math.LN2;function UA(t){return t>>>=0,t===0?32:31-(MA(t)/FA|0)|0}var ml=64,gl=4194304;function ma(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ma(a):(s&=o,s!==0&&(r=ma(s)))}else o=n&~i,o!==0?r=ma(o):s!==0&&(r=ma(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Dn(e),i=1<<n,r|=t[n],e&=~i;return r}function VA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function BA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Dn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=VA(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function hp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function SI(){var t=ml;return ml<<=1,!(ml&4194240)&&(ml=64),t}function Jd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ou(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Dn(e),t[e]=n}function zA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Dn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Km(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Dn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var me=0;function TI(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var kI,Qm,CI,AI,bI,dp=!1,yl=[],jr=null,qr=null,Wr=null,Ga=new Map,Ha=new Map,Lr=[],jA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vv(t,e){switch(t){case"focusin":case"focusout":jr=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":Wr=null;break;case"pointerover":case"pointerout":Ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ha.delete(e.pointerId)}}function Xo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=$u(e),e!==null&&Qm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function qA(t,e,n,r,i){switch(e){case"focusin":return jr=Xo(jr,t,e,n,r,i),!0;case"dragenter":return qr=Xo(qr,t,e,n,r,i),!0;case"mouseover":return Wr=Xo(Wr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ga.set(s,Xo(Ga.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ha.set(s,Xo(Ha.get(s)||null,t,e,n,r,i)),!0}return!1}function xI(t){var e=Oi(t.target);if(e!==null){var n=ps(e);if(n!==null){if(e=n.tag,e===13){if(e=yI(n),e!==null){t.blockedOn=e,bI(t.priority,function(){CI(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ql(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=fp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ap=r,n.target.dispatchEvent(r),ap=null}else return e=$u(n),e!==null&&Qm(e),t.blockedOn=n,!1;e.shift()}return!0}function Bv(t,e,n){ql(t)&&n.delete(e)}function WA(){dp=!1,jr!==null&&ql(jr)&&(jr=null),qr!==null&&ql(qr)&&(qr=null),Wr!==null&&ql(Wr)&&(Wr=null),Ga.forEach(Bv),Ha.forEach(Bv)}function Jo(t,e){t.blockedOn===e&&(t.blockedOn=null,dp||(dp=!0,cn.unstable_scheduleCallback(cn.unstable_NormalPriority,WA)))}function Ka(t){function e(i){return Jo(i,t)}if(0<yl.length){Jo(yl[0],t);for(var n=1;n<yl.length;n++){var r=yl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(jr!==null&&Jo(jr,t),qr!==null&&Jo(qr,t),Wr!==null&&Jo(Wr,t),Ga.forEach(e),Ha.forEach(e),n=0;n<Lr.length;n++)r=Lr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Lr.length&&(n=Lr[0],n.blockedOn===null);)xI(n),n.blockedOn===null&&Lr.shift()}var Qs=_r.ReactCurrentBatchConfig,yc=!0;function GA(t,e,n,r){var i=me,s=Qs.transition;Qs.transition=null;try{me=1,Ym(t,e,n,r)}finally{me=i,Qs.transition=s}}function HA(t,e,n,r){var i=me,s=Qs.transition;Qs.transition=null;try{me=4,Ym(t,e,n,r)}finally{me=i,Qs.transition=s}}function Ym(t,e,n,r){if(yc){var i=fp(t,e,n,r);if(i===null)lf(t,e,r,vc,n),Vv(t,r);else if(qA(i,t,e,n,r))r.stopPropagation();else if(Vv(t,r),e&4&&-1<jA.indexOf(t)){for(;i!==null;){var s=$u(i);if(s!==null&&kI(s),s=fp(t,e,n,r),s===null&&lf(t,e,r,vc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else lf(t,e,r,null,n)}}var vc=null;function fp(t,e,n,r){if(vc=null,t=Gm(r),t=Oi(t),t!==null)if(e=ps(t),e===null)t=null;else if(n=e.tag,n===13){if(t=yI(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vc=t,null}function NI(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(OA()){case Hm:return 1;case _I:return 4;case mc:case LA:return 16;case EI:return 536870912;default:return 16}default:return 16}}var Ur=null,Xm=null,Wl=null;function DI(){if(Wl)return Wl;var t,e=Xm,n=e.length,r,i="value"in Ur?Ur.value:Ur.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Wl=i.slice(t,1<r?1-r:void 0)}function Gl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function zv(){return!1}function pn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?vl:zv,this.isPropagationStopped=zv,this}return Re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),e}var No={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jm=pn(No),Lu=Re({},No,{view:0,detail:0}),KA=pn(Lu),Zd,ef,Zo,gh=Re({},Lu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zo&&(Zo&&t.type==="mousemove"?(Zd=t.screenX-Zo.screenX,ef=t.screenY-Zo.screenY):ef=Zd=0,Zo=t),Zd)},movementY:function(t){return"movementY"in t?t.movementY:ef}}),jv=pn(gh),QA=Re({},gh,{dataTransfer:0}),YA=pn(QA),XA=Re({},Lu,{relatedTarget:0}),tf=pn(XA),JA=Re({},No,{animationName:0,elapsedTime:0,pseudoElement:0}),ZA=pn(JA),eb=Re({},No,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tb=pn(eb),nb=Re({},No,{data:0}),qv=pn(nb),rb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ib={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ob(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sb[t])?!!e[t]:!1}function Zm(){return ob}var ab=Re({},Lu,{key:function(t){if(t.key){var e=rb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ib[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zm,charCode:function(t){return t.type==="keypress"?Gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ub=pn(ab),lb=Re({},gh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wv=pn(lb),cb=Re({},Lu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zm}),hb=pn(cb),db=Re({},No,{propertyName:0,elapsedTime:0,pseudoElement:0}),fb=pn(db),pb=Re({},gh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mb=pn(pb),gb=[9,13,27,32],eg=pr&&"CompositionEvent"in window,ka=null;pr&&"documentMode"in document&&(ka=document.documentMode);var yb=pr&&"TextEvent"in window&&!ka,RI=pr&&(!eg||ka&&8<ka&&11>=ka),Gv=String.fromCharCode(32),Hv=!1;function PI(t,e){switch(t){case"keyup":return gb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function OI(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ps=!1;function vb(t,e){switch(t){case"compositionend":return OI(e);case"keypress":return e.which!==32?null:(Hv=!0,Gv);case"textInput":return t=e.data,t===Gv&&Hv?null:t;default:return null}}function wb(t,e){if(Ps)return t==="compositionend"||!eg&&PI(t,e)?(t=DI(),Wl=Xm=Ur=null,Ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return RI&&e.locale!=="ko"?null:e.data;default:return null}}var Ib={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ib[t.type]:e==="textarea"}function LI(t,e,n,r){dI(r),e=wc(e,"onChange"),0<e.length&&(n=new Jm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ca=null,Qa=null;function _b(t){GI(t,0)}function yh(t){var e=$s(t);if(sI(e))return t}function Eb(t,e){if(t==="change")return e}var $I=!1;if(pr){var nf;if(pr){var rf="oninput"in document;if(!rf){var Qv=document.createElement("div");Qv.setAttribute("oninput","return;"),rf=typeof Qv.oninput=="function"}nf=rf}else nf=!1;$I=nf&&(!document.documentMode||9<document.documentMode)}function Yv(){Ca&&(Ca.detachEvent("onpropertychange",MI),Qa=Ca=null)}function MI(t){if(t.propertyName==="value"&&yh(Qa)){var e=[];LI(e,Qa,t,Gm(t)),gI(_b,e)}}function Sb(t,e,n){t==="focusin"?(Yv(),Ca=e,Qa=n,Ca.attachEvent("onpropertychange",MI)):t==="focusout"&&Yv()}function Tb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yh(Qa)}function kb(t,e){if(t==="click")return yh(e)}function Cb(t,e){if(t==="input"||t==="change")return yh(e)}function Ab(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pn=typeof Object.is=="function"?Object.is:Ab;function Ya(t,e){if(Pn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Qf.call(e,i)||!Pn(t[i],e[i]))return!1}return!0}function Xv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jv(t,e){var n=Xv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xv(n)}}function FI(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?FI(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function UI(){for(var t=window,e=dc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dc(t.document)}return e}function tg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function bb(t){var e=UI(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&FI(n.ownerDocument.documentElement,n)){if(r!==null&&tg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Jv(n,s);var o=Jv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var xb=pr&&"documentMode"in document&&11>=document.documentMode,Os=null,pp=null,Aa=null,mp=!1;function Zv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mp||Os==null||Os!==dc(r)||(r=Os,"selectionStart"in r&&tg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Aa&&Ya(Aa,r)||(Aa=r,r=wc(pp,"onSelect"),0<r.length&&(e=new Jm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Os)))}function wl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ls={animationend:wl("Animation","AnimationEnd"),animationiteration:wl("Animation","AnimationIteration"),animationstart:wl("Animation","AnimationStart"),transitionend:wl("Transition","TransitionEnd")},sf={},VI={};pr&&(VI=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function vh(t){if(sf[t])return sf[t];if(!Ls[t])return t;var e=Ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in VI)return sf[t]=e[n];return t}var BI=vh("animationend"),zI=vh("animationiteration"),jI=vh("animationstart"),qI=vh("transitionend"),WI=new Map,ew="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pi(t,e){WI.set(t,e),fs(e,[t])}for(var of=0;of<ew.length;of++){var af=ew[of],Nb=af.toLowerCase(),Db=af[0].toUpperCase()+af.slice(1);pi(Nb,"on"+Db)}pi(BI,"onAnimationEnd");pi(zI,"onAnimationIteration");pi(jI,"onAnimationStart");pi("dblclick","onDoubleClick");pi("focusin","onFocus");pi("focusout","onBlur");pi(qI,"onTransitionEnd");ro("onMouseEnter",["mouseout","mouseover"]);ro("onMouseLeave",["mouseout","mouseover"]);ro("onPointerEnter",["pointerout","pointerover"]);ro("onPointerLeave",["pointerout","pointerover"]);fs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fs("onBeforeInput",["compositionend","keypress","textInput","paste"]);fs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rb=new Set("cancel close invalid load scroll toggle".split(" ").concat(ga));function tw(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,NA(r,e,void 0,t),t.currentTarget=null}function GI(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;tw(i,a,l),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,l=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;tw(i,a,l),s=u}}}if(pc)throw t=cp,pc=!1,cp=null,t}function _e(t,e){var n=e[Ip];n===void 0&&(n=e[Ip]=new Set);var r=t+"__bubble";n.has(r)||(HI(e,t,2,!1),n.add(r))}function uf(t,e,n){var r=0;e&&(r|=4),HI(n,t,r,e)}var Il="_reactListening"+Math.random().toString(36).slice(2);function Xa(t){if(!t[Il]){t[Il]=!0,eI.forEach(function(n){n!=="selectionchange"&&(Rb.has(n)||uf(n,!1,t),uf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Il]||(e[Il]=!0,uf("selectionchange",!1,e))}}function HI(t,e,n,r){switch(NI(e)){case 1:var i=GA;break;case 4:i=HA;break;default:i=Ym}n=i.bind(null,e,n,t),i=void 0,!lp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function lf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Oi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}gI(function(){var l=s,c=Gm(n),h=[];e:{var d=WI.get(t);if(d!==void 0){var p=Jm,y=t;switch(t){case"keypress":if(Gl(n)===0)break e;case"keydown":case"keyup":p=ub;break;case"focusin":y="focus",p=tf;break;case"focusout":y="blur",p=tf;break;case"beforeblur":case"afterblur":p=tf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=jv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=YA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=hb;break;case BI:case zI:case jI:p=ZA;break;case qI:p=fb;break;case"scroll":p=KA;break;case"wheel":p=mb;break;case"copy":case"cut":case"paste":p=tb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Wv}var v=(e&4)!==0,S=!v&&t==="scroll",m=v?d!==null?d+"Capture":null:d;v=[];for(var f=l,g;f!==null;){g=f;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,m!==null&&(_=Wa(f,m),_!=null&&v.push(Ja(f,_,g)))),S)break;f=f.return}0<v.length&&(d=new p(d,y,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==ap&&(y=n.relatedTarget||n.fromElement)&&(Oi(y)||y[mr]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=l,y=y?Oi(y):null,y!==null&&(S=ps(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=l),p!==y)){if(v=jv,_="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Wv,_="onPointerLeave",m="onPointerEnter",f="pointer"),S=p==null?d:$s(p),g=y==null?d:$s(y),d=new v(_,f+"leave",p,n,c),d.target=S,d.relatedTarget=g,_=null,Oi(c)===l&&(v=new v(m,f+"enter",y,n,c),v.target=g,v.relatedTarget=S,_=v),S=_,p&&y)t:{for(v=p,m=y,f=0,g=v;g;g=Ts(g))f++;for(g=0,_=m;_;_=Ts(_))g++;for(;0<f-g;)v=Ts(v),f--;for(;0<g-f;)m=Ts(m),g--;for(;f--;){if(v===m||m!==null&&v===m.alternate)break t;v=Ts(v),m=Ts(m)}v=null}else v=null;p!==null&&nw(h,d,p,v,!1),y!==null&&S!==null&&nw(h,S,y,v,!0)}}e:{if(d=l?$s(l):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var T=Eb;else if(Kv(d))if($I)T=Cb;else{T=Tb;var b=Sb}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=kb);if(T&&(T=T(t,l))){LI(h,T,n,c);break e}b&&b(t,d,l),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&np(d,"number",d.value)}switch(b=l?$s(l):window,t){case"focusin":(Kv(b)||b.contentEditable==="true")&&(Os=b,pp=l,Aa=null);break;case"focusout":Aa=pp=Os=null;break;case"mousedown":mp=!0;break;case"contextmenu":case"mouseup":case"dragend":mp=!1,Zv(h,n,c);break;case"selectionchange":if(xb)break;case"keydown":case"keyup":Zv(h,n,c)}var N;if(eg)e:{switch(t){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else Ps?PI(t,n)&&($="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(RI&&n.locale!=="ko"&&(Ps||$!=="onCompositionStart"?$==="onCompositionEnd"&&Ps&&(N=DI()):(Ur=c,Xm="value"in Ur?Ur.value:Ur.textContent,Ps=!0)),b=wc(l,$),0<b.length&&($=new qv($,t,null,n,c),h.push({event:$,listeners:b}),N?$.data=N:(N=OI(n),N!==null&&($.data=N)))),(N=yb?vb(t,n):wb(t,n))&&(l=wc(l,"onBeforeInput"),0<l.length&&(c=new qv("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:l}),c.data=N))}GI(h,e)})}function Ja(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Wa(t,n),s!=null&&r.unshift(Ja(t,s,i)),s=Wa(t,e),s!=null&&r.push(Ja(t,s,i))),t=t.return}return r}function Ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function nw(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&l!==null&&(a=l,i?(u=Wa(n,s),u!=null&&o.unshift(Ja(n,u,a))):i||(u=Wa(n,s),u!=null&&o.push(Ja(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Pb=/\r\n?/g,Ob=/\u0000|\uFFFD/g;function rw(t){return(typeof t=="string"?t:""+t).replace(Pb,`
`).replace(Ob,"")}function _l(t,e,n){if(e=rw(e),rw(t)!==e&&n)throw Error(A(425))}function Ic(){}var gp=null,yp=null;function vp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wp=typeof setTimeout=="function"?setTimeout:void 0,Lb=typeof clearTimeout=="function"?clearTimeout:void 0,iw=typeof Promise=="function"?Promise:void 0,$b=typeof queueMicrotask=="function"?queueMicrotask:typeof iw<"u"?function(t){return iw.resolve(null).then(t).catch(Mb)}:wp;function Mb(t){setTimeout(function(){throw t})}function cf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ka(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ka(e)}function Gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function sw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Do=Math.random().toString(36).slice(2),Mn="__reactFiber$"+Do,Za="__reactProps$"+Do,mr="__reactContainer$"+Do,Ip="__reactEvents$"+Do,Fb="__reactListeners$"+Do,Ub="__reactHandles$"+Do;function Oi(t){var e=t[Mn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mr]||n[Mn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=sw(t);t!==null;){if(n=t[Mn])return n;t=sw(t)}return e}t=n,n=t.parentNode}return null}function $u(t){return t=t[Mn]||t[mr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $s(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(A(33))}function wh(t){return t[Za]||null}var _p=[],Ms=-1;function mi(t){return{current:t}}function Se(t){0>Ms||(t.current=_p[Ms],_p[Ms]=null,Ms--)}function Ie(t,e){Ms++,_p[Ms]=t.current,t.current=e}var ti={},Ot=mi(ti),Jt=mi(!1),Qi=ti;function io(t,e){var n=t.type.contextTypes;if(!n)return ti;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Zt(t){return t=t.childContextTypes,t!=null}function _c(){Se(Jt),Se(Ot)}function ow(t,e,n){if(Ot.current!==ti)throw Error(A(168));Ie(Ot,e),Ie(Jt,n)}function KI(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(A(108,SA(t)||"Unknown",i));return Re({},n,r)}function Ec(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ti,Qi=Ot.current,Ie(Ot,t),Ie(Jt,Jt.current),!0}function aw(t,e,n){var r=t.stateNode;if(!r)throw Error(A(169));n?(t=KI(t,e,Qi),r.__reactInternalMemoizedMergedChildContext=t,Se(Jt),Se(Ot),Ie(Ot,t)):Se(Jt),Ie(Jt,n)}var ir=null,Ih=!1,hf=!1;function QI(t){ir===null?ir=[t]:ir.push(t)}function Vb(t){Ih=!0,QI(t)}function gi(){if(!hf&&ir!==null){hf=!0;var t=0,e=me;try{var n=ir;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ir=null,Ih=!1}catch(i){throw ir!==null&&(ir=ir.slice(t+1)),II(Hm,gi),i}finally{me=e,hf=!1}}return null}var Fs=[],Us=0,Sc=null,Tc=0,gn=[],yn=0,Yi=null,sr=1,or="";function ki(t,e){Fs[Us++]=Tc,Fs[Us++]=Sc,Sc=t,Tc=e}function YI(t,e,n){gn[yn++]=sr,gn[yn++]=or,gn[yn++]=Yi,Yi=t;var r=sr;t=or;var i=32-Dn(r)-1;r&=~(1<<i),n+=1;var s=32-Dn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,sr=1<<32-Dn(e)+i|n<<i|r,or=s+t}else sr=1<<s|n<<i|r,or=t}function ng(t){t.return!==null&&(ki(t,1),YI(t,1,0))}function rg(t){for(;t===Sc;)Sc=Fs[--Us],Fs[Us]=null,Tc=Fs[--Us],Fs[Us]=null;for(;t===Yi;)Yi=gn[--yn],gn[yn]=null,or=gn[--yn],gn[yn]=null,sr=gn[--yn],gn[yn]=null}var un=null,on=null,ke=!1,xn=null;function XI(t,e){var n=vn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function uw(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,un=t,on=Gr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,un=t,on=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yi!==null?{id:sr,overflow:or}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,un=t,on=null,!0):!1;default:return!1}}function Ep(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Sp(t){if(ke){var e=on;if(e){var n=e;if(!uw(t,e)){if(Ep(t))throw Error(A(418));e=Gr(n.nextSibling);var r=un;e&&uw(t,e)?XI(r,n):(t.flags=t.flags&-4097|2,ke=!1,un=t)}}else{if(Ep(t))throw Error(A(418));t.flags=t.flags&-4097|2,ke=!1,un=t}}}function lw(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;un=t}function El(t){if(t!==un)return!1;if(!ke)return lw(t),ke=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!vp(t.type,t.memoizedProps)),e&&(e=on)){if(Ep(t))throw JI(),Error(A(418));for(;e;)XI(t,e),e=Gr(e.nextSibling)}if(lw(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(A(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){on=Gr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}on=null}}else on=un?Gr(t.stateNode.nextSibling):null;return!0}function JI(){for(var t=on;t;)t=Gr(t.nextSibling)}function so(){on=un=null,ke=!1}function ig(t){xn===null?xn=[t]:xn.push(t)}var Bb=_r.ReactCurrentBatchConfig;function An(t,e){if(t&&t.defaultProps){e=Re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var kc=mi(null),Cc=null,Vs=null,sg=null;function og(){sg=Vs=Cc=null}function ag(t){var e=kc.current;Se(kc),t._currentValue=e}function Tp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ys(t,e){Cc=t,sg=Vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qt=!0),t.firstContext=null)}function _n(t){var e=t._currentValue;if(sg!==t)if(t={context:t,memoizedValue:e,next:null},Vs===null){if(Cc===null)throw Error(A(308));Vs=t,Cc.dependencies={lanes:0,firstContext:t}}else Vs=Vs.next=t;return e}var Li=null;function ug(t){Li===null?Li=[t]:Li.push(t)}function ZI(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ug(e)):(n.next=i.next,i.next=n),e.interleaved=n,gr(t,r)}function gr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Or=!1;function lg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function e_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Hr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,gr(t,n)}return i=r.interleaved,i===null?(e.next=e,ug(r)):(e.next=i.next,i.next=e),r.interleaved=e,gr(t,n)}function Hl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Km(t,n)}}function cw(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ac(t,e,n,r){var i=t.updateQueue;Or=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,l=u.next;u.next=null,o===null?s=l:o.next=l,o=u;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=l:a.next=l,c.lastBaseUpdate=u))}if(s!==null){var h=i.baseState;o=0,c=l=u=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,p=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(p,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(p,h,d):y,d==null)break e;h=Re({},h,d);break e;case 2:Or=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(l=c=p,u=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(u=h),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ji|=o,t.lanes=o,t.memoizedState=h}}function hw(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var t_=new Z1.Component().refs;function kp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _h={isMounted:function(t){return(t=t._reactInternals)?ps(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Vt(),i=Qr(t),s=hr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Hr(t,s,i),e!==null&&(Rn(e,t,i,r),Hl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Vt(),i=Qr(t),s=hr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Hr(t,s,i),e!==null&&(Rn(e,t,i,r),Hl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Vt(),r=Qr(t),i=hr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Hr(t,i,r),e!==null&&(Rn(e,t,r,n),Hl(e,t,r))}};function dw(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ya(n,r)||!Ya(i,s):!0}function n_(t,e,n){var r=!1,i=ti,s=e.contextType;return typeof s=="object"&&s!==null?s=_n(s):(i=Zt(e)?Qi:Ot.current,r=e.contextTypes,s=(r=r!=null)?io(t,i):ti),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_h,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function fw(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&_h.enqueueReplaceState(e,e.state,null)}function Cp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=t_,lg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=_n(s):(s=Zt(e)?Qi:Ot.current,i.context=io(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(kp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&_h.enqueueReplaceState(i,i.state,null),Ac(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ea(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===t_&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,t))}return t}function Sl(t,e){throw t=Object.prototype.toString.call(e),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function pw(t){var e=t._init;return e(t._payload)}function r_(t){function e(m,f){if(t){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=Yr(m,f),m.index=0,m.sibling=null,m}function s(m,f,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,g,_){return f===null||f.tag!==6?(f=vf(g,m.mode,_),f.return=m,f):(f=i(f,g),f.return=m,f)}function u(m,f,g,_){var T=g.type;return T===Rs?c(m,f,g.props.children,_,g.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Pr&&pw(T)===f.type)?(_=i(f,g.props),_.ref=ea(m,f,g),_.return=m,_):(_=Zl(g.type,g.key,g.props,null,m.mode,_),_.ref=ea(m,f,g),_.return=m,_)}function l(m,f,g,_){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=wf(g,m.mode,_),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function c(m,f,g,_,T){return f===null||f.tag!==7?(f=ji(g,m.mode,_,T),f.return=m,f):(f=i(f,g),f.return=m,f)}function h(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=vf(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case dl:return g=Zl(f.type,f.key,f.props,null,m.mode,g),g.ref=ea(m,null,f),g.return=m,g;case Ds:return f=wf(f,m.mode,g),f.return=m,f;case Pr:var _=f._init;return h(m,_(f._payload),g)}if(pa(f)||Qo(f))return f=ji(f,m.mode,g,null),f.return=m,f;Sl(m,f)}return null}function d(m,f,g,_){var T=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return T!==null?null:a(m,f,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case dl:return g.key===T?u(m,f,g,_):null;case Ds:return g.key===T?l(m,f,g,_):null;case Pr:return T=g._init,d(m,f,T(g._payload),_)}if(pa(g)||Qo(g))return T!==null?null:c(m,f,g,_,null);Sl(m,g)}return null}function p(m,f,g,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(g)||null,a(f,m,""+_,T);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case dl:return m=m.get(_.key===null?g:_.key)||null,u(f,m,_,T);case Ds:return m=m.get(_.key===null?g:_.key)||null,l(f,m,_,T);case Pr:var b=_._init;return p(m,f,g,b(_._payload),T)}if(pa(_)||Qo(_))return m=m.get(g)||null,c(f,m,_,T,null);Sl(f,_)}return null}function y(m,f,g,_){for(var T=null,b=null,N=f,$=f=0,te=null;N!==null&&$<g.length;$++){N.index>$?(te=N,N=null):te=N.sibling;var G=d(m,N,g[$],_);if(G===null){N===null&&(N=te);break}t&&N&&G.alternate===null&&e(m,N),f=s(G,f,$),b===null?T=G:b.sibling=G,b=G,N=te}if($===g.length)return n(m,N),ke&&ki(m,$),T;if(N===null){for(;$<g.length;$++)N=h(m,g[$],_),N!==null&&(f=s(N,f,$),b===null?T=N:b.sibling=N,b=N);return ke&&ki(m,$),T}for(N=r(m,N);$<g.length;$++)te=p(N,m,$,g[$],_),te!==null&&(t&&te.alternate!==null&&N.delete(te.key===null?$:te.key),f=s(te,f,$),b===null?T=te:b.sibling=te,b=te);return t&&N.forEach(function(et){return e(m,et)}),ke&&ki(m,$),T}function v(m,f,g,_){var T=Qo(g);if(typeof T!="function")throw Error(A(150));if(g=T.call(g),g==null)throw Error(A(151));for(var b=T=null,N=f,$=f=0,te=null,G=g.next();N!==null&&!G.done;$++,G=g.next()){N.index>$?(te=N,N=null):te=N.sibling;var et=d(m,N,G.value,_);if(et===null){N===null&&(N=te);break}t&&N&&et.alternate===null&&e(m,N),f=s(et,f,$),b===null?T=et:b.sibling=et,b=et,N=te}if(G.done)return n(m,N),ke&&ki(m,$),T;if(N===null){for(;!G.done;$++,G=g.next())G=h(m,G.value,_),G!==null&&(f=s(G,f,$),b===null?T=G:b.sibling=G,b=G);return ke&&ki(m,$),T}for(N=r(m,N);!G.done;$++,G=g.next())G=p(N,m,$,G.value,_),G!==null&&(t&&G.alternate!==null&&N.delete(G.key===null?$:G.key),f=s(G,f,$),b===null?T=G:b.sibling=G,b=G);return t&&N.forEach(function(Ke){return e(m,Ke)}),ke&&ki(m,$),T}function S(m,f,g,_){if(typeof g=="object"&&g!==null&&g.type===Rs&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case dl:e:{for(var T=g.key,b=f;b!==null;){if(b.key===T){if(T=g.type,T===Rs){if(b.tag===7){n(m,b.sibling),f=i(b,g.props.children),f.return=m,m=f;break e}}else if(b.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Pr&&pw(T)===b.type){n(m,b.sibling),f=i(b,g.props),f.ref=ea(m,b,g),f.return=m,m=f;break e}n(m,b);break}else e(m,b);b=b.sibling}g.type===Rs?(f=ji(g.props.children,m.mode,_,g.key),f.return=m,m=f):(_=Zl(g.type,g.key,g.props,null,m.mode,_),_.ref=ea(m,f,g),_.return=m,m=_)}return o(m);case Ds:e:{for(b=g.key;f!==null;){if(f.key===b)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=wf(g,m.mode,_),f.return=m,m=f}return o(m);case Pr:return b=g._init,S(m,f,b(g._payload),_)}if(pa(g))return y(m,f,g,_);if(Qo(g))return v(m,f,g,_);Sl(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,g),f.return=m,m=f):(n(m,f),f=vf(g,m.mode,_),f.return=m,m=f),o(m)):n(m,f)}return S}var oo=r_(!0),i_=r_(!1),Mu={},Hn=mi(Mu),eu=mi(Mu),tu=mi(Mu);function $i(t){if(t===Mu)throw Error(A(174));return t}function cg(t,e){switch(Ie(tu,e),Ie(eu,t),Ie(Hn,Mu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ip(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ip(e,t)}Se(Hn),Ie(Hn,e)}function ao(){Se(Hn),Se(eu),Se(tu)}function s_(t){$i(tu.current);var e=$i(Hn.current),n=ip(e,t.type);e!==n&&(Ie(eu,t),Ie(Hn,n))}function hg(t){eu.current===t&&(Se(Hn),Se(eu))}var Ne=mi(0);function bc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var df=[];function dg(){for(var t=0;t<df.length;t++)df[t]._workInProgressVersionPrimary=null;df.length=0}var Kl=_r.ReactCurrentDispatcher,ff=_r.ReactCurrentBatchConfig,Xi=0,De=null,Qe=null,nt=null,xc=!1,ba=!1,nu=0,zb=0;function xt(){throw Error(A(321))}function fg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Pn(t[n],e[n]))return!1;return!0}function pg(t,e,n,r,i,s){if(Xi=s,De=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Kl.current=t===null||t.memoizedState===null?Gb:Hb,t=n(r,i),ba){s=0;do{if(ba=!1,nu=0,25<=s)throw Error(A(301));s+=1,nt=Qe=null,e.updateQueue=null,Kl.current=Kb,t=n(r,i)}while(ba)}if(Kl.current=Nc,e=Qe!==null&&Qe.next!==null,Xi=0,nt=Qe=De=null,xc=!1,e)throw Error(A(300));return t}function mg(){var t=nu!==0;return nu=0,t}function $n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?De.memoizedState=nt=t:nt=nt.next=t,nt}function En(){if(Qe===null){var t=De.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var e=nt===null?De.memoizedState:nt.next;if(e!==null)nt=e,Qe=t;else{if(t===null)throw Error(A(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},nt===null?De.memoizedState=nt=t:nt=nt.next=t}return nt}function ru(t,e){return typeof e=="function"?e(t):e}function pf(t){var e=En(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=Qe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,l=s;do{var c=l.lane;if((Xi&c)===c)u!==null&&(u=u.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:t(r,l.action);else{var h={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};u===null?(a=u=h,o=r):u=u.next=h,De.lanes|=c,Ji|=c}l=l.next}while(l!==null&&l!==s);u===null?o=r:u.next=a,Pn(r,e.memoizedState)||(Qt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,De.lanes|=s,Ji|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mf(t){var e=En(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Pn(s,e.memoizedState)||(Qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function o_(){}function a_(t,e){var n=De,r=En(),i=e(),s=!Pn(r.memoizedState,i);if(s&&(r.memoizedState=i,Qt=!0),r=r.queue,gg(c_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||nt!==null&&nt.memoizedState.tag&1){if(n.flags|=2048,iu(9,l_.bind(null,n,r,i,e),void 0,null),st===null)throw Error(A(349));Xi&30||u_(n,e,i)}return i}function u_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function l_(t,e,n,r){e.value=n,e.getSnapshot=r,h_(e)&&d_(t)}function c_(t,e,n){return n(function(){h_(e)&&d_(t)})}function h_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Pn(t,n)}catch{return!0}}function d_(t){var e=gr(t,1);e!==null&&Rn(e,t,1,-1)}function mw(t){var e=$n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ru,lastRenderedState:t},e.queue=t,t=t.dispatch=Wb.bind(null,De,t),[e.memoizedState,t]}function iu(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function f_(){return En().memoizedState}function Ql(t,e,n,r){var i=$n();De.flags|=t,i.memoizedState=iu(1|e,n,void 0,r===void 0?null:r)}function Eh(t,e,n,r){var i=En();r=r===void 0?null:r;var s=void 0;if(Qe!==null){var o=Qe.memoizedState;if(s=o.destroy,r!==null&&fg(r,o.deps)){i.memoizedState=iu(e,n,s,r);return}}De.flags|=t,i.memoizedState=iu(1|e,n,s,r)}function gw(t,e){return Ql(8390656,8,t,e)}function gg(t,e){return Eh(2048,8,t,e)}function p_(t,e){return Eh(4,2,t,e)}function m_(t,e){return Eh(4,4,t,e)}function g_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function y_(t,e,n){return n=n!=null?n.concat([t]):null,Eh(4,4,g_.bind(null,e,t),n)}function yg(){}function v_(t,e){var n=En();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function w_(t,e){var n=En();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function I_(t,e,n){return Xi&21?(Pn(n,e)||(n=SI(),De.lanes|=n,Ji|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qt=!0),t.memoizedState=n)}function jb(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=ff.transition;ff.transition={};try{t(!1),e()}finally{me=n,ff.transition=r}}function __(){return En().memoizedState}function qb(t,e,n){var r=Qr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},E_(t))S_(e,n);else if(n=ZI(t,e,n,r),n!==null){var i=Vt();Rn(n,t,r,i),T_(n,e,r)}}function Wb(t,e,n){var r=Qr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(E_(t))S_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Pn(a,o)){var u=e.interleaved;u===null?(i.next=i,ug(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=ZI(t,e,i,r),n!==null&&(i=Vt(),Rn(n,t,r,i),T_(n,e,r))}}function E_(t){var e=t.alternate;return t===De||e!==null&&e===De}function S_(t,e){ba=xc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function T_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Km(t,n)}}var Nc={readContext:_n,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},Gb={readContext:_n,useCallback:function(t,e){return $n().memoizedState=[t,e===void 0?null:e],t},useContext:_n,useEffect:gw,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ql(4194308,4,g_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ql(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ql(4,2,t,e)},useMemo:function(t,e){var n=$n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=$n();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=qb.bind(null,De,t),[r.memoizedState,t]},useRef:function(t){var e=$n();return t={current:t},e.memoizedState=t},useState:mw,useDebugValue:yg,useDeferredValue:function(t){return $n().memoizedState=t},useTransition:function(){var t=mw(!1),e=t[0];return t=jb.bind(null,t[1]),$n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=De,i=$n();if(ke){if(n===void 0)throw Error(A(407));n=n()}else{if(n=e(),st===null)throw Error(A(349));Xi&30||u_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,gw(c_.bind(null,r,s,t),[t]),r.flags|=2048,iu(9,l_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=$n(),e=st.identifierPrefix;if(ke){var n=or,r=sr;n=(r&~(1<<32-Dn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=nu++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Hb={readContext:_n,useCallback:v_,useContext:_n,useEffect:gg,useImperativeHandle:y_,useInsertionEffect:p_,useLayoutEffect:m_,useMemo:w_,useReducer:pf,useRef:f_,useState:function(){return pf(ru)},useDebugValue:yg,useDeferredValue:function(t){var e=En();return I_(e,Qe.memoizedState,t)},useTransition:function(){var t=pf(ru)[0],e=En().memoizedState;return[t,e]},useMutableSource:o_,useSyncExternalStore:a_,useId:__,unstable_isNewReconciler:!1},Kb={readContext:_n,useCallback:v_,useContext:_n,useEffect:gg,useImperativeHandle:y_,useInsertionEffect:p_,useLayoutEffect:m_,useMemo:w_,useReducer:mf,useRef:f_,useState:function(){return mf(ru)},useDebugValue:yg,useDeferredValue:function(t){var e=En();return Qe===null?e.memoizedState=t:I_(e,Qe.memoizedState,t)},useTransition:function(){var t=mf(ru)[0],e=En().memoizedState;return[t,e]},useMutableSource:o_,useSyncExternalStore:a_,useId:__,unstable_isNewReconciler:!1};function uo(t,e){try{var n="",r=e;do n+=EA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function gf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ap(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Qb=typeof WeakMap=="function"?WeakMap:Map;function k_(t,e,n){n=hr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Rc||(Rc=!0,Mp=r),Ap(t,e)},n}function C_(t,e,n){n=hr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ap(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ap(t,e),typeof r!="function"&&(Kr===null?Kr=new Set([this]):Kr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function yw(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Qb;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=lx.bind(null,t,e,n),e.then(t,t))}function vw(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ww(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hr(-1,1),e.tag=2,Hr(n,e,1))),n.lanes|=1),t)}var Yb=_r.ReactCurrentOwner,Qt=!1;function $t(t,e,n,r){e.child=t===null?i_(e,null,n,r):oo(e,t.child,n,r)}function Iw(t,e,n,r,i){n=n.render;var s=e.ref;return Ys(e,i),r=pg(t,e,n,r,s,i),n=mg(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,yr(t,e,i)):(ke&&n&&ng(e),e.flags|=1,$t(t,e,r,i),e.child)}function _w(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!kg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,A_(t,e,s,r,i)):(t=Zl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ya,n(o,r)&&t.ref===e.ref)return yr(t,e,i)}return e.flags|=1,t=Yr(s,r),t.ref=e.ref,t.return=e,e.child=t}function A_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ya(s,r)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Qt=!0);else return e.lanes=t.lanes,yr(t,e,i)}return bp(t,e,n,r,i)}function b_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(zs,rn),rn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ie(zs,rn),rn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ie(zs,rn),rn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ie(zs,rn),rn|=r;return $t(t,e,i,n),e.child}function x_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function bp(t,e,n,r,i){var s=Zt(n)?Qi:Ot.current;return s=io(e,s),Ys(e,i),n=pg(t,e,n,r,s,i),r=mg(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,yr(t,e,i)):(ke&&r&&ng(e),e.flags|=1,$t(t,e,n,i),e.child)}function Ew(t,e,n,r,i){if(Zt(n)){var s=!0;Ec(e)}else s=!1;if(Ys(e,i),e.stateNode===null)Yl(t,e),n_(e,n,r),Cp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=_n(l):(l=Zt(n)?Qi:Ot.current,l=io(e,l));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&fw(e,o,r,l),Or=!1;var d=e.memoizedState;o.state=d,Ac(e,r,o,i),u=e.memoizedState,a!==r||d!==u||Jt.current||Or?(typeof c=="function"&&(kp(e,n,c,r),u=e.memoizedState),(a=Or||dw(e,n,a,r,d,u,l))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,e_(t,e),a=e.memoizedProps,l=e.type===e.elementType?a:An(e.type,a),o.props=l,h=e.pendingProps,d=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=_n(u):(u=Zt(n)?Qi:Ot.current,u=io(e,u));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==u)&&fw(e,o,r,u),Or=!1,d=e.memoizedState,o.state=d,Ac(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||Jt.current||Or?(typeof p=="function"&&(kp(e,n,p,r),y=e.memoizedState),(l=Or||dw(e,n,l,r,d,y,u)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return xp(t,e,n,r,s,i)}function xp(t,e,n,r,i,s){x_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&aw(e,n,!1),yr(t,e,s);r=e.stateNode,Yb.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=oo(e,t.child,null,s),e.child=oo(e,null,a,s)):$t(t,e,a,s),e.memoizedState=r.state,i&&aw(e,n,!0),e.child}function N_(t){var e=t.stateNode;e.pendingContext?ow(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ow(t,e.context,!1),cg(t,e.containerInfo)}function Sw(t,e,n,r,i){return so(),ig(i),e.flags|=256,$t(t,e,n,r),e.child}var Np={dehydrated:null,treeContext:null,retryLane:0};function Dp(t){return{baseLanes:t,cachePool:null,transitions:null}}function D_(t,e,n){var r=e.pendingProps,i=Ne.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ie(Ne,i&1),t===null)return Sp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=kh(o,r,0,null),t=ji(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Dp(n),e.memoizedState=Np,t):vg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Xb(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Yr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Yr(a,s):(s=ji(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Dp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Np,r}return s=t.child,t=s.sibling,r=Yr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function vg(t,e){return e=kh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Tl(t,e,n,r){return r!==null&&ig(r),oo(e,t.child,null,n),t=vg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Xb(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=gf(Error(A(422))),Tl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=kh({mode:"visible",children:r.children},i,0,null),s=ji(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&oo(e,t.child,null,o),e.child.memoizedState=Dp(o),e.memoizedState=Np,s);if(!(e.mode&1))return Tl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(A(419)),r=gf(s,r,void 0),Tl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Qt||a){if(r=st,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,gr(t,i),Rn(r,t,i,-1))}return Tg(),r=gf(Error(A(421))),Tl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=cx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,on=Gr(i.nextSibling),un=e,ke=!0,xn=null,t!==null&&(gn[yn++]=sr,gn[yn++]=or,gn[yn++]=Yi,sr=t.id,or=t.overflow,Yi=e),e=vg(e,r.children),e.flags|=4096,e)}function Tw(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Tp(t.return,e,n)}function yf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function R_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if($t(t,e,r.children,n),r=Ne.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tw(t,n,e);else if(t.tag===19)Tw(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ie(Ne,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&bc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),yf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&bc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}yf(e,!0,n,null,s);break;case"together":yf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Yl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function yr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ji|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(A(153));if(e.child!==null){for(t=e.child,n=Yr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Yr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Jb(t,e,n){switch(e.tag){case 3:N_(e),so();break;case 5:s_(e);break;case 1:Zt(e.type)&&Ec(e);break;case 4:cg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ie(kc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ie(Ne,Ne.current&1),e.flags|=128,null):n&e.child.childLanes?D_(t,e,n):(Ie(Ne,Ne.current&1),t=yr(t,e,n),t!==null?t.sibling:null);Ie(Ne,Ne.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return R_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(Ne,Ne.current),r)break;return null;case 22:case 23:return e.lanes=0,b_(t,e,n)}return yr(t,e,n)}var P_,Rp,O_,L_;P_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rp=function(){};O_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,$i(Hn.current);var s=null;switch(n){case"input":i=ep(t,i),r=ep(t,r),s=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),s=[];break;case"textarea":i=rp(t,i),r=rp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ic)}sp(n,r);var o;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var a=i[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(ja.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in r){var u=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(ja.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&_e("scroll",t),s||a===u||(s=[])):(s=s||[]).push(l,u))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};L_=function(t,e,n,r){n!==r&&(e.flags|=4)};function ta(t,e){if(!ke)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Zb(t,e,n){var r=e.pendingProps;switch(rg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(e),null;case 1:return Zt(e.type)&&_c(),Nt(e),null;case 3:return r=e.stateNode,ao(),Se(Jt),Se(Ot),dg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(El(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,xn!==null&&(Vp(xn),xn=null))),Rp(t,e),Nt(e),null;case 5:hg(e);var i=$i(tu.current);if(n=e.type,t!==null&&e.stateNode!=null)O_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(A(166));return Nt(e),null}if(t=$i(Hn.current),El(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Mn]=e,r[Za]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<ga.length;i++)_e(ga[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":Pv(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":Lv(r,s),_e("invalid",r)}sp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&_l(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&_l(r.textContent,a,t),i=["children",""+a]):ja.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":fl(r),Ov(r,s,!0);break;case"textarea":fl(r),$v(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ic)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=uI(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Mn]=e,t[Za]=r,P_(t,e,!1,!1),e.stateNode=t;e:{switch(o=op(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<ga.length;i++)_e(ga[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":Pv(t,r),i=ep(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),_e("invalid",t);break;case"textarea":Lv(t,r),i=rp(t,r),_e("invalid",t);break;default:i=r}sp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?hI(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&lI(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&qa(t,u):typeof u=="number"&&qa(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ja.hasOwnProperty(s)?u!=null&&s==="onScroll"&&_e("scroll",t):u!=null&&zm(t,s,u,o))}switch(n){case"input":fl(t),Ov(t,r,!1);break;case"textarea":fl(t),$v(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ei(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Gs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Gs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ic)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Nt(e),null;case 6:if(t&&e.stateNode!=null)L_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(A(166));if(n=$i(tu.current),$i(Hn.current),El(e)){if(r=e.stateNode,n=e.memoizedProps,r[Mn]=e,(s=r.nodeValue!==n)&&(t=un,t!==null))switch(t.tag){case 3:_l(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_l(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mn]=e,e.stateNode=r}return Nt(e),null;case 13:if(Se(Ne),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ke&&on!==null&&e.mode&1&&!(e.flags&128))JI(),so(),e.flags|=98560,s=!1;else if(s=El(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(A(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[Mn]=e}else so(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Nt(e),s=!1}else xn!==null&&(Vp(xn),xn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ne.current&1?Xe===0&&(Xe=3):Tg())),e.updateQueue!==null&&(e.flags|=4),Nt(e),null);case 4:return ao(),Rp(t,e),t===null&&Xa(e.stateNode.containerInfo),Nt(e),null;case 10:return ag(e.type._context),Nt(e),null;case 17:return Zt(e.type)&&_c(),Nt(e),null;case 19:if(Se(Ne),s=e.memoizedState,s===null)return Nt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ta(s,!1);else{if(Xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=bc(t),o!==null){for(e.flags|=128,ta(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ie(Ne,Ne.current&1|2),e.child}t=t.sibling}s.tail!==null&&ze()>lo&&(e.flags|=128,r=!0,ta(s,!1),e.lanes=4194304)}else{if(!r)if(t=bc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ta(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ke)return Nt(e),null}else 2*ze()-s.renderingStartTime>lo&&n!==1073741824&&(e.flags|=128,r=!0,ta(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ze(),e.sibling=null,n=Ne.current,Ie(Ne,r?n&1|2:n&1),e):(Nt(e),null);case 22:case 23:return Sg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?rn&1073741824&&(Nt(e),e.subtreeFlags&6&&(e.flags|=8192)):Nt(e),null;case 24:return null;case 25:return null}throw Error(A(156,e.tag))}function ex(t,e){switch(rg(e),e.tag){case 1:return Zt(e.type)&&_c(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ao(),Se(Jt),Se(Ot),dg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hg(e),null;case 13:if(Se(Ne),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(A(340));so()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Se(Ne),null;case 4:return ao(),null;case 10:return ag(e.type._context),null;case 22:case 23:return Sg(),null;case 24:return null;default:return null}}var kl=!1,Dt=!1,tx=typeof WeakSet=="function"?WeakSet:Set,V=null;function Bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(t,e,r)}else n.current=null}function Pp(t,e,n){try{n()}catch(r){Le(t,e,r)}}var kw=!1;function nx(t,e){if(gp=yc,t=UI(),tg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,l=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++l===i&&(a=o),d===s&&++c===r&&(u=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(yp={focusedElem:t,selectionRange:n},yc=!1,V=e;V!==null;)if(e=V,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,V=t;else for(;V!==null;){e=V;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,S=y.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:An(e.type,v),S);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(_){Le(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,V=t;break}V=e.return}return y=kw,kw=!1,y}function xa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Pp(e,n,s)}i=i.next}while(i!==r)}}function Sh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Op(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $_(t){var e=t.alternate;e!==null&&(t.alternate=null,$_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Mn],delete e[Za],delete e[Ip],delete e[Fb],delete e[Ub])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function M_(t){return t.tag===5||t.tag===3||t.tag===4}function Cw(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||M_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ic));else if(r!==4&&(t=t.child,t!==null))for(Lp(t,e,n),t=t.sibling;t!==null;)Lp(t,e,n),t=t.sibling}function $p(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for($p(t,e,n),t=t.sibling;t!==null;)$p(t,e,n),t=t.sibling}var yt=null,bn=!1;function br(t,e,n){for(n=n.child;n!==null;)F_(t,e,n),n=n.sibling}function F_(t,e,n){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(mh,n)}catch{}switch(n.tag){case 5:Dt||Bs(n,e);case 6:var r=yt,i=bn;yt=null,br(t,e,n),yt=r,bn=i,yt!==null&&(bn?(t=yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):yt.removeChild(n.stateNode));break;case 18:yt!==null&&(bn?(t=yt,n=n.stateNode,t.nodeType===8?cf(t.parentNode,n):t.nodeType===1&&cf(t,n),Ka(t)):cf(yt,n.stateNode));break;case 4:r=yt,i=bn,yt=n.stateNode.containerInfo,bn=!0,br(t,e,n),yt=r,bn=i;break;case 0:case 11:case 14:case 15:if(!Dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Pp(n,e,o),i=i.next}while(i!==r)}br(t,e,n);break;case 1:if(!Dt&&(Bs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Le(n,e,a)}br(t,e,n);break;case 21:br(t,e,n);break;case 22:n.mode&1?(Dt=(r=Dt)||n.memoizedState!==null,br(t,e,n),Dt=r):br(t,e,n);break;default:br(t,e,n)}}function Aw(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new tx),e.forEach(function(r){var i=hx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:yt=a.stateNode,bn=!1;break e;case 3:yt=a.stateNode.containerInfo,bn=!0;break e;case 4:yt=a.stateNode.containerInfo,bn=!0;break e}a=a.return}if(yt===null)throw Error(A(160));F_(s,o,i),yt=null,bn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(l){Le(i,e,l)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)U_(e,t),e=e.sibling}function U_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),Ln(t),r&4){try{xa(3,t,t.return),Sh(3,t)}catch(v){Le(t,t.return,v)}try{xa(5,t,t.return)}catch(v){Le(t,t.return,v)}}break;case 1:Cn(e,t),Ln(t),r&512&&n!==null&&Bs(n,n.return);break;case 5:if(Cn(e,t),Ln(t),r&512&&n!==null&&Bs(n,n.return),t.flags&32){var i=t.stateNode;try{qa(i,"")}catch(v){Le(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&oI(i,s),op(a,o);var l=op(a,s);for(o=0;o<u.length;o+=2){var c=u[o],h=u[o+1];c==="style"?hI(i,h):c==="dangerouslySetInnerHTML"?lI(i,h):c==="children"?qa(i,h):zm(i,c,h,l)}switch(a){case"input":tp(i,s);break;case"textarea":aI(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Gs(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Gs(i,!!s.multiple,s.defaultValue,!0):Gs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Za]=s}catch(v){Le(t,t.return,v)}}break;case 6:if(Cn(e,t),Ln(t),r&4){if(t.stateNode===null)throw Error(A(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Le(t,t.return,v)}}break;case 3:if(Cn(e,t),Ln(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ka(e.containerInfo)}catch(v){Le(t,t.return,v)}break;case 4:Cn(e,t),Ln(t);break;case 13:Cn(e,t),Ln(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(_g=ze())),r&4&&Aw(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Dt=(l=Dt)||c,Cn(e,t),Dt=l):Cn(e,t),Ln(t),r&8192){if(l=t.memoizedState!==null,(t.stateNode.isHidden=l)&&!c&&t.mode&1)for(V=t,c=t.child;c!==null;){for(h=V=c;V!==null;){switch(d=V,p=d.child,d.tag){case 0:case 11:case 14:case 15:xa(4,d,d.return);break;case 1:Bs(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){Le(r,n,v)}}break;case 5:Bs(d,d.return);break;case 22:if(d.memoizedState!==null){xw(h);continue}}p!==null?(p.return=d,V=p):xw(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,l?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=cI("display",o))}catch(v){Le(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=l?"":h.memoizedProps}catch(v){Le(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Cn(e,t),Ln(t),r&4&&Aw(t);break;case 21:break;default:Cn(e,t),Ln(t)}}function Ln(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(M_(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(qa(i,""),r.flags&=-33);var s=Cw(t);$p(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Cw(t);Lp(t,a,o);break;default:throw Error(A(161))}}catch(u){Le(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function rx(t,e,n){V=t,V_(t)}function V_(t,e,n){for(var r=(t.mode&1)!==0;V!==null;){var i=V,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||kl;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Dt;a=kl;var l=Dt;if(kl=o,(Dt=u)&&!l)for(V=i;V!==null;)o=V,u=o.child,o.tag===22&&o.memoizedState!==null?Nw(i):u!==null?(u.return=o,V=u):Nw(i);for(;s!==null;)V=s,V_(s),s=s.sibling;V=i,kl=a,Dt=l}bw(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,V=s):bw(t)}}function bw(t){for(;V!==null;){var e=V;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Dt||Sh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Dt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:An(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&hw(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hw(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var c=l.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Ka(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Dt||e.flags&512&&Op(e)}catch(d){Le(e,e.return,d)}}if(e===t){V=null;break}if(n=e.sibling,n!==null){n.return=e.return,V=n;break}V=e.return}}function xw(t){for(;V!==null;){var e=V;if(e===t){V=null;break}var n=e.sibling;if(n!==null){n.return=e.return,V=n;break}V=e.return}}function Nw(t){for(;V!==null;){var e=V;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Sh(4,e)}catch(u){Le(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Le(e,i,u)}}var s=e.return;try{Op(e)}catch(u){Le(e,s,u)}break;case 5:var o=e.return;try{Op(e)}catch(u){Le(e,o,u)}}}catch(u){Le(e,e.return,u)}if(e===t){V=null;break}var a=e.sibling;if(a!==null){a.return=e.return,V=a;break}V=e.return}}var ix=Math.ceil,Dc=_r.ReactCurrentDispatcher,wg=_r.ReactCurrentOwner,In=_r.ReactCurrentBatchConfig,ue=0,st=null,He=null,It=0,rn=0,zs=mi(0),Xe=0,su=null,Ji=0,Th=0,Ig=0,Na=null,Kt=null,_g=0,lo=1/0,rr=null,Rc=!1,Mp=null,Kr=null,Cl=!1,Vr=null,Pc=0,Da=0,Fp=null,Xl=-1,Jl=0;function Vt(){return ue&6?ze():Xl!==-1?Xl:Xl=ze()}function Qr(t){return t.mode&1?ue&2&&It!==0?It&-It:Bb.transition!==null?(Jl===0&&(Jl=SI()),Jl):(t=me,t!==0||(t=window.event,t=t===void 0?16:NI(t.type)),t):1}function Rn(t,e,n,r){if(50<Da)throw Da=0,Fp=null,Error(A(185));Ou(t,n,r),(!(ue&2)||t!==st)&&(t===st&&(!(ue&2)&&(Th|=n),Xe===4&&$r(t,It)),en(t,r),n===1&&ue===0&&!(e.mode&1)&&(lo=ze()+500,Ih&&gi()))}function en(t,e){var n=t.callbackNode;BA(t,e);var r=gc(t,t===st?It:0);if(r===0)n!==null&&Uv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Uv(n),e===1)t.tag===0?Vb(Dw.bind(null,t)):QI(Dw.bind(null,t)),$b(function(){!(ue&6)&&gi()}),n=null;else{switch(TI(r)){case 1:n=Hm;break;case 4:n=_I;break;case 16:n=mc;break;case 536870912:n=EI;break;default:n=mc}n=K_(n,B_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function B_(t,e){if(Xl=-1,Jl=0,ue&6)throw Error(A(327));var n=t.callbackNode;if(Xs()&&t.callbackNode!==n)return null;var r=gc(t,t===st?It:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Oc(t,r);else{e=r;var i=ue;ue|=2;var s=j_();(st!==t||It!==e)&&(rr=null,lo=ze()+500,zi(t,e));do try{ax();break}catch(a){z_(t,a)}while(1);og(),Dc.current=s,ue=i,He!==null?e=0:(st=null,It=0,e=Xe)}if(e!==0){if(e===2&&(i=hp(t),i!==0&&(r=i,e=Up(t,i))),e===1)throw n=su,zi(t,0),$r(t,r),en(t,ze()),n;if(e===6)$r(t,r);else{if(i=t.current.alternate,!(r&30)&&!sx(i)&&(e=Oc(t,r),e===2&&(s=hp(t),s!==0&&(r=s,e=Up(t,s))),e===1))throw n=su,zi(t,0),$r(t,r),en(t,ze()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(A(345));case 2:Ci(t,Kt,rr);break;case 3:if($r(t,r),(r&130023424)===r&&(e=_g+500-ze(),10<e)){if(gc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Vt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=wp(Ci.bind(null,t,Kt,rr),e);break}Ci(t,Kt,rr);break;case 4:if($r(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Dn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ix(r/1960))-r,10<r){t.timeoutHandle=wp(Ci.bind(null,t,Kt,rr),r);break}Ci(t,Kt,rr);break;case 5:Ci(t,Kt,rr);break;default:throw Error(A(329))}}}return en(t,ze()),t.callbackNode===n?B_.bind(null,t):null}function Up(t,e){var n=Na;return t.current.memoizedState.isDehydrated&&(zi(t,e).flags|=256),t=Oc(t,e),t!==2&&(e=Kt,Kt=n,e!==null&&Vp(e)),t}function Vp(t){Kt===null?Kt=t:Kt.push.apply(Kt,t)}function sx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Pn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $r(t,e){for(e&=~Ig,e&=~Th,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Dn(e),r=1<<n;t[n]=-1,e&=~r}}function Dw(t){if(ue&6)throw Error(A(327));Xs();var e=gc(t,0);if(!(e&1))return en(t,ze()),null;var n=Oc(t,e);if(t.tag!==0&&n===2){var r=hp(t);r!==0&&(e=r,n=Up(t,r))}if(n===1)throw n=su,zi(t,0),$r(t,e),en(t,ze()),n;if(n===6)throw Error(A(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ci(t,Kt,rr),en(t,ze()),null}function Eg(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(lo=ze()+500,Ih&&gi())}}function Zi(t){Vr!==null&&Vr.tag===0&&!(ue&6)&&Xs();var e=ue;ue|=1;var n=In.transition,r=me;try{if(In.transition=null,me=1,t)return t()}finally{me=r,In.transition=n,ue=e,!(ue&6)&&gi()}}function Sg(){rn=zs.current,Se(zs)}function zi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Lb(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(rg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_c();break;case 3:ao(),Se(Jt),Se(Ot),dg();break;case 5:hg(r);break;case 4:ao();break;case 13:Se(Ne);break;case 19:Se(Ne);break;case 10:ag(r.type._context);break;case 22:case 23:Sg()}n=n.return}if(st=t,He=t=Yr(t.current,null),It=rn=e,Xe=0,su=null,Ig=Th=Ji=0,Kt=Na=null,Li!==null){for(e=0;e<Li.length;e++)if(n=Li[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Li=null}return t}function z_(t,e){do{var n=He;try{if(og(),Kl.current=Nc,xc){for(var r=De.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xc=!1}if(Xi=0,nt=Qe=De=null,ba=!1,nu=0,wg.current=null,n===null||n.return===null){Xe=1,su=e,He=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=It,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=vw(o);if(p!==null){p.flags&=-257,ww(p,o,a,s,e),p.mode&1&&yw(s,l,e),e=p,u=l;var y=e.updateQueue;if(y===null){var v=new Set;v.add(u),e.updateQueue=v}else y.add(u);break e}else{if(!(e&1)){yw(s,l,e),Tg();break e}u=Error(A(426))}}else if(ke&&a.mode&1){var S=vw(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),ww(S,o,a,s,e),ig(uo(u,a));break e}}s=u=uo(u,a),Xe!==4&&(Xe=2),Na===null?Na=[s]:Na.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=k_(s,u,e);cw(s,m);break e;case 1:a=u;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Kr===null||!Kr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=C_(s,a,e);cw(s,_);break e}}s=s.return}while(s!==null)}W_(n)}catch(T){e=T,He===n&&n!==null&&(He=n=n.return);continue}break}while(1)}function j_(){var t=Dc.current;return Dc.current=Nc,t===null?Nc:t}function Tg(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),st===null||!(Ji&268435455)&&!(Th&268435455)||$r(st,It)}function Oc(t,e){var n=ue;ue|=2;var r=j_();(st!==t||It!==e)&&(rr=null,zi(t,e));do try{ox();break}catch(i){z_(t,i)}while(1);if(og(),ue=n,Dc.current=r,He!==null)throw Error(A(261));return st=null,It=0,Xe}function ox(){for(;He!==null;)q_(He)}function ax(){for(;He!==null&&!RA();)q_(He)}function q_(t){var e=H_(t.alternate,t,rn);t.memoizedProps=t.pendingProps,e===null?W_(t):He=e,wg.current=null}function W_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ex(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Xe=6,He=null;return}}else if(n=Zb(n,e,rn),n!==null){He=n;return}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);Xe===0&&(Xe=5)}function Ci(t,e,n){var r=me,i=In.transition;try{In.transition=null,me=1,ux(t,e,n,r)}finally{In.transition=i,me=r}return null}function ux(t,e,n,r){do Xs();while(Vr!==null);if(ue&6)throw Error(A(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(A(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(zA(t,s),t===st&&(He=st=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Cl||(Cl=!0,K_(mc,function(){return Xs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=In.transition,In.transition=null;var o=me;me=1;var a=ue;ue|=4,wg.current=null,nx(t,n),U_(n,t),bb(yp),yc=!!gp,yp=gp=null,t.current=n,rx(n),PA(),ue=a,me=o,In.transition=s}else t.current=n;if(Cl&&(Cl=!1,Vr=t,Pc=i),s=t.pendingLanes,s===0&&(Kr=null),$A(n.stateNode),en(t,ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Rc)throw Rc=!1,t=Mp,Mp=null,t;return Pc&1&&t.tag!==0&&Xs(),s=t.pendingLanes,s&1?t===Fp?Da++:(Da=0,Fp=t):Da=0,gi(),null}function Xs(){if(Vr!==null){var t=TI(Pc),e=In.transition,n=me;try{if(In.transition=null,me=16>t?16:t,Vr===null)var r=!1;else{if(t=Vr,Vr=null,Pc=0,ue&6)throw Error(A(331));var i=ue;for(ue|=4,V=t.current;V!==null;){var s=V,o=s.child;if(V.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var l=a[u];for(V=l;V!==null;){var c=V;switch(c.tag){case 0:case 11:case 15:xa(8,c,s)}var h=c.child;if(h!==null)h.return=c,V=h;else for(;V!==null;){c=V;var d=c.sibling,p=c.return;if($_(c),c===l){V=null;break}if(d!==null){d.return=p,V=d;break}V=p}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}V=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,V=o;else e:for(;V!==null;){if(s=V,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xa(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,V=m;break e}V=s.return}}var f=t.current;for(V=f;V!==null;){o=V;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,V=g;else e:for(o=f;V!==null;){if(a=V,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Sh(9,a)}}catch(T){Le(a,a.return,T)}if(a===o){V=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,V=_;break e}V=a.return}}if(ue=i,gi(),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(mh,t)}catch{}r=!0}return r}finally{me=n,In.transition=e}}return!1}function Rw(t,e,n){e=uo(n,e),e=k_(t,e,1),t=Hr(t,e,1),e=Vt(),t!==null&&(Ou(t,1,e),en(t,e))}function Le(t,e,n){if(t.tag===3)Rw(t,t,n);else for(;e!==null;){if(e.tag===3){Rw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kr===null||!Kr.has(r))){t=uo(n,t),t=C_(e,t,1),e=Hr(e,t,1),t=Vt(),e!==null&&(Ou(e,1,t),en(e,t));break}}e=e.return}}function lx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Vt(),t.pingedLanes|=t.suspendedLanes&n,st===t&&(It&n)===n&&(Xe===4||Xe===3&&(It&130023424)===It&&500>ze()-_g?zi(t,0):Ig|=n),en(t,e)}function G_(t,e){e===0&&(t.mode&1?(e=gl,gl<<=1,!(gl&130023424)&&(gl=4194304)):e=1);var n=Vt();t=gr(t,e),t!==null&&(Ou(t,e,n),en(t,n))}function cx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),G_(t,n)}function hx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(e),G_(t,n)}var H_;H_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Jt.current)Qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qt=!1,Jb(t,e,n);Qt=!!(t.flags&131072)}else Qt=!1,ke&&e.flags&1048576&&YI(e,Tc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Yl(t,e),t=e.pendingProps;var i=io(e,Ot.current);Ys(e,n),i=pg(null,e,r,t,i,n);var s=mg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Zt(r)?(s=!0,Ec(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,lg(e),i.updater=_h,e.stateNode=i,i._reactInternals=e,Cp(e,r,t,n),e=xp(null,e,r,!0,s,n)):(e.tag=0,ke&&s&&ng(e),$t(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Yl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=fx(r),t=An(r,t),i){case 0:e=bp(null,e,r,t,n);break e;case 1:e=Ew(null,e,r,t,n);break e;case 11:e=Iw(null,e,r,t,n);break e;case 14:e=_w(null,e,r,An(r.type,t),n);break e}throw Error(A(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:An(r,i),bp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:An(r,i),Ew(t,e,r,i,n);case 3:e:{if(N_(e),t===null)throw Error(A(387));r=e.pendingProps,s=e.memoizedState,i=s.element,e_(t,e),Ac(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=uo(Error(A(423)),e),e=Sw(t,e,r,n,i);break e}else if(r!==i){i=uo(Error(A(424)),e),e=Sw(t,e,r,n,i);break e}else for(on=Gr(e.stateNode.containerInfo.firstChild),un=e,ke=!0,xn=null,n=i_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(so(),r===i){e=yr(t,e,n);break e}$t(t,e,r,n)}e=e.child}return e;case 5:return s_(e),t===null&&Sp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,vp(r,i)?o=null:s!==null&&vp(r,s)&&(e.flags|=32),x_(t,e),$t(t,e,o,n),e.child;case 6:return t===null&&Sp(e),null;case 13:return D_(t,e,n);case 4:return cg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=oo(e,null,r,n):$t(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:An(r,i),Iw(t,e,r,i,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ie(kc,r._currentValue),r._currentValue=o,s!==null)if(Pn(s.value,o)){if(s.children===i.children&&!Jt.current){e=yr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=hr(-1,n&-n),u.tag=2;var l=s.updateQueue;if(l!==null){l=l.shared;var c=l.pending;c===null?u.next=u:(u.next=c.next,c.next=u),l.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Tp(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Tp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$t(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ys(e,n),i=_n(i),r=r(i),e.flags|=1,$t(t,e,r,n),e.child;case 14:return r=e.type,i=An(r,e.pendingProps),i=An(r.type,i),_w(t,e,r,i,n);case 15:return A_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:An(r,i),Yl(t,e),e.tag=1,Zt(r)?(t=!0,Ec(e)):t=!1,Ys(e,n),n_(e,r,i),Cp(e,r,i,n),xp(null,e,r,!0,t,n);case 19:return R_(t,e,n);case 22:return b_(t,e,n)}throw Error(A(156,e.tag))};function K_(t,e){return II(t,e)}function dx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(t,e,n,r){return new dx(t,e,n,r)}function kg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fx(t){if(typeof t=="function")return kg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qm)return 11;if(t===Wm)return 14}return 2}function Yr(t,e){var n=t.alternate;return n===null?(n=vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Zl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")kg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Rs:return ji(n.children,i,s,e);case jm:o=8,i|=8;break;case Yf:return t=vn(12,n,e,i|2),t.elementType=Yf,t.lanes=s,t;case Xf:return t=vn(13,n,e,i),t.elementType=Xf,t.lanes=s,t;case Jf:return t=vn(19,n,e,i),t.elementType=Jf,t.lanes=s,t;case rI:return kh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case tI:o=10;break e;case nI:o=9;break e;case qm:o=11;break e;case Wm:o=14;break e;case Pr:o=16,r=null;break e}throw Error(A(130,t==null?t:typeof t,""))}return e=vn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ji(t,e,n,r){return t=vn(7,t,r,e),t.lanes=n,t}function kh(t,e,n,r){return t=vn(22,t,r,e),t.elementType=rI,t.lanes=n,t.stateNode={isHidden:!1},t}function vf(t,e,n){return t=vn(6,t,null,e),t.lanes=n,t}function wf(t,e,n){return e=vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function px(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jd(0),this.expirationTimes=Jd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cg(t,e,n,r,i,s,o,a,u){return t=new px(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=vn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lg(s),t}function mx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ds,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Q_(t){if(!t)return ti;t=t._reactInternals;e:{if(ps(t)!==t||t.tag!==1)throw Error(A(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Zt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(A(171))}if(t.tag===1){var n=t.type;if(Zt(n))return KI(t,n,e)}return e}function Y_(t,e,n,r,i,s,o,a,u){return t=Cg(n,r,!0,t,i,s,o,a,u),t.context=Q_(null),n=t.current,r=Vt(),i=Qr(n),s=hr(r,i),s.callback=e??null,Hr(n,s,i),t.current.lanes=i,Ou(t,i,r),en(t,r),t}function Ch(t,e,n,r){var i=e.current,s=Vt(),o=Qr(i);return n=Q_(n),e.context===null?e.context=n:e.pendingContext=n,e=hr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Hr(i,e,o),t!==null&&(Rn(t,i,o,s),Hl(t,i,o)),o}function Lc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Pw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ag(t,e){Pw(t,e),(t=t.alternate)&&Pw(t,e)}function gx(){return null}var X_=typeof reportError=="function"?reportError:function(t){console.error(t)};function bg(t){this._internalRoot=t}Ah.prototype.render=bg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(A(409));Ch(t,e,null,null)};Ah.prototype.unmount=bg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zi(function(){Ch(null,t,null,null)}),e[mr]=null}};function Ah(t){this._internalRoot=t}Ah.prototype.unstable_scheduleHydration=function(t){if(t){var e=AI();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Lr.length&&e!==0&&e<Lr[n].priority;n++);Lr.splice(n,0,t),n===0&&xI(t)}};function xg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ow(){}function yx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var l=Lc(o);s.call(l)}}var o=Y_(e,r,t,0,null,!1,!1,"",Ow);return t._reactRootContainer=o,t[mr]=o.current,Xa(t.nodeType===8?t.parentNode:t),Zi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var l=Lc(u);a.call(l)}}var u=Cg(t,0,!1,null,null,!1,!1,"",Ow);return t._reactRootContainer=u,t[mr]=u.current,Xa(t.nodeType===8?t.parentNode:t),Zi(function(){Ch(e,u,n,r)}),u}function xh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Lc(o);a.call(u)}}Ch(e,o,t,i)}else o=yx(n,e,t,i,r);return Lc(o)}kI=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ma(e.pendingLanes);n!==0&&(Km(e,n|1),en(e,ze()),!(ue&6)&&(lo=ze()+500,gi()))}break;case 13:Zi(function(){var r=gr(t,1);if(r!==null){var i=Vt();Rn(r,t,1,i)}}),Ag(t,1)}};Qm=function(t){if(t.tag===13){var e=gr(t,134217728);if(e!==null){var n=Vt();Rn(e,t,134217728,n)}Ag(t,134217728)}};CI=function(t){if(t.tag===13){var e=Qr(t),n=gr(t,e);if(n!==null){var r=Vt();Rn(n,t,e,r)}Ag(t,e)}};AI=function(){return me};bI=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};up=function(t,e,n){switch(e){case"input":if(tp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=wh(r);if(!i)throw Error(A(90));sI(r),tp(r,i)}}}break;case"textarea":aI(t,n);break;case"select":e=n.value,e!=null&&Gs(t,!!n.multiple,e,!1)}};pI=Eg;mI=Zi;var vx={usingClientEntryPoint:!1,Events:[$u,$s,wh,dI,fI,Eg]},na={findFiberByHostInstance:Oi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},wx={bundleType:na.bundleType,version:na.version,rendererPackageName:na.rendererPackageName,rendererConfig:na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_r.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vI(t),t===null?null:t.stateNode},findFiberByHostInstance:na.findFiberByHostInstance||gx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{mh=Al.inject(wx),Gn=Al}catch{}}fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vx;fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xg(e))throw Error(A(200));return mx(t,e,null,n)};fn.createRoot=function(t,e){if(!xg(t))throw Error(A(299));var n=!1,r="",i=X_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Cg(t,1,!1,null,null,n,!1,r,i),t[mr]=e.current,Xa(t.nodeType===8?t.parentNode:t),new bg(e)};fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(A(188)):(t=Object.keys(t).join(","),Error(A(268,t)));return t=vI(e),t=t===null?null:t.stateNode,t};fn.flushSync=function(t){return Zi(t)};fn.hydrate=function(t,e,n){if(!bh(e))throw Error(A(200));return xh(null,t,e,!0,n)};fn.hydrateRoot=function(t,e,n){if(!xg(t))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=X_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Y_(e,null,t,1,n??null,i,!1,s,o),t[mr]=e.current,Xa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ah(e)};fn.render=function(t,e,n){if(!bh(e))throw Error(A(200));return xh(null,t,e,!1,n)};fn.unmountComponentAtNode=function(t){if(!bh(t))throw Error(A(40));return t._reactRootContainer?(Zi(function(){xh(null,null,t,!1,function(){t._reactRootContainer=null,t[mr]=null})}),!0):!1};fn.unstable_batchedUpdates=Eg;fn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!bh(n))throw Error(A(200));if(t==null||t._reactInternals===void 0)throw Error(A(38));return xh(t,e,n,!1,r)};fn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=fn})(gA);var Lw=Hf;Gf.createRoot=Lw.createRoot,Gf.hydrateRoot=Lw.hydrateRoot;var $c={},Ix={get exports(){return $c},set exports(t){$c=t}},ge={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng=Symbol.for("react.element"),Dg=Symbol.for("react.portal"),Nh=Symbol.for("react.fragment"),Dh=Symbol.for("react.strict_mode"),Rh=Symbol.for("react.profiler"),Ph=Symbol.for("react.provider"),Oh=Symbol.for("react.context"),_x=Symbol.for("react.server_context"),Lh=Symbol.for("react.forward_ref"),$h=Symbol.for("react.suspense"),Mh=Symbol.for("react.suspense_list"),Fh=Symbol.for("react.memo"),Uh=Symbol.for("react.lazy"),Ex=Symbol.for("react.offscreen"),J_;J_=Symbol.for("react.module.reference");function Tn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Ng:switch(t=t.type,t){case Nh:case Rh:case Dh:case $h:case Mh:return t;default:switch(t=t&&t.$$typeof,t){case _x:case Oh:case Lh:case Uh:case Fh:case Ph:return t;default:return e}}case Dg:return e}}}ge.ContextConsumer=Oh;ge.ContextProvider=Ph;ge.Element=Ng;ge.ForwardRef=Lh;ge.Fragment=Nh;ge.Lazy=Uh;ge.Memo=Fh;ge.Portal=Dg;ge.Profiler=Rh;ge.StrictMode=Dh;ge.Suspense=$h;ge.SuspenseList=Mh;ge.isAsyncMode=function(){return!1};ge.isConcurrentMode=function(){return!1};ge.isContextConsumer=function(t){return Tn(t)===Oh};ge.isContextProvider=function(t){return Tn(t)===Ph};ge.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ng};ge.isForwardRef=function(t){return Tn(t)===Lh};ge.isFragment=function(t){return Tn(t)===Nh};ge.isLazy=function(t){return Tn(t)===Uh};ge.isMemo=function(t){return Tn(t)===Fh};ge.isPortal=function(t){return Tn(t)===Dg};ge.isProfiler=function(t){return Tn(t)===Rh};ge.isStrictMode=function(t){return Tn(t)===Dh};ge.isSuspense=function(t){return Tn(t)===$h};ge.isSuspenseList=function(t){return Tn(t)===Mh};ge.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Nh||t===Rh||t===Dh||t===$h||t===Mh||t===Ex||typeof t=="object"&&t!==null&&(t.$$typeof===Uh||t.$$typeof===Fh||t.$$typeof===Ph||t.$$typeof===Oh||t.$$typeof===Lh||t.$$typeof===J_||t.getModuleId!==void 0)};ge.typeOf=Tn;(function(t){t.exports=ge})(Ix);function Sx(t){function e(O,M,U,Q,I){for(var ie=0,P=0,Oe=0,he=0,fe,ee,pt=0,Wt=0,ce,bt=ce=fe=0,de=0,mt=0,Ho=0,gt=0,cl=U.length,Ko=cl-1,kn,X="",Be="",Wd="",Gd="",Ar;de<cl;){if(ee=U.charCodeAt(de),de===Ko&&P+he+Oe+ie!==0&&(P!==0&&(ee=P===47?10:47),he=Oe=ie=0,cl++,Ko++),P+he+Oe+ie===0){if(de===Ko&&(0<mt&&(X=X.replace(d,"")),0<X.trim().length)){switch(ee){case 32:case 9:case 59:case 13:case 10:break;default:X+=U.charAt(de)}ee=59}switch(ee){case 123:for(X=X.trim(),fe=X.charCodeAt(0),ce=1,gt=++de;de<cl;){switch(ee=U.charCodeAt(de)){case 123:ce++;break;case 125:ce--;break;case 47:switch(ee=U.charCodeAt(de+1)){case 42:case 47:e:{for(bt=de+1;bt<Ko;++bt)switch(U.charCodeAt(bt)){case 47:if(ee===42&&U.charCodeAt(bt-1)===42&&de+2!==bt){de=bt+1;break e}break;case 10:if(ee===47){de=bt+1;break e}}de=bt}}break;case 91:ee++;case 40:ee++;case 34:case 39:for(;de++<Ko&&U.charCodeAt(de)!==ee;);}if(ce===0)break;de++}switch(ce=U.substring(gt,de),fe===0&&(fe=(X=X.replace(h,"").trim()).charCodeAt(0)),fe){case 64:switch(0<mt&&(X=X.replace(d,"")),ee=X.charCodeAt(1),ee){case 100:case 109:case 115:case 45:mt=M;break;default:mt=nr}if(ce=e(M,mt,ce,ee,I+1),gt=ce.length,0<R&&(mt=n(nr,X,Ho),Ar=a(3,ce,mt,M,ft,Ke,gt,ee,I,Q),X=mt.join(""),Ar!==void 0&&(gt=(ce=Ar.trim()).length)===0&&(ee=0,ce="")),0<gt)switch(ee){case 115:X=X.replace(b,o);case 100:case 109:case 45:ce=X+"{"+ce+"}";break;case 107:X=X.replace(f,"$1 $2"),ce=X+"{"+ce+"}",ce=At===1||At===2&&s("@"+ce,3)?"@-webkit-"+ce+"@"+ce:"@"+ce;break;default:ce=X+ce,Q===112&&(ce=(Be+=ce,""))}else ce="";break;default:ce=e(M,n(M,X,Ho),ce,Q,I+1)}Wd+=ce,ce=Ho=mt=bt=fe=0,X="",ee=U.charCodeAt(++de);break;case 125:case 59:if(X=(0<mt?X.replace(d,""):X).trim(),1<(gt=X.length))switch(bt===0&&(fe=X.charCodeAt(0),fe===45||96<fe&&123>fe)&&(gt=(X=X.replace(" ",":")).length),0<R&&(Ar=a(1,X,M,O,ft,Ke,Be.length,Q,I,Q))!==void 0&&(gt=(X=Ar.trim()).length)===0&&(X="\0\0"),fe=X.charCodeAt(0),ee=X.charCodeAt(1),fe){case 0:break;case 64:if(ee===105||ee===99){Gd+=X+U.charAt(de);break}default:X.charCodeAt(gt-1)!==58&&(Be+=i(X,fe,ee,X.charCodeAt(2)))}Ho=mt=bt=fe=0,X="",ee=U.charCodeAt(++de)}}switch(ee){case 13:case 10:P===47?P=0:1+fe===0&&Q!==107&&0<X.length&&(mt=1,X+="\0"),0<R*K&&a(0,X,M,O,ft,Ke,Be.length,Q,I,Q),Ke=1,ft++;break;case 59:case 125:if(P+he+Oe+ie===0){Ke++;break}default:switch(Ke++,kn=U.charAt(de),ee){case 9:case 32:if(he+ie+P===0)switch(pt){case 44:case 58:case 9:case 32:kn="";break;default:ee!==32&&(kn=" ")}break;case 0:kn="\\0";break;case 12:kn="\\f";break;case 11:kn="\\v";break;case 38:he+P+ie===0&&(mt=Ho=1,kn="\f"+kn);break;case 108:if(he+P+ie+nn===0&&0<bt)switch(de-bt){case 2:pt===112&&U.charCodeAt(de-3)===58&&(nn=pt);case 8:Wt===111&&(nn=Wt)}break;case 58:he+P+ie===0&&(bt=de);break;case 44:P+Oe+he+ie===0&&(mt=1,kn+="\r");break;case 34:case 39:P===0&&(he=he===ee?0:he===0?ee:he);break;case 91:he+P+Oe===0&&ie++;break;case 93:he+P+Oe===0&&ie--;break;case 41:he+P+ie===0&&Oe--;break;case 40:if(he+P+ie===0){if(fe===0)switch(2*pt+3*Wt){case 533:break;default:fe=1}Oe++}break;case 64:P+Oe+he+ie+bt+ce===0&&(ce=1);break;case 42:case 47:if(!(0<he+ie+Oe))switch(P){case 0:switch(2*ee+3*U.charCodeAt(de+1)){case 235:P=47;break;case 220:gt=de,P=42}break;case 42:ee===47&&pt===42&&gt+2!==de&&(U.charCodeAt(gt+2)===33&&(Be+=U.substring(gt,de+1)),kn="",P=0)}}P===0&&(X+=kn)}Wt=pt,pt=ee,de++}if(gt=Be.length,0<gt){if(mt=M,0<R&&(Ar=a(2,Be,mt,O,ft,Ke,gt,Q,I,Q),Ar!==void 0&&(Be=Ar).length===0))return Gd+Be+Wd;if(Be=mt.join(",")+"{"+Be+"}",At*nn!==0){switch(At!==2||s(Be,2)||(nn=0),nn){case 111:Be=Be.replace(_,":-moz-$1")+Be;break;case 112:Be=Be.replace(g,"::-webkit-input-$1")+Be.replace(g,"::-moz-$1")+Be.replace(g,":-ms-input-$1")+Be}nn=0}}return Gd+Be+Wd}function n(O,M,U){var Q=M.trim().split(S);M=Q;var I=Q.length,ie=O.length;switch(ie){case 0:case 1:var P=0;for(O=ie===0?"":O[0]+" ";P<I;++P)M[P]=r(O,M[P],U).trim();break;default:var Oe=P=0;for(M=[];P<I;++P)for(var he=0;he<ie;++he)M[Oe++]=r(O[he]+" ",Q[P],U).trim()}return M}function r(O,M,U){var Q=M.charCodeAt(0);switch(33>Q&&(Q=(M=M.trim()).charCodeAt(0)),Q){case 38:return M.replace(m,"$1"+O.trim());case 58:return O.trim()+M.replace(m,"$1"+O.trim());default:if(0<1*U&&0<M.indexOf("\f"))return M.replace(m,(O.charCodeAt(0)===58?"":"$1")+O.trim())}return O+M}function i(O,M,U,Q){var I=O+";",ie=2*M+3*U+4*Q;if(ie===944){O=I.indexOf(":",9)+1;var P=I.substring(O,I.length-1).trim();return P=I.substring(0,O).trim()+P+";",At===1||At===2&&s(P,1)?"-webkit-"+P+P:P}if(At===0||At===2&&!s(I,1))return I;switch(ie){case 1015:return I.charCodeAt(10)===97?"-webkit-"+I+I:I;case 951:return I.charCodeAt(3)===116?"-webkit-"+I+I:I;case 963:return I.charCodeAt(5)===110?"-webkit-"+I+I:I;case 1009:if(I.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+I+I;case 978:return"-webkit-"+I+"-moz-"+I+I;case 1019:case 983:return"-webkit-"+I+"-moz-"+I+"-ms-"+I+I;case 883:if(I.charCodeAt(8)===45)return"-webkit-"+I+I;if(0<I.indexOf("image-set(",11))return I.replace(et,"$1-webkit-$2")+I;break;case 932:if(I.charCodeAt(4)===45)switch(I.charCodeAt(5)){case 103:return"-webkit-box-"+I.replace("-grow","")+"-webkit-"+I+"-ms-"+I.replace("grow","positive")+I;case 115:return"-webkit-"+I+"-ms-"+I.replace("shrink","negative")+I;case 98:return"-webkit-"+I+"-ms-"+I.replace("basis","preferred-size")+I}return"-webkit-"+I+"-ms-"+I+I;case 964:return"-webkit-"+I+"-ms-flex-"+I+I;case 1023:if(I.charCodeAt(8)!==99)break;return P=I.substring(I.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+P+"-webkit-"+I+"-ms-flex-pack"+P+I;case 1005:return y.test(I)?I.replace(p,":-webkit-")+I.replace(p,":-moz-")+I:I;case 1e3:switch(P=I.substring(13).trim(),M=P.indexOf("-")+1,P.charCodeAt(0)+P.charCodeAt(M)){case 226:P=I.replace(T,"tb");break;case 232:P=I.replace(T,"tb-rl");break;case 220:P=I.replace(T,"lr");break;default:return I}return"-webkit-"+I+"-ms-"+P+I;case 1017:if(I.indexOf("sticky",9)===-1)break;case 975:switch(M=(I=O).length-10,P=(I.charCodeAt(M)===33?I.substring(0,M):I).substring(O.indexOf(":",7)+1).trim(),ie=P.charCodeAt(0)+(P.charCodeAt(7)|0)){case 203:if(111>P.charCodeAt(8))break;case 115:I=I.replace(P,"-webkit-"+P)+";"+I;break;case 207:case 102:I=I.replace(P,"-webkit-"+(102<ie?"inline-":"")+"box")+";"+I.replace(P,"-webkit-"+P)+";"+I.replace(P,"-ms-"+P+"box")+";"+I}return I+";";case 938:if(I.charCodeAt(5)===45)switch(I.charCodeAt(6)){case 105:return P=I.replace("-items",""),"-webkit-"+I+"-webkit-box-"+P+"-ms-flex-"+P+I;case 115:return"-webkit-"+I+"-ms-flex-item-"+I.replace($,"")+I;default:return"-webkit-"+I+"-ms-flex-line-pack"+I.replace("align-content","").replace($,"")+I}break;case 973:case 989:if(I.charCodeAt(3)!==45||I.charCodeAt(4)===122)break;case 931:case 953:if(G.test(O)===!0)return(P=O.substring(O.indexOf(":")+1)).charCodeAt(0)===115?i(O.replace("stretch","fill-available"),M,U,Q).replace(":fill-available",":stretch"):I.replace(P,"-webkit-"+P)+I.replace(P,"-moz-"+P.replace("fill-",""))+I;break;case 962:if(I="-webkit-"+I+(I.charCodeAt(5)===102?"-ms-"+I:"")+I,U+Q===211&&I.charCodeAt(13)===105&&0<I.indexOf("transform",10))return I.substring(0,I.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+I}return I}function s(O,M){var U=O.indexOf(M===1?":":"{"),Q=O.substring(0,M!==3?U:10);return U=O.substring(U+1,O.length-1),W(M!==2?Q:Q.replace(te,"$1"),U,M)}function o(O,M){var U=i(M,M.charCodeAt(0),M.charCodeAt(1),M.charCodeAt(2));return U!==M+";"?U.replace(N," or ($1)").substring(4):"("+M+")"}function a(O,M,U,Q,I,ie,P,Oe,he,fe){for(var ee=0,pt=M,Wt;ee<R;++ee)switch(Wt=Lt[ee].call(c,O,pt,U,Q,I,ie,P,Oe,he,fe)){case void 0:case!1:case!0:case null:break;default:pt=Wt}if(pt!==M)return pt}function u(O){switch(O){case void 0:case null:R=Lt.length=0;break;default:if(typeof O=="function")Lt[R++]=O;else if(typeof O=="object")for(var M=0,U=O.length;M<U;++M)u(O[M]);else K=!!O|0}return u}function l(O){return O=O.prefix,O!==void 0&&(W=null,O?typeof O!="function"?At=1:(At=2,W=O):At=0),l}function c(O,M){var U=O;if(33>U.charCodeAt(0)&&(U=U.trim()),we=U,U=[we],0<R){var Q=a(-1,M,U,U,ft,Ke,0,0,0,0);Q!==void 0&&typeof Q=="string"&&(M=Q)}var I=e(nr,U,M,0,0);return 0<R&&(Q=a(-2,I,U,U,ft,Ke,I.length,0,0,0),Q!==void 0&&(I=Q)),we="",nn=0,Ke=ft=1,I}var h=/^\0+/g,d=/[\0\r\f]/g,p=/: */g,y=/zoo|gra/,v=/([,: ])(transform)/g,S=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,_=/:(read-only)/g,T=/[svh]\w+-[tblr]{2}/,b=/\(\s*(.*)\s*\)/g,N=/([\s\S]*?);/g,$=/-self|flex-/g,te=/[^]*?(:[rp][el]a[\w-]+)[^]*/,G=/stretch|:\s*\w+\-(?:conte|avail)/,et=/([^-])(image-set\()/,Ke=1,ft=1,nn=0,At=1,nr=[],Lt=[],R=0,W=null,K=0,we="";return c.use=u,c.set=l,t!==void 0&&l(t),c}var Tx={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function kx(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var Cx=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,$w=kx(function(t){return Cx.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),Bp={},Ax={get exports(){return Bp},set exports(t){Bp=t}},ye={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lt=typeof Symbol=="function"&&Symbol.for,Rg=lt?Symbol.for("react.element"):60103,Pg=lt?Symbol.for("react.portal"):60106,Vh=lt?Symbol.for("react.fragment"):60107,Bh=lt?Symbol.for("react.strict_mode"):60108,zh=lt?Symbol.for("react.profiler"):60114,jh=lt?Symbol.for("react.provider"):60109,qh=lt?Symbol.for("react.context"):60110,Og=lt?Symbol.for("react.async_mode"):60111,Wh=lt?Symbol.for("react.concurrent_mode"):60111,Gh=lt?Symbol.for("react.forward_ref"):60112,Hh=lt?Symbol.for("react.suspense"):60113,bx=lt?Symbol.for("react.suspense_list"):60120,Kh=lt?Symbol.for("react.memo"):60115,Qh=lt?Symbol.for("react.lazy"):60116,xx=lt?Symbol.for("react.block"):60121,Nx=lt?Symbol.for("react.fundamental"):60117,Dx=lt?Symbol.for("react.responder"):60118,Rx=lt?Symbol.for("react.scope"):60119;function mn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Rg:switch(t=t.type,t){case Og:case Wh:case Vh:case zh:case Bh:case Hh:return t;default:switch(t=t&&t.$$typeof,t){case qh:case Gh:case Qh:case Kh:case jh:return t;default:return e}}case Pg:return e}}}function Z_(t){return mn(t)===Wh}ye.AsyncMode=Og;ye.ConcurrentMode=Wh;ye.ContextConsumer=qh;ye.ContextProvider=jh;ye.Element=Rg;ye.ForwardRef=Gh;ye.Fragment=Vh;ye.Lazy=Qh;ye.Memo=Kh;ye.Portal=Pg;ye.Profiler=zh;ye.StrictMode=Bh;ye.Suspense=Hh;ye.isAsyncMode=function(t){return Z_(t)||mn(t)===Og};ye.isConcurrentMode=Z_;ye.isContextConsumer=function(t){return mn(t)===qh};ye.isContextProvider=function(t){return mn(t)===jh};ye.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Rg};ye.isForwardRef=function(t){return mn(t)===Gh};ye.isFragment=function(t){return mn(t)===Vh};ye.isLazy=function(t){return mn(t)===Qh};ye.isMemo=function(t){return mn(t)===Kh};ye.isPortal=function(t){return mn(t)===Pg};ye.isProfiler=function(t){return mn(t)===zh};ye.isStrictMode=function(t){return mn(t)===Bh};ye.isSuspense=function(t){return mn(t)===Hh};ye.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Vh||t===Wh||t===zh||t===Bh||t===Hh||t===bx||typeof t=="object"&&t!==null&&(t.$$typeof===Qh||t.$$typeof===Kh||t.$$typeof===jh||t.$$typeof===qh||t.$$typeof===Gh||t.$$typeof===Nx||t.$$typeof===Dx||t.$$typeof===Rx||t.$$typeof===xx)};ye.typeOf=mn;(function(t){t.exports=ye})(Ax);var Lg=Bp,Px={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ox={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Lx={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},eE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$g={};$g[Lg.ForwardRef]=Lx;$g[Lg.Memo]=eE;function Mw(t){return Lg.isMemo(t)?eE:$g[t.$$typeof]||Px}var $x=Object.defineProperty,Mx=Object.getOwnPropertyNames,Fw=Object.getOwnPropertySymbols,Fx=Object.getOwnPropertyDescriptor,Ux=Object.getPrototypeOf,Uw=Object.prototype;function tE(t,e,n){if(typeof e!="string"){if(Uw){var r=Ux(e);r&&r!==Uw&&tE(t,r,n)}var i=Mx(e);Fw&&(i=i.concat(Fw(e)));for(var s=Mw(t),o=Mw(e),a=0;a<i.length;++a){var u=i[a];if(!Ox[u]&&!(n&&n[u])&&!(o&&o[u])&&!(s&&s[u])){var l=Fx(e,u);try{$x(t,u,l)}catch{}}}}return t}var Vx=tE;function ar(){return(ar=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var Vw=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},zp=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!$c.typeOf(t)},Mc=Object.freeze([]),Xr=Object.freeze({});function ou(t){return typeof t=="function"}function Bw(t){return t.displayName||t.name||"Component"}function Mg(t){return t&&typeof t.styledComponentId=="string"}var co=typeof process<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Fg=typeof window<"u"&&"HTMLElement"in window,Bx=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1);function Fu(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var zx=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Fu(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var u=this.indexOfGroup(n+1),l=0,c=r.length;l<c;l++)this.tag.insertRule(u,r[l])&&(this.groupSizes[n]++,u++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),ec=new Map,Fc=new Map,Ra=1,bl=function(t){if(ec.has(t))return ec.get(t);for(;Fc.has(Ra);)Ra++;var e=Ra++;return ec.set(t,e),Fc.set(e,t),e},jx=function(t){return Fc.get(t)},qx=function(t,e){e>=Ra&&(Ra=e+1),ec.set(t,e),Fc.set(e,t)},Wx="style["+co+'][data-styled-version="5.3.6"]',Gx=new RegExp("^"+co+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Hx=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},Kx=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(Gx);if(a){var u=0|parseInt(a[1],10),l=a[2];u!==0&&(qx(l,u),Hx(t,l,a[3]),t.getTag().insertRules(u,r)),r.length=0}else r.push(o)}}},Qx=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},nE=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var u=a.childNodes,l=u.length;l>=0;l--){var c=u[l];if(c&&c.nodeType===1&&c.hasAttribute(co))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(co,"active"),r.setAttribute("data-styled-version","5.3.6");var o=Qx();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},Yx=function(){function t(n){var r=this.element=nE(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var u=s[o];if(u.ownerNode===i)return u}Fu(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),Xx=function(){function t(n){var r=this.element=nE(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),Jx=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),zw=Fg,Zx={isServer:!Fg,useCSSOMInjection:!Bx},rE=function(){function t(n,r,i){n===void 0&&(n=Xr),r===void 0&&(r={}),this.options=ar({},Zx,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Fg&&zw&&(zw=!1,function(s){for(var o=document.querySelectorAll(Wx),a=0,u=o.length;a<u;a++){var l=o[a];l&&l.getAttribute(co)!=="active"&&(Kx(s,l),l.parentNode&&l.parentNode.removeChild(l))}}(this))}t.registerId=function(n){return bl(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(ar({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new Jx(o):s?new Yx(o):new Xx(o),new zx(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(bl(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(bl(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(bl(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=jx(o);if(a!==void 0){var u=n.names.get(a),l=r.getGroup(o);if(u&&l&&u.size){var c=co+".g"+o+'[id="'+a+'"]',h="";u!==void 0&&u.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+l+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),eN=/(a)(d)/gi,jw=function(t){return String.fromCharCode(t+(t>25?39:97))};function jp(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=jw(e%52)+n;return(jw(e%52)+n).replace(eN,"$1-$2")}var js=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},iE=function(t){return js(5381,t)};function tN(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ou(n)&&!Mg(n))return!1}return!0}var nN=iE("5.3.6"),rN=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&tN(e),this.componentId=n,this.baseHash=js(nN,n),this.baseStyle=r,rE.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=ho(this.rules,e,n,r).join(""),a=jp(js(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var u=r(o,"."+a,void 0,i);n.insertRules(i,a,u)}s.push(a),this.staticRulesId=a}else{for(var l=this.rules.length,c=js(this.baseHash,r.hash),h="",d=0;d<l;d++){var p=this.rules[d];if(typeof p=="string")h+=p;else if(p){var y=ho(p,e,n,r),v=Array.isArray(y)?y.join(""):y;c=js(c,v+d),h+=v}}if(h){var S=jp(c>>>0);if(!n.hasNameForId(i,S)){var m=r(h,"."+S,void 0,i);n.insertRules(i,S,m)}s.push(S)}}return s.join(" ")},t}(),iN=/^\s*\/\/.*$/gm,sN=[":","[",".","#"];function oN(t){var e,n,r,i,s=t===void 0?Xr:t,o=s.options,a=o===void 0?Xr:o,u=s.plugins,l=u===void 0?Mc:u,c=new Sx(a),h=[],d=function(v){function S(m){if(m)try{v(m+"}")}catch{}}return function(m,f,g,_,T,b,N,$,te,G){switch(m){case 1:if(te===0&&f.charCodeAt(0)===64)return v(f+";"),"";break;case 2:if($===0)return f+"/*|*/";break;case 3:switch($){case 102:case 112:return v(g[0]+f),"";default:return f+(G===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(S)}}}(function(v){h.push(v)}),p=function(v,S,m){return S===0&&sN.indexOf(m[n.length])!==-1||m.match(i)?v:"."+e};function y(v,S,m,f){f===void 0&&(f="&");var g=v.replace(iN,""),_=S&&m?m+" "+S+" { "+g+" }":g;return e=f,n=S,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(m||!S?"":S,_)}return c.use([].concat(l,[function(v,S,m){v===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,p))},d,function(v){if(v===-2){var S=h;return h=[],S}}])),y.hash=l.length?l.reduce(function(v,S){return S.name||Fu(15),js(v,S.name)},5381).toString():"",y}var sE=ph.createContext();sE.Consumer;var oE=ph.createContext(),aN=(oE.Consumer,new rE),qp=oN();function uN(){return xe.useContext(sE)||aN}function lN(){return xe.useContext(oE)||qp}var cN=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=qp);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Fu(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=qp),this.name+e.hash},t}(),hN=/([A-Z])/,dN=/([A-Z])/g,fN=/^ms-/,pN=function(t){return"-"+t.toLowerCase()};function qw(t){return hN.test(t)?t.replace(dN,pN).replace(fN,"-ms-"):t}var Ww=function(t){return t==null||t===!1||t===""};function ho(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=ho(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(Ww(t))return"";if(Mg(t))return"."+t.styledComponentId;if(ou(t)){if(typeof(l=t)!="function"||l.prototype&&l.prototype.isReactComponent||!e)return t;var u=t(e);return ho(u,e,n,r)}var l;return t instanceof cN?n?(t.inject(n,r),t.getName(r)):t:zp(t)?function c(h,d){var p,y,v=[];for(var S in h)h.hasOwnProperty(S)&&!Ww(h[S])&&(Array.isArray(h[S])&&h[S].isCss||ou(h[S])?v.push(qw(S)+":",h[S],";"):zp(h[S])?v.push.apply(v,c(h[S],S)):v.push(qw(S)+": "+(p=S,(y=h[S])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||p in Tx?String(y).trim():y+"px")+";"));return d?[d+" {"].concat(v,["}"]):v}(t):t.toString()}var Gw=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function mN(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return ou(t)||zp(t)?Gw(ho(Vw(Mc,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:Gw(ho(Vw(t,n)))}var gN=function(t,e,n){return n===void 0&&(n=Xr),t.theme!==n.theme&&t.theme||e||n.theme},yN=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,vN=/(^-|-$)/g;function If(t){return t.replace(yN,"-").replace(vN,"")}var wN=function(t){return jp(iE(t)>>>0)};function xl(t){return typeof t=="string"&&!0}var Wp=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},IN=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function _N(t,e,n){var r=t[n];Wp(e)&&Wp(r)?aE(r,e):t[n]=e}function aE(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(Wp(o))for(var a in o)IN(a)&&_N(t,o[a],a)}return t}var uE=ph.createContext();uE.Consumer;var _f={};function lE(t,e,n){var r=Mg(t),i=!xl(t),s=e.attrs,o=s===void 0?Mc:s,a=e.componentId,u=a===void 0?function(f,g){var _=typeof f!="string"?"sc":If(f);_f[_]=(_f[_]||0)+1;var T=_+"-"+wN("5.3.6"+_+_f[_]);return g?g+"-"+T:T}(e.displayName,e.parentComponentId):a,l=e.displayName,c=l===void 0?function(f){return xl(f)?"styled."+f:"Styled("+Bw(f)+")"}(t):l,h=e.displayName&&e.componentId?If(e.displayName)+"-"+e.componentId:e.componentId||u,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,p=e.shouldForwardProp;r&&t.shouldForwardProp&&(p=e.shouldForwardProp?function(f,g,_){return t.shouldForwardProp(f,g,_)&&e.shouldForwardProp(f,g,_)}:t.shouldForwardProp);var y,v=new rN(n,h,r?t.componentStyle:void 0),S=v.isStatic&&o.length===0,m=function(f,g){return function(_,T,b,N){var $=_.attrs,te=_.componentStyle,G=_.defaultProps,et=_.foldedComponentIds,Ke=_.shouldForwardProp,ft=_.styledComponentId,nn=_.target,At=function(Q,I,ie){Q===void 0&&(Q=Xr);var P=ar({},I,{theme:Q}),Oe={};return ie.forEach(function(he){var fe,ee,pt,Wt=he;for(fe in ou(Wt)&&(Wt=Wt(P)),Wt)P[fe]=Oe[fe]=fe==="className"?(ee=Oe[fe],pt=Wt[fe],ee&&pt?ee+" "+pt:ee||pt):Wt[fe]}),[P,Oe]}(gN(T,xe.useContext(uE),G)||Xr,T,$),nr=At[0],Lt=At[1],R=function(Q,I,ie,P){var Oe=uN(),he=lN(),fe=I?Q.generateAndInjectStyles(Xr,Oe,he):Q.generateAndInjectStyles(ie,Oe,he);return fe}(te,N,nr),W=b,K=Lt.$as||T.$as||Lt.as||T.as||nn,we=xl(K),O=Lt!==T?ar({},T,{},Lt):T,M={};for(var U in O)U[0]!=="$"&&U!=="as"&&(U==="forwardedAs"?M.as=O[U]:(Ke?Ke(U,$w,K):!we||$w(U))&&(M[U]=O[U]));return T.style&&Lt.style!==T.style&&(M.style=ar({},T.style,{},Lt.style)),M.className=Array.prototype.concat(et,ft,R!==ft?R:null,T.className,Lt.className).filter(Boolean).join(" "),M.ref=W,xe.createElement(K,M)}(y,f,g,S)};return m.displayName=c,(y=ph.forwardRef(m)).attrs=d,y.componentStyle=v,y.displayName=c,y.shouldForwardProp=p,y.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Mc,y.styledComponentId=h,y.target=r?t.target:t,y.withComponent=function(f){var g=e.componentId,_=function(b,N){if(b==null)return{};var $,te,G={},et=Object.keys(b);for(te=0;te<et.length;te++)$=et[te],N.indexOf($)>=0||(G[$]=b[$]);return G}(e,["componentId"]),T=g&&g+"-"+(xl(f)?f:If(Bw(f)));return lE(f,ar({},_,{attrs:d,componentId:T}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?aE({},t.defaultProps,f):f}}),y.toString=function(){return"."+y.styledComponentId},i&&Vx(y,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var Gp=function(t){return function e(n,r,i){if(i===void 0&&(i=Xr),!$c.isValidElementType(r))return Fu(1,String(r));var s=function(){return n(r,i,mN.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,ar({},i,{},o))},s.attrs=function(o){return e(n,r,ar({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(lE,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){Gp[t]=Gp(t)});const Ve=Gp,EN=Ve.div``,SN=Ve.div`
    background-color: darkblue;
    height: 250px;
    text-align: center;
`,TN=Ve.div`
    margin: 0;
    padding: 0;
    color: #FFF;
    padding-top: 30px;

    h1 {
        font-size: 58px;
        cursor: none;
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
        padding: 0;
        color: transparent;
        text-transform: uppercase;
    }

    h1 span:nth-child(1) {
        position: absolute;
        top: 0;
        left: 0;
        color: #FFF;
        transition: .5s;
        clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
        overflow: hidden;
    }

    h1:hover span:nth-child(1) {
        transform: translateY(-16px);
    }

    h1 span:nth-child(2) {
        position: absolute;
        top: 0;
        left: 0;
        color: #FFF;
        transition: .5s;
        clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
        overflow: hidden;
    }

    h1:hover span:nth-child(2) {
        transform: translateY(16px);
    }

    h1 span:nth-child(3) {
        position: absolute;
        top: 50%;
        left: 0;
        color: #000;
        transform: translateY(-50%) scaleY(0);
        width: 100%;
        background-color: #25CD89;
        font-size: 10px;
        font-weight: bold;
        letter-spacing: .7em;
        text-align: center;
        transition: .5s;
    }

    h1:hover span:nth-child(3) {
        transform: translateY(-50%) scaleY(1);
    }
`,kN=Ve.div`
    margin: auto;
    max-width: 980px;
    margin-bottom: 50px;
`,tc={food:{title:"Alimentação",color:"blue",expense:!0},rent:{title:"Aluguel",color:"brown",expense:!0},salary:{title:"Salário",color:"green",expense:!1},entertainment:{title:"Diversão",color:"yellow",expense:!0},extra:{title:"Extra",color:"#0B6",expense:!1},debt:{title:"Dívida",color:"#1C1",expense:!1},bribery:{title:"Suborno",color:"#F00",expense:!0},loan:{title:"Dívida",color:"#D50",expense:!0}},CN=()=>{let t=new Date;return`${t.getFullYear()}-${t.getMonth()+1}`},AN=(t,e)=>{let n=[],[r,i]=e.split("-");for(let s in t)t[s].date.getFullYear()===parseInt(r)&&t[s].date.getMonth()+1===parseInt(i)&&n.push(t[s]);return n},cE=t=>{let e=t.getFullYear(),n=t.getMonth()+1,r=t.getDate();return`${Hw(r)}-${Hw(n)}-${e}`},Hw=t=>t<10?`0${t}`:`${t}`,bN=t=>{let[e,n]=t.split("-");return`${["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][parseInt(n)-1]} de ${e}`},xN=t=>{let[e,n,r]=t.split("-");return`${r}-${n}-${e}`},NN=t=>{let[e,n,r]=t.split("-");return new Date(parseInt(e),parseInt(n)-1,parseInt(r))},DN=Ve.tr``,Nl=Ve.td`
    padding: 10px 0;
`,RN=Ve.div`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #FFF;
    background-color: ${t=>t.color};
`,PN=Ve.div`
    color: ${t=>t.color};
`,ON=({item:t})=>it(DN,{children:[H(Nl,{children:cE(t.date)}),H(Nl,{children:H(RN,{color:tc[t.category].color,children:tc[t.category].title})}),H(Nl,{children:t.title}),H(Nl,{children:it(PN,{color:tc[t.category].expense?"red":"green",children:[t.value," kz"]})})]}),LN=Ve.table`
    width: 100%;
    background-color: #FFF;
    padding: 20px;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    margin-top: 20px;

    &:hover {
        box-shadow: 0px 0px 10px #ABC;
    }
`,Dl=Ve.th`
    width: ${t=>t.width?`${t.width}px`:"auto"};
    padding: 10px 0;
    text-align: left;
`,$N=({list:t})=>it(LN,{children:[H("thead",{children:it("tr",{children:[H(Dl,{width:100,children:"Data"}),H(Dl,{width:130,children:"Categoria"}),H(Dl,{children:"Título"}),H(Dl,{width:150,children:"Valor"})]})}),H("tbody",{children:t.map((e,n)=>H(ON,{item:e},n))})]}),MN=Ve.div`
    flex: 1;
`,FN=Ve.div`
    text-align: center;
    font-weight: bold;
    color: #888;
    margin-bottom: 5px;
`,UN=Ve.div`
    text-align: center;
    font-weight: bold;
    color: ${t=>t.color??"#000"};
`,Ef=({title:t,value:e,color:n})=>it(MN,{children:[H(FN,{children:t}),it(UN,{color:n,children:["$ ",e]})]}),VN=Ve.div`
    background-color: #FFF;
    border-radius: 10px;
    box-shadow: 0px 0px 5px #CCC;
    padding: 20px;
    margin-top: -40px;
    display: flex;
    align-items: center;
`,BN=Ve.div`
    flex: 1;
    display: flex;
    align-items: center;
`,Kw=Ve.div`
    width: 40px;
    text-align: center;
    font-size: 25px;
    cursor: pointer;
`,zN=Ve.div`
    flex: 1;
    text-align: center;
`,jN=Ve.div`
    flex: 2;
    display: flex;
`,qN=({month:t,onMonthChange:e,income:n,expense:r})=>{const i=()=>{let[o,a]=t.split("-"),u=new Date(parseInt(o),parseInt(a)-1,1);u.setMonth(u.getMonth()-1),e(`${u.getFullYear()}-${u.getMonth()+1}`)},s=()=>{let[o,a]=t.split("-"),u=new Date(parseInt(o),parseInt(a)-1,1);u.setMonth(u.getMonth()+1),e(`${u.getFullYear()}-${u.getMonth()+1}`)};return it(VN,{children:[it(BN,{children:[H(Kw,{onClick:i,children:"⬅️"}),H(zN,{children:bN(t)}),H(Kw,{onClick:s,children:"➡️"})]}),it(jN,{children:[H(Ef,{title:"Receitas",value:n}),H(Ef,{title:"Despesas",value:r}),H(Ef,{title:"Lucros",value:n-r,color:n-r<0?"red":"green"})]})]})},WN=Ve.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 30px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`,GN=Ve.div`
    height: 100%;
    width: 100%;

    select {
        width: 155px;
        height: 45px;
        border-radius: 10px;
        border: 2px solid #AAF;
        padding-left: 15px;
    }
`,Sf=Ve.div`
    height: 100%;
    width: 100%;

    input {
        width: 145px;
        height: 40px;
        border-radius: 10px;
        border: 2px solid #AAF;
        padding-left: 15px;
    }
`,HN=Ve.div`
    width: 80%;
    height: 45px;

    button {
        width: 100%;
        height: 100%;
        border-radius: 10px;

        ${t=>t.disabled?"":`
            background-color: darkblue;
            color: #FFF;
            cursor: pointer;
            transition: transform .5s;
            border: none;

            &:hover {
                transform: scale(1.05);
                font-size: 90%;
            }
        `}
    }
`,KN=({onAdd:t})=>{const e=Math.pow(10,9),[n,r]=xe.useState(Object),[i,s]=xe.useState(""),[o,a]=xe.useState(""),[u,l]=xe.useState(0),[c,h]=xe.useState(!0);xe.useEffect(()=>{(()=>{h(n===Object()||i===""||o===""||u===0||isNaN(u))})()},[i,n,o,u]);const d=()=>{if(n===Object()||i===""||o===""||u===0)return;t({date:n,category:i,title:o,value:u}),r(Object),s(""),a(""),l(0)},p=v=>{r(NN(v))},y=v=>{s(v)};return it(WN,{children:[it(Sf,{children:[H("h3",{children:"Data"}),H("input",{type:"date",onChange:v=>p(v.target.value),min:"2021-12-01",max:xN(cE(new Date)),required:!0})]}),it(GN,{children:[H("h3",{children:"Categoria"}),it("select",{name:"select",value:i,onChange:v=>y(v.target.value),required:!0,children:[H("option",{value:0,style:{display:"none",visibility:"hidden",paddingRight:"10px"},children:"Categoria"}),H("option",{value:"food",children:"Alimentação"}),H("option",{value:"rent",children:"Renda"}),H("option",{value:"salary",children:"Salário"}),H("option",{value:"entertainment",children:"Entretenimento"}),H("option",{value:"extra",children:"Extra"}),H("option",{value:"debt",children:"Dívida"}),H("option",{value:"bribery",children:"Suborno"}),H("option",{value:"loan",children:"Empréstimo"})]})]}),it(Sf,{children:[H("h3",{children:"Título"}),H("input",{type:"text",value:o,onChange:v=>a(v.target.value),required:!0})]}),it(Sf,{children:[H("h3",{children:"Valor"}),H("input",{type:"number",min:0,max:e,value:u,onChange:v=>l(parseInt(v.target.value)),required:!0})]}),H(HN,{disabled:c,children:H("button",{onClick:d,disabled:c,children:"Adicionar"})})]})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},QN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},dE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;u||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):QN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},YN=function(t){const e=hE(t);return dE.encodeByteArray(e,!0)},Uc=function(t){return YN(t).replace(/\./g,"")},fE=function(t){try{return dE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Vc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!XN(n)||(t[n]=Vc(t[n],e[n]));return t}function XN(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function JN(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function Ug(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ZN(){return typeof self=="object"&&self.self===self}function pE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mE(){const t=Pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function eD(){return!Ug()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function au(){try{return typeof indexedDB=="object"}catch{return!1}}function tD(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function nD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD=()=>nD().__FIREBASE_DEFAULTS__,iD=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sD=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fE(t[1]);return e&&JSON.parse(e)},gE=()=>{try{return rD()||iD()||sD()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},oD=()=>{var t;return(t=gE())===null||t===void 0?void 0:t.config},aD=t=>{var e;return(e=gE())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lD(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Uc(JSON.stringify(n)),Uc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cD="FirebaseError";class Bt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cD,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ms.prototype.create)}}class ms{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?hD(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Bt(i,a,r)}}function hD(t,e){return t.replace(dD,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const dD=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function fD(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hp(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Yw(s)&&Yw(o)){if(!Hp(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Yw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ya(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function yE(t,e){const n=new pD(t,e);return n.subscribe.bind(n)}class pD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");mD(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Tf),i.error===void 0&&(i.error=Tf),i.complete===void 0&&(i.complete=Tf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Tf(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t){return t&&t._delegate?t._delegate:t}class Jn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new uD;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vD(e))try{this.getOrInitializeService({instanceIdentifier:Ai})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ai){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ai){return this.instances.has(e)}getOptions(e=Ai){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yD(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ai){return this.component?this.component.multipleInstances?e:Ai:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yD(t){return t===Ai?void 0:t}function vD(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=[];var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const vE={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},ID=ae.INFO,_D={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},ED=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=_D[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yh{constructor(e){this.name=e,this._logLevel=ID,this._logHandler=ED,this._userLogHandler=null,Bg.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}function SD(t){Bg.forEach(e=>{e.setLogLevel(t)})}function TD(t,e){for(const n of Bg){let r=null;e&&e.level&&(r=vE[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r??i.logLevel)&&t({level:ae[s].toLowerCase(),message:a,args:o,type:i.name})}}}const kD=(t,e)=>e.some(n=>t instanceof n);let Xw,Jw;function CD(){return Xw||(Xw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AD(){return Jw||(Jw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wE=new WeakMap,Kp=new WeakMap,IE=new WeakMap,kf=new WeakMap,zg=new WeakMap;function bD(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Jr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wE.set(n,t)}).catch(()=>{}),zg.set(e,t),e}function xD(t){if(Kp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Kp.set(t,e)}let Qp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Kp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||IE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ND(t){Qp=t(Qp)}function DD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Cf(this),e,...n);return IE.set(r,e.sort?e.sort():[e]),Jr(r)}:AD().includes(t)?function(...e){return t.apply(Cf(this),e),Jr(wE.get(this))}:function(...e){return Jr(t.apply(Cf(this),e))}}function RD(t){return typeof t=="function"?DD(t):(t instanceof IDBTransaction&&xD(t),kD(t,CD())?new Proxy(t,Qp):t)}function Jr(t){if(t instanceof IDBRequest)return bD(t);if(kf.has(t))return kf.get(t);const e=RD(t);return e!==t&&(kf.set(t,e),zg.set(e,t)),e}const Cf=t=>zg.get(t);function PD(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Jr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Jr(o.result),u.oldVersion,u.newVersion,Jr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const OD=["get","getKey","getAll","getAllKeys","count"],LD=["put","add","delete","clear"],Af=new Map;function Zw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Af.get(e))return Af.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=LD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||OD.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&u.done]))[0]};return Af.set(e,s),s}ND(t=>({...t,get:(e,n,r)=>Zw(e,n)||t.get(e,n,r),has:(e,n)=>!!Zw(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(MD(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function MD(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yp="@firebase/app",e0="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=new Yh("@firebase/app"),FD="@firebase/app-compat",UD="@firebase/analytics-compat",VD="@firebase/analytics",BD="@firebase/app-check-compat",zD="@firebase/app-check",jD="@firebase/auth",qD="@firebase/auth-compat",WD="@firebase/database",GD="@firebase/database-compat",HD="@firebase/functions",KD="@firebase/functions-compat",QD="@firebase/installations",YD="@firebase/installations-compat",XD="@firebase/messaging",JD="@firebase/messaging-compat",ZD="@firebase/performance",eR="@firebase/performance-compat",tR="@firebase/remote-config",nR="@firebase/remote-config-compat",rR="@firebase/storage",iR="@firebase/storage-compat",sR="@firebase/firestore",oR="@firebase/firestore-compat",aR="firebase",uR="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni="[DEFAULT]",lR={[Yp]:"fire-core",[FD]:"fire-core-compat",[VD]:"fire-analytics",[UD]:"fire-analytics-compat",[zD]:"fire-app-check",[BD]:"fire-app-check-compat",[jD]:"fire-auth",[qD]:"fire-auth-compat",[WD]:"fire-rtdb",[GD]:"fire-rtdb-compat",[HD]:"fire-fn",[KD]:"fire-fn-compat",[QD]:"fire-iid",[YD]:"fire-iid-compat",[XD]:"fire-fcm",[JD]:"fire-fcm-compat",[ZD]:"fire-perf",[eR]:"fire-perf-compat",[tR]:"fire-rc",[nR]:"fire-rc-compat",[rR]:"fire-gcs",[iR]:"fire-gcs-compat",[sR]:"fire-fst",[oR]:"fire-fst-compat","fire-js":"fire-js",[aR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=new Map,uu=new Map;function Bc(t,e){try{t.container.addComponent(e)}catch(n){es.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _E(t,e){t.container.addOrOverwriteComponent(e)}function ii(t){const e=t.name;if(uu.has(e))return es.debug(`There were multiple attempts to register component ${e}.`),!1;uu.set(e,t);for(const n of ri.values())Bc(n,t);return!0}function EE(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function cR(t,e,n=ni){EE(t,e).clearInstance(n)}function hR(){uu.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},dr=new ms("app","Firebase",dR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fR=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dr.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=uR;function jg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ni,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw dr.create("bad-app-name",{appName:String(i)});if(n||(n=oD()),!n)throw dr.create("no-options");const s=ri.get(i);if(s){if(Hp(n,s.options)&&Hp(r,s.config))return s;throw dr.create("duplicate-app",{appName:i})}const o=new wD(i);for(const u of uu.values())o.addComponent(u);const a=new fR(n,r,o);return ri.set(i,a),a}function pR(t=ni){const e=ri.get(t);if(!e&&t===ni)return jg();if(!e)throw dr.create("no-app",{appName:t});return e}function mR(){return Array.from(ri.values())}async function SE(t){const e=t.name;ri.has(e)&&(ri.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Kn(t,e,n){var r;let i=(r=lR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),es.warn(a.join(" "));return}ii(new Jn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function TE(t,e){if(t!==null&&typeof t!="function")throw dr.create("invalid-log-argument");TD(t,e)}function kE(t){SD(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR="firebase-heartbeat-database",yR=1,lu="firebase-heartbeat-store";let bf=null;function CE(){return bf||(bf=PD(gR,yR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(lu)}}}).catch(t=>{throw dr.create("idb-open",{originalErrorMessage:t.message})})),bf}async function vR(t){try{return(await CE()).transaction(lu).objectStore(lu).get(AE(t))}catch(e){if(e instanceof Bt)es.warn(e.message);else{const n=dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});es.warn(n.message)}}}async function t0(t,e){try{const r=(await CE()).transaction(lu,"readwrite");return await r.objectStore(lu).put(e,AE(t)),r.done}catch(n){if(n instanceof Bt)es.warn(n.message);else{const r=dr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});es.warn(r.message)}}}function AE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR=1024,IR=30*24*60*60*1e3;class _R{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new SR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=n0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=IR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=n0(),{heartbeatsToSend:n,unsentEntries:r}=ER(this._heartbeatsCache.heartbeats),i=Uc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function n0(){return new Date().toISOString().substring(0,10)}function ER(t,e=wR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),r0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),r0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class SR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return au()?tD().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await vR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return t0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return t0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function r0(t){return Uc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TR(t){ii(new Jn("platform-logger",e=>new $D(e),"PRIVATE")),ii(new Jn("heartbeat",e=>new _R(e),"PRIVATE")),Kn(Yp,e0,t),Kn(Yp,e0,"esm2017"),Kn("fire-js","")}TR("");const kR=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Bt,SDK_VERSION:gs,_DEFAULT_ENTRY_NAME:ni,_addComponent:Bc,_addOrOverwriteComponent:_E,_apps:ri,_clearComponents:hR,_components:uu,_getProvider:EE,_registerComponent:ii,_removeServiceInstance:cR,deleteApp:SE,getApp:pR,getApps:mR,initializeApp:jg,onLog:TE,registerVersion:Kn,setLogLevel:kE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e,n){this._delegate=e,this.firebase=n,Bc(e,new Jn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),SE(this._delegate)))}_getService(e,n=ni){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=ni){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Bc(this._delegate,e)}_addOrOverwriteComponent(e){_E(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},i0=new ms("app-compat","Firebase",AR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bR(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Kn,setLogLevel:kE,onLog:TE,apps:null,SDK_VERSION:gs,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:kR}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(l){delete e[l]}function i(l){if(l=l||ni,!Qw(e,l))throw i0.create("no-app",{appName:l});return e[l]}i.App=t;function s(l,c={}){const h=jg(l,c);if(Qw(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const c=l.name,h=c.replace("-compat","");if(ii(l)&&l.type==="PUBLIC"){const d=(p=i())=>{if(typeof p[h]!="function")throw i0.create("invalid-app-argument",{appName:c});return p[h]()};l.serviceProps!==void 0&&Vc(d,l.serviceProps),n[h]=d,t.prototype[h]=function(...p){return this._getService.bind(this,c).apply(this,l.multipleInstances?p:[])}}return l.type==="PUBLIC"?n[h]:null}function u(l,c){return c==="serverAuth"?null:c}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(){const t=bR(CR);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:bE,extendNamespace:e,createSubscribe:yE,ErrorFactory:ms,deepExtend:Vc});function e(n){Vc(t,n)}return t}const xR=bE();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0=new Yh("@firebase/app-compat"),NR="@firebase/app-compat",DR="0.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RR(t){Kn(NR,DR,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(ZN()&&self.firebase!==void 0){s0.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&s0.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const si=xR;RR();var PR="firebase",OR="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */si.registerVersion(PR,OR,"app-compat");function qg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const ra={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},ks={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LR(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function xE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $R=LR,MR=xE,NE=new ms("auth","Firebase",xE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0=new Yh("@firebase/auth");function nc(t,...e){o0.logLevel<=ae.ERROR&&o0.error(`Auth (${gs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,...e){throw Wg(t,...e)}function _t(t,...e){return Wg(t,...e)}function DE(t,e,n){const r=Object.assign(Object.assign({},MR()),{[e]:n});return new ms("auth","Firebase",r).create(e,{appName:t.name})}function Po(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Tt(t,"argument-error"),DE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Wg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return NE.create(t,...e)}function x(t,e,...n){if(!t)throw Wg(e,...n)}function jn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nc(e),new Error(e)}function On(t,e){t||jn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0=new Map;function an(t){On(t instanceof Function,"Expected a class definition");let e=a0.get(t);return e?(On(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,a0.set(t,e),e)}function FR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(an);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Gg(){return u0()==="http:"||u0()==="https:"}function u0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gg()||pE()||"connection"in navigator)?navigator.onLine:!0}function VR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,n){this.shortDelay=e,this.longDelay=n,On(n>e,"Short delay should be less than long delay!"),this.isMobile=JN()||Vg()}get(){return UR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t,e){On(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;jn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;jn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;jn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR=new Uu(3e4,6e4);function Ze(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ct(t,e,n,r,i={}){return PE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ro(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),RE.fetch()(OE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function PE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},BR),e);try{const i=new jR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw va(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw va(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw va(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw va(t,"user-disabled",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw DE(t,c,l);Tt(t,c)}}catch(i){if(i instanceof Bt)throw i;Tt(t,"network-request-failed")}}async function Er(t,e,n,r,i={}){const s=await ct(t,e,n,r,i);return"mfaPendingCredential"in s&&Tt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function OE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Hg(t.config,i):`${t.config.apiScheme}://${i}`}class jR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_t(this.auth,"network-request-failed")),zR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function va(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=_t(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qR(t,e){return ct(t,"POST","/v1/accounts:delete",e)}async function WR(t,e){return ct(t,"POST","/v1/accounts:update",e)}async function GR(t,e){return ct(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function HR(t,e=!1){const n=q(t),r=await n.getIdToken(e),i=Xh(r);x(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Pa(xf(i.auth_time)),issuedAtTime:Pa(xf(i.iat)),expirationTime:Pa(xf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function xf(t){return Number(t)*1e3}function Xh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return nc("JWT malformed, contained fewer than 3 sections"),null;try{const i=fE(n);return i?JSON.parse(i):(nc("Failed to decode base64 JWT payload"),null)}catch(i){return nc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function KR(t){const e=Xh(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bt&&QR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function QR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pa(this.lastLoginAt),this.creationTime=Pa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await vr(t,GR(n,{idToken:r}));x(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ZR(s.providerUserInfo):[],a=JR(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=u?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new LE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function XR(t){const e=q(t);await hu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function JR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ZR(t){return t.map(e=>{var{providerId:n}=e,r=qg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eP(t,e){const n=await PE(t,{},async()=>{const r=Ro({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=OE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",RE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):KR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return x(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await eP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new du;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(x(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(x(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new du,this.toJSON())}_performRefresh(){return jn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=qg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new YR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new LE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await vr(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return HR(this,e)}reload(){return XR(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new qi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await hu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vr(this,qR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,m=(l=n.createdAt)!==null&&l!==void 0?l:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:_,isAnonymous:T,providerData:b,stsTokenManager:N}=n;x(g&&N,e,"internal-error");const $=du.fromJSON(this.name,N);x(typeof g=="string",e,"internal-error"),xr(h,e.name),xr(d,e.name),x(typeof _=="boolean",e,"internal-error"),x(typeof T=="boolean",e,"internal-error"),xr(p,e.name),xr(y,e.name),xr(v,e.name),xr(S,e.name),xr(m,e.name),xr(f,e.name);const te=new qi({uid:g,auth:e,email:d,emailVerified:_,displayName:h,isAnonymous:T,photoURL:y,phoneNumber:p,tenantId:v,stsTokenManager:$,createdAt:m,lastLoginAt:f});return b&&Array.isArray(b)&&(te.providerData=b.map(G=>Object.assign({},G))),S&&(te._redirectEventId=S),te}static async _fromIdTokenResponse(e,n,r=!1){const i=new du;i.updateFromServerResponse(n);const s=new qi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await hu(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$E.type="NONE";const fo=$E;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(t,e,n){return`firebase:${t}:${e}:${n}`}class Js{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Wi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Wi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Js(an(fo),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||an(fo);const o=Wi(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const c=await l._get(o);if(c){const h=qi._fromJSON(e,c);l!==s&&(a=h),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Js(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Js(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(UE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ME(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(VE(e))return"Blackberry";if(BE(e))return"Webos";if(Kg(e))return"Safari";if((e.includes("chrome/")||FE(e))&&!e.includes("edge/"))return"Chrome";if(Vu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ME(t=Pe()){return/firefox\//i.test(t)}function Kg(t=Pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function FE(t=Pe()){return/crios\//i.test(t)}function UE(t=Pe()){return/iemobile/i.test(t)}function Vu(t=Pe()){return/android/i.test(t)}function VE(t=Pe()){return/blackberry/i.test(t)}function BE(t=Pe()){return/webos/i.test(t)}function Oo(t=Pe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function tP(t=Pe()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function nP(t=Pe()){var e;return Oo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rP(){return mE()&&document.documentMode===10}function zE(t=Pe()){return Oo(t)||Vu(t)||BE(t)||VE(t)||/windows phone/i.test(t)||UE(t)}function iP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(t,e=[]){let n;switch(t){case"Browser":n=l0(Pe());break;case"Worker":n=`${l0(Pe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new c0(this),this.idTokenSubscription=new c0(this),this.beforeStateQueue=new sP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=NE,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=an(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Js.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await hu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?q(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(an(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ms("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&an(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await Js.create(this,[an(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return x(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function at(t){return q(t)}class c0{constructor(e){this.auth=e,this.observer=null,this.addObserver=yE(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function aP(t,e,n){const r=at(t);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=qE(e),{host:o,port:a}=uP(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||lP()}function qE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function uP(t){const e=qE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:h0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:h0(o)}}}function h0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function lP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jn("not implemented")}_getIdTokenResponse(e){return jn("not implemented")}_linkToIdToken(e,n){return jn("not implemented")}_getReauthenticationResolver(e){return jn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WE(t,e){return ct(t,"POST","/v1/accounts:resetPassword",Ze(t,e))}async function GE(t,e){return ct(t,"POST","/v1/accounts:update",e)}async function cP(t,e){return ct(t,"POST","/v1/accounts:update",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hP(t,e){return Er(t,"POST","/v1/accounts:signInWithPassword",Ze(t,e))}async function Jh(t,e){return ct(t,"POST","/v1/accounts:sendOobCode",Ze(t,e))}async function dP(t,e){return Jh(t,e)}async function fP(t,e){return Jh(t,e)}async function pP(t,e){return Jh(t,e)}async function mP(t,e){return Jh(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gP(t,e){return Er(t,"POST","/v1/accounts:signInWithEmailLink",Ze(t,e))}async function yP(t,e){return Er(t,"POST","/v1/accounts:signInWithEmailLink",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu extends Lo{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new fu(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new fu(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return hP(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return gP(e,{email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return GE(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return yP(e,{idToken:n,email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(t,e){return Er(t,"POST","/v1/accounts:signInWithIdp",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP="http://localhost";class Zn extends Lo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=qg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Zn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fr(e,n)}buildRequest(){const e={requestUri:vP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ro(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wP(t,e){return ct(t,"POST","/v1/accounts:sendVerificationCode",Ze(t,e))}async function IP(t,e){return Er(t,"POST","/v1/accounts:signInWithPhoneNumber",Ze(t,e))}async function _P(t,e){const n=await Er(t,"POST","/v1/accounts:signInWithPhoneNumber",Ze(t,e));if(n.temporaryProof)throw va(t,"account-exists-with-different-credential",n);return n}const EP={USER_NOT_FOUND:"user-not-found"};async function SP(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Er(t,"POST","/v1/accounts:signInWithPhoneNumber",Ze(t,n),EP)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi extends Lo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Gi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Gi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return IP(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return _P(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return SP(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Gi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kP(t){const e=qs(ya(t)).link,n=e?qs(ya(e)).deep_link_id:null,r=qs(ya(t)).deep_link_id;return(r?qs(ya(r)).link:null)||r||n||e||t}class Zh{constructor(e){var n,r,i,s,o,a;const u=qs(ya(e)),l=(n=u.apiKey)!==null&&n!==void 0?n:null,c=(r=u.oobCode)!==null&&r!==void 0?r:null,h=TP((i=u.mode)!==null&&i!==void 0?i:null);x(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=kP(e);try{return new Zh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(){this.providerId=yi.PROVIDER_ID}static credential(e,n){return fu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Zh.parseLink(n);return x(r,"argument-error"),fu._fromEmailAndCode(e,r.code,r.tenantId)}}yi.PROVIDER_ID="password";yi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o extends Sr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Zs extends $o{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return x("providerId"in n&&"signInMethod"in n,"argument-error"),Zn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return x(e.idToken||e.accessToken,"argument-error"),Zn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Zs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Zs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Zs(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends $o{constructor(){super("facebook.com")}static credential(e){return Zn._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends $o{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zn._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.GOOGLE_SIGN_IN_METHOD="google.com";Un.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends $o{constructor(){super("github.com")}static credential(e){return Zn._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.GITHUB_SIGN_IN_METHOD="github.com";Vn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP="http://localhost";class po extends Lo{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return fr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new po(r,s)}static _create(e,n){return new po(e,n)}buildRequest(){return{requestUri:CP,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP="saml.";class zc extends Sr{constructor(e){x(e.startsWith(AP),"argument-error"),super(e)}static credentialFromResult(e){return zc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return zc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=po.fromJSON(e);return x(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return po._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends $o{constructor(){super("twitter.com")}static credential(e,n){return Zn._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.TWITTER_SIGN_IN_METHOD="twitter.com";Bn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HE(t,e){return Er(t,"POST","/v1/accounts:signUp",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await qi._fromIdTokenResponse(e,r,i),o=d0(r);return new Sn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=d0(r);return new Sn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function d0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bP(t){var e;const n=at(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Sn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await HE(n,{returnSecureToken:!0}),i=await Sn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc extends Bt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,jc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new jc(e,n,r,i)}}function KE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?jc._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xP(t,e){const n=q(t);await ed(!0,n,e);const{providerUserInfo:r}=await WR(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=QE(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Qg(t,e,n=!1){const r=await vr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Sn._forOperation(t,"link",r)}async function ed(t,e,n){await hu(e);const r=QE(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";x(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YE(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await vr(t,KE(r,i,e,t),n);x(s.idToken,r,"internal-error");const o=Xh(s.idToken);x(o,r,"internal-error");const{sub:a}=o;return x(t.uid===a,r,"user-mismatch"),Sn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Tt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XE(t,e,n=!1){const r="signIn",i=await KE(t,r,e),s=await Sn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function td(t,e){return XE(at(t),e)}async function JE(t,e){const n=q(t);return await ed(!1,n,e.providerId),Qg(n,e)}async function ZE(t,e){return YE(q(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NP(t,e){return Er(t,"POST","/v1/accounts:signInWithCustomToken",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DP(t,e){const n=at(t),r=await NP(n,{token:e,returnSecureToken:!0}),i=await Sn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Yg._fromServerResponse(e,n):Tt(e,"internal-error")}}class Yg extends nd{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Yg(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(t,e,n){var r;x(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),x(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(x(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(x(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RP(t,e,n){const r=q(t),i={requestType:"PASSWORD_RESET",email:e};n&&rd(r,i,n),await fP(r,i)}async function PP(t,e,n){await WE(q(t),{oobCode:e,newPassword:n})}async function OP(t,e){await cP(q(t),{oobCode:e})}async function eS(t,e){const n=q(t),r=await WE(n,{oobCode:e}),i=r.requestType;switch(x(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":x(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":x(r.mfaInfo,n,"internal-error");default:x(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=nd._fromServerResponse(at(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function LP(t,e){const{data:n}=await eS(q(t),e);return n.email}async function $P(t,e,n){const r=at(t),i=await HE(r,{returnSecureToken:!0,email:e,password:n}),s=await Sn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function MP(t,e,n){return td(q(t),yi.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FP(t,e,n){const r=q(t),i={requestType:"EMAIL_SIGNIN",email:e};x(n.handleCodeInApp,r,"argument-error"),n&&rd(r,i,n),await pP(r,i)}function UP(t,e){const n=Zh.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function VP(t,e,n){const r=q(t),i=yi.credentialWithLink(e,n||cu());return x(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),td(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BP(t,e){return ct(t,"POST","/v1/accounts:createAuthUri",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zP(t,e){const n=Gg()?cu():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await BP(q(t),r);return i||[]}async function jP(t,e){const n=q(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&rd(n.auth,i,e);const{email:s}=await dP(n.auth,i);s!==t.email&&await t.reload()}async function qP(t,e,n){const r=q(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&rd(r.auth,s,n);const{email:o}=await mP(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WP(t,e){return ct(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=q(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await vr(r,WP(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function HP(t,e){return tS(q(t),e,null)}function KP(t,e){return tS(q(t),null,e)}async function tS(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await vr(t,GE(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Xh(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new eo(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new YP(s,i);case"github.com":return new XP(s,i);case"google.com":return new JP(s,i);case"twitter.com":return new ZP(s,i,t.screenName||null);case"custom":case"anonymous":return new eo(s,null);default:return new eo(s,r,i)}}class eo{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class nS extends eo{constructor(e,n,r,i){super(e,n,r),this.username=i}}class YP extends eo{constructor(e,n){super(e,"facebook.com",n)}}class XP extends nS{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class JP extends eo{constructor(e,n){super(e,"google.com",n)}}class ZP extends nS{constructor(e,n,r){super(e,"twitter.com",n,r)}}function eO(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:QP(n)}class Mi{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new Mi("enroll",e,n)}static _fromMfaPendingCredential(e){return new Mi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Mi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Mi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=at(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>nd._fromServerResponse(r,a));x(i.mfaPendingCredential,r,"internal-error");const o=Mi._fromMfaPendingCredential(i.mfaPendingCredential);return new Xg(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const l=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(n.operationType){case"signIn":const c=await Sn._fromIdTokenResponse(r,n.operationType,l);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return x(n.user,r,"internal-error"),Sn._forOperation(n.user,n.operationType,l);default:Tt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function tO(t,e){var n;const r=q(t),i=e;return x(e.customData.operationType,r,"argument-error"),x((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Xg._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nO(t,e){return ct(t,"POST","/v2/accounts/mfaEnrollment:start",Ze(t,e))}function rO(t,e){return ct(t,"POST","/v2/accounts/mfaEnrollment:finalize",Ze(t,e))}function iO(t,e){return ct(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Ze(t,e))}class Jg{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>nd._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Jg(e)}async getSession(){return Mi._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await vr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken(),i=await vr(this.user,iO(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(s){if((s==null?void 0:s.code)!=="auth/user-token-expired")throw s}}}const Nf=new WeakMap;function sO(t){const e=q(t);return Nf.has(e)||Nf.set(e,Jg._fromUser(e)),Nf.get(e)}const qc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qc,"1"),this.storage.removeItem(qc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oO(){const t=Pe();return Kg(t)||Oo(t)}const aO=1e3,uO=10;class iS extends rS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=oO()&&iP(),this.fallbackToPolling=zE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);rP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,uO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},aO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}iS.type="LOCAL";const Zg=iS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS extends rS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sS.type="SESSION";const ts=sS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new id(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),u=await lO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}id.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=Bu("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return window}function hO(t){Ye().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function dO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function pO(){return ey()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS="firebaseLocalStorageDb",mO=1,Wc="firebaseLocalStorage",aS="fbase_key";class zu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sd(t,e){return t.transaction([Wc],e?"readwrite":"readonly").objectStore(Wc)}function gO(){const t=indexedDB.deleteDatabase(oS);return new zu(t).toPromise()}function Xp(){const t=indexedDB.open(oS,mO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wc,{keyPath:aS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wc)?e(r):(r.close(),await gO(),e(await Xp()))})})}async function f0(t,e,n){const r=sd(t,!0).put({[aS]:e,value:n});return new zu(r).toPromise()}async function yO(t,e){const n=sd(t,!1).get(e),r=await new zu(n).toPromise();return r===void 0?null:r.value}function p0(t,e){const n=sd(t,!0).delete(e);return new zu(n).toPromise()}const vO=800,wO=3;class uS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>wO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ey()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=id._getInstance(pO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dO(),!this.activeServiceWorker)return;this.sender=new cO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xp();return await f0(e,qc,"1"),await p0(e,qc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>f0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>yO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>p0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=sd(i,!1).getAll();return new zu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uS.type="LOCAL";const pu=uS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IO(t,e){return ct(t,"POST","/v2/accounts/mfaSignIn:start",Ze(t,e))}function _O(t,e){return ct(t,"POST","/v2/accounts/mfaSignIn:finalize",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EO(t){return(await ct(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function lS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=_t("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",SO().appendChild(r)})}function cS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TO=500,kO=6e4,Rl=1e12;class CO{constructor(e){this.auth=e,this.counter=Rl,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new AO(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Rl;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Rl;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Rl;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class AO{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;x(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=bO(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},kO)},TO))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function bO(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=cS("rcb"),xO=new Uu(3e4,6e4),NO="https://www.google.com/recaptcha/api.js?";class DO{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ye().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return x(RO(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(Ye().grecaptcha):new Promise((r,i)=>{const s=Ye().setTimeout(()=>{i(_t(e,"network-request-failed"))},xO.get());Ye()[Df]=()=>{Ye().clearTimeout(s),delete Ye()[Df];const a=Ye().grecaptcha;if(!a){i(_t(e,"internal-error"));return}const u=a.render;a.render=(l,c)=>{const h=u(l,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${NO}?${Ro({onload:Df,render:"explicit",hl:n})}`;lS(o).catch(()=>{clearTimeout(s),i(_t(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Ye().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function RO(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class PO{async load(e){return new CO(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS="recaptcha",OO={theme:"light",type:"image"};let LO=class{constructor(e,n=Object.assign({},OO),r){this.parameters=n,this.type=hS,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=at(r),this.isInvisible=this.parameters.size==="invisible",x(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;x(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new PO:new DO,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){x(!this.parameters.sitekey,this.auth,"argument-error"),x(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),x(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Ye()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){x(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){x(Gg()&&!ey(),this.auth,"internal-error"),await $O(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await EO(this.auth);x(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return x(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function $O(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Gi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function MO(t,e,n){const r=at(t),i=await od(r,e,q(n));return new ty(i,s=>td(r,s))}async function FO(t,e,n){const r=q(t);await ed(!1,r,"phone");const i=await od(r.auth,e,q(n));return new ty(i,s=>JE(r,s))}async function UO(t,e,n){const r=q(t),i=await od(r.auth,e,q(n));return new ty(i,s=>ZE(r,s))}async function od(t,e,n){var r;const i=await n.verify();try{x(typeof i=="string",t,"argument-error"),x(n.type===hS,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return x(o.type==="enroll",t,"internal-error"),(await nO(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{x(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return x(a,t,"missing-multi-factor-info"),(await IO(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await wP(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function VO(t,e){await Qg(q(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qn=class{constructor(e){this.providerId=Qn.PROVIDER_ID,this.auth=at(e)}verifyPhoneNumber(e,n){return od(this.auth,e,q(n))}static credential(e,n){return Gi._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Qn.credentialFromTaggedObject(n)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Gi._fromTokenResponse(n,r):null}};Qn.PROVIDER_ID="phone";Qn.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(t,e){return e?an(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny extends Lo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function BO(t){return XE(t.auth,new ny(t),t.bypassAuthState)}function zO(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),YE(n,new ny(t),t.bypassAuthState)}async function jO(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),Qg(n,new ny(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BO;case"linkViaPopup":case"linkViaRedirect":return jO;case"reauthViaPopup":case"reauthViaRedirect":return zO;default:Tt(this.auth,"internal-error")}}resolve(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qO=new Uu(2e3,1e4);async function WO(t,e,n){const r=at(t);Po(t,e,Sr);const i=ys(r,n);return new ur(r,"signInViaPopup",e,i).executeNotNull()}async function GO(t,e,n){const r=q(t);Po(r.auth,e,Sr);const i=ys(r.auth,n);return new ur(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function HO(t,e,n){const r=q(t);Po(r.auth,e,Sr);const i=ys(r.auth,n);return new ur(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class ur extends dS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ur.currentPopupAction&&ur.currentPopupAction.cancel(),ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const e=Bu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_t(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,qO.get())};e()}}ur.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KO="pendingRedirect",Oa=new Map;class QO extends dS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Oa.get(this.auth._key());if(!e){try{const r=await YO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Oa.set(this.auth._key(),e)}return this.bypassAuthState||Oa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YO(t,e){const n=pS(e),r=fS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function ry(t,e){return fS(t)._set(pS(e),"true")}function XO(){Oa.clear()}function iy(t,e){Oa.set(t._key(),e)}function fS(t){return an(t._redirectPersistence)}function pS(t){return Wi(KO,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JO(t,e,n){return ZO(t,e,n)}async function ZO(t,e,n){const r=at(t);Po(t,e,Sr);const i=ys(r,n);return await ry(i,r),i._openRedirect(r,e,"signInViaRedirect")}function eL(t,e,n){return tL(t,e,n)}async function tL(t,e,n){const r=q(t);Po(r.auth,e,Sr);const i=ys(r.auth,n);await ry(i,r.auth);const s=await mS(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function nL(t,e,n){return rL(t,e,n)}async function rL(t,e,n){const r=q(t);Po(r.auth,e,Sr);const i=ys(r.auth,n);await ed(!1,r,e.providerId),await ry(i,r.auth);const s=await mS(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function iL(t,e){return await at(t)._initializationPromise,ad(t,e,!1)}async function ad(t,e,n=!1){const r=at(t),i=ys(r,e),o=await new QO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function mS(t){const e=Bu(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sL=10*60*1e3;class gS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!yS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(_t(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sL&&this.cachedEventUids.clear(),this.cachedEventUids.has(m0(e))}saveEventToCache(e){this.cachedEventUids.add(m0(e)),this.lastProcessedEventTime=Date.now()}}function m0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vS(t,e={}){return ct(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uL=/^https?/;async function lL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await vS(t);for(const n of e)try{if(cL(n))return}catch{}Tt(t,"unauthorized-domain")}function cL(t){const e=cu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!uL.test(n))return!1;if(aL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hL=new Uu(3e4,6e4);function g0(){const t=Ye().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function dL(t){return new Promise((e,n)=>{var r,i,s;function o(){g0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{g0(),n(_t(t,"network-request-failed"))},timeout:hL.get()})}if(!((i=(r=Ye().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ye().gapi)===null||s===void 0)&&s.load)o();else{const a=cS("iframefcb");return Ye()[a]=()=>{gapi.load?o():n(_t(t,"network-request-failed"))},lS(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw rc=null,e})}let rc=null;function fL(t){return rc=rc||dL(t),rc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pL=new Uu(5e3,15e3),mL="__/auth/iframe",gL="emulator/auth/iframe",yL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wL(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hg(e,gL):`https://${t.config.authDomain}/${mL}`,r={apiKey:e.apiKey,appName:t.name,v:gs},i=vL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ro(r).slice(1)}`}async function IL(t){const e=await fL(t),n=Ye().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:wL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=_t(t,"network-request-failed"),a=Ye().setTimeout(()=>{s(o)},pL.get());function u(){Ye().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _L={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},EL=500,SL=600,TL="_blank",kL="http://localhost";class y0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CL(t,e,n,r=EL,i=SL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},_L),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Pe().toLowerCase();n&&(a=FE(l)?TL:n),ME(l)&&(e=e||kL,u.scrollbars="yes");const c=Object.entries(u).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(nP(l)&&a!=="_self")return AL(e||"",a),new y0(null);const h=window.open(e||"",a,c);x(h,t,"popup-blocked");try{h.focus()}catch{}return new y0(h)}function AL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bL="__/auth/handler",xL="emulator/auth/handler";function Jp(t,e,n,r,i,s){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:gs,eventId:i};if(e instanceof Sr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fD(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,l]of Object.entries(s||{}))o[u]=l}if(e instanceof $o){const u=e.getScopes().filter(l=>l!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];return`${NL(t)}?${Ro(a).slice(1)}`}function NL({config:t}){return t.emulator?Hg(t,xL):`https://${t.authDomain}/${bL}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf="webStorageSupport";class DL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ts,this._completeRedirectFn=ad,this._overrideRedirectResult=iy}async _openPopup(e,n,r,i){var s;On((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Jp(e,n,r,cu(),i);return CL(e,o,Bu())}async _openRedirect(e,n,r,i){return await this._originValidation(e),hO(Jp(e,n,r,cu(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(On(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await IL(e),r=new gS(e);return n.register("authEvent",i=>(x(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rf,{type:Rf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Rf];o!==void 0&&n(!!o),Tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zE()||Kg()||Oo()}}const RL=DL;class PL{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return jn("unexpected MultiFactorSessionType")}}}class sy extends PL{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new sy(e)}_finalizeEnroll(e,n,r){return rO(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return _O(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class wS{constructor(){}static assertion(e){return sy._fromCredential(e)}}wS.FACTOR_ID="phone";var v0="@firebase/auth",w0="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $L(t){ii(new Jn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,u)=>{x(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),x(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jE(t)},c=new oP(a,u,l);return FR(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ii(new Jn("auth-internal",e=>{const n=at(e.getProvider("auth").getImmediate());return(r=>new OL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kn(v0,w0,LL(t)),Kn(v0,w0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ML=5*60;aD("authIdTokenMaxAge");$L("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FL=2e3;async function UL(t,e,n){var r;const{BuildInfo:i}=ns();On(e.sessionId,"AuthEvent did not contain a session ID");const s=await qL(e.sessionId),o={};return Oo()?o.ibi=i.packageName:Vu()?o.apn=i.packageName:Tt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Jp(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function VL(t){const{BuildInfo:e}=ns(),n={};Oo()?n.iosBundleId=e.packageName:Vu()?n.androidPackageName=e.packageName:Tt(t,"operation-not-supported-in-this-environment"),await vS(t,n)}function BL(t){const{cordova:e}=ns();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,tP()?"_blank":"_system","location=yes"),n(i)})})}async function zL(t,e,n){const{cordova:r}=ns();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function l(){a||(a=window.setTimeout(()=>{o(_t(t,"redirect-cancelled-by-user"))},FL))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(u),document.addEventListener("resume",l,!1),Vu()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function jL(t){var e,n,r,i,s,o,a,u,l,c;const h=ns();x(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),x(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),x(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),x(typeof((u=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),x(typeof((c=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function qL(t){const e=WL(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function WL(t){if(On(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GL=20;class HL extends gS{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function KL(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:XL(),postBody:null,tenantId:t.tenantId,error:_t(t,"no-auth-event")}}function QL(t,e){return Zp()._set(em(t),e)}async function I0(t){const e=await Zp()._get(em(t));return e&&await Zp()._remove(em(t)),e}function YL(t,e){var n,r;const i=ZL(e);if(i.includes("/__/auth/callback")){const s=ic(i),o=s.firebaseError?JL(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],u=a?_t(a):null;return u?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function XL(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<GL;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Zp(){return an(Zg)}function em(t){return Wi("authEvent",t.config.apiKey,t.name)}function JL(t){try{return JSON.parse(t)}catch{return null}}function ZL(t){const e=ic(t),n=e.link?decodeURIComponent(e.link):void 0,r=ic(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return ic(i).link||i||r||n||t}function ic(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return qs(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e$=500;class t${constructor(){this._redirectPersistence=ts,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ad,this._overrideRedirectResult=iy}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new HL(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Tt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){jL(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),XO(),await this._originValidation(e);const o=KL(e,r,i);await QL(e,o);const a=await UL(e,o,n),u=await BL(a);return zL(e,s,u)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VL(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=ns(),o=setTimeout(async()=>{await I0(e),n.onEvent(_0())},e$),a=async c=>{clearTimeout(o);const h=await I0(e);let d=null;h&&(c!=null&&c.url)&&(d=YL(h,c.url)),n.onEvent(d||_0())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,l=`${s.packageName.toLowerCase()}://`;ns().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(l)&&a({url:c}),typeof u=="function")try{u(c)}catch(h){console.error(h)}}}}const n$=t$;function _0(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:_t("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r$(t,e){at(t)._logFramework(e)}var i$="@firebase/auth-compat",s$="0.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o$=1e3;function La(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function a$(){return La()==="http:"||La()==="https:"}function IS(t=Pe()){return!!((La()==="file:"||La()==="ionic:"||La()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function u$(){return Vg()||Ug()}function l$(){return mE()&&(document==null?void 0:document.documentMode)===11}function c$(t=Pe()){return/Edge\/\d+/.test(t)}function h$(t=Pe()){return l$()||c$(t)}function _S(){try{const t=self.localStorage,e=Bu();if(t)return t.setItem(e,"1"),t.removeItem(e),h$()?au():!0}catch{return oy()&&au()}return!1}function oy(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Pf(){return(a$()||pE()||IS())&&!u$()&&_S()&&!oy()}function ES(){return IS()&&typeof document<"u"}async function d$(){return ES()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},o$);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function f$(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn={LOCAL:"local",NONE:"none",SESSION:"session"},ia=x,SS="persistence";function p$(t,e){if(ia(Object.values(sn).includes(e),t,"invalid-persistence-type"),Vg()){ia(e!==sn.SESSION,t,"unsupported-persistence-type");return}if(Ug()){ia(e===sn.NONE,t,"unsupported-persistence-type");return}if(oy()){ia(e===sn.NONE||e===sn.LOCAL&&au(),t,"unsupported-persistence-type");return}ia(e===sn.NONE||_S(),t,"unsupported-persistence-type")}async function tm(t){await t._initializationPromise;const e=TS(),n=Wi(SS,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function m$(t,e){const n=TS();if(!n)return[];const r=Wi(SS,t,e);switch(n.getItem(r)){case sn.NONE:return[fo];case sn.LOCAL:return[pu,ts];case sn.SESSION:return[ts];default:return[]}}function TS(){var t;try{return((t=f$())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g$=x;class Br{constructor(){this.browserResolver=an(RL),this.cordovaResolver=an(n$),this.underlyingResolver=null,this._redirectPersistence=ts,this._completeRedirectFn=ad,this._overrideRedirectResult=iy}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return ES()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return g$(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await d$();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(t){return t.unwrap()}function y$(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v$(t){return CS(t)}function w$(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new I$(t,tO(t,e))}else if(r){const i=CS(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function CS(t){const{_tokenResponse:e}=t instanceof Bt?t.customData:t;if(!e)return null;if(!(t instanceof Bt)&&"temporaryProof"in e&&"phoneNumber"in e)return Qn.credentialFromResult(t);const n=e.providerId;if(!n||n===ra.PASSWORD)return null;let r;switch(n){case ra.GOOGLE:r=Un;break;case ra.FACEBOOK:r=Fn;break;case ra.GITHUB:r=Vn;break;case ra.TWITTER:r=Bn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?po._create(n,a):Zn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Zs(n).credential({idToken:i,accessToken:s,rawNonce:u})}return t instanceof Bt?r.credentialFromError(t):r.credentialFromResult(t)}function Gt(t,e){return e.catch(n=>{throw n instanceof Bt&&w$(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:v$(n),additionalUserInfo:eO(n),user:lr.getOrCreate(i)}})}async function nm(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Gt(t,n.confirm(r))}}class I${constructor(e,n){this.resolver=n,this.auth=y$(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Gt(kS(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e){this._delegate=e,this.multiFactor=sO(e)}static getOrCreate(e){return lr.USER_MAP.has(e)||lr.USER_MAP.set(e,new lr(e)),lr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Gt(this.auth,JE(this._delegate,e))}async linkWithPhoneNumber(e,n){return nm(this.auth,FO(this._delegate,e,n))}async linkWithPopup(e){return Gt(this.auth,HO(this._delegate,e,Br))}async linkWithRedirect(e){return await tm(at(this.auth)),nL(this._delegate,e,Br)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Gt(this.auth,ZE(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return nm(this.auth,UO(this._delegate,e,n))}reauthenticateWithPopup(e){return Gt(this.auth,GO(this._delegate,e,Br))}async reauthenticateWithRedirect(e){return await tm(at(this.auth)),eL(this._delegate,e,Br)}sendEmailVerification(e){return jP(this._delegate,e)}async unlink(e){return await xP(this._delegate,e),this}updateEmail(e){return HP(this._delegate,e)}updatePassword(e){return KP(this._delegate,e)}updatePhoneNumber(e){return VO(this._delegate,e)}updateProfile(e){return GP(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return qP(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}lr.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=x;class rm{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;sa(r,"invalid-api-key",{appName:e.name}),sa(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Br:void 0;this._delegate=n.initialize({options:{persistence:_$(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap($R),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?lr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){aP(this._delegate,e,n)}applyActionCode(e){return OP(this._delegate,e)}checkActionCode(e){return eS(this._delegate,e)}confirmPasswordReset(e,n){return PP(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Gt(this._delegate,$P(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return zP(this._delegate,e)}isSignInWithEmailLink(e){return UP(this._delegate,e)}async getRedirectResult(){sa(Pf(),this._delegate,"operation-not-supported-in-this-environment");const e=await iL(this._delegate,Br);return e?Gt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){r$(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=E0(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=E0(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return FP(this._delegate,e,n)}sendPasswordResetEmail(e,n){return RP(this._delegate,e,n||void 0)}async setPersistence(e){p$(this._delegate,e);let n;switch(e){case sn.SESSION:n=ts;break;case sn.LOCAL:n=await an(pu)._isAvailable()?pu:Zg;break;case sn.NONE:n=fo;break;default:return Tt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Gt(this._delegate,bP(this._delegate))}signInWithCredential(e){return Gt(this._delegate,td(this._delegate,e))}signInWithCustomToken(e){return Gt(this._delegate,DP(this._delegate,e))}signInWithEmailAndPassword(e,n){return Gt(this._delegate,MP(this._delegate,e,n))}signInWithEmailLink(e,n){return Gt(this._delegate,VP(this._delegate,e,n))}signInWithPhoneNumber(e,n){return nm(this._delegate,MO(this._delegate,e,n))}async signInWithPopup(e){return sa(Pf(),this._delegate,"operation-not-supported-in-this-environment"),Gt(this._delegate,WO(this._delegate,e,Br))}async signInWithRedirect(e){return sa(Pf(),this._delegate,"operation-not-supported-in-this-environment"),await tm(this._delegate),JO(this._delegate,e,Br)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return LP(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}rm.Persistence=sn;function E0(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&lr.getOrCreate(o)),error:e,complete:n}}function _$(t,e){const n=m$(t,e);if(typeof self<"u"&&!n.includes(pu)&&n.push(pu),typeof window<"u")for(const r of[Zg,ts])n.includes(r)||n.push(r);return n.includes(fo)||n.push(fo),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(){this.providerId="phone",this._delegate=new Qn(kS(si.auth()))}static credential(e,n){return Qn.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}ay.PHONE_SIGN_IN_METHOD=Qn.PHONE_SIGN_IN_METHOD;ay.PROVIDER_ID=Qn.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E$=x;class S${constructor(e,n,r=si.app()){var i;E$((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new LO(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T$="auth-compat";function k$(t){t.INTERNAL.registerComponent(new Jn(T$,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new rm(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ks.EMAIL_SIGNIN,PASSWORD_RESET:ks.PASSWORD_RESET,RECOVER_EMAIL:ks.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ks.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ks.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ks.VERIFY_EMAIL}},EmailAuthProvider:yi,FacebookAuthProvider:Fn,GithubAuthProvider:Vn,GoogleAuthProvider:Un,OAuthProvider:Zs,SAMLAuthProvider:zc,PhoneAuthProvider:ay,PhoneMultiFactorGenerator:wS,RecaptchaVerifier:S$,TwitterAuthProvider:Bn,Auth:rm,AuthCredential:Lo,Error:Bt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(i$,s$)}k$(si);var C$=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},B,uy=uy||{},Y=C$||self;function Gc(){}function ud(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ju(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function A$(t){return Object.prototype.hasOwnProperty.call(t,Of)&&t[Of]||(t[Of]=++b$)}var Of="closure_uid_"+(1e9*Math.random()>>>0),b$=0;function x$(t,e,n){return t.call.apply(t.bind,arguments)}function N$(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Rt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Rt=x$:Rt=N$,Rt.apply(null,arguments)}function Pl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ct(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function vi(){this.s=this.s,this.o=this.o}var D$=0;vi.prototype.s=!1;vi.prototype.na=function(){!this.s&&(this.s=!0,this.M(),D$!=0)&&A$(this)};vi.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const AS=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ly(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function S0(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ud(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Pt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Pt.prototype.h=function(){this.defaultPrevented=!0};var R$=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Y.addEventListener("test",Gc,e),Y.removeEventListener("test",Gc,e)}catch{}return t}();function Hc(t){return/^[\s\xa0]*$/.test(t)}var T0=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Lf(t,e){return t<e?-1:t>e?1:0}function ld(){var t=Y.navigator;return t&&(t=t.userAgent)?t:""}function zn(t){return ld().indexOf(t)!=-1}function cy(t){return cy[" "](t),t}cy[" "]=Gc;function P$(t){var e=$$;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var O$=zn("Opera"),mo=zn("Trident")||zn("MSIE"),bS=zn("Edge"),im=bS||mo,xS=zn("Gecko")&&!(ld().toLowerCase().indexOf("webkit")!=-1&&!zn("Edge"))&&!(zn("Trident")||zn("MSIE"))&&!zn("Edge"),L$=ld().toLowerCase().indexOf("webkit")!=-1&&!zn("Edge");function NS(){var t=Y.document;return t?t.documentMode:void 0}var Kc;e:{var $f="",Mf=function(){var t=ld();if(xS)return/rv:([^\);]+)(\)|;)/.exec(t);if(bS)return/Edge\/([\d\.]+)/.exec(t);if(mo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(L$)return/WebKit\/(\S+)/.exec(t);if(O$)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Mf&&($f=Mf?Mf[1]:""),mo){var Ff=NS();if(Ff!=null&&Ff>parseFloat($f)){Kc=String(Ff);break e}}Kc=$f}var $$={};function M$(){return P$(function(){let t=0;const e=T0(String(Kc)).split("."),n=T0("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Lf(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Lf(i[2].length==0,s[2].length==0)||Lf(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var sm;if(Y.document&&mo){var k0=NS();sm=k0||parseInt(Kc,10)||void 0}else sm=void 0;var F$=sm;function mu(t,e){if(Pt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(xS){e:{try{cy(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:U$[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&mu.X.h.call(this)}}Ct(mu,Pt);var U$={2:"touch",3:"pen",4:"mouse"};mu.prototype.h=function(){mu.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var qu="closure_listenable_"+(1e6*Math.random()|0),V$=0;function B$(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++V$,this.ba=this.ea=!1}function cd(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function hy(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function DS(t){const e={};for(const n in t)e[n]=t[n];return e}const C0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function RS(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<C0.length;s++)n=C0[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function hd(t){this.src=t,this.g={},this.h=0}hd.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=am(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new B$(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function om(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=AS(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(cd(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function am(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var dy="closure_lm_"+(1e6*Math.random()|0),Uf={};function PS(t,e,n,r,i){if(r&&r.once)return LS(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)PS(t,e[s],n,r,i);return null}return n=my(n),t&&t[qu]?t.N(e,n,ju(r)?!!r.capture:!!r,i):OS(t,e,n,!1,r,i)}function OS(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ju(i)?!!i.capture:!!i,a=py(t);if(a||(t[dy]=a=new hd(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=z$(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)R$||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(MS(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function z$(){function t(n){return e.call(t.src,t.listener,n)}const e=j$;return t}function LS(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)LS(t,e[s],n,r,i);return null}return n=my(n),t&&t[qu]?t.O(e,n,ju(r)?!!r.capture:!!r,i):OS(t,e,n,!0,r,i)}function $S(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)$S(t,e[s],n,r,i);else r=ju(r)?!!r.capture:!!r,n=my(n),t&&t[qu]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=am(s,n,r,i),-1<n&&(cd(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=py(t))&&(e=t.g[e.toString()],t=-1,e&&(t=am(e,n,r,i)),(n=-1<t?e[t]:null)&&fy(n))}function fy(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[qu])om(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(MS(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=py(e))?(om(n,t),n.h==0&&(n.src=null,e[dy]=null)):cd(t)}}}function MS(t){return t in Uf?Uf[t]:Uf[t]="on"+t}function j$(t,e){if(t.ba)t=!0;else{e=new mu(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&fy(t),t=n.call(r,e)}return t}function py(t){return t=t[dy],t instanceof hd?t:null}var Vf="__closure_events_fn_"+(1e9*Math.random()>>>0);function my(t){return typeof t=="function"?t:(t[Vf]||(t[Vf]=function(e){return t.handleEvent(e)}),t[Vf])}function ut(){vi.call(this),this.i=new hd(this),this.P=this,this.I=null}Ct(ut,vi);ut.prototype[qu]=!0;ut.prototype.removeEventListener=function(t,e,n,r){$S(this,t,e,n,r)};function Et(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Pt(e,t);else if(e instanceof Pt)e.target=e.target||t;else{var i=e;e=new Pt(r,t),RS(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ol(o,r,!0,e)&&i}if(o=e.g=t,i=Ol(o,r,!0,e)&&i,i=Ol(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ol(o,r,!1,e)&&i}ut.prototype.M=function(){if(ut.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)cd(n[r]);delete t.g[e],t.h--}}this.I=null};ut.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ut.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ol(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&om(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var gy=Y.JSON.stringify;function q$(){var t=VS;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class W${constructor(){this.h=this.g=null}add(e,n){const r=FS.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var FS=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new G$,t=>t.reset());class G${constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function H$(t){Y.setTimeout(()=>{throw t},0)}function US(t,e){um||K$(),lm||(um(),lm=!0),VS.add(t,e)}var um;function K$(){var t=Y.Promise.resolve(void 0);um=function(){t.then(Q$)}}var lm=!1,VS=new W$;function Q$(){for(var t;t=q$();){try{t.h.call(t.g)}catch(n){H$(n)}var e=FS;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}lm=!1}function dd(t,e){ut.call(this),this.h=t||1,this.g=e||Y,this.j=Rt(this.lb,this),this.l=Date.now()}Ct(dd,ut);B=dd.prototype;B.ca=!1;B.R=null;B.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Et(this,"tick"),this.ca&&(yy(this),this.start()))}};B.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function yy(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}B.M=function(){dd.X.M.call(this),yy(this),delete this.g};function vy(t,e,n){if(typeof t=="function")n&&(t=Rt(t,n));else if(t&&typeof t.handleEvent=="function")t=Rt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Y.setTimeout(t,e||0)}function BS(t){t.g=vy(()=>{t.g=null,t.i&&(t.i=!1,BS(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Y$ extends vi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:BS(this)}M(){super.M(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gu(t){vi.call(this),this.h=t,this.g={}}Ct(gu,vi);var A0=[];function zS(t,e,n,r){Array.isArray(n)||(n&&(A0[0]=n.toString()),n=A0);for(var i=0;i<n.length;i++){var s=PS(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function jS(t){hy(t.g,function(e,n){this.g.hasOwnProperty(n)&&fy(e)},t),t.g={}}gu.prototype.M=function(){gu.X.M.call(this),jS(this)};gu.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function fd(){this.g=!0}fd.prototype.Aa=function(){this.g=!1};function X$(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function J$(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ws(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+eM(t,n)+(r?" "+r:"")})}function Z$(t,e){t.info(function(){return"TIMEOUT: "+e})}fd.prototype.info=function(){};function eM(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return gy(n)}catch{return e}}var vs={},b0=null;function pd(){return b0=b0||new ut}vs.Pa="serverreachability";function qS(t){Pt.call(this,vs.Pa,t)}Ct(qS,Pt);function yu(t){const e=pd();Et(e,new qS(e))}vs.STAT_EVENT="statevent";function WS(t,e){Pt.call(this,vs.STAT_EVENT,t),this.stat=e}Ct(WS,Pt);function Ut(t){const e=pd();Et(e,new WS(e,t))}vs.Qa="timingevent";function GS(t,e){Pt.call(this,vs.Qa,t),this.size=e}Ct(GS,Pt);function Wu(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Y.setTimeout(function(){t()},e)}var md={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},HS={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function wy(){}wy.prototype.h=null;function x0(t){return t.h||(t.h=t.i())}function KS(){}var Gu={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Iy(){Pt.call(this,"d")}Ct(Iy,Pt);function _y(){Pt.call(this,"c")}Ct(_y,Pt);var cm;function gd(){}Ct(gd,wy);gd.prototype.g=function(){return new XMLHttpRequest};gd.prototype.i=function(){return{}};cm=new gd;function Hu(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new gu(this),this.O=tM,t=im?125:void 0,this.T=new dd(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new QS}function QS(){this.i=null,this.g="",this.h=!1}var tM=45e3,hm={},Qc={};B=Hu.prototype;B.setTimeout=function(t){this.O=t};function dm(t,e,n){t.K=1,t.v=vd(wr(e)),t.s=n,t.P=!0,YS(t,null)}function YS(t,e){t.F=Date.now(),Ku(t),t.A=wr(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),iT(n.i,"t",r),t.C=0,n=t.l.H,t.h=new QS,t.g=kT(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Y$(Rt(t.La,t,t.g),t.N)),zS(t.S,t.g,"readystatechange",t.ib),e=t.H?DS(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),yu(),X$(t.j,t.u,t.A,t.m,t.U,t.s)}B.ib=function(t){t=t.target;const e=this.L;e&&cr(t)==3?e.l():this.La(t)};B.La=function(t){try{if(t==this.g)e:{const c=cr(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||im||this.g&&(this.h.h||this.g.fa()||P0(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?yu(3):yu(2)),yd(this);var n=this.g.aa();this.Y=n;t:if(XS(this)){var r=P0(this.g);t="";var i=r.length,s=cr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fi(this),$a(this);var o="";break t}this.h.i=new Y.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,J$(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Hc(a)){var l=a;break t}}l=null}if(n=l)Ws(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,fm(this,n);else{this.i=!1,this.o=3,Ut(12),Fi(this),$a(this);break e}}this.P?(JS(this,c,o),im&&this.i&&c==3&&(zS(this.S,this.T,"tick",this.hb),this.T.start())):(Ws(this.j,this.m,o,null),fm(this,o)),c==4&&Fi(this),this.i&&!this.I&&(c==4?_T(this.l,this):(this.i=!1,Ku(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ut(12)):(this.o=0,Ut(13)),Fi(this),$a(this)}}}catch{}finally{}};function XS(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function JS(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=nM(t,n),i==Qc){e==4&&(t.o=4,Ut(14),r=!1),Ws(t.j,t.m,null,"[Incomplete Response]");break}else if(i==hm){t.o=4,Ut(15),Ws(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ws(t.j,t.m,i,null),fm(t,i);XS(t)&&i!=Qc&&i!=hm&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ut(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),by(e),e.K=!0,Ut(11))):(Ws(t.j,t.m,n,"[Invalid Chunked Response]"),Fi(t),$a(t))}B.hb=function(){if(this.g){var t=cr(this.g),e=this.g.fa();this.C<e.length&&(yd(this),JS(this,t,e),this.i&&t!=4&&Ku(this))}};function nM(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Qc:(n=Number(e.substring(n,r)),isNaN(n)?hm:(r+=1,r+n>e.length?Qc:(e=e.substr(r,n),t.C=r+n,e)))}B.cancel=function(){this.I=!0,Fi(this)};function Ku(t){t.V=Date.now()+t.O,ZS(t,t.O)}function ZS(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Wu(Rt(t.gb,t),e)}function yd(t){t.B&&(Y.clearTimeout(t.B),t.B=null)}B.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Z$(this.j,this.A),this.K!=2&&(yu(),Ut(17)),Fi(this),this.o=2,$a(this)):ZS(this,this.V-t)};function $a(t){t.l.G==0||t.I||_T(t.l,t)}function Fi(t){yd(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,yy(t.T),jS(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function fm(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||pm(n.h,t))){if(!t.J&&pm(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Jc(n),_d(n);else break e;Ay(n),Ut(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Wu(Rt(n.cb,n),6e3));if(1>=aT(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ui(n,11)}else if((t.J||n.g==t)&&Jc(n),!Hc(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const c=l[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Ey(s,s.h),s.h=null))}if(r.D){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,Ce(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=TT(r,r.H?r.ka:null,r.V),o.J){uT(r.h,o);var a=o,u=r.J;u&&a.setTimeout(u),a.B&&(yd(a),Ku(a)),r.g=o}else wT(r);0<n.i.length&&Ed(n)}else l[0]!="stop"&&l[0]!="close"||Ui(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ui(n,7):Cy(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}yu(4)}catch{}}function rM(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ud(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function iM(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ud(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function eT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ud(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=iM(t),r=rM(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var tT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sM(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Hi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Hi){this.h=e!==void 0?e:t.h,Yc(this,t.j),this.s=t.s,this.g=t.g,Xc(this,t.m),this.l=t.l,e=t.i;var n=new vu;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),N0(this,n),this.o=t.o}else t&&(n=String(t).match(tT))?(this.h=!!e,Yc(this,n[1]||"",!0),this.s=wa(n[2]||""),this.g=wa(n[3]||"",!0),Xc(this,n[4]),this.l=wa(n[5]||"",!0),N0(this,n[6]||"",!0),this.o=wa(n[7]||"")):(this.h=!!e,this.i=new vu(null,this.h))}Hi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ia(e,D0,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ia(e,D0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ia(n,n.charAt(0)=="/"?uM:aM,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ia(n,cM)),t.join("")};function wr(t){return new Hi(t)}function Yc(t,e,n){t.j=n?wa(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Xc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function N0(t,e,n){e instanceof vu?(t.i=e,hM(t.i,t.h)):(n||(e=Ia(e,lM)),t.i=new vu(e,t.h))}function Ce(t,e,n){t.i.set(e,n)}function vd(t){return Ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function wa(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ia(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,oM),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function oM(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var D0=/[#\/\?@]/g,aM=/[#\?:]/g,uM=/[#\?]/g,lM=/[#\?@]/g,cM=/#/g;function vu(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function wi(t){t.g||(t.g=new Map,t.h=0,t.i&&sM(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}B=vu.prototype;B.add=function(t,e){wi(this),this.i=null,t=Mo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function nT(t,e){wi(t),e=Mo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function rT(t,e){return wi(t),e=Mo(t,e),t.g.has(e)}B.forEach=function(t,e){wi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};B.oa=function(){wi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};B.W=function(t){wi(this);let e=[];if(typeof t=="string")rT(this,t)&&(e=e.concat(this.g.get(Mo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};B.set=function(t,e){return wi(this),this.i=null,t=Mo(this,t),rT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};B.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function iT(t,e,n){nT(t,e),0<n.length&&(t.i=null,t.g.set(Mo(t,e),ly(n)),t.h+=n.length)}B.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Mo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function hM(t,e){e&&!t.j&&(wi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(nT(this,r),iT(this,i,n))},t)),t.j=e}var dM=class{constructor(e,n){this.h=e,this.g=n}};function sT(t){this.l=t||fM,Y.PerformanceNavigationTiming?(t=Y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Y.g&&Y.g.Ga&&Y.g.Ga()&&Y.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fM=10;function oT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function aT(t){return t.h?1:t.g?t.g.size:0}function pm(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ey(t,e){t.g?t.g.add(e):t.h=e}function uT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}sT.prototype.cancel=function(){if(this.i=lT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function lT(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ly(t.i)}function Sy(){}Sy.prototype.stringify=function(t){return Y.JSON.stringify(t,void 0)};Sy.prototype.parse=function(t){return Y.JSON.parse(t,void 0)};function pM(){this.g=new Sy}function mM(t,e,n){const r=n||"";try{eT(t,function(i,s){let o=i;ju(i)&&(o=gy(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function gM(t,e){const n=new fd;if(Y.Image){const r=new Image;r.onload=Pl(Ll,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Pl(Ll,n,r,"TestLoadImage: error",!1,e),r.onabort=Pl(Ll,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Pl(Ll,n,r,"TestLoadImage: timeout",!1,e),Y.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ll(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Qu(t){this.l=t.ac||null,this.j=t.jb||!1}Ct(Qu,wy);Qu.prototype.g=function(){return new wd(this.l,this.j)};Qu.prototype.i=function(t){return function(){return t}}({});function wd(t,e){ut.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ty,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ct(wd,ut);var Ty=0;B=wd.prototype;B.open=function(t,e){if(this.readyState!=Ty)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,wu(this)};B.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Y).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};B.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yu(this)),this.readyState=Ty};B.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,wu(this)),this.g&&(this.readyState=3,wu(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cT(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function cT(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}B.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Yu(this):wu(this),this.readyState==3&&cT(this)}};B.Va=function(t){this.g&&(this.response=this.responseText=t,Yu(this))};B.Ua=function(t){this.g&&(this.response=t,Yu(this))};B.ga=function(){this.g&&Yu(this)};function Yu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,wu(t)}B.setRequestHeader=function(t,e){this.v.append(t,e)};B.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};B.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function wu(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(wd.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var yM=Y.JSON.parse;function Me(t){ut.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=hT,this.K=this.L=!1}Ct(Me,ut);var hT="",vM=/^https?$/i,wM=["POST","PUT"];B=Me.prototype;B.Ka=function(t){this.L=t};B.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():cm.g(),this.C=this.u?x0(this.u):x0(cm),this.g.onreadystatechange=Rt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){R0(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Y.FormData&&t instanceof Y.FormData,!(0<=AS(wM,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{pT(this),0<this.B&&((this.K=IM(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Rt(this.qa,this)):this.A=vy(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){R0(this,s)}};function IM(t){return mo&&M$()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}B.qa=function(){typeof uy<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Et(this,"timeout"),this.abort(8))};function R0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,dT(t),Id(t)}function dT(t){t.D||(t.D=!0,Et(t,"complete"),Et(t,"error"))}B.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Et(this,"complete"),Et(this,"abort"),Id(this))};B.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Id(this,!0)),Me.X.M.call(this)};B.Ha=function(){this.s||(this.F||this.v||this.l?fT(this):this.fb())};B.fb=function(){fT(this)};function fT(t){if(t.h&&typeof uy<"u"&&(!t.C[1]||cr(t)!=4||t.aa()!=2)){if(t.v&&cr(t)==4)vy(t.Ha,0,t);else if(Et(t,"readystatechange"),cr(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(tT)[1]||null;if(!i&&Y.self&&Y.self.location){var s=Y.self.location.protocol;i=s.substr(0,s.length-1)}r=!vM.test(i?i.toLowerCase():"")}n=r}if(n)Et(t,"complete"),Et(t,"success");else{t.m=6;try{var o=2<cr(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",dT(t)}}finally{Id(t)}}}}function Id(t,e){if(t.g){pT(t);const n=t.g,r=t.C[0]?Gc:null;t.g=null,t.C=null,e||Et(t,"ready");try{n.onreadystatechange=r}catch{}}}function pT(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Y.clearTimeout(t.A),t.A=null)}function cr(t){return t.g?t.g.readyState:0}B.aa=function(){try{return 2<cr(this)?this.g.status:-1}catch{return-1}};B.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};B.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),yM(e)}};function P0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case hT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}B.Ea=function(){return this.m};B.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function mT(t){let e="";return hy(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function ky(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=mT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ce(t,e,n))}function oa(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function gT(t){this.Ca=0,this.i=[],this.j=new fd,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=oa("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=oa("baseRetryDelayMs",5e3,t),this.bb=oa("retryDelaySeedMs",1e4,t),this.$a=oa("forwardChannelMaxRetries",2,t),this.ta=oa("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new sT(t&&t.concurrentRequestLimit),this.Fa=new pM,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}B=gT.prototype;B.ma=8;B.G=1;function Cy(t){if(yT(t),t.G==3){var e=t.U++,n=wr(t.F);Ce(n,"SID",t.I),Ce(n,"RID",e),Ce(n,"TYPE","terminate"),Xu(t,n),e=new Hu(t,t.j,e,void 0),e.K=2,e.v=vd(wr(n)),n=!1,Y.navigator&&Y.navigator.sendBeacon&&(n=Y.navigator.sendBeacon(e.v.toString(),"")),!n&&Y.Image&&(new Image().src=e.v,n=!0),n||(e.g=kT(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ku(e)}ST(t)}function _d(t){t.g&&(by(t),t.g.cancel(),t.g=null)}function yT(t){_d(t),t.u&&(Y.clearTimeout(t.u),t.u=null),Jc(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Y.clearTimeout(t.m),t.m=null)}function Ed(t){oT(t.h)||t.m||(t.m=!0,US(t.Ja,t),t.C=0)}function _M(t,e){return aT(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Wu(Rt(t.Ja,t,e),ET(t,t.C)),t.C++,!0)}B.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Hu(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=DS(s),RS(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=vT(this,i,e),n=wr(this.F),Ce(n,"RID",t),Ce(n,"CVER",22),this.D&&Ce(n,"X-HTTP-Session-Id",this.D),Xu(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(mT(s)))+"&"+e:this.o&&ky(n,this.o,s)),Ey(this.h,i),this.Ya&&Ce(n,"TYPE","init"),this.O?(Ce(n,"$req",e),Ce(n,"SID","null"),i.Z=!0,dm(i,n,null)):dm(i,n,e),this.G=2}}else this.G==3&&(t?O0(this,t):this.i.length==0||oT(this.h)||O0(this))};function O0(t,e){var n;e?n=e.m:n=t.U++;const r=wr(t.F);Ce(r,"SID",t.I),Ce(r,"RID",n),Ce(r,"AID",t.T),Xu(t,r),t.o&&t.s&&ky(r,t.o,t.s),n=new Hu(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=vT(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Ey(t.h,n),dm(n,r,e)}function Xu(t,e){t.ia&&hy(t.ia,function(n,r){Ce(e,r,n)}),t.l&&eT({},function(n,r){Ce(e,r,n)})}function vT(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Rt(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].h;const c=i[u].g;if(l-=s,0>l)s=Math.max(0,i[u].h-100),a=!1;else try{mM(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function wT(t){t.g||t.u||(t.Z=1,US(t.Ia,t),t.A=0)}function Ay(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Wu(Rt(t.Ia,t),ET(t,t.A)),t.A++,!0)}B.Ia=function(){if(this.u=null,IT(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Wu(Rt(this.eb,this),t)}};B.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ut(10),_d(this),IT(this))};function by(t){t.B!=null&&(Y.clearTimeout(t.B),t.B=null)}function IT(t){t.g=new Hu(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=wr(t.sa);Ce(e,"RID","rpc"),Ce(e,"SID",t.I),Ce(e,"CI",t.L?"0":"1"),Ce(e,"AID",t.T),Ce(e,"TYPE","xmlhttp"),Xu(t,e),t.o&&t.s&&ky(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=vd(wr(e)),n.s=null,n.P=!0,YS(n,t)}B.cb=function(){this.v!=null&&(this.v=null,_d(this),Ay(this),Ut(19))};function Jc(t){t.v!=null&&(Y.clearTimeout(t.v),t.v=null)}function _T(t,e){var n=null;if(t.g==e){Jc(t),by(t),t.g=null;var r=2}else if(pm(t.h,e))n=e.D,uT(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=pd(),Et(r,new GS(r,n)),Ed(t)}else wT(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&_M(t,e)||r==2&&Ay(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Ui(t,5);break;case 4:Ui(t,10);break;case 3:Ui(t,6);break;default:Ui(t,2)}}}function ET(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ui(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Rt(t.kb,t);n||(n=new Hi("//www.google.com/images/cleardot.gif"),Y.location&&Y.location.protocol=="http"||Yc(n,"https"),vd(n)),gM(n.toString(),r)}else Ut(2);t.G=0,t.l&&t.l.va(e),ST(t),yT(t)}B.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ut(2)):(this.j.info("Failed to ping google.com"),Ut(1))};function ST(t){if(t.G=0,t.la=[],t.l){const e=lT(t.h);(e.length!=0||t.i.length!=0)&&(S0(t.la,e),S0(t.la,t.i),t.h.i.length=0,ly(t.i),t.i.length=0),t.l.ua()}}function TT(t,e,n){var r=n instanceof Hi?wr(n):new Hi(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Xc(r,r.m);else{var i=Y.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Hi(null,void 0);r&&Yc(s,r),e&&(s.g=e),i&&Xc(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&Ce(r,n,e),Ce(r,"VER",t.ma),Xu(t,r),r}function kT(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Me(new Qu({jb:!0})):new Me(t.ra),e.Ka(t.H),e}function CT(){}B=CT.prototype;B.xa=function(){};B.wa=function(){};B.va=function(){};B.ua=function(){};B.Ra=function(){};function Zc(){if(mo&&!(10<=Number(F$)))throw Error("Environmental error: no available transport.")}Zc.prototype.g=function(t,e){return new hn(t,e)};function hn(t,e){ut.call(this),this.g=new gT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Hc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Hc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Fo(this)}Ct(hn,ut);hn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ut(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=TT(t,null,t.V),Ed(t)};hn.prototype.close=function(){Cy(this.g)};hn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=gy(t),t=n);e.i.push(new dM(e.ab++,t)),e.G==3&&Ed(e)};hn.prototype.M=function(){this.g.l=null,delete this.j,Cy(this.g),delete this.g,hn.X.M.call(this)};function AT(t){Iy.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ct(AT,Iy);function bT(){_y.call(this),this.status=1}Ct(bT,_y);function Fo(t){this.g=t}Ct(Fo,CT);Fo.prototype.xa=function(){Et(this.g,"a")};Fo.prototype.wa=function(t){Et(this.g,new AT(t))};Fo.prototype.va=function(t){Et(this.g,new bT)};Fo.prototype.ua=function(){Et(this.g,"b")};Zc.prototype.createWebChannel=Zc.prototype.g;hn.prototype.send=hn.prototype.u;hn.prototype.open=hn.prototype.m;hn.prototype.close=hn.prototype.close;md.NO_ERROR=0;md.TIMEOUT=8;md.HTTP_ERROR=6;HS.COMPLETE="complete";KS.EventType=Gu;Gu.OPEN="a";Gu.CLOSE="b";Gu.ERROR="c";Gu.MESSAGE="d";ut.prototype.listen=ut.prototype.N;Me.prototype.listenOnce=Me.prototype.O;Me.prototype.getLastError=Me.prototype.Oa;Me.prototype.getLastErrorCode=Me.prototype.Ea;Me.prototype.getStatus=Me.prototype.aa;Me.prototype.getResponseJson=Me.prototype.Sa;Me.prototype.getResponseText=Me.prototype.fa;Me.prototype.send=Me.prototype.da;Me.prototype.setWithCredentials=Me.prototype.Ka;var EM=function(){return new Zc},SM=function(){return pd()},Bf=md,TM=HS,kM=vs,L0={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},CM=Qu,$l=KS,AM=Me;const $0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo="9.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=new Yh("@firebase/firestore");function mm(){return oi.logLevel}function bM(t){oi.setLogLevel(t)}function C(t,...e){if(oi.logLevel<=ae.DEBUG){const n=e.map(xy);oi.debug(`Firestore (${Uo}): ${t}`,...n)}}function je(t,...e){if(oi.logLevel<=ae.ERROR){const n=e.map(xy);oi.error(`Firestore (${Uo}): ${t}`,...n)}}function go(t,...e){if(oi.logLevel<=ae.WARN){const n=e.map(xy);oi.warn(`Firestore (${Uo}): ${t}`,...n)}}function xy(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t="Unexpected state"){const e=`FIRESTORE (${Uo}) INTERNAL ASSERTION FAILED: `+t;throw je(e),new Error(e)}function z(t,e){t||F()}function xM(t,e){t||F()}function L(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends Bt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class NM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class DM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class RM{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new ot;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ot,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ot)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(z(typeof r.accessToken=="string"),new xT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return z(e===null||typeof e=="string"),new rt(e)}}class PM{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(z(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class OM{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new PM(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class LM{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $M{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,C("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(z(typeof n.token=="string"),this.A=n.token,new LM(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MM(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=MM(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function J(t,e){return t<e?-1:t>e?1:0}function yo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function DT(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new k(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new k(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new k(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new k(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.timestamp=e}static fromTimestamp(e){return new j(e)}static min(){return new j(new be(0,0))}static max(){return new j(new be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n,r){n===void 0?n=0:n>e.length&&F(),r===void 0?r=e.length-n:r>e.length-n&&F(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Iu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Iu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class oe extends Iu{construct(e,n,r){return new oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new k(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new oe(n)}static emptyPath(){return new oe([])}}const FM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends Iu{construct(e,n,r){return new qe(e,n,r)}static isValidIdentifier(e){return FM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new k(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new k(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new k(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new k(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(n)}static emptyPath(){return new qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.path=e}static fromPath(e){return new D(oe.fromString(e))}static fromName(e){return new D(oe.fromString(e).popFirst(5))}static empty(){return new D(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new D(new oe(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function gm(t){return t.fields.find(e=>e.kind===2)}function bi(t){return t.fields.filter(e=>e.kind!==2)}RT.UNKNOWN_ID=-1;class UM{constructor(e,n){this.fieldPath=e,this.kind=n}}class eh{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new eh(0,dn.min())}}function PT(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=j.fromTimestamp(r===1e9?new be(n+1,0):new be(n,r));return new dn(i,D.empty(),e)}function OT(t){return new dn(t.readTime,t.key,-1)}class dn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new dn(j.min(),D.empty(),-1)}static max(){return new dn(j.max(),D.empty(),-1)}}function Ny(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=D.comparator(t.documentKey,e.documentKey),n!==0?n:J(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $T{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ii(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==LT)throw t;C("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new w((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):w.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):w.reject(n)}static resolve(e){return new w((n,r)=>{n(e)})}static reject(e){return new w((n,r)=>{r(e)})}static waitFor(e){return new w((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=w.resolve(!1);for(const r of e)n=n.next(i=>i?w.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new w((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const l=u;n(e[l]).next(c=>{o[l]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new w((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.P=new ot,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{n.error?this.P.reject(new Ma(e,n.error)):this.P.resolve()},this.transaction.onerror=r=>{const i=Dy(r.target.error);this.P.reject(new Ma(e,i))}}static open(e,n,r,i){try{return new Sd(n,e.transaction(i,r))}catch(s){throw new Ma(n,s)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(C("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new BM(n)}}class Nn{constructor(e,n,r){this.name=e,this.version=n,this.S=r,Nn.D(Pe())===12.2&&je("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return C("SimpleDb","Removing database:",e),xi(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!au())return!1;if(Nn.N())return!0;const e=Pe(),n=Nn.D(e),r=0<n&&n<10,i=Nn.k(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static N(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.O)==="YES"}static M(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static k(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async F(e){return this.db||(C("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Ma(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new k(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new k(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ma(e,o))},i.onupgradeneeded=s=>{C("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.$(o,i.transaction,s.oldVersion,this.version).next(()=>{C("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.F(e);const a=Sd.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(l=>(a.V(),l)).catch(l=>(a.abort(l),w.reject(l))).toPromise();return u.catch(()=>{}),await a.v,u}catch(a){const u=a,l=u.name!=="FirebaseError"&&o<3;if(C("SimpleDb","Transaction failed with error:",u.message,"Retrying:",l),this.close(),!l)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class VM{constructor(e){this.q=e,this.U=!1,this.K=null}get isDone(){return this.U}get G(){return this.K}set cursor(e){this.q=e}done(){this.U=!0}j(e){this.K=e}delete(){return xi(this.q.delete())}}class Ma extends k{constructor(e,n){super(E.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function _i(t){return t.name==="IndexedDbTransactionError"}class BM{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(C("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(C("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),xi(r)}add(e){return C("SimpleDb","ADD",this.store.name,e,e),xi(this.store.add(e))}get(e){return xi(this.store.get(e)).next(n=>(n===void 0&&(n=null),C("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return C("SimpleDb","DELETE",this.store.name,e),xi(this.store.delete(e))}count(){return C("SimpleDb","COUNT",this.store.name),xi(this.store.count())}W(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.H(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new w((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}J(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new w((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}Y(e,n){C("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.X=!1;const i=this.cursor(r);return this.H(i,(s,o,a)=>a.delete())}Z(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.H(i,n)}tt(e){const n=this.cursor({});return new w((r,i)=>{n.onerror=s=>{const o=Dy(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}H(e,n){const r=[];return new w((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new VM(a),l=n(a.primaryKey,a.value,u);if(l instanceof w){const c=l.catch(h=>(u.done(),w.reject(h)));r.push(c)}u.isDone?i():u.G===null?a.continue():a.continue(u.G)}}).next(()=>w.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.X?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function xi(t){return new w((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Dy(r.target.error);n(i)}})}let M0=!1;function Dy(t){const e=Nn.D(Pe());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new k("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return M0||(M0=!0,setTimeout(()=>{throw r},0)),r}}return t}class zM{constructor(e,n){this.asyncQueue=e,this.et=n,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){C("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{C("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(n){_i(n)?C("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Ii(n)}await this.nt(6e4)})}}class jM{constructor(e,n){this.localStore=e,this.persistence=n}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.it(n,e))}it(e,n){const r=new Set;let i=n,s=!0;return w.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return C("IndexBackiller",`Processing collection: ${o}`),this.rt(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}rt(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ot(i,s)).next(a=>(C("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ot(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=OT(s);Ny(o,r)>0&&(r=o)}),new dn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Yt.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qM{constructor(e,n,r,i,s,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class ai{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ai("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ai&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ws(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function MT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(t){return t==null}function _u(t){return t===0&&1/t==-1/0}function FT(t){return typeof t=="number"&&Number.isInteger(t)&&!_u(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WM(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Je(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Je(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const GM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ui(t){if(z(!!t),typeof t=="string"){let e=0;const n=GM.exec(t);if(z(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:$e(t.seconds),nanos:$e(t.nanos)}}function $e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function rs(t){return typeof t=="string"?Je.fromBase64String(t):Je.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function UT(t){const e=t.mapValue.fields.__previous_value__;return Ry(e)?UT(e):e}function Eu(t){const e=ui(t.mapValue.fields.__local_write_time__.timestampValue);return new be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},sc={nullValue:"NULL_VALUE"};function is(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ry(t)?4:VT(t)?9007199254740991:10:F()}function er(t,e){if(t===e)return!0;const n=is(t);if(n!==is(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Eu(t).isEqual(Eu(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=ui(r.timestampValue),o=ui(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return rs(r.bytesValue).isEqual(rs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return $e(r.geoPointValue.latitude)===$e(i.geoPointValue.latitude)&&$e(r.geoPointValue.longitude)===$e(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return $e(r.integerValue)===$e(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=$e(r.doubleValue),o=$e(i.doubleValue);return s===o?_u(s)===_u(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return yo(t.arrayValue.values||[],e.arrayValue.values||[],er);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(F0(s)!==F0(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!er(s[a],o[a])))return!1;return!0}(t,e);default:return F()}}function Su(t,e){return(t.values||[]).find(n=>er(n,e))!==void 0}function li(t,e){if(t===e)return 0;const n=is(t),r=is(e);if(n!==r)return J(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=$e(i.integerValue||i.doubleValue),a=$e(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return U0(t.timestampValue,e.timestampValue);case 4:return U0(Eu(t),Eu(e));case 5:return J(t.stringValue,e.stringValue);case 6:return function(i,s){const o=rs(i),a=rs(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=J(o[u],a[u]);if(l!==0)return l}return J(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=J($e(i.latitude),$e(s.latitude));return o!==0?o:J($e(i.longitude),$e(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=li(o[u],a[u]);if(l)return l}return J(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===zr.mapValue&&s===zr.mapValue)return 0;if(i===zr.mapValue)return 1;if(s===zr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=s.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=J(a[c],l[c]);if(h!==0)return h;const d=li(o[a[c]],u[l[c]]);if(d!==0)return d}return J(a.length,l.length)}(t.mapValue,e.mapValue);default:throw F()}}function U0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return J(t,e);const n=ui(t),r=ui(e),i=J(n.seconds,r.seconds);return i!==0?i:J(n.nanos,r.nanos)}function vo(t){return ym(t)}function ym(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=ui(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?rs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,D.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=ym(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${ym(r.fields[a])}`;return s+"}"}(t.mapValue):F();var e,n}function ss(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function vm(t){return!!t&&"integerValue"in t}function Tu(t){return!!t&&"arrayValue"in t}function V0(t){return!!t&&"nullValue"in t}function B0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function oc(t){return!!t&&"mapValue"in t}function Fa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ws(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Fa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Fa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function VT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function HM(t){return"nullValue"in t?sc:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?ss(ai.empty(),D.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:F()}function KM(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?ss(ai.empty(),D.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?zr:F()}function z0(t,e){const n=li(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function j0(t,e){const n=li(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n){this.position=e,this.inclusive=n}}function q0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=D.comparator(D.fromName(o.referenceValue),n.key):r=li(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function W0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!er(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{}class ne extends BT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new QM(e,n,r):n==="array-contains"?new JM(e,r):n==="in"?new QT(e,r):n==="not-in"?new ZM(e,r):n==="array-contains-any"?new eF(e,r):new ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new YM(e,r):new XM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(li(n,this.value)):n!==null&&is(this.value)===is(n)&&this.matchesComparison(li(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class pe extends BT{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new pe(e,n)}matches(e){return wo(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function wo(t){return t.op==="and"}function wm(t){return t.op==="or"}function zT(t){return jT(t)&&wo(t)}function jT(t){for(const e of t.filters)if(e instanceof pe)return!1;return!0}function qT(t){if(t instanceof ne)return t.field.canonicalString()+t.op.toString()+vo(t.value);{const e=t.filters.map(n=>qT(n)).join(",");return`${t.op}(${e})`}}function WT(t,e){return t instanceof ne?function(n,r){return r instanceof ne&&n.op===r.op&&n.field.isEqual(r.field)&&er(n.value,r.value)}(t,e):t instanceof pe?function(n,r){return r instanceof pe&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&WT(s,r.filters[o]),!0):!1}(t,e):void F()}function GT(t,e){const n=t.filters.concat(e);return pe.create(n,t.op)}function HT(t){return t instanceof ne?function(e){return`${e.field.canonicalString()} ${e.op} ${vo(e.value)}`}(t):t instanceof pe?function(e){return e.op.toString()+" {"+e.getFilters().map(HT).join(" ,")+"}"}(t):"Filter"}class QM extends ne{constructor(e,n,r){super(e,n,r),this.key=D.fromName(r.referenceValue)}matches(e){const n=D.comparator(e.key,this.key);return this.matchesComparison(n)}}class YM extends ne{constructor(e,n){super(e,"in",n),this.keys=KT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class XM extends ne{constructor(e,n){super(e,"not-in",n),this.keys=KT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function KT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>D.fromName(r.referenceValue))}class JM extends ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Tu(n)&&Su(n.arrayValue,this.value)}}class QT extends ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Su(this.value.arrayValue,n)}}class ZM extends ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(Su(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Su(this.value.arrayValue,n)}}class eF extends ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Tu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Su(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n="asc"){this.field=e,this.dir=n}}function tF(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||vt.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,vt.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,vt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ml(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ml(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ml(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ml(this.root,e,this.comparator,!0)}}class Ml{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class vt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??vt.RED,this.left=i??vt.EMPTY,this.right=s??vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new vt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return vt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return vt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}vt.EMPTY=null,vt.RED=!0,vt.BLACK=!1;vt.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(t,e,n,r,i){return this}insert(t,e,n){return new vt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new G0(this.data.getIterator())}getIteratorFrom(e){return new G0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ve(this.comparator);return n.data=e,n}}class G0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Cs(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new ln([])}unionWith(e){let n=new ve(qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new ln(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return yo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!oc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fa(n)}setAll(e){let n=qe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Fa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());oc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return er(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];oc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ws(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new wt(Fa(this.value))}}function YT(t){const e=[];return ws(t.fields,(n,r)=>{const i=new qe([n]);if(oc(r)){const s=YT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new ln(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ee(e,0,j.min(),j.min(),j.min(),wt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ee(e,1,n,j.min(),r,i,0)}static newNoDocument(e,n){return new Ee(e,2,n,j.min(),j.min(),wt.empty(),0)}static newUnknownDocument(e,n){return new Ee(e,3,n,j.min(),j.min(),wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nF{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Im(t,e=null,n=[],r=[],i=null,s=null,o=null){return new nF(t,e,n,r,i,s,o)}function os(t){const e=L(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>qT(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ju(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>vo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>vo(r)).join(",")),e.ft=n}return e.ft}function Zu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!tF(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!WT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!W0(t.startAt,e.startAt)&&W0(t.endAt,e.endAt)}function th(t){return D.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function nh(t,e){return t.filters.filter(n=>n instanceof ne&&n.field.isEqual(e))}function H0(t,e,n){let r=sc,i=!0;for(const s of nh(t,e)){let o=sc,a=!0;switch(s.op){case"<":case"<=":o=HM(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=sc}z0({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];z0({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function K0(t,e,n){let r=zr,i=!0;for(const s of nh(t,e)){let o=zr,a=!0;switch(s.op){case">=":case">":o=KM(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=zr}j0({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];j0({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.dt=null,this._t=null,this.startAt,this.endAt}}function XT(t,e,n,r,i,s,o,a){return new Tr(t,e,n,r,i,s,o,a)}function Vo(t){return new Tr(t)}function Q0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Py(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Td(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Oy(t){return t.collectionGroup!==null}function Ki(t){const e=L(t);if(e.dt===null){e.dt=[];const n=Td(e),r=Py(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new to(n)),e.dt.push(new to(qe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new to(qe.keyField(),s))}}}return e.dt}function tn(t){const e=L(t);if(!e._t)if(e.limitType==="F")e._t=Im(e.path,e.collectionGroup,Ki(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ki(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new to(s.field,o))}const r=e.endAt?new ci(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ci(e.startAt.position,e.startAt.inclusive):null;e._t=Im(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function _m(t,e){e.getFirstInequalityField(),Td(t);const n=t.filters.concat([e]);return new Tr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function rh(t,e,n){return new Tr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function el(t,e){return Zu(tn(t),tn(e))&&t.limitType===e.limitType}function JT(t){return`${os(tn(t))}|lt:${t.limitType}`}function Em(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>HT(r)).join(", ")}]`),Ju(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>vo(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>vo(r)).join(",")),`Target(${n})`}(tn(t))}; limitType=${t.limitType})`}function Ly(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):D.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Ki(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=q0(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ki(n),r)||n.endAt&&!function(i,s,o){const a=q0(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ki(n),r))}(t,e)}function ZT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ek(t){return(e,n)=>{let r=!1;for(const i of Ki(t)){const s=rF(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function rF(t,e,n){const r=t.field.isKeyField()?D.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?li(a,u):F()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_u(e)?"-0":e}}function nk(t){return{integerValue:""+t}}function rk(t,e){return FT(e)?nk(e):tk(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(){this._=void 0}}function iF(t,e,n){return t instanceof Io?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof as?sk(t,e):t instanceof us?ok(t,e):function(r,i){const s=ik(r,i),o=Y0(s)+Y0(r.gt);return vm(s)&&vm(r.gt)?nk(o):tk(r.yt,o)}(t,e)}function sF(t,e,n){return t instanceof as?sk(t,e):t instanceof us?ok(t,e):n}function ik(t,e){return t instanceof _o?vm(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Io extends kd{}class as extends kd{constructor(e){super(),this.elements=e}}function sk(t,e){const n=ak(e);for(const r of t.elements)n.some(i=>er(i,r))||n.push(r);return{arrayValue:{values:n}}}class us extends kd{constructor(e){super(),this.elements=e}}function ok(t,e){let n=ak(e);for(const r of t.elements)n=n.filter(i=>!er(i,r));return{arrayValue:{values:n}}}class _o extends kd{constructor(e,n){super(),this.yt=e,this.gt=n}}function Y0(t){return $e(t.integerValue||t.doubleValue)}function ak(t){return Tu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n){this.field=e,this.transform=n}}function oF(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof as&&r instanceof as||n instanceof us&&r instanceof us?yo(n.elements,r.elements,er):n instanceof _o&&r instanceof _o?er(n.gt,r.gt):n instanceof Io&&r instanceof Io}(t.transform,e.transform)}class aF{constructor(e,n){this.version=e,this.transformResults=n}}class Ae{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ae}static exists(e){return new Ae(void 0,e)}static updateTime(e){return new Ae(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ac(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Cd{}function uk(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new zo(t.key,Ae.none()):new Bo(t.key,t.data,Ae.none());{const n=t.data,r=wt.empty();let i=new ve(qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new kr(t.key,r,new ln(i.toArray()),Ae.none())}}function uF(t,e,n){t instanceof Bo?function(r,i,s){const o=r.value.clone(),a=J0(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof kr?function(r,i,s){if(!ac(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=J0(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(lk(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ua(t,e,n,r){return t instanceof Bo?function(i,s,o,a){if(!ac(i.precondition,s))return o;const u=i.value.clone(),l=Z0(i.fieldTransforms,a,s);return u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof kr?function(i,s,o,a){if(!ac(i.precondition,s))return o;const u=Z0(i.fieldTransforms,a,s),l=s.data;return l.setAll(lk(i)),l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return ac(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function lF(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=ik(r.transform,i||null);s!=null&&(n===null&&(n=wt.empty()),n.set(r.field,s))}return n||null}function X0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&yo(n,r,(i,s)=>oF(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Bo extends Cd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class kr extends Cd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function lk(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function J0(t,e,n){const r=new Map;z(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,sF(o,a,n[i]))}return r}function Z0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,iF(s,o,e))}return r}class zo extends Cd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $y extends Cd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cF{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge,se;function ck(t){switch(t){default:return F();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function hk(t){if(t===void 0)return je("GRPC error has no .code"),E.UNKNOWN;switch(t){case Ge.OK:return E.OK;case Ge.CANCELLED:return E.CANCELLED;case Ge.UNKNOWN:return E.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return E.INTERNAL;case Ge.UNAVAILABLE:return E.UNAVAILABLE;case Ge.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Ge.NOT_FOUND:return E.NOT_FOUND;case Ge.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Ge.ABORTED:return E.ABORTED;case Ge.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Ge.DATA_LOSS:return E.DATA_LOSS;default:return F()}}(se=Ge||(Ge={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ws(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return MT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hF=new Fe(D.comparator);function Xt(){return hF}const dk=new Fe(D.comparator);function _a(...t){let e=dk;for(const n of t)e=e.insert(n.key,n);return e}function fk(t){let e=dk;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function qn(){return Va()}function pk(){return Va()}function Va(){return new Ei(t=>t.toString(),(t,e)=>t.isEqual(e))}const dF=new Fe(D.comparator),fF=new ve(D.comparator);function Z(...t){let e=fF;for(const n of t)e=e.add(n);return e}const pF=new ve(J);function Ad(){return pF}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,rl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new nl(j.min(),i,Ad(),Xt(),Z())}}class rl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new rl(r,n,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class mk{constructor(e,n){this.targetId=e,this.Et=n}}class gk{constructor(e,n,r=Je.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class e1{constructor(){this.At=0,this.Rt=n1(),this.bt=Je.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=Z(),n=Z(),r=Z();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:F()}}),new rl(this.bt,this.Pt,e,n,r)}xt(){this.vt=!1,this.Rt=n1()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class mF{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Xt(),this.qt=t1(),this.Ut=new ve(J)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const r=this.Wt(n);switch(e.state){case 0:this.zt(n)&&r.Dt(e.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.Mt(),r.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(r.Ft(),r.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:F()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,r=e.Et.count,i=this.Yt(n);if(i){const s=i.target;if(th(s))if(r===0){const o=new D(s.path);this.Qt(n,o,Ee.newNoDocument(o,j.min()))}else z(r===1);else this.Xt(n)!==r&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&th(a.target)){const u=new D(a.target.path);this.Lt.get(u)!==null||this.te(o,u)||this.Qt(o,u,Ee.newNoDocument(u,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=Z();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Yt(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new nl(e,n,this.Ut,this.Lt,r);return this.Lt=Xt(),this.qt=t1(),this.Ut=new ve(J),i}Gt(e,n){if(!this.zt(e))return;const r=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new e1,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new ve(J),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||C("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new e1),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function t1(){return new Fe(D.comparator)}function n1(){return new Fe(D.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gF=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),yF=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),vF=(()=>({and:"AND",or:"OR"}))();class wF{constructor(e,n){this.databaseId=e,this.wt=n}}function Eo(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yk(t,e){return t.wt?e.toBase64():e.toUint8Array()}function IF(t,e){return Eo(t,e.toTimestamp())}function We(t){return z(!!t),j.fromTimestamp(function(e){const n=ui(e);return new be(n.seconds,n.nanos)}(t))}function My(t,e){return function(n){return new oe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function vk(t){const e=oe.fromString(t);return z(Ak(e)),e}function ku(t,e){return My(t.databaseId,e.path)}function Yn(t,e){const n=vk(e);if(n.get(1)!==t.databaseId.projectId)throw new k(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new k(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new D(Ik(n))}function Sm(t,e){return My(t.databaseId,e)}function wk(t){const e=vk(t);return e.length===4?oe.emptyPath():Ik(e)}function Cu(t){return new oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ik(t){return z(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function r1(t,e,n){return{name:ku(t,e),fields:n.value.mapValue.fields}}function _k(t,e,n){const r=Yn(t,e.name),i=We(e.updateTime),s=e.createTime?We(e.createTime):j.min(),o=new wt({mapValue:{fields:e.fields}}),a=Ee.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function _F(t,e){return"found"in e?function(n,r){z(!!r.found),r.found.name,r.found.updateTime;const i=Yn(n,r.found.name),s=We(r.found.updateTime),o=r.found.createTime?We(r.found.createTime):j.min(),a=new wt({mapValue:{fields:r.found.fields}});return Ee.newFoundDocument(i,s,o,a)}(t,e):"missing"in e?function(n,r){z(!!r.missing),z(!!r.readTime);const i=Yn(n,r.missing),s=We(r.readTime);return Ee.newNoDocument(i,s)}(t,e):F()}function EF(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.wt?(z(l===void 0||typeof l=="string"),Je.fromBase64String(l||"")):(z(l===void 0||l instanceof Uint8Array),Je.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?E.UNKNOWN:hk(u.code);return new k(l,u.message||"")}(o);n=new gk(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Yn(t,r.document.name),s=We(r.document.updateTime),o=r.document.createTime?We(r.document.createTime):j.min(),a=new wt({mapValue:{fields:r.document.fields}}),u=Ee.newFoundDocument(i,s,o,a),l=r.targetIds||[],c=r.removedTargetIds||[];n=new uc(l,c,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Yn(t,r.document),s=r.readTime?We(r.readTime):j.min(),o=Ee.newNoDocument(i,s),a=r.removedTargetIds||[];n=new uc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Yn(t,r.document),s=r.removedTargetIds||[];n=new uc([],s,i,null)}else{if(!("filter"in e))return F();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new cF(i),o=r.targetId;n=new mk(o,s)}}return n}function Au(t,e){let n;if(e instanceof Bo)n={update:r1(t,e.key,e.value)};else if(e instanceof zo)n={delete:ku(t,e.key)};else if(e instanceof kr)n={update:r1(t,e.key,e.data),updateMask:bF(e.fieldMask)};else{if(!(e instanceof $y))return F();n={verify:ku(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Io)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof as)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof us)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof _o)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw F()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:IF(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F()}(t,e.precondition)),n}function Tm(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?Ae.updateTime(We(i.updateTime)):i.exists!==void 0?Ae.exists(i.exists):Ae.none()}(e.currentDocument):Ae.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)z(o.setToServerValue==="REQUEST_TIME"),a=new Io;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new as(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new us(l)}else"increment"in o?a=new _o(s,o.increment):F();const u=qe.fromServerFormat(o.fieldPath);return new tl(u,a)}(t,i)):[];if(e.update){e.update.name;const i=Yn(t,e.update.name),s=new wt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const u=a.fieldPaths||[];return new ln(u.map(l=>qe.fromServerFormat(l)))}(e.updateMask);return new kr(i,s,o,n,r)}return new Bo(i,s,n,r)}if(e.delete){const i=Yn(t,e.delete);return new zo(i,n)}if(e.verify){const i=Yn(t,e.verify);return new $y(i,n)}return F()}function SF(t,e){return t&&t.length>0?(z(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?We(r.updateTime):We(i);return s.isEqual(j.min())&&(s=We(i)),new aF(s,r.transformResults||[])}(n,e))):[]}function Ek(t,e){return{documents:[Sm(t,e.path)]}}function Sk(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Sm(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Sm(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length!==0)return Ck(pe.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(l=>function(c){return{field:bs(c.field),direction:kF(c.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(u,l){return u.wt||Ju(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function Tk(t){let e=wk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){z(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=kk(c);return h instanceof pe&&zT(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new to(xs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Ju(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(c){const h=!!c.before,d=c.values||[];return new ci(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(c){const h=!c.before,d=c.values||[];return new ci(d,h)}(n.endAt)),XT(e,i,o,s,a,"F",u,l)}function TF(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return F()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function kk(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=xs(e.unaryFilter.field);return ne.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=xs(e.unaryFilter.field);return ne.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=xs(e.unaryFilter.field);return ne.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=xs(e.unaryFilter.field);return ne.create(s,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(t):t.fieldFilter!==void 0?function(e){return ne.create(xs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return pe.create(e.compositeFilter.filters.map(n=>kk(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return F()}}(e.compositeFilter.op))}(t):F()}function kF(t){return gF[t]}function CF(t){return yF[t]}function AF(t){return vF[t]}function bs(t){return{fieldPath:t.canonicalString()}}function xs(t){return qe.fromServerFormat(t.fieldPath)}function Ck(t){return t instanceof ne?function(e){if(e.op==="=="){if(B0(e.value))return{unaryFilter:{field:bs(e.field),op:"IS_NAN"}};if(V0(e.value))return{unaryFilter:{field:bs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(B0(e.value))return{unaryFilter:{field:bs(e.field),op:"IS_NOT_NAN"}};if(V0(e.value))return{unaryFilter:{field:bs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bs(e.field),op:CF(e.op),value:e.value}}}(t):t instanceof pe?function(e){const n=e.getFilters().map(r=>Ck(r));return n.length===1?n[0]:{compositeFilter:{op:AF(e.op),filters:n}}}(t):F()}function bF(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ak(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=i1(e)),e=xF(t.get(n),e);return i1(e)}function xF(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function i1(t){return t+""}function Wn(t){const e=t.length;if(z(e>=2),e===2)return z(t.charAt(0)===""&&t.charAt(1)===""),oe.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&F(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:F()}s=o+2}return new oe(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(t,e){return[t,zt(e)]}function bk(t,e,n){return[t,zt(e),n]}const NF={},DF=["prefixPath","collectionGroup","readTime","documentId"],RF=["prefixPath","collectionGroup","documentId"],PF=["collectionGroup","readTime","prefixPath","documentId"],OF=["canonicalId","targetId"],LF=["targetId","path"],$F=["path","targetId"],MF=["collectionId","parent"],FF=["indexId","uid"],UF=["uid","sequenceNumber"],VF=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],BF=["indexId","uid","orderedDocumentKey"],zF=["userId","collectionPath","documentId"],jF=["userId","collectionPath","largestBatchId"],qF=["userId","collectionGroup","largestBatchId"],xk=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],WF=[...xk,"documentOverlays"],Nk=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Dk=Nk,GF=[...Dk,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km extends $T{constructor(e,n){super(),this.se=e,this.currentSequenceNumber=n}}function ht(t,e){const n=L(t);return Nn.M(n.se,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&uF(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ua(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ua(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=pk();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=uk(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(j.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&yo(this.mutations,e.mutations,(n,r)=>X0(n,r))&&yo(this.baseMutations,e.baseMutations,(n,r)=>X0(n,r))}}class Uy{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){z(e.mutations.length===r.length);let i=dF;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Uy(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n,r,i,s=j.min(),o=j.min(),a=Je.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Zr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e){this.ie=e}}function HF(t,e){let n;if(e.document)n=_k(t.ie,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=D.fromSegments(e.noDocument.path),i=cs(e.noDocument.readTime);n=Ee.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return F();{const r=D.fromSegments(e.unknownDocument.path),i=cs(e.unknownDocument.version);n=Ee.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(r){const i=new be(r[0],r[1]);return j.fromTimestamp(i)}(e.readTime)),n}function o1(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:ih(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:ku(i,s.key),fields:s.data.value.mapValue.fields,updateTime:Eo(i,s.version.toTimestamp()),createTime:Eo(i,s.createTime.toTimestamp())}}(t.ie,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:ls(e.version)};else{if(!e.isUnknownDocument())return F();r.unknownDocument={path:n.path.toArray(),version:ls(e.version)}}return r}function ih(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function ls(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function cs(t){const e=new be(t.seconds,t.nanoseconds);return j.fromTimestamp(e)}function Ni(t,e){const n=(e.baseMutations||[]).map(s=>Tm(t.ie,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Tm(t.ie,s)),i=be.fromMillis(e.localWriteTimeMs);return new Fy(e.batchId,i,n,r)}function Ea(t){const e=cs(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?cs(t.lastLimboFreeSnapshotVersion):j.min();let r;var i;return t.query.documents!==void 0?(z((i=t.query).documents.length===1),r=tn(Vo(wk(i.documents[0])))):r=function(s){return tn(Tk(s))}(t.query),new Zr(r,t.targetId,0,t.lastListenSequenceNumber,e,n,Je.fromBase64String(t.resumeToken))}function Pk(t,e){const n=ls(e.snapshotVersion),r=ls(e.lastLimboFreeSnapshotVersion);let i;i=th(e.target)?Ek(t.ie,e.target):Sk(t.ie,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:os(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function By(t){const e=Tk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?rh(e,e.limit,"L"):e}function zf(t,e){return new Vy(e.largestBatchId,Tm(t.ie,e.overlayMutation))}function a1(t,e){const n=e.path.lastSegment();return[t,zt(e.path.popLast()),n]}function u1(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:ls(r.readTime),documentKey:zt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KF{getBundleMetadata(e,n){return l1(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:cs(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return l1(e).put({bundleId:(r=n).id,createTime:ls(We(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return c1(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:By(i.bundledQuery),readTime:cs(i.readTime)};var i})}saveNamedQuery(e,n){return c1(e).put(function(r){return{name:r.name,readTime:ls(We(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function l1(t){return ht(t,"bundles")}function c1(t){return ht(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,n){this.yt=e,this.userId=n}static re(e,n){const r=n.uid||"";return new bd(e,r)}getOverlay(e,n){return aa(e).get(a1(this.userId,n)).next(r=>r?zf(this.yt,r):null)}getOverlays(e,n){const r=qn();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Vy(n,o);i.push(this.oe(e,a))}),w.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(zt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(aa(e).Y("collectionPathOverlayIndex",a))}),w.waitFor(s)}getOverlaysForCollection(e,n,r){const i=qn(),s=zt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return aa(e).W("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const l=zf(this.yt,u);i.set(l.getKey(),l)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=qn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return aa(e).Z({index:"collectionGroupOverlayIndex",range:a},(u,l,c)=>{const h=zf(this.yt,l);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):c.done()}).next(()=>s)}oe(e,n){return aa(e).put(function(r,i,s){const[o,a,u]=a1(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:u,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:Au(r.ie,s.mutation)}}(this.yt,this.userId,n))}}function aa(t){return ht(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(){}ue(e,n){this.ce(e,n),n.ae()}ce(e,n){if("nullValue"in e)this.he(n,5);else if("booleanValue"in e)this.he(n,10),n.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(n,15),n.le($e(e.integerValue));else if("doubleValue"in e){const r=$e(e.doubleValue);isNaN(r)?this.he(n,13):(this.he(n,15),_u(r)?n.le(0):n.le(r))}else if("timestampValue"in e){const r=e.timestampValue;this.he(n,20),typeof r=="string"?n.fe(r):(n.fe(`${r.seconds||""}`),n.le(r.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,n),this._e(n);else if("bytesValue"in e)this.he(n,30),n.we(rs(e.bytesValue)),this._e(n);else if("referenceValue"in e)this.me(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.he(n,45),n.le(r.latitude||0),n.le(r.longitude||0)}else"mapValue"in e?VT(e)?this.he(n,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,n),this._e(n)):"arrayValue"in e?(this.ye(e.arrayValue,n),this._e(n)):F()}de(e,n){this.he(n,25),this.pe(e,n)}pe(e,n){n.fe(e)}ge(e,n){const r=e.fields||{};this.he(n,55);for(const i of Object.keys(r))this.de(i,n),this.ce(r[i],n)}ye(e,n){const r=e.values||[];this.he(n,50);for(const i of r)this.ce(i,n)}me(e,n){this.he(n,37),D.fromName(e).path.forEach(r=>{this.he(n,60),this.pe(r,n)})}he(e,n){e.le(n)}_e(e){e.le(2)}}Di.Ie=new Di;function QF(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function h1(t){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const s=QF(255&n[i]);if(r+=s,s!==8)break}return r}(t);return Math.ceil(e/8)}class YF{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Te(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ee(r.value),r=n.next();this.Ae()}Re(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.be(r.value),r=n.next();this.Pe()}ve(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ee(r);else if(r<2048)this.Ee(960|r>>>6),this.Ee(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ee(480|r>>>12),this.Ee(128|63&r>>>6),this.Ee(128|63&r);else{const i=n.codePointAt(0);this.Ee(240|i>>>18),this.Ee(128|63&i>>>12),this.Ee(128|63&i>>>6),this.Ee(128|63&i)}}this.Ae()}Ve(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.be(r);else if(r<2048)this.be(960|r>>>6),this.be(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.be(480|r>>>12),this.be(128|63&r>>>6),this.be(128|63&r);else{const i=n.codePointAt(0);this.be(240|i>>>18),this.be(128|63&i>>>12),this.be(128|63&i>>>6),this.be(128|63&i)}}this.Pe()}Se(e){const n=this.De(e),r=h1(n);this.Ce(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}xe(e){const n=this.De(e),r=h1(n);this.Ce(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Ne(){this.ke(255),this.ke(255)}Oe(){this.Me(255),this.Me(255)}reset(){this.position=0}seed(e){this.Ce(e.length),this.buffer.set(e,this.position),this.position+=e.length}Fe(){return this.buffer.slice(0,this.position)}De(e){const n=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ee(e){const n=255&e;n===0?(this.ke(0),this.ke(255)):n===255?(this.ke(255),this.ke(0)):this.ke(n)}be(e){const n=255&e;n===0?(this.Me(0),this.Me(255)):n===255?(this.Me(255),this.Me(0)):this.Me(e)}Ae(){this.ke(0),this.ke(1)}Pe(){this.Me(0),this.Me(1)}ke(e){this.Ce(1),this.buffer[this.position++]=e}Me(e){this.Ce(1),this.buffer[this.position++]=~e}Ce(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class XF{constructor(e){this.$e=e}we(e){this.$e.Te(e)}fe(e){this.$e.ve(e)}le(e){this.$e.Se(e)}ae(){this.$e.Ne()}}class JF{constructor(e){this.$e=e}we(e){this.$e.Re(e)}fe(e){this.$e.Ve(e)}le(e){this.$e.xe(e)}ae(){this.$e.Oe()}}class ua{constructor(){this.$e=new YF,this.Be=new XF(this.$e),this.Le=new JF(this.$e)}seed(e){this.$e.seed(e)}qe(e){return e===0?this.Be:this.Le}Fe(){return this.$e.Fe()}reset(){this.$e.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Ue(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Ri(this.indexId,this.documentKey,this.arrayValue,r)}}function Nr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=d1(t.arrayValue,e.arrayValue),n!==0?n:(n=d1(t.directionalValue,e.directionalValue),n!==0?n:D.comparator(t.documentKey,e.documentKey)))}function d1(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZF{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ke=e.orderBy,this.Ge=[];for(const n of e.filters){const r=n;r.isInequality()?this.Qe=r:this.Ge.push(r)}}je(e){z(e.collectionGroup===this.collectionId);const n=gm(e);if(n!==void 0&&!this.We(n))return!1;const r=bi(e);let i=0,s=0;for(;i<r.length&&this.We(r[i]);++i);if(i===r.length)return!0;if(this.Qe!==void 0){const o=r[i];if(!this.ze(this.Qe,o)||!this.He(this.Ke[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Ke.length||!this.He(this.Ke[s++],o))return!1}return!0}We(e){for(const n of this.Ge)if(this.ze(n,e))return!0;return!1}ze(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}He(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(t){var e,n;if(z(t instanceof ne||t instanceof pe),t instanceof ne){if(t instanceof QT){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>ne.create(t.field,"==",s)))||[];return pe.create(i,"or")}return t}const r=t.filters.map(i=>Ok(i));return pe.create(r,t.op)}function e2(t){if(t.getFilters().length===0)return[];const e=bm(Ok(t));return z(Lk(e)),Cm(e)||Am(e)?[e]:e.getFilters()}function Cm(t){return t instanceof ne}function Am(t){return t instanceof pe&&zT(t)}function Lk(t){return Cm(t)||Am(t)||function(e){if(e instanceof pe&&wm(e)){for(const n of e.getFilters())if(!Cm(n)&&!Am(n))return!1;return!0}return!1}(t)}function bm(t){if(z(t instanceof ne||t instanceof pe),t instanceof ne)return t;if(t.filters.length===1)return bm(t.filters[0]);const e=t.filters.map(r=>bm(r));let n=pe.create(e,t.op);return n=sh(n),Lk(n)?n:(z(n instanceof pe),z(wo(n)),z(n.filters.length>1),n.filters.reduce((r,i)=>zy(r,i)))}function zy(t,e){let n;return z(t instanceof ne||t instanceof pe),z(e instanceof ne||e instanceof pe),n=t instanceof ne?e instanceof ne?function(r,i){return pe.create([r,i],"and")}(t,e):f1(t,e):e instanceof ne?f1(e,t):function(r,i){if(z(r.filters.length>0&&i.filters.length>0),wo(r)&&wo(i))return GT(r,i.getFilters());const s=wm(r)?r:i,o=wm(r)?i:r,a=s.filters.map(u=>zy(u,o));return pe.create(a,"or")}(t,e),sh(n)}function f1(t,e){if(wo(e))return GT(e,t.getFilters());{const n=e.filters.map(r=>zy(t,r));return pe.create(n,"or")}}function sh(t){if(z(t instanceof ne||t instanceof pe),t instanceof ne)return t;const e=t.getFilters();if(e.length===1)return sh(e[0]);if(jT(t))return t;const n=e.map(i=>sh(i)),r=[];return n.forEach(i=>{i instanceof ne?r.push(i):i instanceof pe&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:pe.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(){this.Je=new jy}addToCollectionParentIndex(e,n){return this.Je.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n){return w.resolve(null)}getIndexType(e,n){return w.resolve(0)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,n){return w.resolve(dn.min())}getMinOffsetFromCollectionGroup(e,n){return w.resolve(dn.min())}updateCollectionGroup(e,n,r){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class jy{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ve(oe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ve(oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=new Uint8Array(0);class n2{constructor(e,n){this.user=e,this.databaseId=n,this.Ye=new jy,this.Xe=new Ei(r=>os(r),(r,i)=>Zu(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.Ye.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.Ye.add(n)});const s={collectionId:r,parent:zt(i)};return p1(e).put(s)}return w.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[DT(n),""],!1,!0);return p1(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Wn(o.parent))}return r})}addFieldIndex(e,n){const r=Ul(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=ca(e);return s.next(a=>{o.put(u1(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Ul(e),i=ca(e),s=la(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=la(e);let i=!0;const s=new Map;return w.forEach(this.Ze(n),o=>this.tn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=Z();const a=[];return w.forEach(s,(u,l)=>{var c;C("IndexedDbIndexManager",`Using index ${c=u,`id=${c.indexId}|cg=${c.collectionGroup}|f=${c.fields.map(g=>`${g.fieldPath}:${g.kind}`).join(",")}`} to execute ${os(n)}`);const h=function(g,_){const T=gm(_);if(T===void 0)return null;for(const b of nh(g,T.fieldPath))switch(b.op){case"array-contains-any":return b.value.arrayValue.values||[];case"array-contains":return[b.value]}return null}(l,u),d=function(g,_){const T=new Map;for(const b of bi(_))for(const N of nh(g,b.fieldPath))switch(N.op){case"==":case"in":T.set(b.fieldPath.canonicalString(),N.value);break;case"not-in":case"!=":return T.set(b.fieldPath.canonicalString(),N.value),Array.from(T.values())}return null}(l,u),p=function(g,_){const T=[];let b=!0;for(const N of bi(_)){const $=N.kind===0?H0(g,N.fieldPath,g.startAt):K0(g,N.fieldPath,g.startAt);T.push($.value),b&&(b=$.inclusive)}return new ci(T,b)}(l,u),y=function(g,_){const T=[];let b=!0;for(const N of bi(_)){const $=N.kind===0?K0(g,N.fieldPath,g.endAt):H0(g,N.fieldPath,g.endAt);T.push($.value),b&&(b=$.inclusive)}return new ci(T,b)}(l,u),v=this.en(u,l,p),S=this.en(u,l,y),m=this.nn(u,l,d),f=this.sn(u.indexId,h,v,p.inclusive,S,y.inclusive,m);return w.forEach(f,g=>r.J(g,n.limit).next(_=>{_.forEach(T=>{const b=D.fromSegments(T.documentKey);o.has(b)||(o=o.add(b),a.push(b))})}))}).next(()=>a)}return w.resolve(null)})}Ze(e){let n=this.Xe.get(e);return n||(e.filters.length===0?n=[e]:n=e2(pe.create(e.filters,"and")).map(r=>Im(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Xe.set(e,n),n)}sn(e,n,r,i,s,o,a){const u=(n!=null?n.length:1)*Math.max(r.length,s.length),l=u/(n!=null?n.length:1),c=[];for(let h=0;h<u;++h){const d=n?this.rn(n[h/l]):Fl,p=this.on(e,d,r[h%l],i),y=this.un(e,d,s[h%l],o),v=a.map(S=>this.on(e,d,S,!0));c.push(...this.createRange(p,y,v))}return c}on(e,n,r,i){const s=new Ri(e,D.empty(),n,r);return i?s:s.Ue()}un(e,n,r,i){const s=new Ri(e,D.empty(),n,r);return i?s.Ue():s}tn(e,n){const r=new ZF(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.je(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.Ze(n);return w.forEach(i,s=>this.tn(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let u=new ve(qe.comparator),l=!1;for(const c of a.filters)for(const h of c.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?l=!0:u=u.add(h.field));for(const c of a.orderBy)c.field.isKeyField()||(u=u.add(c.field));return u.size+(l?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(n)&&i.length>1&&r===2?1:r)}cn(e,n){const r=new ua;for(const i of bi(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.qe(i.kind);Di.Ie.ue(s,o)}return r.Fe()}rn(e){const n=new ua;return Di.Ie.ue(e,n.qe(0)),n.Fe()}an(e,n){const r=new ua;return Di.Ie.ue(ss(this.databaseId,n),r.qe(function(i){const s=bi(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Fe()}nn(e,n,r){if(r===null)return[];let i=[];i.push(new ua);let s=0;for(const o of bi(e)){const a=r[s++];for(const u of i)if(this.hn(n,o.fieldPath)&&Tu(a))i=this.ln(i,o,a);else{const l=u.qe(o.kind);Di.Ie.ue(a,l)}}return this.fn(i)}en(e,n,r){return this.nn(e,n,r.position)}fn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Fe();return n}ln(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new ua;u.seed(a.Fe()),Di.Ie.ue(o,u.qe(n.kind)),s.push(u)}return s}hn(e,n){return!!e.filters.find(r=>r instanceof ne&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Ul(e),i=ca(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(s=>{const o=[];return w.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(l,c){const h=c?new eh(c.sequenceNumber,new dn(cs(c.readTime),new D(Wn(c.documentKey)),c.largestBatchId)):eh.empty(),d=l.fields.map(([p,y])=>new UM(qe.fromServerFormat(p),y));return new RT(l.indexId,l.collectionGroup,d,h)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:J(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Ul(e),s=ca(e);return this.dn(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>w.forEach(a,u=>s.put(u1(u.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return w.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?w.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),w.forEach(a,u=>this._n(e,i,u).next(l=>{const c=this.wn(s,u);return l.isEqual(c)?w.resolve():this.mn(e,s,u,l,c)}))))})}gn(e,n,r,i){return la(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.an(r,n.key),documentKey:n.key.path.toArray()})}yn(e,n,r,i){return la(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.an(r,n.key),n.key.path.toArray()])}_n(e,n,r){const i=la(e);let s=new ve(Nr);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.an(r,n)])},(o,a)=>{s=s.add(new Ri(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}wn(e,n){let r=new ve(Nr);const i=this.cn(n,e);if(i==null)return r;const s=gm(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Tu(o))for(const a of o.arrayValue.values||[])r=r.add(new Ri(n.indexId,e.key,this.rn(a),i))}else r=r.add(new Ri(n.indexId,e.key,Fl,i));return r}mn(e,n,r,i,s){C("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,u,l,c,h){const d=a.getIterator(),p=u.getIterator();let y=Cs(d),v=Cs(p);for(;y||v;){let S=!1,m=!1;if(y&&v){const f=l(y,v);f<0?m=!0:f>0&&(S=!0)}else y!=null?m=!0:S=!0;S?(c(v),v=Cs(p)):m?(h(y),y=Cs(d)):(y=Cs(d),v=Cs(p))}}(i,s,Nr,a=>{o.push(this.gn(e,n,r,a))},a=>{o.push(this.yn(e,n,r,a))}),w.waitFor(o)}dn(e){let n=1;return ca(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Nr(o,a)).filter((o,a,u)=>!a||Nr(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Nr(o,e),u=Nr(o,n);if(a===0)i[0]=e.Ue();else if(a>0&&u<0)i.push(o),i.push(o.Ue());else if(u>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.pn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Fl,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Fl,[]];s.push(IDBKeyRange.bound(a,u))}return s}pn(e,n){return Nr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(m1)}getMinOffset(e,n){return w.mapArray(this.Ze(n),r=>this.tn(e,r).next(i=>i||F())).next(m1)}}function p1(t){return ht(t,"collectionParents")}function la(t){return ht(t,"indexEntries")}function Ul(t){return ht(t,"indexConfiguration")}function ca(t){return ht(t,"indexState")}function m1(t){z(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Ny(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new dn(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ht{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Ht(e,Ht.DEFAULT_COLLECTION_PERCENTILE,Ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $k(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.Z({range:o},(c,h,d)=>(a++,d.delete()));s.push(u.next(()=>{z(a===1)}));const l=[];for(const c of n.mutations){const h=bk(e,c.key.path,n.batchId);s.push(i.delete(h)),l.push(c.key)}return w.waitFor(s).next(()=>l)}function oh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw F();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ht.DEFAULT_COLLECTION_PERCENTILE=10,Ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ht.DEFAULT=new Ht(41943040,Ht.DEFAULT_COLLECTION_PERCENTILE,Ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ht.DISABLED=new Ht(-1,0,0);class xd{constructor(e,n,r,i){this.userId=e,this.yt=n,this.indexManager=r,this.referenceDelegate=i,this.In={}}static re(e,n,r,i){z(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new xd(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Dr(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Ns(e),o=Dr(e);return o.add({}).next(a=>{z(typeof a=="number");const u=new Fy(a,n,r,i),l=function(d,p,y){const v=y.baseMutations.map(m=>Au(d.ie,m)),S=y.mutations.map(m=>Au(d.ie,m));return{userId:p,batchId:y.batchId,localWriteTimeMs:y.localWriteTime.toMillis(),baseMutations:v,mutations:S}}(this.yt,this.userId,u),c=[];let h=new ve((d,p)=>J(d.canonicalString(),p.canonicalString()));for(const d of i){const p=bk(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(l)),c.push(s.put(p,NF))}return h.forEach(d=>{c.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.In[a]=u.keys()}),w.waitFor(c).next(()=>u)})}lookupMutationBatch(e,n){return Dr(e).get(n).next(r=>r?(z(r.userId===this.userId),Ni(this.yt,r)):null)}Tn(e,n){return this.In[n]?w.resolve(this.In[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.In[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Dr(e).Z({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(z(a.batchId>=r),s=Ni(this.yt,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Dr(e).Z({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Dr(e).W("userMutationsIndex",n).next(r=>r.map(i=>Ni(this.yt,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=lc(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Ns(e).Z({range:i},(o,a,u)=>{const[l,c,h]=o,d=Wn(c);if(l===this.userId&&n.path.isEqual(d))return Dr(e).get(h).next(p=>{if(!p)throw F();z(p.userId===this.userId),s.push(Ni(this.yt,p))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ve(J);const i=[];return n.forEach(s=>{const o=lc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=Ns(e).Z({range:a},(l,c,h)=>{const[d,p,y]=l,v=Wn(p);d===this.userId&&s.path.isEqual(v)?r=r.add(y):h.done()});i.push(u)}),w.waitFor(i).next(()=>this.En(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=lc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new ve(J);return Ns(e).Z({range:o},(u,l,c)=>{const[h,d,p]=u,y=Wn(d);h===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(p)):c.done()}).next(()=>this.En(e,a))}En(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Dr(e).get(s).next(o=>{if(o===null)throw F();z(o.userId===this.userId),r.push(Ni(this.yt,o))}))}),w.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return $k(e.se,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.An(n.batchId)}),w.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return w.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return Ns(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=Wn(s[1]);i.push(u)}else a.done()}).next(()=>{z(i.length===0)})})}containsKey(e,n){return Mk(e,this.userId,n)}Rn(e){return Fk(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Mk(t,e,n){const r=lc(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Ns(t).Z({range:s,X:!0},(a,u,l)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),l.done()}).next(()=>o)}function Dr(t){return ht(t,"mutations")}function Ns(t){return ht(t,"documentMutations")}function Fk(t){return ht(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new hs(0)}static vn(){return new hs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(e,n){this.referenceDelegate=e,this.yt=n}allocateTargetId(e){return this.Vn(e).next(n=>{const r=new hs(n.highestTargetId);return n.highestTargetId=r.next(),this.Sn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(n=>j.fromTimestamp(new be(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Vn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Sn(e,i)))}addTargetData(e,n){return this.Dn(e,n).next(()=>this.Vn(e).next(r=>(r.targetCount+=1,this.Cn(n,r),this.Sn(e,r))))}updateTargetData(e,n){return this.Dn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>As(e).delete(n.targetId)).next(()=>this.Vn(e)).next(r=>(z(r.targetCount>0),r.targetCount-=1,this.Sn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return As(e).Z((o,a)=>{const u=Ea(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>w.waitFor(s)).next(()=>i)}forEachTarget(e,n){return As(e).Z((r,i)=>{const s=Ea(i);n(s)})}Vn(e){return y1(e).get("targetGlobalKey").next(n=>(z(n!==null),n))}Sn(e,n){return y1(e).put("targetGlobalKey",n)}Dn(e,n){return As(e).put(Pk(this.yt,n))}Cn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Vn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=os(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return As(e).Z({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const l=Ea(a);Zu(n,l.target)&&(s=l,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Mr(e);return n.forEach(o=>{const a=zt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),w.waitFor(i)}removeMatchingKeys(e,n,r){const i=Mr(e);return w.forEach(n,s=>{const o=zt(s.path);return w.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Mr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Mr(e);let s=Z();return i.Z({range:r,X:!0},(o,a,u)=>{const l=Wn(o[1]),c=new D(l);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=zt(n.path),i=IDBKeyRange.bound([r],[DT(r)],!1,!0);let s=0;return Mr(e).Z({index:"documentTargetsIndex",X:!0,range:i},([o,a],u,l)=>{o!==0&&(s++,l.done())}).next(()=>s>0)}ne(e,n){return As(e).get(n).next(r=>r?Ea(r):null)}}function As(t){return ht(t,"targets")}function y1(t){return ht(t,"targetGlobal")}function Mr(t){return ht(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v1([t,e],[n,r]){const i=J(t,n);return i===0?J(e,r):i}class i2{constructor(e){this.xn=e,this.buffer=new ve(v1),this.Nn=0}kn(){return++this.Nn}On(e){const n=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();v1(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class s2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Mn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return this.Mn!==null}Fn(e){C("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){_i(n)?C("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Ii(n)}await this.Fn(3e5)})}}class o2{constructor(e,n){this.$n=e,this.params=n}calculateTargetCount(e,n){return this.$n.Bn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return w.resolve(Yt.at);const r=new i2(n);return this.$n.forEachTarget(e,i=>r.On(i.sequenceNumber)).next(()=>this.$n.Ln(e,i=>r.On(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.$n.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.$n.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(C("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(g1)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),g1):this.qn(e,n))}getCacheSize(e){return this.$n.getCacheSize(e)}qn(e,n){let r,i,s,o,a,u,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(C("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(l=Date.now(),mm()<=ae.DEBUG&&C("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${h} documents in `+(l-u)+`ms
Total Duration: ${l-c}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e,n){this.db=e,this.garbageCollector=function(r,i){return new o2(r,i)}(this,n)}Bn(e){const n=this.Un(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Un(e){let n=0;return this.Ln(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Ln(e,n){return this.Kn(e,(r,i)=>n(i))}addReference(e,n,r){return Vl(e,r)}removeReference(e,n,r){return Vl(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Vl(e,n)}Gn(e,n){return function(r,i){let s=!1;return Fk(r).tt(o=>Mk(r,o,i).next(a=>(a&&(s=!0),w.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Kn(e,(o,a)=>{if(a<=n){const u=this.Gn(e,o).next(l=>{if(!l)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,j.min()),Mr(e).delete([0,zt(o.path)])))});i.push(u)}}).next(()=>w.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Vl(e,n)}Kn(e,n){const r=Mr(e);let i,s=Yt.at;return r.Z({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:l})=>{o===0?(s!==Yt.at&&n(new D(Wn(i)),s),s=l,i=u):s=Yt.at}).next(()=>{s!==Yt.at&&n(new D(Wn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Vl(t,e){return Mr(t).put(function(n,r){return{targetId:0,path:zt(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(){this.changes=new Ei(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?w.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e){this.yt=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Ti(e).put(r)}removeEntry(e,n,r){return Ti(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],ih(s),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Qn(e,r)))}getEntry(e,n){let r=Ee.newInvalidDocument(n);return Ti(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(ha(n))},(i,s)=>{r=this.jn(n,s)}).next(()=>r)}Wn(e,n){let r={size:0,document:Ee.newInvalidDocument(n)};return Ti(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(ha(n))},(i,s)=>{r={document:this.jn(n,s),size:oh(s)}}).next(()=>r)}getEntries(e,n){let r=Xt();return this.zn(e,n,(i,s)=>{const o=this.jn(i,s);r=r.insert(i,o)}).next(()=>r)}Hn(e,n){let r=Xt(),i=new Fe(D.comparator);return this.zn(e,n,(s,o)=>{const a=this.jn(s,o);r=r.insert(s,a),i=i.insert(s,oh(o))}).next(()=>({documents:r,Jn:i}))}zn(e,n,r){if(n.isEmpty())return w.resolve();let i=new ve(_1);n.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(ha(i.first()),ha(i.last())),o=i.getIterator();let a=o.getNext();return Ti(e).Z({index:"documentKeyIndex",range:s},(u,l,c)=>{const h=D.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&_1(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,l),a=o.hasNext()?o.getNext():null),a?c.j(ha(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,n,r){const i=[n.popLast().toArray(),n.lastSegment(),ih(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],s=[n.popLast().toArray(),n.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ti(e).W(IDBKeyRange.bound(i,s,!0)).next(o=>{let a=Xt();for(const u of o){const l=this.jn(D.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);a=a.insert(l.key,l)}return a})}getAllFromCollectionGroup(e,n,r,i){let s=Xt();const o=I1(n,r),a=I1(n,dn.max());return Ti(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,l,c)=>{const h=this.jn(D.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);s=s.insert(h.key,h),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new l2(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return w1(e).get("remoteDocumentGlobalKey").next(n=>(z(!!n),n))}Qn(e,n){return w1(e).put("remoteDocumentGlobalKey",n)}jn(e,n){if(n){const r=HF(this.yt,n);if(!(r.isNoDocument()&&r.version.isEqual(j.min())))return r}return Ee.newInvalidDocument(e)}}function Vk(t){return new u2(t)}class l2 extends Uk{constructor(e,n){super(),this.Yn=e,this.trackRemovals=n,this.Xn=new Ei(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new ve((s,o)=>J(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.Xn.get(s);if(n.push(this.Yn.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=o1(this.Yn.yt,o);i=i.add(s.path.popLast());const l=oh(u);r+=l-a.size,n.push(this.Yn.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=o1(this.Yn.yt,o.convertToNoDocument(j.min()));n.push(this.Yn.addEntry(e,s,u))}}),i.forEach(s=>{n.push(this.Yn.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.Yn.updateMetadata(e,r)),w.waitFor(n)}getFromCache(e,n){return this.Yn.Wn(e,n).next(r=>(this.Xn.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.Yn.Hn(e,n).next(({documents:r,Jn:i})=>(i.forEach((s,o)=>{this.Xn.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function w1(t){return ht(t,"remoteDocumentGlobal")}function Ti(t){return ht(t,"remoteDocumentsV14")}function ha(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function I1(t,e){const n=e.documentKey.path.toArray();return[t,ih(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function _1(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=J(n[s],r[s]),i)return i;return i=J(n.length,r.length),i||(i=J(n[n.length-2],r[r.length-2]),i||J(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ua(r.mutation,i,ln.empty(),be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Z()){const i=qn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=_a();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=qn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Z()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Xt();const o=Va(),a=Va();return n.forEach((u,l)=>{const c=r.get(l.key);i.has(l.key)&&(c===void 0||c.mutation instanceof kr)?s=s.insert(l.key,l):c!==void 0&&(o.set(l.key,c.mutation.getFieldMask()),Ua(c.mutation,l,c.mutation.getFieldMask(),be.now()))}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var h;return a.set(l,new c2(c,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Va();let i=new Fe((o,a)=>o-a),s=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let c=r.get(u)||ln.empty();c=a.applyToLocalView(l,c),r.set(u,c);const h=(i.get(a.batchId)||Z()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,h=pk();c.forEach(d=>{if(!s.has(d)){const p=uk(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return w.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return D.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Oy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):w.resolve(qn());let a=-1,u=s;return o.next(l=>w.forEach(l,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?w.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{u=u.insert(c,d)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,u,l,Z())).next(c=>({batchId:a,changes:fk(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new D(n)).next(r=>{let i=_a();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=_a();return this.indexManager.getCollectionParents(e,i).next(o=>w.forEach(o,a=>{const u=function(l,c){return new Tr(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r).next(l=>{l.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,u)=>{const l=u.getKey();i.get(l)===null&&(i=i.insert(l,Ee.newInvalidDocument(l)))});let o=_a();return i.forEach((a,u)=>{const l=s.get(a);l!==void 0&&Ua(l.mutation,u,ln.empty(),be.now()),Ly(n,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return w.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:We(r.createTime)}),w.resolve()}getNamedQuery(e,n){return w.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:By(r.bundledQuery),readTime:We(r.readTime)}}(n)),w.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(){this.overlays=new Fe(D.comparator),this.es=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}getOverlays(e,n){const r=qn();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.oe(e,n,s)}),w.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),w.resolve()}getOverlaysForCollection(e,n,r){const i=qn(),s=n.length+1,o=new D(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return w.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Fe((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let c=s.get(l.largestBatchId);c===null&&(c=qn(),s=s.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=qn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=i)););return w.resolve(a)}oe(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Vy(n,r));let s=this.es.get(n);s===void 0&&(s=Z(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(){this.ns=new ve(tt.ss),this.rs=new ve(tt.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new tt(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new tt(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new D(new oe([])),r=new tt(n,e),i=new tt(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new D(new oe([])),r=new tt(n,e),i=new tt(n,e+1);let s=Z();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new tt(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class tt{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return D.comparator(e.key,n.key)||J(e._s,n._s)}static os(e,n){return J(e._s,n._s)||D.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new ve(tt.ss)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Fy(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new tt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return w.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new tt(n,0),i=new tt(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),w.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ve(J);return n.forEach(i=>{const s=new tt(i,0),o=new tt(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),w.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;D.isDocumentKey(s)||(s=s.child(""));const o=new tt(new D(s),0);let a=new ve(J);return this.gs.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u._s)),!0)},o),w.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){z(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return w.forEach(n.mutations,i=>{const s=new tt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new tt(n,0),i=this.gs.firstAfterOrEqual(r);return w.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(e){this.Es=e,this.docs=new Fe(D.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return w.resolve(r?r.document.mutableCopy():Ee.newInvalidDocument(n))}getEntries(e,n){let r=Xt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ee.newInvalidDocument(i))}),w.resolve(r)}getAllFromCollection(e,n,r){let i=Xt();const s=new D(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Ny(OT(u),r)<=0||(i=i.insert(u.key,u.mutableCopy()))}return w.resolve(i)}getAllFromCollectionGroup(e,n,r,i){F()}As(e,n){return w.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new m2(this)}getSize(e){return w.resolve(this.size)}}class m2 extends Uk{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),w.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e){this.persistence=e,this.Rs=new Ei(n=>os(n),Zu),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.bs=0,this.Ps=new qy,this.targetCount=0,this.vs=hs.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),w.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new hs(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.Dn(n),w.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),w.waitFor(s).next(()=>i)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return w.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),w.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),w.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),w.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return w.resolve(r)}containsKey(e,n){return w.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Yt(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new g2(this),this.indexManager=new t2,this.remoteDocumentCache=function(r){return new p2(r)}(r=>this.referenceDelegate.xs(r)),this.yt=new Rk(n),this.Ns=new h2(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new d2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new f2(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){C("MemoryPersistence","Starting transaction:",e);const i=new y2(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return w.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class y2 extends $T{constructor(e){super(),this.currentSequenceNumber=e}}class Nd{constructor(e){this.persistence=e,this.Fs=new qy,this.$s=null}static Bs(e){return new Nd(e)}get Ls(){if(this.$s)return this.$s;throw F()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),w.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),w.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.Ls,r=>{const i=D.fromPath(r);return this.qs(e,i).next(s=>{s||n.removeEntry(i,j.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return w.or([()=>w.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(e){this.yt=e}$(e,n,r,i){const s=new Sd("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",s1,{unique:!0}),a.createObjectStore("documentMutations")}(e),E1(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=w.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),E1(e)),o=o.next(()=>function(a){const u=a.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:j.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,u){return u.store("mutations").W().next(l=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",s1,{unique:!0});const c=u.store("mutations"),h=l.map(d=>c.put(d));return w.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Us(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(s)))),r<7&&i>=7&&(o=o.next(()=>this.Gs(s))),r<8&&i>=8&&(o=o.next(()=>this.Qs(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.js(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const u=a.createObjectStore("documentOverlays",{keyPath:zF});u.createIndex("collectionPathOverlayIndex",jF,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",qF,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const u=a.createObjectStore("remoteDocumentsV14",{keyPath:DF});u.createIndex("documentKeyIndex",RF),u.createIndex("collectionGroupIndex",PF)}(e)).next(()=>this.Ws(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.zs(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:FF}).createIndex("sequenceNumberIndex",UF,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:VF}).createIndex("documentKeyIndex",BF,{unique:!1})}(e))),o}Ks(e){let n=0;return e.store("remoteDocuments").Z((r,i)=>{n+=oh(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Us(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(i=>w.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>w.forEach(a,u=>{z(u.userId===s.userId);const l=Ni(this.yt,u);return $k(e,s.userId,l).next(()=>{})}))}))}Gs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const u=new oe(o),l=function(c){return[0,zt(c)]}(u);s.push(n.get(l).next(c=>c?w.resolve():(h=>n.put({targetId:0,path:zt(h),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>w.waitFor(s))})}Qs(e,n){e.createObjectStore("collectionParents",{keyPath:MF});const r=n.store("collectionParents"),i=new jy,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:zt(u)})}};return n.store("remoteDocuments").Z({X:!0},(o,a)=>{const u=new oe(o);return s(u.popLast())}).next(()=>n.store("documentMutations").Z({X:!0},([o,a,u],l)=>{const c=Wn(a);return s(c.popLast())}))}js(e){const n=e.store("targets");return n.Z((r,i)=>{const s=Ea(i),o=Pk(this.yt,s);return n.put(o)})}Ws(e,n){const r=n.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=n.store("remoteDocumentsV14"),u=(l=o,l.document?new D(oe.fromString(l.document.name).popFirst(5)):l.noDocument?D.fromSegments(l.noDocument.path):l.unknownDocument?D.fromSegments(l.unknownDocument.path):F()).path.toArray();var l;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>w.waitFor(i))}zs(e,n){const r=n.store("mutations"),i=Vk(this.yt),s=new zk(Nd.Bs,this.yt.ie);return r.W().next(o=>{const a=new Map;return o.forEach(u=>{var l;let c=(l=a.get(u.userId))!==null&&l!==void 0?l:Z();Ni(this.yt,u).keys().forEach(h=>c=c.add(h)),a.set(u.userId,c)}),w.forEach(a,(u,l)=>{const c=new rt(l),h=bd.re(this.yt,c),d=s.getIndexManager(c),p=xd.re(c,this.yt,d,s.referenceDelegate);return new Bk(i,p,h,d).recalculateAndSaveOverlaysForDocumentKeys(new km(n,Yt.at),u).next()})})}}function E1(t){t.createObjectStore("targetDocuments",{keyPath:LF}).createIndex("documentTargetsIndex",$F,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",OF,{unique:!0}),t.createObjectStore("targetGlobal")}const jf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Wy{constructor(e,n,r,i,s,o,a,u,l,c,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Hs=s,this.window=o,this.document=a,this.Js=l,this.Ys=c,this.Xs=h,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=d=>Promise.resolve(),!Wy.C())throw new k(E.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new a2(this,i),this.ii=n+"main",this.yt=new Rk(u),this.ri=new Nn(this.ii,this.Xs,new v2(this.yt)),this.Cs=new r2(this.referenceDelegate,this.yt),this.remoteDocumentCache=Vk(this.yt),this.Ns=new KF,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,c===!1&&je("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new k(E.FAILED_PRECONDITION,jf);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new Yt(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Bl(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(n=>{n||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(n=>this.isPrimary&&!n?this._i(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(_i(e))return C("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return C("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return da(e).get("owner").next(n=>w.resolve(this.mi(n)))}gi(e){return Bl(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=ht(n,"clientMetadata");return r.W().next(i=>{const s=this.Ii(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return w.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.oi)for(const n of e)this.oi.removeItem(this.Ti(n.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?w.resolve(!0):da(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)){if(this.mi(n)&&this.networkEnabled)return!0;if(!this.mi(n)){if(!n.allowTabSynchronization)throw new k(E.FAILED_PRECONDITION,jf);return!1}}return!(!this.networkEnabled||!this.inForeground)||Bl(e).W().next(r=>this.Ii(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&C("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new km(e,Yt.at);return this._i(n).next(()=>this.gi(n))}),this.ri.close(),this.Pi()}Ii(e,n){return e.filter(r=>this.pi(r.updateTimeMs,n)&&!this.Ei(r.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>Bl(e).W().next(n=>this.Ii(n,18e5).map(r=>r.clientId)))}get started(){return this.Ds}getMutationQueue(e,n){return xd.re(e,this.yt,n,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new n2(e,this.yt.ie.databaseId)}getDocumentOverlayCache(e){return bd.re(this.yt,e)}getBundleCache(){return this.Ns}runTransaction(e,n,r){C("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=(o=this.Xs)===15?GF:o===14?Dk:o===13?Nk:o===12?WF:o===11?xk:void F();var o;let a;return this.ri.runTransaction(e,i,s,u=>(a=new km(u,this.Ss?this.Ss.next():Yt.at),n==="readwrite-primary"?this.fi(a).next(l=>!!l||this.di(a)).next(l=>{if(!l)throw je(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new k(E.FAILED_PRECONDITION,LT);return r(a)}).next(l=>this.wi(a).next(()=>l)):this.Vi(a).next(()=>r(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}Vi(e){return da(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)&&!this.mi(n)&&!(this.Ys||this.allowTabSynchronization&&n.allowTabSynchronization))throw new k(E.FAILED_PRECONDITION,jf)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return da(e).put("owner",n)}static C(){return Nn.C()}_i(e){const n=da(e);return n.get("owner").next(r=>this.mi(r)?(C("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):w.resolve())}pi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(je(`Detected an update time that is in the future: ${e} > ${r}`),!1))}ci(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground=this.document.visibilityState==="visible")}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ai(),eD()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var n;try{const r=((n=this.oi)===null||n===void 0?void 0:n.getItem(this.Ti(e)))!==null;return C("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return je("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){je("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch{}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function da(t){return ht(t,"owner")}function Bl(t){return ht(t,"clientMetadata")}function Gy(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=Z(),i=Z();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Hy(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(Q0(n))return w.resolve(null);let r=tn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=rh(n,null,"F"),r=tn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Z(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const l=this.Fi(n,a);return this.$i(n,l,o,u.readTime)?this.ki(e,rh(n,null,"F")):this.Bi(e,l,n,u)}))})))}Oi(e,n,r,i){return Q0(n)||i.isEqual(j.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(mm()<=ae.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Em(n)),this.Bi(e,o,n,PT(i,-1)))})}Fi(e,n){let r=new ve(ek(e));return n.forEach((i,s)=>{Ly(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return mm()<=ae.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",Em(n)),this.Ni.getDocumentsMatchingQuery(e,n,dn.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new Fe(J),this.Ui=new Ei(s=>os(s),Zu),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Bk(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function qk(t,e,n,r){return new w2(t,e,n,r)}async function Wk(t,e){const n=L(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=Z();for(const l of i){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of s){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(r,u).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function I2(t,e){const n=L(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let d=w.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(y=>{const v=u.docVersions.get(p);z(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),l.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Z();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Gk(t){const e=L(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function _2(t,e){const n=L(t),r=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Je.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(y,v,S){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(d,p,c)&&a.push(n.Cs.updateTargetData(s,p))});let u=Xt(),l=Z();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(Hk(s,o,e.documentUpdates).next(c=>{u=c.Wi,l=c.zi})),!r.isEqual(j.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return w.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,l)).next(()=>u)}).then(s=>(n.qi=i,s))}function Hk(t,e,n){let r=Z(),i=Z();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Xt();return n.forEach((a,u)=>{const l=s.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(j.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):C("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{Wi:o,zi:i}})}function E2(t,e){const n=L(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function So(t,e){const n=L(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,w.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new Zr(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.qi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(r.targetId,r),n.Ui.set(e,r.targetId)),r})}async function To(t,e,n){const r=L(t),i=r.qi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!_i(o))throw o;C("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qi=r.qi.remove(e),r.Ui.delete(i.target)}function ah(t,e,n){const r=L(t);let i=j.min(),s=Z();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=L(a),h=c.Ui.get(l);return h!==void 0?w.resolve(c.qi.get(h)):c.Cs.getTargetData(u,l)}(r,o,tn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:j.min(),n?s:Z())).next(a=>(Yk(r,ZT(e),a),{documents:a,Hi:s})))}function Kk(t,e){const n=L(t),r=L(n.Cs),i=n.qi.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ne(s,e).next(o=>o?o.target:null))}function Qk(t,e){const n=L(t),r=n.Ki.get(e)||j.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Gi.getAllFromCollectionGroup(i,e,PT(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(Yk(n,e,i),i))}function Yk(t,e,n){let r=t.Ki.get(e)||j.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}async function S2(t,e,n,r){const i=L(t);let s=Z(),o=Xt();for(const l of n){const c=e.Ji(l.metadata.name);l.document&&(s=s.add(c));const h=e.Yi(l);h.setReadTime(e.Xi(l.metadata.readTime)),o=o.insert(c,h)}const a=i.Gi.newChangeBuffer({trackRemovals:!0}),u=await So(i,function(l){return tn(Vo(oe.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",l=>Hk(l,a,o).next(c=>(a.apply(l),c)).next(c=>i.Cs.removeMatchingKeysForTargetId(l,u.targetId).next(()=>i.Cs.addMatchingKeys(l,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(l,c.Wi,c.zi)).next(()=>c.Wi)))}async function T2(t,e,n=Z()){const r=await So(t,tn(By(e.bundledQuery))),i=L(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=We(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Ns.saveNamedQuery(s,e);const a=r.withResumeToken(Je.EMPTY_BYTE_STRING,o);return i.qi=i.qi.insert(a.targetId,a),i.Cs.updateTargetData(s,a).next(()=>i.Cs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Cs.addMatchingKeys(s,n,r.targetId)).next(()=>i.Ns.saveNamedQuery(s,e))})}function S1(t,e){return`firestore_clients_${t}_${e}`}function T1(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function qf(t,e){return`firestore_targets_${t}_${e}`}class uh{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Zi(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new k(i.error.code,i.error.message))),o?new uh(e,n,i.state,s):(je("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ba{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Zi(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new k(r.error.code,r.error.message))),s?new Ba(e,r.state,i):(je("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class lh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Zi(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Ad();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=FT(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new lh(e,s):(je("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Ky{constructor(e,n){this.clientId=e,this.onlineState=n}static Zi(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Ky(n.clientId,n.onlineState):(je("SharedClientState",`Failed to parse online state: ${e}`),null)}}class xm{constructor(){this.activeTargetIds=Ad()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Wf{constructor(e,n,r,i,s){this.window=e,this.Hs=n,this.persistenceKey=r,this.sr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new Fe(J),this.started=!1,this.cr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ar=S1(this.persistenceKey,this.sr),this.hr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.ur=this.ur.insert(this.sr,new xm),this.lr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.mr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const r of e){if(r===this.sr)continue;const i=this.getItem(S1(this.persistenceKey,r));if(i){const s=lh.Zi(r,i);s&&(this.ur=this.ur.insert(s.clientId,s))}}this.gr();const n=this.storage.getItem(this.wr);if(n){const r=this.yr(n);r&&this.pr(r)}for(const r of this.cr)this.rr(r);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let n=!1;return this.ur.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,n,r){this.Tr(e,n,r),this.Er(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(qf(this.persistenceKey,e));if(r){const i=Ba.Zi(e,r);i&&(n=i.state)}}return this.Ar.er(e),this.gr(),n}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(qf(this.persistenceKey,e))}updateQueryState(e,n,r){this.Rr(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Er(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return C("SharedClientState","READ",e,n),n}setItem(e,n){C("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){C("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const n=e;if(n.storageArea===this.storage){if(C("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ar)return void je("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.lr.test(n.key)){if(n.newValue==null){const r=this.vr(n.key);return this.Vr(r,null)}{const r=this.Sr(n.key,n.newValue);if(r)return this.Vr(r.clientId,r)}}else if(this.dr.test(n.key)){if(n.newValue!==null){const r=this.Dr(n.key,n.newValue);if(r)return this.Cr(r)}}else if(this._r.test(n.key)){if(n.newValue!==null){const r=this.Nr(n.key,n.newValue);if(r)return this.kr(r)}}else if(n.key===this.wr){if(n.newValue!==null){const r=this.yr(n.newValue);if(r)return this.pr(r)}}else if(n.key===this.hr){const r=function(i){let s=Yt.at;if(i!=null)try{const o=JSON.parse(i);z(typeof o=="number"),s=o}catch(o){je("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==Yt.at&&this.sequenceNumberHandler(r)}else if(n.key===this.mr){const r=this.Or(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Mr(i)))}}}else this.cr.push(n)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,n,r){const i=new uh(this.currentUser,e,n,r),s=T1(this.persistenceKey,this.currentUser,e);this.setItem(s,i.tr())}Er(e){const n=T1(this.persistenceKey,this.currentUser,e);this.removeItem(n)}br(e){const n={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(n))}Rr(e,n,r){const i=qf(this.persistenceKey,e),s=new Ba(e,n,r);this.setItem(i,s.tr())}Pr(e){const n=JSON.stringify(Array.from(e));this.setItem(this.mr,n)}vr(e){const n=this.lr.exec(e);return n?n[1]:null}Sr(e,n){const r=this.vr(e);return lh.Zi(r,n)}Dr(e,n){const r=this.dr.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return uh.Zi(new rt(s),i,n)}Nr(e,n){const r=this._r.exec(e),i=Number(r[1]);return Ba.Zi(i,n)}yr(e){return Ky.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);C("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,n){const r=n?this.ur.insert(e,n):this.ur.remove(e),i=this.Ir(this.ur),s=this.Ir(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.Br(o,a).then(()=>{this.ur=r})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let n=Ad();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class Xk{constructor(){this.Lr=new xm,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new xm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);C("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(u=>(C("RestConnection","Received: ",u),u),u=>{throw go("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",r),u})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Uo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=C2[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new AM;a.setWithCredentials(!0),a.listenOnce(TM.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Bf.NO_ERROR:const l=a.getResponseJson();C("Connection","XHR received:",JSON.stringify(l)),s(l);break;case Bf.TIMEOUT:C("Connection",'RPC "'+e+'" timed out'),o(new k(E.DEADLINE_EXCEEDED,"Request time out"));break;case Bf.HTTP_ERROR:const c=a.getStatus();if(C("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const p=function(y){const v=y.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(v)>=0?v:E.UNKNOWN}(d.status);o(new k(p,d.message))}else o(new k(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new k(E.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{C("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=EM(),o=SM(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new CM({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const u=i.join("");C("Connection","Creating WebChannel: "+u,a);const l=s.createWebChannel(u,a);let c=!1,h=!1;const d=new A2({Hr:y=>{h?C("Connection","Not sending because WebChannel is closed:",y):(c||(C("Connection","Opening WebChannel transport."),l.open(),c=!0),C("Connection","WebChannel sending:",y),l.send(y))},Jr:()=>l.close()}),p=(y,v,S)=>{y.listen(v,m=>{try{S(m)}catch(f){setTimeout(()=>{throw f},0)}})};return p(l,$l.EventType.OPEN,()=>{h||C("Connection","WebChannel transport opened.")}),p(l,$l.EventType.CLOSE,()=>{h||(h=!0,C("Connection","WebChannel transport closed"),d.io())}),p(l,$l.EventType.ERROR,y=>{h||(h=!0,go("Connection","WebChannel transport errored:",y),d.io(new k(E.UNAVAILABLE,"The operation could not be completed")))}),p(l,$l.EventType.MESSAGE,y=>{var v;if(!h){const S=y.data[0];z(!!S);const m=S,f=m.error||((v=m[0])===null||v===void 0?void 0:v.error);if(f){C("Connection","WebChannel received error:",f);const g=f.status;let _=function(b){const N=Ge[b];if(N!==void 0)return hk(N)}(g),T=f.message;_===void 0&&(_=E.INTERNAL,T="Unknown error status: "+g+" with message "+f.message),h=!0,d.io(new k(_,T)),l.close()}else C("Connection","WebChannel received:",S),d.ro(S)}}),p(o,kM.STAT_EVENT,y=>{y.stat===L0.PROXY?C("Connection","Detected buffering proxy"):y.stat===L0.NOPROXY&&C("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jk(){return typeof window<"u"?window:null}function cc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(t){return new wF(t,!0)}class Qy{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&C("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e,n,r,i,s,o,a,u){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Qy(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(je(n.toString()),je("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new k(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return C("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class x2 extends Zk{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.yt=s}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=EF(this.yt,e),r=function(i){if(!("targetChange"in i))return j.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?j.min():s.readTime?We(s.readTime):j.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=Cu(this.yt),n.addTarget=function(i,s){let o;const a=s.target;return o=th(a)?{documents:Ek(i,a)}:{query:Sk(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=yk(i,s.resumeToken):s.snapshotVersion.compareTo(j.min())>0&&(o.readTime=Eo(i,s.snapshotVersion.toTimestamp())),o}(this.yt,e);const r=TF(this.yt,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=Cu(this.yt),n.removeTarget=e,this.Bo(n)}}class N2 extends Zk{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.yt=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=SF(e.writeResults,e.commitTime),r=We(e.commitTime);return this.listener.Zo(r,n)}return z(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Cu(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Au(this.yt,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.yt=i,this.nu=!1}su(){if(this.nu)throw new k(E.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new k(E.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new k(E.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class R2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(je(n),this.ou=!1):C("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.Ur(o=>{r.enqueueAndForget(async()=>{Si(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=L(a);u._u.add(4),await jo(u),u.gu.set("Unknown"),u._u.delete(4),await sl(u)}(this))})}),this.gu=new R2(r,i)}}async function sl(t){if(Si(t))for(const e of t.wu)await e(!0)}async function jo(t){for(const e of t.wu)await e(!1)}function Dd(t,e){const n=L(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Jy(n)?Xy(n):Wo(n).ko()&&Yy(n,e))}function bu(t,e){const n=L(t),r=Wo(n);n.du.delete(e),r.ko()&&eC(n,e),n.du.size===0&&(r.ko()?r.Fo():Si(n)&&n.gu.set("Unknown"))}function Yy(t,e){t.yu.Ot(e.targetId),Wo(t).zo(e)}function eC(t,e){t.yu.Ot(e),Wo(t).Ho(e)}function Xy(t){t.yu=new mF({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),Wo(t).start(),t.gu.uu()}function Jy(t){return Si(t)&&!Wo(t).No()&&t.du.size>0}function Si(t){return L(t)._u.size===0}function tC(t){t.yu=void 0}async function O2(t){t.du.forEach((e,n)=>{Yy(t,e)})}async function L2(t,e){tC(t),Jy(t)?(t.gu.hu(e),Xy(t)):t.gu.set("Unknown")}async function $2(t,e,n){if(t.gu.set("Online"),e instanceof gk&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){C("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ch(t,r)}else if(e instanceof uc?t.yu.Kt(e):e instanceof mk?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(j.min()))try{const r=await Gk(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.Zt(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.du.get(u);l&&i.du.set(u,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const u=i.du.get(a);if(!u)return;i.du.set(a,u.withResumeToken(Je.EMPTY_BYTE_STRING,u.snapshotVersion)),eC(i,a);const l=new Zr(u.target,a,1,u.sequenceNumber);Yy(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){C("RemoteStore","Failed to raise snapshot:",r),await ch(t,r)}}async function ch(t,e,n){if(!_i(e))throw e;t._u.add(1),await jo(t),t.gu.set("Offline"),n||(n=()=>Gk(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{C("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await sl(t)})}function nC(t,e){return e().catch(n=>ch(t,n,e))}async function qo(t){const e=L(t),n=hi(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;M2(e);)try{const i=await E2(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,F2(e,i)}catch(i){await ch(e,i)}rC(e)&&iC(e)}function M2(t){return Si(t)&&t.fu.length<10}function F2(t,e){t.fu.push(e);const n=hi(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function rC(t){return Si(t)&&!hi(t).No()&&t.fu.length>0}function iC(t){hi(t).start()}async function U2(t){hi(t).eu()}async function V2(t){const e=hi(t);for(const n of t.fu)e.Xo(n.mutations)}async function B2(t,e,n){const r=t.fu.shift(),i=Uy.from(r,e,n);await nC(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await qo(t)}async function z2(t,e){e&&hi(t).Yo&&await async function(n,r){if(i=r.code,ck(i)&&i!==E.ABORTED){const s=n.fu.shift();hi(n).Mo(),await nC(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await qo(n)}var i}(t,e),rC(t)&&iC(t)}async function C1(t,e){const n=L(t);n.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");const r=Si(n);n._u.add(3),await jo(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await sl(n)}async function Nm(t,e){const n=L(t);e?(n._u.delete(2),await sl(n)):e||(n._u.add(2),await jo(n),n.gu.set("Unknown"))}function Wo(t){return t.pu||(t.pu=function(e,n,r){const i=L(e);return i.su(),new x2(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:O2.bind(null,t),Zr:L2.bind(null,t),Wo:$2.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Jy(t)?Xy(t):t.gu.set("Unknown")):(await t.pu.stop(),tC(t))})),t.pu}function hi(t){return t.Iu||(t.Iu=function(e,n,r){const i=L(e);return i.su(),new N2(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:U2.bind(null,t),Zr:z2.bind(null,t),tu:V2.bind(null,t),Zo:B2.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await qo(t)):(await t.Iu.stop(),t.fu.length>0&&(C("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ot,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Zy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Go(t,e){if(je("AsyncQueue",`${e}: ${t}`),_i(t))return new k(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e){this.comparator=e?(n,r)=>e(n,r)||D.comparator(n.key,r.key):(n,r)=>D.comparator(n.key,r.key),this.keyedMap=_a(),this.sortedSet=new Fe(this.comparator)}static emptySet(e){return new no(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof no)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new no;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(){this.Tu=new Fe(D.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):F():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ko{constructor(e,n,r,i,s,o,a,u,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ko(e,n,no.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&el(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(){this.Au=void 0,this.listeners=[]}}class q2{constructor(){this.queries=new Ei(e=>JT(e),el),this.onlineState="Unknown",this.Ru=new Set}}async function ev(t,e){const n=L(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new j2),i)try{s.Au=await n.onListen(r)}catch(o){const a=Go(o,`Initialization of query '${Em(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&nv(n)}async function tv(t,e){const n=L(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function W2(t,e){const n=L(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&nv(n)}function G2(t,e,n){const r=L(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function nv(t){t.Ru.forEach(e=>{e.next()})}class rv{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ko(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=ko.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e,n){this.ku=e,this.byteLength=n}Ou(){return"metadata"in this.ku}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e){this.yt=e}Ji(e){return Yn(this.yt,e)}Yi(e){return e.metadata.exists?_k(this.yt,e.document,!1):Ee.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return We(e)}}class K2{constructor(e,n,r){this.Mu=e,this.localStore=n,this.yt=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=sC(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.ku.namedQuery)this.queries.push(e.ku.namedQuery);else if(e.ku.documentMetadata){this.documents.push({metadata:e.ku.documentMetadata}),e.ku.documentMetadata.exists||++n;const r=oe.fromString(e.ku.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.ku.document&&(this.documents[this.documents.length-1].document=e.ku.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}$u(e){const n=new Map,r=new b1(this.yt);for(const i of e)if(i.metadata.queries){const s=r.Ji(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||Z()).add(s);n.set(o,a)}}return n}async complete(){const e=await S2(this.localStore,new b1(this.yt),this.documents,this.Mu.id),n=this.$u(this.documents);for(const r of this.queries)await T2(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function sC(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e){this.key=e}}class aC{constructor(e){this.key=e}}class uC{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Z(),this.mutatedKeys=Z(),this.Gu=ek(e),this.Qu=new no(this.Gu)}get ju(){return this.qu}Wu(e,n){const r=n?n.zu:new A1,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=Ly(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let S=!1;d&&p?d.data.isEqual(p.data)?y!==v&&(r.track({type:3,doc:p}),S=!0):this.Hu(d,p)||(r.track({type:2,doc:p}),S=!0,(u&&this.Gu(p,u)>0||l&&this.Gu(p,l)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),S=!0):d&&!p&&(r.track({type:1,doc:d}),S=!0,(u||l)&&(a=!0)),S&&(p?(o=o.add(p),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((l,c)=>function(h,d){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return p(h)-p(d)}(l.type,c.type)||this.Gu(l.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,u=a!==this.Uu;return this.Uu=a,s.length!==0||u?{snapshot:new ko(this.query,e.Qu,i,s,e.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new A1,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Z(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new aC(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new oC(r))}),n}tc(e){this.qu=e.Hi,this.Ku=Z();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return ko.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class Q2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Y2{constructor(e){this.key=e,this.nc=!1}}class X2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Ei(a=>JT(a),el),this.rc=new Map,this.oc=new Set,this.uc=new Fe(D.comparator),this.cc=new Map,this.ac=new qy,this.hc={},this.lc=new Map,this.fc=hs.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function J2(t,e){const n=uv(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await So(n.localStore,tn(e));n.isPrimaryClient&&Dd(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await iv(n,e,r,a==="current",o.resumeToken)}return i}async function iv(t,e,n,r,i){t._c=(h,d,p)=>async function(y,v,S,m){let f=v.view.Wu(S);f.$i&&(f=await ah(y.localStore,v.query,!1).then(({documents:T})=>v.view.Wu(T,f)));const g=m&&m.targetChanges.get(v.targetId),_=v.view.applyChanges(f,y.isPrimaryClient,g);return Dm(y,v.targetId,_.Xu),_.snapshot}(t,h,d,p);const s=await ah(t.localStore,e,!0),o=new uC(e,s.Hi),a=o.Wu(s.documents),u=rl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,u);Dm(t,n,l.Xu);const c=new Q2(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function Z2(t,e){const n=L(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!el(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await To(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),bu(n.remoteStore,r.targetId),Co(n,r.targetId)}).catch(Ii)):(Co(n,r.targetId),await To(n.localStore,r.targetId,!0))}async function eU(t,e,n){const r=lv(t);try{const i=await function(s,o){const a=L(s),u=be.now(),l=o.reduce((d,p)=>d.add(p.key),Z());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Xt(),y=Z();return a.Gi.getEntries(d,l).next(v=>{p=v,p.forEach((S,m)=>{m.isValidDocument()||(y=y.add(S))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(v=>{c=v;const S=[];for(const m of o){const f=lF(m,c.get(m.key).overlayedDocument);f!=null&&S.push(new kr(m.key,f,YT(f.value.mapValue),Ae.exists(!0)))}return a.mutationQueue.addMutationBatch(d,u,S,o)}).next(v=>{h=v;const S=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,v.batchId,S)})}).then(()=>({batchId:h.batchId,changes:fk(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.hc[s.currentUser.toKey()];u||(u=new Fe(J)),u=u.insert(o,a),s.hc[s.currentUser.toKey()]=u}(r,i.batchId,n),await Cr(r,i.changes),await qo(r.remoteStore)}catch(i){const s=Go(i,"Failed to persist write");n.reject(s)}}async function lC(t,e){const n=L(t);try{const r=await _2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?z(o.nc):i.removedDocuments.size>0&&(z(o.nc),o.nc=!1))}),await Cr(n,r,e)}catch(r){await Ii(r)}}function x1(t,e,n){const r=L(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=L(s);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.bu(o)&&(u=!0)}),u&&nv(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function tU(t,e,n){const r=L(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new Fe(D.comparator);o=o.insert(s,Ee.newNoDocument(s,j.min()));const a=Z().add(s),u=new nl(j.min(),new Map,new ve(J),o,a);await lC(r,u),r.uc=r.uc.remove(s),r.cc.delete(e),av(r)}else await To(r.localStore,e,!1).then(()=>Co(r,e,n)).catch(Ii)}async function nU(t,e){const n=L(t),r=e.batch.batchId;try{const i=await I2(n.localStore,e);ov(n,r,null),sv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Cr(n,i)}catch(i){await Ii(i)}}async function rU(t,e,n){const r=L(t);try{const i=await function(s,o){const a=L(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.mutationQueue.lookupMutationBatch(u,o).next(c=>(z(c!==null),l=c.keys(),a.mutationQueue.removeMutationBatch(u,c))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>a.localDocuments.getDocuments(u,l))})}(r.localStore,e);ov(r,e,n),sv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Cr(r,i)}catch(i){await Ii(i)}}async function iU(t,e){const n=L(t);Si(n.remoteStore)||C("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=L(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.lc.get(r)||[];i.push(e),n.lc.set(r,i)}catch(r){const i=Go(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function sv(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function ov(t,e,n){const r=L(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function Co(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||cC(t,r)})}function cC(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(bu(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),av(t))}function Dm(t,e,n){for(const r of n)r instanceof oC?(t.ac.addReference(r.key,e),sU(t,r)):r instanceof aC?(C("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||cC(t,r.key)):F()}function sU(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(C("SyncEngine","New document in limbo: "+n),t.oc.add(r),av(t))}function av(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new D(oe.fromString(e)),r=t.fc.next();t.cc.set(r,new Y2(n)),t.uc=t.uc.insert(n,r),Dd(t.remoteStore,new Zr(tn(Vo(n.path)),r,2,Yt.at))}}async function Cr(t,e,n){const r=L(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,u)=>{o.push(r._c(u,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const c=Hy.Ci(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(a,u){const l=L(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>w.forEach(u,h=>w.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>w.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!_i(c))throw c;C("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const d=l.qi.get(h),p=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(p);l.qi=l.qi.insert(h,y)}}}(r.localStore,s))}async function oU(t,e){const n=L(t);if(!n.currentUser.isEqual(e)){C("SyncEngine","User change. New user:",e.toKey());const r=await Wk(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new k(E.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Cr(n,r.ji)}}function aU(t,e){const n=L(t),r=n.cc.get(e);if(r&&r.nc)return Z().add(r.key);{let i=Z();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}async function uU(t,e){const n=L(t),r=await ah(n.localStore,e.query,!0),i=e.view.tc(r);return n.isPrimaryClient&&Dm(n,e.targetId,i.Xu),i}async function lU(t,e){const n=L(t);return Qk(n.localStore,e).then(r=>Cr(n,r))}async function cU(t,e,n,r){const i=L(t),s=await function(o,a){const u=L(o),l=L(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",c=>l.Tn(c,a).next(h=>h?u.localDocuments.getDocuments(c,h):w.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await qo(i.remoteStore):n==="acknowledged"||n==="rejected"?(ov(i,e,r||null),sv(i,e),function(o,a){L(L(o).mutationQueue).An(a)}(i.localStore,e)):F(),await Cr(i,s)):C("SyncEngine","Cannot apply mutation batch with id: "+e)}async function hU(t,e){const n=L(t);if(uv(n),lv(n),e===!0&&n.dc!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await N1(n,r.toArray());n.dc=!0,await Nm(n.remoteStore,!0);for(const s of i)Dd(n.remoteStore,s)}else if(e===!1&&n.dc!==!1){const r=[];let i=Promise.resolve();n.rc.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Co(n,o),To(n.localStore,o,!0))),bu(n.remoteStore,o)}),await i,await N1(n,r),function(s){const o=L(s);o.cc.forEach((a,u)=>{bu(o.remoteStore,u)}),o.ac.fs(),o.cc=new Map,o.uc=new Fe(D.comparator)}(n),n.dc=!1,await Nm(n.remoteStore,!1)}}async function N1(t,e,n){const r=L(t),i=[],s=[];for(const o of e){let a;const u=r.rc.get(o);if(u&&u.length!==0){a=await So(r.localStore,tn(u[0]));for(const l of u){const c=r.ic.get(l),h=await uU(r,c);h.snapshot&&s.push(h.snapshot)}}else{const l=await Kk(r.localStore,o);a=await So(r.localStore,l),await iv(r,hC(l),o,!1,a.resumeToken)}i.push(a)}return r.sc.Wo(s),i}function hC(t){return XT(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function dU(t){const e=L(t);return L(L(e.localStore).persistence).vi()}async function fU(t,e,n,r){const i=L(t);if(i.dc)return void C("SyncEngine","Ignoring unexpected query state notification.");const s=i.rc.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await Qk(i.localStore,ZT(s[0])),a=nl.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Je.EMPTY_BYTE_STRING);await Cr(i,o,a);break}case"rejected":await To(i.localStore,e,!0),Co(i,e,r);break;default:F()}}async function pU(t,e,n){const r=uv(t);if(r.dc){for(const i of e){if(r.rc.has(i)){C("SyncEngine","Adding an already active target "+i);continue}const s=await Kk(r.localStore,i),o=await So(r.localStore,s);await iv(r,hC(s),o.targetId,!1,o.resumeToken),Dd(r.remoteStore,o)}for(const i of n)r.rc.has(i)&&await To(r.localStore,i,!1).then(()=>{bu(r.remoteStore,i),Co(r,i)}).catch(Ii)}}function uv(t){const e=L(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=lC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aU.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tU.bind(null,e),e.sc.Wo=W2.bind(null,e.eventManager),e.sc.wc=G2.bind(null,e.eventManager),e}function lv(t){const e=L(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nU.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rU.bind(null,e),e}function mU(t,e,n){const r=L(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const p=L(h),y=We(d.createTime);return p.persistence.runTransaction("hasNewerBundle","readonly",v=>p.Ns.getBundleMetadata(v,d.id)).then(v=>!!v&&v.createTime.compareTo(y)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(sC(a));const u=new K2(a,i.localStore,s.yt);let l=await s.mc();for(;l;){const h=await u.Fu(l);h&&o._updateProgress(h),l=await s.mc()}const c=await u.complete();return await Cr(i,c.Lu,void 0),await function(h,d){const p=L(h);return p.persistence.runTransaction("Save bundle","readwrite",y=>p.Ns.saveBundleMetadata(y,d))}(i.localStore,a),o._completeWith(c.progress),Promise.resolve(c.Bu)}catch(a){return go("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class dC{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=il(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return qk(this.persistence,new jk,e.initialUser,this.yt)}yc(e){return new zk(Nd.Bs,this.yt)}gc(e){return new Xk}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class fC extends dC{constructor(e,n,r){super(),this.Ac=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await lv(this.Ac.syncEngine),await qo(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){return qk(this.persistence,new jk,e.initialUser,this.yt)}Tc(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new s2(r,e.asyncQueue,n)}Ec(e,n){const r=new jM(n,this.persistence);return new zM(e.asyncQueue,r)}yc(e){const n=Gy(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Ht.withCacheSize(this.cacheSizeBytes):Ht.DEFAULT;return new Wy(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,Jk(),cc(),this.yt,this.sharedClientState,!!this.forceOwnership)}gc(e){return new Xk}}class gU extends fC{constructor(e,n){super(e,n,!1),this.Ac=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Ac.syncEngine;this.sharedClientState instanceof Wf&&(this.sharedClientState.syncEngine={Fr:cU.bind(null,n),$r:fU.bind(null,n),Br:pU.bind(null,n),vi:dU.bind(null,n),Mr:lU.bind(null,n)},await this.sharedClientState.start()),await this.persistence.li(async r=>{await hU(this.Ac.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}gc(e){const n=Jk();if(!Wf.C(n))throw new k(E.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Gy(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Wf(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class cv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>x1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=oU.bind(null,this.syncEngine),await Nm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new q2}createDatastore(e){const n=il(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new b2(i));var i;return function(s,o,a,u){return new D2(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>x1(this.syncEngine,a,0),o=k1.C()?new k1:new k2,new P2(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,u,l){const c=new X2(r,i,s,o,a,u);return l&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=L(e);C("RemoteStore","RemoteStore shutting down."),n._u.add(5),await jo(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(t,e,n){if(!n)throw new k(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pC(t,e,n,r){if(e===!0&&r===!0)throw new k(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function D1(t){if(!D.isDocumentKey(t))throw new k(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function R1(t){if(D.isDocumentKey(t))throw new k(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Rd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":F()}function le(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new k(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Rd(t);throw new k(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function mC(t,e){if(e<=0)throw new k(E.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1=new Map;class O1{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new k(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new k(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,pC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new O1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new k(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new k(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new O1(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new NM;switch(n.type){case"gapi":const r=n.client;return new OM(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new k(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=P1.get(e);n&&(C("ComponentProvider","Removing Datastore"),P1.delete(e),n.terminate())}(this),Promise.resolve()}}function yU(t,e,n,r={}){var i;const s=(t=le(t,ol))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&go("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=rt.MOCK_USER;else{o=lD(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new k(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new rt(u)}t._authCredentials=new DM(new xT(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Te(this.firestore,e,this._key)}}class kt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new kt(this.firestore,e,this._query)}}class Xn extends kt{constructor(e,n,r){super(e,n,Vo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Te(this.firestore,null,new D(e))}withConverter(e){return new Xn(this.firestore,e,this._path)}}function gC(t,e,...n){if(t=q(t),hv("collection","path",e),t instanceof ol){const r=oe.fromString(e,...n);return R1(r),new Xn(t,null,r)}{if(!(t instanceof Te||t instanceof Xn))throw new k(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(oe.fromString(e,...n));return R1(r),new Xn(t.firestore,null,r)}}function vU(t,e){if(t=le(t,ol),hv("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new k(E.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new kt(t,null,function(n){return new Tr(oe.emptyPath(),n)}(e))}function hh(t,e,...n){if(t=q(t),arguments.length===1&&(e=NT.R()),hv("doc","path",e),t instanceof ol){const r=oe.fromString(e,...n);return D1(r),new Te(t,null,new D(r))}{if(!(t instanceof Te||t instanceof Xn))throw new k(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(oe.fromString(e,...n));return D1(r),new Te(t.firestore,t instanceof Xn?t.converter:null,new D(r))}}function yC(t,e){return t=q(t),e=q(e),(t instanceof Te||t instanceof Xn)&&(e instanceof Te||e instanceof Xn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function vC(t,e){return t=q(t),e=q(e),t instanceof kt&&e instanceof kt&&t.firestore===e.firestore&&el(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L1(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):je("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wU{constructor(e,n){this.Pc=e,this.yt=n,this.metadata=new ot,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then(r=>{r&&r.Ou()?this.metadata.resolve(r.ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.ku)}`))},r=>this.metadata.reject(r))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const e=await this.Sc();if(e===null)return null;const n=this.vc.decode(e),r=Number(n);isNaN(r)&&this.Dc(`length string (${n}) is not valid number`);const i=await this.Cc(r);return new H2(JSON.parse(i),e.length+r)}xc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Sc(){for(;this.xc()<0&&!await this.Nc(););if(this.buffer.length===0)return null;const e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const n=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Dc(e){throw this.Pc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Nc(){const e=await this.Pc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IU{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new k(E.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=L(r),o=Cu(s.yt)+"/documents",a={documents:i.map(h=>ku(s.yt,h))},u=await s._o("BatchGetDocuments",o,a,i.length),l=new Map;u.forEach(h=>{const d=_F(s.yt,h);l.set(d.key.toString(),d)});const c=[];return i.forEach(h=>{const d=l.get(h.toString());z(!!d),c.push(d)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new zo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=D.fromPath(r);this.mutations.push(new $y(i,this.precondition(i)))}),await async function(n,r){const i=L(n),s=Cu(i.yt)+"/documents",o={writes:r.map(a=>Au(i.yt,a))};await i.ao("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw F();n=j.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new k(E.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(j.min())?Ae.exists(!1):Ae.updateTime(n):Ae.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(j.min()))throw new k(E.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ae.updateTime(n)}return Ae.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _U{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.kc=r.maxAttempts,this.xo=new Qy(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro(async()=>{const e=new IU(this.datastore),n=this.Mc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Fc(i)}))}).catch(r=>{this.Fc(r)})})}Mc(e){try{const n=this.updateFunction(e);return!Ju(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}$c(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!ck(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EU{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=rt.UNAUTHENTICATED,this.clientId=NT.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{C("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(C("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new k(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ot;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Go(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function wC(t,e){t.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Wk(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function IC(t,e){t.asyncQueue.verifyOperationInProgress();const n=await dv(t);C("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>C1(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>C1(e.remoteStore,s)),t.onlineComponents=e}async function dv(t){return t.offlineComponents||(C("FirestoreClient","Using default OfflineComponentProvider"),await wC(t,new dC)),t.offlineComponents}async function Od(t){return t.onlineComponents||(C("FirestoreClient","Using default OnlineComponentProvider"),await IC(t,new cv)),t.onlineComponents}function _C(t){return dv(t).then(e=>e.persistence)}function fv(t){return dv(t).then(e=>e.localStore)}function EC(t){return Od(t).then(e=>e.remoteStore)}function pv(t){return Od(t).then(e=>e.syncEngine)}function SU(t){return Od(t).then(e=>e.datastore)}async function Ao(t){const e=await Od(t),n=e.eventManager;return n.onListen=J2.bind(null,e.syncEngine),n.onUnlisten=Z2.bind(null,e.syncEngine),n}function TU(t){return t.asyncQueue.enqueue(async()=>{const e=await _C(t),n=await EC(t);return e.setNetworkEnabled(!0),function(r){const i=L(r);return i._u.delete(0),sl(i)}(n)})}function kU(t){return t.asyncQueue.enqueue(async()=>{const e=await _C(t),n=await EC(t);return e.setNetworkEnabled(!1),async function(r){const i=L(r);i._u.add(0),await jo(i),i.gu.set("Offline")}(n)})}function CU(t,e){const n=new ot;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,u){const l=L(a);return l.persistence.runTransaction("read document","readonly",c=>l.localDocuments.getDocument(c,u))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new k(E.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Go(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await fv(t),e,n)),n.promise}function SC(t,e,n={}){const r=new ot;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Pd({next:h=>{s.enqueueAndForget(()=>tv(i,c));const d=h.docs.has(o);!d&&h.fromCache?u.reject(new k(E.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?u.reject(new k(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new rv(Vo(o.path),l,{includeMetadataChanges:!0,Nu:!0});return ev(i,c)}(await Ao(t),t.asyncQueue,e,n,r)),r.promise}function AU(t,e){const n=new ot;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await ah(r,i,!0),a=new uC(i,o.Hi),u=a.Wu(o.documents),l=a.applyChanges(u,!1);s.resolve(l.snapshot)}catch(o){const a=Go(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await fv(t),e,n)),n.promise}function TC(t,e,n={}){const r=new ot;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Pd({next:h=>{s.enqueueAndForget(()=>tv(i,c)),h.fromCache&&a.source==="server"?u.reject(new k(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new rv(o,l,{includeMetadataChanges:!0,Nu:!0});return ev(i,c)}(await Ao(t),t.asyncQueue,e,n,r)),r.promise}function bU(t,e){const n=new Pd(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){L(r).Ru.add(i),i.next()}(await Ao(t),n)),()=>{n.bc(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){L(r).Ru.delete(i)}(await Ao(t),n))}}function xU(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(u,l){return new wU(u,l)}(function(u,l){if(u instanceof Uint8Array)return L1(u,l);if(u instanceof ArrayBuffer)return L1(new Uint8Array(u),l);if(u instanceof ReadableStream)return u.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,il(e));t.asyncQueue.enqueueAndForget(async()=>{mU(await pv(t),i,r)})}function NU(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=L(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.Ns.getNamedQuery(s,r))}(await fv(t),e))}class DU{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Qy(this,"async_queue_retry"),this.Wc=()=>{const n=cc();n&&C("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=cc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=cc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new ot;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!_i(e))throw e;C("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw je("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Zy.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.Uc.push(i),i}zc(){this.Kc&&F()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function Rm(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class RU{constructor(){this._progressObserver={},this._taskCompletionResolver=new ot,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PU=-1;class Ue extends ol{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new DU,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kC(this),this._firestoreClient.terminate()}}function dt(t){return t._firestoreClient||kC(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function kC(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new qM(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new EU(t._authCredentials,t._appCheckCredentials,t._queue,r)}function OU(t,e){AC(t=le(t,Ue));const n=dt(t),r=t._freezeSettings(),i=new cv;return CC(n,i,new fC(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function LU(t){AC(t=le(t,Ue));const e=dt(t),n=t._freezeSettings(),r=new cv;return CC(e,r,new gU(r,n.cacheSizeBytes))}function CC(t,e,n){const r=new ot;return t.asyncQueue.enqueue(async()=>{try{await wC(t,n),await IC(t,e),r.resolve()}catch(i){const s=i;if(!function(o){return o.name==="FirebaseError"?o.code===E.FAILED_PRECONDITION||o.code===E.UNIMPLEMENTED:typeof DOMException<"u"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(s))throw s;go("Error enabling offline persistence. Falling back to persistence disabled: "+s),r.reject(s)}}).then(()=>r.promise)}function $U(t){if(t._initialized&&!t._terminated)throw new k(E.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ot;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!Nn.C())return Promise.resolve();const r=n+"main";await Nn.delete(r)}(Gy(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function MU(t){return function(e){const n=new ot;return e.asyncQueue.enqueueAndForget(async()=>iU(await pv(e),n)),n.promise}(dt(t=le(t,Ue)))}function FU(t){return TU(dt(t=le(t,Ue)))}function UU(t){return kU(dt(t=le(t,Ue)))}function VU(t,e){const n=dt(t=le(t,Ue)),r=new RU;return xU(n,t._databaseId,e,r),r}function BU(t,e){return NU(dt(t=le(t,Ue)),e).then(n=>n?new kt(t,null,n.query):null)}function AC(t){if(t._initialized||t._terminated)throw new k(E.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new tr(Je.fromBase64String(e))}catch(n){throw new k(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new tr(Je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new k(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new k(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new k(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zU=/^__.*__$/;class jU{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new kr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Bo(e,this.data,n,this.fieldTransforms)}}class bC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new kr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function xC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class $d{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.yt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new $d(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return dh(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(xC(this.sa)&&zU.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class qU{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=r||il(e)}da(e,n,r,i=!1){return new $d({sa:e,methodName:n,fa:r,path:qe.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function _s(t){const e=t._freezeSettings(),n=il(t._databaseId);return new qU(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Md(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);vv("Data must be an object, but it was:",o,r);const a=RC(r,o);let u,l;if(s.merge)u=new ln(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Pm(e,h,n);if(!o.contains(d))throw new k(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);OC(c,d)||c.push(d)}u=new ln(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new jU(new wt(a),u,l)}class al extends Is{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof al}}function NC(t,e,n){return new $d({sa:3,fa:e.settings.fa,methodName:t._methodName,oa:n},e.databaseId,e.yt,e.ignoreUndefinedProperties)}class mv extends Is{_toFieldTransform(e){return new tl(e.path,new Io)}isEqual(e){return e instanceof mv}}class WU extends Is{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=NC(this,e,!0),r=this._a.map(s=>Es(s,n)),i=new as(r);return new tl(e.path,i)}isEqual(e){return this===e}}class GU extends Is{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=NC(this,e,!0),r=this._a.map(s=>Es(s,n)),i=new us(r);return new tl(e.path,i)}isEqual(e){return this===e}}class HU extends Is{constructor(e,n){super(e),this.wa=n}_toFieldTransform(e){const n=new _o(e.yt,rk(e.yt,this.wa));return new tl(e.path,n)}isEqual(e){return this===e}}function gv(t,e,n,r){const i=t.da(1,e,n);vv("Data must be an object, but it was:",i,r);const s=[],o=wt.empty();ws(r,(u,l)=>{const c=wv(e,u,n);l=q(l);const h=i.ca(c);if(l instanceof al)s.push(c);else{const d=Es(l,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new ln(s);return new bC(o,a,i.fieldTransforms)}function yv(t,e,n,r,i,s){const o=t.da(1,e,n),a=[Pm(e,r,n)],u=[i];if(s.length%2!=0)throw new k(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Pm(e,s[d])),u.push(s[d+1]);const l=[],c=wt.empty();for(let d=a.length-1;d>=0;--d)if(!OC(l,a[d])){const p=a[d];let y=u[d];y=q(y);const v=o.ca(p);if(y instanceof al)l.push(p);else{const S=Es(y,v);S!=null&&(l.push(p),c.set(p,S))}}const h=new ln(l);return new bC(c,h,o.fieldTransforms)}function DC(t,e,n,r=!1){return Es(n,t.da(r?4:3,e))}function Es(t,e){if(PC(t=q(t)))return vv("Unsupported field value:",e,t),RC(t,e);if(t instanceof Is)return function(n,r){if(!xC(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Es(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=q(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return rk(r.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=be.fromDate(n);return{timestampValue:Eo(r.yt,i)}}if(n instanceof be){const i=new be(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Eo(r.yt,i)}}if(n instanceof Ld)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof tr)return{bytesValue:yk(r.yt,n._byteString)};if(n instanceof Te){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:My(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${Rd(n)}`)}(t,e)}function RC(t,e){const n={};return MT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ws(t,(r,i)=>{const s=Es(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function PC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof be||t instanceof Ld||t instanceof tr||t instanceof Te||t instanceof Is)}function vv(t,e,n){if(!PC(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Rd(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function Pm(t,e,n){if((e=q(e))instanceof di)return e._internalPath;if(typeof e=="string")return wv(t,e);throw dh("Field path arguments must be of type string or ",t,!1,void 0,n)}const KU=new RegExp("[~\\*/\\[\\]]");function wv(t,e,n){if(e.search(KU)>=0)throw dh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new di(...e.split("."))._internalPath}catch{throw dh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function dh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new k(E.INVALID_ARGUMENT,a+t+u)}function OC(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Te(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new QU(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Fd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class QU extends xu{data(){return super.data()}}function Fd(t,e){return typeof e=="string"?wv(t,e):e instanceof di?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new k(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Iv{}class ul extends Iv{}function Rr(t,e,...n){let r=[];e instanceof Iv&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof _v).length,o=i.filter(a=>a instanceof Ud).length;if(s>1||s>0&&o>0)throw new k(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Ud extends ul{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ud(e,n,r)}_apply(e){const n=this._parse(e);return MC(e._query,n),new kt(e.firestore,e.converter,_m(e._query,n))}_parse(e){const n=_s(e.firestore);return function(i,s,o,a,u,l,c){let h;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new k(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){M1(c,l);const d=[];for(const p of c)d.push($1(a,i,p));h={arrayValue:{values:d}}}else h=$1(a,i,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||M1(c,l),h=DC(o,s,c,l==="in"||l==="not-in");return ne.create(u,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function YU(t,e,n){const r=e,i=Fd("where",t);return Ud._create(i,r,n)}class _v extends Iv{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new _v(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:pe.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)MC(s,a),s=_m(s,a)}(e._query,n),new kt(e.firestore,e.converter,_m(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ev extends ul{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ev(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new k(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new k(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new to(i,s);return function(a,u){if(Py(a)===null){const l=Td(a);l!==null&&FC(a,l,u.field)}}(r,o),o}(e._query,this._field,this._direction);return new kt(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Tr(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function XU(t,e="asc"){const n=e,r=Fd("orderBy",t);return Ev._create(r,n)}class Vd extends ul{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Vd(e,n,r)}_apply(e){return new kt(e.firestore,e.converter,rh(e._query,this._limit,this._limitType))}}function JU(t){return mC("limit",t),Vd._create("limit",t,"F")}function ZU(t){return mC("limitToLast",t),Vd._create("limitToLast",t,"L")}class Bd extends ul{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Bd(e,n,r)}_apply(e){const n=$C(e,this.type,this._docOrFields,this._inclusive);return new kt(e.firestore,e.converter,function(r,i){return new Tr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function eV(...t){return Bd._create("startAt",t,!0)}function tV(...t){return Bd._create("startAfter",t,!1)}class zd extends ul{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new zd(e,n,r)}_apply(e){const n=$C(e,this.type,this._docOrFields,this._inclusive);return new kt(e.firestore,e.converter,function(r,i){return new Tr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function nV(...t){return zd._create("endBefore",t,!1)}function rV(...t){return zd._create("endAt",t,!0)}function $C(t,e,n,r){if(n[0]=q(n[0]),n[0]instanceof xu)return function(i,s,o,a,u){if(!a)throw new k(E.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const c of Ki(i))if(c.field.isKeyField())l.push(ss(s,a.key));else{const h=a.data.field(c.field);if(Ry(h))throw new k(E.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=c.field.canonicalString();throw new k(E.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new ci(l,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=_s(t.firestore);return function(s,o,a,u,l,c){const h=s.explicitOrderBy;if(l.length>h.length)throw new k(E.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let p=0;p<l.length;p++){const y=l[p];if(h[p].field.isKeyField()){if(typeof y!="string")throw new k(E.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof y}`);if(!Oy(s)&&y.indexOf("/")!==-1)throw new k(E.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${y}' contains a slash.`);const v=s.path.child(oe.fromString(y));if(!D.isDocumentKey(v))throw new k(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const S=new D(v);d.push(ss(o,S))}else{const v=DC(a,u,y);d.push(v)}}return new ci(d,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function $1(t,e,n){if(typeof(n=q(n))=="string"){if(n==="")throw new k(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Oy(e)&&n.indexOf("/")!==-1)throw new k(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(oe.fromString(n));if(!D.isDocumentKey(r))throw new k(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ss(t,new D(r))}if(n instanceof Te)return ss(t,n._key);throw new k(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Rd(n)}.`)}function M1(t,e){if(!Array.isArray(t)||t.length===0)throw new k(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new k(E.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function MC(t,e){if(e.isInequality()){const r=Td(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new k(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Py(t);s!==null&&FC(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new k(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new k(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function FC(t,e,n){if(!n.isEqual(e))throw new k(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Sv{convertValue(e,n="none"){switch(is(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(rs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw F()}}convertObject(e,n){const r={};return ws(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Ld($e(e.latitude),$e(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=UT(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Eu(e));default:return null}}convertTimestamp(e){const n=ui(e);return new be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=oe.fromString(e);z(Ak(r));const i=new ai(r.get(1),r.get(3)),s=new D(r.popFirst(5));return i.isEqual(n)||je(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class iV extends Sv{constructor(e){super(),this.firestore=e}convertBytes(e){return new tr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Te(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ir extends xu{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new za(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Fd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class za extends Ir{data(e={}){return super.data(e)}}class fi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Vi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new za(this._firestore,this._userDataWriter,r.key,r,new Vi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new k(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new za(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Vi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new za(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Vi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,l=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:sV(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function sV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}function UC(t,e){return t instanceof Ir&&e instanceof Ir?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof fi&&e instanceof fi&&t._firestore===e._firestore&&vC(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oV(t){t=le(t,Te);const e=le(t.firestore,Ue);return SC(dt(e),t._key).then(n=>Tv(e,t,n))}class Ss extends Sv{constructor(e){super(),this.firestore=e}convertBytes(e){return new tr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Te(this.firestore,null,n)}}function aV(t){t=le(t,Te);const e=le(t.firestore,Ue),n=dt(e),r=new Ss(e);return CU(n,t._key).then(i=>new Ir(e,r,t._key,i,new Vi(i!==null&&i.hasLocalMutations,!0),t.converter))}function uV(t){t=le(t,Te);const e=le(t.firestore,Ue);return SC(dt(e),t._key,{source:"server"}).then(n=>Tv(e,t,n))}function lV(t){t=le(t,kt);const e=le(t.firestore,Ue),n=dt(e),r=new Ss(e);return LC(t._query),TC(n,t._query).then(i=>new fi(e,r,t,i))}function cV(t){t=le(t,kt);const e=le(t.firestore,Ue),n=dt(e),r=new Ss(e);return AU(n,t._query).then(i=>new fi(e,r,t,i))}function hV(t){t=le(t,kt);const e=le(t.firestore,Ue),n=dt(e),r=new Ss(e);return TC(n,t._query,{source:"server"}).then(i=>new fi(e,r,t,i))}function F1(t,e,n){t=le(t,Te);const r=le(t.firestore,Ue),i=jd(t.converter,e,n);return ll(r,[Md(_s(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ae.none())])}function U1(t,e,n,...r){t=le(t,Te);const i=le(t.firestore,Ue),s=_s(i);let o;return o=typeof(e=q(e))=="string"||e instanceof di?yv(s,"updateDoc",t._key,e,n,r):gv(s,"updateDoc",t._key,e),ll(i,[o.toMutation(t._key,Ae.exists(!0))])}function dV(t){return ll(le(t.firestore,Ue),[new zo(t._key,Ae.none())])}function fV(t,e){const n=le(t.firestore,Ue),r=hh(t),i=jd(t.converter,e);return ll(n,[Md(_s(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ae.exists(!1))]).then(()=>r)}function VC(t,...e){var n,r,i;t=q(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Rm(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Rm(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,l,c;if(t instanceof Te)l=le(t.firestore,Ue),c=Vo(t._key.path),u={next:h=>{e[o]&&e[o](Tv(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=le(t,kt);l=le(h.firestore,Ue),c=h._query;const d=new Ss(l);u={next:p=>{e[o]&&e[o](new fi(l,d,h,p))},error:e[o+1],complete:e[o+2]},LC(t._query)}return function(h,d,p,y){const v=new Pd(y),S=new rv(d,v,p);return h.asyncQueue.enqueueAndForget(async()=>ev(await Ao(h),S)),()=>{v.bc(),h.asyncQueue.enqueueAndForget(async()=>tv(await Ao(h),S))}}(dt(l),c,a,u)}function pV(t,e){return bU(dt(t=le(t,Ue)),Rm(e)?e:{next:e})}function ll(t,e){return function(n,r){const i=new ot;return n.asyncQueue.enqueueAndForget(async()=>eU(await pv(n),r,i)),i.promise}(dt(t),e)}function Tv(t,e,n){const r=n.docs.get(e._key),i=new Ss(t);return new Ir(t,i,e._key,r,new Vi(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mV={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gV{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=_s(e)}set(e,n,r){this._verifyNotCommitted();const i=Fr(e,this._firestore),s=jd(i.converter,n,r),o=Md(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Ae.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Fr(e,this._firestore);let o;return o=typeof(n=q(n))=="string"||n instanceof di?yv(this._dataReader,"WriteBatch.update",s._key,n,r,i):gv(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Ae.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Fr(e,this._firestore);return this._mutations=this._mutations.concat(new zo(n._key,Ae.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new k(E.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Fr(t,e){if((t=q(t)).firestore!==e)throw new k(E.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yV extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=_s(e)}get(e){const n=Fr(e,this._firestore),r=new iV(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return F();const s=i[0];if(s.isFoundDocument())return new xu(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new xu(this._firestore,r,n._key,null,n.converter);throw F()})}set(e,n,r){const i=Fr(e,this._firestore),s=jd(i.converter,n,r),o=Md(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=Fr(e,this._firestore);let o;return o=typeof(n=q(n))=="string"||n instanceof di?yv(this._dataReader,"Transaction.update",s._key,n,r,i):gv(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=Fr(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Fr(e,this._firestore),r=new Ss(this._firestore);return super.get(e).then(i=>new Ir(this._firestore,r,n._key,i._document,new Vi(!1,!1),n.converter))}}function vV(t,e,n){t=le(t,Ue);const r=Object.assign(Object.assign({},mV),n);return function(i){if(i.maxAttempts<1)throw new k(E.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new ot;return i.asyncQueue.enqueueAndForget(async()=>{const u=await SU(i);new _U(i.asyncQueue,u,o,s,a).run()}),a.promise}(dt(t),i=>e(new yV(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wV(){return new al("deleteField")}function IV(){return new mv("serverTimestamp")}function _V(...t){return new WU("arrayUnion",t)}function EV(...t){return new GU("arrayRemove",t)}function SV(t){return new HU("increment",t)}(function(t,e=!0){(function(n){Uo=n})(gs),ii(new Jn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Ue(new RM(n.getProvider("auth-internal")),new $M(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new k(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ai(a.options.projectId,u)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Kn($0,"3.8.0",t),Kn($0,"3.8.0","esm2017")})();const TV="@firebase/firestore-compat",kV="0.3.0";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new k("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(){if(typeof Uint8Array>"u")throw new k("unimplemented","Uint8Arrays are not available in this environment.")}function B1(){if(!WM())throw new k("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Nu{constructor(e){this._delegate=e}static fromBase64String(e){return B1(),new Nu(tr.fromBase64String(e))}static fromUint8Array(e){return V1(),new Nu(tr.fromUint8Array(e))}toBase64(){return B1(),this._delegate.toBase64()}toUint8Array(){return V1(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(t){return CV(t,["next","error","complete"])}function CV(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AV{enableIndexedDbPersistence(e,n){return OU(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return LU(e._delegate)}clearIndexedDbPersistence(e){return $U(e._delegate)}}class BC{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ai||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&go("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){yU(this._delegate,e,n,r)}enableNetwork(){return FU(this._delegate)}disableNetwork(){return UU(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,pC("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return MU(this._delegate)}onSnapshotsInSync(e){return pV(this._delegate,e)}get app(){if(!this._appCompat)throw new k("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new bo(this,gC(this._delegate,e))}catch(n){throw Ft(n,"collection()","Firestore.collection()")}}doc(e){try{return new wn(this,hh(this._delegate,e))}catch(n){throw Ft(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Mt(this,vU(this._delegate,e))}catch(n){throw Ft(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return vV(this._delegate,n=>e(new zC(this,n)))}batch(){return dt(this._delegate),new jC(new gV(this._delegate,e=>ll(this._delegate,e)))}loadBundle(e){return VU(this._delegate,e)}namedQuery(e){return BU(this._delegate,e).then(n=>n?new Mt(this,n):null)}}class qd extends Sv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nu(new tr(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return wn.forKey(n,this.firestore,null)}}function bV(t){bM(t)}class zC{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new qd(e)}get(e){const n=Bi(e);return this._delegate.get(n).then(r=>new Du(this._firestore,new Ir(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Bi(e);return r?(kv("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Bi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Bi(e);return this._delegate.delete(n),this}}class jC{constructor(e){this._delegate=e}set(e,n,r){const i=Bi(e);return r?(kv("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Bi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Bi(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class ds{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new za(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Ru(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=ds.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new ds(e,new qd(e),n),i.set(n,s)),s}}ds.INSTANCES=new WeakMap;class wn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new qd(e)}static forPath(e,n,r){if(e.length%2!==0)throw new k("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new wn(n,new Te(n._delegate,r,new D(e)))}static forKey(e,n,r){return new wn(n,new Te(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new bo(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new bo(this.firestore,gC(this._delegate,e))}catch(n){throw Ft(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=q(e),e instanceof Te?yC(this._delegate,e):!1}set(e,n){n=kv("DocumentReference.set",n);try{return n?F1(this._delegate,e,n):F1(this._delegate,e)}catch(r){throw Ft(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?U1(this._delegate,e):U1(this._delegate,e,n,...r)}catch(i){throw Ft(i,"updateDoc()","DocumentReference.update()")}}delete(){return dV(this._delegate)}onSnapshot(...e){const n=qC(e),r=WC(e,i=>new Du(this.firestore,new Ir(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return VC(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=aV(this._delegate):(e==null?void 0:e.source)==="server"?n=uV(this._delegate):n=oV(this._delegate),n.then(r=>new Du(this.firestore,new Ir(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new wn(this.firestore,e?this._delegate.withConverter(ds.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ft(t,e,n){return t.message=t.message.replace(e,n),t}function qC(t){for(const e of t)if(typeof e=="object"&&!Om(e))return e;return{}}function WC(t,e){var n,r;let i;return Om(t[0])?i=t[0]:Om(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Du{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new wn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return UC(this._delegate,e._delegate)}}class Ru extends Du{data(e){const n=this._delegate.data(e);return xM(n!==void 0),n}}class Mt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new qd(e)}where(e,n,r){try{return new Mt(this.firestore,Rr(this._delegate,YU(e,n,r)))}catch(i){throw Ft(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Mt(this.firestore,Rr(this._delegate,XU(e,n)))}catch(r){throw Ft(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Mt(this.firestore,Rr(this._delegate,JU(e)))}catch(n){throw Ft(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Mt(this.firestore,Rr(this._delegate,ZU(e)))}catch(n){throw Ft(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Mt(this.firestore,Rr(this._delegate,eV(...e)))}catch(n){throw Ft(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Mt(this.firestore,Rr(this._delegate,tV(...e)))}catch(n){throw Ft(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Mt(this.firestore,Rr(this._delegate,nV(...e)))}catch(n){throw Ft(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Mt(this.firestore,Rr(this._delegate,rV(...e)))}catch(n){throw Ft(n,"endAt()","Query.endAt()")}}isEqual(e){return vC(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=cV(this._delegate):(e==null?void 0:e.source)==="server"?n=hV(this._delegate):n=lV(this._delegate),n.then(r=>new Lm(this.firestore,new fi(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=qC(e),r=WC(e,i=>new Lm(this.firestore,new fi(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return VC(this._delegate,n,r)}withConverter(e){return new Mt(this.firestore,e?this._delegate.withConverter(ds.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class xV{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Ru(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Lm{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Mt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Ru(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new xV(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Ru(this._firestore,r))})}isEqual(e){return UC(this._delegate,e._delegate)}}class bo extends Mt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new wn(this.firestore,e):null}doc(e){try{return e===void 0?new wn(this.firestore,hh(this._delegate)):new wn(this.firestore,hh(this._delegate,e))}catch(n){throw Ft(n,"doc()","CollectionReference.doc()")}}add(e){return fV(this._delegate,e).then(n=>new wn(this.firestore,n))}isEqual(e){return yC(this._delegate,e._delegate)}withConverter(e){return new bo(this.firestore,e?this._delegate.withConverter(ds.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Bi(t){return le(t,Te)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(...e){this._delegate=new di(...e)}static documentId(){return new Cv(qe.keyField().canonicalString())}isEqual(e){return e=q(e),e instanceof di?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e){this._delegate=e}static serverTimestamp(){const e=IV();return e._methodName="FieldValue.serverTimestamp",new Pi(e)}static delete(){const e=wV();return e._methodName="FieldValue.delete",new Pi(e)}static arrayUnion(...e){const n=_V(...e);return n._methodName="FieldValue.arrayUnion",new Pi(n)}static arrayRemove(...e){const n=EV(...e);return n._methodName="FieldValue.arrayRemove",new Pi(n)}static increment(e){const n=SV(e);return n._methodName="FieldValue.increment",new Pi(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NV={Firestore:BC,GeoPoint:Ld,Timestamp:be,Blob:Nu,Transaction:zC,WriteBatch:jC,DocumentReference:wn,DocumentSnapshot:Du,Query:Mt,QueryDocumentSnapshot:Ru,QuerySnapshot:Lm,CollectionReference:bo,FieldPath:Cv,FieldValue:Pi,setLogLevel:bV,CACHE_SIZE_UNLIMITED:PU};function DV(t,e){t.INTERNAL.registerComponent(new Jn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},NV)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RV(t){DV(t,(e,n)=>new BC(e,n,new AV)),t.registerVersion(TV,kV)}RV(si);const PV={apiKey:"AIzaSyD6ueBdw_o2j0T-UD1zpXn83Fe5GIMVCIs",authDomain:"h-finances-93253.firebaseapp.com",projectId:"h-finances-93253",storageBucket:"h-finances-93253.appspot.com",messagingSenderId:"573458853851",appId:"1:573458853851:web:03aec603471d76d476c1fe"},OV=si.initializeApp(PV),z1=OV.firestore(),j1={loadItems:async t=>{let e=[];(await z1.collection("item").get()).forEach(r=>{let i=r.data();for(let s=0;s<i.elements.length;s++)e.push({date:new Date(i.elements[s].date.seconds*1e3),category:i.elements[s].category,title:i.elements[s].title,value:i.elements[s].value})}),t(e)},addItem:async t=>{z1.collection("item").doc("p8bnSK4hZvgZQKdTcXpF").update({elements:si.firestore.FieldValue.arrayUnion({category:t.category,value:t.value,title:t.title,date:si.firestore.Timestamp.fromDate(t.date)})})}};function LV(){const[t,e]=xe.useState([]),[n,r]=xe.useState(CN()),[i,s]=xe.useState([]),[o,a]=xe.useState(0),[u,l]=xe.useState(0);return xe.useEffect(()=>{j1.loadItems(e)},[t]),xe.useEffect(()=>{s(AN(t,n))},[t,n]),xe.useEffect(()=>{let d=0,p=0;for(let y in i)tc[i[y].category].expense?p+=i[y].value:d+=i[y].value;a(d),l(p)},[i]),it(EN,{children:[H(SN,{children:H(TN,{children:it("h1",{children:["H-Finances",H("span",{children:"H-Finances"}),H("span",{children:"H-Finances"}),H("span",{children:"Developed by HELIOPC"})]})})}),it(kN,{children:[H(qN,{month:n,onMonthChange:d=>{r(d)},income:o,expense:u}),H(KN,{onAdd:d=>{let p=[...t];p.push(d),e(p),j1.addItem(d)}}),H($N,{list:i})]})]})}const $V=Gf.createRoot(document.getElementById("root"));$V.render(H(LV,{}));
