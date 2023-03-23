(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ex(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var rd={},tx={get exports(){return rd},set exports(t){rd=t}},ah={},Oe={},nx={get exports(){return Oe},set exports(t){Oe=t}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mu=Symbol.for("react.element"),rx=Symbol.for("react.portal"),ix=Symbol.for("react.fragment"),sx=Symbol.for("react.strict_mode"),ox=Symbol.for("react.profiler"),ax=Symbol.for("react.provider"),lx=Symbol.for("react.context"),ux=Symbol.for("react.forward_ref"),cx=Symbol.for("react.suspense"),dx=Symbol.for("react.memo"),hx=Symbol.for("react.lazy"),Qw=Symbol.iterator;function fx(t){return t===null||typeof t!="object"?null:(t=Qw&&t[Qw]||t["@@iterator"],typeof t=="function"?t:null)}var k_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C_=Object.assign,b_={};function ra(t,e,n){this.props=t,this.context=e,this.refs=b_,this.updater=n||k_}ra.prototype.isReactComponent={};ra.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ra.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function A_(){}A_.prototype=ra.prototype;function Hg(t,e,n){this.props=t,this.context=e,this.refs=b_,this.updater=n||k_}var Kg=Hg.prototype=new A_;Kg.constructor=Hg;C_(Kg,ra.prototype);Kg.isPureReactComponent=!0;var Yw=Array.isArray,x_=Object.prototype.hasOwnProperty,Wg={current:null},N_={key:!0,ref:!0,__self:!0,__source:!0};function D_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)x_.call(e,r)&&!N_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:mu,type:t,key:s,ref:o,props:i,_owner:Wg.current}}function px(t,e){return{$$typeof:mu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Gg(t){return typeof t=="object"&&t!==null&&t.$$typeof===mu}function mx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Xw=/\/+/g;function Wf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?mx(""+t.key):e.toString(36)}function Rc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case mu:case rx:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Wf(o,0):r,Yw(i)?(n="",t!=null&&(n=t.replace(Xw,"$&/")+"/"),Rc(i,e,n,"",function(u){return u})):i!=null&&(Gg(i)&&(i=px(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Xw,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Yw(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Wf(s,a);o+=Rc(s,e,n,l,i)}else if(l=fx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Wf(s,a++),o+=Rc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ec(t,e,n){if(t==null)return t;var r=[],i=0;return Rc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function gx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zt={current:null},Oc={transition:null},yx={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:Oc,ReactCurrentOwner:Wg};oe.Children={map:ec,forEach:function(t,e,n){ec(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ec(t,function(){e++}),e},toArray:function(t){return ec(t,function(e){return e})||[]},only:function(t){if(!Gg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};oe.Component=ra;oe.Fragment=ix;oe.Profiler=ox;oe.PureComponent=Hg;oe.StrictMode=sx;oe.Suspense=cx;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yx;oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=C_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Wg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)x_.call(e,l)&&!N_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:mu,type:t.type,key:i,ref:s,props:r,_owner:o}};oe.createContext=function(t){return t={$$typeof:lx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ax,_context:t},t.Consumer=t};oe.createElement=D_;oe.createFactory=function(t){var e=D_.bind(null,t);return e.type=t,e};oe.createRef=function(){return{current:null}};oe.forwardRef=function(t){return{$$typeof:ux,render:t}};oe.isValidElement=Gg;oe.lazy=function(t){return{$$typeof:hx,_payload:{_status:-1,_result:t},_init:gx}};oe.memo=function(t,e){return{$$typeof:dx,type:t,compare:e===void 0?null:e}};oe.startTransition=function(t){var e=Oc.transition;Oc.transition={};try{t()}finally{Oc.transition=e}};oe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};oe.useCallback=function(t,e){return Zt.current.useCallback(t,e)};oe.useContext=function(t){return Zt.current.useContext(t)};oe.useDebugValue=function(){};oe.useDeferredValue=function(t){return Zt.current.useDeferredValue(t)};oe.useEffect=function(t,e){return Zt.current.useEffect(t,e)};oe.useId=function(){return Zt.current.useId()};oe.useImperativeHandle=function(t,e,n){return Zt.current.useImperativeHandle(t,e,n)};oe.useInsertionEffect=function(t,e){return Zt.current.useInsertionEffect(t,e)};oe.useLayoutEffect=function(t,e){return Zt.current.useLayoutEffect(t,e)};oe.useMemo=function(t,e){return Zt.current.useMemo(t,e)};oe.useReducer=function(t,e,n){return Zt.current.useReducer(t,e,n)};oe.useRef=function(t){return Zt.current.useRef(t)};oe.useState=function(t){return Zt.current.useState(t)};oe.useSyncExternalStore=function(t,e,n){return Zt.current.useSyncExternalStore(t,e,n)};oe.useTransition=function(){return Zt.current.useTransition()};oe.version="18.2.0";(function(t){t.exports=oe})(nx);const lh=ex(Oe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vx=Oe,wx=Symbol.for("react.element"),Ix=Symbol.for("react.fragment"),_x=Object.prototype.hasOwnProperty,Ex=vx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sx={key:!0,ref:!0,__self:!0,__source:!0};function P_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)_x.call(e,r)&&!Sx.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:wx,type:t,key:s,ref:o,props:i,_owner:Ex.current}}ah.Fragment=Ix;ah.jsx=P_;ah.jsxs=P_;(function(t){t.exports=ah})(tx);const G=rd.jsx,ut=rd.jsxs;var Gp={},Qp={},Tx={get exports(){return Qp},set exports(t){Qp=t}},bn={},Yp={},kx={get exports(){return Yp},set exports(t){Yp=t}},R_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,K){var Q=O.length;O.push(K);e:for(;0<Q;){var Te=Q-1>>>1,L=O[Te];if(0<i(L,K))O[Te]=K,O[Q]=L,Q=Te;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var K=O[0],Q=O.pop();if(Q!==K){O[0]=Q;e:for(var Te=0,L=O.length,F=L>>>1;Te<F;){var V=2*(Te+1)-1,Y=O[V],I=V+1,ae=O[I];if(0>i(Y,Q))I<L&&0>i(ae,Y)?(O[Te]=ae,O[I]=Q,Te=I):(O[Te]=Y,O[V]=Q,Te=V);else if(I<L&&0>i(ae,Q))O[Te]=ae,O[I]=Q,Te=I;else break e}}return K}function i(O,K){var Q=O.sortIndex-K.sortIndex;return Q!==0?Q:O.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,p=!1,y=!1,v=!1,T=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(O){for(var K=n(u);K!==null;){if(K.callback===null)r(u);else if(K.startTime<=O)r(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(u)}}function _(O){if(v=!1,g(O),!y)if(n(l)!==null)y=!0,wr(k);else{var K=n(u);K!==null&&Ht(_,K.startTime-O)}}function k(O,K){y=!1,v&&(v=!1,m(R),R=-1),p=!0;var Q=h;try{for(g(K),d=n(l);d!==null&&(!(d.expirationTime>K)||O&&!st());){var Te=d.callback;if(typeof Te=="function"){d.callback=null,h=d.priorityLevel;var L=Te(d.expirationTime<=K);K=t.unstable_now(),typeof L=="function"?d.callback=L:d===n(l)&&r(l),g(K)}else r(l);d=n(l)}if(d!==null)var F=!0;else{var V=n(u);V!==null&&Ht(_,V.startTime-K),F=!1}return F}finally{d=null,h=Q,p=!1}}var A=!1,D=null,R=-1,ie=5,W=-1;function st(){return!(t.unstable_now()-W<ie)}function Ze(){if(D!==null){var O=t.unstable_now();W=O;var K=!0;try{K=D(!0,O)}finally{K?vt():(A=!1,D=null)}}else A=!1}var vt;if(typeof f=="function")vt=function(){f(Ze)};else if(typeof MessageChannel<"u"){var gn=new MessageChannel,Rt=gn.port2;gn.port1.onmessage=Ze,vt=function(){Rt.postMessage(null)}}else vt=function(){T(Ze,0)};function wr(O){D=O,A||(A=!0,vt())}function Ht(O,K){R=T(function(){O(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,wr(k))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(h){case 1:case 2:case 3:var K=3;break;default:K=h}var Q=h;h=K;try{return O()}finally{h=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,K){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Q=h;h=O;try{return K()}finally{h=Q}},t.unstable_scheduleCallback=function(O,K,Q){var Te=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?Te+Q:Te):Q=Te,O){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=Q+L,O={id:c++,callback:K,priorityLevel:O,startTime:Q,expirationTime:L,sortIndex:-1},Q>Te?(O.sortIndex=Q,e(u,O),n(l)===null&&O===n(u)&&(v?(m(R),R=-1):v=!0,Ht(_,Q-Te))):(O.sortIndex=L,e(l,O),y||p||(y=!0,wr(k))),O},t.unstable_shouldYield=st,t.unstable_wrapCallback=function(O){var K=h;return function(){var Q=h;h=K;try{return O.apply(this,arguments)}finally{h=Q}}}})(R_);(function(t){t.exports=R_})(kx);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_=Oe,Sn=Yp;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $_=new Set,El={};function Ms(t,e){Do(t,e),Do(t+"Capture",e)}function Do(t,e){for(El[t]=e,t=0;t<e.length;t++)$_.add(e[t])}var Pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xp=Object.prototype.hasOwnProperty,Cx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jw={},Zw={};function bx(t){return Xp.call(Zw,t)?!0:Xp.call(Jw,t)?!1:Cx.test(t)?Zw[t]=!0:(Jw[t]=!0,!1)}function Ax(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function xx(t,e,n,r){if(e===null||typeof e>"u"||Ax(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var At={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){At[t]=new en(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];At[e]=new en(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){At[t]=new en(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){At[t]=new en(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){At[t]=new en(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){At[t]=new en(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){At[t]=new en(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){At[t]=new en(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){At[t]=new en(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qg=/[\-:]([a-z])/g;function Yg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qg,Yg);At[e]=new en(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qg,Yg);At[e]=new en(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qg,Yg);At[e]=new en(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){At[t]=new en(t,1,!1,t.toLowerCase(),null,!1,!1)});At.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){At[t]=new en(t,1,!1,t.toLowerCase(),null,!0,!0)});function Xg(t,e,n,r){var i=At.hasOwnProperty(e)?At[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xx(e,n,i,r)&&(n=null),r||i===null?bx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ur=O_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tc=Symbol.for("react.element"),no=Symbol.for("react.portal"),ro=Symbol.for("react.fragment"),Jg=Symbol.for("react.strict_mode"),Jp=Symbol.for("react.profiler"),L_=Symbol.for("react.provider"),M_=Symbol.for("react.context"),Zg=Symbol.for("react.forward_ref"),Zp=Symbol.for("react.suspense"),em=Symbol.for("react.suspense_list"),ey=Symbol.for("react.memo"),Xr=Symbol.for("react.lazy"),F_=Symbol.for("react.offscreen"),e0=Symbol.iterator;function Ca(t){return t===null||typeof t!="object"?null:(t=e0&&t[e0]||t["@@iterator"],typeof t=="function"?t:null)}var Me=Object.assign,Gf;function qa(t){if(Gf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gf=e&&e[1]||""}return`
`+Gf+t}var Qf=!1;function Yf(t,e){if(!t||Qf)return"";Qf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Qf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qa(t):""}function Nx(t){switch(t.tag){case 5:return qa(t.type);case 16:return qa("Lazy");case 13:return qa("Suspense");case 19:return qa("SuspenseList");case 0:case 2:case 15:return t=Yf(t.type,!1),t;case 11:return t=Yf(t.type.render,!1),t;case 1:return t=Yf(t.type,!0),t;default:return""}}function tm(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ro:return"Fragment";case no:return"Portal";case Jp:return"Profiler";case Jg:return"StrictMode";case Zp:return"Suspense";case em:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case M_:return(t.displayName||"Context")+".Consumer";case L_:return(t._context.displayName||"Context")+".Provider";case Zg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ey:return e=t.displayName||null,e!==null?e:tm(t.type)||"Memo";case Xr:e=t._payload,t=t._init;try{return tm(t(e))}catch{}}return null}function Dx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tm(e);case 8:return e===Jg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function U_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Px(t){var e=U_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function nc(t){t._valueTracker||(t._valueTracker=Px(t))}function V_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=U_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function id(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nm(t,e){var n=e.checked;return Me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function t0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=wi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function B_(t,e){e=e.checked,e!=null&&Xg(t,"checked",e,!1)}function rm(t,e){B_(t,e);var n=wi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?im(t,e.type,n):e.hasOwnProperty("defaultValue")&&im(t,e.type,wi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function n0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function im(t,e,n){(e!=="number"||id(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ha=Array.isArray;function vo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+wi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function sm(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return Me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function r0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(Ha(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wi(n)}}function j_(t,e){var n=wi(e.value),r=wi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function i0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function z_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function om(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?z_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var rc,q_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(rc=rc||document.createElement("div"),rc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=rc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Sl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var el={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rx=["Webkit","ms","Moz","O"];Object.keys(el).forEach(function(t){Rx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),el[e]=el[t]})});function H_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||el.hasOwnProperty(t)&&el[t]?(""+e).trim():e+"px"}function K_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=H_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Ox=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function am(t,e){if(e){if(Ox[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function lm(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var um=null;function ty(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cm=null,wo=null,Io=null;function s0(t){if(t=vu(t)){if(typeof cm!="function")throw Error(x(280));var e=t.stateNode;e&&(e=fh(e),cm(t.stateNode,t.type,e))}}function W_(t){wo?Io?Io.push(t):Io=[t]:wo=t}function G_(){if(wo){var t=wo,e=Io;if(Io=wo=null,s0(t),e)for(t=0;t<e.length;t++)s0(e[t])}}function Q_(t,e){return t(e)}function Y_(){}var Xf=!1;function X_(t,e,n){if(Xf)return t(e,n);Xf=!0;try{return Q_(t,e,n)}finally{Xf=!1,(wo!==null||Io!==null)&&(Y_(),G_())}}function Tl(t,e){var n=t.stateNode;if(n===null)return null;var r=fh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var dm=!1;if(Pr)try{var ba={};Object.defineProperty(ba,"passive",{get:function(){dm=!0}}),window.addEventListener("test",ba,ba),window.removeEventListener("test",ba,ba)}catch{dm=!1}function $x(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var tl=!1,sd=null,od=!1,hm=null,Lx={onError:function(t){tl=!0,sd=t}};function Mx(t,e,n,r,i,s,o,a,l){tl=!1,sd=null,$x.apply(Lx,arguments)}function Fx(t,e,n,r,i,s,o,a,l){if(Mx.apply(this,arguments),tl){if(tl){var u=sd;tl=!1,sd=null}else throw Error(x(198));od||(od=!0,hm=u)}}function Fs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function J_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function o0(t){if(Fs(t)!==t)throw Error(x(188))}function Ux(t){var e=t.alternate;if(!e){if(e=Fs(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return o0(i),t;if(s===r)return o0(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function Z_(t){return t=Ux(t),t!==null?eE(t):null}function eE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=eE(t);if(e!==null)return e;t=t.sibling}return null}var tE=Sn.unstable_scheduleCallback,a0=Sn.unstable_cancelCallback,Vx=Sn.unstable_shouldYield,Bx=Sn.unstable_requestPaint,We=Sn.unstable_now,jx=Sn.unstable_getCurrentPriorityLevel,ny=Sn.unstable_ImmediatePriority,nE=Sn.unstable_UserBlockingPriority,ad=Sn.unstable_NormalPriority,zx=Sn.unstable_LowPriority,rE=Sn.unstable_IdlePriority,uh=null,ur=null;function qx(t){if(ur&&typeof ur.onCommitFiberRoot=="function")try{ur.onCommitFiberRoot(uh,t,void 0,(t.current.flags&128)===128)}catch{}}var Wn=Math.clz32?Math.clz32:Wx,Hx=Math.log,Kx=Math.LN2;function Wx(t){return t>>>=0,t===0?32:31-(Hx(t)/Kx|0)|0}var ic=64,sc=4194304;function Ka(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ld(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ka(a):(s&=o,s!==0&&(r=Ka(s)))}else o=n&~i,o!==0?r=Ka(o):s!==0&&(r=Ka(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Wn(e),i=1<<n,r|=t[n],e&=~i;return r}function Gx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qx(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Wn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Gx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function fm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function iE(){var t=ic;return ic<<=1,!(ic&4194240)&&(ic=64),t}function Jf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function gu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wn(e),t[e]=n}function Yx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Wn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ry(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Wn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ie=0;function sE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var oE,iy,aE,lE,uE,pm=!1,oc=[],li=null,ui=null,ci=null,kl=new Map,Cl=new Map,Zr=[],Xx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function l0(t,e){switch(t){case"focusin":case"focusout":li=null;break;case"dragenter":case"dragleave":ui=null;break;case"mouseover":case"mouseout":ci=null;break;case"pointerover":case"pointerout":kl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cl.delete(e.pointerId)}}function Aa(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=vu(e),e!==null&&iy(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Jx(t,e,n,r,i){switch(e){case"focusin":return li=Aa(li,t,e,n,r,i),!0;case"dragenter":return ui=Aa(ui,t,e,n,r,i),!0;case"mouseover":return ci=Aa(ci,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return kl.set(s,Aa(kl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Cl.set(s,Aa(Cl.get(s)||null,t,e,n,r,i)),!0}return!1}function cE(t){var e=ts(t.target);if(e!==null){var n=Fs(e);if(n!==null){if(e=n.tag,e===13){if(e=J_(n),e!==null){t.blockedOn=e,uE(t.priority,function(){aE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $c(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=mm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);um=r,n.target.dispatchEvent(r),um=null}else return e=vu(n),e!==null&&iy(e),t.blockedOn=n,!1;e.shift()}return!0}function u0(t,e,n){$c(t)&&n.delete(e)}function Zx(){pm=!1,li!==null&&$c(li)&&(li=null),ui!==null&&$c(ui)&&(ui=null),ci!==null&&$c(ci)&&(ci=null),kl.forEach(u0),Cl.forEach(u0)}function xa(t,e){t.blockedOn===e&&(t.blockedOn=null,pm||(pm=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,Zx)))}function bl(t){function e(i){return xa(i,t)}if(0<oc.length){xa(oc[0],t);for(var n=1;n<oc.length;n++){var r=oc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(li!==null&&xa(li,t),ui!==null&&xa(ui,t),ci!==null&&xa(ci,t),kl.forEach(e),Cl.forEach(e),n=0;n<Zr.length;n++)r=Zr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Zr.length&&(n=Zr[0],n.blockedOn===null);)cE(n),n.blockedOn===null&&Zr.shift()}var _o=Ur.ReactCurrentBatchConfig,ud=!0;function eN(t,e,n,r){var i=Ie,s=_o.transition;_o.transition=null;try{Ie=1,sy(t,e,n,r)}finally{Ie=i,_o.transition=s}}function tN(t,e,n,r){var i=Ie,s=_o.transition;_o.transition=null;try{Ie=4,sy(t,e,n,r)}finally{Ie=i,_o.transition=s}}function sy(t,e,n,r){if(ud){var i=mm(t,e,n,r);if(i===null)lp(t,e,r,cd,n),l0(t,r);else if(Jx(i,t,e,n,r))r.stopPropagation();else if(l0(t,r),e&4&&-1<Xx.indexOf(t)){for(;i!==null;){var s=vu(i);if(s!==null&&oE(s),s=mm(t,e,n,r),s===null&&lp(t,e,r,cd,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else lp(t,e,r,null,n)}}var cd=null;function mm(t,e,n,r){if(cd=null,t=ty(r),t=ts(t),t!==null)if(e=Fs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=J_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cd=t,null}function dE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jx()){case ny:return 1;case nE:return 4;case ad:case zx:return 16;case rE:return 536870912;default:return 16}default:return 16}}var ri=null,oy=null,Lc=null;function hE(){if(Lc)return Lc;var t,e=oy,n=e.length,r,i="value"in ri?ri.value:ri.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Lc=i.slice(t,1<r?1-r:void 0)}function Mc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ac(){return!0}function c0(){return!1}function An(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ac:c0,this.isPropagationStopped=c0,this}return Me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ac)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ac)},persist:function(){},isPersistent:ac}),e}var ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ay=An(ia),yu=Me({},ia,{view:0,detail:0}),nN=An(yu),Zf,ep,Na,ch=Me({},yu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ly,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Na&&(Na&&t.type==="mousemove"?(Zf=t.screenX-Na.screenX,ep=t.screenY-Na.screenY):ep=Zf=0,Na=t),Zf)},movementY:function(t){return"movementY"in t?t.movementY:ep}}),d0=An(ch),rN=Me({},ch,{dataTransfer:0}),iN=An(rN),sN=Me({},yu,{relatedTarget:0}),tp=An(sN),oN=Me({},ia,{animationName:0,elapsedTime:0,pseudoElement:0}),aN=An(oN),lN=Me({},ia,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),uN=An(lN),cN=Me({},ia,{data:0}),h0=An(cN),dN={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hN={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fN={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pN(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=fN[t])?!!e[t]:!1}function ly(){return pN}var mN=Me({},yu,{key:function(t){if(t.key){var e=dN[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Mc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hN[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ly,charCode:function(t){return t.type==="keypress"?Mc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Mc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gN=An(mN),yN=Me({},ch,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),f0=An(yN),vN=Me({},yu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ly}),wN=An(vN),IN=Me({},ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),_N=An(IN),EN=Me({},ch,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),SN=An(EN),TN=[9,13,27,32],uy=Pr&&"CompositionEvent"in window,nl=null;Pr&&"documentMode"in document&&(nl=document.documentMode);var kN=Pr&&"TextEvent"in window&&!nl,fE=Pr&&(!uy||nl&&8<nl&&11>=nl),p0=String.fromCharCode(32),m0=!1;function pE(t,e){switch(t){case"keyup":return TN.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var io=!1;function CN(t,e){switch(t){case"compositionend":return mE(e);case"keypress":return e.which!==32?null:(m0=!0,p0);case"textInput":return t=e.data,t===p0&&m0?null:t;default:return null}}function bN(t,e){if(io)return t==="compositionend"||!uy&&pE(t,e)?(t=hE(),Lc=oy=ri=null,io=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return fE&&e.locale!=="ko"?null:e.data;default:return null}}var AN={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function g0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!AN[t.type]:e==="textarea"}function gE(t,e,n,r){W_(r),e=dd(e,"onChange"),0<e.length&&(n=new ay("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var rl=null,Al=null;function xN(t){bE(t,0)}function dh(t){var e=ao(t);if(V_(e))return t}function NN(t,e){if(t==="change")return e}var yE=!1;if(Pr){var np;if(Pr){var rp="oninput"in document;if(!rp){var y0=document.createElement("div");y0.setAttribute("oninput","return;"),rp=typeof y0.oninput=="function"}np=rp}else np=!1;yE=np&&(!document.documentMode||9<document.documentMode)}function v0(){rl&&(rl.detachEvent("onpropertychange",vE),Al=rl=null)}function vE(t){if(t.propertyName==="value"&&dh(Al)){var e=[];gE(e,Al,t,ty(t)),X_(xN,e)}}function DN(t,e,n){t==="focusin"?(v0(),rl=e,Al=n,rl.attachEvent("onpropertychange",vE)):t==="focusout"&&v0()}function PN(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dh(Al)}function RN(t,e){if(t==="click")return dh(e)}function ON(t,e){if(t==="input"||t==="change")return dh(e)}function $N(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qn=typeof Object.is=="function"?Object.is:$N;function xl(t,e){if(Qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xp.call(e,i)||!Qn(t[i],e[i]))return!1}return!0}function w0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function I0(t,e){var n=w0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=w0(n)}}function wE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?wE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function IE(){for(var t=window,e=id();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=id(t.document)}return e}function cy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function LN(t){var e=IE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&wE(n.ownerDocument.documentElement,n)){if(r!==null&&cy(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=I0(n,s);var o=I0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var MN=Pr&&"documentMode"in document&&11>=document.documentMode,so=null,gm=null,il=null,ym=!1;function _0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ym||so==null||so!==id(r)||(r=so,"selectionStart"in r&&cy(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),il&&xl(il,r)||(il=r,r=dd(gm,"onSelect"),0<r.length&&(e=new ay("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=so)))}function lc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var oo={animationend:lc("Animation","AnimationEnd"),animationiteration:lc("Animation","AnimationIteration"),animationstart:lc("Animation","AnimationStart"),transitionend:lc("Transition","TransitionEnd")},ip={},_E={};Pr&&(_E=document.createElement("div").style,"AnimationEvent"in window||(delete oo.animationend.animation,delete oo.animationiteration.animation,delete oo.animationstart.animation),"TransitionEvent"in window||delete oo.transitionend.transition);function hh(t){if(ip[t])return ip[t];if(!oo[t])return t;var e=oo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _E)return ip[t]=e[n];return t}var EE=hh("animationend"),SE=hh("animationiteration"),TE=hh("animationstart"),kE=hh("transitionend"),CE=new Map,E0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Oi(t,e){CE.set(t,e),Ms(e,[t])}for(var sp=0;sp<E0.length;sp++){var op=E0[sp],FN=op.toLowerCase(),UN=op[0].toUpperCase()+op.slice(1);Oi(FN,"on"+UN)}Oi(EE,"onAnimationEnd");Oi(SE,"onAnimationIteration");Oi(TE,"onAnimationStart");Oi("dblclick","onDoubleClick");Oi("focusin","onFocus");Oi("focusout","onBlur");Oi(kE,"onTransitionEnd");Do("onMouseEnter",["mouseout","mouseover"]);Do("onMouseLeave",["mouseout","mouseover"]);Do("onPointerEnter",["pointerout","pointerover"]);Do("onPointerLeave",["pointerout","pointerover"]);Ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ms("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VN=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wa));function S0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Fx(r,e,void 0,t),t.currentTarget=null}function bE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;S0(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;S0(i,a,u),s=l}}}if(od)throw t=hm,od=!1,hm=null,t}function Ce(t,e){var n=e[Em];n===void 0&&(n=e[Em]=new Set);var r=t+"__bubble";n.has(r)||(AE(e,t,2,!1),n.add(r))}function ap(t,e,n){var r=0;e&&(r|=4),AE(n,t,r,e)}var uc="_reactListening"+Math.random().toString(36).slice(2);function Nl(t){if(!t[uc]){t[uc]=!0,$_.forEach(function(n){n!=="selectionchange"&&(VN.has(n)||ap(n,!1,t),ap(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[uc]||(e[uc]=!0,ap("selectionchange",!1,e))}}function AE(t,e,n,r){switch(dE(e)){case 1:var i=eN;break;case 4:i=tN;break;default:i=sy}n=i.bind(null,e,n,t),i=void 0,!dm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function lp(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ts(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}X_(function(){var u=s,c=ty(n),d=[];e:{var h=CE.get(t);if(h!==void 0){var p=ay,y=t;switch(t){case"keypress":if(Mc(n)===0)break e;case"keydown":case"keyup":p=gN;break;case"focusin":y="focus",p=tp;break;case"focusout":y="blur",p=tp;break;case"beforeblur":case"afterblur":p=tp;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=d0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=iN;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=wN;break;case EE:case SE:case TE:p=aN;break;case kE:p=_N;break;case"scroll":p=nN;break;case"wheel":p=SN;break;case"copy":case"cut":case"paste":p=uN;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=f0}var v=(e&4)!==0,T=!v&&t==="scroll",m=v?h!==null?h+"Capture":null:h;v=[];for(var f=u,g;f!==null;){g=f;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,m!==null&&(_=Tl(f,m),_!=null&&v.push(Dl(f,_,g)))),T)break;f=f.return}0<v.length&&(h=new p(h,y,null,n,c),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==um&&(y=n.relatedTarget||n.fromElement)&&(ts(y)||y[Rr]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?ts(y):null,y!==null&&(T=Fs(y),y!==T||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(v=d0,_="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=f0,_="onPointerLeave",m="onPointerEnter",f="pointer"),T=p==null?h:ao(p),g=y==null?h:ao(y),h=new v(_,f+"leave",p,n,c),h.target=T,h.relatedTarget=g,_=null,ts(c)===u&&(v=new v(m,f+"enter",y,n,c),v.target=g,v.relatedTarget=T,_=v),T=_,p&&y)t:{for(v=p,m=y,f=0,g=v;g;g=Qs(g))f++;for(g=0,_=m;_;_=Qs(_))g++;for(;0<f-g;)v=Qs(v),f--;for(;0<g-f;)m=Qs(m),g--;for(;f--;){if(v===m||m!==null&&v===m.alternate)break t;v=Qs(v),m=Qs(m)}v=null}else v=null;p!==null&&T0(d,h,p,v,!1),y!==null&&T!==null&&T0(d,T,y,v,!0)}}e:{if(h=u?ao(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var k=NN;else if(g0(h))if(yE)k=ON;else{k=PN;var A=DN}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=RN);if(k&&(k=k(t,u))){gE(d,k,n,c);break e}A&&A(t,h,u),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&im(h,"number",h.value)}switch(A=u?ao(u):window,t){case"focusin":(g0(A)||A.contentEditable==="true")&&(so=A,gm=u,il=null);break;case"focusout":il=gm=so=null;break;case"mousedown":ym=!0;break;case"contextmenu":case"mouseup":case"dragend":ym=!1,_0(d,n,c);break;case"selectionchange":if(MN)break;case"keydown":case"keyup":_0(d,n,c)}var D;if(uy)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else io?pE(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(fE&&n.locale!=="ko"&&(io||R!=="onCompositionStart"?R==="onCompositionEnd"&&io&&(D=hE()):(ri=c,oy="value"in ri?ri.value:ri.textContent,io=!0)),A=dd(u,R),0<A.length&&(R=new h0(R,t,null,n,c),d.push({event:R,listeners:A}),D?R.data=D:(D=mE(n),D!==null&&(R.data=D)))),(D=kN?CN(t,n):bN(t,n))&&(u=dd(u,"onBeforeInput"),0<u.length&&(c=new h0("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=D))}bE(d,e)})}function Dl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function dd(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Tl(t,n),s!=null&&r.unshift(Dl(t,s,i)),s=Tl(t,e),s!=null&&r.push(Dl(t,s,i))),t=t.return}return r}function Qs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function T0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Tl(n,s),l!=null&&o.unshift(Dl(n,l,a))):i||(l=Tl(n,s),l!=null&&o.push(Dl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var BN=/\r\n?/g,jN=/\u0000|\uFFFD/g;function k0(t){return(typeof t=="string"?t:""+t).replace(BN,`
`).replace(jN,"")}function cc(t,e,n){if(e=k0(e),k0(t)!==e&&n)throw Error(x(425))}function hd(){}var vm=null,wm=null;function Im(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _m=typeof setTimeout=="function"?setTimeout:void 0,zN=typeof clearTimeout=="function"?clearTimeout:void 0,C0=typeof Promise=="function"?Promise:void 0,qN=typeof queueMicrotask=="function"?queueMicrotask:typeof C0<"u"?function(t){return C0.resolve(null).then(t).catch(HN)}:_m;function HN(t){setTimeout(function(){throw t})}function up(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),bl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);bl(e)}function di(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function b0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var sa=Math.random().toString(36).slice(2),er="__reactFiber$"+sa,Pl="__reactProps$"+sa,Rr="__reactContainer$"+sa,Em="__reactEvents$"+sa,KN="__reactListeners$"+sa,WN="__reactHandles$"+sa;function ts(t){var e=t[er];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Rr]||n[er]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=b0(t);t!==null;){if(n=t[er])return n;t=b0(t)}return e}t=n,n=t.parentNode}return null}function vu(t){return t=t[er]||t[Rr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ao(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function fh(t){return t[Pl]||null}var Sm=[],lo=-1;function $i(t){return{current:t}}function Ae(t){0>lo||(t.current=Sm[lo],Sm[lo]=null,lo--)}function ke(t,e){lo++,Sm[lo]=t.current,t.current=e}var Ii={},jt=$i(Ii),dn=$i(!1),gs=Ii;function Po(t,e){var n=t.type.contextTypes;if(!n)return Ii;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function hn(t){return t=t.childContextTypes,t!=null}function fd(){Ae(dn),Ae(jt)}function A0(t,e,n){if(jt.current!==Ii)throw Error(x(168));ke(jt,e),ke(dn,n)}function xE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,Dx(t)||"Unknown",i));return Me({},n,r)}function pd(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ii,gs=jt.current,ke(jt,t),ke(dn,dn.current),!0}function x0(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=xE(t,e,gs),r.__reactInternalMemoizedMergedChildContext=t,Ae(dn),Ae(jt),ke(jt,t)):Ae(dn),ke(dn,n)}var _r=null,ph=!1,cp=!1;function NE(t){_r===null?_r=[t]:_r.push(t)}function GN(t){ph=!0,NE(t)}function Li(){if(!cp&&_r!==null){cp=!0;var t=0,e=Ie;try{var n=_r;for(Ie=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}_r=null,ph=!1}catch(i){throw _r!==null&&(_r=_r.slice(t+1)),tE(ny,Li),i}finally{Ie=e,cp=!1}}return null}var uo=[],co=0,md=null,gd=0,Nn=[],Dn=0,ys=null,Er=1,Sr="";function Ki(t,e){uo[co++]=gd,uo[co++]=md,md=t,gd=e}function DE(t,e,n){Nn[Dn++]=Er,Nn[Dn++]=Sr,Nn[Dn++]=ys,ys=t;var r=Er;t=Sr;var i=32-Wn(r)-1;r&=~(1<<i),n+=1;var s=32-Wn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Er=1<<32-Wn(e)+i|n<<i|r,Sr=s+t}else Er=1<<s|n<<i|r,Sr=t}function dy(t){t.return!==null&&(Ki(t,1),DE(t,1,0))}function hy(t){for(;t===md;)md=uo[--co],uo[co]=null,gd=uo[--co],uo[co]=null;for(;t===ys;)ys=Nn[--Dn],Nn[Dn]=null,Sr=Nn[--Dn],Nn[Dn]=null,Er=Nn[--Dn],Nn[Dn]=null}var _n=null,wn=null,Ne=!1,Hn=null;function PE(t,e){var n=Pn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function N0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_n=t,wn=di(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_n=t,wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ys!==null?{id:Er,overflow:Sr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_n=t,wn=null,!0):!1;default:return!1}}function Tm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function km(t){if(Ne){var e=wn;if(e){var n=e;if(!N0(t,e)){if(Tm(t))throw Error(x(418));e=di(n.nextSibling);var r=_n;e&&N0(t,e)?PE(r,n):(t.flags=t.flags&-4097|2,Ne=!1,_n=t)}}else{if(Tm(t))throw Error(x(418));t.flags=t.flags&-4097|2,Ne=!1,_n=t}}}function D0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_n=t}function dc(t){if(t!==_n)return!1;if(!Ne)return D0(t),Ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Im(t.type,t.memoizedProps)),e&&(e=wn)){if(Tm(t))throw RE(),Error(x(418));for(;e;)PE(t,e),e=di(e.nextSibling)}if(D0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wn=di(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wn=null}}else wn=_n?di(t.stateNode.nextSibling):null;return!0}function RE(){for(var t=wn;t;)t=di(t.nextSibling)}function Ro(){wn=_n=null,Ne=!1}function fy(t){Hn===null?Hn=[t]:Hn.push(t)}var QN=Ur.ReactCurrentBatchConfig;function zn(t,e){if(t&&t.defaultProps){e=Me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var yd=$i(null),vd=null,ho=null,py=null;function my(){py=ho=vd=null}function gy(t){var e=yd.current;Ae(yd),t._currentValue=e}function Cm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Eo(t,e){vd=t,py=ho=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(an=!0),t.firstContext=null)}function $n(t){var e=t._currentValue;if(py!==t)if(t={context:t,memoizedValue:e,next:null},ho===null){if(vd===null)throw Error(x(308));ho=t,vd.dependencies={lanes:0,firstContext:t}}else ho=ho.next=t;return e}var ns=null;function yy(t){ns===null?ns=[t]:ns.push(t)}function OE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,yy(e)):(n.next=i.next,i.next=n),e.interleaved=n,Or(t,r)}function Or(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Jr=!1;function vy(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $E(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ar(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function hi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Or(t,n)}return i=r.interleaved,i===null?(e.next=e,yy(r)):(e.next=i.next,i.next=e),r.interleaved=e,Or(t,n)}function Fc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ry(t,n)}}function P0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wd(t,e,n,r){var i=t.updateQueue;Jr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(h=e,p=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){d=y.call(p,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(p,d,h):y,h==null)break e;d=Me({},d,h);break e;case 2:Jr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ws|=o,t.lanes=o,t.memoizedState=d}}function R0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var LE=new O_.Component().refs;function bm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mh={isMounted:function(t){return(t=t._reactInternals)?Fs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Yt(),i=pi(t),s=Ar(r,i);s.payload=e,n!=null&&(s.callback=n),e=hi(t,s,i),e!==null&&(Gn(e,t,i,r),Fc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Yt(),i=pi(t),s=Ar(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=hi(t,s,i),e!==null&&(Gn(e,t,i,r),Fc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),r=pi(t),i=Ar(n,r);i.tag=2,e!=null&&(i.callback=e),e=hi(t,i,r),e!==null&&(Gn(e,t,r,n),Fc(e,t,r))}};function O0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!xl(n,r)||!xl(i,s):!0}function ME(t,e,n){var r=!1,i=Ii,s=e.contextType;return typeof s=="object"&&s!==null?s=$n(s):(i=hn(e)?gs:jt.current,r=e.contextTypes,s=(r=r!=null)?Po(t,i):Ii),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function $0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&mh.enqueueReplaceState(e,e.state,null)}function Am(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=LE,vy(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=$n(s):(s=hn(e)?gs:jt.current,i.context=Po(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bm(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&mh.enqueueReplaceState(i,i.state,null),wd(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Da(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===LE&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function hc(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function L0(t){var e=t._init;return e(t._payload)}function FE(t){function e(m,f){if(t){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=mi(m,f),m.index=0,m.sibling=null,m}function s(m,f,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,g,_){return f===null||f.tag!==6?(f=yp(g,m.mode,_),f.return=m,f):(f=i(f,g),f.return=m,f)}function l(m,f,g,_){var k=g.type;return k===ro?c(m,f,g.props.children,_,g.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Xr&&L0(k)===f.type)?(_=i(f,g.props),_.ref=Da(m,f,g),_.return=m,_):(_=qc(g.type,g.key,g.props,null,m.mode,_),_.ref=Da(m,f,g),_.return=m,_)}function u(m,f,g,_){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=vp(g,m.mode,_),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function c(m,f,g,_,k){return f===null||f.tag!==7?(f=cs(g,m.mode,_,k),f.return=m,f):(f=i(f,g),f.return=m,f)}function d(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=yp(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case tc:return g=qc(f.type,f.key,f.props,null,m.mode,g),g.ref=Da(m,null,f),g.return=m,g;case no:return f=vp(f,m.mode,g),f.return=m,f;case Xr:var _=f._init;return d(m,_(f._payload),g)}if(Ha(f)||Ca(f))return f=cs(f,m.mode,g,null),f.return=m,f;hc(m,f)}return null}function h(m,f,g,_){var k=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:a(m,f,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case tc:return g.key===k?l(m,f,g,_):null;case no:return g.key===k?u(m,f,g,_):null;case Xr:return k=g._init,h(m,f,k(g._payload),_)}if(Ha(g)||Ca(g))return k!==null?null:c(m,f,g,_,null);hc(m,g)}return null}function p(m,f,g,_,k){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(g)||null,a(f,m,""+_,k);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case tc:return m=m.get(_.key===null?g:_.key)||null,l(f,m,_,k);case no:return m=m.get(_.key===null?g:_.key)||null,u(f,m,_,k);case Xr:var A=_._init;return p(m,f,g,A(_._payload),k)}if(Ha(_)||Ca(_))return m=m.get(g)||null,c(f,m,_,k,null);hc(f,_)}return null}function y(m,f,g,_){for(var k=null,A=null,D=f,R=f=0,ie=null;D!==null&&R<g.length;R++){D.index>R?(ie=D,D=null):ie=D.sibling;var W=h(m,D,g[R],_);if(W===null){D===null&&(D=ie);break}t&&D&&W.alternate===null&&e(m,D),f=s(W,f,R),A===null?k=W:A.sibling=W,A=W,D=ie}if(R===g.length)return n(m,D),Ne&&Ki(m,R),k;if(D===null){for(;R<g.length;R++)D=d(m,g[R],_),D!==null&&(f=s(D,f,R),A===null?k=D:A.sibling=D,A=D);return Ne&&Ki(m,R),k}for(D=r(m,D);R<g.length;R++)ie=p(D,m,R,g[R],_),ie!==null&&(t&&ie.alternate!==null&&D.delete(ie.key===null?R:ie.key),f=s(ie,f,R),A===null?k=ie:A.sibling=ie,A=ie);return t&&D.forEach(function(st){return e(m,st)}),Ne&&Ki(m,R),k}function v(m,f,g,_){var k=Ca(g);if(typeof k!="function")throw Error(x(150));if(g=k.call(g),g==null)throw Error(x(151));for(var A=k=null,D=f,R=f=0,ie=null,W=g.next();D!==null&&!W.done;R++,W=g.next()){D.index>R?(ie=D,D=null):ie=D.sibling;var st=h(m,D,W.value,_);if(st===null){D===null&&(D=ie);break}t&&D&&st.alternate===null&&e(m,D),f=s(st,f,R),A===null?k=st:A.sibling=st,A=st,D=ie}if(W.done)return n(m,D),Ne&&Ki(m,R),k;if(D===null){for(;!W.done;R++,W=g.next())W=d(m,W.value,_),W!==null&&(f=s(W,f,R),A===null?k=W:A.sibling=W,A=W);return Ne&&Ki(m,R),k}for(D=r(m,D);!W.done;R++,W=g.next())W=p(D,m,R,W.value,_),W!==null&&(t&&W.alternate!==null&&D.delete(W.key===null?R:W.key),f=s(W,f,R),A===null?k=W:A.sibling=W,A=W);return t&&D.forEach(function(Ze){return e(m,Ze)}),Ne&&Ki(m,R),k}function T(m,f,g,_){if(typeof g=="object"&&g!==null&&g.type===ro&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case tc:e:{for(var k=g.key,A=f;A!==null;){if(A.key===k){if(k=g.type,k===ro){if(A.tag===7){n(m,A.sibling),f=i(A,g.props.children),f.return=m,m=f;break e}}else if(A.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Xr&&L0(k)===A.type){n(m,A.sibling),f=i(A,g.props),f.ref=Da(m,A,g),f.return=m,m=f;break e}n(m,A);break}else e(m,A);A=A.sibling}g.type===ro?(f=cs(g.props.children,m.mode,_,g.key),f.return=m,m=f):(_=qc(g.type,g.key,g.props,null,m.mode,_),_.ref=Da(m,f,g),_.return=m,m=_)}return o(m);case no:e:{for(A=g.key;f!==null;){if(f.key===A)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=vp(g,m.mode,_),f.return=m,m=f}return o(m);case Xr:return A=g._init,T(m,f,A(g._payload),_)}if(Ha(g))return y(m,f,g,_);if(Ca(g))return v(m,f,g,_);hc(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,g),f.return=m,m=f):(n(m,f),f=yp(g,m.mode,_),f.return=m,m=f),o(m)):n(m,f)}return T}var Oo=FE(!0),UE=FE(!1),wu={},cr=$i(wu),Rl=$i(wu),Ol=$i(wu);function rs(t){if(t===wu)throw Error(x(174));return t}function wy(t,e){switch(ke(Ol,e),ke(Rl,t),ke(cr,wu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:om(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=om(e,t)}Ae(cr),ke(cr,e)}function $o(){Ae(cr),Ae(Rl),Ae(Ol)}function VE(t){rs(Ol.current);var e=rs(cr.current),n=om(e,t.type);e!==n&&(ke(Rl,t),ke(cr,n))}function Iy(t){Rl.current===t&&(Ae(cr),Ae(Rl))}var $e=$i(0);function Id(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var dp=[];function _y(){for(var t=0;t<dp.length;t++)dp[t]._workInProgressVersionPrimary=null;dp.length=0}var Uc=Ur.ReactCurrentDispatcher,hp=Ur.ReactCurrentBatchConfig,vs=0,Le=null,et=null,at=null,_d=!1,sl=!1,$l=0,YN=0;function $t(){throw Error(x(321))}function Ey(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qn(t[n],e[n]))return!1;return!0}function Sy(t,e,n,r,i,s){if(vs=s,Le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Uc.current=t===null||t.memoizedState===null?eD:tD,t=n(r,i),sl){s=0;do{if(sl=!1,$l=0,25<=s)throw Error(x(301));s+=1,at=et=null,e.updateQueue=null,Uc.current=nD,t=n(r,i)}while(sl)}if(Uc.current=Ed,e=et!==null&&et.next!==null,vs=0,at=et=Le=null,_d=!1,e)throw Error(x(300));return t}function Ty(){var t=$l!==0;return $l=0,t}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?Le.memoizedState=at=t:at=at.next=t,at}function Ln(){if(et===null){var t=Le.alternate;t=t!==null?t.memoizedState:null}else t=et.next;var e=at===null?Le.memoizedState:at.next;if(e!==null)at=e,et=t;else{if(t===null)throw Error(x(310));et=t,t={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},at===null?Le.memoizedState=at=t:at=at.next=t}return at}function Ll(t,e){return typeof e=="function"?e(t):e}function fp(t){var e=Ln(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=et,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((vs&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Le.lanes|=c,ws|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Qn(r,e.memoizedState)||(an=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Le.lanes|=s,ws|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function pp(t){var e=Ln(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Qn(s,e.memoizedState)||(an=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function BE(){}function jE(t,e){var n=Le,r=Ln(),i=e(),s=!Qn(r.memoizedState,i);if(s&&(r.memoizedState=i,an=!0),r=r.queue,ky(HE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||at!==null&&at.memoizedState.tag&1){if(n.flags|=2048,Ml(9,qE.bind(null,n,r,i,e),void 0,null),ct===null)throw Error(x(349));vs&30||zE(n,e,i)}return i}function zE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function qE(t,e,n,r){e.value=n,e.getSnapshot=r,KE(e)&&WE(t)}function HE(t,e,n){return n(function(){KE(e)&&WE(t)})}function KE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qn(t,n)}catch{return!0}}function WE(t){var e=Or(t,1);e!==null&&Gn(e,t,1,-1)}function M0(t){var e=Zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ll,lastRenderedState:t},e.queue=t,t=t.dispatch=ZN.bind(null,Le,t),[e.memoizedState,t]}function Ml(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function GE(){return Ln().memoizedState}function Vc(t,e,n,r){var i=Zn();Le.flags|=t,i.memoizedState=Ml(1|e,n,void 0,r===void 0?null:r)}function gh(t,e,n,r){var i=Ln();r=r===void 0?null:r;var s=void 0;if(et!==null){var o=et.memoizedState;if(s=o.destroy,r!==null&&Ey(r,o.deps)){i.memoizedState=Ml(e,n,s,r);return}}Le.flags|=t,i.memoizedState=Ml(1|e,n,s,r)}function F0(t,e){return Vc(8390656,8,t,e)}function ky(t,e){return gh(2048,8,t,e)}function QE(t,e){return gh(4,2,t,e)}function YE(t,e){return gh(4,4,t,e)}function XE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function JE(t,e,n){return n=n!=null?n.concat([t]):null,gh(4,4,XE.bind(null,e,t),n)}function Cy(){}function ZE(t,e){var n=Ln();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ey(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function eS(t,e){var n=Ln();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ey(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function tS(t,e,n){return vs&21?(Qn(n,e)||(n=iE(),Le.lanes|=n,ws|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,an=!0),t.memoizedState=n)}function XN(t,e){var n=Ie;Ie=n!==0&&4>n?n:4,t(!0);var r=hp.transition;hp.transition={};try{t(!1),e()}finally{Ie=n,hp.transition=r}}function nS(){return Ln().memoizedState}function JN(t,e,n){var r=pi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rS(t))iS(e,n);else if(n=OE(t,e,n,r),n!==null){var i=Yt();Gn(n,t,r,i),sS(n,e,r)}}function ZN(t,e,n){var r=pi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rS(t))iS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Qn(a,o)){var l=e.interleaved;l===null?(i.next=i,yy(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=OE(t,e,i,r),n!==null&&(i=Yt(),Gn(n,t,r,i),sS(n,e,r))}}function rS(t){var e=t.alternate;return t===Le||e!==null&&e===Le}function iS(t,e){sl=_d=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function sS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ry(t,n)}}var Ed={readContext:$n,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},eD={readContext:$n,useCallback:function(t,e){return Zn().memoizedState=[t,e===void 0?null:e],t},useContext:$n,useEffect:F0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Vc(4194308,4,XE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Vc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Vc(4,2,t,e)},useMemo:function(t,e){var n=Zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Zn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=JN.bind(null,Le,t),[r.memoizedState,t]},useRef:function(t){var e=Zn();return t={current:t},e.memoizedState=t},useState:M0,useDebugValue:Cy,useDeferredValue:function(t){return Zn().memoizedState=t},useTransition:function(){var t=M0(!1),e=t[0];return t=XN.bind(null,t[1]),Zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Le,i=Zn();if(Ne){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),ct===null)throw Error(x(349));vs&30||zE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,F0(HE.bind(null,r,s,t),[t]),r.flags|=2048,Ml(9,qE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Zn(),e=ct.identifierPrefix;if(Ne){var n=Sr,r=Er;n=(r&~(1<<32-Wn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=$l++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=YN++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},tD={readContext:$n,useCallback:ZE,useContext:$n,useEffect:ky,useImperativeHandle:JE,useInsertionEffect:QE,useLayoutEffect:YE,useMemo:eS,useReducer:fp,useRef:GE,useState:function(){return fp(Ll)},useDebugValue:Cy,useDeferredValue:function(t){var e=Ln();return tS(e,et.memoizedState,t)},useTransition:function(){var t=fp(Ll)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:BE,useSyncExternalStore:jE,useId:nS,unstable_isNewReconciler:!1},nD={readContext:$n,useCallback:ZE,useContext:$n,useEffect:ky,useImperativeHandle:JE,useInsertionEffect:QE,useLayoutEffect:YE,useMemo:eS,useReducer:pp,useRef:GE,useState:function(){return pp(Ll)},useDebugValue:Cy,useDeferredValue:function(t){var e=Ln();return et===null?e.memoizedState=t:tS(e,et.memoizedState,t)},useTransition:function(){var t=pp(Ll)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:BE,useSyncExternalStore:jE,useId:nS,unstable_isNewReconciler:!1};function Lo(t,e){try{var n="",r=e;do n+=Nx(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function mp(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var rD=typeof WeakMap=="function"?WeakMap:Map;function oS(t,e,n){n=Ar(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Td||(Td=!0,Um=r),xm(t,e)},n}function aS(t,e,n){n=Ar(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){xm(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xm(t,e),typeof r!="function"&&(fi===null?fi=new Set([this]):fi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function U0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new rD;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=yD.bind(null,t,e,n),e.then(t,t))}function V0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function B0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ar(-1,1),e.tag=2,hi(n,e,1))),n.lanes|=1),t)}var iD=Ur.ReactCurrentOwner,an=!1;function Kt(t,e,n,r){e.child=t===null?UE(e,null,n,r):Oo(e,t.child,n,r)}function j0(t,e,n,r,i){n=n.render;var s=e.ref;return Eo(e,i),r=Sy(t,e,n,r,s,i),n=Ty(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$r(t,e,i)):(Ne&&n&&dy(e),e.flags|=1,Kt(t,e,r,i),e.child)}function z0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Oy(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,lS(t,e,s,r,i)):(t=qc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:xl,n(o,r)&&t.ref===e.ref)return $r(t,e,i)}return e.flags|=1,t=mi(s,r),t.ref=e.ref,t.return=e,e.child=t}function lS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(xl(s,r)&&t.ref===e.ref)if(an=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(an=!0);else return e.lanes=t.lanes,$r(t,e,i)}return Nm(t,e,n,r,i)}function uS(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(po,yn),yn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ke(po,yn),yn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ke(po,yn),yn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ke(po,yn),yn|=r;return Kt(t,e,i,n),e.child}function cS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Nm(t,e,n,r,i){var s=hn(n)?gs:jt.current;return s=Po(e,s),Eo(e,i),n=Sy(t,e,n,r,s,i),r=Ty(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$r(t,e,i)):(Ne&&r&&dy(e),e.flags|=1,Kt(t,e,n,i),e.child)}function q0(t,e,n,r,i){if(hn(n)){var s=!0;pd(e)}else s=!1;if(Eo(e,i),e.stateNode===null)Bc(t,e),ME(e,n,r),Am(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=$n(u):(u=hn(n)?gs:jt.current,u=Po(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&$0(e,o,r,u),Jr=!1;var h=e.memoizedState;o.state=h,wd(e,r,o,i),l=e.memoizedState,a!==r||h!==l||dn.current||Jr?(typeof c=="function"&&(bm(e,n,c,r),l=e.memoizedState),(a=Jr||O0(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,$E(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:zn(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=$n(l):(l=hn(n)?gs:jt.current,l=Po(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&$0(e,o,r,l),Jr=!1,h=e.memoizedState,o.state=h,wd(e,r,o,i);var y=e.memoizedState;a!==d||h!==y||dn.current||Jr?(typeof p=="function"&&(bm(e,n,p,r),y=e.memoizedState),(u=Jr||O0(e,n,u,r,h,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Dm(t,e,n,r,s,i)}function Dm(t,e,n,r,i,s){cS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&x0(e,n,!1),$r(t,e,s);r=e.stateNode,iD.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Oo(e,t.child,null,s),e.child=Oo(e,null,a,s)):Kt(t,e,a,s),e.memoizedState=r.state,i&&x0(e,n,!0),e.child}function dS(t){var e=t.stateNode;e.pendingContext?A0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&A0(t,e.context,!1),wy(t,e.containerInfo)}function H0(t,e,n,r,i){return Ro(),fy(i),e.flags|=256,Kt(t,e,n,r),e.child}var Pm={dehydrated:null,treeContext:null,retryLane:0};function Rm(t){return{baseLanes:t,cachePool:null,transitions:null}}function hS(t,e,n){var r=e.pendingProps,i=$e.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ke($e,i&1),t===null)return km(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=wh(o,r,0,null),t=cs(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Rm(n),e.memoizedState=Pm,t):by(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return sD(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=mi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=mi(a,s):(s=cs(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Rm(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Pm,r}return s=t.child,t=s.sibling,r=mi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function by(t,e){return e=wh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fc(t,e,n,r){return r!==null&&fy(r),Oo(e,t.child,null,n),t=by(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function sD(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=mp(Error(x(422))),fc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=wh({mode:"visible",children:r.children},i,0,null),s=cs(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Oo(e,t.child,null,o),e.child.memoizedState=Rm(o),e.memoizedState=Pm,s);if(!(e.mode&1))return fc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=mp(s,r,void 0),fc(t,e,o,r)}if(a=(o&t.childLanes)!==0,an||a){if(r=ct,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Or(t,i),Gn(r,t,i,-1))}return Ry(),r=mp(Error(x(421))),fc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=vD.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,wn=di(i.nextSibling),_n=e,Ne=!0,Hn=null,t!==null&&(Nn[Dn++]=Er,Nn[Dn++]=Sr,Nn[Dn++]=ys,Er=t.id,Sr=t.overflow,ys=e),e=by(e,r.children),e.flags|=4096,e)}function K0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Cm(t.return,e,n)}function gp(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function fS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Kt(t,e,r.children,n),r=$e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&K0(t,n,e);else if(t.tag===19)K0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ke($e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Id(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),gp(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Id(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}gp(e,!0,n,null,s);break;case"together":gp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Bc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function $r(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ws|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=mi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function oD(t,e,n){switch(e.tag){case 3:dS(e),Ro();break;case 5:VE(e);break;case 1:hn(e.type)&&pd(e);break;case 4:wy(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ke(yd,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ke($e,$e.current&1),e.flags|=128,null):n&e.child.childLanes?hS(t,e,n):(ke($e,$e.current&1),t=$r(t,e,n),t!==null?t.sibling:null);ke($e,$e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return fS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ke($e,$e.current),r)break;return null;case 22:case 23:return e.lanes=0,uS(t,e,n)}return $r(t,e,n)}var pS,Om,mS,gS;pS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Om=function(){};mS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,rs(cr.current);var s=null;switch(n){case"input":i=nm(t,i),r=nm(t,r),s=[];break;case"select":i=Me({},i,{value:void 0}),r=Me({},r,{value:void 0}),s=[];break;case"textarea":i=sm(t,i),r=sm(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=hd)}am(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(El.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(El.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ce("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};gS=function(t,e,n,r){n!==r&&(e.flags|=4)};function Pa(t,e){if(!Ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Lt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function aD(t,e,n){var r=e.pendingProps;switch(hy(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(e),null;case 1:return hn(e.type)&&fd(),Lt(e),null;case 3:return r=e.stateNode,$o(),Ae(dn),Ae(jt),_y(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(dc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(jm(Hn),Hn=null))),Om(t,e),Lt(e),null;case 5:Iy(e);var i=rs(Ol.current);if(n=e.type,t!==null&&e.stateNode!=null)mS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return Lt(e),null}if(t=rs(cr.current),dc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[er]=e,r[Pl]=s,t=(e.mode&1)!==0,n){case"dialog":Ce("cancel",r),Ce("close",r);break;case"iframe":case"object":case"embed":Ce("load",r);break;case"video":case"audio":for(i=0;i<Wa.length;i++)Ce(Wa[i],r);break;case"source":Ce("error",r);break;case"img":case"image":case"link":Ce("error",r),Ce("load",r);break;case"details":Ce("toggle",r);break;case"input":t0(r,s),Ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ce("invalid",r);break;case"textarea":r0(r,s),Ce("invalid",r)}am(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&cc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&cc(r.textContent,a,t),i=["children",""+a]):El.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ce("scroll",r)}switch(n){case"input":nc(r),n0(r,s,!0);break;case"textarea":nc(r),i0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=hd)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=z_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[er]=e,t[Pl]=r,pS(t,e,!1,!1),e.stateNode=t;e:{switch(o=lm(n,r),n){case"dialog":Ce("cancel",t),Ce("close",t),i=r;break;case"iframe":case"object":case"embed":Ce("load",t),i=r;break;case"video":case"audio":for(i=0;i<Wa.length;i++)Ce(Wa[i],t);i=r;break;case"source":Ce("error",t),i=r;break;case"img":case"image":case"link":Ce("error",t),Ce("load",t),i=r;break;case"details":Ce("toggle",t),i=r;break;case"input":t0(t,r),i=nm(t,r),Ce("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Me({},r,{value:void 0}),Ce("invalid",t);break;case"textarea":r0(t,r),i=sm(t,r),Ce("invalid",t);break;default:i=r}am(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?K_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&q_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Sl(t,l):typeof l=="number"&&Sl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(El.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ce("scroll",t):l!=null&&Xg(t,s,l,o))}switch(n){case"input":nc(t),n0(t,r,!1);break;case"textarea":nc(t),i0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+wi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?vo(t,!!r.multiple,s,!1):r.defaultValue!=null&&vo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=hd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Lt(e),null;case 6:if(t&&e.stateNode!=null)gS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=rs(Ol.current),rs(cr.current),dc(e)){if(r=e.stateNode,n=e.memoizedProps,r[er]=e,(s=r.nodeValue!==n)&&(t=_n,t!==null))switch(t.tag){case 3:cc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&cc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[er]=e,e.stateNode=r}return Lt(e),null;case 13:if(Ae($e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&wn!==null&&e.mode&1&&!(e.flags&128))RE(),Ro(),e.flags|=98560,s=!1;else if(s=dc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[er]=e}else Ro(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Lt(e),s=!1}else Hn!==null&&(jm(Hn),Hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||$e.current&1?nt===0&&(nt=3):Ry())),e.updateQueue!==null&&(e.flags|=4),Lt(e),null);case 4:return $o(),Om(t,e),t===null&&Nl(e.stateNode.containerInfo),Lt(e),null;case 10:return gy(e.type._context),Lt(e),null;case 17:return hn(e.type)&&fd(),Lt(e),null;case 19:if(Ae($e),s=e.memoizedState,s===null)return Lt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Pa(s,!1);else{if(nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Id(t),o!==null){for(e.flags|=128,Pa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ke($e,$e.current&1|2),e.child}t=t.sibling}s.tail!==null&&We()>Mo&&(e.flags|=128,r=!0,Pa(s,!1),e.lanes=4194304)}else{if(!r)if(t=Id(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Pa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ne)return Lt(e),null}else 2*We()-s.renderingStartTime>Mo&&n!==1073741824&&(e.flags|=128,r=!0,Pa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=We(),e.sibling=null,n=$e.current,ke($e,r?n&1|2:n&1),e):(Lt(e),null);case 22:case 23:return Py(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?yn&1073741824&&(Lt(e),e.subtreeFlags&6&&(e.flags|=8192)):Lt(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function lD(t,e){switch(hy(e),e.tag){case 1:return hn(e.type)&&fd(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $o(),Ae(dn),Ae(jt),_y(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Iy(e),null;case 13:if(Ae($e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));Ro()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ae($e),null;case 4:return $o(),null;case 10:return gy(e.type._context),null;case 22:case 23:return Py(),null;case 24:return null;default:return null}}var pc=!1,Ft=!1,uD=typeof WeakSet=="function"?WeakSet:Set,B=null;function fo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(t,e,r)}else n.current=null}function $m(t,e,n){try{n()}catch(r){Ve(t,e,r)}}var W0=!1;function cD(t,e){if(vm=ud,t=IE(),cy(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wm={focusedElem:t,selectionRange:n},ud=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,T=y.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:zn(e.type,v),T);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(_){Ve(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return y=W0,W0=!1,y}function ol(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&$m(e,n,s)}i=i.next}while(i!==r)}}function yh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Lm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function yS(t){var e=t.alternate;e!==null&&(t.alternate=null,yS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[er],delete e[Pl],delete e[Em],delete e[KN],delete e[WN])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vS(t){return t.tag===5||t.tag===3||t.tag===4}function G0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=hd));else if(r!==4&&(t=t.child,t!==null))for(Mm(t,e,n),t=t.sibling;t!==null;)Mm(t,e,n),t=t.sibling}function Fm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Fm(t,e,n),t=t.sibling;t!==null;)Fm(t,e,n),t=t.sibling}var Et=null,qn=!1;function Kr(t,e,n){for(n=n.child;n!==null;)wS(t,e,n),n=n.sibling}function wS(t,e,n){if(ur&&typeof ur.onCommitFiberUnmount=="function")try{ur.onCommitFiberUnmount(uh,n)}catch{}switch(n.tag){case 5:Ft||fo(n,e);case 6:var r=Et,i=qn;Et=null,Kr(t,e,n),Et=r,qn=i,Et!==null&&(qn?(t=Et,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Et.removeChild(n.stateNode));break;case 18:Et!==null&&(qn?(t=Et,n=n.stateNode,t.nodeType===8?up(t.parentNode,n):t.nodeType===1&&up(t,n),bl(t)):up(Et,n.stateNode));break;case 4:r=Et,i=qn,Et=n.stateNode.containerInfo,qn=!0,Kr(t,e,n),Et=r,qn=i;break;case 0:case 11:case 14:case 15:if(!Ft&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&$m(n,e,o),i=i.next}while(i!==r)}Kr(t,e,n);break;case 1:if(!Ft&&(fo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ve(n,e,a)}Kr(t,e,n);break;case 21:Kr(t,e,n);break;case 22:n.mode&1?(Ft=(r=Ft)||n.memoizedState!==null,Kr(t,e,n),Ft=r):Kr(t,e,n);break;default:Kr(t,e,n)}}function Q0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new uD),e.forEach(function(r){var i=wD.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function jn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Et=a.stateNode,qn=!1;break e;case 3:Et=a.stateNode.containerInfo,qn=!0;break e;case 4:Et=a.stateNode.containerInfo,qn=!0;break e}a=a.return}if(Et===null)throw Error(x(160));wS(s,o,i),Et=null,qn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ve(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)IS(e,t),e=e.sibling}function IS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jn(e,t),Jn(t),r&4){try{ol(3,t,t.return),yh(3,t)}catch(v){Ve(t,t.return,v)}try{ol(5,t,t.return)}catch(v){Ve(t,t.return,v)}}break;case 1:jn(e,t),Jn(t),r&512&&n!==null&&fo(n,n.return);break;case 5:if(jn(e,t),Jn(t),r&512&&n!==null&&fo(n,n.return),t.flags&32){var i=t.stateNode;try{Sl(i,"")}catch(v){Ve(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&B_(i,s),lm(a,o);var u=lm(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?K_(i,d):c==="dangerouslySetInnerHTML"?q_(i,d):c==="children"?Sl(i,d):Xg(i,c,d,u)}switch(a){case"input":rm(i,s);break;case"textarea":j_(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?vo(i,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?vo(i,!!s.multiple,s.defaultValue,!0):vo(i,!!s.multiple,s.multiple?[]:"",!1))}i[Pl]=s}catch(v){Ve(t,t.return,v)}}break;case 6:if(jn(e,t),Jn(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Ve(t,t.return,v)}}break;case 3:if(jn(e,t),Jn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{bl(e.containerInfo)}catch(v){Ve(t,t.return,v)}break;case 4:jn(e,t),Jn(t);break;case 13:jn(e,t),Jn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ny=We())),r&4&&Q0(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ft=(u=Ft)||c,jn(e,t),Ft=u):jn(e,t),Jn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(B=t,c=t.child;c!==null;){for(d=B=c;B!==null;){switch(h=B,p=h.child,h.tag){case 0:case 11:case 14:case 15:ol(4,h,h.return);break;case 1:fo(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){Ve(r,n,v)}}break;case 5:fo(h,h.return);break;case 22:if(h.memoizedState!==null){X0(d);continue}}p!==null?(p.return=h,B=p):X0(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=H_("display",o))}catch(v){Ve(t,t.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){Ve(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:jn(e,t),Jn(t),r&4&&Q0(t);break;case 21:break;default:jn(e,t),Jn(t)}}function Jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(vS(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Sl(i,""),r.flags&=-33);var s=G0(t);Fm(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=G0(t);Mm(t,a,o);break;default:throw Error(x(161))}}catch(l){Ve(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function dD(t,e,n){B=t,_S(t)}function _S(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||pc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ft;a=pc;var u=Ft;if(pc=o,(Ft=l)&&!u)for(B=i;B!==null;)o=B,l=o.child,o.tag===22&&o.memoizedState!==null?J0(i):l!==null?(l.return=o,B=l):J0(i);for(;s!==null;)B=s,_S(s),s=s.sibling;B=i,pc=a,Ft=u}Y0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):Y0(t)}}function Y0(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ft||yh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ft)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&R0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}R0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&bl(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}Ft||e.flags&512&&Lm(e)}catch(h){Ve(e,e.return,h)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function X0(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function J0(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yh(4,e)}catch(l){Ve(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ve(e,i,l)}}var s=e.return;try{Lm(e)}catch(l){Ve(e,s,l)}break;case 5:var o=e.return;try{Lm(e)}catch(l){Ve(e,o,l)}}}catch(l){Ve(e,e.return,l)}if(e===t){B=null;break}var a=e.sibling;if(a!==null){a.return=e.return,B=a;break}B=e.return}}var hD=Math.ceil,Sd=Ur.ReactCurrentDispatcher,Ay=Ur.ReactCurrentOwner,On=Ur.ReactCurrentBatchConfig,he=0,ct=null,Je=null,kt=0,yn=0,po=$i(0),nt=0,Fl=null,ws=0,vh=0,xy=0,al=null,sn=null,Ny=0,Mo=1/0,Ir=null,Td=!1,Um=null,fi=null,mc=!1,ii=null,kd=0,ll=0,Vm=null,jc=-1,zc=0;function Yt(){return he&6?We():jc!==-1?jc:jc=We()}function pi(t){return t.mode&1?he&2&&kt!==0?kt&-kt:QN.transition!==null?(zc===0&&(zc=iE()),zc):(t=Ie,t!==0||(t=window.event,t=t===void 0?16:dE(t.type)),t):1}function Gn(t,e,n,r){if(50<ll)throw ll=0,Vm=null,Error(x(185));gu(t,n,r),(!(he&2)||t!==ct)&&(t===ct&&(!(he&2)&&(vh|=n),nt===4&&ei(t,kt)),fn(t,r),n===1&&he===0&&!(e.mode&1)&&(Mo=We()+500,ph&&Li()))}function fn(t,e){var n=t.callbackNode;Qx(t,e);var r=ld(t,t===ct?kt:0);if(r===0)n!==null&&a0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&a0(n),e===1)t.tag===0?GN(Z0.bind(null,t)):NE(Z0.bind(null,t)),qN(function(){!(he&6)&&Li()}),n=null;else{switch(sE(r)){case 1:n=ny;break;case 4:n=nE;break;case 16:n=ad;break;case 536870912:n=rE;break;default:n=ad}n=xS(n,ES.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ES(t,e){if(jc=-1,zc=0,he&6)throw Error(x(327));var n=t.callbackNode;if(So()&&t.callbackNode!==n)return null;var r=ld(t,t===ct?kt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Cd(t,r);else{e=r;var i=he;he|=2;var s=TS();(ct!==t||kt!==e)&&(Ir=null,Mo=We()+500,us(t,e));do try{mD();break}catch(a){SS(t,a)}while(1);my(),Sd.current=s,he=i,Je!==null?e=0:(ct=null,kt=0,e=nt)}if(e!==0){if(e===2&&(i=fm(t),i!==0&&(r=i,e=Bm(t,i))),e===1)throw n=Fl,us(t,0),ei(t,r),fn(t,We()),n;if(e===6)ei(t,r);else{if(i=t.current.alternate,!(r&30)&&!fD(i)&&(e=Cd(t,r),e===2&&(s=fm(t),s!==0&&(r=s,e=Bm(t,s))),e===1))throw n=Fl,us(t,0),ei(t,r),fn(t,We()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:Wi(t,sn,Ir);break;case 3:if(ei(t,r),(r&130023424)===r&&(e=Ny+500-We(),10<e)){if(ld(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Yt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=_m(Wi.bind(null,t,sn,Ir),e);break}Wi(t,sn,Ir);break;case 4:if(ei(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Wn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=We()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hD(r/1960))-r,10<r){t.timeoutHandle=_m(Wi.bind(null,t,sn,Ir),r);break}Wi(t,sn,Ir);break;case 5:Wi(t,sn,Ir);break;default:throw Error(x(329))}}}return fn(t,We()),t.callbackNode===n?ES.bind(null,t):null}function Bm(t,e){var n=al;return t.current.memoizedState.isDehydrated&&(us(t,e).flags|=256),t=Cd(t,e),t!==2&&(e=sn,sn=n,e!==null&&jm(e)),t}function jm(t){sn===null?sn=t:sn.push.apply(sn,t)}function fD(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Qn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ei(t,e){for(e&=~xy,e&=~vh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wn(e),r=1<<n;t[n]=-1,e&=~r}}function Z0(t){if(he&6)throw Error(x(327));So();var e=ld(t,0);if(!(e&1))return fn(t,We()),null;var n=Cd(t,e);if(t.tag!==0&&n===2){var r=fm(t);r!==0&&(e=r,n=Bm(t,r))}if(n===1)throw n=Fl,us(t,0),ei(t,e),fn(t,We()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wi(t,sn,Ir),fn(t,We()),null}function Dy(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(Mo=We()+500,ph&&Li())}}function Is(t){ii!==null&&ii.tag===0&&!(he&6)&&So();var e=he;he|=1;var n=On.transition,r=Ie;try{if(On.transition=null,Ie=1,t)return t()}finally{Ie=r,On.transition=n,he=e,!(he&6)&&Li()}}function Py(){yn=po.current,Ae(po)}function us(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,zN(n)),Je!==null)for(n=Je.return;n!==null;){var r=n;switch(hy(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fd();break;case 3:$o(),Ae(dn),Ae(jt),_y();break;case 5:Iy(r);break;case 4:$o();break;case 13:Ae($e);break;case 19:Ae($e);break;case 10:gy(r.type._context);break;case 22:case 23:Py()}n=n.return}if(ct=t,Je=t=mi(t.current,null),kt=yn=e,nt=0,Fl=null,xy=vh=ws=0,sn=al=null,ns!==null){for(e=0;e<ns.length;e++)if(n=ns[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ns=null}return t}function SS(t,e){do{var n=Je;try{if(my(),Uc.current=Ed,_d){for(var r=Le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}_d=!1}if(vs=0,at=et=Le=null,sl=!1,$l=0,Ay.current=null,n===null||n.return===null){nt=1,Fl=e,Je=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=V0(o);if(p!==null){p.flags&=-257,B0(p,o,a,s,e),p.mode&1&&U0(s,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){U0(s,u,e),Ry();break e}l=Error(x(426))}}else if(Ne&&a.mode&1){var T=V0(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),B0(T,o,a,s,e),fy(Lo(l,a));break e}}s=l=Lo(l,a),nt!==4&&(nt=2),al===null?al=[s]:al.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=oS(s,l,e);P0(s,m);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(fi===null||!fi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=aS(s,a,e);P0(s,_);break e}}s=s.return}while(s!==null)}CS(n)}catch(k){e=k,Je===n&&n!==null&&(Je=n=n.return);continue}break}while(1)}function TS(){var t=Sd.current;return Sd.current=Ed,t===null?Ed:t}function Ry(){(nt===0||nt===3||nt===2)&&(nt=4),ct===null||!(ws&268435455)&&!(vh&268435455)||ei(ct,kt)}function Cd(t,e){var n=he;he|=2;var r=TS();(ct!==t||kt!==e)&&(Ir=null,us(t,e));do try{pD();break}catch(i){SS(t,i)}while(1);if(my(),he=n,Sd.current=r,Je!==null)throw Error(x(261));return ct=null,kt=0,nt}function pD(){for(;Je!==null;)kS(Je)}function mD(){for(;Je!==null&&!Vx();)kS(Je)}function kS(t){var e=AS(t.alternate,t,yn);t.memoizedProps=t.pendingProps,e===null?CS(t):Je=e,Ay.current=null}function CS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=lD(n,e),n!==null){n.flags&=32767,Je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{nt=6,Je=null;return}}else if(n=aD(n,e,yn),n!==null){Je=n;return}if(e=e.sibling,e!==null){Je=e;return}Je=e=t}while(e!==null);nt===0&&(nt=5)}function Wi(t,e,n){var r=Ie,i=On.transition;try{On.transition=null,Ie=1,gD(t,e,n,r)}finally{On.transition=i,Ie=r}return null}function gD(t,e,n,r){do So();while(ii!==null);if(he&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Yx(t,s),t===ct&&(Je=ct=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mc||(mc=!0,xS(ad,function(){return So(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=On.transition,On.transition=null;var o=Ie;Ie=1;var a=he;he|=4,Ay.current=null,cD(t,n),IS(n,t),LN(wm),ud=!!vm,wm=vm=null,t.current=n,dD(n),Bx(),he=a,Ie=o,On.transition=s}else t.current=n;if(mc&&(mc=!1,ii=t,kd=i),s=t.pendingLanes,s===0&&(fi=null),qx(n.stateNode),fn(t,We()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Td)throw Td=!1,t=Um,Um=null,t;return kd&1&&t.tag!==0&&So(),s=t.pendingLanes,s&1?t===Vm?ll++:(ll=0,Vm=t):ll=0,Li(),null}function So(){if(ii!==null){var t=sE(kd),e=On.transition,n=Ie;try{if(On.transition=null,Ie=16>t?16:t,ii===null)var r=!1;else{if(t=ii,ii=null,kd=0,he&6)throw Error(x(331));var i=he;for(he|=4,B=t.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(B=u;B!==null;){var c=B;switch(c.tag){case 0:case 11:case 15:ol(8,c,s)}var d=c.child;if(d!==null)d.return=c,B=d;else for(;B!==null;){c=B;var h=c.sibling,p=c.return;if(yS(c),c===u){B=null;break}if(h!==null){h.return=p,B=h;break}B=p}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var T=v.sibling;v.sibling=null,v=T}while(v!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ol(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,B=m;break e}B=s.return}}var f=t.current;for(B=f;B!==null;){o=B;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,B=g;else e:for(o=f;B!==null;){if(a=B,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:yh(9,a)}}catch(k){Ve(a,a.return,k)}if(a===o){B=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,B=_;break e}B=a.return}}if(he=i,Li(),ur&&typeof ur.onPostCommitFiberRoot=="function")try{ur.onPostCommitFiberRoot(uh,t)}catch{}r=!0}return r}finally{Ie=n,On.transition=e}}return!1}function eI(t,e,n){e=Lo(n,e),e=oS(t,e,1),t=hi(t,e,1),e=Yt(),t!==null&&(gu(t,1,e),fn(t,e))}function Ve(t,e,n){if(t.tag===3)eI(t,t,n);else for(;e!==null;){if(e.tag===3){eI(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fi===null||!fi.has(r))){t=Lo(n,t),t=aS(e,t,1),e=hi(e,t,1),t=Yt(),e!==null&&(gu(e,1,t),fn(e,t));break}}e=e.return}}function yD(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,ct===t&&(kt&n)===n&&(nt===4||nt===3&&(kt&130023424)===kt&&500>We()-Ny?us(t,0):xy|=n),fn(t,e)}function bS(t,e){e===0&&(t.mode&1?(e=sc,sc<<=1,!(sc&130023424)&&(sc=4194304)):e=1);var n=Yt();t=Or(t,e),t!==null&&(gu(t,e,n),fn(t,n))}function vD(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),bS(t,n)}function wD(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),bS(t,n)}var AS;AS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dn.current)an=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return an=!1,oD(t,e,n);an=!!(t.flags&131072)}else an=!1,Ne&&e.flags&1048576&&DE(e,gd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Bc(t,e),t=e.pendingProps;var i=Po(e,jt.current);Eo(e,n),i=Sy(null,e,r,t,i,n);var s=Ty();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hn(r)?(s=!0,pd(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vy(e),i.updater=mh,e.stateNode=i,i._reactInternals=e,Am(e,r,t,n),e=Dm(null,e,r,!0,s,n)):(e.tag=0,Ne&&s&&dy(e),Kt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Bc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=_D(r),t=zn(r,t),i){case 0:e=Nm(null,e,r,t,n);break e;case 1:e=q0(null,e,r,t,n);break e;case 11:e=j0(null,e,r,t,n);break e;case 14:e=z0(null,e,r,zn(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zn(r,i),Nm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zn(r,i),q0(t,e,r,i,n);case 3:e:{if(dS(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,$E(t,e),wd(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Lo(Error(x(423)),e),e=H0(t,e,r,n,i);break e}else if(r!==i){i=Lo(Error(x(424)),e),e=H0(t,e,r,n,i);break e}else for(wn=di(e.stateNode.containerInfo.firstChild),_n=e,Ne=!0,Hn=null,n=UE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ro(),r===i){e=$r(t,e,n);break e}Kt(t,e,r,n)}e=e.child}return e;case 5:return VE(e),t===null&&km(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Im(r,i)?o=null:s!==null&&Im(r,s)&&(e.flags|=32),cS(t,e),Kt(t,e,o,n),e.child;case 6:return t===null&&km(e),null;case 13:return hS(t,e,n);case 4:return wy(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Oo(e,null,r,n):Kt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zn(r,i),j0(t,e,r,i,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ke(yd,r._currentValue),r._currentValue=o,s!==null)if(Qn(s.value,o)){if(s.children===i.children&&!dn.current){e=$r(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Ar(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Cm(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Cm(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Kt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Eo(e,n),i=$n(i),r=r(i),e.flags|=1,Kt(t,e,r,n),e.child;case 14:return r=e.type,i=zn(r,e.pendingProps),i=zn(r.type,i),z0(t,e,r,i,n);case 15:return lS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zn(r,i),Bc(t,e),e.tag=1,hn(r)?(t=!0,pd(e)):t=!1,Eo(e,n),ME(e,r,i),Am(e,r,i,n),Dm(null,e,r,!0,t,n);case 19:return fS(t,e,n);case 22:return uS(t,e,n)}throw Error(x(156,e.tag))};function xS(t,e){return tE(t,e)}function ID(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(t,e,n,r){return new ID(t,e,n,r)}function Oy(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _D(t){if(typeof t=="function")return Oy(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zg)return 11;if(t===ey)return 14}return 2}function mi(t,e){var n=t.alternate;return n===null?(n=Pn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function qc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Oy(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ro:return cs(n.children,i,s,e);case Jg:o=8,i|=8;break;case Jp:return t=Pn(12,n,e,i|2),t.elementType=Jp,t.lanes=s,t;case Zp:return t=Pn(13,n,e,i),t.elementType=Zp,t.lanes=s,t;case em:return t=Pn(19,n,e,i),t.elementType=em,t.lanes=s,t;case F_:return wh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L_:o=10;break e;case M_:o=9;break e;case Zg:o=11;break e;case ey:o=14;break e;case Xr:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=Pn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function cs(t,e,n,r){return t=Pn(7,t,r,e),t.lanes=n,t}function wh(t,e,n,r){return t=Pn(22,t,r,e),t.elementType=F_,t.lanes=n,t.stateNode={isHidden:!1},t}function yp(t,e,n){return t=Pn(6,t,null,e),t.lanes=n,t}function vp(t,e,n){return e=Pn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ED(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jf(0),this.expirationTimes=Jf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $y(t,e,n,r,i,s,o,a,l){return t=new ED(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vy(s),t}function SD(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:no,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function NS(t){if(!t)return Ii;t=t._reactInternals;e:{if(Fs(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(hn(n))return xE(t,n,e)}return e}function DS(t,e,n,r,i,s,o,a,l){return t=$y(n,r,!0,t,i,s,o,a,l),t.context=NS(null),n=t.current,r=Yt(),i=pi(n),s=Ar(r,i),s.callback=e??null,hi(n,s,i),t.current.lanes=i,gu(t,i,r),fn(t,r),t}function Ih(t,e,n,r){var i=e.current,s=Yt(),o=pi(i);return n=NS(n),e.context===null?e.context=n:e.pendingContext=n,e=Ar(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=hi(i,e,o),t!==null&&(Gn(t,i,o,s),Fc(t,i,o)),o}function bd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function tI(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ly(t,e){tI(t,e),(t=t.alternate)&&tI(t,e)}function TD(){return null}var PS=typeof reportError=="function"?reportError:function(t){console.error(t)};function My(t){this._internalRoot=t}_h.prototype.render=My.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));Ih(t,e,null,null)};_h.prototype.unmount=My.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Is(function(){Ih(null,t,null,null)}),e[Rr]=null}};function _h(t){this._internalRoot=t}_h.prototype.unstable_scheduleHydration=function(t){if(t){var e=lE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Zr.length&&e!==0&&e<Zr[n].priority;n++);Zr.splice(n,0,t),n===0&&cE(t)}};function Fy(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Eh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function nI(){}function kD(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=bd(o);s.call(u)}}var o=DS(e,r,t,0,null,!1,!1,"",nI);return t._reactRootContainer=o,t[Rr]=o.current,Nl(t.nodeType===8?t.parentNode:t),Is(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=bd(l);a.call(u)}}var l=$y(t,0,!1,null,null,!1,!1,"",nI);return t._reactRootContainer=l,t[Rr]=l.current,Nl(t.nodeType===8?t.parentNode:t),Is(function(){Ih(e,l,n,r)}),l}function Sh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=bd(o);a.call(l)}}Ih(e,o,t,i)}else o=kD(n,e,t,i,r);return bd(o)}oE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ka(e.pendingLanes);n!==0&&(ry(e,n|1),fn(e,We()),!(he&6)&&(Mo=We()+500,Li()))}break;case 13:Is(function(){var r=Or(t,1);if(r!==null){var i=Yt();Gn(r,t,1,i)}}),Ly(t,1)}};iy=function(t){if(t.tag===13){var e=Or(t,134217728);if(e!==null){var n=Yt();Gn(e,t,134217728,n)}Ly(t,134217728)}};aE=function(t){if(t.tag===13){var e=pi(t),n=Or(t,e);if(n!==null){var r=Yt();Gn(n,t,e,r)}Ly(t,e)}};lE=function(){return Ie};uE=function(t,e){var n=Ie;try{return Ie=t,e()}finally{Ie=n}};cm=function(t,e,n){switch(e){case"input":if(rm(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=fh(r);if(!i)throw Error(x(90));V_(r),rm(r,i)}}}break;case"textarea":j_(t,n);break;case"select":e=n.value,e!=null&&vo(t,!!n.multiple,e,!1)}};Q_=Dy;Y_=Is;var CD={usingClientEntryPoint:!1,Events:[vu,ao,fh,W_,G_,Dy]},Ra={findFiberByHostInstance:ts,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},bD={bundleType:Ra.bundleType,version:Ra.version,rendererPackageName:Ra.rendererPackageName,rendererConfig:Ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ur.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Z_(t),t===null?null:t.stateNode},findFiberByHostInstance:Ra.findFiberByHostInstance||TD,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{uh=gc.inject(bD),ur=gc}catch{}}bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CD;bn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fy(e))throw Error(x(200));return SD(t,e,null,n)};bn.createRoot=function(t,e){if(!Fy(t))throw Error(x(299));var n=!1,r="",i=PS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=$y(t,1,!1,null,null,n,!1,r,i),t[Rr]=e.current,Nl(t.nodeType===8?t.parentNode:t),new My(e)};bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=Z_(e),t=t===null?null:t.stateNode,t};bn.flushSync=function(t){return Is(t)};bn.hydrate=function(t,e,n){if(!Eh(e))throw Error(x(200));return Sh(null,t,e,!0,n)};bn.hydrateRoot=function(t,e,n){if(!Fy(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=PS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=DS(e,null,t,1,n??null,i,!1,s,o),t[Rr]=e.current,Nl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new _h(e)};bn.render=function(t,e,n){if(!Eh(e))throw Error(x(200));return Sh(null,t,e,!1,n)};bn.unmountComponentAtNode=function(t){if(!Eh(t))throw Error(x(40));return t._reactRootContainer?(Is(function(){Sh(null,null,t,!1,function(){t._reactRootContainer=null,t[Rr]=null})}),!0):!1};bn.unstable_batchedUpdates=Dy;bn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Eh(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return Sh(t,e,n,!1,r)};bn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=bn})(Tx);var rI=Qp;Gp.createRoot=rI.createRoot,Gp.hydrateRoot=rI.hydrateRoot;var Ad={},AD={get exports(){return Ad},set exports(t){Ad=t}},_e={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uy=Symbol.for("react.element"),Vy=Symbol.for("react.portal"),Th=Symbol.for("react.fragment"),kh=Symbol.for("react.strict_mode"),Ch=Symbol.for("react.profiler"),bh=Symbol.for("react.provider"),Ah=Symbol.for("react.context"),xD=Symbol.for("react.server_context"),xh=Symbol.for("react.forward_ref"),Nh=Symbol.for("react.suspense"),Dh=Symbol.for("react.suspense_list"),Ph=Symbol.for("react.memo"),Rh=Symbol.for("react.lazy"),ND=Symbol.for("react.offscreen"),RS;RS=Symbol.for("react.module.reference");function Un(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Uy:switch(t=t.type,t){case Th:case Ch:case kh:case Nh:case Dh:return t;default:switch(t=t&&t.$$typeof,t){case xD:case Ah:case xh:case Rh:case Ph:case bh:return t;default:return e}}case Vy:return e}}}_e.ContextConsumer=Ah;_e.ContextProvider=bh;_e.Element=Uy;_e.ForwardRef=xh;_e.Fragment=Th;_e.Lazy=Rh;_e.Memo=Ph;_e.Portal=Vy;_e.Profiler=Ch;_e.StrictMode=kh;_e.Suspense=Nh;_e.SuspenseList=Dh;_e.isAsyncMode=function(){return!1};_e.isConcurrentMode=function(){return!1};_e.isContextConsumer=function(t){return Un(t)===Ah};_e.isContextProvider=function(t){return Un(t)===bh};_e.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Uy};_e.isForwardRef=function(t){return Un(t)===xh};_e.isFragment=function(t){return Un(t)===Th};_e.isLazy=function(t){return Un(t)===Rh};_e.isMemo=function(t){return Un(t)===Ph};_e.isPortal=function(t){return Un(t)===Vy};_e.isProfiler=function(t){return Un(t)===Ch};_e.isStrictMode=function(t){return Un(t)===kh};_e.isSuspense=function(t){return Un(t)===Nh};_e.isSuspenseList=function(t){return Un(t)===Dh};_e.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Th||t===Ch||t===kh||t===Nh||t===Dh||t===ND||typeof t=="object"&&t!==null&&(t.$$typeof===Rh||t.$$typeof===Ph||t.$$typeof===bh||t.$$typeof===Ah||t.$$typeof===xh||t.$$typeof===RS||t.getModuleId!==void 0)};_e.typeOf=Un;(function(t){t.exports=_e})(AD);function DD(t){function e(L,F,V,Y,I){for(var ae=0,$=0,Ue=0,me=0,ve,te,wt=0,tn=0,pe,Ot=pe=ve=0,ge=0,It=0,Ta=0,_t=0,Zu=V.length,ka=Zu-1,Bn,J="",Ke="",Hf="",Kf="",Hr;ge<Zu;){if(te=V.charCodeAt(ge),ge===ka&&$+me+Ue+ae!==0&&($!==0&&(te=$===47?10:47),me=Ue=ae=0,Zu++,ka++),$+me+Ue+ae===0){if(ge===ka&&(0<It&&(J=J.replace(h,"")),0<J.trim().length)){switch(te){case 32:case 9:case 59:case 13:case 10:break;default:J+=V.charAt(ge)}te=59}switch(te){case 123:for(J=J.trim(),ve=J.charCodeAt(0),pe=1,_t=++ge;ge<Zu;){switch(te=V.charCodeAt(ge)){case 123:pe++;break;case 125:pe--;break;case 47:switch(te=V.charCodeAt(ge+1)){case 42:case 47:e:{for(Ot=ge+1;Ot<ka;++Ot)switch(V.charCodeAt(Ot)){case 47:if(te===42&&V.charCodeAt(Ot-1)===42&&ge+2!==Ot){ge=Ot+1;break e}break;case 10:if(te===47){ge=Ot+1;break e}}ge=Ot}}break;case 91:te++;case 40:te++;case 34:case 39:for(;ge++<ka&&V.charCodeAt(ge)!==te;);}if(pe===0)break;ge++}switch(pe=V.substring(_t,ge),ve===0&&(ve=(J=J.replace(d,"").trim()).charCodeAt(0)),ve){case 64:switch(0<It&&(J=J.replace(h,"")),te=J.charCodeAt(1),te){case 100:case 109:case 115:case 45:It=F;break;default:It=wr}if(pe=e(F,It,pe,te,I+1),_t=pe.length,0<O&&(It=n(wr,J,Ta),Hr=a(3,pe,It,F,vt,Ze,_t,te,I,Y),J=It.join(""),Hr!==void 0&&(_t=(pe=Hr.trim()).length)===0&&(te=0,pe="")),0<_t)switch(te){case 115:J=J.replace(A,o);case 100:case 109:case 45:pe=J+"{"+pe+"}";break;case 107:J=J.replace(f,"$1 $2"),pe=J+"{"+pe+"}",pe=Rt===1||Rt===2&&s("@"+pe,3)?"@-webkit-"+pe+"@"+pe:"@"+pe;break;default:pe=J+pe,Y===112&&(pe=(Ke+=pe,""))}else pe="";break;default:pe=e(F,n(F,J,Ta),pe,Y,I+1)}Hf+=pe,pe=Ta=It=Ot=ve=0,J="",te=V.charCodeAt(++ge);break;case 125:case 59:if(J=(0<It?J.replace(h,""):J).trim(),1<(_t=J.length))switch(Ot===0&&(ve=J.charCodeAt(0),ve===45||96<ve&&123>ve)&&(_t=(J=J.replace(" ",":")).length),0<O&&(Hr=a(1,J,F,L,vt,Ze,Ke.length,Y,I,Y))!==void 0&&(_t=(J=Hr.trim()).length)===0&&(J="\0\0"),ve=J.charCodeAt(0),te=J.charCodeAt(1),ve){case 0:break;case 64:if(te===105||te===99){Kf+=J+V.charAt(ge);break}default:J.charCodeAt(_t-1)!==58&&(Ke+=i(J,ve,te,J.charCodeAt(2)))}Ta=It=Ot=ve=0,J="",te=V.charCodeAt(++ge)}}switch(te){case 13:case 10:$===47?$=0:1+ve===0&&Y!==107&&0<J.length&&(It=1,J+="\0"),0<O*Q&&a(0,J,F,L,vt,Ze,Ke.length,Y,I,Y),Ze=1,vt++;break;case 59:case 125:if($+me+Ue+ae===0){Ze++;break}default:switch(Ze++,Bn=V.charAt(ge),te){case 9:case 32:if(me+ae+$===0)switch(wt){case 44:case 58:case 9:case 32:Bn="";break;default:te!==32&&(Bn=" ")}break;case 0:Bn="\\0";break;case 12:Bn="\\f";break;case 11:Bn="\\v";break;case 38:me+$+ae===0&&(It=Ta=1,Bn="\f"+Bn);break;case 108:if(me+$+ae+gn===0&&0<Ot)switch(ge-Ot){case 2:wt===112&&V.charCodeAt(ge-3)===58&&(gn=wt);case 8:tn===111&&(gn=tn)}break;case 58:me+$+ae===0&&(Ot=ge);break;case 44:$+Ue+me+ae===0&&(It=1,Bn+="\r");break;case 34:case 39:$===0&&(me=me===te?0:me===0?te:me);break;case 91:me+$+Ue===0&&ae++;break;case 93:me+$+Ue===0&&ae--;break;case 41:me+$+ae===0&&Ue--;break;case 40:if(me+$+ae===0){if(ve===0)switch(2*wt+3*tn){case 533:break;default:ve=1}Ue++}break;case 64:$+Ue+me+ae+Ot+pe===0&&(pe=1);break;case 42:case 47:if(!(0<me+ae+Ue))switch($){case 0:switch(2*te+3*V.charCodeAt(ge+1)){case 235:$=47;break;case 220:_t=ge,$=42}break;case 42:te===47&&wt===42&&_t+2!==ge&&(V.charCodeAt(_t+2)===33&&(Ke+=V.substring(_t,ge+1)),Bn="",$=0)}}$===0&&(J+=Bn)}tn=wt,wt=te,ge++}if(_t=Ke.length,0<_t){if(It=F,0<O&&(Hr=a(2,Ke,It,L,vt,Ze,_t,Y,I,Y),Hr!==void 0&&(Ke=Hr).length===0))return Kf+Ke+Hf;if(Ke=It.join(",")+"{"+Ke+"}",Rt*gn!==0){switch(Rt!==2||s(Ke,2)||(gn=0),gn){case 111:Ke=Ke.replace(_,":-moz-$1")+Ke;break;case 112:Ke=Ke.replace(g,"::-webkit-input-$1")+Ke.replace(g,"::-moz-$1")+Ke.replace(g,":-ms-input-$1")+Ke}gn=0}}return Kf+Ke+Hf}function n(L,F,V){var Y=F.trim().split(T);F=Y;var I=Y.length,ae=L.length;switch(ae){case 0:case 1:var $=0;for(L=ae===0?"":L[0]+" ";$<I;++$)F[$]=r(L,F[$],V).trim();break;default:var Ue=$=0;for(F=[];$<I;++$)for(var me=0;me<ae;++me)F[Ue++]=r(L[me]+" ",Y[$],V).trim()}return F}function r(L,F,V){var Y=F.charCodeAt(0);switch(33>Y&&(Y=(F=F.trim()).charCodeAt(0)),Y){case 38:return F.replace(m,"$1"+L.trim());case 58:return L.trim()+F.replace(m,"$1"+L.trim());default:if(0<1*V&&0<F.indexOf("\f"))return F.replace(m,(L.charCodeAt(0)===58?"":"$1")+L.trim())}return L+F}function i(L,F,V,Y){var I=L+";",ae=2*F+3*V+4*Y;if(ae===944){L=I.indexOf(":",9)+1;var $=I.substring(L,I.length-1).trim();return $=I.substring(0,L).trim()+$+";",Rt===1||Rt===2&&s($,1)?"-webkit-"+$+$:$}if(Rt===0||Rt===2&&!s(I,1))return I;switch(ae){case 1015:return I.charCodeAt(10)===97?"-webkit-"+I+I:I;case 951:return I.charCodeAt(3)===116?"-webkit-"+I+I:I;case 963:return I.charCodeAt(5)===110?"-webkit-"+I+I:I;case 1009:if(I.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+I+I;case 978:return"-webkit-"+I+"-moz-"+I+I;case 1019:case 983:return"-webkit-"+I+"-moz-"+I+"-ms-"+I+I;case 883:if(I.charCodeAt(8)===45)return"-webkit-"+I+I;if(0<I.indexOf("image-set(",11))return I.replace(st,"$1-webkit-$2")+I;break;case 932:if(I.charCodeAt(4)===45)switch(I.charCodeAt(5)){case 103:return"-webkit-box-"+I.replace("-grow","")+"-webkit-"+I+"-ms-"+I.replace("grow","positive")+I;case 115:return"-webkit-"+I+"-ms-"+I.replace("shrink","negative")+I;case 98:return"-webkit-"+I+"-ms-"+I.replace("basis","preferred-size")+I}return"-webkit-"+I+"-ms-"+I+I;case 964:return"-webkit-"+I+"-ms-flex-"+I+I;case 1023:if(I.charCodeAt(8)!==99)break;return $=I.substring(I.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+$+"-webkit-"+I+"-ms-flex-pack"+$+I;case 1005:return y.test(I)?I.replace(p,":-webkit-")+I.replace(p,":-moz-")+I:I;case 1e3:switch($=I.substring(13).trim(),F=$.indexOf("-")+1,$.charCodeAt(0)+$.charCodeAt(F)){case 226:$=I.replace(k,"tb");break;case 232:$=I.replace(k,"tb-rl");break;case 220:$=I.replace(k,"lr");break;default:return I}return"-webkit-"+I+"-ms-"+$+I;case 1017:if(I.indexOf("sticky",9)===-1)break;case 975:switch(F=(I=L).length-10,$=(I.charCodeAt(F)===33?I.substring(0,F):I).substring(L.indexOf(":",7)+1).trim(),ae=$.charCodeAt(0)+($.charCodeAt(7)|0)){case 203:if(111>$.charCodeAt(8))break;case 115:I=I.replace($,"-webkit-"+$)+";"+I;break;case 207:case 102:I=I.replace($,"-webkit-"+(102<ae?"inline-":"")+"box")+";"+I.replace($,"-webkit-"+$)+";"+I.replace($,"-ms-"+$+"box")+";"+I}return I+";";case 938:if(I.charCodeAt(5)===45)switch(I.charCodeAt(6)){case 105:return $=I.replace("-items",""),"-webkit-"+I+"-webkit-box-"+$+"-ms-flex-"+$+I;case 115:return"-webkit-"+I+"-ms-flex-item-"+I.replace(R,"")+I;default:return"-webkit-"+I+"-ms-flex-line-pack"+I.replace("align-content","").replace(R,"")+I}break;case 973:case 989:if(I.charCodeAt(3)!==45||I.charCodeAt(4)===122)break;case 931:case 953:if(W.test(L)===!0)return($=L.substring(L.indexOf(":")+1)).charCodeAt(0)===115?i(L.replace("stretch","fill-available"),F,V,Y).replace(":fill-available",":stretch"):I.replace($,"-webkit-"+$)+I.replace($,"-moz-"+$.replace("fill-",""))+I;break;case 962:if(I="-webkit-"+I+(I.charCodeAt(5)===102?"-ms-"+I:"")+I,V+Y===211&&I.charCodeAt(13)===105&&0<I.indexOf("transform",10))return I.substring(0,I.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+I}return I}function s(L,F){var V=L.indexOf(F===1?":":"{"),Y=L.substring(0,F!==3?V:10);return V=L.substring(V+1,L.length-1),K(F!==2?Y:Y.replace(ie,"$1"),V,F)}function o(L,F){var V=i(F,F.charCodeAt(0),F.charCodeAt(1),F.charCodeAt(2));return V!==F+";"?V.replace(D," or ($1)").substring(4):"("+F+")"}function a(L,F,V,Y,I,ae,$,Ue,me,ve){for(var te=0,wt=F,tn;te<O;++te)switch(tn=Ht[te].call(c,L,wt,V,Y,I,ae,$,Ue,me,ve)){case void 0:case!1:case!0:case null:break;default:wt=tn}if(wt!==F)return wt}function l(L){switch(L){case void 0:case null:O=Ht.length=0;break;default:if(typeof L=="function")Ht[O++]=L;else if(typeof L=="object")for(var F=0,V=L.length;F<V;++F)l(L[F]);else Q=!!L|0}return l}function u(L){return L=L.prefix,L!==void 0&&(K=null,L?typeof L!="function"?Rt=1:(Rt=2,K=L):Rt=0),u}function c(L,F){var V=L;if(33>V.charCodeAt(0)&&(V=V.trim()),Te=V,V=[Te],0<O){var Y=a(-1,F,V,V,vt,Ze,0,0,0,0);Y!==void 0&&typeof Y=="string"&&(F=Y)}var I=e(wr,V,F,0,0);return 0<O&&(Y=a(-2,I,V,V,vt,Ze,I.length,0,0,0),Y!==void 0&&(I=Y)),Te="",gn=0,Ze=vt=1,I}var d=/^\0+/g,h=/[\0\r\f]/g,p=/: */g,y=/zoo|gra/,v=/([,: ])(transform)/g,T=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,_=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,A=/\(\s*(.*)\s*\)/g,D=/([\s\S]*?);/g,R=/-self|flex-/g,ie=/[^]*?(:[rp][el]a[\w-]+)[^]*/,W=/stretch|:\s*\w+\-(?:conte|avail)/,st=/([^-])(image-set\()/,Ze=1,vt=1,gn=0,Rt=1,wr=[],Ht=[],O=0,K=null,Q=0,Te="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var PD={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function RD(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var OD=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,iI=RD(function(t){return OD.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),zm={},$D={get exports(){return zm},set exports(t){zm=t}},Ee={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pt=typeof Symbol=="function"&&Symbol.for,By=pt?Symbol.for("react.element"):60103,jy=pt?Symbol.for("react.portal"):60106,Oh=pt?Symbol.for("react.fragment"):60107,$h=pt?Symbol.for("react.strict_mode"):60108,Lh=pt?Symbol.for("react.profiler"):60114,Mh=pt?Symbol.for("react.provider"):60109,Fh=pt?Symbol.for("react.context"):60110,zy=pt?Symbol.for("react.async_mode"):60111,Uh=pt?Symbol.for("react.concurrent_mode"):60111,Vh=pt?Symbol.for("react.forward_ref"):60112,Bh=pt?Symbol.for("react.suspense"):60113,LD=pt?Symbol.for("react.suspense_list"):60120,jh=pt?Symbol.for("react.memo"):60115,zh=pt?Symbol.for("react.lazy"):60116,MD=pt?Symbol.for("react.block"):60121,FD=pt?Symbol.for("react.fundamental"):60117,UD=pt?Symbol.for("react.responder"):60118,VD=pt?Symbol.for("react.scope"):60119;function xn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case By:switch(t=t.type,t){case zy:case Uh:case Oh:case Lh:case $h:case Bh:return t;default:switch(t=t&&t.$$typeof,t){case Fh:case Vh:case zh:case jh:case Mh:return t;default:return e}}case jy:return e}}}function OS(t){return xn(t)===Uh}Ee.AsyncMode=zy;Ee.ConcurrentMode=Uh;Ee.ContextConsumer=Fh;Ee.ContextProvider=Mh;Ee.Element=By;Ee.ForwardRef=Vh;Ee.Fragment=Oh;Ee.Lazy=zh;Ee.Memo=jh;Ee.Portal=jy;Ee.Profiler=Lh;Ee.StrictMode=$h;Ee.Suspense=Bh;Ee.isAsyncMode=function(t){return OS(t)||xn(t)===zy};Ee.isConcurrentMode=OS;Ee.isContextConsumer=function(t){return xn(t)===Fh};Ee.isContextProvider=function(t){return xn(t)===Mh};Ee.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===By};Ee.isForwardRef=function(t){return xn(t)===Vh};Ee.isFragment=function(t){return xn(t)===Oh};Ee.isLazy=function(t){return xn(t)===zh};Ee.isMemo=function(t){return xn(t)===jh};Ee.isPortal=function(t){return xn(t)===jy};Ee.isProfiler=function(t){return xn(t)===Lh};Ee.isStrictMode=function(t){return xn(t)===$h};Ee.isSuspense=function(t){return xn(t)===Bh};Ee.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Oh||t===Uh||t===Lh||t===$h||t===Bh||t===LD||typeof t=="object"&&t!==null&&(t.$$typeof===zh||t.$$typeof===jh||t.$$typeof===Mh||t.$$typeof===Fh||t.$$typeof===Vh||t.$$typeof===FD||t.$$typeof===UD||t.$$typeof===VD||t.$$typeof===MD)};Ee.typeOf=xn;(function(t){t.exports=Ee})($D);var qy=zm,BD={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},jD={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},zD={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$S={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Hy={};Hy[qy.ForwardRef]=zD;Hy[qy.Memo]=$S;function sI(t){return qy.isMemo(t)?$S:Hy[t.$$typeof]||BD}var qD=Object.defineProperty,HD=Object.getOwnPropertyNames,oI=Object.getOwnPropertySymbols,KD=Object.getOwnPropertyDescriptor,WD=Object.getPrototypeOf,aI=Object.prototype;function LS(t,e,n){if(typeof e!="string"){if(aI){var r=WD(e);r&&r!==aI&&LS(t,r,n)}var i=HD(e);oI&&(i=i.concat(oI(e)));for(var s=sI(t),o=sI(e),a=0;a<i.length;++a){var l=i[a];if(!jD[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=KD(e,l);try{qD(t,l,u)}catch{}}}}return t}var GD=LS;function Tr(){return(Tr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var lI=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},qm=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!Ad.typeOf(t)},xd=Object.freeze([]),gi=Object.freeze({});function Ul(t){return typeof t=="function"}function uI(t){return t.displayName||t.name||"Component"}function Ky(t){return t&&typeof t.styledComponentId=="string"}var Fo=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Wy=typeof window<"u"&&"HTMLElement"in window,QD=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function Iu(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var YD=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Iu(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),Hc=new Map,Nd=new Map,ul=1,yc=function(t){if(Hc.has(t))return Hc.get(t);for(;Nd.has(ul);)ul++;var e=ul++;return Hc.set(t,e),Nd.set(e,t),e},XD=function(t){return Nd.get(t)},JD=function(t,e){e>=ul&&(ul=e+1),Hc.set(t,e),Nd.set(e,t)},ZD="style["+Fo+'][data-styled-version="5.3.9"]',eP=new RegExp("^"+Fo+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),tP=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},nP=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(eP);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(JD(u,l),tP(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},rP=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},MS=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(Fo))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Fo,"active"),r.setAttribute("data-styled-version","5.3.9");var o=rP();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},iP=function(){function t(n){var r=this.element=MS(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}Iu(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),sP=function(){function t(n){var r=this.element=MS(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),oP=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),cI=Wy,aP={isServer:!Wy,useCSSOMInjection:!QD},FS=function(){function t(n,r,i){n===void 0&&(n=gi),r===void 0&&(r={}),this.options=Tr({},aP,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Wy&&cI&&(cI=!1,function(s){for(var o=document.querySelectorAll(ZD),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Fo)!=="active"&&(nP(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return yc(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(Tr({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new oP(o):s?new iP(o):new sP(o),new YD(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(yc(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(yc(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(yc(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=XD(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=Fo+".g"+o+'[id="'+a+'"]',d="";l!==void 0&&l.forEach(function(h){h.length>0&&(d+=h+",")}),s+=""+u+c+'{content:"'+d+`"}/*!sc*/
`}}}return s}(this)},t}(),lP=/(a)(d)/gi,dI=function(t){return String.fromCharCode(t+(t>25?39:97))};function Hm(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=dI(e%52)+n;return(dI(e%52)+n).replace(lP,"$1-$2")}var mo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},US=function(t){return mo(5381,t)};function uP(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Ul(n)&&!Ky(n))return!1}return!0}var cP=US("5.3.9"),dP=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&uP(e),this.componentId=n,this.baseHash=mo(cP,n),this.baseStyle=r,FS.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Uo(this.rules,e,n,r).join(""),a=Hm(mo(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=mo(this.baseHash,r.hash),d="",h=0;h<u;h++){var p=this.rules[h];if(typeof p=="string")d+=p;else if(p){var y=Uo(p,e,n,r),v=Array.isArray(y)?y.join(""):y;c=mo(c,v+h),d+=v}}if(d){var T=Hm(c>>>0);if(!n.hasNameForId(i,T)){var m=r(d,"."+T,void 0,i);n.insertRules(i,T,m)}s.push(T)}}return s.join(" ")},t}(),hP=/^\s*\/\/.*$/gm,fP=[":","[",".","#"];function pP(t){var e,n,r,i,s=t===void 0?gi:t,o=s.options,a=o===void 0?gi:o,l=s.plugins,u=l===void 0?xd:l,c=new DD(a),d=[],h=function(v){function T(m){if(m)try{v(m+"}")}catch{}}return function(m,f,g,_,k,A,D,R,ie,W){switch(m){case 1:if(ie===0&&f.charCodeAt(0)===64)return v(f+";"),"";break;case 2:if(R===0)return f+"/*|*/";break;case 3:switch(R){case 102:case 112:return v(g[0]+f),"";default:return f+(W===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(T)}}}(function(v){d.push(v)}),p=function(v,T,m){return T===0&&fP.indexOf(m[n.length])!==-1||m.match(i)?v:"."+e};function y(v,T,m,f){f===void 0&&(f="&");var g=v.replace(hP,""),_=T&&m?m+" "+T+" { "+g+" }":g;return e=f,n=T,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(m||!T?"":T,_)}return c.use([].concat(u,[function(v,T,m){v===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,p))},h,function(v){if(v===-2){var T=d;return d=[],T}}])),y.hash=u.length?u.reduce(function(v,T){return T.name||Iu(15),mo(v,T.name)},5381).toString():"",y}var VS=lh.createContext();VS.Consumer;var BS=lh.createContext(),mP=(BS.Consumer,new FS),Km=pP();function gP(){return Oe.useContext(VS)||mP}function yP(){return Oe.useContext(BS)||Km}var vP=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Km);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Iu(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=Km),this.name+e.hash},t}(),wP=/([A-Z])/,IP=/([A-Z])/g,_P=/^ms-/,EP=function(t){return"-"+t.toLowerCase()};function hI(t){return wP.test(t)?t.replace(IP,EP).replace(_P,"-ms-"):t}var fI=function(t){return t==null||t===!1||t===""};function Uo(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=Uo(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(fI(t))return"";if(Ky(t))return"."+t.styledComponentId;if(Ul(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return Uo(l,e,n,r)}var u;return t instanceof vP?n?(t.inject(n,r),t.getName(r)):t:qm(t)?function c(d,h){var p,y,v=[];for(var T in d)d.hasOwnProperty(T)&&!fI(d[T])&&(Array.isArray(d[T])&&d[T].isCss||Ul(d[T])?v.push(hI(T)+":",d[T],";"):qm(d[T])?v.push.apply(v,c(d[T],T)):v.push(hI(T)+": "+(p=T,(y=d[T])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||p in PD?String(y).trim():y+"px")+";"));return h?[h+" {"].concat(v,["}"]):v}(t):t.toString()}var pI=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function SP(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Ul(t)||qm(t)?pI(Uo(lI(xd,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:pI(Uo(lI(t,n)))}var TP=function(t,e,n){return n===void 0&&(n=gi),t.theme!==n.theme&&t.theme||e||n.theme},kP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,CP=/(^-|-$)/g;function wp(t){return t.replace(kP,"-").replace(CP,"")}var bP=function(t){return Hm(US(t)>>>0)};function vc(t){return typeof t=="string"&&!0}var Wm=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},AP=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function xP(t,e,n){var r=t[n];Wm(e)&&Wm(r)?jS(r,e):t[n]=e}function jS(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(Wm(o))for(var a in o)AP(a)&&xP(t,o[a],a)}return t}var zS=lh.createContext();zS.Consumer;var Ip={};function qS(t,e,n){var r=Ky(t),i=!vc(t),s=e.attrs,o=s===void 0?xd:s,a=e.componentId,l=a===void 0?function(f,g){var _=typeof f!="string"?"sc":wp(f);Ip[_]=(Ip[_]||0)+1;var k=_+"-"+bP("5.3.9"+_+Ip[_]);return g?g+"-"+k:k}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(f){return vc(f)?"styled."+f:"Styled("+uI(f)+")"}(t):u,d=e.displayName&&e.componentId?wp(e.displayName)+"-"+e.componentId:e.componentId||l,h=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,p=e.shouldForwardProp;r&&t.shouldForwardProp&&(p=e.shouldForwardProp?function(f,g,_){return t.shouldForwardProp(f,g,_)&&e.shouldForwardProp(f,g,_)}:t.shouldForwardProp);var y,v=new dP(n,d,r?t.componentStyle:void 0),T=v.isStatic&&o.length===0,m=function(f,g){return function(_,k,A,D){var R=_.attrs,ie=_.componentStyle,W=_.defaultProps,st=_.foldedComponentIds,Ze=_.shouldForwardProp,vt=_.styledComponentId,gn=_.target,Rt=function(Y,I,ae){Y===void 0&&(Y=gi);var $=Tr({},I,{theme:Y}),Ue={};return ae.forEach(function(me){var ve,te,wt,tn=me;for(ve in Ul(tn)&&(tn=tn($)),tn)$[ve]=Ue[ve]=ve==="className"?(te=Ue[ve],wt=tn[ve],te&&wt?te+" "+wt:te||wt):tn[ve]}),[$,Ue]}(TP(k,Oe.useContext(zS),W)||gi,k,R),wr=Rt[0],Ht=Rt[1],O=function(Y,I,ae,$){var Ue=gP(),me=yP(),ve=I?Y.generateAndInjectStyles(gi,Ue,me):Y.generateAndInjectStyles(ae,Ue,me);return ve}(ie,D,wr),K=A,Q=Ht.$as||k.$as||Ht.as||k.as||gn,Te=vc(Q),L=Ht!==k?Tr({},k,{},Ht):k,F={};for(var V in L)V[0]!=="$"&&V!=="as"&&(V==="forwardedAs"?F.as=L[V]:(Ze?Ze(V,iI,Q):!Te||iI(V))&&(F[V]=L[V]));return k.style&&Ht.style!==k.style&&(F.style=Tr({},k.style,{},Ht.style)),F.className=Array.prototype.concat(st,vt,O!==vt?O:null,k.className,Ht.className).filter(Boolean).join(" "),F.ref=K,Oe.createElement(Q,F)}(y,f,g,T)};return m.displayName=c,(y=lh.forwardRef(m)).attrs=h,y.componentStyle=v,y.displayName=c,y.shouldForwardProp=p,y.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):xd,y.styledComponentId=d,y.target=r?t.target:t,y.withComponent=function(f){var g=e.componentId,_=function(A,D){if(A==null)return{};var R,ie,W={},st=Object.keys(A);for(ie=0;ie<st.length;ie++)R=st[ie],D.indexOf(R)>=0||(W[R]=A[R]);return W}(e,["componentId"]),k=g&&g+"-"+(vc(f)?f:wp(uI(f)));return qS(f,Tr({},_,{attrs:h,componentId:k}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?jS({},t.defaultProps,f):f}}),Object.defineProperty(y,"toString",{value:function(){return"."+y.styledComponentId}}),i&&GD(y,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var Gm=function(t){return function e(n,r,i){if(i===void 0&&(i=gi),!Ad.isValidElementType(r))return Iu(1,String(r));var s=function(){return n(r,i,SP.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,Tr({},i,{},o))},s.attrs=function(o){return e(n,r,Tr({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(qS,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){Gm[t]=Gm(t)});const He=Gm,NP=He.div``,DP=He.div`
    background-color: darkblue;
    height: 250px;
    text-align: center;
`,PP=He.div`
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
`,RP=He.div`
    margin: auto;
    max-width: 980px;
    margin-bottom: 50px;
`,Kc={food:{title:"Alimentação",color:"blue",expense:!0},rent:{title:"Aluguel",color:"brown",expense:!0},salary:{title:"Salário",color:"green",expense:!1},entertainment:{title:"Diversão",color:"yellow",expense:!0},extra:{title:"Extra",color:"#0B6",expense:!1},debt:{title:"Dívida",color:"#1C1",expense:!1},bribery:{title:"Suborno",color:"#F00",expense:!0},loan:{title:"Dívida",color:"#D50",expense:!0}},OP=()=>{let t=new Date;return`${t.getFullYear()}-${t.getMonth()+1}`},$P=(t,e)=>{let n=[],[r,i]=e.split("-");for(let s in t)t[s].date.getFullYear()===parseInt(r)&&t[s].date.getMonth()+1===parseInt(i)&&n.push(t[s]);return n},Qm=t=>{let e=t.getFullYear(),n=t.getMonth()+1,r=t.getDate();return`${e}-${mI(n)}-${mI(r)}`},mI=t=>t<10?`0${t}`:`${t}`,LP=t=>{let[e,n]=t.split("-");return`${["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][parseInt(n)-1]} de ${e}`},MP=t=>{let[e,n,r]=t.split("-");return`${r}-${n}-${e}`},FP=t=>{let[e,n,r]=t.split("-");return new Date(parseInt(e),parseInt(n)-1,parseInt(r))},UP=He.tr``,wc=He.td`
    padding: 10px 0;
`,VP=He.div`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #FFF;
    background-color: ${t=>t.color};
`,BP=He.div`
    color: ${t=>t.color};
`,jP=({item:t})=>ut(UP,{children:[G(wc,{children:Qm(t.date)}),G(wc,{children:G(VP,{color:Kc[t.category].color,children:Kc[t.category].title})}),G(wc,{children:t.title}),G(wc,{children:ut(BP,{color:Kc[t.category].expense?"red":"green",children:[t.value," kz"]})})]}),zP=He.table`
    width: 100%;
    background-color: #FFF;
    padding: 20px;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    margin-top: 20px;

    &:hover {
        box-shadow: 0px 0px 10px #ABC;
    }
`,Ic=He.th`
    width: ${t=>t.width?`${t.width}px`:"auto"};
    padding: 10px 0;
    text-align: left;
`,qP=({list:t})=>ut(zP,{children:[G("thead",{children:ut("tr",{children:[G(Ic,{width:100,children:"Data"}),G(Ic,{width:130,children:"Categoria"}),G(Ic,{children:"Título"}),G(Ic,{width:150,children:"Valor"})]})}),G("tbody",{children:t.map((e,n)=>G(jP,{item:e},n))})]}),HP=He.div`
    flex: 1;
`,KP=He.div`
    text-align: center;
    font-weight: bold;
    color: #888;
    margin-bottom: 5px;
`,WP=He.div`
    text-align: center;
    font-weight: bold;
    color: ${t=>t.color??"#000"};
`,_p=({title:t,value:e,color:n})=>ut(HP,{children:[G(KP,{children:t}),ut(WP,{color:n,children:["$ ",e]})]}),GP=He.div`
    background-color: #FFF;
    border-radius: 10px;
    box-shadow: 0px 0px 5px #CCC;
    padding: 20px;
    margin-top: -40px;
    display: flex;
    align-items: center;
`,QP=He.div`
    flex: 1;
    display: flex;
    align-items: center;
`,gI=He.div`
    width: 40px;
    text-align: center;
    font-size: 25px;
    cursor: pointer;
`,YP=He.div`
    flex: 1;
    text-align: center;
`,XP=He.div`
    flex: 2;
    display: flex;
`,JP=({month:t,onMonthChange:e,income:n,expense:r})=>{const i=()=>{let[o,a]=t.split("-"),l=new Date(parseInt(o),parseInt(a)-1,1);l.setMonth(l.getMonth()-1),e(`${l.getFullYear()}-${l.getMonth()+1}`)},s=()=>{let[o,a]=t.split("-"),l=new Date(parseInt(o),parseInt(a)-1,1);l.setMonth(l.getMonth()+1),e(`${l.getFullYear()}-${l.getMonth()+1}`)};return ut(GP,{children:[ut(QP,{children:[G(gI,{onClick:i,children:"⬅️"}),G(YP,{children:LP(t)}),G(gI,{onClick:s,children:"➡️"})]}),ut(XP,{children:[G(_p,{title:"Receitas",value:n}),G(_p,{title:"Despesas",value:r}),G(_p,{title:"Lucros",value:n-r,color:n-r<0?"red":"green"})]})]})},HS="SweetAlert2:",ZP=t=>{const e=[];for(let n=0;n<t.length;n++)e.indexOf(t[n])===-1&&e.push(t[n]);return e},Gy=t=>t.charAt(0).toUpperCase()+t.slice(1),Tn=t=>Array.prototype.slice.call(t),mn=t=>{console.warn(`${HS} ${typeof t=="object"?t.join(" "):t}`)},Us=t=>{console.error(`${HS} ${t}`)},yI=[],eR=t=>{yI.includes(t)||(yI.push(t),mn(t))},tR=(t,e)=>{eR(`"${t}" is deprecated and will be removed in the next major release. Please use "${e}" instead.`)},qh=t=>typeof t=="function"?t():t,Qy=t=>t&&typeof t.toPromise=="function",_u=t=>Qy(t)?t.toPromise():Promise.resolve(t),Yy=t=>t&&Promise.resolve(t)===t,To={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},nR=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],rR={},iR=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],KS=t=>Object.prototype.hasOwnProperty.call(To,t),WS=t=>nR.indexOf(t)!==-1,Ym=t=>rR[t],sR=t=>{KS(t)||mn(`Unknown parameter "${t}"`)},oR=t=>{iR.includes(t)&&mn(`The parameter "${t}" is incompatible with toasts`)},aR=t=>{Ym(t)&&tR(t,Ym(t))},lR=t=>{!t.backdrop&&t.allowOutsideClick&&mn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const e in t)sR(e),t.toast&&oR(e),aR(e)},uR="swal2-",GS=t=>{const e={};for(const n in t)e[t[n]]=uR+t[n];return e},S=GS(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),cl=GS(["success","warning","info","question","error"]),zt=()=>document.body.querySelector(`.${S.container}`),Eu=t=>{const e=zt();return e?e.querySelector(t):null},Vn=t=>Eu(`.${t}`),ye=()=>Vn(S.popup),Su=()=>Vn(S.icon),QS=()=>Vn(S.title),Dd=()=>Vn(S["html-container"]),YS=()=>Vn(S.image),XS=()=>Vn(S["progress-steps"]),Hh=()=>Vn(S["validation-message"]),Yn=()=>Eu(`.${S.actions} .${S.confirm}`),_i=()=>Eu(`.${S.actions} .${S.deny}`),cR=()=>Vn(S["input-label"]),oa=()=>Eu(`.${S.loader}`),_s=()=>Eu(`.${S.actions} .${S.cancel}`),Tu=()=>Vn(S.actions),JS=()=>Vn(S.footer),Kh=()=>Vn(S["timer-progress-bar"]),Xy=()=>Vn(S.close),dR=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,Jy=()=>{const t=Tn(ye().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((n,r)=>{const i=parseInt(n.getAttribute("tabindex")),s=parseInt(r.getAttribute("tabindex"));return i>s?1:i<s?-1:0}),e=Tn(ye().querySelectorAll(dR)).filter(n=>n.getAttribute("tabindex")!=="-1");return ZP(t.concat(e)).filter(n=>En(n))},Zy=()=>xr(document.body,S.shown)&&!xr(document.body,S["toast-shown"])&&!xr(document.body,S["no-backdrop"]),Wh=()=>ye()&&xr(ye(),S.toast),hR=()=>ye().hasAttribute("data-loading"),ko={previousBodyPadding:null},Ut=(t,e)=>{if(t.textContent="",e){const r=new DOMParser().parseFromString(e,"text/html");Tn(r.querySelector("head").childNodes).forEach(i=>{t.appendChild(i)}),Tn(r.querySelector("body").childNodes).forEach(i=>{t.appendChild(i)})}},xr=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let r=0;r<n.length;r++)if(!t.classList.contains(n[r]))return!1;return!0},fR=(t,e)=>{Tn(t.classList).forEach(n=>{!Object.values(S).includes(n)&&!Object.values(cl).includes(n)&&!Object.values(e.showClass).includes(n)&&t.classList.remove(n)})},Mn=(t,e,n)=>{if(fR(t,e),e.customClass&&e.customClass[n]){if(typeof e.customClass[n]!="string"&&!e.customClass[n].forEach)return mn(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof e.customClass[n]}"`);ce(t,e.customClass[n])}},ev=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${S.popup} > .${S[e]}`);case"checkbox":return t.querySelector(`.${S.popup} > .${S.checkbox} input`);case"radio":return t.querySelector(`.${S.popup} > .${S.radio} input:checked`)||t.querySelector(`.${S.popup} > .${S.radio} input:first-child`);case"range":return t.querySelector(`.${S.popup} > .${S.range} input`);default:return t.querySelector(`.${S.popup} > .${S.input}`)}},ZS=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},eT=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(r=>{Array.isArray(t)?t.forEach(i=>{n?i.classList.add(r):i.classList.remove(r)}):n?t.classList.add(r):t.classList.remove(r)}))},ce=(t,e)=>{eT(t,e,!0)},pr=(t,e)=>{eT(t,e,!1)},si=(t,e)=>{const n=Tn(t.childNodes);for(let r=0;r<n.length;r++)if(xr(n[r],e))return n[r]},dl=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style[e]=typeof n=="number"?`${n}px`:n:t.style.removeProperty(e)},xt=(t,e="flex")=>{t.style.display=e},qt=t=>{t.style.display="none"},vI=(t,e,n,r)=>{const i=t.querySelector(e);i&&(i.style[n]=r)},Gh=(t,e,n)=>{e?xt(t,n):qt(t)},En=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),pR=()=>!En(Yn())&&!En(_i())&&!En(_s()),wI=t=>t.scrollHeight>t.clientHeight,tT=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),r=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||r>0},tv=(t,e=!1)=>{const n=Kh();En(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},mR=()=>{const t=Kh(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),r=e/n*100;t.style.removeProperty("transition"),t.style.width=`${r}%`},nT=()=>typeof window>"u"||typeof document>"u",gR=100,ne={},yR=()=>{ne.previousActiveElement&&ne.previousActiveElement.focus?(ne.previousActiveElement.focus(),ne.previousActiveElement=null):document.body&&document.body.focus()},vR=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,r=window.scrollY;ne.restoreFocusTimeout=setTimeout(()=>{yR(),e()},gR),window.scrollTo(n,r)}),wR=`
 <div aria-labelledby="${S.title}" aria-describedby="${S["html-container"]}" class="${S.popup}" tabindex="-1">
   <button type="button" class="${S.close}"></button>
   <ul class="${S["progress-steps"]}"></ul>
   <div class="${S.icon}"></div>
   <img class="${S.image}" />
   <h2 class="${S.title}" id="${S.title}"></h2>
   <div class="${S["html-container"]}" id="${S["html-container"]}"></div>
   <input class="${S.input}" />
   <input type="file" class="${S.file}" />
   <div class="${S.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${S.select}"></select>
   <div class="${S.radio}"></div>
   <label for="${S.checkbox}" class="${S.checkbox}">
     <input type="checkbox" />
     <span class="${S.label}"></span>
   </label>
   <textarea class="${S.textarea}"></textarea>
   <div class="${S["validation-message"]}" id="${S["validation-message"]}"></div>
   <div class="${S.actions}">
     <div class="${S.loader}"></div>
     <button type="button" class="${S.confirm}"></button>
     <button type="button" class="${S.deny}"></button>
     <button type="button" class="${S.cancel}"></button>
   </div>
   <div class="${S.footer}"></div>
   <div class="${S["timer-progress-bar-container"]}">
     <div class="${S["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),IR=()=>{const t=zt();return t?(t.remove(),pr([document.documentElement,document.body],[S["no-backdrop"],S["toast-shown"],S["has-column"]]),!0):!1},qi=()=>{ne.currentInstance.resetValidationMessage()},_R=()=>{const t=ye(),e=si(t,S.input),n=si(t,S.file),r=t.querySelector(`.${S.range} input`),i=t.querySelector(`.${S.range} output`),s=si(t,S.select),o=t.querySelector(`.${S.checkbox} input`),a=si(t,S.textarea);e.oninput=qi,n.onchange=qi,s.onchange=qi,o.onchange=qi,a.oninput=qi,r.oninput=()=>{qi(),i.value=r.value},r.onchange=()=>{qi(),r.nextSibling.value=r.value}},ER=t=>typeof t=="string"?document.querySelector(t):t,SR=t=>{const e=ye();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},TR=t=>{window.getComputedStyle(t).direction==="rtl"&&ce(zt(),S.rtl)},kR=t=>{const e=IR();if(nT()){Us("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=S.container,e&&ce(n,S["no-transition"]),Ut(n,wR);const r=ER(t.target);r.appendChild(n),SR(t),TR(r),_R()},nv=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?CR(t,e):t&&Ut(e,t)},CR=(t,e)=>{t.jquery?bR(e,t):Ut(e,t.toString())},bR=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},Vl=(()=>{if(nT())return!1;const t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&typeof t.style[n]<"u")return e[n];return!1})(),AR=()=>{const t=document.createElement("div");t.className=S["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},xR=(t,e)=>{const n=Tu(),r=oa();!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?qt(n):xt(n),Mn(n,e,"actions"),NR(n,r,e),Ut(r,e.loaderHtml),Mn(r,e,"loader")};function NR(t,e,n){const r=Yn(),i=_i(),s=_s();Ep(r,"confirm",n),Ep(i,"deny",n),Ep(s,"cancel",n),DR(r,i,s,n),n.reverseButtons&&(n.toast?(t.insertBefore(s,r),t.insertBefore(i,r)):(t.insertBefore(s,e),t.insertBefore(i,e),t.insertBefore(r,e)))}function DR(t,e,n,r){if(!r.buttonsStyling)return pr([t,e,n],S.styled);ce([t,e,n],S.styled),r.confirmButtonColor&&(t.style.backgroundColor=r.confirmButtonColor,ce(t,S["default-outline"])),r.denyButtonColor&&(e.style.backgroundColor=r.denyButtonColor,ce(e,S["default-outline"])),r.cancelButtonColor&&(n.style.backgroundColor=r.cancelButtonColor,ce(n,S["default-outline"]))}function Ep(t,e,n){Gh(t,n[`show${Gy(e)}Button`],"inline-block"),Ut(t,n[`${e}ButtonText`]),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]),t.className=S[e],Mn(t,n,`${e}Button`),ce(t,n[`${e}ButtonClass`])}function PR(t,e){typeof e=="string"?t.style.background=e:e||ce([document.documentElement,document.body],S["no-backdrop"])}function RR(t,e){e in S?ce(t,S[e]):(mn('The "position" parameter is not valid, defaulting to "center"'),ce(t,S.center))}function OR(t,e){if(e&&typeof e=="string"){const n=`grow-${e}`;n in S&&ce(t,S[n])}}const $R=(t,e)=>{const n=zt();n&&(PR(n,e.backdrop),RR(n,e.position),OR(n,e.grow),Mn(n,e,"container"))},re={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},LR=["input","file","range","select","radio","checkbox","textarea"],MR=(t,e)=>{const n=ye(),r=re.innerParams.get(t),i=!r||e.input!==r.input;LR.forEach(s=>{const o=S[s],a=si(n,o);VR(s,e.inputAttributes),a.className=o,i&&qt(a)}),e.input&&(i&&FR(e),BR(e))},FR=t=>{if(!on[t.input])return Us(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${t.input}"`);const e=rT(t.input),n=on[t.input](e,t);xt(n),setTimeout(()=>{ZS(n)})},UR=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["type","value","style"].includes(n)||t.removeAttribute(n)}},VR=(t,e)=>{const n=ev(ye(),t);if(n){UR(n);for(const r in e)n.setAttribute(r,e[r])}},BR=t=>{const e=rT(t.input);t.customClass&&ce(e,t.customClass.input)},rv=(t,e)=>{(!t.placeholder||e.inputPlaceholder)&&(t.placeholder=e.inputPlaceholder)},ku=(t,e,n)=>{if(n.inputLabel){t.id=S.input;const r=document.createElement("label"),i=S["input-label"];r.setAttribute("for",t.id),r.className=i,ce(r,n.customClass.inputLabel),r.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",r)}},rT=t=>{const e=S[t]?S[t]:S.input;return si(ye(),e)},on={};on.text=on.email=on.password=on.number=on.tel=on.url=(t,e)=>(typeof e.inputValue=="string"||typeof e.inputValue=="number"?t.value=e.inputValue:Yy(e.inputValue)||mn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e.inputValue}"`),ku(t,t,e),rv(t,e),t.type=e.input,t);on.file=(t,e)=>(ku(t,t,e),rv(t,e),t);on.range=(t,e)=>{const n=t.querySelector("input"),r=t.querySelector("output");return n.value=e.inputValue,n.type=e.input,r.value=e.inputValue,ku(n,t,e),t};on.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");Ut(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return ku(t,t,e),t};on.radio=t=>(t.textContent="",t);on.checkbox=(t,e)=>{const n=ev(ye(),"checkbox");n.value="1",n.id=S.checkbox,n.checked=!!e.inputValue;const r=t.querySelector("span");return Ut(r,e.inputPlaceholder),t};on.textarea=(t,e)=>{t.value=e.inputValue,rv(t,e),ku(t,t,e);const n=r=>parseInt(window.getComputedStyle(r).marginLeft)+parseInt(window.getComputedStyle(r).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const r=parseInt(window.getComputedStyle(ye()).width),i=()=>{const s=t.offsetWidth+n(t);s>r?ye().style.width=`${s}px`:ye().style.width=null};new MutationObserver(i).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const jR=(t,e)=>{const n=Dd();Mn(n,e,"htmlContainer"),e.html?(nv(e.html,n),xt(n,"block")):e.text?(n.textContent=e.text,xt(n,"block")):qt(n),MR(t,e)},zR=(t,e)=>{const n=JS();Gh(n,e.footer),e.footer&&nv(e.footer,n),Mn(n,e,"footer")},qR=(t,e)=>{const n=Xy();Ut(n,e.closeButtonHtml),Mn(n,e,"closeButton"),Gh(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel)},HR=(t,e)=>{const n=re.innerParams.get(t),r=Su();if(n&&e.icon===n.icon){_I(r,e),II(r,e);return}if(!e.icon&&!e.iconHtml)return qt(r);if(e.icon&&Object.keys(cl).indexOf(e.icon)===-1)return Us(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),qt(r);xt(r),_I(r,e),II(r,e),ce(r,e.showClass.icon)},II=(t,e)=>{for(const n in cl)e.icon!==n&&pr(t,cl[n]);ce(t,cl[e.icon]),QR(t,e),KR(),Mn(t,e,"icon")},KR=()=>{const t=ye(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let r=0;r<n.length;r++)n[r].style.backgroundColor=e},WR=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,GR=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,_I=(t,e)=>{t.textContent="",e.iconHtml?Ut(t,EI(e.iconHtml)):e.icon==="success"?Ut(t,WR):e.icon==="error"?Ut(t,GR):Ut(t,EI({question:"?",warning:"!",info:"i"}[e.icon]))},QR=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])vI(t,n,"backgroundColor",e.iconColor);vI(t,".swal2-success-ring","borderColor",e.iconColor)}},EI=t=>`<div class="${S["icon-content"]}">${t}</div>`,YR=(t,e)=>{const n=YS();if(!e.imageUrl)return qt(n);xt(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt),dl(n,"width",e.imageWidth),dl(n,"height",e.imageHeight),n.className=S.image,Mn(n,e,"image")},XR=t=>{const e=document.createElement("li");return ce(e,S["progress-step"]),Ut(e,t),e},JR=t=>{const e=document.createElement("li");return ce(e,S["progress-step-line"]),t.progressStepsDistance&&(e.style.width=t.progressStepsDistance),e},ZR=(t,e)=>{const n=XS();if(!e.progressSteps||e.progressSteps.length===0)return qt(n);xt(n),n.textContent="",e.currentProgressStep>=e.progressSteps.length&&mn("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),e.progressSteps.forEach((r,i)=>{const s=XR(r);if(n.appendChild(s),i===e.currentProgressStep&&ce(s,S["active-progress-step"]),i!==e.progressSteps.length-1){const o=JR(e);n.appendChild(o)}})},eO=(t,e)=>{const n=QS();Gh(n,e.title||e.titleText,"block"),e.title&&nv(e.title,n),e.titleText&&(n.innerText=e.titleText),Mn(n,e,"title")},tO=(t,e)=>{const n=zt(),r=ye();e.toast?(dl(n,"width",e.width),r.style.width="100%",r.insertBefore(oa(),Su())):dl(r,"width",e.width),dl(r,"padding",e.padding),e.color&&(r.style.color=e.color),e.background&&(r.style.background=e.background),qt(Hh()),nO(r,e)},nO=(t,e)=>{t.className=`${S.popup} ${En(t)?e.showClass.popup:""}`,e.toast?(ce([document.documentElement,document.body],S["toast-shown"]),ce(t,S.toast)):ce(t,S.modal),Mn(t,e,"popup"),typeof e.customClass=="string"&&ce(t,e.customClass),e.icon&&ce(t,S[`icon-${e.icon}`])},iT=(t,e)=>{tO(t,e),$R(t,e),ZR(t,e),HR(t,e),YR(t,e),eO(t,e),qR(t,e),jR(t,e),xR(t,e),zR(t,e),typeof e.didRender=="function"&&e.didRender(ye())},aa=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),rO=()=>{Tn(document.body.children).forEach(e=>{e===zt()||e.contains(zt())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))})},sT=()=>{Tn(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},oT=["swal-title","swal-html","swal-footer"],iO=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return dO(n),Object.assign(sO(n),oO(n),aO(n),lO(n),uO(n),cO(n,oT))},sO=t=>{const e={};return Tn(t.querySelectorAll("swal-param")).forEach(n=>{Es(n,["name","value"]);const r=n.getAttribute("name"),i=n.getAttribute("value");typeof To[r]=="boolean"&&i==="false"&&(e[r]=!1),typeof To[r]=="object"&&(e[r]=JSON.parse(i))}),e},oO=t=>{const e={};return Tn(t.querySelectorAll("swal-button")).forEach(n=>{Es(n,["type","color","aria-label"]);const r=n.getAttribute("type");e[`${r}ButtonText`]=n.innerHTML,e[`show${Gy(r)}Button`]=!0,n.hasAttribute("color")&&(e[`${r}ButtonColor`]=n.getAttribute("color")),n.hasAttribute("aria-label")&&(e[`${r}ButtonAriaLabel`]=n.getAttribute("aria-label"))}),e},aO=t=>{const e={},n=t.querySelector("swal-image");return n&&(Es(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt"))),e},lO=t=>{const e={},n=t.querySelector("swal-icon");return n&&(Es(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},uO=t=>{const e={},n=t.querySelector("swal-input");n&&(Es(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const r=t.querySelectorAll("swal-input-option");return r.length&&(e.inputOptions={},Tn(r).forEach(i=>{Es(i,["value"]);const s=i.getAttribute("value"),o=i.innerHTML;e.inputOptions[s]=o})),e},cO=(t,e)=>{const n={};for(const r in e){const i=e[r],s=t.querySelector(i);s&&(Es(s,[]),n[i.replace(/^swal-/,"")]=s.innerHTML.trim())}return n},dO=t=>{const e=oT.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Tn(t.children).forEach(n=>{const r=n.tagName.toLowerCase();e.indexOf(r)===-1&&mn(`Unrecognized element <${r}>`)})},Es=(t,e)=>{Tn(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&mn([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},SI={email:(t,e)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function hO(t){t.inputValidator||Object.keys(SI).forEach(e=>{t.input===e&&(t.inputValidator=SI[e])})}function fO(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(mn('Target parameter is not valid, defaulting to "body"'),t.target="body")}function pO(t){hO(t),t.showLoaderOnConfirm&&!t.preConfirm&&mn(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),fO(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),kR(t)}class mO{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const gO=()=>{ko.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(ko.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${ko.previousBodyPadding+AR()}px`)},yO=()=>{ko.previousBodyPadding!==null&&(document.body.style.paddingRight=`${ko.previousBodyPadding}px`,ko.previousBodyPadding=null)},vO=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!xr(document.body,S.iosfix)){const e=document.body.scrollTop;document.body.style.top=`${e*-1}px`,ce(document.body,S.iosfix),IO(),wO()}},wO=()=>{const t=navigator.userAgent,e=!!t.match(/iPad/i)||!!t.match(/iPhone/i),n=!!t.match(/WebKit/i);e&&n&&!t.match(/CriOS/i)&&ye().scrollHeight>window.innerHeight-44&&(zt().style.paddingBottom="44px")},IO=()=>{const t=zt();let e;t.ontouchstart=n=>{e=_O(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},_O=t=>{const e=t.target,n=zt();return EO(t)||SO(t)?!1:e===n||!wI(n)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(wI(Dd())&&Dd().contains(e))},EO=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",SO=t=>t.touches&&t.touches.length>1,TO=()=>{if(xr(document.body,S.iosfix)){const t=parseInt(document.body.style.top,10);pr(document.body,S.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},aT=10,kO=t=>{const e=zt(),n=ye();typeof t.willOpen=="function"&&t.willOpen(n);const i=window.getComputedStyle(document.body).overflowY;AO(e,n,t),setTimeout(()=>{CO(e,n)},aT),Zy()&&(bO(e,t.scrollbarPadding,i),rO()),!Wh()&&!ne.previousActiveElement&&(ne.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),pr(e,S["no-transition"])},lT=t=>{const e=ye();if(t.target!==e)return;const n=zt();e.removeEventListener(Vl,lT),n.style.overflowY="auto"},CO=(t,e)=>{Vl&&tT(e)?(t.style.overflowY="hidden",e.addEventListener(Vl,lT)):t.style.overflowY="auto"},bO=(t,e,n)=>{vO(),e&&n!=="hidden"&&gO(),setTimeout(()=>{t.scrollTop=0})},AO=(t,e,n)=>{ce(t,n.showClass.backdrop),e.style.setProperty("opacity","0","important"),xt(e,"grid"),setTimeout(()=>{ce(e,n.showClass.popup),e.style.removeProperty("opacity")},aT),ce([document.documentElement,document.body],S.shown),n.heightAuto&&n.backdrop&&!n.toast&&ce([document.documentElement,document.body],S["height-auto"])},Vo=t=>{let e=ye();e||new jl,e=ye();const n=oa();Wh()?qt(Su()):xO(e,t),xt(n),e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},xO=(t,e)=>{const n=Tu(),r=oa();!e&&En(Yn())&&(e=Yn()),xt(n),e&&(qt(e),r.setAttribute("data-button-to-replace",e.className)),r.parentNode.insertBefore(r,e),ce([t,n],S.loading)},NO=(t,e)=>{e.input==="select"||e.input==="radio"?$O(t,e):["text","email","number","tel","textarea"].includes(e.input)&&(Qy(e.inputValue)||Yy(e.inputValue))&&(Vo(Yn()),LO(t,e))},DO=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return PO(n);case"radio":return RO(n);case"file":return OO(n);default:return e.inputAutoTrim?n.value.trim():n.value}},PO=t=>t.checked?1:0,RO=t=>t.checked?t.value:null,OO=t=>t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,$O=(t,e)=>{const n=ye(),r=i=>MO[e.input](n,Xm(i),e);Qy(e.inputOptions)||Yy(e.inputOptions)?(Vo(Yn()),_u(e.inputOptions).then(i=>{t.hideLoading(),r(i)})):typeof e.inputOptions=="object"?r(e.inputOptions):Us(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},LO=(t,e)=>{const n=t.getInput();qt(n),_u(e.inputValue).then(r=>{n.value=e.input==="number"?parseFloat(r)||0:`${r}`,xt(n),n.focus(),t.hideLoading()}).catch(r=>{Us(`Error in inputValue promise: ${r}`),n.value="",xt(n),n.focus(),t.hideLoading()})},MO={select:(t,e,n)=>{const r=si(t,S.select),i=(s,o,a)=>{const l=document.createElement("option");l.value=a,Ut(l,o),l.selected=TI(a,n.inputValue),s.appendChild(l)};e.forEach(s=>{const o=s[0],a=s[1];if(Array.isArray(a)){const l=document.createElement("optgroup");l.label=o,l.disabled=!1,r.appendChild(l),a.forEach(u=>i(l,u[1],u[0]))}else i(r,a,o)}),r.focus()},radio:(t,e,n)=>{const r=si(t,S.radio);e.forEach(s=>{const o=s[0],a=s[1],l=document.createElement("input"),u=document.createElement("label");l.type="radio",l.name=S.radio,l.value=o,TI(o,n.inputValue)&&(l.checked=!0);const c=document.createElement("span");Ut(c,a),c.className=S.label,u.appendChild(l),u.appendChild(c),r.appendChild(u)});const i=r.querySelectorAll("input");i.length&&i[0].focus()}},Xm=t=>{const e=[];return typeof Map<"u"&&t instanceof Map?t.forEach((n,r)=>{let i=n;typeof i=="object"&&(i=Xm(i)),e.push([r,i])}):Object.keys(t).forEach(n=>{let r=t[n];typeof r=="object"&&(r=Xm(r)),e.push([n,r])}),e},TI=(t,e)=>e&&e.toString()===t.toString();function kI(){const t=re.innerParams.get(this);if(!t)return;const e=re.domCache.get(this);qt(e.loader),Wh()?t.icon&&xt(Su()):FO(e),pr([e.popup,e.actions],S.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const FO=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?xt(e[0],"inline-block"):pR()&&qt(t.actions)};function UO(t){const e=re.innerParams.get(t||this),n=re.domCache.get(t||this);return n?ev(n.popup,e.input):null}const Bl={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},VO=()=>En(ye()),uT=()=>Yn()&&Yn().click(),BO=()=>_i()&&_i().click(),jO=()=>_s()&&_s().click(),cT=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},zO=(t,e,n,r)=>{cT(e),n.toast||(e.keydownHandler=i=>HO(t,i,r),e.keydownTarget=n.keydownListenerCapture?window:ye(),e.keydownListenerCapture=n.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0)},Jm=(t,e,n)=>{const r=Jy();if(r.length)return e=e+n,e===r.length?e=0:e===-1&&(e=r.length-1),r[e].focus();ye().focus()},dT=["ArrowRight","ArrowDown"],qO=["ArrowLeft","ArrowUp"],HO=(t,e,n)=>{const r=re.innerParams.get(t);r&&(e.isComposing||e.keyCode===229||(r.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?KO(t,e,r):e.key==="Tab"?WO(e,r):[...dT,...qO].includes(e.key)?GO(e.key):e.key==="Escape"&&QO(e,r,n)))},KO=(t,e,n)=>{if(qh(n.allowEnterKey)&&e.target&&t.getInput()&&e.target.outerHTML===t.getInput().outerHTML){if(["textarea","file"].includes(n.input))return;uT(),e.preventDefault()}},WO=(t,e)=>{const n=t.target,r=Jy();let i=-1;for(let s=0;s<r.length;s++)if(n===r[s]){i=s;break}t.shiftKey?Jm(e,i,-1):Jm(e,i,1),t.stopPropagation(),t.preventDefault()},GO=t=>{const e=Yn(),n=_i(),r=_s();if(![e,n,r].includes(document.activeElement))return;const i=dT.includes(t)?"nextElementSibling":"previousElementSibling";let s=document.activeElement;for(let o=0;o<Tu().children.length;o++){if(s=s[i],!s)return;if(En(s)&&s instanceof HTMLButtonElement)break}s instanceof HTMLButtonElement&&s.focus()},QO=(t,e,n)=>{qh(e.allowEscapeKey)&&(t.preventDefault(),n(aa.esc))};function hT(t,e,n,r){Wh()?CI(t,r):(vR(n).then(()=>CI(t,r)),cT(ne)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),Zy()&&(yO(),TO(),sT()),YO()}function YO(){pr([document.documentElement,document.body],[S.shown,S["height-auto"],S["no-backdrop"],S["toast-shown"]])}function _c(t){t=e$(t);const e=Bl.swalPromiseResolve.get(this),n=JO(this);this.isAwaitingPromise()?t.isDismissed||(Cu(this),e(t)):n&&e(t)}function XO(){return!!re.awaitingPromise.get(this)}const JO=t=>{const e=ye();if(!e)return!1;const n=re.innerParams.get(t);if(!n||xr(e,n.hideClass.popup))return!1;pr(e,n.showClass.popup),ce(e,n.hideClass.popup);const r=zt();return pr(r,n.showClass.backdrop),ce(r,n.hideClass.backdrop),t$(t,e,n),!0};function ZO(t){const e=Bl.swalPromiseReject.get(this);Cu(this),e&&e(t)}const Cu=t=>{t.isAwaitingPromise()&&(re.awaitingPromise.delete(t),re.innerParams.get(t)||t._destroy())},e$=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),t$=(t,e,n)=>{const r=zt(),i=Vl&&tT(e);typeof n.willClose=="function"&&n.willClose(e),i?n$(t,e,r,n.returnFocus,n.didClose):hT(t,r,n.returnFocus,n.didClose)},n$=(t,e,n,r,i)=>{ne.swalCloseEventFinishedCallback=hT.bind(null,t,n,r,i),e.addEventListener(Vl,function(s){s.target===e&&(ne.swalCloseEventFinishedCallback(),delete ne.swalCloseEventFinishedCallback)})},CI=(t,e)=>{setTimeout(()=>{typeof e=="function"&&e.bind(t.params)(),t._destroy()})};function fT(t,e,n){const r=re.domCache.get(t);e.forEach(i=>{r[i].disabled=n})}function pT(t,e){if(!t)return!1;if(t.type==="radio"){const r=t.parentNode.parentNode.querySelectorAll("input");for(let i=0;i<r.length;i++)r[i].disabled=e}else t.disabled=e}function r$(){fT(this,["confirmButton","denyButton","cancelButton"],!1)}function i$(){fT(this,["confirmButton","denyButton","cancelButton"],!0)}function s$(){return pT(this.getInput(),!1)}function o$(){return pT(this.getInput(),!0)}function a$(t){const e=re.domCache.get(this),n=re.innerParams.get(this);Ut(e.validationMessage,t),e.validationMessage.className=S["validation-message"],n.customClass&&n.customClass.validationMessage&&ce(e.validationMessage,n.customClass.validationMessage),xt(e.validationMessage);const r=this.getInput();r&&(r.setAttribute("aria-invalid",!0),r.setAttribute("aria-describedby",S["validation-message"]),ZS(r),ce(r,S.inputerror))}function l$(){const t=re.domCache.get(this);t.validationMessage&&qt(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),pr(e,S.inputerror))}function u$(){return re.domCache.get(this).progressSteps}function c$(t){const e=ye(),n=re.innerParams.get(this);if(!e||xr(e,n.hideClass.popup))return mn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const r=d$(t),i=Object.assign({},n,r);iT(this,i),re.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const d$=t=>{const e={};return Object.keys(t).forEach(n=>{WS(n)?e[n]=t[n]:mn(`Invalid parameter to update: "${n}". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`)}),e};function h$(){const t=re.domCache.get(this),e=re.innerParams.get(this);if(!e){mT(this);return}t.popup&&ne.swalCloseEventFinishedCallback&&(ne.swalCloseEventFinishedCallback(),delete ne.swalCloseEventFinishedCallback),ne.deferDisposalTimer&&(clearTimeout(ne.deferDisposalTimer),delete ne.deferDisposalTimer),typeof e.didDestroy=="function"&&e.didDestroy(),f$(this)}const f$=t=>{mT(t),delete t.params,delete ne.keydownHandler,delete ne.keydownTarget,delete ne.currentInstance},mT=t=>{t.isAwaitingPromise()?(Sp(re,t),re.awaitingPromise.set(t,!0)):(Sp(Bl,t),Sp(re,t))},Sp=(t,e)=>{for(const n in t)t[n].delete(e)},gT=Object.freeze(Object.defineProperty({__proto__:null,_destroy:h$,close:_c,closeModal:_c,closePopup:_c,closeToast:_c,disableButtons:i$,disableInput:o$,disableLoading:kI,enableButtons:r$,enableInput:s$,getInput:UO,getProgressSteps:u$,handleAwaitingPromise:Cu,hideLoading:kI,isAwaitingPromise:XO,rejectPromise:ZO,resetValidationMessage:l$,showValidationMessage:a$,update:c$},Symbol.toStringTag,{value:"Module"})),p$=t=>{const e=re.innerParams.get(t);t.disableButtons(),e.input?yT(t,"confirm"):sv(t,!0)},m$=t=>{const e=re.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?yT(t,"deny"):iv(t,!1)},g$=(t,e)=>{t.disableButtons(),e(aa.cancel)},yT=(t,e)=>{const n=re.innerParams.get(t);if(!n.input)return Us(`The "input" parameter is needed to be set when using returnInputValueOn${Gy(e)}`);const r=DO(t,n);n.inputValidator?y$(t,r,e):t.getInput().checkValidity()?e==="deny"?iv(t,r):sv(t,r):(t.enableButtons(),t.showValidationMessage(n.validationMessage))},y$=(t,e,n)=>{const r=re.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>_u(r.inputValidator(e,r.validationMessage))).then(s=>{t.enableButtons(),t.enableInput(),s?t.showValidationMessage(s):n==="deny"?iv(t,e):sv(t,e)})},iv=(t,e)=>{const n=re.innerParams.get(t||globalThis);n.showLoaderOnDeny&&Vo(_i()),n.preDeny?(re.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>_u(n.preDeny(e,n.validationMessage))).then(i=>{i===!1?(t.hideLoading(),Cu(t)):t.closePopup({isDenied:!0,value:typeof i>"u"?e:i})}).catch(i=>vT(t||globalThis,i))):t.closePopup({isDenied:!0,value:e})},bI=(t,e)=>{t.closePopup({isConfirmed:!0,value:e})},vT=(t,e)=>{t.rejectPromise(e)},sv=(t,e)=>{const n=re.innerParams.get(t||globalThis);n.showLoaderOnConfirm&&Vo(),n.preConfirm?(t.resetValidationMessage(),re.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>_u(n.preConfirm(e,n.validationMessage))).then(i=>{En(Hh())||i===!1?(t.hideLoading(),Cu(t)):bI(t,typeof i>"u"?e:i)}).catch(i=>vT(t||globalThis,i))):bI(t,e)},v$=(t,e,n)=>{re.innerParams.get(t).toast?w$(t,e,n):(_$(e),E$(e),S$(t,e,n))},w$=(t,e,n)=>{e.popup.onclick=()=>{const r=re.innerParams.get(t);r&&(I$(r)||r.timer||r.input)||n(aa.close)}},I$=t=>t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton;let Pd=!1;const _$=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=void 0,e.target===t.container&&(Pd=!0)}}},E$=t=>{t.container.onmousedown=()=>{t.popup.onmouseup=function(e){t.popup.onmouseup=void 0,(e.target===t.popup||t.popup.contains(e.target))&&(Pd=!0)}}},S$=(t,e,n)=>{e.container.onclick=r=>{const i=re.innerParams.get(t);if(Pd){Pd=!1;return}r.target===e.container&&qh(i.allowOutsideClick)&&n(aa.backdrop)}},T$=t=>typeof t=="object"&&t.jquery,AI=t=>t instanceof Element||T$(t),k$=t=>{const e={};return typeof t[0]=="object"&&!AI(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,r)=>{const i=t[r];typeof i=="string"||AI(i)?e[n]=i:i!==void 0&&Us(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof i}`)}),e};function C$(...t){const e=this;return new e(...t)}function b$(t){class e extends this{_main(r,i){return super._main(r,Object.assign({},t,i))}}return e}const A$=()=>ne.timeout&&ne.timeout.getTimerLeft(),wT=()=>{if(ne.timeout)return mR(),ne.timeout.stop()},IT=()=>{if(ne.timeout){const t=ne.timeout.start();return tv(t),t}},x$=()=>{const t=ne.timeout;return t&&(t.running?wT():IT())},N$=t=>{if(ne.timeout){const e=ne.timeout.increase(t);return tv(e,!0),e}},D$=()=>ne.timeout&&ne.timeout.isRunning();let xI=!1;const Zm={};function P$(t="data-swal-template"){Zm[t]=this,xI||(document.body.addEventListener("click",R$),xI=!0)}const R$=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in Zm){const r=e.getAttribute(n);if(r){Zm[n].fire({template:r});return}}},O$=Object.freeze(Object.defineProperty({__proto__:null,argsToParams:k$,bindClickHandler:P$,clickCancel:jO,clickConfirm:uT,clickDeny:BO,enableLoading:Vo,fire:C$,getActions:Tu,getCancelButton:_s,getCloseButton:Xy,getConfirmButton:Yn,getContainer:zt,getDenyButton:_i,getFocusableElements:Jy,getFooter:JS,getHtmlContainer:Dd,getIcon:Su,getImage:YS,getInputLabel:cR,getLoader:oa,getPopup:ye,getTimerLeft:A$,getTimerProgressBar:Kh,getTitle:QS,getValidationMessage:Hh,increaseTimer:N$,isDeprecatedParameter:Ym,isLoading:hR,isTimerRunning:D$,isUpdatableParameter:WS,isValidParameter:KS,isVisible:VO,mixin:b$,resumeTimer:IT,showLoading:Vo,stopTimer:wT,toggleTimer:x$},Symbol.toStringTag,{value:"Module"}));let eg;class la{constructor(...e){if(typeof window>"u")return;eg=this;const n=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:n,writable:!1,enumerable:!0,configurable:!0}});const r=this._main(this.params);re.promise.set(this,r)}_main(e,n={}){lR(Object.assign({},n,e)),ne.currentInstance&&(ne.currentInstance._destroy(),Zy()&&sT()),ne.currentInstance=this;const r=L$(e,n);pO(r),Object.freeze(r),ne.timeout&&(ne.timeout.stop(),delete ne.timeout),clearTimeout(ne.restoreFocusTimeout);const i=M$(this);return iT(this,r),re.innerParams.set(this,r),$$(this,i,r)}then(e){return re.promise.get(this).then(e)}finally(e){return re.promise.get(this).finally(e)}}const $$=(t,e,n)=>new Promise((r,i)=>{const s=o=>{t.closePopup({isDismissed:!0,dismiss:o})};Bl.swalPromiseResolve.set(t,r),Bl.swalPromiseReject.set(t,i),e.confirmButton.onclick=()=>p$(t),e.denyButton.onclick=()=>m$(t),e.cancelButton.onclick=()=>g$(t,s),e.closeButton.onclick=()=>s(aa.close),v$(t,e,s),zO(t,ne,n,s),NO(t,n),kO(n),F$(ne,n,s),U$(e,n),setTimeout(()=>{e.container.scrollTop=0})}),L$=(t,e)=>{const n=iO(t),r=Object.assign({},To,e,n,t);return r.showClass=Object.assign({},To.showClass,r.showClass),r.hideClass=Object.assign({},To.hideClass,r.hideClass),r},M$=t=>{const e={popup:ye(),container:zt(),actions:Tu(),confirmButton:Yn(),denyButton:_i(),cancelButton:_s(),loader:oa(),closeButton:Xy(),validationMessage:Hh(),progressSteps:XS()};return re.domCache.set(t,e),e},F$=(t,e,n)=>{const r=Kh();qt(r),e.timer&&(t.timeout=new mO(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(xt(r),Mn(r,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&tv(e.timer)})))},U$=(t,e)=>{if(!e.toast){if(!qh(e.allowEnterKey))return B$();V$(t,e)||Jm(e,-1,1)}},V$=(t,e)=>e.focusDeny&&En(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&En(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&En(t.confirmButton)?(t.confirmButton.focus(),!0):!1,B$=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(la.prototype,gT);Object.assign(la,O$);Object.keys(gT).forEach(t=>{la[t]=function(...e){if(eg)return eg[t](...e)}});la.DismissReason=aa;la.version="11.4.8";const jl=la;jl.default=jl;const _T=({title:t,description:e})=>{jl.fire({title:t,icon:"error",text:e})},j$=({title:t,description:e})=>{jl.fire({title:t,icon:"success",text:e})},z$=He.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 30px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`,q$=He.div`
    height: 100%;
    width: 100%;

    select {
        width: 155px;
        height: 45px;
        border-radius: 10px;
        border: 2px solid #AAF;
        padding-left: 15px;
    }
`,Tp=He.div`
    height: 100%;
    width: 100%;

    input {
        width: 145px;
        height: 40px;
        border-radius: 10px;
        border: 2px solid #AAF;
        padding-left: 15px;
    }
`,H$=He.div`
    width: 80%;
    height: 45px;

    button {
        width: 100%;
        height: 100%;
        border-radius: 10px;

        ${t=>t.disabled?"border: 1px solid black":`
            background-color: darkblue;
            color: #FFF;
            cursor: pointer;
            transition: transform .5s;
            border: none;

            &:hover {
                transform: scale(1.05);
            }
        `}
    }
`,K$=({onAdd:t})=>{const e=Math.pow(10,6),[n,r]=Oe.useState(new Date),[i,s]=Oe.useState(""),[o,a]=Oe.useState(""),[l,u]=Oe.useState(0),[c,d]=Oe.useState(!0);Oe.useEffect(()=>{(()=>{try{d(typeof n.getTime()!="number"||i===""||o===""||typeof l!="number"||l===0||isNaN(l))}catch{d(!0)}})()},[i,n,o,l]);const h=()=>{if(typeof n.getTime()!="number"||i===""||o===""||l===0){_T({title:"Erro inesperado",description:"Verifique se todos os campos estão bem preenchidos"});return}let v={date:n,category:i,title:o,value:l};console.log(v),t(v),r(new Date),s(""),a(""),u(0)},p=v=>{r(FP(v))},y=v=>{s(v)};return ut(z$,{children:[ut(Tp,{children:[G("h3",{children:"Data"}),G("input",{type:"date",value:Qm(n),onChange:v=>p(v.target.value),min:"2021-12-01",max:MP(Qm(new Date)),required:!0})]}),ut(q$,{children:[G("h3",{children:"Categoria"}),ut("select",{name:"select",value:i,onChange:v=>y(v.target.value),required:!0,children:[G("option",{value:0,style:{display:"none",visibility:"hidden",paddingRight:"10px"},children:"Categoria"}),G("option",{value:"food",children:"Alimentação"}),G("option",{value:"rent",children:"Renda"}),G("option",{value:"salary",children:"Salário"}),G("option",{value:"entertainment",children:"Entretenimento"}),G("option",{value:"extra",children:"Extra"}),G("option",{value:"debt",children:"Dívida"}),G("option",{value:"bribery",children:"Suborno"}),G("option",{value:"loan",children:"Empréstimo"})]})]}),ut(Tp,{children:[G("h3",{children:"Título"}),G("input",{type:"text",value:o,onChange:v=>a(v.target.value),required:!0})]}),ut(Tp,{children:[G("h3",{children:"Valor"}),G("input",{type:"number",min:0,max:e,value:l,onChange:v=>{let T=parseInt(v.target.value)===0?0:parseInt(v.target.value)||"";u(T)},required:!0})]}),G(H$,{disabled:c,children:G("button",{onClick:h,disabled:c,children:"Adicionar"})})]})};/**
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
 */const ET=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},W$=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ST={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(h=64)),r.push(n[c],n[d],n[h],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ET(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):W$(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new G$;const h=s<<2|a>>4;if(r.push(h),u!==64){const p=a<<4&240|u>>2;if(r.push(p),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class G$ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Q$=function(t){const e=ET(t);return ST.encodeByteArray(e,!0)},Rd=function(t){return Q$(t).replace(/\./g,"")},TT=function(t){try{return ST.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Od(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Y$(n)||(t[n]=Od(t[n],e[n]));return t}function Y$(t){return t!=="__proto__"}/**
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
 */function X$(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const J$=()=>X$().__FIREBASE_DEFAULTS__,Z$=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},eL=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&TT(t[1]);return e&&JSON.parse(e)},ov=()=>{try{return J$()||Z$()||eL()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},tL=()=>{var t;return(t=ov())===null||t===void 0?void 0:t.config},nL=t=>{var e;return(e=ov())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class rL{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function iL(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Rd(JSON.stringify(n)),Rd(JSON.stringify(o)),a].join(".")}/**
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
 */function Fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sL(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fe())}function av(){var t;const e=(t=ov())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function oL(){return typeof self=="object"&&self.self===self}function kT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function lv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CT(){const t=Fe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function aL(){return!av()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zl(){try{return typeof indexedDB=="object"}catch{return!1}}function lL(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const uL="FirebaseError";class Xt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=uL,Object.setPrototypeOf(this,Xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vs.prototype.create)}}class Vs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?cL(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Xt(i,a,r)}}function cL(t,e){return t.replace(dL,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const dL=/\{\$([^}]+)}/g;/**
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
 */function NI(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function hL(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function tg(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(DI(s)&&DI(o)){if(!tg(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function DI(t){return t!==null&&typeof t=="object"}/**
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
 */function ua(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function go(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ga(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function bT(t,e){const n=new fL(t,e);return n.subscribe.bind(n)}class fL{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");pL(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=kp),i.error===void 0&&(i.error=kp),i.complete===void 0&&(i.complete=kp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pL(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kp(){}/**
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
 */function H(t){return t&&t._delegate?t._delegate:t}class mr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Gi="[DEFAULT]";/**
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
 */class mL{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new rL;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yL(e))try{this.getOrInitializeService({instanceIdentifier:Gi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Gi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gi){return this.instances.has(e)}getOptions(e=Gi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gL(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gi){return this.component?this.component.multipleInstances?e:Gi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gL(t){return t===Gi?void 0:t}function yL(t){return t.instantiationMode==="EAGER"}/**
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
 */class vL{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mL(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const uv=[];var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const AT={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},wL=de.INFO,IL={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},_L=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=IL[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qh{constructor(e){this.name=e,this._logLevel=wL,this._logHandler=_L,this._userLogHandler=null,uv.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}function EL(t){uv.forEach(e=>{e.setLogLevel(t)})}function SL(t,e){for(const n of uv){let r=null;e&&e.level&&(r=AT[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:de[s].toLowerCase(),message:a,args:o,type:i.name})}}}const TL=(t,e)=>e.some(n=>t instanceof n);let PI,RI;function kL(){return PI||(PI=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CL(){return RI||(RI=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xT=new WeakMap,ng=new WeakMap,NT=new WeakMap,Cp=new WeakMap,cv=new WeakMap;function bL(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(yi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&xT.set(n,t)}).catch(()=>{}),cv.set(e,t),e}function AL(t){if(ng.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ng.set(t,e)}let rg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ng.get(t);if(e==="objectStoreNames")return t.objectStoreNames||NT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xL(t){rg=t(rg)}function NL(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(bp(this),e,...n);return NT.set(r,e.sort?e.sort():[e]),yi(r)}:CL().includes(t)?function(...e){return t.apply(bp(this),e),yi(xT.get(this))}:function(...e){return yi(t.apply(bp(this),e))}}function DL(t){return typeof t=="function"?NL(t):(t instanceof IDBTransaction&&AL(t),TL(t,kL())?new Proxy(t,rg):t)}function yi(t){if(t instanceof IDBRequest)return bL(t);if(Cp.has(t))return Cp.get(t);const e=DL(t);return e!==t&&(Cp.set(t,e),cv.set(e,t)),e}const bp=t=>cv.get(t);function PL(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=yi(o);return r&&o.addEventListener("upgradeneeded",l=>{r(yi(o.result),l.oldVersion,l.newVersion,yi(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const RL=["get","getKey","getAll","getAllKeys","count"],OL=["put","add","delete","clear"],Ap=new Map;function OI(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ap.get(e))return Ap.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=OL.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||RL.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ap.set(e,s),s}xL(t=>({...t,get:(e,n,r)=>OI(e,n)||t.get(e,n,r),has:(e,n)=>!!OI(e,n)||t.has(e,n)}));/**
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
 */class $L{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(LL(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function LL(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ig="@firebase/app",$I="0.9.5";/**
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
 */const Ss=new Qh("@firebase/app"),ML="@firebase/app-compat",FL="@firebase/analytics-compat",UL="@firebase/analytics",VL="@firebase/app-check-compat",BL="@firebase/app-check",jL="@firebase/auth",zL="@firebase/auth-compat",qL="@firebase/database",HL="@firebase/database-compat",KL="@firebase/functions",WL="@firebase/functions-compat",GL="@firebase/installations",QL="@firebase/installations-compat",YL="@firebase/messaging",XL="@firebase/messaging-compat",JL="@firebase/performance",ZL="@firebase/performance-compat",eM="@firebase/remote-config",tM="@firebase/remote-config-compat",nM="@firebase/storage",rM="@firebase/storage-compat",iM="@firebase/firestore",sM="@firebase/firestore-compat",oM="firebase",aM="9.18.0";/**
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
 */const Ei="[DEFAULT]",lM={[ig]:"fire-core",[ML]:"fire-core-compat",[UL]:"fire-analytics",[FL]:"fire-analytics-compat",[BL]:"fire-app-check",[VL]:"fire-app-check-compat",[jL]:"fire-auth",[zL]:"fire-auth-compat",[qL]:"fire-rtdb",[HL]:"fire-rtdb-compat",[KL]:"fire-fn",[WL]:"fire-fn-compat",[GL]:"fire-iid",[QL]:"fire-iid-compat",[YL]:"fire-fcm",[XL]:"fire-fcm-compat",[JL]:"fire-perf",[ZL]:"fire-perf-compat",[eM]:"fire-rc",[tM]:"fire-rc-compat",[nM]:"fire-gcs",[rM]:"fire-gcs-compat",[iM]:"fire-fst",[sM]:"fire-fst-compat","fire-js":"fire-js",[oM]:"fire-js-all"};/**
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
 */const Si=new Map,ql=new Map;function $d(t,e){try{t.container.addComponent(e)}catch(n){Ss.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function DT(t,e){t.container.addOrOverwriteComponent(e)}function Ti(t){const e=t.name;if(ql.has(e))return Ss.debug(`There were multiple attempts to register component ${e}.`),!1;ql.set(e,t);for(const n of Si.values())$d(n,t);return!0}function PT(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function uM(t,e,n=Ei){PT(t,e).clearInstance(n)}function cM(){ql.clear()}/**
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
 */const dM={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Nr=new Vs("app","Firebase",dM);/**
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
 */let hM=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nr.create("app-deleted",{appName:this._name})}};/**
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
 */const Bs=aM;function dv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ei,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Nr.create("bad-app-name",{appName:String(i)});if(n||(n=tL()),!n)throw Nr.create("no-options");const s=Si.get(i);if(s){if(tg(n,s.options)&&tg(r,s.config))return s;throw Nr.create("duplicate-app",{appName:i})}const o=new vL(i);for(const l of ql.values())o.addComponent(l);const a=new hM(n,r,o);return Si.set(i,a),a}function fM(t=Ei){const e=Si.get(t);if(!e&&t===Ei)return dv();if(!e)throw Nr.create("no-app",{appName:t});return e}function pM(){return Array.from(Si.values())}async function RT(t){const e=t.name;Si.has(e)&&(Si.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function dr(t,e,n){var r;let i=(r=lM[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ss.warn(a.join(" "));return}Ti(new mr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function OT(t,e){if(t!==null&&typeof t!="function")throw Nr.create("invalid-log-argument");SL(t,e)}function $T(t){EL(t)}/**
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
 */const mM="firebase-heartbeat-database",gM=1,Hl="firebase-heartbeat-store";let xp=null;function LT(){return xp||(xp=PL(mM,gM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Hl)}}}).catch(t=>{throw Nr.create("idb-open",{originalErrorMessage:t.message})})),xp}async function yM(t){try{return(await LT()).transaction(Hl).objectStore(Hl).get(MT(t))}catch(e){if(e instanceof Xt)Ss.warn(e.message);else{const n=Nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ss.warn(n.message)}}}async function LI(t,e){try{const r=(await LT()).transaction(Hl,"readwrite");return await r.objectStore(Hl).put(e,MT(t)),r.done}catch(n){if(n instanceof Xt)Ss.warn(n.message);else{const r=Nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ss.warn(r.message)}}}function MT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const vM=1024,wM=30*24*60*60*1e3;class IM{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new EM(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=MI();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=wM}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=MI(),{heartbeatsToSend:n,unsentEntries:r}=_M(this._heartbeatsCache.heartbeats),i=Rd(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function MI(){return new Date().toISOString().substring(0,10)}function _M(t,e=vM){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),FI(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),FI(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class EM{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zl()?lL().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await yM(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return LI(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return LI(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function FI(t){return Rd(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function SM(t){Ti(new mr("platform-logger",e=>new $L(e),"PRIVATE")),Ti(new mr("heartbeat",e=>new IM(e),"PRIVATE")),dr(ig,$I,t),dr(ig,$I,"esm2017"),dr("fire-js","")}SM("");const TM=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Xt,SDK_VERSION:Bs,_DEFAULT_ENTRY_NAME:Ei,_addComponent:$d,_addOrOverwriteComponent:DT,_apps:Si,_clearComponents:cM,_components:ql,_getProvider:PT,_registerComponent:Ti,_removeServiceInstance:uM,deleteApp:RT,getApp:fM,getApps:pM,initializeApp:dv,onLog:OT,registerVersion:dr,setLogLevel:$T},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kM{constructor(e,n){this._delegate=e,this.firebase=n,$d(e,new mr("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),RT(this._delegate)))}_getService(e,n=Ei){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Ei){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){$d(this._delegate,e)}_addOrOverwriteComponent(e){DT(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const CM={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},UI=new Vs("app-compat","Firebase",CM);/**
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
 */function bM(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:dr,setLogLevel:$T,onLog:OT,apps:null,SDK_VERSION:Bs,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:TM}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Ei,!NI(e,u))throw UI.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,c={}){const d=dv(u,c);if(NI(e,d.name))return e[d.name];const h=new t(d,n);return e[d.name]=h,h}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,d=c.replace("-compat","");if(Ti(u)&&u.type==="PUBLIC"){const h=(p=i())=>{if(typeof p[d]!="function")throw UI.create("invalid-app-argument",{appName:c});return p[d]()};u.serviceProps!==void 0&&Od(h,u.serviceProps),n[d]=h,t.prototype[d]=function(...p){return this._getService.bind(this,c).apply(this,u.multipleInstances?p:[])}}return u.type==="PUBLIC"?n[d]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
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
 */function FT(){const t=bM(kM);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:FT,extendNamespace:e,createSubscribe:bT,ErrorFactory:Vs,deepExtend:Od});function e(n){Od(t,n)}return t}const AM=FT();/**
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
 */const VI=new Qh("@firebase/app-compat"),xM="@firebase/app-compat",NM="0.2.5";/**
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
 */function DM(t){dr(xM,NM,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(oL()&&self.firebase!==void 0){VI.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&VI.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const ki=AM;DM();var PM="firebase",RM="9.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ki.registerVersion(PM,RM,"app-compat");function hv(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Oa={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Ys={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OM(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function UT(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $M=OM,LM=UT,VT=new Vs("auth","Firebase",UT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=new Qh("@firebase/auth");function Wc(t,...e){BI.logLevel<=de.ERROR&&BI.error(`Auth (${Bs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(t,...e){throw fv(t,...e)}function Ct(t,...e){return fv(t,...e)}function BT(t,e,n){const r=Object.assign(Object.assign({},LM()),{[e]:n});return new Vs("auth","Firebase",r).create(e,{appName:t.name})}function ca(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Nt(t,"argument-error"),BT(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function fv(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return VT.create(t,...e)}function N(t,e,...n){if(!t)throw fv(e,...n)}function or(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wc(e),new Error(e)}function Xn(t,e){t||or(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=new Map;function In(t){Xn(t instanceof Function,"Expected a class definition");let e=jI.get(t);return e?(Xn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jI.set(t,e),e)}function MM(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(In);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function pv(){return zI()==="http:"||zI()==="https:"}function zI(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pv()||kT()||"connection"in navigator)?navigator.onLine:!0}function UM(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xn(n>e,"Short delay should be less than long delay!"),this.isMobile=sL()||lv()}get(){return FM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(t,e){Xn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;or("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;or("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;or("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BM=new bu(3e4,6e4);function it(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function mt(t,e,n,r,i={}){return zT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ua(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),jT.fetch()(qT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function zT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},VM),e);try{const i=new jM(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Qa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Qa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Qa(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw BT(t,c,u);Nt(t,c)}}catch(i){if(i instanceof Xt)throw i;Nt(t,"internal-error",{message:String(i)})}}async function Vr(t,e,n,r,i={}){const s=await mt(t,e,n,r,i);return"mfaPendingCredential"in s&&Nt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function qT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?mv(t.config,i):`${t.config.apiScheme}://${i}`}class jM{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ct(this.auth,"network-request-failed")),BM.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ct(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zM(t,e){return mt(t,"POST","/v1/accounts:delete",e)}async function qM(t,e){return mt(t,"POST","/v1/accounts:update",e)}async function HM(t,e){return mt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function KM(t,e=!1){const n=H(t),r=await n.getIdToken(e),i=Yh(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:hl(Np(i.auth_time)),issuedAtTime:hl(Np(i.iat)),expirationTime:hl(Np(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Np(t){return Number(t)*1e3}function Yh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wc("JWT malformed, contained fewer than 3 sections"),null;try{const i=TT(n);return i?JSON.parse(i):(Wc("Failed to decode base64 JWT payload"),null)}catch(i){return Wc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function WM(t){const e=Yh(t);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Xt&&GM(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function GM({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=hl(this.lastLoginAt),this.creationTime=hl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Wl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Lr(t,HM(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?JM(s.providerUserInfo):[],a=XM(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new HT(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function YM(t){const e=H(t);await Wl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XM(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function JM(t){return t.map(e=>{var{providerId:n}=e,r=hv(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZM(t,e){const n=await zT(t,{},async()=>{const r=ua({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=qT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",jT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):WM(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return N(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await ZM(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Gl;return r&&(N(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(N(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gl,this.toJSON())}_performRefresh(){return or("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(t,e){N(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ds{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=hv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new QM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new HT(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Lr(this,this.stsTokenManager.getToken(this.auth,e));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return KM(this,e)}reload(){return YM(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ds(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Wl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Lr(this,zM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:_,isAnonymous:k,providerData:A,stsTokenManager:D}=n;N(g&&D,e,"internal-error");const R=Gl.fromJSON(this.name,D);N(typeof g=="string",e,"internal-error"),Wr(d,e.name),Wr(h,e.name),N(typeof _=="boolean",e,"internal-error"),N(typeof k=="boolean",e,"internal-error"),Wr(p,e.name),Wr(y,e.name),Wr(v,e.name),Wr(T,e.name),Wr(m,e.name),Wr(f,e.name);const ie=new ds({uid:g,auth:e,email:h,emailVerified:_,displayName:d,isAnonymous:k,photoURL:y,phoneNumber:p,tenantId:v,stsTokenManager:R,createdAt:m,lastLoginAt:f});return A&&Array.isArray(A)&&(ie.providerData=A.map(W=>Object.assign({},W))),T&&(ie._redirectEventId=T),ie}static async _fromIdTokenResponse(e,n,r=!1){const i=new Gl;i.updateFromServerResponse(n);const s=new ds({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Wl(s),s}}/**
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
 */class KT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}KT.type="NONE";const Bo=KT;/**
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
 */function hs(t,e,n){return`firebase:${t}:${e}:${n}`}class Co{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=hs(this.userKey,i.apiKey,s),this.fullPersistenceKey=hs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ds._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Co(In(Bo),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||In(Bo);const o=hs(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=ds._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Co(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Co(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(QT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(WT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(YT(e))return"Blackberry";if(XT(e))return"Webos";if(gv(e))return"Safari";if((e.includes("chrome/")||GT(e))&&!e.includes("edge/"))return"Chrome";if(Au(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function WT(t=Fe()){return/firefox\//i.test(t)}function gv(t=Fe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function GT(t=Fe()){return/crios\//i.test(t)}function QT(t=Fe()){return/iemobile/i.test(t)}function Au(t=Fe()){return/android/i.test(t)}function YT(t=Fe()){return/blackberry/i.test(t)}function XT(t=Fe()){return/webos/i.test(t)}function da(t=Fe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eF(t=Fe()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function tF(t=Fe()){var e;return da(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function nF(){return CT()&&document.documentMode===10}function JT(t=Fe()){return da(t)||Au(t)||XT(t)||YT(t)||/windows phone/i.test(t)||QT(t)}function rF(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(t,e=[]){let n;switch(t){case"Browser":n=qI(Fe());break;case"Worker":n=`${qI(Fe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Bs}/${r}`}/**
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
 */class iF{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sF{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new HI(this),this.idTokenSubscription=new HI(this),this.beforeStateQueue=new iF(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=VT,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=In(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Co.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Wl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?H(e):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(In(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Vs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&In(e)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await Co.create(this,[In(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return N(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ZT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ht(t){return H(t)}class HI{constructor(e){this.auth=e,this.observer=null,this.addObserver=bT(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function oF(t,e,n){const r=ht(t);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=ek(e),{host:o,port:a}=aF(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||lF()}function ek(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function aF(t){const e=ek(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:KI(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:KI(o)}}}function KI(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function lF(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return or("not implemented")}_getIdTokenResponse(e){return or("not implemented")}_linkToIdToken(e,n){return or("not implemented")}_getReauthenticationResolver(e){return or("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tk(t,e){return mt(t,"POST","/v1/accounts:resetPassword",it(t,e))}async function nk(t,e){return mt(t,"POST","/v1/accounts:update",e)}async function uF(t,e){return mt(t,"POST","/v1/accounts:update",it(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cF(t,e){return Vr(t,"POST","/v1/accounts:signInWithPassword",it(t,e))}async function Xh(t,e){return mt(t,"POST","/v1/accounts:sendOobCode",it(t,e))}async function dF(t,e){return Xh(t,e)}async function hF(t,e){return Xh(t,e)}async function fF(t,e){return Xh(t,e)}async function pF(t,e){return Xh(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mF(t,e){return Vr(t,"POST","/v1/accounts:signInWithEmailLink",it(t,e))}async function gF(t,e){return Vr(t,"POST","/v1/accounts:signInWithEmailLink",it(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql extends ha{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ql(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ql(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return cF(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return mF(e,{email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return nk(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return gF(e,{idToken:n,email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dr(t,e){return Vr(t,"POST","/v1/accounts:signInWithIdp",it(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yF="http://localhost";class gr extends ha{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new gr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=hv(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new gr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Dr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Dr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Dr(e,n)}buildRequest(){const e={requestUri:yF,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ua(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vF(t,e){return mt(t,"POST","/v1/accounts:sendVerificationCode",it(t,e))}async function wF(t,e){return Vr(t,"POST","/v1/accounts:signInWithPhoneNumber",it(t,e))}async function IF(t,e){const n=await Vr(t,"POST","/v1/accounts:signInWithPhoneNumber",it(t,e));if(n.temporaryProof)throw Qa(t,"account-exists-with-different-credential",n);return n}const _F={USER_NOT_FOUND:"user-not-found"};async function EF(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Vr(t,"POST","/v1/accounts:signInWithPhoneNumber",it(t,n),_F)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends ha{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new fs({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new fs({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return wF(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return IF(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return EF(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new fs({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SF(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function TF(t){const e=go(Ga(t)).link,n=e?go(Ga(e)).deep_link_id:null,r=go(Ga(t)).deep_link_id;return(r?go(Ga(r)).link:null)||r||n||e||t}class Jh{constructor(e){var n,r,i,s,o,a;const l=go(Ga(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=SF((i=l.mode)!==null&&i!==void 0?i:null);N(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=TF(e);try{return new Jh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){this.providerId=Mi.PROVIDER_ID}static credential(e,n){return Ql._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Jh.parseLink(n);return N(r,"argument-error"),Ql._fromEmailAndCode(e,r.code,r.tenantId)}}Mi.PROVIDER_ID="password";Mi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class fa extends Br{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class bo extends fa{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return N("providerId"in n&&"signInMethod"in n,"argument-error"),gr._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return N(e.idToken||e.accessToken,"argument-error"),gr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return bo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return bo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new bo(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends fa{constructor(){super("facebook.com")}static credential(e){return gr._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";tr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends fa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return gr._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return nr.credential(n,r)}catch{return null}}}nr.GOOGLE_SIGN_IN_METHOD="google.com";nr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends fa{constructor(){super("github.com")}static credential(e){return gr._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rr.credential(e.oauthAccessToken)}catch{return null}}}rr.GITHUB_SIGN_IN_METHOD="github.com";rr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kF="http://localhost";class jo extends ha{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Dr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Dr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Dr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new jo(r,s)}static _create(e,n){return new jo(e,n)}buildRequest(){return{requestUri:kF,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CF="saml.";class Ld extends Br{constructor(e){N(e.startsWith(CF),"argument-error"),super(e)}static credentialFromResult(e){return Ld.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ld.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=jo.fromJSON(e);return N(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return jo._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends fa{constructor(){super("twitter.com")}static credential(e,n){return gr._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.TWITTER_SIGN_IN_METHOD="twitter.com";ir.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rk(t,e){return Vr(t,"POST","/v1/accounts:signUp",it(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ds._fromIdTokenResponse(e,r,i),o=WI(r);return new Fn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=WI(r);return new Fn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function WI(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bF(t){var e;const n=ht(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Fn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await rk(n,{returnSecureToken:!0}),i=await Fn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md extends Xt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Md.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Md(e,n,r,i)}}function ik(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Md._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function AF(t,e){const n=H(t);await Zh(!0,n,e);const{providerUserInfo:r}=await qM(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=sk(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function yv(t,e,n=!1){const r=await Lr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fn._forOperation(t,"link",r)}async function Zh(t,e,n){await Wl(e);const r=sk(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";N(r.has(n)===t,e.auth,i)}/**
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
 */async function ok(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Lr(t,ik(r,i,e,t),n);N(s.idToken,r,"internal-error");const o=Yh(s.idToken);N(o,r,"internal-error");const{sub:a}=o;return N(t.uid===a,r,"user-mismatch"),Fn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Nt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ak(t,e,n=!1){const r="signIn",i=await ik(t,r,e),s=await Fn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function ef(t,e){return ak(ht(t),e)}async function lk(t,e){const n=H(t);return await Zh(!1,n,e.providerId),yv(n,e)}async function uk(t,e){return ok(H(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xF(t,e){return Vr(t,"POST","/v1/accounts:signInWithCustomToken",it(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NF(t,e){const n=ht(t),r=await xF(n,{token:e,returnSecureToken:!0}),i=await Fn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?vv._fromServerResponse(e,n):Nt(e,"internal-error")}}class vv extends tf{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new vv(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(t,e,n){var r;N(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),N(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(N(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(N(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DF(t,e,n){const r=H(t),i={requestType:"PASSWORD_RESET",email:e};n&&nf(r,i,n),await hF(r,i)}async function PF(t,e,n){await tk(H(t),{oobCode:e,newPassword:n})}async function RF(t,e){await uF(H(t),{oobCode:e})}async function ck(t,e){const n=H(t),r=await tk(n,{oobCode:e}),i=r.requestType;switch(N(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":N(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":N(r.mfaInfo,n,"internal-error");default:N(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=tf._fromServerResponse(ht(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function OF(t,e){const{data:n}=await ck(H(t),e);return n.email}async function $F(t,e,n){const r=ht(t),i=await rk(r,{returnSecureToken:!0,email:e,password:n}),s=await Fn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function LF(t,e,n){return ef(H(t),Mi.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MF(t,e,n){const r=H(t),i={requestType:"EMAIL_SIGNIN",email:e};N(n.handleCodeInApp,r,"argument-error"),n&&nf(r,i,n),await fF(r,i)}function FF(t,e){const n=Jh.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function UF(t,e,n){const r=H(t),i=Mi.credentialWithLink(e,n||Kl());return N(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),ef(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VF(t,e){return mt(t,"POST","/v1/accounts:createAuthUri",it(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BF(t,e){const n=pv()?Kl():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await VF(H(t),r);return i||[]}async function jF(t,e){const n=H(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&nf(n.auth,i,e);const{email:s}=await dF(n.auth,i);s!==t.email&&await t.reload()}async function zF(t,e,n){const r=H(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&nf(r.auth,s,n);const{email:o}=await pF(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qF(t,e){return mt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HF(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=H(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Lr(r,qF(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function KF(t,e){return dk(H(t),e,null)}function WF(t,e){return dk(H(t),null,e)}async function dk(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Lr(t,nk(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function GF(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Yh(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Ao(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new QF(s,i);case"github.com":return new YF(s,i);case"google.com":return new XF(s,i);case"twitter.com":return new JF(s,i,t.screenName||null);case"custom":case"anonymous":return new Ao(s,null);default:return new Ao(s,r,i)}}class Ao{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class hk extends Ao{constructor(e,n,r,i){super(e,n,r),this.username=i}}class QF extends Ao{constructor(e,n){super(e,"facebook.com",n)}}class YF extends hk{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class XF extends Ao{constructor(e,n){super(e,"google.com",n)}}class JF extends hk{constructor(e,n,r){super(e,"twitter.com",n,r)}}function ZF(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:GF(n)}class is{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new is("enroll",e,n)}static _fromMfaPendingCredential(e){return new is("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return is._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return is._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=ht(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>tf._fromServerResponse(r,a));N(i.mfaPendingCredential,r,"internal-error");const o=is._fromMfaPendingCredential(i.mfaPendingCredential);return new wv(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await Fn._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return N(n.user,r,"internal-error"),Fn._forOperation(n.user,n.operationType,u);default:Nt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function e2(t,e){var n;const r=H(t),i=e;return N(e.customData.operationType,r,"argument-error"),N((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),wv._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t2(t,e){return mt(t,"POST","/v2/accounts/mfaEnrollment:start",it(t,e))}function n2(t,e){return mt(t,"POST","/v2/accounts/mfaEnrollment:finalize",it(t,e))}function r2(t,e){return mt(t,"POST","/v2/accounts/mfaEnrollment:withdraw",it(t,e))}class Iv{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>tf._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Iv(e)}async getSession(){return is._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Lr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Lr(this.user,r2(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Dp=new WeakMap;function i2(t){const e=H(t);return Dp.has(e)||Dp.set(e,Iv._fromUser(e)),Dp.get(e)}const Fd="__sak";/**
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
 */class fk{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fd,"1"),this.storage.removeItem(Fd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s2(){const t=Fe();return gv(t)||da(t)}const o2=1e3,a2=10;class pk extends fk{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=s2()&&rF(),this.fallbackToPolling=JT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);nF()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,a2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},o2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}pk.type="LOCAL";const _v=pk;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk extends fk{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}mk.type="SESSION";const Ts=mk;/**
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
 */function l2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class rf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new rf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await l2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class u2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=xu("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return window}function c2(t){tt().location.href=t}/**
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
 */function Ev(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function d2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function h2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function f2(){return Ev()?self:null}/**
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
 */const gk="firebaseLocalStorageDb",p2=1,Ud="firebaseLocalStorage",yk="fbase_key";class Nu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sf(t,e){return t.transaction([Ud],e?"readwrite":"readonly").objectStore(Ud)}function m2(){const t=indexedDB.deleteDatabase(gk);return new Nu(t).toPromise()}function sg(){const t=indexedDB.open(gk,p2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ud,{keyPath:yk})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ud)?e(r):(r.close(),await m2(),e(await sg()))})})}async function GI(t,e,n){const r=sf(t,!0).put({[yk]:e,value:n});return new Nu(r).toPromise()}async function g2(t,e){const n=sf(t,!1).get(e),r=await new Nu(n).toPromise();return r===void 0?null:r.value}function QI(t,e){const n=sf(t,!0).delete(e);return new Nu(n).toPromise()}const y2=800,v2=3;class vk{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>v2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ev()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rf._getInstance(f2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await d2(),!this.activeServiceWorker)return;this.sender=new u2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||h2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sg();return await GI(e,Fd,"1"),await QI(e,Fd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>GI(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>g2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>QI(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=sf(i,!1).getAll();return new Nu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),y2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vk.type="LOCAL";const Yl=vk;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w2(t,e){return mt(t,"POST","/v2/accounts/mfaSignIn:start",it(t,e))}function I2(t,e){return mt(t,"POST","/v2/accounts/mfaSignIn:finalize",it(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _2(t){return(await mt(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function wk(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ct("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",E2().appendChild(r)})}function Ik(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S2=500,T2=6e4,Ec=1e12;class k2{constructor(e){this.auth=e,this.counter=Ec,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new C2(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Ec;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Ec;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Ec;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class C2{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;N(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=b2(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},T2)},S2))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function b2(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp=Ik("rcb"),A2=new bu(3e4,6e4),x2="https://www.google.com/recaptcha/api.js?";class N2{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=tt().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return N(D2(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(tt().grecaptcha):new Promise((r,i)=>{const s=tt().setTimeout(()=>{i(Ct(e,"network-request-failed"))},A2.get());tt()[Pp]=()=>{tt().clearTimeout(s),delete tt()[Pp];const a=tt().grecaptcha;if(!a){i(Ct(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const d=l(u,c);return this.counter++,d},this.hostLanguage=n,r(a)};const o=`${x2}?${ua({onload:Pp,render:"explicit",hl:n})}`;wk(o).catch(()=>{clearTimeout(s),i(Ct(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=tt().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function D2(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class P2{async load(e){return new k2(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k="recaptcha",R2={theme:"light",type:"image"};let O2=class{constructor(e,n=Object.assign({},R2),r){this.parameters=n,this.type=_k,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ht(r),this.isInvisible=this.parameters.size==="invisible",N(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;N(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new P2:new N2,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){N(!this.parameters.sitekey,this.auth,"argument-error"),N(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),N(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=tt()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){N(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){N(pv()&&!Ev(),this.auth,"internal-error"),await $2(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await _2(this.auth);N(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return N(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function $2(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=fs._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function L2(t,e,n){const r=ht(t),i=await of(r,e,H(n));return new Sv(i,s=>ef(r,s))}async function M2(t,e,n){const r=H(t);await Zh(!1,r,"phone");const i=await of(r.auth,e,H(n));return new Sv(i,s=>lk(r,s))}async function F2(t,e,n){const r=H(t),i=await of(r.auth,e,H(n));return new Sv(i,s=>uk(r,s))}async function of(t,e,n){var r;const i=await n.verify();try{N(typeof i=="string",t,"argument-error"),N(n.type===_k,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return N(o.type==="enroll",t,"internal-error"),(await t2(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{N(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return N(a,t,"missing-multi-factor-info"),(await w2(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await vF(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function U2(t,e){await yv(H(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ks=class Gc{constructor(e){this.providerId=Gc.PROVIDER_ID,this.auth=ht(e)}verifyPhoneNumber(e,n){return of(this.auth,e,H(n))}static credential(e,n){return fs._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Gc.credentialFromTaggedObject(n)}static credentialFromError(e){return Gc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?fs._fromTokenResponse(n,r):null}};ks.PROVIDER_ID="phone";ks.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function js(t,e){return e?In(e):(N(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Tv extends ha{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Dr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Dr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Dr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function V2(t){return ak(t.auth,new Tv(t),t.bypassAuthState)}function B2(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),ok(n,new Tv(t),t.bypassAuthState)}async function j2(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),yv(n,new Tv(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return V2;case"linkViaPopup":case"linkViaRedirect":return j2;case"reauthViaPopup":case"reauthViaRedirect":return B2;default:Nt(this.auth,"internal-error")}}resolve(e){Xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2=new bu(2e3,1e4);async function q2(t,e,n){const r=ht(t);ca(t,e,Br);const i=js(r,n);return new kr(r,"signInViaPopup",e,i).executeNotNull()}async function H2(t,e,n){const r=H(t);ca(r.auth,e,Br);const i=js(r.auth,n);return new kr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function K2(t,e,n){const r=H(t);ca(r.auth,e,Br);const i=js(r.auth,n);return new kr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class kr extends Ek{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,kr.currentPopupAction&&kr.currentPopupAction.cancel(),kr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){Xn(this.filter.length===1,"Popup operations only handle one event");const e=xu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ct(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,z2.get())};e()}}kr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W2="pendingRedirect",fl=new Map;class G2 extends Ek{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fl.get(this.auth._key());if(!e){try{const r=await Q2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fl.set(this.auth._key(),e)}return this.bypassAuthState||fl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Q2(t,e){const n=Tk(e),r=Sk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function kv(t,e){return Sk(t)._set(Tk(e),"true")}function Y2(){fl.clear()}function Cv(t,e){fl.set(t._key(),e)}function Sk(t){return In(t._redirectPersistence)}function Tk(t){return hs(W2,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X2(t,e,n){return J2(t,e,n)}async function J2(t,e,n){const r=ht(t);ca(t,e,Br),await r._initializationPromise;const i=js(r,n);return await kv(i,r),i._openRedirect(r,e,"signInViaRedirect")}function Z2(t,e,n){return eU(t,e,n)}async function eU(t,e,n){const r=H(t);ca(r.auth,e,Br),await r.auth._initializationPromise;const i=js(r.auth,n);await kv(i,r.auth);const s=await kk(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function tU(t,e,n){return nU(t,e,n)}async function nU(t,e,n){const r=H(t);ca(r.auth,e,Br),await r.auth._initializationPromise;const i=js(r.auth,n);await Zh(!1,r,e.providerId),await kv(i,r.auth);const s=await kk(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function rU(t,e){return await ht(t)._initializationPromise,af(t,e,!1)}async function af(t,e,n=!1){const r=ht(t),i=js(r,e),o=await new G2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function kk(t){const e=xu(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iU=10*60*1e3;class Ck{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sU(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!bk(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ct(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iU&&this.cachedEventUids.clear(),this.cachedEventUids.has(YI(e))}saveEventToCache(e){this.cachedEventUids.add(YI(e)),this.lastProcessedEventTime=Date.now()}}function YI(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function bk({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sU(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bk(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ak(t,e={}){return mt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oU=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aU=/^https?/;async function lU(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ak(t);for(const n of e)try{if(uU(n))return}catch{}Nt(t,"unauthorized-domain")}function uU(t){const e=Kl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!aU.test(n))return!1;if(oU.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const cU=new bu(3e4,6e4);function XI(){const t=tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function dU(t){return new Promise((e,n)=>{var r,i,s;function o(){XI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{XI(),n(Ct(t,"network-request-failed"))},timeout:cU.get()})}if(!((i=(r=tt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=tt().gapi)===null||s===void 0)&&s.load)o();else{const a=Ik("iframefcb");return tt()[a]=()=>{gapi.load?o():n(Ct(t,"network-request-failed"))},wk(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Qc=null,e})}let Qc=null;function hU(t){return Qc=Qc||dU(t),Qc}/**
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
 */const fU=new bu(5e3,15e3),pU="__/auth/iframe",mU="emulator/auth/iframe",gU={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yU=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vU(t){const e=t.config;N(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mv(e,mU):`https://${t.config.authDomain}/${pU}`,r={apiKey:e.apiKey,appName:t.name,v:Bs},i=yU.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ua(r).slice(1)}`}async function wU(t){const e=await hU(t),n=tt().gapi;return N(n,t,"internal-error"),e.open({where:document.body,url:vU(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gU,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ct(t,"network-request-failed"),a=tt().setTimeout(()=>{s(o)},fU.get());function l(){tt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const IU={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_U=500,EU=600,SU="_blank",TU="http://localhost";class JI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kU(t,e,n,r=_U,i=EU){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},IU),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Fe().toLowerCase();n&&(a=GT(u)?SU:n),WT(u)&&(e=e||TU,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[p,y])=>`${h}${p}=${y},`,"");if(tF(u)&&a!=="_self")return CU(e||"",a),new JI(null);const d=window.open(e||"",a,c);N(d,t,"popup-blocked");try{d.focus()}catch{}return new JI(d)}function CU(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const bU="__/auth/handler",AU="emulator/auth/handler";function og(t,e,n,r,i,s){N(t.config.authDomain,t,"auth-domain-config-required"),N(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Bs,eventId:i};if(e instanceof Br){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hL(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof fa){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${xU(t)}?${ua(a).slice(1)}`}function xU({config:t}){return t.emulator?mv(t,AU):`https://${t.authDomain}/${bU}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp="webStorageSupport";class NU{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ts,this._completeRedirectFn=af,this._overrideRedirectResult=Cv}async _openPopup(e,n,r,i){var s;Xn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=og(e,n,r,Kl(),i);return kU(e,o,xu())}async _openRedirect(e,n,r,i){return await this._originValidation(e),c2(og(e,n,r,Kl(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Xn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await wU(e),r=new Ck(e);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rp,{type:Rp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Rp];o!==void 0&&n(!!o),Nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lU(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return JT()||gv()||da()}}const DU=NU;class PU{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return or("unexpected MultiFactorSessionType")}}}class bv extends PU{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new bv(e)}_finalizeEnroll(e,n,r){return n2(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return I2(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class xk{constructor(){}static assertion(e){return bv._fromCredential(e)}}xk.FACTOR_ID="phone";var ZI="@firebase/auth",e1="0.21.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RU{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OU(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $U(t){Ti(new mr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{N(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),N(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ZT(t)},c=new sF(a,l,u);return MM(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ti(new mr("auth-internal",e=>{const n=ht(e.getProvider("auth").getImmediate());return(r=>new RU(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dr(ZI,e1,OU(t)),dr(ZI,e1,"esm2017")}/**
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
 */const LU=5*60;nL("authIdTokenMaxAge");$U("Browser");/**
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
 */function Cs(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MU=2e3;async function FU(t,e,n){var r;const{BuildInfo:i}=Cs();Xn(e.sessionId,"AuthEvent did not contain a session ID");const s=await zU(e.sessionId),o={};return da()?o.ibi=i.packageName:Au()?o.apn=i.packageName:Nt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,og(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function UU(t){const{BuildInfo:e}=Cs(),n={};da()?n.iosBundleId=e.packageName:Au()?n.androidPackageName=e.packageName:Nt(t,"operation-not-supported-in-this-environment"),await Ak(t,n)}function VU(t){const{cordova:e}=Cs();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,eF()?"_blank":"_system","location=yes"),n(i)})})}async function BU(t,e,n){const{cordova:r}=Cs();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var d;s();const h=(d=r.plugins.browsertab)===null||d===void 0?void 0:d.close;typeof h=="function"&&h(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(Ct(t,"redirect-cancelled-by-user"))},MU))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),Au()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function jU(t){var e,n,r,i,s,o,a,l,u,c;const d=Cs();N(typeof((e=d==null?void 0:d.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),N(typeof((n=d==null?void 0:d.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),N(typeof((s=(i=(r=d==null?void 0:d.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),N(typeof((l=(a=(o=d==null?void 0:d.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),N(typeof((c=(u=d==null?void 0:d.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function zU(t){const e=qU(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function qU(t){if(Xn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HU=20;class KU extends Ck{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function WU(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:YU(),postBody:null,tenantId:t.tenantId,error:Ct(t,"no-auth-event")}}function GU(t,e){return ag()._set(lg(t),e)}async function t1(t){const e=await ag()._get(lg(t));return e&&await ag()._remove(lg(t)),e}function QU(t,e){var n,r;const i=JU(e);if(i.includes("/__/auth/callback")){const s=Yc(i),o=s.firebaseError?XU(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?Ct(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function YU(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<HU;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function ag(){return In(_v)}function lg(t){return hs("authEvent",t.config.apiKey,t.name)}function XU(t){try{return JSON.parse(t)}catch{return null}}function JU(t){const e=Yc(t),n=e.link?decodeURIComponent(e.link):void 0,r=Yc(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Yc(i).link||i||r||n||t}function Yc(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return go(n.join("?"))}/**
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
 */const ZU=500;class eV{constructor(){this._redirectPersistence=Ts,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=af,this._overrideRedirectResult=Cv}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new KU(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Nt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){jU(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),Y2(),await this._originValidation(e);const o=WU(e,r,i);await GU(e,o);const a=await FU(e,o,n),l=await VU(a);return BU(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=UU(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Cs(),o=setTimeout(async()=>{await t1(e),n.onEvent(n1())},ZU),a=async c=>{clearTimeout(o);const d=await t1(e);let h=null;d&&(c!=null&&c.url)&&(h=QU(d,c.url)),n.onEvent(h||n1())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;Cs().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(d){console.error(d)}}}}const tV=eV;function n1(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ct("no-auth-event")}}/**
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
 */function nV(t,e){ht(t)._logFramework(e)}var rV="@firebase/auth-compat",iV="0.3.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sV=1e3;function pl(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function oV(){return pl()==="http:"||pl()==="https:"}function Nk(t=Fe()){return!!((pl()==="file:"||pl()==="ionic:"||pl()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function aV(){return lv()||av()}function lV(){return CT()&&(document==null?void 0:document.documentMode)===11}function uV(t=Fe()){return/Edge\/\d+/.test(t)}function cV(t=Fe()){return lV()||uV(t)}function Dk(){try{const t=self.localStorage,e=xu();if(t)return t.setItem(e,"1"),t.removeItem(e),cV()?zl():!0}catch{return Av()&&zl()}return!1}function Av(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Op(){return(oV()||kT()||Nk())&&!aV()&&Dk()&&!Av()}function Pk(){return Nk()&&typeof document<"u"}async function dV(){return Pk()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},sV);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function hV(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn={LOCAL:"local",NONE:"none",SESSION:"session"},$a=N,Rk="persistence";function fV(t,e){if($a(Object.values(vn).includes(e),t,"invalid-persistence-type"),lv()){$a(e!==vn.SESSION,t,"unsupported-persistence-type");return}if(av()){$a(e===vn.NONE,t,"unsupported-persistence-type");return}if(Av()){$a(e===vn.NONE||e===vn.LOCAL&&zl(),t,"unsupported-persistence-type");return}$a(e===vn.NONE||Dk(),t,"unsupported-persistence-type")}async function ug(t){await t._initializationPromise;const e=Ok(),n=hs(Rk,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function pV(t,e){const n=Ok();if(!n)return[];const r=hs(Rk,t,e);switch(n.getItem(r)){case vn.NONE:return[Bo];case vn.LOCAL:return[Yl,Ts];case vn.SESSION:return[Ts];default:return[]}}function Ok(){var t;try{return((t=hV())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mV=N;class oi{constructor(){this.browserResolver=In(DU),this.cordovaResolver=In(tV),this.underlyingResolver=null,this._redirectPersistence=Ts,this._completeRedirectFn=af,this._overrideRedirectResult=Cv}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Pk()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return mV(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await dV();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $k(t){return t.unwrap()}function gV(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yV(t){return Lk(t)}function vV(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new wV(t,e2(t,e))}else if(r){const i=Lk(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function Lk(t){const{_tokenResponse:e}=t instanceof Xt?t.customData:t;if(!e)return null;if(!(t instanceof Xt)&&"temporaryProof"in e&&"phoneNumber"in e)return ks.credentialFromResult(t);const n=e.providerId;if(!n||n===Oa.PASSWORD)return null;let r;switch(n){case Oa.GOOGLE:r=nr;break;case Oa.FACEBOOK:r=tr;break;case Oa.GITHUB:r=rr;break;case Oa.TWITTER:r=ir;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?jo._create(n,a):gr._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new bo(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof Xt?r.credentialFromError(t):r.credentialFromResult(t)}function nn(t,e){return e.catch(n=>{throw n instanceof Xt&&vV(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:yV(n),additionalUserInfo:ZF(n),user:Cr.getOrCreate(i)}})}async function cg(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>nn(t,n.confirm(r))}}class wV{constructor(e,n){this.resolver=n,this.auth=gV(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return nn($k(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e){this._delegate=e,this.multiFactor=i2(e)}static getOrCreate(e){return Cr.USER_MAP.has(e)||Cr.USER_MAP.set(e,new Cr(e)),Cr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return nn(this.auth,lk(this._delegate,e))}async linkWithPhoneNumber(e,n){return cg(this.auth,M2(this._delegate,e,n))}async linkWithPopup(e){return nn(this.auth,K2(this._delegate,e,oi))}async linkWithRedirect(e){return await ug(ht(this.auth)),tU(this._delegate,e,oi)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return nn(this.auth,uk(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return cg(this.auth,F2(this._delegate,e,n))}reauthenticateWithPopup(e){return nn(this.auth,H2(this._delegate,e,oi))}async reauthenticateWithRedirect(e){return await ug(ht(this.auth)),Z2(this._delegate,e,oi)}sendEmailVerification(e){return jF(this._delegate,e)}async unlink(e){return await AF(this._delegate,e),this}updateEmail(e){return KF(this._delegate,e)}updatePassword(e){return WF(this._delegate,e)}updatePhoneNumber(e){return U2(this._delegate,e)}updateProfile(e){return HF(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return zF(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Cr.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La=N;class dg{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;La(r,"invalid-api-key",{appName:e.name}),La(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?oi:void 0;this._delegate=n.initialize({options:{persistence:IV(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap($M),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Cr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){oF(this._delegate,e,n)}applyActionCode(e){return RF(this._delegate,e)}checkActionCode(e){return ck(this._delegate,e)}confirmPasswordReset(e,n){return PF(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return nn(this._delegate,$F(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return BF(this._delegate,e)}isSignInWithEmailLink(e){return FF(this._delegate,e)}async getRedirectResult(){La(Op(),this._delegate,"operation-not-supported-in-this-environment");const e=await rU(this._delegate,oi);return e?nn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){nV(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=r1(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=r1(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return MF(this._delegate,e,n)}sendPasswordResetEmail(e,n){return DF(this._delegate,e,n||void 0)}async setPersistence(e){fV(this._delegate,e);let n;switch(e){case vn.SESSION:n=Ts;break;case vn.LOCAL:n=await In(Yl)._isAvailable()?Yl:_v;break;case vn.NONE:n=Bo;break;default:return Nt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return nn(this._delegate,bF(this._delegate))}signInWithCredential(e){return nn(this._delegate,ef(this._delegate,e))}signInWithCustomToken(e){return nn(this._delegate,NF(this._delegate,e))}signInWithEmailAndPassword(e,n){return nn(this._delegate,LF(this._delegate,e,n))}signInWithEmailLink(e,n){return nn(this._delegate,UF(this._delegate,e,n))}signInWithPhoneNumber(e,n){return cg(this._delegate,L2(this._delegate,e,n))}async signInWithPopup(e){return La(Op(),this._delegate,"operation-not-supported-in-this-environment"),nn(this._delegate,q2(this._delegate,e,oi))}async signInWithRedirect(e){return La(Op(),this._delegate,"operation-not-supported-in-this-environment"),await ug(this._delegate),X2(this._delegate,e,oi)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return OF(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}dg.Persistence=vn;function r1(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Cr.getOrCreate(o)),error:e,complete:n}}function IV(t,e){const n=pV(t,e);if(typeof self<"u"&&!n.includes(Yl)&&n.push(Yl),typeof window<"u")for(const r of[_v,Ts])n.includes(r)||n.push(r);return n.includes(Bo)||n.push(Bo),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(){this.providerId="phone",this._delegate=new ks($k(ki.auth()))}static credential(e,n){return ks.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}xv.PHONE_SIGN_IN_METHOD=ks.PHONE_SIGN_IN_METHOD;xv.PROVIDER_ID=ks.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _V=N;class EV{constructor(e,n,r=ki.app()){var i;_V((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new O2(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SV="auth-compat";function TV(t){t.INTERNAL.registerComponent(new mr(SV,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new dg(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ys.EMAIL_SIGNIN,PASSWORD_RESET:Ys.PASSWORD_RESET,RECOVER_EMAIL:Ys.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ys.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ys.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ys.VERIFY_EMAIL}},EmailAuthProvider:Mi,FacebookAuthProvider:tr,GithubAuthProvider:rr,GoogleAuthProvider:nr,OAuthProvider:bo,SAMLAuthProvider:Ld,PhoneAuthProvider:xv,PhoneMultiFactorGenerator:xk,RecaptchaVerifier:EV,TwitterAuthProvider:ir,Auth:dg,AuthCredential:ha,Error:Xt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(rV,iV)}TV(ki);var kV=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},j,Nv=Nv||{},X=kV||self;function Vd(){}function lf(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Du(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function CV(t){return Object.prototype.hasOwnProperty.call(t,$p)&&t[$p]||(t[$p]=++bV)}var $p="closure_uid_"+(1e9*Math.random()>>>0),bV=0;function AV(t,e,n){return t.call.apply(t.bind,arguments)}function xV(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Vt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Vt=AV:Vt=xV,Vt.apply(null,arguments)}function Sc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Pt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Fi(){this.s=this.s,this.o=this.o}var NV=0;Fi.prototype.s=!1;Fi.prototype.na=function(){!this.s&&(this.s=!0,this.M(),NV!=0)&&CV(this)};Fi.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Mk=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Dv(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function i1(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(lf(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Bt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Bt.prototype.h=function(){this.defaultPrevented=!0};var DV=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{X.addEventListener("test",Vd,e),X.removeEventListener("test",Vd,e)}catch{}return t}();function Bd(t){return/^[\s\xa0]*$/.test(t)}var s1=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Lp(t,e){return t<e?-1:t>e?1:0}function uf(){var t=X.navigator;return t&&(t=t.userAgent)?t:""}function sr(t){return uf().indexOf(t)!=-1}function Pv(t){return Pv[" "](t),t}Pv[" "]=Vd;function PV(t){var e=$V;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var RV=sr("Opera"),zo=sr("Trident")||sr("MSIE"),Fk=sr("Edge"),hg=Fk||zo,Uk=sr("Gecko")&&!(uf().toLowerCase().indexOf("webkit")!=-1&&!sr("Edge"))&&!(sr("Trident")||sr("MSIE"))&&!sr("Edge"),OV=uf().toLowerCase().indexOf("webkit")!=-1&&!sr("Edge");function Vk(){var t=X.document;return t?t.documentMode:void 0}var jd;e:{var Mp="",Fp=function(){var t=uf();if(Uk)return/rv:([^\);]+)(\)|;)/.exec(t);if(Fk)return/Edge\/([\d\.]+)/.exec(t);if(zo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(OV)return/WebKit\/(\S+)/.exec(t);if(RV)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Fp&&(Mp=Fp?Fp[1]:""),zo){var Up=Vk();if(Up!=null&&Up>parseFloat(Mp)){jd=String(Up);break e}}jd=Mp}var $V={};function LV(){return PV(function(){let t=0;const e=s1(String(jd)).split("."),n=s1("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Lp(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Lp(i[2].length==0,s[2].length==0)||Lp(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var fg;if(X.document&&zo){var o1=Vk();fg=o1||parseInt(jd,10)||void 0}else fg=void 0;var MV=fg;function Xl(t,e){if(Bt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Uk){e:{try{Pv(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:FV[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Xl.X.h.call(this)}}Pt(Xl,Bt);var FV={2:"touch",3:"pen",4:"mouse"};Xl.prototype.h=function(){Xl.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Pu="closure_listenable_"+(1e6*Math.random()|0),UV=0;function VV(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++UV,this.ba=this.ea=!1}function cf(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Rv(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Bk(t){const e={};for(const n in t)e[n]=t[n];return e}const a1="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jk(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<a1.length;s++)n=a1[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function df(t){this.src=t,this.g={},this.h=0}df.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=mg(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new VV(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function pg(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Mk(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(cf(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function mg(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var Ov="closure_lm_"+(1e6*Math.random()|0),Vp={};function zk(t,e,n,r,i){if(r&&r.once)return Hk(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)zk(t,e[s],n,r,i);return null}return n=Mv(n),t&&t[Pu]?t.N(e,n,Du(r)?!!r.capture:!!r,i):qk(t,e,n,!1,r,i)}function qk(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Du(i)?!!i.capture:!!i,a=Lv(t);if(a||(t[Ov]=a=new df(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=BV(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)DV||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Wk(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function BV(){function t(n){return e.call(t.src,t.listener,n)}const e=jV;return t}function Hk(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Hk(t,e[s],n,r,i);return null}return n=Mv(n),t&&t[Pu]?t.O(e,n,Du(r)?!!r.capture:!!r,i):qk(t,e,n,!0,r,i)}function Kk(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Kk(t,e[s],n,r,i);else r=Du(r)?!!r.capture:!!r,n=Mv(n),t&&t[Pu]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=mg(s,n,r,i),-1<n&&(cf(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Lv(t))&&(e=t.g[e.toString()],t=-1,e&&(t=mg(e,n,r,i)),(n=-1<t?e[t]:null)&&$v(n))}function $v(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Pu])pg(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Wk(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Lv(e))?(pg(n,t),n.h==0&&(n.src=null,e[Ov]=null)):cf(t)}}}function Wk(t){return t in Vp?Vp[t]:Vp[t]="on"+t}function jV(t,e){if(t.ba)t=!0;else{e=new Xl(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&$v(t),t=n.call(r,e)}return t}function Lv(t){return t=t[Ov],t instanceof df?t:null}var Bp="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mv(t){return typeof t=="function"?t:(t[Bp]||(t[Bp]=function(e){return t.handleEvent(e)}),t[Bp])}function ft(){Fi.call(this),this.i=new df(this),this.P=this,this.I=null}Pt(ft,Fi);ft.prototype[Pu]=!0;ft.prototype.removeEventListener=function(t,e,n,r){Kk(this,t,e,n,r)};function bt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Bt(e,t);else if(e instanceof Bt)e.target=e.target||t;else{var i=e;e=new Bt(r,t),jk(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Tc(o,r,!0,e)&&i}if(o=e.g=t,i=Tc(o,r,!0,e)&&i,i=Tc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Tc(o,r,!1,e)&&i}ft.prototype.M=function(){if(ft.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)cf(n[r]);delete t.g[e],t.h--}}this.I=null};ft.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ft.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Tc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&pg(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Fv=X.JSON.stringify;function zV(){var t=Yk;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class qV{constructor(){this.h=this.g=null}add(e,n){const r=Gk.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Gk=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new HV,t=>t.reset());class HV{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function KV(t){X.setTimeout(()=>{throw t},0)}function Qk(t,e){gg||WV(),yg||(gg(),yg=!0),Yk.add(t,e)}var gg;function WV(){var t=X.Promise.resolve(void 0);gg=function(){t.then(GV)}}var yg=!1,Yk=new qV;function GV(){for(var t;t=zV();){try{t.h.call(t.g)}catch(n){KV(n)}var e=Gk;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}yg=!1}function hf(t,e){ft.call(this),this.h=t||1,this.g=e||X,this.j=Vt(this.lb,this),this.l=Date.now()}Pt(hf,ft);j=hf.prototype;j.ca=!1;j.R=null;j.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),bt(this,"tick"),this.ca&&(Uv(this),this.start()))}};j.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Uv(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}j.M=function(){hf.X.M.call(this),Uv(this),delete this.g};function Vv(t,e,n){if(typeof t=="function")n&&(t=Vt(t,n));else if(t&&typeof t.handleEvent=="function")t=Vt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:X.setTimeout(t,e||0)}function Xk(t){t.g=Vv(()=>{t.g=null,t.i&&(t.i=!1,Xk(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class QV extends Fi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Xk(this)}M(){super.M(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Jl(t){Fi.call(this),this.h=t,this.g={}}Pt(Jl,Fi);var l1=[];function Jk(t,e,n,r){Array.isArray(n)||(n&&(l1[0]=n.toString()),n=l1);for(var i=0;i<n.length;i++){var s=zk(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Zk(t){Rv(t.g,function(e,n){this.g.hasOwnProperty(n)&&$v(e)},t),t.g={}}Jl.prototype.M=function(){Jl.X.M.call(this),Zk(this)};Jl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ff(){this.g=!0}ff.prototype.Aa=function(){this.g=!1};function YV(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function XV(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function yo(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ZV(t,n)+(r?" "+r:"")})}function JV(t,e){t.info(function(){return"TIMEOUT: "+e})}ff.prototype.info=function(){};function ZV(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Fv(n)}catch{return e}}var zs={},u1=null;function pf(){return u1=u1||new ft}zs.Pa="serverreachability";function eC(t){Bt.call(this,zs.Pa,t)}Pt(eC,Bt);function Zl(t){const e=pf();bt(e,new eC(e))}zs.STAT_EVENT="statevent";function tC(t,e){Bt.call(this,zs.STAT_EVENT,t),this.stat=e}Pt(tC,Bt);function Qt(t){const e=pf();bt(e,new tC(e,t))}zs.Qa="timingevent";function nC(t,e){Bt.call(this,zs.Qa,t),this.size=e}Pt(nC,Bt);function Ru(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){t()},e)}var mf={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},rC={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Bv(){}Bv.prototype.h=null;function c1(t){return t.h||(t.h=t.i())}function iC(){}var Ou={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function jv(){Bt.call(this,"d")}Pt(jv,Bt);function zv(){Bt.call(this,"c")}Pt(zv,Bt);var vg;function gf(){}Pt(gf,Bv);gf.prototype.g=function(){return new XMLHttpRequest};gf.prototype.i=function(){return{}};vg=new gf;function $u(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Jl(this),this.O=eB,t=hg?125:void 0,this.T=new hf(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new sC}function sC(){this.i=null,this.g="",this.h=!1}var eB=45e3,wg={},zd={};j=$u.prototype;j.setTimeout=function(t){this.O=t};function Ig(t,e,n){t.K=1,t.v=vf(Mr(e)),t.s=n,t.P=!0,oC(t,null)}function oC(t,e){t.F=Date.now(),Lu(t),t.A=Mr(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),pC(n.i,"t",r),t.C=0,n=t.l.H,t.h=new sC,t.g=$C(t.l,n?e:null,!t.s),0<t.N&&(t.L=new QV(Vt(t.La,t,t.g),t.N)),Jk(t.S,t.g,"readystatechange",t.ib),e=t.H?Bk(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Zl(),YV(t.j,t.u,t.A,t.m,t.U,t.s)}j.ib=function(t){t=t.target;const e=this.L;e&&br(t)==3?e.l():this.La(t)};j.La=function(t){try{if(t==this.g)e:{const c=br(this.g);var e=this.g.Ea();const d=this.g.aa();if(!(3>c)&&(c!=3||hg||this.g&&(this.h.h||this.g.fa()||p1(this.g)))){this.I||c!=4||e==7||(e==8||0>=d?Zl(3):Zl(2)),yf(this);var n=this.g.aa();this.Y=n;t:if(aC(this)){var r=p1(this.g);t="";var i=r.length,s=br(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ss(this),ml(this);var o="";break t}this.h.i=new X.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,XV(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Bd(a)){var u=a;break t}}u=null}if(n=u)yo(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,_g(this,n);else{this.i=!1,this.o=3,Qt(12),ss(this),ml(this);break e}}this.P?(lC(this,c,o),hg&&this.i&&c==3&&(Jk(this.S,this.T,"tick",this.hb),this.T.start())):(yo(this.j,this.m,o,null),_g(this,o)),c==4&&ss(this),this.i&&!this.I&&(c==4?DC(this.l,this):(this.i=!1,Lu(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Qt(12)):(this.o=0,Qt(13)),ss(this),ml(this)}}}catch{}finally{}};function aC(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function lC(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=tB(t,n),i==zd){e==4&&(t.o=4,Qt(14),r=!1),yo(t.j,t.m,null,"[Incomplete Response]");break}else if(i==wg){t.o=4,Qt(15),yo(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else yo(t.j,t.m,i,null),_g(t,i);aC(t)&&i!=zd&&i!=wg&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Qt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Yv(e),e.K=!0,Qt(11))):(yo(t.j,t.m,n,"[Invalid Chunked Response]"),ss(t),ml(t))}j.hb=function(){if(this.g){var t=br(this.g),e=this.g.fa();this.C<e.length&&(yf(this),lC(this,t,e),this.i&&t!=4&&Lu(this))}};function tB(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?zd:(n=Number(e.substring(n,r)),isNaN(n)?wg:(r+=1,r+n>e.length?zd:(e=e.substr(r,n),t.C=r+n,e)))}j.cancel=function(){this.I=!0,ss(this)};function Lu(t){t.V=Date.now()+t.O,uC(t,t.O)}function uC(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ru(Vt(t.gb,t),e)}function yf(t){t.B&&(X.clearTimeout(t.B),t.B=null)}j.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(JV(this.j,this.A),this.K!=2&&(Zl(),Qt(17)),ss(this),this.o=2,ml(this)):uC(this,this.V-t)};function ml(t){t.l.G==0||t.I||DC(t.l,t)}function ss(t){yf(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Uv(t.T),Zk(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function _g(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Eg(n.h,t))){if(!t.J&&Eg(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Kd(n),_f(n);else break e;Qv(n),Qt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ru(Vt(n.cb,n),6e3));if(1>=yC(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else os(n,11)}else if((t.J||n.g==t)&&Kd(n),!Bd(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const d=u[4];d!=null&&(n.Ca=d,n.j.info("SVER="+n.Ca));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(qv(s,s.h),s.h=null))}if(r.D){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,De(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=OC(r,r.H?r.ka:null,r.V),o.J){vC(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(yf(a),Lu(a)),r.g=o}else xC(r);0<n.i.length&&Ef(n)}else u[0]!="stop"&&u[0]!="close"||os(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?os(n,7):Gv(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Zl(4)}catch{}}function nB(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(lf(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function rB(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(lf(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function cC(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(lf(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=rB(t),r=nB(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var dC=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function iB(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ps(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ps){this.h=e!==void 0?e:t.h,qd(this,t.j),this.s=t.s,this.g=t.g,Hd(this,t.m),this.l=t.l,e=t.i;var n=new eu;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),d1(this,n),this.o=t.o}else t&&(n=String(t).match(dC))?(this.h=!!e,qd(this,n[1]||"",!0),this.s=Ya(n[2]||""),this.g=Ya(n[3]||"",!0),Hd(this,n[4]),this.l=Ya(n[5]||"",!0),d1(this,n[6]||"",!0),this.o=Ya(n[7]||"")):(this.h=!!e,this.i=new eu(null,this.h))}ps.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Xa(e,h1,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Xa(e,h1,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Xa(n,n.charAt(0)=="/"?aB:oB,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Xa(n,uB)),t.join("")};function Mr(t){return new ps(t)}function qd(t,e,n){t.j=n?Ya(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Hd(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function d1(t,e,n){e instanceof eu?(t.i=e,cB(t.i,t.h)):(n||(e=Xa(e,lB)),t.i=new eu(e,t.h))}function De(t,e,n){t.i.set(e,n)}function vf(t){return De(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ya(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Xa(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,sB),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function sB(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var h1=/[#\/\?@]/g,oB=/[#\?:]/g,aB=/[#\?]/g,lB=/[#\?@]/g,uB=/#/g;function eu(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ui(t){t.g||(t.g=new Map,t.h=0,t.i&&iB(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}j=eu.prototype;j.add=function(t,e){Ui(this),this.i=null,t=pa(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function hC(t,e){Ui(t),e=pa(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function fC(t,e){return Ui(t),e=pa(t,e),t.g.has(e)}j.forEach=function(t,e){Ui(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};j.oa=function(){Ui(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};j.W=function(t){Ui(this);let e=[];if(typeof t=="string")fC(this,t)&&(e=e.concat(this.g.get(pa(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};j.set=function(t,e){return Ui(this),this.i=null,t=pa(this,t),fC(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};j.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function pC(t,e,n){hC(t,e),0<n.length&&(t.i=null,t.g.set(pa(t,e),Dv(n)),t.h+=n.length)}j.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function pa(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function cB(t,e){e&&!t.j&&(Ui(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(hC(this,r),pC(this,i,n))},t)),t.j=e}var dB=class{constructor(e,n){this.h=e,this.g=n}};function mC(t){this.l=t||hB,X.PerformanceNavigationTiming?(t=X.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(X.g&&X.g.Ga&&X.g.Ga()&&X.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var hB=10;function gC(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function yC(t){return t.h?1:t.g?t.g.size:0}function Eg(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function qv(t,e){t.g?t.g.add(e):t.h=e}function vC(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}mC.prototype.cancel=function(){if(this.i=wC(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function wC(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Dv(t.i)}function Hv(){}Hv.prototype.stringify=function(t){return X.JSON.stringify(t,void 0)};Hv.prototype.parse=function(t){return X.JSON.parse(t,void 0)};function fB(){this.g=new Hv}function pB(t,e,n){const r=n||"";try{cC(t,function(i,s){let o=i;Du(i)&&(o=Fv(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function mB(t,e){const n=new ff;if(X.Image){const r=new Image;r.onload=Sc(kc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Sc(kc,n,r,"TestLoadImage: error",!1,e),r.onabort=Sc(kc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Sc(kc,n,r,"TestLoadImage: timeout",!1,e),X.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function kc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Mu(t){this.l=t.ac||null,this.j=t.jb||!1}Pt(Mu,Bv);Mu.prototype.g=function(){return new wf(this.l,this.j)};Mu.prototype.i=function(t){return function(){return t}}({});function wf(t,e){ft.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Kv,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Pt(wf,ft);var Kv=0;j=wf.prototype;j.open=function(t,e){if(this.readyState!=Kv)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,tu(this)};j.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||X).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};j.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fu(this)),this.readyState=Kv};j.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,tu(this)),this.g&&(this.readyState=3,tu(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof X.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;IC(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function IC(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}j.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fu(this):tu(this),this.readyState==3&&IC(this)}};j.Va=function(t){this.g&&(this.response=this.responseText=t,Fu(this))};j.Ua=function(t){this.g&&(this.response=t,Fu(this))};j.ga=function(){this.g&&Fu(this)};function Fu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,tu(t)}j.setRequestHeader=function(t,e){this.v.append(t,e)};j.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};j.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function tu(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(wf.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var gB=X.JSON.parse;function je(t){ft.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=_C,this.K=this.L=!1}Pt(je,ft);var _C="",yB=/^https?$/i,vB=["POST","PUT"];j=je.prototype;j.Ka=function(t){this.L=t};j.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():vg.g(),this.C=this.u?c1(this.u):c1(vg),this.g.onreadystatechange=Vt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){f1(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=X.FormData&&t instanceof X.FormData,!(0<=Mk(vB,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{TC(this),0<this.B&&((this.K=wB(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Vt(this.qa,this)):this.A=Vv(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){f1(this,s)}};function wB(t){return zo&&LV()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}j.qa=function(){typeof Nv<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,bt(this,"timeout"),this.abort(8))};function f1(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,EC(t),If(t)}function EC(t){t.D||(t.D=!0,bt(t,"complete"),bt(t,"error"))}j.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,bt(this,"complete"),bt(this,"abort"),If(this))};j.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),If(this,!0)),je.X.M.call(this)};j.Ha=function(){this.s||(this.F||this.v||this.l?SC(this):this.fb())};j.fb=function(){SC(this)};function SC(t){if(t.h&&typeof Nv<"u"&&(!t.C[1]||br(t)!=4||t.aa()!=2)){if(t.v&&br(t)==4)Vv(t.Ha,0,t);else if(bt(t,"readystatechange"),br(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(dC)[1]||null;if(!i&&X.self&&X.self.location){var s=X.self.location.protocol;i=s.substr(0,s.length-1)}r=!yB.test(i?i.toLowerCase():"")}n=r}if(n)bt(t,"complete"),bt(t,"success");else{t.m=6;try{var o=2<br(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",EC(t)}}finally{If(t)}}}}function If(t,e){if(t.g){TC(t);const n=t.g,r=t.C[0]?Vd:null;t.g=null,t.C=null,e||bt(t,"ready");try{n.onreadystatechange=r}catch{}}}function TC(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(X.clearTimeout(t.A),t.A=null)}function br(t){return t.g?t.g.readyState:0}j.aa=function(){try{return 2<br(this)?this.g.status:-1}catch{return-1}};j.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};j.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),gB(e)}};function p1(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case _C:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}j.Ea=function(){return this.m};j.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function kC(t){let e="";return Rv(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Wv(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=kC(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):De(t,e,n))}function Ma(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function CC(t){this.Ca=0,this.i=[],this.j=new ff,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ma("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ma("baseRetryDelayMs",5e3,t),this.bb=Ma("retryDelaySeedMs",1e4,t),this.$a=Ma("forwardChannelMaxRetries",2,t),this.ta=Ma("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new mC(t&&t.concurrentRequestLimit),this.Fa=new fB,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}j=CC.prototype;j.ma=8;j.G=1;function Gv(t){if(bC(t),t.G==3){var e=t.U++,n=Mr(t.F);De(n,"SID",t.I),De(n,"RID",e),De(n,"TYPE","terminate"),Uu(t,n),e=new $u(t,t.j,e,void 0),e.K=2,e.v=vf(Mr(n)),n=!1,X.navigator&&X.navigator.sendBeacon&&(n=X.navigator.sendBeacon(e.v.toString(),"")),!n&&X.Image&&(new Image().src=e.v,n=!0),n||(e.g=$C(e.l,null),e.g.da(e.v)),e.F=Date.now(),Lu(e)}RC(t)}function _f(t){t.g&&(Yv(t),t.g.cancel(),t.g=null)}function bC(t){_f(t),t.u&&(X.clearTimeout(t.u),t.u=null),Kd(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&X.clearTimeout(t.m),t.m=null)}function Ef(t){gC(t.h)||t.m||(t.m=!0,Qk(t.Ja,t),t.C=0)}function IB(t,e){return yC(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Ru(Vt(t.Ja,t,e),PC(t,t.C)),t.C++,!0)}j.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new $u(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=Bk(s),jk(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=AC(this,i,e),n=Mr(this.F),De(n,"RID",t),De(n,"CVER",22),this.D&&De(n,"X-HTTP-Session-Id",this.D),Uu(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(kC(s)))+"&"+e:this.o&&Wv(n,this.o,s)),qv(this.h,i),this.Ya&&De(n,"TYPE","init"),this.O?(De(n,"$req",e),De(n,"SID","null"),i.Z=!0,Ig(i,n,null)):Ig(i,n,e),this.G=2}}else this.G==3&&(t?m1(this,t):this.i.length==0||gC(this.h)||m1(this))};function m1(t,e){var n;e?n=e.m:n=t.U++;const r=Mr(t.F);De(r,"SID",t.I),De(r,"RID",n),De(r,"AID",t.T),Uu(t,r),t.o&&t.s&&Wv(r,t.o,t.s),n=new $u(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=AC(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),qv(t.h,n),Ig(n,r,e)}function Uu(t,e){t.ia&&Rv(t.ia,function(n,r){De(e,r,n)}),t.l&&cC({},function(n,r){De(e,r,n)})}function AC(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Vt(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{pB(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function xC(t){t.g||t.u||(t.Z=1,Qk(t.Ia,t),t.A=0)}function Qv(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ru(Vt(t.Ia,t),PC(t,t.A)),t.A++,!0)}j.Ia=function(){if(this.u=null,NC(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ru(Vt(this.eb,this),t)}};j.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Qt(10),_f(this),NC(this))};function Yv(t){t.B!=null&&(X.clearTimeout(t.B),t.B=null)}function NC(t){t.g=new $u(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Mr(t.sa);De(e,"RID","rpc"),De(e,"SID",t.I),De(e,"CI",t.L?"0":"1"),De(e,"AID",t.T),De(e,"TYPE","xmlhttp"),Uu(t,e),t.o&&t.s&&Wv(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=vf(Mr(e)),n.s=null,n.P=!0,oC(n,t)}j.cb=function(){this.v!=null&&(this.v=null,_f(this),Qv(this),Qt(19))};function Kd(t){t.v!=null&&(X.clearTimeout(t.v),t.v=null)}function DC(t,e){var n=null;if(t.g==e){Kd(t),Yv(t),t.g=null;var r=2}else if(Eg(t.h,e))n=e.D,vC(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=pf(),bt(r,new nC(r,n)),Ef(t)}else xC(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&IB(t,e)||r==2&&Qv(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:os(t,5);break;case 4:os(t,10);break;case 3:os(t,6);break;default:os(t,2)}}}function PC(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function os(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Vt(t.kb,t);n||(n=new ps("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||qd(n,"https"),vf(n)),mB(n.toString(),r)}else Qt(2);t.G=0,t.l&&t.l.va(e),RC(t),bC(t)}j.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Qt(2)):(this.j.info("Failed to ping google.com"),Qt(1))};function RC(t){if(t.G=0,t.la=[],t.l){const e=wC(t.h);(e.length!=0||t.i.length!=0)&&(i1(t.la,e),i1(t.la,t.i),t.h.i.length=0,Dv(t.i),t.i.length=0),t.l.ua()}}function OC(t,e,n){var r=n instanceof ps?Mr(n):new ps(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Hd(r,r.m);else{var i=X.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ps(null,void 0);r&&qd(s,r),e&&(s.g=e),i&&Hd(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&De(r,n,e),De(r,"VER",t.ma),Uu(t,r),r}function $C(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new je(new Mu({jb:!0})):new je(t.ra),e.Ka(t.H),e}function LC(){}j=LC.prototype;j.xa=function(){};j.wa=function(){};j.va=function(){};j.ua=function(){};j.Ra=function(){};function Wd(){if(zo&&!(10<=Number(MV)))throw Error("Environmental error: no available transport.")}Wd.prototype.g=function(t,e){return new kn(t,e)};function kn(t,e){ft.call(this),this.g=new CC(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Bd(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Bd(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ma(this)}Pt(kn,ft);kn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Qt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=OC(t,null,t.V),Ef(t)};kn.prototype.close=function(){Gv(this.g)};kn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Fv(t),t=n);e.i.push(new dB(e.ab++,t)),e.G==3&&Ef(e)};kn.prototype.M=function(){this.g.l=null,delete this.j,Gv(this.g),delete this.g,kn.X.M.call(this)};function MC(t){jv.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Pt(MC,jv);function FC(){zv.call(this),this.status=1}Pt(FC,zv);function ma(t){this.g=t}Pt(ma,LC);ma.prototype.xa=function(){bt(this.g,"a")};ma.prototype.wa=function(t){bt(this.g,new MC(t))};ma.prototype.va=function(t){bt(this.g,new FC)};ma.prototype.ua=function(){bt(this.g,"b")};Wd.prototype.createWebChannel=Wd.prototype.g;kn.prototype.send=kn.prototype.u;kn.prototype.open=kn.prototype.m;kn.prototype.close=kn.prototype.close;mf.NO_ERROR=0;mf.TIMEOUT=8;mf.HTTP_ERROR=6;rC.COMPLETE="complete";iC.EventType=Ou;Ou.OPEN="a";Ou.CLOSE="b";Ou.ERROR="c";Ou.MESSAGE="d";ft.prototype.listen=ft.prototype.N;je.prototype.listenOnce=je.prototype.O;je.prototype.getLastError=je.prototype.Oa;je.prototype.getLastErrorCode=je.prototype.Ea;je.prototype.getStatus=je.prototype.aa;je.prototype.getResponseJson=je.prototype.Sa;je.prototype.getResponseText=je.prototype.fa;je.prototype.send=je.prototype.da;je.prototype.setWithCredentials=je.prototype.Ka;var _B=function(){return new Wd},EB=function(){return pf()},jp=mf,SB=rC,TB=zs,g1={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},kB=Mu,Cc=iC,CB=je;const y1="@firebase/firestore";/**
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
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
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
 */let ga="9.18.0";/**
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
 */const Ci=new Qh("@firebase/firestore");function Sg(){return Ci.logLevel}function bB(t){Ci.setLogLevel(t)}function b(t,...e){if(Ci.logLevel<=de.DEBUG){const n=e.map(Xv);Ci.debug(`Firestore (${ga}): ${t}`,...n)}}function Ge(t,...e){if(Ci.logLevel<=de.ERROR){const n=e.map(Xv);Ci.error(`Firestore (${ga}): ${t}`,...n)}}function qo(t,...e){if(Ci.logLevel<=de.WARN){const n=e.map(Xv);Ci.warn(`Firestore (${ga}): ${t}`,...n)}}function Xv(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function U(t="Unexpected state"){const e=`FIRESTORE (${ga}) INTERNAL ASSERTION FAILED: `+t;throw Ge(e),new Error(e)}function z(t,e){t||U()}function AB(t,e){t||U()}function M(t,e){return t}/**
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends Xt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class dt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class UC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xB{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class NB{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class DB{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new dt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new dt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new dt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(z(typeof r.accessToken=="string"),new UC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return z(e===null||typeof e=="string"),new lt(e)}}class PB{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(z(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class RB{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new PB(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class OB{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $B{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,b("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(z(typeof n.token=="string"),this.A=n.token,new OB(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LB(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class VC{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=LB(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Z(t,e){return t<e?-1:t>e?1:0}function Ho(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function BC(t){return t+"\0"}/**
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
 */class Re{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new C(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new C(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new C(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new C(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Re(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new Re(0,0))}static max(){return new q(new Re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class nu{constructor(e,n,r){n===void 0?n=0:n>e.length&&U(),r===void 0?r=e.length-n:r>e.length-n&&U(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return nu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof nu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ue extends nu{construct(e,n,r){return new ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new C(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const MB=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends nu{construct(e,n,r){return new Qe(e,n,r)}static isValidIdentifier(e){return MB.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new C(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new C(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new C(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new C(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(n)}static emptyPath(){return new Qe([])}}/**
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
 */class P{constructor(e){this.path=e}static fromPath(e){return new P(ue.fromString(e))}static fromName(e){return new P(ue.fromString(e).popFirst(5))}static empty(){return new P(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new P(new ue(e.slice()))}}/**
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
 */class jC{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Tg(t){return t.fields.find(e=>e.kind===2)}function Qi(t){return t.fields.filter(e=>e.kind!==2)}jC.UNKNOWN_ID=-1;class FB{constructor(e,n){this.fieldPath=e,this.kind=n}}class Gd{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Gd(0,Cn.min())}}function zC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=q.fromTimestamp(r===1e9?new Re(n+1,0):new Re(n,r));return new Cn(i,P.empty(),e)}function qC(t){return new Cn(t.readTime,t.key,-1)}class Cn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Cn(q.min(),P.empty(),-1)}static max(){return new Cn(q.max(),P.empty(),-1)}}function Jv(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=P.comparator(t.documentKey,e.documentKey),n!==0?n:Z(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class KC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Vi(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==HC)throw t;b("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new w((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):w.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):w.reject(n)}static resolve(e){return new w((n,r)=>{n(e)})}static reject(e){return new w((n,r)=>{r(e)})}static waitFor(e){return new w((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=w.resolve(!1);for(const r of e)n=n.next(i=>i?w.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new w((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new w((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class Sf{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.P=new dt,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{n.error?this.P.reject(new gl(e,n.error)):this.P.resolve()},this.transaction.onerror=r=>{const i=Zv(r.target.error);this.P.reject(new gl(e,i))}}static open(e,n,r,i){try{return new Sf(n,e.transaction(i,r))}catch(s){throw new gl(n,s)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(b("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new VB(n)}}class Kn{constructor(e,n,r){this.name=e,this.version=n,this.S=r,Kn.D(Fe())===12.2&&Ge("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return b("SimpleDb","Removing database:",e),Yi(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!zl())return!1;if(Kn.N())return!0;const e=Fe(),n=Kn.D(e),r=0<n&&n<10,i=Kn.k(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static N(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.$)==="YES"}static M(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static k(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(b("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new gl(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new C(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new C(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new gl(e,o))},i.onupgradeneeded=s=>{b("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.F(o,i.transaction,s.oldVersion,this.version).next(()=>{b("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=Sf.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.V(),u)).catch(u=>(a.abort(u),w.reject(u))).toPromise();return l.catch(()=>{}),await a.v,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(b("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class UB{constructor(e){this.q=e,this.U=!1,this.K=null}get isDone(){return this.U}get G(){return this.K}set cursor(e){this.q=e}done(){this.U=!0}j(e){this.K=e}delete(){return Yi(this.q.delete())}}class gl extends C{constructor(e,n){super(E.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Bi(t){return t.name==="IndexedDbTransactionError"}class VB{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(b("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(b("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Yi(r)}add(e){return b("SimpleDb","ADD",this.store.name,e,e),Yi(this.store.add(e))}get(e){return Yi(this.store.get(e)).next(n=>(n===void 0&&(n=null),b("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return b("SimpleDb","DELETE",this.store.name,e),Yi(this.store.delete(e))}count(){return b("SimpleDb","COUNT",this.store.name),Yi(this.store.count())}W(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.H(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new w((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}J(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new w((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}Y(e,n){b("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Z=!1;const i=this.cursor(r);return this.H(i,(s,o,a)=>a.delete())}X(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.H(i,n)}tt(e){const n=this.cursor({});return new w((r,i)=>{n.onerror=s=>{const o=Zv(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}H(e,n){const r=[];return new w((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new UB(a),u=n(a.primaryKey,a.value,l);if(u instanceof w){const c=u.catch(d=>(l.done(),w.reject(d)));r.push(c)}l.isDone?i():l.G===null?a.continue():a.continue(l.G)}}).next(()=>w.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Z?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Yi(t){return new w((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Zv(r.target.error);n(i)}})}let v1=!1;function Zv(t){const e=Kn.D(Fe());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new C("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return v1||(v1=!0,setTimeout(()=>{throw r},0)),r}}return t}class BB{constructor(e,n){this.asyncQueue=e,this.et=n,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){b("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{b("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(n){Bi(n)?b("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Vi(n)}await this.nt(6e4)})}}class jB{constructor(e,n){this.localStore=e,this.persistence=n}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.it(n,e))}it(e,n){const r=new Set;let i=n,s=!0;return w.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return b("IndexBackiller",`Processing collection: ${o}`),this.rt(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}rt(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ot(i,s)).next(a=>(b("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ot(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=qC(s);Jv(o,r)>0&&(r=o)}),new Cn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class ln{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}ln.at=-1;/**
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
 */class zB{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class bi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new bi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof bi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function w1(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function WC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function Vu(t){return t==null}function ru(t){return t===0&&1/t==-1/0}function GC(t){return typeof t=="number"&&Number.isInteger(t)&&!ru(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qB extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HB(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw i instanceof DOMException?new qB("Invalid base64 string: "+i):i}}(e);return new rt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const KB=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ai(t){if(z(!!t),typeof t=="string"){let e=0;const n=KB.exec(t);if(z(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function bs(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function QC(t){const e=t.mapValue.fields.__previous_value__;return ew(e)?QC(e):e}function iu(t){const e=Ai(t.mapValue.fields.__local_write_time__.timestampValue);return new Re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Xc={nullValue:"NULL_VALUE"};function As(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ew(t)?4:YC(t)?9007199254740991:10:U()}function yr(t,e){if(t===e)return!0;const n=As(t);if(n!==As(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return iu(t).isEqual(iu(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Ai(r.timestampValue),o=Ai(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return bs(r.bytesValue).isEqual(bs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Be(r.geoPointValue.latitude)===Be(i.geoPointValue.latitude)&&Be(r.geoPointValue.longitude)===Be(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Be(r.integerValue)===Be(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Be(r.doubleValue),o=Be(i.doubleValue);return s===o?ru(s)===ru(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Ho(t.arrayValue.values||[],e.arrayValue.values||[],yr);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(w1(s)!==w1(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!yr(s[a],o[a])))return!1;return!0}(t,e);default:return U()}}function su(t,e){return(t.values||[]).find(n=>yr(n,e))!==void 0}function xi(t,e){if(t===e)return 0;const n=As(t),r=As(e);if(n!==r)return Z(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Z(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Be(i.integerValue||i.doubleValue),a=Be(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return I1(t.timestampValue,e.timestampValue);case 4:return I1(iu(t),iu(e));case 5:return Z(t.stringValue,e.stringValue);case 6:return function(i,s){const o=bs(i),a=bs(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Z(o[l],a[l]);if(u!==0)return u}return Z(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Z(Be(i.latitude),Be(s.latitude));return o!==0?o:Z(Be(i.longitude),Be(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=xi(o[l],a[l]);if(u)return u}return Z(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===ai.mapValue&&s===ai.mapValue)return 0;if(i===ai.mapValue)return 1;if(s===ai.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const d=Z(a[c],u[c]);if(d!==0)return d;const h=xi(o[a[c]],l[u[c]]);if(h!==0)return h}return Z(a.length,u.length)}(t.mapValue,e.mapValue);default:throw U()}}function I1(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Z(t,e);const n=Ai(t),r=Ai(e),i=Z(n.seconds,r.seconds);return i!==0?i:Z(n.nanos,r.nanos)}function Ko(t){return kg(t)}function kg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Ai(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?bs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,P.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=kg(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${kg(r.fields[a])}`;return s+"}"}(t.mapValue):U();var e,n}function xs(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Cg(t){return!!t&&"integerValue"in t}function ou(t){return!!t&&"arrayValue"in t}function _1(t){return!!t&&"nullValue"in t}function E1(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Jc(t){return!!t&&"mapValue"in t}function yl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=yl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function YC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function WB(t){return"nullValue"in t?Xc:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?xs(bi.empty(),P.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:U()}function GB(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?xs(bi.empty(),P.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?ai:U()}function S1(t,e){const n=xi(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function T1(t,e){const n=xi(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class Ni{constructor(e,n){this.position=e,this.inclusive=n}}function k1(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=P.comparator(P.fromName(o.referenceValue),n.key):r=xi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function C1(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class XC{}class se extends XC{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new QB(e,n,r):n==="array-contains"?new JB(e,r):n==="in"?new rb(e,r):n==="not-in"?new ZB(e,r):n==="array-contains-any"?new ej(e,r):new se(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new YB(e,r):new XB(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(xi(n,this.value)):n!==null&&As(this.value)===As(n)&&this.matchesComparison(xi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class we extends XC{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new we(e,n)}matches(e){return Wo(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Wo(t){return t.op==="and"}function bg(t){return t.op==="or"}function tw(t){return JC(t)&&Wo(t)}function JC(t){for(const e of t.filters)if(e instanceof we)return!1;return!0}function Ag(t){if(t instanceof se)return t.field.canonicalString()+t.op.toString()+Ko(t.value);if(tw(t))return t.filters.map(e=>Ag(e)).join(",");{const e=t.filters.map(n=>Ag(n)).join(",");return`${t.op}(${e})`}}function ZC(t,e){return t instanceof se?function(n,r){return r instanceof se&&n.op===r.op&&n.field.isEqual(r.field)&&yr(n.value,r.value)}(t,e):t instanceof we?function(n,r){return r instanceof we&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&ZC(s,r.filters[o]),!0):!1}(t,e):void U()}function eb(t,e){const n=t.filters.concat(e);return we.create(n,t.op)}function tb(t){return t instanceof se?function(e){return`${e.field.canonicalString()} ${e.op} ${Ko(e.value)}`}(t):t instanceof we?function(e){return e.op.toString()+" {"+e.getFilters().map(tb).join(" ,")+"}"}(t):"Filter"}class QB extends se{constructor(e,n,r){super(e,n,r),this.key=P.fromName(r.referenceValue)}matches(e){const n=P.comparator(e.key,this.key);return this.matchesComparison(n)}}class YB extends se{constructor(e,n){super(e,"in",n),this.keys=nb("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class XB extends se{constructor(e,n){super(e,"not-in",n),this.keys=nb("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nb(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>P.fromName(r.referenceValue))}class JB extends se{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ou(n)&&su(n.arrayValue,this.value)}}class rb extends se{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&su(this.value.arrayValue,n)}}class ZB extends se{constructor(e,n){super(e,"not-in",n)}matches(e){if(su(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!su(this.value.arrayValue,n)}}class ej extends se{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ou(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>su(this.value.arrayValue,r))}}/**
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
 */class xo{constructor(e,n="asc"){this.field=e,this.dir=n}}function tj(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ze{constructor(e,n){this.comparator=e,this.root=n||St.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,St.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,St.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bc(this.root,e,this.comparator,!1)}getReverseIterator(){return new bc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bc(this.root,e,this.comparator,!0)}}class bc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class St{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??St.RED,this.left=i??St.EMPTY,this.right=s??St.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new St(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return St.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return St.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,St.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,St.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}St.EMPTY=null,St.RED=!0,St.BLACK=!1;St.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(t,e,n,r,i){return this}insert(t,e,n){return new St(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Se{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new b1(this.data.getIterator())}getIteratorFrom(e){return new b1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Se)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Se(this.comparator);return n.data=e,n}}class b1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Xs(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.fields=e,e.sort(Qe.comparator)}static empty(){return new un([])}unionWith(e){let n=new Se(Qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new un(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ho(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Jc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=yl(n)}setAll(e){let n=Qe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=yl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Jc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Jc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){qs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Tt(yl(this.value))}}function ib(t){const e=[];return qs(t.fields,(n,r)=>{const i=new Qe([n]);if(Jc(r)){const s=ib(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new un(e)}/**
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
 */class be{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new be(e,0,q.min(),q.min(),q.min(),Tt.empty(),0)}static newFoundDocument(e,n,r,i){return new be(e,1,n,q.min(),r,i,0)}static newNoDocument(e,n){return new be(e,2,n,q.min(),q.min(),Tt.empty(),0)}static newUnknownDocument(e,n){return new be(e,3,n,q.min(),q.min(),Tt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class nj{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this._t=null}}function xg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new nj(t,e,n,r,i,s,o)}function Ns(t){const e=M(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ag(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Vu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ko(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ko(r)).join(",")),e._t=n}return e._t}function Bu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!tj(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ZC(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!C1(t.startAt,e.startAt)&&C1(t.endAt,e.endAt)}function Qd(t){return P.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Yd(t,e){return t.filters.filter(n=>n instanceof se&&n.field.isEqual(e))}function A1(t,e,n){let r=Xc,i=!0;for(const s of Yd(t,e)){let o=Xc,a=!0;switch(s.op){case"<":case"<=":o=WB(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Xc}S1({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];S1({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function x1(t,e,n){let r=ai,i=!0;for(const s of Yd(t,e)){let o=ai,a=!0;switch(s.op){case">=":case">":o=GB(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=ai}T1({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];T1({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class jr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this.gt=null,this.startAt,this.endAt}}function sb(t,e,n,r,i,s,o,a){return new jr(t,e,n,r,i,s,o,a)}function ya(t){return new jr(t)}function N1(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function nw(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Tf(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function rw(t){return t.collectionGroup!==null}function ms(t){const e=M(t);if(e.wt===null){e.wt=[];const n=Tf(e),r=nw(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new xo(n)),e.wt.push(new xo(Qe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new xo(Qe.keyField(),s))}}}return e.wt}function pn(t){const e=M(t);if(!e.gt)if(e.limitType==="F")e.gt=xg(e.path,e.collectionGroup,ms(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of ms(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new xo(s.field,o))}const r=e.endAt?new Ni(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ni(e.startAt.position,e.startAt.inclusive):null;e.gt=xg(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.gt}function Ng(t,e){e.getFirstInequalityField(),Tf(t);const n=t.filters.concat([e]);return new jr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Xd(t,e,n){return new jr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ju(t,e){return Bu(pn(t),pn(e))&&t.limitType===e.limitType}function ob(t){return`${Ns(pn(t))}|lt:${t.limitType}`}function Dg(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>tb(r)).join(", ")}]`),Vu(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ko(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ko(r)).join(",")),`Target(${n})`}(pn(t))}; limitType=${t.limitType})`}function zu(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):P.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of ms(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=k1(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,ms(n),r)||n.endAt&&!function(i,s,o){const a=k1(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,ms(n),r))}(t,e)}function ab(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function lb(t){return(e,n)=>{let r=!1;for(const i of ms(t)){const s=rj(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function rj(t,e,n){const r=t.field.isKeyField()?P.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?xi(a,l):U()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ru(e)?"-0":e}}function cb(t){return{integerValue:""+t}}function db(t,e){return GC(e)?cb(e):ub(t,e)}/**
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
 */class kf{constructor(){this._=void 0}}function ij(t,e,n){return t instanceof Go?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Ds?fb(t,e):t instanceof Ps?pb(t,e):function(r,i){const s=hb(r,i),o=D1(s)+D1(r.It);return Cg(s)&&Cg(r.It)?cb(o):ub(r.Tt,o)}(t,e)}function sj(t,e,n){return t instanceof Ds?fb(t,e):t instanceof Ps?pb(t,e):n}function hb(t,e){return t instanceof Qo?Cg(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Go extends kf{}class Ds extends kf{constructor(e){super(),this.elements=e}}function fb(t,e){const n=mb(e);for(const r of t.elements)n.some(i=>yr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ps extends kf{constructor(e){super(),this.elements=e}}function pb(t,e){let n=mb(e);for(const r of t.elements)n=n.filter(i=>!yr(i,r));return{arrayValue:{values:n}}}class Qo extends kf{constructor(e,n){super(),this.Tt=e,this.It=n}}function D1(t){return Be(t.integerValue||t.doubleValue)}function mb(t){return ou(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class qu{constructor(e,n){this.field=e,this.transform=n}}function oj(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ds&&r instanceof Ds||n instanceof Ps&&r instanceof Ps?Ho(n.elements,r.elements,yr):n instanceof Qo&&r instanceof Qo?yr(n.It,r.It):n instanceof Go&&r instanceof Go}(t.transform,e.transform)}class aj{constructor(e,n){this.version=e,this.transformResults=n}}class Pe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pe}static exists(e){return new Pe(void 0,e)}static updateTime(e){return new Pe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Cf{}function gb(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wa(t.key,Pe.none()):new va(t.key,t.data,Pe.none());{const n=t.data,r=Tt.empty();let i=new Se(Qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new zr(t.key,r,new un(i.toArray()),Pe.none())}}function lj(t,e,n){t instanceof va?function(r,i,s){const o=r.value.clone(),a=R1(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof zr?function(r,i,s){if(!Zc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=R1(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(yb(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function vl(t,e,n,r){return t instanceof va?function(i,s,o,a){if(!Zc(i.precondition,s))return o;const l=i.value.clone(),u=O1(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof zr?function(i,s,o,a){if(!Zc(i.precondition,s))return o;const l=O1(i.fieldTransforms,a,s),u=s.data;return u.setAll(yb(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Zc(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function uj(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=hb(r.transform,i||null);s!=null&&(n===null&&(n=Tt.empty()),n.set(r.field,s))}return n||null}function P1(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Ho(n,r,(i,s)=>oj(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class va extends Cf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zr extends Cf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function yb(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function R1(t,e,n){const r=new Map;z(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,sj(o,a,n[i]))}return r}function O1(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,ij(s,o,e))}return r}class wa extends Cf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iw extends Cf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class cj{constructor(e){this.count=e}}/**
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
 */var Xe,le;function vb(t){switch(t){default:return U();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function wb(t){if(t===void 0)return Ge("GRPC error has no .code"),E.UNKNOWN;switch(t){case Xe.OK:return E.OK;case Xe.CANCELLED:return E.CANCELLED;case Xe.UNKNOWN:return E.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return E.INTERNAL;case Xe.UNAVAILABLE:return E.UNAVAILABLE;case Xe.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Xe.NOT_FOUND:return E.NOT_FOUND;case Xe.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Xe.ABORTED:return E.ABORTED;case Xe.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Xe.DATA_LOSS:return E.DATA_LOSS;default:return U()}}(le=Xe||(Xe={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ji{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){qs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return WC(this.inner)}size(){return this.innerSize}}/**
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
 */const dj=new ze(P.comparator);function cn(){return dj}const Ib=new ze(P.comparator);function Ja(...t){let e=Ib;for(const n of t)e=e.insert(n.key,n);return e}function _b(t){let e=Ib;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ar(){return wl()}function Eb(){return wl()}function wl(){return new ji(t=>t.toString(),(t,e)=>t.isEqual(e))}const hj=new ze(P.comparator),fj=new Se(P.comparator);function ee(...t){let e=fj;for(const n of t)e=e.add(n);return e}const pj=new Se(Z);function bf(){return pj}/**
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
 */class Hu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ku.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Hu(q.min(),i,bf(),cn(),ee())}}class Ku{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ku(r,n,ee(),ee(),ee())}}/**
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
 */class ed{constructor(e,n,r,i){this.Et=e,this.removedTargetIds=n,this.key=r,this.At=i}}class Sb{constructor(e,n){this.targetId=e,this.Rt=n}}class Tb{constructor(e,n,r=rt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class $1{constructor(){this.Pt=0,this.vt=M1(),this.bt=rt.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.bt}get Dt(){return this.Pt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.bt=e)}Nt(){let e=ee(),n=ee(),r=ee();return this.vt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:U()}}),new Ku(this.bt,this.Vt,e,n,r)}kt(){this.St=!1,this.vt=M1()}$t(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ot(){this.Pt+=1}Ft(){this.Pt-=1}Bt(){this.St=!0,this.Vt=!0}}class mj{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=cn(),this.Kt=L1(),this.Gt=new Se(Z)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const r=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&r.xt(e.resumeToken);break;case 1:r.Ft(),r.Dt||r.kt(),r.xt(e.resumeToken);break;case 2:r.Ft(),r.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(r.Bt(),r.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),r.xt(e.resumeToken));break;default:U()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((r,i)=>{this.Jt(i)&&n(i)})}Zt(e){const n=e.targetId,r=e.Rt.count,i=this.Xt(n);if(i){const s=i.target;if(Qd(s))if(r===0){const o=new P(s.path);this.zt(n,o,be.newNoDocument(o,q.min()))}else z(r===1);else this.te(n)!==r&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&Qd(a.target)){const l=new P(a.target.path);this.Ut.get(l)!==null||this.ne(o,l)||this.zt(o,l,be.newNoDocument(l,e))}s.Ct&&(n.set(o,s.Nt()),s.kt())}});let r=ee();this.Kt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new Hu(e,n,this.Gt,this.Ut,r);return this.Ut=cn(),this.Kt=L1(),this.Gt=new Se(Z),i}jt(e,n){if(!this.Jt(e))return;const r=this.ne(e,n.key)?2:0;this.Ht(e).$t(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,r){if(!this.Jt(e))return;const i=this.Ht(e);this.ne(e,n)?i.$t(n,1):i.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Ht(e).Ot()}Ht(e){let n=this.qt.get(e);return n||(n=new $1,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new Se(Z),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||b("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new $1),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function L1(){return new ze(P.comparator)}function M1(){return new ze(P.comparator)}/**
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
 */const gj=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),yj=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),vj=(()=>({and:"AND",or:"OR"}))();class wj{constructor(e,n){this.databaseId=e,this.yt=n}}function Yo(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kb(t,e){return t.yt?e.toBase64():e.toUint8Array()}function Ij(t,e){return Yo(t,e.toTimestamp())}function Ye(t){return z(!!t),q.fromTimestamp(function(e){const n=Ai(e);return new Re(n.seconds,n.nanos)}(t))}function sw(t,e){return function(n){return new ue(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Cb(t){const e=ue.fromString(t);return z($b(e)),e}function au(t,e){return sw(t.databaseId,e.path)}function hr(t,e){const n=Cb(e);if(n.get(1)!==t.databaseId.projectId)throw new C(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new C(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new P(Ab(n))}function Pg(t,e){return sw(t.databaseId,e)}function bb(t){const e=Cb(t);return e.length===4?ue.emptyPath():Ab(e)}function lu(t){return new ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ab(t){return z(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function F1(t,e,n){return{name:au(t,e),fields:n.value.mapValue.fields}}function xb(t,e,n){const r=hr(t,e.name),i=Ye(e.updateTime),s=e.createTime?Ye(e.createTime):q.min(),o=new Tt({mapValue:{fields:e.fields}}),a=be.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function _j(t,e){return"found"in e?function(n,r){z(!!r.found),r.found.name,r.found.updateTime;const i=hr(n,r.found.name),s=Ye(r.found.updateTime),o=r.found.createTime?Ye(r.found.createTime):q.min(),a=new Tt({mapValue:{fields:r.found.fields}});return be.newFoundDocument(i,s,o,a)}(t,e):"missing"in e?function(n,r){z(!!r.missing),z(!!r.readTime);const i=hr(n,r.missing),s=Ye(r.readTime);return be.newNoDocument(i,s)}(t,e):U()}function Ej(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.yt?(z(u===void 0||typeof u=="string"),rt.fromBase64String(u||"")):(z(u===void 0||u instanceof Uint8Array),rt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?E.UNKNOWN:wb(l.code);return new C(u,l.message||"")}(o);n=new Tb(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=hr(t,r.document.name),s=Ye(r.document.updateTime),o=r.document.createTime?Ye(r.document.createTime):q.min(),a=new Tt({mapValue:{fields:r.document.fields}}),l=be.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new ed(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=hr(t,r.document),s=r.readTime?Ye(r.readTime):q.min(),o=be.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ed([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=hr(t,r.document),s=r.removedTargetIds||[];n=new ed([],s,i,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new cj(i),o=r.targetId;n=new Sb(o,s)}}return n}function uu(t,e){let n;if(e instanceof va)n={update:F1(t,e.key,e.value)};else if(e instanceof wa)n={delete:au(t,e.key)};else if(e instanceof zr)n={update:F1(t,e.key,e.data),updateMask:Aj(e.fieldMask)};else{if(!(e instanceof iw))return U();n={verify:au(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Go)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ds)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ps)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Qo)return{fieldPath:s.field.canonicalString(),increment:o.It};throw U()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:Ij(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:U()}(t,e.precondition)),n}function Rg(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?Pe.updateTime(Ye(i.updateTime)):i.exists!==void 0?Pe.exists(i.exists):Pe.none()}(e.currentDocument):Pe.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)z(o.setToServerValue==="REQUEST_TIME"),a=new Go;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new Ds(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new Ps(u)}else"increment"in o?a=new Qo(s,o.increment):U();const l=Qe.fromServerFormat(o.fieldPath);return new qu(l,a)}(t,i)):[];if(e.update){e.update.name;const i=hr(t,e.update.name),s=new Tt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const l=a.fieldPaths||[];return new un(l.map(u=>Qe.fromServerFormat(u)))}(e.updateMask);return new zr(i,s,o,n,r)}return new va(i,s,n,r)}if(e.delete){const i=hr(t,e.delete);return new wa(i,n)}if(e.verify){const i=hr(t,e.verify);return new iw(i,n)}return U()}function Sj(t,e){return t&&t.length>0?(z(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Ye(r.updateTime):Ye(i);return s.isEqual(q.min())&&(s=Ye(i)),new aj(s,r.transformResults||[])}(n,e))):[]}function Nb(t,e){return{documents:[Pg(t,e.path)]}}function Db(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Pg(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Pg(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return Ob(we.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Zs(c.field),direction:kj(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.yt||Vu(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Pb(t){let e=bb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){z(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const d=Rb(c);return d instanceof we&&tw(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(d){return new xo(eo(d.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(c)));let a=null;n.limit&&(a=function(c){let d;return d=typeof c=="object"?c.value:c,Vu(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(c){const d=!!c.before,h=c.values||[];return new Ni(h,d)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const d=!c.before,h=c.values||[];return new Ni(h,d)}(n.endAt)),sb(e,i,o,s,a,"F",l,u)}function Tj(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return U()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Rb(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=eo(e.unaryFilter.field);return se.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=eo(e.unaryFilter.field);return se.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=eo(e.unaryFilter.field);return se.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=eo(e.unaryFilter.field);return se.create(s,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(t):t.fieldFilter!==void 0?function(e){return se.create(eo(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return we.create(e.compositeFilter.filters.map(n=>Rb(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return U()}}(e.compositeFilter.op))}(t):U()}function kj(t){return gj[t]}function Cj(t){return yj[t]}function bj(t){return vj[t]}function Zs(t){return{fieldPath:t.canonicalString()}}function eo(t){return Qe.fromServerFormat(t.fieldPath)}function Ob(t){return t instanceof se?function(e){if(e.op==="=="){if(E1(e.value))return{unaryFilter:{field:Zs(e.field),op:"IS_NAN"}};if(_1(e.value))return{unaryFilter:{field:Zs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(E1(e.value))return{unaryFilter:{field:Zs(e.field),op:"IS_NOT_NAN"}};if(_1(e.value))return{unaryFilter:{field:Zs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zs(e.field),op:Cj(e.op),value:e.value}}}(t):t instanceof we?function(e){const n=e.getFilters().map(r=>Ob(r));return n.length===1?n[0]:{compositeFilter:{op:bj(e.op),filters:n}}}(t):U()}function Aj(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function $b(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function Jt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=U1(e)),e=xj(t.get(n),e);return U1(e)}function xj(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function U1(t){return t+""}function lr(t){const e=t.length;if(z(e>=2),e===2)return z(t.charAt(0)===""&&t.charAt(1)===""),ue.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&U(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:U()}s=o+2}return new ue(r)}/**
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
 */const V1=["userId","batchId"];/**
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
 */function td(t,e){return[t,Jt(e)]}function Lb(t,e,n){return[t,Jt(e),n]}const Nj={},Dj=["prefixPath","collectionGroup","readTime","documentId"],Pj=["prefixPath","collectionGroup","documentId"],Rj=["collectionGroup","readTime","prefixPath","documentId"],Oj=["canonicalId","targetId"],$j=["targetId","path"],Lj=["path","targetId"],Mj=["collectionId","parent"],Fj=["indexId","uid"],Uj=["uid","sequenceNumber"],Vj=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Bj=["indexId","uid","orderedDocumentKey"],jj=["userId","collectionPath","documentId"],zj=["userId","collectionPath","largestBatchId"],qj=["userId","collectionGroup","largestBatchId"],Mb=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Hj=[...Mb,"documentOverlays"],Fb=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ub=Fb,Kj=[...Ub,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og extends KC{constructor(e,n){super(),this.re=e,this.currentSequenceNumber=n}}function gt(t,e){const n=M(t);return Kn.M(n.re,e)}/**
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
 */class ow{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&lj(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=vl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=vl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Eb();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=gb(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&Ho(this.mutations,e.mutations,(n,r)=>P1(n,r))&&Ho(this.baseMutations,e.baseMutations,(n,r)=>P1(n,r))}}class aw{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){z(e.mutations.length===r.length);let i=hj;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new aw(e,n,r,i)}}/**
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
 */class lw{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class vi{constructor(e,n,r,i,s=q.min(),o=q.min(),a=rt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new vi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new vi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new vi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class Vb{constructor(e){this.oe=e}}function Wj(t,e){let n;if(e.document)n=xb(t.oe,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=P.fromSegments(e.noDocument.path),i=Os(e.noDocument.readTime);n=be.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return U();{const r=P.fromSegments(e.unknownDocument.path),i=Os(e.unknownDocument.version);n=be.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(r){const i=new Re(r[0],r[1]);return q.fromTimestamp(i)}(e.readTime)),n}function B1(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Jd(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:au(i,s.key),fields:s.data.value.mapValue.fields,updateTime:Yo(i,s.version.toTimestamp()),createTime:Yo(i,s.createTime.toTimestamp())}}(t.oe,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Rs(e.version)};else{if(!e.isUnknownDocument())return U();r.unknownDocument={path:n.path.toArray(),version:Rs(e.version)}}return r}function Jd(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Rs(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Os(t){const e=new Re(t.seconds,t.nanoseconds);return q.fromTimestamp(e)}function Xi(t,e){const n=(e.baseMutations||[]).map(s=>Rg(t.oe,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Rg(t.oe,s)),i=Re.fromMillis(e.localWriteTimeMs);return new ow(e.batchId,i,n,r)}function Za(t){const e=Os(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Os(t.lastLimboFreeSnapshotVersion):q.min();let r;var i;return t.query.documents!==void 0?(z((i=t.query).documents.length===1),r=pn(ya(bb(i.documents[0])))):r=function(s){return pn(Pb(s))}(t.query),new vi(r,t.targetId,0,t.lastListenSequenceNumber,e,n,rt.fromBase64String(t.resumeToken))}function Bb(t,e){const n=Rs(e.snapshotVersion),r=Rs(e.lastLimboFreeSnapshotVersion);let i;i=Qd(e.target)?Nb(t.oe,e.target):Db(t.oe,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ns(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function uw(t){const e=Pb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xd(e,e.limit,"L"):e}function zp(t,e){return new lw(e.largestBatchId,Rg(t.oe,e.overlayMutation))}function j1(t,e){const n=e.path.lastSegment();return[t,Jt(e.path.popLast()),n]}function z1(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Rs(r.readTime),documentKey:Jt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gj{getBundleMetadata(e,n){return q1(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:Os(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return q1(e).put({bundleId:(r=n).id,createTime:Rs(Ye(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return H1(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:uw(i.bundledQuery),readTime:Os(i.readTime)};var i})}saveNamedQuery(e,n){return H1(e).put(function(r){return{name:r.name,readTime:Rs(Ye(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function q1(t){return gt(t,"bundles")}function H1(t){return gt(t,"namedQueries")}/**
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
 */class Af{constructor(e,n){this.Tt=e,this.userId=n}static ue(e,n){const r=n.uid||"";return new Af(e,r)}getOverlay(e,n){return Fa(e).get(j1(this.userId,n)).next(r=>r?zp(this.Tt,r):null)}getOverlays(e,n){const r=ar();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new lw(n,o);i.push(this.ce(e,a))}),w.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Jt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Fa(e).Y("collectionPathOverlayIndex",a))}),w.waitFor(s)}getOverlaysForCollection(e,n,r){const i=ar(),s=Jt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Fa(e).W("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const u=zp(this.Tt,l);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=ar();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Fa(e).X({index:"collectionGroupOverlayIndex",range:a},(l,u,c)=>{const d=zp(this.Tt,u);s.size()<i||d.largestBatchId===o?(s.set(d.getKey(),d),o=d.largestBatchId):c.done()}).next(()=>s)}ce(e,n){return Fa(e).put(function(r,i,s){const[o,a,l]=j1(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:l,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:uu(r.oe,s.mutation)}}(this.Tt,this.userId,n))}}function Fa(t){return gt(t,"documentOverlays")}/**
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
 */class Ji{constructor(){}ae(e,n){this.he(e,n),n.le()}he(e,n){if("nullValue"in e)this.fe(n,5);else if("booleanValue"in e)this.fe(n,10),n.de(e.booleanValue?1:0);else if("integerValue"in e)this.fe(n,15),n.de(Be(e.integerValue));else if("doubleValue"in e){const r=Be(e.doubleValue);isNaN(r)?this.fe(n,13):(this.fe(n,15),ru(r)?n.de(0):n.de(r))}else if("timestampValue"in e){const r=e.timestampValue;this.fe(n,20),typeof r=="string"?n._e(r):(n._e(`${r.seconds||""}`),n.de(r.nanos||0))}else if("stringValue"in e)this.we(e.stringValue,n),this.me(n);else if("bytesValue"in e)this.fe(n,30),n.ge(bs(e.bytesValue)),this.me(n);else if("referenceValue"in e)this.ye(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.fe(n,45),n.de(r.latitude||0),n.de(r.longitude||0)}else"mapValue"in e?YC(e)?this.fe(n,Number.MAX_SAFE_INTEGER):(this.pe(e.mapValue,n),this.me(n)):"arrayValue"in e?(this.Ie(e.arrayValue,n),this.me(n)):U()}we(e,n){this.fe(n,25),this.Te(e,n)}Te(e,n){n._e(e)}pe(e,n){const r=e.fields||{};this.fe(n,55);for(const i of Object.keys(r))this.we(i,n),this.he(r[i],n)}Ie(e,n){const r=e.values||[];this.fe(n,50);for(const i of r)this.he(i,n)}ye(e,n){this.fe(n,37),P.fromName(e).path.forEach(r=>{this.fe(n,60),this.Te(r,n)})}fe(e,n){e.de(n)}me(e){e.de(2)}}Ji.Ee=new Ji;function Qj(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function K1(t){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const s=Qj(255&n[i]);if(r+=s,s!==8)break}return r}(t);return Math.ceil(e/8)}class Yj{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ae(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Re(r.value),r=n.next();this.Pe()}ve(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.be(r.value),r=n.next();this.Ve()}Se(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Re(r);else if(r<2048)this.Re(960|r>>>6),this.Re(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Re(480|r>>>12),this.Re(128|63&r>>>6),this.Re(128|63&r);else{const i=n.codePointAt(0);this.Re(240|i>>>18),this.Re(128|63&i>>>12),this.Re(128|63&i>>>6),this.Re(128|63&i)}}this.Pe()}De(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.be(r);else if(r<2048)this.be(960|r>>>6),this.be(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.be(480|r>>>12),this.be(128|63&r>>>6),this.be(128|63&r);else{const i=n.codePointAt(0);this.be(240|i>>>18),this.be(128|63&i>>>12),this.be(128|63&i>>>6),this.be(128|63&i)}}this.Ve()}Ce(e){const n=this.xe(e),r=K1(n);this.Ne(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}ke(e){const n=this.xe(e),r=K1(n);this.Ne(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}$e(){this.Me(255),this.Me(255)}Oe(){this.Fe(255),this.Fe(255)}reset(){this.position=0}seed(e){this.Ne(e.length),this.buffer.set(e,this.position),this.position+=e.length}Be(){return this.buffer.slice(0,this.position)}xe(e){const n=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Re(e){const n=255&e;n===0?(this.Me(0),this.Me(255)):n===255?(this.Me(255),this.Me(0)):this.Me(n)}be(e){const n=255&e;n===0?(this.Fe(0),this.Fe(255)):n===255?(this.Fe(255),this.Fe(0)):this.Fe(e)}Pe(){this.Me(0),this.Me(1)}Ve(){this.Fe(0),this.Fe(1)}Me(e){this.Ne(1),this.buffer[this.position++]=e}Fe(e){this.Ne(1),this.buffer[this.position++]=~e}Ne(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class Xj{constructor(e){this.Le=e}ge(e){this.Le.Ae(e)}_e(e){this.Le.Se(e)}de(e){this.Le.Ce(e)}le(){this.Le.$e()}}class Jj{constructor(e){this.Le=e}ge(e){this.Le.ve(e)}_e(e){this.Le.De(e)}de(e){this.Le.ke(e)}le(){this.Le.Oe()}}class Ua{constructor(){this.Le=new Yj,this.qe=new Xj(this.Le),this.Ue=new Jj(this.Le)}seed(e){this.Le.seed(e)}Ke(e){return e===0?this.qe:this.Ue}Be(){return this.Le.Be()}reset(){this.Le.reset()}}/**
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
 */class Zi{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Ge(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Zi(this.indexId,this.documentKey,this.arrayValue,r)}}function Gr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=W1(t.arrayValue,e.arrayValue),n!==0?n:(n=W1(t.directionalValue,e.directionalValue),n!==0?n:P.comparator(t.documentKey,e.documentKey)))}function W1(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class Zj{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Qe=e.orderBy,this.je=[];for(const n of e.filters){const r=n;r.isInequality()?this.ze=r:this.je.push(r)}}We(e){z(e.collectionGroup===this.collectionId);const n=Tg(e);if(n!==void 0&&!this.He(n))return!1;const r=Qi(e);let i=0,s=0;for(;i<r.length&&this.He(r[i]);++i);if(i===r.length)return!0;if(this.ze!==void 0){const o=r[i];if(!this.Je(this.ze,o)||!this.Ye(this.Qe[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Qe.length||!this.Ye(this.Qe[s++],o))return!1}return!0}He(e){for(const n of this.je)if(this.Je(n,e))return!0;return!1}Je(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}Ye(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function jb(t){var e,n;if(z(t instanceof se||t instanceof we),t instanceof se){if(t instanceof rb){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>se.create(t.field,"==",s)))||[];return we.create(i,"or")}return t}const r=t.filters.map(i=>jb(i));return we.create(r,t.op)}function ez(t){if(t.getFilters().length===0)return[];const e=Mg(jb(t));return z(zb(e)),$g(e)||Lg(e)?[e]:e.getFilters()}function $g(t){return t instanceof se}function Lg(t){return t instanceof we&&tw(t)}function zb(t){return $g(t)||Lg(t)||function(e){if(e instanceof we&&bg(e)){for(const n of e.getFilters())if(!$g(n)&&!Lg(n))return!1;return!0}return!1}(t)}function Mg(t){if(z(t instanceof se||t instanceof we),t instanceof se)return t;if(t.filters.length===1)return Mg(t.filters[0]);const e=t.filters.map(r=>Mg(r));let n=we.create(e,t.op);return n=Zd(n),zb(n)?n:(z(n instanceof we),z(Wo(n)),z(n.filters.length>1),n.filters.reduce((r,i)=>cw(r,i)))}function cw(t,e){let n;return z(t instanceof se||t instanceof we),z(e instanceof se||e instanceof we),n=t instanceof se?e instanceof se?function(r,i){return we.create([r,i],"and")}(t,e):G1(t,e):e instanceof se?G1(e,t):function(r,i){if(z(r.filters.length>0&&i.filters.length>0),Wo(r)&&Wo(i))return eb(r,i.getFilters());const s=bg(r)?r:i,o=bg(r)?i:r,a=s.filters.map(l=>cw(l,o));return we.create(a,"or")}(t,e),Zd(n)}function G1(t,e){if(Wo(e))return eb(e,t.getFilters());{const n=e.filters.map(r=>cw(t,r));return we.create(n,"or")}}function Zd(t){if(z(t instanceof se||t instanceof we),t instanceof se)return t;const e=t.getFilters();if(e.length===1)return Zd(e[0]);if(JC(t))return t;const n=e.map(i=>Zd(i)),r=[];return n.forEach(i=>{i instanceof se?r.push(i):i instanceof we&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:we.create(r,t.op)}/**
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
 */class tz{constructor(){this.Ze=new dw}addToCollectionParentIndex(e,n){return this.Ze.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n){return w.resolve(null)}getIndexType(e,n){return w.resolve(0)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,n){return w.resolve(Cn.min())}getMinOffsetFromCollectionGroup(e,n){return w.resolve(Cn.min())}updateCollectionGroup(e,n,r){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class dw{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Se(ue.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Se(ue.comparator)).toArray()}}/**
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
 */const Ac=new Uint8Array(0);class nz{constructor(e,n){this.user=e,this.databaseId=n,this.Xe=new dw,this.tn=new ji(r=>Ns(r),(r,i)=>Bu(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.Xe.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.Xe.add(n)});const s={collectionId:r,parent:Jt(i)};return Q1(e).put(s)}return w.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[BC(n),""],!1,!0);return Q1(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(lr(o.parent))}return r})}addFieldIndex(e,n){const r=xc(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Ba(e);return s.next(a=>{o.put(z1(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=xc(e),i=Ba(e),s=Va(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=Va(e);let i=!0;const s=new Map;return w.forEach(this.en(n),o=>this.nn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=ee();const a=[];return w.forEach(s,(l,u)=>{var c;b("IndexedDbIndexManager",`Using index ${c=l,`id=${c.indexId}|cg=${c.collectionGroup}|f=${c.fields.map(g=>`${g.fieldPath}:${g.kind}`).join(",")}`} to execute ${Ns(n)}`);const d=function(g,_){const k=Tg(_);if(k===void 0)return null;for(const A of Yd(g,k.fieldPath))switch(A.op){case"array-contains-any":return A.value.arrayValue.values||[];case"array-contains":return[A.value]}return null}(u,l),h=function(g,_){const k=new Map;for(const A of Qi(_))for(const D of Yd(g,A.fieldPath))switch(D.op){case"==":case"in":k.set(A.fieldPath.canonicalString(),D.value);break;case"not-in":case"!=":return k.set(A.fieldPath.canonicalString(),D.value),Array.from(k.values())}return null}(u,l),p=function(g,_){const k=[];let A=!0;for(const D of Qi(_)){const R=D.kind===0?A1(g,D.fieldPath,g.startAt):x1(g,D.fieldPath,g.startAt);k.push(R.value),A&&(A=R.inclusive)}return new Ni(k,A)}(u,l),y=function(g,_){const k=[];let A=!0;for(const D of Qi(_)){const R=D.kind===0?x1(g,D.fieldPath,g.endAt):A1(g,D.fieldPath,g.endAt);k.push(R.value),A&&(A=R.inclusive)}return new Ni(k,A)}(u,l),v=this.sn(l,u,p),T=this.sn(l,u,y),m=this.rn(l,u,h),f=this.on(l.indexId,d,v,p.inclusive,T,y.inclusive,m);return w.forEach(f,g=>r.J(g,n.limit).next(_=>{_.forEach(k=>{const A=P.fromSegments(k.documentKey);o.has(A)||(o=o.add(A),a.push(A))})}))}).next(()=>a)}return w.resolve(null)})}en(e){let n=this.tn.get(e);return n||(e.filters.length===0?n=[e]:n=ez(we.create(e.filters,"and")).map(r=>xg(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.tn.set(e,n),n)}on(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),u=l/(n!=null?n.length:1),c=[];for(let d=0;d<l;++d){const h=n?this.un(n[d/u]):Ac,p=this.cn(e,h,r[d%u],i),y=this.an(e,h,s[d%u],o),v=a.map(T=>this.cn(e,h,T,!0));c.push(...this.createRange(p,y,v))}return c}cn(e,n,r,i){const s=new Zi(e,P.empty(),n,r);return i?s:s.Ge()}an(e,n,r,i){const s=new Zi(e,P.empty(),n,r);return i?s.Ge():s}nn(e,n){const r=new Zj(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.We(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.en(n);return w.forEach(i,s=>this.nn(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let l=new Se(Qe.comparator),u=!1;for(const c of a.filters)for(const d of c.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?u=!0:l=l.add(d.field));for(const c of a.orderBy)c.field.isKeyField()||(l=l.add(c.field));return l.size+(u?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(n)&&i.length>1&&r===2?1:r)}hn(e,n){const r=new Ua;for(const i of Qi(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Ke(i.kind);Ji.Ee.ae(s,o)}return r.Be()}un(e){const n=new Ua;return Ji.Ee.ae(e,n.Ke(0)),n.Be()}ln(e,n){const r=new Ua;return Ji.Ee.ae(xs(this.databaseId,n),r.Ke(function(i){const s=Qi(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Be()}rn(e,n,r){if(r===null)return[];let i=[];i.push(new Ua);let s=0;for(const o of Qi(e)){const a=r[s++];for(const l of i)if(this.fn(n,o.fieldPath)&&ou(a))i=this.dn(i,o,a);else{const u=l.Ke(o.kind);Ji.Ee.ae(a,u)}}return this._n(i)}sn(e,n,r){return this.rn(e,n,r.position)}_n(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Be();return n}dn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new Ua;l.seed(a.Be()),Ji.Ee.ae(o,l.Ke(n.kind)),s.push(l)}return s}fn(e,n){return!!e.filters.find(r=>r instanceof se&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=xc(e),i=Ba(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(s=>{const o=[];return w.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(u,c){const d=c?new Gd(c.sequenceNumber,new Cn(Os(c.readTime),new P(lr(c.documentKey)),c.largestBatchId)):Gd.empty(),h=u.fields.map(([p,y])=>new FB(Qe.fromServerFormat(p),y));return new jC(u.indexId,u.collectionGroup,h,d)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:Z(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=xc(e),s=Ba(e);return this.wn(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>w.forEach(a,l=>s.put(z1(l.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return w.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?w.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),w.forEach(a,l=>this.mn(e,i,l).next(u=>{const c=this.gn(s,l);return u.isEqual(c)?w.resolve():this.yn(e,s,l,u,c)}))))})}pn(e,n,r,i){return Va(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.ln(r,n.key),documentKey:n.key.path.toArray()})}In(e,n,r,i){return Va(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.ln(r,n.key),n.key.path.toArray()])}mn(e,n,r){const i=Va(e);let s=new Se(Gr);return i.X({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.ln(r,n)])},(o,a)=>{s=s.add(new Zi(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}gn(e,n){let r=new Se(Gr);const i=this.hn(n,e);if(i==null)return r;const s=Tg(n);if(s!=null){const o=e.data.field(s.fieldPath);if(ou(o))for(const a of o.arrayValue.values||[])r=r.add(new Zi(n.indexId,e.key,this.un(a),i))}else r=r.add(new Zi(n.indexId,e.key,Ac,i));return r}yn(e,n,r,i,s){b("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,l,u,c,d){const h=a.getIterator(),p=l.getIterator();let y=Xs(h),v=Xs(p);for(;y||v;){let T=!1,m=!1;if(y&&v){const f=u(y,v);f<0?m=!0:f>0&&(T=!0)}else y!=null?m=!0:T=!0;T?(c(v),v=Xs(p)):m?(d(y),y=Xs(h)):(y=Xs(h),v=Xs(p))}}(i,s,Gr,a=>{o.push(this.pn(e,n,r,a))},a=>{o.push(this.In(e,n,r,a))}),w.waitFor(o)}wn(e){let n=1;return Ba(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Gr(o,a)).filter((o,a,l)=>!a||Gr(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Gr(o,e),l=Gr(o,n);if(a===0)i[0]=e.Ge();else if(a>0&&l<0)i.push(o),i.push(o.Ge());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Tn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Ac,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Ac,[]];s.push(IDBKeyRange.bound(a,l))}return s}Tn(e,n){return Gr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(Y1)}getMinOffset(e,n){return w.mapArray(this.en(n),r=>this.nn(e,r).next(i=>i||U())).next(Y1)}}function Q1(t){return gt(t,"collectionParents")}function Va(t){return gt(t,"indexEntries")}function xc(t){return gt(t,"indexConfiguration")}function Ba(t){return gt(t,"indexState")}function Y1(t){z(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Jv(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Cn(e.readTime,e.documentKey,n)}/**
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
 */const X1={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class rn{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new rn(e,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qb(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.X({range:o},(c,d,h)=>(a++,h.delete()));s.push(l.next(()=>{z(a===1)}));const u=[];for(const c of n.mutations){const d=Lb(e,c.key.path,n.batchId);s.push(i.delete(d)),u.push(c.key)}return w.waitFor(s).next(()=>u)}function eh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw U();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */rn.DEFAULT_COLLECTION_PERCENTILE=10,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rn.DEFAULT=new rn(41943040,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rn.DISABLED=new rn(-1,0,0);class xf{constructor(e,n,r,i){this.userId=e,this.Tt=n,this.indexManager=r,this.referenceDelegate=i,this.En={}}static ue(e,n,r,i){z(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new xf(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Qr(e).X({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=to(e),o=Qr(e);return o.add({}).next(a=>{z(typeof a=="number");const l=new ow(a,n,r,i),u=function(h,p,y){const v=y.baseMutations.map(m=>uu(h.oe,m)),T=y.mutations.map(m=>uu(h.oe,m));return{userId:p,batchId:y.batchId,localWriteTimeMs:y.localWriteTime.toMillis(),baseMutations:v,mutations:T}}(this.Tt,this.userId,l),c=[];let d=new Se((h,p)=>Z(h.canonicalString(),p.canonicalString()));for(const h of i){const p=Lb(this.userId,h.key.path,a);d=d.add(h.key.path.popLast()),c.push(o.put(u)),c.push(s.put(p,Nj))}return d.forEach(h=>{c.push(this.indexManager.addToCollectionParentIndex(e,h))}),e.addOnCommittedListener(()=>{this.En[a]=l.keys()}),w.waitFor(c).next(()=>l)})}lookupMutationBatch(e,n){return Qr(e).get(n).next(r=>r?(z(r.userId===this.userId),Xi(this.Tt,r)):null)}An(e,n){return this.En[n]?w.resolve(this.En[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.En[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Qr(e).X({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(z(a.batchId>=r),s=Xi(this.Tt,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Qr(e).X({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Qr(e).W("userMutationsIndex",n).next(r=>r.map(i=>Xi(this.Tt,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=td(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return to(e).X({range:i},(o,a,l)=>{const[u,c,d]=o,h=lr(c);if(u===this.userId&&n.path.isEqual(h))return Qr(e).get(d).next(p=>{if(!p)throw U();z(p.userId===this.userId),s.push(Xi(this.Tt,p))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Se(Z);const i=[];return n.forEach(s=>{const o=td(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=to(e).X({range:a},(u,c,d)=>{const[h,p,y]=u,v=lr(p);h===this.userId&&s.path.isEqual(v)?r=r.add(y):d.done()});i.push(l)}),w.waitFor(i).next(()=>this.Rn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=td(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Se(Z);return to(e).X({range:o},(l,u,c)=>{const[d,h,p]=l,y=lr(h);d===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(p)):c.done()}).next(()=>this.Rn(e,a))}Rn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Qr(e).get(s).next(o=>{if(o===null)throw U();z(o.userId===this.userId),r.push(Xi(this.Tt,o))}))}),w.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return qb(e.re,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Pn(n.batchId)}),w.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Pn(e){delete this.En[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return w.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return to(e).X({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=lr(s[1]);i.push(l)}else a.done()}).next(()=>{z(i.length===0)})})}containsKey(e,n){return Hb(e,this.userId,n)}vn(e){return Kb(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Hb(t,e,n){const r=td(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return to(t).X({range:s,Z:!0},(a,l,u)=>{const[c,d,h]=a;c===e&&d===i&&(o=!0),u.done()}).next(()=>o)}function Qr(t){return gt(t,"mutations")}function to(t){return gt(t,"documentMutations")}function Kb(t){return gt(t,"mutationQueues")}/**
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
 */class $s{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Vn(){return new $s(0)}static Sn(){return new $s(-1)}}/**
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
 */class rz{constructor(e,n){this.referenceDelegate=e,this.Tt=n}allocateTargetId(e){return this.Dn(e).next(n=>{const r=new $s(n.highestTargetId);return n.highestTargetId=r.next(),this.Cn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Dn(e).next(n=>q.fromTimestamp(new Re(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Dn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Dn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Cn(e,i)))}addTargetData(e,n){return this.xn(e,n).next(()=>this.Dn(e).next(r=>(r.targetCount+=1,this.Nn(n,r),this.Cn(e,r))))}updateTargetData(e,n){return this.xn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Js(e).delete(n.targetId)).next(()=>this.Dn(e)).next(r=>(z(r.targetCount>0),r.targetCount-=1,this.Cn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return Js(e).X((o,a)=>{const l=Za(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>w.waitFor(s)).next(()=>i)}forEachTarget(e,n){return Js(e).X((r,i)=>{const s=Za(i);n(s)})}Dn(e){return J1(e).get("targetGlobalKey").next(n=>(z(n!==null),n))}Cn(e,n){return J1(e).put("targetGlobalKey",n)}xn(e,n){return Js(e).put(Bb(this.Tt,n))}Nn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Dn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Ns(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Js(e).X({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const u=Za(a);Bu(n,u.target)&&(s=u,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=ti(e);return n.forEach(o=>{const a=Jt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),w.waitFor(i)}removeMatchingKeys(e,n,r){const i=ti(e);return w.forEach(n,s=>{const o=Jt(s.path);return w.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=ti(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=ti(e);let s=ee();return i.X({range:r,Z:!0},(o,a,l)=>{const u=lr(o[1]),c=new P(u);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=Jt(n.path),i=IDBKeyRange.bound([r],[BC(r)],!1,!0);let s=0;return ti(e).X({index:"documentTargetsIndex",Z:!0,range:i},([o,a],l,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}ie(e,n){return Js(e).get(n).next(r=>r?Za(r):null)}}function Js(t){return gt(t,"targets")}function J1(t){return gt(t,"targetGlobal")}function ti(t){return gt(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z1([t,e],[n,r]){const i=Z(t,n);return i===0?Z(e,r):i}class iz{constructor(e){this.kn=e,this.buffer=new Se(Z1),this.$n=0}Mn(){return++this.$n}On(e){const n=[e,this.Mn()];if(this.buffer.size<this.kn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Z1(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class sz{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Fn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Bn(6e4)}stop(){this.Fn&&(this.Fn.cancel(),this.Fn=null)}get started(){return this.Fn!==null}Bn(e){b("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Fn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Fn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Bi(n)?b("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Vi(n)}await this.Bn(3e5)})}}class oz{constructor(e,n){this.Ln=e,this.params=n}calculateTargetCount(e,n){return this.Ln.qn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return w.resolve(ln.at);const r=new iz(n);return this.Ln.forEachTarget(e,i=>r.On(i.sequenceNumber)).next(()=>this.Ln.Un(e,i=>r.On(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Ln.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Ln.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(b("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(X1)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(b("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),X1):this.Kn(e,n))}getCacheSize(e){return this.Ln.getCacheSize(e)}Kn(e,n){let r,i,s,o,a,l,u;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(b("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),i=this.params.maximumSequenceNumbersToCollect):i=d,o=Date.now(),this.nthSequenceNumber(e,i))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(s=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),Sg()<=de.DEBUG&&b("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-c}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:d})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class az{constructor(e,n){this.db=e,this.garbageCollector=function(r,i){return new oz(r,i)}(this,n)}qn(e){const n=this.Gn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Gn(e){let n=0;return this.Un(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Un(e,n){return this.Qn(e,(r,i)=>n(i))}addReference(e,n,r){return Nc(e,r)}removeReference(e,n,r){return Nc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Nc(e,n)}jn(e,n){return function(r,i){let s=!1;return Kb(r).tt(o=>Hb(r,o,i).next(a=>(a&&(s=!0),w.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Qn(e,(o,a)=>{if(a<=n){const l=this.jn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,q.min()),ti(e).delete([0,Jt(o.path)])))});i.push(l)}}).next(()=>w.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Nc(e,n)}Qn(e,n){const r=ti(e);let i,s=ln.at;return r.X({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:u})=>{o===0?(s!==ln.at&&n(new P(lr(i)),s),s=u,i=l):s=ln.at}).next(()=>{s!==ln.at&&n(new P(lr(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Nc(t,e){return ti(t).put(function(n,r){return{targetId:0,path:Jt(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
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
 */class Wb{constructor(){this.changes=new ji(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,be.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?w.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class lz{constructor(e){this.Tt=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Hi(e).put(r)}removeEntry(e,n,r){return Hi(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Jd(s),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.zn(e,r)))}getEntry(e,n){let r=be.newInvalidDocument(n);return Hi(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(ja(n))},(i,s)=>{r=this.Wn(n,s)}).next(()=>r)}Hn(e,n){let r={size:0,document:be.newInvalidDocument(n)};return Hi(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(ja(n))},(i,s)=>{r={document:this.Wn(n,s),size:eh(s)}}).next(()=>r)}getEntries(e,n){let r=cn();return this.Jn(e,n,(i,s)=>{const o=this.Wn(i,s);r=r.insert(i,o)}).next(()=>r)}Yn(e,n){let r=cn(),i=new ze(P.comparator);return this.Jn(e,n,(s,o)=>{const a=this.Wn(s,o);r=r.insert(s,a),i=i.insert(s,eh(o))}).next(()=>({documents:r,Zn:i}))}Jn(e,n,r){if(n.isEmpty())return w.resolve();let i=new Se(n_);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(ja(i.first()),ja(i.last())),o=i.getIterator();let a=o.getNext();return Hi(e).X({index:"documentKeyIndex",range:s},(l,u,c)=>{const d=P.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&n_(a,d)<0;)r(a,null),a=o.getNext();a&&a.isEqual(d)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?c.j(ja(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i){const s=n.path,o=[s.popLast().toArray(),s.lastSegment(),Jd(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Hi(e).W(IDBKeyRange.bound(o,a,!0)).next(l=>{let u=cn();for(const c of l){const d=this.Wn(P.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);d.isFoundDocument()&&(zu(n,d)||i.has(d.key))&&(u=u.insert(d.key,d))}return u})}getAllFromCollectionGroup(e,n,r,i){let s=cn();const o=t_(n,r),a=t_(n,Cn.max());return Hi(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,u,c)=>{const d=this.Wn(P.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(d.key,d),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new uz(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return e_(e).get("remoteDocumentGlobalKey").next(n=>(z(!!n),n))}zn(e,n){return e_(e).put("remoteDocumentGlobalKey",n)}Wn(e,n){if(n){const r=Wj(this.Tt,n);if(!(r.isNoDocument()&&r.version.isEqual(q.min())))return r}return be.newInvalidDocument(e)}}function Gb(t){return new lz(t)}class uz extends Wb{constructor(e,n){super(),this.Xn=e,this.trackRemovals=n,this.ts=new ji(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new Se((s,o)=>Z(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ts.get(s);if(n.push(this.Xn.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=B1(this.Xn.Tt,o);i=i.add(s.path.popLast());const u=eh(l);r+=u-a.size,n.push(this.Xn.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=B1(this.Xn.Tt,o.convertToNoDocument(q.min()));n.push(this.Xn.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.Xn.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.Xn.updateMetadata(e,r)),w.waitFor(n)}getFromCache(e,n){return this.Xn.Hn(e,n).next(r=>(this.ts.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.Xn.Yn(e,n).next(({documents:r,Zn:i})=>(i.forEach((s,o)=>{this.ts.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function e_(t){return gt(t,"remoteDocumentGlobal")}function Hi(t){return gt(t,"remoteDocumentsV14")}function ja(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function t_(t,e){const n=e.documentKey.path.toArray();return[t,Jd(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function n_(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=Z(n[s],r[s]),i)return i;return i=Z(n.length,r.length),i||(i=Z(n[n.length-2],r[r.length-2]),i||Z(n[n.length-1],r[r.length-1]))}/**
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
 */class cz{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Qb{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&vl(r.mutation,i,un.empty(),Re.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const i=ar();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ja();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ar();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=cn();const o=wl(),a=wl();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof zr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),vl(c.mutation,u,c.mutation.getFieldMask(),Re.now())):o.set(u.key,un.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new cz(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=wl();let i=new ze((o,a)=>o-a),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||un.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||ee()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=Eb();c.forEach(h=>{if(!s.has(h)){const p=gb(n.get(h),r.get(h));p!==null&&d.set(h,p),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return w.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return P.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):rw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):w.resolve(ar());let a=-1,l=s;return o.next(u=>w.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?w.resolve():this.remoteDocumentCache.getEntry(e,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ee())).next(c=>({batchId:a,changes:_b(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new P(n)).next(r=>{let i=Ja();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ja();return this.indexManager.getCollectionParents(e,i).next(o=>w.forEach(o,a=>{const l=function(u,c){return new jr(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,d)=>{s=s.insert(c,d)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,be.newInvalidDocument(u)))});let o=Ja();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&vl(u.mutation,l,un.empty(),Re.now()),zu(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dz{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return w.resolve(this.es.get(n))}saveBundleMetadata(e,n){var r;return this.es.set(n.id,{id:(r=n).id,version:r.version,createTime:Ye(r.createTime)}),w.resolve()}getNamedQuery(e,n){return w.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(r){return{name:r.name,query:uw(r.bundledQuery),readTime:Ye(r.readTime)}}(n)),w.resolve()}}/**
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
 */class hz{constructor(){this.overlays=new ze(P.comparator),this.ss=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ar();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ce(e,n,s)}),w.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ss.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ss.delete(r)),w.resolve()}getOverlaysForCollection(e,n,r){const i=ar(),s=n.length+1,o=new P(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return w.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ze((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=ar(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=ar(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return w.resolve(a)}ce(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(r.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new lw(n,r));let s=this.ss.get(n);s===void 0&&(s=ee(),this.ss.set(n,s)),this.ss.set(n,s.add(r.key))}}/**
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
 */class hw{constructor(){this.rs=new Se(ot.os),this.us=new Se(ot.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const r=new ot(e,n);this.rs=this.rs.add(r),this.us=this.us.add(r)}hs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ls(new ot(e,n))}fs(e,n){e.forEach(r=>this.removeReference(r,n))}ds(e){const n=new P(new ue([])),r=new ot(n,e),i=new ot(n,e+1),s=[];return this.us.forEachInRange([r,i],o=>{this.ls(o),s.push(o.key)}),s}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new P(new ue([])),r=new ot(n,e),i=new ot(n,e+1);let s=ee();return this.us.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ot(e,0),r=this.rs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ot{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return P.comparator(e.key,n.key)||Z(e.gs,n.gs)}static cs(e,n){return Z(e.gs,n.gs)||P.comparator(e.key,n.key)}}/**
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
 */class fz{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new Se(ot.os)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ow(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new ot(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Ts(r),s=i<0?0:i;return w.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ot(n,0),i=new ot(n,Number.POSITIVE_INFINITY),s=[];return this.ps.forEachInRange([r,i],o=>{const a=this.Is(o.gs);s.push(a)}),w.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Se(Z);return n.forEach(i=>{const s=new ot(i,0),o=new ot(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([s,o],a=>{r=r.add(a.gs)})}),w.resolve(this.Es(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;P.isDocumentKey(s)||(s=s.child(""));const o=new ot(new P(s),0);let a=new Se(Z);return this.ps.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gs)),!0)},o),w.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(r=>{const i=this.Is(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){z(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ps;return w.forEach(n.mutations,i=>{const s=new ot(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=r})}Pn(e){}containsKey(e,n){const r=new ot(n,0),i=this.ps.firstAfterOrEqual(r);return w.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class pz{constructor(e){this.Rs=e,this.docs=new ze(P.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return w.resolve(r?r.document.mutableCopy():be.newInvalidDocument(n))}getEntries(e,n){let r=cn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():be.newInvalidDocument(i))}),w.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=cn();const o=n.path,a=new P(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Jv(qC(c),r)<=0||(i.has(c.key)||zu(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return w.resolve(s)}getAllFromCollectionGroup(e,n,r,i){U()}Ps(e,n){return w.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new mz(this)}getSize(e){return w.resolve(this.size)}}class mz extends Wb{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(r)}),w.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
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
 */class gz{constructor(e){this.persistence=e,this.vs=new ji(n=>Ns(n),Bu),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.bs=0,this.Vs=new hw,this.targetCount=0,this.Ss=$s.Vn()}forEachTarget(e,n){return this.vs.forEach((r,i)=>n(i)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),w.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new $s(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.xn(n),w.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.vs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),w.waitFor(s).next(()=>i)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const r=this.vs.get(n)||null;return w.resolve(r)}addMatchingKeys(e,n,r){return this.Vs.hs(n,r),w.resolve()}removeMatchingKeys(e,n,r){this.Vs.fs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),w.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),w.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Vs.ws(n);return w.resolve(r)}containsKey(e,n){return w.resolve(this.Vs.containsKey(n))}}/**
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
 */class Yb{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new ln(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new gz(this),this.indexManager=new tz,this.remoteDocumentCache=function(r){return new pz(r)}(r=>this.referenceDelegate.ks(r)),this.Tt=new Vb(n),this.$s=new dz(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new hz,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ds[e.toKey()];return r||(r=new fz(n,this.referenceDelegate),this.Ds[e.toKey()]=r),r}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$s}runTransaction(e,n,r){b("MemoryPersistence","Starting transaction:",e);const i=new yz(this.Cs.next());return this.referenceDelegate.Ms(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Fs(e,n){return w.or(Object.values(this.Ds).map(r=>()=>r.containsKey(e,n)))}}class yz extends KC{constructor(e){super(),this.currentSequenceNumber=e}}class Nf{constructor(e){this.persistence=e,this.Bs=new hw,this.Ls=null}static qs(e){return new Nf(e)}get Us(){if(this.Ls)return this.Ls;throw U()}addReference(e,n,r){return this.Bs.addReference(r,n),this.Us.delete(r.toString()),w.resolve()}removeReference(e,n,r){return this.Bs.removeReference(r,n),this.Us.add(r.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),w.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Us.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ms(){this.Ls=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.Us,r=>{const i=P.fromPath(r);return this.Ks(e,i).next(s=>{s||n.removeEntry(i,q.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(r=>{r?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return w.or([()=>w.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Fs(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vz{constructor(e){this.Tt=e}F(e,n,r,i){const s=new Sf("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",V1,{unique:!0}),a.createObjectStore("documentMutations")}(e),r_(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=w.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),r_(e)),o=o.next(()=>function(a){const l=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:q.min().toTimestamp(),targetCount:0};return l.put("targetGlobalKey",u)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,l){return l.store("mutations").W().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",V1,{unique:!0});const c=l.store("mutations"),d=u.map(h=>c.put(h));return w.waitFor(d)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Gs(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Qs(s)))),r<7&&i>=7&&(o=o.next(()=>this.js(s))),r<8&&i>=8&&(o=o.next(()=>this.zs(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.Ws(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const l=a.createObjectStore("documentOverlays",{keyPath:jj});l.createIndex("collectionPathOverlayIndex",zj,{unique:!1}),l.createIndex("collectionGroupOverlayIndex",qj,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const l=a.createObjectStore("remoteDocumentsV14",{keyPath:Dj});l.createIndex("documentKeyIndex",Pj),l.createIndex("collectionGroupIndex",Rj)}(e)).next(()=>this.Hs(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.Js(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:Fj}).createIndex("sequenceNumberIndex",Uj,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:Vj}).createIndex("documentKeyIndex",Bj,{unique:!1})}(e))),o}Qs(e){let n=0;return e.store("remoteDocuments").X((r,i)=>{n+=eh(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Gs(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(i=>w.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>w.forEach(a,l=>{z(l.userId===s.userId);const u=Xi(this.Tt,l);return qb(e,s.userId,u).next(()=>{})}))}))}js(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.X((o,a)=>{const l=new ue(o),u=function(c){return[0,Jt(c)]}(l);s.push(n.get(u).next(c=>c?w.resolve():(d=>n.put({targetId:0,path:Jt(d),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>w.waitFor(s))})}zs(e,n){e.createObjectStore("collectionParents",{keyPath:Mj});const r=n.store("collectionParents"),i=new dw,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Jt(l)})}};return n.store("remoteDocuments").X({Z:!0},(o,a)=>{const l=new ue(o);return s(l.popLast())}).next(()=>n.store("documentMutations").X({Z:!0},([o,a,l],u)=>{const c=lr(a);return s(c.popLast())}))}Ws(e){const n=e.store("targets");return n.X((r,i)=>{const s=Za(i),o=Bb(this.Tt,s);return n.put(o)})}Hs(e,n){const r=n.store("remoteDocuments"),i=[];return r.X((s,o)=>{const a=n.store("remoteDocumentsV14"),l=(u=o,u.document?new P(ue.fromString(u.document.name).popFirst(5)):u.noDocument?P.fromSegments(u.noDocument.path):u.unknownDocument?P.fromSegments(u.unknownDocument.path):U()).path.toArray();var u;/**
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
*/const c={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>w.waitFor(i))}Js(e,n){const r=n.store("mutations"),i=Gb(this.Tt),s=new Yb(Nf.qs,this.Tt.oe);return r.W().next(o=>{const a=new Map;return o.forEach(l=>{var u;let c=(u=a.get(l.userId))!==null&&u!==void 0?u:ee();Xi(this.Tt,l).keys().forEach(d=>c=c.add(d)),a.set(l.userId,c)}),w.forEach(a,(l,u)=>{const c=new lt(u),d=Af.ue(this.Tt,c),h=s.getIndexManager(c),p=xf.ue(c,this.Tt,h,s.referenceDelegate);return new Qb(i,p,d,h).recalculateAndSaveOverlaysForDocumentKeys(new Og(n,ln.at),l).next()})})}}function r_(t){t.createObjectStore("targetDocuments",{keyPath:$j}).createIndex("documentTargetsIndex",Lj,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Oj,{unique:!0}),t.createObjectStore("targetGlobal")}const qp="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class fw{constructor(e,n,r,i,s,o,a,l,u,c,d=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Ys=s,this.window=o,this.document=a,this.Zs=u,this.Xs=c,this.ti=d,this.Cs=null,this.xs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ei=null,this.inForeground=!1,this.ni=null,this.si=null,this.ii=Number.NEGATIVE_INFINITY,this.ri=h=>Promise.resolve(),!fw.C())throw new C(E.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new az(this,i),this.oi=n+"main",this.Tt=new Vb(l),this.ui=new Kn(this.oi,this.ti,new vz(this.Tt)),this.Ns=new rz(this.referenceDelegate,this.Tt),this.remoteDocumentCache=Gb(this.Tt),this.$s=new Gj,this.window&&this.window.localStorage?this.ci=this.window.localStorage:(this.ci=null,c===!1&&Ge("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new C(E.FAILED_PRECONDITION,qp);return this.hi(),this.li(),this.fi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ns.getHighestSequenceNumber(e))}).then(e=>{this.Cs=new ln(e,this.Zs)}).then(()=>{this.xs=!0}).catch(e=>(this.ui&&this.ui.close(),Promise.reject(e)))}di(e){return this.ri=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ui.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ys.enqueueAndForget(async()=>{this.started&&await this.ai()}))}ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Dc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this._i(e).next(n=>{n||(this.isPrimary=!1,this.Ys.enqueueRetryable(()=>this.ri(!1)))})}).next(()=>this.wi(e)).next(n=>this.isPrimary&&!n?this.mi(e).next(()=>!1):!!n&&this.gi(e).next(()=>!0))).catch(e=>{if(Bi(e))return b("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return b("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ys.enqueueRetryable(()=>this.ri(e)),this.isPrimary=e})}_i(e){return za(e).get("owner").next(n=>w.resolve(this.yi(n)))}pi(e){return Dc(e).delete(this.clientId)}async Ii(){if(this.isPrimary&&!this.Ti(this.ii,18e5)){this.ii=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=gt(n,"clientMetadata");return r.W().next(i=>{const s=this.Ei(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return w.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.ci)for(const n of e)this.ci.removeItem(this.Ai(n.clientId))}}fi(){this.si=this.Ys.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ai().then(()=>this.Ii()).then(()=>this.fi()))}yi(e){return!!e&&e.ownerId===this.clientId}wi(e){return this.Xs?w.resolve(!0):za(e).get("owner").next(n=>{if(n!==null&&this.Ti(n.leaseTimestampMs,5e3)&&!this.Ri(n.ownerId)){if(this.yi(n)&&this.networkEnabled)return!0;if(!this.yi(n)){if(!n.allowTabSynchronization)throw new C(E.FAILED_PRECONDITION,qp);return!1}}return!(!this.networkEnabled||!this.inForeground)||Dc(e).W().next(r=>this.Ei(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&b("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.xs=!1,this.Pi(),this.si&&(this.si.cancel(),this.si=null),this.vi(),this.bi(),await this.ui.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Og(e,ln.at);return this.mi(n).next(()=>this.pi(n))}),this.ui.close(),this.Vi()}Ei(e,n){return e.filter(r=>this.Ti(r.updateTimeMs,n)&&!this.Ri(r.clientId))}Si(){return this.runTransaction("getActiveClients","readonly",e=>Dc(e).W().next(n=>this.Ei(n,18e5).map(r=>r.clientId)))}get started(){return this.xs}getMutationQueue(e,n){return xf.ue(e,this.Tt,n,this.referenceDelegate)}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new nz(e,this.Tt.oe.databaseId)}getDocumentOverlayCache(e){return Af.ue(this.Tt,e)}getBundleCache(){return this.$s}runTransaction(e,n,r){b("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=(o=this.ti)===15?Kj:o===14?Ub:o===13?Fb:o===12?Hj:o===11?Mb:void U();var o;let a;return this.ui.runTransaction(e,i,s,l=>(a=new Og(l,this.Cs?this.Cs.next():ln.at),n==="readwrite-primary"?this._i(a).next(u=>!!u||this.wi(a)).next(u=>{if(!u)throw Ge(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ys.enqueueRetryable(()=>this.ri(!1)),new C(E.FAILED_PRECONDITION,HC);return r(a)}).next(u=>this.gi(a).next(()=>u)):this.Di(a).next(()=>r(a)))).then(l=>(a.raiseOnCommittedEvent(),l))}Di(e){return za(e).get("owner").next(n=>{if(n!==null&&this.Ti(n.leaseTimestampMs,5e3)&&!this.Ri(n.ownerId)&&!this.yi(n)&&!(this.Xs||this.allowTabSynchronization&&n.allowTabSynchronization))throw new C(E.FAILED_PRECONDITION,qp)})}gi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return za(e).put("owner",n)}static C(){return Kn.C()}mi(e){const n=za(e);return n.get("owner").next(r=>this.yi(r)?(b("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):w.resolve())}Ti(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Ge(`Detected an update time that is in the future: ${e} > ${r}`),!1))}hi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ni=()=>{this.Ys.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ai()))},this.document.addEventListener("visibilitychange",this.ni),this.inForeground=this.document.visibilityState==="visible")}vi(){this.ni&&(this.document.removeEventListener("visibilitychange",this.ni),this.ni=null)}li(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ei=()=>{this.Pi();const n=/(?:Version|Mobile)\/1[456]/;aL()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.Ys.enterRestrictedMode(!0),this.Ys.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ei))}bi(){this.ei&&(this.window.removeEventListener("pagehide",this.ei),this.ei=null)}Ri(e){var n;try{const r=((n=this.ci)===null||n===void 0?void 0:n.getItem(this.Ai(e)))!==null;return b("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ge("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Pi(){if(this.ci)try{this.ci.setItem(this.Ai(this.clientId),String(Date.now()))}catch(e){Ge("Failed to set zombie client id.",e)}}Vi(){if(this.ci)try{this.ci.removeItem(this.Ai(this.clientId))}catch{}}Ai(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function za(t){return gt(t,"owner")}function Dc(t){return gt(t,"clientMetadata")}function pw(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class mw{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ci=r,this.xi=i}static Ni(e,n){let r=ee(),i=ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new mw(e,n.fromCache,r,i)}}/**
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
 */class Xb{constructor(){this.ki=!1}initialize(e,n){this.$i=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Mi(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Fi(e,n))}Mi(e,n){if(N1(n))return w.resolve(null);let r=pn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Xd(n,null,"F"),r=pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ee(...s);return this.$i.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Bi(n,a);return this.Li(n,u,o,l.readTime)?this.Mi(e,Xd(n,null,"F")):this.qi(e,u,n,l)}))})))}Oi(e,n,r,i){return N1(n)||i.isEqual(q.min())?this.Fi(e,n):this.$i.getDocuments(e,r).next(s=>{const o=this.Bi(n,s);return this.Li(n,o,r,i)?this.Fi(e,n):(Sg()<=de.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Dg(n)),this.qi(e,o,n,zC(i,-1)))})}Bi(e,n){let r=new Se(lb(e));return n.forEach((i,s)=>{zu(e,s)&&(r=r.add(s))}),r}Li(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Fi(e,n){return Sg()<=de.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",Dg(n)),this.$i.getDocumentsMatchingQuery(e,n,Cn.min())}qi(e,n,r,i){return this.$i.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wz{constructor(e,n,r,i){this.persistence=e,this.Ui=n,this.Tt=i,this.Ki=new ze(Z),this.Gi=new ji(s=>Ns(s),Bu),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.$s=e.getBundleCache(),this.zi(r)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Qb(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function Jb(t,e,n,r){return new wz(t,e,n,r)}async function Zb(t,e){const n=M(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.zi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ee();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Wi:u,removedBatchIds:o,addedBatchIds:a}))})})}function Iz(t,e){const n=M(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,d=c.keys();let h=w.resolve();return d.forEach(p=>{h=h.next(()=>u.getEntry(a,p)).next(y=>{const v=l.docVersions.get(p);z(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),h.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ee();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function eA(t){const e=M(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function _z(t,e){const n=M(t),r=e.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const a=[];e.targetChanges.forEach((c,d)=>{const h=i.get(d);if(!h)return;a.push(n.Ns.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Ns.addMatchingKeys(s,c.addedDocuments,d)));let p=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(d)?p=p.withResumeToken(rt.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(d,p),function(y,v,T){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(h,p,c)&&a.push(n.Ns.updateTargetData(s,p))});let l=cn(),u=ee();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(tA(s,o,e.documentUpdates).next(c=>{l=c.Hi,u=c.Ji})),!r.isEqual(q.min())){const c=n.Ns.getLastRemoteSnapshotVersion(s).next(d=>n.Ns.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return w.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ki=i,s))}function tA(t,e,n){let r=ee(),i=ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=cn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(q.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):b("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Hi:o,Ji:i}})}function Ez(t,e){const n=M(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Xo(t,e){const n=M(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ns.getTargetData(r,e).next(s=>s?(i=s,w.resolve(i)):n.Ns.allocateTargetId(r).next(o=>(i=new vi(e,o,0,r.currentSequenceNumber),n.Ns.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ki.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(r.targetId,r),n.Gi.set(e,r.targetId)),r})}async function Jo(t,e,n){const r=M(t),i=r.Ki.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Bi(o))throw o;b("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ki=r.Ki.remove(e),r.Gi.delete(i.target)}function th(t,e,n){const r=M(t);let i=q.min(),s=ee();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=M(a),d=c.Gi.get(u);return d!==void 0?w.resolve(c.Ki.get(d)):c.Ns.getTargetData(l,u)}(r,o,pn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ns.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Ui.getDocumentsMatchingQuery(o,e,n?i:q.min(),n?s:ee())).next(a=>(iA(r,ab(e),a),{documents:a,Yi:s})))}function nA(t,e){const n=M(t),r=M(n.Ns),i=n.Ki.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ie(s,e).next(o=>o?o.target:null))}function rA(t,e){const n=M(t),r=n.Qi.get(e)||q.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.ji.getAllFromCollectionGroup(i,e,zC(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(iA(n,e,i),i))}function iA(t,e,n){let r=t.Qi.get(e)||q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Qi.set(e,r)}async function Sz(t,e,n,r){const i=M(t);let s=ee(),o=cn();for(const u of n){const c=e.Zi(u.metadata.name);u.document&&(s=s.add(c));const d=e.Xi(u);d.setReadTime(e.tr(u.metadata.readTime)),o=o.insert(c,d)}const a=i.ji.newChangeBuffer({trackRemovals:!0}),l=await Xo(i,function(u){return pn(ya(ue.fromString(`__bundle__/docs/${u}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>tA(u,a,o).next(c=>(a.apply(u),c)).next(c=>i.Ns.removeMatchingKeysForTargetId(u,l.targetId).next(()=>i.Ns.addMatchingKeys(u,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,c.Hi,c.Ji)).next(()=>c.Hi)))}async function Tz(t,e,n=ee()){const r=await Xo(t,pn(uw(e.bundledQuery))),i=M(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Ye(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.$s.saveNamedQuery(s,e);const a=r.withResumeToken(rt.EMPTY_BYTE_STRING,o);return i.Ki=i.Ki.insert(a.targetId,a),i.Ns.updateTargetData(s,a).next(()=>i.Ns.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Ns.addMatchingKeys(s,n,r.targetId)).next(()=>i.$s.saveNamedQuery(s,e))})}function i_(t,e){return`firestore_clients_${t}_${e}`}function s_(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Hp(t,e){return`firestore_targets_${t}_${e}`}class nh{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static er(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new C(i.error.code,i.error.message))),o?new nh(e,n,i.state,s):(Ge("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}nr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Il{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static er(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new C(r.error.code,r.error.message))),s?new Il(e,r.state,i):(Ge("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}nr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class rh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static er(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=bf();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=GC(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new rh(e,s):(Ge("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class gw{constructor(e,n){this.clientId=e,this.onlineState=n}static er(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new gw(n.clientId,n.onlineState):(Ge("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Fg{constructor(){this.activeTargetIds=bf()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Kp{constructor(e,n,r,i,s){this.window=e,this.Ys=n,this.persistenceKey=r,this.rr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ur=this.cr.bind(this),this.ar=new ze(Z),this.started=!1,this.hr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.lr=i_(this.persistenceKey,this.rr),this.dr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.ar=this.ar.insert(this.rr,new Fg),this._r=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.wr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.mr=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.gr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.yr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.ur)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Si();for(const r of e){if(r===this.rr)continue;const i=this.getItem(i_(this.persistenceKey,r));if(i){const s=rh.er(r,i);s&&(this.ar=this.ar.insert(s.clientId,s))}}this.pr();const n=this.storage.getItem(this.gr);if(n){const r=this.Ir(n);r&&this.Tr(r)}for(const r of this.hr)this.cr(r);this.hr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.dr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Er(this.ar)}isActiveQueryTarget(e){let n=!1;return this.ar.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ar(e,"pending")}updateMutationState(e,n,r){this.Ar(e,n,r),this.Rr(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Hp(this.persistenceKey,e));if(r){const i=Il.er(e,r);i&&(n=i.state)}}return this.Pr.sr(e),this.pr(),n}removeLocalQueryTarget(e){this.Pr.ir(e),this.pr()}isLocalQueryTarget(e){return this.Pr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Hp(this.persistenceKey,e))}updateQueryState(e,n,r){this.vr(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Rr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Vr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ur),this.removeItem(this.lr),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return b("SharedClientState","READ",e,n),n}setItem(e,n){b("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){b("SharedClientState","REMOVE",e),this.storage.removeItem(e)}cr(e){const n=e;if(n.storageArea===this.storage){if(b("SharedClientState","EVENT",n.key,n.newValue),n.key===this.lr)return void Ge("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ys.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this._r.test(n.key)){if(n.newValue==null){const r=this.Sr(n.key);return this.Dr(r,null)}{const r=this.Cr(n.key,n.newValue);if(r)return this.Dr(r.clientId,r)}}else if(this.wr.test(n.key)){if(n.newValue!==null){const r=this.Nr(n.key,n.newValue);if(r)return this.kr(r)}}else if(this.mr.test(n.key)){if(n.newValue!==null){const r=this.$r(n.key,n.newValue);if(r)return this.Mr(r)}}else if(n.key===this.gr){if(n.newValue!==null){const r=this.Ir(n.newValue);if(r)return this.Tr(r)}}else if(n.key===this.dr){const r=function(i){let s=ln.at;if(i!=null)try{const o=JSON.parse(i);z(typeof o=="number"),s=o}catch(o){Ge("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==ln.at&&this.sequenceNumberHandler(r)}else if(n.key===this.yr){const r=this.Or(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Fr(i)))}}}else this.hr.push(n)})}}get Pr(){return this.ar.get(this.rr)}pr(){this.setItem(this.lr,this.Pr.nr())}Ar(e,n,r){const i=new nh(this.currentUser,e,n,r),s=s_(this.persistenceKey,this.currentUser,e);this.setItem(s,i.nr())}Rr(e){const n=s_(this.persistenceKey,this.currentUser,e);this.removeItem(n)}br(e){const n={clientId:this.rr,onlineState:e};this.storage.setItem(this.gr,JSON.stringify(n))}vr(e,n,r){const i=Hp(this.persistenceKey,e),s=new Il(e,n,r);this.setItem(i,s.nr())}Vr(e){const n=JSON.stringify(Array.from(e));this.setItem(this.yr,n)}Sr(e){const n=this._r.exec(e);return n?n[1]:null}Cr(e,n){const r=this.Sr(e);return rh.er(r,n)}Nr(e,n){const r=this.wr.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return nh.er(new lt(s),i,n)}$r(e,n){const r=this.mr.exec(e),i=Number(r[1]);return Il.er(i,n)}Ir(e){return gw.er(e)}Or(e){return JSON.parse(e)}async kr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Br(e.batchId,e.state,e.error);b("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Mr(e){return this.syncEngine.Lr(e.targetId,e.state,e.error)}Dr(e,n){const r=n?this.ar.insert(e,n):this.ar.remove(e),i=this.Er(this.ar),s=this.Er(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.qr(o,a).then(()=>{this.ar=r})}Tr(e){this.ar.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Er(e){let n=bf();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class sA{constructor(){this.Ur=new Fg,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,r){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Fg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class kz{Gr(e){}shutdown(){}}/**
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
 */class o_{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pc=null;function Wp(){return Pc===null?Pc=268435456+Math.round(2147483648*Math.random()):Pc++,"0x"+Pc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cz={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class bz{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
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
 */const Mt="WebChannelConnection";class Az extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,r,i,s){const o=Wp(),a=this.fo(e,n);b("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this._o(l,i,s),this.wo(e,a,l,r).then(u=>(b("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw qo("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}mo(e,n,r,i,s,o){return this.lo(e,n,r,i,s)}_o(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ga,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}fo(e,n){const r=Cz[e];return`${this.co}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,r,i){const s=Wp();return new Promise((o,a)=>{const l=new CB;l.setWithCredentials(!0),l.listenOnce(SB.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case jp.NO_ERROR:const c=l.getResponseJson();b(Mt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case jp.TIMEOUT:b(Mt,`RPC '${e}' ${s} timed out`),a(new C(E.DEADLINE_EXCEEDED,"Request time out"));break;case jp.HTTP_ERROR:const d=l.getStatus();if(b(Mt,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const p=h==null?void 0:h.error;if(p&&p.status&&p.message){const y=function(v){const T=v.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(T)>=0?T:E.UNKNOWN}(p.status);a(new C(y,p.message))}else a(new C(E.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new C(E.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{b(Mt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);b(Mt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}yo(e,n,r){const i=Wp(),s=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=_B(),a=EB(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new kB({})),this._o(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");b(Mt,`Creating RPC '${e}' stream ${i}: ${u}`,l);const c=o.createWebChannel(u,l);let d=!1,h=!1;const p=new bz({Yr:v=>{h?b(Mt,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(d||(b(Mt,`Opening RPC '${e}' stream ${i} transport.`),c.open(),d=!0),b(Mt,`RPC '${e}' stream ${i} sending:`,v),c.send(v))},Zr:()=>c.close()}),y=(v,T,m)=>{v.listen(T,f=>{try{m(f)}catch(g){setTimeout(()=>{throw g},0)}})};return y(c,Cc.EventType.OPEN,()=>{h||b(Mt,`RPC '${e}' stream ${i} transport opened.`)}),y(c,Cc.EventType.CLOSE,()=>{h||(h=!0,b(Mt,`RPC '${e}' stream ${i} transport closed`),p.oo())}),y(c,Cc.EventType.ERROR,v=>{h||(h=!0,qo(Mt,`RPC '${e}' stream ${i} transport errored:`,v),p.oo(new C(E.UNAVAILABLE,"The operation could not be completed")))}),y(c,Cc.EventType.MESSAGE,v=>{var T;if(!h){const m=v.data[0];z(!!m);const f=m,g=f.error||((T=f[0])===null||T===void 0?void 0:T.error);if(g){b(Mt,`RPC '${e}' stream ${i} received error:`,g);const _=g.status;let k=function(D){const R=Xe[D];if(R!==void 0)return wb(R)}(_),A=g.message;k===void 0&&(k=E.INTERNAL,A="Unknown error status: "+_+" with message "+g.message),h=!0,p.oo(new C(k,A)),c.close()}else b(Mt,`RPC '${e}' stream ${i} received:`,m),p.uo(m)}}),y(a,TB.STAT_EVENT,v=>{v.stat===g1.PROXY?b(Mt,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===g1.NOPROXY&&b(Mt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.ro()},0),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function oA(){return typeof window<"u"?window:null}function nd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(t){return new wj(t,!0)}/**
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
 */class yw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ys=e,this.timerId=n,this.po=r,this.Io=i,this.To=s,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}Po(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.bo()),r=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-r);i>0&&b("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}bo(){return(Math.random()-.5)*this.Eo}}/**
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
 */class aA{constructor(e,n,r,i,s,o,a,l){this.Ys=e,this.So=r,this.Do=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new yw(e,n)}$o(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.$o()&&await this.close(0)}Fo(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(Ge(n.toString()),Ge("Using maximum backoff delay to prevent overloading the backend."),this.ko.Po()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Co===n&&this.jo(r,i)},r=>{e(()=>{const i=new C(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.zo(i)})})}jo(e,n){const r=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{r(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{r(()=>this.zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return b("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xz extends aA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.Tt=s}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=Ej(this.Tt,e),r=function(i){if(!("targetChange"in i))return q.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?q.min():s.readTime?Ye(s.readTime):q.min()}(e);return this.listener.Ho(n,r)}Jo(e){const n={};n.database=lu(this.Tt),n.addTarget=function(i,s){let o;const a=s.target;return o=Qd(a)?{documents:Nb(i,a)}:{query:Db(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=kb(i,s.resumeToken):s.snapshotVersion.compareTo(q.min())>0&&(o.readTime=Yo(i,s.snapshotVersion.toTimestamp())),o}(this.Tt,e);const r=Tj(this.Tt,e);r&&(n.labels=r),this.qo(n)}Yo(e){const n={};n.database=lu(this.Tt),n.removeTarget=e,this.qo(n)}}class Nz extends aA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.Tt=s,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=Sj(e.writeResults,e.commitTime),r=Ye(e.commitTime);return this.listener.eu(r,n)}return z(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=lu(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>uu(this.Tt,r))};this.qo(n)}}/**
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
 */class Dz extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new C(E.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.lo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new C(E.UNKNOWN,i.toString())})}mo(e,n,r,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.mo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new C(E.UNKNOWN,s.toString())})}terminate(){this.iu=!0}}class Pz{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(Ge(n),this.cu=!1):b("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
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
 */class Rz{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=s,this.yu.Gr(o=>{r.enqueueAndForget(async()=>{zi(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=M(a);l.mu.add(4),await Ia(l),l.pu.set("Unknown"),l.mu.delete(4),await Gu(l)}(this))})}),this.pu=new Pz(r,i)}}async function Gu(t){if(zi(t))for(const e of t.gu)await e(!0)}async function Ia(t){for(const e of t.gu)await e(!1)}function Df(t,e){const n=M(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),Iw(n)?ww(n):Ea(n).Mo()&&vw(n,e))}function cu(t,e){const n=M(t),r=Ea(n);n.wu.delete(e),r.Mo()&&lA(n,e),n.wu.size===0&&(r.Mo()?r.Bo():zi(n)&&n.pu.set("Unknown"))}function vw(t,e){t.Iu.Ot(e.targetId),Ea(t).Jo(e)}function lA(t,e){t.Iu.Ot(e),Ea(t).Yo(e)}function ww(t){t.Iu=new mj({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),Ea(t).start(),t.pu.au()}function Iw(t){return zi(t)&&!Ea(t).$o()&&t.wu.size>0}function zi(t){return M(t).mu.size===0}function uA(t){t.Iu=void 0}async function Oz(t){t.wu.forEach((e,n)=>{vw(t,e)})}async function $z(t,e){uA(t),Iw(t)?(t.pu.fu(e),ww(t)):t.pu.set("Unknown")}async function Lz(t,e,n){if(t.pu.set("Online"),e instanceof Tb&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.wu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.wu.delete(o),r.Iu.removeTarget(o))}(t,e)}catch(r){b("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ih(t,r)}else if(e instanceof ed?t.Iu.Qt(e):e instanceof Sb?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(q.min()))try{const r=await eA(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Iu.ee(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.wu.get(l);u&&i.wu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.wu.get(a);if(!l)return;i.wu.set(a,l.withResumeToken(rt.EMPTY_BYTE_STRING,l.snapshotVersion)),lA(i,a);const u=new vi(l.target,a,1,l.sequenceNumber);vw(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){b("RemoteStore","Failed to raise snapshot:",r),await ih(t,r)}}async function ih(t,e,n){if(!Bi(e))throw e;t.mu.add(1),await Ia(t),t.pu.set("Offline"),n||(n=()=>eA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await Gu(t)})}function cA(t,e){return e().catch(n=>ih(t,n,e))}async function _a(t){const e=M(t),n=Di(e);let r=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;Mz(e);)try{const i=await Ez(e.localStore,r);if(i===null){e._u.length===0&&n.Bo();break}r=i.batchId,Fz(e,i)}catch(i){await ih(e,i)}dA(e)&&hA(e)}function Mz(t){return zi(t)&&t._u.length<10}function Fz(t,e){t._u.push(e);const n=Di(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function dA(t){return zi(t)&&!Di(t).$o()&&t._u.length>0}function hA(t){Di(t).start()}async function Uz(t){Di(t).su()}async function Vz(t){const e=Di(t);for(const n of t._u)e.tu(n.mutations)}async function Bz(t,e,n){const r=t._u.shift(),i=aw.from(r,e,n);await cA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await _a(t)}async function jz(t,e){e&&Di(t).Xo&&await async function(n,r){if(i=r.code,vb(i)&&i!==E.ABORTED){const s=n._u.shift();Di(n).Fo(),await cA(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await _a(n)}var i}(t,e),dA(t)&&hA(t)}async function a_(t,e){const n=M(t);n.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const r=zi(n);n.mu.add(3),await Ia(n),r&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await Gu(n)}async function Ug(t,e){const n=M(t);e?(n.mu.delete(2),await Gu(n)):e||(n.mu.add(2),await Ia(n),n.pu.set("Unknown"))}function Ea(t){return t.Tu||(t.Tu=function(e,n,r){const i=M(e);return i.ru(),new xz(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,r)}(t.datastore,t.asyncQueue,{Xr:Oz.bind(null,t),no:$z.bind(null,t),Ho:Lz.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.Fo(),Iw(t)?ww(t):t.pu.set("Unknown")):(await t.Tu.stop(),uA(t))})),t.Tu}function Di(t){return t.Eu||(t.Eu=function(e,n,r){const i=M(e);return i.ru(),new Nz(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,r)}(t.datastore,t.asyncQueue,{Xr:Uz.bind(null,t),no:jz.bind(null,t),nu:Vz.bind(null,t),eu:Bz.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.Fo(),await _a(t)):(await t.Eu.stop(),t._u.length>0&&(b("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
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
 */class _w{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new dt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new _w(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sa(t,e){if(Ge("AsyncQueue",`${e}: ${t}`),Bi(t))return new C(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class No{constructor(e){this.comparator=e?(n,r)=>e(n,r)||P.comparator(n.key,r.key):(n,r)=>P.comparator(n.key,r.key),this.keyedMap=Ja(),this.sortedSet=new ze(this.comparator)}static emptySet(e){return new No(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof No)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new No;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class l_{constructor(){this.Au=new ze(P.comparator)}track(e){const n=e.doc.key,r=this.Au.get(n);r?e.type!==0&&r.type===3?this.Au=this.Au.insert(n,e):e.type===3&&r.type!==1?this.Au=this.Au.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Au=this.Au.remove(n):e.type===1&&r.type===2?this.Au=this.Au.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):U():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,r)=>{e.push(r)}),e}}class Zo{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Zo(e,n,No.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ju(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class zz{constructor(){this.Pu=void 0,this.listeners=[]}}class qz{constructor(){this.queries=new ji(e=>ob(e),ju),this.onlineState="Unknown",this.vu=new Set}}async function Ew(t,e){const n=M(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new zz),i)try{s.Pu=await n.onListen(r)}catch(o){const a=Sa(o,`Initialization of query '${Dg(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Pu&&e.Vu(s.Pu)&&Tw(n)}async function Sw(t,e){const n=M(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Hz(t,e){const n=M(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Vu(i)&&(r=!0);o.Pu=i}}r&&Tw(n)}function Kz(t,e,n){const r=M(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Tw(t){t.vu.forEach(e=>{e.next()})}class kw{constructor(e,n,r){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=r||{}}Vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Zo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.$u||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=Zo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wz{constructor(e,n){this.Mu=e,this.byteLength=n}Ou(){return"metadata"in this.Mu}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){this.Tt=e}Zi(e){return hr(this.Tt,e)}Xi(e){return e.metadata.exists?xb(this.Tt,e.document,!1):be.newNoDocument(this.Zi(e.metadata.name),this.tr(e.metadata.readTime))}tr(e){return Ye(e)}}class Gz{constructor(e,n,r){this.Fu=e,this.localStore=n,this.Tt=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=fA(e)}Bu(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.Mu.namedQuery)this.queries.push(e.Mu.namedQuery);else if(e.Mu.documentMetadata){this.documents.push({metadata:e.Mu.documentMetadata}),e.Mu.documentMetadata.exists||++n;const r=ue.fromString(e.Mu.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Mu.document&&(this.documents[this.documents.length-1].document=e.Mu.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}Lu(e){const n=new Map,r=new u_(this.Tt);for(const i of e)if(i.metadata.queries){const s=r.Zi(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||ee()).add(s);n.set(o,a)}}return n}async complete(){const e=await Sz(this.localStore,new u_(this.Tt),this.documents,this.Fu.id),n=this.Lu(this.documents);for(const r of this.queries)await Tz(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,qu:this.collectionGroups,Uu:e}}}function fA(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class pA{constructor(e){this.key=e}}class mA{constructor(e){this.key=e}}class gA{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=ee(),this.mutatedKeys=ee(),this.ju=lb(e),this.zu=new No(this.ju)}get Wu(){return this.Ku}Hu(e,n){const r=n?n.Ju:new l_,i=n?n.zu:this.zu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const h=i.get(c),p=zu(this.query,d)?d:null,y=!!h&&this.mutatedKeys.has(h.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let T=!1;h&&p?h.data.isEqual(p.data)?y!==v&&(r.track({type:3,doc:p}),T=!0):this.Yu(h,p)||(r.track({type:2,doc:p}),T=!0,(l&&this.ju(p,l)>0||u&&this.ju(p,u)<0)&&(a=!0)):!h&&p?(r.track({type:0,doc:p}),T=!0):h&&!p&&(r.track({type:1,doc:h}),T=!0,(l||u)&&(a=!0)),T&&(p?(o=o.add(p),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{zu:o,Ju:r,Li:a,mutatedKeys:s}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const s=e.Ju.Ru();s.sort((u,c)=>function(d,h){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return p(d)-p(h)}(u.type,c.type)||this.ju(u.doc,c.doc)),this.Zu(r);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,l=a!==this.Gu;return this.Gu=a,s.length!==0||l?{snapshot:new Zo(this.query,e.zu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new l_,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=ee(),this.zu.forEach(r=>{this.ec(r.key)&&(this.Qu=this.Qu.add(r.key))});const n=[];return e.forEach(r=>{this.Qu.has(r)||n.push(new mA(r))}),this.Qu.forEach(r=>{e.has(r)||n.push(new pA(r))}),n}nc(e){this.Ku=e.Yi,this.Qu=ee();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return Zo.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class Qz{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Yz{constructor(e){this.key=e,this.ic=!1}}class Xz{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new ji(a=>ob(a),ju),this.uc=new Map,this.cc=new Set,this.ac=new ze(P.comparator),this.hc=new Map,this.lc=new hw,this.fc={},this.dc=new Map,this._c=$s.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function Jz(t,e){const n=Nw(t);let r,i;const s=n.oc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.sc();else{const o=await Xo(n.localStore,pn(e));n.isPrimaryClient&&Df(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Cw(n,e,r,a==="current",o.resumeToken)}return i}async function Cw(t,e,n,r,i){t.mc=(d,h,p)=>async function(y,v,T,m){let f=v.view.Hu(T);f.Li&&(f=await th(y.localStore,v.query,!1).then(({documents:k})=>v.view.Hu(k,f)));const g=m&&m.targetChanges.get(v.targetId),_=v.view.applyChanges(f,y.isPrimaryClient,g);return Vg(y,v.targetId,_.tc),_.snapshot}(t,d,h,p);const s=await th(t.localStore,e,!0),o=new gA(e,s.Yi),a=o.Hu(s.documents),l=Ku.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Vg(t,n,u.tc);const c=new Qz(e,n,o);return t.oc.set(e,c),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),u.snapshot}async function Zz(t,e){const n=M(t),r=n.oc.get(e),i=n.uc.get(r.targetId);if(i.length>1)return n.uc.set(r.targetId,i.filter(s=>!ju(s,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Jo(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),cu(n.remoteStore,r.targetId),ea(n,r.targetId)}).catch(Vi)):(ea(n,r.targetId),await Jo(n.localStore,r.targetId,!0))}async function e3(t,e,n){const r=Dw(t);try{const i=await function(s,o){const a=M(s),l=Re.now(),u=o.reduce((h,p)=>h.add(p.key),ee());let c,d;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>{let p=cn(),y=ee();return a.ji.getEntries(h,u).next(v=>{p=v,p.forEach((T,m)=>{m.isValidDocument()||(y=y.add(T))})}).next(()=>a.localDocuments.getOverlayedDocuments(h,p)).next(v=>{c=v;const T=[];for(const m of o){const f=uj(m,c.get(m.key).overlayedDocument);f!=null&&T.push(new zr(m.key,f,ib(f.value.mapValue),Pe.exists(!0)))}return a.mutationQueue.addMutationBatch(h,l,T,o)}).next(v=>{d=v;const T=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(h,v.batchId,T)})}).then(()=>({batchId:d.batchId,changes:_b(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.fc[s.currentUser.toKey()];l||(l=new ze(Z)),l=l.insert(o,a),s.fc[s.currentUser.toKey()]=l}(r,i.batchId,n),await qr(r,i.changes),await _a(r.remoteStore)}catch(i){const s=Sa(i,"Failed to persist write");n.reject(s)}}async function yA(t,e){const n=M(t);try{const r=await _z(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.hc.get(s);o&&(z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?z(o.ic):i.removedDocuments.size>0&&(z(o.ic),o.ic=!1))}),await qr(n,r,e)}catch(r){await Vi(r)}}function c_(t,e,n){const r=M(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.oc.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=M(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const d of c.listeners)d.bu(o)&&(l=!0)}),l&&Tw(a)}(r.eventManager,e),i.length&&r.rc.Ho(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function t3(t,e,n){const r=M(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.hc.get(e),s=i&&i.key;if(s){let o=new ze(P.comparator);o=o.insert(s,be.newNoDocument(s,q.min()));const a=ee().add(s),l=new Hu(q.min(),new Map,new Se(Z),o,a);await yA(r,l),r.ac=r.ac.remove(s),r.hc.delete(e),xw(r)}else await Jo(r.localStore,e,!1).then(()=>ea(r,e,n)).catch(Vi)}async function n3(t,e){const n=M(t),r=e.batch.batchId;try{const i=await Iz(n.localStore,e);Aw(n,r,null),bw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await qr(n,i)}catch(i){await Vi(i)}}async function r3(t,e,n){const r=M(t);try{const i=await function(s,o){const a=M(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(z(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);Aw(r,e,n),bw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await qr(r,i)}catch(i){await Vi(i)}}async function i3(t,e){const n=M(t);zi(n.remoteStore)||b("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=M(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.dc.get(r)||[];i.push(e),n.dc.set(r,i)}catch(r){const i=Sa(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function bw(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function Aw(t,e,n){const r=M(t);let i=r.fc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.fc[r.currentUser.toKey()]=i}}function ea(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.uc.get(e))t.oc.delete(r),n&&t.rc.gc(r,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(r=>{t.lc.containsKey(r)||vA(t,r)})}function vA(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(cu(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),xw(t))}function Vg(t,e,n){for(const r of n)r instanceof pA?(t.lc.addReference(r.key,e),s3(t,r)):r instanceof mA?(b("SyncEngine","Document no longer in limbo: "+r.key),t.lc.removeReference(r.key,e),t.lc.containsKey(r.key)||vA(t,r.key)):U()}function s3(t,e){const n=e.key,r=n.path.canonicalString();t.ac.get(n)||t.cc.has(r)||(b("SyncEngine","New document in limbo: "+n),t.cc.add(r),xw(t))}function xw(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new P(ue.fromString(e)),r=t._c.next();t.hc.set(r,new Yz(n)),t.ac=t.ac.insert(n,r),Df(t.remoteStore,new vi(pn(ya(n.path)),r,2,ln.at))}}async function qr(t,e,n){const r=M(t),i=[],s=[],o=[];r.oc.isEmpty()||(r.oc.forEach((a,l)=>{o.push(r.mc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=mw.Ni(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.rc.Ho(i),await async function(a,l){const u=M(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>w.forEach(l,d=>w.forEach(d.Ci,h=>u.persistence.referenceDelegate.addReference(c,d.targetId,h)).next(()=>w.forEach(d.xi,h=>u.persistence.referenceDelegate.removeReference(c,d.targetId,h)))))}catch(c){if(!Bi(c))throw c;b("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const d=c.targetId;if(!c.fromCache){const h=u.Ki.get(d),p=h.snapshotVersion,y=h.withLastLimboFreeSnapshotVersion(p);u.Ki=u.Ki.insert(d,y)}}}(r.localStore,s))}async function o3(t,e){const n=M(t);if(!n.currentUser.isEqual(e)){b("SyncEngine","User change. New user:",e.toKey());const r=await Zb(n.localStore,e);n.currentUser=e,function(i,s){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new C(E.CANCELLED,s))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qr(n,r.Wi)}}function a3(t,e){const n=M(t),r=n.hc.get(e);if(r&&r.ic)return ee().add(r.key);{let i=ee();const s=n.uc.get(e);if(!s)return i;for(const o of s){const a=n.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}async function l3(t,e){const n=M(t),r=await th(n.localStore,e.query,!0),i=e.view.nc(r);return n.isPrimaryClient&&Vg(n,e.targetId,i.tc),i}async function u3(t,e){const n=M(t);return rA(n.localStore,e).then(r=>qr(n,r))}async function c3(t,e,n,r){const i=M(t),s=await function(o,a){const l=M(o),u=M(l.mutationQueue);return l.persistence.runTransaction("Lookup mutation documents","readonly",c=>u.An(c,a).next(d=>d?l.localDocuments.getDocuments(c,d):w.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await _a(i.remoteStore):n==="acknowledged"||n==="rejected"?(Aw(i,e,r||null),bw(i,e),function(o,a){M(M(o).mutationQueue).Pn(a)}(i.localStore,e)):U(),await qr(i,s)):b("SyncEngine","Cannot apply mutation batch with id: "+e)}async function d3(t,e){const n=M(t);if(Nw(n),Dw(n),e===!0&&n.wc!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await d_(n,r.toArray());n.wc=!0,await Ug(n.remoteStore,!0);for(const s of i)Df(n.remoteStore,s)}else if(e===!1&&n.wc!==!1){const r=[];let i=Promise.resolve();n.uc.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(ea(n,o),Jo(n.localStore,o,!0))),cu(n.remoteStore,o)}),await i,await d_(n,r),function(s){const o=M(s);o.hc.forEach((a,l)=>{cu(o.remoteStore,l)}),o.lc._s(),o.hc=new Map,o.ac=new ze(P.comparator)}(n),n.wc=!1,await Ug(n.remoteStore,!1)}}async function d_(t,e,n){const r=M(t),i=[],s=[];for(const o of e){let a;const l=r.uc.get(o);if(l&&l.length!==0){a=await Xo(r.localStore,pn(l[0]));for(const u of l){const c=r.oc.get(u),d=await l3(r,c);d.snapshot&&s.push(d.snapshot)}}else{const u=await nA(r.localStore,o);a=await Xo(r.localStore,u),await Cw(r,wA(u),o,!1,a.resumeToken)}i.push(a)}return r.rc.Ho(s),i}function wA(t){return sb(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function h3(t){const e=M(t);return M(M(e.localStore).persistence).Si()}async function f3(t,e,n,r){const i=M(t);if(i.wc)return void b("SyncEngine","Ignoring unexpected query state notification.");const s=i.uc.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await rA(i.localStore,ab(s[0])),a=Hu.createSynthesizedRemoteEventForCurrentChange(e,n==="current",rt.EMPTY_BYTE_STRING);await qr(i,o,a);break}case"rejected":await Jo(i.localStore,e,!0),ea(i,e,r);break;default:U()}}async function p3(t,e,n){const r=Nw(t);if(r.wc){for(const i of e){if(r.uc.has(i)){b("SyncEngine","Adding an already active target "+i);continue}const s=await nA(r.localStore,i),o=await Xo(r.localStore,s);await Cw(r,wA(s),o.targetId,!1,o.resumeToken),Df(r.remoteStore,o)}for(const i of n)r.uc.has(i)&&await Jo(r.localStore,i,!1).then(()=>{cu(r.remoteStore,i),ea(r,i)}).catch(Vi)}}function Nw(t){const e=M(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=yA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=a3.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=t3.bind(null,e),e.rc.Ho=Hz.bind(null,e.eventManager),e.rc.gc=Kz.bind(null,e.eventManager),e}function Dw(t){const e=M(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=n3.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=r3.bind(null,e),e}function m3(t,e,n){const r=M(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(d,h){const p=M(d),y=Ye(h.createTime);return p.persistence.runTransaction("hasNewerBundle","readonly",v=>p.$s.getBundleMetadata(v,h.id)).then(v=>!!v&&v.createTime.compareTo(y)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(d){return{taskState:"Success",documentsLoaded:d.totalDocuments,bytesLoaded:d.totalBytes,totalDocuments:d.totalDocuments,totalBytes:d.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(fA(a));const l=new Gz(a,i.localStore,s.Tt);let u=await s.yc();for(;u;){const d=await l.Bu(u);d&&o._updateProgress(d),u=await s.yc()}const c=await l.complete();return await qr(i,c.Uu,void 0),await function(d,h){const p=M(d);return p.persistence.runTransaction("Save bundle","readwrite",y=>p.$s.saveBundleMetadata(y,h))}(i.localStore,a),o._completeWith(c.progress),Promise.resolve(c.qu)}catch(a){return qo("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class IA{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=Wu(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return Jb(this.persistence,new Xb,e.initialUser,this.Tt)}Tc(e){return new Yb(Nf.qs,this.Tt)}Ic(e){return new sA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class _A extends IA{constructor(e,n,r){super(),this.Pc=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Pc.initialize(this,e),await Dw(this.Pc.syncEngine),await _a(this.Pc.remoteStore),await this.persistence.di(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ec(e){return Jb(this.persistence,new Xb,e.initialUser,this.Tt)}Ac(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new sz(r,e.asyncQueue,n)}Rc(e,n){const r=new jB(n,this.persistence);return new BB(e.asyncQueue,r)}Tc(e){const n=pw(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?rn.withCacheSize(this.cacheSizeBytes):rn.DEFAULT;return new fw(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,oA(),nd(),this.Tt,this.sharedClientState,!!this.forceOwnership)}Ic(e){return new sA}}class g3 extends _A{constructor(e,n){super(e,n,!1),this.Pc=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Pc.syncEngine;this.sharedClientState instanceof Kp&&(this.sharedClientState.syncEngine={Br:c3.bind(null,n),Lr:f3.bind(null,n),qr:p3.bind(null,n),Si:h3.bind(null,n),Fr:u3.bind(null,n)},await this.sharedClientState.start()),await this.persistence.di(async r=>{await d3(this.Pc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Ic(e){const n=oA();if(!Kp.C(n))throw new C(E.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=pw(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Kp(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class Pw{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>c_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=o3.bind(null,this.syncEngine),await Ug(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new qz}createDatastore(e){const n=Wu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new Az(i));var i;return function(s,o,a,l){return new Dz(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>c_(this.syncEngine,a,0),o=o_.C()?new o_:new kz,new Rz(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new Xz(r,i,s,o,a,l);return u&&(c.wc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=M(e);b("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await Ia(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Pf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):Ge("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y3{constructor(e,n){this.Vc=e,this.Tt=n,this.metadata=new dt,this.buffer=new Uint8Array,this.Sc=new TextDecoder("utf-8"),this.Dc().then(r=>{r&&r.Ou()?this.metadata.resolve(r.Mu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Mu)}`))},r=>this.metadata.reject(r))}close(){return this.Vc.cancel()}async getMetadata(){return this.metadata.promise}async yc(){return await this.getMetadata(),this.Dc()}async Dc(){const e=await this.Cc();if(e===null)return null;const n=this.Sc.decode(e),r=Number(n);isNaN(r)&&this.xc(`length string (${n}) is not valid number`);const i=await this.Nc(r);return new Wz(JSON.parse(i),e.length+r)}kc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Cc(){for(;this.kc()<0&&!await this.$c(););if(this.buffer.length===0)return null;const e=this.kc();e<0&&this.xc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Nc(e){for(;this.buffer.length<e;)await this.$c()&&this.xc("Reached the end of bundle when more is expected.");const n=this.Sc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}xc(e){throw this.Vc.cancel(),new Error(`Invalid bundle format: ${e}`)}async $c(){const e=await this.Vc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class v3{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new C(E.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=M(r),o=lu(s.Tt)+"/documents",a={documents:i.map(d=>au(s.Tt,d))},l=await s.mo("BatchGetDocuments",o,a,i.length),u=new Map;l.forEach(d=>{const h=_j(s.Tt,d);u.set(h.key.toString(),h)});const c=[];return i.forEach(d=>{const h=u.get(d.toString());z(!!h),c.push(h)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new wa(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=P.fromPath(r);this.mutations.push(new iw(i,this.precondition(i)))}),await async function(n,r){const i=M(n),s=lu(i.Tt)+"/documents",o={writes:r.map(a=>uu(i.Tt,a))};await i.lo("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw U();n=q.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new C(E.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(q.min())?Pe.exists(!1):Pe.updateTime(n):Pe.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(q.min()))throw new C(E.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Pe.updateTime(n)}return Pe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class w3{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Mc=r.maxAttempts,this.ko=new yw(this.asyncQueue,"transaction_retry")}run(){this.Mc-=1,this.Oc()}Oc(){this.ko.vo(async()=>{const e=new v3(this.datastore),n=this.Fc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Bc(i)}))}).catch(r=>{this.Bc(r)})})}Fc(e){try{const n=this.updateFunction(e);return!Vu(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Bc(e){this.Mc>0&&this.Lc(e)?(this.Mc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}Lc(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!vb(n)}return!1}}/**
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
 */class I3{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=lt.UNAUTHENTICATED,this.clientId=VC.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{b("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(b("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new C(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Sa(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function EA(t,e){t.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Zb(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function SA(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Rw(t);b("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>a_(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>a_(e.remoteStore,s)),t.onlineComponents=e}async function Rw(t){return t.offlineComponents||(b("FirestoreClient","Using default OfflineComponentProvider"),await EA(t,new IA)),t.offlineComponents}async function Rf(t){return t.onlineComponents||(b("FirestoreClient","Using default OnlineComponentProvider"),await SA(t,new Pw)),t.onlineComponents}function TA(t){return Rw(t).then(e=>e.persistence)}function Ow(t){return Rw(t).then(e=>e.localStore)}function kA(t){return Rf(t).then(e=>e.remoteStore)}function $w(t){return Rf(t).then(e=>e.syncEngine)}function _3(t){return Rf(t).then(e=>e.datastore)}async function ta(t){const e=await Rf(t),n=e.eventManager;return n.onListen=Jz.bind(null,e.syncEngine),n.onUnlisten=Zz.bind(null,e.syncEngine),n}function E3(t){return t.asyncQueue.enqueue(async()=>{const e=await TA(t),n=await kA(t);return e.setNetworkEnabled(!0),function(r){const i=M(r);return i.mu.delete(0),Gu(i)}(n)})}function S3(t){return t.asyncQueue.enqueue(async()=>{const e=await TA(t),n=await kA(t);return e.setNetworkEnabled(!1),async function(r){const i=M(r);i.mu.add(0),await Ia(i),i.pu.set("Offline")}(n)})}function T3(t,e){const n=new dt;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,l){const u=M(a);return u.persistence.runTransaction("read document","readonly",c=>u.localDocuments.getDocument(c,l))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new C(E.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Sa(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await Ow(t),e,n)),n.promise}function CA(t,e,n={}){const r=new dt;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Pf({next:d=>{s.enqueueAndForget(()=>Sw(i,c));const h=d.docs.has(o);!h&&d.fromCache?l.reject(new C(E.UNAVAILABLE,"Failed to get document because the client is offline.")):h&&d.fromCache&&a&&a.source==="server"?l.reject(new C(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),c=new kw(ya(o.path),u,{includeMetadataChanges:!0,$u:!0});return Ew(i,c)}(await ta(t),t.asyncQueue,e,n,r)),r.promise}function k3(t,e){const n=new dt;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await th(r,i,!0),a=new gA(i,o.Yi),l=a.Hu(o.documents),u=a.applyChanges(l,!1);s.resolve(u.snapshot)}catch(o){const a=Sa(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await Ow(t),e,n)),n.promise}function bA(t,e,n={}){const r=new dt;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Pf({next:d=>{s.enqueueAndForget(()=>Sw(i,c)),d.fromCache&&a.source==="server"?l.reject(new C(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),c=new kw(o,u,{includeMetadataChanges:!0,$u:!0});return Ew(i,c)}(await ta(t),t.asyncQueue,e,n,r)),r.promise}function C3(t,e){const n=new Pf(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){M(r).vu.add(i),i.next()}(await ta(t),n)),()=>{n.bc(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){M(r).vu.delete(i)}(await ta(t),n))}}function b3(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(l,u){return new y3(l,u)}(function(l,u){if(l instanceof Uint8Array)return h_(l,u);if(l instanceof ArrayBuffer)return h_(new Uint8Array(l),u);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,Wu(e));t.asyncQueue.enqueueAndForget(async()=>{m3(await $w(t),i,r)})}function A3(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=M(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.$s.getNamedQuery(s,r))}(await Ow(t),e))}const f_=new Map;/**
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
 */function Lw(t,e,n){if(!n)throw new C(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function AA(t,e,n,r){if(e===!0&&r===!0)throw new C(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function p_(t){if(!P.isDocumentKey(t))throw new C(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function m_(t){if(P.isDocumentKey(t))throw new C(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Of(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":U()}function fe(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new C(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Of(t);throw new C(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function xA(t,e){if(e<=0)throw new C(E.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new C(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new C(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,AA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new g_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new C(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new C(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new g_(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new xB;switch(n.type){case"gapi":const r=n.client;return new RB(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new C(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=f_.get(e);n&&(b("ComponentProvider","Removing Datastore"),f_.delete(e),n.terminate())}(this),Promise.resolve()}}function x3(t,e,n,r={}){var i;const s=(t=fe(t,Qu))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&qo("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=lt.MOCK_USER;else{o=iL(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new C(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new lt(l)}t._authCredentials=new NB(new UC(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xe(this.firestore,e,this._key)}}class Dt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Dt(this.firestore,e,this._query)}}class fr extends Dt{constructor(e,n,r){super(e,n,ya(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xe(this.firestore,null,new P(e))}withConverter(e){return new fr(this.firestore,e,this._path)}}function NA(t,e,...n){if(t=H(t),Lw("collection","path",e),t instanceof Qu){const r=ue.fromString(e,...n);return m_(r),new fr(t,null,r)}{if(!(t instanceof xe||t instanceof fr))throw new C(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return m_(r),new fr(t.firestore,null,r)}}function N3(t,e){if(t=fe(t,Qu),Lw("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new C(E.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Dt(t,null,function(n){return new jr(ue.emptyPath(),n)}(e))}function sh(t,e,...n){if(t=H(t),arguments.length===1&&(e=VC.R()),Lw("doc","path",e),t instanceof Qu){const r=ue.fromString(e,...n);return p_(r),new xe(t,null,new P(r))}{if(!(t instanceof xe||t instanceof fr))throw new C(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return p_(r),new xe(t.firestore,t instanceof fr?t.converter:null,new P(r))}}function DA(t,e){return t=H(t),e=H(e),(t instanceof xe||t instanceof fr)&&(e instanceof xe||e instanceof fr)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function PA(t,e){return t=H(t),e=H(e),t instanceof Dt&&e instanceof Dt&&t.firestore===e.firestore&&ju(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D3{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new yw(this,"async_queue_retry"),this.Hc=()=>{const n=nd();n&&b("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=nd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=nd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new dt;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!Bi(e))throw e;b("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(r=>{this.Qc=r,this.jc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Ge("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.jc=!1,r))));return this.qc=n,n}enqueueAfterDelay(e,n,r){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const i=_w.createAndSchedule(this,e,n,r,s=>this.Xc(s));return this.Gc.push(i),i}Jc(){this.Qc&&U()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function Bg(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class P3{constructor(){this._progressObserver={},this._taskCompletionResolver=new dt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R3=-1;class qe extends Qu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new D3,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||RA(this),this._firestoreClient.terminate()}}function yt(t){return t._firestoreClient||RA(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function RA(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new zB(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new I3(t._authCredentials,t._appCheckCredentials,t._queue,r)}function O3(t,e){$A(t=fe(t,qe));const n=yt(t),r=t._freezeSettings(),i=new Pw;return OA(n,i,new _A(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function $3(t){$A(t=fe(t,qe));const e=yt(t),n=t._freezeSettings(),r=new Pw;return OA(e,r,new g3(r,n.cacheSizeBytes))}function OA(t,e,n){const r=new dt;return t.asyncQueue.enqueue(async()=>{try{await EA(t,n),await SA(t,e),r.resolve()}catch(i){const s=i;if(!function(o){return o.name==="FirebaseError"?o.code===E.FAILED_PRECONDITION||o.code===E.UNIMPLEMENTED:typeof DOMException<"u"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(s))throw s;qo("Error enabling offline persistence. Falling back to persistence disabled: "+s),r.reject(s)}}).then(()=>r.promise)}function L3(t){if(t._initialized&&!t._terminated)throw new C(E.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new dt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!Kn.C())return Promise.resolve();const r=n+"main";await Kn.delete(r)}(pw(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function M3(t){return function(e){const n=new dt;return e.asyncQueue.enqueueAndForget(async()=>i3(await $w(e),n)),n.promise}(yt(t=fe(t,qe)))}function F3(t){return E3(yt(t=fe(t,qe)))}function U3(t){return S3(yt(t=fe(t,qe)))}function V3(t,e){const n=yt(t=fe(t,qe)),r=new P3;return b3(n,t._databaseId,e,r),r}function B3(t,e){return A3(yt(t=fe(t,qe)),e).then(n=>n?new Dt(t,null,n.query):null)}function $A(t){if(t._initialized||t._terminated)throw new C(E.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vr(rt.fromBase64String(e))}catch(n){throw new C(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new vr(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new C(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e){this._methodName=e}}/**
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
 */class $f{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new C(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new C(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}/**
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
 */const j3=/^__.*__$/;class z3{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new zr(e,this.data,this.fieldMask,n,this.fieldTransforms):new va(e,this.data,n,this.fieldTransforms)}}class LA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new zr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function MA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Lf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.Tt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ia(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new Lf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:r,ca:!1});return i.aa(e),i}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:r,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return oh(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(MA(this.ra)&&j3.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class q3{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=r||Wu(e)}wa(e,n,r,i=!1){return new Lf({ra:e,methodName:n,_a:r,path:Qe.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function Ks(t){const e=t._freezeSettings(),n=Wu(t._databaseId);return new q3(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Mf(t,e,n,r,i,s={}){const o=t.wa(s.merge||s.mergeFields?2:0,e,n,i);Vw("Data must be an object, but it was:",o,r);const a=VA(r,o);let l,u;if(s.merge)l=new un(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const h=jg(e,d,n);if(!o.contains(h))throw new C(E.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);jA(c,h)||c.push(h)}l=new un(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new z3(new Tt(a),l,u)}class Yu extends Hs{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Yu}}function FA(t,e,n){return new Lf({ra:3,_a:e.settings._a,methodName:t._methodName,ca:n},e.databaseId,e.Tt,e.ignoreUndefinedProperties)}class Mw extends Hs{_toFieldTransform(e){return new qu(e.path,new Go)}isEqual(e){return e instanceof Mw}}class H3 extends Hs{constructor(e,n){super(e),this.ma=n}_toFieldTransform(e){const n=FA(this,e,!0),r=this.ma.map(s=>Ws(s,n)),i=new Ds(r);return new qu(e.path,i)}isEqual(e){return this===e}}class K3 extends Hs{constructor(e,n){super(e),this.ma=n}_toFieldTransform(e){const n=FA(this,e,!0),r=this.ma.map(s=>Ws(s,n)),i=new Ps(r);return new qu(e.path,i)}isEqual(e){return this===e}}class W3 extends Hs{constructor(e,n){super(e),this.ga=n}_toFieldTransform(e){const n=new Qo(e.Tt,db(e.Tt,this.ga));return new qu(e.path,n)}isEqual(e){return this===e}}function Fw(t,e,n,r){const i=t.wa(1,e,n);Vw("Data must be an object, but it was:",i,r);const s=[],o=Tt.empty();qs(r,(l,u)=>{const c=Bw(e,l,n);u=H(u);const d=i.ha(c);if(u instanceof Yu)s.push(c);else{const h=Ws(u,d);h!=null&&(s.push(c),o.set(c,h))}});const a=new un(s);return new LA(o,a,i.fieldTransforms)}function Uw(t,e,n,r,i,s){const o=t.wa(1,e,n),a=[jg(e,r,n)],l=[i];if(s.length%2!=0)throw new C(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(jg(e,s[h])),l.push(s[h+1]);const u=[],c=Tt.empty();for(let h=a.length-1;h>=0;--h)if(!jA(u,a[h])){const p=a[h];let y=l[h];y=H(y);const v=o.ha(p);if(y instanceof Yu)u.push(p);else{const T=Ws(y,v);T!=null&&(u.push(p),c.set(p,T))}}const d=new un(u);return new LA(c,d,o.fieldTransforms)}function UA(t,e,n,r=!1){return Ws(n,t.wa(r?4:3,e))}function Ws(t,e){if(BA(t=H(t)))return Vw("Unsupported field value:",e,t),VA(t,e);if(t instanceof Hs)return function(n,r){if(!MA(r.ra))throw r.fa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Ws(o,r.la(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=H(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return db(r.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Re.fromDate(n);return{timestampValue:Yo(r.Tt,i)}}if(n instanceof Re){const i=new Re(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Yo(r.Tt,i)}}if(n instanceof $f)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof vr)return{bytesValue:kb(r.Tt,n._byteString)};if(n instanceof xe){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.fa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:sw(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.fa(`Unsupported field value: ${Of(n)}`)}(t,e)}function VA(t,e){const n={};return WC(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qs(t,(r,i)=>{const s=Ws(i,e.ua(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function BA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Re||t instanceof $f||t instanceof vr||t instanceof xe||t instanceof Hs)}function Vw(t,e,n){if(!BA(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Of(n);throw r==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+r)}}function jg(t,e,n){if((e=H(e))instanceof Pi)return e._internalPath;if(typeof e=="string")return Bw(t,e);throw oh("Field path arguments must be of type string or ",t,!1,void 0,n)}const G3=new RegExp("[~\\*/\\[\\]]");function Bw(t,e,n){if(e.search(G3)>=0)throw oh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Pi(...e.split("."))._internalPath}catch{throw oh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function oh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new C(E.INVALID_ARGUMENT,a+t+l)}function jA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Q3(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ff("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Q3 extends du{data(){return super.data()}}function Ff(t,e){return typeof e=="string"?Bw(t,e):e instanceof Pi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new C(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jw{}class Xu extends jw{}function Yr(t,e,...n){let r=[];e instanceof jw&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof zw).length,o=i.filter(a=>a instanceof Uf).length;if(s>1||s>0&&o>0)throw new C(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Uf extends Xu{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Uf(e,n,r)}_apply(e){const n=this._parse(e);return HA(e._query,n),new Dt(e.firestore,e.converter,Ng(e._query,n))}_parse(e){const n=Ks(e.firestore);return function(i,s,o,a,l,u,c){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new C(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){v_(c,u);const h=[];for(const p of c)h.push(y_(a,i,p));d={arrayValue:{values:h}}}else d=y_(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||v_(c,u),d=UA(o,s,c,u==="in"||u==="not-in");return se.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Y3(t,e,n){const r=e,i=Ff("where",t);return Uf._create(i,r,n)}class zw extends jw{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new zw(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:we.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)HA(s,a),s=Ng(s,a)}(e._query,n),new Dt(e.firestore,e.converter,Ng(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class qw extends Xu{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new qw(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new C(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new C(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new xo(i,s);return function(a,l){if(nw(a)===null){const u=Tf(a);u!==null&&KA(a,u,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new Dt(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new jr(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function X3(t,e="asc"){const n=e,r=Ff("orderBy",t);return qw._create(r,n)}class Vf extends Xu{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Vf(e,n,r)}_apply(e){return new Dt(e.firestore,e.converter,Xd(e._query,this._limit,this._limitType))}}function J3(t){return xA("limit",t),Vf._create("limit",t,"F")}function Z3(t){return xA("limitToLast",t),Vf._create("limitToLast",t,"L")}class Bf extends Xu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Bf(e,n,r)}_apply(e){const n=qA(e,this.type,this._docOrFields,this._inclusive);return new Dt(e.firestore,e.converter,function(r,i){return new jr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function eq(...t){return Bf._create("startAt",t,!0)}function tq(...t){return Bf._create("startAfter",t,!1)}class jf extends Xu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new jf(e,n,r)}_apply(e){const n=qA(e,this.type,this._docOrFields,this._inclusive);return new Dt(e.firestore,e.converter,function(r,i){return new jr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function nq(...t){return jf._create("endBefore",t,!1)}function rq(...t){return jf._create("endAt",t,!0)}function qA(t,e,n,r){if(n[0]=H(n[0]),n[0]instanceof du)return function(i,s,o,a,l){if(!a)throw new C(E.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const c of ms(i))if(c.field.isKeyField())u.push(xs(s,a.key));else{const d=a.data.field(c.field);if(ew(d))throw new C(E.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const h=c.field.canonicalString();throw new C(E.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${h}' (used as the orderBy) does not exist.`)}u.push(d)}return new Ni(u,l)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Ks(t.firestore);return function(s,o,a,l,u,c){const d=s.explicitOrderBy;if(u.length>d.length)throw new C(E.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const h=[];for(let p=0;p<u.length;p++){const y=u[p];if(d[p].field.isKeyField()){if(typeof y!="string")throw new C(E.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof y}`);if(!rw(s)&&y.indexOf("/")!==-1)throw new C(E.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${y}' contains a slash.`);const v=s.path.child(ue.fromString(y));if(!P.isDocumentKey(v))throw new C(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const T=new P(v);h.push(xs(o,T))}else{const v=UA(a,l,y);h.push(v)}}return new Ni(h,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function y_(t,e,n){if(typeof(n=H(n))=="string"){if(n==="")throw new C(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!rw(e)&&n.indexOf("/")!==-1)throw new C(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ue.fromString(n));if(!P.isDocumentKey(r))throw new C(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return xs(t,new P(r))}if(n instanceof xe)return xs(t,n._key);throw new C(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Of(n)}.`)}function v_(t,e){if(!Array.isArray(t)||t.length===0)throw new C(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function HA(t,e){if(e.isInequality()){const r=Tf(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new C(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=nw(t);s!==null&&KA(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new C(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new C(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function KA(t,e,n){if(!n.isEqual(e))throw new C(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Hw{convertValue(e,n="none"){switch(As(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(bs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw U()}}convertObject(e,n){const r={};return qs(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new $f(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=QC(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(iu(e));default:return null}}convertTimestamp(e){const n=Ai(e);return new Re(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ue.fromString(e);z($b(r));const i=new bi(r.get(1),r.get(3)),s=new P(r.popFirst(5));return i.isEqual(n)||Ge(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class iq extends Hw{constructor(e){super(),this.firestore=e}convertBytes(e){return new vr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xe(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Fr extends du{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new _l(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ff("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class _l extends Fr{data(e={}){return super.data(e)}}class Ri{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new as(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new _l(this._firestore,this._userDataWriter,r.key,r,new as(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new C(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new _l(r._firestore,r._userDataWriter,o.doc.key,o.doc,new as(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new _l(r._firestore,r._userDataWriter,o.doc.key,o.doc,new as(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:sq(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function sq(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}function WA(t,e){return t instanceof Fr&&e instanceof Fr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Ri&&e instanceof Ri&&t._firestore===e._firestore&&PA(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oq(t){t=fe(t,xe);const e=fe(t.firestore,qe);return CA(yt(e),t._key).then(n=>Kw(e,t,n))}class Gs extends Hw{constructor(e){super(),this.firestore=e}convertBytes(e){return new vr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xe(this.firestore,null,n)}}function aq(t){t=fe(t,xe);const e=fe(t.firestore,qe),n=yt(e),r=new Gs(e);return T3(n,t._key).then(i=>new Fr(e,r,t._key,i,new as(i!==null&&i.hasLocalMutations,!0),t.converter))}function lq(t){t=fe(t,xe);const e=fe(t.firestore,qe);return CA(yt(e),t._key,{source:"server"}).then(n=>Kw(e,t,n))}function uq(t){t=fe(t,Dt);const e=fe(t.firestore,qe),n=yt(e),r=new Gs(e);return zA(t._query),bA(n,t._query).then(i=>new Ri(e,r,t,i))}function cq(t){t=fe(t,Dt);const e=fe(t.firestore,qe),n=yt(e),r=new Gs(e);return k3(n,t._query).then(i=>new Ri(e,r,t,i))}function dq(t){t=fe(t,Dt);const e=fe(t.firestore,qe),n=yt(e),r=new Gs(e);return bA(n,t._query,{source:"server"}).then(i=>new Ri(e,r,t,i))}function w_(t,e,n){t=fe(t,xe);const r=fe(t.firestore,qe),i=zf(t.converter,e,n);return Ju(r,[Mf(Ks(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Pe.none())])}function I_(t,e,n,...r){t=fe(t,xe);const i=fe(t.firestore,qe),s=Ks(i);let o;return o=typeof(e=H(e))=="string"||e instanceof Pi?Uw(s,"updateDoc",t._key,e,n,r):Fw(s,"updateDoc",t._key,e),Ju(i,[o.toMutation(t._key,Pe.exists(!0))])}function hq(t){return Ju(fe(t.firestore,qe),[new wa(t._key,Pe.none())])}function fq(t,e){const n=fe(t.firestore,qe),r=sh(t),i=zf(t.converter,e);return Ju(n,[Mf(Ks(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Pe.exists(!1))]).then(()=>r)}function GA(t,...e){var n,r,i;t=H(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Bg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Bg(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let l,u,c;if(t instanceof xe)u=fe(t.firestore,qe),c=ya(t._key.path),l={next:d=>{e[o]&&e[o](Kw(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=fe(t,Dt);u=fe(d.firestore,qe),c=d._query;const h=new Gs(u);l={next:p=>{e[o]&&e[o](new Ri(u,h,d,p))},error:e[o+1],complete:e[o+2]},zA(t._query)}return function(d,h,p,y){const v=new Pf(y),T=new kw(h,v,p);return d.asyncQueue.enqueueAndForget(async()=>Ew(await ta(d),T)),()=>{v.bc(),d.asyncQueue.enqueueAndForget(async()=>Sw(await ta(d),T))}}(yt(u),c,a,l)}function pq(t,e){return C3(yt(t=fe(t,qe)),Bg(e)?e:{next:e})}function Ju(t,e){return function(n,r){const i=new dt;return n.asyncQueue.enqueueAndForget(async()=>e3(await $w(n),r,i)),i.promise}(yt(t),e)}function Kw(t,e,n){const r=n.docs.get(e._key),i=new Gs(t);return new Fr(t,i,e._key,r,new as(n.hasPendingWrites,n.fromCache),e.converter)}const mq={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gq{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ks(e)}set(e,n,r){this._verifyNotCommitted();const i=ni(e,this._firestore),s=zf(i.converter,n,r),o=Mf(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Pe.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=ni(e,this._firestore);let o;return o=typeof(n=H(n))=="string"||n instanceof Pi?Uw(this._dataReader,"WriteBatch.update",s._key,n,r,i):Fw(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Pe.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=ni(e,this._firestore);return this._mutations=this._mutations.concat(new wa(n._key,Pe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new C(E.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ni(t,e){if((t=H(t)).firestore!==e)throw new C(E.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class yq extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Ks(e)}get(e){const n=ni(e,this._firestore),r=new iq(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return U();const s=i[0];if(s.isFoundDocument())return new du(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new du(this._firestore,r,n._key,null,n.converter);throw U()})}set(e,n,r){const i=ni(e,this._firestore),s=zf(i.converter,n,r),o=Mf(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=ni(e,this._firestore);let o;return o=typeof(n=H(n))=="string"||n instanceof Pi?Uw(this._dataReader,"Transaction.update",s._key,n,r,i):Fw(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=ni(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=ni(e,this._firestore),r=new Gs(this._firestore);return super.get(e).then(i=>new Fr(this._firestore,r,n._key,i._document,new as(!1,!1),n.converter))}}function vq(t,e,n){t=fe(t,qe);const r=Object.assign(Object.assign({},mq),n);return function(i){if(i.maxAttempts<1)throw new C(E.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new dt;return i.asyncQueue.enqueueAndForget(async()=>{const l=await _3(i);new w3(i.asyncQueue,l,o,s,a).run()}),a.promise}(yt(t),i=>e(new yq(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wq(){return new Yu("deleteField")}function Iq(){return new Mw("serverTimestamp")}function _q(...t){return new H3("arrayUnion",t)}function Eq(...t){return new K3("arrayRemove",t)}function Sq(t){return new W3("increment",t)}(function(t,e=!0){(function(n){ga=n})(Bs),Ti(new mr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new qe(new DB(n.getProvider("auth-internal")),new $B(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new C(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bi(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),dr(y1,"3.9.0",t),dr(y1,"3.9.0","esm2017")})();const Tq="@firebase/firestore-compat",kq="0.3.5";/**
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
 */function Ww(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new C("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function __(){if(typeof Uint8Array>"u")throw new C("unimplemented","Uint8Arrays are not available in this environment.")}function E_(){if(!HB())throw new C("unimplemented","Blobs are unavailable in Firestore in this environment.")}class hu{constructor(e){this._delegate=e}static fromBase64String(e){return E_(),new hu(vr.fromBase64String(e))}static fromUint8Array(e){return __(),new hu(vr.fromUint8Array(e))}toBase64(){return E_(),this._delegate.toBase64()}toUint8Array(){return __(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function zg(t){return Cq(t,["next","error","complete"])}function Cq(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class bq{enableIndexedDbPersistence(e,n){return O3(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return $3(e._delegate)}clearIndexedDbPersistence(e){return L3(e._delegate)}}class QA{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof bi||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&qo("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){x3(this._delegate,e,n,r)}enableNetwork(){return F3(this._delegate)}disableNetwork(){return U3(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,AA("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return M3(this._delegate)}onSnapshotsInSync(e){return pq(this._delegate,e)}get app(){if(!this._appCompat)throw new C("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new na(this,NA(this._delegate,e))}catch(n){throw Gt(n,"collection()","Firestore.collection()")}}doc(e){try{return new Rn(this,sh(this._delegate,e))}catch(n){throw Gt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Wt(this,N3(this._delegate,e))}catch(n){throw Gt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return vq(this._delegate,n=>e(new YA(this,n)))}batch(){return yt(this._delegate),new XA(new gq(this._delegate,e=>Ju(this._delegate,e)))}loadBundle(e){return V3(this._delegate,e)}namedQuery(e){return B3(this._delegate,e).then(n=>n?new Wt(this,n):null)}}class qf extends Hw{constructor(e){super(),this.firestore=e}convertBytes(e){return new hu(new vr(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Rn.forKey(n,this.firestore,null)}}function Aq(t){bB(t)}class YA{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new qf(e)}get(e){const n=ls(e);return this._delegate.get(n).then(r=>new fu(this._firestore,new Fr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=ls(e);return r?(Ww("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=ls(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=ls(e);return this._delegate.delete(n),this}}class XA{constructor(e){this._delegate=e}set(e,n,r){const i=ls(e);return r?(Ww("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=ls(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=ls(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Ls{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new _l(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new pu(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Ls.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Ls(e,new qf(e),n),i.set(n,s)),s}}Ls.INSTANCES=new WeakMap;class Rn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new qf(e)}static forPath(e,n,r){if(e.length%2!==0)throw new C("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Rn(n,new xe(n._delegate,r,new P(e)))}static forKey(e,n,r){return new Rn(n,new xe(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new na(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new na(this.firestore,NA(this._delegate,e))}catch(n){throw Gt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=H(e),e instanceof xe?DA(this._delegate,e):!1}set(e,n){n=Ww("DocumentReference.set",n);try{return n?w_(this._delegate,e,n):w_(this._delegate,e)}catch(r){throw Gt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?I_(this._delegate,e):I_(this._delegate,e,n,...r)}catch(i){throw Gt(i,"updateDoc()","DocumentReference.update()")}}delete(){return hq(this._delegate)}onSnapshot(...e){const n=JA(e),r=ZA(e,i=>new fu(this.firestore,new Fr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return GA(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=aq(this._delegate):(e==null?void 0:e.source)==="server"?n=lq(this._delegate):n=oq(this._delegate),n.then(r=>new fu(this.firestore,new Fr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Rn(this.firestore,e?this._delegate.withConverter(Ls.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Gt(t,e,n){return t.message=t.message.replace(e,n),t}function JA(t){for(const e of t)if(typeof e=="object"&&!zg(e))return e;return{}}function ZA(t,e){var n,r;let i;return zg(t[0])?i=t[0]:zg(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class fu{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Rn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return WA(this._delegate,e._delegate)}}class pu extends fu{data(e){const n=this._delegate.data(e);return AB(n!==void 0),n}}class Wt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new qf(e)}where(e,n,r){try{return new Wt(this.firestore,Yr(this._delegate,Y3(e,n,r)))}catch(i){throw Gt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Wt(this.firestore,Yr(this._delegate,X3(e,n)))}catch(r){throw Gt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Wt(this.firestore,Yr(this._delegate,J3(e)))}catch(n){throw Gt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Wt(this.firestore,Yr(this._delegate,Z3(e)))}catch(n){throw Gt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Wt(this.firestore,Yr(this._delegate,eq(...e)))}catch(n){throw Gt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Wt(this.firestore,Yr(this._delegate,tq(...e)))}catch(n){throw Gt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Wt(this.firestore,Yr(this._delegate,nq(...e)))}catch(n){throw Gt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Wt(this.firestore,Yr(this._delegate,rq(...e)))}catch(n){throw Gt(n,"endAt()","Query.endAt()")}}isEqual(e){return PA(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=cq(this._delegate):(e==null?void 0:e.source)==="server"?n=dq(this._delegate):n=uq(this._delegate),n.then(r=>new qg(this.firestore,new Ri(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=JA(e),r=ZA(e,i=>new qg(this.firestore,new Ri(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return GA(this._delegate,n,r)}withConverter(e){return new Wt(this.firestore,e?this._delegate.withConverter(Ls.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class xq{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new pu(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class qg{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Wt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new pu(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new xq(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new pu(this._firestore,r))})}isEqual(e){return WA(this._delegate,e._delegate)}}class na extends Wt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Rn(this.firestore,e):null}doc(e){try{return e===void 0?new Rn(this.firestore,sh(this._delegate)):new Rn(this.firestore,sh(this._delegate,e))}catch(n){throw Gt(n,"doc()","CollectionReference.doc()")}}add(e){return fq(this._delegate,e).then(n=>new Rn(this.firestore,n))}isEqual(e){return DA(this._delegate,e._delegate)}withConverter(e){return new na(this.firestore,e?this._delegate.withConverter(Ls.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ls(t){return fe(t,xe)}/**
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
 */class Gw{constructor(...e){this._delegate=new Pi(...e)}static documentId(){return new Gw(Qe.keyField().canonicalString())}isEqual(e){return e=H(e),e instanceof Pi?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class es{constructor(e){this._delegate=e}static serverTimestamp(){const e=Iq();return e._methodName="FieldValue.serverTimestamp",new es(e)}static delete(){const e=wq();return e._methodName="FieldValue.delete",new es(e)}static arrayUnion(...e){const n=_q(...e);return n._methodName="FieldValue.arrayUnion",new es(n)}static arrayRemove(...e){const n=Eq(...e);return n._methodName="FieldValue.arrayRemove",new es(n)}static increment(e){const n=Sq(e);return n._methodName="FieldValue.increment",new es(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const Nq={Firestore:QA,GeoPoint:$f,Timestamp:Re,Blob:hu,Transaction:YA,WriteBatch:XA,DocumentReference:Rn,DocumentSnapshot:fu,Query:Wt,QueryDocumentSnapshot:pu,QuerySnapshot:qg,CollectionReference:na,FieldPath:Gw,FieldValue:es,setLogLevel:Aq,CACHE_SIZE_UNLIMITED:R3};function Dq(t,e){t.INTERNAL.registerComponent(new mr("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},Nq)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pq(t){Dq(t,(e,n)=>new QA(e,n,new bq)),t.registerVersion(Tq,kq)}Pq(ki);const Rq={apiKey:"AIzaSyD6ueBdw_o2j0T-UD1zpXn83Fe5GIMVCIs",authDomain:"h-finances-93253.firebaseapp.com",projectId:"h-finances-93253",storageBucket:"h-finances-93253.appspot.com",messagingSenderId:"573458853851",appId:"1:573458853851:web:03aec603471d76d476c1fe"},Oq=ki.initializeApp(Rq),S_=Oq.firestore(),T_={loadItems:async t=>{let e=[];(await S_.collection("item").get()).forEach(r=>{let i=r.data();for(let s=0;s<i.elements.length;s++)e.push({date:new Date(i.elements[s].date.seconds*1e3),category:i.elements[s].category,title:i.elements[s].title,value:i.elements[s].value})}),t(e)},addItem:async t=>{S_.collection("item").doc("p8bnSK4hZvgZQKdTcXpF").update({elements:ki.firestore.FieldValue.arrayUnion({category:t.category,value:t.value,title:t.title,date:ki.firestore.Timestamp.fromDate(t.date)})})}};function $q(){const[t,e]=Oe.useState([]),[n,r]=Oe.useState(OP()),[i,s]=Oe.useState([]),[o,a]=Oe.useState(0),[l,u]=Oe.useState(0);return Oe.useEffect(()=>{T_.loadItems(e)},[t]),Oe.useEffect(()=>{s($P(t,n))},[t,n]),Oe.useEffect(()=>{let h=0,p=0;for(let y in i)Kc[i[y].category].expense?p+=i[y].value:h+=i[y].value;a(h),u(p)},[i]),ut(NP,{children:[G(DP,{children:G(PP,{children:ut("h1",{children:["H-Finances",G("span",{children:"H-Finances"}),G("span",{children:"H-Finances"}),G("span",{children:"Developed by HELIOPC"})]})})}),ut(RP,{children:[G(JP,{month:n,onMonthChange:h=>{r(h)},income:o,expense:l}),G(K$,{onAdd:h=>{let p=[...t];p.push(h),e(p),T_.addItem(h).then(y=>j$({title:"Transação adicionada",description:`Transação '${h.title}' com o valor de '${h.value} kz'`})).catch(y=>_T({title:"Erro inesperado",description:"A transação não foi adicionada"}))}}),G(qP,{list:i})]})]})}const Lq=Gp.createRoot(document.getElementById("root"));Lq.render(G($q,{}));
