var TINGYUN=function(t,e,n){function r(t){return JSON.parse(t)}function i(t){return JSON.stringify(t)}function o(t){var e=!!t&&"length"in t&&t.length,n=typeof t;return"function"!==n&&("array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function a(t,e){var n,r=0;if(t)if(o(t))for(n=t.length;r<n&&e.call(t[r],t[r],r)!==!1;r++);else for(r in t)if(e.call(t[r],t[r],r)===!1)break;return t}function c(t){return function(e){return"Array"===t&&Array.isArray?Array.isArray(e):Object.prototype.toString.call(e)==="[object "+t+"]"}}function u(t){return new Function("return "+t)()}function s(t){switch(typeof t){case"object":if(!t)return null;if(t instanceof Array){var e=pe.call(t);return a(e,function(t,n){e[n]=s(t)}),"["+e.join(",")+"]"}if(t instanceof Date)return t.getTime().toString();var n="";return a(t,function(t,e){de(t)||(n+=s(e)+":"+s(t)+",")}),n&&(n=n.substr(0,n.length-1)),"{"+n+"}";case"string":return ge+t.replace(me,"\\$1").replace(ye,"\\n")+ge;case"number":return isNaN(t)?null:t;case"boolean":return t;case"function":return s(t.toString());case"undefined":default:return'"undefined"'}}function f(t){return t&&fe(t)?ue(t):t}function l(t,e,n,r){return t.addEventListener(e,n,r)}function d(t,e,n){return t.removeEventListener(e,n)}function v(t,e,n){return t.attachEvent("on"+e,n)}function h(t,e,n){return t.detachEvent("on"+e,n)}function p(t,e,n,r){var i=function(){return xe(t,e,i),n.apply(this,arguments)};return _e(t,e,i,r)}function g(t,e){return Function.prototype.apply.apply(t,e)}function m(t,e){return function(){t.apply(e,arguments)}}function y(t){return we?we(t):t}function b(t){var e=arguments.length;if(e<2||!t)return t;var n=pe.call(arguments,1);return a(n,function(e){a(e,function(e,n){t[n]=e})}),t}function _(t,e){for(var n=-1,r=0,i=null==t?0:t.length,o=[];++n<i;){var a=t[n];e(a,n,t)&&(o[r++]=a)}return o}function x(t,e){return t?e?t.replace(/\{(\w+.?\w+)\}/g,function(t,n){return e[n]||""}).replace(/\{(\d+)\}/g,function(t,n){return e[n]||""}):t:""}function w(t,e,n){var r;if(null==t)return-1;var i=Object(t),o=i.length>>>0;if(0===o)return-1;var a=+n||0;if(Math.abs(a)===1/0&&(a=0),a>=o)return-1;for(r=Math.max(a>=0?a:o-Math.abs(a),0);r<o;){if(r in i&&i[r]===e)return r;r++}return-1}function S(t,e){var n=null==t?0:t.length;if(!n)return-1;for(var r=n;r--;)if(t[r]===e)return r;return r}function k(t){return setTimeout(t,0)}function E(){}function T(){return+new Date}function C(t){return function(){if(null!==t){var e=t;t=null,e.apply(this,arguments)}}}function I(t){return t?fe(t)?t.length:e.ArrayBuffer&&t instanceof ArrayBuffer?t.byteLength:e.Blob&&t instanceof Blob?t.size:t.length?t.length:0:0}function R(t,e,n){return!!t&&(n=n||0,t.indexOf(e)==n)}function q(t){return ke!==Ee&&/^https/i.test(t&&t.protocol||ke)?"https:":Ee}function z(t,e,n,r){var i=null;return t&&e&&(i=q(r)+"//"+t+e,n&&(i+="?",a(n,function(t,e){var n=[y(e),"=",y(t),"&"];i+=n.join("")}),i+="__r="+T())),i}function j(){this.events={}}function N(t){return!(t in ze)||ze[t]}function O(t){var e=Ie.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?e[3]:null}function L(t,e,n){var r=t+"="+e;if(n){var i=new Date;i.setTime(i.getTime()+1e3*n),r+=";expires="+i.toGMTString()}Ie.cookie=r}function A(t,e){e=e||E;var n=new Image;_e(n,Je,function(){"loaded"!=n.readyState&&4!=n.readyState||e(null)},!1),_e(n,Xe,function(){e(null)},!1),_e(n,Ue,function(){e(Ue)},!1),n.src=t}function H(t,e,n,r){de(n)&&(r=n);var i=new XDomainRequest;i.open(cn,t),i.onload=function(){r(null,i.responseText)},i.onerror=function(t){r(t)},i.send(se(e))}function M(t,e,n){var r=Ie.createElement(t);try{for(var i in e)r[i]=e[i]}catch(o){var a="<"+t;for(var i in e)a+=" "+i+'="'+e[i]+'"';a+=">",n||(a+="</"+t+">"),r=Ie.createElement(a)}return r}function D(t,e,n,r){de(n)&&(r=n);var i=M("div",{style:an}),o=M("iframe",{name:"ty_form",width:0,height:0,style:an}),a=M("form",{style:an,action:t,enctype:"application/x-www-form-urlencoded",method:"post",target:"ty_form"}),c=M("input",{name:"data",type:"hidden"},!0);c.value=se(e),a.appendChild(c),i.appendChild(o),i.appendChild(a),Ie.body.appendChild(i),a.submit(),o.onreadystatechange=function(){o.readyState!==$e&&4!==o.readyState||(r(null,o.innerHTML),Ie.body.removeChild(i))}}function B(t,e,n,r){de(n)&&(r=n,n=null);var i=C(r),o=new Re;o[rn]=!0,o.overrideMimeType&&o.overrideMimeType("text/html"),o.onreadystatechange=function(){4==o.readyState&&200==o.status&&i(null,o.responseText)},o.onerror=i,e=se(e);try{o.open(cn,t,!0)}catch(a){return D(t,e,i)}for(var c in n)o.setRequestHeader(c,n[c]);o.send(e)}function F(t,e,n){if(t&&n&&de(n)){var r=t[e];if(!r||!r._wrapped){var i=n(r);return i&&(i._wrapped=!0),t[e]=i,i}}}function P(t){sn&&t()}function U(t){return function(){sn&&t.apply(this,arguments)}}function X(){sn=!1}function Y(){vn.on(Xe,C(function(){t();var e=T();P(function(){fn.load=e}),mn.loadEventEnd=e})),a([Xe,Ye,Ge,We],function(t){_e(e,t,function(e){P(function(){(fn.e[t]||(fn.e[t]=[])).push(T())}),vn.emit(t,e)})});var t=C(function(){var t=T();P(function(){fn.end=t}),mn.domContentLoadedEventStart=t,Ie.querySelectorAll&&(dn.resources=dn.resources||[],a(Ie.querySelectorAll("head>link,head>script"),function(t){var e;"LINK"==t.tagName?e=t.href:"SCRIPT"!=t.tagName||t.defer||t.async||(e=t.src),e&&dn.resources.push(e)}))});_e(Ie,"DOMContentLoaded",t),_e(Ie,Je,function(e){Ie.readyState===$e&&t()});var n=C(function(){mn.touch=T()});a(["scroll","click","keypress"],function(t){p(Ie,t,n)});var r=e.requestAnimationFrame;!r||r.toString().indexOf("[native code]")<0||F(e,"requestAnimationFrame",function(t){return function(){if(!mn.firstPaint){var n=T();P(function(){fn.an.count++,fn.an.t=n}),mn.firstPaint=n,e.requestAnimationFrame=t}return t.apply(this,arguments)}})}function G(t){J(t,hn)}function W(t){J(t,pn)}function J(t,e){var n="ok";return t?void e.push(t):n=e.length?e.join("\n"):n}function $(){var t=this;t.xhrs={},t.errs=[],j.call(t)}function K(){var t=Be(Qe);return t?t:Fe(Qe,Te(),Ze)}function Q(){var t=O(Ve);return t||(t=Te(),L(Ve,t)),t}function V(t){function e(t,e,r){var i=r||"log",o=n[t]||(n[t]={});o[i]=o[i]||"",o[i]+=e}var n={},r=G();if(e("Status",r,"ok"!==r),e("Debug",W()),a(Sn,function(t,n){e("Timeline",n+": "+t.toString())}),!t&&kn)console.log("[TingYun Agent Diagnosis]\n"),a(n,function(t,e){var n=console[e];a(n,function(t,e){console[e](t)})});else{if(t!==nn)return se(n);Le.href=Le.href+"#"+se(n)}}function Z(t,e){this.flags=0,de(t.create)&&(this.create=t.create,this.flags|=En),de(t.before)&&(this.before=t.before,this.flags|=Tn),de(t.after)&&(this.after=t.after,this.flags|=Cn),de(t.error)&&(this.error=t.error,this.flags|=In),this.data=e}function tt(t,e){if(!qn){if(!ve(t)||!t)throw new TypeError("callbacks arguments must be an object");return qn=new Z(t,e)}}function et(t){var e=qn.data;if(0!==(qn.flags&En)){var n=qn.create(qn.data);void 0!==n&&(e=n)}return function r(){0!==(qn.flags&Tn)&&qn.before(this,e);var n=r;n._&&(n._=1);try{var i=t.apply(this,arguments)}catch(o){throw 0!==(qn.flags&In)&&qn.error(e,o),o}return 0!==(qn.flags&Cn)&&qn.after(this,e),i}}function nt(t){return!qn||qn.flags<=0?t:et(t)}function rt(){function t(t){return function(e){var n=pe.call(arguments,0);de(e)&&(n[0]=nt(e));var r=this;try{return t.apply(r,n)}catch(i){}return g(t,[r,n])}}F(e,"setTimeout",t),F(e,"setInterval",t)}function it(){this.id=null,this.active=null,this._set=[]}function ot(){rt();var t=new it;return t.id=tt({create:function(){return t.active},before:function(e,n){n&&t.enter(n)},after:function(e,n){n&&t.exit(n)},error:function(e,n){if(e){try{var r="moduleId";n[r]=e[r]}catch(i){}t.exit(e)}}}),t}function at(){return jn||(zn=ot(),jn=!0),zn}function ct(t){kn&&console.warn(t||"Event key required!")}function ut(t){t=t||{},this.key=t.key;var e=t.timeout||6e5;this.i=e?setTimeout(m(this.fail,this),e):null,this.status=1,this.remain=0,this.xhrs=[],this.s=T(),this.e=null,this.called=this.sent=!1}function st(t){t=t||{};var e=t.key;if(!e)return new ct;if(Ln[e])return new ct("event "+e+" is executing");Ln[e]=!0;var n=zn.createContext();zn.enter(n);var r=new ut(t);return zn.set("event",r),r._end=function(){var t=this;!t.sent&&0===t.remain&&t.called&&t.finish().send(n)},r.end=function(t){var e=this;return e.called?void(kn&&console.warn("Event "+this.key+"has ended or failed!")):(e.called=!0,zn.exit(n),e.status=arguments.length?t:1,void e._end())},r.finish=function(t){var e=this;return e.e=T(),e.i&&clearTimeout(e.i),delete Ln[e.key],e},r.fail=function(){this.end(0)},r}function ft(t){var e=t[Dn];e?(e=parseInt(e),new Date(e).toDateString()===(new Date).toDateString()?t[Bn]=!0:t[Bn]=!1,t[Fn]=!1):(t[Dn]=T(),t[Bn]=!0,t[Fn]=!0)}function lt(t){function e(t,e){var n=t.indexOf("?");if(n>-1&&(t=t.substr(0,n)),t=t.replace(/^http(s)?:\/\//,""),R(t,e))return!0;var r=Xn.exec(t),i=Xn.exec(e);return r&&i?r[2]==i[2]:R(t,e)}var n=Ie.referrer;n&&!e(n,Le.host)&&(t[Pn]=n)}function dt(t){var e={};if(t=t||Le.href,!t)return e;var n=t.indexOf("?");return n>=0&&(t=t.substring(n+1)),t?(a(t.split("&"),function(t){var n=t.split("="),r=vt(n[0]),i=vt(n[1]);r&&i&&(e[r]=i)}),e):e}function vt(t){try{return decodeURIComponent(t)}catch(e){}return null}function ht(){return f(Be(Mn))||{}}function pt(){var t=ht();ft(t),lt(t);var e=dt(Le.search);a(["source","medium","term","content","campaign"],function(n){var r="utm_"+n;e[r]&&(t["latest_"+r]=e[r])}),t.pageref=Ie.referrer||"",t.first_browser_language=Ae.language||Ae.browserLanguage,t[Pn]=t[Pn]||"",t.screen_height=An.sh,t.screen_width=An.sw,Fe(Mn,se(t),Un);var n=b({},t);delete n[Dn],ln.resources={uf:n}}function gt(t,e){if(!t||!t.id)throw new Ce(x(wn,["User or userId"]));mn.emit("send","/userprofile",null,{user:t,properties:e||{}})}function mt(t,e,n){if(!fe(t))throw new Ce(x(wn,["EventId"]));mn.emit("send","/event",null,{event_id:t,tag:e||"",properties:n||{},uf:Yn()})}function yt(t,e){var n;if(ve(t))n=t;else{if(!fe(t)||void 0===e)throw new Ce(xn);n={},n[t]=e}return a(n,function(t,e){e in Gn?ln[Gn[e]]=t:ln[e]=t}),this}function bt(t){if(fe(t))return yt("ulabel",t);throw new Ce(xn)}function _t(t){if(t){var e=ln.firstScreenResources=ln.firstScreenResources||[];le(t)||(t=[t]),a(t,function(t){if(fe(t))e.push(t);else if(bn(t)){var n=t.src||t.href;n&&e.push(n)}})}}function xt(t){le(t)||(t=[t]),a(t,function(t){if(t){if(!(t instanceof RegExp))throw new Ce("parameter's type requires RegExp");(qe.domains||(qe.domains=[])).push(t)}})}function wt(){if(Object.defineProperty){var t=e[tn];Object.defineProperty(e,tn,{get:function(){return Jn++>0&&e.console&&console.warn("window.%s is deprecated, use window.%s instead.",tn,en),t}})}}function St(t){try{return f(t)}catch(e){G(e&&e.message)}return null}function kt(){return mn[Zn]||mn._end}function Et(){return mn.loadEventEnd||mn._end}function Tt(t){function r(e){return t[e]>0?t[e]-o:0}var i={},o=n;if(t){P(function(){var e=fn.t={};a(t,function(t,n){de(t)||(e[n]=t)})}),o=t.navigationStart,i={f:r($n),qs:r(Kn),rs:r(Qn),re:r(Vn),os:r(Zn),oe:r(tr),oi:r(er),oc:r(nr),ls:r(rr),le:r(ir),tus:r(or),tue:r(ar)};var c=r(cr),u=r(ur),s=r(sr),f=r(fr),l=r(lr),d=r(dr);if(d-l>0&&(i.cs=l,i.ce=d),u-c>0&&(i.ds=c,i.de=u),(f-s>0||f>0)&&(i.es=s,i.ee=f),0==i.le){var v=Et();i.ue=v-o,Bt()&&(i.ue=v-n)}mn._le=i.ue||i.le;var h,p;if(t.msFirstPaint)h=t.msFirstPaint,P(function(){fn.fp="m_"+h});else if((p=e.chrome)&&p.loadTimes){var g=p.loadTimes();g&&g.firstPaintTime&&(h=1e3*g.firstPaintTime),P(function(){fn.fp="c_"+g.firstPaintTime})}else mn.firstPaint&&(h=mn.firstPaint,P(function(){fn.fp=h}));h&&(i.fp=Math.round(h-o),mn.fp=i.fp),t[vr]&&(i.sl=r(vr))}else i={t:o,os:kt()-o,ls:Et()-o};return i.je=mn.errs&&mn.errs.length||0,mn.ct&&(i.ct=mn.ct-o),mn.touch&&(i.fi=mn.touch-o),i}function Ct(t,e){var r={tr:!1,tt:y(Ie.title),charset:Ie.characterSet};ln.resources&&b(r,ln.resources),P(function(){r.debug=fn}),X();var i=mn.errs;a(i,function(t,r){var o=t.toObject();Bt()?o.o=o.o-n:o.o=o.o-e&&e.navigationStart||n,i[r]=o}),r.err=i;var o,c="getEntriesByType",u="getEntries";return t[c]?o=t[c]("resource"):W(x(_n,[c])),Bt()&&(o=t[u]),o&&(r.tr=!0,r.res=[],a(o,function(t){function e(e){var n=t[e];return n>0?n:0}var n=t.initiatorType,i=t.name,o={o:e("startTime"),rt:n,n:i,f:e($n),ds:e(cr),de:e(ur),cs:e(lr),ce:e(dr),sl:e(vr),qs:e(Kn),rs:e(Qn),re:e(Vn),ts:t.transferSize||0,es:t.encodedBodySize||0};if(Bt()&&(o.ec=t.errorCode||0),"xmlhttprequest"===n){var a=It(i);a&&(o.aid=a.id,o.atd=a.trId,o.an=a.action,o.aq=a.time&&a.time.qu,o.as=a.time&&a.time.duration)}r.res.push(o)})),r}function It(t){var e;return a(mn.xhrs,function(n,r){if(r&&r.indexOf(t)>-1)return e=n,!1}),e}function Rt(t){var e={};return t&&(e.id=t.id,e.a=t.a,e.q=t.q,e.tid=t.tid,e.n=t.n),e}function qt(t){if(!t.agent){var n=e._ty_rum;if(n&&n.agent)t.agent=n.agent;else{var r="TINGYUN_DATA",i=O(r);if(i){try{t.agent=St(decodeURIComponent(i))}catch(o){G(o&&o.message)}L(r,"",-1e3)}}}return t.agent}function zt(t){var e=0,n=t.timing;return n?t.getEntriesByName&&(e=n.domLoading,a(dn.resources,function(r){var i=t.getEntriesByName(r);if(1==i.length){var o=i[0].responseEnd+n.navigationStart;o>e&&(e=o)}}),e-=n.navigationStart):W("fp=0"),P(function(){fn._fp=e}),Math.round(e)}function jt(t,n,r,i){var o=r||0,c=ln.firstScreenResources;if(c&&c.length&&t.getEntriesByName)return a(c,function(e){var n=t.getEntriesByName(e);if(n.length){var r=n[0],i=r.responseEnd;i>o&&(o=i)}}),i.fs_s=1,Math.round(o);var u=Ie.createElement("img");if(!u.getBoundingClientRect)return P(function(){fn.fs=o}),o;if(t.getEntriesByName){var s=e.innerHeight,f=e.innerWidth,l=[];a(Ie.querySelectorAll("img"),function(t){t.src&&Nt(Ot(t),s,f)&&!Lt(t)&&l.push(t.src)});var d=(n.loadEventEnd||mn.loadEventEnd)-n.navigationStart;a(l,function(e){var n=t.getEntriesByName(e);if(n.length){var r=n[0],i=r.responseEnd;r.fetchStart<=d&&i>o&&(o=i)}})}return Math.round(o)}function Nt(t,n,r){if(t){var i=e.pageYOffset,o=t.top+(0===i?0:i||Ie.scrollTop||0)-(Ie.clientTop||0);if(o>=n)return!1;var a=t.left;return a>=0&&a<r}return!1}function Ot(t){return de(t.getBoundingClientRect)?t.getBoundingClientRect():void 0}function Lt(t){return De.reliableHiddenOffsets()?t.offsetWidth<=0&&t.offsetHeight<=0&&!t.getClientRects().length:At(t)}function At(t){for(;t&&1===t.nodeType;){if("none"===Ht(t)||"hidden"===t.type)return!0;t=t.parentNode}return!1}function Ht(t){return t.style&&t.style.display}function Mt(t){var e=n,r=0;return t&&(e=t.navigationStart||e,r=t[Zn]||t.domInteractive||t.domLoading||r,Bt())?r-e:(r=mn[Zn]||r||mn._end,r-e)}function Dt(t){if(t){var e=t.fetchStart;if(e)return e-t.navigationStart}}function Bt(){return e.nbperf&&e.nbperf.data}function Ft(t){var e;return t&&(e=!0,a(t,function(){return e=!1})),!!e}function Pt(t){return function e(n,r){var i=this,o=e;if(o._&&(o._=1),!i[rn]){var a=i[tn]={};a.method=n,a.url=r,a.id=_r++;var c=zn.get("event");c&&(a.key=c.key,c.remain++)}try{return t.apply(i,arguments)}catch(u){}return g(t,[i,arguments])}}function Ut(t){return function e(n){var r=this,i=e;if(i._&&(i._=1),!r[rn]){var o=r[tn];o&&(o.start=T(),o.reqSize=I(n)),Xt(r),r.setRequestHeader&&ze.id&&o&&Sr(o.url)&&(o.r=T()%1e9,r.setRequestHeader("X-Tingyun-Id",ze.id+";r="+o.r))}try{return t.apply(r,arguments)}catch(a){}return g(t,[r,arguments])}}function Xt(t){function e(e){return nt(function n(){var r=n;r._&&(r._=1),Yt(t);var i;if(de(e)){var o=t[tn];if(o&&4==t.readyState)var a=T();i=e.apply(this,arguments),o&&4==t.readyState&&(o.cbTime=T()-a,t[tn]=null)}return i})}function n(e){t[tn]&&(t[tn].errorCode=e)}var r=t[wr];if(r)F(t,wr,e);else try{_e(t,Je,nt(function o(){var e=o;e._&&(e._=1),Yt(t)})),a(xr,function(e,r){_e(t,r,function(){n(e)})})}catch(i){return void k(function(){a(xr,function(e,r){var i="on"+r;t[i]?F(t,i,function(t){if(n(e),de(t))return t.apply(this,arguments)}):t[i]=function(){n(e)}}),F(t,wr,e)})}k(function(){F(t,wr,e)})}function Yt(t){var e=t[tn];if(e&&(e.end=T(),e.readyState=t.readyState,4==t.readyState)){e.status=t.status,e.resSize=Gt(t);var n=zn.get("event");k(function(){var r=!1;if(a(br,function(t){if(t.id===e.id)return r=!0,!1}),!r){var i=Wt(e,t);n&&n.key==e.key&&(n.xhrs.push(i),0===--n.remain&&n._end()),mn.xhrs&&(yr(e),mn.xhrs[e.url]=i),br.push(i)}})}}function Gt(t){var e=0;if(""==t.responseType||"text"==t.responseType)e=I(t.responseText);else if(t.response)e=I(t.response);else try{e=I(t.responseText)}catch(n){}return e}function Wt(t,e){if(t){var n=t.status,r={id:t.id,req:t.method+" "+t.url,start:t.start,du:n>0?t.end-t.start:0,cb:t.cbTime||0,status:n,err:t.errorCode?t.errorCode:0,rec:t.resSize,send:t.reqSize};if(t.r){var i=$t(e,t);i&&(r.s_id=i.id,r.s_name=i.action,i.time&&(r.s_du=i.time.duration,r.s_qu=i.time.qu),r.t_id=i.trId)}return r}}function Jt(t,e){if(t&&t.getResponseHeader)return t.getResponseHeader(e)}function $t(t,e){var n=St(Jt(t,"X-Tingyun-Tx-Data"));return n&&n.r&&Kt(n.r)===Kt(e.r)?n:null}function Kt(t){return t+""}function Qt(){return setInterval(function(){if(br&&br.length){var t=[];a(br,function(e){t.push(e)});var n=null;ln.ulabel&&(n={ulabel:ln.ulabel}),mn.emit("send","/xhr1",n,{xhr:t},function(){br=_(br,function(e){return(t.indexOf?t.indexOf(e):w(t,e))<0})}),Se()&&!e.XDomainRequest&&(br=[])}},gr)}function Vt(){var t=Re&&Re.prototype;return t?(F(t,"open",Pt),F(t,"send",Ut)):Re&&(e.XMLHttpRequest=function(){var t=new Re;return F(t,"open",Pt),F(t,"send",Ut),t}),Qt()}function Zt(t){this.limit=t,this.reset()}function te(t,e,n,r){return String(t)+String(e)+String(n)+String(r)}function ee(t,e,n,r,i,o,a){var c=this;c.id=t,c.time=T(),c.msg=e,c.lineno=r,c.colno=i,c.filename=n,c.count=1,c.stack=o&&o.stack||"",c.module=a,c.fix();var u=Cr[t];c.ep=u?0:1,Cr[t]=!0}function ne(t){var e=function(t){var e=[];return a(t,function(t){e.push(t.toObject())}),e}(Tr.c);if(!e||!e.length)return null;var r={fu:Er?Er:Er++,os:parseInt((T()-(dn.pfStart||n))/1e3)};ln.ulabel&&(r.ulabel=ln.ulabel),mn.emit("send","/err1",r,{datas:e},m(Tr.reset,Tr))}function re(t,e,n,r,i){if(e||!Ne){var o=!1;if(a(qe.domains,function(t){if(o=t.test(e))return!1}),!o){var c=i&&i.moduleId,u=te(t,n,r,c),s=Tr.get(u);s?s.increase():(s=new ee(u,t,e,n,r,i,c),Tr.add(u,s),mn.errs&&mn.errs.push(s))}}}function ie(){var t=e.onerror;e.onerror=function(e,n,r,i,o){if(re(e,n,r,i,o),de(t))return t.apply(this,arguments)},e.onerror._ty=!0}function oe(){var t=e.onerror;t&&t._ty||ie()}function ae(){var t=Se();return t?ie():_e(e,Ue,function(t){var n,r,i,o,a;(t instanceof e.Event||e.ErrorEvent&&t instanceof e.ErrorEvent)&&(n=t.message||t.error&&(t.error.message||t.error.constructor.name)||"",r=t.lineno||0,i=t.colno||0,o=t.filename||t.error&&t.error.filename||t.target&&t.target.baseURI||"",o==Ie.URL&&(o="#"),a=t.error),re(n,o,r,i,a)}),vn.on([Xe,Ye,Ge,We],function(t){ne()}).on(Xe,function(){t&&k(oe)}),setInterval(ne,kr)}function ce(){return mn.start()&&(pr(),Vt(),ae()),mn._end=T(),P(function(){fn._end=mn._end}),wt(),Wn}var ue,se,fe=c("String"),le=c("Array"),de=c("Function"),ve=c("Object"),he=c("Undefined"),pe=[].slice,ge='"',me=/([\"\\])/g,ye=/\n/g,be=e.JSON;be&&be.parse&&be.stringify?(ue=r,se=i):(ue=u,se=s);var _e,xe;e.addEventListener?(_e=l,xe=d):(_e=v,xe=h);var we=e.encodeURIComponent,Se=new Function("return!+[1,]"),ke=e.location.protocol,Ee="http:",Te=function(){function t(t){return t<0?NaN:t<=30?0|Math.random()*(1<<t):t<=53?(0|Math.random()*(1<<30))+(0|Math.random()*(1<<t-30))*(1<<30):NaN}function e(t,e){for(var n=t.toString(16),r=e-n.length,i="0";r>0;r>>>=1,i+=i)1&r&&(n=i+n);return n}return function(){return e(t(32),8)+"-"+e(t(16),4)+"-"+e(16384|t(12),4)+"-"+e(32768|t(14),4)+"-"+e(t(48),12)}}();j.prototype={on:function(t,e){var n=this;return fe(t)?(n.events[t]||(n.events[t]=[])).push(e):le(t)&&a(t,function(t){n.on(t,e)}),n},off:function(t,e){var n=arguments.length,r=this;if(0===n)return r.events={},r;var i=r.events[t];if(!i)return r;if(1===n)return r.events[t]=null,r;for(var o,a=i.length;a--;)if(o=i[a],o===e){i.splice(a,1);break}return r},emit:function(t){var e=[].slice.call(arguments,1),n=this.events[t];return n&&a(n,function(t){return t.apply(this,e)}),this},unshift:function(t,e){var n=this;return(n.events[t]||(n.events[t]=[])).unshift(e),n}};var Ce=e.Error,Ie=e.document,Re=e.XMLHttpRequest,qe={};t(qe);var ze=qe.server||{},je={fp_threshold:2e3,fs_threshold:4e3,dr_threshold:4e3};ze=b(je,ze);var Ne=N("ignore_err"),Oe=N("debug"),Le=e.location,Ae=e.navigator,He=e.HTMLElement,Me=function(){try{var t=Te();return e.localStorage.setItem(t,t),e.localStorage.removeItem(t),!0}catch(n){return!1}}(),De={};De.localStorage=Me,function(){function t(){var t,f,l=Ie.documentElement;l.appendChild(u),s.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",n=i=c=!1,r=a=!0,e.getComputedStyle&&(f=e.getComputedStyle(s),n="1%"!==(f||{}).top,c="2px"===(f||{}).marginLeft,i="4px"===(f||{width:"4px"}).width,s.style.marginRight="50%",r="4px"===(f||{marginRight:"4px"}).marginRight,t=s.appendChild(Ie.createElement("div")),t.style.cssText=s.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",t.style.marginRight=t.style.width="0",s.style.width="1px",a=!parseFloat((e.getComputedStyle(t)||{}).marginRight),s.removeChild(t)),s.style.display="none",o=0===s.getClientRects().length,o&&(s.style.display="",s.innerHTML="<table><tr><td></td><td>t</td></tr></table>",t=s.getElementsByTagName("td"),t[0].style.cssText="margin:0;border:0;padding:0;display:none",o=0===t[0].offsetHeight,o&&(t[0].style.display="",t[1].style.display="none",o=0===t[0].offsetHeight)),l.removeChild(u)}var n,r,i,o,a,c,u=(Ie.documentElement,Ie.createElement("div")),s=Ie.createElement("div");s.style&&(s.style.cssText="float:left;opacity:.5",De.opacity="0.5"===s.style.opacity,De.cssFloat=!!s.style.cssFloat,s.style.backgroundClip="content-box",s.cloneNode(!0).style.backgroundClip="",De.clearCloneStyle="content-box"===s.style.backgroundClip,u=Ie.createElement("div"),u.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",s.innerHTML="",u.appendChild(s),De.boxSizing=""===s.style.boxSizing||""===s.style.MozBoxSizing||""===s.style.WebkitBoxSizing,De.reliableHiddenOffsets=function(){return null==n&&t(),o})}();var Be,Fe;De.localStorage?(Be=function(t){return e.localStorage.getItem(t)},Fe=function(t,n){return e.localStorage.setItem(t,n),n}):(Be=O,Fe=L);var Pe,Ue="error",Xe="load",Ye="unload",Ge="beforeunload",We="pagehide",Je="readystatechange",$e="complete",Ke="on",Qe="TY_DISTINCT_ID",Ve="TY_SESSION_ID",Ze=86400,tn="_ty_rum",en="TINGYUN",nn=2,rn="__ign",on="__ty_aysncWrap__",an="display:none",cn="POST",un=A;e.XDomainRequest?Pe=H:Se()?Pe=D:Ae.sendBeacon?un=Pe=function(t,e,n,r){de(n)&&(r=n,n=null);var i=Ae.sendBeacon(t,se(e));i&&r&&r()}:Pe=B;var sn=Oe,fn={start:n,e:{},an:{count:0},visible:[]},ln={},dn={};!function(){if(Oe){var t,e,n="visibilitychange";he(Ie.hidden)?he(Ie.msHidden)?he(Ie.webkitHidden)||(t="webkitHidden",e="webkit"+n):(t="msHidden",e="ms"+n):(t="hidden",e=n),he(Ie.addEventListener)||he(Ie[t])||_e(Ie,e,U(function(){fn.visible.push([Ie[t],T()])}))}}();var vn=new j,hn=[],pn=[],gn=$.prototype;gn.start=function(){if(!ze.key)return G("missing config, agent disabled!"),!1;var t=e[tn]||e[en];return t&&t.server?(G("already loaded!"),!1):(Y(),this)},b(gn,j.prototype);var mn=new $;mn.on("send",function(t,e,n,r){var i=z(ze.beacon,t,b({},yn,e||{}));switch(r=r||E,t){case"/pf":n?Pe(i,n,function(){mn.xhrs=mn.errs=null,r()}):un(i,r);break;default:Pe(i,n,r)}});var yn={pvid:Te(),ref:Ie.URL,referrer:Ie.referrer,key:ze.key,v:"1.7.6.0613",av:"1.7.6.0613",did:K(),sid:Q()},bn=He?function(t){return t instanceof He}:function(t){t&&"object"==typeof t&&1===t.nodeType&&fe(t.nodeName)},_n="{0} not support",xn="illegal argument",wn="{0} is invalid",Sn={},kn="undefined"!=typeof e.console,En=1,Tn=2,Cn=4,In=8,Rn=Z.prototype;Rn.create=Rn.before=Rn.after=Rn.error=null;var qn;it.prototype={createContext:function(){return Object.create?Object.create(this.active):ot(this.active)},get:function(t){if(this.active)return this.active[t]},set:function(t,e){if(this.active)return this.active[t]=e},enter:function(t){if(!t)throw new Ce("context required!");this._set.push(this.active),this.active=t},exit:function(t){if(!t)throw new Ce("context required!");if(t===this.active)return void(this.active=this._set.pop());var e=this._set.lastIndexOf?this._set.lastIndexOf(t):S(this._set,t);if(e<0)throw new Ce("context not currently entered!");this._set.splice(e,1)},bind:function(t,e){e||(e=this.active?this.active:this.createContext());var n=this;return function(){n.enter(e);try{return t.apply(this,arguments)}catch(r){try{var i="moduleId";r[i]=e[i]}catch(o){}throw r}finally{n.exit(e)}}}};var zn,jn=!1,zn=at(),Nn=ct.prototype;Nn.fail=Nn.end=E;var On=ut.prototype;On.end=On.finish=On.fail=null,On.send=function(t){var e=this;e.sent=!0;var n=t.event&&t.event.xhrs||[];a(n,function(t){t.start=t.start-e.s});var r={key:e.key,duration:e.e-e.s,status:e.status,xhrs:n};mn.emit("send","/spe",null,r,E)};var Ln={},An={},Hn=e.screen;Hn&&(An.sh=Hn.height,An.sw=Hn.width);var Mn="_ty_uf_data",Dn="_ty_first_day",Bn="is_first_day",Fn="is_first_time",Pn="latest_referrer",Un=2592e3,Xn=new RegExp(/(.*?)\.?([^\.]*?)\.?(com|net|org|biz|ws|in|me|co\.uk|co|org\.uk|ltd\.uk|plc\.uk|me\.uk|edu|mil|br\.com|cn\.com|eu\.com|hu\.com|no\.com|qc\.com|sa\.com|se\.com|se\.net|us\.com|uy\.com|ac|co\.ac|gv\.ac|or\.ac|ac\.ac|af|am|as|at|ac\.at|co\.at|gv\.at|or\.at|asn\.au|com\.au|edu\.au|org\.au|net\.au|id\.au|be|ac\.be|adm\.br|adv\.br|am\.br|arq\.br|art\.br|bio\.br|cng\.br|cnt\.br|com\.br|ecn\.br|eng\.br|esp\.br|etc\.br|eti\.br|fm\.br|fot\.br|fst\.br|g12\.br|gov\.br|ind\.br|inf\.br|jor\.br|lel\.br|med\.br|mil\.br|net\.br|nom\.br|ntr\.br|odo\.br|org\.br|ppg\.br|pro\.br|psc\.br|psi\.br|rec\.br|slg\.br|tmp\.br|tur\.br|tv\.br|vet\.br|zlg\.br|br|ab\.ca|bc\.ca|mb\.ca|nb\.ca|nf\.ca|ns\.ca|nt\.ca|on\.ca|pe\.ca|qc\.ca|sk\.ca|yk\.ca|ca|cc|ac\.cn|com\.cn|edu\.cn|gov\.cn|org\.cn|bj\.cn|sh\.cn|tj\.cn|cq\.cn|he\.cn|nm\.cn|ln\.cn|jl\.cn|hl\.cn|js\.cn|zj\.cn|ah\.cn|gd\.cn|gx\.cn|hi\.cn|sc\.cn|gz\.cn|yn\.cn|xz\.cn|sn\.cn|gs\.cn|qh\.cn|nx\.cn|xj\.cn|tw\.cn|hk\.cn|mo\.cn|cn|cx|cz|de|dk|fo|com\.ec|tm\.fr|com\.fr|asso\.fr|presse\.fr|fr|gf|gs|co\.il|net\.il|ac\.il|k12\.il|gov\.il|muni\.il|ac\.in|co\.in|org\.in|ernet\.in|gov\.in|net\.in|res\.in|is|it|ac\.jp|co\.jp|go\.jp|or\.jp|ne\.jp|ac\.kr|co\.kr|go\.kr|ne\.kr|nm\.kr|or\.kr|li|lt|lu|asso\.mc|tm\.mc|com\.mm|org\.mm|net\.mm|edu\.mm|gov\.mm|ms|nl|no|nu|pl|ro|org\.ro|store\.ro|tm\.ro|firm\.ro|www\.ro|arts\.ro|rec\.ro|info\.ro|nom\.ro|nt\.ro|se|si|com\.sg|org\.sg|net\.sg|gov\.sg|sk|st|tf|ac\.th|co\.th|go\.th|mi\.th|net\.th|or\.th|tm|to|com\.tr|edu\.tr|gov\.tr|k12\.tr|net\.tr|org\.tr|com\.tw|org\.tw|net\.tw|ac\.uk|uk\.com|uk\.net|gb\.com|gb\.net|vg|sh|kz|ch|info|ua|gov|name|pro|ie|hk|com\.hk|org\.hk|net\.hk|edu\.hk|us|tk|cd|by|ad|lv|eu\.lv|bz|es|jp|cl|ag|mobi|eu|co\.nz|org\.nz|net\.nz|maori\.nz|iwi\.nz|io|la|md|sc|sg|vc|tw|travel|my|se|tv|pt|com\.pt|edu\.pt|asia|fi|com\.ve|net\.ve|fi|org\.ve|web\.ve|info\.ve|co\.ve|tel|im|gr|ru|net\.ru|org\.ru|hr|com\.hr|ly|xyz)$/);pt();var Yn=function(){var t=ht();return delete t[Dn],t},Gn={host:"cshst",url:"csurl"},Wn={version:"1.7.6.0613",config:yt,DIAGNOSE_HREF:nn,diagnose:V,createEvent:st,logFirstScreen:_t,addExcludedDomain:xt};Wn.ty_set_userprofile=Wn.setUserProfile=gt,Wn.ty_track_event=Wn.trackEvent=mt,Wn.setUserLabel=bt,e[tn]=e[en]=Wn;var Jn=0,$n="fetchStart",Kn="requestStart",Qn="responseStart",Vn="responseEnd",Zn="domContentLoadedEventStart",tr="domContentLoadedEventEnd",er="domInteractive",nr="domComplete",rr="loadEventStart",ir="loadEventEnd",or="unloadEventStart",ar="unloadEventEnd",cr="domainLookupStart",ur="domainLookupEnd",sr="redirectStart",fr="redirectEnd",lr="connectStart",dr="connectEnd",vr="secureConnectionStart",hr=qt(qe);hr&&hr.ulabel&&(ln.ulabel=hr.ulabel);var pr=function(){var t=C(function(){function t(t){return t?"1":"0"}var r=e.performance;r||(r=St(Bt()||""));var i=!!r;i&&Ft(r)&&(i=!1),i||W(x(_n,["pf"]));var o=Rt(hr),c=r&&r.timing,u=b(Tt(c),o,ln),s=b({},An);s.ressize=!!c,mn.fp?(s.fp=mn.fp,i&&mn.fp>mn._le&&(W("fp>le"),s.fp=zt(r),s.__fp=2)):i?(s.fp=zt(r),s.__fp=1):s.fp=s.__fp=0,s.dr=Mt(c),i?s.fs=jt(r,c,s.fp,s):s.__fs=0;var f,l="";if(i){var d="trace",v=Math.max(u.ls,0);v||(v=Et()-c.navigationStart||n),s[d]=v;var h=Dt(c);a(["fp","fs","dr",d],function(e){l+=t((h?s[e]-h:s[e])>=ze[e+"_threshold"])}),delete s[d],l.indexOf("1")>-1&&(f=Ct(r,c))}s.trflag=l||"0000",dn.pfStart=T(),delete u.firstScreenResources,delete u.resources,mn.emit("send","/pf",b(u,s),f,function(){W("pf sent!"),mn.xhrs=mn.errs=null})});return vn.on(Xe,function(){k(t)}).on([Ye,Ge,We],t)},gr=2e3,mr=function(t){var e=[];return a(t,function(t){try{e.push(new RegExp(t))}catch(n){G(n&&n.message)}}),e}(ze.custom_urls),yr=mr.length?function(t){var e=t.url;!mn.ct&&e&&a(mr,function(n){if(e.match(n))return mn.ct=t.end+t.cbTime,!1})}:E,br=[],_r=0,xr={error:990,abort:905,timeout:903},wr=Ke+Je,Sr=function(){function t(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}var e=/(msie|trident)/i.test(Ae.userAgent),n=Ie.createElement("a"),r=t(Le.href);return function(e){var n=t(e);return n.protocol===r.protocol&&n.host===r.host}}(),kr=1e4,Er=0;Zt.prototype={add:function(t,e){this.len>this.limit||this.get(t)||(this.c[t]=e,this.len++)},get:function(t){return this.c[t]},reset:function(){this.c={},this.len=0}};var Tr=new Zt(100),Cr={};ee.prototype={increase:function(){this.count++},fix:function(){var t=this,e=t.stack;if(e&&fe(e)){e=e.split(/\n/);var n=[];a(e,function(t,e){t.indexOf(on)==-1&&n.push(t)}),t.stack=n.join("\n")}},toObject:function(){var t=this;return{o:t.time,e:t.msg,l:t.lineno,c:t.colno,r:t.filename,ec:t.count,s:t.stack,m:t.module,ep:t.ep}}};var Ir=ce();return Ir}(function(ty_rum){ty_rum.server = {id:'p35OnrDoP8k',beacon:'10.229.255.3:8088',beacon_err:'10.229.255.3:8088',key:'mLme5iz8TD8',trace_threshold:7000,fp_threshold:2000,fs_threshold:4000,dr_threshold:4000,custom_urls:[],sr:1.0};},window,+new Date);