(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var PN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function y3(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function b3(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var x3={exports:{}},Cd={},C3={exports:{}},we={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zl=Symbol.for("react.element"),n6=Symbol.for("react.portal"),r6=Symbol.for("react.fragment"),i6=Symbol.for("react.strict_mode"),o6=Symbol.for("react.profiler"),s6=Symbol.for("react.provider"),a6=Symbol.for("react.context"),l6=Symbol.for("react.forward_ref"),u6=Symbol.for("react.suspense"),c6=Symbol.for("react.memo"),d6=Symbol.for("react.lazy"),im=Symbol.iterator;function f6(t){return t===null||typeof t!="object"?null:(t=im&&t[im]||t["@@iterator"],typeof t=="function"?t:null)}var E3={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_3=Object.assign,S3={};function ks(t,e,n){this.props=t,this.context=e,this.refs=S3,this.updater=n||E3}ks.prototype.isReactComponent={};ks.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ks.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $3(){}$3.prototype=ks.prototype;function M1(t,e,n){this.props=t,this.context=e,this.refs=S3,this.updater=n||E3}var B1=M1.prototype=new $3;B1.constructor=M1;_3(B1,ks.prototype);B1.isPureReactComponent=!0;var om=Array.isArray,P3=Object.prototype.hasOwnProperty,L1={current:null},A3={key:!0,ref:!0,__self:!0,__source:!0};function D3(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)P3.call(e,r)&&!A3.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:zl,type:t,key:o,ref:s,props:i,_owner:L1.current}}function h6(t,e){return{$$typeof:zl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function U1(t){return typeof t=="object"&&t!==null&&t.$$typeof===zl}function p6(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var sm=/\/+/g;function Of(t,e){return typeof t=="object"&&t!==null&&t.key!=null?p6(""+t.key):e.toString(36)}function qu(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case zl:case n6:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Of(s,0):r,om(i)?(n="",t!=null&&(n=t.replace(sm,"$&/")+"/"),qu(i,e,n,"",function(u){return u})):i!=null&&(U1(i)&&(i=h6(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(sm,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",om(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+Of(o,a);s+=qu(o,e,n,l,i)}else if(l=f6(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+Of(o,a++),s+=qu(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function wu(t,e,n){if(t==null)return t;var r=[],i=0;return qu(t,r,"","",function(o){return e.call(n,o,i++)}),r}function g6(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Bt={current:null},Gu={transition:null},m6={ReactCurrentDispatcher:Bt,ReactCurrentBatchConfig:Gu,ReactCurrentOwner:L1};we.Children={map:wu,forEach:function(t,e,n){wu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return wu(t,function(){e++}),e},toArray:function(t){return wu(t,function(e){return e})||[]},only:function(t){if(!U1(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};we.Component=ks;we.Fragment=r6;we.Profiler=o6;we.PureComponent=M1;we.StrictMode=i6;we.Suspense=u6;we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m6;we.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=_3({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=L1.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)P3.call(e,l)&&!A3.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:zl,type:t.type,key:i,ref:o,props:r,_owner:s}};we.createContext=function(t){return t={$$typeof:a6,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:s6,_context:t},t.Consumer=t};we.createElement=D3;we.createFactory=function(t){var e=D3.bind(null,t);return e.type=t,e};we.createRef=function(){return{current:null}};we.forwardRef=function(t){return{$$typeof:l6,render:t}};we.isValidElement=U1;we.lazy=function(t){return{$$typeof:d6,_payload:{_status:-1,_result:t},_init:g6}};we.memo=function(t,e){return{$$typeof:c6,type:t,compare:e===void 0?null:e}};we.startTransition=function(t){var e=Gu.transition;Gu.transition={};try{t()}finally{Gu.transition=e}};we.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};we.useCallback=function(t,e){return Bt.current.useCallback(t,e)};we.useContext=function(t){return Bt.current.useContext(t)};we.useDebugValue=function(){};we.useDeferredValue=function(t){return Bt.current.useDeferredValue(t)};we.useEffect=function(t,e){return Bt.current.useEffect(t,e)};we.useId=function(){return Bt.current.useId()};we.useImperativeHandle=function(t,e,n){return Bt.current.useImperativeHandle(t,e,n)};we.useInsertionEffect=function(t,e){return Bt.current.useInsertionEffect(t,e)};we.useLayoutEffect=function(t,e){return Bt.current.useLayoutEffect(t,e)};we.useMemo=function(t,e){return Bt.current.useMemo(t,e)};we.useReducer=function(t,e,n){return Bt.current.useReducer(t,e,n)};we.useRef=function(t){return Bt.current.useRef(t)};we.useState=function(t){return Bt.current.useState(t)};we.useSyncExternalStore=function(t,e,n){return Bt.current.useSyncExternalStore(t,e,n)};we.useTransition=function(){return Bt.current.useTransition()};we.version="18.2.0";C3.exports=we;var tt=C3.exports;const w6=y3(tt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v6=tt,y6=Symbol.for("react.element"),b6=Symbol.for("react.fragment"),x6=Object.prototype.hasOwnProperty,C6=v6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E6={key:!0,ref:!0,__self:!0,__source:!0};function T3(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)x6.call(e,r)&&!E6.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:y6,type:t,key:o,ref:s,props:i,_owner:C6.current}}Cd.Fragment=b6;Cd.jsx=T3;Cd.jsxs=T3;x3.exports=Cd;var qe=x3.exports,F0={},k3={exports:{}},rn={},O3={exports:{}},I3={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,q){var Y=B.length;B.push(q);e:for(;0<Y;){var Z=Y-1>>>1,J=B[Z];if(0<i(J,q))B[Z]=q,B[Y]=J,Y=Z;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var q=B[0],Y=B.pop();if(Y!==q){B[0]=Y;e:for(var Z=0,J=B.length,V=J>>>1;Z<V;){var ie=2*(Z+1)-1,ce=B[ie],ae=ie+1,pe=B[ae];if(0>i(ce,Y))ae<J&&0>i(pe,ce)?(B[Z]=pe,B[ae]=Y,Z=ae):(B[Z]=ce,B[ie]=Y,Z=ie);else if(ae<J&&0>i(pe,Y))B[Z]=pe,B[ae]=Y,Z=ae;else break e}}return q}function i(B,q){var Y=B.sortIndex-q.sortIndex;return Y!==0?Y:B.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,p=3,w=!1,v=!1,C=!1,E=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(B){for(var q=n(u);q!==null;){if(q.callback===null)r(u);else if(q.startTime<=B)r(u),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(u)}}function x(B){if(C=!1,y(B),!v)if(n(l)!==null)v=!0,X(_);else{var q=n(u);q!==null&&z(x,q.startTime-B)}}function _(B,q){v=!1,C&&(C=!1,b(P),P=-1),w=!0;var Y=p;try{for(y(q),f=n(l);f!==null&&(!(f.expirationTime>q)||B&&!M());){var Z=f.callback;if(typeof Z=="function"){f.callback=null,p=f.priorityLevel;var J=Z(f.expirationTime<=q);q=t.unstable_now(),typeof J=="function"?f.callback=J:f===n(l)&&r(l),y(q)}else r(l);f=n(l)}if(f!==null)var V=!0;else{var ie=n(u);ie!==null&&z(x,ie.startTime-q),V=!1}return V}finally{f=null,p=Y,w=!1}}var $=!1,d=null,P=-1,k=5,I=-1;function M(){return!(t.unstable_now()-I<k)}function W(){if(d!==null){var B=t.unstable_now();I=B;var q=!0;try{q=d(!0,B)}finally{q?G():($=!1,d=null)}}else $=!1}var G;if(typeof g=="function")G=function(){g(W)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,ne=te.port2;te.port1.onmessage=W,G=function(){ne.postMessage(null)}}else G=function(){E(W,0)};function X(B){d=B,$||($=!0,G())}function z(B,q){P=E(function(){B(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){v||w||(v=!0,X(_))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(B){switch(p){case 1:case 2:case 3:var q=3;break;default:q=p}var Y=p;p=q;try{return B()}finally{p=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=p;p=B;try{return q()}finally{p=Y}},t.unstable_scheduleCallback=function(B,q,Y){var Z=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Z+Y:Z):Y=Z,B){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=Y+J,B={id:c++,callback:q,priorityLevel:B,startTime:Y,expirationTime:J,sortIndex:-1},Y>Z?(B.sortIndex=Y,e(u,B),n(l)===null&&B===n(u)&&(C?(b(P),P=-1):C=!0,z(x,Y-Z))):(B.sortIndex=J,e(l,B),v||w||(v=!0,X(_))),B},t.unstable_shouldYield=M,t.unstable_wrapCallback=function(B){var q=p;return function(){var Y=p;p=q;try{return B.apply(this,arguments)}finally{p=Y}}}})(I3);O3.exports=I3;var _6=O3.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N3=tt,nn=_6;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var R3=new Set,za={};function mo(t,e){ts(t,e),ts(t+"Capture",e)}function ts(t,e){for(za[t]=e,t=0;t<e.length;t++)R3.add(e[t])}var vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),z0=Object.prototype.hasOwnProperty,S6=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,am={},lm={};function $6(t){return z0.call(lm,t)?!0:z0.call(am,t)?!1:S6.test(t)?lm[t]=!0:(am[t]=!0,!1)}function P6(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function A6(t,e,n,r){if(e===null||typeof e>"u"||P6(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Lt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){xt[t]=new Lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];xt[e]=new Lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){xt[t]=new Lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){xt[t]=new Lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){xt[t]=new Lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){xt[t]=new Lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){xt[t]=new Lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){xt[t]=new Lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){xt[t]=new Lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var j1=/[\-:]([a-z])/g;function F1(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(j1,F1);xt[e]=new Lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(j1,F1);xt[e]=new Lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(j1,F1);xt[e]=new Lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){xt[t]=new Lt(t,1,!1,t.toLowerCase(),null,!1,!1)});xt.xlinkHref=new Lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){xt[t]=new Lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function z1(t,e,n,r){var i=xt.hasOwnProperty(e)?xt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(A6(e,n,i,r)&&(n=null),r||i===null?$6(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var $r=N3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vu=Symbol.for("react.element"),Io=Symbol.for("react.portal"),No=Symbol.for("react.fragment"),W1=Symbol.for("react.strict_mode"),W0=Symbol.for("react.profiler"),M3=Symbol.for("react.provider"),B3=Symbol.for("react.context"),H1=Symbol.for("react.forward_ref"),H0=Symbol.for("react.suspense"),V0=Symbol.for("react.suspense_list"),V1=Symbol.for("react.memo"),Br=Symbol.for("react.lazy"),L3=Symbol.for("react.offscreen"),um=Symbol.iterator;function Qs(t){return t===null||typeof t!="object"?null:(t=um&&t[um]||t["@@iterator"],typeof t=="function"?t:null)}var He=Object.assign,If;function pa(t){if(If===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);If=e&&e[1]||""}return`
`+If+t}var Nf=!1;function Rf(t,e){if(!t||Nf)return"";Nf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Nf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?pa(t):""}function D6(t){switch(t.tag){case 5:return pa(t.type);case 16:return pa("Lazy");case 13:return pa("Suspense");case 19:return pa("SuspenseList");case 0:case 2:case 15:return t=Rf(t.type,!1),t;case 11:return t=Rf(t.type.render,!1),t;case 1:return t=Rf(t.type,!0),t;default:return""}}function q0(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case No:return"Fragment";case Io:return"Portal";case W0:return"Profiler";case W1:return"StrictMode";case H0:return"Suspense";case V0:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B3:return(t.displayName||"Context")+".Consumer";case M3:return(t._context.displayName||"Context")+".Provider";case H1:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case V1:return e=t.displayName||null,e!==null?e:q0(t.type)||"Memo";case Br:e=t._payload,t=t._init;try{return q0(t(e))}catch{}}return null}function T6(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return q0(e);case 8:return e===W1?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ci(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function U3(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function k6(t){var e=U3(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function yu(t){t._valueTracker||(t._valueTracker=k6(t))}function j3(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=U3(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function fc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function G0(t,e){var n=e.checked;return He({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function cm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ci(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function F3(t,e){e=e.checked,e!=null&&z1(t,"checked",e,!1)}function K0(t,e){F3(t,e);var n=ci(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Z0(t,e.type,n):e.hasOwnProperty("defaultValue")&&Z0(t,e.type,ci(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Z0(t,e,n){(e!=="number"||fc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ga=Array.isArray;function qo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ci(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Q0(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return He({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(ga(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ci(n)}}function z3(t,e){var n=ci(e.value),r=ci(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function hm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function W3(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Y0(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?W3(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var bu,H3=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(bu=bu||document.createElement("div"),bu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=bu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ea={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},O6=["Webkit","ms","Moz","O"];Object.keys(Ea).forEach(function(t){O6.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ea[e]=Ea[t]})});function V3(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ea.hasOwnProperty(t)&&Ea[t]?(""+e).trim():e+"px"}function q3(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=V3(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var I6=He({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function X0(t,e){if(e){if(I6[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function J0(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eh=null;function q1(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var th=null,Go=null,Ko=null;function pm(t){if(t=Vl(t)){if(typeof th!="function")throw Error(L(280));var e=t.stateNode;e&&(e=Pd(e),th(t.stateNode,t.type,e))}}function G3(t){Go?Ko?Ko.push(t):Ko=[t]:Go=t}function K3(){if(Go){var t=Go,e=Ko;if(Ko=Go=null,pm(t),e)for(t=0;t<e.length;t++)pm(e[t])}}function Z3(t,e){return t(e)}function Q3(){}var Mf=!1;function Y3(t,e,n){if(Mf)return t(e,n);Mf=!0;try{return Z3(t,e,n)}finally{Mf=!1,(Go!==null||Ko!==null)&&(Q3(),K3())}}function Ha(t,e){var n=t.stateNode;if(n===null)return null;var r=Pd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var nh=!1;if(vr)try{var Ys={};Object.defineProperty(Ys,"passive",{get:function(){nh=!0}}),window.addEventListener("test",Ys,Ys),window.removeEventListener("test",Ys,Ys)}catch{nh=!1}function N6(t,e,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var _a=!1,hc=null,pc=!1,rh=null,R6={onError:function(t){_a=!0,hc=t}};function M6(t,e,n,r,i,o,s,a,l){_a=!1,hc=null,N6.apply(R6,arguments)}function B6(t,e,n,r,i,o,s,a,l){if(M6.apply(this,arguments),_a){if(_a){var u=hc;_a=!1,hc=null}else throw Error(L(198));pc||(pc=!0,rh=u)}}function wo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function X3(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function gm(t){if(wo(t)!==t)throw Error(L(188))}function L6(t){var e=t.alternate;if(!e){if(e=wo(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return gm(i),t;if(o===r)return gm(i),e;o=o.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function J3(t){return t=L6(t),t!==null?ev(t):null}function ev(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ev(t);if(e!==null)return e;t=t.sibling}return null}var tv=nn.unstable_scheduleCallback,mm=nn.unstable_cancelCallback,U6=nn.unstable_shouldYield,j6=nn.unstable_requestPaint,Ze=nn.unstable_now,F6=nn.unstable_getCurrentPriorityLevel,G1=nn.unstable_ImmediatePriority,nv=nn.unstable_UserBlockingPriority,gc=nn.unstable_NormalPriority,z6=nn.unstable_LowPriority,rv=nn.unstable_IdlePriority,Ed=null,Xn=null;function W6(t){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(Ed,t,void 0,(t.current.flags&128)===128)}catch{}}var Nn=Math.clz32?Math.clz32:q6,H6=Math.log,V6=Math.LN2;function q6(t){return t>>>=0,t===0?32:31-(H6(t)/V6|0)|0}var xu=64,Cu=4194304;function ma(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function mc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=ma(a):(o&=s,o!==0&&(r=ma(o)))}else s=n&~i,s!==0?r=ma(s):o!==0&&(r=ma(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Nn(e),i=1<<n,r|=t[n],e&=~i;return r}function G6(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function K6(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Nn(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=G6(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function ih(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function iv(){var t=xu;return xu<<=1,!(xu&4194240)&&(xu=64),t}function Bf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Wl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Nn(e),t[e]=n}function Z6(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Nn(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function K1(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Nn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ee=0;function ov(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var sv,Z1,av,lv,uv,oh=!1,Eu=[],Zr=null,Qr=null,Yr=null,Va=new Map,qa=new Map,Fr=[],Q6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wm(t,e){switch(t){case"focusin":case"focusout":Zr=null;break;case"dragenter":case"dragleave":Qr=null;break;case"mouseover":case"mouseout":Yr=null;break;case"pointerover":case"pointerout":Va.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qa.delete(e.pointerId)}}function Xs(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Vl(e),e!==null&&Z1(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Y6(t,e,n,r,i){switch(e){case"focusin":return Zr=Xs(Zr,t,e,n,r,i),!0;case"dragenter":return Qr=Xs(Qr,t,e,n,r,i),!0;case"mouseover":return Yr=Xs(Yr,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Va.set(o,Xs(Va.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,qa.set(o,Xs(qa.get(o)||null,t,e,n,r,i)),!0}return!1}function cv(t){var e=Fi(t.target);if(e!==null){var n=wo(e);if(n!==null){if(e=n.tag,e===13){if(e=X3(n),e!==null){t.blockedOn=e,uv(t.priority,function(){av(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ku(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=sh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);eh=r,n.target.dispatchEvent(r),eh=null}else return e=Vl(n),e!==null&&Z1(e),t.blockedOn=n,!1;e.shift()}return!0}function vm(t,e,n){Ku(t)&&n.delete(e)}function X6(){oh=!1,Zr!==null&&Ku(Zr)&&(Zr=null),Qr!==null&&Ku(Qr)&&(Qr=null),Yr!==null&&Ku(Yr)&&(Yr=null),Va.forEach(vm),qa.forEach(vm)}function Js(t,e){t.blockedOn===e&&(t.blockedOn=null,oh||(oh=!0,nn.unstable_scheduleCallback(nn.unstable_NormalPriority,X6)))}function Ga(t){function e(i){return Js(i,t)}if(0<Eu.length){Js(Eu[0],t);for(var n=1;n<Eu.length;n++){var r=Eu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Zr!==null&&Js(Zr,t),Qr!==null&&Js(Qr,t),Yr!==null&&Js(Yr,t),Va.forEach(e),qa.forEach(e),n=0;n<Fr.length;n++)r=Fr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Fr.length&&(n=Fr[0],n.blockedOn===null);)cv(n),n.blockedOn===null&&Fr.shift()}var Zo=$r.ReactCurrentBatchConfig,wc=!0;function J6(t,e,n,r){var i=Ee,o=Zo.transition;Zo.transition=null;try{Ee=1,Q1(t,e,n,r)}finally{Ee=i,Zo.transition=o}}function e8(t,e,n,r){var i=Ee,o=Zo.transition;Zo.transition=null;try{Ee=4,Q1(t,e,n,r)}finally{Ee=i,Zo.transition=o}}function Q1(t,e,n,r){if(wc){var i=sh(t,e,n,r);if(i===null)Gf(t,e,r,vc,n),wm(t,r);else if(Y6(i,t,e,n,r))r.stopPropagation();else if(wm(t,r),e&4&&-1<Q6.indexOf(t)){for(;i!==null;){var o=Vl(i);if(o!==null&&sv(o),o=sh(t,e,n,r),o===null&&Gf(t,e,r,vc,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Gf(t,e,r,null,n)}}var vc=null;function sh(t,e,n,r){if(vc=null,t=q1(r),t=Fi(t),t!==null)if(e=wo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=X3(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vc=t,null}function dv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(F6()){case G1:return 1;case nv:return 4;case gc:case z6:return 16;case rv:return 536870912;default:return 16}default:return 16}}var qr=null,Y1=null,Zu=null;function fv(){if(Zu)return Zu;var t,e=Y1,n=e.length,r,i="value"in qr?qr.value:qr.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Zu=i.slice(t,1<r?1-r:void 0)}function Qu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _u(){return!0}function ym(){return!1}function on(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?_u:ym,this.isPropagationStopped=ym,this}return He(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_u)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_u)},persist:function(){},isPersistent:_u}),e}var Os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},X1=on(Os),Hl=He({},Os,{view:0,detail:0}),t8=on(Hl),Lf,Uf,ea,_d=He({},Hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:J1,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ea&&(ea&&t.type==="mousemove"?(Lf=t.screenX-ea.screenX,Uf=t.screenY-ea.screenY):Uf=Lf=0,ea=t),Lf)},movementY:function(t){return"movementY"in t?t.movementY:Uf}}),bm=on(_d),n8=He({},_d,{dataTransfer:0}),r8=on(n8),i8=He({},Hl,{relatedTarget:0}),jf=on(i8),o8=He({},Os,{animationName:0,elapsedTime:0,pseudoElement:0}),s8=on(o8),a8=He({},Os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),l8=on(a8),u8=He({},Os,{data:0}),xm=on(u8),c8={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},d8={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f8={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h8(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=f8[t])?!!e[t]:!1}function J1(){return h8}var p8=He({},Hl,{key:function(t){if(t.key){var e=c8[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?d8[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:J1,charCode:function(t){return t.type==="keypress"?Qu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),g8=on(p8),m8=He({},_d,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cm=on(m8),w8=He({},Hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:J1}),v8=on(w8),y8=He({},Os,{propertyName:0,elapsedTime:0,pseudoElement:0}),b8=on(y8),x8=He({},_d,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),C8=on(x8),E8=[9,13,27,32],ep=vr&&"CompositionEvent"in window,Sa=null;vr&&"documentMode"in document&&(Sa=document.documentMode);var _8=vr&&"TextEvent"in window&&!Sa,hv=vr&&(!ep||Sa&&8<Sa&&11>=Sa),Em=String.fromCharCode(32),_m=!1;function pv(t,e){switch(t){case"keyup":return E8.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ro=!1;function S8(t,e){switch(t){case"compositionend":return gv(e);case"keypress":return e.which!==32?null:(_m=!0,Em);case"textInput":return t=e.data,t===Em&&_m?null:t;default:return null}}function $8(t,e){if(Ro)return t==="compositionend"||!ep&&pv(t,e)?(t=fv(),Zu=Y1=qr=null,Ro=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hv&&e.locale!=="ko"?null:e.data;default:return null}}var P8={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!P8[t.type]:e==="textarea"}function mv(t,e,n,r){G3(r),e=yc(e,"onChange"),0<e.length&&(n=new X1("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var $a=null,Ka=null;function A8(t){Pv(t,0)}function Sd(t){var e=Lo(t);if(j3(e))return t}function D8(t,e){if(t==="change")return e}var wv=!1;if(vr){var Ff;if(vr){var zf="oninput"in document;if(!zf){var $m=document.createElement("div");$m.setAttribute("oninput","return;"),zf=typeof $m.oninput=="function"}Ff=zf}else Ff=!1;wv=Ff&&(!document.documentMode||9<document.documentMode)}function Pm(){$a&&($a.detachEvent("onpropertychange",vv),Ka=$a=null)}function vv(t){if(t.propertyName==="value"&&Sd(Ka)){var e=[];mv(e,Ka,t,q1(t)),Y3(A8,e)}}function T8(t,e,n){t==="focusin"?(Pm(),$a=e,Ka=n,$a.attachEvent("onpropertychange",vv)):t==="focusout"&&Pm()}function k8(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sd(Ka)}function O8(t,e){if(t==="click")return Sd(e)}function I8(t,e){if(t==="input"||t==="change")return Sd(e)}function N8(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bn=typeof Object.is=="function"?Object.is:N8;function Za(t,e){if(Bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!z0.call(e,i)||!Bn(t[i],e[i]))return!1}return!0}function Am(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dm(t,e){var n=Am(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Am(n)}}function yv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?yv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function bv(){for(var t=window,e=fc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fc(t.document)}return e}function tp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function R8(t){var e=bv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&yv(n.ownerDocument.documentElement,n)){if(r!==null&&tp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Dm(n,o);var s=Dm(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var M8=vr&&"documentMode"in document&&11>=document.documentMode,Mo=null,ah=null,Pa=null,lh=!1;function Tm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lh||Mo==null||Mo!==fc(r)||(r=Mo,"selectionStart"in r&&tp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pa&&Za(Pa,r)||(Pa=r,r=yc(ah,"onSelect"),0<r.length&&(e=new X1("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Mo)))}function Su(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Bo={animationend:Su("Animation","AnimationEnd"),animationiteration:Su("Animation","AnimationIteration"),animationstart:Su("Animation","AnimationStart"),transitionend:Su("Transition","TransitionEnd")},Wf={},xv={};vr&&(xv=document.createElement("div").style,"AnimationEvent"in window||(delete Bo.animationend.animation,delete Bo.animationiteration.animation,delete Bo.animationstart.animation),"TransitionEvent"in window||delete Bo.transitionend.transition);function $d(t){if(Wf[t])return Wf[t];if(!Bo[t])return t;var e=Bo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in xv)return Wf[t]=e[n];return t}var Cv=$d("animationend"),Ev=$d("animationiteration"),_v=$d("animationstart"),Sv=$d("transitionend"),$v=new Map,km="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bi(t,e){$v.set(t,e),mo(e,[t])}for(var Hf=0;Hf<km.length;Hf++){var Vf=km[Hf],B8=Vf.toLowerCase(),L8=Vf[0].toUpperCase()+Vf.slice(1);bi(B8,"on"+L8)}bi(Cv,"onAnimationEnd");bi(Ev,"onAnimationIteration");bi(_v,"onAnimationStart");bi("dblclick","onDoubleClick");bi("focusin","onFocus");bi("focusout","onBlur");bi(Sv,"onTransitionEnd");ts("onMouseEnter",["mouseout","mouseover"]);ts("onMouseLeave",["mouseout","mouseover"]);ts("onPointerEnter",["pointerout","pointerover"]);ts("onPointerLeave",["pointerout","pointerover"]);mo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mo("onBeforeInput",["compositionend","keypress","textInput","paste"]);mo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),U8=new Set("cancel close invalid load scroll toggle".split(" ").concat(wa));function Om(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,B6(r,e,void 0,t),t.currentTarget=null}function Pv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Om(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Om(i,a,u),o=l}}}if(pc)throw t=rh,pc=!1,rh=null,t}function Re(t,e){var n=e[hh];n===void 0&&(n=e[hh]=new Set);var r=t+"__bubble";n.has(r)||(Av(e,t,2,!1),n.add(r))}function qf(t,e,n){var r=0;e&&(r|=4),Av(n,t,r,e)}var $u="_reactListening"+Math.random().toString(36).slice(2);function Qa(t){if(!t[$u]){t[$u]=!0,R3.forEach(function(n){n!=="selectionchange"&&(U8.has(n)||qf(n,!1,t),qf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$u]||(e[$u]=!0,qf("selectionchange",!1,e))}}function Av(t,e,n,r){switch(dv(e)){case 1:var i=J6;break;case 4:i=e8;break;default:i=Q1}n=i.bind(null,e,n,t),i=void 0,!nh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Gf(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Fi(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Y3(function(){var u=o,c=q1(n),f=[];e:{var p=$v.get(t);if(p!==void 0){var w=X1,v=t;switch(t){case"keypress":if(Qu(n)===0)break e;case"keydown":case"keyup":w=g8;break;case"focusin":v="focus",w=jf;break;case"focusout":v="blur",w=jf;break;case"beforeblur":case"afterblur":w=jf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=r8;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=v8;break;case Cv:case Ev:case _v:w=s8;break;case Sv:w=b8;break;case"scroll":w=t8;break;case"wheel":w=C8;break;case"copy":case"cut":case"paste":w=l8;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Cm}var C=(e&4)!==0,E=!C&&t==="scroll",b=C?p!==null?p+"Capture":null:p;C=[];for(var g=u,y;g!==null;){y=g;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,b!==null&&(x=Ha(g,b),x!=null&&C.push(Ya(g,x,y)))),E)break;g=g.return}0<C.length&&(p=new w(p,v,null,n,c),f.push({event:p,listeners:C}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",p&&n!==eh&&(v=n.relatedTarget||n.fromElement)&&(Fi(v)||v[yr]))break e;if((w||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,w?(v=n.relatedTarget||n.toElement,w=u,v=v?Fi(v):null,v!==null&&(E=wo(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=u),w!==v)){if(C=bm,x="onMouseLeave",b="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(C=Cm,x="onPointerLeave",b="onPointerEnter",g="pointer"),E=w==null?p:Lo(w),y=v==null?p:Lo(v),p=new C(x,g+"leave",w,n,c),p.target=E,p.relatedTarget=y,x=null,Fi(c)===u&&(C=new C(b,g+"enter",v,n,c),C.target=y,C.relatedTarget=E,x=C),E=x,w&&v)t:{for(C=w,b=v,g=0,y=C;y;y=Eo(y))g++;for(y=0,x=b;x;x=Eo(x))y++;for(;0<g-y;)C=Eo(C),g--;for(;0<y-g;)b=Eo(b),y--;for(;g--;){if(C===b||b!==null&&C===b.alternate)break t;C=Eo(C),b=Eo(b)}C=null}else C=null;w!==null&&Im(f,p,w,C,!1),v!==null&&E!==null&&Im(f,E,v,C,!0)}}e:{if(p=u?Lo(u):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var _=D8;else if(Sm(p))if(wv)_=I8;else{_=k8;var $=T8}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(_=O8);if(_&&(_=_(t,u))){mv(f,_,n,c);break e}$&&$(t,p,u),t==="focusout"&&($=p._wrapperState)&&$.controlled&&p.type==="number"&&Z0(p,"number",p.value)}switch($=u?Lo(u):window,t){case"focusin":(Sm($)||$.contentEditable==="true")&&(Mo=$,ah=u,Pa=null);break;case"focusout":Pa=ah=Mo=null;break;case"mousedown":lh=!0;break;case"contextmenu":case"mouseup":case"dragend":lh=!1,Tm(f,n,c);break;case"selectionchange":if(M8)break;case"keydown":case"keyup":Tm(f,n,c)}var d;if(ep)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Ro?pv(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(hv&&n.locale!=="ko"&&(Ro||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ro&&(d=fv()):(qr=c,Y1="value"in qr?qr.value:qr.textContent,Ro=!0)),$=yc(u,P),0<$.length&&(P=new xm(P,t,null,n,c),f.push({event:P,listeners:$}),d?P.data=d:(d=gv(n),d!==null&&(P.data=d)))),(d=_8?S8(t,n):$8(t,n))&&(u=yc(u,"onBeforeInput"),0<u.length&&(c=new xm("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=d))}Pv(f,e)})}function Ya(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ha(t,n),o!=null&&r.unshift(Ya(t,o,i)),o=Ha(t,e),o!=null&&r.push(Ya(t,o,i))),t=t.return}return r}function Eo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Im(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ha(n,o),l!=null&&s.unshift(Ya(n,l,a))):i||(l=Ha(n,o),l!=null&&s.push(Ya(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var j8=/\r\n?/g,F8=/\u0000|\uFFFD/g;function Nm(t){return(typeof t=="string"?t:""+t).replace(j8,`
`).replace(F8,"")}function Pu(t,e,n){if(e=Nm(e),Nm(t)!==e&&n)throw Error(L(425))}function bc(){}var uh=null,ch=null;function dh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fh=typeof setTimeout=="function"?setTimeout:void 0,z8=typeof clearTimeout=="function"?clearTimeout:void 0,Rm=typeof Promise=="function"?Promise:void 0,W8=typeof queueMicrotask=="function"?queueMicrotask:typeof Rm<"u"?function(t){return Rm.resolve(null).then(t).catch(H8)}:fh;function H8(t){setTimeout(function(){throw t})}function Kf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ga(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ga(e)}function Xr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Mm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Is=Math.random().toString(36).slice(2),Kn="__reactFiber$"+Is,Xa="__reactProps$"+Is,yr="__reactContainer$"+Is,hh="__reactEvents$"+Is,V8="__reactListeners$"+Is,q8="__reactHandles$"+Is;function Fi(t){var e=t[Kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[yr]||n[Kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Mm(t);t!==null;){if(n=t[Kn])return n;t=Mm(t)}return e}t=n,n=t.parentNode}return null}function Vl(t){return t=t[Kn]||t[yr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Lo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function Pd(t){return t[Xa]||null}var ph=[],Uo=-1;function xi(t){return{current:t}}function Be(t){0>Uo||(t.current=ph[Uo],ph[Uo]=null,Uo--)}function Oe(t,e){Uo++,ph[Uo]=t.current,t.current=e}var di={},Dt=xi(di),Wt=xi(!1),eo=di;function ns(t,e){var n=t.type.contextTypes;if(!n)return di;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ht(t){return t=t.childContextTypes,t!=null}function xc(){Be(Wt),Be(Dt)}function Bm(t,e,n){if(Dt.current!==di)throw Error(L(168));Oe(Dt,e),Oe(Wt,n)}function Dv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(L(108,T6(t)||"Unknown",i));return He({},n,r)}function Cc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||di,eo=Dt.current,Oe(Dt,t),Oe(Wt,Wt.current),!0}function Lm(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=Dv(t,e,eo),r.__reactInternalMemoizedMergedChildContext=t,Be(Wt),Be(Dt),Oe(Dt,t)):Be(Wt),Oe(Wt,n)}var hr=null,Ad=!1,Zf=!1;function Tv(t){hr===null?hr=[t]:hr.push(t)}function G8(t){Ad=!0,Tv(t)}function Ci(){if(!Zf&&hr!==null){Zf=!0;var t=0,e=Ee;try{var n=hr;for(Ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}hr=null,Ad=!1}catch(i){throw hr!==null&&(hr=hr.slice(t+1)),tv(G1,Ci),i}finally{Ee=e,Zf=!1}}return null}var jo=[],Fo=0,Ec=null,_c=0,gn=[],mn=0,to=null,pr=1,gr="";function Li(t,e){jo[Fo++]=_c,jo[Fo++]=Ec,Ec=t,_c=e}function kv(t,e,n){gn[mn++]=pr,gn[mn++]=gr,gn[mn++]=to,to=t;var r=pr;t=gr;var i=32-Nn(r)-1;r&=~(1<<i),n+=1;var o=32-Nn(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,pr=1<<32-Nn(e)+i|n<<i|r,gr=o+t}else pr=1<<o|n<<i|r,gr=t}function np(t){t.return!==null&&(Li(t,1),kv(t,1,0))}function rp(t){for(;t===Ec;)Ec=jo[--Fo],jo[Fo]=null,_c=jo[--Fo],jo[Fo]=null;for(;t===to;)to=gn[--mn],gn[mn]=null,gr=gn[--mn],gn[mn]=null,pr=gn[--mn],gn[mn]=null}var tn=null,Jt=null,je=!1,Dn=null;function Ov(t,e){var n=wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Um(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,tn=t,Jt=Xr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,tn=t,Jt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=to!==null?{id:pr,overflow:gr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,tn=t,Jt=null,!0):!1;default:return!1}}function gh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mh(t){if(je){var e=Jt;if(e){var n=e;if(!Um(t,e)){if(gh(t))throw Error(L(418));e=Xr(n.nextSibling);var r=tn;e&&Um(t,e)?Ov(r,n):(t.flags=t.flags&-4097|2,je=!1,tn=t)}}else{if(gh(t))throw Error(L(418));t.flags=t.flags&-4097|2,je=!1,tn=t}}}function jm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;tn=t}function Au(t){if(t!==tn)return!1;if(!je)return jm(t),je=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!dh(t.type,t.memoizedProps)),e&&(e=Jt)){if(gh(t))throw Iv(),Error(L(418));for(;e;)Ov(t,e),e=Xr(e.nextSibling)}if(jm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Jt=Xr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Jt=null}}else Jt=tn?Xr(t.stateNode.nextSibling):null;return!0}function Iv(){for(var t=Jt;t;)t=Xr(t.nextSibling)}function rs(){Jt=tn=null,je=!1}function ip(t){Dn===null?Dn=[t]:Dn.push(t)}var K8=$r.ReactCurrentBatchConfig;function $n(t,e){if(t&&t.defaultProps){e=He({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Sc=xi(null),$c=null,zo=null,op=null;function sp(){op=zo=$c=null}function ap(t){var e=Sc.current;Be(Sc),t._currentValue=e}function wh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Qo(t,e){$c=t,op=zo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ft=!0),t.firstContext=null)}function yn(t){var e=t._currentValue;if(op!==t)if(t={context:t,memoizedValue:e,next:null},zo===null){if($c===null)throw Error(L(308));zo=t,$c.dependencies={lanes:0,firstContext:t}}else zo=zo.next=t;return e}var zi=null;function lp(t){zi===null?zi=[t]:zi.push(t)}function Nv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,lp(e)):(n.next=i.next,i.next=n),e.interleaved=n,br(t,r)}function br(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Lr=!1;function up(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Jr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ve&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,br(t,n)}return i=r.interleaved,i===null?(e.next=e,lp(r)):(e.next=i.next,i.next=e),r.interleaved=e,br(t,n)}function Yu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,K1(t,n)}}function Fm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pc(t,e,n,r){var i=t.updateQueue;Lr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var p=a.lane,w=a.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,C=a;switch(p=e,w=n,C.tag){case 1:if(v=C.payload,typeof v=="function"){f=v.call(w,f,p);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=C.payload,p=typeof v=="function"?v.call(w,f,p):v,p==null)break e;f=He({},f,p);break e;case 2:Lr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else w={eventTime:w,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=w,l=f):c=c.next=w,s|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);ro|=s,t.lanes=s,t.memoizedState=f}}function zm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var Mv=new N3.Component().refs;function vh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:He({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Dd={isMounted:function(t){return(t=t._reactInternals)?wo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=ti(t),o=mr(r,i);o.payload=e,n!=null&&(o.callback=n),e=Jr(t,o,i),e!==null&&(Rn(e,t,i,r),Yu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=ti(t),o=mr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Jr(t,o,i),e!==null&&(Rn(e,t,i,r),Yu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Nt(),r=ti(t),i=mr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Jr(t,i,r),e!==null&&(Rn(e,t,r,n),Yu(e,t,r))}};function Wm(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Za(n,r)||!Za(i,o):!0}function Bv(t,e,n){var r=!1,i=di,o=e.contextType;return typeof o=="object"&&o!==null?o=yn(o):(i=Ht(e)?eo:Dt.current,r=e.contextTypes,o=(r=r!=null)?ns(t,i):di),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Dd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Hm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Dd.enqueueReplaceState(e,e.state,null)}function yh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Mv,up(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=yn(o):(o=Ht(e)?eo:Dt.current,i.context=ns(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(vh(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Dd.enqueueReplaceState(i,i.state,null),Pc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ta(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===Mv&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function Du(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Vm(t){var e=t._init;return e(t._payload)}function Lv(t){function e(b,g){if(t){var y=b.deletions;y===null?(b.deletions=[g],b.flags|=16):y.push(g)}}function n(b,g){if(!t)return null;for(;g!==null;)e(b,g),g=g.sibling;return null}function r(b,g){for(b=new Map;g!==null;)g.key!==null?b.set(g.key,g):b.set(g.index,g),g=g.sibling;return b}function i(b,g){return b=ni(b,g),b.index=0,b.sibling=null,b}function o(b,g,y){return b.index=y,t?(y=b.alternate,y!==null?(y=y.index,y<g?(b.flags|=2,g):y):(b.flags|=2,g)):(b.flags|=1048576,g)}function s(b){return t&&b.alternate===null&&(b.flags|=2),b}function a(b,g,y,x){return g===null||g.tag!==6?(g=n0(y,b.mode,x),g.return=b,g):(g=i(g,y),g.return=b,g)}function l(b,g,y,x){var _=y.type;return _===No?c(b,g,y.props.children,x,y.key):g!==null&&(g.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Br&&Vm(_)===g.type)?(x=i(g,y.props),x.ref=ta(b,g,y),x.return=b,x):(x=rc(y.type,y.key,y.props,null,b.mode,x),x.ref=ta(b,g,y),x.return=b,x)}function u(b,g,y,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=r0(y,b.mode,x),g.return=b,g):(g=i(g,y.children||[]),g.return=b,g)}function c(b,g,y,x,_){return g===null||g.tag!==7?(g=Qi(y,b.mode,x,_),g.return=b,g):(g=i(g,y),g.return=b,g)}function f(b,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=n0(""+g,b.mode,y),g.return=b,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case vu:return y=rc(g.type,g.key,g.props,null,b.mode,y),y.ref=ta(b,null,g),y.return=b,y;case Io:return g=r0(g,b.mode,y),g.return=b,g;case Br:var x=g._init;return f(b,x(g._payload),y)}if(ga(g)||Qs(g))return g=Qi(g,b.mode,y,null),g.return=b,g;Du(b,g)}return null}function p(b,g,y,x){var _=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return _!==null?null:a(b,g,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case vu:return y.key===_?l(b,g,y,x):null;case Io:return y.key===_?u(b,g,y,x):null;case Br:return _=y._init,p(b,g,_(y._payload),x)}if(ga(y)||Qs(y))return _!==null?null:c(b,g,y,x,null);Du(b,y)}return null}function w(b,g,y,x,_){if(typeof x=="string"&&x!==""||typeof x=="number")return b=b.get(y)||null,a(g,b,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case vu:return b=b.get(x.key===null?y:x.key)||null,l(g,b,x,_);case Io:return b=b.get(x.key===null?y:x.key)||null,u(g,b,x,_);case Br:var $=x._init;return w(b,g,y,$(x._payload),_)}if(ga(x)||Qs(x))return b=b.get(y)||null,c(g,b,x,_,null);Du(g,x)}return null}function v(b,g,y,x){for(var _=null,$=null,d=g,P=g=0,k=null;d!==null&&P<y.length;P++){d.index>P?(k=d,d=null):k=d.sibling;var I=p(b,d,y[P],x);if(I===null){d===null&&(d=k);break}t&&d&&I.alternate===null&&e(b,d),g=o(I,g,P),$===null?_=I:$.sibling=I,$=I,d=k}if(P===y.length)return n(b,d),je&&Li(b,P),_;if(d===null){for(;P<y.length;P++)d=f(b,y[P],x),d!==null&&(g=o(d,g,P),$===null?_=d:$.sibling=d,$=d);return je&&Li(b,P),_}for(d=r(b,d);P<y.length;P++)k=w(d,b,P,y[P],x),k!==null&&(t&&k.alternate!==null&&d.delete(k.key===null?P:k.key),g=o(k,g,P),$===null?_=k:$.sibling=k,$=k);return t&&d.forEach(function(M){return e(b,M)}),je&&Li(b,P),_}function C(b,g,y,x){var _=Qs(y);if(typeof _!="function")throw Error(L(150));if(y=_.call(y),y==null)throw Error(L(151));for(var $=_=null,d=g,P=g=0,k=null,I=y.next();d!==null&&!I.done;P++,I=y.next()){d.index>P?(k=d,d=null):k=d.sibling;var M=p(b,d,I.value,x);if(M===null){d===null&&(d=k);break}t&&d&&M.alternate===null&&e(b,d),g=o(M,g,P),$===null?_=M:$.sibling=M,$=M,d=k}if(I.done)return n(b,d),je&&Li(b,P),_;if(d===null){for(;!I.done;P++,I=y.next())I=f(b,I.value,x),I!==null&&(g=o(I,g,P),$===null?_=I:$.sibling=I,$=I);return je&&Li(b,P),_}for(d=r(b,d);!I.done;P++,I=y.next())I=w(d,b,P,I.value,x),I!==null&&(t&&I.alternate!==null&&d.delete(I.key===null?P:I.key),g=o(I,g,P),$===null?_=I:$.sibling=I,$=I);return t&&d.forEach(function(W){return e(b,W)}),je&&Li(b,P),_}function E(b,g,y,x){if(typeof y=="object"&&y!==null&&y.type===No&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case vu:e:{for(var _=y.key,$=g;$!==null;){if($.key===_){if(_=y.type,_===No){if($.tag===7){n(b,$.sibling),g=i($,y.props.children),g.return=b,b=g;break e}}else if($.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Br&&Vm(_)===$.type){n(b,$.sibling),g=i($,y.props),g.ref=ta(b,$,y),g.return=b,b=g;break e}n(b,$);break}else e(b,$);$=$.sibling}y.type===No?(g=Qi(y.props.children,b.mode,x,y.key),g.return=b,b=g):(x=rc(y.type,y.key,y.props,null,b.mode,x),x.ref=ta(b,g,y),x.return=b,b=x)}return s(b);case Io:e:{for($=y.key;g!==null;){if(g.key===$)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(b,g.sibling),g=i(g,y.children||[]),g.return=b,b=g;break e}else{n(b,g);break}else e(b,g);g=g.sibling}g=r0(y,b.mode,x),g.return=b,b=g}return s(b);case Br:return $=y._init,E(b,g,$(y._payload),x)}if(ga(y))return v(b,g,y,x);if(Qs(y))return C(b,g,y,x);Du(b,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(b,g.sibling),g=i(g,y),g.return=b,b=g):(n(b,g),g=n0(y,b.mode,x),g.return=b,b=g),s(b)):n(b,g)}return E}var is=Lv(!0),Uv=Lv(!1),ql={},Jn=xi(ql),Ja=xi(ql),el=xi(ql);function Wi(t){if(t===ql)throw Error(L(174));return t}function cp(t,e){switch(Oe(el,e),Oe(Ja,t),Oe(Jn,ql),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Y0(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Y0(e,t)}Be(Jn),Oe(Jn,e)}function os(){Be(Jn),Be(Ja),Be(el)}function jv(t){Wi(el.current);var e=Wi(Jn.current),n=Y0(e,t.type);e!==n&&(Oe(Ja,t),Oe(Jn,n))}function dp(t){Ja.current===t&&(Be(Jn),Be(Ja))}var Fe=xi(0);function Ac(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qf=[];function fp(){for(var t=0;t<Qf.length;t++)Qf[t]._workInProgressVersionPrimary=null;Qf.length=0}var Xu=$r.ReactCurrentDispatcher,Yf=$r.ReactCurrentBatchConfig,no=0,We=null,it=null,dt=null,Dc=!1,Aa=!1,tl=0,Z8=0;function Et(){throw Error(L(321))}function hp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bn(t[n],e[n]))return!1;return!0}function pp(t,e,n,r,i,o){if(no=o,We=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xu.current=t===null||t.memoizedState===null?J8:ex,t=n(r,i),Aa){o=0;do{if(Aa=!1,tl=0,25<=o)throw Error(L(301));o+=1,dt=it=null,e.updateQueue=null,Xu.current=tx,t=n(r,i)}while(Aa)}if(Xu.current=Tc,e=it!==null&&it.next!==null,no=0,dt=it=We=null,Dc=!1,e)throw Error(L(300));return t}function gp(){var t=tl!==0;return tl=0,t}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?We.memoizedState=dt=t:dt=dt.next=t,dt}function bn(){if(it===null){var t=We.alternate;t=t!==null?t.memoizedState:null}else t=it.next;var e=dt===null?We.memoizedState:dt.next;if(e!==null)dt=e,it=t;else{if(t===null)throw Error(L(310));it=t,t={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},dt===null?We.memoizedState=dt=t:dt=dt.next=t}return dt}function nl(t,e){return typeof e=="function"?e(t):e}function Xf(t){var e=bn(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=it,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((no&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,We.lanes|=c,ro|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Bn(r,e.memoizedState)||(Ft=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,We.lanes|=o,ro|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Jf(t){var e=bn(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Bn(o,e.memoizedState)||(Ft=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function Fv(){}function zv(t,e){var n=We,r=bn(),i=e(),o=!Bn(r.memoizedState,i);if(o&&(r.memoizedState=i,Ft=!0),r=r.queue,mp(Vv.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||dt!==null&&dt.memoizedState.tag&1){if(n.flags|=2048,rl(9,Hv.bind(null,n,r,i,e),void 0,null),gt===null)throw Error(L(349));no&30||Wv(n,e,i)}return i}function Wv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=We.updateQueue,e===null?(e={lastEffect:null,stores:null},We.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Hv(t,e,n,r){e.value=n,e.getSnapshot=r,qv(e)&&Gv(t)}function Vv(t,e,n){return n(function(){qv(e)&&Gv(t)})}function qv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bn(t,n)}catch{return!0}}function Gv(t){var e=br(t,1);e!==null&&Rn(e,t,1,-1)}function qm(t){var e=qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nl,lastRenderedState:t},e.queue=t,t=t.dispatch=X8.bind(null,We,t),[e.memoizedState,t]}function rl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=We.updateQueue,e===null?(e={lastEffect:null,stores:null},We.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Kv(){return bn().memoizedState}function Ju(t,e,n,r){var i=qn();We.flags|=t,i.memoizedState=rl(1|e,n,void 0,r===void 0?null:r)}function Td(t,e,n,r){var i=bn();r=r===void 0?null:r;var o=void 0;if(it!==null){var s=it.memoizedState;if(o=s.destroy,r!==null&&hp(r,s.deps)){i.memoizedState=rl(e,n,o,r);return}}We.flags|=t,i.memoizedState=rl(1|e,n,o,r)}function Gm(t,e){return Ju(8390656,8,t,e)}function mp(t,e){return Td(2048,8,t,e)}function Zv(t,e){return Td(4,2,t,e)}function Qv(t,e){return Td(4,4,t,e)}function Yv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Xv(t,e,n){return n=n!=null?n.concat([t]):null,Td(4,4,Yv.bind(null,e,t),n)}function wp(){}function Jv(t,e){var n=bn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ey(t,e){var n=bn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ty(t,e,n){return no&21?(Bn(n,e)||(n=iv(),We.lanes|=n,ro|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ft=!0),t.memoizedState=n)}function Q8(t,e){var n=Ee;Ee=n!==0&&4>n?n:4,t(!0);var r=Yf.transition;Yf.transition={};try{t(!1),e()}finally{Ee=n,Yf.transition=r}}function ny(){return bn().memoizedState}function Y8(t,e,n){var r=ti(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ry(t))iy(e,n);else if(n=Nv(t,e,n,r),n!==null){var i=Nt();Rn(n,t,r,i),oy(n,e,r)}}function X8(t,e,n){var r=ti(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ry(t))iy(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Bn(a,s)){var l=e.interleaved;l===null?(i.next=i,lp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Nv(t,e,i,r),n!==null&&(i=Nt(),Rn(n,t,r,i),oy(n,e,r))}}function ry(t){var e=t.alternate;return t===We||e!==null&&e===We}function iy(t,e){Aa=Dc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function oy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,K1(t,n)}}var Tc={readContext:yn,useCallback:Et,useContext:Et,useEffect:Et,useImperativeHandle:Et,useInsertionEffect:Et,useLayoutEffect:Et,useMemo:Et,useReducer:Et,useRef:Et,useState:Et,useDebugValue:Et,useDeferredValue:Et,useTransition:Et,useMutableSource:Et,useSyncExternalStore:Et,useId:Et,unstable_isNewReconciler:!1},J8={readContext:yn,useCallback:function(t,e){return qn().memoizedState=[t,e===void 0?null:e],t},useContext:yn,useEffect:Gm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ju(4194308,4,Yv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ju(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ju(4,2,t,e)},useMemo:function(t,e){var n=qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=qn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Y8.bind(null,We,t),[r.memoizedState,t]},useRef:function(t){var e=qn();return t={current:t},e.memoizedState=t},useState:qm,useDebugValue:wp,useDeferredValue:function(t){return qn().memoizedState=t},useTransition:function(){var t=qm(!1),e=t[0];return t=Q8.bind(null,t[1]),qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=We,i=qn();if(je){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),gt===null)throw Error(L(349));no&30||Wv(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Gm(Vv.bind(null,r,o,t),[t]),r.flags|=2048,rl(9,Hv.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=qn(),e=gt.identifierPrefix;if(je){var n=gr,r=pr;n=(r&~(1<<32-Nn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=tl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Z8++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ex={readContext:yn,useCallback:Jv,useContext:yn,useEffect:mp,useImperativeHandle:Xv,useInsertionEffect:Zv,useLayoutEffect:Qv,useMemo:ey,useReducer:Xf,useRef:Kv,useState:function(){return Xf(nl)},useDebugValue:wp,useDeferredValue:function(t){var e=bn();return ty(e,it.memoizedState,t)},useTransition:function(){var t=Xf(nl)[0],e=bn().memoizedState;return[t,e]},useMutableSource:Fv,useSyncExternalStore:zv,useId:ny,unstable_isNewReconciler:!1},tx={readContext:yn,useCallback:Jv,useContext:yn,useEffect:mp,useImperativeHandle:Xv,useInsertionEffect:Zv,useLayoutEffect:Qv,useMemo:ey,useReducer:Jf,useRef:Kv,useState:function(){return Jf(nl)},useDebugValue:wp,useDeferredValue:function(t){var e=bn();return it===null?e.memoizedState=t:ty(e,it.memoizedState,t)},useTransition:function(){var t=Jf(nl)[0],e=bn().memoizedState;return[t,e]},useMutableSource:Fv,useSyncExternalStore:zv,useId:ny,unstable_isNewReconciler:!1};function ss(t,e){try{var n="",r=e;do n+=D6(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function e0(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function bh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var nx=typeof WeakMap=="function"?WeakMap:Map;function sy(t,e,n){n=mr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Oc||(Oc=!0,Th=r),bh(t,e)},n}function ay(t,e,n){n=mr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){bh(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){bh(t,e),typeof r!="function"&&(ei===null?ei=new Set([this]):ei.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Km(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new nx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=mx.bind(null,t,e,n),e.then(t,t))}function Zm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Qm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mr(-1,1),e.tag=2,Jr(n,e,1))),n.lanes|=1),t)}var rx=$r.ReactCurrentOwner,Ft=!1;function kt(t,e,n,r){e.child=t===null?Uv(e,null,n,r):is(e,t.child,n,r)}function Ym(t,e,n,r,i){n=n.render;var o=e.ref;return Qo(e,i),r=pp(t,e,n,r,o,i),n=gp(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xr(t,e,i)):(je&&n&&np(e),e.flags|=1,kt(t,e,r,i),e.child)}function Xm(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!Sp(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,ly(t,e,o,r,i)):(t=rc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Za,n(s,r)&&t.ref===e.ref)return xr(t,e,i)}return e.flags|=1,t=ni(o,r),t.ref=e.ref,t.return=e,e.child=t}function ly(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Za(o,r)&&t.ref===e.ref)if(Ft=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Ft=!0);else return e.lanes=t.lanes,xr(t,e,i)}return xh(t,e,n,r,i)}function uy(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Oe(Ho,Xt),Xt|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Oe(Ho,Xt),Xt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Oe(Ho,Xt),Xt|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Oe(Ho,Xt),Xt|=r;return kt(t,e,i,n),e.child}function cy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function xh(t,e,n,r,i){var o=Ht(n)?eo:Dt.current;return o=ns(e,o),Qo(e,i),n=pp(t,e,n,r,o,i),r=gp(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xr(t,e,i)):(je&&r&&np(e),e.flags|=1,kt(t,e,n,i),e.child)}function Jm(t,e,n,r,i){if(Ht(n)){var o=!0;Cc(e)}else o=!1;if(Qo(e,i),e.stateNode===null)ec(t,e),Bv(e,n,r),yh(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=yn(u):(u=Ht(n)?eo:Dt.current,u=ns(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Hm(e,s,r,u),Lr=!1;var p=e.memoizedState;s.state=p,Pc(e,r,s,i),l=e.memoizedState,a!==r||p!==l||Wt.current||Lr?(typeof c=="function"&&(vh(e,n,c,r),l=e.memoizedState),(a=Lr||Wm(e,n,a,r,p,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,Rv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:$n(e.type,a),s.props=u,f=e.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=yn(l):(l=Ht(n)?eo:Dt.current,l=ns(e,l));var w=n.getDerivedStateFromProps;(c=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||p!==l)&&Hm(e,s,r,l),Lr=!1,p=e.memoizedState,s.state=p,Pc(e,r,s,i);var v=e.memoizedState;a!==f||p!==v||Wt.current||Lr?(typeof w=="function"&&(vh(e,n,w,r),v=e.memoizedState),(u=Lr||Wm(e,n,u,r,p,v,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Ch(t,e,n,r,o,i)}function Ch(t,e,n,r,i,o){cy(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&Lm(e,n,!1),xr(t,e,o);r=e.stateNode,rx.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=is(e,t.child,null,o),e.child=is(e,null,a,o)):kt(t,e,a,o),e.memoizedState=r.state,i&&Lm(e,n,!0),e.child}function dy(t){var e=t.stateNode;e.pendingContext?Bm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Bm(t,e.context,!1),cp(t,e.containerInfo)}function ew(t,e,n,r,i){return rs(),ip(i),e.flags|=256,kt(t,e,n,r),e.child}var Eh={dehydrated:null,treeContext:null,retryLane:0};function _h(t){return{baseLanes:t,cachePool:null,transitions:null}}function fy(t,e,n){var r=e.pendingProps,i=Fe.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Oe(Fe,i&1),t===null)return mh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Id(s,r,0,null),t=Qi(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=_h(n),e.memoizedState=Eh,t):vp(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ix(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ni(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=ni(a,o):(o=Qi(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?_h(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Eh,r}return o=t.child,t=o.sibling,r=ni(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function vp(t,e){return e=Id({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Tu(t,e,n,r){return r!==null&&ip(r),is(e,t.child,null,n),t=vp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ix(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=e0(Error(L(422))),Tu(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Id({mode:"visible",children:r.children},i,0,null),o=Qi(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&is(e,t.child,null,s),e.child.memoizedState=_h(s),e.memoizedState=Eh,o);if(!(e.mode&1))return Tu(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(L(419)),r=e0(o,r,void 0),Tu(t,e,s,r)}if(a=(s&t.childLanes)!==0,Ft||a){if(r=gt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,br(t,i),Rn(r,t,i,-1))}return _p(),r=e0(Error(L(421))),Tu(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=wx.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Jt=Xr(i.nextSibling),tn=e,je=!0,Dn=null,t!==null&&(gn[mn++]=pr,gn[mn++]=gr,gn[mn++]=to,pr=t.id,gr=t.overflow,to=e),e=vp(e,r.children),e.flags|=4096,e)}function tw(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),wh(t.return,e,n)}function t0(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function hy(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(kt(t,e,r.children,n),r=Fe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&tw(t,n,e);else if(t.tag===19)tw(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Oe(Fe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ac(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),t0(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ac(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}t0(e,!0,n,null,o);break;case"together":t0(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ec(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ro|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=ni(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ni(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ox(t,e,n){switch(e.tag){case 3:dy(e),rs();break;case 5:jv(e);break;case 1:Ht(e.type)&&Cc(e);break;case 4:cp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Oe(Sc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Oe(Fe,Fe.current&1),e.flags|=128,null):n&e.child.childLanes?fy(t,e,n):(Oe(Fe,Fe.current&1),t=xr(t,e,n),t!==null?t.sibling:null);Oe(Fe,Fe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return hy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Oe(Fe,Fe.current),r)break;return null;case 22:case 23:return e.lanes=0,uy(t,e,n)}return xr(t,e,n)}var py,Sh,gy,my;py=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sh=function(){};gy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Wi(Jn.current);var o=null;switch(n){case"input":i=G0(t,i),r=G0(t,r),o=[];break;case"select":i=He({},i,{value:void 0}),r=He({},r,{value:void 0}),o=[];break;case"textarea":i=Q0(t,i),r=Q0(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=bc)}X0(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(za.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(za.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Re("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};my=function(t,e,n,r){n!==r&&(e.flags|=4)};function na(t,e){if(!je)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function _t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function sx(t,e,n){var r=e.pendingProps;switch(rp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(e),null;case 1:return Ht(e.type)&&xc(),_t(e),null;case 3:return r=e.stateNode,os(),Be(Wt),Be(Dt),fp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Au(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dn!==null&&(Ih(Dn),Dn=null))),Sh(t,e),_t(e),null;case 5:dp(e);var i=Wi(el.current);if(n=e.type,t!==null&&e.stateNode!=null)gy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return _t(e),null}if(t=Wi(Jn.current),Au(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Kn]=e,r[Xa]=o,t=(e.mode&1)!==0,n){case"dialog":Re("cancel",r),Re("close",r);break;case"iframe":case"object":case"embed":Re("load",r);break;case"video":case"audio":for(i=0;i<wa.length;i++)Re(wa[i],r);break;case"source":Re("error",r);break;case"img":case"image":case"link":Re("error",r),Re("load",r);break;case"details":Re("toggle",r);break;case"input":cm(r,o),Re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Re("invalid",r);break;case"textarea":fm(r,o),Re("invalid",r)}X0(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Pu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Pu(r.textContent,a,t),i=["children",""+a]):za.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Re("scroll",r)}switch(n){case"input":yu(r),dm(r,o,!0);break;case"textarea":yu(r),hm(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=bc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=W3(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Kn]=e,t[Xa]=r,py(t,e,!1,!1),e.stateNode=t;e:{switch(s=J0(n,r),n){case"dialog":Re("cancel",t),Re("close",t),i=r;break;case"iframe":case"object":case"embed":Re("load",t),i=r;break;case"video":case"audio":for(i=0;i<wa.length;i++)Re(wa[i],t);i=r;break;case"source":Re("error",t),i=r;break;case"img":case"image":case"link":Re("error",t),Re("load",t),i=r;break;case"details":Re("toggle",t),i=r;break;case"input":cm(t,r),i=G0(t,r),Re("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=He({},r,{value:void 0}),Re("invalid",t);break;case"textarea":fm(t,r),i=Q0(t,r),Re("invalid",t);break;default:i=r}X0(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?q3(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&H3(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Wa(t,l):typeof l=="number"&&Wa(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(za.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Re("scroll",t):l!=null&&z1(t,o,l,s))}switch(n){case"input":yu(t),dm(t,r,!1);break;case"textarea":yu(t),hm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ci(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?qo(t,!!r.multiple,o,!1):r.defaultValue!=null&&qo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=bc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return _t(e),null;case 6:if(t&&e.stateNode!=null)my(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=Wi(el.current),Wi(Jn.current),Au(e)){if(r=e.stateNode,n=e.memoizedProps,r[Kn]=e,(o=r.nodeValue!==n)&&(t=tn,t!==null))switch(t.tag){case 3:Pu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Pu(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Kn]=e,e.stateNode=r}return _t(e),null;case 13:if(Be(Fe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(je&&Jt!==null&&e.mode&1&&!(e.flags&128))Iv(),rs(),e.flags|=98560,o=!1;else if(o=Au(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(L(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(L(317));o[Kn]=e}else rs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;_t(e),o=!1}else Dn!==null&&(Ih(Dn),Dn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Fe.current&1?ot===0&&(ot=3):_p())),e.updateQueue!==null&&(e.flags|=4),_t(e),null);case 4:return os(),Sh(t,e),t===null&&Qa(e.stateNode.containerInfo),_t(e),null;case 10:return ap(e.type._context),_t(e),null;case 17:return Ht(e.type)&&xc(),_t(e),null;case 19:if(Be(Fe),o=e.memoizedState,o===null)return _t(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)na(o,!1);else{if(ot!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Ac(t),s!==null){for(e.flags|=128,na(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Oe(Fe,Fe.current&1|2),e.child}t=t.sibling}o.tail!==null&&Ze()>as&&(e.flags|=128,r=!0,na(o,!1),e.lanes=4194304)}else{if(!r)if(t=Ac(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),na(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!je)return _t(e),null}else 2*Ze()-o.renderingStartTime>as&&n!==1073741824&&(e.flags|=128,r=!0,na(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ze(),e.sibling=null,n=Fe.current,Oe(Fe,r?n&1|2:n&1),e):(_t(e),null);case 22:case 23:return Ep(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Xt&1073741824&&(_t(e),e.subtreeFlags&6&&(e.flags|=8192)):_t(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function ax(t,e){switch(rp(e),e.tag){case 1:return Ht(e.type)&&xc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return os(),Be(Wt),Be(Dt),fp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return dp(e),null;case 13:if(Be(Fe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));rs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Be(Fe),null;case 4:return os(),null;case 10:return ap(e.type._context),null;case 22:case 23:return Ep(),null;case 24:return null;default:return null}}var ku=!1,Pt=!1,lx=typeof WeakSet=="function"?WeakSet:Set,K=null;function Wo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ge(t,e,r)}else n.current=null}function $h(t,e,n){try{n()}catch(r){Ge(t,e,r)}}var nw=!1;function ux(t,e){if(uh=wc,t=bv(),tp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=t,p=null;t:for(;;){for(var w;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(w=f.firstChild)!==null;)p=f,f=w;for(;;){if(f===t)break t;if(p===n&&++u===i&&(a=s),p===o&&++c===r&&(l=s),(w=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=w}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ch={focusedElem:t,selectionRange:n},wc=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var C=v.memoizedProps,E=v.memoizedState,b=e.stateNode,g=b.getSnapshotBeforeUpdate(e.elementType===e.type?C:$n(e.type,C),E);b.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(x){Ge(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return v=nw,nw=!1,v}function Da(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&$h(e,n,o)}i=i.next}while(i!==r)}}function kd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ph(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function wy(t){var e=t.alternate;e!==null&&(t.alternate=null,wy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Kn],delete e[Xa],delete e[hh],delete e[V8],delete e[q8])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vy(t){return t.tag===5||t.tag===3||t.tag===4}function rw(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ah(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=bc));else if(r!==4&&(t=t.child,t!==null))for(Ah(t,e,n),t=t.sibling;t!==null;)Ah(t,e,n),t=t.sibling}function Dh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Dh(t,e,n),t=t.sibling;t!==null;)Dh(t,e,n),t=t.sibling}var vt=null,An=!1;function Ir(t,e,n){for(n=n.child;n!==null;)yy(t,e,n),n=n.sibling}function yy(t,e,n){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(Ed,n)}catch{}switch(n.tag){case 5:Pt||Wo(n,e);case 6:var r=vt,i=An;vt=null,Ir(t,e,n),vt=r,An=i,vt!==null&&(An?(t=vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):vt.removeChild(n.stateNode));break;case 18:vt!==null&&(An?(t=vt,n=n.stateNode,t.nodeType===8?Kf(t.parentNode,n):t.nodeType===1&&Kf(t,n),Ga(t)):Kf(vt,n.stateNode));break;case 4:r=vt,i=An,vt=n.stateNode.containerInfo,An=!0,Ir(t,e,n),vt=r,An=i;break;case 0:case 11:case 14:case 15:if(!Pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&$h(n,e,s),i=i.next}while(i!==r)}Ir(t,e,n);break;case 1:if(!Pt&&(Wo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ge(n,e,a)}Ir(t,e,n);break;case 21:Ir(t,e,n);break;case 22:n.mode&1?(Pt=(r=Pt)||n.memoizedState!==null,Ir(t,e,n),Pt=r):Ir(t,e,n);break;default:Ir(t,e,n)}}function iw(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new lx),e.forEach(function(r){var i=vx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Sn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:vt=a.stateNode,An=!1;break e;case 3:vt=a.stateNode.containerInfo,An=!0;break e;case 4:vt=a.stateNode.containerInfo,An=!0;break e}a=a.return}if(vt===null)throw Error(L(160));yy(o,s,i),vt=null,An=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ge(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)by(e,t),e=e.sibling}function by(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Sn(e,t),zn(t),r&4){try{Da(3,t,t.return),kd(3,t)}catch(C){Ge(t,t.return,C)}try{Da(5,t,t.return)}catch(C){Ge(t,t.return,C)}}break;case 1:Sn(e,t),zn(t),r&512&&n!==null&&Wo(n,n.return);break;case 5:if(Sn(e,t),zn(t),r&512&&n!==null&&Wo(n,n.return),t.flags&32){var i=t.stateNode;try{Wa(i,"")}catch(C){Ge(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&F3(i,o),J0(a,s);var u=J0(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?q3(i,f):c==="dangerouslySetInnerHTML"?H3(i,f):c==="children"?Wa(i,f):z1(i,c,f,u)}switch(a){case"input":K0(i,o);break;case"textarea":z3(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?qo(i,!!o.multiple,w,!1):p!==!!o.multiple&&(o.defaultValue!=null?qo(i,!!o.multiple,o.defaultValue,!0):qo(i,!!o.multiple,o.multiple?[]:"",!1))}i[Xa]=o}catch(C){Ge(t,t.return,C)}}break;case 6:if(Sn(e,t),zn(t),r&4){if(t.stateNode===null)throw Error(L(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(C){Ge(t,t.return,C)}}break;case 3:if(Sn(e,t),zn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ga(e.containerInfo)}catch(C){Ge(t,t.return,C)}break;case 4:Sn(e,t),zn(t);break;case 13:Sn(e,t),zn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(xp=Ze())),r&4&&iw(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Pt=(u=Pt)||c,Sn(e,t),Pt=u):Sn(e,t),zn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(K=t,c=t.child;c!==null;){for(f=K=c;K!==null;){switch(p=K,w=p.child,p.tag){case 0:case 11:case 14:case 15:Da(4,p,p.return);break;case 1:Wo(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(C){Ge(r,n,C)}}break;case 5:Wo(p,p.return);break;case 22:if(p.memoizedState!==null){sw(f);continue}}w!==null?(w.return=p,K=w):sw(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=V3("display",s))}catch(C){Ge(t,t.return,C)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(C){Ge(t,t.return,C)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Sn(e,t),zn(t),r&4&&iw(t);break;case 21:break;default:Sn(e,t),zn(t)}}function zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(vy(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wa(i,""),r.flags&=-33);var o=rw(t);Dh(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=rw(t);Ah(t,a,s);break;default:throw Error(L(161))}}catch(l){Ge(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cx(t,e,n){K=t,xy(t)}function xy(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var i=K,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ku;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Pt;a=ku;var u=Pt;if(ku=s,(Pt=l)&&!u)for(K=i;K!==null;)s=K,l=s.child,s.tag===22&&s.memoizedState!==null?aw(i):l!==null?(l.return=s,K=l):aw(i);for(;o!==null;)K=o,xy(o),o=o.sibling;K=i,ku=a,Pt=u}ow(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,K=o):ow(t)}}function ow(t){for(;K!==null;){var e=K;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Pt||kd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Pt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:$n(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&zm(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zm(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ga(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Pt||e.flags&512&&Ph(e)}catch(p){Ge(e,e.return,p)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function sw(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function aw(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{kd(4,e)}catch(l){Ge(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ge(e,i,l)}}var o=e.return;try{Ph(e)}catch(l){Ge(e,o,l)}break;case 5:var s=e.return;try{Ph(e)}catch(l){Ge(e,s,l)}}}catch(l){Ge(e,e.return,l)}if(e===t){K=null;break}var a=e.sibling;if(a!==null){a.return=e.return,K=a;break}K=e.return}}var dx=Math.ceil,kc=$r.ReactCurrentDispatcher,yp=$r.ReactCurrentOwner,vn=$r.ReactCurrentBatchConfig,ve=0,gt=null,Je=null,bt=0,Xt=0,Ho=xi(0),ot=0,il=null,ro=0,Od=0,bp=0,Ta=null,jt=null,xp=0,as=1/0,fr=null,Oc=!1,Th=null,ei=null,Ou=!1,Gr=null,Ic=0,ka=0,kh=null,tc=-1,nc=0;function Nt(){return ve&6?Ze():tc!==-1?tc:tc=Ze()}function ti(t){return t.mode&1?ve&2&&bt!==0?bt&-bt:K8.transition!==null?(nc===0&&(nc=iv()),nc):(t=Ee,t!==0||(t=window.event,t=t===void 0?16:dv(t.type)),t):1}function Rn(t,e,n,r){if(50<ka)throw ka=0,kh=null,Error(L(185));Wl(t,n,r),(!(ve&2)||t!==gt)&&(t===gt&&(!(ve&2)&&(Od|=n),ot===4&&zr(t,bt)),Vt(t,r),n===1&&ve===0&&!(e.mode&1)&&(as=Ze()+500,Ad&&Ci()))}function Vt(t,e){var n=t.callbackNode;K6(t,e);var r=mc(t,t===gt?bt:0);if(r===0)n!==null&&mm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&mm(n),e===1)t.tag===0?G8(lw.bind(null,t)):Tv(lw.bind(null,t)),W8(function(){!(ve&6)&&Ci()}),n=null;else{switch(ov(r)){case 1:n=G1;break;case 4:n=nv;break;case 16:n=gc;break;case 536870912:n=rv;break;default:n=gc}n=Dy(n,Cy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Cy(t,e){if(tc=-1,nc=0,ve&6)throw Error(L(327));var n=t.callbackNode;if(Yo()&&t.callbackNode!==n)return null;var r=mc(t,t===gt?bt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Nc(t,r);else{e=r;var i=ve;ve|=2;var o=_y();(gt!==t||bt!==e)&&(fr=null,as=Ze()+500,Zi(t,e));do try{px();break}catch(a){Ey(t,a)}while(1);sp(),kc.current=o,ve=i,Je!==null?e=0:(gt=null,bt=0,e=ot)}if(e!==0){if(e===2&&(i=ih(t),i!==0&&(r=i,e=Oh(t,i))),e===1)throw n=il,Zi(t,0),zr(t,r),Vt(t,Ze()),n;if(e===6)zr(t,r);else{if(i=t.current.alternate,!(r&30)&&!fx(i)&&(e=Nc(t,r),e===2&&(o=ih(t),o!==0&&(r=o,e=Oh(t,o))),e===1))throw n=il,Zi(t,0),zr(t,r),Vt(t,Ze()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:Ui(t,jt,fr);break;case 3:if(zr(t,r),(r&130023424)===r&&(e=xp+500-Ze(),10<e)){if(mc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Nt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=fh(Ui.bind(null,t,jt,fr),e);break}Ui(t,jt,fr);break;case 4:if(zr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Nn(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*dx(r/1960))-r,10<r){t.timeoutHandle=fh(Ui.bind(null,t,jt,fr),r);break}Ui(t,jt,fr);break;case 5:Ui(t,jt,fr);break;default:throw Error(L(329))}}}return Vt(t,Ze()),t.callbackNode===n?Cy.bind(null,t):null}function Oh(t,e){var n=Ta;return t.current.memoizedState.isDehydrated&&(Zi(t,e).flags|=256),t=Nc(t,e),t!==2&&(e=jt,jt=n,e!==null&&Ih(e)),t}function Ih(t){jt===null?jt=t:jt.push.apply(jt,t)}function fx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Bn(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zr(t,e){for(e&=~bp,e&=~Od,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Nn(e),r=1<<n;t[n]=-1,e&=~r}}function lw(t){if(ve&6)throw Error(L(327));Yo();var e=mc(t,0);if(!(e&1))return Vt(t,Ze()),null;var n=Nc(t,e);if(t.tag!==0&&n===2){var r=ih(t);r!==0&&(e=r,n=Oh(t,r))}if(n===1)throw n=il,Zi(t,0),zr(t,e),Vt(t,Ze()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ui(t,jt,fr),Vt(t,Ze()),null}function Cp(t,e){var n=ve;ve|=1;try{return t(e)}finally{ve=n,ve===0&&(as=Ze()+500,Ad&&Ci())}}function io(t){Gr!==null&&Gr.tag===0&&!(ve&6)&&Yo();var e=ve;ve|=1;var n=vn.transition,r=Ee;try{if(vn.transition=null,Ee=1,t)return t()}finally{Ee=r,vn.transition=n,ve=e,!(ve&6)&&Ci()}}function Ep(){Xt=Ho.current,Be(Ho)}function Zi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,z8(n)),Je!==null)for(n=Je.return;n!==null;){var r=n;switch(rp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xc();break;case 3:os(),Be(Wt),Be(Dt),fp();break;case 5:dp(r);break;case 4:os();break;case 13:Be(Fe);break;case 19:Be(Fe);break;case 10:ap(r.type._context);break;case 22:case 23:Ep()}n=n.return}if(gt=t,Je=t=ni(t.current,null),bt=Xt=e,ot=0,il=null,bp=Od=ro=0,jt=Ta=null,zi!==null){for(e=0;e<zi.length;e++)if(n=zi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}zi=null}return t}function Ey(t,e){do{var n=Je;try{if(sp(),Xu.current=Tc,Dc){for(var r=We.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Dc=!1}if(no=0,dt=it=We=null,Aa=!1,tl=0,yp.current=null,n===null||n.return===null){ot=1,il=e,Je=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var w=Zm(s);if(w!==null){w.flags&=-257,Qm(w,s,a,o,e),w.mode&1&&Km(o,u,e),e=w,l=u;var v=e.updateQueue;if(v===null){var C=new Set;C.add(l),e.updateQueue=C}else v.add(l);break e}else{if(!(e&1)){Km(o,u,e),_p();break e}l=Error(L(426))}}else if(je&&a.mode&1){var E=Zm(s);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Qm(E,s,a,o,e),ip(ss(l,a));break e}}o=l=ss(l,a),ot!==4&&(ot=2),Ta===null?Ta=[o]:Ta.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var b=sy(o,l,e);Fm(o,b);break e;case 1:a=l;var g=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ei===null||!ei.has(y)))){o.flags|=65536,e&=-e,o.lanes|=e;var x=ay(o,a,e);Fm(o,x);break e}}o=o.return}while(o!==null)}$y(n)}catch(_){e=_,Je===n&&n!==null&&(Je=n=n.return);continue}break}while(1)}function _y(){var t=kc.current;return kc.current=Tc,t===null?Tc:t}function _p(){(ot===0||ot===3||ot===2)&&(ot=4),gt===null||!(ro&268435455)&&!(Od&268435455)||zr(gt,bt)}function Nc(t,e){var n=ve;ve|=2;var r=_y();(gt!==t||bt!==e)&&(fr=null,Zi(t,e));do try{hx();break}catch(i){Ey(t,i)}while(1);if(sp(),ve=n,kc.current=r,Je!==null)throw Error(L(261));return gt=null,bt=0,ot}function hx(){for(;Je!==null;)Sy(Je)}function px(){for(;Je!==null&&!U6();)Sy(Je)}function Sy(t){var e=Ay(t.alternate,t,Xt);t.memoizedProps=t.pendingProps,e===null?$y(t):Je=e,yp.current=null}function $y(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ax(n,e),n!==null){n.flags&=32767,Je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ot=6,Je=null;return}}else if(n=sx(n,e,Xt),n!==null){Je=n;return}if(e=e.sibling,e!==null){Je=e;return}Je=e=t}while(e!==null);ot===0&&(ot=5)}function Ui(t,e,n){var r=Ee,i=vn.transition;try{vn.transition=null,Ee=1,gx(t,e,n,r)}finally{vn.transition=i,Ee=r}return null}function gx(t,e,n,r){do Yo();while(Gr!==null);if(ve&6)throw Error(L(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Z6(t,o),t===gt&&(Je=gt=null,bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ou||(Ou=!0,Dy(gc,function(){return Yo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=vn.transition,vn.transition=null;var s=Ee;Ee=1;var a=ve;ve|=4,yp.current=null,ux(t,n),by(n,t),R8(ch),wc=!!uh,ch=uh=null,t.current=n,cx(n),j6(),ve=a,Ee=s,vn.transition=o}else t.current=n;if(Ou&&(Ou=!1,Gr=t,Ic=i),o=t.pendingLanes,o===0&&(ei=null),W6(n.stateNode),Vt(t,Ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Oc)throw Oc=!1,t=Th,Th=null,t;return Ic&1&&t.tag!==0&&Yo(),o=t.pendingLanes,o&1?t===kh?ka++:(ka=0,kh=t):ka=0,Ci(),null}function Yo(){if(Gr!==null){var t=ov(Ic),e=vn.transition,n=Ee;try{if(vn.transition=null,Ee=16>t?16:t,Gr===null)var r=!1;else{if(t=Gr,Gr=null,Ic=0,ve&6)throw Error(L(331));var i=ve;for(ve|=4,K=t.current;K!==null;){var o=K,s=o.child;if(K.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(K=u;K!==null;){var c=K;switch(c.tag){case 0:case 11:case 15:Da(8,c,o)}var f=c.child;if(f!==null)f.return=c,K=f;else for(;K!==null;){c=K;var p=c.sibling,w=c.return;if(wy(c),c===u){K=null;break}if(p!==null){p.return=w,K=p;break}K=w}}}var v=o.alternate;if(v!==null){var C=v.child;if(C!==null){v.child=null;do{var E=C.sibling;C.sibling=null,C=E}while(C!==null)}}K=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,K=s;else e:for(;K!==null;){if(o=K,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Da(9,o,o.return)}var b=o.sibling;if(b!==null){b.return=o.return,K=b;break e}K=o.return}}var g=t.current;for(K=g;K!==null;){s=K;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,K=y;else e:for(s=g;K!==null;){if(a=K,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:kd(9,a)}}catch(_){Ge(a,a.return,_)}if(a===s){K=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,K=x;break e}K=a.return}}if(ve=i,Ci(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(Ed,t)}catch{}r=!0}return r}finally{Ee=n,vn.transition=e}}return!1}function uw(t,e,n){e=ss(n,e),e=sy(t,e,1),t=Jr(t,e,1),e=Nt(),t!==null&&(Wl(t,1,e),Vt(t,e))}function Ge(t,e,n){if(t.tag===3)uw(t,t,n);else for(;e!==null;){if(e.tag===3){uw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ei===null||!ei.has(r))){t=ss(n,t),t=ay(e,t,1),e=Jr(e,t,1),t=Nt(),e!==null&&(Wl(e,1,t),Vt(e,t));break}}e=e.return}}function mx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Nt(),t.pingedLanes|=t.suspendedLanes&n,gt===t&&(bt&n)===n&&(ot===4||ot===3&&(bt&130023424)===bt&&500>Ze()-xp?Zi(t,0):bp|=n),Vt(t,e)}function Py(t,e){e===0&&(t.mode&1?(e=Cu,Cu<<=1,!(Cu&130023424)&&(Cu=4194304)):e=1);var n=Nt();t=br(t,e),t!==null&&(Wl(t,e,n),Vt(t,n))}function wx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Py(t,n)}function vx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),Py(t,n)}var Ay;Ay=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Wt.current)Ft=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ft=!1,ox(t,e,n);Ft=!!(t.flags&131072)}else Ft=!1,je&&e.flags&1048576&&kv(e,_c,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ec(t,e),t=e.pendingProps;var i=ns(e,Dt.current);Qo(e,n),i=pp(null,e,r,t,i,n);var o=gp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ht(r)?(o=!0,Cc(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,up(e),i.updater=Dd,e.stateNode=i,i._reactInternals=e,yh(e,r,t,n),e=Ch(null,e,r,!0,o,n)):(e.tag=0,je&&o&&np(e),kt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ec(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=bx(r),t=$n(r,t),i){case 0:e=xh(null,e,r,t,n);break e;case 1:e=Jm(null,e,r,t,n);break e;case 11:e=Ym(null,e,r,t,n);break e;case 14:e=Xm(null,e,r,$n(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$n(r,i),xh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$n(r,i),Jm(t,e,r,i,n);case 3:e:{if(dy(e),t===null)throw Error(L(387));r=e.pendingProps,o=e.memoizedState,i=o.element,Rv(t,e),Pc(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=ss(Error(L(423)),e),e=ew(t,e,r,n,i);break e}else if(r!==i){i=ss(Error(L(424)),e),e=ew(t,e,r,n,i);break e}else for(Jt=Xr(e.stateNode.containerInfo.firstChild),tn=e,je=!0,Dn=null,n=Uv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rs(),r===i){e=xr(t,e,n);break e}kt(t,e,r,n)}e=e.child}return e;case 5:return jv(e),t===null&&mh(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,dh(r,i)?s=null:o!==null&&dh(r,o)&&(e.flags|=32),cy(t,e),kt(t,e,s,n),e.child;case 6:return t===null&&mh(e),null;case 13:return fy(t,e,n);case 4:return cp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=is(e,null,r,n):kt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$n(r,i),Ym(t,e,r,i,n);case 7:return kt(t,e,e.pendingProps,n),e.child;case 8:return kt(t,e,e.pendingProps.children,n),e.child;case 12:return kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Oe(Sc,r._currentValue),r._currentValue=s,o!==null)if(Bn(o.value,s)){if(o.children===i.children&&!Wt.current){e=xr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=mr(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),wh(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(L(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),wh(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}kt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Qo(e,n),i=yn(i),r=r(i),e.flags|=1,kt(t,e,r,n),e.child;case 14:return r=e.type,i=$n(r,e.pendingProps),i=$n(r.type,i),Xm(t,e,r,i,n);case 15:return ly(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$n(r,i),ec(t,e),e.tag=1,Ht(r)?(t=!0,Cc(e)):t=!1,Qo(e,n),Bv(e,r,i),yh(e,r,i,n),Ch(null,e,r,!0,t,n);case 19:return hy(t,e,n);case 22:return uy(t,e,n)}throw Error(L(156,e.tag))};function Dy(t,e){return tv(t,e)}function yx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(t,e,n,r){return new yx(t,e,n,r)}function Sp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function bx(t){if(typeof t=="function")return Sp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===H1)return 11;if(t===V1)return 14}return 2}function ni(t,e){var n=t.alternate;return n===null?(n=wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function rc(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")Sp(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case No:return Qi(n.children,i,o,e);case W1:s=8,i|=8;break;case W0:return t=wn(12,n,e,i|2),t.elementType=W0,t.lanes=o,t;case H0:return t=wn(13,n,e,i),t.elementType=H0,t.lanes=o,t;case V0:return t=wn(19,n,e,i),t.elementType=V0,t.lanes=o,t;case L3:return Id(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case M3:s=10;break e;case B3:s=9;break e;case H1:s=11;break e;case V1:s=14;break e;case Br:s=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=wn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Qi(t,e,n,r){return t=wn(7,t,r,e),t.lanes=n,t}function Id(t,e,n,r){return t=wn(22,t,r,e),t.elementType=L3,t.lanes=n,t.stateNode={isHidden:!1},t}function n0(t,e,n){return t=wn(6,t,null,e),t.lanes=n,t}function r0(t,e,n){return e=wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function xx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bf(0),this.expirationTimes=Bf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $p(t,e,n,r,i,o,s,a,l){return t=new xx(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=wn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},up(o),t}function Cx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Io,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Ty(t){if(!t)return di;t=t._reactInternals;e:{if(wo(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ht(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(Ht(n))return Dv(t,n,e)}return e}function ky(t,e,n,r,i,o,s,a,l){return t=$p(n,r,!0,t,i,o,s,a,l),t.context=Ty(null),n=t.current,r=Nt(),i=ti(n),o=mr(r,i),o.callback=e??null,Jr(n,o,i),t.current.lanes=i,Wl(t,i,r),Vt(t,r),t}function Nd(t,e,n,r){var i=e.current,o=Nt(),s=ti(i);return n=Ty(n),e.context===null?e.context=n:e.pendingContext=n,e=mr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Jr(i,e,s),t!==null&&(Rn(t,i,s,o),Yu(t,i,s)),s}function Rc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function cw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Pp(t,e){cw(t,e),(t=t.alternate)&&cw(t,e)}function Ex(){return null}var Oy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ap(t){this._internalRoot=t}Rd.prototype.render=Ap.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));Nd(t,e,null,null)};Rd.prototype.unmount=Ap.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;io(function(){Nd(null,t,null,null)}),e[yr]=null}};function Rd(t){this._internalRoot=t}Rd.prototype.unstable_scheduleHydration=function(t){if(t){var e=lv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Fr.length&&e!==0&&e<Fr[n].priority;n++);Fr.splice(n,0,t),n===0&&cv(t)}};function Dp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Md(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dw(){}function _x(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Rc(s);o.call(u)}}var s=ky(e,r,t,0,null,!1,!1,"",dw);return t._reactRootContainer=s,t[yr]=s.current,Qa(t.nodeType===8?t.parentNode:t),io(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Rc(l);a.call(u)}}var l=$p(t,0,!1,null,null,!1,!1,"",dw);return t._reactRootContainer=l,t[yr]=l.current,Qa(t.nodeType===8?t.parentNode:t),io(function(){Nd(e,l,n,r)}),l}function Bd(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Rc(s);a.call(l)}}Nd(e,s,t,i)}else s=_x(n,e,t,i,r);return Rc(s)}sv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ma(e.pendingLanes);n!==0&&(K1(e,n|1),Vt(e,Ze()),!(ve&6)&&(as=Ze()+500,Ci()))}break;case 13:io(function(){var r=br(t,1);if(r!==null){var i=Nt();Rn(r,t,1,i)}}),Pp(t,1)}};Z1=function(t){if(t.tag===13){var e=br(t,134217728);if(e!==null){var n=Nt();Rn(e,t,134217728,n)}Pp(t,134217728)}};av=function(t){if(t.tag===13){var e=ti(t),n=br(t,e);if(n!==null){var r=Nt();Rn(n,t,e,r)}Pp(t,e)}};lv=function(){return Ee};uv=function(t,e){var n=Ee;try{return Ee=t,e()}finally{Ee=n}};th=function(t,e,n){switch(e){case"input":if(K0(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Pd(r);if(!i)throw Error(L(90));j3(r),K0(r,i)}}}break;case"textarea":z3(t,n);break;case"select":e=n.value,e!=null&&qo(t,!!n.multiple,e,!1)}};Z3=Cp;Q3=io;var Sx={usingClientEntryPoint:!1,Events:[Vl,Lo,Pd,G3,K3,Cp]},ra={findFiberByHostInstance:Fi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},$x={bundleType:ra.bundleType,version:ra.version,rendererPackageName:ra.rendererPackageName,rendererConfig:ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$r.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=J3(t),t===null?null:t.stateNode},findFiberByHostInstance:ra.findFiberByHostInstance||Ex,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Iu.isDisabled&&Iu.supportsFiber)try{Ed=Iu.inject($x),Xn=Iu}catch{}}rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sx;rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dp(e))throw Error(L(200));return Cx(t,e,null,n)};rn.createRoot=function(t,e){if(!Dp(t))throw Error(L(299));var n=!1,r="",i=Oy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=$p(t,1,!1,null,null,n,!1,r,i),t[yr]=e.current,Qa(t.nodeType===8?t.parentNode:t),new Ap(e)};rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=J3(e),t=t===null?null:t.stateNode,t};rn.flushSync=function(t){return io(t)};rn.hydrate=function(t,e,n){if(!Md(e))throw Error(L(200));return Bd(null,t,e,!0,n)};rn.hydrateRoot=function(t,e,n){if(!Dp(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Oy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=ky(e,null,t,1,n??null,i,!1,o,s),t[yr]=e.current,Qa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Rd(e)};rn.render=function(t,e,n){if(!Md(e))throw Error(L(200));return Bd(null,t,e,!1,n)};rn.unmountComponentAtNode=function(t){if(!Md(t))throw Error(L(40));return t._reactRootContainer?(io(function(){Bd(null,null,t,!1,function(){t._reactRootContainer=null,t[yr]=null})}),!0):!1};rn.unstable_batchedUpdates=Cp;rn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Md(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return Bd(t,e,n,!1,r)};rn.version="18.2.0-next-9e3b772b8-20220608";function Iy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Iy)}catch(t){console.error(t)}}Iy(),k3.exports=rn;var Px=k3.exports,fw=Px;F0.createRoot=fw.createRoot,F0.hydrateRoot=fw.hydrateRoot;const Ax="1.16.5",Dx=t=>t,Ld=t=>t,Tx=()=>`viem@${Ax}`;class U extends Error{constructor(e,n={}){var o;super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:Tx()});const r=n.cause instanceof U?n.cause.details:(o=n.cause)!=null&&o.message?n.cause.message:n.details,i=n.cause instanceof U&&n.cause.docsPath||n.docsPath;this.message=[e||"An error occurred.","",...n.metaMessages?[...n.metaMessages,""]:[],...i?[`Docs: https://viem.sh${i}.html${n.docsSlug?`#${n.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join(`
`),n.cause&&(this.cause=n.cause),this.details=r,this.docsPath=i,this.metaMessages=n.metaMessages,this.shortMessage=e}walk(e){return Ny(this,e)}}function Ny(t,e){return e!=null&&e(t)?t:t&&typeof t=="object"&&"cause"in t?Ny(t.cause,e):e?null:t}class Nh extends U{constructor({blockNumber:e,chain:n,contract:r}){super(`Chain "${n.name}" does not support contract "${r.name}".`,{metaMessages:["This could be due to any of the following:",...e&&r.blockCreated&&r.blockCreated>e?[`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${r.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class kx extends U{constructor({chain:e,currentChainId:n}){super(`The current chain of the wallet (id: ${n}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,{metaMessages:[`Current Chain ID:  ${n}`,`Expected Chain ID: ${e.id} – ${e.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}}class Ox extends U{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class Ry extends U{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}function My({chain:t,currentChainId:e}){if(!t)throw new Ox;if(e!==t.id)throw new kx({chain:t,currentChainId:e})}function Ud(t,e={}){const{fees:n=t.fees,formatters:r=t.formatters,serializers:i=t.serializers}=e;return{...t,fees:n,formatters:r,serializers:i}}function Ns({blockNumber:t,chain:e,contract:n}){var i;const r=(i=e==null?void 0:e.contracts)==null?void 0:i[n];if(!r)throw new Nh({chain:e,contract:{name:n}});if(t&&r.blockCreated&&r.blockCreated>t)throw new Nh({blockNumber:t,chain:e,contract:{name:n,blockCreated:r.blockCreated}});return r.address}const Ix=Ud({id:42161,name:"Arbitrum One",network:"arbitrum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://arb-mainnet.g.alchemy.com/v2"],webSocket:["wss://arb-mainnet.g.alchemy.com/v2"]},infura:{http:["https://arbitrum-mainnet.infura.io/v3"],webSocket:["wss://arbitrum-mainnet.infura.io/ws/v3"]},default:{http:["https://arb1.arbitrum.io/rpc"]},public:{http:["https://arb1.arbitrum.io/rpc"]}},blockExplorers:{etherscan:{name:"Arbiscan",url:"https://arbiscan.io"},default:{name:"Arbiscan",url:"https://arbiscan.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:7654707}}});class Nx extends U{constructor({max:e,min:n,signed:r,size:i,value:o}){super(`Number "${o}" is not in safe ${i?`${i*8}-bit ${r?"signed":"unsigned"} `:""}integer range ${e?`(${n} to ${e})`:`(above ${n})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class Rx extends U{constructor(e){super(`Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}}class Mx extends U{constructor({givenSize:e,maxSize:n}){super(`Size cannot exceed ${n} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}function er(t,{strict:e=!0}={}){return!t||typeof t!="string"?!1:e?/^0x[0-9a-fA-F]*$/.test(t):t.startsWith("0x")}function st(t){return er(t,{strict:!1})?Math.ceil((t.length-2)/2):t.length}function Yi(t,{dir:e="left"}={}){let n=typeof t=="string"?t.replace("0x",""):t,r=0;for(let i=0;i<n.length-1&&n[e==="left"?i:n.length-i-1].toString()==="0";i++)r++;return n=e==="left"?n.slice(r):n.slice(0,n.length-r),typeof t=="string"?(n.length===1&&e==="right"&&(n=`${n}0`),`0x${n.length%2===1?`0${n}`:n}`):n}class By extends U{constructor({offset:e,position:n,size:r}){super(`Slice ${n==="start"?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class Ly extends U{constructor({size:e,targetSize:n,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${n}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}function Rs(t,{dir:e,size:n=32}={}){return typeof t=="string"?ri(t,{dir:e,size:n}):Bx(t,{dir:e,size:n})}function ri(t,{dir:e,size:n=32}={}){if(n===null)return t;const r=t.replace("0x","");if(r.length>n*2)throw new Ly({size:Math.ceil(r.length/2),targetSize:n,type:"hex"});return`0x${r[e==="right"?"padEnd":"padStart"](n*2,"0")}`}function Bx(t,{dir:e,size:n=32}={}){if(n===null)return t;if(t.length>n)throw new Ly({size:t.length,targetSize:n,type:"bytes"});const r=new Uint8Array(n);for(let i=0;i<n;i++){const o=e==="right";r[o?i:n-i-1]=t[o?i:t.length-i-1]}return r}const Lx=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Pr(t,e={}){return typeof t=="number"||typeof t=="bigint"?le(t,e):typeof t=="string"?Tp(t,e):typeof t=="boolean"?Uy(t,e):ol(t,e)}function Uy(t,e={}){const n=`0x${Number(t)}`;return typeof e.size=="number"?(Ei(n,{size:e.size}),Rs(n,{size:e.size})):n}function ol(t,e={}){let n="";for(let i=0;i<t.length;i++)n+=Lx[t[i]];const r=`0x${n}`;return typeof e.size=="number"?(Ei(r,{size:e.size}),Rs(r,{dir:"right",size:e.size})):r}function le(t,e={}){const{signed:n,size:r}=e,i=BigInt(t);let o;r?n?o=(1n<<BigInt(r)*8n-1n)-1n:o=2n**(BigInt(r)*8n)-1n:typeof t=="number"&&(o=BigInt(Number.MAX_SAFE_INTEGER));const s=typeof o=="bigint"&&n?-o-1n:0;if(o&&i>o||i<s){const l=typeof t=="bigint"?"n":"";throw new Nx({max:o?`${o}${l}`:void 0,min:`${s}${l}`,signed:n,size:r,value:`${t}${l}`})}const a=`0x${(n&&i<0?(1n<<BigInt(r*8))+BigInt(i):i).toString(16)}`;return r?Rs(a,{size:r}):a}const Ux=new TextEncoder;function Tp(t,e={}){const n=Ux.encode(t);return ol(n,e)}const jx=new TextEncoder;function fi(t,e={}){return typeof t=="number"||typeof t=="bigint"?zx(t,e):typeof t=="boolean"?Fx(t,e):er(t)?kp(t,e):wr(t,e)}function Fx(t,e={}){const n=new Uint8Array(1);return n[0]=Number(t),typeof e.size=="number"?(Ei(n,{size:e.size}),Rs(n,{size:e.size})):n}const lr={zero:48,nine:57,A:65,F:70,a:97,f:102};function hw(t){if(t>=lr.zero&&t<=lr.nine)return t-lr.zero;if(t>=lr.A&&t<=lr.F)return t-(lr.A-10);if(t>=lr.a&&t<=lr.f)return t-(lr.a-10)}function kp(t,e={}){let n=t;e.size&&(Ei(n,{size:e.size}),n=Rs(n,{dir:"right",size:e.size}));let r=n.slice(2);r.length%2&&(r=`0${r}`);const i=r.length/2,o=new Uint8Array(i);for(let s=0,a=0;s<i;s++){const l=hw(r.charCodeAt(a++)),u=hw(r.charCodeAt(a++));if(l===void 0||u===void 0)throw new U(`Invalid byte sequence ("${r[a-2]}${r[a-1]}" in "${r}").`);o[s]=l*16+u}return o}function zx(t,e){const n=le(t,e);return kp(n)}function wr(t,e={}){const n=jx.encode(t);return typeof e.size=="number"?(Ei(n,{size:e.size}),Rs(n,{dir:"right",size:e.size})):n}function Ei(t,{size:e}){if(st(t)>e)throw new Mx({givenSize:st(t),maxSize:e})}function jd(t,e={}){const{signed:n}=e;e.size&&Ei(t,{size:e.size});const r=BigInt(t);if(!n)return r;const i=(t.length-2)/2,o=(1n<<BigInt(i)*8n-1n)-1n;return r<=o?r:r-BigInt(`0x${"f".padStart(i*2,"f")}`)-1n}function Wx(t,e={}){let n=t;if(e.size&&(Ei(n,{size:e.size}),n=Yi(n)),Yi(n)==="0x00")return!1;if(Yi(n)==="0x01")return!0;throw new Rx(n)}function At(t,e={}){return Number(jd(t,e))}function jy(t,e={}){let n=kp(t);return e.size&&(Ei(n,{size:e.size}),n=Yi(n,{dir:"right"})),new TextDecoder().decode(n)}const Fy={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559"};function zy(t){const e={...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,chainId:t.chainId?At(t.chainId):void 0,gas:t.gas?BigInt(t.gas):void 0,gasPrice:t.gasPrice?BigInt(t.gasPrice):void 0,maxFeePerGas:t.maxFeePerGas?BigInt(t.maxFeePerGas):void 0,maxPriorityFeePerGas:t.maxPriorityFeePerGas?BigInt(t.maxPriorityFeePerGas):void 0,nonce:t.nonce?At(t.nonce):void 0,to:t.to?t.to:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,type:t.type?Fy[t.type]:void 0,typeHex:t.type?t.type:void 0,value:t.value?BigInt(t.value):void 0,v:t.v?BigInt(t.v):void 0};return e.type==="legacy"&&(delete e.accessList,delete e.maxFeePerGas,delete e.maxPriorityFeePerGas),e.type==="eip2930"&&(delete e.maxFeePerGas,delete e.maxPriorityFeePerGas),e}function Wy(t){var n;const e=(n=t.transactions)==null?void 0:n.map(r=>typeof r=="string"?r:zy(r));return{...t,baseFeePerGas:t.baseFeePerGas?BigInt(t.baseFeePerGas):null,difficulty:t.difficulty?BigInt(t.difficulty):void 0,gasLimit:t.gasLimit?BigInt(t.gasLimit):void 0,gasUsed:t.gasUsed?BigInt(t.gasUsed):void 0,hash:t.hash?t.hash:null,logsBloom:t.logsBloom?t.logsBloom:null,nonce:t.nonce?t.nonce:null,number:t.number?BigInt(t.number):null,size:t.size?BigInt(t.size):void 0,timestamp:t.timestamp?BigInt(t.timestamp):void 0,transactions:e,totalDifficulty:t.totalDifficulty?BigInt(t.totalDifficulty):null}}function Ln(t,{args:e,eventName:n}={}){return{...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,logIndex:t.logIndex?Number(t.logIndex):null,transactionHash:t.transactionHash?t.transactionHash:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,...n?{args:e,eventName:n}:{}}}const Hx={"0x0":"reverted","0x1":"success"};function Vx(t){return{...t,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,contractAddress:t.contractAddress?t.contractAddress:null,cumulativeGasUsed:t.cumulativeGasUsed?BigInt(t.cumulativeGasUsed):null,effectiveGasPrice:t.effectiveGasPrice?BigInt(t.effectiveGasPrice):null,gasUsed:t.gasUsed?BigInt(t.gasUsed):null,logs:t.logs?t.logs.map(e=>Ln(e)):null,to:t.to?t.to:null,transactionIndex:t.transactionIndex?At(t.transactionIndex):null,status:t.status?Hx[t.status]:null,type:t.type?Fy[t.type]||t.type:null}}const qx={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"};function Fd(t){return{...t,gas:typeof t.gas<"u"?le(t.gas):void 0,gasPrice:typeof t.gasPrice<"u"?le(t.gasPrice):void 0,maxFeePerGas:typeof t.maxFeePerGas<"u"?le(t.maxFeePerGas):void 0,maxPriorityFeePerGas:typeof t.maxPriorityFeePerGas<"u"?le(t.maxPriorityFeePerGas):void 0,nonce:typeof t.nonce<"u"?le(t.nonce):void 0,type:typeof t.type<"u"?qx[t.type]:void 0,value:typeof t.value<"u"?le(t.value):void 0}}class sl extends U{constructor({address:e}){super(`Address "${e}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}const Gx={gwei:9,wei:18},Kx={ether:-9,wei:9},Zx={ether:-18,gwei:-9};function Mc(t,e){let n=t.toString();const r=n.startsWith("-");r&&(n=n.slice(1)),n=n.padStart(e,"0");let[i,o]=[n.slice(0,n.length-e),n.slice(n.length-e)];return o=o.replace(/(0+)$/,""),`${r?"-":""}${i||"0"}${o?`.${o}`:""}`}function qt(t,e="wei"){return Mc(t,Kx[e])}class Vo extends U{constructor({cause:e,message:n}={}){var i;const r=(i=n==null?void 0:n.replace("execution reverted: ",""))==null?void 0:i.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(Vo,"code",{enumerable:!0,configurable:!0,writable:!0,value:3});Object.defineProperty(Vo,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class Bc extends U{constructor({cause:e,maxFeePerGas:n}={}){super(`The fee cap (\`maxFeePerGas\`${n?` = ${qt(n)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(Bc,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class Rh extends U{constructor({cause:e,maxFeePerGas:n}={}){super(`The fee cap (\`maxFeePerGas\`${n?` = ${qt(n)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(Rh,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class Mh extends U{constructor({cause:e,nonce:n}={}){super(`Nonce provided for the transaction ${n?`(${n}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(Mh,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class Bh extends U{constructor({cause:e,nonce:n}={}){super([`Nonce provided for the transaction ${n?`(${n}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(Bh,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class Lh extends U{constructor({cause:e,nonce:n}={}){super(`Nonce provided for the transaction ${n?`(${n}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(Lh,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class Uh extends U{constructor({cause:e}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`),{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(Uh,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class jh extends U{constructor({cause:e,gas:n}={}){super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(jh,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class Fh extends U{constructor({cause:e,gas:n}={}){super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(Fh,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class zh extends U{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(zh,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class Lc extends U{constructor({cause:e,maxPriorityFeePerGas:n,maxFeePerGas:r}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${n?` = ${qt(n)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${qt(r)} gwei`:""}).`].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(Lc,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class zd extends U{constructor({cause:e}){super(`An error occurred while executing: ${e==null?void 0:e.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}const Qx=/^0x[a-fA-F0-9]{40}$/;function ls(t){return Qx.test(t)}function Cr(t){return typeof t[0]=="string"?Op(t):Yx(t)}function Yx(t){let e=0;for(const i of t)e+=i.length;const n=new Uint8Array(e);let r=0;for(const i of t)n.set(i,r),r+=i.length;return n}function Op(t){return`0x${t.reduce((e,n)=>e+n.replace("0x",""),"")}`}function _i(t,{includeName:e=!1}={}){if(t.type!=="function"&&t.type!=="event"&&t.type!=="error")throw new c7(t.type);return`${t.name}(${Wd(t.inputs,{includeName:e})})`}function Wd(t,{includeName:e=!1}={}){return t?t.map(n=>Xx(n,{includeName:e})).join(e?", ":","):""}function Xx(t,{includeName:e}){return t.type.startsWith("tuple")?`(${Wd(t.components,{includeName:e})})${t.type.slice(5)}`:t.type+(e&&t.name?` ${t.name}`:"")}class Jx extends U{constructor({docsPath:e}){super(["A constructor was not found on the ABI.","Make sure you are using the correct ABI and that the constructor exists on it."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}}class pw extends U{constructor({docsPath:e}){super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.","Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}}class Ip extends U{constructor({data:e,params:n,size:r}){super([`Data size of ${r} bytes is too small for given parameters.`].join(`
`),{metaMessages:[`Params: (${Wd(n,{includeName:!0})})`,`Data:   ${e} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=n,this.size=r}}class Hd extends U{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class e7 extends U{constructor({expectedLength:e,givenLength:n,type:r}){super([`ABI encoding array length mismatch for type ${r}.`,`Expected length: ${e}`,`Given length: ${n}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class t7 extends U{constructor({expectedSize:e,value:n}){super(`Size of bytes "${n}" (bytes${st(n)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class n7 extends U{constructor({expectedLength:e,givenLength:n}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${e}`,`Given length (values): ${n}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class Hy extends U{constructor(e,{docsPath:n}){super([`Encoded error signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class r7 extends U{constructor({docsPath:e}){super("Cannot extract event signature from empty topics.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}}class i7 extends U{constructor(e,{docsPath:n}){super([`Encoded event signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it.",`You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}}class gw extends U{constructor(e,{docsPath:n}={}){super([`Event ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}}class Uc extends U{constructor(e,{docsPath:n}={}){super([`Function ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class o7 extends U{constructor(e,{docsPath:n}){super([`Function "${e}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class s7 extends U{constructor({expectedSize:e,givenSize:n}){super(`Expected bytes${e}, got bytes${n}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}}class oo extends U{constructor({abiItem:e,data:n,params:r,size:i}){super([`Data size of ${i} bytes is too small for non-indexed event parameters.`].join(`
`),{metaMessages:[`Params: (${Wd(r,{includeName:!0})})`,`Data:   ${n} (${i} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e,this.data=n,this.params=r,this.size=i}}class Ms extends U{constructor({abiItem:e,param:n}){super([`Expected a topic for indexed event parameter${n.name?` "${n.name}"`:""} on event "${_i(e,{includeName:!0})}".`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e}}class a7 extends U{constructor(e,{docsPath:n}){super([`Type "${e}" is not a valid encoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class l7 extends U{constructor(e,{docsPath:n}){super([`Type "${e}" is not a valid decoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class u7 extends U{constructor(e){super([`Value "${e}" is not a valid array.`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class c7 extends U{constructor(e){super([`"${e}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}class d7 extends U{constructor(e){super(`Filter type "${e}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}}const f7=/((function|event)\s)?(.*)(\((.*)\))/;function Vy(t){const e=t.match(f7),n=(e==null?void 0:e[2])||void 0,r=e==null?void 0:e[3],i=(e==null?void 0:e[5])||void 0;return{type:n,name:r,params:i}}function h7(t){return Vy(t).name}function p7(t){const e=Vy(t).params,n=e==null?void 0:e.split(",").map(r=>r.trim().split(" "));return n==null?void 0:n.map(r=>({type:r[0],name:r[1]==="indexed"?r[2]:r[1],...r[1]==="indexed"?{indexed:!0}:{}}))}const qy=t=>{if(typeof t=="string"){const e=h7(t),n=p7(t)||[];return`${e}(${n.map(({type:r})=>r).join(",")})`}return _i(t)},g7=t=>qy(t);function mw(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function Gy(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function ww(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function m7(t,e){Gy(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const Nu=BigInt(2**32-1),vw=BigInt(32);function w7(t,e=!1){return e?{h:Number(t&Nu),l:Number(t>>vw&Nu)}:{h:Number(t>>vw&Nu)|0,l:Number(t&Nu)|0}}function v7(t,e=!1){let n=new Uint32Array(t.length),r=new Uint32Array(t.length);for(let i=0;i<t.length;i++){const{h:o,l:s}=w7(t[i],e);[n[i],r[i]]=[o,s]}return[n,r]}const y7=(t,e,n)=>t<<n|e>>>32-n,b7=(t,e,n)=>e<<n|t>>>32-n,x7=(t,e,n)=>e<<n-32|t>>>64-n,C7=(t,e,n)=>t<<n-32|e>>>64-n;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const E7=t=>t instanceof Uint8Array,_7=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),S7=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!S7)throw new Error("Non little-endian hardware is not supported");function $7(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function Ky(t){if(typeof t=="string"&&(t=$7(t)),!E7(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}class P7{clone(){return this._cloneInto()}}function A7(t){const e=r=>t().update(Ky(r)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}const[Zy,Qy,Yy]=[[],[],[]],D7=BigInt(0),ia=BigInt(1),T7=BigInt(2),k7=BigInt(7),O7=BigInt(256),I7=BigInt(113);for(let t=0,e=ia,n=1,r=0;t<24;t++){[n,r]=[r,(2*n+3*r)%5],Zy.push(2*(5*r+n)),Qy.push((t+1)*(t+2)/2%64);let i=D7;for(let o=0;o<7;o++)e=(e<<ia^(e>>k7)*I7)%O7,e&T7&&(i^=ia<<(ia<<BigInt(o))-ia);Yy.push(i)}const[N7,R7]=v7(Yy,!0),yw=(t,e,n)=>n>32?x7(t,e,n):y7(t,e,n),bw=(t,e,n)=>n>32?C7(t,e,n):b7(t,e,n);function M7(t,e=24){const n=new Uint32Array(10);for(let r=24-e;r<24;r++){for(let s=0;s<10;s++)n[s]=t[s]^t[s+10]^t[s+20]^t[s+30]^t[s+40];for(let s=0;s<10;s+=2){const a=(s+8)%10,l=(s+2)%10,u=n[l],c=n[l+1],f=yw(u,c,1)^n[a],p=bw(u,c,1)^n[a+1];for(let w=0;w<50;w+=10)t[s+w]^=f,t[s+w+1]^=p}let i=t[2],o=t[3];for(let s=0;s<24;s++){const a=Qy[s],l=yw(i,o,a),u=bw(i,o,a),c=Zy[s];i=t[c],o=t[c+1],t[c]=l,t[c+1]=u}for(let s=0;s<50;s+=10){for(let a=0;a<10;a++)n[a]=t[s+a];for(let a=0;a<10;a++)t[s+a]^=~n[(a+2)%10]&n[(a+4)%10]}t[0]^=N7[r],t[1]^=R7[r]}n.fill(0)}class Np extends P7{constructor(e,n,r,i=!1,o=24){if(super(),this.blockLen=e,this.suffix=n,this.outputLen=r,this.enableXOF=i,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,mw(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=_7(this.state)}keccak(){M7(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){ww(this);const{blockLen:n,state:r}=this;e=Ky(e);const i=e.length;for(let o=0;o<i;){const s=Math.min(n-this.pos,i-o);for(let a=0;a<s;a++)r[this.pos++]^=e[o++];this.pos===n&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:n,pos:r,blockLen:i}=this;e[r]^=n,n&128&&r===i-1&&this.keccak(),e[i-1]^=128,this.keccak()}writeInto(e){ww(this,!1),Gy(e),this.finish();const n=this.state,{blockLen:r}=this;for(let i=0,o=e.length;i<o;){this.posOut>=r&&this.keccak();const s=Math.min(r-this.posOut,o-i);e.set(n.subarray(this.posOut,this.posOut+s),i),this.posOut+=s,i+=s}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return mw(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(m7(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:n,suffix:r,outputLen:i,rounds:o,enableXOF:s}=this;return e||(e=new Np(n,r,i,s,o)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=o,e.suffix=r,e.outputLen=i,e.enableXOF=s,e.destroyed=this.destroyed,e}}const B7=(t,e,n)=>A7(()=>new Np(e,t,n)),L7=B7(1,136,256/8);function It(t,e){const n=e||"hex",r=L7(er(t,{strict:!1})?fi(t):t);return n==="bytes"?r:Pr(r)}const U7=t=>It(fi(t)),Rp=t=>U7(g7(t));function et(t,e,n,{strict:r}={}){return er(t,{strict:!1})?F7(t,e,n,{strict:r}):j7(t,e,n,{strict:r})}function Xy(t,e){if(typeof e=="number"&&e>0&&e>st(t)-1)throw new By({offset:e,position:"start",size:st(t)})}function Jy(t,e,n){if(typeof e=="number"&&typeof n=="number"&&st(t)!==n-e)throw new By({offset:n,position:"end",size:st(t)})}function j7(t,e,n,{strict:r}={}){Xy(t,e);const i=t.slice(e,n);return r&&Jy(i,e,n),i}function F7(t,e,n,{strict:r}={}){Xy(t,e);const i=`0x${t.replace("0x","").slice((e??0)*2,(n??t.length)*2)}`;return r&&Jy(i,e,n),i}function Gl(t,e){if(t.length!==e.length)throw new n7({expectedLength:t.length,givenLength:e.length});const n=z7({params:t,values:e}),r=Bp(n);return r.length===0?"0x":r}function z7({params:t,values:e}){const n=[];for(let r=0;r<t.length;r++)n.push(Mp({param:t[r],value:e[r]}));return n}function Mp({param:t,value:e}){const n=Vd(t.type);if(n){const[r,i]=n;return H7(e,{length:r,param:{...t,type:i}})}if(t.type==="tuple")return Z7(e,{param:t});if(t.type==="address")return W7(e);if(t.type==="bool")return q7(e);if(t.type.startsWith("uint")||t.type.startsWith("int")){const r=t.type.startsWith("int");return G7(e,{signed:r})}if(t.type.startsWith("bytes"))return V7(e,{param:t});if(t.type==="string")return K7(e);throw new a7(t.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function Bp(t){let e=0;for(let o=0;o<t.length;o++){const{dynamic:s,encoded:a}=t[o];s?e+=32:e+=st(a)}const n=[],r=[];let i=0;for(let o=0;o<t.length;o++){const{dynamic:s,encoded:a}=t[o];s?(n.push(le(e+i,{size:32})),r.push(a),i+=st(a)):n.push(a)}return Cr([...n,...r])}function W7(t){if(!ls(t))throw new sl({address:t});return{dynamic:!1,encoded:ri(t.toLowerCase())}}function H7(t,{length:e,param:n}){const r=e===null;if(!Array.isArray(t))throw new u7(t);if(!r&&t.length!==e)throw new e7({expectedLength:e,givenLength:t.length,type:`${n.type}[${e}]`});let i=!1;const o=[];for(let s=0;s<t.length;s++){const a=Mp({param:n,value:t[s]});a.dynamic&&(i=!0),o.push(a)}if(r||i){const s=Bp(o);if(r){const a=le(o.length,{size:32});return{dynamic:!0,encoded:o.length>0?Cr([a,s]):a}}if(i)return{dynamic:!0,encoded:s}}return{dynamic:!1,encoded:Cr(o.map(({encoded:s})=>s))}}function V7(t,{param:e}){const[,n]=e.type.split("bytes"),r=st(t);if(!n){let i=t;return r%32!==0&&(i=ri(i,{dir:"right",size:Math.ceil((t.length-2)/2/32)*32})),{dynamic:!0,encoded:Cr([ri(le(r,{size:32})),i])}}if(r!==parseInt(n))throw new t7({expectedSize:parseInt(n),value:t});return{dynamic:!1,encoded:ri(t,{dir:"right"})}}function q7(t){return{dynamic:!1,encoded:ri(Uy(t))}}function G7(t,{signed:e}){return{dynamic:!1,encoded:le(t,{size:32,signed:e})}}function K7(t){const e=Tp(t),n=Math.ceil(st(e)/32),r=[];for(let i=0;i<n;i++)r.push(ri(et(e,i*32,(i+1)*32),{dir:"right"}));return{dynamic:!0,encoded:Cr([ri(le(st(e),{size:32})),...r])}}function Z7(t,{param:e}){let n=!1;const r=[];for(let i=0;i<e.components.length;i++){const o=e.components[i],s=Array.isArray(t)?i:o.name,a=Mp({param:o,value:t[s]});r.push(a),a.dynamic&&(n=!0)}return{dynamic:n,encoded:n?Bp(r):Cr(r.map(({encoded:i})=>i))}}function Vd(t){const e=t.match(/^(.*)\[(\d+)?\]$/);return e?[e[2]?Number(e[2]):null,e[1]]:void 0}const Q7=t=>It(fi(t)),Lp=t=>et(Q7(qy(t)),0,4);function Kl({abi:t,args:e=[],name:n}){const r=er(n,{strict:!1}),i=t.filter(o=>r?o.type==="function"?Lp(o)===n:o.type==="event"?Rp(o)===n:!1:"name"in o&&o.name===n);if(i.length!==0){if(i.length===1)return i[0];for(const o of i){if(!("inputs"in o))continue;if(!e||e.length===0){if(!o.inputs||o.inputs.length===0)return o;continue}if(!o.inputs||o.inputs.length===0||o.inputs.length!==e.length)continue;if(e.every((a,l)=>{const u="inputs"in o&&o.inputs[l];return u?Wh(a,u):!1}))return o}return i[0]}}function Wh(t,e){const n=typeof t,r=e.type;switch(r){case"address":return ls(t);case"bool":return n==="boolean";case"function":return n==="string";case"string":return n==="string";default:return r==="tuple"&&"components"in e?Object.values(e.components).every((i,o)=>Wh(Object.values(t)[o],i)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r)?n==="number"||n==="bigint":/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r)?n==="string"||t instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r)?Array.isArray(t)&&t.every(i=>Wh(i,{...e,type:r.replace(/(\[[0-9]{0,}\])$/,"")})):!1}}function Zl({abi:t,eventName:e,args:n}){var a;let r=t[0];if(e&&(r=Kl({abi:t,args:n,name:e}),!r))throw new gw(e,{docsPath:"/docs/contract/encodeEventTopics"});if(r.type!=="event")throw new gw(void 0,{docsPath:"/docs/contract/encodeEventTopics"});const i=_i(r),o=Rp(i);let s=[];if(n&&"inputs"in r){const l=(a=r.inputs)==null?void 0:a.filter(c=>"indexed"in c&&c.indexed),u=Array.isArray(n)?n:Object.values(n).length>0?(l==null?void 0:l.map(c=>n[c.name]))??[]:[];u.length>0&&(s=(l==null?void 0:l.map((c,f)=>Array.isArray(u[f])?u[f].map((p,w)=>xw({param:c,value:u[f][w]})):u[f]?xw({param:c,value:u[f]}):null))??[])}return[o,...s]}function xw({param:t,value:e}){if(t.type==="string"||t.type==="bytes")return It(fi(e));if(t.type==="tuple"||t.type.match(/^(.*)\[(\d+)?\]$/))throw new d7(t.type);return Gl([t],[e])}function qd(t,{method:e}){var r,i;const n={};return t.transport.type==="fallback"&&((i=(r=t.transport).onResponse)==null||i.call(r,({method:o,response:s,status:a,transport:l})=>{a==="success"&&e===o&&(n[s]=l.request)})),o=>n[o]||t.request}async function e5(t,{address:e,abi:n,args:r,eventName:i,fromBlock:o,strict:s,toBlock:a}){const l=qd(t,{method:"eth_newFilter"}),u=i?Zl({abi:n,args:r,eventName:i}):void 0,c=await t.request({method:"eth_newFilter",params:[{address:e,fromBlock:typeof o=="bigint"?le(o):o,toBlock:typeof a=="bigint"?le(a):a,topics:u}]});return{abi:n,args:r,eventName:i,id:c,request:l(c),strict:s,type:"event"}}function Cn(t){return typeof t=="string"?{address:t,type:"json-rpc"}:t}function Si({abi:t,args:e,functionName:n}){let r=t[0];if(n&&(r=Kl({abi:t,args:e,name:n}),!r))throw new Uc(n,{docsPath:"/docs/contract/encodeFunctionData"});if(r.type!=="function")throw new Uc(void 0,{docsPath:"/docs/contract/encodeFunctionData"});const i=_i(r),o=Lp(i),s="inputs"in r&&r.inputs?Gl(r.inputs,e??[]):void 0;return Op([o,s??"0x"])}const t5={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},Y7={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},X7={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"};function Up(t,e){const n=e?`${e}${t.toLowerCase()}`:t.substring(2).toLowerCase(),r=It(wr(n),"bytes"),i=(e?n.substring(`${e}0x`.length):n).split("");for(let o=0;o<40;o+=2)r[o>>1]>>4>=8&&i[o]&&(i[o]=i[o].toUpperCase()),(r[o>>1]&15)>=8&&i[o+1]&&(i[o+1]=i[o+1].toUpperCase());return`0x${i.join("")}`}function Mn(t,e){if(!ls(t))throw new sl({address:t});return Up(t,e)}function Gd(t,e){if(e==="0x"&&t.length>0)throw new Hd;if(st(e)&&st(e)<32)throw new Ip({data:e,params:t,size:st(e)});return J7({data:e,params:t})}function J7({data:t,params:e}){const n=[];let r=0;for(let i=0;i<e.length;i++){if(r>=st(t))throw new Ip({data:t,params:e,size:st(t)});const o=e[i],{consumed:s,value:a}=Xo({data:t,param:o,position:r});n.push(a),r+=s}return n}function Xo({data:t,param:e,position:n}){const r=Vd(e.type);if(r){const[o,s]=r;return tC(t,{length:o,param:{...e,type:s},position:n})}if(e.type==="tuple")return sC(t,{param:e,position:n});if(e.type==="string")return oC(t,{position:n});if(e.type.startsWith("bytes"))return rC(t,{param:e,position:n});const i=et(t,n,n+32,{strict:!0});if(e.type.startsWith("uint")||e.type.startsWith("int"))return iC(i,{param:e});if(e.type==="address")return eC(i);if(e.type==="bool")return nC(i);throw new l7(e.type,{docsPath:"/docs/contract/decodeAbiParameters"})}function eC(t){return{consumed:32,value:Up(et(t,-20))}}function tC(t,{param:e,length:n,position:r}){if(!n){const s=At(et(t,r,r+32,{strict:!0})),a=At(et(t,s,s+32,{strict:!0}));let l=0;const u=[];for(let c=0;c<a;++c){const f=Xo({data:et(t,s+32),param:e,position:l});l+=f.consumed,u.push(f.value)}return{value:u,consumed:32}}if(jc(e)){const s=Vd(e.type),a=!(s!=null&&s[0]);let l=0;const u=[];for(let c=0;c<n;++c){const f=At(et(t,r,r+32,{strict:!0})),p=Xo({data:et(t,f),param:e,position:a?l:c*32});l+=p.consumed,u.push(p.value)}return{value:u,consumed:32}}let i=0;const o=[];for(let s=0;s<n;++s){const a=Xo({data:t,param:e,position:r+i});i+=a.consumed,o.push(a.value)}return{value:o,consumed:i}}function nC(t){return{consumed:32,value:Wx(t)}}function rC(t,{param:e,position:n}){const[r,i]=e.type.split("bytes");if(!i){const s=At(et(t,n,n+32,{strict:!0})),a=At(et(t,s,s+32,{strict:!0}));return a===0?{consumed:32,value:"0x"}:{consumed:32,value:et(t,s+32,s+32+a,{strict:!0})}}return{consumed:32,value:et(t,n,n+parseInt(i),{strict:!0})}}function iC(t,{param:e}){const n=e.type.startsWith("int");return{consumed:32,value:parseInt(e.type.split("int")[1]||"256")>48?jd(t,{signed:n}):At(t,{signed:n})}}function oC(t,{position:e}){const n=At(et(t,e,e+32,{strict:!0})),r=At(et(t,n,n+32,{strict:!0}));return r===0?{consumed:32,value:""}:{consumed:32,value:jy(Yi(et(t,n+32,n+32+r,{strict:!0})))}}function sC(t,{param:e,position:n}){const r=e.components.length===0||e.components.some(({name:s})=>!s),i=r?[]:{};let o=0;if(jc(e)){const s=At(et(t,n,n+32,{strict:!0}));for(let a=0;a<e.components.length;++a){const l=e.components[a],u=Xo({data:et(t,s),param:l,position:o});o+=u.consumed,i[r?a:l==null?void 0:l.name]=u.value}return{consumed:32,value:i}}for(let s=0;s<e.components.length;++s){const a=e.components[s],l=Xo({data:t,param:a,position:n+o});o+=l.consumed,i[r?s:a==null?void 0:a.name]=l.value}return{consumed:o,value:i}}function jc(t){var r;const{type:e}=t;if(e==="string"||e==="bytes"||e.endsWith("[]"))return!0;if(e==="tuple")return(r=t.components)==null?void 0:r.some(jc);const n=Vd(t.type);return!!(n&&jc({...t,type:n[1]}))}function aC({abi:t,data:e}){const n=et(e,0,4);if(n==="0x")throw new Hd;const i=[...t||[],Y7,X7].find(o=>o.type==="error"&&n===Lp(_i(o)));if(!i)throw new Hy(n,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:i,args:"inputs"in i&&i.inputs&&i.inputs.length>0?Gd(i.inputs,et(e,4)):void 0,errorName:i.name}}const Rt=(t,e,n)=>JSON.stringify(t,(r,i)=>{const o=typeof i=="bigint"?i.toString():i;return typeof e=="function"?e(r,o):o},n);function n5({abiItem:t,args:e,includeFunctionName:n=!0,includeName:r=!1}){if("name"in t&&"inputs"in t&&t.inputs)return`${n?t.name:""}(${t.inputs.map((i,o)=>`${r&&i.name?`${i.name}: `:""}${typeof e[o]=="object"?Rt(e[o]):e[o]}`).join(", ")})`}function jp(t,e="wei"){return Mc(t,Gx[e])}function Ql(t){const e=Object.entries(t).map(([r,i])=>i===void 0||i===!1?null:[r,i]).filter(Boolean),n=e.reduce((r,[i])=>Math.max(r,i.length),0);return e.map(([r,i])=>`  ${`${r}:`.padEnd(n+1)}  ${i}`).join(`
`)}class lC extends U{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class uC extends U{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",Ql(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class cC extends U{constructor(e,{account:n,docsPath:r,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:u,nonce:c,to:f,value:p}){const w=Ql({chain:i&&`${i==null?void 0:i.name} (id: ${i==null?void 0:i.id})`,from:n==null?void 0:n.address,to:f,value:typeof p<"u"&&`${jp(p)} ${(i==null?void 0:i.nativeCurrency.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${qt(a)} gwei`,maxFeePerGas:typeof l<"u"&&`${qt(l)} gwei`,maxPriorityFeePerGas:typeof u<"u"&&`${qt(u)} gwei`,nonce:c});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",w].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}}class r5 extends U{constructor({blockHash:e,blockNumber:n,blockTag:r,hash:i,index:o}){let s="Transaction";r&&o!==void 0&&(s=`Transaction at block time "${r}" at index "${o}"`),e&&o!==void 0&&(s=`Transaction at block hash "${e}" at index "${o}"`),n&&o!==void 0&&(s=`Transaction at block number "${n}" at index "${o}"`),i&&(s=`Transaction with hash "${i}"`),super(`${s} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}}class i5 extends U{constructor({hash:e}){super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}}class dC extends U{constructor({hash:e}){super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}class o5 extends U{constructor(e,{account:n,docsPath:r,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:u,nonce:c,to:f,value:p}){const w=n?Cn(n):void 0,v=Ql({from:w==null?void 0:w.address,to:f,value:typeof p<"u"&&`${jp(p)} ${(i==null?void 0:i.nativeCurrency.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${qt(a)} gwei`,maxFeePerGas:typeof l<"u"&&`${qt(l)} gwei`,maxPriorityFeePerGas:typeof u<"u"&&`${qt(u)} gwei`,nonce:c});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",v].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}class Fp extends U{constructor(e,{abi:n,args:r,contractAddress:i,docsPath:o,functionName:s,sender:a}){const l=Kl({abi:n,args:r,name:s}),u=l?n5({abiItem:l,args:r,includeFunctionName:!1,includeName:!1}):void 0,c=l?_i(l,{includeName:!0}):void 0,f=Ql({address:i&&Dx(i),function:c,args:u&&u!=="()"&&`${[...Array((s==null?void 0:s.length)??0).keys()].map(()=>" ").join("")}${u}`,sender:a});super(e.shortMessage||`An unknown error occurred while executing the contract function "${s}".`,{cause:e,docsPath:o,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",f].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=n,this.args=r,this.cause=e,this.contractAddress=i,this.functionName=s,this.sender=a}}class Hh extends U{constructor({abi:e,data:n,functionName:r,message:i}){let o,s,a,l;if(n&&n!=="0x")try{s=aC({abi:e,data:n});const{abiItem:c,errorName:f,args:p}=s;if(f==="Error")l=p[0];else if(f==="Panic"){const[w]=p;l=t5[w]}else{const w=c?_i(c,{includeName:!0}):void 0,v=c&&p?n5({abiItem:c,args:p,includeFunctionName:!1,includeName:!1}):void 0;a=[w?`Error: ${w}`:"",v&&v!=="()"?`       ${[...Array((f==null?void 0:f.length)??0).keys()].map(()=>" ").join("")}${v}`:""]}}catch(c){o=c}else i&&(l=i);let u;o instanceof Hy&&(u=o.signature,a=[`Unable to decode signature "${u}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${u}.`]),super(l&&l!=="execution reverted"||u?[`The contract function "${r}" reverted with the following ${u?"signature":"reason"}:`,l||u].join(`
`):`The contract function "${r}" reverted.`,{cause:o,metaMessages:a}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=s,this.reason=l,this.signature=u}}class fC extends U{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class zp extends U{constructor({data:e,message:n}){super(n||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}class Oa extends U{constructor({body:e,details:n,headers:r,status:i,url:o}){super("HTTP request failed.",{details:n,metaMessages:[i&&`Status: ${i}`,`URL: ${Ld(o)}`,e&&`Request body: ${Rt(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=r,this.status=i,this.url=o}}class hC extends U{constructor({body:e,details:n,url:r}){super("WebSocket request failed.",{details:n,metaMessages:[`URL: ${Ld(r)}`,`Request body: ${Rt(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}}class Wp extends U{constructor({body:e,error:n,url:r}){super("RPC Request failed.",{cause:n,details:n.message,metaMessages:[`URL: ${Ld(r)}`,`Request body: ${Rt(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=n.code}}class Vh extends U{constructor({body:e,url:n}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${Ld(n)}`,`Request body: ${Rt(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}const pC=-1;class Zt extends U{constructor(e,{code:n,docsPath:r,metaMessages:i,shortMessage:o}){super(o,{cause:e,docsPath:r,metaMessages:i||(e==null?void 0:e.metaMessages)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof Wp?e.code:n??pC}}class Bs extends Zt{constructor(e,n){super(e,n),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=n.data}}class al extends Zt{constructor(e){super(e,{code:al.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(al,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class ll extends Zt{constructor(e){super(e,{code:ll.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(ll,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class ul extends Zt{constructor(e){super(e,{code:ul.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(ul,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class cl extends Zt{constructor(e){super(e,{code:cl.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(cl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class us extends Zt{constructor(e){super(e,{code:us.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(us,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class so extends Zt{constructor(e){super(e,{code:so.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(so,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class dl extends Zt{constructor(e){super(e,{code:dl.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(dl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class cs extends Zt{constructor(e){super(e,{code:cs.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(cs,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class fl extends Zt{constructor(e){super(e,{code:fl.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(fl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class hl extends Zt{constructor(e){super(e,{code:hl.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(hl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class pl extends Zt{constructor(e){super(e,{code:pl.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(pl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class gl extends Zt{constructor(e){super(e,{code:gl.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(gl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class zt extends Bs{constructor(e){super(e,{code:zt.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(zt,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class ml extends Bs{constructor(e){super(e,{code:ml.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(ml,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class wl extends Bs{constructor(e){super(e,{code:wl.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(wl,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class vl extends Bs{constructor(e){super(e,{code:vl.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(vl,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class yl extends Bs{constructor(e){super(e,{code:yl.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(yl,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class Er extends Bs{constructor(e){super(e,{code:Er.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(Er,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class gC extends Zt{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}const mC=3;function bl(t,{abi:e,address:n,args:r,docsPath:i,functionName:o,sender:s}){const{code:a,data:l,message:u,shortMessage:c}=t instanceof zp?t:t instanceof U?t.walk(p=>"data"in p)||t.walk():{},f=(()=>t instanceof Hd?new fC({functionName:o}):[mC,us.code].includes(a)&&(l||u||c)?new Hh({abi:e,data:typeof l=="object"?l.data:l,functionName:o,message:c??u}):t)();return new Fp(f,{abi:e,args:r,contractAddress:n,docsPath:i,functionName:o,sender:s})}class Ls extends U{constructor({docsPath:e}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join(`
`),{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}class wC extends U{constructor(e,{account:n,docsPath:r,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:u,nonce:c,to:f,value:p}){const w=Ql({from:n==null?void 0:n.address,to:f,value:typeof p<"u"&&`${jp(p)} ${(i==null?void 0:i.nativeCurrency.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${qt(a)} gwei`,maxFeePerGas:typeof l<"u"&&`${qt(l)} gwei`,maxPriorityFeePerGas:typeof u<"u"&&`${qt(u)} gwei`,nonce:c});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Estimate Gas Arguments:",w].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=e}}function Hp(t,e){const n=(t.details||"").toLowerCase(),r=t.walk(i=>i.code===Vo.code);return r instanceof U?new Vo({cause:t,message:r.details}):Vo.nodeMessage.test(n)?new Vo({cause:t,message:t.details}):Bc.nodeMessage.test(n)?new Bc({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas}):Rh.nodeMessage.test(n)?new Rh({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas}):Mh.nodeMessage.test(n)?new Mh({cause:t,nonce:e==null?void 0:e.nonce}):Bh.nodeMessage.test(n)?new Bh({cause:t,nonce:e==null?void 0:e.nonce}):Lh.nodeMessage.test(n)?new Lh({cause:t,nonce:e==null?void 0:e.nonce}):Uh.nodeMessage.test(n)?new Uh({cause:t}):jh.nodeMessage.test(n)?new jh({cause:t,gas:e==null?void 0:e.gas}):Fh.nodeMessage.test(n)?new Fh({cause:t,gas:e==null?void 0:e.gas}):zh.nodeMessage.test(n)?new zh({cause:t}):Lc.nodeMessage.test(n)?new Lc({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas,maxPriorityFeePerGas:e==null?void 0:e.maxPriorityFeePerGas}):new zd({cause:t})}function vC(t,{docsPath:e,...n}){const r=(()=>{const i=Hp(t,n);return i instanceof zd?t:i})();return new wC(r,{docsPath:e,...n})}function Vp(t,{format:e}){return e?Object.keys(e({})).reduce((r,i)=>(t!=null&&t.hasOwnProperty(i)&&(r[i]=t[i]),r),{}):{}}function Yl(t){const{account:e,gasPrice:n,maxFeePerGas:r,maxPriorityFeePerGas:i,to:o}=t,s=e?Cn(e):void 0;if(s&&!ls(s.address))throw new sl({address:s.address});if(o&&!ls(o))throw new sl({address:o});if(typeof n<"u"&&(typeof r<"u"||typeof i<"u"))throw new lC;if(r&&r>2n**256n-1n)throw new Bc({maxFeePerGas:r});if(i&&r&&i>r)throw new Lc({maxFeePerGas:r,maxPriorityFeePerGas:i})}class yC extends U{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class qp extends U{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class bC extends U{constructor({maxPriorityFeePerGas:e}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${qt(e)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}class xC extends U{constructor({blockHash:e,blockNumber:n}){let r="Block";e&&(r=`Block at hash "${e}"`),n&&(r=`Block at number "${n}"`),super(`${r} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}}async function hi(t,{blockHash:e,blockNumber:n,blockTag:r,includeTransactions:i}={}){var c,f,p;const o=r??"latest",s=i??!1,a=n!==void 0?le(n):void 0;let l=null;if(e?l=await t.request({method:"eth_getBlockByHash",params:[e,s]}):l=await t.request({method:"eth_getBlockByNumber",params:[a||o,s]}),!l)throw new xC({blockHash:e,blockNumber:n});return(((p=(f=(c=t.chain)==null?void 0:c.formatters)==null?void 0:f.block)==null?void 0:p.format)||Wy)(l)}async function Gp(t){const e=await t.request({method:"eth_gasPrice"});return BigInt(e)}async function CC(t,e){return s5(t,e)}async function s5(t,e){var o,s,a;const{block:n,chain:r=t.chain,request:i}=e||{};if(typeof((o=r==null?void 0:r.fees)==null?void 0:o.defaultPriorityFee)=="function"){const l=n||await hi(t);return r.fees.defaultPriorityFee({block:l,client:t,request:i})}else if(typeof((s=r==null?void 0:r.fees)==null?void 0:s.defaultPriorityFee)<"u")return(a=r==null?void 0:r.fees)==null?void 0:a.defaultPriorityFee;try{const l=await t.request({method:"eth_maxPriorityFeePerGas"});return jd(l)}catch{const[l,u]=await Promise.all([n?Promise.resolve(n):hi(t),Gp(t)]);if(typeof l.baseFeePerGas!="bigint")throw new qp;const c=u-l.baseFeePerGas;return c<0n?0n:c}}async function EC(t,e){return qh(t,e)}async function qh(t,e){var p,w;const{block:n,chain:r=t.chain,request:i,type:o="eip1559"}=e||{},s=await(async()=>{var v,C;return typeof((v=r==null?void 0:r.fees)==null?void 0:v.baseFeeMultiplier)=="function"?r.fees.baseFeeMultiplier({block:n,client:t,request:i}):((C=r==null?void 0:r.fees)==null?void 0:C.baseFeeMultiplier)??1.2})();if(s<1)throw new yC;const l=10**(((p=s.toString().split(".")[1])==null?void 0:p.length)??0),u=v=>v*BigInt(Math.ceil(s*l))/BigInt(l),c=n||await hi(t);if(typeof((w=r==null?void 0:r.fees)==null?void 0:w.estimateFeesPerGas)=="function")return r.fees.estimateFeesPerGas({block:n,client:t,multiply:u,request:i,type:o});if(o==="eip1559"){if(typeof c.baseFeePerGas!="bigint")throw new qp;const v=i!=null&&i.maxPriorityFeePerGas?i.maxPriorityFeePerGas:await s5(t,{block:c,chain:r,request:i}),C=u(c.baseFeePerGas);return{maxFeePerGas:(i==null?void 0:i.maxFeePerGas)??C+v,maxPriorityFeePerGas:v}}return{gasPrice:(i==null?void 0:i.gasPrice)??u(await Gp(t))}}async function a5(t,{address:e,blockTag:n="latest",blockNumber:r}){const i=await t.request({method:"eth_getTransactionCount",params:[e,r?le(r):n]});return At(i)}function _C(t){if(t.type)return t.type;if(typeof t.maxFeePerGas<"u"||typeof t.maxPriorityFeePerGas<"u")return"eip1559";if(typeof t.gasPrice<"u")return typeof t.accessList<"u"?"eip2930":"legacy";throw new uC({transaction:t})}async function Kd(t,e){const{account:n=t.account,chain:r,gas:i,nonce:o,type:s}=e;if(!n)throw new Ls;const a=Cn(n),l=await hi(t,{blockTag:"latest"}),u={...e,from:a.address};if(typeof o>"u"&&(u.nonce=await a5(t,{address:a.address,blockTag:"pending"})),typeof s>"u")try{u.type=_C(u)}catch{u.type=typeof l.baseFeePerGas=="bigint"?"eip1559":"legacy"}if(u.type==="eip1559"){const{maxFeePerGas:c,maxPriorityFeePerGas:f}=await qh(t,{block:l,chain:r,request:u});if(typeof e.maxPriorityFeePerGas>"u"&&e.maxFeePerGas&&e.maxFeePerGas<f)throw new bC({maxPriorityFeePerGas:f});u.maxPriorityFeePerGas=f,u.maxFeePerGas=c}else{if(typeof e.maxFeePerGas<"u"||typeof e.maxPriorityFeePerGas<"u")throw new qp;const{gasPrice:c}=await qh(t,{block:l,chain:r,request:u,type:"legacy"});u.gasPrice=c}return typeof i>"u"&&(u.gas=await Kp(t,{...u,account:{address:a.address,type:"json-rpc"}})),Yl(u),u}async function Kp(t,e){var i,o,s;const n=e.account??t.account;if(!n)throw new Ls({docsPath:"/docs/actions/public/estimateGas"});const r=Cn(n);try{const{accessList:a,blockNumber:l,blockTag:u,data:c,gas:f,gasPrice:p,maxFeePerGas:w,maxPriorityFeePerGas:v,nonce:C,to:E,value:b,...g}=r.type==="local"?await Kd(t,e):e,x=(l?le(l):void 0)||u;Yl(e);const _=((s=(o=(i=t.chain)==null?void 0:i.formatters)==null?void 0:o.transactionRequest)==null?void 0:s.format)||Fd,$=_({...Vp(g,{format:_}),from:r.address,accessList:a,data:c,gas:f,gasPrice:p,maxFeePerGas:w,maxPriorityFeePerGas:v,nonce:C,to:E,value:b}),d=await t.request({method:"eth_estimateGas",params:x?[$,x]:[$]});return BigInt(d)}catch(a){throw vC(a,{...e,account:r,chain:t.chain})}}async function SC(t,{abi:e,address:n,args:r,functionName:i,...o}){const s=Si({abi:e,args:r,functionName:i});try{return await Kp(t,{data:s,to:n,...o})}catch(a){const l=o.account?Cn(o.account):void 0;throw bl(a,{abi:e,address:n,args:r,docsPath:"/docs/contract/estimateContractGas",functionName:i,sender:l==null?void 0:l.address})}}const Cw="/docs/contract/decodeEventLog";function Xl({abi:t,data:e,strict:n,topics:r}){const i=n??!0,[o,...s]=r;if(!o)throw new r7({docsPath:Cw});const a=t.find(v=>v.type==="event"&&o===Rp(_i(v)));if(!(a&&"name"in a)||a.type!=="event")throw new i7(o,{docsPath:Cw});const{name:l,inputs:u}=a,c=u==null?void 0:u.some(v=>!("name"in v&&v.name));let f=c?[]:{};const p=u.filter(v=>"indexed"in v&&v.indexed);for(let v=0;v<p.length;v++){const C=p[v],E=s[v];if(!E)throw new Ms({abiItem:a,param:C});f[C.name||v]=$C({param:C,value:E})}const w=u.filter(v=>!("indexed"in v&&v.indexed));if(w.length>0){if(e&&e!=="0x")try{const v=Gd(w,e);if(v)if(c)f=[...f,...v];else for(let C=0;C<w.length;C++)f[w[C].name]=v[C]}catch(v){if(i)throw v instanceof Ip?new oo({abiItem:a,data:v.data,params:v.params,size:v.size}):v}else if(i)throw new oo({abiItem:a,data:"0x",params:w,size:0})}return{eventName:l,args:Object.values(f).length>0?f:void 0}}function $C({param:t,value:e}){return t.type==="string"||t.type==="bytes"||t.type==="tuple"||t.type.match(/^(.*)\[(\d+)?\]$/)?e:(Gd([t],e)||[])[0]}async function Zp(t,{address:e,blockHash:n,fromBlock:r,toBlock:i,event:o,events:s,args:a,strict:l}={}){const u=l??!1,c=s??(o?[o]:void 0);let f=[];c&&(f=[c.flatMap(w=>Zl({abi:[w],eventName:w.name,args:a}))],o&&(f=f[0]));let p;return n?p=await t.request({method:"eth_getLogs",params:[{address:e,topics:f,blockHash:n}]}):p=await t.request({method:"eth_getLogs",params:[{address:e,topics:f,fromBlock:typeof r=="bigint"?le(r):r,toBlock:typeof i=="bigint"?le(i):i}]}),p.map(w=>{var v;try{const{eventName:C,args:E}=c?Xl({abi:c,data:w.data,topics:w.topics,strict:u}):{eventName:void 0,args:void 0};return Ln(w,{args:E,eventName:C})}catch(C){let E,b;if(C instanceof oo||C instanceof Ms){if(u)return;E=C.abiItem.name,b=(v=C.abiItem.inputs)==null?void 0:v.some(g=>!("name"in g&&g.name))}return Ln(w,{args:b?[]:{},eventName:E})}}).filter(Boolean)}async function l5(t,{abi:e,address:n,args:r,blockHash:i,eventName:o,fromBlock:s,toBlock:a,strict:l}){const u=o?Kl({abi:e,name:o}):void 0,c=u?void 0:e.filter(f=>f.type==="event");return Zp(t,{address:n,args:r,blockHash:i,event:u,events:c,fromBlock:s,toBlock:a,strict:l})}const i0="/docs/contract/decodeFunctionResult";function Us({abi:t,args:e,functionName:n,data:r}){let i=t[0];if(n&&(i=Kl({abi:t,args:e,name:n}),!i))throw new Uc(n,{docsPath:i0});if(i.type!=="function")throw new Uc(void 0,{docsPath:i0});if(!i.outputs)throw new o7(i.name,{docsPath:i0});const o=Gd(i.outputs,r);if(o&&o.length>1)return o;if(o&&o.length===1)return o[0]}const PC="modulepreload",AC=function(t){return"/"+t},Ew={},ds=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=AC(o),o in Ew)return;Ew[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const f=i[c];if(f.href===o&&(!s||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":PC,s||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),s)return new Promise((c,f)=>{u.addEventListener("load",c),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})},Gh=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],u5=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"}],c5=[...u5,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],DC=[...u5,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],_w=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],Sw=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],TC=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}],kC="0x82ad56cb";function OC(t,{docsPath:e,...n}){const r=(()=>{const i=Hp(t,n);return i instanceof zd?t:i})();return new o5(r,{docsPath:e,...n})}const o0=new Map;function Qp({fn:t,id:e,shouldSplitBatch:n,wait:r=0}){const i=async()=>{const u=a();o();const c=u.map(({args:f})=>f);c.length!==0&&t(c).then(f=>{u.forEach(({pendingPromise:p},w)=>{var v;return(v=p.resolve)==null?void 0:v.call(p,[f[w],f])})}).catch(f=>{u.forEach(({pendingPromise:p})=>{var w;return(w=p.reject)==null?void 0:w.call(p,f)})})},o=()=>o0.delete(e),s=()=>a().map(({args:u})=>u),a=()=>o0.get(e)||[],l=u=>o0.set(e,[...a(),u]);return{flush:o,async schedule(u){const c={},f=new Promise((v,C)=>{c.resolve=v,c.reject=C});return(n==null?void 0:n([...s(),u]))&&i(),a().length>0?(l({args:u,pendingPromise:c}),f):(l({args:u,pendingPromise:c}),setTimeout(i,r),f)}}}async function Zd(t,e){var b,g,y,x;const{account:n=t.account,batch:r=!!((b=t.batch)!=null&&b.multicall),blockNumber:i,blockTag:o="latest",accessList:s,data:a,gas:l,gasPrice:u,maxFeePerGas:c,maxPriorityFeePerGas:f,nonce:p,to:w,value:v,...C}=e,E=n?Cn(n):void 0;try{Yl(e);const $=(i?le(i):void 0)||o,d=((x=(y=(g=t.chain)==null?void 0:g.formatters)==null?void 0:y.transactionRequest)==null?void 0:x.format)||Fd,P=d({...Vp(C,{format:d}),from:E==null?void 0:E.address,accessList:s,data:a,gas:l,gasPrice:u,maxFeePerGas:c,maxPriorityFeePerGas:f,nonce:p,to:w,value:v});if(r&&IC({request:P}))try{return await NC(t,{...P,blockNumber:i,blockTag:o})}catch(I){if(!(I instanceof Ry)&&!(I instanceof Nh))throw I}const k=await t.request({method:"eth_call",params:$?[P,$]:[P]});return k==="0x"?{data:void 0}:{data:k}}catch(_){const $=RC(_),{offchainLookup:d,offchainLookupSignature:P}=await ds(()=>import("./ccip-52fcd912.js"),[]);if(($==null?void 0:$.slice(0,10))===P&&w)return{data:await d(t,{data:$,to:w})};throw OC(_,{...e,account:E,chain:t.chain})}}function IC({request:t}){const{data:e,to:n,...r}=t;return!(!e||e.startsWith(kC)||!n||Object.values(r).filter(i=>typeof i<"u").length>0)}async function NC(t,e){var C;const{batchSize:n=1024,wait:r=0}=typeof((C=t.batch)==null?void 0:C.multicall)=="object"?t.batch.multicall:{},{blockNumber:i,blockTag:o="latest",data:s,multicallAddress:a,to:l}=e;let u=a;if(!u){if(!t.chain)throw new Ry;u=Ns({blockNumber:i,chain:t.chain,contract:"multicall3"})}const f=(i?le(i):void 0)||o,{schedule:p}=Qp({id:`${t.uid}.${f}`,wait:r,shouldSplitBatch(E){return E.reduce((g,{data:y})=>g+(y.length-2),0)>n*2},fn:async E=>{const b=E.map(x=>({allowFailure:!0,callData:x.data,target:x.to})),g=Si({abi:Gh,args:[b],functionName:"aggregate3"}),y=await t.request({method:"eth_call",params:[{data:g,to:u},f]});return Us({abi:Gh,args:[b],functionName:"aggregate3",data:y||"0x"})}}),[{returnData:w,success:v}]=await p({data:s,to:l});if(!v)throw new zp({data:w});return w==="0x"?{data:void 0}:{data:w}}function RC(t){if(!(t instanceof U))return;const e=t.walk();return typeof e.data=="object"?e.data.data:e.data}async function pi(t,{abi:e,address:n,args:r,functionName:i,...o}){const s=Si({abi:e,args:r,functionName:i});try{const{data:a}=await Zd(t,{data:s,to:n,...o});return Us({abi:e,args:r,functionName:i,data:a||"0x"})}catch(a){throw bl(a,{abi:e,address:n,args:r,docsPath:"/docs/contract/readContract",functionName:i})}}async function MC(t,{abi:e,address:n,args:r,dataSuffix:i,functionName:o,...s}){const a=s.account?Cn(s.account):void 0,l=Si({abi:e,args:r,functionName:o});try{const{data:u}=await Zd(t,{batch:!1,data:`${l}${i?i.replace("0x",""):""}`,to:n,...s});return{result:Us({abi:e,args:r,functionName:o,data:u||"0x"}),request:{abi:e,address:n,args:r,dataSuffix:i,functionName:o,...s}}}catch(u){throw bl(u,{abi:e,address:n,args:r,docsPath:"/docs/contract/simulateContract",functionName:o,sender:a==null?void 0:a.address})}}const s0=new Map,$w=new Map;let BC=0;function js(t,e,n){const r=++BC,i=()=>s0.get(t)||[],o=()=>{const c=i();s0.set(t,c.filter(f=>f.id!==r))},s=()=>{const c=$w.get(t);i().length===1&&c&&c(),o()},a=i();if(s0.set(t,[...a,{id:r,fns:e}]),a&&a.length>0)return s;const l={};for(const c in e)l[c]=(...f)=>{const p=i();p.length!==0&&p.forEach(w=>{var v,C;return(C=(v=w.fns)[c])==null?void 0:C.call(v,...f)})};const u=n(l);return typeof u=="function"&&$w.set(t,u),s}async function Fc(t){return new Promise(e=>setTimeout(e,t))}function Jl(t,{emitOnBegin:e,initialWaitTime:n,interval:r}){let i=!0;const o=()=>i=!1;return(async()=>{let a;e&&(a=await t({unpoll:o}));const l=await(n==null?void 0:n(a))??r;await Fc(l);const u=async()=>{i&&(await t({unpoll:o}),await Fc(r),u())};u()})(),o}const LC=new Map,UC=new Map;function jC(t){const e=(i,o)=>({clear:()=>o.delete(i),get:()=>o.get(i),set:s=>o.set(i,s)}),n=e(t,LC),r=e(t,UC);return{clear:()=>{n.clear(),r.clear()},promise:n,response:r}}async function FC(t,{cacheKey:e,cacheTime:n=1/0}){const r=jC(e),i=r.response.get();if(i&&n>0&&new Date().getTime()-i.created.getTime()<n)return i.data;let o=r.promise.get();o||(o=t(),r.promise.set(o));try{const s=await o;return r.response.set({created:new Date,data:s}),s}finally{r.promise.clear()}}const zC=t=>`blockNumber.${t}`;async function eu(t,{cacheTime:e=t.cacheTime,maxAge:n}={}){const r=await FC(()=>t.request({method:"eth_blockNumber"}),{cacheKey:zC(t.uid),cacheTime:n??e});return BigInt(r)}async function Qd(t,{filter:e}){const n="strict"in e&&e.strict;return(await e.request({method:"eth_getFilterChanges",params:[e.id]})).map(i=>{var o;if(typeof i=="string")return i;try{const{eventName:s,args:a}="abi"in e&&e.abi?Xl({abi:e.abi,data:i.data,topics:i.topics,strict:n}):{eventName:void 0,args:void 0};return Ln(i,{args:a,eventName:s})}catch(s){let a,l;if(s instanceof oo||s instanceof Ms){if("strict"in e&&e.strict)return;a=s.abiItem.name,l=(o=s.abiItem.inputs)==null?void 0:o.some(u=>!("name"in u&&u.name))}return Ln(i,{args:l?[]:{},eventName:a})}}).filter(Boolean)}async function Yd(t,{filter:e}){return e.request({method:"eth_uninstallFilter",params:[e.id]})}function WC(t,{abi:e,address:n,args:r,batch:i=!0,eventName:o,onError:s,onLogs:a,poll:l,pollingInterval:u=t.pollingInterval,strict:c}){return(typeof l<"u"?l:t.transport.type!=="webSocket")?(()=>{const v=Rt(["watchContractEvent",n,r,i,t.uid,o,u]),C=c??!1;return js(v,{onLogs:a,onError:s},E=>{let b,g,y=!1;const x=Jl(async()=>{var _;if(!y){try{g=await e5(t,{abi:e,address:n,args:r,eventName:o,strict:C})}catch{}y=!0;return}try{let $;if(g)$=await Qd(t,{filter:g});else{const d=await eu(t);b&&b!==d?$=await l5(t,{abi:e,address:n,args:r,fromBlock:b+1n,toBlock:d,strict:C}):$=[],b=d}if($.length===0)return;i?E.onLogs($):$.forEach(d=>E.onLogs([d]))}catch($){g&&$ instanceof so&&(y=!1),(_=E.onError)==null||_.call(E,$)}},{emitOnBegin:!0,interval:u});return async()=>{g&&await Yd(t,{filter:g}),x()}})})():(()=>{let v=!0,C=()=>v=!1;return(async()=>{try{const E=o?Zl({abi:e,eventName:o,args:r}):[],{unsubscribe:b}=await t.transport.subscribe({params:["logs",{address:n,topics:E}],onData(g){var x;if(!v)return;const y=g.result;try{const{eventName:_,args:$}=Xl({abi:e,data:y.data,topics:y.topics,strict:c}),d=Ln(y,{args:$,eventName:_});a([d])}catch(_){let $,d;if(_ instanceof oo||_ instanceof Ms){if(c)return;$=_.abiItem.name,d=(x=_.abiItem.inputs)==null?void 0:x.some(k=>!("name"in k&&k.name))}const P=Ln(y,{args:d?[]:{},eventName:$});a([P])}},onError(g){s==null||s(g)}});C=b,v||C()}catch(E){s==null||s(E)}})(),C})()}function HC(t,{docsPath:e,...n}){const r=(()=>{const i=Hp(t,n);return i instanceof zd?t:i})();return new cC(r,{docsPath:e,...n})}async function xl(t){const e=await t.request({method:"eth_chainId"});return At(e)}async function Yp(t,{serializedTransaction:e}){return t.request({method:"eth_sendRawTransaction",params:[e]})}async function Xp(t,e){var C,E,b;const{account:n=t.account,chain:r=t.chain,accessList:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:u,nonce:c,to:f,value:p,...w}=e;if(!n)throw new Ls({docsPath:"/docs/actions/wallet/sendTransaction"});const v=Cn(n);try{Yl(e);let g;if(r!==null&&(g=await xl(t),My({currentChainId:g,chain:r})),v.type==="local"){const _=await Kd(t,{account:v,accessList:i,chain:r,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:u,nonce:c,to:f,value:p,...w});g||(g=await xl(t));const $=(C=r==null?void 0:r.serializers)==null?void 0:C.transaction,d=await v.signTransaction({..._,chainId:g},{serializer:$});return await Yp(t,{serializedTransaction:d})}const y=((b=(E=r==null?void 0:r.formatters)==null?void 0:E.transactionRequest)==null?void 0:b.format)||Fd,x=y({...Vp(w,{format:y}),accessList:i,data:o,from:v.address,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:u,nonce:c,to:f,value:p});return await t.request({method:"eth_sendTransaction",params:[x]})}catch(g){throw HC(g,{...e,account:v,chain:e.chain||void 0})}}async function VC(t,{abi:e,address:n,args:r,dataSuffix:i,functionName:o,...s}){const a=Si({abi:e,args:r,functionName:o});return await Xp(t,{data:`${a}${i?i.replace("0x",""):""}`,to:n,...s})}async function qC(t,{chain:e}){const{id:n,name:r,nativeCurrency:i,rpcUrls:o,blockExplorers:s}=e;await t.request({method:"wallet_addEthereumChain",params:[{chainId:le(n),chainName:r,nativeCurrency:i,rpcUrls:o.default.http,blockExplorerUrls:s?Object.values(s).map(({url:a})=>a):void 0}]})}const Kh=256;let Ru=Kh,Mu;function GC(t=11){if(!Mu||Ru+t>Kh*2){Mu="",Ru=0;for(let e=0;e<Kh;e++)Mu+=(256+Math.random()*256|0).toString(16).substring(1)}return Mu.substring(Ru,Ru+++t)}function d5(t){const{batch:e,cacheTime:n=t.pollingInterval??4e3,key:r="base",name:i="Base Client",pollingInterval:o=4e3,type:s="base"}=t,a=t.chain,l=t.account?Cn(t.account):void 0,{config:u,request:c,value:f}=t.transport({chain:a,pollingInterval:o}),p={...u,...f},w={account:l,batch:e,cacheTime:n,chain:a,key:r,name:i,pollingInterval:o,request:c,transport:p,type:s,uid:GC()};function v(C){return E=>{const b=E(C);for(const y in w)delete b[y];const g={...C,...b};return Object.assign(g,{extend:v(g)})}}return Object.assign(w,{extend:v(w)})}function f5(t,{delay:e=100,retryCount:n=2,shouldRetry:r=()=>!0}={}){return new Promise((i,o)=>{const s=async({count:a=0}={})=>{const l=async({error:u})=>{const c=typeof e=="function"?e({count:a,error:u}):e;c&&await Fc(c),s({count:a+1})};try{const u=await t();i(u)}catch(u){if(a<n&&await r({count:a,error:u}))return l({error:u});o(u)}};s()})}const h5=t=>"code"in t?t.code!==-1&&t.code!==-32004&&t.code!==-32005&&t.code!==-32042&&t.code!==-32603:t instanceof Oa&&t.status?t.status!==403&&t.status!==408&&t.status!==413&&t.status!==429&&t.status!==500&&t.status!==502&&t.status!==503&&t.status!==504:!1;function KC(t,{retryDelay:e=150,retryCount:n=3}={}){return async r=>f5(async()=>{try{return await t(r)}catch(i){const o=i;switch(o.code){case al.code:throw new al(o);case ll.code:throw new ll(o);case ul.code:throw new ul(o);case cl.code:throw new cl(o);case us.code:throw new us(o);case so.code:throw new so(o);case dl.code:throw new dl(o);case cs.code:throw new cs(o);case fl.code:throw new fl(o);case hl.code:throw new hl(o);case pl.code:throw new pl(o);case gl.code:throw new gl(o);case zt.code:throw new zt(o);case ml.code:throw new ml(o);case wl.code:throw new wl(o);case vl.code:throw new vl(o);case yl.code:throw new yl(o);case Er.code:throw new Er(o);case 5e3:throw new zt(o);default:throw i instanceof U?i:new gC(o)}}},{delay:({count:i,error:o})=>{var s;if(o&&o instanceof Oa){const a=(s=o==null?void 0:o.headers)==null?void 0:s.get("Retry-After");if(a!=null&&a.match(/\d/))return parseInt(a)*1e3}return~~(1<<i)*e},retryCount:n,shouldRetry:({error:i})=>!h5(i)})}function Xd({key:t,name:e,request:n,retryCount:r=3,retryDelay:i=150,timeout:o,type:s},a){return{config:{key:t,name:e,request:n,retryCount:r,retryDelay:i,timeout:o,type:s},request:KC(n,{retryCount:r,retryDelay:i}),value:a}}function Jp(t,e={}){const{key:n="custom",name:r="Custom Provider",retryDelay:i}=e;return({retryCount:o})=>Xd({key:n,name:r,request:t.request.bind(t),retryCount:e.retryCount??o,retryDelay:i,type:"custom"})}function Pw(t,e={}){const{key:n="fallback",name:r="Fallback",rank:i=!1,retryCount:o,retryDelay:s}=e;return({chain:a,pollingInterval:l=4e3,timeout:u})=>{let c=t,f=()=>{};const p=Xd({key:n,name:r,async request({method:w,params:v}){const C=async(E=0)=>{const b=c[E]({chain:a,retryCount:0,timeout:u});try{const g=await b.request({method:w,params:v});return f({method:w,params:v,response:g,transport:b,status:"success"}),g}catch(g){if(f({error:g,method:w,params:v,transport:b,status:"error"}),h5(g)||E===c.length-1)throw g;return C(E+1)}};return C()},retryCount:o,retryDelay:s,type:"fallback"},{onResponse:w=>f=w,transports:c.map(w=>w({chain:a,retryCount:0}))});if(i){const w=typeof i=="object"?i:{};ZC({chain:a,interval:w.interval??l,onTransports:v=>c=v,sampleCount:w.sampleCount,timeout:w.timeout,transports:c,weights:w.weights})}return p}}function ZC({chain:t,interval:e=4e3,onTransports:n,sampleCount:r=10,timeout:i=1e3,transports:o,weights:s={}}){const{stability:a=.7,latency:l=.3}=s,u=[],c=async()=>{const f=await Promise.all(o.map(async v=>{const C=v({chain:t,retryCount:0,timeout:i}),E=Date.now();let b,g;try{await C.request({method:"net_listening"}),g=1}catch{g=0}finally{b=Date.now()}return{latency:b-E,success:g}}));u.push(f),u.length>r&&u.shift();const p=Math.max(...u.map(v=>Math.max(...v.map(({latency:C})=>C)))),w=o.map((v,C)=>{const E=u.map(_=>_[C].latency),g=1-E.reduce((_,$)=>_+$,0)/E.length/p,y=u.map(_=>_[C].success),x=y.reduce((_,$)=>_+$,0)/y.length;return x===0?[0,C]:[l*g+a*x,C]}).sort((v,C)=>C[0]-v[0]);n(w.map(([,v])=>o[v])),await Fc(e),c()};c()}class p5 extends U{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}function QC(){if(typeof WebSocket<"u")return WebSocket;if(typeof global.WebSocket<"u")return global.WebSocket;if(typeof window.WebSocket<"u")return window.WebSocket;if(typeof self.WebSocket<"u")return self.WebSocket;throw new Error("`WebSocket` is not supported in this environment")}const Aw=QC();function g5(t,{errorInstance:e=new Error("timed out"),timeout:n,signal:r}){return new Promise((i,o)=>{(async()=>{let s;try{const a=new AbortController;n>0&&(s=setTimeout(()=>{r?a.abort():o(e)},n)),i(await t({signal:a==null?void 0:a.signal}))}catch(a){a.name==="AbortError"&&o(e),o(a)}finally{clearTimeout(s)}})()})}let Zh=0;async function YC(t,{body:e,fetchOptions:n={},timeout:r=1e4}){var a;const{headers:i,method:o,signal:s}=n;try{const l=await g5(async({signal:c})=>await fetch(t,{...n,body:Array.isArray(e)?Rt(e.map(p=>({jsonrpc:"2.0",id:p.id??Zh++,...p}))):Rt({jsonrpc:"2.0",id:e.id??Zh++,...e}),headers:{...i,"Content-Type":"application/json"},method:o||"POST",signal:s||(r>0?c:void 0)}),{errorInstance:new Vh({body:e,url:t}),timeout:r,signal:!0});let u;if((a=l.headers.get("Content-Type"))!=null&&a.startsWith("application/json")?u=await l.json():u=await l.text(),!l.ok)throw new Oa({body:e,details:Rt(u.error)||l.statusText,headers:l.headers,status:l.status,url:t});return u}catch(l){throw l instanceof Oa||l instanceof Vh?l:new Oa({body:e,details:l.message,url:t})}}const a0=new Map;async function l0(t){let e=a0.get(t);if(e)return e;const{schedule:n}=Qp({id:t,fn:async()=>{const o=new Aw(t),s=new Map,a=new Map,l=({data:c})=>{const f=JSON.parse(c),p=f.method==="eth_subscription",w=p?f.params.subscription:f.id,v=p?a:s,C=v.get(w);C&&C({data:c}),p||v.delete(w)},u=()=>{a0.delete(t),o.removeEventListener("close",u),o.removeEventListener("message",l)};return o.addEventListener("close",u),o.addEventListener("message",l),o.readyState===Aw.CONNECTING&&await new Promise((c,f)=>{o&&(o.onopen=c,o.onerror=f)}),e=Object.assign(o,{requests:s,subscriptions:a}),a0.set(t,e),[e]}}),[r,[i]]=await n();return i}function XC(t,{body:e,onResponse:n}){if(t.readyState===t.CLOSED||t.readyState===t.CLOSING)throw new hC({body:e,url:t.url,details:"Socket is closed."});const r=Zh++,i=({data:o})=>{var a;const s=JSON.parse(o);typeof s.id=="number"&&r!==s.id||(n==null||n(s),e.method==="eth_subscribe"&&typeof s.result=="string"&&t.subscriptions.set(s.result,i),e.method==="eth_unsubscribe"&&t.subscriptions.delete((a=e.params)==null?void 0:a[0]))};return t.requests.set(r,i),t.send(JSON.stringify({jsonrpc:"2.0",...e,id:r})),t}async function JC(t,{body:e,timeout:n=1e4}){return g5(()=>new Promise(r=>Jo.webSocket(t,{body:e,onResponse:r})),{errorInstance:new Vh({body:e,url:t.url}),timeout:n})}const Jo={http:YC,webSocket:XC,webSocketAsync:JC};function eE(t,e={}){const{batch:n,fetchOptions:r,key:i="http",name:o="HTTP JSON-RPC",retryDelay:s}=e;return({chain:a,retryCount:l,timeout:u})=>{const{batchSize:c=1e3,wait:f=0}=typeof n=="object"?n:{},p=e.retryCount??l,w=u??e.timeout??1e4,v=t||(a==null?void 0:a.rpcUrls.default.http[0]);if(!v)throw new p5;return Xd({key:i,name:o,async request({method:C,params:E}){const b={method:C,params:E},{schedule:g}=Qp({id:`${t}`,wait:f,shouldSplitBatch($){return $.length>c},fn:$=>Jo.http(v,{body:$,fetchOptions:r,timeout:w})}),y=async $=>n?g($):[await Jo.http(v,{body:$,fetchOptions:r,timeout:w})],[{error:x,result:_}]=await y(b);if(x)throw new Wp({body:b,error:x,url:v});return _},retryCount:p,retryDelay:s,timeout:w,type:"http"},{fetchOptions:r,url:t})}}function eg(t,e){var r,i,o;if(!(t instanceof U))return!1;const n=t.walk(s=>s instanceof Hh);return n instanceof Hh?!!(((r=n.data)==null?void 0:r.errorName)==="ResolverNotFound"||((i=n.data)==null?void 0:i.errorName)==="ResolverWildcardNotSupported"||(o=n.reason)!=null&&o.includes("Wildcard on non-extended resolvers is not supported")||e==="reverse"&&n.reason===t5[50]):!1}function m5(t){if(t.length!==66||t.indexOf("[")!==0||t.indexOf("]")!==65)return null;const e=`0x${t.slice(1,65)}`;return er(e)?e:null}function ic(t){let e=new Uint8Array(32).fill(0);if(!t)return ol(e);const n=t.split(".");for(let r=n.length-1;r>=0;r-=1){const i=m5(n[r]),o=i?fi(i):It(wr(n[r]),"bytes");e=It(Cr([e,o]),"bytes")}return ol(e)}function tE(t){return`[${t.slice(2)}]`}function nE(t){const e=new Uint8Array(32).fill(0);return t?m5(t)||It(wr(t)):ol(e)}function Jd(t){const e=t.replace(/^\.|\.$/gm,"");if(e.length===0)return new Uint8Array(1);const n=new Uint8Array(wr(e).byteLength+2);let r=0;const i=e.split(".");for(let o=0;o<i.length;o++){let s=wr(i[o]);s.byteLength>255&&(s=wr(tE(nE(i[o])))),n[r]=s.length,n.set(s,r+1),r+=s.length+1}return n.byteLength!==r+1?n.slice(0,r+1):n}async function rE(t,{blockNumber:e,blockTag:n,coinType:r,name:i,universalResolverAddress:o}){let s=o;if(!s){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=Ns({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}try{const a=Si({abi:Sw,functionName:"addr",...r!=null?{args:[ic(i),BigInt(r)]}:{args:[ic(i)]}}),l=await pi(t,{address:s,abi:c5,functionName:"resolve",args:[Pr(Jd(i)),a],blockNumber:e,blockTag:n});if(l[0]==="0x")return null;const u=Us({abi:Sw,args:r!=null?[ic(i),BigInt(r)]:void 0,functionName:"addr",data:l[0]});return u==="0x"||Yi(u)==="0x00"?null:u}catch(a){if(eg(a,"resolve"))return null;throw a}}class iE extends U{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class oa extends U{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class tg extends U{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class oE extends U{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}const sE=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,aE=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,lE=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,uE=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function cE(t){try{const e=await fetch(t,{method:"HEAD"});if(e.status===200){const n=e.headers.get("content-type");return n==null?void 0:n.startsWith("image/")}return!1}catch(e){return typeof e=="object"&&typeof e.response<"u"||!globalThis.hasOwnProperty("Image")?!1:new Promise(n=>{const r=new Image;r.onload=()=>{n(!0)},r.onerror=()=>{n(!1)},r.src=t})}}function Dw(t,e){return t?t.endsWith("/")?t.slice(0,-1):t:e}function w5({uri:t,gatewayUrls:e}){const n=lE.test(t);if(n)return{uri:t,isOnChain:!0,isEncoded:n};const r=Dw(e==null?void 0:e.ipfs,"https://ipfs.io"),i=Dw(e==null?void 0:e.arweave,"https://arweave.net"),o=t.match(sE),{protocol:s,subpath:a,target:l,subtarget:u=""}=(o==null?void 0:o.groups)||{},c=s==="ipns:/"||a==="ipns/",f=s==="ipfs:/"||a==="ipfs/"||aE.test(t);if(t.startsWith("http")&&!c&&!f){let w=t;return e!=null&&e.arweave&&(w=t.replace(/https:\/\/arweave.net/g,e==null?void 0:e.arweave)),{uri:w,isOnChain:!1,isEncoded:!1}}if((c||f)&&l)return{uri:`${r}/${c?"ipns":"ipfs"}/${l}${u}`,isOnChain:!1,isEncoded:!1};if(s==="ar:/"&&l)return{uri:`${i}/${l}${u||""}`,isOnChain:!1,isEncoded:!1};let p=t.replace(uE,"");if(p.startsWith("<svg")&&(p=`data:image/svg+xml;base64,${btoa(p)}`),p.startsWith("data:")||p.startsWith("{"))return{uri:p,isOnChain:!0,isEncoded:!1};throw new tg({uri:t})}function v5(t){if(typeof t!="object"||!("image"in t)&&!("image_url"in t)&&!("image_data"in t))throw new iE({data:t});return t.image||t.image_url||t.image_data}async function dE({gatewayUrls:t,uri:e}){try{const n=await fetch(e).then(i=>i.json());return await ng({gatewayUrls:t,uri:v5(n)})}catch{throw new tg({uri:e})}}async function ng({gatewayUrls:t,uri:e}){const{uri:n,isOnChain:r}=w5({uri:e,gatewayUrls:t});if(r||await cE(n))return n;throw new tg({uri:e})}function fE(t){let e=t;e.startsWith("did:nft:")&&(e=e.replace("did:nft:","").replace(/_/g,"/"));const[n,r,i]=e.split("/"),[o,s]=n.split(":"),[a,l]=r.split(":");if(!o||o.toLowerCase()!=="eip155")throw new oa({reason:"Only EIP-155 supported"});if(!s)throw new oa({reason:"Chain ID not found"});if(!l)throw new oa({reason:"Contract address not found"});if(!i)throw new oa({reason:"Token ID not found"});if(!a)throw new oa({reason:"ERC namespace not found"});return{chainID:parseInt(s),namespace:a.toLowerCase(),contractAddress:l,tokenID:i}}async function hE(t,{nft:e}){if(e.namespace==="erc721")return pi(t,{address:e.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(e.tokenID)]});if(e.namespace==="erc1155")return pi(t,{address:e.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(e.tokenID)]});throw new oE({namespace:e.namespace})}async function pE(t,{gatewayUrls:e,record:n}){return/eip155:/i.test(n)?gE(t,{gatewayUrls:e,record:n}):ng({uri:n,gatewayUrls:e})}async function gE(t,{gatewayUrls:e,record:n}){const r=fE(n),i=await hE(t,{nft:r}),{uri:o,isOnChain:s,isEncoded:a}=w5({uri:i,gatewayUrls:e});if(s&&(o.includes("data:application/json;base64,")||o.startsWith("{"))){const u=a?atob(o.replace("data:application/json;base64,","")):o,c=JSON.parse(u);return ng({uri:v5(c),gatewayUrls:e})}let l=r.tokenID;return r.namespace==="erc1155"&&(l=l.replace("0x","").padStart(64,"0")),dE({gatewayUrls:e,uri:o.replace(/(?:0x)?{id}/,l)})}async function y5(t,{blockNumber:e,blockTag:n,name:r,key:i,universalResolverAddress:o}){let s=o;if(!s){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=Ns({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}try{const a=await pi(t,{address:s,abi:c5,functionName:"resolve",args:[Pr(Jd(r)),Si({abi:_w,functionName:"text",args:[ic(r),i]})],blockNumber:e,blockTag:n});if(a[0]==="0x")return null;const l=Us({abi:_w,functionName:"text",data:a[0]});return l===""?null:l}catch(a){if(eg(a,"resolve"))return null;throw a}}async function mE(t,{blockNumber:e,blockTag:n,gatewayUrls:r,name:i,universalResolverAddress:o}){const s=await y5(t,{blockNumber:e,blockTag:n,key:"avatar",name:i,universalResolverAddress:o});if(!s)return null;try{return await pE(t,{record:s,gatewayUrls:r})}catch{return null}}async function wE(t,{address:e,blockNumber:n,blockTag:r,universalResolverAddress:i}){let o=i;if(!o){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");o=Ns({blockNumber:n,chain:t.chain,contract:"ensUniversalResolver"})}const s=`${e.toLowerCase().substring(2)}.addr.reverse`;try{return(await pi(t,{address:o,abi:DC,functionName:"reverse",args:[Pr(Jd(s))],blockNumber:n,blockTag:r}))[0]}catch(a){if(eg(a,"reverse"))return null;throw a}}async function vE(t,{blockNumber:e,blockTag:n,name:r,universalResolverAddress:i}){let o=i;if(!o){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");o=Ns({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}const[s]=await pi(t,{address:o,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[Pr(Jd(r))],blockNumber:e,blockTag:n});return s}async function yE(t){const e=qd(t,{method:"eth_newBlockFilter"}),n=await t.request({method:"eth_newBlockFilter"});return{id:n,request:e(n),type:"block"}}async function b5(t,{address:e,args:n,event:r,events:i,fromBlock:o,strict:s,toBlock:a}={}){const l=i??(r?[r]:void 0),u=qd(t,{method:"eth_newFilter"});let c=[];l&&(c=[l.flatMap(p=>Zl({abi:[p],eventName:p.name,args:n}))],r&&(c=c[0]));const f=await t.request({method:"eth_newFilter",params:[{address:e,fromBlock:typeof o=="bigint"?le(o):o,toBlock:typeof a=="bigint"?le(a):a,...c.length?{topics:c}:{}}]});return{abi:l,args:n,eventName:r?r.name:void 0,fromBlock:o,id:f,request:u(f),strict:s,toBlock:a,type:"event"}}async function x5(t){const e=qd(t,{method:"eth_newPendingTransactionFilter"}),n=await t.request({method:"eth_newPendingTransactionFilter"});return{id:n,request:e(n),type:"transaction"}}async function bE(t,{address:e,blockNumber:n,blockTag:r="latest"}){const i=n?le(n):void 0,o=await t.request({method:"eth_getBalance",params:[e,i||r]});return BigInt(o)}async function xE(t,{blockHash:e,blockNumber:n,blockTag:r="latest"}={}){const i=n!==void 0?le(n):void 0;let o;return e?o=await t.request({method:"eth_getBlockTransactionCountByHash",params:[e]}):o=await t.request({method:"eth_getBlockTransactionCountByNumber",params:[i||r]}),At(o)}async function CE(t,{address:e,blockNumber:n,blockTag:r="latest"}){const i=n!==void 0?le(n):void 0,o=await t.request({method:"eth_getCode",params:[e,i||r]});if(o!=="0x")return o}function EE(t){var e;return{baseFeePerGas:t.baseFeePerGas.map(n=>BigInt(n)),gasUsedRatio:t.gasUsedRatio,oldestBlock:BigInt(t.oldestBlock),reward:(e=t.reward)==null?void 0:e.map(n=>n.map(r=>BigInt(r)))}}async function _E(t,{blockCount:e,blockNumber:n,blockTag:r="latest",rewardPercentiles:i}){const o=n?le(n):void 0,s=await t.request({method:"eth_feeHistory",params:[le(e),o||r,i]});return EE(s)}async function SE(t,{filter:e}){const n=e.strict??!1;return(await e.request({method:"eth_getFilterLogs",params:[e.id]})).map(i=>{var o;try{const{eventName:s,args:a}="abi"in e&&e.abi?Xl({abi:e.abi,data:i.data,topics:i.topics,strict:n}):{eventName:void 0,args:void 0};return Ln(i,{args:a,eventName:s})}catch(s){let a,l;if(s instanceof oo||s instanceof Ms){if("strict"in e&&e.strict)return;a=s.abiItem.name,l=(o=s.abiItem.inputs)==null?void 0:o.some(u=>!("name"in u&&u.name))}return Ln(i,{args:l?[]:{},eventName:a})}}).filter(Boolean)}const $E=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,PE=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function AE({domain:t,message:e,primaryType:n,types:r}){const i=typeof t>"u"?{}:t,o={EIP712Domain:P5({domain:i}),...r};$5({domain:i,message:e,primaryType:n,types:o});const s=["0x1901"];return i&&s.push(DE({domain:i,types:o})),n!=="EIP712Domain"&&s.push(C5({data:e,primaryType:n,types:o})),It(Cr(s))}function DE({domain:t,types:e}){return C5({data:t,primaryType:"EIP712Domain",types:e})}function C5({data:t,primaryType:e,types:n}){const r=E5({data:t,primaryType:e,types:n});return It(r)}function E5({data:t,primaryType:e,types:n}){const r=[{type:"bytes32"}],i=[TE({primaryType:e,types:n})];for(const o of n[e]){const[s,a]=S5({types:n,name:o.name,type:o.type,value:t[o.name]});r.push(s),i.push(a)}return Gl(r,i)}function TE({primaryType:t,types:e}){const n=Pr(kE({primaryType:t,types:e}));return It(n)}function kE({primaryType:t,types:e}){let n="";const r=_5({primaryType:t,types:e});r.delete(t);const i=[t,...Array.from(r).sort()];for(const o of i)n+=`${o}(${e[o].map(({name:s,type:a})=>`${a} ${s}`).join(",")})`;return n}function _5({primaryType:t,types:e},n=new Set){const r=t.match(/^\w*/u),i=r==null?void 0:r[0];if(n.has(i)||e[i]===void 0)return n;n.add(i);for(const o of e[i])_5({primaryType:o.type,types:e},n);return n}function S5({types:t,name:e,type:n,value:r}){if(t[n]!==void 0)return[{type:"bytes32"},It(E5({data:r,primaryType:n,types:t}))];if(n==="bytes")return r=`0x${(r.length%2?"0":"")+r.slice(2)}`,[{type:"bytes32"},It(r)];if(n==="string")return[{type:"bytes32"},It(Pr(r))];if(n.lastIndexOf("]")===n.length-1){const i=n.slice(0,n.lastIndexOf("[")),o=r.map(s=>S5({name:e,type:i,types:t,value:s}));return[{type:"bytes32"},It(Gl(o.map(([s])=>s),o.map(([,s])=>s)))]}return[{type:n},r]}function $5({domain:t,message:e,primaryType:n,types:r}){const i=r,o=(s,a)=>{for(const l of s){const{name:u,type:c}=l,f=c,p=a[u],w=f.match(PE);if(w&&(typeof p=="number"||typeof p=="bigint")){const[E,b,g]=w;le(p,{signed:b==="int",size:parseInt(g)/8})}if(f==="address"&&typeof p=="string"&&!ls(p))throw new sl({address:p});const v=f.match($E);if(v){const[E,b]=v;if(b&&st(p)!==parseInt(b))throw new s7({expectedSize:parseInt(b),givenSize:st(p)})}const C=i[f];C&&o(C,p)}};if(i.EIP712Domain&&t&&o(i.EIP712Domain,t),n!=="EIP712Domain"){const s=i[n];o(s,e)}}function P5({domain:t}){return[typeof(t==null?void 0:t.name)=="string"&&{name:"name",type:"string"},(t==null?void 0:t.version)&&{name:"version",type:"string"},typeof(t==null?void 0:t.chainId)=="number"&&{name:"chainId",type:"uint256"},(t==null?void 0:t.verifyingContract)&&{name:"verifyingContract",type:"address"},(t==null?void 0:t.salt)&&{name:"salt",type:"bytes32"}].filter(Boolean)}const u0="/docs/contract/encodeDeployData";function A5({abi:t,args:e,bytecode:n}){if(!e||e.length===0)return n;const r=t.find(o=>"type"in o&&o.type==="constructor");if(!r)throw new Jx({docsPath:u0});if(!("inputs"in r))throw new pw({docsPath:u0});if(!r.inputs||r.inputs.length===0)throw new pw({docsPath:u0});const i=Gl(r.inputs,e);return Op([n,i])}function OE(t,e){const n=(()=>typeof t=="string"?wr(t):t.raw instanceof Uint8Array?t.raw:fi(t.raw))(),r=wr(`Ethereum Signed Message:
${n.length}`);return It(Cr([r,n]),e)}function IE(t){return t.map(e=>({...e,value:BigInt(e.value)}))}function NE(t){return{...t,balance:t.balance?BigInt(t.balance):void 0,nonce:t.nonce?At(t.nonce):void 0,storageProof:t.storageProof?IE(t.storageProof):void 0}}async function RE(t,{address:e,blockNumber:n,blockTag:r,storageKeys:i}){const o=r??"latest",s=n!==void 0?le(n):void 0,a=await t.request({method:"eth_getProof",params:[e,i,s||o]});return NE(a)}async function ME(t,{address:e,blockNumber:n,blockTag:r="latest",slot:i}){const o=n!==void 0?le(n):void 0;return await t.request({method:"eth_getStorageAt",params:[e,i,o||r]})}async function rg(t,{blockHash:e,blockNumber:n,blockTag:r,hash:i,index:o}){var c,f,p;const s=r||"latest",a=n!==void 0?le(n):void 0;let l=null;if(i?l=await t.request({method:"eth_getTransactionByHash",params:[i]}):e?l=await t.request({method:"eth_getTransactionByBlockHashAndIndex",params:[e,le(o)]}):(a||s)&&(l=await t.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[a||s,le(o)]})),!l)throw new r5({blockHash:e,blockNumber:n,blockTag:s,hash:i,index:o});return(((p=(f=(c=t.chain)==null?void 0:c.formatters)==null?void 0:f.transaction)==null?void 0:p.format)||zy)(l)}async function BE(t,{hash:e,transactionReceipt:n}){const[r,i]=await Promise.all([eu(t),e?rg(t,{hash:e}):void 0]),o=(n==null?void 0:n.blockNumber)||(i==null?void 0:i.blockNumber);return o?r-o+1n:0n}async function Qh(t,{hash:e}){var i,o,s;const n=await t.request({method:"eth_getTransactionReceipt",params:[e]});if(!n)throw new i5({hash:e});return(((s=(o=(i=t.chain)==null?void 0:i.formatters)==null?void 0:o.transactionReceipt)==null?void 0:s.format)||Vx)(n)}async function LE(t,e){var C;const{allowFailure:n=!0,batchSize:r,blockNumber:i,blockTag:o,contracts:s,multicallAddress:a}=e,l=r??(typeof((C=t.batch)==null?void 0:C.multicall)=="object"&&t.batch.multicall.batchSize||1024);let u=a;if(!u){if(!t.chain)throw new Error("client chain not configured. multicallAddress is required.");u=Ns({blockNumber:i,chain:t.chain,contract:"multicall3"})}const c=[[]];let f=0,p=0;for(let E=0;E<s.length;E++){const{abi:b,address:g,args:y,functionName:x}=s[E];try{const _=Si({abi:b,args:y,functionName:x});p+=(_.length-2)/2,l>0&&p>l&&c[f].length>0&&(f++,p=(_.length-2)/2,c[f]=[]),c[f]=[...c[f],{allowFailure:!0,callData:_,target:g}]}catch(_){const $=bl(_,{abi:b,address:g,args:y,docsPath:"/docs/contract/multicall",functionName:x});if(!n)throw $;c[f]=[...c[f],{allowFailure:!0,callData:"0x",target:g}]}}const w=await Promise.allSettled(c.map(E=>pi(t,{abi:Gh,address:u,args:[E],blockNumber:i,blockTag:o,functionName:"aggregate3"}))),v=[];for(let E=0;E<w.length;E++){const b=w[E];if(b.status==="rejected"){if(!n)throw b.reason;for(let y=0;y<c[E].length;y++)v.push({status:"failure",error:b.reason,result:void 0});continue}const g=b.value;for(let y=0;y<g.length;y++){const{returnData:x,success:_}=g[y],{callData:$}=c[E][y],{abi:d,address:P,functionName:k,args:I}=s[v.length];try{if($==="0x")throw new Hd;if(!_)throw new zp({data:x});const M=Us({abi:d,args:I,data:x,functionName:k});v.push(n?{result:M,status:"success"}:M)}catch(M){const W=bl(M,{abi:d,address:P,args:I,docsPath:"/docs/contract/multicall",functionName:k});if(!n)throw W;v.push({error:W,result:void 0,status:"failure"})}}}if(v.length!==s.length)throw new U("multicall results mismatch");return v}const UE="0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */BigInt(0);BigInt(1);BigInt(2);function jE(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function FE(t,e){const n=er(t)?fi(t):t,r=er(e)?fi(e):e;return jE(n,r)}async function D5(t,{address:e,hash:n,signature:r,...i}){const o=er(r)?r:Pr(r);try{const{data:s}=await Zd(t,{data:A5({abi:TC,args:[e,n,o],bytecode:UE}),...i});return FE(s??"0x0","0x1")}catch(s){if(s instanceof o5)return!1;throw s}}async function zE(t,{address:e,message:n,signature:r,...i}){const o=OE(n);return D5(t,{address:e,hash:o,signature:r,...i})}async function WE(t,{address:e,signature:n,message:r,primaryType:i,types:o,domain:s,...a}){const l=AE({message:r,primaryType:i,types:o,domain:s});return D5(t,{address:e,hash:l,signature:n,...a})}function T5(t,{emitOnBegin:e=!1,emitMissed:n=!1,onBlockNumber:r,onError:i,poll:o,pollingInterval:s=t.pollingInterval}){const a=typeof o<"u"?o:t.transport.type!=="webSocket";let l;return a?(()=>{const f=Rt(["watchBlockNumber",t.uid,e,n,s]);return js(f,{onBlockNumber:r,onError:i},p=>Jl(async()=>{var w;try{const v=await eu(t,{cacheTime:0});if(l){if(v===l)return;if(v-l>1&&n)for(let C=l+1n;C<v;C++)p.onBlockNumber(C,l),l=C}(!l||v>l)&&(p.onBlockNumber(v,l),l=v)}catch(v){(w=p.onError)==null||w.call(p,v)}},{emitOnBegin:e,interval:s}))})():(()=>{let f=!0,p=()=>f=!1;return(async()=>{try{const{unsubscribe:w}=await t.transport.subscribe({params:["newHeads"],onData(v){var E;if(!f)return;const C=jd((E=v.result)==null?void 0:E.number);r(C,l),l=C},onError(v){i==null||i(v)}});p=w,f||p()}catch(w){i==null||i(w)}})(),p})()}async function HE(t,{confirmations:e=1,hash:n,onReplaced:r,pollingInterval:i=t.pollingInterval,timeout:o}){const s=Rt(["waitForTransactionReceipt",t.uid,n]);let a,l,u,c=!1;return new Promise((f,p)=>{o&&setTimeout(()=>p(new dC({hash:n})),o);const w=js(s,{onReplaced:r,resolve:f,reject:p},v=>{const C=T5(t,{emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:i,async onBlockNumber(E){if(c)return;let b=E;const g=y=>{C(),y(),w()};try{if(u){if(e>1&&(!u.blockNumber||b-u.blockNumber+1n<e))return;g(()=>v.resolve(u));return}if(a||(c=!0,await f5(async()=>{a=await rg(t,{hash:n}),a.blockNumber&&(b=a.blockNumber)},{delay:({count:y})=>~~(1<<y)*200,retryCount:6}),c=!1),u=await Qh(t,{hash:n}),e>1&&(!u.blockNumber||b-u.blockNumber+1n<e))return;g(()=>v.resolve(u))}catch(y){if(a&&(y instanceof r5||y instanceof i5))try{l=a;const _=(await hi(t,{blockNumber:b,includeTransactions:!0})).transactions.find(({from:d,nonce:P})=>d===l.from&&P===l.nonce);if(!_||(u=await Qh(t,{hash:_.hash}),e>1&&(!u.blockNumber||b-u.blockNumber+1n<e)))return;let $="replaced";_.to===l.to&&_.value===l.value?$="repriced":_.from===_.to&&_.value===0n&&($="cancelled"),g(()=>{var d;(d=v.onReplaced)==null||d.call(v,{reason:$,replacedTransaction:l,transaction:_,transactionReceipt:u}),v.resolve(u)})}catch(x){g(()=>v.reject(x))}else g(()=>v.reject(y))}}})})})}function VE(t,{blockTag:e="latest",emitMissed:n=!1,emitOnBegin:r=!1,onBlock:i,onError:o,includeTransactions:s,poll:a,pollingInterval:l=t.pollingInterval}){const u=typeof a<"u"?a:t.transport.type!=="webSocket",c=s??!1;let f;return u?(()=>{const v=Rt(["watchBlocks",t.uid,n,r,c,l]);return js(v,{onBlock:i,onError:o},C=>Jl(async()=>{var E;try{const b=await hi(t,{blockTag:e,includeTransactions:c});if(b.number&&(f!=null&&f.number)){if(b.number===f.number)return;if(b.number-f.number>1&&n)for(let g=(f==null?void 0:f.number)+1n;g<b.number;g++){const y=await hi(t,{blockNumber:g,includeTransactions:c});C.onBlock(y,f),f=y}}(!(f!=null&&f.number)||e==="pending"&&!(b!=null&&b.number)||b.number&&b.number>f.number)&&(C.onBlock(b,f),f=b)}catch(b){(E=C.onError)==null||E.call(C,b)}},{emitOnBegin:r,interval:l}))})():(()=>{let v=!0,C=()=>v=!1;return(async()=>{try{const{unsubscribe:E}=await t.transport.subscribe({params:["newHeads"],onData(b){var x,_,$;if(!v)return;const y=((($=(_=(x=t.chain)==null?void 0:x.formatters)==null?void 0:_.block)==null?void 0:$.format)||Wy)(b.result);i(y,f),f=y},onError(b){o==null||o(b)}});C=E,v||C()}catch(E){o==null||o(E)}})(),C})()}function qE(t,{address:e,args:n,batch:r=!0,event:i,events:o,onError:s,onLogs:a,poll:l,pollingInterval:u=t.pollingInterval,strict:c}){const f=typeof l<"u"?l:t.transport.type!=="webSocket",p=c??!1;return f?(()=>{const C=Rt(["watchEvent",e,n,r,t.uid,i,u]);return js(C,{onLogs:a,onError:s},E=>{let b,g,y=!1;const x=Jl(async()=>{var _;if(!y){try{g=await b5(t,{address:e,args:n,event:i,events:o,strict:p})}catch{}y=!0;return}try{let $;if(g)$=await Qd(t,{filter:g});else{const d=await eu(t);b&&b!==d?$=await Zp(t,{address:e,args:n,event:i,events:o,fromBlock:b+1n,toBlock:d}):$=[],b=d}if($.length===0)return;r?E.onLogs($):$.forEach(d=>E.onLogs([d]))}catch($){g&&$ instanceof so&&(y=!1),(_=E.onError)==null||_.call(E,$)}},{emitOnBegin:!0,interval:u});return async()=>{g&&await Yd(t,{filter:g}),x()}})})():(()=>{let C=!0,E=()=>C=!1;return(async()=>{try{const b=o??(i?[i]:void 0);let g=[];b&&(g=[b.flatMap(x=>Zl({abi:[x],eventName:x.name,args:n}))],i&&(g=g[0]));const{unsubscribe:y}=await t.transport.subscribe({params:["logs",{address:e,topics:g}],onData(x){var $;if(!C)return;const _=x.result;try{const{eventName:d,args:P}=Xl({abi:b,data:_.data,topics:_.topics,strict:p}),k=Ln(_,{args:P,eventName:d});a([k])}catch(d){let P,k;if(d instanceof oo||d instanceof Ms){if(c)return;P=d.abiItem.name,k=($=d.abiItem.inputs)==null?void 0:$.some(M=>!("name"in M&&M.name))}const I=Ln(_,{args:k?[]:{},eventName:P});a([I])}},onError(x){s==null||s(x)}});E=y,C||E()}catch(b){s==null||s(b)}})(),E})()}function GE(t,{batch:e=!0,onError:n,onTransactions:r,poll:i,pollingInterval:o=t.pollingInterval}){return(typeof i<"u"?i:t.transport.type!=="webSocket")?(()=>{const u=Rt(["watchPendingTransactions",t.uid,e,o]);return js(u,{onTransactions:r,onError:n},c=>{let f;const p=Jl(async()=>{var w;try{if(!f)try{f=await x5(t);return}catch(C){throw p(),C}const v=await Qd(t,{filter:f});if(v.length===0)return;e?c.onTransactions(v):v.forEach(C=>c.onTransactions([C]))}catch(v){(w=c.onError)==null||w.call(c,v)}},{emitOnBegin:!0,interval:o});return async()=>{f&&await Yd(t,{filter:f}),p()}})})():(()=>{let u=!0,c=()=>u=!1;return(async()=>{try{const{unsubscribe:f}=await t.transport.subscribe({params:["newPendingTransactions"],onData(p){if(!u)return;const w=p.result;r([w])},onError(p){n==null||n(p)}});c=f,u||c()}catch(f){n==null||n(f)}})(),c})()}function KE(t){return{call:e=>Zd(t,e),createBlockFilter:()=>yE(t),createContractEventFilter:e=>e5(t,e),createEventFilter:e=>b5(t,e),createPendingTransactionFilter:()=>x5(t),estimateContractGas:e=>SC(t,e),estimateGas:e=>Kp(t,e),getBalance:e=>bE(t,e),getBlock:e=>hi(t,e),getBlockNumber:e=>eu(t,e),getBlockTransactionCount:e=>xE(t,e),getBytecode:e=>CE(t,e),getChainId:()=>xl(t),getContractEvents:e=>l5(t,e),getEnsAddress:e=>rE(t,e),getEnsAvatar:e=>mE(t,e),getEnsName:e=>wE(t,e),getEnsResolver:e=>vE(t,e),getEnsText:e=>y5(t,e),getFeeHistory:e=>_E(t,e),estimateFeesPerGas:e=>EC(t,e),getFilterChanges:e=>Qd(t,e),getFilterLogs:e=>SE(t,e),getGasPrice:()=>Gp(t),getLogs:e=>Zp(t,e),getProof:e=>RE(t,e),estimateMaxPriorityFeePerGas:e=>CC(t,e),getStorageAt:e=>ME(t,e),getTransaction:e=>rg(t,e),getTransactionConfirmations:e=>BE(t,e),getTransactionCount:e=>a5(t,e),getTransactionReceipt:e=>Qh(t,e),multicall:e=>LE(t,e),prepareTransactionRequest:e=>Kd(t,e),readContract:e=>pi(t,e),sendRawTransaction:e=>Yp(t,e),simulateContract:e=>MC(t,e),verifyMessage:e=>zE(t,e),verifyTypedData:e=>WE(t,e),uninstallFilter:e=>Yd(t,e),waitForTransactionReceipt:e=>HE(t,e),watchBlocks:e=>VE(t,e),watchBlockNumber:e=>T5(t,e),watchContractEvent:e=>WC(t,e),watchEvent:e=>qE(t,e),watchPendingTransactions:e=>GE(t,e)}}function Tw(t){const{key:e="public",name:n="Public Client"}=t;return d5({...t,key:e,name:n,type:"publicClient"}).extend(KE)}function ZE(t,{abi:e,args:n,bytecode:r,...i}){const o=A5({abi:e,args:n,bytecode:r});return Xp(t,{...i,data:o})}async function QE(t){var n;return((n=t.account)==null?void 0:n.type)==="local"?[t.account.address]:(await t.request({method:"eth_accounts"})).map(r=>Up(r))}async function YE(t){return await t.request({method:"wallet_getPermissions"})}async function XE(t){return(await t.request({method:"eth_requestAccounts"})).map(n=>Mn(n))}async function JE(t,e){return t.request({method:"wallet_requestPermissions",params:[e]})}async function e9(t,{account:e=t.account,message:n}){if(!e)throw new Ls({docsPath:"/docs/actions/wallet/signMessage"});const r=Cn(e);if(r.type==="local")return r.signMessage({message:n});const i=(()=>typeof n=="string"?Tp(n):n.raw instanceof Uint8Array?Pr(n.raw):n.raw)();return t.request({method:"personal_sign",params:[i,r.address]})}async function t9(t,e){var u,c,f,p;const{account:n=t.account,chain:r=t.chain,...i}=e;if(!n)throw new Ls({docsPath:"/docs/actions/wallet/signTransaction"});const o=Cn(n);Yl({account:o,...e});const s=await xl(t);r!==null&&My({currentChainId:s,chain:r});const a=(r==null?void 0:r.formatters)||((u=t.chain)==null?void 0:u.formatters),l=((c=a==null?void 0:a.transactionRequest)==null?void 0:c.format)||Fd;return o.type==="local"?o.signTransaction({...i,chainId:s},{serializer:(p=(f=t.chain)==null?void 0:f.serializers)==null?void 0:p.transaction}):await t.request({method:"eth_signTransaction",params:[{...l(i),chainId:le(s),from:o.address}]})}async function n9(t,{account:e=t.account,domain:n,message:r,primaryType:i,types:o}){if(!e)throw new Ls({docsPath:"/docs/actions/wallet/signTypedData"});const s=Cn(e),a={EIP712Domain:P5({domain:n}),...o};if($5({domain:n,message:r,primaryType:i,types:a}),s.type==="local")return s.signTypedData({domain:n,primaryType:i,types:a,message:r});const l=Rt({domain:n??{},primaryType:i,types:a,message:r},(u,c)=>er(c)?c.toLowerCase():c);return t.request({method:"eth_signTypedData_v4",params:[s.address,l]})}async function r9(t,{id:e}){await t.request({method:"wallet_switchEthereumChain",params:[{chainId:le(e)}]})}async function i9(t,e){return await t.request({method:"wallet_watchAsset",params:e})}function o9(t){return{addChain:e=>qC(t,e),deployContract:e=>ZE(t,e),getAddresses:()=>QE(t),getChainId:()=>xl(t),getPermissions:()=>YE(t),prepareTransactionRequest:e=>Kd(t,e),requestAddresses:()=>XE(t),requestPermissions:e=>JE(t,e),sendRawTransaction:e=>Yp(t,e),sendTransaction:e=>Xp(t,e),signMessage:e=>e9(t,e),signTransaction:e=>t9(t,e),signTypedData:e=>n9(t,e),switchChain:e=>r9(t,e),watchAsset:e=>i9(t,e),writeContract:e=>VC(t,e)}}function ig(t){const{key:e="wallet",name:n="Wallet Client",transport:r}=t;return d5({...t,key:e,name:n,transport:o=>r({...o,retryCount:0}),type:"walletClient"}).extend(o9)}function s9(t,e={}){const{key:n="webSocket",name:r="WebSocket JSON-RPC",retryDelay:i}=e;return({chain:o,retryCount:s,timeout:a})=>{var f;const l=e.retryCount??s,u=a??e.timeout??1e4,c=t||((f=o==null?void 0:o.rpcUrls.default.webSocket)==null?void 0:f[0]);if(!c)throw new p5;return Xd({key:n,name:r,async request({method:p,params:w}){const v={method:p,params:w},C=await l0(c),{error:E,result:b}=await Jo.webSocketAsync(C,{body:v,timeout:u});if(E)throw new Wp({body:v,error:E,url:c});return b},retryCount:l,retryDelay:i,timeout:u,type:"webSocket"},{getSocket(){return l0(c)},async subscribe({params:p,onData:w,onError:v}){const C=await l0(c),{result:E}=await new Promise((b,g)=>Jo.webSocket(C,{body:{method:"eth_subscribe",params:p},onResponse(y){if(y.error){g(y.error),v==null||v(y.error);return}if(typeof y.id=="number"){b(y);return}y.method==="eth_subscription"&&w(y.params)}}));return{subscriptionId:E,async unsubscribe(){return new Promise(b=>Jo.webSocket(C,{body:{method:"eth_unsubscribe",params:[E]},onResponse:b}))}}}})}}const a9=Ud({id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-goerli.g.alchemy.com/v2"],webSocket:["wss://eth-goerli.g.alchemy.com/v2"]},infura:{http:["https://goerli.infura.io/v3"],webSocket:["wss://goerli.infura.io/ws/v3"]},default:{http:["https://rpc.ankr.com/eth_goerli"]},public:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli.etherscan.io"},default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x56522D00C410a43BFfDF00a9A569489297385790",blockCreated:8765204},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:6507670}},testnet:!0}),Ia=Ud({id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",blockCreated:16966585},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}}),l9=Ud({id:137,name:"Polygon",network:"matic",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:{alchemy:{http:["https://polygon-mainnet.g.alchemy.com/v2"],webSocket:["wss://polygon-mainnet.g.alchemy.com/v2"]},infura:{http:["https://polygon-mainnet.infura.io/v3"],webSocket:["wss://polygon-mainnet.infura.io/ws/v3"]},default:{http:["https://polygon-rpc.com"]},public:{http:["https://polygon-rpc.com"]}},blockExplorers:{etherscan:{name:"PolygonScan",url:"https://polygonscan.com"},default:{name:"PolygonScan",url:"https://polygonscan.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:25770160}}});var k5=class extends Error{constructor({chainId:t,connectorId:e}){super(`Chain "${t}" not configured for connector "${e}".`),this.name="ChainNotConfiguredForConnectorError"}},ji=class extends Error{constructor(){super(...arguments),this.name="ConnectorNotFoundError",this.message="Connector not found"}};function zc(t){return typeof t=="string"?Number.parseInt(t,t.trim().substring(0,2)==="0x"?16:10):typeof t=="bigint"?Number(t):t}var O5={exports:{}};(function(t){var e=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function i(l,u,c){this.fn=l,this.context=u,this.once=c||!1}function o(l,u,c,f,p){if(typeof c!="function")throw new TypeError("The listener must be a function");var w=new i(c,f||l,p),v=n?n+u:u;return l._events[v]?l._events[v].fn?l._events[v]=[l._events[v],w]:l._events[v].push(w):(l._events[v]=w,l._eventsCount++),l}function s(l,u){--l._eventsCount===0?l._events=new r:delete l._events[u]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var u=[],c,f;if(this._eventsCount===0)return u;for(f in c=this._events)e.call(c,f)&&u.push(n?f.slice(1):f);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(c)):u},a.prototype.listeners=function(u){var c=n?n+u:u,f=this._events[c];if(!f)return[];if(f.fn)return[f.fn];for(var p=0,w=f.length,v=new Array(w);p<w;p++)v[p]=f[p].fn;return v},a.prototype.listenerCount=function(u){var c=n?n+u:u,f=this._events[c];return f?f.fn?1:f.length:0},a.prototype.emit=function(u,c,f,p,w,v){var C=n?n+u:u;if(!this._events[C])return!1;var E=this._events[C],b=arguments.length,g,y;if(E.fn){switch(E.once&&this.removeListener(u,E.fn,void 0,!0),b){case 1:return E.fn.call(E.context),!0;case 2:return E.fn.call(E.context,c),!0;case 3:return E.fn.call(E.context,c,f),!0;case 4:return E.fn.call(E.context,c,f,p),!0;case 5:return E.fn.call(E.context,c,f,p,w),!0;case 6:return E.fn.call(E.context,c,f,p,w,v),!0}for(y=1,g=new Array(b-1);y<b;y++)g[y-1]=arguments[y];E.fn.apply(E.context,g)}else{var x=E.length,_;for(y=0;y<x;y++)switch(E[y].once&&this.removeListener(u,E[y].fn,void 0,!0),b){case 1:E[y].fn.call(E[y].context);break;case 2:E[y].fn.call(E[y].context,c);break;case 3:E[y].fn.call(E[y].context,c,f);break;case 4:E[y].fn.call(E[y].context,c,f,p);break;default:if(!g)for(_=1,g=new Array(b-1);_<b;_++)g[_-1]=arguments[_];E[y].fn.apply(E[y].context,g)}}return!0},a.prototype.on=function(u,c,f){return o(this,u,c,f,!1)},a.prototype.once=function(u,c,f){return o(this,u,c,f,!0)},a.prototype.removeListener=function(u,c,f,p){var w=n?n+u:u;if(!this._events[w])return this;if(!c)return s(this,w),this;var v=this._events[w];if(v.fn)v.fn===c&&(!p||v.once)&&(!f||v.context===f)&&s(this,w);else{for(var C=0,E=[],b=v.length;C<b;C++)(v[C].fn!==c||p&&!v[C].once||f&&v[C].context!==f)&&E.push(v[C]);E.length?this._events[w]=E.length===1?E[0]:E:s(this,w)}return this},a.prototype.removeAllListeners=function(u){var c;return u?(c=n?n+u:u,this._events[c]&&s(this,c)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,t.exports=a})(O5);var u9=O5.exports;const c9=y3(u9);var og=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},$e=(t,e,n)=>(og(t,e,"read from private field"),n?n.call(t):e.get(t)),Ut=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},Cl=(t,e,n,r)=>(og(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),ct=(t,e,n)=>(og(t,e,"access private method"),n),sg=class extends c9{constructor({chains:t=[Ia,a9],options:e}){super(),this.chains=t,this.options=e}getBlockExplorerUrls(t){const{default:e,...n}=t.blockExplorers??{};if(e)return[e.url,...Object.values(n).map(r=>r.url)]}isChainUnsupported(t){return!this.chains.some(e=>e.id===t)}setStorage(t){this.storage=t}};function d9(t){var n;if(!t)return"Injected";const e=r=>{if(r.isApexWallet)return"Apex Wallet";if(r.isAvalanche)return"Core Wallet";if(r.isBackpack)return"Backpack";if(r.isBifrost)return"Bifrost Wallet";if(r.isBitKeep)return"BitKeep";if(r.isBitski)return"Bitski";if(r.isBlockWallet)return"BlockWallet";if(r.isBraveWallet)return"Brave Wallet";if(r.isCoin98)return"Coin98 Wallet";if(r.isCoinbaseWallet)return"Coinbase Wallet";if(r.isDawn)return"Dawn Wallet";if(r.isDefiant)return"Defiant";if(r.isDesig)return"Desig Wallet";if(r.isEnkrypt)return"Enkrypt";if(r.isExodus)return"Exodus";if(r.isFordefi)return"Fordefi";if(r.isFrame)return"Frame";if(r.isFrontier)return"Frontier Wallet";if(r.isGamestop)return"GameStop Wallet";if(r.isHaqqWallet)return"HAQQ Wallet";if(r.isHyperPay)return"HyperPay Wallet";if(r.isImToken)return"ImToken";if(r.isHaloWallet)return"Halo Wallet";if(r.isKuCoinWallet)return"KuCoin Wallet";if(r.isMathWallet)return"MathWallet";if(r.isNovaWallet)return"Nova Wallet";if(r.isOkxWallet||r.isOKExWallet)return"OKX Wallet";if(r.isOneInchIOSWallet||r.isOneInchAndroidWallet)return"1inch Wallet";if(r.isOpera)return"Opera";if(r.isPhantom)return"Phantom";if(r.isPortal)return"Ripio Portal";if(r.isRabby)return"Rabby Wallet";if(r.isRainbow)return"Rainbow";if(r.isStatus)return"Status";if(r.isSubWallet)return"SubWallet";if(r.isTalisman)return"Talisman";if(r.isTally)return"Taho";if(r.isTokenPocket)return"TokenPocket";if(r.isTokenary)return"Tokenary";if(r.isTrust||r.isTrustWallet)return"Trust Wallet";if(r.isTTWallet)return"TTWallet";if(r.isXDEFI)return"XDEFI Wallet";if(r.isZeal)return"Zeal";if(r.isZerion)return"Zerion";if(r.isMetaMask)return"MetaMask"};if((n=t.providers)!=null&&n.length){const r=new Set;let i=1;for(const s of t.providers){let a=e(s);a||(a=`Unknown Wallet #${i}`,i+=1),r.add(a)}const o=[...r];return o.length?o:o[0]??"Injected"}return e(t)??"Injected"}var oc,ag=class extends sg{constructor({chains:t,options:e}={}){const n={shimDisconnect:!0,getProvider(){if(typeof window>"u")return;const i=window.ethereum;return i!=null&&i.providers?i.providers[0]:i},...e};super({chains:t,options:n}),this.id="injected",Ut(this,oc,void 0),this.shimDisconnectKey=`${this.id}.shimDisconnect`,this.onAccountsChanged=i=>{i.length===0?this.emit("disconnect"):this.emit("change",{account:Mn(i[0])})},this.onChainChanged=i=>{const o=zc(i),s=this.isChainUnsupported(o);this.emit("change",{chain:{id:o,unsupported:s}})},this.onDisconnect=async i=>{var o;i.code===1013&&await this.getProvider()&&await this.getAccount()||(this.emit("disconnect"),this.options.shimDisconnect&&((o=this.storage)==null||o.removeItem(this.shimDisconnectKey)))};const r=n.getProvider();if(typeof n.name=="string")this.name=n.name;else if(r){const i=d9(r);n.name?this.name=n.name(i):typeof i=="string"?this.name=i:this.name=i[0]}else this.name="Injected";this.ready=!!r}async connect({chainId:t}={}){var e;try{const n=await this.getProvider();if(!n)throw new ji;n.on&&(n.on("accountsChanged",this.onAccountsChanged),n.on("chainChanged",this.onChainChanged),n.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});const r=await n.request({method:"eth_requestAccounts"}),i=Mn(r[0]);let o=await this.getChainId(),s=this.isChainUnsupported(o);return t&&o!==t&&(o=(await this.switchChain(t)).id,s=this.isChainUnsupported(o)),this.options.shimDisconnect&&((e=this.storage)==null||e.setItem(this.shimDisconnectKey,!0)),{account:i,chain:{id:o,unsupported:s}}}catch(n){throw this.isUserRejectedRequestError(n)?new zt(n):n.code===-32002?new cs(n):n}}async disconnect(){var e;const t=await this.getProvider();t!=null&&t.removeListener&&(t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&((e=this.storage)==null||e.removeItem(this.shimDisconnectKey)))}async getAccount(){const t=await this.getProvider();if(!t)throw new ji;const e=await t.request({method:"eth_accounts"});return Mn(e[0])}async getChainId(){const t=await this.getProvider();if(!t)throw new ji;return t.request({method:"eth_chainId"}).then(zc)}async getProvider(){const t=this.options.getProvider();return t&&Cl(this,oc,t),$e(this,oc)}async getWalletClient({chainId:t}={}){const[e,n]=await Promise.all([this.getProvider(),this.getAccount()]),r=this.chains.find(i=>i.id===t);if(!e)throw new Error("provider is required.");return ig({account:n,chain:r,transport:Jp(e)})}async isAuthorized(){var t;try{if(this.options.shimDisconnect&&!((t=this.storage)!=null&&t.getItem(this.shimDisconnectKey)))return!1;if(!await this.getProvider())throw new ji;return!!await this.getAccount()}catch{return!1}}async switchChain(t){var r,i,o;const e=await this.getProvider();if(!e)throw new ji;const n=le(t);try{return await Promise.all([e.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),new Promise(s=>this.on("change",({chain:a})=>{(a==null?void 0:a.id)===t&&s()}))]),this.chains.find(s=>s.id===t)??{id:t,name:`Chain ${n}`,network:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(s){const a=this.chains.find(l=>l.id===t);if(!a)throw new k5({chainId:t,connectorId:this.id});if(s.code===4902||((i=(r=s==null?void 0:s.data)==null?void 0:r.originalError)==null?void 0:i.code)===4902)try{if(await e.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:a.name,nativeCurrency:a.nativeCurrency,rpcUrls:[((o=a.rpcUrls.public)==null?void 0:o.http[0])??""],blockExplorerUrls:this.getBlockExplorerUrls(a)}]}),await this.getChainId()!==t)throw new zt(new Error("User rejected switch after adding network."));return a}catch(l){throw new zt(l)}throw this.isUserRejectedRequestError(s)?new zt(s):new Er(s)}}async watchAsset({address:t,decimals:e=18,image:n,symbol:r}){const i=await this.getProvider();if(!i)throw new ji;return i.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:e,image:n,symbol:r}}})}isUserRejectedRequestError(t){return t.code===4001}};oc=new WeakMap;var lg=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},c0=(t,e,n)=>(lg(t,e,"read from private field"),n?n.call(t):e.get(t)),d0=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},Bu=(t,e,n,r)=>(lg(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),f9=(t,e,n)=>(lg(t,e,"access private method"),n);const h9=t=>(e,n,r)=>{const i=r.subscribe;return r.subscribe=(s,a,l)=>{let u=s;if(a){const c=(l==null?void 0:l.equalityFn)||Object.is;let f=s(r.getState());u=p=>{const w=s(p);if(!c(f,w)){const v=f;a(f=w,v)}},l!=null&&l.fireImmediately&&a(f,f)}return i(u)},t(e,n,r)},p9=h9;function g9(t,e){let n;try{n=t()}catch{return}return{getItem:i=>{var o;const s=l=>l===null?null:JSON.parse(l,e==null?void 0:e.reviver),a=(o=n.getItem(i))!=null?o:null;return a instanceof Promise?a.then(s):s(a)},setItem:(i,o)=>n.setItem(i,JSON.stringify(o,e==null?void 0:e.replacer)),removeItem:i=>n.removeItem(i)}}const El=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(r){return El(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return El(r)(n)}}}},m9=(t,e)=>(n,r,i)=>{let o={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:E=>E,version:0,merge:(E,b)=>({...b,...E}),...e},s=!1;const a=new Set,l=new Set;let u;try{u=o.getStorage()}catch{}if(!u)return t((...E)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...E)},r,i);const c=El(o.serialize),f=()=>{const E=o.partialize({...r()});let b;const g=c({state:E,version:o.version}).then(y=>u.setItem(o.name,y)).catch(y=>{b=y});if(b)throw b;return g},p=i.setState;i.setState=(E,b)=>{p(E,b),f()};const w=t((...E)=>{n(...E),f()},r,i);let v;const C=()=>{var E;if(!u)return;s=!1,a.forEach(g=>g(r()));const b=((E=o.onRehydrateStorage)==null?void 0:E.call(o,r()))||void 0;return El(u.getItem.bind(u))(o.name).then(g=>{if(g)return o.deserialize(g)}).then(g=>{if(g)if(typeof g.version=="number"&&g.version!==o.version){if(o.migrate)return o.migrate(g.state,g.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return g.state}).then(g=>{var y;return v=o.merge(g,(y=r())!=null?y:w),n(v,!0),f()}).then(()=>{b==null||b(v,void 0),s=!0,l.forEach(g=>g(v))}).catch(g=>{b==null||b(void 0,g)})};return i.persist={setOptions:E=>{o={...o,...E},E.getStorage&&(u=E.getStorage())},clearStorage:()=>{u==null||u.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>C(),hasHydrated:()=>s,onHydrate:E=>(a.add(E),()=>{a.delete(E)}),onFinishHydration:E=>(l.add(E),()=>{l.delete(E)})},C(),v||w},w9=(t,e)=>(n,r,i)=>{let o={storage:g9(()=>localStorage),partialize:C=>C,version:0,merge:(C,E)=>({...E,...C}),...e},s=!1;const a=new Set,l=new Set;let u=o.storage;if(!u)return t((...C)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...C)},r,i);const c=()=>{const C=o.partialize({...r()});return u.setItem(o.name,{state:C,version:o.version})},f=i.setState;i.setState=(C,E)=>{f(C,E),c()};const p=t((...C)=>{n(...C),c()},r,i);let w;const v=()=>{var C,E;if(!u)return;s=!1,a.forEach(g=>{var y;return g((y=r())!=null?y:p)});const b=((E=o.onRehydrateStorage)==null?void 0:E.call(o,(C=r())!=null?C:p))||void 0;return El(u.getItem.bind(u))(o.name).then(g=>{if(g)if(typeof g.version=="number"&&g.version!==o.version){if(o.migrate)return o.migrate(g.state,g.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return g.state}).then(g=>{var y;return w=o.merge(g,(y=r())!=null?y:p),n(w,!0),c()}).then(()=>{b==null||b(w,void 0),w=r(),s=!0,l.forEach(g=>g(w))}).catch(g=>{b==null||b(void 0,g)})};return i.persist={setOptions:C=>{o={...o,...C},C.storage&&(u=C.storage)},clearStorage:()=>{u==null||u.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>v(),hasHydrated:()=>s,onHydrate:C=>(a.add(C),()=>{a.delete(C)}),onFinishHydration:C=>(l.add(C),()=>{l.delete(C)})},o.skipHydration||v(),w||p},v9=(t,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?m9(t,e):w9(t,e),y9=v9,kw=t=>{let e;const n=new Set,r=(l,u)=>{const c=typeof l=="function"?l(e):l;if(!Object.is(c,e)){const f=e;e=u??typeof c!="object"?c:Object.assign({},e,c),n.forEach(p=>p(e,f))}},i=()=>e,a={setState:r,getState:i,subscribe:l=>(n.add(l),()=>n.delete(l)),destroy:()=>{n.clear()}};return e=t(r,i,a),a},b9=t=>t?kw(t):kw;function I5(t,e){if(Object.is(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(const[r,i]of t)if(!Object.is(i,e.get(r)))return!1;return!0}if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(const r of t)if(!e.has(r))return!1;return!0}const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(e,n[r])||!Object.is(t[n[r]],e[n[r]]))return!1;return!0}function x9(t,e,{batch:n={multicall:{wait:32}},pollingInterval:r=4e3,rank:i,retryCount:o,retryDelay:s,stallTimeout:a}={}){if(!t.length)throw new Error("must have at least one chain");let l=[];const u={},c={};for(const f of t){let p=!1;for(const w of e){const v=w(f);v&&(p=!0,l.some(({id:C})=>C===f.id)||(l=[...l,v.chain]),u[f.id]=[...u[f.id]||[],...v.rpcUrls.http],v.rpcUrls.webSocket&&(c[f.id]=[...c[f.id]||[],...v.rpcUrls.webSocket]))}if(!p)throw new Error([`Could not find valid provider configuration for chain "${f.name}".
`,"You may need to add `jsonRpcProvider` to `configureChains` with the chain's RPC URLs.","Read more: https://wagmi.sh/core/providers/jsonRpc"].join(`
`))}return{chains:l,publicClient:({chainId:f})=>{const p=l.find(C=>C.id===f)??t[0],w=u[p.id];if(!w||!w[0])throw new Error(`No providers configured for chain "${p.id}"`);const v=Tw({batch:n,chain:p,transport:Pw(w.map(C=>eE(C,{timeout:a})),{rank:i,retryCount:o,retryDelay:s}),pollingInterval:r});return Object.assign(v,{chains:l})},webSocketPublicClient:({chainId:f})=>{const p=l.find(C=>C.id===f)??t[0],w=c[p.id];if(!w||!w[0])return;const v=Tw({batch:n,chain:p,transport:Pw(w.map(C=>s9(C,{timeout:a})),{rank:i,retryCount:o,retryDelay:s}),pollingInterval:r});return Object.assign(v,{chains:l})}}}var C9=class extends Error{constructor({chainId:t,connectorId:e}){super(`Chain "${t}" not configured${e?` for connector "${e}"`:""}.`),this.name="ChainNotConfigured"}},E9=class extends Error{constructor(){super(...arguments),this.name="ConnectorAlreadyConnectedError",this.message="Connector already connected"}},_9=class extends Error{constructor(){super(...arguments),this.name="ConfigChainsNotFound",this.message="No chains were found on the wagmi config. Some functions that require a chain may not work."}},S9=class extends Error{constructor({connector:t}){super(`"${t.name}" does not support programmatic chain switching.`),this.name="SwitchChainNotSupportedError"}},Yh=(t,{find:e,replace:n})=>t&&e(t)?n(t):typeof t!="object"?t:Array.isArray(t)?t.map(r=>Yh(r,{find:e,replace:n})):t instanceof Object?Object.entries(t).reduce((r,[i,o])=>({...r,[i]:Yh(o,{find:e,replace:n})}),{}):t;function $9(t){const e=JSON.parse(t);return Yh(e,{find:r=>typeof r=="string"&&r.startsWith("#bigint."),replace:r=>BigInt(r.replace("#bigint.",""))})}function Ow(t){return typeof t=="number"?t:t==="wei"?0:Math.abs(Zx[t])}function Iw(t,e){return t.slice(0,e).join(".")||"."}function Nw(t,e){const{length:n}=t;for(let r=0;r<n;++r)if(t[r]===e)return r+1;return 0}function P9(t,e){const n=typeof t=="function",r=typeof e=="function",i=[],o=[];return function(a,l){if(typeof l=="object")if(i.length){const u=Nw(i,this);u===0?i[i.length]=this:(i.splice(u),o.splice(u)),o[o.length]=a;const c=Nw(i,l);if(c!==0)return r?e.call(this,a,l,Iw(o,c)):`[ref=${Iw(o,c)}]`}else i[0]=l,o[0]=a;return n?t.call(this,a,l):l}}function A9(t,e,n,r){return JSON.stringify(t,P9((i,o)=>{const s=typeof o=="bigint"?`#bigint.${o.toString()}`:o;return(e==null?void 0:e(i,s))||s},r),n??void 0)}var N5={getItem:t=>"",setItem:(t,e)=>null,removeItem:t=>null};function R5({deserialize:t=$9,key:e="wagmi",serialize:n=A9,storage:r}){return{...r,getItem:(i,o=null)=>{const s=r.getItem(`${e}.${i}`);try{return s?t(s):o}catch(a){return console.warn(a),o}},setItem:(i,o)=>{if(o===null)r.removeItem(`${e}.${i}`);else try{r.setItem(`${e}.${i}`,n(o))}catch(s){console.error(s)}},removeItem:i=>r.removeItem(`${e}.${i}`)}}var Rw="store",Ao,va,Xh,M5,D9=class{constructor({autoConnect:t=!1,connectors:e=[new ag],publicClient:n,storage:r=R5({storage:typeof window<"u"?window.localStorage:N5}),logger:i={warn:console.warn},webSocketPublicClient:o}){var u,c;d0(this,Xh),this.publicClients=new Map,this.webSocketPublicClients=new Map,d0(this,Ao,void 0),d0(this,va,void 0),this.args={autoConnect:t,connectors:e,logger:i,publicClient:n,storage:r,webSocketPublicClient:o};let s="disconnected",a;if(t)try{const f=r.getItem(Rw),p=(u=f==null?void 0:f.state)==null?void 0:u.data;s=p!=null&&p.account?"reconnecting":"connecting",a=(c=p==null?void 0:p.chain)==null?void 0:c.id}catch{}const l=typeof e=="function"?e():e;l.forEach(f=>f.setStorage(r)),this.store=b9(p9(y9(()=>({connectors:l,publicClient:this.getPublicClient({chainId:a}),status:s,webSocketPublicClient:this.getWebSocketPublicClient({chainId:a})}),{name:Rw,storage:r,partialize:f=>{var p,w;return{...t&&{data:{account:(p=f==null?void 0:f.data)==null?void 0:p.account,chain:(w=f==null?void 0:f.data)==null?void 0:w.chain}},chains:f==null?void 0:f.chains}},version:2}))),this.storage=r,Bu(this,va,r==null?void 0:r.getItem("wallet")),f9(this,Xh,M5).call(this),t&&typeof window<"u"&&setTimeout(async()=>await this.autoConnect(),0)}get chains(){return this.store.getState().chains}get connectors(){return this.store.getState().connectors}get connector(){return this.store.getState().connector}get data(){return this.store.getState().data}get error(){return this.store.getState().error}get lastUsedChainId(){var t,e;return(e=(t=this.data)==null?void 0:t.chain)==null?void 0:e.id}get publicClient(){return this.store.getState().publicClient}get status(){return this.store.getState().status}get subscribe(){return this.store.subscribe}get webSocketPublicClient(){return this.store.getState().webSocketPublicClient}setState(t){const e=typeof t=="function"?t(this.store.getState()):t;this.store.setState(e,!0)}clearState(){this.setState(t=>({...t,chains:void 0,connector:void 0,data:void 0,error:void 0,status:"disconnected"}))}async destroy(){var t,e;this.connector&&await((e=(t=this.connector).disconnect)==null?void 0:e.call(t)),Bu(this,Ao,!1),this.clearState(),this.store.destroy()}async autoConnect(){if(c0(this,Ao))return;Bu(this,Ao,!0),this.setState(n=>{var r;return{...n,status:(r=n.data)!=null&&r.account?"reconnecting":"connecting"}});const t=c0(this,va)?[...this.connectors].sort(n=>n.id===c0(this,va)?-1:1):this.connectors;let e=!1;for(const n of t){if(!n.ready||!n.isAuthorized||!await n.isAuthorized())continue;const i=await n.connect();this.setState(o=>({...o,connector:n,chains:n==null?void 0:n.chains,data:i,status:"connected"})),e=!0;break}return e||this.setState(n=>({...n,data:void 0,status:"disconnected"})),Bu(this,Ao,!1),this.data}setConnectors(t){this.args={...this.args,connectors:t};const e=typeof t=="function"?t():t;e.forEach(n=>n.setStorage(this.args.storage)),this.setState(n=>({...n,connectors:e}))}getPublicClient({chainId:t}={}){let e=this.publicClients.get(-1);if(e&&(e==null?void 0:e.chain.id)===t||(e=this.publicClients.get(t??-1),e))return e;const{publicClient:n}=this.args;return e=typeof n=="function"?n({chainId:t}):n,this.publicClients.set(t??-1,e),e}setPublicClient(t){var n,r;const e=(r=(n=this.data)==null?void 0:n.chain)==null?void 0:r.id;this.args={...this.args,publicClient:t},this.publicClients.clear(),this.setState(i=>({...i,publicClient:this.getPublicClient({chainId:e})}))}getWebSocketPublicClient({chainId:t}={}){let e=this.webSocketPublicClients.get(-1);if(e&&(e==null?void 0:e.chain.id)===t||(e=this.webSocketPublicClients.get(t??-1),e))return e;const{webSocketPublicClient:n}=this.args;return e=typeof n=="function"?n({chainId:t}):n,e&&this.webSocketPublicClients.set(t??-1,e),e}setWebSocketPublicClient(t){var n,r;const e=(r=(n=this.data)==null?void 0:n.chain)==null?void 0:r.id;this.args={...this.args,webSocketPublicClient:t},this.webSocketPublicClients.clear(),this.setState(i=>({...i,webSocketPublicClient:this.getWebSocketPublicClient({chainId:e})}))}setLastUsedConnector(t=null){var e;(e=this.storage)==null||e.setItem("wallet",t)}};Ao=new WeakMap;va=new WeakMap;Xh=new WeakSet;M5=function(){const t=a=>{this.setState(l=>({...l,data:{...l.data,...a}}))},e=()=>{this.clearState()},n=a=>{this.setState(l=>({...l,error:a}))};this.store.subscribe(({connector:a})=>a,(a,l)=>{var u,c,f,p,w,v;(u=l==null?void 0:l.off)==null||u.call(l,"change",t),(c=l==null?void 0:l.off)==null||c.call(l,"disconnect",e),(f=l==null?void 0:l.off)==null||f.call(l,"error",n),a&&((p=a.on)==null||p.call(a,"change",t),(w=a.on)==null||w.call(a,"disconnect",e),(v=a.on)==null||v.call(a,"error",n))});const{publicClient:r,webSocketPublicClient:i}=this.args;(typeof r=="function"||typeof i=="function")&&this.store.subscribe(({data:a})=>{var l;return(l=a==null?void 0:a.chain)==null?void 0:l.id},a=>{this.setState(l=>({...l,publicClient:this.getPublicClient({chainId:a}),webSocketPublicClient:this.getWebSocketPublicClient({chainId:a})}))})};var Jh;function T9(t){const e=new D9(t);return Jh=e,e}function Ar(){if(!Jh)throw new Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");return Jh}async function Mw({chainId:t,connector:e}){const n=Ar(),r=n.connector;if(r&&e.id===r.id)throw new E9;try{n.setState(o=>({...o,status:"connecting"}));const i=await e.connect({chainId:t});return n.setLastUsedConnector(e.id),n.setState(o=>({...o,connector:e,chains:e==null?void 0:e.chains,data:i,status:"connected"})),n.storage.setItem("connected",!0),{...i,connector:e}}catch(i){throw n.setState(o=>({...o,status:o.connector?"connected":"disconnected"})),i}}async function k9(){const t=Ar();t.connector&&await t.connector.disconnect(),t.clearState(),t.storage.removeItem("connected")}var O9=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],I9=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];function Fs({chainId:t}={}){const e=Ar();return t&&e.getPublicClient({chainId:t})||e.publicClient}async function N9({chainId:t,contracts:e,blockNumber:n,blockTag:r,...i}){const o=Fs({chainId:t});if(!o.chains)throw new _9;if(t&&o.chain.id!==t)throw new C9({chainId:t});return o.multicall({allowFailure:i.allowFailure??!0,blockNumber:n,blockTag:r,contracts:e})}async function R9({address:t,account:e,chainId:n,abi:r,args:i,functionName:o,blockNumber:s,blockTag:a}){return Fs({chainId:n}).readContract({abi:r,address:t,account:e,functionName:o,args:i,blockNumber:s,blockTag:a})}async function M9({contracts:t,blockNumber:e,blockTag:n,...r}){const{allowFailure:i=!0}=r;try{const o=Fs(),s=t.reduce((c,f,p)=>{const w=f.chainId??o.chain.id;return{...c,[w]:[...c[w]||[],{contract:f,index:p}]}},{}),a=()=>Object.entries(s).map(([c,f])=>N9({allowFailure:i,chainId:parseInt(c),contracts:f.map(({contract:p})=>p),blockNumber:e,blockTag:n})),l=(await Promise.all(a())).flat(),u=Object.values(s).flatMap(c=>c.map(({index:f})=>f));return l.reduce((c,f,p)=>(c&&(c[u[p]]=f),c),[])}catch(o){if(o instanceof Fp)throw o;const s=()=>t.map(a=>R9({...a,blockNumber:e,blockTag:n}));return i?(await Promise.allSettled(s())).map(a=>a.status==="fulfilled"?{result:a.value,status:"success"}:{error:a.reason,result:void 0,status:"failure"}):await Promise.all(s())}}async function B9({address:t,chainId:e,formatUnits:n,token:r}){const i=Ar(),o=Fs({chainId:e});if(r){const u=async({abi:c})=>{const f={abi:c,address:r,chainId:e},[p,w,v]=await M9({allowFailure:!1,contracts:[{...f,functionName:"balanceOf",args:[t]},{...f,functionName:"decimals"},{...f,functionName:"symbol"}]});return{decimals:w,formatted:Mc(p??"0",Ow(n??w)),symbol:v,value:p}};try{return await u({abi:O9})}catch(c){if(c instanceof Fp){const{symbol:f,...p}=await u({abi:I9});return{symbol:jy(Yi(f,{dir:"right"})),...p}}throw c}}const s=[...i.publicClient.chains||[],...i.chains??[]],a=await o.getBalance({address:t}),l=s.find(u=>u.id===o.chain.id);return{decimals:(l==null?void 0:l.nativeCurrency.decimals)??18,formatted:Mc(a??"0",Ow(n??18)),symbol:(l==null?void 0:l.nativeCurrency.symbol)??"ETH",value:a}}function e1(){const{data:t,connector:e,status:n}=Ar();switch(n){case"connected":return{address:t==null?void 0:t.account,connector:e,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:n};case"reconnecting":return{address:t==null?void 0:t.account,connector:e,isConnected:!!(t!=null&&t.account),isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:n};case"connecting":return{address:t==null?void 0:t.account,connector:e,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:n};case"disconnected":return{address:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:n}}}function t1(){var i,o,s,a;const t=Ar(),e=(o=(i=t.data)==null?void 0:i.chain)==null?void 0:o.id,n=t.chains??[],r=[...((s=t.publicClient)==null?void 0:s.chains)||[],...n].find(l=>l.id===e)??{id:e,name:`Chain ${e}`,network:`${e}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}};return{chain:e?{...r,...(a=t.data)==null?void 0:a.chain,id:e}:void 0,chains:n}}async function L9({chainId:t}){const{connector:e}=Ar();if(!e)throw new ji;if(!e.switchChain)throw new S9({connector:e});return e.switchChain(t)}function U9(t,{selector:e=n=>n}={}){const n=Ar(),r=()=>t(e1());return n.subscribe(({data:o,connector:s,status:a})=>e({address:o==null?void 0:o.account,connector:s,status:a}),r,{equalityFn:I5})}function j9(t,{selector:e=n=>n}={}){const n=Ar(),r=()=>t(t1());return n.subscribe(({data:o,chains:s})=>{var a;return e({chainId:(a=o==null?void 0:o.chain)==null?void 0:a.id,chains:s})},r,{equalityFn:I5})}async function F9({name:t,chainId:e}){const{normalize:n}=await ds(()=>import("./index-95c902bc.js"),[]);return await Fs({chainId:e}).getEnsAvatar({name:n(t)})}async function z9({address:t,chainId:e}){return Fs({chainId:e}).getEnsName({address:Mn(t)})}const W9=Symbol(),Bw=Object.getPrototypeOf,n1=new WeakMap,H9=t=>t&&(n1.has(t)?n1.get(t):Bw(t)===Object.prototype||Bw(t)===Array.prototype),V9=t=>H9(t)&&t[W9]||null,Lw=(t,e=!0)=>{n1.set(t,e)},f0=t=>typeof t=="object"&&t!==null,Ur=new WeakMap,ya=new WeakSet,q9=(t=Object.is,e=(u,c)=>new Proxy(u,c),n=u=>f0(u)&&!ya.has(u)&&(Array.isArray(u)||!(Symbol.iterator in u))&&!(u instanceof WeakMap)&&!(u instanceof WeakSet)&&!(u instanceof Error)&&!(u instanceof Number)&&!(u instanceof Date)&&!(u instanceof String)&&!(u instanceof RegExp)&&!(u instanceof ArrayBuffer),r=u=>{switch(u.status){case"fulfilled":return u.value;case"rejected":throw u.reason;default:throw u}},i=new WeakMap,o=(u,c,f=r)=>{const p=i.get(u);if((p==null?void 0:p[0])===c)return p[1];const w=Array.isArray(u)?[]:Object.create(Object.getPrototypeOf(u));return Lw(w,!0),i.set(u,[c,w]),Reflect.ownKeys(u).forEach(v=>{if(Object.getOwnPropertyDescriptor(w,v))return;const C=Reflect.get(u,v),E={value:C,enumerable:!0,configurable:!0};if(ya.has(C))Lw(C,!1);else if(C instanceof Promise)delete E.value,E.get=()=>f(C);else if(Ur.has(C)){const[b,g]=Ur.get(C);E.value=o(b,g(),f)}Object.defineProperty(w,v,E)}),Object.preventExtensions(w)},s=new WeakMap,a=[1,1],l=u=>{if(!f0(u))throw new Error("object required");const c=s.get(u);if(c)return c;let f=a[0];const p=new Set,w=(k,I=++a[0])=>{f!==I&&(f=I,p.forEach(M=>M(k,I)))};let v=a[1];const C=(k=++a[1])=>(v!==k&&!p.size&&(v=k,b.forEach(([I])=>{const M=I[1](k);M>f&&(f=M)})),f),E=k=>(I,M)=>{const W=[...I];W[1]=[k,...W[1]],w(W,M)},b=new Map,g=(k,I)=>{if(p.size){const M=I[3](E(k));b.set(k,[I,M])}else b.set(k,[I])},y=k=>{var I;const M=b.get(k);M&&(b.delete(k),(I=M[1])==null||I.call(M))},x=k=>(p.add(k),p.size===1&&b.forEach(([M,W],G)=>{const te=M[3](E(G));b.set(G,[M,te])}),()=>{p.delete(k),p.size===0&&b.forEach(([M,W],G)=>{W&&(W(),b.set(G,[M]))})}),_=Array.isArray(u)?[]:Object.create(Object.getPrototypeOf(u)),d=e(_,{deleteProperty(k,I){const M=Reflect.get(k,I);y(I);const W=Reflect.deleteProperty(k,I);return W&&w(["delete",[I],M]),W},set(k,I,M,W){const G=Reflect.has(k,I),te=Reflect.get(k,I,W);if(G&&(t(te,M)||s.has(M)&&t(te,s.get(M))))return!0;y(I),f0(M)&&(M=V9(M)||M);let ne=M;if(M instanceof Promise)M.then(X=>{M.status="fulfilled",M.value=X,w(["resolve",[I],X])}).catch(X=>{M.status="rejected",M.reason=X,w(["reject",[I],X])});else{!Ur.has(M)&&n(M)&&(ne=l(M));const X=!ya.has(ne)&&Ur.get(ne);X&&g(I,X)}return Reflect.set(k,I,ne,W),w(["set",[I],M,te]),!0}});s.set(u,d);const P=[_,C,o,x];return Ur.set(d,P),Reflect.ownKeys(u).forEach(k=>{const I=Object.getOwnPropertyDescriptor(u,k);"value"in I&&(d[k]=u[k],delete I.value,delete I.writable),Object.defineProperty(_,k,I)}),d})=>[l,Ur,ya,t,e,n,r,i,o,s,a],[G9]=q9();function sn(t={}){return G9(t)}function zs(t,e,n){const r=Ur.get(t);let i;const o=[],s=r[3];let a=!1;const u=s(c=>{if(o.push(c),n){e(o.splice(0));return}i||(i=Promise.resolve().then(()=>{i=void 0,a&&e(o.splice(0))}))});return a=!0,()=>{a=!1,u()}}function AN(t,e){const n=Ur.get(t),[r,i,o]=n;return o(r,i(),e)}function Wc(t){return ya.add(t),t}function or(t,e,n,r){let i=t[e];return zs(t,()=>{const o=t[e];Object.is(i,o)||n(i=o)},r)}var B5={exports:{}},L5={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fs=tt;function K9(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Z9=typeof Object.is=="function"?Object.is:K9,Q9=fs.useState,Y9=fs.useEffect,X9=fs.useLayoutEffect,J9=fs.useDebugValue;function e_(t,e){var n=e(),r=Q9({inst:{value:n,getSnapshot:e}}),i=r[0].inst,o=r[1];return X9(function(){i.value=n,i.getSnapshot=e,h0(i)&&o({inst:i})},[t,n,e]),Y9(function(){return h0(i)&&o({inst:i}),t(function(){h0(i)&&o({inst:i})})},[t]),J9(n),n}function h0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Z9(t,n)}catch{return!0}}function t_(t,e){return e()}var n_=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?t_:e_;L5.useSyncExternalStore=fs.useSyncExternalStore!==void 0?fs.useSyncExternalStore:n_;B5.exports=L5;var r_=B5.exports;const ba={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"]},re={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){const t=navigator.userAgent.toLowerCase();return re.isMobile()&&t.includes("android")},isIos(){const t=navigator.userAgent.toLowerCase();return re.isMobile()&&(t.includes("iphone")||t.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(t){return t?t-Date.now()<=ba.TEN_SEC_MS:!0},isAllowedRetry(t){return Date.now()-t>=ba.ONE_SEC_MS},copyToClopboard(t){navigator.clipboard.writeText(t)},getPairingExpiry(){return Date.now()+ba.FOUR_MINUTES_MS},getPlainAddress(t){return t.split(":")[2]},async wait(t){return new Promise(e=>{setTimeout(e,t)})},debounce(t,e=500){let n;return(...r)=>{function i(){t(...r)}n&&clearTimeout(n),n=setTimeout(i,e)}},isHttpUrl(t){return t.startsWith("http://")||t.startsWith("https://")},formatNativeUrl(t,e){if(re.isHttpUrl(t))return this.formatUniversalUrl(t,e);let n=t;n.includes("://")||(n=t.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`);const r=encodeURIComponent(e);return{redirect:`${n}wc?uri=${r}`,href:n}},formatUniversalUrl(t,e){if(!re.isHttpUrl(t))return this.formatNativeUrl(t,e);let n=t;n.endsWith("/")||(n=`${n}/`);const r=encodeURIComponent(e);return{redirect:`${n}wc?uri=${r}`,href:n}},openHref(t,e){window.open(t,e,"noreferrer noopener")},async preloadImage(t){const e=new Promise((n,r)=>{const i=new Image;i.onload=n,i.onerror=r,i.crossOrigin="anonymous",i.src=t});return Promise.race([e,re.wait(2e3)])},formatBalance(t,e){var r;let n;if(t==="0")n="0.000";else if(typeof t=="string"){const i=Number(t);i&&(n=(r=i.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:r[0])}return n?`${n} ${e}`:"0.000"},isRestrictedRegion(){try{const{timeZone:t}=new Intl.DateTimeFormat().resolvedOptions(),e=t.toUpperCase();return ba.RESTRICTED_TIMEZONES.includes(e)}catch{return!1}},getApiUrl(){return re.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com"},getBlockchainApiUrl(){return re.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"},getAnalyticsUrl(){return re.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com"},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})}},Xe=sn({isConnected:!1}),De={state:Xe,subscribe(t){return zs(Xe,()=>t(Xe))},subscribeKey(t,e){return or(Xe,t,e)},setIsConnected(t){Xe.isConnected=t},setCaipAddress(t){Xe.caipAddress=t,Xe.address=t?re.getPlainAddress(t):void 0},setBalance(t,e){Xe.balance=t,Xe.balanceSymbol=e},setProfileName(t){Xe.profileName=t},setProfileImage(t){Xe.profileImage=t},setAddressExplorerUrl(t){Xe.addressExplorerUrl=t},resetAccount(){Xe.isConnected=!1,Xe.caipAddress=void 0,Xe.address=void 0,Xe.balance=void 0,Xe.balanceSymbol=void 0,Xe.profileName=void 0,Xe.profileImage=void 0,Xe.addressExplorerUrl=void 0}};class ug{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,...n}){const r=this.createUrl(n);return(await fetch(r,{method:"GET",headers:e})).json()}async getBlob({headers:e,...n}){const r=this.createUrl(n);return(await fetch(r,{method:"GET",headers:e})).blob()}async post({body:e,headers:n,...r}){const i=this.createUrl(r);return(await fetch(i,{method:"POST",headers:n,body:e?JSON.stringify(e):void 0})).json()}async put({body:e,headers:n,...r}){const i=this.createUrl(r);return(await fetch(i,{method:"PUT",headers:n,body:e?JSON.stringify(e):void 0})).json()}async delete({body:e,headers:n,...r}){const i=this.createUrl(r);return(await fetch(i,{method:"DELETE",headers:n,body:e?JSON.stringify(e):void 0})).json()}createUrl({path:e,params:n}){const r=new URL(e,this.baseUrl);return n&&Object.entries(n).forEach(([i,o])=>{o&&r.searchParams.append(i,o)}),r}}const p0="WALLETCONNECT_DEEPLINK_CHOICE",Uw="@w3m/recent",ii={setWalletConnectDeepLink({href:t,name:e}){try{localStorage.setItem(p0,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const t=localStorage.getItem(p0);if(t)return JSON.parse(t)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(p0)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(t){try{const e=ii.getRecentWallets();e.find(r=>r.id===t.id)||(e.unshift(t),e.length>2&&e.pop(),localStorage.setItem(Uw,JSON.stringify(e)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const t=localStorage.getItem(Uw);return t?JSON.parse(t):[]}catch{console.info("Unable to get Web3Modal recent")}return[]}},Nr=sn({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),oi={state:Nr,subscribeNetworkImages(t){return zs(Nr.networkImages,()=>t(Nr.networkImages))},subscribeKey(t,e){return or(Nr,t,e)},setWalletImage(t,e){Nr.walletImages[t]=e},setNetworkImage(t,e){Nr.networkImages[t]=e},setConnectorImage(t,e){Nr.connectorImages[t]=e},setTokenImage(t,e){Nr.tokenImages[t]=e}},sa=sn({connectors:[]}),kn={state:sa,subscribeKey(t,e){return or(sa,t,e)},setConnectors(t){sa.connectors=t.map(e=>Wc(e))},addConnector(t){sa.connectors.push(Wc(t))},getConnectors(){return sa.connectors}},aa=sn({open:!1,selectedNetworkId:void 0}),hs={state:aa,subscribe(t){return zs(aa,()=>t(aa))},set(t){Object.assign(aa,{...aa,...t})}},St=sn({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),Ue={state:St,subscribeKey(t,e){return or(St,t,e)},_getClient(){if(!St._client)throw new Error("NetworkController client not set");return St._client},setClient(t){St._client=Wc(t)},setCaipNetwork(t){St.caipNetwork=t,hs.set({selectedNetworkId:t==null?void 0:t.id})},setDefaultCaipNetwork(t){St.caipNetwork=t,hs.set({selectedNetworkId:t==null?void 0:t.id}),St.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(t){St.requestedCaipNetworks=t},async getApprovedCaipNetworksData(){const t=await this._getClient().getApprovedCaipNetworksData();St.supportsAllNetworks=t.supportsAllNetworks,St.approvedCaipNetworkIds=t.approvedCaipNetworkIds},async switchActiveNetwork(t){await this._getClient().switchCaipNetwork(t),St.caipNetwork=t},resetNetwork(){St.isDefaultCaipNetwork||(St.caipNetwork=void 0),St.approvedCaipNetworkIds=void 0,St.supportsAllNetworks=!0}},cn=sn({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),Me={state:cn,subscribeKey(t,e){return or(cn,t,e)},setProjectId(t){cn.projectId=t},setIncludeWalletIds(t){cn.includeWalletIds=t},setExcludeWalletIds(t){cn.excludeWalletIds=t},setFeaturedWalletIds(t){cn.featuredWalletIds=t},setTokens(t){cn.tokens=t},setTermsConditionsUrl(t){cn.termsConditionsUrl=t},setPrivacyPolicyUrl(t){cn.privacyPolicyUrl=t},setCustomWallets(t){cn.customWallets=t},setEnableAnalytics(t){cn.enableAnalytics=t},setSdkVersion(t){cn.sdkVersion=t}},i_=re.getApiUrl(),Wn=new ug({baseUrl:i_}),o_="40",jw="4",Tt=sn({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),me={state:Tt,subscribeKey(t,e){return or(Tt,t,e)},_getApiHeaders(){const{projectId:t,sdkType:e,sdkVersion:n}=Me.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":n}},async _fetchWalletImage(t){const e=`${Wn.baseUrl}/getWalletImage/${t}`,n=await Wn.getBlob({path:e,headers:me._getApiHeaders()});oi.setWalletImage(t,URL.createObjectURL(n))},async _fetchNetworkImage(t){const e=`${Wn.baseUrl}/public/getAssetImage/${t}`,n=await Wn.getBlob({path:e,headers:me._getApiHeaders()});oi.setNetworkImage(t,URL.createObjectURL(n))},async _fetchConnectorImage(t){const e=`${Wn.baseUrl}/public/getAssetImage/${t}`,n=await Wn.getBlob({path:e,headers:me._getApiHeaders()});oi.setConnectorImage(t,URL.createObjectURL(n))},async fetchNetworkImages(){const{requestedCaipNetworks:t}=Ue.state,e=t==null?void 0:t.map(({imageId:n})=>n).filter(Boolean);e&&await Promise.allSettled(e.map(n=>me._fetchNetworkImage(n)))},async fetchConnectorImages(){const{connectors:t}=kn.state,e=t.map(({imageId:n})=>n).filter(Boolean);await Promise.allSettled(e.map(n=>me._fetchConnectorImage(n)))},async fetchFeaturedWallets(){const{featuredWalletIds:t}=Me.state;if(t!=null&&t.length){const{data:e}=await Wn.get({path:"/getWallets",headers:me._getApiHeaders(),params:{page:"1",entries:t!=null&&t.length?String(t.length):jw,include:t==null?void 0:t.join(",")}});e.sort((r,i)=>t.indexOf(r.id)-t.indexOf(i.id));const n=e.map(r=>r.image_id).filter(Boolean);await Promise.allSettled(n.map(r=>me._fetchWalletImage(r))),Tt.featured=e}},async fetchRecommendedWallets(){const{includeWalletIds:t,excludeWalletIds:e,featuredWalletIds:n}=Me.state,r=[...e??[],...n??[]].filter(Boolean),{data:i,count:o}=await Wn.get({path:"/getWallets",headers:me._getApiHeaders(),params:{page:"1",entries:jw,include:t==null?void 0:t.join(","),exclude:r==null?void 0:r.join(",")}}),s=ii.getRecentWallets(),a=i.map(u=>u.image_id).filter(Boolean),l=s.map(u=>u.image_id).filter(Boolean);await Promise.allSettled([...a,...l].map(u=>me._fetchWalletImage(u))),Tt.recommended=i,Tt.count=o??0},async fetchWallets({page:t}){const{includeWalletIds:e,excludeWalletIds:n,featuredWalletIds:r}=Me.state,i=[...Tt.recommended.map(({id:l})=>l),...n??[],...r??[]].filter(Boolean),{data:o,count:s}=await Wn.get({path:"/getWallets",headers:me._getApiHeaders(),params:{page:String(t),entries:o_,include:e==null?void 0:e.join(","),exclude:i.join(",")}}),a=o.map(l=>l.image_id).filter(Boolean);await Promise.allSettled([...a.map(l=>me._fetchWalletImage(l)),re.wait(300)]),Tt.wallets=[...Tt.wallets,...o],Tt.count=s>Tt.count?s:Tt.count,Tt.page=t},async searchWallet({search:t}){const{includeWalletIds:e,excludeWalletIds:n}=Me.state;Tt.search=[];const{data:r}=await Wn.get({path:"/getWallets",headers:me._getApiHeaders(),params:{page:"1",entries:"100",search:t,include:e==null?void 0:e.join(","),exclude:n==null?void 0:n.join(",")}}),i=r.map(o=>o.image_id).filter(Boolean);await Promise.allSettled([...i.map(o=>me._fetchWalletImage(o)),re.wait(300)]),Tt.search=r},prefetch(){Tt.prefetchPromise=Promise.race([Promise.allSettled([me.fetchFeaturedWallets(),me.fetchRecommendedWallets(),me.fetchNetworkImages(),me.fetchConnectorImages()]),re.wait(3e3)])}},s_=re.getAnalyticsUrl(),a_=new ug({baseUrl:s_}),l_=["MODAL_CREATED"],_o=sn({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),Ie={state:_o,subscribe(t){return zs(_o,()=>t(_o))},_getApiHeaders(){const{projectId:t,sdkType:e,sdkVersion:n}=Me.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":n}},async _sendAnalyticsEvent(t){try{if(l_.includes(t.data.event)||typeof window>"u")return;await a_.post({path:"/e",headers:Ie._getApiHeaders(),body:{eventId:re.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:t.timestamp,props:t.data}})}catch{}},sendEvent(t){_o.timestamp=Date.now(),_o.data=t,Me.state.enableAnalytics&&Ie._sendAnalyticsEvent(_o)}},mt=sn({view:"Connect",history:["Connect"]}),he={state:mt,subscribeKey(t,e){return or(mt,t,e)},push(t,e){t!==mt.view&&(mt.view=t,mt.history.push(t),mt.data=e)},reset(t){mt.view=t,mt.history=[t]},replace(t){mt.history.length>1&&mt.history.at(-1)!==t&&(mt.view=t,mt.history[mt.history.length-1]=t)},goBack(){if(mt.history.length>1){mt.history.pop();const[t]=mt.history.slice(-1);t&&(mt.view=t)}}},Lu=sn({open:!1}),pt={state:Lu,subscribeKey(t,e){return or(Lu,t,e)},async open(t){await me.state.prefetchPromise,t!=null&&t.view?he.reset(t.view):De.state.isConnected?he.reset("Account"):he.reset("Connect"),Lu.open=!0,hs.set({open:!0}),Ie.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){Lu.open=!1,hs.set({open:!1}),Ie.sendEvent({type:"track",event:"MODAL_CLOSE"})}},ut=sn({wcError:!1,buffering:!1}),xe={state:ut,subscribeKey(t,e){return or(ut,t,e)},_getClient(){if(!ut._client)throw new Error("ConnectionController client not set");return ut._client},setClient(t){ut._client=Wc(t)},connectWalletConnect(){ut.wcPromise=this._getClient().connectWalletConnect(t=>{ut.wcUri=t,ut.wcPairingExpiry=re.getPairingExpiry()})},async connectExternal(t){var e,n;await((n=(e=this._getClient()).connectExternal)==null?void 0:n.call(e,t))},checkInstalled(t){var e,n;return(n=(e=this._getClient()).checkInstalled)==null?void 0:n.call(e,t)},resetWcConnection(){ut.wcUri=void 0,ut.wcPairingExpiry=void 0,ut.wcPromise=void 0,ut.wcLinking=void 0,ut.recentWallet=void 0,ii.deleteWalletConnectDeepLink()},setWcLinking(t){ut.wcLinking=t},setWcError(t){ut.wcError=t,ut.buffering=!1},setRecentWallet(t){ut.recentWallet=t},setBuffering(t){ut.buffering=t},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},ur=sn({message:"",variant:"success",open:!1}),On={state:ur,subscribeKey(t,e){return or(ur,t,e)},showSuccess(t){ur.message=t,ur.variant="success",ur.open=!0},showError(t){ur.message=t,ur.variant="error",ur.open=!0},hide(){ur.open=!1}},So=sn({themeMode:"dark",themeVariables:{}}),hn={state:So,subscribe(t){return zs(So,()=>t(So))},setThemeMode(t){So.themeMode=t},setThemeVariables(t){So.themeVariables={...So.themeVariables,...t}}},u_=re.getBlockchainApiUrl(),c_=new ug({baseUrl:u_}),d_={fetchIdentity({caipChainId:t,address:e}){return c_.get({path:`/v1/identity/${e}`,params:{chainId:t,projectId:Me.state.projectId}})}},ft={getWalletImage(t){if(t!=null&&t.image_url)return t==null?void 0:t.image_url;if(t!=null&&t.image_id)return oi.state.walletImages[t.image_id]},getNetworkImage(t){if(t!=null&&t.imageUrl)return t==null?void 0:t.imageUrl;if(t!=null&&t.imageId)return oi.state.networkImages[t.imageId]},getConnectorImage(t){if(t!=null&&t.imageUrl)return t.imageUrl;if(t!=null&&t.imageId)return oi.state.connectorImages[t.imageId]}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sc=globalThis,cg=sc.ShadowRoot&&(sc.ShadyCSS===void 0||sc.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,U5=Symbol(),Fw=new WeakMap;let f_=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==U5)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(cg&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=Fw.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Fw.set(n,e))}return e}toString(){return this.cssText}};const h_=t=>new f_(typeof t=="string"?t:t+"",void 0,U5),p_=(t,e)=>{if(cg)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const r=document.createElement("style"),i=sc.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)}},zw=cg?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return h_(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:g_,defineProperty:m_,getOwnPropertyDescriptor:w_,getOwnPropertyNames:v_,getOwnPropertySymbols:y_,getPrototypeOf:b_}=Object,si=globalThis,Ww=si.trustedTypes,x_=Ww?Ww.emptyScript:"",g0=si.reactiveElementPolyfillSupport,Na=(t,e)=>t,Hc={toAttribute(t,e){switch(e){case Boolean:t=t?x_:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},dg=(t,e)=>!g_(t,e),Hw={attribute:!0,type:String,converter:Hc,reflect:!1,hasChanged:dg};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),si.litPropertyMetadata??(si.litPropertyMetadata=new WeakMap);let la=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=Hw){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(e,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,n);i!==void 0&&m_(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){const{get:i,set:o}=w_(this.prototype,e)??{get(){return this[n]},set(s){this[n]=s}};return{get(){return i==null?void 0:i.call(this)},set(s){const a=i==null?void 0:i.call(this);o.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Hw}static _$Ei(){if(this.hasOwnProperty(Na("elementProperties")))return;const e=b_(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Na("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Na("properties"))){const n=this.properties,r=[...v_(n),...y_(n)];for(const i of r)this.createProperty(i,n[i])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)n.unshift(zw(i))}else e!==void 0&&n.push(zw(e));return n}static _$Eu(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(n=>n(this))}addController(e){var n;(this._$ES??(this._$ES=[])).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var n;(n=this._$ES)==null||n.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){const e=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return p_(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)==null||e.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)==null||e.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n){var o;const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const s=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:Hc).toAttribute(n,r.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,n){var o;const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:Hc;this._$Em=i,this[i]=a.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(e,n,r,i=!1,o){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??dg)(i?o:this[e],n))return;this.C(e,n,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,n,r){this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],s)}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(r=this._$ES)==null||r.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(n)):this._$ET()}catch(i){throw e=!1,this._$ET(),i}e&&this._$AE(n)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)==null||n.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EO(n,this[n]))),this._$ET()}updated(e){}firstUpdated(e){}};la.elementStyles=[],la.shadowRootOptions={mode:"open"},la[Na("elementProperties")]=new Map,la[Na("finalized")]=new Map,g0==null||g0({ReactiveElement:la}),(si.reactiveElementVersions??(si.reactiveElementVersions=[])).push("2.0.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ra=globalThis,Vc=Ra.trustedTypes,Vw=Vc?Vc.createPolicy("lit-html",{createHTML:t=>t}):void 0,j5="$lit$",Wr=`lit$${(Math.random()+"").slice(9)}$`,F5="?"+Wr,C_=`<${F5}>`,ao=document,qc=()=>ao.createComment(""),_l=t=>t===null||typeof t!="object"&&typeof t!="function",z5=Array.isArray,E_=t=>z5(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",m0=`[ 	
\f\r]`,ua=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qw=/-->/g,Gw=/>/g,Ii=RegExp(`>|${m0}(?:([^\\s"'>=/]+)(${m0}*=${m0}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Kw=/'/g,Zw=/"/g,W5=/^(?:script|style|textarea|title)$/i,ps=Symbol.for("lit-noChange"),Qe=Symbol.for("lit-nothing"),Qw=new WeakMap,Hi=ao.createTreeWalker(ao,129);function H5(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Vw!==void 0?Vw.createHTML(e):e}const __=(t,e)=>{const n=t.length-1,r=[];let i,o=e===2?"<svg>":"",s=ua;for(let a=0;a<n;a++){const l=t[a];let u,c,f=-1,p=0;for(;p<l.length&&(s.lastIndex=p,c=s.exec(l),c!==null);)p=s.lastIndex,s===ua?c[1]==="!--"?s=qw:c[1]!==void 0?s=Gw:c[2]!==void 0?(W5.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=Ii):c[3]!==void 0&&(s=Ii):s===Ii?c[0]===">"?(s=i??ua,f=-1):c[1]===void 0?f=-2:(f=s.lastIndex-c[2].length,u=c[1],s=c[3]===void 0?Ii:c[3]==='"'?Zw:Kw):s===Zw||s===Kw?s=Ii:s===qw||s===Gw?s=ua:(s=Ii,i=void 0);const w=s===Ii&&t[a+1].startsWith("/>")?" ":"";o+=s===ua?l+C_:f>=0?(r.push(u),l.slice(0,f)+j5+l.slice(f)+Wr+w):l+Wr+(f===-2?a:w)}return[H5(t,o+(t[n]||"<?>")+(e===2?"</svg>":"")),r]};let r1=class V5{constructor({strings:e,_$litType$:n},r){let i;this.parts=[];let o=0,s=0;const a=e.length-1,l=this.parts,[u,c]=__(e,n);if(this.el=V5.createElement(u,r),Hi.currentNode=this.el.content,n===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=Hi.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const f of i.getAttributeNames())if(f.endsWith(j5)){const p=c[s++],w=i.getAttribute(f).split(Wr),v=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:v[2],strings:w,ctor:v[1]==="."?$_:v[1]==="?"?P_:v[1]==="@"?A_:ef}),i.removeAttribute(f)}else f.startsWith(Wr)&&(l.push({type:6,index:o}),i.removeAttribute(f));if(W5.test(i.tagName)){const f=i.textContent.split(Wr),p=f.length-1;if(p>0){i.textContent=Vc?Vc.emptyScript:"";for(let w=0;w<p;w++)i.append(f[w],qc()),Hi.nextNode(),l.push({type:2,index:++o});i.append(f[p],qc())}}}else if(i.nodeType===8)if(i.data===F5)l.push({type:2,index:o});else{let f=-1;for(;(f=i.data.indexOf(Wr,f+1))!==-1;)l.push({type:7,index:o}),f+=Wr.length-1}o++}}static createElement(e,n){const r=ao.createElement("template");return r.innerHTML=e,r}};function gs(t,e,n=t,r){var s,a;if(e===ps)return e;let i=r!==void 0?(s=n._$Co)==null?void 0:s[r]:n._$Cl;const o=_l(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),o===void 0?i=void 0:(i=new o(t),i._$AT(t,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=i:n._$Cl=i),i!==void 0&&(e=gs(t,i._$AS(t,e.values),i,r)),e}let S_=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:r}=this._$AD,i=((e==null?void 0:e.creationScope)??ao).importNode(n,!0);Hi.currentNode=i;let o=Hi.nextNode(),s=0,a=0,l=r[0];for(;l!==void 0;){if(s===l.index){let u;l.type===2?u=new q5(o,o.nextSibling,this,e):l.type===1?u=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(u=new D_(o,this,e)),this._$AV.push(u),l=r[++a]}s!==(l==null?void 0:l.index)&&(o=Hi.nextNode(),s++)}return Hi.currentNode=ao,i}p(e){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},q5=class G5{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,n,r,i){this.type=2,this._$AH=Qe,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=gs(this,e,n),_l(e)?e===Qe||e==null||e===""?(this._$AH!==Qe&&this._$AR(),this._$AH=Qe):e!==this._$AH&&e!==ps&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):E_(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Qe&&_l(this._$AH)?this._$AA.nextSibling.data=e:this.$(ao.createTextNode(e)),this._$AH=e}g(e){var o;const{values:n,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=r1.createElement(H5(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(n);else{const s=new S_(i,this),a=s.u(this.options);s.p(n),this.$(a),this._$AH=s}}_$AC(e){let n=Qw.get(e.strings);return n===void 0&&Qw.set(e.strings,n=new r1(e)),n}T(e){z5(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const o of e)i===n.length?n.push(r=new G5(this.k(qc()),this.k(qc()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cv=e,(n=this._$AP)==null||n.call(this,e))}},ef=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,r,i,o){this.type=1,this._$AH=Qe,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Qe}_$AI(e,n=this,r,i){const o=this.strings;let s=!1;if(o===void 0)e=gs(this,e,n,0),s=!_l(e)||e!==this._$AH&&e!==ps,s&&(this._$AH=e);else{const a=e;let l,u;for(e=o[0],l=0;l<o.length-1;l++)u=gs(this,a[r+l],n,l),u===ps&&(u=this._$AH[l]),s||(s=!_l(u)||u!==this._$AH[l]),u===Qe?e=Qe:e!==Qe&&(e+=(u??"")+o[l+1]),this._$AH[l]=u}s&&!i&&this.j(e)}j(e){e===Qe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},$_=class extends ef{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Qe?void 0:e}},P_=class extends ef{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Qe)}},A_=class extends ef{constructor(e,n,r,i,o){super(e,n,r,i,o),this.type=5}_$AI(e,n=this){if((e=gs(this,e,n,0)??Qe)===ps)return;const r=this._$AH,i=e===Qe&&r!==Qe||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==Qe&&(r===Qe||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,e):this._$AH.handleEvent(e)}},D_=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){gs(this,e)}};const w0=Ra.litHtmlPolyfillSupport;w0==null||w0(r1,q5),(Ra.litHtmlVersions??(Ra.litHtmlVersions=[])).push("3.0.0");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ac=globalThis,fg=ac.ShadowRoot&&(ac.ShadyCSS===void 0||ac.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,hg=Symbol(),Yw=new WeakMap;let K5=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==hg)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(fg&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=Yw.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Yw.set(n,e))}return e}toString(){return this.cssText}};const Vn=t=>new K5(typeof t=="string"?t:t+"",void 0,hg),Q=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,i,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new K5(n,t,hg)},T_=(t,e)=>{if(fg)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const r=document.createElement("style"),i=ac.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)}},Xw=fg?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return Vn(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:k_,defineProperty:O_,getOwnPropertyDescriptor:I_,getOwnPropertyNames:N_,getOwnPropertySymbols:R_,getPrototypeOf:M_}=Object,ai=globalThis,Jw=ai.trustedTypes,B_=Jw?Jw.emptyScript:"",v0=ai.reactiveElementPolyfillSupport,Ma=(t,e)=>t,i1={toAttribute(t,e){switch(e){case Boolean:t=t?B_:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Z5=(t,e)=>!k_(t,e),e2={attribute:!0,type:String,converter:i1,reflect:!1,hasChanged:Z5};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ai.litPropertyMetadata??(ai.litPropertyMetadata=new WeakMap);let Do=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=e2){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(e,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,n);i!==void 0&&O_(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){const{get:i,set:o}=I_(this.prototype,e)??{get(){return this[n]},set(s){this[n]=s}};return{get(){return i==null?void 0:i.call(this)},set(s){const a=i==null?void 0:i.call(this);o.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??e2}static _$Ei(){if(this.hasOwnProperty(Ma("elementProperties")))return;const e=M_(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ma("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ma("properties"))){const n=this.properties,r=[...N_(n),...R_(n)];for(const i of r)this.createProperty(i,n[i])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)n.unshift(Xw(i))}else e!==void 0&&n.push(Xw(e));return n}static _$Eu(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(n=>n(this))}addController(e){var n;(this._$ES??(this._$ES=[])).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var n;(n=this._$ES)==null||n.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){const e=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return T_(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)==null||e.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)==null||e.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n){var o;const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const s=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:i1).toAttribute(n,r.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,n){var o;const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:i1;this._$Em=i,this[i]=a.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(e,n,r,i=!1,o){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??Z5)(i?o:this[e],n))return;this.C(e,n,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,n,r){this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],s)}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(r=this._$ES)==null||r.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(n)):this._$ET()}catch(i){throw e=!1,this._$ET(),i}e&&this._$AE(n)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)==null||n.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EO(n,this[n]))),this._$ET()}updated(e){}firstUpdated(e){}};Do.elementStyles=[],Do.shadowRootOptions={mode:"open"},Do[Ma("elementProperties")]=new Map,Do[Ma("finalized")]=new Map,v0==null||v0({ReactiveElement:Do}),(ai.reactiveElementVersions??(ai.reactiveElementVersions=[])).push("2.0.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ba=globalThis,Gc=Ba.trustedTypes,t2=Gc?Gc.createPolicy("lit-html",{createHTML:t=>t}):void 0,Q5="$lit$",Hr=`lit$${(Math.random()+"").slice(9)}$`,Y5="?"+Hr,L_=`<${Y5}>`,lo=document,Sl=()=>lo.createComment(""),$l=t=>t===null||typeof t!="object"&&typeof t!="function",X5=Array.isArray,U_=t=>X5(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",y0=`[ 	
\f\r]`,ca=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,n2=/-->/g,r2=/>/g,Ni=RegExp(`>|${y0}(?:([^\\s"'>=/]+)(${y0}*=${y0}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),i2=/'/g,o2=/"/g,J5=/^(?:script|style|textarea|title)$/i,eb=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),T=eb(1),H=eb(2),ms=Symbol.for("lit-noChange"),ht=Symbol.for("lit-nothing"),s2=new WeakMap,Vi=lo.createTreeWalker(lo,129);function tb(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return t2!==void 0?t2.createHTML(e):e}const j_=(t,e)=>{const n=t.length-1,r=[];let i,o=e===2?"<svg>":"",s=ca;for(let a=0;a<n;a++){const l=t[a];let u,c,f=-1,p=0;for(;p<l.length&&(s.lastIndex=p,c=s.exec(l),c!==null);)p=s.lastIndex,s===ca?c[1]==="!--"?s=n2:c[1]!==void 0?s=r2:c[2]!==void 0?(J5.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=Ni):c[3]!==void 0&&(s=Ni):s===Ni?c[0]===">"?(s=i??ca,f=-1):c[1]===void 0?f=-2:(f=s.lastIndex-c[2].length,u=c[1],s=c[3]===void 0?Ni:c[3]==='"'?o2:i2):s===o2||s===i2?s=Ni:s===n2||s===r2?s=ca:(s=Ni,i=void 0);const w=s===Ni&&t[a+1].startsWith("/>")?" ":"";o+=s===ca?l+L_:f>=0?(r.push(u),l.slice(0,f)+Q5+l.slice(f)+Hr+w):l+Hr+(f===-2?a:w)}return[tb(t,o+(t[n]||"<?>")+(e===2?"</svg>":"")),r]};let o1=class nb{constructor({strings:e,_$litType$:n},r){let i;this.parts=[];let o=0,s=0;const a=e.length-1,l=this.parts,[u,c]=j_(e,n);if(this.el=nb.createElement(u,r),Vi.currentNode=this.el.content,n===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=Vi.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const f of i.getAttributeNames())if(f.endsWith(Q5)){const p=c[s++],w=i.getAttribute(f).split(Hr),v=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:v[2],strings:w,ctor:v[1]==="."?z_:v[1]==="?"?W_:v[1]==="@"?H_:tf}),i.removeAttribute(f)}else f.startsWith(Hr)&&(l.push({type:6,index:o}),i.removeAttribute(f));if(J5.test(i.tagName)){const f=i.textContent.split(Hr),p=f.length-1;if(p>0){i.textContent=Gc?Gc.emptyScript:"";for(let w=0;w<p;w++)i.append(f[w],Sl()),Vi.nextNode(),l.push({type:2,index:++o});i.append(f[p],Sl())}}}else if(i.nodeType===8)if(i.data===Y5)l.push({type:2,index:o});else{let f=-1;for(;(f=i.data.indexOf(Hr,f+1))!==-1;)l.push({type:7,index:o}),f+=Hr.length-1}o++}}static createElement(e,n){const r=lo.createElement("template");return r.innerHTML=e,r}};function ws(t,e,n=t,r){var s,a;if(e===ms)return e;let i=r!==void 0?(s=n._$Co)==null?void 0:s[r]:n._$Cl;const o=$l(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),o===void 0?i=void 0:(i=new o(t),i._$AT(t,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=i:n._$Cl=i),i!==void 0&&(e=ws(t,i._$AS(t,e.values),i,r)),e}let F_=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:r}=this._$AD,i=((e==null?void 0:e.creationScope)??lo).importNode(n,!0);Vi.currentNode=i;let o=Vi.nextNode(),s=0,a=0,l=r[0];for(;l!==void 0;){if(s===l.index){let u;l.type===2?u=new pg(o,o.nextSibling,this,e):l.type===1?u=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(u=new V_(o,this,e)),this._$AV.push(u),l=r[++a]}s!==(l==null?void 0:l.index)&&(o=Vi.nextNode(),s++)}return Vi.currentNode=lo,i}p(e){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},pg=class rb{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,n,r,i){this.type=2,this._$AH=ht,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=ws(this,e,n),$l(e)?e===ht||e==null||e===""?(this._$AH!==ht&&this._$AR(),this._$AH=ht):e!==this._$AH&&e!==ms&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):U_(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==ht&&$l(this._$AH)?this._$AA.nextSibling.data=e:this.$(lo.createTextNode(e)),this._$AH=e}g(e){var o;const{values:n,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=o1.createElement(tb(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(n);else{const s=new F_(i,this),a=s.u(this.options);s.p(n),this.$(a),this._$AH=s}}_$AC(e){let n=s2.get(e.strings);return n===void 0&&s2.set(e.strings,n=new o1(e)),n}T(e){X5(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const o of e)i===n.length?n.push(r=new rb(this.k(Sl()),this.k(Sl()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cv=e,(n=this._$AP)==null||n.call(this,e))}},tf=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,r,i,o){this.type=1,this._$AH=ht,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ht}_$AI(e,n=this,r,i){const o=this.strings;let s=!1;if(o===void 0)e=ws(this,e,n,0),s=!$l(e)||e!==this._$AH&&e!==ms,s&&(this._$AH=e);else{const a=e;let l,u;for(e=o[0],l=0;l<o.length-1;l++)u=ws(this,a[r+l],n,l),u===ms&&(u=this._$AH[l]),s||(s=!$l(u)||u!==this._$AH[l]),u===ht?e=ht:e!==ht&&(e+=(u??"")+o[l+1]),this._$AH[l]=u}s&&!i&&this.j(e)}j(e){e===ht?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class z_ extends tf{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ht?void 0:e}}let W_=class extends tf{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ht)}};class H_ extends tf{constructor(e,n,r,i,o){super(e,n,r,i,o),this.type=5}_$AI(e,n=this){if((e=ws(this,e,n,0)??ht)===ms)return;const r=this._$AH,i=e===ht&&r!==ht||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==ht&&(r===ht||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,e):this._$AH.handleEvent(e)}}let V_=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ws(this,e)}};const b0=Ba.litHtmlPolyfillSupport;b0==null||b0(o1,pg),(Ba.litHtmlVersions??(Ba.litHtmlVersions=[])).push("3.0.0");const q_=(t,e,n)=>{const r=(n==null?void 0:n.renderBefore)??e;let i=r._$litPart$;if(i===void 0){const o=(n==null?void 0:n.renderBefore)??null;r._$litPart$=i=new pg(e.insertBefore(Sl(),o),o,void 0,n??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let F=class extends Do{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const e=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=e.firstChild),e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=q_(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ms}};var w3;F._$litElement$=!0,F.finalized=!0,(w3=globalThis.litElementHydrateSupport)==null||w3.call(globalThis,{LitElement:F});const x0=globalThis.litElementPolyfillSupport;x0==null||x0({LitElement:F});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.0");let La,li,ui;function G_(t,e){La=document.createElement("style"),li=document.createElement("style"),ui=document.createElement("style"),La.textContent=es(t).core.cssText,li.textContent=es(t).dark.cssText,ui.textContent=es(t).light.cssText,document.head.appendChild(La),document.head.appendChild(li),document.head.appendChild(ui),ib(e)}function ib(t){li&&ui&&(t==="light"?(li.removeAttribute("media"),ui.media="enabled"):(ui.removeAttribute("media"),li.media="enabled"))}function K_(t){La&&li&&ui&&(La.textContent=es(t).core.cssText,li.textContent=es(t).dark.cssText,ui.textContent=es(t).light.cssText)}function es(t){return{core:Q`
      :root {
        --w3m-color-mix-strength: ${Vn(t!=null&&t["--w3m-color-mix-strength"]?`${t["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${Vn((t==null?void 0:t["--w3m-font-family"])||"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif")};
        --w3m-font-size-master: ${Vn((t==null?void 0:t["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${Vn((t==null?void 0:t["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${Vn((t==null?void 0:t["--w3m-z-index"])||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-3xl: 40px;

        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(0, 0, 0, 0.3);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-015: var(--wui-color-accent-base-015);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );
        }
      }
    `,light:Q`
      :root {
        --w3m-color-mix: ${Vn((t==null?void 0:t["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${Vn((t==null?void 0:t["--w3m-accent"])||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:Q`
      :root {
        --w3m-color-mix: ${Vn((t==null?void 0:t["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${Vn((t==null?void 0:t["--w3m-accent"])||"#3396ff")};
        --w3m-default: #000;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}const se=Q`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,nt=Q`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,gg=Q`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function Z_(t,e){const{kind:n,elements:r}=e;return{kind:n,elements:r,finisher(i){customElements.get(t)||customElements.define(t,i)}}}function Q_(t,e){return customElements.get(t)||customElements.define(t,e),e}function j(t){return function(n){return typeof n=="function"?Q_(t,n):Z_(t,n)}}const Y_=Q`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-125);
    overflow: hidden;
  }
`;var X_=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let s1=class extends F{render(){return T`<slot></slot>`}};s1.styles=[se,Y_];s1=X_([j("wui-card")],s1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J_={attribute:!0,type:String,converter:Hc,reflect:!1,hasChanged:dg},eS=(t=J_,e,n)=>{const{kind:r,metadata:i}=n;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(n.name,t),r==="accessor"){const{name:s}=n;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,l,t)},init(a){return a!==void 0&&this.C(s,void 0,t),a}}}if(r==="setter"){const{name:s}=n;return function(a){const l=this[s];e.call(this,a),this.requestUpdate(s,l,t)}}throw Error("Unsupported decorator location: "+r)};function O(t){return(e,n)=>typeof n=="object"?eS(t,e,n):((r,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(i,o):void 0})(t,e,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function oe(t){return O({...t,state:!0,attribute:!1})}const tS=Q`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,nS=H`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,rS=H`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,iS=H`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,oS=H`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,sS=H`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,aS=H`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,lS=H`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,uS=H`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,cS=H`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,dS=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,fS=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,hS=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,pS=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,gS=H`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,mS=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,wS=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,vS=H`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,yS=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,bS=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,xS=H` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,CS=H`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,ES=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,_S=H`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,SS=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,$S=H`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,PS=H`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,AS=H`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,DS=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,TS=H`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,kS=H`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,OS=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,IS=H`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,NS=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,RS=H`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,MS=H`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,BS=H`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,LS=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,US=H` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,jS=H`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,FS=H`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,zS=H`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,WS=H`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,HS=H`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,VS=H`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,qS=H`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,GS=H`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,KS=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,ZS=H`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,QS=H`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,YS=H`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,XS=H`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;var nf=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const JS={allWallets:nS,appStore:rS,chromeStore:gS,apple:iS,arrowBottom:oS,arrowLeft:sS,arrowRight:aS,arrowTop:lS,browser:uS,checkmark:cS,chevronBottom:dS,chevronLeft:fS,chevronRight:hS,chevronTop:pS,clock:mS,close:wS,compass:yS,coinPlaceholder:vS,copy:bS,cursor:xS,desktop:CS,disconnect:ES,discord:_S,etherscan:SS,extension:$S,externalLink:PS,facebook:AS,filters:DS,github:TS,google:kS,helpCircle:OS,infoCircle:IS,mail:NS,mobile:RS,networkPlaceholder:MS,nftPlaceholder:BS,off:LS,playStore:US,qrCode:jS,refresh:FS,search:zS,swapHorizontal:WS,swapVertical:HS,telegram:VS,twitch:qS,twitter:GS,twitterIcon:KS,wallet:QS,walletConnect:YS,walletPlaceholder:ZS,warningCircle:XS};let vs=class extends F{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,T`${JS[this.name]}`}};vs.styles=[se,gg,tS];nf([O()],vs.prototype,"size",void 0);nf([O()],vs.prototype,"name",void 0);nf([O()],vs.prototype,"color",void 0);vs=nf([j("wui-icon")],vs);const e$=Q`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var mg=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Pl=class extends F{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return T`<img src=${this.src} alt=${this.alt} />`}};Pl.styles=[se,gg,e$];mg([O()],Pl.prototype,"src",void 0);mg([O()],Pl.prototype,"alt",void 0);Pl=mg([j("wui-image")],Pl);const t$=Q`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var n$=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let a1=class extends F{render(){return T`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};a1.styles=[se,t$];a1=n$([j("wui-loading-hexagon")],a1);const r$=Q`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 14px;
    height: 14px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var wg=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Al=class extends F{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,T`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};Al.styles=[se,r$];wg([O()],Al.prototype,"color",void 0);wg([O()],Al.prototype,"size",void 0);Al=wg([j("wui-loading-spinner")],Al);const i$=Q`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var ob=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Kc=class extends F{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,r=36-e,i=116+r,o=245+r,s=360+r*1.75;return T`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${i} ${o}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};Kc.styles=[se,i$];ob([O({type:Number})],Kc.prototype,"radius",void 0);Kc=ob([j("wui-loading-thumbnail")],Kc);const o$=Q`
  :host {
    display: block;
    outline: 1px solid var(--wui-gray-glass-005);
    background: linear-gradient(
      90deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 2.5s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var rf=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ys=class extends F{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,T`<slot></slot>`}};ys.styles=[o$];rf([O()],ys.prototype,"width",void 0);rf([O()],ys.prototype,"height",void 0);rf([O()],ys.prototype,"borderRadius",void 0);ys=rf([j("wui-shimmer")],ys);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sb={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ab=t=>(...e)=>({_$litDirective$:t,values:e});let lb=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s$=ab(class extends lb{constructor(t){var e;if(super(t),t.type!==sb.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,i;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((r=this.st)!=null&&r.has(o))&&this.it.add(o);return this.render(e)}const n=t.element.classList;for(const o of this.it)o in e||(n.remove(o),this.it.delete(o));for(const o in e){const s=!!e[o];s===this.it.has(o)||(i=this.st)!=null&&i.has(o)||(s?(n.add(o),this.it.add(o)):(n.remove(o),this.it.delete(o)))}return ps}}),a$=Q`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var of=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let bs=class extends F{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,T`<slot class=${s$(e)}></slot>`}};bs.styles=[se,a$];of([O()],bs.prototype,"variant",void 0);of([O()],bs.prototype,"color",void 0);of([O()],bs.prototype,"align",void 0);bs=of([j("wui-text")],bs);const l$=H`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,u$=H`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,c$=H`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,d$=H`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,f$=H`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,h$=H`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,p$=H`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,g$=H`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,m$=H`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,w$=H`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,v$=H`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,y$=H`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,b$=H`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,x$=Q`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`;var ub=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const C$={browser:l$,dao:u$,defi:c$,defiAlt:d$,eth:f$,layers:h$,lock:p$,login:g$,network:m$,nft:w$,noun:v$,profile:y$,system:b$};let Zc=class extends F{constructor(){super(...arguments),this.name="browser"}render(){return T`${C$[this.name]}`}};Zc.styles=[se,x$];ub([O()],Zc.prototype,"name",void 0);Zc=ub([j("wui-visual")],Zc);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=t=>t??Qe,ke={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){return new URL(t).hostname},getTruncateString({string:t,charsStart:e,charsEnd:n,truncate:r}){return t.length<=e+n?t:r==="end"?`${t.substring(0,e)}...`:r==="start"?`...${t.substring(t.length-n)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(n))}`},generateAvatarColors(t){const n=t.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(n),i=[];for(let o=0;o<5;o+=1){const s=this.tintColor(r,.15*o);i.push(`rgb(${s[0]}, ${s[1]}, ${s[2]})`)}return`
    --local-color-1: ${i[0]};
    --local-color-2: ${i[1]};
    --local-color-3: ${i[2]};
    --local-color-4: ${i[3]};
    --local-color-5: ${i[4]};
   `},hexToRgb(t){const e=parseInt(t,16),n=e>>16&255,r=e>>8&255,i=e&255;return[n,r,i]},tintColor(t,e){const[n,r,i]=t,o=Math.round(n+(255-n)*e),s=Math.round(r+(255-r)*e),a=Math.round(i+(255-i)*e);return[o,s,a]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){return t||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")}},E$=Q`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var an=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Mt=class extends F{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&ke.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&ke.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&ke.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&ke.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&ke.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&ke.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&ke.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&ke.getSpacingStyles(this.margin,3)};
    `,T`<slot></slot>`}};Mt.styles=[se,E$];an([O()],Mt.prototype,"flexDirection",void 0);an([O()],Mt.prototype,"flexWrap",void 0);an([O()],Mt.prototype,"flexBasis",void 0);an([O()],Mt.prototype,"flexGrow",void 0);an([O()],Mt.prototype,"flexShrink",void 0);an([O()],Mt.prototype,"alignItems",void 0);an([O()],Mt.prototype,"justifyContent",void 0);an([O()],Mt.prototype,"columnGap",void 0);an([O()],Mt.prototype,"rowGap",void 0);an([O()],Mt.prototype,"gap",void 0);an([O()],Mt.prototype,"padding",void 0);an([O()],Mt.prototype,"margin",void 0);Mt=an([j("wui-flex")],Mt);const _$=Q`
  :host {
    display: block;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var sf=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let xs=class extends F{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return T`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",T`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=ke.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};xs.styles=[se,_$];sf([O()],xs.prototype,"imageSrc",void 0);sf([O()],xs.prototype,"alt",void 0);sf([O()],xs.prototype,"address",void 0);xs=sf([j("wui-avatar")],xs);const S$=Q`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var $i=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let tr=class extends F{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let e="xxs";switch(this.size){case"lg":e="lg";break;case"md":e="md";break;case"mdl":e="mdl";break;case"sm":e="xs";break;default:e="xxs"}const n=this.size==="lg",r=n?"12%":"16%",i=n?"xxs":"3xl",o=this.background==="opaque",s=this.backgroundColor==="accent-100"&&o||this.backgroundColor==="success-100"&&o||this.backgroundColor==="error-100"&&o||this.backgroundColor==="inverse-100"&&o;return this.style.cssText=`
       --local-bg-value: ${s?`var(--wui-icon-box-bg-${this.backgroundColor})`:`var(--wui-color-${this.backgroundColor})`};
       --local-bg-mix: ${s?"100%":r};
       --local-border-radius: var(--wui-border-radius-${i});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,T` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};tr.styles=[se,nt,S$];$i([O()],tr.prototype,"size",void 0);$i([O()],tr.prototype,"backgroundColor",void 0);$i([O()],tr.prototype,"iconColor",void 0);$i([O()],tr.prototype,"background",void 0);$i([O({type:Boolean})],tr.prototype,"border",void 0);$i([O()],tr.prototype,"borderColor",void 0);$i([O()],tr.prototype,"icon",void 0);tr=$i([j("wui-icon-box")],tr);const $$=Q`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  wui-flex.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    outline: 2px solid var(--wui-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var vo=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let _r=class extends F{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address=""}render(){return T`
      <button ?disabled=${this.disabled}>
        ${this.balanceTemplate()}
        <wui-flex
          gap="xxs"
          alignItems="center"
          class=${fe(this.balance?void 0:"local-no-balance")}
        >
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${ke.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:6,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){const e=this.networkSrc?T`<wui-image src=${this.networkSrc}></wui-image>`:T`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return T`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};_r.styles=[se,nt,$$];vo([O()],_r.prototype,"networkSrc",void 0);vo([O()],_r.prototype,"avatarSrc",void 0);vo([O()],_r.prototype,"balance",void 0);vo([O({type:Boolean})],_r.prototype,"disabled",void 0);vo([O({type:Boolean})],_r.prototype,"isProfileName",void 0);vo([O()],_r.prototype,"address",void 0);_r=vo([j("wui-account-button")],_r);const P$=Q`
  :host {
    position: relative;
    border-radius: inherit;
    overflow: hidden;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }
`;var tu=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let uo=class extends F{constructor(){super(...arguments),this.size="md",this.name=""}render(){let e="xxs";return this.size==="lg"?e="m":this.size==="md"?e="xs":e="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),T` ${this.templateVisual()}`}templateVisual(){return this.imageSrc?T`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?T`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:T`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};uo.styles=[se,P$];tu([O()],uo.prototype,"size",void 0);tu([O()],uo.prototype,"name",void 0);tu([O()],uo.prototype,"imageSrc",void 0);tu([O()],uo.prototype,"walletIcon",void 0);uo=tu([j("wui-wallet-image")],uo);const A$=Q`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }
`;var cb=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const C0=4;let Qc=class extends F{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<C0;return T`${this.walletImages.slice(0,C0).map(({src:n,walletName:r})=>T`
          <wui-wallet-image
            size="inherit"
            imageSrc=${n}
            name=${fe(r)}
          ></wui-wallet-image>
        `)}
    ${e?[...Array(C0-this.walletImages.length)].map(()=>T` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}`}};Qc.styles=[se,A$];cb([O({type:Array})],Qc.prototype,"walletImages",void 0);Qc=cb([j("wui-all-wallets-image")],Qc);const D$=Q`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: 6px 12px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var nu=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let co=class extends F{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.loading=!1,this.variant="fill"}render(){this.style.cssText=`
    --local-width: ${this.variant==="fullWidth"?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;const e=this.size==="md"?"paragraph-600":"small-600";return T`
      <button
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){return this.loading?T`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:T``}};co.styles=[se,nt,D$];nu([O()],co.prototype,"size",void 0);nu([O({type:Boolean})],co.prototype,"disabled",void 0);nu([O({type:Boolean})],co.prototype,"loading",void 0);nu([O()],co.prototype,"variant",void 0);co=nu([j("wui-button")],co);const db=H`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,T$=Q`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var fb=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Yc=class extends F{constructor(){super(...arguments),this.type="wallet"}render(){return T`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?T` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${db}`:T`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};Yc.styles=[se,nt,T$];fb([O()],Yc.prototype,"type",void 0);Yc=fb([j("wui-card-select-loader")],Yc);const k$=H`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,O$=Q`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var ru=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let fo=class extends F{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const e=this.size==="lg";return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${e?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${e?"86px":"48px"};
      --local-height: ${e?"96px":"54px"};
      --local-icon-size: ${e?"42px":"24px"};
    `,T`${this.templateVisual()} ${e?k$:db}`}templateVisual(){return this.imageSrc?T`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:T`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};fo.styles=[se,O$];ru([O()],fo.prototype,"size",void 0);ru([O()],fo.prototype,"name",void 0);ru([O()],fo.prototype,"imageSrc",void 0);ru([O({type:Boolean})],fo.prototype,"selected",void 0);fo=ru([j("wui-network-image")],fo);const I$=Q`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 64px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var Ws=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let gi=class extends F{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1}render(){return T`
      <button data-selected=${fe(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?T`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${fe(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:T`
      <wui-wallet-image size="md" imageSrc=${fe(this.imageSrc)} name=${this.name}>
      </wui-wallet-image>
    `}};gi.styles=[se,nt,I$];Ws([O()],gi.prototype,"name",void 0);Ws([O()],gi.prototype,"type",void 0);Ws([O()],gi.prototype,"imageSrc",void 0);Ws([O({type:Boolean})],gi.prototype,"disabled",void 0);Ws([O({type:Boolean})],gi.prototype,"selected",void 0);gi=Ws([j("wui-card-select")],gi);const N$=Q`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    padding: 7px var(--wui-spacing-s) 7px 10px;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 8.5px var(--wui-spacing-m) 9.5px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    border: 1px solid var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image {
    border: 1px solid var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }
`;var Hs=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let mi=class extends F{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href=""}render(){const e=this.variant==="transparent"?"small-600":"paragraph-600";return T`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e} color="inherit">
          ${ke.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?T`<wui-image src=${this.imageSrc}></wui-image>`:null}};mi.styles=[se,nt,N$];Hs([O()],mi.prototype,"variant",void 0);Hs([O()],mi.prototype,"imageSrc",void 0);Hs([O({type:Boolean})],mi.prototype,"disabled",void 0);Hs([O()],mi.prototype,"icon",void 0);Hs([O()],mi.prototype,"href",void 0);mi=Hs([j("wui-chip")],mi);const R$=Q`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var vg=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Dl=class extends F{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e=this.size==="md"?"paragraph-600":"small-600";return T`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?T`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};Dl.styles=[se,nt,R$];vg([O()],Dl.prototype,"size",void 0);vg([O({type:Boolean})],Dl.prototype,"loading",void 0);Dl=vg([j("wui-connect-button")],Dl);const M$=Q`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var af=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Cs=class extends F{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return T`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" colo="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Cs.styles=[se,nt,M$];af([O({type:Boolean})],Cs.prototype,"disabled",void 0);af([O()],Cs.prototype,"label",void 0);af([O()],Cs.prototype,"buttonLabel",void 0);Cs=af([j("wui-cta-button")],Cs);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B$=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ua=(t,e)=>{var r;const n=t._$AN;if(n===void 0)return!1;for(const i of n)(r=i._$AO)==null||r.call(i,e,!1),Ua(i,e);return!0},Xc=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while((n==null?void 0:n.size)===0)},hb=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),j$(e)}};function L$(t){this._$AN!==void 0?(Xc(this),this._$AM=t,hb(this)):this._$AM=t}function U$(t,e=!1,n=0){const r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(r))for(let o=n;o<r.length;o++)Ua(r[o],!1),Xc(r[o]);else r!=null&&(Ua(r,!1),Xc(r));else Ua(this,t)}const j$=t=>{t.type==sb.CHILD&&(t._$AP??(t._$AP=U$),t._$AQ??(t._$AQ=L$))};class F$ extends lb{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,r){super._$AT(e,n,r),hb(this),this.isConnected=e._$AU}_$AO(e,n=!0){var r,i;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)==null||r.call(this):(i=this.disconnected)==null||i.call(this)),n&&(Ua(this,e),Xc(this))}setValue(e){if(B$(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pb=()=>new z$;let z$=class{};const E0=new WeakMap,gb=ab(class extends F${render(t){return Qe}update(t,[e]){var r;const n=e!==this.G;return n&&this.G!==void 0&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=e,this.ct=(r=t.options)==null?void 0:r.host,this.ot(this.lt=t.element)),Qe}ot(t){if(typeof this.G=="function"){const e=this.ct??globalThis;let n=E0.get(e);n===void 0&&(n=new WeakMap,E0.set(e,n)),n.get(this.G)!==void 0&&this.G.call(this.ct,void 0),n.set(this.G,t),t!==void 0&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){var t,e;return typeof this.G=="function"?(t=E0.get(this.ct??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),W$=Q`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) 42px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var yo=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Sr=class extends F{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.inputElementRef=pb()}render(){const e=`wui-size-${this.size}`;return T` ${this.templateIcon()}
      <input
        ${gb(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${fe(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
      />
      <slot></slot>`}templateIcon(){return this.icon?T`<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var e;this.dispatchEvent(new CustomEvent("inputChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.value,bubbles:!0,composed:!0}))}};Sr.styles=[se,nt,W$];yo([O()],Sr.prototype,"size",void 0);yo([O()],Sr.prototype,"icon",void 0);yo([O({type:Boolean})],Sr.prototype,"disabled",void 0);yo([O()],Sr.prototype,"placeholder",void 0);yo([O()],Sr.prototype,"type",void 0);yo([O()],Sr.prototype,"keyHint",void 0);Sr=yo([j("wui-input-text")],Sr);const H$=Q`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-icon {
    padding: var(--wui-spacing-xl);
    cursor: pointer;
    transition: all var(--wui-duration-lg) var(--wui-ease-in-power-1);
  }

  wui-icon:hover {
    color: var(--wui-color-fg-200) !important;
  }

  wui-icon::part(chevronRight) {
    width: 12px;
    height: 12px;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var mb=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Jc=class extends F{render(){return T`
      <wui-input-text placeholder="Email" icon="mail" size="md">
        <wui-icon size="inherit" color="fg-100" name="chevronRight"></wui-icon>
      </wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?T`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};Jc.styles=[se,H$];mb([O()],Jc.prototype,"errorMessage",void 0);Jc=mb([j("wui-email-input")],Jc);const V$=Q`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var iu=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ho=class extends F{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return T`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};ho.styles=[se,nt,gg,V$];iu([O()],ho.prototype,"size",void 0);iu([O({type:Boolean})],ho.prototype,"disabled",void 0);iu([O()],ho.prototype,"icon",void 0);iu([O()],ho.prototype,"iconColor",void 0);ho=iu([j("wui-icon-link")],ho);const q$=Q`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var wb=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ed=class extends F{constructor(){super(...arguments),this.icon="copy"}render(){return T`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};ed.styles=[se,nt,q$];wb([O()],ed.prototype,"icon",void 0);ed=wb([j("wui-input-element")],ed);const G$=Q`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }
`;var vb=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let td=class extends F{constructor(){super(...arguments),this.disabled=!1}render(){return T`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};td.styles=[se,nt,G$];vb([O({type:Boolean})],td.prototype,"disabled",void 0);td=vb([j("wui-input-numeric")],td);const K$=Q`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var yg=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Tl=class extends F{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return T`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};Tl.styles=[se,nt,K$];yg([O({type:Boolean})],Tl.prototype,"disabled",void 0);yg([O()],Tl.prototype,"color",void 0);Tl=yg([j("wui-link")],Tl);const Z$=Q`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    outline: 2px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    outline: 2px solid var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    outline: 2px solid var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var Dr=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Un=class extends F{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return T`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${fe(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return T`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return T`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",n=this.iconVariant==="square-blue"?"mdl":"md";return T`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${n}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?T`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:T``}chevronTemplate(){return this.chevron?T`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};Un.styles=[se,nt,Z$];Dr([O()],Un.prototype,"icon",void 0);Dr([O()],Un.prototype,"variant",void 0);Dr([O()],Un.prototype,"iconVariant",void 0);Dr([O({type:Boolean})],Un.prototype,"disabled",void 0);Dr([O()],Un.prototype,"imageSrc",void 0);Dr([O()],Un.prototype,"alt",void 0);Dr([O({type:Boolean})],Un.prototype,"chevron",void 0);Dr([O({type:Boolean})],Un.prototype,"loading",void 0);Un=Dr([j("wui-list-item")],Un);const Q$=Q`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    border: 1px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  :host([data-type='minted']),
  :host([data-type='nftSent']),
  :host([data-type='bought']) {
    border-radius: var(--wui-border-radius-xs);
  }

  wui-image {
    display: block;
    border-radius: inherit;
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`;var bg=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const Y$=["withdrawed","buy","cryptoSent","nftSent"],a2=["deposited","received","bought","minted"],l2=["minted","bought","nftSent"],X$=["deposited","withdrawed","cryptoSent","buy","received"];let kl=class extends F{constructor(){super(...arguments),this.type="buy"}render(){let e="accent-100",n="arrowTop";return Y$.includes(this.type)?(e="accent-100",n="arrowTop"):a2.includes(this.type)&&l2.includes(this.type)||a2.includes(this.type)&&X$.includes(this.type)?(e="success-100",n="arrowBottom"):(e="accent-100",n="swapVertical"),this.dataset.type=this.type,T`
      ${this.templateVisual()}
      <wui-icon-box
        size="xs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        .icon=${n}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `}templateVisual(){return this.imageSrc?T`<wui-image src=${this.imageSrc} alt=${this.type}></wui-image>`:l2.includes(this.type)?T`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:T`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}};kl.styles=[se,Q$];bg([O()],kl.prototype,"type",void 0);bg([O()],kl.prototype,"imageSrc",void 0);kl=bg([j("wui-transaction-visual")],kl);const J$=Q`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  button > wui-flex > wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  button > wui-flex > wui-text:nth-child(2) {
    text-transform: uppercase;
  }

  button:disabled {
    color: var(--wui-color-fg-300);
  }
`;var Vs=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let wi=class extends F{constructor(){super(...arguments),this.type="bought",this.disabled=!1,this.imageSrc="",this.date=new Date,this.transactionDetail=""}render(){const n=this.type==="nftSent"||this.type==="cryptoSent"?"Sent":this.type,r=ke.getFormattedDate(this.date);return T`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-transaction-visual
          type=${this.type}
          imageSrc=${this.imageSrc}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">${n}</wui-text>
          <wui-text variant="small-500" color="fg-200">${this.transactionDetail}</wui-text>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300">${r}</wui-text>
      </button>
    `}};wi.styles=[se,nt,J$];Vs([O()],wi.prototype,"type",void 0);Vs([O({type:Boolean})],wi.prototype,"disabled",void 0);Vs([O()],wi.prototype,"imageSrc",void 0);Vs([O({attribute:!1})],wi.prototype,"date",void 0);Vs([O()],wi.prototype,"transactionDetail",void 0);wi=Vs([j("wui-list-transaction")],wi);const eP=Q`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;var yb=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let nd=class extends F{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,T`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};nd.styles=[se,eP];yb([O()],nd.prototype,"variant",void 0);nd=yb([j("wui-tag")],nd);const tP=Q`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var sr=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let xn=class extends F{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.disabled=!1,this.showAllWallets=!1}render(){return T`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?T` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?T` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?T`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?T`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?T`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?T`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};xn.styles=[se,nt,tP];sr([O({type:Array})],xn.prototype,"walletImages",void 0);sr([O()],xn.prototype,"imageSrc",void 0);sr([O()],xn.prototype,"name",void 0);sr([O()],xn.prototype,"tagLabel",void 0);sr([O()],xn.prototype,"tagVariant",void 0);sr([O()],xn.prototype,"icon",void 0);sr([O()],xn.prototype,"walletIcon",void 0);sr([O({type:Boolean})],xn.prototype,"disabled",void 0);sr([O({type:Boolean})],xn.prototype,"showAllWallets",void 0);xn=sr([j("wui-list-wallet")],xn);const nP=Q`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var bb=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let rd=class extends F{constructor(){super(...arguments),this.logo="google"}render(){return T`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};rd.styles=[se,nP];bb([O()],rd.prototype,"logo",void 0);rd=bb([j("wui-logo")],rd);const rP=Q`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var xg=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Ol=class extends F{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return T`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};Ol.styles=[se,nt,rP];xg([O()],Ol.prototype,"logo",void 0);xg([O({type:Boolean})],Ol.prototype,"disabled",void 0);Ol=xg([j("wui-logo-select")],Ol);const iP=Q`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }
`;var Cg=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Il=class extends F{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return T`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?T`<wui-image src=${this.imageSrc}></wui-image>`:T`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Il.styles=[se,nt,iP];Cg([O()],Il.prototype,"imageSrc",void 0);Cg([O({type:Boolean})],Il.prototype,"disabled",void 0);Il=Cg([j("wui-network-button")],Il);const oP=Q`
  :host {
    position: relative;
    display: block;
  }
`;var xb=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let id=class extends F{constructor(){super(...arguments),this.length=6,this.numerics=[],this.handleKeyDown=(e,n)=>{const r=e.target,i=this.getInputElement(r),o=["ArrowLeft","ArrowRight","Shift","Delete"];if(!i)return;o.includes(e.key)&&e.preventDefault();const s=i.selectionStart;switch(e.key){case"ArrowLeft":s&&i.setSelectionRange(s+1,s+1),this.focusInputField("prev",n);break;case"ArrowRight":this.focusInputField("next",n);break;case"Shift":this.focusInputField("next",n);break;case"Delete":i.value===""?this.focusInputField("prev",n):i.value="";break;case"Backspace":i.value===""?this.focusInputField("prev",n):i.value="";break}},this.focusInputField=(e,n)=>{if(e==="next"){const r=n+1,i=this.numerics[r<this.length?r:n],o=i?this.getInputElement(i):void 0;o&&o.focus()}if(e==="prev"){const r=n-1,i=this.numerics[r>-1?r:n],o=i?this.getInputElement(i):void 0;o&&o.focus()}}}firstUpdated(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e))}render(){return T`
      <wui-flex gap="xxs">
        ${[...Array(this.length)].map((e,n)=>T`
            <wui-input-numeric
              @input=${r=>this.handleInput(r,n)}
              @keydown=${r=>this.handleKeyDown(r,n)}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}handleInput(e,n){const r=e.target,i=this.getInputElement(r);if(i){const o=i.value;e.inputType==="insertFromPaste"?this.handlePaste(i,o,n):ke.isNumber(o)&&e.data?(i.value=e.data,this.focusInputField("next",n)):i.value=""}}handlePaste(e,n,r){const i=n[0];if(i&&ke.isNumber(i)){e.value=i;const s=n.substring(1);if(r+1<this.length&&s.length){const a=this.numerics[r+1],l=a?this.getInputElement(a):void 0;l&&this.handlePaste(l,s,r+1)}else this.focusInputField("next",r)}else e.value=""}getInputElement(e){var n;return(n=e.shadowRoot)!=null&&n.querySelector("input")?e.shadowRoot.querySelector("input"):null}};id.styles=[se,oP];xb([O({type:Number})],id.prototype,"length",void 0);id=xb([j("wui-otp")],id);var ou={},sP=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Cb={},ln={};let Eg;const aP=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];ln.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};ln.getSymbolTotalCodewords=function(e){return aP[e]};ln.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};ln.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');Eg=e};ln.isKanjiModeEnabled=function(){return typeof Eg<"u"};ln.toSJIS=function(e){return Eg(e)};var lf={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+n)}}t.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},t.from=function(r,i){if(t.isValid(r))return r;try{return e(r)}catch{return i}}})(lf);function Eb(){this.buffer=[],this.length=0}Eb.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let n=0;n<e;n++)this.putBit((t>>>e-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var lP=Eb;function su(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}su.prototype.set=function(t,e,n,r){const i=t*this.size+e;this.data[i]=n,r&&(this.reservedBit[i]=!0)};su.prototype.get=function(t,e){return this.data[t*this.size+e]};su.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n};su.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var uP=su,_b={};(function(t){const e=ln.getSymbolSize;t.getRowColCoords=function(r){if(r===1)return[];const i=Math.floor(r/7)+2,o=e(r),s=o===145?26:Math.ceil((o-13)/(2*i-2))*2,a=[o-7];for(let l=1;l<i-1;l++)a[l]=a[l-1]-s;return a.push(6),a.reverse()},t.getPositions=function(r){const i=[],o=t.getRowColCoords(r),s=o.length;for(let a=0;a<s;a++)for(let l=0;l<s;l++)a===0&&l===0||a===0&&l===s-1||a===s-1&&l===0||i.push([o[a],o[l]]);return i}})(_b);var Sb={};const cP=ln.getSymbolSize,u2=7;Sb.getPositions=function(e){const n=cP(e);return[[0,0],[n-u2,0],[0,n-u2]]};var $b={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},t.from=function(i){return t.isValid(i)?parseInt(i,10):void 0},t.getPenaltyN1=function(i){const o=i.size;let s=0,a=0,l=0,u=null,c=null;for(let f=0;f<o;f++){a=l=0,u=c=null;for(let p=0;p<o;p++){let w=i.get(f,p);w===u?a++:(a>=5&&(s+=e.N1+(a-5)),u=w,a=1),w=i.get(p,f),w===c?l++:(l>=5&&(s+=e.N1+(l-5)),c=w,l=1)}a>=5&&(s+=e.N1+(a-5)),l>=5&&(s+=e.N1+(l-5))}return s},t.getPenaltyN2=function(i){const o=i.size;let s=0;for(let a=0;a<o-1;a++)for(let l=0;l<o-1;l++){const u=i.get(a,l)+i.get(a,l+1)+i.get(a+1,l)+i.get(a+1,l+1);(u===4||u===0)&&s++}return s*e.N2},t.getPenaltyN3=function(i){const o=i.size;let s=0,a=0,l=0;for(let u=0;u<o;u++){a=l=0;for(let c=0;c<o;c++)a=a<<1&2047|i.get(u,c),c>=10&&(a===1488||a===93)&&s++,l=l<<1&2047|i.get(c,u),c>=10&&(l===1488||l===93)&&s++}return s*e.N3},t.getPenaltyN4=function(i){let o=0;const s=i.data.length;for(let l=0;l<s;l++)o+=i.data[l];return Math.abs(Math.ceil(o*100/s/5)-10)*e.N4};function n(r,i,o){switch(r){case t.Patterns.PATTERN000:return(i+o)%2===0;case t.Patterns.PATTERN001:return i%2===0;case t.Patterns.PATTERN010:return o%3===0;case t.Patterns.PATTERN011:return(i+o)%3===0;case t.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(o/3))%2===0;case t.Patterns.PATTERN101:return i*o%2+i*o%3===0;case t.Patterns.PATTERN110:return(i*o%2+i*o%3)%2===0;case t.Patterns.PATTERN111:return(i*o%3+(i+o)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}t.applyMask=function(i,o){const s=o.size;for(let a=0;a<s;a++)for(let l=0;l<s;l++)o.isReserved(l,a)||o.xor(l,a,n(i,l,a))},t.getBestMask=function(i,o){const s=Object.keys(t.Patterns).length;let a=0,l=1/0;for(let u=0;u<s;u++){o(u),t.applyMask(u,i);const c=t.getPenaltyN1(i)+t.getPenaltyN2(i)+t.getPenaltyN3(i)+t.getPenaltyN4(i);t.applyMask(u,i),c<l&&(l=c,a=u)}return a}})($b);var uf={};const Kr=lf,Uu=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],ju=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];uf.getBlocksCount=function(e,n){switch(n){case Kr.L:return Uu[(e-1)*4+0];case Kr.M:return Uu[(e-1)*4+1];case Kr.Q:return Uu[(e-1)*4+2];case Kr.H:return Uu[(e-1)*4+3];default:return}};uf.getTotalCodewordsCount=function(e,n){switch(n){case Kr.L:return ju[(e-1)*4+0];case Kr.M:return ju[(e-1)*4+1];case Kr.Q:return ju[(e-1)*4+2];case Kr.H:return ju[(e-1)*4+3];default:return}};var Pb={},cf={};const ja=new Uint8Array(512),od=new Uint8Array(256);(function(){let e=1;for(let n=0;n<255;n++)ja[n]=e,od[e]=n,e<<=1,e&256&&(e^=285);for(let n=255;n<512;n++)ja[n]=ja[n-255]})();cf.log=function(e){if(e<1)throw new Error("log("+e+")");return od[e]};cf.exp=function(e){return ja[e]};cf.mul=function(e,n){return e===0||n===0?0:ja[od[e]+od[n]]};(function(t){const e=cf;t.mul=function(r,i){const o=new Uint8Array(r.length+i.length-1);for(let s=0;s<r.length;s++)for(let a=0;a<i.length;a++)o[s+a]^=e.mul(r[s],i[a]);return o},t.mod=function(r,i){let o=new Uint8Array(r);for(;o.length-i.length>=0;){const s=o[0];for(let l=0;l<i.length;l++)o[l]^=e.mul(i[l],s);let a=0;for(;a<o.length&&o[a]===0;)a++;o=o.slice(a)}return o},t.generateECPolynomial=function(r){let i=new Uint8Array([1]);for(let o=0;o<r;o++)i=t.mul(i,new Uint8Array([1,e.exp(o)]));return i}})(Pb);const Ab=Pb;function _g(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}_g.prototype.initialize=function(e){this.degree=e,this.genPoly=Ab.generateECPolynomial(this.degree)};_g.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(e.length+this.degree);n.set(e);const r=Ab.mod(n,this.genPoly),i=this.degree-r.length;if(i>0){const o=new Uint8Array(this.degree);return o.set(r,i),o}return r};var dP=_g,Db={},Pi={},Sg={};Sg.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var ar={};const Tb="[0-9]+",fP="[A-Z $%*+\\-./:]+";let Nl="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Nl=Nl.replace(/u/g,"\\u");const hP="(?:(?![A-Z0-9 $%*+\\-./:]|"+Nl+`)(?:.|[\r
]))+`;ar.KANJI=new RegExp(Nl,"g");ar.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");ar.BYTE=new RegExp(hP,"g");ar.NUMERIC=new RegExp(Tb,"g");ar.ALPHANUMERIC=new RegExp(fP,"g");const pP=new RegExp("^"+Nl+"$"),gP=new RegExp("^"+Tb+"$"),mP=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");ar.testKanji=function(e){return pP.test(e)};ar.testNumeric=function(e){return gP.test(e)};ar.testAlphanumeric=function(e){return mP.test(e)};(function(t){const e=Sg,n=ar;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(o,s){if(!o.ccBits)throw new Error("Invalid mode: "+o);if(!e.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?o.ccBits[0]:s<27?o.ccBits[1]:o.ccBits[2]},t.getBestModeForData=function(o){return n.testNumeric(o)?t.NUMERIC:n.testAlphanumeric(o)?t.ALPHANUMERIC:n.testKanji(o)?t.KANJI:t.BYTE},t.toString=function(o){if(o&&o.id)return o.id;throw new Error("Invalid mode")},t.isValid=function(o){return o&&o.bit&&o.ccBits};function r(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+i)}}t.from=function(o,s){if(t.isValid(o))return o;try{return r(o)}catch{return s}}})(Pi);(function(t){const e=ln,n=uf,r=lf,i=Pi,o=Sg,s=7973,a=e.getBCHDigit(s);function l(p,w,v){for(let C=1;C<=40;C++)if(w<=t.getCapacity(C,v,p))return C}function u(p,w){return i.getCharCountIndicator(p,w)+4}function c(p,w){let v=0;return p.forEach(function(C){const E=u(C.mode,w);v+=E+C.getBitsLength()}),v}function f(p,w){for(let v=1;v<=40;v++)if(c(p,v)<=t.getCapacity(v,w,i.MIXED))return v}t.from=function(w,v){return o.isValid(w)?parseInt(w,10):v},t.getCapacity=function(w,v,C){if(!o.isValid(w))throw new Error("Invalid QR Code version");typeof C>"u"&&(C=i.BYTE);const E=e.getSymbolTotalCodewords(w),b=n.getTotalCodewordsCount(w,v),g=(E-b)*8;if(C===i.MIXED)return g;const y=g-u(C,w);switch(C){case i.NUMERIC:return Math.floor(y/10*3);case i.ALPHANUMERIC:return Math.floor(y/11*2);case i.KANJI:return Math.floor(y/13);case i.BYTE:default:return Math.floor(y/8)}},t.getBestVersionForData=function(w,v){let C;const E=r.from(v,r.M);if(Array.isArray(w)){if(w.length>1)return f(w,E);if(w.length===0)return 1;C=w[0]}else C=w;return l(C.mode,C.getLength(),E)},t.getEncodedBits=function(w){if(!o.isValid(w)||w<7)throw new Error("Invalid QR Code version");let v=w<<12;for(;e.getBCHDigit(v)-a>=0;)v^=s<<e.getBCHDigit(v)-a;return w<<12|v}})(Db);var kb={};const l1=ln,Ob=1335,wP=21522,c2=l1.getBCHDigit(Ob);kb.getEncodedBits=function(e,n){const r=e.bit<<3|n;let i=r<<10;for(;l1.getBCHDigit(i)-c2>=0;)i^=Ob<<l1.getBCHDigit(i)-c2;return(r<<10|i)^wP};var Ib={};const vP=Pi;function Es(t){this.mode=vP.NUMERIC,this.data=t.toString()}Es.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};Es.prototype.getLength=function(){return this.data.length};Es.prototype.getBitsLength=function(){return Es.getBitsLength(this.data.length)};Es.prototype.write=function(e){let n,r,i;for(n=0;n+3<=this.data.length;n+=3)r=this.data.substr(n,3),i=parseInt(r,10),e.put(i,10);const o=this.data.length-n;o>0&&(r=this.data.substr(n),i=parseInt(r,10),e.put(i,o*3+1))};var yP=Es;const bP=Pi,_0=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function _s(t){this.mode=bP.ALPHANUMERIC,this.data=t}_s.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};_s.prototype.getLength=function(){return this.data.length};_s.prototype.getBitsLength=function(){return _s.getBitsLength(this.data.length)};_s.prototype.write=function(e){let n;for(n=0;n+2<=this.data.length;n+=2){let r=_0.indexOf(this.data[n])*45;r+=_0.indexOf(this.data[n+1]),e.put(r,11)}this.data.length%2&&e.put(_0.indexOf(this.data[n]),6)};var xP=_s,CP=function(e){for(var n=[],r=e.length,i=0;i<r;i++){var o=e.charCodeAt(i);if(o>=55296&&o<=56319&&r>i+1){var s=e.charCodeAt(i+1);s>=56320&&s<=57343&&(o=(o-55296)*1024+s-56320+65536,i+=1)}if(o<128){n.push(o);continue}if(o<2048){n.push(o>>6|192),n.push(o&63|128);continue}if(o<55296||o>=57344&&o<65536){n.push(o>>12|224),n.push(o>>6&63|128),n.push(o&63|128);continue}if(o>=65536&&o<=1114111){n.push(o>>18|240),n.push(o>>12&63|128),n.push(o>>6&63|128),n.push(o&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer};const EP=CP,_P=Pi;function Ss(t){this.mode=_P.BYTE,typeof t=="string"&&(t=EP(t)),this.data=new Uint8Array(t)}Ss.getBitsLength=function(e){return e*8};Ss.prototype.getLength=function(){return this.data.length};Ss.prototype.getBitsLength=function(){return Ss.getBitsLength(this.data.length)};Ss.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)};var SP=Ss;const $P=Pi,PP=ln;function $s(t){this.mode=$P.KANJI,this.data=t}$s.getBitsLength=function(e){return e*13};$s.prototype.getLength=function(){return this.data.length};$s.prototype.getBitsLength=function(){return $s.getBitsLength(this.data.length)};$s.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=PP.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),t.put(n,13)}};var AP=$s,Nb={exports:{}};(function(t){var e={single_source_shortest_paths:function(n,r,i){var o={},s={};s[r]=0;var a=e.PriorityQueue.make();a.push(r,0);for(var l,u,c,f,p,w,v,C,E;!a.empty();){l=a.pop(),u=l.value,f=l.cost,p=n[u]||{};for(c in p)p.hasOwnProperty(c)&&(w=p[c],v=f+w,C=s[c],E=typeof s[c]>"u",(E||C>v)&&(s[c]=v,a.push(c,v),o[c]=u))}if(typeof i<"u"&&typeof s[i]>"u"){var b=["Could not find a path from ",r," to ",i,"."].join("");throw new Error(b)}return o},extract_shortest_path_from_predecessor_list:function(n,r){for(var i=[],o=r;o;)i.push(o),n[o],o=n[o];return i.reverse(),i},find_path:function(n,r,i){var o=e.single_source_shortest_paths(n,r,i);return e.extract_shortest_path_from_predecessor_list(o,i)},PriorityQueue:{make:function(n){var r=e.PriorityQueue,i={},o;n=n||{};for(o in r)r.hasOwnProperty(o)&&(i[o]=r[o]);return i.queue=[],i.sorter=n.sorter||r.default_sorter,i},default_sorter:function(n,r){return n.cost-r.cost},push:function(n,r){var i={value:n,cost:r};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(Nb);var DP=Nb.exports;(function(t){const e=Pi,n=yP,r=xP,i=SP,o=AP,s=ar,a=ln,l=DP;function u(b){return unescape(encodeURIComponent(b)).length}function c(b,g,y){const x=[];let _;for(;(_=b.exec(y))!==null;)x.push({data:_[0],index:_.index,mode:g,length:_[0].length});return x}function f(b){const g=c(s.NUMERIC,e.NUMERIC,b),y=c(s.ALPHANUMERIC,e.ALPHANUMERIC,b);let x,_;return a.isKanjiModeEnabled()?(x=c(s.BYTE,e.BYTE,b),_=c(s.KANJI,e.KANJI,b)):(x=c(s.BYTE_KANJI,e.BYTE,b),_=[]),g.concat(y,x,_).sort(function(d,P){return d.index-P.index}).map(function(d){return{data:d.data,mode:d.mode,length:d.length}})}function p(b,g){switch(g){case e.NUMERIC:return n.getBitsLength(b);case e.ALPHANUMERIC:return r.getBitsLength(b);case e.KANJI:return o.getBitsLength(b);case e.BYTE:return i.getBitsLength(b)}}function w(b){return b.reduce(function(g,y){const x=g.length-1>=0?g[g.length-1]:null;return x&&x.mode===y.mode?(g[g.length-1].data+=y.data,g):(g.push(y),g)},[])}function v(b){const g=[];for(let y=0;y<b.length;y++){const x=b[y];switch(x.mode){case e.NUMERIC:g.push([x,{data:x.data,mode:e.ALPHANUMERIC,length:x.length},{data:x.data,mode:e.BYTE,length:x.length}]);break;case e.ALPHANUMERIC:g.push([x,{data:x.data,mode:e.BYTE,length:x.length}]);break;case e.KANJI:g.push([x,{data:x.data,mode:e.BYTE,length:u(x.data)}]);break;case e.BYTE:g.push([{data:x.data,mode:e.BYTE,length:u(x.data)}])}}return g}function C(b,g){const y={},x={start:{}};let _=["start"];for(let $=0;$<b.length;$++){const d=b[$],P=[];for(let k=0;k<d.length;k++){const I=d[k],M=""+$+k;P.push(M),y[M]={node:I,lastCount:0},x[M]={};for(let W=0;W<_.length;W++){const G=_[W];y[G]&&y[G].node.mode===I.mode?(x[G][M]=p(y[G].lastCount+I.length,I.mode)-p(y[G].lastCount,I.mode),y[G].lastCount+=I.length):(y[G]&&(y[G].lastCount=I.length),x[G][M]=p(I.length,I.mode)+4+e.getCharCountIndicator(I.mode,g))}}_=P}for(let $=0;$<_.length;$++)x[_[$]].end=0;return{map:x,table:y}}function E(b,g){let y;const x=e.getBestModeForData(b);if(y=e.from(g,x),y!==e.BYTE&&y.bit<x.bit)throw new Error('"'+b+'" cannot be encoded with mode '+e.toString(y)+`.
 Suggested mode is: `+e.toString(x));switch(y===e.KANJI&&!a.isKanjiModeEnabled()&&(y=e.BYTE),y){case e.NUMERIC:return new n(b);case e.ALPHANUMERIC:return new r(b);case e.KANJI:return new o(b);case e.BYTE:return new i(b)}}t.fromArray=function(g){return g.reduce(function(y,x){return typeof x=="string"?y.push(E(x,null)):x.data&&y.push(E(x.data,x.mode)),y},[])},t.fromString=function(g,y){const x=f(g,a.isKanjiModeEnabled()),_=v(x),$=C(_,y),d=l.find_path($.map,"start","end"),P=[];for(let k=1;k<d.length-1;k++)P.push($.table[d[k]].node);return t.fromArray(w(P))},t.rawSplit=function(g){return t.fromArray(f(g,a.isKanjiModeEnabled()))}})(Ib);const df=ln,S0=lf,TP=lP,kP=uP,OP=_b,IP=Sb,u1=$b,c1=uf,NP=dP,sd=Db,RP=kb,MP=Pi,$0=Ib;function BP(t,e){const n=t.size,r=IP.getPositions(e);for(let i=0;i<r.length;i++){const o=r[i][0],s=r[i][1];for(let a=-1;a<=7;a++)if(!(o+a<=-1||n<=o+a))for(let l=-1;l<=7;l++)s+l<=-1||n<=s+l||(a>=0&&a<=6&&(l===0||l===6)||l>=0&&l<=6&&(a===0||a===6)||a>=2&&a<=4&&l>=2&&l<=4?t.set(o+a,s+l,!0,!0):t.set(o+a,s+l,!1,!0))}}function LP(t){const e=t.size;for(let n=8;n<e-8;n++){const r=n%2===0;t.set(n,6,r,!0),t.set(6,n,r,!0)}}function UP(t,e){const n=OP.getPositions(e);for(let r=0;r<n.length;r++){const i=n[r][0],o=n[r][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?t.set(i+s,o+a,!0,!0):t.set(i+s,o+a,!1,!0)}}function jP(t,e){const n=t.size,r=sd.getEncodedBits(e);let i,o,s;for(let a=0;a<18;a++)i=Math.floor(a/3),o=a%3+n-8-3,s=(r>>a&1)===1,t.set(i,o,s,!0),t.set(o,i,s,!0)}function P0(t,e,n){const r=t.size,i=RP.getEncodedBits(e,n);let o,s;for(o=0;o<15;o++)s=(i>>o&1)===1,o<6?t.set(o,8,s,!0):o<8?t.set(o+1,8,s,!0):t.set(r-15+o,8,s,!0),o<8?t.set(8,r-o-1,s,!0):o<9?t.set(8,15-o-1+1,s,!0):t.set(8,15-o-1,s,!0);t.set(r-8,8,1,!0)}function FP(t,e){const n=t.size;let r=-1,i=n-1,o=7,s=0;for(let a=n-1;a>0;a-=2)for(a===6&&a--;;){for(let l=0;l<2;l++)if(!t.isReserved(i,a-l)){let u=!1;s<e.length&&(u=(e[s]>>>o&1)===1),t.set(i,a-l,u),o--,o===-1&&(s++,o=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}function zP(t,e,n){const r=new TP;n.forEach(function(l){r.put(l.mode.bit,4),r.put(l.getLength(),MP.getCharCountIndicator(l.mode,t)),l.write(r)});const i=df.getSymbolTotalCodewords(t),o=c1.getTotalCodewordsCount(t,e),s=(i-o)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(s-r.getLengthInBits())/8;for(let l=0;l<a;l++)r.put(l%2?17:236,8);return WP(r,t,e)}function WP(t,e,n){const r=df.getSymbolTotalCodewords(e),i=c1.getTotalCodewordsCount(e,n),o=r-i,s=c1.getBlocksCount(e,n),a=r%s,l=s-a,u=Math.floor(r/s),c=Math.floor(o/s),f=c+1,p=u-c,w=new NP(p);let v=0;const C=new Array(s),E=new Array(s);let b=0;const g=new Uint8Array(t.buffer);for(let d=0;d<s;d++){const P=d<l?c:f;C[d]=g.slice(v,v+P),E[d]=w.encode(C[d]),v+=P,b=Math.max(b,P)}const y=new Uint8Array(r);let x=0,_,$;for(_=0;_<b;_++)for($=0;$<s;$++)_<C[$].length&&(y[x++]=C[$][_]);for(_=0;_<p;_++)for($=0;$<s;$++)y[x++]=E[$][_];return y}function HP(t,e,n,r){let i;if(Array.isArray(t))i=$0.fromArray(t);else if(typeof t=="string"){let u=e;if(!u){const c=$0.rawSplit(t);u=sd.getBestVersionForData(c,n)}i=$0.fromString(t,u||40)}else throw new Error("Invalid data");const o=sd.getBestVersionForData(i,n);if(!o)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=o;else if(e<o)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+o+`.
`);const s=zP(e,n,i),a=df.getSymbolSize(e),l=new kP(a);return BP(l,e),LP(l),UP(l,e),P0(l,n,0),e>=7&&jP(l,e),FP(l,s),isNaN(r)&&(r=u1.getBestMask(l,P0.bind(null,l,n))),u1.applyMask(r,l),P0(l,n,r),{modules:l,version:e,errorCorrectionLevel:n,maskPattern:r,segments:i}}Cb.create=function(e,n){if(typeof e>"u"||e==="")throw new Error("No input text");let r=S0.M,i,o;return typeof n<"u"&&(r=S0.from(n.errorCorrectionLevel,S0.M),i=sd.from(n.version),o=u1.from(n.maskPattern),n.toSJISFunc&&df.setToSJISFunction(n.toSJISFunc)),HP(e,i,r,o)};var Rb={},$g={};(function(t){function e(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(o){return[o,o]}))),r.length===6&&r.push("F","F");const i=parseInt(r.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+r.slice(0,6).join("")}}t.getOptions=function(r){r||(r={}),r.color||(r.color={});const i=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,o=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:o,scale:o?4:s,margin:i,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},t.getScale=function(r,i){return i.width&&i.width>=r+i.margin*2?i.width/(r+i.margin*2):i.scale},t.getImageWidth=function(r,i){const o=t.getScale(r,i);return Math.floor((r+i.margin*2)*o)},t.qrToImageData=function(r,i,o){const s=i.modules.size,a=i.modules.data,l=t.getScale(s,o),u=Math.floor((s+o.margin*2)*l),c=o.margin*l,f=[o.color.light,o.color.dark];for(let p=0;p<u;p++)for(let w=0;w<u;w++){let v=(p*u+w)*4,C=o.color.light;if(p>=c&&w>=c&&p<u-c&&w<u-c){const E=Math.floor((p-c)/l),b=Math.floor((w-c)/l);C=f[a[E*s+b]?1:0]}r[v++]=C.r,r[v++]=C.g,r[v++]=C.b,r[v]=C.a}}})($g);(function(t){const e=$g;function n(i,o,s){i.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=s,o.width=s,o.style.height=s+"px",o.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(o,s,a){let l=a,u=s;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),s||(u=r()),l=e.getOptions(l);const c=e.getImageWidth(o.modules.size,l),f=u.getContext("2d"),p=f.createImageData(c,c);return e.qrToImageData(p.data,o,l),n(f,u,c),f.putImageData(p,0,0),u},t.renderToDataURL=function(o,s,a){let l=a;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),l||(l={});const u=t.render(o,s,l),c=l.type||"image/png",f=l.rendererOpts||{};return u.toDataURL(c,f.quality)}})(Rb);var Mb={};const VP=$g;function d2(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function A0(t,e,n){let r=t+e;return typeof n<"u"&&(r+=" "+n),r}function qP(t,e,n){let r="",i=0,o=!1,s=0;for(let a=0;a<t.length;a++){const l=Math.floor(a%e),u=Math.floor(a/e);!l&&!o&&(o=!0),t[a]?(s++,a>0&&l>0&&t[a-1]||(r+=o?A0("M",l+n,.5+u+n):A0("m",i,0),i=0,o=!1),l+1<e&&t[a+1]||(r+=A0("h",s),s=0)):i++}return r}Mb.render=function(e,n,r){const i=VP.getOptions(n),o=e.modules.size,s=e.modules.data,a=o+i.margin*2,l=i.color.light.a?"<path "+d2(i.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",u="<path "+d2(i.color.dark,"stroke")+' d="'+qP(s,o,i.margin)+'"/>',c='viewBox="0 0 '+a+" "+a+'"',p='<svg xmlns="http://www.w3.org/2000/svg" '+(i.width?'width="'+i.width+'" height="'+i.width+'" ':"")+c+' shape-rendering="crispEdges">'+l+u+`</svg>
`;return typeof r=="function"&&r(null,p),p};const GP=sP,d1=Cb,Bb=Rb,KP=Mb;function Pg(t,e,n,r,i){const o=[].slice.call(arguments,1),s=o.length,a=typeof o[s-1]=="function";if(!a&&!GP())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(i=n,n=e,e=r=void 0):s===3&&(e.getContext&&typeof i>"u"?(i=r,r=void 0):(i=r,r=n,n=e,e=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(n=e,e=r=void 0):s===2&&!e.getContext&&(r=n,n=e,e=void 0),new Promise(function(l,u){try{const c=d1.create(n,r);l(t(c,e,r))}catch(c){u(c)}})}try{const l=d1.create(n,r);i(null,t(l,e,r))}catch(l){i(l)}}ou.create=d1.create;ou.toCanvas=Pg.bind(null,Bb.render);ou.toDataURL=Pg.bind(null,Bb.renderToDataURL);ou.toString=Pg.bind(null,function(t,e,n){return KP.render(t,n)});const ZP=.1,f2=2.5,cr=7;function D0(t,e,n){return t===e?!1:(t-e<0?e-t:t-e)<=n+ZP}function QP(t,e){const n=Array.prototype.slice.call(ou.create(t,{errorCorrectionLevel:e}).modules.data,0),r=Math.sqrt(n.length);return n.reduce((i,o,s)=>(s%r===0?i.push([o]):i[i.length-1].push(o))&&i,[])}const YP={generate(t,e,n){const r="#141414",i="transparent",s=[],a=QP(t,"Q"),l=e/a.length,u=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];u.forEach(({x:C,y:E})=>{const b=(a.length-cr)*l*C,g=(a.length-cr)*l*E,y=.45;for(let x=0;x<u.length;x+=1){const _=l*(cr-x*2);s.push(H`
            <rect
              fill=${x===2?r:i}
              width=${x===0?_-5:_}
              rx= ${x===0?(_-5)*y:_*y}
              ry= ${x===0?(_-5)*y:_*y}
              stroke=${r}
              stroke-width=${x===0?5:0}
              height=${x===0?_-5:_}
              x= ${x===0?g+l*x+5/2:g+l*x}
              y= ${x===0?b+l*x+5/2:b+l*x}
            />
          `)}});const c=Math.floor((n+25)/l),f=a.length/2-c/2,p=a.length/2+c/2-1,w=[];a.forEach((C,E)=>{C.forEach((b,g)=>{if(a[E][g]&&!(E<cr&&g<cr||E>a.length-(cr+1)&&g<cr||E<cr&&g>a.length-(cr+1))&&!(E>f&&E<p&&g>f&&g<p)){const y=E*l+l/2,x=g*l+l/2;w.push([y,x])}})});const v={};return w.forEach(([C,E])=>{var b;v[C]?(b=v[C])==null||b.push(E):v[C]=[E]}),Object.entries(v).map(([C,E])=>{const b=E.filter(g=>E.every(y=>!D0(g,y,l)));return[Number(C),b]}).forEach(([C,E])=>{E.forEach(b=>{s.push(H`<circle cx=${C} cy=${b} fill=${r} r=${l/f2} />`)})}),Object.entries(v).filter(([C,E])=>E.length>1).map(([C,E])=>{const b=E.filter(g=>E.some(y=>D0(g,y,l)));return[Number(C),b]}).map(([C,E])=>{E.sort((g,y)=>g<y?-1:1);const b=[];for(const g of E){const y=b.find(x=>x.some(_=>D0(g,_,l)));y?y.push(g):b.push([g])}return[C,b.map(g=>[g[0],g[g.length-1]])]}).forEach(([C,E])=>{E.forEach(([b,g])=>{s.push(H`
              <line
                x1=${C}
                x2=${C}
                y1=${b}
                y2=${g}
                stroke=${r}
                stroke-width=${l/(f2/2)}
                stroke-linecap="round"
              />
            `)})}),s}},XP=Q`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    outline: 1px solid var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var qs=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let vi=class extends F{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,T`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e=this.theme==="light"?this.size:this.size-32;return H`
      <svg height=${e} width=${e}>
        ${YP.generate(this.uri,e,e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?T`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:T`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};vi.styles=[se,XP];qs([O()],vi.prototype,"uri",void 0);qs([O({type:Number})],vi.prototype,"size",void 0);qs([O()],vi.prototype,"theme",void 0);qs([O()],vi.prototype,"imageSrc",void 0);qs([O()],vi.prototype,"alt",void 0);vi=qs([j("wui-qr-code")],vi);const JP=Q`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var eA=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let f1=class extends F{constructor(){super(...arguments),this.inputComponentRef=pb()}render(){return T`
      <wui-input-text
        ${gb(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,n=e==null?void 0:e.inputElementRef.value;n&&(n.value="",n.focus(),n.dispatchEvent(new Event("input")))}};f1.styles=[se,JP];f1=eA([j("wui-search-bar")],f1);const tA=Q`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var au=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let po=class extends F{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return T`
      <wui-icon-box
        size="sm"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};po.styles=[se,tA];au([O()],po.prototype,"backgroundColor",void 0);au([O()],po.prototype,"iconColor",void 0);au([O()],po.prototype,"icon",void 0);au([O()],po.prototype,"message",void 0);po=au([j("wui-snackbar")],po);const nA=Q`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }
`;var Ai=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let nr=class extends F{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,n)=>{const r=n===this.activeTab;return T`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(n)}
          data-active=${r}
        >
          <wui-icon size="sm" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,n){const r=this.buttons[this.activeTab],i=this.buttons[e],o=r==null?void 0:r.querySelector("wui-text"),s=i==null?void 0:i.querySelector("wui-text"),a=i==null?void 0:i.getBoundingClientRect(),l=s==null?void 0:s.getBoundingClientRect();r&&o&&!n&&e!==this.activeTab&&(o.animate([{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),i&&a&&l&&s&&(e!==this.activeTab||n)&&(this.localTabWidth=`${Math.round(a.width+l.width)+6}px`,i.animate([{width:`${a.width+l.width}px`}],{duration:n?0:500,fill:"forwards",easing:"ease"}),s.animate([{opacity:1}],{duration:n?0:250,delay:n?0:50,fill:"forwards",easing:"ease"}))}};nr.styles=[se,nt,nA];Ai([O({type:Array})],nr.prototype,"tabs",void 0);Ai([O()],nr.prototype,"onTabChange",void 0);Ai([O({type:Array})],nr.prototype,"buttons",void 0);Ai([O({type:Boolean})],nr.prototype,"disabled",void 0);Ai([oe()],nr.prototype,"activeTab",void 0);Ai([oe()],nr.prototype,"localTabWidth",void 0);Ai([oe()],nr.prototype,"isDense",void 0);nr=Ai([j("wui-tabs")],nr);const rA=Q`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var Ag=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Rl=class extends F{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return T`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Rl.styles=[se,nt,rA];Ag([O()],Rl.prototype,"placement",void 0);Ag([O()],Rl.prototype,"message",void 0);Rl=Ag([j("wui-tooltip")],Rl);const iA=Q`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var En=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Kt=class extends F{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&ke.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&ke.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&ke.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&ke.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&ke.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&ke.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&ke.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&ke.getSpacingStyles(this.margin,3)};
    `,T`<slot></slot>`}};Kt.styles=[se,iA];En([O()],Kt.prototype,"gridTemplateRows",void 0);En([O()],Kt.prototype,"gridTemplateColumns",void 0);En([O()],Kt.prototype,"justifyItems",void 0);En([O()],Kt.prototype,"alignItems",void 0);En([O()],Kt.prototype,"justifyContent",void 0);En([O()],Kt.prototype,"alignContent",void 0);En([O()],Kt.prototype,"columnGap",void 0);En([O()],Kt.prototype,"rowGap",void 0);En([O()],Kt.prototype,"gap",void 0);En([O()],Kt.prototype,"padding",void 0);En([O()],Kt.prototype,"margin",void 0);Kt=En([j("wui-grid")],Kt);const oA=Q`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-bg-125);
  }
`;var Lb=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ad=class extends F{constructor(){super(...arguments),this.text=""}render(){return T`${this.template()}`}template(){return this.text?T`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};ad.styles=[se,oA];Lb([O()],ad.prototype,"text",void 0);ad=Lb([j("wui-separator")],ad);var Tr=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let rr=class extends F{constructor(){super(),this.unsubscribe=[],this.networkImages=oi.state.networkImages,this.disabled=!1,this.balance="show",this.address=De.state.address,this.balanceVal=De.state.balance,this.balanceSymbol=De.state.balanceSymbol,this.profileName=De.state.profileName,this.profileImage=De.state.profileImage,this.network=Ue.state.caipNetwork,this.unsubscribe.push(De.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),Ue.subscribeKey("caipNetwork",e=>this.network=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var r;const e=this.networkImages[((r=this.network)==null?void 0:r.imageId)??""],n=this.balance==="show";return T`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${fe(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${fe(e)}
        avatarSrc=${fe(this.profileImage)}
        balance=${n?re.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
      >
      </wui-account-button>
    `}onClick(){pt.open()}};Tr([O({type:Boolean})],rr.prototype,"disabled",void 0);Tr([O()],rr.prototype,"balance",void 0);Tr([oe()],rr.prototype,"address",void 0);Tr([oe()],rr.prototype,"balanceVal",void 0);Tr([oe()],rr.prototype,"balanceSymbol",void 0);Tr([oe()],rr.prototype,"profileName",void 0);Tr([oe()],rr.prototype,"profileImage",void 0);Tr([oe()],rr.prototype,"network",void 0);rr=Tr([j("w3m-account-button")],rr);var bo=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let yi=class extends F{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.isAccount=De.state.isConnected,this.unsubscribe.push(De.subscribeKey("isConnected",e=>{this.isAccount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount?T`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${fe(this.balance)}
          >
          </w3m-account-button>
        `:T`
          <w3m-connect-button
            size=${fe(this.size)}
            label=${fe(this.label)}
            loadingLabel=${fe(this.loadingLabel)}
          ></w3m-connect-button>
        `}};bo([O({type:Boolean})],yi.prototype,"disabled",void 0);bo([O()],yi.prototype,"balance",void 0);bo([O()],yi.prototype,"size",void 0);bo([O()],yi.prototype,"label",void 0);bo([O()],yi.prototype,"loadingLabel",void 0);bo([oe()],yi.prototype,"isAccount",void 0);yi=bo([j("w3m-button")],yi);var lu=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Ps=class extends F{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=pt.state.open,this.unsubscribe.push(pt.subscribeKey("open",e=>this.open=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return T`
      <wui-connect-button
        size=${fe(this.size)}
        .loading=${this.open}
        @click=${this.onClick.bind(this)}
      >
        ${this.open?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?pt.close():pt.open()}};lu([O()],Ps.prototype,"size",void 0);lu([O()],Ps.prototype,"label",void 0);lu([O()],Ps.prototype,"loadingLabel",void 0);lu([oe()],Ps.prototype,"open",void 0);Ps=lu([j("w3m-connect-button")],Ps);const sA=Q`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var Ub=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const h2="scroll-lock";let Ml=class extends F{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=pt.state.open,this.initializeTheming(),me.prefetch(),this.unsubscribe.push(pt.subscribeKey("open",e=>e?this.onOpen():this.onClose())),Ie.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?T`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}onOverlayClick(e){e.target===e.currentTarget&&pt.close()}initializeTheming(){const{themeVariables:e,themeMode:n}=hn.state,r=ke.getColorTheme(n);G_(e,r)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,On.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=h2,e.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${h2}"]`);e&&e.remove()}onAddKeyboardListener(){var n;this.abortController=new AbortController;const e=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",r=>{if(r.key==="Escape")pt.close();else if(r.key==="Tab"){const{tagName:i}=r.target;i&&!i.includes("W3M-")&&!i.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}};Ml.styles=sA;Ub([oe()],Ml.prototype,"open",void 0);Ml=Ub([j("w3m-modal")],Ml);const aA=Object.freeze(Object.defineProperty({__proto__:null,get W3mModal(){return Ml}},Symbol.toStringTag,{value:"Module"}));var ff=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Bl=class extends F{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=Ue.state.caipNetwork,this.connected=De.state.isConnected,this.unsubscribe.push(Ue.subscribeKey("caipNetwork",e=>this.network=e),De.subscribeKey("isConnected",e=>this.connected=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;return T`
      <wui-network-button
        .disabled=${!!this.disabled}
        imageSrc=${fe(ft.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${((e=this.network)==null?void 0:e.name)??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){pt.open({view:"Networks"})}};ff([O({type:Boolean})],Bl.prototype,"disabled",void 0);ff([oe()],Bl.prototype,"network",void 0);ff([oe()],Bl.prototype,"connected",void 0);Bl=ff([j("w3m-network-button")],Bl);const lA=Q`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var jb=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ld=class extends F{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=he.state.view,this.unsubscribe.push(he.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{const n=`${e==null?void 0:e.contentRect.height}px`;this.prevHeight!=="0px"&&(await this.animate([{height:this.prevHeight},{height:n}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=n}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){var e;(e=this.resizeObserver)==null||e.unobserve(this.getWrapper()),this.unsubscribe.forEach(n=>n())}render(){return T`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":return T`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return T`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return T`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"AllWallets":return T`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return T`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return T`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return T`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return T`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return T`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return T`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return T`<w3m-downloads-view></w3m-downloads-view>`;default:return T`<w3m-connect-view></w3m-connect-view>`}}async onViewChange(e){const{history:n}=he.state;let r=-10,i=10;n.length<this.prevHistoryLength&&(r=10,i=-10),this.prevHistoryLength=n.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${i}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("div")}};ld.styles=lA;jb([oe()],ld.prototype,"view",void 0);ld=jb([j("w3m-router")],ld);const uA=Q`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }
`;var Di=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ir=class extends F{constructor(){super(),this.usubscribe=[],this.networkImages=oi.state.networkImages,this.address=De.state.address,this.profileImage=De.state.profileImage,this.profileName=De.state.profileName,this.balance=De.state.balance,this.balanceSymbol=De.state.balanceSymbol,this.network=Ue.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(De.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):pt.close()}),Ue.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){var n,r;if(!this.address)throw new Error("w3m-account-view: No account provided");const e=this.networkImages[((n=this.network)==null?void 0:n.imageId)??""];return T`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${fe(this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?ke.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):ke.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${re.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${fe(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${((r=this.network)==null?void 0:r.name)??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}explorerBtnTemplate(){const{addressExplorerUrl:e}=De.state;return e?T`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=Ue.state,n=e?e.length>1:!1,r=e==null?void 0:e.find(({id:i})=>{var o;return i===((o=this.network)==null?void 0:o.id)});return n||!r}onCopyAddress(){try{this.address&&(re.copyToClopboard(this.address),On.showSuccess("Address copied"))}catch{On.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&he.push("Networks")}async onDisconnect(){try{this.disconecting=!0,await xe.disconnect(),Ie.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),pt.close()}catch{Ie.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),On.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){const{addressExplorerUrl:e}=De.state;e&&re.openHref(e,"_blank")}};ir.styles=uA;Di([oe()],ir.prototype,"address",void 0);Di([oe()],ir.prototype,"profileImage",void 0);Di([oe()],ir.prototype,"profileName",void 0);Di([oe()],ir.prototype,"balance",void 0);Di([oe()],ir.prototype,"balanceSymbol",void 0);Di([oe()],ir.prototype,"network",void 0);Di([oe()],ir.prototype,"disconecting",void 0);ir=Di([j("w3m-account-view")],ir);var Fb=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let h1=class extends F{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=re.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return T`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?T`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:T`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return re.isMobile()?T`
        <wui-icon-box
          size="lg"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){he.push("ConnectingWalletConnect")}};Fb([oe()],h1.prototype,"search",void 0);h1=Fb([j("w3m-all-wallets-view")],h1);const cA=Q`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var zb=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ud=class extends F{constructor(){super(),this.unsubscribe=[],this.connectors=kn.state.connectors,this.unsubscribe.push(kn.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return T`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(re.isMobile())return null;const e=this.connectors.find(n=>n.type==="WALLET_CONNECT");return e?T`
      <wui-list-wallet
        imageSrc=${fe(ft.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:e}=Me.state;return e!=null&&e.length?this.filterOutDuplicateWallets(e).map(r=>T`
        <wui-list-wallet
          imageSrc=${fe(ft.getWalletImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>this.onConnectWallet(r)}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){const{featured:e}=me.state;return e.length?this.filterOutDuplicateWallets(e).map(r=>T`
        <wui-list-wallet
          imageSrc=${fe(ft.getWalletImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>this.onConnectWallet(r)}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return ii.getRecentWallets().map(n=>T`
        <wui-list-wallet
          imageSrc=${fe(ft.getWalletImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnectWallet(n)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(e=>e.type!=="ANNOUNCED"?null:T`
        <wui-list-wallet
          imageSrc=${fe(ft.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagLabel="installed"
          tagVariant="success"
        >
        </wui-list-wallet>
      `)}injectedTemplate(){const e=this.connectors.find(n=>n.type==="ANNOUNCED");return this.connectors.map(n=>n.type!=="INJECTED"||!xe.checkInstalled()?null:T`
        <wui-list-wallet
          imageSrc=${fe(ft.getConnectorImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnector(n)}
          tagLabel=${fe(e?void 0:"installed")}
          tagVariant=${fe(e?void 0:"success")}
        >
        </wui-list-wallet>
      `)}connectorsTemplate(){return this.connectors.map(e=>["WALLET_CONNECT","INJECTED","ANNOUNCED"].includes(e.type)?null:T`
        <wui-list-wallet
          imageSrc=${fe(ft.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){const e=Math.floor(me.state.count/10)*10;return T`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${`${e}+`}
        tagVariant="shade"
      ></wui-list-wallet>
    `}recommendedTemplate(){const{recommended:e}=me.state,{customWallets:n,featuredWalletIds:r}=Me.state,{connectors:i}=kn.state,o=ii.getRecentWallets(),s=i.filter(c=>c.type==="ANNOUNCED");if(r||n||!e.length)return null;const a=s.length+o.length,l=Math.max(0,2-a);return this.filterOutDuplicateWallets(e).slice(0,l).map(c=>T`
        <wui-list-wallet
          imageSrc=${fe(ft.getWalletImage(c))}
          name=${(c==null?void 0:c.name)??"Unknown"}
          @click=${()=>this.onConnectWallet(c)}
        >
        </wui-list-wallet>
      `)}onConnector(e){e.type==="WALLET_CONNECT"?re.isMobile()?he.push("AllWallets"):he.push("ConnectingWalletConnect"):he.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){const{connectors:n}=kn.state,i=ii.getRecentWallets().map(a=>a.id),o=n.map(a=>{var l;return(l=a.info)==null?void 0:l.rdns}).filter(Boolean);return e.filter(a=>!i.includes(a.id)&&!o.includes(a.rdns??void 0))}onAllWallets(){Ie.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),he.push("AllWallets")}onConnectWallet(e){he.push("ConnectingWalletConnect",{wallet:e})}};ud.styles=cA;zb([oe()],ud.prototype,"connectors",void 0);ud=zb([j("w3m-connect-view")],ud);const dA=Q`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var xo=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};class Qt extends F{constructor(){var e,n,r,i;super(),this.wallet=(e=he.state.data)==null?void 0:e.wallet,this.connector=(n=he.state.data)==null?void 0:n.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=ft.getWalletImage(this.wallet)??ft.getConnectorImage(this.connector),this.name=((r=this.wallet)==null?void 0:r.name)??((i=this.connector)==null?void 0:i.name)??"Wallet",this.isRetrying=!1,this.uri=xe.state.wcUri,this.error=xe.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(xe.subscribeKey("wcUri",o=>{var s;this.uri=o,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(s=this.onConnect)==null||s.call(this))}),xe.subscribeKey("wcError",o=>this.error=o),xe.subscribeKey("buffering",o=>this.buffering=o))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){var r;(r=this.onRender)==null||r.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let n=`Continue in ${this.name}`;return this.buffering&&(n="Connecting..."),this.error&&(n="Connection declined"),T`
      <wui-flex
        data-error=${fe(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${fe(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${n}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?T`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy Link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var e;this.error&&!this.showRetry&&(this.showRetry=!0,((e=this.shadowRoot)==null?void 0:e.querySelector("wui-button")).animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){var e,n;this.buffering||(xe.setWcError(!1),this.onRetry?(this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)):(n=this.onConnect)==null||n.call(this))}loaderTemplate(){const e=hn.state.themeVariables["--w3m-border-radius-master"],n=e?parseInt(e.replace("px",""),10):4;return T`<wui-loading-thumbnail radius=${n*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(re.copyToClopboard(this.uri),On.showSuccess("Link copied"))}catch{On.showError("Failed to copy")}}}Qt.styles=dA;xo([oe()],Qt.prototype,"uri",void 0);xo([oe()],Qt.prototype,"error",void 0);xo([oe()],Qt.prototype,"ready",void 0);xo([oe()],Qt.prototype,"showRetry",void 0);xo([oe()],Qt.prototype,"buffering",void 0);xo([O({type:Boolean})],Qt.prototype,"isMobile",void 0);xo([O()],Qt.prototype,"onRetry",void 0);var fA=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const hA={INJECTED:"browser",ANNOUNCED:"browser"};let p2=class extends Qt{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");Ie.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:hA[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(await xe.connectExternal(this.connector),pt.close(),Ie.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(e){Ie.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};p2=fA([j("w3m-connecting-external-view")],p2);var Dg=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let cd=class extends F{constructor(){var e;super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=(e=he.state.data)==null?void 0:e.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),ba.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),T`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):T`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{const{wcPairingExpiry:n}=xe.state;(e||re.isPairingExpired(n))&&(xe.connectWalletConnect(),await xe.state.wcPromise,this.finalizeConnection(),pt.close())}catch(n){Ie.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(n==null?void 0:n.message)??"Unknown"}}),xe.setWcError(!0),re.isAllowedRetry(this.lastRetry)&&(On.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){const{wcLinking:e,recentWallet:n}=xe.state;e&&ii.setWalletConnectDeepLink(e),n&&ii.setWeb3ModalRecent(n),Ie.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:e,desktop_link:n,webapp_link:r,injected:i,rdns:o}=this.wallet,s=i==null?void 0:i.map(({injected_id:v})=>v).filter(Boolean),a=o?[o]:s??[],l=a.length,u=e,c=r,f=xe.checkInstalled(a),p=l&&f,w=n&&!re.isMobile();p&&this.platforms.push("browser"),u&&this.platforms.push(re.isMobile()?"mobile":"qrcode"),c&&this.platforms.push("web"),w&&this.platforms.push("desktop"),!p&&l&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return T`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return T`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return T`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return T`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return T`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return T`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?T`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("div");n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Dg([oe()],cd.prototype,"platform",void 0);Dg([oe()],cd.prototype,"platforms",void 0);cd=Dg([j("w3m-connecting-wc-view")],cd);var pA=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let g2=class extends F{constructor(){var e;super(...arguments),this.wallet=(e=he.state.data)==null?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return T`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return(e=this.wallet)!=null&&e.chrome_store?T`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return(e=this.wallet)!=null&&e.app_store?T`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return(e=this.wallet)!=null&&e.play_store?T`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return(e=this.wallet)!=null&&e.homepage?T`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var e;(e=this.wallet)!=null&&e.chrome_store&&re.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&re.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&re.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&re.openHref(this.wallet.homepage,"_blank")}};g2=pA([j("w3m-downloads-view")],g2);var gA=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const mA="https://walletconnect.com/explorer";let m2=class extends F{render(){return T`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{re.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:n}=me.state,{customWallets:r}=Me.state;return[...n,...r??[],...e].slice(0,4).map(o=>T`
        <wui-list-wallet
          name=${o.name??"Unknown"}
          tagVariant="main"
          imageSrc=${fe(ft.getWalletImage(o))}
          @click=${()=>{re.openHref(o.homepage??mA,"_blank")}}
        ></wui-list-wallet>
      `)}};m2=gA([j("w3m-get-wallet-view")],m2);const wA=Q`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var hf=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let As=class extends F{constructor(){var e;super(),this.network=(e=he.state.data)==null?void 0:e.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1,this.currentNetwork=Ue.state.caipNetwork,this.unsubscribe.push(Ue.subscribeKey("caipNetwork",n=>{var r;(n==null?void 0:n.id)!==((r=this.currentNetwork)==null?void 0:r.id)&&he.goBack()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.error?"Switch declined":"Approve in wallet",n=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return T`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${fe(ft.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:T`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${n}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){var e;this.error&&!this.showRetry&&(this.showRetry=!0,((e=this.shadowRoot)==null?void 0:e.querySelector("wui-button")).animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}async onSwitchNetwork(){try{this.error=!1,this.network&&(await Ue.switchActiveNetwork(this.network),he.goBack())}catch{this.error=!0}}};As.styles=wA;hf([oe()],As.prototype,"showRetry",void 0);hf([oe()],As.prototype,"error",void 0);hf([oe()],As.prototype,"currentNetwork",void 0);As=hf([j("w3m-network-switch-view")],As);var Wb=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let p1=class extends F{constructor(){super(),this.unsubscribe=[],this.caipNetwork=Ue.state.caipNetwork,this.unsubscribe.push(Ue.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return T`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-500" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){Ie.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),he.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:n,supportsAllNetworks:r}=Ue.state,i=e,o=n;return i!=null&&i.length&&(o==null||o.sort((s,a)=>i.indexOf(a.id)-i.indexOf(s.id))),o==null?void 0:o.map(s=>{var a;return T`
        <wui-card-select
          .selected=${((a=this.caipNetwork)==null?void 0:a.id)===s.id}
          imageSrc=${fe(ft.getNetworkImage(s))}
          type="network"
          name=${s.name??s.id}
          @click=${()=>this.onSwitchNetwork(s)}
          .disabled=${!r&&!(i!=null&&i.includes(s.id))}
        ></wui-card-select>
      `})}async onSwitchNetwork(e){const{isConnected:n}=De.state,{approvedCaipNetworkIds:r,supportsAllNetworks:i,caipNetwork:o}=Ue.state;n&&(o==null?void 0:o.id)!==e.id?r!=null&&r.includes(e.id)?await Ue.switchActiveNetwork(e):i&&he.push("SwitchNetwork",{network:e}):n||(Ue.setCaipNetwork(e),he.push("Connect"))}};Wb([oe()],p1.prototype,"caipNetwork",void 0);p1=Wb([j("w3m-networks-view")],p1);var vA=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const yA=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let w2=class extends F{render(){return T`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${yA}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{re.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};w2=vA([j("w3m-what-is-a-network-view")],w2);var bA=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const xA=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let v2=class extends F{render(){return T`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${xA}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a Wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){Ie.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),he.push("GetWallet")}};v2=bA([j("w3m-what-is-a-wallet-view")],v2);const CA=Q`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var uu=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const y2="local-paginator";let go=class extends F{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!me.state.wallets.length,this.wallets=me.state.wallets,this.recommended=me.state.recommended,this.featured=me.state.featured,this.unsubscribe.push(me.subscribeKey("wallets",e=>this.wallets=e),me.subscribeKey("recommended",e=>this.recommended=e),me.subscribeKey("featured",e=>this.featured=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach(n=>n()),(e=this.paginationObserver)==null||e.disconnect()}render(){return T`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-grid");this.initial&&e&&(await me.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,n){return[...Array(e)].map(()=>T`
        <wui-card-select-loader type="wallet" id=${fe(n)}></wui-card-select-loader>
      `)}walletsTemplate(){return[...this.featured,...this.recommended,...this.wallets].map(n=>T`
        <wui-card-select
          imageSrc=${fe(ft.getWalletImage(n))}
          type="wallet"
          name=${n.name}
          @click=${()=>this.onConnectWallet(n)}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:n,featured:r,count:i}=me.state,o=window.innerWidth<352?3:4,s=e.length+n.length;let l=Math.ceil(s/o)*o-s+o;return l-=e.length?r.length%o:0,i===0||[...r,...e,...n].length<i?this.shimmerTemplate(l,y2):null}createPaginationObserver(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector(`#${y2}`);e&&(this.paginationObserver=new IntersectionObserver(([r])=>{if(r!=null&&r.isIntersecting&&!this.initial){const{page:i,count:o,wallets:s}=me.state;s.length<o&&me.fetchWallets({page:i+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){const{connectors:n}=kn.state,r=n.find(({explorerId:i})=>i===e.id);r?he.push("ConnectingExternal",{connector:r}):he.push("ConnectingWalletConnect",{wallet:e})}};go.styles=CA;uu([oe()],go.prototype,"initial",void 0);uu([oe()],go.prototype,"wallets",void 0);uu([oe()],go.prototype,"recommended",void 0);uu([oe()],go.prototype,"featured",void 0);go=uu([j("w3m-all-wallets-list")],go);const EA=Q`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var Tg=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Ll=class extends F{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?T`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await me.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:e}=me.state;return e.length?T`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${e.map(n=>T`
            <wui-card-select
              imageSrc=${fe(ft.getWalletImage(n))}
              type="wallet"
              name=${n.name}
              @click=${()=>this.onConnectWallet(n)}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:T`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconcolor="fg-200"
            backgroundcolor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const{connectors:n}=kn.state,r=n.find(({explorerId:i})=>i===e.id);r?he.push("ConnectingExternal",{connector:r}):he.push("ConnectingWalletConnect",{wallet:e})}};Ll.styles=EA;Tg([oe()],Ll.prototype,"loading",void 0);Tg([O()],Ll.prototype,"query",void 0);Ll=Tg([j("w3m-all-wallets-search")],Ll);var pf=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Ul=class extends F{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(xe.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return T`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(n=>n==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:n==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:n==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:n==="web"?{label:"Webapp",icon:"browser",platform:"web"}:n==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:n})=>n),e}onTabChange(e){var r;const n=this.platformTabs[e];n&&((r=this.onSelectPlatfrom)==null||r.call(this,n))}};pf([O({type:Array})],Ul.prototype,"platforms",void 0);pf([O()],Ul.prototype,"onSelectPlatfrom",void 0);pf([oe()],Ul.prototype,"buffering",void 0);Ul=pf([j("w3m-connecting-header")],Ul);var _A=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let b2=class extends Qt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),Ie.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=kn.state,n=e.find(i=>{var o,s;return i.type==="ANNOUNCED"&&((o=i.info)==null?void 0:o.rdns)===((s=this.wallet)==null?void 0:s.rdns)}),r=e.find(i=>i.type==="INJECTED");n?await xe.connectExternal(n):r&&await xe.connectExternal(r),pt.close(),Ie.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(e){Ie.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};b2=_A([j("w3m-connecting-wc-browser")],b2);var SA=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let x2=class extends Qt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),Ie.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{var e;(e=this.onConnect)==null||e.call(this)},200))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:n,name:r}=this.wallet,{redirect:i,href:o}=re.formatNativeUrl(n,this.uri);xe.setWcLinking({name:r,href:o}),xe.setRecentWallet(this.wallet),re.openHref(i,"_self")}catch{this.error=!0}}};x2=SA([j("w3m-connecting-wc-desktop")],x2);var $A=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let C2=class extends Qt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),Ie.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:n,name:r}=this.wallet,{redirect:i,href:o}=re.formatNativeUrl(n,this.uri);xe.setWcLinking({name:r,href:o}),xe.setRecentWallet(this.wallet),re.openHref(i,"_self")}catch{this.error=!0}}onBuffering(){const e=re.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&e&&(xe.setBuffering(!0),setTimeout(()=>{xe.setBuffering(!1)},5e3))}};C2=$A([j("w3m-connecting-wc-mobile")],C2);const PA=Q`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var AA=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let g1=class extends Qt{constructor(){var e;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),Ie.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((e=this.wallet)==null?void 0:e.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),T`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>

        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy Link
        </wui-link>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,n=this.wallet?this.wallet.name:void 0;return xe.setWcLinking(void 0),xe.setRecentWallet(this.wallet),T`<wui-qr-code
      size=${e}
      theme=${hn.state.themeMode}
      uri=${this.uri}
      imageSrc=${fe(ft.getWalletImage(this.wallet))}
      alt=${fe(n)}
    ></wui-qr-code>`}};g1.styles=PA;g1=AA([j("w3m-connecting-wc-qrcode")],g1);var DA=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let E2=class extends F{constructor(){var e;if(super(),this.wallet=(e=he.state.data)==null?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");Ie.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return T`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${fe(ft.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};E2=DA([j("w3m-connecting-wc-unsupported")],E2);var TA=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let _2=class extends Qt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",Ie.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:n,name:r}=this.wallet,{redirect:i,href:o}=re.formatUniversalUrl(n,this.uri);xe.setWcLinking({name:r,href:o}),xe.setRecentWallet(this.wallet),re.openHref(i,"_blank")}catch{this.error=!0}}};_2=TA([j("w3m-connecting-wc-web")],_2);const kA=Q`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var gf=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};function S2(){var i,o,s,a,l,u;const t=(o=(i=he.state.data)==null?void 0:i.connector)==null?void 0:o.name,e=(a=(s=he.state.data)==null?void 0:s.wallet)==null?void 0:a.name,n=(u=(l=he.state.data)==null?void 0:l.network)==null?void 0:u.name,r=e??t;return{Connect:"Connect Wallet",Account:void 0,ConnectingExternal:r??"Connect Wallet",ConnectingWalletConnect:r??"WalletConnect",Networks:"Choose Network",SwitchNetwork:n??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a Wallet",Downloads:r?`Get ${r}`:"Downloads"}}let Ds=class extends F{constructor(){super(),this.unsubscribe=[],this.heading=S2()[he.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(he.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),xe.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return T`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${pt.close}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){Ie.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),he.push("WhatIsAWallet")}titleTemplate(){return T`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:e}=he.state,n=e==="Connect";return this.showBack?T`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${he.goBack}
      ></wui-icon-link>`:T`<wui-icon-link
      data-hidden=${!n}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?T`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("wui-text");if(n){const i=S2()[e];await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=i,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){var r;const{history:e}=he.state,n=(r=this.shadowRoot)==null?void 0:r.querySelector("#dynamic");e.length>1&&!this.showBack&&n?(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Ds.styles=[kA];gf([oe()],Ds.prototype,"heading",void 0);gf([oe()],Ds.prototype,"buffering",void 0);gf([oe()],Ds.prototype,"showBack",void 0);Ds=gf([j("w3m-header")],Ds);var Hb=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let m1=class extends F{constructor(){super(...arguments),this.data=[]}render(){return T`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>T`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(n=>T`<wui-visual name=${n}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};Hb([O({type:Array})],m1.prototype,"data",void 0);m1=Hb([j("w3m-help-widget")],m1);const OA=Q`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 600;
  }
`;var IA=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let w1=class extends F{render(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=Me.state;return!e&&!n?null:T`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-500" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=Me.state;return e&&n?"and":""}termsTemplate(){const{termsConditionsUrl:e}=Me.state;return e?T`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=Me.state;return e?T`<a href=${e}>Privacy Policy</a>`:null}};w1.styles=[OA];w1=IA([j("w3m-legal-footer")],w1);const NA=Q`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var Vb=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let dd=class extends F{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:n,play_store:r,chrome_store:i,homepage:o}=this.wallet,s=re.isMobile(),a=re.isIos(),l=re.isAndroid(),u=[n,r,o,i].filter(Boolean).length>1,c=ke.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return u&&!s?T`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${()=>he.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!u&&o?T`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:n&&a?T`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&l?T`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&re.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&re.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&re.openHref(this.wallet.homepage,"_blank")}};dd.styles=[NA];Vb([O({type:Object})],dd.prototype,"wallet",void 0);dd=Vb([j("w3m-mobile-download-links")],dd);const RA=Q`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
  }
`;var qb=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const MA={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let fd=class extends F{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=On.state.open,this.unsubscribe.push(On.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:n}=On.state,r=MA[n];return T`
      <wui-snackbar
        message=${e}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>On.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};fd.styles=RA;qb([oe()],fd.prototype,"open",void 0);fd=qb([j("w3m-snackbar")],fd);let $2=!1;class BA{constructor(e){this.initPromise=void 0,this.setIsConnected=n=>{De.setIsConnected(n)},this.setCaipAddress=n=>{De.setCaipAddress(n)},this.setBalance=(n,r)=>{De.setBalance(n,r)},this.setProfileName=n=>{De.setProfileName(n)},this.setProfileImage=n=>{De.setProfileImage(n)},this.resetAccount=()=>{De.resetAccount()},this.setCaipNetwork=n=>{Ue.setCaipNetwork(n)},this.getCaipNetwork=()=>Ue.state.caipNetwork,this.setRequestedCaipNetworks=n=>{Ue.setRequestedCaipNetworks(n)},this.getApprovedCaipNetworksData=()=>Ue.getApprovedCaipNetworksData(),this.resetNetwork=()=>{Ue.resetNetwork()},this.setConnectors=n=>{kn.setConnectors(n)},this.addConnector=n=>{kn.addConnector(n)},this.getConnectors=()=>kn.getConnectors(),this.resetWcConnection=()=>{xe.resetWcConnection()},this.fetchIdentity=n=>d_.fetchIdentity(n),this.setAddressExplorerUrl=n=>{De.setAddressExplorerUrl(n)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),pt.open(e)}async close(){await this.initOrContinue(),pt.close()}getThemeMode(){return hn.state.themeMode}getThemeVariables(){return hn.state.themeVariables}setThemeMode(e){hn.setThemeMode(e),ib(hn.state.themeMode)}setThemeVariables(e){hn.setThemeVariables(e),K_(hn.state.themeVariables)}subscribeTheme(e){return hn.subscribe(e)}getState(){return{...hs.state}}subscribeState(e){return hs.subscribe(e)}getEvent(){return{...Ie.state}}subscribeEvents(e){return Ie.subscribe(e)}initControllers(e){Ue.setClient(e.networkControllerClient),Ue.setDefaultCaipNetwork(e.defaultChain),Me.setProjectId(e.projectId),Me.setIncludeWalletIds(e.includeWalletIds),Me.setExcludeWalletIds(e.excludeWalletIds),Me.setFeaturedWalletIds(e.featuredWalletIds),Me.setTokens(e.tokens),Me.setTermsConditionsUrl(e.termsConditionsUrl),Me.setPrivacyPolicyUrl(e.privacyPolicyUrl),Me.setCustomWallets(e.customWallets),Me.setEnableAnalytics(e.enableAnalytics),Me.setSdkVersion(e._sdkVersion),xe.setClient(e.connectionControllerClient),e.themeMode&&hn.setThemeMode(e.themeMode),e.themeVariables&&hn.setThemeVariables(e.themeVariables)}async initOrContinue(){return!this.initPromise&&!$2&&re.isClient()&&($2=!0,this.initPromise=new Promise(async e=>{await Promise.all([ds(()=>import("./index-fb4069a7.js"),[]),ds(()=>Promise.resolve().then(()=>aA),void 0)]);const n=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",n),e()})),this.initPromise}}const qi="walletConnect",kg="injected",Og="coinbaseWallet",Ig="safe",Ng="ledger",To="eip6963",Gn="eip155",LA="wallet_addEthereumChain",UA="wagmi.wallet",jA="eip6963:announceProvider",FA="eip6963:requestProvider",Gb="3.1.0",v1={1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},zA={[Og]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[Ig]:"461db637-8616-43ce-035a-d89b8a1d5800",[Ng]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[qi]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[kg]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},WA={[Og]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[Ig]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[Ng]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},HA={[kg]:"Browser Wallet",[qi]:"WalletConnect",[Og]:"Coinbase",[Ng]:"Ledger",[Ig]:"Safe"},VA={[kg]:"INJECTED",[qi]:"WALLET_CONNECT",[To]:"ANNOUNCED"};function qA(t){if(t)return{id:`${Gn}:${t.id}`,name:t.name,imageId:v1[t.id]}}function GA(t){if(!t)return;const e={};return Object.entries(t).forEach(([n,r])=>{e[`${Gn}:${n}`]=r}),e}function da(t){return t?Number(t.split(":")[1]):void 0}class KA extends BA{constructor(e){const{wagmiConfig:n,chains:r,defaultChain:i,tokens:o,_sdkVersion:s,...a}=e;if(!n)throw new Error("web3modal:constructor - wagmiConfig is undefined");if(!a.projectId)throw new Error("web3modal:constructor - projectId is undefined");if(!n.connectors.find(c=>c.id===qi))throw new Error("web3modal:constructor - WalletConnectConnector is required");const l={switchCaipNetwork:async c=>{const f=da(c==null?void 0:c.id);f&&await L9({chainId:f})},async getApprovedCaipNetworksData(){var f,p,w,v;const c=localStorage.getItem(UA);if(c!=null&&c.includes(qi)){const C=n.connectors.find(x=>x.id===qi);if(!C)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");const b=(p=(f=(await C.getProvider()).signer)==null?void 0:f.session)==null?void 0:p.namespaces,g=(w=b==null?void 0:b[Gn])==null?void 0:w.methods,y=(v=b==null?void 0:b[Gn])==null?void 0:v.chains;return{supportsAllNetworks:g==null?void 0:g.includes(LA),approvedCaipNetworkIds:y}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},u={connectWalletConnect:async c=>{var w;const f=n.connectors.find(v=>v.id===qi);if(!f)throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");f.on("message",v=>{v.type==="display_uri"&&(c(v.data),f.removeAllListeners())});const p=da((w=this.getCaipNetwork())==null?void 0:w.id);await Mw({connector:f,chainId:p})},connectExternal:async({id:c,provider:f,info:p})=>{var C,E;const w=n.connectors.find(b=>b.id===c);if(!w)throw new Error("connectionControllerClient:connectExternal - connector is undefined");f&&p&&w.id===To&&((C=w.setEip6963Wallet)==null||C.call(w,{provider:f,info:p}));const v=da((E=this.getCaipNetwork())==null?void 0:E.id);await Mw({connector:w,chainId:v})},checkInstalled:c=>{const f=this.getConnectors().filter(w=>w.type==="ANNOUNCED"),p=this.getConnectors().find(w=>w.type==="INJECTED");return c?f.length&&c.some(v=>f.some(C=>{var E;return((E=C.info)==null?void 0:E.rdns)===v}))?!0:p&&window!=null&&window.ethereum?c.some(w=>{var v;return!!((v=window.ethereum)!=null&&v[String(w)])}):!1:!!window.ethereum},disconnect:k9};super({networkControllerClient:l,connectionControllerClient:u,defaultChain:qA(i),tokens:GA(o),_sdkVersion:s??`html-wagmi-${Gb}`,...a}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.syncRequestedNetworks(r),this.syncConnectors(n),this.listenConnectors(n),U9(()=>this.syncAccount()),j9(()=>this.syncNetwork())}getState(){const e=super.getState();return{...e,selectedNetworkId:da(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState(n=>e({...n,selectedNetworkId:da(n.selectedNetworkId)}))}syncRequestedNetworks(e){const n=e==null?void 0:e.map(r=>{var i,o;return{id:`${Gn}:${r.id}`,name:r.name,imageId:v1[r.id],imageUrl:(o=(i=this.options)==null?void 0:i.chainImages)==null?void 0:o[r.id]}});this.setRequestedCaipNetworks(n??[])}async syncAccount(){const{address:e,isConnected:n}=e1(),{chain:r}=t1();if(this.resetAccount(),n&&e&&r){const i=`${Gn}:${r.id}:${e}`;this.setIsConnected(n),this.setCaipAddress(i),await Promise.all([this.syncProfile(e),this.syncBalance(e,r),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!n&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){var i,o,s,a;const{address:e,isConnected:n}=e1(),{chain:r}=t1();if(r){const l=String(r.id),u=`${Gn}:${l}`;if(this.setCaipNetwork({id:u,name:r.name,imageId:v1[r.id],imageUrl:(o=(i=this.options)==null?void 0:i.chainImages)==null?void 0:o[r.id]}),n&&e){const c=`${Gn}:${r.id}:${e}`;if(this.setCaipAddress(c),(a=(s=r.blockExplorers)==null?void 0:s.default)!=null&&a.url){const f=`${r.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(f)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&await this.syncBalance(e,r)}}}async syncProfile(e){try{const{name:n,avatar:r}=await this.fetchIdentity({caipChainId:`${Gn}:${Ia.id}`,address:e});this.setProfileName(n),this.setProfileImage(r)}catch{const n=await z9({address:e,chainId:Ia.id});if(n){this.setProfileName(n);const r=await F9({name:n,chainId:Ia.id});r&&this.setProfileImage(r)}}}async syncBalance(e,n){var i,o,s;const r=await B9({address:e,chainId:n.id,token:(s=(o=(i=this.options)==null?void 0:i.tokens)==null?void 0:o[n.id])==null?void 0:s.address});this.setBalance(r.formatted,r.symbol)}syncConnectors(e){const n=[];e.connectors.forEach(({id:r,name:i})=>{var o,s;r!==To&&n.push({id:r,explorerId:WA[r],imageId:zA[r],imageUrl:(s=(o=this.options)==null?void 0:o.connectorImages)==null?void 0:s[r],name:HA[r]??i,type:VA[r]??"EXTERNAL"})}),this.setConnectors(n)}listenConnectors(e){const n=e.connectors.find(r=>r.id===To);typeof window<"u"&&n&&(window.addEventListener(jA,r=>{var i,o;if(r.detail){const{info:s,provider:a}=r.detail;this.addConnector({id:To,type:"ANNOUNCED",imageUrl:s.icon??((o=(i=this.options)==null?void 0:i.connectorImages)==null?void 0:o[To]),name:s.name,provider:a,info:s}),n.isAuthorized({info:s,provider:a})}}),window.dispatchEvent(new Event(FA)))}}var Fu=globalThis&&globalThis.__classPrivateFieldSet||function(t,e,n,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(t,n):i?i.value=n:e.set(t,n),n},zu=globalThis&&globalThis.__classPrivateFieldGet||function(t,e,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(t):r?r.value:e.get(t)},lc,Mr;const T0="connectedRdns";class ZA extends ag{constructor(e){super({chains:e.chains,options:{shimDisconnect:!0}}),this.id="eip6963",this.name="EIP6963",lc.set(this,void 0),Mr.set(this,void 0),Fu(this,lc,this.options.getProvider(),"f")}async connect(e){var r;const n=await super.connect(e);return zu(this,Mr,"f")&&((r=this.storage)==null||r.setItem(T0,zu(this,Mr,"f").info.rdns)),n}async disconnect(){var e;await super.disconnect(),(e=this.storage)==null||e.removeItem(T0),Fu(this,Mr,void 0,"f")}async isAuthorized(e){var r;const n=(r=this.storage)==null?void 0:r.getItem(T0);if(n){if(!e||n!==e.info.rdns)return!0;Fu(this,Mr,e,"f")}return super.isAuthorized()}async getProvider(){var e;return Promise.resolve(((e=zu(this,Mr,"f"))==null?void 0:e.provider)??zu(this,lc,"f"))}setEip6963Wallet(e){Fu(this,Mr,e,"f")}}lc=new WeakMap,Mr=new WeakMap;var Kb={},mf={};mf.byteLength=XA;mf.toByteArray=eD;mf.fromByteArray=rD;var Zn=[],pn=[],QA=typeof Uint8Array<"u"?Uint8Array:Array,k0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var $o=0,YA=k0.length;$o<YA;++$o)Zn[$o]=k0[$o],pn[k0.charCodeAt($o)]=$o;pn["-".charCodeAt(0)]=62;pn["_".charCodeAt(0)]=63;function Zb(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");n===-1&&(n=e);var r=n===e?0:4-n%4;return[n,r]}function XA(t){var e=Zb(t),n=e[0],r=e[1];return(n+r)*3/4-r}function JA(t,e,n){return(e+n)*3/4-n}function eD(t){var e,n=Zb(t),r=n[0],i=n[1],o=new QA(JA(t,r,i)),s=0,a=i>0?r-4:r,l;for(l=0;l<a;l+=4)e=pn[t.charCodeAt(l)]<<18|pn[t.charCodeAt(l+1)]<<12|pn[t.charCodeAt(l+2)]<<6|pn[t.charCodeAt(l+3)],o[s++]=e>>16&255,o[s++]=e>>8&255,o[s++]=e&255;return i===2&&(e=pn[t.charCodeAt(l)]<<2|pn[t.charCodeAt(l+1)]>>4,o[s++]=e&255),i===1&&(e=pn[t.charCodeAt(l)]<<10|pn[t.charCodeAt(l+1)]<<4|pn[t.charCodeAt(l+2)]>>2,o[s++]=e>>8&255,o[s++]=e&255),o}function tD(t){return Zn[t>>18&63]+Zn[t>>12&63]+Zn[t>>6&63]+Zn[t&63]}function nD(t,e,n){for(var r,i=[],o=e;o<n;o+=3)r=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(t[o+2]&255),i.push(tD(r));return i.join("")}function rD(t){for(var e,n=t.length,r=n%3,i=[],o=16383,s=0,a=n-r;s<a;s+=o)i.push(nD(t,s,s+o>a?a:s+o));return r===1?(e=t[n-1],i.push(Zn[e>>2]+Zn[e<<4&63]+"==")):r===2&&(e=(t[n-2]<<8)+t[n-1],i.push(Zn[e>>10]+Zn[e>>4&63]+Zn[e<<2&63]+"=")),i.join("")}var Rg={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */Rg.read=function(t,e,n,r,i){var o,s,a=i*8-r-1,l=(1<<a)-1,u=l>>1,c=-7,f=n?i-1:0,p=n?-1:1,w=t[e+f];for(f+=p,o=w&(1<<-c)-1,w>>=-c,c+=a;c>0;o=o*256+t[e+f],f+=p,c-=8);for(s=o&(1<<-c)-1,o>>=-c,c+=r;c>0;s=s*256+t[e+f],f+=p,c-=8);if(o===0)o=1-u;else{if(o===l)return s?NaN:(w?-1:1)*(1/0);s=s+Math.pow(2,r),o=o-u}return(w?-1:1)*s*Math.pow(2,o-r)};Rg.write=function(t,e,n,r,i,o){var s,a,l,u=o*8-i-1,c=(1<<u)-1,f=c>>1,p=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,w=r?0:o-1,v=r?1:-1,C=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=c):(s=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-s))<1&&(s--,l*=2),s+f>=1?e+=p/l:e+=p*Math.pow(2,1-f),e*l>=2&&(s++,l/=2),s+f>=c?(a=0,s=c):s+f>=1?(a=(e*l-1)*Math.pow(2,i),s=s+f):(a=e*Math.pow(2,f-1)*Math.pow(2,i),s=0));i>=8;t[n+w]=a&255,w+=v,a/=256,i-=8);for(s=s<<i|a,u+=i;u>0;t[n+w]=s&255,w+=v,s/=256,u-=8);t[n+w-v]|=C*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(t){const e=mf,n=Rg,r=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;t.Buffer=a,t.SlowBuffer=g,t.INSPECT_MAX_BYTES=50;const i=2147483647;t.kMaxLength=i,a.TYPED_ARRAY_SUPPORT=o(),!a.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function o(){try{const S=new Uint8Array(1),h={foo:function(){return 42}};return Object.setPrototypeOf(h,Uint8Array.prototype),Object.setPrototypeOf(S,h),S.foo()===42}catch{return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function s(S){if(S>i)throw new RangeError('The value "'+S+'" is invalid for option "size"');const h=new Uint8Array(S);return Object.setPrototypeOf(h,a.prototype),h}function a(S,h,m){if(typeof S=="number"){if(typeof h=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return f(S)}return l(S,h,m)}a.poolSize=8192;function l(S,h,m){if(typeof S=="string")return p(S,h);if(ArrayBuffer.isView(S))return v(S);if(S==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof S);if(Pe(S,ArrayBuffer)||S&&Pe(S.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Pe(S,SharedArrayBuffer)||S&&Pe(S.buffer,SharedArrayBuffer)))return C(S,h,m);if(typeof S=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const A=S.valueOf&&S.valueOf();if(A!=null&&A!==S)return a.from(A,h,m);const D=E(S);if(D)return D;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof S[Symbol.toPrimitive]=="function")return a.from(S[Symbol.toPrimitive]("string"),h,m);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof S)}a.from=function(S,h,m){return l(S,h,m)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function u(S){if(typeof S!="number")throw new TypeError('"size" argument must be of type number');if(S<0)throw new RangeError('The value "'+S+'" is invalid for option "size"')}function c(S,h,m){return u(S),S<=0?s(S):h!==void 0?typeof m=="string"?s(S).fill(h,m):s(S).fill(h):s(S)}a.alloc=function(S,h,m){return c(S,h,m)};function f(S){return u(S),s(S<0?0:b(S)|0)}a.allocUnsafe=function(S){return f(S)},a.allocUnsafeSlow=function(S){return f(S)};function p(S,h){if((typeof h!="string"||h==="")&&(h="utf8"),!a.isEncoding(h))throw new TypeError("Unknown encoding: "+h);const m=y(S,h)|0;let A=s(m);const D=A.write(S,h);return D!==m&&(A=A.slice(0,D)),A}function w(S){const h=S.length<0?0:b(S.length)|0,m=s(h);for(let A=0;A<h;A+=1)m[A]=S[A]&255;return m}function v(S){if(Pe(S,Uint8Array)){const h=new Uint8Array(S);return C(h.buffer,h.byteOffset,h.byteLength)}return w(S)}function C(S,h,m){if(h<0||S.byteLength<h)throw new RangeError('"offset" is outside of buffer bounds');if(S.byteLength<h+(m||0))throw new RangeError('"length" is outside of buffer bounds');let A;return h===void 0&&m===void 0?A=new Uint8Array(S):m===void 0?A=new Uint8Array(S,h):A=new Uint8Array(S,h,m),Object.setPrototypeOf(A,a.prototype),A}function E(S){if(a.isBuffer(S)){const h=b(S.length)|0,m=s(h);return m.length===0||S.copy(m,0,0,h),m}if(S.length!==void 0)return typeof S.length!="number"||Ye(S.length)?s(0):w(S);if(S.type==="Buffer"&&Array.isArray(S.data))return w(S.data)}function b(S){if(S>=i)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i.toString(16)+" bytes");return S|0}function g(S){return+S!=S&&(S=0),a.alloc(+S)}a.isBuffer=function(h){return h!=null&&h._isBuffer===!0&&h!==a.prototype},a.compare=function(h,m){if(Pe(h,Uint8Array)&&(h=a.from(h,h.offset,h.byteLength)),Pe(m,Uint8Array)&&(m=a.from(m,m.offset,m.byteLength)),!a.isBuffer(h)||!a.isBuffer(m))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(h===m)return 0;let A=h.length,D=m.length;for(let N=0,R=Math.min(A,D);N<R;++N)if(h[N]!==m[N]){A=h[N],D=m[N];break}return A<D?-1:D<A?1:0},a.isEncoding=function(h){switch(String(h).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(h,m){if(!Array.isArray(h))throw new TypeError('"list" argument must be an Array of Buffers');if(h.length===0)return a.alloc(0);let A;if(m===void 0)for(m=0,A=0;A<h.length;++A)m+=h[A].length;const D=a.allocUnsafe(m);let N=0;for(A=0;A<h.length;++A){let R=h[A];if(Pe(R,Uint8Array))N+R.length>D.length?(a.isBuffer(R)||(R=a.from(R)),R.copy(D,N)):Uint8Array.prototype.set.call(D,R,N);else if(a.isBuffer(R))R.copy(D,N);else throw new TypeError('"list" argument must be an Array of Buffers');N+=R.length}return D};function y(S,h){if(a.isBuffer(S))return S.length;if(ArrayBuffer.isView(S)||Pe(S,ArrayBuffer))return S.byteLength;if(typeof S!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof S);const m=S.length,A=arguments.length>2&&arguments[2]===!0;if(!A&&m===0)return 0;let D=!1;for(;;)switch(h){case"ascii":case"latin1":case"binary":return m;case"utf8":case"utf-8":return Or(S).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return m*2;case"hex":return m>>>1;case"base64":return rt(S).length;default:if(D)return A?-1:Or(S).length;h=(""+h).toLowerCase(),D=!0}}a.byteLength=y;function x(S,h,m){let A=!1;if((h===void 0||h<0)&&(h=0),h>this.length||((m===void 0||m>this.length)&&(m=this.length),m<=0)||(m>>>=0,h>>>=0,m<=h))return"";for(S||(S="utf8");;)switch(S){case"hex":return q(this,h,m);case"utf8":case"utf-8":return te(this,h,m);case"ascii":return z(this,h,m);case"latin1":case"binary":return B(this,h,m);case"base64":return G(this,h,m);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Y(this,h,m);default:if(A)throw new TypeError("Unknown encoding: "+S);S=(S+"").toLowerCase(),A=!0}}a.prototype._isBuffer=!0;function _(S,h,m){const A=S[h];S[h]=S[m],S[m]=A}a.prototype.swap16=function(){const h=this.length;if(h%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let m=0;m<h;m+=2)_(this,m,m+1);return this},a.prototype.swap32=function(){const h=this.length;if(h%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let m=0;m<h;m+=4)_(this,m,m+3),_(this,m+1,m+2);return this},a.prototype.swap64=function(){const h=this.length;if(h%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let m=0;m<h;m+=8)_(this,m,m+7),_(this,m+1,m+6),_(this,m+2,m+5),_(this,m+3,m+4);return this},a.prototype.toString=function(){const h=this.length;return h===0?"":arguments.length===0?te(this,0,h):x.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(h){if(!a.isBuffer(h))throw new TypeError("Argument must be a Buffer");return this===h?!0:a.compare(this,h)===0},a.prototype.inspect=function(){let h="";const m=t.INSPECT_MAX_BYTES;return h=this.toString("hex",0,m).replace(/(.{2})/g,"$1 ").trim(),this.length>m&&(h+=" ... "),"<Buffer "+h+">"},r&&(a.prototype[r]=a.prototype.inspect),a.prototype.compare=function(h,m,A,D,N){if(Pe(h,Uint8Array)&&(h=a.from(h,h.offset,h.byteLength)),!a.isBuffer(h))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof h);if(m===void 0&&(m=0),A===void 0&&(A=h?h.length:0),D===void 0&&(D=0),N===void 0&&(N=this.length),m<0||A>h.length||D<0||N>this.length)throw new RangeError("out of range index");if(D>=N&&m>=A)return 0;if(D>=N)return-1;if(m>=A)return 1;if(m>>>=0,A>>>=0,D>>>=0,N>>>=0,this===h)return 0;let R=N-D,ee=A-m;const de=Math.min(R,ee),Le=this.slice(D,N),Ve=h.slice(m,A);for(let Ae=0;Ae<de;++Ae)if(Le[Ae]!==Ve[Ae]){R=Le[Ae],ee=Ve[Ae];break}return R<ee?-1:ee<R?1:0};function $(S,h,m,A,D){if(S.length===0)return-1;if(typeof m=="string"?(A=m,m=0):m>2147483647?m=2147483647:m<-2147483648&&(m=-2147483648),m=+m,Ye(m)&&(m=D?0:S.length-1),m<0&&(m=S.length+m),m>=S.length){if(D)return-1;m=S.length-1}else if(m<0)if(D)m=0;else return-1;if(typeof h=="string"&&(h=a.from(h,A)),a.isBuffer(h))return h.length===0?-1:d(S,h,m,A,D);if(typeof h=="number")return h=h&255,typeof Uint8Array.prototype.indexOf=="function"?D?Uint8Array.prototype.indexOf.call(S,h,m):Uint8Array.prototype.lastIndexOf.call(S,h,m):d(S,[h],m,A,D);throw new TypeError("val must be string, number or Buffer")}function d(S,h,m,A,D){let N=1,R=S.length,ee=h.length;if(A!==void 0&&(A=String(A).toLowerCase(),A==="ucs2"||A==="ucs-2"||A==="utf16le"||A==="utf-16le")){if(S.length<2||h.length<2)return-1;N=2,R/=2,ee/=2,m/=2}function de(Ve,Ae){return N===1?Ve[Ae]:Ve.readUInt16BE(Ae*N)}let Le;if(D){let Ve=-1;for(Le=m;Le<R;Le++)if(de(S,Le)===de(h,Ve===-1?0:Le-Ve)){if(Ve===-1&&(Ve=Le),Le-Ve+1===ee)return Ve*N}else Ve!==-1&&(Le-=Le-Ve),Ve=-1}else for(m+ee>R&&(m=R-ee),Le=m;Le>=0;Le--){let Ve=!0;for(let Ae=0;Ae<ee;Ae++)if(de(S,Le+Ae)!==de(h,Ae)){Ve=!1;break}if(Ve)return Le}return-1}a.prototype.includes=function(h,m,A){return this.indexOf(h,m,A)!==-1},a.prototype.indexOf=function(h,m,A){return $(this,h,m,A,!0)},a.prototype.lastIndexOf=function(h,m,A){return $(this,h,m,A,!1)};function P(S,h,m,A){m=Number(m)||0;const D=S.length-m;A?(A=Number(A),A>D&&(A=D)):A=D;const N=h.length;A>N/2&&(A=N/2);let R;for(R=0;R<A;++R){const ee=parseInt(h.substr(R*2,2),16);if(Ye(ee))return R;S[m+R]=ee}return R}function k(S,h,m,A){return Ke(Or(h,S.length-m),S,m,A)}function I(S,h,m,A){return Ke(Zs(h),S,m,A)}function M(S,h,m,A){return Ke(rt(h),S,m,A)}function W(S,h,m,A){return Ke(mu(h,S.length-m),S,m,A)}a.prototype.write=function(h,m,A,D){if(m===void 0)D="utf8",A=this.length,m=0;else if(A===void 0&&typeof m=="string")D=m,A=this.length,m=0;else if(isFinite(m))m=m>>>0,isFinite(A)?(A=A>>>0,D===void 0&&(D="utf8")):(D=A,A=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const N=this.length-m;if((A===void 0||A>N)&&(A=N),h.length>0&&(A<0||m<0)||m>this.length)throw new RangeError("Attempt to write outside buffer bounds");D||(D="utf8");let R=!1;for(;;)switch(D){case"hex":return P(this,h,m,A);case"utf8":case"utf-8":return k(this,h,m,A);case"ascii":case"latin1":case"binary":return I(this,h,m,A);case"base64":return M(this,h,m,A);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return W(this,h,m,A);default:if(R)throw new TypeError("Unknown encoding: "+D);D=(""+D).toLowerCase(),R=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function G(S,h,m){return h===0&&m===S.length?e.fromByteArray(S):e.fromByteArray(S.slice(h,m))}function te(S,h,m){m=Math.min(S.length,m);const A=[];let D=h;for(;D<m;){const N=S[D];let R=null,ee=N>239?4:N>223?3:N>191?2:1;if(D+ee<=m){let de,Le,Ve,Ae;switch(ee){case 1:N<128&&(R=N);break;case 2:de=S[D+1],(de&192)===128&&(Ae=(N&31)<<6|de&63,Ae>127&&(R=Ae));break;case 3:de=S[D+1],Le=S[D+2],(de&192)===128&&(Le&192)===128&&(Ae=(N&15)<<12|(de&63)<<6|Le&63,Ae>2047&&(Ae<55296||Ae>57343)&&(R=Ae));break;case 4:de=S[D+1],Le=S[D+2],Ve=S[D+3],(de&192)===128&&(Le&192)===128&&(Ve&192)===128&&(Ae=(N&15)<<18|(de&63)<<12|(Le&63)<<6|Ve&63,Ae>65535&&Ae<1114112&&(R=Ae))}}R===null?(R=65533,ee=1):R>65535&&(R-=65536,A.push(R>>>10&1023|55296),R=56320|R&1023),A.push(R),D+=ee}return X(A)}const ne=4096;function X(S){const h=S.length;if(h<=ne)return String.fromCharCode.apply(String,S);let m="",A=0;for(;A<h;)m+=String.fromCharCode.apply(String,S.slice(A,A+=ne));return m}function z(S,h,m){let A="";m=Math.min(S.length,m);for(let D=h;D<m;++D)A+=String.fromCharCode(S[D]&127);return A}function B(S,h,m){let A="";m=Math.min(S.length,m);for(let D=h;D<m;++D)A+=String.fromCharCode(S[D]);return A}function q(S,h,m){const A=S.length;(!h||h<0)&&(h=0),(!m||m<0||m>A)&&(m=A);let D="";for(let N=h;N<m;++N)D+=at[S[N]];return D}function Y(S,h,m){const A=S.slice(h,m);let D="";for(let N=0;N<A.length-1;N+=2)D+=String.fromCharCode(A[N]+A[N+1]*256);return D}a.prototype.slice=function(h,m){const A=this.length;h=~~h,m=m===void 0?A:~~m,h<0?(h+=A,h<0&&(h=0)):h>A&&(h=A),m<0?(m+=A,m<0&&(m=0)):m>A&&(m=A),m<h&&(m=h);const D=this.subarray(h,m);return Object.setPrototypeOf(D,a.prototype),D};function Z(S,h,m){if(S%1!==0||S<0)throw new RangeError("offset is not uint");if(S+h>m)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(h,m,A){h=h>>>0,m=m>>>0,A||Z(h,m,this.length);let D=this[h],N=1,R=0;for(;++R<m&&(N*=256);)D+=this[h+R]*N;return D},a.prototype.readUintBE=a.prototype.readUIntBE=function(h,m,A){h=h>>>0,m=m>>>0,A||Z(h,m,this.length);let D=this[h+--m],N=1;for(;m>0&&(N*=256);)D+=this[h+--m]*N;return D},a.prototype.readUint8=a.prototype.readUInt8=function(h,m){return h=h>>>0,m||Z(h,1,this.length),this[h]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(h,m){return h=h>>>0,m||Z(h,2,this.length),this[h]|this[h+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(h,m){return h=h>>>0,m||Z(h,2,this.length),this[h]<<8|this[h+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(h,m){return h=h>>>0,m||Z(h,4,this.length),(this[h]|this[h+1]<<8|this[h+2]<<16)+this[h+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(h,m){return h=h>>>0,m||Z(h,4,this.length),this[h]*16777216+(this[h+1]<<16|this[h+2]<<8|this[h+3])},a.prototype.readBigUInt64LE=Ne(function(h){h=h>>>0,be(h,"offset");const m=this[h],A=this[h+7];(m===void 0||A===void 0)&&Yt(h,this.length-8);const D=m+this[++h]*2**8+this[++h]*2**16+this[++h]*2**24,N=this[++h]+this[++h]*2**8+this[++h]*2**16+A*2**24;return BigInt(D)+(BigInt(N)<<BigInt(32))}),a.prototype.readBigUInt64BE=Ne(function(h){h=h>>>0,be(h,"offset");const m=this[h],A=this[h+7];(m===void 0||A===void 0)&&Yt(h,this.length-8);const D=m*2**24+this[++h]*2**16+this[++h]*2**8+this[++h],N=this[++h]*2**24+this[++h]*2**16+this[++h]*2**8+A;return(BigInt(D)<<BigInt(32))+BigInt(N)}),a.prototype.readIntLE=function(h,m,A){h=h>>>0,m=m>>>0,A||Z(h,m,this.length);let D=this[h],N=1,R=0;for(;++R<m&&(N*=256);)D+=this[h+R]*N;return N*=128,D>=N&&(D-=Math.pow(2,8*m)),D},a.prototype.readIntBE=function(h,m,A){h=h>>>0,m=m>>>0,A||Z(h,m,this.length);let D=m,N=1,R=this[h+--D];for(;D>0&&(N*=256);)R+=this[h+--D]*N;return N*=128,R>=N&&(R-=Math.pow(2,8*m)),R},a.prototype.readInt8=function(h,m){return h=h>>>0,m||Z(h,1,this.length),this[h]&128?(255-this[h]+1)*-1:this[h]},a.prototype.readInt16LE=function(h,m){h=h>>>0,m||Z(h,2,this.length);const A=this[h]|this[h+1]<<8;return A&32768?A|4294901760:A},a.prototype.readInt16BE=function(h,m){h=h>>>0,m||Z(h,2,this.length);const A=this[h+1]|this[h]<<8;return A&32768?A|4294901760:A},a.prototype.readInt32LE=function(h,m){return h=h>>>0,m||Z(h,4,this.length),this[h]|this[h+1]<<8|this[h+2]<<16|this[h+3]<<24},a.prototype.readInt32BE=function(h,m){return h=h>>>0,m||Z(h,4,this.length),this[h]<<24|this[h+1]<<16|this[h+2]<<8|this[h+3]},a.prototype.readBigInt64LE=Ne(function(h){h=h>>>0,be(h,"offset");const m=this[h],A=this[h+7];(m===void 0||A===void 0)&&Yt(h,this.length-8);const D=this[h+4]+this[h+5]*2**8+this[h+6]*2**16+(A<<24);return(BigInt(D)<<BigInt(32))+BigInt(m+this[++h]*2**8+this[++h]*2**16+this[++h]*2**24)}),a.prototype.readBigInt64BE=Ne(function(h){h=h>>>0,be(h,"offset");const m=this[h],A=this[h+7];(m===void 0||A===void 0)&&Yt(h,this.length-8);const D=(m<<24)+this[++h]*2**16+this[++h]*2**8+this[++h];return(BigInt(D)<<BigInt(32))+BigInt(this[++h]*2**24+this[++h]*2**16+this[++h]*2**8+A)}),a.prototype.readFloatLE=function(h,m){return h=h>>>0,m||Z(h,4,this.length),n.read(this,h,!0,23,4)},a.prototype.readFloatBE=function(h,m){return h=h>>>0,m||Z(h,4,this.length),n.read(this,h,!1,23,4)},a.prototype.readDoubleLE=function(h,m){return h=h>>>0,m||Z(h,8,this.length),n.read(this,h,!0,52,8)},a.prototype.readDoubleBE=function(h,m){return h=h>>>0,m||Z(h,8,this.length),n.read(this,h,!1,52,8)};function J(S,h,m,A,D,N){if(!a.isBuffer(S))throw new TypeError('"buffer" argument must be a Buffer instance');if(h>D||h<N)throw new RangeError('"value" argument is out of bounds');if(m+A>S.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(h,m,A,D){if(h=+h,m=m>>>0,A=A>>>0,!D){const ee=Math.pow(2,8*A)-1;J(this,h,m,A,ee,0)}let N=1,R=0;for(this[m]=h&255;++R<A&&(N*=256);)this[m+R]=h/N&255;return m+A},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(h,m,A,D){if(h=+h,m=m>>>0,A=A>>>0,!D){const ee=Math.pow(2,8*A)-1;J(this,h,m,A,ee,0)}let N=A-1,R=1;for(this[m+N]=h&255;--N>=0&&(R*=256);)this[m+N]=h/R&255;return m+A},a.prototype.writeUint8=a.prototype.writeUInt8=function(h,m,A){return h=+h,m=m>>>0,A||J(this,h,m,1,255,0),this[m]=h&255,m+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(h,m,A){return h=+h,m=m>>>0,A||J(this,h,m,2,65535,0),this[m]=h&255,this[m+1]=h>>>8,m+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(h,m,A){return h=+h,m=m>>>0,A||J(this,h,m,2,65535,0),this[m]=h>>>8,this[m+1]=h&255,m+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(h,m,A){return h=+h,m=m>>>0,A||J(this,h,m,4,4294967295,0),this[m+3]=h>>>24,this[m+2]=h>>>16,this[m+1]=h>>>8,this[m]=h&255,m+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(h,m,A){return h=+h,m=m>>>0,A||J(this,h,m,4,4294967295,0),this[m]=h>>>24,this[m+1]=h>>>16,this[m+2]=h>>>8,this[m+3]=h&255,m+4};function V(S,h,m,A,D){Se(h,A,D,S,m,7);let N=Number(h&BigInt(4294967295));S[m++]=N,N=N>>8,S[m++]=N,N=N>>8,S[m++]=N,N=N>>8,S[m++]=N;let R=Number(h>>BigInt(32)&BigInt(4294967295));return S[m++]=R,R=R>>8,S[m++]=R,R=R>>8,S[m++]=R,R=R>>8,S[m++]=R,m}function ie(S,h,m,A,D){Se(h,A,D,S,m,7);let N=Number(h&BigInt(4294967295));S[m+7]=N,N=N>>8,S[m+6]=N,N=N>>8,S[m+5]=N,N=N>>8,S[m+4]=N;let R=Number(h>>BigInt(32)&BigInt(4294967295));return S[m+3]=R,R=R>>8,S[m+2]=R,R=R>>8,S[m+1]=R,R=R>>8,S[m]=R,m+8}a.prototype.writeBigUInt64LE=Ne(function(h,m=0){return V(this,h,m,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeBigUInt64BE=Ne(function(h,m=0){return ie(this,h,m,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeIntLE=function(h,m,A,D){if(h=+h,m=m>>>0,!D){const de=Math.pow(2,8*A-1);J(this,h,m,A,de-1,-de)}let N=0,R=1,ee=0;for(this[m]=h&255;++N<A&&(R*=256);)h<0&&ee===0&&this[m+N-1]!==0&&(ee=1),this[m+N]=(h/R>>0)-ee&255;return m+A},a.prototype.writeIntBE=function(h,m,A,D){if(h=+h,m=m>>>0,!D){const de=Math.pow(2,8*A-1);J(this,h,m,A,de-1,-de)}let N=A-1,R=1,ee=0;for(this[m+N]=h&255;--N>=0&&(R*=256);)h<0&&ee===0&&this[m+N+1]!==0&&(ee=1),this[m+N]=(h/R>>0)-ee&255;return m+A},a.prototype.writeInt8=function(h,m,A){return h=+h,m=m>>>0,A||J(this,h,m,1,127,-128),h<0&&(h=255+h+1),this[m]=h&255,m+1},a.prototype.writeInt16LE=function(h,m,A){return h=+h,m=m>>>0,A||J(this,h,m,2,32767,-32768),this[m]=h&255,this[m+1]=h>>>8,m+2},a.prototype.writeInt16BE=function(h,m,A){return h=+h,m=m>>>0,A||J(this,h,m,2,32767,-32768),this[m]=h>>>8,this[m+1]=h&255,m+2},a.prototype.writeInt32LE=function(h,m,A){return h=+h,m=m>>>0,A||J(this,h,m,4,2147483647,-2147483648),this[m]=h&255,this[m+1]=h>>>8,this[m+2]=h>>>16,this[m+3]=h>>>24,m+4},a.prototype.writeInt32BE=function(h,m,A){return h=+h,m=m>>>0,A||J(this,h,m,4,2147483647,-2147483648),h<0&&(h=4294967295+h+1),this[m]=h>>>24,this[m+1]=h>>>16,this[m+2]=h>>>8,this[m+3]=h&255,m+4},a.prototype.writeBigInt64LE=Ne(function(h,m=0){return V(this,h,m,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),a.prototype.writeBigInt64BE=Ne(function(h,m=0){return ie(this,h,m,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function ce(S,h,m,A,D,N){if(m+A>S.length)throw new RangeError("Index out of range");if(m<0)throw new RangeError("Index out of range")}function ae(S,h,m,A,D){return h=+h,m=m>>>0,D||ce(S,h,m,4),n.write(S,h,m,A,23,4),m+4}a.prototype.writeFloatLE=function(h,m,A){return ae(this,h,m,!0,A)},a.prototype.writeFloatBE=function(h,m,A){return ae(this,h,m,!1,A)};function pe(S,h,m,A,D){return h=+h,m=m>>>0,D||ce(S,h,m,8),n.write(S,h,m,A,52,8),m+8}a.prototype.writeDoubleLE=function(h,m,A){return pe(this,h,m,!0,A)},a.prototype.writeDoubleBE=function(h,m,A){return pe(this,h,m,!1,A)},a.prototype.copy=function(h,m,A,D){if(!a.isBuffer(h))throw new TypeError("argument should be a Buffer");if(A||(A=0),!D&&D!==0&&(D=this.length),m>=h.length&&(m=h.length),m||(m=0),D>0&&D<A&&(D=A),D===A||h.length===0||this.length===0)return 0;if(m<0)throw new RangeError("targetStart out of bounds");if(A<0||A>=this.length)throw new RangeError("Index out of range");if(D<0)throw new RangeError("sourceEnd out of bounds");D>this.length&&(D=this.length),h.length-m<D-A&&(D=h.length-m+A);const N=D-A;return this===h&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(m,A,D):Uint8Array.prototype.set.call(h,this.subarray(A,D),m),N},a.prototype.fill=function(h,m,A,D){if(typeof h=="string"){if(typeof m=="string"?(D=m,m=0,A=this.length):typeof A=="string"&&(D=A,A=this.length),D!==void 0&&typeof D!="string")throw new TypeError("encoding must be a string");if(typeof D=="string"&&!a.isEncoding(D))throw new TypeError("Unknown encoding: "+D);if(h.length===1){const R=h.charCodeAt(0);(D==="utf8"&&R<128||D==="latin1")&&(h=R)}}else typeof h=="number"?h=h&255:typeof h=="boolean"&&(h=Number(h));if(m<0||this.length<m||this.length<A)throw new RangeError("Out of range index");if(A<=m)return this;m=m>>>0,A=A===void 0?this.length:A>>>0,h||(h=0);let N;if(typeof h=="number")for(N=m;N<A;++N)this[N]=h;else{const R=a.isBuffer(h)?h:a.from(h,D),ee=R.length;if(ee===0)throw new TypeError('The value "'+h+'" is invalid for argument "value"');for(N=0;N<A-m;++N)this[N+m]=R[N%ee]}return this};const ge={};function ye(S,h,m){ge[S]=class extends m{constructor(){super(),Object.defineProperty(this,"message",{value:h.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${S}]`,this.stack,delete this.name}get code(){return S}set code(D){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:D,writable:!0})}toString(){return`${this.name} [${S}]: ${this.message}`}}}ye("ERR_BUFFER_OUT_OF_BOUNDS",function(S){return S?`${S} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),ye("ERR_INVALID_ARG_TYPE",function(S,h){return`The "${S}" argument must be of type number. Received type ${typeof h}`},TypeError),ye("ERR_OUT_OF_RANGE",function(S,h,m){let A=`The value of "${S}" is out of range.`,D=m;return Number.isInteger(m)&&Math.abs(m)>2**32?D=Ce(String(m)):typeof m=="bigint"&&(D=String(m),(m>BigInt(2)**BigInt(32)||m<-(BigInt(2)**BigInt(32)))&&(D=Ce(D)),D+="n"),A+=` It must be ${h}. Received ${D}`,A},RangeError);function Ce(S){let h="",m=S.length;const A=S[0]==="-"?1:0;for(;m>=A+4;m-=3)h=`_${S.slice(m-3,m)}${h}`;return`${S.slice(0,m)}${h}`}function _e(S,h,m){be(h,"offset"),(S[h]===void 0||S[h+m]===void 0)&&Yt(h,S.length-(m+1))}function Se(S,h,m,A,D,N){if(S>m||S<h){const R=typeof h=="bigint"?"n":"";let ee;throw N>3?h===0||h===BigInt(0)?ee=`>= 0${R} and < 2${R} ** ${(N+1)*8}${R}`:ee=`>= -(2${R} ** ${(N+1)*8-1}${R}) and < 2 ** ${(N+1)*8-1}${R}`:ee=`>= ${h}${R} and <= ${m}${R}`,new ge.ERR_OUT_OF_RANGE("value",ee,S)}_e(A,D,N)}function be(S,h){if(typeof S!="number")throw new ge.ERR_INVALID_ARG_TYPE(h,"number",S)}function Yt(S,h,m){throw Math.floor(S)!==S?(be(S,m),new ge.ERR_OUT_OF_RANGE(m||"offset","an integer",S)):h<0?new ge.ERR_BUFFER_OUT_OF_BOUNDS:new ge.ERR_OUT_OF_RANGE(m||"offset",`>= ${m?1:0} and <= ${h}`,S)}const kr=/[^+/0-9A-Za-z-_]/g;function Oi(S){if(S=S.split("=")[0],S=S.trim().replace(kr,""),S.length<2)return"";for(;S.length%4!==0;)S=S+"=";return S}function Or(S,h){h=h||1/0;let m;const A=S.length;let D=null;const N=[];for(let R=0;R<A;++R){if(m=S.charCodeAt(R),m>55295&&m<57344){if(!D){if(m>56319){(h-=3)>-1&&N.push(239,191,189);continue}else if(R+1===A){(h-=3)>-1&&N.push(239,191,189);continue}D=m;continue}if(m<56320){(h-=3)>-1&&N.push(239,191,189),D=m;continue}m=(D-55296<<10|m-56320)+65536}else D&&(h-=3)>-1&&N.push(239,191,189);if(D=null,m<128){if((h-=1)<0)break;N.push(m)}else if(m<2048){if((h-=2)<0)break;N.push(m>>6|192,m&63|128)}else if(m<65536){if((h-=3)<0)break;N.push(m>>12|224,m>>6&63|128,m&63|128)}else if(m<1114112){if((h-=4)<0)break;N.push(m>>18|240,m>>12&63|128,m>>6&63|128,m&63|128)}else throw new Error("Invalid code point")}return N}function Zs(S){const h=[];for(let m=0;m<S.length;++m)h.push(S.charCodeAt(m)&255);return h}function mu(S,h){let m,A,D;const N=[];for(let R=0;R<S.length&&!((h-=2)<0);++R)m=S.charCodeAt(R),A=m>>8,D=m%256,N.push(D),N.push(A);return N}function rt(S){return e.toByteArray(Oi(S))}function Ke(S,h,m,A){let D;for(D=0;D<A&&!(D+m>=h.length||D>=S.length);++D)h[D+m]=S[D];return D}function Pe(S,h){return S instanceof h||S!=null&&S.constructor!=null&&S.constructor.name!=null&&S.constructor.name===h.name}function Ye(S){return S!==S}const at=function(){const S="0123456789abcdef",h=new Array(256);for(let m=0;m<16;++m){const A=m*16;for(let D=0;D<16;++D)h[A+D]=S[m]+S[D]}return h}();function Ne(S){return typeof BigInt>"u"?lt:S}function lt(){throw new Error("BigInt not supported")}})(Kb);var v3;typeof window<"u"&&(window.Buffer||(window.Buffer=Kb.Buffer),window.global||(window.global=window),window.process||(window.process={}),(v3=window.process)!=null&&v3.env||(window.process={env:{}}));function iD({storage:t,key:e="REACT_QUERY_OFFLINE_CACHE",throttleTime:n=1e3,serialize:r=JSON.stringify,deserialize:i=JSON.parse,retry:o}){if(t){const s=a=>{try{t.setItem(e,r(a));return}catch(l){return l}};return{persistClient:oD(a=>{let l=a,u=s(l),c=0;for(;u&&l;)c++,l=o==null?void 0:o({persistedClient:l,error:u,errorCount:c}),l&&(u=s(l))},n),restoreClient:()=>{const a=t.getItem(e);if(a)return i(a)},removeClient:()=>{t.removeItem(e)}}}return{persistClient:P2,restoreClient:()=>{},removeClient:P2}}function oD(t,e=100){let n=null,r;return function(...i){r=i,n===null&&(n=setTimeout(()=>{t(...r),n=null},e))}}function P2(){}class wf{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){const n={listener:e};return this.listeners.add(n),this.onSubscribe(),()=>{this.listeners.delete(n),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}const Mg=typeof window>"u"||"Deno"in window;function Pn(){}function sD(t,e){return typeof t=="function"?t(e):t}function aD(t){return typeof t=="number"&&t>=0&&t!==1/0}function lD(t,e){return Math.max(t+(e||0)-Date.now(),0)}function Wu(t,e,n){return vf(t)?typeof e=="function"?{...n,queryKey:t,queryFn:e}:{...e,queryKey:t}:t}function jr(t,e,n){return vf(t)?[{...e,queryKey:t},n]:[t||{},e]}function A2(t,e){const{type:n="all",exact:r,fetchStatus:i,predicate:o,queryKey:s,stale:a}=t;if(vf(s)){if(r){if(e.queryHash!==Bg(s,e.options))return!1}else if(!hd(e.queryKey,s))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||typeof i<"u"&&i!==e.state.fetchStatus||o&&!o(e))}function D2(t,e){const{exact:n,fetching:r,predicate:i,mutationKey:o}=t;if(vf(o)){if(!e.options.mutationKey)return!1;if(n){if(Gi(e.options.mutationKey)!==Gi(o))return!1}else if(!hd(e.options.mutationKey,o))return!1}return!(typeof r=="boolean"&&e.state.status==="loading"!==r||i&&!i(e))}function Bg(t,e){return((e==null?void 0:e.queryKeyHashFn)||Gi)(t)}function Gi(t){return JSON.stringify(t,(e,n)=>y1(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function hd(t,e){return Qb(t,e)}function Qb(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(n=>!Qb(t[n],e[n])):!1}function Yb(t,e){if(t===e)return t;const n=T2(t)&&T2(e);if(n||y1(t)&&y1(e)){const r=n?t.length:Object.keys(t).length,i=n?e:Object.keys(e),o=i.length,s=n?[]:{};let a=0;for(let l=0;l<o;l++){const u=n?l:i[l];s[u]=Yb(t[u],e[u]),s[u]===t[u]&&a++}return r===o&&a===r?t:s}return e}function T2(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function y1(t){if(!k2(t))return!1;const e=t.constructor;if(typeof e>"u")return!0;const n=e.prototype;return!(!k2(n)||!n.hasOwnProperty("isPrototypeOf"))}function k2(t){return Object.prototype.toString.call(t)==="[object Object]"}function vf(t){return Array.isArray(t)}function Xb(t){return new Promise(e=>{setTimeout(e,t)})}function O2(t){Xb(0).then(t)}function uD(){if(typeof AbortController=="function")return new AbortController}function cD(t,e,n){return n.isDataEqual!=null&&n.isDataEqual(t,e)?t:typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?Yb(t,e):e}class dD extends wf{constructor(){super(),this.setup=e=>{if(!Mg&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),window.addEventListener("focus",n,!1),()=>{window.removeEventListener("visibilitychange",n),window.removeEventListener("focus",n)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.cleanup)==null||e.call(this),this.cleanup=void 0}}setEventListener(e){var n;this.setup=e,(n=this.cleanup)==null||n.call(this),this.cleanup=e(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()})}setFocused(e){this.focused!==e&&(this.focused=e,this.onFocus())}onFocus(){this.listeners.forEach(({listener:e})=>{e()})}isFocused(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)}}const b1=new dD,I2=["online","offline"];class fD extends wf{constructor(){super(),this.setup=e=>{if(!Mg&&window.addEventListener){const n=()=>e();return I2.forEach(r=>{window.addEventListener(r,n,!1)}),()=>{I2.forEach(r=>{window.removeEventListener(r,n)})}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.cleanup)==null||e.call(this),this.cleanup=void 0}}setEventListener(e){var n;this.setup=e,(n=this.cleanup)==null||n.call(this),this.cleanup=e(r=>{typeof r=="boolean"?this.setOnline(r):this.onOnline()})}setOnline(e){this.online!==e&&(this.online=e,this.onOnline())}onOnline(){this.listeners.forEach(({listener:e})=>{e()})}isOnline(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine}}const pd=new fD;function hD(t){return Math.min(1e3*2**t,3e4)}function Lg(t){return(t??"online")==="online"?pd.isOnline():!0}class Jb{constructor(e){this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}}function O0(t){return t instanceof Jb}function e4(t){let e=!1,n=0,r=!1,i,o,s;const a=new Promise((E,b)=>{o=E,s=b}),l=E=>{r||(w(new Jb(E)),t.abort==null||t.abort())},u=()=>{e=!0},c=()=>{e=!1},f=()=>!b1.isFocused()||t.networkMode!=="always"&&!pd.isOnline(),p=E=>{r||(r=!0,t.onSuccess==null||t.onSuccess(E),i==null||i(),o(E))},w=E=>{r||(r=!0,t.onError==null||t.onError(E),i==null||i(),s(E))},v=()=>new Promise(E=>{i=b=>{const g=r||!f();return g&&E(b),g},t.onPause==null||t.onPause()}).then(()=>{i=void 0,r||t.onContinue==null||t.onContinue()}),C=()=>{if(r)return;let E;try{E=t.fn()}catch(b){E=Promise.reject(b)}Promise.resolve(E).then(p).catch(b=>{var g,y;if(r)return;const x=(g=t.retry)!=null?g:3,_=(y=t.retryDelay)!=null?y:hD,$=typeof _=="function"?_(n,b):_,d=x===!0||typeof x=="number"&&n<x||typeof x=="function"&&x(n,b);if(e||!d){w(b);return}n++,t.onFail==null||t.onFail(n,b),Xb($).then(()=>{if(f())return v()}).then(()=>{e?w(b):C()})})};return Lg(t.networkMode)?C():v().then(C),{promise:a,cancel:l,continue:()=>(i==null?void 0:i())?a:Promise.resolve(),cancelRetry:u,continueRetry:c}}const Ug=console;function pD(){let t=[],e=0,n=c=>{c()},r=c=>{c()};const i=c=>{let f;e++;try{f=c()}finally{e--,e||a()}return f},o=c=>{e?t.push(c):O2(()=>{n(c)})},s=c=>(...f)=>{o(()=>{c(...f)})},a=()=>{const c=t;t=[],c.length&&O2(()=>{r(()=>{c.forEach(f=>{n(f)})})})};return{batch:i,batchCalls:s,schedule:o,setNotifyFunction:c=>{n=c},setBatchNotifyFunction:c=>{r=c}}}const Ot=pD();class t4{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),aD(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(e){this.cacheTime=Math.max(this.cacheTime||0,e??(Mg?1/0:5*60*1e3))}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class gD extends t4{constructor(e){super(),this.abortSignalConsumed=!1,this.defaultOptions=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.cache=e.cache,this.logger=e.logger||Ug,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.initialState=e.state||mD(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.cache.remove(this)}setData(e,n){const r=cD(this.state.data,e,this.options);return this.dispatch({data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(e,n){this.dispatch({type:"setState",state:e,setStateOptions:n})}cancel(e){var n;const r=this.promise;return(n=this.retryer)==null||n.cancel(e),r?r.then(Pn).catch(Pn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(e=>e.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(e=>e.getCurrentResult().isStale)}isStaleByTime(e=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!lD(this.state.dataUpdatedAt,e)}onFocus(){var e;const n=this.observers.find(r=>r.shouldFetchOnWindowFocus());n&&n.refetch({cancelRefetch:!1}),(e=this.retryer)==null||e.continue()}onOnline(){var e;const n=this.observers.find(r=>r.shouldFetchOnReconnect());n&&n.refetch({cancelRefetch:!1}),(e=this.retryer)==null||e.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(e,n){var r,i;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&n!=null&&n.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var o;return(o=this.retryer)==null||o.continueRetry(),this.promise}}if(e&&this.setOptions(e),!this.options.queryFn){const w=this.observers.find(v=>v.options.queryFn);w&&this.setOptions(w.options)}const s=uD(),a={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},l=w=>{Object.defineProperty(w,"signal",{enumerable:!0,get:()=>{if(s)return this.abortSignalConsumed=!0,s.signal}})};l(a);const u=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(a)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'"),c={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:u};if(l(c),(r=this.options.behavior)==null||r.onFetch(c),this.revertState=this.state,this.state.fetchStatus==="idle"||this.state.fetchMeta!==((i=c.fetchOptions)==null?void 0:i.meta)){var f;this.dispatch({type:"fetch",meta:(f=c.fetchOptions)==null?void 0:f.meta})}const p=w=>{if(O0(w)&&w.silent||this.dispatch({type:"error",error:w}),!O0(w)){var v,C,E,b;(v=(C=this.cache.config).onError)==null||v.call(C,w,this),(E=(b=this.cache.config).onSettled)==null||E.call(b,this.state.data,w,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=e4({fn:c.fetchFn,abort:s==null?void 0:s.abort.bind(s),onSuccess:w=>{var v,C,E,b;if(typeof w>"u"){p(new Error(this.queryHash+" data is undefined"));return}this.setData(w),(v=(C=this.cache.config).onSuccess)==null||v.call(C,w,this),(E=(b=this.cache.config).onSettled)==null||E.call(b,w,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:p,onFail:(w,v)=>{this.dispatch({type:"failed",failureCount:w,error:v})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(e){const n=r=>{var i,o;switch(e.type){case"failed":return{...r,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:(i=e.meta)!=null?i:null,fetchStatus:Lg(this.options.networkMode)?"fetching":"paused",...!r.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...r,data:e.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(o=e.dataUpdatedAt)!=null?o:Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const s=e.error;return O0(s)&&s.revert&&this.revertState?{...this.revertState,fetchStatus:"idle"}:{...r,error:s,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...e.state}}};this.state=n(this.state),Ot.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate(e)}),this.cache.notify({query:this,type:"updated",action:e})})}}function mD(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=typeof e<"u",r=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"loading",fetchStatus:"idle"}}class wD extends wf{constructor(e){super(),this.config=e||{},this.queries=[],this.queriesMap={}}build(e,n,r){var i;const o=n.queryKey,s=(i=n.queryHash)!=null?i:Bg(o,n);let a=this.get(s);return a||(a=new gD({cache:this,logger:e.getLogger(),queryKey:o,queryHash:s,options:e.defaultQueryOptions(n),state:r,defaultOptions:e.getQueryDefaults(o)}),this.add(a)),a}add(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"added",query:e}))}remove(e){const n=this.queriesMap[e.queryHash];n&&(e.destroy(),this.queries=this.queries.filter(r=>r!==e),n===e&&delete this.queriesMap[e.queryHash],this.notify({type:"removed",query:e}))}clear(){Ot.batch(()=>{this.queries.forEach(e=>{this.remove(e)})})}get(e){return this.queriesMap[e]}getAll(){return this.queries}find(e,n){const[r]=jr(e,n);return typeof r.exact>"u"&&(r.exact=!0),this.queries.find(i=>A2(r,i))}findAll(e,n){const[r]=jr(e,n);return Object.keys(r).length>0?this.queries.filter(i=>A2(r,i)):this.queries}notify(e){Ot.batch(()=>{this.listeners.forEach(({listener:n})=>{n(e)})})}onFocus(){Ot.batch(()=>{this.queries.forEach(e=>{e.onFocus()})})}onOnline(){Ot.batch(()=>{this.queries.forEach(e=>{e.onOnline()})})}}class vD extends t4{constructor(e){super(),this.defaultOptions=e.defaultOptions,this.mutationId=e.mutationId,this.mutationCache=e.mutationCache,this.logger=e.logger||Ug,this.observers=[],this.state=e.state||yD(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(e){this.dispatch({type:"setState",state:e})}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.observers=this.observers.filter(n=>n!==e),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.observers.length||(this.state.status==="loading"?this.scheduleGc():this.mutationCache.remove(this))}continue(){var e,n;return(e=(n=this.retryer)==null?void 0:n.continue())!=null?e:this.execute()}async execute(){const e=()=>{var d;return this.retryer=e4({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(P,k)=>{this.dispatch({type:"failed",failureCount:P,error:k})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:(d=this.options.retry)!=null?d:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},n=this.state.status==="loading";try{var r,i,o,s,a,l,u,c;if(!n){var f,p,w,v;this.dispatch({type:"loading",variables:this.options.variables}),await((f=(p=this.mutationCache.config).onMutate)==null?void 0:f.call(p,this.state.variables,this));const P=await((w=(v=this.options).onMutate)==null?void 0:w.call(v,this.state.variables));P!==this.state.context&&this.dispatch({type:"loading",context:P,variables:this.state.variables})}const d=await e();return await((r=(i=this.mutationCache.config).onSuccess)==null?void 0:r.call(i,d,this.state.variables,this.state.context,this)),await((o=(s=this.options).onSuccess)==null?void 0:o.call(s,d,this.state.variables,this.state.context)),await((a=(l=this.mutationCache.config).onSettled)==null?void 0:a.call(l,d,null,this.state.variables,this.state.context,this)),await((u=(c=this.options).onSettled)==null?void 0:u.call(c,d,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:d}),d}catch(d){try{var C,E,b,g,y,x,_,$;throw await((C=(E=this.mutationCache.config).onError)==null?void 0:C.call(E,d,this.state.variables,this.state.context,this)),await((b=(g=this.options).onError)==null?void 0:b.call(g,d,this.state.variables,this.state.context)),await((y=(x=this.mutationCache.config).onSettled)==null?void 0:y.call(x,void 0,d,this.state.variables,this.state.context,this)),await((_=($=this.options).onSettled)==null?void 0:_.call($,void 0,d,this.state.variables,this.state.context)),d}finally{this.dispatch({type:"error",error:d})}}}dispatch(e){const n=r=>{switch(e.type){case"failed":return{...r,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"loading":return{...r,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!Lg(this.options.networkMode),status:"loading",variables:e.variables};case"success":return{...r,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:e.error,failureCount:r.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"};case"setState":return{...r,...e.state}}};this.state=n(this.state),Ot.batch(()=>{this.observers.forEach(r=>{r.onMutationUpdate(e)}),this.mutationCache.notify({mutation:this,type:"updated",action:e})})}}function yD(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}class bD extends wf{constructor(e){super(),this.config=e||{},this.mutations=[],this.mutationId=0}build(e,n,r){const i=new vD({mutationCache:this,logger:e.getLogger(),mutationId:++this.mutationId,options:e.defaultMutationOptions(n),state:r,defaultOptions:n.mutationKey?e.getMutationDefaults(n.mutationKey):void 0});return this.add(i),i}add(e){this.mutations.push(e),this.notify({type:"added",mutation:e})}remove(e){this.mutations=this.mutations.filter(n=>n!==e),this.notify({type:"removed",mutation:e})}clear(){Ot.batch(()=>{this.mutations.forEach(e=>{this.remove(e)})})}getAll(){return this.mutations}find(e){return typeof e.exact>"u"&&(e.exact=!0),this.mutations.find(n=>D2(e,n))}findAll(e){return this.mutations.filter(n=>D2(e,n))}notify(e){Ot.batch(()=>{this.listeners.forEach(({listener:n})=>{n(e)})})}resumePausedMutations(){var e;return this.resuming=((e=this.resuming)!=null?e:Promise.resolve()).then(()=>{const n=this.mutations.filter(r=>r.state.isPaused);return Ot.batch(()=>n.reduce((r,i)=>r.then(()=>i.continue().catch(Pn)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}function xD(){return{onFetch:t=>{t.fetchFn=()=>{var e,n,r,i,o,s;const a=(e=t.fetchOptions)==null||(n=e.meta)==null?void 0:n.refetchPage,l=(r=t.fetchOptions)==null||(i=r.meta)==null?void 0:i.fetchMore,u=l==null?void 0:l.pageParam,c=(l==null?void 0:l.direction)==="forward",f=(l==null?void 0:l.direction)==="backward",p=((o=t.state.data)==null?void 0:o.pages)||[],w=((s=t.state.data)==null?void 0:s.pageParams)||[];let v=w,C=!1;const E=$=>{Object.defineProperty($,"signal",{enumerable:!0,get:()=>{var d;if((d=t.signal)!=null&&d.aborted)C=!0;else{var P;(P=t.signal)==null||P.addEventListener("abort",()=>{C=!0})}return t.signal}})},b=t.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+t.options.queryHash+"'")),g=($,d,P,k)=>(v=k?[d,...v]:[...v,d],k?[P,...$]:[...$,P]),y=($,d,P,k)=>{if(C)return Promise.reject("Cancelled");if(typeof P>"u"&&!d&&$.length)return Promise.resolve($);const I={queryKey:t.queryKey,pageParam:P,meta:t.options.meta};E(I);const M=b(I);return Promise.resolve(M).then(G=>g($,P,G,k))};let x;if(!p.length)x=y([]);else if(c){const $=typeof u<"u",d=$?u:N2(t.options,p);x=y(p,$,d)}else if(f){const $=typeof u<"u",d=$?u:CD(t.options,p);x=y(p,$,d,!0)}else{v=[];const $=typeof t.options.getNextPageParam>"u";x=(a&&p[0]?a(p[0],0,p):!0)?y([],$,w[0]):Promise.resolve(g([],w[0],p[0]));for(let P=1;P<p.length;P++)x=x.then(k=>{if(a&&p[P]?a(p[P],P,p):!0){const M=$?w[P]:N2(t.options,k);return y(k,$,M)}return Promise.resolve(g(k,w[P],p[P]))})}return x.then($=>({pages:$,pageParams:v}))}}}}function N2(t,e){return t.getNextPageParam==null?void 0:t.getNextPageParam(e[e.length-1],e)}function CD(t,e){return t.getPreviousPageParam==null?void 0:t.getPreviousPageParam(e[0],e)}class ED{constructor(e={}){this.queryCache=e.queryCache||new wD,this.mutationCache=e.mutationCache||new bD,this.logger=e.logger||Ug,this.defaultOptions=e.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,this.mountCount===1&&(this.unsubscribeFocus=b1.subscribe(()=>{b1.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=pd.subscribe(()=>{pd.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var e,n;this.mountCount--,this.mountCount===0&&((e=this.unsubscribeFocus)==null||e.call(this),this.unsubscribeFocus=void 0,(n=this.unsubscribeOnline)==null||n.call(this),this.unsubscribeOnline=void 0)}isFetching(e,n){const[r]=jr(e,n);return r.fetchStatus="fetching",this.queryCache.findAll(r).length}isMutating(e){return this.mutationCache.findAll({...e,fetching:!0}).length}getQueryData(e,n){var r;return(r=this.queryCache.find(e,n))==null?void 0:r.state.data}ensureQueryData(e,n,r){const i=Wu(e,n,r),o=this.getQueryData(i.queryKey);return o?Promise.resolve(o):this.fetchQuery(i)}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:n,state:r})=>{const i=r.data;return[n,i]})}setQueryData(e,n,r){const i=this.queryCache.find(e),o=i==null?void 0:i.state.data,s=sD(n,o);if(typeof s>"u")return;const a=Wu(e),l=this.defaultQueryOptions(a);return this.queryCache.build(this,l).setData(s,{...r,manual:!0})}setQueriesData(e,n,r){return Ot.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:i})=>[i,this.setQueryData(i,n,r)]))}getQueryState(e,n){var r;return(r=this.queryCache.find(e,n))==null?void 0:r.state}removeQueries(e,n){const[r]=jr(e,n),i=this.queryCache;Ot.batch(()=>{i.findAll(r).forEach(o=>{i.remove(o)})})}resetQueries(e,n,r){const[i,o]=jr(e,n,r),s=this.queryCache,a={type:"active",...i};return Ot.batch(()=>(s.findAll(i).forEach(l=>{l.reset()}),this.refetchQueries(a,o)))}cancelQueries(e,n,r){const[i,o={}]=jr(e,n,r);typeof o.revert>"u"&&(o.revert=!0);const s=Ot.batch(()=>this.queryCache.findAll(i).map(a=>a.cancel(o)));return Promise.all(s).then(Pn).catch(Pn)}invalidateQueries(e,n,r){const[i,o]=jr(e,n,r);return Ot.batch(()=>{var s,a;if(this.queryCache.findAll(i).forEach(u=>{u.invalidate()}),i.refetchType==="none")return Promise.resolve();const l={...i,type:(s=(a=i.refetchType)!=null?a:i.type)!=null?s:"active"};return this.refetchQueries(l,o)})}refetchQueries(e,n,r){const[i,o]=jr(e,n,r),s=Ot.batch(()=>this.queryCache.findAll(i).filter(l=>!l.isDisabled()).map(l=>{var u;return l.fetch(void 0,{...o,cancelRefetch:(u=o==null?void 0:o.cancelRefetch)!=null?u:!0,meta:{refetchPage:i.refetchPage}})}));let a=Promise.all(s).then(Pn);return o!=null&&o.throwOnError||(a=a.catch(Pn)),a}fetchQuery(e,n,r){const i=Wu(e,n,r),o=this.defaultQueryOptions(i);typeof o.retry>"u"&&(o.retry=!1);const s=this.queryCache.build(this,o);return s.isStaleByTime(o.staleTime)?s.fetch(o):Promise.resolve(s.state.data)}prefetchQuery(e,n,r){return this.fetchQuery(e,n,r).then(Pn).catch(Pn)}fetchInfiniteQuery(e,n,r){const i=Wu(e,n,r);return i.behavior=xD(),this.fetchQuery(i)}prefetchInfiniteQuery(e,n,r){return this.fetchInfiniteQuery(e,n,r).then(Pn).catch(Pn)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(e){this.defaultOptions=e}setQueryDefaults(e,n){const r=this.queryDefaults.find(i=>Gi(e)===Gi(i.queryKey));r?r.defaultOptions=n:this.queryDefaults.push({queryKey:e,defaultOptions:n})}getQueryDefaults(e){if(!e)return;const n=this.queryDefaults.find(r=>hd(e,r.queryKey));return n==null?void 0:n.defaultOptions}setMutationDefaults(e,n){const r=this.mutationDefaults.find(i=>Gi(e)===Gi(i.mutationKey));r?r.defaultOptions=n:this.mutationDefaults.push({mutationKey:e,defaultOptions:n})}getMutationDefaults(e){if(!e)return;const n=this.mutationDefaults.find(r=>hd(e,r.mutationKey));return n==null?void 0:n.defaultOptions}defaultQueryOptions(e){if(e!=null&&e._defaulted)return e;const n={...this.defaultOptions.queries,...this.getQueryDefaults(e==null?void 0:e.queryKey),...e,_defaulted:!0};return!n.queryHash&&n.queryKey&&(n.queryHash=Bg(n.queryKey,n)),typeof n.refetchOnReconnect>"u"&&(n.refetchOnReconnect=n.networkMode!=="always"),typeof n.useErrorBoundary>"u"&&(n.useErrorBoundary=!!n.suspense),n}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...this.defaultOptions.mutations,...this.getMutationDefaults(e==null?void 0:e.mutationKey),...e,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}function _D(t){return{mutationKey:t.options.mutationKey,state:t.state}}function SD(t){return{state:t.state,queryKey:t.queryKey,queryHash:t.queryHash}}function $D(t){return t.state.isPaused}function PD(t){return t.state.status==="success"}function AD(t,e={}){const n=[],r=[];if(e.dehydrateMutations!==!1){const i=e.shouldDehydrateMutation||$D;t.getMutationCache().getAll().forEach(o=>{i(o)&&n.push(_D(o))})}if(e.dehydrateQueries!==!1){const i=e.shouldDehydrateQuery||PD;t.getQueryCache().getAll().forEach(o=>{i(o)&&r.push(SD(o))})}return{mutations:n,queries:r}}function DD(t,e,n){if(typeof e!="object"||e===null)return;const r=t.getMutationCache(),i=t.getQueryCache(),o=e.mutations||[],s=e.queries||[];o.forEach(a=>{var l;r.build(t,{...n==null||(l=n.defaultOptions)==null?void 0:l.mutations,mutationKey:a.mutationKey},a.state)}),s.forEach(({queryKey:a,state:l,queryHash:u})=>{var c;const f=i.get(u);if(f){if(f.state.dataUpdatedAt<l.dataUpdatedAt){const{fetchStatus:p,...w}=l;f.setState(w)}return}i.build(t,{...n==null||(c=n.defaultOptions)==null?void 0:c.queries,queryKey:a,queryHash:u},{...l,fetchStatus:"idle"})})}const R2=tt.createContext(void 0),TD=tt.createContext(!1);function kD(t,e){return t||(e&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=R2),window.ReactQueryClientContext):R2)}const OD=({client:t,children:e,context:n,contextSharing:r=!1})=>{tt.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]);const i=kD(n,r);return tt.createElement(TD.Provider,{value:!n&&r},tt.createElement(i.Provider,{value:t},e))},ID=["added","removed","updated"];function M2(t){return ID.includes(t)}async function ND({queryClient:t,persister:e,maxAge:n=1e3*60*60*24,buster:r="",hydrateOptions:i}){try{const o=await e.restoreClient();if(o)if(o.timestamp){const s=Date.now()-o.timestamp>n,a=o.buster!==r;s||a?e.removeClient():DD(t,o.clientState,i)}else e.removeClient()}catch{e.removeClient()}}async function B2({queryClient:t,persister:e,buster:n="",dehydrateOptions:r}){const i={buster:n,timestamp:Date.now(),clientState:AD(t,r)};await e.persistClient(i)}function RD(t){const e=t.queryClient.getQueryCache().subscribe(r=>{M2(r.type)&&B2(t)}),n=t.queryClient.getMutationCache().subscribe(r=>{M2(r.type)&&B2(t)});return()=>{e(),n()}}function MD(t){let e=!1,n;const r=()=>{e=!0,n==null||n()},i=ND(t).then(()=>{e||(n=RD(t))});return[r,i]}var BD={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yf=tt,LD=r_;function UD(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jD=typeof Object.is=="function"?Object.is:UD,FD=LD.useSyncExternalStore,zD=yf.useRef,WD=yf.useEffect,HD=yf.useMemo,VD=yf.useDebugValue;BD.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var o=zD(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=HD(function(){function l(w){if(!u){if(u=!0,c=w,w=r(w),i!==void 0&&s.hasValue){var v=s.value;if(i(v,w))return f=v}return f=w}if(v=f,jD(c,w))return v;var C=r(w);return i!==void 0&&i(v,C)?v:(c=w,f=C)}var u=!1,c,f,p=n===void 0?null:n;return[function(){return l(e())},p===null?void 0:function(){return l(p())}]},[e,n,r,i]);var a=FD(t,o[0],o[1]);return WD(function(){s.hasValue=!0,s.value=a},[a]),VD(a),a};function qD({queryClient:t=new ED({defaultOptions:{queries:{cacheTime:1e3*60*60*24,networkMode:"offlineFirst",refetchOnWindowFocus:!1,retry:0},mutations:{networkMode:"offlineFirst"}}}),storage:e=R5({storage:typeof window<"u"&&window.localStorage?window.localStorage:N5}),persister:n=typeof window<"u"?iD({key:"cache",storage:e,serialize:i=>i,deserialize:i=>i}):void 0,...r}){const i=T9({...r,storage:e});return n&&MD({queryClient:t,persister:n,dehydrateOptions:{shouldDehydrateQuery:o=>o.cacheTime!==0&&o.queryKey[0].persist!==!1}}),Object.assign(i,{queryClient:t})}var GD=tt.createContext(void 0),KD=tt.createContext(void 0);function ZD({children:t,config:e}){return tt.createElement(GD.Provider,{children:tt.createElement(OD,{children:t,client:e.queryClient,context:KD}),value:e})}var xa,ko,QD=class extends sg{constructor({chains:t,options:e}){super({chains:t,options:{reloadOnDisconnect:!1,...e}}),this.id="coinbaseWallet",this.name="Coinbase Wallet",this.ready=!0,Ut(this,xa,void 0),Ut(this,ko,void 0),this.onAccountsChanged=n=>{n.length===0?this.emit("disconnect"):this.emit("change",{account:Mn(n[0])})},this.onChainChanged=n=>{const r=zc(n),i=this.isChainUnsupported(r);this.emit("change",{chain:{id:r,unsupported:i}})},this.onDisconnect=()=>{this.emit("disconnect")}}async connect({chainId:t}={}){try{const e=await this.getProvider();e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});const n=await e.enable(),r=Mn(n[0]);let i=await this.getChainId(),o=this.isChainUnsupported(i);return t&&i!==t&&(i=(await this.switchChain(t)).id,o=this.isChainUnsupported(i)),{account:r,chain:{id:i,unsupported:o}}}catch(e){throw/(user closed modal|accounts received is empty)/i.test(e.message)?new zt(e):e}}async disconnect(){if(!$e(this,ko))return;const t=await this.getProvider();t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),t.disconnect(),t.close()}async getAccount(){const e=await(await this.getProvider()).request({method:"eth_accounts"});return Mn(e[0])}async getChainId(){const t=await this.getProvider();return zc(t.chainId)}async getProvider(){var t;if(!$e(this,ko)){let e=(await ds(()=>import("./index-ea2e4531.js").then(s=>s.i),["assets/index-ea2e4531.js","assets/events-9f95f980.js"])).default;typeof e!="function"&&typeof e.default=="function"&&(e=e.default),Cl(this,xa,new e(this.options));const n=(t=$e(this,xa).walletExtension)==null?void 0:t.getChainId(),r=this.chains.find(s=>this.options.chainId?s.id===this.options.chainId:s.id===n)||this.chains[0],i=this.options.chainId||(r==null?void 0:r.id),o=this.options.jsonRpcUrl||(r==null?void 0:r.rpcUrls.default.http[0]);Cl(this,ko,$e(this,xa).makeWeb3Provider(o,i))}return $e(this,ko)}async getWalletClient({chainId:t}={}){const[e,n]=await Promise.all([this.getProvider(),this.getAccount()]),r=this.chains.find(i=>i.id===t);if(!e)throw new Error("provider is required.");return ig({account:n,chain:r,transport:Jp(e)})}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(t){var r;const e=await this.getProvider(),n=le(t);try{return await e.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),this.chains.find(i=>i.id===t)??{id:t,name:`Chain ${n}`,network:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(i){const o=this.chains.find(s=>s.id===t);if(!o)throw new k5({chainId:t,connectorId:this.id});if(i.code===4902)try{return await e.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:o.name,nativeCurrency:o.nativeCurrency,rpcUrls:[((r=o.rpcUrls.public)==null?void 0:r.http[0])??""],blockExplorerUrls:this.getBlockExplorerUrls(o)}]}),o}catch(s){throw new zt(s)}throw new Er(i)}}async watchAsset({address:t,decimals:e=18,image:n,symbol:r}){return(await this.getProvider()).request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:e,image:n,symbol:r}}})}};xa=new WeakMap;ko=new WeakMap;var jg={},bf={},ue={},n4={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});function e(a,l){var u=a>>>16&65535,c=a&65535,f=l>>>16&65535,p=l&65535;return c*p+(u*p+c*f<<16>>>0)|0}t.mul=Math.imul||e;function n(a,l){return a+l|0}t.add=n;function r(a,l){return a-l|0}t.sub=r;function i(a,l){return a<<l|a>>>32-l}t.rotl=i;function o(a,l){return a<<32-l|a>>>l}t.rotr=o;function s(a){return typeof a=="number"&&isFinite(a)&&Math.floor(a)===a}t.isInteger=Number.isInteger||s,t.MAX_SAFE_INTEGER=9007199254740991,t.isSafeInteger=function(a){return t.isInteger(a)&&a>=-t.MAX_SAFE_INTEGER&&a<=t.MAX_SAFE_INTEGER}})(n4);Object.defineProperty(ue,"__esModule",{value:!0});var r4=n4;function YD(t,e){return e===void 0&&(e=0),(t[e+0]<<8|t[e+1])<<16>>16}ue.readInt16BE=YD;function XD(t,e){return e===void 0&&(e=0),(t[e+0]<<8|t[e+1])>>>0}ue.readUint16BE=XD;function JD(t,e){return e===void 0&&(e=0),(t[e+1]<<8|t[e])<<16>>16}ue.readInt16LE=JD;function eT(t,e){return e===void 0&&(e=0),(t[e+1]<<8|t[e])>>>0}ue.readUint16LE=eT;function i4(t,e,n){return e===void 0&&(e=new Uint8Array(2)),n===void 0&&(n=0),e[n+0]=t>>>8,e[n+1]=t>>>0,e}ue.writeUint16BE=i4;ue.writeInt16BE=i4;function o4(t,e,n){return e===void 0&&(e=new Uint8Array(2)),n===void 0&&(n=0),e[n+0]=t>>>0,e[n+1]=t>>>8,e}ue.writeUint16LE=o4;ue.writeInt16LE=o4;function x1(t,e){return e===void 0&&(e=0),t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3]}ue.readInt32BE=x1;function C1(t,e){return e===void 0&&(e=0),(t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3])>>>0}ue.readUint32BE=C1;function E1(t,e){return e===void 0&&(e=0),t[e+3]<<24|t[e+2]<<16|t[e+1]<<8|t[e]}ue.readInt32LE=E1;function _1(t,e){return e===void 0&&(e=0),(t[e+3]<<24|t[e+2]<<16|t[e+1]<<8|t[e])>>>0}ue.readUint32LE=_1;function gd(t,e,n){return e===void 0&&(e=new Uint8Array(4)),n===void 0&&(n=0),e[n+0]=t>>>24,e[n+1]=t>>>16,e[n+2]=t>>>8,e[n+3]=t>>>0,e}ue.writeUint32BE=gd;ue.writeInt32BE=gd;function md(t,e,n){return e===void 0&&(e=new Uint8Array(4)),n===void 0&&(n=0),e[n+0]=t>>>0,e[n+1]=t>>>8,e[n+2]=t>>>16,e[n+3]=t>>>24,e}ue.writeUint32LE=md;ue.writeInt32LE=md;function tT(t,e){e===void 0&&(e=0);var n=x1(t,e),r=x1(t,e+4);return n*4294967296+r-(r>>31)*4294967296}ue.readInt64BE=tT;function nT(t,e){e===void 0&&(e=0);var n=C1(t,e),r=C1(t,e+4);return n*4294967296+r}ue.readUint64BE=nT;function rT(t,e){e===void 0&&(e=0);var n=E1(t,e),r=E1(t,e+4);return r*4294967296+n-(n>>31)*4294967296}ue.readInt64LE=rT;function iT(t,e){e===void 0&&(e=0);var n=_1(t,e),r=_1(t,e+4);return r*4294967296+n}ue.readUint64LE=iT;function s4(t,e,n){return e===void 0&&(e=new Uint8Array(8)),n===void 0&&(n=0),gd(t/4294967296>>>0,e,n),gd(t>>>0,e,n+4),e}ue.writeUint64BE=s4;ue.writeInt64BE=s4;function a4(t,e,n){return e===void 0&&(e=new Uint8Array(8)),n===void 0&&(n=0),md(t>>>0,e,n),md(t/4294967296>>>0,e,n+4),e}ue.writeUint64LE=a4;ue.writeInt64LE=a4;function oT(t,e,n){if(n===void 0&&(n=0),t%8!==0)throw new Error("readUintBE supports only bitLengths divisible by 8");if(t/8>e.length-n)throw new Error("readUintBE: array is too short for the given bitLength");for(var r=0,i=1,o=t/8+n-1;o>=n;o--)r+=e[o]*i,i*=256;return r}ue.readUintBE=oT;function sT(t,e,n){if(n===void 0&&(n=0),t%8!==0)throw new Error("readUintLE supports only bitLengths divisible by 8");if(t/8>e.length-n)throw new Error("readUintLE: array is too short for the given bitLength");for(var r=0,i=1,o=n;o<n+t/8;o++)r+=e[o]*i,i*=256;return r}ue.readUintLE=sT;function aT(t,e,n,r){if(n===void 0&&(n=new Uint8Array(t/8)),r===void 0&&(r=0),t%8!==0)throw new Error("writeUintBE supports only bitLengths divisible by 8");if(!r4.isSafeInteger(e))throw new Error("writeUintBE value must be an integer");for(var i=1,o=t/8+r-1;o>=r;o--)n[o]=e/i&255,i*=256;return n}ue.writeUintBE=aT;function lT(t,e,n,r){if(n===void 0&&(n=new Uint8Array(t/8)),r===void 0&&(r=0),t%8!==0)throw new Error("writeUintLE supports only bitLengths divisible by 8");if(!r4.isSafeInteger(e))throw new Error("writeUintLE value must be an integer");for(var i=1,o=r;o<r+t/8;o++)n[o]=e/i&255,i*=256;return n}ue.writeUintLE=lT;function uT(t,e){e===void 0&&(e=0);var n=new DataView(t.buffer,t.byteOffset,t.byteLength);return n.getFloat32(e)}ue.readFloat32BE=uT;function cT(t,e){e===void 0&&(e=0);var n=new DataView(t.buffer,t.byteOffset,t.byteLength);return n.getFloat32(e,!0)}ue.readFloat32LE=cT;function dT(t,e){e===void 0&&(e=0);var n=new DataView(t.buffer,t.byteOffset,t.byteLength);return n.getFloat64(e)}ue.readFloat64BE=dT;function fT(t,e){e===void 0&&(e=0);var n=new DataView(t.buffer,t.byteOffset,t.byteLength);return n.getFloat64(e,!0)}ue.readFloat64LE=fT;function hT(t,e,n){e===void 0&&(e=new Uint8Array(4)),n===void 0&&(n=0);var r=new DataView(e.buffer,e.byteOffset,e.byteLength);return r.setFloat32(n,t),e}ue.writeFloat32BE=hT;function pT(t,e,n){e===void 0&&(e=new Uint8Array(4)),n===void 0&&(n=0);var r=new DataView(e.buffer,e.byteOffset,e.byteLength);return r.setFloat32(n,t,!0),e}ue.writeFloat32LE=pT;function gT(t,e,n){e===void 0&&(e=new Uint8Array(8)),n===void 0&&(n=0);var r=new DataView(e.buffer,e.byteOffset,e.byteLength);return r.setFloat64(n,t),e}ue.writeFloat64BE=gT;function mT(t,e,n){e===void 0&&(e=new Uint8Array(8)),n===void 0&&(n=0);var r=new DataView(e.buffer,e.byteOffset,e.byteLength);return r.setFloat64(n,t,!0),e}ue.writeFloat64LE=mT;var Fn={};Object.defineProperty(Fn,"__esModule",{value:!0});function wT(t){for(var e=0;e<t.length;e++)t[e]=0;return t}Fn.wipe=wT;Object.defineProperty(bf,"__esModule",{value:!0});var $t=ue,S1=Fn,vT=20;function yT(t,e,n){for(var r=1634760805,i=857760878,o=2036477234,s=1797285236,a=n[3]<<24|n[2]<<16|n[1]<<8|n[0],l=n[7]<<24|n[6]<<16|n[5]<<8|n[4],u=n[11]<<24|n[10]<<16|n[9]<<8|n[8],c=n[15]<<24|n[14]<<16|n[13]<<8|n[12],f=n[19]<<24|n[18]<<16|n[17]<<8|n[16],p=n[23]<<24|n[22]<<16|n[21]<<8|n[20],w=n[27]<<24|n[26]<<16|n[25]<<8|n[24],v=n[31]<<24|n[30]<<16|n[29]<<8|n[28],C=e[3]<<24|e[2]<<16|e[1]<<8|e[0],E=e[7]<<24|e[6]<<16|e[5]<<8|e[4],b=e[11]<<24|e[10]<<16|e[9]<<8|e[8],g=e[15]<<24|e[14]<<16|e[13]<<8|e[12],y=r,x=i,_=o,$=s,d=a,P=l,k=u,I=c,M=f,W=p,G=w,te=v,ne=C,X=E,z=b,B=g,q=0;q<vT;q+=2)y=y+d|0,ne^=y,ne=ne>>>32-16|ne<<16,M=M+ne|0,d^=M,d=d>>>32-12|d<<12,x=x+P|0,X^=x,X=X>>>32-16|X<<16,W=W+X|0,P^=W,P=P>>>32-12|P<<12,_=_+k|0,z^=_,z=z>>>32-16|z<<16,G=G+z|0,k^=G,k=k>>>32-12|k<<12,$=$+I|0,B^=$,B=B>>>32-16|B<<16,te=te+B|0,I^=te,I=I>>>32-12|I<<12,_=_+k|0,z^=_,z=z>>>32-8|z<<8,G=G+z|0,k^=G,k=k>>>32-7|k<<7,$=$+I|0,B^=$,B=B>>>32-8|B<<8,te=te+B|0,I^=te,I=I>>>32-7|I<<7,x=x+P|0,X^=x,X=X>>>32-8|X<<8,W=W+X|0,P^=W,P=P>>>32-7|P<<7,y=y+d|0,ne^=y,ne=ne>>>32-8|ne<<8,M=M+ne|0,d^=M,d=d>>>32-7|d<<7,y=y+P|0,B^=y,B=B>>>32-16|B<<16,G=G+B|0,P^=G,P=P>>>32-12|P<<12,x=x+k|0,ne^=x,ne=ne>>>32-16|ne<<16,te=te+ne|0,k^=te,k=k>>>32-12|k<<12,_=_+I|0,X^=_,X=X>>>32-16|X<<16,M=M+X|0,I^=M,I=I>>>32-12|I<<12,$=$+d|0,z^=$,z=z>>>32-16|z<<16,W=W+z|0,d^=W,d=d>>>32-12|d<<12,_=_+I|0,X^=_,X=X>>>32-8|X<<8,M=M+X|0,I^=M,I=I>>>32-7|I<<7,$=$+d|0,z^=$,z=z>>>32-8|z<<8,W=W+z|0,d^=W,d=d>>>32-7|d<<7,x=x+k|0,ne^=x,ne=ne>>>32-8|ne<<8,te=te+ne|0,k^=te,k=k>>>32-7|k<<7,y=y+P|0,B^=y,B=B>>>32-8|B<<8,G=G+B|0,P^=G,P=P>>>32-7|P<<7;$t.writeUint32LE(y+r|0,t,0),$t.writeUint32LE(x+i|0,t,4),$t.writeUint32LE(_+o|0,t,8),$t.writeUint32LE($+s|0,t,12),$t.writeUint32LE(d+a|0,t,16),$t.writeUint32LE(P+l|0,t,20),$t.writeUint32LE(k+u|0,t,24),$t.writeUint32LE(I+c|0,t,28),$t.writeUint32LE(M+f|0,t,32),$t.writeUint32LE(W+p|0,t,36),$t.writeUint32LE(G+w|0,t,40),$t.writeUint32LE(te+v|0,t,44),$t.writeUint32LE(ne+C|0,t,48),$t.writeUint32LE(X+E|0,t,52),$t.writeUint32LE(z+b|0,t,56),$t.writeUint32LE(B+g|0,t,60)}function l4(t,e,n,r,i){if(i===void 0&&(i=0),t.length!==32)throw new Error("ChaCha: key size must be 32 bytes");if(r.length<n.length)throw new Error("ChaCha: destination is shorter than source");var o,s;if(i===0){if(e.length!==8&&e.length!==12)throw new Error("ChaCha nonce must be 8 or 12 bytes");o=new Uint8Array(16),s=o.length-e.length,o.set(e,s)}else{if(e.length!==16)throw new Error("ChaCha nonce with counter must be 16 bytes");o=e,s=i}for(var a=new Uint8Array(64),l=0;l<n.length;l+=64){yT(a,o,t);for(var u=l;u<l+64&&u<n.length;u++)r[u]=n[u]^a[u-l];xT(o,0,s)}return S1.wipe(a),i===0&&S1.wipe(o),r}bf.streamXOR=l4;function bT(t,e,n,r){return r===void 0&&(r=0),S1.wipe(n),l4(t,e,n,n,r)}bf.stream=bT;function xT(t,e,n){for(var r=1;n--;)r=r+(t[e]&255)|0,t[e]=r&255,r>>>=8,e++;if(r>0)throw new Error("ChaCha: counter overflow")}var u4={},Ti={};Object.defineProperty(Ti,"__esModule",{value:!0});function CT(t,e,n){return~(t-1)&e|t-1&n}Ti.select=CT;function ET(t,e){return(t|0)-(e|0)-1>>>31&1}Ti.lessOrEqual=ET;function c4(t,e){if(t.length!==e.length)return 0;for(var n=0,r=0;r<t.length;r++)n|=t[r]^e[r];return 1&n-1>>>8}Ti.compare=c4;function _T(t,e){return t.length===0||e.length===0?!1:c4(t,e)!==0}Ti.equal=_T;(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=Ti,n=Fn;t.DIGEST_LENGTH=16;var r=function(){function s(a){this.digestLength=t.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var l=a[0]|a[1]<<8;this._r[0]=l&8191;var u=a[2]|a[3]<<8;this._r[1]=(l>>>13|u<<3)&8191;var c=a[4]|a[5]<<8;this._r[2]=(u>>>10|c<<6)&7939;var f=a[6]|a[7]<<8;this._r[3]=(c>>>7|f<<9)&8191;var p=a[8]|a[9]<<8;this._r[4]=(f>>>4|p<<12)&255,this._r[5]=p>>>1&8190;var w=a[10]|a[11]<<8;this._r[6]=(p>>>14|w<<2)&8191;var v=a[12]|a[13]<<8;this._r[7]=(w>>>11|v<<5)&8065;var C=a[14]|a[15]<<8;this._r[8]=(v>>>8|C<<8)&8191,this._r[9]=C>>>5&127,this._pad[0]=a[16]|a[17]<<8,this._pad[1]=a[18]|a[19]<<8,this._pad[2]=a[20]|a[21]<<8,this._pad[3]=a[22]|a[23]<<8,this._pad[4]=a[24]|a[25]<<8,this._pad[5]=a[26]|a[27]<<8,this._pad[6]=a[28]|a[29]<<8,this._pad[7]=a[30]|a[31]<<8}return s.prototype._blocks=function(a,l,u){for(var c=this._fin?0:2048,f=this._h[0],p=this._h[1],w=this._h[2],v=this._h[3],C=this._h[4],E=this._h[5],b=this._h[6],g=this._h[7],y=this._h[8],x=this._h[9],_=this._r[0],$=this._r[1],d=this._r[2],P=this._r[3],k=this._r[4],I=this._r[5],M=this._r[6],W=this._r[7],G=this._r[8],te=this._r[9];u>=16;){var ne=a[l+0]|a[l+1]<<8;f+=ne&8191;var X=a[l+2]|a[l+3]<<8;p+=(ne>>>13|X<<3)&8191;var z=a[l+4]|a[l+5]<<8;w+=(X>>>10|z<<6)&8191;var B=a[l+6]|a[l+7]<<8;v+=(z>>>7|B<<9)&8191;var q=a[l+8]|a[l+9]<<8;C+=(B>>>4|q<<12)&8191,E+=q>>>1&8191;var Y=a[l+10]|a[l+11]<<8;b+=(q>>>14|Y<<2)&8191;var Z=a[l+12]|a[l+13]<<8;g+=(Y>>>11|Z<<5)&8191;var J=a[l+14]|a[l+15]<<8;y+=(Z>>>8|J<<8)&8191,x+=J>>>5|c;var V=0,ie=V;ie+=f*_,ie+=p*(5*te),ie+=w*(5*G),ie+=v*(5*W),ie+=C*(5*M),V=ie>>>13,ie&=8191,ie+=E*(5*I),ie+=b*(5*k),ie+=g*(5*P),ie+=y*(5*d),ie+=x*(5*$),V+=ie>>>13,ie&=8191;var ce=V;ce+=f*$,ce+=p*_,ce+=w*(5*te),ce+=v*(5*G),ce+=C*(5*W),V=ce>>>13,ce&=8191,ce+=E*(5*M),ce+=b*(5*I),ce+=g*(5*k),ce+=y*(5*P),ce+=x*(5*d),V+=ce>>>13,ce&=8191;var ae=V;ae+=f*d,ae+=p*$,ae+=w*_,ae+=v*(5*te),ae+=C*(5*G),V=ae>>>13,ae&=8191,ae+=E*(5*W),ae+=b*(5*M),ae+=g*(5*I),ae+=y*(5*k),ae+=x*(5*P),V+=ae>>>13,ae&=8191;var pe=V;pe+=f*P,pe+=p*d,pe+=w*$,pe+=v*_,pe+=C*(5*te),V=pe>>>13,pe&=8191,pe+=E*(5*G),pe+=b*(5*W),pe+=g*(5*M),pe+=y*(5*I),pe+=x*(5*k),V+=pe>>>13,pe&=8191;var ge=V;ge+=f*k,ge+=p*P,ge+=w*d,ge+=v*$,ge+=C*_,V=ge>>>13,ge&=8191,ge+=E*(5*te),ge+=b*(5*G),ge+=g*(5*W),ge+=y*(5*M),ge+=x*(5*I),V+=ge>>>13,ge&=8191;var ye=V;ye+=f*I,ye+=p*k,ye+=w*P,ye+=v*d,ye+=C*$,V=ye>>>13,ye&=8191,ye+=E*_,ye+=b*(5*te),ye+=g*(5*G),ye+=y*(5*W),ye+=x*(5*M),V+=ye>>>13,ye&=8191;var Ce=V;Ce+=f*M,Ce+=p*I,Ce+=w*k,Ce+=v*P,Ce+=C*d,V=Ce>>>13,Ce&=8191,Ce+=E*$,Ce+=b*_,Ce+=g*(5*te),Ce+=y*(5*G),Ce+=x*(5*W),V+=Ce>>>13,Ce&=8191;var _e=V;_e+=f*W,_e+=p*M,_e+=w*I,_e+=v*k,_e+=C*P,V=_e>>>13,_e&=8191,_e+=E*d,_e+=b*$,_e+=g*_,_e+=y*(5*te),_e+=x*(5*G),V+=_e>>>13,_e&=8191;var Se=V;Se+=f*G,Se+=p*W,Se+=w*M,Se+=v*I,Se+=C*k,V=Se>>>13,Se&=8191,Se+=E*P,Se+=b*d,Se+=g*$,Se+=y*_,Se+=x*(5*te),V+=Se>>>13,Se&=8191;var be=V;be+=f*te,be+=p*G,be+=w*W,be+=v*M,be+=C*I,V=be>>>13,be&=8191,be+=E*k,be+=b*P,be+=g*d,be+=y*$,be+=x*_,V+=be>>>13,be&=8191,V=(V<<2)+V|0,V=V+ie|0,ie=V&8191,V=V>>>13,ce+=V,f=ie,p=ce,w=ae,v=pe,C=ge,E=ye,b=Ce,g=_e,y=Se,x=be,l+=16,u-=16}this._h[0]=f,this._h[1]=p,this._h[2]=w,this._h[3]=v,this._h[4]=C,this._h[5]=E,this._h[6]=b,this._h[7]=g,this._h[8]=y,this._h[9]=x},s.prototype.finish=function(a,l){l===void 0&&(l=0);var u=new Uint16Array(10),c,f,p,w;if(this._leftover){for(w=this._leftover,this._buffer[w++]=1;w<16;w++)this._buffer[w]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(c=this._h[1]>>>13,this._h[1]&=8191,w=2;w<10;w++)this._h[w]+=c,c=this._h[w]>>>13,this._h[w]&=8191;for(this._h[0]+=c*5,c=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=c,c=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=c,u[0]=this._h[0]+5,c=u[0]>>>13,u[0]&=8191,w=1;w<10;w++)u[w]=this._h[w]+c,c=u[w]>>>13,u[w]&=8191;for(u[9]-=8192,f=(c^1)-1,w=0;w<10;w++)u[w]&=f;for(f=~f,w=0;w<10;w++)this._h[w]=this._h[w]&f|u[w];for(this._h[0]=(this._h[0]|this._h[1]<<13)&65535,this._h[1]=(this._h[1]>>>3|this._h[2]<<10)&65535,this._h[2]=(this._h[2]>>>6|this._h[3]<<7)&65535,this._h[3]=(this._h[3]>>>9|this._h[4]<<4)&65535,this._h[4]=(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14)&65535,this._h[5]=(this._h[6]>>>2|this._h[7]<<11)&65535,this._h[6]=(this._h[7]>>>5|this._h[8]<<8)&65535,this._h[7]=(this._h[8]>>>8|this._h[9]<<5)&65535,p=this._h[0]+this._pad[0],this._h[0]=p&65535,w=1;w<8;w++)p=(this._h[w]+this._pad[w]|0)+(p>>>16)|0,this._h[w]=p&65535;return a[l+0]=this._h[0]>>>0,a[l+1]=this._h[0]>>>8,a[l+2]=this._h[1]>>>0,a[l+3]=this._h[1]>>>8,a[l+4]=this._h[2]>>>0,a[l+5]=this._h[2]>>>8,a[l+6]=this._h[3]>>>0,a[l+7]=this._h[3]>>>8,a[l+8]=this._h[4]>>>0,a[l+9]=this._h[4]>>>8,a[l+10]=this._h[5]>>>0,a[l+11]=this._h[5]>>>8,a[l+12]=this._h[6]>>>0,a[l+13]=this._h[6]>>>8,a[l+14]=this._h[7]>>>0,a[l+15]=this._h[7]>>>8,this._finished=!0,this},s.prototype.update=function(a){var l=0,u=a.length,c;if(this._leftover){c=16-this._leftover,c>u&&(c=u);for(var f=0;f<c;f++)this._buffer[this._leftover+f]=a[l+f];if(u-=c,l+=c,this._leftover+=c,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(u>=16&&(c=u-u%16,this._blocks(a,l,c),l+=c,u-=c),u){for(var f=0;f<u;f++)this._buffer[this._leftover+f]=a[l+f];this._leftover+=u}return this},s.prototype.digest=function(){if(this._finished)throw new Error("Poly1305 was finished");var a=new Uint8Array(16);return this.finish(a),a},s.prototype.clean=function(){return n.wipe(this._buffer),n.wipe(this._r),n.wipe(this._h),n.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},s}();t.Poly1305=r;function i(s,a){var l=new r(s);l.update(a);var u=l.digest();return l.clean(),u}t.oneTimeAuth=i;function o(s,a){return s.length!==t.DIGEST_LENGTH||a.length!==t.DIGEST_LENGTH?!1:e.equal(s,a)}t.equal=o})(u4);(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=bf,n=u4,r=Fn,i=ue,o=Ti;t.KEY_LENGTH=32,t.NONCE_LENGTH=12,t.TAG_LENGTH=16;var s=new Uint8Array(16),a=function(){function l(u){if(this.nonceLength=t.NONCE_LENGTH,this.tagLength=t.TAG_LENGTH,u.length!==t.KEY_LENGTH)throw new Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(u)}return l.prototype.seal=function(u,c,f,p){if(u.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");var w=new Uint8Array(16);w.set(u,w.length-u.length);var v=new Uint8Array(32);e.stream(this._key,w,v,4);var C=c.length+this.tagLength,E;if(p){if(p.length!==C)throw new Error("ChaCha20Poly1305: incorrect destination length");E=p}else E=new Uint8Array(C);return e.streamXOR(this._key,w,c,E,4),this._authenticate(E.subarray(E.length-this.tagLength,E.length),v,E.subarray(0,E.length-this.tagLength),f),r.wipe(w),E},l.prototype.open=function(u,c,f,p){if(u.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");if(c.length<this.tagLength)return null;var w=new Uint8Array(16);w.set(u,w.length-u.length);var v=new Uint8Array(32);e.stream(this._key,w,v,4);var C=new Uint8Array(this.tagLength);if(this._authenticate(C,v,c.subarray(0,c.length-this.tagLength),f),!o.equal(C,c.subarray(c.length-this.tagLength,c.length)))return null;var E=c.length-this.tagLength,b;if(p){if(p.length!==E)throw new Error("ChaCha20Poly1305: incorrect destination length");b=p}else b=new Uint8Array(E);return e.streamXOR(this._key,w,c.subarray(0,c.length-this.tagLength),b,4),r.wipe(w),b},l.prototype.clean=function(){return r.wipe(this._key),this},l.prototype._authenticate=function(u,c,f,p){var w=new n.Poly1305(c);p&&(w.update(p),p.length%16>0&&w.update(s.subarray(p.length%16))),w.update(f),f.length%16>0&&w.update(s.subarray(f.length%16));var v=new Uint8Array(8);p&&i.writeUint64LE(p.length,v),w.update(v),i.writeUint64LE(f.length,v),w.update(v);for(var C=w.digest(),E=0;E<C.length;E++)u[E]=C[E];w.clean(),r.wipe(C),r.wipe(v)},l}();t.ChaCha20Poly1305=a})(jg);var d4={},cu={},Fg={};Object.defineProperty(Fg,"__esModule",{value:!0});function ST(t){return typeof t.saveState<"u"&&typeof t.restoreState<"u"&&typeof t.cleanSavedState<"u"}Fg.isSerializableHash=ST;Object.defineProperty(cu,"__esModule",{value:!0});var Hn=Fg,$T=Ti,PT=Fn,f4=function(){function t(e,n){this._finished=!1,this._inner=new e,this._outer=new e,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var r=new Uint8Array(this.blockSize);n.length>this.blockSize?this._inner.update(n).finish(r).clean():r.set(n);for(var i=0;i<r.length;i++)r[i]^=54;this._inner.update(r);for(var i=0;i<r.length;i++)r[i]^=106;this._outer.update(r),Hn.isSerializableHash(this._inner)&&Hn.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),PT.wipe(r)}return t.prototype.reset=function(){if(!Hn.isSerializableHash(this._inner)||!Hn.isSerializableHash(this._outer))throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},t.prototype.clean=function(){Hn.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),Hn.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},t.prototype.update=function(e){return this._inner.update(e),this},t.prototype.finish=function(e){return this._finished?(this._outer.finish(e),this):(this._inner.finish(e),this._outer.update(e.subarray(0,this.digestLength)).finish(e),this._finished=!0,this)},t.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},t.prototype.saveState=function(){if(!Hn.isSerializableHash(this._inner))throw new Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},t.prototype.restoreState=function(e){if(!Hn.isSerializableHash(this._inner)||!Hn.isSerializableHash(this._outer))throw new Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(e),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},t.prototype.cleanSavedState=function(e){if(!Hn.isSerializableHash(this._inner))throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(e)},t}();cu.HMAC=f4;function AT(t,e,n){var r=new f4(t,e);r.update(n);var i=r.digest();return r.clean(),i}cu.hmac=AT;cu.equal=$T.equal;Object.defineProperty(d4,"__esModule",{value:!0});var L2=cu,U2=Fn,DT=function(){function t(e,n,r,i){r===void 0&&(r=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=e,this._info=i;var o=L2.hmac(this._hash,r,n);this._hmac=new L2.HMAC(e,o),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return t.prototype._fillBuffer=function(){this._counter[0]++;var e=this._counter[0];if(e===0)throw new Error("hkdf: cannot expand more");this._hmac.reset(),e>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},t.prototype.expand=function(e){for(var n=new Uint8Array(e),r=0;r<n.length;r++)this._bufpos===this._buffer.length&&this._fillBuffer(),n[r]=this._buffer[this._bufpos++];return n},t.prototype.clean=function(){this._hmac.clean(),U2.wipe(this._buffer),U2.wipe(this._counter),this._bufpos=0},t}(),TT=d4.HKDF=DT,xf={},Cf={},Ef={};Object.defineProperty(Ef,"__esModule",{value:!0});Ef.BrowserRandomSource=void 0;const j2=65536;class kT{constructor(){this.isAvailable=!1,this.isInstantiated=!1;const e=typeof self<"u"?self.crypto||self.msCrypto:null;e&&e.getRandomValues!==void 0&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(e){if(!this.isAvailable||!this._crypto)throw new Error("Browser random byte generator is not available.");const n=new Uint8Array(e);for(let r=0;r<n.length;r+=j2)this._crypto.getRandomValues(n.subarray(r,r+Math.min(n.length-r,j2)));return n}}Ef.BrowserRandomSource=kT;function OT(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var _f={};const IT={},NT=Object.freeze(Object.defineProperty({__proto__:null,default:IT},Symbol.toStringTag,{value:"Module"})),RT=b3(NT);Object.defineProperty(_f,"__esModule",{value:!0});_f.NodeRandomSource=void 0;const MT=Fn;class BT{constructor(){if(this.isAvailable=!1,this.isInstantiated=!1,typeof OT<"u"){const e=RT;e&&e.randomBytes&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(e){if(!this.isAvailable||!this._crypto)throw new Error("Node.js random byte generator is not available.");let n=this._crypto.randomBytes(e);if(n.length!==e)throw new Error("NodeRandomSource: got fewer bytes than requested");const r=new Uint8Array(e);for(let i=0;i<r.length;i++)r[i]=n[i];return(0,MT.wipe)(n),r}}_f.NodeRandomSource=BT;Object.defineProperty(Cf,"__esModule",{value:!0});Cf.SystemRandomSource=void 0;const LT=Ef,UT=_f;class jT{constructor(){if(this.isAvailable=!1,this.name="",this._source=new LT.BrowserRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Browser";return}if(this._source=new UT.NodeRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Node";return}}randomBytes(e){if(!this.isAvailable)throw new Error("System random byte generator is not available.");return this._source.randomBytes(e)}}Cf.SystemRandomSource=jT;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.randomStringForEntropy=t.randomString=t.randomUint32=t.randomBytes=t.defaultRandomSource=void 0;const e=Cf,n=ue,r=Fn;t.defaultRandomSource=new e.SystemRandomSource;function i(u,c=t.defaultRandomSource){return c.randomBytes(u)}t.randomBytes=i;function o(u=t.defaultRandomSource){const c=i(4,u),f=(0,n.readUint32LE)(c);return(0,r.wipe)(c),f}t.randomUint32=o;const s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function a(u,c=s,f=t.defaultRandomSource){if(c.length<2)throw new Error("randomString charset is too short");if(c.length>256)throw new Error("randomString charset is too long");let p="";const w=c.length,v=256-256%w;for(;u>0;){const C=i(Math.ceil(u*256/v),f);for(let E=0;E<C.length&&u>0;E++){const b=C[E];b<v&&(p+=c.charAt(b%w),u--)}(0,r.wipe)(C)}return p}t.randomString=a;function l(u,c=s,f=t.defaultRandomSource){const p=Math.ceil(u/(Math.log(c.length)/Math.LN2));return a(p,c,f)}t.randomStringForEntropy=l})(xf);var Sf={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=ue,n=Fn;t.DIGEST_LENGTH=32,t.BLOCK_SIZE=64;var r=function(){function a(){this.digestLength=t.DIGEST_LENGTH,this.blockSize=t.BLOCK_SIZE,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return a.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},a.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},a.prototype.clean=function(){n.wipe(this._buffer),n.wipe(this._temp),this.reset()},a.prototype.update=function(l,u){if(u===void 0&&(u=l.length),this._finished)throw new Error("SHA256: can't update because hash was finished.");var c=0;if(this._bytesHashed+=u,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&u>0;)this._buffer[this._bufferLength++]=l[c++],u--;this._bufferLength===this.blockSize&&(o(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(u>=this.blockSize&&(c=o(this._temp,this._state,l,c,u),u%=this.blockSize);u>0;)this._buffer[this._bufferLength++]=l[c++],u--;return this},a.prototype.finish=function(l){if(!this._finished){var u=this._bytesHashed,c=this._bufferLength,f=u/536870912|0,p=u<<3,w=u%64<56?64:128;this._buffer[c]=128;for(var v=c+1;v<w-8;v++)this._buffer[v]=0;e.writeUint32BE(f,this._buffer,w-8),e.writeUint32BE(p,this._buffer,w-4),o(this._temp,this._state,this._buffer,0,w),this._finished=!0}for(var v=0;v<this.digestLength/4;v++)e.writeUint32BE(this._state[v],l,v*4);return this},a.prototype.digest=function(){var l=new Uint8Array(this.digestLength);return this.finish(l),l},a.prototype.saveState=function(){if(this._finished)throw new Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},a.prototype.restoreState=function(l){return this._state.set(l.state),this._bufferLength=l.bufferLength,l.buffer&&this._buffer.set(l.buffer),this._bytesHashed=l.bytesHashed,this._finished=!1,this},a.prototype.cleanSavedState=function(l){n.wipe(l.state),l.buffer&&n.wipe(l.buffer),l.bufferLength=0,l.bytesHashed=0},a}();t.SHA256=r;var i=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function o(a,l,u,c,f){for(;f>=64;){for(var p=l[0],w=l[1],v=l[2],C=l[3],E=l[4],b=l[5],g=l[6],y=l[7],x=0;x<16;x++){var _=c+x*4;a[x]=e.readUint32BE(u,_)}for(var x=16;x<64;x++){var $=a[x-2],d=($>>>17|$<<32-17)^($>>>19|$<<32-19)^$>>>10;$=a[x-15];var P=($>>>7|$<<32-7)^($>>>18|$<<32-18)^$>>>3;a[x]=(d+a[x-7]|0)+(P+a[x-16]|0)}for(var x=0;x<64;x++){var d=(((E>>>6|E<<26)^(E>>>11|E<<21)^(E>>>25|E<<7))+(E&b^~E&g)|0)+(y+(i[x]+a[x]|0)|0)|0,P=((p>>>2|p<<32-2)^(p>>>13|p<<32-13)^(p>>>22|p<<32-22))+(p&w^p&v^w&v)|0;y=g,g=b,b=E,E=C+d|0,C=v,v=w,w=p,p=d+P|0}l[0]+=p,l[1]+=w,l[2]+=v,l[3]+=C,l[4]+=E,l[5]+=b,l[6]+=g,l[7]+=y,c+=64,f-=64}return c}function s(a){var l=new r;l.update(a);var u=l.digest();return l.clean(),u}t.hash=s})(Sf);var zg={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.sharedKey=t.generateKeyPair=t.generateKeyPairFromSeed=t.scalarMultBase=t.scalarMult=t.SHARED_KEY_LENGTH=t.SECRET_KEY_LENGTH=t.PUBLIC_KEY_LENGTH=void 0;const e=xf,n=Fn;t.PUBLIC_KEY_LENGTH=32,t.SECRET_KEY_LENGTH=32,t.SHARED_KEY_LENGTH=32;function r(x){const _=new Float64Array(16);if(x)for(let $=0;$<x.length;$++)_[$]=x[$];return _}const i=new Uint8Array(32);i[0]=9;const o=r([56129,1]);function s(x){let _=1;for(let $=0;$<16;$++){let d=x[$]+_+65535;_=Math.floor(d/65536),x[$]=d-_*65536}x[0]+=_-1+37*(_-1)}function a(x,_,$){const d=~($-1);for(let P=0;P<16;P++){const k=d&(x[P]^_[P]);x[P]^=k,_[P]^=k}}function l(x,_){const $=r(),d=r();for(let P=0;P<16;P++)d[P]=_[P];s(d),s(d),s(d);for(let P=0;P<2;P++){$[0]=d[0]-65517;for(let I=1;I<15;I++)$[I]=d[I]-65535-($[I-1]>>16&1),$[I-1]&=65535;$[15]=d[15]-32767-($[14]>>16&1);const k=$[15]>>16&1;$[14]&=65535,a(d,$,1-k)}for(let P=0;P<16;P++)x[2*P]=d[P]&255,x[2*P+1]=d[P]>>8}function u(x,_){for(let $=0;$<16;$++)x[$]=_[2*$]+(_[2*$+1]<<8);x[15]&=32767}function c(x,_,$){for(let d=0;d<16;d++)x[d]=_[d]+$[d]}function f(x,_,$){for(let d=0;d<16;d++)x[d]=_[d]-$[d]}function p(x,_,$){let d,P,k=0,I=0,M=0,W=0,G=0,te=0,ne=0,X=0,z=0,B=0,q=0,Y=0,Z=0,J=0,V=0,ie=0,ce=0,ae=0,pe=0,ge=0,ye=0,Ce=0,_e=0,Se=0,be=0,Yt=0,kr=0,Oi=0,Or=0,Zs=0,mu=0,rt=$[0],Ke=$[1],Pe=$[2],Ye=$[3],at=$[4],Ne=$[5],lt=$[6],S=$[7],h=$[8],m=$[9],A=$[10],D=$[11],N=$[12],R=$[13],ee=$[14],de=$[15];d=_[0],k+=d*rt,I+=d*Ke,M+=d*Pe,W+=d*Ye,G+=d*at,te+=d*Ne,ne+=d*lt,X+=d*S,z+=d*h,B+=d*m,q+=d*A,Y+=d*D,Z+=d*N,J+=d*R,V+=d*ee,ie+=d*de,d=_[1],I+=d*rt,M+=d*Ke,W+=d*Pe,G+=d*Ye,te+=d*at,ne+=d*Ne,X+=d*lt,z+=d*S,B+=d*h,q+=d*m,Y+=d*A,Z+=d*D,J+=d*N,V+=d*R,ie+=d*ee,ce+=d*de,d=_[2],M+=d*rt,W+=d*Ke,G+=d*Pe,te+=d*Ye,ne+=d*at,X+=d*Ne,z+=d*lt,B+=d*S,q+=d*h,Y+=d*m,Z+=d*A,J+=d*D,V+=d*N,ie+=d*R,ce+=d*ee,ae+=d*de,d=_[3],W+=d*rt,G+=d*Ke,te+=d*Pe,ne+=d*Ye,X+=d*at,z+=d*Ne,B+=d*lt,q+=d*S,Y+=d*h,Z+=d*m,J+=d*A,V+=d*D,ie+=d*N,ce+=d*R,ae+=d*ee,pe+=d*de,d=_[4],G+=d*rt,te+=d*Ke,ne+=d*Pe,X+=d*Ye,z+=d*at,B+=d*Ne,q+=d*lt,Y+=d*S,Z+=d*h,J+=d*m,V+=d*A,ie+=d*D,ce+=d*N,ae+=d*R,pe+=d*ee,ge+=d*de,d=_[5],te+=d*rt,ne+=d*Ke,X+=d*Pe,z+=d*Ye,B+=d*at,q+=d*Ne,Y+=d*lt,Z+=d*S,J+=d*h,V+=d*m,ie+=d*A,ce+=d*D,ae+=d*N,pe+=d*R,ge+=d*ee,ye+=d*de,d=_[6],ne+=d*rt,X+=d*Ke,z+=d*Pe,B+=d*Ye,q+=d*at,Y+=d*Ne,Z+=d*lt,J+=d*S,V+=d*h,ie+=d*m,ce+=d*A,ae+=d*D,pe+=d*N,ge+=d*R,ye+=d*ee,Ce+=d*de,d=_[7],X+=d*rt,z+=d*Ke,B+=d*Pe,q+=d*Ye,Y+=d*at,Z+=d*Ne,J+=d*lt,V+=d*S,ie+=d*h,ce+=d*m,ae+=d*A,pe+=d*D,ge+=d*N,ye+=d*R,Ce+=d*ee,_e+=d*de,d=_[8],z+=d*rt,B+=d*Ke,q+=d*Pe,Y+=d*Ye,Z+=d*at,J+=d*Ne,V+=d*lt,ie+=d*S,ce+=d*h,ae+=d*m,pe+=d*A,ge+=d*D,ye+=d*N,Ce+=d*R,_e+=d*ee,Se+=d*de,d=_[9],B+=d*rt,q+=d*Ke,Y+=d*Pe,Z+=d*Ye,J+=d*at,V+=d*Ne,ie+=d*lt,ce+=d*S,ae+=d*h,pe+=d*m,ge+=d*A,ye+=d*D,Ce+=d*N,_e+=d*R,Se+=d*ee,be+=d*de,d=_[10],q+=d*rt,Y+=d*Ke,Z+=d*Pe,J+=d*Ye,V+=d*at,ie+=d*Ne,ce+=d*lt,ae+=d*S,pe+=d*h,ge+=d*m,ye+=d*A,Ce+=d*D,_e+=d*N,Se+=d*R,be+=d*ee,Yt+=d*de,d=_[11],Y+=d*rt,Z+=d*Ke,J+=d*Pe,V+=d*Ye,ie+=d*at,ce+=d*Ne,ae+=d*lt,pe+=d*S,ge+=d*h,ye+=d*m,Ce+=d*A,_e+=d*D,Se+=d*N,be+=d*R,Yt+=d*ee,kr+=d*de,d=_[12],Z+=d*rt,J+=d*Ke,V+=d*Pe,ie+=d*Ye,ce+=d*at,ae+=d*Ne,pe+=d*lt,ge+=d*S,ye+=d*h,Ce+=d*m,_e+=d*A,Se+=d*D,be+=d*N,Yt+=d*R,kr+=d*ee,Oi+=d*de,d=_[13],J+=d*rt,V+=d*Ke,ie+=d*Pe,ce+=d*Ye,ae+=d*at,pe+=d*Ne,ge+=d*lt,ye+=d*S,Ce+=d*h,_e+=d*m,Se+=d*A,be+=d*D,Yt+=d*N,kr+=d*R,Oi+=d*ee,Or+=d*de,d=_[14],V+=d*rt,ie+=d*Ke,ce+=d*Pe,ae+=d*Ye,pe+=d*at,ge+=d*Ne,ye+=d*lt,Ce+=d*S,_e+=d*h,Se+=d*m,be+=d*A,Yt+=d*D,kr+=d*N,Oi+=d*R,Or+=d*ee,Zs+=d*de,d=_[15],ie+=d*rt,ce+=d*Ke,ae+=d*Pe,pe+=d*Ye,ge+=d*at,ye+=d*Ne,Ce+=d*lt,_e+=d*S,Se+=d*h,be+=d*m,Yt+=d*A,kr+=d*D,Oi+=d*N,Or+=d*R,Zs+=d*ee,mu+=d*de,k+=38*ce,I+=38*ae,M+=38*pe,W+=38*ge,G+=38*ye,te+=38*Ce,ne+=38*_e,X+=38*Se,z+=38*be,B+=38*Yt,q+=38*kr,Y+=38*Oi,Z+=38*Or,J+=38*Zs,V+=38*mu,P=1,d=k+P+65535,P=Math.floor(d/65536),k=d-P*65536,d=I+P+65535,P=Math.floor(d/65536),I=d-P*65536,d=M+P+65535,P=Math.floor(d/65536),M=d-P*65536,d=W+P+65535,P=Math.floor(d/65536),W=d-P*65536,d=G+P+65535,P=Math.floor(d/65536),G=d-P*65536,d=te+P+65535,P=Math.floor(d/65536),te=d-P*65536,d=ne+P+65535,P=Math.floor(d/65536),ne=d-P*65536,d=X+P+65535,P=Math.floor(d/65536),X=d-P*65536,d=z+P+65535,P=Math.floor(d/65536),z=d-P*65536,d=B+P+65535,P=Math.floor(d/65536),B=d-P*65536,d=q+P+65535,P=Math.floor(d/65536),q=d-P*65536,d=Y+P+65535,P=Math.floor(d/65536),Y=d-P*65536,d=Z+P+65535,P=Math.floor(d/65536),Z=d-P*65536,d=J+P+65535,P=Math.floor(d/65536),J=d-P*65536,d=V+P+65535,P=Math.floor(d/65536),V=d-P*65536,d=ie+P+65535,P=Math.floor(d/65536),ie=d-P*65536,k+=P-1+37*(P-1),P=1,d=k+P+65535,P=Math.floor(d/65536),k=d-P*65536,d=I+P+65535,P=Math.floor(d/65536),I=d-P*65536,d=M+P+65535,P=Math.floor(d/65536),M=d-P*65536,d=W+P+65535,P=Math.floor(d/65536),W=d-P*65536,d=G+P+65535,P=Math.floor(d/65536),G=d-P*65536,d=te+P+65535,P=Math.floor(d/65536),te=d-P*65536,d=ne+P+65535,P=Math.floor(d/65536),ne=d-P*65536,d=X+P+65535,P=Math.floor(d/65536),X=d-P*65536,d=z+P+65535,P=Math.floor(d/65536),z=d-P*65536,d=B+P+65535,P=Math.floor(d/65536),B=d-P*65536,d=q+P+65535,P=Math.floor(d/65536),q=d-P*65536,d=Y+P+65535,P=Math.floor(d/65536),Y=d-P*65536,d=Z+P+65535,P=Math.floor(d/65536),Z=d-P*65536,d=J+P+65535,P=Math.floor(d/65536),J=d-P*65536,d=V+P+65535,P=Math.floor(d/65536),V=d-P*65536,d=ie+P+65535,P=Math.floor(d/65536),ie=d-P*65536,k+=P-1+37*(P-1),x[0]=k,x[1]=I,x[2]=M,x[3]=W,x[4]=G,x[5]=te,x[6]=ne,x[7]=X,x[8]=z,x[9]=B,x[10]=q,x[11]=Y,x[12]=Z,x[13]=J,x[14]=V,x[15]=ie}function w(x,_){p(x,_,_)}function v(x,_){const $=r();for(let d=0;d<16;d++)$[d]=_[d];for(let d=253;d>=0;d--)w($,$),d!==2&&d!==4&&p($,$,_);for(let d=0;d<16;d++)x[d]=$[d]}function C(x,_){const $=new Uint8Array(32),d=new Float64Array(80),P=r(),k=r(),I=r(),M=r(),W=r(),G=r();for(let z=0;z<31;z++)$[z]=x[z];$[31]=x[31]&127|64,$[0]&=248,u(d,_);for(let z=0;z<16;z++)k[z]=d[z];P[0]=M[0]=1;for(let z=254;z>=0;--z){const B=$[z>>>3]>>>(z&7)&1;a(P,k,B),a(I,M,B),c(W,P,I),f(P,P,I),c(I,k,M),f(k,k,M),w(M,W),w(G,P),p(P,I,P),p(I,k,W),c(W,P,I),f(P,P,I),w(k,P),f(I,M,G),p(P,I,o),c(P,P,M),p(I,I,P),p(P,M,G),p(M,k,d),w(k,W),a(P,k,B),a(I,M,B)}for(let z=0;z<16;z++)d[z+16]=P[z],d[z+32]=I[z],d[z+48]=k[z],d[z+64]=M[z];const te=d.subarray(32),ne=d.subarray(16);v(te,te),p(ne,ne,te);const X=new Uint8Array(32);return l(X,ne),X}t.scalarMult=C;function E(x){return C(x,i)}t.scalarMultBase=E;function b(x){if(x.length!==t.SECRET_KEY_LENGTH)throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);const _=new Uint8Array(x);return{publicKey:E(_),secretKey:_}}t.generateKeyPairFromSeed=b;function g(x){const _=(0,e.randomBytes)(32,x),$=b(_);return(0,n.wipe)(_),$}t.generateKeyPair=g;function y(x,_,$=!1){if(x.length!==t.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect secret key length");if(_.length!==t.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect public key length");const d=C(x,_);if($){let P=0;for(let k=0;k<d.length;k++)P|=d[k];if(P===0)throw new Error("X25519: invalid shared key")}return d}t.sharedKey=y})(zg);function Wg(t){return globalThis.Buffer!=null?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):t}function h4(t=0){return globalThis.Buffer!=null&&globalThis.Buffer.allocUnsafe!=null?Wg(globalThis.Buffer.allocUnsafe(t)):new Uint8Array(t)}function F2(t,e){e||(e=t.reduce((i,o)=>i+o.length,0));const n=h4(e);let r=0;for(const i of t)n.set(i,r),r+=i.length;return Wg(n)}function FT(t,e){if(t.length>=255)throw new TypeError("Alphabet too long");for(var n=new Uint8Array(256),r=0;r<n.length;r++)n[r]=255;for(var i=0;i<t.length;i++){var o=t.charAt(i),s=o.charCodeAt(0);if(n[s]!==255)throw new TypeError(o+" is ambiguous");n[s]=i}var a=t.length,l=t.charAt(0),u=Math.log(a)/Math.log(256),c=Math.log(256)/Math.log(a);function f(v){if(v instanceof Uint8Array||(ArrayBuffer.isView(v)?v=new Uint8Array(v.buffer,v.byteOffset,v.byteLength):Array.isArray(v)&&(v=Uint8Array.from(v))),!(v instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(v.length===0)return"";for(var C=0,E=0,b=0,g=v.length;b!==g&&v[b]===0;)b++,C++;for(var y=(g-b)*c+1>>>0,x=new Uint8Array(y);b!==g;){for(var _=v[b],$=0,d=y-1;(_!==0||$<E)&&d!==-1;d--,$++)_+=256*x[d]>>>0,x[d]=_%a>>>0,_=_/a>>>0;if(_!==0)throw new Error("Non-zero carry");E=$,b++}for(var P=y-E;P!==y&&x[P]===0;)P++;for(var k=l.repeat(C);P<y;++P)k+=t.charAt(x[P]);return k}function p(v){if(typeof v!="string")throw new TypeError("Expected String");if(v.length===0)return new Uint8Array;var C=0;if(v[C]!==" "){for(var E=0,b=0;v[C]===l;)E++,C++;for(var g=(v.length-C)*u+1>>>0,y=new Uint8Array(g);v[C];){var x=n[v.charCodeAt(C)];if(x===255)return;for(var _=0,$=g-1;(x!==0||_<b)&&$!==-1;$--,_++)x+=a*y[$]>>>0,y[$]=x%256>>>0,x=x/256>>>0;if(x!==0)throw new Error("Non-zero carry");b=_,C++}if(v[C]!==" "){for(var d=g-b;d!==g&&y[d]===0;)d++;for(var P=new Uint8Array(E+(g-d)),k=E;d!==g;)P[k++]=y[d++];return P}}}function w(v){var C=p(v);if(C)return C;throw new Error(`Non-${e} character`)}return{encode:f,decodeUnsafe:p,decode:w}}var zT=FT,WT=zT;const HT=t=>{if(t instanceof Uint8Array&&t.constructor.name==="Uint8Array")return t;if(t instanceof ArrayBuffer)return new Uint8Array(t);if(ArrayBuffer.isView(t))return new Uint8Array(t.buffer,t.byteOffset,t.byteLength);throw new Error("Unknown type, must be binary type")},VT=t=>new TextEncoder().encode(t),qT=t=>new TextDecoder().decode(t);class GT{constructor(e,n,r){this.name=e,this.prefix=n,this.baseEncode=r}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class KT{constructor(e,n,r){if(this.name=e,this.prefix=n,n.codePointAt(0)===void 0)throw new Error("Invalid prefix character");this.prefixCodePoint=n.codePointAt(0),this.baseDecode=r}decode(e){if(typeof e=="string"){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}else throw Error("Can only multibase decode strings")}or(e){return p4(this,e)}}class ZT{constructor(e){this.decoders=e}or(e){return p4(this,e)}decode(e){const n=e[0],r=this.decoders[n];if(r)return r.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const p4=(t,e)=>new ZT({...t.decoders||{[t.prefix]:t},...e.decoders||{[e.prefix]:e}});class QT{constructor(e,n,r,i){this.name=e,this.prefix=n,this.baseEncode=r,this.baseDecode=i,this.encoder=new GT(e,n,r),this.decoder=new KT(e,n,i)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}const $f=({name:t,prefix:e,encode:n,decode:r})=>new QT(t,e,n,r),du=({prefix:t,name:e,alphabet:n})=>{const{encode:r,decode:i}=WT(n,e);return $f({prefix:t,name:e,encode:r,decode:o=>HT(i(o))})},YT=(t,e,n,r)=>{const i={};for(let c=0;c<e.length;++c)i[e[c]]=c;let o=t.length;for(;t[o-1]==="=";)--o;const s=new Uint8Array(o*n/8|0);let a=0,l=0,u=0;for(let c=0;c<o;++c){const f=i[t[c]];if(f===void 0)throw new SyntaxError(`Non-${r} character`);l=l<<n|f,a+=n,a>=8&&(a-=8,s[u++]=255&l>>a)}if(a>=n||255&l<<8-a)throw new SyntaxError("Unexpected end of data");return s},XT=(t,e,n)=>{const r=e[e.length-1]==="=",i=(1<<n)-1;let o="",s=0,a=0;for(let l=0;l<t.length;++l)for(a=a<<8|t[l],s+=8;s>n;)s-=n,o+=e[i&a>>s];if(s&&(o+=e[i&a<<n-s]),r)for(;o.length*n&7;)o+="=";return o},Ct=({name:t,prefix:e,bitsPerChar:n,alphabet:r})=>$f({prefix:e,name:t,encode(i){return XT(i,r,n)},decode(i){return YT(i,r,n,t)}}),JT=$f({prefix:"\0",name:"identity",encode:t=>qT(t),decode:t=>VT(t)}),ek=Object.freeze(Object.defineProperty({__proto__:null,identity:JT},Symbol.toStringTag,{value:"Module"})),tk=Ct({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),nk=Object.freeze(Object.defineProperty({__proto__:null,base2:tk},Symbol.toStringTag,{value:"Module"})),rk=Ct({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),ik=Object.freeze(Object.defineProperty({__proto__:null,base8:rk},Symbol.toStringTag,{value:"Module"})),ok=du({prefix:"9",name:"base10",alphabet:"0123456789"}),sk=Object.freeze(Object.defineProperty({__proto__:null,base10:ok},Symbol.toStringTag,{value:"Module"})),ak=Ct({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),lk=Ct({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),uk=Object.freeze(Object.defineProperty({__proto__:null,base16:ak,base16upper:lk},Symbol.toStringTag,{value:"Module"})),ck=Ct({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),dk=Ct({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),fk=Ct({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),hk=Ct({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),pk=Ct({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),gk=Ct({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),mk=Ct({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),wk=Ct({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),vk=Ct({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),yk=Object.freeze(Object.defineProperty({__proto__:null,base32:ck,base32hex:pk,base32hexpad:mk,base32hexpadupper:wk,base32hexupper:gk,base32pad:fk,base32padupper:hk,base32upper:dk,base32z:vk},Symbol.toStringTag,{value:"Module"})),bk=du({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),xk=du({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),Ck=Object.freeze(Object.defineProperty({__proto__:null,base36:bk,base36upper:xk},Symbol.toStringTag,{value:"Module"})),Ek=du({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),_k=du({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),Sk=Object.freeze(Object.defineProperty({__proto__:null,base58btc:Ek,base58flickr:_k},Symbol.toStringTag,{value:"Module"})),$k=Ct({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),Pk=Ct({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),Ak=Ct({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),Dk=Ct({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),Tk=Object.freeze(Object.defineProperty({__proto__:null,base64:$k,base64pad:Pk,base64url:Ak,base64urlpad:Dk},Symbol.toStringTag,{value:"Module"})),g4=Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),kk=g4.reduce((t,e,n)=>(t[n]=e,t),[]),Ok=g4.reduce((t,e,n)=>(t[e.codePointAt(0)]=n,t),[]);function Ik(t){return t.reduce((e,n)=>(e+=kk[n],e),"")}function Nk(t){const e=[];for(const n of t){const r=Ok[n.codePointAt(0)];if(r===void 0)throw new Error(`Non-base256emoji character: ${n}`);e.push(r)}return new Uint8Array(e)}const Rk=$f({prefix:"🚀",name:"base256emoji",encode:Ik,decode:Nk}),Mk=Object.freeze(Object.defineProperty({__proto__:null,base256emoji:Rk},Symbol.toStringTag,{value:"Module"}));new TextEncoder;new TextDecoder;const z2={...ek,...nk,...ik,...sk,...uk,...yk,...Ck,...Sk,...Tk,...Mk};function m4(t,e,n,r){return{name:t,prefix:e,encoder:{name:t,prefix:e,encode:n},decoder:{decode:r}}}const W2=m4("utf8","u",t=>"u"+new TextDecoder("utf8").decode(t),t=>new TextEncoder().encode(t.substring(1))),I0=m4("ascii","a",t=>{let e="a";for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return e},t=>{t=t.substring(1);const e=h4(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}),w4={utf8:W2,"utf-8":W2,hex:z2.base16,latin1:I0,ascii:I0,binary:I0,...z2};function In(t,e="utf8"){const n=w4[e];if(!n)throw new Error(`Unsupported encoding "${e}"`);return(e==="utf8"||e==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?Wg(globalThis.Buffer.from(t,"utf-8")):n.decoder.decode(`${n.prefix}${t}`)}function jn(t,e="utf8"){const n=w4[e];if(!n)throw new Error(`Unsupported encoding "${e}"`);return(e==="utf8"||e==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?globalThis.Buffer.from(t.buffer,t.byteOffset,t.byteLength).toString("utf8"):n.encoder.encode(t).substring(1)}var H2=globalThis&&globalThis.__spreadArray||function(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))},Bk=function(){function t(e,n,r){this.name=e,this.version=n,this.os=r,this.type="browser"}return t}(),Lk=function(){function t(e){this.version=e,this.type="node",this.name="node",this.os=process.platform}return t}(),Uk=function(){function t(e,n,r,i){this.name=e,this.version=n,this.os=r,this.bot=i,this.type="bot-device"}return t}(),jk=function(){function t(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null}return t}(),Fk=function(){function t(){this.type="react-native",this.name="react-native",this.version=null,this.os=null}return t}(),zk=/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,Wk=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,V2=3,Hk=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",zk]],q2=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function Vk(t){return t?G2(t):typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"?new Fk:typeof navigator<"u"?G2(navigator.userAgent):Kk()}function qk(t){return t!==""&&Hk.reduce(function(e,n){var r=n[0],i=n[1];if(e)return e;var o=i.exec(t);return!!o&&[r,o]},!1)}function G2(t){var e=qk(t);if(!e)return null;var n=e[0],r=e[1];if(n==="searchbot")return new jk;var i=r[1]&&r[1].split(".").join("_").split("_").slice(0,3);i?i.length<V2&&(i=H2(H2([],i,!0),Zk(V2-i.length),!0)):i=[];var o=i.join("."),s=Gk(t),a=Wk.exec(t);return a&&a[1]?new Uk(n,o,s,a[1]):new Bk(n,o,s)}function Gk(t){for(var e=0,n=q2.length;e<n;e++){var r=q2[e],i=r[0],o=r[1],s=o.exec(t);if(s)return i}return null}function Kk(){var t=typeof process<"u"&&process.version;return t?new Lk(process.version.slice(1)):null}function Zk(t){for(var e=[],n=0;n<t;n++)e.push("0");return e}var Xi={};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var $1=function(t,e){return $1=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i])},$1(t,e)};function Qk(t,e){$1(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var P1=function(){return P1=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},P1.apply(this,arguments)};function Yk(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Xk(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o}function Jk(t,e){return function(n,r){e(n,r,t)}}function eO(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)}function tO(t,e,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(c){try{u(r.next(c))}catch(f){s(f)}}function l(c){try{u(r.throw(c))}catch(f){s(f)}}function u(c){c.done?o(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function nO(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function rO(t,e,n,r){r===void 0&&(r=n),t[r]=e[n]}function iO(t,e){for(var n in t)n!=="default"&&!e.hasOwnProperty(n)&&(e[n]=t[n])}function A1(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function v4(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,o=[],s;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return o}function oO(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(v4(arguments[e]));return t}function sO(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var r=Array(t),i=0,e=0;e<n;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}function jl(t){return this instanceof jl?(this.v=t,this):new jl(t)}function aO(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),i,o=[];return i={},s("next"),s("throw"),s("return"),i[Symbol.asyncIterator]=function(){return this},i;function s(p){r[p]&&(i[p]=function(w){return new Promise(function(v,C){o.push([p,w,v,C])>1||a(p,w)})})}function a(p,w){try{l(r[p](w))}catch(v){f(o[0][3],v)}}function l(p){p.value instanceof jl?Promise.resolve(p.value.v).then(u,c):f(o[0][2],p)}function u(p){a("next",p)}function c(p){a("throw",p)}function f(p,w){p(w),o.shift(),o.length&&a(o[0][0],o[0][1])}}function lO(t){var e,n;return e={},r("next"),r("throw",function(i){throw i}),r("return"),e[Symbol.iterator]=function(){return this},e;function r(i,o){e[i]=t[i]?function(s){return(n=!n)?{value:jl(t[i](s)),done:i==="return"}:o?o(s):s}:o}}function uO(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof A1=="function"?A1(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(o){n[o]=t[o]&&function(s){return new Promise(function(a,l){s=t[o](s),i(a,l,s.done,s.value)})}}function i(o,s,a,l){Promise.resolve(l).then(function(u){o({value:u,done:a})},s)}}function cO(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function dO(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function fO(t){return t&&t.__esModule?t:{default:t}}function hO(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)}function pO(t,e,n){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,n),n}const gO=Object.freeze(Object.defineProperty({__proto__:null,get __assign(){return P1},__asyncDelegator:lO,__asyncGenerator:aO,__asyncValues:uO,__await:jl,__awaiter:tO,__classPrivateFieldGet:hO,__classPrivateFieldSet:pO,__createBinding:rO,__decorate:Xk,__exportStar:iO,__extends:Qk,__generator:nO,__importDefault:fO,__importStar:dO,__makeTemplateObject:cO,__metadata:eO,__param:Jk,__read:v4,__rest:Yk,__spread:oO,__spreadArrays:sO,__values:A1},Symbol.toStringTag,{value:"Module"})),Pf=b3(gO);var N0={},fa={},K2;function mO(){if(K2)return fa;K2=1,Object.defineProperty(fa,"__esModule",{value:!0}),fa.delay=void 0;function t(e){return new Promise(n=>{setTimeout(()=>{n(!0)},e)})}return fa.delay=t,fa}var Ri={},R0={},Mi={},Z2;function wO(){return Z2||(Z2=1,Object.defineProperty(Mi,"__esModule",{value:!0}),Mi.ONE_THOUSAND=Mi.ONE_HUNDRED=void 0,Mi.ONE_HUNDRED=100,Mi.ONE_THOUSAND=1e3),Mi}var M0={},Q2;function vO(){return Q2||(Q2=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_YEAR=t.FOUR_WEEKS=t.THREE_WEEKS=t.TWO_WEEKS=t.ONE_WEEK=t.THIRTY_DAYS=t.SEVEN_DAYS=t.FIVE_DAYS=t.THREE_DAYS=t.ONE_DAY=t.TWENTY_FOUR_HOURS=t.TWELVE_HOURS=t.SIX_HOURS=t.THREE_HOURS=t.ONE_HOUR=t.SIXTY_MINUTES=t.THIRTY_MINUTES=t.TEN_MINUTES=t.FIVE_MINUTES=t.ONE_MINUTE=t.SIXTY_SECONDS=t.THIRTY_SECONDS=t.TEN_SECONDS=t.FIVE_SECONDS=t.ONE_SECOND=void 0,t.ONE_SECOND=1,t.FIVE_SECONDS=5,t.TEN_SECONDS=10,t.THIRTY_SECONDS=30,t.SIXTY_SECONDS=60,t.ONE_MINUTE=t.SIXTY_SECONDS,t.FIVE_MINUTES=t.ONE_MINUTE*5,t.TEN_MINUTES=t.ONE_MINUTE*10,t.THIRTY_MINUTES=t.ONE_MINUTE*30,t.SIXTY_MINUTES=t.ONE_MINUTE*60,t.ONE_HOUR=t.SIXTY_MINUTES,t.THREE_HOURS=t.ONE_HOUR*3,t.SIX_HOURS=t.ONE_HOUR*6,t.TWELVE_HOURS=t.ONE_HOUR*12,t.TWENTY_FOUR_HOURS=t.ONE_HOUR*24,t.ONE_DAY=t.TWENTY_FOUR_HOURS,t.THREE_DAYS=t.ONE_DAY*3,t.FIVE_DAYS=t.ONE_DAY*5,t.SEVEN_DAYS=t.ONE_DAY*7,t.THIRTY_DAYS=t.ONE_DAY*30,t.ONE_WEEK=t.SEVEN_DAYS,t.TWO_WEEKS=t.ONE_WEEK*2,t.THREE_WEEKS=t.ONE_WEEK*3,t.FOUR_WEEKS=t.ONE_WEEK*4,t.ONE_YEAR=t.ONE_DAY*365}(M0)),M0}var Y2;function y4(){return Y2||(Y2=1,function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=Pf;e.__exportStar(wO(),t),e.__exportStar(vO(),t)}(R0)),R0}var X2;function yO(){if(X2)return Ri;X2=1,Object.defineProperty(Ri,"__esModule",{value:!0}),Ri.fromMiliseconds=Ri.toMiliseconds=void 0;const t=y4();function e(r){return r*t.ONE_THOUSAND}Ri.toMiliseconds=e;function n(r){return Math.floor(r/t.ONE_THOUSAND)}return Ri.fromMiliseconds=n,Ri}var J2;function bO(){return J2||(J2=1,function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=Pf;e.__exportStar(mO(),t),e.__exportStar(yO(),t)}(N0)),N0}var Po={},e3;function xO(){if(e3)return Po;e3=1,Object.defineProperty(Po,"__esModule",{value:!0}),Po.Watch=void 0;class t{constructor(){this.timestamps=new Map}start(n){if(this.timestamps.has(n))throw new Error(`Watch already started for label: ${n}`);this.timestamps.set(n,{started:Date.now()})}stop(n){const r=this.get(n);if(typeof r.elapsed<"u")throw new Error(`Watch already stopped for label: ${n}`);const i=Date.now()-r.started;this.timestamps.set(n,{started:r.started,elapsed:i})}get(n){const r=this.timestamps.get(n);if(typeof r>"u")throw new Error(`No timestamp found for label: ${n}`);return r}elapsed(n){const r=this.get(n);return r.elapsed||Date.now()-r.started}}return Po.Watch=t,Po.default=t,Po}var B0={},ha={},t3;function CO(){if(t3)return ha;t3=1,Object.defineProperty(ha,"__esModule",{value:!0}),ha.IWatch=void 0;class t{}return ha.IWatch=t,ha}var n3;function EO(){return n3||(n3=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),Pf.__exportStar(CO(),t)}(B0)),B0}(function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=Pf;e.__exportStar(bO(),t),e.__exportStar(xO(),t),e.__exportStar(EO(),t),e.__exportStar(y4(),t)})(Xi);var Te={};Object.defineProperty(Te,"__esModule",{value:!0});Te.getLocalStorage=Te.getLocalStorageOrThrow=Te.getCrypto=Te.getCryptoOrThrow=x4=Te.getLocation=Te.getLocationOrThrow=Hg=Te.getNavigator=Te.getNavigatorOrThrow=b4=Te.getDocument=Te.getDocumentOrThrow=Te.getFromWindowOrThrow=Te.getFromWindow=void 0;function Co(t){let e;return typeof window<"u"&&typeof window[t]<"u"&&(e=window[t]),e}Te.getFromWindow=Co;function Gs(t){const e=Co(t);if(!e)throw new Error(`${t} is not defined in Window`);return e}Te.getFromWindowOrThrow=Gs;function _O(){return Gs("document")}Te.getDocumentOrThrow=_O;function SO(){return Co("document")}var b4=Te.getDocument=SO;function $O(){return Gs("navigator")}Te.getNavigatorOrThrow=$O;function PO(){return Co("navigator")}var Hg=Te.getNavigator=PO;function AO(){return Gs("location")}Te.getLocationOrThrow=AO;function DO(){return Co("location")}var x4=Te.getLocation=DO;function TO(){return Gs("crypto")}Te.getCryptoOrThrow=TO;function kO(){return Co("crypto")}Te.getCrypto=kO;function OO(){return Gs("localStorage")}Te.getLocalStorageOrThrow=OO;function IO(){return Co("localStorage")}Te.getLocalStorage=IO;var Vg={};Object.defineProperty(Vg,"__esModule",{value:!0});var C4=Vg.getWindowMetadata=void 0;const r3=Te;function NO(){let t,e;try{t=r3.getDocumentOrThrow(),e=r3.getLocationOrThrow()}catch{return null}function n(){const f=t.getElementsByTagName("link"),p=[];for(let w=0;w<f.length;w++){const v=f[w],C=v.getAttribute("rel");if(C&&C.toLowerCase().indexOf("icon")>-1){const E=v.getAttribute("href");if(E)if(E.toLowerCase().indexOf("https:")===-1&&E.toLowerCase().indexOf("http:")===-1&&E.indexOf("//")!==0){let b=e.protocol+"//"+e.host;if(E.indexOf("/")===0)b+=E;else{const g=e.pathname.split("/");g.pop();const y=g.join("/");b+=y+"/"+E}p.push(b)}else if(E.indexOf("//")===0){const b=e.protocol+E;p.push(b)}else p.push(E)}}return p}function r(...f){const p=t.getElementsByTagName("meta");for(let w=0;w<p.length;w++){const v=p[w],C=["itemprop","property","name"].map(E=>v.getAttribute(E)).filter(E=>E?f.includes(E):!1);if(C.length&&C){const E=v.getAttribute("content");if(E)return E}}return""}function i(){let f=r("name","og:site_name","og:title","twitter:title");return f||(f=t.title),f}function o(){return r("description","og:description","twitter:description","keywords")}const s=i(),a=o(),l=e.origin,u=n();return{description:a,url:l,icons:u,name:s}}C4=Vg.getWindowMetadata=NO;var Fl={},RO=t=>encodeURIComponent(t).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),E4="%[a-f0-9]{2}",i3=new RegExp("("+E4+")|([^%]+?)","gi"),o3=new RegExp("("+E4+")+","gi");function D1(t,e){try{return[decodeURIComponent(t.join(""))]}catch{}if(t.length===1)return t;e=e||1;var n=t.slice(0,e),r=t.slice(e);return Array.prototype.concat.call([],D1(n),D1(r))}function MO(t){try{return decodeURIComponent(t)}catch{for(var e=t.match(i3)||[],n=1;n<e.length;n++)t=D1(e,n).join(""),e=t.match(i3)||[];return t}}function BO(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},n=o3.exec(t);n;){try{e[n[0]]=decodeURIComponent(n[0])}catch{var r=MO(n[0]);r!==n[0]&&(e[n[0]]=r)}n=o3.exec(t)}e["%C2"]="�";for(var i=Object.keys(e),o=0;o<i.length;o++){var s=i[o];t=t.replace(new RegExp(s,"g"),e[s])}return t}var LO=function(t){if(typeof t!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch{return BO(t)}},UO=(t,e)=>{if(!(typeof t=="string"&&typeof e=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(e==="")return[t];const n=t.indexOf(e);return n===-1?[t]:[t.slice(0,n),t.slice(n+e.length)]},jO=function(t,e){for(var n={},r=Object.keys(t),i=Array.isArray(e),o=0;o<r.length;o++){var s=r[o],a=t[s];(i?e.indexOf(s)!==-1:e(s,a,t))&&(n[s]=a)}return n};(function(t){const e=RO,n=LO,r=UO,i=jO,o=g=>g==null,s=Symbol("encodeFragmentIdentifier");function a(g){switch(g.arrayFormat){case"index":return y=>(x,_)=>{const $=x.length;return _===void 0||g.skipNull&&_===null||g.skipEmptyString&&_===""?x:_===null?[...x,[c(y,g),"[",$,"]"].join("")]:[...x,[c(y,g),"[",c($,g),"]=",c(_,g)].join("")]};case"bracket":return y=>(x,_)=>_===void 0||g.skipNull&&_===null||g.skipEmptyString&&_===""?x:_===null?[...x,[c(y,g),"[]"].join("")]:[...x,[c(y,g),"[]=",c(_,g)].join("")];case"colon-list-separator":return y=>(x,_)=>_===void 0||g.skipNull&&_===null||g.skipEmptyString&&_===""?x:_===null?[...x,[c(y,g),":list="].join("")]:[...x,[c(y,g),":list=",c(_,g)].join("")];case"comma":case"separator":case"bracket-separator":{const y=g.arrayFormat==="bracket-separator"?"[]=":"=";return x=>(_,$)=>$===void 0||g.skipNull&&$===null||g.skipEmptyString&&$===""?_:($=$===null?"":$,_.length===0?[[c(x,g),y,c($,g)].join("")]:[[_,c($,g)].join(g.arrayFormatSeparator)])}default:return y=>(x,_)=>_===void 0||g.skipNull&&_===null||g.skipEmptyString&&_===""?x:_===null?[...x,c(y,g)]:[...x,[c(y,g),"=",c(_,g)].join("")]}}function l(g){let y;switch(g.arrayFormat){case"index":return(x,_,$)=>{if(y=/\[(\d*)\]$/.exec(x),x=x.replace(/\[\d*\]$/,""),!y){$[x]=_;return}$[x]===void 0&&($[x]={}),$[x][y[1]]=_};case"bracket":return(x,_,$)=>{if(y=/(\[\])$/.exec(x),x=x.replace(/\[\]$/,""),!y){$[x]=_;return}if($[x]===void 0){$[x]=[_];return}$[x]=[].concat($[x],_)};case"colon-list-separator":return(x,_,$)=>{if(y=/(:list)$/.exec(x),x=x.replace(/:list$/,""),!y){$[x]=_;return}if($[x]===void 0){$[x]=[_];return}$[x]=[].concat($[x],_)};case"comma":case"separator":return(x,_,$)=>{const d=typeof _=="string"&&_.includes(g.arrayFormatSeparator),P=typeof _=="string"&&!d&&f(_,g).includes(g.arrayFormatSeparator);_=P?f(_,g):_;const k=d||P?_.split(g.arrayFormatSeparator).map(I=>f(I,g)):_===null?_:f(_,g);$[x]=k};case"bracket-separator":return(x,_,$)=>{const d=/(\[\])$/.test(x);if(x=x.replace(/\[\]$/,""),!d){$[x]=_&&f(_,g);return}const P=_===null?[]:_.split(g.arrayFormatSeparator).map(k=>f(k,g));if($[x]===void 0){$[x]=P;return}$[x]=[].concat($[x],P)};default:return(x,_,$)=>{if($[x]===void 0){$[x]=_;return}$[x]=[].concat($[x],_)}}}function u(g){if(typeof g!="string"||g.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function c(g,y){return y.encode?y.strict?e(g):encodeURIComponent(g):g}function f(g,y){return y.decode?n(g):g}function p(g){return Array.isArray(g)?g.sort():typeof g=="object"?p(Object.keys(g)).sort((y,x)=>Number(y)-Number(x)).map(y=>g[y]):g}function w(g){const y=g.indexOf("#");return y!==-1&&(g=g.slice(0,y)),g}function v(g){let y="";const x=g.indexOf("#");return x!==-1&&(y=g.slice(x)),y}function C(g){g=w(g);const y=g.indexOf("?");return y===-1?"":g.slice(y+1)}function E(g,y){return y.parseNumbers&&!Number.isNaN(Number(g))&&typeof g=="string"&&g.trim()!==""?g=Number(g):y.parseBooleans&&g!==null&&(g.toLowerCase()==="true"||g.toLowerCase()==="false")&&(g=g.toLowerCase()==="true"),g}function b(g,y){y=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},y),u(y.arrayFormatSeparator);const x=l(y),_=Object.create(null);if(typeof g!="string"||(g=g.trim().replace(/^[?#&]/,""),!g))return _;for(const $ of g.split("&")){if($==="")continue;let[d,P]=r(y.decode?$.replace(/\+/g," "):$,"=");P=P===void 0?null:["comma","separator","bracket-separator"].includes(y.arrayFormat)?P:f(P,y),x(f(d,y),P,_)}for(const $ of Object.keys(_)){const d=_[$];if(typeof d=="object"&&d!==null)for(const P of Object.keys(d))d[P]=E(d[P],y);else _[$]=E(d,y)}return y.sort===!1?_:(y.sort===!0?Object.keys(_).sort():Object.keys(_).sort(y.sort)).reduce(($,d)=>{const P=_[d];return P&&typeof P=="object"&&!Array.isArray(P)?$[d]=p(P):$[d]=P,$},Object.create(null))}t.extract=C,t.parse=b,t.stringify=(g,y)=>{if(!g)return"";y=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},y),u(y.arrayFormatSeparator);const x=P=>y.skipNull&&o(g[P])||y.skipEmptyString&&g[P]==="",_=a(y),$={};for(const P of Object.keys(g))x(P)||($[P]=g[P]);const d=Object.keys($);return y.sort!==!1&&d.sort(y.sort),d.map(P=>{const k=g[P];return k===void 0?"":k===null?c(P,y):Array.isArray(k)?k.length===0&&y.arrayFormat==="bracket-separator"?c(P,y)+"[]":k.reduce(_(P),[]).join("&"):c(P,y)+"="+c(k,y)}).filter(P=>P.length>0).join("&")},t.parseUrl=(g,y)=>{y=Object.assign({decode:!0},y);const[x,_]=r(g,"#");return Object.assign({url:x.split("?")[0]||"",query:b(C(g),y)},y&&y.parseFragmentIdentifier&&_?{fragmentIdentifier:f(_,y)}:{})},t.stringifyUrl=(g,y)=>{y=Object.assign({encode:!0,strict:!0,[s]:!0},y);const x=w(g.url).split("?")[0]||"",_=t.extract(g.url),$=t.parse(_,{sort:!1}),d=Object.assign($,g.query);let P=t.stringify(d,y);P&&(P=`?${P}`);let k=v(g.url);return g.fragmentIdentifier&&(k=`#${y[s]?c(g.fragmentIdentifier,y):g.fragmentIdentifier}`),`${x}${P}${k}`},t.pick=(g,y,x)=>{x=Object.assign({parseFragmentIdentifier:!0,[s]:!1},x);const{url:_,query:$,fragmentIdentifier:d}=t.parseUrl(g,x);return t.stringifyUrl({url:_,query:i($,y),fragmentIdentifier:d},x)},t.exclude=(g,y,x)=>{const _=Array.isArray(y)?$=>!y.includes($):($,d)=>!y($,d);return t.pick(g,_,x)}})(Fl);const FO={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe"}},zO=":";function pM(t){const[e,n]=t.split(zO);return{namespace:e,reference:n}}function gM(t,e=[]){const n=[];return Object.keys(t).forEach(r=>{if(e.length&&!e.includes(r))return;const i=t[r];n.push(...i.accounts)}),n}function _4(t,e){return t.includes(":")?[t]:e.chains||[]}const S4="base10",Gt="base16",T1="base64pad",qg="utf8",$4=0,fu=1,WO=0,s3=1,k1=12,Gg=32;function mM(){const t=zg.generateKeyPair();return{privateKey:jn(t.secretKey,Gt),publicKey:jn(t.publicKey,Gt)}}function wM(){const t=xf.randomBytes(Gg);return jn(t,Gt)}function vM(t,e){const n=zg.sharedKey(In(t,Gt),In(e,Gt),!0),r=new TT(Sf.SHA256,n).expand(Gg);return jn(r,Gt)}function yM(t){const e=Sf.hash(In(t,Gt));return jn(e,Gt)}function bM(t){const e=Sf.hash(In(t,qg));return jn(e,Gt)}function HO(t){return In(`${t}`,S4)}function Af(t){return Number(jn(t,S4))}function xM(t){const e=HO(typeof t.type<"u"?t.type:$4);if(Af(e)===fu&&typeof t.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");const n=typeof t.senderPublicKey<"u"?In(t.senderPublicKey,Gt):void 0,r=typeof t.iv<"u"?In(t.iv,Gt):xf.randomBytes(k1),i=new jg.ChaCha20Poly1305(In(t.symKey,Gt)).seal(r,In(t.message,qg));return VO({type:e,sealed:i,iv:r,senderPublicKey:n})}function CM(t){const e=new jg.ChaCha20Poly1305(In(t.symKey,Gt)),{sealed:n,iv:r}=P4(t.encoded),i=e.open(r,n);if(i===null)throw new Error("Failed to decrypt");return jn(i,qg)}function VO(t){if(Af(t.type)===fu){if(typeof t.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");return jn(F2([t.type,t.senderPublicKey,t.iv,t.sealed]),T1)}return jn(F2([t.type,t.iv,t.sealed]),T1)}function P4(t){const e=In(t,T1),n=e.slice(WO,s3),r=s3;if(Af(n)===fu){const a=r+Gg,l=a+k1,u=e.slice(r,a),c=e.slice(a,l),f=e.slice(l);return{type:n,sealed:f,iv:c,senderPublicKey:u}}const i=r+k1,o=e.slice(r,i),s=e.slice(i);return{type:n,sealed:s,iv:o}}function EM(t,e){const n=P4(t);return qO({type:Af(n.type),senderPublicKey:typeof n.senderPublicKey<"u"?jn(n.senderPublicKey,Gt):void 0,receiverPublicKey:e==null?void 0:e.receiverPublicKey})}function qO(t){const e=(t==null?void 0:t.type)||$4;if(e===fu){if(typeof(t==null?void 0:t.senderPublicKey)>"u")throw new Error("missing sender public key");if(typeof(t==null?void 0:t.receiverPublicKey)>"u")throw new Error("missing receiver public key")}return{type:e,senderPublicKey:t==null?void 0:t.senderPublicKey,receiverPublicKey:t==null?void 0:t.receiverPublicKey}}function _M(t){return t.type===fu&&typeof t.senderPublicKey=="string"&&typeof t.receiverPublicKey=="string"}var GO=Object.defineProperty,a3=Object.getOwnPropertySymbols,KO=Object.prototype.hasOwnProperty,ZO=Object.prototype.propertyIsEnumerable,l3=(t,e,n)=>e in t?GO(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,u3=(t,e)=>{for(var n in e||(e={}))KO.call(e,n)&&l3(t,n,e[n]);if(a3)for(var n of a3(e))ZO.call(e,n)&&l3(t,n,e[n]);return t};const QO="ReactNative",en={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"},YO="js";function A4(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}function Kg(){return!b4()&&!!Hg()&&navigator.product===QO}function Zg(){return!A4()&&!!Hg()}function hu(){return Kg()?en.reactNative:A4()?en.node:Zg()?en.browser:en.unknown}function XO(t,e){let n=Fl.parse(t);return n=u3(u3({},n),e),t=Fl.stringify(n),t}function SM(){return C4()||{name:"",description:"",url:"",icons:[""]}}function JO(){if(hu()===en.reactNative&&typeof global<"u"&&typeof(global==null?void 0:global.Platform)<"u"){const{OS:n,Version:r}=global.Platform;return[n,r].join("-")}const t=Vk();if(t===null)return"unknown";const e=t.os?t.os.replace(" ","").toLowerCase():"unknown";return t.type==="browser"?[e,t.name,t.version].join("-"):[e,t.version].join("-")}function eI(){var t;const e=hu();return e===en.browser?[e,((t=x4())==null?void 0:t.host)||"unknown"].join(":"):e}function tI(t,e,n){const r=JO(),i=eI();return[[t,e].join("-"),[YO,n].join("-"),r,i].join("/")}function $M({protocol:t,version:e,relayUrl:n,sdkVersion:r,auth:i,projectId:o,useOnCloseEvent:s}){const a=n.split("?"),l=tI(t,e,r),u={auth:i,ua:l,projectId:o,useOnCloseEvent:s||void 0},c=XO(a[1]||"",u);return a[0]+"?"+c}function Ki(t,e){return t.filter(n=>e.includes(n)).length===t.length}function PM(t){return Object.fromEntries(t.entries())}function AM(t){return new Map(Object.entries(t))}function DM(t=Xi.FIVE_MINUTES,e){const n=Xi.toMiliseconds(t||Xi.FIVE_MINUTES);let r,i,o;return{resolve:s=>{o&&r&&(clearTimeout(o),r(s))},reject:s=>{o&&i&&(clearTimeout(o),i(s))},done:()=>new Promise((s,a)=>{o=setTimeout(()=>{a(new Error(e))},n),r=s,i=a})}}function TM(t,e,n){return new Promise(async(r,i)=>{const o=setTimeout(()=>i(new Error(n)),e);try{const s=await t;r(s)}catch(s){i(s)}clearTimeout(o)})}function D4(t,e){if(typeof e=="string"&&e.startsWith(`${t}:`))return e;if(t.toLowerCase()==="topic"){if(typeof e!="string")throw new Error('Value must be "string" for expirer target type: topic');return`topic:${e}`}else if(t.toLowerCase()==="id"){if(typeof e!="number")throw new Error('Value must be "number" for expirer target type: id');return`id:${e}`}throw new Error(`Unknown expirer target type: ${t}`)}function kM(t){return D4("topic",t)}function OM(t){return D4("id",t)}function IM(t){const[e,n]=t.split(":"),r={id:void 0,topic:void 0};if(e==="topic"&&typeof n=="string")r.topic=n;else if(e==="id"&&Number.isInteger(Number(n)))r.id=Number(n);else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${n}`);return r}function NM(t,e){return Xi.fromMiliseconds((e||Date.now())+Xi.toMiliseconds(t))}function RM(t){return Date.now()>=Xi.toMiliseconds(t)}function MM(t,e){return`${t}${e?`:${e}`:""}`}function L0(t=[],e=[]){return[...new Set([...t,...e])]}async function BM({id:t,topic:e,wcDeepLink:n}){try{if(!n)return;const r=typeof n=="string"?JSON.parse(n):n;let i=r==null?void 0:r.href;if(typeof i!="string")return;i.endsWith("/")&&(i=i.slice(0,-1));const o=`${i}/wc?requestId=${t}&sessionTopic=${e}`,s=hu();s===en.browser?o.startsWith("https://")?window.open(o,"_blank","noreferrer noopener"):window.open(o,"_self","noreferrer noopener"):s===en.reactNative&&typeof(global==null?void 0:global.Linking)<"u"&&await global.Linking.openURL(o)}catch(r){console.error(r)}}const nI="irn";function LM(t){return(t==null?void 0:t.relay)||{protocol:nI}}function UM(t){const e=FO[t];if(typeof e>"u")throw new Error(`Relay Protocol not supported: ${t}`);return e}var rI=Object.defineProperty,c3=Object.getOwnPropertySymbols,iI=Object.prototype.hasOwnProperty,oI=Object.prototype.propertyIsEnumerable,d3=(t,e,n)=>e in t?rI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,sI=(t,e)=>{for(var n in e||(e={}))iI.call(e,n)&&d3(t,n,e[n]);if(c3)for(var n of c3(e))oI.call(e,n)&&d3(t,n,e[n]);return t};function aI(t,e="-"){const n={},r="relay"+e;return Object.keys(t).forEach(i=>{if(i.startsWith(r)){const o=i.replace(r,""),s=t[i];n[o]=s}}),n}function jM(t){const e=t.indexOf(":"),n=t.indexOf("?")!==-1?t.indexOf("?"):void 0,r=t.substring(0,e),i=t.substring(e+1,n).split("@"),o=typeof n<"u"?t.substring(n):"",s=Fl.parse(o);return{protocol:r,topic:lI(i[0]),version:parseInt(i[1],10),symKey:s.symKey,relay:aI(s)}}function lI(t){return t.startsWith("//")?t.substring(2):t}function uI(t,e="-"){const n="relay",r={};return Object.keys(t).forEach(i=>{const o=n+e+i;t[i]&&(r[o]=t[i])}),r}function FM(t){return`${t.protocol}:${t.topic}@${t.version}?`+Fl.stringify(sI({symKey:t.symKey},uI(t.relay)))}var cI=Object.defineProperty,dI=Object.defineProperties,fI=Object.getOwnPropertyDescriptors,f3=Object.getOwnPropertySymbols,hI=Object.prototype.hasOwnProperty,pI=Object.prototype.propertyIsEnumerable,h3=(t,e,n)=>e in t?cI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,gI=(t,e)=>{for(var n in e||(e={}))hI.call(e,n)&&h3(t,n,e[n]);if(f3)for(var n of f3(e))pI.call(e,n)&&h3(t,n,e[n]);return t},mI=(t,e)=>dI(t,fI(e));function Ks(t){const e=[];return t.forEach(n=>{const[r,i]=n.split(":");e.push(`${r}:${i}`)}),e}function wI(t){const e=[];return Object.values(t).forEach(n=>{e.push(...Ks(n.accounts))}),e}function vI(t,e){const n=[];return Object.values(t).forEach(r=>{Ks(r.accounts).includes(e)&&n.push(...r.methods)}),n}function yI(t,e){const n=[];return Object.values(t).forEach(r=>{Ks(r.accounts).includes(e)&&n.push(...r.events)}),n}function zM(t,e){const n=DI(t,e);if(n)throw new Error(n.message);const r={};for(const[i,o]of Object.entries(t))r[i]={methods:o.methods,events:o.events,chains:o.accounts.map(s=>`${s.split(":")[0]}:${s.split(":")[1]}`)};return r}function T4(t){return t.includes(":")}function bI(t){return T4(t)?t.split(":")[0]:t}function k4(t){var e,n,r;const i={};if(!Qg(t))return i;for(const[o,s]of Object.entries(t)){const a=T4(o)?[o]:s.chains,l=s.methods||[],u=s.events||[],c=bI(o);i[c]=mI(gI({},i[c]),{chains:L0(a,(e=i[c])==null?void 0:e.chains),methods:L0(l,(n=i[c])==null?void 0:n.methods),events:L0(u,(r=i[c])==null?void 0:r.events)})}return i}const xI={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},CI={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function Vr(t,e){const{message:n,code:r}=CI[t];return{message:e?`${n} ${e}`:n,code:r}}function Ts(t,e){const{message:n,code:r}=xI[t];return{message:e?`${n} ${e}`:n,code:r}}function Df(t,e){return Array.isArray(t)?typeof e<"u"&&t.length?t.every(e):!0:!1}function Qg(t){return Object.getPrototypeOf(t)===Object.prototype&&Object.keys(t).length}function Ji(t){return typeof t>"u"}function _n(t,e){return e&&Ji(t)?!0:typeof t=="string"&&!!t.trim().length}function Yg(t,e){return e&&Ji(t)?!0:typeof t=="number"&&!isNaN(t)}function WM(t,e){const{requiredNamespaces:n}=e,r=Object.keys(t.namespaces),i=Object.keys(n);let o=!0;return Ki(i,r)?(r.forEach(s=>{const{accounts:a,methods:l,events:u}=t.namespaces[s],c=Ks(a),f=n[s];(!Ki(_4(s,f),c)||!Ki(f.methods,l)||!Ki(f.events,u))&&(o=!1)}),o):!1}function wd(t){return _n(t,!1)&&t.includes(":")?t.split(":").length===2:!1}function EI(t){if(_n(t,!1)&&t.includes(":")){const e=t.split(":");if(e.length===3){const n=e[0]+":"+e[1];return!!e[2]&&wd(n)}}return!1}function HM(t){if(_n(t,!1))try{return typeof new URL(t)<"u"}catch{return!1}return!1}function VM(t){var e;return(e=t==null?void 0:t.proposer)==null?void 0:e.publicKey}function qM(t){return t==null?void 0:t.topic}function GM(t,e){let n=null;return _n(t==null?void 0:t.publicKey,!1)||(n=Vr("MISSING_OR_INVALID",`${e} controller public key should be a string`)),n}function p3(t){let e=!0;return Df(t)?t.length&&(e=t.every(n=>_n(n,!1))):e=!1,e}function _I(t,e,n){let r=null;return Df(e)&&e.length?e.forEach(i=>{r||wd(i)||(r=Ts("UNSUPPORTED_CHAINS",`${n}, chain ${i} should be a string and conform to "namespace:chainId" format`))}):wd(t)||(r=Ts("UNSUPPORTED_CHAINS",`${n}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),r}function SI(t,e,n){let r=null;return Object.entries(t).forEach(([i,o])=>{if(r)return;const s=_I(i,_4(i,o),`${e} ${n}`);s&&(r=s)}),r}function $I(t,e){let n=null;return Df(t)?t.forEach(r=>{n||EI(r)||(n=Ts("UNSUPPORTED_ACCOUNTS",`${e}, account ${r} should be a string and conform to "namespace:chainId:address" format`))}):n=Ts("UNSUPPORTED_ACCOUNTS",`${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),n}function PI(t,e){let n=null;return Object.values(t).forEach(r=>{if(n)return;const i=$I(r==null?void 0:r.accounts,`${e} namespace`);i&&(n=i)}),n}function AI(t,e){let n=null;return p3(t==null?void 0:t.methods)?p3(t==null?void 0:t.events)||(n=Ts("UNSUPPORTED_EVENTS",`${e}, events should be an array of strings or empty array for no events`)):n=Ts("UNSUPPORTED_METHODS",`${e}, methods should be an array of strings or empty array for no methods`),n}function O4(t,e){let n=null;return Object.values(t).forEach(r=>{if(n)return;const i=AI(r,`${e}, namespace`);i&&(n=i)}),n}function KM(t,e,n){let r=null;if(t&&Qg(t)){const i=O4(t,e);i&&(r=i);const o=SI(t,e,n);o&&(r=o)}else r=Vr("MISSING_OR_INVALID",`${e}, ${n} should be an object with data`);return r}function DI(t,e){let n=null;if(t&&Qg(t)){const r=O4(t,e);r&&(n=r);const i=PI(t,e);i&&(n=i)}else n=Vr("MISSING_OR_INVALID",`${e}, namespaces should be an object with data`);return n}function TI(t){return _n(t.protocol,!0)}function ZM(t,e){let n=!1;return e&&!t?n=!0:t&&Df(t)&&t.length&&t.forEach(r=>{n=TI(r)}),n}function QM(t){return typeof t=="number"}function YM(t){return typeof t<"u"&&typeof t!==null}function XM(t){return!(!t||typeof t!="object"||!t.code||!Yg(t.code,!1)||!t.message||!_n(t.message,!1))}function JM(t){return!(Ji(t)||!_n(t.method,!1))}function eB(t){return!(Ji(t)||Ji(t.result)&&Ji(t.error)||!Yg(t.id,!1)||!_n(t.jsonrpc,!1))}function tB(t){return!(Ji(t)||!_n(t.name,!1))}function nB(t,e){return!(!wd(e)||!wI(t).includes(e))}function rB(t,e,n){return _n(n,!1)?vI(t,e).includes(n):!1}function iB(t,e,n){return _n(n,!1)?yI(t,e).includes(n):!1}function oB(t,e,n){let r=null;const i=kI(t),o=OI(e),s=Object.keys(i),a=Object.keys(o),l=g3(Object.keys(t)),u=g3(Object.keys(e)),c=l.filter(f=>!u.includes(f));return c.length&&(r=Vr("NON_CONFORMING_NAMESPACES",`${n} namespaces keys don't satisfy requiredNamespaces.
      Required: ${c.toString()}
      Received: ${Object.keys(e).toString()}`)),Ki(s,a)||(r=Vr("NON_CONFORMING_NAMESPACES",`${n} namespaces chains don't satisfy required namespaces.
      Required: ${s.toString()}
      Approved: ${a.toString()}`)),Object.keys(e).forEach(f=>{if(!f.includes(":")||r)return;const p=Ks(e[f].accounts);p.includes(f)||(r=Vr("NON_CONFORMING_NAMESPACES",`${n} namespaces accounts don't satisfy namespace accounts for ${f}
        Required: ${f}
        Approved: ${p.toString()}`))}),s.forEach(f=>{r||(Ki(i[f].methods,o[f].methods)?Ki(i[f].events,o[f].events)||(r=Vr("NON_CONFORMING_NAMESPACES",`${n} namespaces events don't satisfy namespace events for ${f}`)):r=Vr("NON_CONFORMING_NAMESPACES",`${n} namespaces methods don't satisfy namespace methods for ${f}`))}),r}function kI(t){const e={};return Object.keys(t).forEach(n=>{var r;n.includes(":")?e[n]=t[n]:(r=t[n].chains)==null||r.forEach(i=>{e[i]={methods:t[n].methods,events:t[n].events}})}),e}function g3(t){return[...new Set(t.map(e=>e.includes(":")?e.split(":")[0]:e))]}function OI(t){const e={};return Object.keys(t).forEach(n=>{if(n.includes(":"))e[n]=t[n];else{const r=Ks(t[n].accounts);r==null||r.forEach(i=>{e[i]={accounts:t[n].accounts.filter(o=>o.includes(`${i}:`)),methods:t[n].methods,events:t[n].events}})}}),e}function sB(t,e){return Yg(t,!1)&&t<=e.max&&t>=e.min}function aB(){const t=hu();return new Promise(e=>{switch(t){case en.browser:e(II());break;case en.reactNative:e(NI());break;case en.node:e(RI());break;default:e(!0)}})}function II(){return Zg()&&(navigator==null?void 0:navigator.onLine)}async function NI(){if(Kg()&&typeof global<"u"&&global!=null&&global.NetInfo){const t=await(global==null?void 0:global.NetInfo.fetch());return t==null?void 0:t.isConnected}return!0}function RI(){return!0}function lB(t){switch(hu()){case en.browser:MI(t);break;case en.reactNative:BI(t);break}}function MI(t){Zg()&&(window.addEventListener("online",()=>t(!0)),window.addEventListener("offline",()=>t(!1)))}function BI(t){Kg()&&typeof global<"u"&&global!=null&&global.NetInfo&&(global==null||global.NetInfo.addEventListener(e=>t(e==null?void 0:e.isConnected)))}const U0={};class uB{static get(e){return U0[e]}static set(e,n){U0[e]=n}static delete(e){delete U0[e]}}var I4="eip155",LI="store",N4="requestedChains",O1="wallet_addEthereumChain",ze,Fa,uc,I1,Xg,R4,cc,N1,R1,M4,vd,Jg,Oo,Ca,yd,em,bd,tm,xd,nm,UI=class extends sg{constructor(t){super({...t,options:{isNewChainsStale:!0,...t.options}}),Ut(this,uc),Ut(this,Xg),Ut(this,cc),Ut(this,R1),Ut(this,vd),Ut(this,Oo),Ut(this,yd),Ut(this,bd),Ut(this,xd),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,Ut(this,ze,void 0),Ut(this,Fa,void 0),this.onAccountsChanged=e=>{e.length===0?this.emit("disconnect"):this.emit("change",{account:Mn(e[0])})},this.onChainChanged=e=>{const n=Number(e),r=this.isChainUnsupported(n);this.emit("change",{chain:{id:n,unsupported:r}})},this.onDisconnect=()=>{ct(this,Oo,Ca).call(this,[]),this.emit("disconnect")},this.onDisplayUri=e=>{this.emit("message",{type:"display_uri",data:e})},this.onConnect=()=>{this.emit("connect",{})},ct(this,uc,I1).call(this)}async connect({chainId:t,pairingTopic:e}={}){var n,r,i,o,s;try{let a=t;if(!a){const v=(n=this.storage)==null?void 0:n.getItem(LI),C=(o=(i=(r=v==null?void 0:v.state)==null?void 0:r.data)==null?void 0:i.chain)==null?void 0:o.id;C&&!this.isChainUnsupported(C)?a=C:a=(s=this.chains[0])==null?void 0:s.id}if(!a)throw new Error("No chains found on connector.");const l=await this.getProvider();ct(this,R1,M4).call(this);const u=ct(this,cc,N1).call(this);if(l.session&&u&&await l.disconnect(),!l.session||u){const v=this.chains.filter(C=>C.id!==a).map(C=>C.id);this.emit("message",{type:"connecting"}),await l.connect({pairingTopic:e,chains:[a],optionalChains:v.length?v:void 0}),ct(this,Oo,Ca).call(this,this.chains.map(({id:C})=>C))}const c=await l.enable(),f=Mn(c[0]),p=await this.getChainId(),w=this.isChainUnsupported(p);return{account:f,chain:{id:p,unsupported:w}}}catch(a){throw/user rejected/i.test(a==null?void 0:a.message)?new zt(a):a}}async disconnect(){const t=await this.getProvider();try{await t.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{ct(this,vd,Jg).call(this),ct(this,Oo,Ca).call(this,[])}}async getAccount(){const{accounts:t}=await this.getProvider();return Mn(t[0])}async getChainId(){const{chainId:t}=await this.getProvider();return t}async getProvider({chainId:t}={}){return $e(this,ze)||await ct(this,uc,I1).call(this),t&&await this.switchChain(t),$e(this,ze)}async getWalletClient({chainId:t}={}){const[e,n]=await Promise.all([this.getProvider({chainId:t}),this.getAccount()]),r=this.chains.find(i=>i.id===t);if(!e)throw new Error("provider is required.");return ig({account:n,chain:r,transport:Jp(e)})}async isAuthorized(){try{const[t,e]=await Promise.all([this.getAccount(),this.getProvider()]),n=ct(this,cc,N1).call(this);if(!t)return!1;if(n&&e.session){try{await e.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(t){var n,r;const e=this.chains.find(i=>i.id===t);if(!e)throw new Er(new Error("chain not found on connector."));try{const i=await this.getProvider(),o=ct(this,bd,tm).call(this),s=ct(this,xd,nm).call(this);if(!o.includes(t)&&s.includes(O1)){await i.request({method:O1,params:[{chainId:le(e.id),blockExplorerUrls:[(r=(n=e.blockExplorers)==null?void 0:n.default)==null?void 0:r.url],chainName:e.name,nativeCurrency:e.nativeCurrency,rpcUrls:[...e.rpcUrls.default.http]}]});const l=ct(this,yd,em).call(this);l.push(t),ct(this,Oo,Ca).call(this,l)}return await i.request({method:"wallet_switchEthereumChain",params:[{chainId:le(t)}]}),e}catch(i){const o=typeof i=="string"?i:i==null?void 0:i.message;throw/user rejected request/i.test(o)?new zt(i):new Er(i)}}};ze=new WeakMap;Fa=new WeakMap;uc=new WeakSet;I1=async function(){return!$e(this,Fa)&&typeof window<"u"&&Cl(this,Fa,ct(this,Xg,R4).call(this)),$e(this,Fa)};Xg=new WeakSet;R4=async function(){const{EthereumProvider:t,OPTIONAL_EVENTS:e,OPTIONAL_METHODS:n}=await ds(()=>import("./index.es-37496818.js"),["assets/index.es-37496818.js","assets/events-9f95f980.js"]),[r,...i]=this.chains.map(({id:o})=>o);if(r){const{projectId:o,showQrModal:s=!0,qrModalOptions:a,metadata:l,relayUrl:u}=this.options;Cl(this,ze,await t.init({showQrModal:s,qrModalOptions:a,projectId:o,optionalMethods:n,optionalEvents:e,chains:[r],optionalChains:i.length?i:void 0,rpcMap:Object.fromEntries(this.chains.map(c=>[c.id,c.rpcUrls.default.http[0]])),metadata:l,relayUrl:u}))}};cc=new WeakSet;N1=function(){if(ct(this,xd,nm).call(this).includes(O1)||!this.options.isNewChainsStale)return!1;const e=ct(this,yd,em).call(this),n=this.chains.map(({id:i})=>i),r=ct(this,bd,tm).call(this);return r.length&&!r.some(i=>n.includes(i))?!1:!n.every(i=>e.includes(i))};R1=new WeakSet;M4=function(){$e(this,ze)&&(ct(this,vd,Jg).call(this),$e(this,ze).on("accountsChanged",this.onAccountsChanged),$e(this,ze).on("chainChanged",this.onChainChanged),$e(this,ze).on("disconnect",this.onDisconnect),$e(this,ze).on("session_delete",this.onDisconnect),$e(this,ze).on("display_uri",this.onDisplayUri),$e(this,ze).on("connect",this.onConnect))};vd=new WeakSet;Jg=function(){$e(this,ze)&&($e(this,ze).removeListener("accountsChanged",this.onAccountsChanged),$e(this,ze).removeListener("chainChanged",this.onChainChanged),$e(this,ze).removeListener("disconnect",this.onDisconnect),$e(this,ze).removeListener("session_delete",this.onDisconnect),$e(this,ze).removeListener("display_uri",this.onDisplayUri),$e(this,ze).removeListener("connect",this.onConnect))};Oo=new WeakSet;Ca=function(t){var e;(e=this.storage)==null||e.setItem(N4,t)};yd=new WeakSet;em=function(){var t;return((t=this.storage)==null?void 0:t.getItem(N4))??[]};bd=new WeakSet;tm=function(){var r,i,o;if(!$e(this,ze))return[];const t=(r=$e(this,ze).session)==null?void 0:r.namespaces;return t?((o=(i=k4(t)[I4])==null?void 0:i.chains)==null?void 0:o.map(s=>parseInt(s.split(":")[1]||"")))??[]:[]};xd=new WeakSet;nm=function(){var r,i;if(!$e(this,ze))return[];const t=(r=$e(this,ze).session)==null?void 0:r.namespaces;return t?((i=k4(t)[I4])==null?void 0:i.methods)??[]:[]};function jI(){return function(t){return t.rpcUrls.public.http[0]?{chain:t,rpcUrls:t.rpcUrls.public}:null}}const FI=re.getBlockchainApiUrl();function zI({projectId:t}){return function(n){if(![1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280].includes(n.id))return null;const i=`${FI}/v1/?chainId=${Gn}:${n.id}&projectId=${t}`;return{chain:{...n,rpcUrls:{...n.rpcUrls,default:{http:[i]}}},rpcUrls:{http:[i]}}}}function WI({projectId:t,chains:e,metadata:n}){const{publicClient:r}=x9(e,[zI({projectId:t}),jI()]);return qD({autoConnect:!0,connectors:[new UI({chains:e,options:{projectId:t,showQrModal:!1,metadata:n}}),new ZA({chains:e}),new ag({chains:e,options:{shimDisconnect:!0}}),new QD({chains:e,options:{appName:(n==null?void 0:n.name)??"Unknown"}})],publicClient:r})}let j0;function HI(t){return j0||(j0=new KA({...t,_sdkVersion:`react-wagmi-${Gb}`})),j0}const VI=t=>{const e=new DataView(t);let n="";for(let r=0;r<e.byteLength;r+=4)n+=e.getUint32(r).toString(16).padStart(8,"0");return n},qI=t=>async(e,{outputFormat:n="hex"}={})=>{typeof e=="string"&&(e=new globalThis.TextEncoder().encode(e));const r=await globalThis.crypto.subtle.digest(t,e);return n==="hex"?VI(r):r},GI=qI("SHA-256");var Tf={},B4={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},KI=B4;function L4(t){this.mode=KI.MODE_8BIT_BYTE,this.data=t}L4.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}};var ZI=L4,U4={L:1,M:0,Q:3,H:2},Hu=U4;function Qn(t,e){this.totalCount=t,this.dataCount=e}Qn.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];Qn.getRSBlocks=function(t,e){var n=Qn.getRsBlockTable(t,e);if(n==null)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var r=n.length/3,i=new Array,o=0;o<r;o++)for(var s=n[o*3+0],a=n[o*3+1],l=n[o*3+2],u=0;u<s;u++)i.push(new Qn(a,l));return i};Qn.getRsBlockTable=function(t,e){switch(e){case Hu.L:return Qn.RS_BLOCK_TABLE[(t-1)*4+0];case Hu.M:return Qn.RS_BLOCK_TABLE[(t-1)*4+1];case Hu.Q:return Qn.RS_BLOCK_TABLE[(t-1)*4+2];case Hu.H:return Qn.RS_BLOCK_TABLE[(t-1)*4+3];default:return}};var QI=Qn;function j4(){this.buffer=new Array,this.length=0}j4.prototype={get:function(t){var e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)==1},put:function(t,e){for(var n=0;n<e;n++)this.putBit((t>>>e-n-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var YI=j4,Tn={glog:function(t){if(t<1)throw new Error("glog("+t+")");return Tn.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return Tn.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)};for(var yt=0;yt<8;yt++)Tn.EXP_TABLE[yt]=1<<yt;for(var yt=8;yt<256;yt++)Tn.EXP_TABLE[yt]=Tn.EXP_TABLE[yt-4]^Tn.EXP_TABLE[yt-5]^Tn.EXP_TABLE[yt-6]^Tn.EXP_TABLE[yt-8];for(var yt=0;yt<255;yt++)Tn.LOG_TABLE[Tn.EXP_TABLE[yt]]=yt;var F4=Tn,Bi=F4;function dc(t,e){if(t.length==null)throw new Error(t.length+"/"+e);for(var n=0;n<t.length&&t[n]==0;)n++;this.num=new Array(t.length-n+e);for(var r=0;r<t.length-n;r++)this.num[r]=t[r+n]}dc.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),n=0;n<this.getLength();n++)for(var r=0;r<t.getLength();r++)e[n+r]^=Bi.gexp(Bi.glog(this.get(n))+Bi.glog(t.get(r)));return new dc(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=Bi.glog(this.get(0))-Bi.glog(t.get(0)),n=new Array(this.getLength()),r=0;r<this.getLength();r++)n[r]=this.get(r);for(var r=0;r<t.getLength();r++)n[r]^=Bi.gexp(Bi.glog(t.get(r))+e);return new dc(n,0).mod(t)}};var z4=dc,dn=B4,m3=z4,XI=F4,Rr={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},wt={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;wt.getBCHDigit(e)-wt.getBCHDigit(wt.G15)>=0;)e^=wt.G15<<wt.getBCHDigit(e)-wt.getBCHDigit(wt.G15);return(t<<10|e)^wt.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;wt.getBCHDigit(e)-wt.getBCHDigit(wt.G18)>=0;)e^=wt.G18<<wt.getBCHDigit(e)-wt.getBCHDigit(wt.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;t!=0;)e++,t>>>=1;return e},getPatternPosition:function(t){return wt.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,n){switch(t){case Rr.PATTERN000:return(e+n)%2==0;case Rr.PATTERN001:return e%2==0;case Rr.PATTERN010:return n%3==0;case Rr.PATTERN011:return(e+n)%3==0;case Rr.PATTERN100:return(Math.floor(e/2)+Math.floor(n/3))%2==0;case Rr.PATTERN101:return e*n%2+e*n%3==0;case Rr.PATTERN110:return(e*n%2+e*n%3)%2==0;case Rr.PATTERN111:return(e*n%3+(e+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new m3([1],0),n=0;n<t;n++)e=e.multiply(new m3([1,XI.gexp(n)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case dn.MODE_NUMBER:return 10;case dn.MODE_ALPHA_NUM:return 9;case dn.MODE_8BIT_BYTE:return 8;case dn.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case dn.MODE_NUMBER:return 12;case dn.MODE_ALPHA_NUM:return 11;case dn.MODE_8BIT_BYTE:return 16;case dn.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else if(e<41)switch(t){case dn.MODE_NUMBER:return 14;case dn.MODE_ALPHA_NUM:return 13;case dn.MODE_8BIT_BYTE:return 16;case dn.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}else throw new Error("type:"+e)},getLostPoint:function(t){for(var e=t.getModuleCount(),n=0,r=0;r<e;r++)for(var i=0;i<e;i++){for(var o=0,s=t.isDark(r,i),a=-1;a<=1;a++)if(!(r+a<0||e<=r+a))for(var l=-1;l<=1;l++)i+l<0||e<=i+l||a==0&&l==0||s==t.isDark(r+a,i+l)&&o++;o>5&&(n+=3+o-5)}for(var r=0;r<e-1;r++)for(var i=0;i<e-1;i++){var u=0;t.isDark(r,i)&&u++,t.isDark(r+1,i)&&u++,t.isDark(r,i+1)&&u++,t.isDark(r+1,i+1)&&u++,(u==0||u==4)&&(n+=3)}for(var r=0;r<e;r++)for(var i=0;i<e-6;i++)t.isDark(r,i)&&!t.isDark(r,i+1)&&t.isDark(r,i+2)&&t.isDark(r,i+3)&&t.isDark(r,i+4)&&!t.isDark(r,i+5)&&t.isDark(r,i+6)&&(n+=40);for(var i=0;i<e;i++)for(var r=0;r<e-6;r++)t.isDark(r,i)&&!t.isDark(r+1,i)&&t.isDark(r+2,i)&&t.isDark(r+3,i)&&t.isDark(r+4,i)&&!t.isDark(r+5,i)&&t.isDark(r+6,i)&&(n+=40);for(var c=0,i=0;i<e;i++)for(var r=0;r<e;r++)t.isDark(r,i)&&c++;var f=Math.abs(100*c/e/e-50)/5;return n+=f*10,n}},JI=wt,eN=ZI,W4=QI,H4=YI,ki=JI,tN=z4;function Yn(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var un=Yn.prototype;un.addData=function(t){var e=new eN(t);this.dataList.push(e),this.dataCache=null};un.isDark=function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]};un.getModuleCount=function(){return this.moduleCount};un.make=function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=W4.getRSBlocks(t,this.errorCorrectLevel),n=new H4,r=0,i=0;i<e.length;i++)r+=e[i].dataCount;for(var i=0;i<this.dataList.length;i++){var o=this.dataList[i];n.put(o.mode,4),n.put(o.getLength(),ki.getLengthInBits(o.mode,t)),o.write(n)}if(n.getLengthInBits()<=r*8)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())};un.makeImpl=function(t,e){this.moduleCount=this.typeNumber*4+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++)this.modules[n][r]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),this.dataCache==null&&(this.dataCache=Yn.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)};un.setupPositionProbePattern=function(t,e){for(var n=-1;n<=7;n++)if(!(t+n<=-1||this.moduleCount<=t+n))for(var r=-1;r<=7;r++)e+r<=-1||this.moduleCount<=e+r||(0<=n&&n<=6&&(r==0||r==6)||0<=r&&r<=6&&(n==0||n==6)||2<=n&&n<=4&&2<=r&&r<=4?this.modules[t+n][e+r]=!0:this.modules[t+n][e+r]=!1)};un.getBestMaskPattern=function(){for(var t=0,e=0,n=0;n<8;n++){this.makeImpl(!0,n);var r=ki.getLostPoint(this);(n==0||t>r)&&(t=r,e=n)}return e};un.createMovieClip=function(t,e,n){var r=t.createEmptyMovieClip(e,n),i=1;this.make();for(var o=0;o<this.modules.length;o++)for(var s=o*i,a=0;a<this.modules[o].length;a++){var l=a*i,u=this.modules[o][a];u&&(r.beginFill(0,100),r.moveTo(l,s),r.lineTo(l+i,s),r.lineTo(l+i,s+i),r.lineTo(l,s+i),r.endFill())}return r};un.setupTimingPattern=function(){for(var t=8;t<this.moduleCount-8;t++)this.modules[t][6]==null&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)this.modules[6][e]==null&&(this.modules[6][e]=e%2==0)};un.setupPositionAdjustPattern=function(){for(var t=ki.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var n=0;n<t.length;n++){var r=t[e],i=t[n];if(this.modules[r][i]==null)for(var o=-2;o<=2;o++)for(var s=-2;s<=2;s++)o==-2||o==2||s==-2||s==2||o==0&&s==0?this.modules[r+o][i+s]=!0:this.modules[r+o][i+s]=!1}};un.setupTypeNumber=function(t){for(var e=ki.getBCHTypeNumber(this.typeNumber),n=0;n<18;n++){var r=!t&&(e>>n&1)==1;this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=r}for(var n=0;n<18;n++){var r=!t&&(e>>n&1)==1;this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=r}};un.setupTypeInfo=function(t,e){for(var n=this.errorCorrectLevel<<3|e,r=ki.getBCHTypeInfo(n),i=0;i<15;i++){var o=!t&&(r>>i&1)==1;i<6?this.modules[i][8]=o:i<8?this.modules[i+1][8]=o:this.modules[this.moduleCount-15+i][8]=o}for(var i=0;i<15;i++){var o=!t&&(r>>i&1)==1;i<8?this.modules[8][this.moduleCount-i-1]=o:i<9?this.modules[8][15-i-1+1]=o:this.modules[8][15-i-1]=o}this.modules[this.moduleCount-8][8]=!t};un.mapData=function(t,e){for(var n=-1,r=this.moduleCount-1,i=7,o=0,s=this.moduleCount-1;s>0;s-=2)for(s==6&&s--;;){for(var a=0;a<2;a++)if(this.modules[r][s-a]==null){var l=!1;o<t.length&&(l=(t[o]>>>i&1)==1);var u=ki.getMask(e,r,s-a);u&&(l=!l),this.modules[r][s-a]=l,i--,i==-1&&(o++,i=7)}if(r+=n,r<0||this.moduleCount<=r){r-=n,n=-n;break}}};Yn.PAD0=236;Yn.PAD1=17;Yn.createData=function(t,e,n){for(var r=W4.getRSBlocks(t,e),i=new H4,o=0;o<n.length;o++){var s=n[o];i.put(s.mode,4),i.put(s.getLength(),ki.getLengthInBits(s.mode,t)),s.write(i)}for(var a=0,o=0;o<r.length;o++)a+=r[o].dataCount;if(i.getLengthInBits()>a*8)throw new Error("code length overflow. ("+i.getLengthInBits()+">"+a*8+")");for(i.getLengthInBits()+4<=a*8&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(!1);for(;!(i.getLengthInBits()>=a*8||(i.put(Yn.PAD0,8),i.getLengthInBits()>=a*8));)i.put(Yn.PAD1,8);return Yn.createBytes(i,r)};Yn.createBytes=function(t,e){for(var n=0,r=0,i=0,o=new Array(e.length),s=new Array(e.length),a=0;a<e.length;a++){var l=e[a].dataCount,u=e[a].totalCount-l;r=Math.max(r,l),i=Math.max(i,u),o[a]=new Array(l);for(var c=0;c<o[a].length;c++)o[a][c]=255&t.buffer[c+n];n+=l;var f=ki.getErrorCorrectPolynomial(u),p=new tN(o[a],f.getLength()-1),w=p.mod(f);s[a]=new Array(f.getLength()-1);for(var c=0;c<s[a].length;c++){var v=c+w.getLength()-s[a].length;s[a][c]=v>=0?w.get(v):0}}for(var C=0,c=0;c<e.length;c++)C+=e[c].totalCount;for(var E=new Array(C),b=0,c=0;c<r;c++)for(var a=0;a<e.length;a++)c<o[a].length&&(E[b++]=o[a][c]);for(var c=0;c<i;c++)for(var a=0;a<e.length;a++)c<s[a].length&&(E[b++]=s[a][c]);return E};var nN=Yn,V4={exports:{}},rN="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",iN=rN,oN=iN;function q4(){}function G4(){}G4.resetWarningCache=q4;var sN=function(){function t(r,i,o,s,a,l){if(l!==oN){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:G4,resetWarningCache:q4};return n.PropTypes=n,n};V4.exports=sN();var K4=V4.exports,rm={};Object.defineProperty(rm,"__esModule",{value:!0});var aN=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},lN=K4,fn=Q4(lN),Z4=tt,Vu=Q4(Z4);function Q4(t){return t&&t.__esModule?t:{default:t}}function uN(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}var cN={bgColor:fn.default.oneOfType([fn.default.object,fn.default.string]).isRequired,bgD:fn.default.string.isRequired,fgColor:fn.default.oneOfType([fn.default.object,fn.default.string]).isRequired,fgD:fn.default.string.isRequired,size:fn.default.number.isRequired,title:fn.default.string,viewBoxSize:fn.default.number.isRequired,xmlns:fn.default.string},dN={title:void 0,xmlns:"http://www.w3.org/2000/svg"},kf=(0,Z4.forwardRef)(function(t,e){var n=t.bgColor,r=t.bgD,i=t.fgD,o=t.fgColor,s=t.size,a=t.title,l=t.viewBoxSize,u=uN(t,["bgColor","bgD","fgD","fgColor","size","title","viewBoxSize"]);return Vu.default.createElement("svg",aN({},u,{height:s,ref:e,viewBox:"0 0 "+l+" "+l,width:s}),a?Vu.default.createElement("title",null,a):null,Vu.default.createElement("path",{d:r,fill:n}),Vu.default.createElement("path",{d:i,fill:o}))});kf.displayName="QRCodeSvg";kf.propTypes=cN;kf.defaultProps=dN;rm.default=kf;Object.defineProperty(Tf,"__esModule",{value:!0});var Y4=Tf.QRCode=void 0,fN=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},hN=nN,pN=pu(hN),gN=U4,mN=pu(gN),wN=K4,dr=pu(wN),X4=tt,vN=pu(X4),yN=rm,bN=pu(yN);function pu(t){return t&&t.__esModule?t:{default:t}}function xN(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}var CN={bgColor:dr.default.oneOfType([dr.default.object,dr.default.string]),fgColor:dr.default.oneOfType([dr.default.object,dr.default.string]),level:dr.default.string,size:dr.default.number,value:dr.default.string.isRequired},EN={bgColor:"#FFFFFF",fgColor:"#000000",level:"L",size:256},gu=(0,X4.forwardRef)(function(t,e){var n=t.bgColor,r=t.fgColor,i=t.level,o=t.size,s=t.value,a=xN(t,["bgColor","fgColor","level","size","value"]),l=new pN.default(-1,mN.default[i]);l.addData(s),l.make();var u=l.modules;return vN.default.createElement(bN.default,fN({},a,{bgColor:n,bgD:u.map(function(c,f){return c.map(function(p,w){return p?"":"M "+w+" "+f+" l 1 0 0 1 -1 0 Z"}).join(" ")}).join(" "),fgColor:r,fgD:u.map(function(c,f){return c.map(function(p,w){return p?"M "+w+" "+f+" l 1 0 0 1 -1 0 Z":""}).join(" ")}).join(" "),ref:e,size:o,viewBoxSize:u.length}))});Y4=Tf.QRCode=gu;gu.displayName="QRCode";gu.propTypes=CN;gu.defaultProps=EN;Tf.default=gu;const J4="7b209bc475a7ee305942deecb8eb8305",_N={name:"Web3Modal",description:"Web3Modal Example",url:"https://web3modal.com",icons:["https://avatars.githubusercontent.com/u/37784886"]},e6=[Ia,Ix,l9],t6=WI({chains:e6,projectId:J4,metadata:_N});HI({wagmiConfig:t6,projectId:J4,chains:e6});const SN=()=>{const[t,e]=tt.useState(""),[n,r]=tt.useState(""),[i,o]=tt.useState(""),[s,a]=tt.useState(""),l=p=>{e(p.target.value)},u=p=>{r(p.target.value)},c=p=>{o(p.target.value)},f=async()=>{if(console.log("Phonenumber:",t),console.log("Contraseña 1:",n),console.log("Contraseña 2:",i),n===i){const p=await GI(n);a(p),document.getElementById("hash").textContent=p,document.getElementById("mensaje").textContent="",console.log("Hash:",p)}else console.log("Las contraseñas no coinciden"),document.getElementById("hash").textContent="",document.getElementById("mensaje").textContent="Las contraseñas no son las mismas"};return qe.jsxs("div",{children:[qe.jsx("input",{type:"text",placeholder:"Phonenumber",value:t,onChange:l}),qe.jsx("br",{}),qe.jsx("input",{type:"password",placeholder:"Clave 1",value:n,onChange:u}),qe.jsx("br",{}),qe.jsx("input",{type:"password",placeholder:"Clave 2",value:i,onChange:c}),qe.jsx("br",{}),qe.jsx("button",{type:"submit",onClick:f,children:"Guardar"}),qe.jsx("p",{id:"hash"}),qe.jsx("p",{id:"mensaje"}),qe.jsx("br",{}),s&&qe.jsx(Y4,{title:"GeeksForGeeks",value:s,bgColor:"#ffffff",fgColor:"#000000",size:200})]})};function $N(){return qe.jsx(qe.Fragment,{children:qe.jsxs(ZD,{config:t6,children:["Rest of your app...",qe.jsx("br",{}),qe.jsx(SN,{}),qe.jsx("br",{}),qe.jsx("w3m-button",{}),qe.jsx("br",{})]})})}F0.createRoot(document.getElementById("root")).render(qe.jsx(w6.StrictMode,{children:qe.jsx($N,{})}));export{y5 as $,Sr as A,Tl as B,Un as C,wi as D,xn as E,Ol as F,rd as G,Il as H,fo as I,id as J,vi as K,f1 as L,po as M,nr as N,nd as O,Rl as P,kl as Q,uo as R,Mt as S,Kt as T,ke as U,ad as V,s1 as W,rE as X,mE as Y,wE as Z,vE as _,K_ as a,Kg as a$,nE as a0,ic as a1,y3 as a2,sn as a3,zs as a4,AN as a5,ds as a6,U as a7,Ld as a8,Rt as a9,yM as aA,qO as aB,_M as aC,xM as aD,EM as aE,CM as aF,P4 as aG,Af as aH,Gt as aI,TM as aJ,aB as aK,$M as aL,lB as aM,fu as aN,NM as aO,FM as aP,jM as aQ,DM as aR,MM as aS,Ts as aT,RM as aU,YM as aV,HM as aW,_n as aX,IM as aY,kM as aZ,OM as a_,ls as aa,sl as ab,aC as ac,Zd as ad,Cr as ae,Gl as af,Oa as ag,er as ah,ou as ai,PN as aj,Pf as ak,b3 as al,Xi as am,ue as an,Fn as ao,xf as ap,In as aq,jn as ar,F2 as as,Ji as at,VM as au,qM as av,Vr as aw,mM as ax,wM as ay,vM as az,vs as b,Zg as b0,A4 as b1,PM as b2,AM as b3,bM as b4,LM as b5,UM as b6,Df as b7,SM as b8,Qg as b9,Qk as bA,zM as ba,BM as bb,WM as bc,uB as bd,ZM as be,KM as bf,DI as bg,oB as bh,XM as bi,TI as bj,GM as bk,nB as bl,JM as bm,rB as bn,sB as bo,eB as bp,tB as bq,iB as br,QM as bs,bI as bt,T4 as bu,L0 as bv,pM as bw,gM as bx,RT as by,Kb as bz,j as c,Pl as d,a1 as e,Al as f,Kc as g,ys as h,G_ as i,bs as j,Zc as k,_r as l,Qc as m,xs as n,co as o,Yc as p,gi as q,mi as r,ib as s,Dl as t,Cs as u,Jc as v,tr as w,ho as x,ed as y,td as z};
