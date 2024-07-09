import{L as oe,S as bl,i as wl,s as vl,f as Nl,m as Tl,t as Sl,g as xl,h as kl,o as El,e as Vr,k as _l,a as jr,b as $l,C as Mr,n as Il,d as Al,c as ho}from"./index.87605a94.js";import{N as Ol}from"./NodeUI.527be130.js";import{c as Dl}from"./NodeUtil.7fbdab54.js";import{b as po}from"./MathUtil.63f01330.js";var Yo={};(function(){var n;function t(i){var h=0;return function(){return h<i.length?{done:!1,value:i[h++]}:{done:!0}}}var e=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,h,d){return i==Array.prototype||i==Object.prototype||(i[h]=d.value),i};function r(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof oe=="object"&&oe];for(var h=0;h<i.length;++h){var d=i[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var s=r(this);function a(i,h){if(h)t:{var d=s;i=i.split(".");for(var g=0;g<i.length-1;g++){var N=i[g];if(!(N in d))break t;d=d[N]}i=i[i.length-1],g=d[i],h=h(g),h!=g&&h!=null&&e(d,i,{configurable:!0,writable:!0,value:h})}}a("Symbol",function(i){function h(S){if(this instanceof h)throw new TypeError("Symbol is not a constructor");return new d(g+(S||"")+"_"+N++,S)}function d(S,T){this.h=S,e(this,"description",{configurable:!0,writable:!0,value:T})}if(i)return i;d.prototype.toString=function(){return this.h};var g="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",N=0;return h}),a("Symbol.iterator",function(i){if(i)return i;i=Symbol("Symbol.iterator");for(var h="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),d=0;d<h.length;d++){var g=s[h[d]];typeof g=="function"&&typeof g.prototype[i]!="function"&&e(g.prototype,i,{configurable:!0,writable:!0,value:function(){return o(t(this))}})}return i});function o(i){return i={next:i},i[Symbol.iterator]=function(){return this},i}function u(i){var h=typeof Symbol!="undefined"&&Symbol.iterator&&i[Symbol.iterator];return h?h.call(i):{next:t(i)}}function l(i){if(!(i instanceof Array)){i=u(i);for(var h,d=[];!(h=i.next()).done;)d.push(h.value);i=d}return i}var c=typeof Object.assign=="function"?Object.assign:function(i,h){for(var d=1;d<arguments.length;d++){var g=arguments[d];if(g)for(var N in g)Object.prototype.hasOwnProperty.call(g,N)&&(i[N]=g[N])}return i};a("Object.assign",function(i){return i||c});var f=typeof Object.create=="function"?Object.create:function(i){function h(){}return h.prototype=i,new h},p;if(typeof Object.setPrototypeOf=="function")p=Object.setPrototypeOf;else{var y;t:{var b={a:!0},v={};try{v.__proto__=b,y=v.a;break t}catch{}y=!1}p=y?function(i,h){if(i.__proto__=h,i.__proto__!==h)throw new TypeError(i+" is not extensible");return i}:null}var x=p;function E(i,h){if(i.prototype=f(h.prototype),i.prototype.constructor=i,x)x(i,h);else for(var d in h)if(d!="prototype")if(Object.defineProperties){var g=Object.getOwnPropertyDescriptor(h,d);g&&Object.defineProperty(i,d,g)}else i[d]=h[d];i.ya=h.prototype}function A(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function M(i){if(i.m)throw new TypeError("Generator is already running");i.m=!0}A.prototype.u=function(i){this.i=i};function L(i,h){i.l={ma:h,na:!0},i.h=i.s||i.v}A.prototype.return=function(i){this.l={return:i},this.h=this.v};function D(i,h,d){return i.h=d,{value:h}}function C(i){this.h=new A,this.i=i}function B(i,h){M(i.h);var d=i.h.j;return d?U(i,"return"in d?d.return:function(g){return{value:g,done:!0}},h,i.h.return):(i.h.return(h),F(i))}function U(i,h,d,g){try{var N=h.call(i.h.j,d);if(!(N instanceof Object))throw new TypeError("Iterator result "+N+" is not an object");if(!N.done)return i.h.m=!1,N;var S=N.value}catch(T){return i.h.j=null,L(i.h,T),F(i)}return i.h.j=null,g.call(i.h,S),F(i)}function F(i){for(;i.h.h;)try{var h=i.i(i.h);if(h)return i.h.m=!1,{value:h.value,done:!1}}catch(d){i.h.i=void 0,L(i.h,d)}if(i.h.m=!1,i.h.l){if(h=i.h.l,i.h.l=null,h.na)throw h.ma;return{value:h.return,done:!0}}return{value:void 0,done:!0}}function R(i){this.next=function(h){return M(i.h),i.h.j?h=U(i,i.h.j.next,h,i.h.u):(i.h.u(h),h=F(i)),h},this.throw=function(h){return M(i.h),i.h.j?h=U(i,i.h.j.throw,h,i.h.u):(L(i.h,h),h=F(i)),h},this.return=function(h){return B(i,h)},this[Symbol.iterator]=function(){return this}}function j(i){function h(g){return i.next(g)}function d(g){return i.throw(g)}return new Promise(function(g,N){function S(T){T.done?g(T.value):Promise.resolve(T.value).then(h,d).then(S,N)}S(i.next())})}function z(i){return j(new R(new C(i)))}a("Promise",function(i){function h(T){this.i=0,this.j=void 0,this.h=[],this.u=!1;var $=this.l();try{T($.resolve,$.reject)}catch(O){$.reject(O)}}function d(){this.h=null}function g(T){return T instanceof h?T:new h(function($){$(T)})}if(i)return i;d.prototype.i=function(T){if(this.h==null){this.h=[];var $=this;this.j(function(){$.m()})}this.h.push(T)};var N=s.setTimeout;d.prototype.j=function(T){N(T,0)},d.prototype.m=function(){for(;this.h&&this.h.length;){var T=this.h;this.h=[];for(var $=0;$<T.length;++$){var O=T[$];T[$]=null;try{O()}catch(V){this.l(V)}}}this.h=null},d.prototype.l=function(T){this.j(function(){throw T})},h.prototype.l=function(){function T(V){return function(H){O||(O=!0,V.call($,H))}}var $=this,O=!1;return{resolve:T(this.I),reject:T(this.m)}},h.prototype.I=function(T){if(T===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(T instanceof h)this.L(T);else{t:switch(typeof T){case"object":var $=T!=null;break t;case"function":$=!0;break t;default:$=!1}$?this.F(T):this.s(T)}},h.prototype.F=function(T){var $=void 0;try{$=T.then}catch(O){this.m(O);return}typeof $=="function"?this.M($,T):this.s(T)},h.prototype.m=function(T){this.v(2,T)},h.prototype.s=function(T){this.v(1,T)},h.prototype.v=function(T,$){if(this.i!=0)throw Error("Cannot settle("+T+", "+$+"): Promise already settled in state"+this.i);this.i=T,this.j=$,this.i===2&&this.K(),this.H()},h.prototype.K=function(){var T=this;N(function(){if(T.D()){var $=s.console;typeof $!="undefined"&&$.error(T.j)}},1)},h.prototype.D=function(){if(this.u)return!1;var T=s.CustomEvent,$=s.Event,O=s.dispatchEvent;return typeof O=="undefined"?!0:(typeof T=="function"?T=new T("unhandledrejection",{cancelable:!0}):typeof $=="function"?T=new $("unhandledrejection",{cancelable:!0}):(T=s.document.createEvent("CustomEvent"),T.initCustomEvent("unhandledrejection",!1,!0,T)),T.promise=this,T.reason=this.j,O(T))},h.prototype.H=function(){if(this.h!=null){for(var T=0;T<this.h.length;++T)S.i(this.h[T]);this.h=null}};var S=new d;return h.prototype.L=function(T){var $=this.l();T.T($.resolve,$.reject)},h.prototype.M=function(T,$){var O=this.l();try{T.call($,O.resolve,O.reject)}catch(V){O.reject(V)}},h.prototype.then=function(T,$){function O(W,K){return typeof W=="function"?function(J){try{V(W(J))}catch(Q){H(Q)}}:K}var V,H,Y=new h(function(W,K){V=W,H=K});return this.T(O(T,V),O($,H)),Y},h.prototype.catch=function(T){return this.then(void 0,T)},h.prototype.T=function(T,$){function O(){switch(V.i){case 1:T(V.j);break;case 2:$(V.j);break;default:throw Error("Unexpected state: "+V.i)}}var V=this;this.h==null?S.i(O):this.h.push(O),this.u=!0},h.resolve=g,h.reject=function(T){return new h(function($,O){O(T)})},h.race=function(T){return new h(function($,O){for(var V=u(T),H=V.next();!H.done;H=V.next())g(H.value).T($,O)})},h.all=function(T){var $=u(T),O=$.next();return O.done?g([]):new h(function(V,H){function Y(J){return function(Q){W[J]=Q,K--,K==0&&V(W)}}var W=[],K=0;do W.push(void 0),K++,g(O.value).T(Y(W.length-1),H),O=$.next();while(!O.done)})},h});function X(i,h){i instanceof String&&(i+="");var d=0,g=!1,N={next:function(){if(!g&&d<i.length){var S=d++;return{value:h(S,i[S]),done:!1}}return g=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}a("Array.prototype.keys",function(i){return i||function(){return X(this,function(h){return h})}}),a("Array.prototype.fill",function(i){return i||function(h,d,g){var N=this.length||0;for(0>d&&(d=Math.max(0,N+d)),(g==null||g>N)&&(g=N),g=Number(g),0>g&&(g=Math.max(0,N+g)),d=Number(d||0);d<g;d++)this[d]=h;return this}});function q(i){return i||Array.prototype.fill}a("Int8Array.prototype.fill",q),a("Uint8Array.prototype.fill",q),a("Uint8ClampedArray.prototype.fill",q),a("Int16Array.prototype.fill",q),a("Uint16Array.prototype.fill",q),a("Int32Array.prototype.fill",q),a("Uint32Array.prototype.fill",q),a("Float32Array.prototype.fill",q),a("Float64Array.prototype.fill",q),a("Object.is",function(i){return i||function(h,d){return h===d?h!==0||1/h===1/d:h!==h&&d!==d}}),a("Array.prototype.includes",function(i){return i||function(h,d){var g=this;g instanceof String&&(g=String(g));var N=g.length;for(d=d||0,0>d&&(d=Math.max(d+N,0));d<N;d++){var S=g[d];if(S===h||Object.is(S,h))return!0}return!1}}),a("String.prototype.includes",function(i){return i||function(h,d){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(h instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(h,d||0)!==-1}});var tt=this||self;function et(i,h){i=i.split(".");var d=tt;i[0]in d||typeof d.execScript=="undefined"||d.execScript("var "+i[0]);for(var g;i.length&&(g=i.shift());)i.length||h===void 0?d[g]&&d[g]!==Object.prototype[g]?d=d[g]:d=d[g]={}:d[g]=h}function pt(i){var h;t:{if((h=tt.navigator)&&(h=h.userAgent))break t;h=""}return h.indexOf(i)!=-1}var vt=Array.prototype.map?function(i,h){return Array.prototype.map.call(i,h,void 0)}:function(i,h){for(var d=i.length,g=Array(d),N=typeof i=="string"?i.split(""):i,S=0;S<d;S++)S in N&&(g[S]=h.call(void 0,N[S],S,i));return g},Lt={},$t=null;function we(i){var h=i.length,d=3*h/4;d%3?d=Math.floor(d):"=.".indexOf(i[h-1])!=-1&&(d="=.".indexOf(i[h-2])!=-1?d-2:d-1);var g=new Uint8Array(d),N=0;return aa(i,function(S){g[N++]=S}),N!==d?g.subarray(0,N):g}function aa(i,h){function d(O){for(;g<i.length;){var V=i.charAt(g++),H=$t[V];if(H!=null)return H;if(!/^[\s\xa0]*$/.test(V))throw Error("Unknown base64 encoding at char: "+V)}return O}oa();for(var g=0;;){var N=d(-1),S=d(0),T=d(64),$=d(64);if($===64&&N===-1)break;h(N<<2|S>>4),T!=64&&(h(S<<4&240|T>>2),$!=64&&h(T<<6&192|$))}}function oa(){if(!$t){$t={};for(var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),h=["+/=","+/","-_=","-_.","-_"],d=0;5>d;d++){var g=i.concat(h[d].split(""));Lt[d]=g;for(var N=0;N<g.length;N++){var S=g[N];$t[S]===void 0&&($t[S]=N)}}}}var br=typeof Uint8Array!="undefined",ia=!(pt("Trident")||pt("MSIE"))&&typeof tt.btoa=="function";function ua(i){if(!ia){var h;h===void 0&&(h=0),oa(),h=Lt[h];for(var d=Array(Math.floor(i.length/3)),g=h[64]||"",N=0,S=0;N<i.length-2;N+=3){var T=i[N],$=i[N+1],O=i[N+2],V=h[T>>2];T=h[(T&3)<<4|$>>4],$=h[($&15)<<2|O>>6],O=h[O&63],d[S++]=V+T+$+O}switch(V=0,O=g,i.length-N){case 2:V=i[N+1],O=h[(V&15)<<2]||g;case 1:i=i[N],d[S]=h[i>>2]+h[(i&3)<<4|V>>4]+O+g}return d.join("")}for(h="";10240<i.length;)h+=String.fromCharCode.apply(null,i.subarray(0,10240)),i=i.subarray(10240);return h+=String.fromCharCode.apply(null,i),btoa(h)}var la=RegExp("[-_.]","g");function $u(i){switch(i){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function ca(i){if(!ia)return we(i);la.test(i)&&(i=i.replace(la,$u)),i=atob(i);for(var h=new Uint8Array(i.length),d=0;d<i.length;d++)h[d]=i.charCodeAt(d);return h}var ha;function wr(){return ha||(ha=new Uint8Array(0))}var sn={},Iu=typeof Uint8Array.prototype.slice=="function",bt=0,Ct=0;function pa(i){var h=0>i;i=Math.abs(i);var d=i>>>0;i=Math.floor((i-d)/4294967296),h&&(d=u(fa(d,i)),h=d.next().value,i=d.next().value,d=h),bt=d>>>0,Ct=i>>>0}var Au=typeof BigInt=="function";function fa(i,h){return h=~h,i?i=~i+1:h+=1,[i,h]}function da(i,h){this.i=i>>>0,this.h=h>>>0}function ma(i){if(!i)return ya||(ya=new da(0,0));if(!/^-?\d+$/.test(i))return null;if(16>i.length)pa(Number(i));else if(Au)i=BigInt(i),bt=Number(i&BigInt(4294967295))>>>0,Ct=Number(i>>BigInt(32)&BigInt(4294967295));else{var h=+(i[0]==="-");Ct=bt=0;for(var d=i.length,g=h,N=(d-h)%6+h;N<=d;g=N,N+=6)g=Number(i.slice(g,N)),Ct*=1e6,bt=1e6*bt+g,4294967296<=bt&&(Ct+=bt/4294967296|0,bt%=4294967296);h&&(h=u(fa(bt,Ct)),i=h.next().value,h=h.next().value,bt=i,Ct=h)}return new da(bt,Ct)}var ya;function ga(i,h){return Error("Invalid wire type: "+i+" (at position "+h+")")}function vr(){return Error("Failed to read varint, encoding is invalid.")}function ba(i,h){return Error("Tried to read past the end of the data "+h+" > "+i)}function Ie(){throw Error("Invalid UTF8")}function wa(i,h){return h=String.fromCharCode.apply(null,h),i==null?h:i+h}var $n=void 0,Nr,Ou=typeof TextDecoder!="undefined",va,Du=typeof TextEncoder!="undefined",Na;function Ta(i){if(i!==sn)throw Error("illegal external caller")}function an(i,h){if(Ta(h),this.V=i,i!=null&&i.length===0)throw Error("ByteString should be constructed with non-empty values")}function Tr(){return Na||(Na=new an(null,sn))}function Sa(i){Ta(sn);var h=i.V;return h=h==null||br&&h!=null&&h instanceof Uint8Array?h:typeof h=="string"?ca(h):null,h==null?h:i.V=h}function Cu(i){if(typeof i=="string")return{buffer:ca(i),C:!1};if(Array.isArray(i))return{buffer:new Uint8Array(i),C:!1};if(i.constructor===Uint8Array)return{buffer:i,C:!1};if(i.constructor===ArrayBuffer)return{buffer:new Uint8Array(i),C:!1};if(i.constructor===an)return{buffer:Sa(i)||wr(),C:!0};if(i instanceof Uint8Array)return{buffer:new Uint8Array(i.buffer,i.byteOffset,i.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function xa(i,h){this.i=null,this.m=!1,this.h=this.j=this.l=0,Sr(this,i,h)}function Sr(i,h,d){d=d===void 0?{}:d,i.S=d.S===void 0?!1:d.S,h&&(h=Cu(h),i.i=h.buffer,i.m=h.C,i.l=0,i.j=i.i.length,i.h=i.l)}xa.prototype.reset=function(){this.h=this.l};function Ae(i,h){if(i.h=h,h>i.j)throw ba(i.j,h)}function on(i){var h=i.i,d=i.h,g=h[d++],N=g&127;if(g&128&&(g=h[d++],N|=(g&127)<<7,g&128&&(g=h[d++],N|=(g&127)<<14,g&128&&(g=h[d++],N|=(g&127)<<21,g&128&&(g=h[d++],N|=g<<28,g&128&&h[d++]&128&&h[d++]&128&&h[d++]&128&&h[d++]&128&&h[d++]&128)))))throw vr();return Ae(i,d),N}function ka(i,h){if(0>h)throw Error("Tried to read a negative byte length: "+h);var d=i.h,g=d+h;if(g>i.j)throw ba(h,i.j-d);return i.h=g,d}var Ea=[];function xr(){this.h=[]}xr.prototype.length=function(){return this.h.length},xr.prototype.end=function(){var i=this.h;return this.h=[],i};function _a(i,h,d){for(;0<d||127<h;)i.h.push(h&127|128),h=(h>>>7|d<<25)>>>0,d>>>=7;i.h.push(h)}function Oe(i,h){for(;127<h;)i.h.push(h&127|128),h>>>=7;i.h.push(h)}function kr(i,h){if(Ea.length){var d=Ea.pop();Sr(d,i,h),i=d}else i=new xa(i,h);this.h=i,this.j=this.h.h,this.i=this.l=-1,this.setOptions(h)}kr.prototype.setOptions=function(i){i=i===void 0?{}:i,this.ca=i.ca===void 0?!1:i.ca},kr.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function $a(i){var h=i.h;if(h.h==h.j)return!1;i.j=i.h.h;var d=on(i.h)>>>0;if(h=d>>>3,d&=7,!(0<=d&&5>=d))throw ga(d,i.j);if(1>h)throw Error("Invalid field number: "+h+" (at position "+i.j+")");return i.l=h,i.i=d,!0}function In(i){switch(i.i){case 0:if(i.i!=0)In(i);else t:{i=i.h;for(var h=i.h,d=h+10,g=i.i;h<d;)if((g[h++]&128)===0){Ae(i,h);break t}throw vr()}break;case 1:i=i.h,Ae(i,i.h+8);break;case 2:i.i!=2?In(i):(h=on(i.h)>>>0,i=i.h,Ae(i,i.h+h));break;case 5:i=i.h,Ae(i,i.h+4);break;case 3:h=i.l;do{if(!$a(i))throw Error("Unmatched start-group tag: stream EOF");if(i.i==4){if(i.l!=h)throw Error("Unmatched end-group tag");break}In(i)}while(1);break;default:throw ga(i.i,i.j)}}var An=[];function Fu(){this.j=[],this.i=0,this.h=new xr}function Ke(i,h){h.length!==0&&(i.j.push(h),i.i+=h.length)}function Pu(i,h){if(h=h.R){Ke(i,i.h.end());for(var d=0;d<h.length;d++)Ke(i,Sa(h[d])||wr())}}var le=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function De(i,h){return le?i[le]|=h:i.A!==void 0?i.A|=h:(Object.defineProperties(i,{A:{value:h,configurable:!0,writable:!0,enumerable:!1}}),h)}function Ia(i,h){le?i[le]&&(i[le]&=~h):i.A!==void 0&&(i.A&=~h)}function yt(i){var h;return le?h=i[le]:h=i.A,h==null?0:h}function Qt(i,h){le?i[le]=h:i.A!==void 0?i.A=h:Object.defineProperties(i,{A:{value:h,configurable:!0,writable:!0,enumerable:!1}})}function Er(i){return De(i,1),i}function Lu(i,h){Qt(h,(i|0)&-51)}function On(i,h){Qt(h,(i|18)&-41)}var _r={};function Dn(i){return i!==null&&typeof i=="object"&&!Array.isArray(i)&&i.constructor===Object}var un,Aa=[];Qt(Aa,23),un=Object.freeze(Aa);function $r(i){if(yt(i.o)&2)throw Error("Cannot mutate an immutable Message")}function Ir(i){var h=i.length;(h=h?i[h-1]:void 0)&&Dn(h)?h.g=1:(h={},i.push((h.g=1,h)))}function Oa(i){var h=i.i+i.G;return i.B||(i.B=i.o[h]={})}function qt(i,h){return h===-1?null:h>=i.i?i.B?i.B[h]:void 0:i.o[h+i.G]}function te(i,h,d,g){$r(i),ln(i,h,d,g)}function ln(i,h,d,g){i.j&&(i.j=void 0),h>=i.i||g?Oa(i)[h]=d:(i.o[h+i.G]=d,(i=i.B)&&h in i&&delete i[h])}function Ar(i,h,d,g){var N=qt(i,h);Array.isArray(N)||(N=un);var S=yt(N);if(S&1||Er(N),g)S&2||De(N,2),d&1||Object.freeze(N);else{g=!(d&2);var T=S&2;d&1||!T?g&&S&16&&!T&&Ia(N,16):(N=Er(Array.prototype.slice.call(N)),ln(i,h,N))}return N}function Or(i,h){var d=qt(i,h),g=d==null?d:typeof d=="number"||d==="NaN"||d==="Infinity"||d==="-Infinity"?Number(d):void 0;return g!=null&&g!==d&&ln(i,h,g),g}function Da(i,h,d,g,N){i.h||(i.h={});var S=i.h[d],T=Ar(i,d,3,N);if(!S){var $=T;S=[];var O=!!(yt(i.o)&16);T=!!(yt($)&2);var V=$;!N&&T&&($=Array.prototype.slice.call($));for(var H=T,Y=0;Y<$.length;Y++){var W=$[Y],K=h,J=!1;if(J=J===void 0?!1:J,W=Array.isArray(W)?new K(W):J?new K:void 0,W!==void 0){K=W.o;var Q=J=yt(K);T&&(Q|=2),O&&(Q|=16),Q!=J&&Qt(K,Q),K=Q,H=H||!!(2&K),S.push(W)}}return i.h[d]=S,O=yt($),h=O|33,h=H?h&-9:h|8,O!=h&&(H=$,Object.isFrozen(H)&&(H=Array.prototype.slice.call(H)),Qt(H,h),$=H),V!==$&&ln(i,d,$),(N||g&&T)&&De(S,2),g&&Object.freeze(S),S}return N||(N=Object.isFrozen(S),g&&!N?Object.freeze(S):!g&&N&&(S=Array.prototype.slice.call(S),i.h[d]=S)),S}function Cn(i,h,d){var g=!!(yt(i.o)&2);if(h=Da(i,h,d,g,g),i=Ar(i,d,3,g),!(g||yt(i)&8)){for(g=0;g<h.length;g++){if(d=h[g],yt(d.o)&2){var N=Ba(d,!1);N.j=d}else N=d;d!==N&&(h[g]=N,i[g]=N.o)}De(i,8)}return h}function ee(i,h,d){if(d!=null&&typeof d!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof d+": "+d);te(i,h,d)}function Ca(i,h,d,g,N){$r(i);var S=Da(i,d,h,!1,!1);return d=g!=null?g:new d,i=Ar(i,h,2,!1),N!=null?(S.splice(N,0,d),i.splice(N,0,d.o)):(S.push(d),i.push(d.o)),d.C()&&Ia(i,8),d}function Fn(i,h){return i==null?h:i}function ne(i,h,d){return d=d===void 0?0:d,Fn(Or(i,h),d)}var Pn;function Ru(i){switch(typeof i){case"number":return isFinite(i)?i:String(i);case"object":if(i)if(Array.isArray(i)){if((yt(i)&128)!==0)return i=Array.prototype.slice.call(i),Ir(i),i}else{if(br&&i!=null&&i instanceof Uint8Array)return ua(i);if(i instanceof an){var h=i.V;return h==null?"":typeof h=="string"?h:i.V=ua(h)}}}return i}function Fa(i,h,d,g){if(i!=null){if(Array.isArray(i))i=Dr(i,h,d,g!==void 0);else if(Dn(i)){var N={},S;for(S in i)N[S]=Fa(i[S],h,d,g);i=N}else i=h(i,g);return i}}function Dr(i,h,d,g){var N=yt(i);g=g?!!(N&16):void 0,i=Array.prototype.slice.call(i);for(var S=0;S<i.length;S++)i[S]=Fa(i[S],h,d,g);return d(N,i),i}function Bu(i){return i.ja===_r?i.toJSON():Ru(i)}function zu(i,h){i&128&&Ir(h)}function Pa(i,h,d){if(d=d===void 0?On:d,i!=null){if(br&&i instanceof Uint8Array)return i.length?new an(new Uint8Array(i),sn):Tr();if(Array.isArray(i)){var g=yt(i);return g&2?i:h&&!(g&32)&&(g&16||g===0)?(Qt(i,g|2),i):(i=Dr(i,Pa,g&4?On:d,!0),h=yt(i),h&4&&h&2&&Object.freeze(i),i)}return i.ja===_r?Ra(i):i}}function La(i,h,d,g,N,S,T){if(i=i.h&&i.h[d]){if(g=yt(i),g&2?g=i:(S=vt(i,Ra),On(g,S),Object.freeze(S),g=S),$r(h),T=g==null?un:Er([]),g!=null){for(S=!!g.length,i=0;i<g.length;i++){var $=g[i];S=S&&!(yt($.o)&2),T[i]=$.o}S=(S?8:0)|1,i=yt(T),(i&S)!==S&&(Object.isFrozen(T)&&(T=Array.prototype.slice.call(T)),Qt(T,i|S)),h.h||(h.h={}),h.h[d]=g}else h.h&&(h.h[d]=void 0);ln(h,d,T,N)}else te(h,d,Pa(g,S,T),N)}function Ra(i){return yt(i.o)&2||(i=Ba(i,!0),De(i.o,2)),i}function Ba(i,h){var d=i.o,g=[];De(g,16);var N=i.constructor.h;if(N&&g.push(N),N=i.B,N){g.length=d.length,g.fill(void 0,g.length,d.length);var S={};g[g.length-1]=S}(yt(d)&128)!==0&&Ir(g),h=h||i.C()?On:Lu,S=i.constructor,Pn=g,g=new S(g),Pn=void 0,i.R&&(g.R=i.R.slice()),S=!!(yt(d)&16);for(var T=N?d.length-1:d.length,$=0;$<T;$++)La(i,g,$-i.G,d[$],!1,S,h);if(N)for(var O in N)La(i,g,+O,N[O],!0,S,h);return g}function Rt(i,h,d){i==null&&(i=Pn),Pn=void 0;var g=this.constructor.i||0,N=0<g,S=this.constructor.h,T=!1;if(i==null){i=S?[S]:[];var $=48,O=!0;N&&(g=0,$|=128),Qt(i,$)}else{if(!Array.isArray(i)||S&&S!==i[0])throw Error();var V=$=De(i,0);if((O=(16&V)!==0)&&((T=(32&V)!==0)||(V|=32)),N){if(128&V)g=0;else if(0<i.length){var H=i[i.length-1];if(Dn(H)&&"g"in H){g=0,V|=128,delete H.g;var Y=!0,W;for(W in H){Y=!1;break}Y&&i.pop()}}}else if(128&V)throw Error();$!==V&&Qt(i,V)}this.G=(S?0:-1)-g,this.h=void 0,this.o=i;t:{if(S=this.o.length,g=S-1,S&&(S=this.o[g],Dn(S))){this.B=S,this.i=g-this.G;break t}h!==void 0&&-1<h?(this.i=Math.max(h,g+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!N&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(d){h=O&&!T&&!0,N=this.i;var K;for(O=0;O<d.length;O++)T=d[O],T<N?(T+=this.G,(g=i[T])?za(g,h):i[T]=un):(K||(K=Oa(this)),(g=K[T])?za(g,h):K[T]=un)}}Rt.prototype.toJSON=function(){return Dr(this.o,Bu,zu)},Rt.prototype.C=function(){return!!(yt(this.o)&2)};function za(i,h){if(Array.isArray(i)){var d=yt(i),g=1;!h||d&2||(g|=16),(d&g)!==g&&Qt(i,d|g)}}Rt.prototype.ja=_r,Rt.prototype.toString=function(){return this.o.toString()};function Va(i,h,d){if(d){var g={},N;for(N in d){var S=d[N],T=S.qa;T||(g.J=S.wa||S.oa.W,S.ia?(g.aa=Ka(S.ia),T=function($){return function(O,V,H){return $.J(O,V,H,$.aa)}}(g)):S.ka?(g.Z=Wa(S.da.P,S.ka),T=function($){return function(O,V,H){return $.J(O,V,H,$.Z)}}(g)):T=g.J,S.qa=T),T(h,i,S.da),g={J:g.J,aa:g.aa,Z:g.Z}}}Pu(h,i)}var Ln=Symbol();function ja(i,h,d){return i[Ln]||(i[Ln]=function(g,N){return h(g,N,d)})}function Ma(i){var h=i[Ln];if(!h){var d=Fr(i);h=function(g,N){return qa(g,N,d)},i[Ln]=h}return h}function Vu(i){var h=i.ia;if(h)return Ma(h);if(h=i.va)return ja(i.da.P,h,i.ka)}function ju(i){var h=Vu(i),d=i.da,g=i.oa.U;return h?function(N,S){return g(N,S,d,h)}:function(N,S){return g(N,S,d)}}function Ha(i,h){var d=i[h];return typeof d=="function"&&d.length===0&&(d=d(),i[h]=d),Array.isArray(d)&&(hn in d||cn in d||0<d.length&&typeof d[0]=="function")?d:void 0}function Ua(i,h,d,g,N,S){h.P=i[0];var T=1;if(i.length>T&&typeof i[T]!="number"){var $=i[T++];d(h,$)}for(;T<i.length;){d=i[T++];for(var O=T+1;O<i.length&&typeof i[O]!="number";)O++;switch($=i[T++],O-=T,O){case 0:g(h,d,$);break;case 1:(O=Ha(i,T))?(T++,N(h,d,$,O)):g(h,d,$,i[T++]);break;case 2:O=T++,O=Ha(i,O),N(h,d,$,O,i[T++]);break;case 3:S(h,d,$,i[T++],i[T++],i[T++]);break;case 4:S(h,d,$,i[T++],i[T++],i[T++],i[T++]);break;default:throw Error("unexpected number of binary field arguments: "+O)}}return h}var Rn=Symbol();function Ka(i){var h=i[Rn];if(!h){var d=Cr(i);h=function(g,N){return Ga(g,N,d)},i[Rn]=h}return h}function Wa(i,h){var d=i[Rn];return d||(d=function(g,N){return Va(g,N,h)},i[Rn]=d),d}var cn=Symbol();function Mu(i,h){i.push(h)}function Hu(i,h,d){i.push(h,d.W)}function Uu(i,h,d,g){var N=Ka(g),S=Cr(g).P,T=d.W;i.push(h,function($,O,V){return T($,O,V,S,N)})}function Ku(i,h,d,g,N,S){var T=Wa(g,S),$=d.W;i.push(h,function(O,V,H){return $(O,V,H,g,T)})}function Cr(i){var h=i[cn];return h||(h=Ua(i,i[cn]=[],Mu,Hu,Uu,Ku),hn in i&&cn in i&&(i.length=0),h)}var hn=Symbol();function Wu(i,h){i[0]=h}function qu(i,h,d,g){var N=d.U;i[h]=g?function(S,T,$){return N(S,T,$,g)}:N}function Gu(i,h,d,g,N){var S=d.U,T=Ma(g),$=Fr(g).P;i[h]=function(O,V,H){return S(O,V,H,$,T,N)}}function Xu(i,h,d,g,N,S,T){var $=d.U,O=ja(g,N,S);i[h]=function(V,H,Y){return $(V,H,Y,g,O,T)}}function Fr(i){var h=i[hn];return h||(h=Ua(i,i[hn]={},Wu,qu,Gu,Xu),hn in i&&cn in i&&(i.length=0),h)}function qa(i,h,d){for(;$a(h)&&h.i!=4;){var g=h.l,N=d[g];if(!N){var S=d[0];S&&(S=S[g])&&(N=d[g]=ju(S))}if(!N||!N(h,i,g)){N=h,g=i,S=N.j,In(N);var T=N;if(!T.ca){if(N=T.h.h-S,T.h.h=S,T=T.h,N==0)N=Tr();else{if(S=ka(T,N),T.S&&T.m)N=T.i.subarray(S,S+N);else{T=T.i;var $=S;N=S+N,N=$===N?wr():Iu?T.slice($,N):new Uint8Array(T.subarray($,N))}N=N.length==0?Tr():new an(N,sn)}(S=g.R)?S.push(N):g.R=[N]}}}return i}function Ga(i,h,d){for(var g=d.length,N=g%2==1,S=N?1:0;S<g;S+=2)(0,d[S+1])(h,i,d[S]);Va(i,h,N?d[0]:void 0)}function pn(i,h){return{U:i,W:h}}var Gt=pn(function(i,h,d){if(i.i!==5)return!1;i=i.h;var g=i.i,N=i.h,S=g[N],T=g[N+1],$=g[N+2];return g=g[N+3],Ae(i,i.h+4),T=(S<<0|T<<8|$<<16|g<<24)>>>0,i=2*(T>>31)+1,S=T>>>23&255,T&=8388607,te(h,d,S==255?T?NaN:1/0*i:S==0?i*Math.pow(2,-149)*T:i*Math.pow(2,S-150)*(T+Math.pow(2,23))),!0},function(i,h,d){if(h=Or(h,d),h!=null){Oe(i.h,8*d+5),i=i.h;var g=+h;g===0?0<1/g?bt=Ct=0:(Ct=0,bt=2147483648):isNaN(g)?(Ct=0,bt=2147483647):(g=(d=0>g?-2147483648:0)?-g:g,34028234663852886e22<g?(Ct=0,bt=(d|2139095040)>>>0):11754943508222875e-54>g?(g=Math.round(g/Math.pow(2,-149)),Ct=0,bt=(d|g)>>>0):(h=Math.floor(Math.log(g)/Math.LN2),g*=Math.pow(2,-h),g=Math.round(8388608*g),16777216<=g&&++h,Ct=0,bt=(d|h+127<<23|g&8388607)>>>0)),d=bt,i.h.push(d>>>0&255),i.h.push(d>>>8&255),i.h.push(d>>>16&255),i.h.push(d>>>24&255)}}),Yu=pn(function(i,h,d){if(i.i!==0)return!1;var g=i.h,N=0,S=i=0,T=g.i,$=g.h;do{var O=T[$++];N|=(O&127)<<S,S+=7}while(32>S&&O&128);for(32<S&&(i|=(O&127)>>4),S=3;32>S&&O&128;S+=7)O=T[$++],i|=(O&127)<<S;if(Ae(g,$),128>O)g=N>>>0,O=i>>>0,(i=O&2147483648)&&(g=~g+1>>>0,O=~O>>>0,g==0&&(O=O+1>>>0)),g=4294967296*O+(g>>>0);else throw vr();return te(h,d,i?-g:g),!0},function(i,h,d){h=qt(h,d),h!=null&&(typeof h=="string"&&ma(h),h!=null&&(Oe(i.h,8*d),typeof h=="number"?(i=i.h,pa(h),_a(i,bt,Ct)):(d=ma(h),_a(i.h,d.i,d.h))))}),Ju=pn(function(i,h,d){return i.i!==0?!1:(te(h,d,on(i.h)),!0)},function(i,h,d){if(h=qt(h,d),h!=null&&h!=null)if(Oe(i.h,8*d),i=i.h,d=h,0<=d)Oe(i,d);else{for(h=0;9>h;h++)i.h.push(d&127|128),d>>=7;i.h.push(1)}}),Xa=pn(function(i,h,d){if(i.i!==2)return!1;var g=on(i.h)>>>0;i=i.h;var N=ka(i,g);if(i=i.i,Ou){var S=i,T;(T=Nr)||(T=Nr=new TextDecoder("utf-8",{fatal:!0})),i=N+g,S=N===0&&i===S.length?S:S.subarray(N,i);try{var $=T.decode(S)}catch(Y){if($n===void 0){try{T.decode(new Uint8Array([128]))}catch{}try{T.decode(new Uint8Array([97])),$n=!0}catch{$n=!1}}throw!$n&&(Nr=void 0),Y}}else{$=N,g=$+g,N=[];for(var O=null,V,H;$<g;)V=i[$++],128>V?N.push(V):224>V?$>=g?Ie():(H=i[$++],194>V||(H&192)!==128?($--,Ie()):N.push((V&31)<<6|H&63)):240>V?$>=g-1?Ie():(H=i[$++],(H&192)!==128||V===224&&160>H||V===237&&160<=H||((S=i[$++])&192)!==128?($--,Ie()):N.push((V&15)<<12|(H&63)<<6|S&63)):244>=V?$>=g-2?Ie():(H=i[$++],(H&192)!==128||(V<<28)+(H-144)>>30!==0||((S=i[$++])&192)!==128||((T=i[$++])&192)!==128?($--,Ie()):(V=(V&7)<<18|(H&63)<<12|(S&63)<<6|T&63,V-=65536,N.push((V>>10&1023)+55296,(V&1023)+56320))):Ie(),8192<=N.length&&(O=wa(O,N),N.length=0);$=wa(O,N)}return te(h,d,$),!0},function(i,h,d){if(h=qt(h,d),h!=null){var g=!1;if(g=g===void 0?!1:g,Du){if(g&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(h))throw Error("Found an unpaired surrogate");h=(va||(va=new TextEncoder)).encode(h)}else{for(var N=0,S=new Uint8Array(3*h.length),T=0;T<h.length;T++){var $=h.charCodeAt(T);if(128>$)S[N++]=$;else{if(2048>$)S[N++]=$>>6|192;else{if(55296<=$&&57343>=$){if(56319>=$&&T<h.length){var O=h.charCodeAt(++T);if(56320<=O&&57343>=O){$=1024*($-55296)+O-56320+65536,S[N++]=$>>18|240,S[N++]=$>>12&63|128,S[N++]=$>>6&63|128,S[N++]=$&63|128;continue}else T--}if(g)throw Error("Found an unpaired surrogate");$=65533}S[N++]=$>>12|224,S[N++]=$>>6&63|128}S[N++]=$&63|128}}h=N===S.length?S:S.subarray(0,N)}Oe(i.h,8*d+2),Oe(i.h,h.length),Ke(i,i.h.end()),Ke(i,h)}}),Ya=pn(function(i,h,d,g,N){if(i.i!==2)return!1;h=Ca(h,d,g),d=i.h.j,g=on(i.h)>>>0;var S=i.h.h+g,T=S-d;if(0>=T&&(i.h.j=S,N(h,i,void 0,void 0,void 0),T=S-i.h.h),T)throw Error("Message parsing ended unexpectedly. Expected to read "+(g+" bytes, instead read "+(g-T)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return i.h.h=S,i.h.j=d,!0},function(i,h,d,g,N){if(h=Cn(h,g,d),h!=null)for(g=0;g<h.length;g++){var S=i;Oe(S.h,8*d+2);var T=S.h.end();Ke(S,T),T.push(S.i),S=T,N(h[g],i),T=i;var $=S.pop();for($=T.i+T.h.length()-$;127<$;)S.push($&127|128),$>>>=7,T.i++;S.push($),T.i++}});function Pr(i){return function(h,d){t:{if(An.length){var g=An.pop();g.setOptions(d),Sr(g.h,h,d),h=g}else h=new kr(h,d);try{var N=Fr(i),S=qa(new N.P,h,N);break t}finally{N=h.h,N.i=null,N.m=!1,N.l=0,N.j=0,N.h=0,N.S=!1,h.l=-1,h.i=-1,100>An.length&&An.push(h)}S=void 0}return S}}function Lr(i){return function(){var h=new Fu;Ga(this,h,Cr(i)),Ke(h,h.h.end());for(var d=new Uint8Array(h.i),g=h.j,N=g.length,S=0,T=0;T<N;T++){var $=g[T];d.set($,S),S+=$.length}return h.j=[d],d}}function We(i){Rt.call(this,i)}E(We,Rt);var Ja=[We,1,Ju,2,Gt,3,Xa,4,Xa];We.prototype.l=Lr(Ja);function Rr(i){Rt.call(this,i,-1,Zu)}E(Rr,Rt),Rr.prototype.addClassification=function(i,h){return Ca(this,1,We,i,h),this};var Zu=[1],Za=Pr([Rr,1,Ya,Ja]);function qe(i){Rt.call(this,i)}E(qe,Rt);var Qa=[qe,1,Gt,2,Gt,3,Gt,4,Gt,5,Gt];qe.prototype.l=Lr(Qa);function to(i){Rt.call(this,i,-1,Qu)}E(to,Rt);var Qu=[1],eo=Pr([to,1,Ya,Qa]);function Bn(i){Rt.call(this,i)}E(Bn,Rt);var no=[Bn,1,Gt,2,Gt,3,Gt,4,Gt,5,Gt,6,Yu],tl=Pr(no);Bn.prototype.l=Lr(no);function ro(i,h,d){if(d=i.createShader(d===0?i.VERTEX_SHADER:i.FRAGMENT_SHADER),i.shaderSource(d,h),i.compileShader(d),!i.getShaderParameter(d,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+i.getShaderInfoLog(d));return d}function so(i){return Cn(i,We,1).map(function(h){var d=qt(h,1);return{index:d==null?0:d,score:ne(h,2),label:qt(h,3)!=null?Fn(qt(h,3),""):void 0,displayName:qt(h,4)!=null?Fn(qt(h,4),""):void 0}})}function ao(i){return{x:ne(i,1),y:ne(i,2),z:ne(i,3),visibility:Or(i,4)!=null?ne(i,4):void 0}}function oo(i){return i.map(function(h){return Cn(eo(h),qe,1).map(ao)})}function Br(i,h){this.i=i,this.h=h,this.m=0}function io(i,h,d){return el(i,h),typeof i.h.canvas.transferToImageBitmap=="function"?Promise.resolve(i.h.canvas.transferToImageBitmap()):d?Promise.resolve(i.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(i.h.canvas):(i.j===void 0&&(i.j=document.createElement("canvas")),new Promise(function(g){i.j.height=i.h.canvas.height,i.j.width=i.h.canvas.width,i.j.getContext("2d",{}).drawImage(i.h.canvas,0,0,i.h.canvas.width,i.h.canvas.height),g(i.j)}))}function el(i,h){var d=i.h;if(i.s===void 0){var g=ro(d,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),N=ro(d,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),S=d.createProgram();if(d.attachShader(S,g),d.attachShader(S,N),d.linkProgram(S),!d.getProgramParameter(S,d.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+d.getProgramInfoLog(S));g=i.s=S,d.useProgram(g),N=d.getUniformLocation(g,"sampler0"),i.l={O:d.getAttribLocation(g,"aVertex"),N:d.getAttribLocation(g,"aTex"),xa:N},i.v=d.createBuffer(),d.bindBuffer(d.ARRAY_BUFFER,i.v),d.enableVertexAttribArray(i.l.O),d.vertexAttribPointer(i.l.O,2,d.FLOAT,!1,0,0),d.bufferData(d.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),d.STATIC_DRAW),d.bindBuffer(d.ARRAY_BUFFER,null),i.u=d.createBuffer(),d.bindBuffer(d.ARRAY_BUFFER,i.u),d.enableVertexAttribArray(i.l.N),d.vertexAttribPointer(i.l.N,2,d.FLOAT,!1,0,0),d.bufferData(d.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),d.STATIC_DRAW),d.bindBuffer(d.ARRAY_BUFFER,null),d.uniform1i(N,0)}g=i.l,d.useProgram(i.s),d.canvas.width=h.width,d.canvas.height=h.height,d.viewport(0,0,h.width,h.height),d.activeTexture(d.TEXTURE0),i.i.bindTexture2d(h.glName),d.enableVertexAttribArray(g.O),d.bindBuffer(d.ARRAY_BUFFER,i.v),d.vertexAttribPointer(g.O,2,d.FLOAT,!1,0,0),d.enableVertexAttribArray(g.N),d.bindBuffer(d.ARRAY_BUFFER,i.u),d.vertexAttribPointer(g.N,2,d.FLOAT,!1,0,0),d.bindFramebuffer(d.DRAW_FRAMEBUFFER?d.DRAW_FRAMEBUFFER:d.FRAMEBUFFER,null),d.clearColor(0,0,0,0),d.clear(d.COLOR_BUFFER_BIT),d.colorMask(!0,!0,!0,!0),d.drawArrays(d.TRIANGLE_FAN,0,4),d.disableVertexAttribArray(g.O),d.disableVertexAttribArray(g.N),d.bindBuffer(d.ARRAY_BUFFER,null),i.i.bindTexture2d(0)}function nl(i){this.h=i}var rl=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function sl(i,h){return h+i}function uo(i,h){window[i]=h}function al(i){var h=document.createElement("script");return h.setAttribute("src",i),h.setAttribute("crossorigin","anonymous"),new Promise(function(d){h.addEventListener("load",function(){d()},!1),h.addEventListener("error",function(){d()},!1),document.body.appendChild(h)})}function ol(){return z(function(i){switch(i.h){case 1:return i.s=2,D(i,WebAssembly.instantiate(rl),4);case 4:i.h=3,i.s=0;break;case 2:return i.s=0,i.l=null,i.return(!1);case 3:return i.return(!0)}})}function zr(i){if(this.h=i,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=i&&i.locateFile||sl,typeof window=="object")var h=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location!="undefined")h=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=h,i.options){h=u(Object.keys(i.options));for(var d=h.next();!d.done;d=h.next()){d=d.value;var g=i.options[d].default;g!==void 0&&(this.l[d]=typeof g=="function"?g():g)}}}n=zr.prototype,n.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function il(i){var h,d,g,N,S,T,$,O,V,H,Y;return z(function(W){switch(W.h){case 1:return i.ga?(h=i.h.files===void 0?[]:typeof i.h.files=="function"?i.h.files(i.l):i.h.files,D(W,ol(),2)):W.return();case 2:if(d=W.i,typeof window=="object")return uo("createMediapipeSolutionsWasm",{locateFile:i.locateFile}),uo("createMediapipeSolutionsPackedAssets",{locateFile:i.locateFile}),T=h.filter(function(K){return K.data!==void 0}),$=h.filter(function(K){return K.data===void 0}),O=Promise.all(T.map(function(K){var J=zn(i,K.url);if(K.path!==void 0){var Q=K.path;J=J.then(function(ht){return i.overrideFile(Q,ht),Promise.resolve(ht)})}return J})),V=Promise.all($.map(function(K){return K.simd===void 0||K.simd&&d||!K.simd&&!d?al(i.locateFile(K.url,i.ha)):Promise.resolve()})).then(function(){var K,J,Q;return z(function(ht){if(ht.h==1)return K=window.createMediapipeSolutionsWasm,J=window.createMediapipeSolutionsPackedAssets,Q=i,D(ht,K(J),2);Q.i=ht.i,ht.h=0})}),H=function(){return z(function(K){return i.h.graph&&i.h.graph.url?K=D(K,zn(i,i.h.graph.url),0):(K.h=0,K=void 0),K})}(),D(W,Promise.all([V,O,H]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return g=h.filter(function(K){return K.simd===void 0||K.simd&&d||!K.simd&&!d}).map(function(K){return i.locateFile(K.url,i.ha)}),importScripts.apply(null,l(g)),N=i,D(W,createMediapipeSolutionsWasm(Module),6);case 6:N.i=W.i,i.m=new OffscreenCanvas(1,1),i.i.canvas=i.m,S=i.i.GL.createContext(i.m,{antialias:!1,alpha:!1,ua:typeof WebGL2RenderingContext!="undefined"?2:1}),i.i.GL.makeContextCurrent(S),W.h=4;break;case 7:if(i.m=document.createElement("canvas"),Y=i.m.getContext("webgl2",{}),!Y&&(Y=i.m.getContext("webgl",{}),!Y))return alert("Failed to create WebGL canvas context when passing video frame."),W.return();i.K=Y,i.i.canvas=i.m,i.i.createContext(i.m,!0,!0,{});case 4:i.j=new i.i.SolutionWasm,i.ga=!1,W.h=0}})}function ul(i){var h,d,g,N,S,T,$,O;return z(function(V){if(V.h==1){if(i.h.graph&&i.h.graph.url&&i.fa===i.h.graph.url)return V.return();if(i.u=!0,!i.h.graph||!i.h.graph.url){V.h=2;return}return i.fa=i.h.graph.url,D(V,zn(i,i.h.graph.url),3)}for(V.h!=2&&(h=V.i,i.j.loadGraph(h)),d=u(Object.keys(i.D)),g=d.next();!g.done;g=d.next())N=g.value,i.j.overrideFile(N,i.D[N]);if(i.D={},i.h.listeners)for(S=u(i.h.listeners),T=S.next();!T.done;T=S.next())$=T.value,pl(i,$);O=i.l,i.l={},i.setOptions(O),V.h=0})}n.reset=function(){var i=this;return z(function(h){i.j&&(i.j.reset(),i.s={},i.v={}),h.h=0})},n.setOptions=function(i,h){var d=this;if(h=h||this.h.options){for(var g=[],N=[],S={},T=u(Object.keys(i)),$=T.next();!$.done;S={X:S.X,Y:S.Y},$=T.next())if($=$.value,!($ in this.l&&this.l[$]===i[$])){this.l[$]=i[$];var O=h[$];O!==void 0&&(O.onChange&&(S.X=O.onChange,S.Y=i[$],g.push(function(V){return function(){var H;return z(function(Y){if(Y.h==1)return D(Y,V.X(V.Y),2);H=Y.i,H===!0&&(d.u=!0),Y.h=0})}}(S))),O.graphOptionXref&&($=Object.assign({},{calculatorName:"",calculatorIndex:0},O.graphOptionXref,{valueNumber:O.type===1?i[$]:0,valueBoolean:O.type===0?i[$]:!1,valueString:O.type===2?i[$]:""}),N.push($)))}(g.length!==0||N.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(N),this.F=(this.F===void 0?[]:this.F).concat(g))}};function ll(i){var h,d,g,N,S,T,$;return z(function(O){switch(O.h){case 1:if(!i.u)return O.return();if(!i.F){O.h=2;break}h=u(i.F),d=h.next();case 3:if(d.done){O.h=5;break}return g=d.value,D(O,g(),4);case 4:d=h.next(),O.h=3;break;case 5:i.F=void 0;case 2:if(i.H){for(N=new i.i.GraphOptionChangeRequestList,S=u(i.H),T=S.next();!T.done;T=S.next())$=T.value,N.push_back($);i.j.changeOptions(N),N.delete(),i.H=void 0}i.u=!1,O.h=0}})}n.initialize=function(){var i=this;return z(function(h){return h.h==1?D(h,il(i),2):h.h!=3?D(h,ul(i),3):D(h,ll(i),0)})};function zn(i,h){var d,g;return z(function(N){return h in i.L?N.return(i.L[h]):(d=i.locateFile(h,""),g=fetch(d).then(function(S){return S.arrayBuffer()}),i.L[h]=g,N.return(g))})}n.overrideFile=function(i,h){this.j?this.j.overrideFile(i,h):this.D[i]=h},n.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},n.send=function(i,h){var d=this,g,N,S,T,$,O,V,H,Y;return z(function(W){switch(W.h){case 1:return d.h.inputs?(g=1e3*(h==null?performance.now():h),D(W,d.I,2)):W.return();case 2:return D(W,d.initialize(),3);case 3:for(N=new d.i.PacketDataList,S=u(Object.keys(i)),T=S.next();!T.done;T=S.next())if($=T.value,O=d.h.inputs[$]){t:{var K=i[$];switch(O.type){case"video":var J=d.s[O.stream];if(J||(J=new Br(d.i,d.K),d.s[O.stream]=J),J.m===0&&(J.m=J.i.createTexture()),typeof HTMLVideoElement!="undefined"&&K instanceof HTMLVideoElement)var Q=K.videoWidth,ht=K.videoHeight;else typeof HTMLImageElement!="undefined"&&K instanceof HTMLImageElement?(Q=K.naturalWidth,ht=K.naturalHeight):(Q=K.width,ht=K.height);ht={glName:J.m,width:Q,height:ht},Q=J.h,Q.canvas.width=ht.width,Q.canvas.height=ht.height,Q.activeTexture(Q.TEXTURE0),J.i.bindTexture2d(J.m),Q.texImage2D(Q.TEXTURE_2D,0,Q.RGBA,Q.RGBA,Q.UNSIGNED_BYTE,K),J.i.bindTexture2d(0),J=ht;break t;case"detections":for(J=d.s[O.stream],J||(J=new nl(d.i),d.s[O.stream]=J),J.data||(J.data=new J.h.DetectionListData),J.data.reset(K.length),ht=0;ht<K.length;++ht){Q=K[ht];var ut=J.data,kt=ut.setBoundingBox,Mt=ht,Bt=Q.la,st=new Bn;if(ee(st,1,Bt.ra),ee(st,2,Bt.sa),ee(st,3,Bt.height),ee(st,4,Bt.width),ee(st,5,Bt.rotation),te(st,6,Bt.pa),Bt=st.l(),kt.call(ut,Mt,Bt),Q.ea)for(ut=0;ut<Q.ea.length;++ut){st=Q.ea[ut],kt=J.data,Mt=kt.addNormalizedLandmark,Bt=ht,st=Object.assign({},st,{visibility:st.visibility?st.visibility:0});var Et=new qe;ee(Et,1,st.x),ee(Et,2,st.y),ee(Et,3,st.z),st.visibility&&ee(Et,4,st.visibility),st=Et.l(),Mt.call(kt,Bt,st)}if(Q.ba)for(ut=0;ut<Q.ba.length;++ut)kt=J.data,Mt=kt.addClassification,Bt=ht,st=Q.ba[ut],Et=new We,ee(Et,2,st.score),st.index&&te(Et,1,st.index),st.label&&te(Et,3,st.label),st.displayName&&te(Et,4,st.displayName),st=Et.l(),Mt.call(kt,Bt,st)}J=J.data;break t;default:J={}}}switch(V=J,H=O.stream,O.type){case"video":N.pushTexture2d(Object.assign({},V,{stream:H,timestamp:g}));break;case"detections":Y=V,Y.stream=H,Y.timestamp=g,N.pushDetectionList(Y);break;default:throw Error("Unknown input config type: '"+O.type+"'")}}return d.j.send(N),D(W,d.I,4);case 4:N.delete(),W.h=0}})};function cl(i,h,d){var g,N,S,T,$,O,V,H,Y,W,K,J,Q,ht;return z(function(ut){switch(ut.h){case 1:if(!d)return ut.return(h);for(g={},N=0,S=u(Object.keys(d)),T=S.next();!T.done;T=S.next())$=T.value,O=d[$],typeof O!="string"&&O.type==="texture"&&h[O.stream]!==void 0&&++N;1<N&&(i.M=!1),V=u(Object.keys(d)),T=V.next();case 2:if(T.done){ut.h=4;break}if(H=T.value,Y=d[H],typeof Y=="string")return Q=g,ht=H,D(ut,hl(i,H,h[Y]),14);if(W=h[Y.stream],Y.type==="detection_list"){if(W){for(var kt=W.getRectList(),Mt=W.getLandmarksList(),Bt=W.getClassificationsList(),st=[],Et=0;Et<kt.size();++Et){var ve=tl(kt.get(Et)),fl=ne(ve,1),dl=ne(ve,2),ml=ne(ve,3),yl=ne(ve,4),gl=ne(ve,5,0),Vn=void 0;Vn=Vn===void 0?0:Vn,ve={la:{ra:fl,sa:dl,height:ml,width:yl,rotation:gl,pa:Fn(qt(ve,6),Vn)},ea:Cn(eo(Mt.get(Et)),qe,1).map(ao),ba:so(Za(Bt.get(Et)))},st.push(ve)}kt=st}else kt=[];g[H]=kt,ut.h=7;break}if(Y.type==="proto_list"){if(W){for(kt=Array(W.size()),Mt=0;Mt<W.size();Mt++)kt[Mt]=W.get(Mt);W.delete()}else kt=[];g[H]=kt,ut.h=7;break}if(W===void 0){ut.h=3;break}if(Y.type==="float_list"){g[H]=W,ut.h=7;break}if(Y.type==="proto"){g[H]=W,ut.h=7;break}if(Y.type!=="texture")throw Error("Unknown output config type: '"+Y.type+"'");return K=i.v[H],K||(K=new Br(i.i,i.K),i.v[H]=K),D(ut,io(K,W,i.M),13);case 13:J=ut.i,g[H]=J;case 7:Y.transform&&g[H]&&(g[H]=Y.transform(g[H])),ut.h=3;break;case 14:Q[ht]=ut.i;case 3:T=V.next(),ut.h=2;break;case 4:return ut.return(g)}})}function hl(i,h,d){var g;return z(function(N){return typeof d=="number"||d instanceof Uint8Array||d instanceof i.i.Uint8BlobList?N.return(d):d instanceof i.i.Texture2dDataOut?(g=i.v[h],g||(g=new Br(i.i,i.K),i.v[h]=g),N.return(io(g,d,i.M))):N.return(void 0)})}function pl(i,h){for(var d=h.name||"$",g=[].concat(l(h.wants)),N=new i.i.StringList,S=u(h.wants),T=S.next();!T.done;T=S.next())N.push_back(T.value);S=i.i.PacketListener.implement({onResults:function($){for(var O={},V=0;V<h.wants.length;++V)O[g[V]]=$.get(V);var H=i.listeners[d];H&&(i.I=cl(i,O,h.outs).then(function(Y){Y=H(Y);for(var W=0;W<h.wants.length;++W){var K=O[g[W]];typeof K=="object"&&K.hasOwnProperty&&K.hasOwnProperty("delete")&&K.delete()}Y&&(i.I=Y)}))}}),i.j.attachMultiListener(N,S),N.delete()}n.onResults=function(i,h){this.listeners[h||"$"]=i},et("Solution",zr),et("OptionType",{BOOL:0,NUMBER:1,ta:2,0:"BOOL",1:"NUMBER",2:"STRING"});function lo(i){return i===void 0&&(i=0),i===1?"hand_landmark_full.tflite":"hand_landmark_lite.tflite"}function co(i){var h=this;i=i||{},this.h=new zr({locateFile:i.locateFile,files:function(d){return[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"},{data:!0,url:lo(d.modelComplexity)}]},graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","multi_hand_world_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:oo},multiHandWorldLandmarks:{type:"proto_list",stream:"multi_hand_world_landmarks",transform:oo},multiHandedness:{type:"proto_list",stream:"multi_handedness",transform:function(d){return d.map(function(g){return so(Za(g))[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(d){var g,N,S;return z(function(T){return T.h==1?(g=lo(d),N="third_party/mediapipe/modules/hand_landmark/"+g,D(T,zn(h.h,g),2)):(S=T.i,h.h.overrideFile(N,S),T.return(!0))})}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}}}})}n=co.prototype,n.close=function(){return this.h.close(),Promise.resolve()},n.onResults=function(i){this.h.onResults(i)},n.initialize=function(){var i=this;return z(function(h){return D(h,i.h.initialize(),0)})},n.reset=function(){this.h.reset()},n.send=function(i){var h=this;return z(function(d){return D(d,h.h.send(i),0)})},n.setOptions=function(i){this.h.setOptions(i)},et("Hands",co),et("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]),et("VERSION","0.4.1675469240")}).call(oe);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Cl=1e-7,Fl=1e-4;class Pl{refCount(t){return jt("refCount")}incRef(t){return jt("incRef")}timerAvailable(){return!0}time(t){return jt("time")}read(t){return jt("read")}readSync(t){return jt("readSync")}readToGPU(t,e){return jt("readToGPU")}numDataIds(){return jt("numDataIds")}disposeData(t,e){return jt("disposeData")}write(t,e,r){return jt("write")}move(t,e,r,s,a){return jt("move")}memory(){return jt("memory")}floatPrecision(){return jt("floatPrecision")}epsilon(){return this.floatPrecision()===32?Cl:Fl}dispose(){return jt("dispose")}}function jt(n){throw new Error(`'${n}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function k(n,t){if(!n)throw new Error(typeof t=="string"?t:t())}function Wt(n,t,e=""){k(xe(n,t),()=>e+` Shapes ${n} and ${t} must match`)}function nn(n){k(n!=null,()=>"The input to the tensor constructor must be a non-null value.")}function or(n,t=[],e=!1){if(t==null&&(t=[]),Array.isArray(n)||ue(n)&&!e)for(let r=0;r<n.length;++r)or(n[r],t,e);else t.push(n);return t}function Tt(n){if(n.length===0)return 1;let t=n[0];for(let e=1;e<n.length;e++)t*=n[e];return t}function xe(n,t){if(n===t)return!0;if(n==null||t==null||n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function vn(n){return n%1===0}function Mn(n,t){return t<=n.length?n:n+" ".repeat(t-n.length)}function ir(n,t){const e=t.length;return n=n==null?t.map((r,s)=>s):[].concat(n),k(n.every(r=>r>=-e&&r<e),()=>`All values in axis param must be in range [-${e}, ${e}) but got axis ${n}`),k(n.every(r=>vn(r)),()=>`All values in axis param must be integers but got axis ${n}`),n.map(r=>r<0?e+r:r)}function Ll(n,t){const e=[],r=[],s=t!=null&&Array.isArray(t)&&t.length===0,a=t==null||s?null:ir(t,n).sort();let o=0;for(let u=0;u<n.length;++u){if(a!=null){if(a[o]===u&&n[u]!==1)throw new Error(`Can't squeeze axis ${u} since its dim '${n[u]}' is not 1`);(a[o]==null||a[o]>u)&&n[u]===1&&(e.push(n[u]),r.push(u)),a[o]<=u&&o++}n[u]!==1&&(e.push(n[u]),r.push(u))}return{newShape:e,keptDims:r}}function Rl(n,t){let e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else if(n==="bool")e=new Uint8Array(t);else throw new Error(`Unknown data type ${n}`);return e}function Bl(n,t){let e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else if(n==="bool")e=new Uint8Array(t);else if(n==="string")e=new Array(t);else throw new Error(`Unknown data type ${n}`);return e}function zl(n,t){for(let e=0;e<n.length;e++){const r=n[e];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${t} being uploaded contains ${r}.`)}}function Vl(n){return n==="bool"||n==="complex64"||n==="float32"||n==="int32"||n==="string"}function ue(n){return n instanceof Float32Array||n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray}function fo(n){if(n==="float32"||n==="int32")return 4;if(n==="complex64")return 8;if(n==="bool")return 1;throw new Error(`Unknown dtype ${n}`)}function jl(n){if(n==null)return 0;let t=0;return n.forEach(e=>t+=e.length),t}function Os(n){return typeof n=="string"||n instanceof String}function Ml(n){return typeof n=="boolean"}function Hl(n){return typeof n=="number"}function Ds(n){return Array.isArray(n)?Ds(n[0]):n instanceof Float32Array?"float32":n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray?"int32":Hl(n)?"float32":Os(n)?"string":Ml(n)?"bool":"float32"}function mo(n){return!!(n&&n.constructor&&n.call&&n.apply)}function Cs(n){const t=n.length;if(t<2)return[];const e=new Array(t-1);e[t-2]=n[t-1];for(let r=t-3;r>=0;--r)e[r]=e[r+1]*n[r+1];return e}function Jo(n,t,e,r=!1){const s=new Array;if(t.length===1){const a=t[0]*(r?2:1);for(let o=0;o<a;o++)s[o]=e[n+o]}else{const a=t[0],o=t.slice(1),u=o.reduce((l,c)=>l*c)*(r?2:1);for(let l=0;l<a;l++)s[l]=Jo(n+l*u,o,e,r)}return s}function ns(n,t,e=!1){if(n.length===0)return t[0];const r=n.reduce((s,a)=>s*a)*(e?2:1);if(r===0)return[];if(r!==t.length)throw new Error(`[${n}] does not match the input size ${t.length}${e?" for a complex tensor":""}.`);return Jo(0,n,t,e)}function Zo(n,t){const e=Fs(n,t);for(let r=0;r<e.length;r++)e[r]=1;return e}function Fs(n,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool")return new Uint8Array(n);throw new Error(`Unknown data type ${t}`)}function Qo(n){n.forEach(t=>{k(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${n}].`)})}function Ze(n){return n&&n.then&&typeof n.then=="function"}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yo="tfjsflags";class Ul{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=Kl,this.populateURLFlags()}setPlatform(t,e){this.platform!=null&&(rt().getBool("IS_TEST")||rt().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=e}registerFlag(t,e,r){if(this.flagRegistry[t]={evaluationFn:e,setHook:r},this.urlFlags[t]!=null){const s=this.urlFlags[t];rt().getBool("IS_TEST")||rt().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${s}.`),this.set(t,s)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];const e=this.evaluateFlag(t);if(Ze(e))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=e,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,e){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global=="undefined"||typeof this.global.location=="undefined"||typeof this.global.location.search=="undefined")return;const t=this.getQueryParams(this.global.location.search);yo in t&&t[yo].split(",").forEach(r=>{const[s,a]=r.split(":");this.urlFlags[s]=ql(s,a)})}}function Kl(n){const t={};return n.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(e,...r)=>(Wl(t,r[0],r[1]),r.join("="))),t}function Wl(n,t,e){n[decodeURIComponent(t)]=decodeURIComponent(e||"")}function ql(n,t){if(t=t.toLowerCase(),t==="true"||t==="false")return t==="true";if(`${+t}`===t)return+t;throw new Error(`Could not parse value flag value ${t} for flag ${n}.`)}function rt(){return ti}let ti=null;function Gl(n){ti=n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Hr;function ei(){if(Hr==null){let n;if(typeof window!="undefined")n=window;else if(typeof global!="undefined")n=global;else if(typeof process!="undefined")n=process;else if(typeof self!="undefined")n=self;else throw new Error("Could not find a global object");Hr=n}return Hr}function Xl(){const n=ei();return n._tfGlobals==null&&(n._tfGlobals=new Map),n._tfGlobals}function Ps(n,t){const e=Xl();if(e.has(n))return e.get(n);{const r=t();return e.set(n,r),e.get(n)}}const Yl="Abs",Jl="Acos",Zl="Acosh",ni="Add",Ql="AddN",tc="All",ec="Any",nc="ArgMax",rc="ArgMin",sc="Asin",ac="Asinh",oc="Atan",ic="Atanh",uc="Atan2",lc="AvgPool",cc="AvgPool3D",hc="BatchMatMul",pc="BatchToSpaceND",fc="Bincount",dc="BroadcastArgs",ri="Cast",mc="Ceil",yc="ClipByValue",gc="Complex",bc="ComplexAbs",wc="Concat",vc="Conv2D",Nc="Conv2DBackpropFilter",Tc="Conv2DBackpropInput",Sc="Conv3D",xc="Conv3DBackpropInputV2",kc="Cos",Ec="Cosh",_c="Cumprod",$c="Cumsum",Ic="CropAndResize",Ac="DenseBincount",Oc="DepthToSpace",Dc="DepthwiseConv2dNative",Cc="DepthwiseConv2dNativeBackpropFilter",Fc="DepthwiseConv2dNativeBackpropInput",Pc="Diag",Lc="Dilation2D",Rc="RealDiv",Bc="Einsum",zc="Elu",Vc="Erf",jc="Equal",Mc="Exp",Hc="ExpandDims",Uc="Expm1",Kc="FFT",Wc="Fill",qc="FlipLeftRight",Gc="Floor",Xc="FloorDiv",Yc="FusedBatchNorm",Jc="GatherV2",Zc="GatherNd",Qc="Greater",th="GreaterEqual",si="Identity",eh="IFFT",nh="Imag",rh="IsFinite",sh="IsInf",ah="IsNan",oh="LeakyRelu",ih="Less",uh="LessEqual",lh="LinSpace",ch="Log",hh="Log1p",ph="LogicalAnd",fh="LogicalNot",dh="LogicalOr",mh="LRN",yh="Max",gh="Maximum",bh="MaxPool",wh="MaxPool3D",vh="MaxPoolWithArgmax",Nh="Mean",Th="Min",Sh="Minimum",xh="MirrorPad",kh="Mod",Eh="Multinomial",_h="Multiply",$h="Neg",Ih="NotEqual",Ah="NonMaxSuppressionV3",Oh="NonMaxSuppressionV4",Dh="NonMaxSuppressionV5",Ch="OnesLike",Fh="OneHot",Ph="Pack",Lh="PadV2",Rh="Pow",Bh="Prelu",zh="Prod",Vh="RaggedGather",jh="RaggedTensorToTensor",Mh="Range",Hh="Real",Uh="Reciprocal",Kh="Relu",Wh="Reshape",qh="ResizeNearestNeighbor",Gh="ResizeBilinear",Xh="Relu6",Yh="Reverse",Jh="Round",Zh="Rsqrt",Qh="ScatterNd",tp="SearchSorted",ep="Select",np="Selu",rp="Slice",sp="Sin",ap="Sinh",op="Sign",ip="Sigmoid",up="Softplus",lp="Sqrt",cp="Sum",hp="SpaceToBatchND",pp="SplitV",fp="Softmax",dp="SparseFillEmptyRows",mp="SparseReshape",yp="SparseSegmentMean",gp="SparseSegmentSum",bp="SparseToDense",wp="SquaredDifference",vp="StridedSlice",Np="StringNGrams",Tp="StringSplit",Sp="StringToHashBucketFast",xp="Sub",kp="Tan",Ep="Tanh",ai="Tile",_p="TopK",$p="Transform",Ur="Transpose",Ip="Unique",Ap="Unpack",Op="UnsortedSegmentSum",Dp="ZerosLike",Cp="Step",go="FromPixels",Fp="RotateWithOffset",bo="_FusedMatMul",wo="FusedConv2D",vo="FusedDepthwiseConv2D";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fn(...n){rt().getBool("IS_TEST")||rt().getBool("PROD")||console.warn(...n)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const oi=Ps("kernelRegistry",()=>new Map),Pp=Ps("gradRegistry",()=>new Map);function rs(n,t){const e=Lp(n,t);return oi.get(e)}function No(n){return Pp.get(n)}function To(n){const t=oi.entries(),e=[];for(;;){const{done:r,value:s}=t.next();if(r)break;const[a,o]=s,[u]=a.split("_");u===n&&e.push(o)}return e}function Lp(n,t){return`${t}_${n}`}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rp(n,t){return n instanceof Float32Array&&t==="float32"||n instanceof Int32Array&&t==="int32"||n instanceof Uint8Array&&t==="bool"}function ii(n,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(n)&&(n=or(n)),rt().getBool("DEBUG")&&zl(n,t),Rp(n,t))return n;if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool"){const e=new Uint8Array(n.length);for(let r=0;r<e.length;++r)Math.round(n[r])!==0&&(e[r]=1);return e}else throw new Error(`Unknown data type ${t}`)}function qn(){return rt().platform.now()}function Bp(n,t="utf-8"){return t=t||"utf-8",rt().platform.encode(n,t)}function So(n,t="utf-8"){return t=t||"utf-8",rt().platform.decode(n,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class zp{constructor(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new jp)}profileKernel(t,e,r){let s;const a=()=>{s=r()};let o;const u=qn();if(this.backendTimer.timerAvailable())o=this.backendTimer.time(a);else{a();for(const c of s)c.dataSync();o=Promise.resolve({kernelMs:qn()-u})}if(rt().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let c=0;c<s.length;c++){const f=s[c];f.data().then(p=>{Vp(p,f.dtype,t)})}return{kernelName:t,outputs:s,inputs:e,timeMs:o.then(c=>c.kernelMs),extraInfo:o.then(c=>c.getExtraProfileInfo!=null?c.getExtraProfileInfo():"")}}logKernelProfile(t){const{kernelName:e,outputs:r,timeMs:s,inputs:a,extraInfo:o}=t;r.forEach(u=>{Promise.all([u.data(),s,o]).then(l=>{this.logger.logKernelProfile(e,u,l[0],l[1],a,l[2])})})}}function Vp(n,t,e){if(t!=="float32")return!1;for(let r=0;r<n.length;r++){const s=n[r];if(isNaN(s)||!isFinite(s))return console.warn(`Found ${s} in the result of '${e}'`),!0}return!1}class jp{logKernelProfile(t,e,r,s,a,o){const u=typeof s=="number"?Mn(`${s}ms`,9):s.error,l=Mn(t,25),c=e.rank,f=e.size,p=Mn(e.shape.toString(),14);let y="";for(const b in a){const v=a[b];if(v!=null){const x=v.shape||e.shape,E=x.length;y+=`${b}: ${E}D ${E>0?x:""} `}}console.log(`%c${l}	%c${u}	%c${c}D ${p}	%c${f}	%c${y}	%c${o}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mp(n,t,e){const r={},s={};for(let l=0;l<t.length;l++)r[t[l].id]=!0;for(let l=0;l<n.length;l++){const c=n[l],f=c.inputs;for(const p in f){const y=f[p];let b=!1;for(let v=0;v<t.length;v++)if(r[y.id]){c.outputs.forEach(x=>r[x.id]=!0),b=!0,s[c.id]=!0;break}if(b)break}}const a={};a[e.id]=!0;const o={};for(let l=n.length-1;l>=0;l--){const c=n[l],f=c.inputs;for(let p=0;p<c.outputs.length;p++)if(a[c.outputs[p].id]){for(const y in f)a[f[y].id]=!0,o[c.id]=!0;break}}const u=[];for(let l=0;l<n.length;l++){const c=n[l];if(s[c.id]&&o[c.id]){const f={};for(const y in c.inputs){const b=c.inputs[y];r[b.id]&&(f[y]=b)}const p=Object.assign({},c);p.inputs=f,p.outputs=c.outputs,u.push(p)}}return u}function Hp(n,t,e,r){for(let s=t.length-1;s>=0;s--){const a=t[s],o=[];if(a.outputs.forEach(l=>{const c=n[l.id];c!=null?o.push(c):o.push(null)}),a.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${a.kernelName}.`);const u=a.gradient(o);for(const l in a.inputs){if(!(l in u))throw new Error(`Cannot backprop through input ${l}. Available gradients found: ${Object.keys(u)}.`);const c=e(()=>u[l]());if(c.dtype!=="float32")throw new Error(`Error in gradient for op ${a.kernelName}. The gradient of input ${l} must have 'float32' dtype, but has '${c.dtype}'`);const f=a.inputs[l];if(!xe(c.shape,f.shape))throw new Error(`Error in gradient for op ${a.kernelName}. The gradient of input '${l}' has shape '${c.shape}', which does not match the shape of the input '${f.shape}'`);if(n[f.id]==null)n[f.id]=c;else{const p=n[f.id];n[f.id]=r(p,c),p.dispose()}}}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xo=20,dn=3,Kr=7;function Up(n,t,e,r){const s=Cs(t),a=Kp(n,t,e,s),o=t.length,u=Hn(n,t,e,s,a),l=["Tensor"];return r&&(l.push(`  dtype: ${e}`),l.push(`  rank: ${o}`),l.push(`  shape: [${t}]`),l.push("  values:")),l.push(u.map(c=>"    "+c).join(`
`)),l.join(`
`)}function Kp(n,t,e,r){const s=Tt(t),a=r[r.length-1],o=new Array(a).fill(0),u=t.length,l=e==="complex64"?gn(n):n;if(u>1)for(let c=0;c<s/a;c++){const f=c*a;for(let p=0;p<a;p++)o[p]=Math.max(o[p],yn(l[f+p],0,e).length)}return o}function yn(n,t,e){let r;return Array.isArray(n)?r=`${parseFloat(n[0].toFixed(Kr))} + ${parseFloat(n[1].toFixed(Kr))}j`:Os(n)?r=`'${n}'`:e==="bool"?r=ui(n):r=parseFloat(n.toFixed(Kr)).toString(),Mn(r,t)}function ui(n){return n===0?"false":"true"}function Hn(n,t,e,r,s,a=!0){const o=e==="complex64"?2:1,u=t[0],l=t.length;if(l===0){if(e==="complex64"){const x=gn(n);return[yn(x[0],0,e)]}return e==="bool"?[ui(n[0])]:[n[0].toString()]}if(l===1){if(u>xo){const E=dn*o;let A=Array.from(n.slice(0,E)),M=Array.from(n.slice((u-dn)*o,u*o));return e==="complex64"&&(A=gn(A),M=gn(M)),["["+A.map((L,D)=>yn(L,s[D],e)).join(", ")+", ..., "+M.map((L,D)=>yn(L,s[u-dn+D],e)).join(", ")+"]"]}const x=e==="complex64"?gn(n):Array.from(n);return["["+x.map((E,A)=>yn(E,s[A],e)).join(", ")+"]"]}const c=t.slice(1),f=r.slice(1),p=r[0]*o,y=[];if(u>xo){for(let x=0;x<dn;x++){const E=x*p,A=E+p;y.push(...Hn(n.slice(E,A),c,e,f,s,!1))}y.push("...");for(let x=u-dn;x<u;x++){const E=x*p,A=E+p;y.push(...Hn(n.slice(E,A),c,e,f,s,x===u-1))}}else for(let x=0;x<u;x++){const E=x*p,A=E+p;y.push(...Hn(n.slice(E,A),c,e,f,s,x===u-1))}const b=l===2?",":"";y[0]="["+y[0]+b;for(let x=1;x<y.length-1;x++)y[x]=" "+y[x]+b;let v=`,
`;for(let x=2;x<l;x++)v+=`
`;return y[y.length-1]=" "+y[y.length-1]+"]"+(a?"":v),y}function gn(n){const t=[];for(let e=0;e<n.length;e+=2)t.push([n[e],n[e+1]]);return t}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ss{constructor(t,e,r){if(this.dtype=e,this.shape=t.slice(),this.size=Tt(t),r!=null){const s=r.length;k(s===this.size,()=>`Length of values '${s}' does not match the size inferred by the shape '${this.size}'.`)}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||Bl(e,this.size),this.strides=Cs(t)}set(t,...e){e.length===0&&(e=[0]),k(e.length===this.rank,()=>`The number of provided coordinates (${e.length}) must match the rank (${this.rank})`);const r=this.locToIndex(e);this.values[r]=t}get(...t){t.length===0&&(t=[0]);let e=0;for(const s of t){if(s<0||s>=this.shape[e]){const a=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(a)}e++}let r=t[t.length-1];for(let s=0;s<t.length-1;++s)r+=this.strides[s]*t[s];return this.values[r]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let e=t[t.length-1];for(let r=0;r<t.length-1;++r)e+=this.strides[r]*t[r];return e}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];const e=new Array(this.shape.length);for(let r=0;r<e.length-1;++r)e[r]=Math.floor(t/this.strides[r]),t-=e[r]*this.strides[r];return e[e.length-1]=t,e}get rank(){return this.shape.length}toTensor(){return Xt().makeTensor(this.values,this.shape,this.dtype)}}let Xt=null,Ge=null;function Wp(n){Xt=n}function qp(n){Ge=n}class gt{constructor(t,e,r,s){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=Tt(t),this.strides=Cs(t),this.dataId=r,this.id=s,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return Ge.buffer(this.shape,this.dtype,t)}bufferSync(){return Ge.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return ns(this.shape,t,this.dtype==="complex64")}arraySync(){return ns(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const t=Xt().read(this.dataId);if(this.dtype==="string"){const e=await t;try{return e.map(r=>So(r))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),Xt().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();const t=Xt().readSync(this.dataId);if(this.dtype==="string")try{return t.map(e=>So(e))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await Xt().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(Xt().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return Ge.print(this,t)}clone(){return this.throwIfDisposed(),Ge.clone(this)}toString(t=!1){const e=this.dataSync();return Up(e,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),Ge.cast(this,t)}variable(t=!0,e,r){return this.throwIfDisposed(),Xt().makeVariable(this,t,e,r)}}Object.defineProperty(gt,Symbol.hasInstance,{value:n=>!!n&&n.data!=null&&n.dataSync!=null&&n.throwIfDisposed!=null});function Gp(){return Ps("Tensor",()=>gt)}Gp();class as extends gt{constructor(t,e,r,s){super(t.shape,t.dtype,t.dataId,s),this.trainable=e,this.name=r}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!xe(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);Xt().disposeTensor(this),this.dataId=t.dataId,Xt().incRef(this,null)}dispose(){Xt().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(as,Symbol.hasInstance,{value:n=>n instanceof gt&&n.assign!=null&&n.assign instanceof Function});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var ko;(function(n){n.R0="R0",n.R1="R1",n.R2="R2",n.R3="R3",n.R4="R4",n.R5="R5",n.R6="R6"})(ko||(ko={}));var os;(function(n){n.float32="float32",n.int32="int32",n.bool="int32",n.complex64="complex64"})(os||(os={}));var is;(function(n){n.float32="float32",n.int32="int32",n.bool="bool",n.complex64="complex64"})(is||(is={}));var us;(function(n){n.float32="float32",n.int32="float32",n.bool="float32",n.complex64="complex64"})(us||(us={}));var ls;(function(n){n.float32="complex64",n.int32="complex64",n.bool="complex64",n.complex64="complex64"})(ls||(ls={}));const Xp={float32:us,int32:os,bool:is,complex64:ls};function Yp(n,t){if(n==="string"||t==="string"){if(n==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${n} with ${t}`)}return Xp[n][t]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dt(n,t){if(n.dtype===t.dtype)return[n,t];const e=Yp(n.dtype,t.dtype);return[n.cast(e),t.cast(e)]}function Jp(n,t){k(n.dtype===t.dtype,()=>`The dtypes of the first(${n.dtype}) and second(${t.dtype}) input must match`)}function li(n){const t=[];return ci(n,t,new Set),t}function ci(n,t,e){if(n==null)return;if(n instanceof gt){t.push(n);return}if(!Zp(n))return;const r=n;for(const s in r){const a=r[s];e.has(a)||(e.add(a),ci(a,t,e))}}function Zp(n){return Array.isArray(n)||typeof n=="object"}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wr(n){return n.kernelName!=null}class Eo{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class Qe{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Eo}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const r=t[e];if(await this.initializeBackend(r).success){await this.setBackend(r);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:t,asyncInit:e}=this.initializeBackendsAndReturnBest();if(e)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){const{asyncInit:e}=this.initializeBackend(t);if(e)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,e,r=1){return t in this.registryFactory?(fn(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:e,priority:r},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;const{success:e,asyncInit:r}=this.initializeBackend(t);if(!(r?await e:e))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new zp(this.backendInstance),!0}setupRegisteredKernels(){To(this.backendName).forEach(e=>{e.setupFunc!=null&&e.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){To(t).forEach(r=>{r.disposeFunc!=null&&r.disposeFunc(this.registry[t])})}initializeBackend(t){const e=this.registryFactory[t];if(e==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const r=e.factory();if(r&&!(r instanceof Pl)&&typeof r.then=="function"){const s=++this.pendingBackendInitId,a=r.then(o=>s<this.pendingBackendInitId?!1:(this.registry[t]=o,this.pendingBackendInit=null,!0)).catch(o=>(s<this.pendingBackendInitId||(this.pendingBackendInit=null,fn(`Initialization of backend ${t} failed`),fn(o.stack||o.message)),!1));return this.pendingBackendInit=a,{success:a,asyncInit:!0}}else return this.registry[t]=r,{success:!0,asyncInit:!1}}catch(r){return fn(`Initialization of backend ${t} failed`),fn(r.stack||r.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,e)=>this.registryFactory[e].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const r=t[e],{success:s,asyncInit:a}=this.initializeBackend(r);if(a||s)return{name:r,asyncInit:a}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,e){const r=this.state.tensorInfo.get(e),s=r.backend,a=this.readSync(e),o=s.refCount(e);s.disposeData(e,!0),r.backend=t,t.move(e,a,r.shape,r.dtype,o),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,e){let r=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=t}let s;return this.scopedRun(()=>this.startScope(r),()=>this.endScope(s),()=>(s=e(),s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),s))}scopedRun(t,e,r){t();try{const s=r();return e(),s}catch(s){throw e(),s}}nextTensorId(){return Qe.nextTensorId++}nextVariableId(){return Qe.nextVariableId++}clone(t){const e=I.runKernel(si,{x:t}),r={x:t},s=o=>({x:()=>{const u="float32",l={x:o},c={dtype:u};return I.runKernel(ri,l,c)}}),a=[];return this.addTapeNode(this.state.activeScope.name,r,[e],s,a,{}),e}runKernel(t,e,r){if(this.backendName==null&&this.backend,!(rs(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:e,attrs:r})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,e,r){const s=this.backend.numDataIds();let a=0;r.forEach(l=>{a+=l.dtype==="complex64"?3:1});const o=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],u=s-e-a-o;if(u>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${u} data ids) after running '${t}'`)}runKernelFunc(t){let e,r=[];const s=this.isTapeOn(),a=this.state.numBytes,o=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let u;this.backendName==null&&this.backend;let l;const c=Wr(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(Wr(t)){const{kernelName:v,inputs:x,attrs:E}=t;this.backendName==null&&this.backend;const A=rs(v,this.backendName);k(A!=null,()=>`Cannot find registered kernel '${v}' for backend '${this.backendName}'`),u=()=>{const M=this.backend.numDataIds();l=A.kernelFunc({inputs:x,attrs:E,backend:this.backend});const L=Array.isArray(l)?l:[l];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(v,M,L);const D=L.map(C=>C.rank!=null?C:this.makeTensorFromTensorInfo(C));if(s){const C=this.getTensorsForGradient(v,x,D);r=this.saveTensorsForBackwardMode(C)}return D}}else{const{forwardFunc:v}=t,x=E=>{!s||(r=E.map(A=>this.keep(this.clone(A))))};u=()=>{const E=this.backend.numDataIds();l=this.tidy(()=>v(this.backend,x));const A=Array.isArray(l)?l:[l];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(c,E,A),A}}const{inputs:f,attrs:p}=t,y=Wr(t)?null:t.backwardsFunc;let b;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?e=u():(b=this.profiler.profileKernel(c,f,()=>u()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(b),e=b.outputs)}),s&&this.addTapeNode(c,f,e,y,r,p),this.state.profiling&&this.state.activeProfile.kernels.push({name:c,bytesAdded:this.state.numBytes-a,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-o,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(f).map(v=>f[v]!=null?f[v].shape:null),outputShapes:e.map(v=>v.shape),kernelTimeMs:b.timeMs,extraInfo:b.extraInfo}),Array.isArray(l)?e:e[0]}saveTensorsForBackwardMode(t){return t.map(r=>this.keep(this.clone(r)))}getTensorsForGradient(t,e,r){const s=No(t);if(s!=null){const a=s.inputsToSave||[],o=s.outputsToSave||[];let u;s.saveAllInputs?(k(Array.isArray(e),()=>"saveAllInputs is true, expected inputs to be an array."),u=Object.keys(e).map(c=>e[c])):u=a.map(c=>e[c]);const l=r.filter((c,f)=>o[f]);return u.concat(l)}return[]}makeTensor(t,e,r,s){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");r=r||"float32",s=s||this.backend;let a=t;r==="string"&&Os(t[0])&&(a=t.map(l=>Bp(l)));const o=s.write(a,e,r),u=new gt(e,r,o,this.nextTensorId());if(this.trackTensor(u,s),r==="string"){const l=this.state.tensorInfo.get(o),c=jl(a);this.state.numBytes+=c-l.bytes,l.bytes=c}return u}makeTensorFromDataId(t,e,r,s){r=r||"float32";const a={dataId:t,shape:e,dtype:r};return this.makeTensorFromTensorInfo(a,s)}makeTensorFromTensorInfo(t,e){const{dataId:r,shape:s,dtype:a}=t,o=new gt(s,a,r,this.nextTensorId());return this.trackTensor(o,e),o}makeVariable(t,e=!0,r,s){r=r||this.nextVariableId().toString(),s!=null&&s!==t.dtype&&(t=t.cast(s));const a=new as(t,e,r,this.nextTensorId());if(this.state.registeredVariables[a.name]!=null)throw new Error(`Variable with name ${a.name} was already registered`);return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a}trackTensor(t,e){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let r=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(r=t.size*fo(t.dtype)),this.state.numBytes+=r,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:r})),t instanceof as||this.track(t)}incRef(t,e){this.trackTensor(t,e),this.backend.incRef(t.dataId)}removeDataId(t,e){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===e&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;const e=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=e.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){const r=t.size*fo(t.dtype);this.state.numBytes-=r}e.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,e.backend)}disposeVariables(){for(const t in this.state.registeredVariables){const e=this.state.registeredVariables[t];this.disposeVariable(e)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;const e=this.state.numBytes,r=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(s=>s.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-r;for(const s of this.state.activeProfile.kernels)s.kernelTimeMs=await s.kernelTimeMs,s.extraInfo=await s.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,e,r,s,a,o){const u={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:r,saved:a},l=No(t);l!=null&&(s=l.gradFunc),s!=null&&(u.gradient=c=>(c=c.map((f,p)=>{if(f==null){const y=r[p],b=Fs(y.size,y.dtype);return this.makeTensor(b,y.shape,y.dtype)}return f}),s(c.length>1?c:c[0],a,o))),this.state.activeTape.push(u)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e}endScope(t){const e=li(t),r=new Set(e.map(a=>a.id));for(let a=0;a<this.state.activeScope.track.length;a++){const o=this.state.activeScope.track[a];!o.kept&&!r.has(o.id)&&o.dispose()}const s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],e.forEach(a=>{!a.kept&&a.scopeId===s.id&&this.track(a)})}gradients(t,e,r,s=!1){if(k(e.length>0,()=>"gradients() received an empty list of xs."),r!=null&&r.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${r.dtype}'`);const a=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));k(a instanceof gt,()=>"The result y returned by f() must be a tensor.");const o=Mp(this.state.activeTape,e,a);if(!s&&o.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const u={};u[a.id]=r==null?Qp(a.shape):r,Hp(u,o,c=>this.tidy(c),tf);const l=e.map(c=>u[c.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(c=>{for(const f of c.saved)f.dispose()}),this.state.activeTape=null),{value:a,grads:l}})}customGrad(t){return k(mo(t),()=>"The f passed in customGrad(f) must be a function."),(...e)=>{k(e.every(u=>u instanceof gt),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let r;const s={};e.forEach((u,l)=>{s[l]=u});const a=(u,l)=>(r=t(...e,l),k(r.value instanceof gt,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),k(mo(r.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),r.value),o=(u,l)=>{const c=r.gradFunc(u,l),f=Array.isArray(c)?c:[c];k(f.length===e.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),k(f.every(y=>y instanceof gt),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const p={};return f.forEach((y,b)=>{p[b]=()=>y}),p};return this.runKernelFunc({forwardFunc:a,backwardsFunc:o,inputs:s})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,e){return this.state.tensorInfo.get(t).backend.readToGPU(t,e)}async time(t){const e=qn(),r=await this.backend.time(t);return r.wallMs=qn()-e,r}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Eo;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}Qe.nextTensorId=0;Qe.nextVariableId=0;function Qp(n){const t=Zo(Tt(n),"float32");return I.makeTensor(t,n,"float32")}function hi(){const n=ei();if(n._tfengine==null){const t=new Ul(n);n._tfengine=new Qe(t)}return Gl(n._tfengine.ENV),Wp(()=>n._tfengine),n._tfengine}const I=hi();function tf(n,t){const e={a:n,b:t};return I.runKernel(ni,e)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ef(){return typeof window!="undefined"&&window.document!=null||typeof WorkerGlobalScope!="undefined"}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vt=rt();Vt.registerFlag("DEBUG",()=>!1,n=>{n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});Vt.registerFlag("IS_BROWSER",()=>ef());Vt.registerFlag("IS_NODE",()=>typeof process!="undefined"&&typeof process.versions!="undefined"&&typeof process.versions.node!="undefined");Vt.registerFlag("IS_CHROME",()=>typeof navigator!="undefined"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));Vt.registerFlag("PROD",()=>!1);Vt.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>Vt.getBool("DEBUG"));Vt.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);Vt.registerFlag("IS_TEST",()=>!1);Vt.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>!0);Vt.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);Vt.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);Vt.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);Vt.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ee(n,t){let e=n;if(ue(n))return t==="string"?[]:[n.length];if(!Array.isArray(n))return[];const r=[];for(;Array.isArray(e)||ue(e)&&t!=="string";)r.push(e.length),e=e[0];return Array.isArray(n)&&rt().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&pi(n,r,[]),r}function pi(n,t,e){if(e=e||[],!Array.isArray(n)&&!ue(n)){k(t.length===0,()=>`Element arr[${e.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}k(t.length>0,()=>`Element arr[${e.join("][")}] should be a primitive, but is an array of ${n.length} elements`),k(n.length===t[0],()=>`Element arr[${e.join("][")}] should have ${t[0]} elements, but has ${n.length} elements`);const r=t.slice(1);for(let s=0;s<n.length;++s)pi(n[s],r,e.concat(s))}function _o(n,t,e,r){if(n!=="string_or_numeric"){if(n==null)throw new Error("Expected dtype cannot be null.");if(n!=="numeric"&&n!==t||n==="numeric"&&t==="string")throw new Error(`Argument '${e}' passed to '${r}' must be ${n} tensor, but got ${t} tensor`)}}function w(n,t,e,r="numeric"){if(n instanceof gt)return _o(r,n.dtype,t,e),n;let s=Ds(n);if(s!=="string"&&["bool","int32","float32"].indexOf(r)>=0&&(s=r),_o(r,s,t,e),n==null||!ue(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string"){const l=n==null?"null":n.constructor.name;throw new Error(`Argument '${t}' passed to '${e}' must be a Tensor or TensorLike, but got '${l}'`)}const a=Ee(n,s);!ue(n)&&!Array.isArray(n)&&(n=[n]);const u=s!=="string"?ii(n,s):or(n,[],!0);return I.makeTensor(u,a,s)}function Gn(n,t,e,r="numeric"){if(!Array.isArray(n))throw new Error(`Argument ${t} passed to ${e} must be a \`Tensor[]\` or \`TensorLike[]\``);return n.map((a,o)=>w(a,`${t}[${o}]`,e,r))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fi="__op";function _(n){const t=Object.keys(n);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let e=t[0];const r=n[e];e.endsWith("_")&&(e=e.substring(0,e.length-1)),e=e+fi;const s=(...a)=>{I.startScope(e);try{const o=r(...a);return Ze(o)&&console.error("Cannot return a Promise inside of tidy."),I.endScope(o),o}catch(o){throw I.endScope(null),o}};return Object.defineProperty(s,"name",{value:e,configurable:!0}),s}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nf(n,t){const e=w(n,"real","complex"),r=w(t,"imag","complex");Wt(e.shape,r.shape,`real and imag shapes, ${e.shape} and ${r.shape}, must match in call to tf.complex().`);const s={real:e,imag:r};return I.runKernel(gc,s)}const ke=_({complex_:nf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _e(n,t,e,r){if(r==null&&(r=Ds(n)),r==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!ue(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){Qo(t);const s=Tt(t),a=Tt(e);k(s===a,()=>`Based on the provided shape, [${t}], the tensor should have ${s} values but has ${a}`);for(let o=0;o<e.length;++o){const u=e[o],l=o===e.length-1?u!==Tt(t.slice(o)):!0;k(e[o]===t[o]||!l,()=>`Error creating a new Tensor. Inferred shape (${e}) does not match the provided shape (${t}). `)}}return!ue(n)&&!Array.isArray(n)&&(n=[n]),t=t||e,n=r!=="string"?ii(n,r):or(n,[],!0),I.makeTensor(n,t,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ie(n,t,e){const r=Ee(n,e);return _e(n,t,r,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cs={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xn=4;async function rf(n,t){const e=[],r=[],s=Array.isArray(n)?n.map(o=>o.name):Object.keys(n);for(let o=0;o<s.length;++o){const u=s[o],l=Array.isArray(n)?n[o].tensor:n[u];if(l.dtype!=="float32"&&l.dtype!=="int32"&&l.dtype!=="bool"&&l.dtype!=="string"&&l.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${u}': ${l.dtype}`);const c={name:u,shape:l.shape,dtype:l.dtype};if(l.dtype==="string"){const f=new Promise(async p=>{const y=await l.bytes(),b=y.reduce((E,A)=>E+A.length,0)+Xn*y.length,v=new Uint8Array(b);let x=0;for(let E=0;E<y.length;E++){const A=y[E],M=new Uint8Array(new Uint32Array([A.length]).buffer);v.set(M,x),x+=Xn,v.set(A,x),x+=A.length}p(v)});r.push(f)}else r.push(l.data());t!=null&&(c.group=t),e.push(c)}const a=await Promise.all(r);return{data:sf(a),specs:e}}function di(n,t){const e={};let r,s=0;for(const a of t){const o=a.name,u=a.dtype,l=a.shape,c=Tt(l);let f;if("quantization"in a){const p=a.quantization;if(p.dtype==="uint8"||p.dtype==="uint16"){if(!("min"in p&&"scale"in p))throw new Error(`Weight ${a.name} with quantization ${p.dtype} doesn't have corresponding metadata min and scale.`)}else if(p.dtype==="float16"){if(u!=="float32")throw new Error(`Weight ${a.name} is quantized with ${p.dtype} which only supports weights of type float32 not ${u}.`)}else throw new Error(`Weight ${a.name} has unknown quantization dtype ${p.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const y=cs[p.dtype],b=n.slice(s,s+c*y),v=p.dtype==="uint8"?new Uint8Array(b):new Uint16Array(b);if(u==="float32")if(p.dtype==="uint8"||p.dtype==="uint16"){f=new Float32Array(v.length);for(let x=0;x<v.length;x++){const E=v[x];f[x]=E*p.scale+p.min}}else if(p.dtype==="float16")r===void 0&&(r=hf()),f=r(v);else throw new Error(`Unsupported quantization type ${p.dtype} for weight type float32.`);else if(u==="int32"){if(p.dtype!=="uint8"&&p.dtype!=="uint16")throw new Error(`Unsupported quantization type ${p.dtype} for weight type int32.`);f=new Int32Array(v.length);for(let x=0;x<v.length;x++){const E=v[x];f[x]=Math.round(E*p.scale+p.min)}}else throw new Error(`Unsupported dtype in weight '${o}': ${u}`);s+=c*y}else if(u==="string"){const p=Tt(a.shape);f=[];for(let y=0;y<p;y++){const b=new Uint32Array(n.slice(s,s+Xn))[0];s+=Xn;const v=new Uint8Array(n.slice(s,s+b));f.push(v),s+=b}}else{const p=cs[u],y=n.slice(s,s+c*p);if(u==="float32")f=new Float32Array(y);else if(u==="int32")f=new Int32Array(y);else if(u==="bool")f=new Uint8Array(y);else if(u==="complex64"){f=new Float32Array(y);const b=new Float32Array(f.length/2),v=new Float32Array(f.length/2);for(let A=0;A<b.length;A++)b[A]=f[A*2],v[A]=f[A*2+1];const x=ie(b,l,"float32"),E=ie(v,l,"float32");e[o]=ke(x,E),x.dispose(),E.dispose()}else throw new Error(`Unsupported dtype in weight '${o}': ${u}`);s+=c*p}u!=="complex64"&&(e[o]=ie(f,l,u))}return e}function sf(n){if(n===null)throw new Error(`Invalid input value: ${JSON.stringify(n)}`);let t=0;const e=[];n.forEach(a=>{if(t+=a.byteLength,e.push(a.byteLength===a.buffer.byteLength?a:new a.constructor(a)),!(a instanceof Float32Array||a instanceof Int32Array||a instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${a.constructor.name}`)});const r=new Uint8Array(t);let s=0;return e.forEach(a=>{r.set(new Uint8Array(a.buffer),s),s+=a.byteLength}),r.buffer}const Ls=typeof Buffer!="undefined"&&(typeof Blob=="undefined"||typeof atob=="undefined"||typeof btoa=="undefined");function $o(n){return Ls?Buffer.byteLength(n):new Blob([n]).size}function af(n){if(Ls)return Buffer.from(n).toString("base64");const t=new Uint8Array(n);let e="";for(let r=0,s=t.length;r<s;r++)e+=String.fromCharCode(t[r]);return btoa(e)}function of(n){if(Ls){const r=Buffer.from(n,"base64");return r.buffer.slice(r.byteOffset,r.byteOffset+r.byteLength)}const t=atob(n),e=new Uint8Array(t.length);for(let r=0;r<t.length;++r)e.set([t.charCodeAt(r)],r);return e.buffer}function Rs(n){if(n.length===1)return n[0];let t=0;n.forEach(s=>{t+=s.byteLength});const e=new Uint8Array(t);let r=0;return n.forEach(s=>{e.set(new Uint8Array(s),r),r+=s.byteLength}),e.buffer}function Io(n){const t="/";for(n=n.trim();n.endsWith(t);)n=n.slice(0,n.length-1);const e=n.split(t);return e[e.length-1]}function mi(n,t){const e={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,weightsManifest:t};return n.signature!=null&&(e.signature=n.signature),n.userDefinedMetadata!=null&&(e.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(e.modelInitializer=n.modelInitializer),n.trainingConfig!=null&&(e.trainingConfig=n.trainingConfig),e}function yi(n,t,e){const r={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy};if(n.trainingConfig!=null&&(r.trainingConfig=n.trainingConfig),n.weightsManifest!=null){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!e)throw new Error("modelJSON has weightsManifest but weightData is null");r.weightSpecs=t,r.weightData=e}return n.signature!=null&&(r.signature=n.signature),n.userDefinedMetadata!=null&&(r.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(r.modelInitializer=n.modelInitializer),r}async function Bs(n,t){let e,r;return n.weightsManifest!=null&&([e,r]=await t(n.weightsManifest)),yi(n,e,r)}function En(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:n.modelTopology==null?0:$o(JSON.stringify(n.modelTopology)),weightSpecsBytes:n.weightSpecs==null?0:$o(JSON.stringify(n.weightSpecs)),weightDataBytes:n.weightData==null?0:n.weightData.byteLength}}function gi(n){const t=[];for(const e of n)t.push(...e.weights);return t}function uf(){const n=e=>{let r=e<<13,s=0;for(;(r&8388608)===0;)s-=8388608,r<<=1;return r&=-8388609,s+=947912704,r|s},t=new Uint32Array(2048);t[0]=0;for(let e=1;e<1024;e++)t[e]=n(e);for(let e=1024;e<2048;e++)t[e]=939524096+(e-1024<<13);return t}function lf(){const n=new Uint32Array(64);n[0]=0,n[31]=1199570944,n[32]=2147483648,n[63]=3347054592;for(let t=1;t<31;t++)n[t]=t<<23;for(let t=33;t<63;t++)n[t]=2147483648+(t-32<<23);return n}function cf(){const n=new Uint32Array(64);for(let t=0;t<64;t++)n[t]=1024;return n[0]=n[32]=0,n}function hf(){const n=uf(),t=lf(),e=cf();return r=>{const s=new ArrayBuffer(4*r.length),a=new Uint32Array(s);for(let o=0;o<r.length;o++){const u=r[o],l=n[e[u>>10]+(u&1023)]+t[u>>10];a[o]=l}return new Float32Array(s)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ft{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return ft.instance==null&&(ft.instance=new ft),ft.instance}static registerSaveRouter(t){ft.getInstance().saveRouters.push(t)}static registerLoadRouter(t){ft.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return ft.getHandlers(t,"save")}static getLoadHandlers(t,e){return ft.getHandlers(t,"load",e)}static getHandlers(t,e,r){const s=[];return(e==="load"?ft.getInstance().loadRouters:ft.getInstance().saveRouters).forEach(o=>{const u=o(t,r);u!==null&&s.push(u)}),s}}const pf=n=>ft.registerSaveRouter(n),ff=n=>ft.registerLoadRouter(n),df=n=>ft.getSaveHandlers(n),mf=(n,t)=>ft.getLoadHandlers(n,t);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hs="tensorflowjs",ps=1,Fe="models_store",Ne="model_info_store";function bi(){if(!rt().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const n=typeof window=="undefined"?self:window,t=n.indexedDB||n.mozIndexedDB||n.webkitIndexedDB||n.msIndexedDB||n.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function fs(n){const t=n.result;t.createObjectStore(Fe,{keyPath:"modelPath"}),t.createObjectStore(Ne,{keyPath:"modelPath"})}class Be{constructor(t){if(this.indexedDB=bi(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,e){return new Promise((r,s)=>{const a=this.indexedDB.open(hs,ps);a.onupgradeneeded=()=>fs(a),a.onsuccess=()=>{const o=a.result;if(e==null){const u=o.transaction(Fe,"readonly"),c=u.objectStore(Fe).get(this.modelPath);c.onsuccess=()=>{if(c.result==null)return o.close(),s(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));r(c.result.modelArtifacts)},c.onerror=f=>(o.close(),s(c.error)),u.oncomplete=()=>o.close()}else{const u=En(e),l=o.transaction(Ne,"readwrite");let c=l.objectStore(Ne);const f=c.put({modelPath:this.modelPath,modelArtifactsInfo:u});let p;f.onsuccess=()=>{p=o.transaction(Fe,"readwrite");const b=p.objectStore(Fe).put({modelPath:this.modelPath,modelArtifacts:e,modelArtifactsInfo:u});b.onsuccess=()=>r({modelArtifactsInfo:u}),b.onerror=v=>{c=l.objectStore(Ne);const x=c.delete(this.modelPath);x.onsuccess=()=>(o.close(),s(b.error)),x.onerror=E=>(o.close(),s(b.error))}},f.onerror=y=>(o.close(),s(f.error)),l.oncomplete=()=>{p==null?o.close():p.oncomplete=()=>o.close()}}},a.onerror=o=>s(a.error)})}}Be.URL_SCHEME="indexeddb://";const wi=n=>rt().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Be.URL_SCHEME)?yf(n.slice(Be.URL_SCHEME.length)):null;ft.registerSaveRouter(wi);ft.registerLoadRouter(wi);function yf(n){return new Be(n)}function gf(n){return n.startsWith(Be.URL_SCHEME)?n.slice(Be.URL_SCHEME.length):n}class bf{constructor(){this.indexedDB=bi()}async listModels(){return new Promise((t,e)=>{const r=this.indexedDB.open(hs,ps);r.onupgradeneeded=()=>fs(r),r.onsuccess=()=>{const s=r.result,a=s.transaction(Ne,"readonly"),u=a.objectStore(Ne).getAll();u.onsuccess=()=>{const l={};for(const c of u.result)l[c.modelPath]=c.modelArtifactsInfo;t(l)},u.onerror=l=>(s.close(),e(u.error)),a.oncomplete=()=>s.close()},r.onerror=s=>e(r.error)})}async removeModel(t){return t=gf(t),new Promise((e,r)=>{const s=this.indexedDB.open(hs,ps);s.onupgradeneeded=()=>fs(s),s.onsuccess=()=>{const a=s.result,o=a.transaction(Ne,"readwrite"),u=o.objectStore(Ne),l=u.get(t);let c;l.onsuccess=()=>{if(l.result==null)return a.close(),r(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const f=u.delete(t),p=()=>{c=a.transaction(Fe,"readwrite");const b=c.objectStore(Fe).delete(t);b.onsuccess=()=>e(l.result.modelArtifactsInfo),b.onerror=v=>r(l.error)};f.onsuccess=p,f.onerror=y=>(p(),a.close(),r(l.error))}},l.onerror=f=>(a.close(),r(l.error)),o.oncomplete=()=>{c==null?a.close():c.oncomplete=()=>a.close()}},s.onerror=a=>r(s.error)})}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pe="/",Xe="tensorflowjs_models",vi="info",wf="model_topology",vf="weight_specs",Nf="weight_data",Tf="model_metadata";function Ni(n){return{info:[Xe,n,vi].join(pe),topology:[Xe,n,wf].join(pe),weightSpecs:[Xe,n,vf].join(pe),weightData:[Xe,n,Nf].join(pe),modelMetadata:[Xe,n,Tf].join(pe)}}function Ti(n){for(const t of Object.values(n))window.localStorage.removeItem(t)}function Sf(n){const t=n.split(pe);if(t.length<3)throw new Error(`Invalid key format: ${n}`);return t.slice(1,t.length-1).join(pe)}function xf(n){return n.startsWith(ze.URL_SCHEME)?n.slice(ze.URL_SCHEME.length):n}class ze{constructor(t){if(!rt().getBool("IS_BROWSER")||typeof window=="undefined"||typeof window.localStorage=="undefined")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=Ni(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const e=JSON.stringify(t.modelTopology),r=JSON.stringify(t.weightSpecs),s=En(t);try{this.LS.setItem(this.keys.info,JSON.stringify(s)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,af(t.weightData));const a={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(a)),{modelArtifactsInfo:s}}catch{throw Ti(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${s.modelTopologyBytes}, weightSpecsBytes=${s.weightSpecsBytes}, weightDataBytes=${s.weightDataBytes}.`)}}}async load(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const e={},r=JSON.parse(this.LS.getItem(this.keys.topology));if(r==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);e.modelTopology=r;const s=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(s==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);e.weightSpecs=s;const a=this.LS.getItem(this.keys.modelMetadata);if(a!=null){const u=JSON.parse(a);e.format=u.format,e.generatedBy=u.generatedBy,e.convertedBy=u.convertedBy,u.signature!=null&&(e.signature=u.signature),u.userDefinedMetadata!=null&&(e.userDefinedMetadata=u.userDefinedMetadata),u.modelInitializer!=null&&(e.modelInitializer=u.modelInitializer),u.trainingConfig!=null&&(e.trainingConfig=u.trainingConfig)}const o=this.LS.getItem(this.keys.weightData);if(o==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return e.weightData=of(o),e}}ze.URL_SCHEME="localstorage://";const Si=n=>rt().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(ze.URL_SCHEME)?kf(n.slice(ze.URL_SCHEME.length)):null;ft.registerSaveRouter(Si);ft.registerLoadRouter(Si);function kf(n){return new ze(n)}class Ef{constructor(){k(rt().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),k(typeof window=="undefined"||typeof window.localStorage!="undefined",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const t={},e=Xe+pe,r=pe+vi;for(let s=0;s<this.LS.length;++s){const a=this.LS.key(s);if(a.startsWith(e)&&a.endsWith(r)){const o=Sf(a);t[o]=JSON.parse(this.LS.getItem(a))}}return t}async removeModel(t){t=xf(t);const e=Ni(t);if(this.LS.getItem(e.info)==null)throw new Error(`Cannot find model at path '${t}'`);const r=JSON.parse(this.LS.getItem(e.info));return Ti(e),r}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ye="://";class At{constructor(){this.managers={}}static getInstance(){return At.instance==null&&(At.instance=new At),At.instance}static registerManager(t,e){k(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(Ye)&&(t=t.slice(0,t.indexOf(Ye))),k(t.length>0,()=>"scheme must not be an empty string.");const r=At.getInstance();k(r.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),r.managers[t]=e}static getManager(t){const e=At.getInstance().managers[t];if(e==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return e}static getSchemes(){return Object.keys(At.getInstance().managers)}}function Un(n){if(n.indexOf(Ye)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${At.getSchemes().join(",")}`);return{scheme:n.split(Ye)[0],path:n.split(Ye)[1]}}async function xi(n,t,e=!1){k(n!==t,()=>`Old path and new path are the same: '${n}'`);const r=ft.getLoadHandlers(n);k(r.length>0,()=>`Copying failed because no load handler is found for source URL ${n}.`),k(r.length<2,()=>`Copying failed because more than one (${r.length}) load handlers for source URL ${n}.`);const s=r[0],a=ft.getSaveHandlers(t);k(a.length>0,()=>`Copying failed because no save handler is found for destination URL ${t}.`),k(a.length<2,()=>`Copying failed because more than one (${r.length}) save handlers for destination URL ${t}.`);const o=a[0],u=Un(n).scheme,l=Un(n).path,c=u===Un(n).scheme,f=await s.load();e&&c&&await At.getManager(u).removeModel(l);const p=await o.save(f);return e&&!c&&await At.getManager(u).removeModel(l),p.modelArtifactsInfo}async function _f(){const n=At.getSchemes(),t={};for(const e of n){const r=await At.getManager(e).listModels();for(const s in r){const a=e+Ye+s;t[a]=r[s]}}return t}async function $f(n){const t=Un(n);return At.getManager(t.scheme).removeModel(t.path)}async function If(n,t){return xi(n,t,!1)}async function Af(n,t){return xi(n,t,!0)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Of{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,e){return fetch(t,e)}now(){return performance.now()}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${e}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,e){return new TextDecoder(e).decode(t)}setTimeoutCustom(t,e){if(!window||!rt().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,e);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},e),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",r=>{if(r.source===window&&r.data.name===this.messageName){r.stopPropagation();const s=this.functionRefs[r.data.index];s(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}}if(rt().get("IS_BROWSER")){rt().setPlatform("browser",new Of);try{At.registerManager(ze.URL_SCHEME,new Ef)}catch{}try{At.registerManager(Be.URL_SCHEME,new bf)}catch{}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Df={importFetch:()=>require("node-fetch")};let qr;class Cf{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(t,e){return rt().global.fetch!=null?rt().global.fetch(t,e):(qr==null&&(qr=Df.importFetch()),qr(t,e))}now(){const t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${e}`);return this.textEncoder.encode(t)}decode(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)}}rt().get("IS_NODE")&&!rt().get("IS_BROWSER")&&rt().setPlatform("node",new Cf);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function de(n,t="float32",e){return t=t||"float32",Qo(n),new ss(n,t,e)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ff(n,t){const e=w(n,"x","cast");if(!Vl(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");const r={x:e},s={dtype:t};return I.runKernel(ri,r,s)}const mt=_({cast_:Ff});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pf(n){const e={x:w(n,"x","clone","string_or_numeric")};return I.runKernel(si,e)}const Se=_({clone_:Pf});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ki(n,t=!1){console.log(n.toString(t))}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */hi();const Lf={buffer:de,cast:mt,clone:Se,print:ki};qp(Lf);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Rf="model",Bf=".json",zf=".weights.bin";function Ao(n){return new Promise(t=>setTimeout(t)).then(n)}class Ve{constructor(t){if(!rt().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(Ve.URL_SCHEME)&&(t=t.slice(Ve.URL_SCHEME.length)),(t==null||t.length===0)&&(t=Rf),this.modelJsonFileName=t+Bf,this.weightDataFileName=t+zf}async save(t){if(typeof document=="undefined")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const r=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],s=mi(t,r),a=window.URL.createObjectURL(new Blob([JSON.stringify(s)],{type:"application/json"})),o=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(o.download=this.modelJsonFileName,o.href=a,await Ao(()=>o.dispatchEvent(new MouseEvent("click"))),t.weightData!=null){const u=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;u.download=this.weightDataFileName,u.href=e,await Ao(()=>u.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:En(t)}}}}Ve.URL_SCHEME="downloads://";class Vf{constructor(t){if(t==null||t.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${t}`);this.jsonFile=t[0],this.weightsFiles=t.slice(1)}async load(){return new Promise((t,e)=>{const r=new FileReader;r.onload=s=>{const a=JSON.parse(s.target.result),o=a.modelTopology;if(o==null){e(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(a.weightsManifest==null){e(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){t({modelTopology:o});return}const l=Bs(a,c=>this.loadWeights(c));t(l)},r.onerror=s=>e(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),r.readAsText(this.jsonFile)})}loadWeights(t){const e=[],r=[];for(const o of t)e.push(...o.weights),r.push(...o.paths);const s=this.checkManifestAndWeightFiles(t),a=r.map(o=>this.loadWeightsFile(o,s[o]));return Promise.all(a).then(o=>[e,Rs(o)])}loadWeightsFile(t,e){return new Promise((r,s)=>{const a=new FileReader;a.onload=o=>{const u=o.target.result;r(u)},a.onerror=o=>s(`Failed to weights data from file of path '${t}'.`),a.readAsArrayBuffer(e)})}checkManifestAndWeightFiles(t){const e=[],r=this.weightsFiles.map(a=>Io(a.name)),s={};for(const a of t)a.paths.forEach(o=>{const u=Io(o);if(e.indexOf(u)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${u}'`);if(e.push(u),r.indexOf(u)===-1)throw new Error(`Weight file with basename '${u}' is not provided.`);s[o]=this.weightsFiles[r.indexOf(u)]});if(e.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${e.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return s}}const jf=n=>rt().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Ve.URL_SCHEME)?Mf(n.slice(Ve.URL_SCHEME.length)):null;ft.registerSaveRouter(jf);function Mf(n="model"){return new Ve(n)}function Hf(n){return new Vf(n)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Oo(n,t,e,r){o(n),e=e==null?0:e,r=r==null?1:r,u(e,r);let s=0;const a=l=>(l.then(c=>{const f=e+ ++s/n.length*(r-e);return t(f),c}),l);function o(l){k(l!=null&&Array.isArray(l)&&l.length>0,()=>"promises must be a none empty array")}function u(l,c){k(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${l}`),k(c>=0&&c<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${c}`),k(c>=l,()=>`startFraction must be no more than endFraction, but got startFraction ${l} and endFraction ${c}`)}return Promise.all(n.map(a))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Ei(n,t){t==null&&(t={});const e=t.fetchFunc==null?rt().platform.fetch:t.fetchFunc,r=n.map(p=>e(p,t.requestInit,{isBinary:!0})),s=0,a=.5,u=(t.onProgress==null?await Promise.all(r):await Oo(r,t.onProgress,s,a)).map(p=>p.arrayBuffer()),l=.5,c=1;return t.onProgress==null?await Promise.all(u):await Oo(u,t.onProgress,l,c)}async function Uf(n,t="",e,r){return _i(o=>Ei(o,{requestInit:r}))(n,t,e)}function _i(n){return async(t,e="",r)=>{const s=t.map(()=>!1),a={},o=r!=null?r.map(()=>!1):[],u=[];if(t.forEach((b,v)=>{let x=0;b.weights.forEach(E=>{const A="quantization"in E?E.quantization.dtype:E.dtype,M=cs[A]*Tt(E.shape),L=()=>{s[v]=!0,a[v]==null&&(a[v]=[]),a[v].push({manifestEntry:E,groupOffset:x,sizeBytes:M})};r!=null?r.forEach((D,C)=>{D===E.name&&(L(),o[C]=!0)}):L(),u.push(E.name),x+=M})}),!o.every(b=>b)){const b=r.filter((v,x)=>!o[x]);throw new Error(`Could not find weights in manifest with names: ${b.join(", ")}. 
Manifest JSON has weights with names: ${u.join(", ")}.`)}const l=s.reduce((b,v,x)=>(v&&b.push(x),b),[]),c=[];l.forEach(b=>{t[b].paths.forEach(v=>{const x=e+(e.endsWith("/")?"":"/")+v;c.push(x)})});const f=await n(c),p={};let y=0;return l.forEach(b=>{const v=t[b].paths.length;let x=0;for(let D=0;D<v;D++)x+=f[y+D].byteLength;const E=new ArrayBuffer(x),A=new Uint8Array(E);let M=0;for(let D=0;D<v;D++){const C=new Uint8Array(f[y+D]);A.set(C,M),M+=C.byteLength}a[b].forEach(D=>{const C=E.slice(D.groupOffset,D.groupOffset+D.sizeBytes),B=di(C,[D.manifestEntry]);for(const U in B)p[U]=B[U]}),y+=v}),p}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kf="application/octet-stream",Wf="application/json";class zs{constructor(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,this.weightUrlConverter=e.weightUrlConverter,e.fetchFunc!=null?(k(typeof e.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=e.fetchFunc):this.fetch=rt().platform.fetch,k(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&k(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);e.body=new FormData;const r=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],s=mi(t,r);e.body.append("model.json",new Blob([JSON.stringify(s)],{type:Wf}),"model.json"),t.weightData!=null&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:Kf}),"model.weights.bin");const a=await this.fetch(this.path,e);if(a.ok)return{modelArtifactsInfo:En(t),responses:[a]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${a.status}.`)}async load(){const t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let e;try{e=await t.json()}catch{let o=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?o+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":o+=" Please make sure the server is serving valid JSON for this request.",new Error(o)}const r=e.modelTopology,s=e.weightsManifest;if(r==null&&s==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return Bs(e,a=>this.loadWeights(a))}async loadWeights(t){const e=Array.isArray(this.path)?this.path[1]:this.path,[r,s]=qf(e),a=this.weightPathPrefix||r,o=gi(t),u=[],l=[];for(const f of t)for(const p of f.paths)this.weightUrlConverter!=null?l.push(this.weightUrlConverter(p)):u.push(a+p+s);this.weightUrlConverter&&u.push(...await Promise.all(l));const c=await Ei(u,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress});return[o,Rs(c)]}}zs.URL_SCHEME_REGEX=/^https?:\/\//;function qf(n){const t=n.lastIndexOf("/"),e=n.lastIndexOf("?"),r=n.substring(0,t),s=e>t?n.substring(e):"";return[r+"/",s]}function ds(n){return n.match(zs.URL_SCHEME_REGEX)!=null}const $i=(n,t)=>{if(typeof fetch=="undefined"&&(t==null||t.fetchFunc==null))return null;{let e=!0;if(Array.isArray(n)?e=n.every(r=>ds(r)):e=ds(n),e)return Vs(n,t)}return null};ft.registerSaveRouter($i);ft.registerLoadRouter($i);function Vs(n,t){return new zs(n,t)}function Gf(n,t){return Vs(n,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Gr{constructor(t){this.modelArtifacts=t}load(){return this.modelArtifacts}}class Ii{constructor(t){this.saveHandler=t}save(t){return this.saveHandler(t)}}class Xf{constructor(t){t.load&&(this.load=()=>Promise.resolve(t.load())),t.save&&(this.save=e=>Promise.resolve(t.save(e)))}}function Yf(n,t,e,r){const s=arguments;return new Xf(Ai(...s))}function Ai(n,t,e,r){return arguments.length===1?n.modelTopology!=null||n.weightSpecs!=null?new Gr(n):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Gr({modelTopology:n})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Gr({modelTopology:n,weightSpecs:t,weightData:e,trainingConfig:r}))}function Jf(n){return new Ii(n)}function Zf(n){return new Ii(n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Oi=Object.freeze(Object.defineProperty({__proto__:null,browserFiles:Hf,browserHTTPRequest:Gf,concatenateArrayBuffers:Rs,decodeWeights:di,encodeWeights:rf,fromMemory:Yf,fromMemorySync:Ai,getLoadHandlers:mf,getModelArtifactsForJSON:Bs,getModelArtifactsForJSONSync:yi,getModelArtifactsInfoForJSON:En,getSaveHandlers:df,getWeightSpecs:gi,http:Vs,isHTTPScheme:ds,loadWeights:Uf,registerLoadRouter:ff,registerSaveRouter:pf,weightsLoaderFactory:_i,withSaveHandler:Jf,withSaveHandlerSync:Zf,copyModel:If,listModels:_f,moveModel:Af,removeModel:$f},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qf(n,t,e=!1,r=!1){let s=w(n,"a","matMul"),a=w(t,"b","matMul");[s,a]=dt(s,a);const o={a:s,b:a},u={transposeA:e,transposeB:r};return I.runKernel(hc,o,u)}const ot=_({matMul_:Qf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function td(n,t,e=1,r=0,s="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);const o={indices:w(n,"indices","oneHot","int32")},u={dtype:s,depth:t,onValue:e,offValue:r};return I.runKernel(Fh,o,u)}const ed=_({oneHot_:td});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function St(n,t){return I.tidy(n,t)}function se(n){li(n).forEach(e=>e.dispose())}function Te(n){return I.keep(n)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nd(n){const e={input:w(n,"input","imag")};return I.runKernel(nh,e)}const ur=_({imag_:nd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rd(n){const e={x:w(n,"x","neg")};return I.runKernel($h,e)}const fe=_({neg_:rd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sd(n){const e={input:w(n,"input","real")};return I.runKernel(Hh,e)}const Nn=_({real_:sd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ad(n,t,e){const r=w(n,"x","transpose");if(t==null&&(t=r.shape.map((o,u)=>u).reverse()),k(r.rank===t.length,()=>`Error in transpose: rank of input ${r.rank} must match length of perm ${t}.`),t.forEach(o=>{k(o>=0&&o<r.rank,()=>`All entries in 'perm' must be between 0 and ${r.rank-1} but got ${t}`)}),r.rank<=1)return r.clone();const s={x:r},a={perm:t};return r.dtype==="complex64"?St(()=>{let o=Nn(r),u=ur(r);return o=I.runKernel(Ur,{x:o},a),u=I.runKernel(Ur,{x:u},a),e&&(u=fe(u)),ke(o,u)}):I.runKernel(Ur,s,a)}const ms=_({transpose_:ad});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function od(n,t){const e=[];for(let r=0;r<t.length;r++){const s=n[n.length-r-1],a=t.length-r-1,o=t[a];(s==null||s===1&&o>1)&&e.unshift(a)}return e}function wt(n,t){const e=[],r=Math.max(n.length,t.length);for(let s=0;s<r;s++){let a=n[n.length-s-1];a==null&&(a=1);let o=t[t.length-s-1];if(o==null&&(o=1),a===1)e.unshift(o);else if(o===1)e.unshift(a);else if(a!==o){const u=`Operands could not be broadcast together with shapes ${n} and ${t}.`;throw Error(u)}else e.unshift(a)}return e}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Di(n,t,e){if(nn(n),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");const r=Ee(n,e);if(r.length!==3&&r.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return _e(n,t,r,e)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Ce;function id(n,t=3){if(t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(n==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let e=!1,r=!1,s=!1,a=!1,o=!1,u=!1;if(n.data instanceof Uint8Array)e=!0;else if(typeof ImageData!="undefined"&&n instanceof ImageData)r=!0;else if(typeof HTMLVideoElement!="undefined"&&n instanceof HTMLVideoElement)s=!0;else if(typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement)a=!0;else if(n.getContext!=null)o=!0;else if(typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap)u=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${n.constructor.name}`);if(rs(go,I.backendName)!=null){const v={pixels:n},x={numChannels:t};return I.runKernel(go,v,x)}const[c,f]=s?[n.videoWidth,n.videoHeight]:[n.width,n.height];let p;if(o)p=n.getContext("2d").getImageData(0,0,c,f).data;else if(r||e)p=n.data;else if(a||s||u){if(Ce==null)if(typeof document=="undefined")if(typeof OffscreenCanvas!="undefined"&&typeof OffscreenCanvasRenderingContext2D!="undefined")Ce=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else Ce=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});Ce.canvas.width=c,Ce.canvas.height=f,Ce.drawImage(n,0,0,c,f),p=Ce.getImageData(0,0,c,f).data}let y;if(t===4)y=new Int32Array(p);else{const v=c*f;y=new Int32Array(v*t);for(let x=0;x<v;x++)for(let E=0;E<t;++E)y[x*t+E]=p[x*4+E]}return Di(y,[f,c,t],"int32")}async function ud(n,t){let e=w(n,"img","toPixels");if(!(n instanceof gt)){const c=e;e=mt(c,"int32"),c.dispose()}if(e.rank!==2&&e.rank!==3)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${e.rank}.`);const[r,s]=e.shape.slice(0,2),a=e.rank===2?1:e.shape[2];if(a>4||a===2)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${a}`);if(e.dtype!=="float32"&&e.dtype!=="int32")throw new Error(`Unsupported type for toPixels: ${e.dtype}. Please use float32 or int32 tensors.`);const o=await e.data(),u=e.dtype==="float32"?255:1,l=new Uint8ClampedArray(s*r*4);for(let c=0;c<r*s;++c){const f=[0,0,0,255];for(let y=0;y<a;y++){const b=o[c*a+y];if(e.dtype==="float32"){if(b<0||b>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${b}.`)}else if(e.dtype==="int32"&&(b<0||b>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${b}.`);a===1?(f[0]=b*u,f[1]=b*u,f[2]=b*u):f[y]=b*u}const p=c*4;l[p+0]=Math.round(f[0]),l[p+1]=Math.round(f[1]),l[p+2]=Math.round(f[2]),l[p+3]=Math.round(f[3])}if(t!=null){t.width=s,t.height=r;const c=t.getContext("2d"),f=new ImageData(l,s,r);c.putImageData(f,0,0)}return e!==n&&e.dispose(),l}const ld=_({fromPixels_:id});function cd(n,t,e){const r=t.rank>1?t.shape[t.rank-1]:1,s=t.rank>1?t.rank-1:1,a=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${e.shape}, indices.shape: ${t.shape}, shape: ${n}, sliceDim: ${r}, and batchDim: ${s}.`;if(e.rank<s)throw new Error(a+` update.rank < ${s}. `);if(n.length<r+(e.rank-s))throw new Error(a+` Output shape length < ${r+(e.rank-s)}`);if(e.rank!==s+n.length-r)throw new Error(a+` update.rank != ${s+n.length-r}`);for(let o=0;o<s;++o)if(e.shape[o]!==t.shape[o])throw new Error(a+` updates.shape[${o}] (${e.shape[o]}) != indices.shape[${o}] (${t.shape[o]}).`);for(let o=0;o<e.rank-s;++o)if(e.shape[o+s]!==n[o+r])throw new Error(a+` updates.shape[${o+s}] (${e.shape[o+s]}) != shape[${o+s}] (${n[o+s]})`)}function hd(n,t,e){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(n.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${n.rank}.`);if(t.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(e.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${e}`);if(e.length===0){if(t.size===0)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(n.size===0)throw new Error(`Updates specified for empty output. updates shape: ${n.shape}`)}cd(e,t,n)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pd(n,t){let e=w(n,"a","add"),r=w(t,"b","add");[e,r]=dt(e,r);const s={a:e,b:r};return I.runKernel(ni,s)}const lt=_({add_:pd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fd(n,t){let e=w(n,"a","floorDiv"),r=w(t,"b","floorDiv");[e,r]=dt(e,r);const s={a:e,b:r};return I.runKernel(Xc,s)}const Ci=_({floorDiv_:fd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dd(n,t){let e=w(n,"a","div"),r=w(t,"b","div");if([e,r]=dt(e,r),e.dtype==="int32"&&r.dtype==="int32")return Ci(e,r);const s={a:e,b:r},a={};return I.runKernel(Rc,s,a)}const it=_({div_:dd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function md(n,t){let e=w(n,"a","mul"),r=w(t,"b","mul");[e,r]=dt(e,r);const s={a:e,b:r};return I.runKernel(_h,s)}const G=_({mul_:md});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yd(n){const t=w(n,"x","abs");if(t.dtype==="complex64"){const e={x:t};return I.runKernel(bc,e)}else{const e={x:t};return I.runKernel(Yl,e)}}const Ut=_({abs_:yd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gd(n){const e={x:w(n,"x","acos")};return I.runKernel(Jl,e)}const bd=_({acos_:gd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wd(n){const e={x:w(n,"x","acosh")};return I.runKernel(Zl,e)}const vd=_({acosh_:wd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nd(n){k(Array.isArray(n),()=>"The argument passed to tf.addN() must be a list of tensors"),k(n.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${n.length}`);const t=n.map((s,a)=>w(s,`tensors${a}`,"addN")),e=t[0];t.forEach(s=>{if(s.dtype!==e.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(s=>{if(!xe(s.shape,e.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});const r=t;return I.runKernel(Ql,r)}const Td=_({addN_:Nd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sd(n,t=null,e=!1){const s={x:w(n,"x","all","bool")},a={axis:t,keepDims:e};return I.runKernel(tc,s,a)}const xd=_({all_:Sd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kd(n,t=null,e=!1){const s={x:w(n,"x","any","bool")},a={axis:t,keepDims:e};return I.runKernel(ec,s,a)}const Ed=_({any_:kd});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _d(n,t=0){const r={x:w(n,"x","argMax")},s={axis:t};return I.runKernel(nc,r,s)}const $d=_({argMax_:_d});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Id(n,t=0){const r={x:w(n,"x","argMin")},s={axis:t};return I.runKernel(rc,r,s)}const Ad=_({argMin_:Id});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Od(n){const e={x:w(n,"x","asin")};return I.runKernel(sc,e)}const Dd=_({asin_:Od});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cd(n){const e={x:w(n,"x","asinh")};return I.runKernel(ac,e)}const Fd=_({asinh_:Cd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pd(n){const e={x:w(n,"x","atan")};return I.runKernel(oc,e)}const Ld=_({atan_:Pd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rd(n,t){let e=w(n,"a","atan2"),r=w(t,"b","atan2");[e,r]=dt(e,r);const s={a:e,b:r};return I.runKernel(uc,s)}const Bd=_({atan2_:Rd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zd(n){const e={x:w(n,"x","atanh")};return I.runKernel(ic,e)}const Vd=_({atanh_:zd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jd(n,t,e,r,s,a,o="channelsLast"){const[u,l]=Yn(t);let c;if(o==="channelsLast")c=[u,l,n[3],n[3]];else if(o==="channelsFirst")c=[u,l,n[1],n[1]];else throw new Error(`Unknown dataFormat ${o}`);return js(n,c,e,r,s,a,!1,o)}function js(n,t,e,r,s,a,o=!1,u="channelsLast"){let[l,c,f,p]=[-1,-1,-1,-1];if(u==="channelsLast")[l,c,f,p]=n;else if(u==="channelsFirst")[l,p,c,f]=n;else throw new Error(`Unknown dataFormat ${u}`);const[y,b,,v]=t,[x,E]=Yn(e),[A,M]=Yn(r),L=ys(y,A),D=ys(b,M),{padInfo:C,outHeight:B,outWidth:U}=Ud(s,c,f,x,E,L,D,a,u),F=o?v*p:v;let R;return u==="channelsFirst"?R=[l,F,B,U]:u==="channelsLast"&&(R=[l,B,U,F]),{batchSize:l,dataFormat:u,inHeight:c,inWidth:f,inChannels:p,outHeight:B,outWidth:U,outChannels:F,padInfo:C,strideHeight:x,strideWidth:E,filterHeight:y,filterWidth:b,effectiveFilterHeight:L,effectiveFilterWidth:D,dilationHeight:A,dilationWidth:M,inShape:n,outShape:R,filterShape:t}}function Md(n,t,e,r,s){r==null&&(r=Hd(n,t,e));const a=n[0],o=n[1],u=Jn((a-t+2*r)/e+1,s),l=Jn((o-t+2*r)/e+1,s);return[u,l]}function Hd(n,t,e,r=1){const s=ys(t,r);return Math.floor((n[0]*(e-1)-e+s)/2)}function Yn(n){return typeof n=="number"?[n,n,n]:n.length===2?[n[0],n[1],1]:n}function ys(n,t){return t<=1?n:n+(n-1)*(t-1)}function Ud(n,t,e,r,s,a,o,u,l){let c,f,p;if(typeof n=="number"){c={top:n,bottom:n,left:n,right:n,type:n===0?"VALID":"NUMBER"};const b=Md([t,e],a,r,n,u);f=b[0],p=b[1]}else if(n==="same"){f=Math.ceil(t/r),p=Math.ceil(e/s);const y=Math.max(0,(f-1)*r+a-t),b=Math.max(0,(p-1)*s+o-e),v=Math.floor(y/2),x=y-v,E=Math.floor(b/2),A=b-E;c={top:v,bottom:x,left:E,right:A,type:"SAME"}}else if(n==="valid")c={top:0,bottom:0,left:0,right:0,type:"VALID"},f=Math.ceil((t-a+1)/r),p=Math.ceil((e-o+1)/s);else if(typeof n=="object"){const y=l==="channelsLast"?n[1][0]:n[2][0],b=l==="channelsLast"?n[1][1]:n[2][1],v=l==="channelsLast"?n[2][0]:n[3][0],x=l==="channelsLast"?n[2][1]:n[3][1];c={top:y,bottom:b,left:v,right:x,type:y===0&&b===0&&v===0&&x===0?"VALID":"EXPLICIT"},f=Jn((t-a+y+b)/r+1,u),p=Jn((e-o+v+x)/s+1,u)}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:c,outHeight:f,outWidth:p}}function Jn(n,t){if(!t)return Math.trunc(n);switch(t){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error(`Unknown roundingMode ${t}`)}}function Zn(n){const[t,e,r]=Yn(n);return t===1&&e===1&&r===1}function $e(n,t){return Zn(n)||Zn(t)}function Zt(n,t,e){if(e!=null){if(typeof t=="string")throw Error(`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);if(typeof t=="number")k(vn(t),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);else if(typeof t=="object")t.forEach(r=>{r.forEach(s=>{k(vn(s),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${s}.`)})});else throw Error(`Error in ${n}: Unknown padding parameter: ${t}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kd(n,t){const r={x:w(n,"x","reshape","string_or_numeric")},s={shape:t};return I.runKernel(Wh,r,s)}const P=_({reshape_:Kd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wd(n,t,e,r,s){const a=w(n,"x","avgPool","float32"),o=1;k($e(e,o),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${o}'`);let u=a,l=!1;a.rank===3&&(l=!0,u=P(a,[1,a.shape[0],a.shape[1],a.shape[2]])),k(u.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${u.rank}.`),Zt("avgPool",r,s);const c={x:u},f={filterSize:t,strides:e,pad:r,dimRoundingMode:s};let p=I.runKernel(lc,c,f);return p=mt(p,a.dtype),l?P(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const Fi=_({avgPool_:Wd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qd(n,t,e,r,s,a="NDHWC"){const o=w(n,"x","avgPool3d","float32");let u=o,l=!1;o.rank===4&&(l=!0,u=P(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),k(u.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${u.rank}.`),k(a==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`),Zt("avgPool3d",r,s);const c={x:u},f={filterSize:t,strides:e,pad:r,dimRoundingMode:s,dataFormat:a};let p=I.runKernel(cc,c,f);return p=mt(p,u.dtype),l?P(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}const Gd=_({avgPool3d_:qd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xd(n,t=0){k(n.length>=1,()=>"Pass at least one tensor to concat");const e=Gn(n,"tensors","concat","string_or_numeric");if(e[0].dtype==="complex64"&&e.forEach(a=>{if(a.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${a.dtype}. `)}),e.length===1)return Se(e[0]);const r=e,s={axis:t};return I.runKernel(wc,r,s)}const xt=_({concat_:Xd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yd(n){const e={x:w(n,"x","sigmoid","float32")};return I.runKernel(ip,e)}const Le=_({sigmoid_:Yd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jd(n,t,e){const r=w(n,"x","slice","string_or_numeric");if(r.rank===0)throw new Error("Slicing scalar is not possible");const s={x:r},a={begin:t,size:e};return I.runKernel(rp,s,a)}const Z=_({slice_:Jd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zd(n){const e={x:w(n,"x","tanh","float32")};return I.runKernel(Ep,e)}const gs=_({tanh_:Zd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qd(n,t,e,r,s,a){const o=w(n,"forgetBias","basicLSTMCell"),u=w(t,"lstmKernel","basicLSTMCell"),l=w(e,"lstmBias","basicLSTMCell"),c=w(r,"data","basicLSTMCell"),f=w(s,"c","basicLSTMCell"),p=w(a,"h","basicLSTMCell"),y=xt([c,p],1),b=ot(y,u),v=lt(b,l),x=v.shape[0],E=v.shape[1]/4,A=[x,E],M=Z(v,[0,0],A),L=Z(v,[0,E],A),D=Z(v,[0,E*2],A),C=Z(v,[0,E*3],A),B=lt(G(Le(M),gs(L)),G(f,Le(lt(o,D)))),U=G(gs(B),Le(C));return[B,U]}const tm=_({basicLSTMCell_:Qd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function em(n,t,e){const r=w(n,"x","batchToSpaceND"),s=t.reduce((u,l)=>u*l);k(r.rank>=1+t.length,()=>`input rank is ${r.rank} but should be > than blockShape.length ${t.length}`),k(e.length===t.length,()=>`crops.length is ${e.length} but should be equal to blockShape.length  ${t.length}`),k(r.shape[0]%s===0,()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${s}`);const a={x:r},o={blockShape:t,crops:e};return I.runKernel(pc,a,o)}const Pi=_({batchToSpaceND_:em});function nm(n){let t;return n.rank===0||n.rank===1?t=P(n,[1,1,1,n.size]):n.rank===2?t=P(n,[1,1,n.shape[0],n.shape[1]]):n.rank===3?t=P(n,[1,n.shape[0],n.shape[1],n.shape[2]]):t=n,t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rm(n,t,e,r,s,a){a==null&&(a=.001);const o=w(n,"x","batchNorm"),u=w(t,"mean","batchNorm"),l=w(e,"variance","batchNorm");let c;s!=null&&(c=w(s,"scale","batchNorm"));let f;r!=null&&(f=w(r,"offset","batchNorm")),k(u.rank===l.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),k(f==null||u.rank===f.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),k(c==null||u.rank===c.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const y={x:nm(o),scale:c,offset:f,mean:u,variance:l},b={varianceEpsilon:a},v=I.runKernel(Yc,y,b);return P(v,o.shape)}const lr=_({batchNorm_:rm});function sm(n,t,e,r,s,a){const o=w(n,"x","batchNorm"),u=w(t,"mean","batchNorm"),l=w(e,"variance","batchNorm");let c;s!=null&&(c=w(s,"scale","batchNorm"));let f;return r!=null&&(f=w(r,"offset","batchNorm")),k(o.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${o.rank}.`),k(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${u.rank}.`),k(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${l.rank}.`),c!=null&&k(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${c.rank}.`),f!=null&&k(f.rank===2||f.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${f.rank}.`),lr(o,u,l,f,c,a)}const am=_({batchNorm2d_:sm});function om(n,t,e,r,s,a){const o=w(n,"x","batchNorm"),u=w(t,"mean","batchNorm"),l=w(e,"variance","batchNorm");let c;s!=null&&(c=w(s,"scale","batchNorm"));let f;return r!=null&&(f=w(r,"offset","batchNorm")),k(o.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${o.rank}.`),k(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${u.rank}.`),k(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${l.rank}.`),c!=null&&k(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${c.rank}.`),f!=null&&k(f.rank===3||f.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${f.rank}.`),lr(o,u,l,f,c,a)}const im=_({batchNorm3d_:om});function um(n,t,e,r,s,a){const o=w(n,"x","batchNorm"),u=w(t,"mean","batchNorm"),l=w(e,"variance","batchNorm");let c;s!=null&&(c=w(s,"scale","batchNorm"));let f;return r!=null&&(f=w(r,"offset","batchNorm")),k(o.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${o.rank}.`),k(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${u.rank}.`),k(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${l.rank}.`),c!=null&&k(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${c.rank}.`),f!=null&&k(f.rank===4||f.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${f.rank}.`),lr(o,u,l,f,c,a)}const lm=_({batchNorm4d_:um});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cm(n,t,e){const r=w(n,"x","bincount"),s=w(t,"weights","bincount");k(r.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`),k(e>=0,()=>`size must be non-negative, but got ${e}.`),k(s.size===r.size||s.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${s.shape}.`);const a={x:r,weights:s},o={size:e};return I.runKernel(fc,a,o)}const Li=_({bincount_:cm});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hm(n,t){const e=w(n,"s0","broadcastArgs","int32"),r=w(t,"s1","broadcastArgs","int32");if(e.rank!==1)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${e.rank}`);if(r.rank!==1)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${r.rank}`);const s={s0:e,s1:r};return I.runKernel(dc,s)}const pm=_({broadcastArgs_:hm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fm(n,t){let e=w(n,"broadcastTo","x");const r=e.shape;if(t.some(c=>!(c>0)||c%1!==0))throw new Error(`broadcastTo(): Invalid broadcast shape [${t}].`);if(t.length<e.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${e.rank}.`);if(t.length>e.rank){const c=e.shape.slice();for(;c.length<t.length;)c.unshift(1);e=P(e,c)}const s=e.shape,a=Array.from(t);for(let c=t.length-1;c>=0;c--)if(s[c]===t[c])a[c]=1;else if(e.shape[c]!==1)throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${t}].`);if(a.map((c,f)=>c>1?f:-1).filter(c=>c>=0).length===0)return Se(e);const u={x:e},l={reps:a};return I.runKernel(ai,u,l)}const Kn=_({broadcastTo_:fm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dm(n){const e={x:w(n,"x","ceil","float32")};return I.runKernel(mc,e)}const mm=_({ceil_:dm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cr(n,t,e){const r={shape:n,value:t,dtype:e};return I.runKernel(Wc,{},r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ym(n,t,e){const r=w(n,"x","clipByValue");if(k(t<=e,()=>`Error in clip: min (${t}) must be less than or equal to max (${e}).`),t===e)return cr(r.shape,t,r.dtype);const s={x:r},a={clipValueMin:t,clipValueMax:e};return I.runKernel(yc,s,a)}const Ri=_({clipByValue_:ym});function gm(n){return xt(n,0)}const bm=_({concat1d_:gm});function wm(n,t){return xt(n,t)}const vm=_({concat2d_:wm});function Nm(n,t){return xt(n,t)}const Tm=_({concat3d_:Nm});function Sm(n,t){return xt(n,t)}const xm=_({concat4d_:Sm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function km(n,t,e,r,s="NHWC",a=[1,1],o){const u=w(n,"x","conv2d","float32"),l=w(t,"filter","conv2d","float32");let c=u,f=!1;u.rank===3&&(f=!0,c=P(u,[1,u.shape[0],u.shape[1],u.shape[2]])),k(c.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${c.rank}.`),k(l.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${l.rank}.`),Zt("conv2d",r,o);const p=s==="NHWC"?c.shape[3]:c.shape[1];k(p===l.shape[2],()=>`Error in conv2d: depth of input (${p}) must match input depth for filter ${l.shape[2]}.`),k($e(e,a),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${a}'`);const y={x:c,filter:l},b={strides:e,pad:r,dataFormat:s,dilations:a,dimRoundingMode:o},v=I.runKernel(vc,y,b);return f?P(v,[v.shape[1],v.shape[2],v.shape[3]]):v}const hr=_({conv2d_:km});function Em(n,t,e,r,s="NWC",a=1,o){const u=w(n,"x","conv1d"),l=w(t,"filter","conv1d");let c=u,f=!1;u.rank===2&&(f=!0,c=P(u,[1,u.shape[0],u.shape[1]])),k(c.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${c.rank}.`),k(l.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${l.rank}.`),Zt("conv1d",r,o),k(c.shape[2]===l.shape[1],()=>`Error in conv1d: depth of input (${c.shape[2]}) must match input depth for filter ${l.shape[1]}.`),k($e(e,a),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${e} and dilation '${a}'`),k(s==="NWC",()=>`Error in conv1d: got dataFormat of ${s} but only NWC is currently supported.`);const p=P(l,[1,l.shape[0],l.shape[1],l.shape[2]]),y=P(c,[c.shape[0],1,c.shape[1],c.shape[2]]),E=hr(y,p,[1,e],r,"NHWC",[1,a],o);return f?P(E,[E.shape[2],E.shape[3]]):P(E,[E.shape[0],E.shape[2],E.shape[3]])}const _m=_({conv1d_:Em});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $m(n,t,e,r,s,a="NHWC",o){k(n.length===t.rank,()=>`Length of inShape (${n.length}) and rank of dy (${t.rank}) must match`);let u=n,l=t,c=!1;t.rank===3&&(c=!0,l=P(t,[1,t.shape[0],t.shape[1],t.shape[2]]),u=[1,n[0],n[1],n[2]]),k(u.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${u.length}.`),k(l.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${l.rank}`),k(e.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${e.rank}`);const f=a==="NHWC"?u[3]:u[1],p=a==="NHWC"?l.shape[3]:l.shape[1];k(f===e.shape[2],()=>`Error in conv2dDerInput: depth of input (${f}) must match input depth for filter ${e.shape[2]}.`),k(p===e.shape[3],()=>`Error in conv2dDerInput: depth of output (${p}) must match output depth for filter ${e.shape[3]}.`),Zt("conv2dDerInput",s,o);const y={dy:l,filter:e},b={strides:r,pad:s,dataFormat:a,dimRoundingMode:o,inputShape:u},v=I.runKernel(Tc,y,b);return c?P(v,[v.shape[1],v.shape[2],v.shape[3]]):v}const Bi=_({conv2DBackpropInput_:$m});function Im(n,t,e,r,s,a){const o=w(n,"x","conv2dTranspose"),u=w(t,"filter","conv2dTranspose");return Bi(e,o,u,r,s,"NHWC",a)}const Am=_({conv2dTranspose_:Im});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Om(n,t,e,r,s="NDHWC",a=[1,1,1]){const o=w(n,"x","conv3d"),u=w(t,"filter","conv3d");let l=o,c=!1;o.rank===4&&(c=!0,l=P(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),k(l.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${l.rank}.`),k(u.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${u.rank}.`),k(l.shape[4]===u.shape[3],()=>`Error in conv3d: depth of input (${l.shape[4]}) must match input depth for filter ${u.shape[3]}.`),k($e(e,a),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${e} and dilations '${a}'`),k(s==="NDHWC",()=>`Error in conv3d: got dataFormat of ${s} but only NDHWC is currently supported.`);const f={x:l,filter:u},p={strides:e,pad:r,dataFormat:s,dilations:a},y=I.runKernel(Sc,f,p);return c?P(y,[y.shape[1],y.shape[2],y.shape[3],y.shape[4]]):y}const Dm=_({conv3d_:Om});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cm(n,t,e,r,s){k(n.length===t.rank,()=>`Length of inShape (${n.length}) and rank of dy (${t.rank}) must match`);let a=n,o=t,u=!1;t.rank===4&&(u=!0,o=P(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),a=[1,n[0],n[1],n[2],n[3]]);const l=a[4],c=o.shape[4];k(a.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${a.length}.`),k(o.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${o.rank}`),k(e.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${e.rank}`),k(l===e.shape[3],()=>`Error in conv3dDerInput: depth of input (${l}) must match input depth for filter ${e.shape[3]}.`),k(c===e.shape[4],()=>`Error in conv3dDerInput: depth of output (${c}) must match output depth for filter ${e.shape[4]}.`);const f={dy:o,filter:e},p={pad:s,strides:r,inputShape:a},y=I.runKernel(xc,f,p);return u?P(y,[y.shape[1],y.shape[2],y.shape[3],y.shape[4]]):y}const Fm=_({conv3DBackpropInput_:Cm});function Pm(n,t,e,r,s){const a=w(n,"x","conv3dTranspose"),o=w(t,"filter","conv3dTranspose");return Fm(e,a,o,r,s)}const Lm=_({conv3dTranspose_:Pm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rm(n){const e={x:w(n,"x","cos","float32")};return I.runKernel(kc,e)}const Bm=_({cos_:Rm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zm(n){const e={x:w(n,"x","cosh","float32")};return I.runKernel(Ec,e)}const Vm=_({cosh_:zm});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jm(n,t=0,e=!1,r=!1){const a={x:w(n,"x","cumprod")},o={axis:t,exclusive:e,reverse:r};return I.runKernel(_c,a,o)}const Mm=_({cumprod_:jm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hm(n,t=0,e=!1,r=!1){const a={x:w(n,"x","cumsum")},o={axis:t,exclusive:e,reverse:r};return I.runKernel($c,a,o)}const Um=_({cumsum_:Hm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Km(n,t,e,r=!1){const s=w(n,"x","denseBincount"),a=w(t,"weights","denseBincount");k(s.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${s.dtype}`),k(s.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${s.rank}.`),k(e>=0,()=>`size must be non-negative, but got ${e}.`),k(a.size===s.size||a.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${s.shape}, weights shape: ${a.shape}.`);const o={x:s,weights:a},u={size:e,binaryOutput:r};return I.runKernel(Ac,o,u)}const Wm=_({denseBincount_:Km});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qm(n,t,e="NHWC"){const r=w(n,"x","depthToSpace","float32"),s=e==="NHWC"?r.shape[1]:r.shape[2],a=e==="NHWC"?r.shape[2]:r.shape[3],o=e==="NHWC"?r.shape[3]:r.shape[1];k(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),k(s*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${s} and ${t}  for depthToSpace with input shape
    ${r.shape}`),k(a*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${a} and ${t} for depthToSpace with input shape
        ${r.shape}`),k(o%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${o} for depthToSpace with input shape ${r.shape}`);const u={x:r},l={blockSize:t,dataFormat:e};return I.runKernel(Oc,u,l)}const Gm=_({depthToSpace_:qm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xm(n,t,e,r,s="NHWC",a=[1,1],o){const u=w(n,"x","depthwiseConv2d","float32"),l=w(t,"filter","depthwiseConv2d","float32");let c=u,f=!1;u.rank===3&&(f=!0,c=P(u,[1,u.shape[0],u.shape[1],u.shape[2]])),k(c.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${c.rank}.`),k(l.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${l.rank}.`);const p=s==="NHWC"?c.shape[3]:c.shape[1];k(p===l.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${p}) must match the inChannels dimension in filter ${l.shape[2]}.`),Zt("depthwiseConv2d",r,o);const y={x:c,filter:l},b={strides:e,pad:r,dataFormat:s,dilations:a,dimRoundingMode:o},v=I.runKernel(Dc,y,b);return f?P(v,[v.shape[1],v.shape[2],v.shape[3]]):v}const Ms=_({depthwiseConv2d_:Xm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ym(n){const e={x:w(n,"x","diag")};return I.runKernel(Pc,e)}const Jm=_({diag_:Ym});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zm(n,t,e,r,s=[1,1],a="NHWC"){const o=w(n,"x","dilation2d"),u=w(t,"filter","dilation2d");k(o.rank===3||o.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${o.rank}.`),k(u.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${u.rank}.`),k(a==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${a}`);let l=o,c=!1;o.rank===3&&(l=P(o,[1,o.shape[0],o.shape[1],o.shape[2]]),c=!0);const f={x:l,filter:u},p={strides:e,pad:r,dilations:s},y=I.runKernel(Lc,f,p);return c?P(y,[y.shape[1],y.shape[2],y.shape[3]]):y}const Qm=_({dilation2d_:Zm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ty(n,t){let e=w(n,"a","equal","string_or_numeric"),r=w(t,"b","equal","string_or_numeric");[e,r]=dt(e,r),wt(e.shape,r.shape);const s={a:e,b:r};return I.runKernel(jc,s)}const zi=_({equal_:ty});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ey(n,t,e){const r=w(t,"a","where"),s=w(e,"b","where"),a=w(n,"condition","where","bool"),o=wt(wt(a.shape,r.shape),s.shape),u=Kn(a,o),l=Kn(r,o),c=Kn(s,o),f={condition:u,t:l,e:c};return I.runKernel(ep,f)}const tn=_({where_:ey});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ny(n){const e={x:w(n,"x","zerosLike")};return I.runKernel(Dp,e)}const Hs=_({zerosLike_:ny});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ry(n,t){let e=w(n,"a","div"),r=w(t,"b","div");[e,r]=dt(e,r);const s=it(e,r),a=Hs(s),o=zi(r,a);return tn(o,a,s)}const sy=_({divNoNan_:ry});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ay(n,t){const e=w(n,"t1","dot"),r=w(t,"t2","dot");k((e.rank===1||e.rank===2)&&(r.rank===1||r.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${e.rank} and ${r.rank}.`);const s=e.rank===1?e.size:e.shape[1],a=r.rank===1?r.size:r.shape[0];if(k(s===a,()=>`Error in dot: inner dimensions of inputs must match, but got ${s} and ${a}.`),e.rank===1&&r.rank===1){const o=P(e,[1,-1]),u=P(r,[-1,1]),l=ot(o,u);return P(l,[])}else if(e.rank===1&&r.rank===2){const o=P(e,[1,-1]),u=P(r,[r.shape[0],r.shape[1]]),l=ot(o,u);return P(l,[l.size])}else if(e.rank===2&&r.rank===1){const o=P(r,[-1,1]),u=ot(e,o);return P(u,[u.size])}else{const o=P(r,[r.shape[0],r.shape[1]]);return ot(e,o)}}const oy=_({dot_:ay});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iy(n,...t){const e=t.map((s,a)=>w(s,`tensors${a}`,"einsum")),r={equation:n};return I.runKernel(Bc,e,r)}const uy=_({einsum_:iy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ly(n){const e={x:w(n,"x","elu","float32")};return I.runKernel(zc,e)}const Vi=_({elu_:ly});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cy(n){let t=w(n,"x","erf");k(t.dtype==="int32"||t.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),t.dtype==="int32"&&(t=mt(t,"float32"));const e={x:t};return I.runKernel(Vc,e)}const hy=_({erf_:cy});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function py(n,t,e){const r=n.length+t.length,s=[];let a=0,o=0;for(let u=0;u<r;u++)e.indexOf(u)===-1?s.push(n[a++]):s.push(t[o++]);return s}function pr(n,t){const e=t.map(r=>1);return py(n,e,t)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fy(n,t=null,e=!1){const s={x:w(n,"x","max")},a={reductionIndices:t,keepDims:e};return I.runKernel(yh,s,a)}const Je=_({max_:fy});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dy(n,t=null,e=!1){const s={x:w(n,"x","min")},a={axis:t,keepDims:e};return I.runKernel(Th,s,a)}const bs=_({min_:dy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function my(n,t){let e=w(n,"base","pow"),r=w(t,"exp","pow");[e,r]=dt(e,r);const s={a:e,b:r};return I.runKernel(Rh,s)}const Us=_({pow_:my});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function at(n,t){if((ue(n)&&t!=="string"||Array.isArray(n))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&ue(n)&&!(n instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return _e(n,[],[],t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yy(n){const e={x:w(n,"x","sqrt","float32")};return I.runKernel(lp,e)}const ws=_({sqrt_:yy});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gy(n){const t=w(n,"x","square"),e={};return I.runKernel("Square",{x:t},e)}const fr=_({square_:gy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function by(n,t=null,e=!1){let r=w(n,"x","sum");r.dtype==="bool"&&(r=mt(r,"int32"));const s={x:r},a={axis:t,keepDims:e};return I.runKernel(cp,s,a)}const ct=_({sum_:by});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wy(n,t="euclidean",e=null,r=!1){n=w(n,"x","norm");const s=ji(n,t,e);let a=s.shape;if(r){const o=ir(e,n.shape);a=pr(s.shape,o)}return P(s,a)}function ji(n,t,e=null){if(n.rank===0)return Ut(n);if(n.rank!==1&&e===null)return ji(P(n,[-1]),t,e);if(n.rank===1||typeof e=="number"||Array.isArray(e)&&e.length===1){if(t===1)return ct(Ut(n),e);if(t===1/0)return Je(Ut(n),e);if(t===-1/0)return bs(Ut(n),e);if(t==="euclidean"||t===2)return ws(ct(Us(Ut(n),at(2,"int32")),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(e)&&e.length===2){if(t===1)return Je(ct(Ut(n),e[0]),e[1]-1);if(t===1/0)return Je(ct(Ut(n),e[1]),e[0]);if(t===-1/0)return bs(ct(Ut(n),e[1]),e[0]);if(t==="fro"||t==="euclidean")return ws(ct(fr(n),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${e}`)}const dr=_({norm_:wy});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vy(n,t=null,e=!1){return dr(n,"euclidean",t,e)}const Ny=_({euclideanNorm_:vy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ty(n){const e={x:w(n,"x","exp")};return I.runKernel(Mc,e)}const me=_({exp_:Ty});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sy(n,t=0){const e=w(n,"x","expandDims","string_or_numeric");k(t<=e.rank,()=>"Axis must be <= rank of the tensor");const r={input:e},s={dim:t};return I.runKernel(Hc,r,s)}const ce=_({expandDims_:Sy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xy(n){const e={x:w(n,"x","expm1")};return I.runKernel(Uc,e)}const ky=_({expm1_:xy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ey(n,t){const e=w(n,"x","tile","string_or_numeric");k(e.rank===t.length,()=>`Error in transpose: rank of input ${e.rank} must match length of reps ${t}.`);const r={x:e},s={reps:t};return I.runKernel(ai,r,s)}const bn=_({tile_:Ey});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _y(n,t,e,r="float32"){t==null&&(t=n);const s=de([n,t],r),a=n<=t?n:t;for(let u=0;u<a;++u)s.set(1,u,u);const o=P(s.toTensor(),[n,t]);if(e==null)return o;if(e.length===1)return bn(ce(o,0),[e[0],1,1]);if(e.length===2)return bn(ce(ce(o,0),0),[e[0],e[1],1,1]);if(e.length===3)return bn(ce(ce(ce(o,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${e.length}D.`)}const Mi=_({eye_:_y});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $y(n){const e={x:w(n,"x","floor","float32")};return I.runKernel(Gc,e)}const Hi=_({floor_:$y});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Iy(n,t,e=0,r=0){const s=w(n,"x","gather"),a=w(t,"indices","gather","int32"),o={x:s,indices:a},u={axis:e,batchDims:r};return I.runKernel(Jc,o,u)}const Ui=_({gather_:Iy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ay(n,t){let e=w(n,"a","greater","string_or_numeric"),r=w(t,"b","greater","string_or_numeric");[e,r]=dt(e,r),wt(e.shape,r.shape);const s={a:e,b:r};return I.runKernel(Qc,s)}const mr=_({greater_:Ay});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Oy(n,t){let e=w(n,"a","greaterEqual","string_or_numeric"),r=w(t,"b","greaterEqual","string_or_numeric");[e,r]=dt(e,r),wt(e.shape,r.shape);const s={a:e,b:r};return I.runKernel(th,s)}const Ki=_({greaterEqual_:Oy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dy(n){const e={x:w(n,"x","isFinite")};return I.runKernel(rh,e)}const Cy=_({isFinite_:Dy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fy(n){const e={x:w(n,"x","isInf")};return I.runKernel(sh,e)}const Py=_({isInf_:Fy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ly(n){const e={x:w(n,"x","isNaN")};return I.runKernel(ah,e)}const Ry=_({isNaN_:Ly});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function By(n,t=.2){const r={x:w(n,"x","leakyRelu")},s={alpha:t};return I.runKernel(oh,r,s)}const Wi=_({leakyRelu_:By});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zy(n,t){let e=w(n,"a","less","string_or_numeric"),r=w(t,"b","less","string_or_numeric");[e,r]=dt(e,r),wt(e.shape,r.shape);const s={a:e,b:r};return I.runKernel(ih,s)}const Vy=_({less_:zy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jy(n,t){let e=w(n,"a","lessEqual","string_or_numeric"),r=w(t,"b","lessEqual","string_or_numeric");[e,r]=dt(e,r),wt(e.shape,r.shape);const s={a:e,b:r};return I.runKernel(uh,s)}const Ks=_({lessEqual_:jy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function My(n,t,e){if(e<=0)throw new Error("The number of values should be positive.");const r={start:n,stop:t,num:e};return I.runKernel(lh,{},r)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hy(n,t=5,e=1,r=1,s=.5){const a=w(n,"x","localResponseNormalization");k(a.rank===4||a.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${a.rank}.`),k(vn(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let o=a,u=!1;a.rank===3&&(u=!0,o=P(a,[1,a.shape[0],a.shape[1],a.shape[2]]));const l={x:o},c={depthRadius:t,bias:e,alpha:r,beta:s},f=I.runKernel(mh,l,c);return u?P(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const Uy=_({localResponseNormalization_:Hy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ky(n){const e={x:w(n,"x","log","float32")};return I.runKernel(ch,e)}const Tn=_({log_:Ky});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wy(n){const e={x:w(n,"x","log1p")};return I.runKernel(hh,e)}const qi=_({log1p_:Wy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ye(n){return I.customGrad(n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qy(n){const e={x:w(n,"x","softplus")};return I.runKernel(up,e)}const Gi=_({softplus_:qy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gy(n){const t=w(n,"x","logSigmoid");return ye(r=>({value:fe(Gi(fe(r))),gradFunc:o=>G(o,Le(fe(r)))}))(t)}const Xy=_({logSigmoid_:Gy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yy(n,t){let e=w(n,"a","sub"),r=w(t,"b","sub");[e,r]=dt(e,r);const s={a:e,b:r};return I.runKernel(xp,s)}const nt=_({sub_:Yy});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jy(n,t=-1){const e=w(n,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and axis was ${t}`);return ye((s,a)=>{const u=Je(s,t,!0),l=nt(s,u),c=nt(mt(l,"float32"),Tn(ct(me(l),t,!0)));return a([c]),{value:c,gradFunc:(p,y)=>{const[b]=y,v=!0,x=me(b);return nt(p,G(ct(p,t,v),x))}}})(e)}const Zy=_({logSoftmax_:Jy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qy(n,t=null,e=!1){const r=w(n,"x","logSumExp"),s=ir(t,r.shape),a=Je(r,s,!0),o=nt(r,a),u=me(o),l=ct(u,s),c=Tn(l),f=lt(P(a,c.shape),c);if(e){const p=pr(f.shape,s);return P(f,p)}return f}const Xi=_({logSumExp_:Qy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tg(n,t){const e=w(n,"a","logicalAnd","bool"),r=w(t,"b","logicalAnd","bool");wt(e.shape,r.shape);const s={a:e,b:r};return I.runKernel(ph,s)}const Qn=_({logicalAnd_:tg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eg(n){const e={x:w(n,"x","logicalNot","bool")};return I.runKernel(fh,e)}const Yi=_({logicalNot_:eg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ng(n,t){const e=w(n,"a","logicalOr","bool"),r=w(t,"b","logicalOr","bool");wt(e.shape,r.shape);const s={a:e,b:r};return I.runKernel(dh,s)}const Ji=_({logicalOr_:ng});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rg(n,t){const e=w(n,"a","logicalXor","bool"),r=w(t,"b","logicalXor","bool");return wt(e.shape,r.shape),Qn(Ji(n,t),Yi(Qn(n,t)))}const sg=_({logicalXor_:rg});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jn=2147483648;function ag(n,t,e="left"){const r=w(n,"sortedSequence","searchSorted"),s=w(t,"values","searchSorted"),a=r.shape[r.shape.length-1],o=s.shape[s.shape.length-1],u=P(r,[-1,a]),l=P(s,[-1,o]);if(u.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(u.shape[0]!==l.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(Tt(l.shape)>=jn)throw new Error(`values tensor size must less than ${jn}`);if(u.shape[1]>=jn)throw new Error(`trailing dim_size must less than ${jn} for int32 output type, was ${u.shape[1]}`);const c={sortedSequence:u,values:l},f={side:e};return I.runKernel(tp,c,f)}const Ws=_({searchSorted_:ag});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function og(n,t){return Ws(n,t,"left")}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ig(n,t,e,r,s){const a=w(n,"x","maxPool"),o=1;let u=a,l=!1;a.rank===3&&(l=!0,u=P(a,[1,a.shape[0],a.shape[1],a.shape[2]])),k(u.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${u.rank}.`),k($e(e,o),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${o}'`),Zt("maxPool",r,s);const c={x:u},f={filterSize:t,strides:e,pad:r,dimRoundingMode:s},p=I.runKernel(bh,c,f);return l?P(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const Zi=_({maxPool_:ig});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ug(n,t=[1,1,1],e,r,s,a="NDHWC"){const o=w(n,"x","maxPool3d");let u=o,l=!1;o.rank===4&&(l=!0,u=P(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),k(u.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${u.rank}.`),k(a==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`),Zt("maxPool3d",r,s);const c={x:u},f={filterSize:t,strides:e,pad:r,dimRoundingMode:s,dataFormat:a},p=I.runKernel(wh,c,f);return l?P(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}const lg=_({maxPool3d_:ug});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cg(n,t,e,r,s=!1){const o={x:w(n,"x","maxPoolWithArgmax")},u={filterSize:t,strides:e,pad:r,includeBatchInIndex:s},l=I.runKernel(vh,o,u);return{result:l[0],indexes:l[1]}}const hg=_({maxPoolWithArgmax_:cg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pg(n,t){let e=w(n,"a","maximum"),r=w(t,"b","maximum");[e,r]=dt(e,r),e.dtype==="bool"&&(e=mt(e,"int32"),r=mt(r,"int32")),wt(e.shape,r.shape);const s={a:e,b:r};return I.runKernel(gh,s)}const fg=_({maximum_:pg});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dg(n,t=null,e=!1){const s={x:w(n,"x","mean")},a={axis:t,keepDims:e};return I.runKernel(Nh,s,a)}const tr=_({mean_:dg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function en(n,t="float32"){if(t==="complex64"){const r=en(n,"float32"),s=en(n,"float32");return ke(r,s)}const e=Fs(Tt(n),t);return I.makeTensor(e,n,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pe(n,t="float32"){if(t==="complex64"){const r=Pe(n,"float32"),s=en(n,"float32");return ke(r,s)}const e=Zo(Tt(n),t);return I.makeTensor(e,n,t)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mg(n,t,{indexing:e="xy"}={}){if(e!=="xy"&&e!=="ij")throw new TypeError(`${e} is not a valid third argument to meshgrid`);if(n===void 0)return[];let r=w(n,"x","meshgrid",n instanceof gt?n.dtype:"float32");if(t===void 0)return[r];let s=w(t,"y","meshgrid",t instanceof gt?t.dtype:"float32");const a=Tt(r.shape),o=Tt(s.shape);return e==="xy"?(r=P(r,[1,-1]),s=P(s,[-1,1]),[ot(Pe([o,1],r.dtype),r),ot(s,Pe([1,a],s.dtype))]):(r=P(r,[-1,1]),s=P(s,[1,-1]),[ot(r,Pe([1,o],r.dtype)),ot(Pe([a,1],s.dtype),s)])}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yg(n,t){let e=w(n,"a","minimum"),r=w(t,"b","minimum");[e,r]=dt(e,r),e.dtype==="bool"&&(e=mt(e,"int32"),r=mt(r,"int32")),wt(e.shape,r.shape);const s={a:e,b:r};return I.runKernel(Sh,s)}const Qi=_({minimum_:yg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gg(n,t,e){k(e==="reflect"||e==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${e}.`);const r=w(n,"x","mirrorPad");if(r.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");k(t.length===r.rank,()=>`Padding doesn't match input. Must be ${r.rank}. Got ${t.length}.`);const s=e==="reflect"?1:0;for(let u=0;u<r.rank;u++)k(t[u].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),k(t[u][0]>=0&&t[u][0]<=r.shape[u]-s&&t[u][1]>=0&&t[u][1]<=r.shape[u]-s,()=>`Padding in dimension ${u} cannot be greater than or equal to ${r.shape[u]-s} or less than 0 for input of shape ${r.shape}`);const a={paddings:t,mode:e},o={x:r};return I.runKernel(xh,o,a)}const bg=_({mirrorPad_:gg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wg(n,t){let e=w(n,"a","mod"),r=w(t,"b","mod");[e,r]=dt(e,r);const s={a:e,b:r};return I.runKernel(kh,s)}const vg=_({mod_:wg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ng(n,t=null,e=!1){n=w(n,"x","moments");const r=ir(t,n.shape),s=tr(n,r,e);let a=s.shape;e||(a=pr(s.shape,r));const o=fr(nt(mt(n,"float32"),P(s,a))),u=tr(o,r,e);return{mean:s,variance:u}}const Tg=_({moments_:Ng});function Sg(n,t,e,r){const s=w(t,"data","multiRNNCell"),a=Gn(e,"c","multiRNNCell"),o=Gn(r,"h","multiRNNCell");let u=s;const l=[];for(let p=0;p<n.length;p++){const y=n[p](u,a[p],o[p]);l.push(y[0]),l.push(y[1]),u=y[1]}const c=[],f=[];for(let p=0;p<l.length;p+=2)c.push(l[p]),f.push(l[p+1]);return[c,f]}const xg=_({multiRNNCell_:Sg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kg(n,t,e,r=!1){const s=w(n,"logits","multinomial"),a=s.size,o=s.rank;if(a<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${a}.`);if(o>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${o}`);e=e||Math.random();const l={logits:o===1?P(s,[1,-1]):s},c={numSamples:t,seed:e,normalized:r},f=I.runKernel(Eh,l,c);return o===1?P(f,[f.size]):f}const Eg=_({multinomial_:kg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _g(n,t){let e=w(n,"a","notEqual","string_or_numeric"),r=w(t,"b","notEqual","string_or_numeric");[e,r]=dt(e,r),wt(e.shape,r.shape);const s={a:e,b:r};return I.runKernel(Ih,s)}const tu=_({notEqual_:_g});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $g(n){const e={x:w(n,"x","onesLike")};return I.runKernel(Ch,e)}const Ig=_({onesLike_:$g});function Ag(n,t){const e=w(n,"v1","outerProduct"),r=w(t,"v2","outerProduct");k(e.rank===1&&r.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${e.rank} and ${r.rank}.`);const s=P(e,[-1,1]),a=P(r,[1,-1]);return ot(s,a)}const Og=_({outerProduct_:Ag});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dg(n,t,e=0){const r=w(n,"x","pad");if(r.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const s={paddings:t,constantValue:e},a={x:r};return I.runKernel(Lh,a,s)}const _n=_({pad_:Dg});function Cg(n,t,e=0){return k(t.length===2,()=>"Invalid number of paddings. Must be length of 2."),_n(n,[t],e)}const Fg=_({pad1d_:Cg});function Pg(n,t,e=0){return k(t.length===2&&t[0].length===2&&t[1].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),_n(n,t,e)}const Lg=_({pad2d_:Pg});function Rg(n,t,e=0){return k(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),_n(n,t,e)}const Bg=_({pad3d_:Rg});function zg(n,t,e=0){return k(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),_n(n,t,e)}const Vg=_({pad4d_:zg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jg(n,t,e){const r=w(n,"x","spaceToBatchND");k(r.rank>=1+t.length,()=>`input rank ${r.rank} should be > than [blockShape] ${t.length}`),k(e.length===t.length,()=>`paddings.shape[0] ${e.length} must be equal to [blockShape] ${t.length}`),k(r.shape.reduce((o,u,l)=>l>0&&l<=t.length?o&&(u+e[l-1][0]+e[l-1][1])%t[l-1]===0:o,!0),()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${e.toString()} must be divisible by blockShapes ${t.toString()}`);const s={x:r},a={blockShape:t,paddings:e};return I.runKernel(hp,s,a)}const eu=_({spaceToBatchND_:jg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mg(n,t,e,r,s,a,o){s==null&&(s=[1,1]),a==null&&(a=1),r===0&&(r="valid");const u=w(n,"x","maxPool");let l=u,c=!1;u.rank===3&&(c=!0,l=P(u,[1,u.shape[0],u.shape[1],u.shape[2]])),k($e(a,s),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${a} and dilations '${s}'`);const f=jd(l.shape,t,a,s,r),p=[f.dilationHeight,f.dilationWidth];let y;r==="same"?y=Ug([f.filterHeight,f.filterWidth],p):y=[[0,0],[0,0]];const b=p[0]===1&&p[1]===1,[v,x]=Hg([f.inHeight,f.inWidth],p,y),E=b?r:"valid",A=b?l:eu(l,p,v),L=(e==="avg"?()=>Fi(A,t,a,E,o):()=>Zi(A,t,a,E,o))(),D=b?L:Pi(L,p,x);return c?P(D,[D.shape[1],D.shape[2],D.shape[3]]):D}function Hg(n,t,e){const r=e.map(f=>f[0]),s=e.map(f=>f[1]),a=n.concat(r,s),o=t.map((f,p)=>(f-a[p]%f)%f),u=s.map((f,p)=>f+o[p]),l=t.map((f,p)=>[r[p],u[p]]),c=t.map((f,p)=>[0,o[p]]);return[l,c]}function Ug(n,t){const r=n.map((o,u)=>o+(o-1)*(t[u]-1)).map(o=>o-1),s=r.map(o=>Math.floor(o/2)),a=r.map((o,u)=>o-s[u]);return r.map((o,u)=>[s[u],a[u]])}const Kg=_({pool_:Mg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wg(n,t){const e=w(n,"x","prelu"),r=w(t,"alpha","prelu"),s={x:e,alpha:r};return I.runKernel(Bh,s)}const nu=_({prelu_:Wg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qg(n,t=null,e=!1){let r=w(n,"x","prod");r.dtype==="bool"&&(r=mt(r,"int32"));const s={x:r},a={axis:t,keepDims:e};return I.runKernel(zh,s,a)}const Gg=_({prod_:qg});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xg(n,t,e,r){const s=n.map((f,p)=>w(f,`tensors${p}`,"raggedGather","int32")),a=w(t,"paramsDenseValues","raggedGather"),o=w(e,"indices","raggedGather","int32"),u={paramsNestedSplits:s,paramsDenseValues:a,indices:o},l={outputRaggedRank:r},c=I.runKernel(Vh,u,l);return{outputNestedSplits:c.slice(0,c.length-1),outputDenseValues:c[c.length-1]}}const Yg=_({raggedGather_:Xg});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jg(n,t,e,r,s){const a=w(n,"shape","raggedTensorToTensor","int32"),o=w(t,"values","raggedTensorToTensor"),u=w(e,"defaultValue","raggedTensorToTensor",o.dtype),l=r.map((p,y)=>w(p,`tensors${y}`,"raggedTensorToTensor","int32")),c={shape:a,values:o,defaultValue:u,rowPartitionTensors:l},f={rowPartitionTypes:s};return I.runKernel(jh,c,f)}const Zg=_({raggedTensorToTensor_:Jg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qg(n,t,e){const r=Tt(n);let s=null;if(e==null||e==="float32")s=new Float32Array(r);else if(e==="int32")s=new Int32Array(r);else if(e==="bool")s=new Uint8Array(r);else throw new Error(`Unknown data type ${e}`);for(let a=0;a<r;a++)s[a]=t();return I.makeTensor(s,n,e)}const tb=_({rand_:Qg});var ru={exports:{}};(function(n){(function(t,e,r){function s(l){var c=this,f=u();c.next=function(){var p=2091639*c.s0+c.c*23283064365386963e-26;return c.s0=c.s1,c.s1=c.s2,c.s2=p-(c.c=p|0)},c.c=1,c.s0=f(" "),c.s1=f(" "),c.s2=f(" "),c.s0-=f(l),c.s0<0&&(c.s0+=1),c.s1-=f(l),c.s1<0&&(c.s1+=1),c.s2-=f(l),c.s2<0&&(c.s2+=1),f=null}function a(l,c){return c.c=l.c,c.s0=l.s0,c.s1=l.s1,c.s2=l.s2,c}function o(l,c){var f=new s(l),p=c&&c.state,y=f.next;return y.int32=function(){return f.next()*4294967296|0},y.double=function(){return y()+(y()*2097152|0)*11102230246251565e-32},y.quick=y,p&&(typeof p=="object"&&a(p,f),y.state=function(){return a(f,{})}),y}function u(){var l=4022871197,c=function(f){f=String(f);for(var p=0;p<f.length;p++){l+=f.charCodeAt(p);var y=.02519603282416938*l;l=y>>>0,y-=l,y*=l,l=y>>>0,y-=l,l+=y*4294967296}return(l>>>0)*23283064365386963e-26};return c}e&&e.exports?e.exports=o:r&&r.amd?r(function(){return o}):this.alea=o})(oe,n,!1)})(ru);var su={exports:{}};(function(n){(function(t,e,r){function s(u){var l=this,c="";l.x=0,l.y=0,l.z=0,l.w=0,l.next=function(){var p=l.x^l.x<<11;return l.x=l.y,l.y=l.z,l.z=l.w,l.w^=l.w>>>19^p^p>>>8},u===(u|0)?l.x=u:c+=u;for(var f=0;f<c.length+64;f++)l.x^=c.charCodeAt(f)|0,l.next()}function a(u,l){return l.x=u.x,l.y=u.y,l.z=u.z,l.w=u.w,l}function o(u,l){var c=new s(u),f=l&&l.state,p=function(){return(c.next()>>>0)/4294967296};return p.double=function(){do var y=c.next()>>>11,b=(c.next()>>>0)/4294967296,v=(y+b)/(1<<21);while(v===0);return v},p.int32=c.next,p.quick=p,f&&(typeof f=="object"&&a(f,c),p.state=function(){return a(c,{})}),p}e&&e.exports?e.exports=o:r&&r.amd?r(function(){return o}):this.xor128=o})(oe,n,!1)})(su);var au={exports:{}};(function(n){(function(t,e,r){function s(u){var l=this,c="";l.next=function(){var p=l.x^l.x>>>2;return l.x=l.y,l.y=l.z,l.z=l.w,l.w=l.v,(l.d=l.d+362437|0)+(l.v=l.v^l.v<<4^(p^p<<1))|0},l.x=0,l.y=0,l.z=0,l.w=0,l.v=0,u===(u|0)?l.x=u:c+=u;for(var f=0;f<c.length+64;f++)l.x^=c.charCodeAt(f)|0,f==c.length&&(l.d=l.x<<10^l.x>>>4),l.next()}function a(u,l){return l.x=u.x,l.y=u.y,l.z=u.z,l.w=u.w,l.v=u.v,l.d=u.d,l}function o(u,l){var c=new s(u),f=l&&l.state,p=function(){return(c.next()>>>0)/4294967296};return p.double=function(){do var y=c.next()>>>11,b=(c.next()>>>0)/4294967296,v=(y+b)/(1<<21);while(v===0);return v},p.int32=c.next,p.quick=p,f&&(typeof f=="object"&&a(f,c),p.state=function(){return a(c,{})}),p}e&&e.exports?e.exports=o:r&&r.amd?r(function(){return o}):this.xorwow=o})(oe,n,!1)})(au);var ou={exports:{}};(function(n){(function(t,e,r){function s(u){var l=this;l.next=function(){var f=l.x,p=l.i,y,b;return y=f[p],y^=y>>>7,b=y^y<<24,y=f[p+1&7],b^=y^y>>>10,y=f[p+3&7],b^=y^y>>>3,y=f[p+4&7],b^=y^y<<7,y=f[p+7&7],y=y^y<<13,b^=y^y<<9,f[p]=b,l.i=p+1&7,b};function c(f,p){var y,b=[];if(p===(p|0))b[0]=p;else for(p=""+p,y=0;y<p.length;++y)b[y&7]=b[y&7]<<15^p.charCodeAt(y)+b[y+1&7]<<13;for(;b.length<8;)b.push(0);for(y=0;y<8&&b[y]===0;++y);for(y==8?b[7]=-1:b[y],f.x=b,f.i=0,y=256;y>0;--y)f.next()}c(l,u)}function a(u,l){return l.x=u.x.slice(),l.i=u.i,l}function o(u,l){u==null&&(u=+new Date);var c=new s(u),f=l&&l.state,p=function(){return(c.next()>>>0)/4294967296};return p.double=function(){do var y=c.next()>>>11,b=(c.next()>>>0)/4294967296,v=(y+b)/(1<<21);while(v===0);return v},p.int32=c.next,p.quick=p,f&&(f.x&&a(f,c),p.state=function(){return a(c,{})}),p}e&&e.exports?e.exports=o:r&&r.amd?r(function(){return o}):this.xorshift7=o})(oe,n,!1)})(ou);var iu={exports:{}};(function(n){(function(t,e,r){function s(u){var l=this;l.next=function(){var f=l.w,p=l.X,y=l.i,b,v;return l.w=f=f+1640531527|0,v=p[y+34&127],b=p[y=y+1&127],v^=v<<13,b^=b<<17,v^=v>>>15,b^=b>>>12,v=p[y]=v^b,l.i=y,v+(f^f>>>16)|0};function c(f,p){var y,b,v,x,E,A=[],M=128;for(p===(p|0)?(b=p,p=null):(p=p+"\0",b=0,M=Math.max(M,p.length)),v=0,x=-32;x<M;++x)p&&(b^=p.charCodeAt((x+32)%p.length)),x===0&&(E=b),b^=b<<10,b^=b>>>15,b^=b<<4,b^=b>>>13,x>=0&&(E=E+1640531527|0,y=A[x&127]^=b+E,v=y==0?v+1:0);for(v>=128&&(A[(p&&p.length||0)&127]=-1),v=127,x=4*128;x>0;--x)b=A[v+34&127],y=A[v=v+1&127],b^=b<<13,y^=y<<17,b^=b>>>15,y^=y>>>12,A[v]=b^y;f.w=E,f.X=A,f.i=v}c(l,u)}function a(u,l){return l.i=u.i,l.w=u.w,l.X=u.X.slice(),l}function o(u,l){u==null&&(u=+new Date);var c=new s(u),f=l&&l.state,p=function(){return(c.next()>>>0)/4294967296};return p.double=function(){do var y=c.next()>>>11,b=(c.next()>>>0)/4294967296,v=(y+b)/(1<<21);while(v===0);return v},p.int32=c.next,p.quick=p,f&&(f.X&&a(f,c),p.state=function(){return a(c,{})}),p}e&&e.exports?e.exports=o:r&&r.amd?r(function(){return o}):this.xor4096=o})(oe,n,!1)})(iu);var uu={exports:{}};(function(n){(function(t,e,r){function s(u){var l=this,c="";l.next=function(){var p=l.b,y=l.c,b=l.d,v=l.a;return p=p<<25^p>>>7^y,y=y-b|0,b=b<<24^b>>>8^v,v=v-p|0,l.b=p=p<<20^p>>>12^y,l.c=y=y-b|0,l.d=b<<16^y>>>16^v,l.a=v-p|0},l.a=0,l.b=0,l.c=-1640531527,l.d=1367130551,u===Math.floor(u)?(l.a=u/4294967296|0,l.b=u|0):c+=u;for(var f=0;f<c.length+20;f++)l.b^=c.charCodeAt(f)|0,l.next()}function a(u,l){return l.a=u.a,l.b=u.b,l.c=u.c,l.d=u.d,l}function o(u,l){var c=new s(u),f=l&&l.state,p=function(){return(c.next()>>>0)/4294967296};return p.double=function(){do var y=c.next()>>>11,b=(c.next()>>>0)/4294967296,v=(y+b)/(1<<21);while(v===0);return v},p.int32=c.next,p.quick=p,f&&(typeof f=="object"&&a(f,c),p.state=function(){return a(c,{})}),p}e&&e.exports?e.exports=o:r&&r.amd?r(function(){return o}):this.tychei=o})(oe,n,!1)})(uu);var lu={exports:{}};(function(n){(function(t,e,r){var s=256,a=6,o=52,u="random",l=r.pow(s,a),c=r.pow(2,o),f=c*2,p=s-1,y;function b(D,C,B){var U=[];C=C==!0?{entropy:!0}:C||{};var F=A(E(C.entropy?[D,L(e)]:D==null?M():D,3),U),R=new v(U),j=function(){for(var z=R.g(a),X=l,q=0;z<c;)z=(z+q)*s,X*=s,q=R.g(1);for(;z>=f;)z/=2,X/=2,q>>>=1;return(z+q)/X};return j.int32=function(){return R.g(4)|0},j.quick=function(){return R.g(4)/4294967296},j.double=j,A(L(R.S),e),(C.pass||B||function(z,X,q,tt){return tt&&(tt.S&&x(tt,R),z.state=function(){return x(R,{})}),q?(r[u]=z,X):z})(j,F,"global"in C?C.global:this==r,C.state)}function v(D){var C,B=D.length,U=this,F=0,R=U.i=U.j=0,j=U.S=[];for(B||(D=[B++]);F<s;)j[F]=F++;for(F=0;F<s;F++)j[F]=j[R=p&R+D[F%B]+(C=j[F])],j[R]=C;(U.g=function(z){for(var X,q=0,tt=U.i,et=U.j,pt=U.S;z--;)X=pt[tt=p&tt+1],q=q*s+pt[p&(pt[tt]=pt[et=p&et+X])+(pt[et]=X)];return U.i=tt,U.j=et,q})(s)}function x(D,C){return C.i=D.i,C.j=D.j,C.S=D.S.slice(),C}function E(D,C){var B=[],U=typeof D,F;if(C&&U=="object")for(F in D)try{B.push(E(D[F],C-1))}catch{}return B.length?B:U=="string"?D:D+"\0"}function A(D,C){for(var B=D+"",U,F=0;F<B.length;)C[p&F]=p&(U^=C[p&F]*19)+B.charCodeAt(F++);return L(C)}function M(){try{var D;return y&&(D=y.randomBytes)?D=D(s):(D=new Uint8Array(s),(t.crypto||t.msCrypto).getRandomValues(D)),L(D)}catch{var C=t.navigator,B=C&&C.plugins;return[+new Date,t,B,t.screen,L(e)]}}function L(D){return String.fromCharCode.apply(0,D)}if(A(r.random(),e),n.exports){n.exports=b;try{y=require("crypto")}catch{}}else r["seed"+u]=b})(typeof self!="undefined"?self:oe,[],Math)})(lu);var eb=ru.exports,nb=su.exports,rb=au.exports,sb=ou.exports,ab=iu.exports,ob=uu.exports,He=lu.exports;He.alea=eb;He.xor128=nb;He.xorwow=rb;He.xorshift7=sb;He.xor4096=ab;He.tychei=ob;var qs=He;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Gs{constructor(t,e,r,s,a){this.mean=t,this.stdDev=e,this.dtype=r,this.nextVal=NaN,this.truncated=s,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const o=a||Math.random();this.random=qs.alea(o.toString())}nextValue(){if(!isNaN(this.nextVal)){const s=this.nextVal;return this.nextVal=NaN,s}let t,e,r=!1;for(;!r;){let s,a,o;do s=2*this.random()-1,a=2*this.random()-1,o=s*s+a*a;while(o>=1||o===0);const u=Math.sqrt(-2*Math.log(o)/o);t=this.mean+this.stdDev*s*u,e=this.mean+this.stdDev*a*u,(!this.truncated||this.isValidTruncated(t))&&(r=!0)}return(!this.truncated||this.isValidTruncated(e))&&(this.nextVal=this.convertValue(e)),this.convertValue(t)}convertValue(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class ib{constructor(t,e,r,s){this.alpha=t,this.beta=1/e,this.dtype=r;const a=s||Math.random();this.randu=qs.alea(a.toString()),this.randn=new Gs(0,1,r,!1,this.randu()),t<1?this.d=t+2/3:this.d=t-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let t,e,r,s,a,o;for(;;){do s=this.randn.nextValue(),o=1+this.c*s;while(o<=0);if(o*=o*o,t=s*s,e=1-.331*t*t,r=.5*t+this.d*(1-o+Math.log(o)),a=this.randu(),a<e||Math.log(a)<r)break}return o=1/this.beta*this.d*o,this.alpha<1&&(o*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(o)}convertValue(t){return this.dtype==="float32"?t:Math.round(t)}}class ub{constructor(t=0,e=1,r,s){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=t,this.range=e-t,this.dtype=r,s==null&&(s=Math.random()),typeof s=="number"&&(s=s.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${e} <= 1 and dtype is not float`);this.random=qs.alea(s)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lb(n,t,e=1,r="float32",s){if(e==null&&(e=1),r==null&&(r="float32"),r!=="float32"&&r!=="int32")throw new Error(`Unsupported data type ${r}`);const a=new ib(t,e,r,s),o=de(n,r);for(let u=0;u<o.values.length;u++)o.values[u]=a.nextValue();return o.toTensor()}const cb=_({randomGamma_:lb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hb(n,t=0,e=1,r,s){if(r!=null&&r==="bool")throw new Error(`Unsupported data type ${r}`);const a=new Gs(t,e,r,!1,s),o=de(n,r);for(let u=0;u<o.values.length;u++)o.values[u]=a.nextValue();return o.toTensor()}const cu=_({randomNormal_:hb});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pb(n,t,e){if(t!=null&&t==="bool")throw new Error(`Unsupported data type ${t}`);return cu(n,0,1,t,e)}const fb=_({randomStandardNormal_:pb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function db(n,t=0,e=1,r="float32",s){const a=de(n,r),o=new ub(t,e,null,s);for(let u=0;u<a.values.length;u++)a.values[u]=o.nextValue();return a.toTensor()}const hu=_({randomUniform_:db});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sn(n,t,e=1,r="float32"){if(e===0)throw new Error("Cannot have a step of zero");const s={start:n,stop:t,step:e,dtype:r};return I.runKernel(Mh,{},s)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mb(n){const e={x:w(n,"x","reciprocal")};return I.runKernel(Uh,e)}const yb=_({reciprocal_:mb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gb(n){const e={x:w(n,"x","relu")};return I.runKernel(Kh,e)}const yr=_({relu_:gb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bb(n){const e={x:w(n,"x","relu6")};return I.runKernel(Xh,e)}const pu=_({relu6_:bb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wb(n,t){const r={x:w(n,"x","reverse")},s={dims:t};return I.runKernel(Yh,r,s)}const je=_({reverse_:wb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vb(n){const t=w(n,"x","reverse");return k(t.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${t.rank}.`),je(t,0)}const Nb=_({reverse1d_:vb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tb(n,t){const e=w(n,"x","reverse");return k(e.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${e.rank}.`),je(e,t)}const Sb=_({reverse2d_:Tb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xb(n,t){const e=w(n,"x","reverse");return k(e.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${e.rank}.`),je(e,t)}const kb=_({reverse3d_:xb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Eb(n,t){const e=w(n,"x","reverse");return k(e.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${e.rank}.`),je(e,t)}const _b=_({reverse4d_:Eb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $b(n){const e={x:w(n,"x","round")};return I.runKernel(Jh,e)}const fu=_({round_:$b});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ib(n){const e={x:w(n,"x","rsqrt","float32")};return I.runKernel(Zh,e)}const Ab=_({rsqrt_:Ib});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ob(n){const e={x:w(n,"x","selu")};return I.runKernel(np,e)}const Db=_({selu_:Ob});function Cb(n,t,e,r,s,a=[1,1],o="NHWC"){const u=w(n,"x","separableConv2d"),l=w(t,"depthwiseFilter","separableConv2d"),c=w(e,"pointwiseFilter","separableConv2d");let f=u,p=!1;if(u.rank===3&&(p=!0,f=P(u,[1,u.shape[0],u.shape[1],u.shape[2]])),o==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");k(f.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${f.rank}.`),k(l.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${l.rank}.`),k(c.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${l.rank}.`),k(c.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${c.shape[0]}.`),k(c.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${c.shape[1]}.`);const y=l.shape[2],b=l.shape[3];k(c.shape[2]===y*b,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${y*b}, but got ${c.shape[2]}.`);const v=Ms(f,l,r,s,o,a),E=hr(v,c,1,"valid",o);return p?P(E,[E.shape[1],E.shape[2],E.shape[3]]):E}const Fb=_({separableConv2d_:Cb});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Pb(n,t){const e=w(n,"x","setdiff1d"),r=w(t,"y","setdiff1d");k(e.dtype===r.dtype,()=>`x and y should have the same dtype, but got x (${e.dtype}) and y (${r.dtype}).`),k(e.rank===1,()=>`x should be 1D tensor, but got x (${e.shape}).`),k(r.rank===1,()=>`y should be 1D tensor, but got y (${r.shape}).`);const s=await e.data(),a=await r.data(),o=new Set(a);let u=0;for(let f=0;f<s.length;f++)o.has(s[f])||u++;const l=new ss([u],e.dtype),c=new ss([u],"int32");for(let f=0,p=0;f<s.length;f++)o.has(s[f])||(l.values[p]=s[f],c.values[p]=f,p++);return[l.toTensor(),c.toTensor()]}const Lb=Pb;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rb(n){const e={x:w(n,"x","sign")};return I.runKernel(op,e)}const Bb=_({sign_:Rb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zb(n){const e={x:w(n,"x","sin","float32")};return I.runKernel(sp,e)}const Vb=_({sin_:zb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jb(n){const e={x:w(n,"x","sinh")};return I.runKernel(ap,e)}const Mb=_({sinh_:jb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hb(n,t,e){const r=w(n,"x","slice1d");return k(r.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`),Z(r,[t],[e])}const Ub=_({slice1d_:Hb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kb(n,t,e){const r=w(n,"x","slice2d");return k(r.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`),Z(r,t,e)}const Wb=_({slice2d_:Kb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qb(n,t,e){const r=w(n,"x","slice3d");return k(r.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`),Z(r,t,e)}const Gb=_({slice3d_:qb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xb(n,t,e){const r=w(n,"x","slice4d");return k(r.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`),Z(r,t,e)}const Yb=_({slice4d_:Xb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jb(n,t=-1){const e=w(n,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and dim was ${t}`);const r={logits:e},s={dim:t};return I.runKernel(fp,r,s)}const Zb=_({softmax_:Jb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qb(n){k(n.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${n.dtype}.`);const t={input:n};return I.runKernel(Kc,t)}const Xs=_({fft_:Qb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function t0(n){k(n.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${n.dtype}.`);const t={input:n};return I.runKernel(eh,t)}const er=_({ifft_:t0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function e0(n){const t=n.shape[n.shape.length-1],e=n.size/t;let r;if(t<=2){const s=P(n,[e,t]);r=er(s)}else{const s=[e,2*(t-1)],a=P(Nn(n),[e,t]),o=P(ur(n),[e,t]),u=je(Z(a,[0,1],[e,t-2]),1),l=G(je(Z(o,[0,1],[e,t-2]),1),at(-1)),c=xt([a,u],1),f=xt([o,l],1),p=P(ke(c,f),[s[0],s[1]]);r=er(p)}if(r=Nn(r),n.rank===3&&n.shape[0]!==0){const s=r,a=n.shape[0];r=P(r,[a,r.shape[0]/a,r.shape[1]]),s.dispose()}return r}const du=_({irfft_:e0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function n0(n,t,e=0){const s={x:w(n,"x","split")},a={numOrSizeSplits:t,axis:e};return I.runKernel(pp,s,a)}const xn=_({split_:n0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function r0(n,t){k(n.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${n.dtype}`);let e=n.shape[n.shape.length-1];const r=n.size/e;let s;if(t!=null&&t<e){const v=n.shape.map(E=>0),x=n.shape.map(E=>E);x[n.shape.length-1]=t,s=Z(n,v,x),e=t}else if(t!=null&&t>e){const v=n.shape.map(x=>x);v[n.shape.length-1]=t-e,s=xt([n,en(v)],n.shape.length-1),e=t}else s=n;const a=Hs(s),o=P(ke(s,a),[r,e]),u=Xs(o),l=Math.floor(e/2)+1,c=Nn(u),f=ur(u),p=xn(c,[l,e-l],c.shape.length-1),y=xn(f,[l,e-l],f.shape.length-1),b=s.shape.slice();return b[s.shape.length-1]=l,P(ke(p[0],y[0]),b)}const Ys=_({rfft_:r0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s0(n,t){let e=w(n,"a","squaredDifference"),r=w(t,"b","squaredDifference");[e,r]=dt(e,r),wt(e.shape,r.shape);const s={a:e,b:r},a={};return I.runKernel(wp,s,a)}const mu=_({squaredDifference_:s0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a0(n,t){const e=w(n,"x","squeeze","string_or_numeric");return P(e,Ll(e.shape,t).newShape)}const Nt=_({squeeze_:a0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function o0(n,t=0){const e=Gn(n,"tensors","stack","string_or_numeric");k(e.length>=1,()=>"Pass at least one tensor to tf.stack"),e.length>0&&k(t<=e[0].rank,()=>"Axis must be <= rank of the tensor");const r=e,s={axis:t};return I.runKernel(Ph,r,s)}const ge=_({stack_:o0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function i0(n,t=0){const r={x:w(n,"x","step")},s={alpha:t};return I.runKernel(Cp,r,s)}const yu=_({step_:i0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function u0(n,t,e,r,s=0,a=0,o=0,u=0,l=0){const f={x:w(n,"x","stridedSlice","string_or_numeric")},p={begin:t,end:e,strides:r,beginMask:s,endMask:a,ellipsisMask:o,newAxisMask:u,shrinkAxisMask:l};return I.runKernel(vp,f,p)}const l0=_({stridedSlice_:u0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function c0(n){const e={x:w(n,"x","tan","float32")};return I.runKernel(kp,e)}const h0=_({tan_:c0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dt(n,t){nn(n);const e=Ee(n,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return _e(n,null,e,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Re(n,t,e){if(nn(n),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const r=Ee(n,e);if(r.length!==2&&r.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return _e(n,t,r,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function p0(n,t,e){if(nn(n),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");const r=Ee(n,e);if(r.length!==4&&r.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return _e(n,t,r,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f0(n,t,e){if(nn(n),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");const r=Ee(n,e);if(r.length!==5&&r.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return _e(n,t,r,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function d0(n,t,e){if(nn(n),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");const r=Ee(n,e);if(r.length!==6&&r.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return t=t||r,_e(n,t,r,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function m0(n,t=1,e=!0){const r=w(n,"x","topk");if(r.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const s=r.shape[r.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>s)throw new Error(`'k' passed to topk() must be <= the last dimension (${s}) but got ${t}`);const a={x:r},o={k:t,sorted:e},[u,l]=I.runKernel(_p,a,o);return{values:u,indices:l}}const y0=_({topk_:m0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function g0(n,t=0,e=1,r,s){if(r!=null&&r==="bool")throw new Error("Unsupported data type $ { dtype }");const a=new Gs(t,e,r,!0,s),o=de(n,r);for(let u=0;u<o.values.length;u++)o.values[u]=a.nextValue();return o.toTensor()}const b0=_({truncatedNormal_:g0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function w0(n,t=0){const e=w(n,"x","unique","string_or_numeric");k(e.rank>0,()=>"The input tensor must be at least 1D");const r={x:e},s={axis:t},[a,o]=I.runKernel(Ip,r,s);return{values:a,indices:o}}const v0=_({unique_:w0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function N0(n,t,e){const r=w(n,"x","unsortedSegmentSum"),s=w(t,"segmentIds","unsortedSegmentSum","int32");k(vn(e),()=>"numSegments must be of dtype int");const a={x:r,segmentIds:s},o={numSegments:e};return I.runKernel(Op,a,o)}const T0=_({unsortedSegmentSum_:N0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function S0(n,t=0){const e=w(n,"x","unstack","string_or_numeric");k(t>=-e.shape.length&&t<e.shape.length,()=>`Axis = ${t} is not in [-${e.shape.length}, ${e.shape.length})`);const r={value:e},s={axis:t};return I.runKernel(Ap,r,s)}const Ue=_({unstack_:S0});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x0(n,t){return Ws(n,t,"right")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function k0(n,t=!0,e,r){return I.makeVariable(n,t,e,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function E0(n,t){const e=[];for(let a=0;a<t.length;a++)t[a]&&e.push(a);const r=de(n,"int32"),s=de([e.length,n.length],"int32");for(let a=0;a<e.length;a++){const o=r.indexToLoc(e[a]),u=a*n.length;s.values.set(o,u)}return s.toTensor()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function _0(n){const t=w(n,"condition","whereAsync","bool"),e=await t.data(),r=E0(t.shape,e);return n!==t&&t.dispose(),r}const gu=_0;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function $0(n,t,e){const r=w(n,"tensor","boolMask"),s=w(t,"mask","boolMask","bool"),a=e==null?0:e,o=s.rank,u=r.shape;k(o>0,()=>"mask cannot be scalar"),Wt(u.slice(a,a+o),s.shape,"mask's shape must match the first K dimensions of tensor's shape,");let l=1;for(let x=a;x<a+o;x++)l*=u[x];const c=u.slice(0,a).concat([l],u.slice(a+o)),f=P(r,c),p=P(s,[-1]),y=await gu(p),b=Nt(y,[1]),v=Ui(f,b,a);return n!==r&&r.dispose(),t!==s&&s.dispose(),b.dispose(),f.dispose(),p.dispose(),y.dispose(),v}const I0=$0;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function A0(n,t,e,r,s=!0){const a=w(n,"v","movingAverage"),o=w(t,"x","movingAverage"),u=w(e,"decay","movingAverage");Jp(a,o),k(xe(a.shape,o.shape),()=>"Shape mismatch in v and x");const l=at(1),c=nt(l,u);let f=G(nt(o,a),c);if(s){k(r!=null,()=>"When using zeroDebias: true, step is required.");const p=w(r,"step","movingAverage");f=it(f,nt(l,Us(u,p)))}return lt(a,f)}const O0=_({movingAverage_:A0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function D0(n,t,e){const r=w(n,"indices","scatterND","int32"),s=w(t,"updates","scatterND");hd(s,r,e);const a={indices:r,updates:s},o={shape:e};return I.runKernel(Qh,a,o)}const C0=_({scatterND_:D0});function F0(n,t,e,r){if(n.dtype!=="int32")throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${n.dtype}.`);if(n.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${n.shape}.`);const s=n.rank>0?n.shape[0]:1,a=n.rank>1?n.shape[1]:1;if(e.length!==a)throw new Error(`outputShape has incorrect number of elements:, ${e.length}, should be: ${a}.`);const o=t.size;if(!(t.rank===0||t.rank===1&&o===s))throw new Error(`sparseValues has incorrect shape ${t.shape}, should be [] or [${s}]`);if(t.dtype!==r.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function P0(n,t,e,r=0){const s=w(n,"sparseIndices","sparseToDense","int32"),a=w(t,"sparseValues","sparseToDense","string_or_numeric"),o=w(r,"defaultValue","sparseToDense",a.dtype);F0(s,a,e,o);const u={sparseIndices:s,sparseValues:a,defaultValue:o},l={outputShape:e};return I.runKernel(bp,u,l)}const L0=_({sparseToDense_:P0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function R0(n,t){const e=w(t,"indices","gatherND","int32"),s={params:w(n,"x","gatherND","string_or_numeric"),indices:e};return I.runKernel(Zc,s)}const B0=_({gatherND_:R0});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function z0(n,t){if(t==null)return n.shape.slice();if(xe(n.shape,t))return t;if(n.shape.length===t.length){const e=[];for(let r=0;r<n.shape.length;r++)t[r]==null&&n.shape[r]!=null?e.push(n.shape[r]):e.push(t[r]);return e}return t}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function V0(n,t,e,r){const s=w(n,"x","dropout");if(k(s.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${s.dtype} tensor instead.`),k(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return n instanceof gt?s.clone():s;const a=z0(s,e),o=1-t,u=it(Hi(lt(hu(a,0,1,"float32",r),o)),o);return G(s,u)}const j0=_({dropout_:V0});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bu(n){return Math.floor(Math.pow(2,Math.ceil(Math.log(n)/Math.log(2))))}function Js(n,t,e){const r=1-n%2,s=new Float32Array(n);for(let a=0;a<n;++a){const o=2*Math.PI*a/(n+r-1);s[a]=t-e*Math.cos(o)}return Dt(s,"float32")}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function M0(n,t,e=1){const r=w(n,"predictions","inTopK"),s=w(t,"targets","inTopK");k(r.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${r.rank}`),k(r.rank-1===s.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${r.rank} and targets rank ${s.rank}`),Wt(r.shape.slice(0,r.shape.length-1),s.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const a=r.shape[r.shape.length-1];k(e>0&&e<=a,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${a}), but got ${e}`);const o=await r.data(),u=await s.data(),[l,c]=[o.length/a,a],f=Rl("bool",l);for(let p=0;p<l;p++){const y=p*c,b=o.subarray(y,y+c),v=[];for(let x=0;x<b.length;x++)v.push({value:b[x],index:x});v.sort((x,E)=>E.value-x.value),f[p]=0;for(let x=0;x<e;x++)if(v[x].index===u[p]){f[p]=1;break}}return n!==r&&r.dispose(),t!==s&&s.dispose(),ie(f,s.shape,"bool")}const H0=M0;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function U0(n,t,e,r,s,a="NHWC",o){let u=n;n.rank===3&&(u=P(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let l=t;l.rank===3&&(l=P(t,[1,t.shape[0],t.shape[1],t.shape[2]])),k(u.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${u.shape}.`),k(l.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${l.shape}.`),k(e.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${e}.`);const c=a==="NHWC"?u.shape[3]:u.shape[1],f=a==="NHWC"?l.shape[3]:l.shape[1];k(c===e[2],()=>`Error in conv2dDerFilter: depth of input ${c}) must match input depth in filter (${e[2]}.`),k(f===e[3],()=>`Error in conv2dDerFilter: depth of dy (${f}) must match output depth for filter (${e[3]}).`),Zt("conv2dDerFilter",s,o);const p={x:u,dy:l},y={strides:r,pad:s,dataFormat:a,dimRoundingMode:o,filterShape:e};return I.runKernel(Nc,p,y)}const K0=_({conv2DBackpropFilter_:U0});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zs(n,t,e){if(e==null||e==="linear")return n;if(e==="relu")return G(n,yu(t));throw new Error(`Cannot compute gradient for fused activation ${e}.`)}function Qs(n,t){let e=t;const r=od(n.shape,t.shape);return r.length>0&&(e=ct(e,r)),P(e,n.shape)}function ta(n,t,e,r){if(t==="linear")return n;if(t==="relu")return yr(n);if(t==="elu")return Vi(n);if(t==="relu6")return pu(n);if(t==="prelu")return nu(n,e);if(t==="leakyrelu")return Wi(n,r);if(t==="sigmoid")return Le(n);throw new Error(`Unknown fused activation ${t}.`)}const ea=(n,t)=>!(n>0)||t==="linear";/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function W0({x:n,filter:t,strides:e,pad:r,dataFormat:s="NHWC",dilations:a=[1,1],dimRoundingMode:o,bias:u,activation:l="linear",preluActivationWeights:c,leakyreluAlpha:f}){if(l=l||"linear",ea(I.state.gradientDepth,l)===!1){k(s==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${s} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let B=hr(n,t,e,r,s,a,o);return u!=null&&(B=lt(B,u)),ta(B,l,c,f)}const p=w(n,"x","conv2d","float32"),y=w(t,"filter","conv2d","float32");let b=p,v=!1;p.rank===3&&(v=!0,b=P(p,[1,p.shape[0],p.shape[1],p.shape[2]])),k(b.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${b.rank}.`),k(y.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${y.rank}.`),Zt("fused conv2d",r,o);const x=s==="NHWC"?b.shape[3]:b.shape[1];k(y.shape[2]===x,()=>`Error in conv2d: depth of input (${x}) must match input depth for filter ${y.shape[2]}.`),k($e(e,a),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${a}'`);const E=js(b.shape,y.shape,e,a,r,o);let A;u!=null&&(A=w(u,"bias","fused conv2d"),[A]=dt(A,p),s==="NHWC"?wt(E.outShape,A.shape):(k(A.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${A.shape.length}.`),k(A.shape.length===0||A.shape[0]===E.outChannels||A.shape[0]===1,()=>`Error in fused conv2d: bias shape (${A.shape}) is not compatible with the number of output channels (${E.outChannels})`)));let M;if(c!=null){const B=c.shape;if(k(B.length<=1||B.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${B.length}.`),B.length===1)k(B[0]===1||B[0]===E.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${B}) is not compatible with the number of output channels (${E.outChannels}).`);else if(B.length===3)try{wt(B,E.outShape)}catch{const F=`Error in fused conv2d: PReLU activation weights (${B}) is not compatible with the output shape of the conv2d (${E.outShape}).`;throw Error(F)}M=w(c,"prelu weights","fused conv2d")}const L=(B,U)=>{k(s==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${s} but only NHWC is currently supported.`);const[F,R,j,z]=U,X=Zs(B,j,l);k(Zn(a),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${a}'`);const q=Bi(R.shape,X,F,e,r),tt=K0(R,X,F.shape,e,r),et=[q,tt];if(z!=null){const pt=Qs(z,X);et.push(pt)}return et},D={x:b,filter:y,bias:A,preluActivationWeights:M},C={strides:e,pad:r,dataFormat:s,dilations:a,dimRoundingMode:o,activation:l,leakyreluAlpha:f};return u==null?ye((U,F,R)=>{let j=I.runKernel(wo,D,C);return R([F,U,j]),v&&(j=P(j,[j.shape[1],j.shape[2],j.shape[3]])),{value:j,gradFunc:L}})(b,y):ye((U,F,R,j)=>{let z=I.runKernel(wo,D,C);return j([F,U,z,R]),v&&(z=P(z,[z.shape[1],z.shape[2],z.shape[3]])),{value:z,gradFunc:L}})(b,y,A)}const q0=_({fusedConv2d_:W0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function G0(n,t,e,r,s,a=[1,1],o){let u=n;n.rank===3&&(u=P(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let l=t;l.rank===3&&(l=P(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const c={x:u,dy:l},f={strides:r,pad:s,dimRoundingMode:o,dilations:a,filterShape:e};return I.runKernel(Cc,c,f)}const X0=_({depthwiseConv2dNativeBackpropFilter_:G0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Y0(n,t,e,r,s,a=[1,1],o){let u=t,l=!1;t.rank===3&&(l=!0,u=P(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const c={dy:u,filter:e},f={strides:r,pad:s,dimRoundingMode:o,dilations:a,inputShape:n},p=I.runKernel(Fc,c,f);return l?P(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const J0=_({depthwiseConv2dNativeBackpropInput_:Y0});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Z0({x:n,filter:t,strides:e,pad:r,dataFormat:s="NHWC",dilations:a=[1,1],dimRoundingMode:o,bias:u,activation:l="linear",preluActivationWeights:c,leakyreluAlpha:f}){if(ea(I.state.gradientDepth,l)===!1){let C=Ms(n,t,e,r,s,a,o);return u!=null&&(C=lt(C,u)),ta(C,l,c,f)}const p=w(n,"x","depthwiseConv2d","float32"),y=w(t,"filter","depthwiseConv2d","float32");let b=p,v=!1;p.rank===3&&(v=!0,b=P(p,[1,p.shape[0],p.shape[1],p.shape[2]])),k(b.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${b.rank}.`),k(y.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${y.rank}.`),k(b.shape[3]===y.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${b.shape[3]}) must match the inChannels dimension in filter ${y.shape[2]}.`),a==null&&(a=[1,1]),k($e(e,a),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${e} and dilations '${a}'`),Zt("fused depthwiseConv2d",r,o);const x=js(b.shape,y.shape,e,a,r,o,!0);let E;u!=null&&(E=w(u,"bias","fused conv2d"),[E]=dt(E,p),wt(x.outShape,E.shape));let A;c!=null&&(A=w(c,"prelu weights","fused depthwiseConv2d"));const M=(C,B)=>{k(Zn(a),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`);const[U,F,R,j]=B,z=Zs(C,R,l),X=J0(F.shape,z,U,e,r,a,o),q=X0(F,z,U.shape,e,r,a,o);if(j!=null){const tt=Qs(E,z);return[X,q,tt]}return[X,q]},L={x:b,filter:y,bias:E,preluActivationWeights:A},D={strides:e,pad:r,dataFormat:s,dilations:a,dimRoundingMode:o,activation:l,leakyreluAlpha:f};return u==null?ye((B,U,F)=>{let R=I.runKernel(vo,L,D);return F([U,B,R]),v&&(R=P(R,[R.shape[1],R.shape[2],R.shape[3]])),{value:R,gradFunc:M}})(b,y):ye((B,U,F,R)=>{let j=I.runKernel(vo,L,D);return R([U,B,j,F]),v&&(j=P(j,[j.shape[1],j.shape[2],j.shape[3]])),{value:j,gradFunc:M}})(b,y,E)}const Q0=_({fusedDepthwiseConv2d_:Z0});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tw({a:n,b:t,transposeA:e=!1,transposeB:r=!1,bias:s,activation:a="linear",preluActivationWeights:o,leakyreluAlpha:u=.2}){if(ea(I.state.gradientDepth,a)===!1){let z=ot(n,t,e,r);return s!=null&&(z=lt(z,s)),ta(z,a,o,u)}let l=w(n,"a","fused matMul"),c=w(t,"b","fused matMul");[l,c]=dt(l,c);const f=e?l.shape[l.rank-2]:l.shape[l.rank-1],p=r?c.shape[c.rank-1]:c.shape[c.rank-2],y=e?l.shape[l.rank-1]:l.shape[l.rank-2],b=r?c.shape[c.rank-2]:c.shape[c.rank-1],v=l.shape.slice(0,-2),x=c.shape.slice(0,-2),E=Tt(v),A=Tt(x);k(f===p,()=>`Error in fused matMul: inner shapes (${f}) and (${p}) of Tensors with shapes ${l.shape} and ${c.shape} and transposeA=${e} and transposeB=${r} must match.`);const L=wt(l.shape.slice(0,-2),c.shape.slice(0,-2)).concat([y,b]),D=e?P(l,[E,f,y]):P(l,[E,y,f]),C=r?P(c,[A,b,p]):P(c,[A,p,b]);let B;s!=null&&(B=w(s,"bias","fused matMul"),[B]=dt(B,l),wt(L,B.shape));let U;o!=null&&(U=w(o,"prelu weights","fused matMul"));const F=(z,X)=>{const[q,tt,et,pt]=X,vt=Zs(P(z,et.shape),et,a);let Lt,$t;if(!e&&!r?(Lt=ot(vt,tt,!1,!0),$t=ot(q,vt,!0,!1)):!e&&r?(Lt=ot(vt,tt,!1,!1),$t=ot(vt,q,!0,!1)):e&&!r?(Lt=ot(tt,vt,!1,!0),$t=ot(q,vt,!1,!1)):(Lt=ot(tt,vt,!0,!0),$t=ot(vt,q,!0,!0)),s!=null){const we=Qs(pt,vt);return[Lt,$t,we]}else return[Lt,$t]},R={a:D,b:C,bias:B,preluActivationWeights:U},j={transposeA:e,transposeB:r,activation:a,leakyreluAlpha:u};return s==null?ye((X,q,tt)=>{const et=I.runKernel(bo,R,j);return tt([X,q,et]),{value:P(et,L),gradFunc:F}})(D,C):ye((X,q,tt,et)=>{const pt=I.runKernel(bo,R,j);return et([X,q,pt,tt]),{value:P(pt,L),gradFunc:F}})(D,C,B)}const ew=_({fusedMatMul_:tw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var nw=Object.freeze(Object.defineProperty({__proto__:null,conv2d:q0,depthwiseConv2d:Q0,matMul:ew},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rw(n){return Js(n,.54,.46)}const sw=_({hammingWindow_:rw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function aw(n){return Js(n,.5,.5)}const wu=_({hannWindow_:aw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ow(n,t,e,r=!1,s=0){let a=0;const o=[];for(;a+t<=n.size;)o.push(Z(n,a,t)),a+=e;if(r)for(;a<n.size;){const u=a+t-n.size,l=xt([Z(n,a,t-u),cr([u],s)]);o.push(l),a+=e}return o.length===0?Re([],[0,t]):P(xt(o),[o.length,t])}const vu=_({frame_:ow});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iw(n,t,e,r,s=wu){r==null&&(r=bu(t));const a=vu(n,t,e),o=G(a,s(t));return Ys(o,r)}const uw=_({stft_:iw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lw(n,t,e,r,s="bilinear",a=0){const o=w(n,"image","cropAndResize"),u=w(t,"boxes","cropAndResize","float32"),l=w(e,"boxInd","cropAndResize","int32"),c=u.shape[0];k(o.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${o.rank}.`),k(u.rank===2&&u.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${c},4] but had shape ${u.shape}.`),k(l.rank===1&&l.shape[0]===c,()=>`Error in cropAndResize: boxInd must be have size [${c}] but had shape ${u.shape}.`),k(r.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`),k(r[0]>=1&&r[1]>=1,()=>`cropSize must be atleast [1,1], but was ${r}`),k(s==="bilinear"||s==="nearest",()=>`method must be bilinear or nearest, but was ${s}`);const f={image:o,boxes:u,boxInd:l},p={method:s,extrapolationValue:a,cropSize:r};return I.runKernel(Ic,f,p)}const cw=_({cropAndResize_:lw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hw(n){const t=w(n,"image","flipLeftRight","float32");k(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);const e={image:t};return I.runKernel(qc,e,{})}const pw=_({flipLeftRight_:hw});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fw(n){const t=w(n,"image","grayscaleToRGB"),e=t.rank-1,r=t.shape[e];k(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),k(r===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`);const s=new Array(t.rank);return s.fill(1,0,e),s[e]=3,bn(t,s)}const dw=_({grayscaleToRGB_:fw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mw(n,t,e=0,r=.5){const s=w(n,"image","rotateWithOffset","float32");k(s.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${s.rank}.`);const a={image:s},o={radians:t,fillValue:e,center:r};return I.runKernel(Fp,a,o)}const yw=_({rotateWithOffset_:mw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rn(n,t,e,r,s,a){r==null&&(r=.5),s==null&&(s=Number.NEGATIVE_INFINITY),a==null&&(a=0);const o=n.shape[0];return e=Math.min(e,o),k(0<=r&&r<=1,()=>`iouThreshold must be in [0, 1], but was '${r}'`),k(n.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${n.rank}'`),k(n.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${n.shape[1]}`),k(t.rank===1,()=>"scores must be a 1D tensor"),k(t.shape[0]===o,()=>`scores has incompatible shape with boxes. Expected ${o}, but was ${t.shape[0]}`),k(0<=a&&a<=1,()=>`softNmsSigma must be in [0, 1], but was '${a}'`),{maxOutputSize:e,iouThreshold:r,scoreThreshold:s,softNmsSigma:a}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gw(n,t,e,r=.5,s=Number.NEGATIVE_INFINITY){const a=w(n,"boxes","nonMaxSuppression","float32"),o=w(t,"scores","nonMaxSuppression","float32"),u=rn(a,o,e,r,s);e=u.maxOutputSize,r=u.iouThreshold,s=u.scoreThreshold;const l={maxOutputSize:e,iouThreshold:r,scoreThreshold:s};return I.runKernel(Ah,{boxes:a,scores:o},l)}const bw=_({nonMaxSuppression_:gw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ww(n,t,e){const r=vw(n,t,e),s=r<0?-(r+1):r;n.splice(s,0,t)}function vw(n,t,e){return Tw(n,t,e||Nw)}function Nw(n,t){return n>t?1:n<t?-1:0}function Tw(n,t,e){let r=0,s=n.length,a=0,o=!1;for(;r<s;){a=r+(s-r>>>1);const u=e(t,n[a]);u>0?r=a+1:(s=a,o=!u)}return o?r:-r-1}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sw(n,t,e,r,s){return na(n,t,e,r,s,0)}function xw(n,t,e,r,s,a){return na(n,t,e,r,s,0,!1,a,!0)}function kw(n,t,e,r,s,a){return na(n,t,e,r,s,a,!0)}function na(n,t,e,r,s,a,o=!1,u=!1,l=!1){const c=[];for(let E=0;E<t.length;E++)t[E]>s&&c.push({score:t[E],boxIndex:E,suppressBeginIndex:0});c.sort(Do);const f=a>0?-.5/a:0,p=[],y=[];for(;p.length<e&&c.length>0;){const E=c.pop(),{score:A,boxIndex:M,suppressBeginIndex:L}=E;if(A<s)break;let D=!1;for(let C=p.length-1;C>=L;--C){const B=Ew(n,M,p[C]);if(B>=r){D=!0;break}if(E.score=E.score*_w(r,f,B),E.score<=s)break}E.suppressBeginIndex=p.length,D||(E.score===A?(p.push(M),y.push(E.score)):E.score>s&&ww(c,E,Do))}const b=p.length,v=e-b;u&&v>0&&(p.push(...new Array(v).fill(0)),y.push(...new Array(v).fill(0)));const x={selectedIndices:p};return o&&(x.selectedScores=y),l&&(x.validOutputs=b),x}function Ew(n,t,e){const r=n.subarray(t*4,t*4+4),s=n.subarray(e*4,e*4+4),a=Math.min(r[0],r[2]),o=Math.min(r[1],r[3]),u=Math.max(r[0],r[2]),l=Math.max(r[1],r[3]),c=Math.min(s[0],s[2]),f=Math.min(s[1],s[3]),p=Math.max(s[0],s[2]),y=Math.max(s[1],s[3]),b=(u-a)*(l-o),v=(p-c)*(y-f);if(b<=0||v<=0)return 0;const x=Math.max(a,c),E=Math.max(o,f),A=Math.min(u,p),M=Math.min(l,y),L=Math.max(A-x,0)*Math.max(M-E,0);return L/(b+v-L)}function _w(n,t,e){const r=Math.exp(t*e*e);return e<=n?r:0}function Do(n,t){return n.score-t.score||n.score===t.score&&t.boxIndex-n.boxIndex}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function $w(n,t,e,r=.5,s=Number.NEGATIVE_INFINITY){const a=w(n,"boxes","nonMaxSuppressionAsync"),o=w(t,"scores","nonMaxSuppressionAsync"),u=rn(a,o,e,r,s);e=u.maxOutputSize,r=u.iouThreshold,s=u.scoreThreshold;const l=await Promise.all([a.data(),o.data()]),c=l[0],f=l[1],{selectedIndices:p}=Sw(c,f,e,r,s);return a!==n&&a.dispose(),o!==t&&o.dispose(),Dt(p,"int32")}const Iw=$w;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Aw(n,t,e,r=.5,s=Number.NEGATIVE_INFINITY,a=0){const o=w(n,"boxes","nonMaxSuppression"),u=w(t,"scores","nonMaxSuppression"),l=rn(o,u,e,r,s,a);e=l.maxOutputSize,r=l.iouThreshold,s=l.scoreThreshold,a=l.softNmsSigma;const c={boxes:o,scores:u},f={maxOutputSize:e,iouThreshold:r,scoreThreshold:s,softNmsSigma:a},p=I.runKernel(Dh,c,f);return{selectedIndices:p[0],selectedScores:p[1]}}const Ow=_({nonMaxSuppressionWithScore_:Aw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Dw(n,t,e,r=.5,s=Number.NEGATIVE_INFINITY,a=0){const o=w(n,"boxes","nonMaxSuppressionAsync"),u=w(t,"scores","nonMaxSuppressionAsync"),l=rn(o,u,e,r,s,a);e=l.maxOutputSize,r=l.iouThreshold,s=l.scoreThreshold,a=l.softNmsSigma;const c=await Promise.all([o.data(),u.data()]),f=c[0],p=c[1],{selectedIndices:y,selectedScores:b}=kw(f,p,e,r,s,a);return o!==n&&o.dispose(),u!==t&&u.dispose(),{selectedIndices:Dt(y,"int32"),selectedScores:Dt(b)}}const Cw=Dw;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fw(n,t,e,r=.5,s=Number.NEGATIVE_INFINITY,a=!1){const o=w(n,"boxes","nonMaxSuppression"),u=w(t,"scores","nonMaxSuppression"),l=rn(o,u,e,r,s,null),c=l.maxOutputSize,f=l.iouThreshold,p=l.scoreThreshold,y={boxes:o,scores:u},b={maxOutputSize:c,iouThreshold:f,scoreThreshold:p,padToMaxOutputSize:a},v=I.runKernel(Oh,y,b);return{selectedIndices:v[0],validOutputs:v[1]}}const Pw=_({nonMaxSuppressionPadded_:Fw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Lw(n,t,e,r=.5,s=Number.NEGATIVE_INFINITY,a=!1){const o=w(n,"boxes","nonMaxSuppressionAsync"),u=w(t,"scores","nonMaxSuppressionAsync"),l=rn(o,u,e,r,s,null),c=l.maxOutputSize,f=l.iouThreshold,p=l.scoreThreshold,[y,b]=await Promise.all([o.data(),u.data()]),{selectedIndices:v,validOutputs:x}=xw(y,b,c,f,p,a);return o!==n&&o.dispose(),u!==t&&u.dispose(),{selectedIndices:Dt(v,"int32"),validOutputs:at(x,"int32")}}const Rw=Lw;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bw(n,t,e=!1,r=!1){const s=w(n,"images","resizeBilinear");k(s.rank===3||s.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${s.rank}.`),k(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),k(r===!1||e===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let a=s,o=!1;s.rank===3&&(o=!0,a=P(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const u={images:a},l={alignCorners:e,halfPixelCenters:r,size:t},c=I.runKernel(Gh,u,l);return o?P(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const zw=_({resizeBilinear_:Bw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vw(n,t,e=!1,r=!1){const s=w(n,"images","resizeNearestNeighbor");k(s.rank===3||s.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${s.rank}.`),k(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),k(s.dtype==="float32"||s.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),k(r===!1||e===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let a=s,o=!1;s.rank===3&&(o=!0,a=P(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const u={images:a},l={alignCorners:e,halfPixelCenters:r,size:t},c=I.runKernel(qh,u,l);return o?P(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const jw=_({resizeNearestNeighbor_:Vw});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mw(n,t="binary",e=!1,r=.5){const s=w(n,"image","threshold"),a=.2989,o=.587,u=.114,l=s.shape[0]*s.shape[1];let c=G(Dt([r]),255),f,p,y,b;if(k(s.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${s.rank}.`),k(s.shape[2]===3||s.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${s.shape[2]}.`),k(s.dtype==="int32"||s.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${s.dtype}.`),k(t==="otsu"||t==="binary",()=>`Method must be binary or otsu, but was ${t}`),s.shape[2]===3){[f,p,y]=xn(s,[1,1,1],-1);const E=G(f,a),A=G(p,o),M=G(y,u);b=lt(lt(E,A),M)}else b=n;if(t==="otsu"){const E=Li(mt(fu(b),"int32"),ie([]),256);c=Hw(E,l)}const v=e?Ks(b,c):mr(b,c);return mt(G(v,255),"int32")}function Hw(n,t){let e=Dt([-1]),r=Dt([0]),s=Dt([0]),a,o,u,l,c,f;for(let p=0;p<n.size-1;p++){a=Z(n,0,p+1),o=Z(n,p+1),c=it(ct(a),t),f=it(ct(o),t);const y=ct(G(a,Sn(0,a.size)));u=it(y,ct(a));const b=cr(o.shape,a.size),v=lt(Sn(0,o.size),b),x=G(o,v);l=it(ct(x),ct(o));const E=nt(u,l),A=nt(u,l),M=G(c,f);s=G(G(M,E),A);const L=mr(s,r);r=tn(L,s,r),e=tn(L,Dt([p]),e)}return e}const Uw=_({threshold_:Mw});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kw(n,t,e="nearest",r="constant",s=0,a){const o=w(n,"image","transform","float32"),u=w(t,"transforms","transform","float32");k(o.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${o.rank}.`),k(u.rank===2&&(u.shape[0]===o.shape[0]||u.shape[0]===1)&&u.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),k(a==null||a.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${a}.`);const l={image:o,transforms:u},c={interpolation:e,fillMode:r,fillValue:s,outputShape:a};return I.runKernel($p,l,c)}const Ww=_({transform_:Kw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qw(n,t,e){k(t%1===0,()=>`bandPart(): numLower must be an integer, got ${t}.`),k(e%1===0,()=>`bandPart(): numUpper must be an integer, got ${e}.`);const r=w(n,"a","bandPart");k(r.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`);const s=r.shape,[a,o]=r.shape.slice(-2);if(!(t<=a))throw new Error(`bandPart(): numLower (${t}) must not be greater than the number of rows (${a}).`);if(!(e<=o))throw new Error(`bandPart(): numUpper (${e}) must not be greater than the number of columns (${o}).`);t<0&&(t=a),e<0&&(e=o);const u=P(Sn(0,a,1,"int32"),[-1,1]),l=Sn(0,o,1,"int32"),c=nt(u,l),f=Qn(Ks(c,at(+t,"int32")),Ki(c,at(-e,"int32"))),p=en([a,o],r.dtype);return P(ge(Ue(P(r,[-1,a,o])).map(y=>tn(f,y,p))),s)}const Gw=_({bandPart_:qw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xw(n){let t;if(Array.isArray(n)){t=!1,k(n!=null&&n.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const s=n[0].shape[0];for(let a=1;a<n.length;++a)k(n[a].shape[0]===s,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${n[a].shape[0]} vs. ${s})`)}else t=!0,n=xn(n,n.shape[0],0).map(s=>Nt(s,[0]));k(n.length<=n[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${n.length}) exceeds number of dimensions (${n[0].shape[0]}).`);const e=[],r=n;for(let s=0;s<n.length;++s)e.push(I.tidy(()=>{let a=r[s];if(s>0)for(let o=0;o<s;++o){const u=G(ct(G(e[o],a)),e[o]);a=nt(a,u)}return it(a,dr(a,"euclidean"))}));return t?ge(e,0):e}const Yw=_({gramSchmidt_:Xw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jw(n,t=!1){if(k(n.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${n.rank}`),n.rank===2)return Co(n,t);{const e=n.shape.slice(0,n.shape.length-2).reduce((l,c)=>l*c),r=Ue(P(n,[e,n.shape[n.shape.length-2],n.shape[n.shape.length-1]]),0),s=[],a=[];r.forEach(l=>{const[c,f]=Co(l,t);s.push(c),a.push(f)});const o=P(ge(s,0),n.shape),u=P(ge(a,0),n.shape);return[o,u]}}function Co(n,t=!1){return I.tidy(()=>{k(n.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${n.shape.length}D Tensor.`);const e=n.shape[0],r=n.shape[1];let s=Mi(e),a=Se(n);const o=Re([[1]],[1,1]);let u=Se(o);const l=e>=r?r:e;for(let c=0;c<l;++c){const f=a,p=u,y=s;[u,a,s]=I.tidy(()=>{const b=Z(a,[c,c],[e-c,1]),v=dr(b),x=Z(a,[c,c],[1,1]),E=tn(mr(x,0),Re([[-1]]),Re([[1]])),A=nt(x,G(E,v)),M=it(b,A);M.shape[0]===1?u=Se(o):u=xt([o,Z(M,[1,0],[M.shape[0]-1,M.shape[1]])],0);const L=fe(it(ot(E,A),v)),D=Z(a,[c,0],[e-c,r]),C=G(L,u),B=ms(u);if(c===0)a=nt(D,ot(C,ot(B,D)));else{const R=nt(D,ot(C,ot(B,D)));a=xt([Z(a,[0,0],[c,r]),R],0)}const U=ms(C),F=Z(s,[0,c],[e,s.shape[1]-c]);if(c===0)s=nt(F,ot(ot(F,u),U));else{const R=nt(F,ot(ot(F,u),U));s=xt([Z(s,[0,0],[e,c]),R],1)}return[u,a,s]}),se([f,p,y])}return!t&&e>r&&(s=Z(s,[0,0],[e,r]),a=Z(a,[0,0],[r,r])),[s,a]})}const Zw=_({qr_:Jw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Pt;(function(n){n[n.NONE=0]="NONE",n[n.MEAN=1]="MEAN",n[n.SUM=2]="SUM",n[n.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(Pt||(Pt={}));function Qw(n,t,e=Pt.SUM_BY_NONZERO_WEIGHTS){const r=w(n,"losses","computeWeightedLoss");let s=null;t!=null&&(s=w(t,"weights","computeWeightedLoss"));const a=s==null?r:G(r,s);if(e===Pt.NONE)return a;if(e===Pt.SUM)return ct(a);if(e===Pt.MEAN){if(s==null)return tr(a);{const o=r.size/s.size,u=it(ct(a),ct(s));return o>1?it(u,at(o)):u}}if(e===Pt.SUM_BY_NONZERO_WEIGHTS){if(s==null)return it(ct(a),at(r.size));{const o=G(s,Pe(r.shape)),u=mt(ct(tu(o,at(0))),"float32");return it(ct(a),u)}}throw Error(`Unknown reduction: ${e}`)}const be=_({computeWeightedLoss_:Qw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function t1(n,t,e,r=Pt.SUM_BY_NONZERO_WEIGHTS){const s=w(n,"labels","absoluteDifference"),a=w(t,"predictions","absoluteDifference");let o=null;e!=null&&(o=w(e,"weights","absoluteDifference")),Wt(s.shape,a.shape,"Error in absoluteDifference: ");const u=Ut(nt(s,a));return be(u,o,r)}const e1=_({absoluteDifference_:t1});function n1(n,t,e,r,s=Pt.SUM_BY_NONZERO_WEIGHTS){const a=w(n,"labels","cosineDistance"),o=w(t,"predictions","cosineDistance");let u=null;r!=null&&(u=w(r,"weights","cosineDistance")),Wt(a.shape,o.shape,"Error in cosineDistance: ");const l=at(1),c=nt(l,ct(G(a,o),e,!0));return be(c,u,s)}const r1=_({cosineDistance_:n1});function s1(n,t,e,r=Pt.SUM_BY_NONZERO_WEIGHTS){let s=w(n,"labels","hingeLoss");const a=w(t,"predictions","hingeLoss");let o=null;e!=null&&(o=w(e,"weights","hingeLoss")),Wt(s.shape,a.shape,"Error in hingeLoss: ");const u=at(1);s=nt(G(at(2),s),u);const l=yr(nt(u,G(s,a)));return be(l,o,r)}const a1=_({hingeLoss_:s1});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function o1(n,t,e,r=1,s=Pt.SUM_BY_NONZERO_WEIGHTS){const a=w(n,"labels","huberLoss"),o=w(t,"predictions","huberLoss");let u=null;e!=null&&(u=w(e,"weights","huberLoss")),Wt(a.shape,o.shape,"Error in huberLoss: ");const l=at(r),c=Ut(nt(o,a)),f=Qi(c,l),p=nt(c,f),y=lt(G(at(.5),fr(f)),G(l,p));return be(y,u,s)}const i1=_({huberLoss_:o1});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function u1(n,t,e,r=1e-7,s=Pt.SUM_BY_NONZERO_WEIGHTS){const a=w(n,"labels","logLoss"),o=w(t,"predictions","logLoss");let u=null;e!=null&&(u=w(e,"weights","logLoss")),Wt(a.shape,o.shape,"Error in logLoss: ");const l=at(1),c=at(r),f=fe(G(a,Tn(lt(o,c)))),p=G(nt(l,a),Tn(lt(nt(l,o),c))),y=nt(f,p);return be(y,u,s)}const l1=_({logLoss_:u1});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function c1(n,t,e,r=Pt.SUM_BY_NONZERO_WEIGHTS){const s=w(n,"labels","meanSquaredError"),a=w(t,"predictions","meanSquaredError");let o=null;e!=null&&(o=w(e,"weights","meanSquaredError")),Wt(s.shape,a.shape,"Error in meanSquaredError: ");const u=mu(s,a);return be(u,o,r)}const h1=_({meanSquaredError_:c1});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function p1(n,t){const e=w(n,"labels","sigmoidCrossEntropyWithLogits"),r=w(t,"logits","sigmoidCrossEntropyWithLogits");Wt(e.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");const s=yr(r),a=G(r,e),o=qi(me(fe(Ut(r))));return lt(nt(s,a),o)}function f1(n,t,e,r=0,s=Pt.SUM_BY_NONZERO_WEIGHTS){let a=w(n,"multiClassLabels","sigmoidCrossEntropy");const o=w(t,"logits","sigmoidCrossEntropy");let u=null;if(e!=null&&(u=w(e,"weights","sigmoidCrossEntropy")),Wt(a.shape,o.shape,"Error in sigmoidCrossEntropy: "),r>0){const c=at(r),f=at(1),p=at(.5);a=lt(G(a,nt(f,c)),G(p,c))}const l=p1(a,o);return be(l,u,s)}const d1=_({sigmoidCrossEntropy_:f1});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function m1(n,t,e=-1){if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${e}`);return ye((s,a,o)=>{const l=Xi(a,[e],!0),c=nt(mt(a,"float32"),l);o([s,c]);const f=fe(G(c,s));return{value:ct(f,[e]),gradFunc:(b,v)=>{const[x,E]=v,A=pr(b.shape,[e]);return[G(P(b,A),nt(mt(x,"float32"),me(E))),G(P(b,A),nt(me(E),mt(x,"float32")))]}}})(n,t)}function y1(n,t,e,r=0,s=Pt.SUM_BY_NONZERO_WEIGHTS){let a=w(n,"onehotLabels","softmaxCrossEntropy");const o=w(t,"logits","softmaxCrossEntropy");let u=null;if(e!=null&&(u=w(e,"weights","softmaxCrossEntropy")),Wt(a.shape,o.shape,"Error in softmaxCrossEntropy: "),r>0){const c=at(r),f=at(1),p=at(a.shape[1]);a=lt(G(a,nt(f,c)),it(c,p))}const l=m1(a,o);return be(l,u,s)}const g1=_({softmaxCrossEntropy_:y1});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function b1(n,t,e,r){const s=w(n,"indices","sparseFillEmptyRows","int32"),a=w(t,"values","sparseFillEmptyRows"),o=w(e,"denseShape","sparseFillEmptyRows","int32"),u=w(r,"defaultValue","sparseFillEmptyRows",a.dtype);if(s.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${s.shape}`);if(a.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${a.shape}`);if(o.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${o.shape}`);if(u.rank!==0)throw new Error(`Default value should be a scalar but received shape ${u.shape}`);const l={indices:s,values:a,denseShape:o,defaultValue:u},c=I.runKernel(dp,l);return{outputIndices:c[0],outputValues:c[1],emptyRowIndicator:c[2],reverseIndexMap:c[3]}}const w1=_({sparseFillEmptyRows_:b1});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function v1(n,t,e){const r=w(n,"inputIndices","sparseReshape","int32"),s=w(t,"inputShape","sparseReshape","int32"),a=w(e,"newShape","sparseReshape","int32");if(r.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${r.shape}`);if(s.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${s.shape}`);if(a.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${a.shape}`);const o={inputIndices:r,inputShape:s,newShape:a},u=I.runKernel(mp,o);return{outputIndices:u[0],outputShape:u[1]}}const N1=_({sparseReshape_:v1});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T1(n,t,e){const r=w(n,"data","sparseSegmentMean"),s=w(t,"indices","sparseSegmentMean","int32"),a=w(e,"segmentIds","sparseSegmentMean","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(s.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${s.shape}`);if(a.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${a.shape}`);const o={data:r,indices:s,segmentIds:a};return I.runKernel(yp,o)}const S1=_({sparseSegmentMean_:T1});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x1(n,t,e){const r=w(n,"data","sparseSegmentSum"),s=w(t,"indices","sparseSegmentSum","int32"),a=w(e,"segmentIds","sparseSegmentSum","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(s.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${s.shape}`);if(a.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${a.shape}`);const o={data:r,indices:s,segmentIds:a};return I.runKernel(gp,o)}const k1=_({sparseSegmentSum_:x1});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function E1(n,t,e,r,s,a,o,u){const l=w(n,"data","stringNGrams","string");if(l.dtype!=="string")throw new Error("Data must be of datatype string");if(l.shape.length!==1)throw new Error(`Data must be a vector, saw: ${l.shape}`);const c=w(t,"dataSplits","stringNGrams");if(c.dtype!=="int32")throw new Error("Data splits must be of datatype int32");const f={separator:e,nGramWidths:r,leftPad:s,rightPad:a,padWidth:o,preserveShortSequences:u},p={data:l,dataSplits:c},y=I.runKernel(Np,p,f);return{nGrams:y[0],nGramsSplits:y[1]}}const _1=_({stringNGrams_:E1});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $1(n,t,e=!0){const r=w(n,"input","stringSplit","string"),s=w(t,"delimiter","stringSplit","string");if(r.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${r.shape}`);if(s.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${s.shape}`);const a={skipEmpty:e},o={input:r,delimiter:s},u=I.runKernel(Tp,o,a);return{indices:u[0],values:u[1],shape:u[2]}}const I1=_({stringSplit_:$1});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function A1(n,t){const e=w(n,"input","stringToHashBucketFast","string"),r={numBuckets:t};if(t<=0)throw new Error("Number of buckets must be at least 1");const s={input:e};return I.runKernel(Sp,s,r)}const O1=_({stringToHashBucketFast_:A1});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const D1={fft:Xs,ifft:er,rfft:Ys,irfft:du},C1={hammingWindow:sw,hannWindow:wu,frame:vu,stft:uw},gr={flipLeftRight:pw,grayscaleToRGB:dw,resizeNearestNeighbor:jw,resizeBilinear:zw,rotateWithOffset:yw,cropAndResize:cw,nonMaxSuppression:bw,nonMaxSuppressionAsync:Iw,nonMaxSuppressionWithScore:Ow,nonMaxSuppressionWithScoreAsync:Cw,nonMaxSuppressionPadded:Pw,nonMaxSuppressionPaddedAsync:Rw,threshold:Uw,transform:Ww},F1={bandPart:Gw,gramSchmidt:Yw,qr:Zw},P1={absoluteDifference:e1,computeWeightedLoss:be,cosineDistance:r1,hingeLoss:a1,huberLoss:i1,logLoss:l1,meanSquaredError:h1,sigmoidCrossEntropy:d1,softmaxCrossEntropy:g1},L1={sparseFillEmptyRows:w1,sparseReshape:N1,sparseSegmentMean:S1,sparseSegmentSum:k1},R1={stringNGrams:_1,stringSplit:I1,stringToHashBucketFast:O1};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const B1=rt();B1.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,n=>{n&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */var Ht;(function(n){n[n.DT_INVALID=0]="DT_INVALID",n[n.DT_FLOAT=1]="DT_FLOAT",n[n.DT_DOUBLE=2]="DT_DOUBLE",n[n.DT_INT32=3]="DT_INT32",n[n.DT_UINT8=4]="DT_UINT8",n[n.DT_INT16=5]="DT_INT16",n[n.DT_INT8=6]="DT_INT8",n[n.DT_STRING=7]="DT_STRING",n[n.DT_COMPLEX64=8]="DT_COMPLEX64",n[n.DT_INT64=9]="DT_INT64",n[n.DT_BOOL=10]="DT_BOOL",n[n.DT_QINT8=11]="DT_QINT8",n[n.DT_QUINT8=12]="DT_QUINT8",n[n.DT_QINT32=13]="DT_QINT32",n[n.DT_BFLOAT16=14]="DT_BFLOAT16",n[n.DT_QINT16=15]="DT_QINT16",n[n.DT_QUINT16=16]="DT_QUINT16",n[n.DT_UINT16=17]="DT_UINT16",n[n.DT_COMPLEX128=18]="DT_COMPLEX128",n[n.DT_HALF=19]="DT_HALF",n[n.DT_RESOURCE=20]="DT_RESOURCE",n[n.DT_VARIANT=21]="DT_VARIANT",n[n.DT_UINT32=22]="DT_UINT32",n[n.DT_UINT64=23]="DT_UINT64",n[n.DT_FLOAT_REF=101]="DT_FLOAT_REF",n[n.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",n[n.DT_INT32_REF=103]="DT_INT32_REF",n[n.DT_UINT8_REF=104]="DT_UINT8_REF",n[n.DT_INT16_REF=105]="DT_INT16_REF",n[n.DT_INT8_REF=106]="DT_INT8_REF",n[n.DT_STRING_REF=107]="DT_STRING_REF",n[n.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",n[n.DT_INT64_REF=109]="DT_INT64_REF",n[n.DT_BOOL_REF=110]="DT_BOOL_REF",n[n.DT_QINT8_REF=111]="DT_QINT8_REF",n[n.DT_QUINT8_REF=112]="DT_QUINT8_REF",n[n.DT_QINT32_REF=113]="DT_QINT32_REF",n[n.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",n[n.DT_QINT16_REF=115]="DT_QINT16_REF",n[n.DT_QUINT16_REF=116]="DT_QUINT16_REF",n[n.DT_UINT16_REF=117]="DT_UINT16_REF",n[n.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",n[n.DT_HALF_REF=119]="DT_HALF_REF",n[n.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",n[n.DT_VARIANT_REF=121]="DT_VARIANT_REF",n[n.DT_UINT32_REF=122]="DT_UINT32_REF",n[n.DT_UINT64_REF=123]="DT_UINT64_REF"})(Ht||(Ht={}));var Fo;(function(n){(function(t){t[t.LEGACY=0]="LEGACY",t[t.V1=1]="V1",t[t.V2=2]="V2"})(n.CheckpointFormatVersion||(n.CheckpointFormatVersion={}))})(Fo||(Fo={}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const z1={};function Nu(n){return z1[n]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function m(n,t,e,r,s){const a=t.inputParams[n];if(a&&a.inputIndexStart!==void 0){const u=a.inputIndexStart,l=a.inputIndexEnd===0?void 0:a.inputIndexEnd===void 0?u+1:a.inputIndexEnd;if(a.type==="tensor")return Ot(t.inputNames[a.inputIndexStart],e,r,s);if(a.type==="tensors")return t.inputNames.slice(u,l).map(y=>Ot(y,e,r,s));const c=Ot(t.inputNames.slice(u)[0],e,r,s),f=c.dataSync();return a.type==="number"?f[0]:ns(c.shape,f)}const o=t.attrParams[n];return o&&o.value}function Ot(n,t,e,r){const[s,a]=zt(n);if(r!=null){const u=r.getHashTableHandleByName(s);if(u!=null)return u}const o=e.currentContextIds.find(u=>!!t[nr(s,u)]);return o!==void 0?t[nr(s,o)][a]:void 0}function V1(n,t,e){return t[nr(n,e.currentContextId)]}function ae(n,t){const[e,r,s]=zt(n);return[nr(e,t&&t.currentContextId),r,s]}function nr(n,t){return t?`${n}-${t}`:n}function zt(n){const t=n.split(":");if(t.length===1)return[n,0,void 0];const e=t[0],r=t.length===3?t[1]:void 0,s=Number(t[t.length-1]);return[e,s,r]}function Wn(n,t,e){let r=m("pad",n,t,e);if(r==="explicit"){r=m("explicitPaddings",n,t,e);const s=[[0,0],[0,0],[0,0],[0,0]];for(let a=0;a<4;a++)s[a][0]=r[a*2],s[a][1]=r[a*2+1];return s}return r}function he(n){return n.kept?n:Se(n)}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const j1=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var M1=Object.freeze(Object.defineProperty({__proto__:null,json:j1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const H1=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Prod",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axes",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var U1=Object.freeze(Object.defineProperty({__proto__:null,json:H1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const K1=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}];var W1=Object.freeze(Object.defineProperty({__proto__:null,json:K1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const q1=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}];var G1=Object.freeze(Object.defineProperty({__proto__:null,json:q1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const X1=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}];var Y1=Object.freeze(Object.defineProperty({__proto__:null,json:X1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const J1=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var Z1=Object.freeze(Object.defineProperty({__proto__:null,json:J1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Q1=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}];var tv=Object.freeze(Object.defineProperty({__proto__:null,json:Q1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ev=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}];var nv=Object.freeze(Object.defineProperty({__proto__:null,json:ev},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rv=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]}];var sv=Object.freeze(Object.defineProperty({__proto__:null,json:rv},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const av=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}];var ov=Object.freeze(Object.defineProperty({__proto__:null,json:av},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const iv=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var uv=Object.freeze(Object.defineProperty({__proto__:null,json:iv},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lv=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]}];var cv=Object.freeze(Object.defineProperty({__proto__:null,json:lv},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hv=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"SparseToDense",category:"normalization",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!0,notSupported:!0}]}];var pv=Object.freeze(Object.defineProperty({__proto__:null,json:hv},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fv=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}];var dv=Object.freeze(Object.defineProperty({__proto__:null,json:fv},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mv=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]}];var yv=Object.freeze(Object.defineProperty({__proto__:null,json:mv},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gv=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}];var bv=Object.freeze(Object.defineProperty({__proto__:null,json:gv},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wv=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}];var vv=Object.freeze(Object.defineProperty({__proto__:null,json:wv},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Nv=[{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}];var Tv=Object.freeze(Object.defineProperty({__proto__:null,json:Nv},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Sv=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}];var xv=Object.freeze(Object.defineProperty({__proto__:null,json:Sv},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Po{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const t=[M1,U1,W1,G1,Y1,Z1,tv,nv,sv,ov,uv,cv,pv,dv,yv,bv,vv,Tv,xv],e=[].concat(...t.map(r=>r.json));this.opMappers=e.reduce((r,s)=>(r[s.tfOpName]=s,r),{})}transformGraph(t,e={}){const r=t.node,s=[],a=[],o=[],u=r.reduce((x,E)=>(x[E.name]=this.mapNode(E),E.op.startsWith("Placeholder")?s.push(x[E.name]):E.op==="Const"?a.push(x[E.name]):(E.input==null||E.input.length===0)&&o.push(x[E.name]),x),{});let l=[];const c=[];let f={},p={};e!=null&&(f=this.mapSignatureEntries(e.inputs),p=this.mapSignatureEntries(e.outputs));const y=Object.keys(u);y.forEach(x=>{const E=u[x];E.inputNames.forEach((A,M)=>{const[L,,D]=ae(A),C=u[L];if(C.outputs!=null){const B=C.outputs.indexOf(D);if(B!==-1){const U=`${L}:${B}`;E.inputNames[M]=U}}E.inputs.push(C),C.children.push(E)})}),Object.keys(p).length===0?y.forEach(x=>{const E=u[x];E.children.length===0&&c.push(E)}):Object.keys(p).forEach(x=>{const[E]=ae(x),A=u[E];A!=null&&(A.signatureKey=p[x],c.push(A))}),Object.keys(f).length>0?Object.keys(f).forEach(x=>{const[E]=ae(x),A=u[E];A&&(A.signatureKey=f[x],l.push(A))}):l=s;let b={};t.library!=null&&t.library.function!=null&&(b=t.library.function.reduce((x,E)=>(x[E.signature.name]=this.mapFunction(E),x),{}));const v={nodes:u,inputs:l,outputs:c,weights:a,placeholders:s,signature:e,functions:b};return o.length>0&&(v.initNodes=o),v}mapSignatureEntries(t){return Object.keys(t||{}).reduce((e,r)=>(e[t[r].name]=r,e),{})}mapNode(t){const e=Nu(t.op)||this.opMappers[t.op]||{};t.attr==null&&(t.attr={});const r={name:t.name,op:t.op,category:e.category,inputNames:(t.input||[]).map(s=>s.startsWith("^")?s.slice(1):s),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:t.attr,outputs:e.outputs};return e.inputs!=null&&(r.inputParams=e.inputs.reduce((s,a)=>(s[a.name]={type:a.type,inputIndexStart:a.start,inputIndexEnd:a.end},s),{})),e.attrs!=null&&(r.attrParams=e.attrs.reduce((s,a)=>{const o=a.type;let u;switch(a.type){case"string":u=vs(t.attr,a.tfName,a.defaultValue),u===void 0&&!!a.tfDeprecatedName&&(u=vs(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"string[]":u=_s(t.attr,a.tfName,a.defaultValue),u===void 0&&!!a.tfDeprecatedName&&(u=_s(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"number":u=Ts(t.attr,a.tfName,a.defaultValue||0),u===void 0&&!!a.tfDeprecatedName&&(u=Ts(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"number[]":u=Es(t.attr,a.tfName,a.defaultValue),u===void 0&&!!a.tfDeprecatedName&&(u=Es(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"bool":u=Ns(t.attr,a.tfName,a.defaultValue),u===void 0&&!!a.tfDeprecatedName&&(u=Ns(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"bool[]":u=Is(t.attr,a.tfName,a.defaultValue),u===void 0&&!!a.tfDeprecatedName&&(u=Is(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"shape":u=ks(t.attr,a.tfName,a.defaultValue),u===void 0&&!!a.tfDeprecatedName&&(u=ks(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"shape[]":u=$s(t.attr,a.tfName,a.defaultValue),u===void 0&&!!a.tfDeprecatedName&&(u=$s(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"dtype":u=Ss(t.attr,a.tfName,a.defaultValue),u===void 0&&!!a.tfDeprecatedName&&(u=Ss(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"dtype[]":u=xs(t.attr,a.tfName,a.defaultValue),u===void 0&&!!a.tfDeprecatedName&&(u=xs(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"func":u=Lo(t.attr,a.tfName,a.defaultValue),u===void 0&&!!a.tfDeprecatedName&&(u=Lo(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${a.type} for op: ${t.op}`)}return s[a.name]={value:u,type:o},s},{})),r}mapFunction(t){const e=t.nodeDef,r=[],s=[];let a={};e!=null&&(a=e.reduce((p,y)=>(p[y.name]=this.mapNode(y),y.op==="Const"&&s.push(p[y.name]),p),{}));const o=[],u=[];t.signature.inputArg.forEach(p=>{const[y]=ae(p.name),b={name:y,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:ra(p.type),type:"dtype"}},children:[]};b.signatureKey=p.name,o.push(b),a[y]=b}),Object.keys(a).forEach(p=>{const y=a[p];y.inputNames.forEach((b,v)=>{const[x,,E]=ae(b),A=a[x];if(A.outputs!=null){const M=A.outputs.indexOf(E);if(M!==-1){const L=`${x}:${M}`;y.inputNames[v]=L}}y.inputs.push(A),A.children.push(y)})});const c=t.ret;t.signature.outputArg.forEach(p=>{const[y,b]=ae(c[p.name]),v=a[y];v!=null&&(v.defaultOutput=b,u.push(v))});const f=this.mapArgsToSignature(t);return{nodes:a,inputs:o,outputs:u,weights:s,placeholders:r,signature:f}}mapArgsToSignature(t){return{methodName:t.signature.name,inputs:t.signature.inputArg.reduce((e,r)=>(e[r.name]=this.mapArgToTensorInfo(r),e),{}),outputs:t.signature.outputArg.reduce((e,r)=>(e[r.name]=this.mapArgToTensorInfo(r,t.ret),e),{})}}mapArgToTensorInfo(t,e){let r=t.name;return e!=null&&(r=e[r]),{name:r,dtype:t.type}}}function kv(n){const t=rt().global;if(typeof t.atob!="undefined")return t.atob(n);if(typeof Buffer!="undefined")return new Buffer(n,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function Tu(n,t){const e=Array.isArray(n)?String.fromCharCode.apply(null,n):kv(n);return t?e:e.toLowerCase()}function vs(n,t,e,r=!1){const s=n[t];return s!=null?Tu(s.s,r):e}function Ns(n,t,e){const r=n[t];return r?r.b:e}function Ts(n,t,e){const r=n[t]||{},s=r.i!=null?r.i:r.f!=null?r.f:e;return typeof s=="number"?s:parseInt(s,10)}function ra(n){switch(typeof n=="string"&&(n=Ht[n]),n){case Ht.DT_FLOAT:case Ht.DT_HALF:return"float32";case Ht.DT_INT32:case Ht.DT_INT64:case Ht.DT_INT8:case Ht.DT_UINT8:return"int32";case Ht.DT_BOOL:return"bool";case Ht.DT_DOUBLE:return"float32";case Ht.DT_STRING:return"string";default:return null}}function Lo(n,t,e){const r=n[t];return r&&r.func?r.func.name:e}function Ss(n,t,e){const r=n[t];return r&&r.type?ra(r.type):e}function xs(n,t,e){const r=n[t];return r&&r.list&&r.list.type?r.list.type.map(s=>ra(s)):e}function Su(n){if(!n.unknownRank)return n.dim!=null?n.dim.map(t=>typeof t.size=="number"?t.size:parseInt(t.size,10)):[]}function ks(n,t,e){const r=n[t];return r&&r.shape?Su(r.shape):e}function Es(n,t,e){const r=n[t];return r?((r.list.f&&r.list.f.length?r.list.f:r.list.i)||[]).map(s=>typeof s=="number"?s:parseInt(s,10)):e}function _s(n,t,e,r=!1){const s=n[t];return s&&s.list&&s.list.s?s.list.s.map(a=>Tu(a,r)):e}function $s(n,t,e){const r=n[t];return r&&r.list&&r.list.shape?r.list.shape.map(s=>Su(s)):e}function Is(n,t,e){const r=n[t];return r&&r.list&&r.list.b?r.list.b:e}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ev{constructor(t,e,r){this.node=t,this.tensorMap=e,this.context=r,this.inputs=[],this.attrs={},this.inputs=t.inputNames.map(s=>this.getInput(s)),t.rawAttrs!=null&&(this.attrs=Object.keys(t.rawAttrs).reduce((s,a)=>(s[a]=this.getAttr(a),s),{}))}getInput(t){return Ot(t,this.tensorMap,this.context)}getAttr(t,e){const r=this.node.rawAttrs[t];if(r.tensor!=null)return Ot(t,this.tensorMap,this.context);if(r.i!=null||r.f!=null)return Ts(this.node.rawAttrs,t,e);if(r.s!=null)return vs(this.node.rawAttrs,t,e);if(r.b!=null)return Ns(this.node.rawAttrs,t,e);if(r.shape!=null)return ks(this.node.rawAttrs,t,e);if(r.type!=null)return Ss(this.node.rawAttrs,t,e);if(r.list!=null){if(r.list.i!=null||r.list.f!=null)return Es(this.node.rawAttrs,t,e);if(r.list.s!=null)return _s(this.node.rawAttrs,t,e);if(r.list.shape!=null)return $s(this.node.rawAttrs,t,e);if(r.list.b!=null)return Is(this.node.rawAttrs,t,e);if(r.list.type!=null)return xs(this.node.rawAttrs,t,e)}return e}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var _t=Object.freeze(Object.defineProperty({__proto__:null,abs:Ut,acos:bd,acosh:vd,add:lt,addN:Td,all:xd,any:Ed,argMax:$d,argMin:Ad,asin:Dd,asinh:Fd,atan:Ld,atan2:Bd,atanh:Vd,avgPool:Fi,avgPool3d:Gd,basicLSTMCell:tm,batchToSpaceND:Pi,batchNorm:lr,batchNorm2d:am,batchNorm3d:im,batchNorm4d:lm,bincount:Li,broadcastArgs:pm,broadcastTo:Kn,buffer:de,cast:mt,ceil:mm,clipByValue:Ri,clone:Se,complex:ke,concat:xt,concat1d:bm,concat2d:vm,concat3d:Tm,concat4d:xm,conv1d:_m,conv2d:hr,conv2dTranspose:Am,conv3d:Dm,conv3dTranspose:Lm,cos:Bm,cosh:Vm,cumprod:Mm,cumsum:Um,denseBincount:Wm,depthToSpace:Gm,depthwiseConv2d:Ms,diag:Jm,dilation2d:Qm,div:it,divNoNan:sy,dot:oy,einsum:uy,elu:Vi,equal:zi,erf:hy,euclideanNorm:Ny,exp:me,expandDims:ce,expm1:ky,eye:Mi,fill:cr,floor:Hi,floorDiv:Ci,gather:Ui,greater:mr,greaterEqual:Ki,imag:ur,isFinite:Cy,isInf:Py,isNaN:Ry,leakyRelu:Wi,less:Vy,lessEqual:Ks,linspace:My,localResponseNormalization:Uy,log:Tn,log1p:qi,logSigmoid:Xy,logSoftmax:Zy,logSumExp:Xi,logicalAnd:Qn,logicalNot:Yi,logicalOr:Ji,logicalXor:sg,lowerBound:og,matMul:ot,max:Je,maxPool:Zi,maxPool3d:lg,maxPoolWithArgmax:hg,maximum:fg,mean:tr,meshgrid:mg,min:bs,minimum:Qi,mirrorPad:bg,mod:vg,moments:Tg,mul:G,multiRNNCell:xg,multinomial:Eg,neg:fe,notEqual:tu,oneHot:ed,ones:Pe,onesLike:Ig,outerProduct:Og,pad:_n,pad1d:Fg,pad2d:Lg,pad3d:Bg,pad4d:Vg,pool:Kg,pow:Us,prelu:nu,print:ki,prod:Gg,raggedGather:Yg,raggedTensorToTensor:Zg,rand:tb,randomGamma:cb,randomNormal:cu,randomStandardNormal:fb,randomUniform:hu,range:Sn,real:Nn,reciprocal:yb,relu:yr,relu6:pu,reshape:P,reverse:je,reverse1d:Nb,reverse2d:Sb,reverse3d:kb,reverse4d:_b,round:fu,rsqrt:Ab,scalar:at,selu:Db,separableConv2d:Fb,setdiff1dAsync:Lb,sigmoid:Le,sign:Bb,sin:Vb,sinh:Mb,slice:Z,slice1d:Ub,slice2d:Wb,slice3d:Gb,slice4d:Yb,softmax:Zb,softplus:Gi,spaceToBatchND:eu,fft:Xs,ifft:er,irfft:du,rfft:Ys,split:xn,sqrt:ws,square:fr,squaredDifference:mu,squeeze:Nt,stack:ge,step:yu,stridedSlice:l0,sub:nt,sum:ct,tan:h0,tanh:gs,tensor:ie,tensor1d:Dt,tensor2d:Re,tensor3d:Di,tensor4d:p0,tensor5d:f0,tensor6d:d0,tile:bn,topk:y0,truncatedNormal:b0,unique:v0,unsortedSegmentSum:T0,unstack:Ue,upperBound:x0,variable:k0,where:tn,whereAsync:gu,zeros:en,zerosLike:Hs,op:_,OP_SCOPE_SUFFIX:fi,booleanMaskAsync:I0,transpose:ms,norm:dr,movingAverage:O0,scatterND:C0,searchSorted:Ws,sparseToDense:L0,gatherND:B0,dropout:j0,enclosingPowerOfTwo:bu,cosineWindow:Js,inTopKAsync:H0,image:gr,linalg:F1,losses:P1,spectral:D1,fused:nw,signal:C1,sparse:L1,string:R1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _v=(n,t,e,r=_t)=>{switch(n.op){case"BiasAdd":case"AddV2":case"Add":return[r.add(m("a",n,t,e),m("b",n,t,e))];case"AddN":return[r.addN(m("tensors",n,t,e))];case"FloorMod":case"Mod":return[r.mod(m("a",n,t,e),m("b",n,t,e))];case"Mul":return[r.mul(m("a",n,t,e),m("b",n,t,e))];case"RealDiv":case"Div":return[r.div(m("a",n,t,e),m("b",n,t,e))];case"DivNoNan":return[r.divNoNan(m("a",n,t,e),m("b",n,t,e))];case"FloorDiv":return[r.floorDiv(m("a",n,t,e),m("b",n,t,e))];case"Sub":return[r.sub(m("a",n,t,e),m("b",n,t,e))];case"Minimum":return[r.minimum(m("a",n,t,e),m("b",n,t,e))];case"Maximum":return[r.maximum(m("a",n,t,e),m("b",n,t,e))];case"Pow":return[r.pow(m("a",n,t,e),m("b",n,t,e))];case"SquaredDifference":return[r.squaredDifference(m("a",n,t,e),m("b",n,t,e))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $v=(n,t,e,r=_t)=>{switch(n.op){case"Abs":case"ComplexAbs":return[r.abs(m("x",n,t,e))];case"Acos":return[r.acos(m("x",n,t,e))];case"Acosh":return[r.acosh(m("x",n,t,e))];case"Asin":return[r.asin(m("x",n,t,e))];case"Asinh":return[r.asinh(m("x",n,t,e))];case"Atan":return[r.atan(m("x",n,t,e))];case"Atan2":return[r.atan2(m("x",n,t,e),m("y",n,t,e))];case"Atanh":return[r.atanh(m("x",n,t,e))];case"Ceil":return[r.ceil(m("x",n,t,e))];case"Complex":return[r.complex(m("real",n,t,e),m("imag",n,t,e))];case"Cos":return[r.cos(m("x",n,t,e))];case"Cosh":return[r.cosh(m("x",n,t,e))];case"Elu":return[r.elu(m("x",n,t,e))];case"Erf":return[r.erf(m("x",n,t,e))];case"Exp":return[r.exp(m("x",n,t,e))];case"Expm1":return[r.expm1(m("x",n,t,e))];case"Floor":return[r.floor(m("x",n,t,e))];case"Log":return[r.log(m("x",n,t,e))];case"Log1p":return[r.log1p(m("x",n,t,e))];case"Imag":return[r.imag(m("x",n,t,e))];case"Neg":return[r.neg(m("x",n,t,e))];case"Reciprocal":return[r.reciprocal(m("x",n,t,e))];case"Real":return[r.real(m("x",n,t,e))];case"Relu":return[r.relu(m("x",n,t,e))];case"Round":return[r.round(m("x",n,t,e))];case"Selu":return[r.selu(m("x",n,t,e))];case"Sigmoid":return[r.sigmoid(m("x",n,t,e))];case"Sin":return[r.sin(m("x",n,t,e))];case"Sign":return[r.sign(m("x",n,t,e))];case"Sinh":return[r.sinh(m("x",n,t,e))];case"Softplus":return[r.softplus(m("x",n,t,e))];case"Sqrt":return[r.sqrt(m("x",n,t,e))];case"Square":return[r.square(m("x",n,t,e))];case"Tanh":return[r.tanh(m("x",n,t,e))];case"Tan":return[r.tan(m("x",n,t,e))];case"ClipByValue":return[r.clipByValue(m("x",n,t,e),m("clipValueMin",n,t,e),m("clipValueMax",n,t,e))];case"Relu6":return[r.relu6(m("x",n,t,e))];case"Rsqrt":return[r.rsqrt(Ot(n.inputNames[0],t,e))];case"Prod":return[r.prod(m("x",n,t,e),m("axes",n,t,e))];case"LeakyRelu":return[r.leakyRelu(m("x",n,t,e),m("alpha",n,t,e))];case"Prelu":return[r.prelu(m("x",n,t,e),m("alpha",n,t,e))];case"IsNan":return[r.isNaN(Ot(n.inputNames[0],t,e))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kt(n,t,e=""){if(!(typeof n=="number"||typeof t=="number")){k(n.length===t.length,()=>e+` Shapes ${n} and ${t} must match`);for(let r=0;r<n.length;r++){const s=n[r],a=t[r];k(s<0||a<0||s===a,()=>e+` Shapes ${n} and ${t} must match`)}}}function Ro(n){return!(typeof n=="number"||n.some(t=>t<0))}function mn(n,t,e){let r=As(n,e);const s=!Ro(r);if(s&&t.length===0)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${r}`);if(s&&t.forEach(a=>{r=As(a.shape,r)}),!Ro(r))throw new Error(`Non-fully-defined elementShape: ${r}`);return r}function As(n,t){if(typeof n=="number")return t;if(typeof t=="number")return n;if(n.length!==t.length)throw new Error(`Incompatible ranks during merge: ${n} vs. ${t}`);const e=[];for(let r=0;r<n.length;++r){const s=n[r],a=t[r];if(s>=0&&a>=0&&s!==a)throw new Error(`Incompatible shape during merge: ${n} vs. ${t}`);e[r]=s>=0?s:a}return e}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Iv{constructor(t,e,r,s,a,o,u){this.name=t,this.dtype=e,this.maxSize=r,this.elementShape=s,this.identicalElementShapes=a,this.dynamicSize=o,this.clearAfterRead=u,this.tensors=[],this.closed_=!1,this.idTensor=at(0),Te(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(t){this.tensors.forEach(e=>{(t==null||!t.has(e.tensor.id))&&e.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||t>=this.size())throw new Error(`Tried to read from index ${t}, but array size is: ${this.size()}`);const e=this.tensors[t];if(e.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${t} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(e.cleared=!0),e.read=!0,e.tensor}readMany(t){return t.map(e=>this.read(e))}write(t,e){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||!this.dynamicSize&&t>=this.maxSize)throw new Error(`Tried to write to index ${t}, but array is not resizeable and size is: ${this.maxSize}`);const r=this.tensors[t]||{};if(e.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t},
          because the value dtype is ${e.dtype}, but TensorArray dtype is ${this.dtype}.`);if(this.size()===0&&(this.elementShape==null||this.elementShape.length===0)&&(this.elementShape=e.shape),Kt(this.elementShape,e.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${t}.`),r.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been read.`);if(r.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been written.`);r.tensor=e,Te(e),r.written=!0,this.tensors[t]=r}writeMany(t,e){if(t.length!==e.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${t.length} is not the same as tensors size: ${e.length}.`);t.forEach((r,s)=>this.write(r,e[s]))}gather(t,e){if(!!e&&e!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${e}`);if(t)t=t.slice(0,this.size());else{t=[];for(let s=0;s<this.size();s++)t.push(s)}if(t.length===0)return ie([],[0].concat(this.elementShape));const r=this.readMany(t);return Kt(this.elementShape,r[0].shape,"TensorArray shape mismatch: "),ge(r,0)}concat(t){if(!!t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${t}`);if(this.size()===0)return ie([],[0].concat(this.elementShape));const e=[];for(let s=0;s<this.size();s++)e.push(s);const r=this.readMany(e);return Kt(this.elementShape,r[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${r[0].shape})`),xt(r,0)}scatter(t,e){if(e.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${e.dtype}`);if(t.length!==e.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${e.shape[0]}`);const r=Math.max(...t);if(!this.dynamicSize&&r>=this.maxSize)throw new Error(`Max index must be < array size (${r}  vs. ${this.maxSize})`);this.writeMany(t,Ue(e,0))}split(t,e){if(e.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${e.dtype}`);let r=0;const s=t.map(l=>(r+=l,r));if(r!==e.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${e.shape}`);if(!this.dynamicSize&&t.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${t.length}), and the TensorArray is not marked as dynamically resizeable`);const a=r===0?0:e.size/r,o=[];St(()=>{e=P(e,[1,r,a]);for(let l=0;l<t.length;++l){const c=l===0?0:s[l-1],f=[0,c,0],p=[1,t[l],a];o[l]=P(Z(e,f,p),this.elementShape)}return o});const u=[];for(let l=0;l<t.length;l++)u[l]=l;this.writeMany(u,o)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Me{constructor(t,e,r,s=-1){this.tensors=t,this.elementShape=e,this.elementDtype=r,t!=null&&t.forEach(a=>{if(r!==a.dtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${a.dtype}`);Kt(e,a.shape,"TensorList shape mismatch: "),Te(a)}),this.idTensor=at(0),this.maxNumElements=s,Te(this.idTensor)}get id(){return this.idTensor.id}copy(){return new Me([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(t){this.tensors.forEach(e=>{(t==null||!t.has(e.id))&&e.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(t,e,r=-1){if(e!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);if(r!==-1&&this.tensors.length!==r)throw new Error(`Operation expected a list with ${r} elements but got a list with ${this.tensors.length} elements.`);Kt(t,this.elementShape,"TensorList shape mismatch: ");const s=mn(this.elementShape,this.tensors,t);return St(()=>{const a=this.tensors.map(o=>P(o,s));return ge(a,0)})}popBack(t,e){if(e!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);if(this.size()===0)throw new Error("Trying to pop from an empty list.");const r=mn(this.elementShape,this.tensors,t),s=this.tensors.pop();return s.kept=!1,Kt(s.shape,t,"TensorList shape mismatch: "),P(s,r)}pushBack(t){if(t.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(Kt(t.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");Te(t),this.tensors.push(t)}resize(t){if(t<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${t}`);if(this.maxNumElements!==-1&&t>this.maxNumElements)throw new Error(`TensorListResize input size ${t} is greater maxNumElement ${this.maxNumElements}.`);const e=new Me([],this.elementShape,this.elementDtype,this.maxNumElements);e.tensors.length=t;for(let r=0;r<Math.min(this.tensors.length,t);++r)e.tensors[r]=this.tensors[r];return e}getItem(t,e,r){if(r!==this.elementDtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${this.elementDtype}`);if(t<0||t>this.tensors.length)throw new Error(`Trying to access element ${t} in a list with ${this.tensors.length} elements.`);if(this.tensors[t]==null)throw new Error(`element at index ${t} is null.`);Kt(this.tensors[t].shape,e,"TensorList shape mismatch: ");const s=mn(this.elementShape,this.tensors,e);return P(this.tensors[t],s)}setItem(t,e){if(e.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if(t<0||this.maxNumElements!==-1&&t>=this.maxNumElements)throw new Error(`Trying to set element ${t} in a list with max ${this.maxNumElements} elements.`);Kt(this.elementShape,e.shape,"TensorList shape mismatch: "),Te(e),this.tensors[t]!=null&&(this.tensors[t].kept=!1),this.tensors[t]=e}gather(t,e,r){if(e!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);Kt(this.elementShape,r,"TensorList shape mismatch: "),t=t.slice(0,this.size());const s=mn(this.elementShape,this.tensors,r);return t.length===0?ie([],[0].concat(s)):St(()=>{const a=t.map(o=>P(this.tensors[o],s));return ge(a,0)})}concat(t,e){if(!!t&&t!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${t}`);Kt(this.elementShape,e,"TensorList shape mismatch: ");const r=mn(this.elementShape,this.tensors,e);return this.size()===0?ie([],[0].concat(r)):St(()=>{const s=this.tensors.map(a=>P(a,r));return xt(s,0)})}}function Av(n,t,e){const r=n.dtype;if(n.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${n.shape}`);if(n.dtype!==e)throw new Error(`Invalid data types; op elements ${n.dtype}, but list elements ${e}`);const s=n.shape.slice(1);Kt(s,t,"TensorList shape mismatch: ");const a=Ue(n);return new Me(a,t,r)}function Ov(n,t,e,r){return new Me([],n,t,r)}function Dv(n,t,e,r){if(t.length!==n.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${n.shape[0]}`);const s=Math.max(...t);if(r!=null&&r!==-1&&s>=r)throw new Error(`Max index must be < array size (${s}  vs. ${r})`);const a=new Me([],e,n.dtype,r),o=Ue(n,0);return t.forEach((u,l)=>{a.setItem(u,o[l])}),a}function Cv(n,t,e){let r=0;const s=t.map(f=>(r+=f,r));if(r!==n.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${n.shape}`);const a=n.shape.slice(1),o=As(a,e),u=r===0?0:n.size/r,l=St(()=>{const f=[];n=P(n,[1,r,u]);for(let p=0;p<t.length;++p){const y=p===0?0:s[p-1],b=[0,y,0],v=[1,t[p],u];f[p]=P(Z(n,b,v),o)}return n.dispose(),f}),c=new Me([],e,n.dtype,t.length);for(let f=0;f<l.length;f++)c.setItem(f,l[f]);return c}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fv=async(n,t,e)=>{switch(n.op){case"If":case"StatelessIf":{const r=m("thenBranch",n,t,e),s=m("elseBranch",n,t,e),a=m("cond",n,t,e),o=m("args",n,t,e);return(await a.data())[0]?e.functionMap[r].executeFunctionAsync(o,e.tensorArrayMap,e.tensorListMap):e.functionMap[s].executeFunctionAsync(o,e.tensorArrayMap,e.tensorListMap)}case"While":case"StatelessWhile":{const r=m("body",n,t,e),s=m("cond",n,t,e),a=m("args",n,t,e),o=await e.functionMap[s].executeFunctionAsync(a,e.tensorArrayMap,e.tensorListMap),u=a.map(f=>f.id);let l=await o[0].data();o.forEach(f=>{!f.kept&&u.indexOf(f.id)===-1&&f.dispose()});let c=a;for(;l[0];){const f=c;c=await e.functionMap[r].executeFunctionAsync(c,e.tensorArrayMap,e.tensorListMap);const p=c.map(b=>b.id);f.forEach(b=>{!b.kept&&u.indexOf(b.id)===-1&&p.indexOf(b.id)===-1&&b.dispose()});const y=await e.functionMap[s].executeFunctionAsync(c,e.tensorArrayMap,e.tensorListMap);l=await y[0].data(),y.forEach(b=>{!b.kept&&u.indexOf(b.id)===-1&&p.indexOf(b.id)===-1&&b.dispose()})}return c}case"LoopCond":{const r=m("pred",n,t,e);return[he(r)]}case"Switch":{const r=m("pred",n,t,e);let s=m("data",n,t,e);return s.kept||(s=he(s)),(await r.data())[0]?[void 0,s]:[s,void 0]}case"Merge":{const r=n.inputNames.find(s=>Ot(s,t,e)!==void 0);if(r){const s=Ot(r,t,e);return[he(s)]}return}case"Enter":{const r=m("frameName",n,t,e),s=m("tensor",n,t,e);return e.enterFrame(r),[he(s)]}case"Exit":{const r=m("tensor",n,t,e);return e.exitFrame(),[he(r)]}case"NextIteration":{const r=m("tensor",n,t,e);return e.nextIteration(),[he(r)]}case"TensorArrayV3":{const r=m("size",n,t,e),s=m("dtype",n,t,e),a=m("elementShape",n,t,e),o=m("dynamicSize",n,t,e),u=m("clearAfterRead",n,t,e),l=m("identicalElementShapes",n,t,e),c=m("name",n,t,e),f=new Iv(c,s,r,a,l,o,u);return e.addTensorArray(f),[f.idTensor,at(1)]}case"TensorArrayWriteV3":{const r=m("tensorArrayId",n,t,e),s=m("index",n,t,e),a=m("tensor",n,t,e),o=e.getTensorArray(r.id);return o.write(s,a),[o.idTensor]}case"TensorArrayReadV3":{const r=m("tensorArrayId",n,t,e),s=m("index",n,t,e);return[e.getTensorArray(r.id).read(s)]}case"TensorArrayGatherV3":{const r=m("tensorArrayId",n,t,e),s=m("indices",n,t,e),a=m("dtype",n,t,e);return[e.getTensorArray(r.id).gather(s,a)]}case"TensorArrayScatterV3":{const r=m("tensorArrayId",n,t,e),s=m("indices",n,t,e),a=m("tensor",n,t,e),o=e.getTensorArray(r.id);return o.scatter(s,a),[o.idTensor]}case"TensorArrayConcatV3":{const r=m("tensorArrayId",n,t,e),s=e.getTensorArray(r.id),a=m("dtype",n,t,e);return[s.concat(a)]}case"TensorArraySplitV3":{const r=m("tensorArrayId",n,t,e),s=m("tensor",n,t,e),a=m("lengths",n,t,e),o=e.getTensorArray(r.id);return o.split(a,s),[o.idTensor]}case"TensorArraySizeV3":{const r=m("tensorArrayId",n,t,e),s=e.getTensorArray(r.id);return[at(s.size(),"int32")]}case"TensorArrayCloseV3":{const r=m("tensorArrayId",n,t,e),s=e.getTensorArray(r.id);return s.clearAndClose(),[s.idTensor]}case"TensorListSetItem":{const r=m("tensorListId",n,t,e),s=m("index",n,t,e),a=m("tensor",n,t,e),o=e.getTensorList(r.id);return o.setItem(s,a),[o.idTensor]}case"TensorListGetItem":{const r=m("tensorListId",n,t,e),s=m("index",n,t,e),a=m("elementShape",n,t,e),o=m("elementDType",n,t,e);return[e.getTensorList(r.id).getItem(s,a,o)]}case"TensorListScatterV2":case"TensorListScatter":{const r=m("indices",n,t,e),s=m("tensor",n,t,e),a=m("elementShape",n,t,e),o=m("numElements",n,t,e),u=Dv(s,r,a,o);return e.addTensorList(u),[u.idTensor]}case"TensorListReserve":case"EmptyTensorList":{const r=m("elementShape",n,t,e),s=m("elementDType",n,t,e);let a;n.op==="TensorListReserve"?a="numElements":a="maxNumElements";const o=m(a,n,t,e),u=n.op==="TensorListReserve"?-1:o,l=Ov(r,s,o,u);return e.addTensorList(l),[l.idTensor]}case"TensorListGather":{const r=m("tensorListId",n,t,e),s=m("indices",n,t,e),a=m("elementShape",n,t,e),o=m("elementDType",n,t,e);return[e.getTensorList(r.id).gather(s,o,a)]}case"TensorListStack":{const r=m("tensorListId",n,t,e),s=m("elementShape",n,t,e),a=m("elementDType",n,t,e),o=m("numElements",n,t,e);return[e.getTensorList(r.id).stack(s,a,o)]}case"TensorListFromTensor":{const r=m("tensor",n,t,e),s=m("elementShape",n,t,e),a=m("elementDType",n,t,e),o=Av(r,s,a);return e.addTensorList(o),[o.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{const r=m("tensorListId",n,t,e),s=e.getTensorList(r.id),a=m("dtype",n,t,e),o=m("elementShape",n,t,e);return[s.concat(a,o)]}case"TensorListPushBack":{const r=m("tensorListId",n,t,e),s=m("tensor",n,t,e),a=e.getTensorList(r.id);return a.pushBack(s),[a.idTensor]}case"TensorListPopBack":{const r=m("tensorListId",n,t,e),s=m("elementShape",n,t,e),a=m("elementDType",n,t,e);return[e.getTensorList(r.id).popBack(s,a)]}case"TensorListSplit":{const r=m("tensor",n,t,e),s=m("elementShape",n,t,e),a=m("lengths",n,t,e),o=Cv(r,a,s);return e.addTensorList(o),[o.idTensor]}case"TensorListLength":{const r=m("tensorListId",n,t,e),s=e.getTensorList(r.id);return[at(s.size(),"int32")]}case"TensorListResize":{const r=m("tensorListId",n,t,e),s=m("size",n,t,e),o=e.getTensorList(r.id).resize(s);return e.addTensorList(o),[o.idTensor]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bo(n,t,e){const[r,s]=m("fusedOps",n,t,e),a=r==="biasadd",o=!a,u=s==="prelu",l=r==="fusedbatchnorm",c=m("numArgs",n,t,e);if(a){if(u&&c!==2)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!u&&a&&c!==1)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(l)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");const f=m("strides",n,t,e),p=Wn(n,t,e),y=m("dataFormat",n,t,e).toUpperCase(),b=m("dilations",n,t,e);let[v,x]=m("args",n,t,e);o&&(x=v,v=void 0);const E=m("leakyreluAlpha",n,t,e);return{stride:f,pad:p,dataFormat:y,dilations:b,biasArg:v,preluArg:x,activationFunc:s,leakyreluAlpha:E}}const Pv=(n,t,e,r=_t)=>{switch(n.op){case"Conv1D":{const s=m("stride",n,t,e),a=m("pad",n,t,e),o=m("dataFormat",n,t,e).toUpperCase(),u=m("dilation",n,t,e);return[r.conv1d(m("x",n,t,e),m("filter",n,t,e),s,a,o,u)]}case"Conv2D":{const s=m("strides",n,t,e),a=Wn(n,t,e),o=m("dataFormat",n,t,e).toUpperCase(),u=m("dilations",n,t,e);return[r.conv2d(m("x",n,t,e),m("filter",n,t,e),[s[1],s[2]],a,o,[u[1],u[2]])]}case"_FusedConv2D":{const{stride:s,pad:a,dataFormat:o,dilations:u,biasArg:l,preluArg:c,activationFunc:f,leakyreluAlpha:p}=Bo(n,t,e);return[r.fused.conv2d({x:m("x",n,t,e),filter:m("filter",n,t,e),strides:[s[1],s[2]],pad:a,dataFormat:o,dilations:[u[1],u[2]],bias:l,activation:f,preluActivationWeights:c,leakyreluAlpha:p})]}case"FusedDepthwiseConv2dNative":{const{stride:s,pad:a,dataFormat:o,dilations:u,biasArg:l,preluArg:c,activationFunc:f,leakyreluAlpha:p}=Bo(n,t,e);return[r.fused.depthwiseConv2d({x:m("x",n,t,e),filter:m("filter",n,t,e),strides:[s[1],s[2]],pad:a,dataFormat:o,dilations:[u[1],u[2]],bias:l,activation:f,preluActivationWeights:c,leakyreluAlpha:p})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const s=m("outputShape",n,t,e),a=m("strides",n,t,e),o=Wn(n,t,e);return[r.conv2dTranspose(m("x",n,t,e),m("filter",n,t,e),s,[a[1],a[2]],o)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const s=m("strides",n,t,e),a=Wn(n,t,e),o=m("dilations",n,t,e),u=m("dataFormat",n,t,e).toUpperCase();return[r.depthwiseConv2d(m("input",n,t,e),m("filter",n,t,e),[s[1],s[2]],a,u,[o[1],o[2]])]}case"Conv3D":{const s=m("strides",n,t,e),a=m("pad",n,t,e),o=m("dataFormat",n,t,e).toUpperCase(),u=m("dilations",n,t,e);return[r.conv3d(m("x",n,t,e),m("filter",n,t,e),[s[1],s[2],s[3]],a,o,[u[1],u[2],u[3]])]}case"AvgPool":{const s=m("strides",n,t,e),a=m("pad",n,t,e),o=m("kernelSize",n,t,e);return[r.avgPool(m("x",n,t,e),[o[1],o[2]],[s[1],s[2]],a)]}case"MaxPool":{const s=m("strides",n,t,e),a=m("pad",n,t,e),o=m("kernelSize",n,t,e);return[r.maxPool(m("x",n,t,e),[o[1],o[2]],[s[1],s[2]],a)]}case"MaxPoolWithArgmax":{const s=m("strides",n,t,e),a=m("pad",n,t,e),o=m("kernelSize",n,t,e),u=m("includeBatchInIndex",n,t,e),{result:l,indexes:c}=r.maxPoolWithArgmax(m("x",n,t,e),[o[1],o[2]],[s[1],s[2]],a,u);return[l,c]}case"AvgPool3D":{const s=m("strides",n,t,e),a=m("pad",n,t,e),o=m("kernelSize",n,t,e);return[r.avgPool3d(m("x",n,t,e),[o[1],o[2],o[3]],[s[1],s[2],s[3]],a)]}case"MaxPool3D":{const s=m("strides",n,t,e),a=m("pad",n,t,e),o=m("kernelSize",n,t,e);return[r.maxPool3d(m("x",n,t,e),[o[1],o[2],o[3]],[s[1],s[2],s[3]],a)]}case"Dilation2D":{const s=m("strides",n,t,e),a=m("pad",n,t,e),o=m("dilations",n,t,e),u=s[1],l=s[2],c=o[1],f=o[2];return[r.dilation2d(m("x",n,t,e),m("filter",n,t,e),[u,l],a,[c,f],"NHWC")]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Lv=(n,t,e,r=_t)=>{switch(n.op){case"Fill":{const s=m("shape",n,t,e),a=m("dtype",n,t,e),o=m("value",n,t,e);return[r.fill(s,o,a)]}case"LinSpace":{const s=m("start",n,t,e),a=m("stop",n,t,e),o=m("num",n,t,e);return[r.linspace(s,a,o)]}case"Multinomial":{const s=m("logits",n,t,e),a=m("numSamples",n,t,e),o=m("seed",n,t,e);return[r.multinomial(s,a,o)]}case"OneHot":{const s=m("indices",n,t,e),a=m("depth",n,t,e),o=m("onValue",n,t,e),u=m("offValue",n,t,e),l=m("dtype",n,t,e);return[r.oneHot(s,a,o,u,l)]}case"Ones":return[r.ones(m("shape",n,t,e),m("dtype",n,t,e))];case"OnesLike":return[r.onesLike(m("x",n,t,e))];case"RandomStandardNormal":return[r.randomStandardNormal(m("shape",n,t,e),m("dtype",n,t,e),m("seed",n,t,e))];case"RandomUniform":return[r.randomUniform(m("shape",n,t,e),m("minval",n,t,e),m("maxval",n,t,e),m("dtype",n,t,e))];case"Range":{const s=m("start",n,t,e),a=m("stop",n,t,e),o=m("step",n,t,e);return[r.range(s,a,o,m("dtype",n,t,e))]}case"TruncatedNormal":{const s=m("shape",n,t,e),a=m("mean",n,t,e),o=m("stdDev",n,t,e),u=m("seed",n,t,e);return[r.truncatedNormal(s,a,o,m("dtype",n,t,e),u)]}case"Zeros":return[r.zeros(m("shape",n,t,e),m("dtype",n,t,e))];case"ZerosLike":return[r.zerosLike(m("x",n,t,e))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xr(n,t,e){const r=m("boxes",n,t,e),s=m("scores",n,t,e),a=m("maxOutputSize",n,t,e),o=m("iouThreshold",n,t,e),u=m("scoreThreshold",n,t,e),l=m("softNmsSigma",n,t,e);return{boxes:r,scores:s,maxOutputSize:a,iouThreshold:o,scoreThreshold:u,softNmsSigma:l}}const Rv=async(n,t,e,r,s=_t)=>{switch(n.op){case"NonMaxSuppressionV5":{const{boxes:a,scores:o,maxOutputSize:u,iouThreshold:l,scoreThreshold:c,softNmsSigma:f}=Xr(n,t,e),p=await s.image.nonMaxSuppressionWithScoreAsync(a,o,u,l,c,f);return[p.selectedIndices,p.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:a,scores:o,maxOutputSize:u,iouThreshold:l,scoreThreshold:c}=Xr(n,t,e),f=m("padToMaxOutputSize",n,t,e),p=await s.image.nonMaxSuppressionPaddedAsync(a,o,u,l,c,f);return[p.selectedIndices,p.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:a,scores:o,maxOutputSize:u,iouThreshold:l,scoreThreshold:c}=Xr(n,t,e);return[await s.image.nonMaxSuppressionAsync(a,o,u,l,c)]}case"Where":{const a=s.cast(m("condition",n,t,e),"bool"),o=[await s.whereAsync(a)];return a.dispose(),o}case"ListDiff":return s.setdiff1dAsync(m("x",n,t,e),m("y",n,t,e));default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bv=(n,t,e,r=_t)=>{switch(n.op){case"LowerBound":{const s=m("sortedSequence",n,t,e),a=m("values",n,t,e);return[r.lowerBound(s,a)]}case"TopKV2":{const s=m("x",n,t,e),a=m("k",n,t,e),o=m("sorted",n,t,e),u=r.topk(s,a,o);return[u.values,u.indices]}case"UpperBound":{const s=m("sortedSequence",n,t,e),a=m("values",n,t,e);return[r.upperBound(s,a)]}case"Unique":{const s=m("x",n,t,e),a=r.unique(s);return[a.values,a.indices]}case"UniqueV2":{const s=m("x",n,t,e),a=m("axis",n,t,e),o=r.unique(s,a);return[o.values,o.indices]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zv=(n,t,e,r=_t)=>{switch(n.op){case"Const":return t[n.name];case"PlaceholderWithDefault":const s=m("default",n,t,e);return[Ot(n.name,t,e)||s];case"Placeholder":return[Ot(n.name,t,e)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{const f=m("x",n,t,e);return[he(f)]}case"IdentityN":return m("x",n,t,e).map(f=>he(f));case"Snapshot":const a=m("x",n,t,e);return[he(a)];case"Shape":return[r.tensor1d(m("x",n,t,e).shape,"int32")];case"ShapeN":return m("x",n,t,e).map(f=>r.tensor1d(f.shape));case"Size":return[r.scalar(m("x",n,t,e).size,"int32")];case"Rank":return[r.scalar(m("x",n,t,e).rank,"int32")];case"NoOp":return[r.scalar(1)];case"Print":const o=m("x",n,t,e),u=m("data",n,t,e),l=m("message",n,t,e),c=m("summarize",n,t,e);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(l);for(let f=0;f<u.length;f++)console.log(Array.prototype.slice.call(u[f].dataSync()).slice(0,c));return[o];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Vv{constructor(t,e){this.keyDType=t,this.valueDType=e,this.handle=at(0),this.tensorMap=new Map,Te(this.handle)}get id(){return this.handle.id}clearAndClose(){this.tensorMap.forEach(t=>t.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return at(this.size(),"int32")}async import(t,e){this.checkKeyAndValueTensor(t,e);const r=await t.data();return this.tensorMap.forEach(s=>s.dispose()),this.tensorMap.clear(),St(()=>{const s=Ue(e),a=r.length,o=s.length;k(a===o,()=>`The number of elements doesn't match, keys has ${a} elements, the values has ${o} elements.`);for(let u=0;u<a;u++){const l=r[u],c=s[u];Te(c),this.tensorMap.set(l,c)}return this.handle})}async find(t,e){this.checkKeyAndValueTensor(t,e);const r=await t.data();return St(()=>{const s=[];for(let a=0;a<r.length;a++){const o=r[a],u=this.findWithDefault(o,e);s.push(u)}return ge(s)})}findWithDefault(t,e){const r=this.tensorMap.get(t);return r!=null?r:e}checkKeyAndValueTensor(t,e){if(t.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${t.dtype}`);if(e.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${e.dtype}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jv=async(n,t,e,r)=>{switch(n.op){case"HashTable":case"HashTableV2":{const s=m("keyDType",n,t,e),a=m("valueDType",n,t,e),o=new Vv(s,a);return r.addHashTable(n.name,o),[o.handle]}case"LookupTableImport":case"LookupTableImportV2":{const s=m("tableHandle",n,t,e,r),a=m("keys",n,t,e),o=m("values",n,t,e);return[await r.getHashTableById(s.id).import(a,o)]}case"LookupTableFind":case"LookupTableFindV2":{const s=m("tableHandle",n,t,e,r),a=m("keys",n,t,e),o=m("defaultValue",n,t,e);return[await r.getHashTableById(s.id).find(a,o)]}case"LookupTableSize":case"LookupTableSizeV2":{const s=m("tableHandle",n,t,e,r);return[r.getHashTableById(s.id).tensorSize()]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Mv=(n,t,e,r=_t)=>{switch(n.op){case"ResizeBilinear":{const s=m("images",n,t,e),a=m("size",n,t,e),o=m("alignCorners",n,t,e),u=m("halfPixelCenters",n,t,e);return[r.image.resizeBilinear(s,[a[0],a[1]],o,u)]}case"ResizeNearestNeighbor":{const s=m("images",n,t,e),a=m("size",n,t,e),o=m("alignCorners",n,t,e),u=m("halfPixelCenters",n,t,e);return[r.image.resizeNearestNeighbor(s,[a[0],a[1]],o,u)]}case"CropAndResize":{const s=m("image",n,t,e),a=m("boxes",n,t,e),o=m("boxInd",n,t,e),u=m("cropSize",n,t,e),l=m("method",n,t,e),c=m("extrapolationValue",n,t,e);return[r.image.cropAndResize(s,a,o,u,l,c)]}case"ImageProjectiveTransformV3":{const s=m("images",n,t,e),a=m("transforms",n,t,e),o=m("outputShape",n,t,e),u=m("fillValue",n,t,e),l=m("interpolation",n,t,e),c=m("fillMode",n,t,e);return[r.image.transform(s,a,l.toLowerCase(),c.toLowerCase(),u,o)]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hv=(n,t,e,r=_t)=>{switch(n.op){case"Equal":return[r.equal(m("a",n,t,e),m("b",n,t,e))];case"NotEqual":return[r.notEqual(m("a",n,t,e),m("b",n,t,e))];case"Greater":return[r.greater(m("a",n,t,e),m("b",n,t,e))];case"GreaterEqual":return[r.greaterEqual(m("a",n,t,e),m("b",n,t,e))];case"Less":return[r.less(m("a",n,t,e),m("b",n,t,e))];case"LessEqual":return[r.lessEqual(m("a",n,t,e),m("b",n,t,e))];case"LogicalAnd":return[r.logicalAnd(m("a",n,t,e),m("b",n,t,e))];case"LogicalNot":return[r.logicalNot(m("a",n,t,e))];case"LogicalOr":return[r.logicalOr(m("a",n,t,e),m("b",n,t,e))];case"Select":case"SelectV2":return[r.where(m("condition",n,t,e),m("a",n,t,e),m("b",n,t,e))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Uv=(n,t,e,r=_t)=>{switch(n.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[r.matMul(m("a",n,t,e),m("b",n,t,e),m("transposeA",n,t,e),m("transposeB",n,t,e))];case"Einsum":return[r.einsum(m("equation",n,t,e),...m("tensors",n,t,e))];case"Transpose":return[r.transpose(m("x",n,t,e),m("perm",n,t,e))];case"_FusedMatMul":const[s,a]=m("fusedOps",n,t,e),o=s==="biasadd",u=a==="prelu",l=m("numArgs",n,t,e),c=m("leakyreluAlpha",n,t,e);if(o){if(u&&l!==2)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!u&&l!==1)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[f,p]=m("args",n,t,e);return[r.fused.matMul({a:m("a",n,t,e),b:m("b",n,t,e),transposeA:m("transposeA",n,t,e),transposeB:m("transposeB",n,t,e),bias:f,activation:a,preluActivationWeights:p,leakyreluAlpha:c})];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kv=(n,t,e,r=_t)=>{switch(n.op){case"EuclideanNorm":return[r.euclideanNorm(m("x",n,t,e),m("axis",n,t,e),m("keepDims",n,t,e))];case"FusedBatchNorm":case"FusedBatchNormV2":return[r.batchNorm(m("x",n,t,e),m("mean",n,t,e),m("variance",n,t,e),m("offset",n,t,e),m("scale",n,t,e),m("epsilon",n,t,e))];case"FusedBatchNormV3":return[r.batchNorm(m("x",n,t,e),m("mean",n,t,e),m("variance",n,t,e),m("offset",n,t,e),m("scale",n,t,e),m("epsilon",n,t,e))];case"LRN":return[r.localResponseNormalization(m("x",n,t,e),m("radius",n,t,e),m("bias",n,t,e),m("alpha",n,t,e),m("beta",n,t,e))];case"Softmax":return[r.softmax(m("x",n,t,e))];case"LogSoftmax":return[r.logSoftmax(m("x",n,t,e))];case"SparseToDense":return[r.sparseToDense(m("sparseIndices",n,t,e),m("outputShape",n,t,e),m("sparseValues",n,t,e),m("defaultValue",n,t,e))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wv=(n,t,e,r=_t)=>{switch(n.op){case"Max":{const u=m("axis",n,t,e),l=m("keepDims",n,t,e);return[r.max(m("x",n,t,e),u,l)]}case"Mean":{const u=m("axis",n,t,e),l=m("keepDims",n,t,e);return[r.mean(m("x",n,t,e),u,l)]}case"Min":{const u=m("axis",n,t,e),l=m("keepDims",n,t,e);return[r.min(m("x",n,t,e),u,l)]}case"Sum":{const u=m("axis",n,t,e),l=m("keepDims",n,t,e);return[r.sum(m("x",n,t,e),u,l)]}case"All":{const u=m("axis",n,t,e),l=m("keepDims",n,t,e);return[r.all(m("x",n,t,e),u,l)]}case"Any":{const u=m("axis",n,t,e),l=m("keepDims",n,t,e);return[r.any(m("x",n,t,e),u,l)]}case"ArgMax":{const u=m("axis",n,t,e);return[r.argMax(m("x",n,t,e),u)]}case"ArgMin":{const u=m("axis",n,t,e);return[r.argMin(m("x",n,t,e),u)]}case"Prod":{const u=m("axis",n,t,e),l=m("keepDims",n,t,e);return[r.prod(m("x",n,t,e),u,l)]}case"Cumprod":{const u=m("axis",n,t,e),l=m("exclusive",n,t,e),c=m("reverse",n,t,e);return[r.cumprod(m("x",n,t,e),u,l,c)]}case"Cumsum":{const u=m("axis",n,t,e),l=m("exclusive",n,t,e),c=m("reverse",n,t,e);return[r.cumsum(m("x",n,t,e),u,l,c)]}case"Bincount":const s=m("x",n,t,e),a=m("weights",n,t,e),o=m("size",n,t,e);return[r.bincount(s,a,o)];case"DenseBincount":{const u=m("x",n,t,e),l=m("weights",n,t,e),c=m("size",n,t,e),f=m("binaryOutput",n,t,e);return[r.denseBincount(u,l,c,f)]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qv=(n,t,e,r=_t)=>{switch(n.op){case"ConcatV2":case"Concat":{const s=m("n",n,t,e),a=m("axis",n,t,e);let o=m("tensors",n,t,e);return o=o.slice(0,s),[r.concat(o,a)]}case"Gather":{const s=m("x",n,t,e),a=m("indices",n,t,e);return[r.gather(s,r.cast(a,"int32"),0)]}case"GatherV2":{const s=m("axis",n,t,e),a=m("batchDims",n,t,e),o=m("x",n,t,e),u=m("indices",n,t,e);return[r.gather(o,r.cast(u,"int32"),s,a)]}case"Reverse":{const s=m("dims",n,t,e),a=[];for(let u=0;u<s.length;u++)s[u]&&a.push(u);const o=m("x",n,t,e);return[r.reverse(o,a)]}case"ReverseV2":{const s=m("axis",n,t,e),a=m("x",n,t,e);return[r.reverse(a,s)]}case"Slice":{const s=m("begin",n,t,e),a=m("size",n,t,e);return[r.slice(m("x",n,t,e),s,a)]}case"StridedSlice":{const s=m("begin",n,t,e),a=m("end",n,t,e),o=m("strides",n,t,e),u=m("beginMask",n,t,e),l=m("endMask",n,t,e),c=m("ellipsisMask",n,t,e),f=m("newAxisMask",n,t,e),p=m("shrinkAxisMask",n,t,e),y=m("x",n,t,e);return[r.stridedSlice(y,s,a,o,u,l,c,f,p)]}case"Pack":return St(()=>{const s=m("axis",n,t,e),a=m("tensors",n,t,e),o=a[0].shape,u=r.squeeze(a[0]).shape,l=a.map(c=>{const f=xe(c.shape,o);if(!f&&!xe(r.squeeze(c).shape,u))throw new Error("the input tensors shape does not match");return f?c:r.reshape(c,o)});return[r.stack(l,s)]});case"Unpack":{const s=m("axis",n,t,e),a=m("tensor",n,t,e);return r.unstack(a,s)}case"Tile":{const s=m("reps",n,t,e);return[r.tile(m("x",n,t,e),s)]}case"Split":case"SplitV":{const s=m("axis",n,t,e),a=m("numOrSizeSplits",n,t,e),o=m("x",n,t,e);return r.split(o,a,s)}case"ScatterNd":{const s=m("indices",n,t,e),a=m("values",n,t,e),o=m("shape",n,t,e);return[r.scatterND(s,a,o)]}case"GatherNd":{const s=m("x",n,t,e),a=m("indices",n,t,e);return[r.gatherND(s,a)]}case"SparseToDense":{const s=m("sparseIndices",n,t,e),a=m("outputShape",n,t,e),o=m("sparseValues",n,t,e),u=m("defaultValue",n,t,e);return[r.sparseToDense(s,o,a,o.dtype===u.dtype?u:r.cast(u,o.dtype))]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gv=(n,t,e,r=_t)=>{switch(n.op){case"SparseFillEmptyRows":{const{outputIndices:s,outputValues:a,emptyRowIndicator:o,reverseIndexMap:u}=r.sparse.sparseFillEmptyRows(m("indices",n,t,e),m("values",n,t,e),m("denseShape",n,t,e),m("defaultValue",n,t,e));return[s,a,o,u]}case"SparseReshape":{const{outputIndices:s,outputShape:a}=r.sparse.sparseReshape(m("inputIndices",n,t,e),m("inputShape",n,t,e),m("newShape",n,t,e));return[s,a]}case"SparseSegmentMean":return[r.sparse.sparseSegmentMean(m("data",n,t,e),m("indices",n,t,e),m("segmentIds",n,t,e))];case"SparseSegmentSum":return[r.sparse.sparseSegmentSum(m("data",n,t,e),m("indices",n,t,e),m("segmentIds",n,t,e))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xv=(n,t,e,r=_t)=>{switch(n.op){case"FFT":return[r.fft(m("x",n,t,e))];case"IFFT":return[r.ifft(m("x",n,t,e))];case"RFFT":return[r.rfft(m("x",n,t,e))];case"IRFFT":return[r.irfft(m("x",n,t,e))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yv=(n,t,e,r=_t)=>{switch(n.op){case"StringNGrams":{const{nGrams:s,nGramsSplits:a}=r.string.stringNGrams(m("data",n,t,e),m("dataSplits",n,t,e),m("separator",n,t,e),m("nGramWidths",n,t,e),m("leftPad",n,t,e),m("rightPad",n,t,e),m("padWidth",n,t,e),m("preserveShortSequences",n,t,e));return[s,a]}case"StringSplit":{const{indices:s,values:a,shape:o}=r.string.stringSplit(m("input",n,t,e),m("delimiter",n,t,e),m("skipEmpty",n,t,e));return[s,a,o]}case"StringToHashBucketFast":return[r.string.stringToHashBucketFast(m("input",n,t,e),m("numBuckets",n,t,e))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jv=(n,t,e,r=_t)=>{switch(n.op){case"Cast":return[r.cast(m("x",n,t,e),m("dtype",n,t,e))];case"ExpandDims":{const s=m("axis",n,t,e);return[r.expandDims(m("x",n,t,e),s)]}case"Squeeze":{const s=m("axis",n,t,e);return[r.squeeze(m("x",n,t,e),s)]}case"Reshape":return[r.reshape(m("x",n,t,e),m("shape",n,t,e))];case"MirrorPad":return[r.mirrorPad(m("x",n,t,e),m("padding",n,t,e),m("mode",n,t,e))];case"PadV2":case"Pad":return[r.pad(m("x",n,t,e),m("padding",n,t,e),m("constantValue",n,t,e))];case"SpaceToBatchND":{const s=m("blockShape",n,t,e),a=m("paddings",n,t,e);return[r.spaceToBatchND(m("x",n,t,e),s,a)]}case"BatchToSpaceND":{const s=m("blockShape",n,t,e),a=m("crops",n,t,e);return[r.batchToSpaceND(m("x",n,t,e),s,a)]}case"DepthToSpace":{const s=m("blockSize",n,t,e),a=m("dataFormat",n,t,e).toUpperCase();return[r.depthToSpace(m("x",n,t,e),s,a)]}case"BroadcastTo":return[r.broadcastTo(m("x",n,t,e),m("shape",n,t,e))];case"BroadcastArgs":return[r.broadcastArgs(m("s0",n,t,e),m("s1",n,t,e))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zo(n,t,e,r,s=St){const a=((o,u,l)=>{switch(o.category){case"arithmetic":return s(()=>_v(o,u,l));case"basic_math":return s(()=>$v(o,u,l));case"control":return Fv(o,u,l);case"convolution":return s(()=>Pv(o,u,l));case"creation":return s(()=>Lv(o,u,l));case"dynamic":return Rv(o,u,l);case"evaluation":return s(()=>Bv(o,u,l));case"image":return s(()=>Mv(o,u,l));case"graph":return s(()=>zv(o,u,l));case"logical":return s(()=>Hv(o,u,l));case"matrices":return s(()=>Uv(o,u,l));case"normalization":return s(()=>Kv(o,u,l));case"reduction":return s(()=>Wv(o,u,l));case"slice_join":return s(()=>qv(o,u,l));case"sparse":return s(()=>Gv(o,u,l));case"spectral":return s(()=>Xv(o,u,l));case"string":return s(()=>Yv(o,u,l));case"transformation":return s(()=>Jv(o,u,l));case"hash_table":return jv(o,u,l,r);case"custom":const c=Nu(o.op);if(c&&c.customExecutor)return c.customExecutor(new Ev(o,u,l));throw TypeError(`Custom op ${o.op} is not registered.`);default:throw TypeError(`Unknown op '${o.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(n,t,e);return Ze(a)?a.then(o=>[].concat(o)):[].concat(a)}class Vo{constructor(t={},e={},r={},s={}){this.weightMap=t,this.tensorArrayMap=e,this.tensorListMap=r,this.functionMap=s,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(t,e){return{id:t,frameName:e,iterationId:0}}set currentContext(t){this.contexts!==t&&(this.contexts=t,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){const t=[];for(let e=0;e<this.contexts.length-1;e++){const r=this.contexts.slice(0,this.contexts.length-e);t.push(this.contextIdforContexts(r))}t.push(""),this._currentContextIds=t}contextIdforContexts(t){return t?t.map(e=>e.id===0&&e.iterationId===0?"":`${e.frameName}-${e.iterationId}`).join("/"):""}enterFrame(t){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,t)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw new Error("Cannot exit frame, the context is empty")}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;const t=Object.assign({},this.contexts[this.contexts.length-1]);t.iterationId+=1,t.id=this.lastId,this.contexts.splice(-1,1,t),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw new Error("Cannot increase frame iteration, the context is empty")}getWeight(t){return this.weightMap[t]}addTensorArray(t){this.tensorArrayMap[t.id]=t}getTensorArray(t){return this.tensorArrayMap[t]}addTensorList(t){this.tensorListMap[t.id]=t}getTensorList(t){return this.tensorListMap[t]}dispose(t){for(const e in this.tensorArrayMap)this.tensorArrayMap[e].clearAndClose(t);for(const e in this.tensorListMap)this.tensorListMap[e].clearAndClose(t)}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jo(n,t,e,r){const s=new Set,a=[];let o=null,u=null;const l=new Set,c=Object.keys(n).map(y=>zt(y)[0]);let f=[];r!=null&&(f=r.map(y=>zt(y.name)[0]));const p=[...t];for(;p.length>0;){const y=p.pop();if((xu(y)||nN(y)||rN(y))&&o==null&&(o=y,u=o.children.map(b=>b.name).filter(b=>s.has(b))),s.add(y.name),e[y.name]==null&&c.indexOf(y.name)===-1&&f.indexOf(y.name)===-1){if(y.inputs.length===0){a.push(y.name);continue}y.inputs.forEach(b=>{l.has(b.name)||(l.add(b.name),p.push(b))})}}return{inputs:n,outputs:t,usedNodes:s,missingInputs:a,dynamicNode:o,syncInputs:u}}function Zv(n,t,e){const{usedNodes:r,inputs:s}=e,a=[],o=Object.keys(s).map(f=>zt(f)[0]).map(f=>n.nodes[f]),u=n.initNodes;o.forEach(f=>{r.has(f.name)&&a.push(f)}),n.weights.forEach(f=>{r.has(f.name)&&a.push(f)}),u!=null&&u.forEach(f=>{r.has(f.name)&&a.push(f)});const l=new Set,c=[];for(;a.length>0;){const f=a.pop();l.add(f.name),t[f.name]||c.push(f),f.children.forEach(p=>{!l.has(p.name)&&r.has(p.name)&&p.inputs.every(y=>l.has(y.name))&&a.push(p)})}return c}const Qv=["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"],tN=["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"],eN=["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"];function xu(n){return Qv.indexOf(n.op)>=0}function nN(n){return tN.indexOf(n.op)>=0}function rN(n){return eN.indexOf(n.op)>=0}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class rr{constructor(t,e){this.graph=t,this.parent=e,this.compiledMap=new Map,this._weightMap={},this.SEPERATOR=",",this._functions={},this._functionExecutorMap={},this.intermediateTensors={},this.keepTensorForDebug=!1,this._outputs=t.outputs,this._inputs=t.inputs,this._initNodes=t.initNodes,this._signature=t.signature,this._functions=t.functions,t.functions!=null&&Object.keys(t.functions).forEach(r=>{this._functionExecutorMap[r]=new rr(t.functions[r],this)})}get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(t){const e=Object.keys(t).map(r=>t[r].map(s=>s.id));this._weightIds=[].concat(...e),this._weightMap=t}set resourceManager(t){this._resourceManager=t}get inputs(){return this._inputs.map(t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(t=>t.signatureKey||t.name)}get outputNodes(){return this._outputs.map(t=>{const e=t.signatureKey||t.name;return t.defaultOutput?`${e}:${t.defaultOutput}`:e})}get functions(){return Object.keys(this._functions).reduce((t,e)=>(t[e]=this._functions[e].signature,t),{})}getCompilationKey(t,e){const r=t.map(a=>a.name).sort(),s=e.map(a=>a.name).sort();return r.join(this.SEPERATOR)+"--"+s.join(this.SEPERATOR)}compile(t,e){const r=jo(t,e,this.weightMap,this._initNodes),{missingInputs:s,dynamicNode:a,syncInputs:o}=r;if(a!=null)throw new Error(`This execution contains the node '${a.name}', which has the dynamic op '${a.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${o}]`);if(s.length>0){const u=e.map(c=>c.name),l=Object.keys(t);throw new Error(`Cannot compute the outputs [${u}] from the provided inputs [${l}]. Missing the following inputs: [${s}]`)}return Zv(this.graph,this.weightMap,r)}execute(t,e){t=this.mapInputs(t);const r=Object.keys(t).sort();this.checkInputs(t),this.checkInputShapeAndType(t),e=this.mapOutputs(e),this.checkOutputs(e);const s=r.map(p=>this.graph.nodes[zt(p)[0]]),a=e.map(p=>zt(p)[0]);let o=a.map(p=>this.graph.nodes[p]);this.resetIntermediateTensors(),o.length===0&&(o=this._outputs);const u=this.getCompilationKey(s,o);let l=this.compiledMap.get(u);l==null&&(l=this.compile(t,o),this.compiledMap.set(u,l));const c={},f={};return St(()=>{const p=new Vo(this.weightMap,c,f,this.functionExecutorMap),y=Object.assign({},this.weightMap);Object.keys(t).forEach(x=>{const[E,A]=zt(x),M=[];M[A]=t[x],y[E]=M});const b=this.getFrozenTensorIds(y),v={};for(let x=0;x<l.length;x++){const E=l[x];if(!y[E.name]){const A=zo(E,y,p,this._resourceManager);if(Ze(A))throw new Error(`The execution of the op '${E.op}' returned a promise. Please use model.executeAsync() instead.`);y[E.name]=A,this.checkTensorForDisposal(E.name,E,y,p,b,a,v)}}return this.parent==null&&p.dispose(b),e.map(x=>Ot(x,y,p))})}getFrozenTensorIds(t){const e=[].concat.apply([],Object.keys(t).map(r=>t[r]).map(r=>r.map(s=>s.id)));return new Set(e)}checkTensorForDisposal(t,e,r,s,a,o,u){e.category==="control"||o.indexOf(t)!==-1||(r[t].forEach(l=>{l!=null&&(u[l.id]=(u[l.id]||0)+e.children.length)}),e.inputs.forEach(l=>{if(l.category!=="control"){const c=V1(l.name,r,s);c!=null&&c.forEach(f=>{if(f&&!f.kept&&!a.has(f.id)){const p=u[f.id];if(p===1){if(!this.keepTensorForDebug)f.dispose();else{const[y,b]=ae(e.name,s);this.intermediateTensors[y]?this.intermediateTensors[y][b]=f:(this.intermediateTensors[y]=[],this.intermediateTensors[y][b]=f)}delete u[f.id]}else p!=null&&u[f.id]--}})}}))}async executeAsync(t,e){return this._executeAsync(t,e)}disposeIntermediateTensors(){!this.intermediateTensors||(Object.keys(this.intermediateTensors).forEach(t=>this.intermediateTensors[t].forEach(e=>e.dispose())),this.disposeTensorsMap())}disposeTensorsMap(){!this.tensorsMap||Object.keys(this.tensorsMap).forEach(t=>{this.tensorsMap[t].forEach(r=>{r&&!r.kept&&!r.isDisposed&&!this.keepIds.has(r.id)&&r.dispose()})})}getIntermediateTensors(){return this.tensorsMap}resetIntermediateTensors(){for(const t in this.intermediateTensors)this.intermediateTensors[t].forEach(e=>e.dispose()),delete this.intermediateTensors[t]}async _executeAsync(t,e,r=!1,s={},a={}){r||(t=this.mapInputs(t),this.checkInputs(t),this.checkInputShapeAndType(t),e=this.mapOutputs(e),this.checkOutputs(e));try{this.keepTensorForDebug=rt().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(f){console.warn(f.message)}this.resetIntermediateTensors();const o=new Vo(this.weightMap,s,a,this.functionExecutorMap);this.tensorsMap=await this.executeWithControlFlow(t,o,e,r);const u=e.map(f=>Ot(f,this.tensorsMap,o)),l=u.map(f=>f.id),c=Object.keys(t).map(f=>t[f].id);return this.keepIds=new Set([...l,...c,...this.weightIds]),this.keepTensorForDebug||this.disposeTensorsMap(),this.parent==null&&o.dispose(this.keepIds),u}async executeFunctionAsync(t,e,r){const s=t.reduce((a,o,u)=>(a[this.inputs[u].name]=o,a),{});return this._executeAsync(s,this.outputNodes,!0,e,r)}async executeWithControlFlow(t,e,r,s){const a=Object.keys(t),o=a.map(L=>this.graph.nodes[zt(L)[0]]),u=r.map(L=>zt(L)[0]);let l=u.map(L=>this.graph.nodes[L]);l.length===0&&(l=this._outputs);const{usedNodes:c,missingInputs:f,dynamicNode:p,syncInputs:y}=jo(t,l,this.weightMap,this._initNodes),b=[...o,...this.graph.weights,...this._initNodes||[]].map(L=>({node:L,contexts:e.currentContext})),v=Object.assign({},this.weightMap);Object.keys(t).forEach(L=>{const[D,C]=zt(L),B=[];B[C]=t[L],v[D]=B});const x={},E=this.getFrozenTensorIds(v),A={};for(;b.length>0;){const L=this.processStack(o,b,e,v,A,E,u,x,c);await Promise.all(L)}p==null&&!s&&console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");const M=l.filter(L=>!xu(L)&&!Ot(L.name,v,e)).map(L=>L.name);if(M.length>0){let L="";throw p!=null&&(L=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${y}]`),new Error(`Cannot compute the outputs [${M}] from the provided inputs [${a}]. Consider providing the following inputs: [${f}]. ${L}`)}return v}processStack(t,e,r,s,a,o,u,l,c){const f=[];for(;e.length>0;){const p=e.pop();r.currentContext=p.contexts;let y="";if(p.node.op==="Enter"&&m("isConstant",p.node,s,r)&&([y]=ae(p.node.name,r)),s[p.node.name]==null){const b=zo(p.node,s,r,this._resourceManager);y||([y]=ae(p.node.name,r));const v=r.currentContext;Ze(b)?f.push(b.then(x=>(s[y]=x,r.currentContext=v,this.checkTensorForDisposal(y,p.node,s,r,o,u,l),this.processChildNodes(p.node,e,r,s,a,c),x))):(s[y]=b,this.checkTensorForDisposal(y,p.node,s,r,o,u,l),this.processChildNodes(p.node,e,r,s,a,c))}else this.processChildNodes(p.node,e,r,s,a,c)}return f}processChildNodes(t,e,r,s,a,o){t.children.forEach(u=>{const[l]=ae(u.name,r);a[l]||!o.has(u.name)||(u.op==="Merge"?u.inputNames.some(c=>!!Ot(c,s,r))&&(a[l]=!0,e.push({contexts:r.currentContext,node:u})):u.inputNames.every(c=>!!Ot(c,s,r))&&(a[l]=!0,e.push({contexts:r.currentContext,node:u})))})}dispose(){Object.keys(this.weightMap).forEach(t=>this.weightMap[t].forEach(e=>e.dispose()))}checkInputShapeAndType(t){Object.keys(t).forEach(e=>{const r=t[e],[s]=zt(e),a=this.graph.nodes[s];if(a.attrParams.shape&&a.attrParams.shape.value){const o=a.attrParams.shape.value,u=o.length===r.shape.length&&r.shape.every((l,c)=>o[c]===-1||o[c]===l);k(u,()=>`The shape of dict['${a.name}'] provided in model.execute(dict) must be [${o}], but was [${r.shape}]`)}a.attrParams.dtype&&a.attrParams.dtype.value&&k(r.dtype===a.attrParams.dtype.value,()=>`The dtype of dict['${a.name}'] provided in model.execute(dict) must be ${a.attrParams.dtype.value}, but was ${r.dtype}`)})}mapInputs(t){const e={};for(const r in t)if(this._signature!=null&&this._signature.inputs!=null&&this._signature.inputs[r]!=null){const s=this._signature.inputs[r];e[s.name]=t[r]}else e[r]=t[r];return e}checkInputs(t){const e=Object.keys(t).filter(r=>{const[s]=zt(r);return this.graph.nodes[s]==null});if(e.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${e}] that are not part of graph`)}mapOutputs(t){return t.map(e=>this._signature!=null&&this._signature.outputs!=null&&this._signature.outputs[e]!=null?this._signature.outputs[e].name:e,{})}checkOutputs(t){t.forEach(e=>{const[r]=zt(e);if(!this.graph.nodes[r])throw new Error(`The output '${e}' is not found in the graph`)})}}class sN{constructor(t={},e={}){this.hashTableNameToHandle=t,this.hashTableMap=e}addHashTable(t,e){this.hashTableNameToHandle[t]=e.handle,this.hashTableMap[e.id]=e}getHashTableHandleByName(t){return this.hashTableNameToHandle[t]}getHashTableById(t){return this.hashTableMap[t]}dispose(){for(const t in this.hashTableMap)this.hashTableMap[t].clearAndClose(),delete this.hashTableMap[t];for(const t in this.hashTableNameToHandle)this.hashTableNameToHandle[t].dispose(),delete this.hashTableNameToHandle[t]}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const aN="?tfjs-format=file",oN="model.json";class iN{constructor(t,e={},r=Oi){this.modelUrl=t,this.loadOptions=e,this.version="n/a",this.io=r,e==null&&(this.loadOptions={}),this.resourceManager=new sN}get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}findIOHandler(){const t=this.modelUrl;if(t.load!=null)this.handler=t;else if(this.loadOptions.requestInit!=null)this.handler=this.io.browserHTTPRequest(t,this.loadOptions);else{const e=this.io.getLoadHandlers(t,this.loadOptions);if(e.length===0)e.push(this.io.browserHTTPRequest(t,this.loadOptions));else if(e.length>1)throw new Error(`Found more than one (${e.length}) load handlers for URL '${[t]}'`);this.handler=e[0]}}load(){if(this.findIOHandler(),this.handler.load==null)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const t=this.handler.load();return Ze(t)?t.then(e=>this.loadSync(e)):this.loadSync(t)}loadSync(t){this.artifacts=t;const e=this.artifacts.modelTopology;let r=this.artifacts.signature;if(this.artifacts.userDefinedMetadata!=null){const a=this.artifacts.userDefinedMetadata;a.signature!=null&&(r=a.signature),a.structuredOutputKeys!=null&&(this.structuredOutputKeys=a.structuredOutputKeys)}this.signature=r,this.version=`${e.versions.producer}.${e.versions.minConsumer}`;const s=this.io.decodeWeights(this.artifacts.weightData,this.artifacts.weightSpecs);if(this.executor=new rr(Po.Instance.transformGraph(e,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(s),this.executor.resourceManager=this.resourceManager,t.modelInitializer!=null&&t.modelInitializer.node!=null){const a=Po.Instance.transformGraph(t.modelInitializer);this.initializer=new rr(a),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializer.executeAsync({},[])}return!0}async save(t,e){if(typeof t=="string"){const r=this.io.getSaveHandlers(t);if(r.length===0)throw new Error(`Cannot find any save handlers for URL '${t}'`);if(r.length>1)throw new Error(`Found more than one (${r.length}) save handlers for URL '${t}'`);t=r[0]}if(t.save==null)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return t.save(this.artifacts)}predict(t,e){const r=this.execute(t,this.outputNodes);if(this.structuredOutputKeys){const s=r instanceof gt?[r]:r,a={};return s.forEach((o,u)=>a[this.structuredOutputKeys[u]]=o),a}return r}normalizeInputs(t){if(!(t instanceof gt)&&!Array.isArray(t))return t;if(t=Array.isArray(t)?t:[t],t.length!==this.inputNodes.length)throw new Error(`Input tensor count mismatch,the graph model has ${this.inputNodes.length} placeholders, while there are ${t.length} input tensors.`);return this.inputNodes.reduce((e,r,s)=>(e[r]=t[s],e),{})}normalizeOutputs(t){return t=t||this.outputNodes,Array.isArray(t)?t:[t]}execute(t,e){t=this.normalizeInputs(t),e=this.normalizeOutputs(e);const r=this.executor.execute(t,e);return r.length>1?r:r[0]}async executeAsync(t,e){t=this.normalizeInputs(t),e=this.normalizeOutputs(e);const r=await this.executor.executeAsync(t,e);return r.length>1?r:r[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(t){return Object.keys(t).reduce((e,r)=>(e[r]=[t[r]],e),{})}dispose(){this.executor.dispose(),this.initializer&&this.initializer.dispose(),this.resourceManager.dispose()}}async function Mo(n,t={},e=Oi){if(n==null)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");t==null&&(t={}),t.fromTFHub&&typeof n=="string"&&(n=uN(n));const r=new iN(n,t,e);return await r.load(),r}function uN(n){return n.endsWith("/")||(n=n+"/"),`${n}${oN}${aN}`}/**
    * @license
    * Copyright 2022 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    */var Ft=function(){return(Ft=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var s in t=arguments[e])Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s]);return n}).apply(this,arguments)};function Yt(n,t,e,r){return new(e||(e=Promise))(function(s,a){function o(c){try{l(r.next(c))}catch(f){a(f)}}function u(c){try{l(r.throw(c))}catch(f){a(f)}}function l(c){var f;c.done?s(c.value):(f=c.value,f instanceof e?f:new e(function(p){p(f)})).then(o,u)}l((r=r.apply(n,t||[])).next())})}function Jt(n,t){var e,r,s,a,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(l){return function(c){return function(f){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,r&&(s=2&f[0]?r.return:f[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,f[1])).done)return s;switch(r=0,s&&(f=[2&f[0],s.value]),f[0]){case 0:case 1:s=f;break;case 4:return o.label++,{value:f[1],done:!1};case 5:o.label++,r=f[1],f=[0];continue;case 7:f=o.ops.pop(),o.trys.pop();continue;default:if(s=o.trys,!((s=s.length>0&&s[s.length-1])||f[0]!==6&&f[0]!==2)){o=0;continue}if(f[0]===3&&(!s||f[1]>s[0]&&f[1]<s[3])){o.label=f[1];break}if(f[0]===6&&o.label<s[1]){o.label=s[1],s=f;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(f);break}s[2]&&o.ops.pop(),o.trys.pop();continue}f=t.call(n,o)}catch(p){f=[6,p],r=0}finally{e=s=0}if(5&f[0])throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}([l,c])}}}var sr=["wrist","thumb_cmc","thumb_mcp","thumb_ip","thumb_tip","index_finger_mcp","index_finger_pip","index_finger_dip","index_finger_tip","middle_finger_mcp","middle_finger_pip","middle_finger_dip","middle_finger_tip","ring_finger_mcp","ring_finger_pip","ring_finger_dip","ring_finger_tip","pinky_finger_mcp","pinky_finger_pip","pinky_finger_dip","pinky_finger_tip"],Yr={runtime:"mediapipe",maxHands:2,modelType:"full"},lN=function(){function n(t){var e,r=this;switch(this.width=0,this.height=0,this.selfieMode=!1,this.handsSolution=new Yo.Hands({locateFile:function(s,a){return t.solutionPath?t.solutionPath.replace(/\/+$/,"")+"/"+s:a+"/"+s}}),t.modelType){case"lite":e=0;break;case"full":default:e=1}this.handsSolution.setOptions({modelComplexity:e,selfieMode:this.selfieMode,maxNumHands:t.maxHands}),this.handsSolution.onResults(function(s){if(r.height=s.image.height,r.width=s.image.width,r.hands=[],s.multiHandLandmarks!==null)for(var a=s.multiHandedness,o=s.multiHandLandmarks,u=s.multiHandWorldLandmarks,l=0;l<a.length;l++)r.hands.push(Ft(Ft({},r.translateOutput(o[l],u[l])),{score:a[l].score,handedness:a[l].label}))})}return n.prototype.translateOutput=function(t,e){var r=this;return{keypoints:t.map(function(s,a){return{x:s.x*r.width,y:s.y*r.height,score:s.visibility,name:sr[a]}}),keypoints3D:e.map(function(s,a){return{x:s.x,y:s.y,z:s.z,score:s.visibility,name:sr[a]}})}},n.prototype.estimateHands=function(t,e){return Yt(this,void 0,void 0,function(){var r,s;return Jt(this,function(a){switch(a.label){case 0:return e&&e.flipHorizontal&&e.flipHorizontal!==this.selfieMode&&(this.selfieMode=e.flipHorizontal,this.handsSolution.setOptions({selfieMode:this.selfieMode})),t instanceof gt?(s=ImageData.bind,[4,ud(t)]):[3,2];case 1:return r=new(s.apply(ImageData,[void 0,a.sent(),t.shape[1],t.shape[0]])),[3,3];case 2:r=t,a.label=3;case 3:return t=r,[4,this.handsSolution.send({image:t})];case 4:return a.sent(),[2,this.hands]}})})},n.prototype.dispose=function(){this.handsSolution.close()},n.prototype.reset=function(){this.handsSolution.reset(),this.width=0,this.height=0,this.hands=null,this.selfieMode=!1},n.prototype.initialize=function(){return this.handsSolution.initialize()},n}();function cN(n){return Yt(this,void 0,void 0,function(){var t,e;return Jt(this,function(r){switch(r.label){case 0:return t=function(s){if(s==null)return Ft({},Yr);var a=Ft({},s);return a.runtime="mediapipe",a.maxHands==null&&(a.maxHands=Yr.maxHands),a.modelType==null&&(a.modelType=Yr.modelType),a}(n),[4,(e=new lN(t)).initialize()];case 1:return r.sent(),[2,e]}})})}function Jr(n){return n.width*n.height}function Ho(n){var t=n.xCenter-n.width/2,e=t+n.width,r=n.yCenter-n.height/2;return{xMin:t,xMax:e,yMin:r,yMax:r+n.height,width:n.width,height:n.height}}function hN(n,t){var e=Ho(n),r=Ho(t);if(!function(o,u){return!(o.xMax<u.xMin||u.xMax<o.xMin||o.yMax<u.yMin||u.yMax<o.yMin)}(e,r))return 0;var s=Jr(function(o,u){var l=Math.max(o.xMin,u.xMin),c=Math.min(o.xMax,u.xMax),f=Math.max(o.yMin,u.yMin),p=Math.min(o.yMax,u.yMax);return{xMin:l,xMax:c,yMin:f,yMax:p,width:Math.max(c-l,0),height:Math.max(p-f,0)}}(e,r)),a=Jr(e)+Jr(r)-s;return a>0?s/a:0}function pN(n,t,e,r){var s=n.width,a=n.height,o=r?-1:1,u=Math.cos(n.rotation),l=Math.sin(n.rotation),c=n.xCenter,f=n.yCenter,p=1/t,y=1/e,b=new Array(16);return b[0]=s*u*o*p,b[1]=-a*l*p,b[2]=0,b[3]=(-.5*s*u*o+.5*a*l+c)*p,b[4]=s*l*o*y,b[5]=a*u*y,b[6]=0,b[7]=(-.5*a*u-.5*s*l*o+f)*y,b[8]=0,b[9]=0,b[10]=s*p,b[11]=0,b[12]=0,b[13]=0,b[14]=0,b[15]=1,function(v){if(v.length!==16)throw new Error("Array length must be 16 but got "+v.length);return[[v[0],v[1],v[2],v[3]],[v[4],v[5],v[6],v[7]],[v[8],v[9],v[10],v[11]],[v[12],v[13],v[14],v[15]]]}(b)}function ku(n){return n instanceof gt?{height:n.shape[0],width:n.shape[1]}:{height:n.height,width:n.width}}function ar(n){return n-2*Math.PI*Math.floor((n+Math.PI)/(2*Math.PI))}function Eu(n){return n instanceof gt?n:ld(n)}function Zr(n,t){k(n.width!==0,function(){return t+" width cannot be 0."}),k(n.height!==0,function(){return t+" height cannot be 0."})}function fN(n,t){var e=function(r,s,a,o){var u=s-r,l=o-a;if(u===0)throw new Error("Original min and max are both "+r+", range cannot be 0.");var c=l/u;return{scale:c,offset:a-r*c}}(0,255,t[0],t[1]);return St(function(){return lt(G(n,e.scale),e.offset)})}function Uo(n,t,e){var r=t.outputTensorSize,s=t.keepAspectRatio,a=t.borderMode,o=t.outputTensorFloatRange,u=ku(n),l=function(p,y){return y?{xCenter:y.xCenter*p.width,yCenter:y.yCenter*p.height,width:y.width*p.width,height:y.height*p.height,rotation:y.rotation}:{xCenter:.5*p.width,yCenter:.5*p.height,width:p.width,height:p.height,rotation:0}}(u,e),c=function(p,y,b){if(b===void 0&&(b=!1),!b)return{top:0,left:0,right:0,bottom:0};var v=y.height,x=y.width;Zr(y,"targetSize"),Zr(p,"roi");var E,A,M=v/x,L=p.height/p.width,D=0,C=0;return M>L?(E=p.width,A=p.width*M,C=(1-L/M)/2):(E=p.height/M,A=p.height,D=(1-M/L)/2),p.width=E,p.height=A,{top:C,left:D,right:D,bottom:C}}(l,r,s),f=pN(l,u.width,u.height,!1);return{imageTensor:St(function(){var p=Eu(n),y=Re(function(x,E,A){return Zr(A,"inputResolution"),[1/A.width*x[0][0]*E.width,1/A.height*x[0][1]*E.width,x[0][3]*E.width,1/A.width*x[1][0]*E.height,1/A.height*x[1][1]*E.height,x[1][3]*E.height,0,0]}(f,u,r),[1,8]),b=a==="zero"?"constant":"nearest",v=gr.transform(ce(mt(p,"float32")),y,"bilinear",b,0,[r.height,r.width]);return o!=null?fN(v,o):v}),padding:c,transformationMatrix:f}}function Ko(n,t,e,r){return r===1?.5*(n+t):n+(t-n)*e/(r-1)}function Wo(n){return{xCenter:n.xMin+n.width/2,yCenter:n.yMin+n.height/2,width:n.width,height:n.height}}function qo(n){var t=n.relativeKeypoints;if(t.length<=1)throw new Error("2 or more keypoints required to calculate a rect.");var e=Number.MAX_VALUE,r=Number.MAX_VALUE,s=Number.MIN_VALUE,a=Number.MIN_VALUE;return t.forEach(function(o){e=Math.min(e,o.x),s=Math.max(s,o.x),r=Math.min(r,o.y),a=Math.max(a,o.y)}),{xCenter:(e+s)/2,yCenter:(r+a)/2,width:s-e,height:a-r}}function dN(n,t,e,r,s){var a=e==="rect"?function(o,u,l){var c,f=o.locationData;if(u==="boundingbox")c=Wo(f.boundingBox);else{c=qo(f);var p=l.width,y=l.height;c.xCenter=Math.round(c.xCenter*p),c.yCenter=Math.round(c.yCenter*y),c.width=Math.round(c.width*p),c.height=Math.round(c.height*y)}return c}(n,t,r):function(o,u){var l=o.locationData;return u==="boundingbox"?Wo(l.relativeBoundingBox):qo(l)}(n,t);return s&&(a.rotation=function(o,u,l){var c,f=o.locationData,p=l.rotationVectorStartKeypointIndex,y=l.rotationVectorEndKeypointIndex;c=l.rotationVectorTargetAngle?l.rotationVectorTargetAngle:Math.PI*l.rotationVectorTargetAngleDegree/180;var b=f.relativeKeypoints[p].x*u.width,v=f.relativeKeypoints[p].y*u.height,x=f.relativeKeypoints[y].x*u.width,E=f.relativeKeypoints[y].y*u.height;return ar(c-Math.atan2(-(E-v),x-b))}(n,r,s)),a}function mN(n){return St(function(){var t=function(s){return St(function(){return[Z(s,[0,0,0],[1,-1,1]),Z(s,[0,0,1],[1,-1,-1])]})}(n),e=t[0],r=t[1];return{boxes:Nt(r),logits:Nt(e)}})}function yN(n,t,e,r){return Yt(this,void 0,void 0,function(){var s,a,o,u,l;return Jt(this,function(c){switch(c.label){case 0:return n.sort(function(f,p){return Math.max.apply(Math,p.score)-Math.max.apply(Math,f.score)}),s=Re(n.map(function(f){return[f.locationData.relativeBoundingBox.yMin,f.locationData.relativeBoundingBox.xMin,f.locationData.relativeBoundingBox.yMax,f.locationData.relativeBoundingBox.xMax]})),a=Dt(n.map(function(f){return f.score[0]})),[4,gr.nonMaxSuppressionAsync(s,a,t,e)];case 1:return[4,(o=c.sent()).array()];case 2:return u=c.sent(),l=n.filter(function(f,p){return u.indexOf(p)>-1}),se([s,a,o]),[2,l]}})})}function gN(n,t){return n.map(function(e){var r=Ft(Ft({},e),{x:e.x*t.width,y:e.y*t.height});return e.z!=null&&(r.z=e.z*t.width),r})}function bN(n,t,e){return Yt(this,void 0,void 0,function(){var r,s,a,o,u;return Jt(this,function(l){switch(l.label){case 0:return r=n[0],s=n[1],a=function(c,f,p){return St(function(){var y,b,v,x;p.reverseOutputOrder?(b=Nt(Z(c,[0,p.boxCoordOffset+0],[-1,1])),y=Nt(Z(c,[0,p.boxCoordOffset+1],[-1,1])),x=Nt(Z(c,[0,p.boxCoordOffset+2],[-1,1])),v=Nt(Z(c,[0,p.boxCoordOffset+3],[-1,1]))):(y=Nt(Z(c,[0,p.boxCoordOffset+0],[-1,1])),b=Nt(Z(c,[0,p.boxCoordOffset+1],[-1,1])),v=Nt(Z(c,[0,p.boxCoordOffset+2],[-1,1])),x=Nt(Z(c,[0,p.boxCoordOffset+3],[-1,1]))),b=lt(G(it(b,p.xScale),f.w),f.x),y=lt(G(it(y,p.yScale),f.h),f.y),p.applyExponentialOnBoxSize?(v=G(me(it(v,p.hScale)),f.h),x=G(me(it(x,p.wScale)),f.w)):(v=G(it(v,p.hScale),f.h),x=G(it(x,p.wScale),f.h));var E=nt(y,it(v,2)),A=nt(b,it(x,2)),M=lt(y,it(v,2)),L=lt(b,it(x,2)),D=xt([P(E,[p.numBoxes,1]),P(A,[p.numBoxes,1]),P(M,[p.numBoxes,1]),P(L,[p.numBoxes,1])],1);if(p.numKeypoints)for(var C=0;C<p.numKeypoints;++C){var B=p.keypointCoordOffset+C*p.numValuesPerKeypoint,U=void 0,F=void 0;p.reverseOutputOrder?(U=Nt(Z(c,[0,B],[-1,1])),F=Nt(Z(c,[0,B+1],[-1,1]))):(F=Nt(Z(c,[0,B],[-1,1])),U=Nt(Z(c,[0,B+1],[-1,1])));var R=lt(G(it(U,p.xScale),f.w),f.x),j=lt(G(it(F,p.yScale),f.h),f.y);D=xt([D,P(R,[p.numBoxes,1]),P(j,[p.numBoxes,1])],1)}return D})}(s,t,e),o=St(function(){var c=r;return e.sigmoidScore?(e.scoreClippingThresh!=null&&(c=Ri(r,-e.scoreClippingThresh,e.scoreClippingThresh)),c=Le(c)):c}),[4,wN(a,o,e)];case 1:return u=l.sent(),se([a,o]),[2,u]}})})}function wN(n,t,e){return Yt(this,void 0,void 0,function(){var r,s,a,o,u,l,c,f,p,y,b,v;return Jt(this,function(x){switch(x.label){case 0:return r=[],[4,n.data()];case 1:return s=x.sent(),[4,t.data()];case 2:for(a=x.sent(),o=0;o<e.numBoxes;++o)if(!(e.minScoreThresh!=null&&a[o]<e.minScoreThresh||(u=o*e.numCoords,l=vN(s[u+0],s[u+1],s[u+2],s[u+3],a[o],e.flipVertically,o),(c=l.locationData.relativeBoundingBox).width<0||c.height<0))){if(e.numKeypoints>0)for((f=l.locationData).relativeKeypoints=[],p=e.numKeypoints*e.numValuesPerKeypoint,y=0;y<p;y+=e.numValuesPerKeypoint)b=u+e.keypointCoordOffset+y,v={x:s[b+0],y:e.flipVertically?1-s[b+1]:s[b+1]},f.relativeKeypoints.push(v);r.push(l)}return[2,r]}})})}function vN(n,t,e,r,s,a,o){return{score:[s],ind:o,locationData:{relativeBoundingBox:{xMin:t,yMin:a?1-e:n,xMax:r,yMax:a?1-n:e,width:r-t,height:e-n}}}}function NN(n,t){return n==="none"?t:function(e){return 1/(1+Math.exp(-e))}(t)}function Go(n,t,e,r){return Yt(this,void 0,void 0,function(){var s,a,o,u,l,c,f,p;return Jt(this,function(y){switch(y.label){case 0:return e=e||t.flipHorizontally||!1,r=r||t.flipVertically||!1,s=n.size,a=s/t.numLandmarks,[4,n.data()];case 1:for(o=y.sent(),u=[],l=0;l<t.numLandmarks;++l)c=l*a,(p={x:0,y:0}).x=e?t.inputImageWidth-o[c]:o[c],a>1&&(p.y=r?t.inputImageHeight-o[c+1]:o[c+1]),a>2&&(p.z=o[c+2]),a>3&&(p.score=NN(t.visibilityActivation,o[c+3])),u.push(p);for(f=0;f<u.length;++f)(p=u[f]).x=p.x/t.inputImageWidth,p.y=p.y/t.inputImageHeight,p.z=p.z/t.inputImageWidth/(t.normalizeZ||1);return[2,u]}})})}function Xo(n,t,e){var r=n.width,s=n.height,a=n.rotation;if(e.rotation==null&&e.rotationDegree==null||(a=function(f,p){return p.rotation!=null?f+=p.rotation:p.rotationDegree!=null&&(f+=Math.PI*p.rotationDegree/180),ar(f)}(a,e)),a===0)n.xCenter=n.xCenter+r*e.shiftX,n.yCenter=n.yCenter+s*e.shiftY;else{var o=(t.width*r*e.shiftX*Math.cos(a)-t.height*s*e.shiftY*Math.sin(a))/t.width,u=(t.width*r*e.shiftX*Math.sin(a)+t.height*s*e.shiftY*Math.cos(a))/t.height;n.xCenter=n.xCenter+o,n.yCenter=n.yCenter+u}if(e.squareLong){var l=Math.max(r*t.width,s*t.height);r=l/t.width,s=l/t.height}else if(e.squareShort){var c=Math.min(r*t.width,s*t.height);r=c/t.width,s=c/t.height}return n.width=r*e.scaleX,n.height=s*e.scaleY,n}function TN(n,t){for(var e=function(z,X){var q=z[0].x*X.width,tt=z[0].y*X.height,et=(z[4].x+z[8].x)/2,pt=(z[4].y+z[8].y)/2;return et=(et+z[6].x)/2*X.width,pt=(pt+z[6].y)/2*X.height,ar(Math.PI/2-Math.atan2(-(pt-tt),et-q))}(n,t),r=ar(-e),s=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY,l=0,c=n;l<c.length;l++){var f=(E=c[l]).x,p=E.y;s=Math.min(s,f),a=Math.max(a,f),o=Math.min(o,p),u=Math.max(u,p)}var y=(a+s)/2,b=(u+o)/2;s=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY;for(var v=0,x=n;v<x.length;v++){var E,A=((E=x[v]).x-y)*t.width,M=(E.y-b)*t.height,L=A*Math.cos(r)-M*Math.sin(r),D=A*Math.sin(r)+M*Math.cos(r);s=Math.min(s,L),a=Math.max(a,L),o=Math.min(o,D),u=Math.max(u,D)}var C=(a+s)/2,B=(u+o)/2,U=C*Math.cos(e)-B*Math.sin(e)+t.width*y,F=C*Math.sin(e)+B*Math.cos(e)+t.height*b,R=(a-s)/t.width,j=(u-o)/t.height;return{xCenter:U/t.width,yCenter:F/t.height,width:R,height:j,rotation:e}}var SN={reduceBoxesInLowestLayer:!1,interpolatedScaleAspectRatio:1,featureMapHeight:[],featureMapWidth:[],numLayers:4,minScale:.1484375,maxScale:.75,inputSizeHeight:192,inputSizeWidth:192,anchorOffsetX:.5,anchorOffsetY:.5,strides:[8,16,16,16],aspectRatios:[1],fixedAnchorSize:!0},Qr={runtime:"tfjs",modelType:"full",maxHands:2,detectorModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/detector/full/1",landmarkModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/landmark/full/1"},ts={flipHorizontal:!1,staticImageMode:!1},xN={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:2016,numCoords:18,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:7,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:192,yScale:192,hScale:192,wScale:192,minScoreThresh:.5},kN=.3,EN={shiftX:0,shiftY:-.5,scaleX:2.6,scaleY:2.6,squareLong:!0},_N={shiftX:0,shiftY:-.1,scaleX:2,scaleY:2,squareLong:!0},$N={outputTensorSize:{width:192,height:192},keepAspectRatio:!0,outputTensorFloatRange:[0,1],borderMode:"zero"},IN={outputTensorSize:{width:224,height:224},keepAspectRatio:!0,outputTensorFloatRange:[0,1],borderMode:"zero"},AN={numLandmarks:21,inputImageWidth:224,inputImageHeight:224,normalizeZ:.4,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},ON={numLandmarks:21,inputImageWidth:1,inputImageHeight:1,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},kn,DN=function(){function n(t,e,r){this.detectorModel=t,this.landmarkModel=e,this.maxHands=r,this.prevHandRectsFromLandmarks=null,this.anchors=function(l){l.reduceBoxesInLowestLayer==null&&(l.reduceBoxesInLowestLayer=!1),l.interpolatedScaleAspectRatio==null&&(l.interpolatedScaleAspectRatio=1),l.fixedAnchorSize==null&&(l.fixedAnchorSize=!1);for(var c=[],f=0;f<l.numLayers;){for(var p=[],y=[],b=[],v=[],x=f;x<l.strides.length&&l.strides[x]===l.strides[f];){var E=Ko(l.minScale,l.maxScale,x,l.strides.length);if(x===0&&l.reduceBoxesInLowestLayer)b.push(1),b.push(2),b.push(.5),v.push(.1),v.push(E),v.push(E);else{for(var A=0;A<l.aspectRatios.length;++A)b.push(l.aspectRatios[A]),v.push(E);if(l.interpolatedScaleAspectRatio>0){var M=x===l.strides.length-1?1:Ko(l.minScale,l.maxScale,x+1,l.strides.length);v.push(Math.sqrt(E*M)),b.push(l.interpolatedScaleAspectRatio)}}x++}for(var L=0;L<b.length;++L){var D=Math.sqrt(b[L]);p.push(v[L]/D),y.push(v[L]*D)}var C=0,B=0;if(l.featureMapHeight.length>0)C=l.featureMapHeight[f],B=l.featureMapWidth[f];else{var U=l.strides[f];C=Math.ceil(l.inputSizeHeight/U),B=Math.ceil(l.inputSizeWidth/U)}for(var F=0;F<C;++F)for(var R=0;R<B;++R)for(var j=0;j<p.length;++j){var z={xCenter:(R+l.anchorOffsetX)/B,yCenter:(F+l.anchorOffsetY)/C,width:0,height:0};l.fixedAnchorSize?(z.width=1,z.height=1):(z.width=y[j],z.height=p[j]),c.push(z)}f=x}return c}(SN);var s=Dt(this.anchors.map(function(l){return l.width})),a=Dt(this.anchors.map(function(l){return l.height})),o=Dt(this.anchors.map(function(l){return l.xCenter})),u=Dt(this.anchors.map(function(l){return l.yCenter}));this.anchorTensor={x:o,y:u,w:s,h:a}}return n.prototype.estimateHands=function(t,e){return Yt(this,void 0,void 0,function(){var r,s,a,o,u,l,c,f,p,y,b,v,x,E,A,M,L,D,C=this;return Jt(this,function(B){switch(B.label){case 0:return r=function(R){if(R==null)return Ft({},ts);var j=Ft({},R);return j.flipHorizontal==null&&(j.flipHorizontal=ts.flipHorizontal),j.staticImageMode==null&&(j.staticImageMode=ts.staticImageMode),j}(e),t==null?(this.reset(),[2,[]]):(s=ku(t),a=St(function(){var R=mt(Eu(t),"float32");return r.flipHorizontal&&(R=Nt(gr.flipLeftRight(ce(R,0)),[0])),R}),o=this.prevHandRectsFromLandmarks,r.staticImageMode||o==null||o.length<this.maxHands?[4,this.detectPalm(a)]:[3,2]);case 1:return(l=B.sent()).length===0?(this.reset(),a.dispose(),[2,[]]):(c=l.map(function(R){return C.palmDetectionToRoi(R,s)}),u=c,[3,3]);case 2:u=o,B.label=3;case 3:return U=.5,F=[],[u].forEach(function(R){return R.forEach(function(j){(F=F.filter(function(z){return hN(j,z)<=U})).push(j)})}),u=F,[4,Promise.all(u.map(function(R){return C.handLandmarks(R,a)}))];case 4:for(f=B.sent(),p=[],this.prevHandRectsFromLandmarks=[],y=0,b=f;y<b.length;y++)(v=b[y])!=null&&(x=v.landmarks,E=v.worldLandmarks,A=v.handScore,M=v.handedness,this.prevHandRectsFromLandmarks.push(this.handLandmarksToRoi(x,s)),(L=gN(x,s))!=null&&L.forEach(function(R,j){delete R.z,R.name=sr[j]}),(D=E)!=null&&D.forEach(function(R,j){R.name=sr[j]}),p.push({keypoints:L,keypoints3D:D,handedness:M,score:A}));return a.dispose(),[2,p]}var U,F})})},n.prototype.dispose=function(){this.detectorModel.dispose(),this.landmarkModel.dispose(),se([this.anchorTensor.x,this.anchorTensor.y,this.anchorTensor.w,this.anchorTensor.h])},n.prototype.reset=function(){this.prevHandRectsFromLandmarks=null},n.prototype.detectPalm=function(t){return Yt(this,void 0,void 0,function(){var e,r,s,a,o,u,l,c,f,p;return Jt(this,function(y){switch(y.label){case 0:return e=Uo(t,$N),r=e.imageTensor,s=e.padding,a=this.detectorModel.predict(r),o=mN(a),u=o.boxes,[4,bN([l=o.logits,u],this.anchorTensor,xN)];case 1:return(c=y.sent()).length===0?(se([r,a,l,u]),[2,c]):[4,yN(c,this.maxHands,kN)];case 2:return f=y.sent(),p=function(b,v){b===void 0&&(b=[]);for(var x=v.left,E=v.top,A=v.left+v.right,M=v.top+v.bottom,L=0;L<b.length;L++){var D=b[L],C=D.locationData.relativeBoundingBox,B=(C.xMin-x)/(1-A),U=(C.yMin-E)/(1-M),F=C.width/(1-A),R=C.height/(1-M);C.xMin=B,C.yMin=U,C.width=F,C.height=R,C.xMax=B+F,C.yMax=U+R;var j=D.locationData.relativeKeypoints;j&&j.forEach(function(z){var X=(z.x-x)/(1-A),q=(z.y-E)/(1-M);z.x=X,z.y=q})}return b}(f,s),se([r,a,l,u]),[2,p]}})})},n.prototype.palmDetectionToRoi=function(t,e){return Xo(dN(t,"boundingbox","normRect",e,{rotationVectorStartKeypointIndex:0,rotationVectorEndKeypointIndex:2,rotationVectorTargetAngleDegree:90}),e,EN)},n.prototype.handLandmarks=function(t,e){return Yt(this,void 0,void 0,function(){var r,s,a,o,u,l,c,f,p,y,b,v,x,E,A,M;return Jt(this,function(L){switch(L.label){case 0:return r=Uo(e,IN,t),s=r.imageTensor,a=r.padding,o=this.landmarkModel.execute(s,["Identity_2:0","Identity_1:0","Identity:0","Identity_3:0"]),u=o[0],l=o[1],c=o[2],f=o[3],[4,l.data()];case 1:return(p=L.sent()[0])<.5?(se(o),se(s),[2,null]):[4,c.data()];case 2:return y=L.sent()[0],b=y>=.5?"Left":"Right",[4,Go(u,AN)];case 3:return v=L.sent(),[4,Go(f,ON)];case 4:return x=L.sent(),E=function(D,C){var B=C.left,U=C.top,F=C.left+C.right,R=C.top+C.bottom;return D.map(function(j){return Ft(Ft({},j),{x:(j.x-B)/(1-F),y:(j.y-U)/(1-R),z:j.z/(1-F)})})}(v,a),A=function(D,C,B){B===void 0&&(B={ignoreRotation:!1});for(var U=[],F=0,R=D;F<R.length;F++){var j=R[F],z=j.x-.5,X=j.y-.5,q=B.ignoreRotation?0:C.rotation,tt=Math.cos(q)*z-Math.sin(q)*X,et=Math.sin(q)*z+Math.cos(q)*X;tt=tt*C.width+C.xCenter,et=et*C.height+C.yCenter;var pt=j.z*C.width,vt=Ft({},j);vt.x=tt,vt.y=et,vt.z=pt,U.push(vt)}return U}(E,t),M=function(D,C){for(var B=[],U=0,F=D;U<F.length;U++){var R=F[U],j=R.x,z=R.y,X=C.rotation,q=Math.cos(X)*j-Math.sin(X)*z,tt=Math.sin(X)*j+Math.cos(X)*z,et=Ft({},R);et.x=q,et.y=tt,B.push(et)}return B}(x,t),se(o),se(s),[2,{landmarks:A,worldLandmarks:M,handScore:p,handedness:b}]}})})},n.prototype.handLandmarksToRoi=function(t,e){return Xo(TN([].concat(t.slice(0,4),t.slice(5,7),t.slice(9,11),t.slice(13,15),t.slice(17,19)),e),e,_N)},n}();function CN(n){return Yt(this,void 0,void 0,function(){var t,e,r,s,a,o;return Jt(this,function(u){switch(u.label){case 0:return t=function(l){if(l==null)return Ft({},Qr);var c=Ft({},l);if(c.runtime="tfjs",c.maxHands==null&&(c.maxHands=Qr.maxHands),c.modelType==null&&(c.modelType=Qr.modelType),c.modelType!=="lite"&&c.modelType!=="full")throw new Error("Model type must be one of lite or full, but got "+c.modelType);if(c.detectorModelUrl==null)switch(c.modelType){case"lite":c.detectorModelUrl="https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/detector/lite/1";break;case"full":default:c.detectorModelUrl="https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/detector/full/1"}if(c.landmarkModelUrl==null)switch(c.modelType){case"lite":c.landmarkModelUrl="https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/landmark/lite/1";break;case"full":default:c.landmarkModelUrl="https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/landmark/full/1"}return c}(n),e=t.detectorModelUrl.indexOf("https://tfhub.dev")>-1,r=t.landmarkModelUrl.indexOf("https://tfhub.dev")>-1,[4,Promise.all([Mo(t.detectorModelUrl,{fromTFHub:e}),Mo(t.landmarkModelUrl,{fromTFHub:r})])];case 1:return s=u.sent(),a=s[0],o=s[1],[2,new DN(a,o,t.maxHands)]}})})}function FN(n,t){return Yt(this,void 0,void 0,function(){var e,r;return Jt(this,function(s){switch(n){case kn.MediaPipeHands:if(r=void 0,(e=t)!=null){if(e.runtime==="tfjs")return[2,CN(e)];if(e.runtime==="mediapipe")return[2,cN(e)];r=e.runtime}throw new Error("Expect modelConfig.runtime to be either 'tfjs' or 'mediapipe', but got "+r);default:throw new Error(n+" is not a supported model name.")}})})}(function(n){n.MediaPipeHands="MediaPipeHands"})(kn||(kn={}));/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const PN=2,LN={"640 X 480":{width:640,height:480},"640 X 360":{width:640,height:360},"360 X 270":{width:360,height:270}};kn.MediaPipeHands+"";/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wn={thumb:[0,1,2,3,4],indexFinger:[0,5,6,7,8],middleFinger:[0,9,10,11,12],ringFinger:[0,13,14,15,16],pinky:[0,17,18,19,20]};class sa{constructor(t,e){this.video=t,this.canvas=e,this.ctx=this.canvas.getContext("2d")}static async setupCamera(t,e,r){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error("Browser API navigator.mediaDevices.getUserMedia not available");const{targetFPS:s,sizeOption:a}=t,o=LN[a],u={audio:!1,video:{facingMode:"user",width:o.width,height:o.height,frameRate:{ideal:s}}},l=await navigator.mediaDevices.getUserMedia(u),c=new sa(e,r);c.video.srcObject=l,await new Promise(y=>{c.video.onloadedmetadata=()=>{y()}}),c.video.play();const f=c.video.videoWidth,p=c.video.videoHeight;return c.video.width=f,c.video.height=p,c.canvas.width=f,c.canvas.height=p,c.ctx.translate(c.video.videoWidth,0),c.ctx.scale(-1,1),c}drawCtx(){this.ctx.drawImage(this.video,0,0,this.video.videoWidth,this.video.videoHeight)}clearCtx(){this.ctx.clearRect(0,0,this.video.videoWidth,this.video.videoHeight)}preprocessHands(t){for(t.sort((e,r)=>e.handedness<r.handedness?1:e.handedness>r.handedness?-1:0);t.length<2;)t.push({})}drawResults(t){for(let e=0;e<t.length;++e)this.drawResult(t[e])}drawResult(t){t.keypoints!=null&&this.drawKeypoints(t.keypoints,t.handedness)}drawKeypoints(t,e){const r=t;this.ctx.fillStyle=e==="Left"?"Red":"Blue",this.ctx.strokeStyle="White",this.ctx.lineWidth=PN;for(let a=0;a<r.length;a++){const o=r[a].x,u=r[a].y;this.drawPoint(u-2,o-2,3)}const s=Object.keys(wn);for(let a=0;a<s.length;a++){const o=s[a],u=wn[o].map(l=>t[l]);this.drawPath(u,!1)}}drawPath(t,e){const r=new Path2D;r.moveTo(t[0].x,t[0].y);for(let s=1;s<t.length;s++){const a=t[s];r.lineTo(a.x,a.y)}e&&r.closePath(),this.ctx.stroke(r)}drawPoint(t,e,r){this.ctx.beginPath(),this.ctx.arc(e,t,r,0,2*Math.PI),this.ctx.fill()}}const RN=/\((-?[.\d]+), (-?[.\d]+), (-?[.\d]+)\)/;class It{constructor(t,e,r){this.x=t,this.y=e,this.z=r}set(t,e,r){return this.x=t,this.y=e,this.z=r,this}update(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}rounded(){return new It(Math.round(this.x),Math.round(this.y),Math.round(this.z))}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}floored(){return new It(Math.floor(this.x),Math.floor(this.y),Math.floor(this.z))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}offset(t,e,r){return new It(this.x+t,this.y+e,this.z+r)}translate(t,e,r){return this.x+=t,this.y+=e,this.z+=r,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}subtract(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}plus(t){return this.offset(t.x,t.y,t.z)}minus(t){return this.offset(-t.x,-t.y,-t.z)}scaled(t){return new It(this.x*t,this.y*t,this.z*t)}abs(){return new It(Math.abs(this.x),Math.abs(this.y),Math.abs(this.z))}volume(){return this.x*this.y*this.z}modulus(t){return new It(es(this.x,t.x),es(this.y,t.y),es(this.z,t.z))}distanceTo(t){const e=t.x-this.x,r=t.y-this.y,s=t.z-this.z;return Math.sqrt(e*e+r*r+s*s)}distanceSquared(t){const e=t.x-this.x,r=t.y-this.y,s=t.z-this.z;return e*e+r*r+s*s}equals(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}toString(){return"("+this.x+", "+this.y+", "+this.z+")"}clone(){return this.offset(0,0,0)}min(t){return new It(Math.min(this.x,t.x),Math.min(this.y,t.y),Math.min(this.z,t.z))}max(t){return new It(Math.max(this.x,t.x),Math.max(this.y,t.y),Math.max(this.z,t.z))}norm(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}cross(t){return new It(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)}unit(){const t=this.norm();return t===0?this.clone():this.scaled(1/t)}normalize(){const t=this.norm();return t!==0&&(this.x/=t,this.y/=t,this.z/=t),this}scale(t){return this.x*=t,this.y*=t,this.z*=t,this}xyDistanceTo(t){const e=t.x-this.x,r=t.y-this.y;return Math.sqrt(e*e+r*r)}xzDistanceTo(t){const e=t.x-this.x,r=t.z-this.z;return Math.sqrt(e*e+r*r)}yzDistanceTo(t){const e=t.y-this.y,r=t.z-this.z;return Math.sqrt(e*e+r*r)}innerProduct(t){return this.x*t.x+this.y*t.y+this.z*t.z}manhattanDistanceTo(t){return Math.abs(t.x-this.x)+Math.abs(t.y-this.y)+Math.abs(t.z-this.z)}toArray(){return[this.x,this.y,this.z]}}function _u(n,t,e){if(n==null)return new It(0,0,0);if(Array.isArray(n))return new It(parseFloat(n[0]),parseFloat(n[1]),parseFloat(n[2]));if(typeof n=="object")return new It(parseFloat(n.x),parseFloat(n.y),parseFloat(n.z));if(typeof n=="string"&&t==null){const r=n.match(RN);if(r)return new It(parseFloat(r[1]),parseFloat(r[2]),parseFloat(r[3]));throw new Error("vec3: cannot parse: "+n)}else return new It(parseFloat(n),parseFloat(t),parseFloat(e))}function es(n,t){const e=n%t;return e<0?e+t:e}var re=_u;_u.Vec3=It;const BN=re.Vec3;function zN(n){let t,e,r,s;return{c(){t=Vr("div"),e=Vr("canvas"),r=_l(),s=Vr("video"),jr(e,"class","svelte-169lz0n"),jr(s,"class","svelte-169lz0n"),jr(t,"class","svelte-169lz0n")},m(a,o){$l(a,t,o),Mr(t,e),n[6](e),Mr(t,r),Mr(t,s),n[7](s)},p:Il,d(a){a&&Al(t),n[6](null),n[7](null)}}}function VN(n){let t,e;return t=new Ol({props:{$$slots:{default:[zN]},$$scope:{ctx:n}}}),{c(){Nl(t.$$.fragment)},m(r,s){Tl(t,r,s),e=!0},p(r,[s]){const a={};s&2097155&&(a.$$scope={dirty:s,ctx:r}),t.$set(a)},i(r){e||(Sl(t.$$.fragment,r),e=!0)},o(r){xl(t.$$.fragment,r),e=!1},d(r){kl(t,r)}}}const WN=`
    Detects hand gestures from the camera feed.

    The left and right hands map to different controls. Each hand can control one parameter 
    by opening / closing itself, and the other by facing the palm towards or away from the camera. 
    `;function jN(n,t,e){let{id:r}=t;const s={},a={MIDI:new Set};let{state:o={}}=t;const u=Dl(r,a);let l,c,f,p;function y(F){const R=F[0].handedness==="Left"?F[0]:F[1].handedness==="Left"?F[1]:null,j=F[0].handedness==="Right"?F[0]:F[1].handedness==="Right"?F[1]:null;if(j!=null){const z=E(j,"left");u("MIDI",176,0,z);const X=b(j,"left");u("MIDI",176,1,X)}if(R!=null){const z=E(R,"right");u("MIDI",176,2,z);const X=b(R,"right");u("MIDI",176,3,X)}}function b(F,R){let z=v(F)*.5+.5;return R==="right"&&(z=1-z),Math.round(po(z*127,0,127))}function v(F){const R=F.keypoints3D,j=A(R,0),z=A(R,wn.indexFinger[1]),X=A(R,wn.pinky[1]),q=z.minus(j).normalize(),tt=X.minus(j).normalize();return q.cross(tt).normalize().dot(new BN(0,0,1))}let x={left:0,right:0};function E(F,R){const j=F.score;let z=F?M(F):0;z=j*z+(1-j)*x[R],x[R]=z;const X=Math.pow(z,2)*127*1.1;return Math.round(po(X,0,127))}function A(F,R){return re({z:0,...F[R]})}function M(F){let R=0;const j=F.keypoints3D,z=A(j,0);for(const[X,q]of Object.entries(wn)){if(X==="thumb")continue;const tt=A(j,q[1]),et=A(j,q[2]),pt=A(j,q[3]),vt=A(j,q[4]),Lt=[re(z).minus(re(tt)).normalize(),re(tt).minus(re(et)).normalize(),re(et).minus(re(pt)).normalize(),re(pt).minus(re(vt)).normalize()];let $t=0;for(let we=0;we<Lt.length-1;we++)$t+=Lt[we].innerProduct(Lt[we+1]);$t/=Lt.length-1,R+=$t}return R/=4,R}El(async()=>{p=await sa.setupCamera({targetFPS:60,sizeOption:"360 X 270"},l,c),f=await L(),C()});async function L(){return FN(kn.MediaPipeHands,{runtime:"mediapipe",maxHands:2,solutionPath:`https://cdn.jsdelivr.net/npm/@mediapipe/hands@${Yo.VERSION}`})}async function D(){p.video.readyState<2&&await new Promise(R=>{p.video.onloadeddata=()=>{R()}});let F=null;if(f!=null)try{F=await f.estimateHands(p.video,{flipHorizontal:!1,staticImageMode:!1})}catch(R){f.dispose(),f=null,console.error(R)}p.drawCtx(),F&&F.length>0&&(p.preprocessHands(F),y(F),p.drawResults(F))}async function C(){try{await D()}catch(F){console.error(F)}requestAnimationFrame(C)}function B(F){ho[F?"unshift":"push"](()=>{c=F,e(1,c)})}function U(F){ho[F?"unshift":"push"](()=>{l=F,e(0,l)})}return n.$$set=F=>{"id"in F&&e(2,r=F.id),"state"in F&&e(5,o=F.state)},[l,c,r,s,a,o,B,U]}class qN extends bl{constructor(t){super(),wl(this,t,jN,VN,vl,{id:2,inputs:3,outputs:4,state:5})}get inputs(){return this.$$.ctx[3]}get outputs(){return this.$$.ctx[4]}}export{qN as default,WN as doc};
