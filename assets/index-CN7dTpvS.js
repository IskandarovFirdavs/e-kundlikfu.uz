(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))h(x);new MutationObserver(x=>{for(const y of x)if(y.type==="childList")for(const b of y.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&h(b)}).observe(document,{childList:!0,subtree:!0});function d(x){const y={};return x.integrity&&(y.integrity=x.integrity),x.referrerPolicy&&(y.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?y.credentials="include":x.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function h(x){if(x.ep)return;x.ep=!0;const y=d(x);fetch(x.href,y)}})();function gh(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Bf={exports:{}},rl={};var O0;function bv(){if(O0)return rl;O0=1;var a=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function d(h,x,y){var b=null;if(y!==void 0&&(b=""+y),x.key!==void 0&&(b=""+x.key),"key"in x){y={};for(var O in x)O!=="key"&&(y[O]=x[O])}else y=x;return x=y.ref,{$$typeof:a,type:h,key:b,ref:x!==void 0?x:null,props:y}}return rl.Fragment=c,rl.jsx=d,rl.jsxs=d,rl}var R0;function wv(){return R0||(R0=1,Bf.exports=bv()),Bf.exports}var p=wv(),Nf={exports:{}},Ot={};var D0;function Sv(){if(D0)return Ot;D0=1;var a=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),y=Symbol.for("react.consumer"),b=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),S=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),R=Symbol.iterator;function G(M){return M===null||typeof M!="object"?null:(M=R&&M[R]||M["@@iterator"],typeof M=="function"?M:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,W={};function nt(M,V,et){this.props=M,this.context=V,this.refs=W,this.updater=et||q}nt.prototype.isReactComponent={},nt.prototype.setState=function(M,V){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,V,"setState")},nt.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function rt(){}rt.prototype=nt.prototype;function tt(M,V,et){this.props=M,this.context=V,this.refs=W,this.updater=et||q}var ht=tt.prototype=new rt;ht.constructor=tt,X(ht,nt.prototype),ht.isPureReactComponent=!0;var wt=Array.isArray;function vt(){}var ot={H:null,A:null,T:null,S:null},Ut=Object.prototype.hasOwnProperty;function zt(M,V,et){var st=et.ref;return{$$typeof:a,type:M,key:V,ref:st!==void 0?st:null,props:et}}function Rt(M,V){return zt(M.type,V,M.props)}function Tt(M){return typeof M=="object"&&M!==null&&M.$$typeof===a}function Kt(M){var V={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(et){return V[et]})}var je=/\/+/g;function he(M,V){return typeof M=="object"&&M!==null&&M.key!=null?Kt(""+M.key):V.toString(36)}function mt(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(vt,vt):(M.status="pending",M.then(function(V){M.status==="pending"&&(M.status="fulfilled",M.value=V)},function(V){M.status==="pending"&&(M.status="rejected",M.reason=V)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function N(M,V,et,st,ft){var ut=typeof M;(ut==="undefined"||ut==="boolean")&&(M=null);var Ct=!1;if(M===null)Ct=!0;else switch(ut){case"bigint":case"string":case"number":Ct=!0;break;case"object":switch(M.$$typeof){case a:case c:Ct=!0;break;case E:return Ct=M._init,N(Ct(M._payload),V,et,st,ft)}}if(Ct)return ft=ft(M),Ct=st===""?"."+he(M,0):st,wt(ft)?(et="",Ct!=null&&(et=Ct.replace(je,"$&/")+"/"),N(ft,V,et,"",function(cn){return cn})):ft!=null&&(Tt(ft)&&(ft=Rt(ft,et+(ft.key==null||M&&M.key===ft.key?"":(""+ft.key).replace(je,"$&/")+"/")+Ct)),V.push(ft)),1;Ct=0;var Qt=st===""?".":st+":";if(wt(M))for(var Ft=0;Ft<M.length;Ft++)st=M[Ft],ut=Qt+he(st,Ft),Ct+=N(st,V,et,ut,ft);else if(Ft=G(M),typeof Ft=="function")for(M=Ft.call(M),Ft=0;!(st=M.next()).done;)st=st.value,ut=Qt+he(st,Ft++),Ct+=N(st,V,et,ut,ft);else if(ut==="object"){if(typeof M.then=="function")return N(mt(M),V,et,st,ft);throw V=String(M),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return Ct}function it(M,V,et){if(M==null)return M;var st=[],ft=0;return N(M,st,"","",function(ut){return V.call(et,ut,ft++)}),st}function at(M){if(M._status===-1){var V=M._result;V=V(),V.then(function(et){(M._status===0||M._status===-1)&&(M._status=1,M._result=et)},function(et){(M._status===0||M._status===-1)&&(M._status=2,M._result=et)}),M._status===-1&&(M._status=0,M._result=V)}if(M._status===1)return M._result.default;throw M._result}var Mt=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)},lt={map:it,forEach:function(M,V,et){it(M,function(){V.apply(this,arguments)},et)},count:function(M){var V=0;return it(M,function(){V++}),V},toArray:function(M){return it(M,function(V){return V})||[]},only:function(M){if(!Tt(M))throw Error("React.Children.only expected to receive a single React element child.");return M}};return Ot.Activity=j,Ot.Children=lt,Ot.Component=nt,Ot.Fragment=d,Ot.Profiler=x,Ot.PureComponent=tt,Ot.StrictMode=h,Ot.Suspense=w,Ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ot,Ot.__COMPILER_RUNTIME={__proto__:null,c:function(M){return ot.H.useMemoCache(M)}},Ot.cache=function(M){return function(){return M.apply(null,arguments)}},Ot.cacheSignal=function(){return null},Ot.cloneElement=function(M,V,et){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var st=X({},M.props),ft=M.key;if(V!=null)for(ut in V.key!==void 0&&(ft=""+V.key),V)!Ut.call(V,ut)||ut==="key"||ut==="__self"||ut==="__source"||ut==="ref"&&V.ref===void 0||(st[ut]=V[ut]);var ut=arguments.length-2;if(ut===1)st.children=et;else if(1<ut){for(var Ct=Array(ut),Qt=0;Qt<ut;Qt++)Ct[Qt]=arguments[Qt+2];st.children=Ct}return zt(M.type,ft,st)},Ot.createContext=function(M){return M={$$typeof:b,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:y,_context:M},M},Ot.createElement=function(M,V,et){var st,ft={},ut=null;if(V!=null)for(st in V.key!==void 0&&(ut=""+V.key),V)Ut.call(V,st)&&st!=="key"&&st!=="__self"&&st!=="__source"&&(ft[st]=V[st]);var Ct=arguments.length-2;if(Ct===1)ft.children=et;else if(1<Ct){for(var Qt=Array(Ct),Ft=0;Ft<Ct;Ft++)Qt[Ft]=arguments[Ft+2];ft.children=Qt}if(M&&M.defaultProps)for(st in Ct=M.defaultProps,Ct)ft[st]===void 0&&(ft[st]=Ct[st]);return zt(M,ut,ft)},Ot.createRef=function(){return{current:null}},Ot.forwardRef=function(M){return{$$typeof:O,render:M}},Ot.isValidElement=Tt,Ot.lazy=function(M){return{$$typeof:E,_payload:{_status:-1,_result:M},_init:at}},Ot.memo=function(M,V){return{$$typeof:S,type:M,compare:V===void 0?null:V}},Ot.startTransition=function(M){var V=ot.T,et={};ot.T=et;try{var st=M(),ft=ot.S;ft!==null&&ft(et,st),typeof st=="object"&&st!==null&&typeof st.then=="function"&&st.then(vt,Mt)}catch(ut){Mt(ut)}finally{V!==null&&et.types!==null&&(V.types=et.types),ot.T=V}},Ot.unstable_useCacheRefresh=function(){return ot.H.useCacheRefresh()},Ot.use=function(M){return ot.H.use(M)},Ot.useActionState=function(M,V,et){return ot.H.useActionState(M,V,et)},Ot.useCallback=function(M,V){return ot.H.useCallback(M,V)},Ot.useContext=function(M){return ot.H.useContext(M)},Ot.useDebugValue=function(){},Ot.useDeferredValue=function(M,V){return ot.H.useDeferredValue(M,V)},Ot.useEffect=function(M,V){return ot.H.useEffect(M,V)},Ot.useEffectEvent=function(M){return ot.H.useEffectEvent(M)},Ot.useId=function(){return ot.H.useId()},Ot.useImperativeHandle=function(M,V,et){return ot.H.useImperativeHandle(M,V,et)},Ot.useInsertionEffect=function(M,V){return ot.H.useInsertionEffect(M,V)},Ot.useLayoutEffect=function(M,V){return ot.H.useLayoutEffect(M,V)},Ot.useMemo=function(M,V){return ot.H.useMemo(M,V)},Ot.useOptimistic=function(M,V){return ot.H.useOptimistic(M,V)},Ot.useReducer=function(M,V,et){return ot.H.useReducer(M,V,et)},Ot.useRef=function(M){return ot.H.useRef(M)},Ot.useState=function(M){return ot.H.useState(M)},Ot.useSyncExternalStore=function(M,V,et){return ot.H.useSyncExternalStore(M,V,et)},Ot.useTransition=function(){return ot.H.useTransition()},Ot.version="19.2.0",Ot}var k0;function xh(){return k0||(k0=1,Nf.exports=Sv()),Nf.exports}var z=xh();const tn=gh(z);var Uf={exports:{}},ol={},Hf={exports:{}},Zf={};var B0;function zv(){return B0||(B0=1,(function(a){function c(N,it){var at=N.length;N.push(it);t:for(;0<at;){var Mt=at-1>>>1,lt=N[Mt];if(0<x(lt,it))N[Mt]=it,N[at]=lt,at=Mt;else break t}}function d(N){return N.length===0?null:N[0]}function h(N){if(N.length===0)return null;var it=N[0],at=N.pop();if(at!==it){N[0]=at;t:for(var Mt=0,lt=N.length,M=lt>>>1;Mt<M;){var V=2*(Mt+1)-1,et=N[V],st=V+1,ft=N[st];if(0>x(et,at))st<lt&&0>x(ft,et)?(N[Mt]=ft,N[st]=at,Mt=st):(N[Mt]=et,N[V]=at,Mt=V);else if(st<lt&&0>x(ft,at))N[Mt]=ft,N[st]=at,Mt=st;else break t}}return it}function x(N,it){var at=N.sortIndex-it.sortIndex;return at!==0?at:N.id-it.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var y=performance;a.unstable_now=function(){return y.now()}}else{var b=Date,O=b.now();a.unstable_now=function(){return b.now()-O}}var w=[],S=[],E=1,j=null,R=3,G=!1,q=!1,X=!1,W=!1,nt=typeof setTimeout=="function"?setTimeout:null,rt=typeof clearTimeout=="function"?clearTimeout:null,tt=typeof setImmediate<"u"?setImmediate:null;function ht(N){for(var it=d(S);it!==null;){if(it.callback===null)h(S);else if(it.startTime<=N)h(S),it.sortIndex=it.expirationTime,c(w,it);else break;it=d(S)}}function wt(N){if(X=!1,ht(N),!q)if(d(w)!==null)q=!0,vt||(vt=!0,Kt());else{var it=d(S);it!==null&&mt(wt,it.startTime-N)}}var vt=!1,ot=-1,Ut=5,zt=-1;function Rt(){return W?!0:!(a.unstable_now()-zt<Ut)}function Tt(){if(W=!1,vt){var N=a.unstable_now();zt=N;var it=!0;try{t:{q=!1,X&&(X=!1,rt(ot),ot=-1),G=!0;var at=R;try{e:{for(ht(N),j=d(w);j!==null&&!(j.expirationTime>N&&Rt());){var Mt=j.callback;if(typeof Mt=="function"){j.callback=null,R=j.priorityLevel;var lt=Mt(j.expirationTime<=N);if(N=a.unstable_now(),typeof lt=="function"){j.callback=lt,ht(N),it=!0;break e}j===d(w)&&h(w),ht(N)}else h(w);j=d(w)}if(j!==null)it=!0;else{var M=d(S);M!==null&&mt(wt,M.startTime-N),it=!1}}break t}finally{j=null,R=at,G=!1}it=void 0}}finally{it?Kt():vt=!1}}}var Kt;if(typeof tt=="function")Kt=function(){tt(Tt)};else if(typeof MessageChannel<"u"){var je=new MessageChannel,he=je.port2;je.port1.onmessage=Tt,Kt=function(){he.postMessage(null)}}else Kt=function(){nt(Tt,0)};function mt(N,it){ot=nt(function(){N(a.unstable_now())},it)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(N){N.callback=null},a.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ut=0<N?Math.floor(1e3/N):5},a.unstable_getCurrentPriorityLevel=function(){return R},a.unstable_next=function(N){switch(R){case 1:case 2:case 3:var it=3;break;default:it=R}var at=R;R=it;try{return N()}finally{R=at}},a.unstable_requestPaint=function(){W=!0},a.unstable_runWithPriority=function(N,it){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var at=R;R=N;try{return it()}finally{R=at}},a.unstable_scheduleCallback=function(N,it,at){var Mt=a.unstable_now();switch(typeof at=="object"&&at!==null?(at=at.delay,at=typeof at=="number"&&0<at?Mt+at:Mt):at=Mt,N){case 1:var lt=-1;break;case 2:lt=250;break;case 5:lt=1073741823;break;case 4:lt=1e4;break;default:lt=5e3}return lt=at+lt,N={id:E++,callback:it,priorityLevel:N,startTime:at,expirationTime:lt,sortIndex:-1},at>Mt?(N.sortIndex=at,c(S,N),d(w)===null&&N===d(S)&&(X?(rt(ot),ot=-1):X=!0,mt(wt,at-Mt))):(N.sortIndex=lt,c(w,N),q||G||(q=!0,vt||(vt=!0,Kt()))),N},a.unstable_shouldYield=Rt,a.unstable_wrapCallback=function(N){var it=R;return function(){var at=R;R=it;try{return N.apply(this,arguments)}finally{R=at}}}})(Zf)),Zf}var N0;function Tv(){return N0||(N0=1,Hf.exports=zv()),Hf.exports}var Pf={exports:{}},rn={};var U0;function Ev(){if(U0)return rn;U0=1;var a=xh();function c(w){var S="https://react.dev/errors/"+w;if(1<arguments.length){S+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)S+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+w+"; visit "+S+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var h={d:{f:d,r:function(){throw Error(c(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},x=Symbol.for("react.portal");function y(w,S,E){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:x,key:j==null?null:""+j,children:w,containerInfo:S,implementation:E}}var b=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function O(w,S){if(w==="font")return"";if(typeof S=="string")return S==="use-credentials"?S:""}return rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,rn.createPortal=function(w,S){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!S||S.nodeType!==1&&S.nodeType!==9&&S.nodeType!==11)throw Error(c(299));return y(w,S,null,E)},rn.flushSync=function(w){var S=b.T,E=h.p;try{if(b.T=null,h.p=2,w)return w()}finally{b.T=S,h.p=E,h.d.f()}},rn.preconnect=function(w,S){typeof w=="string"&&(S?(S=S.crossOrigin,S=typeof S=="string"?S==="use-credentials"?S:"":void 0):S=null,h.d.C(w,S))},rn.prefetchDNS=function(w){typeof w=="string"&&h.d.D(w)},rn.preinit=function(w,S){if(typeof w=="string"&&S&&typeof S.as=="string"){var E=S.as,j=O(E,S.crossOrigin),R=typeof S.integrity=="string"?S.integrity:void 0,G=typeof S.fetchPriority=="string"?S.fetchPriority:void 0;E==="style"?h.d.S(w,typeof S.precedence=="string"?S.precedence:void 0,{crossOrigin:j,integrity:R,fetchPriority:G}):E==="script"&&h.d.X(w,{crossOrigin:j,integrity:R,fetchPriority:G,nonce:typeof S.nonce=="string"?S.nonce:void 0})}},rn.preinitModule=function(w,S){if(typeof w=="string")if(typeof S=="object"&&S!==null){if(S.as==null||S.as==="script"){var E=O(S.as,S.crossOrigin);h.d.M(w,{crossOrigin:E,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0})}}else S==null&&h.d.M(w)},rn.preload=function(w,S){if(typeof w=="string"&&typeof S=="object"&&S!==null&&typeof S.as=="string"){var E=S.as,j=O(E,S.crossOrigin);h.d.L(w,E,{crossOrigin:j,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,type:typeof S.type=="string"?S.type:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0,referrerPolicy:typeof S.referrerPolicy=="string"?S.referrerPolicy:void 0,imageSrcSet:typeof S.imageSrcSet=="string"?S.imageSrcSet:void 0,imageSizes:typeof S.imageSizes=="string"?S.imageSizes:void 0,media:typeof S.media=="string"?S.media:void 0})}},rn.preloadModule=function(w,S){if(typeof w=="string")if(S){var E=O(S.as,S.crossOrigin);h.d.m(w,{as:typeof S.as=="string"&&S.as!=="script"?S.as:void 0,crossOrigin:E,integrity:typeof S.integrity=="string"?S.integrity:void 0})}else h.d.m(w)},rn.requestFormReset=function(w){h.d.r(w)},rn.unstable_batchedUpdates=function(w,S){return w(S)},rn.useFormState=function(w,S,E){return b.H.useFormState(w,S,E)},rn.useFormStatus=function(){return b.H.useHostTransitionStatus()},rn.version="19.2.0",rn}var H0;function a1(){if(H0)return Pf.exports;H0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(c){console.error(c)}}return a(),Pf.exports=Ev(),Pf.exports}var Z0;function Av(){if(Z0)return ol;Z0=1;var a=Tv(),c=xh(),d=a1();function h(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)e+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function x(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function y(t){var e=t,i=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(i=e.return),t=e.return;while(t)}return e.tag===3?i:null}function b(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function O(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function w(t){if(y(t)!==t)throw Error(h(188))}function S(t){var e=t.alternate;if(!e){if(e=y(t),e===null)throw Error(h(188));return e!==t?null:t}for(var i=t,o=e;;){var l=i.return;if(l===null)break;var u=l.alternate;if(u===null){if(o=l.return,o!==null){i=o;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===i)return w(l),t;if(u===o)return w(l),e;u=u.sibling}throw Error(h(188))}if(i.return!==o.return)i=l,o=u;else{for(var g=!1,_=l.child;_;){if(_===i){g=!0,i=l,o=u;break}if(_===o){g=!0,o=l,i=u;break}_=_.sibling}if(!g){for(_=u.child;_;){if(_===i){g=!0,i=u,o=l;break}if(_===o){g=!0,o=u,i=l;break}_=_.sibling}if(!g)throw Error(h(189))}}if(i.alternate!==o)throw Error(h(190))}if(i.tag!==3)throw Error(h(188));return i.stateNode.current===i?t:e}function E(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=E(t),e!==null)return e;t=t.sibling}return null}var j=Object.assign,R=Symbol.for("react.element"),G=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),nt=Symbol.for("react.profiler"),rt=Symbol.for("react.consumer"),tt=Symbol.for("react.context"),ht=Symbol.for("react.forward_ref"),wt=Symbol.for("react.suspense"),vt=Symbol.for("react.suspense_list"),ot=Symbol.for("react.memo"),Ut=Symbol.for("react.lazy"),zt=Symbol.for("react.activity"),Rt=Symbol.for("react.memo_cache_sentinel"),Tt=Symbol.iterator;function Kt(t){return t===null||typeof t!="object"?null:(t=Tt&&t[Tt]||t["@@iterator"],typeof t=="function"?t:null)}var je=Symbol.for("react.client.reference");function he(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===je?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case X:return"Fragment";case nt:return"Profiler";case W:return"StrictMode";case wt:return"Suspense";case vt:return"SuspenseList";case zt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case q:return"Portal";case tt:return t.displayName||"Context";case rt:return(t._context.displayName||"Context")+".Consumer";case ht:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ot:return e=t.displayName||null,e!==null?e:he(t.type)||"Memo";case Ut:e=t._payload,t=t._init;try{return he(t(e))}catch{}}return null}var mt=Array.isArray,N=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,at={pending:!1,data:null,method:null,action:null},Mt=[],lt=-1;function M(t){return{current:t}}function V(t){0>lt||(t.current=Mt[lt],Mt[lt]=null,lt--)}function et(t,e){lt++,Mt[lt]=t.current,t.current=e}var st=M(null),ft=M(null),ut=M(null),Ct=M(null);function Qt(t,e){switch(et(ut,e),et(ft,t),et(st,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?e0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=e0(e),t=n0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}V(st),et(st,t)}function Ft(){V(st),V(ft),V(ut)}function cn(t){t.memoizedState!==null&&et(Ct,t);var e=st.current,i=n0(e,t.type);e!==i&&(et(ft,t),et(st,i))}function en(t){ft.current===t&&(V(st),V(ft)),Ct.current===t&&(V(Ct),el._currentValue=at)}var Me,ha;function Fn(t){if(Me===void 0)try{throw Error()}catch(i){var e=i.stack.trim().match(/\n( *(at )?)/);Me=e&&e[1]||"",ha=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Me+t+ha}var Di=!1;function ki(t,e){if(!t||Di)return"";Di=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(e){var F=function(){throw Error()};if(Object.defineProperty(F.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(F,[])}catch(Y){var P=Y}Reflect.construct(t,[],F)}else{try{F.call()}catch(Y){P=Y}t.call(F.prototype)}}else{try{throw Error()}catch(Y){P=Y}(F=t())&&typeof F.catch=="function"&&F.catch(function(){})}}catch(Y){if(Y&&P&&typeof Y.stack=="string")return[Y.stack,P.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=o.DetermineComponentFrameRoot(),g=u[0],_=u[1];if(g&&_){var C=g.split(`
`),H=_.split(`
`);for(l=o=0;o<C.length&&!C[o].includes("DetermineComponentFrameRoot");)o++;for(;l<H.length&&!H[l].includes("DetermineComponentFrameRoot");)l++;if(o===C.length||l===H.length)for(o=C.length-1,l=H.length-1;1<=o&&0<=l&&C[o]!==H[l];)l--;for(;1<=o&&0<=l;o--,l--)if(C[o]!==H[l]){if(o!==1||l!==1)do if(o--,l--,0>l||C[o]!==H[l]){var I=`
`+C[o].replace(" at new "," at ");return t.displayName&&I.includes("<anonymous>")&&(I=I.replace("<anonymous>",t.displayName)),I}while(1<=o&&0<=l);break}}}finally{Di=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?Fn(i):""}function Jn(t,e){switch(t.tag){case 26:case 27:case 5:return Fn(t.type);case 16:return Fn("Lazy");case 13:return t.child!==e&&e!==null?Fn("Suspense Fallback"):Fn("Suspense");case 19:return Fn("SuspenseList");case 0:case 15:return ki(t.type,!1);case 11:return ki(t.type.render,!1);case 1:return ki(t.type,!0);case 31:return Fn("Activity");default:return""}}function Bi(t){try{var e="",i=null;do e+=Jn(t,i),i=t,t=t.return;while(t);return e}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var nr=Object.prototype.hasOwnProperty,pa=a.unstable_scheduleCallback,Ni=a.unstable_cancelCallback,Ir=a.unstable_shouldYield,Kr=a.unstable_requestPaint,$e=a.unstable_now,ma=a.unstable_getCurrentPriorityLevel,Bn=a.unstable_ImmediatePriority,ir=a.unstable_UserBlockingPriority,pi=a.unstable_NormalPriority,mi=a.unstable_LowPriority,Wn=a.unstable_IdlePriority,Ui=a.log,Qr=a.unstable_setDisableYieldValue,Nn=null,Ue=null;function Tn(t){if(typeof Ui=="function"&&Qr(t),Ue&&typeof Ue.setStrictMode=="function")try{Ue.setStrictMode(Nn,t)}catch{}}var Ie=Math.clz32?Math.clz32:is,Hi=Math.log,ns=Math.LN2;function is(t){return t>>>=0,t===0?32:31-(Hi(t)/ns|0)|0}var Zi=256,$=262144,J=4194304;function ct(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function It(t,e,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,u=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var _=o&134217727;return _!==0?(o=_&~u,o!==0?l=ct(o):(g&=_,g!==0?l=ct(g):i||(i=_&~t,i!==0&&(l=ct(i))))):(_=o&~u,_!==0?l=ct(_):g!==0?l=ct(g):i||(i=o&~t,i!==0&&(l=ct(i)))),l===0?0:e!==0&&e!==l&&(e&u)===0&&(u=l&-l,i=e&-e,u>=i||u===32&&(i&4194048)!==0)?e:l}function pe(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Gt(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function be(){var t=J;return J<<=1,(J&62914560)===0&&(J=4194304),t}function ga(t){for(var e=[],i=0;31>i;i++)e.push(t);return e}function xt(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Yc(t,e,i,o,l,u){var g=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var _=t.entanglements,C=t.expirationTimes,H=t.hiddenUpdates;for(i=g&~i;0<i;){var I=31-Ie(i),F=1<<I;_[I]=0,C[I]=-1;var P=H[I];if(P!==null)for(H[I]=null,I=0;I<P.length;I++){var Y=P[I];Y!==null&&(Y.lane&=-536870913)}i&=~F}o!==0&&Rl(t,o,0),u!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=u&~(g&~e))}function Rl(t,e,i){t.pendingLanes|=e,t.suspendedLanes&=~e;var o=31-Ie(e);t.entangledLanes|=e,t.entanglements[o]=t.entanglements[o]|1073741824|i&261930}function Dl(t,e){var i=t.entangledLanes|=e;for(t=t.entanglements;i;){var o=31-Ie(i),l=1<<o;l&e|t[o]&e&&(t[o]|=e),i&=~l}}function kl(t,e){var i=e&-e;return i=(i&42)!==0?1:dn(i),(i&(t.suspendedLanes|e))!==0?0:i}function dn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function _t(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function as(){var t=it.p;return t!==0?t:(t=window.event,t===void 0?32:T0(t.type))}function rs(t,e){var i=it.p;try{return it.p=t,e()}finally{it.p=i}}var ti=Math.random().toString(36).slice(2),Le="__reactFiber$"+ti,qe="__reactProps$"+ti,Pi="__reactContainer$"+ti,gi="__reactEvents$"+ti,Bl="__reactListeners$"+ti,Gc="__reactHandles$"+ti,Nl="__reactResources$"+ti,ar="__reactMarker$"+ti;function os(t){delete t[Le],delete t[qe],delete t[gi],delete t[Bl],delete t[Gc]}function qi(t){var e=t[Le];if(e)return e;for(var i=t.parentNode;i;){if(e=i[Pi]||i[Le]){if(i=e.alternate,e.child!==null||i!==null&&i.child!==null)for(t=u0(t);t!==null;){if(i=t[Le])return i;t=u0(t)}return e}t=i,i=t.parentNode}return null}function xa(t){if(t=t[Le]||t[Pi]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function xi(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(h(33))}function va(t){var e=t[Nl];return e||(e=t[Nl]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Oe(t){t[ar]=!0}var Ul=new Set,Hl={};function Yi(t,e){vi(t,e),vi(t+"Capture",e)}function vi(t,e){for(Hl[t]=e,t=0;t<e.length;t++)Ul.add(e[t])}var rr=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ss={},ls={};function or(t){return nr.call(ls,t)?!0:nr.call(ss,t)?!1:rr.test(t)?ls[t]=!0:(ss[t]=!0,!1)}function Zt(t,e,i){if(or(e))if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var o=e.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+i)}}function se(t,e,i){if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+i)}}function fn(t,e,i,o){if(o===null)t.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(e,i,""+o)}}function He(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Gi(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function us(t,e,i){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var l=o.get,u=o.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(g){i=""+g,u.call(this,g)}}),Object.defineProperty(t,e,{enumerable:o.enumerable}),{getValue:function(){return i},setValue:function(g){i=""+g},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Lt(t){if(!t._valueTracker){var e=Gi(t)?"checked":"value";t._valueTracker=us(t,e,""+t[e])}}function ve(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var i=e.getValue(),o="";return t&&(o=Gi(t)?t.checked?"true":"false":t.value),t=o,t!==i?(e.setValue(t),!0):!1}function ya(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Fr=/[\n"\\]/g;function me(t){return t.replace(Fr,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function cs(t,e,i,o,l,u,g,_){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),e!=null?g==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+He(e)):t.value!==""+He(e)&&(t.value=""+He(e)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),e!=null?ei(t,g,He(e)):i!=null?ei(t,g,He(i)):o!=null&&t.removeAttribute("value"),l==null&&u!=null&&(t.defaultChecked=!!u),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.name=""+He(_):t.removeAttribute("name")}function sr(t,e,i,o,l,u,g,_){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||i!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){Lt(t);return}i=i!=null?""+He(i):"",e=e!=null?""+He(e):i,_||e===t.value||(t.value=e),t.defaultValue=e}o=o??l,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=_?t.checked:!!o,t.defaultChecked=!!o,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Lt(t)}function ei(t,e,i){e==="number"&&ya(t.ownerDocument)===t||t.defaultValue===""+i||(t.defaultValue=""+i)}function de(t,e,i,o){if(t=t.options,e){e={};for(var l=0;l<i.length;l++)e["$"+i[l]]=!0;for(i=0;i<t.length;i++)l=e.hasOwnProperty("$"+t[i].value),t[i].selected!==l&&(t[i].selected=l),l&&o&&(t[i].defaultSelected=!0)}else{for(i=""+He(i),e=null,l=0;l<t.length;l++){if(t[l].value===i){t[l].selected=!0,o&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function yi(t,e,i){if(e!=null&&(e=""+He(e),e!==t.value&&(t.value=e),i==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=i!=null?""+He(i):""}function _a(t,e,i,o){if(e==null){if(o!=null){if(i!=null)throw Error(h(92));if(mt(o)){if(1<o.length)throw Error(h(93));o=o[0]}i=o}i==null&&(i=""),e=i}i=He(e),t.defaultValue=i,o=t.textContent,o===i&&o!==""&&o!==null&&(t.value=o),Lt(t)}function Un(t,e){if(e){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=e;return}}t.textContent=e}var ds=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ba(t,e,i){var o=e.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?o?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":o?t.setProperty(e,i):typeof i!="number"||i===0||ds.has(e)?e==="float"?t.cssFloat=i:t[e]=(""+i).trim():t[e]=i+"px"}function Jr(t,e,i){if(e!=null&&typeof e!="object")throw Error(h(62));if(t=t.style,i!=null){for(var o in i)!i.hasOwnProperty(o)||e!=null&&e.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var l in e)o=e[l],e.hasOwnProperty(l)&&i[l]!==o&&ba(t,l,o)}else for(var u in e)e.hasOwnProperty(u)&&ba(t,u,e[u])}function lr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wr=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fs=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wa(t){return fs.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function hn(){}var to=null;function ur(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sa=null,jt=null;function En(t){var e=xa(t);if(e&&(t=e.stateNode)){var i=t[qe]||null;t:switch(t=e.stateNode,e.type){case"input":if(cs(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),e=i.name,i.type==="radio"&&e!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+me(""+e)+'"][type="radio"]'),e=0;e<i.length;e++){var o=i[e];if(o!==t&&o.form===t.form){var l=o[qe]||null;if(!l)throw Error(h(90));cs(o,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<i.length;e++)o=i[e],o.form===t.form&&ve(o)}break t;case"textarea":yi(t,i.value,i.defaultValue);break t;case"select":e=i.value,e!=null&&de(t,!!i.multiple,e,!1)}}}var ie=!1;function hs(t,e,i){if(ie)return t(e,i);ie=!0;try{var o=t(e);return o}finally{if(ie=!1,(Sa!==null||jt!==null)&&(ku(),Sa&&(e=Sa,t=jt,jt=Sa=null,En(e),t)))for(e=0;e<t.length;e++)En(t[e])}}function Vi(t,e){var i=t.stateNode;if(i===null)return null;var o=i[qe]||null;if(o===null)return null;i=o[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(h(231,e,typeof i));return i}var An=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cr=!1;if(An)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){cr=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{cr=!1}var Hn=null,Xi=null,Se=null;function _i(){if(Se)return Se;var t,e=Xi,i=e.length,o,l="value"in Hn?Hn.value:Hn.textContent,u=l.length;for(t=0;t<i&&e[t]===l[t];t++);var g=i-t;for(o=1;o<=g&&e[i-o]===l[u-o];o++);return Se=l.slice(t,1<o?1-o:void 0)}function dr(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fr(){return!0}function Zl(){return!1}function Ke(t){function e(i,o,l,u,g){this._reactName=i,this._targetInst=l,this.type=o,this.nativeEvent=u,this.target=g,this.currentTarget=null;for(var _ in t)t.hasOwnProperty(_)&&(i=t[_],this[_]=i?i(u):u[_]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?fr:Zl,this.isPropagationStopped=Zl,this}return j(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=fr)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=fr)},persist:function(){},isPersistent:fr}),e}var ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eo=Ke(ni),za=j({},ni,{view:0,detail:0}),Vt=Ke(za),ps,sn,ii,hr=j({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_s,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ii&&(ii&&t.type==="mousemove"?(ps=t.screenX-ii.screenX,sn=t.screenY-ii.screenY):sn=ps=0,ii=t),ps)},movementY:function(t){return"movementY"in t?t.movementY:sn}}),Pl=Ke(hr),ms=j({},hr,{dataTransfer:0}),Vc=Ke(ms),ql=j({},za,{relatedTarget:0}),gs=Ke(ql),Xc=j({},ni,{animationName:0,elapsedTime:0,pseudoElement:0}),xs=Ke(Xc),$c=j({},ni,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Zn=Ke($c),Ic=j({},ni,{data:0}),vs=Ke(Ic),bi={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yl={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ys(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Gl[t])?!!e[t]:!1}function _s(){return ys}var Vl=j({},za,{key:function(t){if(t.key){var e=bi[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=dr(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Yl[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_s,charCode:function(t){return t.type==="keypress"?dr(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dr(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Xl=Ke(Vl),Kc=j({},hr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$l=Ke(Kc),bs=j({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_s}),Qc=Ke(bs),Il=j({},ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kl=Ke(Il),no=j({},hr,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$i=Ke(no),Fc=j({},ni,{newState:0,oldState:0}),pr=Ke(Fc),pn=[9,13,27,32],io=An&&"CompositionEvent"in window,Ta=null;An&&"documentMode"in document&&(Ta=document.documentMode);var Jc=An&&"TextEvent"in window&&!Ta,ao=An&&(!io||Ta&&8<Ta&&11>=Ta),ro=" ",Ql=!1;function Fl(t,e){switch(t){case"keyup":return pn.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ws(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ea=!1;function jn(t,e){switch(t){case"compositionend":return ws(e);case"keypress":return e.which!==32?null:(Ql=!0,ro);case"textInput":return t=e.data,t===ro&&Ql?null:t;default:return null}}function Aa(t,e){if(Ea)return t==="compositionend"||!io&&Fl(t,e)?(t=_i(),Se=Xi=Hn=null,Ea=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ao&&e.locale!=="ko"?null:e.data;default:return null}}var Wc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pn(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Wc[t.type]:e==="textarea"}function Jl(t,e,i,o){Sa?jt?jt.push(o):jt=[o]:Sa=o,e=qu(e,"onChange"),0<e.length&&(i=new eo("onChange","change",null,i,o),t.push({event:i,listeners:e}))}var qn=null,mr=null;function gr(t){Km(t,0)}function xr(t){var e=xi(t);if(ve(e))return t}function vr(t,e){if(t==="change")return e}var Wl=!1;if(An){var Yn;if(An){var Ca="oninput"in document;if(!Ca){var tu=document.createElement("div");tu.setAttribute("oninput","return;"),Ca=typeof tu.oninput=="function"}Yn=Ca}else Yn=!1;Wl=Yn&&(!document.documentMode||9<document.documentMode)}function oo(){qn&&(qn.detachEvent("onpropertychange",eu),mr=qn=null)}function eu(t){if(t.propertyName==="value"&&xr(mr)){var e=[];Jl(e,mr,t,ur(t)),hs(gr,e)}}function ai(t,e,i){t==="focusin"?(oo(),qn=e,mr=i,qn.attachEvent("onpropertychange",eu)):t==="focusout"&&oo()}function td(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xr(mr)}function ja(t,e){if(t==="click")return xr(e)}function ed(t,e){if(t==="input"||t==="change")return xr(e)}function ri(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ye=typeof Object.is=="function"?Object.is:ri;function Ma(t,e){if(Ye(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var i=Object.keys(t),o=Object.keys(e);if(i.length!==o.length)return!1;for(o=0;o<i.length;o++){var l=i[o];if(!nr.call(e,l)||!Ye(t[l],e[l]))return!1}return!0}function so(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function yr(t,e){var i=so(t);t=0;for(var o;i;){if(i.nodeType===3){if(o=t+i.textContent.length,t<=e&&o>=e)return{node:i,offset:e-t};t=o}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=so(i)}}function lo(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?lo(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _r(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=ya(t.document);e instanceof t.HTMLIFrameElement;){try{var i=typeof e.contentWindow.location.href=="string"}catch{i=!1}if(i)t=e.contentWindow;else break;e=ya(t.document)}return e}function wi(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var uo=An&&"documentMode"in document&&11>=document.documentMode,Si=null,co=null,br=null,La=!1;function nu(t,e,i){var o=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;La||Si==null||Si!==ya(o)||(o=Si,"selectionStart"in o&&wi(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),br&&Ma(br,o)||(br=o,o=qu(co,"onSelect"),0<o.length&&(e=new eo("onSelect","select",null,e,i),t.push({event:e,listeners:o}),e.target=Si)))}function zi(t,e){var i={};return i[t.toLowerCase()]=e.toLowerCase(),i["Webkit"+t]="webkit"+e,i["Moz"+t]="moz"+e,i}var Oa={animationend:zi("Animation","AnimationEnd"),animationiteration:zi("Animation","AnimationIteration"),animationstart:zi("Animation","AnimationStart"),transitionrun:zi("Transition","TransitionRun"),transitionstart:zi("Transition","TransitionStart"),transitioncancel:zi("Transition","TransitionCancel"),transitionend:zi("Transition","TransitionEnd")},fo={},iu={};An&&(iu=document.createElement("div").style,"AnimationEvent"in window||(delete Oa.animationend.animation,delete Oa.animationiteration.animation,delete Oa.animationstart.animation),"TransitionEvent"in window||delete Oa.transitionend.transition);function Ge(t){if(fo[t])return fo[t];if(!Oa[t])return t;var e=Oa[t],i;for(i in e)if(e.hasOwnProperty(i)&&i in iu)return fo[t]=e[i];return t}var wr=Ge("animationend"),au=Ge("animationiteration"),Sr=Ge("animationstart"),nd=Ge("transitionrun"),ru=Ge("transitionstart"),id=Ge("transitioncancel"),Ra=Ge("transitionend"),ou=new Map,Ti="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ti.push("scrollEnd");function mn(t,e){ou.set(t,e),Yi(e,[t])}var zr=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},gn=[],nn=0,ho=0;function Tr(){for(var t=nn,e=ho=nn=0;e<t;){var i=gn[e];gn[e++]=null;var o=gn[e];gn[e++]=null;var l=gn[e];gn[e++]=null;var u=gn[e];if(gn[e++]=null,o!==null&&l!==null){var g=o.pending;g===null?l.next=l:(l.next=g.next,g.next=l),o.pending=l}u!==0&&Da(i,l,u)}}function Ei(t,e,i,o){gn[nn++]=t,gn[nn++]=e,gn[nn++]=i,gn[nn++]=o,ho|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Ss(t,e,i,o){return Ei(t,e,i,o),Er(t)}function Gn(t,e){return Ei(t,null,null,e),Er(t)}function Da(t,e,i){t.lanes|=i;var o=t.alternate;o!==null&&(o.lanes|=i);for(var l=!1,u=t.return;u!==null;)u.childLanes|=i,o=u.alternate,o!==null&&(o.childLanes|=i),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(l=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,l&&e!==null&&(l=31-Ie(i),t=u.hiddenUpdates,o=t[l],o===null?t[l]=[e]:o.push(e),e.lane=i|536870912),u):null}function Er(t){if(50<Is)throw Is=0,of=null,Error(h(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ii={};function ad(t,e,i,o){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(t,e,i,o){return new ad(t,e,i,o)}function po(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vn(t,e){var i=t.alternate;return i===null?(i=an(t.tag,e,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=e,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&65011712,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,e=t.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function zs(t,e){t.flags&=65011714;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,e=i.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ar(t,e,i,o,l,u){var g=0;if(o=t,typeof t=="function")po(t)&&(g=1);else if(typeof t=="string")g=uv(t,i,st.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case zt:return t=an(31,i,e,l),t.elementType=zt,t.lanes=u,t;case X:return Ki(i.children,l,u,e);case W:g=8,l|=24;break;case nt:return t=an(12,i,e,l|2),t.elementType=nt,t.lanes=u,t;case wt:return t=an(13,i,e,l),t.elementType=wt,t.lanes=u,t;case vt:return t=an(19,i,e,l),t.elementType=vt,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case tt:g=10;break t;case rt:g=9;break t;case ht:g=11;break t;case ot:g=14;break t;case Ut:g=16,o=null;break t}g=29,i=Error(h(130,t===null?"null":typeof t,"")),o=null}return e=an(g,i,e,l),e.elementType=t,e.type=o,e.lanes=u,e}function Ki(t,e,i,o){return t=an(7,t,o,e),t.lanes=i,t}function mo(t,e,i){return t=an(6,t,null,e),t.lanes=i,t}function Ts(t){var e=an(18,null,null,0);return e.stateNode=t,e}function Es(t,e,i){return e=an(4,t.children!==null?t.children:[],t.key,e),e.lanes=i,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var n=new WeakMap;function r(t,e){if(typeof t=="object"&&t!==null){var i=n.get(t);return i!==void 0?i:(e={value:t,source:e,stack:Bi(e)},n.set(t,e),e)}return{value:t,source:e,stack:Bi(e)}}var s=[],f=0,m=null,v=0,A=[],B=0,Z=null,Q=1,dt="";function bt(t,e){s[f++]=v,s[f++]=m,m=t,v=e}function kt(t,e,i){A[B++]=Q,A[B++]=dt,A[B++]=Z,Z=t;var o=Q;t=dt;var l=32-Ie(o)-1;o&=~(1<<l),i+=1;var u=32-Ie(e)+l;if(30<u){var g=l-l%5;u=(o&(1<<g)-1).toString(32),o>>=g,l-=g,Q=1<<32-Ie(e)+l|i<<l|o,dt=u+t}else Q=1<<u|i<<l|o,dt=t}function Ze(t){t.return!==null&&(bt(t,1),kt(t,1,0))}function ze(t){for(;t===m;)m=s[--f],s[f]=null,v=s[--f],s[f]=null;for(;t===Z;)Z=A[--B],A[B]=null,dt=A[--B],A[B]=null,Q=A[--B],A[B]=null}function ln(t,e){A[B++]=Q,A[B++]=dt,A[B++]=Z,Q=e.id,dt=e.overflow,Z=t}var Jt=null,Wt=null,Pt=!1,Ai=null,xn=!1,go=Error(h(519));function Ci(t){var e=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Cr(r(e,t)),go}function As(t){var e=t.stateNode,i=t.type,o=t.memoizedProps;switch(e[Le]=t,e[qe]=o,i){case"dialog":Yt("cancel",e),Yt("close",e);break;case"iframe":case"object":case"embed":Yt("load",e);break;case"video":case"audio":for(i=0;i<Qs.length;i++)Yt(Qs[i],e);break;case"source":Yt("error",e);break;case"img":case"image":case"link":Yt("error",e),Yt("load",e);break;case"details":Yt("toggle",e);break;case"input":Yt("invalid",e),sr(e,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Yt("invalid",e);break;case"textarea":Yt("invalid",e),_a(e,o.value,o.defaultValue,o.children)}i=o.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||e.textContent===""+i||o.suppressHydrationWarning===!0||Wm(e.textContent,i)?(o.popover!=null&&(Yt("beforetoggle",e),Yt("toggle",e)),o.onScroll!=null&&Yt("scroll",e),o.onScrollEnd!=null&&Yt("scrollend",e),o.onClick!=null&&(e.onclick=hn),e=!0):e=!1,e||Ci(t,!0)}function we(t){for(Jt=t.return;Jt;)switch(Jt.tag){case 5:case 31:case 13:xn=!1;return;case 27:case 3:xn=!0;return;default:Jt=Jt.return}}function oi(t){if(t!==Jt)return!1;if(!Pt)return we(t),Pt=!0,!1;var e=t.tag,i;if((i=e!==3&&e!==27)&&((i=e===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||bf(t.type,t.memoizedProps)),i=!i),i&&Wt&&Ci(t),we(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(h(317));Wt=l0(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(h(317));Wt=l0(t)}else e===27?(e=Wt,Ia(t.type)?(t=Ef,Ef=null,Wt=t):Wt=e):Wt=Jt?$n(t.stateNode.nextSibling):null;return!0}function Qi(){Wt=Jt=null,Pt=!1}function Cs(){var t=Ai;return t!==null&&(bn===null?bn=t:bn.push.apply(bn,t),Ai=null),t}function Cr(t){Ai===null?Ai=[t]:Ai.push(t)}var jr=M(null),ji=null,si=null;function ka(t,e,i){et(jr,e._currentValue),e._currentValue=i}function Fi(t){t._currentValue=jr.current,V(jr)}function rd(t,e,i){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===i)break;t=t.return}}function od(t,e,i,o){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var u=l.dependencies;if(u!==null){var g=l.child;u=u.firstContext;t:for(;u!==null;){var _=u;u=l;for(var C=0;C<e.length;C++)if(_.context===e[C]){u.lanes|=i,_=u.alternate,_!==null&&(_.lanes|=i),rd(u.return,i,t),o||(g=null);break t}u=_.next}}else if(l.tag===18){if(g=l.return,g===null)throw Error(h(341));g.lanes|=i,u=g.alternate,u!==null&&(u.lanes|=i),rd(g,i,t),g=null}else g=l.child;if(g!==null)g.return=l;else for(g=l;g!==null;){if(g===t){g=null;break}if(l=g.sibling,l!==null){l.return=g.return,g=l;break}g=g.return}l=g}}function xo(t,e,i,o){t=null;for(var l=e,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var g=l.alternate;if(g===null)throw Error(h(387));if(g=g.memoizedProps,g!==null){var _=l.type;Ye(l.pendingProps.value,g.value)||(t!==null?t.push(_):t=[_])}}else if(l===Ct.current){if(g=l.alternate,g===null)throw Error(h(387));g.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(el):t=[el])}l=l.return}t!==null&&od(e,t,i,o),e.flags|=262144}function su(t){for(t=t.firstContext;t!==null;){if(!Ye(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Mr(t){ji=t,si=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Qe(t){return Uh(ji,t)}function lu(t,e){return ji===null&&Mr(t),Uh(t,e)}function Uh(t,e){var i=e._currentValue;if(e={context:e,memoizedValue:i,next:null},si===null){if(t===null)throw Error(h(308));si=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else si=si.next=e;return i}var rx=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(i,o){t.push(o)}};this.abort=function(){e.aborted=!0,t.forEach(function(i){return i()})}},ox=a.unstable_scheduleCallback,sx=a.unstable_NormalPriority,Re={$$typeof:tt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sd(){return{controller:new rx,data:new Map,refCount:0}}function js(t){t.refCount--,t.refCount===0&&ox(sx,function(){t.controller.abort()})}var Ms=null,ld=0,vo=0,yo=null;function lx(t,e){if(Ms===null){var i=Ms=[];ld=0,vo=ff(),yo={status:"pending",value:void 0,then:function(o){i.push(o)}}}return ld++,e.then(Hh,Hh),e}function Hh(){if(--ld===0&&Ms!==null){yo!==null&&(yo.status="fulfilled");var t=Ms;Ms=null,vo=0,yo=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function ux(t,e){var i=[],o={status:"pending",value:null,reason:null,then:function(l){i.push(l)}};return t.then(function(){o.status="fulfilled",o.value=e;for(var l=0;l<i.length;l++)(0,i[l])(e)},function(l){for(o.status="rejected",o.reason=l,l=0;l<i.length;l++)(0,i[l])(void 0)}),o}var Zh=N.S;N.S=function(t,e){Sm=$e(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&lx(t,e),Zh!==null&&Zh(t,e)};var Lr=M(null);function ud(){var t=Lr.current;return t!==null?t:fe.pooledCache}function uu(t,e){e===null?et(Lr,Lr.current):et(Lr,e.pool)}function Ph(){var t=ud();return t===null?null:{parent:Re._currentValue,pool:t}}var _o=Error(h(460)),cd=Error(h(474)),cu=Error(h(542)),du={then:function(){}};function qh(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Yh(t,e,i){switch(i=t[i],i===void 0?t.push(e):i!==e&&(e.then(hn,hn),e=i),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Vh(t),t;default:if(typeof e.status=="string")e.then(hn,hn);else{if(t=fe,t!==null&&100<t.shellSuspendCounter)throw Error(h(482));t=e,t.status="pending",t.then(function(o){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=o}},function(o){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=o}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Vh(t),t}throw Rr=e,_o}}function Or(t){try{var e=t._init;return e(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Rr=i,_o):i}}var Rr=null;function Gh(){if(Rr===null)throw Error(h(459));var t=Rr;return Rr=null,t}function Vh(t){if(t===_o||t===cu)throw Error(h(483))}var bo=null,Ls=0;function fu(t){var e=Ls;return Ls+=1,bo===null&&(bo=[]),Yh(bo,t,e)}function Os(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function hu(t,e){throw e.$$typeof===R?Error(h(525)):(t=Object.prototype.toString.call(e),Error(h(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Xh(t){function e(k,D){if(t){var U=k.deletions;U===null?(k.deletions=[D],k.flags|=16):U.push(D)}}function i(k,D){if(!t)return null;for(;D!==null;)e(k,D),D=D.sibling;return null}function o(k){for(var D=new Map;k!==null;)k.key!==null?D.set(k.key,k):D.set(k.index,k),k=k.sibling;return D}function l(k,D){return k=Vn(k,D),k.index=0,k.sibling=null,k}function u(k,D,U){return k.index=U,t?(U=k.alternate,U!==null?(U=U.index,U<D?(k.flags|=67108866,D):U):(k.flags|=67108866,D)):(k.flags|=1048576,D)}function g(k){return t&&k.alternate===null&&(k.flags|=67108866),k}function _(k,D,U,K){return D===null||D.tag!==6?(D=mo(U,k.mode,K),D.return=k,D):(D=l(D,U),D.return=k,D)}function C(k,D,U,K){var St=U.type;return St===X?I(k,D,U.props.children,K,U.key):D!==null&&(D.elementType===St||typeof St=="object"&&St!==null&&St.$$typeof===Ut&&Or(St)===D.type)?(D=l(D,U.props),Os(D,U),D.return=k,D):(D=Ar(U.type,U.key,U.props,null,k.mode,K),Os(D,U),D.return=k,D)}function H(k,D,U,K){return D===null||D.tag!==4||D.stateNode.containerInfo!==U.containerInfo||D.stateNode.implementation!==U.implementation?(D=Es(U,k.mode,K),D.return=k,D):(D=l(D,U.children||[]),D.return=k,D)}function I(k,D,U,K,St){return D===null||D.tag!==7?(D=Ki(U,k.mode,K,St),D.return=k,D):(D=l(D,U),D.return=k,D)}function F(k,D,U){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=mo(""+D,k.mode,U),D.return=k,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case G:return U=Ar(D.type,D.key,D.props,null,k.mode,U),Os(U,D),U.return=k,U;case q:return D=Es(D,k.mode,U),D.return=k,D;case Ut:return D=Or(D),F(k,D,U)}if(mt(D)||Kt(D))return D=Ki(D,k.mode,U,null),D.return=k,D;if(typeof D.then=="function")return F(k,fu(D),U);if(D.$$typeof===tt)return F(k,lu(k,D),U);hu(k,D)}return null}function P(k,D,U,K){var St=D!==null?D.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return St!==null?null:_(k,D,""+U,K);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case G:return U.key===St?C(k,D,U,K):null;case q:return U.key===St?H(k,D,U,K):null;case Ut:return U=Or(U),P(k,D,U,K)}if(mt(U)||Kt(U))return St!==null?null:I(k,D,U,K,null);if(typeof U.then=="function")return P(k,D,fu(U),K);if(U.$$typeof===tt)return P(k,D,lu(k,U),K);hu(k,U)}return null}function Y(k,D,U,K,St){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return k=k.get(U)||null,_(D,k,""+K,St);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case G:return k=k.get(K.key===null?U:K.key)||null,C(D,k,K,St);case q:return k=k.get(K.key===null?U:K.key)||null,H(D,k,K,St);case Ut:return K=Or(K),Y(k,D,U,K,St)}if(mt(K)||Kt(K))return k=k.get(U)||null,I(D,k,K,St,null);if(typeof K.then=="function")return Y(k,D,U,fu(K),St);if(K.$$typeof===tt)return Y(k,D,U,lu(D,K),St);hu(D,K)}return null}function gt(k,D,U,K){for(var St=null,te=null,yt=D,Bt=D=0,$t=null;yt!==null&&Bt<U.length;Bt++){yt.index>Bt?($t=yt,yt=null):$t=yt.sibling;var ee=P(k,yt,U[Bt],K);if(ee===null){yt===null&&(yt=$t);break}t&&yt&&ee.alternate===null&&e(k,yt),D=u(ee,D,Bt),te===null?St=ee:te.sibling=ee,te=ee,yt=$t}if(Bt===U.length)return i(k,yt),Pt&&bt(k,Bt),St;if(yt===null){for(;Bt<U.length;Bt++)yt=F(k,U[Bt],K),yt!==null&&(D=u(yt,D,Bt),te===null?St=yt:te.sibling=yt,te=yt);return Pt&&bt(k,Bt),St}for(yt=o(yt);Bt<U.length;Bt++)$t=Y(yt,k,Bt,U[Bt],K),$t!==null&&(t&&$t.alternate!==null&&yt.delete($t.key===null?Bt:$t.key),D=u($t,D,Bt),te===null?St=$t:te.sibling=$t,te=$t);return t&&yt.forEach(function(Wa){return e(k,Wa)}),Pt&&bt(k,Bt),St}function At(k,D,U,K){if(U==null)throw Error(h(151));for(var St=null,te=null,yt=D,Bt=D=0,$t=null,ee=U.next();yt!==null&&!ee.done;Bt++,ee=U.next()){yt.index>Bt?($t=yt,yt=null):$t=yt.sibling;var Wa=P(k,yt,ee.value,K);if(Wa===null){yt===null&&(yt=$t);break}t&&yt&&Wa.alternate===null&&e(k,yt),D=u(Wa,D,Bt),te===null?St=Wa:te.sibling=Wa,te=Wa,yt=$t}if(ee.done)return i(k,yt),Pt&&bt(k,Bt),St;if(yt===null){for(;!ee.done;Bt++,ee=U.next())ee=F(k,ee.value,K),ee!==null&&(D=u(ee,D,Bt),te===null?St=ee:te.sibling=ee,te=ee);return Pt&&bt(k,Bt),St}for(yt=o(yt);!ee.done;Bt++,ee=U.next())ee=Y(yt,k,Bt,ee.value,K),ee!==null&&(t&&ee.alternate!==null&&yt.delete(ee.key===null?Bt:ee.key),D=u(ee,D,Bt),te===null?St=ee:te.sibling=ee,te=ee);return t&&yt.forEach(function(_v){return e(k,_v)}),Pt&&bt(k,Bt),St}function ce(k,D,U,K){if(typeof U=="object"&&U!==null&&U.type===X&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case G:t:{for(var St=U.key;D!==null;){if(D.key===St){if(St=U.type,St===X){if(D.tag===7){i(k,D.sibling),K=l(D,U.props.children),K.return=k,k=K;break t}}else if(D.elementType===St||typeof St=="object"&&St!==null&&St.$$typeof===Ut&&Or(St)===D.type){i(k,D.sibling),K=l(D,U.props),Os(K,U),K.return=k,k=K;break t}i(k,D);break}else e(k,D);D=D.sibling}U.type===X?(K=Ki(U.props.children,k.mode,K,U.key),K.return=k,k=K):(K=Ar(U.type,U.key,U.props,null,k.mode,K),Os(K,U),K.return=k,k=K)}return g(k);case q:t:{for(St=U.key;D!==null;){if(D.key===St)if(D.tag===4&&D.stateNode.containerInfo===U.containerInfo&&D.stateNode.implementation===U.implementation){i(k,D.sibling),K=l(D,U.children||[]),K.return=k,k=K;break t}else{i(k,D);break}else e(k,D);D=D.sibling}K=Es(U,k.mode,K),K.return=k,k=K}return g(k);case Ut:return U=Or(U),ce(k,D,U,K)}if(mt(U))return gt(k,D,U,K);if(Kt(U)){if(St=Kt(U),typeof St!="function")throw Error(h(150));return U=St.call(U),At(k,D,U,K)}if(typeof U.then=="function")return ce(k,D,fu(U),K);if(U.$$typeof===tt)return ce(k,D,lu(k,U),K);hu(k,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,D!==null&&D.tag===6?(i(k,D.sibling),K=l(D,U),K.return=k,k=K):(i(k,D),K=mo(U,k.mode,K),K.return=k,k=K),g(k)):i(k,D)}return function(k,D,U,K){try{Ls=0;var St=ce(k,D,U,K);return bo=null,St}catch(yt){if(yt===_o||yt===cu)throw yt;var te=an(29,yt,null,k.mode);return te.lanes=K,te.return=k,te}finally{}}}var Dr=Xh(!0),$h=Xh(!1),Ba=!1;function dd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fd(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Na(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ua(t,e,i){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(ne&2)!==0){var l=o.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),o.pending=e,e=Er(t),Da(t,null,i),e}return Ei(t,o,e,i),Er(t)}function Rs(t,e,i){if(e=e.updateQueue,e!==null&&(e=e.shared,(i&4194048)!==0)){var o=e.lanes;o&=t.pendingLanes,i|=o,e.lanes=i,Dl(t,i)}}function hd(t,e){var i=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,i===o)){var l=null,u=null;if(i=i.firstBaseUpdate,i!==null){do{var g={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};u===null?l=u=g:u=u.next=g,i=i.next}while(i!==null);u===null?l=u=e:u=u.next=e}else l=u=e;i={baseState:o.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:o.shared,callbacks:o.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=e:t.next=e,i.lastBaseUpdate=e}var pd=!1;function Ds(){if(pd){var t=yo;if(t!==null)throw t}}function ks(t,e,i,o){pd=!1;var l=t.updateQueue;Ba=!1;var u=l.firstBaseUpdate,g=l.lastBaseUpdate,_=l.shared.pending;if(_!==null){l.shared.pending=null;var C=_,H=C.next;C.next=null,g===null?u=H:g.next=H,g=C;var I=t.alternate;I!==null&&(I=I.updateQueue,_=I.lastBaseUpdate,_!==g&&(_===null?I.firstBaseUpdate=H:_.next=H,I.lastBaseUpdate=C))}if(u!==null){var F=l.baseState;g=0,I=H=C=null,_=u;do{var P=_.lane&-536870913,Y=P!==_.lane;if(Y?(Xt&P)===P:(o&P)===P){P!==0&&P===vo&&(pd=!0),I!==null&&(I=I.next={lane:0,tag:_.tag,payload:_.payload,callback:null,next:null});t:{var gt=t,At=_;P=e;var ce=i;switch(At.tag){case 1:if(gt=At.payload,typeof gt=="function"){F=gt.call(ce,F,P);break t}F=gt;break t;case 3:gt.flags=gt.flags&-65537|128;case 0:if(gt=At.payload,P=typeof gt=="function"?gt.call(ce,F,P):gt,P==null)break t;F=j({},F,P);break t;case 2:Ba=!0}}P=_.callback,P!==null&&(t.flags|=64,Y&&(t.flags|=8192),Y=l.callbacks,Y===null?l.callbacks=[P]:Y.push(P))}else Y={lane:P,tag:_.tag,payload:_.payload,callback:_.callback,next:null},I===null?(H=I=Y,C=F):I=I.next=Y,g|=P;if(_=_.next,_===null){if(_=l.shared.pending,_===null)break;Y=_,_=Y.next,Y.next=null,l.lastBaseUpdate=Y,l.shared.pending=null}}while(!0);I===null&&(C=F),l.baseState=C,l.firstBaseUpdate=H,l.lastBaseUpdate=I,u===null&&(l.shared.lanes=0),Ya|=g,t.lanes=g,t.memoizedState=F}}function Ih(t,e){if(typeof t!="function")throw Error(h(191,t));t.call(e)}function Kh(t,e){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)Ih(i[t],e)}var wo=M(null),pu=M(0);function Qh(t,e){t=oa,et(pu,t),et(wo,e),oa=t|e.baseLanes}function md(){et(pu,oa),et(wo,wo.current)}function gd(){oa=pu.current,V(wo),V(pu)}var Mn=M(null),Xn=null;function Ha(t){var e=t.alternate;et(Ae,Ae.current&1),et(Mn,t),Xn===null&&(e===null||wo.current!==null||e.memoizedState!==null)&&(Xn=t)}function xd(t){et(Ae,Ae.current),et(Mn,t),Xn===null&&(Xn=t)}function Fh(t){t.tag===22?(et(Ae,Ae.current),et(Mn,t),Xn===null&&(Xn=t)):Za()}function Za(){et(Ae,Ae.current),et(Mn,Mn.current)}function Ln(t){V(Mn),Xn===t&&(Xn=null),V(Ae)}var Ae=M(0);function mu(t){for(var e=t;e!==null;){if(e.tag===13){var i=e.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||zf(i)||Tf(i)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ji=0,Dt=null,le=null,De=null,gu=!1,So=!1,kr=!1,xu=0,Bs=0,zo=null,cx=0;function Te(){throw Error(h(321))}function vd(t,e){if(e===null)return!1;for(var i=0;i<e.length&&i<t.length;i++)if(!Ye(t[i],e[i]))return!1;return!0}function yd(t,e,i,o,l,u){return Ji=u,Dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,N.H=t===null||t.memoizedState===null?Dp:Dd,kr=!1,u=i(o,l),kr=!1,So&&(u=Wh(e,i,o,l)),Jh(t),u}function Jh(t){N.H=Hs;var e=le!==null&&le.next!==null;if(Ji=0,De=le=Dt=null,gu=!1,Bs=0,zo=null,e)throw Error(h(300));t===null||ke||(t=t.dependencies,t!==null&&su(t)&&(ke=!0))}function Wh(t,e,i,o){Dt=t;var l=0;do{if(So&&(zo=null),Bs=0,So=!1,25<=l)throw Error(h(301));if(l+=1,De=le=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}N.H=kp,u=e(i,o)}while(So);return u}function dx(){var t=N.H,e=t.useState()[0];return e=typeof e.then=="function"?Ns(e):e,t=t.useState()[0],(le!==null?le.memoizedState:null)!==t&&(Dt.flags|=1024),e}function _d(){var t=xu!==0;return xu=0,t}function bd(t,e,i){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i}function wd(t){if(gu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}gu=!1}Ji=0,De=le=Dt=null,So=!1,Bs=xu=0,zo=null}function un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?Dt.memoizedState=De=t:De=De.next=t,De}function Ce(){if(le===null){var t=Dt.alternate;t=t!==null?t.memoizedState:null}else t=le.next;var e=De===null?Dt.memoizedState:De.next;if(e!==null)De=e,le=t;else{if(t===null)throw Dt.alternate===null?Error(h(467)):Error(h(310));le=t,t={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},De===null?Dt.memoizedState=De=t:De=De.next=t}return De}function vu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ns(t){var e=Bs;return Bs+=1,zo===null&&(zo=[]),t=Yh(zo,t,e),e=Dt,(De===null?e.memoizedState:De.next)===null&&(e=e.alternate,N.H=e===null||e.memoizedState===null?Dp:Dd),t}function yu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ns(t);if(t.$$typeof===tt)return Qe(t)}throw Error(h(438,String(t)))}function Sd(t){var e=null,i=Dt.updateQueue;if(i!==null&&(e=i.memoCache),e==null){var o=Dt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(e={data:o.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),i===null&&(i=vu(),Dt.updateQueue=i),i.memoCache=e,i=e.data[e.index],i===void 0)for(i=e.data[e.index]=Array(t),o=0;o<t;o++)i[o]=Rt;return e.index++,i}function Wi(t,e){return typeof e=="function"?e(t):e}function _u(t){var e=Ce();return zd(e,le,t)}function zd(t,e,i){var o=t.queue;if(o===null)throw Error(h(311));o.lastRenderedReducer=i;var l=t.baseQueue,u=o.pending;if(u!==null){if(l!==null){var g=l.next;l.next=u.next,u.next=g}e.baseQueue=l=u,o.pending=null}if(u=t.baseState,l===null)t.memoizedState=u;else{e=l.next;var _=g=null,C=null,H=e,I=!1;do{var F=H.lane&-536870913;if(F!==H.lane?(Xt&F)===F:(Ji&F)===F){var P=H.revertLane;if(P===0)C!==null&&(C=C.next={lane:0,revertLane:0,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),F===vo&&(I=!0);else if((Ji&P)===P){H=H.next,P===vo&&(I=!0);continue}else F={lane:0,revertLane:H.revertLane,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},C===null?(_=C=F,g=u):C=C.next=F,Dt.lanes|=P,Ya|=P;F=H.action,kr&&i(u,F),u=H.hasEagerState?H.eagerState:i(u,F)}else P={lane:F,revertLane:H.revertLane,gesture:H.gesture,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},C===null?(_=C=P,g=u):C=C.next=P,Dt.lanes|=F,Ya|=F;H=H.next}while(H!==null&&H!==e);if(C===null?g=u:C.next=_,!Ye(u,t.memoizedState)&&(ke=!0,I&&(i=yo,i!==null)))throw i;t.memoizedState=u,t.baseState=g,t.baseQueue=C,o.lastRenderedState=u}return l===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Td(t){var e=Ce(),i=e.queue;if(i===null)throw Error(h(311));i.lastRenderedReducer=t;var o=i.dispatch,l=i.pending,u=e.memoizedState;if(l!==null){i.pending=null;var g=l=l.next;do u=t(u,g.action),g=g.next;while(g!==l);Ye(u,e.memoizedState)||(ke=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),i.lastRenderedState=u}return[u,o]}function tp(t,e,i){var o=Dt,l=Ce(),u=Pt;if(u){if(i===void 0)throw Error(h(407));i=i()}else i=e();var g=!Ye((le||l).memoizedState,i);if(g&&(l.memoizedState=i,ke=!0),l=l.queue,Cd(ip.bind(null,o,l,t),[t]),l.getSnapshot!==e||g||De!==null&&De.memoizedState.tag&1){if(o.flags|=2048,To(9,{destroy:void 0},np.bind(null,o,l,i,e),null),fe===null)throw Error(h(349));u||(Ji&127)!==0||ep(o,e,i)}return i}function ep(t,e,i){t.flags|=16384,t={getSnapshot:e,value:i},e=Dt.updateQueue,e===null?(e=vu(),Dt.updateQueue=e,e.stores=[t]):(i=e.stores,i===null?e.stores=[t]:i.push(t))}function np(t,e,i,o){e.value=i,e.getSnapshot=o,ap(e)&&rp(t)}function ip(t,e,i){return i(function(){ap(e)&&rp(t)})}function ap(t){var e=t.getSnapshot;t=t.value;try{var i=e();return!Ye(t,i)}catch{return!0}}function rp(t){var e=Gn(t,2);e!==null&&wn(e,t,2)}function Ed(t){var e=un();if(typeof t=="function"){var i=t;if(t=i(),kr){Tn(!0);try{i()}finally{Tn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:t},e}function op(t,e,i,o){return t.baseState=i,zd(t,le,typeof o=="function"?o:Wi)}function fx(t,e,i,o,l){if(Su(t))throw Error(h(485));if(t=e.action,t!==null){var u={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){u.listeners.push(g)}};N.T!==null?i(!0):u.isTransition=!1,o(u),i=e.pending,i===null?(u.next=e.pending=u,sp(e,u)):(u.next=i.next,e.pending=i.next=u)}}function sp(t,e){var i=e.action,o=e.payload,l=t.state;if(e.isTransition){var u=N.T,g={};N.T=g;try{var _=i(l,o),C=N.S;C!==null&&C(g,_),lp(t,e,_)}catch(H){Ad(t,e,H)}finally{u!==null&&g.types!==null&&(u.types=g.types),N.T=u}}else try{u=i(l,o),lp(t,e,u)}catch(H){Ad(t,e,H)}}function lp(t,e,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(o){up(t,e,o)},function(o){return Ad(t,e,o)}):up(t,e,i)}function up(t,e,i){e.status="fulfilled",e.value=i,cp(e),t.state=i,e=t.pending,e!==null&&(i=e.next,i===e?t.pending=null:(i=i.next,e.next=i,sp(t,i)))}function Ad(t,e,i){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do e.status="rejected",e.reason=i,cp(e),e=e.next;while(e!==o)}t.action=null}function cp(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function dp(t,e){return e}function fp(t,e){if(Pt){var i=fe.formState;if(i!==null){t:{var o=Dt;if(Pt){if(Wt){e:{for(var l=Wt,u=xn;l.nodeType!==8;){if(!u){l=null;break e}if(l=$n(l.nextSibling),l===null){l=null;break e}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){Wt=$n(l.nextSibling),o=l.data==="F!";break t}}Ci(o)}o=!1}o&&(e=i[0])}}return i=un(),i.memoizedState=i.baseState=e,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dp,lastRenderedState:e},i.queue=o,i=Lp.bind(null,Dt,o),o.dispatch=i,o=Ed(!1),u=Rd.bind(null,Dt,!1,o.queue),o=un(),l={state:e,dispatch:null,action:t,pending:null},o.queue=l,i=fx.bind(null,Dt,l,u,i),l.dispatch=i,o.memoizedState=t,[e,i,!1]}function hp(t){var e=Ce();return pp(e,le,t)}function pp(t,e,i){if(e=zd(t,e,dp)[0],t=_u(Wi)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var o=Ns(e)}catch(g){throw g===_o?cu:g}else o=e;e=Ce();var l=e.queue,u=l.dispatch;return i!==e.memoizedState&&(Dt.flags|=2048,To(9,{destroy:void 0},hx.bind(null,l,i),null)),[o,u,t]}function hx(t,e){t.action=e}function mp(t){var e=Ce(),i=le;if(i!==null)return pp(e,i,t);Ce(),e=e.memoizedState,i=Ce();var o=i.queue.dispatch;return i.memoizedState=t,[e,o,!1]}function To(t,e,i,o){return t={tag:t,create:i,deps:o,inst:e,next:null},e=Dt.updateQueue,e===null&&(e=vu(),Dt.updateQueue=e),i=e.lastEffect,i===null?e.lastEffect=t.next=t:(o=i.next,i.next=t,t.next=o,e.lastEffect=t),t}function gp(){return Ce().memoizedState}function bu(t,e,i,o){var l=un();Dt.flags|=t,l.memoizedState=To(1|e,{destroy:void 0},i,o===void 0?null:o)}function wu(t,e,i,o){var l=Ce();o=o===void 0?null:o;var u=l.memoizedState.inst;le!==null&&o!==null&&vd(o,le.memoizedState.deps)?l.memoizedState=To(e,u,i,o):(Dt.flags|=t,l.memoizedState=To(1|e,u,i,o))}function xp(t,e){bu(8390656,8,t,e)}function Cd(t,e){wu(2048,8,t,e)}function px(t){Dt.flags|=4;var e=Dt.updateQueue;if(e===null)e=vu(),Dt.updateQueue=e,e.events=[t];else{var i=e.events;i===null?e.events=[t]:i.push(t)}}function vp(t){var e=Ce().memoizedState;return px({ref:e,nextImpl:t}),function(){if((ne&2)!==0)throw Error(h(440));return e.impl.apply(void 0,arguments)}}function yp(t,e){return wu(4,2,t,e)}function _p(t,e){return wu(4,4,t,e)}function bp(t,e){if(typeof e=="function"){t=t();var i=e(t);return function(){typeof i=="function"?i():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function wp(t,e,i){i=i!=null?i.concat([t]):null,wu(4,4,bp.bind(null,e,t),i)}function jd(){}function Sp(t,e){var i=Ce();e=e===void 0?null:e;var o=i.memoizedState;return e!==null&&vd(e,o[1])?o[0]:(i.memoizedState=[t,e],t)}function zp(t,e){var i=Ce();e=e===void 0?null:e;var o=i.memoizedState;if(e!==null&&vd(e,o[1]))return o[0];if(o=t(),kr){Tn(!0);try{t()}finally{Tn(!1)}}return i.memoizedState=[o,e],o}function Md(t,e,i){return i===void 0||(Ji&1073741824)!==0&&(Xt&261930)===0?t.memoizedState=e:(t.memoizedState=i,t=Tm(),Dt.lanes|=t,Ya|=t,i)}function Tp(t,e,i,o){return Ye(i,e)?i:wo.current!==null?(t=Md(t,i,o),Ye(t,e)||(ke=!0),t):(Ji&42)===0||(Ji&1073741824)!==0&&(Xt&261930)===0?(ke=!0,t.memoizedState=i):(t=Tm(),Dt.lanes|=t,Ya|=t,e)}function Ep(t,e,i,o,l){var u=it.p;it.p=u!==0&&8>u?u:8;var g=N.T,_={};N.T=_,Rd(t,!1,e,i);try{var C=l(),H=N.S;if(H!==null&&H(_,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var I=ux(C,o);Us(t,e,I,Dn(t))}else Us(t,e,o,Dn(t))}catch(F){Us(t,e,{then:function(){},status:"rejected",reason:F},Dn())}finally{it.p=u,g!==null&&_.types!==null&&(g.types=_.types),N.T=g}}function mx(){}function Ld(t,e,i,o){if(t.tag!==5)throw Error(h(476));var l=Ap(t).queue;Ep(t,l,e,at,i===null?mx:function(){return Cp(t),i(o)})}function Ap(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:at,baseState:at,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:at},next:null};var i={};return e.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:i},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Cp(t){var e=Ap(t);e.next===null&&(e=t.alternate.memoizedState),Us(t,e.next.queue,{},Dn())}function Od(){return Qe(el)}function jp(){return Ce().memoizedState}function Mp(){return Ce().memoizedState}function gx(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var i=Dn();t=Na(i);var o=Ua(e,t,i);o!==null&&(wn(o,e,i),Rs(o,e,i)),e={cache:sd()},t.payload=e;return}e=e.return}}function xx(t,e,i){var o=Dn();i={lane:o,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Su(t)?Op(e,i):(i=Ss(t,e,i,o),i!==null&&(wn(i,t,o),Rp(i,e,o)))}function Lp(t,e,i){var o=Dn();Us(t,e,i,o)}function Us(t,e,i,o){var l={lane:o,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(Su(t))Op(e,l);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var g=e.lastRenderedState,_=u(g,i);if(l.hasEagerState=!0,l.eagerState=_,Ye(_,g))return Ei(t,e,l,0),fe===null&&Tr(),!1}catch{}finally{}if(i=Ss(t,e,l,o),i!==null)return wn(i,t,o),Rp(i,e,o),!0}return!1}function Rd(t,e,i,o){if(o={lane:2,revertLane:ff(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Su(t)){if(e)throw Error(h(479))}else e=Ss(t,i,o,2),e!==null&&wn(e,t,2)}function Su(t){var e=t.alternate;return t===Dt||e!==null&&e===Dt}function Op(t,e){So=gu=!0;var i=t.pending;i===null?e.next=e:(e.next=i.next,i.next=e),t.pending=e}function Rp(t,e,i){if((i&4194048)!==0){var o=e.lanes;o&=t.pendingLanes,i|=o,e.lanes=i,Dl(t,i)}}var Hs={readContext:Qe,use:yu,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useLayoutEffect:Te,useInsertionEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useSyncExternalStore:Te,useId:Te,useHostTransitionStatus:Te,useFormState:Te,useActionState:Te,useOptimistic:Te,useMemoCache:Te,useCacheRefresh:Te};Hs.useEffectEvent=Te;var Dp={readContext:Qe,use:yu,useCallback:function(t,e){return un().memoizedState=[t,e===void 0?null:e],t},useContext:Qe,useEffect:xp,useImperativeHandle:function(t,e,i){i=i!=null?i.concat([t]):null,bu(4194308,4,bp.bind(null,e,t),i)},useLayoutEffect:function(t,e){return bu(4194308,4,t,e)},useInsertionEffect:function(t,e){bu(4,2,t,e)},useMemo:function(t,e){var i=un();e=e===void 0?null:e;var o=t();if(kr){Tn(!0);try{t()}finally{Tn(!1)}}return i.memoizedState=[o,e],o},useReducer:function(t,e,i){var o=un();if(i!==void 0){var l=i(e);if(kr){Tn(!0);try{i(e)}finally{Tn(!1)}}}else l=e;return o.memoizedState=o.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},o.queue=t,t=t.dispatch=xx.bind(null,Dt,t),[o.memoizedState,t]},useRef:function(t){var e=un();return t={current:t},e.memoizedState=t},useState:function(t){t=Ed(t);var e=t.queue,i=Lp.bind(null,Dt,e);return e.dispatch=i,[t.memoizedState,i]},useDebugValue:jd,useDeferredValue:function(t,e){var i=un();return Md(i,t,e)},useTransition:function(){var t=Ed(!1);return t=Ep.bind(null,Dt,t.queue,!0,!1),un().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,i){var o=Dt,l=un();if(Pt){if(i===void 0)throw Error(h(407));i=i()}else{if(i=e(),fe===null)throw Error(h(349));(Xt&127)!==0||ep(o,e,i)}l.memoizedState=i;var u={value:i,getSnapshot:e};return l.queue=u,xp(ip.bind(null,o,u,t),[t]),o.flags|=2048,To(9,{destroy:void 0},np.bind(null,o,u,i,e),null),i},useId:function(){var t=un(),e=fe.identifierPrefix;if(Pt){var i=dt,o=Q;i=(o&~(1<<32-Ie(o)-1)).toString(32)+i,e="_"+e+"R_"+i,i=xu++,0<i&&(e+="H"+i.toString(32)),e+="_"}else i=cx++,e="_"+e+"r_"+i.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Od,useFormState:fp,useActionState:fp,useOptimistic:function(t){var e=un();e.memoizedState=e.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=i,e=Rd.bind(null,Dt,!0,i),i.dispatch=e,[t,e]},useMemoCache:Sd,useCacheRefresh:function(){return un().memoizedState=gx.bind(null,Dt)},useEffectEvent:function(t){var e=un(),i={impl:t};return e.memoizedState=i,function(){if((ne&2)!==0)throw Error(h(440));return i.impl.apply(void 0,arguments)}}},Dd={readContext:Qe,use:yu,useCallback:Sp,useContext:Qe,useEffect:Cd,useImperativeHandle:wp,useInsertionEffect:yp,useLayoutEffect:_p,useMemo:zp,useReducer:_u,useRef:gp,useState:function(){return _u(Wi)},useDebugValue:jd,useDeferredValue:function(t,e){var i=Ce();return Tp(i,le.memoizedState,t,e)},useTransition:function(){var t=_u(Wi)[0],e=Ce().memoizedState;return[typeof t=="boolean"?t:Ns(t),e]},useSyncExternalStore:tp,useId:jp,useHostTransitionStatus:Od,useFormState:hp,useActionState:hp,useOptimistic:function(t,e){var i=Ce();return op(i,le,t,e)},useMemoCache:Sd,useCacheRefresh:Mp};Dd.useEffectEvent=vp;var kp={readContext:Qe,use:yu,useCallback:Sp,useContext:Qe,useEffect:Cd,useImperativeHandle:wp,useInsertionEffect:yp,useLayoutEffect:_p,useMemo:zp,useReducer:Td,useRef:gp,useState:function(){return Td(Wi)},useDebugValue:jd,useDeferredValue:function(t,e){var i=Ce();return le===null?Md(i,t,e):Tp(i,le.memoizedState,t,e)},useTransition:function(){var t=Td(Wi)[0],e=Ce().memoizedState;return[typeof t=="boolean"?t:Ns(t),e]},useSyncExternalStore:tp,useId:jp,useHostTransitionStatus:Od,useFormState:mp,useActionState:mp,useOptimistic:function(t,e){var i=Ce();return le!==null?op(i,le,t,e):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:Sd,useCacheRefresh:Mp};kp.useEffectEvent=vp;function kd(t,e,i,o){e=t.memoizedState,i=i(o,e),i=i==null?e:j({},e,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Bd={enqueueSetState:function(t,e,i){t=t._reactInternals;var o=Dn(),l=Na(o);l.payload=e,i!=null&&(l.callback=i),e=Ua(t,l,o),e!==null&&(wn(e,t,o),Rs(e,t,o))},enqueueReplaceState:function(t,e,i){t=t._reactInternals;var o=Dn(),l=Na(o);l.tag=1,l.payload=e,i!=null&&(l.callback=i),e=Ua(t,l,o),e!==null&&(wn(e,t,o),Rs(e,t,o))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var i=Dn(),o=Na(i);o.tag=2,e!=null&&(o.callback=e),e=Ua(t,o,i),e!==null&&(wn(e,t,i),Rs(e,t,i))}};function Bp(t,e,i,o,l,u,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,u,g):e.prototype&&e.prototype.isPureReactComponent?!Ma(i,o)||!Ma(l,u):!0}function Np(t,e,i,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(i,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(i,o),e.state!==t&&Bd.enqueueReplaceState(e,e.state,null)}function Br(t,e){var i=e;if("ref"in e){i={};for(var o in e)o!=="ref"&&(i[o]=e[o])}if(t=t.defaultProps){i===e&&(i=j({},i));for(var l in t)i[l]===void 0&&(i[l]=t[l])}return i}function Up(t){zr(t)}function Hp(t){console.error(t)}function Zp(t){zr(t)}function zu(t,e){try{var i=t.onUncaughtError;i(e.value,{componentStack:e.stack})}catch(o){setTimeout(function(){throw o})}}function Pp(t,e,i){try{var o=t.onCaughtError;o(i.value,{componentStack:i.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Nd(t,e,i){return i=Na(i),i.tag=3,i.payload={element:null},i.callback=function(){zu(t,e)},i}function qp(t){return t=Na(t),t.tag=3,t}function Yp(t,e,i,o){var l=i.type.getDerivedStateFromError;if(typeof l=="function"){var u=o.value;t.payload=function(){return l(u)},t.callback=function(){Pp(e,i,o)}}var g=i.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Pp(e,i,o),typeof l!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var _=o.stack;this.componentDidCatch(o.value,{componentStack:_!==null?_:""})})}function vx(t,e,i,o,l){if(i.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(e=i.alternate,e!==null&&xo(e,i,l,!0),i=Mn.current,i!==null){switch(i.tag){case 31:case 13:return Xn===null?Bu():i.alternate===null&&Ee===0&&(Ee=3),i.flags&=-257,i.flags|=65536,i.lanes=l,o===du?i.flags|=16384:(e=i.updateQueue,e===null?i.updateQueue=new Set([o]):e.add(o),uf(t,o,l)),!1;case 22:return i.flags|=65536,o===du?i.flags|=16384:(e=i.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([o])},i.updateQueue=e):(i=e.retryQueue,i===null?e.retryQueue=new Set([o]):i.add(o)),uf(t,o,l)),!1}throw Error(h(435,i.tag))}return uf(t,o,l),Bu(),!1}if(Pt)return e=Mn.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,o!==go&&(t=Error(h(422),{cause:o}),Cr(r(t,i)))):(o!==go&&(e=Error(h(423),{cause:o}),Cr(r(e,i))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,o=r(o,i),l=Nd(t.stateNode,o,l),hd(t,l),Ee!==4&&(Ee=2)),!1;var u=Error(h(520),{cause:o});if(u=r(u,i),$s===null?$s=[u]:$s.push(u),Ee!==4&&(Ee=2),e===null)return!0;o=r(o,i),i=e;do{switch(i.tag){case 3:return i.flags|=65536,t=l&-l,i.lanes|=t,t=Nd(i.stateNode,o,t),hd(i,t),!1;case 1:if(e=i.type,u=i.stateNode,(i.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Ga===null||!Ga.has(u))))return i.flags|=65536,l&=-l,i.lanes|=l,l=qp(l),Yp(l,t,i,o),hd(i,l),!1}i=i.return}while(i!==null);return!1}var Ud=Error(h(461)),ke=!1;function Fe(t,e,i,o){e.child=t===null?$h(e,null,i,o):Dr(e,t.child,i,o)}function Gp(t,e,i,o,l){i=i.render;var u=e.ref;if("ref"in o){var g={};for(var _ in o)_!=="ref"&&(g[_]=o[_])}else g=o;return Mr(e),o=yd(t,e,i,g,u,l),_=_d(),t!==null&&!ke?(bd(t,e,l),ta(t,e,l)):(Pt&&_&&Ze(e),e.flags|=1,Fe(t,e,o,l),e.child)}function Vp(t,e,i,o,l){if(t===null){var u=i.type;return typeof u=="function"&&!po(u)&&u.defaultProps===void 0&&i.compare===null?(e.tag=15,e.type=u,Xp(t,e,u,o,l)):(t=Ar(i.type,null,o,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!Xd(t,l)){var g=u.memoizedProps;if(i=i.compare,i=i!==null?i:Ma,i(g,o)&&t.ref===e.ref)return ta(t,e,l)}return e.flags|=1,t=Vn(u,o),t.ref=e.ref,t.return=e,e.child=t}function Xp(t,e,i,o,l){if(t!==null){var u=t.memoizedProps;if(Ma(u,o)&&t.ref===e.ref)if(ke=!1,e.pendingProps=o=u,Xd(t,l))(t.flags&131072)!==0&&(ke=!0);else return e.lanes=t.lanes,ta(t,e,l)}return Hd(t,e,i,o,l)}function $p(t,e,i,o){var l=o.children,u=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((e.flags&128)!==0){if(u=u!==null?u.baseLanes|i:i,t!==null){for(o=e.child=t.child,l=0;o!==null;)l=l|o.lanes|o.childLanes,o=o.sibling;o=l&~u}else o=0,e.child=null;return Ip(t,e,u,i,o)}if((i&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&uu(e,u!==null?u.cachePool:null),u!==null?Qh(e,u):md(),Fh(e);else return o=e.lanes=536870912,Ip(t,e,u!==null?u.baseLanes|i:i,i,o)}else u!==null?(uu(e,u.cachePool),Qh(e,u),Za(),e.memoizedState=null):(t!==null&&uu(e,null),md(),Za());return Fe(t,e,l,i),e.child}function Zs(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Ip(t,e,i,o,l){var u=ud();return u=u===null?null:{parent:Re._currentValue,pool:u},e.memoizedState={baseLanes:i,cachePool:u},t!==null&&uu(e,null),md(),Fh(e),t!==null&&xo(t,e,o,!0),e.childLanes=l,null}function Tu(t,e){return e=Au({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Kp(t,e,i){return Dr(e,t.child,null,i),t=Tu(e,e.pendingProps),t.flags|=2,Ln(e),e.memoizedState=null,t}function yx(t,e,i){var o=e.pendingProps,l=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Pt){if(o.mode==="hidden")return t=Tu(e,o),e.lanes=536870912,Zs(null,t);if(xd(e),(t=Wt)?(t=s0(t,xn),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Z!==null?{id:Q,overflow:dt}:null,retryLane:536870912,hydrationErrors:null},i=Ts(t),i.return=e,e.child=i,Jt=e,Wt=null)):t=null,t===null)throw Ci(e);return e.lanes=536870912,null}return Tu(e,o)}var u=t.memoizedState;if(u!==null){var g=u.dehydrated;if(xd(e),l)if(e.flags&256)e.flags&=-257,e=Kp(t,e,i);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(h(558));else if(ke||xo(t,e,i,!1),l=(i&t.childLanes)!==0,ke||l){if(o=fe,o!==null&&(g=kl(o,i),g!==0&&g!==u.retryLane))throw u.retryLane=g,Gn(t,g),wn(o,t,g),Ud;Bu(),e=Kp(t,e,i)}else t=u.treeContext,Wt=$n(g.nextSibling),Jt=e,Pt=!0,Ai=null,xn=!1,t!==null&&ln(e,t),e=Tu(e,o),e.flags|=4096;return e}return t=Vn(t.child,{mode:o.mode,children:o.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Eu(t,e){var i=e.ref;if(i===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(h(284));(t===null||t.ref!==i)&&(e.flags|=4194816)}}function Hd(t,e,i,o,l){return Mr(e),i=yd(t,e,i,o,void 0,l),o=_d(),t!==null&&!ke?(bd(t,e,l),ta(t,e,l)):(Pt&&o&&Ze(e),e.flags|=1,Fe(t,e,i,l),e.child)}function Qp(t,e,i,o,l,u){return Mr(e),e.updateQueue=null,i=Wh(e,o,i,l),Jh(t),o=_d(),t!==null&&!ke?(bd(t,e,u),ta(t,e,u)):(Pt&&o&&Ze(e),e.flags|=1,Fe(t,e,i,u),e.child)}function Fp(t,e,i,o,l){if(Mr(e),e.stateNode===null){var u=Ii,g=i.contextType;typeof g=="object"&&g!==null&&(u=Qe(g)),u=new i(o,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Bd,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=o,u.state=e.memoizedState,u.refs={},dd(e),g=i.contextType,u.context=typeof g=="object"&&g!==null?Qe(g):Ii,u.state=e.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(kd(e,i,g,o),u.state=e.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(g=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),g!==u.state&&Bd.enqueueReplaceState(u,u.state,null),ks(e,o,u,l),Ds(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),o=!0}else if(t===null){u=e.stateNode;var _=e.memoizedProps,C=Br(i,_);u.props=C;var H=u.context,I=i.contextType;g=Ii,typeof I=="object"&&I!==null&&(g=Qe(I));var F=i.getDerivedStateFromProps;I=typeof F=="function"||typeof u.getSnapshotBeforeUpdate=="function",_=e.pendingProps!==_,I||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(_||H!==g)&&Np(e,u,o,g),Ba=!1;var P=e.memoizedState;u.state=P,ks(e,o,u,l),Ds(),H=e.memoizedState,_||P!==H||Ba?(typeof F=="function"&&(kd(e,i,F,o),H=e.memoizedState),(C=Ba||Bp(e,i,C,o,P,H,g))?(I||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=H),u.props=o,u.state=H,u.context=g,o=C):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{u=e.stateNode,fd(t,e),g=e.memoizedProps,I=Br(i,g),u.props=I,F=e.pendingProps,P=u.context,H=i.contextType,C=Ii,typeof H=="object"&&H!==null&&(C=Qe(H)),_=i.getDerivedStateFromProps,(H=typeof _=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(g!==F||P!==C)&&Np(e,u,o,C),Ba=!1,P=e.memoizedState,u.state=P,ks(e,o,u,l),Ds();var Y=e.memoizedState;g!==F||P!==Y||Ba||t!==null&&t.dependencies!==null&&su(t.dependencies)?(typeof _=="function"&&(kd(e,i,_,o),Y=e.memoizedState),(I=Ba||Bp(e,i,I,o,P,Y,C)||t!==null&&t.dependencies!==null&&su(t.dependencies))?(H||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(o,Y,C),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(o,Y,C)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||g===t.memoizedProps&&P===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&P===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=Y),u.props=o,u.state=Y,u.context=C,o=I):(typeof u.componentDidUpdate!="function"||g===t.memoizedProps&&P===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&P===t.memoizedState||(e.flags|=1024),o=!1)}return u=o,Eu(t,e),o=(e.flags&128)!==0,u||o?(u=e.stateNode,i=o&&typeof i.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&o?(e.child=Dr(e,t.child,null,l),e.child=Dr(e,null,i,l)):Fe(t,e,i,l),e.memoizedState=u.state,t=e.child):t=ta(t,e,l),t}function Jp(t,e,i,o){return Qi(),e.flags|=256,Fe(t,e,i,o),e.child}var Zd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Pd(t){return{baseLanes:t,cachePool:Ph()}}function qd(t,e,i){return t=t!==null?t.childLanes&~i:0,e&&(t|=Rn),t}function Wp(t,e,i){var o=e.pendingProps,l=!1,u=(e.flags&128)!==0,g;if((g=u)||(g=t!==null&&t.memoizedState===null?!1:(Ae.current&2)!==0),g&&(l=!0,e.flags&=-129),g=(e.flags&32)!==0,e.flags&=-33,t===null){if(Pt){if(l?Ha(e):Za(),(t=Wt)?(t=s0(t,xn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Z!==null?{id:Q,overflow:dt}:null,retryLane:536870912,hydrationErrors:null},i=Ts(t),i.return=e,e.child=i,Jt=e,Wt=null)):t=null,t===null)throw Ci(e);return Tf(t)?e.lanes=32:e.lanes=536870912,null}var _=o.children;return o=o.fallback,l?(Za(),l=e.mode,_=Au({mode:"hidden",children:_},l),o=Ki(o,l,i,null),_.return=e,o.return=e,_.sibling=o,e.child=_,o=e.child,o.memoizedState=Pd(i),o.childLanes=qd(t,g,i),e.memoizedState=Zd,Zs(null,o)):(Ha(e),Yd(e,_))}var C=t.memoizedState;if(C!==null&&(_=C.dehydrated,_!==null)){if(u)e.flags&256?(Ha(e),e.flags&=-257,e=Gd(t,e,i)):e.memoizedState!==null?(Za(),e.child=t.child,e.flags|=128,e=null):(Za(),_=o.fallback,l=e.mode,o=Au({mode:"visible",children:o.children},l),_=Ki(_,l,i,null),_.flags|=2,o.return=e,_.return=e,o.sibling=_,e.child=o,Dr(e,t.child,null,i),o=e.child,o.memoizedState=Pd(i),o.childLanes=qd(t,g,i),e.memoizedState=Zd,e=Zs(null,o));else if(Ha(e),Tf(_)){if(g=_.nextSibling&&_.nextSibling.dataset,g)var H=g.dgst;g=H,o=Error(h(419)),o.stack="",o.digest=g,Cr({value:o,source:null,stack:null}),e=Gd(t,e,i)}else if(ke||xo(t,e,i,!1),g=(i&t.childLanes)!==0,ke||g){if(g=fe,g!==null&&(o=kl(g,i),o!==0&&o!==C.retryLane))throw C.retryLane=o,Gn(t,o),wn(g,t,o),Ud;zf(_)||Bu(),e=Gd(t,e,i)}else zf(_)?(e.flags|=192,e.child=t.child,e=null):(t=C.treeContext,Wt=$n(_.nextSibling),Jt=e,Pt=!0,Ai=null,xn=!1,t!==null&&ln(e,t),e=Yd(e,o.children),e.flags|=4096);return e}return l?(Za(),_=o.fallback,l=e.mode,C=t.child,H=C.sibling,o=Vn(C,{mode:"hidden",children:o.children}),o.subtreeFlags=C.subtreeFlags&65011712,H!==null?_=Vn(H,_):(_=Ki(_,l,i,null),_.flags|=2),_.return=e,o.return=e,o.sibling=_,e.child=o,Zs(null,o),o=e.child,_=t.child.memoizedState,_===null?_=Pd(i):(l=_.cachePool,l!==null?(C=Re._currentValue,l=l.parent!==C?{parent:C,pool:C}:l):l=Ph(),_={baseLanes:_.baseLanes|i,cachePool:l}),o.memoizedState=_,o.childLanes=qd(t,g,i),e.memoizedState=Zd,Zs(t.child,o)):(Ha(e),i=t.child,t=i.sibling,i=Vn(i,{mode:"visible",children:o.children}),i.return=e,i.sibling=null,t!==null&&(g=e.deletions,g===null?(e.deletions=[t],e.flags|=16):g.push(t)),e.child=i,e.memoizedState=null,i)}function Yd(t,e){return e=Au({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Au(t,e){return t=an(22,t,null,e),t.lanes=0,t}function Gd(t,e,i){return Dr(e,t.child,null,i),t=Yd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function tm(t,e,i){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),rd(t.return,e,i)}function Vd(t,e,i,o,l,u){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:i,tailMode:l,treeForkCount:u}:(g.isBackwards=e,g.rendering=null,g.renderingStartTime=0,g.last=o,g.tail=i,g.tailMode=l,g.treeForkCount=u)}function em(t,e,i){var o=e.pendingProps,l=o.revealOrder,u=o.tail;o=o.children;var g=Ae.current,_=(g&2)!==0;if(_?(g=g&1|2,e.flags|=128):g&=1,et(Ae,g),Fe(t,e,o,i),o=Pt?v:0,!_&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&tm(t,i,e);else if(t.tag===19)tm(t,i,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"forwards":for(i=e.child,l=null;i!==null;)t=i.alternate,t!==null&&mu(t)===null&&(l=i),i=i.sibling;i=l,i===null?(l=e.child,e.child=null):(l=i.sibling,i.sibling=null),Vd(e,!1,l,i,u,o);break;case"backwards":case"unstable_legacy-backwards":for(i=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&mu(t)===null){e.child=l;break}t=l.sibling,l.sibling=i,i=l,l=t}Vd(e,!0,i,null,u,o);break;case"together":Vd(e,!1,null,null,void 0,o);break;default:e.memoizedState=null}return e.child}function ta(t,e,i){if(t!==null&&(e.dependencies=t.dependencies),Ya|=e.lanes,(i&e.childLanes)===0)if(t!==null){if(xo(t,e,i,!1),(i&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(h(153));if(e.child!==null){for(t=e.child,i=Vn(t,t.pendingProps),e.child=i,i.return=e;t.sibling!==null;)t=t.sibling,i=i.sibling=Vn(t,t.pendingProps),i.return=e;i.sibling=null}return e.child}function Xd(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&su(t)))}function _x(t,e,i){switch(e.tag){case 3:Qt(e,e.stateNode.containerInfo),ka(e,Re,t.memoizedState.cache),Qi();break;case 27:case 5:cn(e);break;case 4:Qt(e,e.stateNode.containerInfo);break;case 10:ka(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,xd(e),null;break;case 13:var o=e.memoizedState;if(o!==null)return o.dehydrated!==null?(Ha(e),e.flags|=128,null):(i&e.child.childLanes)!==0?Wp(t,e,i):(Ha(e),t=ta(t,e,i),t!==null?t.sibling:null);Ha(e);break;case 19:var l=(t.flags&128)!==0;if(o=(i&e.childLanes)!==0,o||(xo(t,e,i,!1),o=(i&e.childLanes)!==0),l){if(o)return em(t,e,i);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),et(Ae,Ae.current),o)break;return null;case 22:return e.lanes=0,$p(t,e,i,e.pendingProps);case 24:ka(e,Re,t.memoizedState.cache)}return ta(t,e,i)}function nm(t,e,i){if(t!==null)if(t.memoizedProps!==e.pendingProps)ke=!0;else{if(!Xd(t,i)&&(e.flags&128)===0)return ke=!1,_x(t,e,i);ke=(t.flags&131072)!==0}else ke=!1,Pt&&(e.flags&1048576)!==0&&kt(e,v,e.index);switch(e.lanes=0,e.tag){case 16:t:{var o=e.pendingProps;if(t=Or(e.elementType),e.type=t,typeof t=="function")po(t)?(o=Br(t,o),e.tag=1,e=Fp(null,e,t,o,i)):(e.tag=0,e=Hd(null,e,t,o,i));else{if(t!=null){var l=t.$$typeof;if(l===ht){e.tag=11,e=Gp(null,e,t,o,i);break t}else if(l===ot){e.tag=14,e=Vp(null,e,t,o,i);break t}}throw e=he(t)||t,Error(h(306,e,""))}}return e;case 0:return Hd(t,e,e.type,e.pendingProps,i);case 1:return o=e.type,l=Br(o,e.pendingProps),Fp(t,e,o,l,i);case 3:t:{if(Qt(e,e.stateNode.containerInfo),t===null)throw Error(h(387));o=e.pendingProps;var u=e.memoizedState;l=u.element,fd(t,e),ks(e,o,null,i);var g=e.memoizedState;if(o=g.cache,ka(e,Re,o),o!==u.cache&&od(e,[Re],i,!0),Ds(),o=g.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:g.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=Jp(t,e,o,i);break t}else if(o!==l){l=r(Error(h(424)),e),Cr(l),e=Jp(t,e,o,i);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Wt=$n(t.firstChild),Jt=e,Pt=!0,Ai=null,xn=!0,i=$h(e,null,o,i),e.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(Qi(),o===l){e=ta(t,e,i);break t}Fe(t,e,o,i)}e=e.child}return e;case 26:return Eu(t,e),t===null?(i=h0(e.type,null,e.pendingProps,null))?e.memoizedState=i:Pt||(i=e.type,t=e.pendingProps,o=Yu(ut.current).createElement(i),o[Le]=e,o[qe]=t,Je(o,i,t),Oe(o),e.stateNode=o):e.memoizedState=h0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return cn(e),t===null&&Pt&&(o=e.stateNode=c0(e.type,e.pendingProps,ut.current),Jt=e,xn=!0,l=Wt,Ia(e.type)?(Ef=l,Wt=$n(o.firstChild)):Wt=l),Fe(t,e,e.pendingProps.children,i),Eu(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Pt&&((l=o=Wt)&&(o=Qx(o,e.type,e.pendingProps,xn),o!==null?(e.stateNode=o,Jt=e,Wt=$n(o.firstChild),xn=!1,l=!0):l=!1),l||Ci(e)),cn(e),l=e.type,u=e.pendingProps,g=t!==null?t.memoizedProps:null,o=u.children,bf(l,u)?o=null:g!==null&&bf(l,g)&&(e.flags|=32),e.memoizedState!==null&&(l=yd(t,e,dx,null,null,i),el._currentValue=l),Eu(t,e),Fe(t,e,o,i),e.child;case 6:return t===null&&Pt&&((t=i=Wt)&&(i=Fx(i,e.pendingProps,xn),i!==null?(e.stateNode=i,Jt=e,Wt=null,t=!0):t=!1),t||Ci(e)),null;case 13:return Wp(t,e,i);case 4:return Qt(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=Dr(e,null,o,i):Fe(t,e,o,i),e.child;case 11:return Gp(t,e,e.type,e.pendingProps,i);case 7:return Fe(t,e,e.pendingProps,i),e.child;case 8:return Fe(t,e,e.pendingProps.children,i),e.child;case 12:return Fe(t,e,e.pendingProps.children,i),e.child;case 10:return o=e.pendingProps,ka(e,e.type,o.value),Fe(t,e,o.children,i),e.child;case 9:return l=e.type._context,o=e.pendingProps.children,Mr(e),l=Qe(l),o=o(l),e.flags|=1,Fe(t,e,o,i),e.child;case 14:return Vp(t,e,e.type,e.pendingProps,i);case 15:return Xp(t,e,e.type,e.pendingProps,i);case 19:return em(t,e,i);case 31:return yx(t,e,i);case 22:return $p(t,e,i,e.pendingProps);case 24:return Mr(e),o=Qe(Re),t===null?(l=ud(),l===null&&(l=fe,u=sd(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=i),l=u),e.memoizedState={parent:o,cache:l},dd(e),ka(e,Re,l)):((t.lanes&i)!==0&&(fd(t,e),ks(e,null,null,i),Ds()),l=t.memoizedState,u=e.memoizedState,l.parent!==o?(l={parent:o,cache:o},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),ka(e,Re,o)):(o=u.cache,ka(e,Re,o),o!==l.cache&&od(e,[Re],i,!0))),Fe(t,e,e.pendingProps.children,i),e.child;case 29:throw e.pendingProps}throw Error(h(156,e.tag))}function ea(t){t.flags|=4}function $d(t,e,i,o,l){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(jm())t.flags|=8192;else throw Rr=du,cd}else t.flags&=-16777217}function im(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!v0(e))if(jm())t.flags|=8192;else throw Rr=du,cd}function Cu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?be():536870912,t.lanes|=e,jo|=e)}function Ps(t,e){if(!Pt)switch(t.tailMode){case"hidden":e=t.tail;for(var i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function ge(t){var e=t.alternate!==null&&t.alternate.child===t.child,i=0,o=0;if(e)for(var l=t.child;l!==null;)i|=l.lanes|l.childLanes,o|=l.subtreeFlags&65011712,o|=l.flags&65011712,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)i|=l.lanes|l.childLanes,o|=l.subtreeFlags,o|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=o,t.childLanes=i,e}function bx(t,e,i){var o=e.pendingProps;switch(ze(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(e),null;case 1:return ge(e),null;case 3:return i=e.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),e.memoizedState.cache!==o&&(e.flags|=2048),Fi(Re),Ft(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(oi(e)?ea(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Cs())),ge(e),null;case 26:var l=e.type,u=e.memoizedState;return t===null?(ea(e),u!==null?(ge(e),im(e,u)):(ge(e),$d(e,l,null,o,i))):u?u!==t.memoizedState?(ea(e),ge(e),im(e,u)):(ge(e),e.flags&=-16777217):(t=t.memoizedProps,t!==o&&ea(e),ge(e),$d(e,l,t,o,i)),null;case 27:if(en(e),i=ut.current,l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==o&&ea(e);else{if(!o){if(e.stateNode===null)throw Error(h(166));return ge(e),null}t=st.current,oi(e)?As(e):(t=c0(l,o,i),e.stateNode=t,ea(e))}return ge(e),null;case 5:if(en(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==o&&ea(e);else{if(!o){if(e.stateNode===null)throw Error(h(166));return ge(e),null}if(u=st.current,oi(e))As(e);else{var g=Yu(ut.current);switch(u){case 1:u=g.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=g.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=g.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof o.is=="string"?g.createElement("select",{is:o.is}):g.createElement("select"),o.multiple?u.multiple=!0:o.size&&(u.size=o.size);break;default:u=typeof o.is=="string"?g.createElement(l,{is:o.is}):g.createElement(l)}}u[Le]=e,u[qe]=o;t:for(g=e.child;g!==null;){if(g.tag===5||g.tag===6)u.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break t;for(;g.sibling===null;){if(g.return===null||g.return===e)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}e.stateNode=u;t:switch(Je(u,l,o),l){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ea(e)}}return ge(e),$d(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,i),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==o&&ea(e);else{if(typeof o!="string"&&e.stateNode===null)throw Error(h(166));if(t=ut.current,oi(e)){if(t=e.stateNode,i=e.memoizedProps,o=null,l=Jt,l!==null)switch(l.tag){case 27:case 5:o=l.memoizedProps}t[Le]=e,t=!!(t.nodeValue===i||o!==null&&o.suppressHydrationWarning===!0||Wm(t.nodeValue,i)),t||Ci(e,!0)}else t=Yu(t).createTextNode(o),t[Le]=e,e.stateNode=t}return ge(e),null;case 31:if(i=e.memoizedState,t===null||t.memoizedState!==null){if(o=oi(e),i!==null){if(t===null){if(!o)throw Error(h(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(h(557));t[Le]=e}else Qi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ge(e),t=!1}else i=Cs(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return e.flags&256?(Ln(e),e):(Ln(e),null);if((e.flags&128)!==0)throw Error(h(558))}return ge(e),null;case 13:if(o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=oi(e),o!==null&&o.dehydrated!==null){if(t===null){if(!l)throw Error(h(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(h(317));l[Le]=e}else Qi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ge(e),l=!1}else l=Cs(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(Ln(e),e):(Ln(e),null)}return Ln(e),(e.flags&128)!==0?(e.lanes=i,e):(i=o!==null,t=t!==null&&t.memoizedState!==null,i&&(o=e.child,l=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(l=o.alternate.memoizedState.cachePool.pool),u=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(u=o.memoizedState.cachePool.pool),u!==l&&(o.flags|=2048)),i!==t&&i&&(e.child.flags|=8192),Cu(e,e.updateQueue),ge(e),null);case 4:return Ft(),t===null&&gf(e.stateNode.containerInfo),ge(e),null;case 10:return Fi(e.type),ge(e),null;case 19:if(V(Ae),o=e.memoizedState,o===null)return ge(e),null;if(l=(e.flags&128)!==0,u=o.rendering,u===null)if(l)Ps(o,!1);else{if(Ee!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=mu(t),u!==null){for(e.flags|=128,Ps(o,!1),t=u.updateQueue,e.updateQueue=t,Cu(e,t),e.subtreeFlags=0,t=i,i=e.child;i!==null;)zs(i,t),i=i.sibling;return et(Ae,Ae.current&1|2),Pt&&bt(e,o.treeForkCount),e.child}t=t.sibling}o.tail!==null&&$e()>Ru&&(e.flags|=128,l=!0,Ps(o,!1),e.lanes=4194304)}else{if(!l)if(t=mu(u),t!==null){if(e.flags|=128,l=!0,t=t.updateQueue,e.updateQueue=t,Cu(e,t),Ps(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!Pt)return ge(e),null}else 2*$e()-o.renderingStartTime>Ru&&i!==536870912&&(e.flags|=128,l=!0,Ps(o,!1),e.lanes=4194304);o.isBackwards?(u.sibling=e.child,e.child=u):(t=o.last,t!==null?t.sibling=u:e.child=u,o.last=u)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=$e(),t.sibling=null,i=Ae.current,et(Ae,l?i&1|2:i&1),Pt&&bt(e,o.treeForkCount),t):(ge(e),null);case 22:case 23:return Ln(e),gd(),o=e.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(e.flags|=8192):o&&(e.flags|=8192),o?(i&536870912)!==0&&(e.flags&128)===0&&(ge(e),e.subtreeFlags&6&&(e.flags|=8192)):ge(e),i=e.updateQueue,i!==null&&Cu(e,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),o=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),o!==i&&(e.flags|=2048),t!==null&&V(Lr),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),Fi(Re),ge(e),null;case 25:return null;case 30:return null}throw Error(h(156,e.tag))}function wx(t,e){switch(ze(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Fi(Re),Ft(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return en(e),null;case 31:if(e.memoizedState!==null){if(Ln(e),e.alternate===null)throw Error(h(340));Qi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Ln(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(h(340));Qi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return V(Ae),null;case 4:return Ft(),null;case 10:return Fi(e.type),null;case 22:case 23:return Ln(e),gd(),t!==null&&V(Lr),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Fi(Re),null;case 25:return null;default:return null}}function am(t,e){switch(ze(e),e.tag){case 3:Fi(Re),Ft();break;case 26:case 27:case 5:en(e);break;case 4:Ft();break;case 31:e.memoizedState!==null&&Ln(e);break;case 13:Ln(e);break;case 19:V(Ae);break;case 10:Fi(e.type);break;case 22:case 23:Ln(e),gd(),t!==null&&V(Lr);break;case 24:Fi(Re)}}function qs(t,e){try{var i=e.updateQueue,o=i!==null?i.lastEffect:null;if(o!==null){var l=o.next;i=l;do{if((i.tag&t)===t){o=void 0;var u=i.create,g=i.inst;o=u(),g.destroy=o}i=i.next}while(i!==l)}}catch(_){oe(e,e.return,_)}}function Pa(t,e,i){try{var o=e.updateQueue,l=o!==null?o.lastEffect:null;if(l!==null){var u=l.next;o=u;do{if((o.tag&t)===t){var g=o.inst,_=g.destroy;if(_!==void 0){g.destroy=void 0,l=e;var C=i,H=_;try{H()}catch(I){oe(l,C,I)}}}o=o.next}while(o!==u)}}catch(I){oe(e,e.return,I)}}function rm(t){var e=t.updateQueue;if(e!==null){var i=t.stateNode;try{Kh(e,i)}catch(o){oe(t,t.return,o)}}}function om(t,e,i){i.props=Br(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(o){oe(t,e,o)}}function Ys(t,e){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof i=="function"?t.refCleanup=i(o):i.current=o}}catch(l){oe(t,e,l)}}function Mi(t,e){var i=t.ref,o=t.refCleanup;if(i!==null)if(typeof o=="function")try{o()}catch(l){oe(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(l){oe(t,e,l)}else i.current=null}function sm(t){var e=t.type,i=t.memoizedProps,o=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":i.autoFocus&&o.focus();break t;case"img":i.src?o.src=i.src:i.srcSet&&(o.srcset=i.srcSet)}}catch(l){oe(t,t.return,l)}}function Id(t,e,i){try{var o=t.stateNode;Gx(o,t.type,i,e),o[qe]=e}catch(l){oe(t,t.return,l)}}function lm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ia(t.type)||t.tag===4}function Kd(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||lm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ia(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qd(t,e,i){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(t,e):(e=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,e.appendChild(t),i=i._reactRootContainer,i!=null||e.onclick!==null||(e.onclick=hn));else if(o!==4&&(o===27&&Ia(t.type)&&(i=t.stateNode,e=null),t=t.child,t!==null))for(Qd(t,e,i),t=t.sibling;t!==null;)Qd(t,e,i),t=t.sibling}function ju(t,e,i){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?i.insertBefore(t,e):i.appendChild(t);else if(o!==4&&(o===27&&Ia(t.type)&&(i=t.stateNode),t=t.child,t!==null))for(ju(t,e,i),t=t.sibling;t!==null;)ju(t,e,i),t=t.sibling}function um(t){var e=t.stateNode,i=t.memoizedProps;try{for(var o=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);Je(e,o,i),e[Le]=t,e[qe]=i}catch(u){oe(t,t.return,u)}}var na=!1,Be=!1,Fd=!1,cm=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Sx(t,e){if(t=t.containerInfo,yf=Qu,t=_r(t),wi(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else t:{i=(i=t.ownerDocument)&&i.defaultView||window;var o=i.getSelection&&i.getSelection();if(o&&o.rangeCount!==0){i=o.anchorNode;var l=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{i.nodeType,u.nodeType}catch{i=null;break t}var g=0,_=-1,C=-1,H=0,I=0,F=t,P=null;e:for(;;){for(var Y;F!==i||l!==0&&F.nodeType!==3||(_=g+l),F!==u||o!==0&&F.nodeType!==3||(C=g+o),F.nodeType===3&&(g+=F.nodeValue.length),(Y=F.firstChild)!==null;)P=F,F=Y;for(;;){if(F===t)break e;if(P===i&&++H===l&&(_=g),P===u&&++I===o&&(C=g),(Y=F.nextSibling)!==null)break;F=P,P=F.parentNode}F=Y}i=_===-1||C===-1?null:{start:_,end:C}}else i=null}i=i||{start:0,end:0}}else i=null;for(_f={focusedElem:t,selectionRange:i},Qu=!1,Ve=e;Ve!==null;)if(e=Ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ve=t;else for(;Ve!==null;){switch(e=Ve,u=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(i=0;i<t.length;i++)l=t[i],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,i=e,l=u.memoizedProps,u=u.memoizedState,o=i.stateNode;try{var gt=Br(i.type,l);t=o.getSnapshotBeforeUpdate(gt,u),o.__reactInternalSnapshotBeforeUpdate=t}catch(At){oe(i,i.return,At)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,i=t.nodeType,i===9)Sf(t);else if(i===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Sf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(h(163))}if(t=e.sibling,t!==null){t.return=e.return,Ve=t;break}Ve=e.return}}function dm(t,e,i){var o=i.flags;switch(i.tag){case 0:case 11:case 15:aa(t,i),o&4&&qs(5,i);break;case 1:if(aa(t,i),o&4)if(t=i.stateNode,e===null)try{t.componentDidMount()}catch(g){oe(i,i.return,g)}else{var l=Br(i.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(g){oe(i,i.return,g)}}o&64&&rm(i),o&512&&Ys(i,i.return);break;case 3:if(aa(t,i),o&64&&(t=i.updateQueue,t!==null)){if(e=null,i.child!==null)switch(i.child.tag){case 27:case 5:e=i.child.stateNode;break;case 1:e=i.child.stateNode}try{Kh(t,e)}catch(g){oe(i,i.return,g)}}break;case 27:e===null&&o&4&&um(i);case 26:case 5:aa(t,i),e===null&&o&4&&sm(i),o&512&&Ys(i,i.return);break;case 12:aa(t,i);break;case 31:aa(t,i),o&4&&pm(t,i);break;case 13:aa(t,i),o&4&&mm(t,i),o&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=Ox.bind(null,i),Jx(t,i))));break;case 22:if(o=i.memoizedState!==null||na,!o){e=e!==null&&e.memoizedState!==null||Be,l=na;var u=Be;na=o,(Be=e)&&!u?ra(t,i,(i.subtreeFlags&8772)!==0):aa(t,i),na=l,Be=u}break;case 30:break;default:aa(t,i)}}function fm(t){var e=t.alternate;e!==null&&(t.alternate=null,fm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&os(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ye=null,vn=!1;function ia(t,e,i){for(i=i.child;i!==null;)hm(t,e,i),i=i.sibling}function hm(t,e,i){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(Nn,i)}catch{}switch(i.tag){case 26:Be||Mi(i,e),ia(t,e,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Be||Mi(i,e);var o=ye,l=vn;Ia(i.type)&&(ye=i.stateNode,vn=!1),ia(t,e,i),Js(i.stateNode),ye=o,vn=l;break;case 5:Be||Mi(i,e);case 6:if(o=ye,l=vn,ye=null,ia(t,e,i),ye=o,vn=l,ye!==null)if(vn)try{(ye.nodeType===9?ye.body:ye.nodeName==="HTML"?ye.ownerDocument.body:ye).removeChild(i.stateNode)}catch(u){oe(i,e,u)}else try{ye.removeChild(i.stateNode)}catch(u){oe(i,e,u)}break;case 18:ye!==null&&(vn?(t=ye,r0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),No(t)):r0(ye,i.stateNode));break;case 4:o=ye,l=vn,ye=i.stateNode.containerInfo,vn=!0,ia(t,e,i),ye=o,vn=l;break;case 0:case 11:case 14:case 15:Pa(2,i,e),Be||Pa(4,i,e),ia(t,e,i);break;case 1:Be||(Mi(i,e),o=i.stateNode,typeof o.componentWillUnmount=="function"&&om(i,e,o)),ia(t,e,i);break;case 21:ia(t,e,i);break;case 22:Be=(o=Be)||i.memoizedState!==null,ia(t,e,i),Be=o;break;default:ia(t,e,i)}}function pm(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{No(t)}catch(i){oe(e,e.return,i)}}}function mm(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{No(t)}catch(i){oe(e,e.return,i)}}function zx(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new cm),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new cm),e;default:throw Error(h(435,t.tag))}}function Mu(t,e){var i=zx(t);e.forEach(function(o){if(!i.has(o)){i.add(o);var l=Rx.bind(null,t,o);o.then(l,l)}})}function yn(t,e){var i=e.deletions;if(i!==null)for(var o=0;o<i.length;o++){var l=i[o],u=t,g=e,_=g;t:for(;_!==null;){switch(_.tag){case 27:if(Ia(_.type)){ye=_.stateNode,vn=!1;break t}break;case 5:ye=_.stateNode,vn=!1;break t;case 3:case 4:ye=_.stateNode.containerInfo,vn=!0;break t}_=_.return}if(ye===null)throw Error(h(160));hm(u,g,l),ye=null,vn=!1,u=l.alternate,u!==null&&(u.return=null),l.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)gm(e,t),e=e.sibling}var li=null;function gm(t,e){var i=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:yn(e,t),_n(t),o&4&&(Pa(3,t,t.return),qs(3,t),Pa(5,t,t.return));break;case 1:yn(e,t),_n(t),o&512&&(Be||i===null||Mi(i,i.return)),o&64&&na&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?o:i.concat(o))));break;case 26:var l=li;if(yn(e,t),_n(t),o&512&&(Be||i===null||Mi(i,i.return)),o&4){var u=i!==null?i.memoizedState:null;if(o=t.memoizedState,i===null)if(o===null)if(t.stateNode===null){t:{o=t.type,i=t.memoizedProps,l=l.ownerDocument||l;e:switch(o){case"title":u=l.getElementsByTagName("title")[0],(!u||u[ar]||u[Le]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=l.createElement(o),l.head.insertBefore(u,l.querySelector("head > title"))),Je(u,o,i),u[Le]=t,Oe(u),o=u;break t;case"link":var g=g0("link","href",l).get(o+(i.href||""));if(g){for(var _=0;_<g.length;_++)if(u=g[_],u.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&u.getAttribute("rel")===(i.rel==null?null:i.rel)&&u.getAttribute("title")===(i.title==null?null:i.title)&&u.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){g.splice(_,1);break e}}u=l.createElement(o),Je(u,o,i),l.head.appendChild(u);break;case"meta":if(g=g0("meta","content",l).get(o+(i.content||""))){for(_=0;_<g.length;_++)if(u=g[_],u.getAttribute("content")===(i.content==null?null:""+i.content)&&u.getAttribute("name")===(i.name==null?null:i.name)&&u.getAttribute("property")===(i.property==null?null:i.property)&&u.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&u.getAttribute("charset")===(i.charSet==null?null:i.charSet)){g.splice(_,1);break e}}u=l.createElement(o),Je(u,o,i),l.head.appendChild(u);break;default:throw Error(h(468,o))}u[Le]=t,Oe(u),o=u}t.stateNode=o}else x0(l,t.type,t.stateNode);else t.stateNode=m0(l,o,t.memoizedProps);else u!==o?(u===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):u.count--,o===null?x0(l,t.type,t.stateNode):m0(l,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Id(t,t.memoizedProps,i.memoizedProps)}break;case 27:yn(e,t),_n(t),o&512&&(Be||i===null||Mi(i,i.return)),i!==null&&o&4&&Id(t,t.memoizedProps,i.memoizedProps);break;case 5:if(yn(e,t),_n(t),o&512&&(Be||i===null||Mi(i,i.return)),t.flags&32){l=t.stateNode;try{Un(l,"")}catch(gt){oe(t,t.return,gt)}}o&4&&t.stateNode!=null&&(l=t.memoizedProps,Id(t,l,i!==null?i.memoizedProps:l)),o&1024&&(Fd=!0);break;case 6:if(yn(e,t),_n(t),o&4){if(t.stateNode===null)throw Error(h(162));o=t.memoizedProps,i=t.stateNode;try{i.nodeValue=o}catch(gt){oe(t,t.return,gt)}}break;case 3:if(Xu=null,l=li,li=Gu(e.containerInfo),yn(e,t),li=l,_n(t),o&4&&i!==null&&i.memoizedState.isDehydrated)try{No(e.containerInfo)}catch(gt){oe(t,t.return,gt)}Fd&&(Fd=!1,xm(t));break;case 4:o=li,li=Gu(t.stateNode.containerInfo),yn(e,t),_n(t),li=o;break;case 12:yn(e,t),_n(t);break;case 31:yn(e,t),_n(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Mu(t,o)));break;case 13:yn(e,t),_n(t),t.child.flags&8192&&t.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Ou=$e()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Mu(t,o)));break;case 22:l=t.memoizedState!==null;var C=i!==null&&i.memoizedState!==null,H=na,I=Be;if(na=H||l,Be=I||C,yn(e,t),Be=I,na=H,_n(t),o&8192)t:for(e=t.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,l&&(i===null||C||na||Be||Nr(t)),i=null,e=t;;){if(e.tag===5||e.tag===26){if(i===null){C=i=e;try{if(u=C.stateNode,l)g=u.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{_=C.stateNode;var F=C.memoizedProps.style,P=F!=null&&F.hasOwnProperty("display")?F.display:null;_.style.display=P==null||typeof P=="boolean"?"":(""+P).trim()}}catch(gt){oe(C,C.return,gt)}}}else if(e.tag===6){if(i===null){C=e;try{C.stateNode.nodeValue=l?"":C.memoizedProps}catch(gt){oe(C,C.return,gt)}}}else if(e.tag===18){if(i===null){C=e;try{var Y=C.stateNode;l?o0(Y,!0):o0(C.stateNode,!1)}catch(gt){oe(C,C.return,gt)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;i===e&&(i=null),e=e.return}i===e&&(i=null),e.sibling.return=e.return,e=e.sibling}o&4&&(o=t.updateQueue,o!==null&&(i=o.retryQueue,i!==null&&(o.retryQueue=null,Mu(t,i))));break;case 19:yn(e,t),_n(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Mu(t,o)));break;case 30:break;case 21:break;default:yn(e,t),_n(t)}}function _n(t){var e=t.flags;if(e&2){try{for(var i,o=t.return;o!==null;){if(lm(o)){i=o;break}o=o.return}if(i==null)throw Error(h(160));switch(i.tag){case 27:var l=i.stateNode,u=Kd(t);ju(t,u,l);break;case 5:var g=i.stateNode;i.flags&32&&(Un(g,""),i.flags&=-33);var _=Kd(t);ju(t,_,g);break;case 3:case 4:var C=i.stateNode.containerInfo,H=Kd(t);Qd(t,H,C);break;default:throw Error(h(161))}}catch(I){oe(t,t.return,I)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;xm(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function aa(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)dm(t,e.alternate,e),e=e.sibling}function Nr(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Pa(4,e,e.return),Nr(e);break;case 1:Mi(e,e.return);var i=e.stateNode;typeof i.componentWillUnmount=="function"&&om(e,e.return,i),Nr(e);break;case 27:Js(e.stateNode);case 26:case 5:Mi(e,e.return),Nr(e);break;case 22:e.memoizedState===null&&Nr(e);break;case 30:Nr(e);break;default:Nr(e)}t=t.sibling}}function ra(t,e,i){for(i=i&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var o=e.alternate,l=t,u=e,g=u.flags;switch(u.tag){case 0:case 11:case 15:ra(l,u,i),qs(4,u);break;case 1:if(ra(l,u,i),o=u,l=o.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(H){oe(o,o.return,H)}if(o=u,l=o.updateQueue,l!==null){var _=o.stateNode;try{var C=l.shared.hiddenCallbacks;if(C!==null)for(l.shared.hiddenCallbacks=null,l=0;l<C.length;l++)Ih(C[l],_)}catch(H){oe(o,o.return,H)}}i&&g&64&&rm(u),Ys(u,u.return);break;case 27:um(u);case 26:case 5:ra(l,u,i),i&&o===null&&g&4&&sm(u),Ys(u,u.return);break;case 12:ra(l,u,i);break;case 31:ra(l,u,i),i&&g&4&&pm(l,u);break;case 13:ra(l,u,i),i&&g&4&&mm(l,u);break;case 22:u.memoizedState===null&&ra(l,u,i),Ys(u,u.return);break;case 30:break;default:ra(l,u,i)}e=e.sibling}}function Jd(t,e){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&js(i))}function Wd(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&js(t))}function ui(t,e,i,o){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)vm(t,e,i,o),e=e.sibling}function vm(t,e,i,o){var l=e.flags;switch(e.tag){case 0:case 11:case 15:ui(t,e,i,o),l&2048&&qs(9,e);break;case 1:ui(t,e,i,o);break;case 3:ui(t,e,i,o),l&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&js(t)));break;case 12:if(l&2048){ui(t,e,i,o),t=e.stateNode;try{var u=e.memoizedProps,g=u.id,_=u.onPostCommit;typeof _=="function"&&_(g,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(C){oe(e,e.return,C)}}else ui(t,e,i,o);break;case 31:ui(t,e,i,o);break;case 13:ui(t,e,i,o);break;case 23:break;case 22:u=e.stateNode,g=e.alternate,e.memoizedState!==null?u._visibility&2?ui(t,e,i,o):Gs(t,e):u._visibility&2?ui(t,e,i,o):(u._visibility|=2,Eo(t,e,i,o,(e.subtreeFlags&10256)!==0||!1)),l&2048&&Jd(g,e);break;case 24:ui(t,e,i,o),l&2048&&Wd(e.alternate,e);break;default:ui(t,e,i,o)}}function Eo(t,e,i,o,l){for(l=l&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var u=t,g=e,_=i,C=o,H=g.flags;switch(g.tag){case 0:case 11:case 15:Eo(u,g,_,C,l),qs(8,g);break;case 23:break;case 22:var I=g.stateNode;g.memoizedState!==null?I._visibility&2?Eo(u,g,_,C,l):Gs(u,g):(I._visibility|=2,Eo(u,g,_,C,l)),l&&H&2048&&Jd(g.alternate,g);break;case 24:Eo(u,g,_,C,l),l&&H&2048&&Wd(g.alternate,g);break;default:Eo(u,g,_,C,l)}e=e.sibling}}function Gs(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var i=t,o=e,l=o.flags;switch(o.tag){case 22:Gs(i,o),l&2048&&Jd(o.alternate,o);break;case 24:Gs(i,o),l&2048&&Wd(o.alternate,o);break;default:Gs(i,o)}e=e.sibling}}var Vs=8192;function Ao(t,e,i){if(t.subtreeFlags&Vs)for(t=t.child;t!==null;)ym(t,e,i),t=t.sibling}function ym(t,e,i){switch(t.tag){case 26:Ao(t,e,i),t.flags&Vs&&t.memoizedState!==null&&cv(i,li,t.memoizedState,t.memoizedProps);break;case 5:Ao(t,e,i);break;case 3:case 4:var o=li;li=Gu(t.stateNode.containerInfo),Ao(t,e,i),li=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Vs,Vs=16777216,Ao(t,e,i),Vs=o):Ao(t,e,i));break;default:Ao(t,e,i)}}function _m(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Xs(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var o=e[i];Ve=o,wm(o,t)}_m(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)bm(t),t=t.sibling}function bm(t){switch(t.tag){case 0:case 11:case 15:Xs(t),t.flags&2048&&Pa(9,t,t.return);break;case 3:Xs(t);break;case 12:Xs(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Lu(t)):Xs(t);break;default:Xs(t)}}function Lu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var o=e[i];Ve=o,wm(o,t)}_m(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Pa(8,e,e.return),Lu(e);break;case 22:i=e.stateNode,i._visibility&2&&(i._visibility&=-3,Lu(e));break;default:Lu(e)}t=t.sibling}}function wm(t,e){for(;Ve!==null;){var i=Ve;switch(i.tag){case 0:case 11:case 15:Pa(8,i,e);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var o=i.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:js(i.memoizedState.cache)}if(o=i.child,o!==null)o.return=i,Ve=o;else t:for(i=t;Ve!==null;){o=Ve;var l=o.sibling,u=o.return;if(fm(o),o===i){Ve=null;break t}if(l!==null){l.return=u,Ve=l;break t}Ve=u}}}var Tx={getCacheForType:function(t){var e=Qe(Re),i=e.data.get(t);return i===void 0&&(i=t(),e.data.set(t,i)),i},cacheSignal:function(){return Qe(Re).controller.signal}},Ex=typeof WeakMap=="function"?WeakMap:Map,ne=0,fe=null,qt=null,Xt=0,re=0,On=null,qa=!1,Co=!1,tf=!1,oa=0,Ee=0,Ya=0,Ur=0,ef=0,Rn=0,jo=0,$s=null,bn=null,nf=!1,Ou=0,Sm=0,Ru=1/0,Du=null,Ga=null,Pe=0,Va=null,Mo=null,sa=0,af=0,rf=null,zm=null,Is=0,of=null;function Dn(){return(ne&2)!==0&&Xt!==0?Xt&-Xt:N.T!==null?ff():as()}function Tm(){if(Rn===0)if((Xt&536870912)===0||Pt){var t=$;$<<=1,($&3932160)===0&&($=262144),Rn=t}else Rn=536870912;return t=Mn.current,t!==null&&(t.flags|=32),Rn}function wn(t,e,i){(t===fe&&(re===2||re===9)||t.cancelPendingCommit!==null)&&(Lo(t,0),Xa(t,Xt,Rn,!1)),xt(t,i),((ne&2)===0||t!==fe)&&(t===fe&&((ne&2)===0&&(Ur|=i),Ee===4&&Xa(t,Xt,Rn,!1)),Li(t))}function Em(t,e,i){if((ne&6)!==0)throw Error(h(327));var o=!i&&(e&127)===0&&(e&t.expiredLanes)===0||pe(t,e),l=o?jx(t,e):lf(t,e,!0),u=o;do{if(l===0){Co&&!o&&Xa(t,e,0,!1);break}else{if(i=t.current.alternate,u&&!Ax(i)){l=lf(t,e,!1),u=!1;continue}if(l===2){if(u=e,t.errorRecoveryDisabledLanes&u)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){e=g;t:{var _=t;l=$s;var C=_.current.memoizedState.isDehydrated;if(C&&(Lo(_,g).flags|=256),g=lf(_,g,!1),g!==2){if(tf&&!C){_.errorRecoveryDisabledLanes|=u,Ur|=u,l=4;break t}u=bn,bn=l,u!==null&&(bn===null?bn=u:bn.push.apply(bn,u))}l=g}if(u=!1,l!==2)continue}}if(l===1){Lo(t,0),Xa(t,e,0,!0);break}t:{switch(o=t,u=l,u){case 0:case 1:throw Error(h(345));case 4:if((e&4194048)!==e)break;case 6:Xa(o,e,Rn,!qa);break t;case 2:bn=null;break;case 3:case 5:break;default:throw Error(h(329))}if((e&62914560)===e&&(l=Ou+300-$e(),10<l)){if(Xa(o,e,Rn,!qa),It(o,0,!0)!==0)break t;sa=e,o.timeoutHandle=i0(Am.bind(null,o,i,bn,Du,nf,e,Rn,Ur,jo,qa,u,"Throttled",-0,0),l);break t}Am(o,i,bn,Du,nf,e,Rn,Ur,jo,qa,u,null,-0,0)}}break}while(!0);Li(t)}function Am(t,e,i,o,l,u,g,_,C,H,I,F,P,Y){if(t.timeoutHandle=-1,F=e.subtreeFlags,F&8192||(F&16785408)===16785408){F={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:hn},ym(e,u,F);var gt=(u&62914560)===u?Ou-$e():(u&4194048)===u?Sm-$e():0;if(gt=dv(F,gt),gt!==null){sa=u,t.cancelPendingCommit=gt(km.bind(null,t,e,u,i,o,l,g,_,C,I,F,null,P,Y)),Xa(t,u,g,!H);return}}km(t,e,u,i,o,l,g,_,C)}function Ax(t){for(var e=t;;){var i=e.tag;if((i===0||i===11||i===15)&&e.flags&16384&&(i=e.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var o=0;o<i.length;o++){var l=i[o],u=l.getSnapshot;l=l.value;try{if(!Ye(u(),l))return!1}catch{return!1}}if(i=e.child,e.subtreeFlags&16384&&i!==null)i.return=e,e=i;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xa(t,e,i,o){e&=~ef,e&=~Ur,t.suspendedLanes|=e,t.pingedLanes&=~e,o&&(t.warmLanes|=e),o=t.expirationTimes;for(var l=e;0<l;){var u=31-Ie(l),g=1<<u;o[u]=-1,l&=~g}i!==0&&Rl(t,i,e)}function ku(){return(ne&6)===0?(Ks(0),!1):!0}function sf(){if(qt!==null){if(re===0)var t=qt.return;else t=qt,si=ji=null,wd(t),bo=null,Ls=0,t=qt;for(;t!==null;)am(t.alternate,t),t=t.return;qt=null}}function Lo(t,e){var i=t.timeoutHandle;i!==-1&&(t.timeoutHandle=-1,$x(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),sa=0,sf(),fe=t,qt=i=Vn(t.current,null),Xt=e,re=0,On=null,qa=!1,Co=pe(t,e),tf=!1,jo=Rn=ef=Ur=Ya=Ee=0,bn=$s=null,nf=!1,(e&8)!==0&&(e|=e&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=e;0<o;){var l=31-Ie(o),u=1<<l;e|=t[l],o&=~u}return oa=e,Tr(),i}function Cm(t,e){Dt=null,N.H=Hs,e===_o||e===cu?(e=Gh(),re=3):e===cd?(e=Gh(),re=4):re=e===Ud?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,On=e,qt===null&&(Ee=1,zu(t,r(e,t.current)))}function jm(){var t=Mn.current;return t===null?!0:(Xt&4194048)===Xt?Xn===null:(Xt&62914560)===Xt||(Xt&536870912)!==0?t===Xn:!1}function Mm(){var t=N.H;return N.H=Hs,t===null?Hs:t}function Lm(){var t=N.A;return N.A=Tx,t}function Bu(){Ee=4,qa||(Xt&4194048)!==Xt&&Mn.current!==null||(Co=!0),(Ya&134217727)===0&&(Ur&134217727)===0||fe===null||Xa(fe,Xt,Rn,!1)}function lf(t,e,i){var o=ne;ne|=2;var l=Mm(),u=Lm();(fe!==t||Xt!==e)&&(Du=null,Lo(t,e)),e=!1;var g=Ee;t:do try{if(re!==0&&qt!==null){var _=qt,C=On;switch(re){case 8:sf(),g=6;break t;case 3:case 2:case 9:case 6:Mn.current===null&&(e=!0);var H=re;if(re=0,On=null,Oo(t,_,C,H),i&&Co){g=0;break t}break;default:H=re,re=0,On=null,Oo(t,_,C,H)}}Cx(),g=Ee;break}catch(I){Cm(t,I)}while(!0);return e&&t.shellSuspendCounter++,si=ji=null,ne=o,N.H=l,N.A=u,qt===null&&(fe=null,Xt=0,Tr()),g}function Cx(){for(;qt!==null;)Om(qt)}function jx(t,e){var i=ne;ne|=2;var o=Mm(),l=Lm();fe!==t||Xt!==e?(Du=null,Ru=$e()+500,Lo(t,e)):Co=pe(t,e);t:do try{if(re!==0&&qt!==null){e=qt;var u=On;e:switch(re){case 1:re=0,On=null,Oo(t,e,u,1);break;case 2:case 9:if(qh(u)){re=0,On=null,Rm(e);break}e=function(){re!==2&&re!==9||fe!==t||(re=7),Li(t)},u.then(e,e);break t;case 3:re=7;break t;case 4:re=5;break t;case 7:qh(u)?(re=0,On=null,Rm(e)):(re=0,On=null,Oo(t,e,u,7));break;case 5:var g=null;switch(qt.tag){case 26:g=qt.memoizedState;case 5:case 27:var _=qt;if(g?v0(g):_.stateNode.complete){re=0,On=null;var C=_.sibling;if(C!==null)qt=C;else{var H=_.return;H!==null?(qt=H,Nu(H)):qt=null}break e}}re=0,On=null,Oo(t,e,u,5);break;case 6:re=0,On=null,Oo(t,e,u,6);break;case 8:sf(),Ee=6;break t;default:throw Error(h(462))}}Mx();break}catch(I){Cm(t,I)}while(!0);return si=ji=null,N.H=o,N.A=l,ne=i,qt!==null?0:(fe=null,Xt=0,Tr(),Ee)}function Mx(){for(;qt!==null&&!Ir();)Om(qt)}function Om(t){var e=nm(t.alternate,t,oa);t.memoizedProps=t.pendingProps,e===null?Nu(t):qt=e}function Rm(t){var e=t,i=e.alternate;switch(e.tag){case 15:case 0:e=Qp(i,e,e.pendingProps,e.type,void 0,Xt);break;case 11:e=Qp(i,e,e.pendingProps,e.type.render,e.ref,Xt);break;case 5:wd(e);default:am(i,e),e=qt=zs(e,oa),e=nm(i,e,oa)}t.memoizedProps=t.pendingProps,e===null?Nu(t):qt=e}function Oo(t,e,i,o){si=ji=null,wd(e),bo=null,Ls=0;var l=e.return;try{if(vx(t,l,e,i,Xt)){Ee=1,zu(t,r(i,t.current)),qt=null;return}}catch(u){if(l!==null)throw qt=l,u;Ee=1,zu(t,r(i,t.current)),qt=null;return}e.flags&32768?(Pt||o===1?t=!0:Co||(Xt&536870912)!==0?t=!1:(qa=t=!0,(o===2||o===9||o===3||o===6)&&(o=Mn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Dm(e,t)):Nu(e)}function Nu(t){var e=t;do{if((e.flags&32768)!==0){Dm(e,qa);return}t=e.return;var i=bx(e.alternate,e,oa);if(i!==null){qt=i;return}if(e=e.sibling,e!==null){qt=e;return}qt=e=t}while(e!==null);Ee===0&&(Ee=5)}function Dm(t,e){do{var i=wx(t.alternate,t);if(i!==null){i.flags&=32767,qt=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!e&&(t=t.sibling,t!==null)){qt=t;return}qt=t=i}while(t!==null);Ee=6,qt=null}function km(t,e,i,o,l,u,g,_,C){t.cancelPendingCommit=null;do Uu();while(Pe!==0);if((ne&6)!==0)throw Error(h(327));if(e!==null){if(e===t.current)throw Error(h(177));if(u=e.lanes|e.childLanes,u|=ho,Yc(t,i,u,g,_,C),t===fe&&(qt=fe=null,Xt=0),Mo=e,Va=t,sa=i,af=u,rf=l,zm=o,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Dx(pi,function(){return Zm(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||o){o=N.T,N.T=null,l=it.p,it.p=2,g=ne,ne|=4;try{Sx(t,e,i)}finally{ne=g,it.p=l,N.T=o}}Pe=1,Bm(),Nm(),Um()}}function Bm(){if(Pe===1){Pe=0;var t=Va,e=Mo,i=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||i){i=N.T,N.T=null;var o=it.p;it.p=2;var l=ne;ne|=4;try{gm(e,t);var u=_f,g=_r(t.containerInfo),_=u.focusedElem,C=u.selectionRange;if(g!==_&&_&&_.ownerDocument&&lo(_.ownerDocument.documentElement,_)){if(C!==null&&wi(_)){var H=C.start,I=C.end;if(I===void 0&&(I=H),"selectionStart"in _)_.selectionStart=H,_.selectionEnd=Math.min(I,_.value.length);else{var F=_.ownerDocument||document,P=F&&F.defaultView||window;if(P.getSelection){var Y=P.getSelection(),gt=_.textContent.length,At=Math.min(C.start,gt),ce=C.end===void 0?At:Math.min(C.end,gt);!Y.extend&&At>ce&&(g=ce,ce=At,At=g);var k=yr(_,At),D=yr(_,ce);if(k&&D&&(Y.rangeCount!==1||Y.anchorNode!==k.node||Y.anchorOffset!==k.offset||Y.focusNode!==D.node||Y.focusOffset!==D.offset)){var U=F.createRange();U.setStart(k.node,k.offset),Y.removeAllRanges(),At>ce?(Y.addRange(U),Y.extend(D.node,D.offset)):(U.setEnd(D.node,D.offset),Y.addRange(U))}}}}for(F=[],Y=_;Y=Y.parentNode;)Y.nodeType===1&&F.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof _.focus=="function"&&_.focus(),_=0;_<F.length;_++){var K=F[_];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}Qu=!!yf,_f=yf=null}finally{ne=l,it.p=o,N.T=i}}t.current=e,Pe=2}}function Nm(){if(Pe===2){Pe=0;var t=Va,e=Mo,i=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||i){i=N.T,N.T=null;var o=it.p;it.p=2;var l=ne;ne|=4;try{dm(t,e.alternate,e)}finally{ne=l,it.p=o,N.T=i}}Pe=3}}function Um(){if(Pe===4||Pe===3){Pe=0,Kr();var t=Va,e=Mo,i=sa,o=zm;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Pe=5:(Pe=0,Mo=Va=null,Hm(t,t.pendingLanes));var l=t.pendingLanes;if(l===0&&(Ga=null),_t(i),e=e.stateNode,Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(Nn,e,void 0,(e.current.flags&128)===128)}catch{}if(o!==null){e=N.T,l=it.p,it.p=2,N.T=null;try{for(var u=t.onRecoverableError,g=0;g<o.length;g++){var _=o[g];u(_.value,{componentStack:_.stack})}}finally{N.T=e,it.p=l}}(sa&3)!==0&&Uu(),Li(t),l=t.pendingLanes,(i&261930)!==0&&(l&42)!==0?t===of?Is++:(Is=0,of=t):Is=0,Ks(0)}}function Hm(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,js(e)))}function Uu(){return Bm(),Nm(),Um(),Zm()}function Zm(){if(Pe!==5)return!1;var t=Va,e=af;af=0;var i=_t(sa),o=N.T,l=it.p;try{it.p=32>i?32:i,N.T=null,i=rf,rf=null;var u=Va,g=sa;if(Pe=0,Mo=Va=null,sa=0,(ne&6)!==0)throw Error(h(331));var _=ne;if(ne|=4,bm(u.current),vm(u,u.current,g,i),ne=_,Ks(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(Nn,u)}catch{}return!0}finally{it.p=l,N.T=o,Hm(t,e)}}function Pm(t,e,i){e=r(i,e),e=Nd(t.stateNode,e,2),t=Ua(t,e,2),t!==null&&(xt(t,2),Li(t))}function oe(t,e,i){if(t.tag===3)Pm(t,t,i);else for(;e!==null;){if(e.tag===3){Pm(e,t,i);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ga===null||!Ga.has(o))){t=r(i,t),i=qp(2),o=Ua(e,i,2),o!==null&&(Yp(i,o,e,t),xt(o,2),Li(o));break}}e=e.return}}function uf(t,e,i){var o=t.pingCache;if(o===null){o=t.pingCache=new Ex;var l=new Set;o.set(e,l)}else l=o.get(e),l===void 0&&(l=new Set,o.set(e,l));l.has(i)||(tf=!0,l.add(i),t=Lx.bind(null,t,e,i),e.then(t,t))}function Lx(t,e,i){var o=t.pingCache;o!==null&&o.delete(e),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,fe===t&&(Xt&i)===i&&(Ee===4||Ee===3&&(Xt&62914560)===Xt&&300>$e()-Ou?(ne&2)===0&&Lo(t,0):ef|=i,jo===Xt&&(jo=0)),Li(t)}function qm(t,e){e===0&&(e=be()),t=Gn(t,e),t!==null&&(xt(t,e),Li(t))}function Ox(t){var e=t.memoizedState,i=0;e!==null&&(i=e.retryLane),qm(t,i)}function Rx(t,e){var i=0;switch(t.tag){case 31:case 13:var o=t.stateNode,l=t.memoizedState;l!==null&&(i=l.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(h(314))}o!==null&&o.delete(e),qm(t,i)}function Dx(t,e){return pa(t,e)}var Hu=null,Ro=null,cf=!1,Zu=!1,df=!1,$a=0;function Li(t){t!==Ro&&t.next===null&&(Ro===null?Hu=Ro=t:Ro=Ro.next=t),Zu=!0,cf||(cf=!0,Bx())}function Ks(t,e){if(!df&&Zu){df=!0;do for(var i=!1,o=Hu;o!==null;){if(t!==0){var l=o.pendingLanes;if(l===0)var u=0;else{var g=o.suspendedLanes,_=o.pingedLanes;u=(1<<31-Ie(42|t)+1)-1,u&=l&~(g&~_),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(i=!0,Xm(o,u))}else u=Xt,u=It(o,o===fe?u:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(u&3)===0||pe(o,u)||(i=!0,Xm(o,u));o=o.next}while(i);df=!1}}function kx(){Ym()}function Ym(){Zu=cf=!1;var t=0;$a!==0&&Xx()&&(t=$a);for(var e=$e(),i=null,o=Hu;o!==null;){var l=o.next,u=Gm(o,e);u===0?(o.next=null,i===null?Hu=l:i.next=l,l===null&&(Ro=i)):(i=o,(t!==0||(u&3)!==0)&&(Zu=!0)),o=l}Pe!==0&&Pe!==5||Ks(t),$a!==0&&($a=0)}function Gm(t,e){for(var i=t.suspendedLanes,o=t.pingedLanes,l=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var g=31-Ie(u),_=1<<g,C=l[g];C===-1?((_&i)===0||(_&o)!==0)&&(l[g]=Gt(_,e)):C<=e&&(t.expiredLanes|=_),u&=~_}if(e=fe,i=Xt,i=It(t,t===e?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,i===0||t===e&&(re===2||re===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ni(o),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||pe(t,i)){if(e=i&-i,e===t.callbackPriority)return e;switch(o!==null&&Ni(o),_t(i)){case 2:case 8:i=ir;break;case 32:i=pi;break;case 268435456:i=Wn;break;default:i=pi}return o=Vm.bind(null,t),i=pa(i,o),t.callbackPriority=e,t.callbackNode=i,e}return o!==null&&o!==null&&Ni(o),t.callbackPriority=2,t.callbackNode=null,2}function Vm(t,e){if(Pe!==0&&Pe!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(Uu()&&t.callbackNode!==i)return null;var o=Xt;return o=It(t,t===fe?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Em(t,o,e),Gm(t,$e()),t.callbackNode!=null&&t.callbackNode===i?Vm.bind(null,t):null)}function Xm(t,e){if(Uu())return null;Em(t,e,!0)}function Bx(){Ix(function(){(ne&6)!==0?pa(Bn,kx):Ym()})}function ff(){if($a===0){var t=vo;t===0&&(t=Zi,Zi<<=1,(Zi&261888)===0&&(Zi=256)),$a=t}return $a}function $m(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:wa(""+t)}function Im(t,e){var i=e.ownerDocument.createElement("input");return i.name=e.name,i.value=e.value,t.id&&i.setAttribute("form",t.id),e.parentNode.insertBefore(i,e),t=new FormData(t),i.parentNode.removeChild(i),t}function Nx(t,e,i,o,l){if(e==="submit"&&i&&i.stateNode===l){var u=$m((l[qe]||null).action),g=o.submitter;g&&(e=(e=g[qe]||null)?$m(e.formAction):g.getAttribute("formAction"),e!==null&&(u=e,g=null));var _=new eo("action","action",null,o,l);t.push({event:_,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if($a!==0){var C=g?Im(l,g):new FormData(l);Ld(i,{pending:!0,data:C,method:l.method,action:u},null,C)}}else typeof u=="function"&&(_.preventDefault(),C=g?Im(l,g):new FormData(l),Ld(i,{pending:!0,data:C,method:l.method,action:u},u,C))},currentTarget:l}]})}}for(var hf=0;hf<Ti.length;hf++){var pf=Ti[hf],Ux=pf.toLowerCase(),Hx=pf[0].toUpperCase()+pf.slice(1);mn(Ux,"on"+Hx)}mn(wr,"onAnimationEnd"),mn(au,"onAnimationIteration"),mn(Sr,"onAnimationStart"),mn("dblclick","onDoubleClick"),mn("focusin","onFocus"),mn("focusout","onBlur"),mn(nd,"onTransitionRun"),mn(ru,"onTransitionStart"),mn(id,"onTransitionCancel"),mn(Ra,"onTransitionEnd"),vi("onMouseEnter",["mouseout","mouseover"]),vi("onMouseLeave",["mouseout","mouseover"]),vi("onPointerEnter",["pointerout","pointerover"]),vi("onPointerLeave",["pointerout","pointerover"]),Yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Yi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qs));function Km(t,e){e=(e&4)!==0;for(var i=0;i<t.length;i++){var o=t[i],l=o.event;o=o.listeners;t:{var u=void 0;if(e)for(var g=o.length-1;0<=g;g--){var _=o[g],C=_.instance,H=_.currentTarget;if(_=_.listener,C!==u&&l.isPropagationStopped())break t;u=_,l.currentTarget=H;try{u(l)}catch(I){zr(I)}l.currentTarget=null,u=C}else for(g=0;g<o.length;g++){if(_=o[g],C=_.instance,H=_.currentTarget,_=_.listener,C!==u&&l.isPropagationStopped())break t;u=_,l.currentTarget=H;try{u(l)}catch(I){zr(I)}l.currentTarget=null,u=C}}}}function Yt(t,e){var i=e[gi];i===void 0&&(i=e[gi]=new Set);var o=t+"__bubble";i.has(o)||(Qm(e,t,2,!1),i.add(o))}function mf(t,e,i){var o=0;e&&(o|=4),Qm(i,t,o,e)}var Pu="_reactListening"+Math.random().toString(36).slice(2);function gf(t){if(!t[Pu]){t[Pu]=!0,Ul.forEach(function(i){i!=="selectionchange"&&(Zx.has(i)||mf(i,!1,t),mf(i,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pu]||(e[Pu]=!0,mf("selectionchange",!1,e))}}function Qm(t,e,i,o){switch(T0(e)){case 2:var l=pv;break;case 8:l=mv;break;default:l=Lf}i=l.bind(null,e,i,t),l=void 0,!cr||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),o?l!==void 0?t.addEventListener(e,i,{capture:!0,passive:l}):t.addEventListener(e,i,!0):l!==void 0?t.addEventListener(e,i,{passive:l}):t.addEventListener(e,i,!1)}function xf(t,e,i,o,l){var u=o;if((e&1)===0&&(e&2)===0&&o!==null)t:for(;;){if(o===null)return;var g=o.tag;if(g===3||g===4){var _=o.stateNode.containerInfo;if(_===l)break;if(g===4)for(g=o.return;g!==null;){var C=g.tag;if((C===3||C===4)&&g.stateNode.containerInfo===l)return;g=g.return}for(;_!==null;){if(g=qi(_),g===null)return;if(C=g.tag,C===5||C===6||C===26||C===27){o=u=g;continue t}_=_.parentNode}}o=o.return}hs(function(){var H=u,I=ur(i),F=[];t:{var P=ou.get(t);if(P!==void 0){var Y=eo,gt=t;switch(t){case"keypress":if(dr(i)===0)break t;case"keydown":case"keyup":Y=Xl;break;case"focusin":gt="focus",Y=gs;break;case"focusout":gt="blur",Y=gs;break;case"beforeblur":case"afterblur":Y=gs;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=Pl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=Vc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=Qc;break;case wr:case au:case Sr:Y=xs;break;case Ra:Y=Kl;break;case"scroll":case"scrollend":Y=Vt;break;case"wheel":Y=$i;break;case"copy":case"cut":case"paste":Y=Zn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=$l;break;case"toggle":case"beforetoggle":Y=pr}var At=(e&4)!==0,ce=!At&&(t==="scroll"||t==="scrollend"),k=At?P!==null?P+"Capture":null:P;At=[];for(var D=H,U;D!==null;){var K=D;if(U=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||U===null||k===null||(K=Vi(D,k),K!=null&&At.push(Fs(D,K,U))),ce)break;D=D.return}0<At.length&&(P=new Y(P,gt,null,i,I),F.push({event:P,listeners:At}))}}if((e&7)===0){t:{if(P=t==="mouseover"||t==="pointerover",Y=t==="mouseout"||t==="pointerout",P&&i!==to&&(gt=i.relatedTarget||i.fromElement)&&(qi(gt)||gt[Pi]))break t;if((Y||P)&&(P=I.window===I?I:(P=I.ownerDocument)?P.defaultView||P.parentWindow:window,Y?(gt=i.relatedTarget||i.toElement,Y=H,gt=gt?qi(gt):null,gt!==null&&(ce=y(gt),At=gt.tag,gt!==ce||At!==5&&At!==27&&At!==6)&&(gt=null)):(Y=null,gt=H),Y!==gt)){if(At=Pl,K="onMouseLeave",k="onMouseEnter",D="mouse",(t==="pointerout"||t==="pointerover")&&(At=$l,K="onPointerLeave",k="onPointerEnter",D="pointer"),ce=Y==null?P:xi(Y),U=gt==null?P:xi(gt),P=new At(K,D+"leave",Y,i,I),P.target=ce,P.relatedTarget=U,K=null,qi(I)===H&&(At=new At(k,D+"enter",gt,i,I),At.target=U,At.relatedTarget=ce,K=At),ce=K,Y&&gt)e:{for(At=Px,k=Y,D=gt,U=0,K=k;K;K=At(K))U++;K=0;for(var St=D;St;St=At(St))K++;for(;0<U-K;)k=At(k),U--;for(;0<K-U;)D=At(D),K--;for(;U--;){if(k===D||D!==null&&k===D.alternate){At=k;break e}k=At(k),D=At(D)}At=null}else At=null;Y!==null&&Fm(F,P,Y,At,!1),gt!==null&&ce!==null&&Fm(F,ce,gt,At,!0)}}t:{if(P=H?xi(H):window,Y=P.nodeName&&P.nodeName.toLowerCase(),Y==="select"||Y==="input"&&P.type==="file")var te=vr;else if(Pn(P))if(Wl)te=ed;else{te=td;var yt=ai}else Y=P.nodeName,!Y||Y.toLowerCase()!=="input"||P.type!=="checkbox"&&P.type!=="radio"?H&&lr(H.elementType)&&(te=vr):te=ja;if(te&&(te=te(t,H))){Jl(F,te,i,I);break t}yt&&yt(t,P,H),t==="focusout"&&H&&P.type==="number"&&H.memoizedProps.value!=null&&ei(P,"number",P.value)}switch(yt=H?xi(H):window,t){case"focusin":(Pn(yt)||yt.contentEditable==="true")&&(Si=yt,co=H,br=null);break;case"focusout":br=co=Si=null;break;case"mousedown":La=!0;break;case"contextmenu":case"mouseup":case"dragend":La=!1,nu(F,i,I);break;case"selectionchange":if(uo)break;case"keydown":case"keyup":nu(F,i,I)}var Bt;if(io)t:{switch(t){case"compositionstart":var $t="onCompositionStart";break t;case"compositionend":$t="onCompositionEnd";break t;case"compositionupdate":$t="onCompositionUpdate";break t}$t=void 0}else Ea?Fl(t,i)&&($t="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&($t="onCompositionStart");$t&&(ao&&i.locale!=="ko"&&(Ea||$t!=="onCompositionStart"?$t==="onCompositionEnd"&&Ea&&(Bt=_i()):(Hn=I,Xi="value"in Hn?Hn.value:Hn.textContent,Ea=!0)),yt=qu(H,$t),0<yt.length&&($t=new vs($t,t,null,i,I),F.push({event:$t,listeners:yt}),Bt?$t.data=Bt:(Bt=ws(i),Bt!==null&&($t.data=Bt)))),(Bt=Jc?jn(t,i):Aa(t,i))&&($t=qu(H,"onBeforeInput"),0<$t.length&&(yt=new vs("onBeforeInput","beforeinput",null,i,I),F.push({event:yt,listeners:$t}),yt.data=Bt)),Nx(F,t,H,i,I)}Km(F,e)})}function Fs(t,e,i){return{instance:t,listener:e,currentTarget:i}}function qu(t,e){for(var i=e+"Capture",o=[];t!==null;){var l=t,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=Vi(t,i),l!=null&&o.unshift(Fs(t,l,u)),l=Vi(t,e),l!=null&&o.push(Fs(t,l,u))),t.tag===3)return o;t=t.return}return[]}function Px(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Fm(t,e,i,o,l){for(var u=e._reactName,g=[];i!==null&&i!==o;){var _=i,C=_.alternate,H=_.stateNode;if(_=_.tag,C!==null&&C===o)break;_!==5&&_!==26&&_!==27||H===null||(C=H,l?(H=Vi(i,u),H!=null&&g.unshift(Fs(i,H,C))):l||(H=Vi(i,u),H!=null&&g.push(Fs(i,H,C)))),i=i.return}g.length!==0&&t.push({event:e,listeners:g})}var qx=/\r\n?/g,Yx=/\u0000|\uFFFD/g;function Jm(t){return(typeof t=="string"?t:""+t).replace(qx,`
`).replace(Yx,"")}function Wm(t,e){return e=Jm(e),Jm(t)===e}function ue(t,e,i,o,l,u){switch(i){case"children":typeof o=="string"?e==="body"||e==="textarea"&&o===""||Un(t,o):(typeof o=="number"||typeof o=="bigint")&&e!=="body"&&Un(t,""+o);break;case"className":se(t,"class",o);break;case"tabIndex":se(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":se(t,i,o);break;case"style":Jr(t,o,u);break;case"data":if(e!=="object"){se(t,"data",o);break}case"src":case"href":if(o===""&&(e!=="a"||i!=="href")){t.removeAttribute(i);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(i);break}o=wa(""+o),t.setAttribute(i,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(i==="formAction"?(e!=="input"&&ue(t,e,"name",l.name,l,null),ue(t,e,"formEncType",l.formEncType,l,null),ue(t,e,"formMethod",l.formMethod,l,null),ue(t,e,"formTarget",l.formTarget,l,null)):(ue(t,e,"encType",l.encType,l,null),ue(t,e,"method",l.method,l,null),ue(t,e,"target",l.target,l,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(i);break}o=wa(""+o),t.setAttribute(i,o);break;case"onClick":o!=null&&(t.onclick=hn);break;case"onScroll":o!=null&&Yt("scroll",t);break;case"onScrollEnd":o!=null&&Yt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(h(61));if(i=o.__html,i!=null){if(l.children!=null)throw Error(h(60));t.innerHTML=i}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}i=wa(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(i,""+o):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":o===!0?t.setAttribute(i,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(i,o):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(i,o):t.removeAttribute(i);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(i):t.setAttribute(i,o);break;case"popover":Yt("beforetoggle",t),Yt("toggle",t),Zt(t,"popover",o);break;case"xlinkActuate":fn(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":fn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":fn(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":fn(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":fn(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":fn(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":fn(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":fn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":fn(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Zt(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=Wr.get(i)||i,Zt(t,i,o))}}function vf(t,e,i,o,l,u){switch(i){case"style":Jr(t,o,u);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(h(61));if(i=o.__html,i!=null){if(l.children!=null)throw Error(h(60));t.innerHTML=i}}break;case"children":typeof o=="string"?Un(t,o):(typeof o=="number"||typeof o=="bigint")&&Un(t,""+o);break;case"onScroll":o!=null&&Yt("scroll",t);break;case"onScrollEnd":o!=null&&Yt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=hn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Hl.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(l=i.endsWith("Capture"),e=i.slice(2,l?i.length-7:void 0),u=t[qe]||null,u=u!=null?u[i]:null,typeof u=="function"&&t.removeEventListener(e,u,l),typeof o=="function")){typeof u!="function"&&u!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(e,o,l);break t}i in t?t[i]=o:o===!0?t.setAttribute(i,""):Zt(t,i,o)}}}function Je(t,e,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Yt("error",t),Yt("load",t);var o=!1,l=!1,u;for(u in i)if(i.hasOwnProperty(u)){var g=i[u];if(g!=null)switch(u){case"src":o=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,e));default:ue(t,e,u,g,i,null)}}l&&ue(t,e,"srcSet",i.srcSet,i,null),o&&ue(t,e,"src",i.src,i,null);return;case"input":Yt("invalid",t);var _=u=g=l=null,C=null,H=null;for(o in i)if(i.hasOwnProperty(o)){var I=i[o];if(I!=null)switch(o){case"name":l=I;break;case"type":g=I;break;case"checked":C=I;break;case"defaultChecked":H=I;break;case"value":u=I;break;case"defaultValue":_=I;break;case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(h(137,e));break;default:ue(t,e,o,I,i,null)}}sr(t,u,_,C,H,g,l,!1);return;case"select":Yt("invalid",t),o=g=u=null;for(l in i)if(i.hasOwnProperty(l)&&(_=i[l],_!=null))switch(l){case"value":u=_;break;case"defaultValue":g=_;break;case"multiple":o=_;default:ue(t,e,l,_,i,null)}e=u,i=g,t.multiple=!!o,e!=null?de(t,!!o,e,!1):i!=null&&de(t,!!o,i,!0);return;case"textarea":Yt("invalid",t),u=l=o=null;for(g in i)if(i.hasOwnProperty(g)&&(_=i[g],_!=null))switch(g){case"value":o=_;break;case"defaultValue":l=_;break;case"children":u=_;break;case"dangerouslySetInnerHTML":if(_!=null)throw Error(h(91));break;default:ue(t,e,g,_,i,null)}_a(t,o,l,u);return;case"option":for(C in i)if(i.hasOwnProperty(C)&&(o=i[C],o!=null))switch(C){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:ue(t,e,C,o,i,null)}return;case"dialog":Yt("beforetoggle",t),Yt("toggle",t),Yt("cancel",t),Yt("close",t);break;case"iframe":case"object":Yt("load",t);break;case"video":case"audio":for(o=0;o<Qs.length;o++)Yt(Qs[o],t);break;case"image":Yt("error",t),Yt("load",t);break;case"details":Yt("toggle",t);break;case"embed":case"source":case"link":Yt("error",t),Yt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(H in i)if(i.hasOwnProperty(H)&&(o=i[H],o!=null))switch(H){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,e));default:ue(t,e,H,o,i,null)}return;default:if(lr(e)){for(I in i)i.hasOwnProperty(I)&&(o=i[I],o!==void 0&&vf(t,e,I,o,i,void 0));return}}for(_ in i)i.hasOwnProperty(_)&&(o=i[_],o!=null&&ue(t,e,_,o,i,null))}function Gx(t,e,i,o){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,g=null,_=null,C=null,H=null,I=null;for(Y in i){var F=i[Y];if(i.hasOwnProperty(Y)&&F!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":C=F;default:o.hasOwnProperty(Y)||ue(t,e,Y,null,o,F)}}for(var P in o){var Y=o[P];if(F=i[P],o.hasOwnProperty(P)&&(Y!=null||F!=null))switch(P){case"type":u=Y;break;case"name":l=Y;break;case"checked":H=Y;break;case"defaultChecked":I=Y;break;case"value":g=Y;break;case"defaultValue":_=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(h(137,e));break;default:Y!==F&&ue(t,e,P,Y,o,F)}}cs(t,g,_,C,H,I,u,l);return;case"select":Y=g=_=P=null;for(u in i)if(C=i[u],i.hasOwnProperty(u)&&C!=null)switch(u){case"value":break;case"multiple":Y=C;default:o.hasOwnProperty(u)||ue(t,e,u,null,o,C)}for(l in o)if(u=o[l],C=i[l],o.hasOwnProperty(l)&&(u!=null||C!=null))switch(l){case"value":P=u;break;case"defaultValue":_=u;break;case"multiple":g=u;default:u!==C&&ue(t,e,l,u,o,C)}e=_,i=g,o=Y,P!=null?de(t,!!i,P,!1):!!o!=!!i&&(e!=null?de(t,!!i,e,!0):de(t,!!i,i?[]:"",!1));return;case"textarea":Y=P=null;for(_ in i)if(l=i[_],i.hasOwnProperty(_)&&l!=null&&!o.hasOwnProperty(_))switch(_){case"value":break;case"children":break;default:ue(t,e,_,null,o,l)}for(g in o)if(l=o[g],u=i[g],o.hasOwnProperty(g)&&(l!=null||u!=null))switch(g){case"value":P=l;break;case"defaultValue":Y=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(h(91));break;default:l!==u&&ue(t,e,g,l,o,u)}yi(t,P,Y);return;case"option":for(var gt in i)if(P=i[gt],i.hasOwnProperty(gt)&&P!=null&&!o.hasOwnProperty(gt))switch(gt){case"selected":t.selected=!1;break;default:ue(t,e,gt,null,o,P)}for(C in o)if(P=o[C],Y=i[C],o.hasOwnProperty(C)&&P!==Y&&(P!=null||Y!=null))switch(C){case"selected":t.selected=P&&typeof P!="function"&&typeof P!="symbol";break;default:ue(t,e,C,P,o,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var At in i)P=i[At],i.hasOwnProperty(At)&&P!=null&&!o.hasOwnProperty(At)&&ue(t,e,At,null,o,P);for(H in o)if(P=o[H],Y=i[H],o.hasOwnProperty(H)&&P!==Y&&(P!=null||Y!=null))switch(H){case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(h(137,e));break;default:ue(t,e,H,P,o,Y)}return;default:if(lr(e)){for(var ce in i)P=i[ce],i.hasOwnProperty(ce)&&P!==void 0&&!o.hasOwnProperty(ce)&&vf(t,e,ce,void 0,o,P);for(I in o)P=o[I],Y=i[I],!o.hasOwnProperty(I)||P===Y||P===void 0&&Y===void 0||vf(t,e,I,P,o,Y);return}}for(var k in i)P=i[k],i.hasOwnProperty(k)&&P!=null&&!o.hasOwnProperty(k)&&ue(t,e,k,null,o,P);for(F in o)P=o[F],Y=i[F],!o.hasOwnProperty(F)||P===Y||P==null&&Y==null||ue(t,e,F,P,o,Y)}function t0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Vx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,i=performance.getEntriesByType("resource"),o=0;o<i.length;o++){var l=i[o],u=l.transferSize,g=l.initiatorType,_=l.duration;if(u&&_&&t0(g)){for(g=0,_=l.responseEnd,o+=1;o<i.length;o++){var C=i[o],H=C.startTime;if(H>_)break;var I=C.transferSize,F=C.initiatorType;I&&t0(F)&&(C=C.responseEnd,g+=I*(C<_?1:(_-H)/(C-H)))}if(--o,e+=8*(u+g)/(l.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var yf=null,_f=null;function Yu(t){return t.nodeType===9?t:t.ownerDocument}function e0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function n0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function bf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wf=null;function Xx(){var t=window.event;return t&&t.type==="popstate"?t===wf?!1:(wf=t,!0):(wf=null,!1)}var i0=typeof setTimeout=="function"?setTimeout:void 0,$x=typeof clearTimeout=="function"?clearTimeout:void 0,a0=typeof Promise=="function"?Promise:void 0,Ix=typeof queueMicrotask=="function"?queueMicrotask:typeof a0<"u"?function(t){return a0.resolve(null).then(t).catch(Kx)}:i0;function Kx(t){setTimeout(function(){throw t})}function Ia(t){return t==="head"}function r0(t,e){var i=e,o=0;do{var l=i.nextSibling;if(t.removeChild(i),l&&l.nodeType===8)if(i=l.data,i==="/$"||i==="/&"){if(o===0){t.removeChild(l),No(e);return}o--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")o++;else if(i==="html")Js(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,Js(i);for(var u=i.firstChild;u;){var g=u.nextSibling,_=u.nodeName;u[ar]||_==="SCRIPT"||_==="STYLE"||_==="LINK"&&u.rel.toLowerCase()==="stylesheet"||i.removeChild(u),u=g}}else i==="body"&&Js(t.ownerDocument.body);i=l}while(i);No(e)}function o0(t,e){var i=t;t=0;do{var o=i.nextSibling;if(i.nodeType===1?e?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(e?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),o&&o.nodeType===8)if(i=o.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=o}while(i)}function Sf(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var i=e;switch(e=e.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Sf(i),os(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function Qx(t,e,i,o){for(;t.nodeType===1;){var l=i;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ar])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=$n(t.nextSibling),t===null)break}return null}function Fx(t,e,i){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=$n(t.nextSibling),t===null))return null;return t}function s0(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=$n(t.nextSibling),t===null))return null;return t}function zf(t){return t.data==="$?"||t.data==="$~"}function Tf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Jx(t,e){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||i.readyState!=="loading")e();else{var o=function(){e(),i.removeEventListener("DOMContentLoaded",o)};i.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function $n(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Ef=null;function l0(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(e===0)return $n(t.nextSibling);e--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||e++}t=t.nextSibling}return null}function u0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(e===0)return t;e--}else i!=="/$"&&i!=="/&"||e++}t=t.previousSibling}return null}function c0(t,e,i){switch(e=Yu(i),t){case"html":if(t=e.documentElement,!t)throw Error(h(452));return t;case"head":if(t=e.head,!t)throw Error(h(453));return t;case"body":if(t=e.body,!t)throw Error(h(454));return t;default:throw Error(h(451))}}function Js(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);os(t)}var In=new Map,d0=new Set;function Gu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var la=it.d;it.d={f:Wx,r:tv,D:ev,C:nv,L:iv,m:av,X:ov,S:rv,M:sv};function Wx(){var t=la.f(),e=ku();return t||e}function tv(t){var e=xa(t);e!==null&&e.tag===5&&e.type==="form"?Cp(e):la.r(t)}var Do=typeof document>"u"?null:document;function f0(t,e,i){var o=Do;if(o&&typeof e=="string"&&e){var l=me(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof i=="string"&&(l+='[crossorigin="'+i+'"]'),d0.has(l)||(d0.add(l),t={rel:t,crossOrigin:i,href:e},o.querySelector(l)===null&&(e=o.createElement("link"),Je(e,"link",t),Oe(e),o.head.appendChild(e)))}}function ev(t){la.D(t),f0("dns-prefetch",t,null)}function nv(t,e){la.C(t,e),f0("preconnect",t,e)}function iv(t,e,i){la.L(t,e,i);var o=Do;if(o&&t&&e){var l='link[rel="preload"][as="'+me(e)+'"]';e==="image"&&i&&i.imageSrcSet?(l+='[imagesrcset="'+me(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(l+='[imagesizes="'+me(i.imageSizes)+'"]')):l+='[href="'+me(t)+'"]';var u=l;switch(e){case"style":u=ko(t);break;case"script":u=Bo(t)}In.has(u)||(t=j({rel:"preload",href:e==="image"&&i&&i.imageSrcSet?void 0:t,as:e},i),In.set(u,t),o.querySelector(l)!==null||e==="style"&&o.querySelector(Ws(u))||e==="script"&&o.querySelector(tl(u))||(e=o.createElement("link"),Je(e,"link",t),Oe(e),o.head.appendChild(e)))}}function av(t,e){la.m(t,e);var i=Do;if(i&&t){var o=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+me(o)+'"][href="'+me(t)+'"]',u=l;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Bo(t)}if(!In.has(u)&&(t=j({rel:"modulepreload",href:t},e),In.set(u,t),i.querySelector(l)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(tl(u)))return}o=i.createElement("link"),Je(o,"link",t),Oe(o),i.head.appendChild(o)}}}function rv(t,e,i){la.S(t,e,i);var o=Do;if(o&&t){var l=va(o).hoistableStyles,u=ko(t);e=e||"default";var g=l.get(u);if(!g){var _={loading:0,preload:null};if(g=o.querySelector(Ws(u)))_.loading=5;else{t=j({rel:"stylesheet",href:t,"data-precedence":e},i),(i=In.get(u))&&Af(t,i);var C=g=o.createElement("link");Oe(C),Je(C,"link",t),C._p=new Promise(function(H,I){C.onload=H,C.onerror=I}),C.addEventListener("load",function(){_.loading|=1}),C.addEventListener("error",function(){_.loading|=2}),_.loading|=4,Vu(g,e,o)}g={type:"stylesheet",instance:g,count:1,state:_},l.set(u,g)}}}function ov(t,e){la.X(t,e);var i=Do;if(i&&t){var o=va(i).hoistableScripts,l=Bo(t),u=o.get(l);u||(u=i.querySelector(tl(l)),u||(t=j({src:t,async:!0},e),(e=In.get(l))&&Cf(t,e),u=i.createElement("script"),Oe(u),Je(u,"link",t),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(l,u))}}function sv(t,e){la.M(t,e);var i=Do;if(i&&t){var o=va(i).hoistableScripts,l=Bo(t),u=o.get(l);u||(u=i.querySelector(tl(l)),u||(t=j({src:t,async:!0,type:"module"},e),(e=In.get(l))&&Cf(t,e),u=i.createElement("script"),Oe(u),Je(u,"link",t),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(l,u))}}function h0(t,e,i,o){var l=(l=ut.current)?Gu(l):null;if(!l)throw Error(h(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(e=ko(i.href),i=va(l).hoistableStyles,o=i.get(e),o||(o={type:"style",instance:null,count:0,state:null},i.set(e,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=ko(i.href);var u=va(l).hoistableStyles,g=u.get(t);if(g||(l=l.ownerDocument||l,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,g),(u=l.querySelector(Ws(t)))&&!u._p&&(g.instance=u,g.state.loading=5),In.has(t)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},In.set(t,i),u||lv(l,t,i,g.state))),e&&o===null)throw Error(h(528,""));return g}if(e&&o!==null)throw Error(h(529,""));return null;case"script":return e=i.async,i=i.src,typeof i=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Bo(i),i=va(l).hoistableScripts,o=i.get(e),o||(o={type:"script",instance:null,count:0,state:null},i.set(e,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,t))}}function ko(t){return'href="'+me(t)+'"'}function Ws(t){return'link[rel="stylesheet"]['+t+"]"}function p0(t){return j({},t,{"data-precedence":t.precedence,precedence:null})}function lv(t,e,i,o){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?o.loading=1:(e=t.createElement("link"),o.preload=e,e.addEventListener("load",function(){return o.loading|=1}),e.addEventListener("error",function(){return o.loading|=2}),Je(e,"link",i),Oe(e),t.head.appendChild(e))}function Bo(t){return'[src="'+me(t)+'"]'}function tl(t){return"script[async]"+t}function m0(t,e,i){if(e.count++,e.instance===null)switch(e.type){case"style":var o=t.querySelector('style[data-href~="'+me(i.href)+'"]');if(o)return e.instance=o,Oe(o),o;var l=j({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Oe(o),Je(o,"style",l),Vu(o,i.precedence,t),e.instance=o;case"stylesheet":l=ko(i.href);var u=t.querySelector(Ws(l));if(u)return e.state.loading|=4,e.instance=u,Oe(u),u;o=p0(i),(l=In.get(l))&&Af(o,l),u=(t.ownerDocument||t).createElement("link"),Oe(u);var g=u;return g._p=new Promise(function(_,C){g.onload=_,g.onerror=C}),Je(u,"link",o),e.state.loading|=4,Vu(u,i.precedence,t),e.instance=u;case"script":return u=Bo(i.src),(l=t.querySelector(tl(u)))?(e.instance=l,Oe(l),l):(o=i,(l=In.get(u))&&(o=j({},i),Cf(o,l)),t=t.ownerDocument||t,l=t.createElement("script"),Oe(l),Je(l,"link",o),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(h(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(o=e.instance,e.state.loading|=4,Vu(o,i.precedence,t));return e.instance}function Vu(t,e,i){for(var o=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=o.length?o[o.length-1]:null,u=l,g=0;g<o.length;g++){var _=o[g];if(_.dataset.precedence===e)u=_;else if(u!==l)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=i.nodeType===9?i.head:i,e.insertBefore(t,e.firstChild))}function Af(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Cf(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Xu=null;function g0(t,e,i){if(Xu===null){var o=new Map,l=Xu=new Map;l.set(i,o)}else l=Xu,o=l.get(i),o||(o=new Map,l.set(i,o));if(o.has(t))return o;for(o.set(t,null),i=i.getElementsByTagName(t),l=0;l<i.length;l++){var u=i[l];if(!(u[ar]||u[Le]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var g=u.getAttribute(e)||"";g=t+g;var _=o.get(g);_?_.push(u):o.set(g,[u])}}return o}function x0(t,e,i){t=t.ownerDocument||t,t.head.insertBefore(i,e==="title"?t.querySelector("head > title"):null)}function uv(t,e,i){if(i===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function v0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function cv(t,e,i,o){if(i.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var l=ko(o.href),u=e.querySelector(Ws(l));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=$u.bind(t),e.then(t,t)),i.state.loading|=4,i.instance=u,Oe(u);return}u=e.ownerDocument||e,o=p0(o),(l=In.get(l))&&Af(o,l),u=u.createElement("link"),Oe(u);var g=u;g._p=new Promise(function(_,C){g.onload=_,g.onerror=C}),Je(u,"link",o),i.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=$u.bind(t),e.addEventListener("load",i),e.addEventListener("error",i))}}var jf=0;function dv(t,e){return t.stylesheets&&t.count===0&&Ku(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var o=setTimeout(function(){if(t.stylesheets&&Ku(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+e);0<t.imgBytes&&jf===0&&(jf=62500*Vx());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ku(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>jf?50:800)+e);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(l)}}:null}function $u(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ku(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Iu=null;function Ku(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Iu=new Map,e.forEach(fv,t),Iu=null,$u.call(t))}function fv(t,e){if(!(e.state.loading&4)){var i=Iu.get(t);if(i)var o=i.get(null);else{i=new Map,Iu.set(t,i);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var g=l[u];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(i.set(g.dataset.precedence,g),o=g)}o&&i.set(null,o)}l=e.instance,g=l.getAttribute("data-precedence"),u=i.get(g)||o,u===o&&i.set(null,l),i.set(g,l),this.count++,o=$u.bind(this),l.addEventListener("load",o),l.addEventListener("error",o),u?u.parentNode.insertBefore(l,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var el={$$typeof:tt,Provider:null,Consumer:null,_currentValue:at,_currentValue2:at,_threadCount:0};function hv(t,e,i,o,l,u,g,_,C){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ga(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ga(0),this.hiddenUpdates=ga(null),this.identifierPrefix=o,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function y0(t,e,i,o,l,u,g,_,C,H,I,F){return t=new hv(t,e,i,g,C,H,I,F,_),e=1,u===!0&&(e|=24),u=an(3,null,null,e),t.current=u,u.stateNode=t,e=sd(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:o,isDehydrated:i,cache:e},dd(u),t}function _0(t){return t?(t=Ii,t):Ii}function b0(t,e,i,o,l,u){l=_0(l),o.context===null?o.context=l:o.pendingContext=l,o=Na(e),o.payload={element:i},u=u===void 0?null:u,u!==null&&(o.callback=u),i=Ua(t,o,e),i!==null&&(wn(i,t,e),Rs(i,t,e))}function w0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<e?i:e}}function Mf(t,e){w0(t,e),(t=t.alternate)&&w0(t,e)}function S0(t){if(t.tag===13||t.tag===31){var e=Gn(t,67108864);e!==null&&wn(e,t,67108864),Mf(t,67108864)}}function z0(t){if(t.tag===13||t.tag===31){var e=Dn();e=dn(e);var i=Gn(t,e);i!==null&&wn(i,t,e),Mf(t,e)}}var Qu=!0;function pv(t,e,i,o){var l=N.T;N.T=null;var u=it.p;try{it.p=2,Lf(t,e,i,o)}finally{it.p=u,N.T=l}}function mv(t,e,i,o){var l=N.T;N.T=null;var u=it.p;try{it.p=8,Lf(t,e,i,o)}finally{it.p=u,N.T=l}}function Lf(t,e,i,o){if(Qu){var l=Of(o);if(l===null)xf(t,e,o,Fu,i),E0(t,o);else if(xv(l,t,e,i,o))o.stopPropagation();else if(E0(t,o),e&4&&-1<gv.indexOf(t)){for(;l!==null;){var u=xa(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var g=ct(u.pendingLanes);if(g!==0){var _=u;for(_.pendingLanes|=2,_.entangledLanes|=2;g;){var C=1<<31-Ie(g);_.entanglements[1]|=C,g&=~C}Li(u),(ne&6)===0&&(Ru=$e()+500,Ks(0))}}break;case 31:case 13:_=Gn(u,2),_!==null&&wn(_,u,2),ku(),Mf(u,2)}if(u=Of(o),u===null&&xf(t,e,o,Fu,i),u===l)break;l=u}l!==null&&o.stopPropagation()}else xf(t,e,o,null,i)}}function Of(t){return t=ur(t),Rf(t)}var Fu=null;function Rf(t){if(Fu=null,t=qi(t),t!==null){var e=y(t);if(e===null)t=null;else{var i=e.tag;if(i===13){if(t=b(e),t!==null)return t;t=null}else if(i===31){if(t=O(e),t!==null)return t;t=null}else if(i===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Fu=t,null}function T0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ma()){case Bn:return 2;case ir:return 8;case pi:case mi:return 32;case Wn:return 268435456;default:return 32}default:return 32}}var Df=!1,Ka=null,Qa=null,Fa=null,nl=new Map,il=new Map,Ja=[],gv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function E0(t,e){switch(t){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":nl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":il.delete(e.pointerId)}}function al(t,e,i,o,l,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:i,eventSystemFlags:o,nativeEvent:u,targetContainers:[l]},e!==null&&(e=xa(e),e!==null&&S0(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function xv(t,e,i,o,l){switch(e){case"focusin":return Ka=al(Ka,t,e,i,o,l),!0;case"dragenter":return Qa=al(Qa,t,e,i,o,l),!0;case"mouseover":return Fa=al(Fa,t,e,i,o,l),!0;case"pointerover":var u=l.pointerId;return nl.set(u,al(nl.get(u)||null,t,e,i,o,l)),!0;case"gotpointercapture":return u=l.pointerId,il.set(u,al(il.get(u)||null,t,e,i,o,l)),!0}return!1}function A0(t){var e=qi(t.target);if(e!==null){var i=y(e);if(i!==null){if(e=i.tag,e===13){if(e=b(i),e!==null){t.blockedOn=e,rs(t.priority,function(){z0(i)});return}}else if(e===31){if(e=O(i),e!==null){t.blockedOn=e,rs(t.priority,function(){z0(i)});return}}else if(e===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ju(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var i=Of(t.nativeEvent);if(i===null){i=t.nativeEvent;var o=new i.constructor(i.type,i);to=o,i.target.dispatchEvent(o),to=null}else return e=xa(i),e!==null&&S0(e),t.blockedOn=i,!1;e.shift()}return!0}function C0(t,e,i){Ju(t)&&i.delete(e)}function vv(){Df=!1,Ka!==null&&Ju(Ka)&&(Ka=null),Qa!==null&&Ju(Qa)&&(Qa=null),Fa!==null&&Ju(Fa)&&(Fa=null),nl.forEach(C0),il.forEach(C0)}function Wu(t,e){t.blockedOn===e&&(t.blockedOn=null,Df||(Df=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,vv)))}var tc=null;function j0(t){tc!==t&&(tc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){tc===t&&(tc=null);for(var e=0;e<t.length;e+=3){var i=t[e],o=t[e+1],l=t[e+2];if(typeof o!="function"){if(Rf(o||i)===null)continue;break}var u=xa(i);u!==null&&(t.splice(e,3),e-=3,Ld(u,{pending:!0,data:l,method:i.method,action:o},o,l))}}))}function No(t){function e(C){return Wu(C,t)}Ka!==null&&Wu(Ka,t),Qa!==null&&Wu(Qa,t),Fa!==null&&Wu(Fa,t),nl.forEach(e),il.forEach(e);for(var i=0;i<Ja.length;i++){var o=Ja[i];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ja.length&&(i=Ja[0],i.blockedOn===null);)A0(i),i.blockedOn===null&&Ja.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(o=0;o<i.length;o+=3){var l=i[o],u=i[o+1],g=l[qe]||null;if(typeof u=="function")g||j0(i);else if(g){var _=null;if(u&&u.hasAttribute("formAction")){if(l=u,g=u[qe]||null)_=g.formAction;else if(Rf(l)!==null)continue}else _=g.action;typeof _=="function"?i[o+1]=_:(i.splice(o,3),o-=3),j0(i)}}}function M0(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(g){return l=g})},focusReset:"manual",scroll:"manual"})}function e(){l!==null&&(l(),l=null),o||setTimeout(i,20)}function i(){if(!o&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(i,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),l!==null&&(l(),l=null)}}}function kf(t){this._internalRoot=t}ec.prototype.render=kf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(h(409));var i=e.current,o=Dn();b0(i,o,t,e,null,null)},ec.prototype.unmount=kf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;b0(t.current,2,null,t,null,null),ku(),e[Pi]=null}};function ec(t){this._internalRoot=t}ec.prototype.unstable_scheduleHydration=function(t){if(t){var e=as();t={blockedOn:null,target:t,priority:e};for(var i=0;i<Ja.length&&e!==0&&e<Ja[i].priority;i++);Ja.splice(i,0,t),i===0&&A0(t)}};var L0=c.version;if(L0!=="19.2.0")throw Error(h(527,L0,"19.2.0"));it.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(h(188)):(t=Object.keys(t).join(","),Error(h(268,t)));return t=S(e),t=t!==null?E(t):null,t=t===null?null:t.stateNode,t};var yv={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nc.isDisabled&&nc.supportsFiber)try{Nn=nc.inject(yv),Ue=nc}catch{}}return ol.createRoot=function(t,e){if(!x(t))throw Error(h(299));var i=!1,o="",l=Up,u=Hp,g=Zp;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(g=e.onRecoverableError)),e=y0(t,1,!1,null,null,i,o,null,l,u,g,M0),t[Pi]=e.current,gf(t),new kf(e)},ol.hydrateRoot=function(t,e,i){if(!x(t))throw Error(h(299));var o=!1,l="",u=Up,g=Hp,_=Zp,C=null;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(g=i.onCaughtError),i.onRecoverableError!==void 0&&(_=i.onRecoverableError),i.formState!==void 0&&(C=i.formState)),e=y0(t,1,!0,e,i??null,o,l,C,u,g,_,M0),e.context=_0(null),i=e.current,o=Dn(),o=dn(o),l=Na(o),l.callback=null,Ua(i,l,o),i=o,e.current.lanes=i,xt(e,i),Li(e),t[Pi]=e.current,gf(t),new ec(e)},ol.version="19.2.0",ol}var P0;function Cv(){if(P0)return Uf.exports;P0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(c){console.error(c)}}return a(),Uf.exports=Av(),Uf.exports}var jv=Cv();const Mv=gh(jv);var q0="popstate";function Lv(a={}){function c(h,x){let{pathname:y,search:b,hash:O}=h.location;return ah("",{pathname:y,search:b,hash:O},x.state&&x.state.usr||null,x.state&&x.state.key||"default")}function d(h,x){return typeof x=="string"?x:zl(x)}return Rv(c,d,null,a)}function _e(a,c){if(a===!1||a===null||typeof a>"u")throw new Error(c)}function Kn(a,c){if(!a){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function Ov(){return Math.random().toString(36).substring(2,10)}function Y0(a,c){return{usr:a.state,key:a.key,idx:c}}function ah(a,c,d=null,h){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof c=="string"?Fo(c):c,state:d,key:c&&c.key||h||Ov()}}function zl({pathname:a="/",search:c="",hash:d=""}){return c&&c!=="?"&&(a+=c.charAt(0)==="?"?c:"?"+c),d&&d!=="#"&&(a+=d.charAt(0)==="#"?d:"#"+d),a}function Fo(a){let c={};if(a){let d=a.indexOf("#");d>=0&&(c.hash=a.substring(d),a=a.substring(0,d));let h=a.indexOf("?");h>=0&&(c.search=a.substring(h),a=a.substring(0,h)),a&&(c.pathname=a)}return c}function Rv(a,c,d,h={}){let{window:x=document.defaultView,v5Compat:y=!1}=h,b=x.history,O="POP",w=null,S=E();S==null&&(S=0,b.replaceState({...b.state,idx:S},""));function E(){return(b.state||{idx:null}).idx}function j(){O="POP";let W=E(),nt=W==null?null:W-S;S=W,w&&w({action:O,location:X.location,delta:nt})}function R(W,nt){O="PUSH";let rt=ah(X.location,W,nt);S=E()+1;let tt=Y0(rt,S),ht=X.createHref(rt);try{b.pushState(tt,"",ht)}catch(wt){if(wt instanceof DOMException&&wt.name==="DataCloneError")throw wt;x.location.assign(ht)}y&&w&&w({action:O,location:X.location,delta:1})}function G(W,nt){O="REPLACE";let rt=ah(X.location,W,nt);S=E();let tt=Y0(rt,S),ht=X.createHref(rt);b.replaceState(tt,"",ht),y&&w&&w({action:O,location:X.location,delta:0})}function q(W){return Dv(W)}let X={get action(){return O},get location(){return a(x,b)},listen(W){if(w)throw new Error("A history only accepts one active listener");return x.addEventListener(q0,j),w=W,()=>{x.removeEventListener(q0,j),w=null}},createHref(W){return c(x,W)},createURL:q,encodeLocation(W){let nt=q(W);return{pathname:nt.pathname,search:nt.search,hash:nt.hash}},push:R,replace:G,go(W){return b.go(W)}};return X}function Dv(a,c=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),_e(d,"No window.location.(origin|href) available to create URL");let h=typeof a=="string"?a:zl(a);return h=h.replace(/ $/,"%20"),!c&&h.startsWith("//")&&(h=d+h),new URL(h,d)}function r1(a,c,d="/"){return kv(a,c,d,!1)}function kv(a,c,d,h){let x=typeof c=="string"?Fo(c):c,y=fa(x.pathname||"/",d);if(y==null)return null;let b=o1(a);Bv(b);let O=null;for(let w=0;O==null&&w<b.length;++w){let S=$v(y);O=Vv(b[w],S,h)}return O}function o1(a,c=[],d=[],h="",x=!1){let y=(b,O,w=x,S)=>{let E={relativePath:S===void 0?b.path||"":S,caseSensitive:b.caseSensitive===!0,childrenIndex:O,route:b};if(E.relativePath.startsWith("/")){if(!E.relativePath.startsWith(h)&&w)return;_e(E.relativePath.startsWith(h),`Absolute route path "${E.relativePath}" nested under path "${h}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),E.relativePath=E.relativePath.slice(h.length)}let j=da([h,E.relativePath]),R=d.concat(E);b.children&&b.children.length>0&&(_e(b.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${j}".`),o1(b.children,c,R,j,w)),!(b.path==null&&!b.index)&&c.push({path:j,score:Yv(j,b.index),routesMeta:R})};return a.forEach((b,O)=>{if(b.path===""||!b.path?.includes("?"))y(b,O);else for(let w of s1(b.path))y(b,O,!0,w)}),c}function s1(a){let c=a.split("/");if(c.length===0)return[];let[d,...h]=c,x=d.endsWith("?"),y=d.replace(/\?$/,"");if(h.length===0)return x?[y,""]:[y];let b=s1(h.join("/")),O=[];return O.push(...b.map(w=>w===""?y:[y,w].join("/"))),x&&O.push(...b),O.map(w=>a.startsWith("/")&&w===""?"/":w)}function Bv(a){a.sort((c,d)=>c.score!==d.score?d.score-c.score:Gv(c.routesMeta.map(h=>h.childrenIndex),d.routesMeta.map(h=>h.childrenIndex)))}var Nv=/^:[\w-]+$/,Uv=3,Hv=2,Zv=1,Pv=10,qv=-2,G0=a=>a==="*";function Yv(a,c){let d=a.split("/"),h=d.length;return d.some(G0)&&(h+=qv),c&&(h+=Hv),d.filter(x=>!G0(x)).reduce((x,y)=>x+(Nv.test(y)?Uv:y===""?Zv:Pv),h)}function Gv(a,c){return a.length===c.length&&a.slice(0,-1).every((h,x)=>h===c[x])?a[a.length-1]-c[c.length-1]:0}function Vv(a,c,d=!1){let{routesMeta:h}=a,x={},y="/",b=[];for(let O=0;O<h.length;++O){let w=h[O],S=O===h.length-1,E=y==="/"?c:c.slice(y.length)||"/",j=zc({path:w.relativePath,caseSensitive:w.caseSensitive,end:S},E),R=w.route;if(!j&&S&&d&&!h[h.length-1].route.index&&(j=zc({path:w.relativePath,caseSensitive:w.caseSensitive,end:!1},E)),!j)return null;Object.assign(x,j.params),b.push({params:x,pathname:da([y,j.pathname]),pathnameBase:Jv(da([y,j.pathnameBase])),route:R}),j.pathnameBase!=="/"&&(y=da([y,j.pathnameBase]))}return b}function zc(a,c){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[d,h]=Xv(a.path,a.caseSensitive,a.end),x=c.match(d);if(!x)return null;let y=x[0],b=y.replace(/(.)\/+$/,"$1"),O=x.slice(1);return{params:h.reduce((S,{paramName:E,isOptional:j},R)=>{if(E==="*"){let q=O[R]||"";b=y.slice(0,y.length-q.length).replace(/(.)\/+$/,"$1")}const G=O[R];return j&&!G?S[E]=void 0:S[E]=(G||"").replace(/%2F/g,"/"),S},{}),pathname:y,pathnameBase:b,pattern:a}}function Xv(a,c=!1,d=!0){Kn(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let h=[],x="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,O,w)=>(h.push({paramName:O,isOptional:w!=null}),w?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(h.push({paramName:"*"}),x+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?x+="\\/*$":a!==""&&a!=="/"&&(x+="(?:(?=\\/|$))"),[new RegExp(x,c?void 0:"i"),h]}function $v(a){try{return a.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return Kn(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),a}}function fa(a,c){if(c==="/")return a;if(!a.toLowerCase().startsWith(c.toLowerCase()))return null;let d=c.endsWith("/")?c.length-1:c.length,h=a.charAt(d);return h&&h!=="/"?null:a.slice(d)||"/"}var Iv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Kv=a=>Iv.test(a);function Qv(a,c="/"){let{pathname:d,search:h="",hash:x=""}=typeof a=="string"?Fo(a):a,y;if(d)if(Kv(d))y=d;else{if(d.includes("//")){let b=d;d=d.replace(/\/\/+/g,"/"),Kn(!1,`Pathnames cannot have embedded double slashes - normalizing ${b} -> ${d}`)}d.startsWith("/")?y=V0(d.substring(1),"/"):y=V0(d,c)}else y=c;return{pathname:y,search:Wv(h),hash:ty(x)}}function V0(a,c){let d=c.replace(/\/+$/,"").split("/");return a.split("/").forEach(x=>{x===".."?d.length>1&&d.pop():x!=="."&&d.push(x)}),d.length>1?d.join("/"):"/"}function qf(a,c,d,h){return`Cannot include a '${a}' character in a manually specified \`to.${c}\` field [${JSON.stringify(h)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Fv(a){return a.filter((c,d)=>d===0||c.route.path&&c.route.path.length>0)}function vh(a){let c=Fv(a);return c.map((d,h)=>h===c.length-1?d.pathname:d.pathnameBase)}function yh(a,c,d,h=!1){let x;typeof a=="string"?x=Fo(a):(x={...a},_e(!x.pathname||!x.pathname.includes("?"),qf("?","pathname","search",x)),_e(!x.pathname||!x.pathname.includes("#"),qf("#","pathname","hash",x)),_e(!x.search||!x.search.includes("#"),qf("#","search","hash",x)));let y=a===""||x.pathname==="",b=y?"/":x.pathname,O;if(b==null)O=d;else{let j=c.length-1;if(!h&&b.startsWith("..")){let R=b.split("/");for(;R[0]==="..";)R.shift(),j-=1;x.pathname=R.join("/")}O=j>=0?c[j]:"/"}let w=Qv(x,O),S=b&&b!=="/"&&b.endsWith("/"),E=(y||b===".")&&d.endsWith("/");return!w.pathname.endsWith("/")&&(S||E)&&(w.pathname+="/"),w}var da=a=>a.join("/").replace(/\/\/+/g,"/"),Jv=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Wv=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,ty=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function ey(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var l1=["POST","PUT","PATCH","DELETE"];new Set(l1);var ny=["GET",...l1];new Set(ny);var Jo=z.createContext(null);Jo.displayName="DataRouter";var Lc=z.createContext(null);Lc.displayName="DataRouterState";z.createContext(!1);var u1=z.createContext({isTransitioning:!1});u1.displayName="ViewTransition";var iy=z.createContext(new Map);iy.displayName="Fetchers";var ay=z.createContext(null);ay.displayName="Await";var di=z.createContext(null);di.displayName="Navigation";var Al=z.createContext(null);Al.displayName="Location";var fi=z.createContext({outlet:null,matches:[],isDataRoute:!1});fi.displayName="Route";var _h=z.createContext(null);_h.displayName="RouteError";function ry(a,{relative:c}={}){_e(Wo(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:h}=z.useContext(di),{hash:x,pathname:y,search:b}=Cl(a,{relative:c}),O=y;return d!=="/"&&(O=y==="/"?d:da([d,y])),h.createHref({pathname:O,search:b,hash:x})}function Wo(){return z.useContext(Al)!=null}function hi(){return _e(Wo(),"useLocation() may be used only in the context of a <Router> component."),z.useContext(Al).location}var c1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function d1(a){z.useContext(di).static||z.useLayoutEffect(a)}function zn(){let{isDataRoute:a}=z.useContext(fi);return a?vy():oy()}function oy(){_e(Wo(),"useNavigate() may be used only in the context of a <Router> component.");let a=z.useContext(Jo),{basename:c,navigator:d}=z.useContext(di),{matches:h}=z.useContext(fi),{pathname:x}=hi(),y=JSON.stringify(vh(h)),b=z.useRef(!1);return d1(()=>{b.current=!0}),z.useCallback((w,S={})=>{if(Kn(b.current,c1),!b.current)return;if(typeof w=="number"){d.go(w);return}let E=yh(w,JSON.parse(y),x,S.relative==="path");a==null&&c!=="/"&&(E.pathname=E.pathname==="/"?c:da([c,E.pathname])),(S.replace?d.replace:d.push)(E,S.state,S)},[c,d,y,x,a])}z.createContext(null);function $r(){let{matches:a}=z.useContext(fi),c=a[a.length-1];return c?c.params:{}}function Cl(a,{relative:c}={}){let{matches:d}=z.useContext(fi),{pathname:h}=hi(),x=JSON.stringify(vh(d));return z.useMemo(()=>yh(a,JSON.parse(x),h,c==="path"),[a,x,h,c])}function sy(a,c){return f1(a,c)}function f1(a,c,d,h,x){_e(Wo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:y}=z.useContext(di),{matches:b}=z.useContext(fi),O=b[b.length-1],w=O?O.params:{},S=O?O.pathname:"/",E=O?O.pathnameBase:"/",j=O&&O.route;{let rt=j&&j.path||"";h1(S,!j||rt.endsWith("*")||rt.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${S}" (under <Route path="${rt}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${rt}"> to <Route path="${rt==="/"?"*":`${rt}/*`}">.`)}let R=hi(),G;if(c){let rt=typeof c=="string"?Fo(c):c;_e(E==="/"||rt.pathname?.startsWith(E),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${rt.pathname}" was given in the \`location\` prop.`),G=rt}else G=R;let q=G.pathname||"/",X=q;if(E!=="/"){let rt=E.replace(/^\//,"").split("/");X="/"+q.replace(/^\//,"").split("/").slice(rt.length).join("/")}let W=r1(a,{pathname:X});Kn(j||W!=null,`No routes matched location "${G.pathname}${G.search}${G.hash}" `),Kn(W==null||W[W.length-1].route.element!==void 0||W[W.length-1].route.Component!==void 0||W[W.length-1].route.lazy!==void 0,`Matched leaf route at location "${G.pathname}${G.search}${G.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let nt=fy(W&&W.map(rt=>Object.assign({},rt,{params:Object.assign({},w,rt.params),pathname:da([E,y.encodeLocation?y.encodeLocation(rt.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:rt.pathname]),pathnameBase:rt.pathnameBase==="/"?E:da([E,y.encodeLocation?y.encodeLocation(rt.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:rt.pathnameBase])})),b,d,h,x);return c&&nt?z.createElement(Al.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...G},navigationType:"POP"}},nt):nt}function ly(){let a=xy(),c=ey(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),d=a instanceof Error?a.stack:null,h="rgba(200,200,200, 0.5)",x={padding:"0.5rem",backgroundColor:h},y={padding:"2px 4px",backgroundColor:h},b=null;return console.error("Error handled by React Router default ErrorBoundary:",a),b=z.createElement(z.Fragment,null,z.createElement("p",null,"💿 Hey developer 👋"),z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",z.createElement("code",{style:y},"ErrorBoundary")," or"," ",z.createElement("code",{style:y},"errorElement")," prop on your route.")),z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},c),d?z.createElement("pre",{style:x},d):null,b)}var uy=z.createElement(ly,null),cy=class extends z.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,c){return c.location!==a.location||c.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:c.error,location:c.location,revalidation:a.revalidation||c.revalidation}}componentDidCatch(a,c){this.props.onError?this.props.onError(a,c):console.error("React Router caught the following error during render",a)}render(){return this.state.error!==void 0?z.createElement(fi.Provider,{value:this.props.routeContext},z.createElement(_h.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function dy({routeContext:a,match:c,children:d}){let h=z.useContext(Jo);return h&&h.static&&h.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(h.staticContext._deepestRenderedBoundaryId=c.route.id),z.createElement(fi.Provider,{value:a},d)}function fy(a,c=[],d=null,h=null,x=null){if(a==null){if(!d)return null;if(d.errors)a=d.matches;else if(c.length===0&&!d.initialized&&d.matches.length>0)a=d.matches;else return null}let y=a,b=d?.errors;if(b!=null){let E=y.findIndex(j=>j.route.id&&b?.[j.route.id]!==void 0);_e(E>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(b).join(",")}`),y=y.slice(0,Math.min(y.length,E+1))}let O=!1,w=-1;if(d)for(let E=0;E<y.length;E++){let j=y[E];if((j.route.HydrateFallback||j.route.hydrateFallbackElement)&&(w=E),j.route.id){let{loaderData:R,errors:G}=d,q=j.route.loader&&!R.hasOwnProperty(j.route.id)&&(!G||G[j.route.id]===void 0);if(j.route.lazy||q){O=!0,w>=0?y=y.slice(0,w+1):y=[y[0]];break}}}let S=d&&h?(E,j)=>{h(E,{location:d.location,params:d.matches?.[0]?.params??{},errorInfo:j})}:void 0;return y.reduceRight((E,j,R)=>{let G,q=!1,X=null,W=null;d&&(G=b&&j.route.id?b[j.route.id]:void 0,X=j.route.errorElement||uy,O&&(w<0&&R===0?(h1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),q=!0,W=null):w===R&&(q=!0,W=j.route.hydrateFallbackElement||null)));let nt=c.concat(y.slice(0,R+1)),rt=()=>{let tt;return G?tt=X:q?tt=W:j.route.Component?tt=z.createElement(j.route.Component,null):j.route.element?tt=j.route.element:tt=E,z.createElement(dy,{match:j,routeContext:{outlet:E,matches:nt,isDataRoute:d!=null},children:tt})};return d&&(j.route.ErrorBoundary||j.route.errorElement||R===0)?z.createElement(cy,{location:d.location,revalidation:d.revalidation,component:X,error:G,children:rt(),routeContext:{outlet:null,matches:nt,isDataRoute:!0},onError:S}):rt()},null)}function bh(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function hy(a){let c=z.useContext(Jo);return _e(c,bh(a)),c}function py(a){let c=z.useContext(Lc);return _e(c,bh(a)),c}function my(a){let c=z.useContext(fi);return _e(c,bh(a)),c}function wh(a){let c=my(a),d=c.matches[c.matches.length-1];return _e(d.route.id,`${a} can only be used on routes that contain a unique "id"`),d.route.id}function gy(){return wh("useRouteId")}function xy(){let a=z.useContext(_h),c=py("useRouteError"),d=wh("useRouteError");return a!==void 0?a:c.errors?.[d]}function vy(){let{router:a}=hy("useNavigate"),c=wh("useNavigate"),d=z.useRef(!1);return d1(()=>{d.current=!0}),z.useCallback(async(x,y={})=>{Kn(d.current,c1),d.current&&(typeof x=="number"?a.navigate(x):await a.navigate(x,{fromRouteId:c,...y}))},[a,c])}var X0={};function h1(a,c,d){!c&&!X0[a]&&(X0[a]=!0,Kn(!1,d))}z.memo(yy);function yy({routes:a,future:c,state:d,unstable_onError:h}){return f1(a,void 0,d,h,c)}function gl({to:a,replace:c,state:d,relative:h}){_e(Wo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:x}=z.useContext(di);Kn(!x,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:y}=z.useContext(fi),{pathname:b}=hi(),O=zn(),w=yh(a,vh(y),b,h==="path"),S=JSON.stringify(w);return z.useEffect(()=>{O(JSON.parse(S),{replace:c,state:d,relative:h})},[O,S,h,c,d]),null}function We(a){_e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function _y({basename:a="/",children:c=null,location:d,navigationType:h="POP",navigator:x,static:y=!1}){_e(!Wo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=a.replace(/^\/*/,"/"),O=z.useMemo(()=>({basename:b,navigator:x,static:y,future:{}}),[b,x,y]);typeof d=="string"&&(d=Fo(d));let{pathname:w="/",search:S="",hash:E="",state:j=null,key:R="default"}=d,G=z.useMemo(()=>{let q=fa(w,b);return q==null?null:{location:{pathname:q,search:S,hash:E,state:j,key:R},navigationType:h}},[b,w,S,E,j,R,h]);return Kn(G!=null,`<Router basename="${b}"> is not able to match the URL "${w}${S}${E}" because it does not start with the basename, so the <Router> won't render anything.`),G==null?null:z.createElement(di.Provider,{value:O},z.createElement(Al.Provider,{children:c,value:G}))}function by({children:a,location:c}){return sy(rh(a),c)}function rh(a,c=[]){let d=[];return z.Children.forEach(a,(h,x)=>{if(!z.isValidElement(h))return;let y=[...c,x];if(h.type===z.Fragment){d.push.apply(d,rh(h.props.children,y));return}_e(h.type===We,`[${typeof h.type=="string"?h.type:h.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),_e(!h.props.index||!h.props.children,"An index route cannot have child routes.");let b={id:h.props.id||y.join("-"),caseSensitive:h.props.caseSensitive,element:h.props.element,Component:h.props.Component,index:h.props.index,path:h.props.path,middleware:h.props.middleware,loader:h.props.loader,action:h.props.action,hydrateFallbackElement:h.props.hydrateFallbackElement,HydrateFallback:h.props.HydrateFallback,errorElement:h.props.errorElement,ErrorBoundary:h.props.ErrorBoundary,hasErrorBoundary:h.props.hasErrorBoundary===!0||h.props.ErrorBoundary!=null||h.props.errorElement!=null,shouldRevalidate:h.props.shouldRevalidate,handle:h.props.handle,lazy:h.props.lazy};h.props.children&&(b.children=rh(h.props.children,y)),d.push(b)}),d}var gc="get",xc="application/x-www-form-urlencoded";function Oc(a){return a!=null&&typeof a.tagName=="string"}function wy(a){return Oc(a)&&a.tagName.toLowerCase()==="button"}function Sy(a){return Oc(a)&&a.tagName.toLowerCase()==="form"}function zy(a){return Oc(a)&&a.tagName.toLowerCase()==="input"}function Ty(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function Ey(a,c){return a.button===0&&(!c||c==="_self")&&!Ty(a)}var ic=null;function Ay(){if(ic===null)try{new FormData(document.createElement("form"),0),ic=!1}catch{ic=!0}return ic}var Cy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Yf(a){return a!=null&&!Cy.has(a)?(Kn(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xc}"`),null):a}function jy(a,c){let d,h,x,y,b;if(Sy(a)){let O=a.getAttribute("action");h=O?fa(O,c):null,d=a.getAttribute("method")||gc,x=Yf(a.getAttribute("enctype"))||xc,y=new FormData(a)}else if(wy(a)||zy(a)&&(a.type==="submit"||a.type==="image")){let O=a.form;if(O==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let w=a.getAttribute("formaction")||O.getAttribute("action");if(h=w?fa(w,c):null,d=a.getAttribute("formmethod")||O.getAttribute("method")||gc,x=Yf(a.getAttribute("formenctype"))||Yf(O.getAttribute("enctype"))||xc,y=new FormData(O,a),!Ay()){let{name:S,type:E,value:j}=a;if(E==="image"){let R=S?`${S}.`:"";y.append(`${R}x`,"0"),y.append(`${R}y`,"0")}else S&&y.append(S,j)}}else{if(Oc(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=gc,h=null,x=xc,b=a}return y&&x==="text/plain"&&(b=y,y=void 0),{action:h,method:d.toLowerCase(),encType:x,formData:y,body:b}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Sh(a,c){if(a===!1||a===null||typeof a>"u")throw new Error(c)}function My(a,c,d){let h=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return h.pathname==="/"?h.pathname=`_root.${d}`:c&&fa(h.pathname,c)==="/"?h.pathname=`${c.replace(/\/$/,"")}/_root.${d}`:h.pathname=`${h.pathname.replace(/\/$/,"")}.${d}`,h}async function Ly(a,c){if(a.id in c)return c[a.id];try{let d=await import(a.module);return c[a.id]=d,d}catch(d){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Oy(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function Ry(a,c,d){let h=await Promise.all(a.map(async x=>{let y=c.routes[x.route.id];if(y){let b=await Ly(y,d);return b.links?b.links():[]}return[]}));return Ny(h.flat(1).filter(Oy).filter(x=>x.rel==="stylesheet"||x.rel==="preload").map(x=>x.rel==="stylesheet"?{...x,rel:"prefetch",as:"style"}:{...x,rel:"prefetch"}))}function $0(a,c,d,h,x,y){let b=(w,S)=>d[S]?w.route.id!==d[S].route.id:!0,O=(w,S)=>d[S].pathname!==w.pathname||d[S].route.path?.endsWith("*")&&d[S].params["*"]!==w.params["*"];return y==="assets"?c.filter((w,S)=>b(w,S)||O(w,S)):y==="data"?c.filter((w,S)=>{let E=h.routes[w.route.id];if(!E||!E.hasLoader)return!1;if(b(w,S)||O(w,S))return!0;if(w.route.shouldRevalidate){let j=w.route.shouldRevalidate({currentUrl:new URL(x.pathname+x.search+x.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:w.params,defaultShouldRevalidate:!0});if(typeof j=="boolean")return j}return!0}):[]}function Dy(a,c,{includeHydrateFallback:d}={}){return ky(a.map(h=>{let x=c.routes[h.route.id];if(!x)return[];let y=[x.module];return x.clientActionModule&&(y=y.concat(x.clientActionModule)),x.clientLoaderModule&&(y=y.concat(x.clientLoaderModule)),d&&x.hydrateFallbackModule&&(y=y.concat(x.hydrateFallbackModule)),x.imports&&(y=y.concat(x.imports)),y}).flat(1))}function ky(a){return[...new Set(a)]}function By(a){let c={},d=Object.keys(a).sort();for(let h of d)c[h]=a[h];return c}function Ny(a,c){let d=new Set;return new Set(c),a.reduce((h,x)=>{let y=JSON.stringify(By(x));return d.has(y)||(d.add(y),h.push({key:y,link:x})),h},[])}function p1(){let a=z.useContext(Jo);return Sh(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function Uy(){let a=z.useContext(Lc);return Sh(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var zh=z.createContext(void 0);zh.displayName="FrameworkContext";function m1(){let a=z.useContext(zh);return Sh(a,"You must render this element inside a <HydratedRouter> element"),a}function Hy(a,c){let d=z.useContext(zh),[h,x]=z.useState(!1),[y,b]=z.useState(!1),{onFocus:O,onBlur:w,onMouseEnter:S,onMouseLeave:E,onTouchStart:j}=c,R=z.useRef(null);z.useEffect(()=>{if(a==="render"&&b(!0),a==="viewport"){let X=nt=>{nt.forEach(rt=>{b(rt.isIntersecting)})},W=new IntersectionObserver(X,{threshold:.5});return R.current&&W.observe(R.current),()=>{W.disconnect()}}},[a]),z.useEffect(()=>{if(h){let X=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(X)}}},[h]);let G=()=>{x(!0)},q=()=>{x(!1),b(!1)};return d?a!=="intent"?[y,R,{}]:[y,R,{onFocus:sl(O,G),onBlur:sl(w,q),onMouseEnter:sl(S,G),onMouseLeave:sl(E,q),onTouchStart:sl(j,G)}]:[!1,R,{}]}function sl(a,c){return d=>{a&&a(d),d.defaultPrevented||c(d)}}function Zy({page:a,...c}){let{router:d}=p1(),h=z.useMemo(()=>r1(d.routes,a,d.basename),[d.routes,a,d.basename]);return h?z.createElement(qy,{page:a,matches:h,...c}):null}function Py(a){let{manifest:c,routeModules:d}=m1(),[h,x]=z.useState([]);return z.useEffect(()=>{let y=!1;return Ry(a,c,d).then(b=>{y||x(b)}),()=>{y=!0}},[a,c,d]),h}function qy({page:a,matches:c,...d}){let h=hi(),{manifest:x,routeModules:y}=m1(),{basename:b}=p1(),{loaderData:O,matches:w}=Uy(),S=z.useMemo(()=>$0(a,c,w,x,h,"data"),[a,c,w,x,h]),E=z.useMemo(()=>$0(a,c,w,x,h,"assets"),[a,c,w,x,h]),j=z.useMemo(()=>{if(a===h.pathname+h.search+h.hash)return[];let q=new Set,X=!1;if(c.forEach(nt=>{let rt=x.routes[nt.route.id];!rt||!rt.hasLoader||(!S.some(tt=>tt.route.id===nt.route.id)&&nt.route.id in O&&y[nt.route.id]?.shouldRevalidate||rt.hasClientLoader?X=!0:q.add(nt.route.id))}),q.size===0)return[];let W=My(a,b,"data");return X&&q.size>0&&W.searchParams.set("_routes",c.filter(nt=>q.has(nt.route.id)).map(nt=>nt.route.id).join(",")),[W.pathname+W.search]},[b,O,h,x,S,c,a,y]),R=z.useMemo(()=>Dy(E,x),[E,x]),G=Py(E);return z.createElement(z.Fragment,null,j.map(q=>z.createElement("link",{key:q,rel:"prefetch",as:"fetch",href:q,...d})),R.map(q=>z.createElement("link",{key:q,rel:"modulepreload",href:q,...d})),G.map(({key:q,link:X})=>z.createElement("link",{key:q,nonce:d.nonce,...X})))}function Yy(...a){return c=>{a.forEach(d=>{typeof d=="function"?d(c):d!=null&&(d.current=c)})}}var g1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{g1&&(window.__reactRouterVersion="7.9.6")}catch{}function Gy({basename:a,children:c,window:d}){let h=z.useRef();h.current==null&&(h.current=Lv({window:d,v5Compat:!0}));let x=h.current,[y,b]=z.useState({action:x.action,location:x.location}),O=z.useCallback(w=>{z.startTransition(()=>b(w))},[b]);return z.useLayoutEffect(()=>x.listen(O),[x,O]),z.createElement(_y,{basename:a,children:c,location:y.location,navigationType:y.action,navigator:x})}var x1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rc=z.forwardRef(function({onClick:c,discover:d="render",prefetch:h="none",relative:x,reloadDocument:y,replace:b,state:O,target:w,to:S,preventScrollReset:E,viewTransition:j,...R},G){let{basename:q}=z.useContext(di),X=typeof S=="string"&&x1.test(S),W,nt=!1;if(typeof S=="string"&&X&&(W=S,g1))try{let zt=new URL(window.location.href),Rt=S.startsWith("//")?new URL(zt.protocol+S):new URL(S),Tt=fa(Rt.pathname,q);Rt.origin===zt.origin&&Tt!=null?S=Tt+Rt.search+Rt.hash:nt=!0}catch{Kn(!1,`<Link to="${S}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let rt=ry(S,{relative:x}),[tt,ht,wt]=Hy(h,R),vt=Iy(S,{replace:b,state:O,target:w,preventScrollReset:E,relative:x,viewTransition:j});function ot(zt){c&&c(zt),zt.defaultPrevented||vt(zt)}let Ut=z.createElement("a",{...R,...wt,href:W||rt,onClick:nt||y?c:ot,ref:Yy(G,ht),target:w,"data-discover":!X&&d==="render"?"true":void 0});return tt&&!X?z.createElement(z.Fragment,null,Ut,z.createElement(Zy,{page:rt})):Ut});Rc.displayName="Link";var Vy=z.forwardRef(function({"aria-current":c="page",caseSensitive:d=!1,className:h="",end:x=!1,style:y,to:b,viewTransition:O,children:w,...S},E){let j=Cl(b,{relative:S.relative}),R=hi(),G=z.useContext(Lc),{navigator:q,basename:X}=z.useContext(di),W=G!=null&&Wy(j)&&O===!0,nt=q.encodeLocation?q.encodeLocation(j).pathname:j.pathname,rt=R.pathname,tt=G&&G.navigation&&G.navigation.location?G.navigation.location.pathname:null;d||(rt=rt.toLowerCase(),tt=tt?tt.toLowerCase():null,nt=nt.toLowerCase()),tt&&X&&(tt=fa(tt,X)||tt);const ht=nt!=="/"&&nt.endsWith("/")?nt.length-1:nt.length;let wt=rt===nt||!x&&rt.startsWith(nt)&&rt.charAt(ht)==="/",vt=tt!=null&&(tt===nt||!x&&tt.startsWith(nt)&&tt.charAt(nt.length)==="/"),ot={isActive:wt,isPending:vt,isTransitioning:W},Ut=wt?c:void 0,zt;typeof h=="function"?zt=h(ot):zt=[h,wt?"active":null,vt?"pending":null,W?"transitioning":null].filter(Boolean).join(" ");let Rt=typeof y=="function"?y(ot):y;return z.createElement(Rc,{...S,"aria-current":Ut,className:zt,ref:E,style:Rt,to:b,viewTransition:O},typeof w=="function"?w(ot):w)});Vy.displayName="NavLink";var Xy=z.forwardRef(({discover:a="render",fetcherKey:c,navigate:d,reloadDocument:h,replace:x,state:y,method:b=gc,action:O,onSubmit:w,relative:S,preventScrollReset:E,viewTransition:j,...R},G)=>{let q=Fy(),X=Jy(O,{relative:S}),W=b.toLowerCase()==="get"?"get":"post",nt=typeof O=="string"&&x1.test(O),rt=tt=>{if(w&&w(tt),tt.defaultPrevented)return;tt.preventDefault();let ht=tt.nativeEvent.submitter,wt=ht?.getAttribute("formmethod")||b;q(ht||tt.currentTarget,{fetcherKey:c,method:wt,navigate:d,replace:x,state:y,relative:S,preventScrollReset:E,viewTransition:j})};return z.createElement("form",{ref:G,method:W,action:X,onSubmit:h?w:rt,...R,"data-discover":!nt&&a==="render"?"true":void 0})});Xy.displayName="Form";function $y(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function v1(a){let c=z.useContext(Jo);return _e(c,$y(a)),c}function Iy(a,{target:c,replace:d,state:h,preventScrollReset:x,relative:y,viewTransition:b}={}){let O=zn(),w=hi(),S=Cl(a,{relative:y});return z.useCallback(E=>{if(Ey(E,c)){E.preventDefault();let j=d!==void 0?d:zl(w)===zl(S);O(a,{replace:j,state:h,preventScrollReset:x,relative:y,viewTransition:b})}},[w,O,S,d,h,c,a,x,y,b])}var Ky=0,Qy=()=>`__${String(++Ky)}__`;function Fy(){let{router:a}=v1("useSubmit"),{basename:c}=z.useContext(di),d=gy();return z.useCallback(async(h,x={})=>{let{action:y,method:b,encType:O,formData:w,body:S}=jy(h,c);if(x.navigate===!1){let E=x.fetcherKey||Qy();await a.fetch(E,d,x.action||y,{preventScrollReset:x.preventScrollReset,formData:w,body:S,formMethod:x.method||b,formEncType:x.encType||O,flushSync:x.flushSync})}else await a.navigate(x.action||y,{preventScrollReset:x.preventScrollReset,formData:w,body:S,formMethod:x.method||b,formEncType:x.encType||O,replace:x.replace,state:x.state,fromRouteId:d,flushSync:x.flushSync,viewTransition:x.viewTransition})},[a,c,d])}function Jy(a,{relative:c}={}){let{basename:d}=z.useContext(di),h=z.useContext(fi);_e(h,"useFormAction must be used inside a RouteContext");let[x]=h.matches.slice(-1),y={...Cl(a||".",{relative:c})},b=hi();if(a==null){y.search=b.search;let O=new URLSearchParams(y.search),w=O.getAll("index");if(w.some(E=>E==="")){O.delete("index"),w.filter(j=>j).forEach(j=>O.append("index",j));let E=O.toString();y.search=E?`?${E}`:""}}return(!a||a===".")&&x.route.index&&(y.search=y.search?y.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(y.pathname=y.pathname==="/"?d:da([d,y.pathname])),zl(y)}function Wy(a,{relative:c}={}){let d=z.useContext(u1);_e(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:h}=v1("useViewTransitionState"),x=Cl(a,{relative:c});if(!d.isTransitioning)return!1;let y=fa(d.currentLocation.pathname,h)||d.currentLocation.pathname,b=fa(d.nextLocation.pathname,h)||d.nextLocation.pathname;return zc(x.pathname,b)!=null||zc(x.pathname,y)!=null}var t_=a1(),on=function(){return on=Object.assign||function(c){for(var d,h=1,x=arguments.length;h<x;h++){d=arguments[h];for(var y in d)Object.prototype.hasOwnProperty.call(d,y)&&(c[y]=d[y])}return c},on.apply(this,arguments)};function Tl(a,c,d){if(d||arguments.length===2)for(var h=0,x=c.length,y;h<x;h++)(y||!(h in c))&&(y||(y=Array.prototype.slice.call(c,0,h)),y[h]=c[h]);return a.concat(y||Array.prototype.slice.call(c))}var xe="-ms-",_l="-moz-",ae="-webkit-",y1="comm",Dc="rule",Th="decl",e_="@import",_1="@keyframes",n_="@layer",b1=Math.abs,Eh=String.fromCharCode,oh=Object.assign;function i_(a,c){return Xe(a,0)^45?(((c<<2^Xe(a,0))<<2^Xe(a,1))<<2^Xe(a,2))<<2^Xe(a,3):0}function w1(a){return a.trim()}function ca(a,c){return(a=c.exec(a))?a[0]:a}function Nt(a,c,d){return a.replace(c,d)}function vc(a,c,d){return a.indexOf(c,d)}function Xe(a,c){return a.charCodeAt(c)|0}function $o(a,c,d){return a.slice(c,d)}function Oi(a){return a.length}function S1(a){return a.length}function xl(a,c){return c.push(a),a}function a_(a,c){return a.map(c).join("")}function I0(a,c){return a.filter(function(d){return!ca(d,c)})}var kc=1,Io=1,z1=0,Qn=0,Ne=0,ts="";function Bc(a,c,d,h,x,y,b,O){return{value:a,root:c,parent:d,type:h,props:x,children:y,line:kc,column:Io,length:b,return:"",siblings:O}}function tr(a,c){return oh(Bc("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},c)}function Uo(a){for(;a.root;)a=tr(a.root,{children:[a]});xl(a,a.siblings)}function r_(){return Ne}function o_(){return Ne=Qn>0?Xe(ts,--Qn):0,Io--,Ne===10&&(Io=1,kc--),Ne}function ci(){return Ne=Qn<z1?Xe(ts,Qn++):0,Io++,Ne===10&&(Io=1,kc++),Ne}function Yr(){return Xe(ts,Qn)}function yc(){return Qn}function Nc(a,c){return $o(ts,a,c)}function sh(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function s_(a){return kc=Io=1,z1=Oi(ts=a),Qn=0,[]}function l_(a){return ts="",a}function Gf(a){return w1(Nc(Qn-1,lh(a===91?a+2:a===40?a+1:a)))}function u_(a){for(;(Ne=Yr())&&Ne<33;)ci();return sh(a)>2||sh(Ne)>3?"":" "}function c_(a,c){for(;--c&&ci()&&!(Ne<48||Ne>102||Ne>57&&Ne<65||Ne>70&&Ne<97););return Nc(a,yc()+(c<6&&Yr()==32&&ci()==32))}function lh(a){for(;ci();)switch(Ne){case a:return Qn;case 34:case 39:a!==34&&a!==39&&lh(Ne);break;case 40:a===41&&lh(a);break;case 92:ci();break}return Qn}function d_(a,c){for(;ci()&&a+Ne!==57;)if(a+Ne===84&&Yr()===47)break;return"/*"+Nc(c,Qn-1)+"*"+Eh(a===47?a:ci())}function f_(a){for(;!sh(Yr());)ci();return Nc(a,Qn)}function h_(a){return l_(_c("",null,null,null,[""],a=s_(a),0,[0],a))}function _c(a,c,d,h,x,y,b,O,w){for(var S=0,E=0,j=b,R=0,G=0,q=0,X=1,W=1,nt=1,rt=0,tt="",ht=x,wt=y,vt=h,ot=tt;W;)switch(q=rt,rt=ci()){case 40:if(q!=108&&Xe(ot,j-1)==58){vc(ot+=Nt(Gf(rt),"&","&\f"),"&\f",b1(S?O[S-1]:0))!=-1&&(nt=-1);break}case 34:case 39:case 91:ot+=Gf(rt);break;case 9:case 10:case 13:case 32:ot+=u_(q);break;case 92:ot+=c_(yc()-1,7);continue;case 47:switch(Yr()){case 42:case 47:xl(p_(d_(ci(),yc()),c,d,w),w);break;default:ot+="/"}break;case 123*X:O[S++]=Oi(ot)*nt;case 125*X:case 59:case 0:switch(rt){case 0:case 125:W=0;case 59+E:nt==-1&&(ot=Nt(ot,/\f/g,"")),G>0&&Oi(ot)-j&&xl(G>32?Q0(ot+";",h,d,j-1,w):Q0(Nt(ot," ","")+";",h,d,j-2,w),w);break;case 59:ot+=";";default:if(xl(vt=K0(ot,c,d,S,E,x,O,tt,ht=[],wt=[],j,y),y),rt===123)if(E===0)_c(ot,c,vt,vt,ht,y,j,O,wt);else switch(R===99&&Xe(ot,3)===110?100:R){case 100:case 108:case 109:case 115:_c(a,vt,vt,h&&xl(K0(a,vt,vt,0,0,x,O,tt,x,ht=[],j,wt),wt),x,wt,j,O,h?ht:wt);break;default:_c(ot,vt,vt,vt,[""],wt,0,O,wt)}}S=E=G=0,X=nt=1,tt=ot="",j=b;break;case 58:j=1+Oi(ot),G=q;default:if(X<1){if(rt==123)--X;else if(rt==125&&X++==0&&o_()==125)continue}switch(ot+=Eh(rt),rt*X){case 38:nt=E>0?1:(ot+="\f",-1);break;case 44:O[S++]=(Oi(ot)-1)*nt,nt=1;break;case 64:Yr()===45&&(ot+=Gf(ci())),R=Yr(),E=j=Oi(tt=ot+=f_(yc())),rt++;break;case 45:q===45&&Oi(ot)==2&&(X=0)}}return y}function K0(a,c,d,h,x,y,b,O,w,S,E,j){for(var R=x-1,G=x===0?y:[""],q=S1(G),X=0,W=0,nt=0;X<h;++X)for(var rt=0,tt=$o(a,R+1,R=b1(W=b[X])),ht=a;rt<q;++rt)(ht=w1(W>0?G[rt]+" "+tt:Nt(tt,/&\f/g,G[rt])))&&(w[nt++]=ht);return Bc(a,c,d,x===0?Dc:O,w,S,E,j)}function p_(a,c,d,h){return Bc(a,c,d,y1,Eh(r_()),$o(a,2,-2),0,h)}function Q0(a,c,d,h,x){return Bc(a,c,d,Th,$o(a,0,h),$o(a,h+1,-1),h,x)}function T1(a,c,d){switch(i_(a,c)){case 5103:return ae+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ae+a+a;case 4789:return _l+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return ae+a+_l+a+xe+a+a;case 5936:switch(Xe(a,c+11)){case 114:return ae+a+xe+Nt(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return ae+a+xe+Nt(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return ae+a+xe+Nt(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return ae+a+xe+a+a;case 6165:return ae+a+xe+"flex-"+a+a;case 5187:return ae+a+Nt(a,/(\w+).+(:[^]+)/,ae+"box-$1$2"+xe+"flex-$1$2")+a;case 5443:return ae+a+xe+"flex-item-"+Nt(a,/flex-|-self/g,"")+(ca(a,/flex-|baseline/)?"":xe+"grid-row-"+Nt(a,/flex-|-self/g,""))+a;case 4675:return ae+a+xe+"flex-line-pack"+Nt(a,/align-content|flex-|-self/g,"")+a;case 5548:return ae+a+xe+Nt(a,"shrink","negative")+a;case 5292:return ae+a+xe+Nt(a,"basis","preferred-size")+a;case 6060:return ae+"box-"+Nt(a,"-grow","")+ae+a+xe+Nt(a,"grow","positive")+a;case 4554:return ae+Nt(a,/([^-])(transform)/g,"$1"+ae+"$2")+a;case 6187:return Nt(Nt(Nt(a,/(zoom-|grab)/,ae+"$1"),/(image-set)/,ae+"$1"),a,"")+a;case 5495:case 3959:return Nt(a,/(image-set\([^]*)/,ae+"$1$`$1");case 4968:return Nt(Nt(a,/(.+:)(flex-)?(.*)/,ae+"box-pack:$3"+xe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ae+a+a;case 4200:if(!ca(a,/flex-|baseline/))return xe+"grid-column-align"+$o(a,c)+a;break;case 2592:case 3360:return xe+Nt(a,"template-","")+a;case 4384:case 3616:return d&&d.some(function(h,x){return c=x,ca(h.props,/grid-\w+-end/)})?~vc(a+(d=d[c].value),"span",0)?a:xe+Nt(a,"-start","")+a+xe+"grid-row-span:"+(~vc(d,"span",0)?ca(d,/\d+/):+ca(d,/\d+/)-+ca(a,/\d+/))+";":xe+Nt(a,"-start","")+a;case 4896:case 4128:return d&&d.some(function(h){return ca(h.props,/grid-\w+-start/)})?a:xe+Nt(Nt(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return Nt(a,/(.+)-inline(.+)/,ae+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Oi(a)-1-c>6)switch(Xe(a,c+1)){case 109:if(Xe(a,c+4)!==45)break;case 102:return Nt(a,/(.+:)(.+)-([^]+)/,"$1"+ae+"$2-$3$1"+_l+(Xe(a,c+3)==108?"$3":"$2-$3"))+a;case 115:return~vc(a,"stretch",0)?T1(Nt(a,"stretch","fill-available"),c,d)+a:a}break;case 5152:case 5920:return Nt(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(h,x,y,b,O,w,S){return xe+x+":"+y+S+(b?xe+x+"-span:"+(O?w:+w-+y)+S:"")+a});case 4949:if(Xe(a,c+6)===121)return Nt(a,":",":"+ae)+a;break;case 6444:switch(Xe(a,Xe(a,14)===45?18:11)){case 120:return Nt(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ae+(Xe(a,14)===45?"inline-":"")+"box$3$1"+ae+"$2$3$1"+xe+"$2box$3")+a;case 100:return Nt(a,":",":"+xe)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Nt(a,"scroll-","scroll-snap-")+a}return a}function Tc(a,c){for(var d="",h=0;h<a.length;h++)d+=c(a[h],h,a,c)||"";return d}function m_(a,c,d,h){switch(a.type){case n_:if(a.children.length)break;case e_:case Th:return a.return=a.return||a.value;case y1:return"";case _1:return a.return=a.value+"{"+Tc(a.children,h)+"}";case Dc:if(!Oi(a.value=a.props.join(",")))return""}return Oi(d=Tc(a.children,h))?a.return=a.value+"{"+d+"}":""}function g_(a){var c=S1(a);return function(d,h,x,y){for(var b="",O=0;O<c;O++)b+=a[O](d,h,x,y)||"";return b}}function x_(a){return function(c){c.root||(c=c.return)&&a(c)}}function v_(a,c,d,h){if(a.length>-1&&!a.return)switch(a.type){case Th:a.return=T1(a.value,a.length,d);return;case _1:return Tc([tr(a,{value:Nt(a.value,"@","@"+ae)})],h);case Dc:if(a.length)return a_(d=a.props,function(x){switch(ca(x,h=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Uo(tr(a,{props:[Nt(x,/:(read-\w+)/,":"+_l+"$1")]})),Uo(tr(a,{props:[x]})),oh(a,{props:I0(d,h)});break;case"::placeholder":Uo(tr(a,{props:[Nt(x,/:(plac\w+)/,":"+ae+"input-$1")]})),Uo(tr(a,{props:[Nt(x,/:(plac\w+)/,":"+_l+"$1")]})),Uo(tr(a,{props:[Nt(x,/:(plac\w+)/,xe+"input-$1")]})),Uo(tr(a,{props:[x]})),oh(a,{props:I0(d,h)});break}return""})}}var y_={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},kn={},Ko=typeof process<"u"&&kn!==void 0&&(kn.REACT_APP_SC_ATTR||kn.SC_ATTR)||"data-styled",E1="active",A1="data-styled-version",Uc="6.1.19",Ah=`/*!sc*/
`,Ec=typeof window<"u"&&typeof document<"u",__=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&kn!==void 0&&kn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&kn.REACT_APP_SC_DISABLE_SPEEDY!==""?kn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&kn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&kn!==void 0&&kn.SC_DISABLE_SPEEDY!==void 0&&kn.SC_DISABLE_SPEEDY!==""&&kn.SC_DISABLE_SPEEDY!=="false"&&kn.SC_DISABLE_SPEEDY),Hc=Object.freeze([]),Qo=Object.freeze({});function b_(a,c,d){return d===void 0&&(d=Qo),a.theme!==d.theme&&a.theme||c||d.theme}var C1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),w_=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,S_=/(^-|-$)/g;function F0(a){return a.replace(w_,"-").replace(S_,"")}var z_=/(a)(d)/gi,ac=52,J0=function(a){return String.fromCharCode(a+(a>25?39:97))};function uh(a){var c,d="";for(c=Math.abs(a);c>ac;c=c/ac|0)d=J0(c%ac)+d;return(J0(c%ac)+d).replace(z_,"$1-$2")}var Vf,j1=5381,Yo=function(a,c){for(var d=c.length;d;)a=33*a^c.charCodeAt(--d);return a},M1=function(a){return Yo(j1,a)};function L1(a){return uh(M1(a)>>>0)}function T_(a){return a.displayName||a.name||"Component"}function Xf(a){return typeof a=="string"&&!0}var O1=typeof Symbol=="function"&&Symbol.for,R1=O1?Symbol.for("react.memo"):60115,E_=O1?Symbol.for("react.forward_ref"):60112,A_={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},C_={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},D1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},j_=((Vf={})[E_]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Vf[R1]=D1,Vf);function W0(a){return("type"in(c=a)&&c.type.$$typeof)===R1?D1:"$$typeof"in a?j_[a.$$typeof]:A_;var c}var M_=Object.defineProperty,L_=Object.getOwnPropertyNames,tg=Object.getOwnPropertySymbols,O_=Object.getOwnPropertyDescriptor,R_=Object.getPrototypeOf,eg=Object.prototype;function k1(a,c,d){if(typeof c!="string"){if(eg){var h=R_(c);h&&h!==eg&&k1(a,h,d)}var x=L_(c);tg&&(x=x.concat(tg(c)));for(var y=W0(a),b=W0(c),O=0;O<x.length;++O){var w=x[O];if(!(w in C_||d&&d[w]||b&&w in b||y&&w in y)){var S=O_(c,w);try{M_(a,w,S)}catch{}}}}return a}function Vr(a){return typeof a=="function"}function Ch(a){return typeof a=="object"&&"styledComponentId"in a}function qr(a,c){return a&&c?"".concat(a," ").concat(c):a||c||""}function ch(a,c){if(a.length===0)return"";for(var d=a[0],h=1;h<a.length;h++)d+=a[h];return d}function El(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function dh(a,c,d){if(d===void 0&&(d=!1),!d&&!El(a)&&!Array.isArray(a))return c;if(Array.isArray(c))for(var h=0;h<c.length;h++)a[h]=dh(a[h],c[h]);else if(El(c))for(var h in c)a[h]=dh(a[h],c[h]);return a}function jh(a,c){Object.defineProperty(a,"toString",{value:c})}function Xr(a){for(var c=[],d=1;d<arguments.length;d++)c[d-1]=arguments[d];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var D_=(function(){function a(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c}return a.prototype.indexOfGroup=function(c){for(var d=0,h=0;h<c;h++)d+=this.groupSizes[h];return d},a.prototype.insertRules=function(c,d){if(c>=this.groupSizes.length){for(var h=this.groupSizes,x=h.length,y=x;c>=y;)if((y<<=1)<0)throw Xr(16,"".concat(c));this.groupSizes=new Uint32Array(y),this.groupSizes.set(h),this.length=y;for(var b=x;b<y;b++)this.groupSizes[b]=0}for(var O=this.indexOfGroup(c+1),w=(b=0,d.length);b<w;b++)this.tag.insertRule(O,d[b])&&(this.groupSizes[c]++,O++)},a.prototype.clearGroup=function(c){if(c<this.length){var d=this.groupSizes[c],h=this.indexOfGroup(c),x=h+d;this.groupSizes[c]=0;for(var y=h;y<x;y++)this.tag.deleteRule(h)}},a.prototype.getGroup=function(c){var d="";if(c>=this.length||this.groupSizes[c]===0)return d;for(var h=this.groupSizes[c],x=this.indexOfGroup(c),y=x+h,b=x;b<y;b++)d+="".concat(this.tag.getRule(b)).concat(Ah);return d},a})(),bc=new Map,Ac=new Map,wc=1,rc=function(a){if(bc.has(a))return bc.get(a);for(;Ac.has(wc);)wc++;var c=wc++;return bc.set(a,c),Ac.set(c,a),c},k_=function(a,c){wc=c+1,bc.set(a,c),Ac.set(c,a)},B_="style[".concat(Ko,"][").concat(A1,'="').concat(Uc,'"]'),N_=new RegExp("^".concat(Ko,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),U_=function(a,c,d){for(var h,x=d.split(","),y=0,b=x.length;y<b;y++)(h=x[y])&&a.registerName(c,h)},H_=function(a,c){for(var d,h=((d=c.textContent)!==null&&d!==void 0?d:"").split(Ah),x=[],y=0,b=h.length;y<b;y++){var O=h[y].trim();if(O){var w=O.match(N_);if(w){var S=0|parseInt(w[1],10),E=w[2];S!==0&&(k_(E,S),U_(a,E,w[3]),a.getTag().insertRules(S,x)),x.length=0}else x.push(O)}}},ng=function(a){for(var c=document.querySelectorAll(B_),d=0,h=c.length;d<h;d++){var x=c[d];x&&x.getAttribute(Ko)!==E1&&(H_(a,x),x.parentNode&&x.parentNode.removeChild(x))}};function Z_(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var B1=function(a){var c=document.head,d=a||c,h=document.createElement("style"),x=(function(O){var w=Array.from(O.querySelectorAll("style[".concat(Ko,"]")));return w[w.length-1]})(d),y=x!==void 0?x.nextSibling:null;h.setAttribute(Ko,E1),h.setAttribute(A1,Uc);var b=Z_();return b&&h.setAttribute("nonce",b),d.insertBefore(h,y),h},P_=(function(){function a(c){this.element=B1(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(d){if(d.sheet)return d.sheet;for(var h=document.styleSheets,x=0,y=h.length;x<y;x++){var b=h[x];if(b.ownerNode===d)return b}throw Xr(17)})(this.element),this.length=0}return a.prototype.insertRule=function(c,d){try{return this.sheet.insertRule(d,c),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},a.prototype.getRule=function(c){var d=this.sheet.cssRules[c];return d&&d.cssText?d.cssText:""},a})(),q_=(function(){function a(c){this.element=B1(c),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(c,d){if(c<=this.length&&c>=0){var h=document.createTextNode(d);return this.element.insertBefore(h,this.nodes[c]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},a.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},a})(),Y_=(function(){function a(c){this.rules=[],this.length=0}return a.prototype.insertRule=function(c,d){return c<=this.length&&(this.rules.splice(c,0,d),this.length++,!0)},a.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},a.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},a})(),ig=Ec,G_={isServer:!Ec,useCSSOMInjection:!__},N1=(function(){function a(c,d,h){c===void 0&&(c=Qo),d===void 0&&(d={});var x=this;this.options=on(on({},G_),c),this.gs=d,this.names=new Map(h),this.server=!!c.isServer,!this.server&&Ec&&ig&&(ig=!1,ng(this)),jh(this,function(){return(function(y){for(var b=y.getTag(),O=b.length,w="",S=function(j){var R=(function(nt){return Ac.get(nt)})(j);if(R===void 0)return"continue";var G=y.names.get(R),q=b.getGroup(j);if(G===void 0||!G.size||q.length===0)return"continue";var X="".concat(Ko,".g").concat(j,'[id="').concat(R,'"]'),W="";G!==void 0&&G.forEach(function(nt){nt.length>0&&(W+="".concat(nt,","))}),w+="".concat(q).concat(X,'{content:"').concat(W,'"}').concat(Ah)},E=0;E<O;E++)S(E);return w})(x)})}return a.registerId=function(c){return rc(c)},a.prototype.rehydrate=function(){!this.server&&Ec&&ng(this)},a.prototype.reconstructWithOptions=function(c,d){return d===void 0&&(d=!0),new a(on(on({},this.options),c),this.gs,d&&this.names||void 0)},a.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(d){var h=d.useCSSOMInjection,x=d.target;return d.isServer?new Y_(x):h?new P_(x):new q_(x)})(this.options),new D_(c)));var c},a.prototype.hasNameForId=function(c,d){return this.names.has(c)&&this.names.get(c).has(d)},a.prototype.registerName=function(c,d){if(rc(c),this.names.has(c))this.names.get(c).add(d);else{var h=new Set;h.add(d),this.names.set(c,h)}},a.prototype.insertRules=function(c,d,h){this.registerName(c,d),this.getTag().insertRules(rc(c),h)},a.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},a.prototype.clearRules=function(c){this.getTag().clearGroup(rc(c)),this.clearNames(c)},a.prototype.clearTag=function(){this.tag=void 0},a})(),V_=/&/g,X_=/^\s*\/\/.*$/gm;function U1(a,c){return a.map(function(d){return d.type==="rule"&&(d.value="".concat(c," ").concat(d.value),d.value=d.value.replaceAll(",",",".concat(c," ")),d.props=d.props.map(function(h){return"".concat(c," ").concat(h)})),Array.isArray(d.children)&&d.type!=="@keyframes"&&(d.children=U1(d.children,c)),d})}function $_(a){var c,d,h,x=Qo,y=x.options,b=y===void 0?Qo:y,O=x.plugins,w=O===void 0?Hc:O,S=function(R,G,q){return q.startsWith(d)&&q.endsWith(d)&&q.replaceAll(d,"").length>0?".".concat(c):R},E=w.slice();E.push(function(R){R.type===Dc&&R.value.includes("&")&&(R.props[0]=R.props[0].replace(V_,d).replace(h,S))}),b.prefix&&E.push(v_),E.push(m_);var j=function(R,G,q,X){G===void 0&&(G=""),q===void 0&&(q=""),X===void 0&&(X="&"),c=X,d=G,h=new RegExp("\\".concat(d,"\\b"),"g");var W=R.replace(X_,""),nt=h_(q||G?"".concat(q," ").concat(G," { ").concat(W," }"):W);b.namespace&&(nt=U1(nt,b.namespace));var rt=[];return Tc(nt,g_(E.concat(x_(function(tt){return rt.push(tt)})))),rt};return j.hash=w.length?w.reduce(function(R,G){return G.name||Xr(15),Yo(R,G.name)},j1).toString():"",j}var I_=new N1,fh=$_(),H1=tn.createContext({shouldForwardProp:void 0,styleSheet:I_,stylis:fh});H1.Consumer;tn.createContext(void 0);function ag(){return z.useContext(H1)}var Z1=(function(){function a(c,d){var h=this;this.inject=function(x,y){y===void 0&&(y=fh);var b=h.name+y.hash;x.hasNameForId(h.id,b)||x.insertRules(h.id,b,y(h.rules,b,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=d,jh(this,function(){throw Xr(12,String(h.name))})}return a.prototype.getName=function(c){return c===void 0&&(c=fh),this.name+c.hash},a})(),K_=function(a){return a>="A"&&a<="Z"};function rg(a){for(var c="",d=0;d<a.length;d++){var h=a[d];if(d===1&&h==="-"&&a[0]==="-")return a;K_(h)?c+="-"+h.toLowerCase():c+=h}return c.startsWith("ms-")?"-"+c:c}var P1=function(a){return a==null||a===!1||a===""},q1=function(a){var c,d,h=[];for(var x in a){var y=a[x];a.hasOwnProperty(x)&&!P1(y)&&(Array.isArray(y)&&y.isCss||Vr(y)?h.push("".concat(rg(x),":"),y,";"):El(y)?h.push.apply(h,Tl(Tl(["".concat(x," {")],q1(y),!1),["}"],!1)):h.push("".concat(rg(x),": ").concat((c=x,(d=y)==null||typeof d=="boolean"||d===""?"":typeof d!="number"||d===0||c in y_||c.startsWith("--")?String(d).trim():"".concat(d,"px")),";")))}return h};function Gr(a,c,d,h){if(P1(a))return[];if(Ch(a))return[".".concat(a.styledComponentId)];if(Vr(a)){if(!Vr(y=a)||y.prototype&&y.prototype.isReactComponent||!c)return[a];var x=a(c);return Gr(x,c,d,h)}var y;return a instanceof Z1?d?(a.inject(d,h),[a.getName(h)]):[a]:El(a)?q1(a):Array.isArray(a)?Array.prototype.concat.apply(Hc,a.map(function(b){return Gr(b,c,d,h)})):[a.toString()]}function Q_(a){for(var c=0;c<a.length;c+=1){var d=a[c];if(Vr(d)&&!Ch(d))return!1}return!0}var F_=M1(Uc),J_=(function(){function a(c,d,h){this.rules=c,this.staticRulesId="",this.isStatic=(h===void 0||h.isStatic)&&Q_(c),this.componentId=d,this.baseHash=Yo(F_,d),this.baseStyle=h,N1.registerId(d)}return a.prototype.generateAndInjectStyles=function(c,d,h){var x=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,d,h):"";if(this.isStatic&&!h.hash)if(this.staticRulesId&&d.hasNameForId(this.componentId,this.staticRulesId))x=qr(x,this.staticRulesId);else{var y=ch(Gr(this.rules,c,d,h)),b=uh(Yo(this.baseHash,y)>>>0);if(!d.hasNameForId(this.componentId,b)){var O=h(y,".".concat(b),void 0,this.componentId);d.insertRules(this.componentId,b,O)}x=qr(x,b),this.staticRulesId=b}else{for(var w=Yo(this.baseHash,h.hash),S="",E=0;E<this.rules.length;E++){var j=this.rules[E];if(typeof j=="string")S+=j;else if(j){var R=ch(Gr(j,c,d,h));w=Yo(w,R+E),S+=R}}if(S){var G=uh(w>>>0);d.hasNameForId(this.componentId,G)||d.insertRules(this.componentId,G,h(S,".".concat(G),void 0,this.componentId)),x=qr(x,G)}}return x},a})(),Cc=tn.createContext(void 0);Cc.Consumer;function W_(a){var c=tn.useContext(Cc),d=z.useMemo(function(){return(function(h,x){if(!h)throw Xr(14);if(Vr(h)){var y=h(x);return y}if(Array.isArray(h)||typeof h!="object")throw Xr(8);return x?on(on({},x),h):h})(a.theme,c)},[a.theme,c]);return a.children?tn.createElement(Cc.Provider,{value:d},a.children):null}var $f={};function t2(a,c,d){var h=Ch(a),x=a,y=!Xf(a),b=c.attrs,O=b===void 0?Hc:b,w=c.componentId,S=w===void 0?(function(ht,wt){var vt=typeof ht!="string"?"sc":F0(ht);$f[vt]=($f[vt]||0)+1;var ot="".concat(vt,"-").concat(L1(Uc+vt+$f[vt]));return wt?"".concat(wt,"-").concat(ot):ot})(c.displayName,c.parentComponentId):w,E=c.displayName,j=E===void 0?(function(ht){return Xf(ht)?"styled.".concat(ht):"Styled(".concat(T_(ht),")")})(a):E,R=c.displayName&&c.componentId?"".concat(F0(c.displayName),"-").concat(c.componentId):c.componentId||S,G=h&&x.attrs?x.attrs.concat(O).filter(Boolean):O,q=c.shouldForwardProp;if(h&&x.shouldForwardProp){var X=x.shouldForwardProp;if(c.shouldForwardProp){var W=c.shouldForwardProp;q=function(ht,wt){return X(ht,wt)&&W(ht,wt)}}else q=X}var nt=new J_(d,R,h?x.componentStyle:void 0);function rt(ht,wt){return(function(vt,ot,Ut){var zt=vt.attrs,Rt=vt.componentStyle,Tt=vt.defaultProps,Kt=vt.foldedComponentIds,je=vt.styledComponentId,he=vt.target,mt=tn.useContext(Cc),N=ag(),it=vt.shouldForwardProp||N.shouldForwardProp,at=b_(ot,mt,Tt)||Qo,Mt=(function(ft,ut,Ct){for(var Qt,Ft=on(on({},ut),{className:void 0,theme:Ct}),cn=0;cn<ft.length;cn+=1){var en=Vr(Qt=ft[cn])?Qt(Ft):Qt;for(var Me in en)Ft[Me]=Me==="className"?qr(Ft[Me],en[Me]):Me==="style"?on(on({},Ft[Me]),en[Me]):en[Me]}return ut.className&&(Ft.className=qr(Ft.className,ut.className)),Ft})(zt,ot,at),lt=Mt.as||he,M={};for(var V in Mt)Mt[V]===void 0||V[0]==="$"||V==="as"||V==="theme"&&Mt.theme===at||(V==="forwardedAs"?M.as=Mt.forwardedAs:it&&!it(V,lt)||(M[V]=Mt[V]));var et=(function(ft,ut){var Ct=ag(),Qt=ft.generateAndInjectStyles(ut,Ct.styleSheet,Ct.stylis);return Qt})(Rt,Mt),st=qr(Kt,je);return et&&(st+=" "+et),Mt.className&&(st+=" "+Mt.className),M[Xf(lt)&&!C1.has(lt)?"class":"className"]=st,Ut&&(M.ref=Ut),z.createElement(lt,M)})(tt,ht,wt)}rt.displayName=j;var tt=tn.forwardRef(rt);return tt.attrs=G,tt.componentStyle=nt,tt.displayName=j,tt.shouldForwardProp=q,tt.foldedComponentIds=h?qr(x.foldedComponentIds,x.styledComponentId):"",tt.styledComponentId=R,tt.target=h?x.target:a,Object.defineProperty(tt,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ht){this._foldedDefaultProps=h?(function(wt){for(var vt=[],ot=1;ot<arguments.length;ot++)vt[ot-1]=arguments[ot];for(var Ut=0,zt=vt;Ut<zt.length;Ut++)dh(wt,zt[Ut],!0);return wt})({},x.defaultProps,ht):ht}}),jh(tt,function(){return".".concat(tt.styledComponentId)}),y&&k1(tt,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),tt}function og(a,c){for(var d=[a[0]],h=0,x=c.length;h<x;h+=1)d.push(c[h],a[h+1]);return d}var sg=function(a){return Object.assign(a,{isCss:!0})};function Go(a){for(var c=[],d=1;d<arguments.length;d++)c[d-1]=arguments[d];if(Vr(a)||El(a))return sg(Gr(og(Hc,Tl([a],c,!0))));var h=a;return c.length===0&&h.length===1&&typeof h[0]=="string"?Gr(h):sg(Gr(og(h,c)))}function hh(a,c,d){if(d===void 0&&(d=Qo),!c)throw Xr(1,c);var h=function(x){for(var y=[],b=1;b<arguments.length;b++)y[b-1]=arguments[b];return a(c,d,Go.apply(void 0,Tl([x],y,!1)))};return h.attrs=function(x){return hh(a,c,on(on({},d),{attrs:Array.prototype.concat(d.attrs,x).filter(Boolean)}))},h.withConfig=function(x){return hh(a,c,on(on({},d),x))},h}var Y1=function(a){return hh(t2,a)},T=Y1;C1.forEach(function(a){T[a]=Y1(a)});function Ri(a){for(var c=[],d=1;d<arguments.length;d++)c[d-1]=arguments[d];var h=ch(Go.apply(void 0,Tl([a],c,!1))),x=L1(h);return new Z1(x,h)}const jl={bg:"#f5f5f5",text:"#000",cardBg:"#ffffff",cardShadow:"rgba(0,0,0,0.1)",inputBg:"#fff",inputBorder:"#ccc",inputText:"#000",buttonBg:"#007bff",buttonHover:"#006ae0",cardTitle:"#000",statCard:"#fff",statBg:"yellow"},Ml={bg:"#121212",text:"#ffffff",cardBg:"#1e1e1e",cardShadow:"rgba(255,255,255,0.05)",inputBg:"#1b1b1b",inputBorder:"#444",inputText:"#fff",buttonBg:"#0a84ff",buttonHover:"#0060d0",cardTitle:"#fff",statCard:"#25252A",statBg:"red"},If=window.location.hostname==="localhost"?"":"https://api.e-kundalikfu.uz";class e2{constructor(){this.token=localStorage.getItem("authToken")||""}getImageUrl(c){return c?c.startsWith("http")||c.startsWith("/")?c:`/${c}`:""}async request(c,d={}){const h=`${If}${c}`,x={headers:{"Content-Type":"application/json",...d.headers},...d};this.token&&(x.headers.Authorization=`Bearer ${this.token}`);try{const y=await fetch(h,x);if(y.status===401)throw this.clearToken(),new Error("Authentication failed. Please login again.");if(!y.ok)throw new Error(`HTTP xatolik! Status: ${y.status}`);const b=y.headers.get("content-type");return b&&b.includes("application/json")?await y.json():{success:!0}}catch(y){throw y.name==="TypeError"&&y.message.includes("Failed to fetch")?new Error("CORS xatosi: Serverga ulanib bo'lmadi. Backend CORS sozlamalarini tekshiring."):y}}setToken(c){this.token=c,localStorage.setItem("authToken",c)}clearToken(){this.token="",localStorage.removeItem("authToken"),window.location.pathname!=="/"&&(window.location.href="/")}hasToken(){return!!this.token}async login(c,d){const h=await fetch(`${If}/users/login/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:c,password:d})});if(!h.ok){const y=await h.text();throw new Error(`Login failed: ${y}`)}const x=await h.json();return x.access_token&&this.setToken(x.access_token),x}async getCurrentUser(){return this.request("/users/")}async logout(){return this.clearToken(),{success:!0}}async createUser(c){return this.request("/users/users/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)})}async getUsers(){return this.request("/users/users/")}async getUserById(c){return this.request(`/users/users/${c}/`)}async updateUser(c,d){return this.request(`/users/users/${c}/`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)})}async partialUpdateUser(c,d){return this.request(`/users/users/${c}/`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)})}async deleteUser(c){return this.request(`/users/users/${c}/`,{method:"DELETE"})}async getFaculties(){return this.request("/university/faculties/")}async createFaculty(c){return this.request("/university/faculties/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)})}async getFaculty(c){return this.request(`/university/faculties/${c}/`)}async updateFaculty(c,d){return this.request(`/university/faculties/${c}/`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)})}async partialUpdateFaculty(c,d){return this.request(`/university/faculties/${c}/`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)})}async deleteFaculty(c){return this.request(`/university/faculties/${c}/`,{method:"DELETE"})}async getDepartments(){return this.request("/university/departments/")}async createDepartment(c){return this.request("/university/departments/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)})}async getDepartment(c){return this.request(`/university/departments/${c}/`)}async updateDepartment(c,d){return this.request(`/university/departments/${c}/`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)})}async deleteDepartment(c){return this.request(`/university/departments/${c}/`,{method:"DELETE"})}async getDirections(){return this.request("/university/directions/")}async createDirection(c){return this.request("/university/directions/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)})}async getDirection(c){return this.request(`/university/directions/${c}/`)}async updateDirection(c,d){return this.request(`/university/directions/${c}/`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)})}async deleteDirection(c){return this.request(`/university/directions/${c}/`,{method:"DELETE"})}async getGroups(){return this.request("/university/groups/")}async createGroup(c){return this.request("/university/groups/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)})}async getGroup(c){return this.request(`/university/groups/${c}/`)}async updateGroup(c,d){return this.request(`/university/groups/${c}/`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)})}async deleteGroup(c){return this.request(`/university/groups/${c}/`,{method:"DELETE"})}async getPracticeDays(){return this.request("/practice/practice_days/")}async getPracticeDay(c){return this.request(`/practice/practice_days/${c}/`)}async createPracticeDay(c){return this.request("/practice/practice_days/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)})}async updatePracticeDay(c,d){return this.request(`/practice/practice_days/${c}/`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)})}async partialUpdatePracticeDay(c,d){return this.request(`/practice/practice_days/${c}/`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)})}async deletePracticeDay(c){return this.request(`/practice/practice_days/${c}/`,{method:"DELETE"})}async getMyReports(){return this.request("/practice/reports/")}async getMyReport(c){return this.request(`/practice/reports/${c}/`)}async createReport(c){const d=`${If}/practice/reports/`,h={method:"POST",headers:{Authorization:this.token?`Bearer ${this.token}`:""},body:c};try{const x=await fetch(d,h);if(!x.ok)throw new Error(`HTTP xatolik! Status: ${x.status}`);return await x.json()}catch(x){throw x}}async updateReport(c,d){return this.request(`/practice/reports/${c}/`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)})}async deleteReport(c){return this.request(`/practice/reports/${c}/`,{method:"DELETE"})}}const Et=new e2,G1=z.createContext({}),V1=()=>z.useContext(G1),n2=({children:a})=>{const[c,d]=z.useState(null),[h,x]=z.useState(!0);z.useEffect(()=>{y()},[]);const y=async()=>{try{if(Et.hasToken()){const E=await Et.getCurrentUser();d(E)}}catch{d(null)}finally{x(!1)}},S={user:c,loading:h,login:async(E,j)=>{try{const R=await Et.login(E,j),G=await Et.getCurrentUser();return d(G),localStorage.setItem("user",JSON.stringify(G)),{success:!0,user:G}}catch(R){return{success:!1,error:R.message}}},logout:async()=>{await Et.logout(),d(null),localStorage.removeItem("user")},updateUser:E=>{d(E),localStorage.setItem("user",JSON.stringify(E))},checkAuth:y};return p.jsx(G1.Provider,{value:S,children:a})},Sn=({children:a,allowedRoles:c})=>{const{user:d,loading:h}=V1(),x=hi();if(h)return p.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:p.jsx("div",{children:"Yuklanmoqda..."})});if(!d)return p.jsx(gl,{to:"/",state:{from:x},replace:!0});if(c&&!c.includes(d.role))switch(d.role){case"student":return p.jsx(gl,{to:"/student/dashboard",replace:!0});case"teacher":case"head_of_department":case"deputy_dean":case"dean":case"rector":case"admin":case"super_user":return p.jsx(gl,{to:"/admin/dashboard",replace:!0});default:return p.jsx(gl,{to:"/",replace:!0})}return a},X1="/e-maktab/assets/logog-D76_Kt68.png";var $1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},lg=tn.createContext&&tn.createContext($1),er=function(){return er=Object.assign||function(a){for(var c,d=1,h=arguments.length;d<h;d++){c=arguments[d];for(var x in c)Object.prototype.hasOwnProperty.call(c,x)&&(a[x]=c[x])}return a},er.apply(this,arguments)},i2=function(a,c){var d={};for(var h in a)Object.prototype.hasOwnProperty.call(a,h)&&c.indexOf(h)<0&&(d[h]=a[h]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,h=Object.getOwnPropertySymbols(a);x<h.length;x++)c.indexOf(h[x])<0&&Object.prototype.propertyIsEnumerable.call(a,h[x])&&(d[h[x]]=a[h[x]]);return d};function I1(a){return a&&a.map(function(c,d){return tn.createElement(c.tag,er({key:d},c.attr),I1(c.child))})}function Ht(a){return function(c){return tn.createElement(a2,er({attr:er({},a.attr)},c),I1(a.child))}}function a2(a){var c=function(d){var h=a.attr,x=a.size,y=a.title,b=i2(a,["attr","size","title"]),O=x||d.size||"1em",w;return d.className&&(w=d.className),a.className&&(w=(w?w+" ":"")+a.className),tn.createElement("svg",er({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},d.attr,h,b,{className:w,style:er(er({color:a.color||d.color},d.style),a.style),height:O,width:O,xmlns:"http://www.w3.org/2000/svg"}),y&&tn.createElement("title",null,y),a.children)};return lg!==void 0?tn.createElement(lg.Consumer,null,function(d){return c(d)}):c($1)}function jc(a){return Ht({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}},{tag:"path",attr:{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"}}]})(a)}function r2(a){return Ht({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"}}]})(a)}function o2(a){return Ht({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"}}]})(a)}function s2(a){return Ht({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"M328 112L184 256l144 144"}}]})(a)}function l2(a){return Ht({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"M184 112l144 144-144 144"}}]})(a)}function u2(a){return Ht({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M320 176v-40a40 40 0 00-40-40H88a40 40 0 00-40 40v240a40 40 0 0040 40h192a40 40 0 0040-40v-40m64-160l80 80-80 80m-193-80h273"}}]})(a)}function c2(a){return Ht({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32",d:"M400 148l-21.12-24.57A191.43 191.43 0 00240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 00181.07-128"}},{tag:"path",attr:{d:"M464 97.42V208a16 16 0 01-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z"}}]})(a)}const d2="/e-maktab/assets/runaway1-CCw2NnUj.gif",f2="/e-maktab/assets/runaway2-vaqxQeZi.gif";function Mh(a){return Ht({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"}}]})(a)}function h2(a){return Ht({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"}}]})(a)}function K1(a){return Ht({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"}}]})(a)}function p2(a){return Ht({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.61 233.32L278.68 9.39c-12.52-12.52-32.83-12.52-45.36 0L9.39 233.32c-12.52 12.53-12.52 32.83 0 45.36l223.93 223.93c12.52 12.53 32.83 12.53 45.36 0l223.93-223.93c12.52-12.53 12.52-32.83 0-45.36zm-100.98 12.56l-84.21 77.73c-5.12 4.73-13.43 1.1-13.43-5.88V264h-96v64c0 4.42-3.58 8-8 8h-32c-4.42 0-8-3.58-8-8v-80c0-17.67 14.33-32 32-32h112v-53.73c0-6.97 8.3-10.61 13.43-5.88l84.21 77.73c3.43 3.17 3.43 8.59 0 11.76z"}}]})(a)}function m2(a){return Ht({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"}}]})(a)}function ug(a){return Ht({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"}}]})(a)}function bl(a){return Ht({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"}}]})(a)}function Q1(a){return Ht({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"}}]})(a)}function ph(a){return Ht({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"}}]})(a)}function Xo(a){return Ht({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"}}]})(a)}function cg(a){return Ht({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M360 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24 0 90.965 51.016 167.734 120.842 192C75.016 280.266 24 357.035 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24 0-90.965-51.016-167.734-120.842-192C308.984 231.734 360 154.965 360 64c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24zm-75.078 384H99.08c17.059-46.797 52.096-80 92.92-80 40.821 0 75.862 33.196 92.922 80zm.019-256H99.078C91.988 108.548 88 86.748 88 64h208c0 22.805-3.987 44.587-11.059 64z"}}]})(a)}function dg(a){return Ht({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"}}]})(a)}function g2(a){return Ht({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"}}]})(a)}function x2(a){return Ht({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"}}]})(a)}function v2(a){return Ht({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}}]})(a)}function y2(a){return Ht({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"}}]})(a)}function _2(a){return Ht({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"}}]})(a)}function b2(a){return Ht({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"}}]})(a)}function vl(a){return Ht({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"}}]})(a)}function w2(a){return Ht({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"}}]})(a)}function S2(a){return Ht({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"}}]})(a)}function fg(a){return Ht({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(a)}function z2(a){return Ht({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"}}]})(a)}function wl(a){return Ht({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z"}}]})(a)}function Vo(a){return Ht({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z"}}]})(a)}function hg(a){return Ht({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}}]})(a)}function Sc(a){return Ht({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"}}]})(a)}function T2(a){return Ht({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"}}]})(a)}const E2=Ri`
  0% {
    opacity: 0;
    transform: scale(0.92);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`,A2=T.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  height: 87px;
  background: #007bff;

  @media (max-width: 768px) {
    padding: 0 12px;
  }
`,C2=T.div`
  display: flex;
  align-items: center;
  gap: 15px;

  img {
    height: 70px;
  }
  @media (max-width: 768px) {
    img {
      height: 40px;
    }
  }
`,j2=T.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,pg=T.button`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: ${a=>a.dark?"rgba(255,255,255,0.1)":"rgba(255,255,255,0.2)"};
  border: 1px solid
    ${a=>a.dark?"rgba(255,255,255,0.3)":"rgba(255,255,255,0.4)"};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    background: ${a=>a.dark?"rgba(255,255,255,0.2)":"rgba(255,255,255,0.3)"};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    transform: none;

    &:hover {
      background: ${a=>a.dark?"rgba(255,255,255,0.1)":"rgba(255,255,255,0.2)"};
    }
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 16px;
  }
`,M2=T.div`
  display: flex;
  align-items: center;
  gap: 18px;
`,L2=T.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #ffffff33;
  border: 2px solid #ffffff80;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
  font-size: 18px;
  transition: 0.2s;

  &:hover {
    background: #ffffff55;
  }
`;T.div`
  color: white;
  font-size: 14px;
  font-weight: 500;
  text-align: right;

  .full-name {
    font-size: 16px;
    font-weight: 600;
  }

  .role {
    font-size: 12px;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;const O2=T.div`
  display: flex;
  gap: 6px;

  span {
    padding: 4px 6px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    background: ${a=>a.dark?"#374151":"#e5e7eb"};

    &:hover {
      opacity: 0.7;
    }
  }
`,R2=T.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  padding: 12px 18px;
`,D2=T.div`
  position: fixed;
  inset: 0;
  z-index: 9998;
`,k2=T.div`
  position: fixed;
  top: 90px;
  right: 40px;
  background: ${a=>a.dark?"rgba(31,41,55,0.8)":"rgba(255,255,255,0.8)"};
  color: ${a=>a.dark?"#f9fafb":"#111"};
  backdrop-filter: blur(15px);
  border-radius: 16px;
  padding: 12px 0;
  width: 230px;
  box-shadow: 0 10px 40px #00000040;
  z-index: 9999;
  animation: ${E2} 0.2s ease;

  @media (max-width: 768px) {
    right: 10px;
    top: 80px;
  }
`,mg=T.div`
  padding: 12px 18px;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  transition: 0.2s;
  align-items: center;
  &:hover {
    background: ${a=>a.dark?"#374151":"#f3f4f6"};
  }
`,B2=T.div`
  width: 50px;
  height: 26px;
  background: ${a=>a.dark?"#4b5563":"#d1d5db"};
  border-radius: 30px;
  padding: 3px;
  position: relative;
  cursor: pointer;
  transition: 0.25s ease;
`,N2=T.div`
  width: 20px;
  height: 20px;
  background: ${a=>a.dark?"#111827":"white"};
  border-radius: 50%;
  position: absolute;
  left: ${a=>a.dark?"27px":"3px"};
  transition: 0.25s ease;
  box-shadow: 0 2px 6px #0003;
`,U2=T.div`
  height: 100%;
  width: 57%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,H2=T.div`
  width: 100%;
  padding: 12px 18px;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  transition: 0.2s;
  align-items: center;
  &:hover {
    background: ${a=>a.dark?"#374151":"#f3f4f6"};
  }
  svg {
    font-size: 18px;
    font-weight: 700;
  }
  img {
    height: 30px;
  }
`,Z2=T.div`
  display: flex;
`;function P2({dark:a,setDark:c}){const[d,h]=z.useState(!1),[x,y]=z.useState("uz"),[b,O]=z.useState([]),[w,S]=z.useState(-1),[E,j]=z.useState(null),[R,G]=z.useState(!0),q=z.useRef(null),X=zn(),W=hi();z.useEffect(()=>{nt()},[]);const nt=async()=>{try{G(!0);const Rt=await Et.getCurrentUser();j(Rt),localStorage.setItem("user",JSON.stringify(Rt))}catch{const Tt=localStorage.getItem("user");Tt&&j(JSON.parse(Tt))}finally{G(!1)}};z.useEffect(()=>{if(b.length===0)O([W.pathname]),S(0);else if(W.pathname!==b[w]){const Tt=b.slice(0,w+1);Tt.push(W.pathname),O(Tt),S(Tt.length-1)}},[W.pathname]);const rt=()=>{if(!E)return"?";if(E.first_name&&E.last_name)return`${E.first_name[0]}${E.last_name[0]}`;if(E.username)return E.username[0].toUpperCase()},tt=()=>E?E.first_name&&E.last_name?`${E.first_name} ${E.last_name}`:E.username?E.username:"Foydalanuvchi":"Foydalanuvchi",ht=()=>!E||!E.role?"":{super_user:"Super Admin",admin:"Administrator",rector:"Rektor",dean:"Dekan",deputy_dean:"Dekan o'rinbosari",head_of_department:"Kafedra mudiri",teacher:"O'qituvchi",student:"Talaba"}[E.role]||E.role,wt=()=>{if(w>0){const Rt=w-1;S(Rt),X(b[Rt])}},vt=()=>{if(w<b.length-1){const Rt=w+1;S(Rt),X(b[Rt])}};z.useEffect(()=>{const Rt=Tt=>{Tt.altKey&&Tt.key==="ArrowLeft"&&(Tt.preventDefault(),wt()),Tt.altKey&&Tt.key==="ArrowRight"&&(Tt.preventDefault(),vt())};return window.addEventListener("keydown",Rt),()=>window.removeEventListener("keydown",Rt)},[w,b]),z.useEffect(()=>{const Rt=Tt=>{q.current&&!q.current.contains(Tt.target)&&h(!1)};return document.addEventListener("mousedown",Rt),()=>document.removeEventListener("mousedown",Rt)},[]);const ot=async()=>{try{await Et.logout()}catch{}finally{j(null),localStorage.removeItem("user"),localStorage.removeItem("authToken"),X("/")}},Ut=()=>{if(!E)return"/";switch(E.role){case"student":return"/student/dashboard";case"teacher":return"/students";case"head_of_department":return"/directions";case"dean":case"deputy_dean":return"/departments";case"rector":return"/faculties";case"admin":case"super_user":return"/admin/dashboard";default:return"/"}},zt=()=>{X(Ut())};return p.jsxs(A2,{children:[p.jsx(C2,{children:p.jsx("img",{src:X1,alt:"Logo",style:{cursor:"pointer"},onClick:zt})}),p.jsxs(M2,{children:[p.jsxs(j2,{children:[p.jsx(pg,{dark:a?!0:void 0,onClick:wt,disabled:w<=0,title:"Orqaga (Alt + ←)",children:p.jsx(s2,{})}),p.jsx(pg,{dark:a?!0:void 0,onClick:vt,disabled:w>=b.length-1,title:"Oldinga (Alt + →)",children:p.jsx(l2,{})})]}),p.jsx(L2,{onClick:()=>h(!d),children:R?p.jsx(c2,{}):rt()||p.jsx(T2,{})}),d&&p.jsxs(p.Fragment,{children:[p.jsx(D2,{onClick:()=>h(!1)}),p.jsxs(k2,{dark:a,ref:q,children:[!R&&E&&p.jsx(mg,{dark:a,style:{borderBottom:"1px solid rgba(0,0,0,0.1)",cursor:"default",opacity:a?.8:.9,fontSize:"14px"},children:p.jsxs("div",{children:[p.jsx("div",{style:{fontWeight:600},children:tt()}),p.jsx("div",{style:{fontSize:"12px",marginTop:"4px"},children:ht()})]})}),p.jsxs(mg,{dark:a,children:["Til",p.jsxs(O2,{dark:a,children:[p.jsx("span",{onClick:()=>y("uz"),children:"UZ"}),p.jsx("span",{onClick:()=>y("ru"),children:"RU"}),p.jsx("span",{onClick:()=>y("en"),children:"EN"})]})]}),p.jsxs(R2,{dark:a,children:[p.jsx("span",{children:"Rejim "}),p.jsxs(U2,{children:[p.jsx(o2,{size:20,style:{opacity:a?.4:1}}),p.jsx(B2,{dark:a,onClick:()=>c(!a),children:p.jsx(N2,{dark:a})}),p.jsx(r2,{size:20,style:{opacity:a?1:.4}})]})]}),p.jsxs(H2,{dark:a,onClick:ot,children:["Chiqish",p.jsx(Z2,{children:a?p.jsx(p.Fragment,{children:p.jsx(u2,{})}):p.jsxs(p.Fragment,{children:[p.jsx("img",{src:d2,alt:"Run away..."}),p.jsx("img",{src:f2,alt:"Run away..."})]})})]})]})]})]})]})}const q2="/e-maktab/assets/santa-FXeBDO9O.gif",Y2=Ri`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,G2=Ri`
  0% {
    transform: translateY(-10px) translateX(0) rotate(0deg);
  }
  25% {
    transform: translateY(25vh) translateX(20px) rotate(90deg);
  }
  50% {
    transform: translateY(50vh) translateX(-10px) rotate(180deg);
  }
  75% {
    transform: translateY(75vh) translateX(30px) rotate(270deg);
  }
  100% {
    transform: translateY(100vh) translateX(0) rotate(360deg);
  }
`,V2=Ri`
  0% {
    transform: translateY(-10px) translateX(0) rotate(0deg);
  }
  30% {
    transform: translateY(30vh) translateX(-15px) rotate(120deg);
  }
  60% {
    transform: translateY(60vh) translateX(15px) rotate(240deg);
  }
  100% {
    transform: translateY(100vh) translateX(-5px) rotate(360deg);
  }
`,X2=Ri`
  0% {
    transform: translateY(-10px) translateX(0) rotate(0deg);
  }
  50% {
    transform: translateY(50vh) translateX(10px) rotate(180deg);
  }
  100% {
    transform: translateY(100vh) translateX(-10px) rotate(360deg);
  }
`,$2=Ri`
  0% {
    left: -50%; /* o'ng tomondan boshlanadi */
    transform: translateX(0) scaleX(-1); /* chap tomonga burilgan */
  }
  50% {
    left: 50%;
    transform: translateX(-50%) scaleX(-1); /* markazda */
  }
  55% {
    left: 50%;
    transform: translateX(-50%) scaleX(-1); /* qisqa to'xtash */
  }
  100% {
    left: 100%; /* chap tomondan chiqib ketadi */
    transform: translateX(0) scaleX(-1); /* chap tomonga burilgan */
  }
`,I2=T.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  position: relative;
  overflow-x: hidden;

  background: ${({$dark:a,theme:c})=>a?c.bg||"#0F172A":c.bg||"#ffffff"};

  color: ${({$dark:a,theme:c})=>a?c.text||"#F8FAFC":c.text||"#0F172A"};

  transition: background 0.5s ease, color 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${({$dark:a})=>a?"rgba(66, 153, 225, 0.15)":"rgba(66, 153, 225, 0.05)"}
        50%,
      transparent 100%
    );
    background-size: 400% 400%;
    animation: ${Y2} 8s ease infinite;
    z-index: 0;
    opacity: ${({$dark:a})=>a?.8:.4};
    transition: opacity 0.5s ease;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`,K2=T.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  overflow: hidden;
  z-index: 1;
`,Q2=T.div`
  position: absolute;
  color: ${({$dark:a,$layer:c})=>a?c==="near"?"#E2E8F0":c==="mid"?"#CBD5E1":"#94A3B8":c==="near"?"#DBEAFE":c==="mid"?"#BFDBFE":"#93C5FD"};
  user-select: none;
  cursor: default;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  opacity: ${({$opacity:a})=>a};
  text-shadow: ${({$dark:a,$layer:c})=>a&&c==="near"?"0 0 3px rgba(226, 232, 240, 0.5)":"none"};

  ${({$layer:a})=>a==="near"?Go`
        font-size: clamp(18px, 2vw, 24px);
        animation-name: ${Go`
          ${G2}
        `};
        filter: blur(0px);
        z-index: 3;
      `:a==="mid"?Go`
        font-size: clamp(12px, 1.5vw, 16px);
        animation-name: ${V2};
        filter: blur(0.3px);
        z-index: 2;
      `:Go`
        font-size: clamp(8px, 1vw, 12px);
        animation-name: ${X2};
        filter: blur(0.8px);
        z-index: 1;
      `}

  animation-duration: ${({$duration:a})=>a}s;
  animation-delay: ${({$delay:a})=>a}s;
  left: ${({$left:a})=>a}%;
  top: -10px;
`,F2=T.img`
  position: fixed;
  top: 80%;
  width: 250px;
  height: auto;

  z-index: 2;
  pointer-events: none;
  animation: ${$2} 10s ease-in-out forwards;
  display: ${({$show:a})=>a?"block":"none"};

  @media (max-width: 768px) {
    width: 170px;
  }
`;function J2({children:a,dark:c=!1}){const[d,h]=z.useState(!1);z.useEffect(()=>{const y=()=>{h(!0),setTimeout(()=>{h(!1)},1e5)};y();const b=setInterval(y,6e5);return()=>clearInterval(b)},[]);const x=z.useMemo(()=>{const y=[],b=["❄","❅","❄","❅"];return(c?[{name:"near",count:15},{name:"mid",count:25},{name:"far",count:35}]:[{name:"near",count:8},{name:"mid",count:15},{name:"far",count:22}]).forEach(({name:w,count:S})=>{for(let E=0;E<S;E++)y.push({id:`${w}-${E}`,char:b[Math.floor(Math.random()*b.length)],layer:w,left:Math.random()*100,duration:w==="near"?8+Math.random()*4:w==="mid"?12+Math.random()*6:15+Math.random()*8,delay:-Math.random()*20,opacity:w==="near"?.7+Math.random()*.3:w==="mid"?.5+Math.random()*.3:.3+Math.random()*.3})}),y},[c]);return p.jsxs(I2,{$dark:c,children:[p.jsx(K2,{children:x.map(y=>p.jsx(Q2,{$dark:c,$layer:y.layer,$left:y.left,$duration:y.duration,$delay:y.delay,$opacity:y.opacity,children:y.char},y.id))}),p.jsx(F2,{src:q2,alt:"Flying animation",$show:d},d?"show":"hide"),a]})}const Kf=T.div`
  color: ${a=>a.theme.text};
  padding: 30px 50px;
  transition: all 0.3s ease;
  z-index: 0;

  /* Clean blue gradient that moves across */
  background-size: 200% 100%;
  margin-top: -3px;
  /* Simple animated top border */
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-size: 200% 100%;
  }

  @media (max-width: 1024px) {
    padding: 25px 30px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px 10px;
  }
`,W2=T.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 70px;
  margin-bottom: 30px;

  @media (max-width: 1200px) {
    gap: 40px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: 640px) {
    display: none;
  }
`,gg=T.div`
  background-color: ${a=>a.theme.statCard};
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 1px 3px ${a=>a.theme.cardShadow};
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${a=>a.theme.cardShadow};
  }

  @media (max-width: 1200px) {
    padding: 15px;
    gap: 12px;
  }

  @media (max-width: 1024px) {
    padding: 18px;
  }
`,xg=T.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  @media (max-width: 1200px) {
    width: 45px;
    height: 45px;
    font-size: 20px;
  }
`,vg=T.div`
  flex: 1;
`,yg=T.p`
  margin: 0;
  font-size: 16px;
  opacity: 0.7;
  font-weight: 600;
  color: ${a=>a.theme.text};

  @media (max-width: 1200px) {
    font-size: 14px;
  }
`,_g=T.p`
  margin: 8px 0 0 0;
  font-size: 28px;
  font-weight: bold;
  color: ${a=>a.theme.text};

  @media (max-width: 1200px) {
    font-size: 24px;
  }
`,bg=T.p`
  margin: 4px 0 0 0;
  font-size: 12px;
  opacity: 0.6;
  color: ${a=>a.theme.text};
`,tb=T.h2`
  margin: 0px;
  font-size: 26px;
  font-weight: 600;
  color: ${a=>a.theme.text};

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`,eb=T.div`
  background-color: ${a=>a.theme.cardBg};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 3px ${a=>a.theme.cardShadow};

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 12px 8px;
    border-radius: 6px;
  }
`,nb=T.div`
  padding: 0px 30px 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${a=>a.theme.inputBorder};

  @media (max-width: 768px) {
    padding: 0px 20px 10px 20px;
  }

  @media (max-width: 480px) {
    padding: 0px 10px 8px 10px;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
`,ib=T.span`
  font-size: 14px;
  font-weight: 600;
  color: ${a=>a.theme.text};

  @media (max-width: 480px) {
    font-size: 16px;
  }
`,ab=T.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 15px;
  padding: 20px;
  border-bottom: 1px solid ${a=>a.theme.inputBorder};
  align-items: center;
  transition: all 0.2s ease;
  border-radius: 8px;
  margin: 4px 0;

  &:hover {
    background-color: #64646444;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px ${a=>a.theme.cardShadow};
    cursor: pointer;
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 12px;
  }

  @media (max-width: 860px) {
    gap: 12px;
    padding: 12px 8px;
    margin: 8px 0;
    border: 1px solid ${a=>a.theme.inputBorder};
    border-radius: 6px;

    &:hover {
      transform: none;
      box-shadow: 0 2px 4px ${a=>a.theme.cardShadow};
    }
  }
`,oc=T.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: ${a=>a.theme.text};
  padding: 8px 0;
  @media (max-width: 860px) {
    gap: 10px;
    font-size: 14px;
    display: none;
  }

  @media (max-width: 480px) {
    gap: 8px;
    font-size: 13px;
  }
`,rb=T.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  color: ${a=>a.theme.text};
  padding: 8px 0;

  @media (max-width: 768px) {
    gap: 10px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    font-size: 14px;
  }
`,ob=T.div`
  display: none;
  @media (max-width: 860px) {
    width: 80vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`,Ho=T.div`
  display: flex;
  width: 100%;
  align-items: center;
  color: ${a=>a.theme.text};
  font-size: 13px;
  gap: 3px;

  @media (max-width: 768px) {
    font-size: 14px;
    gap: 6px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`,Zo=T.span`
  font-size: 13px;
  opacity: 0.7;
  display: block;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`,Hr=T.span`
  font-weight: 600;
  display: block;
  font-size: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    word-break: break-word;
  }
`,Po=T.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 480px) {
    gap: 2px;
    width: 100%;
  }
`;function sb({isDark:a=!1,onThemeChange:c}){const d=a?Ml:jl,h=zn(),[x,y]=z.useState("all"),[b,O]=z.useState([]),[w,S]=z.useState(!0),[E,j]=z.useState("");return z.useEffect(()=>{localStorage.getItem("preferredTheme")==="dark"&&!a&&c&&c(!0)},[]),z.useEffect(()=>{localStorage.setItem("preferredTheme",a?"dark":"light")},[a]),z.useEffect(()=>{const R=localStorage.getItem("authToken");Et.setToken(R),(async()=>{try{S(!0),j("");const q=await Et.getFaculties();O(q)}catch(q){j("Ma'lumotlarni yuklashda xatolik yuz berdi: "+q.message)}finally{S(!1)}})()},[h]),w?p.jsx(Kf,{children:p.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"200px",color:d.text},children:"Yuklanmoqda..."})}):E?p.jsx(Kf,{children:p.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"200px",color:"#ef4444"},children:E})}):p.jsxs(Kf,{children:[p.jsxs(W2,{children:[p.jsxs(gg,{children:[p.jsx(xg,{children:p.jsx(wl,{})}),p.jsxs(vg,{children:[p.jsx(yg,{children:"Fakultetlar"}),p.jsx(_g,{children:b.length}),p.jsx(bg,{children:"Jami fakultetlar soni"})]})]}),p.jsxs(gg,{children:[p.jsx(xg,{children:p.jsx(Sc,{})}),p.jsxs(vg,{children:[p.jsx(yg,{children:"Kafedralar"}),p.jsx(_g,{children:b.reduce((R,G)=>R+(G.departments?.length||0),0)}),p.jsx(bg,{children:"Jami kafedralar soni"})]})]})]}),p.jsxs(eb,{children:[p.jsxs(nb,{children:[p.jsx(tb,{children:"FAKULTETLAR RO'YXATI"}),p.jsx("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:p.jsxs(ib,{children:[b.length," ta"]})})]}),b.length===0?p.jsx("div",{style:{textAlign:"center",padding:"40px",color:d.text,opacity:.7},children:"Hech qanday fakultet topilmadi"}):b.map(R=>p.jsxs(ab,{style:{cursor:"pointer"},onClick:()=>h(`/faculty/${R.id}`),children:[p.jsx(oc,{children:p.jsxs(Po,{children:[p.jsx(Ho,{children:p.jsx(Zo,{children:"Fakultet"})}),p.jsx(Hr,{children:R.name}),p.jsx(Hr,{children:R.abbr})]})}),p.jsx(oc,{children:p.jsxs(Po,{children:[p.jsxs(Ho,{children:[p.jsx(Sc,{}),p.jsx(Zo,{children:"Dekan"})]}),p.jsxs(Hr,{children:[R.head?.first_name," ",R.head?.last_name]})]})}),p.jsx(oc,{children:p.jsxs(Po,{children:[p.jsxs(Ho,{children:[p.jsx(Sc,{}),p.jsx(Zo,{children:"Zam dekan"})]}),p.jsxs(Hr,{children:[R.vice?.first_name," ",R.vice?.last_name]})]})}),p.jsx(oc,{children:p.jsxs(Po,{children:[p.jsxs(Ho,{children:[p.jsx(wl,{}),p.jsx(Zo,{children:"Kafedralar"})]}),p.jsxs(Hr,{children:[R.departments?.length||0," ta"]})]})}),p.jsx(ob,{children:p.jsxs(rb,{children:[p.jsxs(Po,{children:[p.jsx(Ho,{children:p.jsx(Zo,{children:"Fakultet"})}),p.jsx(Hr,{children:R.name})]}),p.jsxs(Po,{children:[p.jsxs(Ho,{children:[p.jsx(wl,{}),p.jsx(Zo,{children:"Kafedralar"})]}),p.jsxs(Hr,{children:[R.departments?.length||0," ta"]})]})]})})]},R.id))]})]})}const lb=T.div`
  color: ${a=>a.theme.text};
  padding: 30px 50px;
  transition: all 0.3s ease;
  background-size: 200% 100%;
  margin-top: -3px;
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-size: 200% 100%;
  }

  @media (max-width: 1024px) {
    padding: 25px 30px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px 10px;
  }
`,ub=T.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  background-color: ${a=>a.bgColor||"#f59e0b"};
  color: white;
  flex-shrink: 0;
  font-weight: bold;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }
`,cb=T.h2`
  margin: 0px;
  font-size: 26px;
  font-weight: 600;
  color: ${a=>a.theme.text};

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`,db=T.div`
  background-color: ${a=>a.theme.cardBg};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 3px ${a=>a.theme.cardShadow};

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 12px 8px;
    border-radius: 6px;
  }
`,fb=T.div`
  padding: 0px 30px 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${a=>a.theme.inputBorder};

  @media (max-width: 768px) {
    padding: 0px 20px 10px 20px;
  }

  @media (max-width: 480px) {
    padding: 0px 10px 8px 10px;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
`,hb=T.span`
  font-size: 14px;
  font-weight: 600;
  color: ${a=>a.theme.text};

  @media (max-width: 480px) {
    font-size: 16px;
  }
`,pb=T.div`
  padding: 20px;
  border-bottom: 1px solid ${a=>a.theme.inputBorder};
  transition: all 0.2s ease;
  border-radius: 8px;
  margin: 4px 0;

  &:hover {
    background-color: #64646444;
    cursor: pointer;
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 12px 8px;
    margin: 8px 0;
    border: 1px solid ${a=>a.theme.inputBorder};
    border-radius: 6px;
  }
`,mb=T.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 480px) {
    gap: 2px;
    width: 100%;
  }
`,wg=T.span`
  font-size: 13px;
  opacity: 0.7;
  display: block;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`,gb=T.span`
  font-weight: 600;
  display: block;
  font-size: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    word-break: break-word;
  }
`,xb=T.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: ${a=>a.theme.text};
  padding: 8px 0;

  @media (max-width: 860px) {
    gap: 10px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    font-size: 13px;
  }
`;function Sg({isDark:a=!1,onThemeChange:c}){const{id:d}=$r(),h=d,x=a?Ml:jl,y=zn(),[b,O]=z.useState(null),[w,S]=z.useState(!1),[E,j]=z.useState(null);if(z.useEffect(()=>{localStorage.getItem("preferredTheme")==="dark"&&!a&&c&&c(!0)},[]),z.useEffect(()=>{localStorage.setItem("preferredTheme",a?"dark":"light")},[a]),z.useEffect(()=>{let q=!1;async function X(){S(!0),j(null);try{const W=h?await Et.getDepartment(h):await Et.getDirections();q||O(W)}catch(W){q||j(W.message||String(W))}finally{q||S(!1)}}return X(),()=>{q=!0}},[h]),w)return p.jsx("div",{className:"p-4",children:"Loading..."});if(E)return p.jsxs("div",{className:"p-4 text-red-600",children:["Error: ",E]});if(!b)return p.jsx("div",{className:"p-4",children:"No data found"});const R=h?b?.directions||[]:b||[],G=Array.isArray(b)&&b.length>0?b[0]?.department?.name:b?.name;return p.jsx(lb,{children:p.jsxs(db,{children:[p.jsxs(fb,{children:[p.jsxs(cb,{children:[h?`${b.name}`:G," kafedra yo‘nalishlari"]}),p.jsx("div",{style:{display:"flex",alignItems:"center",gap:"10px",height:"100%"},children:p.jsxs(hb,{children:[R.length," ta yo'nalish"]})})]}),R.length===0&&p.jsx("div",{style:{padding:"20px",color:x.text},children:"Hozircha yo'nalishlar mavjud emas."}),R.map(q=>p.jsx(pb,{onClick:()=>y(`/direction/${q.id}`),children:p.jsxs(xb,{children:[p.jsx(ub,{bgColor:"#3B82F6",children:p.jsx(Mh,{})}),p.jsxs(mb,{children:[p.jsx(wg,{children:"Yo'nalish"}),p.jsx(gb,{children:q.name})," ",p.jsx(wg,{children:q.abbr})]})]})},q.id))]})})}const vb=T.div`
  color: ${a=>a.theme.text};
  padding: 30px 50px;
  transition: all 0.3s ease;
  z-index: 0;

  /* Clean blue gradient that moves across */
  background-size: 200% 100%;
  margin-top: -3px;
  /* Simple animated top border */
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-size: 200% 100%;
  }

  @media (max-width: 1024px) {
    padding: 25px 30px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px 10px;
  }
`,yb=T.h2`
  margin: 0px;
  font-size: 26px;
  font-weight: 600;
  color: ${a=>a.theme.text};

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`,_b=T.div`
  background-color: ${a=>a.theme.cardBg};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 3px ${a=>a.theme.cardShadow};

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 12px 8px;
    border-radius: 6px;
  }
`,bb=T.div`
  padding: 0px 30px 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${a=>a.theme.inputBorder};

  @media (max-width: 768px) {
    padding: 0px 20px 10px 20px;
  }

  @media (max-width: 480px) {
    padding: 0px 10px 8px 10px;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
`,wb=T.span`
  font-size: 14px;
  font-weight: 600;
  color: ${a=>a.theme.text};

  @media (max-width: 480px) {
    font-size: 16px;
  }
`,Sb=T.div`
  display: grid;
  grid-template-columns: 2.5fr 1fr 1fr;
  gap: 15px;
  padding: 20px;
  border-bottom: 1px solid ${a=>a.theme.inputBorder};
  align-items: center;
  transition: all 0.2s ease;
  border-radius: 8px;
  margin: 4px 0;

  &:hover {
    background-color: #64646444;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px ${a=>a.theme.cardShadow};
    cursor: pointer;
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
  }

  @media (max-width: 860px) {
    gap: 12px;
    padding: 12px 8px;
    margin: 8px 0;
    border: 1px solid ${a=>a.theme.inputBorder};
    border-radius: 6px;
    &:hover {
      transform: none;
      box-shadow: 0 2px 4px ${a=>a.theme.cardShadow};
    }
  }
`,zb=T.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: ${a=>a.theme.text};
  padding: 8px 0;

  @media (max-width: 860px) {
    gap: 10px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    font-size: 13px;
    width: 100%;
  }
`,Tb=T.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  background-color: ${a=>a.bgColor||"#f59e0b"};
  color: white;
  flex-shrink: 0;
  font-weight: bold;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }
`,Eb=T.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 480px) {
    gap: 2px;
    width: 100%;
  }
`,zg=T.span`
  font-size: 13px;
  opacity: 0.7;
  display: block;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`,Ab=T.span`
  font-weight: 600;
  display: block;
  font-size: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;function Tg({isDark:a=!1,onThemeChange:c}){const{id:d}=$r(),h=d,x=a?Ml:jl,y=zn(),[b,O]=z.useState(null),[w,S]=z.useState(!1),[E,j]=z.useState(null);if(z.useEffect(()=>{localStorage.getItem("preferredTheme")==="dark"&&!a&&c&&c(!0)},[]),z.useEffect(()=>{localStorage.setItem("preferredTheme",a?"dark":"light")},[a]),z.useEffect(()=>{let q=!1;async function X(){S(!0),j(null);try{const W=h?await Et.getFaculty(h):await Et.getDepartments();q||O(W)}catch(W){q||j(W.message||String(W))}finally{q||S(!1)}}return X(),()=>{q=!0}},[h]),w)return p.jsx("div",{className:"p-4",children:"Loading..."});if(E)return p.jsxs("div",{className:"p-4 text-red-600",children:["Error: ",E]});if(!b)return p.jsx("div",{className:"p-4",children:"No data found."});const R=h?b?.departments||[]:b||[],G=Array.isArray(b)&&b.length>0?b[0]?.faculty?.name:"";return p.jsx(vb,{children:p.jsxs(_b,{children:[p.jsxs(bb,{children:[p.jsxs(yb,{children:[h?b.name:G," — Kafedralar ro‘yxati"]})," ",p.jsx("div",{style:{display:"flex",alignItems:"center",gap:"10px",height:"100%"},children:p.jsxs(wb,{children:[R.length," ta"]})})]}),R.length===0&&p.jsx("p",{style:{padding:"20px",color:x.text},children:"Hozircha kafedralar mavjud emas."}),R.map(q=>p.jsx(Sb,{onClick:()=>y(`/department/${q.id}`),children:p.jsxs(zb,{children:[p.jsx(Tb,{bgColor:"#3B82F6",children:p.jsx(Mh,{})}),p.jsxs(Eb,{children:[p.jsx(zg,{children:"Kafedra"}),p.jsx(Ab,{children:q.name})," ",p.jsx(zg,{children:q.abbr})]})]})},q.id))]})})}function Lh(a){return Ht({attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M227.79,52.62l-96-32a11.85,11.85,0,0,0-7.58,0l-96,32A12,12,0,0,0,20,63.37,6.05,6.05,0,0,0,20,64v80a12,12,0,0,0,24,0V80.65l23.71,7.9a67.92,67.92,0,0,0,18.42,85A100.36,100.36,0,0,0,46,209.44a12,12,0,1,0,20.1,13.11C80.37,200.59,103,188,128,188s47.63,12.59,61.95,34.55a12,12,0,1,0,20.1-13.11,100.36,100.36,0,0,0-40.18-35.92,67.92,67.92,0,0,0,18.42-85l39.5-13.17a12,12,0,0,0,0-22.76Zm-99.79-8L186.05,64,128,83.35,70,64ZM172,120A44,44,0,1,1,90.94,96.29l33.27,11.09a11.89,11.89,0,0,0,7.58,0l33.27-11.09A43.85,43.85,0,0,1,172,120Z"}}]})(a)}function Sl(a){return Ht({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"}}]})(a)}function Mc(a){return Ht({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"}}]})(a)}const sc=T.div`
  color: ${a=>a.theme.text};
  padding: 30px 50px;
  transition: all 0.3s ease;
  background-size: 200% 100%;
  margin-top: -3px;
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-size: 200% 100%;
  }

  @media (max-width: 1024px) {
    padding: 25px 30px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px 10px;
  }
`;T.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 70px;
  margin-bottom: 30px;

  @media (max-width: 1200px) {
    gap: 40px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
`;const Cb=T.h2`
  margin: 0px;
  font-size: 26px;
  font-weight: 600;
  color: ${a=>a.theme.text};

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`,jb=T.div`
  background-color: ${a=>a.theme.cardBg};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 3px ${a=>a.theme.cardShadow};

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 12px 8px;
    border-radius: 6px;
  }
`,Mb=T.div`
  padding: 0px 30px 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${a=>a.theme.inputBorder};

  h2 {
    margin: 0;
  }
  @media (max-width: 768px) {
    padding: 0px 20px 10px 20px;
  }

  @media (max-width: 480px) {
    padding: 0px 10px 8px 10px;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
`,Lb=T.span`
  font-size: 14px;
  font-weight: 600;
  color: ${a=>a.theme.text};

  @media (max-width: 480px) {
    font-size: 16px;
  }
`,Ob=T(Rc)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  flex-direction: column-reverse;
  gap: 15px;
  padding: 20px;
  border-bottom: 1px solid ${a=>a.theme.inputBorder};
  align-items: center;
  transition: all 0.2s ease;
  border-radius: 8px;
  margin: 4px 0;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: #64646444;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px ${a=>a.theme.cardShadow};
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
  }

  @media (max-width: 860px) {
    padding: 12px 8px;
    border: 1px solid ${a=>a.theme.inputBorder};
    border-radius: 6px;
    display: flex;
    align-items: center;
    &:hover {
      transform: none;
      box-shadow: 0 2px 4px ${a=>a.theme.cardShadow};
    }
  }
`,lc=T.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: ${a=>a.theme.text};
  padding: 8px 0;

  @media (max-width: 860px) {
    gap: 10px;
    font-size: 14px;
    display: none;
  }

  @media (max-width: 480px) {
    gap: 8px;
    font-size: 13px;
  }
`,Rb=T.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: ${a=>a.theme.text};
  padding: 8px 0;
  @media (max-width: 768px) {
    gap: 10px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    font-size: 14px;
  }
`,Db=T.div`
  display: none;
  @media (max-width: 860px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`,Eg=T.div`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  background-color: ${a=>a.badgeColor};
  color: ${a=>a.textColor};
  flex-shrink: 0;
  font-weight: bold;

  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
    font-size: 12px;
  }
`,ll=T.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 480px) {
    gap: 2px;
    width: 100%;
  }
`,ul=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${a=>a.theme.text};
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
    gap: 6px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`,cl=T.span`
  font-size: 13px;
  opacity: 0.7;
  display: block;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`,dl=T.span`
  font-weight: 600;
  display: block;
  font-size: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    word-break: break-word;
  }
`;T.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: space-between;
  }
`;T.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #3b82f6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
`;const Ag=T.div`
  background-color: ${a=>a.badgeColor};
  color: ${a=>a.textColor};
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  min-width: 60px;
  border: 1px solid ${a=>a.textColor}20;

  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 13px;
    min-width: 50px;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 14px;
    min-width: 60px;
    justify-self: start;
    margin-top: 4px;
    display: none;
  }
`,kb=T.div``;T.div`
  text-align: center;
  padding: 40px 20px;
  color: ${a=>a.theme.text};
  opacity: 0.7;
  svg {
    font-size: 48px;
    margin-bottom: 16px;
  }
`;const Bb=T.span`
  background-color: ${a=>a.badgeColor};
  color: ${a=>a.textColor};
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  margin-left: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Nb=T.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
  flex-wrap: wrap;
`,Cg=T.span`
  font-size: 16px;
  color: ${a=>a.theme.text}80;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`,uc=T.div`
  text-align: center;
  padding: 60px 20px;
  color: ${a=>a.theme.text}60;

  svg {
    font-size: 64px;
    margin-bottom: 20px;
    opacity: 0.5;
  }

  p {
    margin: 10px 0;
    font-size: 16px;
  }
`,Ub=T.div`
  text-align: center;
  padding: 60px;
  color: ${a=>a.theme.primary};

  svg {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;function Hb({isDark:a=!1}){zn();const[c,d]=z.useState(null),[h,x]=z.useState(!0),[y,b]=z.useState(null);z.useEffect(()=>{let R=!1;const G=new AbortController;async function q(){x(!0),b(null);try{const X=await Et.getCurrentUser({signal:G.signal});R||d(X)}catch(X){if(X.name==="AbortError")return;R||b(X.message||String(X))}finally{R||x(!1)}}return q(),()=>{R=!0,G.abort()}},[]);const O=R=>{switch(R){case"success":return{badge:"#10b981",text:"#d1fae5",icon:"✓",cursor:"not-allowed"};case"no_permission":return{badge:"#6b7280",text:"#f3f4f6",icon:p.jsx(Sl,{}),cursor:"not-allowed"};case"pending":return{badge:"#f59e0b",text:"#fef3c7",icon:"!",cursor:"pointer"};case"rejected":return{badge:"#ef4444",text:"#fff",icon:"X",cursor:"not-allowed"};default:return{badge:"#6b7280",text:"#e5e7eb",icon:p.jsx(Sl,{}),cursor:"not-allowed"}}},w=R=>{switch(R){case"admin":return{badge:"#3b82f6",text:"#ffffff"};case"teacher":return{badge:"#10b981",text:"#ffffff"};case"student":return{badge:"#f59e0b",text:"#ffffff"};case"rector":return{badge:"#8b5cf6",text:"#ffffff"};case"dean":return{badge:"#ec4899",text:"#ffffff"};default:return{badge:"#6b7280",text:"#ffffff"}}},S=R=>({admin:"Admin",teacher:"Teacher",student:"Student",rector:"Rector",vice_rector:"Vice Rector",dean:"Dean",deputy_dean:"Deputy Dean",head_of_department:"Head of Department"})[R]||R,j=c?c.role==="student"&&c.practice_days?c.practice_days:c.practice_days||[]:[];return h?p.jsx(sc,{children:p.jsxs(Ub,{children:[p.jsx(Vo,{}),p.jsx("p",{children:"Boshqaruv paneli yuklanmoqda..."})]})}):y?p.jsx(sc,{children:p.jsxs(uc,{children:[p.jsx(Sl,{}),p.jsx("p",{children:"Boshqaruv panelini yuklashda xatolik yuz berdi"}),p.jsx("p",{style:{fontSize:"14px",opacity:.7},children:y})]})}):c?p.jsx(sc,{children:p.jsxs(jb,{children:[p.jsxs(Mb,{children:[p.jsxs("div",{children:[p.jsxs(Cb,{children:[c.first_name," ",c.last_name,p.jsx(Bb,{badgeColor:w(c.role).badge,textColor:w(c.role).text,children:S(c.role)})]}),p.jsxs(Nb,{children:[c.role==="student"&&c.group&&p.jsxs(Cg,{children:["Guruh: ",c.group.group_number]}),c.role==="student"&&c.attached_teacher&&p.jsxs(Cg,{children:["O'qituvchi: ",c.attached_teacher.first_name," ",c.attached_teacher.last_name]})]})]}),p.jsx(kb,{children:p.jsxs(Lb,{children:[j.length," amaliyot kunlari"]})})]}),j.length===0?c.role==="student"?p.jsxs(uc,{children:[p.jsx(Vo,{}),p.jsx("p",{children:"Amaliyot kunlari hali belgilanmagan"}),p.jsx("p",{style:{fontSize:"14px",opacity:.7},children:"O'qituvchingiz sizga tez orada amaliyot kunlarini tayinlaydi"})]}):p.jsxs(uc,{children:[p.jsx(Vo,{}),p.jsx("p",{children:"Amaliyot kunlari mavjud emas"}),p.jsxs("p",{style:{fontSize:"14px",opacity:.7},children:[S(c.role),"ga tayinlangan amaliyot kunlari yo'q"]})]}):j.map(R=>p.jsxs(Ob,{style:{cursor:O(R.status).cursor},to:`/student/practise/create/${R.id}`,onClick:G=>{O(R.status).cursor!=="pointer"&&G.preventDefault()},children:[p.jsxs(lc,{children:[p.jsx(Eg,{badgeColor:O(R.status).badge,textColor:O(R.status).text,children:O(R.status).icon}),p.jsxs(ll,{children:[p.jsxs(ul,{children:[p.jsx(Lh,{}),p.jsx(cl,{children:"Mas'ul shaxs"})]}),p.jsx(dl,{children:R.duty_name})]})]}),p.jsx(lc,{children:p.jsxs(ll,{children:[p.jsxs(ul,{children:[p.jsx(Mc,{}),p.jsx(cl,{children:"Mo'ljal"})]}),p.jsx(dl,{children:R.address||R.location||"Not specified"})]})}),p.jsx(lc,{children:p.jsxs(ll,{children:[p.jsxs(ul,{children:[p.jsx(jc,{}),p.jsx(cl,{children:"Boshlanish vaqti"})]}),p.jsx(dl,{children:R.start_time})]})}),p.jsx(lc,{children:p.jsxs(ll,{children:[p.jsxs(ul,{children:[p.jsx(jc,{}),p.jsx(cl,{children:"Tugash vaqti"})]}),p.jsx(dl,{children:R.end_time})]})}),p.jsxs(Db,{children:[p.jsx(Eg,{badgeColor:O(R.status).badge,textColor:O(R.status).text,children:O(R.status).icon}),p.jsx(Rb,{children:p.jsxs(ll,{children:[p.jsxs(ul,{children:[p.jsx(Mc,{}),p.jsx(cl,{children:"Lokatsiya"})]}),p.jsx(dl,{children:R.address||R.location||"Not specified"})]})}),p.jsx(Ag,{style:{display:"flex",justifyContent:"center"},badgeColor:O(R.status).badge,textColor:O(R.status).text,children:R.date})]}),p.jsx(Ag,{badgeColor:O(R.status).badge,textColor:O(R.status).text,children:R.date})]},R.id))]})}):p.jsx(sc,{children:p.jsxs(uc,{children:[p.jsx(Vo,{}),p.jsx("p",{children:"Hech qanday foydalanuvchi maʼlumotlari topilmadi"}),p.jsx("p",{style:{fontSize:"14px",opacity:.7},children:"Iltimos, asboblar paneliga kirish uchun tizimga kiring"})]})})}const Zb=T.div`
  color: ${a=>a.theme.text};
  padding: 30px 50px;
  transition: all 0.3s ease;
  background-size: 200% 100%;
  margin-top: -3px;
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-size: 200% 100%;
  }

  @media (max-width: 1024px) {
    padding: 25px 30px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px 10px;
  }
`;T.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 70px;
  margin-bottom: 30px;

  @media (max-width: 1200px) {
    gap: 40px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
`;const Pb=T.h2`
  margin: 0px;
  font-size: 26px;
  font-weight: 600;
  color: ${a=>a.theme.text};

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`,qb=T.div`
  background-color: ${a=>a.theme.cardBg};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 3px ${a=>a.theme.cardShadow};

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 12px 8px;
    border-radius: 6px;
  }
`,Yb=T.div`
  padding: 0px 30px 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${a=>a.theme.inputBorder};

  h2 {
    margin: 0;
  }
  @media (max-width: 768px) {
    padding: 0px 20px 10px 20px;
  }

  @media (max-width: 480px) {
    padding: 0px 10px 8px 10px;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
`,Gb=T.span`
  font-size: 14px;
  font-weight: 600;
  color: ${a=>a.theme.text};

  @media (max-width: 480px) {
    font-size: 16px;
  }
`,Vb=T(Rc)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  flex-direction: column-reverse;
  gap: 15px;
  padding: 20px;
  border-bottom: 1px solid ${a=>a.theme.inputBorder};
  align-items: center;
  transition: all 0.2s ease;
  border-radius: 8px;
  margin: 4px 0;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: #64646444;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px ${a=>a.theme.cardShadow};
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
  }

  @media (max-width: 860px) {
    padding: 12px 8px;
    border: 1px solid ${a=>a.theme.inputBorder};
    border-radius: 6px;
    display: flex;
    align-items: center;
    &:hover {
      transform: none;
      box-shadow: 0 2px 4px ${a=>a.theme.cardShadow};
    }
  }
`,cc=T.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: ${a=>a.theme.text};
  padding: 8px 0;

  @media (max-width: 860px) {
    gap: 10px;
    font-size: 14px;
    display: none;
  }

  @media (max-width: 480px) {
    gap: 8px;
    font-size: 13px;
  }
`,Xb=T.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: ${a=>a.theme.text};
  padding: 8px 0;
  @media (max-width: 768px) {
    gap: 10px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    font-size: 14px;
  }
`,$b=T.div`
  display: none;
  @media (max-width: 860px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`,jg=T.div`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  background-color: ${a=>a.badgeColor};
  color: ${a=>a.textColor};
  flex-shrink: 0;
  font-weight: bold;

  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
    font-size: 12px;
  }
`,fl=T.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 480px) {
    gap: 2px;
    width: 100%;
  }
`,hl=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${a=>a.theme.text};
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
    gap: 6px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`,pl=T.span`
  font-size: 13px;
  opacity: 0.7;
  display: block;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`,ml=T.span`
  font-weight: 600;
  display: block;
  font-size: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    word-break: break-word;
  }
`;T.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: space-between;
  }
`;T.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #3b82f6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
`;const Ib=T.div`
  background-color: ${a=>a.badgeColor};
  color: ${a=>a.textColor};
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  min-width: 60px;
  border: 1px solid ${a=>a.textColor}20;

  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 13px;
    min-width: 50px;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 14px;
    min-width: 60px;
    justify-self: start;
    margin-top: 4px;
    display: none;
  }
`,Kb=T.div``,Qb=T.div`
  text-align: center;
  padding: 40px 20px;
  color: ${a=>a.theme.text};
  opacity: 0.7;
  svg {
    font-size: 48px;
    margin-bottom: 16px;
  }
`;function Fb({isDark:a=!1}){const{id:c}=$r(),d=c;zn();const[h,x]=z.useState(null),[y,b]=z.useState(!0),[O,w]=z.useState(null);z.useEffect(()=>{if(!d)return;let E=!1;const j=new AbortController;async function R(){b(!0),w(null);try{const G=await Et.getUserById(d,{signal:j.signal});E||x(G)}catch(G){if(G.name==="AbortError")return;E||w(G.message||String(G))}finally{E||b(!1)}}return R(),()=>{E=!0,j.abort()}},[d]);const S=E=>{switch(E){case"success":return{badge:"#10b981",text:"#d1fae5",icon:"✓",cursor:"pointer"};case"no_permission":return{badge:"#6b7280",text:"#f3f4f6",icon:p.jsx(Sl,{}),cursor:"not-allowed"};case"pending":return{badge:"#f59e0b",text:"#fef3c7",icon:"!",cursor:"not-allowed"};case"rejected":return{badge:"#ef4444",text:"#fff",icon:"X",cursor:"not-allowed"};default:return{badge:"#6b7280",text:"#e5e7eb",icon:p.jsx(Sl,{}),cursor:"not-allowed"}}};return d?y?p.jsx("div",{className:"p-4",children:"Loading . ."}):O?p.jsxs("div",{className:"p-4 text-red-600",children:["Error: ",O]}):h?p.jsx(Zb,{children:p.jsxs(qb,{children:[p.jsxs(Yb,{children:[p.jsxs(Pb,{children:[h.first_name," ",h.last_name,p.jsx("br",{}),p.jsxs("p",{style:{fontSize:"16px",opacity:.7,margin:"0px"},children:[h.attached_teacher.first_name," ",h.attached_teacher.last_name," ","|| ",h.group.group_number," - guruhi"]})]}),p.jsx(Kb,{children:p.jsxs(Gb,{children:[h.practice_days?.length||0," ta amalyot"]})})]}),h.practice_days?.length===0?p.jsxs(Qb,{children:[p.jsx(Vo,{}),p.jsx("p",{children:"Hozircha amaliyotlar mavjud emas"})]}):h.practice_days.map(E=>p.jsxs(Vb,{style:{cursor:S(E.status).cursor},to:`/student/practise/${E.id}`,onClick:j=>{S(E.status).cursor!=="pointer"&&j.preventDefault()},children:[p.jsxs(cc,{children:[p.jsx(jg,{badgeColor:S(E.status).badge,textColor:S(E.status).text,children:S(E.status).icon}),p.jsxs(fl,{children:[p.jsxs(hl,{children:[p.jsx(Lh,{}),p.jsx(pl,{children:"Mas'ul Shaxs"})]}),p.jsx(ml,{children:E.duty_name})]})]}),p.jsx(cc,{children:p.jsxs(fl,{children:[p.jsxs(hl,{children:[p.jsx(Mc,{}),p.jsx(pl,{children:"Joylashuv"})]}),p.jsx(ml,{children:E.address})]})}),p.jsx(cc,{children:p.jsxs(fl,{children:[p.jsxs(hl,{children:[p.jsx(jc,{}),p.jsx(pl,{children:"Boshlanish vaqti"})]}),p.jsx(ml,{children:E.start_time})]})}),p.jsx(cc,{children:p.jsxs(fl,{children:[p.jsxs(hl,{children:[p.jsx(jc,{}),p.jsx(pl,{children:"Tugash vaqti"})]}),p.jsx(ml,{children:E.end_time})]})}),p.jsxs($b,{children:[" ",p.jsx(jg,{badgeColor:S(E.status).badge,textColor:S(E.status).text,children:S(E.status).icon}),p.jsx(Xb,{children:p.jsxs(fl,{children:[p.jsxs(hl,{children:[p.jsx(Mc,{}),p.jsx(pl,{children:"Location"})]}),p.jsx(ml,{children:E.address})]})}),p.jsx(Ib,{style:{display:"flex",justifyContent:"center"},badgeColor:S(E.status).badge,textColor:S(E.status).text,children:E.date})]})]},E.id))]})}):p.jsxs("div",{className:"p-4",children:["No data found for id: ",d]}):p.jsx("div",{className:"p-4",children:"No id provided ."})}function F1(a,c){const d=z.useRef(c);z.useEffect(function(){c!==d.current&&a.attributionControl!=null&&(d.current!=null&&a.attributionControl.removeAttribution(d.current),c!=null&&a.attributionControl.addAttribution(c)),d.current=c},[a,c])}function Jb(a,c,d){c.center!==d.center&&a.setLatLng(c.center),c.radius!=null&&c.radius!==d.radius&&a.setRadius(c.radius)}const Wb=1;function t4(a){return Object.freeze({__version:Wb,map:a})}function J1(a,c){return Object.freeze({...a,...c})}const Oh=z.createContext(null);function Rh(){const a=z.use(Oh);if(a==null)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return a}function W1(a){function c(d,h){const{instance:x,context:y}=a(d).current;z.useImperativeHandle(h,()=>x);const{children:b}=d;return b==null?null:tn.createElement(Oh,{value:y},b)}return z.forwardRef(c)}function e4(a){function c(d,h){const[x,y]=z.useState(!1),{instance:b}=a(d,y).current;z.useImperativeHandle(h,()=>b),z.useEffect(function(){x&&b.update()},[b,x,d.children]);const O=b._contentNode;return O?t_.createPortal(d.children,O):null}return z.forwardRef(c)}function n4(a){function c(d,h){const{instance:x}=a(d).current;return z.useImperativeHandle(h,()=>x),null}return z.forwardRef(c)}function Dh(a,c){const d=z.useRef(void 0);z.useEffect(function(){return c!=null&&a.instance.on(c),d.current=c,function(){d.current!=null&&a.instance.off(d.current),d.current=null}},[a,c])}function Zc(a,c){const d=a.pane??c.pane;return d?{...a,pane:d}:a}function i4(a,c){return function(h,x){const y=Rh(),b=a(Zc(h,y),y);return F1(y.map,h.attribution),Dh(b.current,h.eventHandlers),c(b.current,y,h,x),b}}var yl={exports:{}};var a4=yl.exports,Mg;function r4(){return Mg||(Mg=1,(function(a,c){(function(d,h){h(c)})(a4,(function(d){var h="1.9.4";function x(n){var r,s,f,m;for(s=1,f=arguments.length;s<f;s++){m=arguments[s];for(r in m)n[r]=m[r]}return n}var y=Object.create||(function(){function n(){}return function(r){return n.prototype=r,new n}})();function b(n,r){var s=Array.prototype.slice;if(n.bind)return n.bind.apply(n,s.call(arguments,1));var f=s.call(arguments,2);return function(){return n.apply(r,f.length?f.concat(s.call(arguments)):arguments)}}var O=0;function w(n){return"_leaflet_id"in n||(n._leaflet_id=++O),n._leaflet_id}function S(n,r,s){var f,m,v,A;return A=function(){f=!1,m&&(v.apply(s,m),m=!1)},v=function(){f?m=arguments:(n.apply(s,arguments),setTimeout(A,r),f=!0)},v}function E(n,r,s){var f=r[1],m=r[0],v=f-m;return n===f&&s?n:((n-m)%v+v)%v+m}function j(){return!1}function R(n,r){if(r===!1)return n;var s=Math.pow(10,r===void 0?6:r);return Math.round(n*s)/s}function G(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function q(n){return G(n).split(/\s+/)}function X(n,r){Object.prototype.hasOwnProperty.call(n,"options")||(n.options=n.options?y(n.options):{});for(var s in r)n.options[s]=r[s];return n.options}function W(n,r,s){var f=[];for(var m in n)f.push(encodeURIComponent(s?m.toUpperCase():m)+"="+encodeURIComponent(n[m]));return(!r||r.indexOf("?")===-1?"?":"&")+f.join("&")}var nt=/\{ *([\w_ -]+) *\}/g;function rt(n,r){return n.replace(nt,function(s,f){var m=r[f];if(m===void 0)throw new Error("No value provided for variable "+s);return typeof m=="function"&&(m=m(r)),m})}var tt=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"};function ht(n,r){for(var s=0;s<n.length;s++)if(n[s]===r)return s;return-1}var wt="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function vt(n){return window["webkit"+n]||window["moz"+n]||window["ms"+n]}var ot=0;function Ut(n){var r=+new Date,s=Math.max(0,16-(r-ot));return ot=r+s,window.setTimeout(n,s)}var zt=window.requestAnimationFrame||vt("RequestAnimationFrame")||Ut,Rt=window.cancelAnimationFrame||vt("CancelAnimationFrame")||vt("CancelRequestAnimationFrame")||function(n){window.clearTimeout(n)};function Tt(n,r,s){if(s&&zt===Ut)n.call(r);else return zt.call(window,b(n,r))}function Kt(n){n&&Rt.call(window,n)}var je={__proto__:null,extend:x,create:y,bind:b,get lastId(){return O},stamp:w,throttle:S,wrapNum:E,falseFn:j,formatNum:R,trim:G,splitWords:q,setOptions:X,getParamString:W,template:rt,isArray:tt,indexOf:ht,emptyImageUrl:wt,requestFn:zt,cancelFn:Rt,requestAnimFrame:Tt,cancelAnimFrame:Kt};function he(){}he.extend=function(n){var r=function(){X(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},s=r.__super__=this.prototype,f=y(s);f.constructor=r,r.prototype=f;for(var m in this)Object.prototype.hasOwnProperty.call(this,m)&&m!=="prototype"&&m!=="__super__"&&(r[m]=this[m]);return n.statics&&x(r,n.statics),n.includes&&(mt(n.includes),x.apply(null,[f].concat(n.includes))),x(f,n),delete f.statics,delete f.includes,f.options&&(f.options=s.options?y(s.options):{},x(f.options,n.options)),f._initHooks=[],f.callInitHooks=function(){if(!this._initHooksCalled){s.callInitHooks&&s.callInitHooks.call(this),this._initHooksCalled=!0;for(var v=0,A=f._initHooks.length;v<A;v++)f._initHooks[v].call(this)}},r},he.include=function(n){var r=this.prototype.options;return x(this.prototype,n),n.options&&(this.prototype.options=r,this.mergeOptions(n.options)),this},he.mergeOptions=function(n){return x(this.prototype.options,n),this},he.addInitHook=function(n){var r=Array.prototype.slice.call(arguments,1),s=typeof n=="function"?n:function(){this[n].apply(this,r)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(s),this};function mt(n){if(!(typeof L>"u"||!L||!L.Mixin)){n=tt(n)?n:[n];for(var r=0;r<n.length;r++)n[r]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var N={on:function(n,r,s){if(typeof n=="object")for(var f in n)this._on(f,n[f],r);else{n=q(n);for(var m=0,v=n.length;m<v;m++)this._on(n[m],r,s)}return this},off:function(n,r,s){if(!arguments.length)delete this._events;else if(typeof n=="object")for(var f in n)this._off(f,n[f],r);else{n=q(n);for(var m=arguments.length===1,v=0,A=n.length;v<A;v++)m?this._off(n[v]):this._off(n[v],r,s)}return this},_on:function(n,r,s,f){if(typeof r!="function"){console.warn("wrong listener type: "+typeof r);return}if(this._listens(n,r,s)===!1){s===this&&(s=void 0);var m={fn:r,ctx:s};f&&(m.once=!0),this._events=this._events||{},this._events[n]=this._events[n]||[],this._events[n].push(m)}},_off:function(n,r,s){var f,m,v;if(this._events&&(f=this._events[n],!!f)){if(arguments.length===1){if(this._firingCount)for(m=0,v=f.length;m<v;m++)f[m].fn=j;delete this._events[n];return}if(typeof r!="function"){console.warn("wrong listener type: "+typeof r);return}var A=this._listens(n,r,s);if(A!==!1){var B=f[A];this._firingCount&&(B.fn=j,this._events[n]=f=f.slice()),f.splice(A,1)}}},fire:function(n,r,s){if(!this.listens(n,s))return this;var f=x({},r,{type:n,target:this,sourceTarget:r&&r.sourceTarget||this});if(this._events){var m=this._events[n];if(m){this._firingCount=this._firingCount+1||1;for(var v=0,A=m.length;v<A;v++){var B=m[v],Z=B.fn;B.once&&this.off(n,Z,B.ctx),Z.call(B.ctx||this,f)}this._firingCount--}}return s&&this._propagateEvent(f),this},listens:function(n,r,s,f){typeof n!="string"&&console.warn('"string" type argument expected');var m=r;typeof r!="function"&&(f=!!r,m=void 0,s=void 0);var v=this._events&&this._events[n];if(v&&v.length&&this._listens(n,m,s)!==!1)return!0;if(f){for(var A in this._eventParents)if(this._eventParents[A].listens(n,r,s,f))return!0}return!1},_listens:function(n,r,s){if(!this._events)return!1;var f=this._events[n]||[];if(!r)return!!f.length;s===this&&(s=void 0);for(var m=0,v=f.length;m<v;m++)if(f[m].fn===r&&f[m].ctx===s)return m;return!1},once:function(n,r,s){if(typeof n=="object")for(var f in n)this._on(f,n[f],r,!0);else{n=q(n);for(var m=0,v=n.length;m<v;m++)this._on(n[m],r,s,!0)}return this},addEventParent:function(n){return this._eventParents=this._eventParents||{},this._eventParents[w(n)]=n,this},removeEventParent:function(n){return this._eventParents&&delete this._eventParents[w(n)],this},_propagateEvent:function(n){for(var r in this._eventParents)this._eventParents[r].fire(n.type,x({layer:n.target,propagatedFrom:n.target},n),!0)}};N.addEventListener=N.on,N.removeEventListener=N.clearAllEventListeners=N.off,N.addOneTimeEventListener=N.once,N.fireEvent=N.fire,N.hasEventListeners=N.listens;var it=he.extend(N);function at(n,r,s){this.x=s?Math.round(n):n,this.y=s?Math.round(r):r}var Mt=Math.trunc||function(n){return n>0?Math.floor(n):Math.ceil(n)};at.prototype={clone:function(){return new at(this.x,this.y)},add:function(n){return this.clone()._add(lt(n))},_add:function(n){return this.x+=n.x,this.y+=n.y,this},subtract:function(n){return this.clone()._subtract(lt(n))},_subtract:function(n){return this.x-=n.x,this.y-=n.y,this},divideBy:function(n){return this.clone()._divideBy(n)},_divideBy:function(n){return this.x/=n,this.y/=n,this},multiplyBy:function(n){return this.clone()._multiplyBy(n)},_multiplyBy:function(n){return this.x*=n,this.y*=n,this},scaleBy:function(n){return new at(this.x*n.x,this.y*n.y)},unscaleBy:function(n){return new at(this.x/n.x,this.y/n.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=Mt(this.x),this.y=Mt(this.y),this},distanceTo:function(n){n=lt(n);var r=n.x-this.x,s=n.y-this.y;return Math.sqrt(r*r+s*s)},equals:function(n){return n=lt(n),n.x===this.x&&n.y===this.y},contains:function(n){return n=lt(n),Math.abs(n.x)<=Math.abs(this.x)&&Math.abs(n.y)<=Math.abs(this.y)},toString:function(){return"Point("+R(this.x)+", "+R(this.y)+")"}};function lt(n,r,s){return n instanceof at?n:tt(n)?new at(n[0],n[1]):n==null?n:typeof n=="object"&&"x"in n&&"y"in n?new at(n.x,n.y):new at(n,r,s)}function M(n,r){if(n)for(var s=r?[n,r]:n,f=0,m=s.length;f<m;f++)this.extend(s[f])}M.prototype={extend:function(n){var r,s;if(!n)return this;if(n instanceof at||typeof n[0]=="number"||"x"in n)r=s=lt(n);else if(n=V(n),r=n.min,s=n.max,!r||!s)return this;return!this.min&&!this.max?(this.min=r.clone(),this.max=s.clone()):(this.min.x=Math.min(r.x,this.min.x),this.max.x=Math.max(s.x,this.max.x),this.min.y=Math.min(r.y,this.min.y),this.max.y=Math.max(s.y,this.max.y)),this},getCenter:function(n){return lt((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,n)},getBottomLeft:function(){return lt(this.min.x,this.max.y)},getTopRight:function(){return lt(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(n){var r,s;return typeof n[0]=="number"||n instanceof at?n=lt(n):n=V(n),n instanceof M?(r=n.min,s=n.max):r=s=n,r.x>=this.min.x&&s.x<=this.max.x&&r.y>=this.min.y&&s.y<=this.max.y},intersects:function(n){n=V(n);var r=this.min,s=this.max,f=n.min,m=n.max,v=m.x>=r.x&&f.x<=s.x,A=m.y>=r.y&&f.y<=s.y;return v&&A},overlaps:function(n){n=V(n);var r=this.min,s=this.max,f=n.min,m=n.max,v=m.x>r.x&&f.x<s.x,A=m.y>r.y&&f.y<s.y;return v&&A},isValid:function(){return!!(this.min&&this.max)},pad:function(n){var r=this.min,s=this.max,f=Math.abs(r.x-s.x)*n,m=Math.abs(r.y-s.y)*n;return V(lt(r.x-f,r.y-m),lt(s.x+f,s.y+m))},equals:function(n){return n?(n=V(n),this.min.equals(n.getTopLeft())&&this.max.equals(n.getBottomRight())):!1}};function V(n,r){return!n||n instanceof M?n:new M(n,r)}function et(n,r){if(n)for(var s=r?[n,r]:n,f=0,m=s.length;f<m;f++)this.extend(s[f])}et.prototype={extend:function(n){var r=this._southWest,s=this._northEast,f,m;if(n instanceof ft)f=n,m=n;else if(n instanceof et){if(f=n._southWest,m=n._northEast,!f||!m)return this}else return n?this.extend(ut(n)||st(n)):this;return!r&&!s?(this._southWest=new ft(f.lat,f.lng),this._northEast=new ft(m.lat,m.lng)):(r.lat=Math.min(f.lat,r.lat),r.lng=Math.min(f.lng,r.lng),s.lat=Math.max(m.lat,s.lat),s.lng=Math.max(m.lng,s.lng)),this},pad:function(n){var r=this._southWest,s=this._northEast,f=Math.abs(r.lat-s.lat)*n,m=Math.abs(r.lng-s.lng)*n;return new et(new ft(r.lat-f,r.lng-m),new ft(s.lat+f,s.lng+m))},getCenter:function(){return new ft((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new ft(this.getNorth(),this.getWest())},getSouthEast:function(){return new ft(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(n){typeof n[0]=="number"||n instanceof ft||"lat"in n?n=ut(n):n=st(n);var r=this._southWest,s=this._northEast,f,m;return n instanceof et?(f=n.getSouthWest(),m=n.getNorthEast()):f=m=n,f.lat>=r.lat&&m.lat<=s.lat&&f.lng>=r.lng&&m.lng<=s.lng},intersects:function(n){n=st(n);var r=this._southWest,s=this._northEast,f=n.getSouthWest(),m=n.getNorthEast(),v=m.lat>=r.lat&&f.lat<=s.lat,A=m.lng>=r.lng&&f.lng<=s.lng;return v&&A},overlaps:function(n){n=st(n);var r=this._southWest,s=this._northEast,f=n.getSouthWest(),m=n.getNorthEast(),v=m.lat>r.lat&&f.lat<s.lat,A=m.lng>r.lng&&f.lng<s.lng;return v&&A},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(n,r){return n?(n=st(n),this._southWest.equals(n.getSouthWest(),r)&&this._northEast.equals(n.getNorthEast(),r)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function st(n,r){return n instanceof et?n:new et(n,r)}function ft(n,r,s){if(isNaN(n)||isNaN(r))throw new Error("Invalid LatLng object: ("+n+", "+r+")");this.lat=+n,this.lng=+r,s!==void 0&&(this.alt=+s)}ft.prototype={equals:function(n,r){if(!n)return!1;n=ut(n);var s=Math.max(Math.abs(this.lat-n.lat),Math.abs(this.lng-n.lng));return s<=(r===void 0?1e-9:r)},toString:function(n){return"LatLng("+R(this.lat,n)+", "+R(this.lng,n)+")"},distanceTo:function(n){return Qt.distance(this,ut(n))},wrap:function(){return Qt.wrapLatLng(this)},toBounds:function(n){var r=180*n/40075017,s=r/Math.cos(Math.PI/180*this.lat);return st([this.lat-r,this.lng-s],[this.lat+r,this.lng+s])},clone:function(){return new ft(this.lat,this.lng,this.alt)}};function ut(n,r,s){return n instanceof ft?n:tt(n)&&typeof n[0]!="object"?n.length===3?new ft(n[0],n[1],n[2]):n.length===2?new ft(n[0],n[1]):null:n==null?n:typeof n=="object"&&"lat"in n?new ft(n.lat,"lng"in n?n.lng:n.lon,n.alt):r===void 0?null:new ft(n,r,s)}var Ct={latLngToPoint:function(n,r){var s=this.projection.project(n),f=this.scale(r);return this.transformation._transform(s,f)},pointToLatLng:function(n,r){var s=this.scale(r),f=this.transformation.untransform(n,s);return this.projection.unproject(f)},project:function(n){return this.projection.project(n)},unproject:function(n){return this.projection.unproject(n)},scale:function(n){return 256*Math.pow(2,n)},zoom:function(n){return Math.log(n/256)/Math.LN2},getProjectedBounds:function(n){if(this.infinite)return null;var r=this.projection.bounds,s=this.scale(n),f=this.transformation.transform(r.min,s),m=this.transformation.transform(r.max,s);return new M(f,m)},infinite:!1,wrapLatLng:function(n){var r=this.wrapLng?E(n.lng,this.wrapLng,!0):n.lng,s=this.wrapLat?E(n.lat,this.wrapLat,!0):n.lat,f=n.alt;return new ft(s,r,f)},wrapLatLngBounds:function(n){var r=n.getCenter(),s=this.wrapLatLng(r),f=r.lat-s.lat,m=r.lng-s.lng;if(f===0&&m===0)return n;var v=n.getSouthWest(),A=n.getNorthEast(),B=new ft(v.lat-f,v.lng-m),Z=new ft(A.lat-f,A.lng-m);return new et(B,Z)}},Qt=x({},Ct,{wrapLng:[-180,180],R:6371e3,distance:function(n,r){var s=Math.PI/180,f=n.lat*s,m=r.lat*s,v=Math.sin((r.lat-n.lat)*s/2),A=Math.sin((r.lng-n.lng)*s/2),B=v*v+Math.cos(f)*Math.cos(m)*A*A,Z=2*Math.atan2(Math.sqrt(B),Math.sqrt(1-B));return this.R*Z}}),Ft=6378137,cn={R:Ft,MAX_LATITUDE:85.0511287798,project:function(n){var r=Math.PI/180,s=this.MAX_LATITUDE,f=Math.max(Math.min(s,n.lat),-s),m=Math.sin(f*r);return new at(this.R*n.lng*r,this.R*Math.log((1+m)/(1-m))/2)},unproject:function(n){var r=180/Math.PI;return new ft((2*Math.atan(Math.exp(n.y/this.R))-Math.PI/2)*r,n.x*r/this.R)},bounds:(function(){var n=Ft*Math.PI;return new M([-n,-n],[n,n])})()};function en(n,r,s,f){if(tt(n)){this._a=n[0],this._b=n[1],this._c=n[2],this._d=n[3];return}this._a=n,this._b=r,this._c=s,this._d=f}en.prototype={transform:function(n,r){return this._transform(n.clone(),r)},_transform:function(n,r){return r=r||1,n.x=r*(this._a*n.x+this._b),n.y=r*(this._c*n.y+this._d),n},untransform:function(n,r){return r=r||1,new at((n.x/r-this._b)/this._a,(n.y/r-this._d)/this._c)}};function Me(n,r,s,f){return new en(n,r,s,f)}var ha=x({},Qt,{code:"EPSG:3857",projection:cn,transformation:(function(){var n=.5/(Math.PI*cn.R);return Me(n,.5,-n,.5)})()}),Fn=x({},ha,{code:"EPSG:900913"});function Di(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function ki(n,r){var s="",f,m,v,A,B,Z;for(f=0,v=n.length;f<v;f++){for(B=n[f],m=0,A=B.length;m<A;m++)Z=B[m],s+=(m?"L":"M")+Z.x+" "+Z.y;s+=r?_t.svg?"z":"x":""}return s||"M0 0"}var Jn=document.documentElement.style,Bi="ActiveXObject"in window,nr=Bi&&!document.addEventListener,pa="msLaunchUri"in navigator&&!("documentMode"in document),Ni=dn("webkit"),Ir=dn("android"),Kr=dn("android 2")||dn("android 3"),$e=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),ma=Ir&&dn("Google")&&$e<537&&!("AudioNode"in window),Bn=!!window.opera,ir=!pa&&dn("chrome"),pi=dn("gecko")&&!Ni&&!Bn&&!Bi,mi=!ir&&dn("safari"),Wn=dn("phantom"),Ui="OTransition"in Jn,Qr=navigator.platform.indexOf("Win")===0,Nn=Bi&&"transition"in Jn,Ue="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Kr,Tn="MozPerspective"in Jn,Ie=!window.L_DISABLE_3D&&(Nn||Ue||Tn)&&!Ui&&!Wn,Hi=typeof orientation<"u"||dn("mobile"),ns=Hi&&Ni,is=Hi&&Ue,Zi=!window.PointerEvent&&window.MSPointerEvent,$=!!(window.PointerEvent||Zi),J="ontouchstart"in window||!!window.TouchEvent,ct=!window.L_NO_TOUCH&&(J||$),It=Hi&&Bn,pe=Hi&&pi,Gt=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,be=(function(){var n=!1;try{var r=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("testPassiveEventSupport",j,r),window.removeEventListener("testPassiveEventSupport",j,r)}catch{}return n})(),ga=(function(){return!!document.createElement("canvas").getContext})(),xt=!!(document.createElementNS&&Di("svg").createSVGRect),Yc=!!xt&&(function(){var n=document.createElement("div");return n.innerHTML="<svg/>",(n.firstChild&&n.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),Rl=!xt&&(function(){try{var n=document.createElement("div");n.innerHTML='<v:shape adj="1"/>';var r=n.firstChild;return r.style.behavior="url(#default#VML)",r&&typeof r.adj=="object"}catch{return!1}})(),Dl=navigator.platform.indexOf("Mac")===0,kl=navigator.platform.indexOf("Linux")===0;function dn(n){return navigator.userAgent.toLowerCase().indexOf(n)>=0}var _t={ie:Bi,ielt9:nr,edge:pa,webkit:Ni,android:Ir,android23:Kr,androidStock:ma,opera:Bn,chrome:ir,gecko:pi,safari:mi,phantom:Wn,opera12:Ui,win:Qr,ie3d:Nn,webkit3d:Ue,gecko3d:Tn,any3d:Ie,mobile:Hi,mobileWebkit:ns,mobileWebkit3d:is,msPointer:Zi,pointer:$,touch:ct,touchNative:J,mobileOpera:It,mobileGecko:pe,retina:Gt,passiveEvents:be,canvas:ga,svg:xt,vml:Rl,inlineSvg:Yc,mac:Dl,linux:kl},as=_t.msPointer?"MSPointerDown":"pointerdown",rs=_t.msPointer?"MSPointerMove":"pointermove",ti=_t.msPointer?"MSPointerUp":"pointerup",Le=_t.msPointer?"MSPointerCancel":"pointercancel",qe={touchstart:as,touchmove:rs,touchend:ti,touchcancel:Le},Pi={touchstart:va,touchmove:xi,touchend:xi,touchcancel:xi},gi={},Bl=!1;function Gc(n,r,s){return r==="touchstart"&&xa(),Pi[r]?(s=Pi[r].bind(this,s),n.addEventListener(qe[r],s,!1),s):(console.warn("wrong event specified:",r),j)}function Nl(n,r,s){if(!qe[r]){console.warn("wrong event specified:",r);return}n.removeEventListener(qe[r],s,!1)}function ar(n){gi[n.pointerId]=n}function os(n){gi[n.pointerId]&&(gi[n.pointerId]=n)}function qi(n){delete gi[n.pointerId]}function xa(){Bl||(document.addEventListener(as,ar,!0),document.addEventListener(rs,os,!0),document.addEventListener(ti,qi,!0),document.addEventListener(Le,qi,!0),Bl=!0)}function xi(n,r){if(r.pointerType!==(r.MSPOINTER_TYPE_MOUSE||"mouse")){r.touches=[];for(var s in gi)r.touches.push(gi[s]);r.changedTouches=[r],n(r)}}function va(n,r){r.MSPOINTER_TYPE_TOUCH&&r.pointerType===r.MSPOINTER_TYPE_TOUCH&&Se(r),xi(n,r)}function Oe(n){var r={},s,f;for(f in n)s=n[f],r[f]=s&&s.bind?s.bind(n):s;return n=r,r.type="dblclick",r.detail=2,r.isTrusted=!1,r._simulated=!0,r}var Ul=200;function Hl(n,r){n.addEventListener("dblclick",r);var s=0,f;function m(v){if(v.detail!==1){f=v.detail;return}if(!(v.pointerType==="mouse"||v.sourceCapabilities&&!v.sourceCapabilities.firesTouchEvents)){var A=dr(v);if(!(A.some(function(Z){return Z instanceof HTMLLabelElement&&Z.attributes.for})&&!A.some(function(Z){return Z instanceof HTMLInputElement||Z instanceof HTMLSelectElement}))){var B=Date.now();B-s<=Ul?(f++,f===2&&r(Oe(v))):f=1,s=B}}}return n.addEventListener("click",m),{dblclick:r,simDblclick:m}}function Yi(n,r){n.removeEventListener("dblclick",r.dblclick),n.removeEventListener("click",r.simDblclick)}var vi=sr(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),rr=sr(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),ss=rr==="webkitTransition"||rr==="OTransition"?rr+"End":"transitionend";function ls(n){return typeof n=="string"?document.getElementById(n):n}function or(n,r){var s=n.style[r]||n.currentStyle&&n.currentStyle[r];if((!s||s==="auto")&&document.defaultView){var f=document.defaultView.getComputedStyle(n,null);s=f?f[r]:null}return s==="auto"?null:s}function Zt(n,r,s){var f=document.createElement(n);return f.className=r||"",s&&s.appendChild(f),f}function se(n){var r=n.parentNode;r&&r.removeChild(n)}function fn(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function He(n){var r=n.parentNode;r&&r.lastChild!==n&&r.appendChild(n)}function Gi(n){var r=n.parentNode;r&&r.firstChild!==n&&r.insertBefore(n,r.firstChild)}function us(n,r){if(n.classList!==void 0)return n.classList.contains(r);var s=Fr(n);return s.length>0&&new RegExp("(^|\\s)"+r+"(\\s|$)").test(s)}function Lt(n,r){if(n.classList!==void 0)for(var s=q(r),f=0,m=s.length;f<m;f++)n.classList.add(s[f]);else if(!us(n,r)){var v=Fr(n);ya(n,(v?v+" ":"")+r)}}function ve(n,r){n.classList!==void 0?n.classList.remove(r):ya(n,G((" "+Fr(n)+" ").replace(" "+r+" "," ")))}function ya(n,r){n.className.baseVal===void 0?n.className=r:n.className.baseVal=r}function Fr(n){return n.correspondingElement&&(n=n.correspondingElement),n.className.baseVal===void 0?n.className:n.className.baseVal}function me(n,r){"opacity"in n.style?n.style.opacity=r:"filter"in n.style&&cs(n,r)}function cs(n,r){var s=!1,f="DXImageTransform.Microsoft.Alpha";try{s=n.filters.item(f)}catch{if(r===1)return}r=Math.round(r*100),s?(s.Enabled=r!==100,s.Opacity=r):n.style.filter+=" progid:"+f+"(opacity="+r+")"}function sr(n){for(var r=document.documentElement.style,s=0;s<n.length;s++)if(n[s]in r)return n[s];return!1}function ei(n,r,s){var f=r||new at(0,0);n.style[vi]=(_t.ie3d?"translate("+f.x+"px,"+f.y+"px)":"translate3d("+f.x+"px,"+f.y+"px,0)")+(s?" scale("+s+")":"")}function de(n,r){n._leaflet_pos=r,_t.any3d?ei(n,r):(n.style.left=r.x+"px",n.style.top=r.y+"px")}function yi(n){return n._leaflet_pos||new at(0,0)}var _a,Un,ds;if("onselectstart"in document)_a=function(){jt(window,"selectstart",Se)},Un=function(){ie(window,"selectstart",Se)};else{var ba=sr(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);_a=function(){if(ba){var n=document.documentElement.style;ds=n[ba],n[ba]="none"}},Un=function(){ba&&(document.documentElement.style[ba]=ds,ds=void 0)}}function Jr(){jt(window,"dragstart",Se)}function lr(){ie(window,"dragstart",Se)}var Wr,fs;function wa(n){for(;n.tabIndex===-1;)n=n.parentNode;n.style&&(hn(),Wr=n,fs=n.style.outlineStyle,n.style.outlineStyle="none",jt(window,"keydown",hn))}function hn(){Wr&&(Wr.style.outlineStyle=fs,Wr=void 0,fs=void 0,ie(window,"keydown",hn))}function to(n){do n=n.parentNode;while((!n.offsetWidth||!n.offsetHeight)&&n!==document.body);return n}function ur(n){var r=n.getBoundingClientRect();return{x:r.width/n.offsetWidth||1,y:r.height/n.offsetHeight||1,boundingClientRect:r}}var Sa={__proto__:null,TRANSFORM:vi,TRANSITION:rr,TRANSITION_END:ss,get:ls,getStyle:or,create:Zt,remove:se,empty:fn,toFront:He,toBack:Gi,hasClass:us,addClass:Lt,removeClass:ve,setClass:ya,getClass:Fr,setOpacity:me,testProp:sr,setTransform:ei,setPosition:de,getPosition:yi,get disableTextSelection(){return _a},get enableTextSelection(){return Un},disableImageDrag:Jr,enableImageDrag:lr,preventOutline:wa,restoreOutline:hn,getSizedParentNode:to,getScale:ur};function jt(n,r,s,f){if(r&&typeof r=="object")for(var m in r)An(n,m,r[m],s);else{r=q(r);for(var v=0,A=r.length;v<A;v++)An(n,r[v],s,f)}return this}var En="_leaflet_events";function ie(n,r,s,f){if(arguments.length===1)hs(n),delete n[En];else if(r&&typeof r=="object")for(var m in r)cr(n,m,r[m],s);else if(r=q(r),arguments.length===2)hs(n,function(B){return ht(r,B)!==-1});else for(var v=0,A=r.length;v<A;v++)cr(n,r[v],s,f);return this}function hs(n,r){for(var s in n[En]){var f=s.split(/\d/)[0];(!r||r(f))&&cr(n,f,null,null,s)}}var Vi={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function An(n,r,s,f){var m=r+w(s)+(f?"_"+w(f):"");if(n[En]&&n[En][m])return this;var v=function(B){return s.call(f||n,B||window.event)},A=v;!_t.touchNative&&_t.pointer&&r.indexOf("touch")===0?v=Gc(n,r,v):_t.touch&&r==="dblclick"?v=Hl(n,v):"addEventListener"in n?r==="touchstart"||r==="touchmove"||r==="wheel"||r==="mousewheel"?n.addEventListener(Vi[r]||r,v,_t.passiveEvents?{passive:!1}:!1):r==="mouseenter"||r==="mouseleave"?(v=function(B){B=B||window.event,ni(n,B)&&A(B)},n.addEventListener(Vi[r],v,!1)):n.addEventListener(r,A,!1):n.attachEvent("on"+r,v),n[En]=n[En]||{},n[En][m]=v}function cr(n,r,s,f,m){m=m||r+w(s)+(f?"_"+w(f):"");var v=n[En]&&n[En][m];if(!v)return this;!_t.touchNative&&_t.pointer&&r.indexOf("touch")===0?Nl(n,r,v):_t.touch&&r==="dblclick"?Yi(n,v):"removeEventListener"in n?n.removeEventListener(Vi[r]||r,v,!1):n.detachEvent("on"+r,v),n[En][m]=null}function Cn(n){return n.stopPropagation?n.stopPropagation():n.originalEvent?n.originalEvent._stopped=!0:n.cancelBubble=!0,this}function Hn(n){return An(n,"wheel",Cn),this}function Xi(n){return jt(n,"mousedown touchstart dblclick contextmenu",Cn),n._leaflet_disable_click=!0,this}function Se(n){return n.preventDefault?n.preventDefault():n.returnValue=!1,this}function _i(n){return Se(n),Cn(n),this}function dr(n){if(n.composedPath)return n.composedPath();for(var r=[],s=n.target;s;)r.push(s),s=s.parentNode;return r}function fr(n,r){if(!r)return new at(n.clientX,n.clientY);var s=ur(r),f=s.boundingClientRect;return new at((n.clientX-f.left)/s.x-r.clientLeft,(n.clientY-f.top)/s.y-r.clientTop)}var Zl=_t.linux&&_t.chrome?window.devicePixelRatio:_t.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Ke(n){return _t.edge?n.wheelDeltaY/2:n.deltaY&&n.deltaMode===0?-n.deltaY/Zl:n.deltaY&&n.deltaMode===1?-n.deltaY*20:n.deltaY&&n.deltaMode===2?-n.deltaY*60:n.deltaX||n.deltaZ?0:n.wheelDelta?(n.wheelDeltaY||n.wheelDelta)/2:n.detail&&Math.abs(n.detail)<32765?-n.detail*20:n.detail?n.detail/-32765*60:0}function ni(n,r){var s=r.relatedTarget;if(!s)return!0;try{for(;s&&s!==n;)s=s.parentNode}catch{return!1}return s!==n}var eo={__proto__:null,on:jt,off:ie,stopPropagation:Cn,disableScrollPropagation:Hn,disableClickPropagation:Xi,preventDefault:Se,stop:_i,getPropagationPath:dr,getMousePosition:fr,getWheelDelta:Ke,isExternalTarget:ni,addListener:jt,removeListener:ie},za=it.extend({run:function(n,r,s,f){this.stop(),this._el=n,this._inProgress=!0,this._duration=s||.25,this._easeOutPower=1/Math.max(f||.5,.2),this._startPos=yi(n),this._offset=r.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=Tt(this._animate,this),this._step()},_step:function(n){var r=+new Date-this._startTime,s=this._duration*1e3;r<s?this._runFrame(this._easeOut(r/s),n):(this._runFrame(1),this._complete())},_runFrame:function(n,r){var s=this._startPos.add(this._offset.multiplyBy(n));r&&s._round(),de(this._el,s),this.fire("step")},_complete:function(){Kt(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(n){return 1-Math.pow(1-n,this._easeOutPower)}}),Vt=it.extend({options:{crs:ha,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(n,r){r=X(this,r),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(n),this._initLayout(),this._onResize=b(this._onResize,this),this._initEvents(),r.maxBounds&&this.setMaxBounds(r.maxBounds),r.zoom!==void 0&&(this._zoom=this._limitZoom(r.zoom)),r.center&&r.zoom!==void 0&&this.setView(ut(r.center),r.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=rr&&_t.any3d&&!_t.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),jt(this._proxy,ss,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(n,r,s){if(r=r===void 0?this._zoom:this._limitZoom(r),n=this._limitCenter(ut(n),r,this.options.maxBounds),s=s||{},this._stop(),this._loaded&&!s.reset&&s!==!0){s.animate!==void 0&&(s.zoom=x({animate:s.animate},s.zoom),s.pan=x({animate:s.animate,duration:s.duration},s.pan));var f=this._zoom!==r?this._tryAnimatedZoom&&this._tryAnimatedZoom(n,r,s.zoom):this._tryAnimatedPan(n,s.pan);if(f)return clearTimeout(this._sizeTimer),this}return this._resetView(n,r,s.pan&&s.pan.noMoveStart),this},setZoom:function(n,r){return this._loaded?this.setView(this.getCenter(),n,{zoom:r}):(this._zoom=n,this)},zoomIn:function(n,r){return n=n||(_t.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+n,r)},zoomOut:function(n,r){return n=n||(_t.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-n,r)},setZoomAround:function(n,r,s){var f=this.getZoomScale(r),m=this.getSize().divideBy(2),v=n instanceof at?n:this.latLngToContainerPoint(n),A=v.subtract(m).multiplyBy(1-1/f),B=this.containerPointToLatLng(m.add(A));return this.setView(B,r,{zoom:s})},_getBoundsCenterZoom:function(n,r){r=r||{},n=n.getBounds?n.getBounds():st(n);var s=lt(r.paddingTopLeft||r.padding||[0,0]),f=lt(r.paddingBottomRight||r.padding||[0,0]),m=this.getBoundsZoom(n,!1,s.add(f));if(m=typeof r.maxZoom=="number"?Math.min(r.maxZoom,m):m,m===1/0)return{center:n.getCenter(),zoom:m};var v=f.subtract(s).divideBy(2),A=this.project(n.getSouthWest(),m),B=this.project(n.getNorthEast(),m),Z=this.unproject(A.add(B).divideBy(2).add(v),m);return{center:Z,zoom:m}},fitBounds:function(n,r){if(n=st(n),!n.isValid())throw new Error("Bounds are not valid.");var s=this._getBoundsCenterZoom(n,r);return this.setView(s.center,s.zoom,r)},fitWorld:function(n){return this.fitBounds([[-90,-180],[90,180]],n)},panTo:function(n,r){return this.setView(n,this._zoom,{pan:r})},panBy:function(n,r){if(n=lt(n).round(),r=r||{},!n.x&&!n.y)return this.fire("moveend");if(r.animate!==!0&&!this.getSize().contains(n))return this._resetView(this.unproject(this.project(this.getCenter()).add(n)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new za,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),r.noMoveStart||this.fire("movestart"),r.animate!==!1){Lt(this._mapPane,"leaflet-pan-anim");var s=this._getMapPanePos().subtract(n).round();this._panAnim.run(this._mapPane,s,r.duration||.25,r.easeLinearity)}else this._rawPanBy(n),this.fire("move").fire("moveend");return this},flyTo:function(n,r,s){if(s=s||{},s.animate===!1||!_t.any3d)return this.setView(n,r,s);this._stop();var f=this.project(this.getCenter()),m=this.project(n),v=this.getSize(),A=this._zoom;n=ut(n),r=r===void 0?A:r;var B=Math.max(v.x,v.y),Z=B*this.getZoomScale(A,r),Q=m.distanceTo(f)||1,dt=1.42,bt=dt*dt;function kt(we){var oi=we?-1:1,Qi=we?Z:B,Cs=Z*Z-B*B+oi*bt*bt*Q*Q,Cr=2*Qi*bt*Q,jr=Cs/Cr,ji=Math.sqrt(jr*jr+1)-jr,si=ji<1e-9?-18:Math.log(ji);return si}function Ze(we){return(Math.exp(we)-Math.exp(-we))/2}function ze(we){return(Math.exp(we)+Math.exp(-we))/2}function ln(we){return Ze(we)/ze(we)}var Jt=kt(0);function Wt(we){return B*(ze(Jt)/ze(Jt+dt*we))}function Pt(we){return B*(ze(Jt)*ln(Jt+dt*we)-Ze(Jt))/bt}function Ai(we){return 1-Math.pow(1-we,1.5)}var xn=Date.now(),go=(kt(1)-Jt)/dt,Ci=s.duration?1e3*s.duration:1e3*go*.8;function As(){var we=(Date.now()-xn)/Ci,oi=Ai(we)*go;we<=1?(this._flyToFrame=Tt(As,this),this._move(this.unproject(f.add(m.subtract(f).multiplyBy(Pt(oi)/Q)),A),this.getScaleZoom(B/Wt(oi),A),{flyTo:!0})):this._move(n,r)._moveEnd(!0)}return this._moveStart(!0,s.noMoveStart),As.call(this),this},flyToBounds:function(n,r){var s=this._getBoundsCenterZoom(n,r);return this.flyTo(s.center,s.zoom,r)},setMaxBounds:function(n){return n=st(n),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),n.isValid()?(this.options.maxBounds=n,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(n){var r=this.options.minZoom;return this.options.minZoom=n,this._loaded&&r!==n&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(n):this},setMaxZoom:function(n){var r=this.options.maxZoom;return this.options.maxZoom=n,this._loaded&&r!==n&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(n):this},panInsideBounds:function(n,r){this._enforcingBounds=!0;var s=this.getCenter(),f=this._limitCenter(s,this._zoom,st(n));return s.equals(f)||this.panTo(f,r),this._enforcingBounds=!1,this},panInside:function(n,r){r=r||{};var s=lt(r.paddingTopLeft||r.padding||[0,0]),f=lt(r.paddingBottomRight||r.padding||[0,0]),m=this.project(this.getCenter()),v=this.project(n),A=this.getPixelBounds(),B=V([A.min.add(s),A.max.subtract(f)]),Z=B.getSize();if(!B.contains(v)){this._enforcingBounds=!0;var Q=v.subtract(B.getCenter()),dt=B.extend(v).getSize().subtract(Z);m.x+=Q.x<0?-dt.x:dt.x,m.y+=Q.y<0?-dt.y:dt.y,this.panTo(this.unproject(m),r),this._enforcingBounds=!1}return this},invalidateSize:function(n){if(!this._loaded)return this;n=x({animate:!1,pan:!0},n===!0?{animate:!0}:n);var r=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var s=this.getSize(),f=r.divideBy(2).round(),m=s.divideBy(2).round(),v=f.subtract(m);return!v.x&&!v.y?this:(n.animate&&n.pan?this.panBy(v):(n.pan&&this._rawPanBy(v),this.fire("move"),n.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(b(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:r,newSize:s}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(n){if(n=this._locateOptions=x({timeout:1e4,watch:!1},n),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var r=b(this._handleGeolocationResponse,this),s=b(this._handleGeolocationError,this);return n.watch?this._locationWatchId=navigator.geolocation.watchPosition(r,s,n):navigator.geolocation.getCurrentPosition(r,s,n),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(n){if(this._container._leaflet_id){var r=n.code,s=n.message||(r===1?"permission denied":r===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:r,message:"Geolocation error: "+s+"."})}},_handleGeolocationResponse:function(n){if(this._container._leaflet_id){var r=n.coords.latitude,s=n.coords.longitude,f=new ft(r,s),m=f.toBounds(n.coords.accuracy*2),v=this._locateOptions;if(v.setView){var A=this.getBoundsZoom(m);this.setView(f,v.maxZoom?Math.min(A,v.maxZoom):A)}var B={latlng:f,bounds:m,timestamp:n.timestamp};for(var Z in n.coords)typeof n.coords[Z]=="number"&&(B[Z]=n.coords[Z]);this.fire("locationfound",B)}},addHandler:function(n,r){if(!r)return this;var s=this[n]=new r(this);return this._handlers.push(s),this.options[n]&&s.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),se(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(Kt(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var n;for(n in this._layers)this._layers[n].remove();for(n in this._panes)se(this._panes[n]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(n,r){var s="leaflet-pane"+(n?" leaflet-"+n.replace("Pane","")+"-pane":""),f=Zt("div",s,r||this._mapPane);return n&&(this._panes[n]=f),f},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var n=this.getPixelBounds(),r=this.unproject(n.getBottomLeft()),s=this.unproject(n.getTopRight());return new et(r,s)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(n,r,s){n=st(n),s=lt(s||[0,0]);var f=this.getZoom()||0,m=this.getMinZoom(),v=this.getMaxZoom(),A=n.getNorthWest(),B=n.getSouthEast(),Z=this.getSize().subtract(s),Q=V(this.project(B,f),this.project(A,f)).getSize(),dt=_t.any3d?this.options.zoomSnap:1,bt=Z.x/Q.x,kt=Z.y/Q.y,Ze=r?Math.max(bt,kt):Math.min(bt,kt);return f=this.getScaleZoom(Ze,f),dt&&(f=Math.round(f/(dt/100))*(dt/100),f=r?Math.ceil(f/dt)*dt:Math.floor(f/dt)*dt),Math.max(m,Math.min(v,f))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new at(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(n,r){var s=this._getTopLeftPoint(n,r);return new M(s,s.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(n){return this.options.crs.getProjectedBounds(n===void 0?this.getZoom():n)},getPane:function(n){return typeof n=="string"?this._panes[n]:n},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(n,r){var s=this.options.crs;return r=r===void 0?this._zoom:r,s.scale(n)/s.scale(r)},getScaleZoom:function(n,r){var s=this.options.crs;r=r===void 0?this._zoom:r;var f=s.zoom(n*s.scale(r));return isNaN(f)?1/0:f},project:function(n,r){return r=r===void 0?this._zoom:r,this.options.crs.latLngToPoint(ut(n),r)},unproject:function(n,r){return r=r===void 0?this._zoom:r,this.options.crs.pointToLatLng(lt(n),r)},layerPointToLatLng:function(n){var r=lt(n).add(this.getPixelOrigin());return this.unproject(r)},latLngToLayerPoint:function(n){var r=this.project(ut(n))._round();return r._subtract(this.getPixelOrigin())},wrapLatLng:function(n){return this.options.crs.wrapLatLng(ut(n))},wrapLatLngBounds:function(n){return this.options.crs.wrapLatLngBounds(st(n))},distance:function(n,r){return this.options.crs.distance(ut(n),ut(r))},containerPointToLayerPoint:function(n){return lt(n).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(n){return lt(n).add(this._getMapPanePos())},containerPointToLatLng:function(n){var r=this.containerPointToLayerPoint(lt(n));return this.layerPointToLatLng(r)},latLngToContainerPoint:function(n){return this.layerPointToContainerPoint(this.latLngToLayerPoint(ut(n)))},mouseEventToContainerPoint:function(n){return fr(n,this._container)},mouseEventToLayerPoint:function(n){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(n))},mouseEventToLatLng:function(n){return this.layerPointToLatLng(this.mouseEventToLayerPoint(n))},_initContainer:function(n){var r=this._container=ls(n);if(r){if(r._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");jt(r,"scroll",this._onScroll,this),this._containerId=w(r)},_initLayout:function(){var n=this._container;this._fadeAnimated=this.options.fadeAnimation&&_t.any3d,Lt(n,"leaflet-container"+(_t.touch?" leaflet-touch":"")+(_t.retina?" leaflet-retina":"")+(_t.ielt9?" leaflet-oldie":"")+(_t.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var r=or(n,"position");r!=="absolute"&&r!=="relative"&&r!=="fixed"&&r!=="sticky"&&(n.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var n=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),de(this._mapPane,new at(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Lt(n.markerPane,"leaflet-zoom-hide"),Lt(n.shadowPane,"leaflet-zoom-hide"))},_resetView:function(n,r,s){de(this._mapPane,new at(0,0));var f=!this._loaded;this._loaded=!0,r=this._limitZoom(r),this.fire("viewprereset");var m=this._zoom!==r;this._moveStart(m,s)._move(n,r)._moveEnd(m),this.fire("viewreset"),f&&this.fire("load")},_moveStart:function(n,r){return n&&this.fire("zoomstart"),r||this.fire("movestart"),this},_move:function(n,r,s,f){r===void 0&&(r=this._zoom);var m=this._zoom!==r;return this._zoom=r,this._lastCenter=n,this._pixelOrigin=this._getNewPixelOrigin(n),f?s&&s.pinch&&this.fire("zoom",s):((m||s&&s.pinch)&&this.fire("zoom",s),this.fire("move",s)),this},_moveEnd:function(n){return n&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return Kt(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(n){de(this._mapPane,this._getMapPanePos().subtract(n))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(n){this._targets={},this._targets[w(this._container)]=this;var r=n?ie:jt;r(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&r(window,"resize",this._onResize,this),_t.any3d&&this.options.transform3DLimit&&(n?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){Kt(this._resizeRequest),this._resizeRequest=Tt(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var n=this._getMapPanePos();Math.max(Math.abs(n.x),Math.abs(n.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(n,r){for(var s=[],f,m=r==="mouseout"||r==="mouseover",v=n.target||n.srcElement,A=!1;v;){if(f=this._targets[w(v)],f&&(r==="click"||r==="preclick")&&this._draggableMoved(f)){A=!0;break}if(f&&f.listens(r,!0)&&(m&&!ni(v,n)||(s.push(f),m))||v===this._container)break;v=v.parentNode}return!s.length&&!A&&!m&&this.listens(r,!0)&&(s=[this]),s},_isClickDisabled:function(n){for(;n&&n!==this._container;){if(n._leaflet_disable_click)return!0;n=n.parentNode}},_handleDOMEvent:function(n){var r=n.target||n.srcElement;if(!(!this._loaded||r._leaflet_disable_events||n.type==="click"&&this._isClickDisabled(r))){var s=n.type;s==="mousedown"&&wa(r),this._fireDOMEvent(n,s)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(n,r,s){if(n.type==="click"){var f=x({},n);f.type="preclick",this._fireDOMEvent(f,f.type,s)}var m=this._findEventTargets(n,r);if(s){for(var v=[],A=0;A<s.length;A++)s[A].listens(r,!0)&&v.push(s[A]);m=v.concat(m)}if(m.length){r==="contextmenu"&&Se(n);var B=m[0],Z={originalEvent:n};if(n.type!=="keypress"&&n.type!=="keydown"&&n.type!=="keyup"){var Q=B.getLatLng&&(!B._radius||B._radius<=10);Z.containerPoint=Q?this.latLngToContainerPoint(B.getLatLng()):this.mouseEventToContainerPoint(n),Z.layerPoint=this.containerPointToLayerPoint(Z.containerPoint),Z.latlng=Q?B.getLatLng():this.layerPointToLatLng(Z.layerPoint)}for(A=0;A<m.length;A++)if(m[A].fire(r,Z,!0),Z.originalEvent._stopped||m[A].options.bubblingMouseEvents===!1&&ht(this._mouseEvents,r)!==-1)return}},_draggableMoved:function(n){return n=n.dragging&&n.dragging.enabled()?n:this,n.dragging&&n.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var n=0,r=this._handlers.length;n<r;n++)this._handlers[n].disable()},whenReady:function(n,r){return this._loaded?n.call(r||this,{target:this}):this.on("load",n,r),this},_getMapPanePos:function(){return yi(this._mapPane)||new at(0,0)},_moved:function(){var n=this._getMapPanePos();return n&&!n.equals([0,0])},_getTopLeftPoint:function(n,r){var s=n&&r!==void 0?this._getNewPixelOrigin(n,r):this.getPixelOrigin();return s.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(n,r){var s=this.getSize()._divideBy(2);return this.project(n,r)._subtract(s)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(n,r,s){var f=this._getNewPixelOrigin(s,r);return this.project(n,r)._subtract(f)},_latLngBoundsToNewLayerBounds:function(n,r,s){var f=this._getNewPixelOrigin(s,r);return V([this.project(n.getSouthWest(),r)._subtract(f),this.project(n.getNorthWest(),r)._subtract(f),this.project(n.getSouthEast(),r)._subtract(f),this.project(n.getNorthEast(),r)._subtract(f)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(n){return this.latLngToLayerPoint(n).subtract(this._getCenterLayerPoint())},_limitCenter:function(n,r,s){if(!s)return n;var f=this.project(n,r),m=this.getSize().divideBy(2),v=new M(f.subtract(m),f.add(m)),A=this._getBoundsOffset(v,s,r);return Math.abs(A.x)<=1&&Math.abs(A.y)<=1?n:this.unproject(f.add(A),r)},_limitOffset:function(n,r){if(!r)return n;var s=this.getPixelBounds(),f=new M(s.min.add(n),s.max.add(n));return n.add(this._getBoundsOffset(f,r))},_getBoundsOffset:function(n,r,s){var f=V(this.project(r.getNorthEast(),s),this.project(r.getSouthWest(),s)),m=f.min.subtract(n.min),v=f.max.subtract(n.max),A=this._rebound(m.x,-v.x),B=this._rebound(m.y,-v.y);return new at(A,B)},_rebound:function(n,r){return n+r>0?Math.round(n-r)/2:Math.max(0,Math.ceil(n))-Math.max(0,Math.floor(r))},_limitZoom:function(n){var r=this.getMinZoom(),s=this.getMaxZoom(),f=_t.any3d?this.options.zoomSnap:1;return f&&(n=Math.round(n/f)*f),Math.max(r,Math.min(s,n))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){ve(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(n,r){var s=this._getCenterOffset(n)._trunc();return(r&&r.animate)!==!0&&!this.getSize().contains(s)?!1:(this.panBy(s,r),!0)},_createAnimProxy:function(){var n=this._proxy=Zt("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(n),this.on("zoomanim",function(r){var s=vi,f=this._proxy.style[s];ei(this._proxy,this.project(r.center,r.zoom),this.getZoomScale(r.zoom,1)),f===this._proxy.style[s]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){se(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var n=this.getCenter(),r=this.getZoom();ei(this._proxy,this.project(n,r),this.getZoomScale(r,1))},_catchTransitionEnd:function(n){this._animatingZoom&&n.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(n,r,s){if(this._animatingZoom)return!0;if(s=s||{},!this._zoomAnimated||s.animate===!1||this._nothingToAnimate()||Math.abs(r-this._zoom)>this.options.zoomAnimationThreshold)return!1;var f=this.getZoomScale(r),m=this._getCenterOffset(n)._divideBy(1-1/f);return s.animate!==!0&&!this.getSize().contains(m)?!1:(Tt(function(){this._moveStart(!0,s.noMoveStart||!1)._animateZoom(n,r,!0)},this),!0)},_animateZoom:function(n,r,s,f){this._mapPane&&(s&&(this._animatingZoom=!0,this._animateToCenter=n,this._animateToZoom=r,Lt(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:n,zoom:r,noUpdate:f}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(b(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&ve(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function ps(n,r){return new Vt(n,r)}var sn=he.extend({options:{position:"topright"},initialize:function(n){X(this,n)},getPosition:function(){return this.options.position},setPosition:function(n){var r=this._map;return r&&r.removeControl(this),this.options.position=n,r&&r.addControl(this),this},getContainer:function(){return this._container},addTo:function(n){this.remove(),this._map=n;var r=this._container=this.onAdd(n),s=this.getPosition(),f=n._controlCorners[s];return Lt(r,"leaflet-control"),s.indexOf("bottom")!==-1?f.insertBefore(r,f.firstChild):f.appendChild(r),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(se(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(n){this._map&&n&&n.screenX>0&&n.screenY>0&&this._map.getContainer().focus()}}),ii=function(n){return new sn(n)};Vt.include({addControl:function(n){return n.addTo(this),this},removeControl:function(n){return n.remove(),this},_initControlPos:function(){var n=this._controlCorners={},r="leaflet-",s=this._controlContainer=Zt("div",r+"control-container",this._container);function f(m,v){var A=r+m+" "+r+v;n[m+v]=Zt("div",A,s)}f("top","left"),f("top","right"),f("bottom","left"),f("bottom","right")},_clearControlPos:function(){for(var n in this._controlCorners)se(this._controlCorners[n]);se(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var hr=sn.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(n,r,s,f){return s<f?-1:f<s?1:0}},initialize:function(n,r,s){X(this,s),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var f in n)this._addLayer(n[f],f);for(f in r)this._addLayer(r[f],f,!0)},onAdd:function(n){this._initLayout(),this._update(),this._map=n,n.on("zoomend",this._checkDisabledLayers,this);for(var r=0;r<this._layers.length;r++)this._layers[r].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(n){return sn.prototype.addTo.call(this,n),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var n=0;n<this._layers.length;n++)this._layers[n].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(n,r){return this._addLayer(n,r),this._map?this._update():this},addOverlay:function(n,r){return this._addLayer(n,r,!0),this._map?this._update():this},removeLayer:function(n){n.off("add remove",this._onLayerChange,this);var r=this._getLayer(w(n));return r&&this._layers.splice(this._layers.indexOf(r),1),this._map?this._update():this},expand:function(){Lt(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var n=this._map.getSize().y-(this._container.offsetTop+50);return n<this._section.clientHeight?(Lt(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=n+"px"):ve(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return ve(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var n="leaflet-control-layers",r=this._container=Zt("div",n),s=this.options.collapsed;r.setAttribute("aria-haspopup",!0),Xi(r),Hn(r);var f=this._section=Zt("section",n+"-list");s&&(this._map.on("click",this.collapse,this),jt(r,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var m=this._layersLink=Zt("a",n+"-toggle",r);m.href="#",m.title="Layers",m.setAttribute("role","button"),jt(m,{keydown:function(v){v.keyCode===13&&this._expandSafely()},click:function(v){Se(v),this._expandSafely()}},this),s||this.expand(),this._baseLayersList=Zt("div",n+"-base",f),this._separator=Zt("div",n+"-separator",f),this._overlaysList=Zt("div",n+"-overlays",f),r.appendChild(f)},_getLayer:function(n){for(var r=0;r<this._layers.length;r++)if(this._layers[r]&&w(this._layers[r].layer)===n)return this._layers[r]},_addLayer:function(n,r,s){this._map&&n.on("add remove",this._onLayerChange,this),this._layers.push({layer:n,name:r,overlay:s}),this.options.sortLayers&&this._layers.sort(b(function(f,m){return this.options.sortFunction(f.layer,m.layer,f.name,m.name)},this)),this.options.autoZIndex&&n.setZIndex&&(this._lastZIndex++,n.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;fn(this._baseLayersList),fn(this._overlaysList),this._layerControlInputs=[];var n,r,s,f,m=0;for(s=0;s<this._layers.length;s++)f=this._layers[s],this._addItem(f),r=r||f.overlay,n=n||!f.overlay,m+=f.overlay?0:1;return this.options.hideSingleBase&&(n=n&&m>1,this._baseLayersList.style.display=n?"":"none"),this._separator.style.display=r&&n?"":"none",this},_onLayerChange:function(n){this._handlingClick||this._update();var r=this._getLayer(w(n.target)),s=r.overlay?n.type==="add"?"overlayadd":"overlayremove":n.type==="add"?"baselayerchange":null;s&&this._map.fire(s,r)},_createRadioElement:function(n,r){var s='<input type="radio" class="leaflet-control-layers-selector" name="'+n+'"'+(r?' checked="checked"':"")+"/>",f=document.createElement("div");return f.innerHTML=s,f.firstChild},_addItem:function(n){var r=document.createElement("label"),s=this._map.hasLayer(n.layer),f;n.overlay?(f=document.createElement("input"),f.type="checkbox",f.className="leaflet-control-layers-selector",f.defaultChecked=s):f=this._createRadioElement("leaflet-base-layers_"+w(this),s),this._layerControlInputs.push(f),f.layerId=w(n.layer),jt(f,"click",this._onInputClick,this);var m=document.createElement("span");m.innerHTML=" "+n.name;var v=document.createElement("span");r.appendChild(v),v.appendChild(f),v.appendChild(m);var A=n.overlay?this._overlaysList:this._baseLayersList;return A.appendChild(r),this._checkDisabledLayers(),r},_onInputClick:function(){if(!this._preventClick){var n=this._layerControlInputs,r,s,f=[],m=[];this._handlingClick=!0;for(var v=n.length-1;v>=0;v--)r=n[v],s=this._getLayer(r.layerId).layer,r.checked?f.push(s):r.checked||m.push(s);for(v=0;v<m.length;v++)this._map.hasLayer(m[v])&&this._map.removeLayer(m[v]);for(v=0;v<f.length;v++)this._map.hasLayer(f[v])||this._map.addLayer(f[v]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var n=this._layerControlInputs,r,s,f=this._map.getZoom(),m=n.length-1;m>=0;m--)r=n[m],s=this._getLayer(r.layerId).layer,r.disabled=s.options.minZoom!==void 0&&f<s.options.minZoom||s.options.maxZoom!==void 0&&f>s.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var n=this._section;this._preventClick=!0,jt(n,"click",Se),this.expand();var r=this;setTimeout(function(){ie(n,"click",Se),r._preventClick=!1})}}),Pl=function(n,r,s){return new hr(n,r,s)},ms=sn.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(n){var r="leaflet-control-zoom",s=Zt("div",r+" leaflet-bar"),f=this.options;return this._zoomInButton=this._createButton(f.zoomInText,f.zoomInTitle,r+"-in",s,this._zoomIn),this._zoomOutButton=this._createButton(f.zoomOutText,f.zoomOutTitle,r+"-out",s,this._zoomOut),this._updateDisabled(),n.on("zoomend zoomlevelschange",this._updateDisabled,this),s},onRemove:function(n){n.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(n){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(n.shiftKey?3:1))},_zoomOut:function(n){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(n.shiftKey?3:1))},_createButton:function(n,r,s,f,m){var v=Zt("a",s,f);return v.innerHTML=n,v.href="#",v.title=r,v.setAttribute("role","button"),v.setAttribute("aria-label",r),Xi(v),jt(v,"click",_i),jt(v,"click",m,this),jt(v,"click",this._refocusOnMap,this),v},_updateDisabled:function(){var n=this._map,r="leaflet-disabled";ve(this._zoomInButton,r),ve(this._zoomOutButton,r),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||n._zoom===n.getMinZoom())&&(Lt(this._zoomOutButton,r),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||n._zoom===n.getMaxZoom())&&(Lt(this._zoomInButton,r),this._zoomInButton.setAttribute("aria-disabled","true"))}});Vt.mergeOptions({zoomControl:!0}),Vt.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new ms,this.addControl(this.zoomControl))});var Vc=function(n){return new ms(n)},ql=sn.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(n){var r="leaflet-control-scale",s=Zt("div",r),f=this.options;return this._addScales(f,r+"-line",s),n.on(f.updateWhenIdle?"moveend":"move",this._update,this),n.whenReady(this._update,this),s},onRemove:function(n){n.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(n,r,s){n.metric&&(this._mScale=Zt("div",r,s)),n.imperial&&(this._iScale=Zt("div",r,s))},_update:function(){var n=this._map,r=n.getSize().y/2,s=n.distance(n.containerPointToLatLng([0,r]),n.containerPointToLatLng([this.options.maxWidth,r]));this._updateScales(s)},_updateScales:function(n){this.options.metric&&n&&this._updateMetric(n),this.options.imperial&&n&&this._updateImperial(n)},_updateMetric:function(n){var r=this._getRoundNum(n),s=r<1e3?r+" m":r/1e3+" km";this._updateScale(this._mScale,s,r/n)},_updateImperial:function(n){var r=n*3.2808399,s,f,m;r>5280?(s=r/5280,f=this._getRoundNum(s),this._updateScale(this._iScale,f+" mi",f/s)):(m=this._getRoundNum(r),this._updateScale(this._iScale,m+" ft",m/r))},_updateScale:function(n,r,s){n.style.width=Math.round(this.options.maxWidth*s)+"px",n.innerHTML=r},_getRoundNum:function(n){var r=Math.pow(10,(Math.floor(n)+"").length-1),s=n/r;return s=s>=10?10:s>=5?5:s>=3?3:s>=2?2:1,r*s}}),gs=function(n){return new ql(n)},Xc='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',xs=sn.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(_t.inlineSvg?Xc+" ":"")+"Leaflet</a>"},initialize:function(n){X(this,n),this._attributions={}},onAdd:function(n){n.attributionControl=this,this._container=Zt("div","leaflet-control-attribution"),Xi(this._container);for(var r in n._layers)n._layers[r].getAttribution&&this.addAttribution(n._layers[r].getAttribution());return this._update(),n.on("layeradd",this._addAttribution,this),this._container},onRemove:function(n){n.off("layeradd",this._addAttribution,this)},_addAttribution:function(n){n.layer.getAttribution&&(this.addAttribution(n.layer.getAttribution()),n.layer.once("remove",function(){this.removeAttribution(n.layer.getAttribution())},this))},setPrefix:function(n){return this.options.prefix=n,this._update(),this},addAttribution:function(n){return n?(this._attributions[n]||(this._attributions[n]=0),this._attributions[n]++,this._update(),this):this},removeAttribution:function(n){return n?(this._attributions[n]&&(this._attributions[n]--,this._update()),this):this},_update:function(){if(this._map){var n=[];for(var r in this._attributions)this._attributions[r]&&n.push(r);var s=[];this.options.prefix&&s.push(this.options.prefix),n.length&&s.push(n.join(", ")),this._container.innerHTML=s.join(' <span aria-hidden="true">|</span> ')}}});Vt.mergeOptions({attributionControl:!0}),Vt.addInitHook(function(){this.options.attributionControl&&new xs().addTo(this)});var $c=function(n){return new xs(n)};sn.Layers=hr,sn.Zoom=ms,sn.Scale=ql,sn.Attribution=xs,ii.layers=Pl,ii.zoom=Vc,ii.scale=gs,ii.attribution=$c;var Zn=he.extend({initialize:function(n){this._map=n},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Zn.addTo=function(n,r){return n.addHandler(r,this),this};var Ic={Events:N},vs=_t.touch?"touchstart mousedown":"mousedown",bi=it.extend({options:{clickTolerance:3},initialize:function(n,r,s,f){X(this,f),this._element=n,this._dragStartTarget=r||n,this._preventOutline=s},enable:function(){this._enabled||(jt(this._dragStartTarget,vs,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(bi._dragging===this&&this.finishDrag(!0),ie(this._dragStartTarget,vs,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(n){if(this._enabled&&(this._moved=!1,!us(this._element,"leaflet-zoom-anim"))){if(n.touches&&n.touches.length!==1){bi._dragging===this&&this.finishDrag();return}if(!(bi._dragging||n.shiftKey||n.which!==1&&n.button!==1&&!n.touches)&&(bi._dragging=this,this._preventOutline&&wa(this._element),Jr(),_a(),!this._moving)){this.fire("down");var r=n.touches?n.touches[0]:n,s=to(this._element);this._startPoint=new at(r.clientX,r.clientY),this._startPos=yi(this._element),this._parentScale=ur(s);var f=n.type==="mousedown";jt(document,f?"mousemove":"touchmove",this._onMove,this),jt(document,f?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(n){if(this._enabled){if(n.touches&&n.touches.length>1){this._moved=!0;return}var r=n.touches&&n.touches.length===1?n.touches[0]:n,s=new at(r.clientX,r.clientY)._subtract(this._startPoint);!s.x&&!s.y||Math.abs(s.x)+Math.abs(s.y)<this.options.clickTolerance||(s.x/=this._parentScale.x,s.y/=this._parentScale.y,Se(n),this._moved||(this.fire("dragstart"),this._moved=!0,Lt(document.body,"leaflet-dragging"),this._lastTarget=n.target||n.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Lt(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(s),this._moving=!0,this._lastEvent=n,this._updatePosition())}},_updatePosition:function(){var n={originalEvent:this._lastEvent};this.fire("predrag",n),de(this._element,this._newPos),this.fire("drag",n)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(n){ve(document.body,"leaflet-dragging"),this._lastTarget&&(ve(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),ie(document,"mousemove touchmove",this._onMove,this),ie(document,"mouseup touchend touchcancel",this._onUp,this),lr(),Un();var r=this._moved&&this._moving;this._moving=!1,bi._dragging=!1,r&&this.fire("dragend",{noInertia:n,distance:this._newPos.distanceTo(this._startPos)})}});function Yl(n,r,s){var f,m=[1,4,2,8],v,A,B,Z,Q,dt,bt,kt;for(v=0,dt=n.length;v<dt;v++)n[v]._code=$i(n[v],r);for(B=0;B<4;B++){for(bt=m[B],f=[],v=0,dt=n.length,A=dt-1;v<dt;A=v++)Z=n[v],Q=n[A],Z._code&bt?Q._code&bt||(kt=no(Q,Z,bt,r,s),kt._code=$i(kt,r),f.push(kt)):(Q._code&bt&&(kt=no(Q,Z,bt,r,s),kt._code=$i(kt,r),f.push(kt)),f.push(Z));n=f}return n}function Gl(n,r){var s,f,m,v,A,B,Z,Q,dt;if(!n||n.length===0)throw new Error("latlngs not passed");pn(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var bt=ut([0,0]),kt=st(n),Ze=kt.getNorthWest().distanceTo(kt.getSouthWest())*kt.getNorthEast().distanceTo(kt.getNorthWest());Ze<1700&&(bt=ys(n));var ze=n.length,ln=[];for(s=0;s<ze;s++){var Jt=ut(n[s]);ln.push(r.project(ut([Jt.lat-bt.lat,Jt.lng-bt.lng])))}for(B=Z=Q=0,s=0,f=ze-1;s<ze;f=s++)m=ln[s],v=ln[f],A=m.y*v.x-v.y*m.x,Z+=(m.x+v.x)*A,Q+=(m.y+v.y)*A,B+=A*3;B===0?dt=ln[0]:dt=[Z/B,Q/B];var Wt=r.unproject(lt(dt));return ut([Wt.lat+bt.lat,Wt.lng+bt.lng])}function ys(n){for(var r=0,s=0,f=0,m=0;m<n.length;m++){var v=ut(n[m]);r+=v.lat,s+=v.lng,f++}return ut([r/f,s/f])}var _s={__proto__:null,clipPolygon:Yl,polygonCenter:Gl,centroid:ys};function Vl(n,r){if(!r||!n.length)return n.slice();var s=r*r;return n=Qc(n,s),n=$l(n,s),n}function Xl(n,r,s){return Math.sqrt(pr(n,r,s,!0))}function Kc(n,r,s){return pr(n,r,s)}function $l(n,r){var s=n.length,f=typeof Uint8Array<"u"?Uint8Array:Array,m=new f(s);m[0]=m[s-1]=1,bs(n,m,r,0,s-1);var v,A=[];for(v=0;v<s;v++)m[v]&&A.push(n[v]);return A}function bs(n,r,s,f,m){var v=0,A,B,Z;for(B=f+1;B<=m-1;B++)Z=pr(n[B],n[f],n[m],!0),Z>v&&(A=B,v=Z);v>s&&(r[A]=1,bs(n,r,s,f,A),bs(n,r,s,A,m))}function Qc(n,r){for(var s=[n[0]],f=1,m=0,v=n.length;f<v;f++)Fc(n[f],n[m])>r&&(s.push(n[f]),m=f);return m<v-1&&s.push(n[v-1]),s}var Il;function Kl(n,r,s,f,m){var v=f?Il:$i(n,s),A=$i(r,s),B,Z,Q;for(Il=A;;){if(!(v|A))return[n,r];if(v&A)return!1;B=v||A,Z=no(n,r,B,s,m),Q=$i(Z,s),B===v?(n=Z,v=Q):(r=Z,A=Q)}}function no(n,r,s,f,m){var v=r.x-n.x,A=r.y-n.y,B=f.min,Z=f.max,Q,dt;return s&8?(Q=n.x+v*(Z.y-n.y)/A,dt=Z.y):s&4?(Q=n.x+v*(B.y-n.y)/A,dt=B.y):s&2?(Q=Z.x,dt=n.y+A*(Z.x-n.x)/v):s&1&&(Q=B.x,dt=n.y+A*(B.x-n.x)/v),new at(Q,dt,m)}function $i(n,r){var s=0;return n.x<r.min.x?s|=1:n.x>r.max.x&&(s|=2),n.y<r.min.y?s|=4:n.y>r.max.y&&(s|=8),s}function Fc(n,r){var s=r.x-n.x,f=r.y-n.y;return s*s+f*f}function pr(n,r,s,f){var m=r.x,v=r.y,A=s.x-m,B=s.y-v,Z=A*A+B*B,Q;return Z>0&&(Q=((n.x-m)*A+(n.y-v)*B)/Z,Q>1?(m=s.x,v=s.y):Q>0&&(m+=A*Q,v+=B*Q)),A=n.x-m,B=n.y-v,f?A*A+B*B:new at(m,v)}function pn(n){return!tt(n[0])||typeof n[0][0]!="object"&&typeof n[0][0]<"u"}function io(n){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),pn(n)}function Ta(n,r){var s,f,m,v,A,B,Z,Q;if(!n||n.length===0)throw new Error("latlngs not passed");pn(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var dt=ut([0,0]),bt=st(n),kt=bt.getNorthWest().distanceTo(bt.getSouthWest())*bt.getNorthEast().distanceTo(bt.getNorthWest());kt<1700&&(dt=ys(n));var Ze=n.length,ze=[];for(s=0;s<Ze;s++){var ln=ut(n[s]);ze.push(r.project(ut([ln.lat-dt.lat,ln.lng-dt.lng])))}for(s=0,f=0;s<Ze-1;s++)f+=ze[s].distanceTo(ze[s+1])/2;if(f===0)Q=ze[0];else for(s=0,v=0;s<Ze-1;s++)if(A=ze[s],B=ze[s+1],m=A.distanceTo(B),v+=m,v>f){Z=(v-f)/m,Q=[B.x-Z*(B.x-A.x),B.y-Z*(B.y-A.y)];break}var Jt=r.unproject(lt(Q));return ut([Jt.lat+dt.lat,Jt.lng+dt.lng])}var Jc={__proto__:null,simplify:Vl,pointToSegmentDistance:Xl,closestPointOnSegment:Kc,clipSegment:Kl,_getEdgeIntersection:no,_getBitCode:$i,_sqClosestPointOnSegment:pr,isFlat:pn,_flat:io,polylineCenter:Ta},ao={project:function(n){return new at(n.lng,n.lat)},unproject:function(n){return new ft(n.y,n.x)},bounds:new M([-180,-90],[180,90])},ro={R:6378137,R_MINOR:6356752314245179e-9,bounds:new M([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(n){var r=Math.PI/180,s=this.R,f=n.lat*r,m=this.R_MINOR/s,v=Math.sqrt(1-m*m),A=v*Math.sin(f),B=Math.tan(Math.PI/4-f/2)/Math.pow((1-A)/(1+A),v/2);return f=-s*Math.log(Math.max(B,1e-10)),new at(n.lng*r*s,f)},unproject:function(n){for(var r=180/Math.PI,s=this.R,f=this.R_MINOR/s,m=Math.sqrt(1-f*f),v=Math.exp(-n.y/s),A=Math.PI/2-2*Math.atan(v),B=0,Z=.1,Q;B<15&&Math.abs(Z)>1e-7;B++)Q=m*Math.sin(A),Q=Math.pow((1-Q)/(1+Q),m/2),Z=Math.PI/2-2*Math.atan(v*Q)-A,A+=Z;return new ft(A*r,n.x*r/s)}},Ql={__proto__:null,LonLat:ao,Mercator:ro,SphericalMercator:cn},Fl=x({},Qt,{code:"EPSG:3395",projection:ro,transformation:(function(){var n=.5/(Math.PI*ro.R);return Me(n,.5,-n,.5)})()}),ws=x({},Qt,{code:"EPSG:4326",projection:ao,transformation:Me(1/180,1,-1/180,.5)}),Ea=x({},Ct,{projection:ao,transformation:Me(1,0,-1,0),scale:function(n){return Math.pow(2,n)},zoom:function(n){return Math.log(n)/Math.LN2},distance:function(n,r){var s=r.lng-n.lng,f=r.lat-n.lat;return Math.sqrt(s*s+f*f)},infinite:!0});Ct.Earth=Qt,Ct.EPSG3395=Fl,Ct.EPSG3857=ha,Ct.EPSG900913=Fn,Ct.EPSG4326=ws,Ct.Simple=Ea;var jn=it.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(n){return n.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(n){return n&&n.removeLayer(this),this},getPane:function(n){return this._map.getPane(n?this.options[n]||n:this.options.pane)},addInteractiveTarget:function(n){return this._map._targets[w(n)]=this,this},removeInteractiveTarget:function(n){return delete this._map._targets[w(n)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(n){var r=n.target;if(r.hasLayer(this)){if(this._map=r,this._zoomAnimated=r._zoomAnimated,this.getEvents){var s=this.getEvents();r.on(s,this),this.once("remove",function(){r.off(s,this)},this)}this.onAdd(r),this.fire("add"),r.fire("layeradd",{layer:this})}}});Vt.include({addLayer:function(n){if(!n._layerAdd)throw new Error("The provided object is not a Layer.");var r=w(n);return this._layers[r]?this:(this._layers[r]=n,n._mapToAdd=this,n.beforeAdd&&n.beforeAdd(this),this.whenReady(n._layerAdd,n),this)},removeLayer:function(n){var r=w(n);return this._layers[r]?(this._loaded&&n.onRemove(this),delete this._layers[r],this._loaded&&(this.fire("layerremove",{layer:n}),n.fire("remove")),n._map=n._mapToAdd=null,this):this},hasLayer:function(n){return w(n)in this._layers},eachLayer:function(n,r){for(var s in this._layers)n.call(r,this._layers[s]);return this},_addLayers:function(n){n=n?tt(n)?n:[n]:[];for(var r=0,s=n.length;r<s;r++)this.addLayer(n[r])},_addZoomLimit:function(n){(!isNaN(n.options.maxZoom)||!isNaN(n.options.minZoom))&&(this._zoomBoundLayers[w(n)]=n,this._updateZoomLevels())},_removeZoomLimit:function(n){var r=w(n);this._zoomBoundLayers[r]&&(delete this._zoomBoundLayers[r],this._updateZoomLevels())},_updateZoomLevels:function(){var n=1/0,r=-1/0,s=this._getZoomSpan();for(var f in this._zoomBoundLayers){var m=this._zoomBoundLayers[f].options;n=m.minZoom===void 0?n:Math.min(n,m.minZoom),r=m.maxZoom===void 0?r:Math.max(r,m.maxZoom)}this._layersMaxZoom=r===-1/0?void 0:r,this._layersMinZoom=n===1/0?void 0:n,s!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Aa=jn.extend({initialize:function(n,r){X(this,r),this._layers={};var s,f;if(n)for(s=0,f=n.length;s<f;s++)this.addLayer(n[s])},addLayer:function(n){var r=this.getLayerId(n);return this._layers[r]=n,this._map&&this._map.addLayer(n),this},removeLayer:function(n){var r=n in this._layers?n:this.getLayerId(n);return this._map&&this._layers[r]&&this._map.removeLayer(this._layers[r]),delete this._layers[r],this},hasLayer:function(n){var r=typeof n=="number"?n:this.getLayerId(n);return r in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(n){var r=Array.prototype.slice.call(arguments,1),s,f;for(s in this._layers)f=this._layers[s],f[n]&&f[n].apply(f,r);return this},onAdd:function(n){this.eachLayer(n.addLayer,n)},onRemove:function(n){this.eachLayer(n.removeLayer,n)},eachLayer:function(n,r){for(var s in this._layers)n.call(r,this._layers[s]);return this},getLayer:function(n){return this._layers[n]},getLayers:function(){var n=[];return this.eachLayer(n.push,n),n},setZIndex:function(n){return this.invoke("setZIndex",n)},getLayerId:function(n){return w(n)}}),Wc=function(n,r){return new Aa(n,r)},Pn=Aa.extend({addLayer:function(n){return this.hasLayer(n)?this:(n.addEventParent(this),Aa.prototype.addLayer.call(this,n),this.fire("layeradd",{layer:n}))},removeLayer:function(n){return this.hasLayer(n)?(n in this._layers&&(n=this._layers[n]),n.removeEventParent(this),Aa.prototype.removeLayer.call(this,n),this.fire("layerremove",{layer:n})):this},setStyle:function(n){return this.invoke("setStyle",n)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var n=new et;for(var r in this._layers){var s=this._layers[r];n.extend(s.getBounds?s.getBounds():s.getLatLng())}return n}}),Jl=function(n,r){return new Pn(n,r)},qn=he.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(n){X(this,n)},createIcon:function(n){return this._createIcon("icon",n)},createShadow:function(n){return this._createIcon("shadow",n)},_createIcon:function(n,r){var s=this._getIconUrl(n);if(!s){if(n==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var f=this._createImg(s,r&&r.tagName==="IMG"?r:null);return this._setIconStyles(f,n),(this.options.crossOrigin||this.options.crossOrigin==="")&&(f.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),f},_setIconStyles:function(n,r){var s=this.options,f=s[r+"Size"];typeof f=="number"&&(f=[f,f]);var m=lt(f),v=lt(r==="shadow"&&s.shadowAnchor||s.iconAnchor||m&&m.divideBy(2,!0));n.className="leaflet-marker-"+r+" "+(s.className||""),v&&(n.style.marginLeft=-v.x+"px",n.style.marginTop=-v.y+"px"),m&&(n.style.width=m.x+"px",n.style.height=m.y+"px")},_createImg:function(n,r){return r=r||document.createElement("img"),r.src=n,r},_getIconUrl:function(n){return _t.retina&&this.options[n+"RetinaUrl"]||this.options[n+"Url"]}});function mr(n){return new qn(n)}var gr=qn.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(n){return typeof gr.imagePath!="string"&&(gr.imagePath=this._detectIconPath()),(this.options.imagePath||gr.imagePath)+qn.prototype._getIconUrl.call(this,n)},_stripUrl:function(n){var r=function(s,f,m){var v=f.exec(s);return v&&v[m]};return n=r(n,/^url\((['"])?(.+)\1\)$/,2),n&&r(n,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var n=Zt("div","leaflet-default-icon-path",document.body),r=or(n,"background-image")||or(n,"backgroundImage");if(document.body.removeChild(n),r=this._stripUrl(r),r)return r;var s=document.querySelector('link[href$="leaflet.css"]');return s?s.href.substring(0,s.href.length-11-1):""}}),xr=Zn.extend({initialize:function(n){this._marker=n},addHooks:function(){var n=this._marker._icon;this._draggable||(this._draggable=new bi(n,n,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Lt(n,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&ve(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(n){var r=this._marker,s=r._map,f=this._marker.options.autoPanSpeed,m=this._marker.options.autoPanPadding,v=yi(r._icon),A=s.getPixelBounds(),B=s.getPixelOrigin(),Z=V(A.min._subtract(B).add(m),A.max._subtract(B).subtract(m));if(!Z.contains(v)){var Q=lt((Math.max(Z.max.x,v.x)-Z.max.x)/(A.max.x-Z.max.x)-(Math.min(Z.min.x,v.x)-Z.min.x)/(A.min.x-Z.min.x),(Math.max(Z.max.y,v.y)-Z.max.y)/(A.max.y-Z.max.y)-(Math.min(Z.min.y,v.y)-Z.min.y)/(A.min.y-Z.min.y)).multiplyBy(f);s.panBy(Q,{animate:!1}),this._draggable._newPos._add(Q),this._draggable._startPos._add(Q),de(r._icon,this._draggable._newPos),this._onDrag(n),this._panRequest=Tt(this._adjustPan.bind(this,n))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(n){this._marker.options.autoPan&&(Kt(this._panRequest),this._panRequest=Tt(this._adjustPan.bind(this,n)))},_onDrag:function(n){var r=this._marker,s=r._shadow,f=yi(r._icon),m=r._map.layerPointToLatLng(f);s&&de(s,f),r._latlng=m,n.latlng=m,n.oldLatLng=this._oldLatLng,r.fire("move",n).fire("drag",n)},_onDragEnd:function(n){Kt(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",n)}}),vr=jn.extend({options:{icon:new gr,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(n,r){X(this,r),this._latlng=ut(n)},onAdd:function(n){this._zoomAnimated=this._zoomAnimated&&n.options.markerZoomAnimation,this._zoomAnimated&&n.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(n){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&n.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(n){var r=this._latlng;return this._latlng=ut(n),this.update(),this.fire("move",{oldLatLng:r,latlng:this._latlng})},setZIndexOffset:function(n){return this.options.zIndexOffset=n,this.update()},getIcon:function(){return this.options.icon},setIcon:function(n){return this.options.icon=n,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var n=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(n)}return this},_initIcon:function(){var n=this.options,r="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),s=n.icon.createIcon(this._icon),f=!1;s!==this._icon&&(this._icon&&this._removeIcon(),f=!0,n.title&&(s.title=n.title),s.tagName==="IMG"&&(s.alt=n.alt||"")),Lt(s,r),n.keyboard&&(s.tabIndex="0",s.setAttribute("role","button")),this._icon=s,n.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&jt(s,"focus",this._panOnFocus,this);var m=n.icon.createShadow(this._shadow),v=!1;m!==this._shadow&&(this._removeShadow(),v=!0),m&&(Lt(m,r),m.alt=""),this._shadow=m,n.opacity<1&&this._updateOpacity(),f&&this.getPane().appendChild(this._icon),this._initInteraction(),m&&v&&this.getPane(n.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ie(this._icon,"focus",this._panOnFocus,this),se(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&se(this._shadow),this._shadow=null},_setPos:function(n){this._icon&&de(this._icon,n),this._shadow&&de(this._shadow,n),this._zIndex=n.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(n){this._icon&&(this._icon.style.zIndex=this._zIndex+n)},_animateZoom:function(n){var r=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center).round();this._setPos(r)},_initInteraction:function(){if(this.options.interactive&&(Lt(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),xr)){var n=this.options.draggable;this.dragging&&(n=this.dragging.enabled(),this.dragging.disable()),this.dragging=new xr(this),n&&this.dragging.enable()}},setOpacity:function(n){return this.options.opacity=n,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var n=this.options.opacity;this._icon&&me(this._icon,n),this._shadow&&me(this._shadow,n)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var n=this._map;if(n){var r=this.options.icon.options,s=r.iconSize?lt(r.iconSize):lt(0,0),f=r.iconAnchor?lt(r.iconAnchor):lt(0,0);n.panInside(this._latlng,{paddingTopLeft:f,paddingBottomRight:s.subtract(f)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function Wl(n,r){return new vr(n,r)}var Yn=jn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(n){this._renderer=n.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(n){return X(this,n),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&n&&Object.prototype.hasOwnProperty.call(n,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Ca=Yn.extend({options:{fill:!0,radius:10},initialize:function(n,r){X(this,r),this._latlng=ut(n),this._radius=this.options.radius},setLatLng:function(n){var r=this._latlng;return this._latlng=ut(n),this.redraw(),this.fire("move",{oldLatLng:r,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(n){return this.options.radius=this._radius=n,this.redraw()},getRadius:function(){return this._radius},setStyle:function(n){var r=n&&n.radius||this._radius;return Yn.prototype.setStyle.call(this,n),this.setRadius(r),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var n=this._radius,r=this._radiusY||n,s=this._clickTolerance(),f=[n+s,r+s];this._pxBounds=new M(this._point.subtract(f),this._point.add(f))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(n){return n.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function tu(n,r){return new Ca(n,r)}var oo=Ca.extend({initialize:function(n,r,s){if(typeof r=="number"&&(r=x({},s,{radius:r})),X(this,r),this._latlng=ut(n),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(n){return this._mRadius=n,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var n=[this._radius,this._radiusY||this._radius];return new et(this._map.layerPointToLatLng(this._point.subtract(n)),this._map.layerPointToLatLng(this._point.add(n)))},setStyle:Yn.prototype.setStyle,_project:function(){var n=this._latlng.lng,r=this._latlng.lat,s=this._map,f=s.options.crs;if(f.distance===Qt.distance){var m=Math.PI/180,v=this._mRadius/Qt.R/m,A=s.project([r+v,n]),B=s.project([r-v,n]),Z=A.add(B).divideBy(2),Q=s.unproject(Z).lat,dt=Math.acos((Math.cos(v*m)-Math.sin(r*m)*Math.sin(Q*m))/(Math.cos(r*m)*Math.cos(Q*m)))/m;(isNaN(dt)||dt===0)&&(dt=v/Math.cos(Math.PI/180*r)),this._point=Z.subtract(s.getPixelOrigin()),this._radius=isNaN(dt)?0:Z.x-s.project([Q,n-dt]).x,this._radiusY=Z.y-A.y}else{var bt=f.unproject(f.project(this._latlng).subtract([this._mRadius,0]));this._point=s.latLngToLayerPoint(this._latlng),this._radius=this._point.x-s.latLngToLayerPoint(bt).x}this._updateBounds()}});function eu(n,r,s){return new oo(n,r,s)}var ai=Yn.extend({options:{smoothFactor:1,noClip:!1},initialize:function(n,r){X(this,r),this._setLatLngs(n)},getLatLngs:function(){return this._latlngs},setLatLngs:function(n){return this._setLatLngs(n),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(n){for(var r=1/0,s=null,f=pr,m,v,A=0,B=this._parts.length;A<B;A++)for(var Z=this._parts[A],Q=1,dt=Z.length;Q<dt;Q++){m=Z[Q-1],v=Z[Q];var bt=f(n,m,v,!0);bt<r&&(r=bt,s=f(n,m,v))}return s&&(s.distance=Math.sqrt(r)),s},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Ta(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(n,r){return r=r||this._defaultShape(),n=ut(n),r.push(n),this._bounds.extend(n),this.redraw()},_setLatLngs:function(n){this._bounds=new et,this._latlngs=this._convertLatLngs(n)},_defaultShape:function(){return pn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(n){for(var r=[],s=pn(n),f=0,m=n.length;f<m;f++)s?(r[f]=ut(n[f]),this._bounds.extend(r[f])):r[f]=this._convertLatLngs(n[f]);return r},_project:function(){var n=new M;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,n),this._bounds.isValid()&&n.isValid()&&(this._rawPxBounds=n,this._updateBounds())},_updateBounds:function(){var n=this._clickTolerance(),r=new at(n,n);this._rawPxBounds&&(this._pxBounds=new M([this._rawPxBounds.min.subtract(r),this._rawPxBounds.max.add(r)]))},_projectLatlngs:function(n,r,s){var f=n[0]instanceof ft,m=n.length,v,A;if(f){for(A=[],v=0;v<m;v++)A[v]=this._map.latLngToLayerPoint(n[v]),s.extend(A[v]);r.push(A)}else for(v=0;v<m;v++)this._projectLatlngs(n[v],r,s)},_clipPoints:function(){var n=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}var r=this._parts,s,f,m,v,A,B,Z;for(s=0,m=0,v=this._rings.length;s<v;s++)for(Z=this._rings[s],f=0,A=Z.length;f<A-1;f++)B=Kl(Z[f],Z[f+1],n,f,!0),B&&(r[m]=r[m]||[],r[m].push(B[0]),(B[1]!==Z[f+1]||f===A-2)&&(r[m].push(B[1]),m++))}},_simplifyPoints:function(){for(var n=this._parts,r=this.options.smoothFactor,s=0,f=n.length;s<f;s++)n[s]=Vl(n[s],r)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(n,r){var s,f,m,v,A,B,Z=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(s=0,v=this._parts.length;s<v;s++)for(B=this._parts[s],f=0,A=B.length,m=A-1;f<A;m=f++)if(!(!r&&f===0)&&Xl(n,B[m],B[f])<=Z)return!0;return!1}});function td(n,r){return new ai(n,r)}ai._flat=io;var ja=ai.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Gl(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(n){var r=ai.prototype._convertLatLngs.call(this,n),s=r.length;return s>=2&&r[0]instanceof ft&&r[0].equals(r[s-1])&&r.pop(),r},_setLatLngs:function(n){ai.prototype._setLatLngs.call(this,n),pn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return pn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var n=this._renderer._bounds,r=this.options.weight,s=new at(r,r);if(n=new M(n.min.subtract(s),n.max.add(s)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}for(var f=0,m=this._rings.length,v;f<m;f++)v=Yl(this._rings[f],n,!0),v.length&&this._parts.push(v)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(n){var r=!1,s,f,m,v,A,B,Z,Q;if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(v=0,Z=this._parts.length;v<Z;v++)for(s=this._parts[v],A=0,Q=s.length,B=Q-1;A<Q;B=A++)f=s[A],m=s[B],f.y>n.y!=m.y>n.y&&n.x<(m.x-f.x)*(n.y-f.y)/(m.y-f.y)+f.x&&(r=!r);return r||ai.prototype._containsPoint.call(this,n,!0)}});function ed(n,r){return new ja(n,r)}var ri=Pn.extend({initialize:function(n,r){X(this,r),this._layers={},n&&this.addData(n)},addData:function(n){var r=tt(n)?n:n.features,s,f,m;if(r){for(s=0,f=r.length;s<f;s++)m=r[s],(m.geometries||m.geometry||m.features||m.coordinates)&&this.addData(m);return this}var v=this.options;if(v.filter&&!v.filter(n))return this;var A=Ye(n,v);return A?(A.feature=uo(n),A.defaultOptions=A.options,this.resetStyle(A),v.onEachFeature&&v.onEachFeature(n,A),this.addLayer(A)):this},resetStyle:function(n){return n===void 0?this.eachLayer(this.resetStyle,this):(n.options=x({},n.defaultOptions),this._setLayerStyle(n,this.options.style),this)},setStyle:function(n){return this.eachLayer(function(r){this._setLayerStyle(r,n)},this)},_setLayerStyle:function(n,r){n.setStyle&&(typeof r=="function"&&(r=r(n.feature)),n.setStyle(r))}});function Ye(n,r){var s=n.type==="Feature"?n.geometry:n,f=s?s.coordinates:null,m=[],v=r&&r.pointToLayer,A=r&&r.coordsToLatLng||so,B,Z,Q,dt;if(!f&&!s)return null;switch(s.type){case"Point":return B=A(f),Ma(v,n,B,r);case"MultiPoint":for(Q=0,dt=f.length;Q<dt;Q++)B=A(f[Q]),m.push(Ma(v,n,B,r));return new Pn(m);case"LineString":case"MultiLineString":return Z=yr(f,s.type==="LineString"?0:1,A),new ai(Z,r);case"Polygon":case"MultiPolygon":return Z=yr(f,s.type==="Polygon"?1:2,A),new ja(Z,r);case"GeometryCollection":for(Q=0,dt=s.geometries.length;Q<dt;Q++){var bt=Ye({geometry:s.geometries[Q],type:"Feature",properties:n.properties},r);bt&&m.push(bt)}return new Pn(m);case"FeatureCollection":for(Q=0,dt=s.features.length;Q<dt;Q++){var kt=Ye(s.features[Q],r);kt&&m.push(kt)}return new Pn(m);default:throw new Error("Invalid GeoJSON object.")}}function Ma(n,r,s,f){return n?n(r,s):new vr(s,f&&f.markersInheritOptions&&f)}function so(n){return new ft(n[1],n[0],n[2])}function yr(n,r,s){for(var f=[],m=0,v=n.length,A;m<v;m++)A=r?yr(n[m],r-1,s):(s||so)(n[m]),f.push(A);return f}function lo(n,r){return n=ut(n),n.alt!==void 0?[R(n.lng,r),R(n.lat,r),R(n.alt,r)]:[R(n.lng,r),R(n.lat,r)]}function _r(n,r,s,f){for(var m=[],v=0,A=n.length;v<A;v++)m.push(r?_r(n[v],pn(n[v])?0:r-1,s,f):lo(n[v],f));return!r&&s&&m.length>0&&m.push(m[0].slice()),m}function wi(n,r){return n.feature?x({},n.feature,{geometry:r}):uo(r)}function uo(n){return n.type==="Feature"||n.type==="FeatureCollection"?n:{type:"Feature",properties:{},geometry:n}}var Si={toGeoJSON:function(n){return wi(this,{type:"Point",coordinates:lo(this.getLatLng(),n)})}};vr.include(Si),oo.include(Si),Ca.include(Si),ai.include({toGeoJSON:function(n){var r=!pn(this._latlngs),s=_r(this._latlngs,r?1:0,!1,n);return wi(this,{type:(r?"Multi":"")+"LineString",coordinates:s})}}),ja.include({toGeoJSON:function(n){var r=!pn(this._latlngs),s=r&&!pn(this._latlngs[0]),f=_r(this._latlngs,s?2:r?1:0,!0,n);return r||(f=[f]),wi(this,{type:(s?"Multi":"")+"Polygon",coordinates:f})}}),Aa.include({toMultiPoint:function(n){var r=[];return this.eachLayer(function(s){r.push(s.toGeoJSON(n).geometry.coordinates)}),wi(this,{type:"MultiPoint",coordinates:r})},toGeoJSON:function(n){var r=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(r==="MultiPoint")return this.toMultiPoint(n);var s=r==="GeometryCollection",f=[];return this.eachLayer(function(m){if(m.toGeoJSON){var v=m.toGeoJSON(n);if(s)f.push(v.geometry);else{var A=uo(v);A.type==="FeatureCollection"?f.push.apply(f,A.features):f.push(A)}}}),s?wi(this,{geometries:f,type:"GeometryCollection"}):{type:"FeatureCollection",features:f}}});function co(n,r){return new ri(n,r)}var br=co,La=jn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(n,r,s){this._url=n,this._bounds=st(r),X(this,s)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Lt(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){se(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(n){return this.options.opacity=n,this._image&&this._updateOpacity(),this},setStyle:function(n){return n.opacity&&this.setOpacity(n.opacity),this},bringToFront:function(){return this._map&&He(this._image),this},bringToBack:function(){return this._map&&Gi(this._image),this},setUrl:function(n){return this._url=n,this._image&&(this._image.src=n),this},setBounds:function(n){return this._bounds=st(n),this._map&&this._reset(),this},getEvents:function(){var n={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var n=this._url.tagName==="IMG",r=this._image=n?this._url:Zt("img");if(Lt(r,"leaflet-image-layer"),this._zoomAnimated&&Lt(r,"leaflet-zoom-animated"),this.options.className&&Lt(r,this.options.className),r.onselectstart=j,r.onmousemove=j,r.onload=b(this.fire,this,"load"),r.onerror=b(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(r.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),n){this._url=r.src;return}r.src=this._url,r.alt=this.options.alt},_animateZoom:function(n){var r=this._map.getZoomScale(n.zoom),s=this._map._latLngBoundsToNewLayerBounds(this._bounds,n.zoom,n.center).min;ei(this._image,s,r)},_reset:function(){var n=this._image,r=new M(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),s=r.getSize();de(n,r.min),n.style.width=s.x+"px",n.style.height=s.y+"px"},_updateOpacity:function(){me(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var n=this.options.errorOverlayUrl;n&&this._url!==n&&(this._url=n,this._image.src=n)},getCenter:function(){return this._bounds.getCenter()}}),nu=function(n,r,s){return new La(n,r,s)},zi=La.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var n=this._url.tagName==="VIDEO",r=this._image=n?this._url:Zt("video");if(Lt(r,"leaflet-image-layer"),this._zoomAnimated&&Lt(r,"leaflet-zoom-animated"),this.options.className&&Lt(r,this.options.className),r.onselectstart=j,r.onmousemove=j,r.onloadeddata=b(this.fire,this,"load"),n){for(var s=r.getElementsByTagName("source"),f=[],m=0;m<s.length;m++)f.push(s[m].src);this._url=s.length>0?f:[r.src];return}tt(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(r.style,"objectFit")&&(r.style.objectFit="fill"),r.autoplay=!!this.options.autoplay,r.loop=!!this.options.loop,r.muted=!!this.options.muted,r.playsInline=!!this.options.playsInline;for(var v=0;v<this._url.length;v++){var A=Zt("source");A.src=this._url[v],r.appendChild(A)}}});function Oa(n,r,s){return new zi(n,r,s)}var fo=La.extend({_initImage:function(){var n=this._image=this._url;Lt(n,"leaflet-image-layer"),this._zoomAnimated&&Lt(n,"leaflet-zoom-animated"),this.options.className&&Lt(n,this.options.className),n.onselectstart=j,n.onmousemove=j}});function iu(n,r,s){return new fo(n,r,s)}var Ge=jn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(n,r){n&&(n instanceof ft||tt(n))?(this._latlng=ut(n),X(this,r)):(X(this,n),this._source=r),this.options.content&&(this._content=this.options.content)},openOn:function(n){return n=arguments.length?n:this._source._map,n.hasLayer(this)||n.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(n){return this._map?this.close():(arguments.length?this._source=n:n=this._source,this._prepareOpen(),this.openOn(n._map)),this},onAdd:function(n){this._zoomAnimated=n._zoomAnimated,this._container||this._initLayout(),n._fadeAnimated&&me(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),n._fadeAnimated&&me(this._container,1),this.bringToFront(),this.options.interactive&&(Lt(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(n){n._fadeAnimated?(me(this._container,0),this._removeTimeout=setTimeout(b(se,void 0,this._container),200)):se(this._container),this.options.interactive&&(ve(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(n){return this._latlng=ut(n),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(n){return this._content=n,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var n={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&He(this._container),this},bringToBack:function(){return this._map&&Gi(this._container),this},_prepareOpen:function(n){var r=this._source;if(!r._map)return!1;if(r instanceof Pn){r=null;var s=this._source._layers;for(var f in s)if(s[f]._map){r=s[f];break}if(!r)return!1;this._source=r}if(!n)if(r.getCenter)n=r.getCenter();else if(r.getLatLng)n=r.getLatLng();else if(r.getBounds)n=r.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(n),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var n=this._contentNode,r=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof r=="string")n.innerHTML=r;else{for(;n.hasChildNodes();)n.removeChild(n.firstChild);n.appendChild(r)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var n=this._map.latLngToLayerPoint(this._latlng),r=lt(this.options.offset),s=this._getAnchor();this._zoomAnimated?de(this._container,n.add(s)):r=r.add(n).add(s);var f=this._containerBottom=-r.y,m=this._containerLeft=-Math.round(this._containerWidth/2)+r.x;this._container.style.bottom=f+"px",this._container.style.left=m+"px"}},_getAnchor:function(){return[0,0]}});Vt.include({_initOverlay:function(n,r,s,f){var m=r;return m instanceof n||(m=new n(f).setContent(r)),s&&m.setLatLng(s),m}}),jn.include({_initOverlay:function(n,r,s,f){var m=s;return m instanceof n?(X(m,f),m._source=this):(m=r&&!f?r:new n(f,this),m.setContent(s)),m}});var wr=Ge.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(n){return n=arguments.length?n:this._source._map,!n.hasLayer(this)&&n._popup&&n._popup.options.autoClose&&n.removeLayer(n._popup),n._popup=this,Ge.prototype.openOn.call(this,n)},onAdd:function(n){Ge.prototype.onAdd.call(this,n),n.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Yn||this._source.on("preclick",Cn))},onRemove:function(n){Ge.prototype.onRemove.call(this,n),n.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Yn||this._source.off("preclick",Cn))},getEvents:function(){var n=Ge.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(n.preclick=this.close),this.options.keepInView&&(n.moveend=this._adjustPan),n},_initLayout:function(){var n="leaflet-popup",r=this._container=Zt("div",n+" "+(this.options.className||"")+" leaflet-zoom-animated"),s=this._wrapper=Zt("div",n+"-content-wrapper",r);if(this._contentNode=Zt("div",n+"-content",s),Xi(r),Hn(this._contentNode),jt(r,"contextmenu",Cn),this._tipContainer=Zt("div",n+"-tip-container",r),this._tip=Zt("div",n+"-tip",this._tipContainer),this.options.closeButton){var f=this._closeButton=Zt("a",n+"-close-button",r);f.setAttribute("role","button"),f.setAttribute("aria-label","Close popup"),f.href="#close",f.innerHTML='<span aria-hidden="true">&#215;</span>',jt(f,"click",function(m){Se(m),this.close()},this)}},_updateLayout:function(){var n=this._contentNode,r=n.style;r.width="",r.whiteSpace="nowrap";var s=n.offsetWidth;s=Math.min(s,this.options.maxWidth),s=Math.max(s,this.options.minWidth),r.width=s+1+"px",r.whiteSpace="",r.height="";var f=n.offsetHeight,m=this.options.maxHeight,v="leaflet-popup-scrolled";m&&f>m?(r.height=m+"px",Lt(n,v)):ve(n,v),this._containerWidth=this._container.offsetWidth},_animateZoom:function(n){var r=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center),s=this._getAnchor();de(this._container,r.add(s))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var n=this._map,r=parseInt(or(this._container,"marginBottom"),10)||0,s=this._container.offsetHeight+r,f=this._containerWidth,m=new at(this._containerLeft,-s-this._containerBottom);m._add(yi(this._container));var v=n.layerPointToContainerPoint(m),A=lt(this.options.autoPanPadding),B=lt(this.options.autoPanPaddingTopLeft||A),Z=lt(this.options.autoPanPaddingBottomRight||A),Q=n.getSize(),dt=0,bt=0;v.x+f+Z.x>Q.x&&(dt=v.x+f-Q.x+Z.x),v.x-dt-B.x<0&&(dt=v.x-B.x),v.y+s+Z.y>Q.y&&(bt=v.y+s-Q.y+Z.y),v.y-bt-B.y<0&&(bt=v.y-B.y),(dt||bt)&&(this.options.keepInView&&(this._autopanning=!0),n.fire("autopanstart").panBy([dt,bt]))}},_getAnchor:function(){return lt(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),au=function(n,r){return new wr(n,r)};Vt.mergeOptions({closePopupOnClick:!0}),Vt.include({openPopup:function(n,r,s){return this._initOverlay(wr,n,r,s).openOn(this),this},closePopup:function(n){return n=arguments.length?n:this._popup,n&&n.close(),this}}),jn.include({bindPopup:function(n,r){return this._popup=this._initOverlay(wr,this._popup,n,r),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(n){return this._popup&&(this instanceof Pn||(this._popup._source=this),this._popup._prepareOpen(n||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(n){return this._popup&&this._popup.setContent(n),this},getPopup:function(){return this._popup},_openPopup:function(n){if(!(!this._popup||!this._map)){_i(n);var r=n.layer||n.target;if(this._popup._source===r&&!(r instanceof Yn)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(n.latlng);return}this._popup._source=r,this.openPopup(n.latlng)}},_movePopup:function(n){this._popup.setLatLng(n.latlng)},_onKeyPress:function(n){n.originalEvent.keyCode===13&&this._openPopup(n)}});var Sr=Ge.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(n){Ge.prototype.onAdd.call(this,n),this.setOpacity(this.options.opacity),n.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(n){Ge.prototype.onRemove.call(this,n),n.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var n=Ge.prototype.getEvents.call(this);return this.options.permanent||(n.preclick=this.close),n},_initLayout:function(){var n="leaflet-tooltip",r=n+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=Zt("div",r),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+w(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(n){var r,s,f=this._map,m=this._container,v=f.latLngToContainerPoint(f.getCenter()),A=f.layerPointToContainerPoint(n),B=this.options.direction,Z=m.offsetWidth,Q=m.offsetHeight,dt=lt(this.options.offset),bt=this._getAnchor();B==="top"?(r=Z/2,s=Q):B==="bottom"?(r=Z/2,s=0):B==="center"?(r=Z/2,s=Q/2):B==="right"?(r=0,s=Q/2):B==="left"?(r=Z,s=Q/2):A.x<v.x?(B="right",r=0,s=Q/2):(B="left",r=Z+(dt.x+bt.x)*2,s=Q/2),n=n.subtract(lt(r,s,!0)).add(dt).add(bt),ve(m,"leaflet-tooltip-right"),ve(m,"leaflet-tooltip-left"),ve(m,"leaflet-tooltip-top"),ve(m,"leaflet-tooltip-bottom"),Lt(m,"leaflet-tooltip-"+B),de(m,n)},_updatePosition:function(){var n=this._map.latLngToLayerPoint(this._latlng);this._setPosition(n)},setOpacity:function(n){this.options.opacity=n,this._container&&me(this._container,n)},_animateZoom:function(n){var r=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center);this._setPosition(r)},_getAnchor:function(){return lt(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),nd=function(n,r){return new Sr(n,r)};Vt.include({openTooltip:function(n,r,s){return this._initOverlay(Sr,n,r,s).openOn(this),this},closeTooltip:function(n){return n.close(),this}}),jn.include({bindTooltip:function(n,r){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Sr,this._tooltip,n,r),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(n){if(!(!n&&this._tooltipHandlersAdded)){var r=n?"off":"on",s={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?s.add=this._openTooltip:(s.mouseover=this._openTooltip,s.mouseout=this.closeTooltip,s.click=this._openTooltip,this._map?this._addFocusListeners():s.add=this._addFocusListeners),this._tooltip.options.sticky&&(s.mousemove=this._moveTooltip),this[r](s),this._tooltipHandlersAdded=!n}},openTooltip:function(n){return this._tooltip&&(this instanceof Pn||(this._tooltip._source=this),this._tooltip._prepareOpen(n)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(n){return this._tooltip&&this._tooltip.setContent(n),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(n){var r=typeof n.getElement=="function"&&n.getElement();r&&(jt(r,"focus",function(){this._tooltip._source=n,this.openTooltip()},this),jt(r,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(n){var r=typeof n.getElement=="function"&&n.getElement();r&&r.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(n){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var r=this;this._map.once("moveend",function(){r._openOnceFlag=!1,r._openTooltip(n)});return}this._tooltip._source=n.layer||n.target,this.openTooltip(this._tooltip.options.sticky?n.latlng:void 0)}},_moveTooltip:function(n){var r=n.latlng,s,f;this._tooltip.options.sticky&&n.originalEvent&&(s=this._map.mouseEventToContainerPoint(n.originalEvent),f=this._map.containerPointToLayerPoint(s),r=this._map.layerPointToLatLng(f)),this._tooltip.setLatLng(r)}});var ru=qn.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(n){var r=n&&n.tagName==="DIV"?n:document.createElement("div"),s=this.options;if(s.html instanceof Element?(fn(r),r.appendChild(s.html)):r.innerHTML=s.html!==!1?s.html:"",s.bgPos){var f=lt(s.bgPos);r.style.backgroundPosition=-f.x+"px "+-f.y+"px"}return this._setIconStyles(r,"icon"),r},createShadow:function(){return null}});function id(n){return new ru(n)}qn.Default=gr;var Ra=jn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:_t.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(n){X(this,n)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(n){n._addZoomLimit(this)},onRemove:function(n){this._removeAllTiles(),se(this._container),n._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(He(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Gi(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(n){return this.options.opacity=n,this._updateOpacity(),this},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var n=this._clampZoom(this._map.getZoom());n!==this._tileZoom&&(this._tileZoom=n,this._updateLevels()),this._update()}return this},getEvents:function(){var n={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=S(this._onMoveEnd,this.options.updateInterval,this)),n.move=this._onMove),this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},createTile:function(){return document.createElement("div")},getTileSize:function(){var n=this.options.tileSize;return n instanceof at?n:new at(n,n)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(n){for(var r=this.getPane().children,s=-n(-1/0,1/0),f=0,m=r.length,v;f<m;f++)v=r[f].style.zIndex,r[f]!==this._container&&v&&(s=n(s,+v));isFinite(s)&&(this.options.zIndex=s+n(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!_t.ielt9){me(this._container,this.options.opacity);var n=+new Date,r=!1,s=!1;for(var f in this._tiles){var m=this._tiles[f];if(!(!m.current||!m.loaded)){var v=Math.min(1,(n-m.loaded)/200);me(m.el,v),v<1?r=!0:(m.active?s=!0:this._onOpaqueTile(m),m.active=!0)}}s&&!this._noPrune&&this._pruneTiles(),r&&(Kt(this._fadeFrame),this._fadeFrame=Tt(this._updateOpacity,this))}},_onOpaqueTile:j,_initContainer:function(){this._container||(this._container=Zt("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var n=this._tileZoom,r=this.options.maxZoom;if(n!==void 0){for(var s in this._levels)s=Number(s),this._levels[s].el.children.length||s===n?(this._levels[s].el.style.zIndex=r-Math.abs(n-s),this._onUpdateLevel(s)):(se(this._levels[s].el),this._removeTilesAtZoom(s),this._onRemoveLevel(s),delete this._levels[s]);var f=this._levels[n],m=this._map;return f||(f=this._levels[n]={},f.el=Zt("div","leaflet-tile-container leaflet-zoom-animated",this._container),f.el.style.zIndex=r,f.origin=m.project(m.unproject(m.getPixelOrigin()),n).round(),f.zoom=n,this._setZoomTransform(f,m.getCenter(),m.getZoom()),j(f.el.offsetWidth),this._onCreateLevel(f)),this._level=f,f}},_onUpdateLevel:j,_onRemoveLevel:j,_onCreateLevel:j,_pruneTiles:function(){if(this._map){var n,r,s=this._map.getZoom();if(s>this.options.maxZoom||s<this.options.minZoom){this._removeAllTiles();return}for(n in this._tiles)r=this._tiles[n],r.retain=r.current;for(n in this._tiles)if(r=this._tiles[n],r.current&&!r.active){var f=r.coords;this._retainParent(f.x,f.y,f.z,f.z-5)||this._retainChildren(f.x,f.y,f.z,f.z+2)}for(n in this._tiles)this._tiles[n].retain||this._removeTile(n)}},_removeTilesAtZoom:function(n){for(var r in this._tiles)this._tiles[r].coords.z===n&&this._removeTile(r)},_removeAllTiles:function(){for(var n in this._tiles)this._removeTile(n)},_invalidateAll:function(){for(var n in this._levels)se(this._levels[n].el),this._onRemoveLevel(Number(n)),delete this._levels[n];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(n,r,s,f){var m=Math.floor(n/2),v=Math.floor(r/2),A=s-1,B=new at(+m,+v);B.z=+A;var Z=this._tileCoordsToKey(B),Q=this._tiles[Z];return Q&&Q.active?(Q.retain=!0,!0):(Q&&Q.loaded&&(Q.retain=!0),A>f?this._retainParent(m,v,A,f):!1)},_retainChildren:function(n,r,s,f){for(var m=2*n;m<2*n+2;m++)for(var v=2*r;v<2*r+2;v++){var A=new at(m,v);A.z=s+1;var B=this._tileCoordsToKey(A),Z=this._tiles[B];if(Z&&Z.active){Z.retain=!0;continue}else Z&&Z.loaded&&(Z.retain=!0);s+1<f&&this._retainChildren(m,v,s+1,f)}},_resetView:function(n){var r=n&&(n.pinch||n.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),r,r)},_animateZoom:function(n){this._setView(n.center,n.zoom,!0,n.noUpdate)},_clampZoom:function(n){var r=this.options;return r.minNativeZoom!==void 0&&n<r.minNativeZoom?r.minNativeZoom:r.maxNativeZoom!==void 0&&r.maxNativeZoom<n?r.maxNativeZoom:n},_setView:function(n,r,s,f){var m=Math.round(r);this.options.maxZoom!==void 0&&m>this.options.maxZoom||this.options.minZoom!==void 0&&m<this.options.minZoom?m=void 0:m=this._clampZoom(m);var v=this.options.updateWhenZooming&&m!==this._tileZoom;(!f||v)&&(this._tileZoom=m,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),m!==void 0&&this._update(n),s||this._pruneTiles(),this._noPrune=!!s),this._setZoomTransforms(n,r)},_setZoomTransforms:function(n,r){for(var s in this._levels)this._setZoomTransform(this._levels[s],n,r)},_setZoomTransform:function(n,r,s){var f=this._map.getZoomScale(s,n.zoom),m=n.origin.multiplyBy(f).subtract(this._map._getNewPixelOrigin(r,s)).round();_t.any3d?ei(n.el,m,f):de(n.el,m)},_resetGrid:function(){var n=this._map,r=n.options.crs,s=this._tileSize=this.getTileSize(),f=this._tileZoom,m=this._map.getPixelWorldBounds(this._tileZoom);m&&(this._globalTileRange=this._pxBoundsToTileRange(m)),this._wrapX=r.wrapLng&&!this.options.noWrap&&[Math.floor(n.project([0,r.wrapLng[0]],f).x/s.x),Math.ceil(n.project([0,r.wrapLng[1]],f).x/s.y)],this._wrapY=r.wrapLat&&!this.options.noWrap&&[Math.floor(n.project([r.wrapLat[0],0],f).y/s.x),Math.ceil(n.project([r.wrapLat[1],0],f).y/s.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(n){var r=this._map,s=r._animatingZoom?Math.max(r._animateToZoom,r.getZoom()):r.getZoom(),f=r.getZoomScale(s,this._tileZoom),m=r.project(n,this._tileZoom).floor(),v=r.getSize().divideBy(f*2);return new M(m.subtract(v),m.add(v))},_update:function(n){var r=this._map;if(r){var s=this._clampZoom(r.getZoom());if(n===void 0&&(n=r.getCenter()),this._tileZoom!==void 0){var f=this._getTiledPixelBounds(n),m=this._pxBoundsToTileRange(f),v=m.getCenter(),A=[],B=this.options.keepBuffer,Z=new M(m.getBottomLeft().subtract([B,-B]),m.getTopRight().add([B,-B]));if(!(isFinite(m.min.x)&&isFinite(m.min.y)&&isFinite(m.max.x)&&isFinite(m.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var Q in this._tiles){var dt=this._tiles[Q].coords;(dt.z!==this._tileZoom||!Z.contains(new at(dt.x,dt.y)))&&(this._tiles[Q].current=!1)}if(Math.abs(s-this._tileZoom)>1){this._setView(n,s);return}for(var bt=m.min.y;bt<=m.max.y;bt++)for(var kt=m.min.x;kt<=m.max.x;kt++){var Ze=new at(kt,bt);if(Ze.z=this._tileZoom,!!this._isValidTile(Ze)){var ze=this._tiles[this._tileCoordsToKey(Ze)];ze?ze.current=!0:A.push(Ze)}}if(A.sort(function(Jt,Wt){return Jt.distanceTo(v)-Wt.distanceTo(v)}),A.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var ln=document.createDocumentFragment();for(kt=0;kt<A.length;kt++)this._addTile(A[kt],ln);this._level.el.appendChild(ln)}}}},_isValidTile:function(n){var r=this._map.options.crs;if(!r.infinite){var s=this._globalTileRange;if(!r.wrapLng&&(n.x<s.min.x||n.x>s.max.x)||!r.wrapLat&&(n.y<s.min.y||n.y>s.max.y))return!1}if(!this.options.bounds)return!0;var f=this._tileCoordsToBounds(n);return st(this.options.bounds).overlaps(f)},_keyToBounds:function(n){return this._tileCoordsToBounds(this._keyToTileCoords(n))},_tileCoordsToNwSe:function(n){var r=this._map,s=this.getTileSize(),f=n.scaleBy(s),m=f.add(s),v=r.unproject(f,n.z),A=r.unproject(m,n.z);return[v,A]},_tileCoordsToBounds:function(n){var r=this._tileCoordsToNwSe(n),s=new et(r[0],r[1]);return this.options.noWrap||(s=this._map.wrapLatLngBounds(s)),s},_tileCoordsToKey:function(n){return n.x+":"+n.y+":"+n.z},_keyToTileCoords:function(n){var r=n.split(":"),s=new at(+r[0],+r[1]);return s.z=+r[2],s},_removeTile:function(n){var r=this._tiles[n];r&&(se(r.el),delete this._tiles[n],this.fire("tileunload",{tile:r.el,coords:this._keyToTileCoords(n)}))},_initTile:function(n){Lt(n,"leaflet-tile");var r=this.getTileSize();n.style.width=r.x+"px",n.style.height=r.y+"px",n.onselectstart=j,n.onmousemove=j,_t.ielt9&&this.options.opacity<1&&me(n,this.options.opacity)},_addTile:function(n,r){var s=this._getTilePos(n),f=this._tileCoordsToKey(n),m=this.createTile(this._wrapCoords(n),b(this._tileReady,this,n));this._initTile(m),this.createTile.length<2&&Tt(b(this._tileReady,this,n,null,m)),de(m,s),this._tiles[f]={el:m,coords:n,current:!0},r.appendChild(m),this.fire("tileloadstart",{tile:m,coords:n})},_tileReady:function(n,r,s){r&&this.fire("tileerror",{error:r,tile:s,coords:n});var f=this._tileCoordsToKey(n);s=this._tiles[f],s&&(s.loaded=+new Date,this._map._fadeAnimated?(me(s.el,0),Kt(this._fadeFrame),this._fadeFrame=Tt(this._updateOpacity,this)):(s.active=!0,this._pruneTiles()),r||(Lt(s.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:s.el,coords:n})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),_t.ielt9||!this._map._fadeAnimated?Tt(this._pruneTiles,this):setTimeout(b(this._pruneTiles,this),250)))},_getTilePos:function(n){return n.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(n){var r=new at(this._wrapX?E(n.x,this._wrapX):n.x,this._wrapY?E(n.y,this._wrapY):n.y);return r.z=n.z,r},_pxBoundsToTileRange:function(n){var r=this.getTileSize();return new M(n.min.unscaleBy(r).floor(),n.max.unscaleBy(r).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var n in this._tiles)if(!this._tiles[n].loaded)return!1;return!0}});function ou(n){return new Ra(n)}var Ti=Ra.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(n,r){this._url=n,r=X(this,r),r.detectRetina&&_t.retina&&r.maxZoom>0?(r.tileSize=Math.floor(r.tileSize/2),r.zoomReverse?(r.zoomOffset--,r.minZoom=Math.min(r.maxZoom,r.minZoom+1)):(r.zoomOffset++,r.maxZoom=Math.max(r.minZoom,r.maxZoom-1)),r.minZoom=Math.max(0,r.minZoom)):r.zoomReverse?r.minZoom=Math.min(r.maxZoom,r.minZoom):r.maxZoom=Math.max(r.minZoom,r.maxZoom),typeof r.subdomains=="string"&&(r.subdomains=r.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(n,r){return this._url===n&&r===void 0&&(r=!0),this._url=n,r||this.redraw(),this},createTile:function(n,r){var s=document.createElement("img");return jt(s,"load",b(this._tileOnLoad,this,r,s)),jt(s,"error",b(this._tileOnError,this,r,s)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(s.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(s.referrerPolicy=this.options.referrerPolicy),s.alt="",s.src=this.getTileUrl(n),s},getTileUrl:function(n){var r={r:_t.retina?"@2x":"",s:this._getSubdomain(n),x:n.x,y:n.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var s=this._globalTileRange.max.y-n.y;this.options.tms&&(r.y=s),r["-y"]=s}return rt(this._url,x(r,this.options))},_tileOnLoad:function(n,r){_t.ielt9?setTimeout(b(n,this,null,r),0):n(null,r)},_tileOnError:function(n,r,s){var f=this.options.errorTileUrl;f&&r.getAttribute("src")!==f&&(r.src=f),n(s,r)},_onTileRemove:function(n){n.tile.onload=null},_getZoomForUrl:function(){var n=this._tileZoom,r=this.options.maxZoom,s=this.options.zoomReverse,f=this.options.zoomOffset;return s&&(n=r-n),n+f},_getSubdomain:function(n){var r=Math.abs(n.x+n.y)%this.options.subdomains.length;return this.options.subdomains[r]},_abortLoading:function(){var n,r;for(n in this._tiles)if(this._tiles[n].coords.z!==this._tileZoom&&(r=this._tiles[n].el,r.onload=j,r.onerror=j,!r.complete)){r.src=wt;var s=this._tiles[n].coords;se(r),delete this._tiles[n],this.fire("tileabort",{tile:r,coords:s})}},_removeTile:function(n){var r=this._tiles[n];if(r)return r.el.setAttribute("src",wt),Ra.prototype._removeTile.call(this,n)},_tileReady:function(n,r,s){if(!(!this._map||s&&s.getAttribute("src")===wt))return Ra.prototype._tileReady.call(this,n,r,s)}});function mn(n,r){return new Ti(n,r)}var zr=Ti.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(n,r){this._url=n;var s=x({},this.defaultWmsParams);for(var f in r)f in this.options||(s[f]=r[f]);r=X(this,r);var m=r.detectRetina&&_t.retina?2:1,v=this.getTileSize();s.width=v.x*m,s.height=v.y*m,this.wmsParams=s},onAdd:function(n){this._crs=this.options.crs||n.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var r=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[r]=this._crs.code,Ti.prototype.onAdd.call(this,n)},getTileUrl:function(n){var r=this._tileCoordsToNwSe(n),s=this._crs,f=V(s.project(r[0]),s.project(r[1])),m=f.min,v=f.max,A=(this._wmsVersion>=1.3&&this._crs===ws?[m.y,m.x,v.y,v.x]:[m.x,m.y,v.x,v.y]).join(","),B=Ti.prototype.getTileUrl.call(this,n);return B+W(this.wmsParams,B,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+A},setParams:function(n,r){return x(this.wmsParams,n),r||this.redraw(),this}});function gn(n,r){return new zr(n,r)}Ti.WMS=zr,mn.wms=gn;var nn=jn.extend({options:{padding:.1},initialize:function(n){X(this,n),w(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Lt(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var n={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(n.zoomanim=this._onAnimZoom),n},_onAnimZoom:function(n){this._updateTransform(n.center,n.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(n,r){var s=this._map.getZoomScale(r,this._zoom),f=this._map.getSize().multiplyBy(.5+this.options.padding),m=this._map.project(this._center,r),v=f.multiplyBy(-s).add(m).subtract(this._map._getNewPixelOrigin(n,r));_t.any3d?ei(this._container,v,s):de(this._container,v)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var n in this._layers)this._layers[n]._reset()},_onZoomEnd:function(){for(var n in this._layers)this._layers[n]._project()},_updatePaths:function(){for(var n in this._layers)this._layers[n]._update()},_update:function(){var n=this.options.padding,r=this._map.getSize(),s=this._map.containerPointToLayerPoint(r.multiplyBy(-n)).round();this._bounds=new M(s,s.add(r.multiplyBy(1+n*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),ho=nn.extend({options:{tolerance:0},getEvents:function(){var n=nn.prototype.getEvents.call(this);return n.viewprereset=this._onViewPreReset,n},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){nn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var n=this._container=document.createElement("canvas");jt(n,"mousemove",this._onMouseMove,this),jt(n,"click dblclick mousedown mouseup contextmenu",this._onClick,this),jt(n,"mouseout",this._handleMouseOut,this),n._leaflet_disable_events=!0,this._ctx=n.getContext("2d")},_destroyContainer:function(){Kt(this._redrawRequest),delete this._ctx,se(this._container),ie(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var n;this._redrawBounds=null;for(var r in this._layers)n=this._layers[r],n._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){nn.prototype._update.call(this);var n=this._bounds,r=this._container,s=n.getSize(),f=_t.retina?2:1;de(r,n.min),r.width=f*s.x,r.height=f*s.y,r.style.width=s.x+"px",r.style.height=s.y+"px",_t.retina&&this._ctx.scale(2,2),this._ctx.translate(-n.min.x,-n.min.y),this.fire("update")}},_reset:function(){nn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(n){this._updateDashArray(n),this._layers[w(n)]=n;var r=n._order={layer:n,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=r),this._drawLast=r,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(n){this._requestRedraw(n)},_removePath:function(n){var r=n._order,s=r.next,f=r.prev;s?s.prev=f:this._drawLast=f,f?f.next=s:this._drawFirst=s,delete n._order,delete this._layers[w(n)],this._requestRedraw(n)},_updatePath:function(n){this._extendRedrawBounds(n),n._project(),n._update(),this._requestRedraw(n)},_updateStyle:function(n){this._updateDashArray(n),this._requestRedraw(n)},_updateDashArray:function(n){if(typeof n.options.dashArray=="string"){var r=n.options.dashArray.split(/[, ]+/),s=[],f,m;for(m=0;m<r.length;m++){if(f=Number(r[m]),isNaN(f))return;s.push(f)}n.options._dashArray=s}else n.options._dashArray=n.options.dashArray},_requestRedraw:function(n){this._map&&(this._extendRedrawBounds(n),this._redrawRequest=this._redrawRequest||Tt(this._redraw,this))},_extendRedrawBounds:function(n){if(n._pxBounds){var r=(n.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new M,this._redrawBounds.extend(n._pxBounds.min.subtract([r,r])),this._redrawBounds.extend(n._pxBounds.max.add([r,r]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var n=this._redrawBounds;if(n){var r=n.getSize();this._ctx.clearRect(n.min.x,n.min.y,r.x,r.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var n,r=this._redrawBounds;if(this._ctx.save(),r){var s=r.getSize();this._ctx.beginPath(),this._ctx.rect(r.min.x,r.min.y,s.x,s.y),this._ctx.clip()}this._drawing=!0;for(var f=this._drawFirst;f;f=f.next)n=f.layer,(!r||n._pxBounds&&n._pxBounds.intersects(r))&&n._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(n,r){if(this._drawing){var s,f,m,v,A=n._parts,B=A.length,Z=this._ctx;if(B){for(Z.beginPath(),s=0;s<B;s++){for(f=0,m=A[s].length;f<m;f++)v=A[s][f],Z[f?"lineTo":"moveTo"](v.x,v.y);r&&Z.closePath()}this._fillStroke(Z,n)}}},_updateCircle:function(n){if(!(!this._drawing||n._empty())){var r=n._point,s=this._ctx,f=Math.max(Math.round(n._radius),1),m=(Math.max(Math.round(n._radiusY),1)||f)/f;m!==1&&(s.save(),s.scale(1,m)),s.beginPath(),s.arc(r.x,r.y/m,f,0,Math.PI*2,!1),m!==1&&s.restore(),this._fillStroke(s,n)}},_fillStroke:function(n,r){var s=r.options;s.fill&&(n.globalAlpha=s.fillOpacity,n.fillStyle=s.fillColor||s.color,n.fill(s.fillRule||"evenodd")),s.stroke&&s.weight!==0&&(n.setLineDash&&n.setLineDash(r.options&&r.options._dashArray||[]),n.globalAlpha=s.opacity,n.lineWidth=s.weight,n.strokeStyle=s.color,n.lineCap=s.lineCap,n.lineJoin=s.lineJoin,n.stroke())},_onClick:function(n){for(var r=this._map.mouseEventToLayerPoint(n),s,f,m=this._drawFirst;m;m=m.next)s=m.layer,s.options.interactive&&s._containsPoint(r)&&(!(n.type==="click"||n.type==="preclick")||!this._map._draggableMoved(s))&&(f=s);this._fireEvent(f?[f]:!1,n)},_onMouseMove:function(n){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var r=this._map.mouseEventToLayerPoint(n);this._handleMouseHover(n,r)}},_handleMouseOut:function(n){var r=this._hoveredLayer;r&&(ve(this._container,"leaflet-interactive"),this._fireEvent([r],n,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(n,r){if(!this._mouseHoverThrottled){for(var s,f,m=this._drawFirst;m;m=m.next)s=m.layer,s.options.interactive&&s._containsPoint(r)&&(f=s);f!==this._hoveredLayer&&(this._handleMouseOut(n),f&&(Lt(this._container,"leaflet-interactive"),this._fireEvent([f],n,"mouseover"),this._hoveredLayer=f)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,n),this._mouseHoverThrottled=!0,setTimeout(b(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(n,r,s){this._map._fireDOMEvent(r,s||r.type,n)},_bringToFront:function(n){var r=n._order;if(r){var s=r.next,f=r.prev;if(s)s.prev=f;else return;f?f.next=s:s&&(this._drawFirst=s),r.prev=this._drawLast,this._drawLast.next=r,r.next=null,this._drawLast=r,this._requestRedraw(n)}},_bringToBack:function(n){var r=n._order;if(r){var s=r.next,f=r.prev;if(f)f.next=s;else return;s?s.prev=f:f&&(this._drawLast=f),r.prev=null,r.next=this._drawFirst,this._drawFirst.prev=r,this._drawFirst=r,this._requestRedraw(n)}}});function Tr(n){return _t.canvas?new ho(n):null}var Ei=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(n){return document.createElement("<lvml:"+n+' class="lvml">')}}catch{}return function(n){return document.createElement("<"+n+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),Ss={_initContainer:function(){this._container=Zt("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(nn.prototype._update.call(this),this.fire("update"))},_initPath:function(n){var r=n._container=Ei("shape");Lt(r,"leaflet-vml-shape "+(this.options.className||"")),r.coordsize="1 1",n._path=Ei("path"),r.appendChild(n._path),this._updateStyle(n),this._layers[w(n)]=n},_addPath:function(n){var r=n._container;this._container.appendChild(r),n.options.interactive&&n.addInteractiveTarget(r)},_removePath:function(n){var r=n._container;se(r),n.removeInteractiveTarget(r),delete this._layers[w(n)]},_updateStyle:function(n){var r=n._stroke,s=n._fill,f=n.options,m=n._container;m.stroked=!!f.stroke,m.filled=!!f.fill,f.stroke?(r||(r=n._stroke=Ei("stroke")),m.appendChild(r),r.weight=f.weight+"px",r.color=f.color,r.opacity=f.opacity,f.dashArray?r.dashStyle=tt(f.dashArray)?f.dashArray.join(" "):f.dashArray.replace(/( *, *)/g," "):r.dashStyle="",r.endcap=f.lineCap.replace("butt","flat"),r.joinstyle=f.lineJoin):r&&(m.removeChild(r),n._stroke=null),f.fill?(s||(s=n._fill=Ei("fill")),m.appendChild(s),s.color=f.fillColor||f.color,s.opacity=f.fillOpacity):s&&(m.removeChild(s),n._fill=null)},_updateCircle:function(n){var r=n._point.round(),s=Math.round(n._radius),f=Math.round(n._radiusY||s);this._setPath(n,n._empty()?"M0 0":"AL "+r.x+","+r.y+" "+s+","+f+" 0,"+65535*360)},_setPath:function(n,r){n._path.v=r},_bringToFront:function(n){He(n._container)},_bringToBack:function(n){Gi(n._container)}},Gn=_t.vml?Ei:Di,Da=nn.extend({_initContainer:function(){this._container=Gn("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Gn("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){se(this._container),ie(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){nn.prototype._update.call(this);var n=this._bounds,r=n.getSize(),s=this._container;(!this._svgSize||!this._svgSize.equals(r))&&(this._svgSize=r,s.setAttribute("width",r.x),s.setAttribute("height",r.y)),de(s,n.min),s.setAttribute("viewBox",[n.min.x,n.min.y,r.x,r.y].join(" ")),this.fire("update")}},_initPath:function(n){var r=n._path=Gn("path");n.options.className&&Lt(r,n.options.className),n.options.interactive&&Lt(r,"leaflet-interactive"),this._updateStyle(n),this._layers[w(n)]=n},_addPath:function(n){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(n._path),n.addInteractiveTarget(n._path)},_removePath:function(n){se(n._path),n.removeInteractiveTarget(n._path),delete this._layers[w(n)]},_updatePath:function(n){n._project(),n._update()},_updateStyle:function(n){var r=n._path,s=n.options;r&&(s.stroke?(r.setAttribute("stroke",s.color),r.setAttribute("stroke-opacity",s.opacity),r.setAttribute("stroke-width",s.weight),r.setAttribute("stroke-linecap",s.lineCap),r.setAttribute("stroke-linejoin",s.lineJoin),s.dashArray?r.setAttribute("stroke-dasharray",s.dashArray):r.removeAttribute("stroke-dasharray"),s.dashOffset?r.setAttribute("stroke-dashoffset",s.dashOffset):r.removeAttribute("stroke-dashoffset")):r.setAttribute("stroke","none"),s.fill?(r.setAttribute("fill",s.fillColor||s.color),r.setAttribute("fill-opacity",s.fillOpacity),r.setAttribute("fill-rule",s.fillRule||"evenodd")):r.setAttribute("fill","none"))},_updatePoly:function(n,r){this._setPath(n,ki(n._parts,r))},_updateCircle:function(n){var r=n._point,s=Math.max(Math.round(n._radius),1),f=Math.max(Math.round(n._radiusY),1)||s,m="a"+s+","+f+" 0 1,0 ",v=n._empty()?"M0 0":"M"+(r.x-s)+","+r.y+m+s*2+",0 "+m+-s*2+",0 ";this._setPath(n,v)},_setPath:function(n,r){n._path.setAttribute("d",r)},_bringToFront:function(n){He(n._path)},_bringToBack:function(n){Gi(n._path)}});_t.vml&&Da.include(Ss);function Er(n){return _t.svg||_t.vml?new Da(n):null}Vt.include({getRenderer:function(n){var r=n.options.renderer||this._getPaneRenderer(n.options.pane)||this.options.renderer||this._renderer;return r||(r=this._renderer=this._createRenderer()),this.hasLayer(r)||this.addLayer(r),r},_getPaneRenderer:function(n){if(n==="overlayPane"||n===void 0)return!1;var r=this._paneRenderers[n];return r===void 0&&(r=this._createRenderer({pane:n}),this._paneRenderers[n]=r),r},_createRenderer:function(n){return this.options.preferCanvas&&Tr(n)||Er(n)}});var Ii=ja.extend({initialize:function(n,r){ja.prototype.initialize.call(this,this._boundsToLatLngs(n),r)},setBounds:function(n){return this.setLatLngs(this._boundsToLatLngs(n))},_boundsToLatLngs:function(n){return n=st(n),[n.getSouthWest(),n.getNorthWest(),n.getNorthEast(),n.getSouthEast()]}});function ad(n,r){return new Ii(n,r)}Da.create=Gn,Da.pointsToPath=ki,ri.geometryToLayer=Ye,ri.coordsToLatLng=so,ri.coordsToLatLngs=yr,ri.latLngToCoords=lo,ri.latLngsToCoords=_r,ri.getFeature=wi,ri.asFeature=uo,Vt.mergeOptions({boxZoom:!0});var an=Zn.extend({initialize:function(n){this._map=n,this._container=n._container,this._pane=n._panes.overlayPane,this._resetStateTimeout=0,n.on("unload",this._destroy,this)},addHooks:function(){jt(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){ie(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){se(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(n){if(!n.shiftKey||n.which!==1&&n.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),_a(),Jr(),this._startPoint=this._map.mouseEventToContainerPoint(n),jt(document,{contextmenu:_i,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(n){this._moved||(this._moved=!0,this._box=Zt("div","leaflet-zoom-box",this._container),Lt(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(n);var r=new M(this._point,this._startPoint),s=r.getSize();de(this._box,r.min),this._box.style.width=s.x+"px",this._box.style.height=s.y+"px"},_finish:function(){this._moved&&(se(this._box),ve(this._container,"leaflet-crosshair")),Un(),lr(),ie(document,{contextmenu:_i,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(n){if(!(n.which!==1&&n.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(b(this._resetState,this),0);var r=new et(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(r).fire("boxzoomend",{boxZoomBounds:r})}},_onKeyDown:function(n){n.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});Vt.addInitHook("addHandler","boxZoom",an),Vt.mergeOptions({doubleClickZoom:!0});var po=Zn.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(n){var r=this._map,s=r.getZoom(),f=r.options.zoomDelta,m=n.originalEvent.shiftKey?s-f:s+f;r.options.doubleClickZoom==="center"?r.setZoom(m):r.setZoomAround(n.containerPoint,m)}});Vt.addInitHook("addHandler","doubleClickZoom",po),Vt.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Vn=Zn.extend({addHooks:function(){if(!this._draggable){var n=this._map;this._draggable=new bi(n._mapPane,n._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),n.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),n.on("zoomend",this._onZoomEnd,this),n.whenReady(this._onZoomEnd,this))}Lt(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){ve(this._map._container,"leaflet-grab"),ve(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var n=this._map;if(n._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var r=st(this._map.options.maxBounds);this._offsetLimit=V(this._map.latLngToContainerPoint(r.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(r.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;n.fire("movestart").fire("dragstart"),n.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(n){if(this._map.options.inertia){var r=this._lastTime=+new Date,s=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(s),this._times.push(r),this._prunePositions(r)}this._map.fire("move",n).fire("drag",n)},_prunePositions:function(n){for(;this._positions.length>1&&n-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var n=this._map.getSize().divideBy(2),r=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=r.subtract(n).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(n,r){return n-(n-r)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var n=this._draggable._newPos.subtract(this._draggable._startPos),r=this._offsetLimit;n.x<r.min.x&&(n.x=this._viscousLimit(n.x,r.min.x)),n.y<r.min.y&&(n.y=this._viscousLimit(n.y,r.min.y)),n.x>r.max.x&&(n.x=this._viscousLimit(n.x,r.max.x)),n.y>r.max.y&&(n.y=this._viscousLimit(n.y,r.max.y)),this._draggable._newPos=this._draggable._startPos.add(n)}},_onPreDragWrap:function(){var n=this._worldWidth,r=Math.round(n/2),s=this._initialWorldOffset,f=this._draggable._newPos.x,m=(f-r+s)%n+r-s,v=(f+r+s)%n-r-s,A=Math.abs(m+s)<Math.abs(v+s)?m:v;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=A},_onDragEnd:function(n){var r=this._map,s=r.options,f=!s.inertia||n.noInertia||this._times.length<2;if(r.fire("dragend",n),f)r.fire("moveend");else{this._prunePositions(+new Date);var m=this._lastPos.subtract(this._positions[0]),v=(this._lastTime-this._times[0])/1e3,A=s.easeLinearity,B=m.multiplyBy(A/v),Z=B.distanceTo([0,0]),Q=Math.min(s.inertiaMaxSpeed,Z),dt=B.multiplyBy(Q/Z),bt=Q/(s.inertiaDeceleration*A),kt=dt.multiplyBy(-bt/2).round();!kt.x&&!kt.y?r.fire("moveend"):(kt=r._limitOffset(kt,r.options.maxBounds),Tt(function(){r.panBy(kt,{duration:bt,easeLinearity:A,noMoveStart:!0,animate:!0})}))}}});Vt.addInitHook("addHandler","dragging",Vn),Vt.mergeOptions({keyboard:!0,keyboardPanDelta:80});var zs=Zn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(n){this._map=n,this._setPanDelta(n.options.keyboardPanDelta),this._setZoomDelta(n.options.zoomDelta)},addHooks:function(){var n=this._map._container;n.tabIndex<=0&&(n.tabIndex="0"),jt(n,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),ie(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var n=document.body,r=document.documentElement,s=n.scrollTop||r.scrollTop,f=n.scrollLeft||r.scrollLeft;this._map._container.focus(),window.scrollTo(f,s)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(n){var r=this._panKeys={},s=this.keyCodes,f,m;for(f=0,m=s.left.length;f<m;f++)r[s.left[f]]=[-1*n,0];for(f=0,m=s.right.length;f<m;f++)r[s.right[f]]=[n,0];for(f=0,m=s.down.length;f<m;f++)r[s.down[f]]=[0,n];for(f=0,m=s.up.length;f<m;f++)r[s.up[f]]=[0,-1*n]},_setZoomDelta:function(n){var r=this._zoomKeys={},s=this.keyCodes,f,m;for(f=0,m=s.zoomIn.length;f<m;f++)r[s.zoomIn[f]]=n;for(f=0,m=s.zoomOut.length;f<m;f++)r[s.zoomOut[f]]=-n},_addHooks:function(){jt(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){ie(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(n){if(!(n.altKey||n.ctrlKey||n.metaKey)){var r=n.keyCode,s=this._map,f;if(r in this._panKeys){if(!s._panAnim||!s._panAnim._inProgress)if(f=this._panKeys[r],n.shiftKey&&(f=lt(f).multiplyBy(3)),s.options.maxBounds&&(f=s._limitOffset(lt(f),s.options.maxBounds)),s.options.worldCopyJump){var m=s.wrapLatLng(s.unproject(s.project(s.getCenter()).add(f)));s.panTo(m)}else s.panBy(f)}else if(r in this._zoomKeys)s.setZoom(s.getZoom()+(n.shiftKey?3:1)*this._zoomKeys[r]);else if(r===27&&s._popup&&s._popup.options.closeOnEscapeKey)s.closePopup();else return;_i(n)}}});Vt.addInitHook("addHandler","keyboard",zs),Vt.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Ar=Zn.extend({addHooks:function(){jt(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){ie(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(n){var r=Ke(n),s=this._map.options.wheelDebounceTime;this._delta+=r,this._lastMousePos=this._map.mouseEventToContainerPoint(n),this._startTime||(this._startTime=+new Date);var f=Math.max(s-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(b(this._performZoom,this),f),_i(n)},_performZoom:function(){var n=this._map,r=n.getZoom(),s=this._map.options.zoomSnap||0;n._stop();var f=this._delta/(this._map.options.wheelPxPerZoomLevel*4),m=4*Math.log(2/(1+Math.exp(-Math.abs(f))))/Math.LN2,v=s?Math.ceil(m/s)*s:m,A=n._limitZoom(r+(this._delta>0?v:-v))-r;this._delta=0,this._startTime=null,A&&(n.options.scrollWheelZoom==="center"?n.setZoom(r+A):n.setZoomAround(this._lastMousePos,r+A))}});Vt.addInitHook("addHandler","scrollWheelZoom",Ar);var Ki=600;Vt.mergeOptions({tapHold:_t.touchNative&&_t.safari&&_t.mobile,tapTolerance:15});var mo=Zn.extend({addHooks:function(){jt(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){ie(this._map._container,"touchstart",this._onDown,this)},_onDown:function(n){if(clearTimeout(this._holdTimeout),n.touches.length===1){var r=n.touches[0];this._startPos=this._newPos=new at(r.clientX,r.clientY),this._holdTimeout=setTimeout(b(function(){this._cancel(),this._isTapValid()&&(jt(document,"touchend",Se),jt(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",r))},this),Ki),jt(document,"touchend touchcancel contextmenu",this._cancel,this),jt(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function n(){ie(document,"touchend",Se),ie(document,"touchend touchcancel",n)},_cancel:function(){clearTimeout(this._holdTimeout),ie(document,"touchend touchcancel contextmenu",this._cancel,this),ie(document,"touchmove",this._onMove,this)},_onMove:function(n){var r=n.touches[0];this._newPos=new at(r.clientX,r.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(n,r){var s=new MouseEvent(n,{bubbles:!0,cancelable:!0,view:window,screenX:r.screenX,screenY:r.screenY,clientX:r.clientX,clientY:r.clientY});s._simulated=!0,r.target.dispatchEvent(s)}});Vt.addInitHook("addHandler","tapHold",mo),Vt.mergeOptions({touchZoom:_t.touch,bounceAtZoomLimits:!0});var Ts=Zn.extend({addHooks:function(){Lt(this._map._container,"leaflet-touch-zoom"),jt(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){ve(this._map._container,"leaflet-touch-zoom"),ie(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(n){var r=this._map;if(!(!n.touches||n.touches.length!==2||r._animatingZoom||this._zooming)){var s=r.mouseEventToContainerPoint(n.touches[0]),f=r.mouseEventToContainerPoint(n.touches[1]);this._centerPoint=r.getSize()._divideBy(2),this._startLatLng=r.containerPointToLatLng(this._centerPoint),r.options.touchZoom!=="center"&&(this._pinchStartLatLng=r.containerPointToLatLng(s.add(f)._divideBy(2))),this._startDist=s.distanceTo(f),this._startZoom=r.getZoom(),this._moved=!1,this._zooming=!0,r._stop(),jt(document,"touchmove",this._onTouchMove,this),jt(document,"touchend touchcancel",this._onTouchEnd,this),Se(n)}},_onTouchMove:function(n){if(!(!n.touches||n.touches.length!==2||!this._zooming)){var r=this._map,s=r.mouseEventToContainerPoint(n.touches[0]),f=r.mouseEventToContainerPoint(n.touches[1]),m=s.distanceTo(f)/this._startDist;if(this._zoom=r.getScaleZoom(m,this._startZoom),!r.options.bounceAtZoomLimits&&(this._zoom<r.getMinZoom()&&m<1||this._zoom>r.getMaxZoom()&&m>1)&&(this._zoom=r._limitZoom(this._zoom)),r.options.touchZoom==="center"){if(this._center=this._startLatLng,m===1)return}else{var v=s._add(f)._divideBy(2)._subtract(this._centerPoint);if(m===1&&v.x===0&&v.y===0)return;this._center=r.unproject(r.project(this._pinchStartLatLng,this._zoom).subtract(v),this._zoom)}this._moved||(r._moveStart(!0,!1),this._moved=!0),Kt(this._animRequest);var A=b(r._move,r,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=Tt(A,this,!0),Se(n)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,Kt(this._animRequest),ie(document,"touchmove",this._onTouchMove,this),ie(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});Vt.addInitHook("addHandler","touchZoom",Ts),Vt.BoxZoom=an,Vt.DoubleClickZoom=po,Vt.Drag=Vn,Vt.Keyboard=zs,Vt.ScrollWheelZoom=Ar,Vt.TapHold=mo,Vt.TouchZoom=Ts,d.Bounds=M,d.Browser=_t,d.CRS=Ct,d.Canvas=ho,d.Circle=oo,d.CircleMarker=Ca,d.Class=he,d.Control=sn,d.DivIcon=ru,d.DivOverlay=Ge,d.DomEvent=eo,d.DomUtil=Sa,d.Draggable=bi,d.Evented=it,d.FeatureGroup=Pn,d.GeoJSON=ri,d.GridLayer=Ra,d.Handler=Zn,d.Icon=qn,d.ImageOverlay=La,d.LatLng=ft,d.LatLngBounds=et,d.Layer=jn,d.LayerGroup=Aa,d.LineUtil=Jc,d.Map=Vt,d.Marker=vr,d.Mixin=Ic,d.Path=Yn,d.Point=at,d.PolyUtil=_s,d.Polygon=ja,d.Polyline=ai,d.Popup=wr,d.PosAnimation=za,d.Projection=Ql,d.Rectangle=Ii,d.Renderer=nn,d.SVG=Da,d.SVGOverlay=fo,d.TileLayer=Ti,d.Tooltip=Sr,d.Transformation=en,d.Util=je,d.VideoOverlay=zi,d.bind=b,d.bounds=V,d.canvas=Tr,d.circle=eu,d.circleMarker=tu,d.control=ii,d.divIcon=id,d.extend=x,d.featureGroup=Jl,d.geoJSON=co,d.geoJson=br,d.gridLayer=ou,d.icon=mr,d.imageOverlay=nu,d.latLng=ut,d.latLngBounds=st,d.layerGroup=Wc,d.map=ps,d.marker=Wl,d.point=lt,d.polygon=ed,d.polyline=td,d.popup=au,d.rectangle=ad,d.setOptions=X,d.stamp=w,d.svg=Er,d.svgOverlay=iu,d.tileLayer=mn,d.tooltip=nd,d.transformation=Me,d.version=h,d.videoOverlay=Oa;var Es=window.L;d.noConflict=function(){return window.L=Es,this},window.L=d}))})(yl,yl.exports)),yl.exports}var es=r4();const Ll=gh(es);function Pc(a,c,d){return Object.freeze({instance:a,context:c,container:d})}function qc(a,c){return c==null?function(h,x){const y=z.useRef(void 0);return y.current||(y.current=a(h,x)),y}:function(h,x){const y=z.useRef(void 0);y.current||(y.current=a(h,x));const b=z.useRef(h),{instance:O}=y.current;return z.useEffect(function(){b.current!==h&&(c(O,h,b.current),b.current=h)},[O,h,c]),y}}function tx(a,c){z.useEffect(function(){return(c.layerContainer??c.map).addLayer(a.instance),function(){c.layerContainer?.removeLayer(a.instance),c.map.removeLayer(a.instance)}},[c,a])}function ex(a){return function(d){const h=Rh(),x=a(Zc(d,h),h);return F1(h.map,d.attribution),Dh(x.current,d.eventHandlers),tx(x.current,h),x}}function o4(a,c){const d=z.useRef(void 0);z.useEffect(function(){if(c.pathOptions!==d.current){const x=c.pathOptions??{};a.instance.setStyle(x),d.current=x}},[a,c])}function s4(a){return function(d){const h=Rh(),x=a(Zc(d,h),h);return Dh(x.current,d.eventHandlers),tx(x.current,h),o4(x.current,d),x}}function l4(a,c){const d=qc(a,c),h=ex(d);return W1(h)}function u4(a,c){const d=qc(a),h=i4(d,c);return e4(h)}function c4(a,c){const d=qc(a,c),h=s4(d);return W1(h)}function d4(a,c){const d=qc(a,c),h=ex(d);return n4(h)}function f4(a,c,d){const{opacity:h,zIndex:x}=c;h!=null&&h!==d.opacity&&a.setOpacity(h),x!=null&&x!==d.zIndex&&a.setZIndex(x)}const nx=c4(function({center:c,children:d,...h},x){const y=new es.Circle(c,h);return Pc(y,J1(x,{overlayContainer:y}))},Jb);function h4({bounds:a,boundsOptions:c,center:d,children:h,className:x,id:y,placeholder:b,style:O,whenReady:w,zoom:S,...E},j){const[R]=z.useState({className:x,id:y,style:O}),[G,q]=z.useState(null),X=z.useRef(void 0);z.useImperativeHandle(j,()=>G?.map??null,[G]);const W=z.useCallback(rt=>{if(rt!==null&&!X.current){const tt=new es.Map(rt,E);X.current=tt,d!=null&&S!=null?tt.setView(d,S):a!=null&&tt.fitBounds(a,c),w!=null&&tt.whenReady(w),q(t4(tt))}},[]);z.useEffect(()=>()=>{G?.map.remove()},[G]);const nt=G?tn.createElement(Oh,{value:G},h):b??null;return tn.createElement("div",{...R,ref:W},nt)}const kh=z.forwardRef(h4),Bh=l4(function({position:c,...d},h){const x=new es.Marker(c,d);return Pc(x,J1(h,{overlayContainer:x}))},function(c,d,h){d.position!==h.position&&c.setLatLng(d.position),d.icon!=null&&d.icon!==h.icon&&c.setIcon(d.icon),d.zIndexOffset!=null&&d.zIndexOffset!==h.zIndexOffset&&c.setZIndexOffset(d.zIndexOffset),d.opacity!=null&&d.opacity!==h.opacity&&c.setOpacity(d.opacity),c.dragging!=null&&d.draggable!==h.draggable&&(d.draggable===!0?c.dragging.enable():c.dragging.disable())}),p4=u4(function(c,d){const h=new es.Popup(c,d.overlayContainer);return Pc(h,d)},function(c,d,{position:h},x){z.useEffect(function(){const{instance:b}=c;function O(S){S.popup===b&&(b.update(),x(!0))}function w(S){S.popup===b&&x(!1)}return d.map.on({popupopen:O,popupclose:w}),d.overlayContainer==null?(h!=null&&b.setLatLng(h),b.openOn(d.map)):d.overlayContainer.bindPopup(b),function(){d.map.off({popupopen:O,popupclose:w}),d.overlayContainer?.unbindPopup(),d.map.removeLayer(b)}},[c,d,x,h])}),Nh=d4(function({url:c,...d},h){const x=new es.TileLayer(c,Zc(d,h));return Pc(x,h)},function(c,d,h){f4(c,d,h);const{url:x}=d;x!=null&&x!==h.url&&c.setUrl(x)});delete Ll.Icon.Default.prototype._getIconUrl;Ll.Icon.Default.mergeOptions({iconRetinaUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",iconUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"});const Qf=T.div`
  padding: 20px;
  z-index: 0;
  min-height: 100vh;
`,m4=T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 15px;
  z-index: 1;
`;T.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: #fff;
  color: #374151;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 1;

  &:hover {
    background: #f3f4f6;
    border-color: #d1d5db;
  }
`;T.h1`
  font-size: 28px;
  font-weight: 700;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
`;const g4=T.div`
  z-index: 1;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin-bottom: 30px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`,Lg=T.div`
  margin-bottom: 30px;
  padding-bottom: 25px;
  border-bottom: 1px solid #e5e7eb;
  z-index: 1;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`,x4=T.h2`
  font-size: 20px;
  font-weight: 600;
  color: #3b82f6;
  margin: 0 0 20px 0;
  display: flex;
  align-items: center;
  z-index: 1;
  gap: 10px;
  justify-content: space-between;
`,v4=T.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  z-index: 1;
  margin-bottom: 25px;
`,Og=T.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  gap: 6px;
`,Ff=T.span`
  font-size: 14px;
  font-weight: 500;
  z-index: 1;
`,Rg=T.span`
  font-size: 16px;
  font-weight: 600;
`,y4=T.div`
  z-index: 1;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #e5e7eb;
  white-space: pre-wrap;
  line-height: 1.6;
  font-size: 16px;
  margin-top: 10px;
`,_4=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 20px;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Dg=T.div`
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
  z-index: 1;
  height: 400px;
`,kg=T.div`
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 1;
`,Bg=T.div`
  padding: 20px;
  height: calc(400px - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  overflow: hidden;
`,b4=T.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  z-index: 1;
  border-radius: 4px;
`,w4=T.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  z-index: 1;
  overflow: hidden;

  .leaflet-container {
    width: 100%;
    z-index: 1;
    height: 100%;
  }
`,S4=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  z-index: 1;
  width: 50%;
  &.pending {
    background: #fef3c7;
    color: #92400e;
    border: 1px solid #fbbf24;
  }

  &.approved {
    background: #d1fae5;
    color: #065f46;
    border: 1px solid #10b981;
  }

  &.rejected {
    background: #fee2e2;
    color: #991b1b;
    border: 1px solid #ef4444;
  }

  &.submitted {
    background: #dbeafe;
    color: #1e40af;
    border: 1px solid #3b82f6;
  }
`,z4=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  gap: 20px;
  font-size: 16px;
`,T4=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  gap: 20px;
  text-align: center;
  padding: 40px;
  z-index: 1;
  border-radius: 12px;
  border: 1px solid #fecaca;
  max-width: 600px;
  margin: 0 auto;
`,E4=T.h3`
  color: #dc2626;
  margin: 0;
  font-size: 20px;
`,Ng=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 16px;
  gap: 10px;
`;function Ug(a){if(!a)return null;try{if(a.includes("POINT")){const c=a.split("POINT")[1];if(!c)return null;const d=c.replace(/[()]/g,"").trim(),[h,x]=d.split(" ").map(Number);return isNaN(x)||isNaN(h)?null:[x,h]}else if(a.includes("SRID=4326")){const c=a.match(/POINT\s*\(([^)]+)\)/);if(c){const d=c[1].trim().split(" ");if(d.length>=2){const h=parseFloat(d[0]),x=parseFloat(d[1]);if(!isNaN(x)&&!isNaN(h))return[x,h]}}}return null}catch{return null}}function A4(a){if(!a)return"Noma'lum";const c=String(a).toLowerCase();switch(c){case"approved":case"completed":case"success":return"Tasdiqlangan";case"rejected":case"cancelled":return"Rad etilgan";case"pending":case"submitted":return"Kutilmoqda";case"active":return"Faol";default:return c.charAt(0).toUpperCase()+c.slice(1)}}function C4(a){if(!a)return"pending";const c=String(a).toLowerCase();return c==="approved"||c==="completed"||c==="success"?"approved":c==="rejected"||c==="cancelled"?"rejected":c==="pending"||c==="submitted"?"pending":"submitted"}function j4(a){switch(String(a).toLowerCase()){case"approved":case"completed":case"success":return p.jsx(K1,{});case"rejected":case"cancelled":return p.jsx(S2,{});case"pending":case"submitted":return p.jsx(cg,{});default:return p.jsx(cg,{})}}function M4(a){if(!a)return"N/A";try{return new Date(a).toLocaleDateString("uz-UZ",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return a}}function L4(){const{id:a}=$r();zn();const[c,d]=z.useState(null),[h,x]=z.useState(!0),[y,b]=z.useState(null);z.useEffect(()=>{O()},[a]);const O=async()=>{try{x(!0),b(null);const j=await Et.getPracticeDay(a);if(!j)throw new Error("Amaliyot kuni topilmadi");d(j)}catch(j){b(j.message||"Amaliyot kunini yuklab bo'lmadi")}finally{x(!1)}};if(h)return p.jsx(Qf,{children:p.jsxs(z4,{children:[p.jsx(vl,{size:40,style:{animation:"spin 1s linear infinite"}}),p.jsx("div",{children:"Amaliyot kuni ma'lumotlari yuklanmoqda..."})]})});if(y||!c)return p.jsxs(Qf,{children:[p.jsx(m4,{}),p.jsxs(T4,{children:[p.jsx(bl,{size:48,color:"#dc2626"}),p.jsx(E4,{children:"Xatolik yuz berdi"}),p.jsx("p",{children:y||"Amaliyot kuni topilmadi"}),p.jsx("div",{style:{display:"flex",gap:"10px",marginTop:"10px"},children:p.jsx("button",{onClick:O,style:{padding:"10px 20px",background:"#3b82f6",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"500"},children:"Qayta yuklash"})})]})]});const w=c.reports||{},S=Ug(c.location),E=Ug(w.location);return p.jsx(Qf,{children:p.jsxs(g4,{children:[w&&Object.keys(w).length>0&&p.jsxs(Lg,{children:[p.jsxs(v4,{children:[p.jsxs(Og,{children:[p.jsx(Ff,{children:"Hisobot ID"}),p.jsx(Rg,{children:w.id||"N/A"})]}),p.jsxs(Og,{children:[p.jsx(Ff,{children:"Yaratilgan sana"}),p.jsx(Rg,{children:M4(w.created_at)})]})," ",p.jsxs(S4,{className:C4(c.status),children:[j4(c.status),A4(c.status)]})]}),w.text&&p.jsxs("div",{style:{marginTop:"25px"},children:[p.jsx(Ff,{style:{display:"block",marginBottom:"10px",fontSize:"16px",fontWeight:"600"},children:"Hisobot matni:"}),p.jsx(y4,{children:w.text})]}),p.jsxs(_4,{children:[p.jsxs(Dg,{children:[p.jsxs(kg,{children:[p.jsx(Xo,{}),"Hisobot rasmi"]}),p.jsx(Bg,{children:w.image?p.jsx(b4,{src:Et.getImageUrl(w.image),alt:"Hisobot rasmi",onError:j=>{j.target.style.display="none"}}):p.jsxs(Ng,{children:[p.jsx(Xo,{size:48,color:"#9ca3af"}),p.jsx("div",{children:"Rasm yuklanmagan"})]})})]}),p.jsxs(Dg,{children:[p.jsxs(kg,{children:[p.jsx(dg,{}),"Joylashuv"]}),p.jsx(Bg,{children:S?p.jsx(w4,{children:p.jsxs(kh,{center:S,zoom:15,style:{width:"100%",height:"100%"},children:[p.jsx(Nh,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),p.jsx(nx,{center:S,radius:500,pathOptions:{fillColor:"red",color:"red",weight:2,opacity:.5,fillOpacity:.2}}),E&&p.jsx(Bh,{position:E})]})}):p.jsxs(Ng,{children:[p.jsx(dg,{size:48,color:"#9ca3af"}),p.jsx("div",{children:"Joylashuv ko'rsatilmagan"})]})})]})]})]}),(!w||Object.keys(w).length===0)&&p.jsxs(Lg,{children:[p.jsxs(x4,{children:[p.jsx(Xo,{}),"Hisobot"]}),p.jsxs("div",{style:{textAlign:"center",padding:"40px"},children:[p.jsx(bl,{size:48,color:"#9ca3af"}),p.jsx("h3",{style:{color:"#6b7280",margin:"20px 0 10px 0"},children:"Hisobot hali yuklanmagan"}),p.jsx("p",{style:{color:"#9ca3af"},children:"Talaba hali bu amaliyot kuni uchun hisobot yuklamagan"})]})]})]})})}const O4="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7cua5gzeKg8hJo3grY4g7c3grU0gLI2frE0daAubJc2gbQwd6QzeKk2gLMtd5sxdKIua5g1frA2f7IydaM0e6w2fq41fK01eqo3grgubJgta5cxdKI1f7AydaQydaMxc6EubJgvbJkwcZ4ubZkwcJwubZgubJcydqUydKIxapgubJctbJcubZcubJcvbJYubJcvbZkubJctbJctbZcubJg2f7AubJcrbZcubJcubJcua5g3grY0fq8ubJcubJdEkdEwhsw6i88vhswuhcsuhMtBjMgthMsrg8srgss6is8qgcs8i9A9iMYtg8spgcoogMo7hcMngMonf8olfso4gr8kfck5iM8jfMk4iM8he8k1fro7itAgesk2hs8eecgzfLcofssdeMg0hc4cd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqhUndROmdM1fK0wcZ8vb5w0eqpQm9MzeKhXoNVcpdYydKNWn9VZotVKltJFjsIwcJ1Rms9OlslLmtH///8+kc9epdYzd6dbo9VHkMM2f7FHmNBClM8ydqVcpNY9hro3gLM9hLczealQmcw3fa46f7A8gLMxc6I3eagyc6FIldJMl9JSnNRSntNNl9JPnNJFi75UnM9ZodVKksg8kM45jc09e6ZHltFBk883gbRBh7pDk9EwcaBzn784g7dKkcY2i81Om9M7j85Llc81is09g7Q4grY/j9A0eqxKmdFFltBEjcXf6fFImdBCiLxJl9FGlNFBi78yiMxVndEvbpo6js74+vx+psPP3+o/ks5HkcpGmNCjwdZCkNDM3ehYoNJEls+lxNkxh8xHks0+jdC1zd5Lg6r+/v/H2ufz9/o3jM3t8/edvdM/k89Th61OiLBSjbZklbaTt9BfptdjmL1AicBHj8hGk9FAgK1dkLNTjLRekrdClc/k7fM0icy0y9tgp9c4jc2NtM9Dlc8zicxeXZn3AAAAQ3RSTlMAHDdTb4yPA+LtnEQmC4L2EmHqB7XA0d0sr478x4/Yd5i1zOfyPkf1sLVq4Nh3FvjxopQ2/STNuFzUwFIwxKaejILpIBEV9wAABhVJREFUeF6s1NdyFEcYBeBeoQIhRAkLlRDGrhIgY3BJL8CVeKzuyXFzzjkn5ZxzzuScg3PO8cKzu70JkO0LfxdTU//pM9vTu7Xgf6KqOVTb9X7toRrVEfBf1HTVjZccrT/2by1VV928Yty9ZbVuucdz90frG8DBjl9pVApbOstvmMuvVgaNXSfAAd6pGxpy6yxf5ph43pS/4f3uoaGm2rdu72S9xzOvMymkZFq/ptDrk90mhW7e4zl7HLzhxGWPR20xmSxJ/VqldG5m9XhaVOA1DadsNh3Pu5L2N6QtPO/32JpqQBVVk20oy/Pi2s23WEvyfHbe1thadVQttvm7Llf65gGmXK67XtupyoM7HQhmXdLS8oGWJNeOJ3C5fG5XCEJnkez3/oFdsvgJ4l2ANZwhrJKk/7OSXa+3Vw2WJMlKnGkobouYk6T0TyX30klOUnTD9HJ5qpckL3EW/w4XF3Xd0FGywXUrstrclVsqz5Pd/sXFYyDnPdrLcQODmGOK47IZb4CmibmMn+MYRzFZ5jg33ZL/EJrWcszHmANy3ARBK/IXtciJy8VsitPSdE3uuHxzougojcUdr8/32atnz/ev3f/K5wtpxUTpcaI45zusVDpYtZi+jg0oU9b3x74h7+n9ABvYEZeKaVq0sh0AtLKsFtqNBdeT0MrSzwwlq9+x6xAO4tgOtSzbCjrNQQiNvQUbUEubvzBUeGw26yDCsRHCoLkTHDa7IdOLIThs/gHvChszh2CimE8peRs47cxANI0lYNB5y1DljpOF0IhzBDPOZnDOqYYbeGKECbPzWnXludPphw5c2YBq5zlwXphIbO4VDCZ0gnPfUO1TwZoYwAs2ExPCedAu9DAjfQUjzITQb3jNj0KG2Sgt6BHaQUdYzWz+XmBktOHwanXjaSTcwwziBcuMOtwBmqPrTOxFQR/DRKKPqyur0aiW6cULYsx6tBm0jXpR/AUWR6HRq9WVW6MRhIq5jLyjbaCTDCijyYJNpCajdyobP/eTw0iexBAKkJ3gA5KcQb2zBXsIBckn+xVv8jkZSaEFHE+jFEleAEfayRU0MouNoBmB/L50Ai/HSLIHxcrpCvnhSQAuakKp2C/YbCylJjXRVy/z3+Kv/RrNcCo+WUzlVEhzKffnTQnxeN9fWF88fiNCUdSTsaufaChKWInHeysygfpIqagoakW+vV20J8uyl6TyNKEZWV4oRSPyCkWpgOLSbkCObT8o2r6tlG58HQquf6O0v50tB7JM7F4EORd2dx/K0w/KHsVkLPaoYrwgP/y7krr3SSMA4zj+OBgmjYkxcdIJQyQRKgg2viX9Hddi9UBb29LrKR7CVVEEEXWojUkXNyfTNDE14W9gbHJNuhjDettN3ZvbOvdOqCD3Jp/9l+/wJE+9PkYGjx/fqkys3S2rMozM/o2106rfMUINo6hVqz+eu/hd1c4xTg0TAfy5kV+4UG6+IthHTU9woWmxuKNbTfuCSfovBCxq7EtHqvYL4Sm6F8GVxsSXHMQ07TOi1DKtZxjWaaIyi4CXWjxPccUw8WVbMYY5wxC1mzEyXMJWkllpRloi+Kkoq69sxBTlElF6aAxYUbjXNlhlDZilDnM4U5SlN5biRsRHnbx3mbeWjEh4mEyiuJDl5XcWVmX5GvNkFgLWZM5qwsop4/AWfLhU1cR7k1VVvcYCWRkOI6Xy5gmnphCYIkvzuNYzHzosq2oNk2RtSs8khfUOfHIDgR6ysYBaMpl4uEgk2U/oJTs9AaTSwma7dT69geAE2ZpEjUsn2ieJNHeKfrI3EcAGJ2ZaNgVuC8EBctCLc57P5u5led6IOBkIYkuQMrmmjChs4VkfOerHqSBkPzZlhe06RslZ3zMjk2sscqKwY0RcjKK+LWbzd7KiHhkncs/siFJ+V5eXxD34B8nVuJEpGJNmxN2gH3vSvp7J70tF+D1Ej8qUJD1TkErAND2GZwTFg/LubvmgiBG3SOvdlsqFQrkEzJCL1rstlnVFROixZoDDSuXQFHESwVGlcuQcMb/b42NgjLowh5MTDFE3vNB5qStRIErdCQEh6pLPR92anSUb/wAIhldAaDMpGgAAAABJRU5ErkJggg==",R4="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=",D4="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC";delete Ll.Icon.Default.prototype._getIconUrl;Ll.Icon.Default.mergeOptions({iconRetinaUrl:O4,iconUrl:R4,shadowUrl:D4});const Jf=T.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 85vh;
  padding: 20px;
  box-sizing: border-box;
  z-index: 0;
`,Hg=T.div`
  width: 100%;
  max-width: 1200px;
  border-radius: 20px;
  box-shadow: 0px 4px 20px ${a=>a.theme.inputBorder||"rgba(0,0,0,0.1)"};
  overflow: hidden;
`,Zg=T.div`
  display: flex;
  gap: 30px;
  padding: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    gap: 20px;
  }
`,dc=T.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,k4=T.div`
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;

  h3 {
    margin: 0 0 16px 0;
    font-size: 20px;
    font-weight: 600;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  .info-row {
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0;
    }

    strong {
      font-weight: 600;
      margin-bottom: 4px;
      font-size: 14px;
    }

    span {
      word-break: break-word;
      line-height: 1.5;
    }
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`,B4=T.div`
  width: 100%;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 480px) {
    height: 220px;
  }
`,N4=T.button`
  background: ${a=>a.theme.buttonBg};
  color: white;
  width: 100%;
  max-width: 300px;
  padding: 14px 20px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-end;

  &:hover {
    background: ${a=>a.theme.buttonHover};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    max-width: none;
    align-self: stretch;
  }
`,U4=T.label`
  width: 100%;
  height: 320px;
  border-radius: 16px;
  border: 2px dashed #90c2ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 48px;
  color: #3a8dfd;
  margin-bottom: 15px;
  border-color: ${a=>a.hasError?"#ef4444":"#90c2ff"};
  background: ${a=>a.hasError?"#fef2f2":"transparent"};

  &:hover {
    background: #d9ebff51;
    border-color: #3b82f6;
  }

  input {
    display: none;
  }

  .placeholder {
    text-align: center;
    font-size: 16px;
    color: #6b7280;
    margin-top: 10px;
  }

  @media (max-width: 480px) {
    height: 280px;
    font-size: 40px;
  }
`,H4=T.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
`,Z4=T.textarea`
  width: 100%;
  height: 220px;
  padding: 16px;
  border: 1.6px solid #d0d7e2;
  border-radius: 12px;
  font-size: 16px;
  font-family: inherit;
  resize: vertical;
  border-color: ${a=>a.hasError?"#ef4444":"#d0d7e2"};

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`,P4=T.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,Pg=T.button`
  background: ${a=>a.theme.buttonBg};
  padding: 14px 28px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${a=>a.theme.buttonHover};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,qo=T.div`
  color: #ef4444;
  font-size: 14px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
`,q4=T.span`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;

  &.pending {
    background: #fef3c7;
    color: #d97706;
  }
  &.completed {
    background: #d1fae5;
    color: #065f46;
  }
  &.approved {
    background: #dbeafe;
    color: #1e40af;
  }
  &.rejected {
    background: #fee2e2;
    color: #991b1b;
  }
`,Y4=a=>{switch(a){case"pending":return"Kutilmoqda";case"completed":return"Yakunlangan";case"approved":return"Tasdiqlangan";case"rejected":return"Rad etilgan";default:return a}},G4=a=>{switch(a){case"pending":return"pending";case"completed":return"completed";case"approved":return"approved";case"rejected":return"rejected";default:return"pending"}},V4=a=>{if(!a)return null;const c=a.match(/POINT\s*\(([^)]+)\)/);if(c){const d=c[1].trim().split(" ");if(d.length>=2)return{lng:parseFloat(d[0]),lat:parseFloat(d[1])}}return null},X4=(a,c,d,h)=>{const y=E=>E*Math.PI/180,b=y(d-a),O=y(h-c),w=Math.sin(b/2)*Math.sin(b/2)+Math.cos(y(a))*Math.cos(y(d))*Math.sin(O/2)*Math.sin(O/2);return 6371e3*(2*Math.atan2(Math.sqrt(w),Math.sqrt(1-w)))};function $4({onSubmissionSuccess:a}){const{practiceDayId:c}=$r(),d=zn(),[h,x]=z.useState(null),[y,b]=z.useState(!0),[O,w]=z.useState(!1),[S,E]=z.useState(null),[j,R]=z.useState(null),[G,q]=z.useState(""),[X,W]=z.useState({lat:null,lng:null}),[nt,rt]=z.useState(!1),[tt,ht]=z.useState({}),[wt,vt]=z.useState(!1),[ot,Ut]=z.useState(!1);z.useEffect(()=>{(async()=>{if(c)try{b(!0);const N=await Et.getPracticeDay(c);x(N)}catch{ht({load:"Amaliyot kuni yuklanmadi"})}finally{b(!1)}})()},[c]);const zt=h?V4(h.location):null,Rt=mt=>{const N=mt.target.files[0];if(N){if(N.size>5*1024*1024){ht(it=>({...it,image:"Rasm hajmi 5MB dan oshmasligi kerak"}));return}R(N),E(URL.createObjectURL(N)),ht(it=>({...it,image:null}))}},Tt=()=>{if(!navigator.geolocation){ht(mt=>({...mt,location:"Brauzer geolokatsiyani qo'llab-quvvatlamaydi"}));return}Ut(!0),ht(mt=>({...mt,location:null,radius:null})),navigator.geolocation.getCurrentPosition(mt=>{const N=Number(mt.coords.latitude.toFixed(6)),it=Number(mt.coords.longitude.toFixed(6));if(W({lat:N,lng:it}),Ut(!1),zt){const at=X4(N,it,zt.lat,zt.lng),Mt=at<=500;rt(Mt),ht(Mt?lt=>({...lt,radius:null}):lt=>({...lt,radius:`Siz amaliyot joyidan ${at.toFixed(0)} metr uzoqdasiz (500m ichida bo'lish kerak)`}))}},mt=>{Ut(!1);let N="Lokatsiya olinmadi";switch(mt.code){case mt.PERMISSION_DENIED:N="Ruxsat rad etildi. Brauzer sozlamalarida lokatsiyaga ruxsat bering.";break;case mt.POSITION_UNAVAILABLE:N="Lokatsiya ma'lumotlari mavjud emas.";break;case mt.TIMEOUT:N="Lokatsiya olish vaqti tugadi. Iltimos, qayta urinib ko'ring.";break;default:N="Noma'lum xatolik: "+mt.message}ht(it=>({...it,location:N}))},{enableHighAccuracy:!0,timeout:2e4,maximumAge:6e4})},Kt=()=>{const mt={};return j||(mt.image="Surat yuklang"),G.trim()||(mt.notes="Izoh yozing"),X.lat||(mt.location="Lokatsiyani oling"),zt&&!nt&&(mt.radius="Amaliyot joyidan 500m ichida bo'ling"),ht(mt),Object.keys(mt).length===0},je=async()=>{if(Kt()){vt(!0);try{const mt=new FormData;mt.append("practice_day",h.id),mt.append("text",G),mt.append("location",`POINT(${X.lng} ${X.lat})`),j&&mt.append("image",j),await Et.createReport(mt),a&&a(),d("/student/dashboard")}catch(mt){let N="Xatolik yuz berdi";mt.response?.status===409&&(N="Bugun hisobot allaqachon yuborilgan"),ht({submit:N})}finally{vt(!1)}}},he=new Ll.Icon({iconUrl:"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]});return y?p.jsx(Jf,{children:p.jsx("p",{children:"Yuklanmoqda..."})}):h?p.jsx(Jf,{children:O?p.jsx(Hg,{children:p.jsxs(Zg,{children:[p.jsxs(dc,{children:[p.jsx("h2",{children:"Suratingizni yuklang *"}),p.jsxs(U4,{htmlFor:"image-upload",hasError:tt.image,children:[S?p.jsx(H4,{src:S,alt:"Oldindan ko'rish"}):p.jsxs("div",{children:[p.jsx("div",{children:"+"}),p.jsx("div",{className:"placeholder",children:"Surat yuklash uchun bosing"})]}),p.jsx("input",{id:"image-upload",type:"file",accept:"image/*",onChange:Rt,capture:"environment"})]}),tt.image&&p.jsx(qo,{children:tt.image})]}),p.jsxs(dc,{children:[p.jsx("h2",{children:"Amaliyot davomida bajarilgan ishlar *"}),p.jsx(Z4,{placeholder:"Bugungi kun davomida bajargan ishlaringizni batafsil yozing...",value:G,onChange:mt=>q(mt.target.value),hasError:tt.notes}),tt.notes&&p.jsx(qo,{children:tt.notes}),p.jsxs(P4,{children:[p.jsx(Pg,{onClick:Tt,disabled:ot,children:ot?"Olinmoqda...":"Lokatsiyani olish"}),p.jsx(Pg,{onClick:je,disabled:wt||!X.lat||!nt,children:wt?"Yuborilmoqda...":"Hisobotni jo'natish"})]}),tt.location&&p.jsxs(qo,{children:["⚠ ",tt.location]}),tt.radius&&p.jsxs(qo,{children:["⚠ ",tt.radius]}),tt.submit&&p.jsxs(qo,{children:["⚠ ",tt.submit]}),X.lat&&!tt.radius&&p.jsx("p",{style:{color:"#10b981",marginTop:"10px"},children:"✓ Lokatsiya muvaffaqiyatli olindi"})]})]})}):p.jsx(Hg,{children:p.jsxs(Zg,{children:[p.jsx(dc,{children:p.jsxs(k4,{children:[p.jsxs("h3",{children:["Amaliyot kuni #",h.id,p.jsx(q4,{className:G4(h.status),children:Y4(h.status)})]}),p.jsxs("div",{className:"info-row",children:[p.jsx("strong",{children:"Sana:"}),p.jsx("span",{children:h.date})]}),p.jsxs("div",{className:"info-row",children:[p.jsx("strong",{children:"Mas'ul shaxs:"}),p.jsx("span",{children:h.duty_name})]}),p.jsxs("div",{className:"info-row",children:[p.jsx("strong",{children:"Tashkilot:"}),p.jsx("span",{children:h.org_name})]}),p.jsxs("div",{className:"info-row",children:[p.jsx("strong",{children:"Manzil:"}),p.jsx("span",{children:h.address||"Ko'rsatilmagan"})]}),p.jsxs("div",{className:"info-row",children:[p.jsx("strong",{children:"Vaqt:"}),p.jsxs("span",{children:[h.start_time," - ",h.end_time]})]})]})}),p.jsxs(dc,{children:[zt?.lat&&zt?.lng?p.jsx(B4,{children:p.jsxs(kh,{center:[zt.lat,zt.lng],zoom:15,style:{height:"100%",width:"100%"},children:[p.jsx(Nh,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),p.jsx(Bh,{position:[zt.lat,zt.lng],icon:he,children:p.jsxs(p4,{children:[p.jsx("strong",{children:h.org_name}),p.jsx("br",{}),h.address||"Manzil ko'rsatilmagan"]})}),p.jsx(nx,{center:[zt.lat,zt.lng],radius:500,pathOptions:{color:"#3b82f6",fillOpacity:.1}})]})}):p.jsx("div",{style:{textAlign:"center",padding:"40px",color:"#6b7280"},children:"Lokatsiya ma'lumotlari mavjud emas"}),p.jsx(N4,{onClick:()=>w(!0),children:"Yuklash"})]})]})})}):p.jsx(Jf,{children:p.jsx(qo,{children:"Amaliyot kuni topilmadi"})})}const I4=T.div`
  color: ${a=>a.theme.text};
  padding: 30px 50px;
  transition: all 0.3s ease;
  z-index: 0;

  /* Clean blue gradient that moves across */
  background-size: 200% 100%;
  margin-top: -3px;
  /* Simple animated top border */
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-size: 200% 100%;
  }

  @media (max-width: 1024px) {
    padding: 25px 30px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px 10px;
  }
`,K4=T.h2`
  margin: 0px;
  font-size: 26px;
  font-weight: 600;
  color: ${a=>a.theme.text};

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`,Q4=T.div`
  background-color: ${a=>a.theme.cardBg};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 3px ${a=>a.theme.cardShadow};

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 12px 8px;
    border-radius: 6px;
  }
`,F4=T.div`
  padding: 0px 30px 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${a=>a.theme.inputBorder};

  @media (max-width: 768px) {
    padding: 0px 20px 10px 20px;
  }

  @media (max-width: 480px) {
    padding: 0px 10px 8px 10px;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
    display: flex;
  }
`,J4=T.span`
  font-size: 14px;
  font-weight: 600;
  color: ${a=>a.theme.text};

  @media (max-width: 480px) {
    font-size: 16px;
  }
`,W4=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
  padding: 20px;
  border-bottom: 1px solid ${a=>a.theme.inputBorder};
  align-items: center;
  transition: all 0.2s ease;
  border-radius: 8px;
  margin: 4px 0;

  &:hover {
    background-color: #64646444;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px ${a=>a.theme.cardShadow};
    cursor: pointer;
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 1024px) {
    gap: 12px;
  }

  @media (max-width: 860px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 8px;
    border: 1px solid ${a=>a.theme.inputBorder};
    border-radius: 6px;

    &:hover {
      transform: none;
      box-shadow: 0 2px 4px ${a=>a.theme.cardShadow};
    }
  }
`,t6=T.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: ${a=>a.theme.text};
  padding: 8px 0;

  @media (max-width: 860px) {
    gap: 10px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    font-size: 13px;
    display: grid;
    grid-template-columns: 3fr 1fr;
  }
`,e6=T.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 480px) {
    gap: 2px;
    width: 100%;
  }
`,n6=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${a=>a.theme.text};
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
    gap: 6px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`,i6=T.span`
  font-size: 13px;
  opacity: 0.7;
  display: block;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`,a6=T.span`
  font-weight: 600;
  display: block;
  font-size: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    word-break: break-word;
  }
`,r6=T.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: space-between;
  }
`,o6=T.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #3b82f6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
`;function qg({isDark:a=!1,onThemeChange:c}){const{id:d}=$r(),h=d,x=zn(),[y,b]=z.useState(null),[O,w]=z.useState(!0),[S,E]=z.useState();if(z.useEffect(()=>{localStorage.getItem("preferredTheme")==="dark"&&!a&&c&&c(!0)},[]),z.useEffect(()=>{localStorage.setItem("preferredTheme",a?"dark":"light")},[a]),z.useEffect(()=>{let R=!1;const G=new AbortController;async function q(){w(!0),E(null);try{let X;h?(X=await Et.getGroup(h,{signal:G.signal}),R||b(X)):(X=await Et.getUsers(),R||b({group_number:null,students:X}))}catch(X){R||E(X.message||String(X))}finally{R||w(!1)}}return q(),()=>{R=!0,G.abort()}},[h]),O)return p.jsx("div",{className:"p-4",children:"Loading..."});if(S)return p.jsxs("div",{className:"p-4 text-red-600",children:["Error: ",S]});if(!y)return p.jsx("div",{className:"p-4",children:"No data"});const j=y?.group_number??y?.students?.[0]?.group?.group_number??"";return p.jsx(I4,{children:p.jsxs(Q4,{children:[p.jsxs(F4,{children:[p.jsxs(K4,{children:[h?`${y.group_number}`:j,"-guruh talabalari"]}),p.jsx("div",{style:{display:"flex",alignItems:"center",gap:"10px",height:"100%"},children:p.jsxs(J4,{children:[y.students?.length||0," ta talaba"]})})]}),y.students.length===0?p.jsxs("div",{style:{textAlign:"center",padding:"40px 20px",opacity:.7},children:[p.jsx(Vo,{style:{fontSize:"48px",marginBottom:"16px"}}),p.jsx("p",{children:"Hozircha talabalar mavjud emas"})]}):y.students.map(R=>p.jsx(W4,{onClick:()=>x(`/student/${R.id}`),children:p.jsx(t6,{children:p.jsxs(r6,{children:[p.jsxs(o6,{children:[R.first_name?.[0],R.last_name?.[0]]}),p.jsxs(e6,{children:[p.jsxs(n6,{children:[p.jsx(Lh,{}),p.jsx(i6,{children:"Talaba"})]}),p.jsxs(a6,{children:[R.first_name," ",R.last_name]})]})]})})},R.id))]})})}const ix=Ri`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Ol=Ri`
  from { transform: translateY(-10px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`,ax=Ri`
  from { opacity: 0; }
  to { opacity: 1; }
`,s6=Ri`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,l6=T.div`
  display: flex;
  min-height: calc(100vh - 80px);
  background: ${a=>a.theme.backgroundGradient||a.theme.background};
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  animation: ${ax} 0.3s ease-out;
  z-index: 0;
`,u6=T.div`
  width: 280px;
  background: ${a=>a.theme.cardBg};
  backdrop-filter: blur(10px);
  border-right: 1px solid ${a=>a.theme.border};
  padding: 24px 0;
  position: absolute;
  height: 100%;
  overflow-y: auto;
  z-index: 100;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

  @media (max-width: 1024px) {
    width: 240px;
  }

  @media (max-width: 768px) {
    width: 70px;
    padding: 20px 0;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${a=>a.theme.primary}40;
    border-radius: 10px;
  }
`,c6=T.div`
  flex: 1;
  margin-left: 280px;
  padding: 32px;
  max-width: calc(100vw - 280px);
  z-index: -1;
  @media (max-width: 1024px) {
    margin-left: 240px;
    padding: 24px;
    max-width: calc(100vw - 240px);
  }

  @media (max-width: 768px) {
    margin-left: 70px;
    padding: 16px;
    max-width: calc(100vw - 70px);
  }
`,d6=T.div`
  padding: 0 24px 24px;
  border-bottom: 1px solid ${a=>a.theme.border}40;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    padding: 0 16px 16px;
  }
`,f6=T.h1`
  font-size: 1.75rem;
  font-weight: 700;

  -webkit-background-clip: text;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    justify-content: center;
    font-size: 1.3rem;
  }
`,h6=T.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,p6=T.li`
  margin-bottom: 4px;
`,m6=T.a`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  color: ${a=>a.theme.text}90;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-left: 4px solid transparent;
  gap: 16px;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  overflow: hidden;

  &:hover {
    background: ${a=>a.theme.primary}08;
    color: ${a=>a.theme.primary};
    transform: translateX(4px);

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 3px;
      background: ${a=>a.theme.primary};
    }
  }

  &.active {
    background: ${a=>a.theme.primary}12;
    color: ${a=>a.theme.primary};
    border-left-color: ${a=>a.theme.primary};

    &:after {
      content: "";
      position: absolute;
      right: 24px;
      width: 8px;
      height: 8px;
      background: ${a=>a.theme.primary};
      border-radius: 50%;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    padding: 16px;

    &:after {
      display: none;
    }

    span {
      display: none;
    }
  }
`,g6=T.div`
  font-size: 18px;
  width: 24px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`,x6=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  flex-wrap: wrap;
  gap: 20px;
  animation: ${Ol} 0.4s ease-out;
`,v6=T.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${a=>a.theme.text};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;

  &:before {
    content: "";
    width: 4px;
    height: 24px;
    background: ${a=>a.theme.primary};
    border-radius: 2px;
  }
`,mh=T.button`
  background: linear-gradient(
    135deg,
    ${a=>a.theme.primary},
    ${a=>a.theme.secondary||"#667eea"}
  );
  background-size: 200% 200%;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px ${a=>a.theme.primary}40;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px ${a=>a.theme.primary}60;
    animation: ${ix} 2s ease infinite;
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,y6=T(mh)`
  background: ${a=>a.theme.cardBg};
  color: ${a=>a.theme.text};
  border: 1px solid ${a=>a.theme.border};
  box-shadow: none;

  &:hover {
    background: ${a=>a.theme.background};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`,_6=T.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
  align-items: center;
  animation: ${Ol} 0.5s ease-out;
`,b6=T.div`
  display: flex;
  align-items: center;
  background: ${a=>a.theme.cardBg};
  border: 2px solid ${a=>a.theme.border}60;
  border-radius: 12px;
  padding: 12px 16px;
  flex: 1;
  max-width: 400px;
  gap: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &:focus-within {
    border-color: ${a=>a.theme.primary};
    box-shadow: 0 4px 20px ${a=>a.theme.primary}20;
  }
`,w6=T.input`
  border: none;
  background: transparent;
  color: ${a=>a.theme.text};
  font-size: 15px;
  outline: none;
  width: 100%;

  &::placeholder {
    color: ${a=>a.theme.text}60;
  }
`,S6=T.div`
  background: ${a=>a.theme.cardBg};
  border: 1px solid ${a=>a.theme.border}40;
  border-radius: 16px;
  overflow: hidden;
  overflow-x: auto;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  animation: ${Ol} 0.6s ease-out;
`,z6=T.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 1000px;
`,T6=T.thead`
  background: ${a=>a.theme.background};
`,Wf=T.tr`
  border-bottom: 1px solid ${a=>a.theme.border}20;
  transition: all 0.2s ease;

  &:hover {
    background: ${a=>a.theme.primary}05;
  }

  &:last-child {
    border-bottom: none;
  }
`,E6=T.th.withConfig({shouldForwardProp:a=>a!=="$sortable"})`
  padding: 18px 16px;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  color: ${a=>a.theme.text}90;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: ${a=>a.$sortable?"pointer":"default"};
  user-select: none;
  position: relative;

  &:hover {
    background: ${a=>a.theme.background};

    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background: ${a=>a.theme.primary}40;
    }
  }
`,Yg=T.td`
  padding: 16px;
  font-size: 14px;
  color: ${a=>a.theme.text}80;
`,A6=T.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
  white-space: nowrap;
`,fc=T.button`
  border: none;
  background: ${a=>a.theme.background};
  color: ${a=>a.theme.text}70;
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;

  &.view {
    background: ${a=>a.theme.primary}10;
    color: ${a=>a.theme.primary};

    &:hover {
      background: ${a=>a.theme.primary};
      color: white;
      transform: scale(1.05);
    }
  }

  &.edit {
    background: #3b82f610;
    color: #3b82f6;

    &:hover {
      background: #3b82f6;
      color: white;
      transform: scale(1.05);
    }
  }

  &.delete {
    background: #ef444410;
    color: #ef4444;

    &:hover {
      background: #ef4444;
      color: white;
      transform: scale(1.05);
    }
  }

  &.download {
    background: #10b98110;
    color: #10b981;

    &:hover {
      background: #10b981;
      color: white;
      transform: scale(1.05);
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
  }
`,hc=T.span`
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;

  &.active {
    background: #10b98120;
    color: #10b981;
    border: 1px solid #10b98140;
  }

  &.inactive {
    background: #6b728020;
    color: #6b7280;
    border: 1px solid #6b728040;
  }

  &.pending {
    background: #f59e0b20;
    color: #f59e0b;
    border: 1px solid #f59e0b40;
  }

  &.approved {
    background: #10b98120;
    color: #10b981;
    border: 1px solid #10b98140;
  }

  &.rejected {
    background: #ef444420;
    color: #ef4444;
    border: 1px solid #ef444440;
  }

  &.submitted {
    background: #3b82f620;
    color: #3b82f6;
    border: 1px solid #3b82f640;
  }
`,C6=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-top: 1px solid ${a=>a.theme.border}30;
  background: ${a=>a.theme.background};
`,Gg=T.div`
  font-size: 14px;
  color: ${a=>a.theme.text}60;
  font-weight: 500;
`,j6=T.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,th=T.button`
  padding: 10px 16px;
  border: 1px solid ${a=>a.theme.border};
  background: ${a=>a.theme.cardBg};
  color: ${a=>a.theme.text};
  cursor: pointer;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    border-color: ${a=>a.theme.primary};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.active {
    border-color: ${a=>a.theme.primary};
    box-shadow: 0 4px 12px ${a=>a.theme.primary}40;
  }
`,M6=T.div`
  text-align: center;
  padding: 80px 20px;
  color: ${a=>a.theme.text}60;

  svg {
    font-size: 64px;
    margin-bottom: 20px;
    opacity: 0.5;
  }
`,Vg=T.div`
  text-align: center;
  padding: 60px;
  color: ${a=>a.theme.primary};

  svg {
    animation: ${s6} 1s linear infinite;
  }
`,Xg=T.div`
  padding: 16px 20px;
  border-radius: 12px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
  animation: ${Ol} 0.3s ease-out;

  &.error {
    background: #ef444415;
    color: #ef4444;
    border: 1px solid #ef444440;
  }

  &.success {
    background: #10b98115;
    color: #10b981;
    border: 1px solid #10b98140;
  }

  &.info {
    background: #3b82f615;
    color: #3b82f6;
    border: 1px solid #3b82f640;
  }
`,eh=T.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  padding: 20px;
  animation: ${ax} 0.2s ease-out;
`,nh=T.div`
  background: ${a=>a.theme.cardBg};
  border-radius: 16px;
  padding: 32px;
  width: 100%;
  max-width: 800px;
  max-height: 70vh;
  overflow-y: auto;
  animation: ${Ol} 0.3s ease-out;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 24px;
    max-width: 95%;
  }
`,$g=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,Ig=T.h2`
  margin: 0;
  color: ${a=>a.theme.text};
  font-size: 1.5rem;
  font-weight: 700;
`,Kg=T.button`
  background: ${a=>a.theme.background};
  border: none;
  color: ${a=>a.theme.text}70;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    color: ${a=>a.theme.text};
    background: ${a=>a.theme.border}40;
  }
`,L6=T.div`
  padding: 20px 0;
`,pc=T.div`
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${a=>a.theme.border}30;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`,mc=T.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${a=>a.theme.primary};
  margin: 0 0 16px 0;
  display: flex;
  align-items: center;
  gap: 10px;
`,Zr=T.div`
  margin-bottom: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: flex-start;

  &:last-child {
    margin-bottom: 0;
  }
`,Pr=T.span`
  font-weight: 600;
  color: ${a=>a.theme.text}80;
  min-width: 120px;
`,ua=T.span`
  flex: 1;
  color: ${a=>a.theme.text};
  line-height: 1.6;
`,Qg=T.div`
  background: ${a=>a.theme.background};
  border-radius: 8px;
  padding: 16px;
  margin-top: 8px;
  border: 1px solid ${a=>a.theme.border}30;
  white-space: pre-wrap;
  line-height: 1.6;
`,O6=T.div`
  margin-bottom: 24px;
  position: relative;
`,R6=T.div`
  margin-bottom: 24px;
  position: relative;
`,Fg=T.input`
  background: none;
  width: 100%;
  padding: 14px;
  padding-right: ${a=>a.$hasPasswordToggle?"45px":"14px"};
  border: 2px solid ${a=>a.theme.border}60;
  border-radius: 10px;
  color: ${a=>a.theme.text};
  font-size: 15px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${a=>a.theme.primary};
    box-shadow: 0 4px 20px ${a=>a.theme.primary}20;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,Jg=T.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  color: ${a=>a.theme.text}90;
  font-size: 14px;
`,D6=T.select`
  background: ${a=>a.theme.inputBorder};
  width: 100%;
  padding: 14px;
  border: 2px solid ${a=>a.theme.border}60;
  border-radius: 10px;
  color: ${a=>a.theme.text};
  font-size: 15px;
  transition: all 0.3s ease;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 14px center;
  background-size: 16px;
  padding-right: 40px;

  &:focus {
    outline: none;
    border-color: ${a=>a.theme.primary};
    box-shadow: 0 4px 20px ${a=>a.theme.primary}20;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,k6=T.textarea`
  background: none;
  width: 100%;
  padding: 14px;
  border: 2px solid ${a=>a.theme.border}60;
  border-radius: 10px;
  color: ${a=>a.theme.text};
  font-size: 15px;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  &:focus {
    outline: none;
    border-color: ${a=>a.theme.primary};
    box-shadow: 0 4px 20px ${a=>a.theme.primary}20;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,B6=T.button`
  &:hover {
    color: ${a=>a.theme.primary};
    background: ${a=>a.theme.background};
  }
`,N6=T.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid ${a=>a.theme.border}40;
`,Wg=T.button`
  background: ${a=>a.theme.cardBg};
  color: ${a=>a.theme.text};
  border: 2px solid ${a=>a.theme.border}60;
  padding: 12px 24px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: ${a=>a.theme.background};
    border-color: ${a=>a.theme.primary}60;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,U6=T.div`
  text-align: center;
  padding: 24px;
`,H6=T.div`
  font-size: 64px;
  color: #ef4444;
  margin-bottom: 24px;
  opacity: 0.8;
`,Z6=T.p`
  margin-bottom: 32px;
  color: ${a=>a.theme.text};
  font-size: 16px;
  line-height: 1.6;
`,P6=T.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`,q6=T.button`
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: white;
  border: none;
  padding: 14px 32px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(239, 68, 68, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;T.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${a=>a.theme.border}20;

  div {
    background: linear-gradient(
      90deg,
      ${a=>a.theme.border}40,
      ${a=>a.theme.border}60,
      ${a=>a.theme.border}40
    );
    background-size: 200% 100%;
    animation: ${ix} 1.5s ease-in-out infinite;
    border-radius: 6px;
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }
  }
`;const ih={users:"users_cache",faculties:"faculties_cache",departments:"departments_cache",directions:"directions_cache",groups:"groups_cache",practices:"practices_cache",reports:"reports_cache"},Y6=T.div`
  width: 100%;
  display: flex;
  gap: 16px;
  margin-top: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,t1=T.div`
  flex: 1;
  border: 1px solid ${({theme:a})=>a.border||"#ddd"};
  border-radius: 8px;
  padding: 10px;
`,e1=T.div`
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 14px;
`,G6=T.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 6px;
`;function V6(){zn();const[a,c]=z.useState("users"),[d,h]=z.useState([]),[x,y]=z.useState(!0),[b,O]=z.useState(null),[w,S]=z.useState(null),[E,j]=z.useState(""),[R,G]=z.useState("id"),[q,X]=z.useState("asc"),[W,nt]=z.useState(1),[rt]=z.useState(10),[tt,ht]=z.useState(!1),[wt,vt]=z.useState(!1),[ot,Ut]=z.useState(null),[zt,Rt]=z.useState(null),[Tt,Kt]=z.useState(!1),[je,he]=z.useState(!1),[mt,N]=z.useState({}),[it,at]=z.useState({}),[Mt,lt]=z.useState({}),[M,V]=z.useState(!1),[et,st]=z.useState(null),[ft,ut]=z.useState(!1),[Ct,Qt]=z.useState(!1),[Ft,cn]=z.useState(!1),[en,Me]=z.useState({});function ha($){if(!$)return null;const J=$.split("POINT")[1];if(!J)return null;const[ct,It]=J.replace(/[()]/g,"").trim().split(" ").map(Number);return[It,ct]}const Fn=$=>{Me(J=>({...J,[$]:!J[$]}))},Di=[{id:"users",label:"Foydalanuvchilar",icon:p.jsx(hg,{}),path:"/admin/users"},{id:"faculties",label:"Fakultetlar",icon:p.jsx(wl,{}),path:"/admin/faculties"},{id:"departments",label:"Kafedralar",icon:p.jsx(Mh,{}),path:"/admin/departments"},{id:"directions",label:"Yo'nalishlar",icon:p.jsx(p2,{}),path:"/admin/directions"},{id:"groups",label:"Guruhlar",icon:p.jsx(Sc,{}),path:"/admin/groups"},{id:"practices",label:"Amalyot kunlari",icon:p.jsx(h2,{}),path:"/admin/practices"},{id:"reports",label:"Hisobotlar",icon:p.jsx(Xo,{}),path:"/admin/reports"}],ki=z.useCallback(async()=>{try{const[$,J,ct,It,pe]=await Promise.all([Et.getUsers().catch(()=>[]),Et.getFaculties().catch(()=>[]),Et.getDepartments().catch(()=>[]),Et.getDirections().catch(()=>[]),Et.getGroups().catch(()=>[])]);at({users:Array.isArray($)?$.reduce((Gt,be)=>({...Gt,[be.id]:be}),{}):{},faculties:Array.isArray(J)?J.reduce((Gt,be)=>({...Gt,[be.id]:be}),{}):{},departments:Array.isArray(ct)?ct.reduce((Gt,be)=>({...Gt,[be.id]:be}),{}):{},directions:Array.isArray(It)?It.reduce((Gt,be)=>({...Gt,[be.id]:be}),{}):{},groups:Array.isArray(pe)?pe.reduce((Gt,be)=>({...Gt,[be.id]:be}),{}):{}})}catch{}},[]),Jn=z.useCallback(async($=!1)=>{y(!0),O(null);const J=ih[a],ct=localStorage.getItem(J),It=Mt[a],pe=Date.now();if(!$&&ct&&It&&pe-It<300*1e3)try{const Gt=JSON.parse(ct);h(Array.isArray(Gt)?Gt:[]),y(!1);return}catch{}try{let Gt;switch(a){case"users":Gt=await Et.getUsers();break;case"faculties":Gt=await Et.getFaculties();break;case"departments":Gt=await Et.getDepartments();break;case"directions":Gt=await Et.getDirections();break;case"groups":Gt=await Et.getGroups();break;case"practices":Gt=await Et.getPracticeDays();break;case"reports":Gt=await Et.getMyReports();break;default:Gt=[]}Array.isArray(Gt)?(h(Gt),localStorage.setItem(J,JSON.stringify(Gt)),lt(be=>({...be,[a]:pe}))):h([])}catch(Gt){O(`Failed to fetch ${a}: ${Gt.message}`),h([])}finally{y(!1)}},[a,Mt]);z.useEffect(()=>{Jn(),a!=="reports"&&ki()},[a,Jn,ki]);const Bi=z.useCallback(async $=>{Qt(!0);try{const J=await Et.getMyReport($);st(J),ut(!0)}catch(J){O(`Failed to fetch report details: ${J.message}`)}finally{Qt(!1)}},[]),nr=async $=>{$.preventDefault(),he(!0),O(null);try{if(ot){switch(a){case"users":await Et.updateUser(ot.id,mt);break;case"faculties":await Et.updateFaculty(ot.id,mt);break;case"departments":await Et.updateDepartment(ot.id,mt);break;case"directions":await Et.updateDirection(ot.id,mt);break;case"groups":await Et.updateGroup(ot.id,mt);break;case"practices":await Et.updatePracticeDay(ot.id,mt);break;case"reports":break}S(`${Bn()?.title} muvaffaqiyatli yangilandi!`)}else{switch(a){case"users":await Et.createUser(mt);break;case"faculties":await Et.createFaculty(mt);break;case"departments":await Et.createDepartment(mt);break;case"directions":await Et.createDirection(mt);break;case"groups":await Et.createGroup(mt);break;case"practices":await Et.createPracticeDay(mt);break;case"reports":break}S(`${Bn()?.title} muvaffaqiyatli yaratildi!`)}ht(!1),N({}),Ut(null),localStorage.removeItem(ih[a]),Jn(!0),setTimeout(()=>S(null),3e3)}catch(J){const ct=J.message||"Failed to save";O(ct)}finally{he(!1)}},pa=async()=>{if(zt){Kt(!0);try{switch(a){case"users":await Et.deleteUser(zt,{is_active:!1});break;case"faculties":await Et.deleteFaculty(zt);break;case"departments":await Et.deleteDepartment(zt);break;case"directions":await Et.deleteDirection(zt);break;case"groups":await Et.deleteGroup(zt);break;case"practices":await Et.deletePracticeDay(zt);break;case"reports":break}S(`${Bn()?.title} muvaffaqiyatli o'chirildi!`),vt(!1),Rt(null),localStorage.removeItem(ih[a]),Jn(!0),setTimeout(()=>S(null),3e3)}catch($){O($.message||"Failed to delete")}finally{Kt(!1)}}},Ni=$=>{a!=="reports"&&(Ut($),N($),ht(!0))},Ir=()=>{a!=="reports"&&(Ut(null),N({}),ht(!0))},Kr=$=>{Bi($)},$e=$=>{const J=`
TALABA MA’LUMOTLARI
===================
Talaba ID: ${$.student?.id||"Mavjud emas"}
Ismi: ${$.student?.first_name||"Mavjud emas"}
Familiyasi: ${$.student?.last_name||"Mavjud emas"}
Guruh: ${$.student?.group||"Mavjud emas"}
Yo‘nalish: ${$.student?.direction||"Mavjud emas"}

HISOBOT MA’LUMOTLARI
===================
Amaliyot kuni ID: ${$.practice_day||"Mavjud emas"}
Matn:
${$.text||"Mavjud emas"}

Yaratilgan sana: ${$.created_at?new Date($.created_at).toLocaleString():"Mavjud emas"}
${$.updated_at?`Oxirgi yangilanish: ${new Date($.updated_at).toLocaleString()}`:""}
`,ct=new Blob([J.trim()],{type:"text/plain;charset=utf-8"}),It=URL.createObjectURL(ct),pe=document.createElement("a");pe.href=It,pe.download=`report_${$.id||"unknown"}_${$.student?.last_name||"student"}.txt`,document.body.appendChild(pe),pe.click(),document.body.removeChild(pe),URL.revokeObjectURL(It)},ma=$=>{const{name:J,value:ct,type:It}=$.target;N(pe=>({...pe,[J]:It==="number"?parseInt(ct)||"":ct}))},Bn=()=>{const $={users:{title:"User"},faculties:{title:"Faculty"},departments:{title:"Department"},directions:{title:"Direction"},groups:{title:"Group"},practices:{title:"Practice Day"},reports:{title:"Report"}};return $[a]||$.users};function ir($,J){switch(J){case"student":case"student_data":if($.student_data){const ct=$.student_data;return`${ct.first_name??""} ${ct.last_name??""}`.trim()||"-"}return"-";case"faculty_id":return $.faculty?.name||"-";case"department_id":return $.department?.name||"-";case"direction_id":return $.direction?.name||"-";case"head_id":return $.head?.first_name?`${$.head.first_name} ${$.head.last_name}`:"-";case"vice_id":return $.vice?.first_name?`${$.vice.first_name} ${$.vice.last_name}`:"-";case"attached_teacher":return $.attached_teacher?.first_name?`${$.attached_teacher.first_name} ${$.attached_teacher.last_name}`:"-";case"group":case"group_data":return $.group?.group_number||$.group_data?.group_number||"-";case"teacher":case"teacher_data":if($.teacher_data){const ct=$.teacher_data;return`${ct.first_name??""} ${ct.last_name??""}`.trim()||"-"}return"-";default:return"-"}}const pi=z.useMemo(()=>{if(!E)return d;const $=E.toLowerCase();return d.filter(J=>Object.entries(J).some(([ct,It])=>{if(It==null)return!1;if(typeof It=="object")try{return JSON.stringify(It).toLowerCase().includes($)}catch{return!1}return String(It).toLowerCase().includes($)}))},[d,E]),mi=z.useMemo(()=>[...pi].sort(($,J)=>{let ct=$[R],It=J[R];typeof ct=="object"&&ct!==null&&(ct=ct.name||ct.title||ct.id||""),typeof It=="object"&&It!==null&&(It=It.name||It.title||It.id||"");const pe=String(ct||"").toLowerCase(),Gt=String(It||"").toLowerCase();return pe<Gt?q==="asc"?-1:1:pe>Gt?q==="asc"?1:-1:0}),[pi,R,q]),Wn=Math.ceil(mi.length/rt),Ui=(W-1)*rt,Qr=mi.slice(Ui,Ui+rt),Nn=()=>{const $={users:[{key:"id",label:"ID",sortable:!0},{key:"username",label:"Username",sortable:!0},{key:"first_name",label:"Ism",sortable:!0},{key:"last_name",label:"Familiya",sortable:!0},{key:"role",label:"Roli",sortable:!0},{key:"attached_teacher",label:"O'qituvchi",sortable:!0},{key:"group",label:"Guruh",sortable:!0},{key:"actions",label:"Amallar",sortable:!1}],faculties:[{key:"id",label:"ID",sortable:!0},{key:"name",label:"Nomi",sortable:!0},{key:"head_id",label:"Dekan",sortable:!0},{key:"vice_id",label:"Zam dekan",sortable:!0},{key:"actions",label:"Amallar",sortable:!1}],departments:[{key:"id",label:"ID",sortable:!0},{key:"name",label:"Nomi",sortable:!0},{key:"abbr",label:"Abbr",sortable:!0},{key:"faculty_id",label:"Fakultet",sortable:!0},{key:"head_id",label:"Dekan",sortable:!0},{key:"actions",label:"Amallar",sortable:!1}],directions:[{key:"id",label:"ID",sortable:!0},{key:"name",label:"Nomi",sortable:!0},{key:"department_id",label:"Kafedra",sortable:!0},{key:"actions",label:"Amallar",sortable:!1}],groups:[{key:"id",label:"ID",sortable:!0},{key:"group_number",label:"Guruh",sortable:!0},{key:"direction_id",label:"Yo'nalish",sortable:!0},{key:"actions",label:"Amallar",sortable:!1}],practices:[{key:"id",label:"ID",sortable:!0},{key:"student",label:"Talaba",sortable:!0},{key:"date",label:"Sana",sortable:!0},{key:"org_name",label:"Tashkilot",sortable:!0},{key:"duty_name",label:"Mas’ul shaxs",sortable:!0},{key:"status",label:"Status",sortable:!0},{key:"actions",label:"Amallar",sortable:!1}],reports:[{key:"id",label:"ID",sortable:!0},{key:"created_at",label:"Yaratilgan",sortable:!0},{key:"actions",label:"Amallar",sortable:!1}]};return $[a]||$.users},Ue=()=>{const $=Object.values(it.users||{}).filter(xt=>xt&&xt.id&&xt.first_name).map(xt=>({value:xt.id,label:`${xt.first_name} ${xt.last_name}`,role:xt.role})),J=Object.values(it.users||{}).filter(xt=>xt&&xt.role==="teacher").map(xt=>({value:xt.id,label:`${xt.first_name} ${xt.last_name}`})),ct=Object.values(it.users||{}).filter(xt=>xt&&xt.role==="student").map(xt=>({value:xt.id,label:`${xt.first_name} ${xt.last_name}`})),It=Object.values(it.faculties||{}).filter(xt=>xt&&xt.id).map(xt=>({value:xt.id,label:xt.name})),pe=Object.values(it.departments||{}).filter(xt=>xt&&xt.id).map(xt=>({value:xt.id,label:`${xt.name} (${xt.abbr||"no code"})`})),Gt=Object.values(it.directions||{}).filter(xt=>xt&&xt.id).map(xt=>({value:xt.id,label:xt.name})),be=Object.values(it.groups||{}).filter(xt=>xt&&xt.id).map(xt=>({value:xt.id,label:xt.group_number})),ga={users:[{name:"username",label:"Username",type:"text",required:!0},{name:"first_name",label:"Ism",type:"text",required:!0},{name:"last_name",label:"Familiya",type:"text",required:!0},{name:"role",label:"Roli",type:"select",required:!0,options:[{value:"admin",label:"Admin"},{value:"rector",label:"Rektor"},{value:"vice_rector",label:"Rektor o'rinbosari"},{value:"dean",label:"Dekan"},{value:"deputy_dean",label:"Zam dekan"},{value:"head_of_department",label:"Kafedra mudiri"},{value:"teacher",label:"O'qituvchi"},{value:"student",label:"Talaba"}]},...mt?.role==="student"?[{name:"attached_teacher",label:"O'qituvchi",type:"select",required:!0,options:J},{name:"group",label:"Guruh",type:"select",required:!0,options:be}]:[],{name:"password",label:"Password",type:"password",placeholder:"password",required:!ot}],faculties:[{name:"name",label:"Fakultet nomi",type:"text",required:!0},{name:"head_id",label:"Dekan",type:"select",required:!0,options:$.filter(xt=>xt.role==="dean")},{name:"vice_id",label:"Zam dekan",type:"select",required:!1,options:$.filter(xt=>xt.role==="deputy_dean")}],departments:[{name:"name",label:"Kafedra nomi",type:"text",required:!0},{name:"abbr",label:"Abbreviation",type:"text",required:!1},{name:"faculty_id",label:"Fakultet",type:"select",required:!0,options:It},{name:"head_id",label:"Kafedra mudiri",type:"select",required:!0,options:$.filter(xt=>xt.role==="head_of_department")}],directions:[{name:"name",label:"Yo'nalish nomi",type:"text",required:!0},{name:"department_id",label:"Kafedra",type:"select",required:!0,options:pe}],groups:[{name:"group_number",label:"Guruh nomi",type:"text",required:!0},{name:"direction_id",label:"Yo'nalish",type:"select",required:!0,options:Gt}],practices:[{name:"student",label:"Talaba",type:"select",required:!0,options:ct},{name:"date",label:"Sana",type:"date",required:!0},{name:"duty_name",label:"Mas'ul shaxs",type:"text",required:!0},{name:"org_name",label:"Tashkilot nomi",type:"text",required:!0},{name:"address",label:"Manzil",type:"text",required:!0},{name:"location",label:"Lokatsiya",type:"text",required:!0,placeholder:"POINT(00.0000 00.0000)"},{name:"target",label:"Mo'ljal",type:"textarea",required:!0},{name:"start_time",label:"Boshlanish vaqti",type:"time",required:!0},{name:"end_time",label:"Tugash vaqti",type:"time",required:!0}],reports:[]};return ga[a]||ga.users},Tn=$=>{if(!$)return p.jsx(hc,{className:"inactive",children:"-"});const J=String($).toLowerCase();let ct="inactive";return J==="approved"||J==="completed"?ct="approved":J==="rejected"||J==="cancelled"?ct="rejected":J==="pending"||J==="submitted"?ct="submitted":J==="active"&&(ct="active"),p.jsx(hc,{className:ct,children:J.charAt(0).toUpperCase()+J.slice(1)})},Ie=$=>{if($==null)return p.jsx(hc,{className:"inactive",children:"-"});const J=String($).toLowerCase();let ct="inactive";return J==="active"||J==="true"?ct="active":J==="pending"?ct="pending":(J==="inactive"||J==="false")&&(ct="inactive"),p.jsx(hc,{className:ct,children:J.charAt(0).toUpperCase()+J.slice(1)})},Hi=$=>{R===$?X(q==="asc"?"desc":"asc"):(G($),X("asc"))},ns=$=>R!==$?p.jsx(b2,{}):q==="asc"?p.jsx(_2,{}):p.jsx(y2,{}),is=()=>{const $=Ue();return a==="reports"?null:p.jsxs("form",{onSubmit:nr,children:[$.map(J=>J.type==="password"?p.jsxs(R6,{children:[p.jsxs(Jg,{htmlFor:J.name,children:[J.label,J.required&&" *"]}),p.jsxs("div",{style:{position:"relative"},children:[p.jsx(Fg,{id:J.name,name:J.name,type:en[J.name]?"text":"password",value:mt[J.name]||"",onChange:ma,required:J.required,placeholder:J.placeholder,disabled:J.disabled,$hasPasswordToggle:!0}),p.jsx(B6,{type:"button",onClick:()=>Fn(J.name),style:{position:"absolute",right:"12px",top:"10px",background:"none",border:"none",color:"#666",cursor:"pointer",padding:"8px",fontSize:"18px"},children:en[J.name]?p.jsx(Q1,{}):p.jsx(ph,{})})]})]},J.name):p.jsxs(O6,{children:[p.jsxs(Jg,{htmlFor:J.name,children:[J.label,J.required&&" *"]}),J.type==="select"?p.jsxs(D6,{id:J.name,name:J.name,value:mt[J.name]||"",onChange:ma,required:J.required,disabled:J.disabled||J.options&&J.options.length===0,children:[p.jsxs("option",{value:"",children:[J.label,"ni tanlang"]}),J.options?.map(ct=>p.jsx("option",{value:ct.value,children:ct.label},ct.value))]}):J.type==="textarea"?p.jsx(k6,{id:J.name,name:J.name,value:mt[J.name]||"",onChange:ma,required:J.required,rows:"4",disabled:J.disabled}):p.jsx(Fg,{id:J.name,name:J.name,type:J.type,onChange:ma,required:J.required,placeholder:J.placeholder,disabled:J.disabled,value:mt[J.name]||"",$hasPasswordToggle:!1})]},J.name)),p.jsxs(N6,{children:[p.jsx(Wg,{type:"button",onClick:()=>ht(!1),disabled:je,children:"Bekor qilish"}),p.jsx(mh,{type:"submit",disabled:je,children:je?p.jsxs(p.Fragment,{children:[p.jsx(vl,{style:{animation:"spin 1s linear infinite",marginRight:"8px"}}),"Saqlanmoqda..."]}):p.jsxs(p.Fragment,{children:[p.jsx(x2,{}),ot?"Yangilash":"Yaratish"]})})]})]})},Zi=()=>{if(!et)return null;const $=ha(et.location);return p.jsxs(L6,{children:[p.jsxs(pc,{children:[p.jsxs(mc,{children:[p.jsx(hg,{})," Talaba ma'lumotlari"]}),p.jsxs(Zr,{children:[p.jsxs(Pr,{children:["Talaba (",et.student?.id||"","):"]}),p.jsxs(ua,{children:[et.student?.first_name||""," ",et.student?.last_name||""]})]}),p.jsxs(Zr,{children:[p.jsx(Pr,{children:"Guruh:"}),p.jsx(ua,{children:et.student?.group||"N/A"})]}),p.jsxs(Zr,{children:[p.jsx(Pr,{children:"Yo'nalish:"}),p.jsx(ua,{children:et.student?.direction||"N/A"})]})]}),p.jsxs(pc,{children:[p.jsxs(mc,{children:[p.jsx(Xo,{})," Hisobot tafsilotlari"]}),p.jsxs(Zr,{children:[p.jsx(Pr,{children:"Amaliyot kuni ID:"}),p.jsx(ua,{children:et.practice_day||"N/A"})]}),p.jsxs(Zr,{children:[p.jsx(Pr,{children:"Matn:"}),p.jsx(ua,{children:et.text||"N/A"})]}),p.jsxs(Zr,{children:[p.jsx(Pr,{children:"Yaratilgan vaqt:"}),p.jsx(ua,{children:new Date(et.created_at).toLocaleString()})]}),et.updated_at&&p.jsxs(Zr,{children:[p.jsx(Pr,{children:"Oxirgi yangilangan :"}),p.jsx(ua,{children:new Date(et.updated_at).toLocaleString()})]}),p.jsxs(Y6,{children:[p.jsxs(t1,{children:[p.jsx(e1,{children:"Rasm:"}),et.image?p.jsx(G6,{src:et.image}):p.jsx(ua,{children:"N/A"})]}),p.jsxs(t1,{children:[p.jsx(e1,{children:"Lokatsiya:"}),$?p.jsxs(kh,{center:$,zoom:15,style:{height:"300px",width:"100%",borderRadius:"6px"},children:[p.jsx(Nh,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),p.jsx(Bh,{position:$})]}):p.jsx(ua,{children:"N/A"})]})]})]}),et.content&&p.jsxs(pc,{children:[p.jsxs(mc,{children:[p.jsx(ug,{})," Hisobot mazmuni"]}),p.jsx(Qg,{children:et.content})]}),et.additional_info&&p.jsxs(pc,{children:[p.jsxs(mc,{children:[p.jsx(FaInfoCircle,{})," Qo'shimcha ma'lumot"]}),p.jsx(Qg,{children:et.additional_info})]})]})};return p.jsxs(l6,{children:[p.jsxs(u6,{children:[p.jsx(d6,{children:p.jsxs(f6,{children:[p.jsx(wl,{}),p.jsx("span",{children:"UniAdmin"})]})}),p.jsx(h6,{children:Di.map($=>p.jsx(p6,{children:p.jsxs(m6,{className:a===$.id?"active":"",onClick:()=>{c($.id),nt(1),j(""),V(!1),st(null),ut(!1)},children:[p.jsx(g6,{children:$.icon}),p.jsx("span",{children:$.label})]})},$.id))})]}),p.jsxs(c6,{children:[p.jsxs(x6,{children:[p.jsx(v6,{children:Di.find($=>$.id===a)?.label}),p.jsxs("div",{style:{display:"flex",gap:"12px"},children:[p.jsxs(y6,{onClick:()=>Jn(!0),disabled:x,children:[p.jsx(w2,{}),"Yangilash"]}),a!=="reports"&&p.jsxs(mh,{onClick:Ir,children:[p.jsx(g2,{}),"Yangi qo'shish"]})]})]}),b&&p.jsxs(Xg,{className:"error",children:[p.jsx(bl,{}),b]}),w&&p.jsxs(Xg,{className:"success",children:[p.jsx(K1,{}),w]}),p.jsx(_6,{children:p.jsxs(b6,{children:[p.jsx(v2,{size:16}),p.jsx(w6,{placeholder:"Qidirish...",value:E,onChange:$=>j($.target.value)})]})}),p.jsx(S6,{children:x?p.jsxs(Vg,{children:[p.jsx(vl,{size:32}),p.jsx("div",{style:{marginTop:"16px"},children:"Yuklanmoqda..."})]}):p.jsxs(p.Fragment,{children:[p.jsxs(z6,{children:[p.jsx(T6,{children:p.jsx(Wf,{children:Nn().map($=>p.jsx(E6,{$sortable:$.sortable,onClick:()=>$.sortable&&Hi($.key),children:p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[$.label,$.sortable&&ns($.key)]})},$.key))})}),p.jsx("tbody",{children:Qr.length>0?Qr.map($=>p.jsx(Wf,{children:Nn().map(J=>p.jsx(Yg,{children:J.key==="actions"?p.jsx(A6,{children:a==="reports"?p.jsxs(p.Fragment,{children:[p.jsx(fc,{className:"view",title:"View Details",onClick:()=>Kr($.id),children:p.jsx(ph,{})}),p.jsx(fc,{className:"download",title:"Download Report",onClick:()=>$e($),children:p.jsx(m2,{})})]}):p.jsxs(p.Fragment,{children:[p.jsx(fc,{className:"edit",title:"Edit",onClick:()=>Ni($),children:p.jsx(ug,{})}),p.jsx(fc,{className:"delete",title:"Delete",onClick:()=>{Rt($.id),vt(!0)},children:p.jsx(z2,{})})]})}):J.key==="is_active"||J.key==="status"?a==="reports"?Tn($[J.key]):Ie($[J.key]):J.key==="created_at"?new Date($[J.key]).toLocaleDateString():(()=>{const ct=$[J.key];if(["faculty_id","department_id","direction_id","head_id","vice_id","attached_teacher","student","student_data","group","group_data","teacher_data"].includes(J.key))return ir($,J.key);if(typeof ct=="object"&&ct!==null)try{return ct.name?ct.name:ct.group_number?ct.group_number:ct.first_name&&ct.last_name?`${ct.first_name} ${ct.last_name}`:ct.title?ct.title:JSON.stringify(ct)}catch{return"-"}return ct!=null?String(ct):"-"})()},J.key))},$.id)):p.jsx(Wf,{children:p.jsx(Yg,{colSpan:Nn().length,children:p.jsxs(M6,{children:[p.jsx(bl,{}),p.jsxs("div",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"8px"},children:["Hech qanday ",a," topilmadi"]}),E&&p.jsxs("div",{children:['Hech qanday natija topilmadi "',p.jsx("strong",{children:E}),'"']})]})})})})]}),mi.length>0&&p.jsxs(C6,{children:[p.jsx(Gg,{children:mi.length>0&&p.jsxs(Gg,{children:[Ui+1,"-",Math.min(Ui+rt,mi.length)," ","dan ",mi.length," ko'rsatilmoqda"]})}),p.jsxs(j6,{children:[p.jsx(th,{disabled:W===1,onClick:()=>nt(W-1),children:"Oldingi"}),Array.from({length:Math.min(5,Wn)},($,J)=>{let ct;return Wn<=5||W<=3?ct=J+1:W>=Wn-2?ct=Wn-4+J:ct=W-2+J,p.jsx(th,{className:W===ct?"active":"",onClick:()=>nt(ct),children:ct},ct)}),p.jsx(th,{disabled:W===Wn,onClick:()=>nt(W+1),children:"Keyingi"})]})]})]})})]}),tt&&a!=="reports"&&p.jsx(eh,{onClick:()=>!je&&ht(!1),children:p.jsxs(nh,{onClick:$=>$.stopPropagation(),children:[p.jsxs($g,{children:[p.jsxs(Ig,{children:[ot?"Edit":"Add New"," ",Bn()?.title]}),p.jsx(Kg,{onClick:()=>!je&&ht(!1),disabled:je,children:p.jsx(fg,{})})]}),is()]})}),ft&&p.jsx(eh,{onClick:()=>!Ct&&ut(!1),children:p.jsxs(nh,{onClick:$=>$.stopPropagation(),style:{maxWidth:"800px"},children:[p.jsxs($g,{children:[p.jsxs(Ig,{children:[p.jsx(Xo,{})," Hisobot tafsilotlari"]}),p.jsx(Kg,{onClick:()=>ut(!1),disabled:Ct,children:p.jsx(fg,{})})]}),Ct?p.jsxs(Vg,{children:[p.jsx(vl,{size:32}),p.jsx("div",{style:{marginTop:"16px"},children:"Hisobot tafsilotlari yuklanmoqda..."})]}):Zi()]})}),wt&&a!=="reports"&&p.jsx(eh,{onClick:()=>!Tt&&vt(!1),children:p.jsx(nh,{onClick:$=>$.stopPropagation(),children:p.jsxs(U6,{children:[p.jsx(H6,{children:p.jsx(bl,{})}),p.jsxs(Z6,{children:["Haqiqatan ham buni oʻchirib tashlamoqchimisiz"," ",Bn()?.title.toLowerCase(),"? Bu amalni ortga qaytarib bo‘lmaydi."]}),p.jsxs(P6,{children:[p.jsx(Wg,{onClick:()=>!Tt&&vt(!1),disabled:Tt,children:"Bekor qilish"}),p.jsx(q6,{onClick:pa,disabled:Tt,children:Tt?p.jsxs(p.Fragment,{children:[p.jsx(vl,{style:{animation:"spin 1s linear infinite",marginRight:"8px"}}),"Oʻchirilmoqda..."]}):"Oʻchirish"})]})]})})})]})}const X6="/e-maktab/assets/darklogo-BKQx72Ww.png",$6="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH+SURBVHgBxVeLUQIxEF0cC6ADYwVKBWIF0gFYAVgBZwdYAViBWAF0AB0EKwArWF+4oGHZu+QO53gzby4km92X7waimmDmIbgFLXhPTQIBx/yHrWczIkRwFkIqi2gpAdr4FDl6AkdUjB04AL/VYK3WkmLwa5qKLVfDNBa8V8HZfsrBjKuhHca8FhralI5nTOka3zWcut/jxH4uxq5IgIQzXCt1b+F6ouxmYYNiX/FxT6kDg5MBV1mzNJ9W+DRh+xVdGP8iwI0K7FINSAE3VA8DcAERK7nLFejtbgTKkUnaA7D7CPosRJsVPq3cB+TPs3ap9BMFrES/btCm3RP2V0RJ8CwxuFH6ToTNrFAE61dvlhi8XdB/odhqIqZuE8pN4S6aOcVHPURxBRpKg1Xq9jMwUpSdpFY+vaTKMBd9xwUxzMEgi4ngaomqH/QbxnyXiZgKG8txWNFnFQ0eGE8iAkxEhAtmIqK7Ybu8CddUAmS9DT4d8EXYLsFXtHe8TRmO2mPpWBPhTsnE82xcPBvGZmD/5BJ1W/BTTrVf267iI/2Vxeln3YabDeU+p8OEMSvvAQ9Defp9xPcBnFFNHP0v4DyXu3OcOm0bb5tsj6W7LRTgRRjKHxga7sAelWMGfin1bu+8+1NUH6xntQMyagIFIjJqEnx8bWd0CXD+jjR0Bn4AgyWrrgn4AP8AAAAASUVORK5CYII=",I6="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG/SURBVHgBxZeLUcJAEIZ/GQvACkgHagfpQDrgrACtgLODWAHpQDuADmIHiRVAB7iniXNZ9l6BSb6Zfxzv9pV7AwxnTTqQatIDRmZDOlk6jFkET35RETdC29wT6In0AjdH0nP7V2KPCMycniJ1SLA12oaSLxOTm5HSiUXMfQWohEBLy08n+C3shLfwY+byS2h7R38+NakhrYQYZpS8X22jkDhnEdTwjMAME3OtAjJSjgHwAhYYhiLtSBXC833n6sgxYN+2fFg+O9bH14D5P+MBzEqVDhWFOCrml1t9WojbK8KVXCOOTPAtmE3pK6K+IPnc4b8TbEvBbjvD+aIxB80n/GT4u5QqCPPpoHbE+Q3kOudtFOKPW/4BG0eOrDPQEUWkXFTK8ltHxHYWsWU2dURyPtRVTPKOIlBAFihCWhPcPrc7+UnIbz5OQ3okvTLbPemt7WsCMXojFLqOJcwuKXC+1wcx+W0YGoHuyWXTnRMNa88h34jRjxGDQtw2+z9GW1aRfkaLaxRgF5GSPFiAGa6Up3Y9wL6H9MMkg/savkf/NSxRkr6F9mPbd8SFlHB/ocZIlFMm7yimTN6RI/49IPIDjztaBMP/EPgAAAAASUVORK5CYII=",K6=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  transition: 0.3s ease;

  @media (max-width: 600px) {
    padding: 20px;
    height: auto;
  }
`,Q6=T.h1`
  font-size: 32px;
  color: ${a=>a.theme.cardTitle};
  margin-bottom: 20px;
  transition: 0.3s ease;

  @media (max-width: 600px) {
    font-size: 26px;
  }
`,F6=T.div`
  background: ${a=>a.theme.cardBg};
  width: 450px;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0px 2px 14px ${a=>a.theme.cardShadow};
  display: flex;
  flex-direction: column;
  gap: 25px;
  transition: 0.3s ease;

  @media (max-width: 600px) {
    width: 90%;
    padding: 20px;
  }
`,J6=T.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`,W6=T.div`
  text-align: center;
  margin-top: -10px;
`,t3=T.img`
  width: 100px;
  height: 45px;

  @media (max-width: 600px) {
    width: 100px;
    height: 40px;
    object-fit: contain;
  }
`,e3=T.div`
  margin-top: 10px;
  font-weight: bold;
  font-size: 18px;
  color: ${a=>a.theme.text};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,n3=T.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`,n1=T.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: 6px;
  font-size: 16px;
  background: ${a=>a.theme.inputBg};
  border: 1px solid ${a=>a.theme.inputBorder};
  color: ${a=>a.theme.inputText};
  transition: 0.3s ease;
  border-color: ${a=>a.hasError?"#ef4444":c=>c.theme.inputBorder};

  &:focus {
    border-color: ${a=>a.hasError?"#ef4444":"#007bff"};
    outline: none;
  }
`,i3=T.button`
  width: 100%;
  padding: 12px;
  background: ${a=>a.theme.buttonBg};
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s ease;
  opacity: ${a=>a.loading?.7:1};
  pointer-events: ${a=>a.loading?"none":"all"};

  &:hover {
    background: ${a=>a.theme.buttonHover};
  }
`,a3=T.img`
  width: 26px;
  height: 26px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }
`,r3=T.div`
  position: relative;
  width: 100%;
`,o3=T.div`
  position: absolute;
  right: 12px;
  top: 55%;
  transform: translateY(-50%);
  cursor: pointer;
  color: ${a=>a.theme.inputText};
  font-size: 20px;
`;function s3({dark:a,setDark:c}){const[d,h]=z.useState(""),[x,y]=z.useState(""),[b,O]=z.useState(""),[w,S]=z.useState(!1),[E,j]=z.useState(!1),R=zn(),{login:G,user:q}=V1();z.useEffect(()=>{q&&X(q.role)},[q,R]);const X=nt=>{switch(nt){case"super_user":case"admin":R("/admin/dashboard");break;case"rector":R("/faculties");break;case"dean":case"deputy_dean":R("/departments");break;case"head_of_department":R("/directions");break;case"teacher":R("/students");break;case"student":R("/student/dashboard");break;default:R("/");break}},W=async nt=>{nt.preventDefault(),O(""),S(!0);try{const rt=await G(d,x);rt.success||O(rt.error||"Login yoki parol xato")}catch{O("Server bilan aloqa xatosi")}finally{S(!1)}};return p.jsxs(K6,{children:[p.jsx(Q6,{children:"Tizimga Kirish"}),p.jsxs(F6,{children:[p.jsx(J6,{children:p.jsx(a3,{src:a?$6:I6,onClick:()=>c(!a)})}),p.jsxs(W6,{children:[p.jsx(t3,{src:a?X1:X6,alt:"Elektron Kundalik"}),p.jsx(e3,{children:"ELEKTRON KUNDALIK"})]}),p.jsxs("form",{onSubmit:W,children:[b&&p.jsx("p",{style:{color:"#ef4444",textAlign:"center",marginBottom:"15px"},children:b}),p.jsxs(n3,{children:[p.jsx(n1,{type:"text",placeholder:"Username",value:d,onChange:nt=>h(nt.target.value),required:!0,disabled:w}),p.jsxs(r3,{children:[p.jsx(n1,{type:E?"text":"password",placeholder:"Parol",value:x,onChange:nt=>y(nt.target.value),required:!0,disabled:w,style:{paddingRight:"45px"}}),p.jsx(o3,{onClick:()=>j(!E),children:E?p.jsx(Q1,{}):p.jsx(ph,{})})]}),p.jsx(i3,{type:"submit",disabled:w,children:w?"Kirilmoqda...":"Kirish"})]})]})]})]})}function l3(a){return Ht({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z"}}]})(a)}const u3=T.div`
  color: ${a=>a.theme.text};
  padding: 30px 50px;
  transition: all 0.3s ease;
  background-size: 200% 100%;
  margin-top: -3px;
  position: relative;
  z-index: 0;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-size: 200% 100%;
  }

  @media (max-width: 1024px) {
    padding: 25px 30px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px 10px;
  }
`,c3=T.h2`
  margin: 0px;
  font-size: 26px;
  font-weight: 600;
  color: ${a=>a.theme.text};

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`,d3=T.div`
  background-color: ${a=>a.theme.cardBg};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 3px ${a=>a.theme.cardShadow};

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 12px 8px;
    border-radius: 6px;
  }
`,f3=T.div`
  padding: 0px 30px 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${a=>a.theme.inputBorder};

  @media (max-width: 768px) {
    padding: 0px 20px 10px 20px;
  }

  @media (max-width: 480px) {
    padding: 0px 10px 8px 10px;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
`,h3=T.span`
  font-size: 14px;
  font-weight: 600;
  color: ${a=>a.theme.text};

  @media (max-width: 480px) {
    font-size: 16px;
  }
`,p3=T.div`
  padding: 20px;
  border-bottom: 1px solid ${a=>a.theme.inputBorder};
  transition: all 0.2s ease;
  border-radius: 8px;
  margin: 4px 0;

  &:hover {
    background-color: #64646444;
    cursor: pointer;
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 12px 8px;
    margin: 8px 0;
    border: 1px solid ${a=>a.theme.inputBorder};
    border-radius: 6px;
  }
`,m3=T.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: ${a=>a.theme.text};
  padding: 8px 0;

  @media (max-width: 860px) {
    gap: 10px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    font-size: 13px;
  }
`,g3=T.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  background-color: ${a=>a.$bgColor||"#3B82F6"};
  color: white;
  flex-shrink: 0;
  font-weight: bold;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }
`,x3=T.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 480px) {
    gap: 2px;
    width: 100%;
  }
`,v3=T.span`
  font-size: 13px;
  opacity: 0.7;
  display: block;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`,y3=T.span`
  font-weight: 600;
  display: block;
  font-size: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    word-break: break-word;
  }
`;function i1({isDark:a=!1,onThemeChange:c}){const{id:d}=$r(),h=d,x=a?Ml:jl,y=zn(),[b,O]=z.useState(null),[w,S]=z.useState(!1),[E,j]=z.useState(null);if(z.useEffect(()=>{localStorage.getItem("preferredTheme")==="dark"&&!a&&c&&c(!0)},[]),z.useEffect(()=>{localStorage.setItem("preferredTheme",a?"dark":"light")},[a]),z.useEffect(()=>{let q=!1;async function X(){S(!0),j(null);try{const W=h?await Et.getDirection(h):await Et.getGroups();q||O(W)}catch(W){q||j(W.message||String(W))}finally{q||S(!1)}}return X(),()=>{q=!0}},[h]),w)return p.jsx("div",{className:"p-4",children:"Loading..."});if(E)return p.jsxs("div",{className:"p-4 text-red-600",children:["Error: ",E]});if(!b)return p.jsx("div",{className:"p-4",children:"No data found"});const R=h?b?.groups||[]:b||[],G=Array.isArray(b)&&b.length>0?b[0]?.direction?.name:b?.name;return p.jsx(u3,{children:p.jsxs(d3,{children:[p.jsxs(f3,{children:[p.jsxs(c3,{children:[b.name||G," GURUHLARI"]}),p.jsx("div",{style:{display:"flex",alignItems:"center",gap:"10px",height:"100%"},children:p.jsxs(h3,{children:[R.length," ta guruh"]})})]}),R.length===0&&p.jsx("p",{style:{padding:"20px",color:x.text},children:"Hozircha guruhlar mavjud emas."}),R.map(q=>p.jsx(p3,{onClick:()=>y(`/group/${q.id}`),children:p.jsxs(m3,{children:[p.jsx(g3,{$bgColor:"#3B82F6",children:p.jsx(l3,{})}),p.jsxs(x3,{children:[p.jsx(v3,{children:"Guruh"}),p.jsxs(y3,{children:[q.group_number," guruhi"]})," "]})]})},q.id))]})})}const pt={SUPER_USER:"super_user",ADMIN:"admin",RECTOR:"rector",DEAN:"dean",DEPUTY_DEAN:"deputy_dean",HEAD_OF_DEPARTMENT:"head_of_department",TEACHER:"teacher",STUDENT:"student"};function _3(){const[a,c]=z.useState(()=>localStorage.getItem("preferredTheme")==="dark");z.useEffect(()=>{localStorage.setItem("preferredTheme",a?"dark":"light")},[a]);const h=hi().pathname==="/";return p.jsx(W_,{theme:a?Ml:jl,children:p.jsxs(J2,{children:[!h&&p.jsx(P2,{dark:a,setDark:c}),p.jsxs(by,{children:[p.jsx(We,{path:"/",element:p.jsx(s3,{dark:a,setDark:c})}),p.jsx(We,{path:"/student/dashboard",element:p.jsx(Sn,{allowedRoles:[pt.STUDENT,pt.ADMIN,pt.SUPER_USER],children:p.jsx(Hb,{})})}),p.jsx(We,{path:"/student/practise/create/:practiceDayId",element:p.jsx(Sn,{allowedRoles:[pt.STUDENT],children:p.jsx($4,{})})}),p.jsx(We,{path:"/student/:id",element:p.jsx(Sn,{allowedRoles:[pt.TEACHER,pt.HEAD_OF_DEPARTMENT,pt.DEPUTY_DEAN,pt.DEAN,pt.RECTOR,pt.ADMIN,pt.SUPER_USER],children:p.jsx(Fb,{})})}),p.jsx(We,{path:"/student/practise/:id",element:p.jsx(Sn,{allowedRoles:[pt.TEACHER,pt.HEAD_OF_DEPARTMENT,pt.DEPUTY_DEAN,pt.DEAN,pt.RECTOR,pt.ADMIN,pt.SUPER_USER],children:p.jsx(L4,{})})}),p.jsx(We,{path:"/faculties",element:p.jsx(Sn,{allowedRoles:[pt.RECTOR,pt.ADMIN,pt.SUPER_USER],children:p.jsx(sb,{})})}),p.jsx(We,{path:"/faculty/:id",element:p.jsx(Sn,{allowedRoles:[pt.RECTOR,pt.DEAN,pt.DEPUTY_DEAN,pt.ADMIN,pt.SUPER_USER],children:p.jsx(Tg,{})})}),p.jsx(We,{path:"/departments",element:p.jsx(Sn,{allowedRoles:[pt.RECTOR,pt.DEAN,pt.DEPUTY_DEAN,pt.ADMIN,pt.SUPER_USER],children:p.jsx(Tg,{})})}),p.jsx(We,{path:"/department/:id",element:p.jsx(Sn,{allowedRoles:[pt.HEAD_OF_DEPARTMENT,pt.DEPUTY_DEAN,pt.DEAN,pt.RECTOR,pt.ADMIN,pt.SUPER_USER],children:p.jsx(Sg,{})})}),p.jsx(We,{path:"/directions",element:p.jsx(Sn,{allowedRoles:[pt.HEAD_OF_DEPARTMENT,pt.DEPUTY_DEAN,pt.DEAN,pt.RECTOR,pt.ADMIN,pt.SUPER_USER],children:p.jsx(Sg,{})})}),p.jsx(We,{path:"/direction/:id",element:p.jsx(Sn,{allowedRoles:[pt.HEAD_OF_DEPARTMENT,pt.DEPUTY_DEAN,pt.DEAN,pt.RECTOR,pt.ADMIN,pt.SUPER_USER],children:p.jsx(i1,{})})}),p.jsx(We,{path:"/groups",element:p.jsx(Sn,{allowedRoles:[pt.HEAD_OF_DEPARTMENT,pt.DEPUTY_DEAN,pt.DEAN,pt.RECTOR,pt.ADMIN,pt.SUPER_USER],children:p.jsx(i1,{})})}),p.jsx(We,{path:"/group/:id",element:p.jsx(Sn,{allowedRoles:[pt.TEACHER,pt.HEAD_OF_DEPARTMENT,pt.DEPUTY_DEAN,pt.DEAN,pt.RECTOR,pt.ADMIN,pt.SUPER_USER],children:p.jsx(qg,{})})}),p.jsx(We,{path:"/students",element:p.jsx(Sn,{allowedRoles:[pt.TEACHER,pt.HEAD_OF_DEPARTMENT,pt.DEPUTY_DEAN,pt.DEAN,pt.RECTOR,pt.ADMIN,pt.SUPER_USER],children:p.jsx(qg,{})})}),p.jsx(We,{path:"/admin/dashboard",element:p.jsx(Sn,{allowedRoles:[pt.ADMIN,pt.SUPER_USER],children:p.jsx(V6,{})})}),p.jsx(We,{path:"*",element:p.jsx(gl,{to:"/",replace:!0})})]})]})})}function b3(){return p.jsx(n2,{children:p.jsx(_3,{})})}Mv.createRoot(document.getElementById("root")).render(p.jsx(Gy,{children:p.jsx(b3,{})}));
