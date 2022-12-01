(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function IC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var $f={},TI={exports:{}},dn={},Pe={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Du=Symbol.for("react.element"),_C=Symbol.for("react.portal"),EC=Symbol.for("react.fragment"),SC=Symbol.for("react.strict_mode"),TC=Symbol.for("react.profiler"),kC=Symbol.for("react.provider"),CC=Symbol.for("react.context"),AC=Symbol.for("react.forward_ref"),xC=Symbol.for("react.suspense"),bC=Symbol.for("react.memo"),NC=Symbol.for("react.lazy"),av=Symbol.iterator;function DC(t){return t===null||typeof t!="object"?null:(t=av&&t[av]||t["@@iterator"],typeof t=="function"?t:null)}var kI={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},CI=Object.assign,AI={};function Co(t,e,n){this.props=t,this.context=e,this.refs=AI,this.updater=n||kI}Co.prototype.isReactComponent={};Co.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Co.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xI(){}xI.prototype=Co.prototype;function ym(t,e,n){this.props=t,this.context=e,this.refs=AI,this.updater=n||kI}var vm=ym.prototype=new xI;vm.constructor=ym;CI(vm,Co.prototype);vm.isPureReactComponent=!0;var uv=Array.isArray,bI=Object.prototype.hasOwnProperty,wm={current:null},NI={key:!0,ref:!0,__self:!0,__source:!0};function DI(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)bI.call(e,r)&&!NI.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Du,type:t,key:s,ref:o,props:i,_owner:wm.current}}function RC(t,e){return{$$typeof:Du,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Im(t){return typeof t=="object"&&t!==null&&t.$$typeof===Du}function PC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lv=/\/+/g;function Md(t,e){return typeof t=="object"&&t!==null&&t.key!=null?PC(""+t.key):e.toString(36)}function Vl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Du:case _C:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Md(o,0):r,uv(i)?(n="",t!=null&&(n=t.replace(lv,"$&/")+"/"),Vl(i,e,n,"",function(l){return l})):i!=null&&(Im(i)&&(i=RC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(lv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",uv(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Md(s,a);o+=Vl(s,e,n,u,i)}else if(u=DC(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Md(s,a++),o+=Vl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ll(t,e,n){if(t==null)return t;var r=[],i=0;return Vl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function OC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var zt={current:null},Bl={transition:null},LC={ReactCurrentDispatcher:zt,ReactCurrentBatchConfig:Bl,ReactCurrentOwner:wm};ne.Children={map:ll,forEach:function(t,e,n){ll(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ll(t,function(){e++}),e},toArray:function(t){return ll(t,function(e){return e})||[]},only:function(t){if(!Im(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=Co;ne.Fragment=EC;ne.Profiler=TC;ne.PureComponent=ym;ne.StrictMode=SC;ne.Suspense=xC;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=LC;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=CI({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=wm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)bI.call(e,u)&&!NI.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:Du,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:CC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:kC,_context:t},t.Consumer=t};ne.createElement=DI;ne.createFactory=function(t){var e=DI.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:AC,render:t}};ne.isValidElement=Im;ne.lazy=function(t){return{$$typeof:NC,_payload:{_status:-1,_result:t},_init:OC}};ne.memo=function(t,e){return{$$typeof:bC,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=Bl.transition;Bl.transition={};try{t()}finally{Bl.transition=e}};ne.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ne.useCallback=function(t,e){return zt.current.useCallback(t,e)};ne.useContext=function(t){return zt.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return zt.current.useDeferredValue(t)};ne.useEffect=function(t,e){return zt.current.useEffect(t,e)};ne.useId=function(){return zt.current.useId()};ne.useImperativeHandle=function(t,e,n){return zt.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return zt.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return zt.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return zt.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return zt.current.useReducer(t,e,n)};ne.useRef=function(t){return zt.current.useRef(t)};ne.useState=function(t){return zt.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return zt.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return zt.current.useTransition()};ne.version="18.2.0";(function(t){t.exports=ne})(Pe);const uh=IC(Pe.exports);var RI={exports:{}},PI={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,W){var K=R.length;R.push(W);e:for(;0<K;){var ye=K-1>>>1,O=R[ye];if(0<i(O,W))R[ye]=W,R[K]=O,K=ye;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var W=R[0],K=R.pop();if(K!==W){R[0]=K;e:for(var ye=0,O=R.length,M=O>>>1;ye<M;){var F=2*(ye+1)-1,Q=R[F],I=F+1,re=R[I];if(0>i(Q,K))I<O&&0>i(re,Q)?(R[ye]=re,R[I]=K,ye=I):(R[ye]=Q,R[F]=K,ye=F);else if(I<O&&0>i(re,K))R[ye]=re,R[I]=K,ye=I;else break e}}return W}function i(R,W){var K=R.sortIndex-W.sortIndex;return K!==0?K:R.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],l=[],c=1,h=null,d=3,p=!1,g=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(R){for(var W=n(l);W!==null;){if(W.callback===null)r(l);else if(W.startTime<=R)r(l),W.sortIndex=W.expirationTime,e(u,W);else break;W=n(l)}}function _(R){if(v=!1,y(R),!g)if(n(u)!==null)g=!0,tr(T);else{var W=n(l);W!==null&&Ot(_,W.startTime-R)}}function T(R,W){g=!1,v&&(v=!1,m($),$=-1),p=!0;var K=d;try{for(y(W),h=n(u);h!==null&&(!(h.expirationTime>W)||R&&!Xe());){var ye=h.callback;if(typeof ye=="function"){h.callback=null,d=h.priorityLevel;var O=ye(h.expirationTime<=W);W=t.unstable_now(),typeof O=="function"?h.callback=O:h===n(u)&&r(u),y(W)}else r(u);h=n(u)}if(h!==null)var M=!0;else{var F=n(l);F!==null&&Ot(_,F.startTime-W),M=!1}return M}finally{h=null,d=K,p=!1}}var x=!1,N=null,$=-1,te=5,G=-1;function Xe(){return!(t.unstable_now()-G<te)}function We(){if(N!==null){var R=t.unstable_now();G=R;var W=!0;try{W=N(!0,R)}finally{W?ht():(x=!1,N=null)}}else x=!1}var ht;if(typeof f=="function")ht=function(){f(We)};else if(typeof MessageChannel<"u"){var tn=new MessageChannel,kt=tn.port2;tn.port1.onmessage=We,ht=function(){kt.postMessage(null)}}else ht=function(){S(We,0)};function tr(R){N=R,x||(x=!0,ht())}function Ot(R,W){$=S(function(){R(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,tr(T))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(R){switch(d){case 1:case 2:case 3:var W=3;break;default:W=d}var K=d;d=W;try{return R()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,W){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var K=d;d=R;try{return W()}finally{d=K}},t.unstable_scheduleCallback=function(R,W,K){var ye=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ye+K:ye):K=ye,R){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=K+O,R={id:c++,callback:W,priorityLevel:R,startTime:K,expirationTime:O,sortIndex:-1},K>ye?(R.sortIndex=K,e(l,R),n(u)===null&&R===n(l)&&(v?(m($),$=-1):v=!0,Ot(_,K-ye))):(R.sortIndex=O,e(u,R),g||p||(g=!0,tr(T))),R},t.unstable_shouldYield=Xe,t.unstable_wrapCallback=function(R){var W=d;return function(){var K=d;d=W;try{return R.apply(this,arguments)}finally{d=K}}}})(PI);(function(t){t.exports=PI})(RI);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OI=Pe.exports,ln=RI.exports;function A(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var LI=new Set,Va={};function hs(t,e){no(t,e),no(t+"Capture",e)}function no(t,e){for(Va[t]=e,t=0;t<e.length;t++)LI.add(e[t])}var fr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mf=Object.prototype.hasOwnProperty,$C=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cv={},hv={};function MC(t){return Mf.call(hv,t)?!0:Mf.call(cv,t)?!1:$C.test(t)?hv[t]=!0:(cv[t]=!0,!1)}function FC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function UC(t,e,n,r){if(e===null||typeof e>"u"||FC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function jt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Et[t]=new jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Et[e]=new jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Et[t]=new jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Et[t]=new jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Et[t]=new jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Et[t]=new jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Et[t]=new jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Et[t]=new jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Et[t]=new jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var _m=/[\-:]([a-z])/g;function Em(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_m,Em);Et[e]=new jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_m,Em);Et[e]=new jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_m,Em);Et[e]=new jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Et[t]=new jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Et.xlinkHref=new jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Et[t]=new jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sm(t,e,n,r){var i=Et.hasOwnProperty(e)?Et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(UC(e,n,i,r)&&(n=null),r||i===null?MC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ir=OI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cl=Symbol.for("react.element"),xs=Symbol.for("react.portal"),bs=Symbol.for("react.fragment"),Tm=Symbol.for("react.strict_mode"),Ff=Symbol.for("react.profiler"),$I=Symbol.for("react.provider"),MI=Symbol.for("react.context"),km=Symbol.for("react.forward_ref"),Uf=Symbol.for("react.suspense"),Vf=Symbol.for("react.suspense_list"),Cm=Symbol.for("react.memo"),Dr=Symbol.for("react.lazy"),FI=Symbol.for("react.offscreen"),dv=Symbol.iterator;function Go(t){return t===null||typeof t!="object"?null:(t=dv&&t[dv]||t["@@iterator"],typeof t=="function"?t:null)}var be=Object.assign,Fd;function ca(t){if(Fd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Fd=e&&e[1]||""}return`
`+Fd+t}var Ud=!1;function Vd(t,e){if(!t||Ud)return"";Ud=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){r=l}t.call(e.prototype)}else{try{throw Error()}catch(l){r=l}t()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Ud=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ca(t):""}function VC(t){switch(t.tag){case 5:return ca(t.type);case 16:return ca("Lazy");case 13:return ca("Suspense");case 19:return ca("SuspenseList");case 0:case 2:case 15:return t=Vd(t.type,!1),t;case 11:return t=Vd(t.type.render,!1),t;case 1:return t=Vd(t.type,!0),t;default:return""}}function Bf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case bs:return"Fragment";case xs:return"Portal";case Ff:return"Profiler";case Tm:return"StrictMode";case Uf:return"Suspense";case Vf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case MI:return(t.displayName||"Context")+".Consumer";case $I:return(t._context.displayName||"Context")+".Provider";case km:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Cm:return e=t.displayName||null,e!==null?e:Bf(t.type)||"Memo";case Dr:e=t._payload,t=t._init;try{return Bf(t(e))}catch{}}return null}function BC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bf(e);case 8:return e===Tm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Jr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function UI(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zC(t){var e=UI(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function hl(t){t._valueTracker||(t._valueTracker=zC(t))}function VI(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=UI(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function lc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function zf(t,e){var n=e.checked;return be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function fv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Jr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function BI(t,e){e=e.checked,e!=null&&Sm(t,"checked",e,!1)}function jf(t,e){BI(t,e);var n=Jr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qf(t,e.type,n):e.hasOwnProperty("defaultValue")&&qf(t,e.type,Jr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function pv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qf(t,e,n){(e!=="number"||lc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ha=Array.isArray;function qs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Jr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Wf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(A(91));return be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(A(92));if(ha(n)){if(1<n.length)throw Error(A(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Jr(n)}}function zI(t,e){var n=Jr(e.value),r=Jr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function gv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function jI(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?jI(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var dl,qI=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(dl=dl||document.createElement("div"),dl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=dl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ba(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ia={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jC=["Webkit","ms","Moz","O"];Object.keys(Ia).forEach(function(t){jC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ia[e]=Ia[t]})});function WI(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ia.hasOwnProperty(t)&&Ia[t]?(""+e).trim():e+"px"}function GI(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=WI(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var qC=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hf(t,e){if(e){if(qC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(A(62))}}function Kf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qf=null;function Am(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yf=null,Ws=null,Gs=null;function yv(t){if(t=Ou(t)){if(typeof Yf!="function")throw Error(A(280));var e=t.stateNode;e&&(e=fh(e),Yf(t.stateNode,t.type,e))}}function HI(t){Ws?Gs?Gs.push(t):Gs=[t]:Ws=t}function KI(){if(Ws){var t=Ws,e=Gs;if(Gs=Ws=null,yv(t),e)for(t=0;t<e.length;t++)yv(e[t])}}function QI(t,e){return t(e)}function YI(){}var Bd=!1;function XI(t,e,n){if(Bd)return t(e,n);Bd=!0;try{return QI(t,e,n)}finally{Bd=!1,(Ws!==null||Gs!==null)&&(YI(),KI())}}function za(t,e){var n=t.stateNode;if(n===null)return null;var r=fh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(A(231,e,typeof n));return n}var Xf=!1;if(fr)try{var Ho={};Object.defineProperty(Ho,"passive",{get:function(){Xf=!0}}),window.addEventListener("test",Ho,Ho),window.removeEventListener("test",Ho,Ho)}catch{Xf=!1}function WC(t,e,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(c){this.onError(c)}}var _a=!1,cc=null,hc=!1,Jf=null,GC={onError:function(t){_a=!0,cc=t}};function HC(t,e,n,r,i,s,o,a,u){_a=!1,cc=null,WC.apply(GC,arguments)}function KC(t,e,n,r,i,s,o,a,u){if(HC.apply(this,arguments),_a){if(_a){var l=cc;_a=!1,cc=null}else throw Error(A(198));hc||(hc=!0,Jf=l)}}function ds(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function JI(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vv(t){if(ds(t)!==t)throw Error(A(188))}function QC(t){var e=t.alternate;if(!e){if(e=ds(t),e===null)throw Error(A(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return vv(i),t;if(s===r)return vv(i),e;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?t:e}function ZI(t){return t=QC(t),t!==null?e1(t):null}function e1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=e1(t);if(e!==null)return e;t=t.sibling}return null}var t1=ln.unstable_scheduleCallback,wv=ln.unstable_cancelCallback,YC=ln.unstable_shouldYield,XC=ln.unstable_requestPaint,Ve=ln.unstable_now,JC=ln.unstable_getCurrentPriorityLevel,xm=ln.unstable_ImmediatePriority,n1=ln.unstable_UserBlockingPriority,dc=ln.unstable_NormalPriority,ZC=ln.unstable_LowPriority,r1=ln.unstable_IdlePriority,lh=null,Gn=null;function eA(t){if(Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(lh,t,void 0,(t.current.flags&128)===128)}catch{}}var Nn=Math.clz32?Math.clz32:rA,tA=Math.log,nA=Math.LN2;function rA(t){return t>>>=0,t===0?32:31-(tA(t)/nA|0)|0}var fl=64,pl=4194304;function da(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=da(a):(s&=o,s!==0&&(r=da(s)))}else o=n&~i,o!==0?r=da(o):s!==0&&(r=da(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Nn(e),i=1<<n,r|=t[n],e&=~i;return r}function iA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Nn(s),a=1<<o,u=i[o];u===-1?((a&n)===0||(a&r)!==0)&&(i[o]=iA(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Zf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function i1(){var t=fl;return fl<<=1,(fl&4194240)===0&&(fl=64),t}function zd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ru(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Nn(e),t[e]=n}function oA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Nn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function bm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Nn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function s1(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var o1,Nm,a1,u1,l1,ep=!1,ml=[],Br=null,zr=null,jr=null,ja=new Map,qa=new Map,Pr=[],aA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Iv(t,e){switch(t){case"focusin":case"focusout":Br=null;break;case"dragenter":case"dragleave":zr=null;break;case"mouseover":case"mouseout":jr=null;break;case"pointerover":case"pointerout":ja.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qa.delete(e.pointerId)}}function Ko(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ou(e),e!==null&&Nm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function uA(t,e,n,r,i){switch(e){case"focusin":return Br=Ko(Br,t,e,n,r,i),!0;case"dragenter":return zr=Ko(zr,t,e,n,r,i),!0;case"mouseover":return jr=Ko(jr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ja.set(s,Ko(ja.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,qa.set(s,Ko(qa.get(s)||null,t,e,n,r,i)),!0}return!1}function c1(t){var e=Pi(t.target);if(e!==null){var n=ds(e);if(n!==null){if(e=n.tag,e===13){if(e=JI(n),e!==null){t.blockedOn=e,l1(t.priority,function(){a1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=tp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Qf=r,n.target.dispatchEvent(r),Qf=null}else return e=Ou(n),e!==null&&Nm(e),t.blockedOn=n,!1;e.shift()}return!0}function _v(t,e,n){zl(t)&&n.delete(e)}function lA(){ep=!1,Br!==null&&zl(Br)&&(Br=null),zr!==null&&zl(zr)&&(zr=null),jr!==null&&zl(jr)&&(jr=null),ja.forEach(_v),qa.forEach(_v)}function Qo(t,e){t.blockedOn===e&&(t.blockedOn=null,ep||(ep=!0,ln.unstable_scheduleCallback(ln.unstable_NormalPriority,lA)))}function Wa(t){function e(i){return Qo(i,t)}if(0<ml.length){Qo(ml[0],t);for(var n=1;n<ml.length;n++){var r=ml[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Br!==null&&Qo(Br,t),zr!==null&&Qo(zr,t),jr!==null&&Qo(jr,t),ja.forEach(e),qa.forEach(e),n=0;n<Pr.length;n++)r=Pr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Pr.length&&(n=Pr[0],n.blockedOn===null);)c1(n),n.blockedOn===null&&Pr.shift()}var Hs=Ir.ReactCurrentBatchConfig,pc=!0;function cA(t,e,n,r){var i=fe,s=Hs.transition;Hs.transition=null;try{fe=1,Dm(t,e,n,r)}finally{fe=i,Hs.transition=s}}function hA(t,e,n,r){var i=fe,s=Hs.transition;Hs.transition=null;try{fe=4,Dm(t,e,n,r)}finally{fe=i,Hs.transition=s}}function Dm(t,e,n,r){if(pc){var i=tp(t,e,n,r);if(i===null)Jd(t,e,r,mc,n),Iv(t,r);else if(uA(i,t,e,n,r))r.stopPropagation();else if(Iv(t,r),e&4&&-1<aA.indexOf(t)){for(;i!==null;){var s=Ou(i);if(s!==null&&o1(s),s=tp(t,e,n,r),s===null&&Jd(t,e,r,mc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Jd(t,e,r,null,n)}}var mc=null;function tp(t,e,n,r){if(mc=null,t=Am(r),t=Pi(t),t!==null)if(e=ds(t),e===null)t=null;else if(n=e.tag,n===13){if(t=JI(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return mc=t,null}function h1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(JC()){case xm:return 1;case n1:return 4;case dc:case ZC:return 16;case r1:return 536870912;default:return 16}default:return 16}}var Mr=null,Rm=null,jl=null;function d1(){if(jl)return jl;var t,e=Rm,n=e.length,r,i="value"in Mr?Mr.value:Mr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return jl=i.slice(t,1<r?1-r:void 0)}function ql(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function gl(){return!0}function Ev(){return!1}function fn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?gl:Ev,this.isPropagationStopped=Ev,this}return be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),e}var Ao={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pm=fn(Ao),Pu=be({},Ao,{view:0,detail:0}),dA=fn(Pu),jd,qd,Yo,ch=be({},Pu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Om,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yo&&(Yo&&t.type==="mousemove"?(jd=t.screenX-Yo.screenX,qd=t.screenY-Yo.screenY):qd=jd=0,Yo=t),jd)},movementY:function(t){return"movementY"in t?t.movementY:qd}}),Sv=fn(ch),fA=be({},ch,{dataTransfer:0}),pA=fn(fA),mA=be({},Pu,{relatedTarget:0}),Wd=fn(mA),gA=be({},Ao,{animationName:0,elapsedTime:0,pseudoElement:0}),yA=fn(gA),vA=be({},Ao,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wA=fn(vA),IA=be({},Ao,{data:0}),Tv=fn(IA),_A={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},EA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},SA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function TA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=SA[t])?!!e[t]:!1}function Om(){return TA}var kA=be({},Pu,{key:function(t){if(t.key){var e=_A[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ql(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?EA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Om,charCode:function(t){return t.type==="keypress"?ql(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ql(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),CA=fn(kA),AA=be({},ch,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kv=fn(AA),xA=be({},Pu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Om}),bA=fn(xA),NA=be({},Ao,{propertyName:0,elapsedTime:0,pseudoElement:0}),DA=fn(NA),RA=be({},ch,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),PA=fn(RA),OA=[9,13,27,32],Lm=fr&&"CompositionEvent"in window,Ea=null;fr&&"documentMode"in document&&(Ea=document.documentMode);var LA=fr&&"TextEvent"in window&&!Ea,f1=fr&&(!Lm||Ea&&8<Ea&&11>=Ea),Cv=String.fromCharCode(32),Av=!1;function p1(t,e){switch(t){case"keyup":return OA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function m1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ns=!1;function $A(t,e){switch(t){case"compositionend":return m1(e);case"keypress":return e.which!==32?null:(Av=!0,Cv);case"textInput":return t=e.data,t===Cv&&Av?null:t;default:return null}}function MA(t,e){if(Ns)return t==="compositionend"||!Lm&&p1(t,e)?(t=d1(),jl=Rm=Mr=null,Ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return f1&&e.locale!=="ko"?null:e.data;default:return null}}var FA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!FA[t.type]:e==="textarea"}function g1(t,e,n,r){HI(r),e=gc(e,"onChange"),0<e.length&&(n=new Pm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Sa=null,Ga=null;function UA(t){A1(t,0)}function hh(t){var e=Ps(t);if(VI(e))return t}function VA(t,e){if(t==="change")return e}var y1=!1;if(fr){var Gd;if(fr){var Hd="oninput"in document;if(!Hd){var bv=document.createElement("div");bv.setAttribute("oninput","return;"),Hd=typeof bv.oninput=="function"}Gd=Hd}else Gd=!1;y1=Gd&&(!document.documentMode||9<document.documentMode)}function Nv(){Sa&&(Sa.detachEvent("onpropertychange",v1),Ga=Sa=null)}function v1(t){if(t.propertyName==="value"&&hh(Ga)){var e=[];g1(e,Ga,t,Am(t)),XI(UA,e)}}function BA(t,e,n){t==="focusin"?(Nv(),Sa=e,Ga=n,Sa.attachEvent("onpropertychange",v1)):t==="focusout"&&Nv()}function zA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hh(Ga)}function jA(t,e){if(t==="click")return hh(e)}function qA(t,e){if(t==="input"||t==="change")return hh(e)}function WA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pn=typeof Object.is=="function"?Object.is:WA;function Ha(t,e){if(Pn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Mf.call(e,i)||!Pn(t[i],e[i]))return!1}return!0}function Dv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rv(t,e){var n=Dv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dv(n)}}function w1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?w1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function I1(){for(var t=window,e=lc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=lc(t.document)}return e}function $m(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function GA(t){var e=I1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&w1(n.ownerDocument.documentElement,n)){if(r!==null&&$m(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Rv(n,s);var o=Rv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var HA=fr&&"documentMode"in document&&11>=document.documentMode,Ds=null,np=null,Ta=null,rp=!1;function Pv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rp||Ds==null||Ds!==lc(r)||(r=Ds,"selectionStart"in r&&$m(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ta&&Ha(Ta,r)||(Ta=r,r=gc(np,"onSelect"),0<r.length&&(e=new Pm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ds)))}function yl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Rs={animationend:yl("Animation","AnimationEnd"),animationiteration:yl("Animation","AnimationIteration"),animationstart:yl("Animation","AnimationStart"),transitionend:yl("Transition","TransitionEnd")},Kd={},_1={};fr&&(_1=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function dh(t){if(Kd[t])return Kd[t];if(!Rs[t])return t;var e=Rs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _1)return Kd[t]=e[n];return t}var E1=dh("animationend"),S1=dh("animationiteration"),T1=dh("animationstart"),k1=dh("transitionend"),C1=new Map,Ov="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function di(t,e){C1.set(t,e),hs(e,[t])}for(var Qd=0;Qd<Ov.length;Qd++){var Yd=Ov[Qd],KA=Yd.toLowerCase(),QA=Yd[0].toUpperCase()+Yd.slice(1);di(KA,"on"+QA)}di(E1,"onAnimationEnd");di(S1,"onAnimationIteration");di(T1,"onAnimationStart");di("dblclick","onDoubleClick");di("focusin","onFocus");di("focusout","onBlur");di(k1,"onTransitionEnd");no("onMouseEnter",["mouseout","mouseover"]);no("onMouseLeave",["mouseout","mouseover"]);no("onPointerEnter",["pointerout","pointerover"]);no("onPointerLeave",["pointerout","pointerover"]);hs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hs("onBeforeInput",["compositionend","keypress","textInput","paste"]);hs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YA=new Set("cancel close invalid load scroll toggle".split(" ").concat(fa));function Lv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,KC(r,e,void 0,t),t.currentTarget=null}function A1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Lv(i,a,l),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,l=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Lv(i,a,l),s=u}}}if(hc)throw t=Jf,hc=!1,Jf=null,t}function Ie(t,e){var n=e[up];n===void 0&&(n=e[up]=new Set);var r=t+"__bubble";n.has(r)||(x1(e,t,2,!1),n.add(r))}function Xd(t,e,n){var r=0;e&&(r|=4),x1(n,t,r,e)}var vl="_reactListening"+Math.random().toString(36).slice(2);function Ka(t){if(!t[vl]){t[vl]=!0,LI.forEach(function(n){n!=="selectionchange"&&(YA.has(n)||Xd(n,!1,t),Xd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[vl]||(e[vl]=!0,Xd("selectionchange",!1,e))}}function x1(t,e,n,r){switch(h1(e)){case 1:var i=cA;break;case 4:i=hA;break;default:i=Dm}n=i.bind(null,e,n,t),i=void 0,!Xf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Jd(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Pi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}XI(function(){var l=s,c=Am(n),h=[];e:{var d=C1.get(t);if(d!==void 0){var p=Pm,g=t;switch(t){case"keypress":if(ql(n)===0)break e;case"keydown":case"keyup":p=CA;break;case"focusin":g="focus",p=Wd;break;case"focusout":g="blur",p=Wd;break;case"beforeblur":case"afterblur":p=Wd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Sv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=pA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=bA;break;case E1:case S1:case T1:p=yA;break;case k1:p=DA;break;case"scroll":p=dA;break;case"wheel":p=PA;break;case"copy":case"cut":case"paste":p=wA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=kv}var v=(e&4)!==0,S=!v&&t==="scroll",m=v?d!==null?d+"Capture":null:d;v=[];for(var f=l,y;f!==null;){y=f;var _=y.stateNode;if(y.tag===5&&_!==null&&(y=_,m!==null&&(_=za(f,m),_!=null&&v.push(Qa(f,_,y)))),S)break;f=f.return}0<v.length&&(d=new p(d,g,null,n,c),h.push({event:d,listeners:v}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Qf&&(g=n.relatedTarget||n.fromElement)&&(Pi(g)||g[pr]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=l,g=g?Pi(g):null,g!==null&&(S=ds(g),g!==S||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=l),p!==g)){if(v=Sv,_="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=kv,_="onPointerLeave",m="onPointerEnter",f="pointer"),S=p==null?d:Ps(p),y=g==null?d:Ps(g),d=new v(_,f+"leave",p,n,c),d.target=S,d.relatedTarget=y,_=null,Pi(c)===l&&(v=new v(m,f+"enter",g,n,c),v.target=y,v.relatedTarget=S,_=v),S=_,p&&g)t:{for(v=p,m=g,f=0,y=v;y;y=Es(y))f++;for(y=0,_=m;_;_=Es(_))y++;for(;0<f-y;)v=Es(v),f--;for(;0<y-f;)m=Es(m),y--;for(;f--;){if(v===m||m!==null&&v===m.alternate)break t;v=Es(v),m=Es(m)}v=null}else v=null;p!==null&&$v(h,d,p,v,!1),g!==null&&S!==null&&$v(h,S,g,v,!0)}}e:{if(d=l?Ps(l):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var T=VA;else if(xv(d))if(y1)T=qA;else{T=zA;var x=BA}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=jA);if(T&&(T=T(t,l))){g1(h,T,n,c);break e}x&&x(t,d,l),t==="focusout"&&(x=d._wrapperState)&&x.controlled&&d.type==="number"&&qf(d,"number",d.value)}switch(x=l?Ps(l):window,t){case"focusin":(xv(x)||x.contentEditable==="true")&&(Ds=x,np=l,Ta=null);break;case"focusout":Ta=np=Ds=null;break;case"mousedown":rp=!0;break;case"contextmenu":case"mouseup":case"dragend":rp=!1,Pv(h,n,c);break;case"selectionchange":if(HA)break;case"keydown":case"keyup":Pv(h,n,c)}var N;if(Lm)e:{switch(t){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else Ns?p1(t,n)&&($="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(f1&&n.locale!=="ko"&&(Ns||$!=="onCompositionStart"?$==="onCompositionEnd"&&Ns&&(N=d1()):(Mr=c,Rm="value"in Mr?Mr.value:Mr.textContent,Ns=!0)),x=gc(l,$),0<x.length&&($=new Tv($,t,null,n,c),h.push({event:$,listeners:x}),N?$.data=N:(N=m1(n),N!==null&&($.data=N)))),(N=LA?$A(t,n):MA(t,n))&&(l=gc(l,"onBeforeInput"),0<l.length&&(c=new Tv("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:l}),c.data=N))}A1(h,e)})}function Qa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function gc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=za(t,n),s!=null&&r.unshift(Qa(t,s,i)),s=za(t,e),s!=null&&r.push(Qa(t,s,i))),t=t.return}return r}function Es(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $v(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&l!==null&&(a=l,i?(u=za(n,s),u!=null&&o.unshift(Qa(n,u,a))):i||(u=za(n,s),u!=null&&o.push(Qa(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var XA=/\r\n?/g,JA=/\u0000|\uFFFD/g;function Mv(t){return(typeof t=="string"?t:""+t).replace(XA,`
`).replace(JA,"")}function wl(t,e,n){if(e=Mv(e),Mv(t)!==e&&n)throw Error(A(425))}function yc(){}var ip=null,sp=null;function op(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ap=typeof setTimeout=="function"?setTimeout:void 0,ZA=typeof clearTimeout=="function"?clearTimeout:void 0,Fv=typeof Promise=="function"?Promise:void 0,ex=typeof queueMicrotask=="function"?queueMicrotask:typeof Fv<"u"?function(t){return Fv.resolve(null).then(t).catch(tx)}:ap;function tx(t){setTimeout(function(){throw t})}function Zd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Wa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Wa(e)}function qr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Uv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xo=Math.random().toString(36).slice(2),Mn="__reactFiber$"+xo,Ya="__reactProps$"+xo,pr="__reactContainer$"+xo,up="__reactEvents$"+xo,nx="__reactListeners$"+xo,rx="__reactHandles$"+xo;function Pi(t){var e=t[Mn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pr]||n[Mn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Uv(t);t!==null;){if(n=t[Mn])return n;t=Uv(t)}return e}t=n,n=t.parentNode}return null}function Ou(t){return t=t[Mn]||t[pr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ps(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(A(33))}function fh(t){return t[Ya]||null}var lp=[],Os=-1;function fi(t){return{current:t}}function _e(t){0>Os||(t.current=lp[Os],lp[Os]=null,Os--)}function we(t,e){Os++,lp[Os]=t.current,t.current=e}var Zr={},Rt=fi(Zr),Xt=fi(!1),Hi=Zr;function ro(t,e){var n=t.type.contextTypes;if(!n)return Zr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Jt(t){return t=t.childContextTypes,t!=null}function vc(){_e(Xt),_e(Rt)}function Vv(t,e,n){if(Rt.current!==Zr)throw Error(A(168));we(Rt,e),we(Xt,n)}function b1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(A(108,BC(t)||"Unknown",i));return be({},n,r)}function wc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zr,Hi=Rt.current,we(Rt,t),we(Xt,Xt.current),!0}function Bv(t,e,n){var r=t.stateNode;if(!r)throw Error(A(169));n?(t=b1(t,e,Hi),r.__reactInternalMemoizedMergedChildContext=t,_e(Xt),_e(Rt),we(Rt,t)):_e(Xt),we(Xt,n)}var rr=null,ph=!1,ef=!1;function N1(t){rr===null?rr=[t]:rr.push(t)}function ix(t){ph=!0,N1(t)}function pi(){if(!ef&&rr!==null){ef=!0;var t=0,e=fe;try{var n=rr;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}rr=null,ph=!1}catch(i){throw rr!==null&&(rr=rr.slice(t+1)),t1(xm,pi),i}finally{fe=e,ef=!1}}return null}var Ls=[],$s=0,Ic=null,_c=0,mn=[],gn=0,Ki=null,ir=1,sr="";function Ti(t,e){Ls[$s++]=_c,Ls[$s++]=Ic,Ic=t,_c=e}function D1(t,e,n){mn[gn++]=ir,mn[gn++]=sr,mn[gn++]=Ki,Ki=t;var r=ir;t=sr;var i=32-Nn(r)-1;r&=~(1<<i),n+=1;var s=32-Nn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ir=1<<32-Nn(e)+i|n<<i|r,sr=s+t}else ir=1<<s|n<<i|r,sr=t}function Mm(t){t.return!==null&&(Ti(t,1),D1(t,1,0))}function Fm(t){for(;t===Ic;)Ic=Ls[--$s],Ls[$s]=null,_c=Ls[--$s],Ls[$s]=null;for(;t===Ki;)Ki=mn[--gn],mn[gn]=null,sr=mn[--gn],mn[gn]=null,ir=mn[--gn],mn[gn]=null}var an=null,sn=null,Se=!1,xn=null;function R1(t,e){var n=yn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,an=t,sn=qr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,an=t,sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ki!==null?{id:ir,overflow:sr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=yn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,an=t,sn=null,!0):!1;default:return!1}}function cp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hp(t){if(Se){var e=sn;if(e){var n=e;if(!zv(t,e)){if(cp(t))throw Error(A(418));e=qr(n.nextSibling);var r=an;e&&zv(t,e)?R1(r,n):(t.flags=t.flags&-4097|2,Se=!1,an=t)}}else{if(cp(t))throw Error(A(418));t.flags=t.flags&-4097|2,Se=!1,an=t}}}function jv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;an=t}function Il(t){if(t!==an)return!1;if(!Se)return jv(t),Se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!op(t.type,t.memoizedProps)),e&&(e=sn)){if(cp(t))throw P1(),Error(A(418));for(;e;)R1(t,e),e=qr(e.nextSibling)}if(jv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(A(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){sn=qr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}sn=null}}else sn=an?qr(t.stateNode.nextSibling):null;return!0}function P1(){for(var t=sn;t;)t=qr(t.nextSibling)}function io(){sn=an=null,Se=!1}function Um(t){xn===null?xn=[t]:xn.push(t)}var sx=Ir.ReactCurrentBatchConfig;function Cn(t,e){if(t&&t.defaultProps){e=be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ec=fi(null),Sc=null,Ms=null,Vm=null;function Bm(){Vm=Ms=Sc=null}function zm(t){var e=Ec.current;_e(Ec),t._currentValue=e}function dp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ks(t,e){Sc=t,Vm=Ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Kt=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(Vm!==t)if(t={context:t,memoizedValue:e,next:null},Ms===null){if(Sc===null)throw Error(A(308));Ms=t,Sc.dependencies={lanes:0,firstContext:t}}else Ms=Ms.next=t;return e}var Oi=null;function jm(t){Oi===null?Oi=[t]:Oi.push(t)}function O1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,jm(e)):(n.next=i.next,i.next=n),e.interleaved=n,mr(t,r)}function mr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Rr=!1;function qm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function L1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function cr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(ae&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,mr(t,n)}return i=r.interleaved,i===null?(e.next=e,jm(r)):(e.next=i.next,i.next=e),r.interleaved=e,mr(t,n)}function Wl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bm(t,n)}}function qv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Tc(t,e,n,r){var i=t.updateQueue;Rr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,l=u.next;u.next=null,o===null?s=l:o.next=l,o=u;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=l:a.next=l,c.lastBaseUpdate=u))}if(s!==null){var h=i.baseState;o=0,c=l=u=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,v=a;switch(d=e,p=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){h=g.call(p,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,d=typeof g=="function"?g.call(p,h,d):g,d==null)break e;h=be({},h,d);break e;case 2:Rr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(l=c=p,u=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(u=h),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Yi|=o,t.lanes=o,t.memoizedState=h}}function Wv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var $1=new OI.Component().refs;function fp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mh={isMounted:function(t){return(t=t._reactInternals)?ds(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ut(),i=Hr(t),s=cr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Wr(t,s,i),e!==null&&(Dn(e,t,i,r),Wl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ut(),i=Hr(t),s=cr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Wr(t,s,i),e!==null&&(Dn(e,t,i,r),Wl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ut(),r=Hr(t),i=cr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Wr(t,i,r),e!==null&&(Dn(e,t,r,n),Wl(e,t,r))}};function Gv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ha(n,r)||!Ha(i,s):!0}function M1(t,e,n){var r=!1,i=Zr,s=e.contextType;return typeof s=="object"&&s!==null?s=In(s):(i=Jt(e)?Hi:Rt.current,r=e.contextTypes,s=(r=r!=null)?ro(t,i):Zr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Hv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&mh.enqueueReplaceState(e,e.state,null)}function pp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=$1,qm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=In(s):(s=Jt(e)?Hi:Rt.current,i.context=ro(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(fp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&mh.enqueueReplaceState(i,i.state,null),Tc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Xo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===$1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,t))}return t}function _l(t,e){throw t=Object.prototype.toString.call(e),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Kv(t){var e=t._init;return e(t._payload)}function F1(t){function e(m,f){if(t){var y=m.deletions;y===null?(m.deletions=[f],m.flags|=16):y.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=Kr(m,f),m.index=0,m.sibling=null,m}function s(m,f,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<f?(m.flags|=2,f):y):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,y,_){return f===null||f.tag!==6?(f=uf(y,m.mode,_),f.return=m,f):(f=i(f,y),f.return=m,f)}function u(m,f,y,_){var T=y.type;return T===bs?c(m,f,y.props.children,_,y.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Dr&&Kv(T)===f.type)?(_=i(f,y.props),_.ref=Xo(m,f,y),_.return=m,_):(_=Xl(y.type,y.key,y.props,null,m.mode,_),_.ref=Xo(m,f,y),_.return=m,_)}function l(m,f,y,_){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=lf(y,m.mode,_),f.return=m,f):(f=i(f,y.children||[]),f.return=m,f)}function c(m,f,y,_,T){return f===null||f.tag!==7?(f=zi(y,m.mode,_,T),f.return=m,f):(f=i(f,y),f.return=m,f)}function h(m,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=uf(""+f,m.mode,y),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case cl:return y=Xl(f.type,f.key,f.props,null,m.mode,y),y.ref=Xo(m,null,f),y.return=m,y;case xs:return f=lf(f,m.mode,y),f.return=m,f;case Dr:var _=f._init;return h(m,_(f._payload),y)}if(ha(f)||Go(f))return f=zi(f,m.mode,y,null),f.return=m,f;_l(m,f)}return null}function d(m,f,y,_){var T=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(m,f,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case cl:return y.key===T?u(m,f,y,_):null;case xs:return y.key===T?l(m,f,y,_):null;case Dr:return T=y._init,d(m,f,T(y._payload),_)}if(ha(y)||Go(y))return T!==null?null:c(m,f,y,_,null);_l(m,y)}return null}function p(m,f,y,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(y)||null,a(f,m,""+_,T);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case cl:return m=m.get(_.key===null?y:_.key)||null,u(f,m,_,T);case xs:return m=m.get(_.key===null?y:_.key)||null,l(f,m,_,T);case Dr:var x=_._init;return p(m,f,y,x(_._payload),T)}if(ha(_)||Go(_))return m=m.get(y)||null,c(f,m,_,T,null);_l(f,_)}return null}function g(m,f,y,_){for(var T=null,x=null,N=f,$=f=0,te=null;N!==null&&$<y.length;$++){N.index>$?(te=N,N=null):te=N.sibling;var G=d(m,N,y[$],_);if(G===null){N===null&&(N=te);break}t&&N&&G.alternate===null&&e(m,N),f=s(G,f,$),x===null?T=G:x.sibling=G,x=G,N=te}if($===y.length)return n(m,N),Se&&Ti(m,$),T;if(N===null){for(;$<y.length;$++)N=h(m,y[$],_),N!==null&&(f=s(N,f,$),x===null?T=N:x.sibling=N,x=N);return Se&&Ti(m,$),T}for(N=r(m,N);$<y.length;$++)te=p(N,m,$,y[$],_),te!==null&&(t&&te.alternate!==null&&N.delete(te.key===null?$:te.key),f=s(te,f,$),x===null?T=te:x.sibling=te,x=te);return t&&N.forEach(function(Xe){return e(m,Xe)}),Se&&Ti(m,$),T}function v(m,f,y,_){var T=Go(y);if(typeof T!="function")throw Error(A(150));if(y=T.call(y),y==null)throw Error(A(151));for(var x=T=null,N=f,$=f=0,te=null,G=y.next();N!==null&&!G.done;$++,G=y.next()){N.index>$?(te=N,N=null):te=N.sibling;var Xe=d(m,N,G.value,_);if(Xe===null){N===null&&(N=te);break}t&&N&&Xe.alternate===null&&e(m,N),f=s(Xe,f,$),x===null?T=Xe:x.sibling=Xe,x=Xe,N=te}if(G.done)return n(m,N),Se&&Ti(m,$),T;if(N===null){for(;!G.done;$++,G=y.next())G=h(m,G.value,_),G!==null&&(f=s(G,f,$),x===null?T=G:x.sibling=G,x=G);return Se&&Ti(m,$),T}for(N=r(m,N);!G.done;$++,G=y.next())G=p(N,m,$,G.value,_),G!==null&&(t&&G.alternate!==null&&N.delete(G.key===null?$:G.key),f=s(G,f,$),x===null?T=G:x.sibling=G,x=G);return t&&N.forEach(function(We){return e(m,We)}),Se&&Ti(m,$),T}function S(m,f,y,_){if(typeof y=="object"&&y!==null&&y.type===bs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case cl:e:{for(var T=y.key,x=f;x!==null;){if(x.key===T){if(T=y.type,T===bs){if(x.tag===7){n(m,x.sibling),f=i(x,y.props.children),f.return=m,m=f;break e}}else if(x.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Dr&&Kv(T)===x.type){n(m,x.sibling),f=i(x,y.props),f.ref=Xo(m,x,y),f.return=m,m=f;break e}n(m,x);break}else e(m,x);x=x.sibling}y.type===bs?(f=zi(y.props.children,m.mode,_,y.key),f.return=m,m=f):(_=Xl(y.type,y.key,y.props,null,m.mode,_),_.ref=Xo(m,f,y),_.return=m,m=_)}return o(m);case xs:e:{for(x=y.key;f!==null;){if(f.key===x)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(m,f.sibling),f=i(f,y.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=lf(y,m.mode,_),f.return=m,m=f}return o(m);case Dr:return x=y._init,S(m,f,x(y._payload),_)}if(ha(y))return g(m,f,y,_);if(Go(y))return v(m,f,y,_);_l(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,y),f.return=m,m=f):(n(m,f),f=uf(y,m.mode,_),f.return=m,m=f),o(m)):n(m,f)}return S}var so=F1(!0),U1=F1(!1),Lu={},Hn=fi(Lu),Xa=fi(Lu),Ja=fi(Lu);function Li(t){if(t===Lu)throw Error(A(174));return t}function Wm(t,e){switch(we(Ja,e),we(Xa,t),we(Hn,Lu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Gf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Gf(e,t)}_e(Hn),we(Hn,e)}function oo(){_e(Hn),_e(Xa),_e(Ja)}function V1(t){Li(Ja.current);var e=Li(Hn.current),n=Gf(e,t.type);e!==n&&(we(Xa,t),we(Hn,n))}function Gm(t){Xa.current===t&&(_e(Hn),_e(Xa))}var Ae=fi(0);function kc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var tf=[];function Hm(){for(var t=0;t<tf.length;t++)tf[t]._workInProgressVersionPrimary=null;tf.length=0}var Gl=Ir.ReactCurrentDispatcher,nf=Ir.ReactCurrentBatchConfig,Qi=0,xe=null,Ge=null,Ze=null,Cc=!1,ka=!1,Za=0,ox=0;function At(){throw Error(A(321))}function Km(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Pn(t[n],e[n]))return!1;return!0}function Qm(t,e,n,r,i,s){if(Qi=s,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Gl.current=t===null||t.memoizedState===null?cx:hx,t=n(r,i),ka){s=0;do{if(ka=!1,Za=0,25<=s)throw Error(A(301));s+=1,Ze=Ge=null,e.updateQueue=null,Gl.current=dx,t=n(r,i)}while(ka)}if(Gl.current=Ac,e=Ge!==null&&Ge.next!==null,Qi=0,Ze=Ge=xe=null,Cc=!1,e)throw Error(A(300));return t}function Ym(){var t=Za!==0;return Za=0,t}function $n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?xe.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function _n(){if(Ge===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=Ze===null?xe.memoizedState:Ze.next;if(e!==null)Ze=e,Ge=t;else{if(t===null)throw Error(A(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Ze===null?xe.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}function eu(t,e){return typeof e=="function"?e(t):e}function rf(t){var e=_n(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=Ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,l=s;do{var c=l.lane;if((Qi&c)===c)u!==null&&(u=u.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:t(r,l.action);else{var h={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};u===null?(a=u=h,o=r):u=u.next=h,xe.lanes|=c,Yi|=c}l=l.next}while(l!==null&&l!==s);u===null?o=r:u.next=a,Pn(r,e.memoizedState)||(Kt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,xe.lanes|=s,Yi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function sf(t){var e=_n(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Pn(s,e.memoizedState)||(Kt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function B1(){}function z1(t,e){var n=xe,r=_n(),i=e(),s=!Pn(r.memoizedState,i);if(s&&(r.memoizedState=i,Kt=!0),r=r.queue,Xm(W1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,tu(9,q1.bind(null,n,r,i,e),void 0,null),nt===null)throw Error(A(349));(Qi&30)!==0||j1(n,e,i)}return i}function j1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function q1(t,e,n,r){e.value=n,e.getSnapshot=r,G1(e)&&H1(t)}function W1(t,e,n){return n(function(){G1(e)&&H1(t)})}function G1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Pn(t,n)}catch{return!0}}function H1(t){var e=mr(t,1);e!==null&&Dn(e,t,1,-1)}function Qv(t){var e=$n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:eu,lastRenderedState:t},e.queue=t,t=t.dispatch=lx.bind(null,xe,t),[e.memoizedState,t]}function tu(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function K1(){return _n().memoizedState}function Hl(t,e,n,r){var i=$n();xe.flags|=t,i.memoizedState=tu(1|e,n,void 0,r===void 0?null:r)}function gh(t,e,n,r){var i=_n();r=r===void 0?null:r;var s=void 0;if(Ge!==null){var o=Ge.memoizedState;if(s=o.destroy,r!==null&&Km(r,o.deps)){i.memoizedState=tu(e,n,s,r);return}}xe.flags|=t,i.memoizedState=tu(1|e,n,s,r)}function Yv(t,e){return Hl(8390656,8,t,e)}function Xm(t,e){return gh(2048,8,t,e)}function Q1(t,e){return gh(4,2,t,e)}function Y1(t,e){return gh(4,4,t,e)}function X1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function J1(t,e,n){return n=n!=null?n.concat([t]):null,gh(4,4,X1.bind(null,e,t),n)}function Jm(){}function Z1(t,e){var n=_n();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Km(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function e_(t,e){var n=_n();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Km(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function t_(t,e,n){return(Qi&21)===0?(t.baseState&&(t.baseState=!1,Kt=!0),t.memoizedState=n):(Pn(n,e)||(n=i1(),xe.lanes|=n,Yi|=n,t.baseState=!0),e)}function ax(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=nf.transition;nf.transition={};try{t(!1),e()}finally{fe=n,nf.transition=r}}function n_(){return _n().memoizedState}function ux(t,e,n){var r=Hr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},r_(t))i_(e,n);else if(n=O1(t,e,n,r),n!==null){var i=Ut();Dn(n,t,r,i),s_(n,e,r)}}function lx(t,e,n){var r=Hr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(r_(t))i_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Pn(a,o)){var u=e.interleaved;u===null?(i.next=i,jm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=O1(t,e,i,r),n!==null&&(i=Ut(),Dn(n,t,r,i),s_(n,e,r))}}function r_(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function i_(t,e){ka=Cc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function s_(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bm(t,n)}}var Ac={readContext:In,useCallback:At,useContext:At,useEffect:At,useImperativeHandle:At,useInsertionEffect:At,useLayoutEffect:At,useMemo:At,useReducer:At,useRef:At,useState:At,useDebugValue:At,useDeferredValue:At,useTransition:At,useMutableSource:At,useSyncExternalStore:At,useId:At,unstable_isNewReconciler:!1},cx={readContext:In,useCallback:function(t,e){return $n().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:Yv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Hl(4194308,4,X1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Hl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Hl(4,2,t,e)},useMemo:function(t,e){var n=$n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=$n();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ux.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=$n();return t={current:t},e.memoizedState=t},useState:Qv,useDebugValue:Jm,useDeferredValue:function(t){return $n().memoizedState=t},useTransition:function(){var t=Qv(!1),e=t[0];return t=ax.bind(null,t[1]),$n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,i=$n();if(Se){if(n===void 0)throw Error(A(407));n=n()}else{if(n=e(),nt===null)throw Error(A(349));(Qi&30)!==0||j1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Yv(W1.bind(null,r,s,t),[t]),r.flags|=2048,tu(9,q1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=$n(),e=nt.identifierPrefix;if(Se){var n=sr,r=ir;n=(r&~(1<<32-Nn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Za++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ox++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},hx={readContext:In,useCallback:Z1,useContext:In,useEffect:Xm,useImperativeHandle:J1,useInsertionEffect:Q1,useLayoutEffect:Y1,useMemo:e_,useReducer:rf,useRef:K1,useState:function(){return rf(eu)},useDebugValue:Jm,useDeferredValue:function(t){var e=_n();return t_(e,Ge.memoizedState,t)},useTransition:function(){var t=rf(eu)[0],e=_n().memoizedState;return[t,e]},useMutableSource:B1,useSyncExternalStore:z1,useId:n_,unstable_isNewReconciler:!1},dx={readContext:In,useCallback:Z1,useContext:In,useEffect:Xm,useImperativeHandle:J1,useInsertionEffect:Q1,useLayoutEffect:Y1,useMemo:e_,useReducer:sf,useRef:K1,useState:function(){return sf(eu)},useDebugValue:Jm,useDeferredValue:function(t){var e=_n();return Ge===null?e.memoizedState=t:t_(e,Ge.memoizedState,t)},useTransition:function(){var t=sf(eu)[0],e=_n().memoizedState;return[t,e]},useMutableSource:B1,useSyncExternalStore:z1,useId:n_,unstable_isNewReconciler:!1};function ao(t,e){try{var n="",r=e;do n+=VC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function of(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function mp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fx=typeof WeakMap=="function"?WeakMap:Map;function o_(t,e,n){n=cr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){bc||(bc=!0,kp=r),mp(t,e)},n}function a_(t,e,n){n=cr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){mp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){mp(t,e),typeof r!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Xv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new fx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Ax.bind(null,t,e,n),e.then(t,t))}function Jv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zv(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=cr(-1,1),e.tag=2,Wr(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var px=Ir.ReactCurrentOwner,Kt=!1;function Lt(t,e,n,r){e.child=t===null?U1(e,null,n,r):so(e,t.child,n,r)}function ew(t,e,n,r,i){n=n.render;var s=e.ref;return Ks(e,i),r=Qm(t,e,n,r,s,i),n=Ym(),t!==null&&!Kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gr(t,e,i)):(Se&&n&&Mm(e),e.flags|=1,Lt(t,e,r,i),e.child)}function tw(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!og(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,u_(t,e,s,r,i)):(t=Xl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ha,n(o,r)&&t.ref===e.ref)return gr(t,e,i)}return e.flags|=1,t=Kr(s,r),t.ref=e.ref,t.return=e,e.child=t}function u_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ha(s,r)&&t.ref===e.ref)if(Kt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Kt=!0);else return e.lanes=t.lanes,gr(t,e,i)}return gp(t,e,n,r,i)}function l_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(Us,nn),nn|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(Us,nn),nn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,we(Us,nn),nn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,we(Us,nn),nn|=r;return Lt(t,e,i,n),e.child}function c_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gp(t,e,n,r,i){var s=Jt(n)?Hi:Rt.current;return s=ro(e,s),Ks(e,i),n=Qm(t,e,n,r,s,i),r=Ym(),t!==null&&!Kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gr(t,e,i)):(Se&&r&&Mm(e),e.flags|=1,Lt(t,e,n,i),e.child)}function nw(t,e,n,r,i){if(Jt(n)){var s=!0;wc(e)}else s=!1;if(Ks(e,i),e.stateNode===null)Kl(t,e),M1(e,n,r),pp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=In(l):(l=Jt(n)?Hi:Rt.current,l=ro(e,l));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&Hv(e,o,r,l),Rr=!1;var d=e.memoizedState;o.state=d,Tc(e,r,o,i),u=e.memoizedState,a!==r||d!==u||Xt.current||Rr?(typeof c=="function"&&(fp(e,n,c,r),u=e.memoizedState),(a=Rr||Gv(e,n,a,r,d,u,l))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,L1(t,e),a=e.memoizedProps,l=e.type===e.elementType?a:Cn(e.type,a),o.props=l,h=e.pendingProps,d=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=In(u):(u=Jt(n)?Hi:Rt.current,u=ro(e,u));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==u)&&Hv(e,o,r,u),Rr=!1,d=e.memoizedState,o.state=d,Tc(e,r,o,i);var g=e.memoizedState;a!==h||d!==g||Xt.current||Rr?(typeof p=="function"&&(fp(e,n,p,r),g=e.memoizedState),(l=Rr||Gv(e,n,l,r,d,g,u)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return yp(t,e,n,r,s,i)}function yp(t,e,n,r,i,s){c_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Bv(e,n,!1),gr(t,e,s);r=e.stateNode,px.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=so(e,t.child,null,s),e.child=so(e,null,a,s)):Lt(t,e,a,s),e.memoizedState=r.state,i&&Bv(e,n,!0),e.child}function h_(t){var e=t.stateNode;e.pendingContext?Vv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Vv(t,e.context,!1),Wm(t,e.containerInfo)}function rw(t,e,n,r,i){return io(),Um(i),e.flags|=256,Lt(t,e,n,r),e.child}var vp={dehydrated:null,treeContext:null,retryLane:0};function wp(t){return{baseLanes:t,cachePool:null,transitions:null}}function d_(t,e,n){var r=e.pendingProps,i=Ae.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),we(Ae,i&1),t===null)return hp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=wh(o,r,0,null),t=zi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=wp(n),e.memoizedState=vp,t):Zm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return mx(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Kr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Kr(a,s):(s=zi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?wp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=vp,r}return s=t.child,t=s.sibling,r=Kr(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Zm(t,e){return e=wh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function El(t,e,n,r){return r!==null&&Um(r),so(e,t.child,null,n),t=Zm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function mx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=of(Error(A(422))),El(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=wh({mode:"visible",children:r.children},i,0,null),s=zi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&so(e,t.child,null,o),e.child.memoizedState=wp(o),e.memoizedState=vp,s);if((e.mode&1)===0)return El(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(A(419)),r=of(s,r,void 0),El(t,e,o,r)}if(a=(o&t.childLanes)!==0,Kt||a){if(r=nt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,mr(t,i),Dn(r,t,i,-1))}return sg(),r=of(Error(A(421))),El(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=xx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,sn=qr(i.nextSibling),an=e,Se=!0,xn=null,t!==null&&(mn[gn++]=ir,mn[gn++]=sr,mn[gn++]=Ki,ir=t.id,sr=t.overflow,Ki=e),e=Zm(e,r.children),e.flags|=4096,e)}function iw(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),dp(t.return,e,n)}function af(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function f_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Lt(t,e,r.children,n),r=Ae.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&iw(t,n,e);else if(t.tag===19)iw(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(Ae,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&kc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),af(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&kc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}af(e,!0,n,null,s);break;case"together":af(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Kl(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yi|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(A(153));if(e.child!==null){for(t=e.child,n=Kr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Kr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gx(t,e,n){switch(e.tag){case 3:h_(e),io();break;case 5:V1(e);break;case 1:Jt(e.type)&&wc(e);break;case 4:Wm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;we(Ec,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(Ae,Ae.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?d_(t,e,n):(we(Ae,Ae.current&1),t=gr(t,e,n),t!==null?t.sibling:null);we(Ae,Ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return f_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(Ae,Ae.current),r)break;return null;case 22:case 23:return e.lanes=0,l_(t,e,n)}return gr(t,e,n)}var p_,Ip,m_,g_;p_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ip=function(){};m_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Li(Hn.current);var s=null;switch(n){case"input":i=zf(t,i),r=zf(t,r),s=[];break;case"select":i=be({},i,{value:void 0}),r=be({},r,{value:void 0}),s=[];break;case"textarea":i=Wf(t,i),r=Wf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=yc)}Hf(n,r);var o;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var a=i[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Va.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in r){var u=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(Va.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&Ie("scroll",t),s||a===u||(s=[])):(s=s||[]).push(l,u))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};g_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Jo(t,e){if(!Se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function yx(t,e,n){var r=e.pendingProps;switch(Fm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(e),null;case 1:return Jt(e.type)&&vc(),xt(e),null;case 3:return r=e.stateNode,oo(),_e(Xt),_e(Rt),Hm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Il(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,xn!==null&&(xp(xn),xn=null))),Ip(t,e),xt(e),null;case 5:Gm(e);var i=Li(Ja.current);if(n=e.type,t!==null&&e.stateNode!=null)m_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(A(166));return xt(e),null}if(t=Li(Hn.current),Il(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Mn]=e,r[Ya]=s,t=(e.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(i=0;i<fa.length;i++)Ie(fa[i],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":fv(r,s),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ie("invalid",r);break;case"textarea":mv(r,s),Ie("invalid",r)}Hf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&wl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&wl(r.textContent,a,t),i=["children",""+a]):Va.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ie("scroll",r)}switch(n){case"input":hl(r),pv(r,s,!0);break;case"textarea":hl(r),gv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=yc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=jI(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Mn]=e,t[Ya]=r,p_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Kf(n,r),n){case"dialog":Ie("cancel",t),Ie("close",t),i=r;break;case"iframe":case"object":case"embed":Ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<fa.length;i++)Ie(fa[i],t);i=r;break;case"source":Ie("error",t),i=r;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),i=r;break;case"details":Ie("toggle",t),i=r;break;case"input":fv(t,r),i=zf(t,r),Ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=be({},r,{value:void 0}),Ie("invalid",t);break;case"textarea":mv(t,r),i=Wf(t,r),Ie("invalid",t);break;default:i=r}Hf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?GI(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&qI(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ba(t,u):typeof u=="number"&&Ba(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Va.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ie("scroll",t):u!=null&&Sm(t,s,u,o))}switch(n){case"input":hl(t),pv(t,r,!1);break;case"textarea":hl(t),gv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Jr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?qs(t,!!r.multiple,s,!1):r.defaultValue!=null&&qs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=yc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xt(e),null;case 6:if(t&&e.stateNode!=null)g_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(A(166));if(n=Li(Ja.current),Li(Hn.current),Il(e)){if(r=e.stateNode,n=e.memoizedProps,r[Mn]=e,(s=r.nodeValue!==n)&&(t=an,t!==null))switch(t.tag){case 3:wl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mn]=e,e.stateNode=r}return xt(e),null;case 13:if(_e(Ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Se&&sn!==null&&(e.mode&1)!==0&&(e.flags&128)===0)P1(),io(),e.flags|=98560,s=!1;else if(s=Il(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(A(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[Mn]=e}else io(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;xt(e),s=!1}else xn!==null&&(xp(xn),xn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Ae.current&1)!==0?Ke===0&&(Ke=3):sg())),e.updateQueue!==null&&(e.flags|=4),xt(e),null);case 4:return oo(),Ip(t,e),t===null&&Ka(e.stateNode.containerInfo),xt(e),null;case 10:return zm(e.type._context),xt(e),null;case 17:return Jt(e.type)&&vc(),xt(e),null;case 19:if(_e(Ae),s=e.memoizedState,s===null)return xt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Jo(s,!1);else{if(Ke!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=kc(t),o!==null){for(e.flags|=128,Jo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(Ae,Ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ve()>uo&&(e.flags|=128,r=!0,Jo(s,!1),e.lanes=4194304)}else{if(!r)if(t=kc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Jo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Se)return xt(e),null}else 2*Ve()-s.renderingStartTime>uo&&n!==1073741824&&(e.flags|=128,r=!0,Jo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ve(),e.sibling=null,n=Ae.current,we(Ae,r?n&1|2:n&1),e):(xt(e),null);case 22:case 23:return ig(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(nn&1073741824)!==0&&(xt(e),e.subtreeFlags&6&&(e.flags|=8192)):xt(e),null;case 24:return null;case 25:return null}throw Error(A(156,e.tag))}function vx(t,e){switch(Fm(e),e.tag){case 1:return Jt(e.type)&&vc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return oo(),_e(Xt),_e(Rt),Hm(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Gm(e),null;case 13:if(_e(Ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(A(340));io()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(Ae),null;case 4:return oo(),null;case 10:return zm(e.type._context),null;case 22:case 23:return ig(),null;case 24:return null;default:return null}}var Sl=!1,bt=!1,wx=typeof WeakSet=="function"?WeakSet:Set,U=null;function Fs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function _p(t,e,n){try{n()}catch(r){Re(t,e,r)}}var sw=!1;function Ix(t,e){if(ip=pc,t=I1(),$m(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,l=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++l===i&&(a=o),d===s&&++c===r&&(u=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(sp={focusedElem:t,selectionRange:n},pc=!1,U=e;U!==null;)if(e=U,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,U=t;else for(;U!==null;){e=U;try{var g=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,S=g.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:Cn(e.type,v),S);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(_){Re(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,U=t;break}U=e.return}return g=sw,sw=!1,g}function Ca(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&_p(e,n,s)}i=i.next}while(i!==r)}}function yh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ep(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function y_(t){var e=t.alternate;e!==null&&(t.alternate=null,y_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Mn],delete e[Ya],delete e[up],delete e[nx],delete e[rx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function v_(t){return t.tag===5||t.tag===3||t.tag===4}function ow(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||v_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=yc));else if(r!==4&&(t=t.child,t!==null))for(Sp(t,e,n),t=t.sibling;t!==null;)Sp(t,e,n),t=t.sibling}function Tp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Tp(t,e,n),t=t.sibling;t!==null;)Tp(t,e,n),t=t.sibling}var mt=null,An=!1;function Ar(t,e,n){for(n=n.child;n!==null;)w_(t,e,n),n=n.sibling}function w_(t,e,n){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(lh,n)}catch{}switch(n.tag){case 5:bt||Fs(n,e);case 6:var r=mt,i=An;mt=null,Ar(t,e,n),mt=r,An=i,mt!==null&&(An?(t=mt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):mt.removeChild(n.stateNode));break;case 18:mt!==null&&(An?(t=mt,n=n.stateNode,t.nodeType===8?Zd(t.parentNode,n):t.nodeType===1&&Zd(t,n),Wa(t)):Zd(mt,n.stateNode));break;case 4:r=mt,i=An,mt=n.stateNode.containerInfo,An=!0,Ar(t,e,n),mt=r,An=i;break;case 0:case 11:case 14:case 15:if(!bt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&_p(n,e,o),i=i.next}while(i!==r)}Ar(t,e,n);break;case 1:if(!bt&&(Fs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Re(n,e,a)}Ar(t,e,n);break;case 21:Ar(t,e,n);break;case 22:n.mode&1?(bt=(r=bt)||n.memoizedState!==null,Ar(t,e,n),bt=r):Ar(t,e,n);break;default:Ar(t,e,n)}}function aw(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new wx),e.forEach(function(r){var i=bx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function kn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:mt=a.stateNode,An=!1;break e;case 3:mt=a.stateNode.containerInfo,An=!0;break e;case 4:mt=a.stateNode.containerInfo,An=!0;break e}a=a.return}if(mt===null)throw Error(A(160));w_(s,o,i),mt=null,An=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(l){Re(i,e,l)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)I_(e,t),e=e.sibling}function I_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(e,t),Ln(t),r&4){try{Ca(3,t,t.return),yh(3,t)}catch(v){Re(t,t.return,v)}try{Ca(5,t,t.return)}catch(v){Re(t,t.return,v)}}break;case 1:kn(e,t),Ln(t),r&512&&n!==null&&Fs(n,n.return);break;case 5:if(kn(e,t),Ln(t),r&512&&n!==null&&Fs(n,n.return),t.flags&32){var i=t.stateNode;try{Ba(i,"")}catch(v){Re(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&BI(i,s),Kf(a,o);var l=Kf(a,s);for(o=0;o<u.length;o+=2){var c=u[o],h=u[o+1];c==="style"?GI(i,h):c==="dangerouslySetInnerHTML"?qI(i,h):c==="children"?Ba(i,h):Sm(i,c,h,l)}switch(a){case"input":jf(i,s);break;case"textarea":zI(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?qs(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?qs(i,!!s.multiple,s.defaultValue,!0):qs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ya]=s}catch(v){Re(t,t.return,v)}}break;case 6:if(kn(e,t),Ln(t),r&4){if(t.stateNode===null)throw Error(A(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Re(t,t.return,v)}}break;case 3:if(kn(e,t),Ln(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wa(e.containerInfo)}catch(v){Re(t,t.return,v)}break;case 4:kn(e,t),Ln(t);break;case 13:kn(e,t),Ln(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ng=Ve())),r&4&&aw(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(bt=(l=bt)||c,kn(e,t),bt=l):kn(e,t),Ln(t),r&8192){if(l=t.memoizedState!==null,(t.stateNode.isHidden=l)&&!c&&(t.mode&1)!==0)for(U=t,c=t.child;c!==null;){for(h=U=c;U!==null;){switch(d=U,p=d.child,d.tag){case 0:case 11:case 14:case 15:Ca(4,d,d.return);break;case 1:Fs(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){Re(r,n,v)}}break;case 5:Fs(d,d.return);break;case 22:if(d.memoizedState!==null){lw(h);continue}}p!==null?(p.return=d,U=p):lw(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,l?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=WI("display",o))}catch(v){Re(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=l?"":h.memoizedProps}catch(v){Re(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:kn(e,t),Ln(t),r&4&&aw(t);break;case 21:break;default:kn(e,t),Ln(t)}}function Ln(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(v_(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ba(i,""),r.flags&=-33);var s=ow(t);Tp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ow(t);Sp(t,a,o);break;default:throw Error(A(161))}}catch(u){Re(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function _x(t,e,n){U=t,__(t)}function __(t,e,n){for(var r=(t.mode&1)!==0;U!==null;){var i=U,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Sl;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||bt;a=Sl;var l=bt;if(Sl=o,(bt=u)&&!l)for(U=i;U!==null;)o=U,u=o.child,o.tag===22&&o.memoizedState!==null?cw(i):u!==null?(u.return=o,U=u):cw(i);for(;s!==null;)U=s,__(s),s=s.sibling;U=i,Sl=a,bt=l}uw(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,U=s):uw(t)}}function uw(t){for(;U!==null;){var e=U;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:bt||yh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!bt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Cn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Wv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Wv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var c=l.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Wa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}bt||e.flags&512&&Ep(e)}catch(d){Re(e,e.return,d)}}if(e===t){U=null;break}if(n=e.sibling,n!==null){n.return=e.return,U=n;break}U=e.return}}function lw(t){for(;U!==null;){var e=U;if(e===t){U=null;break}var n=e.sibling;if(n!==null){n.return=e.return,U=n;break}U=e.return}}function cw(t){for(;U!==null;){var e=U;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yh(4,e)}catch(u){Re(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Re(e,i,u)}}var s=e.return;try{Ep(e)}catch(u){Re(e,s,u)}break;case 5:var o=e.return;try{Ep(e)}catch(u){Re(e,o,u)}}}catch(u){Re(e,e.return,u)}if(e===t){U=null;break}var a=e.sibling;if(a!==null){a.return=e.return,U=a;break}U=e.return}}var Ex=Math.ceil,xc=Ir.ReactCurrentDispatcher,eg=Ir.ReactCurrentOwner,wn=Ir.ReactCurrentBatchConfig,ae=0,nt=null,qe=null,wt=0,nn=0,Us=fi(0),Ke=0,nu=null,Yi=0,vh=0,tg=0,Aa=null,Ht=null,ng=0,uo=1/0,nr=null,bc=!1,kp=null,Gr=null,Tl=!1,Fr=null,Nc=0,xa=0,Cp=null,Ql=-1,Yl=0;function Ut(){return(ae&6)!==0?Ve():Ql!==-1?Ql:Ql=Ve()}function Hr(t){return(t.mode&1)===0?1:(ae&2)!==0&&wt!==0?wt&-wt:sx.transition!==null?(Yl===0&&(Yl=i1()),Yl):(t=fe,t!==0||(t=window.event,t=t===void 0?16:h1(t.type)),t)}function Dn(t,e,n,r){if(50<xa)throw xa=0,Cp=null,Error(A(185));Ru(t,n,r),((ae&2)===0||t!==nt)&&(t===nt&&((ae&2)===0&&(vh|=n),Ke===4&&Or(t,wt)),Zt(t,r),n===1&&ae===0&&(e.mode&1)===0&&(uo=Ve()+500,ph&&pi()))}function Zt(t,e){var n=t.callbackNode;sA(t,e);var r=fc(t,t===nt?wt:0);if(r===0)n!==null&&wv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&wv(n),e===1)t.tag===0?ix(hw.bind(null,t)):N1(hw.bind(null,t)),ex(function(){(ae&6)===0&&pi()}),n=null;else{switch(s1(r)){case 1:n=xm;break;case 4:n=n1;break;case 16:n=dc;break;case 536870912:n=r1;break;default:n=dc}n=b_(n,E_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function E_(t,e){if(Ql=-1,Yl=0,(ae&6)!==0)throw Error(A(327));var n=t.callbackNode;if(Qs()&&t.callbackNode!==n)return null;var r=fc(t,t===nt?wt:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Dc(t,r);else{e=r;var i=ae;ae|=2;var s=T_();(nt!==t||wt!==e)&&(nr=null,uo=Ve()+500,Bi(t,e));do try{kx();break}catch(a){S_(t,a)}while(1);Bm(),xc.current=s,ae=i,qe!==null?e=0:(nt=null,wt=0,e=Ke)}if(e!==0){if(e===2&&(i=Zf(t),i!==0&&(r=i,e=Ap(t,i))),e===1)throw n=nu,Bi(t,0),Or(t,r),Zt(t,Ve()),n;if(e===6)Or(t,r);else{if(i=t.current.alternate,(r&30)===0&&!Sx(i)&&(e=Dc(t,r),e===2&&(s=Zf(t),s!==0&&(r=s,e=Ap(t,s))),e===1))throw n=nu,Bi(t,0),Or(t,r),Zt(t,Ve()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(A(345));case 2:ki(t,Ht,nr);break;case 3:if(Or(t,r),(r&130023424)===r&&(e=ng+500-Ve(),10<e)){if(fc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ut(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ap(ki.bind(null,t,Ht,nr),e);break}ki(t,Ht,nr);break;case 4:if(Or(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Nn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ex(r/1960))-r,10<r){t.timeoutHandle=ap(ki.bind(null,t,Ht,nr),r);break}ki(t,Ht,nr);break;case 5:ki(t,Ht,nr);break;default:throw Error(A(329))}}}return Zt(t,Ve()),t.callbackNode===n?E_.bind(null,t):null}function Ap(t,e){var n=Aa;return t.current.memoizedState.isDehydrated&&(Bi(t,e).flags|=256),t=Dc(t,e),t!==2&&(e=Ht,Ht=n,e!==null&&xp(e)),t}function xp(t){Ht===null?Ht=t:Ht.push.apply(Ht,t)}function Sx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Pn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Or(t,e){for(e&=~tg,e&=~vh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Nn(e),r=1<<n;t[n]=-1,e&=~r}}function hw(t){if((ae&6)!==0)throw Error(A(327));Qs();var e=fc(t,0);if((e&1)===0)return Zt(t,Ve()),null;var n=Dc(t,e);if(t.tag!==0&&n===2){var r=Zf(t);r!==0&&(e=r,n=Ap(t,r))}if(n===1)throw n=nu,Bi(t,0),Or(t,e),Zt(t,Ve()),n;if(n===6)throw Error(A(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ki(t,Ht,nr),Zt(t,Ve()),null}function rg(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(uo=Ve()+500,ph&&pi())}}function Xi(t){Fr!==null&&Fr.tag===0&&(ae&6)===0&&Qs();var e=ae;ae|=1;var n=wn.transition,r=fe;try{if(wn.transition=null,fe=1,t)return t()}finally{fe=r,wn.transition=n,ae=e,(ae&6)===0&&pi()}}function ig(){nn=Us.current,_e(Us)}function Bi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ZA(n)),qe!==null)for(n=qe.return;n!==null;){var r=n;switch(Fm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vc();break;case 3:oo(),_e(Xt),_e(Rt),Hm();break;case 5:Gm(r);break;case 4:oo();break;case 13:_e(Ae);break;case 19:_e(Ae);break;case 10:zm(r.type._context);break;case 22:case 23:ig()}n=n.return}if(nt=t,qe=t=Kr(t.current,null),wt=nn=e,Ke=0,nu=null,tg=vh=Yi=0,Ht=Aa=null,Oi!==null){for(e=0;e<Oi.length;e++)if(n=Oi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Oi=null}return t}function S_(t,e){do{var n=qe;try{if(Bm(),Gl.current=Ac,Cc){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Cc=!1}if(Qi=0,Ze=Ge=xe=null,ka=!1,Za=0,eg.current=null,n===null||n.return===null){Ke=1,nu=e,qe=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=wt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Jv(o);if(p!==null){p.flags&=-257,Zv(p,o,a,s,e),p.mode&1&&Xv(s,l,e),e=p,u=l;var g=e.updateQueue;if(g===null){var v=new Set;v.add(u),e.updateQueue=v}else g.add(u);break e}else{if((e&1)===0){Xv(s,l,e),sg();break e}u=Error(A(426))}}else if(Se&&a.mode&1){var S=Jv(o);if(S!==null){(S.flags&65536)===0&&(S.flags|=256),Zv(S,o,a,s,e),Um(ao(u,a));break e}}s=u=ao(u,a),Ke!==4&&(Ke=2),Aa===null?Aa=[s]:Aa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=o_(s,u,e);qv(s,m);break e;case 1:a=u;var f=s.type,y=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Gr===null||!Gr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=a_(s,a,e);qv(s,_);break e}}s=s.return}while(s!==null)}C_(n)}catch(T){e=T,qe===n&&n!==null&&(qe=n=n.return);continue}break}while(1)}function T_(){var t=xc.current;return xc.current=Ac,t===null?Ac:t}function sg(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),nt===null||(Yi&268435455)===0&&(vh&268435455)===0||Or(nt,wt)}function Dc(t,e){var n=ae;ae|=2;var r=T_();(nt!==t||wt!==e)&&(nr=null,Bi(t,e));do try{Tx();break}catch(i){S_(t,i)}while(1);if(Bm(),ae=n,xc.current=r,qe!==null)throw Error(A(261));return nt=null,wt=0,Ke}function Tx(){for(;qe!==null;)k_(qe)}function kx(){for(;qe!==null&&!YC();)k_(qe)}function k_(t){var e=x_(t.alternate,t,nn);t.memoizedProps=t.pendingProps,e===null?C_(t):qe=e,eg.current=null}function C_(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=yx(n,e,nn),n!==null){qe=n;return}}else{if(n=vx(n,e),n!==null){n.flags&=32767,qe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ke=6,qe=null;return}}if(e=e.sibling,e!==null){qe=e;return}qe=e=t}while(e!==null);Ke===0&&(Ke=5)}function ki(t,e,n){var r=fe,i=wn.transition;try{wn.transition=null,fe=1,Cx(t,e,n,r)}finally{wn.transition=i,fe=r}return null}function Cx(t,e,n,r){do Qs();while(Fr!==null);if((ae&6)!==0)throw Error(A(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(A(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(oA(t,s),t===nt&&(qe=nt=null,wt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Tl||(Tl=!0,b_(dc,function(){return Qs(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=wn.transition,wn.transition=null;var o=fe;fe=1;var a=ae;ae|=4,eg.current=null,Ix(t,n),I_(n,t),GA(sp),pc=!!ip,sp=ip=null,t.current=n,_x(n),XC(),ae=a,fe=o,wn.transition=s}else t.current=n;if(Tl&&(Tl=!1,Fr=t,Nc=i),s=t.pendingLanes,s===0&&(Gr=null),eA(n.stateNode),Zt(t,Ve()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(bc)throw bc=!1,t=kp,kp=null,t;return(Nc&1)!==0&&t.tag!==0&&Qs(),s=t.pendingLanes,(s&1)!==0?t===Cp?xa++:(xa=0,Cp=t):xa=0,pi(),null}function Qs(){if(Fr!==null){var t=s1(Nc),e=wn.transition,n=fe;try{if(wn.transition=null,fe=16>t?16:t,Fr===null)var r=!1;else{if(t=Fr,Fr=null,Nc=0,(ae&6)!==0)throw Error(A(331));var i=ae;for(ae|=4,U=t.current;U!==null;){var s=U,o=s.child;if((U.flags&16)!==0){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var l=a[u];for(U=l;U!==null;){var c=U;switch(c.tag){case 0:case 11:case 15:Ca(8,c,s)}var h=c.child;if(h!==null)h.return=c,U=h;else for(;U!==null;){c=U;var d=c.sibling,p=c.return;if(y_(c),c===l){U=null;break}if(d!==null){d.return=p,U=d;break}U=p}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}U=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,U=o;else e:for(;U!==null;){if(s=U,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Ca(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,U=m;break e}U=s.return}}var f=t.current;for(U=f;U!==null;){o=U;var y=o.child;if((o.subtreeFlags&2064)!==0&&y!==null)y.return=o,U=y;else e:for(o=f;U!==null;){if(a=U,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:yh(9,a)}}catch(T){Re(a,a.return,T)}if(a===o){U=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,U=_;break e}U=a.return}}if(ae=i,pi(),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(lh,t)}catch{}r=!0}return r}finally{fe=n,wn.transition=e}}return!1}function dw(t,e,n){e=ao(n,e),e=o_(t,e,1),t=Wr(t,e,1),e=Ut(),t!==null&&(Ru(t,1,e),Zt(t,e))}function Re(t,e,n){if(t.tag===3)dw(t,t,n);else for(;e!==null;){if(e.tag===3){dw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gr===null||!Gr.has(r))){t=ao(n,t),t=a_(e,t,1),e=Wr(e,t,1),t=Ut(),e!==null&&(Ru(e,1,t),Zt(e,t));break}}e=e.return}}function Ax(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ut(),t.pingedLanes|=t.suspendedLanes&n,nt===t&&(wt&n)===n&&(Ke===4||Ke===3&&(wt&130023424)===wt&&500>Ve()-ng?Bi(t,0):tg|=n),Zt(t,e)}function A_(t,e){e===0&&((t.mode&1)===0?e=1:(e=pl,pl<<=1,(pl&130023424)===0&&(pl=4194304)));var n=Ut();t=mr(t,e),t!==null&&(Ru(t,e,n),Zt(t,n))}function xx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),A_(t,n)}function bx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(e),A_(t,n)}var x_;x_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Xt.current)Kt=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Kt=!1,gx(t,e,n);Kt=(t.flags&131072)!==0}else Kt=!1,Se&&(e.flags&1048576)!==0&&D1(e,_c,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Kl(t,e),t=e.pendingProps;var i=ro(e,Rt.current);Ks(e,n),i=Qm(null,e,r,t,i,n);var s=Ym();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Jt(r)?(s=!0,wc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,qm(e),i.updater=mh,e.stateNode=i,i._reactInternals=e,pp(e,r,t,n),e=yp(null,e,r,!0,s,n)):(e.tag=0,Se&&s&&Mm(e),Lt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Kl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Dx(r),t=Cn(r,t),i){case 0:e=gp(null,e,r,t,n);break e;case 1:e=nw(null,e,r,t,n);break e;case 11:e=ew(null,e,r,t,n);break e;case 14:e=tw(null,e,r,Cn(r.type,t),n);break e}throw Error(A(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Cn(r,i),gp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Cn(r,i),nw(t,e,r,i,n);case 3:e:{if(h_(e),t===null)throw Error(A(387));r=e.pendingProps,s=e.memoizedState,i=s.element,L1(t,e),Tc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ao(Error(A(423)),e),e=rw(t,e,r,n,i);break e}else if(r!==i){i=ao(Error(A(424)),e),e=rw(t,e,r,n,i);break e}else for(sn=qr(e.stateNode.containerInfo.firstChild),an=e,Se=!0,xn=null,n=U1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(io(),r===i){e=gr(t,e,n);break e}Lt(t,e,r,n)}e=e.child}return e;case 5:return V1(e),t===null&&hp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,op(r,i)?o=null:s!==null&&op(r,s)&&(e.flags|=32),c_(t,e),Lt(t,e,o,n),e.child;case 6:return t===null&&hp(e),null;case 13:return d_(t,e,n);case 4:return Wm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=so(e,null,r,n):Lt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Cn(r,i),ew(t,e,r,i,n);case 7:return Lt(t,e,e.pendingProps,n),e.child;case 8:return Lt(t,e,e.pendingProps.children,n),e.child;case 12:return Lt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,we(Ec,r._currentValue),r._currentValue=o,s!==null)if(Pn(s.value,o)){if(s.children===i.children&&!Xt.current){e=gr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=cr(-1,n&-n),u.tag=2;var l=s.updateQueue;if(l!==null){l=l.shared;var c=l.pending;c===null?u.next=u:(u.next=c.next,c.next=u),l.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),dp(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),dp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Lt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ks(e,n),i=In(i),r=r(i),e.flags|=1,Lt(t,e,r,n),e.child;case 14:return r=e.type,i=Cn(r,e.pendingProps),i=Cn(r.type,i),tw(t,e,r,i,n);case 15:return u_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Cn(r,i),Kl(t,e),e.tag=1,Jt(r)?(t=!0,wc(e)):t=!1,Ks(e,n),M1(e,r,i),pp(e,r,i,n),yp(null,e,r,!0,t,n);case 19:return f_(t,e,n);case 22:return l_(t,e,n)}throw Error(A(156,e.tag))};function b_(t,e){return t1(t,e)}function Nx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(t,e,n,r){return new Nx(t,e,n,r)}function og(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Dx(t){if(typeof t=="function")return og(t)?1:0;if(t!=null){if(t=t.$$typeof,t===km)return 11;if(t===Cm)return 14}return 2}function Kr(t,e){var n=t.alternate;return n===null?(n=yn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Xl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")og(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case bs:return zi(n.children,i,s,e);case Tm:o=8,i|=8;break;case Ff:return t=yn(12,n,e,i|2),t.elementType=Ff,t.lanes=s,t;case Uf:return t=yn(13,n,e,i),t.elementType=Uf,t.lanes=s,t;case Vf:return t=yn(19,n,e,i),t.elementType=Vf,t.lanes=s,t;case FI:return wh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $I:o=10;break e;case MI:o=9;break e;case km:o=11;break e;case Cm:o=14;break e;case Dr:o=16,r=null;break e}throw Error(A(130,t==null?t:typeof t,""))}return e=yn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function zi(t,e,n,r){return t=yn(7,t,r,e),t.lanes=n,t}function wh(t,e,n,r){return t=yn(22,t,r,e),t.elementType=FI,t.lanes=n,t.stateNode={isHidden:!1},t}function uf(t,e,n){return t=yn(6,t,null,e),t.lanes=n,t}function lf(t,e,n){return e=yn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Rx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zd(0),this.expirationTimes=zd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ag(t,e,n,r,i,s,o,a,u){return t=new Rx(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=yn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qm(s),t}function Px(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function N_(t){if(!t)return Zr;t=t._reactInternals;e:{if(ds(t)!==t||t.tag!==1)throw Error(A(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(A(171))}if(t.tag===1){var n=t.type;if(Jt(n))return b1(t,n,e)}return e}function D_(t,e,n,r,i,s,o,a,u){return t=ag(n,r,!0,t,i,s,o,a,u),t.context=N_(null),n=t.current,r=Ut(),i=Hr(n),s=cr(r,i),s.callback=e!=null?e:null,Wr(n,s,i),t.current.lanes=i,Ru(t,i,r),Zt(t,r),t}function Ih(t,e,n,r){var i=e.current,s=Ut(),o=Hr(i);return n=N_(n),e.context===null?e.context=n:e.pendingContext=n,e=cr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Wr(i,e,o),t!==null&&(Dn(t,i,o,s),Wl(t,i,o)),o}function Rc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ug(t,e){fw(t,e),(t=t.alternate)&&fw(t,e)}function Ox(){return null}var R_=typeof reportError=="function"?reportError:function(t){console.error(t)};function lg(t){this._internalRoot=t}_h.prototype.render=lg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(A(409));Ih(t,e,null,null)};_h.prototype.unmount=lg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xi(function(){Ih(null,t,null,null)}),e[pr]=null}};function _h(t){this._internalRoot=t}_h.prototype.unstable_scheduleHydration=function(t){if(t){var e=u1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pr.length&&e!==0&&e<Pr[n].priority;n++);Pr.splice(n,0,t),n===0&&c1(t)}};function cg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Eh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pw(){}function Lx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var l=Rc(o);s.call(l)}}var o=D_(e,r,t,0,null,!1,!1,"",pw);return t._reactRootContainer=o,t[pr]=o.current,Ka(t.nodeType===8?t.parentNode:t),Xi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var l=Rc(u);a.call(l)}}var u=ag(t,0,!1,null,null,!1,!1,"",pw);return t._reactRootContainer=u,t[pr]=u.current,Ka(t.nodeType===8?t.parentNode:t),Xi(function(){Ih(e,u,n,r)}),u}function Sh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Rc(o);a.call(u)}}Ih(e,o,t,i)}else o=Lx(n,e,t,i,r);return Rc(o)}o1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=da(e.pendingLanes);n!==0&&(bm(e,n|1),Zt(e,Ve()),(ae&6)===0&&(uo=Ve()+500,pi()))}break;case 13:Xi(function(){var r=mr(t,1);if(r!==null){var i=Ut();Dn(r,t,1,i)}}),ug(t,1)}};Nm=function(t){if(t.tag===13){var e=mr(t,134217728);if(e!==null){var n=Ut();Dn(e,t,134217728,n)}ug(t,134217728)}};a1=function(t){if(t.tag===13){var e=Hr(t),n=mr(t,e);if(n!==null){var r=Ut();Dn(n,t,e,r)}ug(t,e)}};u1=function(){return fe};l1=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};Yf=function(t,e,n){switch(e){case"input":if(jf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=fh(r);if(!i)throw Error(A(90));VI(r),jf(r,i)}}}break;case"textarea":zI(t,n);break;case"select":e=n.value,e!=null&&qs(t,!!n.multiple,e,!1)}};QI=rg;YI=Xi;var $x={usingClientEntryPoint:!1,Events:[Ou,Ps,fh,HI,KI,rg]},Zo={findFiberByHostInstance:Pi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Mx={bundleType:Zo.bundleType,version:Zo.version,rendererPackageName:Zo.rendererPackageName,rendererConfig:Zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ir.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ZI(t),t===null?null:t.stateNode},findFiberByHostInstance:Zo.findFiberByHostInstance||Ox,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{lh=kl.inject(Mx),Gn=kl}catch{}}dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$x;dn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cg(e))throw Error(A(200));return Px(t,e,null,n)};dn.createRoot=function(t,e){if(!cg(t))throw Error(A(299));var n=!1,r="",i=R_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ag(t,1,!1,null,null,n,!1,r,i),t[pr]=e.current,Ka(t.nodeType===8?t.parentNode:t),new lg(e)};dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(A(188)):(t=Object.keys(t).join(","),Error(A(268,t)));return t=ZI(e),t=t===null?null:t.stateNode,t};dn.flushSync=function(t){return Xi(t)};dn.hydrate=function(t,e,n){if(!Eh(e))throw Error(A(200));return Sh(null,t,e,!0,n)};dn.hydrateRoot=function(t,e,n){if(!cg(t))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=R_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=D_(e,null,t,1,n!=null?n:null,i,!1,s,o),t[pr]=e.current,Ka(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new _h(e)};dn.render=function(t,e,n){if(!Eh(e))throw Error(A(200));return Sh(null,t,e,!1,n)};dn.unmountComponentAtNode=function(t){if(!Eh(t))throw Error(A(40));return t._reactRootContainer?(Xi(function(){Sh(null,null,t,!1,function(){t._reactRootContainer=null,t[pr]=null})}),!0):!1};dn.unstable_batchedUpdates=rg;dn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Eh(n))throw Error(A(200));if(t==null||t._reactInternals===void 0)throw Error(A(38));return Sh(t,e,n,!1,r)};dn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=dn})(TI);var mw=TI.exports;$f.createRoot=mw.createRoot,$f.hydrateRoot=mw.hydrateRoot;var hg={exports:{}},pe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg=Symbol.for("react.element"),fg=Symbol.for("react.portal"),Th=Symbol.for("react.fragment"),kh=Symbol.for("react.strict_mode"),Ch=Symbol.for("react.profiler"),Ah=Symbol.for("react.provider"),xh=Symbol.for("react.context"),Fx=Symbol.for("react.server_context"),bh=Symbol.for("react.forward_ref"),Nh=Symbol.for("react.suspense"),Dh=Symbol.for("react.suspense_list"),Rh=Symbol.for("react.memo"),Ph=Symbol.for("react.lazy"),Ux=Symbol.for("react.offscreen"),P_;P_=Symbol.for("react.module.reference");function Sn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case dg:switch(t=t.type,t){case Th:case Ch:case kh:case Nh:case Dh:return t;default:switch(t=t&&t.$$typeof,t){case Fx:case xh:case bh:case Ph:case Rh:case Ah:return t;default:return e}}case fg:return e}}}pe.ContextConsumer=xh;pe.ContextProvider=Ah;pe.Element=dg;pe.ForwardRef=bh;pe.Fragment=Th;pe.Lazy=Ph;pe.Memo=Rh;pe.Portal=fg;pe.Profiler=Ch;pe.StrictMode=kh;pe.Suspense=Nh;pe.SuspenseList=Dh;pe.isAsyncMode=function(){return!1};pe.isConcurrentMode=function(){return!1};pe.isContextConsumer=function(t){return Sn(t)===xh};pe.isContextProvider=function(t){return Sn(t)===Ah};pe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===dg};pe.isForwardRef=function(t){return Sn(t)===bh};pe.isFragment=function(t){return Sn(t)===Th};pe.isLazy=function(t){return Sn(t)===Ph};pe.isMemo=function(t){return Sn(t)===Rh};pe.isPortal=function(t){return Sn(t)===fg};pe.isProfiler=function(t){return Sn(t)===Ch};pe.isStrictMode=function(t){return Sn(t)===kh};pe.isSuspense=function(t){return Sn(t)===Nh};pe.isSuspenseList=function(t){return Sn(t)===Dh};pe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Th||t===Ch||t===kh||t===Nh||t===Dh||t===Ux||typeof t=="object"&&t!==null&&(t.$$typeof===Ph||t.$$typeof===Rh||t.$$typeof===Ah||t.$$typeof===xh||t.$$typeof===bh||t.$$typeof===P_||t.getModuleId!==void 0)};pe.typeOf=Sn;(function(t){t.exports=pe})(hg);function Vx(t){function e(O,M,F,Q,I){for(var re=0,P=0,De=0,ce=0,de,ee,dt=0,qt=0,le,Ct=le=de=0,he=0,ft=0,qo=0,pt=0,ul=F.length,Wo=ul-1,Tn,X="",Ue="",Ld="",$d="",Cr;he<ul;){if(ee=F.charCodeAt(he),he===Wo&&P+ce+De+re!==0&&(P!==0&&(ee=P===47?10:47),ce=De=re=0,ul++,Wo++),P+ce+De+re===0){if(he===Wo&&(0<ft&&(X=X.replace(d,"")),0<X.trim().length)){switch(ee){case 32:case 9:case 59:case 13:case 10:break;default:X+=F.charAt(he)}ee=59}switch(ee){case 123:for(X=X.trim(),de=X.charCodeAt(0),le=1,pt=++he;he<ul;){switch(ee=F.charCodeAt(he)){case 123:le++;break;case 125:le--;break;case 47:switch(ee=F.charCodeAt(he+1)){case 42:case 47:e:{for(Ct=he+1;Ct<Wo;++Ct)switch(F.charCodeAt(Ct)){case 47:if(ee===42&&F.charCodeAt(Ct-1)===42&&he+2!==Ct){he=Ct+1;break e}break;case 10:if(ee===47){he=Ct+1;break e}}he=Ct}}break;case 91:ee++;case 40:ee++;case 34:case 39:for(;he++<Wo&&F.charCodeAt(he)!==ee;);}if(le===0)break;he++}switch(le=F.substring(pt,he),de===0&&(de=(X=X.replace(h,"").trim()).charCodeAt(0)),de){case 64:switch(0<ft&&(X=X.replace(d,"")),ee=X.charCodeAt(1),ee){case 100:case 109:case 115:case 45:ft=M;break;default:ft=tr}if(le=e(M,ft,le,ee,I+1),pt=le.length,0<R&&(ft=n(tr,X,qo),Cr=a(3,le,ft,M,ht,We,pt,ee,I,Q),X=ft.join(""),Cr!==void 0&&(pt=(le=Cr.trim()).length)===0&&(ee=0,le="")),0<pt)switch(ee){case 115:X=X.replace(x,o);case 100:case 109:case 45:le=X+"{"+le+"}";break;case 107:X=X.replace(f,"$1 $2"),le=X+"{"+le+"}",le=kt===1||kt===2&&s("@"+le,3)?"@-webkit-"+le+"@"+le:"@"+le;break;default:le=X+le,Q===112&&(le=(Ue+=le,""))}else le="";break;default:le=e(M,n(M,X,qo),le,Q,I+1)}Ld+=le,le=qo=ft=Ct=de=0,X="",ee=F.charCodeAt(++he);break;case 125:case 59:if(X=(0<ft?X.replace(d,""):X).trim(),1<(pt=X.length))switch(Ct===0&&(de=X.charCodeAt(0),de===45||96<de&&123>de)&&(pt=(X=X.replace(" ",":")).length),0<R&&(Cr=a(1,X,M,O,ht,We,Ue.length,Q,I,Q))!==void 0&&(pt=(X=Cr.trim()).length)===0&&(X="\0\0"),de=X.charCodeAt(0),ee=X.charCodeAt(1),de){case 0:break;case 64:if(ee===105||ee===99){$d+=X+F.charAt(he);break}default:X.charCodeAt(pt-1)!==58&&(Ue+=i(X,de,ee,X.charCodeAt(2)))}qo=ft=Ct=de=0,X="",ee=F.charCodeAt(++he)}}switch(ee){case 13:case 10:P===47?P=0:1+de===0&&Q!==107&&0<X.length&&(ft=1,X+="\0"),0<R*K&&a(0,X,M,O,ht,We,Ue.length,Q,I,Q),We=1,ht++;break;case 59:case 125:if(P+ce+De+re===0){We++;break}default:switch(We++,Tn=F.charAt(he),ee){case 9:case 32:if(ce+re+P===0)switch(dt){case 44:case 58:case 9:case 32:Tn="";break;default:ee!==32&&(Tn=" ")}break;case 0:Tn="\\0";break;case 12:Tn="\\f";break;case 11:Tn="\\v";break;case 38:ce+P+re===0&&(ft=qo=1,Tn="\f"+Tn);break;case 108:if(ce+P+re+tn===0&&0<Ct)switch(he-Ct){case 2:dt===112&&F.charCodeAt(he-3)===58&&(tn=dt);case 8:qt===111&&(tn=qt)}break;case 58:ce+P+re===0&&(Ct=he);break;case 44:P+De+ce+re===0&&(ft=1,Tn+="\r");break;case 34:case 39:P===0&&(ce=ce===ee?0:ce===0?ee:ce);break;case 91:ce+P+De===0&&re++;break;case 93:ce+P+De===0&&re--;break;case 41:ce+P+re===0&&De--;break;case 40:if(ce+P+re===0){if(de===0)switch(2*dt+3*qt){case 533:break;default:de=1}De++}break;case 64:P+De+ce+re+Ct+le===0&&(le=1);break;case 42:case 47:if(!(0<ce+re+De))switch(P){case 0:switch(2*ee+3*F.charCodeAt(he+1)){case 235:P=47;break;case 220:pt=he,P=42}break;case 42:ee===47&&dt===42&&pt+2!==he&&(F.charCodeAt(pt+2)===33&&(Ue+=F.substring(pt,he+1)),Tn="",P=0)}}P===0&&(X+=Tn)}qt=dt,dt=ee,he++}if(pt=Ue.length,0<pt){if(ft=M,0<R&&(Cr=a(2,Ue,ft,O,ht,We,pt,Q,I,Q),Cr!==void 0&&(Ue=Cr).length===0))return $d+Ue+Ld;if(Ue=ft.join(",")+"{"+Ue+"}",kt*tn!==0){switch(kt!==2||s(Ue,2)||(tn=0),tn){case 111:Ue=Ue.replace(_,":-moz-$1")+Ue;break;case 112:Ue=Ue.replace(y,"::-webkit-input-$1")+Ue.replace(y,"::-moz-$1")+Ue.replace(y,":-ms-input-$1")+Ue}tn=0}}return $d+Ue+Ld}function n(O,M,F){var Q=M.trim().split(S);M=Q;var I=Q.length,re=O.length;switch(re){case 0:case 1:var P=0;for(O=re===0?"":O[0]+" ";P<I;++P)M[P]=r(O,M[P],F).trim();break;default:var De=P=0;for(M=[];P<I;++P)for(var ce=0;ce<re;++ce)M[De++]=r(O[ce]+" ",Q[P],F).trim()}return M}function r(O,M,F){var Q=M.charCodeAt(0);switch(33>Q&&(Q=(M=M.trim()).charCodeAt(0)),Q){case 38:return M.replace(m,"$1"+O.trim());case 58:return O.trim()+M.replace(m,"$1"+O.trim());default:if(0<1*F&&0<M.indexOf("\f"))return M.replace(m,(O.charCodeAt(0)===58?"":"$1")+O.trim())}return O+M}function i(O,M,F,Q){var I=O+";",re=2*M+3*F+4*Q;if(re===944){O=I.indexOf(":",9)+1;var P=I.substring(O,I.length-1).trim();return P=I.substring(0,O).trim()+P+";",kt===1||kt===2&&s(P,1)?"-webkit-"+P+P:P}if(kt===0||kt===2&&!s(I,1))return I;switch(re){case 1015:return I.charCodeAt(10)===97?"-webkit-"+I+I:I;case 951:return I.charCodeAt(3)===116?"-webkit-"+I+I:I;case 963:return I.charCodeAt(5)===110?"-webkit-"+I+I:I;case 1009:if(I.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+I+I;case 978:return"-webkit-"+I+"-moz-"+I+I;case 1019:case 983:return"-webkit-"+I+"-moz-"+I+"-ms-"+I+I;case 883:if(I.charCodeAt(8)===45)return"-webkit-"+I+I;if(0<I.indexOf("image-set(",11))return I.replace(Xe,"$1-webkit-$2")+I;break;case 932:if(I.charCodeAt(4)===45)switch(I.charCodeAt(5)){case 103:return"-webkit-box-"+I.replace("-grow","")+"-webkit-"+I+"-ms-"+I.replace("grow","positive")+I;case 115:return"-webkit-"+I+"-ms-"+I.replace("shrink","negative")+I;case 98:return"-webkit-"+I+"-ms-"+I.replace("basis","preferred-size")+I}return"-webkit-"+I+"-ms-"+I+I;case 964:return"-webkit-"+I+"-ms-flex-"+I+I;case 1023:if(I.charCodeAt(8)!==99)break;return P=I.substring(I.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+P+"-webkit-"+I+"-ms-flex-pack"+P+I;case 1005:return g.test(I)?I.replace(p,":-webkit-")+I.replace(p,":-moz-")+I:I;case 1e3:switch(P=I.substring(13).trim(),M=P.indexOf("-")+1,P.charCodeAt(0)+P.charCodeAt(M)){case 226:P=I.replace(T,"tb");break;case 232:P=I.replace(T,"tb-rl");break;case 220:P=I.replace(T,"lr");break;default:return I}return"-webkit-"+I+"-ms-"+P+I;case 1017:if(I.indexOf("sticky",9)===-1)break;case 975:switch(M=(I=O).length-10,P=(I.charCodeAt(M)===33?I.substring(0,M):I).substring(O.indexOf(":",7)+1).trim(),re=P.charCodeAt(0)+(P.charCodeAt(7)|0)){case 203:if(111>P.charCodeAt(8))break;case 115:I=I.replace(P,"-webkit-"+P)+";"+I;break;case 207:case 102:I=I.replace(P,"-webkit-"+(102<re?"inline-":"")+"box")+";"+I.replace(P,"-webkit-"+P)+";"+I.replace(P,"-ms-"+P+"box")+";"+I}return I+";";case 938:if(I.charCodeAt(5)===45)switch(I.charCodeAt(6)){case 105:return P=I.replace("-items",""),"-webkit-"+I+"-webkit-box-"+P+"-ms-flex-"+P+I;case 115:return"-webkit-"+I+"-ms-flex-item-"+I.replace($,"")+I;default:return"-webkit-"+I+"-ms-flex-line-pack"+I.replace("align-content","").replace($,"")+I}break;case 973:case 989:if(I.charCodeAt(3)!==45||I.charCodeAt(4)===122)break;case 931:case 953:if(G.test(O)===!0)return(P=O.substring(O.indexOf(":")+1)).charCodeAt(0)===115?i(O.replace("stretch","fill-available"),M,F,Q).replace(":fill-available",":stretch"):I.replace(P,"-webkit-"+P)+I.replace(P,"-moz-"+P.replace("fill-",""))+I;break;case 962:if(I="-webkit-"+I+(I.charCodeAt(5)===102?"-ms-"+I:"")+I,F+Q===211&&I.charCodeAt(13)===105&&0<I.indexOf("transform",10))return I.substring(0,I.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+I}return I}function s(O,M){var F=O.indexOf(M===1?":":"{"),Q=O.substring(0,M!==3?F:10);return F=O.substring(F+1,O.length-1),W(M!==2?Q:Q.replace(te,"$1"),F,M)}function o(O,M){var F=i(M,M.charCodeAt(0),M.charCodeAt(1),M.charCodeAt(2));return F!==M+";"?F.replace(N," or ($1)").substring(4):"("+M+")"}function a(O,M,F,Q,I,re,P,De,ce,de){for(var ee=0,dt=M,qt;ee<R;++ee)switch(qt=Ot[ee].call(c,O,dt,F,Q,I,re,P,De,ce,de)){case void 0:case!1:case!0:case null:break;default:dt=qt}if(dt!==M)return dt}function u(O){switch(O){case void 0:case null:R=Ot.length=0;break;default:if(typeof O=="function")Ot[R++]=O;else if(typeof O=="object")for(var M=0,F=O.length;M<F;++M)u(O[M]);else K=!!O|0}return u}function l(O){return O=O.prefix,O!==void 0&&(W=null,O?typeof O!="function"?kt=1:(kt=2,W=O):kt=0),l}function c(O,M){var F=O;if(33>F.charCodeAt(0)&&(F=F.trim()),ye=F,F=[ye],0<R){var Q=a(-1,M,F,F,ht,We,0,0,0,0);Q!==void 0&&typeof Q=="string"&&(M=Q)}var I=e(tr,F,M,0,0);return 0<R&&(Q=a(-2,I,F,F,ht,We,I.length,0,0,0),Q!==void 0&&(I=Q)),ye="",tn=0,We=ht=1,I}var h=/^\0+/g,d=/[\0\r\f]/g,p=/: */g,g=/zoo|gra/,v=/([,: ])(transform)/g,S=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,_=/:(read-only)/g,T=/[svh]\w+-[tblr]{2}/,x=/\(\s*(.*)\s*\)/g,N=/([\s\S]*?);/g,$=/-self|flex-/g,te=/[^]*?(:[rp][el]a[\w-]+)[^]*/,G=/stretch|:\s*\w+\-(?:conte|avail)/,Xe=/([^-])(image-set\()/,We=1,ht=1,tn=0,kt=1,tr=[],Ot=[],R=0,W=null,K=0,ye="";return c.use=u,c.set=l,t!==void 0&&l(t),c}var Bx={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function zx(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var jx=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,gw=zx(function(t){return jx.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),O_={exports:{}},me={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var at=typeof Symbol=="function"&&Symbol.for,pg=at?Symbol.for("react.element"):60103,mg=at?Symbol.for("react.portal"):60106,Oh=at?Symbol.for("react.fragment"):60107,Lh=at?Symbol.for("react.strict_mode"):60108,$h=at?Symbol.for("react.profiler"):60114,Mh=at?Symbol.for("react.provider"):60109,Fh=at?Symbol.for("react.context"):60110,gg=at?Symbol.for("react.async_mode"):60111,Uh=at?Symbol.for("react.concurrent_mode"):60111,Vh=at?Symbol.for("react.forward_ref"):60112,Bh=at?Symbol.for("react.suspense"):60113,qx=at?Symbol.for("react.suspense_list"):60120,zh=at?Symbol.for("react.memo"):60115,jh=at?Symbol.for("react.lazy"):60116,Wx=at?Symbol.for("react.block"):60121,Gx=at?Symbol.for("react.fundamental"):60117,Hx=at?Symbol.for("react.responder"):60118,Kx=at?Symbol.for("react.scope"):60119;function pn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case pg:switch(t=t.type,t){case gg:case Uh:case Oh:case $h:case Lh:case Bh:return t;default:switch(t=t&&t.$$typeof,t){case Fh:case Vh:case jh:case zh:case Mh:return t;default:return e}}case mg:return e}}}function L_(t){return pn(t)===Uh}me.AsyncMode=gg;me.ConcurrentMode=Uh;me.ContextConsumer=Fh;me.ContextProvider=Mh;me.Element=pg;me.ForwardRef=Vh;me.Fragment=Oh;me.Lazy=jh;me.Memo=zh;me.Portal=mg;me.Profiler=$h;me.StrictMode=Lh;me.Suspense=Bh;me.isAsyncMode=function(t){return L_(t)||pn(t)===gg};me.isConcurrentMode=L_;me.isContextConsumer=function(t){return pn(t)===Fh};me.isContextProvider=function(t){return pn(t)===Mh};me.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===pg};me.isForwardRef=function(t){return pn(t)===Vh};me.isFragment=function(t){return pn(t)===Oh};me.isLazy=function(t){return pn(t)===jh};me.isMemo=function(t){return pn(t)===zh};me.isPortal=function(t){return pn(t)===mg};me.isProfiler=function(t){return pn(t)===$h};me.isStrictMode=function(t){return pn(t)===Lh};me.isSuspense=function(t){return pn(t)===Bh};me.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Oh||t===Uh||t===$h||t===Lh||t===Bh||t===qx||typeof t=="object"&&t!==null&&(t.$$typeof===jh||t.$$typeof===zh||t.$$typeof===Mh||t.$$typeof===Fh||t.$$typeof===Vh||t.$$typeof===Gx||t.$$typeof===Hx||t.$$typeof===Kx||t.$$typeof===Wx)};me.typeOf=pn;(function(t){t.exports=me})(O_);var yg=O_.exports,Qx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Yx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Xx={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},vg={};vg[yg.ForwardRef]=Xx;vg[yg.Memo]=$_;function yw(t){return yg.isMemo(t)?$_:vg[t.$$typeof]||Qx}var Jx=Object.defineProperty,Zx=Object.getOwnPropertyNames,vw=Object.getOwnPropertySymbols,eb=Object.getOwnPropertyDescriptor,tb=Object.getPrototypeOf,ww=Object.prototype;function M_(t,e,n){if(typeof e!="string"){if(ww){var r=tb(e);r&&r!==ww&&M_(t,r,n)}var i=Zx(e);vw&&(i=i.concat(vw(e)));for(var s=yw(t),o=yw(e),a=0;a<i.length;++a){var u=i[a];if(!Yx[u]&&!(n&&n[u])&&!(o&&o[u])&&!(s&&s[u])){var l=eb(e,u);try{Jx(t,u,l)}catch{}}}}return t}var nb=M_;function or(){return(or=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var Iw=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},bp=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!hg.exports.typeOf(t)},Pc=Object.freeze([]),Qr=Object.freeze({});function ru(t){return typeof t=="function"}function _w(t){return t.displayName||t.name||"Component"}function wg(t){return t&&typeof t.styledComponentId=="string"}var lo=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Ig=typeof window<"u"&&"HTMLElement"in window,rb=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1);function $u(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var ib=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&$u(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var u=this.indexOfGroup(n+1),l=0,c=r.length;l<c;l++)this.tag.insertRule(u,r[l])&&(this.groupSizes[n]++,u++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),Jl=new Map,Oc=new Map,ba=1,Cl=function(t){if(Jl.has(t))return Jl.get(t);for(;Oc.has(ba);)ba++;var e=ba++;return Jl.set(t,e),Oc.set(e,t),e},sb=function(t){return Oc.get(t)},ob=function(t,e){e>=ba&&(ba=e+1),Jl.set(t,e),Oc.set(e,t)},ab="style["+lo+'][data-styled-version="5.3.6"]',ub=new RegExp("^"+lo+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),lb=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},cb=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(ub);if(a){var u=0|parseInt(a[1],10),l=a[2];u!==0&&(ob(l,u),lb(t,l,a[3]),t.getTag().insertRules(u,r)),r.length=0}else r.push(o)}}},hb=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},F_=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var u=a.childNodes,l=u.length;l>=0;l--){var c=u[l];if(c&&c.nodeType===1&&c.hasAttribute(lo))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(lo,"active"),r.setAttribute("data-styled-version","5.3.6");var o=hb();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},db=function(){function t(n){var r=this.element=F_(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var u=s[o];if(u.ownerNode===i)return u}$u(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),fb=function(){function t(n){var r=this.element=F_(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),pb=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),Ew=Ig,mb={isServer:!Ig,useCSSOMInjection:!rb},U_=function(){function t(n,r,i){n===void 0&&(n=Qr),r===void 0&&(r={}),this.options=or({},mb,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Ig&&Ew&&(Ew=!1,function(s){for(var o=document.querySelectorAll(ab),a=0,u=o.length;a<u;a++){var l=o[a];l&&l.getAttribute(lo)!=="active"&&(cb(s,l),l.parentNode&&l.parentNode.removeChild(l))}}(this))}t.registerId=function(n){return Cl(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(or({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new pb(o):s?new db(o):new fb(o),new ib(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Cl(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Cl(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Cl(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=sb(o);if(a!==void 0){var u=n.names.get(a),l=r.getGroup(o);if(u&&l&&u.size){var c=lo+".g"+o+'[id="'+a+'"]',h="";u!==void 0&&u.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+l+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),gb=/(a)(d)/gi,Sw=function(t){return String.fromCharCode(t+(t>25?39:97))};function Np(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=Sw(e%52)+n;return(Sw(e%52)+n).replace(gb,"$1-$2")}var Vs=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},V_=function(t){return Vs(5381,t)};function yb(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ru(n)&&!wg(n))return!1}return!0}var vb=V_("5.3.6"),wb=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&yb(e),this.componentId=n,this.baseHash=Vs(vb,n),this.baseStyle=r,U_.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=co(this.rules,e,n,r).join(""),a=Np(Vs(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var u=r(o,"."+a,void 0,i);n.insertRules(i,a,u)}s.push(a),this.staticRulesId=a}else{for(var l=this.rules.length,c=Vs(this.baseHash,r.hash),h="",d=0;d<l;d++){var p=this.rules[d];if(typeof p=="string")h+=p;else if(p){var g=co(p,e,n,r),v=Array.isArray(g)?g.join(""):g;c=Vs(c,v+d),h+=v}}if(h){var S=Np(c>>>0);if(!n.hasNameForId(i,S)){var m=r(h,"."+S,void 0,i);n.insertRules(i,S,m)}s.push(S)}}return s.join(" ")},t}(),Ib=/^\s*\/\/.*$/gm,_b=[":","[",".","#"];function Eb(t){var e,n,r,i,s=t===void 0?Qr:t,o=s.options,a=o===void 0?Qr:o,u=s.plugins,l=u===void 0?Pc:u,c=new Vx(a),h=[],d=function(v){function S(m){if(m)try{v(m+"}")}catch{}}return function(m,f,y,_,T,x,N,$,te,G){switch(m){case 1:if(te===0&&f.charCodeAt(0)===64)return v(f+";"),"";break;case 2:if($===0)return f+"/*|*/";break;case 3:switch($){case 102:case 112:return v(y[0]+f),"";default:return f+(G===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(S)}}}(function(v){h.push(v)}),p=function(v,S,m){return S===0&&_b.indexOf(m[n.length])!==-1||m.match(i)?v:"."+e};function g(v,S,m,f){f===void 0&&(f="&");var y=v.replace(Ib,""),_=S&&m?m+" "+S+" { "+y+" }":y;return e=f,n=S,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(m||!S?"":S,_)}return c.use([].concat(l,[function(v,S,m){v===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,p))},d,function(v){if(v===-2){var S=h;return h=[],S}}])),g.hash=l.length?l.reduce(function(v,S){return S.name||$u(15),Vs(v,S.name)},5381).toString():"",g}var B_=uh.createContext();B_.Consumer;var z_=uh.createContext(),Sb=(z_.Consumer,new U_),Dp=Eb();function Tb(){return Pe.exports.useContext(B_)||Sb}function kb(){return Pe.exports.useContext(z_)||Dp}var Cb=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Dp);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return $u(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=Dp),this.name+e.hash},t}(),Ab=/([A-Z])/,xb=/([A-Z])/g,bb=/^ms-/,Nb=function(t){return"-"+t.toLowerCase()};function Tw(t){return Ab.test(t)?t.replace(xb,Nb).replace(bb,"-ms-"):t}var kw=function(t){return t==null||t===!1||t===""};function co(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=co(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(kw(t))return"";if(wg(t))return"."+t.styledComponentId;if(ru(t)){if(typeof(l=t)!="function"||l.prototype&&l.prototype.isReactComponent||!e)return t;var u=t(e);return co(u,e,n,r)}var l;return t instanceof Cb?n?(t.inject(n,r),t.getName(r)):t:bp(t)?function c(h,d){var p,g,v=[];for(var S in h)h.hasOwnProperty(S)&&!kw(h[S])&&(Array.isArray(h[S])&&h[S].isCss||ru(h[S])?v.push(Tw(S)+":",h[S],";"):bp(h[S])?v.push.apply(v,c(h[S],S)):v.push(Tw(S)+": "+(p=S,(g=h[S])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||p in Bx?String(g).trim():g+"px")+";"));return d?[d+" {"].concat(v,["}"]):v}(t):t.toString()}var Cw=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function Db(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return ru(t)||bp(t)?Cw(co(Iw(Pc,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:Cw(co(Iw(t,n)))}var Rb=function(t,e,n){return n===void 0&&(n=Qr),t.theme!==n.theme&&t.theme||e||n.theme},Pb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ob=/(^-|-$)/g;function cf(t){return t.replace(Pb,"-").replace(Ob,"")}var Lb=function(t){return Np(V_(t)>>>0)};function Al(t){return typeof t=="string"&&!0}var Rp=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},$b=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function Mb(t,e,n){var r=t[n];Rp(e)&&Rp(r)?j_(r,e):t[n]=e}function j_(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(Rp(o))for(var a in o)$b(a)&&Mb(t,o[a],a)}return t}var q_=uh.createContext();q_.Consumer;var hf={};function W_(t,e,n){var r=wg(t),i=!Al(t),s=e.attrs,o=s===void 0?Pc:s,a=e.componentId,u=a===void 0?function(f,y){var _=typeof f!="string"?"sc":cf(f);hf[_]=(hf[_]||0)+1;var T=_+"-"+Lb("5.3.6"+_+hf[_]);return y?y+"-"+T:T}(e.displayName,e.parentComponentId):a,l=e.displayName,c=l===void 0?function(f){return Al(f)?"styled."+f:"Styled("+_w(f)+")"}(t):l,h=e.displayName&&e.componentId?cf(e.displayName)+"-"+e.componentId:e.componentId||u,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,p=e.shouldForwardProp;r&&t.shouldForwardProp&&(p=e.shouldForwardProp?function(f,y,_){return t.shouldForwardProp(f,y,_)&&e.shouldForwardProp(f,y,_)}:t.shouldForwardProp);var g,v=new wb(n,h,r?t.componentStyle:void 0),S=v.isStatic&&o.length===0,m=function(f,y){return function(_,T,x,N){var $=_.attrs,te=_.componentStyle,G=_.defaultProps,Xe=_.foldedComponentIds,We=_.shouldForwardProp,ht=_.styledComponentId,tn=_.target,kt=function(Q,I,re){Q===void 0&&(Q=Qr);var P=or({},I,{theme:Q}),De={};return re.forEach(function(ce){var de,ee,dt,qt=ce;for(de in ru(qt)&&(qt=qt(P)),qt)P[de]=De[de]=de==="className"?(ee=De[de],dt=qt[de],ee&&dt?ee+" "+dt:ee||dt):qt[de]}),[P,De]}(Rb(T,Pe.exports.useContext(q_),G)||Qr,T,$),tr=kt[0],Ot=kt[1],R=function(Q,I,re,P){var De=Tb(),ce=kb(),de=I?Q.generateAndInjectStyles(Qr,De,ce):Q.generateAndInjectStyles(re,De,ce);return de}(te,N,tr),W=x,K=Ot.$as||T.$as||Ot.as||T.as||tn,ye=Al(K),O=Ot!==T?or({},T,{},Ot):T,M={};for(var F in O)F[0]!=="$"&&F!=="as"&&(F==="forwardedAs"?M.as=O[F]:(We?We(F,gw,K):!ye||gw(F))&&(M[F]=O[F]));return T.style&&Ot.style!==T.style&&(M.style=or({},T.style,{},Ot.style)),M.className=Array.prototype.concat(Xe,ht,R!==ht?R:null,T.className,Ot.className).filter(Boolean).join(" "),M.ref=W,Pe.exports.createElement(K,M)}(g,f,y,S)};return m.displayName=c,(g=uh.forwardRef(m)).attrs=d,g.componentStyle=v,g.displayName=c,g.shouldForwardProp=p,g.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Pc,g.styledComponentId=h,g.target=r?t.target:t,g.withComponent=function(f){var y=e.componentId,_=function(x,N){if(x==null)return{};var $,te,G={},Xe=Object.keys(x);for(te=0;te<Xe.length;te++)$=Xe[te],N.indexOf($)>=0||(G[$]=x[$]);return G}(e,["componentId"]),T=y&&y+"-"+(Al(f)?f:cf(_w(f)));return W_(f,or({},_,{attrs:d,componentId:T}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?j_({},t.defaultProps,f):f}}),g.toString=function(){return"."+g.styledComponentId},i&&nb(g,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var Pp=function(t){return function e(n,r,i){if(i===void 0&&(i=Qr),!hg.exports.isValidElementType(r))return $u(1,String(r));var s=function(){return n(r,i,Db.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,or({},i,{},o))},s.attrs=function(o){return e(n,r,or({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(W_,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){Pp[t]=Pp(t)});const Fe=Pp,Fb=Fe.div``,Ub=Fe.div`
    background-color: darkblue;
    height: 250px;
    text-align: center;
`,Vb=Fe.div`
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
`,Bb=Fe.div`
    margin: auto;
    max-width: 980px;
    margin-bottom: 50px;
`,Zl={food:{title:"Alimenta\xE7\xE3o",color:"blue",expense:!0},rent:{title:"Aluguel",color:"brown",expense:!0},salary:{title:"Sal\xE1rio",color:"green",expense:!1},entertainment:{title:"Divers\xE3o",color:"yellow",expense:!0},extra:{title:"Extra",color:"#0B6",expense:!1},debt:{title:"D\xEDvida",color:"#1C1",expense:!1},bribery:{title:"Suborno",color:"#F00",expense:!0},loan:{title:"D\xEDvida",color:"#D50",expense:!0}},zb=()=>{let t=new Date;return`${t.getFullYear()}-${t.getMonth()+1}`},jb=(t,e)=>{let n=[],[r,i]=e.split("-");for(let s in t)t[s].date.getFullYear()===parseInt(r)&&t[s].date.getMonth()+1===parseInt(i)&&n.push(t[s]);return n},G_=t=>{let e=t.getFullYear(),n=t.getMonth()+1,r=t.getDate();return`${Aw(r)}-${Aw(n)}-${e}`},Aw=t=>t<10?`0${t}`:`${t}`,qb=t=>{let[e,n]=t.split("-");return`${["Janeiro","Fevereiro","Mar\xE7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][parseInt(n)-1]} de ${e}`},Wb=t=>{let[e,n,r]=t.split("-");return`${r}-${n}-${e}`},Gb=t=>{let[e,n,r]=t.split("-");return new Date(parseInt(e),parseInt(n)-1,parseInt(r))},Hb=Fe.tr``,xl=Fe.td`
    padding: 10px 0;
`,Kb=Fe.div`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #FFF;
    background-color: ${t=>t.color};
`,Qb=Fe.div`
    color: ${t=>t.color};
`;var _g={exports:{}},qh={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yb=Pe.exports,Xb=Symbol.for("react.element"),Jb=Symbol.for("react.fragment"),Zb=Object.prototype.hasOwnProperty,eN=Yb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tN={key:!0,ref:!0,__self:!0,__source:!0};function H_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Zb.call(e,r)&&!tN.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Xb,type:t,key:s,ref:o,props:i,_owner:eN.current}}qh.Fragment=Jb;qh.jsx=H_;qh.jsxs=H_;(function(t){t.exports=qh})(_g);const H=_g.exports.jsx,tt=_g.exports.jsxs,nN=({item:t})=>tt(Hb,{children:[H(xl,{children:G_(t.date)}),H(xl,{children:H(Kb,{color:Zl[t.category].color,children:Zl[t.category].title})}),H(xl,{children:t.title}),H(xl,{children:tt(Qb,{color:Zl[t.category].expense?"red":"green",children:[t.value," kz"]})})]}),rN=Fe.table`
    width: 100%;
    background-color: #FFF;
    padding: 20px;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    margin-top: 20px;

    &:hover {
        box-shadow: 0px 0px 10px #ABC;
    }
`,bl=Fe.th`
    width: ${t=>t.width?`${t.width}px`:"auto"};
    padding: 10px 0;
    text-align: left;
`,iN=({list:t})=>tt(rN,{children:[H("thead",{children:tt("tr",{children:[H(bl,{width:100,children:"Data"}),H(bl,{width:130,children:"Categoria"}),H(bl,{children:"T\xEDtulo"}),H(bl,{width:150,children:"Valor"})]})}),H("tbody",{children:t.map((e,n)=>H(nN,{item:e},n))})]}),sN=Fe.div`
    flex: 1;
`,oN=Fe.div`
    text-align: center;
    font-weight: bold;
    color: #888;
    margin-bottom: 5px;
`,aN=Fe.div`
    text-align: center;
    font-weight: bold;
    color: ${t=>{var e;return(e=t.color)!=null?e:"#000"}};
`,df=({title:t,value:e,color:n})=>tt(sN,{children:[H(oN,{children:t}),tt(aN,{color:n,children:["$ ",e]})]}),uN=Fe.div`
    background-color: #FFF;
    border-radius: 10px;
    box-shadow: 0px 0px 5px #CCC;
    padding: 20px;
    margin-top: -40px;
    display: flex;
    align-items: center;
`,lN=Fe.div`
    flex: 1;
    display: flex;
    align-items: center;
`,xw=Fe.div`
    width: 40px;
    text-align: center;
    font-size: 25px;
    cursor: pointer;
`,cN=Fe.div`
    flex: 1;
    text-align: center;
`,hN=Fe.div`
    flex: 2;
    display: flex;
`,dN=({month:t,onMonthChange:e,income:n,expense:r})=>{const i=()=>{let[o,a]=t.split("-"),u=new Date(parseInt(o),parseInt(a)-1,1);u.setMonth(u.getMonth()-1),e(`${u.getFullYear()}-${u.getMonth()+1}`)},s=()=>{let[o,a]=t.split("-"),u=new Date(parseInt(o),parseInt(a)-1,1);u.setMonth(u.getMonth()+1),e(`${u.getFullYear()}-${u.getMonth()+1}`)};return tt(uN,{children:[tt(lN,{children:[H(xw,{onClick:i,children:"\u2B05\uFE0F"}),H(cN,{children:qb(t)}),H(xw,{onClick:s,children:"\u27A1\uFE0F"})]}),tt(hN,{children:[H(df,{title:"Receitas",value:n}),H(df,{title:"Despesas",value:r}),H(df,{title:"Lucros",value:n-r,color:n-r<0?"red":"green"})]})]})},fN=Fe.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 30px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`,pN=Fe.div`
    height: 100%;
    width: 100%;

    select {
        width: 155px;
        height: 45px;
        border-radius: 10px;
        border: 2px solid #AAF;
        padding-left: 15px;
    }
`,ff=Fe.div`
    height: 100%;
    width: 100%;

    input {
        width: 145px;
        height: 40px;
        border-radius: 10px;
        border: 2px solid #AAF;
        padding-left: 15px;
    }
`,mN=Fe.div`
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
`,gN=({onAdd:t})=>{const e=Math.pow(10,9),[n,r]=Pe.exports.useState(Object),[i,s]=Pe.exports.useState(""),[o,a]=Pe.exports.useState(""),[u,l]=Pe.exports.useState(0),[c,h]=Pe.exports.useState(!0);Pe.exports.useEffect(()=>{(()=>{h(n===Object()||i===""||o===""||u===0||isNaN(u))})()},[i,n,o,u]);const d=()=>{if(n===Object()||i===""||o===""||u===0)return;t({date:n,category:i,title:o,value:u}),r(Object),s(""),a(""),l(0)},p=v=>{r(Gb(v))},g=v=>{s(v)};return tt(fN,{children:[tt(ff,{children:[H("h3",{children:"Data"}),H("input",{type:"date",onChange:v=>p(v.target.value),min:"2021-12-01",max:Wb(G_(new Date)),required:!0})]}),tt(pN,{children:[H("h3",{children:"Categoria"}),tt("select",{name:"select",value:i,onChange:v=>g(v.target.value),required:!0,children:[H("option",{value:0,style:{display:"none",visibility:"hidden",paddingRight:"10px"},children:"Categoria"}),H("option",{value:"food",children:"Alimenta\xE7\xE3o"}),H("option",{value:"rent",children:"Renda"}),H("option",{value:"salary",children:"Sal\xE1rio"}),H("option",{value:"entertainment",children:"Entretenimento"}),H("option",{value:"extra",children:"Extra"}),H("option",{value:"debt",children:"D\xEDvida"}),H("option",{value:"bribery",children:"Suborno"}),H("option",{value:"loan",children:"Empr\xE9stimo"})]})]}),tt(ff,{children:[H("h3",{children:"T\xEDtulo"}),H("input",{type:"text",value:o,onChange:v=>a(v.target.value),required:!0})]}),tt(ff,{children:[H("h3",{children:"Valor"}),H("input",{type:"number",min:0,max:e,value:u,onChange:v=>l(parseInt(v.target.value)),required:!0})]}),H(mN,{disabled:c,children:H("button",{onClick:d,disabled:c,children:"Adicionar"})})]})};/**
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
 */const K_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},yN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Q_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;u||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(K_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const g=l<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},vN=function(t){const e=K_(t);return Q_.encodeByteArray(e,!0)},Lc=function(t){return vN(t).replace(/\./g,"")},Y_=function(t){try{return Q_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function $c(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!wN(n)||(t[n]=$c(t[n],e[n]));return t}function wN(t){return t!=="__proto__"}/**
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
 */function Ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function IN(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function Eg(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _N(){return typeof self=="object"&&self.self===self}function X_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Sg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function J_(){const t=Ne();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function EN(){return!Eg()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function iu(){return typeof indexedDB=="object"}function SN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function TN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kN=()=>TN().__FIREBASE_DEFAULTS__,CN=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},AN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Y_(t[1]);return e&&JSON.parse(e)},Z_=()=>{try{return kN()||CN()||AN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xN=()=>{var t;return(t=Z_())===null||t===void 0?void 0:t.config},bN=t=>{var e;return(e=Z_())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class NN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function DN(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Lc(JSON.stringify(n)),Lc(JSON.stringify(o)),a].join(".")}/**
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
 */const RN="FirebaseError";class Vt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=RN,Object.setPrototypeOf(this,Vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fs.prototype.create)}}class fs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?PN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Vt(i,a,r)}}function PN(t,e){return t.replace(ON,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ON=/\{\$([^}]+)}/g;/**
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
 */function bw(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function LN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Op(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Nw(s)&&Nw(o)){if(!Op(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Nw(t){return t!==null&&typeof t=="object"}/**
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
 */function bo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function pa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function eE(t,e){const n=new $N(t,e);return n.subscribe.bind(n)}class $N{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");MN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=pf),i.error===void 0&&(i.error=pf),i.complete===void 0&&(i.complete=pf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function MN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pf(){}/**
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
 */function z(t){return t&&t._delegate?t._delegate:t}class Xn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ci="[DEFAULT]";/**
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
 */class FN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new NN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VN(e))try{this.getOrInitializeService({instanceIdentifier:Ci})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ci){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ci){return this.instances.has(e)}getOptions(e=Ci){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:UN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ci){return this.component?this.component.multipleInstances?e:Ci:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function UN(t){return t===Ci?void 0:t}function VN(t){return t.instantiationMode==="EAGER"}/**
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
 */class BN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new FN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Tg=[];var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const tE={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},zN=oe.INFO,jN={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},qN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=jN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wh{constructor(e){this.name=e,this._logLevel=zN,this._logHandler=qN,this._userLogHandler=null,Tg.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}function WN(t){Tg.forEach(e=>{e.setLogLevel(t)})}function GN(t,e){for(const n of Tg){let r=null;e&&e.level&&(r=tE[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r!=null?r:i.logLevel)&&t({level:oe[s].toLowerCase(),message:a,args:o,type:i.name})}}}const HN=(t,e)=>e.some(n=>t instanceof n);let Dw,Rw;function KN(){return Dw||(Dw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QN(){return Rw||(Rw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nE=new WeakMap,Lp=new WeakMap,rE=new WeakMap,mf=new WeakMap,kg=new WeakMap;function YN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Yr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&nE.set(n,t)}).catch(()=>{}),kg.set(e,t),e}function XN(t){if(Lp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Lp.set(t,e)}let $p={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function JN(t){$p=t($p)}function ZN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(gf(this),e,...n);return rE.set(r,e.sort?e.sort():[e]),Yr(r)}:QN().includes(t)?function(...e){return t.apply(gf(this),e),Yr(nE.get(this))}:function(...e){return Yr(t.apply(gf(this),e))}}function eD(t){return typeof t=="function"?ZN(t):(t instanceof IDBTransaction&&XN(t),HN(t,KN())?new Proxy(t,$p):t)}function Yr(t){if(t instanceof IDBRequest)return YN(t);if(mf.has(t))return mf.get(t);const e=eD(t);return e!==t&&(mf.set(t,e),kg.set(e,t)),e}const gf=t=>kg.get(t);function tD(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Yr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Yr(o.result),u.oldVersion,u.newVersion,Yr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const nD=["get","getKey","getAll","getAllKeys","count"],rD=["put","add","delete","clear"],yf=new Map;function Pw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yf.get(e))return yf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=rD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||nD.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&u.done]))[0]};return yf.set(e,s),s}JN(t=>({...t,get:(e,n,r)=>Pw(e,n)||t.get(e,n,r),has:(e,n)=>!!Pw(e,n)||t.has(e,n)}));/**
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
 */class iD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sD(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sD(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mp="@firebase/app",Ow="0.8.4";/**
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
 */const Ji=new Wh("@firebase/app"),oD="@firebase/app-compat",aD="@firebase/analytics-compat",uD="@firebase/analytics",lD="@firebase/app-check-compat",cD="@firebase/app-check",hD="@firebase/auth",dD="@firebase/auth-compat",fD="@firebase/database",pD="@firebase/database-compat",mD="@firebase/functions",gD="@firebase/functions-compat",yD="@firebase/installations",vD="@firebase/installations-compat",wD="@firebase/messaging",ID="@firebase/messaging-compat",_D="@firebase/performance",ED="@firebase/performance-compat",SD="@firebase/remote-config",TD="@firebase/remote-config-compat",kD="@firebase/storage",CD="@firebase/storage-compat",AD="@firebase/firestore",xD="@firebase/firestore-compat",bD="firebase",ND="9.14.0";/**
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
 */const ei="[DEFAULT]",DD={[Mp]:"fire-core",[oD]:"fire-core-compat",[uD]:"fire-analytics",[aD]:"fire-analytics-compat",[cD]:"fire-app-check",[lD]:"fire-app-check-compat",[hD]:"fire-auth",[dD]:"fire-auth-compat",[fD]:"fire-rtdb",[pD]:"fire-rtdb-compat",[mD]:"fire-fn",[gD]:"fire-fn-compat",[yD]:"fire-iid",[vD]:"fire-iid-compat",[wD]:"fire-fcm",[ID]:"fire-fcm-compat",[_D]:"fire-perf",[ED]:"fire-perf-compat",[SD]:"fire-rc",[TD]:"fire-rc-compat",[kD]:"fire-gcs",[CD]:"fire-gcs-compat",[AD]:"fire-fst",[xD]:"fire-fst-compat","fire-js":"fire-js",[bD]:"fire-js-all"};/**
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
 */const ti=new Map,su=new Map;function Mc(t,e){try{t.container.addComponent(e)}catch(n){Ji.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function iE(t,e){t.container.addOrOverwriteComponent(e)}function ni(t){const e=t.name;if(su.has(e))return Ji.debug(`There were multiple attempts to register component ${e}.`),!1;su.set(e,t);for(const n of ti.values())Mc(n,t);return!0}function sE(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function RD(t,e,n=ei){sE(t,e).clearInstance(n)}function PD(){su.clear()}/**
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
 */const OD={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},hr=new fs("app","Firebase",OD);/**
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
 */class LD{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hr.create("app-deleted",{appName:this._name})}}/**
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
 */const ps=ND;function Cg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ei,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw hr.create("bad-app-name",{appName:String(i)});if(n||(n=xN()),!n)throw hr.create("no-options");const s=ti.get(i);if(s){if(Op(n,s.options)&&Op(r,s.config))return s;throw hr.create("duplicate-app",{appName:i})}const o=new BN(i);for(const u of su.values())o.addComponent(u);const a=new LD(n,r,o);return ti.set(i,a),a}function $D(t=ei){const e=ti.get(t);if(!e&&t===ei)return Cg();if(!e)throw hr.create("no-app",{appName:t});return e}function MD(){return Array.from(ti.values())}async function oE(t){const e=t.name;ti.has(e)&&(ti.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Kn(t,e,n){var r;let i=(r=DD[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ji.warn(a.join(" "));return}ni(new Xn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function aE(t,e){if(t!==null&&typeof t!="function")throw hr.create("invalid-log-argument");GN(t,e)}function uE(t){WN(t)}/**
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
 */const FD="firebase-heartbeat-database",UD=1,ou="firebase-heartbeat-store";let vf=null;function lE(){return vf||(vf=tD(FD,UD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ou)}}}).catch(t=>{throw hr.create("idb-open",{originalErrorMessage:t.message})})),vf}async function VD(t){var e;try{return(await lE()).transaction(ou).objectStore(ou).get(cE(t))}catch(n){if(n instanceof Vt)Ji.warn(n.message);else{const r=hr.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Ji.warn(r.message)}}}async function Lw(t,e){var n;try{const i=(await lE()).transaction(ou,"readwrite");return await i.objectStore(ou).put(e,cE(t)),i.done}catch(r){if(r instanceof Vt)Ji.warn(r.message);else{const i=hr.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Ji.warn(i.message)}}}function cE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const BD=1024,zD=30*24*60*60*1e3;class jD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new WD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=$w();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=zD}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=$w(),{heartbeatsToSend:n,unsentEntries:r}=qD(this._heartbeatsCache.heartbeats),i=Lc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function $w(){return new Date().toISOString().substring(0,10)}function qD(t,e=BD){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Mw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Mw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class WD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iu()?SN().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await VD(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Lw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Lw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Mw(t){return Lc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function GD(t){ni(new Xn("platform-logger",e=>new iD(e),"PRIVATE")),ni(new Xn("heartbeat",e=>new jD(e),"PRIVATE")),Kn(Mp,Ow,t),Kn(Mp,Ow,"esm2017"),Kn("fire-js","")}GD("");const HD=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:ps,_DEFAULT_ENTRY_NAME:ei,_addComponent:Mc,_addOrOverwriteComponent:iE,_apps:ti,_clearComponents:PD,_components:su,_getProvider:sE,_registerComponent:ni,_removeServiceInstance:RD,deleteApp:oE,getApp:$D,getApps:MD,initializeApp:Cg,onLog:aE,registerVersion:Kn,setLogLevel:uE,FirebaseError:Vt},Symbol.toStringTag,{value:"Module"}));/**
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
 */class KD{constructor(e,n){this._delegate=e,this.firebase=n,Mc(e,new Xn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),oE(this._delegate)))}_getService(e,n=ei){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=ei){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Mc(this._delegate,e)}_addOrOverwriteComponent(e){iE(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const QD={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Fw=new fs("app-compat","Firebase",QD);/**
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
 */function YD(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Kn,setLogLevel:uE,onLog:aE,apps:null,SDK_VERSION:ps,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:HD}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(l){delete e[l]}function i(l){if(l=l||ei,!bw(e,l))throw Fw.create("no-app",{appName:l});return e[l]}i.App=t;function s(l,c={}){const h=Cg(l,c);if(bw(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const c=l.name,h=c.replace("-compat","");if(ni(l)&&l.type==="PUBLIC"){const d=(p=i())=>{if(typeof p[h]!="function")throw Fw.create("invalid-app-argument",{appName:c});return p[h]()};l.serviceProps!==void 0&&$c(d,l.serviceProps),n[h]=d,t.prototype[h]=function(...p){return this._getService.bind(this,c).apply(this,l.multipleInstances?p:[])}}return l.type==="PUBLIC"?n[h]:null}function u(l,c){return c==="serverAuth"?null:c}return n}/**
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
 */function hE(){const t=YD(KD);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:hE,extendNamespace:e,createSubscribe:eE,ErrorFactory:fs,deepExtend:$c});function e(n){$c(t,n)}return t}const XD=hE();/**
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
 */const Uw=new Wh("@firebase/app-compat"),JD="@firebase/app-compat",ZD="0.1.39";/**
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
 */function eR(t){Kn(JD,ZD,t)}/**
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
 */if(_N()&&self.firebase!==void 0){Uw.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Uw.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const ri=XD;eR();var tR="firebase",nR="9.14.0";/**
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
 */ri.registerVersion(tR,nR,"app-compat");function Ag(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const ea={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Ss={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function rR(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function dE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iR=rR,sR=dE,fE=new fs("auth","Firebase",dE());/**
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
 */const Vw=new Wh("@firebase/auth");function ec(t,...e){Vw.logLevel<=oe.ERROR&&Vw.error(`Auth (${ps}): ${t}`,...e)}/**
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
 */function St(t,...e){throw xg(t,...e)}function It(t,...e){return xg(t,...e)}function pE(t,e,n){const r=Object.assign(Object.assign({},sR()),{[e]:n});return new fs("auth","Firebase",r).create(e,{appName:t.name})}function No(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&St(t,"argument-error"),pE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return fE.create(t,...e)}function b(t,e,...n){if(!t)throw xg(e,...n)}function jn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ec(e),new Error(e)}function On(t,e){t||jn(e)}/**
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
 */const Bw=new Map;function on(t){On(t instanceof Function,"Expected a class definition");let e=Bw.get(t);return e?(On(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bw.set(t,e),e)}function oR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(on);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function au(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function bg(){return zw()==="http:"||zw()==="https:"}function zw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function aR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bg()||X_()||"connection"in navigator)?navigator.onLine:!0}function uR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Mu{constructor(e,n){this.shortDelay=e,this.longDelay=n,On(n>e,"Short delay should be less than long delay!"),this.isMobile=IN()||Sg()}get(){return aR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ng(t,e){On(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class mE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;jn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;jn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;jn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const lR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const cR=new Mu(3e4,6e4);function Ye(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ut(t,e,n,r,i={}){return gE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=bo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),mE.fetch()(yE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function gE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},lR),e);try{const i=new hR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ma(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ma(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ma(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ma(t,"user-disabled",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw pE(t,c,l);St(t,c)}}catch(i){if(i instanceof Vt)throw i;St(t,"network-request-failed")}}async function _r(t,e,n,r,i={}){const s=await ut(t,e,n,r,i);return"mfaPendingCredential"in s&&St(t,"multi-factor-auth-required",{_serverResponse:s}),s}function yE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ng(t.config,i):`${t.config.apiScheme}://${i}`}class hR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(It(this.auth,"network-request-failed")),cR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ma(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=It(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function dR(t,e){return ut(t,"POST","/v1/accounts:delete",e)}async function fR(t,e){return ut(t,"POST","/v1/accounts:update",e)}async function pR(t,e){return ut(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Na(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mR(t,e=!1){const n=z(t),r=await n.getIdToken(e),i=Gh(r);b(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Na(wf(i.auth_time)),issuedAtTime:Na(wf(i.iat)),expirationTime:Na(wf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function wf(t){return Number(t)*1e3}function Gh(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return ec("JWT malformed, contained fewer than 3 sections"),null;try{const s=Y_(r);return s?JSON.parse(s):(ec("Failed to decode base64 JWT payload"),null)}catch(s){return ec("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function gR(t){const e=Gh(t);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function yr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vt&&yR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function yR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class vR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Na(this.lastLoginAt),this.creationTime=Na(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function uu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await yr(t,pR(n,{idToken:r}));b(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?_R(s.providerUserInfo):[],a=IR(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=u?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new vE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function wR(t){const e=z(t);await uu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function IR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function _R(t){return t.map(e=>{var{providerId:n}=e,r=Ag(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ER(t,e){const n=await gE(t,{},async()=>{const r=bo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=yE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",mE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class lu{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return b(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await ER(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new lu;return r&&(b(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(b(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(b(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new lu,this.toJSON())}_performRefresh(){return jn("not implemented")}}/**
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
 */function xr(t,e){b(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ji{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ag(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await yr(this,this.stsTokenManager.getToken(this.auth,e));return b(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mR(this,e)}reload(){return wR(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ji(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await uu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await yr(this,dR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,m=(l=n.createdAt)!==null&&l!==void 0?l:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:_,isAnonymous:T,providerData:x,stsTokenManager:N}=n;b(y&&N,e,"internal-error");const $=lu.fromJSON(this.name,N);b(typeof y=="string",e,"internal-error"),xr(h,e.name),xr(d,e.name),b(typeof _=="boolean",e,"internal-error"),b(typeof T=="boolean",e,"internal-error"),xr(p,e.name),xr(g,e.name),xr(v,e.name),xr(S,e.name),xr(m,e.name),xr(f,e.name);const te=new ji({uid:y,auth:e,email:d,emailVerified:_,displayName:h,isAnonymous:T,photoURL:g,phoneNumber:p,tenantId:v,stsTokenManager:$,createdAt:m,lastLoginAt:f});return x&&Array.isArray(x)&&(te.providerData=x.map(G=>Object.assign({},G))),S&&(te._redirectEventId=S),te}static async _fromIdTokenResponse(e,n,r=!1){const i=new lu;i.updateFromServerResponse(n);const s=new ji({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await uu(s),s}}/**
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
 */class wE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wE.type="NONE";const ho=wE;/**
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
 */function qi(t,e,n){return`firebase:${t}:${e}:${n}`}class Ys{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=qi(this.userKey,i.apiKey,s),this.fullPersistenceKey=qi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ji._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ys(on(ho),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||on(ho);const o=qi(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const c=await l._get(o);if(c){const h=ji._fromJSON(e,c);l!==s&&(a=h),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ys(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Ys(s,e,r))}}/**
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
 */function jw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(EE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(IE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(SE(e))return"Blackberry";if(TE(e))return"Webos";if(Dg(e))return"Safari";if((e.includes("chrome/")||_E(e))&&!e.includes("edge/"))return"Chrome";if(Fu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function IE(t=Ne()){return/firefox\//i.test(t)}function Dg(t=Ne()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _E(t=Ne()){return/crios\//i.test(t)}function EE(t=Ne()){return/iemobile/i.test(t)}function Fu(t=Ne()){return/android/i.test(t)}function SE(t=Ne()){return/blackberry/i.test(t)}function TE(t=Ne()){return/webos/i.test(t)}function Do(t=Ne()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function SR(t=Ne()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function TR(t=Ne()){var e;return Do(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kR(){return J_()&&document.documentMode===10}function kE(t=Ne()){return Do(t)||Fu(t)||TE(t)||SE(t)||/windows phone/i.test(t)||EE(t)}function CR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function CE(t,e=[]){let n;switch(t){case"Browser":n=jw(Ne());break;case"Worker":n=`${jw(Ne())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ps}/${r}`}/**
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
 */class AR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class xR{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qw(this),this.idTokenSubscription=new qw(this),this.beforeStateQueue=new AR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fE,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=on(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ys.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u==null?void 0:u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await uu(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?z(e):null;return n&&b(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(on(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&on(e)||this._popupRedirectResolver;b(n,this,"argument-error"),this.redirectPersistenceManager=await Ys.create(this,[on(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return b(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=CE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function st(t){return z(t)}class qw{constructor(e){this.auth=e,this.observer=null,this.addObserver=eE(n=>this.observer=n)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function bR(t,e,n){const r=st(t);b(r._canInitEmulator,r,"emulator-config-failed"),b(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=AE(e),{host:o,port:a}=NR(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||DR()}function AE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function NR(t){const e=AE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ww(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ww(o)}}}function Ww(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function DR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ro{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jn("not implemented")}_getIdTokenResponse(e){return jn("not implemented")}_linkToIdToken(e,n){return jn("not implemented")}_getReauthenticationResolver(e){return jn("not implemented")}}/**
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
 */async function xE(t,e){return ut(t,"POST","/v1/accounts:resetPassword",Ye(t,e))}async function bE(t,e){return ut(t,"POST","/v1/accounts:update",e)}async function RR(t,e){return ut(t,"POST","/v1/accounts:update",Ye(t,e))}/**
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
 */async function PR(t,e){return _r(t,"POST","/v1/accounts:signInWithPassword",Ye(t,e))}async function Hh(t,e){return ut(t,"POST","/v1/accounts:sendOobCode",Ye(t,e))}async function OR(t,e){return Hh(t,e)}async function LR(t,e){return Hh(t,e)}async function $R(t,e){return Hh(t,e)}async function MR(t,e){return Hh(t,e)}/**
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
 */async function FR(t,e){return _r(t,"POST","/v1/accounts:signInWithEmailLink",Ye(t,e))}async function UR(t,e){return _r(t,"POST","/v1/accounts:signInWithEmailLink",Ye(t,e))}/**
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
 */class cu extends Ro{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new cu(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new cu(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return PR(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return FR(e,{email:this._email,oobCode:this._password});default:St(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return bE(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return UR(e,{idToken:n,email:this._email,oobCode:this._password});default:St(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function dr(t,e){return _r(t,"POST","/v1/accounts:signInWithIdp",Ye(t,e))}/**
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
 */const VR="http://localhost";class Jn extends Ro{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Jn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):St("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ag(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Jn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return dr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,dr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,dr(e,n)}buildRequest(){const e={requestUri:VR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bo(n)}return e}}/**
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
 */async function BR(t,e){return ut(t,"POST","/v1/accounts:sendVerificationCode",Ye(t,e))}async function zR(t,e){return _r(t,"POST","/v1/accounts:signInWithPhoneNumber",Ye(t,e))}async function jR(t,e){const n=await _r(t,"POST","/v1/accounts:signInWithPhoneNumber",Ye(t,e));if(n.temporaryProof)throw ma(t,"account-exists-with-different-credential",n);return n}const qR={USER_NOT_FOUND:"user-not-found"};async function WR(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return _r(t,"POST","/v1/accounts:signInWithPhoneNumber",Ye(t,n),qR)}/**
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
 */class Wi extends Ro{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Wi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Wi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return zR(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return jR(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return WR(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Wi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function GR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function HR(t){const e=Bs(pa(t)).link,n=e?Bs(pa(e)).deep_link_id:null,r=Bs(pa(t)).deep_link_id;return(r?Bs(pa(r)).link:null)||r||n||e||t}class Kh{constructor(e){var n,r,i,s,o,a;const u=Bs(pa(e)),l=(n=u.apiKey)!==null&&n!==void 0?n:null,c=(r=u.oobCode)!==null&&r!==void 0?r:null,h=GR((i=u.mode)!==null&&i!==void 0?i:null);b(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=HR(e);try{return new Kh(n)}catch{return null}}}/**
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
 */class mi{constructor(){this.providerId=mi.PROVIDER_ID}static credential(e,n){return cu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Kh.parseLink(n);return b(r,"argument-error"),cu._fromEmailAndCode(e,r.code,r.tenantId)}}mi.PROVIDER_ID="password";mi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";mi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Er{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Po extends Er{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Xs extends Po{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return b("providerId"in n&&"signInMethod"in n,"argument-error"),Jn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return b(e.idToken||e.accessToken,"argument-error"),Jn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Xs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Xs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Xs(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class Fn extends Po{constructor(){super("facebook.com")}static credential(e){return Jn._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
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
 */class Un extends Po{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Jn._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.GOOGLE_SIGN_IN_METHOD="google.com";Un.PROVIDER_ID="google.com";/**
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
 */class Vn extends Po{constructor(){super("github.com")}static credential(e){return Jn._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.GITHUB_SIGN_IN_METHOD="github.com";Vn.PROVIDER_ID="github.com";/**
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
 */const KR="http://localhost";class fo extends Ro{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return dr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,dr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,dr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new fo(r,s)}static _create(e,n){return new fo(e,n)}buildRequest(){return{requestUri:KR,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const QR="saml.";class Fc extends Er{constructor(e){b(e.startsWith(QR),"argument-error"),super(e)}static credentialFromResult(e){return Fc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Fc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=fo.fromJSON(e);return b(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return fo._create(r,n)}catch{return null}}}/**
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
 */class Bn extends Po{constructor(){super("twitter.com")}static credential(e,n){return Jn._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.TWITTER_SIGN_IN_METHOD="twitter.com";Bn.PROVIDER_ID="twitter.com";/**
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
 */async function NE(t,e){return _r(t,"POST","/v1/accounts:signUp",Ye(t,e))}/**
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
 */class En{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ji._fromIdTokenResponse(e,r,i),o=Gw(r);return new En({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Gw(r);return new En({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Gw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function YR(t){var e;const n=st(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new En({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await NE(n,{returnSecureToken:!0}),i=await En._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Uc extends Vt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Uc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Uc(e,n,r,i)}}function DE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Uc._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function RE(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function XR(t,e){const n=z(t);await Qh(!0,n,e);const{providerUserInfo:r}=await fR(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=RE(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Rg(t,e,n=!1){const r=await yr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return En._forOperation(t,"link",r)}async function Qh(t,e,n){await uu(e);const r=RE(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";b(r.has(n)===t,e.auth,i)}/**
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
 */async function PE(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await yr(t,DE(i,s,e,t),n);b(o.idToken,i,"internal-error");const a=Gh(o.idToken);b(a,i,"internal-error");const{sub:u}=a;return b(t.uid===u,i,"user-mismatch"),En._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&St(i,"user-mismatch"),o}}/**
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
 */async function OE(t,e,n=!1){const r="signIn",i=await DE(t,r,e),s=await En._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Yh(t,e){return OE(st(t),e)}async function LE(t,e){const n=z(t);return await Qh(!1,n,e.providerId),Rg(n,e)}async function $E(t,e){return PE(z(t),e)}/**
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
 */async function JR(t,e){return _r(t,"POST","/v1/accounts:signInWithCustomToken",Ye(t,e))}/**
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
 */async function ZR(t,e){const n=st(t),r=await JR(n,{token:e,returnSecureToken:!0}),i=await En._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class Xh{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Pg._fromServerResponse(e,n):St(e,"internal-error")}}class Pg extends Xh{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Pg(n)}}/**
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
 */function Jh(t,e,n){var r;b(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),b(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(b(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(b(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function eP(t,e,n){const r=z(t),i={requestType:"PASSWORD_RESET",email:e};n&&Jh(r,i,n),await LR(r,i)}async function tP(t,e,n){await xE(z(t),{oobCode:e,newPassword:n})}async function nP(t,e){await RR(z(t),{oobCode:e})}async function ME(t,e){const n=z(t),r=await xE(n,{oobCode:e}),i=r.requestType;switch(b(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":b(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":b(r.mfaInfo,n,"internal-error");default:b(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Xh._fromServerResponse(st(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function rP(t,e){const{data:n}=await ME(z(t),e);return n.email}async function iP(t,e,n){const r=st(t),i=await NE(r,{returnSecureToken:!0,email:e,password:n}),s=await En._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function sP(t,e,n){return Yh(z(t),mi.credential(e,n))}/**
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
 */async function oP(t,e,n){const r=z(t),i={requestType:"EMAIL_SIGNIN",email:e};b(n.handleCodeInApp,r,"argument-error"),n&&Jh(r,i,n),await $R(r,i)}function aP(t,e){const n=Kh.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function uP(t,e,n){const r=z(t),i=mi.credentialWithLink(e,n||au());return b(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Yh(r,i)}/**
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
 */async function lP(t,e){return ut(t,"POST","/v1/accounts:createAuthUri",Ye(t,e))}/**
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
 */async function cP(t,e){const n=bg()?au():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await lP(z(t),r);return i||[]}async function hP(t,e){const n=z(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Jh(n.auth,i,e);const{email:s}=await OR(n.auth,i);s!==t.email&&await t.reload()}async function dP(t,e,n){const r=z(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Jh(r.auth,s,n);const{email:o}=await MR(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function fP(t,e){return ut(t,"POST","/v1/accounts:update",e)}/**
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
 */async function pP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=z(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await yr(r,fP(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function mP(t,e){return FE(z(t),e,null)}function gP(t,e){return FE(z(t),null,e)}async function FE(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await yr(t,bE(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function yP(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t==null?void 0:t.idToken)){const o=(n=(e=Gh(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Js(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new vP(s,i);case"github.com":return new wP(s,i);case"google.com":return new IP(s,i);case"twitter.com":return new _P(s,i,t.screenName||null);case"custom":case"anonymous":return new Js(s,null);default:return new Js(s,r,i)}}class Js{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class UE extends Js{constructor(e,n,r,i){super(e,n,r),this.username=i}}class vP extends Js{constructor(e,n){super(e,"facebook.com",n)}}class wP extends UE{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class IP extends Js{constructor(e,n){super(e,"google.com",n)}}class _P extends UE{constructor(e,n,r){super(e,"twitter.com",n,r)}}function EP(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:yP(n)}class $i{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new $i("enroll",e,n)}static _fromMfaPendingCredential(e){return new $i("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return $i._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return $i._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Og{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=st(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Xh._fromServerResponse(r,a));b(i.mfaPendingCredential,r,"internal-error");const o=$i._fromMfaPendingCredential(i.mfaPendingCredential);return new Og(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const l=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(n.operationType){case"signIn":const c=await En._fromIdTokenResponse(r,n.operationType,l);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return b(n.user,r,"internal-error"),En._forOperation(n.user,n.operationType,l);default:St(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function SP(t,e){var n;const r=z(t),i=e;return b(e.customData.operationType,r,"argument-error"),b((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Og._fromError(r,i)}/**
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
 */function TP(t,e){return ut(t,"POST","/v2/accounts/mfaEnrollment:start",Ye(t,e))}function kP(t,e){return ut(t,"POST","/v2/accounts/mfaEnrollment:finalize",Ye(t,e))}function CP(t,e){return ut(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Ye(t,e))}class Lg{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Xh._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Lg(e)}async getSession(){return $i._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await yr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){var n;const r=typeof e=="string"?e:e.uid,i=await this.user.getIdToken(),s=await yr(this.user,CP(this.user.auth,{idToken:i,mfaEnrollmentId:r}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==r),await this.user._updateTokensIfNecessary(s);try{await this.user.reload()}catch(o){if(((n=o)===null||n===void 0?void 0:n.code)!=="auth/user-token-expired")throw o}}}const If=new WeakMap;function AP(t){const e=z(t);return If.has(e)||If.set(e,Lg._fromUser(e)),If.get(e)}const Vc="__sak";/**
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
 */class VE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vc,"1"),this.storage.removeItem(Vc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function xP(){const t=Ne();return Dg(t)||Do(t)}const bP=1e3,NP=10;class BE extends VE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=xP()&&CR(),this.fallbackToPolling=kE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);kR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,NP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},bP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}BE.type="LOCAL";const $g=BE;/**
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
 */class zE extends VE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zE.type="SESSION";const Zi=zE;/**
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
 */function DP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Zh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Zh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),u=await DP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zh.receivers=[];/**
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
 */function Uu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class RP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=Uu("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function He(){return window}function PP(t){He().location.href=t}/**
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
 */function Mg(){return typeof He().WorkerGlobalScope<"u"&&typeof He().importScripts=="function"}async function OP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $P(){return Mg()?self:null}/**
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
 */const jE="firebaseLocalStorageDb",MP=1,Bc="firebaseLocalStorage",qE="fbase_key";class Vu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ed(t,e){return t.transaction([Bc],e?"readwrite":"readonly").objectStore(Bc)}function FP(){const t=indexedDB.deleteDatabase(jE);return new Vu(t).toPromise()}function Fp(){const t=indexedDB.open(jE,MP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Bc,{keyPath:qE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Bc)?e(r):(r.close(),await FP(),e(await Fp()))})})}async function Hw(t,e,n){const r=ed(t,!0).put({[qE]:e,value:n});return new Vu(r).toPromise()}async function UP(t,e){const n=ed(t,!1).get(e),r=await new Vu(n).toPromise();return r===void 0?null:r.value}function Kw(t,e){const n=ed(t,!0).delete(e);return new Vu(n).toPromise()}const VP=800,BP=3;class WE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>BP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zh._getInstance($P()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await OP(),!this.activeServiceWorker)return;this.sender=new RP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||LP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fp();return await Hw(e,Vc,"1"),await Kw(e,Vc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>UP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Kw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ed(i,!1).getAll();return new Vu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}WE.type="LOCAL";const hu=WE;/**
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
 */function zP(t,e){return ut(t,"POST","/v2/accounts/mfaSignIn:start",Ye(t,e))}function jP(t,e){return ut(t,"POST","/v2/accounts/mfaSignIn:finalize",Ye(t,e))}/**
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
 */async function qP(t){return(await ut(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */function WP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function GE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=It("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",WP().appendChild(r)})}function HE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const GP=500,HP=6e4,Nl=1e12;class KP{constructor(e){this.auth=e,this.counter=Nl,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new QP(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Nl;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Nl;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Nl;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class QP{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;b(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=YP(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},HP)},GP))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function YP(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const _f=HE("rcb"),XP=new Mu(3e4,6e4),JP="https://www.google.com/recaptcha/api.js?";class ZP{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=He().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return b(eO(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(He().grecaptcha):new Promise((r,i)=>{const s=He().setTimeout(()=>{i(It(e,"network-request-failed"))},XP.get());He()[_f]=()=>{He().clearTimeout(s),delete He()[_f];const a=He().grecaptcha;if(!a){i(It(e,"internal-error"));return}const u=a.render;a.render=(l,c)=>{const h=u(l,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${JP}?${bo({onload:_f,render:"explicit",hl:n})}`;GE(o).catch(()=>{clearTimeout(s),i(It(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=He().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function eO(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class tO{async load(e){return new KP(e)}clearedOneInstance(){}}/**
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
 */const KE="recaptcha",nO={theme:"light",type:"image"};class rO{constructor(e,n=Object.assign({},nO),r){this.parameters=n,this.type=KE,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=st(r),this.isInvisible=this.parameters.size==="invisible",b(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;b(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new tO:new ZP,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){b(!this.parameters.sitekey,this.auth,"argument-error"),b(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),b(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=He()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){b(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){b(bg()&&!Mg(),this.auth,"internal-error"),await iO(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await qP(this.auth);b(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return b(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function iO(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Fg{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Wi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function sO(t,e,n){const r=st(t),i=await td(r,e,z(n));return new Fg(i,s=>Yh(r,s))}async function oO(t,e,n){const r=z(t);await Qh(!1,r,"phone");const i=await td(r.auth,e,z(n));return new Fg(i,s=>LE(r,s))}async function aO(t,e,n){const r=z(t),i=await td(r.auth,e,z(n));return new Fg(i,s=>$E(r,s))}async function td(t,e,n){var r;const i=await n.verify();try{b(typeof i=="string",t,"argument-error"),b(n.type===KE,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return b(o.type==="enroll",t,"internal-error"),(await TP(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{b(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return b(a,t,"missing-multi-factor-info"),(await zP(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await BR(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function uO(t,e){await Rg(z(t),e)}/**
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
 */class Rn{constructor(e){this.providerId=Rn.PROVIDER_ID,this.auth=st(e)}verifyPhoneNumber(e,n){return td(this.auth,e,z(n))}static credential(e,n){return Wi._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Rn.credentialFromTaggedObject(n)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Wi._fromTokenResponse(n,r):null}}Rn.PROVIDER_ID="phone";Rn.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function ms(t,e){return e?on(e):(b(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ug extends Ro{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return dr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return dr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return dr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lO(t){return OE(t.auth,new Ug(t),t.bypassAuthState)}function cO(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),PE(n,new Ug(t),t.bypassAuthState)}async function hO(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),Rg(n,new Ug(t),t.bypassAuthState)}/**
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
 */class QE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lO;case"linkViaPopup":case"linkViaRedirect":return hO;case"reauthViaPopup":case"reauthViaRedirect":return cO;default:St(this.auth,"internal-error")}}resolve(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const dO=new Mu(2e3,1e4);async function fO(t,e,n){const r=st(t);No(t,e,Er);const i=ms(r,n);return new ar(r,"signInViaPopup",e,i).executeNotNull()}async function pO(t,e,n){const r=z(t);No(r.auth,e,Er);const i=ms(r.auth,n);return new ar(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function mO(t,e,n){const r=z(t);No(r.auth,e,Er);const i=ms(r.auth,n);return new ar(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class ar extends QE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ar.currentPopupAction&&ar.currentPopupAction.cancel(),ar.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const e=Uu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(It(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ar.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,dO.get())};e()}}ar.currentPopupAction=null;/**
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
 */const gO="pendingRedirect",Da=new Map;class yO extends QE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Da.get(this.auth._key());if(!e){try{const r=await vO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Da.set(this.auth._key(),e)}return this.bypassAuthState||Da.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vO(t,e){const n=XE(e),r=YE(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Vg(t,e){return YE(t)._set(XE(e),"true")}function wO(){Da.clear()}function Bg(t,e){Da.set(t._key(),e)}function YE(t){return on(t._redirectPersistence)}function XE(t){return qi(gO,t.config.apiKey,t.name)}/**
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
 */function IO(t,e,n){return _O(t,e,n)}async function _O(t,e,n){const r=st(t);No(t,e,Er);const i=ms(r,n);return await Vg(i,r),i._openRedirect(r,e,"signInViaRedirect")}function EO(t,e,n){return SO(t,e,n)}async function SO(t,e,n){const r=z(t);No(r.auth,e,Er);const i=ms(r.auth,n);await Vg(i,r.auth);const s=await JE(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function TO(t,e,n){return kO(t,e,n)}async function kO(t,e,n){const r=z(t);No(r.auth,e,Er);const i=ms(r.auth,n);await Qh(!1,r,e.providerId),await Vg(i,r.auth);const s=await JE(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function CO(t,e){return await st(t)._initializationPromise,nd(t,e,!1)}async function nd(t,e,n=!1){const r=st(t),i=ms(r,e),o=await new yO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function JE(t){const e=Uu(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const AO=10*60*1e3;class ZE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!eS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(It(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AO&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qw(e))}saveEventToCache(e){this.cachedEventUids.add(Qw(e)),this.lastProcessedEventTime=Date.now()}}function Qw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function eS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return eS(t);default:return!1}}/**
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
 */async function tS(t,e={}){return ut(t,"GET","/v1/projects",e)}/**
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
 */const bO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NO=/^https?/;async function DO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tS(t);for(const n of e)try{if(RO(n))return}catch{}St(t,"unauthorized-domain")}function RO(t){const e=au(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!NO.test(n))return!1;if(bO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const PO=new Mu(3e4,6e4);function Yw(){const t=He().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function OO(t){return new Promise((e,n)=>{var r,i,s;function o(){Yw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yw(),n(It(t,"network-request-failed"))},timeout:PO.get()})}if(!((i=(r=He().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=He().gapi)===null||s===void 0)&&s.load)o();else{const a=HE("iframefcb");return He()[a]=()=>{gapi.load?o():n(It(t,"network-request-failed"))},GE(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw tc=null,e})}let tc=null;function LO(t){return tc=tc||OO(t),tc}/**
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
 */const $O=new Mu(5e3,15e3),MO="__/auth/iframe",FO="emulator/auth/iframe",UO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BO(t){const e=t.config;b(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ng(e,FO):`https://${t.config.authDomain}/${MO}`,r={apiKey:e.apiKey,appName:t.name,v:ps},i=VO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${bo(r).slice(1)}`}async function zO(t){const e=await LO(t),n=He().gapi;return b(n,t,"internal-error"),e.open({where:document.body,url:BO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=It(t,"network-request-failed"),a=He().setTimeout(()=>{s(o)},$O.get());function u(){He().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const jO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qO=500,WO=600,GO="_blank",HO="http://localhost";class Xw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KO(t,e,n,r=qO,i=WO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},jO),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Ne().toLowerCase();n&&(a=_E(l)?GO:n),IE(l)&&(e=e||HO,u.scrollbars="yes");const c=Object.entries(u).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(TR(l)&&a!=="_self")return QO(e||"",a),new Xw(null);const h=window.open(e||"",a,c);b(h,t,"popup-blocked");try{h.focus()}catch{}return new Xw(h)}function QO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const YO="__/auth/handler",XO="emulator/auth/handler";function Up(t,e,n,r,i,s){b(t.config.authDomain,t,"auth-domain-config-required"),b(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ps,eventId:i};if(e instanceof Er){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",LN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,l]of Object.entries(s||{}))o[u]=l}if(e instanceof Po){const u=e.getScopes().filter(l=>l!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];return`${JO(t)}?${bo(a).slice(1)}`}function JO({config:t}){return t.emulator?Ng(t,XO):`https://${t.authDomain}/${YO}`}/**
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
 */const Ef="webStorageSupport";class ZO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zi,this._completeRedirectFn=nd,this._overrideRedirectResult=Bg}async _openPopup(e,n,r,i){var s;On((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Up(e,n,r,au(),i);return KO(e,o,Uu())}async _openRedirect(e,n,r,i){return await this._originValidation(e),PP(Up(e,n,r,au(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(On(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await zO(e),r=new ZE(e);return n.register("authEvent",i=>(b(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ef,{type:Ef},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ef];o!==void 0&&n(!!o),St(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return kE()||Dg()||Do()}}const eL=ZO;class tL{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return jn("unexpected MultiFactorSessionType")}}}class zg extends tL{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new zg(e)}_finalizeEnroll(e,n,r){return kP(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return jP(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class nS{constructor(){}static assertion(e){return zg._fromCredential(e)}}nS.FACTOR_ID="phone";var Jw="@firebase/auth",Zw="0.20.11";/**
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
 */class nL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function rL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function iL(t){ni(new Xn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,u)=>{b(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),b(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:CE(t)},c=new xR(a,u,l);return oR(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ni(new Xn("auth-internal",e=>{const n=st(e.getProvider("auth").getImmediate());return(r=>new nL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kn(Jw,Zw,rL(t)),Kn(Jw,Zw,"esm2017")}/**
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
 */const sL=5*60;bN("authIdTokenMaxAge");iL("Browser");/**
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
 */function es(){return window}/**
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
 */const oL=2e3;async function aL(t,e,n){var r;const{BuildInfo:i}=es();On(e.sessionId,"AuthEvent did not contain a session ID");const s=await dL(e.sessionId),o={};return Do()?o.ibi=i.packageName:Fu()?o.apn=i.packageName:St(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Up(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function uL(t){const{BuildInfo:e}=es(),n={};Do()?n.iosBundleId=e.packageName:Fu()?n.androidPackageName=e.packageName:St(t,"operation-not-supported-in-this-environment"),await tS(t,n)}function lL(t){const{cordova:e}=es();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,SR()?"_blank":"_system","location=yes"),n(i)})})}async function cL(t,e,n){const{cordova:r}=es();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function l(){a||(a=window.setTimeout(()=>{o(It(t,"redirect-cancelled-by-user"))},oL))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(u),document.addEventListener("resume",l,!1),Fu()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function hL(t){var e,n,r,i,s,o,a,u,l,c;const h=es();b(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),b(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),b(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),b(typeof((u=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),b(typeof((c=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function dL(t){const e=fL(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function fL(t){if(On(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const pL=20;class mL extends ZE{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function gL(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:wL(),postBody:null,tenantId:t.tenantId,error:It(t,"no-auth-event")}}function yL(t,e){return Vp()._set(Bp(t),e)}async function e0(t){const e=await Vp()._get(Bp(t));return e&&await Vp()._remove(Bp(t)),e}function vL(t,e){var n,r;const i=_L(e);if(i.includes("/__/auth/callback")){const s=nc(i),o=s.firebaseError?IL(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],u=a?It(a):null;return u?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function wL(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<pL;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Vp(){return on($g)}function Bp(t){return qi("authEvent",t.config.apiKey,t.name)}function IL(t){try{return JSON.parse(t)}catch{return null}}function _L(t){const e=nc(t),n=e.link?decodeURIComponent(e.link):void 0,r=nc(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return nc(i).link||i||r||n||t}function nc(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Bs(n.join("?"))}/**
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
 */const EL=500;class SL{constructor(){this._redirectPersistence=Zi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=nd,this._overrideRedirectResult=Bg}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new mL(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){St(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){hL(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),wO(),await this._originValidation(e);const o=gL(e,r,i);await yL(e,o);const a=await aL(e,o,n),u=await lL(a);return cL(e,s,u)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uL(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=es(),o=setTimeout(async()=>{await e0(e),n.onEvent(t0())},EL),a=async c=>{clearTimeout(o);const h=await e0(e);let d=null;h&&(c==null?void 0:c.url)&&(d=vL(h,c.url)),n.onEvent(d||t0())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,l=`${s.packageName.toLowerCase()}://`;es().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(l)&&a({url:c}),typeof u=="function")try{u(c)}catch(h){console.error(h)}}}}const TL=SL;function t0(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:It("no-auth-event")}}/**
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
 */function kL(t,e){st(t)._logFramework(e)}var CL="@firebase/auth-compat",AL="0.2.24";/**
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
 */const xL=1e3;function Ra(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function bL(){return Ra()==="http:"||Ra()==="https:"}function rS(t=Ne()){return!!((Ra()==="file:"||Ra()==="ionic:"||Ra()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function NL(){return Sg()||Eg()}function DL(){return J_()&&(document==null?void 0:document.documentMode)===11}function RL(t=Ne()){return/Edge\/\d+/.test(t)}function PL(t=Ne()){return DL()||RL(t)}function iS(){try{const t=self.localStorage,e=Uu();if(t)return t.setItem(e,"1"),t.removeItem(e),PL()?iu():!0}catch{return jg()&&iu()}return!1}function jg(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Sf(){return(bL()||X_()||rS())&&!NL()&&iS()&&!jg()}function sS(){return rS()&&typeof document<"u"}async function OL(){return sS()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},xL);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function LL(){return typeof window<"u"?window:null}/**
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
 */const rn={LOCAL:"local",NONE:"none",SESSION:"session"},ta=b,oS="persistence";function $L(t,e){if(ta(Object.values(rn).includes(e),t,"invalid-persistence-type"),Sg()){ta(e!==rn.SESSION,t,"unsupported-persistence-type");return}if(Eg()){ta(e===rn.NONE,t,"unsupported-persistence-type");return}if(jg()){ta(e===rn.NONE||e===rn.LOCAL&&iu(),t,"unsupported-persistence-type");return}ta(e===rn.NONE||iS(),t,"unsupported-persistence-type")}async function zp(t){await t._initializationPromise;const e=aS(),n=qi(oS,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function ML(t,e){const n=aS();if(!n)return[];const r=qi(oS,t,e);switch(n.getItem(r)){case rn.NONE:return[ho];case rn.LOCAL:return[hu,Zi];case rn.SESSION:return[Zi];default:return[]}}function aS(){var t;try{return((t=LL())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const FL=b;class Ur{constructor(){this.browserResolver=on(eL),this.cordovaResolver=on(TL),this.underlyingResolver=null,this._redirectPersistence=Zi,this._completeRedirectFn=nd,this._overrideRedirectResult=Bg}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return sS()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return FL(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await OL();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function uS(t){return t.unwrap()}function UL(t){return t.wrapped()}/**
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
 */function VL(t){return lS(t)}function BL(t,e){var n,r;const i=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if(((r=e)===null||r===void 0?void 0:r.code)==="auth/multi-factor-auth-required"){const s=e;s.resolver=new zL(t,SP(t,e))}else if(i){const s=lS(e),o=e;s&&(o.credential=s,o.tenantId=i.tenantId||void 0,o.email=i.email||void 0,o.phoneNumber=i.phoneNumber||void 0)}}function lS(t){const{_tokenResponse:e}=t instanceof Vt?t.customData:t;if(!e)return null;if(!(t instanceof Vt)&&"temporaryProof"in e&&"phoneNumber"in e)return Rn.credentialFromResult(t);const n=e.providerId;if(!n||n===ea.PASSWORD)return null;let r;switch(n){case ea.GOOGLE:r=Un;break;case ea.FACEBOOK:r=Fn;break;case ea.GITHUB:r=Vn;break;case ea.TWITTER:r=Bn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?fo._create(n,a):Jn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Xs(n).credential({idToken:i,accessToken:s,rawNonce:u})}return t instanceof Vt?r.credentialFromError(t):r.credentialFromResult(t)}function Wt(t,e){return e.catch(n=>{throw n instanceof Vt&&BL(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:VL(n),additionalUserInfo:EP(n),user:ur.getOrCreate(i)}})}async function jp(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Wt(t,n.confirm(r))}}class zL{constructor(e,n){this.resolver=n,this.auth=UL(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Wt(uS(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class ur{constructor(e){this._delegate=e,this.multiFactor=AP(e)}static getOrCreate(e){return ur.USER_MAP.has(e)||ur.USER_MAP.set(e,new ur(e)),ur.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Wt(this.auth,LE(this._delegate,e))}async linkWithPhoneNumber(e,n){return jp(this.auth,oO(this._delegate,e,n))}async linkWithPopup(e){return Wt(this.auth,mO(this._delegate,e,Ur))}async linkWithRedirect(e){return await zp(st(this.auth)),TO(this._delegate,e,Ur)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Wt(this.auth,$E(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return jp(this.auth,aO(this._delegate,e,n))}reauthenticateWithPopup(e){return Wt(this.auth,pO(this._delegate,e,Ur))}async reauthenticateWithRedirect(e){return await zp(st(this.auth)),EO(this._delegate,e,Ur)}sendEmailVerification(e){return hP(this._delegate,e)}async unlink(e){return await XR(this._delegate,e),this}updateEmail(e){return mP(this._delegate,e)}updatePassword(e){return gP(this._delegate,e)}updatePhoneNumber(e){return uO(this._delegate,e)}updateProfile(e){return pP(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return dP(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}ur.USER_MAP=new WeakMap;/**
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
 */const na=b;class qp{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;na(r,"invalid-api-key",{appName:e.name}),na(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Ur:void 0;this._delegate=n.initialize({options:{persistence:jL(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(iR),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?ur.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){bR(this._delegate,e,n)}applyActionCode(e){return nP(this._delegate,e)}checkActionCode(e){return ME(this._delegate,e)}confirmPasswordReset(e,n){return tP(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Wt(this._delegate,iP(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return cP(this._delegate,e)}isSignInWithEmailLink(e){return aP(this._delegate,e)}async getRedirectResult(){na(Sf(),this._delegate,"operation-not-supported-in-this-environment");const e=await CO(this._delegate,Ur);return e?Wt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){kL(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=n0(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=n0(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return oP(this._delegate,e,n)}sendPasswordResetEmail(e,n){return eP(this._delegate,e,n||void 0)}async setPersistence(e){$L(this._delegate,e);let n;switch(e){case rn.SESSION:n=Zi;break;case rn.LOCAL:n=await on(hu)._isAvailable()?hu:$g;break;case rn.NONE:n=ho;break;default:return St("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Wt(this._delegate,YR(this._delegate))}signInWithCredential(e){return Wt(this._delegate,Yh(this._delegate,e))}signInWithCustomToken(e){return Wt(this._delegate,ZR(this._delegate,e))}signInWithEmailAndPassword(e,n){return Wt(this._delegate,sP(this._delegate,e,n))}signInWithEmailLink(e,n){return Wt(this._delegate,uP(this._delegate,e,n))}signInWithPhoneNumber(e,n){return jp(this._delegate,sO(this._delegate,e,n))}async signInWithPopup(e){return na(Sf(),this._delegate,"operation-not-supported-in-this-environment"),Wt(this._delegate,fO(this._delegate,e,Ur))}async signInWithRedirect(e){return na(Sf(),this._delegate,"operation-not-supported-in-this-environment"),await zp(this._delegate),IO(this._delegate,e,Ur)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return rP(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}qp.Persistence=rn;function n0(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&ur.getOrCreate(o)),error:e,complete:n}}function jL(t,e){const n=ML(t,e);if(typeof self<"u"&&!n.includes(hu)&&n.push(hu),typeof window<"u")for(const r of[$g,Zi])n.includes(r)||n.push(r);return n.includes(ho)||n.push(ho),n}/**
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
 */class qg{constructor(){this.providerId="phone",this._delegate=new Rn(uS(ri.auth()))}static credential(e,n){return Rn.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}qg.PHONE_SIGN_IN_METHOD=Rn.PHONE_SIGN_IN_METHOD;qg.PROVIDER_ID=Rn.PROVIDER_ID;/**
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
 */const qL=b;class WL{constructor(e,n,r=ri.app()){var i;qL((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new rO(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const GL="auth-compat";function HL(t){t.INTERNAL.registerComponent(new Xn(GL,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new qp(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ss.EMAIL_SIGNIN,PASSWORD_RESET:Ss.PASSWORD_RESET,RECOVER_EMAIL:Ss.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ss.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ss.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ss.VERIFY_EMAIL}},EmailAuthProvider:mi,FacebookAuthProvider:Fn,GithubAuthProvider:Vn,GoogleAuthProvider:Un,OAuthProvider:Xs,SAMLAuthProvider:Fc,PhoneAuthProvider:qg,PhoneMultiFactorGenerator:nS,RecaptchaVerifier:WL,TwitterAuthProvider:Bn,Auth:qp,AuthCredential:Ro,Error:Vt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(CL,AL)}HL(ri);var KL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},B,Wg=Wg||{},Y=KL||self;function zc(){}function rd(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Bu(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function QL(t){return Object.prototype.hasOwnProperty.call(t,Tf)&&t[Tf]||(t[Tf]=++YL)}var Tf="closure_uid_"+(1e9*Math.random()>>>0),YL=0;function XL(t,e,n){return t.call.apply(t.bind,arguments)}function JL(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Nt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Nt=XL:Nt=JL,Nt.apply(null,arguments)}function Dl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Tt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function gi(){this.s=this.s,this.o=this.o}var ZL=0;gi.prototype.s=!1;gi.prototype.na=function(){!this.s&&(this.s=!0,this.M(),ZL!=0)&&QL(this)};gi.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const cS=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Gg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function r0(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(rd(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Dt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Dt.prototype.h=function(){this.defaultPrevented=!0};var e$=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Y.addEventListener("test",zc,e),Y.removeEventListener("test",zc,e)}catch{}return t}();function jc(t){return/^[\s\xa0]*$/.test(t)}var i0=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function kf(t,e){return t<e?-1:t>e?1:0}function id(){var t=Y.navigator;return t&&(t=t.userAgent)?t:""}function zn(t){return id().indexOf(t)!=-1}function Hg(t){return Hg[" "](t),t}Hg[" "]=zc;function t$(t){var e=i$;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var n$=zn("Opera"),po=zn("Trident")||zn("MSIE"),hS=zn("Edge"),Wp=hS||po,dS=zn("Gecko")&&!(id().toLowerCase().indexOf("webkit")!=-1&&!zn("Edge"))&&!(zn("Trident")||zn("MSIE"))&&!zn("Edge"),r$=id().toLowerCase().indexOf("webkit")!=-1&&!zn("Edge");function fS(){var t=Y.document;return t?t.documentMode:void 0}var qc;e:{var Cf="",Af=function(){var t=id();if(dS)return/rv:([^\);]+)(\)|;)/.exec(t);if(hS)return/Edge\/([\d\.]+)/.exec(t);if(po)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(r$)return/WebKit\/(\S+)/.exec(t);if(n$)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Af&&(Cf=Af?Af[1]:""),po){var xf=fS();if(xf!=null&&xf>parseFloat(Cf)){qc=String(xf);break e}}qc=Cf}var i$={};function s$(){return t$(function(){let t=0;const e=i0(String(qc)).split("."),n=i0("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=kf(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||kf(i[2].length==0,s[2].length==0)||kf(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Gp;if(Y.document&&po){var s0=fS();Gp=s0||parseInt(qc,10)||void 0}else Gp=void 0;var o$=Gp;function du(t,e){if(Dt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(dS){e:{try{Hg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:a$[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&du.X.h.call(this)}}Tt(du,Dt);var a$={2:"touch",3:"pen",4:"mouse"};du.prototype.h=function(){du.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var zu="closure_listenable_"+(1e6*Math.random()|0),u$=0;function l$(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++u$,this.ba=this.ea=!1}function sd(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Kg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function pS(t){const e={};for(const n in t)e[n]=t[n];return e}const o0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mS(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<o0.length;s++)n=o0[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function od(t){this.src=t,this.g={},this.h=0}od.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Kp(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new l$(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function Hp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=cS(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(sd(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Kp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var Qg="closure_lm_"+(1e6*Math.random()|0),bf={};function gS(t,e,n,r,i){if(r&&r.once)return vS(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)gS(t,e[s],n,r,i);return null}return n=Jg(n),t&&t[zu]?t.N(e,n,Bu(r)?!!r.capture:!!r,i):yS(t,e,n,!1,r,i)}function yS(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Bu(i)?!!i.capture:!!i,a=Xg(t);if(a||(t[Qg]=a=new od(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=c$(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)e$||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(IS(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function c$(){function t(n){return e.call(t.src,t.listener,n)}const e=h$;return t}function vS(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)vS(t,e[s],n,r,i);return null}return n=Jg(n),t&&t[zu]?t.O(e,n,Bu(r)?!!r.capture:!!r,i):yS(t,e,n,!0,r,i)}function wS(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)wS(t,e[s],n,r,i);else r=Bu(r)?!!r.capture:!!r,n=Jg(n),t&&t[zu]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Kp(s,n,r,i),-1<n&&(sd(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Xg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Kp(e,n,r,i)),(n=-1<t?e[t]:null)&&Yg(n))}function Yg(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[zu])Hp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(IS(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Xg(e))?(Hp(n,t),n.h==0&&(n.src=null,e[Qg]=null)):sd(t)}}}function IS(t){return t in bf?bf[t]:bf[t]="on"+t}function h$(t,e){if(t.ba)t=!0;else{e=new du(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Yg(t),t=n.call(r,e)}return t}function Xg(t){return t=t[Qg],t instanceof od?t:null}var Nf="__closure_events_fn_"+(1e9*Math.random()>>>0);function Jg(t){return typeof t=="function"?t:(t[Nf]||(t[Nf]=function(e){return t.handleEvent(e)}),t[Nf])}function ot(){gi.call(this),this.i=new od(this),this.P=this,this.I=null}Tt(ot,gi);ot.prototype[zu]=!0;ot.prototype.removeEventListener=function(t,e,n,r){wS(this,t,e,n,r)};function _t(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Dt(e,t);else if(e instanceof Dt)e.target=e.target||t;else{var i=e;e=new Dt(r,t),mS(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Rl(o,r,!0,e)&&i}if(o=e.g=t,i=Rl(o,r,!0,e)&&i,i=Rl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Rl(o,r,!1,e)&&i}ot.prototype.M=function(){if(ot.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)sd(n[r]);delete t.g[e],t.h--}}this.I=null};ot.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ot.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Rl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&Hp(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var Zg=Y.JSON.stringify;function d$(){var t=SS;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class f${constructor(){this.h=this.g=null}add(e,n){const r=_S.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var _S=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new p$,t=>t.reset());class p${constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function m$(t){Y.setTimeout(()=>{throw t},0)}function ES(t,e){Qp||g$(),Yp||(Qp(),Yp=!0),SS.add(t,e)}var Qp;function g$(){var t=Y.Promise.resolve(void 0);Qp=function(){t.then(y$)}}var Yp=!1,SS=new f$;function y$(){for(var t;t=d$();){try{t.h.call(t.g)}catch(n){m$(n)}var e=_S;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Yp=!1}function ad(t,e){ot.call(this),this.h=t||1,this.g=e||Y,this.j=Nt(this.lb,this),this.l=Date.now()}Tt(ad,ot);B=ad.prototype;B.ca=!1;B.R=null;B.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),_t(this,"tick"),this.ca&&(ey(this),this.start()))}};B.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ey(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}B.M=function(){ad.X.M.call(this),ey(this),delete this.g};function ty(t,e,n){if(typeof t=="function")n&&(t=Nt(t,n));else if(t&&typeof t.handleEvent=="function")t=Nt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Y.setTimeout(t,e||0)}function TS(t){t.g=ty(()=>{t.g=null,t.i&&(t.i=!1,TS(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class v$ extends gi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:TS(this)}M(){super.M(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fu(t){gi.call(this),this.h=t,this.g={}}Tt(fu,gi);var a0=[];function kS(t,e,n,r){Array.isArray(n)||(n&&(a0[0]=n.toString()),n=a0);for(var i=0;i<n.length;i++){var s=gS(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function CS(t){Kg(t.g,function(e,n){this.g.hasOwnProperty(n)&&Yg(e)},t),t.g={}}fu.prototype.M=function(){fu.X.M.call(this),CS(this)};fu.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ud(){this.g=!0}ud.prototype.Aa=function(){this.g=!1};function w$(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function I$(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function zs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+E$(t,n)+(r?" "+r:"")})}function _$(t,e){t.info(function(){return"TIMEOUT: "+e})}ud.prototype.info=function(){};function E$(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Zg(n)}catch{return e}}var gs={},u0=null;function ld(){return u0=u0||new ot}gs.Pa="serverreachability";function AS(t){Dt.call(this,gs.Pa,t)}Tt(AS,Dt);function pu(t){const e=ld();_t(e,new AS(e))}gs.STAT_EVENT="statevent";function xS(t,e){Dt.call(this,gs.STAT_EVENT,t),this.stat=e}Tt(xS,Dt);function Ft(t){const e=ld();_t(e,new xS(e,t))}gs.Qa="timingevent";function bS(t,e){Dt.call(this,gs.Qa,t),this.size=e}Tt(bS,Dt);function ju(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Y.setTimeout(function(){t()},e)}var cd={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},NS={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ny(){}ny.prototype.h=null;function l0(t){return t.h||(t.h=t.i())}function DS(){}var qu={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ry(){Dt.call(this,"d")}Tt(ry,Dt);function iy(){Dt.call(this,"c")}Tt(iy,Dt);var Xp;function hd(){}Tt(hd,ny);hd.prototype.g=function(){return new XMLHttpRequest};hd.prototype.i=function(){return{}};Xp=new hd;function Wu(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new fu(this),this.O=S$,t=Wp?125:void 0,this.T=new ad(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new RS}function RS(){this.i=null,this.g="",this.h=!1}var S$=45e3,Jp={},Wc={};B=Wu.prototype;B.setTimeout=function(t){this.O=t};function Zp(t,e,n){t.K=1,t.v=fd(vr(e)),t.s=n,t.P=!0,PS(t,null)}function PS(t,e){t.F=Date.now(),Gu(t),t.A=vr(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),BS(n.i,"t",r),t.C=0,n=t.l.H,t.h=new RS,t.g=uT(t.l,n?e:null,!t.s),0<t.N&&(t.L=new v$(Nt(t.La,t,t.g),t.N)),kS(t.S,t.g,"readystatechange",t.ib),e=t.H?pS(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),pu(),w$(t.j,t.u,t.A,t.m,t.U,t.s)}B.ib=function(t){t=t.target;const e=this.L;e&&lr(t)==3?e.l():this.La(t)};B.La=function(t){try{if(t==this.g)e:{const c=lr(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||Wp||this.g&&(this.h.h||this.g.fa()||f0(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?pu(3):pu(2)),dd(this);var n=this.g.aa();this.Y=n;t:if(OS(this)){var r=f0(this.g);t="";var i=r.length,s=lr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mi(this),Pa(this);var o="";break t}this.h.i=new Y.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,I$(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!jc(a)){var l=a;break t}}l=null}if(n=l)zs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,em(this,n);else{this.i=!1,this.o=3,Ft(12),Mi(this),Pa(this);break e}}this.P?(LS(this,c,o),Wp&&this.i&&c==3&&(kS(this.S,this.T,"tick",this.hb),this.T.start())):(zs(this.j,this.m,o,null),em(this,o)),c==4&&Mi(this),this.i&&!this.I&&(c==4?iT(this.l,this):(this.i=!1,Gu(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ft(12)):(this.o=0,Ft(13)),Mi(this),Pa(this)}}}catch{}finally{}};function OS(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function LS(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=T$(t,n),i==Wc){e==4&&(t.o=4,Ft(14),r=!1),zs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Jp){t.o=4,Ft(15),zs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else zs(t.j,t.m,i,null),em(t,i);OS(t)&&i!=Wc&&i!=Jp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ft(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),hy(e),e.K=!0,Ft(11))):(zs(t.j,t.m,n,"[Invalid Chunked Response]"),Mi(t),Pa(t))}B.hb=function(){if(this.g){var t=lr(this.g),e=this.g.fa();this.C<e.length&&(dd(this),LS(this,t,e),this.i&&t!=4&&Gu(this))}};function T$(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Wc:(n=Number(e.substring(n,r)),isNaN(n)?Jp:(r+=1,r+n>e.length?Wc:(e=e.substr(r,n),t.C=r+n,e)))}B.cancel=function(){this.I=!0,Mi(this)};function Gu(t){t.V=Date.now()+t.O,$S(t,t.O)}function $S(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ju(Nt(t.gb,t),e)}function dd(t){t.B&&(Y.clearTimeout(t.B),t.B=null)}B.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(_$(this.j,this.A),this.K!=2&&(pu(),Ft(17)),Mi(this),this.o=2,Pa(this)):$S(this,this.V-t)};function Pa(t){t.l.G==0||t.I||iT(t.l,t)}function Mi(t){dd(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ey(t.T),CS(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function em(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||tm(n.h,t))){if(!t.J&&tm(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Kc(n),gd(n);else break e;cy(n),Ft(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=ju(Nt(n.cb,n),6e3));if(1>=qS(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Fi(n,11)}else if((t.J||n.g==t)&&Kc(n),!jc(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const c=l[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.h;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(sy(s,s.h),s.h=null))}if(r.D){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,Te(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=aT(r,r.H?r.ka:null,r.V),o.J){WS(r.h,o);var a=o,u=r.J;u&&a.setTimeout(u),a.B&&(dd(a),Gu(a)),r.g=o}else nT(r);0<n.i.length&&yd(n)}else l[0]!="stop"&&l[0]!="close"||Fi(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Fi(n,7):ly(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}pu(4)}catch{}}function k$(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(rd(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function C$(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(rd(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function MS(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(rd(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=C$(t),r=k$(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var FS=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function A$(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Gi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Gi){this.h=e!==void 0?e:t.h,Gc(this,t.j),this.s=t.s,this.g=t.g,Hc(this,t.m),this.l=t.l,e=t.i;var n=new mu;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),c0(this,n),this.o=t.o}else t&&(n=String(t).match(FS))?(this.h=!!e,Gc(this,n[1]||"",!0),this.s=ga(n[2]||""),this.g=ga(n[3]||"",!0),Hc(this,n[4]),this.l=ga(n[5]||"",!0),c0(this,n[6]||"",!0),this.o=ga(n[7]||"")):(this.h=!!e,this.i=new mu(null,this.h))}Gi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ya(e,h0,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ya(e,h0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ya(n,n.charAt(0)=="/"?N$:b$,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ya(n,R$)),t.join("")};function vr(t){return new Gi(t)}function Gc(t,e,n){t.j=n?ga(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Hc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function c0(t,e,n){e instanceof mu?(t.i=e,P$(t.i,t.h)):(n||(e=ya(e,D$)),t.i=new mu(e,t.h))}function Te(t,e,n){t.i.set(e,n)}function fd(t){return Te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ga(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ya(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,x$),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function x$(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var h0=/[#\/\?@]/g,b$=/[#\?:]/g,N$=/[#\?]/g,D$=/[#\?@]/g,R$=/#/g;function mu(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function yi(t){t.g||(t.g=new Map,t.h=0,t.i&&A$(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}B=mu.prototype;B.add=function(t,e){yi(this),this.i=null,t=Oo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function US(t,e){yi(t),e=Oo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function VS(t,e){return yi(t),e=Oo(t,e),t.g.has(e)}B.forEach=function(t,e){yi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};B.oa=function(){yi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};B.W=function(t){yi(this);let e=[];if(typeof t=="string")VS(this,t)&&(e=e.concat(this.g.get(Oo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};B.set=function(t,e){return yi(this),this.i=null,t=Oo(this,t),VS(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};B.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function BS(t,e,n){US(t,e),0<n.length&&(t.i=null,t.g.set(Oo(t,e),Gg(n)),t.h+=n.length)}B.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Oo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function P$(t,e){e&&!t.j&&(yi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(US(this,r),BS(this,i,n))},t)),t.j=e}var O$=class{constructor(t,e){this.h=t,this.g=e}};function zS(t){this.l=t||L$,Y.PerformanceNavigationTiming?(t=Y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Y.g&&Y.g.Ga&&Y.g.Ga()&&Y.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var L$=10;function jS(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function qS(t){return t.h?1:t.g?t.g.size:0}function tm(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function sy(t,e){t.g?t.g.add(e):t.h=e}function WS(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}zS.prototype.cancel=function(){if(this.i=GS(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function GS(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Gg(t.i)}function oy(){}oy.prototype.stringify=function(t){return Y.JSON.stringify(t,void 0)};oy.prototype.parse=function(t){return Y.JSON.parse(t,void 0)};function $$(){this.g=new oy}function M$(t,e,n){const r=n||"";try{MS(t,function(i,s){let o=i;Bu(i)&&(o=Zg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function F$(t,e){const n=new ud;if(Y.Image){const r=new Image;r.onload=Dl(Pl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Dl(Pl,n,r,"TestLoadImage: error",!1,e),r.onabort=Dl(Pl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Dl(Pl,n,r,"TestLoadImage: timeout",!1,e),Y.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Pl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Hu(t){this.l=t.ac||null,this.j=t.jb||!1}Tt(Hu,ny);Hu.prototype.g=function(){return new pd(this.l,this.j)};Hu.prototype.i=function(t){return function(){return t}}({});function pd(t,e){ot.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ay,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Tt(pd,ot);var ay=0;B=pd.prototype;B.open=function(t,e){if(this.readyState!=ay)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,gu(this)};B.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Y).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};B.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ku(this)),this.readyState=ay};B.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,gu(this)),this.g&&(this.readyState=3,gu(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;HS(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function HS(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}B.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ku(this):gu(this),this.readyState==3&&HS(this)}};B.Va=function(t){this.g&&(this.response=this.responseText=t,Ku(this))};B.Ua=function(t){this.g&&(this.response=t,Ku(this))};B.ga=function(){this.g&&Ku(this)};function Ku(t){t.readyState=4,t.l=null,t.j=null,t.A=null,gu(t)}B.setRequestHeader=function(t,e){this.v.append(t,e)};B.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};B.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function gu(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(pd.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var U$=Y.JSON.parse;function Le(t){ot.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=KS,this.K=this.L=!1}Tt(Le,ot);var KS="",V$=/^https?$/i,B$=["POST","PUT"];B=Le.prototype;B.Ka=function(t){this.L=t};B.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Xp.g(),this.C=this.u?l0(this.u):l0(Xp),this.g.onreadystatechange=Nt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){d0(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Y.FormData&&t instanceof Y.FormData,!(0<=cS(B$,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{XS(this),0<this.B&&((this.K=z$(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Nt(this.qa,this)):this.A=ty(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){d0(this,s)}};function z$(t){return po&&s$()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}B.qa=function(){typeof Wg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_t(this,"timeout"),this.abort(8))};function d0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,QS(t),md(t)}function QS(t){t.D||(t.D=!0,_t(t,"complete"),_t(t,"error"))}B.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,_t(this,"complete"),_t(this,"abort"),md(this))};B.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),md(this,!0)),Le.X.M.call(this)};B.Ha=function(){this.s||(this.F||this.v||this.l?YS(this):this.fb())};B.fb=function(){YS(this)};function YS(t){if(t.h&&typeof Wg<"u"&&(!t.C[1]||lr(t)!=4||t.aa()!=2)){if(t.v&&lr(t)==4)ty(t.Ha,0,t);else if(_t(t,"readystatechange"),lr(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(FS)[1]||null;if(!i&&Y.self&&Y.self.location){var s=Y.self.location.protocol;i=s.substr(0,s.length-1)}r=!V$.test(i?i.toLowerCase():"")}n=r}if(n)_t(t,"complete"),_t(t,"success");else{t.m=6;try{var o=2<lr(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",QS(t)}}finally{md(t)}}}}function md(t,e){if(t.g){XS(t);const n=t.g,r=t.C[0]?zc:null;t.g=null,t.C=null,e||_t(t,"ready");try{n.onreadystatechange=r}catch{}}}function XS(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Y.clearTimeout(t.A),t.A=null)}function lr(t){return t.g?t.g.readyState:0}B.aa=function(){try{return 2<lr(this)?this.g.status:-1}catch{return-1}};B.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};B.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),U$(e)}};function f0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case KS:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}B.Ea=function(){return this.m};B.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function JS(t){let e="";return Kg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function uy(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=JS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Te(t,e,n))}function ra(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ZS(t){this.Ca=0,this.i=[],this.j=new ud,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ra("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ra("baseRetryDelayMs",5e3,t),this.bb=ra("retryDelaySeedMs",1e4,t),this.$a=ra("forwardChannelMaxRetries",2,t),this.ta=ra("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new zS(t&&t.concurrentRequestLimit),this.Fa=new $$,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}B=ZS.prototype;B.ma=8;B.G=1;function ly(t){if(eT(t),t.G==3){var e=t.U++,n=vr(t.F);Te(n,"SID",t.I),Te(n,"RID",e),Te(n,"TYPE","terminate"),Qu(t,n),e=new Wu(t,t.j,e,void 0),e.K=2,e.v=fd(vr(n)),n=!1,Y.navigator&&Y.navigator.sendBeacon&&(n=Y.navigator.sendBeacon(e.v.toString(),"")),!n&&Y.Image&&(new Image().src=e.v,n=!0),n||(e.g=uT(e.l,null),e.g.da(e.v)),e.F=Date.now(),Gu(e)}oT(t)}function gd(t){t.g&&(hy(t),t.g.cancel(),t.g=null)}function eT(t){gd(t),t.u&&(Y.clearTimeout(t.u),t.u=null),Kc(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Y.clearTimeout(t.m),t.m=null)}function yd(t){jS(t.h)||t.m||(t.m=!0,ES(t.Ja,t),t.C=0)}function j$(t,e){return qS(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=ju(Nt(t.Ja,t,e),sT(t,t.C)),t.C++,!0)}B.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Wu(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=pS(s),mS(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=tT(this,i,e),n=vr(this.F),Te(n,"RID",t),Te(n,"CVER",22),this.D&&Te(n,"X-HTTP-Session-Id",this.D),Qu(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(JS(s)))+"&"+e:this.o&&uy(n,this.o,s)),sy(this.h,i),this.Ya&&Te(n,"TYPE","init"),this.O?(Te(n,"$req",e),Te(n,"SID","null"),i.Z=!0,Zp(i,n,null)):Zp(i,n,e),this.G=2}}else this.G==3&&(t?p0(this,t):this.i.length==0||jS(this.h)||p0(this))};function p0(t,e){var n;e?n=e.m:n=t.U++;const r=vr(t.F);Te(r,"SID",t.I),Te(r,"RID",n),Te(r,"AID",t.T),Qu(t,r),t.o&&t.s&&uy(r,t.o,t.s),n=new Wu(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=tT(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),sy(t.h,n),Zp(n,r,e)}function Qu(t,e){t.ia&&Kg(t.ia,function(n,r){Te(e,r,n)}),t.l&&MS({},function(n,r){Te(e,r,n)})}function tT(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Nt(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].h;const c=i[u].g;if(l-=s,0>l)s=Math.max(0,i[u].h-100),a=!1;else try{M$(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function nT(t){t.g||t.u||(t.Z=1,ES(t.Ia,t),t.A=0)}function cy(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=ju(Nt(t.Ia,t),sT(t,t.A)),t.A++,!0)}B.Ia=function(){if(this.u=null,rT(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ju(Nt(this.eb,this),t)}};B.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ft(10),gd(this),rT(this))};function hy(t){t.B!=null&&(Y.clearTimeout(t.B),t.B=null)}function rT(t){t.g=new Wu(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=vr(t.sa);Te(e,"RID","rpc"),Te(e,"SID",t.I),Te(e,"CI",t.L?"0":"1"),Te(e,"AID",t.T),Te(e,"TYPE","xmlhttp"),Qu(t,e),t.o&&t.s&&uy(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=fd(vr(e)),n.s=null,n.P=!0,PS(n,t)}B.cb=function(){this.v!=null&&(this.v=null,gd(this),cy(this),Ft(19))};function Kc(t){t.v!=null&&(Y.clearTimeout(t.v),t.v=null)}function iT(t,e){var n=null;if(t.g==e){Kc(t),hy(t),t.g=null;var r=2}else if(tm(t.h,e))n=e.D,WS(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ld(),_t(r,new bS(r,n)),yd(t)}else nT(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&j$(t,e)||r==2&&cy(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Fi(t,5);break;case 4:Fi(t,10);break;case 3:Fi(t,6);break;default:Fi(t,2)}}}function sT(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Fi(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Nt(t.kb,t);n||(n=new Gi("//www.google.com/images/cleardot.gif"),Y.location&&Y.location.protocol=="http"||Gc(n,"https"),fd(n)),F$(n.toString(),r)}else Ft(2);t.G=0,t.l&&t.l.va(e),oT(t),eT(t)}B.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ft(2)):(this.j.info("Failed to ping google.com"),Ft(1))};function oT(t){if(t.G=0,t.la=[],t.l){const e=GS(t.h);(e.length!=0||t.i.length!=0)&&(r0(t.la,e),r0(t.la,t.i),t.h.i.length=0,Gg(t.i),t.i.length=0),t.l.ua()}}function aT(t,e,n){var r=n instanceof Gi?vr(n):new Gi(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Hc(r,r.m);else{var i=Y.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Gi(null,void 0);r&&Gc(s,r),e&&(s.g=e),i&&Hc(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&Te(r,n,e),Te(r,"VER",t.ma),Qu(t,r),r}function uT(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Le(new Hu({jb:!0})):new Le(t.ra),e.Ka(t.H),e}function lT(){}B=lT.prototype;B.xa=function(){};B.wa=function(){};B.va=function(){};B.ua=function(){};B.Ra=function(){};function Qc(){if(po&&!(10<=Number(o$)))throw Error("Environmental error: no available transport.")}Qc.prototype.g=function(t,e){return new cn(t,e)};function cn(t,e){ot.call(this),this.g=new ZS(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!jc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!jc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Lo(this)}Tt(cn,ot);cn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ft(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=aT(t,null,t.V),yd(t)};cn.prototype.close=function(){ly(this.g)};cn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Zg(t),t=n);e.i.push(new O$(e.ab++,t)),e.G==3&&yd(e)};cn.prototype.M=function(){this.g.l=null,delete this.j,ly(this.g),delete this.g,cn.X.M.call(this)};function cT(t){ry.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Tt(cT,ry);function hT(){iy.call(this),this.status=1}Tt(hT,iy);function Lo(t){this.g=t}Tt(Lo,lT);Lo.prototype.xa=function(){_t(this.g,"a")};Lo.prototype.wa=function(t){_t(this.g,new cT(t))};Lo.prototype.va=function(t){_t(this.g,new hT)};Lo.prototype.ua=function(){_t(this.g,"b")};Qc.prototype.createWebChannel=Qc.prototype.g;cn.prototype.send=cn.prototype.u;cn.prototype.open=cn.prototype.m;cn.prototype.close=cn.prototype.close;cd.NO_ERROR=0;cd.TIMEOUT=8;cd.HTTP_ERROR=6;NS.COMPLETE="complete";DS.EventType=qu;qu.OPEN="a";qu.CLOSE="b";qu.ERROR="c";qu.MESSAGE="d";ot.prototype.listen=ot.prototype.N;Le.prototype.listenOnce=Le.prototype.O;Le.prototype.getLastError=Le.prototype.Oa;Le.prototype.getLastErrorCode=Le.prototype.Ea;Le.prototype.getStatus=Le.prototype.aa;Le.prototype.getResponseJson=Le.prototype.Sa;Le.prototype.getResponseText=Le.prototype.fa;Le.prototype.send=Le.prototype.da;Le.prototype.setWithCredentials=Le.prototype.Ka;var q$=function(){return new Qc},W$=function(){return ld()},Df=cd,G$=NS,H$=gs,m0={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},K$=Hu,Ol=DS,Q$=Le;const g0="@firebase/firestore";/**
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
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
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
 */let $o="9.14.0";/**
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
 */const ii=new Wh("@firebase/firestore");function nm(){return ii.logLevel}function Y$(t){ii.setLogLevel(t)}function C(t,...e){if(ii.logLevel<=oe.DEBUG){const n=e.map(dy);ii.debug(`Firestore (${$o}): ${t}`,...n)}}function Be(t,...e){if(ii.logLevel<=oe.ERROR){const n=e.map(dy);ii.error(`Firestore (${$o}): ${t}`,...n)}}function mo(t,...e){if(ii.logLevel<=oe.WARN){const n=e.map(dy);ii.warn(`Firestore (${$o}): ${t}`,...n)}}function dy(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function V(t="Unexpected state"){const e=`FIRESTORE (${$o}) INTERNAL ASSERTION FAILED: `+t;throw Be(e),new Error(e)}function q(t,e){t||V()}function X$(t,e){t||V()}function L(t,e){return t}/**
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends Vt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class rt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class dT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class J${getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class Z${constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class eM{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new rt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new rt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new rt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(q(typeof r.accessToken=="string"),new dT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return q(e===null||typeof e=="string"),new et(e)}}class tM{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=et.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(q(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class nM{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new tM(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rM{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iM{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,C("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(q(typeof n.token=="string"),this.A=n.token,new rM(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function sM(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class fT{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=sM(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function J(t,e){return t<e?-1:t>e?1:0}function go(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function pT(t){return t+"\0"}/**
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
 */class Ce{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new k(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new k(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new k(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new k(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ce(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class j{constructor(e){this.timestamp=e}static fromTimestamp(e){return new j(e)}static min(){return new j(new Ce(0,0))}static max(){return new j(new Ce(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class yu{constructor(e,n,r){n===void 0?n=0:n>e.length&&V(),r===void 0?r=e.length-n:r>e.length-n&&V(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return yu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class se extends yu{construct(e,n,r){return new se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new k(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new se(n)}static emptyPath(){return new se([])}}const oM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends yu{construct(e,n,r){return new ze(e,n,r)}static isValidIdentifier(e){return oM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new k(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new k(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new k(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new k(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(n)}static emptyPath(){return new ze([])}}/**
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
 */class D{constructor(e){this.path=e}static fromPath(e){return new D(se.fromString(e))}static fromName(e){return new D(se.fromString(e).popFirst(5))}static empty(){return new D(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new D(new se(e.slice()))}}/**
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
 */class mT{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function rm(t){return t.fields.find(e=>e.kind===2)}function Ai(t){return t.fields.filter(e=>e.kind!==2)}mT.UNKNOWN_ID=-1;class aM{constructor(e,n){this.fieldPath=e,this.kind=n}}class Yc{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Yc(0,hn.min())}}function gT(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=j.fromTimestamp(r===1e9?new Ce(n+1,0):new Ce(n,r));return new hn(i,D.empty(),e)}function yT(t){return new hn(t.readTime,t.key,-1)}class hn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new hn(j.min(),D.empty(),-1)}static max(){return new hn(j.max(),D.empty(),-1)}}function fy(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=D.comparator(t.documentKey,e.documentKey),n!==0?n:J(t.largestBatchId,e.largestBatchId))}/**
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
 */const vT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function vi(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==vT)throw t;C("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&V(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new w((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):w.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):w.reject(n)}static resolve(e){return new w((n,r)=>{n(e)})}static reject(e){return new w((n,r)=>{r(e)})}static waitFor(e){return new w((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=w.resolve(!1);for(const r of e)n=n.next(i=>i?w.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new w((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const l=u;n(e[l]).next(c=>{o[l]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new w((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class vd{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.P=new rt,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{n.error?this.P.reject(new Oa(e,n.error)):this.P.resolve()},this.transaction.onerror=r=>{const i=py(r.target.error);this.P.reject(new Oa(e,i))}}static open(e,n,r,i){try{return new vd(n,e.transaction(i,r))}catch(s){throw new Oa(n,s)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(C("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new lM(n)}}class bn{constructor(e,n,r){this.name=e,this.version=n,this.S=r,bn.D(Ne())===12.2&&Be("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return C("SimpleDb","Removing database:",e),xi(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!iu())return!1;if(bn.N())return!0;const e=Ne(),n=bn.D(e),r=0<n&&n<10,i=bn.k(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static N(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.O)==="YES"}static M(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static k(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async F(e){return this.db||(C("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Oa(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new k(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new k(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Oa(e,o))},i.onupgradeneeded=s=>{C("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.$(o,i.transaction,s.oldVersion,this.version).next(()=>{C("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.F(e);const a=vd.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(l=>(a.V(),l)).catch(l=>(a.abort(l),w.reject(l))).toPromise();return u.catch(()=>{}),await a.v,u}catch(a){const u=a,l=u.name!=="FirebaseError"&&o<3;if(C("SimpleDb","Transaction failed with error:",u.message,"Retrying:",l),this.close(),!l)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class uM{constructor(e){this.U=e,this.q=!1,this.K=null}get isDone(){return this.q}get G(){return this.K}set cursor(e){this.U=e}done(){this.q=!0}j(e){this.K=e}delete(){return xi(this.U.delete())}}class Oa extends k{constructor(e,n){super(E.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function wi(t){return t.name==="IndexedDbTransactionError"}class lM{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(C("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(C("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),xi(r)}add(e){return C("SimpleDb","ADD",this.store.name,e,e),xi(this.store.add(e))}get(e){return xi(this.store.get(e)).next(n=>(n===void 0&&(n=null),C("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return C("SimpleDb","DELETE",this.store.name,e),xi(this.store.delete(e))}count(){return C("SimpleDb","COUNT",this.store.name),xi(this.store.count())}W(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.H(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new w((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}J(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new w((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}Y(e,n){C("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.X=!1;const i=this.cursor(r);return this.H(i,(s,o,a)=>a.delete())}Z(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.H(i,n)}tt(e){const n=this.cursor({});return new w((r,i)=>{n.onerror=s=>{const o=py(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}H(e,n){const r=[];return new w((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new uM(a),l=n(a.primaryKey,a.value,u);if(l instanceof w){const c=l.catch(h=>(u.done(),w.reject(h)));r.push(c)}u.isDone?i():u.G===null?a.continue():a.continue(u.G)}}).next(()=>w.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.X?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function xi(t){return new w((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=py(r.target.error);n(i)}})}let y0=!1;function py(t){const e=bn.D(Ne());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new k("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return y0||(y0=!0,setTimeout(()=>{throw r},0)),r}}return t}class cM{constructor(e,n){this.asyncQueue=e,this.et=n,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){C("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{C("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(n){wi(n)?C("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await vi(n)}await this.nt(6e4)})}}class hM{constructor(e,n){this.localStore=e,this.persistence=n}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.it(n,e))}it(e,n){const r=new Set;let i=n,s=!0;return w.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return C("IndexBackiller",`Processing collection: ${o}`),this.rt(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}rt(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ot(i,s)).next(a=>(C("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ot(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=yT(s);fy(o,r)>0&&(r=o)}),new hn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class Qt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function v0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ys(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function IT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Qt.at=-1;class $e{constructor(e,n){this.comparator=e,this.root=n||gt.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ll(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ll(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ll(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ll(this.root,e,this.comparator,!0)}}class Ll{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:gt.RED,this.left=i!=null?i:gt.EMPTY,this.right=s!=null?s:gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new gt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return gt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw V();const e=this.left.check();if(e!==this.right.check())throw V();return e+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw V()}get value(){throw V()}get color(){throw V()}get left(){throw V()}get right(){throw V()}copy(t,e,n,r,i){return this}insert(t,e,n){return new gt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ge{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new w0(this.data.getIterator())}getIteratorFrom(e){return new w0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ge(this.comparator);return n.data=e,n}}class w0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ts(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class un{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new un([])}unionWith(e){let n=new ge(ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new un(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return go(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */function dM(){return typeof atob<"u"}/**
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
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Qe(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const fM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function si(t){if(q(!!t),typeof t=="string"){let e=0;const n=fM.exec(t);if(q(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ts(t){return typeof t=="string"?Qe.fromBase64String(t):Qe.fromUint8Array(t)}/**
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
 */function my(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function _T(t){const e=t.mapValue.fields.__previous_value__;return my(e)?_T(e):e}function vu(t){const e=si(t.mapValue.fields.__local_write_time__.timestampValue);return new Ce(e.seconds,e.nanos)}/**
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
 */class pM{constructor(e,n,r,i,s,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class oi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new oi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof oi&&e.projectId===this.projectId&&e.database===this.database}}function Yu(t){return t==null}function wu(t){return t===0&&1/t==-1/0}function ET(t){return typeof t=="number"&&Number.isInteger(t)&&!wu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Vr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},rc={nullValue:"NULL_VALUE"};function ns(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?my(t)?4:ST(t)?9007199254740991:10:V()}function Zn(t,e){if(t===e)return!0;const n=ns(t);if(n!==ns(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vu(t).isEqual(vu(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=si(r.timestampValue),o=si(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ts(r.bytesValue).isEqual(ts(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Oe(r.geoPointValue.latitude)===Oe(i.geoPointValue.latitude)&&Oe(r.geoPointValue.longitude)===Oe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Oe(r.integerValue)===Oe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Oe(r.doubleValue),o=Oe(i.doubleValue);return s===o?wu(s)===wu(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return go(t.arrayValue.values||[],e.arrayValue.values||[],Zn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(v0(s)!==v0(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Zn(s[a],o[a])))return!1;return!0}(t,e);default:return V()}}function Iu(t,e){return(t.values||[]).find(n=>Zn(n,e))!==void 0}function ai(t,e){if(t===e)return 0;const n=ns(t),r=ns(e);if(n!==r)return J(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Oe(i.integerValue||i.doubleValue),a=Oe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return I0(t.timestampValue,e.timestampValue);case 4:return I0(vu(t),vu(e));case 5:return J(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ts(i),a=ts(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=J(o[u],a[u]);if(l!==0)return l}return J(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=J(Oe(i.latitude),Oe(s.latitude));return o!==0?o:J(Oe(i.longitude),Oe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=ai(o[u],a[u]);if(l)return l}return J(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Vr.mapValue&&s===Vr.mapValue)return 0;if(i===Vr.mapValue)return 1;if(s===Vr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=s.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=J(a[c],l[c]);if(h!==0)return h;const d=ai(o[a[c]],u[l[c]]);if(d!==0)return d}return J(a.length,l.length)}(t.mapValue,e.mapValue);default:throw V()}}function I0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return J(t,e);const n=si(t),r=si(e),i=J(n.seconds,r.seconds);return i!==0?i:J(n.nanos,r.nanos)}function Zs(t){return im(t)}function im(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=si(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ts(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,D.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=im(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${im(r.fields[a])}`;return s+"}"}(t.mapValue):V();var e,n}function rs(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function sm(t){return!!t&&"integerValue"in t}function _u(t){return!!t&&"arrayValue"in t}function _0(t){return!!t&&"nullValue"in t}function E0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ic(t){return!!t&&"mapValue"in t}function La(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ys(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=La(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=La(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ST(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function mM(t){return"nullValue"in t?rc:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?rs(oi.empty(),D.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:V()}function gM(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?rs(oi.empty(),D.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Vr:V()}function S0(t,e){const n=ai(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function T0(t,e){const n=ai(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class yt{constructor(e){this.value=e}static empty(){return new yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ic(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=La(n)}setAll(e){let n=ze.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=La(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ic(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ic(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ys(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new yt(La(this.value))}}function TT(t){const e=[];return ys(t.fields,(n,r)=>{const i=new ze([n]);if(ic(r)){const s=TT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new un(e)}/**
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
 */class ve{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new ve(e,0,j.min(),j.min(),yt.empty(),0)}static newFoundDocument(e,n,r){return new ve(e,1,n,j.min(),r,0)}static newNoDocument(e,n){return new ve(e,2,n,j.min(),yt.empty(),0)}static newUnknownDocument(e,n){return new ve(e,3,n,j.min(),yt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ve(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class yM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function k0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new yM(t,e,n,r,i,s,o)}function is(t){const e=L(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Zs(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Yu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Zs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Zs(r)).join(",")),e.ht=n}return e.ht}function vM(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Zs(r.value)}`;var r}).join(", ")}]`),Yu(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Zs(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Zs(n)).join(",")),`Target(${e})`}function Xu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!CM(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Zn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!b0(t.startAt,e.startAt)&&b0(t.endAt,e.endAt)}function Xc(t){return D.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Jc(t,e){return t.filters.filter(n=>n instanceof vt&&n.field.isEqual(e))}function C0(t,e,n){let r=rc,i=!0;for(const s of Jc(t,e)){let o=rc,a=!0;switch(s.op){case"<":case"<=":o=mM(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=rc}S0({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];S0({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function A0(t,e,n){let r=Vr,i=!0;for(const s of Jc(t,e)){let o=Vr,a=!0;switch(s.op){case">=":case">":o=gM(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Vr}T0({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];T0({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}class vt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new wM(e,n,r):n==="array-contains"?new EM(e,r):n==="in"?new SM(e,r):n==="not-in"?new TM(e,r):n==="array-contains-any"?new kM(e,r):new vt(e,n,r)}static lt(e,n,r){return n==="in"?new IM(e,r):new _M(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(ai(n,this.value)):n!==null&&ns(this.value)===ns(n)&&this.ft(ai(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return V()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class wM extends vt{constructor(e,n,r){super(e,n,r),this.key=D.fromName(r.referenceValue)}matches(e){const n=D.comparator(e.key,this.key);return this.ft(n)}}class IM extends vt{constructor(e,n){super(e,"in",n),this.keys=kT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class _M extends vt{constructor(e,n){super(e,"not-in",n),this.keys=kT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function kT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>D.fromName(r.referenceValue))}class EM extends vt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return _u(n)&&Iu(n.arrayValue,this.value)}}class SM extends vt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Iu(this.value.arrayValue,n)}}class TM extends vt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Iu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Iu(this.value.arrayValue,n)}}class kM extends vt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!_u(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Iu(this.value.arrayValue,r))}}class ui{constructor(e,n){this.position=e,this.inclusive=n}}class eo{constructor(e,n="asc"){this.field=e,this.dir=n}}function CM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function x0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=D.comparator(D.fromName(o.referenceValue),n.key):r=ai(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function b0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Sr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this._t=null,this.wt=null,this.startAt,this.endAt}}function CT(t,e,n,r,i,s,o,a){return new Sr(t,e,n,r,i,s,o,a)}function Mo(t){return new Sr(t)}function N0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function gy(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function yy(t){for(const e of t.filters)if(e.dt())return e.field;return null}function vy(t){return t.collectionGroup!==null}function yo(t){const e=L(t);if(e._t===null){e._t=[];const n=yy(e),r=gy(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new eo(n)),e._t.push(new eo(ze.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new eo(ze.keyField(),s))}}}return e._t}function en(t){const e=L(t);if(!e.wt)if(e.limitType==="F")e.wt=k0(e.path,e.collectionGroup,yo(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of yo(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new eo(s.field,o))}const r=e.endAt?new ui(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ui(e.startAt.position,e.startAt.inclusive):null;e.wt=k0(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function Zc(t,e,n){return new Sr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ju(t,e){return Xu(en(t),en(e))&&t.limitType===e.limitType}function AT(t){return`${is(en(t))}|lt:${t.limitType}`}function om(t){return`Query(target=${vM(en(t))}; limitType=${t.limitType})`}function wy(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):D.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=x0(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,yo(n),r)||n.endAt&&!function(i,s,o){const a=x0(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,yo(n),r))}(t,e)}function xT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function bT(t){return(e,n)=>{let r=!1;for(const i of yo(t)){const s=AM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function AM(t,e,n){const r=t.field.isKeyField()?D.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?ai(a,u):V()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return V()}}/**
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
 */function NT(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wu(e)?"-0":e}}function DT(t){return{integerValue:""+t}}function RT(t,e){return ET(e)?DT(e):NT(t,e)}/**
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
 */class wd{constructor(){this._=void 0}}function xM(t,e,n){return t instanceof vo?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof ss?OT(t,e):t instanceof os?LT(t,e):function(r,i){const s=PT(r,i),o=D0(s)+D0(r.yt);return sm(s)&&sm(r.yt)?DT(o):NT(r.It,o)}(t,e)}function bM(t,e,n){return t instanceof ss?OT(t,e):t instanceof os?LT(t,e):n}function PT(t,e){return t instanceof wo?sm(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class vo extends wd{}class ss extends wd{constructor(e){super(),this.elements=e}}function OT(t,e){const n=$T(e);for(const r of t.elements)n.some(i=>Zn(i,r))||n.push(r);return{arrayValue:{values:n}}}class os extends wd{constructor(e){super(),this.elements=e}}function LT(t,e){let n=$T(e);for(const r of t.elements)n=n.filter(i=>!Zn(i,r));return{arrayValue:{values:n}}}class wo extends wd{constructor(e,n){super(),this.It=e,this.yt=n}}function D0(t){return Oe(t.integerValue||t.doubleValue)}function $T(t){return _u(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Zu{constructor(e,n){this.field=e,this.transform=n}}function NM(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ss&&r instanceof ss||n instanceof os&&r instanceof os?go(n.elements,r.elements,Zn):n instanceof wo&&r instanceof wo?Zn(n.yt,r.yt):n instanceof vo&&r instanceof vo}(t.transform,e.transform)}class DM{constructor(e,n){this.version=e,this.transformResults=n}}class ke{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ke}static exists(e){return new ke(void 0,e)}static updateTime(e){return new ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Id{}function MT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Uo(t.key,ke.none()):new Fo(t.key,t.data,ke.none());{const n=t.data,r=yt.empty();let i=new ge(ze.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Tr(t.key,r,new un(i.toArray()),ke.none())}}function RM(t,e,n){t instanceof Fo?function(r,i,s){const o=r.value.clone(),a=P0(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Tr?function(r,i,s){if(!sc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=P0(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(FT(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function $a(t,e,n,r){return t instanceof Fo?function(i,s,o,a){if(!sc(i.precondition,s))return o;const u=i.value.clone(),l=O0(i.fieldTransforms,a,s);return u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Tr?function(i,s,o,a){if(!sc(i.precondition,s))return o;const u=O0(i.fieldTransforms,a,s),l=s.data;return l.setAll(FT(i)),l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return sc(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function PM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=PT(r.transform,i||null);s!=null&&(n===null&&(n=yt.empty()),n.set(r.field,s))}return n||null}function R0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&go(n,r,(i,s)=>NM(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fo extends Id{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Tr extends Id{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function FT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function P0(t,e,n){const r=new Map;q(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,bM(o,a,n[i]))}return r}function O0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,xM(s,o,e))}return r}class Uo extends Id{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Iy extends Id{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class OM{constructor(e){this.count=e}}/**
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
 */var je,ie;function UT(t){switch(t){default:return V();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function VT(t){if(t===void 0)return Be("GRPC error has no .code"),E.UNKNOWN;switch(t){case je.OK:return E.OK;case je.CANCELLED:return E.CANCELLED;case je.UNKNOWN:return E.UNKNOWN;case je.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case je.INTERNAL:return E.INTERNAL;case je.UNAVAILABLE:return E.UNAVAILABLE;case je.UNAUTHENTICATED:return E.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case je.NOT_FOUND:return E.NOT_FOUND;case je.ALREADY_EXISTS:return E.ALREADY_EXISTS;case je.PERMISSION_DENIED:return E.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case je.ABORTED:return E.ABORTED;case je.OUT_OF_RANGE:return E.OUT_OF_RANGE;case je.UNIMPLEMENTED:return E.UNIMPLEMENTED;case je.DATA_LOSS:return E.DATA_LOSS;default:return V()}}(ie=je||(je={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Ii{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ys(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return IT(this.inner)}size(){return this.innerSize}}/**
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
 */const LM=new $e(D.comparator);function Yt(){return LM}const BT=new $e(D.comparator);function va(...t){let e=BT;for(const n of t)e=e.insert(n.key,n);return e}function zT(t){let e=BT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function qn(){return Ma()}function jT(){return Ma()}function Ma(){return new Ii(t=>t.toString(),(t,e)=>t.isEqual(e))}const $M=new $e(D.comparator),MM=new ge(D.comparator);function Z(...t){let e=MM;for(const n of t)e=e.add(n);return e}const FM=new ge(J);function _d(){return FM}/**
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
 */class el{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,tl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new el(j.min(),i,_d(),Yt(),Z())}}class tl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new tl(r,n,Z(),Z(),Z())}}/**
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
 */class oc{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class qT{constructor(e,n){this.targetId=e,this.At=n}}class WT{constructor(e,n,r=Qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class L0{constructor(){this.Rt=0,this.bt=M0(),this.Pt=Qe.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=Z(),n=Z(),r=Z();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:V()}}),new tl(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=M0()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class UM{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Yt(),this.qt=$0(),this.Kt=new ge(J)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:V()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(Xc(s))if(r===0){const o=new D(s.path);this.jt(n,o,ve.newNoDocument(o,j.min()))}else q(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&Xc(a.target)){const u=new D(a.target.path);this.Ut.get(u)!==null||this.ee(o,u)||this.jt(o,u,ve.newNoDocument(u,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=Z();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Xt(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new el(e,n,this.Kt,this.Ut,r);return this.Ut=Yt(),this.qt=$0(),this.Kt=new ge(J),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new L0,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new ge(J),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||C("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new L0),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function $0(){return new $e(D.comparator)}function M0(){return new $e(D.comparator)}/**
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
 */const VM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),BM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class zM{constructor(e,n){this.databaseId=e,this.gt=n}}function Eu(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function GT(t,e){return t.gt?e.toBase64():e.toUint8Array()}function jM(t,e){return Eu(t,e.toTimestamp())}function it(t){return q(!!t),j.fromTimestamp(function(e){const n=si(e);return new Ce(n.seconds,n.nanos)}(t))}function _y(t,e){return function(n){return new se(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function HT(t){const e=se.fromString(t);return q(tk(e)),e}function Su(t,e){return _y(t.databaseId,e.path)}function Qn(t,e){const n=HT(e);if(n.get(1)!==t.databaseId.projectId)throw new k(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new k(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new D(QT(n))}function am(t,e){return _y(t.databaseId,e)}function KT(t){const e=HT(t);return e.length===4?se.emptyPath():QT(e)}function Tu(t){return new se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function QT(t){return q(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function F0(t,e,n){return{name:Su(t,e),fields:n.value.mapValue.fields}}function YT(t,e,n){const r=Qn(t,e.name),i=it(e.updateTime),s=new yt({mapValue:{fields:e.fields}}),o=ve.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function qM(t,e){return"found"in e?function(n,r){q(!!r.found),r.found.name,r.found.updateTime;const i=Qn(n,r.found.name),s=it(r.found.updateTime),o=new yt({mapValue:{fields:r.found.fields}});return ve.newFoundDocument(i,s,o)}(t,e):"missing"in e?function(n,r){q(!!r.missing),q(!!r.readTime);const i=Qn(n,r.missing),s=it(r.readTime);return ve.newNoDocument(i,s)}(t,e):V()}function WM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:V()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.gt?(q(l===void 0||typeof l=="string"),Qe.fromBase64String(l||"")):(q(l===void 0||l instanceof Uint8Array),Qe.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?E.UNKNOWN:VT(u.code);return new k(l,u.message||"")}(o);n=new WT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Qn(t,r.document.name),s=it(r.document.updateTime),o=new yt({mapValue:{fields:r.document.fields}}),a=ve.newFoundDocument(i,s,o),u=r.targetIds||[],l=r.removedTargetIds||[];n=new oc(u,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Qn(t,r.document),s=r.readTime?it(r.readTime):j.min(),o=ve.newNoDocument(i,s),a=r.removedTargetIds||[];n=new oc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Qn(t,r.document),s=r.removedTargetIds||[];n=new oc([],s,i,null)}else{if(!("filter"in e))return V();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new OM(i),o=r.targetId;n=new qT(o,s)}}return n}function ku(t,e){let n;if(e instanceof Fo)n={update:F0(t,e.key,e.value)};else if(e instanceof Uo)n={delete:Su(t,e.key)};else if(e instanceof Tr)n={update:F0(t,e.key,e.data),updateMask:JM(e.fieldMask)};else{if(!(e instanceof Iy))return V();n={verify:Su(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof vo)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ss)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof os)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof wo)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw V()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:jM(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:V()}(t,e.precondition)),n}function um(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?ke.updateTime(it(i.updateTime)):i.exists!==void 0?ke.exists(i.exists):ke.none()}(e.currentDocument):ke.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)q(o.setToServerValue==="REQUEST_TIME"),a=new vo;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new ss(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new os(l)}else"increment"in o?a=new wo(s,o.increment):V();const u=ze.fromServerFormat(o.fieldPath);return new Zu(u,a)}(t,i)):[];if(e.update){e.update.name;const i=Qn(t,e.update.name),s=new yt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const u=a.fieldPaths||[];return new un(u.map(l=>ze.fromServerFormat(l)))}(e.updateMask);return new Tr(i,s,o,n,r)}return new Fo(i,s,n,r)}if(e.delete){const i=Qn(t,e.delete);return new Uo(i,n)}if(e.verify){const i=Qn(t,e.verify);return new Iy(i,n)}return V()}function GM(t,e){return t&&t.length>0?(q(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?it(r.updateTime):it(i);return s.isEqual(j.min())&&(s=it(i)),new DM(s,r.transformResults||[])}(n,e))):[]}function XT(t,e){return{documents:[am(t,e.path)]}}function JT(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=am(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=am(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length===0)return;const l=u.map(c=>function(h){if(h.op==="=="){if(E0(h.value))return{unaryFilter:{field:ks(h.field),op:"IS_NAN"}};if(_0(h.value))return{unaryFilter:{field:ks(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(E0(h.value))return{unaryFilter:{field:ks(h.field),op:"IS_NOT_NAN"}};if(_0(h.value))return{unaryFilter:{field:ks(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ks(h.field),op:QM(h.op),value:h.value}}}(c));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(l=>function(c){return{field:ks(c.field),direction:KM(c.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(u,l){return u.gt||Yu(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function ZT(t){let e=KT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){q(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=ek(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new eo(js(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Yu(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(c){const h=!!c.before,d=c.values||[];return new ui(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(c){const h=!c.before,d=c.values||[];return new ui(d,h)}(n.endAt)),CT(e,i,o,s,a,"F",u,l)}function HM(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return V()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function ek(t){return t?t.unaryFilter!==void 0?[XM(t)]:t.fieldFilter!==void 0?[YM(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>ek(e)).reduce((e,n)=>e.concat(n)):V():[]}function KM(t){return VM[t]}function QM(t){return BM[t]}function ks(t){return{fieldPath:t.canonicalString()}}function js(t){return ze.fromServerFormat(t.fieldPath)}function YM(t){return vt.create(js(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return V()}}(t.fieldFilter.op),t.fieldFilter.value)}function XM(t){switch(t.unaryFilter.op){case"IS_NAN":const e=js(t.unaryFilter.field);return vt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=js(t.unaryFilter.field);return vt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=js(t.unaryFilter.field);return vt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=js(t.unaryFilter.field);return vt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return V()}}function JM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function tk(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function Bt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=U0(e)),e=ZM(t.get(n),e);return U0(e)}function ZM(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function U0(t){return t+""}function Wn(t){const e=t.length;if(q(e>=2),e===2)return q(t.charAt(0)===""&&t.charAt(1)===""),se.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&V(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:V()}s=o+2}return new se(r)}/**
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
 */const V0=["userId","batchId"];/**
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
 */function ac(t,e){return[t,Bt(e)]}function nk(t,e,n){return[t,Bt(e),n]}const eF={},tF=["prefixPath","collectionGroup","readTime","documentId"],nF=["prefixPath","collectionGroup","documentId"],rF=["collectionGroup","readTime","prefixPath","documentId"],iF=["canonicalId","targetId"],sF=["targetId","path"],oF=["path","targetId"],aF=["collectionId","parent"],uF=["indexId","uid"],lF=["uid","sequenceNumber"],cF=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],hF=["indexId","uid","orderedDocumentKey"],dF=["userId","collectionPath","documentId"],fF=["userId","collectionPath","largestBatchId"],pF=["userId","collectionGroup","largestBatchId"],rk=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],mF=[...rk,"documentOverlays"],ik=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],sk=ik,gF=[...sk,"indexConfiguration","indexState","indexEntries"];/**
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
 */class lm extends wT{constructor(e,n){super(),this.ie=e,this.currentSequenceNumber=n}}function lt(t,e){const n=L(t);return bn.M(n.ie,e)}/**
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
 */class Ey{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&RM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=$a(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=$a(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=jT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=MT(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(j.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&go(this.mutations,e.mutations,(n,r)=>R0(n,r))&&go(this.baseMutations,e.baseMutations,(n,r)=>R0(n,r))}}class Sy{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){q(e.mutations.length===r.length);let i=$M;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Sy(e,n,r,i)}}/**
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
 */class Ty{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Xr{constructor(e,n,r,i,s=j.min(),o=j.min(),a=Qe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Xr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class ok{constructor(e){this.re=e}}function yF(t,e){let n;if(e.document)n=YT(t.re,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=D.fromSegments(e.noDocument.path),i=us(e.noDocument.readTime);n=ve.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return V();{const r=D.fromSegments(e.unknownDocument.path),i=us(e.unknownDocument.version);n=ve.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(r){const i=new Ce(r[0],r[1]);return j.fromTimestamp(i)}(e.readTime)),n}function B0(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:eh(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:Su(i,s.key),fields:s.data.value.mapValue.fields,updateTime:Eu(i,s.version.toTimestamp())}}(t.re,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:as(e.version)};else{if(!e.isUnknownDocument())return V();r.unknownDocument={path:n.path.toArray(),version:as(e.version)}}return r}function eh(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function as(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function us(t){const e=new Ce(t.seconds,t.nanoseconds);return j.fromTimestamp(e)}function bi(t,e){const n=(e.baseMutations||[]).map(s=>um(t.re,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>um(t.re,s)),i=Ce.fromMillis(e.localWriteTimeMs);return new Ey(e.batchId,i,n,r)}function wa(t){const e=us(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?us(t.lastLimboFreeSnapshotVersion):j.min();let r;var i;return t.query.documents!==void 0?(q((i=t.query).documents.length===1),r=en(Mo(KT(i.documents[0])))):r=function(s){return en(ZT(s))}(t.query),new Xr(r,t.targetId,0,t.lastListenSequenceNumber,e,n,Qe.fromBase64String(t.resumeToken))}function ak(t,e){const n=as(e.snapshotVersion),r=as(e.lastLimboFreeSnapshotVersion);let i;i=Xc(e.target)?XT(t.re,e.target):JT(t.re,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:is(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function ky(t){const e=ZT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Zc(e,e.limit,"L"):e}function Rf(t,e){return new Ty(e.largestBatchId,um(t.re,e.overlayMutation))}function z0(t,e){const n=e.path.lastSegment();return[t,Bt(e.path.popLast()),n]}function j0(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:as(r.readTime),documentKey:Bt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class vF{getBundleMetadata(e,n){return q0(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:us(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return q0(e).put({bundleId:(r=n).id,createTime:as(it(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return W0(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:ky(i.bundledQuery),readTime:us(i.readTime)};var i})}saveNamedQuery(e,n){return W0(e).put(function(r){return{name:r.name,readTime:as(it(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function q0(t){return lt(t,"bundles")}function W0(t){return lt(t,"namedQueries")}/**
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
 */class Ed{constructor(e,n){this.It=e,this.userId=n}static oe(e,n){const r=n.uid||"";return new Ed(e,r)}getOverlay(e,n){return ia(e).get(z0(this.userId,n)).next(r=>r?Rf(this.It,r):null)}getOverlays(e,n){const r=qn();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Ty(n,o);i.push(this.ue(e,a))}),w.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Bt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(ia(e).Y("collectionPathOverlayIndex",a))}),w.waitFor(s)}getOverlaysForCollection(e,n,r){const i=qn(),s=Bt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ia(e).W("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const l=Rf(this.It,u);i.set(l.getKey(),l)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=qn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return ia(e).Z({index:"collectionGroupOverlayIndex",range:a},(u,l,c)=>{const h=Rf(this.It,l);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):c.done()}).next(()=>s)}ue(e,n){return ia(e).put(function(r,i,s){const[o,a,u]=z0(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:u,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:ku(r.re,s.mutation)}}(this.It,this.userId,n))}}function ia(t){return lt(t,"documentOverlays")}/**
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
 */class Ni{constructor(){}ce(e,n){this.ae(e,n),n.he()}ae(e,n){if("nullValue"in e)this.le(n,5);else if("booleanValue"in e)this.le(n,10),n.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(n,15),n.fe(Oe(e.integerValue));else if("doubleValue"in e){const r=Oe(e.doubleValue);isNaN(r)?this.le(n,13):(this.le(n,15),wu(r)?n.fe(0):n.fe(r))}else if("timestampValue"in e){const r=e.timestampValue;this.le(n,20),typeof r=="string"?n.de(r):(n.de(`${r.seconds||""}`),n.fe(r.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,n),this.we(n);else if("bytesValue"in e)this.le(n,30),n.me(ts(e.bytesValue)),this.we(n);else if("referenceValue"in e)this.ge(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.le(n,45),n.fe(r.latitude||0),n.fe(r.longitude||0)}else"mapValue"in e?ST(e)?this.le(n,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,n),this.we(n)):"arrayValue"in e?(this.pe(e.arrayValue,n),this.we(n)):V()}_e(e,n){this.le(n,25),this.Ie(e,n)}Ie(e,n){n.de(e)}ye(e,n){const r=e.fields||{};this.le(n,55);for(const i of Object.keys(r))this._e(i,n),this.ae(r[i],n)}pe(e,n){const r=e.values||[];this.le(n,50);for(const i of r)this.ae(i,n)}ge(e,n){this.le(n,37),D.fromName(e).path.forEach(r=>{this.le(n,60),this.Ie(r,n)})}le(e,n){e.fe(n)}we(e){e.fe(2)}}Ni.Te=new Ni;function wF(t){if(t===0)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function G0(t){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const s=wF(255&n[i]);if(r+=s,s!==8)break}return r}(t);return Math.ceil(e/8)}class IF{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ee(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ae(r.value),r=n.next();this.Re()}be(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Pe(r.value),r=n.next();this.ve()}Ve(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ae(r);else if(r<2048)this.Ae(960|r>>>6),this.Ae(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ae(480|r>>>12),this.Ae(128|63&r>>>6),this.Ae(128|63&r);else{const i=n.codePointAt(0);this.Ae(240|i>>>18),this.Ae(128|63&i>>>12),this.Ae(128|63&i>>>6),this.Ae(128|63&i)}}this.Re()}Se(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Pe(r);else if(r<2048)this.Pe(960|r>>>6),this.Pe(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Pe(480|r>>>12),this.Pe(128|63&r>>>6),this.Pe(128|63&r);else{const i=n.codePointAt(0);this.Pe(240|i>>>18),this.Pe(128|63&i>>>12),this.Pe(128|63&i>>>6),this.Pe(128|63&i)}}this.ve()}De(e){const n=this.Ce(e),r=G0(n);this.xe(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Ne(e){const n=this.Ce(e),r=G0(n);this.xe(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}ke(){this.Oe(255),this.Oe(255)}Me(){this.Fe(255),this.Fe(255)}reset(){this.position=0}seed(e){this.xe(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Ce(e){const n=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ae(e){const n=255&e;n===0?(this.Oe(0),this.Oe(255)):n===255?(this.Oe(255),this.Oe(0)):this.Oe(n)}Pe(e){const n=255&e;n===0?(this.Fe(0),this.Fe(255)):n===255?(this.Fe(255),this.Fe(0)):this.Fe(e)}Re(){this.Oe(0),this.Oe(1)}ve(){this.Fe(0),this.Fe(1)}Oe(e){this.xe(1),this.buffer[this.position++]=e}Fe(e){this.xe(1),this.buffer[this.position++]=~e}xe(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class _F{constructor(e){this.Be=e}me(e){this.Be.Ee(e)}de(e){this.Be.Ve(e)}fe(e){this.Be.De(e)}he(){this.Be.ke()}}class EF{constructor(e){this.Be=e}me(e){this.Be.be(e)}de(e){this.Be.Se(e)}fe(e){this.Be.Ne(e)}he(){this.Be.Me()}}class sa{constructor(){this.Be=new IF,this.Le=new _F(this.Be),this.Ue=new EF(this.Be)}seed(e){this.Be.seed(e)}qe(e){return e===0?this.Le:this.Ue}$e(){return this.Be.$e()}reset(){this.Be.reset()}}/**
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
 */class Di{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Ke(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Di(this.indexId,this.documentKey,this.arrayValue,r)}}function Ei(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=H0(t.arrayValue,e.arrayValue),n!==0?n:(n=H0(t.directionalValue,e.directionalValue),n!==0?n:D.comparator(t.documentKey,e.documentKey)))}function H0(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class SF{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ge=e.orderBy,this.Qe=[];for(const n of e.filters){const r=n;r.dt()?this.je=r:this.Qe.push(r)}}We(e){const n=rm(e);if(n!==void 0&&!this.ze(n))return!1;const r=Ai(e);let i=0,s=0;for(;i<r.length&&this.ze(r[i]);++i);if(i===r.length)return!0;if(this.je!==void 0){const o=r[i];if(!this.He(this.je,o)||!this.Je(this.Ge[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Ge.length||!this.Je(this.Ge[s++],o))return!1}return!0}ze(e){for(const n of this.Qe)if(this.He(n,e))return!0;return!1}He(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}Je(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */class TF{constructor(){this.Ye=new Cy}addToCollectionParentIndex(e,n){return this.Ye.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n){return w.resolve(null)}getIndexType(e,n){return w.resolve(0)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,n){return w.resolve(hn.min())}getMinOffsetFromCollectionGroup(e,n){return w.resolve(hn.min())}updateCollectionGroup(e,n,r){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class Cy{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ge(se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ge(se.comparator)).toArray()}}/**
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
 */const $l=new Uint8Array(0);class kF{constructor(e,n){this.user=e,this.databaseId=n,this.Xe=new Cy,this.Ze=new Ii(r=>is(r),(r,i)=>Xu(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.Xe.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.Xe.add(n)});const s={collectionId:r,parent:Bt(i)};return K0(e).put(s)}return w.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[pT(n),""],!1,!0);return K0(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Wn(o.parent))}return r})}addFieldIndex(e,n){const r=Ml(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=aa(e);return s.next(a=>{o.put(j0(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Ml(e),i=aa(e),s=oa(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=oa(e);let i=!0;const s=new Map;return w.forEach(this.tn(n),o=>this.en(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=Z();const a=[];return w.forEach(s,(u,l)=>{var c;C("IndexedDbIndexManager",`Using index ${c=u,`id=${c.indexId}|cg=${c.collectionGroup}|f=${c.fields.map(y=>`${y.fieldPath}:${y.kind}`).join(",")}`} to execute ${is(n)}`);const h=function(y,_){const T=rm(_);if(T===void 0)return null;for(const x of Jc(y,T.fieldPath))switch(x.op){case"array-contains-any":return x.value.arrayValue.values||[];case"array-contains":return[x.value]}return null}(l,u),d=function(y,_){const T=new Map;for(const x of Ai(_))for(const N of Jc(y,x.fieldPath))switch(N.op){case"==":case"in":T.set(x.fieldPath.canonicalString(),N.value);break;case"not-in":case"!=":return T.set(x.fieldPath.canonicalString(),N.value),Array.from(T.values())}return null}(l,u),p=function(y,_){const T=[];let x=!0;for(const N of Ai(_)){const $=N.kind===0?C0(y,N.fieldPath,y.startAt):A0(y,N.fieldPath,y.startAt);T.push($.value),x&&(x=$.inclusive)}return new ui(T,x)}(l,u),g=function(y,_){const T=[];let x=!0;for(const N of Ai(_)){const $=N.kind===0?A0(y,N.fieldPath,y.endAt):C0(y,N.fieldPath,y.endAt);T.push($.value),x&&(x=$.inclusive)}return new ui(T,x)}(l,u),v=this.nn(u,l,p),S=this.nn(u,l,g),m=this.sn(u,l,d),f=this.rn(u.indexId,h,v,p.inclusive,S,g.inclusive,m);return w.forEach(f,y=>r.J(y,n.limit).next(_=>{_.forEach(T=>{const x=D.fromSegments(T.documentKey);o.has(x)||(o=o.add(x),a.push(x))})}))}).next(()=>a)}return w.resolve(null)})}tn(e){let n=this.Ze.get(e);return n||(n=[e],this.Ze.set(e,n),n)}rn(e,n,r,i,s,o,a){const u=(n!=null?n.length:1)*Math.max(r.length,s.length),l=u/(n!=null?n.length:1),c=[];for(let h=0;h<u;++h){const d=n?this.on(n[h/l]):$l,p=this.un(e,d,r[h%l],i),g=this.cn(e,d,s[h%l],o),v=a.map(S=>this.un(e,d,S,!0));c.push(...this.createRange(p,g,v))}return c}un(e,n,r,i){const s=new Di(e,D.empty(),n,r);return i?s:s.Ke()}cn(e,n,r,i){const s=new Di(e,D.empty(),n,r);return i?s.Ke():s}en(e,n){const r=new SF(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.We(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;return w.forEach(this.tn(n),i=>this.en(e,i).next(s=>{s?r!==0&&s.fields.length<function(o){let a=new ge(ze.comparator),u=!1;for(const l of o.filters){const c=l;c.field.isKeyField()||(c.op==="array-contains"||c.op==="array-contains-any"?u=!0:a=a.add(c.field))}for(const l of o.orderBy)l.field.isKeyField()||(a=a.add(l.field));return a.size+(u?1:0)}(i)&&(r=1):r=0})).next(()=>r)}an(e,n){const r=new sa;for(const i of Ai(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.qe(i.kind);Ni.Te.ce(s,o)}return r.$e()}on(e){const n=new sa;return Ni.Te.ce(e,n.qe(0)),n.$e()}hn(e,n){const r=new sa;return Ni.Te.ce(rs(this.databaseId,n),r.qe(function(i){const s=Ai(i);return s.length===0?0:s[s.length-1].kind}(e))),r.$e()}sn(e,n,r){if(r===null)return[];let i=[];i.push(new sa);let s=0;for(const o of Ai(e)){const a=r[s++];for(const u of i)if(this.ln(n,o.fieldPath)&&_u(a))i=this.fn(i,o,a);else{const l=u.qe(o.kind);Ni.Te.ce(a,l)}}return this.dn(i)}nn(e,n,r){return this.sn(e,n,r.position)}dn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].$e();return n}fn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new sa;u.seed(a.$e()),Ni.Te.ce(o,u.qe(n.kind)),s.push(u)}return s}ln(e,n){return!!e.filters.find(r=>r instanceof vt&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Ml(e),i=aa(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(s=>{const o=[];return w.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(l,c){const h=c?new Yc(c.sequenceNumber,new hn(us(c.readTime),new D(Wn(c.documentKey)),c.largestBatchId)):Yc.empty(),d=l.fields.map(([p,g])=>new aM(ze.fromServerFormat(p),g));return new mT(l.indexId,l.collectionGroup,d,h)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:J(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Ml(e),s=aa(e);return this._n(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>w.forEach(a,u=>s.put(j0(u.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return w.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?w.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),w.forEach(a,u=>this.wn(e,i,u).next(l=>{const c=this.mn(s,u);return l.isEqual(c)?w.resolve():this.gn(e,s,u,l,c)}))))})}yn(e,n,r,i){return oa(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.hn(r,n.key),documentKey:n.key.path.toArray()})}pn(e,n,r,i){return oa(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.hn(r,n.key),n.key.path.toArray()])}wn(e,n,r){const i=oa(e);let s=new ge(Ei);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.hn(r,n)])},(o,a)=>{s=s.add(new Di(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}mn(e,n){let r=new ge(Ei);const i=this.an(n,e);if(i==null)return r;const s=rm(n);if(s!=null){const o=e.data.field(s.fieldPath);if(_u(o))for(const a of o.arrayValue.values||[])r=r.add(new Di(n.indexId,e.key,this.on(a),i))}else r=r.add(new Di(n.indexId,e.key,$l,i));return r}gn(e,n,r,i,s){C("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,u,l,c,h){const d=a.getIterator(),p=u.getIterator();let g=Ts(d),v=Ts(p);for(;g||v;){let S=!1,m=!1;if(g&&v){const f=l(g,v);f<0?m=!0:f>0&&(S=!0)}else g!=null?m=!0:S=!0;S?(c(v),v=Ts(p)):m?(h(g),g=Ts(d)):(g=Ts(d),v=Ts(p))}}(i,s,Ei,a=>{o.push(this.yn(e,n,r,a))},a=>{o.push(this.pn(e,n,r,a))}),w.waitFor(o)}_n(e){let n=1;return aa(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Ei(o,a)).filter((o,a,u)=>!a||Ei(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Ei(o,e),u=Ei(o,n);if(a===0)i[0]=e.Ke();else if(a>0&&u<0)i.push(o),i.push(o.Ke());else if(u>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2)s.push(IDBKeyRange.bound([i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,$l,[]],[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,$l,[]]));return s}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(Q0)}getMinOffset(e,n){return w.mapArray(this.tn(n),r=>this.en(e,r).next(i=>i||V())).next(Q0)}}function K0(t){return lt(t,"collectionParents")}function oa(t){return lt(t,"indexEntries")}function Ml(t){return lt(t,"indexConfiguration")}function aa(t){return lt(t,"indexState")}function Q0(t){q(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;fy(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new hn(e.readTime,e.documentKey,n)}/**
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
 */const Y0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Gt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Gt(e,Gt.DEFAULT_COLLECTION_PERCENTILE,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function uk(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.Z({range:o},(c,h,d)=>(a++,d.delete()));s.push(u.next(()=>{q(a===1)}));const l=[];for(const c of n.mutations){const h=nk(e,c.key.path,n.batchId);s.push(i.delete(h)),l.push(c.key)}return w.waitFor(s).next(()=>l)}function th(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw V();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */Gt.DEFAULT_COLLECTION_PERCENTILE=10,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Gt.DEFAULT=new Gt(41943040,Gt.DEFAULT_COLLECTION_PERCENTILE,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Gt.DISABLED=new Gt(-1,0,0);class Sd{constructor(e,n,r,i){this.userId=e,this.It=n,this.indexManager=r,this.referenceDelegate=i,this.In={}}static oe(e,n,r,i){q(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Sd(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return br(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=As(e),o=br(e);return o.add({}).next(a=>{q(typeof a=="number");const u=new Ey(a,n,r,i),l=function(d,p,g){const v=g.baseMutations.map(m=>ku(d.re,m)),S=g.mutations.map(m=>ku(d.re,m));return{userId:p,batchId:g.batchId,localWriteTimeMs:g.localWriteTime.toMillis(),baseMutations:v,mutations:S}}(this.It,this.userId,u),c=[];let h=new ge((d,p)=>J(d.canonicalString(),p.canonicalString()));for(const d of i){const p=nk(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(l)),c.push(s.put(p,eF))}return h.forEach(d=>{c.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.In[a]=u.keys()}),w.waitFor(c).next(()=>u)})}lookupMutationBatch(e,n){return br(e).get(n).next(r=>r?(q(r.userId===this.userId),bi(this.It,r)):null)}Tn(e,n){return this.In[n]?w.resolve(this.In[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.In[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return br(e).Z({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(q(a.batchId>=r),s=bi(this.It,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return br(e).Z({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return br(e).W("userMutationsIndex",n).next(r=>r.map(i=>bi(this.It,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=ac(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return As(e).Z({range:i},(o,a,u)=>{const[l,c,h]=o,d=Wn(c);if(l===this.userId&&n.path.isEqual(d))return br(e).get(h).next(p=>{if(!p)throw V();q(p.userId===this.userId),s.push(bi(this.It,p))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ge(J);const i=[];return n.forEach(s=>{const o=ac(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=As(e).Z({range:a},(l,c,h)=>{const[d,p,g]=l,v=Wn(p);d===this.userId&&s.path.isEqual(v)?r=r.add(g):h.done()});i.push(u)}),w.waitFor(i).next(()=>this.En(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=ac(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new ge(J);return As(e).Z({range:o},(u,l,c)=>{const[h,d,p]=u,g=Wn(d);h===this.userId&&r.isPrefixOf(g)?g.length===i&&(a=a.add(p)):c.done()}).next(()=>this.En(e,a))}En(e,n){const r=[],i=[];return n.forEach(s=>{i.push(br(e).get(s).next(o=>{if(o===null)throw V();q(o.userId===this.userId),r.push(bi(this.It,o))}))}),w.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return uk(e.ie,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.An(n.batchId)}),w.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return w.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return As(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=Wn(s[1]);i.push(u)}else a.done()}).next(()=>{q(i.length===0)})})}containsKey(e,n){return lk(e,this.userId,n)}Rn(e){return ck(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function lk(t,e,n){const r=ac(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return As(t).Z({range:s,X:!0},(a,u,l)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),l.done()}).next(()=>o)}function br(t){return lt(t,"mutations")}function As(t){return lt(t,"documentMutations")}function ck(t){return lt(t,"mutationQueues")}/**
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
 */class ls{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new ls(0)}static vn(){return new ls(-1)}}/**
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
 */class CF{constructor(e,n){this.referenceDelegate=e,this.It=n}allocateTargetId(e){return this.Vn(e).next(n=>{const r=new ls(n.highestTargetId);return n.highestTargetId=r.next(),this.Sn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(n=>j.fromTimestamp(new Ce(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Vn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Sn(e,i)))}addTargetData(e,n){return this.Dn(e,n).next(()=>this.Vn(e).next(r=>(r.targetCount+=1,this.Cn(n,r),this.Sn(e,r))))}updateTargetData(e,n){return this.Dn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Cs(e).delete(n.targetId)).next(()=>this.Vn(e)).next(r=>(q(r.targetCount>0),r.targetCount-=1,this.Sn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return Cs(e).Z((o,a)=>{const u=wa(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>w.waitFor(s)).next(()=>i)}forEachTarget(e,n){return Cs(e).Z((r,i)=>{const s=wa(i);n(s)})}Vn(e){return X0(e).get("targetGlobalKey").next(n=>(q(n!==null),n))}Sn(e,n){return X0(e).put("targetGlobalKey",n)}Dn(e,n){return Cs(e).put(ak(this.It,n))}Cn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Vn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=is(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Cs(e).Z({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const l=wa(a);Xu(n,l.target)&&(s=l,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Lr(e);return n.forEach(o=>{const a=Bt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),w.waitFor(i)}removeMatchingKeys(e,n,r){const i=Lr(e);return w.forEach(n,s=>{const o=Bt(s.path);return w.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Lr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Lr(e);let s=Z();return i.Z({range:r,X:!0},(o,a,u)=>{const l=Wn(o[1]),c=new D(l);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=Bt(n.path),i=IDBKeyRange.bound([r],[pT(r)],!1,!0);let s=0;return Lr(e).Z({index:"documentTargetsIndex",X:!0,range:i},([o,a],u,l)=>{o!==0&&(s++,l.done())}).next(()=>s>0)}se(e,n){return Cs(e).get(n).next(r=>r?wa(r):null)}}function Cs(t){return lt(t,"targets")}function X0(t){return lt(t,"targetGlobal")}function Lr(t){return lt(t,"targetDocuments")}/**
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
 */function J0([t,e],[n,r]){const i=J(t,n);return i===0?J(e,r):i}class AF{constructor(e){this.xn=e,this.buffer=new ge(J0),this.Nn=0}kn(){return++this.Nn}On(e){const n=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();J0(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class xF{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Mn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return this.Mn!==null}Fn(e){C("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){wi(n)?C("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await vi(n)}await this.Fn(3e5)})}}class bF{constructor(e,n){this.$n=e,this.params=n}calculateTargetCount(e,n){return this.$n.Bn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return w.resolve(Qt.at);const r=new AF(n);return this.$n.forEachTarget(e,i=>r.On(i.sequenceNumber)).next(()=>this.$n.Ln(e,i=>r.On(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.$n.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.$n.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(C("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(Y0)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Y0):this.Un(e,n))}getCacheSize(e){return this.$n.getCacheSize(e)}Un(e,n){let r,i,s,o,a,u,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(C("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(l=Date.now(),nm()<=oe.DEBUG&&C("LruGarbageCollector",`LRU Garbage Collection
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
 */class NF{constructor(e,n){this.db=e,this.garbageCollector=function(r,i){return new bF(r,i)}(this,n)}Bn(e){const n=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}qn(e){let n=0;return this.Ln(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Ln(e,n){return this.Kn(e,(r,i)=>n(i))}addReference(e,n,r){return Fl(e,r)}removeReference(e,n,r){return Fl(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Fl(e,n)}Gn(e,n){return function(r,i){let s=!1;return ck(r).tt(o=>lk(r,o,i).next(a=>(a&&(s=!0),w.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Kn(e,(o,a)=>{if(a<=n){const u=this.Gn(e,o).next(l=>{if(!l)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,j.min()),Lr(e).delete([0,Bt(o.path)])))});i.push(u)}}).next(()=>w.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Fl(e,n)}Kn(e,n){const r=Lr(e);let i,s=Qt.at;return r.Z({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:l})=>{o===0?(s!==Qt.at&&n(new D(Wn(i)),s),s=l,i=u):s=Qt.at}).next(()=>{s!==Qt.at&&n(new D(Wn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Fl(t,e){return Lr(t).put(function(n,r){return{targetId:0,path:Bt(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
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
 */class hk{constructor(){this.changes=new Ii(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ve.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?w.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class DF{constructor(e){this.It=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Si(e).put(r)}removeEntry(e,n,r){return Si(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],eh(s),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Qn(e,r)))}getEntry(e,n){let r=ve.newInvalidDocument(n);return Si(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(ua(n))},(i,s)=>{r=this.jn(n,s)}).next(()=>r)}Wn(e,n){let r={size:0,document:ve.newInvalidDocument(n)};return Si(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(ua(n))},(i,s)=>{r={document:this.jn(n,s),size:th(s)}}).next(()=>r)}getEntries(e,n){let r=Yt();return this.zn(e,n,(i,s)=>{const o=this.jn(i,s);r=r.insert(i,o)}).next(()=>r)}Hn(e,n){let r=Yt(),i=new $e(D.comparator);return this.zn(e,n,(s,o)=>{const a=this.jn(s,o);r=r.insert(s,a),i=i.insert(s,th(o))}).next(()=>({documents:r,Jn:i}))}zn(e,n,r){if(n.isEmpty())return w.resolve();let i=new ge(tI);n.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(ua(i.first()),ua(i.last())),o=i.getIterator();let a=o.getNext();return Si(e).Z({index:"documentKeyIndex",range:s},(u,l,c)=>{const h=D.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&tI(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,l),a=o.hasNext()?o.getNext():null),a?c.j(ua(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,n,r){const i=[n.popLast().toArray(),n.lastSegment(),eh(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],s=[n.popLast().toArray(),n.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Si(e).W(IDBKeyRange.bound(i,s,!0)).next(o=>{let a=Yt();for(const u of o){const l=this.jn(D.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);a=a.insert(l.key,l)}return a})}getAllFromCollectionGroup(e,n,r,i){let s=Yt();const o=eI(n,r),a=eI(n,hn.max());return Si(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,l,c)=>{const h=this.jn(D.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);s=s.insert(h.key,h),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new RF(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return Z0(e).get("remoteDocumentGlobalKey").next(n=>(q(!!n),n))}Qn(e,n){return Z0(e).put("remoteDocumentGlobalKey",n)}jn(e,n){if(n){const r=yF(this.It,n);if(!(r.isNoDocument()&&r.version.isEqual(j.min())))return r}return ve.newInvalidDocument(e)}}function dk(t){return new DF(t)}class RF extends hk{constructor(e,n){super(),this.Yn=e,this.trackRemovals=n,this.Xn=new Ii(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new ge((s,o)=>J(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.Xn.get(s);if(n.push(this.Yn.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=B0(this.Yn.It,o);i=i.add(s.path.popLast());const l=th(u);r+=l-a.size,n.push(this.Yn.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=B0(this.Yn.It,o.convertToNoDocument(j.min()));n.push(this.Yn.addEntry(e,s,u))}}),i.forEach(s=>{n.push(this.Yn.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.Yn.updateMetadata(e,r)),w.waitFor(n)}getFromCache(e,n){return this.Yn.Wn(e,n).next(r=>(this.Xn.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.Yn.Hn(e,n).next(({documents:r,Jn:i})=>(i.forEach((s,o)=>{this.Xn.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function Z0(t){return lt(t,"remoteDocumentGlobal")}function Si(t){return lt(t,"remoteDocumentsV14")}function ua(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function eI(t,e){const n=e.documentKey.path.toArray();return[t,eh(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function tI(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=J(n[s],r[s]),i)return i;return i=J(n.length,r.length),i||(i=J(n[n.length-2],r[r.length-2]),i||J(n[n.length-1],r[r.length-1]))}/**
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
 */class PF{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class fk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&$a(r.mutation,i,un.empty(),Ce.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Z()){const i=qn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=va();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=qn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Z()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Yt();const o=Ma(),a=Ma();return n.forEach((u,l)=>{const c=r.get(l.key);i.has(l.key)&&(c===void 0||c.mutation instanceof Tr)?s=s.insert(l.key,l):c!==void 0&&(o.set(l.key,c.mutation.getFieldMask()),$a(c.mutation,l,c.mutation.getFieldMask(),Ce.now()))}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var h;return a.set(l,new PF(c,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ma();let i=new $e((o,a)=>o-a),s=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let c=r.get(u)||un.empty();c=a.applyToLocalView(l,c),r.set(u,c);const h=(i.get(a.batchId)||Z()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,h=jT();c.forEach(d=>{if(!s.has(d)){const p=MT(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return w.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return D.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):vy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):w.resolve(qn());let a=-1,u=s;return o.next(l=>w.forEach(l,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?w.resolve():this.getBaseDocument(e,c,h).next(d=>{u=u.insert(c,d)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,u,l,Z())).next(c=>({batchId:a,changes:zT(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new D(n)).next(r=>{let i=va();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=va();return this.indexManager.getCollectionParents(e,i).next(o=>w.forEach(o,a=>{const u=function(l,c){return new Sr(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r).next(l=>{l.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,u)=>{const l=u.getKey();i.get(l)===null&&(i=i.insert(l,ve.newInvalidDocument(l)))});let o=va();return i.forEach((a,u)=>{const l=s.get(a);l!==void 0&&$a(l.mutation,u,un.empty(),Ce.now()),wy(n,u)&&(o=o.insert(a,u))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):w.resolve(ve.newInvalidDocument(n))}}/**
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
 */class OF{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return w.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:it(r.createTime)}),w.resolve()}getNamedQuery(e,n){return w.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:ky(r.bundledQuery),readTime:it(r.readTime)}}(n)),w.resolve()}}/**
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
 */class LF{constructor(){this.overlays=new $e(D.comparator),this.es=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}getOverlays(e,n){const r=qn();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),w.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),w.resolve()}getOverlaysForCollection(e,n,r){const i=qn(),s=n.length+1,o=new D(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return w.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new $e((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let c=s.get(l.largestBatchId);c===null&&(c=qn(),s=s.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=qn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=i)););return w.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ty(n,r));let s=this.es.get(n);s===void 0&&(s=Z(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
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
 */class Ay{constructor(){this.ns=new ge(Je.ss),this.rs=new ge(Je.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Je(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Je(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new D(new se([])),r=new Je(n,e),i=new Je(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new D(new se([])),r=new Je(n,e),i=new Je(n,e+1);let s=Z();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Je(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return D.comparator(e.key,n.key)||J(e._s,n._s)}static os(e,n){return J(e._s,n._s)||D.comparator(e.key,n.key)}}/**
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
 */class $F{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new ge(Je.ss)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ey(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Je(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return w.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),i=new Je(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),w.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ge(J);return n.forEach(i=>{const s=new Je(i,0),o=new Je(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),w.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;D.isDocumentKey(s)||(s=s.child(""));const o=new Je(new D(s),0);let a=new ge(J);return this.gs.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u._s)),!0)},o),w.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){q(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return w.forEach(n.mutations,i=>{const s=new Je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Je(n,0),i=this.gs.firstAfterOrEqual(r);return w.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class MF{constructor(e){this.Es=e,this.docs=new $e(D.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return w.resolve(r?r.document.mutableCopy():ve.newInvalidDocument(n))}getEntries(e,n){let r=Yt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ve.newInvalidDocument(i))}),w.resolve(r)}getAllFromCollection(e,n,r){let i=Yt();const s=new D(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||fy(yT(u),r)<=0||(i=i.insert(u.key,u.mutableCopy()))}return w.resolve(i)}getAllFromCollectionGroup(e,n,r,i){V()}As(e,n){return w.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new FF(this)}getSize(e){return w.resolve(this.size)}}class FF extends hk{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),w.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class UF{constructor(e){this.persistence=e,this.Rs=new Ii(n=>is(n),Xu),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ay,this.targetCount=0,this.vs=ls.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),w.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new ls(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.Dn(n),w.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),w.waitFor(s).next(()=>i)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return w.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),w.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),w.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),w.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return w.resolve(r)}containsKey(e,n){return w.resolve(this.Ps.containsKey(n))}}/**
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
 */class pk{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Qt(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new UF(this),this.indexManager=new TF,this.remoteDocumentCache=function(r){return new MF(r)}(r=>this.referenceDelegate.xs(r)),this.It=new ok(n),this.Ns=new OF(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new LF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new $F(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){C("MemoryPersistence","Starting transaction:",e);const i=new VF(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return w.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class VF extends wT{constructor(e){super(),this.currentSequenceNumber=e}}class Td{constructor(e){this.persistence=e,this.Fs=new Ay,this.$s=null}static Bs(e){return new Td(e)}get Ls(){if(this.$s)return this.$s;throw V()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),w.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),w.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.Ls,r=>{const i=D.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,j.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return w.or([()=>w.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class BF{constructor(e){this.It=e}$(e,n,r,i){const s=new vd("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",V0,{unique:!0}),a.createObjectStore("documentMutations")}(e),nI(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=w.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),nI(e)),o=o.next(()=>function(a){const u=a.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:j.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,u){return u.store("mutations").W().next(l=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",V0,{unique:!0});const c=u.store("mutations"),h=l.map(d=>c.put(d));return w.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.qs(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(s)))),r<7&&i>=7&&(o=o.next(()=>this.Gs(s))),r<8&&i>=8&&(o=o.next(()=>this.Qs(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.js(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const u=a.createObjectStore("documentOverlays",{keyPath:dF});u.createIndex("collectionPathOverlayIndex",fF,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",pF,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const u=a.createObjectStore("remoteDocumentsV14",{keyPath:tF});u.createIndex("documentKeyIndex",nF),u.createIndex("collectionGroupIndex",rF)}(e)).next(()=>this.Ws(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.zs(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:uF}).createIndex("sequenceNumberIndex",lF,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:cF}).createIndex("documentKeyIndex",hF,{unique:!1})}(e))),o}Ks(e){let n=0;return e.store("remoteDocuments").Z((r,i)=>{n+=th(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}qs(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(i=>w.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>w.forEach(a,u=>{q(u.userId===s.userId);const l=bi(this.It,u);return uk(e,s.userId,l).next(()=>{})}))}))}Gs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const u=new se(o),l=function(c){return[0,Bt(c)]}(u);s.push(n.get(l).next(c=>c?w.resolve():(h=>n.put({targetId:0,path:Bt(h),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>w.waitFor(s))})}Qs(e,n){e.createObjectStore("collectionParents",{keyPath:aF});const r=n.store("collectionParents"),i=new Cy,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:Bt(u)})}};return n.store("remoteDocuments").Z({X:!0},(o,a)=>{const u=new se(o);return s(u.popLast())}).next(()=>n.store("documentMutations").Z({X:!0},([o,a,u],l)=>{const c=Wn(a);return s(c.popLast())}))}js(e){const n=e.store("targets");return n.Z((r,i)=>{const s=wa(i),o=ak(this.It,s);return n.put(o)})}Ws(e,n){const r=n.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=n.store("remoteDocumentsV14"),u=(l=o,l.document?new D(se.fromString(l.document.name).popFirst(5)):l.noDocument?D.fromSegments(l.noDocument.path):l.unknownDocument?D.fromSegments(l.unknownDocument.path):V()).path.toArray();var l;/**
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
*/const c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>w.waitFor(i))}zs(e,n){const r=n.store("mutations"),i=dk(this.It),s=new pk(Td.Bs,this.It.re);return r.W().next(o=>{const a=new Map;return o.forEach(u=>{var l;let c=(l=a.get(u.userId))!==null&&l!==void 0?l:Z();bi(this.It,u).keys().forEach(h=>c=c.add(h)),a.set(u.userId,c)}),w.forEach(a,(u,l)=>{const c=new et(l),h=Ed.oe(this.It,c),d=s.getIndexManager(c),p=Sd.oe(c,this.It,d,s.referenceDelegate);return new fk(i,p,h,d).recalculateAndSaveOverlaysForDocumentKeys(new lm(n,Qt.at),u).next()})})}}function nI(t){t.createObjectStore("targetDocuments",{keyPath:sF}).createIndex("documentTargetsIndex",oF,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",iF,{unique:!0}),t.createObjectStore("targetGlobal")}const Pf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class xy{constructor(e,n,r,i,s,o,a,u,l,c,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Hs=s,this.window=o,this.document=a,this.Js=l,this.Ys=c,this.Xs=h,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=d=>Promise.resolve(),!xy.C())throw new k(E.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new NF(this,i),this.ii=n+"main",this.It=new ok(u),this.ri=new bn(this.ii,this.Xs,new BF(this.It)),this.Cs=new CF(this.referenceDelegate,this.It),this.remoteDocumentCache=dk(this.It),this.Ns=new vF,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,c===!1&&Be("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new k(E.FAILED_PRECONDITION,Pf);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new Qt(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Ul(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(n=>{n||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(n=>this.isPrimary&&!n?this._i(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(wi(e))return C("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return C("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return la(e).get("owner").next(n=>w.resolve(this.mi(n)))}gi(e){return Ul(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=lt(n,"clientMetadata");return r.W().next(i=>{const s=this.Ii(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return w.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.oi)for(const n of e)this.oi.removeItem(this.Ti(n.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?w.resolve(!0):la(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)){if(this.mi(n)&&this.networkEnabled)return!0;if(!this.mi(n)){if(!n.allowTabSynchronization)throw new k(E.FAILED_PRECONDITION,Pf);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ul(e).W().next(r=>this.Ii(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&C("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new lm(e,Qt.at);return this._i(n).next(()=>this.gi(n))}),this.ri.close(),this.Pi()}Ii(e,n){return e.filter(r=>this.pi(r.updateTimeMs,n)&&!this.Ei(r.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>Ul(e).W().next(n=>this.Ii(n,18e5).map(r=>r.clientId)))}get started(){return this.Ds}getMutationQueue(e,n){return Sd.oe(e,this.It,n,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new kF(e,this.It.re.databaseId)}getDocumentOverlayCache(e){return Ed.oe(this.It,e)}getBundleCache(){return this.Ns}runTransaction(e,n,r){C("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=(o=this.Xs)===15?gF:o===14?sk:o===13?ik:o===12?mF:o===11?rk:void V();var o;let a;return this.ri.runTransaction(e,i,s,u=>(a=new lm(u,this.Ss?this.Ss.next():Qt.at),n==="readwrite-primary"?this.fi(a).next(l=>!!l||this.di(a)).next(l=>{if(!l)throw Be(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new k(E.FAILED_PRECONDITION,vT);return r(a)}).next(l=>this.wi(a).next(()=>l)):this.Vi(a).next(()=>r(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}Vi(e){return la(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)&&!this.mi(n)&&!(this.Ys||this.allowTabSynchronization&&n.allowTabSynchronization))throw new k(E.FAILED_PRECONDITION,Pf)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return la(e).put("owner",n)}static C(){return bn.C()}_i(e){const n=la(e);return n.get("owner").next(r=>this.mi(r)?(C("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):w.resolve())}pi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Be(`Detected an update time that is in the future: ${e} > ${r}`),!1))}ci(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground=this.document.visibilityState==="visible")}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ai(),EN()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var n;try{const r=((n=this.oi)===null||n===void 0?void 0:n.getItem(this.Ti(e)))!==null;return C("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Be("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){Be("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch{}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function la(t){return lt(t,"owner")}function Ul(t){return lt(t,"clientMetadata")}function by(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class Ny{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=Z(),i=Z();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ny(e,n.fromCache,r,i)}}/**
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
 */class mk{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(N0(n))return w.resolve(null);let r=en(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Zc(n,null,"F"),r=en(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Z(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const l=this.Fi(n,a);return this.$i(n,l,o,u.readTime)?this.ki(e,Zc(n,null,"F")):this.Bi(e,l,n,u)}))})))}Oi(e,n,r,i){return N0(n)||i.isEqual(j.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(nm()<=oe.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),om(n)),this.Bi(e,o,n,gT(i,-1)))})}Fi(e,n){let r=new ge(bT(e));return n.forEach((i,s)=>{wy(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return nm()<=oe.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",om(n)),this.Ni.getDocumentsMatchingQuery(e,n,hn.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class zF{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new $e(J),this.qi=new Ii(s=>is(s),Xu),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fk(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function gk(t,e,n,r){return new zF(t,e,n,r)}async function yk(t,e){const n=L(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=Z();for(const l of i){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of s){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(r,u).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function jF(t,e){const n=L(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let d=w.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(g=>{const v=u.docVersions.get(p);q(v!==null),g.version.compareTo(v)<0&&(c.applyToRemoteDocument(g,u),g.isValidDocument()&&(g.setReadTime(u.commitVersion),l.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Z();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function vk(t){const e=L(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function qF(t,e){const n=L(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Qe.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(g,v,S){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(d,p,c)&&a.push(n.Cs.updateTargetData(s,p))});let u=Yt(),l=Z();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(wk(s,o,e.documentUpdates).next(c=>{u=c.Wi,l=c.zi})),!r.isEqual(j.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return w.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,l)).next(()=>u)}).then(s=>(n.Ui=i,s))}function wk(t,e,n){let r=Z(),i=Z();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Yt();return n.forEach((a,u)=>{const l=s.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(j.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):C("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{Wi:o,zi:i}})}function WF(t,e){const n=L(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Io(t,e){const n=L(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,w.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new Xr(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function _o(t,e,n){const r=L(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!wi(o))throw o;C("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function nh(t,e,n){const r=L(t);let i=j.min(),s=Z();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=L(a),h=c.qi.get(l);return h!==void 0?w.resolve(c.Ui.get(h)):c.Cs.getTargetData(u,l)}(r,o,en(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:j.min(),n?s:Z())).next(a=>(Ek(r,xT(e),a),{documents:a,Hi:s})))}function Ik(t,e){const n=L(t),r=L(n.Cs),i=n.Ui.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.se(s,e).next(o=>o?o.target:null))}function _k(t,e){const n=L(t),r=n.Ki.get(e)||j.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Gi.getAllFromCollectionGroup(i,e,gT(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(Ek(n,e,i),i))}function Ek(t,e,n){let r=t.Ki.get(e)||j.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}async function GF(t,e,n,r){const i=L(t);let s=Z(),o=Yt();for(const l of n){const c=e.Ji(l.metadata.name);l.document&&(s=s.add(c));const h=e.Yi(l);h.setReadTime(e.Xi(l.metadata.readTime)),o=o.insert(c,h)}const a=i.Gi.newChangeBuffer({trackRemovals:!0}),u=await Io(i,function(l){return en(Mo(se.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",l=>wk(l,a,o).next(c=>(a.apply(l),c)).next(c=>i.Cs.removeMatchingKeysForTargetId(l,u.targetId).next(()=>i.Cs.addMatchingKeys(l,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(l,c.Wi,c.zi)).next(()=>c.Wi)))}async function HF(t,e,n=Z()){const r=await Io(t,en(ky(e.bundledQuery))),i=L(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=it(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Ns.saveNamedQuery(s,e);const a=r.withResumeToken(Qe.EMPTY_BYTE_STRING,o);return i.Ui=i.Ui.insert(a.targetId,a),i.Cs.updateTargetData(s,a).next(()=>i.Cs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Cs.addMatchingKeys(s,n,r.targetId)).next(()=>i.Ns.saveNamedQuery(s,e))})}function rI(t,e){return`firestore_clients_${t}_${e}`}function iI(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Of(t,e){return`firestore_targets_${t}_${e}`}class rh{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Zi(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new k(i.error.code,i.error.message))),o?new rh(e,n,i.state,s):(Be("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Fa{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Zi(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new k(r.error.code,r.error.message))),s?new Fa(e,r.state,i):(Be("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ih{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Zi(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=_d();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=ET(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new ih(e,s):(Be("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Dy{constructor(e,n){this.clientId=e,this.onlineState=n}static Zi(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Dy(n.clientId,n.onlineState):(Be("SharedClientState",`Failed to parse online state: ${e}`),null)}}class cm{constructor(){this.activeTargetIds=_d()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Lf{constructor(e,n,r,i,s){this.window=e,this.Hs=n,this.persistenceKey=r,this.sr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new $e(J),this.started=!1,this.cr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ar=rI(this.persistenceKey,this.sr),this.hr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.ur=this.ur.insert(this.sr,new cm),this.lr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.mr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const r of e){if(r===this.sr)continue;const i=this.getItem(rI(this.persistenceKey,r));if(i){const s=ih.Zi(r,i);s&&(this.ur=this.ur.insert(s.clientId,s))}}this.gr();const n=this.storage.getItem(this.wr);if(n){const r=this.yr(n);r&&this.pr(r)}for(const r of this.cr)this.rr(r);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let n=!1;return this.ur.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,n,r){this.Tr(e,n,r),this.Er(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Of(this.persistenceKey,e));if(r){const i=Fa.Zi(e,r);i&&(n=i.state)}}return this.Ar.er(e),this.gr(),n}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Of(this.persistenceKey,e))}updateQueryState(e,n,r){this.Rr(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Er(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return C("SharedClientState","READ",e,n),n}setItem(e,n){C("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){C("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const n=e;if(n.storageArea===this.storage){if(C("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ar)return void Be("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.lr.test(n.key)){if(n.newValue==null){const r=this.vr(n.key);return this.Vr(r,null)}{const r=this.Sr(n.key,n.newValue);if(r)return this.Vr(r.clientId,r)}}else if(this.dr.test(n.key)){if(n.newValue!==null){const r=this.Dr(n.key,n.newValue);if(r)return this.Cr(r)}}else if(this._r.test(n.key)){if(n.newValue!==null){const r=this.Nr(n.key,n.newValue);if(r)return this.kr(r)}}else if(n.key===this.wr){if(n.newValue!==null){const r=this.yr(n.newValue);if(r)return this.pr(r)}}else if(n.key===this.hr){const r=function(i){let s=Qt.at;if(i!=null)try{const o=JSON.parse(i);q(typeof o=="number"),s=o}catch(o){Be("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==Qt.at&&this.sequenceNumberHandler(r)}else if(n.key===this.mr){const r=this.Or(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Mr(i)))}}}else this.cr.push(n)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,n,r){const i=new rh(this.currentUser,e,n,r),s=iI(this.persistenceKey,this.currentUser,e);this.setItem(s,i.tr())}Er(e){const n=iI(this.persistenceKey,this.currentUser,e);this.removeItem(n)}br(e){const n={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(n))}Rr(e,n,r){const i=Of(this.persistenceKey,e),s=new Fa(e,n,r);this.setItem(i,s.tr())}Pr(e){const n=JSON.stringify(Array.from(e));this.setItem(this.mr,n)}vr(e){const n=this.lr.exec(e);return n?n[1]:null}Sr(e,n){const r=this.vr(e);return ih.Zi(r,n)}Dr(e,n){const r=this.dr.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return rh.Zi(new et(s),i,n)}Nr(e,n){const r=this._r.exec(e),i=Number(r[1]);return Fa.Zi(i,n)}yr(e){return Dy.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);C("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,n){const r=n?this.ur.insert(e,n):this.ur.remove(e),i=this.Ir(this.ur),s=this.Ir(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.Br(o,a).then(()=>{this.ur=r})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let n=_d();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class Sk{constructor(){this.Lr=new cm,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new cm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class KF{qr(e){}shutdown(){}}/**
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
 */class sI{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const QF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class YF{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class XF extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);C("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(u=>(C("RestConnection","Received: ",u),u),u=>{throw mo("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",r),u})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+$o,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=QF[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new Q$;a.setWithCredentials(!0),a.listenOnce(G$.COMPLETE,()=>{var l;try{switch(a.getLastErrorCode()){case Df.NO_ERROR:const c=a.getResponseJson();C("Connection","XHR received:",JSON.stringify(c)),s(c);break;case Df.TIMEOUT:C("Connection",'RPC "'+e+'" timed out'),o(new k(E.DEADLINE_EXCEEDED,"Request time out"));break;case Df.HTTP_ERROR:const h=a.getStatus();if(C("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=(l=d)===null||l===void 0?void 0:l.error;if(p&&p.status&&p.message){const g=function(v){const S=v.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(S)>=0?S:E.UNKNOWN}(p.status);o(new k(g,p.message))}else o(new k(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new k(E.UNAVAILABLE,"Connection failed."));break;default:V()}}finally{C("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=q$(),o=W$(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new K$({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const u=i.join("");C("Connection","Creating WebChannel: "+u,a);const l=s.createWebChannel(u,a);let c=!1,h=!1;const d=new YF({Hr:g=>{h?C("Connection","Not sending because WebChannel is closed:",g):(c||(C("Connection","Opening WebChannel transport."),l.open(),c=!0),C("Connection","WebChannel sending:",g),l.send(g))},Jr:()=>l.close()}),p=(g,v,S)=>{g.listen(v,m=>{try{S(m)}catch(f){setTimeout(()=>{throw f},0)}})};return p(l,Ol.EventType.OPEN,()=>{h||C("Connection","WebChannel transport opened.")}),p(l,Ol.EventType.CLOSE,()=>{h||(h=!0,C("Connection","WebChannel transport closed"),d.io())}),p(l,Ol.EventType.ERROR,g=>{h||(h=!0,mo("Connection","WebChannel transport errored:",g),d.io(new k(E.UNAVAILABLE,"The operation could not be completed")))}),p(l,Ol.EventType.MESSAGE,g=>{var v;if(!h){const S=g.data[0];q(!!S);const m=S,f=m.error||((v=m[0])===null||v===void 0?void 0:v.error);if(f){C("Connection","WebChannel received error:",f);const y=f.status;let _=function(x){const N=je[x];if(N!==void 0)return VT(N)}(y),T=f.message;_===void 0&&(_=E.INTERNAL,T="Unknown error status: "+y+" with message "+f.message),h=!0,d.io(new k(_,T)),l.close()}else C("Connection","WebChannel received:",S),d.ro(S)}}),p(o,H$.STAT_EVENT,g=>{g.stat===m0.PROXY?C("Connection","Detected buffering proxy"):g.stat===m0.NOPROXY&&C("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}/**
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
 */function Tk(){return typeof window<"u"?window:null}function uc(){return typeof document<"u"?document:null}/**
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
 */function nl(t){return new zM(t,!0)}class Ry{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&C("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class kk{constructor(e,n,r,i,s,o,a,u){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Ry(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(Be(n.toString()),Be("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new k(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return C("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class JF extends kk{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=WM(this.It,e),r=function(i){if(!("targetChange"in i))return j.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?j.min():s.readTime?it(s.readTime):j.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=Tu(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=Xc(a)?{documents:XT(i,a)}:{query:JT(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=GT(i,s.resumeToken):s.snapshotVersion.compareTo(j.min())>0&&(o.readTime=Eu(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=HM(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=Tu(this.It),n.removeTarget=e,this.Bo(n)}}class ZF extends kk{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(q(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=GM(e.writeResults,e.commitTime),r=it(e.commitTime);return this.listener.Zo(r,n)}return q(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Tu(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ku(this.It,r))};this.Bo(n)}}/**
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
 */class e2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.It=i,this.nu=!1}su(){if(this.nu)throw new k(E.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new k(E.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new k(E.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class t2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Be(n),this.ou=!1):C("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class n2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr(o=>{r.enqueueAndForget(async()=>{_i(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=L(a);u._u.add(4),await Vo(u),u.gu.set("Unknown"),u._u.delete(4),await rl(u)}(this))})}),this.gu=new t2(r,i)}}async function rl(t){if(_i(t))for(const e of t.wu)await e(!0)}async function Vo(t){for(const e of t.wu)await e(!1)}function kd(t,e){const n=L(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Ly(n)?Oy(n):zo(n).ko()&&Py(n,e))}function Cu(t,e){const n=L(t),r=zo(n);n.du.delete(e),r.ko()&&Ck(n,e),n.du.size===0&&(r.ko()?r.Fo():_i(n)&&n.gu.set("Unknown"))}function Py(t,e){t.yu.Mt(e.targetId),zo(t).zo(e)}function Ck(t,e){t.yu.Mt(e),zo(t).Ho(e)}function Oy(t){t.yu=new UM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),zo(t).start(),t.gu.uu()}function Ly(t){return _i(t)&&!zo(t).No()&&t.du.size>0}function _i(t){return L(t)._u.size===0}function Ak(t){t.yu=void 0}async function r2(t){t.du.forEach((e,n)=>{Py(t,e)})}async function i2(t,e){Ak(t),Ly(t)?(t.gu.hu(e),Oy(t)):t.gu.set("Unknown")}async function s2(t,e,n){if(t.gu.set("Online"),e instanceof WT&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){C("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await sh(t,r)}else if(e instanceof oc?t.yu.Gt(e):e instanceof qT?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(j.min()))try{const r=await vk(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.te(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.du.get(u);l&&i.du.set(u,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const u=i.du.get(a);if(!u)return;i.du.set(a,u.withResumeToken(Qe.EMPTY_BYTE_STRING,u.snapshotVersion)),Ck(i,a);const l=new Xr(u.target,a,1,u.sequenceNumber);Py(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){C("RemoteStore","Failed to raise snapshot:",r),await sh(t,r)}}async function sh(t,e,n){if(!wi(e))throw e;t._u.add(1),await Vo(t),t.gu.set("Offline"),n||(n=()=>vk(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{C("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await rl(t)})}function xk(t,e){return e().catch(n=>sh(t,n,e))}async function Bo(t){const e=L(t),n=li(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;o2(e);)try{const i=await WF(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,a2(e,i)}catch(i){await sh(e,i)}bk(e)&&Nk(e)}function o2(t){return _i(t)&&t.fu.length<10}function a2(t,e){t.fu.push(e);const n=li(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function bk(t){return _i(t)&&!li(t).No()&&t.fu.length>0}function Nk(t){li(t).start()}async function u2(t){li(t).eu()}async function l2(t){const e=li(t);for(const n of t.fu)e.Xo(n.mutations)}async function c2(t,e,n){const r=t.fu.shift(),i=Sy.from(r,e,n);await xk(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Bo(t)}async function h2(t,e){e&&li(t).Yo&&await async function(n,r){if(i=r.code,UT(i)&&i!==E.ABORTED){const s=n.fu.shift();li(n).Mo(),await xk(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Bo(n)}var i}(t,e),bk(t)&&Nk(t)}async function oI(t,e){const n=L(t);n.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");const r=_i(n);n._u.add(3),await Vo(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await rl(n)}async function hm(t,e){const n=L(t);e?(n._u.delete(2),await rl(n)):e||(n._u.add(2),await Vo(n),n.gu.set("Unknown"))}function zo(t){return t.pu||(t.pu=function(e,n,r){const i=L(e);return i.su(),new JF(n,i.connection,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:r2.bind(null,t),Zr:i2.bind(null,t),Wo:s2.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Ly(t)?Oy(t):t.gu.set("Unknown")):(await t.pu.stop(),Ak(t))})),t.pu}function li(t){return t.Iu||(t.Iu=function(e,n,r){const i=L(e);return i.su(),new ZF(n,i.connection,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:u2.bind(null,t),Zr:h2.bind(null,t),tu:l2.bind(null,t),Zo:c2.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Bo(t)):(await t.Iu.stop(),t.fu.length>0&&(C("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class $y{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new rt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new $y(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jo(t,e){if(Be("AsyncQueue",`${e}: ${t}`),wi(t))return new k(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class to{constructor(e){this.comparator=e?(n,r)=>e(n,r)||D.comparator(n.key,r.key):(n,r)=>D.comparator(n.key,r.key),this.keyedMap=va(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new to(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof to)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new to;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class aI{constructor(){this.Tu=new $e(D.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):V():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Eo{constructor(e,n,r,i,s,o,a,u,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Eo(e,n,to.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ju(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class d2{constructor(){this.Au=void 0,this.listeners=[]}}class f2{constructor(){this.queries=new Ii(e=>AT(e),Ju),this.onlineState="Unknown",this.Ru=new Set}}async function My(t,e){const n=L(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new d2),i)try{s.Au=await n.onListen(r)}catch(o){const a=jo(o,`Initialization of query '${om(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&Uy(n)}async function Fy(t,e){const n=L(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function p2(t,e){const n=L(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&Uy(n)}function m2(t,e,n){const r=L(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Uy(t){t.Ru.forEach(e=>{e.next()})}class Vy{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Eo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Eo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class g2{constructor(e,n){this.ku=e,this.byteLength=n}Ou(){return"metadata"in this.ku}}/**
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
 */class uI{constructor(e){this.It=e}Ji(e){return Qn(this.It,e)}Yi(e){return e.metadata.exists?YT(this.It,e.document,!1):ve.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return it(e)}}class y2{constructor(e,n,r){this.Mu=e,this.localStore=n,this.It=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Dk(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.ku.namedQuery)this.queries.push(e.ku.namedQuery);else if(e.ku.documentMetadata){this.documents.push({metadata:e.ku.documentMetadata}),e.ku.documentMetadata.exists||++n;const r=se.fromString(e.ku.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.ku.document&&(this.documents[this.documents.length-1].document=e.ku.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}$u(e){const n=new Map,r=new uI(this.It);for(const i of e)if(i.metadata.queries){const s=r.Ji(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||Z()).add(s);n.set(o,a)}}return n}async complete(){const e=await GF(this.localStore,new uI(this.It),this.documents,this.Mu.id),n=this.$u(this.documents);for(const r of this.queries)await HF(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function Dk(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class Rk{constructor(e){this.key=e}}class Pk{constructor(e){this.key=e}}class Ok{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Z(),this.mutatedKeys=Z(),this.Gu=bT(e),this.Qu=new to(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new aI,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=wy(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let S=!1;d&&p?d.data.isEqual(p.data)?g!==v&&(r.track({type:3,doc:p}),S=!0):this.Hu(d,p)||(r.track({type:2,doc:p}),S=!0,(u&&this.Gu(p,u)>0||l&&this.Gu(p,l)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),S=!0):d&&!p&&(r.track({type:1,doc:d}),S=!0,(u||l)&&(a=!0)),S&&(p?(o=o.add(p),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((l,c)=>function(h,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return V()}};return p(h)-p(d)}(l.type,c.type)||this.Gu(l.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,u=a!==this.qu;return this.qu=a,s.length!==0||u?{snapshot:new Eo(this.query,e.Qu,i,s,e.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new aI,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Z(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new Pk(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new Rk(r))}),n}tc(e){this.Uu=e.Hi,this.Ku=Z();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Eo.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class v2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class w2{constructor(e){this.key=e,this.nc=!1}}class I2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Ii(a=>AT(a),Ju),this.rc=new Map,this.oc=new Set,this.uc=new $e(D.comparator),this.cc=new Map,this.ac=new Ay,this.hc={},this.lc=new Map,this.fc=ls.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function _2(t,e){const n=Wy(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await Io(n.localStore,en(e));n.isPrimaryClient&&kd(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await By(n,e,r,a==="current",o.resumeToken)}return i}async function By(t,e,n,r,i){t._c=(h,d,p)=>async function(g,v,S,m){let f=v.view.Wu(S);f.$i&&(f=await nh(g.localStore,v.query,!1).then(({documents:T})=>v.view.Wu(T,f)));const y=m&&m.targetChanges.get(v.targetId),_=v.view.applyChanges(f,g.isPrimaryClient,y);return dm(g,v.targetId,_.Xu),_.snapshot}(t,h,d,p);const s=await nh(t.localStore,e,!0),o=new Ok(e,s.Hi),a=o.Wu(s.documents),u=tl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,u);dm(t,n,l.Xu);const c=new v2(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function E2(t,e){const n=L(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!Ju(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await _o(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Cu(n.remoteStore,r.targetId),So(n,r.targetId)}).catch(vi)):(So(n,r.targetId),await _o(n.localStore,r.targetId,!0))}async function S2(t,e,n){const r=Gy(t);try{const i=await function(s,o){const a=L(s),u=Ce.now(),l=o.reduce((d,p)=>d.add(p.key),Z());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Yt(),g=Z();return a.Gi.getEntries(d,l).next(v=>{p=v,p.forEach((S,m)=>{m.isValidDocument()||(g=g.add(S))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(v=>{c=v;const S=[];for(const m of o){const f=PM(m,c.get(m.key).overlayedDocument);f!=null&&S.push(new Tr(m.key,f,TT(f.value.mapValue),ke.exists(!0)))}return a.mutationQueue.addMutationBatch(d,u,S,o)}).next(v=>{h=v;const S=v.applyToLocalDocumentSet(c,g);return a.documentOverlayCache.saveOverlays(d,v.batchId,S)})}).then(()=>({batchId:h.batchId,changes:zT(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.hc[s.currentUser.toKey()];u||(u=new $e(J)),u=u.insert(o,a),s.hc[s.currentUser.toKey()]=u}(r,i.batchId,n),await kr(r,i.changes),await Bo(r.remoteStore)}catch(i){const s=jo(i,"Failed to persist write");n.reject(s)}}async function Lk(t,e){const n=L(t);try{const r=await qF(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?q(o.nc):i.removedDocuments.size>0&&(q(o.nc),o.nc=!1))}),await kr(n,r,e)}catch(r){await vi(r)}}function lI(t,e,n){const r=L(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=L(s);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.bu(o)&&(u=!0)}),u&&Uy(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function T2(t,e,n){const r=L(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new $e(D.comparator);o=o.insert(s,ve.newNoDocument(s,j.min()));const a=Z().add(s),u=new el(j.min(),new Map,new ge(J),o,a);await Lk(r,u),r.uc=r.uc.remove(s),r.cc.delete(e),qy(r)}else await _o(r.localStore,e,!1).then(()=>So(r,e,n)).catch(vi)}async function k2(t,e){const n=L(t),r=e.batch.batchId;try{const i=await jF(n.localStore,e);jy(n,r,null),zy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await kr(n,i)}catch(i){await vi(i)}}async function C2(t,e,n){const r=L(t);try{const i=await function(s,o){const a=L(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.mutationQueue.lookupMutationBatch(u,o).next(c=>(q(c!==null),l=c.keys(),a.mutationQueue.removeMutationBatch(u,c))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>a.localDocuments.getDocuments(u,l))})}(r.localStore,e);jy(r,e,n),zy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await kr(r,i)}catch(i){await vi(i)}}async function A2(t,e){const n=L(t);_i(n.remoteStore)||C("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=L(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.lc.get(r)||[];i.push(e),n.lc.set(r,i)}catch(r){const i=jo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function zy(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function jy(t,e,n){const r=L(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function So(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||$k(t,r)})}function $k(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Cu(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),qy(t))}function dm(t,e,n){for(const r of n)r instanceof Rk?(t.ac.addReference(r.key,e),x2(t,r)):r instanceof Pk?(C("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||$k(t,r.key)):V()}function x2(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(C("SyncEngine","New document in limbo: "+n),t.oc.add(r),qy(t))}function qy(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new D(se.fromString(e)),r=t.fc.next();t.cc.set(r,new w2(n)),t.uc=t.uc.insert(n,r),kd(t.remoteStore,new Xr(en(Mo(n.path)),r,2,Qt.at))}}async function kr(t,e,n){const r=L(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,u)=>{o.push(r._c(u,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const c=Ny.Ci(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(a,u){const l=L(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>w.forEach(u,h=>w.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>w.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!wi(c))throw c;C("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const d=l.Ui.get(h),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);l.Ui=l.Ui.insert(h,g)}}}(r.localStore,s))}async function b2(t,e){const n=L(t);if(!n.currentUser.isEqual(e)){C("SyncEngine","User change. New user:",e.toKey());const r=await yk(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new k(E.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await kr(n,r.ji)}}function N2(t,e){const n=L(t),r=n.cc.get(e);if(r&&r.nc)return Z().add(r.key);{let i=Z();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}async function D2(t,e){const n=L(t),r=await nh(n.localStore,e.query,!0),i=e.view.tc(r);return n.isPrimaryClient&&dm(n,e.targetId,i.Xu),i}async function R2(t,e){const n=L(t);return _k(n.localStore,e).then(r=>kr(n,r))}async function P2(t,e,n,r){const i=L(t),s=await function(o,a){const u=L(o),l=L(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",c=>l.Tn(c,a).next(h=>h?u.localDocuments.getDocuments(c,h):w.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Bo(i.remoteStore):n==="acknowledged"||n==="rejected"?(jy(i,e,r||null),zy(i,e),function(o,a){L(L(o).mutationQueue).An(a)}(i.localStore,e)):V(),await kr(i,s)):C("SyncEngine","Cannot apply mutation batch with id: "+e)}async function O2(t,e){const n=L(t);if(Wy(n),Gy(n),e===!0&&n.dc!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await cI(n,r.toArray());n.dc=!0,await hm(n.remoteStore,!0);for(const s of i)kd(n.remoteStore,s)}else if(e===!1&&n.dc!==!1){const r=[];let i=Promise.resolve();n.rc.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(So(n,o),_o(n.localStore,o,!0))),Cu(n.remoteStore,o)}),await i,await cI(n,r),function(s){const o=L(s);o.cc.forEach((a,u)=>{Cu(o.remoteStore,u)}),o.ac.fs(),o.cc=new Map,o.uc=new $e(D.comparator)}(n),n.dc=!1,await hm(n.remoteStore,!1)}}async function cI(t,e,n){const r=L(t),i=[],s=[];for(const o of e){let a;const u=r.rc.get(o);if(u&&u.length!==0){a=await Io(r.localStore,en(u[0]));for(const l of u){const c=r.ic.get(l),h=await D2(r,c);h.snapshot&&s.push(h.snapshot)}}else{const l=await Ik(r.localStore,o);a=await Io(r.localStore,l),await By(r,Mk(l),o,!1,a.resumeToken)}i.push(a)}return r.sc.Wo(s),i}function Mk(t){return CT(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function L2(t){const e=L(t);return L(L(e.localStore).persistence).vi()}async function $2(t,e,n,r){const i=L(t);if(i.dc)return void C("SyncEngine","Ignoring unexpected query state notification.");const s=i.rc.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await _k(i.localStore,xT(s[0])),a=el.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Qe.EMPTY_BYTE_STRING);await kr(i,o,a);break}case"rejected":await _o(i.localStore,e,!0),So(i,e,r);break;default:V()}}async function M2(t,e,n){const r=Wy(t);if(r.dc){for(const i of e){if(r.rc.has(i)){C("SyncEngine","Adding an already active target "+i);continue}const s=await Ik(r.localStore,i),o=await Io(r.localStore,s);await By(r,Mk(s),o.targetId,!1,o.resumeToken),kd(r.remoteStore,o)}for(const i of n)r.rc.has(i)&&await _o(r.localStore,i,!1).then(()=>{Cu(r.remoteStore,i),So(r,i)}).catch(vi)}}function Wy(t){const e=L(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Lk.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=N2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=T2.bind(null,e),e.sc.Wo=p2.bind(null,e.eventManager),e.sc.wc=m2.bind(null,e.eventManager),e}function Gy(t){const e=L(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=k2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=C2.bind(null,e),e}function F2(t,e,n){const r=L(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const p=L(h),g=it(d.createTime);return p.persistence.runTransaction("hasNewerBundle","readonly",v=>p.Ns.getBundleMetadata(v,d.id)).then(v=>!!v&&v.createTime.compareTo(g)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(Dk(a));const u=new y2(a,i.localStore,s.It);let l=await s.mc();for(;l;){const h=await u.Fu(l);h&&o._updateProgress(h),l=await s.mc()}const c=await u.complete();return await kr(i,c.Lu,void 0),await function(h,d){const p=L(h);return p.persistence.runTransaction("Save bundle","readwrite",g=>p.Ns.saveBundleMetadata(g,d))}(i.localStore,a),o._completeWith(c.progress),Promise.resolve(c.Bu)}catch(a){return mo("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Fk{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=nl(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return gk(this.persistence,new mk,e.initialUser,this.It)}yc(e){return new pk(Td.Bs,this.It)}gc(e){return new Sk}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Uk extends Fk{constructor(e,n,r){super(),this.Ac=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await Gy(this.Ac.syncEngine),await Bo(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){return gk(this.persistence,new mk,e.initialUser,this.It)}Tc(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new xF(r,e.asyncQueue,n)}Ec(e,n){const r=new hM(n,this.persistence);return new cM(e.asyncQueue,r)}yc(e){const n=by(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Gt.withCacheSize(this.cacheSizeBytes):Gt.DEFAULT;return new xy(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,Tk(),uc(),this.It,this.sharedClientState,!!this.forceOwnership)}gc(e){return new Sk}}class U2 extends Uk{constructor(e,n){super(e,n,!1),this.Ac=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Ac.syncEngine;this.sharedClientState instanceof Lf&&(this.sharedClientState.syncEngine={Fr:P2.bind(null,n),$r:$2.bind(null,n),Br:M2.bind(null,n),vi:L2.bind(null,n),Mr:R2.bind(null,n)},await this.sharedClientState.start()),await this.persistence.li(async r=>{await O2(this.Ac.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}gc(e){const n=Tk();if(!Lf.C(n))throw new k(E.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=by(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Lf(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class Hy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>lI(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=b2.bind(null,this.syncEngine),await hm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new f2}createDatastore(e){const n=nl(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new XF(i));var i;return function(s,o,a,u){return new e2(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>lI(this.syncEngine,a,0),o=sI.C()?new sI:new KF,new n2(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,u,l){const c=new I2(r,i,s,o,a,u);return l&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=L(e);C("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Vo(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function Ky(t,e,n){if(!n)throw new k(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Vk(t,e,n,r){if(e===!0&&r===!0)throw new k(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function hI(t){if(!D.isDocumentKey(t))throw new k(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function dI(t){if(D.isDocumentKey(t))throw new k(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Cd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":V()}function ue(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new k(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Cd(t);throw new k(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Bk(t,e){if(e<=0)throw new k(E.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */const fI=new Map;class pI{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new k(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new k(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Vk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class il{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pI({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new k(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new k(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pI(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new J$;switch(n.type){case"gapi":const r=n.client;return new nM(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new k(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=fI.get(e);n&&(C("ComponentProvider","Removing Datastore"),fI.delete(e),n.terminate())}(this),Promise.resolve()}}function V2(t,e,n,r={}){var i;const s=(t=ue(t,il))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&mo("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=et.MOCK_USER;else{o=DN(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new k(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new et(u)}t._authCredentials=new Z$(new dT(o,a))}}/**
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
 */class Ee{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ee(this.firestore,e,this._key)}}class Pt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pt(this.firestore,e,this._query)}}class Yn extends Pt{constructor(e,n,r){super(e,n,Mo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ee(this.firestore,null,new D(e))}withConverter(e){return new Yn(this.firestore,e,this._path)}}function zk(t,e,...n){if(t=z(t),Ky("collection","path",e),t instanceof il){const r=se.fromString(e,...n);return dI(r),new Yn(t,null,r)}{if(!(t instanceof Ee||t instanceof Yn))throw new k(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return dI(r),new Yn(t.firestore,null,r)}}function B2(t,e){if(t=ue(t,il),Ky("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new k(E.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Pt(t,null,function(n){return new Sr(se.emptyPath(),n)}(e))}function oh(t,e,...n){if(t=z(t),arguments.length===1&&(e=fT.R()),Ky("doc","path",e),t instanceof il){const r=se.fromString(e,...n);return hI(r),new Ee(t,null,new D(r))}{if(!(t instanceof Ee||t instanceof Yn))throw new k(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return hI(r),new Ee(t.firestore,t instanceof Yn?t.converter:null,new D(r))}}function jk(t,e){return t=z(t),e=z(e),(t instanceof Ee||t instanceof Yn)&&(e instanceof Ee||e instanceof Yn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function qk(t,e){return t=z(t),e=z(e),t instanceof Pt&&e instanceof Pt&&t.firestore===e.firestore&&Ju(t._query,e._query)&&t.converter===e.converter}/**
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
 */function mI(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
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
 */class Ad{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Be("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class z2{constructor(e,n){this.Pc=e,this.It=n,this.metadata=new rt,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then(r=>{r&&r.Ou()?this.metadata.resolve(r.ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.ku)}`))},r=>this.metadata.reject(r))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const e=await this.Sc();if(e===null)return null;const n=this.vc.decode(e),r=Number(n);isNaN(r)&&this.Dc(`length string (${n}) is not valid number`);const i=await this.Cc(r);return new g2(JSON.parse(i),e.length+r)}xc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Sc(){for(;this.xc()<0&&!await this.Nc(););if(this.buffer.length===0)return null;const e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const n=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Dc(e){throw this.Pc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Nc(){const e=await this.Pc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class j2{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new k(E.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=L(r),o=Tu(s.It)+"/documents",a={documents:i.map(h=>Su(s.It,h))},u=await s._o("BatchGetDocuments",o,a,i.length),l=new Map;u.forEach(h=>{const d=qM(s.It,h);l.set(d.key.toString(),d)});const c=[];return i.forEach(h=>{const d=l.get(h.toString());q(!!d),c.push(d)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Uo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=D.fromPath(r);this.mutations.push(new Iy(i,this.precondition(i)))}),await async function(n,r){const i=L(n),s=Tu(i.It)+"/documents",o={writes:r.map(a=>ku(i.It,a))};await i.ao("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw V();n=j.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new k(E.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(j.min())?ke.exists(!1):ke.updateTime(n):ke.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(j.min()))throw new k(E.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ke.updateTime(n)}return ke.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class q2{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.kc=r.maxAttempts,this.xo=new Ry(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro(async()=>{const e=new j2(this.datastore),n=this.Mc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Fc(i)}))}).catch(r=>{this.Fc(r)})})}Mc(e){try{const n=this.updateFunction(e);return!Yu(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}$c(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!UT(n)}return!1}}/**
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
 */class W2{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=fT.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{C("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(C("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new k(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=jo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Wk(t,e){t.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await yk(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Gk(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Qy(t);C("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>oI(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>oI(e.remoteStore,s)),t.onlineComponents=e}async function Qy(t){return t.offlineComponents||(C("FirestoreClient","Using default OfflineComponentProvider"),await Wk(t,new Fk)),t.offlineComponents}async function xd(t){return t.onlineComponents||(C("FirestoreClient","Using default OnlineComponentProvider"),await Gk(t,new Hy)),t.onlineComponents}function Hk(t){return Qy(t).then(e=>e.persistence)}function Yy(t){return Qy(t).then(e=>e.localStore)}function Kk(t){return xd(t).then(e=>e.remoteStore)}function Xy(t){return xd(t).then(e=>e.syncEngine)}function G2(t){return xd(t).then(e=>e.datastore)}async function To(t){const e=await xd(t),n=e.eventManager;return n.onListen=_2.bind(null,e.syncEngine),n.onUnlisten=E2.bind(null,e.syncEngine),n}function H2(t){return t.asyncQueue.enqueue(async()=>{const e=await Hk(t),n=await Kk(t);return e.setNetworkEnabled(!0),function(r){const i=L(r);return i._u.delete(0),rl(i)}(n)})}function K2(t){return t.asyncQueue.enqueue(async()=>{const e=await Hk(t),n=await Kk(t);return e.setNetworkEnabled(!1),async function(r){const i=L(r);i._u.add(0),await Vo(i),i.gu.set("Offline")}(n)})}function Q2(t,e){const n=new rt;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,u){const l=L(a);return l.persistence.runTransaction("read document","readonly",c=>l.localDocuments.getDocument(c,u))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new k(E.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=jo(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await Yy(t),e,n)),n.promise}function Qk(t,e,n={}){const r=new rt;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Ad({next:h=>{s.enqueueAndForget(()=>Fy(i,c));const d=h.docs.has(o);!d&&h.fromCache?u.reject(new k(E.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?u.reject(new k(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new Vy(Mo(o.path),l,{includeMetadataChanges:!0,Nu:!0});return My(i,c)}(await To(t),t.asyncQueue,e,n,r)),r.promise}function Y2(t,e){const n=new rt;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await nh(r,i,!0),a=new Ok(i,o.Hi),u=a.Wu(o.documents),l=a.applyChanges(u,!1);s.resolve(l.snapshot)}catch(o){const a=jo(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await Yy(t),e,n)),n.promise}function Yk(t,e,n={}){const r=new rt;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Ad({next:h=>{s.enqueueAndForget(()=>Fy(i,c)),h.fromCache&&a.source==="server"?u.reject(new k(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new Vy(o,l,{includeMetadataChanges:!0,Nu:!0});return My(i,c)}(await To(t),t.asyncQueue,e,n,r)),r.promise}function X2(t,e){const n=new Ad(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){L(r).Ru.add(i),i.next()}(await To(t),n)),()=>{n.bc(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){L(r).Ru.delete(i)}(await To(t),n))}}function J2(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(u,l){return new z2(u,l)}(function(u,l){if(u instanceof Uint8Array)return mI(u,l);if(u instanceof ArrayBuffer)return mI(new Uint8Array(u),l);if(u instanceof ReadableStream)return u.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,nl(e));t.asyncQueue.enqueueAndForget(async()=>{F2(await Xy(t),i,r)})}function Z2(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=L(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.Ns.getNamedQuery(s,r))}(await Yy(t),e))}class eU{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Ry(this,"async_queue_retry"),this.Wc=()=>{const n=uc();n&&C("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=uc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=uc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new rt;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!wi(e))throw e;C("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Be("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=$y.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.qc.push(i),i}zc(){this.Kc&&V()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}function fm(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class tU{constructor(){this._progressObserver={},this._taskCompletionResolver=new rt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const nU=-1;class Me extends il{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new eU,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Xk(this),this._firestoreClient.terminate()}}function ct(t){return t._firestoreClient||Xk(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Xk(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new pM(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new W2(t._authCredentials,t._appCheckCredentials,t._queue,r)}function rU(t,e){Zk(t=ue(t,Me));const n=ct(t),r=t._freezeSettings(),i=new Hy;return Jk(n,i,new Uk(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function iU(t){Zk(t=ue(t,Me));const e=ct(t),n=t._freezeSettings(),r=new Hy;return Jk(e,r,new U2(r,n.cacheSizeBytes))}function Jk(t,e,n){const r=new rt;return t.asyncQueue.enqueue(async()=>{try{await Wk(t,n),await Gk(t,e),r.resolve()}catch(i){const s=i;if(!function(o){return o.name==="FirebaseError"?o.code===E.FAILED_PRECONDITION||o.code===E.UNIMPLEMENTED:typeof DOMException<"u"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(s))throw s;mo("Error enabling offline persistence. Falling back to persistence disabled: "+s),r.reject(s)}}).then(()=>r.promise)}function sU(t){if(t._initialized&&!t._terminated)throw new k(E.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new rt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!bn.C())return Promise.resolve();const r=n+"main";await bn.delete(r)}(by(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function oU(t){return function(e){const n=new rt;return e.asyncQueue.enqueueAndForget(async()=>A2(await Xy(e),n)),n.promise}(ct(t=ue(t,Me)))}function aU(t){return H2(ct(t=ue(t,Me)))}function uU(t){return K2(ct(t=ue(t,Me)))}function lU(t,e){const n=ct(t=ue(t,Me)),r=new tU;return J2(n,t._databaseId,e,r),r}function cU(t,e){return Z2(ct(t=ue(t,Me)),e).then(n=>n?new Pt(t,null,n.query):null)}function Zk(t){if(t._initialized||t._terminated)throw new k(E.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class er{constructor(e){this._byteString=e}static fromBase64String(e){try{return new er(Qe.fromBase64String(e))}catch(n){throw new k(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new er(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ci{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new k(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class vs{constructor(e){this._methodName=e}}/**
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
 */class bd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new k(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new k(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
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
 */const hU=/^__.*__$/;class dU{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Tr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Fo(e,this.data,n,this.fieldTransforms)}}class eC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Tr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function tC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw V()}}class Nd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Nd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return ah(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(tC(this.sa)&&hU.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class fU{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||nl(e)}da(e,n,r,i=!1){return new Nd({sa:e,methodName:n,fa:r,path:ze.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function ws(t){const e=t._freezeSettings(),n=nl(t._databaseId);return new fU(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Dd(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);tv("Data must be an object, but it was:",o,r);const a=iC(r,o);let u,l;if(s.merge)u=new un(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=pm(e,h,n);if(!o.contains(d))throw new k(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);oC(c,d)||c.push(d)}u=new un(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new dU(new yt(a),u,l)}class sl extends vs{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sl}}function nC(t,e,n){return new Nd({sa:3,fa:e.settings.fa,methodName:t._methodName,oa:n},e.databaseId,e.It,e.ignoreUndefinedProperties)}class Jy extends vs{_toFieldTransform(e){return new Zu(e.path,new vo)}isEqual(e){return e instanceof Jy}}class pU extends vs{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=nC(this,e,!0),r=this._a.map(s=>Is(s,n)),i=new ss(r);return new Zu(e.path,i)}isEqual(e){return this===e}}class mU extends vs{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=nC(this,e,!0),r=this._a.map(s=>Is(s,n)),i=new os(r);return new Zu(e.path,i)}isEqual(e){return this===e}}class gU extends vs{constructor(e,n){super(e),this.wa=n}_toFieldTransform(e){const n=new wo(e.It,RT(e.It,this.wa));return new Zu(e.path,n)}isEqual(e){return this===e}}function Zy(t,e,n,r){const i=t.da(1,e,n);tv("Data must be an object, but it was:",i,r);const s=[],o=yt.empty();ys(r,(u,l)=>{const c=nv(e,u,n);l=z(l);const h=i.ca(c);if(l instanceof sl)s.push(c);else{const d=Is(l,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new un(s);return new eC(o,a,i.fieldTransforms)}function ev(t,e,n,r,i,s){const o=t.da(1,e,n),a=[pm(e,r,n)],u=[i];if(s.length%2!=0)throw new k(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(pm(e,s[d])),u.push(s[d+1]);const l=[],c=yt.empty();for(let d=a.length-1;d>=0;--d)if(!oC(l,a[d])){const p=a[d];let g=u[d];g=z(g);const v=o.ca(p);if(g instanceof sl)l.push(p);else{const S=Is(g,v);S!=null&&(l.push(p),c.set(p,S))}}const h=new un(l);return new eC(c,h,o.fieldTransforms)}function rC(t,e,n,r=!1){return Is(n,t.da(r?4:3,e))}function Is(t,e){if(sC(t=z(t)))return tv("Unsupported field value:",e,t),iC(t,e);if(t instanceof vs)return function(n,r){if(!tC(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Is(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=z(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return RT(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ce.fromDate(n);return{timestampValue:Eu(r.It,i)}}if(n instanceof Ce){const i=new Ce(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Eu(r.It,i)}}if(n instanceof bd)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof er)return{bytesValue:GT(r.It,n._byteString)};if(n instanceof Ee){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:_y(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${Cd(n)}`)}(t,e)}function iC(t,e){const n={};return IT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ys(t,(r,i)=>{const s=Is(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function sC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ce||t instanceof bd||t instanceof er||t instanceof Ee||t instanceof vs)}function tv(t,e,n){if(!sC(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Cd(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function pm(t,e,n){if((e=z(e))instanceof ci)return e._internalPath;if(typeof e=="string")return nv(t,e);throw ah("Field path arguments must be of type string or ",t,!1,void 0,n)}const yU=new RegExp("[~\\*/\\[\\]]");function nv(t,e,n){if(e.search(yU)>=0)throw ah(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ci(...e.split("."))._internalPath}catch{throw ah(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ah(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new k(E.INVALID_ARGUMENT,a+t+u)}function oC(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Au{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ee(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vU(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Rd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class vU extends Au{data(){return super.data()}}function Rd(t,e){return typeof e=="string"?nv(t,e):e instanceof ci?e._internalPath:e._delegate._internalPath}/**
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
 */function aC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new k(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ol{}function Nr(t,...e){for(const n of e)t=n._apply(t);return t}class wU extends ol{constructor(e,n,r){super(),this.ma=e,this.ga=n,this.ya=r,this.type="where"}_apply(e){const n=ws(e.firestore),r=function(i,s,o,a,u,l,c){let h;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new k(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){yI(c,l);const p=[];for(const g of c)p.push(gI(a,i,g));h={arrayValue:{values:p}}}else h=gI(a,i,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||yI(c,l),h=rC(o,s,c,l==="in"||l==="not-in");const d=vt.create(u,l,h);return function(p,g){if(g.dt()){const S=yy(p);if(S!==null&&!S.isEqual(g.field))throw new k(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${S.toString()}' and '${g.field.toString()}'`);const m=gy(p);m!==null&&dC(p,g.field,m)}const v=function(S,m){for(const f of S.filters)if(m.indexOf(f.op)>=0)return f.op;return null}(p,function(S){switch(S){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(g.op));if(v!==null)throw v===g.op?new k(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${g.op.toString()}' filter.`):new k(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${g.op.toString()}' filters with '${v.toString()}' filters.`)}(i,d),d}(e._query,"where",n,e.firestore._databaseId,this.ma,this.ga,this.ya);return new Pt(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new Sr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function IU(t,e,n){const r=e,i=Rd("where",t);return new wU(i,r,n)}class _U extends ol{constructor(e,n){super(),this.ma=e,this.pa=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new k(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new k(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new eo(i,s);return function(a,u){if(gy(a)===null){const l=yy(a);l!==null&&dC(a,l,u.field)}}(r,o),o}(e._query,this.ma,this.pa);return new Pt(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Sr(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function EU(t,e="asc"){const n=e,r=Rd("orderBy",t);return new _U(r,n)}class uC extends ol{constructor(e,n,r){super(),this.type=e,this.Ia=n,this.Ta=r}_apply(e){return new Pt(e.firestore,e.converter,Zc(e._query,this.Ia,this.Ta))}}function SU(t){return Bk("limit",t),new uC("limit",t,"F")}function TU(t){return Bk("limitToLast",t),new uC("limitToLast",t,"L")}class lC extends ol{constructor(e,n,r){super(),this.type=e,this.Ea=n,this.Aa=r}_apply(e){const n=hC(e,this.type,this.Ea,this.Aa);return new Pt(e.firestore,e.converter,function(r,i){return new Sr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function kU(...t){return new lC("startAt",t,!0)}function CU(...t){return new lC("startAfter",t,!1)}class cC extends ol{constructor(e,n,r){super(),this.type=e,this.Ea=n,this.Aa=r}_apply(e){const n=hC(e,this.type,this.Ea,this.Aa);return new Pt(e.firestore,e.converter,function(r,i){return new Sr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function AU(...t){return new cC("endBefore",t,!1)}function xU(...t){return new cC("endAt",t,!0)}function hC(t,e,n,r){if(n[0]=z(n[0]),n[0]instanceof Au)return function(i,s,o,a,u){if(!a)throw new k(E.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const c of yo(i))if(c.field.isKeyField())l.push(rs(s,a.key));else{const h=a.data.field(c.field);if(my(h))throw new k(E.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=c.field.canonicalString();throw new k(E.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new ui(l,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=ws(t.firestore);return function(s,o,a,u,l,c){const h=s.explicitOrderBy;if(l.length>h.length)throw new k(E.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let p=0;p<l.length;p++){const g=l[p];if(h[p].field.isKeyField()){if(typeof g!="string")throw new k(E.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof g}`);if(!vy(s)&&g.indexOf("/")!==-1)throw new k(E.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${g}' contains a slash.`);const v=s.path.child(se.fromString(g));if(!D.isDocumentKey(v))throw new k(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const S=new D(v);d.push(rs(o,S))}else{const v=rC(a,u,g);d.push(v)}}return new ui(d,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function gI(t,e,n){if(typeof(n=z(n))=="string"){if(n==="")throw new k(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vy(e)&&n.indexOf("/")!==-1)throw new k(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(se.fromString(n));if(!D.isDocumentKey(r))throw new k(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return rs(t,new D(r))}if(n instanceof Ee)return rs(t,n._key);throw new k(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Cd(n)}.`)}function yI(t,e){if(!Array.isArray(t)||t.length===0)throw new k(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new k(E.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function dC(t,e,n){if(!n.isEqual(e))throw new k(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class rv{convertValue(e,n="none"){switch(ns(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ts(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw V()}}convertObject(e,n){const r={};return ys(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new bd(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=_T(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(vu(e));default:return null}}convertTimestamp(e){const n=si(e);return new Ce(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=se.fromString(e);q(tk(r));const i=new oi(r.get(1),r.get(3)),s=new D(r.popFirst(5));return i.isEqual(n)||Be(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Pd(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class bU extends rv{constructor(e){super(),this.firestore=e}convertBytes(e){return new er(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ee(this.firestore,null,n)}}/**
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
 */class Ui{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wr extends Au{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ua(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Rd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ua extends wr{data(e={}){return super.data(e)}}class hi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ui(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ua(this._firestore,this._userDataWriter,r.key,r,new Ui(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new k(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Ua(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ui(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ua(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ui(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,l=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:NU(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function NU(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return V()}}function fC(t,e){return t instanceof wr&&e instanceof wr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof hi&&e instanceof hi&&t._firestore===e._firestore&&qk(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function DU(t){t=ue(t,Ee);const e=ue(t.firestore,Me);return Qk(ct(e),t._key).then(n=>iv(e,t,n))}class _s extends rv{constructor(e){super(),this.firestore=e}convertBytes(e){return new er(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ee(this.firestore,null,n)}}function RU(t){t=ue(t,Ee);const e=ue(t.firestore,Me),n=ct(e),r=new _s(e);return Q2(n,t._key).then(i=>new wr(e,r,t._key,i,new Ui(i!==null&&i.hasLocalMutations,!0),t.converter))}function PU(t){t=ue(t,Ee);const e=ue(t.firestore,Me);return Qk(ct(e),t._key,{source:"server"}).then(n=>iv(e,t,n))}function OU(t){t=ue(t,Pt);const e=ue(t.firestore,Me),n=ct(e),r=new _s(e);return aC(t._query),Yk(n,t._query).then(i=>new hi(e,r,t,i))}function LU(t){t=ue(t,Pt);const e=ue(t.firestore,Me),n=ct(e),r=new _s(e);return Y2(n,t._query).then(i=>new hi(e,r,t,i))}function $U(t){t=ue(t,Pt);const e=ue(t.firestore,Me),n=ct(e),r=new _s(e);return Yk(n,t._query,{source:"server"}).then(i=>new hi(e,r,t,i))}function vI(t,e,n){t=ue(t,Ee);const r=ue(t.firestore,Me),i=Pd(t.converter,e,n);return al(r,[Dd(ws(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ke.none())])}function wI(t,e,n,...r){t=ue(t,Ee);const i=ue(t.firestore,Me),s=ws(i);let o;return o=typeof(e=z(e))=="string"||e instanceof ci?ev(s,"updateDoc",t._key,e,n,r):Zy(s,"updateDoc",t._key,e),al(i,[o.toMutation(t._key,ke.exists(!0))])}function MU(t){return al(ue(t.firestore,Me),[new Uo(t._key,ke.none())])}function FU(t,e){const n=ue(t.firestore,Me),r=oh(t),i=Pd(t.converter,e);return al(n,[Dd(ws(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,ke.exists(!1))]).then(()=>r)}function pC(t,...e){var n,r,i;t=z(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||fm(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(fm(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,l,c;if(t instanceof Ee)l=ue(t.firestore,Me),c=Mo(t._key.path),u={next:h=>{e[o]&&e[o](iv(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ue(t,Pt);l=ue(h.firestore,Me),c=h._query;const d=new _s(l);u={next:p=>{e[o]&&e[o](new hi(l,d,h,p))},error:e[o+1],complete:e[o+2]},aC(t._query)}return function(h,d,p,g){const v=new Ad(g),S=new Vy(d,v,p);return h.asyncQueue.enqueueAndForget(async()=>My(await To(h),S)),()=>{v.bc(),h.asyncQueue.enqueueAndForget(async()=>Fy(await To(h),S))}}(ct(l),c,a,u)}function UU(t,e){return X2(ct(t=ue(t,Me)),fm(e)?e:{next:e})}function al(t,e){return function(n,r){const i=new rt;return n.asyncQueue.enqueueAndForget(async()=>S2(await Xy(n),r,i)),i.promise}(ct(t),e)}function iv(t,e,n){const r=n.docs.get(e._key),i=new _s(t);return new wr(t,i,e._key,r,new Ui(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const VU={maxAttempts:5};/**
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
 */class BU{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ws(e)}set(e,n,r){this._verifyNotCommitted();const i=$r(e,this._firestore),s=Pd(i.converter,n,r),o=Dd(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,ke.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=$r(e,this._firestore);let o;return o=typeof(n=z(n))=="string"||n instanceof ci?ev(this._dataReader,"WriteBatch.update",s._key,n,r,i):Zy(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,ke.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=$r(e,this._firestore);return this._mutations=this._mutations.concat(new Uo(n._key,ke.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new k(E.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function $r(t,e){if((t=z(t)).firestore!==e)throw new k(E.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class zU extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=ws(e)}get(e){const n=$r(e,this._firestore),r=new bU(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return V();const s=i[0];if(s.isFoundDocument())return new Au(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new Au(this._firestore,r,n._key,null,n.converter);throw V()})}set(e,n,r){const i=$r(e,this._firestore),s=Pd(i.converter,n,r),o=Dd(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=$r(e,this._firestore);let o;return o=typeof(n=z(n))=="string"||n instanceof ci?ev(this._dataReader,"Transaction.update",s._key,n,r,i):Zy(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=$r(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=$r(e,this._firestore),r=new _s(this._firestore);return super.get(e).then(i=>new wr(this._firestore,r,n._key,i._document,new Ui(!1,!1),n.converter))}}function jU(t,e,n){t=ue(t,Me);const r=Object.assign(Object.assign({},VU),n);return function(i){if(i.maxAttempts<1)throw new k(E.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new rt;return i.asyncQueue.enqueueAndForget(async()=>{const u=await G2(i);new q2(i.asyncQueue,u,o,s,a).run()}),a.promise}(ct(t),i=>e(new zU(t,i)),r)}/**
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
 */function qU(){return new sl("deleteField")}function WU(){return new Jy("serverTimestamp")}function GU(...t){return new pU("arrayUnion",t)}function HU(...t){return new mU("arrayRemove",t)}function KU(t){return new gU("increment",t)}(function(t,e=!0){(function(n){$o=n})(ps),ni(new Xn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Me(new eM(n.getProvider("auth-internal")),new iM(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new k(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oi(a.options.projectId,u)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Kn(g0,"3.7.3",t),Kn(g0,"3.7.3","esm2017")})();const QU="@firebase/firestore-compat",YU="0.2.3";/**
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
 */function sv(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new k("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function II(){if(typeof Uint8Array>"u")throw new k("unimplemented","Uint8Arrays are not available in this environment.")}function _I(){if(!dM())throw new k("unimplemented","Blobs are unavailable in Firestore in this environment.")}class xu{constructor(e){this._delegate=e}static fromBase64String(e){return _I(),new xu(er.fromBase64String(e))}static fromUint8Array(e){return II(),new xu(er.fromUint8Array(e))}toBase64(){return _I(),this._delegate.toBase64()}toUint8Array(){return II(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function mm(t){return XU(t,["next","error","complete"])}function XU(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class JU{enableIndexedDbPersistence(e,n){return rU(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return iU(e._delegate)}clearIndexedDbPersistence(e){return sU(e._delegate)}}class mC{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof oi||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&mo("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){V2(this._delegate,e,n,r)}enableNetwork(){return aU(this._delegate)}disableNetwork(){return uU(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,Vk("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return oU(this._delegate)}onSnapshotsInSync(e){return UU(this._delegate,e)}get app(){if(!this._appCompat)throw new k("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new ko(this,zk(this._delegate,e))}catch(n){throw Mt(n,"collection()","Firestore.collection()")}}doc(e){try{return new vn(this,oh(this._delegate,e))}catch(n){throw Mt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new $t(this,B2(this._delegate,e))}catch(n){throw Mt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return jU(this._delegate,n=>e(new gC(this,n)))}batch(){return ct(this._delegate),new yC(new BU(this._delegate,e=>al(this._delegate,e)))}loadBundle(e){return lU(this._delegate,e)}namedQuery(e){return cU(this._delegate,e).then(n=>n?new $t(this,n):null)}}class Od extends rv{constructor(e){super(),this.firestore=e}convertBytes(e){return new xu(new er(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return vn.forKey(n,this.firestore,null)}}function ZU(t){Y$(t)}class gC{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Od(e)}get(e){const n=Vi(e);return this._delegate.get(n).then(r=>new bu(this._firestore,new wr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Vi(e);return r?(sv("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Vi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Vi(e);return this._delegate.delete(n),this}}class yC{constructor(e){this._delegate=e}set(e,n,r){const i=Vi(e);return r?(sv("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Vi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Vi(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class cs{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Ua(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Nu(this._firestore,r),n!=null?n:{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=cs.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new cs(e,new Od(e),n),i.set(n,s)),s}}cs.INSTANCES=new WeakMap;class vn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Od(e)}static forPath(e,n,r){if(e.length%2!==0)throw new k("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new vn(n,new Ee(n._delegate,r,new D(e)))}static forKey(e,n,r){return new vn(n,new Ee(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new ko(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new ko(this.firestore,zk(this._delegate,e))}catch(n){throw Mt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=z(e),e instanceof Ee?jk(this._delegate,e):!1}set(e,n){n=sv("DocumentReference.set",n);try{return n?vI(this._delegate,e,n):vI(this._delegate,e)}catch(r){throw Mt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?wI(this._delegate,e):wI(this._delegate,e,n,...r)}catch(i){throw Mt(i,"updateDoc()","DocumentReference.update()")}}delete(){return MU(this._delegate)}onSnapshot(...e){const n=vC(e),r=wC(e,i=>new bu(this.firestore,new wr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return pC(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=RU(this._delegate):(e==null?void 0:e.source)==="server"?n=PU(this._delegate):n=DU(this._delegate),n.then(r=>new bu(this.firestore,new wr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new vn(this.firestore,e?this._delegate.withConverter(cs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Mt(t,e,n){return t.message=t.message.replace(e,n),t}function vC(t){for(const e of t)if(typeof e=="object"&&!mm(e))return e;return{}}function wC(t,e){var n,r;let i;return mm(t[0])?i=t[0]:mm(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class bu{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new vn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return fC(this._delegate,e._delegate)}}class Nu extends bu{data(e){const n=this._delegate.data(e);return X$(n!==void 0),n}}class $t{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Od(e)}where(e,n,r){try{return new $t(this.firestore,Nr(this._delegate,IU(e,n,r)))}catch(i){throw Mt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new $t(this.firestore,Nr(this._delegate,EU(e,n)))}catch(r){throw Mt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new $t(this.firestore,Nr(this._delegate,SU(e)))}catch(n){throw Mt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new $t(this.firestore,Nr(this._delegate,TU(e)))}catch(n){throw Mt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new $t(this.firestore,Nr(this._delegate,kU(...e)))}catch(n){throw Mt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new $t(this.firestore,Nr(this._delegate,CU(...e)))}catch(n){throw Mt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new $t(this.firestore,Nr(this._delegate,AU(...e)))}catch(n){throw Mt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new $t(this.firestore,Nr(this._delegate,xU(...e)))}catch(n){throw Mt(n,"endAt()","Query.endAt()")}}isEqual(e){return qk(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=LU(this._delegate):(e==null?void 0:e.source)==="server"?n=$U(this._delegate):n=OU(this._delegate),n.then(r=>new gm(this.firestore,new hi(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=vC(e),r=wC(e,i=>new gm(this.firestore,new hi(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return pC(this._delegate,n,r)}withConverter(e){return new $t(this.firestore,e?this._delegate.withConverter(cs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class eV{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Nu(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class gm{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new $t(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Nu(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new eV(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Nu(this._firestore,r))})}isEqual(e){return fC(this._delegate,e._delegate)}}class ko extends $t{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new vn(this.firestore,e):null}doc(e){try{return e===void 0?new vn(this.firestore,oh(this._delegate)):new vn(this.firestore,oh(this._delegate,e))}catch(n){throw Mt(n,"doc()","CollectionReference.doc()")}}add(e){return FU(this._delegate,e).then(n=>new vn(this.firestore,n))}isEqual(e){return jk(this._delegate,e._delegate)}withConverter(e){return new ko(this.firestore,e?this._delegate.withConverter(cs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Vi(t){return ue(t,Ee)}/**
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
 */class ov{constructor(...e){this._delegate=new ci(...e)}static documentId(){return new ov(ze.keyField().canonicalString())}isEqual(e){return e=z(e),e instanceof ci?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class Ri{constructor(e){this._delegate=e}static serverTimestamp(){const e=WU();return e._methodName="FieldValue.serverTimestamp",new Ri(e)}static delete(){const e=qU();return e._methodName="FieldValue.delete",new Ri(e)}static arrayUnion(...e){const n=GU(...e);return n._methodName="FieldValue.arrayUnion",new Ri(n)}static arrayRemove(...e){const n=HU(...e);return n._methodName="FieldValue.arrayRemove",new Ri(n)}static increment(e){const n=KU(e);return n._methodName="FieldValue.increment",new Ri(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const tV={Firestore:mC,GeoPoint:bd,Timestamp:Ce,Blob:xu,Transaction:gC,WriteBatch:yC,DocumentReference:vn,DocumentSnapshot:bu,Query:$t,QueryDocumentSnapshot:Nu,QuerySnapshot:gm,CollectionReference:ko,FieldPath:ov,FieldValue:Ri,setLogLevel:ZU,CACHE_SIZE_UNLIMITED:nU};function nV(t,e){t.INTERNAL.registerComponent(new Xn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},tV)))}/**
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
 */function rV(t){nV(t,(e,n)=>new mC(e,n,new JU)),t.registerVersion(QU,YU)}rV(ri);const iV={apiKey:"AIzaSyD6ueBdw_o2j0T-UD1zpXn83Fe5GIMVCIs",authDomain:"h-finances-93253.firebaseapp.com",projectId:"h-finances-93253",storageBucket:"h-finances-93253.appspot.com",messagingSenderId:"573458853851",appId:"1:573458853851:web:03aec603471d76d476c1fe"},sV=ri.initializeApp(iV),EI=sV.firestore(),SI={loadItems:async t=>{let e=[];(await EI.collection("item").get()).forEach(r=>{let i=r.data();for(let s=0;s<i.elements.length;s++)e.push({date:new Date(i.elements[s].date.seconds*1e3),category:i.elements[s].category,title:i.elements[s].title,value:i.elements[s].value})}),t(e)},addItem:async t=>{EI.collection("item").doc("p8bnSK4hZvgZQKdTcXpF").update({elements:ri.firestore.FieldValue.arrayUnion({category:t.category,value:t.value,title:t.title,date:ri.firestore.Timestamp.fromDate(t.date)})})}};function oV(){const[t,e]=Pe.exports.useState([]),[n,r]=Pe.exports.useState(zb()),[i,s]=Pe.exports.useState([]),[o,a]=Pe.exports.useState(0),[u,l]=Pe.exports.useState(0);return Pe.exports.useEffect(()=>{SI.loadItems(e)},[t]),Pe.exports.useEffect(()=>{s(jb(t,n))},[t,n]),Pe.exports.useEffect(()=>{let d=0,p=0;for(let g in i)Zl[i[g].category].expense?p+=i[g].value:d+=i[g].value;a(d),l(p)},[i]),tt(Fb,{children:[H(Ub,{children:H(Vb,{children:tt("h1",{children:["H-Finances",H("span",{children:"H-Finances"}),H("span",{children:"H-Finances"}),H("span",{children:"Developed by HELIOPC"})]})})}),tt(Bb,{children:[H(dN,{month:n,onMonthChange:d=>{r(d)},income:o,expense:u}),H(gN,{onAdd:d=>{let p=[...t];p.push(d),e(p),SI.addItem(d)}}),H(iN,{list:i})]})]})}const aV=$f.createRoot(document.getElementById("root"));aV.render(H(oV,{}));
