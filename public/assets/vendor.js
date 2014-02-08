/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);d3 = function() {
  function n(n) {
    return null != n && !isNaN(n)
  }

  function t(n) {
    return n.length
  }

  function e(n) {
    for (var t = 1; n * t % 1;) t *= 10;
    return t
  }

  function r(n, t) {
    try {
      for (var e in t) Object.defineProperty(n.prototype, e, {
        value: t[e],
        enumerable: !1
      })
    } catch (r) {
      n.prototype = t
    }
  }

  function u() {}

  function i() {}

  function o(n, t, e) {
    return function() {
      var r = e.apply(t, arguments);
      return r === t ? n : r
    }
  }

  function a(n, t) {
    if (t in n) return t;
    t = t.charAt(0).toUpperCase() + t.substring(1);
    for (var e = 0, r = Do.length; r > e; ++e) {
      var u = Do[e] + t;
      if (u in n) return u
    }
  }

  function c() {}

  function l() {}

  function s(n) {
    function t() {
      for (var t, r = e, u = -1, i = r.length; ++u < i;)(t = r[u].on) && t.apply(this, arguments);
      return n
    }
    var e = [],
      r = new u;
    return t.on = function(t, u) {
      var i, o = r.get(t);
      return arguments.length < 2 ? o && o.on : (o && (o.on = null, e = e.slice(0, i = e.indexOf(o)).concat(e.slice(i + 1)), r.remove(t)), u && e.push(r.set(t, {
        on: u
      })), n)
    }, t
  }

  function f() {
    mo.event.preventDefault()
  }

  function h() {
    for (var n, t = mo.event; n = t.sourceEvent;) t = n;
    return t
  }

  function g(n) {
    for (var t = new l, e = 0, r = arguments.length; ++e < r;) t[arguments[e]] = s(t);
    return t.of = function(e, r) {
      return function(u) {
        try {
          var i = u.sourceEvent = mo.event;
          u.target = n, mo.event = u, t[u.type].apply(e, r)
        } finally {
          mo.event = i
        }
      }
    }, t
  }

  function p(n) {
    return Lo(n, Ro), n
  }

  function d(n) {
    return "function" == typeof n ? n : function() {
      return Ho(n, this)
    }
  }

  function v(n) {
    return "function" == typeof n ? n : function() {
      return Fo(n, this)
    }
  }

  function m(n, t) {
    function e() {
      this.removeAttribute(n)
    }

    function r() {
      this.removeAttributeNS(n.space, n.local)
    }

    function u() {
      this.setAttribute(n, t)
    }

    function i() {
      this.setAttributeNS(n.space, n.local, t)
    }

    function o() {
      var e = t.apply(this, arguments);
      null == e ? this.removeAttribute(n) : this.setAttribute(n, e)
    }

    function a() {
      var e = t.apply(this, arguments);
      null == e ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, e)
    }
    return n = mo.ns.qualify(n), null == t ? n.local ? r : e : "function" == typeof t ? n.local ? a : o : n.local ? i : u
  }

  function y(n) {
    return n.trim().replace(/\s+/g, " ")
  }

  function M(n) {
    return new RegExp("(?:^|\\s+)" + mo.requote(n) + "(?:\\s+|$)", "g")
  }

  function x(n, t) {
    function e() {
      for (var e = -1; ++e < u;) n[e](this, t)
    }

    function r() {
      for (var e = -1, r = t.apply(this, arguments); ++e < u;) n[e](this, r)
    }
    n = n.trim().split(/\s+/).map(b);
    var u = n.length;
    return "function" == typeof t ? r : e
  }

  function b(n) {
    var t = M(n);
    return function(e, r) {
      if (u = e.classList) return r ? u.add(n) : u.remove(n);
      var u = e.getAttribute("class") || "";
      r ? (t.lastIndex = 0, t.test(u) || e.setAttribute("class", y(u + " " + n))) : e.setAttribute("class", y(u.replace(t, " ")))
    }
  }

  function _(n, t, e) {
    function r() {
      this.style.removeProperty(n)
    }

    function u() {
      this.style.setProperty(n, t, e)
    }

    function i() {
      var r = t.apply(this, arguments);
      null == r ? this.style.removeProperty(n) : this.style.setProperty(n, r, e)
    }
    return null == t ? r : "function" == typeof t ? i : u
  }

  function w(n, t) {
    function e() {
      delete this[n]
    }

    function r() {
      this[n] = t
    }

    function u() {
      var e = t.apply(this, arguments);
      null == e ? delete this[n] : this[n] = e
    }
    return null == t ? e : "function" == typeof t ? u : r
  }

  function S(n) {
    return "function" == typeof n ? n : (n = mo.ns.qualify(n)).local ? function() {
      return xo.createElementNS(n.space, n.local)
    } : function() {
      return xo.createElementNS(this.namespaceURI, n)
    }
  }

  function E(n) {
    return {
      __data__: n
    }
  }

  function k(n) {
    return function() {
      return Oo(this, n)
    }
  }

  function A(n) {
    return arguments.length || (n = mo.ascending),
    function(t, e) {
      return t && e ? n(t.__data__, e.__data__) : !t - !e
    }
  }

  function N(n, t) {
    for (var e = 0, r = n.length; r > e; e++)
      for (var u, i = n[e], o = 0, a = i.length; a > o; o++)(u = i[o]) && t(u, o, e);
    return n
  }

  function T(n) {
    return Lo(n, Io), n
  }

  function q(n) {
    var t, e;
    return function(r, u, i) {
      var o, a = n[i].update,
        c = a.length;
      for (i != e && (e = i, t = 0), u >= t && (t = u + 1); !(o = a[t]) && ++t < c;);
      return o
    }
  }

  function z() {
    var n = this.__transition__;
    n && ++n.active
  }

  function C(n, t, e) {
    function r() {
      var t = this[o];
      t && (this.removeEventListener(n, t, t.$), delete this[o])
    }

    function u() {
      var u = l(t, Mo(arguments));
      r.call(this), this.addEventListener(n, this[o] = u, u.$ = e), u._ = t
    }

    function i() {
      var t, e = new RegExp("^__on([^.]+)" + mo.requote(n) + "$");
      for (var r in this)
        if (t = r.match(e)) {
          var u = this[r];
          this.removeEventListener(t[1], u, u.$), delete this[r]
        }
    }
    var o = "__on" + n,
      a = n.indexOf("."),
      l = D;
    a > 0 && (n = n.substring(0, a));
    var s = Zo.get(n);
    return s && (n = s, l = j), a ? t ? u : r : t ? c : i
  }

  function D(n, t) {
    return function(e) {
      var r = mo.event;
      mo.event = e, t[0] = this.__data__;
      try {
        n.apply(this, t)
      } finally {
        mo.event = r
      }
    }
  }

  function j(n, t) {
    var e = D(n, t);
    return function(n) {
      var t = this,
        r = n.relatedTarget;
      r && (r === t || 8 & r.compareDocumentPosition(t)) || e.call(t, n)
    }
  }

  function L() {
    var n = ".dragsuppress-" + ++Xo,
      t = "touchmove" + n,
      e = "selectstart" + n,
      r = "dragstart" + n,
      u = "click" + n,
      i = mo.select(_o).on(t, f).on(e, f).on(r, f),
      o = bo.style,
      a = o[Vo];
    return o[Vo] = "none",
    function(t) {
      function e() {
        i.on(u, null)
      }
      i.on(n, null), o[Vo] = a, t && (i.on(u, function() {
        f(), e()
      }, !0), setTimeout(e, 0))
    }
  }

  function H(n, t) {
    t.changedTouches && (t = t.changedTouches[0]);
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      if (0 > $o && (_o.scrollX || _o.scrollY)) {
        e = mo.select("body").append("svg").style({
          position: "absolute",
          top: 0,
          left: 0,
          margin: 0,
          padding: 0,
          border: "none"
        }, "important");
        var u = e[0][0].getScreenCTM();
        $o = !(u.f || u.e), e.remove()
      }
      return $o ? (r.x = t.pageX, r.y = t.pageY) : (r.x = t.clientX, r.y = t.clientY), r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y]
    }
    var i = n.getBoundingClientRect();
    return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop]
  }

  function F(n) {
    return n > 0 ? 1 : 0 > n ? -1 : 0
  }

  function P(n) {
    return n > 1 ? 0 : -1 > n ? Bo : Math.acos(n)
  }

  function O(n) {
    return n > 1 ? Bo / 2 : -1 > n ? -Bo / 2 : Math.asin(n)
  }

  function R(n) {
    return (Math.exp(n) - Math.exp(-n)) / 2
  }

  function Y(n) {
    return (Math.exp(n) + Math.exp(-n)) / 2
  }

  function I(n) {
    return R(n) / Y(n)
  }

  function U(n) {
    return (n = Math.sin(n / 2)) * n
  }

  function Z() {}

  function V(n, t, e) {
    return new X(n, t, e)
  }

  function X(n, t, e) {
    this.h = n, this.s = t, this.l = e
  }

  function $(n, t, e) {
    function r(n) {
      return n > 360 ? n -= 360 : 0 > n && (n += 360), 60 > n ? i + (o - i) * n / 60 : 180 > n ? o : 240 > n ? i + (o - i) * (240 - n) / 60 : i
    }

    function u(n) {
      return Math.round(255 * r(n))
    }
    var i, o;
    return n = isNaN(n) ? 0 : (n %= 360) < 0 ? n + 360 : n, t = isNaN(t) ? 0 : 0 > t ? 0 : t > 1 ? 1 : t, e = 0 > e ? 0 : e > 1 ? 1 : e, o = .5 >= e ? e * (1 + t) : e + t - e * t, i = 2 * e - o, ot(u(n + 120), u(n), u(n - 120))
  }

  function B(n, t, e) {
    return new W(n, t, e)
  }

  function W(n, t, e) {
    this.h = n, this.c = t, this.l = e
  }

  function J(n, t, e) {
    return isNaN(n) && (n = 0), isNaN(t) && (t = 0), G(e, Math.cos(n *= Go) * t, Math.sin(n) * t)
  }

  function G(n, t, e) {
    return new K(n, t, e)
  }

  function K(n, t, e) {
    this.l = n, this.a = t, this.b = e
  }

  function Q(n, t, e) {
    var r = (n + 16) / 116,
      u = r + t / 500,
      i = r - e / 200;
    return u = tt(u) * ca, r = tt(r) * la, i = tt(i) * sa, ot(rt(3.2404542 * u - 1.5371385 * r - .4985314 * i), rt(-.969266 * u + 1.8760108 * r + .041556 * i), rt(.0556434 * u - .2040259 * r + 1.0572252 * i))
  }

  function nt(n, t, e) {
    return n > 0 ? B(Math.atan2(e, t) * Ko, Math.sqrt(t * t + e * e), n) : B(0 / 0, 0 / 0, n)
  }

  function tt(n) {
    return n > .206893034 ? n * n * n : (n - 4 / 29) / 7.787037
  }

  function et(n) {
    return n > .008856 ? Math.pow(n, 1 / 3) : 7.787037 * n + 4 / 29
  }

  function rt(n) {
    return Math.round(255 * (.00304 >= n ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055))
  }

  function ut(n) {
    return ot(n >> 16, 255 & n >> 8, 255 & n)
  }

  function it(n) {
    return ut(n) + ""
  }

  function ot(n, t, e) {
    return new at(n, t, e)
  }

  function at(n, t, e) {
    this.r = n, this.g = t, this.b = e
  }

  function ct(n) {
    return 16 > n ? "0" + Math.max(0, n).toString(16) : Math.min(255, n).toString(16)
  }

  function lt(n, t, e) {
    var r, u, i, o = 0,
      a = 0,
      c = 0;
    if (r = /([a-z]+)\((.*)\)/i.exec(n)) switch (u = r[2].split(","), r[1]) {
      case "hsl":
        return e(parseFloat(u[0]), parseFloat(u[1]) / 100, parseFloat(u[2]) / 100);
      case "rgb":
        return t(gt(u[0]), gt(u[1]), gt(u[2]))
    }
    return (i = ga.get(n)) ? t(i.r, i.g, i.b) : (null != n && "#" === n.charAt(0) && (4 === n.length ? (o = n.charAt(1), o += o, a = n.charAt(2), a += a, c = n.charAt(3), c += c) : 7 === n.length && (o = n.substring(1, 3), a = n.substring(3, 5), c = n.substring(5, 7)), o = parseInt(o, 16), a = parseInt(a, 16), c = parseInt(c, 16)), t(o, a, c))
  }

  function st(n, t, e) {
    var r, u, i = Math.min(n /= 255, t /= 255, e /= 255),
      o = Math.max(n, t, e),
      a = o - i,
      c = (o + i) / 2;
    return a ? (u = .5 > c ? a / (o + i) : a / (2 - o - i), r = n == o ? (t - e) / a + (e > t ? 6 : 0) : t == o ? (e - n) / a + 2 : (n - t) / a + 4, r *= 60) : (r = 0 / 0, u = c > 0 && 1 > c ? 0 : r), V(r, u, c)
  }

  function ft(n, t, e) {
    n = ht(n), t = ht(t), e = ht(e);
    var r = et((.4124564 * n + .3575761 * t + .1804375 * e) / ca),
      u = et((.2126729 * n + .7151522 * t + .072175 * e) / la),
      i = et((.0193339 * n + .119192 * t + .9503041 * e) / sa);
    return G(116 * u - 16, 500 * (r - u), 200 * (u - i))
  }

  function ht(n) {
    return (n /= 255) <= .04045 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
  }

  function gt(n) {
    var t = parseFloat(n);
    return "%" === n.charAt(n.length - 1) ? Math.round(2.55 * t) : t
  }

  function pt(n) {
    return "function" == typeof n ? n : function() {
      return n
    }
  }

  function dt(n) {
    return n
  }

  function vt(n) {
    return function(t, e, r) {
      return 2 === arguments.length && "function" == typeof e && (r = e, e = null), mt(t, e, n, r)
    }
  }

  function mt(n, t, e, r) {
    function u() {
      var n, t = c.status;
      if (!t && c.responseText || t >= 200 && 300 > t || 304 === t) {
        try {
          n = e.call(i, c)
        } catch (r) {
          return o.error.call(i, r), void 0
        }
        o.load.call(i, n)
      } else o.error.call(i, c)
    }
    var i = {}, o = mo.dispatch("beforesend", "progress", "load", "error"),
      a = {}, c = new XMLHttpRequest,
      l = null;
    return !_o.XDomainRequest || "withCredentials" in c || !/^(http(s)?:)?\/\//.test(n) || (c = new XDomainRequest), "onload" in c ? c.onload = c.onerror = u : c.onreadystatechange = function() {
      c.readyState > 3 && u()
    }, c.onprogress = function(n) {
      var t = mo.event;
      mo.event = n;
      try {
        o.progress.call(i, c)
      } finally {
        mo.event = t
      }
    }, i.header = function(n, t) {
      return n = (n + "").toLowerCase(), arguments.length < 2 ? a[n] : (null == t ? delete a[n] : a[n] = t + "", i)
    }, i.mimeType = function(n) {
      return arguments.length ? (t = null == n ? null : n + "", i) : t
    }, i.responseType = function(n) {
      return arguments.length ? (l = n, i) : l
    }, i.response = function(n) {
      return e = n, i
    }, ["get", "post"].forEach(function(n) {
      i[n] = function() {
        return i.send.apply(i, [n].concat(Mo(arguments)))
      }
    }), i.send = function(e, r, u) {
      if (2 === arguments.length && "function" == typeof r && (u = r, r = null), c.open(e, n, !0), null == t || "accept" in a || (a.accept = t + ",*/*"), c.setRequestHeader)
        for (var s in a) c.setRequestHeader(s, a[s]);
      return null != t && c.overrideMimeType && c.overrideMimeType(t), null != l && (c.responseType = l), null != u && i.on("error", u).on("load", function(n) {
        u(null, n)
      }), o.beforesend.call(i, c), c.send(null == r ? null : r), i
    }, i.abort = function() {
      return c.abort(), i
    }, mo.rebind(i, o, "on"), null == r ? i : i.get(yt(r))
  }

  function yt(n) {
    return 1 === n.length ? function(t, e) {
      n(null == t ? e : null)
    } : n
  }

  function Mt() {
    var n = bt(),
      t = _t() - n;
    t > 24 ? (isFinite(t) && (clearTimeout(ma), ma = setTimeout(Mt, t)), va = 0) : (va = 1, Ma(Mt))
  }

  function xt(n, t, e) {
    var r = arguments.length;
    2 > r && (t = 0), 3 > r && (e = Date.now()), ya.callback = n, ya.time = e + t
  }

  function bt() {
    var n = Date.now();
    for (ya = pa; ya;) n >= ya.time && (ya.flush = ya.callback(n - ya.time)), ya = ya.next;
    return n
  }

  function _t() {
    for (var n, t = pa, e = 1 / 0; t;) t.flush ? t = n ? n.next = t.next : pa = t.next : (t.time < e && (e = t.time), t = (n = t).next);
    return da = n, e
  }

  function wt(n, t) {
    var e = Math.pow(10, 3 * Math.abs(8 - t));
    return {
      scale: t > 8 ? function(n) {
        return n / e
      } : function(n) {
        return n * e
      },
      symbol: n
    }
  }

  function St(n, t) {
    return t - (n ? Math.ceil(Math.log(n) / Math.LN10) : 1)
  }

  function Et(n) {
    return n + ""
  }

  function kt() {}

  function At(n, t, e) {
    var r = e.s = n + t,
      u = r - n,
      i = r - u;
    e.t = n - i + (t - u)
  }

  function Nt(n, t) {
    n && za.hasOwnProperty(n.type) && za[n.type](n, t)
  }

  function Tt(n, t, e) {
    var r, u = -1,
      i = n.length - e;
    for (t.lineStart(); ++u < i;) r = n[u], t.point(r[0], r[1], r[2]);
    t.lineEnd()
  }

  function qt(n, t) {
    var e = -1,
      r = n.length;
    for (t.polygonStart(); ++e < r;) Tt(n[e], t, 1);
    t.polygonEnd()
  }

  function zt() {
    function n(n, t) {
      n *= Go, t = t * Go / 2 + Bo / 4;
      var e = n - r,
        o = Math.cos(t),
        a = Math.sin(t),
        c = i * a,
        l = u * o + c * Math.cos(e),
        s = c * Math.sin(e);
      Da.add(Math.atan2(s, l)), r = n, u = o, i = a
    }
    var t, e, r, u, i;
    ja.point = function(o, a) {
      ja.point = n, r = (t = o) * Go, u = Math.cos(a = (e = a) * Go / 2 + Bo / 4), i = Math.sin(a)
    }, ja.lineEnd = function() {
      n(t, e)
    }
  }

  function Ct(n) {
    var t = n[0],
      e = n[1],
      r = Math.cos(e);
    return [r * Math.cos(t), r * Math.sin(t), Math.sin(e)]
  }

  function Dt(n, t) {
    return n[0] * t[0] + n[1] * t[1] + n[2] * t[2]
  }

  function jt(n, t) {
    return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]]
  }

  function Lt(n, t) {
    n[0] += t[0], n[1] += t[1], n[2] += t[2]
  }

  function Ht(n, t) {
    return [n[0] * t, n[1] * t, n[2] * t]
  }

  function Ft(n) {
    var t = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
    n[0] /= t, n[1] /= t, n[2] /= t
  }

  function Pt(n) {
    return [Math.atan2(n[1], n[0]), O(n[2])]
  }

  function Ot(n, t) {
    return Math.abs(n[0] - t[0]) < Wo && Math.abs(n[1] - t[1]) < Wo
  }

  function Rt(n, t) {
    n *= Go;
    var e = Math.cos(t *= Go);
    Yt(e * Math.cos(n), e * Math.sin(n), Math.sin(t))
  }

  function Yt(n, t, e) {
    ++La, Fa += (n - Fa) / La, Pa += (t - Pa) / La, Oa += (e - Oa) / La
  }

  function It() {
    function n(n, u) {
      n *= Go;
      var i = Math.cos(u *= Go),
        o = i * Math.cos(n),
        a = i * Math.sin(n),
        c = Math.sin(u),
        l = Math.atan2(Math.sqrt((l = e * c - r * a) * l + (l = r * o - t * c) * l + (l = t * a - e * o) * l), t * o + e * a + r * c);
      Ha += l, Ra += l * (t + (t = o)), Ya += l * (e + (e = a)), Ia += l * (r + (r = c)), Yt(t, e, r)
    }
    var t, e, r;
    Xa.point = function(u, i) {
      u *= Go;
      var o = Math.cos(i *= Go);
      t = o * Math.cos(u), e = o * Math.sin(u), r = Math.sin(i), Xa.point = n, Yt(t, e, r)
    }
  }

  function Ut() {
    Xa.point = Rt
  }

  function Zt() {
    function n(n, t) {
      n *= Go;
      var e = Math.cos(t *= Go),
        o = e * Math.cos(n),
        a = e * Math.sin(n),
        c = Math.sin(t),
        l = u * c - i * a,
        s = i * o - r * c,
        f = r * a - u * o,
        h = Math.sqrt(l * l + s * s + f * f),
        g = r * o + u * a + i * c,
        p = h && -P(g) / h,
        d = Math.atan2(h, g);
      Ua += p * l, Za += p * s, Va += p * f, Ha += d, Ra += d * (r + (r = o)), Ya += d * (u + (u = a)), Ia += d * (i + (i = c)), Yt(r, u, i)
    }
    var t, e, r, u, i;
    Xa.point = function(o, a) {
      t = o, e = a, Xa.point = n, o *= Go;
      var c = Math.cos(a *= Go);
      r = c * Math.cos(o), u = c * Math.sin(o), i = Math.sin(a), Yt(r, u, i)
    }, Xa.lineEnd = function() {
      n(t, e), Xa.lineEnd = Ut, Xa.point = Rt
    }
  }

  function Vt() {
    return !0
  }

  function Xt(n, t, e, r, u) {
    var i = [],
      o = [];
    if (n.forEach(function(n) {
      if (!((t = n.length - 1) <= 0)) {
        var t, e = n[0],
          r = n[t];
        if (Ot(e, r)) {
          u.lineStart();
          for (var a = 0; t > a; ++a) u.point((e = n[a])[0], e[1]);
          return u.lineEnd(), void 0
        }
        var c = {
          point: e,
          points: n,
          other: null,
          visited: !1,
          entry: !0,
          subject: !0
        }, l = {
            point: e,
            points: [e],
            other: c,
            visited: !1,
            entry: !1,
            subject: !1
          };
        c.other = l, i.push(c), o.push(l), c = {
          point: r,
          points: [r],
          other: null,
          visited: !1,
          entry: !1,
          subject: !0
        }, l = {
          point: r,
          points: [r],
          other: c,
          visited: !1,
          entry: !0,
          subject: !1
        }, c.other = l, i.push(c), o.push(l)
      }
    }), o.sort(t), $t(i), $t(o), i.length) {
      if (e)
        for (var a = 1, c = !e(o[0].point), l = o.length; l > a; ++a) o[a].entry = c = !c;
      for (var s, f, h, g = i[0];;) {
        for (s = g; s.visited;)
          if ((s = s.next) === g) return;
        f = s.points, u.lineStart();
        do {
          if (s.visited = s.other.visited = !0, s.entry) {
            if (s.subject)
              for (var a = 0; a < f.length; a++) u.point((h = f[a])[0], h[1]);
            else r(s.point, s.next.point, 1, u);
            s = s.next
          } else {
            if (s.subject) {
              f = s.prev.points;
              for (var a = f.length; --a >= 0;) u.point((h = f[a])[0], h[1])
            } else r(s.point, s.prev.point, -1, u);
            s = s.prev
          }
          s = s.other, f = s.points
        } while (!s.visited);
        u.lineEnd()
      }
    }
  }

  function $t(n) {
    if (t = n.length) {
      for (var t, e, r = 0, u = n[0]; ++r < t;) u.next = e = n[r], e.prev = u, u = e;
      u.next = e = n[0], e.prev = u
    }
  }

  function Bt(n, t, e, r) {
    return function(u) {
      function i(t, e) {
        n(t, e) && u.point(t, e)
      }

      function o(n, t) {
        d.point(n, t)
      }

      function a() {
        v.point = o, d.lineStart()
      }

      function c() {
        v.point = i, d.lineEnd()
      }

      function l(n, t) {
        y.point(n, t), p.push([n, t])
      }

      function s() {
        y.lineStart(), p = []
      }

      function f() {
        l(p[0][0], p[0][1]), y.lineEnd();
        var n, t = y.clean(),
          e = m.buffer(),
          r = e.length;
        if (p.pop(), g.push(p), p = null, r) {
          if (1 & t) {
            n = e[0];
            var i, r = n.length - 1,
              o = -1;
            for (u.lineStart(); ++o < r;) u.point((i = n[o])[0], i[1]);
            return u.lineEnd(), void 0
          }
          r > 1 && 2 & t && e.push(e.pop().concat(e.shift())), h.push(e.filter(Wt))
        }
      }
      var h, g, p, d = t(u),
        v = {
          point: i,
          lineStart: a,
          lineEnd: c,
          polygonStart: function() {
            v.point = l, v.lineStart = s, v.lineEnd = f, h = [], g = [], u.polygonStart()
          },
          polygonEnd: function() {
            v.point = i, v.lineStart = a, v.lineEnd = c, h = mo.merge(h), h.length ? Xt(h, Gt, null, e, u) : r(g) && (u.lineStart(), e(null, null, 1, u), u.lineEnd()), u.polygonEnd(), h = g = null
          },
          sphere: function() {
            u.polygonStart(), u.lineStart(), e(null, null, 1, u), u.lineEnd(), u.polygonEnd()
          }
        }, m = Jt(),
        y = t(m);
      return v
    }
  }

  function Wt(n) {
    return n.length > 1
  }

  function Jt() {
    var n, t = [];
    return {
      lineStart: function() {
        t.push(n = [])
      },
      point: function(t, e) {
        n.push([t, e])
      },
      lineEnd: c,
      buffer: function() {
        var e = t;
        return t = [], n = null, e
      },
      rejoin: function() {
        t.length > 1 && t.push(t.pop().concat(t.shift()))
      }
    }
  }

  function Gt(n, t) {
    return ((n = n.point)[0] < 0 ? n[1] - Bo / 2 - Wo : Bo / 2 - n[1]) - ((t = t.point)[0] < 0 ? t[1] - Bo / 2 - Wo : Bo / 2 - t[1])
  }

  function Kt(n, t) {
    var e = n[0],
      r = n[1],
      u = [Math.sin(e), -Math.cos(e), 0],
      i = 0,
      o = !1,
      a = !1,
      c = 0;
    Da.reset();
    for (var l = 0, s = t.length; s > l; ++l) {
      var f = t[l],
        h = f.length;
      if (h) {
        for (var g = f[0], p = g[0], d = g[1] / 2 + Bo / 4, v = Math.sin(d), m = Math.cos(d), y = 1;;) {
          y === h && (y = 0), n = f[y];
          var M = n[0],
            x = n[1] / 2 + Bo / 4,
            b = Math.sin(x),
            _ = Math.cos(x),
            w = M - p,
            S = Math.abs(w) > Bo,
            E = v * b;
          if (Da.add(Math.atan2(E * Math.sin(w), m * _ + E * Math.cos(w))), Math.abs(x) < Wo && (a = !0), i += S ? w + (w >= 0 ? 2 : -2) * Bo : w, S ^ p >= e ^ M >= e) {
            var k = jt(Ct(g), Ct(n));
            Ft(k);
            var A = jt(u, k);
            Ft(A);
            var N = (S ^ w >= 0 ? -1 : 1) * O(A[2]);
            r > N && (c += S ^ w >= 0 ? 1 : -1)
          }
          if (!y++) break;
          p = M, v = b, m = _, g = n
        }
        Math.abs(i) > Wo && (o = !0)
      }
    }
    return (!a && !o && 0 > Da || -Wo > i) ^ 1 & c
  }

  function Qt(n) {
    var t, e = 0 / 0,
      r = 0 / 0,
      u = 0 / 0;
    return {
      lineStart: function() {
        n.lineStart(), t = 1
      },
      point: function(i, o) {
        var a = i > 0 ? Bo : -Bo,
          c = Math.abs(i - e);
        Math.abs(c - Bo) < Wo ? (n.point(e, r = (r + o) / 2 > 0 ? Bo / 2 : -Bo / 2), n.point(u, r), n.lineEnd(), n.lineStart(), n.point(a, r), n.point(i, r), t = 0) : u !== a && c >= Bo && (Math.abs(e - u) < Wo && (e -= u * Wo), Math.abs(i - a) < Wo && (i -= a * Wo), r = ne(e, r, i, o), n.point(u, r), n.lineEnd(), n.lineStart(), n.point(a, r), t = 0), n.point(e = i, r = o), u = a
      },
      lineEnd: function() {
        n.lineEnd(), e = r = 0 / 0
      },
      clean: function() {
        return 2 - t
      }
    }
  }

  function ne(n, t, e, r) {
    var u, i, o = Math.sin(n - e);
    return Math.abs(o) > Wo ? Math.atan((Math.sin(t) * (i = Math.cos(r)) * Math.sin(e) - Math.sin(r) * (u = Math.cos(t)) * Math.sin(n)) / (u * i * o)) : (t + r) / 2
  }

  function te(n, t, e, r) {
    var u;
    if (null == n) u = e * Bo / 2, r.point(-Bo, u), r.point(0, u), r.point(Bo, u), r.point(Bo, 0), r.point(Bo, -u), r.point(0, -u), r.point(-Bo, -u), r.point(-Bo, 0), r.point(-Bo, u);
    else if (Math.abs(n[0] - t[0]) > Wo) {
      var i = (n[0] < t[0] ? 1 : -1) * Bo;
      u = e * i / 2, r.point(-i, u), r.point(0, u), r.point(i, u)
    } else r.point(t[0], t[1])
  }

  function ee(n) {
    return Kt(Ba, n)
  }

  function re(n) {
    function t(n, t) {
      return Math.cos(n) * Math.cos(t) > o
    }

    function e(n) {
      var e, i, o, c, s;
      return {
        lineStart: function() {
          c = o = !1, s = 1
        },
        point: function(f, h) {
          var g, p = [f, h],
            d = t(f, h),
            v = a ? d ? 0 : u(f, h) : d ? u(f + (0 > f ? Bo : -Bo), h) : 0;
          if (!e && (c = o = d) && n.lineStart(), d !== o && (g = r(e, p), (Ot(e, g) || Ot(p, g)) && (p[0] += Wo, p[1] += Wo, d = t(p[0], p[1]))), d !== o) s = 0, d ? (n.lineStart(), g = r(p, e), n.point(g[0], g[1])) : (g = r(e, p), n.point(g[0], g[1]), n.lineEnd()), e = g;
          else if (l && e && a ^ d) {
            var m;
            v & i || !(m = r(p, e, !0)) || (s = 0, a ? (n.lineStart(), n.point(m[0][0], m[0][1]), n.point(m[1][0], m[1][1]), n.lineEnd()) : (n.point(m[1][0], m[1][1]), n.lineEnd(), n.lineStart(), n.point(m[0][0], m[0][1])))
          }!d || e && Ot(e, p) || n.point(p[0], p[1]), e = p, o = d, i = v
        },
        lineEnd: function() {
          o && n.lineEnd(), e = null
        },
        clean: function() {
          return s | (c && o) << 1
        }
      }
    }

    function r(n, t, e) {
      var r = Ct(n),
        u = Ct(t),
        i = [1, 0, 0],
        a = jt(r, u),
        c = Dt(a, a),
        l = a[0],
        s = c - l * l;
      if (!s) return !e && n;
      var f = o * c / s,
        h = -o * l / s,
        g = jt(i, a),
        p = Ht(i, f),
        d = Ht(a, h);
      Lt(p, d);
      var v = g,
        m = Dt(p, v),
        y = Dt(v, v),
        M = m * m - y * (Dt(p, p) - 1);
      if (!(0 > M)) {
        var x = Math.sqrt(M),
          b = Ht(v, (-m - x) / y);
        if (Lt(b, p), b = Pt(b), !e) return b;
        var _, w = n[0],
          S = t[0],
          E = n[1],
          k = t[1];
        w > S && (_ = w, w = S, S = _);
        var A = S - w,
          N = Math.abs(A - Bo) < Wo,
          T = N || Wo > A;
        if (!N && E > k && (_ = E, E = k, k = _), T ? N ? E + k > 0 ^ b[1] < (Math.abs(b[0] - w) < Wo ? E : k) : E <= b[1] && b[1] <= k : A > Bo ^ (w <= b[0] && b[0] <= S)) {
          var q = Ht(v, (-m + x) / y);
          return Lt(q, p), [b, Pt(q)]
        }
      }
    }

    function u(t, e) {
      var r = a ? n : Bo - n,
        u = 0;
      return -r > t ? u |= 1 : t > r && (u |= 2), -r > e ? u |= 4 : e > r && (u |= 8), u
    }

    function i(n) {
      return Kt(c, n)
    }
    var o = Math.cos(n),
      a = o > 0,
      c = [n, 0],
      l = Math.abs(o) > Wo,
      s = Te(n, 6 * Go);
    return Bt(t, e, s, i)
  }

  function ue(n, t, e, r) {
    function u(r, u) {
      return Math.abs(r[0] - n) < Wo ? u > 0 ? 0 : 3 : Math.abs(r[0] - e) < Wo ? u > 0 ? 2 : 1 : Math.abs(r[1] - t) < Wo ? u > 0 ? 1 : 0 : u > 0 ? 3 : 2
    }

    function i(n, t) {
      return o(n.point, t.point)
    }

    function o(n, t) {
      var e = u(n, 1),
        r = u(t, 1);
      return e !== r ? e - r : 0 === e ? t[1] - n[1] : 1 === e ? n[0] - t[0] : 2 === e ? n[1] - t[1] : t[0] - n[0]
    }

    function a(u, i) {
      var o = i[0] - u[0],
        a = i[1] - u[1],
        c = [0, 1];
      return Math.abs(o) < Wo && Math.abs(a) < Wo ? n <= u[0] && u[0] <= e && t <= u[1] && u[1] <= r : ie(n - u[0], o, c) && ie(u[0] - e, -o, c) && ie(t - u[1], a, c) && ie(u[1] - r, -a, c) ? (c[1] < 1 && (i[0] = u[0] + c[1] * o, i[1] = u[1] + c[1] * a), c[0] > 0 && (u[0] += c[0] * o, u[1] += c[0] * a), !0) : !1
    }
    return function(c) {
      function l(i) {
        var o = u(i, -1),
          a = s([0 === o || 3 === o ? n : e, o > 1 ? r : t]);
        return a
      }

      function s(n) {
        for (var t = 0, e = M.length, r = n[1], u = 0; e > u; ++u)
          for (var i, o = 1, a = M[u], c = a.length, l = a[0]; c > o; ++o) i = a[o], l[1] <= r ? i[1] > r && f(l, i, n) > 0 && ++t : i[1] <= r && f(l, i, n) < 0 && --t, l = i;
        return 0 !== t
      }

      function f(n, t, e) {
        return (t[0] - n[0]) * (e[1] - n[1]) - (e[0] - n[0]) * (t[1] - n[1])
      }

      function h(i, a, c, l) {
        var s = 0,
          f = 0;
        if (null == i || (s = u(i, c)) !== (f = u(a, c)) || o(i, a) < 0 ^ c > 0) {
          do l.point(0 === s || 3 === s ? n : e, s > 1 ? r : t); while ((s = (s + c + 4) % 4) !== f)
        } else l.point(a[0], a[1])
      }

      function g(u, i) {
        return u >= n && e >= u && i >= t && r >= i
      }

      function p(n, t) {
        g(n, t) && c.point(n, t)
      }

      function d() {
        q.point = m, M && M.push(x = []), A = !0, k = !1, S = E = 0 / 0
      }

      function v() {
        y && (m(b, _), w && k && T.rejoin(), y.push(T.buffer())), q.point = p, k && c.lineEnd()
      }

      function m(n, t) {
        n = Math.max(-Wa, Math.min(Wa, n)), t = Math.max(-Wa, Math.min(Wa, t));
        var e = g(n, t);
        if (M && x.push([n, t]), A) b = n, _ = t, w = e, A = !1, e && (c.lineStart(), c.point(n, t));
        else if (e && k) c.point(n, t);
        else {
          var r = [S, E],
            u = [n, t];
          a(r, u) ? (k || (c.lineStart(), c.point(r[0], r[1])), c.point(u[0], u[1]), e || c.lineEnd()) : e && (c.lineStart(), c.point(n, t))
        }
        S = n, E = t, k = e
      }
      var y, M, x, b, _, w, S, E, k, A, N = c,
        T = Jt(),
        q = {
          point: p,
          lineStart: d,
          lineEnd: v,
          polygonStart: function() {
            c = T, y = [], M = []
          },
          polygonEnd: function() {
            c = N, (y = mo.merge(y)).length ? (c.polygonStart(), Xt(y, i, l, h, c), c.polygonEnd()) : s([n, t]) && (c.polygonStart(), c.lineStart(), h(null, null, 1, c), c.lineEnd(), c.polygonEnd()), y = M = x = null
          }
        };
      return q
    }
  }

  function ie(n, t, e) {
    if (Math.abs(t) < Wo) return 0 >= n;
    var r = n / t;
    if (t > 0) {
      if (r > e[1]) return !1;
      r > e[0] && (e[0] = r)
    } else {
      if (r < e[0]) return !1;
      r < e[1] && (e[1] = r)
    }
    return !0
  }

  function oe(n, t) {
    function e(e, r) {
      return e = n(e, r), t(e[0], e[1])
    }
    return n.invert && t.invert && (e.invert = function(e, r) {
      return e = t.invert(e, r), e && n.invert(e[0], e[1])
    }), e
  }

  function ae(n) {
    var t = 0,
      e = Bo / 3,
      r = _e(n),
      u = r(t, e);
    return u.parallels = function(n) {
      return arguments.length ? r(t = n[0] * Bo / 180, e = n[1] * Bo / 180) : [180 * (t / Bo), 180 * (e / Bo)]
    }, u
  }

  function ce(n, t) {
    function e(n, t) {
      var e = Math.sqrt(i - 2 * u * Math.sin(t)) / u;
      return [e * Math.sin(n *= u), o - e * Math.cos(n)]
    }
    var r = Math.sin(n),
      u = (r + Math.sin(t)) / 2,
      i = 1 + r * (2 * u - r),
      o = Math.sqrt(i) / u;
    return e.invert = function(n, t) {
      var e = o - t;
      return [Math.atan2(n, e) / u, O((i - (n * n + e * e) * u * u) / (2 * u))]
    }, e
  }

  function le() {
    function n(n, t) {
      Ga += u * n - r * t, r = n, u = t
    }
    var t, e, r, u;
    ec.point = function(i, o) {
      ec.point = n, t = r = i, e = u = o
    }, ec.lineEnd = function() {
      n(t, e)
    }
  }

  function se(n, t) {
    Ka > n && (Ka = n), n > nc && (nc = n), Qa > t && (Qa = t), t > tc && (tc = t)
  }

  function fe() {
    function n(n, t) {
      o.push("M", n, ",", t, i)
    }

    function t(n, t) {
      o.push("M", n, ",", t), a.point = e
    }

    function e(n, t) {
      o.push("L", n, ",", t)
    }

    function r() {
      a.point = n
    }

    function u() {
      o.push("Z")
    }
    var i = he(4.5),
      o = [],
      a = {
        point: n,
        lineStart: function() {
          a.point = t
        },
        lineEnd: r,
        polygonStart: function() {
          a.lineEnd = u
        },
        polygonEnd: function() {
          a.lineEnd = r, a.point = n
        },
        pointRadius: function(n) {
          return i = he(n), a
        },
        result: function() {
          if (o.length) {
            var n = o.join("");
            return o = [], n
          }
        }
      };
    return a
  }

  function he(n) {
    return "m0," + n + "a" + n + "," + n + " 0 1,1 0," + -2 * n + "a" + n + "," + n + " 0 1,1 0," + 2 * n + "z"
  }

  function ge(n, t) {
    Fa += n, Pa += t, ++Oa
  }

  function pe() {
    function n(n, r) {
      var u = n - t,
        i = r - e,
        o = Math.sqrt(u * u + i * i);
      Ra += o * (t + n) / 2, Ya += o * (e + r) / 2, Ia += o, ge(t = n, e = r)
    }
    var t, e;
    uc.point = function(r, u) {
      uc.point = n, ge(t = r, e = u)
    }
  }

  function de() {
    uc.point = ge
  }

  function ve() {
    function n(n, t) {
      var e = n - r,
        i = t - u,
        o = Math.sqrt(e * e + i * i);
      Ra += o * (r + n) / 2, Ya += o * (u + t) / 2, Ia += o, o = u * n - r * t, Ua += o * (r + n), Za += o * (u + t), Va += 3 * o, ge(r = n, u = t)
    }
    var t, e, r, u;
    uc.point = function(i, o) {
      uc.point = n, ge(t = r = i, e = u = o)
    }, uc.lineEnd = function() {
      n(t, e)
    }
  }

  function me(n) {
    function t(t, e) {
      n.moveTo(t, e), n.arc(t, e, o, 0, 2 * Bo)
    }

    function e(t, e) {
      n.moveTo(t, e), a.point = r
    }

    function r(t, e) {
      n.lineTo(t, e)
    }

    function u() {
      a.point = t
    }

    function i() {
      n.closePath()
    }
    var o = 4.5,
      a = {
        point: t,
        lineStart: function() {
          a.point = e
        },
        lineEnd: u,
        polygonStart: function() {
          a.lineEnd = i
        },
        polygonEnd: function() {
          a.lineEnd = u, a.point = t
        },
        pointRadius: function(n) {
          return o = n, a
        },
        result: c
      };
    return a
  }

  function ye(n) {
    function t(t) {
      function r(e, r) {
        e = n(e, r), t.point(e[0], e[1])
      }

      function u() {
        M = 0 / 0, S.point = o, t.lineStart()
      }

      function o(r, u) {
        var o = Ct([r, u]),
          a = n(r, u);
        e(M, x, y, b, _, w, M = a[0], x = a[1], y = r, b = o[0], _ = o[1], w = o[2], i, t), t.point(M, x)
      }

      function a() {
        S.point = r, t.lineEnd()
      }

      function c() {
        u(), S.point = l, S.lineEnd = s
      }

      function l(n, t) {
        o(f = n, h = t), g = M, p = x, d = b, v = _, m = w, S.point = o
      }

      function s() {
        e(M, x, y, b, _, w, g, p, f, d, v, m, i, t), S.lineEnd = a, a()
      }
      var f, h, g, p, d, v, m, y, M, x, b, _, w, S = {
          point: r,
          lineStart: u,
          lineEnd: a,
          polygonStart: function() {
            t.polygonStart(), S.lineStart = c
          },
          polygonEnd: function() {
            t.polygonEnd(), S.lineStart = u
          }
        };
      return S
    }

    function e(t, i, o, a, c, l, s, f, h, g, p, d, v, m) {
      var y = s - t,
        M = f - i,
        x = y * y + M * M;
      if (x > 4 * r && v--) {
        var b = a + g,
          _ = c + p,
          w = l + d,
          S = Math.sqrt(b * b + _ * _ + w * w),
          E = Math.asin(w /= S),
          k = Math.abs(Math.abs(w) - 1) < Wo ? (o + h) / 2 : Math.atan2(_, b),
          A = n(k, E),
          N = A[0],
          T = A[1],
          q = N - t,
          z = T - i,
          C = M * q - y * z;
        (C * C / x > r || Math.abs((y * q + M * z) / x - .5) > .3 || u > a * g + c * p + l * d) && (e(t, i, o, a, c, l, N, T, k, b /= S, _ /= S, w, v, m), m.point(N, T), e(N, T, k, b, _, w, s, f, h, g, p, d, v, m))
      }
    }
    var r = .5,
      u = Math.cos(30 * Go),
      i = 16;
    return t.precision = function(n) {
      return arguments.length ? (i = (r = n * n) > 0 && 16, t) : Math.sqrt(r)
    }, t
  }

  function Me(n) {
    this.stream = n
  }

  function xe(n) {
    var t = ye(function(t, e) {
      return n([t * Ko, e * Ko])
    });
    return function(n) {
      var e = new Me(n = t(n));
      return e.point = function(t, e) {
        n.point(t * Go, e * Go)
      }, e
    }
  }

  function be(n) {
    return _e(function() {
      return n
    })()
  }

  function _e(n) {
    function t(n) {
      return n = a(n[0] * Go, n[1] * Go), [n[0] * h + c, l - n[1] * h]
    }

    function e(n) {
      return n = a.invert((n[0] - c) / h, (l - n[1]) / h), n && [n[0] * Ko, n[1] * Ko]
    }

    function r() {
      a = oe(o = Ee(m, y, M), i);
      var n = i(d, v);
      return c = g - n[0] * h, l = p + n[1] * h, u()
    }

    function u() {
      return s && (s.valid = !1, s = null), t
    }
    var i, o, a, c, l, s, f = ye(function(n, t) {
        return n = i(n, t), [n[0] * h + c, l - n[1] * h]
      }),
      h = 150,
      g = 480,
      p = 250,
      d = 0,
      v = 0,
      m = 0,
      y = 0,
      M = 0,
      x = $a,
      b = dt,
      _ = null,
      w = null;
    return t.stream = function(n) {
      return s && (s.valid = !1), s = we(o, x(f(b(n)))), s.valid = !0, s
    }, t.clipAngle = function(n) {
      return arguments.length ? (x = null == n ? (_ = n, $a) : re((_ = +n) * Go), u()) : _
    }, t.clipExtent = function(n) {
      return arguments.length ? (w = n, b = n ? ue(n[0][0], n[0][1], n[1][0], n[1][1]) : dt, u()) : w
    }, t.scale = function(n) {
      return arguments.length ? (h = +n, r()) : h
    }, t.translate = function(n) {
      return arguments.length ? (g = +n[0], p = +n[1], r()) : [g, p]
    }, t.center = function(n) {
      return arguments.length ? (d = n[0] % 360 * Go, v = n[1] % 360 * Go, r()) : [d * Ko, v * Ko]
    }, t.rotate = function(n) {
      return arguments.length ? (m = n[0] % 360 * Go, y = n[1] % 360 * Go, M = n.length > 2 ? n[2] % 360 * Go : 0, r()) : [m * Ko, y * Ko, M * Ko]
    }, mo.rebind(t, f, "precision"),
    function() {
      return i = n.apply(this, arguments), t.invert = i.invert && e, r()
    }
  }

  function we(n, t) {
    var e = new Me(t);
    return e.point = function(e, r) {
      r = n(e * Go, r * Go), e = r[0], t.point(e > Bo ? e - 2 * Bo : -Bo > e ? e + 2 * Bo : e, r[1])
    }, e
  }

  function Se(n, t) {
    return [n, t]
  }

  function Ee(n, t, e) {
    return n ? t || e ? oe(Ae(n), Ne(t, e)) : Ae(n) : t || e ? Ne(t, e) : Se
  }

  function ke(n) {
    return function(t, e) {
      return t += n, [t > Bo ? t - 2 * Bo : -Bo > t ? t + 2 * Bo : t, e]
    }
  }

  function Ae(n) {
    var t = ke(n);
    return t.invert = ke(-n), t
  }

  function Ne(n, t) {
    function e(n, t) {
      var e = Math.cos(t),
        a = Math.cos(n) * e,
        c = Math.sin(n) * e,
        l = Math.sin(t),
        s = l * r + a * u;
      return [Math.atan2(c * i - s * o, a * r - l * u), O(s * i + c * o)]
    }
    var r = Math.cos(n),
      u = Math.sin(n),
      i = Math.cos(t),
      o = Math.sin(t);
    return e.invert = function(n, t) {
      var e = Math.cos(t),
        a = Math.cos(n) * e,
        c = Math.sin(n) * e,
        l = Math.sin(t),
        s = l * i - c * o;
      return [Math.atan2(c * i + l * o, a * r + s * u), O(s * r - a * u)]
    }, e
  }

  function Te(n, t) {
    var e = Math.cos(n),
      r = Math.sin(n);
    return function(u, i, o, a) {
      var c = o * t;
      null != u ? (u = qe(e, u), i = qe(e, i), (o > 0 ? i > u : u > i) && (u += 2 * o * Bo)) : (u = n + 2 * o * Bo, i = n - .5 * c);
      for (var l, s = u; o > 0 ? s > i : i > s; s -= c) a.point((l = Pt([e, -r * Math.cos(s), -r * Math.sin(s)]))[0], l[1])
    }
  }

  function qe(n, t) {
    var e = Ct(t);
    e[0] -= n, Ft(e);
    var r = P(-e[1]);
    return ((-e[2] < 0 ? -r : r) + 2 * Math.PI - Wo) % (2 * Math.PI)
  }

  function ze(n, t, e) {
    var r = mo.range(n, t - Wo, e).concat(t);
    return function(n) {
      return r.map(function(t) {
        return [n, t]
      })
    }
  }

  function Ce(n, t, e) {
    var r = mo.range(n, t - Wo, e).concat(t);
    return function(n) {
      return r.map(function(t) {
        return [t, n]
      })
    }
  }

  function De(n) {
    return n.source
  }

  function je(n) {
    return n.target
  }

  function Le(n, t, e, r) {
    var u = Math.cos(t),
      i = Math.sin(t),
      o = Math.cos(r),
      a = Math.sin(r),
      c = u * Math.cos(n),
      l = u * Math.sin(n),
      s = o * Math.cos(e),
      f = o * Math.sin(e),
      h = 2 * Math.asin(Math.sqrt(U(r - t) + u * o * U(e - n))),
      g = 1 / Math.sin(h),
      p = h ? function(n) {
        var t = Math.sin(n *= h) * g,
          e = Math.sin(h - n) * g,
          r = e * c + t * s,
          u = e * l + t * f,
          o = e * i + t * a;
        return [Math.atan2(u, r) * Ko, Math.atan2(o, Math.sqrt(r * r + u * u)) * Ko]
      } : function() {
        return [n * Ko, t * Ko]
      };
    return p.distance = h, p
  }

  function He() {
    function n(n, u) {
      var i = Math.sin(u *= Go),
        o = Math.cos(u),
        a = Math.abs((n *= Go) - t),
        c = Math.cos(a);
      ic += Math.atan2(Math.sqrt((a = o * Math.sin(a)) * a + (a = r * i - e * o * c) * a), e * i + r * o * c), t = n, e = i, r = o
    }
    var t, e, r;
    oc.point = function(u, i) {
      t = u * Go, e = Math.sin(i *= Go), r = Math.cos(i), oc.point = n
    }, oc.lineEnd = function() {
      oc.point = oc.lineEnd = c
    }
  }

  function Fe(n, t) {
    function e(t, e) {
      var r = Math.cos(t),
        u = Math.cos(e),
        i = n(r * u);
      return [i * u * Math.sin(t), i * Math.sin(e)]
    }
    return e.invert = function(n, e) {
      var r = Math.sqrt(n * n + e * e),
        u = t(r),
        i = Math.sin(u),
        o = Math.cos(u);
      return [Math.atan2(n * i, r * o), Math.asin(r && e * i / r)]
    }, e
  }

  function Pe(n, t) {
    function e(n, t) {
      var e = Math.abs(Math.abs(t) - Bo / 2) < Wo ? 0 : o / Math.pow(u(t), i);
      return [e * Math.sin(i * n), o - e * Math.cos(i * n)]
    }
    var r = Math.cos(n),
      u = function(n) {
        return Math.tan(Bo / 4 + n / 2)
      }, i = n === t ? Math.sin(n) : Math.log(r / Math.cos(t)) / Math.log(u(t) / u(n)),
      o = r * Math.pow(u(n), i) / i;
    return i ? (e.invert = function(n, t) {
      var e = o - t,
        r = F(i) * Math.sqrt(n * n + e * e);
      return [Math.atan2(n, e) / i, 2 * Math.atan(Math.pow(o / r, 1 / i)) - Bo / 2]
    }, e) : Re
  }

  function Oe(n, t) {
    function e(n, t) {
      var e = i - t;
      return [e * Math.sin(u * n), i - e * Math.cos(u * n)]
    }
    var r = Math.cos(n),
      u = n === t ? Math.sin(n) : (r - Math.cos(t)) / (t - n),
      i = r / u + n;
    return Math.abs(u) < Wo ? Se : (e.invert = function(n, t) {
      var e = i - t;
      return [Math.atan2(n, e) / u, i - F(u) * Math.sqrt(n * n + e * e)]
    }, e)
  }

  function Re(n, t) {
    return [n, Math.log(Math.tan(Bo / 4 + t / 2))]
  }

  function Ye(n) {
    var t, e = be(n),
      r = e.scale,
      u = e.translate,
      i = e.clipExtent;
    return e.scale = function() {
      var n = r.apply(e, arguments);
      return n === e ? t ? e.clipExtent(null) : e : n
    }, e.translate = function() {
      var n = u.apply(e, arguments);
      return n === e ? t ? e.clipExtent(null) : e : n
    }, e.clipExtent = function(n) {
      var o = i.apply(e, arguments);
      if (o === e) {
        if (t = null == n) {
          var a = Bo * r(),
            c = u();
          i([
            [c[0] - a, c[1] - a],
            [c[0] + a, c[1] + a]
          ])
        }
      } else t && (o = null);
      return o
    }, e.clipExtent(null)
  }

  function Ie(n, t) {
    var e = Math.cos(t) * Math.sin(n);
    return [Math.log((1 + e) / (1 - e)) / 2, Math.atan2(Math.tan(t), Math.cos(n))]
  }

  function Ue(n) {
    function t(t) {
      function o() {
        l.push("M", i(n(s), a))
      }
      for (var c, l = [], s = [], f = -1, h = t.length, g = pt(e), p = pt(r); ++f < h;) u.call(this, c = t[f], f) ? s.push([+g.call(this, c, f), +p.call(this, c, f)]) : s.length && (o(), s = []);
      return s.length && o(), l.length ? l.join("") : null
    }
    var e = Ze,
      r = Ve,
      u = Vt,
      i = Xe,
      o = i.key,
      a = .7;
    return t.x = function(n) {
      return arguments.length ? (e = n, t) : e
    }, t.y = function(n) {
      return arguments.length ? (r = n, t) : r
    }, t.defined = function(n) {
      return arguments.length ? (u = n, t) : u
    }, t.interpolate = function(n) {
      return arguments.length ? (o = "function" == typeof n ? i = n : (i = hc.get(n) || Xe).key, t) : o
    }, t.tension = function(n) {
      return arguments.length ? (a = n, t) : a
    }, t
  }

  function Ze(n) {
    return n[0]
  }

  function Ve(n) {
    return n[1]
  }

  function Xe(n) {
    return n.join("L")
  }

  function $e(n) {
    return Xe(n) + "Z"
  }

  function Be(n) {
    for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e;) u.push("H", (r[0] + (r = n[t])[0]) / 2, "V", r[1]);
    return e > 1 && u.push("H", r[0]), u.join("")
  }

  function We(n) {
    for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e;) u.push("V", (r = n[t])[1], "H", r[0]);
    return u.join("")
  }

  function Je(n) {
    for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e;) u.push("H", (r = n[t])[0], "V", r[1]);
    return u.join("")
  }

  function Ge(n, t) {
    return n.length < 4 ? Xe(n) : n[1] + nr(n.slice(1, n.length - 1), tr(n, t))
  }

  function Ke(n, t) {
    return n.length < 3 ? Xe(n) : n[0] + nr((n.push(n[0]), n), tr([n[n.length - 2]].concat(n, [n[1]]), t))
  }

  function Qe(n, t) {
    return n.length < 3 ? Xe(n) : n[0] + nr(n, tr(n, t))
  }

  function nr(n, t) {
    if (t.length < 1 || n.length != t.length && n.length != t.length + 2) return Xe(n);
    var e = n.length != t.length,
      r = "",
      u = n[0],
      i = n[1],
      o = t[0],
      a = o,
      c = 1;
    if (e && (r += "Q" + (i[0] - 2 * o[0] / 3) + "," + (i[1] - 2 * o[1] / 3) + "," + i[0] + "," + i[1], u = n[1], c = 2), t.length > 1) {
      a = t[1], i = n[c], c++, r += "C" + (u[0] + o[0]) + "," + (u[1] + o[1]) + "," + (i[0] - a[0]) + "," + (i[1] - a[1]) + "," + i[0] + "," + i[1];
      for (var l = 2; l < t.length; l++, c++) i = n[c], a = t[l], r += "S" + (i[0] - a[0]) + "," + (i[1] - a[1]) + "," + i[0] + "," + i[1]
    }
    if (e) {
      var s = n[c];
      r += "Q" + (i[0] + 2 * a[0] / 3) + "," + (i[1] + 2 * a[1] / 3) + "," + s[0] + "," + s[1]
    }
    return r
  }

  function tr(n, t) {
    for (var e, r = [], u = (1 - t) / 2, i = n[0], o = n[1], a = 1, c = n.length; ++a < c;) e = i, i = o, o = n[a], r.push([u * (o[0] - e[0]), u * (o[1] - e[1])]);
    return r
  }

  function er(n) {
    if (n.length < 3) return Xe(n);
    var t = 1,
      e = n.length,
      r = n[0],
      u = r[0],
      i = r[1],
      o = [u, u, u, (r = n[1])[0]],
      a = [i, i, i, r[1]],
      c = [u, ",", i, "L", or(dc, o), ",", or(dc, a)];
    for (n.push(n[e - 1]); ++t <= e;) r = n[t], o.shift(), o.push(r[0]), a.shift(), a.push(r[1]), ar(c, o, a);
    return n.pop(), c.push("L", r), c.join("")
  }

  function rr(n) {
    if (n.length < 4) return Xe(n);
    for (var t, e = [], r = -1, u = n.length, i = [0], o = [0]; ++r < 3;) t = n[r], i.push(t[0]), o.push(t[1]);
    for (e.push(or(dc, i) + "," + or(dc, o)), --r; ++r < u;) t = n[r], i.shift(), i.push(t[0]), o.shift(), o.push(t[1]), ar(e, i, o);
    return e.join("")
  }

  function ur(n) {
    for (var t, e, r = -1, u = n.length, i = u + 4, o = [], a = []; ++r < 4;) e = n[r % u], o.push(e[0]), a.push(e[1]);
    for (t = [or(dc, o), ",", or(dc, a)], --r; ++r < i;) e = n[r % u], o.shift(), o.push(e[0]), a.shift(), a.push(e[1]), ar(t, o, a);
    return t.join("")
  }

  function ir(n, t) {
    var e = n.length - 1;
    if (e)
      for (var r, u, i = n[0][0], o = n[0][1], a = n[e][0] - i, c = n[e][1] - o, l = -1; ++l <= e;) r = n[l], u = l / e, r[0] = t * r[0] + (1 - t) * (i + u * a), r[1] = t * r[1] + (1 - t) * (o + u * c);
    return er(n)
  }

  function or(n, t) {
    return n[0] * t[0] + n[1] * t[1] + n[2] * t[2] + n[3] * t[3]
  }

  function ar(n, t, e) {
    n.push("C", or(gc, t), ",", or(gc, e), ",", or(pc, t), ",", or(pc, e), ",", or(dc, t), ",", or(dc, e))
  }

  function cr(n, t) {
    return (t[1] - n[1]) / (t[0] - n[0])
  }

  function lr(n) {
    for (var t = 0, e = n.length - 1, r = [], u = n[0], i = n[1], o = r[0] = cr(u, i); ++t < e;) r[t] = (o + (o = cr(u = i, i = n[t + 1]))) / 2;
    return r[t] = o, r
  }

  function sr(n) {
    for (var t, e, r, u, i = [], o = lr(n), a = -1, c = n.length - 1; ++a < c;) t = cr(n[a], n[a + 1]), Math.abs(t) < 1e-6 ? o[a] = o[a + 1] = 0 : (e = o[a] / t, r = o[a + 1] / t, u = e * e + r * r, u > 9 && (u = 3 * t / Math.sqrt(u), o[a] = u * e, o[a + 1] = u * r));
    for (a = -1; ++a <= c;) u = (n[Math.min(c, a + 1)][0] - n[Math.max(0, a - 1)][0]) / (6 * (1 + o[a] * o[a])), i.push([u || 0, o[a] * u || 0]);
    return i
  }

  function fr(n) {
    return n.length < 3 ? Xe(n) : n[0] + nr(n, sr(n))
  }

  function hr(n, t, e, r) {
    var u, i, o, a, c, l, s;
    return u = r[n], i = u[0], o = u[1], u = r[t], a = u[0], c = u[1], u = r[e], l = u[0], s = u[1], (s - o) * (a - i) - (c - o) * (l - i) > 0
  }

  function gr(n, t, e) {
    return (e[0] - t[0]) * (n[1] - t[1]) < (e[1] - t[1]) * (n[0] - t[0])
  }

  function pr(n, t, e, r) {
    var u = n[0],
      i = e[0],
      o = t[0] - u,
      a = r[0] - i,
      c = n[1],
      l = e[1],
      s = t[1] - c,
      f = r[1] - l,
      h = (a * (c - l) - f * (u - i)) / (f * o - a * s);
    return [u + h * o, c + h * s]
  }

  function dr(n) {
    var t = n[0],
      e = n[n.length - 1];
    return !(t[0] - e[0] || t[1] - e[1])
  }

  function vr(n, t) {
    var e = {
      list: n.map(function(n, t) {
        return {
          index: t,
          x: n[0],
          y: n[1]
        }
      }).sort(function(n, t) {
        return n.y < t.y ? -1 : n.y > t.y ? 1 : n.x < t.x ? -1 : n.x > t.x ? 1 : 0
      }),
      bottomSite: null
    }, r = {
        list: [],
        leftEnd: null,
        rightEnd: null,
        init: function() {
          r.leftEnd = r.createHalfEdge(null, "l"), r.rightEnd = r.createHalfEdge(null, "l"), r.leftEnd.r = r.rightEnd, r.rightEnd.l = r.leftEnd, r.list.unshift(r.leftEnd, r.rightEnd)
        },
        createHalfEdge: function(n, t) {
          return {
            edge: n,
            side: t,
            vertex: null,
            l: null,
            r: null
          }
        },
        insert: function(n, t) {
          t.l = n, t.r = n.r, n.r.l = t, n.r = t
        },
        leftBound: function(n) {
          var t = r.leftEnd;
          do t = t.r; while (t != r.rightEnd && u.rightOf(t, n));
          return t = t.l
        },
        del: function(n) {
          n.l.r = n.r, n.r.l = n.l, n.edge = null
        },
        right: function(n) {
          return n.r
        },
        left: function(n) {
          return n.l
        },
        leftRegion: function(n) {
          return null == n.edge ? e.bottomSite : n.edge.region[n.side]
        },
        rightRegion: function(n) {
          return null == n.edge ? e.bottomSite : n.edge.region[mc[n.side]]
        }
      }, u = {
        bisect: function(n, t) {
          var e = {
            region: {
              l: n,
              r: t
            },
            ep: {
              l: null,
              r: null
            }
          }, r = t.x - n.x,
            u = t.y - n.y,
            i = r > 0 ? r : -r,
            o = u > 0 ? u : -u;
          return e.c = n.x * r + n.y * u + .5 * (r * r + u * u), i > o ? (e.a = 1, e.b = u / r, e.c /= r) : (e.b = 1, e.a = r / u, e.c /= u), e
        },
        intersect: function(n, t) {
          var e = n.edge,
            r = t.edge;
          if (!e || !r || e.region.r == r.region.r) return null;
          var u = e.a * r.b - e.b * r.a;
          if (Math.abs(u) < 1e-10) return null;
          var i, o, a = (e.c * r.b - r.c * e.b) / u,
            c = (r.c * e.a - e.c * r.a) / u,
            l = e.region.r,
            s = r.region.r;
          l.y < s.y || l.y == s.y && l.x < s.x ? (i = n, o = e) : (i = t, o = r);
          var f = a >= o.region.r.x;
          return f && "l" === i.side || !f && "r" === i.side ? null : {
            x: a,
            y: c
          }
        },
        rightOf: function(n, t) {
          var e = n.edge,
            r = e.region.r,
            u = t.x > r.x;
          if (u && "l" === n.side) return 1;
          if (!u && "r" === n.side) return 0;
          if (1 === e.a) {
            var i = t.y - r.y,
              o = t.x - r.x,
              a = 0,
              c = 0;
            if (!u && e.b < 0 || u && e.b >= 0 ? c = a = i >= e.b * o : (c = t.x + t.y * e.b > e.c, e.b < 0 && (c = !c), c || (a = 1)), !a) {
              var l = r.x - e.region.l.x;
              c = e.b * (o * o - i * i) < l * i * (1 + 2 * o / l + e.b * e.b), e.b < 0 && (c = !c)
            }
          } else {
            var s = e.c - e.a * t.x,
              f = t.y - s,
              h = t.x - r.x,
              g = s - r.y;
            c = f * f > h * h + g * g
          }
          return "l" === n.side ? c : !c
        },
        endPoint: function(n, e, r) {
          n.ep[e] = r, n.ep[mc[e]] && t(n)
        },
        distance: function(n, t) {
          var e = n.x - t.x,
            r = n.y - t.y;
          return Math.sqrt(e * e + r * r)
        }
      }, i = {
        list: [],
        insert: function(n, t, e) {
          n.vertex = t, n.ystar = t.y + e;
          for (var r = 0, u = i.list, o = u.length; o > r; r++) {
            var a = u[r];
            if (!(n.ystar > a.ystar || n.ystar == a.ystar && t.x > a.vertex.x)) break
          }
          u.splice(r, 0, n)
        },
        del: function(n) {
          for (var t = 0, e = i.list, r = e.length; r > t && e[t] != n; ++t);
          e.splice(t, 1)
        },
        empty: function() {
          return 0 === i.list.length
        },
        nextEvent: function(n) {
          for (var t = 0, e = i.list, r = e.length; r > t; ++t)
            if (e[t] == n) return e[t + 1];
          return null
        },
        min: function() {
          var n = i.list[0];
          return {
            x: n.vertex.x,
            y: n.ystar
          }
        },
        extractMin: function() {
          return i.list.shift()
        }
      };
    r.init(), e.bottomSite = e.list.shift();
    for (var o, a, c, l, s, f, h, g, p, d, v, m, y, M = e.list.shift();;)
      if (i.empty() || (o = i.min()), M && (i.empty() || M.y < o.y || M.y == o.y && M.x < o.x)) a = r.leftBound(M), c = r.right(a), h = r.rightRegion(a), m = u.bisect(h, M), f = r.createHalfEdge(m, "l"), r.insert(a, f), d = u.intersect(a, f), d && (i.del(a), i.insert(a, d, u.distance(d, M))), a = f, f = r.createHalfEdge(m, "r"), r.insert(a, f), d = u.intersect(f, c), d && i.insert(f, d, u.distance(d, M)), M = e.list.shift();
      else {
        if (i.empty()) break;
        a = i.extractMin(), l = r.left(a), c = r.right(a), s = r.right(c), h = r.leftRegion(a), g = r.rightRegion(c), v = a.vertex, u.endPoint(a.edge, a.side, v), u.endPoint(c.edge, c.side, v), r.del(a), i.del(c), r.del(c), y = "l", h.y > g.y && (p = h, h = g, g = p, y = "r"), m = u.bisect(h, g), f = r.createHalfEdge(m, y), r.insert(l, f), u.endPoint(m, mc[y], v), d = u.intersect(l, f), d && (i.del(l), i.insert(l, d, u.distance(d, h))), d = u.intersect(f, s), d && i.insert(f, d, u.distance(d, h))
      }
    for (a = r.right(r.leftEnd); a != r.rightEnd; a = r.right(a)) t(a.edge)
  }

  function mr(n) {
    return n.x
  }

  function yr(n) {
    return n.y
  }

  function Mr() {
    return {
      leaf: !0,
      nodes: [],
      point: null,
      x: null,
      y: null
    }
  }

  function xr(n, t, e, r, u, i) {
    if (!n(t, e, r, u, i)) {
      var o = .5 * (e + u),
        a = .5 * (r + i),
        c = t.nodes;
      c[0] && xr(n, c[0], e, r, o, a), c[1] && xr(n, c[1], o, r, u, a), c[2] && xr(n, c[2], e, a, o, i), c[3] && xr(n, c[3], o, a, u, i)
    }
  }

  function br(n, t) {
    n = mo.rgb(n), t = mo.rgb(t);
    var e = n.r,
      r = n.g,
      u = n.b,
      i = t.r - e,
      o = t.g - r,
      a = t.b - u;
    return function(n) {
      return "#" + ct(Math.round(e + i * n)) + ct(Math.round(r + o * n)) + ct(Math.round(u + a * n))
    }
  }

  function _r(n, t) {
    var e, r = {}, u = {};
    for (e in n) e in t ? r[e] = Er(n[e], t[e]) : u[e] = n[e];
    for (e in t) e in n || (u[e] = t[e]);
    return function(n) {
      for (e in r) u[e] = r[e](n);
      return u
    }
  }

  function wr(n, t) {
    return t -= n = +n,
    function(e) {
      return n + t * e
    }
  }

  function Sr(n, t) {
    var e, r, u, i, o, a = 0,
      c = 0,
      l = [],
      s = [];
    for (n += "", t += "", yc.lastIndex = 0, r = 0; e = yc.exec(t); ++r) e.index && l.push(t.substring(a, c = e.index)), s.push({
      i: l.length,
      x: e[0]
    }), l.push(null), a = yc.lastIndex;
    for (a < t.length && l.push(t.substring(a)), r = 0, i = s.length;
      (e = yc.exec(n)) && i > r; ++r)
      if (o = s[r], o.x == e[0]) {
        if (o.i)
          if (null == l[o.i + 1])
            for (l[o.i - 1] += o.x, l.splice(o.i, 1), u = r + 1; i > u; ++u) s[u].i--;
          else
            for (l[o.i - 1] += o.x + l[o.i + 1], l.splice(o.i, 2), u = r + 1; i > u; ++u) s[u].i -= 2;
          else
        if (null == l[o.i + 1]) l[o.i] = o.x;
        else
          for (l[o.i] = o.x + l[o.i + 1], l.splice(o.i + 1, 1), u = r + 1; i > u; ++u) s[u].i--;
        s.splice(r, 1), i--, r--
      } else o.x = wr(parseFloat(e[0]), parseFloat(o.x));
    for (; i > r;) o = s.pop(), null == l[o.i + 1] ? l[o.i] = o.x : (l[o.i] = o.x + l[o.i + 1], l.splice(o.i + 1, 1)), i--;
    return 1 === l.length ? null == l[0] ? (o = s[0].x, function(n) {
      return o(n) + ""
    }) : function() {
      return t
    } : function(n) {
      for (r = 0; i > r; ++r) l[(o = s[r]).i] = o.x(n);
      return l.join("")
    }
  }

  function Er(n, t) {
    for (var e, r = mo.interpolators.length; --r >= 0 && !(e = mo.interpolators[r](n, t)););
    return e
  }

  function kr(n, t) {
    var e, r = [],
      u = [],
      i = n.length,
      o = t.length,
      a = Math.min(n.length, t.length);
    for (e = 0; a > e; ++e) r.push(Er(n[e], t[e]));
    for (; i > e; ++e) u[e] = n[e];
    for (; o > e; ++e) u[e] = t[e];
    return function(n) {
      for (e = 0; a > e; ++e) u[e] = r[e](n);
      return u
    }
  }

  function Ar(n) {
    return function(t) {
      return 0 >= t ? 0 : t >= 1 ? 1 : n(t)
    }
  }

  function Nr(n) {
    return function(t) {
      return 1 - n(1 - t)
    }
  }

  function Tr(n) {
    return function(t) {
      return .5 * (.5 > t ? n(2 * t) : 2 - n(2 - 2 * t))
    }
  }

  function qr(n) {
    return n * n
  }

  function zr(n) {
    return n * n * n
  }

  function Cr(n) {
    if (0 >= n) return 0;
    if (n >= 1) return 1;
    var t = n * n,
      e = t * n;
    return 4 * (.5 > n ? e : 3 * (n - t) + e - .75)
  }

  function Dr(n) {
    return function(t) {
      return Math.pow(t, n)
    }
  }

  function jr(n) {
    return 1 - Math.cos(n * Bo / 2)
  }

  function Lr(n) {
    return Math.pow(2, 10 * (n - 1))
  }

  function Hr(n) {
    return 1 - Math.sqrt(1 - n * n)
  }

  function Fr(n, t) {
    var e;
    return arguments.length < 2 && (t = .45), arguments.length ? e = t / (2 * Bo) * Math.asin(1 / n) : (n = 1, e = t / 4),
    function(r) {
      return 1 + n * Math.pow(2, 10 * -r) * Math.sin(2 * (r - e) * Bo / t)
    }
  }

  function Pr(n) {
    return n || (n = 1.70158),
    function(t) {
      return t * t * ((n + 1) * t - n)
    }
  }

  function Or(n) {
    return 1 / 2.75 > n ? 7.5625 * n * n : 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375
  }

  function Rr(n, t) {
    n = mo.hcl(n), t = mo.hcl(t);
    var e = n.h,
      r = n.c,
      u = n.l,
      i = t.h - e,
      o = t.c - r,
      a = t.l - u;
    return isNaN(o) && (o = 0, r = isNaN(r) ? t.c : r), isNaN(i) ? (i = 0, e = isNaN(e) ? t.h : e) : i > 180 ? i -= 360 : -180 > i && (i += 360),
    function(n) {
      return J(e + i * n, r + o * n, u + a * n) + ""
    }
  }

  function Yr(n, t) {
    n = mo.hsl(n), t = mo.hsl(t);
    var e = n.h,
      r = n.s,
      u = n.l,
      i = t.h - e,
      o = t.s - r,
      a = t.l - u;
    return isNaN(o) && (o = 0, r = isNaN(r) ? t.s : r), isNaN(i) ? (i = 0, e = isNaN(e) ? t.h : e) : i > 180 ? i -= 360 : -180 > i && (i += 360),
    function(n) {
      return $(e + i * n, r + o * n, u + a * n) + ""
    }
  }

  function Ir(n, t) {
    n = mo.lab(n), t = mo.lab(t);
    var e = n.l,
      r = n.a,
      u = n.b,
      i = t.l - e,
      o = t.a - r,
      a = t.b - u;
    return function(n) {
      return Q(e + i * n, r + o * n, u + a * n) + ""
    }
  }

  function Ur(n, t) {
    return t -= n,
    function(e) {
      return Math.round(n + t * e)
    }
  }

  function Zr(n) {
    var t = [n.a, n.b],
      e = [n.c, n.d],
      r = Xr(t),
      u = Vr(t, e),
      i = Xr($r(e, t, -u)) || 0;
    t[0] * e[1] < e[0] * t[1] && (t[0] *= -1, t[1] *= -1, r *= -1, u *= -1), this.rotate = (r ? Math.atan2(t[1], t[0]) : Math.atan2(-e[0], e[1])) * Ko, this.translate = [n.e, n.f], this.scale = [r, i], this.skew = i ? Math.atan2(u, i) * Ko : 0
  }

  function Vr(n, t) {
    return n[0] * t[0] + n[1] * t[1]
  }

  function Xr(n) {
    var t = Math.sqrt(Vr(n, n));
    return t && (n[0] /= t, n[1] /= t), t
  }

  function $r(n, t, e) {
    return n[0] += e * t[0], n[1] += e * t[1], n
  }

  function Br(n, t) {
    var e, r = [],
      u = [],
      i = mo.transform(n),
      o = mo.transform(t),
      a = i.translate,
      c = o.translate,
      l = i.rotate,
      s = o.rotate,
      f = i.skew,
      h = o.skew,
      g = i.scale,
      p = o.scale;
    return a[0] != c[0] || a[1] != c[1] ? (r.push("translate(", null, ",", null, ")"), u.push({
      i: 1,
      x: wr(a[0], c[0])
    }, {
      i: 3,
      x: wr(a[1], c[1])
    })) : c[0] || c[1] ? r.push("translate(" + c + ")") : r.push(""), l != s ? (l - s > 180 ? s += 360 : s - l > 180 && (l += 360), u.push({
      i: r.push(r.pop() + "rotate(", null, ")") - 2,
      x: wr(l, s)
    })) : s && r.push(r.pop() + "rotate(" + s + ")"), f != h ? u.push({
      i: r.push(r.pop() + "skewX(", null, ")") - 2,
      x: wr(f, h)
    }) : h && r.push(r.pop() + "skewX(" + h + ")"), g[0] != p[0] || g[1] != p[1] ? (e = r.push(r.pop() + "scale(", null, ",", null, ")"), u.push({
      i: e - 4,
      x: wr(g[0], p[0])
    }, {
      i: e - 2,
      x: wr(g[1], p[1])
    })) : (1 != p[0] || 1 != p[1]) && r.push(r.pop() + "scale(" + p + ")"), e = u.length,
    function(n) {
      for (var t, i = -1; ++i < e;) r[(t = u[i]).i] = t.x(n);
      return r.join("")
    }
  }

  function Wr(n, t) {
    return t = t - (n = +n) ? 1 / (t - n) : 0,
    function(e) {
      return (e - n) * t
    }
  }

  function Jr(n, t) {
    return t = t - (n = +n) ? 1 / (t - n) : 0,
    function(e) {
      return Math.max(0, Math.min(1, (e - n) * t))
    }
  }

  function Gr(n) {
    for (var t = n.source, e = n.target, r = Qr(t, e), u = [t]; t !== r;) t = t.parent, u.push(t);
    for (var i = u.length; e !== r;) u.splice(i, 0, e), e = e.parent;
    return u
  }

  function Kr(n) {
    for (var t = [], e = n.parent; null != e;) t.push(n), n = e, e = e.parent;
    return t.push(n), t
  }

  function Qr(n, t) {
    if (n === t) return n;
    for (var e = Kr(n), r = Kr(t), u = e.pop(), i = r.pop(), o = null; u === i;) o = u, u = e.pop(), i = r.pop();
    return o
  }

  function nu(n) {
    n.fixed |= 2
  }

  function tu(n) {
    n.fixed &= -7
  }

  function eu(n) {
    n.fixed |= 4, n.px = n.x, n.py = n.y
  }

  function ru(n) {
    n.fixed &= -5
  }

  function uu(n, t, e) {
    var r = 0,
      u = 0;
    if (n.charge = 0, !n.leaf)
      for (var i, o = n.nodes, a = o.length, c = -1; ++c < a;) i = o[c], null != i && (uu(i, t, e), n.charge += i.charge, r += i.charge * i.cx, u += i.charge * i.cy);
    if (n.point) {
      n.leaf || (n.point.x += Math.random() - .5, n.point.y += Math.random() - .5);
      var l = t * e[n.point.index];
      n.charge += n.pointCharge = l, r += l * n.point.x, u += l * n.point.y
    }
    n.cx = r / n.charge, n.cy = u / n.charge
  }

  function iu(n, t) {
    return mo.rebind(n, t, "sort", "children", "value"), n.nodes = n, n.links = lu, n
  }

  function ou(n) {
    return n.children
  }

  function au(n) {
    return n.value
  }

  function cu(n, t) {
    return t.value - n.value
  }

  function lu(n) {
    return mo.merge(n.map(function(n) {
      return (n.children || []).map(function(t) {
        return {
          source: n,
          target: t
        }
      })
    }))
  }

  function su(n) {
    return n.x
  }

  function fu(n) {
    return n.y
  }

  function hu(n, t, e) {
    n.y0 = t, n.y = e
  }

  function gu(n) {
    return mo.range(n.length)
  }

  function pu(n) {
    for (var t = -1, e = n[0].length, r = []; ++t < e;) r[t] = 0;
    return r
  }

  function du(n) {
    for (var t, e = 1, r = 0, u = n[0][1], i = n.length; i > e; ++e)(t = n[e][1]) > u && (r = e, u = t);
    return r
  }

  function vu(n) {
    return n.reduce(mu, 0)
  }

  function mu(n, t) {
    return n + t[1]
  }

  function yu(n, t) {
    return Mu(n, Math.ceil(Math.log(t.length) / Math.LN2 + 1))
  }

  function Mu(n, t) {
    for (var e = -1, r = +n[0], u = (n[1] - r) / t, i = []; ++e <= t;) i[e] = u * e + r;
    return i
  }

  function xu(n) {
    return [mo.min(n), mo.max(n)]
  }

  function bu(n, t) {
    return n.parent == t.parent ? 1 : 2
  }

  function _u(n) {
    var t = n.children;
    return t && t.length ? t[0] : n._tree.thread
  }

  function wu(n) {
    var t, e = n.children;
    return e && (t = e.length) ? e[t - 1] : n._tree.thread
  }

  function Su(n, t) {
    var e = n.children;
    if (e && (u = e.length))
      for (var r, u, i = -1; ++i < u;) t(r = Su(e[i], t), n) > 0 && (n = r);
    return n
  }

  function Eu(n, t) {
    return n.x - t.x
  }

  function ku(n, t) {
    return t.x - n.x
  }

  function Au(n, t) {
    return n.depth - t.depth
  }

  function Nu(n, t) {
    function e(n, r) {
      var u = n.children;
      if (u && (o = u.length))
        for (var i, o, a = null, c = -1; ++c < o;) i = u[c], e(i, a), a = i;
      t(n, r)
    }
    e(n, null)
  }

  function Tu(n) {
    for (var t, e = 0, r = 0, u = n.children, i = u.length; --i >= 0;) t = u[i]._tree, t.prelim += e, t.mod += e, e += t.shift + (r += t.change)
  }

  function qu(n, t, e) {
    n = n._tree, t = t._tree;
    var r = e / (t.number - n.number);
    n.change += r, t.change -= r, t.shift += e, t.prelim += e, t.mod += e
  }

  function zu(n, t, e) {
    return n._tree.ancestor.parent == t.parent ? n._tree.ancestor : e
  }

  function Cu(n, t) {
    return n.value - t.value
  }

  function Du(n, t) {
    var e = n._pack_next;
    n._pack_next = t, t._pack_prev = n, t._pack_next = e, e._pack_prev = t
  }

  function ju(n, t) {
    n._pack_next = t, t._pack_prev = n
  }

  function Lu(n, t) {
    var e = t.x - n.x,
      r = t.y - n.y,
      u = n.r + t.r;
    return .999 * u * u > e * e + r * r
  }

  function Hu(n) {
    function t(n) {
      s = Math.min(n.x - n.r, s), f = Math.max(n.x + n.r, f), h = Math.min(n.y - n.r, h), g = Math.max(n.y + n.r, g)
    }
    if ((e = n.children) && (l = e.length)) {
      var e, r, u, i, o, a, c, l, s = 1 / 0,
        f = -1 / 0,
        h = 1 / 0,
        g = -1 / 0;
      if (e.forEach(Fu), r = e[0], r.x = -r.r, r.y = 0, t(r), l > 1 && (u = e[1], u.x = u.r, u.y = 0, t(u), l > 2))
        for (i = e[2], Ru(r, u, i), t(i), Du(r, i), r._pack_prev = i, Du(i, u), u = r._pack_next, o = 3; l > o; o++) {
          Ru(r, u, i = e[o]);
          var p = 0,
            d = 1,
            v = 1;
          for (a = u._pack_next; a !== u; a = a._pack_next, d++)
            if (Lu(a, i)) {
              p = 1;
              break
            }
          if (1 == p)
            for (c = r._pack_prev; c !== a._pack_prev && !Lu(c, i); c = c._pack_prev, v++);
          p ? (v > d || d == v && u.r < r.r ? ju(r, u = a) : ju(r = c, u), o--) : (Du(r, i), u = i, t(i))
        }
      var m = (s + f) / 2,
        y = (h + g) / 2,
        M = 0;
      for (o = 0; l > o; o++) i = e[o], i.x -= m, i.y -= y, M = Math.max(M, i.r + Math.sqrt(i.x * i.x + i.y * i.y));
      n.r = M, e.forEach(Pu)
    }
  }

  function Fu(n) {
    n._pack_next = n._pack_prev = n
  }

  function Pu(n) {
    delete n._pack_next, delete n._pack_prev
  }

  function Ou(n, t, e, r) {
    var u = n.children;
    if (n.x = t += r * n.x, n.y = e += r * n.y, n.r *= r, u)
      for (var i = -1, o = u.length; ++i < o;) Ou(u[i], t, e, r)
  }

  function Ru(n, t, e) {
    var r = n.r + e.r,
      u = t.x - n.x,
      i = t.y - n.y;
    if (r && (u || i)) {
      var o = t.r + e.r,
        a = u * u + i * i;
      o *= o, r *= r;
      var c = .5 + (r - o) / (2 * a),
        l = Math.sqrt(Math.max(0, 2 * o * (r + a) - (r -= a) * r - o * o)) / (2 * a);
      e.x = n.x + c * u + l * i, e.y = n.y + c * i - l * u
    } else e.x = n.x + r, e.y = n.y
  }

  function Yu(n) {
    return 1 + mo.max(n, function(n) {
      return n.y
    })
  }

  function Iu(n) {
    return n.reduce(function(n, t) {
      return n + t.x
    }, 0) / n.length
  }

  function Uu(n) {
    var t = n.children;
    return t && t.length ? Uu(t[0]) : n
  }

  function Zu(n) {
    var t, e = n.children;
    return e && (t = e.length) ? Zu(e[t - 1]) : n
  }

  function Vu(n) {
    return {
      x: n.x,
      y: n.y,
      dx: n.dx,
      dy: n.dy
    }
  }

  function Xu(n, t) {
    var e = n.x + t[3],
      r = n.y + t[0],
      u = n.dx - t[1] - t[3],
      i = n.dy - t[0] - t[2];
    return 0 > u && (e += u / 2, u = 0), 0 > i && (r += i / 2, i = 0), {
      x: e,
      y: r,
      dx: u,
      dy: i
    }
  }

  function $u(n) {
    var t = n[0],
      e = n[n.length - 1];
    return e > t ? [t, e] : [e, t]
  }

  function Bu(n) {
    return n.rangeExtent ? n.rangeExtent() : $u(n.range())
  }

  function Wu(n, t, e, r) {
    var u = e(n[0], n[1]),
      i = r(t[0], t[1]);
    return function(n) {
      return i(u(n))
    }
  }

  function Ju(n, t) {
    var e, r = 0,
      u = n.length - 1,
      i = n[r],
      o = n[u];
    return i > o && (e = r, r = u, u = e, e = i, i = o, o = e), n[r] = t.floor(i), n[u] = t.ceil(o), n
  }

  function Gu(n) {
    return n ? {
      floor: function(t) {
        return Math.floor(t / n) * n
      },
      ceil: function(t) {
        return Math.ceil(t / n) * n
      }
    } : Nc
  }

  function Ku(n, t, e, r) {
    var u = [],
      i = [],
      o = 0,
      a = Math.min(n.length, t.length) - 1;
    for (n[a] < n[0] && (n = n.slice().reverse(), t = t.slice().reverse()); ++o <= a;) u.push(e(n[o - 1], n[o])), i.push(r(t[o - 1], t[o]));
    return function(t) {
      var e = mo.bisect(n, t, 1, a) - 1;
      return i[e](u[e](t))
    }
  }

  function Qu(n, t, e, r) {
    function u() {
      var u = Math.min(n.length, t.length) > 2 ? Ku : Wu,
        c = r ? Jr : Wr;
      return o = u(n, t, c, e), a = u(t, n, c, Er), i
    }

    function i(n) {
      return o(n)
    }
    var o, a;
    return i.invert = function(n) {
      return a(n)
    }, i.domain = function(t) {
      return arguments.length ? (n = t.map(Number), u()) : n
    }, i.range = function(n) {
      return arguments.length ? (t = n, u()) : t
    }, i.rangeRound = function(n) {
      return i.range(n).interpolate(Ur)
    }, i.clamp = function(n) {
      return arguments.length ? (r = n, u()) : r
    }, i.interpolate = function(n) {
      return arguments.length ? (e = n, u()) : e
    }, i.ticks = function(t) {
      return ri(n, t)
    }, i.tickFormat = function(t, e) {
      return ui(n, t, e)
    }, i.nice = function(t) {
      return ti(n, t), u()
    }, i.copy = function() {
      return Qu(n, t, e, r)
    }, u()
  }

  function ni(n, t) {
    return mo.rebind(n, t, "range", "rangeRound", "interpolate", "clamp")
  }

  function ti(n, t) {
    return Ju(n, Gu(ei(n, t)[2]))
  }

  function ei(n, t) {
    null == t && (t = 10);
    var e = $u(n),
      r = e[1] - e[0],
      u = Math.pow(10, Math.floor(Math.log(r / t) / Math.LN10)),
      i = t / r * u;
    return .15 >= i ? u *= 10 : .35 >= i ? u *= 5 : .75 >= i && (u *= 2), e[0] = Math.ceil(e[0] / u) * u, e[1] = Math.floor(e[1] / u) * u + .5 * u, e[2] = u, e
  }

  function ri(n, t) {
    return mo.range.apply(mo, ei(n, t))
  }

  function ui(n, t, e) {
    var r = -Math.floor(Math.log(ei(n, t)[2]) / Math.LN10 + .01);
    return mo.format(e ? e.replace(Ea, function(n, t, e, u, i, o, a, c, l, s) {
      return [t, e, u, i, o, a, c, l || "." + (r - 2 * ("%" === s)), s].join("")
    }) : ",." + r + "f")
  }

  function ii(n, t, e, r) {
    function u(n) {
      return (e ? Math.log(0 > n ? 0 : n) : -Math.log(n > 0 ? 0 : -n)) / Math.log(t)
    }

    function i(n) {
      return e ? Math.pow(t, n) : -Math.pow(t, -n)
    }

    function o(t) {
      return n(u(t))
    }
    return o.invert = function(t) {
      return i(n.invert(t))
    }, o.domain = function(t) {
      return arguments.length ? (e = t[0] >= 0, n.domain((r = t.map(Number)).map(u)), o) : r
    }, o.base = function(e) {
      return arguments.length ? (t = +e, n.domain(r.map(u)), o) : t
    }, o.nice = function() {
      var t = Ju(r.map(u), e ? Math : qc);
      return n.domain(t), r = t.map(i), o
    }, o.ticks = function() {
      var n = $u(r),
        o = [],
        a = n[0],
        c = n[1],
        l = Math.floor(u(a)),
        s = Math.ceil(u(c)),
        f = t % 1 ? 2 : t;
      if (isFinite(s - l)) {
        if (e) {
          for (; s > l; l++)
            for (var h = 1; f > h; h++) o.push(i(l) * h);
          o.push(i(l))
        } else
          for (o.push(i(l)); l++ < s;)
            for (var h = f - 1; h > 0; h--) o.push(i(l) * h);
        for (l = 0; o[l] < a; l++);
        for (s = o.length; o[s - 1] > c; s--);
        o = o.slice(l, s)
      }
      return o
    }, o.tickFormat = function(n, t) {
      if (!arguments.length) return Tc;
      arguments.length < 2 ? t = Tc : "function" != typeof t && (t = mo.format(t));
      var r, a = Math.max(.1, n / o.ticks().length),
        c = e ? (r = 1e-12, Math.ceil) : (r = -1e-12, Math.floor);
      return function(n) {
        return n / i(c(u(n) + r)) <= a ? t(n) : ""
      }
    }, o.copy = function() {
      return ii(n.copy(), t, e, r)
    }, ni(o, n)
  }

  function oi(n, t, e) {
    function r(t) {
      return n(u(t))
    }
    var u = ai(t),
      i = ai(1 / t);
    return r.invert = function(t) {
      return i(n.invert(t))
    }, r.domain = function(t) {
      return arguments.length ? (n.domain((e = t.map(Number)).map(u)), r) : e
    }, r.ticks = function(n) {
      return ri(e, n)
    }, r.tickFormat = function(n, t) {
      return ui(e, n, t)
    }, r.nice = function(n) {
      return r.domain(ti(e, n))
    }, r.exponent = function(o) {
      return arguments.length ? (u = ai(t = o), i = ai(1 / t), n.domain(e.map(u)), r) : t
    }, r.copy = function() {
      return oi(n.copy(), t, e)
    }, ni(r, n)
  }

  function ai(n) {
    return function(t) {
      return 0 > t ? -Math.pow(-t, n) : Math.pow(t, n)
    }
  }

  function ci(n, t) {
    function e(t) {
      return o[((i.get(t) || i.set(t, n.push(t))) - 1) % o.length]
    }

    function r(t, e) {
      return mo.range(n.length).map(function(n) {
        return t + e * n
      })
    }
    var i, o, a;
    return e.domain = function(r) {
      if (!arguments.length) return n;
      n = [], i = new u;
      for (var o, a = -1, c = r.length; ++a < c;) i.has(o = r[a]) || i.set(o, n.push(o));
      return e[t.t].apply(e, t.a)
    }, e.range = function(n) {
      return arguments.length ? (o = n, a = 0, t = {
        t: "range",
        a: arguments
      }, e) : o
    }, e.rangePoints = function(u, i) {
      arguments.length < 2 && (i = 0);
      var c = u[0],
        l = u[1],
        s = (l - c) / (Math.max(1, n.length - 1) + i);
      return o = r(n.length < 2 ? (c + l) / 2 : c + s * i / 2, s), a = 0, t = {
        t: "rangePoints",
        a: arguments
      }, e
    }, e.rangeBands = function(u, i, c) {
      arguments.length < 2 && (i = 0), arguments.length < 3 && (c = i);
      var l = u[1] < u[0],
        s = u[l - 0],
        f = u[1 - l],
        h = (f - s) / (n.length - i + 2 * c);
      return o = r(s + h * c, h), l && o.reverse(), a = h * (1 - i), t = {
        t: "rangeBands",
        a: arguments
      }, e
    }, e.rangeRoundBands = function(u, i, c) {
      arguments.length < 2 && (i = 0), arguments.length < 3 && (c = i);
      var l = u[1] < u[0],
        s = u[l - 0],
        f = u[1 - l],
        h = Math.floor((f - s) / (n.length - i + 2 * c)),
        g = f - s - (n.length - i) * h;
      return o = r(s + Math.round(g / 2), h), l && o.reverse(), a = Math.round(h * (1 - i)), t = {
        t: "rangeRoundBands",
        a: arguments
      }, e
    }, e.rangeBand = function() {
      return a
    }, e.rangeExtent = function() {
      return $u(t.a[0])
    }, e.copy = function() {
      return ci(n, t)
    }, e.domain(n)
  }

  function li(n, t) {
    function e() {
      var e = 0,
        i = t.length;
      for (u = []; ++e < i;) u[e - 1] = mo.quantile(n, e / i);
      return r
    }

    function r(n) {
      return isNaN(n = +n) ? void 0 : t[mo.bisect(u, n)]
    }
    var u;
    return r.domain = function(t) {
      return arguments.length ? (n = t.filter(function(n) {
        return !isNaN(n)
      }).sort(mo.ascending), e()) : n
    }, r.range = function(n) {
      return arguments.length ? (t = n, e()) : t
    }, r.quantiles = function() {
      return u
    }, r.invertExtent = function(e) {
      return e = t.indexOf(e), 0 > e ? [0 / 0, 0 / 0] : [e > 0 ? u[e - 1] : n[0], e < u.length ? u[e] : n[n.length - 1]]
    }, r.copy = function() {
      return li(n, t)
    }, e()
  }

  function si(n, t, e) {
    function r(t) {
      return e[Math.max(0, Math.min(o, Math.floor(i * (t - n))))]
    }

    function u() {
      return i = e.length / (t - n), o = e.length - 1, r
    }
    var i, o;
    return r.domain = function(e) {
      return arguments.length ? (n = +e[0], t = +e[e.length - 1], u()) : [n, t]
    }, r.range = function(n) {
      return arguments.length ? (e = n, u()) : e
    }, r.invertExtent = function(t) {
      return t = e.indexOf(t), t = 0 > t ? 0 / 0 : t / i + n, [t, t + 1 / i]
    }, r.copy = function() {
      return si(n, t, e)
    }, u()
  }

  function fi(n, t) {
    function e(e) {
      return e >= e ? t[mo.bisect(n, e)] : void 0
    }
    return e.domain = function(t) {
      return arguments.length ? (n = t, e) : n
    }, e.range = function(n) {
      return arguments.length ? (t = n, e) : t
    }, e.invertExtent = function(e) {
      return e = t.indexOf(e), [n[e - 1], n[e]]
    }, e.copy = function() {
      return fi(n, t)
    }, e
  }

  function hi(n) {
    function t(n) {
      return +n
    }
    return t.invert = t, t.domain = t.range = function(e) {
      return arguments.length ? (n = e.map(t), t) : n
    }, t.ticks = function(t) {
      return ri(n, t)
    }, t.tickFormat = function(t, e) {
      return ui(n, t, e)
    }, t.copy = function() {
      return hi(n)
    }, t
  }

  function gi(n) {
    return n.innerRadius
  }

  function pi(n) {
    return n.outerRadius
  }

  function di(n) {
    return n.startAngle
  }

  function vi(n) {
    return n.endAngle
  }

  function mi(n) {
    for (var t, e, r, u = -1, i = n.length; ++u < i;) t = n[u], e = t[0], r = t[1] + Lc, t[0] = e * Math.cos(r), t[1] = e * Math.sin(r);
    return n
  }

  function yi(n) {
    function t(t) {
      function c() {
        d.push("M", a(n(m), f), s, l(n(v.reverse()), f), "Z")
      }
      for (var h, g, p, d = [], v = [], m = [], y = -1, M = t.length, x = pt(e), b = pt(u), _ = e === r ? function() {
          return g
        } : pt(r), w = u === i ? function() {
          return p
        } : pt(i); ++y < M;) o.call(this, h = t[y], y) ? (v.push([g = +x.call(this, h, y), p = +b.call(this, h, y)]), m.push([+_.call(this, h, y), +w.call(this, h, y)])) : v.length && (c(), v = [], m = []);
      return v.length && c(), d.length ? d.join("") : null
    }
    var e = Ze,
      r = Ze,
      u = 0,
      i = Ve,
      o = Vt,
      a = Xe,
      c = a.key,
      l = a,
      s = "L",
      f = .7;
    return t.x = function(n) {
      return arguments.length ? (e = r = n, t) : r
    }, t.x0 = function(n) {
      return arguments.length ? (e = n, t) : e
    }, t.x1 = function(n) {
      return arguments.length ? (r = n, t) : r
    }, t.y = function(n) {
      return arguments.length ? (u = i = n, t) : i
    }, t.y0 = function(n) {
      return arguments.length ? (u = n, t) : u
    }, t.y1 = function(n) {
      return arguments.length ? (i = n, t) : i
    }, t.defined = function(n) {
      return arguments.length ? (o = n, t) : o
    }, t.interpolate = function(n) {
      return arguments.length ? (c = "function" == typeof n ? a = n : (a = hc.get(n) || Xe).key, l = a.reverse || a, s = a.closed ? "M" : "L", t) : c
    }, t.tension = function(n) {
      return arguments.length ? (f = n, t) : f
    }, t
  }

  function Mi(n) {
    return n.radius
  }

  function xi(n) {
    return [n.x, n.y]
  }

  function bi(n) {
    return function() {
      var t = n.apply(this, arguments),
        e = t[0],
        r = t[1] + Lc;
      return [e * Math.cos(r), e * Math.sin(r)]
    }
  }

  function _i() {
    return 64
  }

  function wi() {
    return "circle"
  }

  function Si(n) {
    var t = Math.sqrt(n / Bo);
    return "M0," + t + "A" + t + "," + t + " 0 1,1 0," + -t + "A" + t + "," + t + " 0 1,1 0," + t + "Z"
  }

  function Ei(n, t) {
    return Lo(n, Ic), n.id = t, n
  }

  function ki(n, t, e, r) {
    var u = n.id;
    return N(n, "function" == typeof e ? function(n, i, o) {
      n.__transition__[u].tween.set(t, r(e.call(n, n.__data__, i, o)))
    } : (e = r(e), function(n) {
      n.__transition__[u].tween.set(t, e)
    }))
  }

  function Ai(n) {
    return null == n && (n = ""),
    function() {
      this.textContent = n
    }
  }

  function Ni(n, t, e, r) {
    var i = n.__transition__ || (n.__transition__ = {
      active: 0,
      count: 0
    }),
      o = i[e];
    if (!o) {
      var a = r.time;
      o = i[e] = {
        tween: new u,
        time: a,
        ease: r.ease,
        delay: r.delay,
        duration: r.duration
      }, ++i.count, mo.timer(function(r) {
        function u(r) {
          return i.active > e ? l() : (i.active = e, o.event && o.event.start.call(n, s, t), o.tween.forEach(function(e, r) {
            (r = r.call(n, s, t)) && p.push(r)
          }), c(r) ? 1 : (xt(c, 0, a), void 0))
        }

        function c(r) {
          if (i.active !== e) return l();
          for (var u = (r - h) / g, a = f(u), c = p.length; c > 0;) p[--c].call(n, a);
          return u >= 1 ? (o.event && o.event.end.call(n, s, t), l()) : void 0
        }

        function l() {
          return --i.count ? delete i[e] : delete n.__transition__, 1
        }
        var s = n.__data__,
          f = o.ease,
          h = o.delay,
          g = o.duration,
          p = [];
        return r >= h ? u(r) : (xt(u, h, a), void 0)
      }, 0, a)
    }
  }

  function Ti(n, t) {
    n.attr("transform", function(n) {
      return "translate(" + t(n) + ",0)"
    })
  }

  function qi(n, t) {
    n.attr("transform", function(n) {
      return "translate(0," + t(n) + ")"
    })
  }

  function zi() {
    this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
  }

  function Ci(n, t, e) {
    function r(t) {
      var e = n(t),
        r = i(e, 1);
      return r - t > t - e ? e : r
    }

    function u(e) {
      return t(e = n(new Wc(e - 1)), 1), e
    }

    function i(n, e) {
      return t(n = new Wc(+n), e), n
    }

    function o(n, r, i) {
      var o = u(n),
        a = [];
      if (i > 1)
        for (; r > o;) e(o) % i || a.push(new Date(+o)), t(o, 1);
      else
        for (; r > o;) a.push(new Date(+o)), t(o, 1);
      return a
    }

    function a(n, t, e) {
      try {
        Wc = zi;
        var r = new zi;
        return r._ = n, o(r, t, e)
      } finally {
        Wc = Date
      }
    }
    n.floor = n, n.round = r, n.ceil = u, n.offset = i, n.range = o;
    var c = n.utc = Di(n);
    return c.floor = c, c.round = Di(r), c.ceil = Di(u), c.offset = Di(i), c.range = a, n
  }

  function Di(n) {
    return function(t, e) {
      try {
        Wc = zi;
        var r = new zi;
        return r._ = t, n(r, e)._
      } finally {
        Wc = Date
      }
    }
  }

  function ji(n) {
    function t(t) {
      for (var r, u, i, o = [], a = -1, c = 0; ++a < e;) 37 === n.charCodeAt(a) && (o.push(n.substring(c, a)), null != (u = pl[r = n.charAt(++a)]) && (r = n.charAt(++a)), (i = dl[r]) && (r = i(t, null == u ? "e" === r ? " " : "0" : u)), o.push(r), c = a + 1);
      return o.push(n.substring(c, a)), o.join("")
    }
    var e = n.length;
    return t.parse = function(t) {
      var e = {
        y: 1900,
        m: 0,
        d: 1,
        H: 0,
        M: 0,
        S: 0,
        L: 0,
        Z: null
      }, r = Li(e, n, t, 0);
      if (r != t.length) return null;
      "p" in e && (e.H = e.H % 12 + 12 * e.p);
      var u = null != e.Z && Wc !== zi,
        i = new(u ? zi : Wc);
      return "j" in e ? i.setFullYear(e.y, 0, e.j) : "w" in e && ("W" in e || "U" in e) ? (i.setFullYear(e.y, 0, 1), i.setFullYear(e.y, 0, "W" in e ? (e.w + 6) % 7 + 7 * e.W - (i.getDay() + 5) % 7 : e.w + 7 * e.U - (i.getDay() + 6) % 7)) : i.setFullYear(e.y, e.m, e.d), i.setHours(e.H + Math.floor(e.Z / 100), e.M + e.Z % 100, e.S, e.L), u ? i._ : i
    }, t.toString = function() {
      return n
    }, t
  }

  function Li(n, t, e, r) {
    for (var u, i, o, a = 0, c = t.length, l = e.length; c > a;) {
      if (r >= l) return -1;
      if (u = t.charCodeAt(a++), 37 === u) {
        if (o = t.charAt(a++), i = vl[o in pl ? t.charAt(a++) : o], !i || (r = i(n, e, r)) < 0) return -1
      } else if (u != e.charCodeAt(r++)) return -1
    }
    return r
  }

  function Hi(n) {
    return new RegExp("^(?:" + n.map(mo.requote).join("|") + ")", "i")
  }

  function Fi(n) {
    for (var t = new u, e = -1, r = n.length; ++e < r;) t.set(n[e].toLowerCase(), e);
    return t
  }

  function Pi(n, t, e) {
    var r = 0 > n ? "-" : "",
      u = (r ? -n : n) + "",
      i = u.length;
    return r + (e > i ? new Array(e - i + 1).join(t) + u : u)
  }

  function Oi(n, t, e) {
    al.lastIndex = 0;
    var r = al.exec(t.substring(e));
    return r ? (n.w = cl.get(r[0].toLowerCase()), e + r[0].length) : -1
  }

  function Ri(n, t, e) {
    il.lastIndex = 0;
    var r = il.exec(t.substring(e));
    return r ? (n.w = ol.get(r[0].toLowerCase()), e + r[0].length) : -1
  }

  function Yi(n, t, e) {
    ml.lastIndex = 0;
    var r = ml.exec(t.substring(e, e + 1));
    return r ? (n.w = +r[0], e + r[0].length) : -1
  }

  function Ii(n, t, e) {
    ml.lastIndex = 0;
    var r = ml.exec(t.substring(e));
    return r ? (n.U = +r[0], e + r[0].length) : -1
  }

  function Ui(n, t, e) {
    ml.lastIndex = 0;
    var r = ml.exec(t.substring(e));
    return r ? (n.W = +r[0], e + r[0].length) : -1
  }

  function Zi(n, t, e) {
    fl.lastIndex = 0;
    var r = fl.exec(t.substring(e));
    return r ? (n.m = hl.get(r[0].toLowerCase()), e + r[0].length) : -1
  }

  function Vi(n, t, e) {
    ll.lastIndex = 0;
    var r = ll.exec(t.substring(e));
    return r ? (n.m = sl.get(r[0].toLowerCase()), e + r[0].length) : -1
  }

  function Xi(n, t, e) {
    return Li(n, dl.c.toString(), t, e)
  }

  function $i(n, t, e) {
    return Li(n, dl.x.toString(), t, e)
  }

  function Bi(n, t, e) {
    return Li(n, dl.X.toString(), t, e)
  }

  function Wi(n, t, e) {
    ml.lastIndex = 0;
    var r = ml.exec(t.substring(e, e + 4));
    return r ? (n.y = +r[0], e + r[0].length) : -1
  }

  function Ji(n, t, e) {
    ml.lastIndex = 0;
    var r = ml.exec(t.substring(e, e + 2));
    return r ? (n.y = Ki(+r[0]), e + r[0].length) : -1
  }

  function Gi(n, t, e) {
    return /^[+-]\d{4}$/.test(t = t.substring(e, e + 5)) ? (n.Z = +t, e + 5) : -1
  }

  function Ki(n) {
    return n + (n > 68 ? 1900 : 2e3)
  }

  function Qi(n, t, e) {
    ml.lastIndex = 0;
    var r = ml.exec(t.substring(e, e + 2));
    return r ? (n.m = r[0] - 1, e + r[0].length) : -1
  }

  function no(n, t, e) {
    ml.lastIndex = 0;
    var r = ml.exec(t.substring(e, e + 2));
    return r ? (n.d = +r[0], e + r[0].length) : -1
  }

  function to(n, t, e) {
    ml.lastIndex = 0;
    var r = ml.exec(t.substring(e, e + 3));
    return r ? (n.j = +r[0], e + r[0].length) : -1
  }

  function eo(n, t, e) {
    ml.lastIndex = 0;
    var r = ml.exec(t.substring(e, e + 2));
    return r ? (n.H = +r[0], e + r[0].length) : -1
  }

  function ro(n, t, e) {
    ml.lastIndex = 0;
    var r = ml.exec(t.substring(e, e + 2));
    return r ? (n.M = +r[0], e + r[0].length) : -1
  }

  function uo(n, t, e) {
    ml.lastIndex = 0;
    var r = ml.exec(t.substring(e, e + 2));
    return r ? (n.S = +r[0], e + r[0].length) : -1
  }

  function io(n, t, e) {
    ml.lastIndex = 0;
    var r = ml.exec(t.substring(e, e + 3));
    return r ? (n.L = +r[0], e + r[0].length) : -1
  }

  function oo(n, t, e) {
    var r = yl.get(t.substring(e, e += 2).toLowerCase());
    return null == r ? -1 : (n.p = r, e)
  }

  function ao(n) {
    var t = n.getTimezoneOffset(),
      e = t > 0 ? "-" : "+",
      r = ~~ (Math.abs(t) / 60),
      u = Math.abs(t) % 60;
    return e + Pi(r, "0", 2) + Pi(u, "0", 2)
  }

  function co(n, t, e) {
    gl.lastIndex = 0;
    var r = gl.exec(t.substring(e, e + 1));
    return r ? e + r[0].length : -1
  }

  function lo(n) {
    function t(n) {
      try {
        Wc = zi;
        var t = new Wc;
        return t._ = n, e(t)
      } finally {
        Wc = Date
      }
    }
    var e = ji(n);
    return t.parse = function(n) {
      try {
        Wc = zi;
        var t = e.parse(n);
        return t && t._
      } finally {
        Wc = Date
      }
    }, t.toString = e.toString, t
  }

  function so(n) {
    return n.toISOString()
  }

  function fo(n, t, e) {
    function r(t) {
      return n(t)
    }

    function u(n, e) {
      var r = n[1] - n[0],
        u = r / e,
        i = mo.bisect(xl, u);
      return i == xl.length ? [t.year, ei(n.map(function(n) {
        return n / 31536e6
      }), e)[2]] : i ? t[u / xl[i - 1] < xl[i] / u ? i - 1 : i] : [Sl, ei(n, e)[2]]
    }
    return r.invert = function(t) {
      return ho(n.invert(t))
    }, r.domain = function(t) {
      return arguments.length ? (n.domain(t), r) : n.domain().map(ho)
    }, r.nice = function(n, t) {
      function e(e) {
        return !isNaN(e) && !n.range(e, ho(+e + 1), t).length
      }
      var i = r.domain(),
        o = $u(i),
        a = null == n ? u(o, 10) : "number" == typeof n && u(o, n);
      return a && (n = a[0], t = a[1]), r.domain(Ju(i, t > 1 ? {
        floor: function(t) {
          for (; e(t = n.floor(t));) t = ho(t - 1);
          return t
        },
        ceil: function(t) {
          for (; e(t = n.ceil(t));) t = ho(+t + 1);
          return t
        }
      } : n))
    }, r.ticks = function(n, t) {
      var e = $u(r.domain()),
        i = null == n ? u(e, 10) : "number" == typeof n ? u(e, n) : !n.range && [{
            range: n
          },
          t
        ];
      return i && (n = i[0], t = i[1]), n.range(e[0], ho(+e[1] + 1), t)
    }, r.tickFormat = function() {
      return e
    }, r.copy = function() {
      return fo(n.copy(), t, e)
    }, ni(r, n)
  }

  function ho(n) {
    return new Date(n)
  }

  function go(n) {
    return function(t) {
      for (var e = n.length - 1, r = n[e]; !r[1](t);) r = n[--e];
      return r[0](t)
    }
  }

  function po(n) {
    return JSON.parse(n.responseText)
  }

  function vo(n) {
    var t = xo.createRange();
    return t.selectNode(xo.body), t.createContextualFragment(n.responseText)
  }
  var mo = {
    version: "3.3.3"
  };
  Date.now || (Date.now = function() {
    return +new Date
  });
  var yo = [].slice,
    Mo = function(n) {
      return yo.call(n)
    }, xo = document,
    bo = xo.documentElement,
    _o = window;
  try {
    Mo(bo.childNodes)[0].nodeType
  } catch (wo) {
    Mo = function(n) {
      for (var t = n.length, e = new Array(t); t--;) e[t] = n[t];
      return e
    }
  }
  try {
    xo.createElement("div").style.setProperty("opacity", 0, "")
  } catch (So) {
    var Eo = _o.Element.prototype,
      ko = Eo.setAttribute,
      Ao = Eo.setAttributeNS,
      No = _o.CSSStyleDeclaration.prototype,
      To = No.setProperty;
    Eo.setAttribute = function(n, t) {
      ko.call(this, n, t + "")
    }, Eo.setAttributeNS = function(n, t, e) {
      Ao.call(this, n, t, e + "")
    }, No.setProperty = function(n, t, e) {
      To.call(this, n, t + "", e)
    }
  }
  mo.ascending = function(n, t) {
    return t > n ? -1 : n > t ? 1 : n >= t ? 0 : 0 / 0
  }, mo.descending = function(n, t) {
    return n > t ? -1 : t > n ? 1 : t >= n ? 0 : 0 / 0
  }, mo.min = function(n, t) {
    var e, r, u = -1,
      i = n.length;
    if (1 === arguments.length) {
      for (; ++u < i && !(null != (e = n[u]) && e >= e);) e = void 0;
      for (; ++u < i;) null != (r = n[u]) && e > r && (e = r)
    } else {
      for (; ++u < i && !(null != (e = t.call(n, n[u], u)) && e >= e);) e = void 0;
      for (; ++u < i;) null != (r = t.call(n, n[u], u)) && e > r && (e = r)
    }
    return e
  }, mo.max = function(n, t) {
    var e, r, u = -1,
      i = n.length;
    if (1 === arguments.length) {
      for (; ++u < i && !(null != (e = n[u]) && e >= e);) e = void 0;
      for (; ++u < i;) null != (r = n[u]) && r > e && (e = r)
    } else {
      for (; ++u < i && !(null != (e = t.call(n, n[u], u)) && e >= e);) e = void 0;
      for (; ++u < i;) null != (r = t.call(n, n[u], u)) && r > e && (e = r)
    }
    return e
  }, mo.extent = function(n, t) {
    var e, r, u, i = -1,
      o = n.length;
    if (1 === arguments.length) {
      for (; ++i < o && !(null != (e = u = n[i]) && e >= e);) e = u = void 0;
      for (; ++i < o;) null != (r = n[i]) && (e > r && (e = r), r > u && (u = r))
    } else {
      for (; ++i < o && !(null != (e = u = t.call(n, n[i], i)) && e >= e);) e = void 0;
      for (; ++i < o;) null != (r = t.call(n, n[i], i)) && (e > r && (e = r), r > u && (u = r))
    }
    return [e, u]
  }, mo.sum = function(n, t) {
    var e, r = 0,
      u = n.length,
      i = -1;
    if (1 === arguments.length)
      for (; ++i < u;) isNaN(e = +n[i]) || (r += e);
    else
      for (; ++i < u;) isNaN(e = +t.call(n, n[i], i)) || (r += e);
    return r
  }, mo.mean = function(t, e) {
    var r, u = t.length,
      i = 0,
      o = -1,
      a = 0;
    if (1 === arguments.length)
      for (; ++o < u;) n(r = t[o]) && (i += (r - i) / ++a);
    else
      for (; ++o < u;) n(r = e.call(t, t[o], o)) && (i += (r - i) / ++a);
    return a ? i : void 0
  }, mo.quantile = function(n, t) {
    var e = (n.length - 1) * t + 1,
      r = Math.floor(e),
      u = +n[r - 1],
      i = e - r;
    return i ? u + i * (n[r] - u) : u
  }, mo.median = function(t, e) {
    return arguments.length > 1 && (t = t.map(e)), t = t.filter(n), t.length ? mo.quantile(t.sort(mo.ascending), .5) : void 0
  }, mo.bisector = function(n) {
    return {
      left: function(t, e, r, u) {
        for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); u > r;) {
          var i = r + u >>> 1;
          n.call(t, t[i], i) < e ? r = i + 1 : u = i
        }
        return r
      },
      right: function(t, e, r, u) {
        for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); u > r;) {
          var i = r + u >>> 1;
          e < n.call(t, t[i], i) ? u = i : r = i + 1
        }
        return r
      }
    }
  };
  var qo = mo.bisector(function(n) {
    return n
  });
  mo.bisectLeft = qo.left, mo.bisect = mo.bisectRight = qo.right, mo.shuffle = function(n) {
    for (var t, e, r = n.length; r;) e = 0 | Math.random() * r--, t = n[r], n[r] = n[e], n[e] = t;
    return n
  }, mo.permute = function(n, t) {
    for (var e = t.length, r = new Array(e); e--;) r[e] = n[t[e]];
    return r
  }, mo.pairs = function(n) {
    for (var t, e = 0, r = n.length - 1, u = n[0], i = new Array(0 > r ? 0 : r); r > e;) i[e] = [t = u, u = n[++e]];
    return i
  }, mo.zip = function() {
    if (!(u = arguments.length)) return [];
    for (var n = -1, e = mo.min(arguments, t), r = new Array(e); ++n < e;)
      for (var u, i = -1, o = r[n] = new Array(u); ++i < u;) o[i] = arguments[i][n];
    return r
  }, mo.transpose = function(n) {
    return mo.zip.apply(mo, n)
  }, mo.keys = function(n) {
    var t = [];
    for (var e in n) t.push(e);
    return t
  }, mo.values = function(n) {
    var t = [];
    for (var e in n) t.push(n[e]);
    return t
  }, mo.entries = function(n) {
    var t = [];
    for (var e in n) t.push({
      key: e,
      value: n[e]
    });
    return t
  }, mo.merge = function(n) {
    return Array.prototype.concat.apply([], n)
  }, mo.range = function(n, t, r) {
    if (arguments.length < 3 && (r = 1, arguments.length < 2 && (t = n, n = 0)), 1 / 0 === (t - n) / r) throw new Error("infinite range");
    var u, i = [],
      o = e(Math.abs(r)),
      a = -1;
    if (n *= o, t *= o, r *= o, 0 > r)
      for (;
        (u = n + r * ++a) > t;) i.push(u / o);
    else
      for (;
        (u = n + r * ++a) < t;) i.push(u / o);
    return i
  }, mo.map = function(n) {
    var t = new u;
    if (n instanceof u) n.forEach(function(n, e) {
      t.set(n, e)
    });
    else
      for (var e in n) t.set(e, n[e]);
    return t
  }, r(u, {
    has: function(n) {
      return zo + n in this
    },
    get: function(n) {
      return this[zo + n]
    },
    set: function(n, t) {
      return this[zo + n] = t
    },
    remove: function(n) {
      return n = zo + n, n in this && delete this[n]
    },
    keys: function() {
      var n = [];
      return this.forEach(function(t) {
        n.push(t)
      }), n
    },
    values: function() {
      var n = [];
      return this.forEach(function(t, e) {
        n.push(e)
      }), n
    },
    entries: function() {
      var n = [];
      return this.forEach(function(t, e) {
        n.push({
          key: t,
          value: e
        })
      }), n
    },
    forEach: function(n) {
      for (var t in this) t.charCodeAt(0) === Co && n.call(this, t.substring(1), this[t])
    }
  });
  var zo = "\0",
    Co = zo.charCodeAt(0);
  mo.nest = function() {
    function n(t, a, c) {
      if (c >= o.length) return r ? r.call(i, a) : e ? a.sort(e) : a;
      for (var l, s, f, h, g = -1, p = a.length, d = o[c++], v = new u; ++g < p;)(h = v.get(l = d(s = a[g]))) ? h.push(s) : v.set(l, [s]);
      return t ? (s = t(), f = function(e, r) {
        s.set(e, n(t, r, c))
      }) : (s = {}, f = function(e, r) {
        s[e] = n(t, r, c)
      }), v.forEach(f), s
    }

    function t(n, e) {
      if (e >= o.length) return n;
      var r = [],
        u = a[e++];
      return n.forEach(function(n, u) {
        r.push({
          key: n,
          values: t(u, e)
        })
      }), u ? r.sort(function(n, t) {
        return u(n.key, t.key)
      }) : r
    }
    var e, r, i = {}, o = [],
      a = [];
    return i.map = function(t, e) {
      return n(e, t, 0)
    }, i.entries = function(e) {
      return t(n(mo.map, e, 0), 0)
    }, i.key = function(n) {
      return o.push(n), i
    }, i.sortKeys = function(n) {
      return a[o.length - 1] = n, i
    }, i.sortValues = function(n) {
      return e = n, i
    }, i.rollup = function(n) {
      return r = n, i
    }, i
  }, mo.set = function(n) {
    var t = new i;
    if (n)
      for (var e = 0, r = n.length; r > e; ++e) t.add(n[e]);
    return t
  }, r(i, {
    has: function(n) {
      return zo + n in this
    },
    add: function(n) {
      return this[zo + n] = !0, n
    },
    remove: function(n) {
      return n = zo + n, n in this && delete this[n]
    },
    values: function() {
      var n = [];
      return this.forEach(function(t) {
        n.push(t)
      }), n
    },
    forEach: function(n) {
      for (var t in this) t.charCodeAt(0) === Co && n.call(this, t.substring(1))
    }
  }), mo.behavior = {}, mo.rebind = function(n, t) {
    for (var e, r = 1, u = arguments.length; ++r < u;) n[e = arguments[r]] = o(n, t, t[e]);
    return n
  };
  var Do = ["webkit", "ms", "moz", "Moz", "o", "O"];
  mo.dispatch = function() {
    for (var n = new l, t = -1, e = arguments.length; ++t < e;) n[arguments[t]] = s(n);
    return n
  }, l.prototype.on = function(n, t) {
    var e = n.indexOf("."),
      r = "";
    if (e >= 0 && (r = n.substring(e + 1), n = n.substring(0, e)), n) return arguments.length < 2 ? this[n].on(r) : this[n].on(r, t);
    if (2 === arguments.length) {
      if (null == t)
        for (n in this) this.hasOwnProperty(n) && this[n].on(r, null);
      return this
    }
  }, mo.event = null, mo.requote = function(n) {
    return n.replace(jo, "\\$&")
  };
  var jo = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
    Lo = {}.__proto__ ? function(n, t) {
      n.__proto__ = t
    } : function(n, t) {
      for (var e in t) n[e] = t[e]
    }, Ho = function(n, t) {
      return t.querySelector(n)
    }, Fo = function(n, t) {
      return t.querySelectorAll(n)
    }, Po = bo[a(bo, "matchesSelector")],
    Oo = function(n, t) {
      return Po.call(n, t)
    };
  "function" == typeof Sizzle && (Ho = function(n, t) {
    return Sizzle(n, t)[0] || null
  }, Fo = function(n, t) {
    return Sizzle.uniqueSort(Sizzle(n, t))
  }, Oo = Sizzle.matchesSelector), mo.selection = function() {
    return Uo
  };
  var Ro = mo.selection.prototype = [];
  Ro.select = function(n) {
    var t, e, r, u, i = [];
    n = d(n);
    for (var o = -1, a = this.length; ++o < a;) {
      i.push(t = []), t.parentNode = (r = this[o]).parentNode;
      for (var c = -1, l = r.length; ++c < l;)(u = r[c]) ? (t.push(e = n.call(u, u.__data__, c, o)), e && "__data__" in u && (e.__data__ = u.__data__)) : t.push(null)
    }
    return p(i)
  }, Ro.selectAll = function(n) {
    var t, e, r = [];
    n = v(n);
    for (var u = -1, i = this.length; ++u < i;)
      for (var o = this[u], a = -1, c = o.length; ++a < c;)(e = o[a]) && (r.push(t = Mo(n.call(e, e.__data__, a, u))), t.parentNode = e);
    return p(r)
  };
  var Yo = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  mo.ns = {
    prefix: Yo,
    qualify: function(n) {
      var t = n.indexOf(":"),
        e = n;
      return t >= 0 && (e = n.substring(0, t), n = n.substring(t + 1)), Yo.hasOwnProperty(e) ? {
        space: Yo[e],
        local: n
      } : n
    }
  }, Ro.attr = function(n, t) {
    if (arguments.length < 2) {
      if ("string" == typeof n) {
        var e = this.node();
        return n = mo.ns.qualify(n), n.local ? e.getAttributeNS(n.space, n.local) : e.getAttribute(n)
      }
      for (t in n) this.each(m(t, n[t]));
      return this
    }
    return this.each(m(n, t))
  }, Ro.classed = function(n, t) {
    if (arguments.length < 2) {
      if ("string" == typeof n) {
        var e = this.node(),
          r = (n = n.trim().split(/^|\s+/g)).length,
          u = -1;
        if (t = e.classList) {
          for (; ++u < r;)
            if (!t.contains(n[u])) return !1
        } else
          for (t = e.getAttribute("class"); ++u < r;)
            if (!M(n[u]).test(t)) return !1; return !0
      }
      for (t in n) this.each(x(t, n[t]));
      return this
    }
    return this.each(x(n, t))
  }, Ro.style = function(n, t, e) {
    var r = arguments.length;
    if (3 > r) {
      if ("string" != typeof n) {
        2 > r && (t = "");
        for (e in n) this.each(_(e, n[e], t));
        return this
      }
      if (2 > r) return _o.getComputedStyle(this.node(), null).getPropertyValue(n);
      e = ""
    }
    return this.each(_(n, t, e))
  }, Ro.property = function(n, t) {
    if (arguments.length < 2) {
      if ("string" == typeof n) return this.node()[n];
      for (t in n) this.each(w(t, n[t]));
      return this
    }
    return this.each(w(n, t))
  }, Ro.text = function(n) {
    return arguments.length ? this.each("function" == typeof n ? function() {
      var t = n.apply(this, arguments);
      this.textContent = null == t ? "" : t
    } : null == n ? function() {
      this.textContent = ""
    } : function() {
      this.textContent = n
    }) : this.node().textContent
  }, Ro.html = function(n) {
    return arguments.length ? this.each("function" == typeof n ? function() {
      var t = n.apply(this, arguments);
      this.innerHTML = null == t ? "" : t
    } : null == n ? function() {
      this.innerHTML = ""
    } : function() {
      this.innerHTML = n
    }) : this.node().innerHTML
  }, Ro.append = function(n) {
    return n = S(n), this.select(function() {
      return this.appendChild(n.apply(this, arguments))
    })
  }, Ro.insert = function(n, t) {
    return n = S(n), t = d(t), this.select(function() {
      return this.insertBefore(n.apply(this, arguments), t.apply(this, arguments))
    })
  }, Ro.remove = function() {
    return this.each(function() {
      var n = this.parentNode;
      n && n.removeChild(this)
    })
  }, Ro.data = function(n, t) {
    function e(n, e) {
      var r, i, o, a = n.length,
        f = e.length,
        h = Math.min(a, f),
        g = new Array(f),
        p = new Array(f),
        d = new Array(a);
      if (t) {
        var v, m = new u,
          y = new u,
          M = [];
        for (r = -1; ++r < a;) v = t.call(i = n[r], i.__data__, r), m.has(v) ? d[r] = i : m.set(v, i), M.push(v);
        for (r = -1; ++r < f;) v = t.call(e, o = e[r], r), (i = m.get(v)) ? (g[r] = i, i.__data__ = o) : y.has(v) || (p[r] = E(o)), y.set(v, o), m.remove(v);
        for (r = -1; ++r < a;) m.has(M[r]) && (d[r] = n[r])
      } else {
        for (r = -1; ++r < h;) i = n[r], o = e[r], i ? (i.__data__ = o, g[r] = i) : p[r] = E(o);
        for (; f > r; ++r) p[r] = E(e[r]);
        for (; a > r; ++r) d[r] = n[r]
      }
      p.update = g, p.parentNode = g.parentNode = d.parentNode = n.parentNode, c.push(p), l.push(g), s.push(d)
    }
    var r, i, o = -1,
      a = this.length;
    if (!arguments.length) {
      for (n = new Array(a = (r = this[0]).length); ++o < a;)(i = r[o]) && (n[o] = i.__data__);
      return n
    }
    var c = T([]),
      l = p([]),
      s = p([]);
    if ("function" == typeof n)
      for (; ++o < a;) e(r = this[o], n.call(r, r.parentNode.__data__, o));
    else
      for (; ++o < a;) e(r = this[o], n);
    return l.enter = function() {
      return c
    }, l.exit = function() {
      return s
    }, l
  }, Ro.datum = function(n) {
    return arguments.length ? this.property("__data__", n) : this.property("__data__")
  }, Ro.filter = function(n) {
    var t, e, r, u = [];
    "function" != typeof n && (n = k(n));
    for (var i = 0, o = this.length; o > i; i++) {
      u.push(t = []), t.parentNode = (e = this[i]).parentNode;
      for (var a = 0, c = e.length; c > a; a++)(r = e[a]) && n.call(r, r.__data__, a) && t.push(r)
    }
    return p(u)
  }, Ro.order = function() {
    for (var n = -1, t = this.length; ++n < t;)
      for (var e, r = this[n], u = r.length - 1, i = r[u]; --u >= 0;)(e = r[u]) && (i && i !== e.nextSibling && i.parentNode.insertBefore(e, i), i = e);
    return this
  }, Ro.sort = function(n) {
    n = A.apply(this, arguments);
    for (var t = -1, e = this.length; ++t < e;) this[t].sort(n);
    return this.order()
  }, Ro.each = function(n) {
    return N(this, function(t, e, r) {
      n.call(t, t.__data__, e, r)
    })
  }, Ro.call = function(n) {
    var t = Mo(arguments);
    return n.apply(t[0] = this, t), this
  }, Ro.empty = function() {
    return !this.node()
  }, Ro.node = function() {
    for (var n = 0, t = this.length; t > n; n++)
      for (var e = this[n], r = 0, u = e.length; u > r; r++) {
        var i = e[r];
        if (i) return i
      }
    return null
  }, Ro.size = function() {
    var n = 0;
    return this.each(function() {
      ++n
    }), n
  };
  var Io = [];
  mo.selection.enter = T, mo.selection.enter.prototype = Io, Io.append = Ro.append, Io.empty = Ro.empty, Io.node = Ro.node, Io.call = Ro.call, Io.size = Ro.size, Io.select = function(n) {
    for (var t, e, r, u, i, o = [], a = -1, c = this.length; ++a < c;) {
      r = (u = this[a]).update, o.push(t = []), t.parentNode = u.parentNode;
      for (var l = -1, s = u.length; ++l < s;)(i = u[l]) ? (t.push(r[l] = e = n.call(u.parentNode, i.__data__, l, a)), e.__data__ = i.__data__) : t.push(null)
    }
    return p(o)
  }, Io.insert = function(n, t) {
    return arguments.length < 2 && (t = q(this)), Ro.insert.call(this, n, t)
  }, Ro.transition = function() {
    for (var n, t, e = Pc || ++Uc, r = [], u = Oc || {
        time: Date.now(),
        ease: Cr,
        delay: 0,
        duration: 250
      }, i = -1, o = this.length; ++i < o;) {
      r.push(n = []);
      for (var a = this[i], c = -1, l = a.length; ++c < l;)(t = a[c]) && Ni(t, c, e, u), n.push(t)
    }
    return Ei(r, e)
  }, Ro.interrupt = function() {
    return this.each(z)
  }, mo.select = function(n) {
    var t = ["string" == typeof n ? Ho(n, xo) : n];
    return t.parentNode = bo, p([t])
  }, mo.selectAll = function(n) {
    var t = Mo("string" == typeof n ? Fo(n, xo) : n);
    return t.parentNode = bo, p([t])
  };
  var Uo = mo.select(bo);
  Ro.on = function(n, t, e) {
    var r = arguments.length;
    if (3 > r) {
      if ("string" != typeof n) {
        2 > r && (t = !1);
        for (e in n) this.each(C(e, n[e], t));
        return this
      }
      if (2 > r) return (r = this.node()["__on" + n]) && r._;
      e = !1
    }
    return this.each(C(n, t, e))
  };
  var Zo = mo.map({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  });
  Zo.forEach(function(n) {
    "on" + n in xo && Zo.remove(n)
  });
  var Vo = a(bo.style, "userSelect"),
    Xo = 0;
  mo.mouse = function(n) {
    return H(n, h())
  };
  var $o = /WebKit/.test(_o.navigator.userAgent) ? -1 : 0;
  mo.touches = function(n, t) {
    return arguments.length < 2 && (t = h().touches), t ? Mo(t).map(function(t) {
      var e = H(n, t);
      return e.identifier = t.identifier, e
    }) : []
  }, mo.behavior.drag = function() {
    function n() {
      this.on("mousedown.drag", o).on("touchstart.drag", a)
    }

    function t() {
      return mo.event.changedTouches[0].identifier
    }

    function e(n, t) {
      return mo.touches(n).filter(function(n) {
        return n.identifier === t
      })[0]
    }

    function r(n, t, e, r) {
      return function() {
        function o() {
          if (!s) return a();
          var n = t(s, g),
            e = n[0] - d[0],
            r = n[1] - d[1];
          v |= e | r, d = n, f({
            type: "drag",
            x: n[0] + c[0],
            y: n[1] + c[1],
            dx: e,
            dy: r
          })
        }

        function a() {
          m.on(e + "." + p, null).on(r + "." + p, null), y(v && mo.event.target === h), f({
            type: "dragend"
          })
        }
        var c, l = this,
          s = l.parentNode,
          f = u.of(l, arguments),
          h = mo.event.target,
          g = n(),
          p = null == g ? "drag" : "drag-" + g,
          d = t(s, g),
          v = 0,
          m = mo.select(_o).on(e + "." + p, o).on(r + "." + p, a),
          y = L();
        i ? (c = i.apply(l, arguments), c = [c.x - d[0], c.y - d[1]]) : c = [0, 0], f({
          type: "dragstart"
        })
      }
    }
    var u = g(n, "drag", "dragstart", "dragend"),
      i = null,
      o = r(c, mo.mouse, "mousemove", "mouseup"),
      a = r(t, e, "touchmove", "touchend");
    return n.origin = function(t) {
      return arguments.length ? (i = t, n) : i
    }, mo.rebind(n, u, "on")
  };
  var Bo = Math.PI,
    Wo = 1e-6,
    Jo = Wo * Wo,
    Go = Bo / 180,
    Ko = 180 / Bo,
    Qo = Math.SQRT2,
    na = 2,
    ta = 4;
  mo.interpolateZoom = function(n, t) {
    function e(n) {
      var t = n * y;
      if (m) {
        var e = Y(d),
          o = i / (na * h) * (e * I(Qo * t + d) - R(d));
        return [r + o * l, u + o * s, i * e / Y(Qo * t + d)]
      }
      return [r + n * l, u + n * s, i * Math.exp(Qo * t)]
    }
    var r = n[0],
      u = n[1],
      i = n[2],
      o = t[0],
      a = t[1],
      c = t[2],
      l = o - r,
      s = a - u,
      f = l * l + s * s,
      h = Math.sqrt(f),
      g = (c * c - i * i + ta * f) / (2 * i * na * h),
      p = (c * c - i * i - ta * f) / (2 * c * na * h),
      d = Math.log(Math.sqrt(g * g + 1) - g),
      v = Math.log(Math.sqrt(p * p + 1) - p),
      m = v - d,
      y = (m || Math.log(c / i)) / Qo;
    return e.duration = 1e3 * y, e
  }, mo.behavior.zoom = function() {
    function n(n) {
      n.on(A, l).on(ua + ".zoom", h).on(N, p).on("dblclick.zoom", d).on(q, s)
    }

    function t(n) {
      return [(n[0] - S.x) / S.k, (n[1] - S.y) / S.k]
    }

    function e(n) {
      return [n[0] * S.k + S.x, n[1] * S.k + S.y]
    }

    function r(n) {
      S.k = Math.max(k[0], Math.min(k[1], n))
    }

    function u(n, t) {
      t = e(t), S.x += n[0] - t[0], S.y += n[1] - t[1]
    }

    function i() {
      b && b.domain(x.range().map(function(n) {
        return (n - S.x) / S.k
      }).map(x.invert)), w && w.domain(_.range().map(function(n) {
        return (n - S.y) / S.k
      }).map(_.invert))
    }

    function o(n) {
      n({
        type: "zoomstart"
      })
    }

    function a(n) {
      i(), n({
        type: "zoom",
        scale: S.k,
        translate: [S.x, S.y]
      })
    }

    function c(n) {
      n({
        type: "zoomend"
      })
    }

    function l() {
      function n() {
        s = 1, u(mo.mouse(r), h), a(i)
      }

      function e() {
        f.on(N, _o === r ? p : null).on(T, null), g(s && mo.event.target === l), c(i)
      }
      var r = this,
        i = C.of(r, arguments),
        l = mo.event.target,
        s = 0,
        f = mo.select(_o).on(N, n).on(T, e),
        h = t(mo.mouse(r)),
        g = L();
      z.call(r), o(i)
    }

    function s() {
      function n() {
        var n = mo.touches(p);
        return g = S.k, n.forEach(function(n) {
          n.identifier in v && (v[n.identifier] = t(n))
        }), n
      }

      function e() {
        for (var t = mo.event.changedTouches, e = 0, i = t.length; i > e; ++e) v[t[e].identifier] = null;
        var o = n(),
          c = Date.now();
        if (1 === o.length) {
          if (500 > c - M) {
            var l = o[0],
              s = v[l.identifier];
            r(2 * S.k), u(l, s), f(), a(d)
          }
          M = c
        } else if (o.length > 1) {
          var l = o[0],
            h = o[1],
            g = l[0] - h[0],
            p = l[1] - h[1];
          m = g * g + p * p
        }
      }

      function i() {
        for (var n, t, e, i, o = mo.touches(p), c = 0, l = o.length; l > c; ++c, i = null)
          if (e = o[c], i = v[e.identifier]) {
            if (t) break;
            n = e, t = i
          }
        if (i) {
          var s = (s = e[0] - n[0]) * s + (s = e[1] - n[1]) * s,
            f = m && Math.sqrt(s / m);
          n = [(n[0] + e[0]) / 2, (n[1] + e[1]) / 2], t = [(t[0] + i[0]) / 2, (t[1] + i[1]) / 2], r(f * g)
        }
        M = null, u(n, t), a(d)
      }

      function h() {
        if (mo.event.touches.length) {
          for (var t = mo.event.changedTouches, e = 0, r = t.length; r > e; ++e) delete v[t[e].identifier];
          for (var u in v) return void n()
        }
        _.on(x, null).on(b, null), w.on(A, l).on(q, s), E(), c(d)
      }
      var g, p = this,
        d = C.of(p, arguments),
        v = {}, m = 0,
        y = mo.event.changedTouches[0].identifier,
        x = "touchmove.zoom-" + y,
        b = "touchend.zoom-" + y,
        _ = mo.select(_o).on(x, i).on(b, h),
        w = mo.select(p).on(A, null).on(q, e),
        E = L();
      z.call(p), e(), o(d)
    }

    function h() {
      var n = C.of(this, arguments);
      y ? clearTimeout(y) : (z.call(this), o(n)), y = setTimeout(function() {
        y = null, c(n)
      }, 50), f();
      var e = m || mo.mouse(this);
      v || (v = t(e)), r(Math.pow(2, .002 * ea()) * S.k), u(e, v), a(n)
    }

    function p() {
      v = null
    }

    function d() {
      var n = C.of(this, arguments),
        e = mo.mouse(this),
        i = t(e),
        l = Math.log(S.k) / Math.LN2;
      o(n), r(Math.pow(2, mo.event.shiftKey ? Math.ceil(l) - 1 : Math.floor(l) + 1)), u(e, i), a(n), c(n)
    }
    var v, m, y, M, x, b, _, w, S = {
        x: 0,
        y: 0,
        k: 1
      }, E = [960, 500],
      k = ra,
      A = "mousedown.zoom",
      N = "mousemove.zoom",
      T = "mouseup.zoom",
      q = "touchstart.zoom",
      C = g(n, "zoomstart", "zoom", "zoomend");
    return n.event = function(n) {
      n.each(function() {
        var n = C.of(this, arguments),
          t = S;
        Pc ? mo.select(this).transition().each("start.zoom", function() {
          S = this.__chart__ || {
            x: 0,
            y: 0,
            k: 1
          }, o(n)
        }).tween("zoom:zoom", function() {
          var e = E[0],
            r = E[1],
            u = e / 2,
            i = r / 2,
            o = mo.interpolateZoom([(u - S.x) / S.k, (i - S.y) / S.k, e / S.k], [(u - t.x) / t.k, (i - t.y) / t.k, e / t.k]);
          return function(t) {
            var r = o(t),
              c = e / r[2];
            this.__chart__ = S = {
              x: u - r[0] * c,
              y: i - r[1] * c,
              k: c
            }, a(n)
          }
        }).each("end.zoom", function() {
          c(n)
        }) : (this.__chart__ = S, o(n), a(n), c(n))
      })
    }, n.translate = function(t) {
      return arguments.length ? (S = {
        x: +t[0],
        y: +t[1],
        k: S.k
      }, i(), n) : [S.x, S.y]
    }, n.scale = function(t) {
      return arguments.length ? (S = {
        x: S.x,
        y: S.y,
        k: +t
      }, i(), n) : S.k
    }, n.scaleExtent = function(t) {
      return arguments.length ? (k = null == t ? ra : [+t[0], +t[1]], n) : k
    }, n.center = function(t) {
      return arguments.length ? (m = t && [+t[0], +t[1]], n) : m
    }, n.size = function(t) {
      return arguments.length ? (E = t && [+t[0], +t[1]], n) : E
    }, n.x = function(t) {
      return arguments.length ? (b = t, x = t.copy(), S = {
        x: 0,
        y: 0,
        k: 1
      }, n) : b
    }, n.y = function(t) {
      return arguments.length ? (w = t, _ = t.copy(), S = {
        x: 0,
        y: 0,
        k: 1
      }, n) : w
    }, mo.rebind(n, C, "on")
  };
  var ea, ra = [0, 1 / 0],
    ua = "onwheel" in xo ? (ea = function() {
      return -mo.event.deltaY * (mo.event.deltaMode ? 120 : 1)
    }, "wheel") : "onmousewheel" in xo ? (ea = function() {
      return mo.event.wheelDelta
    }, "mousewheel") : (ea = function() {
      return -mo.event.detail
    }, "MozMousePixelScroll");
  Z.prototype.toString = function() {
    return this.rgb() + ""
  }, mo.hsl = function(n, t, e) {
    return 1 === arguments.length ? n instanceof X ? V(n.h, n.s, n.l) : lt("" + n, st, V) : V(+n, +t, +e)
  };
  var ia = X.prototype = new Z;
  ia.brighter = function(n) {
    return n = Math.pow(.7, arguments.length ? n : 1), V(this.h, this.s, this.l / n)
  }, ia.darker = function(n) {
    return n = Math.pow(.7, arguments.length ? n : 1), V(this.h, this.s, n * this.l)
  }, ia.rgb = function() {
    return $(this.h, this.s, this.l)
  }, mo.hcl = function(n, t, e) {
    return 1 === arguments.length ? n instanceof W ? B(n.h, n.c, n.l) : n instanceof K ? nt(n.l, n.a, n.b) : nt((n = ft((n = mo.rgb(n)).r, n.g, n.b)).l, n.a, n.b) : B(+n, +t, +e)
  };
  var oa = W.prototype = new Z;
  oa.brighter = function(n) {
    return B(this.h, this.c, Math.min(100, this.l + aa * (arguments.length ? n : 1)))
  }, oa.darker = function(n) {
    return B(this.h, this.c, Math.max(0, this.l - aa * (arguments.length ? n : 1)))
  }, oa.rgb = function() {
    return J(this.h, this.c, this.l).rgb()
  }, mo.lab = function(n, t, e) {
    return 1 === arguments.length ? n instanceof K ? G(n.l, n.a, n.b) : n instanceof W ? J(n.l, n.c, n.h) : ft((n = mo.rgb(n)).r, n.g, n.b) : G(+n, +t, +e)
  };
  var aa = 18,
    ca = .95047,
    la = 1,
    sa = 1.08883,
    fa = K.prototype = new Z;
  fa.brighter = function(n) {
    return G(Math.min(100, this.l + aa * (arguments.length ? n : 1)), this.a, this.b)
  }, fa.darker = function(n) {
    return G(Math.max(0, this.l - aa * (arguments.length ? n : 1)), this.a, this.b)
  }, fa.rgb = function() {
    return Q(this.l, this.a, this.b)
  }, mo.rgb = function(n, t, e) {
    return 1 === arguments.length ? n instanceof at ? ot(n.r, n.g, n.b) : lt("" + n, ot, $) : ot(~~n, ~~t, ~~e)
  };
  var ha = at.prototype = new Z;
  ha.brighter = function(n) {
    n = Math.pow(.7, arguments.length ? n : 1);
    var t = this.r,
      e = this.g,
      r = this.b,
      u = 30;
    return t || e || r ? (t && u > t && (t = u), e && u > e && (e = u), r && u > r && (r = u), ot(Math.min(255, ~~ (t / n)), Math.min(255, ~~ (e / n)), Math.min(255, ~~ (r / n)))) : ot(u, u, u)
  }, ha.darker = function(n) {
    return n = Math.pow(.7, arguments.length ? n : 1), ot(~~(n * this.r), ~~ (n * this.g), ~~ (n * this.b))
  }, ha.hsl = function() {
    return st(this.r, this.g, this.b)
  }, ha.toString = function() {
    return "#" + ct(this.r) + ct(this.g) + ct(this.b)
  };
  var ga = mo.map({
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  });
  ga.forEach(function(n, t) {
    ga.set(n, ut(t))
  }), mo.functor = pt, mo.xhr = vt(dt), mo.dsv = function(n, t) {
    function e(n, e, i) {
      arguments.length < 3 && (i = e, e = null);
      var o = mo.xhr(n, t, i);
      return o.row = function(n) {
        return arguments.length ? o.response(null == (e = n) ? r : u(n)) : e
      }, o.row(e)
    }

    function r(n) {
      return e.parse(n.responseText)
    }

    function u(n) {
      return function(t) {
        return e.parse(t.responseText, n)
      }
    }

    function o(t) {
      return t.map(a).join(n)
    }

    function a(n) {
      return c.test(n) ? '"' + n.replace(/\"/g, '""') + '"' : n
    }
    var c = new RegExp('["' + n + "\n]"),
      l = n.charCodeAt(0);
    return e.parse = function(n, t) {
      var r;
      return e.parseRows(n, function(n, e) {
        if (r) return r(n, e - 1);
        var u = new Function("d", "return {" + n.map(function(n, t) {
          return JSON.stringify(n) + ": d[" + t + "]"
        }).join(",") + "}");
        r = t ? function(n, e) {
          return t(u(n), e)
        } : u
      })
    }, e.parseRows = function(n, t) {
      function e() {
        if (s >= c) return o;
        if (u) return u = !1, i;
        var t = s;
        if (34 === n.charCodeAt(t)) {
          for (var e = t; e++ < c;)
            if (34 === n.charCodeAt(e)) {
              if (34 !== n.charCodeAt(e + 1)) break;
              ++e
            }
          s = e + 2;
          var r = n.charCodeAt(e + 1);
          return 13 === r ? (u = !0, 10 === n.charCodeAt(e + 2) && ++s) : 10 === r && (u = !0), n.substring(t + 1, e).replace(/""/g, '"')
        }
        for (; c > s;) {
          var r = n.charCodeAt(s++),
            a = 1;
          if (10 === r) u = !0;
          else if (13 === r) u = !0, 10 === n.charCodeAt(s) && (++s, ++a);
          else if (r !== l) continue;
          return n.substring(t, s - a)
        }
        return n.substring(t)
      }
      for (var r, u, i = {}, o = {}, a = [], c = n.length, s = 0, f = 0;
        (r = e()) !== o;) {
        for (var h = []; r !== i && r !== o;) h.push(r), r = e();
        (!t || (h = t(h, f++))) && a.push(h)
      }
      return a
    }, e.format = function(t) {
      if (Array.isArray(t[0])) return e.formatRows(t);
      var r = new i,
        u = [];
      return t.forEach(function(n) {
        for (var t in n) r.has(t) || u.push(r.add(t))
      }), [u.map(a).join(n)].concat(t.map(function(t) {
        return u.map(function(n) {
          return a(t[n])
        }).join(n)
      })).join("\n")
    }, e.formatRows = function(n) {
      return n.map(o).join("\n")
    }, e
  }, mo.csv = mo.dsv(",", "text/csv"), mo.tsv = mo.dsv("  ", "text/tab-separated-values");
  var pa, da, va, ma, ya, Ma = _o[a(_o, "requestAnimationFrame")] || function(n) {
      setTimeout(n, 17)
    };
  mo.timer = function(n, t, e) {
    var r = arguments.length;
    2 > r && (t = 0), 3 > r && (e = Date.now());
    var u = e + t,
      i = {
        callback: n,
        time: u,
        next: null
      };
    da ? da.next = i : pa = i, da = i, va || (ma = clearTimeout(ma), va = 1, Ma(Mt))
  }, mo.timer.flush = function() {
    bt(), _t()
  };
  var xa = ".",
    ba = ",",
    _a = [3, 3],
    wa = "$",
    Sa = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(wt);
  mo.formatPrefix = function(n, t) {
    var e = 0;
    return n && (0 > n && (n *= -1), t && (n = mo.round(n, St(n, t))), e = 1 + Math.floor(1e-12 + Math.log(n) / Math.LN10), e = Math.max(-24, Math.min(24, 3 * Math.floor((0 >= e ? e + 1 : e - 1) / 3)))), Sa[8 + e / 3]
  }, mo.round = function(n, t) {
    return t ? Math.round(n * (t = Math.pow(10, t))) / t : Math.round(n)
  }, mo.format = function(n) {
    var t = Ea.exec(n),
      e = t[1] || " ",
      r = t[2] || ">",
      u = t[3] || "",
      i = t[4] || "",
      o = t[5],
      a = +t[6],
      c = t[7],
      l = t[8],
      s = t[9],
      f = 1,
      h = "",
      g = !1;
    switch (l && (l = +l.substring(1)), (o || "0" === e && "=" === r) && (o = e = "0", r = "=", c && (a -= Math.floor((a - 1) / 4))), s) {
      case "n":
        c = !0, s = "g";
        break;
      case "%":
        f = 100, h = "%", s = "f";
        break;
      case "p":
        f = 100, h = "%", s = "r";
        break;
      case "b":
      case "o":
      case "x":
      case "X":
        "#" === i && (i = "0" + s.toLowerCase());
      case "c":
      case "d":
        g = !0, l = 0;
        break;
      case "s":
        f = -1, s = "r"
    }
    "#" === i ? i = "" : "$" === i && (i = wa), "r" != s || l || (s = "g"), null != l && ("g" == s ? l = Math.max(1, Math.min(21, l)) : ("e" == s || "f" == s) && (l = Math.max(0, Math.min(20, l)))), s = ka.get(s) || Et;
    var p = o && c;
    return function(n) {
      if (g && n % 1) return "";
      var t = 0 > n || 0 === n && 0 > 1 / n ? (n = -n, "-") : u;
      if (0 > f) {
        var d = mo.formatPrefix(n, l);
        n = d.scale(n), h = d.symbol
      } else n *= f;
      n = s(n, l);
      var v = n.lastIndexOf("."),
        m = 0 > v ? n : n.substring(0, v),
        y = 0 > v ? "" : xa + n.substring(v + 1);
      !o && c && (m = Aa(m));
      var M = i.length + m.length + y.length + (p ? 0 : t.length),
        x = a > M ? new Array(M = a - M + 1).join(e) : "";
      return p && (m = Aa(x + m)), t += i, n = m + y, ("<" === r ? t + n + x : ">" === r ? x + t + n : "^" === r ? x.substring(0, M >>= 1) + t + n + x.substring(M) : t + (p ? n : x + n)) + h
    }
  };
  var Ea = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
    ka = mo.map({
      b: function(n) {
        return n.toString(2)
      },
      c: function(n) {
        return String.fromCharCode(n)
      },
      o: function(n) {
        return n.toString(8)
      },
      x: function(n) {
        return n.toString(16)
      },
      X: function(n) {
        return n.toString(16).toUpperCase()
      },
      g: function(n, t) {
        return n.toPrecision(t)
      },
      e: function(n, t) {
        return n.toExponential(t)
      },
      f: function(n, t) {
        return n.toFixed(t)
      },
      r: function(n, t) {
        return (n = mo.round(n, St(n, t))).toFixed(Math.max(0, Math.min(20, St(n * (1 + 1e-15), t))))
      }
    }),
    Aa = dt;
  if (_a) {
    var Na = _a.length;
    Aa = function(n) {
      for (var t = n.length, e = [], r = 0, u = _a[0]; t > 0 && u > 0;) e.push(n.substring(t -= u, t + u)), u = _a[r = (r + 1) % Na];
      return e.reverse().join(ba)
    }
  }
  mo.geo = {}, kt.prototype = {
    s: 0,
    t: 0,
    add: function(n) {
      At(n, this.t, Ta), At(Ta.s, this.s, this), this.s ? this.t += Ta.t : this.s = Ta.t
    },
    reset: function() {
      this.s = this.t = 0
    },
    valueOf: function() {
      return this.s
    }
  };
  var Ta = new kt;
  mo.geo.stream = function(n, t) {
    n && qa.hasOwnProperty(n.type) ? qa[n.type](n, t) : Nt(n, t)
  };
  var qa = {
    Feature: function(n, t) {
      Nt(n.geometry, t)
    },
    FeatureCollection: function(n, t) {
      for (var e = n.features, r = -1, u = e.length; ++r < u;) Nt(e[r].geometry, t)
    }
  }, za = {
      Sphere: function(n, t) {
        t.sphere()
      },
      Point: function(n, t) {
        n = n.coordinates, t.point(n[0], n[1], n[2])
      },
      MultiPoint: function(n, t) {
        for (var e = n.coordinates, r = -1, u = e.length; ++r < u;) n = e[r], t.point(n[0], n[1], n[2])
      },
      LineString: function(n, t) {
        Tt(n.coordinates, t, 0)
      },
      MultiLineString: function(n, t) {
        for (var e = n.coordinates, r = -1, u = e.length; ++r < u;) Tt(e[r], t, 0)
      },
      Polygon: function(n, t) {
        qt(n.coordinates, t)
      },
      MultiPolygon: function(n, t) {
        for (var e = n.coordinates, r = -1, u = e.length; ++r < u;) qt(e[r], t)
      },
      GeometryCollection: function(n, t) {
        for (var e = n.geometries, r = -1, u = e.length; ++r < u;) Nt(e[r], t)
      }
    };
  mo.geo.area = function(n) {
    return Ca = 0, mo.geo.stream(n, ja), Ca
  };
  var Ca, Da = new kt,
    ja = {
      sphere: function() {
        Ca += 4 * Bo
      },
      point: c,
      lineStart: c,
      lineEnd: c,
      polygonStart: function() {
        Da.reset(), ja.lineStart = zt
      },
      polygonEnd: function() {
        var n = 2 * Da;
        Ca += 0 > n ? 4 * Bo + n : n, ja.lineStart = ja.lineEnd = ja.point = c
      }
    };
  mo.geo.bounds = function() {
    function n(n, t) {
      M.push(x = [s = n, h = n]), f > t && (f = t), t > g && (g = t)
    }

    function t(t, e) {
      var r = Ct([t * Go, e * Go]);
      if (m) {
        var u = jt(m, r),
          i = [u[1], -u[0], 0],
          o = jt(i, u);
        Ft(o), o = Pt(o);
        var c = t - p,
          l = c > 0 ? 1 : -1,
          d = o[0] * Ko * l,
          v = Math.abs(c) > 180;
        if (v ^ (d > l * p && l * t > d)) {
          var y = o[1] * Ko;
          y > g && (g = y)
        } else if (d = (d + 360) % 360 - 180, v ^ (d > l * p && l * t > d)) {
          var y = -o[1] * Ko;
          f > y && (f = y)
        } else f > e && (f = e), e > g && (g = e);
        v ? p > t ? a(s, t) > a(s, h) && (h = t) : a(t, h) > a(s, h) && (s = t) : h >= s ? (s > t && (s = t), t > h && (h = t)) : t > p ? a(s, t) > a(s, h) && (h = t) : a(t, h) > a(s, h) && (s = t)
      } else n(t, e);
      m = r, p = t
    }

    function e() {
      b.point = t
    }

    function r() {
      x[0] = s, x[1] = h, b.point = n, m = null
    }

    function u(n, e) {
      if (m) {
        var r = n - p;
        y += Math.abs(r) > 180 ? r + (r > 0 ? 360 : -360) : r
      } else d = n, v = e;
      ja.point(n, e), t(n, e)
    }

    function i() {
      ja.lineStart()
    }

    function o() {
      u(d, v), ja.lineEnd(), Math.abs(y) > Wo && (s = -(h = 180)), x[0] = s, x[1] = h, m = null
    }

    function a(n, t) {
      return (t -= n) < 0 ? t + 360 : t
    }

    function c(n, t) {
      return n[0] - t[0]
    }

    function l(n, t) {
      return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
    }
    var s, f, h, g, p, d, v, m, y, M, x, b = {
        point: n,
        lineStart: e,
        lineEnd: r,
        polygonStart: function() {
          b.point = u, b.lineStart = i, b.lineEnd = o, y = 0, ja.polygonStart()
        },
        polygonEnd: function() {
          ja.polygonEnd(), b.point = n, b.lineStart = e, b.lineEnd = r, 0 > Da ? (s = -(h = 180), f = -(g = 90)) : y > Wo ? g = 90 : -Wo > y && (f = -90), x[0] = s, x[1] = h
        }
      };
    return function(n) {
      g = h = -(s = f = 1 / 0), M = [], mo.geo.stream(n, b);
      var t = M.length;
      if (t) {
        M.sort(c);
        for (var e, r = 1, u = M[0], i = [u]; t > r; ++r) e = M[r], l(e[0], u) || l(e[1], u) ? (a(u[0], e[1]) > a(u[0], u[1]) && (u[1] = e[1]), a(e[0], u[1]) > a(u[0], u[1]) && (u[0] = e[0])) : i.push(u = e);
        for (var o, e, p = -1 / 0, t = i.length - 1, r = 0, u = i[t]; t >= r; u = e, ++r) e = i[r], (o = a(u[1], e[0])) > p && (p = o, s = e[0], h = u[1])
      }
      return M = x = null, 1 / 0 === s || 1 / 0 === f ? [
        [0 / 0, 0 / 0],
        [0 / 0, 0 / 0]
      ] : [
        [s, f],
        [h, g]
      ]
    }
  }(), mo.geo.centroid = function(n) {
    La = Ha = Fa = Pa = Oa = Ra = Ya = Ia = Ua = Za = Va = 0, mo.geo.stream(n, Xa);
    var t = Ua,
      e = Za,
      r = Va,
      u = t * t + e * e + r * r;
    return Jo > u && (t = Ra, e = Ya, r = Ia, Wo > Ha && (t = Fa, e = Pa, r = Oa), u = t * t + e * e + r * r, Jo > u) ? [0 / 0, 0 / 0] : [Math.atan2(e, t) * Ko, O(r / Math.sqrt(u)) * Ko]
  };
  var La, Ha, Fa, Pa, Oa, Ra, Ya, Ia, Ua, Za, Va, Xa = {
      sphere: c,
      point: Rt,
      lineStart: It,
      lineEnd: Ut,
      polygonStart: function() {
        Xa.lineStart = Zt
      },
      polygonEnd: function() {
        Xa.lineStart = It
      }
    }, $a = Bt(Vt, Qt, te, ee),
    Ba = [-Bo, 0],
    Wa = 1e9;
  mo.geo.clipExtent = function() {
    var n, t, e, r, u, i, o = {
        stream: function(n) {
          return u && (u.valid = !1), u = i(n), u.valid = !0, u
        },
        extent: function(a) {
          return arguments.length ? (i = ue(n = +a[0][0], t = +a[0][1], e = +a[1][0], r = +a[1][1]), u && (u.valid = !1, u = null), o) : [
            [n, t],
            [e, r]
          ]
        }
      };
    return o.extent([
      [0, 0],
      [960, 500]
    ])
  }, (mo.geo.conicEqualArea = function() {
    return ae(ce)
  }).raw = ce, mo.geo.albers = function() {
    return mo.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
  }, mo.geo.albersUsa = function() {
    function n(n) {
      var i = n[0],
        o = n[1];
      return t = null, e(i, o), t || (r(i, o), t) || u(i, o), t
    }
    var t, e, r, u, i = mo.geo.albers(),
      o = mo.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
      a = mo.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
      c = {
        point: function(n, e) {
          t = [n, e]
        }
      };
    return n.invert = function(n) {
      var t = i.scale(),
        e = i.translate(),
        r = (n[0] - e[0]) / t,
        u = (n[1] - e[1]) / t;
      return (u >= .12 && .234 > u && r >= -.425 && -.214 > r ? o : u >= .166 && .234 > u && r >= -.214 && -.115 > r ? a : i).invert(n)
    }, n.stream = function(n) {
      var t = i.stream(n),
        e = o.stream(n),
        r = a.stream(n);
      return {
        point: function(n, u) {
          t.point(n, u), e.point(n, u), r.point(n, u)
        },
        sphere: function() {
          t.sphere(), e.sphere(), r.sphere()
        },
        lineStart: function() {
          t.lineStart(), e.lineStart(), r.lineStart()
        },
        lineEnd: function() {
          t.lineEnd(), e.lineEnd(), r.lineEnd()
        },
        polygonStart: function() {
          t.polygonStart(), e.polygonStart(), r.polygonStart()
        },
        polygonEnd: function() {
          t.polygonEnd(), e.polygonEnd(), r.polygonEnd()
        }
      }
    }, n.precision = function(t) {
      return arguments.length ? (i.precision(t), o.precision(t), a.precision(t), n) : i.precision()
    }, n.scale = function(t) {
      return arguments.length ? (i.scale(t), o.scale(.35 * t), a.scale(t), n.translate(i.translate())) : i.scale()
    }, n.translate = function(t) {
      if (!arguments.length) return i.translate();
      var l = i.scale(),
        s = +t[0],
        f = +t[1];
      return e = i.translate(t).clipExtent([
        [s - .455 * l, f - .238 * l],
        [s + .455 * l, f + .238 * l]
      ]).stream(c).point, r = o.translate([s - .307 * l, f + .201 * l]).clipExtent([
        [s - .425 * l + Wo, f + .12 * l + Wo],
        [s - .214 * l - Wo, f + .234 * l - Wo]
      ]).stream(c).point, u = a.translate([s - .205 * l, f + .212 * l]).clipExtent([
        [s - .214 * l + Wo, f + .166 * l + Wo],
        [s - .115 * l - Wo, f + .234 * l - Wo]
      ]).stream(c).point, n
    }, n.scale(1070)
  };
  var Ja, Ga, Ka, Qa, nc, tc, ec = {
      point: c,
      lineStart: c,
      lineEnd: c,
      polygonStart: function() {
        Ga = 0, ec.lineStart = le
      },
      polygonEnd: function() {
        ec.lineStart = ec.lineEnd = ec.point = c, Ja += Math.abs(Ga / 2)
      }
    }, rc = {
      point: se,
      lineStart: c,
      lineEnd: c,
      polygonStart: c,
      polygonEnd: c
    }, uc = {
      point: ge,
      lineStart: pe,
      lineEnd: de,
      polygonStart: function() {
        uc.lineStart = ve
      },
      polygonEnd: function() {
        uc.point = ge, uc.lineStart = pe, uc.lineEnd = de
      }
    };
  mo.geo.transform = function(n) {
    return {
      stream: function(t) {
        var e = new Me(t);
        for (var r in n) e[r] = n[r];
        return e
      }
    }
  }, Me.prototype = {
    point: function(n, t) {
      this.stream.point(n, t)
    },
    sphere: function() {
      this.stream.sphere()
    },
    lineStart: function() {
      this.stream.lineStart()
    },
    lineEnd: function() {
      this.stream.lineEnd()
    },
    polygonStart: function() {
      this.stream.polygonStart()
    },
    polygonEnd: function() {
      this.stream.polygonEnd()
    }
  }, mo.geo.path = function() {
    function n(n) {
      return n && ("function" == typeof a && i.pointRadius(+a.apply(this, arguments)), o && o.valid || (o = u(i)), mo.geo.stream(n, o)), i.result()
    }

    function t() {
      return o = null, n
    }
    var e, r, u, i, o, a = 4.5;
    return n.area = function(n) {
      return Ja = 0, mo.geo.stream(n, u(ec)), Ja
    }, n.centroid = function(n) {
      return Fa = Pa = Oa = Ra = Ya = Ia = Ua = Za = Va = 0, mo.geo.stream(n, u(uc)), Va ? [Ua / Va, Za / Va] : Ia ? [Ra / Ia, Ya / Ia] : Oa ? [Fa / Oa, Pa / Oa] : [0 / 0, 0 / 0]
    }, n.bounds = function(n) {
      return nc = tc = -(Ka = Qa = 1 / 0), mo.geo.stream(n, u(rc)), [
        [Ka, Qa],
        [nc, tc]
      ]
    }, n.projection = function(n) {
      return arguments.length ? (u = (e = n) ? n.stream || xe(n) : dt, t()) : e
    }, n.context = function(n) {
      return arguments.length ? (i = null == (r = n) ? new fe : new me(n), "function" != typeof a && i.pointRadius(a), t()) : r
    }, n.pointRadius = function(t) {
      return arguments.length ? (a = "function" == typeof t ? t : (i.pointRadius(+t), +t), n) : a
    }, n.projection(mo.geo.albersUsa()).context(null)
  }, mo.geo.projection = be, mo.geo.projectionMutator = _e, (mo.geo.equirectangular = function() {
    return be(Se)
  }).raw = Se.invert = Se, mo.geo.rotation = function(n) {
    function t(t) {
      return t = n(t[0] * Go, t[1] * Go), t[0] *= Ko, t[1] *= Ko, t
    }
    return n = Ee(n[0] % 360 * Go, n[1] * Go, n.length > 2 ? n[2] * Go : 0), t.invert = function(t) {
      return t = n.invert(t[0] * Go, t[1] * Go), t[0] *= Ko, t[1] *= Ko, t
    }, t
  }, mo.geo.circle = function() {
    function n() {
      var n = "function" == typeof r ? r.apply(this, arguments) : r,
        t = Ee(-n[0] * Go, -n[1] * Go, 0).invert,
        u = [];
      return e(null, null, 1, {
        point: function(n, e) {
          u.push(n = t(n, e)), n[0] *= Ko, n[1] *= Ko
        }
      }), {
        type: "Polygon",
        coordinates: [u]
      }
    }
    var t, e, r = [0, 0],
      u = 6;
    return n.origin = function(t) {
      return arguments.length ? (r = t, n) : r
    }, n.angle = function(r) {
      return arguments.length ? (e = Te((t = +r) * Go, u * Go), n) : t
    }, n.precision = function(r) {
      return arguments.length ? (e = Te(t * Go, (u = +r) * Go), n) : u
    }, n.angle(90)
  }, mo.geo.distance = function(n, t) {
    var e, r = (t[0] - n[0]) * Go,
      u = n[1] * Go,
      i = t[1] * Go,
      o = Math.sin(r),
      a = Math.cos(r),
      c = Math.sin(u),
      l = Math.cos(u),
      s = Math.sin(i),
      f = Math.cos(i);
    return Math.atan2(Math.sqrt((e = f * o) * e + (e = l * s - c * f * a) * e), c * s + l * f * a)
  }, mo.geo.graticule = function() {
    function n() {
      return {
        type: "MultiLineString",
        coordinates: t()
      }
    }

    function t() {
      return mo.range(Math.ceil(i / v) * v, u, v).map(h).concat(mo.range(Math.ceil(l / m) * m, c, m).map(g)).concat(mo.range(Math.ceil(r / p) * p, e, p).filter(function(n) {
        return Math.abs(n % v) > Wo
      }).map(s)).concat(mo.range(Math.ceil(a / d) * d, o, d).filter(function(n) {
        return Math.abs(n % m) > Wo
      }).map(f))
    }
    var e, r, u, i, o, a, c, l, s, f, h, g, p = 10,
      d = p,
      v = 90,
      m = 360,
      y = 2.5;
    return n.lines = function() {
      return t().map(function(n) {
        return {
          type: "LineString",
          coordinates: n
        }
      })
    }, n.outline = function() {
      return {
        type: "Polygon",
        coordinates: [h(i).concat(g(c).slice(1), h(u).reverse().slice(1), g(l).reverse().slice(1))]
      }
    }, n.extent = function(t) {
      return arguments.length ? n.majorExtent(t).minorExtent(t) : n.minorExtent()
    }, n.majorExtent = function(t) {
      return arguments.length ? (i = +t[0][0], u = +t[1][0], l = +t[0][1], c = +t[1][1], i > u && (t = i, i = u, u = t), l > c && (t = l, l = c, c = t), n.precision(y)) : [
        [i, l],
        [u, c]
      ]
    }, n.minorExtent = function(t) {
      return arguments.length ? (r = +t[0][0], e = +t[1][0], a = +t[0][1], o = +t[1][1], r > e && (t = r, r = e, e = t), a > o && (t = a, a = o, o = t), n.precision(y)) : [
        [r, a],
        [e, o]
      ]
    }, n.step = function(t) {
      return arguments.length ? n.majorStep(t).minorStep(t) : n.minorStep()
    }, n.majorStep = function(t) {
      return arguments.length ? (v = +t[0], m = +t[1], n) : [v, m]
    }, n.minorStep = function(t) {
      return arguments.length ? (p = +t[0], d = +t[1], n) : [p, d]
    }, n.precision = function(t) {
      return arguments.length ? (y = +t, s = ze(a, o, 90), f = Ce(r, e, y), h = ze(l, c, 90), g = Ce(i, u, y), n) : y
    }, n.majorExtent([
      [-180, -90 + Wo],
      [180, 90 - Wo]
    ]).minorExtent([
      [-180, -80 - Wo],
      [180, 80 + Wo]
    ])
  }, mo.geo.greatArc = function() {
    function n() {
      return {
        type: "LineString",
        coordinates: [t || r.apply(this, arguments), e || u.apply(this, arguments)]
      }
    }
    var t, e, r = De,
      u = je;
    return n.distance = function() {
      return mo.geo.distance(t || r.apply(this, arguments), e || u.apply(this, arguments))
    }, n.source = function(e) {
      return arguments.length ? (r = e, t = "function" == typeof e ? null : e, n) : r
    }, n.target = function(t) {
      return arguments.length ? (u = t, e = "function" == typeof t ? null : t, n) : u
    }, n.precision = function() {
      return arguments.length ? n : 0
    }, n
  }, mo.geo.interpolate = function(n, t) {
    return Le(n[0] * Go, n[1] * Go, t[0] * Go, t[1] * Go)
  }, mo.geo.length = function(n) {
    return ic = 0, mo.geo.stream(n, oc), ic
  };
  var ic, oc = {
      sphere: c,
      point: c,
      lineStart: He,
      lineEnd: c,
      polygonStart: c,
      polygonEnd: c
    }, ac = Fe(function(n) {
      return Math.sqrt(2 / (1 + n))
    }, function(n) {
      return 2 * Math.asin(n / 2)
    });
  (mo.geo.azimuthalEqualArea = function() {
    return be(ac)
  }).raw = ac;
  var cc = Fe(function(n) {
    var t = Math.acos(n);
    return t && t / Math.sin(t)
  }, dt);
  (mo.geo.azimuthalEquidistant = function() {
    return be(cc)
  }).raw = cc, (mo.geo.conicConformal = function() {
    return ae(Pe)
  }).raw = Pe, (mo.geo.conicEquidistant = function() {
    return ae(Oe)
  }).raw = Oe;
  var lc = Fe(function(n) {
    return 1 / n
  }, Math.atan);
  (mo.geo.gnomonic = function() {
    return be(lc)
  }).raw = lc, Re.invert = function(n, t) {
    return [n, 2 * Math.atan(Math.exp(t)) - Bo / 2]
  }, (mo.geo.mercator = function() {
    return Ye(Re)
  }).raw = Re;
  var sc = Fe(function() {
    return 1
  }, Math.asin);
  (mo.geo.orthographic = function() {
    return be(sc)
  }).raw = sc;
  var fc = Fe(function(n) {
    return 1 / (1 + n)
  }, function(n) {
    return 2 * Math.atan(n)
  });
  (mo.geo.stereographic = function() {
    return be(fc)
  }).raw = fc, Ie.invert = function(n, t) {
    return [Math.atan2(R(n), Math.cos(t)), O(Math.sin(t) / Y(n))]
  }, (mo.geo.transverseMercator = function() {
    return Ye(Ie)
  }).raw = Ie, mo.geom = {}, mo.svg = {}, mo.svg.line = function() {
    return Ue(dt)
  };
  var hc = mo.map({
    linear: Xe,
    "linear-closed": $e,
    step: Be,
    "step-before": We,
    "step-after": Je,
    basis: er,
    "basis-open": rr,
    "basis-closed": ur,
    bundle: ir,
    cardinal: Qe,
    "cardinal-open": Ge,
    "cardinal-closed": Ke,
    monotone: fr
  });
  hc.forEach(function(n, t) {
    t.key = n, t.closed = /-closed$/.test(n)
  });
  var gc = [0, 2 / 3, 1 / 3, 0],
    pc = [0, 1 / 3, 2 / 3, 0],
    dc = [0, 1 / 6, 2 / 3, 1 / 6];
  mo.geom.hull = function(n) {
    function t(n) {
      if (n.length < 3) return [];
      var t, u, i, o, a, c, l, s, f, h, g, p, d = pt(e),
        v = pt(r),
        m = n.length,
        y = m - 1,
        M = [],
        x = [],
        b = 0;
      if (d === Ze && r === Ve) t = n;
      else
        for (i = 0, t = []; m > i; ++i) t.push([+d.call(this, u = n[i], i), +v.call(this, u, i)]);
      for (i = 1; m > i; ++i)(t[i][1] < t[b][1] || t[i][1] == t[b][1] && t[i][0] < t[b][0]) && (b = i);
      for (i = 0; m > i; ++i) i !== b && (c = t[i][1] - t[b][1], a = t[i][0] - t[b][0], M.push({
        angle: Math.atan2(c, a),
        index: i
      }));
      for (M.sort(function(n, t) {
        return n.angle - t.angle
      }), g = M[0].angle, h = M[0].index, f = 0, i = 1; y > i; ++i) {
        if (o = M[i].index, g == M[i].angle) {
          if (a = t[h][0] - t[b][0], c = t[h][1] - t[b][1], l = t[o][0] - t[b][0], s = t[o][1] - t[b][1], a * a + c * c >= l * l + s * s) {
            M[i].index = -1;
            continue
          }
          M[f].index = -1
        }
        g = M[i].angle, f = i, h = o
      }
      for (x.push(b), i = 0, o = 0; 2 > i; ++o) M[o].index > -1 && (x.push(M[o].index), i++);
      for (p = x.length; y > o; ++o)
        if (!(M[o].index < 0)) {
          for (; !hr(x[p - 2], x[p - 1], M[o].index, t);)--p;
          x[p++] = M[o].index
        }
      var _ = [];
      for (i = p - 1; i >= 0; --i) _.push(n[x[i]]);
      return _
    }
    var e = Ze,
      r = Ve;
    return arguments.length ? t(n) : (t.x = function(n) {
      return arguments.length ? (e = n, t) : e
    }, t.y = function(n) {
      return arguments.length ? (r = n, t) : r
    }, t)
  }, mo.geom.polygon = function(n) {
    return Lo(n, vc), n
  };
  var vc = mo.geom.polygon.prototype = [];
  vc.area = function() {
    for (var n, t = -1, e = this.length, r = this[e - 1], u = 0; ++t < e;) n = r, r = this[t], u += n[1] * r[0] - n[0] * r[1];
    return .5 * u
  }, vc.centroid = function(n) {
    var t, e, r = -1,
      u = this.length,
      i = 0,
      o = 0,
      a = this[u - 1];
    for (arguments.length || (n = -1 / (6 * this.area())); ++r < u;) t = a, a = this[r], e = t[0] * a[1] - a[0] * t[1], i += (t[0] + a[0]) * e, o += (t[1] + a[1]) * e;
    return [i * n, o * n]
  }, vc.clip = function(n) {
    for (var t, e, r, u, i, o, a = dr(n), c = -1, l = this.length - dr(this), s = this[l - 1]; ++c < l;) {
      for (t = n.slice(), n.length = 0, u = this[c], i = t[(r = t.length - a) - 1], e = -1; ++e < r;) o = t[e], gr(o, s, u) ? (gr(i, s, u) || n.push(pr(i, o, s, u)), n.push(o)) : gr(i, s, u) && n.push(pr(i, o, s, u)), i = o;
      a && n.push(n[0]), s = u
    }
    return n
  }, mo.geom.delaunay = function(n) {
    var t = n.map(function() {
      return []
    }),
      e = [];
    return vr(n, function(e) {
      t[e.region.l.index].push(n[e.region.r.index])
    }), t.forEach(function(t, r) {
      var u = n[r],
        i = u[0],
        o = u[1];
      t.forEach(function(n) {
        n.angle = Math.atan2(n[0] - i, n[1] - o)
      }), t.sort(function(n, t) {
        return n.angle - t.angle
      });
      for (var a = 0, c = t.length - 1; c > a; a++) e.push([u, t[a], t[a + 1]])
    }), e
  }, mo.geom.voronoi = function(n) {
    function t(n) {
      var t, i, o, a = n.map(function() {
          return []
        }),
        c = pt(e),
        l = pt(r),
        s = n.length,
        f = 1e6;
      if (c === Ze && l === Ve) t = n;
      else
        for (t = new Array(s), o = 0; s > o; ++o) t[o] = [+c.call(this, i = n[o], o), +l.call(this, i, o)]; if (vr(t, function(n) {
        var t, e, r, u, i, o;
        1 === n.a && n.b >= 0 ? (t = n.ep.r, e = n.ep.l) : (t = n.ep.l, e = n.ep.r), 1 === n.a ? (i = t ? t.y : -f, r = n.c - n.b * i, o = e ? e.y : f, u = n.c - n.b * o) : (r = t ? t.x : -f, i = n.c - n.a * r, u = e ? e.x : f, o = n.c - n.a * u);
        var c = [r, i],
          l = [u, o];
        a[n.region.l.index].push(c, l), a[n.region.r.index].push(c, l)
      }), a = a.map(function(n, e) {
        var r = t[e][0],
          u = t[e][1],
          i = n.map(function(n) {
            return Math.atan2(n[0] - r, n[1] - u)
          }),
          o = mo.range(n.length).sort(function(n, t) {
            return i[n] - i[t]
          });
        return o.filter(function(n, t) {
          return !t || i[n] - i[o[t - 1]] > Wo
        }).map(function(t) {
          return n[t]
        })
      }), a.forEach(function(n, e) {
        var r = n.length;
        if (!r) return n.push([-f, -f], [-f, f], [f, f], [f, -f]);
        if (!(r > 2)) {
          var u = t[e],
            i = n[0],
            o = n[1],
            a = u[0],
            c = u[1],
            l = i[0],
            s = i[1],
            h = o[0],
            g = o[1],
            p = Math.abs(h - l),
            d = g - s;
          if (Math.abs(d) < Wo) {
            var v = s > c ? -f : f;
            n.push([-f, v], [f, v])
          } else if (Wo > p) {
            var m = l > a ? -f : f;
            n.push([m, -f], [m, f])
          } else {
            var v = (l - a) * (g - s) > (h - l) * (s - c) ? f : -f,
              y = Math.abs(d) - p;
            Math.abs(y) < Wo ? n.push([0 > d ? v : -v, v]) : (y > 0 && (v *= -1), n.push([-f, v], [f, v]))
          }
        }
      }), u)
        for (o = 0; s > o; ++o) u.clip(a[o]);
      for (o = 0; s > o; ++o) a[o].point = n[o];
      return a
    }
    var e = Ze,
      r = Ve,
      u = null;
    return arguments.length ? t(n) : (t.x = function(n) {
      return arguments.length ? (e = n, t) : e
    }, t.y = function(n) {
      return arguments.length ? (r = n, t) : r
    }, t.clipExtent = function(n) {
      if (!arguments.length) return u && [u[0], u[2]];
      if (null == n) u = null;
      else {
        var e = +n[0][0],
          r = +n[0][1],
          i = +n[1][0],
          o = +n[1][1];
        u = mo.geom.polygon([
          [e, r],
          [e, o],
          [i, o],
          [i, r]
        ])
      }
      return t
    }, t.size = function(n) {
      return arguments.length ? t.clipExtent(n && [
        [0, 0], n
      ]) : u && u[2]
    }, t.links = function(n) {
      var t, u, i, o = n.map(function() {
          return []
        }),
        a = [],
        c = pt(e),
        l = pt(r),
        s = n.length;
      if (c === Ze && l === Ve) t = n;
      else
        for (t = new Array(s), i = 0; s > i; ++i) t[i] = [+c.call(this, u = n[i], i), +l.call(this, u, i)];
      return vr(t, function(t) {
        var e = t.region.l.index,
          r = t.region.r.index;
        o[e][r] || (o[e][r] = o[r][e] = !0, a.push({
          source: n[e],
          target: n[r]
        }))
      }), a
    }, t.triangles = function(n) {
      if (e === Ze && r === Ve) return mo.geom.delaunay(n);
      for (var t, u = new Array(c), i = pt(e), o = pt(r), a = -1, c = n.length; ++a < c;)(u[a] = [+i.call(this, t = n[a], a), +o.call(this, t, a)]).data = t;
      return mo.geom.delaunay(u).map(function(n) {
        return n.map(function(n) {
          return n.data
        })
      })
    }, t)
  };
  var mc = {
    l: "r",
    r: "l"
  };
  mo.geom.quadtree = function(n, t, e, r, u) {
    function i(n) {
      function i(n, t, e, r, u, i, o, a) {
        if (!isNaN(e) && !isNaN(r))
          if (n.leaf) {
            var c = n.x,
              s = n.y;
            if (null != c)
              if (Math.abs(c - e) + Math.abs(s - r) < .01) l(n, t, e, r, u, i, o, a);
              else {
                var f = n.point;
                n.x = n.y = n.point = null, l(n, f, c, s, u, i, o, a), l(n, t, e, r, u, i, o, a)
              } else n.x = e, n.y = r, n.point = t
          } else l(n, t, e, r, u, i, o, a)
      }

      function l(n, t, e, r, u, o, a, c) {
        var l = .5 * (u + a),
          s = .5 * (o + c),
          f = e >= l,
          h = r >= s,
          g = (h << 1) + f;
        n.leaf = !1, n = n.nodes[g] || (n.nodes[g] = Mr()), f ? u = l : a = l, h ? o = s : c = s, i(n, t, e, r, u, o, a, c)
      }
      var s, f, h, g, p, d, v, m, y, M = pt(a),
        x = pt(c);
      if (null != t) d = t, v = e, m = r, y = u;
      else if (m = y = -(d = v = 1 / 0), f = [], h = [], p = n.length, o)
        for (g = 0; p > g; ++g) s = n[g], s.x < d && (d = s.x), s.y < v && (v = s.y), s.x > m && (m = s.x), s.y > y && (y = s.y), f.push(s.x), h.push(s.y);
      else
        for (g = 0; p > g; ++g) {
          var b = +M(s = n[g], g),
            _ = +x(s, g);
          d > b && (d = b), v > _ && (v = _), b > m && (m = b), _ > y && (y = _), f.push(b), h.push(_)
        }
      var w = m - d,
        S = y - v;
      w > S ? y = v + w : m = d + S;
      var E = Mr();
      if (E.add = function(n) {
        i(E, n, +M(n, ++g), +x(n, g), d, v, m, y)
      }, E.visit = function(n) {
        xr(n, E, d, v, m, y)
      }, g = -1, null == t) {
        for (; ++g < p;) i(E, n[g], f[g], h[g], d, v, m, y);
        --g
      } else n.forEach(E.add);
      return f = h = n = s = null, E
    }
    var o, a = Ze,
      c = Ve;
    return (o = arguments.length) ? (a = mr, c = yr, 3 === o && (u = e, r = t, e = t = 0), i(n)) : (i.x = function(n) {
      return arguments.length ? (a = n, i) : a
    }, i.y = function(n) {
      return arguments.length ? (c = n, i) : c
    }, i.extent = function(n) {
      return arguments.length ? (null == n ? t = e = r = u = null : (t = +n[0][0], e = +n[0][1], r = +n[1][0], u = +n[1][1]), i) : null == t ? null : [
        [t, e],
        [r, u]
      ]
    }, i.size = function(n) {
      return arguments.length ? (null == n ? t = e = r = u = null : (t = e = 0, r = +n[0], u = +n[1]), i) : null == t ? null : [r - t, u - e]
    }, i)
  }, mo.interpolateRgb = br, mo.interpolateObject = _r, mo.interpolateNumber = wr, mo.interpolateString = Sr;
  var yc = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  mo.interpolate = Er, mo.interpolators = [
    function(n, t) {
      var e = typeof t;
      return ("string" === e ? ga.has(t) || /^(#|rgb\(|hsl\()/.test(t) ? br : Sr : t instanceof Z ? br : "object" === e ? Array.isArray(t) ? kr : _r : wr)(n, t)
    }
  ], mo.interpolateArray = kr;
  var Mc = function() {
    return dt
  }, xc = mo.map({
      linear: Mc,
      poly: Dr,
      quad: function() {
        return qr
      },
      cubic: function() {
        return zr
      },
      sin: function() {
        return jr
      },
      exp: function() {
        return Lr
      },
      circle: function() {
        return Hr
      },
      elastic: Fr,
      back: Pr,
      bounce: function() {
        return Or
      }
    }),
    bc = mo.map({
      "in": dt,
      out: Nr,
      "in-out": Tr,
      "out-in": function(n) {
        return Tr(Nr(n))
      }
    });
  mo.ease = function(n) {
    var t = n.indexOf("-"),
      e = t >= 0 ? n.substring(0, t) : n,
      r = t >= 0 ? n.substring(t + 1) : "in";
    return e = xc.get(e) || Mc, r = bc.get(r) || dt, Ar(r(e.apply(null, Array.prototype.slice.call(arguments, 1))))
  }, mo.interpolateHcl = Rr, mo.interpolateHsl = Yr, mo.interpolateLab = Ir, mo.interpolateRound = Ur, mo.transform = function(n) {
    var t = xo.createElementNS(mo.ns.prefix.svg, "g");
    return (mo.transform = function(n) {
      if (null != n) {
        t.setAttribute("transform", n);
        var e = t.transform.baseVal.consolidate()
      }
      return new Zr(e ? e.matrix : _c)
    })(n)
  }, Zr.prototype.toString = function() {
    return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
  };
  var _c = {
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    e: 0,
    f: 0
  };
  mo.interpolateTransform = Br, mo.layout = {}, mo.layout.bundle = function() {
    return function(n) {
      for (var t = [], e = -1, r = n.length; ++e < r;) t.push(Gr(n[e]));
      return t
    }
  }, mo.layout.chord = function() {
    function n() {
      var n, l, f, h, g, p = {}, d = [],
        v = mo.range(i),
        m = [];
      for (e = [], r = [], n = 0, h = -1; ++h < i;) {
        for (l = 0, g = -1; ++g < i;) l += u[h][g];
        d.push(l), m.push(mo.range(i)), n += l
      }
      for (o && v.sort(function(n, t) {
        return o(d[n], d[t])
      }), a && m.forEach(function(n, t) {
        n.sort(function(n, e) {
          return a(u[t][n], u[t][e])
        })
      }), n = (2 * Bo - s * i) / n, l = 0, h = -1; ++h < i;) {
        for (f = l, g = -1; ++g < i;) {
          var y = v[h],
            M = m[y][g],
            x = u[y][M],
            b = l,
            _ = l += x * n;
          p[y + "-" + M] = {
            index: y,
            subindex: M,
            startAngle: b,
            endAngle: _,
            value: x
          }
        }
        r[y] = {
          index: y,
          startAngle: f,
          endAngle: l,
          value: (l - f) / n
        }, l += s
      }
      for (h = -1; ++h < i;)
        for (g = h - 1; ++g < i;) {
          var w = p[h + "-" + g],
            S = p[g + "-" + h];
          (w.value || S.value) && e.push(w.value < S.value ? {
              source: S,
              target: w
            } : {
              source: w,
              target: S
            })
        }
      c && t()
    }

    function t() {
      e.sort(function(n, t) {
        return c((n.source.value + n.target.value) / 2, (t.source.value + t.target.value) / 2)
      })
    }
    var e, r, u, i, o, a, c, l = {}, s = 0;
    return l.matrix = function(n) {
      return arguments.length ? (i = (u = n) && u.length, e = r = null, l) : u
    }, l.padding = function(n) {
      return arguments.length ? (s = n, e = r = null, l) : s
    }, l.sortGroups = function(n) {
      return arguments.length ? (o = n, e = r = null, l) : o
    }, l.sortSubgroups = function(n) {
      return arguments.length ? (a = n, e = null, l) : a
    }, l.sortChords = function(n) {
      return arguments.length ? (c = n, e && t(), l) : c
    }, l.chords = function() {
      return e || n(), e
    }, l.groups = function() {
      return r || n(), r
    }, l
  }, mo.layout.force = function() {
    function n(n) {
      return function(t, e, r, u) {
        if (t.point !== n) {
          var i = t.cx - n.x,
            o = t.cy - n.y,
            a = 1 / Math.sqrt(i * i + o * o);
          if (d > (u - e) * a) {
            var c = t.charge * a * a;
            return n.px -= i * c, n.py -= o * c, !0
          }
          if (t.point && isFinite(a)) {
            var c = t.pointCharge * a * a;
            n.px -= i * c, n.py -= o * c
          }
        }
        return !t.charge
      }
    }

    function t(n) {
      n.px = mo.event.x, n.py = mo.event.y, a.resume()
    }
    var e, r, u, i, o, a = {}, c = mo.dispatch("start", "tick", "end"),
      l = [1, 1],
      s = .9,
      f = wc,
      h = Sc,
      g = -30,
      p = .1,
      d = .8,
      v = [],
      m = [];
    return a.tick = function() {
      if ((r *= .99) < .005) return c.end({
        type: "end",
        alpha: r = 0
      }), !0;
      var t, e, a, f, h, d, y, M, x, b = v.length,
        _ = m.length;
      for (e = 0; _ > e; ++e) a = m[e], f = a.source, h = a.target, M = h.x - f.x, x = h.y - f.y, (d = M * M + x * x) && (d = r * i[e] * ((d = Math.sqrt(d)) - u[e]) / d, M *= d, x *= d, h.x -= M * (y = f.weight / (h.weight + f.weight)), h.y -= x * y, f.x += M * (y = 1 - y), f.y += x * y);
      if ((y = r * p) && (M = l[0] / 2, x = l[1] / 2, e = -1, y))
        for (; ++e < b;) a = v[e], a.x += (M - a.x) * y, a.y += (x - a.y) * y;
      if (g)
        for (uu(t = mo.geom.quadtree(v), r, o), e = -1; ++e < b;)(a = v[e]).fixed || t.visit(n(a));
      for (e = -1; ++e < b;) a = v[e], a.fixed ? (a.x = a.px, a.y = a.py) : (a.x -= (a.px - (a.px = a.x)) * s, a.y -= (a.py - (a.py = a.y)) * s);
      c.tick({
        type: "tick",
        alpha: r
      })
    }, a.nodes = function(n) {
      return arguments.length ? (v = n, a) : v
    }, a.links = function(n) {
      return arguments.length ? (m = n, a) : m
    }, a.size = function(n) {
      return arguments.length ? (l = n, a) : l
    }, a.linkDistance = function(n) {
      return arguments.length ? (f = "function" == typeof n ? n : +n, a) : f
    }, a.distance = a.linkDistance, a.linkStrength = function(n) {
      return arguments.length ? (h = "function" == typeof n ? n : +n, a) : h
    }, a.friction = function(n) {
      return arguments.length ? (s = +n, a) : s
    }, a.charge = function(n) {
      return arguments.length ? (g = "function" == typeof n ? n : +n, a) : g
    }, a.gravity = function(n) {
      return arguments.length ? (p = +n, a) : p
    }, a.theta = function(n) {
      return arguments.length ? (d = +n, a) : d
    }, a.alpha = function(n) {
      return arguments.length ? (n = +n, r ? r = n > 0 ? n : 0 : n > 0 && (c.start({
        type: "start",
        alpha: r = n
      }), mo.timer(a.tick)), a) : r
    }, a.start = function() {
      function n(n, r) {
        for (var u, i = t(e), o = -1, a = i.length; ++o < a;)
          if (!isNaN(u = i[o][n])) return u;
        return Math.random() * r
      }

      function t() {
        if (!c) {
          for (c = [], r = 0; p > r; ++r) c[r] = [];
          for (r = 0; d > r; ++r) {
            var n = m[r];
            c[n.source.index].push(n.target), c[n.target.index].push(n.source)
          }
        }
        return c[e]
      }
      var e, r, c, s, p = v.length,
        d = m.length,
        y = l[0],
        M = l[1];
      for (e = 0; p > e; ++e)(s = v[e]).index = e, s.weight = 0;
      for (e = 0; d > e; ++e) s = m[e], "number" == typeof s.source && (s.source = v[s.source]), "number" == typeof s.target && (s.target = v[s.target]), ++s.source.weight, ++s.target.weight;
      for (e = 0; p > e; ++e) s = v[e], isNaN(s.x) && (s.x = n("x", y)), isNaN(s.y) && (s.y = n("y", M)), isNaN(s.px) && (s.px = s.x), isNaN(s.py) && (s.py = s.y);
      if (u = [], "function" == typeof f)
        for (e = 0; d > e; ++e) u[e] = +f.call(this, m[e], e);
      else
        for (e = 0; d > e; ++e) u[e] = f; if (i = [], "function" == typeof h)
        for (e = 0; d > e; ++e) i[e] = +h.call(this, m[e], e);
      else
        for (e = 0; d > e; ++e) i[e] = h; if (o = [], "function" == typeof g)
        for (e = 0; p > e; ++e) o[e] = +g.call(this, v[e], e);
      else
        for (e = 0; p > e; ++e) o[e] = g;
      return a.resume()
    }, a.resume = function() {
      return a.alpha(.1)
    }, a.stop = function() {
      return a.alpha(0)
    }, a.drag = function() {
      return e || (e = mo.behavior.drag().origin(dt).on("dragstart.force", nu).on("drag.force", t).on("dragend.force", tu)), arguments.length ? (this.on("mouseover.force", eu).on("mouseout.force", ru).call(e), void 0) : e
    }, mo.rebind(a, c, "on")
  };
  var wc = 20,
    Sc = 1;
  mo.layout.hierarchy = function() {
    function n(t, o, a) {
      var c = u.call(e, t, o);
      if (t.depth = o, a.push(t), c && (l = c.length)) {
        for (var l, s, f = -1, h = t.children = [], g = 0, p = o + 1; ++f < l;) s = n(c[f], p, a), s.parent = t, h.push(s), g += s.value;
        r && h.sort(r), i && (t.value = g)
      } else i && (t.value = +i.call(e, t, o) || 0);
      return t
    }

    function t(n, r) {
      var u = n.children,
        o = 0;
      if (u && (a = u.length))
        for (var a, c = -1, l = r + 1; ++c < a;) o += t(u[c], l);
      else i && (o = +i.call(e, n, r) || 0);
      return i && (n.value = o), o
    }

    function e(t) {
      var e = [];
      return n(t, 0, e), e
    }
    var r = cu,
      u = ou,
      i = au;
    return e.sort = function(n) {
      return arguments.length ? (r = n, e) : r
    }, e.children = function(n) {
      return arguments.length ? (u = n, e) : u
    }, e.value = function(n) {
      return arguments.length ? (i = n, e) : i
    }, e.revalue = function(n) {
      return t(n, 0), n
    }, e
  }, mo.layout.partition = function() {
    function n(t, e, r, u) {
      var i = t.children;
      if (t.x = e, t.y = t.depth * u, t.dx = r, t.dy = u, i && (o = i.length)) {
        var o, a, c, l = -1;
        for (r = t.value ? r / t.value : 0; ++l < o;) n(a = i[l], e, c = a.value * r, u), e += c
      }
    }

    function t(n) {
      var e = n.children,
        r = 0;
      if (e && (u = e.length))
        for (var u, i = -1; ++i < u;) r = Math.max(r, t(e[i]));
      return 1 + r
    }

    function e(e, i) {
      var o = r.call(this, e, i);
      return n(o[0], 0, u[0], u[1] / t(o[0])), o
    }
    var r = mo.layout.hierarchy(),
      u = [1, 1];
    return e.size = function(n) {
      return arguments.length ? (u = n, e) : u
    }, iu(e, r)
  }, mo.layout.pie = function() {
    function n(i) {
      var o = i.map(function(e, r) {
        return +t.call(n, e, r)
      }),
        a = +("function" == typeof r ? r.apply(this, arguments) : r),
        c = (("function" == typeof u ? u.apply(this, arguments) : u) - a) / mo.sum(o),
        l = mo.range(i.length);
      null != e && l.sort(e === Ec ? function(n, t) {
        return o[t] - o[n]
      } : function(n, t) {
        return e(i[n], i[t])
      });
      var s = [];
      return l.forEach(function(n) {
        var t;
        s[n] = {
          data: i[n],
          value: t = o[n],
          startAngle: a,
          endAngle: a += t * c
        }
      }), s
    }
    var t = Number,
      e = Ec,
      r = 0,
      u = 2 * Bo;
    return n.value = function(e) {
      return arguments.length ? (t = e, n) : t
    }, n.sort = function(t) {
      return arguments.length ? (e = t, n) : e
    }, n.startAngle = function(t) {
      return arguments.length ? (r = t, n) : r
    }, n.endAngle = function(t) {
      return arguments.length ? (u = t, n) : u
    }, n
  };
  var Ec = {};
  mo.layout.stack = function() {
    function n(a, c) {
      var l = a.map(function(e, r) {
        return t.call(n, e, r)
      }),
        s = l.map(function(t) {
          return t.map(function(t, e) {
            return [i.call(n, t, e), o.call(n, t, e)]
          })
        }),
        f = e.call(n, s, c);
      l = mo.permute(l, f), s = mo.permute(s, f);
      var h, g, p, d = r.call(n, s, c),
        v = l.length,
        m = l[0].length;
      for (g = 0; m > g; ++g)
        for (u.call(n, l[0][g], p = d[g], s[0][g][1]), h = 1; v > h; ++h) u.call(n, l[h][g], p += s[h - 1][g][1], s[h][g][1]);
      return a
    }
    var t = dt,
      e = gu,
      r = pu,
      u = hu,
      i = su,
      o = fu;
    return n.values = function(e) {
      return arguments.length ? (t = e, n) : t
    }, n.order = function(t) {
      return arguments.length ? (e = "function" == typeof t ? t : kc.get(t) || gu, n) : e
    }, n.offset = function(t) {
      return arguments.length ? (r = "function" == typeof t ? t : Ac.get(t) || pu, n) : r
    }, n.x = function(t) {
      return arguments.length ? (i = t, n) : i
    }, n.y = function(t) {
      return arguments.length ? (o = t, n) : o
    }, n.out = function(t) {
      return arguments.length ? (u = t, n) : u
    }, n
  };
  var kc = mo.map({
    "inside-out": function(n) {
      var t, e, r = n.length,
        u = n.map(du),
        i = n.map(vu),
        o = mo.range(r).sort(function(n, t) {
          return u[n] - u[t]
        }),
        a = 0,
        c = 0,
        l = [],
        s = [];
      for (t = 0; r > t; ++t) e = o[t], c > a ? (a += i[e], l.push(e)) : (c += i[e], s.push(e));
      return s.reverse().concat(l)
    },
    reverse: function(n) {
      return mo.range(n.length).reverse()
    },
    "default": gu
  }),
    Ac = mo.map({
      silhouette: function(n) {
        var t, e, r, u = n.length,
          i = n[0].length,
          o = [],
          a = 0,
          c = [];
        for (e = 0; i > e; ++e) {
          for (t = 0, r = 0; u > t; t++) r += n[t][e][1];
          r > a && (a = r), o.push(r)
        }
        for (e = 0; i > e; ++e) c[e] = (a - o[e]) / 2;
        return c
      },
      wiggle: function(n) {
        var t, e, r, u, i, o, a, c, l, s = n.length,
          f = n[0],
          h = f.length,
          g = [];
        for (g[0] = c = l = 0, e = 1; h > e; ++e) {
          for (t = 0, u = 0; s > t; ++t) u += n[t][e][1];
          for (t = 0, i = 0, a = f[e][0] - f[e - 1][0]; s > t; ++t) {
            for (r = 0, o = (n[t][e][1] - n[t][e - 1][1]) / (2 * a); t > r; ++r) o += (n[r][e][1] - n[r][e - 1][1]) / a;
            i += o * n[t][e][1]
          }
          g[e] = c -= u ? i / u * a : 0, l > c && (l = c)
        }
        for (e = 0; h > e; ++e) g[e] -= l;
        return g
      },
      expand: function(n) {
        var t, e, r, u = n.length,
          i = n[0].length,
          o = 1 / u,
          a = [];
        for (e = 0; i > e; ++e) {
          for (t = 0, r = 0; u > t; t++) r += n[t][e][1];
          if (r)
            for (t = 0; u > t; t++) n[t][e][1] /= r;
          else
            for (t = 0; u > t; t++) n[t][e][1] = o
        }
        for (e = 0; i > e; ++e) a[e] = 0;
        return a
      },
      zero: pu
    });
  mo.layout.histogram = function() {
    function n(n, i) {
      for (var o, a, c = [], l = n.map(e, this), s = r.call(this, l, i), f = u.call(this, s, l, i), i = -1, h = l.length, g = f.length - 1, p = t ? 1 : 1 / h; ++i < g;) o = c[i] = [], o.dx = f[i + 1] - (o.x = f[i]), o.y = 0;
      if (g > 0)
        for (i = -1; ++i < h;) a = l[i], a >= s[0] && a <= s[1] && (o = c[mo.bisect(f, a, 1, g) - 1], o.y += p, o.push(n[i]));
      return c
    }
    var t = !0,
      e = Number,
      r = xu,
      u = yu;
    return n.value = function(t) {
      return arguments.length ? (e = t, n) : e
    }, n.range = function(t) {
      return arguments.length ? (r = pt(t), n) : r
    }, n.bins = function(t) {
      return arguments.length ? (u = "number" == typeof t ? function(n) {
        return Mu(n, t)
      } : pt(t), n) : u
    }, n.frequency = function(e) {
      return arguments.length ? (t = !! e, n) : t
    }, n
  }, mo.layout.tree = function() {
    function n(n, i) {
      function o(n, t) {
        var r = n.children,
          u = n._tree;
        if (r && (i = r.length)) {
          for (var i, a, l, s = r[0], f = s, h = -1; ++h < i;) l = r[h], o(l, a), f = c(l, a, f), a = l;
          Tu(n);
          var g = .5 * (s._tree.prelim + l._tree.prelim);
          t ? (u.prelim = t._tree.prelim + e(n, t), u.mod = u.prelim - g) : u.prelim = g
        } else t && (u.prelim = t._tree.prelim + e(n, t))
      }

      function a(n, t) {
        n.x = n._tree.prelim + t;
        var e = n.children;
        if (e && (r = e.length)) {
          var r, u = -1;
          for (t += n._tree.mod; ++u < r;) a(e[u], t)
        }
      }

      function c(n, t, r) {
        if (t) {
          for (var u, i = n, o = n, a = t, c = n.parent.children[0], l = i._tree.mod, s = o._tree.mod, f = a._tree.mod, h = c._tree.mod; a = wu(a), i = _u(i), a && i;) c = _u(c), o = wu(o), o._tree.ancestor = n, u = a._tree.prelim + f - i._tree.prelim - l + e(a, i), u > 0 && (qu(zu(a, n, r), n, u), l += u, s += u), f += a._tree.mod, l += i._tree.mod, h += c._tree.mod, s += o._tree.mod;
          a && !wu(o) && (o._tree.thread = a, o._tree.mod += f - s), i && !_u(c) && (c._tree.thread = i, c._tree.mod += l - h, r = n)
        }
        return r
      }
      var l = t.call(this, n, i),
        s = l[0];
      Nu(s, function(n, t) {
        n._tree = {
          ancestor: n,
          prelim: 0,
          mod: 0,
          change: 0,
          shift: 0,
          number: t ? t._tree.number + 1 : 0
        }
      }), o(s), a(s, -s._tree.prelim);
      var f = Su(s, ku),
        h = Su(s, Eu),
        g = Su(s, Au),
        p = f.x - e(f, h) / 2,
        d = h.x + e(h, f) / 2,
        v = g.depth || 1;
      return Nu(s, u ? function(n) {
        n.x *= r[0], n.y = n.depth * r[1], delete n._tree
      } : function(n) {
        n.x = (n.x - p) / (d - p) * r[0], n.y = n.depth / v * r[1], delete n._tree
      }), l
    }
    var t = mo.layout.hierarchy().sort(null).value(null),
      e = bu,
      r = [1, 1],
      u = !1;
    return n.separation = function(t) {
      return arguments.length ? (e = t, n) : e
    }, n.size = function(t) {
      return arguments.length ? (u = null == (r = t), n) : u ? null : r
    }, n.nodeSize = function(t) {
      return arguments.length ? (u = null != (r = t), n) : u ? r : null
    }, iu(n, t)
  }, mo.layout.pack = function() {
    function n(n, i) {
      var o = e.call(this, n, i),
        a = o[0],
        c = u[0],
        l = u[1],
        s = null == t ? Math.sqrt : "function" == typeof t ? t : function() {
          return t
        };
      if (a.x = a.y = 0, Nu(a, function(n) {
        n.r = +s(n.value)
      }), Nu(a, Hu), r) {
        var f = r * (t ? 1 : Math.max(2 * a.r / c, 2 * a.r / l)) / 2;
        Nu(a, function(n) {
          n.r += f
        }), Nu(a, Hu), Nu(a, function(n) {
          n.r -= f
        })
      }
      return Ou(a, c / 2, l / 2, t ? 1 : 1 / Math.max(2 * a.r / c, 2 * a.r / l)), o
    }
    var t, e = mo.layout.hierarchy().sort(Cu),
      r = 0,
      u = [1, 1];
    return n.size = function(t) {
      return arguments.length ? (u = t, n) : u
    }, n.radius = function(e) {
      return arguments.length ? (t = null == e || "function" == typeof e ? e : +e, n) : t
    }, n.padding = function(t) {
      return arguments.length ? (r = +t, n) : r
    }, iu(n, e)
  }, mo.layout.cluster = function() {
    function n(n, i) {
      var o, a = t.call(this, n, i),
        c = a[0],
        l = 0;
      Nu(c, function(n) {
        var t = n.children;
        t && t.length ? (n.x = Iu(t), n.y = Yu(t)) : (n.x = o ? l += e(n, o) : 0, n.y = 0, o = n)
      });
      var s = Uu(c),
        f = Zu(c),
        h = s.x - e(s, f) / 2,
        g = f.x + e(f, s) / 2;
      return Nu(c, u ? function(n) {
        n.x = (n.x - c.x) * r[0], n.y = (c.y - n.y) * r[1]
      } : function(n) {
        n.x = (n.x - h) / (g - h) * r[0], n.y = (1 - (c.y ? n.y / c.y : 1)) * r[1]
      }), a
    }
    var t = mo.layout.hierarchy().sort(null).value(null),
      e = bu,
      r = [1, 1],
      u = !1;
    return n.separation = function(t) {
      return arguments.length ? (e = t, n) : e
    }, n.size = function(t) {
      return arguments.length ? (u = null == (r = t), n) : u ? null : r
    }, n.nodeSize = function(t) {
      return arguments.length ? (u = null != (r = t), n) : u ? r : null
    }, iu(n, t)
  }, mo.layout.treemap = function() {
    function n(n, t) {
      for (var e, r, u = -1, i = n.length; ++u < i;) r = (e = n[u]).value * (0 > t ? 0 : t), e.area = isNaN(r) || 0 >= r ? 0 : r
    }

    function t(e) {
      var i = e.children;
      if (i && i.length) {
        var o, a, c, l = f(e),
          s = [],
          h = i.slice(),
          p = 1 / 0,
          d = "slice" === g ? l.dx : "dice" === g ? l.dy : "slice-dice" === g ? 1 & e.depth ? l.dy : l.dx : Math.min(l.dx, l.dy);
        for (n(h, l.dx * l.dy / e.value), s.area = 0;
          (c = h.length) > 0;) s.push(o = h[c - 1]), s.area += o.area, "squarify" !== g || (a = r(s, d)) <= p ? (h.pop(), p = a) : (s.area -= s.pop().area, u(s, d, l, !1), d = Math.min(l.dx, l.dy), s.length = s.area = 0, p = 1 / 0);
        s.length && (u(s, d, l, !0), s.length = s.area = 0), i.forEach(t)
      }
    }

    function e(t) {
      var r = t.children;
      if (r && r.length) {
        var i, o = f(t),
          a = r.slice(),
          c = [];
        for (n(a, o.dx * o.dy / t.value), c.area = 0; i = a.pop();) c.push(i), c.area += i.area, null != i.z && (u(c, i.z ? o.dx : o.dy, o, !a.length), c.length = c.area = 0);
        r.forEach(e)
      }
    }

    function r(n, t) {
      for (var e, r = n.area, u = 0, i = 1 / 0, o = -1, a = n.length; ++o < a;)(e = n[o].area) && (i > e && (i = e), e > u && (u = e));
      return r *= r, t *= t, r ? Math.max(t * u * p / r, r / (t * i * p)) : 1 / 0
    }

    function u(n, t, e, r) {
      var u, i = -1,
        o = n.length,
        a = e.x,
        l = e.y,
        s = t ? c(n.area / t) : 0;
      if (t == e.dx) {
        for ((r || s > e.dy) && (s = e.dy); ++i < o;) u = n[i], u.x = a, u.y = l, u.dy = s, a += u.dx = Math.min(e.x + e.dx - a, s ? c(u.area / s) : 0);
        u.z = !0, u.dx += e.x + e.dx - a, e.y += s, e.dy -= s
      } else {
        for ((r || s > e.dx) && (s = e.dx); ++i < o;) u = n[i], u.x = a, u.y = l, u.dx = s, l += u.dy = Math.min(e.y + e.dy - l, s ? c(u.area / s) : 0);
        u.z = !1, u.dy += e.y + e.dy - l, e.x += s, e.dx -= s
      }
    }

    function i(r) {
      var u = o || a(r),
        i = u[0];
      return i.x = 0, i.y = 0, i.dx = l[0], i.dy = l[1], o && a.revalue(i), n([i], i.dx * i.dy / i.value), (o ? e : t)(i), h && (o = u), u
    }
    var o, a = mo.layout.hierarchy(),
      c = Math.round,
      l = [1, 1],
      s = null,
      f = Vu,
      h = !1,
      g = "squarify",
      p = .5 * (1 + Math.sqrt(5));
    return i.size = function(n) {
      return arguments.length ? (l = n, i) : l
    }, i.padding = function(n) {
      function t(t) {
        var e = n.call(i, t, t.depth);
        return null == e ? Vu(t) : Xu(t, "number" == typeof e ? [e, e, e, e] : e)
      }

      function e(t) {
        return Xu(t, n)
      }
      if (!arguments.length) return s;
      var r;
      return f = null == (s = n) ? Vu : "function" == (r = typeof n) ? t : "number" === r ? (n = [n, n, n, n], e) : e, i
    }, i.round = function(n) {
      return arguments.length ? (c = n ? Math.round : Number, i) : c != Number
    }, i.sticky = function(n) {
      return arguments.length ? (h = n, o = null, i) : h
    }, i.ratio = function(n) {
      return arguments.length ? (p = n, i) : p
    }, i.mode = function(n) {
      return arguments.length ? (g = n + "", i) : g
    }, iu(i, a)
  }, mo.random = {
    normal: function(n, t) {
      var e = arguments.length;
      return 2 > e && (t = 1), 1 > e && (n = 0),
      function() {
        var e, r, u;
        do e = 2 * Math.random() - 1, r = 2 * Math.random() - 1, u = e * e + r * r; while (!u || u > 1);
        return n + t * e * Math.sqrt(-2 * Math.log(u) / u)
      }
    },
    logNormal: function() {
      var n = mo.random.normal.apply(mo, arguments);
      return function() {
        return Math.exp(n())
      }
    },
    irwinHall: function(n) {
      return function() {
        for (var t = 0, e = 0; n > e; e++) t += Math.random();
        return t / n
      }
    }
  }, mo.scale = {};
  var Nc = {
    floor: dt,
    ceil: dt
  };
  mo.scale.linear = function() {
    return Qu([0, 1], [0, 1], Er, !1)
  }, mo.scale.log = function() {
    return ii(mo.scale.linear().domain([0, 1]), 10, !0, [1, 10])
  };
  var Tc = mo.format(".0e"),
    qc = {
      floor: function(n) {
        return -Math.ceil(-n)
      },
      ceil: function(n) {
        return -Math.floor(-n)
      }
    };
  mo.scale.pow = function() {
    return oi(mo.scale.linear(), 1, [0, 1])
  }, mo.scale.sqrt = function() {
    return mo.scale.pow().exponent(.5)
  }, mo.scale.ordinal = function() {
    return ci([], {
      t: "range",
      a: [
        []
      ]
    })
  }, mo.scale.category10 = function() {
    return mo.scale.ordinal().range(zc)
  }, mo.scale.category20 = function() {
    return mo.scale.ordinal().range(Cc)
  }, mo.scale.category20b = function() {
    return mo.scale.ordinal().range(Dc)
  }, mo.scale.category20c = function() {
    return mo.scale.ordinal().range(jc)
  };
  var zc = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(it),
    Cc = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(it),
    Dc = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(it),
    jc = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(it);
  mo.scale.quantile = function() {
    return li([], [])
  }, mo.scale.quantize = function() {
    return si(0, 1, [0, 1])
  }, mo.scale.threshold = function() {
    return fi([.5], [0, 1])
  }, mo.scale.identity = function() {
    return hi([0, 1])
  }, mo.svg.arc = function() {
    function n() {
      var n = t.apply(this, arguments),
        i = e.apply(this, arguments),
        o = r.apply(this, arguments) + Lc,
        a = u.apply(this, arguments) + Lc,
        c = (o > a && (c = o, o = a, a = c), a - o),
        l = Bo > c ? "0" : "1",
        s = Math.cos(o),
        f = Math.sin(o),
        h = Math.cos(a),
        g = Math.sin(a);
      return c >= Hc ? n ? "M0," + i + "A" + i + "," + i + " 0 1,1 0," + -i + "A" + i + "," + i + " 0 1,1 0," + i + "M0," + n + "A" + n + "," + n + " 0 1,0 0," + -n + "A" + n + "," + n + " 0 1,0 0," + n + "Z" : "M0," + i + "A" + i + "," + i + " 0 1,1 0," + -i + "A" + i + "," + i + " 0 1,1 0," + i + "Z" : n ? "M" + i * s + "," + i * f + "A" + i + "," + i + " 0 " + l + ",1 " + i * h + "," + i * g + "L" + n * h + "," + n * g + "A" + n + "," + n + " 0 " + l + ",0 " + n * s + "," + n * f + "Z" : "M" + i * s + "," + i * f + "A" + i + "," + i + " 0 " + l + ",1 " + i * h + "," + i * g + "L0,0" + "Z"
    }
    var t = gi,
      e = pi,
      r = di,
      u = vi;
    return n.innerRadius = function(e) {
      return arguments.length ? (t = pt(e), n) : t
    }, n.outerRadius = function(t) {
      return arguments.length ? (e = pt(t), n) : e
    }, n.startAngle = function(t) {
      return arguments.length ? (r = pt(t), n) : r
    }, n.endAngle = function(t) {
      return arguments.length ? (u = pt(t), n) : u
    }, n.centroid = function() {
      var n = (t.apply(this, arguments) + e.apply(this, arguments)) / 2,
        i = (r.apply(this, arguments) + u.apply(this, arguments)) / 2 + Lc;
      return [Math.cos(i) * n, Math.sin(i) * n]
    }, n
  };
  var Lc = -Bo / 2,
    Hc = 2 * Bo - 1e-6;
  mo.svg.line.radial = function() {
    var n = Ue(mi);
    return n.radius = n.x, delete n.x, n.angle = n.y, delete n.y, n
  }, We.reverse = Je, Je.reverse = We, mo.svg.area = function() {
    return yi(dt)
  }, mo.svg.area.radial = function() {
    var n = yi(mi);
    return n.radius = n.x, delete n.x, n.innerRadius = n.x0, delete n.x0, n.outerRadius = n.x1, delete n.x1, n.angle = n.y, delete n.y, n.startAngle = n.y0, delete n.y0, n.endAngle = n.y1, delete n.y1, n
  }, mo.svg.chord = function() {
    function n(n, a) {
      var c = t(this, i, n, a),
        l = t(this, o, n, a);
      return "M" + c.p0 + r(c.r, c.p1, c.a1 - c.a0) + (e(c, l) ? u(c.r, c.p1, c.r, c.p0) : u(c.r, c.p1, l.r, l.p0) + r(l.r, l.p1, l.a1 - l.a0) + u(l.r, l.p1, c.r, c.p0)) + "Z"
    }

    function t(n, t, e, r) {
      var u = t.call(n, e, r),
        i = a.call(n, u, r),
        o = c.call(n, u, r) + Lc,
        s = l.call(n, u, r) + Lc;
      return {
        r: i,
        a0: o,
        a1: s,
        p0: [i * Math.cos(o), i * Math.sin(o)],
        p1: [i * Math.cos(s), i * Math.sin(s)]
      }
    }

    function e(n, t) {
      return n.a0 == t.a0 && n.a1 == t.a1
    }

    function r(n, t, e) {
      return "A" + n + "," + n + " 0 " + +(e > Bo) + ",1 " + t
    }

    function u(n, t, e, r) {
      return "Q 0,0 " + r
    }
    var i = De,
      o = je,
      a = Mi,
      c = di,
      l = vi;
    return n.radius = function(t) {
      return arguments.length ? (a = pt(t), n) : a
    }, n.source = function(t) {
      return arguments.length ? (i = pt(t), n) : i
    }, n.target = function(t) {
      return arguments.length ? (o = pt(t), n) : o
    }, n.startAngle = function(t) {
      return arguments.length ? (c = pt(t), n) : c
    }, n.endAngle = function(t) {
      return arguments.length ? (l = pt(t), n) : l
    }, n
  }, mo.svg.diagonal = function() {
    function n(n, u) {
      var i = t.call(this, n, u),
        o = e.call(this, n, u),
        a = (i.y + o.y) / 2,
        c = [i, {
            x: i.x,
            y: a
          }, {
            x: o.x,
            y: a
          },
          o
        ];
      return c = c.map(r), "M" + c[0] + "C" + c[1] + " " + c[2] + " " + c[3]
    }
    var t = De,
      e = je,
      r = xi;
    return n.source = function(e) {
      return arguments.length ? (t = pt(e), n) : t
    }, n.target = function(t) {
      return arguments.length ? (e = pt(t), n) : e
    }, n.projection = function(t) {
      return arguments.length ? (r = t, n) : r
    }, n
  }, mo.svg.diagonal.radial = function() {
    var n = mo.svg.diagonal(),
      t = xi,
      e = n.projection;
    return n.projection = function(n) {
      return arguments.length ? e(bi(t = n)) : t
    }, n
  }, mo.svg.symbol = function() {
    function n(n, r) {
      return (Fc.get(t.call(this, n, r)) || Si)(e.call(this, n, r))
    }
    var t = wi,
      e = _i;
    return n.type = function(e) {
      return arguments.length ? (t = pt(e), n) : t
    }, n.size = function(t) {
      return arguments.length ? (e = pt(t), n) : e
    }, n
  };
  var Fc = mo.map({
    circle: Si,
    cross: function(n) {
      var t = Math.sqrt(n / 5) / 2;
      return "M" + -3 * t + "," + -t + "H" + -t + "V" + -3 * t + "H" + t + "V" + -t + "H" + 3 * t + "V" + t + "H" + t + "V" + 3 * t + "H" + -t + "V" + t + "H" + -3 * t + "Z"
    },
    diamond: function(n) {
      var t = Math.sqrt(n / (2 * Yc)),
        e = t * Yc;
      return "M0," + -t + "L" + e + ",0" + " 0," + t + " " + -e + ",0" + "Z"
    },
    square: function(n) {
      var t = Math.sqrt(n) / 2;
      return "M" + -t + "," + -t + "L" + t + "," + -t + " " + t + "," + t + " " + -t + "," + t + "Z"
    },
    "triangle-down": function(n) {
      var t = Math.sqrt(n / Rc),
        e = t * Rc / 2;
      return "M0," + e + "L" + t + "," + -e + " " + -t + "," + -e + "Z"
    },
    "triangle-up": function(n) {
      var t = Math.sqrt(n / Rc),
        e = t * Rc / 2;
      return "M0," + -e + "L" + t + "," + e + " " + -t + "," + e + "Z"
    }
  });
  mo.svg.symbolTypes = Fc.keys();
  var Pc, Oc, Rc = Math.sqrt(3),
    Yc = Math.tan(30 * Go),
    Ic = [],
    Uc = 0;
  Ic.call = Ro.call, Ic.empty = Ro.empty, Ic.node = Ro.node, Ic.size = Ro.size, mo.transition = function(n) {
    return arguments.length ? Pc ? n.transition() : n : Uo.transition()
  }, mo.transition.prototype = Ic, Ic.select = function(n) {
    var t, e, r, u = this.id,
      i = [];
    n = d(n);
    for (var o = -1, a = this.length; ++o < a;) {
      i.push(t = []);
      for (var c = this[o], l = -1, s = c.length; ++l < s;)(r = c[l]) && (e = n.call(r, r.__data__, l, o)) ? ("__data__" in r && (e.__data__ = r.__data__), Ni(e, l, u, r.__transition__[u]), t.push(e)) : t.push(null)
    }
    return Ei(i, u)
  }, Ic.selectAll = function(n) {
    var t, e, r, u, i, o = this.id,
      a = [];
    n = v(n);
    for (var c = -1, l = this.length; ++c < l;)
      for (var s = this[c], f = -1, h = s.length; ++f < h;)
        if (r = s[f]) {
          i = r.__transition__[o], e = n.call(r, r.__data__, f, c), a.push(t = []);
          for (var g = -1, p = e.length; ++g < p;)(u = e[g]) && Ni(u, g, o, i), t.push(u)
        }
    return Ei(a, o)
  }, Ic.filter = function(n) {
    var t, e, r, u = [];
    "function" != typeof n && (n = k(n));
    for (var i = 0, o = this.length; o > i; i++) {
      u.push(t = []);
      for (var e = this[i], a = 0, c = e.length; c > a; a++)(r = e[a]) && n.call(r, r.__data__, a) && t.push(r)
    }
    return Ei(u, this.id)
  }, Ic.tween = function(n, t) {
    var e = this.id;
    return arguments.length < 2 ? this.node().__transition__[e].tween.get(n) : N(this, null == t ? function(t) {
      t.__transition__[e].tween.remove(n)
    } : function(r) {
      r.__transition__[e].tween.set(n, t)
    })
  }, Ic.attr = function(n, t) {
    function e() {
      this.removeAttribute(a)
    }

    function r() {
      this.removeAttributeNS(a.space, a.local)
    }

    function u(n) {
      return null == n ? e : (n += "", function() {
        var t, e = this.getAttribute(a);
        return e !== n && (t = o(e, n), function(n) {
          this.setAttribute(a, t(n))
        })
      })
    }

    function i(n) {
      return null == n ? r : (n += "", function() {
        var t, e = this.getAttributeNS(a.space, a.local);
        return e !== n && (t = o(e, n), function(n) {
          this.setAttributeNS(a.space, a.local, t(n))
        })
      })
    }
    if (arguments.length < 2) {
      for (t in n) this.attr(t, n[t]);
      return this
    }
    var o = "transform" == n ? Br : Er,
      a = mo.ns.qualify(n);
    return ki(this, "attr." + n, t, a.local ? i : u)
  }, Ic.attrTween = function(n, t) {
    function e(n, e) {
      var r = t.call(this, n, e, this.getAttribute(u));
      return r && function(n) {
        this.setAttribute(u, r(n))
      }
    }

    function r(n, e) {
      var r = t.call(this, n, e, this.getAttributeNS(u.space, u.local));
      return r && function(n) {
        this.setAttributeNS(u.space, u.local, r(n))
      }
    }
    var u = mo.ns.qualify(n);
    return this.tween("attr." + n, u.local ? r : e)
  }, Ic.style = function(n, t, e) {
    function r() {
      this.style.removeProperty(n)
    }

    function u(t) {
      return null == t ? r : (t += "", function() {
        var r, u = _o.getComputedStyle(this, null).getPropertyValue(n);
        return u !== t && (r = Er(u, t), function(t) {
          this.style.setProperty(n, r(t), e)
        })
      })
    }
    var i = arguments.length;
    if (3 > i) {
      if ("string" != typeof n) {
        2 > i && (t = "");
        for (e in n) this.style(e, n[e], t);
        return this
      }
      e = ""
    }
    return ki(this, "style." + n, t, u)
  }, Ic.styleTween = function(n, t, e) {
    function r(r, u) {
      var i = t.call(this, r, u, _o.getComputedStyle(this, null).getPropertyValue(n));
      return i && function(t) {
        this.style.setProperty(n, i(t), e)
      }
    }
    return arguments.length < 3 && (e = ""), this.tween("style." + n, r)
  }, Ic.text = function(n) {
    return ki(this, "text", n, Ai)
  }, Ic.remove = function() {
    return this.each("end.transition", function() {
      var n;
      this.__transition__.count < 2 && (n = this.parentNode) && n.removeChild(this)
    })
  }, Ic.ease = function(n) {
    var t = this.id;
    return arguments.length < 1 ? this.node().__transition__[t].ease : ("function" != typeof n && (n = mo.ease.apply(mo, arguments)), N(this, function(e) {
      e.__transition__[t].ease = n
    }))
  }, Ic.delay = function(n) {
    var t = this.id;
    return N(this, "function" == typeof n ? function(e, r, u) {
      e.__transition__[t].delay = +n.call(e, e.__data__, r, u)
    } : (n = +n, function(e) {
      e.__transition__[t].delay = n
    }))
  }, Ic.duration = function(n) {
    var t = this.id;
    return N(this, "function" == typeof n ? function(e, r, u) {
      e.__transition__[t].duration = Math.max(1, n.call(e, e.__data__, r, u))
    } : (n = Math.max(1, n), function(e) {
      e.__transition__[t].duration = n
    }))
  }, Ic.each = function(n, t) {
    var e = this.id;
    if (arguments.length < 2) {
      var r = Oc,
        u = Pc;
      Pc = e, N(this, function(t, r, u) {
        Oc = t.__transition__[e], n.call(t, t.__data__, r, u)
      }), Oc = r, Pc = u
    } else N(this, function(r) {
      var u = r.__transition__[e];
      (u.event || (u.event = mo.dispatch("start", "end"))).on(n, t)
    });
    return this
  }, Ic.transition = function() {
    for (var n, t, e, r, u = this.id, i = ++Uc, o = [], a = 0, c = this.length; c > a; a++) {
      o.push(n = []);
      for (var t = this[a], l = 0, s = t.length; s > l; l++)(e = t[l]) && (r = Object.create(e.__transition__[u]), r.delay += r.duration, Ni(e, l, i, r)), n.push(e)
    }
    return Ei(o, i)
  }, mo.svg.axis = function() {
    function n(n) {
      n.each(function() {
        var n, l = mo.select(this),
          s = null == c ? e.ticks ? e.ticks.apply(e, a) : e.domain() : c,
          f = null == t ? e.tickFormat ? e.tickFormat.apply(e, a) : dt : t,
          h = l.selectAll(".tick").data(s, dt),
          g = h.enter().insert("g", ".domain").attr("class", "tick").style("opacity", 1e-6),
          p = mo.transition(h.exit()).style("opacity", 1e-6).remove(),
          d = mo.transition(h).style("opacity", 1),
          v = Bu(e),
          m = l.selectAll(".domain").data([0]),
          y = (m.enter().append("path").attr("class", "domain"), mo.transition(m)),
          M = e.copy(),
          x = this.__chart__ || M;
        this.__chart__ = M, g.append("line"), g.append("text");
        var b = g.select("line"),
          _ = d.select("line"),
          w = h.select("text").text(f),
          S = g.select("text"),
          E = d.select("text");
        switch (r) {
          case "bottom":
            n = Ti, b.attr("y2", u), S.attr("y", Math.max(u, 0) + o), _.attr("x2", 0).attr("y2", u), E.attr("x", 0).attr("y", Math.max(u, 0) + o), w.attr("dy", ".71em").style("text-anchor", "middle"), y.attr("d", "M" + v[0] + "," + i + "V0H" + v[1] + "V" + i);
            break;
          case "top":
            n = Ti, b.attr("y2", -u), S.attr("y", -(Math.max(u, 0) + o)), _.attr("x2", 0).attr("y2", -u), E.attr("x", 0).attr("y", -(Math.max(u, 0) + o)), w.attr("dy", "0em").style("text-anchor", "middle"), y.attr("d", "M" + v[0] + "," + -i + "V0H" + v[1] + "V" + -i);
            break;
          case "left":
            n = qi, b.attr("x2", -u), S.attr("x", -(Math.max(u, 0) + o)), _.attr("x2", -u).attr("y2", 0), E.attr("x", -(Math.max(u, 0) + o)).attr("y", 0), w.attr("dy", ".32em").style("text-anchor", "end"), y.attr("d", "M" + -i + "," + v[0] + "H0V" + v[1] + "H" + -i);
            break;
          case "right":
            n = qi, b.attr("x2", u), S.attr("x", Math.max(u, 0) + o), _.attr("x2", u).attr("y2", 0), E.attr("x", Math.max(u, 0) + o).attr("y", 0), w.attr("dy", ".32em").style("text-anchor", "start"), y.attr("d", "M" + i + "," + v[0] + "H0V" + v[1] + "H" + i)
        }
        if (e.rangeBand) {
          var k = M.rangeBand() / 2,
            A = function(n) {
              return M(n) + k
            };
          g.call(n, A), d.call(n, A)
        } else g.call(n, x), d.call(n, M), p.call(n, M)
      })
    }
    var t, e = mo.scale.linear(),
      r = Zc,
      u = 6,
      i = 6,
      o = 3,
      a = [10],
      c = null;
    return n.scale = function(t) {
      return arguments.length ? (e = t, n) : e
    }, n.orient = function(t) {
      return arguments.length ? (r = t in Vc ? t + "" : Zc, n) : r
    }, n.ticks = function() {
      return arguments.length ? (a = arguments, n) : a
    }, n.tickValues = function(t) {
      return arguments.length ? (c = t, n) : c
    }, n.tickFormat = function(e) {
      return arguments.length ? (t = e, n) : t
    }, n.tickSize = function(t) {
      var e = arguments.length;
      return e ? (u = +t, i = +arguments[e - 1], n) : u
    }, n.innerTickSize = function(t) {
      return arguments.length ? (u = +t, n) : u
    }, n.outerTickSize = function(t) {
      return arguments.length ? (i = +t, n) : i
    }, n.tickPadding = function(t) {
      return arguments.length ? (o = +t, n) : o
    }, n.tickSubdivide = function() {
      return arguments.length && n
    }, n
  };
  var Zc = "bottom",
    Vc = {
      top: 1,
      right: 1,
      bottom: 1,
      left: 1
    };
  mo.svg.brush = function() {
    function n(i) {
      i.each(function() {
        var i = mo.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", u).on("touchstart.brush", u),
          o = i.selectAll(".background").data([0]);
        o.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), i.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
        var a = i.selectAll(".resize").data(v, dt);
        a.exit().remove(), a.enter().append("g").attr("class", function(n) {
          return "resize " + n
        }).style("cursor", function(n) {
          return Xc[n]
        }).append("rect").attr("x", function(n) {
          return /[ew]$/.test(n) ? -3 : null
        }).attr("y", function(n) {
          return /^[ns]/.test(n) ? -3 : null
        }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), a.style("display", n.empty() ? "none" : null);
        var s, f = mo.transition(i),
          h = mo.transition(o);
        c && (s = Bu(c), h.attr("x", s[0]).attr("width", s[1] - s[0]), e(f)), l && (s = Bu(l), h.attr("y", s[0]).attr("height", s[1] - s[0]), r(f)), t(f)
      })
    }

    function t(n) {
      n.selectAll(".resize").attr("transform", function(n) {
        return "translate(" + s[+/e$/.test(n)] + "," + h[+/^s/.test(n)] + ")"
      })
    }

    function e(n) {
      n.select(".extent").attr("x", s[0]), n.selectAll(".extent,.n>rect,.s>rect").attr("width", s[1] - s[0])
    }

    function r(n) {
      n.select(".extent").attr("y", h[0]), n.selectAll(".extent,.e>rect,.w>rect").attr("height", h[1] - h[0])
    }

    function u() {
      function u() {
        32 == mo.event.keyCode && (N || (M = null, q[0] -= s[1], q[1] -= h[1], N = 2), f())
      }

      function g() {
        32 == mo.event.keyCode && 2 == N && (q[0] += s[1], q[1] += h[1], N = 0, f())
      }

      function v() {
        var n = mo.mouse(b),
          u = !1;
        x && (n[0] += x[0], n[1] += x[1]), N || (mo.event.altKey ? (M || (M = [(s[0] + s[1]) / 2, (h[0] + h[1]) / 2]), q[0] = s[+(n[0] < M[0])], q[1] = h[+(n[1] < M[1])]) : M = null), k && m(n, c, 0) && (e(S), u = !0), A && m(n, l, 1) && (r(S), u = !0), u && (t(S), w({
          type: "brush",
          mode: N ? "move" : "resize"
        }))
      }

      function m(n, t, e) {
        var r, u, a = Bu(t),
          c = a[0],
          l = a[1],
          f = q[e],
          g = e ? h : s,
          v = g[1] - g[0];
        return N && (c -= f, l -= v + f), r = (e ? d : p) ? Math.max(c, Math.min(l, n[e])) : n[e], N ? u = (r += f) + v : (M && (f = Math.max(c, Math.min(l, 2 * M[e] - r))), r > f ? (u = r, r = f) : u = f), g[0] != r || g[1] != u ? (e ? o = null : i = null, g[0] = r, g[1] = u, !0) : void 0
      }

      function y() {
        v(), S.style("pointer-events", "all").selectAll(".resize").style("display", n.empty() ? "none" : null), mo.select("body").style("cursor", null), z.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), T(), w({
          type: "brushend"
        })
      }
      var M, x, b = this,
        _ = mo.select(mo.event.target),
        w = a.of(b, arguments),
        S = mo.select(b),
        E = _.datum(),
        k = !/^(n|s)$/.test(E) && c,
        A = !/^(e|w)$/.test(E) && l,
        N = _.classed("extent"),
        T = L(),
        q = mo.mouse(b),
        z = mo.select(_o).on("keydown.brush", u).on("keyup.brush", g);
      if (mo.event.changedTouches ? z.on("touchmove.brush", v).on("touchend.brush", y) : z.on("mousemove.brush", v).on("mouseup.brush", y), S.interrupt().selectAll("*").interrupt(), N) q[0] = s[0] - q[0], q[1] = h[0] - q[1];
      else if (E) {
        var C = +/w$/.test(E),
          D = +/^n/.test(E);
        x = [s[1 - C] - q[0], h[1 - D] - q[1]], q[0] = s[C], q[1] = h[D]
      } else mo.event.altKey && (M = q.slice());
      S.style("pointer-events", "none").selectAll(".resize").style("display", null), mo.select("body").style("cursor", _.style("cursor")), w({
        type: "brushstart"
      }), v()
    }
    var i, o, a = g(n, "brushstart", "brush", "brushend"),
      c = null,
      l = null,
      s = [0, 0],
      h = [0, 0],
      p = !0,
      d = !0,
      v = $c[0];
    return n.event = function(n) {
      n.each(function() {
        var n = a.of(this, arguments),
          t = {
            x: s,
            y: h,
            i: i,
            j: o
          }, e = this.__chart__ || t;
        this.__chart__ = t, Pc ? mo.select(this).transition().each("start.brush", function() {
          i = e.i, o = e.j, s = e.x, h = e.y, n({
            type: "brushstart"
          })
        }).tween("brush:brush", function() {
          var e = kr(s, t.x),
            r = kr(h, t.y);
          return i = o = null,
          function(u) {
            s = t.x = e(u), h = t.y = r(u), n({
              type: "brush",
              mode: "resize"
            })
          }
        }).each("end.brush", function() {
          i = t.i, o = t.j, n({
            type: "brush",
            mode: "resize"
          }), n({
            type: "brushend"
          })
        }) : (n({
          type: "brushstart"
        }), n({
          type: "brush",
          mode: "resize"
        }), n({
          type: "brushend"
        }))
      })
    }, n.x = function(t) {
      return arguments.length ? (c = t, v = $c[!c << 1 | !l], n) : c
    }, n.y = function(t) {
      return arguments.length ? (l = t, v = $c[!c << 1 | !l], n) : l
    }, n.clamp = function(t) {
      return arguments.length ? (c && l ? (p = !! t[0], d = !! t[1]) : c ? p = !! t : l && (d = !! t), n) : c && l ? [p, d] : c ? p : l ? d : null
    }, n.extent = function(t) {
      var e, r, u, a, f;
      return arguments.length ? (c && (e = t[0], r = t[1], l && (e = e[0], r = r[0]), i = [e, r], c.invert && (e = c(e), r = c(r)), e > r && (f = e, e = r, r = f), (e != s[0] || r != s[1]) && (s = [e, r])), l && (u = t[0], a = t[1], c && (u = u[1], a = a[1]), o = [u, a], l.invert && (u = l(u), a = l(a)), u > a && (f = u, u = a, a = f), (u != h[0] || a != h[1]) && (h = [u, a])), n) : (c && (i ? (e = i[0], r = i[1]) : (e = s[0], r = s[1], c.invert && (e = c.invert(e), r = c.invert(r)), e > r && (f = e, e = r, r = f))), l && (o ? (u = o[0], a = o[1]) : (u = h[0], a = h[1], l.invert && (u = l.invert(u), a = l.invert(a)), u > a && (f = u, u = a, a = f))), c && l ? [
        [e, u],
        [r, a]
      ] : c ? [e, r] : l && [u, a])
    }, n.clear = function() {
      return n.empty() || (s = [0, 0], h = [0, 0], i = o = null), n
    }, n.empty = function() {
      return !!c && s[0] == s[1] || !! l && h[0] == h[1]
    }, mo.rebind(n, a, "on")
  };
  var Xc = {
    n: "ns-resize",
    e: "ew-resize",
    s: "ns-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    ne: "nesw-resize",
    se: "nwse-resize",
    sw: "nesw-resize"
  }, $c = [
      ["n", "e", "s", "w", "nw", "ne", "se", "sw"],
      ["e", "w"],
      ["n", "s"],
      []
    ],
    Bc = mo.time = {}, Wc = Date,
    Jc = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  zi.prototype = {
    getDate: function() {
      return this._.getUTCDate()
    },
    getDay: function() {
      return this._.getUTCDay()
    },
    getFullYear: function() {
      return this._.getUTCFullYear()
    },
    getHours: function() {
      return this._.getUTCHours()
    },
    getMilliseconds: function() {
      return this._.getUTCMilliseconds()
    },
    getMinutes: function() {
      return this._.getUTCMinutes()
    },
    getMonth: function() {
      return this._.getUTCMonth()
    },
    getSeconds: function() {
      return this._.getUTCSeconds()
    },
    getTime: function() {
      return this._.getTime()
    },
    getTimezoneOffset: function() {
      return 0
    },
    valueOf: function() {
      return this._.valueOf()
    },
    setDate: function() {
      Gc.setUTCDate.apply(this._, arguments)
    },
    setDay: function() {
      Gc.setUTCDay.apply(this._, arguments)
    },
    setFullYear: function() {
      Gc.setUTCFullYear.apply(this._, arguments)
    },
    setHours: function() {
      Gc.setUTCHours.apply(this._, arguments)
    },
    setMilliseconds: function() {
      Gc.setUTCMilliseconds.apply(this._, arguments)
    },
    setMinutes: function() {
      Gc.setUTCMinutes.apply(this._, arguments)
    },
    setMonth: function() {
      Gc.setUTCMonth.apply(this._, arguments)
    },
    setSeconds: function() {
      Gc.setUTCSeconds.apply(this._, arguments)
    },
    setTime: function() {
      Gc.setTime.apply(this._, arguments)
    }
  };
  var Gc = Date.prototype,
    Kc = "%a %b %e %X %Y",
    Qc = "%m/%d/%Y",
    nl = "%H:%M:%S",
    tl = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    el = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    rl = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    ul = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  Bc.year = Ci(function(n) {
    return n = Bc.day(n), n.setMonth(0, 1), n
  }, function(n, t) {
    n.setFullYear(n.getFullYear() + t)
  }, function(n) {
    return n.getFullYear()
  }), Bc.years = Bc.year.range, Bc.years.utc = Bc.year.utc.range, Bc.day = Ci(function(n) {
    var t = new Wc(2e3, 0);
    return t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), t
  }, function(n, t) {
    n.setDate(n.getDate() + t)
  }, function(n) {
    return n.getDate() - 1
  }), Bc.days = Bc.day.range, Bc.days.utc = Bc.day.utc.range, Bc.dayOfYear = function(n) {
    var t = Bc.year(n);
    return Math.floor((n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5)
  }, Jc.forEach(function(n, t) {
    n = n.toLowerCase(), t = 7 - t;
    var e = Bc[n] = Ci(function(n) {
      return (n = Bc.day(n)).setDate(n.getDate() - (n.getDay() + t) % 7), n
    }, function(n, t) {
      n.setDate(n.getDate() + 7 * Math.floor(t))
    }, function(n) {
      var e = Bc.year(n).getDay();
      return Math.floor((Bc.dayOfYear(n) + (e + t) % 7) / 7) - (e !== t)
    });
    Bc[n + "s"] = e.range, Bc[n + "s"].utc = e.utc.range, Bc[n + "OfYear"] = function(n) {
      var e = Bc.year(n).getDay();
      return Math.floor((Bc.dayOfYear(n) + (e + t) % 7) / 7)
    }
  }), Bc.week = Bc.sunday, Bc.weeks = Bc.sunday.range, Bc.weeks.utc = Bc.sunday.utc.range, Bc.weekOfYear = Bc.sundayOfYear, Bc.format = ji;
  var il = Hi(tl),
    ol = Fi(tl),
    al = Hi(el),
    cl = Fi(el),
    ll = Hi(rl),
    sl = Fi(rl),
    fl = Hi(ul),
    hl = Fi(ul),
    gl = /^%/,
    pl = {
      "-": "",
      _: " ",
      0: "0"
    }, dl = {
      a: function(n) {
        return el[n.getDay()]
      },
      A: function(n) {
        return tl[n.getDay()]
      },
      b: function(n) {
        return ul[n.getMonth()]
      },
      B: function(n) {
        return rl[n.getMonth()]
      },
      c: ji(Kc),
      d: function(n, t) {
        return Pi(n.getDate(), t, 2)
      },
      e: function(n, t) {
        return Pi(n.getDate(), t, 2)
      },
      H: function(n, t) {
        return Pi(n.getHours(), t, 2)
      },
      I: function(n, t) {
        return Pi(n.getHours() % 12 || 12, t, 2)
      },
      j: function(n, t) {
        return Pi(1 + Bc.dayOfYear(n), t, 3)
      },
      L: function(n, t) {
        return Pi(n.getMilliseconds(), t, 3)
      },
      m: function(n, t) {
        return Pi(n.getMonth() + 1, t, 2)
      },
      M: function(n, t) {
        return Pi(n.getMinutes(), t, 2)
      },
      p: function(n) {
        return n.getHours() >= 12 ? "PM" : "AM"
      },
      S: function(n, t) {
        return Pi(n.getSeconds(), t, 2)
      },
      U: function(n, t) {
        return Pi(Bc.sundayOfYear(n), t, 2)
      },
      w: function(n) {
        return n.getDay()
      },
      W: function(n, t) {
        return Pi(Bc.mondayOfYear(n), t, 2)
      },
      x: ji(Qc),
      X: ji(nl),
      y: function(n, t) {
        return Pi(n.getFullYear() % 100, t, 2)
      },
      Y: function(n, t) {
        return Pi(n.getFullYear() % 1e4, t, 4)
      },
      Z: ao,
      "%": function() {
        return "%"
      }
    }, vl = {
      a: Oi,
      A: Ri,
      b: Zi,
      B: Vi,
      c: Xi,
      d: no,
      e: no,
      H: eo,
      I: eo,
      j: to,
      L: io,
      m: Qi,
      M: ro,
      p: oo,
      S: uo,
      U: Ii,
      w: Yi,
      W: Ui,
      x: $i,
      X: Bi,
      y: Ji,
      Y: Wi,
      Z: Gi,
      "%": co
    }, ml = /^\s*\d+/,
    yl = mo.map({
      am: 0,
      pm: 1
    });
  ji.utc = lo;
  var Ml = lo("%Y-%m-%dT%H:%M:%S.%LZ");
  ji.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? so : Ml, so.parse = function(n) {
    var t = new Date(n);
    return isNaN(t) ? null : t
  }, so.toString = Ml.toString, Bc.second = Ci(function(n) {
    return new Wc(1e3 * Math.floor(n / 1e3))
  }, function(n, t) {
    n.setTime(n.getTime() + 1e3 * Math.floor(t))
  }, function(n) {
    return n.getSeconds()
  }), Bc.seconds = Bc.second.range, Bc.seconds.utc = Bc.second.utc.range, Bc.minute = Ci(function(n) {
    return new Wc(6e4 * Math.floor(n / 6e4))
  }, function(n, t) {
    n.setTime(n.getTime() + 6e4 * Math.floor(t))
  }, function(n) {
    return n.getMinutes()
  }), Bc.minutes = Bc.minute.range, Bc.minutes.utc = Bc.minute.utc.range, Bc.hour = Ci(function(n) {
    var t = n.getTimezoneOffset() / 60;
    return new Wc(36e5 * (Math.floor(n / 36e5 - t) + t))
  }, function(n, t) {
    n.setTime(n.getTime() + 36e5 * Math.floor(t))
  }, function(n) {
    return n.getHours()
  }), Bc.hours = Bc.hour.range, Bc.hours.utc = Bc.hour.utc.range, Bc.month = Ci(function(n) {
    return n = Bc.day(n), n.setDate(1), n
  }, function(n, t) {
    n.setMonth(n.getMonth() + t)
  }, function(n) {
    return n.getMonth()
  }), Bc.months = Bc.month.range, Bc.months.utc = Bc.month.utc.range;
  var xl = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
    bl = [
      [Bc.second, 1],
      [Bc.second, 5],
      [Bc.second, 15],
      [Bc.second, 30],
      [Bc.minute, 1],
      [Bc.minute, 5],
      [Bc.minute, 15],
      [Bc.minute, 30],
      [Bc.hour, 1],
      [Bc.hour, 3],
      [Bc.hour, 6],
      [Bc.hour, 12],
      [Bc.day, 1],
      [Bc.day, 2],
      [Bc.week, 1],
      [Bc.month, 1],
      [Bc.month, 3],
      [Bc.year, 1]
    ],
    _l = [
      [ji("%Y"), Vt],
      [ji("%B"),
        function(n) {
          return n.getMonth()
        }
      ],
      [ji("%b %d"),
        function(n) {
          return 1 != n.getDate()
        }
      ],
      [ji("%a %d"),
        function(n) {
          return n.getDay() && 1 != n.getDate()
        }
      ],
      [ji("%I %p"),
        function(n) {
          return n.getHours()
        }
      ],
      [ji("%I:%M"),
        function(n) {
          return n.getMinutes()
        }
      ],
      [ji(":%S"),
        function(n) {
          return n.getSeconds()
        }
      ],
      [ji(".%L"),
        function(n) {
          return n.getMilliseconds()
        }
      ]
    ],
    wl = go(_l);
  bl.year = Bc.year, Bc.scale = function() {
    return fo(mo.scale.linear(), bl, wl)
  };
  var Sl = {
    range: function(n, t, e) {
      return mo.range(+n, +t, e).map(ho)
    }
  }, El = bl.map(function(n) {
      return [n[0].utc, n[1]]
    }),
    kl = [
      [lo("%Y"), Vt],
      [lo("%B"),
        function(n) {
          return n.getUTCMonth()
        }
      ],
      [lo("%b %d"),
        function(n) {
          return 1 != n.getUTCDate()
        }
      ],
      [lo("%a %d"),
        function(n) {
          return n.getUTCDay() && 1 != n.getUTCDate()
        }
      ],
      [lo("%I %p"),
        function(n) {
          return n.getUTCHours()
        }
      ],
      [lo("%I:%M"),
        function(n) {
          return n.getUTCMinutes()
        }
      ],
      [lo(":%S"),
        function(n) {
          return n.getUTCSeconds()
        }
      ],
      [lo(".%L"),
        function(n) {
          return n.getUTCMilliseconds()
        }
      ]
    ],
    Al = go(kl);
  return El.year = Bc.year.utc, Bc.scale.utc = function() {
    return fo(mo.scale.linear(), El, Al)
  }, mo.text = vt(function(n) {
    return n.responseText
  }), mo.json = function(n, t) {
    return mt(n, "application/json", po, t)
  }, mo.html = function(n, t) {
    return mt(n, "text/html", vo, t)
  }, mo.xml = vt(function(n) {
    return n.responseXML
  }), mo
}();/*!
Deck JS - deck.core
Copyright (c) 2011-2014 Caleb Troughton
Dual licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
The deck.core module provides all the basic functionality for creating and
moving through a deck.  It does so by applying classes to indicate the state of
the deck and its slides, allowing CSS to take care of the visual representation
of each state.  It also provides methods for navigating the deck and inspecting
its state, as well as basic key bindings for going to the next and previous
slides.  More functionality is provided by wholly separate extension modules
that use the API provided by core.
*/
(function($, undefined) {
  var slides, currentIndex, $container, $fragmentLinks;

  var events = {
    /*
    This event fires at the beginning of a slide change, before the actual
    change occurs. Its purpose is to give extension authors a way to prevent
    the slide change from occuring. This is done by calling preventDefault
    on the event object within this event. If that is done, the deck.change
    event will never be fired and the slide will not change.
    */
    beforeChange: 'deck.beforeChange',

    /*
    This event fires whenever the current slide changes, whether by way of
    next, prev, or go. The callback function is passed two parameters, from
    and to, equal to the indices of the old slide and the new slide
    respectively. If preventDefault is called on the event within this handler
    the slide change does not occur.

    $(document).bind('deck.change', function(event, from, to) {
       alert('Moving from slide ' + from + ' to ' + to);
    });
    */
    change: 'deck.change',

    /*
    This event fires at the beginning of deck initialization. This event makes
    a good hook for preprocessing extensions looking to modify the DOM before
    the deck is fully initialized. It is also possible to halt the deck.init
    event from firing while you do things in beforeInit. This can be done by
    calling lockInit on the event object passed to this event. The init can be
    released by calling releaseInit.

    $(document).bind('deck.beforeInit', function(event) {
      event.lockInit(); // halts deck.init event
      window.setTimeout(function() {
        event.releaseInit(); // deck.init will now fire 2 seconds later
      }, 2000);
    });

    The init event will be fired regardless of locks after
    options.initLockTimeout milliseconds.
    */
    beforeInitialize: 'deck.beforeInit',

    /*
    This event fires at the end of deck initialization. Extensions should
    implement any code that relies on user extensible options (key bindings,
    element selectors, classes) within a handler for this event. Native
    events associated with Deck JS should be scoped under a .deck event
    namespace, as with the example below:

    var $d = $(document);
    $.deck.defaults.keys.myExtensionKeycode = 70; // 'h'
    $d.bind('deck.init', function() {
       $d.bind('keydown.deck', function(event) {
          if (event.which === $.deck.getOptions().keys.myExtensionKeycode) {
             // Rock out
          }
       });
    });
    */
    initialize: 'deck.init'
  };

  var options = {};
  var $document = $(document);
  var $window = $(window);
  var stopPropagation = function(event) {
    event.stopPropagation();
  };

  var updateContainerState = function() {
    var oldIndex = $container.data('onSlide');
    $container.removeClass(options.classes.onPrefix + oldIndex);
    $container.addClass(options.classes.onPrefix + currentIndex);
    $container.data('onSlide', currentIndex);
  };

  var updateChildCurrent = function() {
    var $oldCurrent = $('.' + options.classes.current);
    var $oldParents = $oldCurrent.parentsUntil(options.selectors.container);
    var $newCurrent = slides[currentIndex];
    var $newParents = $newCurrent.parentsUntil(options.selectors.container);
    $oldParents.removeClass(options.classes.childCurrent);
    $newParents.addClass(options.classes.childCurrent);
  };

  var removeOldSlideStates = function() {
    var $all = $();
    $.each(slides, function(i, el) {
      $all = $all.add(el);
    });
    $all.removeClass([
      options.classes.before,
      options.classes.previous,
      options.classes.current,
      options.classes.next,
      options.classes.after
    ].join(' '));
  };

  var addNewSlideStates = function() {
    slides[currentIndex].addClass(options.classes.current);
    if (currentIndex > 0) {
      slides[currentIndex-1].addClass(options.classes.previous);
    }
    if (currentIndex + 1 < slides.length) {
      slides[currentIndex+1].addClass(options.classes.next);
    }
    if (currentIndex > 1) {
      $.each(slides.slice(0, currentIndex - 1), function(i, $slide) {
        $slide.addClass(options.classes.before);
      });
    }
    if (currentIndex + 2 < slides.length) {
      $.each(slides.slice(currentIndex+2), function(i, $slide) {
        $slide.addClass(options.classes.after);
      });
    }
  };

  var setAriaHiddens = function() {
    $(options.selectors.slides).each(function() {
      var $slide = $(this);
      var isSub = $slide.closest('.' + options.classes.childCurrent).length;
      var isBefore = $slide.hasClass(options.classes.before) && !isSub;
      var isPrevious = $slide.hasClass(options.classes.previous) && !isSub;
      var isNext = $slide.hasClass(options.classes.next);
      var isAfter = $slide.hasClass(options.classes.after);
      var ariaHiddenValue = isBefore || isPrevious || isNext || isAfter;
      $slide.attr('aria-hidden', ariaHiddenValue);
    });
  };

  var updateStates = function() {
    updateContainerState();
    updateChildCurrent();
    removeOldSlideStates();
    addNewSlideStates();
    if (options.setAriaHiddens) {
      setAriaHiddens();
    }
  };

  var initSlidesArray = function(elements) {
    if ($.isArray(elements)) {
      $.each(elements, function(i, element) {
        slides.push($(element));
      });
    }
    else {
      $(elements).each(function(i, element) {
        slides.push($(element));
      });
    }
  };

  var bindKeyEvents = function() {
    var editables = [
      'input',
      'textarea',
      'select',
      'button',
      'meter',
      'progress',
      '[contentEditable]'
    ].join(', ');

    $document.unbind('keydown.deck').bind('keydown.deck', function(event) {
      var isNext = event.which === options.keys.next;
      var isPrev = event.which === options.keys.previous;
      isNext = isNext || $.inArray(event.which, options.keys.next) > -1;
      isPrev = isPrev || $.inArray(event.which, options.keys.previous) > -1;

      if (isNext) {
        methods.next();
        event.preventDefault();
      }
      else if (isPrev) {
        methods.prev();
        event.preventDefault();
      }
    });

    $document.undelegate(editables, 'keydown.deck', stopPropagation);
    $document.delegate(editables, 'keydown.deck', stopPropagation);
  };

  var bindTouchEvents = function() {
    var startTouch;
    var direction = options.touch.swipeDirection;
    var tolerance = options.touch.swipeTolerance;
    var listenToHorizontal = ({ both: true, horizontal: true })[direction];
    var listenToVertical = ({ both: true, vertical: true })[direction];

    $container.unbind('touchstart.deck');
    $container.bind('touchstart.deck', function(event) {
      if (!startTouch) {
        startTouch = $.extend({}, event.originalEvent.targetTouches[0]);
      }
    });

    $container.unbind('touchmove.deck');
    $container.bind('touchmove.deck', function(event) {
      $.each(event.originalEvent.changedTouches, function(i, touch) {
        if (!startTouch || touch.identifier !== startTouch.identifier) {
          return true;
        }
        var xDistance = touch.screenX - startTouch.screenX;
        var yDistance = touch.screenY - startTouch.screenY;
        var leftToRight = xDistance > tolerance && listenToHorizontal;
        var rightToLeft = xDistance < -tolerance && listenToHorizontal;
        var topToBottom = yDistance > tolerance && listenToVertical;
        var bottomToTop = yDistance < -tolerance && listenToVertical;

        if (leftToRight || topToBottom) {
          $.deck('prev');
          startTouch = undefined;
        }
        else if (rightToLeft || bottomToTop) {
          $.deck('next');
          startTouch = undefined;
        }
        return false;
      });

      if (listenToVertical) {
        event.preventDefault();
      }
    });

    $container.unbind('touchend.deck');
    $container.bind('touchend.deck', function(event) {
      $.each(event.originalEvent.changedTouches, function(i, touch) {
        if (startTouch && touch.identifier === startTouch.identifier) {
          startTouch = undefined;
        }
      });
    });
  };

  var indexInBounds = function(index) {
    return typeof index === 'number' && index >=0 && index < slides.length;
  };

  var createBeforeInitEvent = function() {
    var event = $.Event(events.beforeInitialize);
    event.locks = 0;
    event.done = $.noop;
    event.lockInit = function() {
      ++event.locks;
    };
    event.releaseInit = function() {
      --event.locks;
      if (!event.locks) {
        event.done();
      }
    };
    return event;
  };

  var goByHash = function(str) {
    var id = str.substr(str.indexOf("#") + 1);

    $.each(slides, function(i, $slide) {
      if ($slide.attr('id') === id) {
        $.deck('go', i);
        return false;
      }
    });

    // If we don't set these to 0 the container scrolls due to hashchange
    if (options.preventFragmentScroll) {
      $.deck('getContainer').scrollLeft(0).scrollTop(0);
    }
  };

  var assignSlideId = function(i, $slide) {
    var currentId = $slide.attr('id');
    var previouslyAssigned = $slide.data('deckAssignedId') === currentId;
    if (!currentId || previouslyAssigned) {
      $slide.attr('id', options.hashPrefix + i);
      $slide.data('deckAssignedId', options.hashPrefix + i);
    }
  };

  var removeContainerHashClass = function(id) {
    $container.removeClass(options.classes.onPrefix + id);
  };

  var addContainerHashClass = function(id) {
    $container.addClass(options.classes.onPrefix + id);
  };

  var setupHashBehaviors = function() {
    $fragmentLinks = $();
    $.each(slides, function(i, $slide) {
      var hash;

      assignSlideId(i, $slide);
      hash = '#' + $slide.attr('id');
      if (hash === window.location.hash) {
        setTimeout(function() {
          $.deck('go', i);
        }, 1);
      }
      $fragmentLinks = $fragmentLinks.add('a[href="' + hash + '"]');
    });

    if (slides.length) {
      addContainerHashClass($.deck('getSlide').attr('id'));
    };
  };

  var changeHash = function(from, to) {
    var hash = '#' + $.deck('getSlide', to).attr('id');
    var hashPath = window.location.href.replace(/#.*/, '') + hash;

    removeContainerHashClass($.deck('getSlide', from).attr('id'));
    addContainerHashClass($.deck('getSlide', to).attr('id'));
    if (Modernizr.history) {
      window.history.replaceState({}, "", hashPath);
    }
  };

  /* Methods exposed in the jQuery.deck namespace */
  var methods = {

    /*
    jQuery.deck(selector, options)

    selector: string | jQuery | array
    options: object, optional

    Initializes the deck, using each element matched by selector as a slide.
    May also be passed an array of string selectors or jQuery objects, in
    which case each selector in the array is considered a slide. The second
    parameter is an optional options object which will extend the default
    values.

    Users may also pass only an options object to init. In this case the slide
    selector will be options.selectors.slides which defaults to .slide.

    $.deck('.slide');

    or

    $.deck([
       '#first-slide',
       '#second-slide',
       '#etc'
    ]);
    */
    init: function(opts) {
      var beforeInitEvent = createBeforeInitEvent();
      var overrides = opts;

      if (!$.isPlainObject(opts)) {
        overrides = arguments[1] || {};
        $.extend(true, overrides, {
          selectors: {
            slides: arguments[0]
          }
        });
      }

      options = $.extend(true, {}, $.deck.defaults, overrides);
      slides = [];
      currentIndex = 0;
      $container = $(options.selectors.container);

      // Hide the deck while states are being applied to kill transitions
      $container.addClass(options.classes.loading);

      // populate the array of slides for pre-init
      initSlidesArray(options.selectors.slides);
      // Pre init event for preprocessing hooks
      beforeInitEvent.done = function() {
        // re-populate the array of slides
        slides = [];
        initSlidesArray(options.selectors.slides);
        setupHashBehaviors();
        bindKeyEvents();
        bindTouchEvents();
        $container.scrollLeft(0).scrollTop(0);

        if (slides.length) {
          updateStates();
        }

        // Show deck again now that slides are in place
        $container.removeClass(options.classes.loading);
        $document.trigger(events.initialize);
      };

      $document.trigger(beforeInitEvent);
      if (!beforeInitEvent.locks) {
        beforeInitEvent.done();
      }
      window.setTimeout(function() {
        if (beforeInitEvent.locks) {
          if (window.console) {
            window.console.warn('Something locked deck initialization\
              without releasing it before the timeout. Proceeding with\
              initialization anyway.');
          }
          beforeInitEvent.done();
        }
      }, options.initLockTimeout);
    },

    /*
    jQuery.deck('go', index)

    index: integer | string

    Moves to the slide at the specified index if index is a number. Index is
    0-based, so $.deck('go', 0); will move to the first slide. If index is a
    string this will move to the slide with the specified id. If index is out
    of bounds or doesn't match a slide id the call is ignored.
    */
    go: function(indexOrId) {
      var beforeChangeEvent = $.Event(events.beforeChange);
      var index;

      /* Number index, easy. */
      if (indexInBounds(indexOrId)) {
        index = indexOrId;
      }
      /* Id string index, search for it and set integer index */
      else if (typeof indexOrId === 'string') {
        $.each(slides, function(i, $slide) {
          if ($slide.attr('id') === indexOrId) {
            index = i;
            return false;
          }
        });
      }
      if (typeof index === 'undefined') {
        return;
      }

      /* Trigger beforeChange. If nothing prevents the change, trigger
      the slide change. */
      $document.trigger(beforeChangeEvent, [currentIndex, index]);
      if (!beforeChangeEvent.isDefaultPrevented()) {
        $document.trigger(events.change, [currentIndex, index]);
        changeHash(currentIndex, index);
        currentIndex = index;
        updateStates();
      }
    },

    /*
    jQuery.deck('next')

    Moves to the next slide. If the last slide is already active, the call
    is ignored.
    */
    next: function() {
      methods.go(currentIndex+1);
    },

    /*
    jQuery.deck('prev')

    Moves to the previous slide. If the first slide is already active, the
    call is ignored.
    */
    prev: function() {
      methods.go(currentIndex-1);
    },

    /*
    jQuery.deck('getSlide', index)

    index: integer, optional

    Returns a jQuery object containing the slide at index. If index is not
    specified, the current slide is returned.
    */
    getSlide: function(index) {
      index = typeof index !== 'undefined' ? index : currentIndex;
      if (!indexInBounds(index)) {
        return null;
      }
      return slides[index];
    },

    /*
    jQuery.deck('getSlides')

    Returns all slides as an array of jQuery objects.
    */
    getSlides: function() {
      return slides;
    },

    /*
    jQuery.deck('getTopLevelSlides')

    Returns all slides that are not subslides.
    */
    getTopLevelSlides: function() {
      var topLevelSlides = [];
      var slideSelector = options.selectors.slides;
      var subSelector = [slideSelector, slideSelector].join(' ');
      $.each(slides, function(i, $slide) {
        if (!$slide.is(subSelector)) {
          topLevelSlides.push($slide);
        }
      });
      return topLevelSlides;
    },

    /*
    jQuery.deck('getNestedSlides', index)

    index: integer, optional

    Returns all the nested slides of the current slide. If index is
    specified it returns the nested slides of the slide at that index.
    If there are no nested slides this will return an empty array.
    */
    getNestedSlides: function(index) {
      var targetIndex = index == null ? currentIndex : index;
      var $targetSlide = $.deck('getSlide', targetIndex);
      var $nesteds = $targetSlide.find(options.selectors.slides);
      var nesteds = $nesteds.get();
      return $.map(nesteds, function(slide, i) {
        return $(slide);
      });
    },


    /*
    jQuery.deck('getContainer')

    Returns a jQuery object containing the deck container as defined by the
    container option.
    */
    getContainer: function() {
      return $container;
    },

    /*
    jQuery.deck('getOptions')

    Returns the options object for the deck, including any overrides that
    were defined at initialization.
    */
    getOptions: function() {
      return options;
    },

    /*
    jQuery.deck('extend', name, method)

    name: string
    method: function

    Adds method to the deck namespace with the key of name. This doesn’t
    give access to any private member data — public methods must still be
    used within method — but lets extension authors piggyback on the deck
    namespace rather than pollute jQuery.

    $.deck('extend', 'alert', function(msg) {
       alert(msg);
    });

    // Alerts 'boom'
    $.deck('alert', 'boom');
    */
    extend: function(name, method) {
      methods[name] = method;
    }
  };

  /* jQuery extension */
  $.deck = function(method, arg) {
    var args = Array.prototype.slice.call(arguments, 1);
    if (methods[method]) {
      return methods[method].apply(this, args);
    }
    else {
      return methods.init(method, arg);
    }
  };

  /*
  The default settings object for a deck. All deck extensions should extend
  this object to add defaults for any of their options.

  options.classes.after
    This class is added to all slides that appear after the 'next' slide.

  options.classes.before
    This class is added to all slides that appear before the 'previous'
    slide.

  options.classes.childCurrent
    This class is added to all elements in the DOM tree between the
    'current' slide and the deck container. For standard slides, this is
    mostly seen and used for nested slides.

  options.classes.current
    This class is added to the current slide.

  options.classes.loading
    This class is applied to the deck container during loading phases and is
    primarily used as a way to short circuit transitions between states
    where such transitions are distracting or unwanted.  For example, this
    class is applied during deck initialization and then removed to prevent
    all the slides from appearing stacked and transitioning into place
    on load.

  options.classes.next
    This class is added to the slide immediately following the 'current'
    slide.

  options.classes.onPrefix
    This prefix, concatenated with the current slide index, is added to the
    deck container as you change slides.

  options.classes.previous
    This class is added to the slide immediately preceding the 'current'
    slide.

  options.selectors.container
    Elements matched by this CSS selector will be considered the deck
    container. The deck container is used to scope certain states of the
    deck, as with the onPrefix option, or with extensions such as deck.goto
    and deck.menu.

  options.selectors.slides
    Elements matched by this selector make up the individual deck slides.
    If a user chooses to pass the slide selector as the first argument to
    $.deck() on initialization it does the same thing as passing in this
    option and this option value will be set to the value of that parameter.

  options.keys.next
    The numeric keycode used to go to the next slide.

  options.keys.previous
    The numeric keycode used to go to the previous slide.

  options.touch.swipeDirection
    The direction swipes occur to cause slide changes. Can be 'horizontal',
    'vertical', or 'both'. Any other value or a falsy value will disable
    swipe gestures for navigation.

  options.touch.swipeTolerance
    The number of pixels the users finger must travel to produce a swipe
    gesture.

  options.initLockTimeout
    The number of milliseconds the init event will wait for BeforeInit event
    locks to be released before firing the init event regardless.

  options.hashPrefix
    Every slide that does not have an id is assigned one at initialization.
    Assigned ids take the form of hashPrefix + slideIndex, e.g., slide-0,
    slide-12, etc.

  options.preventFragmentScroll
    When deep linking to a hash of a nested slide, this scrolls the deck
    container to the top, undoing the natural browser behavior of scrolling
    to the document fragment on load.

  options.setAriaHiddens
    When set to true, deck.js will set aria hidden attributes for slides
    that do not appear onscreen according to a typical heirarchical
    deck structure. You may want to turn this off if you are using a theme
    where slides besides the current slide are visible on screen and should
    be accessible to screenreaders.
  */
  $.deck.defaults = {
    classes: {
      after: 'deck-after',
      before: 'deck-before',
      childCurrent: 'deck-child-current',
      current: 'deck-current',
      loading: 'deck-loading',
      next: 'deck-next',
      onPrefix: 'on-slide-',
      previous: 'deck-previous'
    },

    selectors: {
      container: '.deck-container',
      slides: '.slide'
    },

    keys: {
      // enter, space, page down, right arrow, down arrow,
      next: [13, 32, 34, 39, 40],
      // backspace, page up, left arrow, up arrow
      previous: [8, 33, 37, 38]
    },

    touch: {
      swipeDirection: 'horizontal',
      swipeTolerance: 60
    },

    initLockTimeout: 10000,
    hashPrefix: 'slide-',
    preventFragmentScroll: true,
    setAriaHiddens: true
  };

  $document.ready(function() {
    $('html').addClass('ready');
  });

  $window.bind('hashchange.deck', function(event) {
    if (event.originalEvent && event.originalEvent.newURL) {
      goByHash(event.originalEvent.newURL);
    }
    else {
      goByHash(window.location.hash);
    }
  });

  $window.bind('load.deck', function() {
    if (options.preventFragmentScroll) {
      $container.scrollLeft(0).scrollTop(0);
    }
  });
})(jQuery);
/*

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

// lib/handlebars/browser-prefix.js
var Handlebars = {};

(function(Handlebars, undefined) {
;
// lib/handlebars/base.js

Handlebars.VERSION = "1.0.0";
Handlebars.COMPILER_REVISION = 4;

Handlebars.REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '>= 1.0.0'
};

Handlebars.helpers  = {};
Handlebars.partials = {};

var toString = Object.prototype.toString,
    functionType = '[object Function]',
    objectType = '[object Object]';

Handlebars.registerHelper = function(name, fn, inverse) {
  if (toString.call(name) === objectType) {
    if (inverse || fn) { throw new Handlebars.Exception('Arg not supported with multiple helpers'); }
    Handlebars.Utils.extend(this.helpers, name);
  } else {
    if (inverse) { fn.not = inverse; }
    this.helpers[name] = fn;
  }
};

Handlebars.registerPartial = function(name, str) {
  if (toString.call(name) === objectType) {
    Handlebars.Utils.extend(this.partials,  name);
  } else {
    this.partials[name] = str;
  }
};

Handlebars.registerHelper('helperMissing', function(arg) {
  if(arguments.length === 2) {
    return undefined;
  } else {
    throw new Error("Missing helper: '" + arg + "'");
  }
});

Handlebars.registerHelper('blockHelperMissing', function(context, options) {
  var inverse = options.inverse || function() {}, fn = options.fn;

  var type = toString.call(context);

  if(type === functionType) { context = context.call(this); }

  if(context === true) {
    return fn(this);
  } else if(context === false || context == null) {
    return inverse(this);
  } else if(type === "[object Array]") {
    if(context.length > 0) {
      return Handlebars.helpers.each(context, options);
    } else {
      return inverse(this);
    }
  } else {
    return fn(context);
  }
});

Handlebars.K = function() {};

Handlebars.createFrame = Object.create || function(object) {
  Handlebars.K.prototype = object;
  var obj = new Handlebars.K();
  Handlebars.K.prototype = null;
  return obj;
};

Handlebars.logger = {
  DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3, level: 3,

  methodMap: {0: 'debug', 1: 'info', 2: 'warn', 3: 'error'},

  // can be overridden in the host environment
  log: function(level, obj) {
    if (Handlebars.logger.level <= level) {
      var method = Handlebars.logger.methodMap[level];
      if (typeof console !== 'undefined' && console[method]) {
        console[method].call(console, obj);
      }
    }
  }
};

Handlebars.log = function(level, obj) { Handlebars.logger.log(level, obj); };

Handlebars.registerHelper('each', function(context, options) {
  var fn = options.fn, inverse = options.inverse;
  var i = 0, ret = "", data;

  var type = toString.call(context);
  if(type === functionType) { context = context.call(this); }

  if (options.data) {
    data = Handlebars.createFrame(options.data);
  }

  if(context && typeof context === 'object') {
    if(context instanceof Array){
      for(var j = context.length; i<j; i++) {
        if (data) { data.index = i; }
        ret = ret + fn(context[i], { data: data });
      }
    } else {
      for(var key in context) {
        if(context.hasOwnProperty(key)) {
          if(data) { data.key = key; }
          ret = ret + fn(context[key], {data: data});
          i++;
        }
      }
    }
  }

  if(i === 0){
    ret = inverse(this);
  }

  return ret;
});

Handlebars.registerHelper('if', function(conditional, options) {
  var type = toString.call(conditional);
  if(type === functionType) { conditional = conditional.call(this); }

  if(!conditional || Handlebars.Utils.isEmpty(conditional)) {
    return options.inverse(this);
  } else {
    return options.fn(this);
  }
});

Handlebars.registerHelper('unless', function(conditional, options) {
  return Handlebars.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn});
});

Handlebars.registerHelper('with', function(context, options) {
  var type = toString.call(context);
  if(type === functionType) { context = context.call(this); }

  if (!Handlebars.Utils.isEmpty(context)) return options.fn(context);
});

Handlebars.registerHelper('log', function(context, options) {
  var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
  Handlebars.log(level, context);
});
;
// lib/handlebars/compiler/parser.js
/* Jison generated parser */
var handlebars = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"root":3,"program":4,"EOF":5,"simpleInverse":6,"statements":7,"statement":8,"openInverse":9,"closeBlock":10,"openBlock":11,"mustache":12,"partial":13,"CONTENT":14,"COMMENT":15,"OPEN_BLOCK":16,"inMustache":17,"CLOSE":18,"OPEN_INVERSE":19,"OPEN_ENDBLOCK":20,"path":21,"OPEN":22,"OPEN_UNESCAPED":23,"CLOSE_UNESCAPED":24,"OPEN_PARTIAL":25,"partialName":26,"params":27,"hash":28,"dataName":29,"param":30,"STRING":31,"INTEGER":32,"BOOLEAN":33,"hashSegments":34,"hashSegment":35,"ID":36,"EQUALS":37,"DATA":38,"pathSegments":39,"SEP":40,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"CLOSE_UNESCAPED",25:"OPEN_PARTIAL",31:"STRING",32:"INTEGER",33:"BOOLEAN",36:"ID",37:"EQUALS",38:"DATA",40:"SEP"},
productions_: [0,[3,2],[4,2],[4,3],[4,2],[4,1],[4,1],[4,0],[7,1],[7,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,3],[13,4],[6,2],[17,3],[17,2],[17,2],[17,1],[17,1],[27,2],[27,1],[30,1],[30,1],[30,1],[30,1],[30,1],[28,1],[34,2],[34,1],[35,3],[35,3],[35,3],[35,3],[35,3],[26,1],[26,1],[26,1],[29,2],[21,1],[39,3],[39,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return $$[$0-1]; 
break;
case 2: this.$ = new yy.ProgramNode([], $$[$0]); 
break;
case 3: this.$ = new yy.ProgramNode($$[$0-2], $$[$0]); 
break;
case 4: this.$ = new yy.ProgramNode($$[$0-1], []); 
break;
case 5: this.$ = new yy.ProgramNode($$[$0]); 
break;
case 6: this.$ = new yy.ProgramNode([], []); 
break;
case 7: this.$ = new yy.ProgramNode([]); 
break;
case 8: this.$ = [$$[$0]]; 
break;
case 9: $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 10: this.$ = new yy.BlockNode($$[$0-2], $$[$0-1].inverse, $$[$0-1], $$[$0]); 
break;
case 11: this.$ = new yy.BlockNode($$[$0-2], $$[$0-1], $$[$0-1].inverse, $$[$0]); 
break;
case 12: this.$ = $$[$0]; 
break;
case 13: this.$ = $$[$0]; 
break;
case 14: this.$ = new yy.ContentNode($$[$0]); 
break;
case 15: this.$ = new yy.CommentNode($$[$0]); 
break;
case 16: this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1]); 
break;
case 17: this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1]); 
break;
case 18: this.$ = $$[$0-1]; 
break;
case 19:
    // Parsing out the '&' escape token at this level saves ~500 bytes after min due to the removal of one parser node.
    this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1], $$[$0-2][2] === '&');
  
break;
case 20: this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1], true); 
break;
case 21: this.$ = new yy.PartialNode($$[$0-1]); 
break;
case 22: this.$ = new yy.PartialNode($$[$0-2], $$[$0-1]); 
break;
case 23: 
break;
case 24: this.$ = [[$$[$0-2]].concat($$[$0-1]), $$[$0]]; 
break;
case 25: this.$ = [[$$[$0-1]].concat($$[$0]), null]; 
break;
case 26: this.$ = [[$$[$0-1]], $$[$0]]; 
break;
case 27: this.$ = [[$$[$0]], null]; 
break;
case 28: this.$ = [[$$[$0]], null]; 
break;
case 29: $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 30: this.$ = [$$[$0]]; 
break;
case 31: this.$ = $$[$0]; 
break;
case 32: this.$ = new yy.StringNode($$[$0]); 
break;
case 33: this.$ = new yy.IntegerNode($$[$0]); 
break;
case 34: this.$ = new yy.BooleanNode($$[$0]); 
break;
case 35: this.$ = $$[$0]; 
break;
case 36: this.$ = new yy.HashNode($$[$0]); 
break;
case 37: $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 38: this.$ = [$$[$0]]; 
break;
case 39: this.$ = [$$[$0-2], $$[$0]]; 
break;
case 40: this.$ = [$$[$0-2], new yy.StringNode($$[$0])]; 
break;
case 41: this.$ = [$$[$0-2], new yy.IntegerNode($$[$0])]; 
break;
case 42: this.$ = [$$[$0-2], new yy.BooleanNode($$[$0])]; 
break;
case 43: this.$ = [$$[$0-2], $$[$0]]; 
break;
case 44: this.$ = new yy.PartialNameNode($$[$0]); 
break;
case 45: this.$ = new yy.PartialNameNode(new yy.StringNode($$[$0])); 
break;
case 46: this.$ = new yy.PartialNameNode(new yy.IntegerNode($$[$0])); 
break;
case 47: this.$ = new yy.DataNode($$[$0]); 
break;
case 48: this.$ = new yy.IdNode($$[$0]); 
break;
case 49: $$[$0-2].push({part: $$[$0], separator: $$[$0-1]}); this.$ = $$[$0-2]; 
break;
case 50: this.$ = [{part: $$[$0]}]; 
break;
}
},
table: [{3:1,4:2,5:[2,7],6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],22:[1,14],23:[1,15],25:[1,16]},{1:[3]},{5:[1,17]},{5:[2,6],7:18,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,6],22:[1,14],23:[1,15],25:[1,16]},{5:[2,5],6:20,8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,5],22:[1,14],23:[1,15],25:[1,16]},{17:23,18:[1,22],21:24,29:25,36:[1,28],38:[1,27],39:26},{5:[2,8],14:[2,8],15:[2,8],16:[2,8],19:[2,8],20:[2,8],22:[2,8],23:[2,8],25:[2,8]},{4:29,6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,7],22:[1,14],23:[1,15],25:[1,16]},{4:30,6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,7],22:[1,14],23:[1,15],25:[1,16]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],25:[2,12]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],25:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],25:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],25:[2,15]},{17:31,21:24,29:25,36:[1,28],38:[1,27],39:26},{17:32,21:24,29:25,36:[1,28],38:[1,27],39:26},{17:33,21:24,29:25,36:[1,28],38:[1,27],39:26},{21:35,26:34,31:[1,36],32:[1,37],36:[1,28],39:26},{1:[2,1]},{5:[2,2],8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,2],22:[1,14],23:[1,15],25:[1,16]},{17:23,21:24,29:25,36:[1,28],38:[1,27],39:26},{5:[2,4],7:38,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,4],22:[1,14],23:[1,15],25:[1,16]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],25:[2,9]},{5:[2,23],14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],25:[2,23]},{18:[1,39]},{18:[2,27],21:44,24:[2,27],27:40,28:41,29:48,30:42,31:[1,45],32:[1,46],33:[1,47],34:43,35:49,36:[1,50],38:[1,27],39:26},{18:[2,28],24:[2,28]},{18:[2,48],24:[2,48],31:[2,48],32:[2,48],33:[2,48],36:[2,48],38:[2,48],40:[1,51]},{21:52,36:[1,28],39:26},{18:[2,50],24:[2,50],31:[2,50],32:[2,50],33:[2,50],36:[2,50],38:[2,50],40:[2,50]},{10:53,20:[1,54]},{10:55,20:[1,54]},{18:[1,56]},{18:[1,57]},{24:[1,58]},{18:[1,59],21:60,36:[1,28],39:26},{18:[2,44],36:[2,44]},{18:[2,45],36:[2,45]},{18:[2,46],36:[2,46]},{5:[2,3],8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,3],22:[1,14],23:[1,15],25:[1,16]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],25:[2,17]},{18:[2,25],21:44,24:[2,25],28:61,29:48,30:62,31:[1,45],32:[1,46],33:[1,47],34:43,35:49,36:[1,50],38:[1,27],39:26},{18:[2,26],24:[2,26]},{18:[2,30],24:[2,30],31:[2,30],32:[2,30],33:[2,30],36:[2,30],38:[2,30]},{18:[2,36],24:[2,36],35:63,36:[1,64]},{18:[2,31],24:[2,31],31:[2,31],32:[2,31],33:[2,31],36:[2,31],38:[2,31]},{18:[2,32],24:[2,32],31:[2,32],32:[2,32],33:[2,32],36:[2,32],38:[2,32]},{18:[2,33],24:[2,33],31:[2,33],32:[2,33],33:[2,33],36:[2,33],38:[2,33]},{18:[2,34],24:[2,34],31:[2,34],32:[2,34],33:[2,34],36:[2,34],38:[2,34]},{18:[2,35],24:[2,35],31:[2,35],32:[2,35],33:[2,35],36:[2,35],38:[2,35]},{18:[2,38],24:[2,38],36:[2,38]},{18:[2,50],24:[2,50],31:[2,50],32:[2,50],33:[2,50],36:[2,50],37:[1,65],38:[2,50],40:[2,50]},{36:[1,66]},{18:[2,47],24:[2,47],31:[2,47],32:[2,47],33:[2,47],36:[2,47],38:[2,47]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],25:[2,10]},{21:67,36:[1,28],39:26},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],25:[2,11]},{14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],25:[2,16]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],25:[2,19]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],25:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],25:[2,21]},{18:[1,68]},{18:[2,24],24:[2,24]},{18:[2,29],24:[2,29],31:[2,29],32:[2,29],33:[2,29],36:[2,29],38:[2,29]},{18:[2,37],24:[2,37],36:[2,37]},{37:[1,65]},{21:69,29:73,31:[1,70],32:[1,71],33:[1,72],36:[1,28],38:[1,27],39:26},{18:[2,49],24:[2,49],31:[2,49],32:[2,49],33:[2,49],36:[2,49],38:[2,49],40:[2,49]},{18:[1,74]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],25:[2,22]},{18:[2,39],24:[2,39],36:[2,39]},{18:[2,40],24:[2,40],36:[2,40]},{18:[2,41],24:[2,41],36:[2,41]},{18:[2,42],24:[2,42],36:[2,42]},{18:[2,43],24:[2,43],36:[2,43]},{5:[2,18],14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],25:[2,18]}],
defaultActions: {17:[2,1]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == "undefined") {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};
/* Jison generated lexer */
var lexer = (function(){
var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        if (this.options.ranges) this.yylloc.range = [0,0];
        this.offset = 0;
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) this.yylloc.range[1]++;

        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length-1);
        this.matched = this.matched.substr(0, this.matched.length-1);

        if (lines.length-1) this.yylineno -= lines.length-1;
        var r = this.yylloc.range;

        this.yylloc = {first_line: this.yylloc.first_line,
          last_line: this.yylineno+1,
          first_column: this.yylloc.first_column,
          last_column: lines ?
              (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
              this.yylloc.first_column - len
          };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this.unput(this.match.slice(n));
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    }});
lexer.options = {};
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0: yy_.yytext = "\\"; return 14; 
break;
case 1:
                                   if(yy_.yytext.slice(-1) !== "\\") this.begin("mu");
                                   if(yy_.yytext.slice(-1) === "\\") yy_.yytext = yy_.yytext.substr(0,yy_.yyleng-1), this.begin("emu");
                                   if(yy_.yytext) return 14;
                                 
break;
case 2: return 14; 
break;
case 3:
                                   if(yy_.yytext.slice(-1) !== "\\") this.popState();
                                   if(yy_.yytext.slice(-1) === "\\") yy_.yytext = yy_.yytext.substr(0,yy_.yyleng-1);
                                   return 14;
                                 
break;
case 4: yy_.yytext = yy_.yytext.substr(0, yy_.yyleng-4); this.popState(); return 15; 
break;
case 5: return 25; 
break;
case 6: return 16; 
break;
case 7: return 20; 
break;
case 8: return 19; 
break;
case 9: return 19; 
break;
case 10: return 23; 
break;
case 11: return 22; 
break;
case 12: this.popState(); this.begin('com'); 
break;
case 13: yy_.yytext = yy_.yytext.substr(3,yy_.yyleng-5); this.popState(); return 15; 
break;
case 14: return 22; 
break;
case 15: return 37; 
break;
case 16: return 36; 
break;
case 17: return 36; 
break;
case 18: return 40; 
break;
case 19: /*ignore whitespace*/ 
break;
case 20: this.popState(); return 24; 
break;
case 21: this.popState(); return 18; 
break;
case 22: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2).replace(/\\"/g,'"'); return 31; 
break;
case 23: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2).replace(/\\'/g,"'"); return 31; 
break;
case 24: return 38; 
break;
case 25: return 33; 
break;
case 26: return 33; 
break;
case 27: return 32; 
break;
case 28: return 36; 
break;
case 29: yy_.yytext = yy_.yytext.substr(1, yy_.yyleng-2); return 36; 
break;
case 30: return 'INVALID'; 
break;
case 31: return 5; 
break;
}
};
lexer.rules = [/^(?:\\\\(?=(\{\{)))/,/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\{\{>)/,/^(?:\{\{#)/,/^(?:\{\{\/)/,/^(?:\{\{\^)/,/^(?:\{\{\s*else\b)/,/^(?:\{\{\{)/,/^(?:\{\{&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{)/,/^(?:=)/,/^(?:\.(?=[}\/ ]))/,/^(?:\.\.)/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}\}\})/,/^(?:\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=[}\s]))/,/^(?:false(?=[}\s]))/,/^(?:-?[0-9]+(?=[}\s]))/,/^(?:[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.]))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];
lexer.conditions = {"mu":{"rules":[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],"inclusive":false},"emu":{"rules":[3],"inclusive":false},"com":{"rules":[4],"inclusive":false},"INITIAL":{"rules":[0,1,2,31],"inclusive":true}};
return lexer;})()
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();;
// lib/handlebars/compiler/base.js

Handlebars.Parser = handlebars;

Handlebars.parse = function(input) {

  // Just return if an already-compile AST was passed in.
  if(input.constructor === Handlebars.AST.ProgramNode) { return input; }

  Handlebars.Parser.yy = Handlebars.AST;
  return Handlebars.Parser.parse(input);
};
;
// lib/handlebars/compiler/ast.js
Handlebars.AST = {};

Handlebars.AST.ProgramNode = function(statements, inverse) {
  this.type = "program";
  this.statements = statements;
  if(inverse) { this.inverse = new Handlebars.AST.ProgramNode(inverse); }
};

Handlebars.AST.MustacheNode = function(rawParams, hash, unescaped) {
  this.type = "mustache";
  this.escaped = !unescaped;
  this.hash = hash;

  var id = this.id = rawParams[0];
  var params = this.params = rawParams.slice(1);

  // a mustache is an eligible helper if:
  // * its id is simple (a single part, not `this` or `..`)
  var eligibleHelper = this.eligibleHelper = id.isSimple;

  // a mustache is definitely a helper if:
  // * it is an eligible helper, and
  // * it has at least one parameter or hash segment
  this.isHelper = eligibleHelper && (params.length || hash);

  // if a mustache is an eligible helper but not a definite
  // helper, it is ambiguous, and will be resolved in a later
  // pass or at runtime.
};

Handlebars.AST.PartialNode = function(partialName, context) {
  this.type         = "partial";
  this.partialName  = partialName;
  this.context      = context;
};

Handlebars.AST.BlockNode = function(mustache, program, inverse, close) {
  var verifyMatch = function(open, close) {
    if(open.original !== close.original) {
      throw new Handlebars.Exception(open.original + " doesn't match " + close.original);
    }
  };

  verifyMatch(mustache.id, close);
  this.type = "block";
  this.mustache = mustache;
  this.program  = program;
  this.inverse  = inverse;

  if (this.inverse && !this.program) {
    this.isInverse = true;
  }
};

Handlebars.AST.ContentNode = function(string) {
  this.type = "content";
  this.string = string;
};

Handlebars.AST.HashNode = function(pairs) {
  this.type = "hash";
  this.pairs = pairs;
};

Handlebars.AST.IdNode = function(parts) {
  this.type = "ID";

  var original = "",
      dig = [],
      depth = 0;

  for(var i=0,l=parts.length; i<l; i++) {
    var part = parts[i].part;
    original += (parts[i].separator || '') + part;

    if (part === ".." || part === "." || part === "this") {
      if (dig.length > 0) { throw new Handlebars.Exception("Invalid path: " + original); }
      else if (part === "..") { depth++; }
      else { this.isScoped = true; }
    }
    else { dig.push(part); }
  }

  this.original = original;
  this.parts    = dig;
  this.string   = dig.join('.');
  this.depth    = depth;

  // an ID is simple if it only has one part, and that part is not
  // `..` or `this`.
  this.isSimple = parts.length === 1 && !this.isScoped && depth === 0;

  this.stringModeValue = this.string;
};

Handlebars.AST.PartialNameNode = function(name) {
  this.type = "PARTIAL_NAME";
  this.name = name.original;
};

Handlebars.AST.DataNode = function(id) {
  this.type = "DATA";
  this.id = id;
};

Handlebars.AST.StringNode = function(string) {
  this.type = "STRING";
  this.original =
    this.string =
    this.stringModeValue = string;
};

Handlebars.AST.IntegerNode = function(integer) {
  this.type = "INTEGER";
  this.original =
    this.integer = integer;
  this.stringModeValue = Number(integer);
};

Handlebars.AST.BooleanNode = function(bool) {
  this.type = "BOOLEAN";
  this.bool = bool;
  this.stringModeValue = bool === "true";
};

Handlebars.AST.CommentNode = function(comment) {
  this.type = "comment";
  this.comment = comment;
};
;
// lib/handlebars/utils.js

var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

Handlebars.Exception = function(message) {
  var tmp = Error.prototype.constructor.apply(this, arguments);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }
};
Handlebars.Exception.prototype = new Error();

// Build out our basic SafeString type
Handlebars.SafeString = function(string) {
  this.string = string;
};
Handlebars.SafeString.prototype.toString = function() {
  return this.string.toString();
};

var escape = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "`": "&#x60;"
};

var badChars = /[&<>"'`]/g;
var possible = /[&<>"'`]/;

var escapeChar = function(chr) {
  return escape[chr] || "&amp;";
};

Handlebars.Utils = {
  extend: function(obj, value) {
    for(var key in value) {
      if(value.hasOwnProperty(key)) {
        obj[key] = value[key];
      }
    }
  },

  escapeExpression: function(string) {
    // don't escape SafeStrings, since they're already safe
    if (string instanceof Handlebars.SafeString) {
      return string.toString();
    } else if (string == null || string === false) {
      return "";
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = string.toString();

    if(!possible.test(string)) { return string; }
    return string.replace(badChars, escapeChar);
  },

  isEmpty: function(value) {
    if (!value && value !== 0) {
      return true;
    } else if(toString.call(value) === "[object Array]" && value.length === 0) {
      return true;
    } else {
      return false;
    }
  }
};
;
// lib/handlebars/compiler/compiler.js

/*jshint eqnull:true*/
var Compiler = Handlebars.Compiler = function() {};
var JavaScriptCompiler = Handlebars.JavaScriptCompiler = function() {};

// the foundHelper register will disambiguate helper lookup from finding a
// function in a context. This is necessary for mustache compatibility, which
// requires that context functions in blocks are evaluated by blockHelperMissing,
// and then proceed as if the resulting value was provided to blockHelperMissing.

Compiler.prototype = {
  compiler: Compiler,

  disassemble: function() {
    var opcodes = this.opcodes, opcode, out = [], params, param;

    for (var i=0, l=opcodes.length; i<l; i++) {
      opcode = opcodes[i];

      if (opcode.opcode === 'DECLARE') {
        out.push("DECLARE " + opcode.name + "=" + opcode.value);
      } else {
        params = [];
        for (var j=0; j<opcode.args.length; j++) {
          param = opcode.args[j];
          if (typeof param === "string") {
            param = "\"" + param.replace("\n", "\\n") + "\"";
          }
          params.push(param);
        }
        out.push(opcode.opcode + " " + params.join(" "));
      }
    }

    return out.join("\n");
  },
  equals: function(other) {
    var len = this.opcodes.length;
    if (other.opcodes.length !== len) {
      return false;
    }

    for (var i = 0; i < len; i++) {
      var opcode = this.opcodes[i],
          otherOpcode = other.opcodes[i];
      if (opcode.opcode !== otherOpcode.opcode || opcode.args.length !== otherOpcode.args.length) {
        return false;
      }
      for (var j = 0; j < opcode.args.length; j++) {
        if (opcode.args[j] !== otherOpcode.args[j]) {
          return false;
        }
      }
    }

    len = this.children.length;
    if (other.children.length !== len) {
      return false;
    }
    for (i = 0; i < len; i++) {
      if (!this.children[i].equals(other.children[i])) {
        return false;
      }
    }

    return true;
  },

  guid: 0,

  compile: function(program, options) {
    this.children = [];
    this.depths = {list: []};
    this.options = options;

    // These changes will propagate to the other compiler components
    var knownHelpers = this.options.knownHelpers;
    this.options.knownHelpers = {
      'helperMissing': true,
      'blockHelperMissing': true,
      'each': true,
      'if': true,
      'unless': true,
      'with': true,
      'log': true
    };
    if (knownHelpers) {
      for (var name in knownHelpers) {
        this.options.knownHelpers[name] = knownHelpers[name];
      }
    }

    return this.program(program);
  },

  accept: function(node) {
    return this[node.type](node);
  },

  program: function(program) {
    var statements = program.statements, statement;
    this.opcodes = [];

    for(var i=0, l=statements.length; i<l; i++) {
      statement = statements[i];
      this[statement.type](statement);
    }
    this.isSimple = l === 1;

    this.depths.list = this.depths.list.sort(function(a, b) {
      return a - b;
    });

    return this;
  },

  compileProgram: function(program) {
    var result = new this.compiler().compile(program, this.options);
    var guid = this.guid++, depth;

    this.usePartial = this.usePartial || result.usePartial;

    this.children[guid] = result;

    for(var i=0, l=result.depths.list.length; i<l; i++) {
      depth = result.depths.list[i];

      if(depth < 2) { continue; }
      else { this.addDepth(depth - 1); }
    }

    return guid;
  },

  block: function(block) {
    var mustache = block.mustache,
        program = block.program,
        inverse = block.inverse;

    if (program) {
      program = this.compileProgram(program);
    }

    if (inverse) {
      inverse = this.compileProgram(inverse);
    }

    var type = this.classifyMustache(mustache);

    if (type === "helper") {
      this.helperMustache(mustache, program, inverse);
    } else if (type === "simple") {
      this.simpleMustache(mustache);

      // now that the simple mustache is resolved, we need to
      // evaluate it by executing `blockHelperMissing`
      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);
      this.opcode('emptyHash');
      this.opcode('blockValue');
    } else {
      this.ambiguousMustache(mustache, program, inverse);

      // now that the simple mustache is resolved, we need to
      // evaluate it by executing `blockHelperMissing`
      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);
      this.opcode('emptyHash');
      this.opcode('ambiguousBlockValue');
    }

    this.opcode('append');
  },

  hash: function(hash) {
    var pairs = hash.pairs, pair, val;

    this.opcode('pushHash');

    for(var i=0, l=pairs.length; i<l; i++) {
      pair = pairs[i];
      val  = pair[1];

      if (this.options.stringParams) {
        if(val.depth) {
          this.addDepth(val.depth);
        }
        this.opcode('getContext', val.depth || 0);
        this.opcode('pushStringParam', val.stringModeValue, val.type);
      } else {
        this.accept(val);
      }

      this.opcode('assignToHash', pair[0]);
    }
    this.opcode('popHash');
  },

  partial: function(partial) {
    var partialName = partial.partialName;
    this.usePartial = true;

    if(partial.context) {
      this.ID(partial.context);
    } else {
      this.opcode('push', 'depth0');
    }

    this.opcode('invokePartial', partialName.name);
    this.opcode('append');
  },

  content: function(content) {
    this.opcode('appendContent', content.string);
  },

  mustache: function(mustache) {
    var options = this.options;
    var type = this.classifyMustache(mustache);

    if (type === "simple") {
      this.simpleMustache(mustache);
    } else if (type === "helper") {
      this.helperMustache(mustache);
    } else {
      this.ambiguousMustache(mustache);
    }

    if(mustache.escaped && !options.noEscape) {
      this.opcode('appendEscaped');
    } else {
      this.opcode('append');
    }
  },

  ambiguousMustache: function(mustache, program, inverse) {
    var id = mustache.id,
        name = id.parts[0],
        isBlock = program != null || inverse != null;

    this.opcode('getContext', id.depth);

    this.opcode('pushProgram', program);
    this.opcode('pushProgram', inverse);

    this.opcode('invokeAmbiguous', name, isBlock);
  },

  simpleMustache: function(mustache) {
    var id = mustache.id;

    if (id.type === 'DATA') {
      this.DATA(id);
    } else if (id.parts.length) {
      this.ID(id);
    } else {
      // Simplified ID for `this`
      this.addDepth(id.depth);
      this.opcode('getContext', id.depth);
      this.opcode('pushContext');
    }

    this.opcode('resolvePossibleLambda');
  },

  helperMustache: function(mustache, program, inverse) {
    var params = this.setupFullMustacheParams(mustache, program, inverse),
        name = mustache.id.parts[0];

    if (this.options.knownHelpers[name]) {
      this.opcode('invokeKnownHelper', params.length, name);
    } else if (this.options.knownHelpersOnly) {
      throw new Error("You specified knownHelpersOnly, but used the unknown helper " + name);
    } else {
      this.opcode('invokeHelper', params.length, name);
    }
  },

  ID: function(id) {
    this.addDepth(id.depth);
    this.opcode('getContext', id.depth);

    var name = id.parts[0];
    if (!name) {
      this.opcode('pushContext');
    } else {
      this.opcode('lookupOnContext', id.parts[0]);
    }

    for(var i=1, l=id.parts.length; i<l; i++) {
      this.opcode('lookup', id.parts[i]);
    }
  },

  DATA: function(data) {
    this.options.data = true;
    if (data.id.isScoped || data.id.depth) {
      throw new Handlebars.Exception('Scoped data references are not supported: ' + data.original);
    }

    this.opcode('lookupData');
    var parts = data.id.parts;
    for(var i=0, l=parts.length; i<l; i++) {
      this.opcode('lookup', parts[i]);
    }
  },

  STRING: function(string) {
    this.opcode('pushString', string.string);
  },

  INTEGER: function(integer) {
    this.opcode('pushLiteral', integer.integer);
  },

  BOOLEAN: function(bool) {
    this.opcode('pushLiteral', bool.bool);
  },

  comment: function() {},

  // HELPERS
  opcode: function(name) {
    this.opcodes.push({ opcode: name, args: [].slice.call(arguments, 1) });
  },

  declare: function(name, value) {
    this.opcodes.push({ opcode: 'DECLARE', name: name, value: value });
  },

  addDepth: function(depth) {
    if(isNaN(depth)) { throw new Error("EWOT"); }
    if(depth === 0) { return; }

    if(!this.depths[depth]) {
      this.depths[depth] = true;
      this.depths.list.push(depth);
    }
  },

  classifyMustache: function(mustache) {
    var isHelper   = mustache.isHelper;
    var isEligible = mustache.eligibleHelper;
    var options    = this.options;

    // if ambiguous, we can possibly resolve the ambiguity now
    if (isEligible && !isHelper) {
      var name = mustache.id.parts[0];

      if (options.knownHelpers[name]) {
        isHelper = true;
      } else if (options.knownHelpersOnly) {
        isEligible = false;
      }
    }

    if (isHelper) { return "helper"; }
    else if (isEligible) { return "ambiguous"; }
    else { return "simple"; }
  },

  pushParams: function(params) {
    var i = params.length, param;

    while(i--) {
      param = params[i];

      if(this.options.stringParams) {
        if(param.depth) {
          this.addDepth(param.depth);
        }

        this.opcode('getContext', param.depth || 0);
        this.opcode('pushStringParam', param.stringModeValue, param.type);
      } else {
        this[param.type](param);
      }
    }
  },

  setupMustacheParams: function(mustache) {
    var params = mustache.params;
    this.pushParams(params);

    if(mustache.hash) {
      this.hash(mustache.hash);
    } else {
      this.opcode('emptyHash');
    }

    return params;
  },

  // this will replace setupMustacheParams when we're done
  setupFullMustacheParams: function(mustache, program, inverse) {
    var params = mustache.params;
    this.pushParams(params);

    this.opcode('pushProgram', program);
    this.opcode('pushProgram', inverse);

    if(mustache.hash) {
      this.hash(mustache.hash);
    } else {
      this.opcode('emptyHash');
    }

    return params;
  }
};

var Literal = function(value) {
  this.value = value;
};

JavaScriptCompiler.prototype = {
  // PUBLIC API: You can override these methods in a subclass to provide
  // alternative compiled forms for name lookup and buffering semantics
  nameLookup: function(parent, name /* , type*/) {
    if (/^[0-9]+$/.test(name)) {
      return parent + "[" + name + "]";
    } else if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
      return parent + "." + name;
    }
    else {
      return parent + "['" + name + "']";
    }
  },

  appendToBuffer: function(string) {
    if (this.environment.isSimple) {
      return "return " + string + ";";
    } else {
      return {
        appendToBuffer: true,
        content: string,
        toString: function() { return "buffer += " + string + ";"; }
      };
    }
  },

  initializeBuffer: function() {
    return this.quotedString("");
  },

  namespace: "Handlebars",
  // END PUBLIC API

  compile: function(environment, options, context, asObject) {
    this.environment = environment;
    this.options = options || {};

    Handlebars.log(Handlebars.logger.DEBUG, this.environment.disassemble() + "\n\n");

    this.name = this.environment.name;
    this.isChild = !!context;
    this.context = context || {
      programs: [],
      environments: [],
      aliases: { }
    };

    this.preamble();

    this.stackSlot = 0;
    this.stackVars = [];
    this.registers = { list: [] };
    this.compileStack = [];
    this.inlineStack = [];

    this.compileChildren(environment, options);

    var opcodes = environment.opcodes, opcode;

    this.i = 0;

    for(l=opcodes.length; this.i<l; this.i++) {
      opcode = opcodes[this.i];

      if(opcode.opcode === 'DECLARE') {
        this[opcode.name] = opcode.value;
      } else {
        this[opcode.opcode].apply(this, opcode.args);
      }
    }

    return this.createFunctionContext(asObject);
  },

  nextOpcode: function() {
    var opcodes = this.environment.opcodes;
    return opcodes[this.i + 1];
  },

  eat: function() {
    this.i = this.i + 1;
  },

  preamble: function() {
    var out = [];

    if (!this.isChild) {
      var namespace = this.namespace;

      var copies = "helpers = this.merge(helpers, " + namespace + ".helpers);";
      if (this.environment.usePartial) { copies = copies + " partials = this.merge(partials, " + namespace + ".partials);"; }
      if (this.options.data) { copies = copies + " data = data || {};"; }
      out.push(copies);
    } else {
      out.push('');
    }

    if (!this.environment.isSimple) {
      out.push(", buffer = " + this.initializeBuffer());
    } else {
      out.push("");
    }

    // track the last context pushed into place to allow skipping the
    // getContext opcode when it would be a noop
    this.lastContext = 0;
    this.source = out;
  },

  createFunctionContext: function(asObject) {
    var locals = this.stackVars.concat(this.registers.list);

    if(locals.length > 0) {
      this.source[1] = this.source[1] + ", " + locals.join(", ");
    }

    // Generate minimizer alias mappings
    if (!this.isChild) {
      for (var alias in this.context.aliases) {
        if (this.context.aliases.hasOwnProperty(alias)) {
          this.source[1] = this.source[1] + ', ' + alias + '=' + this.context.aliases[alias];
        }
      }
    }

    if (this.source[1]) {
      this.source[1] = "var " + this.source[1].substring(2) + ";";
    }

    // Merge children
    if (!this.isChild) {
      this.source[1] += '\n' + this.context.programs.join('\n') + '\n';
    }

    if (!this.environment.isSimple) {
      this.source.push("return buffer;");
    }

    var params = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"];

    for(var i=0, l=this.environment.depths.list.length; i<l; i++) {
      params.push("depth" + this.environment.depths.list[i]);
    }

    // Perform a second pass over the output to merge content when possible
    var source = this.mergeSource();

    if (!this.isChild) {
      var revision = Handlebars.COMPILER_REVISION,
          versions = Handlebars.REVISION_CHANGES[revision];
      source = "this.compilerInfo = ["+revision+",'"+versions+"'];\n"+source;
    }

    if (asObject) {
      params.push(source);

      return Function.apply(this, params);
    } else {
      var functionSource = 'function ' + (this.name || '') + '(' + params.join(',') + ') {\n  ' + source + '}';
      Handlebars.log(Handlebars.logger.DEBUG, functionSource + "\n\n");
      return functionSource;
    }
  },
  mergeSource: function() {
    // WARN: We are not handling the case where buffer is still populated as the source should
    // not have buffer append operations as their final action.
    var source = '',
        buffer;
    for (var i = 0, len = this.source.length; i < len; i++) {
      var line = this.source[i];
      if (line.appendToBuffer) {
        if (buffer) {
          buffer = buffer + '\n    + ' + line.content;
        } else {
          buffer = line.content;
        }
      } else {
        if (buffer) {
          source += 'buffer += ' + buffer + ';\n  ';
          buffer = undefined;
        }
        source += line + '\n  ';
      }
    }
    return source;
  },

  // [blockValue]
  //
  // On stack, before: hash, inverse, program, value
  // On stack, after: return value of blockHelperMissing
  //
  // The purpose of this opcode is to take a block of the form
  // `{{#foo}}...{{/foo}}`, resolve the value of `foo`, and
  // replace it on the stack with the result of properly
  // invoking blockHelperMissing.
  blockValue: function() {
    this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

    var params = ["depth0"];
    this.setupParams(0, params);

    this.replaceStack(function(current) {
      params.splice(1, 0, current);
      return "blockHelperMissing.call(" + params.join(", ") + ")";
    });
  },

  // [ambiguousBlockValue]
  //
  // On stack, before: hash, inverse, program, value
  // Compiler value, before: lastHelper=value of last found helper, if any
  // On stack, after, if no lastHelper: same as [blockValue]
  // On stack, after, if lastHelper: value
  ambiguousBlockValue: function() {
    this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

    var params = ["depth0"];
    this.setupParams(0, params);

    var current = this.topStack();
    params.splice(1, 0, current);

    // Use the options value generated from the invocation
    params[params.length-1] = 'options';

    this.source.push("if (!" + this.lastHelper + ") { " + current + " = blockHelperMissing.call(" + params.join(", ") + "); }");
  },

  // [appendContent]
  //
  // On stack, before: ...
  // On stack, after: ...
  //
  // Appends the string value of `content` to the current buffer
  appendContent: function(content) {
    this.source.push(this.appendToBuffer(this.quotedString(content)));
  },

  // [append]
  //
  // On stack, before: value, ...
  // On stack, after: ...
  //
  // Coerces `value` to a String and appends it to the current buffer.
  //
  // If `value` is truthy, or 0, it is coerced into a string and appended
  // Otherwise, the empty string is appended
  append: function() {
    // Force anything that is inlined onto the stack so we don't have duplication
    // when we examine local
    this.flushInline();
    var local = this.popStack();
    this.source.push("if(" + local + " || " + local + " === 0) { " + this.appendToBuffer(local) + " }");
    if (this.environment.isSimple) {
      this.source.push("else { " + this.appendToBuffer("''") + " }");
    }
  },

  // [appendEscaped]
  //
  // On stack, before: value, ...
  // On stack, after: ...
  //
  // Escape `value` and append it to the buffer
  appendEscaped: function() {
    this.context.aliases.escapeExpression = 'this.escapeExpression';

    this.source.push(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"));
  },

  // [getContext]
  //
  // On stack, before: ...
  // On stack, after: ...
  // Compiler value, after: lastContext=depth
  //
  // Set the value of the `lastContext` compiler value to the depth
  getContext: function(depth) {
    if(this.lastContext !== depth) {
      this.lastContext = depth;
    }
  },

  // [lookupOnContext]
  //
  // On stack, before: ...
  // On stack, after: currentContext[name], ...
  //
  // Looks up the value of `name` on the current context and pushes
  // it onto the stack.
  lookupOnContext: function(name) {
    this.push(this.nameLookup('depth' + this.lastContext, name, 'context'));
  },

  // [pushContext]
  //
  // On stack, before: ...
  // On stack, after: currentContext, ...
  //
  // Pushes the value of the current context onto the stack.
  pushContext: function() {
    this.pushStackLiteral('depth' + this.lastContext);
  },

  // [resolvePossibleLambda]
  //
  // On stack, before: value, ...
  // On stack, after: resolved value, ...
  //
  // If the `value` is a lambda, replace it on the stack by
  // the return value of the lambda
  resolvePossibleLambda: function() {
    this.context.aliases.functionType = '"function"';

    this.replaceStack(function(current) {
      return "typeof " + current + " === functionType ? " + current + ".apply(depth0) : " + current;
    });
  },

  // [lookup]
  //
  // On stack, before: value, ...
  // On stack, after: value[name], ...
  //
  // Replace the value on the stack with the result of looking
  // up `name` on `value`
  lookup: function(name) {
    this.replaceStack(function(current) {
      return current + " == null || " + current + " === false ? " + current + " : " + this.nameLookup(current, name, 'context');
    });
  },

  // [lookupData]
  //
  // On stack, before: ...
  // On stack, after: data[id], ...
  //
  // Push the result of looking up `id` on the current data
  lookupData: function(id) {
    this.push('data');
  },

  // [pushStringParam]
  //
  // On stack, before: ...
  // On stack, after: string, currentContext, ...
  //
  // This opcode is designed for use in string mode, which
  // provides the string value of a parameter along with its
  // depth rather than resolving it immediately.
  pushStringParam: function(string, type) {
    this.pushStackLiteral('depth' + this.lastContext);

    this.pushString(type);

    if (typeof string === 'string') {
      this.pushString(string);
    } else {
      this.pushStackLiteral(string);
    }
  },

  emptyHash: function() {
    this.pushStackLiteral('{}');

    if (this.options.stringParams) {
      this.register('hashTypes', '{}');
      this.register('hashContexts', '{}');
    }
  },
  pushHash: function() {
    this.hash = {values: [], types: [], contexts: []};
  },
  popHash: function() {
    var hash = this.hash;
    this.hash = undefined;

    if (this.options.stringParams) {
      this.register('hashContexts', '{' + hash.contexts.join(',') + '}');
      this.register('hashTypes', '{' + hash.types.join(',') + '}');
    }
    this.push('{\n    ' + hash.values.join(',\n    ') + '\n  }');
  },

  // [pushString]
  //
  // On stack, before: ...
  // On stack, after: quotedString(string), ...
  //
  // Push a quoted version of `string` onto the stack
  pushString: function(string) {
    this.pushStackLiteral(this.quotedString(string));
  },

  // [push]
  //
  // On stack, before: ...
  // On stack, after: expr, ...
  //
  // Push an expression onto the stack
  push: function(expr) {
    this.inlineStack.push(expr);
    return expr;
  },

  // [pushLiteral]
  //
  // On stack, before: ...
  // On stack, after: value, ...
  //
  // Pushes a value onto the stack. This operation prevents
  // the compiler from creating a temporary variable to hold
  // it.
  pushLiteral: function(value) {
    this.pushStackLiteral(value);
  },

  // [pushProgram]
  //
  // On stack, before: ...
  // On stack, after: program(guid), ...
  //
  // Push a program expression onto the stack. This takes
  // a compile-time guid and converts it into a runtime-accessible
  // expression.
  pushProgram: function(guid) {
    if (guid != null) {
      this.pushStackLiteral(this.programExpression(guid));
    } else {
      this.pushStackLiteral(null);
    }
  },

  // [invokeHelper]
  //
  // On stack, before: hash, inverse, program, params..., ...
  // On stack, after: result of helper invocation
  //
  // Pops off the helper's parameters, invokes the helper,
  // and pushes the helper's return value onto the stack.
  //
  // If the helper is not found, `helperMissing` is called.
  invokeHelper: function(paramSize, name) {
    this.context.aliases.helperMissing = 'helpers.helperMissing';

    var helper = this.lastHelper = this.setupHelper(paramSize, name, true);
    var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');

    this.push(helper.name + ' || ' + nonHelper);
    this.replaceStack(function(name) {
      return name + ' ? ' + name + '.call(' +
          helper.callParams + ") " + ": helperMissing.call(" +
          helper.helperMissingParams + ")";
    });
  },

  // [invokeKnownHelper]
  //
  // On stack, before: hash, inverse, program, params..., ...
  // On stack, after: result of helper invocation
  //
  // This operation is used when the helper is known to exist,
  // so a `helperMissing` fallback is not required.
  invokeKnownHelper: function(paramSize, name) {
    var helper = this.setupHelper(paramSize, name);
    this.push(helper.name + ".call(" + helper.callParams + ")");
  },

  // [invokeAmbiguous]
  //
  // On stack, before: hash, inverse, program, params..., ...
  // On stack, after: result of disambiguation
  //
  // This operation is used when an expression like `{{foo}}`
  // is provided, but we don't know at compile-time whether it
  // is a helper or a path.
  //
  // This operation emits more code than the other options,
  // and can be avoided by passing the `knownHelpers` and
  // `knownHelpersOnly` flags at compile-time.
  invokeAmbiguous: function(name, helperCall) {
    this.context.aliases.functionType = '"function"';

    this.pushStackLiteral('{}');    // Hash value
    var helper = this.setupHelper(0, name, helperCall);

    var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

    var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');
    var nextStack = this.nextStack();

    this.source.push('if (' + nextStack + ' = ' + helperName + ') { ' + nextStack + ' = ' + nextStack + '.call(' + helper.callParams + '); }');
    this.source.push('else { ' + nextStack + ' = ' + nonHelper + '; ' + nextStack + ' = typeof ' + nextStack + ' === functionType ? ' + nextStack + '.apply(depth0) : ' + nextStack + '; }');
  },

  // [invokePartial]
  //
  // On stack, before: context, ...
  // On stack after: result of partial invocation
  //
  // This operation pops off a context, invokes a partial with that context,
  // and pushes the result of the invocation back.
  invokePartial: function(name) {
    var params = [this.nameLookup('partials', name, 'partial'), "'" + name + "'", this.popStack(), "helpers", "partials"];

    if (this.options.data) {
      params.push("data");
    }

    this.context.aliases.self = "this";
    this.push("self.invokePartial(" + params.join(", ") + ")");
  },

  // [assignToHash]
  //
  // On stack, before: value, hash, ...
  // On stack, after: hash, ...
  //
  // Pops a value and hash off the stack, assigns `hash[key] = value`
  // and pushes the hash back onto the stack.
  assignToHash: function(key) {
    var value = this.popStack(),
        context,
        type;

    if (this.options.stringParams) {
      type = this.popStack();
      context = this.popStack();
    }

    var hash = this.hash;
    if (context) {
      hash.contexts.push("'" + key + "': " + context);
    }
    if (type) {
      hash.types.push("'" + key + "': " + type);
    }
    hash.values.push("'" + key + "': (" + value + ")");
  },

  // HELPERS

  compiler: JavaScriptCompiler,

  compileChildren: function(environment, options) {
    var children = environment.children, child, compiler;

    for(var i=0, l=children.length; i<l; i++) {
      child = children[i];
      compiler = new this.compiler();

      var index = this.matchExistingProgram(child);

      if (index == null) {
        this.context.programs.push('');     // Placeholder to prevent name conflicts for nested children
        index = this.context.programs.length;
        child.index = index;
        child.name = 'program' + index;
        this.context.programs[index] = compiler.compile(child, options, this.context);
        this.context.environments[index] = child;
      } else {
        child.index = index;
        child.name = 'program' + index;
      }
    }
  },
  matchExistingProgram: function(child) {
    for (var i = 0, len = this.context.environments.length; i < len; i++) {
      var environment = this.context.environments[i];
      if (environment && environment.equals(child)) {
        return i;
      }
    }
  },

  programExpression: function(guid) {
    this.context.aliases.self = "this";

    if(guid == null) {
      return "self.noop";
    }

    var child = this.environment.children[guid],
        depths = child.depths.list, depth;

    var programParams = [child.index, child.name, "data"];

    for(var i=0, l = depths.length; i<l; i++) {
      depth = depths[i];

      if(depth === 1) { programParams.push("depth0"); }
      else { programParams.push("depth" + (depth - 1)); }
    }

    return (depths.length === 0 ? "self.program(" : "self.programWithDepth(") + programParams.join(", ") + ")";
  },

  register: function(name, val) {
    this.useRegister(name);
    this.source.push(name + " = " + val + ";");
  },

  useRegister: function(name) {
    if(!this.registers[name]) {
      this.registers[name] = true;
      this.registers.list.push(name);
    }
  },

  pushStackLiteral: function(item) {
    return this.push(new Literal(item));
  },

  pushStack: function(item) {
    this.flushInline();

    var stack = this.incrStack();
    if (item) {
      this.source.push(stack + " = " + item + ";");
    }
    this.compileStack.push(stack);
    return stack;
  },

  replaceStack: function(callback) {
    var prefix = '',
        inline = this.isInline(),
        stack;

    // If we are currently inline then we want to merge the inline statement into the
    // replacement statement via ','
    if (inline) {
      var top = this.popStack(true);

      if (top instanceof Literal) {
        // Literals do not need to be inlined
        stack = top.value;
      } else {
        // Get or create the current stack name for use by the inline
        var name = this.stackSlot ? this.topStackName() : this.incrStack();

        prefix = '(' + this.push(name) + ' = ' + top + '),';
        stack = this.topStack();
      }
    } else {
      stack = this.topStack();
    }

    var item = callback.call(this, stack);

    if (inline) {
      if (this.inlineStack.length || this.compileStack.length) {
        this.popStack();
      }
      this.push('(' + prefix + item + ')');
    } else {
      // Prevent modification of the context depth variable. Through replaceStack
      if (!/^stack/.test(stack)) {
        stack = this.nextStack();
      }

      this.source.push(stack + " = (" + prefix + item + ");");
    }
    return stack;
  },

  nextStack: function() {
    return this.pushStack();
  },

  incrStack: function() {
    this.stackSlot++;
    if(this.stackSlot > this.stackVars.length) { this.stackVars.push("stack" + this.stackSlot); }
    return this.topStackName();
  },
  topStackName: function() {
    return "stack" + this.stackSlot;
  },
  flushInline: function() {
    var inlineStack = this.inlineStack;
    if (inlineStack.length) {
      this.inlineStack = [];
      for (var i = 0, len = inlineStack.length; i < len; i++) {
        var entry = inlineStack[i];
        if (entry instanceof Literal) {
          this.compileStack.push(entry);
        } else {
          this.pushStack(entry);
        }
      }
    }
  },
  isInline: function() {
    return this.inlineStack.length;
  },

  popStack: function(wrapped) {
    var inline = this.isInline(),
        item = (inline ? this.inlineStack : this.compileStack).pop();

    if (!wrapped && (item instanceof Literal)) {
      return item.value;
    } else {
      if (!inline) {
        this.stackSlot--;
      }
      return item;
    }
  },

  topStack: function(wrapped) {
    var stack = (this.isInline() ? this.inlineStack : this.compileStack),
        item = stack[stack.length - 1];

    if (!wrapped && (item instanceof Literal)) {
      return item.value;
    } else {
      return item;
    }
  },

  quotedString: function(str) {
    return '"' + str
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\"')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/\u2028/g, '\\u2028')   // Per Ecma-262 7.3 + 7.8.4
      .replace(/\u2029/g, '\\u2029') + '"';
  },

  setupHelper: function(paramSize, name, missingParams) {
    var params = [];
    this.setupParams(paramSize, params, missingParams);
    var foundHelper = this.nameLookup('helpers', name, 'helper');

    return {
      params: params,
      name: foundHelper,
      callParams: ["depth0"].concat(params).join(", "),
      helperMissingParams: missingParams && ["depth0", this.quotedString(name)].concat(params).join(", ")
    };
  },

  // the params and contexts arguments are passed in arrays
  // to fill in
  setupParams: function(paramSize, params, useRegister) {
    var options = [], contexts = [], types = [], param, inverse, program;

    options.push("hash:" + this.popStack());

    inverse = this.popStack();
    program = this.popStack();

    // Avoid setting fn and inverse if neither are set. This allows
    // helpers to do a check for `if (options.fn)`
    if (program || inverse) {
      if (!program) {
        this.context.aliases.self = "this";
        program = "self.noop";
      }

      if (!inverse) {
       this.context.aliases.self = "this";
        inverse = "self.noop";
      }

      options.push("inverse:" + inverse);
      options.push("fn:" + program);
    }

    for(var i=0; i<paramSize; i++) {
      param = this.popStack();
      params.push(param);

      if(this.options.stringParams) {
        types.push(this.popStack());
        contexts.push(this.popStack());
      }
    }

    if (this.options.stringParams) {
      options.push("contexts:[" + contexts.join(",") + "]");
      options.push("types:[" + types.join(",") + "]");
      options.push("hashContexts:hashContexts");
      options.push("hashTypes:hashTypes");
    }

    if(this.options.data) {
      options.push("data:data");
    }

    options = "{" + options.join(",") + "}";
    if (useRegister) {
      this.register('options', options);
      params.push('options');
    } else {
      params.push(options);
    }
    return params.join(", ");
  }
};

var reservedWords = (
  "break else new var" +
  " case finally return void" +
  " catch for switch while" +
  " continue function this with" +
  " default if throw" +
  " delete in try" +
  " do instanceof typeof" +
  " abstract enum int short" +
  " boolean export interface static" +
  " byte extends long super" +
  " char final native synchronized" +
  " class float package throws" +
  " const goto private transient" +
  " debugger implements protected volatile" +
  " double import public let yield"
).split(" ");

var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

for(var i=0, l=reservedWords.length; i<l; i++) {
  compilerWords[reservedWords[i]] = true;
}

JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
  if(!JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(name)) {
    return true;
  }
  return false;
};

Handlebars.precompile = function(input, options) {
  if (input == null || (typeof input !== 'string' && input.constructor !== Handlebars.AST.ProgramNode)) {
    throw new Handlebars.Exception("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + input);
  }

  options = options || {};
  if (!('data' in options)) {
    options.data = true;
  }
  var ast = Handlebars.parse(input);
  var environment = new Compiler().compile(ast, options);
  return new JavaScriptCompiler().compile(environment, options);
};

Handlebars.compile = function(input, options) {
  if (input == null || (typeof input !== 'string' && input.constructor !== Handlebars.AST.ProgramNode)) {
    throw new Handlebars.Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + input);
  }

  options = options || {};
  if (!('data' in options)) {
    options.data = true;
  }
  var compiled;
  function compile() {
    var ast = Handlebars.parse(input);
    var environment = new Compiler().compile(ast, options);
    var templateSpec = new JavaScriptCompiler().compile(environment, options, undefined, true);
    return Handlebars.template(templateSpec);
  }

  // Template is only compiled on first use and cached after that point.
  return function(context, options) {
    if (!compiled) {
      compiled = compile();
    }
    return compiled.call(this, context, options);
  };
};

;
// lib/handlebars/runtime.js

Handlebars.VM = {
  template: function(templateSpec) {
    // Just add water
    var container = {
      escapeExpression: Handlebars.Utils.escapeExpression,
      invokePartial: Handlebars.VM.invokePartial,
      programs: [],
      program: function(i, fn, data) {
        var programWrapper = this.programs[i];
        if(data) {
          programWrapper = Handlebars.VM.program(i, fn, data);
        } else if (!programWrapper) {
          programWrapper = this.programs[i] = Handlebars.VM.program(i, fn);
        }
        return programWrapper;
      },
      merge: function(param, common) {
        var ret = param || common;

        if (param && common) {
          ret = {};
          Handlebars.Utils.extend(ret, common);
          Handlebars.Utils.extend(ret, param);
        }
        return ret;
      },
      programWithDepth: Handlebars.VM.programWithDepth,
      noop: Handlebars.VM.noop,
      compilerInfo: null
    };

    return function(context, options) {
      options = options || {};
      var result = templateSpec.call(container, Handlebars, context, options.helpers, options.partials, options.data);

      var compilerInfo = container.compilerInfo || [],
          compilerRevision = compilerInfo[0] || 1,
          currentRevision = Handlebars.COMPILER_REVISION;

      if (compilerRevision !== currentRevision) {
        if (compilerRevision < currentRevision) {
          var runtimeVersions = Handlebars.REVISION_CHANGES[currentRevision],
              compilerVersions = Handlebars.REVISION_CHANGES[compilerRevision];
          throw "Template was precompiled with an older version of Handlebars than the current runtime. "+
                "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").";
        } else {
          // Use the embedded version info since the runtime doesn't know about this revision yet
          throw "Template was precompiled with a newer version of Handlebars than the current runtime. "+
                "Please update your runtime to a newer version ("+compilerInfo[1]+").";
        }
      }

      return result;
    };
  },

  programWithDepth: function(i, fn, data /*, $depth */) {
    var args = Array.prototype.slice.call(arguments, 3);

    var program = function(context, options) {
      options = options || {};

      return fn.apply(this, [context, options.data || data].concat(args));
    };
    program.program = i;
    program.depth = args.length;
    return program;
  },
  program: function(i, fn, data) {
    var program = function(context, options) {
      options = options || {};

      return fn(context, options.data || data);
    };
    program.program = i;
    program.depth = 0;
    return program;
  },
  noop: function() { return ""; },
  invokePartial: function(partial, name, context, helpers, partials, data) {
    var options = { helpers: helpers, partials: partials, data: data };

    if(partial === undefined) {
      throw new Handlebars.Exception("The partial " + name + " could not be found");
    } else if(partial instanceof Function) {
      return partial(context, options);
    } else if (!Handlebars.compile) {
      throw new Handlebars.Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
    } else {
      partials[name] = Handlebars.compile(partial, {data: data !== undefined});
      return partials[name](context, options);
    }
  }
};

Handlebars.template = Handlebars.VM.template;
;
// lib/handlebars/browser-suffix.js
})(Handlebars);
;
/* Modernizr 2.0.6 (Custom Build) | MIT & BSD
 * Contains: fontface | backgroundsize | borderimage | borderradius | boxshadow | flexbox | hsla | multiplebgs | opacity | rgba | textshadow | cssanimations | csscolumns | generatedcontent | cssgradients | cssreflections | csstransforms | csstransforms3d | csstransitions | applicationcache | canvas | canvastext | draganddrop | hashchange | history | audio | video | indexeddb | input | inputtypes | localstorage | postmessage | sessionstorage | websockets | websqldatabase | webworkers | geolocation | inlinesvg | smil | svg | svgclippaths | touch | webgl | iepp | cssclasses | addtest | teststyles | testprop | testallprops | hasevent | prefixes | domprefixes | load
 */
;window.Modernizr=function(a,b,c){function H(){e.input=function(a){for(var b=0,c=a.length;b<c;b++)t[a[b]]=a[b]in l;return t}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)l.setAttribute("type",f=a[d]),e=l.type!=="text",e&&(l.value=m,l.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&l.style.WebkitAppearance!==c?(g.appendChild(l),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(l,null).WebkitAppearance!=="textfield"&&l.offsetHeight!==0,g.removeChild(l)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=l.checkValidity&&l.checkValidity()===!1:/^color$/.test(f)?(g.appendChild(l),g.offsetWidth,e=l.value!=m,g.removeChild(l)):e=l.value!=m)),s[a[d]]=!!e;return s}("search tel url email datetime date month week time datetime-local number range color".split(" "))}function F(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+p.join(c+" ")+c).split(" ");return E(d,b)}function E(a,b){for(var d in a)if(k[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function D(a,b){return!!~(""+a).indexOf(b)}function C(a,b){return typeof a===b}function B(a,b){return A(o.join(a+";")+(b||""))}function A(a){k.cssText=a}var d="2.0.6",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l=b.createElement("input"),m=":)",n=Object.prototype.toString,o=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),p="Webkit Moz O ms Khtml".split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v=function(a,c,d,e){var f,h,j,k=b.createElement("div");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:i+(d+1),k.appendChild(j);f=["&shy;","<style>",a,"</style>"].join(""),k.id=i,k.innerHTML+=f,g.appendChild(k),h=c(k,a),k.parentNode.removeChild(k);return!!h},w=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=C(e[d],"function"),C(e[d],c)||(e[d]=c),e.removeAttribute(d))),e=null;return f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),x,y={}.hasOwnProperty,z;!C(y,c)&&!C(y.call,c)?z=function(a,b){return y.call(a,b)}:z=function(a,b){return b in a&&C(a.constructor.prototype[b],c)};var G=function(c,d){var f=c.join(""),g=d.length;v(f,function(c,d){var f=b.styleSheets[b.styleSheets.length-1],h=f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"",i=c.childNodes,j={};while(g--)j[i[g].id]=i[g];e.touch="ontouchstart"in a||j.touch.offsetTop===9,e.csstransforms3d=j.csstransforms3d.offsetLeft===9,e.generatedcontent=j.generatedcontent.offsetHeight>=1,e.fontface=/src/i.test(h)&&h.indexOf(d.split(" ")[0])===0},g,d)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",o.join("touch-enabled),("),i,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",o.join("transform-3d),("),i,")","{#csstransforms3d{left:9px;position:absolute}}"].join(""),['#generatedcontent:after{content:"',m,'";visibility:hidden}'].join("")],["fontface","touch","csstransforms3d","generatedcontent"]);r.flexbox=function(){function c(a,b,c,d){a.style.cssText=o.join(b+":"+c+";")+(d||"")}function a(a,b,c,d){b+=":",a.style.cssText=(b+o.join(c+";"+b)).slice(0,-b.length)+(d||"")}var d=b.createElement("div"),e=b.createElement("div");a(d,"display","box","width:42px;padding:0;"),c(e,"box-flex","1","width:10px;"),d.appendChild(e),g.appendChild(d);var f=e.offsetWidth===42;d.removeChild(e),g.removeChild(d);return f},r.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},r.canvastext=function(){return!!e.canvas&&!!C(b.createElement("canvas").getContext("2d").fillText,"function")},r.webgl=function(){return!!a.WebGLRenderingContext},r.touch=function(){return e.touch},r.geolocation=function(){return!!navigator.geolocation},r.postmessage=function(){return!!a.postMessage},r.websqldatabase=function(){var b=!!a.openDatabase;return b},r.indexedDB=function(){for(var b=-1,c=p.length;++b<c;)if(a[p[b].toLowerCase()+"IndexedDB"])return!0;return!!a.indexedDB},r.hashchange=function(){return w("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},r.history=function(){return!!a.history&&!!history.pushState},r.draganddrop=function(){return w("dragstart")&&w("drop")},r.websockets=function(){for(var b=-1,c=p.length;++b<c;)if(a[p[b]+"WebSocket"])return!0;return"WebSocket"in a},r.rgba=function(){A("background-color:rgba(150,255,150,.5)");return D(k.backgroundColor,"rgba")},r.hsla=function(){A("background-color:hsla(120,40%,100%,.5)");return D(k.backgroundColor,"rgba")||D(k.backgroundColor,"hsla")},r.multiplebgs=function(){A("background:url(https://),url(https://),red url(https://)");return/(url\s*\(.*?){3}/.test(k.background)},r.backgroundsize=function(){return F("backgroundSize")},r.borderimage=function(){return F("borderImage")},r.borderradius=function(){return F("borderRadius")},r.boxshadow=function(){return F("boxShadow")},r.textshadow=function(){return b.createElement("div").style.textShadow===""},r.opacity=function(){B("opacity:.55");return/^0.55$/.test(k.opacity)},r.cssanimations=function(){return F("animationName")},r.csscolumns=function(){return F("columnCount")},r.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";A((a+o.join(b+a)+o.join(c+a)).slice(0,-a.length));return D(k.backgroundImage,"gradient")},r.cssreflections=function(){return F("boxReflect")},r.csstransforms=function(){return!!E(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},r.csstransforms3d=function(){var a=!!E(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);a&&"webkitPerspective"in g.style&&(a=e.csstransforms3d);return a},r.csstransitions=function(){return F("transitionProperty")},r.fontface=function(){return e.fontface},r.generatedcontent=function(){return e.generatedcontent},r.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType){c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"');var d='video/mp4; codecs="avc1.42E01E';c.h264=a.canPlayType(d+'"')||a.canPlayType(d+', mp4a.40.2"'),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"')}}catch(e){}return c},r.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"'),c.mp3=a.canPlayType("audio/mpeg;"),c.wav=a.canPlayType('audio/wav; codecs="1"'),c.m4a=a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")}catch(d){}return c},r.localstorage=function(){try{return!!localStorage.getItem}catch(a){return!1}},r.sessionstorage=function(){try{return!!sessionStorage.getItem}catch(a){return!1}},r.webworkers=function(){return!!a.Worker},r.applicationcache=function(){return!!a.applicationCache},r.svg=function(){return!!b.createElementNS&&!!b.createElementNS(q.svg,"svg").createSVGRect},r.inlinesvg=function(){var a=b.createElement("div");a.innerHTML="<svg/>";return(a.firstChild&&a.firstChild.namespaceURI)==q.svg},r.smil=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"animate")))},r.svgclippaths=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"clipPath")))};for(var I in r)z(r,I)&&(x=I.toLowerCase(),e[x]=r[I](),u.push((e[x]?"":"no-")+x));e.input||H(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)z(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return;b=typeof b=="boolean"?b:!!b(),g.className+=" "+(b?"":"no-")+a,e[a]=b}return e},A(""),j=l=null,a.attachEvent&&function(){var a=b.createElement("div");a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function s(a){var b=-1;while(++b<g)a.createElement(f[b])}a.iepp=a.iepp||{};var d=a.iepp,e=d.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",f=e.split("|"),g=f.length,h=new RegExp("(^|\\s)("+e+")","gi"),i=new RegExp("<(/*)("+e+")","gi"),j=/^\s*[\{\}]\s*$/,k=new RegExp("(^|[^\\n]*?\\s)("+e+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),l=b.createDocumentFragment(),m=b.documentElement,n=m.firstChild,o=b.createElement("body"),p=b.createElement("style"),q=/print|all/,r;d.getCSS=function(a,b){if(a+""===c)return"";var e=-1,f=a.length,g,h=[];while(++e<f){g=a[e];if(g.disabled)continue;b=g.media||b,q.test(b)&&h.push(d.getCSS(g.imports,b),g.cssText),b="all"}return h.join("")},d.parseCSS=function(a){var b=[],c;while((c=k.exec(a))!=null)b.push(((j.exec(c[1])?"\n":c[1])+c[2]+c[3]).replace(h,"$1.iepp_$2")+c[4]);return b.join("\n")},d.writeHTML=function(){var a=-1;r=r||b.body;while(++a<g){var c=b.getElementsByTagName(f[a]),d=c.length,e=-1;while(++e<d)c[e].className.indexOf("iepp_")<0&&(c[e].className+=" iepp_"+f[a])}l.appendChild(r),m.appendChild(o),o.className=r.className,o.id=r.id,o.innerHTML=r.innerHTML.replace(i,"<$1font")},d._beforePrint=function(){p.styleSheet.cssText=d.parseCSS(d.getCSS(b.styleSheets,"all")),d.writeHTML()},d.restoreHTML=function(){o.innerHTML="",m.removeChild(o),m.appendChild(r)},d._afterPrint=function(){d.restoreHTML(),p.styleSheet.cssText=""},s(b),s(l);d.disablePP||(n.insertBefore(p,n.firstChild),p.media="print",p.className="iepp-printshim",a.attachEvent("onbeforeprint",d._beforePrint),a.attachEvent("onafterprint",d._afterPrint))}(a,b),e._version=d,e._prefixes=o,e._domPrefixes=p,e.hasEvent=w,e.testProp=function(a){return E([a])},e.testAllProps=F,e.testStyles=v,g.className=g.className.replace(/\bno-js\b/,"")+(f?" js "+u.join(" "):"");return e}(this,this.document),function(a,b,c){function k(a){return!a||a=="loaded"||a=="complete"}function j(){var a=1,b=-1;while(p.length- ++b)if(p[b].s&&!(a=p[b].r))break;a&&g()}function i(a){var c=b.createElement("script"),d;c.src=a.s,c.onreadystatechange=c.onload=function(){!d&&k(c.readyState)&&(d=1,j(),c.onload=c.onreadystatechange=null)},m(function(){d||(d=1,j())},H.errorTimeout),a.e?c.onload():n.parentNode.insertBefore(c,n)}function h(a){var c=b.createElement("link"),d;c.href=a.s,c.rel="stylesheet",c.type="text/css";if(!a.e&&(w||r)){var e=function(a){m(function(){if(!d)try{a.sheet.cssRules.length?(d=1,j()):e(a)}catch(b){b.code==1e3||b.message=="security"||b.message=="denied"?(d=1,m(function(){j()},0)):e(a)}},0)};e(c)}else c.onload=function(){d||(d=1,m(function(){j()},0))},a.e&&c.onload();m(function(){d||(d=1,j())},H.errorTimeout),!a.e&&n.parentNode.insertBefore(c,n)}function g(){var a=p.shift();q=1,a?a.t?m(function(){a.t=="c"?h(a):i(a)},0):(a(),j()):q=0}function f(a,c,d,e,f,h){function i(){!o&&k(l.readyState)&&(r.r=o=1,!q&&j(),l.onload=l.onreadystatechange=null,m(function(){u.removeChild(l)},0))}var l=b.createElement(a),o=0,r={t:d,s:c,e:h};l.src=l.data=c,!s&&(l.style.display="none"),l.width=l.height="0",a!="object"&&(l.type=d),l.onload=l.onreadystatechange=i,a=="img"?l.onerror=i:a=="script"&&(l.onerror=function(){r.e=r.r=1,g()}),p.splice(e,0,r),u.insertBefore(l,s?null:n),m(function(){o||(u.removeChild(l),r.r=r.e=o=1,j())},H.errorTimeout)}function e(a,b,c){var d=b=="c"?z:y;q=0,b=b||"j",C(a)?f(d,a,b,this.i++,l,c):(p.splice(this.i++,0,a),p.length==1&&g());return this}function d(){var a=H;a.loader={load:e,i:0};return a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=r&&!s,u=s?l:n.parentNode,v=a.opera&&o.call(a.opera)=="[object Opera]",w="webkitAppearance"in l.style,x=w&&"async"in b.createElement("script"),y=r?"object":v||x?"img":"script",z=w?"img":y,A=Array.isArray||function(a){return o.call(a)=="[object Array]"},B=function(a){return Object(a)===a},C=function(a){return typeof a=="string"},D=function(a){return o.call(a)=="[object Function]"},E=[],F={},G,H;H=function(a){function f(a){var b=a.split("!"),c=E.length,d=b.pop(),e=b.length,f={url:d,origUrl:d,prefixes:b},g,h;for(h=0;h<e;h++)g=F[b[h]],g&&(f=g(f));for(h=0;h<c;h++)f=E[h](f);return f}function e(a,b,e,g,h){var i=f(a),j=i.autoCallback;if(!i.bypass){b&&(b=D(b)?b:b[a]||b[g]||b[a.split("/").pop().split("?")[0]]);if(i.instead)return i.instead(a,b,e,g,h);e.load(i.url,i.forceCSS||!i.forceJS&&/css$/.test(i.url)?"c":c,i.noexec),(D(b)||D(j))&&e.load(function(){d(),b&&b(i.origUrl,h,g),j&&j(i.origUrl,h,g)})}}function b(a,b){function c(a){if(C(a))e(a,h,b,0,d);else if(B(a))for(i in a)a.hasOwnProperty(i)&&e(a[i],h,b,i,d)}var d=!!a.test,f=d?a.yep:a.nope,g=a.load||a.both,h=a.callback,i;c(f),c(g),a.complete&&b.load(a.complete)}var g,h,i=this.yepnope.loader;if(C(a))e(a,0,i,0);else if(A(a))for(g=0;g<a.length;g++)h=a[g],C(h)?e(h,0,i,0):A(h)?H(h):B(h)&&b(h,i);else B(a)&&b(a,i)},H.addPrefix=function(a,b){F[a]=b},H.addFilter=function(a){E.push(a)},H.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",G=function(){b.removeEventListener("DOMContentLoaded",G,0),b.readyState="complete"},0)),a.yepnope=d()}(this,this.document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};/*!
Deck JS - deck.goto
Copyright (c) 2011-2014 Caleb Troughton
Dual licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module adds the necessary methods and key bindings to show and hide a form
for jumping to any slide number/id in the deck (and processes that form
accordingly). The form-showing state is indicated by the presence of a class on
the deck container.
*/
(function($, undefined) {
  var $document = $(document);
  var rootCounter;

  var bindKeyEvents = function() {
    $document.unbind('keydown.deckgoto');
    $document.bind('keydown.deckgoto', function(event) {
      var key = $.deck('getOptions').keys.goto;
      if (event.which === key || $.inArray(event.which, key) > -1) {
        event.preventDefault();
        $.deck('toggleGoTo');
      }
    });
  };

  var populateDatalist = function() {
    var options = $.deck('getOptions');
    var $datalist = $(options.selectors.gotoDatalist);

    $.each($.deck('getSlides'), function(i, $slide) {
      var id = $slide.attr('id');
      if (id) {
        $datalist.append('<option value="' + id + '">');
      }
    });
  };

  var markRootSlides = function() {
    var options = $.deck('getOptions');
    var slideTest = $.map([
      options.classes.before,
      options.classes.previous,
      options.classes.current,
      options.classes.next,
      options.classes.after
    ], function(el, i) {
      return '.' + el;
    }).join(', ');

    rootCounter = 0;
    $.each($.deck('getSlides'), function(i, $slide) {
      var $parentSlides = $slide.parentsUntil(
        options.selectors.container,
        slideTest
      );

      if ($parentSlides.length) {
        $slide.removeData('rootIndex');
      }
      else if (!options.countNested) {
        ++rootCounter;
        $slide.data('rootIndex', rootCounter);
      }
    });
  };

  var handleFormSubmit = function() {
    var options = $.deck('getOptions');
    var $form = $(options.selectors.gotoForm);

    $form.unbind('submit.deckgoto');
    $form.bind('submit.deckgoto', function(event) {
      var $field = $(options.selectors.gotoInput);
      var indexOrId = $field.val();
      var index = parseInt(indexOrId, 10);

      if (!options.countNested) {
        if (!isNaN(index) && index >= rootCounter) {
          return false;
        }
        $.each($.deck('getSlides'), function(i, $slide) {
          if ($slide.data('rootIndex') === index) {
            index = i + 1;
            return false;
          }
        });
      }

      $.deck('go', isNaN(index) ? indexOrId : index - 1);
      $.deck('hideGoTo');
      $field.val('');
      event.preventDefault();
    });
  };

  /*
  Extends defaults/options.

  options.classes.goto
    This class is added to the deck container when showing the Go To Slide
    form.

  options.selectors.gotoDatalist
    The element that matches this selector is the datalist element that will
    be populated with options for each of the slide ids.  In browsers that
    support the datalist element, this provides a drop list of slide ids to
    aid the user in selecting a slide.

  options.selectors.gotoForm
    The element that matches this selector is the form that is submitted
    when a user hits enter after typing a slide number/id in the gotoInput
    element.

  options.selectors.gotoInput
    The element that matches this selector is the text input field for
    entering a slide number/id in the Go To Slide form.

  options.keys.goto
    The numeric keycode used to show the Go To Slide form.

  options.countNested
    If false, only top level slides will be counted when entering a
    slide number.
  */
  $.extend(true, $.deck.defaults, {
    classes: {
      goto: 'deck-goto'
    },

    selectors: {
      gotoDatalist: '#goto-datalist',
      gotoForm: '.goto-form',
      gotoInput: '#goto-slide'
    },

    keys: {
      goto: 71 // g
    },

    countNested: true
  });

  /*
  jQuery.deck('showGoTo')

  Shows the Go To Slide form by adding the class specified by the goto class
  option to the deck container.
  */
  $.deck('extend', 'showGoTo', function() {
    var options = $.deck('getOptions');
    $.deck('getContainer').addClass(options.classes.goto);
    $(options.selectors.gotoForm).attr('aria-hidden', false);
    $(options.selectors.gotoInput).focus();
  });

  /*
  jQuery.deck('hideGoTo')

  Hides the Go To Slide form by removing the class specified by the goto class
  option from the deck container.
  */
  $.deck('extend', 'hideGoTo', function() {
    var options = $.deck('getOptions');
    $(options.selectors.gotoInput).blur();
    $.deck('getContainer').removeClass(options.classes.goto);
    $(options.selectors.gotoForm).attr('aria-hidden', true);
  });

  /*
  jQuery.deck('toggleGoTo')

  Toggles between showing and hiding the Go To Slide form.
  */
  $.deck('extend', 'toggleGoTo', function() {
    var options = $.deck('getOptions');
    var hasGotoClass = $.deck('getContainer').hasClass(options.classes.goto);
    $.deck(hasGotoClass ? 'hideGoTo' : 'showGoTo');
  });

  $document.bind('deck.init', function() {
    bindKeyEvents();
    populateDatalist();
    markRootSlides();
    handleFormSubmit();
  });
})(jQuery);

/*!
Deck JS - deck.menu
Copyright (c) 2011-2014 Caleb Troughton
Dual licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module adds the methods and key binding to show and hide a menu of all
slides in the deck. The deck menu state is indicated by the presence of a class
on the deck container.
*/
(function($, undefined) {
  var $document = $(document);
  var $html = $('html');
  var rootSlides;

  var populateRootSlidesArray = function() {
    var options = $.deck('getOptions');
    var slideTest = $.map([
      options.classes.before,
      options.classes.previous,
      options.classes.current,
      options.classes.next,
      options.classes.after
    ], function(el, i) {
      return '.' + el;
    }).join(', ');

    rootSlides = [];
    $.each($.deck('getSlides'), function(i, $slide) {
      var $parentSlides = $slide.parentsUntil(
        options.selectors.container,
        slideTest
      );
      if (!$parentSlides.length) {
        rootSlides.push($slide);
      }
    });
  };

  var bindKeyEvents = function() {
    var options = $.deck('getOptions');
    $document.unbind('keydown.deckmenu');
    $document.bind('keydown.deckmenu', function(event) {
      var isMenuKey = event.which === options.keys.menu;
      isMenuKey = isMenuKey || $.inArray(event.which, options.keys.menu) > -1;
      if (isMenuKey && !event.ctrlKey) {
        $.deck('toggleMenu');
        event.preventDefault();
      }
    });
  };

  var bindTouchEvents = function() {
    var $container = $.deck('getContainer');
    var options = $.deck('getOptions');
    var touchEndTime = 0;
    var currentSlide;

    $container.unbind('touchstart.deckmenu');
    $container.bind('touchstart.deckmenu', function() {
      currentSlide = $.deck('getSlide');
    });
    $container.unbind('touchend.deckmenu');
    $container.bind('touchend.deckmenu', function(event) {
      var now = Date.now();
      var isDoubletap = now - touchEndTime < options.touch.doubletapWindow;

      // Ignore this touch event if it caused a nav change (swipe)
      if (currentSlide !== $.deck('getSlide')) {
        return;
      }
      if (isDoubletap) {
        $.deck('toggleMenu');
        event.preventDefault();
      }
      touchEndTime = now;
    });
  };

  var setupMenuSlideSelection = function() {
    var options = $.deck('getOptions');

    $.each($.deck('getSlides'), function(i, $slide) {
      $slide.unbind('click.deckmenu');
      $slide.bind('click.deckmenu', function(event) {
        if (!$.deck('getContainer').hasClass(options.classes.menu)) {
          return;
        }
        $.deck('go', i);
        $.deck('hideMenu');
        event.stopPropagation();
        event.preventDefault();
      });
    });
  };

  /*
  Extends defaults/options.

  options.classes.menu
    This class is added to the deck container when showing the slide menu.

  options.keys.menu
    The numeric keycode used to toggle between showing and hiding the slide
    menu.

  options.touch.doubletapWindow
    Two consecutive touch events within this number of milliseconds will
    be considered a double tap, and will toggle the menu on touch devices.
  */
  $.extend(true, $.deck.defaults, {
    classes: {
      menu: 'deck-menu'
    },

    keys: {
      menu: 77 // m
    },

    touch: {
      doubletapWindow: 400
    }
  });

  /*
  jQuery.deck('showMenu')

  Shows the slide menu by adding the class specified by the menu class option
  to the deck container.
  */
  $.deck('extend', 'showMenu', function() {
    var $container = $.deck('getContainer');
    var options = $.deck('getOptions');

    if ($container.hasClass(options.classes.menu)) {
      return;
    }

    // Hide through loading class to short-circuit transitions (perf)
    $container.addClass([
      options.classes.loading,
      options.classes.menu
    ].join(' '));

    /* Forced to do this in JS until CSS learns second-grade math. Save old
    style value for restoration when menu is hidden. */
    if (Modernizr.csstransforms) {
      $.each(rootSlides, function(i, $slide) {
        $slide.data('oldStyle', $slide.attr('style'));
        $slide.css({
          'position': 'absolute',
          'left': ((i % 4) * 25) + '%',
          'top': (Math.floor(i / 4) * 25) + '%'
        });
      });
    }

    // Need to ensure the loading class renders first, then remove
    window.setTimeout(function() {
      $container.removeClass(options.classes.loading);
      $container.scrollTop($.deck('getSlide').position().top);
    }, 0);
  });

  /*
  jQuery.deck('hideMenu')

  Hides the slide menu by removing the class specified by the menu class
  option from the deck container.
  */
  $.deck('extend', 'hideMenu', function() {
    var $container = $.deck('getContainer');
    var options = $.deck('getOptions');

    if (!$container.hasClass(options.classes.menu)) {
      return;
    }

    $container.removeClass(options.classes.menu);
    $container.addClass(options.classes.loading);

    /* Restore old style value */
    if (Modernizr.csstransforms) {
      $.each(rootSlides, function(i, $slide) {
        var oldStyle = $slide.data('oldStyle');
        $slide.attr('style', oldStyle ? oldStyle : '');
      });
    }

    window.setTimeout(function() {
      $container.removeClass(options.classes.loading);
      $container.scrollTop(0);
    }, 0);
  });

  /*
  jQuery.deck('toggleMenu')

  Toggles between showing and hiding the slide menu.
  */
  $.deck('extend', 'toggleMenu', function() {
    $.deck('getContainer').hasClass($.deck('getOptions').classes.menu) ?
    $.deck('hideMenu') : $.deck('showMenu');
  });

  $document.bind('deck.init', function() {
    populateRootSlidesArray();
    bindKeyEvents();
    bindTouchEvents();
    setupMenuSlideSelection();
  });

  $document.bind('deck.change', function(event, from, to) {
    var $container = $.deck('getContainer');
    var containerScroll, slideTop;

    if ($container.hasClass($.deck('getOptions').classes.menu)) {
      containerScroll = $container.scrollTop();
      slideTop = $.deck('getSlide', to).position().top;
      $container.scrollTop(containerScroll + slideTop);
    }
  });
})(jQuery);
/*!
Deck JS - deck.navigation
Copyright (c) 2011-2014 Caleb Troughton
Dual licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module adds clickable previous and next links to the deck.
*/
(function($, undefined) {
  var $document = $(document);

  /* Updates link hrefs, and disabled states if last/first slide */
  var updateButtons = function(event, from, to) {
    var options = $.deck('getOptions');
    var lastIndex = $.deck('getSlides').length - 1;
    var $prevSlide = $.deck('getSlide', to - 1);
    var $nextSlide = $.deck('getSlide', to + 1);
    var hrefBase = window.location.href.replace(/#.*/, '');
    var prevId = $prevSlide ? $prevSlide.attr('id') : undefined;
    var nextId = $nextSlide ? $nextSlide.attr('id') : undefined;
    var $prevButton = $(options.selectors.previousLink);
    var $nextButton = $(options.selectors.nextLink);

    $prevButton.toggleClass(options.classes.navDisabled, to === 0);
    $prevButton.attr('aria-disabled', to === 0);
    $prevButton.attr('href', hrefBase + '#' + (prevId ? prevId : ''));
    $nextButton.toggleClass(options.classes.navDisabled, to === lastIndex);
    $nextButton.attr('aria-disabled', to === lastIndex);
    $nextButton.attr('href', hrefBase + '#' + (nextId ? nextId : ''));
  };

  /*
  Extends defaults/options.

  options.classes.navDisabled
    This class is added to a navigation link when that action is disabled.
    It is added to the previous link when on the first slide, and to the
    next link when on the last slide.

  options.selectors.nextLink
    The elements that match this selector will move the deck to the next
    slide when clicked.

  options.selectors.previousLink
    The elements that match this selector will move to deck to the previous
    slide when clicked.
  */
  $.extend(true, $.deck.defaults, {
    classes: {
      navDisabled: 'deck-nav-disabled'
    },

    selectors: {
      nextLink: '.deck-next-link',
      previousLink: '.deck-prev-link'
    }
  });

  $document.bind('deck.init', function() {
    var options = $.deck('getOptions');
    var slides = $.deck('getSlides');
    var $current = $.deck('getSlide');
    var $prevButton = $(options.selectors.previousLink);
    var $nextButton = $(options.selectors.nextLink);
    var index;

    // Setup prev/next link events
    $prevButton.unbind('click.decknavigation');
    $prevButton.bind('click.decknavigation', function(event) {
      $.deck('prev');
      event.preventDefault();
    });

    $nextButton.unbind('click.decknavigation');
    $nextButton.bind('click.decknavigation', function(event) {
      $.deck('next');
      event.preventDefault();
    });

    // Find where we started in the deck and set initial states
    $.each(slides, function(i, $slide) {
      if ($slide === $current) {
        index = i;
        return false;
      }
    });
    updateButtons(null, index, index);
  });

  $document.bind('deck.change', updateButtons);
})(jQuery);

/*!
Deck JS - deck.scale
Copyright (c) 2011-2014 Caleb Troughton
Dual licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module adds automatic scaling to the deck.  Slides are scaled down
using CSS transforms to fit within the deck container. If the container is
big enough to hold the slides without scaling, no scaling occurs. The user
can disable and enable scaling with a keyboard shortcut.

Note: CSS transforms may make Flash videos render incorrectly.  Presenters
that need to use video may want to disable scaling to play them.  HTML5 video
works fine.
*/
(function($, undefined) {
  var $document = $(document);
  var $window = $(window);
  var baseHeight, timer, rootSlides;

  /*
  Internal function to do all the dirty work of scaling the slides.
  */
  var scaleDeck = function() {
    var options = $.deck('getOptions');
    var $container = $.deck('getContainer');
    var baseHeight = options.baseHeight;

    if (!baseHeight) {
      baseHeight = $container.height();
    }

    // Scale each slide down if necessary (but don't scale up)
    $.each(rootSlides, function(i, $slide) {
      var slideHeight = $slide.innerHeight();
      var $scaler = $slide.find('.' + options.classes.scaleSlideWrapper);
      var shouldScale = $container.hasClass(options.classes.scale);
      var scale = shouldScale ? baseHeight / slideHeight : 1;

      if (scale === 1) {
        $scaler.css('transform', '');
      }
      else {
        $scaler.css('transform', 'scale(' + scale + ')');
        window.setTimeout(function() {
          $container.scrollTop(0)
        }, 1);
      }
    });
  };

  var populateRootSlides = function() {
    var options = $.deck('getOptions');
    var slideTest = $.map([
      options.classes.before,
      options.classes.previous,
      options.classes.current,
      options.classes.next,
      options.classes.after
    ], function(el, i) {
      return '.' + el;
    }).join(', ');

    rootSlides = [];
    $.each($.deck('getSlides'), function(i, $slide) {
      var $parentSlides = $slide.parentsUntil(
        options.selectors.container,
        slideTest
      );
      if (!$parentSlides.length) {
        rootSlides.push($slide);
      }
    });
  };

  var wrapRootSlideContent = function() {
    var options = $.deck('getOptions');
    var wrap = '<div class="' + options.classes.scaleSlideWrapper + '"/>';
    $.each(rootSlides, function(i, $slide) {
      $slide.children().wrapAll(wrap);
    });
  };

  var scaleOnResizeAndLoad = function() {
    var options = $.deck('getOptions');

    $window.unbind('resize.deckscale');
    $window.bind('resize.deckscale', function() {
      window.clearTimeout(timer);
      timer = window.setTimeout(scaleDeck, options.scaleDebounce);
    });
    $.deck('enableScale');
    $window.unbind('load.deckscale');
    $window.bind('load.deckscale', scaleDeck);
  };

  var bindKeyEvents = function() {
    var options = $.deck('getOptions');
    $document.unbind('keydown.deckscale');
    $document.bind('keydown.deckscale', function(event) {
      var isKey = event.which === options.keys.scale;
      isKey = isKey || $.inArray(event.which, options.keys.scale) > -1;
      if (isKey) {
        $.deck('toggleScale');
        event.preventDefault();
      }
    });
  };

  /*
  Extends defaults/options.

  options.classes.scale
    This class is added to the deck container when scaling is enabled.
    It is enabled by default when the module is included.

  options.classes.scaleSlideWrapper
    Scaling is done using a wrapper around the contents of each slide. This
    class is applied to that wrapper.

  options.keys.scale
    The numeric keycode used to toggle enabling and disabling scaling.

  options.baseHeight
    When baseHeight is falsy, as it is by default, the deck is scaled in
    proportion to the height of the deck container. You may instead specify
    a height as a number of px, and slides will be scaled against this
    height regardless of the container size.

  options.scaleDebounce
    Scaling on the browser resize event is debounced. This number is the
    threshold in milliseconds. You can learn more about debouncing here:
    http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/

  */
  $.extend(true, $.deck.defaults, {
    classes: {
      scale: 'deck-scale',
      scaleSlideWrapper: 'deck-slide-scaler'
    },

    keys: {
      scale: 83 // s
    },

    baseHeight: null,
    scaleDebounce: 200
  });

  /*
  jQuery.deck('disableScale')

  Disables scaling and removes the scale class from the deck container.
  */
  $.deck('extend', 'disableScale', function() {
    $.deck('getContainer').removeClass($.deck('getOptions').classes.scale);
    scaleDeck();
  });

  /*
  jQuery.deck('enableScale')

  Enables scaling and adds the scale class to the deck container.
  */
  $.deck('extend', 'enableScale', function() {
    $.deck('getContainer').addClass($.deck('getOptions').classes.scale);
    scaleDeck();
  });

  /*
  jQuery.deck('toggleScale')

  Toggles between enabling and disabling scaling.
  */
  $.deck('extend', 'toggleScale', function() {
    var $container = $.deck('getContainer');
    var isScaled = $container.hasClass($.deck('getOptions').classes.scale);
    $.deck(isScaled? 'disableScale' : 'enableScale');
  });

  $document.bind('deck.init', function() {
    populateRootSlides();
    wrapRootSlideContent();
    scaleOnResizeAndLoad();
    bindKeyEvents();
  });
})(jQuery, 'deck', this);

/*!
Deck JS - deck.status
Copyright (c) 2011-2014 Caleb Troughton
Dual licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module adds a (current)/(total) style status indicator to the deck.
*/
(function($, undefined) {
  var $document = $(document);
  var rootCounter;

  var updateCurrent = function(event, from, to) {
    var options = $.deck('getOptions');
    var currentSlideNumber = to + 1;
    if (!options.countNested) {
      currentSlideNumber = $.deck('getSlide', to).data('rootSlide');
    }
    $(options.selectors.statusCurrent).text(currentSlideNumber);
  };

  var markRootSlides = function() {
    var options = $.deck('getOptions');
    var slideTest = $.map([
      options.classes.before,
      options.classes.previous,
      options.classes.current,
      options.classes.next,
      options.classes.after
    ], function(el, i) {
      return '.' + el;
    }).join(', ');

    rootCounter = 0;
    $.each($.deck('getSlides'), function(i, $slide) {
      var $parentSlides = $slide.parentsUntil(
        options.selectors.container,
        slideTest
      );

      if ($parentSlides.length) {
        $slide.data('rootSlide', $parentSlides.last().data('rootSlide'));
      }
      else {
        ++rootCounter;
        $slide.data('rootSlide', rootCounter);
      }
    });
  };

  var setInitialSlideNumber = function() {
    var slides = $.deck('getSlides');
    var $currentSlide = $.deck('getSlide');
    var index;

    $.each(slides, function(i, $slide) {
      if ($slide === $currentSlide) {
        index = i;
        return false;
      }
    });
    updateCurrent(null, index, index);
  };

  var setTotalSlideNumber = function() {
    var options = $.deck('getOptions');
    var slides = $.deck('getSlides');

    if (options.countNested) {
      $(options.selectors.statusTotal).text(slides.length);
    }
    else {
      $(options.selectors.statusTotal).text(rootCounter);
    }
  };

  /*
  Extends defaults/options.

  options.selectors.statusCurrent
    The element matching this selector displays the current slide number.

  options.selectors.statusTotal
    The element matching this selector displays the total number of slides.

  options.countNested
    If false, only top level slides will be counted in the current and
    total numbers.
  */
  $.extend(true, $.deck.defaults, {
    selectors: {
      statusCurrent: '.deck-status-current',
      statusTotal: '.deck-status-total'
    },

    countNested: true
  });

  $document.bind('deck.init', function() {
    markRootSlides();
    setInitialSlideNumber();
    setTotalSlideNumber();
  });
  $document.bind('deck.change', updateCurrent);
})(jQuery, 'deck');

