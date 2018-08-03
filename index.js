/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
window.Platform=window.Platform||{},window.logFlags=window.logFlags||{},function(e){var t=e.flags||{};location.search.slice(1).split("&").forEach(function(e){e=e.split("="),e[0]&&(t[e[0]]=e[1]||!0)});var n=document.currentScript||document.querySelector('script[src*="platform.js"]');if(n)for(var r,o=n.attributes,i=0;i<o.length;i++)r=o[i],"src"!==r.name&&(t[r.name]=r.value||!0);t.log&&t.log.split(",").forEach(function(e){window.logFlags[e]=!0}),t.shadow=t.shadow||t.shadowdom||t.polyfill,t.shadow="native"===t.shadow?!1:t.shadow||!HTMLElement.prototype.createShadowRoot,t.shadow&&document.querySelectorAll("script").length>1&&console.log("Warning: platform.js is not the first script on the page. See http://www.polymer-project.org/docs/start/platform.html#setup for details."),t.register&&(window.CustomElements=window.CustomElements||{flags:{}},window.CustomElements.flags.register=t.register),t.imports&&(window.HTMLImports=window.HTMLImports||{flags:{}},window.HTMLImports.flags.imports=t.imports),e.flags=t}(Platform),"undefined"==typeof WeakMap&&!function(){var e=Object.defineProperty,t=Date.now()%1e9,n=function(){this.name="__st"+(1e9*Math.random()>>>0)+(t++ +"__")};n.prototype={set:function(t,n){var r=t[this.name];return r&&r[0]===t?r[1]=n:e(t,this.name,{value:[t,n],writable:!0}),this},get:function(e){var t;return(t=e[this.name])&&t[0]===e?t[1]:void 0},"delete":function(e){var t=e[this.name];if(!t)return!1;var n=t[0]===e;return t[0]=t[1]=void 0,n},has:function(e){var t=e[this.name];return t?t[0]===e:!1}},window.WeakMap=n}(),Platform.flags.shadow?(!function(e){"use strict";function t(){function e(e){t=e}if("function"!=typeof Object.observe||"function"!=typeof Array.observe)return!1;var t=[],n={},r=[];return Object.observe(n,e),Array.observe(r,e),n.id=1,n.id=2,delete n.id,r.push(1,2),r.length=0,Object.deliverChangeRecords(e),5!==t.length?!1:"add"!=t[0].type||"update"!=t[1].type||"delete"!=t[2].type||"splice"!=t[3].type||"splice"!=t[4].type?!1:(Object.unobserve(n,e),Array.unobserve(r,e),!0)}function n(){if("undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime)return!1;if("undefined"!=typeof navigator&&navigator.getDeviceStorage)return!1;try{var e=new Function("","return true;");return e()}catch(t){return!1}}function r(e){return+e===e>>>0&&""!==e}function o(e){return+e}function i(e){return e===Object(e)}function a(e,t){return e===t?0!==e||1/e===1/t:B(e)&&B(t)?!0:e!==e&&t!==t}function s(e){if(void 0===e)return"eof";var t=e.charCodeAt(0);switch(t){case 91:case 93:case 46:case 34:case 39:case 48:return e;case 95:case 36:return"ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return t>=97&&122>=t||t>=65&&90>=t?"ident":t>=49&&57>=t?"number":"else"}function c(){}function l(e){function t(){if(!(p>=e.length)){var t=e[p+1];return"inSingleQuote"==h&&"'"==t||"inDoubleQuote"==h&&'"'==t?(p++,r=t,f.append(),!0):void 0}}for(var n,r,o,i,a,l,u,d=[],p=-1,h="beforePath",f={push:function(){void 0!==o&&(d.push(o),o=void 0)},append:function(){void 0===o?o=r:o+=r}};h;)if(p++,n=e[p],"\\"!=n||!t(h)){if(i=s(n),u=Y[h],a=u[i]||u["else"]||"error","error"==a)return;if(h=a[0],l=f[a[1]]||c,r=void 0===a[2]?n:a[2],l(),"afterPath"===h)return d}}function u(e){return K.test(e)}function d(e,t){if(t!==X)throw Error("Use Path.get to retrieve path objects");for(var n=0;n<e.length;n++)this.push(String(e[n]));U&&this.length&&(this.getValueFrom=this.compiledGetValueFromFn())}function p(e){if(e instanceof d)return e;if((null==e||0==e.length)&&(e=""),"string"!=typeof e){if(r(e.length))return new d(e,X);e=String(e)}var t=Q[e];if(t)return t;var n=l(e);if(!n)return Z;var t=new d(n,X);return Q[e]=t,t}function h(e){return r(e)?"["+e+"]":'["'+e.replace(/"/g,'\\"')+'"]'}function f(t){for(var n=0;J>n&&t.check_();)n++;return W&&(e.dirtyCheckCycleCount=n),n>0}function m(e){for(var t in e)return!1;return!0}function v(e){return m(e.added)&&m(e.removed)&&m(e.changed)}function w(e,t){var n={},r={},o={};for(var i in t){var a=e[i];(void 0===a||a!==t[i])&&(i in e?a!==t[i]&&(o[i]=a):r[i]=void 0)}for(var i in e)i in t||(n[i]=e[i]);return Array.isArray(e)&&e.length!==t.length&&(o.length=e.length),{added:n,removed:r,changed:o}}function g(){if(!et.length)return!1;for(var e=0;e<et.length;e++)et[e]();return et.length=0,!0}function b(){function e(e){t&&t.state_===it&&!r&&t.check_(e)}var t,n,r=!1,o=!0;return{open:function(n){if(t)throw Error("ObservedObject in use");o||Object.deliverChangeRecords(e),t=n,o=!1},observe:function(t,r){n=t,r?Array.observe(n,e):Object.observe(n,e)},deliver:function(t){r=t,Object.deliverChangeRecords(e),r=!1},close:function(){t=void 0,Object.unobserve(n,e),nt.push(this)}}}function y(e,t,n){var r=nt.pop()||b();return r.open(e),r.observe(t,n),r}function _(){function e(t,i){t&&(t===r&&(o[i]=!0),s.indexOf(t)<0&&(s.push(t),Object.observe(t,n)),e(Object.getPrototypeOf(t),i))}function t(e){for(var t=0;t<e.length;t++){var n=e[t];if(n.object!==r||o[n.name]||"setPrototype"===n.type)return!1}return!0}function n(n){if(!t(n)){for(var r,o=0;o<a.length;o++)r=a[o],r.state_==it&&r.iterateObjects_(e);for(var o=0;o<a.length;o++)r=a[o],r.state_==it&&r.check_()}}var r,o,i=0,a=[],s=[],c={object:void 0,objects:s,open:function(t,n){r||(r=n,o={}),a.push(t),i++,t.iterateObjects_(e)},close:function(){if(i--,!(i>0)){for(var e=0;e<s.length;e++)Object.unobserve(s[e],n),S.unobservedCount++;a.length=0,s.length=0,r=void 0,o=void 0,rt.push(this)}}};return c}function E(e,t){return $&&$.object===t||($=rt.pop()||_(),$.object=t),$.open(e,t),$}function S(){this.state_=ot,this.callback_=void 0,this.target_=void 0,this.directObserver_=void 0,this.value_=void 0,this.id_=ct++}function O(e){S._allObserversCount++,ut&&lt.push(e)}function T(){S._allObserversCount--}function M(e){S.call(this),this.value_=e,this.oldObject_=void 0}function C(e){if(!Array.isArray(e))throw Error("Provided object is not an Array");M.call(this,e)}function L(e,t){S.call(this),this.object_=e,this.path_=p(t),this.directObserver_=void 0}function N(e){S.call(this),this.reportChangesOnOpen_=e,this.value_=[],this.directObserver_=void 0,this.observed_=[]}function j(e){return e}function D(e,t,n,r){this.callback_=void 0,this.target_=void 0,this.value_=void 0,this.observable_=e,this.getValueFn_=t||j,this.setValueFn_=n||j,this.dontPassThroughSet_=r}function x(e,t,n){for(var r={},o={},i=0;i<t.length;i++){var a=t[i];ht[a.type]?(a.name in n||(n[a.name]=a.oldValue),"update"!=a.type&&("add"!=a.type?a.name in r?(delete r[a.name],delete n[a.name]):o[a.name]=!0:a.name in o?delete o[a.name]:r[a.name]=!0)):(console.error("Unknown changeRecord type: "+a.type),console.error(a))}for(var s in r)r[s]=e[s];for(var s in o)o[s]=void 0;var c={};for(var s in n)if(!(s in r||s in o)){var l=e[s];n[s]!==l&&(c[s]=l)}return{added:r,removed:o,changed:c}}function H(e,t,n){return{index:e,removed:t,addedCount:n}}function R(){}function P(e,t,n,r,o,i){return gt.calcSplices(e,t,n,r,o,i)}function I(e,t,n,r){return n>t||e>r?-1:t==n||r==e?0:n>e?r>t?t-n:r-n:t>r?r-e:t-e}function k(e,t,n,r){for(var o=H(t,n,r),i=!1,a=0,s=0;s<e.length;s++){var c=e[s];if(c.index+=a,!i){var l=I(o.index,o.index+o.removed.length,c.index,c.index+c.addedCount);if(l>=0){e.splice(s,1),s--,a-=c.addedCount-c.removed.length,o.addedCount+=c.addedCount-l;var u=o.removed.length+c.removed.length-l;if(o.addedCount||u){var n=c.removed;if(o.index<c.index){var d=o.removed.slice(0,c.index-o.index);Array.prototype.push.apply(d,n),n=d}if(o.index+o.removed.length>c.index+c.addedCount){var p=o.removed.slice(c.index+c.addedCount-o.index);Array.prototype.push.apply(n,p)}o.removed=n,c.index<o.index&&(o.index=c.index)}else i=!0}else if(o.index<c.index){i=!0,e.splice(s,0,o),s++;var h=o.addedCount-o.removed.length;c.index+=h,a+=h}}}i||e.push(o)}function A(e,t){for(var n=[],i=0;i<t.length;i++){var a=t[i];switch(a.type){case"splice":k(n,a.index,a.removed.slice(),a.addedCount);break;case"add":case"update":case"delete":if(!r(a.name))continue;var s=o(a.name);if(0>s)continue;k(n,s,[a.oldValue],1);break;default:console.error("Unexpected record type: "+JSON.stringify(a))}}return n}function F(e,t){var n=[];return A(e,t).forEach(function(t){return 1==t.addedCount&&1==t.removed.length?void(t.removed[0]!==e[t.index]&&n.push(t)):void(n=n.concat(P(e,t.index,t.index+t.addedCount,t.removed,0,t.removed.length)))}),n}var W=e.testingExposeCycleCount,q=t(),U=n(),B=e.Number.isNaN||function(t){return"number"==typeof t&&e.isNaN(t)},V="__proto__"in{}?function(e){return e}:function(e){var t=e.__proto__;if(!t)return e;var n=Object.create(t);return Object.getOwnPropertyNames(e).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}),n},G="[$_a-zA-Z]",z="[$_a-zA-Z0-9]",K=new RegExp("^"+G+"+"+z+"*$"),Y={beforePath:{ws:["beforePath"],ident:["inIdent","append"],"[":["beforeElement"],eof:["afterPath"]},inPath:{ws:["inPath"],".":["beforeIdent"],"[":["beforeElement"],eof:["afterPath"]},beforeIdent:{ws:["beforeIdent"],ident:["inIdent","append"]},inIdent:{ident:["inIdent","append"],0:["inIdent","append"],number:["inIdent","append"],ws:["inPath","push"],".":["beforeIdent","push"],"[":["beforeElement","push"],eof:["afterPath","push"]},beforeElement:{ws:["beforeElement"],0:["afterZero","append"],number:["inIndex","append"],"'":["inSingleQuote","append",""],'"':["inDoubleQuote","append",""]},afterZero:{ws:["afterElement","push"],"]":["inPath","push"]},inIndex:{0:["inIndex","append"],number:["inIndex","append"],ws:["afterElement"],"]":["inPath","push"]},inSingleQuote:{"'":["afterElement"],eof:["error"],"else":["inSingleQuote","append"]},inDoubleQuote:{'"':["afterElement"],eof:["error"],"else":["inDoubleQuote","append"]},afterElement:{ws:["afterElement"],"]":["inPath","push"]}},X={},Q={};d.get=p,d.prototype=V({__proto__:[],valid:!0,toString:function(){for(var e="",t=0;t<this.length;t++){var n=this[t];e+=u(n)?t?"."+n:n:h(n)}return e},getValueFrom:function(e){for(var t=0;t<this.length;t++){if(null==e)return;e=e[this[t]]}return e},iterateObjects:function(e,t){for(var n=0;n<this.length;n++){if(n&&(e=e[this[n-1]]),!i(e))return;t(e,this[0])}},compiledGetValueFromFn:function(){var e="",t="obj";e+="if (obj != null";for(var n,r=0;r<this.length-1;r++)n=this[r],t+=u(n)?"."+n:h(n),e+=" &&\n     "+t+" != null";e+=")\n";var n=this[r];return t+=u(n)?"."+n:h(n),e+="  return "+t+";\nelse\n  return undefined;",new Function("obj",e)},setValueFrom:function(e,t){if(!this.length)return!1;for(var n=0;n<this.length-1;n++){if(!i(e))return!1;e=e[this[n]]}return i(e)?(e[this[n]]=t,!0):!1}});var Z=new d("",X);Z.valid=!1,Z.getValueFrom=Z.setValueFrom=function(){};var $,J=1e3,et=[],tt=q?function(){var e={pingPong:!0},t=!1;return Object.observe(e,function(){g(),t=!1}),function(n){et.push(n),t||(t=!0,e.pingPong=!e.pingPong)}}():function(){return function(e){et.push(e)}}(),nt=[],rt=[],ot=0,it=1,at=2,st=3,ct=1;S.prototype={open:function(e,t){if(this.state_!=ot)throw Error("Observer has already been opened.");return O(this),this.callback_=e,this.target_=t,this.connect_(),this.state_=it,this.value_},close:function(){this.state_==it&&(T(this),this.disconnect_(),this.value_=void 0,this.callback_=void 0,this.target_=void 0,this.state_=at)},deliver:function(){this.state_==it&&f(this)},report_:function(e){try{this.callback_.apply(this.target_,e)}catch(t){S._errorThrownDuringCallback=!0,console.error("Exception caught during observer callback: "+(t.stack||t))}},discardChanges:function(){return this.check_(void 0,!0),this.value_}};var lt,ut=!q;S._allObserversCount=0,ut&&(lt=[]);var dt=!1;e.Platform=e.Platform||{},e.Platform.performMicrotaskCheckpoint=function(){if(!dt&&ut){dt=!0;var t,n,r=0;do{r++,n=lt,lt=[],t=!1;for(var o=0;o<n.length;o++){var i=n[o];i.state_==it&&(i.check_()&&(t=!0),lt.push(i))}g()&&(t=!0)}while(J>r&&t);W&&(e.dirtyCheckCycleCount=r),dt=!1}},ut&&(e.Platform.clearObservers=function(){lt=[]}),M.prototype=V({__proto__:S.prototype,arrayObserve:!1,connect_:function(){q?this.directObserver_=y(this,this.value_,this.arrayObserve):this.oldObject_=this.copyObject(this.value_)},copyObject:function(e){var t=Array.isArray(e)?[]:{};for(var n in e)t[n]=e[n];return Array.isArray(e)&&(t.length=e.length),t},check_:function(e){var t,n;if(q){if(!e)return!1;n={},t=x(this.value_,e,n)}else n=this.oldObject_,t=w(this.value_,this.oldObject_);return v(t)?!1:(q||(this.oldObject_=this.copyObject(this.value_)),this.report_([t.added||{},t.removed||{},t.changed||{},function(e){return n[e]}]),!0)},disconnect_:function(){q?(this.directObserver_.close(),this.directObserver_=void 0):this.oldObject_=void 0},deliver:function(){this.state_==it&&(q?this.directObserver_.deliver(!1):f(this))},discardChanges:function(){return this.directObserver_?this.directObserver_.deliver(!0):this.oldObject_=this.copyObject(this.value_),this.value_}}),C.prototype=V({__proto__:M.prototype,arrayObserve:!0,copyObject:function(e){return e.slice()},check_:function(e){var t;if(q){if(!e)return!1;t=F(this.value_,e)}else t=P(this.value_,0,this.value_.length,this.oldObject_,0,this.oldObject_.length);return t&&t.length?(q||(this.oldObject_=this.copyObject(this.value_)),this.report_([t]),!0):!1}}),C.applySplices=function(e,t,n){n.forEach(function(n){for(var r=[n.index,n.removed.length],o=n.index;o<n.index+n.addedCount;)r.push(t[o]),o++;Array.prototype.splice.apply(e,r)})},L.prototype=V({__proto__:S.prototype,get path(){return this.path_},connect_:function(){q&&(this.directObserver_=E(this,this.object_)),this.check_(void 0,!0)},disconnect_:function(){this.value_=void 0,this.directObserver_&&(this.directObserver_.close(this),this.directObserver_=void 0)},iterateObjects_:function(e){this.path_.iterateObjects(this.object_,e)},check_:function(e,t){var n=this.value_;return this.value_=this.path_.getValueFrom(this.object_),t||a(this.value_,n)?!1:(this.report_([this.value_,n,this]),!0)},setValue:function(e){this.path_&&this.path_.setValueFrom(this.object_,e)}});var pt={};N.prototype=V({__proto__:S.prototype,connect_:function(){if(q){for(var e,t=!1,n=0;n<this.observed_.length;n+=2)if(e=this.observed_[n],e!==pt){t=!0;break}t&&(this.directObserver_=E(this,e))}this.check_(void 0,!this.reportChangesOnOpen_)},disconnect_:function(){for(var e=0;e<this.observed_.length;e+=2)this.observed_[e]===pt&&this.observed_[e+1].close();this.observed_.length=0,this.value_.length=0,this.directObserver_&&(this.directObserver_.close(this),this.directObserver_=void 0)},addPath:function(e,t){if(this.state_!=ot&&this.state_!=st)throw Error("Cannot add paths once started.");var t=p(t);if(this.observed_.push(e,t),this.reportChangesOnOpen_){var n=this.observed_.length/2-1;this.value_[n]=t.getValueFrom(e)}},addObserver:function(e){if(this.state_!=ot&&this.state_!=st)throw Error("Cannot add observers once started.");if(this.observed_.push(pt,e),this.reportChangesOnOpen_){var t=this.observed_.length/2-1;this.value_[t]=e.open(this.deliver,this)}},startReset:function(){if(this.state_!=it)throw Error("Can only reset while open");this.state_=st,this.disconnect_()},finishReset:function(){if(this.state_!=st)throw Error("Can only finishReset after startReset");return this.state_=it,this.connect_(),this.value_},iterateObjects_:function(e){for(var t,n=0;n<this.observed_.length;n+=2)t=this.observed_[n],t!==pt&&this.observed_[n+1].iterateObjects(t,e)},check_:function(e,t){for(var n,r=0;r<this.observed_.length;r+=2){var o,i=this.observed_[r],s=this.observed_[r+1];if(i===pt){var c=s;o=this.state_===ot?c.open(this.deliver,this):c.discardChanges()}else o=s.getValueFrom(i);t?this.value_[r/2]=o:a(o,this.value_[r/2])||(n=n||[],n[r/2]=this.value_[r/2],this.value_[r/2]=o)}return n?(this.report_([this.value_,n,this.observed_]),!0):!1}}),D.prototype={open:function(e,t){return this.callback_=e,this.target_=t,this.value_=this.getValueFn_(this.observable_.open(this.observedCallback_,this)),this.value_},observedCallback_:function(e){if(e=this.getValueFn_(e),!a(e,this.value_)){var t=this.value_;this.value_=e,this.callback_.call(this.target_,this.value_,t)}},discardChanges:function(){return this.value_=this.getValueFn_(this.observable_.discardChanges()),this.value_},deliver:function(){return this.observable_.deliver()},setValue:function(e){return e=this.setValueFn_(e),!this.dontPassThroughSet_&&this.observable_.setValue?this.observable_.setValue(e):void 0},close:function(){this.observable_&&this.observable_.close(),this.callback_=void 0,this.target_=void 0,this.observable_=void 0,this.value_=void 0,this.getValueFn_=void 0,this.setValueFn_=void 0}};var ht={add:!0,update:!0,"delete":!0},ft=0,mt=1,vt=2,wt=3;R.prototype={calcEditDistances:function(e,t,n,r,o,i){for(var a=i-o+1,s=n-t+1,c=new Array(a),l=0;a>l;l++)c[l]=new Array(s),c[l][0]=l;for(var u=0;s>u;u++)c[0][u]=u;for(var l=1;a>l;l++)for(var u=1;s>u;u++)if(this.equals(e[t+u-1],r[o+l-1]))c[l][u]=c[l-1][u-1];else{var d=c[l-1][u]+1,p=c[l][u-1]+1;c[l][u]=p>d?d:p}return c},spliceOperationsFromEditDistances:function(e){for(var t=e.length-1,n=e[0].length-1,r=e[t][n],o=[];t>0||n>0;)if(0!=t)if(0!=n){var i,a=e[t-1][n-1],s=e[t-1][n],c=e[t][n-1];i=c>s?a>s?s:a:a>c?c:a,i==a?(a==r?o.push(ft):(o.push(mt),r=a),t--,n--):i==s?(o.push(wt),t--,r=s):(o.push(vt),n--,r=c)}else o.push(wt),t--;else o.push(vt),n--;return o.reverse(),o},calcSplices:function(e,t,n,r,o,i){var a=0,s=0,c=Math.min(n-t,i-o);if(0==t&&0==o&&(a=this.sharedPrefix(e,r,c)),n==e.length&&i==r.length&&(s=this.sharedSuffix(e,r,c-a)),t+=a,o+=a,n-=s,i-=s,n-t==0&&i-o==0)return[];if(t==n){for(var l=H(t,[],0);i>o;)l.removed.push(r[o++]);return[l]}if(o==i)return[H(t,[],n-t)];for(var u=this.spliceOperationsFromEditDistances(this.calcEditDistances(e,t,n,r,o,i)),l=void 0,d=[],p=t,h=o,f=0;f<u.length;f++)switch(u[f]){case ft:l&&(d.push(l),l=void 0),p++,h++;break;case mt:l||(l=H(p,[],0)),l.addedCount++,p++,l.removed.push(r[h]),h++;break;case vt:l||(l=H(p,[],0)),l.addedCount++,p++;break;case wt:l||(l=H(p,[],0)),l.removed.push(r[h]),h++}return l&&d.push(l),d},sharedPrefix:function(e,t,n){for(var r=0;n>r;r++)if(!this.equals(e[r],t[r]))return r;return n},sharedSuffix:function(e,t,n){for(var r=e.length,o=t.length,i=0;n>i&&this.equals(e[--r],t[--o]);)i++;return i},calculateSplices:function(e,t){return this.calcSplices(e,0,e.length,t,0,t.length)},equals:function(e,t){return e===t}};var gt=new R;e.Observer=S,e.Observer.runEOM_=tt,e.Observer.observerSentinel_=pt,e.Observer.hasObjectObserve=q,e.ArrayObserver=C,e.ArrayObserver.calculateSplices=function(e,t){return gt.calculateSplices(e,t)},e.ArraySplice=R,e.ObjectObserver=M,e.PathObserver=L,e.CompoundObserver=N,e.Path=d,e.ObserverTransform=D}("undefined"!=typeof global&&global&&"undefined"!=typeof module&&module?global:this||window),window.ShadowDOMPolyfill={},function(e){"use strict";function t(){if("undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime)return!1;if(navigator.getDeviceStorage)return!1;try{var e=new Function("return true;");return e()}catch(t){return!1}}function n(e){if(!e)throw new Error("Assertion failed")}function r(e,t){for(var n=F(t),r=0;r<n.length;r++){var o=n[r];A(e,o,W(t,o))}return e}function o(e,t){for(var n=F(t),r=0;r<n.length;r++){var o=n[r];switch(o){case"arguments":case"caller":case"length":case"name":case"prototype":case"toString":continue}A(e,o,W(t,o))}return e}function i(e,t){for(var n=0;n<t.length;n++)if(t[n]in e)return t[n]}function a(e,t,n){q.value=n,A(e,t,q)}function s(e){var t=e.__proto__||Object.getPrototypeOf(e),n=R.get(t);if(n)return n;var r=s(t),o=_(r);return g(t,o,e),o}function c(e,t){v(e,t,!0)}function l(e,t){v(t,e,!1)}function u(e){return/^on[a-z]+$/.test(e)}function d(e){return/^\w[a-zA-Z_0-9]*$/.test(e)}function p(e){return k&&d(e)?new Function("return this.__impl4cf1e782hg__."+e):function(){return this.__impl4cf1e782hg__[e]}}function h(e){return k&&d(e)?new Function("v","this.__impl4cf1e782hg__."+e+" = v"):function(t){this.__impl4cf1e782hg__[e]=t}}function f(e){return k&&d(e)?new Function("return this.__impl4cf1e782hg__."+e+".apply(this.__impl4cf1e782hg__, arguments)"):function(){return this.__impl4cf1e782hg__[e].apply(this.__impl4cf1e782hg__,arguments)}}function m(e,t){try{return Object.getOwnPropertyDescriptor(e,t)}catch(n){return B}}function v(t,n,r){for(var o=F(t),i=0;i<o.length;i++){var a=o[i];if("polymerBlackList_"!==a&&!(a in n||t.polymerBlackList_&&t.polymerBlackList_[a])){U&&t.__lookupGetter__(a);var s,c,l=m(t,a);if(r&&"function"==typeof l.value)n[a]=f(a);else{var d=u(a);s=d?e.getEventHandlerGetter(a):p(a),(l.writable||l.set||V)&&(c=d?e.getEventHandlerSetter(a):h(a)),A(n,a,{get:s,set:c,configurable:l.configurable,enumerable:l.enumerable})}}}}function w(e,t,n){var r=e.prototype;g(r,t,n),o(t,e)}function g(e,t,r){var o=t.prototype;n(void 0===R.get(e)),R.set(e,t),P.set(o,e),c(e,o),r&&l(o,r),a(o,"constructor",t),t.prototype=o}function b(e,t){return R.get(t.prototype)===e}function y(e){var t=Object.getPrototypeOf(e),n=s(t),r=_(n);return g(t,r,e),r}function _(e){function t(t){e.call(this,t)}var n=Object.create(e.prototype);return n.constructor=t,t.prototype=n,t}function E(e){return e&&e.__impl4cf1e782hg__}function S(e){return!E(e)}function O(e){return null===e?null:(n(S(e)),e.__wrapper8e3dd93a60__||(e.__wrapper8e3dd93a60__=new(s(e))(e)))}function T(e){return null===e?null:(n(E(e)),e.__impl4cf1e782hg__)}function M(e){return e.__impl4cf1e782hg__}function C(e,t){t.__impl4cf1e782hg__=e,e.__wrapper8e3dd93a60__=t}function L(e){return e&&E(e)?T(e):e}function N(e){return e&&!E(e)?O(e):e}function j(e,t){null!==t&&(n(S(e)),n(void 0===t||E(t)),e.__wrapper8e3dd93a60__=t)}function D(e,t,n){G.get=n,A(e.prototype,t,G)}function x(e,t){D(e,t,function(){return O(this.__impl4cf1e782hg__[t])})}function H(e,t){e.forEach(function(e){t.forEach(function(t){e.prototype[t]=function(){var e=N(this);return e[t].apply(e,arguments)}})})}var R=new WeakMap,P=new WeakMap,I=Object.create(null),k=t(),A=Object.defineProperty,F=Object.getOwnPropertyNames,W=Object.getOwnPropertyDescriptor,q={value:void 0,configurable:!0,enumerable:!1,writable:!0};F(window);var U=/Firefox/.test(navigator.userAgent),B={get:function(){},set:function(){},configurable:!0,enumerable:!0},V=function(){var e=Object.getOwnPropertyDescriptor(Node.prototype,"nodeType");return!!e&&"set"in e}(),G={get:void 0,configurable:!0,enumerable:!0};e.assert=n,e.constructorTable=R,e.defineGetter=D,e.defineWrapGetter=x,e.forwardMethodsToWrapper=H,e.isWrapper=E,e.isWrapperFor=b,e.mixin=r,e.nativePrototypeTable=P,e.oneOf=i,e.registerObject=y,e.registerWrapper=w,e.rewrap=j,e.setWrapper=C,e.unsafeUnwrap=M,e.unwrap=T,e.unwrapIfNeeded=L,e.wrap=O,e.wrapIfNeeded=N,e.wrappers=I}(window.ShadowDOMPolyfill),function(e){"use strict";function t(){a=!1;var e=i.slice(0);i=[];for(var t=0;t<e.length;t++)e[t]()}function n(e){i.push(e),a||(a=!0,r(t,0))}var r,o=window.MutationObserver,i=[],a=!1;if(o){var s=1,c=new o(t),l=document.createTextNode(s);c.observe(l,{characterData:!0}),r=function(){s=(s+1)%2,l.data=s}}else r=window.setImmediate||window.setTimeout;e.setEndOfMicrotask=n}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){e.scheduled_||(e.scheduled_=!0,f.push(e),m||(u(n),m=!0))}function n(){for(m=!1;f.length;){var e=f;f=[],e.sort(function(e,t){return e.uid_-t.uid_});for(var t=0;t<e.length;t++){var n=e[t];n.scheduled_=!1;var r=n.takeRecords();i(n),r.length&&n.callback_(r,n)}}}function r(e,t){this.type=e,this.target=t,this.addedNodes=new p.NodeList,this.removedNodes=new p.NodeList,this.previousSibling=null,this.nextSibling=null,this.attributeName=null,this.attributeNamespace=null,this.oldValue=null}function o(e,t){for(;e;e=e.parentNode){var n=h.get(e);if(n)for(var r=0;r<n.length;r++){var o=n[r];o.options.subtree&&o.addTransientObserver(t)}}}function i(e){for(var t=0;t<e.nodes_.length;t++){var n=e.nodes_[t],r=h.get(n);if(!r)return;for(var o=0;o<r.length;o++){var i=r[o];i.observer===e&&i.removeTransientObservers()}}}function a(e,n,o){for(var i=Object.create(null),a=Object.create(null),s=e;s;s=s.parentNode){var c=h.get(s);if(c)for(var l=0;l<c.length;l++){var u=c[l],d=u.options;if((s===e||d.subtree)&&!("attributes"===n&&!d.attributes||"attributes"===n&&d.attributeFilter&&(null!==o.namespace||-1===d.attributeFilter.indexOf(o.name))||"characterData"===n&&!d.characterData||"childList"===n&&!d.childList)){var p=u.observer;i[p.uid_]=p,("attributes"===n&&d.attributeOldValue||"characterData"===n&&d.characterDataOldValue)&&(a[p.uid_]=o.oldValue)}}}for(var f in i){var p=i[f],m=new r(n,e);"name"in o&&"namespace"in o&&(m.attributeName=o.name,m.attributeNamespace=o.namespace),o.addedNodes&&(m.addedNodes=o.addedNodes),o.removedNodes&&(m.removedNodes=o.removedNodes),o.previousSibling&&(m.previousSibling=o.previousSibling),o.nextSibling&&(m.nextSibling=o.nextSibling),void 0!==a[f]&&(m.oldValue=a[f]),t(p),p.records_.push(m)}}function s(e){if(this.childList=!!e.childList,this.subtree=!!e.subtree,this.attributes="attributes"in e||!("attributeOldValue"in e||"attributeFilter"in e)?!!e.attributes:!0,this.characterData="characterDataOldValue"in e&&!("characterData"in e)?!0:!!e.characterData,!this.attributes&&(e.attributeOldValue||"attributeFilter"in e)||!this.characterData&&e.characterDataOldValue)throw new TypeError;if(this.characterData=!!e.characterData,this.attributeOldValue=!!e.attributeOldValue,this.characterDataOldValue=!!e.characterDataOldValue,"attributeFilter"in e){if(null==e.attributeFilter||"object"!=typeof e.attributeFilter)throw new TypeError;this.attributeFilter=v.call(e.attributeFilter)}else this.attributeFilter=null}function c(e){this.callback_=e,this.nodes_=[],this.records_=[],this.uid_=++w,this.scheduled_=!1}function l(e,t,n){this.observer=e,this.target=t,this.options=n,this.transientObservedNodes=[]}var u=e.setEndOfMicrotask,d=e.wrapIfNeeded,p=e.wrappers,h=new WeakMap,f=[],m=!1,v=Array.prototype.slice,w=0;c.prototype={constructor:c,observe:function(e,t){e=d(e);var n,r=new s(t),o=h.get(e);o||h.set(e,o=[]);for(var i=0;i<o.length;i++)o[i].observer===this&&(n=o[i],n.removeTransientObservers(),n.options=r);n||(n=new l(this,e,r),o.push(n),this.nodes_.push(e))},disconnect:function(){this.nodes_.forEach(function(e){for(var t=h.get(e),n=0;n<t.length;n++){var r=t[n];if(r.observer===this){t.splice(n,1);break}}},this),this.records_=[]},takeRecords:function(){var e=this.records_;return this.records_=[],e}},l.prototype={addTransientObserver:function(e){if(e!==this.target){t(this.observer),this.transientObservedNodes.push(e);var n=h.get(e);n||h.set(e,n=[]),n.push(this)}},removeTransientObservers:function(){var e=this.transientObservedNodes;this.transientObservedNodes=[];for(var t=0;t<e.length;t++)for(var n=e[t],r=h.get(n),o=0;o<r.length;o++)if(r[o]===this){r.splice(o,1);break}}},e.enqueueMutation=a,e.registerTransientObservers=o,e.wrappers.MutationObserver=c,e.wrappers.MutationRecord=r}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e,t){this.root=e,this.parent=t}function n(e,t){if(e.treeScope_!==t){e.treeScope_=t;for(var r=e.shadowRoot;r;r=r.olderShadowRoot)r.treeScope_.parent=t;for(var o=e.firstChild;o;o=o.nextSibling)n(o,t)}}function r(n){if(n instanceof e.wrappers.Window,n.treeScope_)return n.treeScope_;var o,i=n.parentNode;return o=i?r(i):new t(n,null),n.treeScope_=o}t.prototype={get renderer(){return this.root instanceof e.wrappers.ShadowRoot?e.getRendererForHost(this.root.host):null},contains:function(e){for(;e;e=e.parent)if(e===this)return!0;return!1}},e.TreeScope=t,e.getTreeScope=r,e.setTreeScope=n}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){return e instanceof G.ShadowRoot}function n(e){return A(e).root}function r(e,r){var s=[],c=e;for(s.push(c);c;){var l=a(c);if(l&&l.length>0){for(var u=0;u<l.length;u++){var p=l[u];if(i(p)){var h=n(p),f=h.olderShadowRoot;f&&s.push(f)}s.push(p)}c=l[l.length-1]}else if(t(c)){if(d(e,c)&&o(r))break;c=c.host,s.push(c)}else c=c.parentNode,c&&s.push(c)}return s}function o(e){if(!e)return!1;switch(e.type){case"abort":case"error":case"select":case"change":case"load":case"reset":case"resize":case"scroll":case"selectstart":return!0}return!1}function i(e){return e instanceof HTMLShadowElement}function a(t){return e.getDestinationInsertionPoints(t)}function s(e,t){if(0===e.length)return t;t instanceof G.Window&&(t=t.document);for(var n=A(t),r=e[0],o=A(r),i=l(n,o),a=0;a<e.length;a++){var s=e[a];if(A(s)===i)return s}return e[e.length-1]}function c(e){for(var t=[];e;e=e.parent)t.push(e);return t}function l(e,t){for(var n=c(e),r=c(t),o=null;n.length>0&&r.length>0;){var i=n.pop(),a=r.pop();if(i!==a)break;o=i}return o}function u(e,t,n){t instanceof G.Window&&(t=t.document);var o,i=A(t),a=A(n),s=r(n,e),o=l(i,a);o||(o=a.root);for(var c=o;c;c=c.parent)for(var u=0;u<s.length;u++){var d=s[u];if(A(d)===c)return d}return null}function d(e,t){return A(e)===A(t)}function p(e){if(!K.get(e)&&(K.set(e,!0),f(V(e),V(e.target)),I)){var t=I;throw I=null,t}}function h(e){switch(e.type){case"load":case"beforeunload":case"unload":return!0}return!1}function f(t,n){if(Y.get(t))throw new Error("InvalidStateError");Y.set(t,!0),e.renderAllPending();var o,i,a;if(h(t)&&!t.bubbles){var s=n;s instanceof G.Document&&(a=s.defaultView)&&(i=s,o=[])}if(!o)if(n instanceof G.Window)a=n,o=[];else if(o=r(n,t),!h(t)){var s=o[o.length-1];s instanceof G.Document&&(a=s.defaultView)}return nt.set(t,o),m(t,o,a,i)&&v(t,o,a,i)&&w(t,o,a,i),$.set(t,rt),Q.delete(t,null),Y.delete(t),t.defaultPrevented}function m(e,t,n,r){var o=ot;if(n&&!g(n,e,o,t,r))return!1;for(var i=t.length-1;i>0;i--)if(!g(t[i],e,o,t,r))return!1;return!0}function v(e,t,n,r){var o=it,i=t[0]||n;return g(i,e,o,t,r)}function w(e,t,n,r){for(var o=at,i=1;i<t.length;i++)if(!g(t[i],e,o,t,r))return;n&&t.length>0&&g(n,e,o,t,r)}function g(e,t,n,r,o){var i=z.get(e);if(!i)return!0;var a=o||s(r,e);if(a===e){if(n===ot)return!0;n===at&&(n=it)}else if(n===at&&!t.bubbles)return!0;if("relatedTarget"in t){var c=B(t),l=c.relatedTarget;if(l){if(l instanceof Object&&l.addEventListener){var d=V(l),p=u(t,e,d);if(p===a)return!0}else p=null;Z.set(t,p)}}$.set(t,n);var h=t.type,f=!1;X.set(t,a),Q.set(t,e),i.depth++;for(var m=0,v=i.length;v>m;m++){var w=i[m];if(w.removed)f=!0;else if(!(w.type!==h||!w.capture&&n===ot||w.capture&&n===at))try{if("function"==typeof w.handler?w.handler.call(e,t):w.handler.handleEvent(t),et.get(t))return!1}catch(g){I||(I=g)}}if(i.depth--,f&&0===i.depth){var b=i.slice();i.length=0;for(var m=0;m<b.length;m++)b[m].removed||i.push(b[m])}return!J.get(t)}function b(e,t,n){this.type=e,this.handler=t,this.capture=Boolean(n)}function y(e,t){if(!(e instanceof st))return V(O(st,"Event",e,t));var n=e;return gt||"beforeunload"!==n.type||this instanceof T?void q(n,this):new T(n)}function _(e){return e&&e.relatedTarget?Object.create(e,{relatedTarget:{value:B(e.relatedTarget)}}):e}function E(e,t,n){var r=window[e],o=function(t,n){return t instanceof r?void q(t,this):V(O(r,e,t,n))};if(o.prototype=Object.create(t.prototype),n&&F(o.prototype,n),r)try{W(r,o,new r("temp"))}catch(i){W(r,o,document.createEvent(e))}return o}function S(e,t){return function(){arguments[t]=B(arguments[t]);var n=B(this);n[e].apply(n,arguments)}}function O(e,t,n,r){if(vt)return new e(n,_(r));var o=B(document.createEvent(t)),i=mt[t],a=[n];return Object.keys(i).forEach(function(e){var t=null!=r&&e in r?r[e]:i[e];"relatedTarget"===e&&(t=B(t)),a.push(t)}),o["init"+t].apply(o,a),o}function T(e){y.call(this,e)}function M(e){return"function"==typeof e?!0:e&&e.handleEvent}function C(e){switch(e){case"DOMAttrModified":case"DOMAttributeNameChanged":case"DOMCharacterDataModified":case"DOMElementNameChanged":case"DOMNodeInserted":case"DOMNodeInsertedIntoDocument":case"DOMNodeRemoved":case"DOMNodeRemovedFromDocument":case"DOMSubtreeModified":return!0}return!1}function L(e){q(e,this)}function N(e){return e instanceof G.ShadowRoot&&(e=e.host),B(e)}function j(e,t){var n=z.get(e);if(n)for(var r=0;r<n.length;r++)if(!n[r].removed&&n[r].type===t)return!0;return!1}function D(e,t){for(var n=B(e);n;n=n.parentNode)if(j(V(n),t))return!0;return!1}function x(e){k(e,yt)}function H(t,n,o,i){e.renderAllPending();var a=V(_t.call(U(n),o,i));if(!a)return null;var c=r(a,null),l=c.lastIndexOf(t);return-1==l?null:(c=c.slice(0,l),s(c,t))}function R(e){return function(){var t=tt.get(this);
return t&&t[e]&&t[e].value||null}}function P(e){var t=e.slice(2);return function(n){var r=tt.get(this);r||(r=Object.create(null),tt.set(this,r));var o=r[e];if(o&&this.removeEventListener(t,o.wrapped,!1),"function"==typeof n){var i=function(t){var r=n.call(this,t);r===!1?t.preventDefault():"onbeforeunload"===e&&"string"==typeof r&&(t.returnValue=r)};this.addEventListener(t,i,!1),r[e]={value:n,wrapped:i}}}}var I,k=e.forwardMethodsToWrapper,A=e.getTreeScope,F=e.mixin,W=e.registerWrapper,q=e.setWrapper,U=e.unsafeUnwrap,B=e.unwrap,V=e.wrap,G=e.wrappers,z=(new WeakMap,new WeakMap),K=new WeakMap,Y=new WeakMap,X=new WeakMap,Q=new WeakMap,Z=new WeakMap,$=new WeakMap,J=new WeakMap,et=new WeakMap,tt=new WeakMap,nt=new WeakMap,rt=0,ot=1,it=2,at=3;b.prototype={equals:function(e){return this.handler===e.handler&&this.type===e.type&&this.capture===e.capture},get removed(){return null===this.handler},remove:function(){this.handler=null}};var st=window.Event;st.prototype.polymerBlackList_={returnValue:!0,keyLocation:!0},y.prototype={get target(){return X.get(this)},get currentTarget(){return Q.get(this)},get eventPhase(){return $.get(this)},get path(){var e=nt.get(this);return e?e.slice():[]},stopPropagation:function(){J.set(this,!0)},stopImmediatePropagation:function(){J.set(this,!0),et.set(this,!0)}},W(st,y,document.createEvent("Event"));var ct=E("UIEvent",y),lt=E("CustomEvent",y),ut={get relatedTarget(){var e=Z.get(this);return void 0!==e?e:V(B(this).relatedTarget)}},dt=F({initMouseEvent:S("initMouseEvent",14)},ut),pt=F({initFocusEvent:S("initFocusEvent",5)},ut),ht=E("MouseEvent",ct,dt),ft=E("FocusEvent",ct,pt),mt=Object.create(null),vt=function(){try{new window.FocusEvent("focus")}catch(e){return!1}return!0}();if(!vt){var wt=function(e,t,n){if(n){var r=mt[n];t=F(F({},r),t)}mt[e]=t};wt("Event",{bubbles:!1,cancelable:!1}),wt("CustomEvent",{detail:null},"Event"),wt("UIEvent",{view:null,detail:0},"Event"),wt("MouseEvent",{screenX:0,screenY:0,clientX:0,clientY:0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,button:0,relatedTarget:null},"UIEvent"),wt("FocusEvent",{relatedTarget:null},"UIEvent")}var gt=window.BeforeUnloadEvent;T.prototype=Object.create(y.prototype),F(T.prototype,{get returnValue(){return U(this).returnValue},set returnValue(e){U(this).returnValue=e}}),gt&&W(gt,T);var bt=window.EventTarget,yt=["addEventListener","removeEventListener","dispatchEvent"];[Node,Window].forEach(function(e){var t=e.prototype;yt.forEach(function(e){Object.defineProperty(t,e+"_",{value:t[e]})})}),L.prototype={addEventListener:function(e,t,n){if(M(t)&&!C(e)){var r=new b(e,t,n),o=z.get(this);if(o){for(var i=0;i<o.length;i++)if(r.equals(o[i]))return}else o=[],o.depth=0,z.set(this,o);o.push(r);var a=N(this);a.addEventListener_(e,p,!0)}},removeEventListener:function(e,t,n){n=Boolean(n);var r=z.get(this);if(r){for(var o=0,i=!1,a=0;a<r.length;a++)r[a].type===e&&r[a].capture===n&&(o++,r[a].handler===t&&(i=!0,r[a].remove()));if(i&&1===o){var s=N(this);s.removeEventListener_(e,p,!0)}}},dispatchEvent:function(t){var n=B(t),r=n.type;K.set(n,!1),e.renderAllPending();var o;D(this,r)||(o=function(){},this.addEventListener(r,o,!0));try{return B(this).dispatchEvent_(n)}finally{o&&this.removeEventListener(r,o,!0)}}},bt&&W(bt,L);var _t=document.elementFromPoint;e.elementFromPoint=H,e.getEventHandlerGetter=R,e.getEventHandlerSetter=P,e.wrapEventTargetMethods=x,e.wrappers.BeforeUnloadEvent=T,e.wrappers.CustomEvent=lt,e.wrappers.Event=y,e.wrappers.EventTarget=L,e.wrappers.FocusEvent=ft,e.wrappers.MouseEvent=ht,e.wrappers.UIEvent=ct}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e,t){Object.defineProperty(e,t,m)}function n(e){l(e,this)}function r(){this.length=0,t(this,"length")}function o(e){for(var t=new r,o=0;o<e.length;o++)t[o]=new n(e[o]);return t.length=o,t}function i(e){a.call(this,e)}var a=e.wrappers.UIEvent,s=e.mixin,c=e.registerWrapper,l=e.setWrapper,u=e.unsafeUnwrap,d=e.wrap,p=window.TouchEvent;if(p){var h;try{h=document.createEvent("TouchEvent")}catch(f){return}var m={enumerable:!1};n.prototype={get target(){return d(u(this).target)}};var v={configurable:!0,enumerable:!0,get:null};["clientX","clientY","screenX","screenY","pageX","pageY","identifier","webkitRadiusX","webkitRadiusY","webkitRotationAngle","webkitForce"].forEach(function(e){v.get=function(){return u(this)[e]},Object.defineProperty(n.prototype,e,v)}),r.prototype={item:function(e){return this[e]}},i.prototype=Object.create(a.prototype),s(i.prototype,{get touches(){return o(u(this).touches)},get targetTouches(){return o(u(this).targetTouches)},get changedTouches(){return o(u(this).changedTouches)},initTouchEvent:function(){throw new Error("Not implemented")}}),c(p,i,h),e.wrappers.Touch=n,e.wrappers.TouchEvent=i,e.wrappers.TouchList=r}}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e,t){Object.defineProperty(e,t,s)}function n(){this.length=0,t(this,"length")}function r(e){if(null==e)return e;for(var t=new n,r=0,o=e.length;o>r;r++)t[r]=a(e[r]);return t.length=o,t}function o(e,t){e.prototype[t]=function(){return r(i(this)[t].apply(i(this),arguments))}}var i=e.unsafeUnwrap,a=e.wrap,s={enumerable:!1};n.prototype={item:function(e){return this[e]}},t(n.prototype,"item"),e.wrappers.NodeList=n,e.addWrapNodeListMethod=o,e.wrapNodeList=r}(window.ShadowDOMPolyfill),function(e){"use strict";e.wrapHTMLCollection=e.wrapNodeList,e.wrappers.HTMLCollection=e.wrappers.NodeList}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){M(e instanceof E)}function n(e){var t=new O;return t[0]=e,t.length=1,t}function r(e,t,n){L(t,"childList",{removedNodes:n,previousSibling:e.previousSibling,nextSibling:e.nextSibling})}function o(e,t){L(e,"childList",{removedNodes:t})}function i(e,t,r,o){if(e instanceof DocumentFragment){var i=s(e);q=!0;for(var a=i.length-1;a>=0;a--)e.removeChild(i[a]),i[a].parentNode_=t;q=!1;for(var a=0;a<i.length;a++)i[a].previousSibling_=i[a-1]||r,i[a].nextSibling_=i[a+1]||o;return r&&(r.nextSibling_=i[0]),o&&(o.previousSibling_=i[i.length-1]),i}var i=n(e),c=e.parentNode;return c&&c.removeChild(e),e.parentNode_=t,e.previousSibling_=r,e.nextSibling_=o,r&&(r.nextSibling_=e),o&&(o.previousSibling_=e),i}function a(e){if(e instanceof DocumentFragment)return s(e);var t=n(e),o=e.parentNode;return o&&r(e,o,t),t}function s(e){for(var t=new O,n=0,r=e.firstChild;r;r=r.nextSibling)t[n++]=r;return t.length=n,o(e,t),t}function c(e){return e}function l(e,t){R(e,t),e.nodeIsInserted_()}function u(e,t){for(var n=N(t),r=0;r<e.length;r++)l(e[r],n)}function d(e){R(e,new T(e,null))}function p(e){for(var t=0;t<e.length;t++)d(e[t])}function h(e,t){var n=e.nodeType===E.DOCUMENT_NODE?e:e.ownerDocument;n!==t.ownerDocument&&n.adoptNode(t)}function f(t,n){if(n.length){var r=t.ownerDocument;if(r!==n[0].ownerDocument)for(var o=0;o<n.length;o++)e.adoptNodeNoRemove(n[o],r)}}function m(e,t){f(e,t);var n=t.length;if(1===n)return I(t[0]);for(var r=I(e.ownerDocument.createDocumentFragment()),o=0;n>o;o++)r.appendChild(I(t[o]));return r}function v(e){if(void 0!==e.firstChild_)for(var t=e.firstChild_;t;){var n=t;t=t.nextSibling_,n.parentNode_=n.previousSibling_=n.nextSibling_=void 0}e.firstChild_=e.lastChild_=void 0}function w(e){if(e.invalidateShadowRenderer()){for(var t=e.firstChild;t;){M(t.parentNode===e);var n=t.nextSibling,r=I(t),o=r.parentNode;o&&Y.call(o,r),t.previousSibling_=t.nextSibling_=t.parentNode_=null,t=n}e.firstChild_=e.lastChild_=null}else for(var n,i=I(e),a=i.firstChild;a;)n=a.nextSibling,Y.call(i,a),a=n}function g(e){var t=e.parentNode;return t&&t.invalidateShadowRenderer()}function b(e){for(var t,n=0;n<e.length;n++)t=e[n],t.parentNode.removeChild(t)}function y(e,t,n){var r;if(r=A(n?U.call(n,P(e),!1):B.call(P(e),!1)),t){for(var o=e.firstChild;o;o=o.nextSibling)r.appendChild(y(o,!0,n));if(e instanceof W.HTMLTemplateElement)for(var i=r.content,o=e.content.firstChild;o;o=o.nextSibling)i.appendChild(y(o,!0,n))}return r}function _(e,t){if(!t||N(e)!==N(t))return!1;for(var n=t;n;n=n.parentNode)if(n===e)return!0;return!1}function E(e){M(e instanceof V),S.call(this,e),this.parentNode_=void 0,this.firstChild_=void 0,this.lastChild_=void 0,this.nextSibling_=void 0,this.previousSibling_=void 0,this.treeScope_=void 0}var S=e.wrappers.EventTarget,O=e.wrappers.NodeList,T=e.TreeScope,M=e.assert,C=e.defineWrapGetter,L=e.enqueueMutation,N=e.getTreeScope,j=e.isWrapper,D=e.mixin,x=e.registerTransientObservers,H=e.registerWrapper,R=e.setTreeScope,P=e.unsafeUnwrap,I=e.unwrap,k=e.unwrapIfNeeded,A=e.wrap,F=e.wrapIfNeeded,W=e.wrappers,q=!1,U=document.importNode,B=window.Node.prototype.cloneNode,V=window.Node,G=window.DocumentFragment,z=(V.prototype.appendChild,V.prototype.compareDocumentPosition),K=V.prototype.insertBefore,Y=V.prototype.removeChild,X=V.prototype.replaceChild,Q=/Trident/.test(navigator.userAgent),Z=Q?function(e,t){try{Y.call(e,t)}catch(n){if(!(e instanceof G))throw n}}:function(e,t){Y.call(e,t)};E.prototype=Object.create(S.prototype),D(E.prototype,{appendChild:function(e){return this.insertBefore(e,null)},insertBefore:function(e,n){t(e);var r;n?j(n)?r=I(n):(r=n,n=A(r)):(n=null,r=null),n&&M(n.parentNode===this);var o,s=n?n.previousSibling:this.lastChild,c=!this.invalidateShadowRenderer()&&!g(e);if(o=c?a(e):i(e,this,s,n),c)h(this,e),v(this),K.call(P(this),I(e),r);else{s||(this.firstChild_=o[0]),n||(this.lastChild_=o[o.length-1],void 0===this.firstChild_&&(this.firstChild_=this.firstChild));var l=r?r.parentNode:P(this);l?K.call(l,m(this,o),r):f(this,o)}return L(this,"childList",{addedNodes:o,nextSibling:n,previousSibling:s}),u(o,this),e},removeChild:function(e){if(t(e),e.parentNode!==this){for(var r=!1,o=(this.childNodes,this.firstChild);o;o=o.nextSibling)if(o===e){r=!0;break}if(!r)throw new Error("NotFoundError")}var i=I(e),a=e.nextSibling,s=e.previousSibling;if(this.invalidateShadowRenderer()){var c=this.firstChild,l=this.lastChild,u=i.parentNode;u&&Z(u,i),c===e&&(this.firstChild_=a),l===e&&(this.lastChild_=s),s&&(s.nextSibling_=a),a&&(a.previousSibling_=s),e.previousSibling_=e.nextSibling_=e.parentNode_=void 0}else v(this),Z(P(this),i);return q||L(this,"childList",{removedNodes:n(e),nextSibling:a,previousSibling:s}),x(this,e),e},replaceChild:function(e,r){t(e);var o;if(j(r)?o=I(r):(o=r,r=A(o)),r.parentNode!==this)throw new Error("NotFoundError");var s,c=r.nextSibling,l=r.previousSibling,p=!this.invalidateShadowRenderer()&&!g(e);return p?s=a(e):(c===e&&(c=e.nextSibling),s=i(e,this,l,c)),p?(h(this,e),v(this),X.call(P(this),I(e),o)):(this.firstChild===r&&(this.firstChild_=s[0]),this.lastChild===r&&(this.lastChild_=s[s.length-1]),r.previousSibling_=r.nextSibling_=r.parentNode_=void 0,o.parentNode&&X.call(o.parentNode,m(this,s),o)),L(this,"childList",{addedNodes:s,removedNodes:n(r),nextSibling:c,previousSibling:l}),d(r),u(s,this),r},nodeIsInserted_:function(){for(var e=this.firstChild;e;e=e.nextSibling)e.nodeIsInserted_()},hasChildNodes:function(){return null!==this.firstChild},get parentNode(){return void 0!==this.parentNode_?this.parentNode_:A(P(this).parentNode)},get firstChild(){return void 0!==this.firstChild_?this.firstChild_:A(P(this).firstChild)},get lastChild(){return void 0!==this.lastChild_?this.lastChild_:A(P(this).lastChild)},get nextSibling(){return void 0!==this.nextSibling_?this.nextSibling_:A(P(this).nextSibling)},get previousSibling(){return void 0!==this.previousSibling_?this.previousSibling_:A(P(this).previousSibling)},get parentElement(){for(var e=this.parentNode;e&&e.nodeType!==E.ELEMENT_NODE;)e=e.parentNode;return e},get textContent(){for(var e="",t=this.firstChild;t;t=t.nextSibling)t.nodeType!=E.COMMENT_NODE&&(e+=t.textContent);return e},set textContent(e){var t=c(this.childNodes);if(this.invalidateShadowRenderer()){if(w(this),""!==e){var n=P(this).ownerDocument.createTextNode(e);this.appendChild(n)}}else v(this),P(this).textContent=e;var r=c(this.childNodes);L(this,"childList",{addedNodes:r,removedNodes:t}),p(t),u(r,this)},get childNodes(){for(var e=new O,t=0,n=this.firstChild;n;n=n.nextSibling)e[t++]=n;return e.length=t,e},cloneNode:function(e){return y(this,e)},contains:function(e){return _(this,F(e))},compareDocumentPosition:function(e){return z.call(P(this),k(e))},normalize:function(){for(var e,t,n=c(this.childNodes),r=[],o="",i=0;i<n.length;i++)t=n[i],t.nodeType===E.TEXT_NODE?e||t.data.length?e?(o+=t.data,r.push(t)):e=t:this.removeNode(t):(e&&r.length&&(e.data+=o,b(r)),r=[],o="",e=null,t.childNodes.length&&t.normalize());e&&r.length&&(e.data+=o,b(r))}}),C(E,"ownerDocument"),H(V,E,document.createDocumentFragment()),delete E.prototype.querySelector,delete E.prototype.querySelectorAll,E.prototype=D(Object.create(S.prototype),E.prototype),e.cloneNode=y,e.nodeWasAdded=l,e.nodeWasRemoved=d,e.nodesWereAdded=u,e.nodesWereRemoved=p,e.originalInsertBefore=K,e.originalRemoveChild=Y,e.snapshotNodeList=c,e.wrappers.Node=E}(window.ShadowDOMPolyfill),function(e){"use strict";function t(t,n,r,o){for(var i=null,a=null,s=0,c=t.length;c>s;s++)i=g(t[s]),!o&&(a=v(i).root)&&a instanceof e.wrappers.ShadowRoot||(r[n++]=i);return n}function n(e){return String(e).replace(/\/deep\//g," ")}function r(e,t){for(var n,o=e.firstElementChild;o;){if(o.matches(t))return o;if(n=r(o,t))return n;o=o.nextElementSibling}return null}function o(e,t){return e.matches(t)}function i(e,t,n){var r=e.localName;return r===t||r===n&&e.namespaceURI===N}function a(){return!0}function s(e,t,n){return e.localName===n}function c(e,t){return e.namespaceURI===t}function l(e,t,n){return e.namespaceURI===t&&e.localName===n}function u(e,t,n,r,o,i){for(var a=e.firstElementChild;a;)r(a,o,i)&&(n[t++]=a),t=u(a,t,n,r,o,i),a=a.nextElementSibling;return t}function d(n,r,o,i,a){var s,c=w(this),l=v(this).root;if(l instanceof e.wrappers.ShadowRoot)return u(this,r,o,n,i,null);if(c instanceof C)s=E.call(c,i);else{if(!(c instanceof L))return u(this,r,o,n,i,null);s=_.call(c,i)}return t(s,r,o,a)}function p(n,r,o,i,a){var s,c=w(this),l=v(this).root;if(l instanceof e.wrappers.ShadowRoot)return u(this,r,o,n,i,a);if(c instanceof C)s=O.call(c,i,a);else{if(!(c instanceof L))return u(this,r,o,n,i,a);s=S.call(c,i,a)}return t(s,r,o,!1)}function h(n,r,o,i,a){var s,c=w(this),l=v(this).root;if(l instanceof e.wrappers.ShadowRoot)return u(this,r,o,n,i,a);if(c instanceof C)s=M.call(c,i,a);else{if(!(c instanceof L))return u(this,r,o,n,i,a);s=T.call(c,i,a)}return t(s,r,o,!1)}var f=e.wrappers.HTMLCollection,m=e.wrappers.NodeList,v=e.getTreeScope,w=e.unsafeUnwrap,g=e.wrap,b=document.querySelector,y=document.documentElement.querySelector,_=document.querySelectorAll,E=document.documentElement.querySelectorAll,S=document.getElementsByTagName,O=document.documentElement.getElementsByTagName,T=document.getElementsByTagNameNS,M=document.documentElement.getElementsByTagNameNS,C=window.Element,L=window.HTMLDocument||window.Document,N="http://www.w3.org/1999/xhtml",j={querySelector:function(t){var o=n(t),i=o!==t;t=o;var a,s=w(this),c=v(this).root;if(c instanceof e.wrappers.ShadowRoot)return r(this,t);if(s instanceof C)a=g(y.call(s,t));else{if(!(s instanceof L))return r(this,t);a=g(b.call(s,t))}return a&&!i&&(c=v(a).root)&&c instanceof e.wrappers.ShadowRoot?r(this,t):a},querySelectorAll:function(e){var t=n(e),r=t!==e;e=t;var i=new m;return i.length=d.call(this,o,0,i,e,r),i}},D={getElementsByTagName:function(e){var t=new f,n="*"===e?a:i;return t.length=p.call(this,n,0,t,e,e.toLowerCase()),t},getElementsByClassName:function(e){return this.querySelectorAll("."+e)},getElementsByTagNameNS:function(e,t){var n=new f,r=null;return r="*"===e?"*"===t?a:s:"*"===t?c:l,n.length=h.call(this,r,0,n,e||null,t),n}};e.GetElementsByInterface=D,e.SelectorsInterface=j}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){for(;e&&e.nodeType!==Node.ELEMENT_NODE;)e=e.nextSibling;return e}function n(e){for(;e&&e.nodeType!==Node.ELEMENT_NODE;)e=e.previousSibling;return e}var r=e.wrappers.NodeList,o={get firstElementChild(){return t(this.firstChild)},get lastElementChild(){return n(this.lastChild)},get childElementCount(){for(var e=0,t=this.firstElementChild;t;t=t.nextElementSibling)e++;return e},get children(){for(var e=new r,t=0,n=this.firstElementChild;n;n=n.nextElementSibling)e[t++]=n;return e.length=t,e},remove:function(){var e=this.parentNode;e&&e.removeChild(this)}},i={get nextElementSibling(){return t(this.nextSibling)},get previousElementSibling(){return n(this.previousSibling)}};e.ChildNodeInterface=i,e.ParentNodeInterface=o}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){r.call(this,e)}var n=e.ChildNodeInterface,r=e.wrappers.Node,o=e.enqueueMutation,i=e.mixin,a=e.registerWrapper,s=e.unsafeUnwrap,c=window.CharacterData;t.prototype=Object.create(r.prototype),i(t.prototype,{get textContent(){return this.data},set textContent(e){this.data=e},get data(){return s(this).data},set data(e){var t=s(this).data;o(this,"characterData",{oldValue:t}),s(this).data=e}}),i(t.prototype,n),a(c,t,document.createTextNode("")),e.wrappers.CharacterData=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){return e>>>0}function n(e){r.call(this,e)}var r=e.wrappers.CharacterData,o=(e.enqueueMutation,e.mixin),i=e.registerWrapper,a=window.Text;n.prototype=Object.create(r.prototype),o(n.prototype,{splitText:function(e){e=t(e);var n=this.data;if(e>n.length)throw new Error("IndexSizeError");var r=n.slice(0,e),o=n.slice(e);this.data=r;var i=this.ownerDocument.createTextNode(o);return this.parentNode&&this.parentNode.insertBefore(i,this.nextSibling),i}}),i(a,n,document.createTextNode("")),e.wrappers.Text=n}(window.ShadowDOMPolyfill),function(e){"use strict";function t(t){e.invalidateRendererBasedOnAttribute(t,"class")}function n(e,t){r(e,this),this.ownerElement_=t}var r=e.setWrapper,o=e.unsafeUnwrap;n.prototype={constructor:n,get length(){return o(this).length},item:function(e){return o(this).item(e)},contains:function(e){return o(this).contains(e)},add:function(){o(this).add.apply(o(this),arguments),t(this.ownerElement_)},remove:function(){o(this).remove.apply(o(this),arguments),t(this.ownerElement_)},toggle:function(){var e=o(this).toggle.apply(o(this),arguments);return t(this.ownerElement_),e},toString:function(){return o(this).toString()}},e.wrappers.DOMTokenList=n}(window.ShadowDOMPolyfill),function(e){"use strict";function t(t,n){var r=t.parentNode;if(r&&r.shadowRoot){var o=e.getRendererForHost(r);o.dependsOnAttribute(n)&&o.invalidate()}}function n(e,t,n){u(e,"attributes",{name:t,namespace:null,oldValue:n})}function r(e){a.call(this,e)}var o=e.ChildNodeInterface,i=e.GetElementsByInterface,a=e.wrappers.Node,s=e.wrappers.DOMTokenList,c=e.ParentNodeInterface,l=e.SelectorsInterface,u=(e.addWrapNodeListMethod,e.enqueueMutation),d=e.mixin,p=(e.oneOf,e.registerWrapper),h=e.unsafeUnwrap,f=e.wrappers,m=window.Element,v=["matches","mozMatchesSelector","msMatchesSelector","webkitMatchesSelector"].filter(function(e){return m.prototype[e]}),w=v[0],g=m.prototype[w],b=new WeakMap;r.prototype=Object.create(a.prototype),d(r.prototype,{createShadowRoot:function(){var t=new f.ShadowRoot(this);h(this).polymerShadowRoot_=t;var n=e.getRendererForHost(this);return n.invalidate(),t},get shadowRoot(){return h(this).polymerShadowRoot_||null},setAttribute:function(e,r){var o=h(this).getAttribute(e);h(this).setAttribute(e,r),n(this,e,o),t(this,e)},removeAttribute:function(e){var r=h(this).getAttribute(e);h(this).removeAttribute(e),n(this,e,r),t(this,e)},matches:function(e){return g.call(h(this),e)},get classList(){var e=b.get(this);return e||b.set(this,e=new s(h(this).classList,this)),e},get className(){return h(this).className},set className(e){this.setAttribute("class",e)},get id(){return h(this).id},set id(e){this.setAttribute("id",e)}}),v.forEach(function(e){"matches"!==e&&(r.prototype[e]=function(e){return this.matches(e)})}),m.prototype.webkitCreateShadowRoot&&(r.prototype.webkitCreateShadowRoot=r.prototype.createShadowRoot),d(r.prototype,o),d(r.prototype,i),d(r.prototype,c),d(r.prototype,l),p(m,r,document.createElementNS(null,"x")),e.invalidateRendererBasedOnAttribute=t,e.matchesNames=v,e.wrappers.Element=r}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){switch(e){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";case'"':return"&quot;";case" ":return"&nbsp;"}}function n(e){return e.replace(M,t)}function r(e){return e.replace(C,t)}function o(e){for(var t={},n=0;n<e.length;n++)t[e[n]]=!0;return t}function i(e,t){switch(e.nodeType){case Node.ELEMENT_NODE:for(var o,i=e.tagName.toLowerCase(),s="<"+i,c=e.attributes,l=0;o=c[l];l++)s+=" "+o.name+'="'+n(o.value)+'"';return s+=">",L[i]?s:s+a(e)+"</"+i+">";case Node.TEXT_NODE:var u=e.data;return t&&N[t.localName]?u:r(u);case Node.COMMENT_NODE:return"<!--"+e.data+"-->";default:throw console.error(e),new Error("not implemented")}}function a(e){e instanceof T.HTMLTemplateElement&&(e=e.content);for(var t="",n=e.firstChild;n;n=n.nextSibling)t+=i(n,e);return t}function s(e,t,n){var r=n||"div";e.textContent="";var o=S(e.ownerDocument.createElement(r));o.innerHTML=t;for(var i;i=o.firstChild;)e.appendChild(O(i))}function c(e){f.call(this,e)}function l(e,t){var n=S(e.cloneNode(!1));n.innerHTML=t;for(var r,o=S(document.createDocumentFragment());r=n.firstChild;)o.appendChild(r);return O(o)}function u(t){return function(){return e.renderAllPending(),E(this)[t]}}function d(e){m(c,e,u(e))}function p(t){Object.defineProperty(c.prototype,t,{get:u(t),set:function(n){e.renderAllPending(),E(this)[t]=n},configurable:!0,enumerable:!0})}function h(t){Object.defineProperty(c.prototype,t,{value:function(){return e.renderAllPending(),E(this)[t].apply(E(this),arguments)},configurable:!0,enumerable:!0})}var f=e.wrappers.Element,m=e.defineGetter,v=e.enqueueMutation,w=e.mixin,g=e.nodesWereAdded,b=e.nodesWereRemoved,y=e.registerWrapper,_=e.snapshotNodeList,E=e.unsafeUnwrap,S=e.unwrap,O=e.wrap,T=e.wrappers,M=/[&\u00A0"]/g,C=/[&\u00A0<>]/g,L=o(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]),N=o(["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"]),j=/MSIE/.test(navigator.userAgent),D=window.HTMLElement,x=window.HTMLTemplateElement;c.prototype=Object.create(f.prototype),w(c.prototype,{get innerHTML(){return a(this)},set innerHTML(e){if(j&&N[this.localName])return void(this.textContent=e);var t=_(this.childNodes);this.invalidateShadowRenderer()?this instanceof T.HTMLTemplateElement?s(this.content,e):s(this,e,this.tagName):!x&&this instanceof T.HTMLTemplateElement?s(this.content,e):E(this).innerHTML=e;var n=_(this.childNodes);v(this,"childList",{addedNodes:n,removedNodes:t}),b(t),g(n,this)},get outerHTML(){return i(this,this.parentNode)},set outerHTML(e){var t=this.parentNode;if(t){t.invalidateShadowRenderer();var n=l(t,e);t.replaceChild(n,this)}},insertAdjacentHTML:function(e,t){var n,r;switch(String(e).toLowerCase()){case"beforebegin":n=this.parentNode,r=this;break;case"afterend":n=this.parentNode,r=this.nextSibling;break;case"afterbegin":n=this,r=this.firstChild;break;case"beforeend":n=this,r=null;break;default:return}var o=l(n,t);n.insertBefore(o,r)},get hidden(){return this.hasAttribute("hidden")},set hidden(e){e?this.setAttribute("hidden",""):this.removeAttribute("hidden")}}),["clientHeight","clientLeft","clientTop","clientWidth","offsetHeight","offsetLeft","offsetTop","offsetWidth","scrollHeight","scrollWidth"].forEach(d),["scrollLeft","scrollTop"].forEach(p),["getBoundingClientRect","getClientRects","scrollIntoView"].forEach(h),y(D,c,document.createElement("b")),e.wrappers.HTMLElement=c,e.getInnerHTML=a,e.setInnerHTML=s}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=e.unsafeUnwrap,a=e.wrap,s=window.HTMLCanvasElement;t.prototype=Object.create(n.prototype),r(t.prototype,{getContext:function(){var e=i(this).getContext.apply(i(this),arguments);return e&&a(e)}}),o(s,t,document.createElement("canvas")),e.wrappers.HTMLCanvasElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=window.HTMLContentElement;t.prototype=Object.create(n.prototype),r(t.prototype,{constructor:t,get select(){return this.getAttribute("select")},set select(e){this.setAttribute("select",e)},setAttribute:function(e,t){n.prototype.setAttribute.call(this,e,t),"select"===String(e).toLowerCase()&&this.invalidateShadowRenderer(!0)}}),i&&o(i,t),e.wrappers.HTMLContentElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=e.wrapHTMLCollection,a=e.unwrap,s=window.HTMLFormElement;t.prototype=Object.create(n.prototype),r(t.prototype,{get elements(){return i(a(this).elements)}}),o(s,t,document.createElement("form")),e.wrappers.HTMLFormElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){r.call(this,e)}function n(e,t){if(!(this instanceof n))throw new TypeError("DOM object constructor cannot be called as a function.");var o=i(document.createElement("img"));r.call(this,o),a(o,this),void 0!==e&&(o.width=e),void 0!==t&&(o.height=t)}var r=e.wrappers.HTMLElement,o=e.registerWrapper,i=e.unwrap,a=e.rewrap,s=window.HTMLImageElement;t.prototype=Object.create(r.prototype),o(s,t,document.createElement("img")),n.prototype=t.prototype,e.wrappers.HTMLImageElement=t,e.wrappers.Image=n}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=(e.mixin,e.wrappers.NodeList,e.registerWrapper),o=window.HTMLShadowElement;t.prototype=Object.create(n.prototype),t.prototype.constructor=t,o&&r(o,t),e.wrappers.HTMLShadowElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){if(!e.defaultView)return e;var t=d.get(e);if(!t){for(t=e.implementation.createHTMLDocument("");t.lastChild;)t.removeChild(t.lastChild);d.set(e,t)}return t}function n(e){for(var n,r=t(e.ownerDocument),o=c(r.createDocumentFragment());n=e.firstChild;)o.appendChild(n);return o}function r(e){if(o.call(this,e),!p){var t=n(e);u.set(this,l(t))}}var o=e.wrappers.HTMLElement,i=e.mixin,a=e.registerWrapper,s=e.unsafeUnwrap,c=e.unwrap,l=e.wrap,u=new WeakMap,d=new WeakMap,p=window.HTMLTemplateElement;r.prototype=Object.create(o.prototype),i(r.prototype,{constructor:r,get content(){return p?l(s(this).content):u.get(this)}}),p&&a(p,r),e.wrappers.HTMLTemplateElement=r}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.registerWrapper,o=window.HTMLMediaElement;o&&(t.prototype=Object.create(n.prototype),r(o,t,document.createElement("audio")),e.wrappers.HTMLMediaElement=t)}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){r.call(this,e)}function n(e){if(!(this instanceof n))throw new TypeError("DOM object constructor cannot be called as a function.");var t=i(document.createElement("audio"));r.call(this,t),a(t,this),t.setAttribute("preload","auto"),void 0!==e&&t.setAttribute("src",e)}var r=e.wrappers.HTMLMediaElement,o=e.registerWrapper,i=e.unwrap,a=e.rewrap,s=window.HTMLAudioElement;s&&(t.prototype=Object.create(r.prototype),o(s,t,document.createElement("audio")),n.prototype=t.prototype,e.wrappers.HTMLAudioElement=t,e.wrappers.Audio=n)}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){return e.replace(/\s+/g," ").trim()}function n(e){o.call(this,e)}function r(e,t,n,i){if(!(this instanceof r))throw new TypeError("DOM object constructor cannot be called as a function.");var a=c(document.createElement("option"));o.call(this,a),s(a,this),void 0!==e&&(a.text=e),void 0!==t&&a.setAttribute("value",t),n===!0&&a.setAttribute("selected",""),a.selected=i===!0}var o=e.wrappers.HTMLElement,i=e.mixin,a=e.registerWrapper,s=e.rewrap,c=e.unwrap,l=e.wrap,u=window.HTMLOptionElement;n.prototype=Object.create(o.prototype),i(n.prototype,{get text(){return t(this.textContent)},set text(e){this.textContent=t(String(e))},get form(){return l(c(this).form)}}),a(u,n,document.createElement("option")),r.prototype=n.prototype,e.wrappers.HTMLOptionElement=n,e.wrappers.Option=r}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=e.unwrap,a=e.wrap,s=window.HTMLSelectElement;t.prototype=Object.create(n.prototype),r(t.prototype,{add:function(e,t){"object"==typeof t&&(t=i(t)),i(this).add(i(e),t)},remove:function(e){return void 0===e?void n.prototype.remove.call(this):("object"==typeof e&&(e=i(e)),void i(this).remove(e))},get form(){return a(i(this).form)}}),o(s,t,document.createElement("select")),e.wrappers.HTMLSelectElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=e.unwrap,a=e.wrap,s=e.wrapHTMLCollection,c=window.HTMLTableElement;t.prototype=Object.create(n.prototype),r(t.prototype,{get caption(){return a(i(this).caption)},createCaption:function(){return a(i(this).createCaption())},get tHead(){return a(i(this).tHead)},createTHead:function(){return a(i(this).createTHead())},createTFoot:function(){return a(i(this).createTFoot())},get tFoot(){return a(i(this).tFoot)},get tBodies(){return s(i(this).tBodies)},createTBody:function(){return a(i(this).createTBody())},get rows(){return s(i(this).rows)},insertRow:function(e){return a(i(this).insertRow(e))}}),o(c,t,document.createElement("table")),e.wrappers.HTMLTableElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=e.wrapHTMLCollection,a=e.unwrap,s=e.wrap,c=window.HTMLTableSectionElement;t.prototype=Object.create(n.prototype),r(t.prototype,{constructor:t,get rows(){return i(a(this).rows)},insertRow:function(e){return s(a(this).insertRow(e))}}),o(c,t,document.createElement("thead")),e.wrappers.HTMLTableSectionElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=e.wrapHTMLCollection,a=e.unwrap,s=e.wrap,c=window.HTMLTableRowElement;t.prototype=Object.create(n.prototype),r(t.prototype,{get cells(){return i(a(this).cells)},insertCell:function(e){return s(a(this).insertCell(e))}}),o(c,t,document.createElement("tr")),e.wrappers.HTMLTableRowElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){switch(e.localName){case"content":return new n(e);case"shadow":return new o(e);case"template":return new i(e)}r.call(this,e)}var n=e.wrappers.HTMLContentElement,r=e.wrappers.HTMLElement,o=e.wrappers.HTMLShadowElement,i=e.wrappers.HTMLTemplateElement,a=(e.mixin,e.registerWrapper),s=window.HTMLUnknownElement;t.prototype=Object.create(r.prototype),a(s,t),e.wrappers.HTMLUnknownElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";var t=e.wrappers.Element,n=e.wrappers.HTMLElement,r=e.registerObject,o="http://www.w3.org/2000/svg",i=document.createElementNS(o,"title"),a=r(i),s=Object.getPrototypeOf(a.prototype).constructor;if(!("classList"in i)){var c=Object.getOwnPropertyDescriptor(t.prototype,"classList");Object.defineProperty(n.prototype,"classList",c),delete t.prototype.classList}e.wrappers.SVGElement=s}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){p.call(this,e)}var n=e.mixin,r=e.registerWrapper,o=e.unwrap,i=e.wrap,a=window.SVGUseElement,s="http://www.w3.org/2000/svg",c=i(document.createElementNS(s,"g")),l=document.createElementNS(s,"use"),u=c.constructor,d=Object.getPrototypeOf(u.prototype),p=d.constructor;t.prototype=Object.create(d),"instanceRoot"in l&&n(t.prototype,{get instanceRoot(){return i(o(this).instanceRoot)},get animatedInstanceRoot(){return i(o(this).animatedInstanceRoot)}}),r(a,t,l),e.wrappers.SVGUseElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.EventTarget,r=e.mixin,o=e.registerWrapper,i=e.unsafeUnwrap,a=e.wrap,s=window.SVGElementInstance;s&&(t.prototype=Object.create(n.prototype),r(t.prototype,{get correspondingElement(){return a(i(this).correspondingElement)
},get correspondingUseElement(){return a(i(this).correspondingUseElement)},get parentNode(){return a(i(this).parentNode)},get childNodes(){throw new Error("Not implemented")},get firstChild(){return a(i(this).firstChild)},get lastChild(){return a(i(this).lastChild)},get previousSibling(){return a(i(this).previousSibling)},get nextSibling(){return a(i(this).nextSibling)}}),o(s,t),e.wrappers.SVGElementInstance=t)}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){o(e,this)}var n=e.mixin,r=e.registerWrapper,o=e.setWrapper,i=e.unsafeUnwrap,a=e.unwrap,s=e.unwrapIfNeeded,c=e.wrap,l=window.CanvasRenderingContext2D;n(t.prototype,{get canvas(){return c(i(this).canvas)},drawImage:function(){arguments[0]=s(arguments[0]),i(this).drawImage.apply(i(this),arguments)},createPattern:function(){return arguments[0]=a(arguments[0]),i(this).createPattern.apply(i(this),arguments)}}),r(l,t,document.createElement("canvas").getContext("2d")),e.wrappers.CanvasRenderingContext2D=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){o(e,this)}var n=e.mixin,r=e.registerWrapper,o=e.setWrapper,i=e.unsafeUnwrap,a=e.unwrapIfNeeded,s=e.wrap,c=window.WebGLRenderingContext;if(c){n(t.prototype,{get canvas(){return s(i(this).canvas)},texImage2D:function(){arguments[5]=a(arguments[5]),i(this).texImage2D.apply(i(this),arguments)},texSubImage2D:function(){arguments[6]=a(arguments[6]),i(this).texSubImage2D.apply(i(this),arguments)}});var l=/WebKit/.test(navigator.userAgent)?{drawingBufferHeight:null,drawingBufferWidth:null}:{};r(c,t,l),e.wrappers.WebGLRenderingContext=t}}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){r(e,this)}var n=e.registerWrapper,r=e.setWrapper,o=e.unsafeUnwrap,i=e.unwrap,a=e.unwrapIfNeeded,s=e.wrap,c=window.Range;t.prototype={get startContainer(){return s(o(this).startContainer)},get endContainer(){return s(o(this).endContainer)},get commonAncestorContainer(){return s(o(this).commonAncestorContainer)},setStart:function(e,t){o(this).setStart(a(e),t)},setEnd:function(e,t){o(this).setEnd(a(e),t)},setStartBefore:function(e){o(this).setStartBefore(a(e))},setStartAfter:function(e){o(this).setStartAfter(a(e))},setEndBefore:function(e){o(this).setEndBefore(a(e))},setEndAfter:function(e){o(this).setEndAfter(a(e))},selectNode:function(e){o(this).selectNode(a(e))},selectNodeContents:function(e){o(this).selectNodeContents(a(e))},compareBoundaryPoints:function(e,t){return o(this).compareBoundaryPoints(e,i(t))},extractContents:function(){return s(o(this).extractContents())},cloneContents:function(){return s(o(this).cloneContents())},insertNode:function(e){o(this).insertNode(a(e))},surroundContents:function(e){o(this).surroundContents(a(e))},cloneRange:function(){return s(o(this).cloneRange())},isPointInRange:function(e,t){return o(this).isPointInRange(a(e),t)},comparePoint:function(e,t){return o(this).comparePoint(a(e),t)},intersectsNode:function(e){return o(this).intersectsNode(a(e))},toString:function(){return o(this).toString()}},c.prototype.createContextualFragment&&(t.prototype.createContextualFragment=function(e){return s(o(this).createContextualFragment(e))}),n(window.Range,t,document.createRange()),e.wrappers.Range=t}(window.ShadowDOMPolyfill),function(e){"use strict";var t=e.GetElementsByInterface,n=e.ParentNodeInterface,r=e.SelectorsInterface,o=e.mixin,i=e.registerObject,a=i(document.createDocumentFragment());o(a.prototype,n),o(a.prototype,r),o(a.prototype,t);var s=i(document.createComment(""));e.wrappers.Comment=s,e.wrappers.DocumentFragment=a}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){var t=d(u(e).ownerDocument.createDocumentFragment());n.call(this,t),c(t,this);var o=e.shadowRoot;h.set(this,o),this.treeScope_=new r(this,a(o||e)),p.set(this,e)}var n=e.wrappers.DocumentFragment,r=e.TreeScope,o=e.elementFromPoint,i=e.getInnerHTML,a=e.getTreeScope,s=e.mixin,c=e.rewrap,l=e.setInnerHTML,u=e.unsafeUnwrap,d=e.unwrap,p=new WeakMap,h=new WeakMap,f=/[ \t\n\r\f]/;t.prototype=Object.create(n.prototype),s(t.prototype,{constructor:t,get innerHTML(){return i(this)},set innerHTML(e){l(this,e),this.invalidateShadowRenderer()},get olderShadowRoot(){return h.get(this)||null},get host(){return p.get(this)||null},invalidateShadowRenderer:function(){return p.get(this).invalidateShadowRenderer()},elementFromPoint:function(e,t){return o(this,this.ownerDocument,e,t)},getElementById:function(e){return f.test(e)?null:this.querySelector('[id="'+e+'"]')}}),e.wrappers.ShadowRoot=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){e.previousSibling_=e.previousSibling,e.nextSibling_=e.nextSibling,e.parentNode_=e.parentNode}function n(n,o,i){var a=H(n),s=H(o),c=i?H(i):null;if(r(o),t(o),i)n.firstChild===i&&(n.firstChild_=i),i.previousSibling_=i.previousSibling;else{n.lastChild_=n.lastChild,n.lastChild===n.firstChild&&(n.firstChild_=n.firstChild);var l=R(a.lastChild);l&&(l.nextSibling_=l.nextSibling)}e.originalInsertBefore.call(a,s,c)}function r(n){var r=H(n),o=r.parentNode;if(o){var i=R(o);t(n),n.previousSibling&&(n.previousSibling.nextSibling_=n),n.nextSibling&&(n.nextSibling.previousSibling_=n),i.lastChild===n&&(i.lastChild_=n),i.firstChild===n&&(i.firstChild_=n),e.originalRemoveChild.call(o,r)}}function o(e){P.set(e,[])}function i(e){var t=P.get(e);return t||P.set(e,t=[]),t}function a(e){for(var t=[],n=0,r=e.firstChild;r;r=r.nextSibling)t[n++]=r;return t}function s(){for(var e=0;e<F.length;e++){var t=F[e],n=t.parentRenderer;n&&n.dirty||t.render()}F=[]}function c(){O=null,s()}function l(e){var t=k.get(e);return t||(t=new h(e),k.set(e,t)),t}function u(e){var t=j(e).root;return t instanceof N?t:null}function d(e){return l(e.host)}function p(e){this.skip=!1,this.node=e,this.childNodes=[]}function h(e){this.host=e,this.dirty=!1,this.invalidateAttributes(),this.associateNode(e)}function f(e){for(var t=[],n=e.firstChild;n;n=n.nextSibling)_(n)?t.push.apply(t,i(n)):t.push(n);return t}function m(e){if(e instanceof C)return e;if(e instanceof M)return null;for(var t=e.firstChild;t;t=t.nextSibling){var n=m(t);if(n)return n}return null}function v(e,t){i(t).push(e);var n=I.get(e);n?n.push(t):I.set(e,[t])}function w(e){return I.get(e)}function g(e){I.set(e,void 0)}function b(e,t){var n=t.getAttribute("select");if(!n)return!0;if(n=n.trim(),!n)return!0;if(!(e instanceof T))return!1;if(!q.test(n))return!1;try{return e.matches(n)}catch(r){return!1}}function y(e,t){var n=w(t);return n&&n[n.length-1]===e}function _(e){return e instanceof M||e instanceof C}function E(e){return e.shadowRoot}function S(e){for(var t=[],n=e.shadowRoot;n;n=n.olderShadowRoot)t.push(n);return t}var O,T=e.wrappers.Element,M=e.wrappers.HTMLContentElement,C=e.wrappers.HTMLShadowElement,L=e.wrappers.Node,N=e.wrappers.ShadowRoot,j=(e.assert,e.getTreeScope),D=(e.mixin,e.oneOf),x=e.unsafeUnwrap,H=e.unwrap,R=e.wrap,P=new WeakMap,I=new WeakMap,k=new WeakMap,A=D(window,["requestAnimationFrame","mozRequestAnimationFrame","webkitRequestAnimationFrame","setTimeout"]),F=[],W=new ArraySplice;W.equals=function(e,t){return H(e.node)===t},p.prototype={append:function(e){var t=new p(e);return this.childNodes.push(t),t},sync:function(e){if(!this.skip){for(var t=this.node,o=this.childNodes,i=a(H(t)),s=e||new WeakMap,c=W.calculateSplices(o,i),l=0,u=0,d=0,p=0;p<c.length;p++){for(var h=c[p];d<h.index;d++)u++,o[l++].sync(s);for(var f=h.removed.length,m=0;f>m;m++){var v=R(i[u++]);s.get(v)||r(v)}for(var w=h.addedCount,g=i[u]&&R(i[u]),m=0;w>m;m++){var b=o[l++],y=b.node;n(t,y,g),s.set(y,!0),b.sync(s)}d+=w}for(var p=d;p<o.length;p++)o[p].sync(s)}}},h.prototype={render:function(e){if(this.dirty){this.invalidateAttributes();var t=this.host;this.distribution(t);var n=e||new p(t);this.buildRenderTree(n,t);var r=!e;r&&n.sync(),this.dirty=!1}},get parentRenderer(){return j(this.host).renderer},invalidate:function(){if(!this.dirty){this.dirty=!0;var e=this.parentRenderer;if(e&&e.invalidate(),F.push(this),O)return;O=window[A](c,0)}},distribution:function(e){this.resetAllSubtrees(e),this.distributionResolution(e)},resetAll:function(e){_(e)?o(e):g(e),this.resetAllSubtrees(e)},resetAllSubtrees:function(e){for(var t=e.firstChild;t;t=t.nextSibling)this.resetAll(t);e.shadowRoot&&this.resetAll(e.shadowRoot),e.olderShadowRoot&&this.resetAll(e.olderShadowRoot)},distributionResolution:function(e){if(E(e)){for(var t=e,n=f(t),r=S(t),o=0;o<r.length;o++)this.poolDistribution(r[o],n);for(var o=r.length-1;o>=0;o--){var i=r[o],a=m(i);if(a){var s=i.olderShadowRoot;s&&(n=f(s));for(var c=0;c<n.length;c++)v(n[c],a)}this.distributionResolution(i)}}for(var l=e.firstChild;l;l=l.nextSibling)this.distributionResolution(l)},poolDistribution:function(e,t){if(!(e instanceof C))if(e instanceof M){var n=e;this.updateDependentAttributes(n.getAttribute("select"));for(var r=!1,o=0;o<t.length;o++){var e=t[o];e&&b(e,n)&&(v(e,n),t[o]=void 0,r=!0)}if(!r)for(var i=n.firstChild;i;i=i.nextSibling)v(i,n)}else for(var i=e.firstChild;i;i=i.nextSibling)this.poolDistribution(i,t)},buildRenderTree:function(e,t){for(var n=this.compose(t),r=0;r<n.length;r++){var o=n[r],i=e.append(o);this.buildRenderTree(i,o)}if(E(t)){var a=l(t);a.dirty=!1}},compose:function(e){for(var t=[],n=e.shadowRoot||e,r=n.firstChild;r;r=r.nextSibling)if(_(r)){this.associateNode(n);for(var o=i(r),a=0;a<o.length;a++){var s=o[a];y(r,s)&&t.push(s)}}else t.push(r);return t},invalidateAttributes:function(){this.attributes=Object.create(null)},updateDependentAttributes:function(e){if(e){var t=this.attributes;/\.\w+/.test(e)&&(t["class"]=!0),/#\w+/.test(e)&&(t.id=!0),e.replace(/\[\s*([^\s=\|~\]]+)/g,function(e,n){t[n]=!0})}},dependsOnAttribute:function(e){return this.attributes[e]},associateNode:function(e){x(e).polymerShadowRenderer_=this}};var q=/^(:not\()?[*.#[a-zA-Z_|]/;L.prototype.invalidateShadowRenderer=function(){var e=x(this).polymerShadowRenderer_;return e?(e.invalidate(),!0):!1},M.prototype.getDistributedNodes=C.prototype.getDistributedNodes=function(){return s(),i(this)},T.prototype.getDestinationInsertionPoints=function(){return s(),w(this)||[]},M.prototype.nodeIsInserted_=C.prototype.nodeIsInserted_=function(){this.invalidateShadowRenderer();var e,t=u(this);t&&(e=d(t)),x(this).polymerShadowRenderer_=e,e&&e.invalidate()},e.getRendererForHost=l,e.getShadowTrees=S,e.renderAllPending=s,e.getDestinationInsertionPoints=w,e.visual={insertBefore:n,remove:r}}(window.ShadowDOMPolyfill),function(e){"use strict";function t(t){if(window[t]){r(!e.wrappers[t]);var c=function(e){n.call(this,e)};c.prototype=Object.create(n.prototype),o(c.prototype,{get form(){return s(a(this).form)}}),i(window[t],c,document.createElement(t.slice(4,-7))),e.wrappers[t]=c}}var n=e.wrappers.HTMLElement,r=e.assert,o=e.mixin,i=e.registerWrapper,a=e.unwrap,s=e.wrap,c=["HTMLButtonElement","HTMLFieldSetElement","HTMLInputElement","HTMLKeygenElement","HTMLLabelElement","HTMLLegendElement","HTMLObjectElement","HTMLOutputElement","HTMLTextAreaElement"];c.forEach(t)}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){r(e,this)}var n=e.registerWrapper,r=e.setWrapper,o=e.unsafeUnwrap,i=e.unwrap,a=e.unwrapIfNeeded,s=e.wrap;window.Selection,t.prototype={get anchorNode(){return s(o(this).anchorNode)},get focusNode(){return s(o(this).focusNode)},addRange:function(e){o(this).addRange(i(e))},collapse:function(e,t){o(this).collapse(a(e),t)},containsNode:function(e,t){return o(this).containsNode(a(e),t)},extend:function(e,t){o(this).extend(a(e),t)},getRangeAt:function(e){return s(o(this).getRangeAt(e))},removeRange:function(e){o(this).removeRange(i(e))},selectAllChildren:function(e){o(this).selectAllChildren(a(e))},toString:function(){return o(this).toString()}},n(window.Selection,t,window.getSelection()),e.wrappers.Selection=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){u.call(this,e),this.treeScope_=new m(this,null)}function n(e){var n=document[e];t.prototype[e]=function(){return L(n.apply(M(this),arguments))}}function r(e,t){D.call(M(t),C(e)),o(e,t)}function o(e,t){e.shadowRoot&&t.adoptNode(e.shadowRoot),e instanceof f&&i(e,t);for(var n=e.firstChild;n;n=n.nextSibling)o(n,t)}function i(e,t){var n=e.olderShadowRoot;n&&t.adoptNode(n)}function a(e){T(e,this)}function s(e,t){var n=document.implementation[t];e.prototype[t]=function(){return L(n.apply(M(this),arguments))}}function c(e,t){var n=document.implementation[t];e.prototype[t]=function(){return n.apply(M(this),arguments)}}var l=e.GetElementsByInterface,u=e.wrappers.Node,d=e.ParentNodeInterface,p=e.wrappers.Selection,h=e.SelectorsInterface,f=e.wrappers.ShadowRoot,m=e.TreeScope,v=e.cloneNode,w=e.defineWrapGetter,g=e.elementFromPoint,b=e.forwardMethodsToWrapper,y=e.matchesNames,_=e.mixin,E=e.registerWrapper,S=e.renderAllPending,O=e.rewrap,T=e.setWrapper,M=e.unsafeUnwrap,C=e.unwrap,L=e.wrap,N=e.wrapEventTargetMethods,j=(e.wrapNodeList,new WeakMap);t.prototype=Object.create(u.prototype),w(t,"documentElement"),w(t,"body"),w(t,"head"),["createComment","createDocumentFragment","createElement","createElementNS","createEvent","createEventNS","createRange","createTextNode","getElementById"].forEach(n);var D=document.adoptNode,x=document.getSelection;if(_(t.prototype,{adoptNode:function(e){return e.parentNode&&e.parentNode.removeChild(e),r(e,this),e},elementFromPoint:function(e,t){return g(this,this,e,t)},importNode:function(e,t){return v(e,t,M(this))},getSelection:function(){return S(),new p(x.call(C(this)))},getElementsByName:function(e){return h.querySelectorAll.call(this,"[name="+JSON.stringify(String(e))+"]")}}),document.registerElement){var H=document.registerElement;t.prototype.registerElement=function(t,n){function r(e){return e?void T(e,this):i?document.createElement(i,t):document.createElement(t)}var o,i;if(void 0!==n&&(o=n.prototype,i=n.extends),o||(o=Object.create(HTMLElement.prototype)),e.nativePrototypeTable.get(o))throw new Error("NotSupportedError");for(var a,s=Object.getPrototypeOf(o),c=[];s&&!(a=e.nativePrototypeTable.get(s));)c.push(s),s=Object.getPrototypeOf(s);if(!a)throw new Error("NotSupportedError");for(var l=Object.create(a),u=c.length-1;u>=0;u--)l=Object.create(l);["createdCallback","attachedCallback","detachedCallback","attributeChangedCallback"].forEach(function(e){var t=o[e];t&&(l[e]=function(){L(this)instanceof r||O(this),t.apply(L(this),arguments)})});var d={prototype:l};return i&&(d.extends=i),r.prototype=o,r.prototype.constructor=r,e.constructorTable.set(l,r),e.nativePrototypeTable.set(o,l),H.call(C(this),t,d),r},b([window.HTMLDocument||window.Document],["registerElement"])}b([window.HTMLBodyElement,window.HTMLDocument||window.Document,window.HTMLHeadElement,window.HTMLHtmlElement],["appendChild","compareDocumentPosition","contains","getElementsByClassName","getElementsByTagName","getElementsByTagNameNS","insertBefore","querySelector","querySelectorAll","removeChild","replaceChild"].concat(y)),b([window.HTMLDocument||window.Document],["adoptNode","importNode","contains","createComment","createDocumentFragment","createElement","createElementNS","createEvent","createEventNS","createRange","createTextNode","elementFromPoint","getElementById","getElementsByName","getSelection"]),_(t.prototype,l),_(t.prototype,d),_(t.prototype,h),_(t.prototype,{get implementation(){var e=j.get(this);return e?e:(e=new a(C(this).implementation),j.set(this,e),e)},get defaultView(){return L(C(this).defaultView)}}),E(window.Document,t,document.implementation.createHTMLDocument("")),window.HTMLDocument&&E(window.HTMLDocument,t),N([window.HTMLBodyElement,window.HTMLDocument||window.Document,window.HTMLHeadElement]),s(a,"createDocumentType"),s(a,"createDocument"),s(a,"createHTMLDocument"),c(a,"hasFeature"),E(window.DOMImplementation,a),b([window.DOMImplementation],["createDocumentType","createDocument","createHTMLDocument","hasFeature"]),e.adoptNodeNoRemove=r,e.wrappers.DOMImplementation=a,e.wrappers.Document=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.EventTarget,r=e.wrappers.Selection,o=e.mixin,i=e.registerWrapper,a=e.renderAllPending,s=e.unwrap,c=e.unwrapIfNeeded,l=e.wrap,u=window.Window,d=window.getComputedStyle,p=window.getDefaultComputedStyle,h=window.getSelection;t.prototype=Object.create(n.prototype),u.prototype.getComputedStyle=function(e,t){return l(this||window).getComputedStyle(c(e),t)},p&&(u.prototype.getDefaultComputedStyle=function(e,t){return l(this||window).getDefaultComputedStyle(c(e),t)}),u.prototype.getSelection=function(){return l(this||window).getSelection()},delete window.getComputedStyle,delete window.getDefaultComputedStyle,delete window.getSelection,["addEventListener","removeEventListener","dispatchEvent"].forEach(function(e){u.prototype[e]=function(){var t=l(this||window);return t[e].apply(t,arguments)},delete window[e]}),o(t.prototype,{getComputedStyle:function(e,t){return a(),d.call(s(this),c(e),t)},getSelection:function(){return a(),new r(h.call(s(this)))},get document(){return l(s(this).document)}}),p&&(t.prototype.getDefaultComputedStyle=function(e,t){return a(),p.call(s(this),c(e),t)}),i(u,t,window),e.wrappers.Window=t}(window.ShadowDOMPolyfill),function(e){"use strict";var t=e.unwrap,n=window.DataTransfer||window.Clipboard,r=n.prototype.setDragImage;r&&(n.prototype.setDragImage=function(e,n,o){r.call(this,t(e),n,o)})}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){var t;t=e instanceof i?e:new i(e&&o(e)),r(t,this)}var n=e.registerWrapper,r=e.setWrapper,o=e.unwrap,i=window.FormData;i&&(n(i,t,new i),e.wrappers.FormData=t)}(window.ShadowDOMPolyfill),function(e){"use strict";var t=e.unwrapIfNeeded,n=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.send=function(e){return n.call(this,t(e))}}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){var t=n[e],r=window[t];if(r){var o=document.createElement(e),i=o.constructor;window[t]=i}}var n=(e.isWrapperFor,{a:"HTMLAnchorElement",area:"HTMLAreaElement",audio:"HTMLAudioElement",base:"HTMLBaseElement",body:"HTMLBodyElement",br:"HTMLBRElement",button:"HTMLButtonElement",canvas:"HTMLCanvasElement",caption:"HTMLTableCaptionElement",col:"HTMLTableColElement",content:"HTMLContentElement",data:"HTMLDataElement",datalist:"HTMLDataListElement",del:"HTMLModElement",dir:"HTMLDirectoryElement",div:"HTMLDivElement",dl:"HTMLDListElement",embed:"HTMLEmbedElement",fieldset:"HTMLFieldSetElement",font:"HTMLFontElement",form:"HTMLFormElement",frame:"HTMLFrameElement",frameset:"HTMLFrameSetElement",h1:"HTMLHeadingElement",head:"HTMLHeadElement",hr:"HTMLHRElement",html:"HTMLHtmlElement",iframe:"HTMLIFrameElement",img:"HTMLImageElement",input:"HTMLInputElement",keygen:"HTMLKeygenElement",label:"HTMLLabelElement",legend:"HTMLLegendElement",li:"HTMLLIElement",link:"HTMLLinkElement",map:"HTMLMapElement",marquee:"HTMLMarqueeElement",menu:"HTMLMenuElement",menuitem:"HTMLMenuItemElement",meta:"HTMLMetaElement",meter:"HTMLMeterElement",object:"HTMLObjectElement",ol:"HTMLOListElement",optgroup:"HTMLOptGroupElement",option:"HTMLOptionElement",output:"HTMLOutputElement",p:"HTMLParagraphElement",param:"HTMLParamElement",pre:"HTMLPreElement",progress:"HTMLProgressElement",q:"HTMLQuoteElement",script:"HTMLScriptElement",select:"HTMLSelectElement",shadow:"HTMLShadowElement",source:"HTMLSourceElement",span:"HTMLSpanElement",style:"HTMLStyleElement",table:"HTMLTableElement",tbody:"HTMLTableSectionElement",template:"HTMLTemplateElement",textarea:"HTMLTextAreaElement",thead:"HTMLTableSectionElement",time:"HTMLTimeElement",title:"HTMLTitleElement",tr:"HTMLTableRowElement",track:"HTMLTrackElement",ul:"HTMLUListElement",video:"HTMLVideoElement"});Object.keys(n).forEach(t),Object.getOwnPropertyNames(e.wrappers).forEach(function(t){window[t]=e.wrappers[t]})}(window.ShadowDOMPolyfill),function(e){function t(e,n){var r,o,i,a,s=e.firstElementChild;for(o=[],i=e.shadowRoot;i;)o.push(i),i=i.olderShadowRoot;for(a=o.length-1;a>=0;a--)if(r=o[a].querySelector(n))return r;for(;s;){if(r=t(s,n))return r;s=s.nextElementSibling}return null}function n(e,t,r){var o,i,a,s,c,l=e.firstElementChild;for(a=[],i=e.shadowRoot;i;)a.push(i),i=i.olderShadowRoot;for(s=a.length-1;s>=0;s--)for(o=a[s].querySelectorAll(t),c=0;c<o.length;c++)r.push(o[c]);for(;l;)n(l,t,r),l=l.nextElementSibling;return r}window.wrap=ShadowDOMPolyfill.wrapIfNeeded,window.unwrap=ShadowDOMPolyfill.unwrapIfNeeded,Object.defineProperty(Element.prototype,"webkitShadowRoot",Object.getOwnPropertyDescriptor(Element.prototype,"shadowRoot"));var r=Element.prototype.createShadowRoot;Element.prototype.createShadowRoot=function(){var e=r.call(this);return CustomElements.watchShadow(this),e},Element.prototype.webkitCreateShadowRoot=Element.prototype.createShadowRoot,e.queryAllShadows=function(e,r,o){return o?n(e,r,[]):t(e,r)}}(window.Platform),function(e){function t(e,t){var n="";return Array.prototype.forEach.call(e,function(e){n+=e.textContent+"\n\n"}),t||(n=n.replace(d,"")),n}function n(e){var t=document.createElement("style");return t.textContent=e,t}function r(e){var t=n(e);document.head.appendChild(t);var r=[];if(t.sheet)try{r=t.sheet.cssRules}catch(o){}else console.warn("sheet not found",t);return t.parentNode.removeChild(t),r}function o(){_.initialized=!0,document.body.appendChild(_);var e=_.contentDocument,t=e.createElement("base");t.href=document.baseURI,e.head.appendChild(t)}function i(e){_.initialized||o(),document.body.appendChild(_),e(_.contentDocument),document.body.removeChild(_)}function a(e,t){if(t){var o;if(e.match("@import")&&S){var a=n(e);i(function(e){e.head.appendChild(a.impl),o=Array.prototype.slice.call(a.sheet.cssRules,0),t(o)})}else o=r(e),t(o)}}function s(e){e&&l().appendChild(document.createTextNode(e))}function c(e,t){var r=n(e);r.setAttribute(t,""),r.setAttribute(T,""),document.head.appendChild(r)}function l(){return E||(E=document.createElement("style"),E.setAttribute(T,""),E[T]=!0),E}var u={strictStyling:!1,registry:{},shimStyling:function(e,n,r){var o=this.prepareRoot(e,n,r),i=this.isTypeExtension(r),a=this.makeScopeSelector(n,i),s=t(o,!0);s=this.scopeCssText(s,a),e&&(e.shimmedStyle=s),this.addCssToDocument(s,n)},shimStyle:function(e,t){return this.shimCssText(e.textContent,t)},shimCssText:function(e,t){return e=this.insertDirectives(e),this.scopeCssText(e,t)},makeScopeSelector:function(e,t){return e?t?"[is="+e+"]":e:""},isTypeExtension:function(e){return e&&e.indexOf("-")<0},prepareRoot:function(e,t,n){var r=this.registerRoot(e,t,n);return this.replaceTextInStyles(r.rootStyles,this.insertDirectives),this.removeStyles(e,r.rootStyles),this.strictStyling&&this.applyScopeToContent(e,t),r.scopeStyles},removeStyles:function(e,t){for(var n,r=0,o=t.length;o>r&&(n=t[r]);r++)n.parentNode.removeChild(n)},registerRoot:function(e,t,n){var r=this.registry[t]={root:e,name:t,extendsName:n},o=this.findStyles(e);r.rootStyles=o,r.scopeStyles=r.rootStyles;var i=this.registry[r.extendsName];return i&&(r.scopeStyles=i.scopeStyles.concat(r.scopeStyles)),r},findStyles:function(e){if(!e)return[];var t=e.querySelectorAll("style");return Array.prototype.filter.call(t,function(e){return!e.hasAttribute(M)})},applyScopeToContent:function(e,t){e&&(Array.prototype.forEach.call(e.querySelectorAll("*"),function(e){e.setAttribute(t,"")}),Array.prototype.forEach.call(e.querySelectorAll("template"),function(e){this.applyScopeToContent(e.content,t)},this))},insertDirectives:function(e){return e=this.insertPolyfillDirectivesInCssText(e),this.insertPolyfillRulesInCssText(e)},insertPolyfillDirectivesInCssText:function(e){return e=e.replace(p,function(e,t){return t.slice(0,-2)+"{"}),e.replace(h,function(e,t){return t+" {"})},insertPolyfillRulesInCssText:function(e){return e=e.replace(f,function(e,t){return t.slice(0,-1)}),e.replace(m,function(e,t,n,r){var o=e.replace(t,"").replace(n,"");return r+o})},scopeCssText:function(e,t){var n=this.extractUnscopedRulesFromCssText(e);if(e=this.insertPolyfillHostInCssText(e),e=this.convertColonHost(e),e=this.convertColonHostContext(e),e=this.convertShadowDOMSelectors(e),t){var e,r=this;a(e,function(n){e=r.scopeRules(n,t)})}return e=e+"\n"+n,e.trim()},extractUnscopedRulesFromCssText:function(e){for(var t,n="";t=v.exec(e);)n+=t[1].slice(0,-1)+"\n\n";for(;t=w.exec(e);)n+=t[0].replace(t[2],"").replace(t[1],t[3])+"\n\n";return n},convertColonHost:function(e){return this.convertColonRule(e,cssColonHostRe,this.colonHostPartReplacer)},convertColonHostContext:function(e){return this.convertColonRule(e,cssColonHostContextRe,this.colonHostContextPartReplacer)},convertColonRule:function(e,t,n){return e.replace(t,function(e,t,r,o){if(t=polyfillHostNoCombinator,r){for(var i,a=r.split(","),s=[],c=0,l=a.length;l>c&&(i=a[c]);c++)i=i.trim(),s.push(n(t,i,o));return s.join(",")}return t+o})},colonHostContextPartReplacer:function(e,t,n){return t.match(g)?this.colonHostPartReplacer(e,t,n):e+t+n+", "+t+" "+e+n},colonHostPartReplacer:function(e,t,n){return e+t.replace(g,"")+n},convertShadowDOMSelectors:function(e){for(var t=0;t<shadowDOMSelectorsRe.length;t++)e=e.replace(shadowDOMSelectorsRe[t]," ");return e},scopeRules:function(e,t){var n="";return e&&Array.prototype.forEach.call(e,function(e){if(e.selectorText&&e.style&&void 0!==e.style.cssText)n+=this.scopeSelector(e.selectorText,t,this.strictStyling)+" {\n	",n+=this.propertiesFromRule(e)+"\n}\n\n";else if(e.type===CSSRule.MEDIA_RULE)n+="@media "+e.media.mediaText+" {\n",n+=this.scopeRules(e.cssRules,t),n+="\n}\n\n";else try{e.cssText&&(n+=e.cssText+"\n\n")}catch(r){e.type===CSSRule.KEYFRAMES_RULE&&e.cssRules&&(n+=this.ieSafeCssTextFromKeyFrameRule(e))}},this),n},ieSafeCssTextFromKeyFrameRule:function(e){var t="@keyframes "+e.name+" {";return Array.prototype.forEach.call(e.cssRules,function(e){t+=" "+e.keyText+" {"+e.style.cssText+"}"}),t+=" }"},scopeSelector:function(e,t,n){var r=[],o=e.split(",");return o.forEach(function(e){e=e.trim(),this.selectorNeedsScoping(e,t)&&(e=n&&!e.match(polyfillHostNoCombinator)?this.applyStrictSelectorScope(e,t):this.applySelectorScope(e,t)),r.push(e)},this),r.join(", ")},selectorNeedsScoping:function(e,t){if(Array.isArray(t))return!0;var n=this.makeScopeMatcher(t);return!e.match(n)},makeScopeMatcher:function(e){return e=e.replace(/\[/g,"\\[").replace(/\[/g,"\\]"),new RegExp("^("+e+")"+selectorReSuffix,"m")},applySelectorScope:function(e,t){return Array.isArray(t)?this.applySelectorScopeList(e,t):this.applySimpleSelectorScope(e,t)},applySelectorScopeList:function(e,t){for(var n,r=[],o=0;n=t[o];o++)r.push(this.applySimpleSelectorScope(e,n));return r.join(", ")},applySimpleSelectorScope:function(e,t){return e.match(polyfillHostRe)?(e=e.replace(polyfillHostNoCombinator,t),e.replace(polyfillHostRe,t+" ")):t+" "+e},applyStrictSelectorScope:function(e,t){t=t.replace(/\[is=([^\]]*)\]/g,"$1");var n=[" ",">","+","~"],r=e,o="["+t+"]";return n.forEach(function(e){var t=r.split(e);r=t.map(function(e){var t=e.trim().replace(polyfillHostRe,"");return t&&n.indexOf(t)<0&&t.indexOf(o)<0&&(e=t.replace(/([^:]*)(:*)(.*)/,"$1"+o+"$2$3")),e}).join(e)}),r},insertPolyfillHostInCssText:function(e){return e.replace(colonHostContextRe,b).replace(colonHostRe,g)},propertiesFromRule:function(e){var t=e.style.cssText;e.style.content&&!e.style.content.match(/['"]+|attr/)&&(t=t.replace(/content:[^;]*;/g,"content: '"+e.style.content+"';"));var n=e.style;for(var r in n)"initial"===n[r]&&(t+=r+": initial; ");return t},replaceTextInStyles:function(e,t){e&&t&&(e instanceof Array||(e=[e]),Array.prototype.forEach.call(e,function(e){e.textContent=t.call(this,e.textContent)},this))},addCssToDocument:function(e,t){e.match("@import")?c(e,t):s(e)}},d=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,p=/\/\*\s*@polyfill ([^*]*\*+([^/*][^*]*\*+)*\/)([^{]*?){/gim,h=/polyfill-next-selector[^}]*content\:[\s]*?['"](.*?)['"][;\s]*}([^{]*?){/gim,f=/\/\*\s@polyfill-rule([^*]*\*+([^/*][^*]*\*+)*)\//gim,m=/(polyfill-rule)[^}]*(content\:[\s]*['"](.*?)['"])[;\s]*[^}]*}/gim,v=/\/\*\s@polyfill-unscoped-rule([^*]*\*+([^/*][^*]*\*+)*)\//gim,w=/(polyfill-unscoped-rule)[^}]*(content\:[\s]*['"](.*?)['"])[;\s]*[^}]*}/gim,g="-shadowcsshost",b="-shadowcsscontext",y=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)";cssColonHostRe=new RegExp("("+g+y,"gim"),cssColonHostContextRe=new RegExp("("+b+y,"gim"),selectorReSuffix="([>\\s~+[.,{:][\\s\\S]*)?$",colonHostRe=/\:host/gim,colonHostContextRe=/\:host-context/gim,polyfillHostNoCombinator=g+"-no-combinator",polyfillHostRe=new RegExp(g,"gim"),polyfillHostContextRe=new RegExp(b,"gim"),shadowDOMSelectorsRe=[/\^\^/g,/\^/g,/\/shadow\//g,/\/shadow-deep\//g,/::shadow/g,/\/deep\//g,/::content/g];var _=document.createElement("iframe");_.style.display="none";var E,S=navigator.userAgent.match("Chrome"),O="shim-shadowdom",T="shim-shadowdom-css",M="no-shim";if(window.ShadowDOMPolyfill){s("style { display: none !important; }\n");var C=wrap(document),L=C.querySelector("head");L.insertBefore(l(),L.childNodes[0]),document.addEventListener("DOMContentLoaded",function(){if(e.urlResolver,window.HTMLImports&&!HTMLImports.useNative){var t="link[rel=stylesheet]["+O+"]",n="style["+O+"]";HTMLImports.importer.documentPreloadSelectors+=","+t,HTMLImports.importer.importsPreloadSelectors+=","+t,HTMLImports.parser.documentSelectors=[HTMLImports.parser.documentSelectors,t,n].join(",");var r=HTMLImports.parser.parseGeneric;HTMLImports.parser.parseGeneric=function(e){if(!e[T]){var t=e.__importElement||e;if(!t.hasAttribute(O))return void r.call(this,e);e.__resource&&(t=e.ownerDocument.createElement("style"),t.textContent=e.__resource),HTMLImports.path.resolveUrlsInStyle(t),t.textContent=u.shimStyle(t),t.removeAttribute(O,""),t.setAttribute(T,""),t[T]=!0,t.parentNode!==L&&(e.parentNode===L?L.replaceChild(t,e):this.addElementToDocument(t)),t.__importParsed=!0,this.markParsingComplete(e),this.parseNext()}};var o=HTMLImports.parser.hasResource;HTMLImports.parser.hasResource=function(e){return"link"===e.localName&&"stylesheet"===e.rel&&e.hasAttribute(O)?e.__resource:o.call(this,e)}}})}e.ShadowCSS=u}(window.Platform)):!function(){window.wrap=window.unwrap=function(e){return e},addEventListener("DOMContentLoaded",function(){if(CustomElements.useNative===!1){var e=Element.prototype.createShadowRoot;Element.prototype.createShadowRoot=function(){var t=e.call(this);return CustomElements.watchShadow(this),t}}})}(window.Platform),function(e){"use strict";function t(e){return void 0!==p[e]}function n(){s.call(this),this._isInvalid=!0}function r(e){return""==e&&n.call(this),e.toLowerCase()}function o(e){var t=e.charCodeAt(0);return t>32&&127>t&&-1==[34,35,60,62,63,96].indexOf(t)?e:encodeURIComponent(e)}function i(e){var t=e.charCodeAt(0);return t>32&&127>t&&-1==[34,35,60,62,96].indexOf(t)?e:encodeURIComponent(e)}function a(e,a,s){function c(e){b.push(e)}var l=a||"scheme start",u=0,d="",w=!1,g=!1,b=[];e:for(;(e[u-1]!=f||0==u)&&!this._isInvalid;){var y=e[u];switch(l){case"scheme start":if(!y||!m.test(y)){if(a){c("Invalid scheme.");break e}d="",l="no scheme";continue}d+=y.toLowerCase(),l="scheme";break;case"scheme":if(y&&v.test(y))d+=y.toLowerCase();else{if(":"!=y){if(a){if(f==y)break e;c("Code point not allowed in scheme: "+y);break e}d="",u=0,l="no scheme";continue}if(this._scheme=d,d="",a)break e;t(this._scheme)&&(this._isRelative=!0),l="file"==this._scheme?"relative":this._isRelative&&s&&s._scheme==this._scheme?"relative or authority":this._isRelative?"authority first slash":"scheme data"}break;case"scheme data":"?"==y?(query="?",l="query"):"#"==y?(this._fragment="#",l="fragment"):f!=y&&"	"!=y&&"\n"!=y&&"\r"!=y&&(this._schemeData+=o(y));break;case"no scheme":if(s&&t(s._scheme)){l="relative";continue}c("Missing scheme."),n.call(this);break;case"relative or authority":if("/"!=y||"/"!=e[u+1]){c("Expected /, got: "+y),l="relative";continue}l="authority ignore slashes";break;case"relative":if(this._isRelative=!0,"file"!=this._scheme&&(this._scheme=s._scheme),f==y){this._host=s._host,this._port=s._port,this._path=s._path.slice(),this._query=s._query;break e}if("/"==y||"\\"==y)"\\"==y&&c("\\ is an invalid code point."),l="relative slash";else if("?"==y)this._host=s._host,this._port=s._port,this._path=s._path.slice(),this._query="?",l="query";
else{if("#"!=y){var _=e[u+1],E=e[u+2];("file"!=this._scheme||!m.test(y)||":"!=_&&"|"!=_||f!=E&&"/"!=E&&"\\"!=E&&"?"!=E&&"#"!=E)&&(this._host=s._host,this._port=s._port,this._path=s._path.slice(),this._path.pop()),l="relative path";continue}this._host=s._host,this._port=s._port,this._path=s._path.slice(),this._query=s._query,this._fragment="#",l="fragment"}break;case"relative slash":if("/"!=y&&"\\"!=y){"file"!=this._scheme&&(this._host=s._host,this._port=s._port),l="relative path";continue}"\\"==y&&c("\\ is an invalid code point."),l="file"==this._scheme?"file host":"authority ignore slashes";break;case"authority first slash":if("/"!=y){c("Expected '/', got: "+y),l="authority ignore slashes";continue}l="authority second slash";break;case"authority second slash":if(l="authority ignore slashes","/"!=y){c("Expected '/', got: "+y);continue}break;case"authority ignore slashes":if("/"!=y&&"\\"!=y){l="authority";continue}c("Expected authority, got: "+y);break;case"authority":if("@"==y){w&&(c("@ already seen."),d+="%40"),w=!0;for(var S=0;S<d.length;S++){var O=d[S];if("	"!=O&&"\n"!=O&&"\r"!=O)if(":"!=O||null!==this._password){var T=o(O);null!==this._password?this._password+=T:this._username+=T}else this._password="";else c("Invalid whitespace in authority.")}d=""}else{if(f==y||"/"==y||"\\"==y||"?"==y||"#"==y){u-=d.length,d="",l="host";continue}d+=y}break;case"file host":if(f==y||"/"==y||"\\"==y||"?"==y||"#"==y){2!=d.length||!m.test(d[0])||":"!=d[1]&&"|"!=d[1]?0==d.length?l="relative path start":(this._host=r.call(this,d),d="",l="relative path start"):l="relative path";continue}"	"==y||"\n"==y||"\r"==y?c("Invalid whitespace in file host."):d+=y;break;case"host":case"hostname":if(":"!=y||g){if(f==y||"/"==y||"\\"==y||"?"==y||"#"==y){if(this._host=r.call(this,d),d="",l="relative path start",a)break e;continue}"	"!=y&&"\n"!=y&&"\r"!=y?("["==y?g=!0:"]"==y&&(g=!1),d+=y):c("Invalid code point in host/hostname: "+y)}else if(this._host=r.call(this,d),d="",l="port","hostname"==a)break e;break;case"port":if(/[0-9]/.test(y))d+=y;else{if(f==y||"/"==y||"\\"==y||"?"==y||"#"==y||a){if(""!=d){var M=parseInt(d,10);M!=p[this._scheme]&&(this._port=M+""),d=""}if(a)break e;l="relative path start";continue}"	"==y||"\n"==y||"\r"==y?c("Invalid code point in port: "+y):n.call(this)}break;case"relative path start":if("\\"==y&&c("'\\' not allowed in path."),l="relative path","/"!=y&&"\\"!=y)continue;break;case"relative path":if(f!=y&&"/"!=y&&"\\"!=y&&(a||"?"!=y&&"#"!=y))"	"!=y&&"\n"!=y&&"\r"!=y&&(d+=o(y));else{"\\"==y&&c("\\ not allowed in relative path.");var C;(C=h[d.toLowerCase()])&&(d=C),".."==d?(this._path.pop(),"/"!=y&&"\\"!=y&&this._path.push("")):"."==d&&"/"!=y&&"\\"!=y?this._path.push(""):"."!=d&&("file"==this._scheme&&0==this._path.length&&2==d.length&&m.test(d[0])&&"|"==d[1]&&(d=d[0]+":"),this._path.push(d)),d="","?"==y?(this._query="?",l="query"):"#"==y&&(this._fragment="#",l="fragment")}break;case"query":a||"#"!=y?f!=y&&"	"!=y&&"\n"!=y&&"\r"!=y&&(this._query+=i(y)):(this._fragment="#",l="fragment");break;case"fragment":f!=y&&"	"!=y&&"\n"!=y&&"\r"!=y&&(this._fragment+=y)}u++}}function s(){this._scheme="",this._schemeData="",this._username="",this._password=null,this._host="",this._port="",this._path=[],this._query="",this._fragment="",this._isInvalid=!1,this._isRelative=!1}function c(e,t){void 0===t||t instanceof c||(t=new c(String(t))),this._url=e,s.call(this);var n=e.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,"");a.call(this,n,null,t)}var l=!1;if(!e.forceJURL)try{var u=new URL("b","http://a");l="http://a/b"===u.href}catch(d){}if(!l){var p=Object.create(null);p.ftp=21,p.file=0,p.gopher=70,p.http=80,p.https=443,p.ws=80,p.wss=443;var h=Object.create(null);h["%2e"]=".",h[".%2e"]="..",h["%2e."]="..",h["%2e%2e"]="..";var f=void 0,m=/[a-zA-Z]/,v=/[a-zA-Z0-9\+\-\.]/;c.prototype={get href(){if(this._isInvalid)return this._url;var e="";return(""!=this._username||null!=this._password)&&(e=this._username+(null!=this._password?":"+this._password:"")+"@"),this.protocol+(this._isRelative?"//"+e+this.host:"")+this.pathname+this._query+this._fragment},set href(e){s.call(this),a.call(this,e)},get protocol(){return this._scheme+":"},set protocol(e){this._isInvalid||a.call(this,e+":","scheme start")},get host(){return this._isInvalid?"":this._port?this._host+":"+this._port:this._host},set host(e){!this._isInvalid&&this._isRelative&&a.call(this,e,"host")},get hostname(){return this._host},set hostname(e){!this._isInvalid&&this._isRelative&&a.call(this,e,"hostname")},get port(){return this._port},set port(e){!this._isInvalid&&this._isRelative&&a.call(this,e,"port")},get pathname(){return this._isInvalid?"":this._isRelative?"/"+this._path.join("/"):this._schemeData},set pathname(e){!this._isInvalid&&this._isRelative&&(this._path=[],a.call(this,e,"relative path start"))},get search(){return this._isInvalid||!this._query||"?"==this._query?"":this._query},set search(e){!this._isInvalid&&this._isRelative&&(this._query="?","?"==e[0]&&(e=e.slice(1)),a.call(this,e,"query"))},get hash(){return this._isInvalid||!this._fragment||"#"==this._fragment?"":this._fragment},set hash(e){this._isInvalid||(this._fragment="#","#"==e[0]&&(e=e.slice(1)),a.call(this,e,"fragment"))},get origin(){var e;if(this._isInvalid||!this._scheme)return"";switch(this._scheme){case"data":case"file":case"javascript":case"mailto":return"null"}return e=this.host,e?this._scheme+"://"+e:""}};var w=e.URL;w&&(c.createObjectURL=function(){return w.createObjectURL.apply(w,arguments)},c.revokeObjectURL=function(e){w.revokeObjectURL(e)}),e.URL=c}}(this),function(){Function.prototype.bind||(Function.prototype.bind=function(e){var t=this,n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(e,r)}})}(window.Platform),function(e){function t(e){y.push(e),b||(b=!0,v(r))}function n(e){return window.ShadowDOMPolyfill&&window.ShadowDOMPolyfill.wrapIfNeeded(e)||e}function r(){b=!1;var e=y;y=[],e.sort(function(e,t){return e.uid_-t.uid_});var t=!1;e.forEach(function(e){var n=e.takeRecords();o(e),n.length&&(e.callback_(n,e),t=!0)}),t&&r()}function o(e){e.nodes_.forEach(function(t){var n=m.get(t);n&&n.forEach(function(t){t.observer===e&&t.removeTransientObservers()})})}function i(e,t){for(var n=e;n;n=n.parentNode){var r=m.get(n);if(r)for(var o=0;o<r.length;o++){var i=r[o],a=i.options;if(n===e||a.subtree){var s=t(a);s&&i.enqueue(s)}}}}function a(e){this.callback_=e,this.nodes_=[],this.records_=[],this.uid_=++_}function s(e,t){this.type=e,this.target=t,this.addedNodes=[],this.removedNodes=[],this.previousSibling=null,this.nextSibling=null,this.attributeName=null,this.attributeNamespace=null,this.oldValue=null}function c(e){var t=new s(e.type,e.target);return t.addedNodes=e.addedNodes.slice(),t.removedNodes=e.removedNodes.slice(),t.previousSibling=e.previousSibling,t.nextSibling=e.nextSibling,t.attributeName=e.attributeName,t.attributeNamespace=e.attributeNamespace,t.oldValue=e.oldValue,t}function l(e,t){return E=new s(e,t)}function u(e){return S?S:(S=c(E),S.oldValue=e,S)}function d(){E=S=void 0}function p(e){return e===S||e===E}function h(e,t){return e===t?e:S&&p(e)?S:null}function f(e,t,n){this.observer=e,this.target=t,this.options=n,this.transientObservedNodes=[]}var m=new WeakMap,v=window.msSetImmediate;if(!v){var w=[],g=String(Math.random());window.addEventListener("message",function(e){if(e.data===g){var t=w;w=[],t.forEach(function(e){e()})}}),v=function(e){w.push(e),window.postMessage(g,"*")}}var b=!1,y=[],_=0;a.prototype={observe:function(e,t){if(e=n(e),!t.childList&&!t.attributes&&!t.characterData||t.attributeOldValue&&!t.attributes||t.attributeFilter&&t.attributeFilter.length&&!t.attributes||t.characterDataOldValue&&!t.characterData)throw new SyntaxError;var r=m.get(e);r||m.set(e,r=[]);for(var o,i=0;i<r.length;i++)if(r[i].observer===this){o=r[i],o.removeListeners(),o.options=t;break}o||(o=new f(this,e,t),r.push(o),this.nodes_.push(e)),o.addListeners()},disconnect:function(){this.nodes_.forEach(function(e){for(var t=m.get(e),n=0;n<t.length;n++){var r=t[n];if(r.observer===this){r.removeListeners(),t.splice(n,1);break}}},this),this.records_=[]},takeRecords:function(){var e=this.records_;return this.records_=[],e}};var E,S;f.prototype={enqueue:function(e){var n=this.observer.records_,r=n.length;if(n.length>0){var o=n[r-1],i=h(o,e);if(i)return void(n[r-1]=i)}else t(this.observer);n[r]=e},addListeners:function(){this.addListeners_(this.target)},addListeners_:function(e){var t=this.options;t.attributes&&e.addEventListener("DOMAttrModified",this,!0),t.characterData&&e.addEventListener("DOMCharacterDataModified",this,!0),t.childList&&e.addEventListener("DOMNodeInserted",this,!0),(t.childList||t.subtree)&&e.addEventListener("DOMNodeRemoved",this,!0)},removeListeners:function(){this.removeListeners_(this.target)},removeListeners_:function(e){var t=this.options;t.attributes&&e.removeEventListener("DOMAttrModified",this,!0),t.characterData&&e.removeEventListener("DOMCharacterDataModified",this,!0),t.childList&&e.removeEventListener("DOMNodeInserted",this,!0),(t.childList||t.subtree)&&e.removeEventListener("DOMNodeRemoved",this,!0)},addTransientObserver:function(e){if(e!==this.target){this.addListeners_(e),this.transientObservedNodes.push(e);var t=m.get(e);t||m.set(e,t=[]),t.push(this)}},removeTransientObservers:function(){var e=this.transientObservedNodes;this.transientObservedNodes=[],e.forEach(function(e){this.removeListeners_(e);for(var t=m.get(e),n=0;n<t.length;n++)if(t[n]===this){t.splice(n,1);break}},this)},handleEvent:function(e){switch(e.stopImmediatePropagation(),e.type){case"DOMAttrModified":var t=e.attrName,n=e.relatedNode.namespaceURI,r=e.target,o=new l("attributes",r);o.attributeName=t,o.attributeNamespace=n;var a=e.attrChange===MutationEvent.ADDITION?null:e.prevValue;i(r,function(e){return!e.attributes||e.attributeFilter&&e.attributeFilter.length&&-1===e.attributeFilter.indexOf(t)&&-1===e.attributeFilter.indexOf(n)?void 0:e.attributeOldValue?u(a):o});break;case"DOMCharacterDataModified":var r=e.target,o=l("characterData",r),a=e.prevValue;i(r,function(e){return e.characterData?e.characterDataOldValue?u(a):o:void 0});break;case"DOMNodeRemoved":this.addTransientObserver(e.target);case"DOMNodeInserted":var s,c,r=e.relatedNode,p=e.target;"DOMNodeInserted"===e.type?(s=[p],c=[]):(s=[],c=[p]);var h=p.previousSibling,f=p.nextSibling,o=l("childList",r);o.addedNodes=s,o.removedNodes=c,o.previousSibling=h,o.nextSibling=f,i(r,function(e){return e.childList?o:void 0})}d()}},e.JsMutationObserver=a,e.MutationObserver||(e.MutationObserver=a)}(this),window.HTMLImports=window.HTMLImports||{flags:{}},function(e){function t(e,t){t=t||v,r(function(){i(e,t)},t)}function n(e){return"complete"===e.readyState||e.readyState===g}function r(e,t){if(n(t))e&&e();else{var o=function(){("complete"===t.readyState||t.readyState===g)&&(t.removeEventListener(b,o),r(e,t))};t.addEventListener(b,o)}}function o(e){e.target.__loaded=!0}function i(e,t){function n(){s==c&&e&&e()}function r(e){o(e),s++,n()}var i=t.querySelectorAll("link[rel=import]"),s=0,c=i.length;if(c)for(var l,u=0;c>u&&(l=i[u]);u++)a(l)?r.call(l,{target:l}):(l.addEventListener("load",r),l.addEventListener("error",r));else n()}function a(e){return p?e.__loaded||e.import&&"loading"!==e.import.readyState:e.__importParsed}function s(e){for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)c(t)&&l(t)}function c(e){return"link"===e.localName&&"import"===e.rel}function l(e){var t=e.import;t?o({target:e}):(e.addEventListener("load",o),e.addEventListener("error",o))}var u="import",d=u in document.createElement("link"),p=d,h=/Trident/.test(navigator.userAgent),f=Boolean(window.ShadowDOMPolyfill),m=function(e){return f?ShadowDOMPolyfill.wrapIfNeeded(e):e},v=m(document),w={get:function(){var e=HTMLImports.currentScript||document.currentScript||("complete"!==document.readyState?document.scripts[document.scripts.length-1]:null);return m(e)},configurable:!0};Object.defineProperty(document,"_currentScript",w),Object.defineProperty(v,"_currentScript",w);var g=h?"complete":"interactive",b="readystatechange";p&&(new MutationObserver(function(e){for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)t.addedNodes&&s(t.addedNodes)}).observe(document.head,{childList:!0}),function(){if("loading"===document.readyState)for(var e,t=document.querySelectorAll("link[rel=import]"),n=0,r=t.length;r>n&&(e=t[n]);n++)l(e)}()),t(function(){HTMLImports.ready=!0,HTMLImports.readyTime=(new Date).getTime(),v.dispatchEvent(new CustomEvent("HTMLImportsLoaded",{bubbles:!0}))}),e.useNative=p,e.isImportLoaded=a,e.whenReady=t,e.rootDocument=v,e.IMPORT_LINK_TYPE=u,e.isIE=h}(window.HTMLImports),function(e){var t=(e.path,e.xhr),n=e.flags,r=function(e,t){this.cache={},this.onload=e,this.oncomplete=t,this.inflight=0,this.pending={}};r.prototype={addNodes:function(e){this.inflight+=e.length;for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)this.require(t);this.checkDone()},addNode:function(e){this.inflight++,this.require(e),this.checkDone()},require:function(e){var t=e.src||e.href;e.__nodeUrl=t,this.dedupe(t,e)||this.fetch(t,e)},dedupe:function(e,t){return this.pending[e]?(this.pending[e].push(t),!0):this.cache[e]?(this.onload(e,t,this.cache[e]),this.tail(),!0):(this.pending[e]=[t],!1)},fetch:function(e,r){if(n.load&&console.log("fetch",e,r),e.match(/^data:/)){var o=e.split(","),i=o[0],a=o[1];a=i.indexOf(";base64")>-1?atob(a):decodeURIComponent(a),setTimeout(function(){this.receive(e,r,null,a)}.bind(this),0)}else{var s=function(t,n,o){this.receive(e,r,t,n,o)}.bind(this);t.load(e,s)}},receive:function(e,t,n,r,o){this.cache[e]=r;for(var i,a=this.pending[e],s=0,c=a.length;c>s&&(i=a[s]);s++)this.onload(e,i,r,n,o),this.tail();this.pending[e]=null},tail:function(){--this.inflight,this.checkDone()},checkDone:function(){this.inflight||this.oncomplete()}},t=t||{async:!0,ok:function(e){return e.status>=200&&e.status<300||304===e.status||0===e.status},load:function(n,r,o){var i=new XMLHttpRequest;return(e.flags.debug||e.flags.bust)&&(n+="?"+Math.random()),i.open("GET",n,t.async),i.addEventListener("readystatechange",function(){if(4===i.readyState){var e=i.getResponseHeader("Location"),n=null;if(e)var n="/"===e.substr(0,1)?location.origin+e:e;r.call(o,!t.ok(i)&&i,i.response||i.responseText,n)}}),i.send(),i},loadDocument:function(e,t,n){this.load(e,t,n).responseType="document"}},e.xhr=t,e.Loader=r}(window.HTMLImports),function(e){function t(e){return"link"===e.localName&&e.rel===l}function n(e){var t=r(e);return"data:text/javascript;charset=utf-8,"+encodeURIComponent(t)}function r(e){return e.textContent+o(e)}function o(e){var t=e.__nodeUrl;if(!t){t=e.ownerDocument.baseURI;var n="["+Math.floor(1e3*(Math.random()+1))+"]",r=e.textContent.match(/Polymer\(['"]([^'"]*)/);n=r&&r[1]||n,t+="/"+n+".js"}return"\n//# sourceURL="+t+"\n"}function i(e){var t=e.ownerDocument.createElement("style");return t.textContent=e.textContent,h.resolveUrlsInStyle(t),t}var a=e.rootDocument,s=e.flags,c=e.isIE,l=e.IMPORT_LINK_TYPE,u={documentSelectors:"link[rel="+l+"]",importsSelectors:["link[rel="+l+"]","link[rel=stylesheet]","style","script:not([type])",'script[type="text/javascript"]'].join(","),map:{link:"parseLink",script:"parseScript",style:"parseStyle"},dynamicElements:[],parseNext:function(){var e=this.nextToParse();e&&this.parse(e)},parse:function(e){if(this.isParsed(e))return void(s.parse&&console.log("[%s] is already parsed",e.localName));var t=this[this.map[e.localName]];t&&(this.markParsing(e),t.call(this,e))},parseDynamic:function(e,t){this.dynamicElements.push(e),t||this.parseNext()},markParsing:function(e){s.parse&&console.log("parsing",e),this.parsingElement=e},markParsingComplete:function(e){e.__importParsed=!0,this.markDynamicParsingComplete(e),e.__importElement&&(e.__importElement.__importParsed=!0,this.markDynamicParsingComplete(e.__importElement)),this.parsingElement=null,s.parse&&console.log("completed",e)},markDynamicParsingComplete:function(e){var t=this.dynamicElements.indexOf(e);t>=0&&this.dynamicElements.splice(t,1)},parseImport:function(e){if(HTMLImports.__importsParsingHook&&HTMLImports.__importsParsingHook(e),e.import&&(e.import.__importParsed=!0),this.markParsingComplete(e),e.dispatchEvent(e.__resource&&!e.__error?new CustomEvent("load",{bubbles:!1}):new CustomEvent("error",{bubbles:!1})),e.__pending)for(var t;e.__pending.length;)t=e.__pending.shift(),t&&t({target:e});this.parseNext()},parseLink:function(e){t(e)?this.parseImport(e):(e.href=e.href,this.parseGeneric(e))},parseStyle:function(e){var t=e;e=i(e),e.__importElement=t,this.parseGeneric(e)},parseGeneric:function(e){this.trackElement(e),this.addElementToDocument(e)},rootImportForElement:function(e){for(var t=e;t.ownerDocument.__importLink;)t=t.ownerDocument.__importLink;return t},addElementToDocument:function(e){for(var t=this.rootImportForElement(e.__importElement||e),n=t.__insertedElements=t.__insertedElements||0,r=t.nextElementSibling,o=0;n>o;o++)r=r&&r.nextElementSibling;t.parentNode.insertBefore(e,r)},trackElement:function(e,t){var n=this,r=function(r){t&&t(r),n.markParsingComplete(e),n.parseNext()};if(e.addEventListener("load",r),e.addEventListener("error",r),c&&"style"===e.localName){var o=!1;if(-1==e.textContent.indexOf("@import"))o=!0;else if(e.sheet){o=!0;for(var i,a=e.sheet.cssRules,s=a?a.length:0,l=0;s>l&&(i=a[l]);l++)i.type===CSSRule.IMPORT_RULE&&(o=o&&Boolean(i.styleSheet))}o&&e.dispatchEvent(new CustomEvent("load",{bubbles:!1}))}},parseScript:function(t){var r=document.createElement("script");r.__importElement=t,r.src=t.src?t.src:n(t),e.currentScript=t,this.trackElement(r,function(){r.parentNode.removeChild(r),e.currentScript=null}),this.addElementToDocument(r)},nextToParse:function(){return this._mayParse=[],!this.parsingElement&&(this.nextToParseInDoc(a)||this.nextToParseDynamic())},nextToParseInDoc:function(e,n){if(e&&this._mayParse.indexOf(e)<0){this._mayParse.push(e);for(var r,o=e.querySelectorAll(this.parseSelectorsForNode(e)),i=0,a=o.length;a>i&&(r=o[i]);i++)if(!this.isParsed(r))return this.hasResource(r)?t(r)?this.nextToParseInDoc(r.import,r):r:void 0}return n},nextToParseDynamic:function(){return this.dynamicElements[0]},parseSelectorsForNode:function(e){var t=e.ownerDocument||e;return t===a?this.documentSelectors:this.importsSelectors},isParsed:function(e){return e.__importParsed},needsDynamicParsing:function(e){return this.dynamicElements.indexOf(e)>=0},hasResource:function(e){return t(e)&&void 0===e.import?!1:!0}},d=/(url\()([^)]*)(\))/g,p=/(@import[\s]+(?!url\())([^;]*)(;)/g,h={resolveUrlsInStyle:function(e){var t=e.ownerDocument,n=t.createElement("a");return e.textContent=this.resolveUrlsInCssText(e.textContent,n),e},resolveUrlsInCssText:function(e,t){var n=this.replaceUrls(e,t,d);return n=this.replaceUrls(n,t,p)},replaceUrls:function(e,t,n){return e.replace(n,function(e,n,r,o){var i=r.replace(/["']/g,"");return t.href=i,i=t.href,n+"'"+i+"'"+o})}};e.parser=u,e.path=h}(HTMLImports),function(e){function t(e){return n(e,a)}function n(e,t){return"link"===e.localName&&e.getAttribute("rel")===t}function r(e,t){var n=e;n instanceof Document||(n=document.implementation.createHTMLDocument(a)),n._URL=t;var r=n.createElement("base");r.setAttribute("href",t),n.baseURI||(n.baseURI=t);var o=n.createElement("meta");return o.setAttribute("charset","utf-8"),n.head.appendChild(o),n.head.appendChild(r),e instanceof Document||(n.body.innerHTML=e),window.HTMLTemplateElement&&HTMLTemplateElement.bootstrap&&HTMLTemplateElement.bootstrap(n),n}var o=e.useNative,i=e.flags,a=e.IMPORT_LINK_TYPE;if(o)var s={};else{var c=e.rootDocument,l=(e.xhr,e.Loader),u=e.parser,s={documents:{},documentPreloadSelectors:"link[rel="+a+"]",importsPreloadSelectors:["link[rel="+a+"]"].join(","),loadNode:function(e){d.addNode(e)},loadSubtree:function(e){var t=this.marshalNodes(e);d.addNodes(t)},marshalNodes:function(e){return e.querySelectorAll(this.loadSelectorsForNode(e))},loadSelectorsForNode:function(e){var t=e.ownerDocument||e;return t===c?this.documentPreloadSelectors:this.importsPreloadSelectors},loaded:function(e,n,o,a,s){if(i.load&&console.log("loaded",e,n),n.__resource=o,n.__error=a,t(n)){var c=this.documents[e];void 0===c&&(c=a?null:r(o,s||e),c&&(c.__importLink=n,this.bootDocument(c)),this.documents[e]=c),n.import=c}u.parseNext()},bootDocument:function(e){this.loadSubtree(e),this.observe(e),u.parseNext()},loadedAll:function(){u.parseNext()}},d=new l(s.loaded.bind(s),s.loadedAll.bind(s));if(!document.baseURI){var p={get:function(){var e=document.querySelector("base");return e?e.href:window.location.href},configurable:!0};Object.defineProperty(document,"baseURI",p),Object.defineProperty(c,"baseURI",p)}"function"!=typeof window.CustomEvent&&(window.CustomEvent=function(e,t){var n=document.createEvent("HTMLEvents");return n.initEvent(e,t.bubbles===!1?!1:!0,t.cancelable===!1?!1:!0,t.detail),n})}e.importer=s,e.IMPORT_LINK_TYPE=a,e.importLoader=d}(window.HTMLImports),function(e){function t(e){for(var t,r=0,o=e.length;o>r&&(t=e[r]);r++)"childList"===t.type&&t.addedNodes.length&&n(t.addedNodes)}function n(e){for(var t,i,c,l,u=0,d=e.length;d>u&&(c=e[u]);u++)t||(t=c.ownerDocument,i=s.isParsed(t)),l=r(c),l&&a.loadNode(c),o(c)&&i&&s.parseDynamic(c,l),c.children&&c.children.length&&n(c.children)}function r(e){return 1===e.nodeType&&c.call(e,a.loadSelectorsForNode(e))}function o(e){return 1===e.nodeType&&c.call(e,s.parseSelectorsForNode(e))}function i(e){l.observe(e,{childList:!0,subtree:!0})}var a=(e.IMPORT_LINK_TYPE,e.importer),s=e.parser,c=HTMLElement.prototype.matches||HTMLElement.prototype.matchesSelector||HTMLElement.prototype.webkitMatchesSelector||HTMLElement.prototype.mozMatchesSelector||HTMLElement.prototype.msMatchesSelector,l=new MutationObserver(t);e.observe=i,a.observe=i}(HTMLImports),function(){function e(){HTMLImports.importer.bootDocument(t)}var t=window.ShadowDOMPolyfill?window.ShadowDOMPolyfill.wrapIfNeeded(document):document;HTMLImports.useNative||("complete"===document.readyState||"interactive"===document.readyState&&!window.attachEvent?e():document.addEventListener("DOMContentLoaded",e))}(),window.CustomElements=window.CustomElements||{flags:{}},function(e){function t(e,n,r){var o=e.firstElementChild;if(!o)for(o=e.firstChild;o&&o.nodeType!==Node.ELEMENT_NODE;)o=o.nextSibling;for(;o;)n(o,r)!==!0&&t(o,n,r),o=o.nextElementSibling;return null}function n(e,t){for(var n=e.shadowRoot;n;)r(n,t),n=n.olderShadowRoot}function r(e,r){t(e,function(e){return r(e)?!0:void n(e,r)}),n(e,r)}function o(e){return s(e)?(c(e),!0):void d(e)}function i(e){r(e,function(e){return o(e)?!0:void 0})}function a(e){return o(e)||i(e)}function s(t){if(!t.__upgraded__&&t.nodeType===Node.ELEMENT_NODE){var n=t.getAttribute("is")||t.localName,r=e.registry[n];if(r)return C.dom&&console.group("upgrade:",t.localName),e.upgrade(t),C.dom&&console.groupEnd(),!0}}function c(e){d(e),w(e)&&r(e,function(e){d(e)})}function l(e){if(x.push(e),!D){D=!0;var t=window.Platform&&window.Platform.endOfMicrotask||setTimeout;t(u)}}function u(){D=!1;for(var e,t=x,n=0,r=t.length;r>n&&(e=t[n]);n++)e();x=[]}function d(e){N?l(function(){p(e)}):p(e)}function p(e){(e.attachedCallback||e.detachedCallback||e.__upgraded__&&C.dom)&&(C.dom&&console.group("inserted:",e.localName),w(e)&&(e.__inserted=(e.__inserted||0)+1,e.__inserted<1&&(e.__inserted=1),e.__inserted>1?C.dom&&console.warn("inserted:",e.localName,"insert/remove count:",e.__inserted):e.attachedCallback&&(C.dom&&console.log("inserted:",e.localName),e.attachedCallback())),C.dom&&console.groupEnd())}function h(e){f(e),r(e,function(e){f(e)})}function f(e){N?l(function(){m(e)}):m(e)}function m(e){(e.attachedCallback||e.detachedCallback||e.__upgraded__&&C.dom)&&(C.dom&&console.group("removed:",e.localName),w(e)||(e.__inserted=(e.__inserted||0)-1,e.__inserted>0&&(e.__inserted=0),e.__inserted<0?C.dom&&console.warn("removed:",e.localName,"insert/remove count:",e.__inserted):e.detachedCallback&&e.detachedCallback()),C.dom&&console.groupEnd())}function v(e){return window.ShadowDOMPolyfill?ShadowDOMPolyfill.wrapIfNeeded(e):e}function w(e){for(var t=e,n=v(document);t;){if(t==n)return!0;t=t.parentNode||t.host}}function g(e){if(e.shadowRoot&&!e.shadowRoot.__watched){C.dom&&console.log("watching shadow-root for: ",e.localName);for(var t=e.shadowRoot;t;)b(t),t=t.olderShadowRoot}}function b(e){E(e)}function y(e){if(C.dom){var t=e[0];if(t&&"childList"===t.type&&t.addedNodes&&t.addedNodes){for(var n=t.addedNodes[0];n&&n!==document&&!n.host;)n=n.parentNode;var r=n&&(n.URL||n._URL||n.host&&n.host.localName)||"";r=r.split("/?").shift().split("/").pop()}console.group("mutations (%d) [%s]",e.length,r||"")}e.forEach(function(e){"childList"===e.type&&(H(e.addedNodes,function(e){e.localName&&a(e)}),H(e.removedNodes,function(e){e.localName&&h(e)}))}),C.dom&&console.groupEnd()}function _(e){for(e||(e=v(document));e.parentNode;)e=e.parentNode;var t=e.__observer;t&&(y(t.takeRecords()),u())}function E(e){if(!e.__observer){var t=new MutationObserver(y);t.observe(e,{childList:!0,subtree:!0}),e.__observer=t}}function S(e){E(e)}function O(e){C.dom&&console.group("upgradeDocument: ",e.baseURI.split("/").pop()),a(e),C.dom&&console.groupEnd()}function T(e){j=[],M(e),j=null}function M(e){if(e=v(e),!(j.indexOf(e)>=0)){j.push(e);for(var t,n=e.querySelectorAll("link[rel="+L+"]"),r=0,o=n.length;o>r&&(t=n[r]);r++)t.import&&t.import.__parsed&&M(t.import);O(e)}}var C=window.logFlags||{},L=window.HTMLImports?HTMLImports.IMPORT_LINK_TYPE:"none",N=!window.MutationObserver||window.MutationObserver===window.JsMutationObserver;e.hasPolyfillMutations=N;var j,D=!1,x=[],H=Array.prototype.forEach.call.bind(Array.prototype.forEach);e.IMPORT_LINK_TYPE=L,e.watchShadow=g,e.upgradeDocumentTree=T,e.upgradeAll=a,e.upgradeSubtree=i,e.insertedNode=c,e.observeDocument=S,e.upgradeDocument=O,e.takeRecords=_}(window.CustomElements),function(e){function t(t,a){var s=a||{};if(!t)throw new Error("document.registerElement: first argument `name` must not be empty");if(t.indexOf("-")<0)throw new Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '"+String(t)+"'.");if(n(t))throw new Error("Failed to execute 'registerElement' on 'Document': Registration failed for type '"+String(t)+"'. The type name is invalid.");if(h(t))throw new Error("DuplicateDefinitionError: a type with name '"+String(t)+"' is already registered");if(!s.prototype)throw new Error("Options missing required prototype property");return s.__name=t.toLowerCase(),s.lifecycle=s.lifecycle||{},s.ancestry=r(s.extends),o(s),i(s),d(s.prototype),f(s.__name,s),s.ctor=m(s),s.ctor.prototype=s.prototype,s.prototype.constructor=s.ctor,e.ready&&e.upgradeDocumentTree(document),s.ctor}function n(e){for(var t=0;t<O.length;t++)if(e===O[t])return!0}function r(e){var t=h(e);return t?r(t.extends).concat([t]):[]}function o(e){for(var t,n=e.extends,r=0;t=e.ancestry[r];r++)n=t.is&&t.tag;e.tag=n||e.__name,n&&(e.is=e.__name)}function i(e){if(!Object.__proto__){var t=HTMLElement.prototype;if(e.is){var n=document.createElement(e.tag),r=Object.getPrototypeOf(n);r===e.prototype&&(t=r)}for(var o,i=e.prototype;i&&i!==t;)o=Object.getPrototypeOf(i),i.__proto__=o,i=o;e.native=t}}function a(e){return s(C(e.tag),e)}function s(t,n){return n.is&&t.setAttribute("is",n.is),c(t,n),t.__upgraded__=!0,u(t),e.insertedNode(t),e.upgradeSubtree(t),t}function c(e,t){Object.__proto__?e.__proto__=t.prototype:(l(e,t.prototype,t.native),e.__proto__=t.prototype)}function l(e,t,n){for(var r={},o=t;o!==n&&o!==HTMLElement.prototype;){for(var i,a=Object.getOwnPropertyNames(o),s=0;i=a[s];s++)r[i]||(Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(o,i)),r[i]=1);o=Object.getPrototypeOf(o)}}function u(e){e.createdCallback&&e.createdCallback()}function d(e){if(!e.setAttribute._polyfilled){var t=e.setAttribute;e.setAttribute=function(e,n){p.call(this,e,n,t)};var n=e.removeAttribute;e.removeAttribute=function(e){p.call(this,e,null,n)},e.setAttribute._polyfilled=!0}}function p(e,t,n){e=e.toLowerCase();var r=this.getAttribute(e);n.apply(this,arguments);var o=this.getAttribute(e);this.attributeChangedCallback&&o!==r&&this.attributeChangedCallback(e,r,o)}function h(e){return e?T[e.toLowerCase()]:void 0}function f(e,t){T[e]=t}function m(e){return function(){return a(e)}}function v(e,t,n){return e===M?w(t,n):L(e,t)}function w(e,t){var n=h(t||e);if(n){if(e==n.tag&&t==n.is)return new n.ctor;if(!t&&!n.is)return new n.ctor}if(t){var r=w(e);return r.setAttribute("is",t),r}var r=C(e);return e.indexOf("-")>=0&&c(r,HTMLElement),r}function g(e){if(!e.__upgraded__&&e.nodeType===Node.ELEMENT_NODE){var t=e.getAttribute("is"),n=h(t||e.localName);if(n){if(t&&n.tag==e.localName)return s(e,n);if(!t&&!n.extends)return s(e,n)}}}function b(t){var n=N.call(this,t);return e.upgradeAll(n),n}e||(e=window.CustomElements={flags:{}});var y=e.flags,_=Boolean(document.registerElement),E=!y.register&&_&&!window.ShadowDOMPolyfill&&(!window.HTMLImports||HTMLImports.useNative);if(E){var S=function(){};e.registry={},e.upgradeElement=S,e.watchShadow=S,e.upgrade=S,e.upgradeAll=S,e.upgradeSubtree=S,e.observeDocument=S,e.upgradeDocument=S,e.upgradeDocumentTree=S,e.takeRecords=S,e.reservedTagList=[]}else{var O=["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"],T={},M="http://www.w3.org/1999/xhtml",C=document.createElement.bind(document),L=document.createElementNS.bind(document),N=Node.prototype.cloneNode;document.registerElement=t,document.createElement=w,document.createElementNS=v,Node.prototype.cloneNode=b,e.registry=T,e.upgrade=g}var j;j=Object.__proto__||E?function(e,t){return e instanceof t}:function(e,t){for(var n=e;n;){if(n===t.prototype)return!0;n=n.__proto__}return!1},e.instanceof=j,e.reservedTagList=O,document.register=document.registerElement,e.hasNative=_,e.useNative=E}(window.CustomElements),function(e){function t(e){return"link"===e.localName&&e.getAttribute("rel")===n}var n=e.IMPORT_LINK_TYPE,r={selectors:["link[rel="+n+"]"],map:{link:"parseLink"},parse:function(e){if(!e.__parsed){e.__parsed=!0;var t=e.querySelectorAll(r.selectors);o(t,function(e){r[r.map[e.localName]](e)}),CustomElements.upgradeDocument(e),CustomElements.observeDocument(e)}},parseLink:function(e){t(e)&&this.parseImport(e)},parseImport:function(e){e.import&&r.parse(e.import)}},o=Array.prototype.forEach.call.bind(Array.prototype.forEach);e.parser=r,e.IMPORT_LINK_TYPE=n}(window.CustomElements),function(e){function t(){CustomElements.parser.parse(document),CustomElements.upgradeDocument(document),window.HTMLImports&&(HTMLImports.__importsParsingHook=function(e){CustomElements.parser.parse(e.import)}),CustomElements.ready=!0,setTimeout(function(){CustomElements.readyTime=Date.now(),window.HTMLImports&&(CustomElements.elapsed=CustomElements.readyTime-HTMLImports.readyTime),document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))})}if("function"!=typeof window.CustomEvent&&(window.CustomEvent=function(e,t){t=t||{};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,Boolean(t.bubbles),Boolean(t.cancelable),t.detail),n},window.CustomEvent.prototype=window.Event.prototype),"complete"===document.readyState||e.flags.eager)t();else if("interactive"!==document.readyState||window.attachEvent||window.HTMLImports&&!window.HTMLImports.ready){var n=window.HTMLImports&&!HTMLImports.ready?"HTMLImportsLoaded":"DOMContentLoaded";window.addEventListener(n,t)}else t()}(window.CustomElements),function(){if(window.ShadowDOMPolyfill){var e=["upgradeAll","upgradeSubtree","observeDocument","upgradeDocument"],t={};e.forEach(function(e){t[e]=CustomElements[e]}),e.forEach(function(e){CustomElements[e]=function(n){return t[e](wrap(n))}})}}(),function(e){"use strict";function t(){window.Polymer===o&&(window.Polymer=function(){throw new Error('You tried to use polymer without loading it first. To load polymer, <link rel="import" href="components/polymer/polymer.html">')})}if(!window.performance){var n=Date.now();window.performance={now:function(){return Date.now()-n
}}}window.requestAnimationFrame||(window.requestAnimationFrame=function(){var e=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;return e?function(t){return e(function(){t(performance.now())})}:function(e){return window.setTimeout(e,1e3/60)}}()),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(){return window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(e){clearTimeout(e)}}());var r=[],o=function(e){"string"!=typeof e&&1===arguments.length&&Array.prototype.push.call(arguments,document._currentScript),r.push(arguments)};window.Polymer=o,e.consumeDeclarations=function(t){e.consumeDeclarations=function(){throw"Possible attempt to load Polymer twice"},t&&t(r),r=null},HTMLImports.useNative?t():addEventListener("DOMContentLoaded",t)}(window.Platform),function(){var e=document.createElement("style");e.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var t=document.querySelector("head");t.insertBefore(e,t.firstChild)}(Platform),function(e){function t(e,t){return t=t||[],t.map||(t=[t]),e.apply(this,t.map(r))}function n(e,n,r){var o;switch(arguments.length){case 0:return;case 1:o=null;break;case 2:o=n.apply(this);break;default:o=t(r,n)}i[e]=o}function r(e){return i[e]}function o(e,n){HTMLImports.whenImportsReady(function(){t(n,e)})}var i={};e.marshal=r,e.modularize=n,e.using=o}(window);;
/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
// @version: 0.4.2
window.PolymerGestures={},function(a){var b=!1,c=document.createElement("meta");if(c.createShadowRoot){var d=c.createShadowRoot(),e=document.createElement("span");d.appendChild(e),c.addEventListener("testpath",function(a){a.path&&(b=a.path[0]===e),a.stopPropagation()});var f=new CustomEvent("testpath",{bubbles:!0});document.head.appendChild(c),e.dispatchEvent(f),c.parentNode.removeChild(c),d=e=null}c=null;var g={shadow:function(a){return a?a.shadowRoot||a.webkitShadowRoot:void 0},canTarget:function(a){return a&&Boolean(a.elementFromPoint)},targetingShadow:function(a){var b=this.shadow(a);return this.canTarget(b)?b:void 0},olderShadow:function(a){var b=a.olderShadowRoot;if(!b){var c=a.querySelector("shadow");c&&(b=c.olderShadowRoot)}return b},allShadows:function(a){for(var b=[],c=this.shadow(a);c;)b.push(c),c=this.olderShadow(c);return b},searchRoot:function(a,b,c){var d,e;return a?(d=a.elementFromPoint(b,c),d?e=this.targetingShadow(d):a!==document&&(e=this.olderShadow(a)),this.searchRoot(e,b,c)||d):void 0},owner:function(a){if(!a)return document;for(var b=a;b.parentNode;)b=b.parentNode;return b.nodeType!=Node.DOCUMENT_NODE&&b.nodeType!=Node.DOCUMENT_FRAGMENT_NODE&&(b=document),b},findTarget:function(a){if(b&&a.path&&a.path.length)return a.path[0];var c=a.clientX,d=a.clientY,e=this.owner(a.target);return e.elementFromPoint(c,d)||(e=document),this.searchRoot(e,c,d)},findTouchAction:function(a){var c;if(b&&a.path&&a.path.length){for(var d=a.path,e=0;e<d.length;e++)if(c=d[e],c.nodeType===Node.ELEMENT_NODE&&c.hasAttribute("touch-action"))return c.getAttribute("touch-action")}else for(c=a.target;c;){if(c.nodeType===Node.ELEMENT_NODE&&c.hasAttribute("touch-action"))return c.getAttribute("touch-action");c=c.parentNode||c.host}return"auto"},LCA:function(a,b){if(a===b)return a;if(a&&!b)return a;if(b&&!a)return b;if(!b&&!a)return document;if(a.contains&&a.contains(b))return a;if(b.contains&&b.contains(a))return b;var c=this.depth(a),d=this.depth(b),e=c-d;for(e>=0?a=this.walk(a,e):b=this.walk(b,-e);a&&b&&a!==b;)a=a.parentNode||a.host,b=b.parentNode||b.host;return a},walk:function(a,b){for(var c=0;a&&b>c;c++)a=a.parentNode||a.host;return a},depth:function(a){for(var b=0;a;)b++,a=a.parentNode||a.host;return b},deepContains:function(a,b){var c=this.LCA(a,b);return c===a},insideNode:function(a,b,c){var d=a.getBoundingClientRect();return d.left<=b&&b<=d.right&&d.top<=c&&c<=d.bottom},path:function(a){var c;if(b&&a.path&&a.path.length)c=a.path;else{c=[];for(var d=this.findTarget(a);d;)c.push(d),d=d.parentNode||d.host}return c}};a.targetFinding=g,a.findTarget=g.findTarget.bind(g),a.deepContains=g.deepContains.bind(g),a.insideNode=g.insideNode}(window.PolymerGestures),function(){function a(a){return"html /deep/ "+b(a)}function b(a){return'[touch-action="'+a+'"]'}function c(a){return"{ -ms-touch-action: "+a+"; touch-action: "+a+";}"}var d=["none","auto","pan-x","pan-y",{rule:"pan-x pan-y",selectors:["pan-x pan-y","pan-y pan-x"]},"manipulation"],e="",f="string"==typeof document.head.style.touchAction,g=!window.ShadowDOMPolyfill&&document.head.createShadowRoot;if(f){d.forEach(function(d){String(d)===d?(e+=b(d)+c(d)+"\n",g&&(e+=a(d)+c(d)+"\n")):(e+=d.selectors.map(b)+c(d.rule)+"\n",g&&(e+=d.selectors.map(a)+c(d.rule)+"\n"))});var h=document.createElement("style");h.textContent=e,document.head.appendChild(h)}}(),function(a){var b=["bubbles","cancelable","view","detail","screenX","screenY","clientX","clientY","ctrlKey","altKey","shiftKey","metaKey","button","relatedTarget","pageX","pageY"],c=[!1,!1,null,null,0,0,0,0,!1,!1,!1,!1,0,null,0,0],d=function(){return function(){}},e={preventTap:d,makeBaseEvent:function(a,b){var c=document.createEvent("Event");return c.initEvent(a,b.bubbles||!1,b.cancelable||!1),c.preventTap=e.preventTap(c),c},makeGestureEvent:function(a,b){b=b||Object.create(null);for(var c,d=this.makeBaseEvent(a,b),e=0,f=Object.keys(b);e<f.length;e++)c=f[e],d[c]=b[c];return d},makePointerEvent:function(a,d){d=d||Object.create(null);for(var e,f=this.makeBaseEvent(a,d),g=0;g<b.length;g++)e=b[g],f[e]=d[e]||c[g];f.buttons=d.buttons||0;var h=0;return h=d.pressure?d.pressure:f.buttons?.5:0,f.x=f.clientX,f.y=f.clientY,f.pointerId=d.pointerId||0,f.width=d.width||0,f.height=d.height||0,f.pressure=h,f.tiltX=d.tiltX||0,f.tiltY=d.tiltY||0,f.pointerType=d.pointerType||"",f.hwTimestamp=d.hwTimestamp||0,f.isPrimary=d.isPrimary||!1,f._source=d._source||"",f}};a.eventFactory=e}(window.PolymerGestures),function(a){function b(){if(c){var a=new Map;return a.pointers=d,a}this.keys=[],this.values=[]}var c=window.Map&&window.Map.prototype.forEach,d=function(){return this.size};b.prototype={set:function(a,b){var c=this.keys.indexOf(a);c>-1?this.values[c]=b:(this.keys.push(a),this.values.push(b))},has:function(a){return this.keys.indexOf(a)>-1},"delete":function(a){var b=this.keys.indexOf(a);b>-1&&(this.keys.splice(b,1),this.values.splice(b,1))},get:function(a){var b=this.keys.indexOf(a);return this.values[b]},clear:function(){this.keys.length=0,this.values.length=0},forEach:function(a,b){this.values.forEach(function(c,d){a.call(b,c,this.keys[d],this)},this)},pointers:function(){return this.keys.length}},a.PointerMap=b}(window.PolymerGestures),function(a){var b,c=["bubbles","cancelable","view","detail","screenX","screenY","clientX","clientY","ctrlKey","altKey","shiftKey","metaKey","button","relatedTarget","buttons","pointerId","width","height","pressure","tiltX","tiltY","pointerType","hwTimestamp","isPrimary","type","target","currentTarget","which","pageX","pageY","timeStamp","preventTap","tapPrevented","_source"],d=[!1,!1,null,null,0,0,0,0,!1,!1,!1,!1,0,null,0,0,0,0,0,0,0,"",0,!1,"",null,null,0,0,0,0,function(){},!1],e="undefined"!=typeof SVGElementInstance,f=a.eventFactory,g={IS_IOS:!1,pointermap:new a.PointerMap,requiredGestures:new a.PointerMap,eventMap:Object.create(null),eventSources:Object.create(null),eventSourceList:[],gestures:[],dependencyMap:{down:{listeners:0,index:-1},up:{listeners:0,index:-1}},gestureQueue:[],registerSource:function(a,b){var c=b,d=c.events;d&&(d.forEach(function(a){c[a]&&(this.eventMap[a]=c[a].bind(c))},this),this.eventSources[a]=c,this.eventSourceList.push(c))},registerGesture:function(a,b){var c=Object.create(null);c.listeners=0,c.index=this.gestures.length;for(var d,e=0;e<b.exposes.length;e++)d=b.exposes[e].toLowerCase(),this.dependencyMap[d]=c;this.gestures.push(b)},register:function(a,b){for(var c,d=this.eventSourceList.length,e=0;d>e&&(c=this.eventSourceList[e]);e++)c.register.call(c,a,b)},unregister:function(a){for(var b,c=this.eventSourceList.length,d=0;c>d&&(b=this.eventSourceList[d]);d++)b.unregister.call(b,a)},down:function(a){this.requiredGestures.set(a.pointerId,b),this.fireEvent("down",a)},move:function(a){a.type="move",this.fillGestureQueue(a)},up:function(a){this.fireEvent("up",a),this.requiredGestures.delete(a.pointerId)},cancel:function(a){a.tapPrevented=!0,this.fireEvent("up",a),this.requiredGestures.delete(a.pointerId)},addGestureDependency:function(a,b){var c=a._pgEvents;if(c)for(var d,e,f,g=Object.keys(c),h=0;h<g.length;h++)f=g[h],c[f]>0&&(d=this.dependencyMap[f],e=d?d.index:-1,b[e]=!0)},eventHandler:function(c){var d=c.type;if("touchstart"===d||"mousedown"===d||"pointerdown"===d||"MSPointerDown"===d)if(c._handledByPG||(b={}),this.IS_IOS)for(var e,f=a.targetFinding.path(c),g=0;g<f.length;g++)e=f[g],this.addGestureDependency(e,b);else this.addGestureDependency(c.currentTarget,b);if(!c._handledByPG){var h=this.eventMap&&this.eventMap[d];h&&h(c),c._handledByPG=!0}},listen:function(a,b){for(var c,d=0,e=b.length;e>d&&(c=b[d]);d++)this.addEvent(a,c)},unlisten:function(a,b){for(var c,d=0,e=b.length;e>d&&(c=b[d]);d++)this.removeEvent(a,c)},addEvent:function(a,b){a.addEventListener(b,this.boundHandler)},removeEvent:function(a,b){a.removeEventListener(b,this.boundHandler)},makeEvent:function(a,b){var c=f.makePointerEvent(a,b);return c.preventDefault=b.preventDefault,c.tapPrevented=b.tapPrevented,c._target=c._target||b.target,c},fireEvent:function(a,b){var c=this.makeEvent(a,b);return this.dispatchEvent(c)},cloneEvent:function(a){for(var b,f=Object.create(null),g=0;g<c.length;g++)b=c[g],f[b]=a[b]||d[g],("target"===b||"relatedTarget"===b)&&e&&f[b]instanceof SVGElementInstance&&(f[b]=f[b].correspondingUseElement);return f.preventDefault=function(){a.preventDefault()},f},dispatchEvent:function(a){var b=a._target;if(b){b.dispatchEvent(a);var c=this.cloneEvent(a);c.target=b,this.fillGestureQueue(c)}},gestureTrigger:function(){for(var a,b,c=0;c<this.gestureQueue.length;c++){a=this.gestureQueue[c],b=a._requiredGestures;for(var d,e,f=0;f<this.gestures.length;f++)b[f]&&(d=this.gestures[f],e=d[a.type],e&&e.call(d,a))}this.gestureQueue.length=0},fillGestureQueue:function(a){this.gestureQueue.length||requestAnimationFrame(this.boundGestureTrigger),a._requiredGestures=this.requiredGestures.get(a.pointerId),this.gestureQueue.push(a)}};g.boundHandler=g.eventHandler.bind(g),g.boundGestureTrigger=g.gestureTrigger.bind(g),a.dispatcher=g,a.activateGesture=function(a,b){var c=b.toLowerCase(),d=g.dependencyMap[c];if(d){var e=g.gestures[d.index];if(a._pgListeners||(g.register(a),a._pgListeners=0),e){var f,h=e.defaultActions&&e.defaultActions[c];switch(a.nodeType){case Node.ELEMENT_NODE:f=a;break;case Node.DOCUMENT_FRAGMENT_NODE:f=a.host;break;default:f=null}h&&f&&!f.hasAttribute("touch-action")&&f.setAttribute("touch-action",h)}a._pgEvents||(a._pgEvents={}),a._pgEvents[c]=(a._pgEvents[c]||0)+1,a._pgListeners++}return Boolean(d)},a.addEventListener=function(b,c,d,e){d&&(a.activateGesture(b,c),b.addEventListener(c,d,e))},a.deactivateGesture=function(a,b){var c=b.toLowerCase(),d=g.dependencyMap[c];return d&&(a._pgListeners>0&&a._pgListeners--,0===a._pgListeners&&g.unregister(a),a._pgEvents&&(a._pgEvents[c]>0?a._pgEvents[c]--:a._pgEvents[c]=0)),Boolean(d)},a.removeEventListener=function(b,c,d,e){d&&(a.deactivateGesture(b,c),b.removeEventListener(c,d,e))}}(window.PolymerGestures),function(a){var b=a.dispatcher,c=b.pointermap,d=25,e=[0,1,4,2],f=!1;try{f=1===new MouseEvent("test",{buttons:1}).buttons}catch(g){}var h={POINTER_ID:1,POINTER_TYPE:"mouse",events:["mousedown","mousemove","mouseup"],exposes:["down","up","move"],register:function(a){b.listen(a,this.events)},unregister:function(a){a!==document&&b.unlisten(a,this.events)},lastTouches:[],isEventSimulatedFromTouch:function(a){for(var b,c=this.lastTouches,e=a.clientX,f=a.clientY,g=0,h=c.length;h>g&&(b=c[g]);g++){var i=Math.abs(e-b.x),j=Math.abs(f-b.y);if(d>=i&&d>=j)return!0}},prepareEvent:function(a){var c=b.cloneEvent(a);return c.pointerId=this.POINTER_ID,c.isPrimary=!0,c.pointerType=this.POINTER_TYPE,c._source="mouse",f||(c.buttons=e[c.which]||0),c},mousedown:function(d){if(!this.isEventSimulatedFromTouch(d)){var e=c.has(this.POINTER_ID);e&&this.mouseup(d);var f=this.prepareEvent(d);f.target=a.findTarget(d),c.set(this.POINTER_ID,f.target),b.down(f)}},mousemove:function(a){if(!this.isEventSimulatedFromTouch(a)){var d=c.get(this.POINTER_ID);if(d){var e=this.prepareEvent(a);e.target=d,0===e.buttons?(b.cancel(e),this.cleanupMouse()):b.move(e)}}},mouseup:function(d){if(!this.isEventSimulatedFromTouch(d)){var e=this.prepareEvent(d);e.relatedTarget=a.findTarget(d),e.target=c.get(this.POINTER_ID),b.up(e),this.cleanupMouse()}},cleanupMouse:function(){c["delete"](this.POINTER_ID)}};a.mouseEvents=h}(window.PolymerGestures),function(a){var b=a.dispatcher,c=(a.targetFinding.allShadows.bind(a.targetFinding),b.pointermap),d=(Array.prototype.map.call.bind(Array.prototype.map),2500),e=200,f=20,g=!1,h={IS_IOS:!1,events:["touchstart","touchmove","touchend","touchcancel"],exposes:["down","up","move"],register:function(a,c){(this.IS_IOS?c:!c)&&b.listen(a,this.events)},unregister:function(a){this.IS_IOS||b.unlisten(a,this.events)},scrollTypes:{EMITTER:"none",XSCROLLER:"pan-x",YSCROLLER:"pan-y"},touchActionToScrollType:function(a){var b=a,c=this.scrollTypes;return b===c.EMITTER?"none":b===c.XSCROLLER?"X":b===c.YSCROLLER?"Y":"XY"},POINTER_TYPE:"touch",firstTouch:null,isPrimaryTouch:function(a){return this.firstTouch===a.identifier},setPrimaryTouch:function(a){(0===c.pointers()||1===c.pointers()&&c.has(1))&&(this.firstTouch=a.identifier,this.firstXY={X:a.clientX,Y:a.clientY},this.scrolling=null,this.cancelResetClickCount())},removePrimaryPointer:function(a){a.isPrimary&&(this.firstTouch=null,this.firstXY=null,this.resetClickCount())},clickCount:0,resetId:null,resetClickCount:function(){var a=function(){this.clickCount=0,this.resetId=null}.bind(this);this.resetId=setTimeout(a,e)},cancelResetClickCount:function(){this.resetId&&clearTimeout(this.resetId)},typeToButtons:function(a){var b=0;return("touchstart"===a||"touchmove"===a)&&(b=1),b},findTarget:function(b,d){if("touchstart"===this.currentTouchEvent.type){if(this.isPrimaryTouch(b)){var e={clientX:b.clientX,clientY:b.clientY,path:this.currentTouchEvent.path,target:this.currentTouchEvent.target};return a.findTarget(e)}return a.findTarget(b)}return c.get(d)},touchToPointer:function(a){var c=this.currentTouchEvent,d=b.cloneEvent(a),e=d.pointerId=a.identifier+2;d.target=this.findTarget(a,e),d.bubbles=!0,d.cancelable=!0,d.detail=this.clickCount,d.buttons=this.typeToButtons(c.type),d.width=a.webkitRadiusX||a.radiusX||0,d.height=a.webkitRadiusY||a.radiusY||0,d.pressure=a.webkitForce||a.force||.5,d.isPrimary=this.isPrimaryTouch(a),d.pointerType=this.POINTER_TYPE,d._source="touch";var f=this;return d.preventDefault=function(){f.scrolling=!1,f.firstXY=null,c.preventDefault()},d},processTouches:function(a,b){var d=a.changedTouches;this.currentTouchEvent=a;for(var e,f,g=0;g<d.length;g++)e=d[g],f=this.touchToPointer(e),"touchstart"===a.type&&c.set(f.pointerId,f.target),c.has(f.pointerId)&&b.call(this,f),("touchend"===a.type||a._cancel)&&this.cleanUpPointer(f)},shouldScroll:function(b){if(this.firstXY){var c,d=a.targetFinding.findTouchAction(b),e=this.touchActionToScrollType(d);if("none"===e)c=!1;else if("XY"===e)c=!0;else{var f=b.changedTouches[0],g=e,h="Y"===e?"X":"Y",i=Math.abs(f["client"+g]-this.firstXY[g]),j=Math.abs(f["client"+h]-this.firstXY[h]);c=i>=j}return c}},findTouch:function(a,b){for(var c,d=0,e=a.length;e>d&&(c=a[d]);d++)if(c.identifier===b)return!0},vacuumTouches:function(a){var b=a.touches;if(c.pointers()>=b.length){var d=[];c.forEach(function(a,c){if(1!==c&&!this.findTouch(b,c-2)){var e=a;d.push(e)}},this),d.forEach(function(a){this.cancel(a),c.delete(a.pointerId)})}},touchstart:function(a){this.vacuumTouches(a),this.setPrimaryTouch(a.changedTouches[0]),this.dedupSynthMouse(a),this.scrolling||(this.clickCount++,this.processTouches(a,this.down))},down:function(a){b.down(a)},touchmove:function(a){if(g)a.cancelable&&this.processTouches(a,this.move);else if(this.scrolling){if(this.firstXY){var b=a.changedTouches[0],c=b.clientX-this.firstXY.X,d=b.clientY-this.firstXY.Y,e=Math.sqrt(c*c+d*d);e>=f&&(this.touchcancel(a),this.scrolling=!0,this.firstXY=null)}}else null===this.scrolling&&this.shouldScroll(a)?this.scrolling=!0:(this.scrolling=!1,a.preventDefault(),this.processTouches(a,this.move))},move:function(a){b.move(a)},touchend:function(a){this.dedupSynthMouse(a),this.processTouches(a,this.up)},up:function(c){c.relatedTarget=a.findTarget(c),b.up(c)},cancel:function(a){b.cancel(a)},touchcancel:function(a){a._cancel=!0,this.processTouches(a,this.cancel)},cleanUpPointer:function(a){c["delete"](a.pointerId),this.removePrimaryPointer(a)},dedupSynthMouse:function(b){var c=a.mouseEvents.lastTouches,e=b.changedTouches[0];if(this.isPrimaryTouch(e)){var f={x:e.clientX,y:e.clientY};c.push(f);var g=function(a,b){var c=a.indexOf(b);c>-1&&a.splice(c,1)}.bind(null,c,f);setTimeout(g,d)}}};a.touchEvents=h}(window.PolymerGestures),function(a){var b=a.dispatcher,c=b.pointermap,d=window.MSPointerEvent&&"number"==typeof window.MSPointerEvent.MSPOINTER_TYPE_MOUSE,e={events:["MSPointerDown","MSPointerMove","MSPointerUp","MSPointerCancel"],register:function(a){b.listen(a,this.events)},unregister:function(a){a!==document&&b.unlisten(a,this.events)},POINTER_TYPES:["","unavailable","touch","pen","mouse"],prepareEvent:function(a){var c=a;return c=b.cloneEvent(a),d&&(c.pointerType=this.POINTER_TYPES[a.pointerType]),c._source="ms",c},cleanup:function(a){c["delete"](a)},MSPointerDown:function(d){var e=this.prepareEvent(d);e.target=a.findTarget(d),c.set(d.pointerId,e.target),b.down(e)},MSPointerMove:function(a){var d=c.get(a.pointerId);if(d){var e=this.prepareEvent(a);e.target=d,b.move(e)}},MSPointerUp:function(d){var e=this.prepareEvent(d);e.relatedTarget=a.findTarget(d),e.target=c.get(e.pointerId),b.up(e),this.cleanup(d.pointerId)},MSPointerCancel:function(d){var e=this.prepareEvent(d);e.relatedTarget=a.findTarget(d),e.target=c.get(e.pointerId),b.cancel(e),this.cleanup(d.pointerId)}};a.msEvents=e}(window.PolymerGestures),function(a){var b=a.dispatcher,c=b.pointermap,d={events:["pointerdown","pointermove","pointerup","pointercancel"],prepareEvent:function(a){var c=b.cloneEvent(a);return c._source="pointer",c},register:function(a){b.listen(a,this.events)},unregister:function(a){a!==document&&b.unlisten(a,this.events)},cleanup:function(a){c["delete"](a)},pointerdown:function(d){var e=this.prepareEvent(d);e.target=a.findTarget(d),c.set(e.pointerId,e.target),b.down(e)},pointermove:function(a){var d=c.get(a.pointerId);if(d){var e=this.prepareEvent(a);e.target=d,b.move(e)}},pointerup:function(d){var e=this.prepareEvent(d);e.relatedTarget=a.findTarget(d),e.target=c.get(e.pointerId),b.up(e),this.cleanup(d.pointerId)},pointercancel:function(d){var e=this.prepareEvent(d);e.relatedTarget=a.findTarget(d),e.target=c.get(e.pointerId),b.cancel(e),this.cleanup(d.pointerId)}};a.pointerEvents=d}(window.PolymerGestures),function(a){var b=a.dispatcher,c=window.navigator;window.PointerEvent?b.registerSource("pointer",a.pointerEvents):c.msPointerEnabled?b.registerSource("ms",a.msEvents):(b.registerSource("mouse",a.mouseEvents),void 0!==window.ontouchstart&&b.registerSource("touch",a.touchEvents));var d=navigator.userAgent,e=d.match(/iPad|iPhone|iPod/)&&"ontouchstart"in window;b.IS_IOS=e,a.touchEvents.IS_IOS=e,b.register(document,!0)}(window.PolymerGestures),function(a){var b=a.dispatcher,c=a.eventFactory,d=new a.PointerMap,e={events:["down","move","up"],exposes:["trackstart","track","trackx","tracky","trackend"],defaultActions:{track:"none",trackx:"pan-y",tracky:"pan-x"},WIGGLE_THRESHOLD:4,clampDir:function(a){return a>0?1:-1},calcPositionDelta:function(a,b){var c=0,d=0;return a&&b&&(c=b.pageX-a.pageX,d=b.pageY-a.pageY),{x:c,y:d}},fireTrack:function(a,b,d){var e=d,f=this.calcPositionDelta(e.downEvent,b),g=this.calcPositionDelta(e.lastMoveEvent,b);if(g.x)e.xDirection=this.clampDir(g.x);else if("trackx"===a)return;if(g.y)e.yDirection=this.clampDir(g.y);else if("tracky"===a)return;var h={bubbles:!0,cancelable:!0,trackInfo:e.trackInfo,relatedTarget:b.relatedTarget,pointerType:b.pointerType,pointerId:b.pointerId,_source:"track"};"tracky"!==a&&(h.x=b.x,h.dx=f.x,h.ddx=g.x,h.clientX=b.clientX,h.pageX=b.pageX,h.screenX=b.screenX,h.xDirection=e.xDirection),"trackx"!==a&&(h.dy=f.y,h.ddy=g.y,h.y=b.y,h.clientY=b.clientY,h.pageY=b.pageY,h.screenY=b.screenY,h.yDirection=e.yDirection);var i=c.makeGestureEvent(a,h);e.downTarget.dispatchEvent(i)},down:function(a){if(a.isPrimary&&("mouse"===a.pointerType?1===a.buttons:!0)){var b={downEvent:a,downTarget:a.target,trackInfo:{},lastMoveEvent:null,xDirection:0,yDirection:0,tracking:!1};d.set(a.pointerId,b)}},move:function(a){var b=d.get(a.pointerId);if(b){if(!b.tracking){var c=this.calcPositionDelta(b.downEvent,a),e=c.x*c.x+c.y*c.y;e>this.WIGGLE_THRESHOLD&&(b.tracking=!0,b.lastMoveEvent=b.downEvent,this.fireTrack("trackstart",a,b))}b.tracking&&(this.fireTrack("track",a,b),this.fireTrack("trackx",a,b),this.fireTrack("tracky",a,b)),b.lastMoveEvent=a}},up:function(a){var b=d.get(a.pointerId);b&&(b.tracking&&this.fireTrack("trackend",a,b),d.delete(a.pointerId))}};b.registerGesture("track",e)}(window.PolymerGestures),function(a){var b=a.dispatcher,c=a.eventFactory,d={HOLD_DELAY:200,WIGGLE_THRESHOLD:16,events:["down","move","up"],exposes:["hold","holdpulse","release"],heldPointer:null,holdJob:null,pulse:function(){var a=Date.now()-this.heldPointer.timeStamp,b=this.held?"holdpulse":"hold";this.fireHold(b,a),this.held=!0},cancel:function(){clearInterval(this.holdJob),this.held&&this.fireHold("release"),this.held=!1,this.heldPointer=null,this.target=null,this.holdJob=null},down:function(a){a.isPrimary&&!this.heldPointer&&(this.heldPointer=a,this.target=a.target,this.holdJob=setInterval(this.pulse.bind(this),this.HOLD_DELAY))},up:function(a){this.heldPointer&&this.heldPointer.pointerId===a.pointerId&&this.cancel()},move:function(a){if(this.heldPointer&&this.heldPointer.pointerId===a.pointerId){var b=a.clientX-this.heldPointer.clientX,c=a.clientY-this.heldPointer.clientY;b*b+c*c>this.WIGGLE_THRESHOLD&&this.cancel()}},fireHold:function(a,b){var d={bubbles:!0,cancelable:!0,pointerType:this.heldPointer.pointerType,pointerId:this.heldPointer.pointerId,x:this.heldPointer.clientX,y:this.heldPointer.clientY,_source:"hold"};b&&(d.holdTime=b);var e=c.makeGestureEvent(a,d);this.target.dispatchEvent(e)}};b.registerGesture("hold",d)}(window.PolymerGestures),function(a){var b=a.dispatcher,c=a.eventFactory,d=new a.PointerMap,e={events:["down","up"],exposes:["tap"],down:function(a){a.isPrimary&&!a.tapPrevented&&d.set(a.pointerId,{target:a.target,buttons:a.buttons,x:a.clientX,y:a.clientY})},shouldTap:function(a,b){return"mouse"===a.pointerType?1===b.buttons:!a.tapPrevented},up:function(b){var e=d.get(b.pointerId);if(e&&this.shouldTap(b,e)){var f=a.targetFinding.LCA(e.target,b.relatedTarget);if(f){var g=c.makeGestureEvent("tap",{bubbles:!0,cancelable:!0,x:b.clientX,y:b.clientY,detail:b.detail,pointerType:b.pointerType,pointerId:b.pointerId,altKey:b.altKey,ctrlKey:b.ctrlKey,metaKey:b.metaKey,shiftKey:b.shiftKey,_source:"tap"});f.dispatchEvent(g)}}d.delete(b.pointerId)}};c.preventTap=function(a){return function(){a.tapPrevented=!0,d.delete(a.pointerId)}},b.registerGesture("tap",e)}(window.PolymerGestures),function(a){"use strict";function b(a,b){if(!a)throw new Error("ASSERT: "+b)}function c(a){return a>=48&&57>=a}function d(a){return 32===a||9===a||11===a||12===a||160===a||a>=5760&&"\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\ufeff".indexOf(String.fromCharCode(a))>0}function e(a){return 10===a||13===a||8232===a||8233===a}function f(a){return 36===a||95===a||a>=65&&90>=a||a>=97&&122>=a}function g(a){return 36===a||95===a||a>=65&&90>=a||a>=97&&122>=a||a>=48&&57>=a}function h(a){return"this"===a}function i(){for(;Y>X&&d(W.charCodeAt(X));)++X}function j(){var a,b;for(a=X++;Y>X&&(b=W.charCodeAt(X),g(b));)++X;return W.slice(a,X)}function k(){var a,b,c;return a=X,b=j(),c=1===b.length?S.Identifier:h(b)?S.Keyword:"null"===b?S.NullLiteral:"true"===b||"false"===b?S.BooleanLiteral:S.Identifier,{type:c,value:b,range:[a,X]}}function l(){var a,b,c=X,d=W.charCodeAt(X),e=W[X];switch(d){case 46:case 40:case 41:case 59:case 44:case 123:case 125:case 91:case 93:case 58:case 63:return++X,{type:S.Punctuator,value:String.fromCharCode(d),range:[c,X]};default:if(a=W.charCodeAt(X+1),61===a)switch(d){case 37:case 38:case 42:case 43:case 45:case 47:case 60:case 62:case 124:return X+=2,{type:S.Punctuator,value:String.fromCharCode(d)+String.fromCharCode(a),range:[c,X]};case 33:case 61:return X+=2,61===W.charCodeAt(X)&&++X,{type:S.Punctuator,value:W.slice(c,X),range:[c,X]}}}return b=W[X+1],e===b&&"&|".indexOf(e)>=0?(X+=2,{type:S.Punctuator,value:e+b,range:[c,X]}):"<>=!+-*%&|^/".indexOf(e)>=0?(++X,{type:S.Punctuator,value:e,range:[c,X]}):void s({},V.UnexpectedToken,"ILLEGAL")}function m(){var a,d,e;if(e=W[X],b(c(e.charCodeAt(0))||"."===e,"Numeric literal must start with a decimal digit or a decimal point"),d=X,a="","."!==e){for(a=W[X++],e=W[X],"0"===a&&e&&c(e.charCodeAt(0))&&s({},V.UnexpectedToken,"ILLEGAL");c(W.charCodeAt(X));)a+=W[X++];e=W[X]}if("."===e){for(a+=W[X++];c(W.charCodeAt(X));)a+=W[X++];e=W[X]}if("e"===e||"E"===e)if(a+=W[X++],e=W[X],("+"===e||"-"===e)&&(a+=W[X++]),c(W.charCodeAt(X)))for(;c(W.charCodeAt(X));)a+=W[X++];else s({},V.UnexpectedToken,"ILLEGAL");return f(W.charCodeAt(X))&&s({},V.UnexpectedToken,"ILLEGAL"),{type:S.NumericLiteral,value:parseFloat(a),range:[d,X]}}function n(){var a,c,d,f="",g=!1;for(a=W[X],b("'"===a||'"'===a,"String literal must starts with a quote"),c=X,++X;Y>X;){if(d=W[X++],d===a){a="";break}if("\\"===d)if(d=W[X++],d&&e(d.charCodeAt(0)))"\r"===d&&"\n"===W[X]&&++X;else switch(d){case"n":f+="\n";break;case"r":f+="\r";break;case"t":f+="	";break;case"b":f+="\b";break;case"f":f+="\f";break;case"v":f+="";break;default:f+=d}else{if(e(d.charCodeAt(0)))break;f+=d}}return""!==a&&s({},V.UnexpectedToken,"ILLEGAL"),{type:S.StringLiteral,value:f,octal:g,range:[c,X]}}function o(a){return a.type===S.Identifier||a.type===S.Keyword||a.type===S.BooleanLiteral||a.type===S.NullLiteral}function p(){var a;return i(),X>=Y?{type:S.EOF,range:[X,X]}:(a=W.charCodeAt(X),40===a||41===a||58===a?l():39===a||34===a?n():f(a)?k():46===a?c(W.charCodeAt(X+1))?m():l():c(a)?m():l())}function q(){var a;return a=$,X=a.range[1],$=p(),X=a.range[1],a}function r(){var a;a=X,$=p(),X=a}function s(a,c){var d,e=Array.prototype.slice.call(arguments,2),f=c.replace(/%(\d)/g,function(a,c){return b(c<e.length,"Message reference must be in range"),e[c]});throw d=new Error(f),d.index=X,d.description=f,d}function t(a){s(a,V.UnexpectedToken,a.value)}function u(a){var b=q();(b.type!==S.Punctuator||b.value!==a)&&t(b)}function v(a){return $.type===S.Punctuator&&$.value===a}function w(a){return $.type===S.Keyword&&$.value===a}function x(){var a=[];for(u("[");!v("]");)v(",")?(q(),a.push(null)):(a.push(bb()),v("]")||u(","));return u("]"),Z.createArrayExpression(a)}function y(){var a;return i(),a=q(),a.type===S.StringLiteral||a.type===S.NumericLiteral?Z.createLiteral(a):Z.createIdentifier(a.value)}function z(){var a,b;return a=$,i(),(a.type===S.EOF||a.type===S.Punctuator)&&t(a),b=y(),u(":"),Z.createProperty("init",b,bb())}function A(){var a=[];for(u("{");!v("}");)a.push(z()),v("}")||u(",");return u("}"),Z.createObjectExpression(a)}function B(){var a;return u("("),a=bb(),u(")"),a}function C(){var a,b,c;return v("(")?B():(a=$.type,a===S.Identifier?c=Z.createIdentifier(q().value):a===S.StringLiteral||a===S.NumericLiteral?c=Z.createLiteral(q()):a===S.Keyword?w("this")&&(q(),c=Z.createThisExpression()):a===S.BooleanLiteral?(b=q(),b.value="true"===b.value,c=Z.createLiteral(b)):a===S.NullLiteral?(b=q(),b.value=null,c=Z.createLiteral(b)):v("[")?c=x():v("{")&&(c=A()),c?c:void t(q()))}function D(){var a=[];if(u("("),!v(")"))for(;Y>X&&(a.push(bb()),!v(")"));)u(",");return u(")"),a}function E(){var a;return a=q(),o(a)||t(a),Z.createIdentifier(a.value)}function F(){return u("."),E()}function G(){var a;return u("["),a=bb(),u("]"),a}function H(){var a,b,c;for(a=C();;)if(v("["))c=G(),a=Z.createMemberExpression("[",a,c);else if(v("."))c=F(),a=Z.createMemberExpression(".",a,c);else{if(!v("("))break;b=D(),a=Z.createCallExpression(a,b)}return a}function I(){var a,b;return $.type!==S.Punctuator&&$.type!==S.Keyword?b=ab():v("+")||v("-")||v("!")?(a=q(),b=I(),b=Z.createUnaryExpression(a.value,b)):w("delete")||w("void")||w("typeof")?s({},V.UnexpectedToken):b=ab(),b}function J(a){var b=0;if(a.type!==S.Punctuator&&a.type!==S.Keyword)return 0;switch(a.value){case"||":b=1;break;case"&&":b=2;break;case"==":case"!=":case"===":case"!==":b=6;break;case"<":case">":case"<=":case">=":case"instanceof":b=7;break;case"in":b=7;break;case"+":case"-":b=9;break;case"*":case"/":case"%":b=11}return b}function K(){var a,b,c,d,e,f,g,h;if(g=I(),b=$,c=J(b),0===c)return g;for(b.prec=c,q(),e=I(),d=[g,b,e];(c=J($))>0;){for(;d.length>2&&c<=d[d.length-2].prec;)e=d.pop(),f=d.pop().value,g=d.pop(),a=Z.createBinaryExpression(f,g,e),d.push(a);b=q(),b.prec=c,d.push(b),a=I(),d.push(a)}for(h=d.length-1,a=d[h];h>1;)a=Z.createBinaryExpression(d[h-1].value,d[h-2],a),h-=2;return a}function L(){var a,b,c;return a=K(),v("?")&&(q(),b=L(),u(":"),c=L(),a=Z.createConditionalExpression(a,b,c)),a}function M(){var a,b;return a=q(),a.type!==S.Identifier&&t(a),b=v("(")?D():[],Z.createFilter(a.value,b)}function N(){for(;v("|");)q(),M()}function O(){i(),r();var a=bb();a&&(","===$.value||"in"==$.value&&a.type===U.Identifier?Q(a):(N(),"as"===$.value?P(a):Z.createTopLevel(a))),$.type!==S.EOF&&t($)}function P(a){q();var b=q().value;Z.createAsExpression(a,b)}function Q(a){var b;","===$.value&&(q(),$.type!==S.Identifier&&t($),b=q().value),q();var c=bb();N(),Z.createInExpression(a.name,b,c)}function R(a,b){return Z=b,W=a,X=0,Y=W.length,$=null,_={labelSet:{}},O()}var S,T,U,V,W,X,Y,Z,$,_;S={BooleanLiteral:1,EOF:2,Identifier:3,Keyword:4,NullLiteral:5,NumericLiteral:6,Punctuator:7,StringLiteral:8},T={},T[S.BooleanLiteral]="Boolean",T[S.EOF]="<end>",T[S.Identifier]="Identifier",T[S.Keyword]="Keyword",T[S.NullLiteral]="Null",T[S.NumericLiteral]="Numeric",T[S.Punctuator]="Punctuator",T[S.StringLiteral]="String",U={ArrayExpression:"ArrayExpression",BinaryExpression:"BinaryExpression",CallExpression:"CallExpression",ConditionalExpression:"ConditionalExpression",EmptyStatement:"EmptyStatement",ExpressionStatement:"ExpressionStatement",Identifier:"Identifier",Literal:"Literal",LabeledStatement:"LabeledStatement",LogicalExpression:"LogicalExpression",MemberExpression:"MemberExpression",ObjectExpression:"ObjectExpression",Program:"Program",Property:"Property",ThisExpression:"ThisExpression",UnaryExpression:"UnaryExpression"},V={UnexpectedToken:"Unexpected token %0",UnknownLabel:"Undefined label '%0'",Redeclaration:"%0 '%1' has already been declared"};var ab=H,bb=L;a.esprima={parse:R}}(this),function(a){"use strict";function b(a,b,d,e){var f;try{if(f=c(a),f.scopeIdent&&(d.nodeType!==Node.ELEMENT_NODE||"TEMPLATE"!==d.tagName||"bind"!==b&&"repeat"!==b))throw Error("as and in can only be used within <template bind/repeat>")}catch(g){return void console.error("Invalid expression syntax: "+a,g)}return function(a,b,c){var d=f.getBinding(a,e,c);return f.scopeIdent&&d&&(b.polymerExpressionScopeIdent_=f.scopeIdent,f.indexIdent&&(b.polymerExpressionIndexIdent_=f.indexIdent)),d}}function c(a){var b=q[a];if(!b){var c=new j;esprima.parse(a,c),b=new l(c),q[a]=b}return b}function d(a){this.value=a,this.valueFn_=void 0}function e(a){this.name=a,this.path=Path.get(a)}function f(a,b,c){this.computed="["==c,this.dynamicDeps="function"==typeof a||a.dynamicDeps||this.computed&&!(b instanceof d),this.simplePath=!this.dynamicDeps&&(b instanceof e||b instanceof d)&&(a instanceof f||a instanceof e),this.object=this.simplePath?a:i(a),this.property=!this.computed||this.simplePath?b:i(b)}function g(a,b){this.name=a,this.args=[];for(var c=0;c<b.length;c++)this.args[c]=i(b[c])}function h(){throw Error("Not Implemented")}function i(a){return"function"==typeof a?a:a.valueFn()}function j(){this.expression=null,this.filters=[],this.deps={},this.currentPath=void 0,this.scopeIdent=void 0,this.indexIdent=void 0,this.dynamicDeps=!1}function k(a){this.value_=a}function l(a){if(this.scopeIdent=a.scopeIdent,this.indexIdent=a.indexIdent,!a.expression)throw Error("No expression found.");this.expression=a.expression,i(this.expression),this.filters=a.filters,this.dynamicDeps=a.dynamicDeps}function m(a){return String(a).replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()})}function n(a,b){for(;a[t]&&!Object.prototype.hasOwnProperty.call(a,b);)a=a[t];return a}function o(a){switch(a){case"":return!1;case"false":case"null":case"true":return!0}return isNaN(Number(a))?!1:!0}function p(){}var q=Object.create(null);d.prototype={valueFn:function(){if(!this.valueFn_){var a=this.value;this.valueFn_=function(){return a}}return this.valueFn_}},e.prototype={valueFn:function(){if(!this.valueFn_){var a=(this.name,this.path);this.valueFn_=function(b,c){return c&&c.addPath(b,a),a.getValueFrom(b)}}return this.valueFn_},setValue:function(a,b){return 1==this.path.length,a=n(a,this.path[0]),this.path.setValueFrom(a,b)}},f.prototype={get fullPath(){if(!this.fullPath_){var a=this.object instanceof f?this.object.fullPath.slice():[this.object.name];
a.push(this.property instanceof e?this.property.name:this.property.value),this.fullPath_=Path.get(a)}return this.fullPath_},valueFn:function(){if(!this.valueFn_){var a=this.object;if(this.simplePath){var b=this.fullPath;this.valueFn_=function(a,c){return c&&c.addPath(a,b),b.getValueFrom(a)}}else if(this.computed){var c=this.property;this.valueFn_=function(b,d,e){var f=a(b,d,e),g=c(b,d,e);return d&&d.addPath(f,[g]),f?f[g]:void 0}}else{var b=Path.get(this.property.name);this.valueFn_=function(c,d,e){var f=a(c,d,e);return d&&d.addPath(f,b),b.getValueFrom(f)}}}return this.valueFn_},setValue:function(a,b){if(this.simplePath)return this.fullPath.setValueFrom(a,b),b;var c=this.object(a),d=this.property instanceof e?this.property.name:this.property(a);return c[d]=b}},g.prototype={transform:function(a,b,c,d,e){var f=c[this.name],g=a;if(f)g=void 0;else if(f=g[this.name],!f)return void console.error("Cannot find function or filter: "+this.name);if(d?f=f.toModel:"function"==typeof f.toDOM&&(f=f.toDOM),"function"!=typeof f)return void console.error("Cannot find function or filter: "+this.name);for(var h=e||[],j=0;j<this.args.length;j++)h.push(i(this.args[j])(a,b,c));return f.apply(g,h)}};var r={"+":function(a){return+a},"-":function(a){return-a},"!":function(a){return!a}},s={"+":function(a,b){return a+b},"-":function(a,b){return a-b},"*":function(a,b){return a*b},"/":function(a,b){return a/b},"%":function(a,b){return a%b},"<":function(a,b){return b>a},">":function(a,b){return a>b},"<=":function(a,b){return b>=a},">=":function(a,b){return a>=b},"==":function(a,b){return a==b},"!=":function(a,b){return a!=b},"===":function(a,b){return a===b},"!==":function(a,b){return a!==b},"&&":function(a,b){return a&&b},"||":function(a,b){return a||b}};j.prototype={createUnaryExpression:function(a,b){if(!r[a])throw Error("Disallowed operator: "+a);return b=i(b),function(c,d,e){return r[a](b(c,d,e))}},createBinaryExpression:function(a,b,c){if(!s[a])throw Error("Disallowed operator: "+a);switch(b=i(b),c=i(c),a){case"||":return this.dynamicDeps=!0,function(a,d,e){return b(a,d,e)||c(a,d,e)};case"&&":return this.dynamicDeps=!0,function(a,d,e){return b(a,d,e)&&c(a,d,e)}}return function(d,e,f){return s[a](b(d,e,f),c(d,e,f))}},createConditionalExpression:function(a,b,c){return a=i(a),b=i(b),c=i(c),this.dynamicDeps=!0,function(d,e,f){return a(d,e,f)?b(d,e,f):c(d,e,f)}},createIdentifier:function(a){var b=new e(a);return b.type="Identifier",b},createMemberExpression:function(a,b,c){var d=new f(b,c,a);return d.dynamicDeps&&(this.dynamicDeps=!0),d},createCallExpression:function(a,b){if(!(a instanceof e))throw Error("Only identifier function invocations are allowed");var c=new g(a.name,b);return function(a,b,d){return c.transform(a,b,d,!1)}},createLiteral:function(a){return new d(a.value)},createArrayExpression:function(a){for(var b=0;b<a.length;b++)a[b]=i(a[b]);return function(b,c,d){for(var e=[],f=0;f<a.length;f++)e.push(a[f](b,c,d));return e}},createProperty:function(a,b,c){return{key:b instanceof e?b.name:b.value,value:c}},createObjectExpression:function(a){for(var b=0;b<a.length;b++)a[b].value=i(a[b].value);return function(b,c,d){for(var e={},f=0;f<a.length;f++)e[a[f].key]=a[f].value(b,c,d);return e}},createFilter:function(a,b){this.filters.push(new g(a,b))},createAsExpression:function(a,b){this.expression=a,this.scopeIdent=b},createInExpression:function(a,b,c){this.expression=c,this.scopeIdent=a,this.indexIdent=b},createTopLevel:function(a){this.expression=a},createThisExpression:h},k.prototype={open:function(){return this.value_},discardChanges:function(){return this.value_},deliver:function(){},close:function(){}},l.prototype={getBinding:function(a,b,c){function d(){if(h)return h=!1,g;i.dynamicDeps&&f.startReset();var c=i.getValue(a,i.dynamicDeps?f:void 0,b);return i.dynamicDeps&&f.finishReset(),c}function e(c){return i.setValue(a,c,b),c}if(c)return this.getValue(a,void 0,b);var f=new CompoundObserver,g=this.getValue(a,f,b),h=!0,i=this;return new ObserverTransform(f,d,e,!0)},getValue:function(a,b,c){for(var d=i(this.expression)(a,b,c),e=0;e<this.filters.length;e++)d=this.filters[e].transform(a,b,c,!1,[d]);return d},setValue:function(a,b,c){for(var d=this.filters?this.filters.length:0;d-->0;)b=this.filters[d].transform(a,void 0,c,!0,[b]);return this.expression.setValue?this.expression.setValue(a,b):void 0}};var t="@"+Math.random().toString(36).slice(2);p.prototype={styleObject:function(a){var b=[];for(var c in a)b.push(m(c)+": "+a[c]);return b.join("; ")},tokenList:function(a){var b=[];for(var c in a)a[c]&&b.push(c);return b.join(" ")},prepareInstancePositionChanged:function(a){var b=a.polymerExpressionIndexIdent_;if(b)return function(a,c){a.model[b]=c}},prepareBinding:function(a,c,d){var e=Path.get(a);{if(o(a)||!e.valid)return b(a,c,d,this);if(1==e.length)return function(a,b,c){if(c)return e.getValueFrom(a);var d=n(a,e[0]);return new PathObserver(d,e)}}},prepareInstanceModel:function(a){var b=a.polymerExpressionScopeIdent_;if(b){var c=a.templateInstance?a.templateInstance.model:a.model,d=a.polymerExpressionIndexIdent_;return function(a){return u(c,a,b,d)}}}};var u="__proto__"in{}?function(a,b,c,d){var e={};return e[c]=b,e[d]=void 0,e[t]=a,e.__proto__=a,e}:function(a,b,c,d){var e=Object.create(a);return Object.defineProperty(e,c,{value:b,configurable:!0,writable:!0}),Object.defineProperty(e,d,{value:void 0,configurable:!0,writable:!0}),Object.defineProperty(e,t,{value:a,configurable:!0,writable:!0}),e};a.PolymerExpressions=p,p.getExpression=c}(this),Polymer={version:"0.4.2"},"function"==typeof window.Polymer&&(Polymer={}),window.Platform||(logFlags=window.logFlags||{},Platform={flush:function(){}},CustomElements={useNative:!0,ready:!0,takeRecords:function(){},"instanceof":function(a,b){return a instanceof b}},HTMLImports={useNative:!0},addEventListener("HTMLImportsLoaded",function(){document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))}),ShadowDOMPolyfill=null,wrap=unwrap=function(a){return a}),function(a){function b(a,b){b=b||q,d(function(){f(a,b)},b)}function c(a){return"complete"===a.readyState||a.readyState===s}function d(a,b){if(c(b))a&&a();else{var e=function(){("complete"===b.readyState||b.readyState===s)&&(b.removeEventListener(t,e),d(a,b))};b.addEventListener(t,e)}}function e(a){a.target.__loaded=!0}function f(a,b){function c(){h==i&&a&&a()}function d(a){e(a),h++,c()}var f=b.querySelectorAll("link[rel=import]"),h=0,i=f.length;if(i)for(var j,k=0;i>k&&(j=f[k]);k++)g(j)?d.call(j,{target:j}):(j.addEventListener("load",d),j.addEventListener("error",d));else c()}function g(a){return m?a.__loaded||a.import&&"loading"!==a.import.readyState:a.__importParsed}function h(a){for(var b,c=0,d=a.length;d>c&&(b=a[c]);c++)i(b)&&j(b)}function i(a){return"link"===a.localName&&"import"===a.rel}function j(a){var b=a.import;b?e({target:a}):(a.addEventListener("load",e),a.addEventListener("error",e))}var k="import",l=k in document.createElement("link"),m=l,n=/Trident/.test(navigator.userAgent),o=Boolean(window.ShadowDOMPolyfill),p=function(a){return o?ShadowDOMPolyfill.wrapIfNeeded(a):a},q=p(document),r={get:function(){var a=HTMLImports.currentScript||document.currentScript||("complete"!==document.readyState?document.scripts[document.scripts.length-1]:null);return p(a)},configurable:!0};Object.defineProperty(document,"_currentScript",r),Object.defineProperty(q,"_currentScript",r);var s=n?"complete":"interactive",t="readystatechange";m&&(new MutationObserver(function(a){for(var b,c=0,d=a.length;d>c&&(b=a[c]);c++)b.addedNodes&&h(b.addedNodes)}).observe(document.head,{childList:!0}),function(){if("loading"===document.readyState)for(var a,b=document.querySelectorAll("link[rel=import]"),c=0,d=b.length;d>c&&(a=b[c]);c++)j(a)}()),b(function(){HTMLImports.ready=!0,HTMLImports.readyTime=(new Date).getTime(),q.dispatchEvent(new CustomEvent("HTMLImportsLoaded",{bubbles:!0}))}),a.useNative=m,a.isImportLoaded=g,a.whenReady=b,a.rootDocument=q,a.IMPORT_LINK_TYPE=k,a.isIE=n}(window.HTMLImports),function(a){function b(a,b){return b=b||[],b.map||(b=[b]),a.apply(this,b.map(d))}function c(a,c,d){var e;switch(arguments.length){case 0:return;case 1:e=null;break;case 2:e=c.apply(this);break;default:e=b(d,c)}f[a]=e}function d(a){return f[a]}function e(a,c){HTMLImports.whenImportsReady(function(){b(c,a)})}var f={};a.marshal=d,a.modularize=c,a.using=e}(window),function(){var a=document.createElement("style");a.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; } \n";var b=document.querySelector("head");b.insertBefore(a,b.firstChild)}(Platform),function(a){"use strict";function b(){function a(a){b=a}if("function"!=typeof Object.observe||"function"!=typeof Array.observe)return!1;var b=[],c={},d=[];return Object.observe(c,a),Array.observe(d,a),c.id=1,c.id=2,delete c.id,d.push(1,2),d.length=0,Object.deliverChangeRecords(a),5!==b.length?!1:"add"!=b[0].type||"update"!=b[1].type||"delete"!=b[2].type||"splice"!=b[3].type||"splice"!=b[4].type?!1:(Object.unobserve(c,a),Array.unobserve(d,a),!0)}function c(){if("undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime)return!1;if("undefined"!=typeof navigator&&navigator.getDeviceStorage)return!1;try{var a=new Function("","return true;");return a()}catch(b){return!1}}function d(a){return+a===a>>>0&&""!==a}function e(a){return+a}function f(a){return a===Object(a)}function g(a,b){return a===b?0!==a||1/a===1/b:R(a)&&R(b)?!0:a!==a&&b!==b}function h(a){if(void 0===a)return"eof";var b=a.charCodeAt(0);switch(b){case 91:case 93:case 46:case 34:case 39:case 48:return a;case 95:case 36:return"ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return b>=97&&122>=b||b>=65&&90>=b?"ident":b>=49&&57>=b?"number":"else"}function i(){}function j(a){function b(){if(!(m>=a.length)){var b=a[m+1];return"inSingleQuote"==n&&"'"==b||"inDoubleQuote"==n&&'"'==b?(m++,d=b,o.append(),!0):void 0}}for(var c,d,e,f,g,j,k,l=[],m=-1,n="beforePath",o={push:function(){void 0!==e&&(l.push(e),e=void 0)},append:function(){void 0===e?e=d:e+=d}};n;)if(m++,c=a[m],"\\"!=c||!b(n)){if(f=h(c),k=W[n],g=k[f]||k["else"]||"error","error"==g)return;if(n=g[0],j=o[g[1]]||i,d=void 0===g[2]?c:g[2],j(),"afterPath"===n)return l}}function k(a){return V.test(a)}function l(a,b){if(b!==X)throw Error("Use Path.get to retrieve path objects");for(var c=0;c<a.length;c++)this.push(String(a[c]));Q&&this.length&&(this.getValueFrom=this.compiledGetValueFromFn())}function m(a){if(a instanceof l)return a;if((null==a||0==a.length)&&(a=""),"string"!=typeof a){if(d(a.length))return new l(a,X);a=String(a)}var b=Y[a];if(b)return b;var c=j(a);if(!c)return Z;var b=new l(c,X);return Y[a]=b,b}function n(a){return d(a)?"["+a+"]":'["'+a.replace(/"/g,'\\"')+'"]'}function o(b){for(var c=0;_>c&&b.check_();)c++;return O&&(a.dirtyCheckCycleCount=c),c>0}function p(a){for(var b in a)return!1;return!0}function q(a){return p(a.added)&&p(a.removed)&&p(a.changed)}function r(a,b){var c={},d={},e={};for(var f in b){var g=a[f];(void 0===g||g!==b[f])&&(f in a?g!==b[f]&&(e[f]=g):d[f]=void 0)}for(var f in a)f in b||(c[f]=a[f]);return Array.isArray(a)&&a.length!==b.length&&(e.length=a.length),{added:c,removed:d,changed:e}}function s(){if(!ab.length)return!1;for(var a=0;a<ab.length;a++)ab[a]();return ab.length=0,!0}function t(){function a(a){b&&b.state_===fb&&!d&&b.check_(a)}var b,c,d=!1,e=!0;return{open:function(c){if(b)throw Error("ObservedObject in use");e||Object.deliverChangeRecords(a),b=c,e=!1},observe:function(b,d){c=b,d?Array.observe(c,a):Object.observe(c,a)},deliver:function(b){d=b,Object.deliverChangeRecords(a),d=!1},close:function(){b=void 0,Object.unobserve(c,a),cb.push(this)}}}function u(a,b,c){var d=cb.pop()||t();return d.open(a),d.observe(b,c),d}function v(){function a(b,f){b&&(b===d&&(e[f]=!0),h.indexOf(b)<0&&(h.push(b),Object.observe(b,c)),a(Object.getPrototypeOf(b),f))}function b(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.object!==d||e[c.name]||"setPrototype"===c.type)return!1}return!0}function c(c){if(!b(c)){for(var d,e=0;e<g.length;e++)d=g[e],d.state_==fb&&d.iterateObjects_(a);for(var e=0;e<g.length;e++)d=g[e],d.state_==fb&&d.check_()}}var d,e,f=0,g=[],h=[],i={object:void 0,objects:h,open:function(b,c){d||(d=c,e={}),g.push(b),f++,b.iterateObjects_(a)},close:function(){if(f--,!(f>0)){for(var a=0;a<h.length;a++)Object.unobserve(h[a],c),x.unobservedCount++;g.length=0,h.length=0,d=void 0,e=void 0,db.push(this)}}};return i}function w(a,b){return $&&$.object===b||($=db.pop()||v(),$.object=b),$.open(a,b),$}function x(){this.state_=eb,this.callback_=void 0,this.target_=void 0,this.directObserver_=void 0,this.value_=void 0,this.id_=ib++}function y(a){x._allObserversCount++,kb&&jb.push(a)}function z(){x._allObserversCount--}function A(a){x.call(this),this.value_=a,this.oldObject_=void 0}function B(a){if(!Array.isArray(a))throw Error("Provided object is not an Array");A.call(this,a)}function C(a,b){x.call(this),this.object_=a,this.path_=m(b),this.directObserver_=void 0}function D(a){x.call(this),this.reportChangesOnOpen_=a,this.value_=[],this.directObserver_=void 0,this.observed_=[]}function E(a){return a}function F(a,b,c,d){this.callback_=void 0,this.target_=void 0,this.value_=void 0,this.observable_=a,this.getValueFn_=b||E,this.setValueFn_=c||E,this.dontPassThroughSet_=d}function G(a,b,c){for(var d={},e={},f=0;f<b.length;f++){var g=b[f];nb[g.type]?(g.name in c||(c[g.name]=g.oldValue),"update"!=g.type&&("add"!=g.type?g.name in d?(delete d[g.name],delete c[g.name]):e[g.name]=!0:g.name in e?delete e[g.name]:d[g.name]=!0)):(console.error("Unknown changeRecord type: "+g.type),console.error(g))}for(var h in d)d[h]=a[h];for(var h in e)e[h]=void 0;var i={};for(var h in c)if(!(h in d||h in e)){var j=a[h];c[h]!==j&&(i[h]=j)}return{added:d,removed:e,changed:i}}function H(a,b,c){return{index:a,removed:b,addedCount:c}}function I(){}function J(a,b,c,d,e,f){return sb.calcSplices(a,b,c,d,e,f)}function K(a,b,c,d){return c>b||a>d?-1:b==c||d==a?0:c>a?d>b?b-c:d-c:b>d?d-a:b-a}function L(a,b,c,d){for(var e=H(b,c,d),f=!1,g=0,h=0;h<a.length;h++){var i=a[h];if(i.index+=g,!f){var j=K(e.index,e.index+e.removed.length,i.index,i.index+i.addedCount);if(j>=0){a.splice(h,1),h--,g-=i.addedCount-i.removed.length,e.addedCount+=i.addedCount-j;var k=e.removed.length+i.removed.length-j;if(e.addedCount||k){var c=i.removed;if(e.index<i.index){var l=e.removed.slice(0,i.index-e.index);Array.prototype.push.apply(l,c),c=l}if(e.index+e.removed.length>i.index+i.addedCount){var m=e.removed.slice(i.index+i.addedCount-e.index);Array.prototype.push.apply(c,m)}e.removed=c,i.index<e.index&&(e.index=i.index)}else f=!0}else if(e.index<i.index){f=!0,a.splice(h,0,e),h++;var n=e.addedCount-e.removed.length;i.index+=n,g+=n}}}f||a.push(e)}function M(a,b){for(var c=[],f=0;f<b.length;f++){var g=b[f];switch(g.type){case"splice":L(c,g.index,g.removed.slice(),g.addedCount);break;case"add":case"update":case"delete":if(!d(g.name))continue;var h=e(g.name);if(0>h)continue;L(c,h,[g.oldValue],1);break;default:console.error("Unexpected record type: "+JSON.stringify(g))}}return c}function N(a,b){var c=[];return M(a,b).forEach(function(b){return 1==b.addedCount&&1==b.removed.length?void(b.removed[0]!==a[b.index]&&c.push(b)):void(c=c.concat(J(a,b.index,b.index+b.addedCount,b.removed,0,b.removed.length)))}),c}var O=a.testingExposeCycleCount,P=b(),Q=c(),R=a.Number.isNaN||function(b){return"number"==typeof b&&a.isNaN(b)},S="__proto__"in{}?function(a){return a}:function(a){var b=a.__proto__;if(!b)return a;var c=Object.create(b);return Object.getOwnPropertyNames(a).forEach(function(b){Object.defineProperty(c,b,Object.getOwnPropertyDescriptor(a,b))}),c},T="[$_a-zA-Z]",U="[$_a-zA-Z0-9]",V=new RegExp("^"+T+"+"+U+"*$"),W={beforePath:{ws:["beforePath"],ident:["inIdent","append"],"[":["beforeElement"],eof:["afterPath"]},inPath:{ws:["inPath"],".":["beforeIdent"],"[":["beforeElement"],eof:["afterPath"]},beforeIdent:{ws:["beforeIdent"],ident:["inIdent","append"]},inIdent:{ident:["inIdent","append"],0:["inIdent","append"],number:["inIdent","append"],ws:["inPath","push"],".":["beforeIdent","push"],"[":["beforeElement","push"],eof:["afterPath","push"]},beforeElement:{ws:["beforeElement"],0:["afterZero","append"],number:["inIndex","append"],"'":["inSingleQuote","append",""],'"':["inDoubleQuote","append",""]},afterZero:{ws:["afterElement","push"],"]":["inPath","push"]},inIndex:{0:["inIndex","append"],number:["inIndex","append"],ws:["afterElement"],"]":["inPath","push"]},inSingleQuote:{"'":["afterElement"],eof:["error"],"else":["inSingleQuote","append"]},inDoubleQuote:{'"':["afterElement"],eof:["error"],"else":["inDoubleQuote","append"]},afterElement:{ws:["afterElement"],"]":["inPath","push"]}},X={},Y={};l.get=m,l.prototype=S({__proto__:[],valid:!0,toString:function(){for(var a="",b=0;b<this.length;b++){var c=this[b];a+=k(c)?b?"."+c:c:n(c)}return a},getValueFrom:function(a){for(var b=0;b<this.length;b++){if(null==a)return;a=a[this[b]]}return a},iterateObjects:function(a,b){for(var c=0;c<this.length;c++){if(c&&(a=a[this[c-1]]),!f(a))return;b(a,this[0])}},compiledGetValueFromFn:function(){var a="",b="obj";a+="if (obj != null";for(var c,d=0;d<this.length-1;d++)c=this[d],b+=k(c)?"."+c:n(c),a+=" &&\n     "+b+" != null";a+=")\n";var c=this[d];return b+=k(c)?"."+c:n(c),a+="  return "+b+";\nelse\n  return undefined;",new Function("obj",a)},setValueFrom:function(a,b){if(!this.length)return!1;for(var c=0;c<this.length-1;c++){if(!f(a))return!1;a=a[this[c]]}return f(a)?(a[this[c]]=b,!0):!1}});var Z=new l("",X);Z.valid=!1,Z.getValueFrom=Z.setValueFrom=function(){};var $,_=1e3,ab=[],bb=P?function(){var a={pingPong:!0},b=!1;return Object.observe(a,function(){s(),b=!1}),function(c){ab.push(c),b||(b=!0,a.pingPong=!a.pingPong)}}():function(){return function(a){ab.push(a)}}(),cb=[],db=[],eb=0,fb=1,gb=2,hb=3,ib=1;x.prototype={open:function(a,b){if(this.state_!=eb)throw Error("Observer has already been opened.");return y(this),this.callback_=a,this.target_=b,this.connect_(),this.state_=fb,this.value_},close:function(){this.state_==fb&&(z(this),this.disconnect_(),this.value_=void 0,this.callback_=void 0,this.target_=void 0,this.state_=gb)},deliver:function(){this.state_==fb&&o(this)},report_:function(a){try{this.callback_.apply(this.target_,a)}catch(b){x._errorThrownDuringCallback=!0,console.error("Exception caught during observer callback: "+(b.stack||b))}},discardChanges:function(){return this.check_(void 0,!0),this.value_}};var jb,kb=!P;x._allObserversCount=0,kb&&(jb=[]);var lb=!1;a.Platform=a.Platform||{},a.Platform.performMicrotaskCheckpoint=function(){if(!lb&&kb){lb=!0;var b,c,d=0;do{d++,c=jb,jb=[],b=!1;for(var e=0;e<c.length;e++){var f=c[e];f.state_==fb&&(f.check_()&&(b=!0),jb.push(f))}s()&&(b=!0)}while(_>d&&b);O&&(a.dirtyCheckCycleCount=d),lb=!1}},kb&&(a.Platform.clearObservers=function(){jb=[]}),A.prototype=S({__proto__:x.prototype,arrayObserve:!1,connect_:function(){P?this.directObserver_=u(this,this.value_,this.arrayObserve):this.oldObject_=this.copyObject(this.value_)},copyObject:function(a){var b=Array.isArray(a)?[]:{};for(var c in a)b[c]=a[c];return Array.isArray(a)&&(b.length=a.length),b},check_:function(a){var b,c;if(P){if(!a)return!1;c={},b=G(this.value_,a,c)}else c=this.oldObject_,b=r(this.value_,this.oldObject_);return q(b)?!1:(P||(this.oldObject_=this.copyObject(this.value_)),this.report_([b.added||{},b.removed||{},b.changed||{},function(a){return c[a]}]),!0)},disconnect_:function(){P?(this.directObserver_.close(),this.directObserver_=void 0):this.oldObject_=void 0},deliver:function(){this.state_==fb&&(P?this.directObserver_.deliver(!1):o(this))},discardChanges:function(){return this.directObserver_?this.directObserver_.deliver(!0):this.oldObject_=this.copyObject(this.value_),this.value_}}),B.prototype=S({__proto__:A.prototype,arrayObserve:!0,copyObject:function(a){return a.slice()},check_:function(a){var b;if(P){if(!a)return!1;b=N(this.value_,a)}else b=J(this.value_,0,this.value_.length,this.oldObject_,0,this.oldObject_.length);return b&&b.length?(P||(this.oldObject_=this.copyObject(this.value_)),this.report_([b]),!0):!1}}),B.applySplices=function(a,b,c){c.forEach(function(c){for(var d=[c.index,c.removed.length],e=c.index;e<c.index+c.addedCount;)d.push(b[e]),e++;Array.prototype.splice.apply(a,d)})},C.prototype=S({__proto__:x.prototype,get path(){return this.path_},connect_:function(){P&&(this.directObserver_=w(this,this.object_)),this.check_(void 0,!0)},disconnect_:function(){this.value_=void 0,this.directObserver_&&(this.directObserver_.close(this),this.directObserver_=void 0)},iterateObjects_:function(a){this.path_.iterateObjects(this.object_,a)},check_:function(a,b){var c=this.value_;return this.value_=this.path_.getValueFrom(this.object_),b||g(this.value_,c)?!1:(this.report_([this.value_,c,this]),!0)},setValue:function(a){this.path_&&this.path_.setValueFrom(this.object_,a)}});var mb={};D.prototype=S({__proto__:x.prototype,connect_:function(){if(P){for(var a,b=!1,c=0;c<this.observed_.length;c+=2)if(a=this.observed_[c],a!==mb){b=!0;break}b&&(this.directObserver_=w(this,a))}this.check_(void 0,!this.reportChangesOnOpen_)},disconnect_:function(){for(var a=0;a<this.observed_.length;a+=2)this.observed_[a]===mb&&this.observed_[a+1].close();this.observed_.length=0,this.value_.length=0,this.directObserver_&&(this.directObserver_.close(this),this.directObserver_=void 0)},addPath:function(a,b){if(this.state_!=eb&&this.state_!=hb)throw Error("Cannot add paths once started.");var b=m(b);if(this.observed_.push(a,b),this.reportChangesOnOpen_){var c=this.observed_.length/2-1;this.value_[c]=b.getValueFrom(a)}},addObserver:function(a){if(this.state_!=eb&&this.state_!=hb)throw Error("Cannot add observers once started.");if(this.observed_.push(mb,a),this.reportChangesOnOpen_){var b=this.observed_.length/2-1;this.value_[b]=a.open(this.deliver,this)}},startReset:function(){if(this.state_!=fb)throw Error("Can only reset while open");this.state_=hb,this.disconnect_()},finishReset:function(){if(this.state_!=hb)throw Error("Can only finishReset after startReset");return this.state_=fb,this.connect_(),this.value_},iterateObjects_:function(a){for(var b,c=0;c<this.observed_.length;c+=2)b=this.observed_[c],b!==mb&&this.observed_[c+1].iterateObjects(b,a)},check_:function(a,b){for(var c,d=0;d<this.observed_.length;d+=2){var e,f=this.observed_[d],h=this.observed_[d+1];if(f===mb){var i=h;e=this.state_===eb?i.open(this.deliver,this):i.discardChanges()}else e=h.getValueFrom(f);b?this.value_[d/2]=e:g(e,this.value_[d/2])||(c=c||[],c[d/2]=this.value_[d/2],this.value_[d/2]=e)}return c?(this.report_([this.value_,c,this.observed_]),!0):!1}}),F.prototype={open:function(a,b){return this.callback_=a,this.target_=b,this.value_=this.getValueFn_(this.observable_.open(this.observedCallback_,this)),this.value_},observedCallback_:function(a){if(a=this.getValueFn_(a),!g(a,this.value_)){var b=this.value_;this.value_=a,this.callback_.call(this.target_,this.value_,b)}},discardChanges:function(){return this.value_=this.getValueFn_(this.observable_.discardChanges()),this.value_},deliver:function(){return this.observable_.deliver()},setValue:function(a){return a=this.setValueFn_(a),!this.dontPassThroughSet_&&this.observable_.setValue?this.observable_.setValue(a):void 0},close:function(){this.observable_&&this.observable_.close(),this.callback_=void 0,this.target_=void 0,this.observable_=void 0,this.value_=void 0,this.getValueFn_=void 0,this.setValueFn_=void 0}};var nb={add:!0,update:!0,"delete":!0},ob=0,pb=1,qb=2,rb=3;I.prototype={calcEditDistances:function(a,b,c,d,e,f){for(var g=f-e+1,h=c-b+1,i=new Array(g),j=0;g>j;j++)i[j]=new Array(h),i[j][0]=j;for(var k=0;h>k;k++)i[0][k]=k;for(var j=1;g>j;j++)for(var k=1;h>k;k++)if(this.equals(a[b+k-1],d[e+j-1]))i[j][k]=i[j-1][k-1];else{var l=i[j-1][k]+1,m=i[j][k-1]+1;i[j][k]=m>l?l:m}return i},spliceOperationsFromEditDistances:function(a){for(var b=a.length-1,c=a[0].length-1,d=a[b][c],e=[];b>0||c>0;)if(0!=b)if(0!=c){var f,g=a[b-1][c-1],h=a[b-1][c],i=a[b][c-1];f=i>h?g>h?h:g:g>i?i:g,f==g?(g==d?e.push(ob):(e.push(pb),d=g),b--,c--):f==h?(e.push(rb),b--,d=h):(e.push(qb),c--,d=i)}else e.push(rb),b--;else e.push(qb),c--;return e.reverse(),e},calcSplices:function(a,b,c,d,e,f){var g=0,h=0,i=Math.min(c-b,f-e);if(0==b&&0==e&&(g=this.sharedPrefix(a,d,i)),c==a.length&&f==d.length&&(h=this.sharedSuffix(a,d,i-g)),b+=g,e+=g,c-=h,f-=h,c-b==0&&f-e==0)return[];if(b==c){for(var j=H(b,[],0);f>e;)j.removed.push(d[e++]);return[j]}if(e==f)return[H(b,[],c-b)];for(var k=this.spliceOperationsFromEditDistances(this.calcEditDistances(a,b,c,d,e,f)),j=void 0,l=[],m=b,n=e,o=0;o<k.length;o++)switch(k[o]){case ob:j&&(l.push(j),j=void 0),m++,n++;break;case pb:j||(j=H(m,[],0)),j.addedCount++,m++,j.removed.push(d[n]),n++;break;case qb:j||(j=H(m,[],0)),j.addedCount++,m++;break;case rb:j||(j=H(m,[],0)),j.removed.push(d[n]),n++}return j&&l.push(j),l},sharedPrefix:function(a,b,c){for(var d=0;c>d;d++)if(!this.equals(a[d],b[d]))return d;return c},sharedSuffix:function(a,b,c){for(var d=a.length,e=b.length,f=0;c>f&&this.equals(a[--d],b[--e]);)f++;return f},calculateSplices:function(a,b){return this.calcSplices(a,0,a.length,b,0,b.length)},equals:function(a,b){return a===b}};var sb=new I;a.Observer=x,a.Observer.runEOM_=bb,a.Observer.observerSentinel_=mb,a.Observer.hasObjectObserve=P,a.ArrayObserver=B,a.ArrayObserver.calculateSplices=function(a,b){return sb.calculateSplices(a,b)},a.ArraySplice=I,a.ObjectObserver=A,a.PathObserver=C,a.CompoundObserver=D,a.Path=l,a.ObserverTransform=F}("undefined"!=typeof global&&global&&"undefined"!=typeof module&&module?global:this||window),function(){"use strict";function a(a){for(;a.parentNode;)a=a.parentNode;return"function"==typeof a.getElementById?a:null}function b(a,b,c){var d=a.bindings_;return d||(d=a.bindings_={}),d[b]&&c[b].close(),d[b]=c}function c(a,b,c){return c}function d(a){return null==a?"":a}function e(a,b){a.data=d(b)}function f(a){return function(b){return e(a,b)}}function g(a,b,c,e){return c?void(e?a.setAttribute(b,""):a.removeAttribute(b)):void a.setAttribute(b,d(e))}function h(a,b,c){return function(d){g(a,b,c,d)}}function i(a){switch(a.type){case"checkbox":return u;case"radio":case"select-multiple":case"select-one":return"change";case"range":if(/Trident|MSIE/.test(navigator.userAgent))return"change";default:return"input"}}function j(a,b,c,e){a[b]=(e||d)(c)}function k(a,b,c){return function(d){return j(a,b,d,c)}}function l(){}function m(a,b,c,d){function e(){c.setValue(a[b]),c.discardChanges(),(d||l)(a),Platform.performMicrotaskCheckpoint()}var f=i(a);return a.addEventListener(f,e),{close:function(){a.removeEventListener(f,e),c.close()},observable_:c}}function n(a){return Boolean(a)}function o(b){if(b.form)return s(b.form.elements,function(a){return a!=b&&"INPUT"==a.tagName&&"radio"==a.type&&a.name==b.name});var c=a(b);if(!c)return[];var d=c.querySelectorAll('input[type="radio"][name="'+b.name+'"]');return s(d,function(a){return a!=b&&!a.form})}function p(a){"INPUT"===a.tagName&&"radio"===a.type&&o(a).forEach(function(a){var b=a.bindings_.checked;b&&b.observable_.setValue(!1)})}function q(a,b){var c,e,f,g=a.parentNode;g instanceof HTMLSelectElement&&g.bindings_&&g.bindings_.value&&(c=g,e=c.bindings_.value,f=c.value),a.value=d(b),c&&c.value!=f&&(e.observable_.setValue(c.value),e.observable_.discardChanges(),Platform.performMicrotaskCheckpoint())}function r(a){return function(b){q(a,b)}}var s=Array.prototype.filter.call.bind(Array.prototype.filter);Node.prototype.bind=function(a,b){console.error("Unhandled binding to Node: ",this,a,b)},Node.prototype.bindFinished=function(){};var t=c;Object.defineProperty(Platform,"enableBindingsReflection",{get:function(){return t===b},set:function(a){return t=a?b:c,a},configurable:!0}),Text.prototype.bind=function(a,b,c){if("textContent"!==a)return Node.prototype.bind.call(this,a,b,c);if(c)return e(this,b);var d=b;return e(this,d.open(f(this))),t(this,a,d)},Element.prototype.bind=function(a,b,c){var d="?"==a[a.length-1];if(d&&(this.removeAttribute(a),a=a.slice(0,-1)),c)return g(this,a,d,b);var e=b;return g(this,a,d,e.open(h(this,a,d))),t(this,a,e)};var u;!function(){var a=document.createElement("div"),b=a.appendChild(document.createElement("input"));b.setAttribute("type","checkbox");var c,d=0;b.addEventListener("click",function(){d++,c=c||"click"}),b.addEventListener("change",function(){d++,c=c||"change"});var e=document.createEvent("MouseEvent");e.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),b.dispatchEvent(e),u=1==d?"change":c}(),HTMLInputElement.prototype.bind=function(a,c,e){if("value"!==a&&"checked"!==a)return HTMLElement.prototype.bind.call(this,a,c,e);this.removeAttribute(a);var f="checked"==a?n:d,g="checked"==a?p:l;if(e)return j(this,a,c,f);var h=c,i=m(this,a,h,g);return j(this,a,h.open(k(this,a,f)),f),b(this,a,i)},HTMLTextAreaElement.prototype.bind=function(a,b,c){if("value"!==a)return HTMLElement.prototype.bind.call(this,a,b,c);if(this.removeAttribute("value"),c)return j(this,"value",b);var e=b,f=m(this,"value",e);return j(this,"value",e.open(k(this,"value",d))),t(this,a,f)},HTMLOptionElement.prototype.bind=function(a,b,c){if("value"!==a)return HTMLElement.prototype.bind.call(this,a,b,c);if(this.removeAttribute("value"),c)return q(this,b);var d=b,e=m(this,"value",d);return q(this,d.open(r(this))),t(this,a,e)},HTMLSelectElement.prototype.bind=function(a,c,d){if("selectedindex"===a&&(a="selectedIndex"),"selectedIndex"!==a&&"value"!==a)return HTMLElement.prototype.bind.call(this,a,c,d);if(this.removeAttribute(a),d)return j(this,a,c);var e=c,f=m(this,a,e);return j(this,a,e.open(k(this,a))),b(this,a,f)}}(this),function(a){"use strict";function b(a){if(!a)throw new Error("Assertion failed")}function c(a){for(var b;b=a.parentNode;)a=b;return a}function d(a,b){if(b){for(var d,e="#"+b;!d&&(a=c(a),a.protoContent_?d=a.protoContent_.querySelector(e):a.getElementById&&(d=a.getElementById(b)),!d&&a.templateCreator_);)a=a.templateCreator_;return d}}function e(a){return"template"==a.tagName&&"http://www.w3.org/2000/svg"==a.namespaceURI}function f(a){return"TEMPLATE"==a.tagName&&"http://www.w3.org/1999/xhtml"==a.namespaceURI}function g(a){return Boolean(L[a.tagName]&&a.hasAttribute("template"))}function h(a){return void 0===a.isTemplate_&&(a.isTemplate_="TEMPLATE"==a.tagName||g(a)),a.isTemplate_}function i(a,b){var c=a.querySelectorAll(N);h(a)&&b(a),G(c,b)}function j(a){function b(a){HTMLTemplateElement.decorate(a)||j(a.content)}i(a,b)}function k(a,b){Object.getOwnPropertyNames(b).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))})}function l(a){var b=a.ownerDocument;if(!b.defaultView)return b;var c=b.templateContentsOwner_;if(!c){for(c=b.implementation.createHTMLDocument("");c.lastChild;)c.removeChild(c.lastChild);b.templateContentsOwner_=c}return c}function m(a){if(!a.stagingDocument_){var b=a.ownerDocument;if(!b.stagingDocument_){b.stagingDocument_=b.implementation.createHTMLDocument(""),b.stagingDocument_.isStagingDocument=!0;var c=b.stagingDocument_.createElement("base");c.href=document.baseURI,b.stagingDocument_.head.appendChild(c),b.stagingDocument_.stagingDocument_=b.stagingDocument_}a.stagingDocument_=b.stagingDocument_}return a.stagingDocument_}function n(a){var b=a.ownerDocument.createElement("template");a.parentNode.insertBefore(b,a);for(var c=a.attributes,d=c.length;d-->0;){var e=c[d];K[e.name]&&("template"!==e.name&&b.setAttribute(e.name,e.value),a.removeAttribute(e.name))}return b}function o(a){var b=a.ownerDocument.createElement("template");a.parentNode.insertBefore(b,a);for(var c=a.attributes,d=c.length;d-->0;){var e=c[d];b.setAttribute(e.name,e.value),a.removeAttribute(e.name)}return a.parentNode.removeChild(a),b}function p(a,b,c){var d=a.content;if(c)return void d.appendChild(b);for(var e;e=b.firstChild;)d.appendChild(e)}function q(a){P?a.__proto__=HTMLTemplateElement.prototype:k(a,HTMLTemplateElement.prototype)}function r(a){a.setModelFn_||(a.setModelFn_=function(){a.setModelFnScheduled_=!1;
var b=z(a,a.delegate_&&a.delegate_.prepareBinding);w(a,b,a.model_)}),a.setModelFnScheduled_||(a.setModelFnScheduled_=!0,Observer.runEOM_(a.setModelFn_))}function s(a,b,c,d){if(a&&a.length){for(var e,f=a.length,g=0,h=0,i=0,j=!0;f>h;){var g=a.indexOf("{{",h),k=a.indexOf("[[",h),l=!1,m="}}";if(k>=0&&(0>g||g>k)&&(g=k,l=!0,m="]]"),i=0>g?-1:a.indexOf(m,g+2),0>i){if(!e)return;e.push(a.slice(h));break}e=e||[],e.push(a.slice(h,g));var n=a.slice(g+2,i).trim();e.push(l),j=j&&l;var o=d&&d(n,b,c);e.push(null==o?Path.get(n):null),e.push(o),h=i+2}return h===f&&e.push(""),e.hasOnePath=5===e.length,e.isSimplePath=e.hasOnePath&&""==e[0]&&""==e[4],e.onlyOneTime=j,e.combinator=function(a){for(var b=e[0],c=1;c<e.length;c+=4){var d=e.hasOnePath?a:a[(c-1)/4];void 0!==d&&(b+=d),b+=e[c+3]}return b},e}}function t(a,b,c,d){if(b.hasOnePath){var e=b[3],f=e?e(d,c,!0):b[2].getValueFrom(d);return b.isSimplePath?f:b.combinator(f)}for(var g=[],h=1;h<b.length;h+=4){var e=b[h+2];g[(h-1)/4]=e?e(d,c):b[h+1].getValueFrom(d)}return b.combinator(g)}function u(a,b,c,d){var e=b[3],f=e?e(d,c,!1):new PathObserver(d,b[2]);return b.isSimplePath?f:new ObserverTransform(f,b.combinator)}function v(a,b,c,d){if(b.onlyOneTime)return t(a,b,c,d);if(b.hasOnePath)return u(a,b,c,d);for(var e=new CompoundObserver,f=1;f<b.length;f+=4){var g=b[f],h=b[f+2];if(h){var i=h(d,c,g);g?e.addPath(i):e.addObserver(i)}else{var j=b[f+1];g?e.addPath(j.getValueFrom(d)):e.addPath(d,j)}}return new ObserverTransform(e,b.combinator)}function w(a,b,c,d){for(var e=0;e<b.length;e+=2){var f=b[e],g=b[e+1],h=v(f,g,a,c),i=a.bind(f,h,g.onlyOneTime);i&&d&&d.push(i)}if(a.bindFinished(),b.isTemplate){a.model_=c;var j=a.processBindingDirectives_(b);d&&j&&d.push(j)}}function x(a,b,c){var d=a.getAttribute(b);return s(""==d?"{{}}":d,b,a,c)}function y(a,c){b(a);for(var d=[],e=0;e<a.attributes.length;e++){for(var f=a.attributes[e],g=f.name,i=f.value;"_"===g[0];)g=g.substring(1);if(!h(a)||g!==J&&g!==H&&g!==I){var j=s(i,g,a,c);j&&d.push(g,j)}}return h(a)&&(d.isTemplate=!0,d.if=x(a,J,c),d.bind=x(a,H,c),d.repeat=x(a,I,c),!d.if||d.bind||d.repeat||(d.bind=s("{{}}",H,a,c))),d}function z(a,b){if(a.nodeType===Node.ELEMENT_NODE)return y(a,b);if(a.nodeType===Node.TEXT_NODE){var c=s(a.data,"textContent",a,b);if(c)return["textContent",c]}return[]}function A(a,b,c,d,e,f,g){for(var h=b.appendChild(c.importNode(a,!1)),i=0,j=a.firstChild;j;j=j.nextSibling)A(j,h,c,d.children[i++],e,f,g);return d.isTemplate&&(HTMLTemplateElement.decorate(h,a),f&&h.setDelegate_(f)),w(h,d,e,g),h}function B(a,b){var c=z(a,b);c.children={};for(var d=0,e=a.firstChild;e;e=e.nextSibling)c.children[d++]=B(e,b);return c}function C(a){var b=a.id_;return b||(b=a.id_=S++),b}function D(a,b){var c=C(a);if(b){var d=b.bindingMaps[c];return d||(d=b.bindingMaps[c]=B(a,b.prepareBinding)||[]),d}var d=a.bindingMap_;return d||(d=a.bindingMap_=B(a,void 0)||[]),d}function E(a){this.closed=!1,this.templateElement_=a,this.instances=[],this.deps=void 0,this.iteratedValue=[],this.presentValue=void 0,this.arrayObserver=void 0}var F,G=Array.prototype.forEach.call.bind(Array.prototype.forEach);a.Map&&"function"==typeof a.Map.prototype.forEach?F=a.Map:(F=function(){this.keys=[],this.values=[]},F.prototype={set:function(a,b){var c=this.keys.indexOf(a);0>c?(this.keys.push(a),this.values.push(b)):this.values[c]=b},get:function(a){var b=this.keys.indexOf(a);if(!(0>b))return this.values[b]},"delete":function(a){var b=this.keys.indexOf(a);return 0>b?!1:(this.keys.splice(b,1),this.values.splice(b,1),!0)},forEach:function(a,b){for(var c=0;c<this.keys.length;c++)a.call(b||this,this.values[c],this.keys[c],this)}});"function"!=typeof document.contains&&(Document.prototype.contains=function(a){return a===this||a.parentNode===this?!0:this.documentElement.contains(a)});var H="bind",I="repeat",J="if",K={template:!0,repeat:!0,bind:!0,ref:!0},L={THEAD:!0,TBODY:!0,TFOOT:!0,TH:!0,TR:!0,TD:!0,COLGROUP:!0,COL:!0,CAPTION:!0,OPTION:!0,OPTGROUP:!0},M="undefined"!=typeof HTMLTemplateElement;M&&!function(){var a=document.createElement("template"),b=a.content.ownerDocument,c=b.appendChild(b.createElement("html")),d=c.appendChild(b.createElement("head")),e=b.createElement("base");e.href=document.baseURI,d.appendChild(e)}();var N="template, "+Object.keys(L).map(function(a){return a.toLowerCase()+"[template]"}).join(", ");document.addEventListener("DOMContentLoaded",function(){j(document),Platform.performMicrotaskCheckpoint()},!1),M||(a.HTMLTemplateElement=function(){throw TypeError("Illegal constructor")});var O,P="__proto__"in{};"function"==typeof MutationObserver&&(O=new MutationObserver(function(a){for(var b=0;b<a.length;b++)a[b].target.refChanged_()})),HTMLTemplateElement.decorate=function(a,c){if(a.templateIsDecorated_)return!1;var d=a;d.templateIsDecorated_=!0;var h=f(d)&&M,i=h,k=!h,m=!1;if(h||(g(d)?(b(!c),d=n(a),d.templateIsDecorated_=!0,h=M,m=!0):e(d)&&(d=o(a),d.templateIsDecorated_=!0,h=M)),!h){q(d);var r=l(d);d.content_=r.createDocumentFragment()}return c?d.instanceRef_=c:k?p(d,a,m):i&&j(d.content),!0},HTMLTemplateElement.bootstrap=j;var Q=a.HTMLUnknownElement||HTMLElement,R={get:function(){return this.content_},enumerable:!0,configurable:!0};M||(HTMLTemplateElement.prototype=Object.create(Q.prototype),Object.defineProperty(HTMLTemplateElement.prototype,"content",R)),k(HTMLTemplateElement.prototype,{bind:function(a,b,c){if("ref"!=a)return Element.prototype.bind.call(this,a,b,c);var d=this,e=c?b:b.open(function(a){d.setAttribute("ref",a),d.refChanged_()});return this.setAttribute("ref",e),this.refChanged_(),c?void 0:(this.bindings_?this.bindings_.ref=b:this.bindings_={ref:b},b)},processBindingDirectives_:function(a){return this.iterator_&&this.iterator_.closeDeps(),a.if||a.bind||a.repeat?(this.iterator_||(this.iterator_=new E(this)),this.iterator_.updateDependencies(a,this.model_),O&&O.observe(this,{attributes:!0,attributeFilter:["ref"]}),this.iterator_):void(this.iterator_&&(this.iterator_.close(),this.iterator_=void 0))},createInstance:function(a,b,c){b?c=this.newDelegate_(b):c||(c=this.delegate_),this.refContent_||(this.refContent_=this.ref_.content);var d=this.refContent_;if(null===d.firstChild)return T;var e=D(d,c),f=m(this),g=f.createDocumentFragment();g.templateCreator_=this,g.protoContent_=d,g.bindings_=[],g.terminator_=null;for(var h=g.templateInstance_={firstNode:null,lastNode:null,model:a},i=0,j=!1,k=d.firstChild;k;k=k.nextSibling){null===k.nextSibling&&(j=!0);var l=A(k,g,f,e.children[i++],a,c,g.bindings_);l.templateInstance_=h,j&&(g.terminator_=l)}return h.firstNode=g.firstChild,h.lastNode=g.lastChild,g.templateCreator_=void 0,g.protoContent_=void 0,g},get model(){return this.model_},set model(a){this.model_=a,r(this)},get bindingDelegate(){return this.delegate_&&this.delegate_.raw},refChanged_:function(){this.iterator_&&this.refContent_!==this.ref_.content&&(this.refContent_=void 0,this.iterator_.valueChanged(),this.iterator_.updateIteratedValue(this.iterator_.getUpdatedValue()))},clear:function(){this.model_=void 0,this.delegate_=void 0,this.bindings_&&this.bindings_.ref&&this.bindings_.ref.close(),this.refContent_=void 0,this.iterator_&&(this.iterator_.valueChanged(),this.iterator_.close(),this.iterator_=void 0)},setDelegate_:function(a){this.delegate_=a,this.bindingMap_=void 0,this.iterator_&&(this.iterator_.instancePositionChangedFn_=void 0,this.iterator_.instanceModelFn_=void 0)},newDelegate_:function(a){function b(b){var c=a&&a[b];if("function"==typeof c)return function(){return c.apply(a,arguments)}}if(a)return{bindingMaps:{},raw:a,prepareBinding:b("prepareBinding"),prepareInstanceModel:b("prepareInstanceModel"),prepareInstancePositionChanged:b("prepareInstancePositionChanged")}},set bindingDelegate(a){if(this.delegate_)throw Error("Template must be cleared before a new bindingDelegate can be assigned");this.setDelegate_(this.newDelegate_(a))},get ref_(){var a=d(this,this.getAttribute("ref"));if(a||(a=this.instanceRef_),!a)return this;var b=a.ref_;return b?b:a}});var S=1;Object.defineProperty(Node.prototype,"templateInstance",{get:function(){var a=this.templateInstance_;return a?a:this.parentNode?this.parentNode.templateInstance:void 0}});var T=document.createDocumentFragment();T.bindings_=[],T.terminator_=null,E.prototype={closeDeps:function(){var a=this.deps;a&&(a.ifOneTime===!1&&a.ifValue.close(),a.oneTime===!1&&a.value.close())},updateDependencies:function(a,b){this.closeDeps();var c=this.deps={},d=this.templateElement_,e=!0;if(a.if){if(c.hasIf=!0,c.ifOneTime=a.if.onlyOneTime,c.ifValue=v(J,a.if,d,b),e=c.ifValue,c.ifOneTime&&!e)return void this.valueChanged();c.ifOneTime||(e=e.open(this.updateIfValue,this))}a.repeat?(c.repeat=!0,c.oneTime=a.repeat.onlyOneTime,c.value=v(I,a.repeat,d,b)):(c.repeat=!1,c.oneTime=a.bind.onlyOneTime,c.value=v(H,a.bind,d,b));var f=c.value;return c.oneTime||(f=f.open(this.updateIteratedValue,this)),e?void this.updateValue(f):void this.valueChanged()},getUpdatedValue:function(){var a=this.deps.value;return this.deps.oneTime||(a=a.discardChanges()),a},updateIfValue:function(a){return a?void this.updateValue(this.getUpdatedValue()):void this.valueChanged()},updateIteratedValue:function(a){if(this.deps.hasIf){var b=this.deps.ifValue;if(this.deps.ifOneTime||(b=b.discardChanges()),!b)return void this.valueChanged()}this.updateValue(a)},updateValue:function(a){this.deps.repeat||(a=[a]);var b=this.deps.repeat&&!this.deps.oneTime&&Array.isArray(a);this.valueChanged(a,b)},valueChanged:function(a,b){Array.isArray(a)||(a=[]),a!==this.iteratedValue&&(this.unobserve(),this.presentValue=a,b&&(this.arrayObserver=new ArrayObserver(this.presentValue),this.arrayObserver.open(this.handleSplices,this)),this.handleSplices(ArrayObserver.calculateSplices(this.presentValue,this.iteratedValue)))},getLastInstanceNode:function(a){if(-1==a)return this.templateElement_;var b=this.instances[a],c=b.terminator_;if(!c)return this.getLastInstanceNode(a-1);if(c.nodeType!==Node.ELEMENT_NODE||this.templateElement_===c)return c;var d=c.iterator_;return d?d.getLastTemplateNode():c},getLastTemplateNode:function(){return this.getLastInstanceNode(this.instances.length-1)},insertInstanceAt:function(a,b){var c=this.getLastInstanceNode(a-1),d=this.templateElement_.parentNode;this.instances.splice(a,0,b),d.insertBefore(b,c.nextSibling)},extractInstanceAt:function(a){for(var b=this.getLastInstanceNode(a-1),c=this.getLastInstanceNode(a),d=this.templateElement_.parentNode,e=this.instances.splice(a,1)[0];c!==b;){var f=b.nextSibling;f==c&&(c=b),e.appendChild(d.removeChild(f))}return e},getDelegateFn:function(a){return a=a&&a(this.templateElement_),"function"==typeof a?a:null},handleSplices:function(a){if(!this.closed&&a.length){var b=this.templateElement_;if(!b.parentNode)return void this.close();ArrayObserver.applySplices(this.iteratedValue,this.presentValue,a);var c=b.delegate_;void 0===this.instanceModelFn_&&(this.instanceModelFn_=this.getDelegateFn(c&&c.prepareInstanceModel)),void 0===this.instancePositionChangedFn_&&(this.instancePositionChangedFn_=this.getDelegateFn(c&&c.prepareInstancePositionChanged));for(var d=new F,e=0,f=0;f<a.length;f++){for(var g=a[f],h=g.removed,i=0;i<h.length;i++){var j=h[i],k=this.extractInstanceAt(g.index+e);k!==T&&d.set(j,k)}e-=g.addedCount}for(var f=0;f<a.length;f++)for(var g=a[f],l=g.index;l<g.index+g.addedCount;l++){var j=this.iteratedValue[l],k=d.get(j);k?d.delete(j):(this.instanceModelFn_&&(j=this.instanceModelFn_(j)),k=void 0===j?T:b.createInstance(j,void 0,c)),this.insertInstanceAt(l,k)}d.forEach(function(a){this.closeInstanceBindings(a)},this),this.instancePositionChangedFn_&&this.reportInstancesMoved(a)}},reportInstanceMoved:function(a){var b=this.instances[a];b!==T&&this.instancePositionChangedFn_(b.templateInstance_,a)},reportInstancesMoved:function(a){for(var b=0,c=0,d=0;d<a.length;d++){var e=a[d];if(0!=c)for(;b<e.index;)this.reportInstanceMoved(b),b++;else b=e.index;for(;b<e.index+e.addedCount;)this.reportInstanceMoved(b),b++;c+=e.addedCount-e.removed.length}if(0!=c)for(var f=this.instances.length;f>b;)this.reportInstanceMoved(b),b++},closeInstanceBindings:function(a){for(var b=a.bindings_,c=0;c<b.length;c++)b[c].close()},unobserve:function(){this.arrayObserver&&(this.arrayObserver.close(),this.arrayObserver=void 0)},close:function(){if(!this.closed){this.unobserve();for(var a=0;a<this.instances.length;a++)this.closeInstanceBindings(this.instances[a]);this.instances.length=0,this.closeDeps(),this.templateElement_.iterator_=void 0,this.closed=!0}}},HTMLTemplateElement.forAllTemplatesFrom_=i}(this),function(a){function b(a){f.textContent=d++,e.push(a)}function c(){for(;e.length;)e.shift()()}var d=0,e=[],f=document.createTextNode("");new(window.MutationObserver||JsMutationObserver)(c).observe(f,{characterData:!0}),a.endOfMicrotask=b}(Platform),function(a){function b(){e||(e=!0,a.endOfMicrotask(function(){e=!1,logFlags.data&&console.group("Platform.flush()"),a.performMicrotaskCheckpoint(),logFlags.data&&console.groupEnd()}))}var c=document.createElement("style");c.textContent="template {display: none !important;} /* injected by platform.js */";var d=document.querySelector("head");d.insertBefore(c,d.firstChild);var e;if(Observer.hasObjectObserve)b=function(){};else{var f=125;window.addEventListener("WebComponentsReady",function(){b(),a.flushPoll=setInterval(b,f)})}if(window.CustomElements&&!CustomElements.useNative){var g=Document.prototype.importNode;Document.prototype.importNode=function(a,b){var c=g.call(this,a,b);return CustomElements.upgradeAll(c),c}}a.flush=b}(window.Platform),function(a){function b(a,b,d,e){return a.replace(e,function(a,e,f,g){var h=f.replace(/["']/g,"");return h=c(b,h,d),e+"'"+h+"'"+g})}function c(a,b,c){if(b&&"/"===b[0])return b;var e=new URL(b,a);return c?e.href:d(e.href)}function d(a){var b=new URL(document.baseURI),c=new URL(a,b);return c.host===b.host&&c.port===b.port&&c.protocol===b.protocol?e(b,c):a}function e(a,b){for(var c=a.pathname,d=b.pathname,e=c.split("/"),f=d.split("/");e.length&&e[0]===f[0];)e.shift(),f.shift();for(var g=0,h=e.length-1;h>g;g++)f.unshift("..");return f.join("/")+b.search+b.hash}var f={resolveDom:function(a,b){b=b||a.ownerDocument.baseURI,this.resolveAttributes(a,b),this.resolveStyles(a,b);var c=a.querySelectorAll("template");if(c)for(var d,e=0,f=c.length;f>e&&(d=c[e]);e++)d.content&&this.resolveDom(d.content,b)},resolveTemplate:function(a){this.resolveDom(a.content,a.ownerDocument.baseURI)},resolveStyles:function(a,b){var c=a.querySelectorAll("style");if(c)for(var d,e=0,f=c.length;f>e&&(d=c[e]);e++)this.resolveStyle(d,b)},resolveStyle:function(a,b){b=b||a.ownerDocument.baseURI,a.textContent=this.resolveCssText(a.textContent,b)},resolveCssText:function(a,c,d){return a=b(a,c,d,g),b(a,c,d,h)},resolveAttributes:function(a,b){a.hasAttributes&&a.hasAttributes()&&this.resolveElementAttributes(a,b);var c=a&&a.querySelectorAll(j);if(c)for(var d,e=0,f=c.length;f>e&&(d=c[e]);e++)this.resolveElementAttributes(d,b)},resolveElementAttributes:function(a,d){d=d||a.ownerDocument.baseURI,i.forEach(function(e){var f,h=a.attributes[e],i=h&&h.value;i&&i.search(k)<0&&(f="style"===e?b(i,d,!1,g):c(d,i),h.value=f)})}},g=/(url\()([^)]*)(\))/g,h=/(@import[\s]+(?!url\())([^;]*)(;)/g,i=["href","src","action","style","url"],j="["+i.join("],[")+"]",k="{{.*}}";a.urlResolver=f}(Polymer),function(a){function b(a){this.cache=Object.create(null),this.map=Object.create(null),this.requests=0,this.regex=a}var c=Platform.endOfMicrotask;b.prototype={extractUrls:function(a,b){for(var c,d,e=[];c=this.regex.exec(a);)d=new URL(c[1],b),e.push({matched:c[0],url:d.href});return e},process:function(a,b,c){var d=this.extractUrls(a,b),e=c.bind(null,this.map);this.fetch(d,e)},fetch:function(a,b){var c=a.length;if(!c)return b();for(var d,e,f,g=function(){0===--c&&b()},h=0;c>h;h++)d=a[h],f=d.url,e=this.cache[f],e||(e=this.xhr(f),e.match=d,this.cache[f]=e),e.wait(g)},handleXhr:function(a){var b=a.match,c=b.url,d=a.response||a.responseText||"";this.map[c]=d,this.fetch(this.extractUrls(d,c),a.resolve)},xhr:function(a){this.requests++;var b=new XMLHttpRequest;return b.open("GET",a,!0),b.send(),b.onerror=b.onload=this.handleXhr.bind(this,b),b.pending=[],b.resolve=function(){for(var a=b.pending,c=0;c<a.length;c++)a[c]();b.pending=null},b.wait=function(a){b.pending?b.pending.push(a):c(a)},b}},a.Loader=b}(Polymer),function(a){function b(){this.loader=new d(this.regex)}var c=a.urlResolver,d=a.Loader;b.prototype={regex:/@import\s+(?:url)?["'\(]*([^'"\)]*)['"\)]*;/g,resolve:function(a,b,c){var d=function(d){c(this.flatten(a,b,d))}.bind(this);this.loader.process(a,b,d)},resolveNode:function(a,b,c){var d=a.textContent,e=function(b){a.textContent=b,c(a)};this.resolve(d,b,e)},flatten:function(a,b,d){for(var e,f,g,h=this.loader.extractUrls(a,b),i=0;i<h.length;i++)e=h[i],f=e.url,g=c.resolveCssText(d[f],f,!0),g=this.flatten(g,b,d),a=a.replace(e.matched,g);return a},loadStyles:function(a,b,c){function d(){f++,f===g&&c&&c()}for(var e,f=0,g=a.length,h=0;g>h&&(e=a[h]);h++)this.resolveNode(e,b,d)}};var e=new b;a.styleResolver=e}(Polymer),function(a){function b(a,b){return a&&b&&Object.getOwnPropertyNames(b).forEach(function(c){var d=Object.getOwnPropertyDescriptor(b,c);d&&(Object.defineProperty(a,c,d),"function"==typeof d.value&&(d.value.nom=c))}),a}function c(a){for(var b=a||{},c=1;c<arguments.length;c++){var e=arguments[c];try{for(var f in e)d(f,e,b)}catch(g){}}return b}function d(a,b,c){var d=e(b,a);Object.defineProperty(c,a,d)}function e(a,b){if(a){var c=Object.getOwnPropertyDescriptor(a,b);return c||e(Object.getPrototypeOf(a),b)}}a.extend=b,a.mixin=c,Platform.mixin=c}(Polymer),function(a){function b(a,b,d){return a?a.stop():a=new c(this),a.go(b,d),a}var c=function(a){this.context=a,this.boundComplete=this.complete.bind(this)};c.prototype={go:function(a,b){this.callback=a;var c;b?(c=setTimeout(this.boundComplete,b),this.handle=function(){clearTimeout(c)}):(c=requestAnimationFrame(this.boundComplete),this.handle=function(){cancelAnimationFrame(c)})},stop:function(){this.handle&&(this.handle(),this.handle=null)},complete:function(){this.handle&&(this.stop(),this.callback.call(this.context))}},a.job=b}(Polymer),function(a){function b(a,b,c){var d="string"==typeof a?document.createElement(a):a.cloneNode(!0);if(d.innerHTML=b,c)for(var e in c)d.setAttribute(e,c[e]);return d}var c={};HTMLElement.register=function(a,b){c[a]=b},HTMLElement.getPrototypeForTag=function(a){var b=a?c[a]:HTMLElement.prototype;return b||Object.getPrototypeOf(document.createElement(a))};var d=Event.prototype.stopPropagation;Event.prototype.stopPropagation=function(){this.cancelBubble=!0,d.apply(this,arguments)};var e=DOMTokenList.prototype.add,f=DOMTokenList.prototype.remove;DOMTokenList.prototype.add=function(){for(var a=0;a<arguments.length;a++)e.call(this,arguments[a])},DOMTokenList.prototype.remove=function(){for(var a=0;a<arguments.length;a++)f.call(this,arguments[a])},DOMTokenList.prototype.toggle=function(a,b){1==arguments.length&&(b=!this.contains(a)),b?this.add(a):this.remove(a)},DOMTokenList.prototype.switch=function(a,b){a&&this.remove(a),b&&this.add(b)};var g=function(){return Array.prototype.slice.call(this)},h=window.NamedNodeMap||window.MozNamedAttrMap||{};NodeList.prototype.array=g,h.prototype.array=g,HTMLCollection.prototype.array=g,a.createDOM=b}(Polymer),function(a){function b(a){var e=b.caller,g=e.nom,h=e._super;h||(g||(g=e.nom=c.call(this,e)),g||console.warn("called super() on a method not installed declaratively (has no .nom property)"),h=d(e,g,f(this)));var i=h[g];return i?(i._super||d(i,g,h),i.apply(this,a||[])):void 0}function c(a){for(var b=this.__proto__;b&&b!==HTMLElement.prototype;){for(var c,d=Object.getOwnPropertyNames(b),e=0,f=d.length;f>e&&(c=d[e]);e++){var g=Object.getOwnPropertyDescriptor(b,c);if("function"==typeof g.value&&g.value===a)return c}b=b.__proto__}}function d(a,b,c){var d=e(c,b,a);return d[b]&&(d[b].nom=b),a._super=d}function e(a,b,c){for(;a;){if(a[b]!==c&&a[b])return a;a=f(a)}return Object}function f(a){return a.__proto__}a.super=b}(Polymer),function(a){function b(a){return a}function c(a,b){var c=typeof b;return b instanceof Date&&(c="date"),d[c](a,b)}var d={string:b,undefined:b,date:function(a){return new Date(Date.parse(a)||Date.now())},"boolean":function(a){return""===a?!0:"false"===a?!1:!!a},number:function(a){var b=parseFloat(a);return 0===b&&(b=parseInt(a)),isNaN(b)?a:b},object:function(a,b){if(null===b)return a;try{return JSON.parse(a.replace(/'/g,'"'))}catch(c){return a}},"function":function(a,b){return b}};a.deserializeValue=c}(Polymer),function(a){var b=a.extend,c={};c.declaration={},c.instance={},c.publish=function(a,c){for(var d in a)b(c,a[d])},a.api=c}(Polymer),function(a){var b={async:function(a,b,c){Platform.flush(),b=b&&b.length?b:[b];var d=function(){(this[a]||a).apply(this,b)}.bind(this),e=c?setTimeout(d,c):requestAnimationFrame(d);return c?e:~e},cancelAsync:function(a){0>a?cancelAnimationFrame(~a):clearTimeout(a)},fire:function(a,b,c,d,e){var f=c||this,b=null===b||void 0===b?{}:b,g=new CustomEvent(a,{bubbles:void 0!==d?d:!0,cancelable:void 0!==e?e:!0,detail:b});return f.dispatchEvent(g),g},asyncFire:function(){this.async("fire",arguments)},classFollows:function(a,b,c){b&&b.classList.remove(c),a&&a.classList.add(c)},injectBoundHTML:function(a,b){var c=document.createElement("template");c.innerHTML=a;var d=this.instanceTemplate(c);return b&&(b.textContent="",b.appendChild(d)),d}},c=function(){},d={};b.asyncMethod=b.async,a.api.instance.utils=b,a.nop=c,a.nob=d}(Polymer),function(a){var b=window.logFlags||{},c="on-",d={EVENT_PREFIX:c,addHostListeners:function(){var a=this.eventDelegates;b.events&&Object.keys(a).length>0&&console.log("[%s] addHostListeners:",this.localName,a);for(var c in a){var d=a[c];PolymerGestures.addEventListener(this,c,this.element.getEventHandler(this,this,d))}},dispatchMethod:function(a,c,d){if(a){b.events&&console.group("[%s] dispatch [%s]",a.localName,c);var e="function"==typeof c?c:a[c];e&&e[d?"apply":"call"](a,d),b.events&&console.groupEnd(),Platform.flush()}}};a.api.instance.events=d,a.addEventListener=function(a,b,c,d){PolymerGestures.addEventListener(wrap(a),b,c,d)},a.removeEventListener=function(a,b,c,d){PolymerGestures.removeEventListener(wrap(a),b,c,d)}}(Polymer),function(a){var b={copyInstanceAttributes:function(){var a=this._instanceAttributes;for(var b in a)this.hasAttribute(b)||this.setAttribute(b,a[b])},takeAttributes:function(){if(this._publishLC)for(var a,b=0,c=this.attributes,d=c.length;(a=c[b])&&d>b;b++)this.attributeToProperty(a.name,a.value)},attributeToProperty:function(b,c){var b=this.propertyForAttribute(b);if(b){if(c&&c.search(a.bindPattern)>=0)return;var d=this[b],c=this.deserializeValue(c,d);c!==d&&(this[b]=c)}},propertyForAttribute:function(a){var b=this._publishLC&&this._publishLC[a];return b},deserializeValue:function(b,c){return a.deserializeValue(b,c)},serializeValue:function(a,b){return"boolean"===b?a?"":void 0:"object"!==b&&"function"!==b&&void 0!==a?a:void 0},reflectPropertyToAttribute:function(a){var b=typeof this[a],c=this.serializeValue(this[a],b);void 0!==c?this.setAttribute(a,c):"boolean"===b&&this.removeAttribute(a)}};a.api.instance.attributes=b}(Polymer),function(a){function b(a,b){return a===b?0!==a||1/a===1/b:f(a)&&f(b)?!0:a!==a&&b!==b}function c(a,b){return void 0===b&&null===a?b:null===b||void 0===b?a:b}var d=window.logFlags||{},e={object:void 0,type:"update",name:void 0,oldValue:void 0},f=Number.isNaN||function(a){return"number"==typeof a&&isNaN(a)},g={createPropertyObserver:function(){var a=this._observeNames;if(a&&a.length){var b=this._propertyObserver=new CompoundObserver(!0);this.registerObserver(b);for(var c,d=0,e=a.length;e>d&&(c=a[d]);d++)b.addPath(this,c),this.observeArrayValue(c,this[c],null)}},openPropertyObserver:function(){this._propertyObserver&&this._propertyObserver.open(this.notifyPropertyChanges,this)},notifyPropertyChanges:function(a,b,c){var d,e,f={};for(var g in b)if(d=c[2*g+1],e=this.observe[d]){var h=b[g],i=a[g];this.observeArrayValue(d,i,h),f[e]||(void 0!==h&&null!==h||void 0!==i&&null!==i)&&(f[e]=!0,this.invokeMethod(e,[h,i,arguments]))}},deliverChanges:function(){this._propertyObserver&&this._propertyObserver.deliver()},propertyChanged_:function(a){this.reflect[a]&&this.reflectPropertyToAttribute(a)},observeArrayValue:function(a,b,c){var e=this.observe[a];if(e&&(Array.isArray(c)&&(d.observe&&console.log("[%s] observeArrayValue: unregister observer [%s]",this.localName,a),this.closeNamedObserver(a+"__array")),Array.isArray(b))){d.observe&&console.log("[%s] observeArrayValue: register observer [%s]",this.localName,a,b);var f=new ArrayObserver(b);f.open(function(a){this.invokeMethod(e,[a])},this),this.registerNamedObserver(a+"__array",f)}},emitPropertyChangeRecord:function(a,c,d){if(!b(c,d)&&(this.propertyChanged_(a,c,d),Observer.hasObjectObserve)){var f=this.notifier_;f||(f=this.notifier_=Object.getNotifier(this)),e.object=this,e.name=a,e.oldValue=d,f.notify(e)}},bindToAccessor:function(a,c,d){function e(b,c){j[f]=b;var d=j[h];d&&"function"==typeof d.setValue&&d.setValue(b),j.emitPropertyChangeRecord(a,b,c)}var f=a+"_",g=a+"Observable_",h=a+"ComputedBoundObservable_";this[g]=c;var i=this[f],j=this,k=c.open(e);if(d&&!b(i,k)){var l=d(i,k);b(k,l)||(k=l,c.setValue&&c.setValue(k))}e(k,i);var m={close:function(){c.close(),j[g]=void 0,j[h]=void 0}};return this.registerObserver(m),m},createComputedProperties:function(){if(this._computedNames)for(var a=0;a<this._computedNames.length;a++){var b=this._computedNames[a],c=this.computed[b];try{var d=PolymerExpressions.getExpression(c),e=d.getBinding(this,this.element.syntax);this.bindToAccessor(b,e)}catch(f){console.error("Failed to create computed property",f)}}},bindProperty:function(a,b,d){if(d)return void(this[a]=b);var e=this.element.prototype.computed;if(e&&e[a]){var f=a+"ComputedBoundObservable_";return void(this[f]=b)}return this.bindToAccessor(a,b,c)},invokeMethod:function(a,b){var c=this[a]||a;"function"==typeof c&&c.apply(this,b)},registerObserver:function(a){return this._observers?void this._observers.push(a):void(this._observers=[a])},closeObservers:function(){if(this._observers){for(var a=this._observers,b=0;b<a.length;b++){var c=a[b];c&&"function"==typeof c.close&&c.close()}this._observers=[]}},registerNamedObserver:function(a,b){var c=this._namedObservers||(this._namedObservers={});c[a]=b},closeNamedObserver:function(a){var b=this._namedObservers;return b&&b[a]?(b[a].close(),b[a]=null,!0):void 0},closeNamedObservers:function(){if(this._namedObservers){for(var a in this._namedObservers)this.closeNamedObserver(a);this._namedObservers={}}}};a.api.instance.properties=g}(Polymer),function(a){var b=window.logFlags||0,c={instanceTemplate:function(a){HTMLTemplateElement.decorate(a);for(var b=this.syntax||!a.bindingDelegate&&this.element.syntax,c=a.createInstance(this,b),d=c.bindings_,e=0;e<d.length;e++)this.registerObserver(d[e]);return c},bind:function(a,b,c){var d=this.propertyForAttribute(a);if(d){var e=this.bindProperty(d,b,c);return Platform.enableBindingsReflection&&e&&(e.path=b.path_,this._recordBinding(d,e)),this.reflect[d]&&this.reflectPropertyToAttribute(d),e}return this.mixinSuper(arguments)},bindFinished:function(){this.makeElementReady()},_recordBinding:function(a,b){this.bindings_=this.bindings_||{},this.bindings_[a]=b},asyncUnbindAll:function(){this._unbound||(b.unbind&&console.log("[%s] asyncUnbindAll",this.localName),this._unbindAllJob=this.job(this._unbindAllJob,this.unbindAll,0))},unbindAll:function(){this._unbound||(this.closeObservers(),this.closeNamedObservers(),this._unbound=!0)},cancelUnbindAll:function(){return this._unbound?void(b.unbind&&console.warn("[%s] already unbound, cannot cancel unbindAll",this.localName)):(b.unbind&&console.log("[%s] cancelUnbindAll",this.localName),void(this._unbindAllJob&&(this._unbindAllJob=this._unbindAllJob.stop())))}},d=/\{\{([^{}]*)}}/;a.bindPattern=d,a.api.instance.mdv=c}(Polymer),function(a){function b(a){return a.hasOwnProperty("PolymerBase")}function c(){}var d={PolymerBase:!0,job:function(a,b,c){if("string"!=typeof a)return Polymer.job.call(this,a,b,c);var d="___"+a;this[d]=Polymer.job.call(this,this[d],b,c)},"super":Polymer.super,created:function(){},ready:function(){},createdCallback:function(){this.templateInstance&&this.templateInstance.model&&console.warn("Attributes on "+this.localName+" were data bound prior to Polymer upgrading the element. This may result in incorrect binding types."),this.created(),this.prepareElement(),this.ownerDocument.isStagingDocument||this.makeElementReady()},prepareElement:function(){return this._elementPrepared?void console.warn("Element already prepared",this.localName):(this._elementPrepared=!0,this.shadowRoots={},this.createPropertyObserver(),this.openPropertyObserver(),this.copyInstanceAttributes(),this.takeAttributes(),void this.addHostListeners())},makeElementReady:function(){this._readied||(this._readied=!0,this.createComputedProperties(),this.parseDeclarations(this.__proto__),this.removeAttribute("unresolved"),this.ready())},attachedCallback:function(){this.cancelUnbindAll(),this.attached&&this.attached(),this.enteredView&&this.enteredView(),this.hasBeenAttached||(this.hasBeenAttached=!0,this.domReady&&this.async("domReady"))},detachedCallback:function(){this.preventDispose||this.asyncUnbindAll(),this.detached&&this.detached(),this.leftView&&this.leftView()},enteredViewCallback:function(){this.attachedCallback()},leftViewCallback:function(){this.detachedCallback()},enteredDocumentCallback:function(){this.attachedCallback()},leftDocumentCallback:function(){this.detachedCallback()},parseDeclarations:function(a){a&&a.element&&(this.parseDeclarations(a.__proto__),a.parseDeclaration.call(this,a.element))},parseDeclaration:function(a){var b=this.fetchTemplate(a);if(b){var c=this.shadowFromTemplate(b);this.shadowRoots[a.name]=c}},fetchTemplate:function(a){return a.querySelector("template")},shadowFromTemplate:function(a){if(a){var b=this.createShadowRoot(),c=this.instanceTemplate(a);return b.appendChild(c),this.shadowRootReady(b,a),b}},lightFromTemplate:function(a,b){if(a){this.eventController=this;var c=this.instanceTemplate(a);return b?this.insertBefore(c,b):this.appendChild(c),this.shadowRootReady(this),c}},shadowRootReady:function(a){this.marshalNodeReferences(a)},marshalNodeReferences:function(a){var b=this.$=this.$||{};if(a)for(var c,d=a.querySelectorAll("[id]"),e=0,f=d.length;f>e&&(c=d[e]);e++)b[c.id]=c},attributeChangedCallback:function(a){"class"!==a&&"style"!==a&&this.attributeToProperty(a,this.getAttribute(a)),this.attributeChanged&&this.attributeChanged.apply(this,arguments)},onMutation:function(a,b){var c=new MutationObserver(function(a){b.call(this,c,a),c.disconnect()}.bind(this));c.observe(a,{childList:!0,subtree:!0})}};c.prototype=d,d.constructor=c,a.Base=c,a.isBase=b,a.api.instance.base=d}(Polymer),function(a){function b(a){return a.__proto__}function c(a,b){var c="",d=!1;b&&(c=b.localName,d=b.hasAttribute("is"));var e=Platform.ShadowCSS.makeScopeSelector(c,d);return Platform.ShadowCSS.shimCssText(a,e)}var d=(window.logFlags||{},window.ShadowDOMPolyfill),e="element",f="controller",g={STYLE_SCOPE_ATTRIBUTE:e,installControllerStyles:function(){var a=this.findStyleScope();if(a&&!this.scopeHasNamedStyle(a,this.localName)){for(var c=b(this),d="";c&&c.element;)d+=c.element.cssTextForScope(f),c=b(c);d&&this.installScopeCssText(d,a)}},installScopeStyle:function(a,b,c){var c=c||this.findStyleScope(),b=b||"";if(c&&!this.scopeHasNamedStyle(c,this.localName+b)){var d="";if(a instanceof Array)for(var e,f=0,g=a.length;g>f&&(e=a[f]);f++)d+=e.textContent+"\n\n";else d=a.textContent;this.installScopeCssText(d,c,b)}},installScopeCssText:function(a,b,e){if(b=b||this.findStyleScope(),e=e||"",b){d&&(a=c(a,b.host));var g=this.element.cssTextToScopeStyle(a,f);Polymer.applyStyleToScope(g,b),this.styleCacheForScope(b)[this.localName+e]=!0}},findStyleScope:function(a){for(var b=a||this;b.parentNode;)b=b.parentNode;return b},scopeHasNamedStyle:function(a,b){var c=this.styleCacheForScope(a);
return c[b]},styleCacheForScope:function(a){if(d){var b=a.host?a.host.localName:a.localName;return h[b]||(h[b]={})}return a._scopeStyles=a._scopeStyles||{}}},h={};a.api.instance.styles=g}(Polymer),function(a){function b(a,b){if("string"!=typeof a){var c=b||document._currentScript;if(b=a,a=c&&c.parentNode&&c.parentNode.getAttribute?c.parentNode.getAttribute("name"):"",!a)throw"Element name could not be inferred."}if(f(a))throw"Already registered (Polymer) prototype for element "+a;e(a,b),d(a)}function c(a,b){i[a]=b}function d(a){i[a]&&(i[a].registerWhenReady(),delete i[a])}function e(a,b){return j[a]=b||{}}function f(a){return j[a]}function g(a,b){if("string"!=typeof b)return!1;var c=HTMLElement.getPrototypeForTag(b),d=c&&c.constructor;return d?CustomElements.instanceof?CustomElements.instanceof(a,d):a instanceof d:!1}var h=a.extend,i=(a.api,{}),j={};a.getRegisteredPrototype=f,a.waitingForPrototype=c,a.instanceOfType=g,window.Polymer=b,h(Polymer,a),Platform.consumeDeclarations&&Platform.consumeDeclarations(function(a){if(a)for(var c,d=0,e=a.length;e>d&&(c=a[d]);d++)b.apply(null,c)})}(Polymer),function(a){var b={resolveElementPaths:function(a){Polymer.urlResolver.resolveDom(a)},addResolvePathApi:function(){var a=this.getAttribute("assetpath")||"",b=new URL(a,this.ownerDocument.baseURI);this.prototype.resolvePath=function(a,c){var d=new URL(a,c||b);return d.href}}};a.api.declaration.path=b}(Polymer),function(a){function b(a,b){var c=new URL(a.getAttribute("href"),b).href;return"@import '"+c+"';"}function c(a,b){if(a){b===document&&(b=document.head),i&&(b=document.head);var c=d(a.textContent),e=a.getAttribute(h);e&&c.setAttribute(h,e);var f=b.firstElementChild;if(b===document.head){var g="style["+h+"]",j=document.head.querySelectorAll(g);j.length&&(f=j[j.length-1].nextElementSibling)}b.insertBefore(c,f)}}function d(a,b){b=b||document,b=b.createElement?b:b.ownerDocument;var c=b.createElement("style");return c.textContent=a,c}function e(a){return a&&a.__resource||""}function f(a,b){return q?q.call(a,b):void 0}var g=(window.logFlags||{},a.api.instance.styles),h=g.STYLE_SCOPE_ATTRIBUTE,i=window.ShadowDOMPolyfill,j="style",k="@import",l="link[rel=stylesheet]",m="global",n="polymer-scope",o={loadStyles:function(a){var b=this.fetchTemplate(),c=b&&this.templateContent();if(c){this.convertSheetsToStyles(c);var d=this.findLoadableStyles(c);if(d.length){var e=b.ownerDocument.baseURI;return Polymer.styleResolver.loadStyles(d,e,a)}}a&&a()},convertSheetsToStyles:function(a){for(var c,e,f=a.querySelectorAll(l),g=0,h=f.length;h>g&&(c=f[g]);g++)e=d(b(c,this.ownerDocument.baseURI),this.ownerDocument),this.copySheetAttributes(e,c),c.parentNode.replaceChild(e,c)},copySheetAttributes:function(a,b){for(var c,d=0,e=b.attributes,f=e.length;(c=e[d])&&f>d;d++)"rel"!==c.name&&"href"!==c.name&&a.setAttribute(c.name,c.value)},findLoadableStyles:function(a){var b=[];if(a)for(var c,d=a.querySelectorAll(j),e=0,f=d.length;f>e&&(c=d[e]);e++)c.textContent.match(k)&&b.push(c);return b},installSheets:function(){this.cacheSheets(),this.cacheStyles(),this.installLocalSheets(),this.installGlobalStyles()},cacheSheets:function(){this.sheets=this.findNodes(l),this.sheets.forEach(function(a){a.parentNode&&a.parentNode.removeChild(a)})},cacheStyles:function(){this.styles=this.findNodes(j+"["+n+"]"),this.styles.forEach(function(a){a.parentNode&&a.parentNode.removeChild(a)})},installLocalSheets:function(){var a=this.sheets.filter(function(a){return!a.hasAttribute(n)}),b=this.templateContent();if(b){var c="";if(a.forEach(function(a){c+=e(a)+"\n"}),c){var f=d(c,this.ownerDocument);b.insertBefore(f,b.firstChild)}}},findNodes:function(a,b){var c=this.querySelectorAll(a).array(),d=this.templateContent();if(d){var e=d.querySelectorAll(a).array();c=c.concat(e)}return b?c.filter(b):c},installGlobalStyles:function(){var a=this.styleForScope(m);c(a,document.head)},cssTextForScope:function(a){var b="",c="["+n+"="+a+"]",d=function(a){return f(a,c)},g=this.sheets.filter(d);g.forEach(function(a){b+=e(a)+"\n\n"});var h=this.styles.filter(d);return h.forEach(function(a){b+=a.textContent+"\n\n"}),b},styleForScope:function(a){var b=this.cssTextForScope(a);return this.cssTextToScopeStyle(b,a)},cssTextToScopeStyle:function(a,b){if(a){var c=d(a);return c.setAttribute(h,this.getAttribute("name")+"-"+b),c}}},p=HTMLElement.prototype,q=p.matches||p.matchesSelector||p.webkitMatchesSelector||p.mozMatchesSelector;a.api.declaration.styles=o,a.applyStyleToScope=c}(Polymer),function(a){var b=(window.logFlags||{},a.api.instance.events),c=b.EVENT_PREFIX,d={};["webkitAnimationStart","webkitAnimationEnd","webkitTransitionEnd","DOMFocusOut","DOMFocusIn","DOMMouseScroll"].forEach(function(a){d[a.toLowerCase()]=a});var e={parseHostEvents:function(){var a=this.prototype.eventDelegates;this.addAttributeDelegates(a)},addAttributeDelegates:function(a){for(var b,c=0;b=this.attributes[c];c++)this.hasEventPrefix(b.name)&&(a[this.removeEventPrefix(b.name)]=b.value.replace("{{","").replace("}}","").trim())},hasEventPrefix:function(a){return a&&"o"===a[0]&&"n"===a[1]&&"-"===a[2]},removeEventPrefix:function(a){return a.slice(f)},findController:function(a){for(;a.parentNode;){if(a.eventController)return a.eventController;a=a.parentNode}return a.host},getEventHandler:function(a,b,c){var d=this;return function(e){a&&a.PolymerBase||(a=d.findController(b));var f=[e,e.detail,e.currentTarget];a.dispatchMethod(a,c,f)}},prepareEventBinding:function(a,b){if(this.hasEventPrefix(b)){var c=this.removeEventPrefix(b);c=d[c]||c;var e=this;return function(b,d,f){function g(){return"{{ "+a+" }}"}var h=e.getEventHandler(void 0,d,a);return PolymerGestures.addEventListener(d,c,h),f?void 0:{open:g,discardChanges:g,close:function(){PolymerGestures.removeEventListener(d,c,h)}}}}}},f=c.length;a.api.declaration.events=e}(Polymer),function(a){var b={inferObservers:function(a){var b,c=a.observe;for(var d in a)"Changed"===d.slice(-7)&&(c||(c=a.observe={}),b=d.slice(0,-7),c[b]=c[b]||d)},explodeObservers:function(a){var b=a.observe;if(b){var c={};for(var d in b)for(var e,f=d.split(" "),g=0;e=f[g];g++)c[e]=b[d];a.observe=c}},optimizePropertyMaps:function(a){if(a.observe){var b=a._observeNames=[];for(var c in a.observe)for(var d,e=c.split(" "),f=0;d=e[f];f++)b.push(d)}if(a.publish){var b=a._publishNames=[];for(var c in a.publish)b.push(c)}if(a.computed){var b=a._computedNames=[];for(var c in a.computed)b.push(c)}},publishProperties:function(a,b){var c=a.publish;c&&(this.requireProperties(c,a,b),a._publishLC=this.lowerCaseMap(c))},requireProperties:function(a,b){b.reflect=b.reflect||{};for(var c in a){var d=a[c];d&&void 0!==d.reflect&&(b.reflect[c]=Boolean(d.reflect),d=d.value),void 0!==d&&(b[c]=d)}},lowerCaseMap:function(a){var b={};for(var c in a)b[c.toLowerCase()]=c;return b},createPropertyAccessor:function(a,b){var c=this.prototype,d=a+"_",e=a+"Observable_";c[d]=c[a],Object.defineProperty(c,a,{get:function(){var a=this[e];return a&&a.deliver(),this[d]},set:function(c){if(b)return this[d];var f=this[e];if(f)return void f.setValue(c);var g=this[d];return this[d]=c,this.emitPropertyChangeRecord(a,c,g),c},configurable:!0})},createPropertyAccessors:function(a){var b=a._computedNames;if(b&&b.length)for(var c,d=0,e=b.length;e>d&&(c=b[d]);d++)this.createPropertyAccessor(c,!0);var b=a._publishNames;if(b&&b.length)for(var c,d=0,e=b.length;e>d&&(c=b[d]);d++)a.computed&&a.computed[c]||this.createPropertyAccessor(c)}};a.api.declaration.properties=b}(Polymer),function(a){var b="attributes",c=/\s|,/,d={inheritAttributesObjects:function(a){this.inheritObject(a,"publishLC"),this.inheritObject(a,"_instanceAttributes")},publishAttributes:function(a){var d=this.getAttribute(b);if(d)for(var e,f=a.publish||(a.publish={}),g=d.split(c),h=0,i=g.length;i>h;h++)e=g[h].trim(),e&&void 0===f[e]&&(f[e]=void 0)},accumulateInstanceAttributes:function(){for(var a,b=this.prototype._instanceAttributes,c=this.attributes,d=0,e=c.length;e>d&&(a=c[d]);d++)this.isInstanceAttribute(a.name)&&(b[a.name]=a.value)},isInstanceAttribute:function(a){return!this.blackList[a]&&"on-"!==a.slice(0,3)},blackList:{name:1,"extends":1,constructor:1,noscript:1,assetpath:1,"cache-csstext":1}};d.blackList[b]=1,a.api.declaration.attributes=d}(Polymer),function(a){var b=a.api.declaration.events,c=new PolymerExpressions,d=c.prepareBinding;c.prepareBinding=function(a,e,f){return b.prepareEventBinding(a,e,f)||d.call(c,a,e,f)};var e={syntax:c,fetchTemplate:function(){return this.querySelector("template")},templateContent:function(){var a=this.fetchTemplate();return a&&a.content},installBindingDelegate:function(a){a&&(a.bindingDelegate=this.syntax)}};a.api.declaration.mdv=e}(Polymer),function(a){function b(a){if(!Object.__proto__){var b=Object.getPrototypeOf(a);a.__proto__=b,d(b)&&(b.__proto__=Object.getPrototypeOf(b))}}var c=a.api,d=a.isBase,e=a.extend,f=window.ShadowDOMPolyfill,g={register:function(a,b){this.buildPrototype(a,b),this.registerPrototype(a,b),this.publishConstructor()},buildPrototype:function(b,c){var d=a.getRegisteredPrototype(b),e=this.generateBasePrototype(c);this.desugarBeforeChaining(d,e),this.prototype=this.chainPrototypes(d,e),this.desugarAfterChaining(b,c)},desugarBeforeChaining:function(a,b){a.element=this,this.publishAttributes(a,b),this.publishProperties(a,b),this.inferObservers(a),this.explodeObservers(a)},chainPrototypes:function(a,c){this.inheritMetaData(a,c);var d=this.chainObject(a,c);return b(d),d},inheritMetaData:function(a,b){this.inheritObject("observe",a,b),this.inheritObject("publish",a,b),this.inheritObject("reflect",a,b),this.inheritObject("_publishLC",a,b),this.inheritObject("_instanceAttributes",a,b),this.inheritObject("eventDelegates",a,b)},desugarAfterChaining:function(a,b){this.optimizePropertyMaps(this.prototype),this.createPropertyAccessors(this.prototype),this.installBindingDelegate(this.fetchTemplate()),this.installSheets(),this.resolveElementPaths(this),this.accumulateInstanceAttributes(),this.parseHostEvents(),this.addResolvePathApi(),f&&Platform.ShadowCSS.shimStyling(this.templateContent(),a,b),this.prototype.registerCallback&&this.prototype.registerCallback(this)},publishConstructor:function(){var a=this.getAttribute("constructor");a&&(window[a]=this.ctor)},generateBasePrototype:function(a){var b=this.findBasePrototype(a);if(!b){var b=HTMLElement.getPrototypeForTag(a);b=this.ensureBaseApi(b),h[a]=b}return b},findBasePrototype:function(a){return h[a]},ensureBaseApi:function(a){if(a.PolymerBase)return a;var b=Object.create(a);return c.publish(c.instance,b),this.mixinMethod(b,a,c.instance.mdv,"bind"),b},mixinMethod:function(a,b,c,d){var e=function(a){return b[d].apply(this,a)};a[d]=function(){return this.mixinSuper=e,c[d].apply(this,arguments)}},inheritObject:function(a,b,c){var d=b[a]||{};b[a]=this.chainObject(d,c[a])},registerPrototype:function(a,b){var c={prototype:this.prototype},d=this.findTypeExtension(b);d&&(c.extends=d),HTMLElement.register(a,this.prototype),this.ctor=document.registerElement(a,c)},findTypeExtension:function(a){if(a&&a.indexOf("-")<0)return a;var b=this.findBasePrototype(a);return b.element?this.findTypeExtension(b.element.extends):void 0}},h={};g.chainObject=Object.__proto__?function(a,b){return a&&b&&a!==b&&(a.__proto__=b),a}:function(a,b){if(a&&b&&a!==b){var c=Object.create(b);a=e(c,a)}return a},c.declaration.prototype=g}(Polymer),function(a){function b(a){return document.contains(a)?j:i}function c(){return i.length?i[0]:j[0]}function d(a){f.waitToReady=!0,Platform.endOfMicrotask(function(){HTMLImports.whenReady(function(){f.addReadyCallback(a),f.waitToReady=!1,f.check()})})}function e(a){if(void 0===a)return void f.ready();var b=setTimeout(function(){f.ready()},a);Polymer.whenReady(function(){clearTimeout(b)})}var f={wait:function(a){a.__queue||(a.__queue={},g.push(a))},enqueue:function(a,c,d){var e=a.__queue&&!a.__queue.check;return e&&(b(a).push(a),a.__queue.check=c,a.__queue.go=d),0!==this.indexOf(a)},indexOf:function(a){var c=b(a).indexOf(a);return c>=0&&document.contains(a)&&(c+=HTMLImports.useNative||HTMLImports.ready?i.length:1e9),c},go:function(a){var b=this.remove(a);b&&(a.__queue.flushable=!0,this.addToFlushQueue(b),this.check())},remove:function(a){var c=this.indexOf(a);if(0===c)return b(a).shift()},check:function(){var a=this.nextElement();return a&&a.__queue.check.call(a),this.canReady()?(this.ready(),!0):void 0},nextElement:function(){return c()},canReady:function(){return!this.waitToReady&&this.isEmpty()},isEmpty:function(){for(var a,b=0,c=g.length;c>b&&(a=g[b]);b++)if(a.__queue&&!a.__queue.flushable)return;return!0},addToFlushQueue:function(a){h.push(a)},flush:function(){if(!this.flushing){this.flushing=!0;for(var a;h.length;)a=h.shift(),a.__queue.go.call(a),a.__queue=null;this.flushing=!1}},ready:function(){var a=CustomElements.ready;CustomElements.ready=!1,this.flush(),CustomElements.useNative||CustomElements.upgradeDocumentTree(document),CustomElements.ready=a,Platform.flush(),requestAnimationFrame(this.flushReadyCallbacks)},addReadyCallback:function(a){a&&k.push(a)},flushReadyCallbacks:function(){if(k)for(var a;k.length;)(a=k.shift())()},waitingFor:function(){for(var a,b=[],c=0,d=g.length;d>c&&(a=g[c]);c++)a.__queue&&!a.__queue.flushable&&b.push(a);return b},waitToReady:!0},g=[],h=[],i=[],j=[],k=[];a.elements=g,a.waitingFor=f.waitingFor.bind(f),a.forceReady=e,a.queue=f,a.whenReady=a.whenPolymerReady=d}(Polymer),function(a){function b(a){return Boolean(HTMLElement.getPrototypeForTag(a))}function c(a){return a&&a.indexOf("-")>=0}var d=a.extend,e=a.api,f=a.queue,g=a.whenReady,h=a.getRegisteredPrototype,i=a.waitingForPrototype,j=d(Object.create(HTMLElement.prototype),{createdCallback:function(){this.getAttribute("name")&&this.init()},init:function(){this.name=this.getAttribute("name"),this.extends=this.getAttribute("extends"),f.wait(this),this.loadResources(),this.registerWhenReady()},registerWhenReady:function(){this.registered||this.waitingForPrototype(this.name)||this.waitingForQueue()||this.waitingForResources()||f.go(this)},_register:function(){c(this.extends)&&!b(this.extends)&&console.warn("%s is attempting to extend %s, an unregistered element or one that was not registered with Polymer.",this.name,this.extends),this.register(this.name,this.extends),this.registered=!0},waitingForPrototype:function(a){return h(a)?void 0:(i(a,this),this.handleNoScript(a),!0)},handleNoScript:function(a){this.hasAttribute("noscript")&&!this.noscript&&(this.noscript=!0,Polymer(a))},waitingForResources:function(){return this._needsResources},waitingForQueue:function(){return f.enqueue(this,this.registerWhenReady,this._register)},loadResources:function(){this._needsResources=!0,this.loadStyles(function(){this._needsResources=!1,this.registerWhenReady()}.bind(this))}});e.publish(e.declaration,j),g(function(){document.body.removeAttribute("unresolved"),document.dispatchEvent(new CustomEvent("polymer-ready",{bubbles:!0}))}),document.registerElement("polymer-element",{prototype:j})}(Polymer),function(a){function b(a,b){a?(document.head.appendChild(a),d(b)):b&&b()}function c(a,c){if(a&&a.length){for(var d,e,f=document.createDocumentFragment(),g=0,h=a.length;h>g&&(d=a[g]);g++)e=document.createElement("link"),e.rel="import",e.href=d,f.appendChild(e);b(f,c)}else c&&c()}var d=a.whenPolymerReady;a.import=c,a.importElements=b}(Polymer),function(){var a=document.createElement("polymer-element");a.setAttribute("name","auto-binding"),a.setAttribute("extends","template"),a.init(),Polymer("auto-binding",{createdCallback:function(){this.syntax=this.bindingDelegate=this.makeSyntax(),Polymer.whenPolymerReady(function(){this.model=this,this.setAttribute("bind",""),this.async(function(){this.marshalNodeReferences(this.parentNode),this.fire("template-bound")})}.bind(this))},makeSyntax:function(){var a=Object.create(Polymer.api.declaration.events),b=this;a.findController=function(){return b.model};var c=new PolymerExpressions,d=c.prepareBinding;return c.prepareBinding=function(b,e,f){return a.prepareEventBinding(b,e,f)||d.call(c,b,e,f)},c}})}();
//# sourceMappingURL=polymer.js.map;
/**
 * Copyright 2012 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function() {
'use strict';

var ASSERT_ENABLED = false;
var SVG_NS = 'http://www.w3.org/2000/svg';

function assert(check, message) {
  console.assert(ASSERT_ENABLED,
      'assert should not be called when ASSERT_ENABLED is false');
  console.assert(check, message);
  // Some implementations of console.assert don't actually throw
  if (!check) { throw message; }
}

function detectFeatures() {
  var el = createDummyElement();
  el.style.cssText = 'width: calc(0px);' +
                     'width: -webkit-calc(0px);';
  var calcFunction = el.style.width.split('(')[0];
  function detectProperty(candidateProperties) {
    return [].filter.call(candidateProperties, function(property) {
      return property in el.style;
    })[0];
  }
  var transformProperty = detectProperty([
    'transform',
    'webkitTransform',
    'msTransform']);
  var perspectiveProperty = detectProperty([
    'perspective',
    'webkitPerspective',
    'msPerspective']);
  return {
    calcFunction: calcFunction,
    transformProperty: transformProperty,
    transformOriginProperty: transformProperty + 'Origin',
    perspectiveProperty: perspectiveProperty,
    perspectiveOriginProperty: perspectiveProperty + 'Origin'
  };
}
var features = detectFeatures();

function prefixProperty(property) {
  switch (property) {
    case 'transform':
      return features.transformProperty;
    case 'transformOrigin':
      return features.transformOriginProperty;
    case 'perspective':
      return features.perspectiveProperty;
    case 'perspectiveOrigin':
      return features.perspectiveOriginProperty;
    default:
      return property;
  }
}

function createDummyElement() {
  return document.documentElement.namespaceURI == SVG_NS ?
         document.createElementNS(SVG_NS, 'g') :
         document.createElement('div');
}

var constructorToken = {};
var deprecationsSilenced = {};

var createObject = function(proto, obj) {
  var newObject = Object.create(proto);
  Object.getOwnPropertyNames(obj).forEach(function(name) {
    Object.defineProperty(
        newObject, name, Object.getOwnPropertyDescriptor(obj, name));
  });
  return newObject;
};

var abstractMethod = function() {
  throw 'Abstract method not implemented.';
};

var deprecated = function(name, deprecationDate, advice, plural) {
  if (deprecationsSilenced[name]) {
    return;
  }
  var auxVerb = plural ? 'are' : 'is';
  var today = new Date();
  var cutoffDate = new Date(deprecationDate);
  cutoffDate.setMonth(cutoffDate.getMonth() + 3); // 3 months grace period

  if (today < cutoffDate) {
    console.warn('Web Animations: ' + name +
        ' ' + auxVerb + ' deprecated and will stop working on ' +
        cutoffDate.toDateString() + '. ' + advice);
    deprecationsSilenced[name] = true;
  } else {
    throw new Error(name + ' ' + auxVerb + ' no longer supported. ' + advice);
  }
};

var defineDeprecatedProperty = function(object, property, getFunc, setFunc) {
  var descriptor = {
    get: getFunc,
    configurable: true
  };
  if (setFunc) {
    descriptor.set = setFunc;
  }
  Object.defineProperty(object, property, descriptor);
};

var IndexSizeError = function(message) {
  Error.call(this);
  this.name = 'IndexSizeError';
  this.message = message;
};

IndexSizeError.prototype = Object.create(Error.prototype);



/** @constructor */
var TimingDict = function(timingInput) {
  if (typeof timingInput === 'object') {
    for (var k in timingInput) {
      if (k in TimingDict.prototype) {
        this[k] = timingInput[k];
      }
    }
  } else if (isDefinedAndNotNull(timingInput)) {
    this.duration = Number(timingInput);
  }
};

TimingDict.prototype = {
  delay: 0,
  endDelay: 0,
  fill: 'auto',
  iterationStart: 0,
  iterations: 1,
  duration: 'auto',
  playbackRate: 1,
  direction: 'normal',
  easing: 'linear'
};



/** @constructor */
var Timing = function(token, timingInput, changeHandler) {
  if (token !== constructorToken) {
    throw new TypeError('Illegal constructor');
  }
  this._dict = new TimingDict(timingInput);
  this._changeHandler = changeHandler;
};

Timing.prototype = {
  _timingFunction: function(timedItem) {
    var timingFunction = TimingFunction.createFromString(
        this.easing, timedItem);
    this._timingFunction = function() {
      return timingFunction;
    };
    return timingFunction;
  },
  _invalidateTimingFunction: function() {
    delete this._timingFunction;
  },
  _iterations: function() {
    var value = this._dict.iterations;
    return value < 0 ? 1 : value;
  },
  _duration: function() {
    var value = this._dict.duration;
    return typeof value === 'number' ? value : 'auto';
  },
  _clone: function() {
    return new Timing(
        constructorToken, this._dict, this._updateInternalState.bind(this));
  }
};

// Configures an accessor descriptor for use with Object.defineProperty() to
// allow the property to be changed and enumerated, to match __defineGetter__()
// and __defineSetter__().
var configureDescriptor = function(descriptor) {
  descriptor.configurable = true;
  descriptor.enumerable = true;
  return descriptor;
};

Timing._defineProperty = function(prop) {
  Object.defineProperty(Timing.prototype, prop, configureDescriptor({
    get: function() {
      return this._dict[prop];
    },
    set: function(value) {
      if (isDefinedAndNotNull(value)) {
        if (prop == 'duration' && value == 'auto') {
          // duration is not always a number
        } else if (['delay', 'endDelay', 'iterationStart', 'iterations',
                    'duration', 'playbackRate'].indexOf(prop) >= 0) {
          value = Number(value);
        }
        this._dict[prop] = value;
      } else {
        delete this._dict[prop];
      }
      // FIXME: probably need to implement specialized handling parsing
      // for each property
      if (prop === 'easing') {
        // Cached timing function may be invalid now.
        this._invalidateTimingFunction();
      }
      this._changeHandler();
    }
  }));
};

for (var prop in TimingDict.prototype) {
  Timing._defineProperty(prop);
}

var isDefined = function(val) {
  return typeof val !== 'undefined';
};

var isDefinedAndNotNull = function(val) {
  return isDefined(val) && (val !== null);
};



/** @constructor */
var AnimationTimeline = function(token) {
  if (token !== constructorToken) {
    throw new TypeError('Illegal constructor');
  }
  // TODO: This will probably need to change.
  this._startTime = documentTimeZeroAsClockTime;
};

AnimationTimeline.prototype = {
  get currentTime() {
    if (this._startTime === undefined) {
      this._startTime = documentTimeZeroAsClockTime;
      if (this._startTime === undefined) {
        return null;
      }
    }
    return relativeTime(cachedClockTime(), this._startTime);
  },
  get effectiveCurrentTime() {
    return this.currentTime || 0;
  },
  play: function(source) {
    return new AnimationPlayer(constructorToken, source, this);
  },
  getCurrentPlayers: function() {
    return PLAYERS.filter(function(player) {
      return !player._isPastEndOfActiveInterval();
    });
  },
  toTimelineTime: function(otherTime, other) {
    if ((this.currentTime === null) || (other.currentTime === null)) {
      return null;
    } else {
      return otherTime + other._startTime - this._startTime;
    }
  },
  _pauseAnimationsForTesting: function(pauseAt) {
    PLAYERS.forEach(function(player) {
      player.pause();
      player.currentTime = pauseAt;
    });
  }
};

// TODO: Remove dead players from here?
var PLAYERS = [];
var playersAreSorted = false;
var playerSequenceNumber = 0;

// Methods for event target objects.
var initializeEventTarget = function(eventTarget) {
  eventTarget._handlers = {};
  eventTarget._onHandlers = {};
};
var setOnEventHandler = function(eventTarget, type, handler) {
  if (typeof handler === 'function') {
    eventTarget._onHandlers[type] = {
      callback: handler,
      index: (eventTarget._handlers[type] || []).length
    };
  } else {
    eventTarget._onHandlers[type] = null;
  }
};
var getOnEventHandler = function(eventTarget, type) {
  if (isDefinedAndNotNull(eventTarget._onHandlers[type])) {
    return eventTarget._onHandlers[type].callback;
  }
  return null;
};
var addEventHandler = function(eventTarget, type, handler) {
  if (typeof handler !== 'function') {
    return;
  }
  if (!isDefinedAndNotNull(eventTarget._handlers[type])) {
    eventTarget._handlers[type] = [];
  } else if (eventTarget._handlers[type].indexOf(handler) !== -1) {
    return;
  }
  eventTarget._handlers[type].push(handler);
};
var removeEventHandler = function(eventTarget, type, handler) {
  if (!eventTarget._handlers[type]) {
    return;
  }
  var index = eventTarget._handlers[type].indexOf(handler);
  if (index === -1) {
    return;
  }
  eventTarget._handlers[type].splice(index, 1);
  if (isDefinedAndNotNull(eventTarget._onHandlers[type]) &&
      (index < eventTarget._onHandlers[type].index)) {
    eventTarget._onHandlers[type].index -= 1;
  }
};
var hasEventHandlersForEvent = function(eventTarget, type) {
  return (isDefinedAndNotNull(eventTarget._handlers[type]) &&
      eventTarget._handlers[type].length > 0) ||
      isDefinedAndNotNull(eventTarget._onHandlers[type]);
};
var callEventHandlers = function(eventTarget, type, event) {
  var callbackList;
  if (isDefinedAndNotNull(eventTarget._handlers[type])) {
    callbackList = eventTarget._handlers[type].slice();
  } else {
    callbackList = [];
  }
  if (isDefinedAndNotNull(eventTarget._onHandlers[type])) {
    callbackList.splice(eventTarget._onHandlers[type].index, 0,
        eventTarget._onHandlers[type].callback);
  }
  setTimeout(function() {
    for (var i = 0; i < callbackList.length; i++) {
      callbackList[i].call(eventTarget, event);
    }
  }, 0);
};
var createEventPrototype = function() {
  var prototype = Object.create(window.Event.prototype, {
    type: { get: function() { return this._type; } },
    target: { get: function() { return this._target; } },
    currentTarget: { get: function() { return this._target; } },
    eventPhase: { get: function() { return this._eventPhase; } },
    bubbles: { get: function() { return false; } },
    cancelable: { get: function() { return false; } },
    timeStamp: { get: function() { return this._timeStamp; } },
    defaultPrevented: { get: function() { return false; } }
  });
  prototype._type = '';
  prototype._target = null;
  prototype._eventPhase = Event.NONE;
  prototype._timeStamp = 0;
  prototype._initialize = function(target) {
    this._target = target;
    this._eventPhase = Event.AT_TARGET;
    this._timeStamp = cachedClockTime();
  };
  return prototype;
};



/** @constructor */
var AnimationPlayer = function(token, source, timeline) {
  if (token !== constructorToken) {
    throw new TypeError('Illegal constructor');
  }
  enterModifyCurrentAnimationState();
  try {
    this._registeredOnTimeline = false;
    this._sequenceNumber = playerSequenceNumber++;
    this._timeline = timeline;
    this._startTime =
        this.timeline.currentTime === null ? 0 : this.timeline.currentTime;
    this._storedTimeLag = 0.0;
    this._pausedState = false;
    this._holdTime = null;
    this._previousCurrentTime = null;
    this._playbackRate = 1.0;
    this._hasTicked = false;

    this.source = source;
    this._lastCurrentTime = undefined;
    this._finishedFlag = false;
    initializeEventTarget(this);

    playersAreSorted = false;
    maybeRestartAnimation();
  } finally {
    exitModifyCurrentAnimationState(ensureRetickBeforeGetComputedStyle);
  }
};

AnimationPlayer.prototype = {
  set source(source) {
    enterModifyCurrentAnimationState();
    try {
      if (isDefinedAndNotNull(this.source)) {
        // To prevent infinite recursion.
        var oldTimedItem = this.source;
        this._source = null;
        oldTimedItem._attach(null);
      }
      this._source = source;
      if (isDefinedAndNotNull(this.source)) {
        this.source._attach(this);
        this._update();
        maybeRestartAnimation();
      }
    } finally {
      exitModifyCurrentAnimationState(repeatLastTick);
    }
  },
  get source() {
    return this._source;
  },
  // This is the effective current time.
  set currentTime(currentTime) {
    enterModifyCurrentAnimationState();
    try {
      this._currentTime = currentTime;
    } finally {
      exitModifyCurrentAnimationState(repeatLastTick);
    }
  },
  get currentTime() {
    return this._currentTime;
  },
  set _currentTime(seekTime) {
    // If we are paused or seeking to a time where limiting applies (i.e. beyond
    // the end in the current direction), update the hold time.
    var sourceContentEnd = this.source ? this.source.endTime : 0;
    if (this.paused ||
        (this.playbackRate > 0 && seekTime >= sourceContentEnd) ||
        (this.playbackRate < 0 && seekTime <= 0)) {
      this._holdTime = seekTime;
    // Otherwise, clear the hold time (it may been set by previously seeking to
    // a limited time) and update the time lag.
    } else {
      this._holdTime = null;
      this._storedTimeLag = (this.timeline.effectiveCurrentTime -
          this.startTime) * this.playbackRate - seekTime;
    }
    this._update();
    maybeRestartAnimation();
  },
  get _currentTime() {
    this._previousCurrentTime = (this.timeline.effectiveCurrentTime -
        this.startTime) * this.playbackRate - this.timeLag;
    return this._previousCurrentTime;
  },
  get _unlimitedCurrentTime() {
    return (this.timeline.effectiveCurrentTime - this.startTime) *
        this.playbackRate - this._storedTimeLag;
  },
  get timeLag() {
    if (this.paused) {
      return this._pauseTimeLag;
    }

    // Apply limiting at start of interval when playing in reverse
    if (this.playbackRate < 0 && this._unlimitedCurrentTime <= 0) {
      if (this._holdTime === null) {
        this._holdTime = Math.min(this._previousCurrentTime, 0);
      }
      return this._pauseTimeLag;
    }

    // Apply limiting at end of interval when playing forwards
    var sourceContentEnd = this.source ? this.source.endTime : 0;
    if (this.playbackRate > 0 &&
        this._unlimitedCurrentTime >= sourceContentEnd) {
      if (this._holdTime === null) {
        this._holdTime = Math.max(this._previousCurrentTime, sourceContentEnd);
      }
      return this._pauseTimeLag;
    }

    // Finished limiting so store pause time lag
    if (this._holdTime !== null) {
      this._storedTimeLag = this._pauseTimeLag;
      this._holdTime = null;
    }

    return this._storedTimeLag;
  },
  get _pauseTimeLag() {
    return ((this.timeline.currentTime || 0) - this.startTime) *
        this.playbackRate - this._holdTime;
  },
  set startTime(startTime) {
    enterModifyCurrentAnimationState();
    try {
      // This seeks by updating _startTime and hence the currentTime. It does
      // not affect _storedTimeLag.
      this._startTime = startTime;
      this._holdTime = null;
      playersAreSorted = false;
      this._update();
      maybeRestartAnimation();
    } finally {
      exitModifyCurrentAnimationState(repeatLastTick);
    }
  },
  get startTime() {
    return this._startTime;
  },
  set _paused(isPaused) {
    if (isPaused === this._pausedState) {
      return;
    }
    if (this._pausedState) {
      this._storedTimeLag = this.timeLag;
      this._holdTime = null;
      maybeRestartAnimation();
    } else {
      this._holdTime = this.currentTime;
    }
    this._pausedState = isPaused;
  },
  get paused() {
    return this._pausedState;
  },
  get timeline() {
    return this._timeline;
  },
  set playbackRate(playbackRate) {
    enterModifyCurrentAnimationState();
    try {
      var cachedCurrentTime = this.currentTime;
      // This will impact currentTime, so perform a compensatory seek.
      this._playbackRate = playbackRate;
      this.currentTime = cachedCurrentTime;
    } finally {
      exitModifyCurrentAnimationState(repeatLastTick);
    }
  },
  get playbackRate() {
    return this._playbackRate;
  },
  get finished() {
    return this._isLimited;
  },
  get _isLimited() {
    var sourceEnd = this.source ? this.source.endTime : 0;
    return ((this.playbackRate > 0 && this.currentTime >= sourceEnd) ||
        (this.playbackRate < 0 && this.currentTime <= 0));
  },
  cancel: function() {
    this.source = null;
  },
  finish: function() {
    if (this.playbackRate < 0) {
      this.currentTime = 0;
    } else if (this.playbackRate > 0) {
      var sourceEndTime = this.source ? this.source.endTime : 0;
      if (sourceEndTime === Infinity) {
        throw new Error('InvalidStateError');
      }
      this.currentTime = sourceEndTime;
    }
  },
  play: function() {
    this._paused = false;
    if (!this.source) {
      return;
    }
    if (this.playbackRate > 0 &&
        (this.currentTime < 0 ||
         this.currentTime >= this.source.endTime)) {
      this.currentTime = 0;
    } else if (this.playbackRate < 0 &&
        (this.currentTime <= 0 ||
        this.currentTime > this.source.endTime)) {
      this.currentTime = this.source.endTime;
    }
  },
  pause: function() {
    this._paused = true;
  },
  reverse: function() {
    if (this.playbackRate === 0) {
      return;
    }
    if (this.source) {
      if (this.playbackRate > 0 && this.currentTime >= this.source.endTime) {
        this.currentTime = this.source.endTime;
      } else if (this.playbackRate < 0 && this.currentTime < 0) {
        this.currentTime = 0;
      }
    }
    this.playbackRate = -this.playbackRate;
    this._paused = false;
  },
  _update: function() {
    if (this.source !== null) {
      this.source._updateInheritedTime(
          this.timeline.currentTime === null ? null : this._currentTime);
      this._registerOnTimeline();
    }
  },
  _hasFutureAnimation: function() {
    return this.source === null || this.playbackRate === 0 ||
        this.source._hasFutureAnimation(this.playbackRate > 0);
  },
  _isPastEndOfActiveInterval: function() {
    return this.source === null ||
        this.source._isPastEndOfActiveInterval();
  },
  _isCurrent: function() {
    return this.source && this.source._isCurrent();
  },
  _hasFutureEffect: function() {
    return this.source && this.source._hasFutureEffect();
  },
  _getLeafItemsInEffect: function(items) {
    if (this.source) {
      this.source._getLeafItemsInEffect(items);
    }
  },
  _isTargetingElement: function(element) {
    return this.source && this.source._isTargetingElement(element);
  },
  _getAnimationsTargetingElement: function(element, animations) {
    if (this.source) {
      this.source._getAnimationsTargetingElement(element, animations);
    }
  },
  set onfinish(handler) {
    return setOnEventHandler(this, 'finish', handler);
  },
  get onfinish() {
    return getOnEventHandler(this, 'finish');
  },
  addEventListener: function(type, handler) {
    if (type === 'finish') {
      addEventHandler(this, type, handler);
    }
  },
  removeEventListener: function(type, handler) {
    if (type === 'finish') {
      removeEventHandler(this, type, handler);
    }
  },
  _generateEvents: function() {
    if (!this._finishedFlag && this.finished &&
        hasEventHandlersForEvent(this, 'finish')) {
      var event = new AnimationPlayerEvent('finish', {
        currentTime: this.currentTime,
        timelineTime: this.timeline.currentTime
      });
      event._initialize(this);
      callEventHandlers(this, 'finish', event);
    }
    this._finishedFlag = this.finished;

    // The following code is for deprecated TimedItem event handling and should
    // be removed once we stop supporting it.
    if (!isDefinedAndNotNull(this._lastCurrentTime)) {
      this._lastCurrentTime = 0;
    }

    this._lastCurrentTime = this._unlimitedCurrentTime;
  },
  _registerOnTimeline: function() {
    if (!this._registeredOnTimeline) {
      PLAYERS.push(this);
      this._registeredOnTimeline = true;
    }
  },
  _deregisterFromTimeline: function() {
    PLAYERS.splice(PLAYERS.indexOf(this), 1);
    this._registeredOnTimeline = false;
  }
};



/** @constructor */
var AnimationPlayerEvent = function(type, eventInit) {
  this._type = type;
  this.currentTime = eventInit.currentTime;
  this.timelineTime = eventInit.timelineTime;
};

AnimationPlayerEvent.prototype = createEventPrototype();



/** @constructor */
var TimedItem = function(token, timingInput) {
  if (token !== constructorToken) {
    throw new TypeError('Illegal constructor');
  }
  this.timing = new Timing(
      constructorToken, timingInput,
      this._specifiedTimingModified.bind(this));
  this._inheritedTime = null;
  this.currentIteration = null;
  this._iterationTime = null;
  this._animationTime = null;
  this._startTime = 0.0;
  this._player = null;
  this._parent = null;
  this._updateInternalState();
  this._fill = this._resolveFillMode(this.timing.fill);
  initializeEventTarget(this);
};

TimedItem.prototype = {
  // TODO: It would be good to avoid the need for this. We would need to modify
  // call sites to instead rely on a call from the parent.
  get _effectiveParentTime() {
    return this.parent !== null && this.parent._iterationTime !== null ?
        this.parent._iterationTime : 0;
  },
  get localTime() {
    return this._inheritedTime === null ?
        null : this._inheritedTime - this._startTime;
  },
  get startTime() {
    return this._startTime;
  },
  get duration() {
    var result = this.timing._duration();
    if (result === 'auto') {
      result = this._intrinsicDuration();
    }
    return result;
  },
  get activeDuration() {
    var repeatedDuration = this.duration * this.timing._iterations();
    return repeatedDuration / Math.abs(this.timing.playbackRate);
  },
  get endTime() {
    return this._startTime + this.activeDuration + this.timing.delay +
        this.timing.endDelay;
  },
  get parent() {
    return this._parent;
  },
  get previousSibling() {
    if (!this.parent) {
      return null;
    }
    var siblingIndex = this.parent.indexOf(this) - 1;
    if (siblingIndex < 0) {
      return null;
    }
    return this.parent.children[siblingIndex];
  },
  get nextSibling() {
    if (!this.parent) {
      return null;
    }
    var siblingIndex = this.parent.indexOf(this) + 1;
    if (siblingIndex >= this.parent.children.length) {
      return null;
    }
    return this.parent.children[siblingIndex];
  },
  _attach: function(player) {
    // Remove ourselves from our parent, if we have one. This also removes any
    // exsisting player.
    this._reparent(null);
    this._player = player;
  },
  // Takes care of updating the outgoing parent. This is called with a non-null
  // parent only from TimingGroup.splice(), which takes care of calling
  // TimingGroup._childrenStateModified() for the new parent.
  _reparent: function(parent) {
    if (parent === this) {
      throw new Error('parent can not be set to self!');
    }
    enterModifyCurrentAnimationState();
    try {
      if (this._player !== null) {
        this._player.source = null;
        this._player = null;
      }
      if (this.parent !== null) {
        this.remove();
      }
      this._parent = parent;
      // In the case of a AnimationSequence parent, _startTime will be updated
      // by TimingGroup.splice().
      if (this.parent === null || this.parent.type !== 'seq') {
        this._startTime =
            this._stashedStartTime === undefined ? 0.0 : this._stashedStartTime;
        this._stashedStartTime = undefined;
      }
      // In the case of the parent being non-null, _childrenStateModified() will
      // call this via _updateChildInheritedTimes().
      // TODO: Consider optimising this case by skipping this call.
      this._updateTimeMarkers();
    } finally {
      exitModifyCurrentAnimationState(
          Boolean(this.player) ? repeatLastTick : null);
    }
  },
  _intrinsicDuration: function() {
    return 0.0;
  },
  _resolveFillMode: abstractMethod,
  _updateInternalState: function() {
    this._fill = this._resolveFillMode(this.timing.fill);
    if (this.parent) {
      this.parent._childrenStateModified();
    } else if (this._player) {
      this._player._registerOnTimeline();
    }
    this._updateTimeMarkers();
  },
  _specifiedTimingModified: function() {
    enterModifyCurrentAnimationState();
    try {
      this._updateInternalState();
    } finally {
      exitModifyCurrentAnimationState(
          Boolean(this.player) ? repeatLastTick : null);
    }
  },
  // We push time down to children. We could instead have children pull from
  // above, but this is tricky because a TimedItem may use either a parent
  // TimedItem or an AnimationPlayer. This requires either logic in
  // TimedItem, or for TimedItem and AnimationPlayer to implement Timeline
  // (or an equivalent), both of which are ugly.
  _updateInheritedTime: function(inheritedTime) {
    this._inheritedTime = inheritedTime;
    this._updateTimeMarkers();
  },
  _updateAnimationTime: function() {
    if (this.localTime < this.timing.delay) {
      if (this._fill === 'backwards' ||
          this._fill === 'both') {
        this._animationTime = 0;
      } else {
        this._animationTime = null;
      }
    } else if (this.localTime <
        this.timing.delay + this.activeDuration) {
      this._animationTime = this.localTime - this.timing.delay;
    } else {
      if (this._fill === 'forwards' ||
          this._fill === 'both') {
        this._animationTime = this.activeDuration;
      } else {
        this._animationTime = null;
      }
    }
  },
  _updateIterationParamsZeroDuration: function() {
    this._iterationTime = 0;
    var isAtEndOfIterations = this.timing._iterations() !== 0 &&
        this.localTime >= this.timing.delay;
    this.currentIteration = (
        isAtEndOfIterations ?
        this._floorWithOpenClosedRange(
            this.timing.iterationStart + this.timing._iterations(),
            1.0) :
        this._floorWithClosedOpenRange(this.timing.iterationStart, 1.0));
    // Equivalent to unscaledIterationTime below.
    var unscaledFraction = (
        isAtEndOfIterations ?
        this._modulusWithOpenClosedRange(
            this.timing.iterationStart + this.timing._iterations(),
            1.0) :
        this._modulusWithClosedOpenRange(this.timing.iterationStart, 1.0));
    var timingFunction = this.timing._timingFunction(this);
    this._timeFraction = (
        this._isCurrentDirectionForwards() ?
        unscaledFraction :
        1.0 - unscaledFraction);
    ASSERT_ENABLED && assert(
        this._timeFraction >= 0.0 && this._timeFraction <= 1.0,
        'Time fraction should be in the range [0, 1]');
    if (timingFunction) {
      this._timeFraction = timingFunction.scaleTime(this._timeFraction);
    }
  },
  _getAdjustedAnimationTime: function(animationTime) {
    var startOffset =
        multiplyZeroGivesZero(this.timing.iterationStart, this.duration);
    return (this.timing.playbackRate < 0 ?
        (animationTime - this.activeDuration) : animationTime) *
        this.timing.playbackRate + startOffset;
  },
  _scaleIterationTime: function(unscaledIterationTime) {
    return this._isCurrentDirectionForwards() ?
        unscaledIterationTime :
        this.duration - unscaledIterationTime;
  },
  _updateIterationParams: function() {
    var adjustedAnimationTime =
        this._getAdjustedAnimationTime(this._animationTime);
    var repeatedDuration = this.duration * this.timing._iterations();
    var startOffset = this.timing.iterationStart * this.duration;
    var isAtEndOfIterations = (this.timing._iterations() !== 0) &&
        (adjustedAnimationTime - startOffset === repeatedDuration);
    this.currentIteration = isAtEndOfIterations ?
        this._floorWithOpenClosedRange(
            adjustedAnimationTime, this.duration) :
        this._floorWithClosedOpenRange(
            adjustedAnimationTime, this.duration);
    var unscaledIterationTime = isAtEndOfIterations ?
        this._modulusWithOpenClosedRange(
            adjustedAnimationTime, this.duration) :
        this._modulusWithClosedOpenRange(
            adjustedAnimationTime, this.duration);
    this._iterationTime = this._scaleIterationTime(unscaledIterationTime);
    if (this.duration == Infinity) {
      this._timeFraction = 0;
      return;
    }
    this._timeFraction = this._iterationTime / this.duration;
    ASSERT_ENABLED && assert(
        this._timeFraction >= 0.0 && this._timeFraction <= 1.0,
        'Time fraction should be in the range [0, 1], got ' +
        this._timeFraction + ' ' + this._iterationTime + ' ' +
        this.duration + ' ' + isAtEndOfIterations + ' ' +
        unscaledIterationTime);
    var timingFunction = this.timing._timingFunction(this);
    if (timingFunction) {
      this._timeFraction = timingFunction.scaleTime(this._timeFraction);
    }
    this._iterationTime = this._timeFraction * this.duration;
  },
  _updateTimeMarkers: function() {
    if (this.localTime === null) {
      this._animationTime = null;
      this._iterationTime = null;
      this.currentIteration = null;
      this._timeFraction = null;
      return false;
    }
    this._updateAnimationTime();
    if (this._animationTime === null) {
      this._iterationTime = null;
      this.currentIteration = null;
      this._timeFraction = null;
    } else if (this.duration === 0) {
      this._updateIterationParamsZeroDuration();
    } else {
      this._updateIterationParams();
    }
    maybeRestartAnimation();
  },
  _floorWithClosedOpenRange: function(x, range) {
    return Math.floor(x / range);
  },
  _floorWithOpenClosedRange: function(x, range) {
    return Math.ceil(x / range) - 1;
  },
  _modulusWithClosedOpenRange: function(x, range) {
    ASSERT_ENABLED && assert(
        range > 0, 'Range must be strictly positive');
    var modulus = x % range;
    var result = modulus < 0 ? modulus + range : modulus;
    ASSERT_ENABLED && assert(
        result >= 0.0 && result < range,
        'Result should be in the range [0, range)');
    return result;
  },
  _modulusWithOpenClosedRange: function(x, range) {
    var modulus = this._modulusWithClosedOpenRange(x, range);
    var result = modulus === 0 ? range : modulus;
    ASSERT_ENABLED && assert(
        result > 0.0 && result <= range,
        'Result should be in the range (0, range]');
    return result;
  },
  _isCurrentDirectionForwards: function() {
    if (this.timing.direction === 'normal') {
      return true;
    }
    if (this.timing.direction === 'reverse') {
      return false;
    }
    var d = this.currentIteration;
    if (this.timing.direction === 'alternate-reverse') {
      d += 1;
    }
    // TODO: 6.13.3 step 3. wtf?
    return d % 2 === 0;
  },
  clone: abstractMethod,
  before: function() {
    var newItems = [];
    for (var i = 0; i < arguments.length; i++) {
      newItems.push(arguments[i]);
    }
    this.parent._splice(this.parent.indexOf(this), 0, newItems);
  },
  after: function() {
    var newItems = [];
    for (var i = 0; i < arguments.length; i++) {
      newItems.push(arguments[i]);
    }
    this.parent._splice(this.parent.indexOf(this) + 1, 0, newItems);
  },
  replace: function() {
    var newItems = [];
    for (var i = 0; i < arguments.length; i++) {
      newItems.push(arguments[i]);
    }
    this.parent._splice(this.parent.indexOf(this), 1, newItems);
  },
  remove: function() {
    this.parent._splice(this.parent.indexOf(this), 1);
  },
  // Gets the leaf TimedItems currently in effect. Note that this is a superset
  // of the leaf TimedItems in their active interval, as a TimedItem can have an
  // effect outside its active interval due to fill.
  _getLeafItemsInEffect: function(items) {
    if (this._timeFraction !== null) {
      this._getLeafItemsInEffectImpl(items);
    }
  },
  _getLeafItemsInEffectImpl: abstractMethod,
  _hasFutureAnimation: function(timeDirectionForwards) {
    return timeDirectionForwards ? this._inheritedTime < this.endTime :
        this._inheritedTime > this.startTime;
  },
  _isPastEndOfActiveInterval: function() {
    return this._inheritedTime >= this.endTime;
  },
  get player() {
    return this.parent === null ?
        this._player : this.parent.player;
  },
  _isCurrent: function() {
    return !this._isPastEndOfActiveInterval() ||
           (this.parent !== null && this.parent._isCurrent());
  },
  _isTargetingElement: abstractMethod,
  _getAnimationsTargetingElement: abstractMethod,
  _netEffectivePlaybackRate: function() {
    var effectivePlaybackRate = this._isCurrentDirectionForwards() ?
        this.timing.playbackRate : -this.timing.playbackRate;
    return this.parent === null ? effectivePlaybackRate :
        effectivePlaybackRate * this.parent._netEffectivePlaybackRate();
  },
  // Note that this restriction is currently incomplete - for example,
  // Animations which are playing forwards and have a fill of backwards
  // are not in effect unless current.
  // TODO: Complete this restriction.
  _hasFutureEffect: function() {
    return this._isCurrent() || this._fill !== 'none';
  },
  _toSubRanges: function(fromTime, toTime, iterationTimes) {
    if (fromTime > toTime) {
      var revRanges = this._toSubRanges(toTime, fromTime, iterationTimes);
      revRanges.ranges.forEach(function(a) { a.reverse(); });
      revRanges.ranges.reverse();
      revRanges.start = iterationTimes.length - revRanges.start - 1;
      revRanges.delta = -1;
      return revRanges;
    }
    var skipped = 0;
    // TODO: this should be calculatable. This would be more efficient
    // than searching through the list.
    while (iterationTimes[skipped] < fromTime) {
      skipped++;
    }
    var currentStart = fromTime;
    var ranges = [];
    for (var i = skipped; i < iterationTimes.length; i++) {
      if (iterationTimes[i] < toTime) {
        ranges.push([currentStart, iterationTimes[i]]);
        currentStart = iterationTimes[i];
      } else {
        ranges.push([currentStart, toTime]);
        return {start: skipped, delta: 1, ranges: ranges};
      }
    }
    ranges.push([currentStart, toTime]);
    return {start: skipped, delta: 1, ranges: ranges};
  }
};

var TimingEvent = function(
    token, target, type, localTime, timelineTime, iterationIndex, seeked) {
  if (token !== constructorToken) {
    throw new TypeError('Illegal constructor');
  }
  this._initialize(target);
  this._type = type;
  this.localTime = localTime;
  this.timelineTime = timelineTime;
  this.iterationIndex = iterationIndex;
  this.seeked = seeked ? true : false;
};

TimingEvent.prototype = createEventPrototype();

var isEffectCallback = function(animationEffect) {
  return typeof animationEffect === 'function';
};

var interpretAnimationEffect = function(animationEffect) {
  if (animationEffect instanceof AnimationEffect ||
      isEffectCallback(animationEffect)) {
    return animationEffect;
  } else if (isDefinedAndNotNull(animationEffect) &&
      typeof animationEffect === 'object') {
    // The spec requires animationEffect to be an instance of
    // OneOrMoreKeyframes, but this type is just a dictionary or a list of
    // dictionaries, so the best we can do is test for an object.
    return new KeyframeEffect(animationEffect);
  }
  return null;
};

var cloneAnimationEffect = function(animationEffect) {
  if (animationEffect instanceof AnimationEffect) {
    return animationEffect.clone();
  } else if (isEffectCallback(animationEffect)) {
    return animationEffect;
  } else {
    return null;
  }
};



/** @constructor */
var Animation = function(target, animationEffect, timingInput) {
  enterModifyCurrentAnimationState();
  try {
    TimedItem.call(this, constructorToken, timingInput);
    this.effect = interpretAnimationEffect(animationEffect);
    this._target = target;
  } finally {
    exitModifyCurrentAnimationState(null);
  }
};

Animation.prototype = createObject(TimedItem.prototype, {
  _resolveFillMode: function(fillMode) {
    return fillMode === 'auto' ? 'none' : fillMode;
  },
  _sample: function() {
    if (isDefinedAndNotNull(this.effect) &&
        !(this.target instanceof PseudoElementReference)) {
      if (isEffectCallback(this.effect)) {
        this.effect(this._timeFraction, this.target, this);
      } else {
        this.effect._sample(this._timeFraction, this.currentIteration,
            this.target, this.underlyingValue);
      }
    }
  },
  _getLeafItemsInEffectImpl: function(items) {
    items.push(this);
  },
  _isTargetingElement: function(element) {
    return element === this.target;
  },
  _getAnimationsTargetingElement: function(element, animations) {
    if (this._isTargetingElement(element)) {
      animations.push(this);
    }
  },
  get target() {
    return this._target;
  },
  set effect(effect) {
    enterModifyCurrentAnimationState();
    try {
      this._effect = effect;
      this.timing._invalidateTimingFunction();
    } finally {
      exitModifyCurrentAnimationState(
          Boolean(this.player) ? repeatLastTick : null);
    }
  },
  get effect() {
    return this._effect;
  },
  clone: function() {
    return new Animation(this.target,
        cloneAnimationEffect(this.effect), this.timing._dict);
  },
  toString: function() {
    var effectString = '<none>';
    if (this.effect instanceof AnimationEffect) {
      effectString = this.effect.toString();
    } else if (isEffectCallback(this.effect)) {
      effectString = 'Effect callback';
    }
    return 'Animation ' + this.startTime + '-' + this.endTime + ' (' +
        this.localTime + ') ' + effectString;
  }
});

function throwNewHierarchyRequestError() {
  var element = document.createElement('span');
  element.appendChild(element);
}



/** @constructor */
var TimedItemList = function(token, children) {
  if (token !== constructorToken) {
    throw new TypeError('Illegal constructor');
  }
  this._children = children;
  this._getters = 0;
  this._ensureGetters();
};

TimedItemList.prototype = {
  get length() {
    return this._children.length;
  },
  _ensureGetters: function() {
    while (this._getters < this._children.length) {
      this._ensureGetter(this._getters++);
    }
  },
  _ensureGetter: function(i) {
    Object.defineProperty(this, i, {
      get: function() {
        return this._children[i];
      }
    });
  }
};



/** @constructor */
var TimingGroup = function(token, type, children, timing) {
  if (token !== constructorToken) {
    throw new TypeError('Illegal constructor');
  }
  // Take a copy of the children array, as it could be modified as a side-effect
  // of creating this object. See
  // https://github.com/web-animations/web-animations-js/issues/65 for details.
  var childrenCopy = (children && Array.isArray(children)) ?
      children.slice() : [];
  // used by TimedItem via _intrinsicDuration(), so needs to be set before
  // initializing super.
  this.type = type || 'par';
  this._children = [];
  this._cachedTimedItemList = null;
  this._cachedIntrinsicDuration = null;
  TimedItem.call(this, constructorToken, timing);
  // We add children after setting the parent. This means that if an ancestor
  // (including the parent) is specified as a child, it will be removed from our
  // ancestors and used as a child,
  this.append.apply(this, childrenCopy);
};

TimingGroup.prototype = createObject(TimedItem.prototype, {
  _resolveFillMode: function(fillMode) {
    return fillMode === 'auto' ? 'both' : fillMode;
  },
  _childrenStateModified: function() {
    // See _updateChildStartTimes().
    this._isInChildrenStateModified = true;
    if (this._cachedTimedItemList) {
      this._cachedTimedItemList._ensureGetters();
    }
    this._cachedIntrinsicDuration = null;

    // We need to walk up and down the tree to re-layout. endTime and the
    // various durations (which are all calculated lazily) are the only
    // properties of a TimedItem which can affect the layout of its ancestors.
    // So it should be sufficient to simply update start times and time markers
    // on the way down.

    // This calls up to our parent, then calls _updateTimeMarkers().
    this._updateInternalState();
    this._updateChildInheritedTimes();

    // Update child start times before walking down.
    this._updateChildStartTimes();

    this._isInChildrenStateModified = false;
  },
  _updateInheritedTime: function(inheritedTime) {
    this._inheritedTime = inheritedTime;
    this._updateTimeMarkers();
    this._updateChildInheritedTimes();
  },
  _updateChildInheritedTimes: function() {
    for (var i = 0; i < this._children.length; i++) {
      var child = this._children[i];
      child._updateInheritedTime(this._iterationTime);
    }
  },
  _updateChildStartTimes: function() {
    if (this.type === 'seq') {
      var cumulativeStartTime = 0;
      for (var i = 0; i < this._children.length; i++) {
        var child = this._children[i];
        if (child._stashedStartTime === undefined) {
          child._stashedStartTime = child._startTime;
        }
        child._startTime = cumulativeStartTime;
        // Avoid updating the child's inherited time and time markers if this is
        // about to be done in the down phase of _childrenStateModified().
        if (!child._isInChildrenStateModified) {
          // This calls _updateTimeMarkers() on the child.
          child._updateInheritedTime(this._iterationTime);
        }
        cumulativeStartTime += Math.max(0, child.timing.delay +
            child.activeDuration + child.timing.endDelay);
      }
    }
  },
  get children() {
    if (!this._cachedTimedItemList) {
      this._cachedTimedItemList = new TimedItemList(
          constructorToken, this._children);
    }
    return this._cachedTimedItemList;
  },
  get firstChild() {
    return this._children[0];
  },
  get lastChild() {
    return this._children[this.children.length - 1];
  },
  _intrinsicDuration: function() {
    if (!isDefinedAndNotNull(this._cachedIntrinsicDuration)) {
      if (this.type === 'par') {
        var dur = Math.max.apply(undefined, this._children.map(function(a) {
          return a.endTime;
        }));
        this._cachedIntrinsicDuration = Math.max(0, dur);
      } else if (this.type === 'seq') {
        var result = 0;
        this._children.forEach(function(a) {
          result += a.activeDuration + a.timing.delay + a.timing.endDelay;
        });
        this._cachedIntrinsicDuration = result;
      } else {
        throw 'Unsupported type ' + this.type;
      }
    }
    return this._cachedIntrinsicDuration;
  },
  _getLeafItemsInEffectImpl: function(items) {
    for (var i = 0; i < this._children.length; i++) {
      this._children[i]._getLeafItemsInEffect(items);
    }
  },
  clone: function() {
    var children = [];
    this._children.forEach(function(child) {
      children.push(child.clone());
    });
    return this.type === 'par' ?
        new AnimationGroup(children, this.timing._dict) :
        new AnimationSequence(children, this.timing._dict);
  },
  clear: function() {
    this._splice(0, this._children.length);
  },
  append: function() {
    var newItems = [];
    for (var i = 0; i < arguments.length; i++) {
      newItems.push(arguments[i]);
    }
    this._splice(this._children.length, 0, newItems);
  },
  prepend: function() {
    var newItems = [];
    for (var i = 0; i < arguments.length; i++) {
      newItems.push(arguments[i]);
    }
    this._splice(0, 0, newItems);
  },
  _addInternal: function(child) {
    this._children.push(child);
    this._childrenStateModified();
  },
  indexOf: function(item) {
    return this._children.indexOf(item);
  },
  _splice: function(start, deleteCount, newItems) {
    enterModifyCurrentAnimationState();
    try {
      var args = arguments;
      if (args.length === 3) {
        args = [start, deleteCount].concat(newItems);
      }
      for (var i = 2; i < args.length; i++) {
        var newChild = args[i];
        if (this._isInclusiveAncestor(newChild)) {
          throwNewHierarchyRequestError();
        }
        newChild._reparent(this);
      }
      var result = Array.prototype.splice.apply(this._children, args);
      for (var i = 0; i < result.length; i++) {
        result[i]._parent = null;
      }
      this._childrenStateModified();
      return result;
    } finally {
      exitModifyCurrentAnimationState(
          Boolean(this.player) ? repeatLastTick : null);
    }
  },
  _isInclusiveAncestor: function(item) {
    for (var ancestor = this; ancestor !== null; ancestor = ancestor.parent) {
      if (ancestor === item) {
        return true;
      }
    }
    return false;
  },
  _isTargetingElement: function(element) {
    return this._children.some(function(child) {
      return child._isTargetingElement(element);
    });
  },
  _getAnimationsTargetingElement: function(element, animations) {
    this._children.map(function(child) {
      return child._getAnimationsTargetingElement(element, animations);
    });
  },
  toString: function() {
    return this.type + ' ' + this.startTime + '-' + this.endTime + ' (' +
        this.localTime + ') ' + ' [' +
        this._children.map(function(a) { return a.toString(); }) + ']';
  }
});



/** @constructor */
var AnimationGroup = function(children, timing, parent) {
  TimingGroup.call(this, constructorToken, 'par', children, timing, parent);
};

AnimationGroup.prototype = Object.create(TimingGroup.prototype);



/** @constructor */
var AnimationSequence = function(children, timing, parent) {
  TimingGroup.call(this, constructorToken, 'seq', children, timing, parent);
};

AnimationSequence.prototype = Object.create(TimingGroup.prototype);



/** @constructor */
var PseudoElementReference = function(element, pseudoElement) {
  this.element = element;
  this.pseudoElement = pseudoElement;
  console.warn('PseudoElementReference is not supported.');
};



/** @constructor */
var MediaReference = function(mediaElement, timing, parent, delta) {
  TimedItem.call(this, constructorToken, timing, parent);
  this._media = mediaElement;

  // We can never be sure when _updateInheritedTime() is going to be called
  // next, due to skipped frames or the player being seeked. Plus the media
  // element's currentTime may drift from our iterationTime. So if a media
  // element has loop set, we can't be sure that we'll stop it before it wraps.
  // For this reason, we simply disable looping.
  // TODO: Maybe we should let it loop if our duration exceeds it's
  // length?
  this._media.loop = false;

  // If the media element has a media controller, we detach it. This mirrors the
  // behaviour when re-parenting a TimedItem, or attaching one to an
  // AnimationPlayer.
  // TODO: It would be neater to assign to MediaElement.controller, but this was
  // broken in Chrome until recently. See crbug.com/226270.
  this._media.mediaGroup = '';

  this._delta = delta;
};

MediaReference.prototype = createObject(TimedItem.prototype, {
  _resolveFillMode: function(fillMode) {
    // TODO: Fill modes for MediaReferences are still undecided. The spec is not
    // clear what 'auto' should mean for TimedItems other than Animations and
    // groups.
    return fillMode === 'auto' ? 'none' : fillMode;
  },
  _intrinsicDuration: function() {
    // TODO: This should probably default to zero. But doing so means that as
    // soon as our inheritedTime is zero, the polyfill deems the animation to be
    // done and stops ticking, so we don't get any further calls to
    // _updateInheritedTime(). One way around this would be to modify
    // TimedItem._isPastEndOfActiveInterval() to recurse down the tree, then we
    // could override it here.
    return isNaN(this._media.duration) ?
        Infinity : this._media.duration / this._media.defaultPlaybackRate;
  },
  _unscaledMediaCurrentTime: function() {
    return this._media.currentTime / this._media.defaultPlaybackRate;
  },
  _getLeafItemsInEffectImpl: function(items) {
    items.push(this);
  },
  _ensurePlaying: function() {
    // The media element is paused when created.
    if (this._media.paused) {
      this._media.play();
    }
  },
  _ensurePaused: function() {
    if (!this._media.paused) {
      this._media.pause();
    }
  },
  _isSeekableUnscaledTime: function(time) {
    var seekTime = time * this._media.defaultPlaybackRate;
    var ranges = this._media.seekable;
    for (var i = 0; i < ranges.length; i++) {
      if (seekTime >= ranges.start(i) && seekTime <= ranges.end(i)) {
        return true;
      }
    }
    return false;
  },
  // Note that a media element's timeline may not start at zero, although its
  // duration is always the timeline time at the end point. This means that an
  // element's duration isn't always it's length and not all values of the
  // timline are seekable. Furthermore, some types of media further limit the
  // range of seekable timeline times. For this reason, we always map an
  // iteration to the range [0, duration] and simply seek to the nearest
  // seekable time.
  _ensureIsAtUnscaledTime: function(time) {
    if (this._unscaledMediaCurrentTime() !== time) {
      this._media.currentTime = time * this._media.defaultPlaybackRate;
    }
  },
  // This is called by the polyfill on each tick when our AnimationPlayer's tree
  // is active.
  _updateInheritedTime: function(inheritedTime) {
    this._inheritedTime = inheritedTime;
    this._updateTimeMarkers();

    // The polyfill uses a sampling model whereby time values are propagated
    // down the tree at each sample. However, for the media item, we need to use
    // play() and pause().

    // Handle the case of being outside our effect interval.
    if (this._iterationTime === null) {
      this._ensureIsAtUnscaledTime(0);
      this._ensurePaused();
      return;
    }

    if (this._iterationTime >= this._intrinsicDuration()) {
      // Our iteration time exceeds the media element's duration, so just make
      // sure the media element is at the end. It will stop automatically, but
      // that could take some time if the seek below is significant, so force
      // it.
      this._ensureIsAtUnscaledTime(this._intrinsicDuration());
      this._ensurePaused();
      return;
    }

    var finalIteration = this._floorWithOpenClosedRange(
        this.timing.iterationStart + this.timing._iterations(), 1.0);
    var endTimeFraction = this._modulusWithOpenClosedRange(
        this.timing.iterationStart + this.timing._iterations(), 1.0);
    if (this.currentIteration === finalIteration &&
        this._timeFraction === endTimeFraction &&
        this._intrinsicDuration() >= this.duration) {
      // We have reached the end of our final iteration, but the media element
      // is not done.
      this._ensureIsAtUnscaledTime(this.duration * endTimeFraction);
      this._ensurePaused();
      return;
    }

    // Set the appropriate playback rate.
    var playbackRate =
        this._media.defaultPlaybackRate * this._netEffectivePlaybackRate();
    if (this._media.playbackRate !== playbackRate) {
      this._media.playbackRate = playbackRate;
    }

    // Set the appropriate play/pause state. Note that we may not be able to
    // seek to the desired time. In this case, the media element's seek
    // algorithm repositions the seek to the nearest seekable time. This is OK,
    // but in this case, we don't want to play the media element, as it prevents
    // us from synchronising properly.
    if (this.player.paused ||
        !this._isSeekableUnscaledTime(this._iterationTime)) {
      this._ensurePaused();
    } else {
      this._ensurePlaying();
    }

    // Seek if required. This could be due to our AnimationPlayer being seeked,
    // or video slippage. We need to handle the fact that the video may not play
    // at exactly the right speed. There's also a variable delay when the video
    // is first played.
    // TODO: What's the right value for this delta?
    var delta = isDefinedAndNotNull(this._delta) ? this._delta :
        0.2 * Math.abs(this._media.playbackRate);
    if (Math.abs(this._iterationTime - this._unscaledMediaCurrentTime()) >
        delta) {
      this._ensureIsAtUnscaledTime(this._iterationTime);
    }
  },
  _isTargetingElement: function(element) {
    return this._media === element;
  },
  _getAnimationsTargetingElement: function() { },
  _attach: function(player) {
    this._ensurePaused();
    TimedItem.prototype._attach.call(this, player);
  }
});



/** @constructor */
var AnimationEffect = function(token) {
  if (token !== constructorToken) {
    throw new TypeError('Illegal constructor');
  }
};

AnimationEffect.prototype = {
  _sample: abstractMethod,
  clone: abstractMethod,
  toString: abstractMethod
};

var clamp = function(x, min, max) {
  return Math.max(Math.min(x, max), min);
};



/** @constructor */
var MotionPathEffect = function(path, autoRotate, angle, composite) {
  var iterationComposite = undefined;
  var options = autoRotate;
  if (typeof options == 'string' || options instanceof String ||
      angle || composite) {
    // FIXME: add deprecation warning - please pass an options dictionary to
    // MotionPathEffect constructor
  } else if (options) {
    autoRotate = options.autoRotate;
    angle = options.angle;
    composite = options.composite;
    iterationComposite = options.iterationComposite;
  }

  enterModifyCurrentAnimationState();
  try {
    AnimationEffect.call(this, constructorToken);

    this.composite = composite;
    this.iterationComposite = iterationComposite;

    // TODO: path argument is not in the spec -- seems useful since
    // SVGPathSegList doesn't have a constructor.
    this.autoRotate = isDefined(autoRotate) ? autoRotate : 'none';
    this.angle = isDefined(angle) ? angle : 0;
    this._path = document.createElementNS(SVG_NS, 'path');
    if (path instanceof SVGPathSegList) {
      this.segments = path;
    } else {
      var tempPath = document.createElementNS(SVG_NS, 'path');
      tempPath.setAttribute('d', String(path));
      this.segments = tempPath.pathSegList;
    }
  } finally {
    exitModifyCurrentAnimationState(null);
  }
};

MotionPathEffect.prototype = createObject(AnimationEffect.prototype, {
  get composite() {
    return this._composite;
  },
  set composite(value) {
    enterModifyCurrentAnimationState();
    try {
      // Use the default value if an invalid string is specified.
      this._composite = value === 'add' ? 'add' : 'replace';
    } finally {
      exitModifyCurrentAnimationState(repeatLastTick);
    }
  },
  get iterationComposite() {
    return this._iterationComposite;
  },
  set iterationComposite(value) {
    enterModifyCurrentAnimationState();
    try {
      // Use the default value if an invalid string is specified.
      this._iterationComposite =
          value === 'accumulate' ? 'accumulate' : 'replace';
      this._updateOffsetPerIteration();
    } finally {
      exitModifyCurrentAnimationState(repeatLastTick);
    }
  },
  _sample: function(timeFraction, currentIteration, target) {
    // TODO: Handle accumulation.
    var lengthAtTimeFraction = this._lengthAtTimeFraction(timeFraction);
    var point = this._path.getPointAtLength(lengthAtTimeFraction);
    var x = point.x - target.offsetWidth / 2;
    var y = point.y - target.offsetHeight / 2;
    if (currentIteration !== 0 && this._offsetPerIteration) {
      x += this._offsetPerIteration.x * currentIteration;
      y += this._offsetPerIteration.y * currentIteration;
    }
    // TODO: calc(point.x - 50%) doesn't work?
    var value = [{t: 'translate', d: [{px: x}, {px: y}]}];
    var angle = this.angle;
    if (this._autoRotate === 'auto-rotate') {
      // Super hacks
      var lastPoint = this._path.getPointAtLength(lengthAtTimeFraction - 0.01);
      var dx = point.x - lastPoint.x;
      var dy = point.y - lastPoint.y;
      var rotation = Math.atan2(dy, dx);
      angle += rotation / 2 / Math.PI * 360;
    }
    value.push({t: 'rotate', d: [angle]});
    compositor.setAnimatedValue(target, 'transform',
        new AddReplaceCompositableValue(value, this.composite));
  },
  _lengthAtTimeFraction: function(timeFraction) {
    var segmentCount = this._cumulativeLengths.length - 1;
    if (!segmentCount) {
      return 0;
    }
    var scaledFraction = timeFraction * segmentCount;
    var index = clamp(Math.floor(scaledFraction), 0, segmentCount);
    return this._cumulativeLengths[index] + ((scaledFraction % 1) * (
        this._cumulativeLengths[index + 1] - this._cumulativeLengths[index]));
  },
  _updateOffsetPerIteration: function() {
    if (this.iterationComposite === 'accumulate' &&
        this._cumulativeLengths &&
        this._cumulativeLengths.length > 0) {
      this._offsetPerIteration = this._path.getPointAtLength(
          this._cumulativeLengths[this._cumulativeLengths.length - 1]);
    } else {
      this._offsetPerIteration = null;
    }
  },
  clone: function() {
    return new MotionPathEffect(this._path.getAttribute('d'));
  },
  toString: function() {
    return '<MotionPathEffect>';
  },
  set autoRotate(autoRotate) {
    enterModifyCurrentAnimationState();
    try {
      this._autoRotate = String(autoRotate);
    } finally {
      exitModifyCurrentAnimationState(repeatLastTick);
    }
  },
  get autoRotate() {
    return this._autoRotate;
  },
  set angle(angle) {
    enterModifyCurrentAnimationState();
    try {
      // TODO: This should probably be a string with a unit, but the spec
      //       says it's a double.
      this._angle = Number(angle);
    } finally {
      exitModifyCurrentAnimationState(repeatLastTick);
    }
  },
  get angle() {
    return this._angle;
  },
  set segments(segments) {
    enterModifyCurrentAnimationState();
    try {
      var targetSegments = this.segments;
      targetSegments.clear();
      var cumulativeLengths = [0];
      // TODO: *moving* the path segments is not correct, but pathSegList
      //       is read only
      var items = segments.numberOfItems;
      while (targetSegments.numberOfItems < items) {
        var segment = segments.removeItem(0);
        targetSegments.appendItem(segment);
        if (segment.pathSegType !== SVGPathSeg.PATHSEG_MOVETO_REL &&
            segment.pathSegType !== SVGPathSeg.PATHSEG_MOVETO_ABS) {
          cumulativeLengths.push(this._path.getTotalLength());
        }
      }
      this._cumulativeLengths = cumulativeLengths;
      this._updateOffsetPerIteration();
    } finally {
      exitModifyCurrentAnimationState(repeatLastTick);
    }
  },
  get segments() {
    return this._path.pathSegList;
  }
});

var shorthandToLonghand = {
  background: [
    'backgroundImage',
    'backgroundPosition',
    'backgroundSize',
    'backgroundRepeat',
    'backgroundAttachment',
    'backgroundOrigin',
    'backgroundClip',
    'backgroundColor'
  ],
  border: [
    'borderTopColor',
    'borderTopStyle',
    'borderTopWidth',
    'borderRightColor',
    'borderRightStyle',
    'borderRightWidth',
    'borderBottomColor',
    'borderBottomStyle',
    'borderBottomWidth',
    'borderLeftColor',
    'borderLeftStyle',
    'borderLeftWidth'
  ],
  borderBottom: [
    'borderBottomWidth',
    'borderBottomStyle',
    'borderBottomColor'
  ],
  borderColor: [
    'borderTopColor',
    'borderRightColor',
    'borderBottomColor',
    'borderLeftColor'
  ],
  borderLeft: [
    'borderLeftWidth',
    'borderLeftStyle',
    'borderLeftColor'
  ],
  borderRadius: [
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderBottomRightRadius',
    'borderBottomLeftRadius'
  ],
  borderRight: [
    'borderRightWidth',
    'borderRightStyle',
    'borderRightColor'
  ],
  borderTop: [
    'borderTopWidth',
    'borderTopStyle',
    'borderTopColor'
  ],
  borderWidth: [
    'borderTopWidth',
    'borderRightWidth',
    'borderBottomWidth',
    'borderLeftWidth'
  ],
  font: [
    'fontFamily',
    'fontSize',
    'fontStyle',
    'fontVariant',
    'fontWeight',
    'lineHeight'
  ],
  margin: [
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft'
  ],
  outline: [
    'outlineColor',
    'outlineStyle',
    'outlineWidth'
  ],
  padding: [
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft'
  ]
};

// This delegates parsing shorthand value syntax to the browser.
var shorthandExpanderElem = createDummyElement();
var expandShorthand = function(property, value, result) {
  shorthandExpanderElem.style[property] = value;
  var longProperties = shorthandToLonghand[property];
  for (var i in longProperties) {
    var longProperty = longProperties[i];
    var longhandValue = shorthandExpanderElem.style[longProperty];
    result[longProperty] = longhandValue;
  }
};

var normalizeKeyframeDictionary = function(properties) {
  var result = {
    offset: null,
    composite: null,
    easing: presetTimingFunctions.linear
  };
  var animationProperties = [];
  for (var property in properties) {
    // TODO: Apply the CSS property to IDL attribute algorithm.
    if (property === 'offset') {
      if (typeof properties.offset === 'number') {
        result.offset = properties.offset;
      }
    } else if (property === 'composite') {
      if (properties.composite === 'add' ||
          properties.composite === 'replace') {
        result.composite = properties.composite;
      }
    } else if (property === 'easing') {
      result.easing = TimingFunction.createFromString(properties.easing);
    } else {
      // TODO: Check whether this is a supported property.
      animationProperties.push(property);
    }
  }
  // TODO: Remove prefixed properties if the unprefixed version is also
  // supported and present.
  animationProperties = animationProperties.sort(playerSortFunction);
  for (var i = 0; i < animationProperties.length; i++) {
    // TODO: Apply the IDL attribute to CSS property algorithm.
    var property = animationProperties[i];
    // TODO: The spec does not specify how to handle null values.
    // See https://www.w3.org/Bugs/Public/show_bug.cgi?id=22572
    var value = isDefinedAndNotNull(properties[property]) ?
        properties[property].toString() : '';
    if (property in shorthandToLonghand) {
      expandShorthand(property, value, result);
    } else {
      result[property] = value;
    }
  }
  return result;
};



/** @constructor */
var KeyframeEffect = function(oneOrMoreKeyframeDictionaries,
    composite) {
  enterModifyCurrentAnimationState();
  try {
    AnimationEffect.call(this, constructorToken);

    this.composite = composite;

    this.setFrames(oneOrMoreKeyframeDictionaries);
  } finally {
    exitModifyCurrentAnimationState(null);
  }
};

KeyframeEffect.prototype = createObject(AnimationEffect.prototype, {
  get composite() {
    return this._composite;
  },
  set composite(value) {
    enterModifyCurrentAnimationState();
    try {
      // Use the default value if an invalid string is specified.
      this._composite = value === 'add' ? 'add' : 'replace';
    } finally {
      exitModifyCurrentAnimationState(repeatLastTick);
    }
  },
  getFrames: function() {
    return this._keyframeDictionaries.slice(0);
  },
  setFrames: function(oneOrMoreKeyframeDictionaries) {
    enterModifyCurrentAnimationState();
    try {
      if (!Array.isArray(oneOrMoreKeyframeDictionaries)) {
        oneOrMoreKeyframeDictionaries = [oneOrMoreKeyframeDictionaries];
      }
      this._keyframeDictionaries =
          oneOrMoreKeyframeDictionaries.map(normalizeKeyframeDictionary);
      // Set lazily
      this._cachedPropertySpecificKeyframes = null;
    } finally {
      exitModifyCurrentAnimationState(repeatLastTick);
    }
  },
  _sample: function(timeFraction, currentIteration, target) {
    var frames = this._propertySpecificKeyframes();
    for (var property in frames) {
      compositor.setAnimatedValue(target, property,
          this._sampleForProperty(
              frames[property], timeFraction, currentIteration));
    }
  },
  _sampleForProperty: function(frames, timeFraction, currentIteration) {
    ASSERT_ENABLED && assert(
        frames.length >= 2,
        'Interpolation requires at least two keyframes');

    var startKeyframeIndex;
    var length = frames.length;
    // We extrapolate differently depending on whether or not there are multiple
    // keyframes at offsets of 0 and 1.
    if (timeFraction < 0.0) {
      if (frames[1].offset === 0.0) {
        return new AddReplaceCompositableValue(frames[0].rawValue(),
            this._compositeForKeyframe(frames[0]));
      } else {
        startKeyframeIndex = 0;
      }
    } else if (timeFraction >= 1.0) {
      if (frames[length - 2].offset === 1.0) {
        return new AddReplaceCompositableValue(frames[length - 1].rawValue(),
            this._compositeForKeyframe(frames[length - 1]));
      } else {
        startKeyframeIndex = length - 2;
      }
    } else {
      for (var i = length - 1; i >= 0; i--) {
        if (frames[i].offset <= timeFraction) {
          ASSERT_ENABLED && assert(frames[i].offset !== 1.0);
          startKeyframeIndex = i;
          break;
        }
      }
    }
    var startKeyframe = frames[startKeyframeIndex];
    var endKeyframe = frames[startKeyframeIndex + 1];
    if (startKeyframe.offset === timeFraction) {
      return new AddReplaceCompositableValue(startKeyframe.rawValue(),
          this._compositeForKeyframe(startKeyframe));
    }
    if (endKeyframe.offset === timeFraction) {
      return new AddReplaceCompositableValue(endKeyframe.rawValue(),
          this._compositeForKeyframe(endKeyframe));
    }
    var intervalDistance = (timeFraction - startKeyframe.offset) /
        (endKeyframe.offset - startKeyframe.offset);
    if (startKeyframe.easing) {
      intervalDistance = startKeyframe.easing.scaleTime(intervalDistance);
    }
    return new BlendedCompositableValue(
        new AddReplaceCompositableValue(startKeyframe.rawValue(),
            this._compositeForKeyframe(startKeyframe)),
        new AddReplaceCompositableValue(endKeyframe.rawValue(),
            this._compositeForKeyframe(endKeyframe)),
        intervalDistance);
  },
  _propertySpecificKeyframes: function() {
    if (isDefinedAndNotNull(this._cachedPropertySpecificKeyframes)) {
      return this._cachedPropertySpecificKeyframes;
    }

    this._cachedPropertySpecificKeyframes = {};
    var distributedFrames = this._getDistributedKeyframes();
    for (var i = 0; i < distributedFrames.length; i++) {
      for (var property in distributedFrames[i].cssValues) {
        if (!(property in this._cachedPropertySpecificKeyframes)) {
          this._cachedPropertySpecificKeyframes[property] = [];
        }
        var frame = distributedFrames[i];
        this._cachedPropertySpecificKeyframes[property].push(
            new PropertySpecificKeyframe(frame.offset, frame.composite,
                frame.easing, property, frame.cssValues[property]));
      }
    }

    for (var property in this._cachedPropertySpecificKeyframes) {
      var frames = this._cachedPropertySpecificKeyframes[property];
      ASSERT_ENABLED && assert(
          frames.length > 0,
          'There should always be keyframes for each property');

      // Add synthetic keyframes at offsets of 0 and 1 if required.
      if (frames[0].offset !== 0.0) {
        var keyframe = new PropertySpecificKeyframe(0.0, 'add',
            presetTimingFunctions.linear, property, cssNeutralValue);
        frames.unshift(keyframe);
      }
      if (frames[frames.length - 1].offset !== 1.0) {
        var keyframe = new PropertySpecificKeyframe(1.0, 'add',
            presetTimingFunctions.linear, property, cssNeutralValue);
        frames.push(keyframe);
      }
      ASSERT_ENABLED && assert(
          frames.length >= 2,
          'There should be at least two keyframes including' +
          ' synthetic keyframes');
    }

    return this._cachedPropertySpecificKeyframes;
  },
  clone: function() {
    var result = new KeyframeEffect([], this.composite);
    result._keyframeDictionaries = this._keyframeDictionaries.slice(0);
    return result;
  },
  toString: function() {
    return '<KeyframeEffect>';
  },
  _compositeForKeyframe: function(keyframe) {
    return isDefinedAndNotNull(keyframe.composite) ?
        keyframe.composite : this.composite;
  },
  _allKeyframesUseSameCompositeOperation: function(keyframes) {
    ASSERT_ENABLED && assert(
        keyframes.length >= 1, 'This requires at least one keyframe');
    var composite = this._compositeForKeyframe(keyframes[0]);
    for (var i = 1; i < keyframes.length; i++) {
      if (this._compositeForKeyframe(keyframes[i]) !== composite) {
        return false;
      }
    }
    return true;
  },
  _areKeyframeDictionariesLooselySorted: function() {
    var previousOffset = -Infinity;
    for (var i = 0; i < this._keyframeDictionaries.length; i++) {
      if (isDefinedAndNotNull(this._keyframeDictionaries[i].offset)) {
        if (this._keyframeDictionaries[i].offset < previousOffset) {
          return false;
        }
        previousOffset = this._keyframeDictionaries[i].offset;
      }
    }
    return true;
  },
  // The spec describes both this process and the process for interpretting the
  // properties of a keyframe dictionary as 'normalizing'. Here we use the term
  // 'distributing' to avoid confusion with normalizeKeyframeDictionary().
  _getDistributedKeyframes: function() {
    if (!this._areKeyframeDictionariesLooselySorted()) {
      return [];
    }

    var distributedKeyframes = this._keyframeDictionaries.map(
        KeyframeInternal.createFromNormalizedProperties);

    // Remove keyframes with offsets out of bounds.
    var length = distributedKeyframes.length;
    var count = 0;
    for (var i = 0; i < length; i++) {
      var offset = distributedKeyframes[i].offset;
      if (isDefinedAndNotNull(offset)) {
        if (offset >= 0) {
          break;
        } else {
          count = i;
        }
      }
    }
    distributedKeyframes.splice(0, count);

    length = distributedKeyframes.length;
    count = 0;
    for (var i = length - 1; i >= 0; i--) {
      var offset = distributedKeyframes[i].offset;
      if (isDefinedAndNotNull(offset)) {
        if (offset <= 1) {
          break;
        } else {
          count = length - i;
        }
      }
    }
    distributedKeyframes.splice(length - count, count);

    // Distribute offsets.
    length = distributedKeyframes.length;
    if (length > 1 && !isDefinedAndNotNull(distributedKeyframes[0].offset)) {
      distributedKeyframes[0].offset = 0;
    }
    if (length > 0 &&
        !isDefinedAndNotNull(distributedKeyframes[length - 1].offset)) {
      distributedKeyframes[length - 1].offset = 1;
    }
    var lastOffsetIndex = 0;
    var nextOffsetIndex = 0;
    for (var i = 1; i < distributedKeyframes.length - 1; i++) {
      var keyframe = distributedKeyframes[i];
      if (isDefinedAndNotNull(keyframe.offset)) {
        lastOffsetIndex = i;
        continue;
      }
      if (i > nextOffsetIndex) {
        nextOffsetIndex = i;
        while (!isDefinedAndNotNull(
            distributedKeyframes[nextOffsetIndex].offset)) {
          nextOffsetIndex++;
        }
      }
      var lastOffset = distributedKeyframes[lastOffsetIndex].offset;
      var nextOffset = distributedKeyframes[nextOffsetIndex].offset;
      var unspecifiedKeyframes = nextOffsetIndex - lastOffsetIndex - 1;
      ASSERT_ENABLED && assert(unspecifiedKeyframes > 0);
      var localIndex = i - lastOffsetIndex;
      ASSERT_ENABLED && assert(localIndex > 0);
      distributedKeyframes[i].offset = lastOffset +
          (nextOffset - lastOffset) * localIndex / (unspecifiedKeyframes + 1);
    }

    // Remove invalid property values.
    for (var i = distributedKeyframes.length - 1; i >= 0; i--) {
      var keyframe = distributedKeyframes[i];
      for (var property in keyframe.cssValues) {
        if (!KeyframeInternal.isSupportedPropertyValue(
            keyframe.cssValues[property])) {
          delete(keyframe.cssValues[property]);
        }
      }
      if (Object.keys(keyframe).length === 0) {
        distributedKeyframes.splice(i, 1);
      }
    }

    return distributedKeyframes;
  }
});



/**
 * An internal representation of a keyframe. The Keyframe type from the spec is
 * just a dictionary and is not exposed.
 *
 * @constructor
 */
var KeyframeInternal = function(offset, composite, easing) {
  ASSERT_ENABLED && assert(
      typeof offset === 'number' || offset === null,
      'Invalid offset value');
  ASSERT_ENABLED && assert(
      composite === 'add' || composite === 'replace' || composite === null,
      'Invalid composite value');
  this.offset = offset;
  this.composite = composite;
  this.easing = easing;
  this.cssValues = {};
};

KeyframeInternal.prototype = {
  addPropertyValuePair: function(property, value) {
    ASSERT_ENABLED && assert(!this.cssValues.hasOwnProperty(property));
    this.cssValues[property] = value;
  },
  hasValueForProperty: function(property) {
    return property in this.cssValues;
  }
};

KeyframeInternal.isSupportedPropertyValue = function(value) {
  ASSERT_ENABLED && assert(
      typeof value === 'string' || value === cssNeutralValue);
  // TODO: Check this properly!
  return value !== '';
};

KeyframeInternal.createFromNormalizedProperties = function(properties) {
  ASSERT_ENABLED && assert(
      isDefinedAndNotNull(properties) && typeof properties === 'object',
      'Properties must be an object');
  var keyframe = new KeyframeInternal(properties.offset, properties.composite,
      properties.easing);
  for (var candidate in properties) {
    if (candidate !== 'offset' &&
        candidate !== 'composite' &&
        candidate !== 'easing') {
      keyframe.addPropertyValuePair(candidate, properties[candidate]);
    }
  }
  return keyframe;
};



/** @constructor */
var PropertySpecificKeyframe = function(offset, composite, easing, property,
    cssValue) {
  this.offset = offset;
  this.composite = composite;
  this.easing = easing;
  this.property = property;
  this.cssValue = cssValue;
  // Calculated lazily
  this.cachedRawValue = null;
};

PropertySpecificKeyframe.prototype = {
  rawValue: function() {
    if (!isDefinedAndNotNull(this.cachedRawValue)) {
      this.cachedRawValue = fromCssValue(this.property, this.cssValue);
    }
    return this.cachedRawValue;
  }
};



/** @constructor */
var TimingFunction = function() {
  throw new TypeError('Illegal constructor');
};

TimingFunction.prototype.scaleTime = abstractMethod;

TimingFunction.createFromString = function(spec, timedItem) {
  var preset = presetTimingFunctions[spec];
  if (preset) {
    return preset;
  }
  if (spec === 'paced') {
    if (timedItem instanceof Animation &&
        timedItem.effect instanceof MotionPathEffect) {
      return new PacedTimingFunction(timedItem.effect);
    }
    return presetTimingFunctions.linear;
  }
  var stepMatch = /steps\(\s*(\d+)\s*,\s*(start|end|middle)\s*\)/.exec(spec);
  if (stepMatch) {
    return new StepTimingFunction(Number(stepMatch[1]), stepMatch[2]);
  }
  var bezierMatch =
      /cubic-bezier\(([^,]*),([^,]*),([^,]*),([^)]*)\)/.exec(spec);
  if (bezierMatch) {
    return new CubicBezierTimingFunction([
      Number(bezierMatch[1]),
      Number(bezierMatch[2]),
      Number(bezierMatch[3]),
      Number(bezierMatch[4])
    ]);
  }
  return presetTimingFunctions.linear;
};



/** @constructor */
var CubicBezierTimingFunction = function(spec) {
  this.params = spec;
  this.map = [];
  for (var ii = 0; ii <= 100; ii += 1) {
    var i = ii / 100;
    this.map.push([
      3 * i * (1 - i) * (1 - i) * this.params[0] +
          3 * i * i * (1 - i) * this.params[2] + i * i * i,
      3 * i * (1 - i) * (1 - i) * this.params[1] +
          3 * i * i * (1 - i) * this.params[3] + i * i * i
    ]);
  }
};

CubicBezierTimingFunction.prototype = createObject(TimingFunction.prototype, {
  scaleTime: function(fraction) {
    var fst = 0;
    while (fst !== 100 && fraction > this.map[fst][0]) {
      fst += 1;
    }
    if (fraction === this.map[fst][0] || fst === 0) {
      return this.map[fst][1];
    }
    var yDiff = this.map[fst][1] - this.map[fst - 1][1];
    var xDiff = this.map[fst][0] - this.map[fst - 1][0];
    var p = (fraction - this.map[fst - 1][0]) / xDiff;
    return this.map[fst - 1][1] + p * yDiff;
  }
});



/** @constructor */
var StepTimingFunction = function(numSteps, position) {
  this.numSteps = numSteps;
  this.position = position || 'end';
};

StepTimingFunction.prototype = createObject(TimingFunction.prototype, {
  scaleTime: function(fraction) {
    if (fraction >= 1) {
      return 1;
    }
    var stepSize = 1 / this.numSteps;
    if (this.position === 'start') {
      fraction += stepSize;
    } else if (this.position === 'middle') {
      fraction += stepSize / 2;
    }
    return fraction - fraction % stepSize;
  }
});

var presetTimingFunctions = {
  'linear': null,
  'ease': new CubicBezierTimingFunction([0.25, 0.1, 0.25, 1.0]),
  'ease-in': new CubicBezierTimingFunction([0.42, 0, 1.0, 1.0]),
  'ease-out': new CubicBezierTimingFunction([0, 0, 0.58, 1.0]),
  'ease-in-out': new CubicBezierTimingFunction([0.42, 0, 0.58, 1.0]),
  'step-start': new StepTimingFunction(1, 'start'),
  'step-middle': new StepTimingFunction(1, 'middle'),
  'step-end': new StepTimingFunction(1, 'end')
};



/** @constructor */
var PacedTimingFunction = function(pathEffect) {
  ASSERT_ENABLED && assert(pathEffect instanceof MotionPathEffect);
  this._pathEffect = pathEffect;
  // Range is the portion of the effect over which we pace, normalized to
  // [0, 1].
  this._range = {min: 0, max: 1};
};

PacedTimingFunction.prototype = createObject(TimingFunction.prototype, {
  setRange: function(range) {
    ASSERT_ENABLED && assert(range.min >= 0 && range.min <= 1);
    ASSERT_ENABLED && assert(range.max >= 0 && range.max <= 1);
    ASSERT_ENABLED && assert(range.min < range.max);
    this._range = range;
  },
  scaleTime: function(fraction) {
    var cumulativeLengths = this._pathEffect._cumulativeLengths;
    var numSegments = cumulativeLengths.length - 1;
    if (!cumulativeLengths[numSegments] || fraction <= 0) {
      return this._range.min;
    }
    if (fraction >= 1) {
      return this._range.max;
    }
    var minLength = this.lengthAtIndex(this._range.min * numSegments);
    var maxLength = this.lengthAtIndex(this._range.max * numSegments);
    var length = interp(minLength, maxLength, fraction);
    var leftIndex = this.findLeftIndex(cumulativeLengths, length);
    var leftLength = cumulativeLengths[leftIndex];
    var segmentLength = cumulativeLengths[leftIndex + 1] - leftLength;
    if (segmentLength > 0) {
      return (leftIndex + (length - leftLength) / segmentLength) / numSegments;
    }
    return leftLength / cumulativeLengths.length;
  },
  findLeftIndex: function(array, value) {
    var leftIndex = 0;
    var rightIndex = array.length;
    while (rightIndex - leftIndex > 1) {
      var midIndex = (leftIndex + rightIndex) >> 1;
      if (array[midIndex] <= value) {
        leftIndex = midIndex;
      } else {
        rightIndex = midIndex;
      }
    }
    return leftIndex;
  },
  lengthAtIndex: function(i) {
    ASSERT_ENABLED &&
        console.assert(i >= 0 && i <= cumulativeLengths.length - 1);
    var leftIndex = Math.floor(i);
    var startLength = this._pathEffect._cumulativeLengths[leftIndex];
    var endLength = this._pathEffect._cumulativeLengths[leftIndex + 1];
    var indexFraction = i % 1;
    return interp(startLength, endLength, indexFraction);
  }
});

var interp = function(from, to, f, type) {
  if (Array.isArray(from) || Array.isArray(to)) {
    return interpArray(from, to, f, type);
  }
  var zero = (type && type.indexOf('scale') === 0) ? 1 : 0;
  to = isDefinedAndNotNull(to) ? to : zero;
  from = isDefinedAndNotNull(from) ? from : zero;

  return to * f + from * (1 - f);
};

var interpArray = function(from, to, f, type) {
  ASSERT_ENABLED && assert(
      Array.isArray(from) || from === null,
      'From is not an array or null');
  ASSERT_ENABLED && assert(
      Array.isArray(to) || to === null,
      'To is not an array or null');
  ASSERT_ENABLED && assert(
      from === null || to === null || from.length === to.length,
      'Arrays differ in length ' + from + ' : ' + to);
  var length = from ? from.length : to.length;

  var result = [];
  for (var i = 0; i < length; i++) {
    result[i] = interp(from ? from[i] : null, to ? to[i] : null, f, type);
  }
  return result;
};

var typeWithKeywords = function(keywords, type) {
  var isKeyword;
  if (keywords.length === 1) {
    var keyword = keywords[0];
    isKeyword = function(value) {
      return value === keyword;
    };
  } else {
    isKeyword = function(value) {
      return keywords.indexOf(value) >= 0;
    };
  }
  return createObject(type, {
    add: function(base, delta) {
      if (isKeyword(base) || isKeyword(delta)) {
        return delta;
      }
      return type.add(base, delta);
    },
    interpolate: function(from, to, f) {
      if (isKeyword(from) || isKeyword(to)) {
        return nonNumericType.interpolate(from, to, f);
      }
      return type.interpolate(from, to, f);
    },
    toCssValue: function(value, svgMode) {
      return isKeyword(value) ? value : type.toCssValue(value, svgMode);
    },
    fromCssValue: function(value) {
      return isKeyword(value) ? value : type.fromCssValue(value);
    }
  });
};

var numberType = {
  add: function(base, delta) {
    // If base or delta are 'auto', we fall back to replacement.
    if (base === 'auto' || delta === 'auto') {
      return nonNumericType.add(base, delta);
    }
    return base + delta;
  },
  interpolate: function(from, to, f) {
    // If from or to are 'auto', we fall back to step interpolation.
    if (from === 'auto' || to === 'auto') {
      return nonNumericType.interpolate(from, to);
    }
    return interp(from, to, f);
  },
  toCssValue: function(value) { return value + ''; },
  fromCssValue: function(value) {
    if (value === 'auto') {
      return 'auto';
    }
    var result = Number(value);
    return isNaN(result) ? undefined : result;
  }
};

var integerType = createObject(numberType, {
  interpolate: function(from, to, f) {
    // If from or to are 'auto', we fall back to step interpolation.
    if (from === 'auto' || to === 'auto') {
      return nonNumericType.interpolate(from, to);
    }
    return Math.floor(interp(from, to, f));
  }
});

var fontWeightType = {
  add: function(base, delta) { return base + delta; },
  interpolate: function(from, to, f) {
    return interp(from, to, f);
  },
  toCssValue: function(value) {
    value = Math.round(value / 100) * 100;
    value = clamp(value, 100, 900);
    if (value === 400) {
      return 'normal';
    }
    if (value === 700) {
      return 'bold';
    }
    return String(value);
  },
  fromCssValue: function(value) {
    // TODO: support lighter / darker ?
    var out = Number(value);
    if (isNaN(out) || out < 100 || out > 900 || out % 100 !== 0) {
      return undefined;
    }
    return out;
  }
};

// This regular expression is intentionally permissive, so that
// platform-prefixed versions of calc will still be accepted as
// input. While we are restrictive with the transform property
// name, we need to be able to read underlying calc values from
// computedStyle so can't easily restrict the input here.
var outerCalcRE = /^\s*(-webkit-)?calc\s*\(\s*([^)]*)\)/;
var valueRE = /^\s*(-?[0-9]+(\.[0-9])?[0-9]*)([a-zA-Z%]*)/;
var operatorRE = /^\s*([+-])/;
var autoRE = /^\s*auto/i;
var percentLengthType = {
  zero: function() { return {}; },
  add: function(base, delta) {
    var out = {};
    for (var value in base) {
      out[value] = base[value] + (delta[value] || 0);
    }
    for (value in delta) {
      if (value in base) {
        continue;
      }
      out[value] = delta[value];
    }
    return out;
  },
  interpolate: function(from, to, f) {
    var out = {};
    for (var value in from) {
      out[value] = interp(from[value], to[value], f);
    }
    for (var value in to) {
      if (value in out) {
        continue;
      }
      out[value] = interp(0, to[value], f);
    }
    return out;
  },
  toCssValue: function(value) {
    var s = '';
    var singleValue = true;
    for (var item in value) {
      if (s === '') {
        s = value[item] + item;
      } else if (singleValue) {
        if (value[item] !== 0) {
          s = features.calcFunction +
              '(' + s + ' + ' + value[item] + item + ')';
          singleValue = false;
        }
      } else if (value[item] !== 0) {
        s = s.substring(0, s.length - 1) + ' + ' + value[item] + item + ')';
      }
    }
    return s;
  },
  fromCssValue: function(value) {
    var result = percentLengthType.consumeValueFromString(value);
    if (result) {
      return result.value;
    }
    return undefined;
  },
  consumeValueFromString: function(value) {
    if (!isDefinedAndNotNull(value)) {
      return undefined;
    }
    var autoMatch = autoRE.exec(value);
    if (autoMatch) {
      return {
        value: { auto: true },
        remaining: value.substring(autoMatch[0].length)
      };
    }
    var out = {};
    var calcMatch = outerCalcRE.exec(value);
    if (!calcMatch) {
      var singleValue = valueRE.exec(value);
      if (singleValue && (singleValue.length === 4)) {
        out[singleValue[3]] = Number(singleValue[1]);
        return {
          value: out,
          remaining: value.substring(singleValue[0].length)
        };
      }
      return undefined;
    }
    var remaining = value.substring(calcMatch[0].length);
    var calcInnards = calcMatch[2];
    var firstTime = true;
    while (true) {
      var reversed = false;
      if (firstTime) {
        firstTime = false;
      } else {
        var op = operatorRE.exec(calcInnards);
        if (!op) {
          return undefined;
        }
        if (op[1] === '-') {
          reversed = true;
        }
        calcInnards = calcInnards.substring(op[0].length);
      }
      value = valueRE.exec(calcInnards);
      if (!value) {
        return undefined;
      }
      var valueUnit = value[3];
      var valueNumber = Number(value[1]);
      if (!isDefinedAndNotNull(out[valueUnit])) {
        out[valueUnit] = 0;
      }
      if (reversed) {
        out[valueUnit] -= valueNumber;
      } else {
        out[valueUnit] += valueNumber;
      }
      calcInnards = calcInnards.substring(value[0].length);
      if (/\s*/.exec(calcInnards)[0].length === calcInnards.length) {
        return {
          value: out,
          remaining: remaining
        };
      }
    }
  },
  negate: function(value) {
    var out = {};
    for (var unit in value) {
      out[unit] = -value[unit];
    }
    return out;
  }
};

var percentLengthAutoType = typeWithKeywords(['auto'], percentLengthType);

var positionKeywordRE = /^\s*left|^\s*center|^\s*right|^\s*top|^\s*bottom/i;
var positionType = {
  zero: function() { return [{ px: 0 }, { px: 0 }]; },
  add: function(base, delta) {
    return [
      percentLengthType.add(base[0], delta[0]),
      percentLengthType.add(base[1], delta[1])
    ];
  },
  interpolate: function(from, to, f) {
    return [
      percentLengthType.interpolate(from[0], to[0], f),
      percentLengthType.interpolate(from[1], to[1], f)
    ];
  },
  toCssValue: function(value) {
    return value.map(percentLengthType.toCssValue).join(' ');
  },
  fromCssValue: function(value) {
    var tokens = positionType.consumeAllTokensFromString(value);
    if (!tokens || tokens.length > 4) {
      return undefined;
    }

    if (tokens.length === 1) {
      var token = tokens[0];
      return (positionType.isHorizontalToken(token) ?
          [token, 'center'] : ['center', token]).map(positionType.resolveToken);
    }

    if (tokens.length === 2 &&
        positionType.isHorizontalToken(tokens[0]) &&
        positionType.isVerticalToken(tokens[1])) {
      return tokens.map(positionType.resolveToken);
    }

    if (tokens.filter(positionType.isKeyword).length !== 2) {
      return undefined;
    }

    var out = [undefined, undefined];
    var center = false;
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      if (!positionType.isKeyword(token)) {
        return undefined;
      }
      if (token === 'center') {
        if (center) {
          return undefined;
        }
        center = true;
        continue;
      }
      var axis = Number(positionType.isVerticalToken(token));
      if (out[axis]) {
        return undefined;
      }
      if (i === tokens.length - 1 || positionType.isKeyword(tokens[i + 1])) {
        out[axis] = positionType.resolveToken(token);
        continue;
      }
      var percentLength = tokens[++i];
      if (token === 'bottom' || token === 'right') {
        percentLength = percentLengthType.negate(percentLength);
        percentLength['%'] = (percentLength['%'] || 0) + 100;
      }
      out[axis] = percentLength;
    }
    if (center) {
      if (!out[0]) {
        out[0] = positionType.resolveToken('center');
      } else if (!out[1]) {
        out[1] = positionType.resolveToken('center');
      } else {
        return undefined;
      }
    }
    return out.every(isDefinedAndNotNull) ? out : undefined;
  },
  consumeAllTokensFromString: function(remaining) {
    var tokens = [];
    while (remaining.trim()) {
      var result = positionType.consumeTokenFromString(remaining);
      if (!result) {
        return undefined;
      }
      tokens.push(result.value);
      remaining = result.remaining;
    }
    return tokens;
  },
  consumeTokenFromString: function(value) {
    var keywordMatch = positionKeywordRE.exec(value);
    if (keywordMatch) {
      return {
        value: keywordMatch[0].trim().toLowerCase(),
        remaining: value.substring(keywordMatch[0].length)
      };
    }
    return percentLengthType.consumeValueFromString(value);
  },
  resolveToken: function(token) {
    if (typeof token === 'string') {
      return percentLengthType.fromCssValue({
        left: '0%',
        center: '50%',
        right: '100%',
        top: '0%',
        bottom: '100%'
      }[token]);
    }
    return token;
  },
  isHorizontalToken: function(token) {
    if (typeof token === 'string') {
      return token in { left: true, center: true, right: true };
    }
    return true;
  },
  isVerticalToken: function(token) {
    if (typeof token === 'string') {
      return token in { top: true, center: true, bottom: true };
    }
    return true;
  },
  isKeyword: function(token) {
    return typeof token === 'string';
  }
};

// Spec: http://dev.w3.org/csswg/css-backgrounds/#background-position
var positionListType = {
  zero: function() { return [positionType.zero()]; },
  add: function(base, delta) {
    var out = [];
    var maxLength = Math.max(base.length, delta.length);
    for (var i = 0; i < maxLength; i++) {
      var basePosition = base[i] ? base[i] : positionType.zero();
      var deltaPosition = delta[i] ? delta[i] : positionType.zero();
      out.push(positionType.add(basePosition, deltaPosition));
    }
    return out;
  },
  interpolate: function(from, to, f) {
    var out = [];
    var maxLength = Math.max(from.length, to.length);
    for (var i = 0; i < maxLength; i++) {
      var fromPosition = from[i] ? from[i] : positionType.zero();
      var toPosition = to[i] ? to[i] : positionType.zero();
      out.push(positionType.interpolate(fromPosition, toPosition, f));
    }
    return out;
  },
  toCssValue: function(value) {
    return value.map(positionType.toCssValue).join(', ');
  },
  fromCssValue: function(value) {
    if (!isDefinedAndNotNull(value)) {
      return undefined;
    }
    if (!value.trim()) {
      return [positionType.fromCssValue('0% 0%')];
    }
    var positionValues = value.split(',');
    var out = positionValues.map(positionType.fromCssValue);
    return out.every(isDefinedAndNotNull) ? out : undefined;
  }
};

var rectangleRE = /rect\(([^,]+),([^,]+),([^,]+),([^)]+)\)/;
var rectangleType = {
  add: function(base, delta) {
    return {
      top: percentLengthType.add(base.top, delta.top),
      right: percentLengthType.add(base.right, delta.right),
      bottom: percentLengthType.add(base.bottom, delta.bottom),
      left: percentLengthType.add(base.left, delta.left)
    };
  },
  interpolate: function(from, to, f) {
    return {
      top: percentLengthType.interpolate(from.top, to.top, f),
      right: percentLengthType.interpolate(from.right, to.right, f),
      bottom: percentLengthType.interpolate(from.bottom, to.bottom, f),
      left: percentLengthType.interpolate(from.left, to.left, f)
    };
  },
  toCssValue: function(value) {
    return 'rect(' +
        percentLengthType.toCssValue(value.top) + ',' +
        percentLengthType.toCssValue(value.right) + ',' +
        percentLengthType.toCssValue(value.bottom) + ',' +
        percentLengthType.toCssValue(value.left) + ')';
  },
  fromCssValue: function(value) {
    var match = rectangleRE.exec(value);
    if (!match) {
      return undefined;
    }
    var out = {
      top: percentLengthType.fromCssValue(match[1]),
      right: percentLengthType.fromCssValue(match[2]),
      bottom: percentLengthType.fromCssValue(match[3]),
      left: percentLengthType.fromCssValue(match[4])
    };
    if (out.top && out.right && out.bottom && out.left) {
      return out;
    }
    return undefined;
  }
};

var originType = {
  zero: function() { return [{'%': 0}, {'%': 0}, {px: 0}]; },
  add: function(base, delta) {
    return [
      percentLengthType.add(base[0], delta[0]),
      percentLengthType.add(base[1], delta[1]),
      percentLengthType.add(base[2], delta[2])
    ];
  },
  interpolate: function(from, to, f) {
    return [
      percentLengthType.interpolate(from[0], to[0], f),
      percentLengthType.interpolate(from[1], to[1], f),
      percentLengthType.interpolate(from[2], to[2], f)
    ];
  },
  toCssValue: function(value) {
    var result = percentLengthType.toCssValue(value[0]) + ' ' +
        percentLengthType.toCssValue(value[1]);
    // Return the third value if it is non-zero.
    for (var unit in value[2]) {
      if (value[2][unit] !== 0) {
        return result + ' ' + percentLengthType.toCssValue(value[2]);
      }
    }
    return result;
  },
  fromCssValue: function(value) {
    var tokens = positionType.consumeAllTokensFromString(value);
    if (!tokens) {
      return undefined;
    }
    var out = ['center', 'center', {px: 0}];
    switch (tokens.length) {
      case 0:
        return originType.zero();
      case 1:
        if (positionType.isHorizontalToken(tokens[0])) {
          out[0] = tokens[0];
        } else if (positionType.isVerticalToken(tokens[0])) {
          out[1] = tokens[0];
        } else {
          return undefined;
        }
        return out.map(positionType.resolveToken);
      case 3:
        if (positionType.isKeyword(tokens[2])) {
          return undefined;
        }
        out[2] = tokens[2];
      case 2:
        if (positionType.isHorizontalToken(tokens[0]) &&
            positionType.isVerticalToken(tokens[1])) {
          out[0] = tokens[0];
          out[1] = tokens[1];
        } else if (positionType.isVerticalToken(tokens[0]) &&
            positionType.isHorizontalToken(tokens[1])) {
          out[0] = tokens[1];
          out[1] = tokens[0];
        } else {
          return undefined;
        }
        return out.map(positionType.resolveToken);
      default:
        return undefined;
    }
  }
};

var shadowType = {
  zero: function() {
    return {
      hOffset: lengthType.zero(),
      vOffset: lengthType.zero()
    };
  },
  _addSingle: function(base, delta) {
    if (base && delta && base.inset !== delta.inset) {
      return delta;
    }
    var result = {
      inset: base ? base.inset : delta.inset,
      hOffset: lengthType.add(
          base ? base.hOffset : lengthType.zero(),
          delta ? delta.hOffset : lengthType.zero()),
      vOffset: lengthType.add(
          base ? base.vOffset : lengthType.zero(),
          delta ? delta.vOffset : lengthType.zero()),
      blur: lengthType.add(
          base && base.blur || lengthType.zero(),
          delta && delta.blur || lengthType.zero())
    };
    if (base && base.spread || delta && delta.spread) {
      result.spread = lengthType.add(
          base && base.spread || lengthType.zero(),
          delta && delta.spread || lengthType.zero());
    }
    if (base && base.color || delta && delta.color) {
      result.color = colorType.add(
          base && base.color || colorType.zero(),
          delta && delta.color || colorType.zero());
    }
    return result;
  },
  add: function(base, delta) {
    var result = [];
    for (var i = 0; i < base.length || i < delta.length; i++) {
      result.push(this._addSingle(base[i], delta[i]));
    }
    return result;
  },
  _interpolateSingle: function(from, to, f) {
    if (from && to && from.inset !== to.inset) {
      return f < 0.5 ? from : to;
    }
    var result = {
      inset: from ? from.inset : to.inset,
      hOffset: lengthType.interpolate(
          from ? from.hOffset : lengthType.zero(),
          to ? to.hOffset : lengthType.zero(), f),
      vOffset: lengthType.interpolate(
          from ? from.vOffset : lengthType.zero(),
          to ? to.vOffset : lengthType.zero(), f),
      blur: lengthType.interpolate(
          from && from.blur || lengthType.zero(),
          to && to.blur || lengthType.zero(), f)
    };
    if (from && from.spread || to && to.spread) {
      result.spread = lengthType.interpolate(
          from && from.spread || lengthType.zero(),
          to && to.spread || lengthType.zero(), f);
    }
    if (from && from.color || to && to.color) {
      result.color = colorType.interpolate(
          from && from.color || colorType.zero(),
          to && to.color || colorType.zero(), f);
    }
    return result;
  },
  interpolate: function(from, to, f) {
    var result = [];
    for (var i = 0; i < from.length || i < to.length; i++) {
      result.push(this._interpolateSingle(from[i], to[i], f));
    }
    return result;
  },
  _toCssValueSingle: function(value) {
    return (value.inset ? 'inset ' : '') +
        lengthType.toCssValue(value.hOffset) + ' ' +
        lengthType.toCssValue(value.vOffset) + ' ' +
        lengthType.toCssValue(value.blur) +
        (value.spread ? ' ' + lengthType.toCssValue(value.spread) : '') +
        (value.color ? ' ' + colorType.toCssValue(value.color) : '');
  },
  toCssValue: function(value) {
    return value.map(this._toCssValueSingle).join(', ');
  },
  fromCssValue: function(value) {
    var shadowRE = /(([^(,]+(\([^)]*\))?)+)/g;
    var match;
    var shadows = [];
    while ((match = shadowRE.exec(value)) !== null) {
      shadows.push(match[0]);
    }

    var result = shadows.map(function(value) {
      if (value === 'none') {
        return shadowType.zero();
      }
      value = value.replace(/^\s+|\s+$/g, '');

      var partsRE = /([^ (]+(\([^)]*\))?)/g;
      var parts = [];
      while ((match = partsRE.exec(value)) !== null) {
        parts.push(match[0]);
      }

      if (parts.length < 2 || parts.length > 7) {
        return undefined;
      }
      var result = {
        inset: false
      };

      var lengths = [];
      while (parts.length) {
        var part = parts.shift();

        var length = lengthType.fromCssValue(part);
        if (length) {
          lengths.push(length);
          continue;
        }

        var color = colorType.fromCssValue(part);
        if (color) {
          result.color = color;
        }

        if (part === 'inset') {
          result.inset = true;
        }
      }

      if (lengths.length < 2 || lengths.length > 4) {
        return undefined;
      }
      result.hOffset = lengths[0];
      result.vOffset = lengths[1];
      if (lengths.length > 2) {
        result.blur = lengths[2];
      }
      if (lengths.length > 3) {
        result.spread = lengths[3];
      }
      return result;
    });

    return result.every(isDefined) ? result : undefined;
  }
};

var nonNumericType = {
  add: function(base, delta) {
    return isDefined(delta) ? delta : base;
  },
  interpolate: function(from, to, f) {
    return f < 0.5 ? from : to;
  },
  toCssValue: function(value) {
    return value;
  },
  fromCssValue: function(value) {
    return value;
  }
};

var visibilityType = createObject(nonNumericType, {
  interpolate: function(from, to, f) {
    if (from !== 'visible' && to !== 'visible') {
      return nonNumericType.interpolate(from, to, f);
    }
    if (f <= 0) {
      return from;
    }
    if (f >= 1) {
      return to;
    }
    return 'visible';
  },
  fromCssValue: function(value) {
    if (['visible', 'hidden', 'collapse'].indexOf(value) !== -1) {
      return value;
    }
    return undefined;
  }
});

var lengthType = percentLengthType;
var lengthAutoType = typeWithKeywords(['auto'], lengthType);

var colorRE = new RegExp(
    '(hsla?|rgba?)\\(' +
    '([\\-0-9]+%?),?\\s*' +
    '([\\-0-9]+%?),?\\s*' +
    '([\\-0-9]+%?)(?:,?\\s*([\\-0-9\\.]+%?))?' +
    '\\)');
var colorHashRE = new RegExp(
    '#([0-9A-Fa-f][0-9A-Fa-f]?)' +
    '([0-9A-Fa-f][0-9A-Fa-f]?)' +
    '([0-9A-Fa-f][0-9A-Fa-f]?)');

function hsl2rgb(h, s, l) {
  // Cribbed from http://dev.w3.org/csswg/css-color/#hsl-color
  // Wrap to 0->360 degrees (IE -10 === 350) then normalize
  h = (((h % 360) + 360) % 360) / 360;
  s = s / 100;
  l = l / 100;
  function hue2rgb(m1, m2, h) {
    if (h < 0) {
      h += 1;
    }
    if (h > 1) {
      h -= 1;
    }
    if (h * 6 < 1) {
      return m1 + (m2 - m1) * h * 6;
    }
    if (h * 2 < 1) {
      return m2;
    }
    if (h * 3 < 2) {
      return m1 + (m2 - m1) * (2 / 3 - h) * 6;
    }
    return m1;
  }
  var m2;
  if (l <= 0.5) {
    m2 = l * (s + 1);
  } else {
    m2 = l + s - l * s;
  }

  var m1 = l * 2 - m2;
  var r = Math.ceil(hue2rgb(m1, m2, h + 1 / 3) * 255);
  var g = Math.ceil(hue2rgb(m1, m2, h) * 255);
  var b = Math.ceil(hue2rgb(m1, m2, h - 1 / 3) * 255);
  return [r, g, b];
}

var namedColors = {
  aliceblue: [240, 248, 255, 1],
  antiquewhite: [250, 235, 215, 1],
  aqua: [0, 255, 255, 1],
  aquamarine: [127, 255, 212, 1],
  azure: [240, 255, 255, 1],
  beige: [245, 245, 220, 1],
  bisque: [255, 228, 196, 1],
  black: [0, 0, 0, 1],
  blanchedalmond: [255, 235, 205, 1],
  blue: [0, 0, 255, 1],
  blueviolet: [138, 43, 226, 1],
  brown: [165, 42, 42, 1],
  burlywood: [222, 184, 135, 1],
  cadetblue: [95, 158, 160, 1],
  chartreuse: [127, 255, 0, 1],
  chocolate: [210, 105, 30, 1],
  coral: [255, 127, 80, 1],
  cornflowerblue: [100, 149, 237, 1],
  cornsilk: [255, 248, 220, 1],
  crimson: [220, 20, 60, 1],
  cyan: [0, 255, 255, 1],
  darkblue: [0, 0, 139, 1],
  darkcyan: [0, 139, 139, 1],
  darkgoldenrod: [184, 134, 11, 1],
  darkgray: [169, 169, 169, 1],
  darkgreen: [0, 100, 0, 1],
  darkgrey: [169, 169, 169, 1],
  darkkhaki: [189, 183, 107, 1],
  darkmagenta: [139, 0, 139, 1],
  darkolivegreen: [85, 107, 47, 1],
  darkorange: [255, 140, 0, 1],
  darkorchid: [153, 50, 204, 1],
  darkred: [139, 0, 0, 1],
  darksalmon: [233, 150, 122, 1],
  darkseagreen: [143, 188, 143, 1],
  darkslateblue: [72, 61, 139, 1],
  darkslategray: [47, 79, 79, 1],
  darkslategrey: [47, 79, 79, 1],
  darkturquoise: [0, 206, 209, 1],
  darkviolet: [148, 0, 211, 1],
  deeppink: [255, 20, 147, 1],
  deepskyblue: [0, 191, 255, 1],
  dimgray: [105, 105, 105, 1],
  dimgrey: [105, 105, 105, 1],
  dodgerblue: [30, 144, 255, 1],
  firebrick: [178, 34, 34, 1],
  floralwhite: [255, 250, 240, 1],
  forestgreen: [34, 139, 34, 1],
  fuchsia: [255, 0, 255, 1],
  gainsboro: [220, 220, 220, 1],
  ghostwhite: [248, 248, 255, 1],
  gold: [255, 215, 0, 1],
  goldenrod: [218, 165, 32, 1],
  gray: [128, 128, 128, 1],
  green: [0, 128, 0, 1],
  greenyellow: [173, 255, 47, 1],
  grey: [128, 128, 128, 1],
  honeydew: [240, 255, 240, 1],
  hotpink: [255, 105, 180, 1],
  indianred: [205, 92, 92, 1],
  indigo: [75, 0, 130, 1],
  ivory: [255, 255, 240, 1],
  khaki: [240, 230, 140, 1],
  lavender: [230, 230, 250, 1],
  lavenderblush: [255, 240, 245, 1],
  lawngreen: [124, 252, 0, 1],
  lemonchiffon: [255, 250, 205, 1],
  lightblue: [173, 216, 230, 1],
  lightcoral: [240, 128, 128, 1],
  lightcyan: [224, 255, 255, 1],
  lightgoldenrodyellow: [250, 250, 210, 1],
  lightgray: [211, 211, 211, 1],
  lightgreen: [144, 238, 144, 1],
  lightgrey: [211, 211, 211, 1],
  lightpink: [255, 182, 193, 1],
  lightsalmon: [255, 160, 122, 1],
  lightseagreen: [32, 178, 170, 1],
  lightskyblue: [135, 206, 250, 1],
  lightslategray: [119, 136, 153, 1],
  lightslategrey: [119, 136, 153, 1],
  lightsteelblue: [176, 196, 222, 1],
  lightyellow: [255, 255, 224, 1],
  lime: [0, 255, 0, 1],
  limegreen: [50, 205, 50, 1],
  linen: [250, 240, 230, 1],
  magenta: [255, 0, 255, 1],
  maroon: [128, 0, 0, 1],
  mediumaquamarine: [102, 205, 170, 1],
  mediumblue: [0, 0, 205, 1],
  mediumorchid: [186, 85, 211, 1],
  mediumpurple: [147, 112, 219, 1],
  mediumseagreen: [60, 179, 113, 1],
  mediumslateblue: [123, 104, 238, 1],
  mediumspringgreen: [0, 250, 154, 1],
  mediumturquoise: [72, 209, 204, 1],
  mediumvioletred: [199, 21, 133, 1],
  midnightblue: [25, 25, 112, 1],
  mintcream: [245, 255, 250, 1],
  mistyrose: [255, 228, 225, 1],
  moccasin: [255, 228, 181, 1],
  navajowhite: [255, 222, 173, 1],
  navy: [0, 0, 128, 1],
  oldlace: [253, 245, 230, 1],
  olive: [128, 128, 0, 1],
  olivedrab: [107, 142, 35, 1],
  orange: [255, 165, 0, 1],
  orangered: [255, 69, 0, 1],
  orchid: [218, 112, 214, 1],
  palegoldenrod: [238, 232, 170, 1],
  palegreen: [152, 251, 152, 1],
  paleturquoise: [175, 238, 238, 1],
  palevioletred: [219, 112, 147, 1],
  papayawhip: [255, 239, 213, 1],
  peachpuff: [255, 218, 185, 1],
  peru: [205, 133, 63, 1],
  pink: [255, 192, 203, 1],
  plum: [221, 160, 221, 1],
  powderblue: [176, 224, 230, 1],
  purple: [128, 0, 128, 1],
  red: [255, 0, 0, 1],
  rosybrown: [188, 143, 143, 1],
  royalblue: [65, 105, 225, 1],
  saddlebrown: [139, 69, 19, 1],
  salmon: [250, 128, 114, 1],
  sandybrown: [244, 164, 96, 1],
  seagreen: [46, 139, 87, 1],
  seashell: [255, 245, 238, 1],
  sienna: [160, 82, 45, 1],
  silver: [192, 192, 192, 1],
  skyblue: [135, 206, 235, 1],
  slateblue: [106, 90, 205, 1],
  slategray: [112, 128, 144, 1],
  slategrey: [112, 128, 144, 1],
  snow: [255, 250, 250, 1],
  springgreen: [0, 255, 127, 1],
  steelblue: [70, 130, 180, 1],
  tan: [210, 180, 140, 1],
  teal: [0, 128, 128, 1],
  thistle: [216, 191, 216, 1],
  tomato: [255, 99, 71, 1],
  transparent: [0, 0, 0, 0],
  turquoise: [64, 224, 208, 1],
  violet: [238, 130, 238, 1],
  wheat: [245, 222, 179, 1],
  white: [255, 255, 255, 1],
  whitesmoke: [245, 245, 245, 1],
  yellow: [255, 255, 0, 1],
  yellowgreen: [154, 205, 50, 1]
};

var colorType = typeWithKeywords(['currentColor'], {
  zero: function() { return [0, 0, 0, 0]; },
  _premultiply: function(value) {
    var alpha = value[3];
    return [value[0] * alpha, value[1] * alpha, value[2] * alpha];
  },
  add: function(base, delta) {
    var alpha = Math.min(base[3] + delta[3], 1);
    if (alpha === 0) {
      return [0, 0, 0, 0];
    }
    base = this._premultiply(base);
    delta = this._premultiply(delta);
    return [(base[0] + delta[0]) / alpha, (base[1] + delta[1]) / alpha,
            (base[2] + delta[2]) / alpha, alpha];
  },
  interpolate: function(from, to, f) {
    var alpha = clamp(interp(from[3], to[3], f), 0, 1);
    if (alpha === 0) {
      return [0, 0, 0, 0];
    }
    from = this._premultiply(from);
    to = this._premultiply(to);
    return [interp(from[0], to[0], f) / alpha,
            interp(from[1], to[1], f) / alpha,
            interp(from[2], to[2], f) / alpha, alpha];
  },
  toCssValue: function(value) {
    return 'rgba(' + Math.round(value[0]) + ', ' + Math.round(value[1]) +
        ', ' + Math.round(value[2]) + ', ' + value[3] + ')';
  },
  fromCssValue: function(value) {
    // http://dev.w3.org/csswg/css-color/#color
    var out = [];

    var regexResult = colorHashRE.exec(value);
    if (regexResult) {
      if (value.length !== 4 && value.length !== 7) {
        return undefined;
      }

      var out = [];
      regexResult.shift();
      for (var i = 0; i < 3; i++) {
        if (regexResult[i].length === 1) {
          regexResult[i] = regexResult[i] + regexResult[i];
        }
        var v = Math.max(Math.min(parseInt(regexResult[i], 16), 255), 0);
        out[i] = v;
      }
      out.push(1.0);
    }

    var regexResult = colorRE.exec(value);
    if (regexResult) {
      regexResult.shift();
      var type = regexResult.shift().substr(0, 3);
      for (var i = 0; i < 3; i++) {
        var m = 1;
        if (regexResult[i][regexResult[i].length - 1] === '%') {
          regexResult[i] = regexResult[i].substr(0, regexResult[i].length - 1);
          m = 255.0 / 100.0;
        }
        if (type === 'rgb') {
          out[i] = clamp(Math.round(parseInt(regexResult[i], 10) * m), 0, 255);
        } else {
          out[i] = parseInt(regexResult[i], 10);
        }
      }

      // Convert hsl values to rgb value
      if (type === 'hsl') {
        out = hsl2rgb.apply(null, out);
      }

      if (typeof regexResult[3] !== 'undefined') {
        out[3] = Math.max(Math.min(parseFloat(regexResult[3]), 1.0), 0.0);
      } else {
        out.push(1.0);
      }
    }

    if (out.some(isNaN)) {
      return undefined;
    }
    if (out.length > 0) {
      return out;
    }
    return namedColors[value];
  }
});

var convertToDeg = function(num, type) {
  switch (type) {
    case 'grad':
      return num / 400 * 360;
    case 'rad':
      return num / 2 / Math.PI * 360;
    case 'turn':
      return num * 360;
    default:
      return num;
  }
};

var extractValue = function(values, pos, hasUnits) {
  var value = Number(values[pos]);
  if (!hasUnits) {
    return value;
  }
  var type = values[pos + 1];
  if (type === '') { type = 'px'; }
  var result = {};
  result[type] = value;
  return result;
};

var extractValues = function(values, numValues, hasOptionalValue,
    hasUnits) {
  var result = [];
  for (var i = 0; i < numValues; i++) {
    result.push(extractValue(values, 1 + 2 * i, hasUnits));
  }
  if (hasOptionalValue && values[1 + 2 * numValues]) {
    result.push(extractValue(values, 1 + 2 * numValues, hasUnits));
  }
  return result;
};

var SPACES = '\\s*';
var NUMBER = '[+-]?(?:\\d+|\\d*\\.\\d+)';
var RAW_OPEN_BRACKET = '\\(';
var RAW_CLOSE_BRACKET = '\\)';
var RAW_COMMA = ',';
var UNIT = '[a-zA-Z%]*';
var START = '^';

function capture(x) { return '(' + x + ')'; }
function optional(x) { return '(?:' + x + ')?'; }

var OPEN_BRACKET = [SPACES, RAW_OPEN_BRACKET, SPACES].join('');
var CLOSE_BRACKET = [SPACES, RAW_CLOSE_BRACKET, SPACES].join('');
var COMMA = [SPACES, RAW_COMMA, SPACES].join('');
var UNIT_NUMBER = [capture(NUMBER), capture(UNIT)].join('');

function transformRE(name, numParms, hasOptionalParm) {
  var tokenList = [START, SPACES, name, OPEN_BRACKET];
  for (var i = 0; i < numParms - 1; i++) {
    tokenList.push(UNIT_NUMBER);
    tokenList.push(COMMA);
  }
  tokenList.push(UNIT_NUMBER);
  if (hasOptionalParm) {
    tokenList.push(optional([COMMA, UNIT_NUMBER].join('')));
  }
  tokenList.push(CLOSE_BRACKET);
  return new RegExp(tokenList.join(''));
}

function buildMatcher(name, numValues, hasOptionalValue, hasUnits,
    baseValue) {
  var baseName = name;
  if (baseValue) {
    if (name[name.length - 1] === 'X' || name[name.length - 1] === 'Y') {
      baseName = name.substring(0, name.length - 1);
    } else if (name[name.length - 1] === 'Z') {
      baseName = name.substring(0, name.length - 1) + '3d';
    }
  }

  var f = function(x) {
    var r = extractValues(x, numValues, hasOptionalValue, hasUnits);
    if (baseValue !== undefined) {
      if (name[name.length - 1] === 'X') {
        r.push(baseValue);
      } else if (name[name.length - 1] === 'Y') {
        r = [baseValue].concat(r);
      } else if (name[name.length - 1] === 'Z') {
        r = [baseValue, baseValue].concat(r);
      } else if (hasOptionalValue) {
        while (r.length < 2) {
          if (baseValue === 'copy') {
            r.push(r[0]);
          } else {
            r.push(baseValue);
          }
        }
      }
    }
    return r;
  };
  return [transformRE(name, numValues, hasOptionalValue), f, baseName];
}

function buildRotationMatcher(name, numValues, hasOptionalValue,
    baseValue) {
  var m = buildMatcher(name, numValues, hasOptionalValue, true, baseValue);

  var f = function(x) {
    var r = m[1](x);
    return r.map(function(v) {
      var result = 0;
      for (var type in v) {
        result += convertToDeg(v[type], type);
      }
      return result;
    });
  };
  return [m[0], f, m[2]];
}

function build3DRotationMatcher() {
  var m = buildMatcher('rotate3d', 4, false, true);
  var f = function(x) {
    var r = m[1](x);
    var out = [];
    for (var i = 0; i < 3; i++) {
      out.push(r[i].px);
    }
    var angle = 0;
    for (var unit in r[3]) {
      angle += convertToDeg(r[3][unit], unit);
    }
    out.push(angle);
    return out;
  };
  return [m[0], f, m[2]];
}

var transformREs = [
  buildRotationMatcher('rotate', 1, false),
  buildRotationMatcher('rotateX', 1, false),
  buildRotationMatcher('rotateY', 1, false),
  buildRotationMatcher('rotateZ', 1, false),
  build3DRotationMatcher(),
  buildRotationMatcher('skew', 1, true, 0),
  buildRotationMatcher('skewX', 1, false),
  buildRotationMatcher('skewY', 1, false),
  buildMatcher('translateX', 1, false, true, {px: 0}),
  buildMatcher('translateY', 1, false, true, {px: 0}),
  buildMatcher('translateZ', 1, false, true, {px: 0}),
  buildMatcher('translate', 1, true, true, {px: 0}),
  buildMatcher('translate3d', 3, false, true),
  buildMatcher('scale', 1, true, false, 'copy'),
  buildMatcher('scaleX', 1, false, false, 1),
  buildMatcher('scaleY', 1, false, false, 1),
  buildMatcher('scaleZ', 1, false, false, 1),
  buildMatcher('scale3d', 3, false, false),
  buildMatcher('perspective', 1, false, true),
  buildMatcher('matrix', 6, false, false),
  buildMatcher('matrix3d', 16, false, false)
];

var decomposeMatrix = (function() {
  // this is only ever used on the perspective matrix, which has 0, 0, 0, 1 as
  // last column
  function determinant(m) {
    return m[0][0] * m[1][1] * m[2][2] +
           m[1][0] * m[2][1] * m[0][2] +
           m[2][0] * m[0][1] * m[1][2] -
           m[0][2] * m[1][1] * m[2][0] -
           m[1][2] * m[2][1] * m[0][0] -
           m[2][2] * m[0][1] * m[1][0];
  }

  // from Wikipedia:
  //
  // [A B]^-1 = [A^-1 + A^-1B(D - CA^-1B)^-1CA^-1     -A^-1B(D - CA^-1B)^-1]
  // [C D]      [-(D - CA^-1B)^-1CA^-1                (D - CA^-1B)^-1      ]
  //
  // Therefore
  //
  // [A [0]]^-1 = [A^-1       [0]]
  // [C  1 ]      [ -CA^-1     1 ]
  function inverse(m) {
    var iDet = 1 / determinant(m);
    var a = m[0][0], b = m[0][1], c = m[0][2];
    var d = m[1][0], e = m[1][1], f = m[1][2];
    var g = m[2][0], h = m[2][1], k = m[2][2];
    var Ainv = [
      [(e * k - f * h) * iDet, (c * h - b * k) * iDet,
       (b * f - c * e) * iDet, 0],
      [(f * g - d * k) * iDet, (a * k - c * g) * iDet,
       (c * d - a * f) * iDet, 0],
      [(d * h - e * g) * iDet, (g * b - a * h) * iDet,
       (a * e - b * d) * iDet, 0]
    ];
    var lastRow = [];
    for (var i = 0; i < 3; i++) {
      var val = 0;
      for (var j = 0; j < 3; j++) {
        val += m[3][j] * Ainv[j][i];
      }
      lastRow.push(val);
    }
    lastRow.push(1);
    Ainv.push(lastRow);
    return Ainv;
  }

  function transposeMatrix4(m) {
    return [[m[0][0], m[1][0], m[2][0], m[3][0]],
            [m[0][1], m[1][1], m[2][1], m[3][1]],
            [m[0][2], m[1][2], m[2][2], m[3][2]],
            [m[0][3], m[1][3], m[2][3], m[3][3]]];
  }

  function multVecMatrix(v, m) {
    var result = [];
    for (var i = 0; i < 4; i++) {
      var val = 0;
      for (var j = 0; j < 4; j++) {
        val += v[j] * m[j][i];
      }
      result.push(val);
    }
    return result;
  }

  function normalize(v) {
    var len = length(v);
    return [v[0] / len, v[1] / len, v[2] / len];
  }

  function length(v) {
    return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
  }

  function combine(v1, v2, v1s, v2s) {
    return [v1s * v1[0] + v2s * v2[0], v1s * v1[1] + v2s * v2[1],
            v1s * v1[2] + v2s * v2[2]];
  }

  function cross(v1, v2) {
    return [v1[1] * v2[2] - v1[2] * v2[1],
            v1[2] * v2[0] - v1[0] * v2[2],
            v1[0] * v2[1] - v1[1] * v2[0]];
  }

  // TODO: Implement 2D matrix decomposition.
  // http://dev.w3.org/csswg/css-transforms/#decomposing-a-2d-matrix
  function decomposeMatrix(matrix) {
    var m3d = [
      matrix.slice(0, 4),
      matrix.slice(4, 8),
      matrix.slice(8, 12),
      matrix.slice(12, 16)
    ];

    // skip normalization step as m3d[3][3] should always be 1
    if (m3d[3][3] !== 1) {
      throw 'attempt to decompose non-normalized matrix';
    }

    var perspectiveMatrix = m3d.concat(); // copy m3d
    for (var i = 0; i < 3; i++) {
      perspectiveMatrix[i][3] = 0;
    }

    if (determinant(perspectiveMatrix) === 0) {
      return false;
    }

    var rhs = [];

    var perspective;
    if (m3d[0][3] !== 0 || m3d[1][3] !== 0 || m3d[2][3] !== 0) {
      rhs.push(m3d[0][3]);
      rhs.push(m3d[1][3]);
      rhs.push(m3d[2][3]);
      rhs.push(m3d[3][3]);

      var inversePerspectiveMatrix = inverse(perspectiveMatrix);
      var transposedInversePerspectiveMatrix =
          transposeMatrix4(inversePerspectiveMatrix);
      perspective = multVecMatrix(rhs, transposedInversePerspectiveMatrix);
    } else {
      perspective = [0, 0, 0, 1];
    }

    var translate = m3d[3].slice(0, 3);

    var row = [];
    row.push(m3d[0].slice(0, 3));
    var scale = [];
    scale.push(length(row[0]));
    row[0] = normalize(row[0]);

    var skew = [];
    row.push(m3d[1].slice(0, 3));
    skew.push(dot(row[0], row[1]));
    row[1] = combine(row[1], row[0], 1.0, -skew[0]);

    scale.push(length(row[1]));
    row[1] = normalize(row[1]);
    skew[0] /= scale[1];

    row.push(m3d[2].slice(0, 3));
    skew.push(dot(row[0], row[2]));
    row[2] = combine(row[2], row[0], 1.0, -skew[1]);
    skew.push(dot(row[1], row[2]));
    row[2] = combine(row[2], row[1], 1.0, -skew[2]);

    scale.push(length(row[2]));
    row[2] = normalize(row[2]);
    skew[1] /= scale[2];
    skew[2] /= scale[2];

    var pdum3 = cross(row[1], row[2]);
    if (dot(row[0], pdum3) < 0) {
      for (var i = 0; i < 3; i++) {
        scale[i] *= -1;
        row[i][0] *= -1;
        row[i][1] *= -1;
        row[i][2] *= -1;
      }
    }

    var t = row[0][0] + row[1][1] + row[2][2] + 1;
    var s;
    var quaternion;

    if (t > 1e-4) {
      s = 0.5 / Math.sqrt(t);
      quaternion = [
        (row[2][1] - row[1][2]) * s,
        (row[0][2] - row[2][0]) * s,
        (row[1][0] - row[0][1]) * s,
        0.25 / s
      ];
    } else if (row[0][0] > row[1][1] && row[0][0] > row[2][2]) {
      s = Math.sqrt(1 + row[0][0] - row[1][1] - row[2][2]) * 2.0;
      quaternion = [
        0.25 * s,
        (row[0][1] + row[1][0]) / s,
        (row[0][2] + row[2][0]) / s,
        (row[2][1] - row[1][2]) / s
      ];
    } else if (row[1][1] > row[2][2]) {
      s = Math.sqrt(1.0 + row[1][1] - row[0][0] - row[2][2]) * 2.0;
      quaternion = [
        (row[0][1] + row[1][0]) / s,
        0.25 * s,
        (row[1][2] + row[2][1]) / s,
        (row[0][2] - row[2][0]) / s
      ];
    } else {
      s = Math.sqrt(1.0 + row[2][2] - row[0][0] - row[1][1]) * 2.0;
      quaternion = [
        (row[0][2] + row[2][0]) / s,
        (row[1][2] + row[2][1]) / s,
        0.25 * s,
        (row[1][0] - row[0][1]) / s
      ];
    }

    return {
      translate: translate, scale: scale, skew: skew,
      quaternion: quaternion, perspective: perspective
    };
  }
  return decomposeMatrix;
})();

function dot(v1, v2) {
  var result = 0;
  for (var i = 0; i < v1.length; i++) {
    result += v1[i] * v2[i];
  }
  return result;
}

function multiplyMatrices(a, b) {
  return [
    a[0] * b[0] + a[4] * b[1] + a[8] * b[2] + a[12] * b[3],
    a[1] * b[0] + a[5] * b[1] + a[9] * b[2] + a[13] * b[3],
    a[2] * b[0] + a[6] * b[1] + a[10] * b[2] + a[14] * b[3],
    a[3] * b[0] + a[7] * b[1] + a[11] * b[2] + a[15] * b[3],

    a[0] * b[4] + a[4] * b[5] + a[8] * b[6] + a[12] * b[7],
    a[1] * b[4] + a[5] * b[5] + a[9] * b[6] + a[13] * b[7],
    a[2] * b[4] + a[6] * b[5] + a[10] * b[6] + a[14] * b[7],
    a[3] * b[4] + a[7] * b[5] + a[11] * b[6] + a[15] * b[7],

    a[0] * b[8] + a[4] * b[9] + a[8] * b[10] + a[12] * b[11],
    a[1] * b[8] + a[5] * b[9] + a[9] * b[10] + a[13] * b[11],
    a[2] * b[8] + a[6] * b[9] + a[10] * b[10] + a[14] * b[11],
    a[3] * b[8] + a[7] * b[9] + a[11] * b[10] + a[15] * b[11],

    a[0] * b[12] + a[4] * b[13] + a[8] * b[14] + a[12] * b[15],
    a[1] * b[12] + a[5] * b[13] + a[9] * b[14] + a[13] * b[15],
    a[2] * b[12] + a[6] * b[13] + a[10] * b[14] + a[14] * b[15],
    a[3] * b[12] + a[7] * b[13] + a[11] * b[14] + a[15] * b[15]
  ];
}

function convertItemToMatrix(item) {
  switch (item.t) {
    case 'rotateX':
      var angle = item.d * Math.PI / 180;
      return [1, 0, 0, 0,
              0, Math.cos(angle), Math.sin(angle), 0,
              0, -Math.sin(angle), Math.cos(angle), 0,
              0, 0, 0, 1];
    case 'rotateY':
      var angle = item.d * Math.PI / 180;
      return [Math.cos(angle), 0, -Math.sin(angle), 0,
              0, 1, 0, 0,
              Math.sin(angle), 0, Math.cos(angle), 0,
              0, 0, 0, 1];
    case 'rotate':
    case 'rotateZ':
      var angle = item.d * Math.PI / 180;
      return [Math.cos(angle), Math.sin(angle), 0, 0,
              -Math.sin(angle), Math.cos(angle), 0, 0,
              0, 0, 1, 0,
              0, 0, 0, 1];
    case 'rotate3d':
      var x = item.d[0];
      var y = item.d[1];
      var z = item.d[2];
      var sqrLength = x * x + y * y + z * z;
      if (sqrLength === 0) {
        x = 1;
        y = 0;
        z = 0;
      } else if (sqrLength !== 1) {
        var length = Math.sqrt(sqrLength);
        x /= length;
        y /= length;
        z /= length;
      }
      var s = Math.sin(item.d[3] * Math.PI / 360);
      var sc = s * Math.cos(item.d[3] * Math.PI / 360);
      var sq = s * s;
      return [
        1 - 2 * (y * y + z * z) * sq,
        2 * (x * y * sq + z * sc),
        2 * (x * z * sq - y * sc),
        0,

        2 * (x * y * sq - z * sc),
        1 - 2 * (x * x + z * z) * sq,
        2 * (y * z * sq + x * sc),
        0,

        2 * (x * z * sq + y * sc),
        2 * (y * z * sq - x * sc),
        1 - 2 * (x * x + y * y) * sq,
        0,

        0, 0, 0, 1
      ];
    case 'scale':
      return [item.d[0], 0, 0, 0,
              0, item.d[1], 0, 0,
              0, 0, 1, 0,
              0, 0, 0, 1];
    case 'scale3d':
      return [item.d[0], 0, 0, 0,
              0, item.d[1], 0, 0,
              0, 0, item.d[2], 0,
              0, 0, 0, 1];
    case 'skew':
      return [1, Math.tan(item.d[1] * Math.PI / 180), 0, 0,
              Math.tan(item.d[0] * Math.PI / 180), 1, 0, 0,
              0, 0, 1, 0,
              0, 0, 0, 1];
    case 'skewX':
      return [1, 0, 0, 0,
              Math.tan(item.d * Math.PI / 180), 1, 0, 0,
              0, 0, 1, 0,
              0, 0, 0, 1];
    case 'skewY':
      return [1, Math.tan(item.d * Math.PI / 180), 0, 0,
              0, 1, 0, 0,
              0, 0, 1, 0,
              0, 0, 0, 1];
    // TODO: Work out what to do with non-px values.
    case 'translate':
      return [1, 0, 0, 0,
              0, 1, 0, 0,
              0, 0, 1, 0,
              item.d[0].px, item.d[1].px, 0, 1];
    case 'translate3d':
      return [1, 0, 0, 0,
              0, 1, 0, 0,
              0, 0, 1, 0,
              item.d[0].px, item.d[1].px, item.d[2].px, 1];
    case 'perspective':
      return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, -1 / item.d.px,
        0, 0, 0, 1];
    case 'matrix':
      return [item.d[0], item.d[1], 0, 0,
              item.d[2], item.d[3], 0, 0,
              0, 0, 1, 0,
              item.d[4], item.d[5], 0, 1];
    case 'matrix3d':
      return item.d;
    default:
      ASSERT_ENABLED && assert(false, 'Transform item type ' + item.t +
          ' conversion to matrix not yet implemented.');
  }
}

function convertToMatrix(transformList) {
  if (transformList.length === 0) {
    return [1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1];
  }
  return transformList.map(convertItemToMatrix).reduce(multiplyMatrices);
}

var composeMatrix = (function() {
  function multiply(a, b) {
    var result = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        for (var k = 0; k < 4; k++) {
          result[i][j] += b[i][k] * a[k][j];
        }
      }
    }
    return result;
  }

  function is2D(m) {
    return (
        m[0][2] == 0 &&
        m[0][3] == 0 &&
        m[1][2] == 0 &&
        m[1][3] == 0 &&
        m[2][0] == 0 &&
        m[2][1] == 0 &&
        m[2][2] == 1 &&
        m[2][3] == 0 &&
        m[3][2] == 0 &&
        m[3][3] == 1);
  }

  function composeMatrix(translate, scale, skew, quat, perspective) {
    var matrix = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];

    for (var i = 0; i < 4; i++) {
      matrix[i][3] = perspective[i];
    }

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        matrix[3][i] += translate[j] * matrix[j][i];
      }
    }

    var x = quat[0], y = quat[1], z = quat[2], w = quat[3];

    var rotMatrix = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];

    rotMatrix[0][0] = 1 - 2 * (y * y + z * z);
    rotMatrix[0][1] = 2 * (x * y - z * w);
    rotMatrix[0][2] = 2 * (x * z + y * w);
    rotMatrix[1][0] = 2 * (x * y + z * w);
    rotMatrix[1][1] = 1 - 2 * (x * x + z * z);
    rotMatrix[1][2] = 2 * (y * z - x * w);
    rotMatrix[2][0] = 2 * (x * z - y * w);
    rotMatrix[2][1] = 2 * (y * z + x * w);
    rotMatrix[2][2] = 1 - 2 * (x * x + y * y);

    matrix = multiply(matrix, rotMatrix);

    var temp = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
    if (skew[2]) {
      temp[2][1] = skew[2];
      matrix = multiply(matrix, temp);
    }

    if (skew[1]) {
      temp[2][1] = 0;
      temp[2][0] = skew[0];
      matrix = multiply(matrix, temp);
    }

    if (skew[0]) {
      temp[2][0] = 0;
      temp[1][0] = skew[0];
      matrix = multiply(matrix, temp);
    }

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        matrix[i][j] *= scale[i];
      }
    }

    if (is2D(matrix)) {
      return {
        t: 'matrix',
        d: [matrix[0][0], matrix[0][1], matrix[1][0], matrix[1][1],
            matrix[3][0], matrix[3][1]]
      };
    }
    return {
      t: 'matrix3d',
      d: matrix[0].concat(matrix[1], matrix[2], matrix[3])
    };
  }
  return composeMatrix;
})();

function interpolateDecomposedTransformsWithMatrices(fromM, toM, f) {
  var product = dot(fromM.quaternion, toM.quaternion);
  product = clamp(product, -1.0, 1.0);

  var quat = [];
  if (product === 1.0) {
    quat = fromM.quaternion;
  } else {
    var theta = Math.acos(product);
    var w = Math.sin(f * theta) * 1 / Math.sqrt(1 - product * product);

    for (var i = 0; i < 4; i++) {
      quat.push(fromM.quaternion[i] * (Math.cos(f * theta) - product * w) +
                toM.quaternion[i] * w);
    }
  }

  var translate = interp(fromM.translate, toM.translate, f);
  var scale = interp(fromM.scale, toM.scale, f);
  var skew = interp(fromM.skew, toM.skew, f);
  var perspective = interp(fromM.perspective, toM.perspective, f);

  return composeMatrix(translate, scale, skew, quat, perspective);
}

function interpTransformValue(from, to, f) {
  var type = from.t ? from.t : to.t;
  switch (type) {
    case 'matrix':
    case 'matrix3d':
      ASSERT_ENABLED && assert(false,
          'Must use matrix decomposition when interpolating raw matrices');
    // Transforms with unitless parameters.
    case 'rotate':
    case 'rotateX':
    case 'rotateY':
    case 'rotateZ':
    case 'rotate3d':
    case 'scale':
    case 'scaleX':
    case 'scaleY':
    case 'scaleZ':
    case 'scale3d':
    case 'skew':
    case 'skewX':
    case 'skewY':
      return {t: type, d: interp(from.d, to.d, f, type)};
    default:
      // Transforms with lengthType parameters.
      var result = [];
      var maxVal;
      if (from.d && to.d) {
        maxVal = Math.max(from.d.length, to.d.length);
      } else if (from.d) {
        maxVal = from.d.length;
      } else {
        maxVal = to.d.length;
      }
      for (var j = 0; j < maxVal; j++) {
        var fromVal = from.d ? from.d[j] : {};
        var toVal = to.d ? to.d[j] : {};
        result.push(lengthType.interpolate(fromVal, toVal, f));
      }
      return {t: type, d: result};
  }
}

function isMatrix(item) {
  return item.t[0] === 'm';
}

// The CSSWG decided to disallow scientific notation in CSS property strings
// (see http://lists.w3.org/Archives/Public/www-style/2010Feb/0050.html).
// We need this function to hakonitize all numbers before adding them to
// property strings.
// TODO: Apply this function to all property strings
function n(num) {
  return Number(num).toFixed(4);
}

var transformType = {
  add: function(base, delta) { return base.concat(delta); },
  interpolate: function(from, to, f) {
    var out = [];
    for (var i = 0; i < Math.min(from.length, to.length); i++) {
      if (from[i].t !== to[i].t || isMatrix(from[i])) {
        break;
      }
      out.push(interpTransformValue(from[i], to[i], f));
    }

    if (i < Math.min(from.length, to.length) ||
        from.some(isMatrix) || to.some(isMatrix)) {
      if (from.decompositionPair !== to) {
        from.decompositionPair = to;
        from.decomposition = decomposeMatrix(convertToMatrix(from.slice(i)));
      }
      if (to.decompositionPair !== from) {
        to.decompositionPair = from;
        to.decomposition = decomposeMatrix(convertToMatrix(to.slice(i)));
      }
      out.push(interpolateDecomposedTransformsWithMatrices(
          from.decomposition, to.decomposition, f));
      return out;
    }

    for (; i < from.length; i++) {
      out.push(interpTransformValue(from[i], {t: null, d: null}, f));
    }
    for (; i < to.length; i++) {
      out.push(interpTransformValue({t: null, d: null}, to[i], f));
    }
    return out;
  },
  toCssValue: function(value, svgMode) {
    // TODO: fix this :)
    var out = '';
    for (var i = 0; i < value.length; i++) {
      ASSERT_ENABLED && assert(
          value[i].t, 'transform type should be resolved by now');
      switch (value[i].t) {
        case 'rotate':
        case 'rotateX':
        case 'rotateY':
        case 'rotateZ':
        case 'skewX':
        case 'skewY':
          var unit = svgMode ? '' : 'deg';
          out += value[i].t + '(' + value[i].d + unit + ') ';
          break;
        case 'skew':
          var unit = svgMode ? '' : 'deg';
          out += value[i].t + '(' + value[i].d[0] + unit;
          if (value[i].d[1] === 0) {
            out += ') ';
          } else {
            out += ', ' + value[i].d[1] + unit + ') ';
          }
          break;
        case 'rotate3d':
          var unit = svgMode ? '' : 'deg';
          out += value[i].t + '(' + value[i].d[0] + ', ' + value[i].d[1] +
              ', ' + value[i].d[2] + ', ' + value[i].d[3] + unit + ') ';
          break;
        case 'translateX':
        case 'translateY':
        case 'translateZ':
        case 'perspective':
          out += value[i].t + '(' + lengthType.toCssValue(value[i].d[0]) +
              ') ';
          break;
        case 'translate':
          if (svgMode) {
            if (value[i].d[1] === undefined) {
              out += value[i].t + '(' + value[i].d[0].px + ') ';
            } else {
              out += (
                  value[i].t + '(' + value[i].d[0].px + ', ' +
                  value[i].d[1].px + ') ');
            }
            break;
          }
          if (value[i].d[1] === undefined) {
            out += value[i].t + '(' + lengthType.toCssValue(value[i].d[0]) +
                ') ';
          } else {
            out += value[i].t + '(' + lengthType.toCssValue(value[i].d[0]) +
                ', ' + lengthType.toCssValue(value[i].d[1]) + ') ';
          }
          break;
        case 'translate3d':
          var values = value[i].d.map(lengthType.toCssValue);
          out += value[i].t + '(' + values[0] + ', ' + values[1] +
              ', ' + values[2] + ') ';
          break;
        case 'scale':
          if (value[i].d[0] === value[i].d[1]) {
            out += value[i].t + '(' + value[i].d[0] + ') ';
          } else {
            out += value[i].t + '(' + value[i].d[0] + ', ' + value[i].d[1] +
                ') ';
          }
          break;
        case 'scaleX':
        case 'scaleY':
        case 'scaleZ':
          out += value[i].t + '(' + value[i].d[0] + ') ';
          break;
        case 'scale3d':
          out += value[i].t + '(' + value[i].d[0] + ', ' +
              value[i].d[1] + ', ' + value[i].d[2] + ') ';
          break;
        case 'matrix':
        case 'matrix3d':
          out += value[i].t + '(' + value[i].d.map(n).join(', ') + ') ';
          break;
      }
    }
    return out.substring(0, out.length - 1);
  },
  fromCssValue: function(value) {
    // TODO: fix this :)
    if (value === undefined) {
      return undefined;
    }
    var result = [];
    while (value.length > 0) {
      var r;
      for (var i = 0; i < transformREs.length; i++) {
        var reSpec = transformREs[i];
        r = reSpec[0].exec(value);
        if (r) {
          result.push({t: reSpec[2], d: reSpec[1](r)});
          value = value.substring(r[0].length);
          break;
        }
      }
      if (!isDefinedAndNotNull(r)) {
        return result;
      }
    }
    return result;
  }
};

var pathType = {
  // Properties ...
  // - path: The target path element
  // - points: The absolute points to set on the path
  // - cachedCumulativeLengths: The lengths at the end of each segment
  add: function() { throw 'Addition not supported for path attribute' },
  cumulativeLengths: function(value) {
    if (isDefinedAndNotNull(value.cachedCumulativeLengths))
      return value.cachedCumulativeLengths;
    var path = value.path.cloneNode(true);
    var cumulativeLengths = [];
    while (path.pathSegList.numberOfItems > 0) {
      // TODO: It would be good to skip moves here and when generating points.
      cumulativeLengths.unshift(path.getTotalLength());
      path.pathSegList.removeItem(path.pathSegList.numberOfItems - 1);
    }
    value.cachedCumulativeLengths = cumulativeLengths;
    return value.cachedCumulativeLengths;
  },
  appendFractions: function(fractions, cumulativeLengths) {
    ASSERT_ENABLED && assert(cumulativeLengths[0] === 0);
    var totalLength = cumulativeLengths[cumulativeLengths.length - 1];
    for (var i = 1; i < cumulativeLengths.length - 1; ++i)
      fractions.push(cumulativeLengths[i] / totalLength);
  },
  interpolate: function(from, to, f) {
    // FIXME: Handle non-linear path segments.
    // Get the fractions at which we need to sample.
    var sampleFractions = [0, 1];
    pathType.appendFractions(sampleFractions, pathType.cumulativeLengths(from));
    pathType.appendFractions(sampleFractions, pathType.cumulativeLengths(to));
    sampleFractions.sort();
    ASSERT_ENABLED && assert(sampleFractions[0] === 0);
    ASSERT_ENABLED && assert(sampleFractions[sampleFractions.length - 1] === 1);

    // FIXME: Cache the 'from' and 'to' points.
    var fromTotalLength = from.path.getTotalLength();
    var toTotalLength = to.path.getTotalLength();
    var points = [];
    for (var i = 0; i < sampleFractions.length; ++i) {
      var fromPoint = from.path.getPointAtLength(
          fromTotalLength * sampleFractions[i]);
      var toPoint = to.path.getPointAtLength(
          toTotalLength * sampleFractions[i]);
      points.push({
        x: interp(fromPoint.x, toPoint.x, f),
        y: interp(fromPoint.y, toPoint.y, f)
      });
    }
    return {points: points};
  },
  pointToString: function(point) {
    return point.x + ',' + point.y;
  },
  toCssValue: function(value, svgMode) {
    // FIXME: It would be good to use PathSegList API on the target directly,
    // rather than generating this string, but that would require a hack to
    // setValue().
    ASSERT_ENABLED && assert(svgMode,
        'Path type should only be used with SVG \'d\' attribute');
    if (value.path)
      return value.path.getAttribute('d');
    var ret = 'M' + pathType.pointToString(value.points[0]);
    for (var i = 1; i < value.points.length; ++i)
      ret += 'L' + pathType.pointToString(value.points[i]);
    return ret;
  },
  fromCssValue: function(value) {
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    if (value)
      path.setAttribute('d', value);
    return {path: path};
  }
};

var propertyTypes = {
  backgroundColor: colorType,
  backgroundPosition: positionListType,
  borderBottomColor: colorType,
  borderBottomLeftRadius: percentLengthType,
  borderBottomRightRadius: percentLengthType,
  borderBottomWidth: lengthType,
  borderLeftColor: colorType,
  borderLeftWidth: lengthType,
  borderRightColor: colorType,
  borderRightWidth: lengthType,
  borderSpacing: lengthType,
  borderTopColor: colorType,
  borderTopLeftRadius: percentLengthType,
  borderTopRightRadius: percentLengthType,
  borderTopWidth: lengthType,
  bottom: percentLengthAutoType,
  boxShadow: shadowType,
  clip: typeWithKeywords(['auto'], rectangleType),
  color: colorType,
  cx: lengthType,
  cy: lengthType,
  d: pathType,
  dx: lengthType,
  dy: lengthType,
  fill: colorType,
  floodColor: colorType,

  // TODO: Handle these keywords properly.
  fontSize: typeWithKeywords(['smaller', 'larger'], percentLengthType),
  fontWeight: typeWithKeywords(['lighter', 'bolder'], fontWeightType),

  height: percentLengthAutoType,
  left: percentLengthAutoType,
  letterSpacing: typeWithKeywords(['normal'], lengthType),
  lightingColor: colorType,
  lineHeight: percentLengthType, // TODO: Should support numberType as well.
  marginBottom: lengthAutoType,
  marginLeft: lengthAutoType,
  marginRight: lengthAutoType,
  marginTop: lengthAutoType,
  maxHeight: typeWithKeywords(
      ['none', 'max-content', 'min-content', 'fill-available', 'fit-content'],
      percentLengthType),
  maxWidth: typeWithKeywords(
      ['none', 'max-content', 'min-content', 'fill-available', 'fit-content'],
      percentLengthType),
  minHeight: typeWithKeywords(
      ['max-content', 'min-content', 'fill-available', 'fit-content'],
      percentLengthType),
  minWidth: typeWithKeywords(
      ['max-content', 'min-content', 'fill-available', 'fit-content'],
      percentLengthType),
  opacity: numberType,
  outlineColor: typeWithKeywords(['invert'], colorType),
  outlineOffset: lengthType,
  outlineWidth: lengthType,
  paddingBottom: lengthType,
  paddingLeft: lengthType,
  paddingRight: lengthType,
  paddingTop: lengthType,
  perspective: typeWithKeywords(['none'], lengthType),
  perspectiveOrigin: originType,
  r: lengthType,
  right: percentLengthAutoType,
  stopColor: colorType,
  stroke: colorType,
  textIndent: typeWithKeywords(['each-line', 'hanging'], percentLengthType),
  textShadow: shadowType,
  top: percentLengthAutoType,
  transform: transformType,
  transformOrigin: originType,
  verticalAlign: typeWithKeywords([
    'baseline',
    'sub',
    'super',
    'text-top',
    'text-bottom',
    'middle',
    'top',
    'bottom'
  ], percentLengthType),
  visibility: visibilityType,
  width: typeWithKeywords([
    'border-box',
    'content-box',
    'auto',
    'max-content',
    'min-content',
    'available',
    'fit-content'
  ], percentLengthType),
  wordSpacing: typeWithKeywords(['normal'], percentLengthType),
  x: lengthType,
  y: lengthType,
  zIndex: typeWithKeywords(['auto'], integerType)
};

var svgProperties = {
  'cx': 1,
  'cy': 1,
  'd': 1,
  'dx': 1,
  'dy': 1,
  'fill': 1,
  'floodColor': 1,
  'height': 1,
  'lightingColor': 1,
  'r': 1,
  'stopColor': 1,
  'stroke': 1,
  'width': 1,
  'x': 1,
  'y': 1
};

var borderWidthAliases = {
  initial: '3px',
  thin: '1px',
  medium: '3px',
  thick: '5px'
};

var propertyValueAliases = {
  backgroundColor: { initial: 'transparent' },
  backgroundPosition: { initial: '0% 0%' },
  borderBottomColor: { initial: 'currentColor' },
  borderBottomLeftRadius: { initial: '0px' },
  borderBottomRightRadius: { initial: '0px' },
  borderBottomWidth: borderWidthAliases,
  borderLeftColor: { initial: 'currentColor' },
  borderLeftWidth: borderWidthAliases,
  borderRightColor: { initial: 'currentColor' },
  borderRightWidth: borderWidthAliases,
  // Spec says this should be 0 but in practise it is 2px.
  borderSpacing: { initial: '2px' },
  borderTopColor: { initial: 'currentColor' },
  borderTopLeftRadius: { initial: '0px' },
  borderTopRightRadius: { initial: '0px' },
  borderTopWidth: borderWidthAliases,
  bottom: { initial: 'auto' },
  clip: { initial: 'rect(0px, 0px, 0px, 0px)' },
  color: { initial: 'black' }, // Depends on user agent.
  fontSize: {
    initial: '100%',
    'xx-small': '60%',
    'x-small': '75%',
    'small': '89%',
    'medium': '100%',
    'large': '120%',
    'x-large': '150%',
    'xx-large': '200%'
  },
  fontWeight: {
    initial: '400',
    normal: '400',
    bold: '700'
  },
  height: { initial: 'auto' },
  left: { initial: 'auto' },
  letterSpacing: { initial: 'normal' },
  lineHeight: {
    initial: '120%',
    normal: '120%'
  },
  marginBottom: { initial: '0px' },
  marginLeft: { initial: '0px' },
  marginRight: { initial: '0px' },
  marginTop: { initial: '0px' },
  maxHeight: { initial: 'none' },
  maxWidth: { initial: 'none' },
  minHeight: { initial: '0px' },
  minWidth: { initial: '0px' },
  opacity: { initial: '1.0' },
  outlineColor: { initial: 'invert' },
  outlineOffset: { initial: '0px' },
  outlineWidth: borderWidthAliases,
  paddingBottom: { initial: '0px' },
  paddingLeft: { initial: '0px' },
  paddingRight: { initial: '0px' },
  paddingTop: { initial: '0px' },
  right: { initial: 'auto' },
  textIndent: { initial: '0px' },
  textShadow: {
    initial: '0px 0px 0px transparent',
    none: '0px 0px 0px transparent'
  },
  top: { initial: 'auto' },
  transform: {
    initial: '',
    none: ''
  },
  verticalAlign: { initial: '0px' },
  visibility: { initial: 'visible' },
  width: { initial: 'auto' },
  wordSpacing: { initial: 'normal' },
  zIndex: { initial: 'auto' }
};

var propertyIsSVGAttrib = function(property, target) {
  return target.namespaceURI === 'http://www.w3.org/2000/svg' &&
      property in svgProperties;
};

var getType = function(property) {
  return propertyTypes[property] || nonNumericType;
};

var add = function(property, base, delta) {
  if (delta === rawNeutralValue) {
    return base;
  }
  if (base === 'inherit' || delta === 'inherit') {
    return nonNumericType.add(base, delta);
  }
  return getType(property).add(base, delta);
};


/**
 * Interpolate the given property name (f*100)% of the way from 'from' to 'to'.
 * 'from' and 'to' are both raw values already converted from CSS value
 * strings. Requires the target element to be able to determine whether the
 * given property is an SVG attribute or not, as this impacts the conversion of
 * the interpolated value back into a CSS value string for transform
 * translations.
 *
 * e.g. interpolate('transform', elem, 'rotate(40deg)', 'rotate(50deg)', 0.3);
 *   will return 'rotate(43deg)'.
 */
var interpolate = function(property, from, to, f) {
  ASSERT_ENABLED && assert(
      isDefinedAndNotNull(from) && isDefinedAndNotNull(to),
      'Both to and from values should be specified for interpolation');
  if (from === 'inherit' || to === 'inherit') {
    return nonNumericType.interpolate(from, to, f);
  }
  if (f === 0) {
    return from;
  }
  if (f === 1) {
    return to;
  }
  return getType(property).interpolate(from, to, f);
};


/**
 * Convert the provided interpolable value for the provided property to a CSS
 * value string. Note that SVG transforms do not require units for translate
 * or rotate values while CSS properties require 'px' or 'deg' units.
 */
var toCssValue = function(property, value, svgMode) {
  if (value === 'inherit') {
    return value;
  }
  return getType(property).toCssValue(value, svgMode);
};

var fromCssValue = function(property, value) {
  if (value === cssNeutralValue) {
    return rawNeutralValue;
  }
  if (value === 'inherit') {
    return value;
  }
  if (property in propertyValueAliases &&
      value in propertyValueAliases[property]) {
    value = propertyValueAliases[property][value];
  }
  var result = getType(property).fromCssValue(value);
  // Currently we'll hit this assert if input to the API is bad. To avoid this,
  // we should eliminate invalid values when normalizing the list of keyframes.
  // See the TODO in isSupportedPropertyValue().
  ASSERT_ENABLED && assert(isDefinedAndNotNull(result),
      'Invalid property value "' + value + '" for property "' + property + '"');
  return result;
};

// Sentinel values
var cssNeutralValue = {};
var rawNeutralValue = {};



/** @constructor */
var CompositableValue = function() {
};

CompositableValue.prototype = {
  compositeOnto: abstractMethod,
  // This is purely an optimization.
  dependsOnUnderlyingValue: function() {
    return true;
  }
};



/** @constructor */
var AddReplaceCompositableValue = function(value, composite) {
  this.value = value;
  this.composite = composite;
  ASSERT_ENABLED && assert(
      !(this.value === cssNeutralValue && this.composite === 'replace'),
      'Should never replace-composite the neutral value');
};

AddReplaceCompositableValue.prototype = createObject(
    CompositableValue.prototype, {
      compositeOnto: function(property, underlyingValue) {
        switch (this.composite) {
          case 'replace':
            return this.value;
          case 'add':
            return add(property, underlyingValue, this.value);
          default:
            ASSERT_ENABLED && assert(
                false, 'Invalid composite operation ' + this.composite);
        }
      },
      dependsOnUnderlyingValue: function() {
        return this.composite === 'add';
      }
    });



/** @constructor */
var BlendedCompositableValue = function(startValue, endValue, fraction) {
  this.startValue = startValue;
  this.endValue = endValue;
  this.fraction = fraction;
};

BlendedCompositableValue.prototype = createObject(
    CompositableValue.prototype, {
      compositeOnto: function(property, underlyingValue) {
        return interpolate(property,
            this.startValue.compositeOnto(property, underlyingValue),
            this.endValue.compositeOnto(property, underlyingValue),
            this.fraction);
      },
      dependsOnUnderlyingValue: function() {
        // Travis crashes here randomly in Chrome beta and unstable,
        // this try catch is to help debug the problem.
        try {
          return this.startValue.dependsOnUnderlyingValue() ||
              this.endValue.dependsOnUnderlyingValue();
        }
        catch (error) {
          throw new Error(
              error + '\n JSON.stringify(this) = ' + JSON.stringify(this));
        }
      }
    });

/** @constructor */
var CompositedPropertyMap = function(target) {
  this.properties = {};
  this.baseValues = {};
  this.target = target;
};

CompositedPropertyMap.prototype = {
  addValue: function(property, animValue) {
    if (!(property in this.properties)) {
      this.properties[property] = [];
    }
    if (!(animValue instanceof CompositableValue)) {
      throw new TypeError('expected CompositableValue');
    }
    this.properties[property].push(animValue);
  },
  stackDependsOnUnderlyingValue: function(stack) {
    for (var i = 0; i < stack.length; i++) {
      if (!stack[i].dependsOnUnderlyingValue()) {
        return false;
      }
    }
    return true;
  },
  clear: function() {
    for (var property in this.properties) {
      if (this.stackDependsOnUnderlyingValue(this.properties[property])) {
        clearValue(this.target, property);
      }
    }
  },
  captureBaseValues: function() {
    for (var property in this.properties) {
      var stack = this.properties[property];
      if (stack.length > 0 && this.stackDependsOnUnderlyingValue(stack)) {
        var baseValue = fromCssValue(property, getValue(this.target, property));
        // TODO: Decide what to do with elements not in the DOM.
        ASSERT_ENABLED && assert(
            isDefinedAndNotNull(baseValue) && baseValue !== '',
            'Base value should always be set. ' +
            'Is the target element in the DOM?');
        this.baseValues[property] = baseValue;
      } else {
        this.baseValues[property] = undefined;
      }
    }
  },
  applyAnimatedValues: function() {
    for (var property in this.properties) {
      var valuesToComposite = this.properties[property];
      if (valuesToComposite.length === 0) {
        continue;
      }
      var baseValue = this.baseValues[property];
      var i = valuesToComposite.length - 1;
      while (i > 0 && valuesToComposite[i].dependsOnUnderlyingValue()) {
        i--;
      }
      for (; i < valuesToComposite.length; i++) {
        baseValue = valuesToComposite[i].compositeOnto(property, baseValue);
      }
      ASSERT_ENABLED && assert(
          isDefinedAndNotNull(baseValue) && baseValue !== '',
          'Value should always be set after compositing');
      var isSvgMode = propertyIsSVGAttrib(property, this.target);
      setValue(this.target, property, toCssValue(property, baseValue,
          isSvgMode));
      this.properties[property] = [];
    }
  }
};


var cssStyleDeclarationAttribute = {
  cssText: true,
  length: true,
  parentRule: true,
  'var': true
};

var cssStyleDeclarationMethodModifiesStyle = {
  getPropertyValue: false,
  getPropertyCSSValue: false,
  removeProperty: true,
  getPropertyPriority: false,
  setProperty: true,
  item: false
};

var copyInlineStyle = function(sourceStyle, destinationStyle) {
  for (var i = 0; i < sourceStyle.length; i++) {
    var property = sourceStyle[i];
    destinationStyle[property] = sourceStyle[property];
  }
};

var retickThenGetComputedStyle = function() {
  repeatLastTick();
  ensureOriginalGetComputedStyle();
  return window.getComputedStyle.apply(this, arguments);
};

// This redundant flag is to support Safari which has trouble determining
// function object equality during an animation.
var isGetComputedStylePatched = false;
var originalGetComputedStyle = window.getComputedStyle;

var ensureRetickBeforeGetComputedStyle = function() {
  if (!isGetComputedStylePatched) {
    Object.defineProperty(window, 'getComputedStyle', configureDescriptor({
      value: retickThenGetComputedStyle
    }));
    isGetComputedStylePatched = true;
  }
};

var ensureOriginalGetComputedStyle = function() {
  if (isGetComputedStylePatched) {
    Object.defineProperty(window, 'getComputedStyle', configureDescriptor({
      value: originalGetComputedStyle
    }));
    isGetComputedStylePatched = false;
  }
};

// Changing the inline style of an element under animation may require the
// animation to be recomputed ontop of the new inline style if
// getComputedStyle() is called inbetween setting the style and the next
// animation frame.
// We modify getComputedStyle() to re-evaluate the animations only if it is
// called instead of re-evaluating them here potentially unnecessarily.
var animatedInlineStyleChanged = function() {
  maybeRestartAnimation();
  ensureRetickBeforeGetComputedStyle();
};



/** @constructor */
var AnimatedCSSStyleDeclaration = function(element) {
  ASSERT_ENABLED && assert(
      !(element.style instanceof AnimatedCSSStyleDeclaration),
      'Element must not already have an animated style attached.');

  // Stores the inline style of the element on its behalf while the
  // polyfill uses the element's inline style to simulate web animations.
  // This is needed to fake regular inline style CSSOM access on the element.
  this._surrogateElement = createDummyElement();
  this._style = element.style;
  this._length = 0;
  this._isAnimatedProperty = {};

  // Populate the surrogate element's inline style.
  copyInlineStyle(this._style, this._surrogateElement.style);
  this._updateIndices();
};

AnimatedCSSStyleDeclaration.prototype = {
  get cssText() {
    return this._surrogateElement.style.cssText;
  },
  set cssText(text) {
    var isAffectedProperty = {};
    for (var i = 0; i < this._surrogateElement.style.length; i++) {
      isAffectedProperty[this._surrogateElement.style[i]] = true;
    }
    this._surrogateElement.style.cssText = text;
    this._updateIndices();
    for (var i = 0; i < this._surrogateElement.style.length; i++) {
      isAffectedProperty[this._surrogateElement.style[i]] = true;
    }
    for (var property in isAffectedProperty) {
      if (!this._isAnimatedProperty[property]) {
        this._style.setProperty(property,
            this._surrogateElement.style.getPropertyValue(property));
      }
    }
    animatedInlineStyleChanged();
  },
  get length() {
    return this._surrogateElement.style.length;
  },
  get parentRule() {
    return this._style.parentRule;
  },
  get 'var'() {
    return this._style.var;
  },
  _updateIndices: function() {
    while (this._length < this._surrogateElement.style.length) {
      Object.defineProperty(this, this._length, {
        configurable: true,
        enumerable: false,
        get: (function(index) {
          return function() {
            return this._surrogateElement.style[index];
          };
        })(this._length)
      });
      this._length++;
    }
    while (this._length > this._surrogateElement.style.length) {
      this._length--;
      Object.defineProperty(this, this._length, {
        configurable: true,
        enumerable: false,
        value: undefined
      });
    }
  },
  _clearAnimatedProperty: function(property) {
    this._style[property] = this._surrogateElement.style[property];
    this._isAnimatedProperty[property] = false;
  },
  _setAnimatedProperty: function(property, value) {
    this._style[property] = value;
    this._isAnimatedProperty[property] = true;
  }
};

for (var method in cssStyleDeclarationMethodModifiesStyle) {
  AnimatedCSSStyleDeclaration.prototype[method] =
      (function(method, modifiesStyle) {
    return function() {
      var result = this._surrogateElement.style[method].apply(
          this._surrogateElement.style, arguments);
      if (modifiesStyle) {
        if (!this._isAnimatedProperty[arguments[0]]) {
          this._style[method].apply(this._style, arguments);
        }
        this._updateIndices();
        animatedInlineStyleChanged();
      }
      return result;
    }
  })(method, cssStyleDeclarationMethodModifiesStyle[method]);
}

for (var property in document.documentElement.style) {
  if (cssStyleDeclarationAttribute[property] ||
      property in cssStyleDeclarationMethodModifiesStyle) {
    continue;
  }
  (function(property) {
    Object.defineProperty(AnimatedCSSStyleDeclaration.prototype, property,
        configureDescriptor({
          get: function() {
            return this._surrogateElement.style[property];
          },
          set: function(value) {
            this._surrogateElement.style[property] = value;
            this._updateIndices();
            if (!this._isAnimatedProperty[property]) {
              this._style[property] = value;
            }
            animatedInlineStyleChanged();
          }
        }));
  })(property);
}

// This function is a fallback for when we can't replace an element's style with
// AnimatatedCSSStyleDeclaration and must patch the existing style to behave
// in a similar way.
// Only the methods listed in cssStyleDeclarationMethodModifiesStyle will
// be patched to behave in the same manner as a native implementation,
// getter properties like style.left or style[0] will be tainted by the
// polyfill's animation engine.
var patchInlineStyleForAnimation = function(style) {
  var surrogateElement = document.createElement('div');
  copyInlineStyle(style, surrogateElement.style);
  var isAnimatedProperty = {};
  for (var method in cssStyleDeclarationMethodModifiesStyle) {
    if (!(method in style)) {
      continue;
    }
    Object.defineProperty(style, method, configureDescriptor({
      value: (function(method, originalMethod, modifiesStyle) {
        return function() {
          var result = surrogateElement.style[method].apply(
              surrogateElement.style, arguments);
          if (modifiesStyle) {
            if (!isAnimatedProperty[arguments[0]]) {
              originalMethod.apply(style, arguments);
            }
            animatedInlineStyleChanged();
          }
          return result;
        }
      })(method, style[method], cssStyleDeclarationMethodModifiesStyle[method])
    }));
  }

  style._clearAnimatedProperty = function(property) {
    this[property] = surrogateElement.style[property];
    isAnimatedProperty[property] = false;
  };

  style._setAnimatedProperty = function(property, value) {
    this[property] = value;
    isAnimatedProperty[property] = true;
  };
};



/** @constructor */
var Compositor = function() {
  this.targets = [];
};

Compositor.prototype = {
  setAnimatedValue: function(target, property, animValue) {
    if (target !== null) {
      if (target._animProperties === undefined) {
        target._animProperties = new CompositedPropertyMap(target);
        this.targets.push(target);
      }
      target._animProperties.addValue(property, animValue);
    }
  },
  applyAnimatedValues: function() {
    for (var i = 0; i < this.targets.length; i++) {
      this.targets[i]._animProperties.clear();
    }
    for (var i = 0; i < this.targets.length; i++) {
      this.targets[i]._animProperties.captureBaseValues();
    }
    for (var i = 0; i < this.targets.length; i++) {
      this.targets[i]._animProperties.applyAnimatedValues();
    }
  }
};

var ensureTargetInitialised = function(property, target) {
  if (propertyIsSVGAttrib(property, target)) {
    ensureTargetSVGInitialised(property, target);
  } else {
    ensureTargetCSSInitialised(target);
  }
};

var ensureTargetSVGInitialised = function(property, target) {
  if (!isDefinedAndNotNull(target._actuals)) {
    target._actuals = {};
    target._bases = {};
    target.actuals = {};
    target._getAttribute = target.getAttribute;
    target._setAttribute = target.setAttribute;
    target.getAttribute = function(name) {
      if (isDefinedAndNotNull(target._bases[name])) {
        return target._bases[name];
      }
      return target._getAttribute(name);
    };
    target.setAttribute = function(name, value) {
      if (isDefinedAndNotNull(target._actuals[name])) {
        target._bases[name] = value;
      } else {
        target._setAttribute(name, value);
      }
    };
  }
  if (!isDefinedAndNotNull(target._actuals[property])) {
    var baseVal = target.getAttribute(property);
    target._actuals[property] = 0;
    target._bases[property] = baseVal;

    Object.defineProperty(target.actuals, property, configureDescriptor({
      set: function(value) {
        if (value === null) {
          target._actuals[property] = target._bases[property];
          target._setAttribute(property, target._bases[property]);
        } else {
          target._actuals[property] = value;
          target._setAttribute(property, value);
        }
      },
      get: function() {
        return target._actuals[property];
      }
    }));
  }
};

var ensureTargetCSSInitialised = function(target) {
  if (target.style._webAnimationsStyleInitialised) {
    return;
  }
  try {
    var animatedStyle = new AnimatedCSSStyleDeclaration(target);
    Object.defineProperty(target, 'style', configureDescriptor({
      get: function() { return animatedStyle; }
    }));
  } catch (error) {
    patchInlineStyleForAnimation(target.style);
  }
  target.style._webAnimationsStyleInitialised = true;
};

var setValue = function(target, property, value) {
  ensureTargetInitialised(property, target);
  property = prefixProperty(property);
  if (propertyIsSVGAttrib(property, target)) {
    target.actuals[property] = value;
  } else {
    target.style._setAnimatedProperty(property, value);
  }
};

var clearValue = function(target, property) {
  ensureTargetInitialised(property, target);
  property = prefixProperty(property);
  if (propertyIsSVGAttrib(property, target)) {
    target.actuals[property] = null;
  } else {
    target.style._clearAnimatedProperty(property);
  }
};

var getValue = function(target, property) {
  ensureTargetInitialised(property, target);
  property = prefixProperty(property);
  if (propertyIsSVGAttrib(property, target)) {
    return target.actuals[property];
  } else {
    return getComputedStyle(target)[property];
  }
};

var rafScheduled = false;

var compositor = new Compositor();

var usePerformanceTiming =
    typeof window.performance === 'object' &&
    typeof window.performance.timing === 'object' &&
    typeof window.performance.now === 'function';

// Don't use a local named requestAnimationFrame, to avoid potential problems
// with hoisting.
var nativeRaf = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
var raf;
if (nativeRaf) {
  raf = function(callback) {
    nativeRaf(function() {
      callback(clockMillis());
    });
  };
} else {
  raf = function(callback) {
    setTimeout(function() {
      callback(clockMillis());
    }, 1000 / 60);
  };
}

var clockMillis = function() {
  return usePerformanceTiming ? window.performance.now() : Date.now();
};
// Set up the zero times for document time. Document time is relative to the
// document load event.
var documentTimeZeroAsRafTime;
var documentTimeZeroAsClockTime;
var load;
if (usePerformanceTiming) {
  load = function() {
    // RAF time is relative to the navigationStart event.
    documentTimeZeroAsRafTime =
        window.performance.timing.loadEventStart -
        window.performance.timing.navigationStart;
    // performance.now() uses the same origin as RAF time.
    documentTimeZeroAsClockTime = documentTimeZeroAsRafTime;
  };
} else {
  // The best approximation we have for the relevant clock and RAF times is to
  // listen to the load event.
  load = function() {
    raf(function(rafTime) {
      documentTimeZeroAsRafTime = rafTime;
    });
    documentTimeZeroAsClockTime = Date.now();
  };
}
// Start timing when load event fires or if this script is processed when
// document loading is already complete.
if (document.readyState === 'complete') {
  // When performance timing is unavailable and this script is loaded
  // dynamically, document zero time is incorrect.
  // Warn the user in this case.
  if (!usePerformanceTiming) {
    console.warn(
        'Web animations can\'t discover document zero time when ' +
        'asynchronously loaded in the absence of performance timing.');
  }
  load();
} else {
  addEventListener('load', function() {
    load();
    if (usePerformanceTiming) {
      // We use setTimeout() to clear cachedClockTimeMillis at the end of a
      // frame, but this will not run until after other load handlers. We need
      // those handlers to pick up the new value of clockMillis(), so we must
      // clear the cached value.
      cachedClockTimeMillis = undefined;
    }
  });
}

// A cached document time for use during the current callstack.
var cachedClockTimeMillis;
// Calculates one time relative to another, returning null if the zero time is
// undefined.
var relativeTime = function(time, zeroTime) {
  return isDefined(zeroTime) ? time - zeroTime : null;
};

var lastClockTimeMillis;

var cachedClockTime = function() {
  // Cache a document time for the remainder of this callstack.
  if (!isDefined(cachedClockTimeMillis)) {
    cachedClockTimeMillis = clockMillis();
    lastClockTimeMillis = cachedClockTimeMillis;
    setTimeout(function() { cachedClockTimeMillis = undefined; }, 0);
  }
  return cachedClockTimeMillis;
};


// These functions should be called in every stack that could possibly modify
// the effect results that have already been calculated for the current tick.
var modifyCurrentAnimationStateDepth = 0;
var enterModifyCurrentAnimationState = function() {
  modifyCurrentAnimationStateDepth++;
};
var exitModifyCurrentAnimationState = function(updateCallback) {
  modifyCurrentAnimationStateDepth--;
  // updateCallback is set to null when we know we can't possibly affect the
  // current state (eg. a TimedItem which is not attached to a player). We track
  // the depth of recursive calls trigger just one repeat per entry. Only the
  // updateCallback from the outermost call is considered, this allows certain
  // locatations (eg. constructors) to override nested calls that would
  // otherwise set updateCallback unconditionally.
  if (modifyCurrentAnimationStateDepth === 0 && updateCallback) {
    updateCallback();
  }
};

var repeatLastTick = function() {
  if (isDefined(lastTickTime)) {
    ticker(lastTickTime, true);
  }
};

var playerSortFunction = function(a, b) {
  var result = a.startTime - b.startTime;
  return result !== 0 ? result : a._sequenceNumber - b._sequenceNumber;
};

var lastTickTime;
var ticker = function(rafTime, isRepeat) {
  // Don't tick till the page is loaded....
  if (!isDefined(documentTimeZeroAsRafTime)) {
    raf(ticker);
    return;
  }

  if (!isRepeat) {
    if (rafTime < lastClockTimeMillis) {
      rafTime = lastClockTimeMillis;
    }
    lastTickTime = rafTime;
    cachedClockTimeMillis = rafTime;
  }

  // Clear any modifications to getComputedStyle.
  ensureOriginalGetComputedStyle();

  // Get animations for this sample. We order by AnimationPlayer then by DFS
  // order within each AnimationPlayer's tree.
  if (!playersAreSorted) {
    PLAYERS.sort(playerSortFunction);
    playersAreSorted = true;
  }
  var finished = true;
  var paused = true;
  var animations = [];
  var finishedPlayers = [];
  PLAYERS.forEach(function(player) {
    player._update();
    finished = finished && !player._hasFutureAnimation();
    if (!player._hasFutureEffect()) {
      finishedPlayers.push(player);
    }
    paused = paused && player.paused;
    player._getLeafItemsInEffect(animations);
  });

  // Apply animations in order
  for (var i = 0; i < animations.length; i++) {
    if (animations[i] instanceof Animation) {
      animations[i]._sample();
    }
  }

  // Generate events
  PLAYERS.forEach(function(player) {
    player._generateEvents();
  });

  // Remove finished players. Warning: _deregisterFromTimeline modifies
  // the PLAYER list. It should not be called from within a PLAYERS.forEach
  // loop directly.
  finishedPlayers.forEach(function(player) {
    player._deregisterFromTimeline();
    playersAreSorted = false;
  });

  // Composite animated values into element styles
  compositor.applyAnimatedValues();

  if (!isRepeat) {
    if (finished || paused) {
      rafScheduled = false;
    } else {
      raf(ticker);
    }
    cachedClockTimeMillis = undefined;
  }
};

// Multiplication where zero multiplied by any value (including infinity)
// gives zero.
var multiplyZeroGivesZero = function(a, b) {
  return (a === 0 || b === 0) ? 0 : a * b;
};

var maybeRestartAnimation = function() {
  if (rafScheduled) {
    return;
  }
  raf(ticker);
  rafScheduled = true;
};

var DOCUMENT_TIMELINE = new AnimationTimeline(constructorToken);
// attempt to override native implementation
try {
  Object.defineProperty(document, 'timeline', {
    configurable: true,
    get: function() { return DOCUMENT_TIMELINE }
  });
} catch (e) { }
// maintain support for Safari
try {
  document.timeline = DOCUMENT_TIMELINE;
} catch (e) { }

window.Element.prototype.animate = function(effect, timing) {
  var anim = new Animation(this, effect, timing);
  DOCUMENT_TIMELINE.play(anim);
  return anim.player;
};
window.Element.prototype.getCurrentPlayers = function() {
  return PLAYERS.filter((function(player) {
    return player._isCurrent() && player._isTargetingElement(this);
  }).bind(this));
};
window.Element.prototype.getCurrentAnimations = function() {
  var animations = [];
  PLAYERS.forEach((function(player) {
    if (player._isCurrent()) {
      player._getAnimationsTargetingElement(this, animations);
    }
  }).bind(this));
  return animations;
};

window.Animation = Animation;
window.AnimationEffect = AnimationEffect;
window.AnimationGroup = AnimationGroup;
window.AnimationPlayer = AnimationPlayer;
window.AnimationSequence = AnimationSequence;
window.AnimationTimeline = AnimationTimeline;
window.KeyframeEffect = KeyframeEffect;
window.MediaReference = MediaReference;
window.MotionPathEffect = MotionPathEffect;
window.PseudoElementReference = PseudoElementReference;
window.TimedItem = TimedItem;
window.TimedItemList = TimedItemList;
window.Timing = Timing;
window.TimingEvent = TimingEvent;
window.TimingGroup = TimingGroup;

window._WebAnimationsTestingUtilities = {
  _constructorToken: constructorToken,
  _deprecated: deprecated,
  _positionListType: positionListType,
  _hsl2rgb: hsl2rgb,
  _types: propertyTypes,
  _knownPlayers: PLAYERS,
  _pacedTimingFunction: PacedTimingFunction,
  _prefixProperty: prefixProperty,
  _propertyIsSVGAttrib: propertyIsSVGAttrib
};

})();
;

  (function () {
    var JuicyHTMLPrototype = Object.create( (HTMLTemplateElement || HTMLElement ).prototype);

    JuicyHTMLPrototype.loadTemplate_ = function() {
      var val = this.getAttribute('content');
      if (val && (val.indexOf('/') === 0 || val.indexOf('./') === 0)) {
        //val is a URL, load the partial from the HTTP server/cache
        var oReq = new XMLHttpRequest();
        var that = this;
        oReq.onload = function (event) {
          that.reattachTemplate_(event.target.responseText);
        };
        oReq.open("GET", val, true);
        oReq.send();
      }
      else {
        //val is HTML code, insert the partial from the string
        this.reattachTemplate_(val);
      }
    };

    JuicyHTMLPrototype.reattachTemplate_ = function(html) {
      if( this.subTemplate ){
        // IDEA: or maybe just this.subTempalte.clear()? - to leave lightDOM template untouched (tomalec)
        this.clear();
      } else {
        this.subTemplate = document.createElement("template");
      }
      this.subTemplate.setAttribute("bind", this.getAttribute("bind") || "");
      this.subTemplate.setAttribute("repeat", this.getAttribute("repeat") );
      this.subTemplate.setAttribute("if", this.getAttribute("if") );
      this.subTemplate.innerHTML = html;
      this.parentNode.insertBefore(this.subTemplate, this.nextSibling);
      if(window.PolymerExpressions) {
        this.subTemplate.bindingDelegate = new PolymerExpressions; //use PolymerExpressions if available. This allows <template if="{{val == 1}}">, etc
      }
      this.subTemplate.model = this.model;

    };

    /**
     * Empty xhml content.
     * @TODO clear also siblings for `juicy-html[currentnode]`
     * @requires HTMLTemplateElement#clear (https://github.com/Polymer/TemplateBinding/blob/51df59c16e0922dec041cfe604016aac00918d5d/src/TemplateBinding.js#L595)
     * @extends HTMLTemplateElement.prototype.clear
     * @return  see HTMLTemplateElement.prototype.clear
     */
    JuicyHTMLPrototype.clear = function(){
      return this.subTemplate.clear() && HTMLTemplateElement.prototype.clear.call(this);
    }


    JuicyHTMLPrototype.attachedCallback = function () {
      var that = this;
      this.loadTemplate_();

      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          if (mutation.type === "attributes" && mutation.attributeName === "content") {
            that.loadTemplate_();
          }
        });
      });
      observer.observe(this, {
        attributes: true
      });

      return true;
    };

    document.register('juicy-html', {
      prototype: JuicyHTMLPrototype,
      extends: "template"
    });
  })();
;

(function(){
  var importDoc = document.currentScript.ownerDocument
  var LoadingWave = Object.create(HTMLElement.prototype);

  LoadingWave.attachedCallback = function (){
    var background = '#FFF';
    if(this.attributes.background){
      background = this.attributes.background.value;
    }

    var root = this.createShadowRoot();

    var t = importDoc.querySelector('#loadingTemplate')
    var clone = document.importNode(t.content, true);
    clone.querySelector('.loading-full').style.background = background;

    root.appendChild(clone);
  }

  var loading = document.registerElement('loading-wave', {
    prototype: LoadingWave
  });
})();
;


    Polymer('core-xhr', {

      /**
       * Sends a HTTP request to the server and returns the XHR object.
       *
       * @method request
       * @param {Object} inOptions
       *    @param {String} inOptions.url The url to which the request is sent.
       *    @param {String} inOptions.method The HTTP method to use, default is GET.
       *    @param {boolean} inOptions.sync By default, all requests are sent asynchronously. To send synchronous requests, set to true.
       *    @param {Object} inOptions.params Data to be sent to the server.
       *    @param {Object} inOptions.body The content for the request body for POST method.
       *    @param {Object} inOptions.headers HTTP request headers.
       *    @param {String} inOptions.responseType The response type. Default is 'text'.
       *    @param {boolean} inOptions.withCredentials Whether or not to send credentials on the request. Default is false.
       *    @param {Object} inOptions.callback Called when request is completed.
       * @returns {Object} XHR object.
       */
      request: function(options) {
        var xhr = new XMLHttpRequest();
        var url = options.url;
        var method = options.method || 'GET';
        var async = !options.sync;
        //
        var params = this.toQueryString(options.params);
        if (params && method == 'GET') {
          url += (url.indexOf('?') > 0 ? '&' : '?') + params;
        }
        var xhrParams = this.isBodyMethod(method) ? (options.body || params) : null;
        //
        xhr.open(method, url, async);
        if (options.responseType) {
          xhr.responseType = options.responseType;
        }
        if (options.withCredentials) {
          xhr.withCredentials = true;
        }
        this.makeReadyStateHandler(xhr, options.callback);
        this.setRequestHeaders(xhr, options.headers);
        xhr.send(xhrParams);
        if (!async) {
          xhr.onreadystatechange(xhr);
        }
        return xhr;
      },
    
      toQueryString: function(params) {
        var r = [];
        for (var n in params) {
          var v = params[n];
          n = encodeURIComponent(n);
          r.push(v == null ? n : (n + '=' + encodeURIComponent(v)));
        }
        return r.join('&');
      },

      isBodyMethod: function(method) {
        return this.bodyMethods[(method || '').toUpperCase()];
      },
      
      bodyMethods: {
        POST: 1,
        PUT: 1,
        DELETE: 1
      },

      makeReadyStateHandler: function(xhr, callback) {
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4) {
            callback && callback.call(null, xhr.response, xhr);
          }
        };
      },

      setRequestHeaders: function(xhr, headers) {
        if (headers) {
          for (var name in headers) {
            xhr.setRequestHeader(name, headers[name]);
          }
        }
      }

    });

  ;


  Polymer('core-ajax', {
    /**
     * Fired when a response is received.
     *
     * @event core-response
     */

    /**
     * Fired when an error is received.
     *
     * @event core-error
     */

    /**
     * Fired whenever a response or an error is received.
     *
     * @event core-complete
     */

    /**
     * The URL target of the request.
     *
     * @attribute url
     * @type string
     * @default ''
     */
    url: '',

    /**
     * Specifies what data to store in the `response` property, and
     * to deliver as `event.response` in `response` events.
     *
     * One of:
     *
     *    `text`: uses `XHR.responseText`.
     *
     *    `xml`: uses `XHR.responseXML`.
     *
     *    `json`: uses `XHR.responseText` parsed as JSON.
     *
     *    `arraybuffer`: uses `XHR.response`.
     *
     *    `blob`: uses `XHR.response`.
     *
     *    `document`: uses `XHR.response`.
     *
     * @attribute handleAs
     * @type string
     * @default 'text'
     */
    handleAs: '',

    /**
     * If true, automatically performs an Ajax request when either `url` or `params` changes.
     *
     * @attribute auto
     * @type boolean
     * @default false
     */
    auto: false,

    /**
     * Parameters to send to the specified URL, as JSON.
     *
     * @attribute params
     * @type string (JSON)
     * @default ''
     */
    params: '',

    /**
     * The response for the most recently made request, or null if it hasn't
     * completed yet or the request resulted in error.
     *
     * @attribute response
     * @type Object
     * @default null
     */
    response: null,

    /**
     * The error for the most recently made request, or null if it hasn't
     * completed yet or the request resulted in success.
     *
     * @attribute error
     * @type Object
     * @default null
     */
    error: null,

    /**
     * The HTTP method to use such as 'GET', 'POST', 'PUT', or 'DELETE'.
     * Default is 'GET'.
     *
     * @attribute method
     * @type string
     * @default ''
     */
    method: '',

    /**
     * HTTP request headers to send.
     *
     * Example:
     *
     *     <core-ajax
     *         auto
     *         url="http://somesite.com"
     *         headers='{"X-Requested-With": "XMLHttpRequest"}'
     *         handleAs="json"
     *         on-core-response="{{handleResponse}}"></core-ajax>
     *
     * @attribute headers
     * @type Object
     * @default null
     */
    headers: null,

    /**
     * Optional raw body content to send when method === "POST".
     *
     * Example:
     *
     *     <core-ajax method="POST" auto url="http://somesite.com"
     *         body='{"foo":1, "bar":2}'>
     *     </core-ajax>
     *
     * @attribute body
     * @type Object
     * @default null
     */
    body: null,

    /**
     * Content type to use when sending data.
     *
     * @attribute contentType
     * @type string
     * @default 'application/x-www-form-urlencoded'
     */
    contentType: 'application/x-www-form-urlencoded',

    /**
     * Set the withCredentials flag on the request.
     *
     * @attribute withCredentials
     * @type boolean
     * @default false
     */
    withCredentials: false,

    /**
     * Additional properties to send to core-xhr.
     *
     * Can be set to an object containing default properties
     * to send as arguments to the `core-xhr.request()` method
     * which implements the low-level communication.
     *
     * @property xhrArgs
     * @type Object
     * @default null
     */
    xhrArgs: null,

    ready: function() {
      this.xhr = document.createElement('core-xhr');
    },

    receive: function(response, xhr) {
      if (this.isSuccess(xhr)) {
        this.processResponse(xhr);
      } else {
        this.processError(xhr);
      }
      this.complete(xhr);
    },

    isSuccess: function(xhr) {
      var status = xhr.status || 0;
      return !status || (status >= 200 && status < 300);
    },

    processResponse: function(xhr) {
      var response = this.evalResponse(xhr);
      if (xhr === this.activeRequest) {
        this.response = response;
      }
      this.fire('core-response', {response: response, xhr: xhr});
    },

    processError: function(xhr) {
      var response = xhr.status + ': ' + xhr.responseText;
      if (xhr === this.activeRequest) {
        this.error = response;
      }
      this.fire('core-error', {response: response, xhr: xhr});
    },

    complete: function(xhr) {
      this.fire('core-complete', {response: xhr.status, xhr: xhr});
    },

    evalResponse: function(xhr) {
      return this[(this.handleAs || 'text') + 'Handler'](xhr);
    },

    xmlHandler: function(xhr) {
      return xhr.responseXML;
    },

    textHandler: function(xhr) {
      return xhr.responseText;
    },

    jsonHandler: function(xhr) {
      var r = xhr.responseText;
      try {
        return JSON.parse(r);
      } catch (x) {
        console.warn('core-ajax caught an exception trying to parse response as JSON:');
        console.warn('url:', this.url);
        console.warn(x);
        return r;
      }
    },

    documentHandler: function(xhr) {
      return xhr.response;
    },

    blobHandler: function(xhr) {
      return xhr.response;
    },

    arraybufferHandler: function(xhr) {
      return xhr.response;
    },

    urlChanged: function() {
      if (!this.handleAs) {
        var ext = String(this.url).split('.').pop();
        switch (ext) {
          case 'json':
            this.handleAs = 'json';
            break;
        }
      }
      this.autoGo();
    },

    paramsChanged: function() {
      this.autoGo();
    },

    autoChanged: function() {
      this.autoGo();
    },

    // TODO(sorvell): multiple side-effects could call autoGo
    // during one micro-task, use a job to have only one action
    // occur
    autoGo: function() {
      if (this.auto) {
        this.goJob = this.job(this.goJob, this.go, 0);
      }
    },

    /**
     * Performs an Ajax request to the specified URL.
     *
     * @method go
     */
    go: function() {
      var args = this.xhrArgs || {};
      // TODO(sjmiles): we may want XHR to default to POST if body is set
      args.body = this.body || args.body;
      args.params = this.params || args.params;
      if (args.params && typeof(args.params) == 'string') {
        args.params = JSON.parse(args.params);
      }
      args.headers = this.headers || args.headers || {};
      if (args.headers && typeof(args.headers) == 'string') {
        args.headers = JSON.parse(args.headers);
      }
      var hasContentType = Object.keys(args.headers).some(function (header) {
        return header.toLowerCase() === 'content-type';
      });
      if (!hasContentType && this.contentType) {
        args.headers['Content-Type'] = this.contentType;
      }
      if (this.handleAs === 'arraybuffer' || this.handleAs === 'blob' ||
          this.handleAs === 'document') {
        args.responseType = this.handleAs;
      }
      args.withCredentials = this.withCredentials;
      args.callback = this.receive.bind(this);
      args.url = this.url;
      args.method = this.method;

      this.response = this.error = null;
      this.activeRequest = args.url && this.xhr.request(args);
      return this.activeRequest;
    }

  });

;


  (function() {
    
    var SKIP_ID = 'meta';
    var metaData = {}, metaArray = {};

    Polymer('core-meta', {
      
      /**
       * The type of meta-data.  All meta-data with the same type with be
       * stored together.
       * 
       * @attribute type
       * @type string
       * @default 'default'
       */
      type: 'default',
      
      alwaysPrepare: true,
      
      ready: function() {
        this.register(this.id);
      },
      
      get metaArray() {
        var t = this.type;
        if (!metaArray[t]) {
          metaArray[t] = [];
        }
        return metaArray[t];
      },
      
      get metaData() {
        var t = this.type;
        if (!metaData[t]) {
          metaData[t] = {};
        }
        return metaData[t];
      },
      
      register: function(id, old) {
        if (id && id !== SKIP_ID) {
          this.unregister(this, old);
          this.metaData[id] = this;
          this.metaArray.push(this);
        }
      },
      
      unregister: function(meta, id) {
        delete this.metaData[id || meta.id];
        var i = this.metaArray.indexOf(meta);
        if (i >= 0) {
          this.metaArray.splice(i, 1);
        }
      },
      
      /**
       * Returns a list of all meta-data elements with the same type.
       * 
       * @property list
       * @type array
       * @default []
       */
      get list() {
        return this.metaArray;
      },
      
      /**
       * Retrieves meta-data by ID.
       *
       * @method byId
       * @param {String} id The ID of the meta-data to be returned.
       * @returns Returns meta-data.
       */
      byId: function(id) {
        return this.metaData[id];
      }
      
    });
    
  })();
  
;

  
    Polymer('core-iconset', {
  
      /**
       * The URL of the iconset image.
       *
       * @attribute src
       * @type string
       * @default ''
       */
      src: '',

      /**
       * The width of the iconset image. This must only be specified if the
       * icons are arranged into separate rows inside the image.
       *
       * @attribute width
       * @type number
       * @default 0
       */
      width: 0,

      /**
       * A space separated list of names corresponding to icons in the iconset
       * image file. This list must be ordered the same as the icon images
       * in the image file.
       *
       * @attribute icons
       * @type string
       * @default ''
       */
      icons: '',

      /**
       * The size of an individual icon. Note that icons must be square.
       *
       * @attribute iconSize
       * @type number
       * @default 24
       */
      iconSize: 24,

      /**
       * The horizontal offset of the icon images in the inconset src image.
       * This is typically used if the image resource contains additional images
       * beside those intended for the iconset.
       *
       * @attribute offsetX
       * @type number
       * @default 0
       */
      offsetX: 0,
      /**
       * The vertical offset of the icon images in the inconset src image.
       * This is typically used if the image resource contains additional images
       * beside those intended for the iconset.
       *
       * @attribute offsetY
       * @type number
       * @default 0
       */
      offsetY: 0,
      type: 'iconset',

      created: function() {
        this.iconMap = {};
        this.iconNames = [];
        this.themes = {};
      },
  
      ready: function() {
        // TODO(sorvell): ensure iconset's src is always relative to the main
        // document
        if (this.src && (this.ownerDocument !== document)) {
          this.src = this.resolvePath(this.src, this.ownerDocument.baseURI);
        }
        this.super();
        this.updateThemes();
      },

      iconsChanged: function() {
        var ox = this.offsetX;
        var oy = this.offsetY;
        this.icons && this.icons.split(/\s+/g).forEach(function(name, i) {
          this.iconNames.push(name);
          this.iconMap[name] = {
            offsetX: ox,
            offsetY: oy
          }
          if (ox + this.iconSize < this.width) {
            ox += this.iconSize;
          } else {
            ox = this.offsetX;
            oy += this.iconSize;
          }
        }, this);
      },

      updateThemes: function() {
        var ts = this.querySelectorAll('property[theme]');
        ts && ts.array().forEach(function(t) {
          this.themes[t.getAttribute('theme')] = {
            offsetX: parseInt(t.getAttribute('offsetX')) || 0,
            offsetY: parseInt(t.getAttribute('offsetY')) || 0
          };
        }, this);
      },

      // TODO(ffu): support retrived by index e.g. getOffset(10);
      /**
       * Returns an object containing `offsetX` and `offsetY` properties which
       * specify the pixel locaion in the iconset's src file for the given
       * `icon` and `theme`. It's uncommon to call this method. It is useful,
       * for example, to manually position a css backgroundImage to the proper
       * offset. It's more common to use the `applyIcon` method.
       *
       * @method getOffset
       * @param {String|Number} icon The name of the icon or the index of the
       * icon within in the icon image.
       * @param {String} theme The name of the theme.
       * @returns {Object} An object specifying the offset of the given icon 
       * within the icon resource file; `offsetX` is the horizontal offset and
       * `offsetY` is the vertical offset. Both values are in pixel units.
       */
      getOffset: function(icon, theme) {
        var i = this.iconMap[icon];
        if (!i) {
          var n = this.iconNames[Number(icon)];
          i = this.iconMap[n];
        }
        var t = this.themes[theme];
        if (i && t) {
          return {
            offsetX: i.offsetX + t.offsetX,
            offsetY: i.offsetY + t.offsetY
          }
        }
        return i;
      },

      /**
       * Applies an icon to the given element as a css background image. This
       * method does not size the element, and it's often necessary to set 
       * the element's height and width so that the background image is visible.
       *
       * @method applyIcon
       * @param {Element} element The element to which the background is
       * applied.
       * @param {String|Number} icon The name or index of the icon to apply.
       * @param {Number} scale (optional, defaults to 1) A scaling factor 
       * with which the icon can be magnified.
       * @return {Element} The icon element.
       */
      applyIcon: function(element, icon, scale) {
        var offset = this.getOffset(icon);
        scale = scale || 1;
        if (element && offset) {
          var icon = element._icon || document.createElement('div');
          var style = icon.style;
          style.backgroundImage = 'url(' + this.src + ')';
          style.backgroundPosition = (-offset.offsetX * scale + 'px') + 
             ' ' + (-offset.offsetY * scale + 'px');
          style.backgroundSize = scale === 1 ? 'auto' :
             this.width * scale + 'px';
          if (icon.parentNode !== element) {
            element.appendChild(icon);
          }
          return icon;
        }
      }

    });

  ;

(function() {
  
  // mono-state
  var meta;
  
  Polymer('core-icon', {

    /**
     * The URL of an image for the icon. If the src property is specified,
     * the icon property should not be.
     *
     * @attribute src
     * @type string
     * @default ''
     */
    src: '',

    /**
     * Specifies the icon name or index in the set of icons available in
     * the icon's icon set. If the icon property is specified,
     * the src property should not be.
     *
     * @attribute icon
     * @type string
     * @default ''
     */
    icon: '',

    /**
     * Alternative text content for accessibility support.
     * If alt is present and not empty, it will set the element's role to img and add an aria-label whose content matches alt.
     * If alt is present and is an empty string, '', it will hide the element from the accessibility layer
     * If alt is not present, it will set the element's role to img and the element will fallback to using the icon attribute for its aria-label.
     * 
     * @attribute alt
     * @type string
     * @default ''
     */
    alt: null,

    observe: {
      'icon': 'updateIcon',
      'alt': 'updateAlt'
    },

    defaultIconset: 'icons',

    ready: function() {
      if (!meta) {
        meta = document.createElement('core-iconset');
      }

      // Allow user-provided `aria-label` in preference to any other text alternative.
      if (this.hasAttribute('aria-label')) {
        // Set `role` if it has not been overridden.
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'img');
        }
        return;
      }
      this.updateAlt();
    },

    srcChanged: function() {
      var icon = this._icon || document.createElement('div');
      icon.textContent = '';
      icon.setAttribute('fit', '');
      icon.style.backgroundImage = 'url(' + this.src + ')';
      icon.style.backgroundPosition = 'center';
      icon.style.backgroundSize = '100%';
      if (!icon.parentNode) {
        this.appendChild(icon);
      }
      this._icon = icon;
    },

    getIconset: function(name) {
      return meta.byId(name || this.defaultIconset);
    },

    updateIcon: function(oldVal, newVal) {
      if (!this.icon) {
        this.updateAlt();
        return;
      }
      var parts = String(this.icon).split(':');
      var icon = parts.pop();
      if (icon) {
        var set = this.getIconset(parts.pop());
        if (set) {
          this._icon = set.applyIcon(this, icon);
          if (this._icon) {
            this._icon.setAttribute('fit', '');
          }
        }
      }
      // Check to see if we're using the old icon's name for our a11y fallback
      if (oldVal) {
        if (oldVal.split(':').pop() == this.getAttribute('aria-label')) {
          this.updateAlt();
        }
      }
    },

    updateAlt: function() {
      // Respect the user's decision to remove this element from
      // the a11y tree
      if (this.getAttribute('aria-hidden')) {
        return;
      }

      // Remove element from a11y tree if `alt` is empty, otherwise
      // use `alt` as `aria-label`.
      if (this.alt === '') {
        this.setAttribute('aria-hidden', 'true');
        if (this.hasAttribute('role')) {
          this.removeAttribute('role');
        }
        if (this.hasAttribute('aria-label')) {
          this.removeAttribute('aria-label');
        }
      } else {
        this.setAttribute('aria-label', this.alt ||
                                        this.icon.split(':').pop());
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'img');
        }
        if (this.hasAttribute('aria-hidden')) {
          this.removeAttribute('aria-hidden');
        }
      }
    }

  });
  
})();
;


    Polymer('core-iconset-svg', {


      /**
       * The size of an individual icon. Note that icons must be square.
       *
       * @attribute iconSize
       * @type number
       * @default 24
       */
      iconSize: 24,
      type: 'iconset',

      created: function() {
        this._icons = {};
      },

      ready: function() {
        this.super();
        this.updateIcons();
      },

      iconById: function(id) {
        return this._icons[id] || (this._icons[id] = this.querySelector('#' + id));
      },

      cloneIcon: function(id) {
        var icon = this.iconById(id);
        if (icon) {
          var content = icon.cloneNode(true);
          content.removeAttribute('id');
          var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          svg.setAttribute('viewBox', '0 0 ' + this.iconSize + ' ' +
              this.iconSize);
          // NOTE(dfreedm): work around https://crbug.com/370136
          svg.style.pointerEvents = 'none';
          svg.appendChild(content);
          return svg;
        }
      },

      get iconNames() {
        if (!this._iconNames) {
          this._iconNames = this.findIconNames();
        }
        return this._iconNames;
      },

      findIconNames: function() {
        var icons = this.querySelectorAll('[id]').array();
        if (icons.length) {
          return icons.map(function(n){ return n.id });
        }
      },

      /**
       * Applies an icon to the given element. The svg icon is added to the
       * element's shadowRoot if one exists or directly to itself.
       *
       * @method applyIcon
       * @param {Element} element The element to which the icon is
       * applied.
       * @param {String|Number} icon The name the icon to apply.
       * @return {Element} The icon element
       */
      applyIcon: function(element, icon) {
        var root = element;
        // remove old
        var old = root.querySelector('svg');
        if (old) {
          old.remove();
        }
        // install new
        var svg = this.cloneIcon(icon);
        if (!svg) {
          return;
        }
        svg.setAttribute('height', '100%');
        svg.setAttribute('width', '100%');
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        svg.style.display = 'block';
        root.insertBefore(svg, root.firstElementChild);
        return svg;
      },
      
      /**
       * Tell users of the iconset, that the set has loaded.
       * This finds all elements matching the selector argument and calls 
       * the method argument on them.
       * @method updateIcons
       * @param selector {string} css selector to identify iconset users, 
       * defaults to '[icon]'
       * @param method {string} method to call on found elements, 
       * defaults to 'updateIcon'
       */
      updateIcons: function(selector, method) {
        selector = selector || '[icon]';
        method = method || 'updateIcon';
        var deep = window.ShadowDOMPolyfill ? '' : 'html /deep/ ';
        var i$ = document.querySelectorAll(deep + selector);
        for (var i=0, e; e=i$[i]; i++) {
          if (e[method]) {
            e[method].call(e);
          }
        }
      }
      

    });

  ;


  Polymer('core-localstorage', {
    
    /**
     * Fired when a value is loaded from localStorage.
     * @event core-localstorage-load
     */
     
    /**
     * The key to the data stored in localStorage.
     *
     * @attribute name
     * @type string
     * @default null
     */
    name: '',
    
    /**
     * The data associated with the specified name.
     *
     * @attribute value
     * @type object
     * @default null
     */
    value: null,
    
    /**
     * If true, the value is stored and retrieved without JSON processing.
     *
     * @attribute useRaw
     * @type boolean
     * @default false
     */
    useRaw: false,
    
    /**
     * If true, auto save is disabled.
     *
     * @attribute autoSaveDisabled
     * @type boolean
     * @default false
     */
    autoSaveDisabled: false,
    
    attached: function() {
      // wait for bindings are all setup
      this.async('load');
    },
    
    valueChanged: function() {
      if (this.loaded && !this.autoSaveDisabled) {
        this.save();
      }
    },
    
    load: function() {
      var v = localStorage.getItem(this.name);
      if (this.useRaw) {
        this.value = v;
      } else {
        // localStorage has a flaw that makes it difficult to determine
        // if a key actually exists or not (getItem returns null if the
        // key doesn't exist, which is not distinguishable from a stored
        // null value)
        // however, if not `useRaw`, an (unparsed) null value unambiguously
        // signals that there is no value in storage (a stored null value would
        // be escaped, i.e. "null")
        // in this case we save any non-null current (default) value
        if (v === null) {
          if (this.value != null) {
            this.save();
          }
        } else {
          try {
            v = JSON.parse(v);
          } catch(x) {
          }
          this.value = v;
        }
      }
      this.loaded = true;
      this.asyncFire('core-localstorage-load');
    },
    
    /** 
     * Saves the value to localStorage.
     *
     * @method save
     */
    save: function() {
      var v = this.useRaw ? this.value : JSON.stringify(this.value);
      localStorage.setItem(this.name, v);
    }
    
  });

;


  Polymer('core-image',{
    
    publish: {

      /**
       * The URL of an image.
       *
       * @attribute src
       * @type string
       * @default null
       */
      src: null,

      /**
       * When false, the image is prevented from loading and any placeholder is
       * shown.  This may be useful when a binding to the src property is known to
       * be invalid, to prevent 404 requests.
       *
       * @attribute src
       * @type string
       * @default null
       */
      load: true,

      /**
       * Sets a sizing option for the image.  Valid values are `contain` (full 
       * aspect ratio of the image is contained within the element and 
       * letterboxed) or `cover` (image is cropped in order to fully cover the
       * bounds of the element), or `null` (default: image takes natural size).
       *
       * @attribute sizing
       * @type string
       * @default null
       */
      sizing: null,

      /**
       * When a sizing option is uzed (`cover` or `contain`), this determines
       * how the image is aligned within the element bounds.
       *
       * @attribute position
       * @type string
       * @default 'center'
       */
      position: 'center',

      /**
       * When `true`, any change to the `src` property will cause the `placeholder`
       * image to be shown until the 
       *
       * @attribute preload
       * @type boolean
       * @default false
       */
      preload: false,

      /**
       * This image will be used as a background/placeholder until the src image has
       * loaded.  Use of a data-URI for placeholder is encouraged for instant rendering.
       *
       * @attribute placeholder
       * @type string
       * @default null
       */
      placeholder: null,

      /**
       * When `preload` is true, setting `fade` to true will cause the image to
       * fade into place.
       *
       * @attribute fade
       * @type boolean
       * @default false
       */
      fade: false,

      /**
       * Read-only value that tracks the loading state of the image when the `preload`
       * option is used.
       *
       * @attribute loading
       * @type boolean
       * @default false
       */
      loading: false

    },

    observe: {
      'preload color sizing position src fade': 'update'
    },

    update: function() {
      this.style.backgroundSize = this.sizing;
      this.style.backgroundPosition = this.sizing ? this.position : null;
      this.style.backgroundRepeat = this.sizing ? 'no-repeat' : null;
      if (this.preload) {
        if (this.fade) {
          if (!this._placeholderEl) {
            this._placeholderEl = this.shadowRoot.querySelector('#placeholder');
          }
          this._placeholderEl.style.backgroundSize = this.sizing;
          this._placeholderEl.style.backgroundPosition = this.sizing ? this.position : null;
          this._placeholderEl.style.backgroundRepeat = this.sizing ? 'no-repeat' : null;
          this._placeholderEl.classList.remove('fadein');
          this._placeholderEl.style.backgroundImage = (this.load && this.placeholder) ? 'url(' + this.placeholder + ')': null;
        } else {
          this._setSrc(this.placeholder);
        }
        if (this.load && this.src) {
          var img = new Image();
          img.src = this.src;
          this.loading = true;
          img.onload = function() {
            this._setSrc(this.src);
            this.loading = false;
            if (this.fade) {
              this._placeholderEl.classList.add('fadein');
            }
          }.bind(this);
        }
      } else {
        this._setSrc(this.src);
      }
    },

    _setSrc: function(src) {
      if (this.sizing) {
        this.style.backgroundImage = src ? 'url(' + src + ')': null;
      } else {
        this.$.img.src = src || '';
      }
    }

  });

;


  Polymer('core-header-panel', {

    /**
     * Fired when the content has been scrolled.  `event.detail.target` returns
     * the scrollable element which you can use to access scroll info such as
     * `scrollTop`.
     *
     *     <core-header-panel on-scroll="{{scrollHandler}}">
     *       ...
     *     </core-header-panel>
     *
     *
     *     scrollHandler: function(event) {
     *       var scroller = event.detail.target;
     *       console.log(scroller.scrollTop);
     *     }
     *
     * @event scroll
     */

    publish: {
      /**
       * Controls header and scrolling behavior. Options are
       * `standard`, `seamed`, `waterfall`, `waterfall-tall`, `scroll` and 
       * `cover`. Default is `standard`.
       *
       * `standard`: The header is a step above the panel. The header will consume the
       * panel at the point of entry, preventing it from passing through to the
       * opposite side.
       *
       * `seamed`: The header is presented as seamed with the panel.
       *
       * `waterfall`: Similar to standard mode, but header is initially presented as
       * seamed with panel, but then separates to form the step.
       *
       * `waterfall-tall`: The header is initially taller (`tall` class is added to
       * the header).  As the user scrolls, the header separates (forming an edge)
       * while condensing (`tall` class is removed from the header).
       *
       * `scroll`: The header keeps its seam with the panel, and is pushed off screen.
       *
       * `cover`: The panel covers the whole `core-header-panel` including the
       * header. This allows user to style the panel in such a way that the panel is
       * partially covering the header.
       *
       *     <style>
       *       core-header-panel[mode=cover]::shadow #mainContainer {
       *         left: 80px;
       *       }
       *       .content {
       *         margin: 60px 60px 60px 0;
       *       }
       *     </style>
       *
       *     <core-header-panel mode="cover">
       *       <core-appbar class="tall">
       *         <core-icon-button icon="menu"></core-icon-button>
       *       </core-appbar>
       *       <div class="content"></div>
       *     </core-header-panel>
       *
       * @attribute mode
       * @type string
       * @default ''
       */
      mode: {value: '', reflect: true},

      /**
       * The class used in waterfall-tall mode.  Change this if the header
       * accepts a different class for toggling height, e.g. "medium-tall"
       *
       * @attribute tallClass
       * @type string
       * @default 'tall'
       */
      tallClass: 'tall',

      /**
       * If true, the drop-shadow is always shown no matter what mode is set to.
       *
       * @attribute shadow
       * @type boolean
       * @default false
       */
      shadow: false
    },

    animateDuration: 200,

    modeConfigs: {
      shadowMode: {'waterfall': 1, 'waterfall-tall': 1},
      noShadow: {'seamed': 1, 'cover': 1, 'scroll': 1},
      tallMode: {'waterfall-tall': 1},
      outerScroll: {'scroll': 1}
    },
    
    ready: function() {
      this.scrollHandler = this.scroll.bind(this);
      this.addListener();
    },
    
    detached: function() {
      this.removeListener(this.mode);
    },
    
    addListener: function() {
      this.scroller.addEventListener('scroll', this.scrollHandler);
    },
    
    removeListener: function(mode) {
      var s = this.getScrollerForMode(mode);
      s.removeEventListener('scroll', this.scrollHandler);
    },

    domReady: function() {
      this.async('scroll');
    },

    modeChanged: function(old) {
      var header = this.header;
      if (header) {
        var configs = this.modeConfigs;
        // in tallMode it may add tallClass to the header; so do the cleanup
        // when mode is changed from tallMode to not tallMode
        if (configs.tallMode[old] && !configs.tallMode[this.mode]) {
          header.classList.remove(this.tallClass);
          this.async(function() {
            header.classList.remove('animate');
          }, null, this.animateDuration);
        } else {
          header.classList.toggle('animate', configs.tallMode[this.mode]);
        }
      }
      if (configs.outerScroll[this.mode] || configs.outerScroll[old]) {
        this.removeListener(old);
        this.addListener();
      }
      this.scroll();
    },

    get header() {
      return this.$.headerContent.getDistributedNodes()[0];
    },
    
    getScrollerForMode: function(mode) {
      return this.modeConfigs.outerScroll[mode] ?
          this.$.outerContainer : this.$.mainContainer;
    },

    /**
     * Returns the scrollable element.
     *
     * @property scroller
     * @type Object
     */
    get scroller() {
      return this.getScrollerForMode(this.mode);
    },

    scroll: function() {
      var configs = this.modeConfigs;
      var main = this.$.mainContainer;
      var header = this.header;

      var sTop = main.scrollTop;
      var atTop = sTop === 0;

      this.$.dropShadow.classList.toggle('hidden', !this.shadow &&
          (atTop && configs.shadowMode[this.mode] || configs.noShadow[this.mode]));

      if (header && configs.tallMode[this.mode]) {
        header.classList.toggle(this.tallClass, atTop ||
            header.classList.contains(this.tallClass) &&
            main.scrollHeight < this.$.outerContainer.offsetHeight);
      }

      this.fire('scroll', {target: this.scroller}, this, false);
    }

  });

;
Polymer('core-toolbar');;

    Polymer('core-selection', {
      /**
       * If true, multiple selections are allowed.
       *
       * @attribute multi
       * @type boolean
       * @default false
       */
      multi: false,
      ready: function() {
        this.clear();
      },
      clear: function() {
        this.selection = [];
      },
      /**
       * Retrieves the selected item(s).
       * @method getSelection
       * @returns Returns the selected item(s). If the multi property is true,
       * getSelection will return an array, otherwise it will return 
       * the selected item or undefined if there is no selection.
      */
      getSelection: function() {
        return this.multi ? this.selection : this.selection[0];
      },
      /**
       * Indicates if a given item is selected.
       * @method isSelected
       * @param {any} item The item whose selection state should be checked.
       * @returns Returns true if `item` is selected.
      */
      isSelected: function(item) {
        return this.selection.indexOf(item) >= 0;
      },
      setItemSelected: function(item, isSelected) {
        if (item !== undefined && item !== null) {
          if (isSelected) {
            this.selection.push(item);
          } else {
            var i = this.selection.indexOf(item);
            if (i >= 0) {
              this.selection.splice(i, 1);
            }
          }
          this.fire("core-select", {isSelected: isSelected, item: item});
        }
      },
      /**
       * Set the selection state for a given `item`. If the multi property
       * is true, then the selected state of `item` will be toggled; otherwise
       * the `item` will be selected.
       * @method select
       * @param {any} item: The item to select.
      */
      select: function(item) {
        if (this.multi) {
          this.toggle(item);
        } else if (this.getSelection() !== item) {
          this.setItemSelected(this.getSelection(), false);
          this.setItemSelected(item, true);
        }
      },
      /**
       * Toggles the selection state for `item`.
       * @method toggle
       * @param {any} item: The item to toggle.
      */
      toggle: function(item) {
        this.setItemSelected(item, !this.isSelected(item));
      }
    });
  ;


    Polymer('core-selector', {

      /**
       * Gets or sets the selected element.  Default to use the index
       * of the item element.
       *
       * If you want a specific attribute value of the element to be
       * used instead of index, set "valueattr" to that attribute name.
       *
       * Example:
       *
       *     <core-selector valueattr="label" selected="foo">
       *       <div label="foo"></div>
       *       <div label="bar"></div>
       *       <div label="zot"></div>
       *     </core-selector>
       *
       * In multi-selection this should be an array of values.
       *
       * Example:
       *
       *     <core-selector id="selector" valueattr="label" multi>
       *       <div label="foo"></div>
       *       <div label="bar"></div>
       *       <div label="zot"></div>
       *     </core-selector>
       *
       *     this.$.selector.selected = ['foo', 'zot'];
       *
       * @attribute selected
       * @type Object
       * @default null
       */
      selected: null,

      /**
       * If true, multiple selections are allowed.
       *
       * @attribute multi
       * @type boolean
       * @default false
       */
      multi: false,

      /**
       * Specifies the attribute to be used for "selected" attribute.
       *
       * @attribute valueattr
       * @type string
       * @default 'name'
       */
      valueattr: 'name',

      /**
       * Specifies the CSS class to be used to add to the selected element.
       * 
       * @attribute selectedClass
       * @type string
       * @default 'core-selected'
       */
      selectedClass: 'core-selected',

      /**
       * Specifies the property to be used to set on the selected element
       * to indicate its active state.
       *
       * @attribute selectedProperty
       * @type string
       * @default ''
       */
      selectedProperty: '',

      /**
       * Specifies the attribute to set on the selected element to indicate
       * its active state.
       *
       * @attribute selectedAttribute
       * @type string
       * @default 'active'
       */
      selectedAttribute: 'active',

      /**
       * Returns the currently selected element. In multi-selection this returns
       * an array of selected elements.
       * Note that you should not use this to set the selection. Instead use
       * `selected`.
       * 
       * @attribute selectedItem
       * @type Object
       * @default null
       */
      selectedItem: null,

      /**
       * In single selection, this returns the model associated with the
       * selected element.
       * Note that you should not use this to set the selection. Instead use 
       * `selected`.
       * 
       * @attribute selectedModel
       * @type Object
       * @default null
       */
      selectedModel: null,

      /**
       * In single selection, this returns the selected index.
       * Note that you should not use this to set the selection. Instead use
       * `selected`.
       *
       * @attribute selectedIndex
       * @type number
       * @default -1
       */
      selectedIndex: -1,

      /**
       * Nodes with local name that are in the list will not be included 
       * in the selection items.  In the following example, `items` returns four
       * `core-item`'s and doesn't include `h3` and `hr`.
       *
       *     <core-selector excludedLocalNames="h3 hr">
       *       <h3>Header</h3>
       *       <core-item>Item1</core-item>
       *       <core-item>Item2</core-item>
       *       <hr>
       *       <core-item>Item3</core-item>
       *       <core-item>Item4</core-item>
       *     </core-selector>
       *
       * @attribute excludedLocalNames
       * @type string
       * @default ''
       */
      excludedLocalNames: '',

      /**
       * The target element that contains items.  If this is not set 
       * core-selector is the container.
       * 
       * @attribute target
       * @type Object
       * @default null
       */
      target: null,

      /**
       * This can be used to query nodes from the target node to be used for 
       * selection items.  Note this only works if `target` is set
       * and is not `core-selector` itself.
       *
       * Example:
       *
       *     <core-selector target="{{$.myForm}}" itemsSelector="input[type=radio]"></core-selector>
       *     <form id="myForm">
       *       <label><input type="radio" name="color" value="red"> Red</label> <br>
       *       <label><input type="radio" name="color" value="green"> Green</label> <br>
       *       <label><input type="radio" name="color" value="blue"> Blue</label> <br>
       *       <p>color = {{color}}</p>
       *     </form>
       * 
       * @attribute itemsSelector
       * @type string
       * @default ''
       */
      itemsSelector: '',

      /**
       * The event that would be fired from the item element to indicate
       * it is being selected.
       *
       * @attribute activateEvent
       * @type string
       * @default 'tap'
       */
      activateEvent: 'tap',

      /**
       * Set this to true to disallow changing the selection via the
       * `activateEvent`.
       *
       * @attribute notap
       * @type boolean
       * @default false
       */
      notap: false,

      defaultExcludedLocalNames: 'template',

      ready: function() {
        this.activateListener = this.activateHandler.bind(this);
        this.itemFilter = this.filterItem.bind(this);
        this.excludedLocalNamesChanged();
        this.observer = new MutationObserver(this.updateSelected.bind(this));
        if (!this.target) {
          this.target = this;
        }
      },

      /**
       * Returns an array of all items.
       *
       * @property items
       */
      get items() {
        if (!this.target) {
          return [];
        }
        var nodes = this.target !== this ? (this.itemsSelector ? 
            this.target.querySelectorAll(this.itemsSelector) : 
                this.target.children) : this.$.items.getDistributedNodes();
        return Array.prototype.filter.call(nodes, this.itemFilter);
      },

      filterItem: function(node) {
        return !this._excludedNames[node.localName];
      },

      excludedLocalNamesChanged: function() {
        this._excludedNames = {};
        var s = this.defaultExcludedLocalNames;
        if (this.excludedLocalNames) {
          s += ' ' + this.excludedLocalNames;
        }
        s.split(/\s+/g).forEach(function(n) {
          this._excludedNames[n] = 1;
        }, this);
      },

      targetChanged: function(old) {
        if (old) {
          this.removeListener(old);
          this.observer.disconnect();
          this.clearSelection();
        }
        if (this.target) {
          this.addListener(this.target);
          this.observer.observe(this.target, {childList: true});
          this.updateSelected();
        }
      },

      addListener: function(node) {
        Polymer.addEventListener(node, this.activateEvent, this.activateListener);
      },

      removeListener: function(node) {
        Polymer.removeEventListener(node, this.activateEvent, this.activateListener);
      },

      /**
       * Returns the selected item(s). If the `multi` property is true,
       * this will return an array, otherwise it will return 
       * the selected item or undefined if there is no selection.
       */
      get selection() {
        return this.$.selection.getSelection();
      },

      selectedChanged: function() {
        this.updateSelected();
      },

      updateSelected: function() {
        this.validateSelected();
        if (this.multi) {
          this.clearSelection();
          this.selected && this.selected.forEach(function(s) {
            this.valueToSelection(s);
          }, this);
        } else {
          this.valueToSelection(this.selected);
        }
      },

      validateSelected: function() {
        // convert to an array for multi-selection
        if (this.multi && !Array.isArray(this.selected) && 
            this.selected !== null && this.selected !== undefined) {
          this.selected = [this.selected];
        }
      },

      clearSelection: function() {
        if (this.multi) {
          this.selection.slice().forEach(function(s) {
            this.$.selection.setItemSelected(s, false);
          }, this);
        } else {
          this.$.selection.setItemSelected(this.selection, false);
        }
        this.selectedItem = null;
        this.$.selection.clear();
      },

      valueToSelection: function(value) {
        var item = (value === null || value === undefined) ? 
            null : this.items[this.valueToIndex(value)];
        this.$.selection.select(item);
      },

      updateSelectedItem: function() {
        this.selectedItem = this.selection;
      },

      selectedItemChanged: function() {
        if (this.selectedItem) {
          var t = this.selectedItem.templateInstance;
          this.selectedModel = t ? t.model : undefined;
        } else {
          this.selectedModel = null;
        }
        this.selectedIndex = this.selectedItem ? 
            parseInt(this.valueToIndex(this.selected)) : -1;
      },

      valueToIndex: function(value) {
        // find an item with value == value and return it's index
        for (var i=0, items=this.items, c; (c=items[i]); i++) {
          if (this.valueForNode(c) == value) {
            return i;
          }
        }
        // if no item found, the value itself is probably the index
        return value;
      },

      valueForNode: function(node) {
        return node[this.valueattr] || node.getAttribute(this.valueattr);
      },

      // events fired from <core-selection> object
      selectionSelect: function(e, detail) {
        this.updateSelectedItem();
        if (detail.item) {
          this.applySelection(detail.item, detail.isSelected);
        }
      },

      applySelection: function(item, isSelected) {
        if (this.selectedClass) {
          item.classList.toggle(this.selectedClass, isSelected);
        }
        if (this.selectedProperty) {
          item[this.selectedProperty] = isSelected;
        }
        if (this.selectedAttribute && item.setAttribute) {
          if (isSelected) {
            item.setAttribute(this.selectedAttribute, '');
          } else {
            item.removeAttribute(this.selectedAttribute);
          }
        }
      },

      // event fired from host
      activateHandler: function(e) {
        if (!this.notap) {
          var i = this.findDistributedTarget(e.target, this.items);
          if (i >= 0) {
            var item = this.items[i];
            var s = this.valueForNode(item) || i;
            if (this.multi) {
              if (this.selected) {
                this.addRemoveSelected(s);
              } else {
                this.selected = [s];
              }
            } else {
              this.selected = s;
            }
            this.asyncFire('core-activate', {item: item});
          }
        }
      },

      addRemoveSelected: function(value) {
        var i = this.selected.indexOf(value);
        if (i >= 0) {
          this.selected.splice(i, 1);
        } else {
          this.selected.push(value);
        }
        this.valueToSelection(value);
      },

      findDistributedTarget: function(target, nodes) {
        // find first ancestor of target (including itself) that
        // is in nodes, if any
        while (target && target != this) {
          var i = Array.prototype.indexOf.call(nodes, target);
          if (i >= 0) {
            return i;
          }
          target = target.parentNode;
        }
      },
      
      selectIndex: function(index) {
        var item = this.items[index];
        if (item) {
          this.selected = this.valueForNode(item) || index;
          return item;
        }
      },
      
      /**
       * Selects the previous item.  This should be used in single selection only.
       *
       * @method selectPrevious
       * @param {boolean} wrap if true and it is already at the first item, wrap to the end
       * @returns the previous item or undefined if there is none
       */
      selectPrevious: function(wrap) {
        var i = wrap && !this.selectedIndex ? this.items.length - 1 : this.selectedIndex - 1;
        return this.selectIndex(i);
      },
      
      /**
       * Selects the next item.  This should be used in single selection only.
       *
       * @method selectNext
       * @param {boolean} wrap if true and it is already at the last item, wrap to the front
       * @returns the next item or undefined if there is none
       */
      selectNext: function(wrap) {
        var i = wrap && this.selectedIndex >= this.items.length - 1 ? 0 : this.selectedIndex + 1;
        return this.selectIndex(i);
      }
      
    });
  ;
Polymer('core-pages');;

(function() {

window.CoreStyle = window.CoreStyle || {
  g: {},
  list: {},
  refMap: {}
};

Polymer('core-style', {
  /**
   * The `id` property should be set if the `core-style` is a producer
   * of styles. In this case, the `core-style` should have text content
   * that is cssText.
   *
   * @attribute id
   * @type string
   * @default ''
   */


  publish: {
    /**
     * The `ref` property should be set if the `core-style` element is a 
     * consumer of styles. Set it to the `id` of the desired `core-style`
     * element.
     *
     * @attribute ref
     * @type string
     * @default ''
     */
    ref: ''
  },

  // static
  g: CoreStyle.g,
  refMap: CoreStyle.refMap,

  /**
   * The `list` is a map of all `core-style` producers stored by `id`. It 
   * should be considered readonly. It's useful for nesting one `core-style`
   * inside another.
   *
   * @attribute list
   * @type object (readonly)
   * @default {map of all `core-style` producers}
   */
  list: CoreStyle.list,

  // if we have an id, we provide style
  // if we have a ref, we consume/require style
  ready: function() {
    if (this.id) {
      this.provide();
    } else {
      this.registerRef(this.ref);
      if (!window.ShadowDOMPolyfill) {
        this.require();
      }  
    }
  },

  // can't shim until attached if using SD polyfill because need to find host
  attached: function() {
    if (!this.id && window.ShadowDOMPolyfill) {
      this.require();
    }
  },

  /****** producer stuff *******/

  provide: function() {
    this.register();
    // we want to do this asap, especially so we can do so before definitions
    // that use this core-style are registered.
    if (this.textContent) {
      this._completeProvide();
    } else {
      this.async(this._completeProvide);
    }
  },

  register: function() {
    var i = this.list[this.id];
    if (i) {
      if (!Array.isArray(i)) {
        this.list[this.id] = [i];
      }
      this.list[this.id].push(this);
    } else {
      this.list[this.id] = this;  
    }
  },

  // stamp into a shadowRoot so we can monitor dom of the bound output
  _completeProvide: function() {
    this.createShadowRoot();
    this.domObserver = new MutationObserver(this.domModified.bind(this))
        .observe(this.shadowRoot, {subtree: true, 
        characterData: true, childList: true});
    this.provideContent();
  },

  provideContent: function() {
    this.ensureTemplate();
    this.shadowRoot.textContent = '';
    this.shadowRoot.appendChild(this.instanceTemplate(this.template));
    this.cssText = this.shadowRoot.textContent;
  },

  ensureTemplate: function() {
    if (!this.template) {
      this.template = this.querySelector('template:not([repeat]):not([bind])');
      // move content into the template
      if (!this.template) {
        this.template = document.createElement('template');
        var n = this.firstChild;
        while (n) {
          this.template.content.appendChild(n.cloneNode(true));
          n = n.nextSibling;
        }
      }
    }
  },

  domModified: function() {
    this.cssText = this.shadowRoot.textContent;
    this.notify();
  },

  // notify instances that reference this element
  notify: function() {
    var s$ = this.refMap[this.id];
    if (s$) {
      for (var i=0, s; (s=s$[i]); i++) {
        s.require();
      }
    }
  },

  /****** consumer stuff *******/

  registerRef: function(ref) {
    //console.log('register', ref);
    this.refMap[this.ref] = this.refMap[this.ref] || [];
    this.refMap[this.ref].push(this);
  },

  applyRef: function(ref) {
    this.ref = ref;
    this.registerRef(this.ref);
    this.require();
  },

  require: function() {
    var cssText = this.cssTextForRef(this.ref);
    //console.log('require', this.ref, cssText);
    if (cssText) {
      this.ensureStyleElement();
      // do nothing if cssText has not changed
      if (this.styleElement._cssText === cssText) {
        return;
      }
      this.styleElement._cssText = cssText;
      if (window.ShadowDOMPolyfill) {
        this.styleElement.textContent = cssText;
        cssText = Platform.ShadowCSS.shimStyle(this.styleElement,
            this.getScopeSelector());
      }
      this.styleElement.textContent = cssText;
    }
  },

  cssTextForRef: function(ref) {
    var s$ = this.byId(ref);
    var cssText = '';
    if (s$) {
      if (Array.isArray(s$)) {
        var p = [];
        for (var i=0, l=s$.length, s; (i<l) && (s=s$[i]); i++) {
          p.push(s.cssText);
        }
        cssText = p.join('\n\n');
      } else {
        cssText = s$.cssText;
      }
    }
    if (s$ && !cssText) {
      console.warn('No styles provided for ref:', ref);
    }
    return cssText;
  },

  byId: function(id) {
    return this.list[id];
  },

  ensureStyleElement: function() {
    if (!this.styleElement) {
      this.styleElement = window.ShadowDOMPolyfill ? 
          this.makeShimStyle() :
          this.makeRootStyle();
    }
    if (!this.styleElement) {
      console.warn(this.localName, 'could not setup style.');
    }
  },

  makeRootStyle: function() {
    var style = document.createElement('style');
    this.appendChild(style);
    return style;
  },

  makeShimStyle: function() {
    var host = this.findHost(this);
    if (host) {
      var name = host.localName;
      var style = document.querySelector('style[' + name + '=' + this.ref +']');
      if (!style) {
        style = document.createElement('style');
        style.setAttribute(name, this.ref);
        document.head.appendChild(style);
      }
      return style;
    }
  },

  getScopeSelector: function() {
    if (!this._scopeSelector) {
      var selector = '', host = this.findHost(this);
      if (host) {
        var typeExtension = host.hasAttribute('is');
        var name = typeExtension ? host.getAttribute('is') : host.localName;
        selector = Platform.ShadowCSS.makeScopeSelector(name, 
            typeExtension);
      }
      this._scopeSelector = selector;
    }
    return this._scopeSelector;
  },

  findHost: function(node) {
    while (node.parentNode) {
      node = node.parentNode;
    }
    return node.host || wrap(document.documentElement);
  },

  /* filters! */
  // TODO(dfreedm): add more filters!

  cycle: function(rgb, amount) {
    if (rgb.match('#')) {
      var o = this.hexToRgb(rgb);
      if (!o) {
        return rgb;
      }
      rgb = 'rgb(' + o.r + ',' + o.b + ',' + o.g + ')';
    }

    function cycleChannel(v) {
      return Math.abs((Number(v) - amount) % 255);
    }

    return rgb.replace(/rgb\(([^,]*),([^,]*),([^,]*)\)/, function(m, a, b, c) {
      return 'rgb(' + cycleChannel(a) + ',' + cycleChannel(b) + ', ' 
          + cycleChannel(c) + ')';
    });
  },

  hexToRgb: function(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
  }

});


})();
;

    Polymer('core-transition', {
      
      type: 'transition',

      /**
       * Run the animation.
       *
       * @method go
       * @param {Node} node The node to apply the animation on
       * @param {Object} state State info
       */
      go: function(node, state) {
        this.complete(node);
      },

      /**
       * Set up the animation. This may include injecting a stylesheet,
       * applying styles, creating a web animations object, etc.. This
       *
       * @method setup
       * @param {Node} node The animated node
       */
      setup: function(node) {
      },

      /**
       * Tear down the animation.
       *
       * @method teardown
       * @param {Node} node The animated node
       */
      teardown: function(node) {
      },

      /**
       * Called when the animation completes. This function also fires the
       * `core-transitionend` event.
       *
       * @method complete
       * @param {Node} node The animated node
       */
      complete: function(node) {
        this.fire('core-transitionend', null, node);
      },

      /**
       * Utility function to listen to an event on a node once.
       *
       * @method listenOnce
       * @param {Node} node The animated node
       * @param {string} event Name of an event
       * @param {Function} fn Event handler
       * @param {Array} args Additional arguments to pass to `fn`
       */
      listenOnce: function(node, event, fn, args) {
        var self = this;
        var listener = function() {
          fn.apply(self, args);
          node.removeEventListener(event, listener, false);
        }
        node.addEventListener(event, listener, false);
      }

    });
  ;


(function () {

// create some basic transition styling data.
var transitions = CoreStyle.g.transitions = CoreStyle.g.transitions || {};
transitions.duration = '500ms';
transitions.heroDelay = '50ms';
transitions.scaleDelay = '500ms';
transitions.cascadeFadeDuration = '250ms';

Polymer('core-transition-pages',{

  publish: {
    /**
     * This class will be applied to the scope element in the `prepare` function.
     * It is removed in the `complete` function. Used to activate a set of CSS
     * rules that need to apply before the transition runs, e.g. a default opacity
     * or transform for the non-active pages.
     *
     * @attribute scopeClass
     * @type string
     * @default ''
     */
    scopeClass: '',

    /**
     * This class will be applied to the scope element in the `go` function. It is
     * remoived in the `complete' function. Generally used to apply a CSS transition
     * rule only during the transition.
     *
     * @attribute activeClass
     * @type string
     * @default ''
     */
    activeClass: '',

    /**
     * Specifies which CSS property to look for when it receives a `transitionEnd` event
     * to determine whether the transition is complete. If not specified, the first
     * transitionEnd event received will complete the transition.
     *
     * @attribute transitionProperty
     * @type string
     * @default ''
     */
    transitionProperty: ''
  },

  /**
   * True if this transition is complete.
   *
   * @attribute completed
   * @type boolean
   * @default false
   */
  completed: false,

  prepare: function(scope, options) {
    this.boundCompleteFn = this.complete.bind(this, scope);
    if (this.scopeClass) {
      scope.classList.add(this.scopeClass);
    }
  },

  go: function(scope, options) {
    this.completed = false;
    if (this.activeClass) {
      scope.classList.add(this.activeClass);
    }
    scope.addEventListener('transitionend', this.boundCompleteFn, false);
  },

  setup: function(scope) {
    if (!scope._pageTransitionStyles) {
      scope._pageTransitionStyles = {};
    }

    var name = this.calcStyleName();
    
    if (!scope._pageTransitionStyles[name]) {
      this.installStyleInScope(scope, name);
      scope._pageTransitionStyles[name] = true;
    }
  },

  calcStyleName: function() {
    return this.id || this.localName;
  },

  installStyleInScope: function(scope, id) {
    if (!scope.shadowRoot) {
      scope.createShadowRoot().innerHTML = '<content></content>';
    }
    var root = scope.shadowRoot;
    var scopeStyle = document.createElement('core-style');
    root.insertBefore(scopeStyle, root.firstChild);
    scopeStyle.applyRef(id);
  },

  complete: function(scope, e) {
    // TODO(yvonne): hack, need to manage completion better
    if (e.propertyName !== 'box-shadow' && (!this.transitionProperty || e.propertyName.indexOf(this.transitionProperty) !== -1)) {
      this.completed = true;
      this.fire('core-transitionend', this, scope);
    }
  },

  // TODO(sorvell): ideally we do this in complete.
  ensureComplete: function(scope) {
    scope.removeEventListener('transitionend', this.boundCompleteFn, false);
    if (this.scopeClass) {
      scope.classList.remove(this.scopeClass);
    }
    if (this.activeClass) {
      scope.classList.remove(this.activeClass);
    }
  }

});

})();

;

(function() {

  var webkitStyles = '-webkit-transition' in document.documentElement.style
  var TRANSITION_CSSNAME = webkitStyles ? '-webkit-transition' : 'transition';
  var TRANSFORM_CSSNAME = webkitStyles ? '-webkit-transform' : 'transform';
  var TRANSITION_NAME = webkitStyles ? 'webkitTransition' : 'transition';
  var TRANSFORM_NAME = webkitStyles ? 'webkitTransform' : 'transform';

  var hasShadowDOMPolyfill = window.ShadowDOMPolyfill;

  Polymer('hero-transition',{

    go: function(scope, options) {
      var props = [
        'border-radius',
        'width',
        'height',
        TRANSFORM_CSSNAME
      ];

      var duration = options && options.duration || 
          (CoreStyle.g.transitions.heroDuration || 
          CoreStyle.g.transitions.duration);

      scope._heroes.forEach(function(h) {
        var d = h.h0.hasAttribute('hero-delayed') ? CoreStyle.g.transitions.heroDelay : '';
        var wt = [];
        props.forEach(function(p) {
          wt.push(p + ' ' + duration + ' ' + options.easing + ' ' + d);
        });

        h.h1.style[TRANSITION_NAME] = wt.join(', ');
        h.h1.style.borderRadius = h.r1;
        h.h1.style[TRANSFORM_NAME] = '';
      });

      this.super(arguments);

      if (!scope._heroes.length) {
        this.completed = true;
      }
    },

    prepare: function(scope, options) {
      this.super(arguments);
      var src = options.src, dst = options.dst;

      if (scope._heroes && scope._heroes.length) {
        this.ensureComplete(scope);
      } else {
        scope._heroes = [];
      }

      // FIXME(yvonne): basic support for nested pages.
      // Look for heroes in the light DOM and one level of shadow DOM of the src and dst,
      // and also in src.selectedItem or dst.selectedItem, then transform the dst hero to src
      var ss = '[hero]';
      var h$ = this.findAllInShadows(src, ss);
      if (src.selectedItem) {
        hs$ = this.findAllInShadows(src.selectedItem, ss);
        hsa$ = [];
        // De-duplicate items
        Array.prototype.forEach.call(hs$, function(hs) {
          if (h$.indexOf(hs) === -1) {
            hsa$.push(hs);
          }
        })
        h$ = h$.concat(hsa$);
      }

      for (var i=0, h0; h0=h$[i]; i++) {
        var v = h0.getAttribute('hero-id');
        var ds = '[hero][hero-id="' + v + '"]';
        var h1 = this.findInShadows(dst, ds);

        if (!h1 && dst.selectedItem) {
          h1 = this.findInShadows(dst.selectedItem, ds);
        }

        // console.log('src', src);
        // console.log('dst', dst, dst.selectedItem);
        // console.log(v, h0, h1);
        if (v && h1) {
          var c0 = getComputedStyle(h0);
          var c1 = getComputedStyle(h1);
          var h = {
            h0: h0,
            b0: h0.getBoundingClientRect(),
            r0: c0.borderRadius,
            h1: h1,
            b1: h1.getBoundingClientRect(),
            r1: c1.borderRadius
          };

          var dl = h.b0.left - h.b1.left;
          var dt = h.b0.top - h.b1.top;
          var sw = h.b0.width / h.b1.width;
          var sh = h.b0.height / h.b1.height;

          // h.scaley = h.h0.hasAttribute('scaley');
          // if (!h.scaley && (sw !== 1 || sh !== 1)) {
          //   sw = sh = 1;
          //   h.h1.style.width = h.b0.width + 'px';
          //   h.h1.style.height = h.b0.height + 'px';
          // }

          // Also animate the border-radius for the circle-to-square transition
          if (h.r0 !== h.r1) {
            h.h1.style.borderRadius = h.r0;
          }

          // console.log(h);

          h.h1.style[TRANSFORM_NAME] = 'translate(' + dl + 'px,' + dt + 'px)' + ' scale(' + sw + ',' + sh + ')';
          h.h1.style[TRANSFORM_NAME + 'Origin'] = '0 0';

          scope._heroes.push(h);
        }
      }

    },

    // carefully look into ::shadow with polyfill specific hack
    findInShadows: function(node, selector) {
      return node.querySelector(selector) || (hasShadowDOMPolyfill ? 
          Platform.queryAllShadows(node, selector) :
          node.querySelector('::shadow ' + selector));
    },

    findAllInShadows: function(node, selector) {
      if (hasShadowDOMPolyfill) {
        var nodes = node.querySelectorAll(selector).array();
        var shadowNodes = Platform.queryAllShadows(node, selector, true);
        return nodes.concat(shadowNodes);
      } else {
        return node.querySelectorAll(selector).array().concat(node.shadowRoot ? node.shadowRoot.querySelectorAll(selector).array() : []);
      }
    },

    ensureComplete: function(scope) {
      this.super(arguments);
      if (scope._heroes) {
        scope._heroes.forEach(function(h) {
          h.h1.style[TRANSITION_NAME] = '';
          h.h1.style[TRANSFORM_NAME] = '';
        });
        scope._heroes = [];
      }
    },

    complete: function(scope, e) {
      // if (e.propertyName === TRANSFORM_CSSNAME) {
        var done = false;
        scope._heroes.forEach(function(h) {
          if (h.h1 === e.path[0]) {
            done = true;
          }
        });

        if (done) {
          this.super(arguments);
        }
      // }
    }

  });

})();
;


  Polymer('core-animated-pages',{

    eventDelegates: {
      'core-transitionend': 'transitionEnd'
    },

    /**
     * A space-delimited string of transitions to use when switching between pages in this element.
     * The strings are `id`s of `core-transition-pages` elements included elsewhere. See the
     * individual transition's document for specific details.
     *
     * @attribute transitions
     * @type string
     * @default ''
     */
    transitions: '',

    selected: 0,

    /**
     * The last page selected. This property is useful to dynamically set transitions based
     * on incoming and outgoing pages.
     *
     * @attribute lastSelected
     * @type Object
     * @default null
     */
    lastSelected: null,

    registerCallback: function() {
      this.tmeta = document.createElement('core-transition');
    },

    created: function() {
      this._transitions = [];
      this.transitioning = [];
    },

    transitionsChanged: function() {
      this._transitions = this.transitions.split(' ');
    },

    _transitionsChanged: function(old) {
      if (this._transitionElements) {
        this._transitionElements.forEach(function(t) {
          t.teardown(this);
        }, this);
      }
      this._transitionElements = [];
      this._transitions.forEach(function(transitionId) {
        var t = this.getTransition(transitionId);
        if (t) {
          this._transitionElements.push(t);
          t.setup(this);
        }
      }, this);
    },

    getTransition: function(transitionId) {
      return this.tmeta.byId(transitionId);
    },

    selectionSelect: function(e, detail) {
      this.updateSelectedItem();
      // Wait to call applySelection when we run the transition
    },

    applyTransition: function(src, dst) {
      if (this.animating) {
        this.cancelAsync(this.animating);
        this.animating = null;
      }

      Platform.flush();

      if (this.transitioning.indexOf(src) === -1) {
        this.transitioning.push(src);
      }
      if (this.transitioning.indexOf(dst) === -1) {
        this.transitioning.push(dst);
      }
      // force src, dst to display 
      src.setAttribute('animate', '');
      dst.setAttribute('animate', '');
      //
      var options = {
        src: src,
        dst: dst,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }

      // fire an event so clients have a chance to do something when the
      // new page becomes visible but before it draws.
      this.fire('core-animated-pages-transition-prepare');

      //
      // prepare transition
      this._transitionElements.forEach(function(transition) {
        transition.prepare(this, options);
      }, this);
      //
      // force layout!
      src.offsetTop;

      //
      // apply selection
      this.applySelection(dst, true);
      this.applySelection(src, false);
      //
      // start transition
      this._transitionElements.forEach(function(transition) {
        transition.go(this, options);
      }, this);

      if (!this._transitionElements.length) {
        this.complete();
      } else {
        this.animating = this.async(this.complete.bind(this), null, 5000);
      }
    },

    complete: function() {
      if (this.animating) {
        this.cancelAsync(this.animating);
        this.animating = null;
      }

      this.transitioning.forEach(function(t) {
        t.removeAttribute('animate');
      });
      this.transitioning = [];

      this._transitionElements.forEach(function(transition) {
        transition.ensureComplete(this);
      }, this);

      this.fire('core-animated-pages-transition-end');
    },
    
    transitionEnd: function(e) {
      if (this.transitioning.length) {
        var completed = true;
        this._transitionElements.forEach(function(transition) {
          if (!transition.completed) {
            completed = false;
          }
        });
        if (completed) {
          this.job('transitionWatch', function() {
            this.complete();
          }, 100);
        }
      }
    },

    selectedChanged: function(old) {
      this.lastSelected = old;
      this.super(arguments);
    },

    selectedItemChanged: function(oldItem) {
      this.super(arguments);

      if (!oldItem) {
        this.applySelection(this.selectedItem, true);
        return;
      }

      if (this.hasAttribute('no-transition') || !this._transitionElements || !this._transitionElements.length) {
        this.applySelection(oldItem, false);
        this.applySelection(this.selectedItem, true);
        return;
      }

      if (oldItem && this.selectedItem) {
        // TODO(sorvell): allow bindings to update first?
        var self = this;
        Platform.flush();
        Platform.endOfMicrotask(function() {
          self.applyTransition(oldItem, self.selectedItem);
        });
      }
    }

  });

;

(function() {

  Polymer('core-list', {
    
    publish: {
      /**
       * Fired when an item element is tapped.
       * 
       * @event core-activate
       * @param {Object} detail
       *   @param {Object} detail.item the item element
       */

      /**
       * 
       * An array of source data for the list to display.
       *
       * @attribute data
       * @type array
       * @default null
       */
      data: null,

      /**
       * 
       * An optional element on which to listen for scroll events.
       *
       * @attribute scrollTarget
       * @type Element
       * @default core-list
       */
      scrollTarget: null,

      /**
       * 
       * The height of a list item. `core-list` currently supports only fixed-height
       * list items. This height must be specified via the height property.
       *
       * @attribute height
       * @type number
       * @default 80
       */
      height: 80,

      /**
       * 
       * The number of extra items rendered above the minimum set required to
       * fill the list's height.
       *
       * @attribute extraItems
       * @type number
       * @default 30
       */
      extraItems: 30,

      /**
       * 
       * When true, tapping a row will select the item, placing its data model
       * in the set of selected items retrievable via the `selection` property.
       *
       * Note that tapping focusable elements within the list item will not
       * result in selection, since they are presumed to have their own action.
       *
       * @attribute selectionEnabled
       * @type {boolean}
       * @default true
       */
      selectionEnabled: true,

      /**
       * 
       * Set to true to support multiple selection.  Note, existing selection
       * state is maintained only when changing `multi` from `false` to `true`;
       * it is cleared when changing from `true` to `false`.
       *
       * @attribute multi
       * @type boolean
       * @default false
       */
      multi: false,

      /**
       * 
       * Data record (or array of records, if `multi: true`) corresponding to
       * the currently selected set of items.
       *
       * @attribute selection
       * @type {any}
       * @default null
       */
       selection: null
    },

    // Local cache of scrollTop
    _scrollTop: 0,
    
    observe: {
      'data template scrollTarget': 'initialize',
      'multi selectionEnabled': '_resetSelection'
    },

    ready: function() {
      this._boundScrollHandler = this.scrollHandler.bind(this);
      this._oldMulti = this.multi;
      this._oldSelectionEnabled = this.selectionEnabled;
    },

    attached: function() {
      this.template = this.querySelector('template');
      if (!this.template.bindingDelegate) {
        this.template.bindingDelegate = this.element.syntax;
      }
    },

    _resetSelection: function() {
      if (((this._oldMulti != this.multi) && !this.multi) || 
          ((this._oldSelectionEnabled != this.selectionEnabled) && 
            !this.selectionEnabled)) {
        this._clearSelection();
        this.refresh(true);
      } else {
        this.selection = this.$.selection.getSelection();
      }
      this._oldMulti = this.multi;
      this._oldSelectionEnabled = this.selectionEnabled;
    },

    // TODO(sorvell): it'd be nice to dispense with 'data' and just use 
    // template repeat's model. However, we need tighter integration
    // with TemplateBinding for this.
    initialize: function() {
      if (!this.template) {
        return;
      }
      
      // TODO(kschaaf): This is currently the only way to know that the array
      // was mutated as opposed to newly assigned; to be updated with better API
      if (arguments.length == 1) {
        var splices = arguments[0];
        for (var i=0; i<splices.length; i++) {
          var s = splices[i];
          for (var j=0; j<s.removed.length; j++) {
            var d = s.removed[j];
            this.$.selection.setItemSelected(d, false);
          }
        }
      } else {
        this._clearSelection();
      }

      var target = this.scrollTarget || this;
      if (this._target !== target) {
        if (this._target) {
          this._target.removeEventListener('scroll', this._boundScrollHandler, false);
        }
        this._target = target;
        this._target.addEventListener('scroll', this._boundScrollHandler, false);
      }
      // Only use -webkit-overflow-touch from iOS8+, where scroll events are fired
      var ios = navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/);
      if (ios && ios[1] >= 8) {
        target.style.webkitOverflowScrolling = 'touch';
      }

      this.initializeData();
    },

    initializeData: function() {
      var currentCount = this._physicalCount || 0;
      var dataLen = this.data && this.data.length || 0;
      this._visibleCount = Math.ceil(this._target.offsetHeight / this.height);
      this._physicalCount = Math.min(this._visibleCount + this.extraItems, dataLen);
      this._physicalCount = Math.max(currentCount, this._physicalCount);
      this._physicalData = this._physicalData || new Array(this._physicalCount);
      var needItemInit = false;
      while (currentCount < this._physicalCount) {
        this._physicalData[currentCount++] = {};
        needItemInit = true;
      }
      this.template.model = this._physicalData;
      this.template.setAttribute('repeat', '');
      if (needItemInit) {
        this.onMutation(this, this.initializeItems);
      } else {
        this.refresh(true);
      }
    },

    initializeItems: function() {
      var currentCount = this._physicalItems && this._physicalItems.length || 0;
      this._physicalItems = this._physicalItems || new Array(this._physicalCount);
      for (var i = 0, item = this.template.nextElementSibling;
           item && i < this._physicalCount;
           ++i, item = item.nextElementSibling) {
        this._physicalItems[i] = item;
        item._transformValue = 0;
      }
      this.refresh(true);
    },

    updateItem: function(virtualIndex, physicalIndex) {
      var virtualDatum = this.data && this.data[virtualIndex];
      var physicalDatum = this._physicalData[physicalIndex];
      physicalDatum.model = virtualDatum;
      physicalDatum.physicalIndex = physicalIndex;
      physicalDatum.index = virtualIndex;
      physicalDatum.selected = this.selectionEnabled && virtualDatum ? 
          this._selectedData.get(virtualDatum) : null;
      var physicalItem = this._physicalItems[physicalIndex];
      physicalItem.hidden = !virtualDatum;
    },

    scrollHandler: function(e, detail) {
      this._scrollTop = e.detail ? e.detail.target.scrollTop : e.target.scrollTop;
      this.refresh(false);
    },

    /**
     * Refresh the list at the current scroll position.
     *
     * @method refresh
     */
    refresh: function(force) {
      // Check that the array hasn't gotten longer since data was initialized
      var dataLen = this.data && this.data.length || 0;
      if (force) {
        if (this._physicalCount < 
            Math.min(this._visibleCount + this.extraItems, dataLen)) {
          // Need to add more items; once new data & items are initialized,
          // refresh will be run again
          this.initializeData();
          return;
        }
        this._physicalHeight = this.height * this._physicalCount;
        this.$.viewport.style.height = this.height * dataLen + 'px';
      }

      var firstVisibleIndex = Math.floor(this._scrollTop / this.height);
      var visibleMidpoint = firstVisibleIndex + this._visibleCount / 2;

      var firstReifiedIndex = Math.max(0, Math.floor(visibleMidpoint - 
          this._physicalCount / 2));
      firstReifiedIndex = Math.min(firstReifiedIndex, dataLen - 
          this._physicalCount);
      firstReifiedIndex = (firstReifiedIndex < 0) ? 0 : firstReifiedIndex;

      var firstPhysicalIndex = firstReifiedIndex % this._physicalCount;
      var baseVirtualIndex = firstReifiedIndex - firstPhysicalIndex;

      var baseTransformValue = Math.floor(this.height * baseVirtualIndex);
      var nextTransformValue = Math.floor(baseTransformValue + 
          this._physicalHeight);

      var baseTransformString = 'translate3d(0,' + baseTransformValue + 'px,0)';
      var nextTransformString = 'translate3d(0,' + nextTransformValue + 'px,0)';

      this.firstPhysicalIndex = firstPhysicalIndex;
      this.baseVirtualIndex = baseVirtualIndex;

      for (var i = 0; i < firstPhysicalIndex; ++i) {
        var item = this._physicalItems[i];
        if (force || item._transformValue != nextTransformValue) {
          this.updateItem(baseVirtualIndex + this._physicalCount + i, i);
          setTransform(item, nextTransformString, nextTransformValue);
        }
      }
      for (var i = firstPhysicalIndex; i < this._physicalCount; ++i) {
        var item = this._physicalItems[i];
        if (force || item._transformValue != baseTransformValue) {
          this.updateItem(baseVirtualIndex + i, i);
          setTransform(item, baseTransformString, baseTransformValue);
        }
      }
    },

    // list selection
    tapHandler: function(e) {
      var n = e.target;
      var p = e.path;
      if (!this.selectionEnabled || (n === this)) {
        return;
      }
      requestAnimationFrame(function() {
        // Gambit: only select the item if the tap wasn't on a focusable child
        // of the list (since anything with its own action should be focusable
        // and not result in result in list selection).  To check this, we
        // asynchronously check that shadowRoot.activeElement is null, which 
        // means the tapped item wasn't focusable. On polyfill where
        // activeElement doesn't follow the data-hinding part of the spec, we
        // can check that document.activeElement is the list itself, which will
        // catch focus in lieu of the tapped item being focusable, as we make
        // the list focusable (tabindex="-1") for this purpose.  Note we also
        // allow the list items themselves to be focusable if desired, so those
        // are excluded as well.
        var active = window.ShadowDOMPolyfill ? 
            wrap(document.activeElement) : this.shadowRoot.activeElement;
        if (active && (active != this) && (active.parentElement != this) && 
            (document.activeElement != document.body)) {
          return;
        }
        // Unfortunately, Safari does not focus certain form controls via mouse,
        // so we also blacklist input, button, & select
        // (https://bugs.webkit.org/show_bug.cgi?id=118043)
        if ((p[0].localName == 'input') || 
            (p[0].localName == 'button') || 
            (p[0].localName == 'select')) {
          return;
        }

        var model = n.templateInstance && n.templateInstance.model;
        if (model) {
          var vi = model.index, pi = model.physicalIndex;
          var data = this.data[vi], item = this._physicalItems[pi];
          this.$.selection.select(data);
          this.asyncFire('core-activate', {data: data, item: item});
        }
      }.bind(this));
    },

    selectedHandler: function(e, detail) {
      this.selection = this.$.selection.getSelection();
      var i$ = this.indexesForData(detail.item);
      // TODO(sorvell): we should be relying on selection to store the
      // selected data but we want to optimize for lookup.
      this._selectedData.set(detail.item, detail.isSelected);
      if (i$.physical >= 0) {
        this.updateItem(i$.virtual, i$.physical);
      }
    },

    /**
     * Select the list item at the given index.
     *
     * @method selectItem
     * @param {number} index 
     */
    selectItem: function(index) {
      if (!this.selectionEnabled) {
        return;
      }
      var data = this.data[index];
      if (data) {
        this.$.selection.select(data);
      }
    },

    /**
     * Set the selected state of the list item at the given index.
     *
     * @method setItemSelected
     * @param {number} index 
     * @param {boolean} isSelected 
     */
    setItemSelected: function(index, isSelected) {
      var data = this.data[index];
      if (data) {
        this.$.selection.setItemSelected(data, isSelected);
      }
    },

    indexesForData: function(data) {
      var virtual = this.data.indexOf(data);
      var physical = this.virtualToPhysicalIndex(virtual);
      return { virtual: virtual, physical: physical };
    },

    virtualToPhysicalIndex: function(index) {
      for (var i=0, l=this._physicalData.length; i<l; i++) {
        if (this._physicalData[i].index === index) {
          return i;
        }
      }
      return -1;
    },

    /**
     * Clears the current selection state of the list.
     *
     * @method clearSelection
     */
    clearSelection: function() {
      this._clearSelection();
      this.refresh(true);
    },

    _clearSelection: function() {
      this._selectedData = new WeakMap();
      this.$.selection.clear();
      this.selection = this.$.selection.getSelection();
    },

    scrollToItem: function(index) {
      this.scrollTop = index * this.height;
    }

  });

  // determine proper transform mechanizm
  if (document.documentElement.style.transform !== undefined) {
    var setTransform = function(element, string, value) {
      element.style.transform = string;
      element._transformValue = value;
    }
  } else {
    var setTransform = function(element, string, value) {
      element.style.webkitTransform = string;
      element._transformValue = value;
    }
  }

})();
;

    Polymer('core-media-query', {

      /**
       * The Boolean return value of the media query
       *
       * @attribute queryMatches
       * @type Boolean
       * @default false
       */
      queryMatches: false,

      /**
       * The CSS media query to evaulate
       *
       * @attribute query
       * @type string
       * @default ''
       */
      query: '',
      ready: function() {
        this._mqHandler = this.queryHandler.bind(this);
        this._mq = null;
      },
      queryChanged: function() {
        if (this._mq) {
          this._mq.removeListener(this._mqHandler);
        }
        var query = this.query;
        if (query[0] !== '(') {
          query = '(' + this.query + ')';
        }
        this._mq = window.matchMedia(query);
        this._mq.addListener(this._mqHandler);
        this.queryHandler(this._mq);
      },
      queryHandler: function(mq) {
        this.queryMatches = mq.matches;
        this.asyncFire('core-media-change', mq);
      }
    });
  ;


  Polymer('core-drawer-panel', {

    /**
     * Fired when the narrow layout changes.
     *
     * @event core-responsive-change
     * @param {Object} detail
     * @param {boolean} detail.narrow true if the panel is in narrow layout.
     */

    publish: {

      /**
       * Width of the drawer panel.
       *
       * @attribute drawerWidth
       * @type string
       * @default '256px'
       */
      drawerWidth: '256px',

      /**
       * Max-width when the panel changes to narrow layout.
       *
       * @attribute responsiveWidth
       * @type string
       * @default '640px'
       */
      responsiveWidth: '640px',

      /**
       * The panel that is being selected. `drawer` for the drawer panel and
       * `main` for the main panel.
       *
       * @attribute selected
       * @type string
       * @default null
       */
      selected: {value: null, reflect: true},

      /**
       * The panel to be selected when `core-drawer-panel` changes to narrow
       * layout.
       *
       * @attribute defaultSelected
       * @type string
       * @default 'main'
       */
      defaultSelected: 'main',

      /**
       * Returns true if the panel is in narrow layout.  This is useful if you
       * need to show/hide elements based on the layout.
       *
       * @attribute narrow
       * @type boolean
       * @default false
       */
      narrow: {value: false, reflect: true},

      /**
       * If true, position the drawer to the right.
       *
       * @attribute rightDrawer
       * @type boolean
       * @default false
       */
      rightDrawer: false,

      /**
       * If true, swipe to open/close the drawer is disabled.
       *
       * @attribute disableSwipe
       * @type boolean
       * @default false
       */
      disableSwipe: false
    },

    eventDelegates: {
      trackstart: 'trackStart',
      trackx: 'trackx',
      trackend: 'trackEnd',
      down: 'touchStart',
      up: 'touchEnd'
    },

    // Whether the transition is enabled.
    transition: false,

    // How many pixels on the side of the screen are sensitive to edge swipes and peek.
    edgeSwipeSensitivity: 15,

    // Whether the drawer is peeking out from the edge.
    peeking: false,

    // Whether the user is dragging the drawer interactively.
    dragging: false,

    // Whether the browser has support for the transform CSS property.
    hasTransform: true,

    // Whether the browser has support for the will-change CSS property.
    hasWillChange: true,

    created: function() {
      this.hasTransform = 'transform' in this.style;
      this.hasWillChange = 'willChange' in this.style;
    },

    domReady: function() {
      // to avoid transition at the beginning e.g. page loads
      // NOTE: domReady is already raf delayed and delaying another frame
      // ensures a layout has occurred.
      this.async(function() {
        this.transition = true;
      });
    },

    /**
     * Toggles the panel open and closed.
     *
     * @method togglePanel
     */
    togglePanel: function() {
      this.selected = this.selected === 'main' ? 'drawer' : 'main';
    },

    /**
     * Opens the drawer.
     *
     * @method openDrawer
     */
    openDrawer: function() {
      this.selected = 'drawer';
    },

    /**
     * Closes the drawer.
     *
     * @method closeDrawer
     */
    closeDrawer: function() {
      this.selected = 'main';
    },

    queryMatchesChanged: function() {
      if (this.queryMatches) {
        this.selected = this.defaultSelected;
      }
      this.narrow = this.queryMatches;
      this.setAttribute('touch-action', this.swipeAllowed() ? 'pan-y' : '');
      this.fire('core-responsive-change', {narrow: this.narrow});
    },

    swipeAllowed: function() {
      return this.narrow && !this.disableSwipe;
    },

    startEdgePeek: function() {
      this.width = this.$.drawer.offsetWidth;
      this.moveDrawer(this.translateXForDeltaX(this.rightDrawer ?
          -this.edgeSwipeSensitivity : this.edgeSwipeSensitivity));
      this.peeking = true;
    },

    stopEdgePeak: function() {
      if (this.peeking) {
        this.peeking = false;
        this.moveDrawer(null);
      }
    },

    touchStart: function(e) {
      if (!this.dragging && this.selected === 'main' && this.isEdgeTouch(e))
        this.startEdgePeek();
    },

    touchEnd: function(e) {
      this.stopEdgePeak();
    },

    isEdgeTouch: function(e) {
      return this.swipeAllowed() && (this.rightDrawer ?
        e.pageX >= this.offsetWidth - this.edgeSwipeSensitivity :
        e.pageX <= this.edgeSwipeSensitivity);
    },

    // swipe support for the drawer, inspired by
    // https://github.com/Polymer/core-drawer-panel/pull/6
    trackStart : function(e) {
      if (this.swipeAllowed()) {
        this.dragging = true;

        if (this.selected === 'main')
          this.dragging = this.peeking || this.isEdgeTouch(e);

        if (this.dragging) {
          this.width = this.$.drawer.offsetWidth;
          this.transition = false;
          e.preventTap();
        }
      }
    },

    translateXForDeltaX: function(deltaX) {
      if (this.rightDrawer) {
        return Math.max(0, (this.selected === 'main') ? this.width + deltaX : deltaX);
      } else {
        return Math.min(0, (this.selected === 'main') ? deltaX - this.width : deltaX);
      }
    },

    trackx : function(e) {
      if (this.dragging) {
        if (this.peeking) {
          if (Math.abs(e.dx) <= this.edgeSwipeSensitivity)
            return; // Ignore trackx until we move past the edge peek.
          this.peeking = false;
        }
        this.moveDrawer(this.translateXForDeltaX(e.dx));
      }
    },

    trackEnd : function(e) {
      if (this.dragging) {
        this.dragging = false;
        this.transition = true;
        this.moveDrawer(null);

        if (this.rightDrawer) {
          this.selected = e.xDirection > 0 ? 'main' : 'drawer';
        } else {
          this.selected = e.xDirection > 0 ? 'drawer' : 'main';
        }
      }
    },

    transformForTranslateX: function (translateX) {
      if (translateX === null)
        return '';
      return this.hasWillChange ? 'translateX(' + translateX + 'px)' : 'translate3d(' + translateX + 'px, 0, 0)';
    },

    moveDrawer: function(translateX) {
      var s = this.$.drawer.style;

      if (this.hasTransform) {
        s.transform = this.transformForTranslateX(translateX);
      } else {
        s.webkitTransform = this.transformForTranslateX(translateX);
      }
    },

  });

;
Polymer('core-menu');;

    Polymer('core-key-helper', {
      ENTER_KEY: 13,
      ESCAPE_KEY: 27
    });
  ;

(function() {

  Polymer('core-overlay-layer', {
    publish: {
      opened: false
    },
    openedChanged: function() {
      this.classList.toggle('core-opened', this.opened);
    },
    /**
     * Adds an element to the overlay layer
     */
    addElement: function(element) {
      if (!this.parentNode) {
        document.querySelector('body').appendChild(this);
      }
      if (element.parentNode !== this) {
        element.__contents = [];
        var ip$ = element.querySelectorAll('content');
        for (var i=0, l=ip$.length, n; (i<l) && (n = ip$[i]); i++) {
          this.moveInsertedElements(n);
          this.cacheDomLocation(n);
          n.parentNode.removeChild(n);
          element.__contents.push(n);
        }
        this.cacheDomLocation(element);
        this.updateEventController(element);
        var h = this.makeHost();
        h.shadowRoot.appendChild(element);
        element.__host = h;
      }
    },
    makeHost: function() {
      var h = document.createElement('overlay-host');
      h.createShadowRoot();
      this.appendChild(h);
      return h;
    },
    moveInsertedElements: function(insertionPoint) {
      var n$ = insertionPoint.getDistributedNodes();
      var parent = insertionPoint.parentNode;
      insertionPoint.__contents = [];
      for (var i=0, l=n$.length, n; (i<l) && (n=n$[i]); i++) {
        this.cacheDomLocation(n);
        this.updateEventController(n);
        insertionPoint.__contents.push(n);
        parent.appendChild(n);  
      }
    },
    updateEventController: function(element) {
      element.eventController = this.element.findController(element);
    },
    /**
     * Removes an element from the overlay layer
     */
    removeElement: function(element) {
      element.eventController = null;
      this.replaceElement(element);
      var h = element.__host;
      if (h) {
        h.parentNode.removeChild(h);
      }
    },
    replaceElement: function(element) {
      if (element.__contents) {
        for (var i=0, c$=element.__contents, c; (c=c$[i]); i++) {
          this.replaceElement(c);
        }
        element.__contents = null;
      }
      if (element.__parentNode) {
        var n = element.__nextElementSibling && element.__nextElementSibling 
            === element.__parentNode ? element.__nextElementSibling : null;
        element.__parentNode.insertBefore(element, n);
      }
    },
    cacheDomLocation: function(element) {
      element.__nextElementSibling = element.nextElementSibling;
      element.__parentNode = element.parentNode;
    }
  });
  
})();
;

(function() {

  Polymer('core-overlay', {

    publish: {
      /**
       * The target element that will be shown when the overlay is 
       * opened. If unspecified, the core-overlay itself is the target.
       *
       * @attribute target
       * @type Object
       * @default the overlay element
       */
      target: null,


      /**
       * A `core-overlay`'s size is guaranteed to be 
       * constrained to the window size. To achieve this, the sizingElement
       * is sized with a max-height/width. By default this element is the 
       * target element, but it can be specifically set to a specific element
       * inside the target if that is more appropriate. This is useful, for 
       * example, when a region inside the overlay should scroll if needed.
       *
       * @attribute sizingTarget
       * @type Object
       * @default the target element
       */
      sizingTarget: null,
    
      /**
       * Set opened to true to show an overlay and to false to hide it.
       * A `core-overlay` may be made initially opened by setting its
       * `opened` attribute.
       * @attribute opened
       * @type boolean
       * @default false
       */
      opened: false,

      /**
       * If true, the overlay has a backdrop darkening the rest of the screen.
       * The backdrop element is attached to the document body and may be styled
       * with the class `core-overlay-backdrop`. When opened the `core-opened`
       * class is applied.
       *
       * @attribute backdrop
       * @type boolean
       * @default false
       */    
      backdrop: false,

      /**
       * If true, the overlay is guaranteed to display above page content.
       *
       * @attribute layered
       * @type boolean
       * @default false
      */
      layered: false,
    
      /**
       * By default an overlay will close automatically if the user
       * taps outside it or presses the escape key. Disable this
       * behavior by setting the `autoCloseDisabled` property to true.
       * @attribute autoCloseDisabled
       * @type boolean
       * @default false
       */
      autoCloseDisabled: false,

      /**
       * By default an overlay will focus its target or an element inside
       * it with the `autoFocus` attribute. Disable this
       * behavior by setting the `autoFocusDisabled` property to true.
       * @attribute autoFocusDisabled
       * @type boolean
       * @default false
       */
      autoFocusDisabled: false,

      /**
       * This property specifies an attribute on elements that should
       * close the overlay on tap. Should not set `closeSelector` if this
       * is set.
       *
       * @attribute closeAttribute
       * @type string
       * @default "core-overlay-toggle"
       */
      closeAttribute: 'core-overlay-toggle',

      /**
       * This property specifies a selector matching elements that should
       * close the overlay on tap. Should not set `closeAttribute` if this
       * is set.
       *
       * @attribute closeSelector
       * @type string
       * @default ""
       */
      closeSelector: '',

      /**
       * The transition property specifies a string which identifies a 
       * <a href="../core-transition/">`core-transition`</a> element that 
       * will be used to help the overlay open and close. The default
       * `core-transition-fade` will cause the overlay to fade in and out.
       *
       * @attribute transition
       * @type string
       * @default 'core-transition-fade'
       */
      transition: 'core-transition-fade'

    },

    captureEventName: 'tap',
    targetListeners: {
      'tap': 'tapHandler',
      'keydown': 'keydownHandler',
      'core-transitionend': 'transitionend'
    },
    
    registerCallback: function(element) {
      this.layer = document.createElement('core-overlay-layer');
      this.keyHelper = document.createElement('core-key-helper');
      this.meta = document.createElement('core-transition');
      this.scrim = document.createElement('div');
      this.scrim.className = 'core-overlay-backdrop';
    },

    ready: function() {
      this.target = this.target || this;
      // flush to ensure styles are installed before paint
      Platform.flush();
    },

    /** 
     * Toggle the opened state of the overlay.
     * @method toggle
     */
    toggle: function() {
      this.opened = !this.opened;
    },

    /** 
     * Open the overlay. This is equivalent to setting the `opened`
     * property to true.
     * @method open
     */
    open: function() {
      this.opened = true;
    },

    /** 
     * Close the overlay. This is equivalent to setting the `opened` 
     * property to false.
     * @method close
     */
    close: function() {
      this.opened = false;
    },

    domReady: function() {
      this.ensureTargetSetup();
    },

    targetChanged: function(old) {
      if (this.target) {
        // really make sure tabIndex is set
        if (this.target.tabIndex < 0) {
          this.target.tabIndex = -1;
        }
        this.addElementListenerList(this.target, this.targetListeners);
        this.target.style.display = 'none';
        this.target.__overlaySetup = false;
      }
      if (old) {
        this.removeElementListenerList(old, this.targetListeners);
        var transition = this.getTransition();
        if (transition) {
          transition.teardown(old);
        } else {
          old.style.position = '';
          old.style.outline = '';
        }
        old.style.display = '';
      }
    },

    transitionChanged: function(old) {
      if (!this.target) {
        return;
      }
      if (old) {
        this.getTransition(old).teardown(this.target);
      }
      this.target.__overlaySetup = false;
    },

    // NOTE: wait to call this until we're as sure as possible that target
    // is styled.
    ensureTargetSetup: function() {
      if (!this.target || this.target.__overlaySetup) {
        return;
      }
      if (!this.sizingTarget) {
        this.sizingTarget = this.target;
      }
      this.target.__overlaySetup = true;
      this.target.style.display = '';
      var transition = this.getTransition();
      if (transition) {
        transition.setup(this.target);
      }
      var style = this.target.style;
      var computed = getComputedStyle(this.target);
      if (computed.position === 'static') {
        style.position = 'fixed';
      }
      style.outline = 'none';
      style.display = 'none';
    },

    openedChanged: function() {
      this.transitioning = true;
      this.ensureTargetSetup();
      this.prepareRenderOpened();
      // async here to allow overlay layer to become visible.
      this.async(function() {
        this.target.style.display = '';
        // force layout to ensure transitions will go
        this.target.offsetWidth;
        this.renderOpened();
      });
      this.fire('core-overlay-open', this.opened);
    },

    // tasks which must occur before opening; e.g. making the element visible
    prepareRenderOpened: function() {
      if (this.opened) {
        addOverlay(this);
      }
      this.prepareBackdrop();
      // async so we don't auto-close immediately via a click.
      this.async(function() {
        if (!this.autoCloseDisabled) {
          this.enableElementListener(this.opened, document,
              this.captureEventName, 'captureHandler', true);
        }
      });
      this.enableElementListener(this.opened, window, 'resize',
          'resizeHandler');

      if (this.opened) {
        // force layout so SD Polyfill renders
        this.target.offsetHeight;
        this.discoverDimensions();
        // if we are showing, then take care when positioning
        this.preparePositioning();
        this.positionTarget();
        this.updateTargetDimensions();
        this.finishPositioning();
        if (this.layered) {
          this.layer.addElement(this.target);
          this.layer.opened = this.opened;
        }
      }
    },

    // tasks which cause the overlay to actually open; typically play an
    // animation
    renderOpened: function() {
      var transition = this.getTransition();
      if (transition) {
        transition.go(this.target, {opened: this.opened});
      } else {
        this.transitionend();
      }
      this.renderBackdropOpened();
    },

    // finishing tasks; typically called via a transition
    transitionend: function(e) {
      // make sure this is our transition event.
      if (e && e.target !== this.target) {
        return;
      }
      this.transitioning = false;
      if (!this.opened) {
        this.resetTargetDimensions();
        this.target.style.display = 'none';
        this.completeBackdrop();
        removeOverlay(this);
        if (this.layered) {
          if (!currentOverlay()) {
            this.layer.opened = this.opened;
          }
          this.layer.removeElement(this.target);
        }
      }
      this.fire('core-overlay-' + (this.opened ? 'open' : 'close') + 
          '-completed');
      this.applyFocus();
    },

    prepareBackdrop: function() {
      if (this.backdrop && this.opened) {
        if (!this.scrim.parentNode) {
          document.body.appendChild(this.scrim);
          this.scrim.style.zIndex = currentOverlayZ() - 1;
        }
        trackBackdrop(this);
      }
    },

    renderBackdropOpened: function() {
      if (this.backdrop && getBackdrops().length < 2) {
        this.scrim.classList.toggle('core-opened', this.opened);
      }
    },

    completeBackdrop: function() {
      if (this.backdrop) {
        trackBackdrop(this);
        if (getBackdrops().length === 0) {
          this.scrim.parentNode.removeChild(this.scrim);
        }
      }
    },

    preparePositioning: function() {
      this.target.style.transition = this.target.style.webkitTransition = 'none';
      this.target.style.transform = this.target.style.webkitTransform = 'none';
      this.target.style.display = '';
    },

    discoverDimensions: function() {
      if (this.dimensions) {
        return;
      }
      var target = getComputedStyle(this.target);
      var sizer = getComputedStyle(this.sizingTarget);
      this.dimensions = {
        position: {
          v: target.top !== 'auto' ? 'top' : (target.bottom !== 'auto' ?
            'bottom' : null),
          h: target.left !== 'auto' ? 'left' : (target.right !== 'auto' ?
            'right' : null),
          css: target.position
        },
        size: {
          v: sizer.maxHeight !== 'none',
          h: sizer.maxWidth !== 'none'
        },
        margin: {
          top: parseInt(target.marginTop) || 0,
          right: parseInt(target.marginRight) || 0,
          bottom: parseInt(target.marginBottom) || 0,
          left: parseInt(target.marginLeft) || 0
        }
      };
    },

    finishPositioning: function(target) {
      this.target.style.display = 'none';
      this.target.style.transform = this.target.style.webkitTransform = '';
      // force layout to avoid application of transform
      this.target.offsetWidth;
      this.target.style.transition = this.target.style.webkitTransition = '';
    },

    getTransition: function(name) {
      return this.meta.byId(name || this.transition);
    },

    getFocusNode: function() {
      return this.target.querySelector('[autofocus]') || this.target;
    },

    applyFocus: function() {
      var focusNode = this.getFocusNode();
      if (this.opened) {
        if (!this.autoFocusDisabled) {
          focusNode.focus();
        }
      } else {
        focusNode.blur();
        if (currentOverlay() == this) {
          console.warn('Current core-overlay is attempting to focus itself as next! (bug)');
        } else {
          focusOverlay();
        }
      }
    },

    positionTarget: function() {
      // fire positioning event
      this.fire('core-overlay-position', {target: this.target,
          sizingTarget: this.sizingTarget, opened: this.opened});
      if (!this.dimensions.position.v) {
        this.target.style.top = '0px';
      }
      if (!this.dimensions.position.h) {
        this.target.style.left = '0px';
      }
    },

    updateTargetDimensions: function() {
      this.sizeTarget();
      this.repositionTarget();
    },

    sizeTarget: function() {
      this.sizingTarget.style.boxSizing = 'border-box';
      var dims = this.dimensions;
      var rect = this.target.getBoundingClientRect();
      if (!dims.size.v) {
        this.sizeDimension(rect, dims.position.v, 'top', 'bottom', 'Height');
      }
      if (!dims.size.h) {
        this.sizeDimension(rect, dims.position.h, 'left', 'right', 'Width');
      }
    },

    sizeDimension: function(rect, positionedBy, start, end, extent) {
      var dims = this.dimensions;
      var flip = (positionedBy === end);
      var m = flip ? start : end;
      var ws = window['inner' + extent];
      var o = dims.margin[m] + (flip ? ws - rect[end] : 
          rect[start]);
      var offset = 'offset' + extent;
      var o2 = this.target[offset] - this.sizingTarget[offset];
      this.sizingTarget.style['max' + extent] = (ws - o - o2) + 'px';
    },

    // vertically and horizontally center if not positioned
    repositionTarget: function() {
      // only center if position fixed.      
      if (this.dimensions.position.css !== 'fixed') {
        return; 
      }
      if (!this.dimensions.position.v) {
        var t = (window.innerHeight - this.target.offsetHeight) / 2;
        t -= this.dimensions.margin.top;
        this.target.style.top = t + 'px';
      }

      if (!this.dimensions.position.h) {
        var l = (window.innerWidth - this.target.offsetWidth) / 2;
        l -= this.dimensions.margin.left;
        this.target.style.left = l + 'px';
      }
    },

    resetTargetDimensions: function() {
      if (!this.dimensions.size.v) {
        this.sizingTarget.style.maxHeight = '';  
      }
      if (!this.dimensions.size.h) {
        this.sizingTarget.style.maxWidth = '';  
      }
      this.dimensions = null;
    },

    tapHandler: function(e) {
      // closeSelector takes precedence since closeAttribute has a default non-null value.
      if (e.target &&
          (this.closeSelector && e.target.matches(this.closeSelector)) ||
          (this.closeAttribute && e.target.hasAttribute(this.closeAttribute))) {
        this.toggle();
      } else {
        if (this.autoCloseJob) {
          this.autoCloseJob.stop();
          this.autoCloseJob = null;
        }
      }
    },
    
    // We use the traditional approach of capturing events on document
    // to to determine if the overlay needs to close. However, due to 
    // ShadowDOM event retargeting, the event target is not useful. Instead
    // of using it, we attempt to close asynchronously and prevent the close
    // if a tap event is immediately heard on the target.
    // TODO(sorvell): This approach will not work with modal. For
    // this we need a scrim.
    captureHandler: function(e) {
      if (!this.autoCloseDisabled && (currentOverlay() == this)) {
        this.autoCloseJob = this.job(this.autoCloseJob, function() {
          this.close();
        });
      }
    },

    keydownHandler: function(e) {
      if (!this.autoCloseDisabled && (e.keyCode == this.keyHelper.ESCAPE_KEY)) {
        this.close();
        e.stopPropagation();
      }
    },

    /**
     * Extensions of core-overlay should implement the `resizeHandler`
     * method to adjust the size and position of the overlay when the 
     * browser window resizes.
     * @method resizeHandler
     */
    resizeHandler: function() {
      this.updateTargetDimensions();
    },

    // TODO(sorvell): these utility methods should not be here.
    addElementListenerList: function(node, events) {
      for (var i in events) {
        this.addElementListener(node, i, events[i]);
      }
    },

    removeElementListenerList: function(node, events) {
      for (var i in events) {
        this.removeElementListener(node, i, events[i]);
      }
    },

    enableElementListener: function(enable, node, event, methodName, capture) {
      if (enable) {
        this.addElementListener(node, event, methodName, capture);
      } else {
        this.removeElementListener(node, event, methodName, capture);
      }
    },

    addElementListener: function(node, event, methodName, capture) {
      var fn = this._makeBoundListener(methodName);
      if (node && fn) {
        Polymer.addEventListener(node, event, fn, capture);
      }
    },

    removeElementListener: function(node, event, methodName, capture) {
      var fn = this._makeBoundListener(methodName);
      if (node && fn) {
        Polymer.removeEventListener(node, event, fn, capture);
      }
    },

    _makeBoundListener: function(methodName) {
      var self = this, method = this[methodName];
      if (!method) {
        return;
      }
      var bound = '_bound' + methodName;
      if (!this[bound]) {
        this[bound] = function(e) {
          method.call(self, e);
        };
      }
      return this[bound];
    },
  });

  // TODO(sorvell): This should be an element with private state so it can
  // be independent of overlay.
  // track overlays for z-index and focus managemant
  var overlays = [];
  function addOverlay(overlay) {
    var z0 = currentOverlayZ();
    overlays.push(overlay);
    var z1 = currentOverlayZ();
    if (z1 <= z0) {
      applyOverlayZ(overlay, z0);
    }
  }

  function removeOverlay(overlay) {
    var i = overlays.indexOf(overlay);
    if (i >= 0) {
      overlays.splice(i, 1);
      setZ(overlay, '');
    }
  }
  
  function applyOverlayZ(overlay, aboveZ) {
    setZ(overlay.target, aboveZ + 2);
  }
  
  function setZ(element, z) {
    element.style.zIndex = z;
  }

  function currentOverlay() {
    return overlays[overlays.length-1];
  }
  
  var DEFAULT_Z = 10;
  
  function currentOverlayZ() {
    var z;
    var current = currentOverlay();
    if (current) {
      var z1 = window.getComputedStyle(current.target).zIndex;
      if (!isNaN(z1)) {
        z = Number(z1);
      }
    }
    return z || DEFAULT_Z;
  }
  
  function focusOverlay() {
    var current = currentOverlay();
    // We have to be careful to focus the next overlay _after_ any current
    // transitions are complete (due to the state being toggled prior to the
    // transition). Otherwise, we risk infinite recursion when a transitioning
    // (closed) overlay becomes the current overlay.
    //
    // NOTE: We make the assumption that any overlay that completes a transition
    // will call into focusOverlay to kick the process back off. Currently:
    // transitionend -> applyFocus -> focusOverlay.
    if (current && !current.transitioning) {
      current.applyFocus();
    }
  }

  var backdrops = [];
  function trackBackdrop(element) {
    if (element.opened) {
      backdrops.push(element);
    } else {
      var i = backdrops.indexOf(element);
      if (i >= 0) {
        backdrops.splice(i, 1);
      }
    }
  }

  function getBackdrops() {
    return backdrops;
  }
})();
;


  Polymer('core-transition-css', {
    
    /**
     * The class that will be applied to all animated nodes.
     *
     * @attribute baseClass
     * @type string
     * @default "core-transition"
     */
    baseClass: 'core-transition',

    /**
     * The class that will be applied to nodes in the opened state.
     *
     * @attribute openedClass
     * @type string
     * @default "core-opened"
     */
    openedClass: 'core-opened',

    /**
     * The class that will be applied to nodes in the closed state.
     *
     * @attribute closedClass
     * @type string
     * @default "core-closed"
     */
    closedClass: 'core-closed',

    /**
     * Event to listen to for animation completion.
     *
     * @attribute completeEventName
     * @type string
     * @default "transitionEnd"
     */
    completeEventName: 'transitionend',

    publish: {
      /**
       * A secondary configuration attribute for the animation. The class
       * `<baseClass>-<transitionType` is applied to the animated node during
       * `setup`.
       *
       * @attribute transitionType
       * @type string
       */
      transitionType: null
    },

    registerCallback: function(element) {
      this.transitionStyle = element.templateContent().firstElementChild;
    },

    // template is just for loading styles, we don't need a shadowRoot
    fetchTemplate: function() {
      return null;
    },

    go: function(node, state) {
      if (state.opened !== undefined) {
        this.transitionOpened(node, state.opened);
      }
    },

    setup: function(node) {
      if (!node._hasTransitionStyle) {
        if (!node.shadowRoot) {
          node.createShadowRoot().innerHTML = '<content></content>';
        }
        this.installScopeStyle(this.transitionStyle, 'transition',
            node.shadowRoot);
        node._hasTransitionStyle = true;
      }
      node.classList.add(this.baseClass);
      if (this.transitionType) {
        node.classList.add(this.baseClass + '-' + this.transitionType);
      }
    },

    teardown: function(node) {
      node.classList.remove(this.baseClass);
      if (this.transitionType) {
        node.classList.remove(this.baseClass + '-' + this.transitionType);
      }
    },

    transitionOpened: function(node, opened) {
      this.listenOnce(node, this.completeEventName, function() {
        node.classList.toggle(this.revealedClass, opened);
        if (!opened) {
          node.classList.remove(this.closedClass);
        }
        this.complete(node);
      });
      node.classList.toggle(this.openedClass, opened);
      node.classList.toggle(this.closedClass, !opened);
    }

  });
;


  (function() {
  
    var currentToast;
  
    Polymer('paper-toast', {
  
      /**
       * The text shows in a toast.
       *
       * @attribute text
       * @type string
       * @default ''
       */
      text: '',
      
      /**
       * The duration in milliseconds to show the toast.
       *
       * @attribute duration
       * @type number
       * @default 3000
       */
      duration: 3000,
      
      /**
       * Set opened to true to show the toast and to false to hide it.
       *
       * @attribute opened
       * @type boolean
       * @default false
       */
      opened: false,
      
      /**
       * Min-width when the toast changes to narrow layout.  In narrow layout,
       * the toast fits at the bottom of the screen when opened.
       *
       * @attribute responsiveWidth
       * @type string
       * @default '480px'
       */
      responsiveWidth: '480px',
      
      /**
       * If true, the toast can't be swiped.
       *
       * @attribute swipeDisabled
       * @type boolean
       * @default false
       */
      swipeDisabled: false,
      
      eventDelegates: {
        trackstart: 'trackStart',
        track: 'track',
        trackend: 'trackEnd',
        transitionend: 'transitionEnd'
      },
      
      narrowModeChanged: function() {
        this.classList.toggle('fit-bottom', this.narrowMode);
      },
      
      openedChanged: function() {
        if (this.opened) {
          this.dismissJob = this.job(this.dismissJob, this.dismiss, this.duration);
        } else {
          this.dismissJob && this.dismissJob.stop();
          this.dismiss();
        }
      },
      
      /** 
       * Toggle the opened state of the toast.
       * @method toggle
       */
      toggle: function() {
        this.opened = !this.opened;
      },
      
      /** 
       * Show the toast for the specified duration
       * @method show
       */
      show: function() {
        if (currentToast) {
          currentToast.dismiss();
        }
        currentToast = this;
        this.opened = true;
      },
      
      /** 
       * Dismiss the toast and hide it.
       * @method dismiss
       */
      dismiss: function() {
        if (this.dragging) {
          this.shouldDismiss = true;
        } else {
          this.opened = false;
          if (currentToast === this) {
            currentToast = null;
          }
        }
      },
      
      trackStart: function(e) {
        if (!this.swipeDisabled) {
          e.preventTap();
          this.vertical = e.yDirection;
          this.w = this.offsetWidth;
          this.h = this.offsetHeight;
          this.dragging = true;
          this.classList.add('dragging');
        }
      },
      
      track: function(e) {
        if (this.dragging) {
          var s = this.style;
          if (this.vertical) {
            var y = e.dy;
            s.opacity = (this.h - Math.abs(y)) / this.h;
            s.webkitTransform = s.transform =  'translate3d(0, ' + y + 'px, 0)';
          } else {
            var x = e.dx;
            s.opacity = (this.w - Math.abs(x)) / this.w;
            s.webkitTransform = s.transform = 'translate3d(' + x + 'px, 0, 0)';
          }
        }
      },
      
      trackEnd: function(e) {
        if (this.dragging) {
          this.classList.remove('dragging');
          this.style.opacity = null;
          this.style.webkitTransform = this.style.transform = null;
          var cl = this.classList;
          if (this.vertical) {
            cl.toggle('fade-out-down', e.yDirection === 1 && e.dy > 0);
            cl.toggle('fade-out-up', e.yDirection === -1 && e.dy < 0);
          } else {
            cl.toggle('fade-out-right', e.xDirection === 1 && e.dx > 0);
            cl.toggle('fade-out-left', e.xDirection === -1 && e.dx < 0);
          }
          this.dragging = false;
        }
      },
      
      transitionEnd: function() {
        var cl = this.classList;
        if (cl.contains('fade-out-right') || cl.contains('fade-out-left') || 
            cl.contains('fade-out-down') || cl.contains('fade-out-up')) {
          this.dismiss();
          cl.remove('fade-out-right', 'fade-out-left', 
              'fade-out-down', 'fade-out-up');
        } else if (this.shouldDismiss) {
          this.dismiss();
        }
        this.shouldDismiss = false;
      }
  
    });
    
  })();

;

    Polymer('paper-shadow', {

      publish: {
        /**
         * If set, the shadow is applied to this node.
         *
         * @attribute target
         * @type Element
         * @default null
         */
        target: {value: null, reflect: true},

        /**
         * The z-depth of this shadow, from 0-5.
         *
         * @attribute z
         * @type number
         * @default 1
         */
        z: {value: 1, reflect: true},

        /**
         * If true, the shadow animates between z-depth changes.
         *
         * @attribute animated
         * @type boolean
         * @default false
         */
        animated: {value: false, reflect: true},

        /**
         * Workaround: getComputedStyle is wrong sometimes so `paper-shadow`
         * may overwrite the `position` CSS property. Set this property to
         * true to prevent this.
         *
         * @attribute hasPosition
         * @type boolean
         * @default false
         */
        hasPosition: false
      },

      // NOTE: include template so that styles are loaded, but remove
      // so that we can decide dynamically what part to include
      registerCallback: function(polymerElement) {
        var template = polymerElement.querySelector('template');
        this._style = template.content.querySelector('style');
        this._style.removeAttribute('no-shim');
      },

      fetchTemplate: function() {
        return null;
      },

      attached: function() {
        // If no target is bound at attach, default the target to the parent
        // element or shadow host.
        if (!this.target) {
          if (!this.parentElement && this.parentNode.host) {
            this.target = this.parentNode.host;
          } else if (this.parentElement && (window.ShadowDOMPolyfill ? this.parentElement !== wrap(document.body) : this.parentElement !== document.body)) {
            this.target = this.parentElement;
          }
        }
      },

      targetChanged: function(old) {
        if (old) {
          this.removeShadow(old);
        }
        if (this.target) {
          this.addShadow(this.target);
        }
      },

      zChanged: function(old) {
        if (this.target && this.target._paperShadow) {
          var shadow = this.target._paperShadow;
          ['top', 'bottom'].forEach(function(s) {
            shadow[s].classList.remove('paper-shadow-' + s + '-z-' + old);
            shadow[s].classList.add('paper-shadow-' + s + '-z-' + this.z);
          }.bind(this));
        }
      },

      animatedChanged: function() {
        if (this.target && this.target._paperShadow) {
          var shadow = this.target._paperShadow;
          ['top', 'bottom'].forEach(function(s) {
            if (this.animated) {
              shadow[s].classList.add('paper-shadow-animated');
            } else {
              shadow[s].classList.remove('paper-shadow-animated');
            }
          }.bind(this));
        }
      },

      addShadow: function(node) {
        if (node._paperShadow) {
          return;
        }

        if (!node._hasShadowStyle) {
          if (!node.shadowRoot) {
            node.createShadowRoot().innerHTML = '<content></content>';
          }
          this.installScopeStyle(this._style, 'shadow', node.shadowRoot);
          node._hasShadowStyle = true;
        }

        var computed = getComputedStyle(node);
        if (!this.hasPosition && computed.position === 'static') {
          node.style.position = 'relative';
        }
        node.style.overflow = 'visible';

        // Both the top and bottom shadows are children of the target, so
        // it does not affect the classes and CSS properties of the target.
        ['top', 'bottom'].forEach(function(s) {
          var inner = (node._paperShadow && node._paperShadow[s]) || document.createElement('div');
          inner.classList.add('paper-shadow');
          inner.classList.add('paper-shadow-' + s + '-z-' + this.z);
          if (this.animated) {
            inner.classList.add('paper-shadow-animated');
          }

          if (node.shadowRoot) {
            node.shadowRoot.insertBefore(inner, node.shadowRoot.firstChild);
          } else {
            node.insertBefore(inner, node.firstChild);
          }

          node._paperShadow = node._paperShadow || {};
          node._paperShadow[s] = inner;
        }.bind(this));

      },

      removeShadow: function(node) {
        if (!node._paperShadow) {
          return;
        }

        ['top', 'bottom'].forEach(function(s) {
          node._paperShadow[s].remove();
        });
        node._paperShadow = null;

        node.style.position = null;
      }

    });
  ;

    Polymer('paper-focusable', {

      publish: {

        /**
         * If true, the button is currently active either because the
         * user is holding down the button, or the button is a toggle
         * and is currently in the active state.
         *
         * @attribute active
         * @type boolean
         * @default false
         */
        active: {value: false, reflect: true},

        /**
         * If true, the element currently has focus due to keyboard
         * navigation.
         *
         * @attribute focused
         * @type boolean
         * @default false
         */
        focused: {value: false, reflect: true},

        /**
         * If true, the user is currently holding down the button.
         *
         * @attribute pressed
         * @type boolean
         * @default false
         */
        pressed: {value: false, reflect: true},

        /**
         * If true, the user cannot interact with this element.
         *
         * @attribute disabled
         * @type boolean
         * @default false
         */
        disabled: {value: false, reflect: true},

        /**
         * If true, the button toggles the active state with each tap.
         * Otherwise, the button becomes active when the user is holding
         * it down.
         *
         * @attribute isToggle
         * @type boolean
         * @default false
         */
        isToggle: {value: false, reflect: false}

      },

      disabledChanged: function() {
        if (this.disabled) {
          this.removeAttribute('tabindex');
        } else {
          this.setAttribute('tabindex', 0);
        }
      },

      downAction: function() {
        this.pressed = true;

        if (this.isToggle) {
          this.active = !this.active;
        } else {
          this.active = true;
        }
      },

      // Pulling up the context menu for an item should focus it; but we need to
      // be careful about how we deal with down/up events surrounding context
      // menus. The up event typically does not fire until the context menu
      // closes: so we focus immediately.
      //
      // This fires _after_ downAction.
      contextMenuAction: function(e) {
        // Note that upAction may fire _again_ on the actual up event.
        this.upAction(e);
        this.focusAction();
      },

      upAction: function() {
        this.pressed = false;

        if (!this.isToggle) {
          this.active = false;
        }
      },

      focusAction: function() {
        if (!this.pressed) {
          // Only render the "focused" state if the element gains focus due to
          // keyboard navigation.
          this.focused = true;
        }
      },

      blurAction: function() {
        this.focused = false;
      }

    });

  ;

    Polymer('paper-button-base',{

      z: 1,

      activeChanged: function() {
        this.super();

        if (this.active) {
          // FIXME: remove when paper-ripple can have a default 'down' state.
          if (!this.lastEvent) {
            var rect = this.getBoundingClientRect();
            this.lastEvent = {
              x: rect.left + rect.width / 2,
              y: rect.top + rect.height / 2
            }
          }
          this.$.ripple.downAction(this.lastEvent);
        } else {
          this.$.ripple.upAction();
        }
        this.adjustZ();
      },

      disabledChanged: function() {
        this.super();
        if (this.disabled) {
          this.setAttribute('aria-disabled', '');
        } else {
          this.removeAttribute('aria-disabled');
        }
        this.adjustZ();
      },

      recenteringTouchChanged: function() {
        if (this.$.ripple) {
          this.$.ripple.classList.toggle('recenteringTouch', this.recenteringTouch);
        }
      },

      fillChanged: function() {
        if (this.$.ripple) {
          this.$.ripple.classList.toggle('fill', this.fill);
        }
      },

      adjustZ: function() {
        if (this.active) {
          this.z = 2;
        } else if (this.disabled) {
          this.z = 0;
        } else {
          this.z = 1;
        }
      },

      downAction: function(e) {
        this.super(e);
        this.lastEvent = e;
        if (!this.$.ripple) {
          var ripple = document.createElement('paper-ripple');
          ripple.setAttribute('id', 'ripple');
          ripple.setAttribute('fit', '');
          if (this.recenteringTouch) {
            ripple.classList.add('recenteringTouch');
          }
          if (!this.fill) {
            ripple.classList.add('circle');
          }
          this.$.ripple = ripple;
          this.shadowRoot.insertBefore(ripple, this.shadowRoot.firstChild);
          // No need to forward the event to the ripple because the ripple
          // is triggered in activeChanged
        }
      }

    });
  ;


  (function() {

    var waveMaxRadius = 150;
    //
    // INK EQUATIONS
    //
    function waveRadiusFn(touchDownMs, touchUpMs, anim) {
      // Convert from ms to s.
      var touchDown = touchDownMs / 1000;
      var touchUp = touchUpMs / 1000;
      var totalElapsed = touchDown + touchUp;
      var ww = anim.width, hh = anim.height;
      // use diagonal size of container to avoid floating point math sadness
      var waveRadius = Math.min(Math.sqrt(ww * ww + hh * hh), waveMaxRadius) * 1.1 + 5;
      var duration = 1.1 - .2 * (waveRadius / waveMaxRadius);
      var tt = (totalElapsed / duration);

      var size = waveRadius * (1 - Math.pow(80, -tt));
      return Math.abs(size);
    }

    function waveOpacityFn(td, tu, anim) {
      // Convert from ms to s.
      var touchDown = td / 1000;
      var touchUp = tu / 1000;
      var totalElapsed = touchDown + touchUp;

      if (tu <= 0) {  // before touch up
        return anim.initialOpacity;
      }
      return Math.max(0, anim.initialOpacity - touchUp * anim.opacityDecayVelocity);
    }

    function waveOuterOpacityFn(td, tu, anim) {
      // Convert from ms to s.
      var touchDown = td / 1000;
      var touchUp = tu / 1000;

      // Linear increase in background opacity, capped at the opacity
      // of the wavefront (waveOpacity).
      var outerOpacity = touchDown * 0.3;
      var waveOpacity = waveOpacityFn(td, tu, anim);
      return Math.max(0, Math.min(outerOpacity, waveOpacity));
    }

    // Determines whether the wave should be completely removed.
    function waveDidFinish(wave, radius, anim) {
      var waveOpacity = waveOpacityFn(wave.tDown, wave.tUp, anim);

      // If the wave opacity is 0 and the radius exceeds the bounds
      // of the element, then this is finished.
      return waveOpacity < 0.01 && radius >= Math.min(wave.maxRadius, waveMaxRadius);
    };

    function waveAtMaximum(wave, radius, anim) {
      var waveOpacity = waveOpacityFn(wave.tDown, wave.tUp, anim);

      return waveOpacity >= anim.initialOpacity && radius >= Math.min(wave.maxRadius, waveMaxRadius);
    }

    //
    // DRAWING
    //
    function drawRipple(ctx, x, y, radius, innerAlpha, outerAlpha) {
      // Only animate opacity and transform
      if (outerAlpha !== undefined) {
        ctx.bg.style.opacity = outerAlpha;
      }
      ctx.wave.style.opacity = innerAlpha;

      var s = radius / (ctx.containerSize / 2);
      var dx = x - (ctx.containerWidth / 2);
      var dy = y - (ctx.containerHeight / 2);

      ctx.wc.style.webkitTransform = 'translate3d(' + dx + 'px,' + dy + 'px,0)';
      ctx.wc.style.transform = 'translate3d(' + dx + 'px,' + dy + 'px,0)';

      // 2d transform for safari because of border-radius and overflow:hidden clipping bug.
      // https://bugs.webkit.org/show_bug.cgi?id=98538
      ctx.wave.style.webkitTransform = 'scale(' + s + ',' + s + ')';
      ctx.wave.style.transform = 'scale3d(' + s + ',' + s + ',1)';
    }

    //
    // SETUP
    //
    function createWave(elem) {
      var elementStyle = window.getComputedStyle(elem);
      var fgColor = elementStyle.color;

      var inner = document.createElement('div');
      inner.style.backgroundColor = fgColor;
      inner.classList.add('wave');

      var outer = document.createElement('div');
      outer.classList.add('wave-container');
      outer.appendChild(inner);

      var container = elem.$.waves;
      container.appendChild(outer);

      elem.$.bg.style.backgroundColor = fgColor;

      var wave = {
        bg: elem.$.bg,
        wc: outer,
        wave: inner,
        waveColor: fgColor,
        maxRadius: 0,
        isMouseDown: false,
        mouseDownStart: 0.0,
        mouseUpStart: 0.0,
        tDown: 0,
        tUp: 0
      };
      return wave;
    }

    function removeWaveFromScope(scope, wave) {
      if (scope.waves) {
        var pos = scope.waves.indexOf(wave);
        scope.waves.splice(pos, 1);
        // FIXME cache nodes
        wave.wc.remove();
      }
    };

    // Shortcuts.
    var pow = Math.pow;
    var now = Date.now;
    if (window.performance && performance.now) {
      now = performance.now.bind(performance);
    }

    function cssColorWithAlpha(cssColor, alpha) {
        var parts = cssColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        if (typeof alpha == 'undefined') {
            alpha = 1;
        }
        if (!parts) {
          return 'rgba(255, 255, 255, ' + alpha + ')';
        }
        return 'rgba(' + parts[1] + ', ' + parts[2] + ', ' + parts[3] + ', ' + alpha + ')';
    }

    function dist(p1, p2) {
      return Math.sqrt(pow(p1.x - p2.x, 2) + pow(p1.y - p2.y, 2));
    }

    function distanceFromPointToFurthestCorner(point, size) {
      var tl_d = dist(point, {x: 0, y: 0});
      var tr_d = dist(point, {x: size.w, y: 0});
      var bl_d = dist(point, {x: 0, y: size.h});
      var br_d = dist(point, {x: size.w, y: size.h});
      return Math.max(tl_d, tr_d, bl_d, br_d);
    }

    Polymer('paper-ripple', {

      /**
       * The initial opacity set on the wave.
       *
       * @attribute initialOpacity
       * @type number
       * @default 0.25
       */
      initialOpacity: 0.25,

      /**
       * How fast (opacity per second) the wave fades out.
       *
       * @attribute opacityDecayVelocity
       * @type number
       * @default 0.8
       */
      opacityDecayVelocity: 0.8,

      backgroundFill: true,
      pixelDensity: 2,

      eventDelegates: {
        down: 'downAction',
        up: 'upAction'
      },

      ready: function() {
        this.waves = [];
      },

      downAction: function(e) {
        var wave = createWave(this);

        this.cancelled = false;
        wave.isMouseDown = true;
        wave.tDown = 0.0;
        wave.tUp = 0.0;
        wave.mouseUpStart = 0.0;
        wave.mouseDownStart = now();

        var rect = this.getBoundingClientRect();
        var width = rect.width;
        var height = rect.height;
        var touchX = e.x - rect.left;
        var touchY = e.y - rect.top;

        wave.startPosition = {x:touchX, y:touchY};

        if (this.classList.contains("recenteringTouch")) {
          wave.endPosition = {x: width / 2,  y: height / 2};
          wave.slideDistance = dist(wave.startPosition, wave.endPosition);
        }
        wave.containerSize = Math.max(width, height);
        wave.containerWidth = width;
        wave.containerHeight = height;
        wave.maxRadius = distanceFromPointToFurthestCorner(wave.startPosition, {w: width, h: height});

        // The wave is circular so constrain its container to 1:1
        wave.wc.style.top = (wave.containerHeight - wave.containerSize) / 2 + 'px';
        wave.wc.style.left = (wave.containerWidth - wave.containerSize) / 2 + 'px';
        wave.wc.style.width = wave.containerSize + 'px';
        wave.wc.style.height = wave.containerSize + 'px';

        this.waves.push(wave);

        if (!this._loop) {
          this._loop = this.animate.bind(this, {
            width: width,
            height: height
          });
          requestAnimationFrame(this._loop);
        }
        // else there is already a rAF
      },

      upAction: function() {
        for (var i = 0; i < this.waves.length; i++) {
          // Declare the next wave that has mouse down to be mouse'ed up.
          var wave = this.waves[i];
          if (wave.isMouseDown) {
            wave.isMouseDown = false
            wave.mouseUpStart = now();
            wave.mouseDownStart = 0;
            wave.tUp = 0.0;
            break;
          }
        }
        this._loop && requestAnimationFrame(this._loop);
      },

      cancel: function() {
        this.cancelled = true;
      },

      animate: function(ctx) {
        var shouldRenderNextFrame = false;

        var deleteTheseWaves = [];
        // The oldest wave's touch down duration
        var longestTouchDownDuration = 0;
        var longestTouchUpDuration = 0;
        // Save the last known wave color
        var lastWaveColor = null;
        // wave animation values
        var anim = {
          initialOpacity: this.initialOpacity,
          opacityDecayVelocity: this.opacityDecayVelocity,
          height: ctx.height,
          width: ctx.width
        }

        for (var i = 0; i < this.waves.length; i++) {
          var wave = this.waves[i];

          if (wave.mouseDownStart > 0) {
            wave.tDown = now() - wave.mouseDownStart;
          }
          if (wave.mouseUpStart > 0) {
            wave.tUp = now() - wave.mouseUpStart;
          }

          // Determine how long the touch has been up or down.
          var tUp = wave.tUp;
          var tDown = wave.tDown;
          longestTouchDownDuration = Math.max(longestTouchDownDuration, tDown);
          longestTouchUpDuration = Math.max(longestTouchUpDuration, tUp);

          // Obtain the instantenous size and alpha of the ripple.
          var radius = waveRadiusFn(tDown, tUp, anim);
          var waveAlpha =  waveOpacityFn(tDown, tUp, anim);
          var waveColor = cssColorWithAlpha(wave.waveColor, waveAlpha);
          lastWaveColor = wave.waveColor;

          // Position of the ripple.
          var x = wave.startPosition.x;
          var y = wave.startPosition.y;

          // Ripple gravitational pull to the center of the canvas.
          if (wave.endPosition) {

            // This translates from the origin to the center of the view  based on the max dimension of
            var translateFraction = Math.min(1, radius / wave.containerSize * 2 / Math.sqrt(2) );

            x += translateFraction * (wave.endPosition.x - wave.startPosition.x);
            y += translateFraction * (wave.endPosition.y - wave.startPosition.y);
          }

          // If we do a background fill fade too, work out the correct color.
          var bgFillColor = null;
          if (this.backgroundFill) {
            var bgFillAlpha = waveOuterOpacityFn(tDown, tUp, anim);
            bgFillColor = cssColorWithAlpha(wave.waveColor, bgFillAlpha);
          }

          // Draw the ripple.
          drawRipple(wave, x, y, radius, waveAlpha, bgFillAlpha);

          // Determine whether there is any more rendering to be done.
          var maximumWave = waveAtMaximum(wave, radius, anim);
          var waveDissipated = waveDidFinish(wave, radius, anim);
          var shouldKeepWave = !waveDissipated || maximumWave;
          // keep rendering dissipating wave when at maximum radius on upAction
          var shouldRenderWaveAgain = wave.mouseUpStart ? !waveDissipated : !maximumWave;
          shouldRenderNextFrame = shouldRenderNextFrame || shouldRenderWaveAgain;
          if (!shouldKeepWave || this.cancelled) {
            deleteTheseWaves.push(wave);
          }
       }

        if (shouldRenderNextFrame) {
          requestAnimationFrame(this._loop);
        }

        for (var i = 0; i < deleteTheseWaves.length; ++i) {
          var wave = deleteTheseWaves[i];
          removeWaveFromScope(this, wave);
        }

        if (!this.waves.length && this._loop) {
          // clear the background color
          this.$.bg.style.backgroundColor = null;
          this._loop = null;
          this.fire('core-transitionend');
        }
      }

    });

  })();

;

    Polymer('paper-icon-button',{

      publish: {

        /**
         * The URL of an image for the icon. If the src property is specified,
         * the icon property should not be.
         *
         * @attribute src
         * @type string
         * @default ''
         */
        src: '',

        /**
         * Specifies the icon name or index in the set of icons available in
         * the icon's icon set. If the icon property is specified,
         * the src property should not be.
         *
         * @attribute icon
         * @type string
         * @default ''
         */
        icon: '',

        recenteringTouch: true,
        fill: false

      },

      iconChanged: function(oldIcon) {
        this.setAttribute('aria-label', this.icon);
      }

    });

  ;


  Polymer('paper-tab', {
    
    /**
     * If true, ink ripple effect is disabled.
     *
     * @attribute noink
     * @type boolean
     * @default false
     */
    noink: false
    
  });
  
;


  Polymer('paper-tabs', {
    
    /**
     * If true, ink effect is disabled.
     *
     * @attribute noink
     * @type boolean
     * @default false
     */
    noink: false,
    
    /**
     * If true, the bottom bar to indicate the selected tab will not be shown.
     *
     * @attribute nobar
     * @type boolean
     * @default false
     */
    nobar: false,
    
    activateEvent: 'down',
    
    nostretch: false,
    
    selectedIndexChanged: function(old) {
      var s = this.$.selectionBar.style;
      
      if (!this.selectedItem) {
        s.width = 0;
        s.left = 0;
        return;
      } 
      
      var w = 100 / this.items.length;
      
      if (this.nostretch || old === null || old === -1) {
        s.width = w + '%';
        s.left = this.selectedIndex * w + '%';
        return;
      }
      
      var m = 5;
      this.$.selectionBar.classList.add('expand');
      if (old < this.selectedIndex) {
        s.width = w + w * (this.selectedIndex - old) - m + '%';
        this._transitionCounter = 1;
      } else {
        s.width = w + w * (old - this.selectedIndex) - m + '%';
        s.left = this.selectedIndex * w + m + '%';
        this._transitionCounter = 2;
      }
    },
    
    barTransitionEnd: function(e) {
      this._transitionCounter--;
      var cl = this.$.selectionBar.classList;
      if (cl.contains('expand') && !this._transitionCounter) {
        cl.remove('expand');
        cl.add('contract');
        var s = this.$.selectionBar.style;
        var w = 100 / this.items.length;
        s.width = w + '%';
        s.left = this.selectedIndex * w + '%';
      } else if (cl.contains('contract')) {
        cl.remove('contract');
      }
    }
    
  });
  
;


    Polymer('core-input', {
      publish: {
        /**
         * Placeholder text that hints to the user what can be entered in
         * the input.
         *
         * @attribute placeholder
         * @type string
         * @default ''
         */
        placeholder: '',
  
        /**
         * If true, this input cannot be focused and the user cannot change
         * its value.
         *
         * @attribute disabled
         * @type boolean
         * @default false
         */
        disabled: false,
  
        /**
         * If true, the user cannot modify the value of the input.
         *
         * @attribute readonly
         * @type boolean
         * @default false
         */
        readonly: false,

        /**
         * If true, this input will automatically gain focus on page load.
         *
         * @attribute autofocus
         * @type boolean
         * @default false
         */
        autofocus: false,

        /**
         * If true, this input accepts multi-line input like a `<textarea>`
         *
         * @attribute multiline
         * @type boolean
         * @default false
         */
        multiline: false,
  
        /**
         * (multiline only) The height of this text input in rows. The input
         * will scroll internally if more input is entered beyond the size
         * of the component. This property is meaningless if multiline is
         * false. You can also set this property to "fit" and size the
         * component with CSS to make the input fit the CSS size.
         *
         * @attribute rows
         * @type number|'fit'
         * @default 'fit'
         */
        rows: 'fit',
  
        /**
         * The current value of this input. Changing inputValue programmatically
         * will cause value to be out of sync. Instead, change value directly
         * or call commit() after changing inputValue.
         *
         * @attribute inputValue
         * @type string
         * @default ''
         */
        inputValue: '',
  
        /**
         * The value of the input committed by the user, either by changing the
         * inputValue and blurring the input, or by hitting the `enter` key.
         *
         * @attribute value
         * @type string
         * @default ''
         */
        value: '',

        /**
         * Set the input type. Not supported for `multiline`.
         *
         * @attribute type
         * @type string
         * @default text
         */
        type: 'text',

        /**
         * If true, the input is invalid if its value is null.
         *
         * @attribute required
         * @type boolean
         * @default false
         */
        required: false,

        /**
         * A regular expression to validate the input value against. See
         * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation#Validation-related_attributes
         * for more info. Not supported if `multiline` is true.
         *
         * @attribute pattern
         * @type string
         * @default '.*'
         */
        // FIXME(yvonne): The default is set to .* because we can't bind to pattern such
        // that the attribute is unset if pattern is null.
        pattern: '.*',

        /**
         * If set, the input is invalid if the value is less than this property. See
         * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation#Validation-related_attributes
         * for more info. Not supported if `multiline` is true.
         *
         * @attribute min
         */
        min: null,

        /**
         * If set, the input is invalid if the value is greater than this property. See
         * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation#Validation-related_attributes
         * for more info. Not supported if `multiline` is true.
         *
         * @attribute max
         */
        max: null,

        /**
         * If set, the input is invalid if the value is not `min` plus an integral multiple
         * of this property. See
         * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation#Validation-related_attributes
         * for more info. Not supported if `multiline` is true.
         *
         * @attribute step
         */
        step: null,

        /**
         * The maximum length of the input value.
         *
         * @attribute maxlength
         * @type number
         */
        maxlength: null,
  
        /**
         * If this property is true, the text input's inputValue failed validation.
         *
         * @attribute invalid
         * @type boolean
         * @default false
         */
        invalid: false,

        /**
         * If this property is true, validate the input as they are entered.
         *
         * @attribute validateImmediately
         * @type boolean
         * @default true
         */
        validateImmediately: true
      },

      ready: function() {
        this.handleTabindex(this.getAttribute('tabindex'));
      },

      disabledChanged: function() {
        if (this.disabled) {
          this.setAttribute('aria-disabled', true);
        } else {
          this.removeAttribute('aria-disabled');
        }
      },

      invalidChanged: function() {
        this.classList.toggle('invalid', this.invalid);
        this.fire('input-'+ (this.invalid ? 'invalid' : 'valid'), {value: this.inputValue});
      },

      inputValueChanged: function() {
        if (this.validateImmediately) {
          this.updateValidity_();
        }
      },

      valueChanged: function() {
        this.inputValue = this.value;
      },

      requiredChanged: function() {
        if (this.validateImmediately) {
          this.updateValidity_();
        }
      },

      attributeChanged: function(attr, oldVal, curVal) {
        if (attr === 'tabindex') {
          this.handleTabindex(curVal);
        }
      },

      handleTabindex: function(tabindex) {
        if (tabindex > 0) {
          this.$.input.setAttribute('tabindex', -1);
        } else {
          this.$.input.removeAttribute('tabindex');
        }
      },

      /**
       * Commits the inputValue to value.
       *
       * @method commit
       */
      commit: function() {
         this.value = this.inputValue;
      },

      updateValidity_: function() {
        if (this.$.input.willValidate) {
          this.invalid = !this.$.input.validity.valid;
        }
      },

      keypressAction: function(e) {
        // disallow non-numeric input if type = number
        if (this.type !== 'number') {
          return;
        }
        var c = String.fromCharCode(e.charCode);
        if (e.charCode !== 0 && !c.match(/[\d-\.e]/)) {
          e.preventDefault();
        }
      },

      inputChangeAction: function() {
        this.commit();
        if (!window.ShadowDOMPolyfill) {
          // re-fire event that does not bubble across shadow roots
          this.fire('change', null, this);
        }
      },

      focusAction: function(e) {
        if (this.getAttribute('tabindex') > 0) {
          // Forward focus to the inner input if tabindex is set on the element
          // This will not cause an infinite loop because focus will not fire on the <input>
          // again if it's already focused.
          this.$.input.focus();
        }
      },

      inputFocusAction: function(e) {
        if (window.ShadowDOMPolyfill) {
          // re-fire non-bubbling event if polyfill
          this.fire('focus', null, this, false);
        }
      },

      inputBlurAction: function() {
        if (window.ShadowDOMPolyfill) {
          // re-fire non-bubbling event
          this.fire('blur', null, this, false);
        }
      },

      /**
       * Forwards to the internal input / textarea element.
       *
       * @method blur
       */
      blur: function() {
        this.$.input.blur();
      },

      /**
       * Forwards to the internal input / textarea element.
       *
       * @method click
       */
      click: function() {
        this.$.input.click();
      },

      /**
       * Forwards to the internal input / textarea element.
       *
       * @method focus
       */
      focus: function() {
        this.$.input.focus();
      },

      /**
       * Forwards to the internal input / textarea element.
       *
       * @method select
       */
      select: function() {
        this.$.input.select();
      },

      /**
       * Forwards to the internal input / textarea element.
       *
       * @method setSelectionRange
       * @param {number} selectionStart
       * @param {number} selectionEnd
       * @param {String} selectionDirection (optional)
       */
      setSelectionRange: function(selectionStart, selectionEnd, selectionDirection) {
        this.$.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
      },

      /**
       * Forwards to the internal input element, not implemented for multiline.
       *
       * @method setRangeText
       * @param {String} replacement
       * @param {number} start (optional)
       * @param {number} end (optional)
       * @param {String} selectMode (optional)
       */
      setRangeText: function(replacement, start, end, selectMode) {
        if (!this.multiline) {
          this.$.input.setRangeText(replacement, start, end, selectMode);
        }
      },

      /**
       * Forwards to the internal input, not implemented for multiline.
       *
       * @method stepDown
       * @param {number} n (optional)
       */
      stepDown: function(n) {
        if (!this.multiline) {
          this.$.input.stepDown(n);
        }
      },

      /**
       * Forwards to the internal input, not implemented for multiline.
       *
       * @method stepUp
       * @param {number} n (optional)
       */
      stepUp: function(n) {
        if (!this.multiline) {
          this.$.input.stepUp(n);
        }
      },

      get willValidate() {
        return this.$.input.willValidate;
      },

      get validity() {
        return this.$.input.validity;
      },

      get validationMessage() {
        return this.$.input.validationMessage;
      },

      /**
       * Forwards to the internal input / textarea element and updates state.
       *
       * @method checkValidity
       * @return {boolean}
       */
      checkValidity: function() {
        var r = this.$.input.checkValidity();
        this.updateValidity_();
        return r;
      },

      /**
       * Forwards to the internal input / textarea element and updates state.
       *
       * @method setCustomValidity
       * @param {String} message
       */
      setCustomValidity: function(message) {
        this.$.input.setCustomValidity(message);
        this.updateValidity_();
      }

    });
  ;


  (function() {

    var paperInput = CoreStyle.g.paperInput = CoreStyle.g.paperInput || {};
    paperInput.focusedColor = '#4059a9';
    paperInput.invalidColor = '#d34336';

    Polymer('paper-input', {

      publish: {
        /**
         * The label for this input. It normally appears as grey text inside
         * the text input and disappears once the user enters text.
         *
         * @attribute label
         * @type string
         * @default ''
         */
        label: '',

        /**
         * If true, the label will "float" above the text input once the
         * user enters text instead of disappearing.
         *
         * @attribute floatingLabel
         * @type boolean
         * @default false
         */
        floatingLabel: false,

        /**
         * (multiline only) If set to a non-zero value, the height of this
         * text input will grow with the value changes until it is maxRows
         * rows tall. If the maximum size does not fit the value, the text
         * input will scroll internally.
         *
         * @attribute maxRows
         * @type number
         * @default 0
         */
        maxRows: 0,

        /**
         * The message to display if the input value fails validation. If this
         * is unset or the empty string, a default message is displayed depending
         * on the type of validation error.
         *
         * @attribute error
         * @type string
         */
        error: '',

        focused: {value: false, reflect: true}

      },

      get inputValueForMirror() {
        var tokens = this.inputValue ? String(this.inputValue).replace(/&/gm, '&amp;').replace(/"/gm, '&quot;').replace(/'/gm, '&#39;').replace(/</gm, '&lt;').replace(/>/gm, '&gt;').split('\n') : [''];

        // Enforce the min and max heights for a multiline input here to
        // avoid measurement
        if (this.multiline) {
          if (this.maxRows && tokens.length > this.maxRows) {
            tokens = tokens.slice(0, this.maxRows);
          }
          while (this.rows && tokens.length < this.rows) {
            tokens.push('');
          }
        }

        return tokens.join('<br>') + '&nbsp;';
      },

      get inputHasValue() {
        // if type = number, the input value is the empty string until a valid number
        // is entered so we must do some hacks here
        return this.inputValue || (this.type === 'number' && !this.validity.valid);
      },

      syncInputValueToMirror: function() {
        this.$.mirror.innerHTML = this.inputValueForMirror;
      },

      ready: function() {
        this.syncInputValueToMirror();
      },

      prepareLabelTransform: function() {
        var toRect = this.$.floatedLabelText.getBoundingClientRect();
        var fromRect = this.$.labelText.getBoundingClientRect();
        if (toRect.width !== 0) {
          var sy = toRect.height / fromRect.height;
          this.$.labelText.cachedTransform =
            'scale3d(' + (toRect.width / fromRect.width) + ',' + sy + ',1) ' +
            'translate3d(0,' + (toRect.top - fromRect.top) / sy + 'px,0)';
        }
      },

      animateFloatingLabel: function() {
        if (!this.floatingLabel || this.labelAnimated) {
          return;
        }

        if (!this.$.labelText.cachedTransform) {
          this.prepareLabelTransform();
        }

        // If there's still no cached transform, the input is invisible so don't
        // do the animation.
        if (!this.$.labelText.cachedTransform) {
          return;
        }

        this.labelAnimated = true;
        // Handle interrupted animation
        this.async(function() {
          this.transitionEndAction();
        }, null, 250);

        if (this.inputHasValue) {
          this.$.labelText.style.webkitTransform = this.$.labelText.cachedTransform;
          this.$.labelText.style.transform = this.$.labelText.cachedTransform;
        } else {
          // Handle if the label started out floating
          if (!this.$.labelText.style.webkitTransform && !this.$.labelText.style.transform) {
            this.$.labelText.style.webkitTransform = this.$.labelText.cachedTransform;
            this.$.labelText.style.transform = this.$.labelText.cachedTransform;
            this.$.labelText.offsetTop;
          }
          this.$.labelText.style.webkitTransform = '';
          this.$.labelText.style.transform = '';
        }
      },

      inputValueChanged: function(old) {
        this.super();

        this.syncInputValueToMirror();
        if (old && !this.inputValue || !old && this.inputValue) {
          this.animateFloatingLabel();
        }
      },

      placeholderChanged: function() {
        this.label = this.placeholder;
      },

      inputFocusAction: function() {
        this.super(arguments);
        this.focused = true;
      },

      inputBlurAction: function(e) {
        this.super(arguments);
        this.focused = false;
      },

      downAction: function(e) {
        if (this.disabled) {
          return;
        }

        if (this.focused) {
          return;
        }

        // The underline spills from the tap location
        var rect = this.$.underline.getBoundingClientRect();
        var right = e.x - rect.left;
        this.$.focusedUnderline.style.mozTransformOrigin = right + 'px';
        this.$.focusedUnderline.style.webkitTransformOrigin = right + 'px ';
        this.$.focusedUnderline.style.transformOriginX = right + 'px';

        // Animations only run when the user interacts with the input
        this.underlineAnimated = true;

        // Cursor animation only runs if the input is empty
        if (!this.inputHasValue) {
          this.cursorAnimated = true;
        }
        // Handle interrupted animation
        this.async(function() {
          this.transitionEndAction();
        }, null, 250);
      },

      keydownAction: function() {
        this.super();

        // more type = number hacks. see core-input for more info
        if (this.type === 'number') {
          var valid = !this.inputValue && this.validity.valid;
          this.async(function() {
            if (valid !== (!this.inputValue && this.validity.valid)) {
              this.animateFloatingLabel();
            }
          });
        }
      },

      transitionEndAction: function() {
        this.underlineAnimated = false;
        this.cursorAnimated = false;
        this.labelAnimated = false;
      }

    });

  }());

  ;

    Polymer('paper-item', {

      publish: {

        /**
         * The label for the item.
         *
         * @attribute label
         * @type string
         * @default ''
         */
        label: '',

        /**
         * (optional) The URL of an image for an icon to use in the button.
         * Should not use `icon` property if you are using this property.
         *
         * @attribute iconSrc
         * @type string
         * @default ''
         */
        iconSrc: '',

        /**
         * (optional) Specifies the icon name or index in the set of icons
         * available in the icon set. If using this property, load the icon
         * set separately where the icon is used. Should not use `src`
         * if you are using this property.
         *
         * @attribute icon
         * @type string
         * @default ''
         */
        icon: ''

      },

      eventDelegates: {
        'down': 'downAction',
        'up': 'upAction'
      },

      downAction: function(e) {
        //this.$.ripple.downAction(e);
      },

      upAction: function(e) {
        //this.$.ripple.upAction(e);
      }
    });
  ;

    Polymer('core-dropdown-overlay',{

      publish: {

        /**
         * The `relatedTarget` is an element used to position the overlay. It should have
         * the same offsetParent as the target.
         *
         * @attribute relatedTarget
         * @type Node
         */
        relatedTarget: null,

        /**
         * The horizontal alignment of the overlay relative to the `relatedTarget`.
         * `left` means the left edges are aligned together and `right` means the right
         * edges are aligned together.
         *
         * @attribute halign
         * @type 'left' | 'right'
         * @default 'auto'
         */
        halign: 'left',

        /**
         * The vertical alignment of the overlay relative to the `relatedTarget`. `top`
         * means the top edges are aligned together and `bottom` means the bottom edges
         * are aligned together.
         *
         * @attribute valign
         * @type 'top' | 'bottom'
         * @default 'top'
         */
        valign: 'top'

      },

      measure: function() {
        var target = this.target;
        // remember position, because core-overlay may have set the property
        var pos = target.style.position;

        // get the size of the target as if it's positioned in the top left
        // corner of the screen
        target.style.position = 'fixed';
        target.style.left = '0px';
        target.style.top = '0px';

        var rect = target.getBoundingClientRect();

        target.style.position = pos;
        target.style.left = null;
        target.style.top = null;

        return rect;
      },

      resetTargetDimensions: function() {
        var dims = this.dimensions;
        var style = this.target.style;
        if (dims.position.h_by === this.localName) {
          style[dims.position.h] = null;
        }
        if (dims.position.v_by === this.localName) {
          style[dims.position.v] = null;
        }
        this.super();
      },

      positionTarget: function() {
        if (!this.relatedTarget) {
          this.super();
          return;
        }

        var target = this.target;
        var related = this.relatedTarget;

        // explicitly set width/height, because we don't want it constrained
        // to the offsetParent
        var rect = this.measure();
        target.style.width = rect.width + 'px';
        target.style.height = rect.height + 'px';

        var t_op = target.offsetParent;
        var r_op = related.offsetParent;
        if (window.ShadowDOMPolyfill) {
          t_op = wrap(t_op);
          r_op = wrap(r_op);
        }

        if (t_op !== r_op && t_op !== related) {
          console.warn('core-dropdown-overlay: dropdown\'s offsetParent must be the relatedTarget or the relatedTarget\'s offsetParent!');
        }

        // Don't use CSS to handle halign/valign so we can use
        // dimensions.position to detect custom positioning

        var dims = this.dimensions;
        var margin = dims.margin;
        var inside = t_op === related;

        if (!dims.position.h) {
          if (this.halign === 'right') {
            target.style.right = ((inside ? 0 : t_op.offsetWidth - related.offsetLeft - related.offsetWidth) - margin.right) + 'px';
            dims.position.h = 'right';
          } else {
            target.style.left = ((inside ? 0 : related.offsetLeft) - margin.left) + 'px';
            dims.position.h = 'left';
          }
          dims.position.h_by = this.localName;
        }

        if (!dims.position.v) {
          if (this.valign === 'bottom') {
            target.style.bottom = ((inside ? 0 : t_op.offsetHeight - related.offsetTop - related.offsetHeight) - margin.bottom) + 'px';
            dims.position.v = 'bottom';
          } else {
            target.style.top = ((inside ? 0 : related.offsetTop) - margin.top) + 'px';
            dims.position.v = 'top';
          }
          dims.position.v_by = this.localName;
        }
      }

    });
  ;


  Polymer('core-dropdown',{

    publish: {

      /**
       * The element associated with this dropdown, usually the element that triggers
       * the menu.
       *
       * @attribute relatedTarget
       * @type Node
       */
      relatedTarget: null,

      /**
       * If true, the menu is currently visible.
       *
       * @attribute opened
       * @type boolean
       * @default false
       */
      opened: false,

      /**
       * The horizontal alignment of the popup relative to `relatedTarget`. `left`
       * means the left edges are aligned together. `right` means the right edges
       * are aligned together.
       *
       * @attribute halign
       * @type 'left' | 'right'
       * @default 'left'
       */
      halign: 'left',

      /**
       * The vertical alignment of the popup relative to `relatedTarget`. `top` means
       * the top edges are aligned together. `bottom` means the bottom edges are
       * aligned together.
       *
       * @attribute valign
       * @type 'top' | 'bottom'
       * @default 'top'
       */
      valign: 'top',

     /**
       * By default an overlay will focus its target or an element inside
       * it with the `autoFocus` attribute. Disable this
       * behavior by setting the `autoFocusDisabled` property to true.
       *
       * @attribute autoFocusDisabled
       * @type boolean
       * @default false
       */
      autoFocusDisabled: false,

      /**
       * The transition property specifies a string which identifies a 
       * <a href="../core-transition/">`core-transition`</a> element that 
       * will be used to help the overlay open and close. The default
       * `core-transition-fade` will cause the overlay to fade in and out.
       *
       * @attribute transition
       * @type string
       * @default null
       */
      transition: null

    }

  });

;

    Polymer('paper-menu-button-transition', {

      baseClass: 'paper-menu-button-transition',
      revealedClass: 'paper-menu-button-revealed',
      openedClass: 'paper-menu-button-opened',
      closedClass: 'paper-menu-button-closed',
      completeEventName: null,

      duration: 500,

      setup: function(node) {
        this.super(arguments);

        var bg = node.querySelector('.paper-menu-button-overlay-bg');
        bg.style.transformOrigin = this.transformOrigin;
        bg.style.webkitTransformOrigin = this.transformOrigin;
      },

      transitionOpened: function(node, opened) {
        this.super(arguments);

        if (opened) {
          if (this.player) {
            this.player.cancel();
          }

          var anims = [];

          var size = node.getBoundingClientRect();

          var ink = node.querySelector('.paper-menu-button-overlay-ink');
          var offset = 40 / Math.max(size.width, size.height);
          anims.push(new Animation(ink, [{
            'opacity': 0.9,
            'transform': 'scale(0)',
          }, {
            'opacity': 0.9,
            'transform': 'scale(1)'
          }], {
            duration: this.duration * offset
          }));

          var bg = node.querySelector('.paper-menu-button-overlay-bg');
          anims.push(new Animation(bg, [{
            'opacity': 0.9,
            'transform': 'scale(' + 40 / size.width + ',' + 40 / size.height + ')',
          }, {
            'opacity': 1,
            'transform': 'scale(0.95, 0.5)'
          }, {
            'opacity': 1,
            'transform': 'scale(1, 1)'
          }], {
            delay: this.duration * offset,
            duration: this.duration * (1 - offset),
            fill: 'forwards'
          }));

          var items = node.querySelector('#menu').items;
          var itemDelay = offset + (1 - offset) / 2;
          var itemDuration = this.duration * (1 - itemDelay) / items.length;
          var reverse = this.transformOrigin.split(' ')[1] === '100%';
          items.forEach(function(item, i) {
            if (!item.classList.contains('paper-menu-button-overlay-bg') && !item.classList.contains('paper-menu-button-overlay-ink')) {
              anims.push(new Animation(item, [{
                'opacity': 0
              }, {
                'opacity': 1
              }], {
                delay: this.duration * itemDelay + itemDuration * (reverse ? items.length - 1 - i : i),
                duration: itemDuration,
                fill: 'both'
              }));
            }
          }.bind(this));

          var group = new AnimationGroup(anims, {
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
          });
          this.player = document.timeline.play(group);
          this.player.onfinish = function() {
            this.fire('core-transitionend', this, node);
          }.bind(this);

        } else {
          this.listenOnce(node, 'transitionend', function() {
            this.fire('core-transitionend', this, node);
          }.bind(this));
        }
      },

    });
  ;

  (function() {

    CoreStyle.g.paperMenuButton = CoreStyle.g.paperMenuButton || {
      'background': '#fff'
    };

  })();
;

    Polymer('paper-menu-button', {

      publish: {

        /**
         * If true, this menu is currently visible.
         *
         * @attribute opened
         * @type boolean
         * @default false
         */
        opened: false,

        /**
         * The horizontal alignment of the menu relative to the button.
         *
         * @attribute halign
         * @type 'left' | 'right'
         * @default 'left'
         */
        halign: 'left',

        /**
         * The vertical alignment of the menu relative to the button.
         *
         * @attribute valign
         * @type 'bottom' | 'top'
         * @default 'top'
         */
        valign: 'top',

        /**
         * Set to true to disable the transition.
         *
         * @attribute noTransition
         * @type boolean
         * @default false
         */
        noTransition: false

      },

      computed: {
        transition: '"paper-menu-button-transition-" + valign + "-" + halign'
      },

      /**
       * The URL of an image for the icon. Should not use `icon` property
       * if you are using this property.
       *
       * @attribute src
       * @type string
       * @default ''
       */
      src: '',

      /**
       * Specifies the icon name or index in the set of icons available in
       * the icon set.  Should not use `src` property if you are using this
       * property.
       *
       * @attribute icon
       * @type string
       * @default ''
       */
      icon: '',

      tapAction: function() {
        if (this.disabled) {
          return;
        }

        this.super();
        this.toggle();
        if (this.opened && !this.noTransition) {
          this.$.shadow.z = 0;
        }
      },

      transitionEndAction: function() {
        this.$.shadow.z = 1;
      },

      activateAction: function() {
        this.opened = false;
      },

      /**
       * Toggle the opened state of the menu.
       *
       * @method toggle
       */
      toggle: function() {
        this.opened = !this.opened;
      }

    });
  ;

        Polymer('facebook-button', {
            action     : 'like',
            colorscheme: 'light',
            font       : 'arial',
            href       : 'http://customelements.io',
            layout     : 'button_count',
            showfaces  : 'false',
            height     : '20',
            width      : '120'
        });
    ;
/*! log.js 0.1.5 */
(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o;window.console&&window.console.log&&(j=function(){var a;return a=[],k(arguments).forEach(function(b){return"string"==typeof b?a=a.concat(n(b)):a.push(b)}),o.apply(window,a)},o=function(){return console.log.apply(console,k(arguments))},k=function(a){return Array.prototype.slice.call(a)},c=[{regex:/\*([^\*]+)\*/,replacer:function(a,b){return"%c"+b+"%c"},styles:function(){return["font-style: italic",""]}},{regex:/\_([^\_]+)\_/,replacer:function(a,b){return"%c"+b+"%c"},styles:function(){return["font-weight: bold",""]}},{regex:/\`([^\`]+)\`/,replacer:function(a,b){return"%c"+b+"%c"},styles:function(){return["background: rgb(255, 255, 219); padding: 1px 5px; border: 1px solid rgba(0, 0, 0, 0.1)",""]}},{regex:/\[c\=(?:\"|\')?((?:(?!(?:\"|\')\]).)*)(?:\"|\')?\]((?:(?!\[c\]).)*)\[c\]/,replacer:function(a,b,c){return"%c"+c+"%c"},styles:function(a){return[a[1],""]}}],e=function(a){var b;return b=!1,c.forEach(function(c){return c.regex.test(a)?b=!0:void 0}),b},d=function(a){var b;return b=[],c.forEach(function(c){var d;return d=a.match(c.regex),d?b.push({format:c,match:d}):void 0}),b.sort(function(a,b){return a.match.index-b.match.index})},n=function(a){var b,c,f;for(f=[];e(a);)c=d(a),b=c[0],a=a.replace(b.format.regex,b.format.replacer),f=f.concat(b.format.styles(b.match));return[a].concat(f)},i=function(){return/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor)},h=function(){return/OPR/.test(navigator.userAgent)&&/Opera/.test(navigator.vendor)},f=function(){return/Firefox/.test(navigator.userAgent)},g=function(){return/MSIE/.test(navigator.userAgent)},m=function(){var a;return a=navigator.userAgent.match(/AppleWebKit\/(\d+)\.(\d+)(\.|\+|\s)/),a?537.38<=parseInt(a[1],10)+parseInt(a[2],10)/100:!1},l=function(){var a;return a=navigator.userAgent.match(/OPR\/(\d+)\./),a?15<=parseInt(a[1],10):!1},b=function(){return window.console.firebug||window.console.exception},a=g()||f()&&!b()||h()&&!l()||i()&&!m()?o:j,a.l=o,"function"==typeof define&&define.amd?define(a):"undefined"!=typeof exports?module.exports=a:window.log=a)}).call(this);;

  Polymer('console-log-advanced',{
    message: "",

    ready: function() {
      this.sender = this.sender.toUpperCase();
    },

    messageChanged: function(previous, current) {
      this.log(current);
    },

    log: function(message) {
      log('_' + this.sender + '_ — ' + message);
    }
  });
;

  Polymer('ginalioti-config',{
    created: function() {
      this.config = {
        debug: false,
        appName: "GinaLioti",
        recipesUrl: "http://ginalioti.com/api/get_posts/?count=100",
        cacheTimeout: 0.5 * 3600000,
        recipeCourses: [],
        baseUrl: "/",
        extraEffects: ((typeof window.orientation !== 'undefined') || !(navigator.userAgent.toLowerCase().indexOf('chrome') > -1)) ? false : true,
        baseUrlFull: "http://ginalioti.com/",
        colour: {
          // Red
          primary: "#e51c23",
          primaryHue1: "#fde0dc", // 50
          primaryHue2: "#e84e40", // 400
          primaryHue3: "#b0120a", // 900

          // Lime
          accent: "#aeea00", // A700
        }
      };
    },
  });
;

Polymer('ginalioti-datasource',{

  // ===========================================================================
  // Startup
  // ===========================================================================

  ready: function() {
    this.logService = this.$.logService;
  },





  // ===========================================================================
  // Component methods
  // ===========================================================================

  localStorageSyncTimeLoaded: function() {
    if (this.recipes && !this.connected) {
      this.connected = true;
      this.log('fetched recipes & ingredients from `localStorage`');

      // if we have old data, then sync with API
      var cacheAge = Date.now() - this.syncTime;
      if(cacheAge > this.config.cacheTimeout) {

        if (this.config.debug) {
          var cacheTimeout = new Date(this.config.cacheTimeout);
          var cacheTimeoutReadable = cacheTimeout.getUTCHours()+"h "+cacheTimeout.getUTCMinutes()+"m "+cacheTimeout.getUTCSeconds()+"s";
          var cacheAge = new Date(cacheAge);
          var cacheAgeReadable = cacheAge.getUTCHours()+"h "+cacheAge.getUTCMinutes()+"m "+cacheAge.getUTCSeconds()+"s";
          this.log('localStorage is old [age: _' + cacheAgeReadable + '_ / limit: _' + cacheTimeoutReadable + '_]');
        }

        this.$.recipeService.go();
      } else {
        this.log('localStorage is still fresh!');
      }
    } else {
      this.$.recipeService.go();
    }
  },

  statusChanged: function() {
    if (this.status == "success") {
      if (this.connected == true) this.updatedData = true;
      else this.connected = true;
      this.log('fetched recipes & ingredients from `API`');
    };
  },

  apiError: function(error) {
    this.$.toast.show();
  },

  retry: function() {
    window.location.reload();
  },





  // ===========================================================================
  // Helpers
  // ===========================================================================

  log: function(message) {
    if (this.config.debug === true && this.logService) {
      this.logService.log(message);
    };
  }
});
;

Polymer('ginalioti-app',{

  // ===========================================================================
  // Config
  // ===========================================================================

  minSplashTime: 0/*600*/,
  selected: 'splash',
  connected: false,
  readyTime: 0,





  // ===========================================================================
  // Routes
  // ===========================================================================

  routes: [
    {
      title: 'Recipe – Gina Lioti',
      slug: '/:ingredient',
      page: 'ingredient',
      regex: false
    },
    {
      title: 'Recipe – Gina Lioti',
      slug: "/-recipe/i",
      page: 'recipe',
      regex: true
    },
    {
      title: 'Ingredients – Gina Lioti',
      slug: '/ingredients',
      page: 'ingredients',
      regex: false
    },
    {
      title: 'About Gina Lioti',
      slug: '/about',
      page: 'about',
      regex: false
    },
    {
      title: 'Gina Lioti Recipes',
      slug: '/',
      page: 'recipes',
      regex: false
    },

  ],





  // ===========================================================================
  // App init & startup
  // ===========================================================================

  ready: function() {
    // Colours
    CoreStyle.g.paperInput.focusedColor = "#FBB040";
    CoreStyle.g.paperInput.Color = "#FFFFFF";

    this.selectedRecipe = {};
    this.selectedIngredient = {};
    this.relatedRecipes = [];
    this.combineWithRecipes = [];
    this.relatedIngredientRecipes = [];
    this.appStarted = {};

    // Component shortcuts
    this.router = this.$.router;
    this.drawerPanel = this.$.drawerPanel;
    this.pages = this.$.pages;
    this.logService = this.$.logService;
    this.pageIngredients = this.$.pageIngredients;
    this.pageRecipes = this.$.pageRecipes;

    // Config
    this.narrowLayout = this.drawerPanel.narrow;

    // Debug
    this.log('initialized ... waiting for datasource');
    this.readyTime = Date.now();
  },

  connectedChanged: function(previous, current) {
    this.log('received data from datasource successfully');
    this.startup();
  },

  updatedDataChanged: function(previous, current) {
    //this.log('updatedDataChanged');
    if (this.selected == "recipe" && ((typeof this.selectedRecipe == 'undefined') || (typeof this.selectedRecipe.title == 'undefined'))) {
      this.log('need to populate the visible recipe');
      this.selectedChanged("", "recipe");
    }
  },

  startup: function() {
    var elapsed = Date.now() - this.readyTime;
    var t = this.minSplashTime - elapsed;
    this.async('completeStartup', null, t > 0 ? t : 0);
  },

  completeStartup: function() {
    this.log('ready!');
    console.timeEnd('Startup time');
    console.groupEnd();
    this.appReady = true;
    this.router.init();
  },





  // ===========================================================================
  // Change listeners
  // ===========================================================================

  selectedChanged: function(previous, current) {
    this.log('animating from _' + previous + '_ page to _' + current + '_');

    if (current == "recipe" && (typeof this.selectedRecipe == 'undefined')) {
      this.log('updating selectedRecipe');
      this.selectedRecipe = _.find(this.recipes, function(recipe) {
        console.log(this.urlArguments.recipe);
        return recipe.slug == this.urlArguments.recipe;
      }.bind(this));
    } else if (current == "recipe" && (typeof this.selectedRecipe.title == 'undefined')) {
      this.log('updating selectedRecipe');
      this.selectedRecipe = _.find(this.recipes, function(recipe) {
        console.log(this.urlArguments.recipe);
        return recipe.slug == this.urlArguments.recipe;
      }.bind(this));
    } else if (current == "ingredient" && (typeof this.selectedIngredient.title == 'undefined')) {
      this.log('updating selectedIngredient');
      this.selectedIngredient = _.find(this.ingredients, function(ingredient) {
        return ingredient.slug == this.urlArguments.ingredient;
      }.bind(this));
    } else if (current == "ingredients") {
    } else if (current == "recipes") {
    }

    this.router.routePage(current, (current == "recipe" ? this.selectedRecipe : this.selectedIngredient), true);
  },




  // ===========================================================================
  // Helpers
  // ===========================================================================

  handleRecipetap: function(event, recipeSlug, sender) {
    this.log('recipe tap: `' + recipeSlug + '`');
    if (recipeSlug != this.selectedRecipe.slug) {
      // Update recipe  in <recipe-full>
      this.selectedRecipe = _.find(this.recipes, function(recipe) {
        return recipe.slug == recipeSlug;
      });

      var _this = this;
      _this.combineWithRecipes = [];
      _.each(this.selectedRecipe.relatedRecipes.combine, function(recipeSlug) {
        _this.combineWithRecipes = _this.combineWithRecipes.concat(_.filter(_this.recipes, function(recipe) {
          return recipe.slug == recipeSlug;
        }));
      });
    }
    this.router.routePage('recipe', this.selectedRecipe);
  },

  handleIngredienttap: function(event, ingredientSlug, sender) {
    this.log('ingredient tap');

    if (ingredientSlug !== this.selectedIngredient.slug) {
      // Update ingredient  in <recipe-full>
      this.selectedIngredient = _.filter(this.ingredients, function(ing) {
        return ing.slug == ingredientSlug;
      })[0] || {};

      this.relatedIngredientRecipes = []; // clear the array
      this.relatedIngredientRecipes = _.filter(this.recipes, function(recipe) {
        return recipe.ingredientsSlugEnumeration.indexOf(ingredientSlug) != -1;
      });
    }

    this.router.routePage('ingredient', this.selectedIngredient);
  },

  transitionPrepareAction: function() {
    if (this.selected == "recipe") this.$.pageRecipe.resetScroll();
    if (this.selected == "ingredient") this.$.pageIngredient.resetScroll();
  },

  transitionEndAction: function() {
    if (this.pages.lastSelected == "recipe") {
      this.$.pageRecipe.resetScroll();
    } else if (this.pages.lastSelected == "ingredient") {
      this.$.pageIngredient.resetScroll();
    }

    if (this.selected == "recipe") this.$.pageRecipe.loadExtras();
    if (this.selected == "ingredient") this.$.pageIngredient.loadExtras();
    if (this.selected == "recipes") this.pageRecipes.clearSelection();
    if (this.selected == "ingredients") this.pageIngredients.clearSelection();
  },

  back: function() {
    this.router.routePage('recipes');
  },

  toggleMenu: function() {
    this.$.drawerPanel.togglePanel();
  },

  toggleDrawer: function() {
    this.$.drawerPanel.togglePanel();
  },

  hideDrawer: function() {
    this.$.drawerPanel.closeDrawer();
  },

  responsiveChange: function(event, detail, sender) {
    this.narrowLayout = detail.narrow;
  },

  cancelNavigation: function(event) {
    this.log('click');
    event.preventDefault();
    event.stopPropagation();
  },

  log: function(message) {
    if (this.config.debug === true && this.logService) {
      this.logService.log(message);
    };
  },

});
;

    Polymer('google-analytics', {
      code: 'UA-XXXXX-Y',
      domain: 'auto',
      created: function(){
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', this.code, this.domain);
        ga('send', 'pageview');
      }
    });
  ;

Polymer('recipe-service',{

  // ===========================================================================
  // Init & startup
  // ===========================================================================

  ready: function() {
    this.logService = this.$.logService;
    this.parsedIngredients = [];
  },

  go: function() {
    this.log('connecting to: `' + this.config.recipesUrl + '`');
    this.$.ajax.go();
  },

  dataFetched: function() {
    var response = this.$.ajax.response;
    this.log('api response: `' + response.status + '`');

    if (response.status === "ok") {
      this.processApiData(response.posts);
    } else {
      this.fire('api-error', data.status);
    }
  },





  // ===========================================================================
  // API data parsing
  // ===========================================================================

  processApiData: function(data) {
    //console.time('API data parsing time:');
    var parseTime = Date.now();

    var _this = this;
    var rawRecipes = data;
    var parsedRecipes = [];

    if (!this.config.recipeCourses) this.config.recipeCourses = [];

    _.each(rawRecipes, function(recipe) {
      //console.log(recipe);

      // Process ingredients
      _this.mergeIngredients(recipe.taxonomy_ingredient);

      // Process recipe
      var newRecipe = {
        id: recipe.id,
        title: recipe.title,
        date: recipe.date,
        slug: recipe.slug,
        description: recipe.content,
        description2: (recipe.custom_fields.recipe_description) ? recipe.custom_fields.recipe_description[0] : null,
        relatedRecipes: (recipe.custom_fields.recipe_notes) ? JSON.parse(recipe.custom_fields.recipe_notes) : [],
        course: recipe.taxonomy_course[0].title,
        courses: _.pluck(recipe.taxonomy_course, "title"),
        photos: recipe.attachments,
        tags: (recipe.tags.length > 0) ? recipe.tags : null,

        passiveTime: (recipe.custom_fields.recipe_passive_time) ? recipe.custom_fields.recipe_passive_time + ' ' + recipe.custom_fields.recipe_passive_time_text : null,

        cookTime: (recipe.custom_fields.recipe_cook_time) ? recipe.custom_fields.recipe_cook_time + ' ' + recipe.custom_fields.recipe_cook_time_text : null,
        cookTimeData: (recipe.custom_fields.recipe_cook_time) ? 'PT' + recipe.custom_fields.recipe_cook_time + recipe.custom_fields.recipe_cook_time_text[0].charAt(0).toUpperCase() : null,

        prepTime: (recipe.custom_fields.recipe_prep_time) ? recipe.custom_fields.recipe_prep_time + ' ' + recipe.custom_fields.recipe_prep_time_text : null,
        prepTimeData: (recipe.custom_fields.recipe_prep_time) ? 'PT' + recipe.custom_fields.recipe_prep_time + recipe.custom_fields.recipe_prep_time_text[0].charAt(0).toUpperCase() : null,

        totalTimeData: 'PT' + (recipe.custom_fields.recipe_prep_time + recipe.custom_fields.recipe_cook_time) + 'M',

        servings: recipe.custom_fields.recipe_servings_normalized[0] + ' ' + recipe.custom_fields.recipe_servings_type,
        instructions: _this.splitItemsIntoGroups(_this.parseRecipeDataStringToJSON(recipe.custom_fields.recipe_instructions[0])),
        ingredients: _this.splitItemsIntoGroups(_this.parseIngredients(_this.parseRecipeDataStringToJSON(recipe.custom_fields.recipe_ingredients[0]))),
        ingredientsEnumeration: _.pluck(recipe.taxonomy_ingredient, "title"),
        ingredientsSlugEnumeration: _.pluck(recipe.taxonomy_ingredient, "slug")
      };
      parsedRecipes.push(newRecipe);

      //console.log(newRecipe);

      // Recipe categories
      _this.config.recipeCourses = _.uniq(_.union(newRecipe.courses, _this.config.recipeCourses), true);
    });

    // Recipe categories
    if (this.config.recipeCourses.indexOf("All") === -1) this.config.recipeCourses.unshift('All');
    this.config.recipeCourses.sort();

    // console.log(parsedRecipes);
    //console.log(this.parsedIngredients);

    this.recipes = parsedRecipes;
    this.ingredients = _.sortBy(this.parsedIngredients, "title");
    this.status = "success";
    this.syncTime = Date.now();

    //console.timeEnd('API data parsing time:');
    this.log('parsed API data in: `' + (Date.now() - parseTime) + 'ms`');
  },

  parseRecipeDataStringToJSON: function(dataString) {
    //console.log("########################################################");

    dataString = dataString.replace(/\n/g, ""); // new lines
    dataString = dataString.replace(/\r/g, ""); // carriage return

    dataString = dataString.replace(/i\:\d*;a\:\d*\:{s\:\d*\:\"description\";s\:\d*/g, '"description"');
    dataString = dataString.replace(/;s\:\d*\:\"group\";s\:\d*/g, ', "group"');
    dataString = dataString.replace(/;s\:\d*\:\"image\";s\:\d*/g, ', "image"');
    dataString = dataString.replace(/;}\"description/g, '}, { "description');

    dataString = dataString.replace(/i\:\d*;a\:\d*\:{s\:\d*\:\"group\";s\:\d*/g, '"group"');
    dataString = dataString.replace(/i\:\d*;a\:\d*\:{s\:\d*\:\"amount\";s\:\d*/g, '"amount"');
    dataString = dataString.replace(/;s\:\d*\:\"amount\";s\:\d*/g, ', "amount"');
    dataString = dataString.replace(/;s\:\d*\:\"unit\";s\:\d*/g, ', "unit"');
    dataString = dataString.replace(/;s\:\d*\:\"ingredient\";s\:\d*/g, ', "ingredient"');
    dataString = dataString.replace(/;s\:\d*\:\"notes\";s\:\d*/g, ', "notes"');
    dataString = dataString.replace(/;s\:\d*\:\"ingredient_id\";i\:\d*;s/g, ', "ingredient_id"');
    dataString = dataString.replace(/\:\"amount_normalized\";(d|i)/g, ', "amount_normalized"');
    dataString = dataString.replace(/;}\"group/g, '}, { "group');
    dataString = dataString.replace(/;}\"amount/g, '}, { "amount');

    dataString = dataString.replace(/;}}/g, '}]');
    dataString = dataString.replace(/a\:\d*\:/g, '[');

    if (dataString == "[{}") { dataString = "[]" };

    //console.log("-------------------------------");
    //console.log(dataString);
    return JSON.parse(dataString);
  },

  mergeIngredients: function(ingredients) {
    var _this = this;

    _.each(ingredients, function(ingredient) {
      if(!_.find(_this.parsedIngredients, function(localIngredient) {
        return localIngredient.title == ingredient.title;
      })) {
        _this.parsedIngredients.push(ingredient);
      }
    })
  },

  parseIngredients: function(ingredients) {
    var _this = this;

    _.each(ingredients, function(ingredient) {

      // add ingredient's slug
      ingredient.slug = _.find(_this.parsedIngredients, function(ing){
        return ing.title == ingredient.ingredient;
      }).slug;

      // [s] - change an ingredient from singular to plural
      if (ingredient.unit.indexOf("[s]") > -1) {
        ingredient.unit = ingredient.unit.replace(/\[s\]/g, "");
        ingredient.ingredient = ingredient.ingredient + 's';
      }

      // ingredient notes
      if (ingredient.notes == "") {
        ingredient.notes = null;
      };
    });

    return ingredients;
  },

  splitItemsIntoGroups: function(items) {
    var groups = _.uniq(_.pluck(items, "group"), true);

    if (groups.length > 1) {
      _.each(groups, function(group, index) {
        groups[index] = {
          "group": (group == "") ? "Main" : group,
          "items": _.filter(items, function(item) {
            return item.group == group;
          })
        }

      });
    } else {
      groups[0] = {
        "group": "Main",
        "items": items
      }
    }

    return groups;
  },





  // ===========================================================================
  // Helpers
  // ===========================================================================

  log: function(message) {
    if (this.config.debug === true && this.logService) {
      this.logService.log(message);
    };
  }

});
;

Polymer('recipe-card',{

  // ===========================================================================
  // Config
  // ===========================================================================

  recipeMode: false,
  ingredientMode: false,





  // ===========================================================================
  // Component methods
  // ===========================================================================

  recipeTapped: function(event, detail, sender) {
    if (this.recipeMode) {
      this.fire('recipe-tap');
    }
    else if (this.ingredientMode) {
      this.fire('ingredient-tap');
    }
  },

});
;

Polymer('ingredient-card',{

  // ===========================================================================
  // Component methods
  // ===========================================================================

  ingredientTap: function(event, detail, sender) {
    event.preventDefault();
    this.fire('ingredient-tap', this.ingredient.slug);
  },

});
;

    Polymer('social-buttons',{
    });
  ;
/*! Picturefill - v2.1.0 - 2014-07-25
* http://scottjehl.github.io/picturefill
* Copyright (c) 2014 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */
window.matchMedia||(window.matchMedia=function(){"use strict";var a=window.styleMedia||window.media;if(!a){var b=document.createElement("style"),c=document.getElementsByTagName("script")[0],d=null;b.type="text/css",b.id="matchmediajs-test",c.parentNode.insertBefore(b,c),d="getComputedStyle"in window&&window.getComputedStyle(b,null)||b.currentStyle,a={matchMedium:function(a){var c="@media "+a+"{ #matchmediajs-test { width: 1px; } }";return b.styleSheet?b.styleSheet.cssText=c:b.textContent=c,"1px"===d.width}}}return function(b){return{matches:a.matchMedium(b||"all"),media:b||"all"}}}()),function(a,b){"use strict";function c(a){var b,c,d,f,g,h=a||{};b=h.elements||e.getAllElements();for(var i=0,j=b.length;j>i;i++)if(c=b[i],d=c.parentNode,f=void 0,g=void 0,c[e.ns]||(c[e.ns]={}),h.reevaluate||!c[e.ns].evaluated){if("PICTURE"===d.nodeName.toUpperCase()){if(e.removeVideoShim(d),f=e.getMatch(c,d),f===!1)continue}else f=void 0;("PICTURE"===d.nodeName.toUpperCase()||c.srcset&&!e.srcsetSupported||!e.sizesSupported&&c.srcset&&c.srcset.indexOf("w")>-1)&&e.dodgeSrcset(c),f?(g=e.processSourceSet(f),e.applyBestCandidate(g,c)):(g=e.processSourceSet(c),(void 0===c.srcset||c[e.ns].srcset)&&e.applyBestCandidate(g,c)),c[e.ns].evaluated=!0}}function d(){c();var d=setInterval(function(){return c(),/^loaded|^i|^c/.test(b.readyState)?void clearInterval(d):void 0},250);if(a.addEventListener){var e;a.addEventListener("resize",function(){a._picturefillWorking||(a._picturefillWorking=!0,a.clearTimeout(e),e=a.setTimeout(function(){c({reevaluate:!0}),a._picturefillWorking=!1},60))},!1)}}if(a.HTMLPictureElement)return void(a.picturefill=function(){});b.createElement("picture");var e={};e.ns="picturefill",e.srcsetSupported="srcset"in b.createElement("img"),e.sizesSupported=a.HTMLImageElement.sizes,e.trim=function(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")},e.endsWith=function(a,b){return a.endsWith?a.endsWith(b):-1!==a.indexOf(b,a.length-b.length)},e.matchesMedia=function(b){return a.matchMedia&&a.matchMedia(b).matches},e.getDpr=function(){return a.devicePixelRatio||1},e.getWidthFromLength=function(a){return a=a&&(parseFloat(a)>0||a.indexOf("calc(")>-1)?a:"100vw",a=a.replace("vw","%"),e.lengthEl||(e.lengthEl=b.createElement("div"),b.documentElement.insertBefore(e.lengthEl,b.documentElement.firstChild)),e.lengthEl.style.cssText="position: absolute; left: 0; width: "+a+";",e.lengthEl.offsetWidth<=0&&(e.lengthEl.style.cssText="width: 100%;"),e.lengthEl.offsetWidth},e.types={},e.types["image/jpeg"]=!0,e.types["image/gif"]=!0,e.types["image/png"]=!0,e.types["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),e.types["image/webp"]=function(){var b=new a.Image,d="image/webp";b.onerror=function(){e.types[d]=!1,c()},b.onload=function(){e.types[d]=1===b.width,c()},b.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="},e.verifyTypeSupport=function(a){var b=a.getAttribute("type");return null===b||""===b?!0:"function"==typeof e.types[b]?(e.types[b](),"pending"):e.types[b]},e.parseSize=function(a){var b=/(\([^)]+\))?\s*(.+)/g.exec(a);return{media:b&&b[1],length:b&&b[2]}},e.findWidthFromSourceSize=function(a){for(var b,c=e.trim(a).split(/\s*,\s*/),d=0,f=c.length;f>d;d++){var g=c[d],h=e.parseSize(g),i=h.length,j=h.media;if(i&&(!j||e.matchesMedia(j))){b=i;break}}return e.getWidthFromLength(b)},e.parseSrcset=function(a){for(var b=[];""!==a;){a=a.replace(/^\s+/g,"");var c,d=a.search(/\s/g),e=null;if(-1!==d){c=a.slice(0,d);var f=c[c.length-1];if((","===f||""===c)&&(c=c.replace(/,+$/,""),e=""),a=a.slice(d+1),null===e){var g=a.indexOf(",");-1!==g?(e=a.slice(0,g),a=a.slice(g+1)):(e=a,a="")}}else c=a,a="";(c||e)&&b.push({url:c,descriptor:e})}return b},e.parseDescriptor=function(a,b){var c,d=b||"100vw",f=a&&a.replace(/(^\s+|\s+$)/g,""),g=e.findWidthFromSourceSize(d);if(f)for(var h=f.split(" "),i=h.length+1;i>=0;i--)if(void 0!==h[i]){var j=h[i],k=j&&j.slice(j.length-1);if("h"!==k&&"w"!==k||e.sizesSupported){if("x"===k){var l=j&&parseFloat(j,10);c=l&&!isNaN(l)?l:1}}else c=parseFloat(parseInt(j,10)/g)}return c||1},e.getCandidatesFromSourceSet=function(a,b){for(var c=e.parseSrcset(a),d=[],f=0,g=c.length;g>f;f++){var h=c[f];d.push({url:h.url,resolution:e.parseDescriptor(h.descriptor,b)})}return d},e.dodgeSrcset=function(a){a.srcset&&(a[e.ns].srcset=a.srcset,a.removeAttribute("srcset"))},e.processSourceSet=function(a){var b=a.getAttribute("srcset"),c=a.getAttribute("sizes"),d=[];return"IMG"===a.nodeName.toUpperCase()&&a[e.ns]&&a[e.ns].srcset&&(b=a[e.ns].srcset),b&&(d=e.getCandidatesFromSourceSet(b,c)),d},e.applyBestCandidate=function(a,b){var c,d,f;a.sort(e.ascendingSort),d=a.length,f=a[d-1];for(var g=0;d>g;g++)if(c=a[g],c.resolution>=e.getDpr()){f=c;break}f&&!e.endsWith(b.src,f.url)&&(b.src=f.url,b.currentSrc=b.src)},e.ascendingSort=function(a,b){return a.resolution-b.resolution},e.removeVideoShim=function(a){var b=a.getElementsByTagName("video");if(b.length){for(var c=b[0],d=c.getElementsByTagName("source");d.length;)a.insertBefore(d[0],c);c.parentNode.removeChild(c)}},e.getAllElements=function(){for(var a=[],c=b.getElementsByTagName("img"),d=0,f=c.length;f>d;d++){var g=c[d];("PICTURE"===g.parentNode.nodeName.toUpperCase()||null!==g.getAttribute("srcset")||g[e.ns]&&null!==g[e.ns].srcset)&&a.push(g)}return a},e.getMatch=function(a,b){for(var c,d=b.childNodes,f=0,g=d.length;g>f;f++){var h=d[f];if(1===h.nodeType){if(h===a)return c;if("SOURCE"===h.nodeName.toUpperCase()){null!==h.getAttribute("src")&&void 0!==typeof console&&console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");var i=h.getAttribute("media");if(h.getAttribute("srcset")&&(!i||e.matchesMedia(i))){var j=e.verifyTypeSupport(h);if(j===!0){c=h;break}if("pending"===j)return!1}}}}return c},d(),c._=e,"object"==typeof module&&"object"==typeof module.exports?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):"object"==typeof a&&(a.picturefill=c)}(this,this.document);;

    Polymer('adaptive-image',{
      imageChanged: function(previous, current) {
        picturefill( {
          reevaluate: true
        } );
      }
    });
  ;

Polymer('animated-pages-router',{

  // ===========================================================================
  // Config
  // ===========================================================================

  currentPage: "",
  currentRoute: null,





  // ===========================================================================
  // Init
  // ===========================================================================

  ready: function() {
    this.logService = this.$.logService;
    this.log('ready');

    if (this.autoInit) {
      this.log('selfInit');
      this.init();
    };
  },

  init: function() {
    this.log('init');

    if (this.pages && this.routes) {
      this.navigate();
    };

    // URL change handler
    this.urlChangeHandler = this.navigate.bind(this);
    window.onpopstate = function(event) {
      this.log('popstate detected');
      this.urlChangeHandler();
    }.bind(this);
  },





  // ===========================================================================
  // Routing methods
  // ===========================================================================

  // Find the page (if any) that matches the current URL
  // this function is used when a user tries to directly load a sub-page
  // e.g. http://ginalioti.com/gyros-recipe
  navigate: function() {
    var path = this.parseUrlPath(window.location.href);
    var matchingRoute = null;

    this.log('navigate – trying : `' + path + '`');

    this.routes.forEach(function(route) {
      if (this.testRoute(route.slug, path, "ignore", route.regex)) {
        matchingRoute = route;
        this.urlArguments = {};
        if (matchingRoute.page == "recipe") this.urlArguments.recipe = path.replace("/", "");
        else if (matchingRoute.page == "ingredient") this.urlArguments.ingredient = path.replace("/", "");

        this.currentPage = this.pages.selected = route.page;
      }
    }.bind(this));

    if (matchingRoute) {
      this.log('navigate – matched: `' + matchingRoute.slug + '` [title: _' + matchingRoute.title + '_, page: _' + matchingRoute.page + '_]');
      this.fire('new-page-title', matchingRoute.title);
    }
    else this.log("navigate – no match found");
  },

  // Navigate to a page
  // This is the typical navigation scenario – when a user clicks on links
  // within the app, and is routed to particular pages
  routePage: function(page, object, updateUrlOnly) {
    if (this.currentPage == page && this.selected != 'splash') return;

    this.log('routing to page `' + page + '`');

    var route = _.find(this.routes, function(route){ return route.page == page; });
    if (route) {
      if (page == "recipe")
      {
        // Construct title & slug
        route.titleParsed = object.title + " recipe";
        route.slugParsed = object.slug + "-recipe"; //route.slug.replace(/\:recipe/g, object.slug);
        // Update url
        window.history.pushState(this.appState, route.titleParsed, object.slug); // push a new URL into the history stack
        this.fire('new-page-title', route.titleParsed);
      }
      else if (page == "ingredient")
      {
        // Construct title & slug
        route.titleParsed = object.title;
        route.titleParsed = route.titleParsed.charAt(0).toUpperCase() + route.titleParsed.slice(1);
        route.slugParsed = object.slug + "-ingredient-recipes"; //route.slug.replace(/\:ingredient/g, object.slug);
        // Update url
        window.history.pushState(this.appState, route.titleParsed, object.slug); // push a new URL into the history stack
        this.fire('new-page-title', route.titleParsed);
      }
      else
      {
        window.history.pushState(this.appState, route.title, route.slug); // push a new URL into the history stack
        this.fire('new-page-title', route.title);
      }

      this.currentPage = page;
      if (!updateUrlOnly) this.pages.selected = page;
    };
  },





  // ===========================================================================
  // Helpers
  // ===========================================================================

  parseUrlPath: function(url) {
    // The relative URI is everything after the third slash including the third slash
    // Example relativeUri = '/other/path?queryParam3=false#/example/path?queryParam1=true&queryParam2=example%20string'
    var splitUrl = url.split('/');
    var relativeUri = '/' + splitUrl.splice(3, splitUrl.length - 3).join('/');

    // The path is everything in the relative URI up to the first ? or #
    // Example path = '/other/path'
    var path = relativeUri.split(/[\?#]/)[0];

    // The hash is everything from the first # up to the the search starting with ? if it exists
    // Example hash = '#/example/path'
    var hashIndex = relativeUri.indexOf('#');
    if (hashIndex !== -1) {
      var hash = relativeUri.substring(hashIndex).split('?')[0];
      if (hash.substring(0, 2) === '#/') {
        // Hash path
        path = hash.substring(1);
      } else if (hash.substring(0, 3) === '#!/') {
        // Hashbang path
        path = hash.substring(2);
      }
    }
    return path;
  },

  // router.testRoute(routePath, urlPath, trailingSlashOption, isRegExp) - Test if the route's path matches the URL's path
  //
  // Example routePath: '/example/*'
  // Example urlPath = '/example/path'
  testRoute: function(routePath, urlPath, trailingSlashOption, isRegExp) {
    // This algorithm tries to fail or succeed as quickly as possible for the most common cases.

    // handle trailing slashes (options: strict (default), ignore)
    if (trailingSlashOption === 'ignore') {
      // remove trailing / from the route path and URL path
      if(urlPath.slice(-1) === '/') {
        urlPath = urlPath.slice(0, -1);
      }
      if(routePath.slice(-1) === '/' && !isRegExp) {
        routePath = routePath.slice(0, -1);
      }
    }

    if (isRegExp) {
      // parse HTML attribute path="/^\/\w+\/\d+$/i" to a regular expression `new RegExp('^\/\w+\/\d+$', 'i')`
      // note that 'i' is the only valid option. global 'g', multiline 'm', and sticky 'y' won't be valid matchers for a path.
      if (routePath.charAt(0) !== '/') {
        // must start with a slash
        return false;
      }
      routePath = routePath.slice(1);
      var options = '';
      if (routePath.slice(-1) === '/') {
        routePath = routePath.slice(0, -1);
      }
      else if (routePath.slice(-2) === '/i') {
        routePath = routePath.slice(0, -2);
        options = 'i';
      }
      else {
        // must end with a slash followed by zero or more options
        return false;
      }
      return new RegExp(routePath, options).test(urlPath);
    }

    // If the urlPath is an exact match or '*' then the route is a match
    if (routePath === urlPath || routePath === '*') {
      return true;
    }

    // Look for wildcards
    if (routePath.indexOf('*') === -1 && routePath.indexOf(':') === -1) {
      // No wildcards and we already made sure it wasn't an exact match so the test fails
      return false;
    }

    // Example urlPathSegments = ['', example', 'path']
    var urlPathSegments = urlPath.split('/');

    // Example routePathSegments = ['', 'example', '*']
    var routePathSegments = routePath.split('/');

    // There must be the same number of path segments or it isn't a match
    if (urlPathSegments.length !== routePathSegments.length) {
      return false;
    }

    // Check equality of each path segment
    for (var i = 0; i < routePathSegments.length; i++) {
      // The path segments must be equal, be a wildcard segment '*', or be a path parameter like ':id'
      var routeSegment = routePathSegments[i];
      if (routeSegment !== urlPathSegments[i] && routeSegment !== '*' && routeSegment.charAt(0) !== ':') {
        // The path segment wasn't the same string and it wasn't a wildcard or parameter
        return false;
      }
    }

    // Nothing failed. The route matches the URL.
    return true;
  },

  // router.routeArguments(routePath, urlPath, url, isRegExp) - Gets the path variables and query parameter values from the URL
  routeArguments: function(routePath, urlPath, url, isRegExp) {
    var args = {};

    // Example urlPathSegments = ['', example', 'path']
    var urlPathSegments = urlPath.split('/');

    if (!isRegExp) {
      // Example routePathSegments = ['', 'example', '*']
      var routePathSegments = routePath.split('/');

      // Get path variables
      // urlPath '/customer/123'
      // routePath '/customer/:id'
      // parses id = '123'
      for (var index = 0; index < routePathSegments.length; index++) {
        var routeSegment = routePathSegments[index];
        if (routeSegment.charAt(0) === ':') {
          args[routeSegment.substring(1)] = urlPathSegments[index];
        }
      }
    }

    // Get the query parameter values
    // The search is the query parameters including the leading '?'
    var searchIndex = url.indexOf('?');
    var search = '';
    if (searchIndex !== -1) {
      search = url.substring(searchIndex);
      var hashIndex = search.indexOf('#');
      if (hashIndex !== -1) {
        search = search.substring(0, hashIndex);
      }
    }
    // If it's a hash URL we need to get the search from the hash
    var hashPathIndex = url.indexOf('#/');
    var hashBangPathIndex = url.indexOf('#!/');
    if (hashPathIndex !== -1 || hashBangPathIndex !== -1) {
      var hash = '';
      if (hashPathIndex !== -1) {
        hash = url.substring(hashPathIndex);
      } else {
        hash = url.substring(hashBangPathIndex);
      }
      searchIndex = hash.indexOf('?');
      if (searchIndex !== -1) {
        search = hash.substring(searchIndex);
      }
    }

    var queryParameters = search.substring(1).split('&');
    // split() on an empty string has a strange behavior of returning [''] instead of []
    if (queryParameters.length === 1 && queryParameters[0] === '') {
      queryParameters = [];
    }
    for (var i = 0; i < queryParameters.length; i++) {
      var queryParameter = queryParameters[i];
      var queryParameterParts = queryParameter.split('=');
      args[queryParameterParts[0]] = queryParameterParts.splice(1, queryParameterParts.length - 1).join('=');
    }

    // Parse the arguments into unescaped strings, numbers, or booleans
    for (var arg in args) {
      var value = args[arg];
      if (value === 'true') {
        args[arg] = true;
      } else if (value === 'false') {
        args[arg] = false;
      } else if (!isNaN(value) && value !== '') {
        // numeric
        args[arg] = +value;
      } else {
        // string
        args[arg] = decodeURIComponent(value);
      }
    }

    return args;
  },

  log: function(message) {
    if (this.debug === true && this.logService) {
      this.logService.log(message);
    };
  }
});
;

Polymer('page-recipes',{

  // ===========================================================================
  // Config
  // ===========================================================================

  tabs: null,
  recipeMode: false,
  ingredientMode: false,
  searchInput: null,
  searchValue: null,
  show: "all",





  // ===========================================================================
  // Ready
  // ===========================================================================

  ready: function() {
    // component shortcuts
    this.tabs = this.$.tabs;
    this.toolbars = this.$.toolbars;
    this.searchInput = this.$.searchInput;
    this.logService = this.$.logService;
    this.recipeList = this.$.recipeList;

    // objects
    this.searchValue = null;
    this.course = null;
    this.visibleRecipes = this.recipes;
    this.recipesFilteredByCourse = [];
    this.recipesFilteredByTitle = [];
  },





  // ===========================================================================
  // Change listeners
  // ===========================================================================

  recipesChanged: function(prev, curr) { this.updateVisibleRecipes(); },
  recipesFilteredByCourseChanged: function(prev, curr) { this.updateVisibleRecipes(); },
  recipesFilteredByTitleChanged: function(prev, curr) { this.updateVisibleRecipes(); },





  // ===========================================================================
  // Component methods
  // ===========================================================================

  searchButtonTapped: function() {
    this.searchInput.focus();
  },

  handleRecipetap: function(event, detail, sender) {
    if (this.recipeMode) this.fire('recipes-tap', detail.item.recipe.slug);
    else this.fire('ingredients-tap', detail.item.recipe.slug);
  },

  back: function() {
    this.fire('menu-tap');
  },

  clearSelection: function() {
    this.recipeList.clearSelection();
  },

  sortRecipesAlphabetically: function() {
    this.log("sorting recipes alphabetically");
    this.recipes = _.sortBy(this.recipes, "title");
  },

  sortRecipesByDate: function() {
    this.log("sorting recipes by date");
    this.recipes = _.sortBy(this.recipes, "date").reverse();
  },

  updateVisibleRecipes: function() {
    if (this.ingredientMode) this.log("updateVisibleIngredients");
    console.log(this.recipes);
    console.log(this.visibleRecipes);

    this.async(function() {
      this.searchValue = (this.searchInput.inputValue.length > 0) ? this.searchInput.inputValue : null;
      this.course = (this.tabs.selected == "All") ? null : this.tabs.selected;

      if (!this.searchValue && !this.course) this.visibleRecipes = this.recipes;
      else if (this.searchValue && !this.course) this.visibleRecipes = this.recipesFilteredByTitle;
      else if (!this.searchValue && this.course) this.visibleRecipes = this.recipesFilteredByCourse;
      else this.visibleRecipes = this.intersectionObjects(this.recipesFilteredByCourse, this.recipesFilteredByTitle, function(item1, item2) {
          return item1.id === item2.id;
      });
      console.log(this.visibleRecipes);
    });
  },

  parseRecipeVisibilityByTitle: function() {
    this.searchValue = (this.searchInput.inputValue.length > 0) ? this.searchInput.inputValue : null;

    if (this.searchValue) {
      var _this = this;
      var visibleRecipesTemp = [];

      this.async(function() {
        _.each(this.recipes, function(recipe) {
          var matched = false;

          // match title
          if (recipe.title.toLowerCase().indexOf(_this.searchValue.toLowerCase()) != -1) matched = true;

          // match ingredients
          if (_this.searchValue.length < 2 || _this.ingredientMode) {
            recipe.ingredientsMatchingSearchValue = [];
            if (matched) visibleRecipesTemp.push(recipe);
          } else {
            var tempIngredientsArray = [];
            recipe.ingredientsEnumeration.forEach(
              function (ingredient, index) {
                if (ingredient.toLowerCase().indexOf(_this.searchValue.toLowerCase()) != -1) {
                  tempIngredientsArray.push(ingredient);
                  //console.log('match search value: ' + searchValue + ', with ingredient:' + ingredient + ', in recipe: ' + self.recipe.title);
              }
            });
            recipe.ingredientsMatchingSearchValue = tempIngredientsArray;
            if (tempIngredientsArray.length > 0) matched = true;

            if (matched) visibleRecipesTemp.push(recipe);
          }
        });

        _this.recipesFilteredByTitle = visibleRecipesTemp;
      });
    } else {
      this.recipesFilteredByTitle = this.recipes;
    }
  },

  parseRecipeVisibilityByCourse: function() {
    this.async(function() {
      this.course = (this.tabs.selected == "All") ? null : this.tabs.selected;

      if (this.course) {
        var _this = this;
        this.recipesFilteredByCourse = _.filter(this.recipes, function(recipe) {
          return recipe.courses.indexOf(_this.course) !== -1;
        });
      } else {
        this.recipesFilteredByCourse = this.recipes;
      }
    });
  },





  // ===========================================================================
  // Helpers
  // ===========================================================================

  log: function(message) {
    if (this.config.debug === true && this.logService) {
      this.logService.log(message);
    };
  },

  intersectionObjects2: function(a, b, areEqualFunction) {
      var Result = [];

      for(var i = 0; i < a.length; i++) {
          var aElement = a[i];
          var existsInB = _.any(b, function(bElement) { return areEqualFunction(bElement, aElement); });
          if(existsInB) {
              Result.push(aElement);
          }
      }

      return Result;
  },

  intersectionObjects: function() {
      var Results = arguments[0];
      var LastArgument = arguments[arguments.length - 1];
      var ArrayCount = arguments.length;
      var areEqualFunction = _.isEqual;

      if(typeof LastArgument === "function") {
          areEqualFunction = LastArgument;
          ArrayCount--;
      }

      for(var i = 1; i < ArrayCount ; i++) {
          var array = arguments[i];
          Results = this.intersectionObjects2(Results, array, areEqualFunction);
          if(Results.length === 0) break;
      }
      return Results;
  }

});
;

  Polymer('page-about',{
    back: function() {
      this.fire('menu-tap');
    }
  });
;

Polymer('recipe-full', {

  // ===========================================================================
  // Ready
  // ===========================================================================

  ready: function() {
    // component shortcuts
    this.photos = this.$.photos;
  },





  // ===========================================================================
  // Public methods (called by ginalioti-app)
  // ===========================================================================

  loadExtras: function() {
    this.async(function() {
      this.loadDisqus();
    });
  },

  cyclePhoto: function(){
    if(this.cyclePhotos == true && !this.stopPhotoCycling){
      this.async(this.photosTapped, null, 2000);
      this.async(this.cyclePhoto, null, 4000);
    }
  },





  // ===========================================================================
  // Change watchers
  // ===========================================================================

  recipeChanged: function() {
    if (this.photos) this.photos.selected = 0;
    this.stopPhotoCycling = false;
    this.resetScroll();
  },

  cyclePhotosChanged: function(prev, curr) {
    if (curr === true) this.cyclePhoto();
  },





  // ===========================================================================
  // Component methods
  // ===========================================================================

  photosTapped: function(e) {
    if (this.recipe) {
      if (this.recipe.title) {
        if (e) {
          this.stopPhotoCycling = true; // stop auto-rotation on user click
          e.stopPropagation();
        }
        var photos = this.$.photos;
        this.photos.selected = (this.photos.selected + 2 > this.recipe.photos.length) ? 0 : this.photos.selected + 1;
      }
    }
  },

  back: function() {
    this.fire('back-tap');
  },

  handleRecipetap: function(event, detail, sender) {
    this.selectedRecipe = sender.recipe.slug;
    this.fire('recipes-tap', sender.recipe.slug);
  },

  loadDisqus: function() {
    // remove old frame
    this.$.disqus.innerHTML = "";

    // create new frame
    if (this.recipe) {
      this.thisFullUrl = this.config.baseUrlFull + this.recipe.slug;
      var thisShortUrl = this.recipe.slug;
      var newFrame = document.createElement("iframe");
      newFrame.setAttribute("id", "disqusFrame");
      newFrame.setAttribute("class", "recipe-comments-disqus");
      newFrame.setAttribute("frameborder", "0");
      newFrame.setAttribute("allowtransparency", "true");
      newFrame.setAttribute("src", this.config.baseUrl + "components/recipe-full/disqus-iframe.html?url=" + this.thisFullUrl + "&title=" + escape(this.recipe.title) + "&uid=" + thisShortUrl);
      this.$.disqus.appendChild(newFrame);
    }
  },





  // ===========================================================================
  // Helpers
  // ===========================================================================

  resetScroll: function() {
    //console.log("resetting scroll");
    this.$.headerPanel.scroller.scrollTop = 0;
  }

});
;

    Polymer('paper-spinner',{
      eventDelegates: {
        'animationend': 'reset',
        'webkitAnimationEnd': 'reset'
      },
      publish: {
        /**
         * Displays the spinner.
         *
         * @attribute active
         * @type boolean
         * @default false
         */
        active: {value: false, reflect: true}
      },
      activeChanged: function() {
        if (this.active) {
          this.$.container.classList.add('active');
          this.$.animation.classList.add('active');
        } else {
          this.$.animation.classList.add('warmdown');
        }
      },
      reset: function() {
        this.$.container.classList.remove('active');
        this.$.animation.classList.remove('active', 'warmdown');
      }
    });
  ;

Polymer('facebook-likebox',{
});
;

    console.time('Startup time');
    console.group("App starup");

    var app = document.querySelector('#app');

    app.updatePagetitle = function(event, newTitle, detail) {
      document.title = newTitle;
    };
  