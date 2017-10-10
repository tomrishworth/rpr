/*! jQuery v3.2.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a);
}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}}),r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var _a,ab=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?_a:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),_a={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ab[b]||r.find.attr;ab[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=ab[g],ab[g]=e,e=null!=c(a,b,d)?g:null,ab[g]=f),e}});var bb=/^(?:input|select|textarea|button)$/i,cb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):bb.test(a.nodeName)||cb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function db(a){var b=a.match(L)||[];return b.join(" ")}function eb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,eb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=eb(c),d=1===c.nodeType&&" "+db(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=db(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,eb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=eb(c),d=1===c.nodeType&&" "+db(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=db(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,eb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=eb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+db(eb(c))+" ").indexOf(b)>-1)return!0;return!1}});var fb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(fb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:db(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var gb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!gb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,gb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var hb=/\[\]$/,ib=/\r?\n/g,jb=/^(?:submit|button|image|reset|file)$/i,kb=/^(?:input|select|textarea|keygen)/i;function lb(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||hb.test(a)?d(a,e):lb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d);
});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)lb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)lb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&kb.test(this.nodeName)&&!jb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ib,"\r\n")}}):{name:b.name,value:c.replace(ib,"\r\n")}}).get()}}),r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var mb=a.jQuery,nb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=nb),b&&a.jQuery===r&&(a.jQuery=mb),r},b||(a.jQuery=a.$=r),r});

var window = (typeof window === "undefined") ? {} : window;
(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define(factory);
    } else if (typeof module === "object" && module.exports) {
        module.exports = factory();
    } else {
        root.bodymovin = factory();
    }
}(window, function() {
    var svgNS = "http://www.w3.org/2000/svg";

var locationHref = '';

var subframeEnabled = true;
var expressionsPlugin;
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var cachedColors = {};
var bm_rounder = Math.round;
var bm_rnd;
var bm_pow = Math.pow;
var bm_sqrt = Math.sqrt;
var bm_abs = Math.abs;
var bm_floor = Math.floor;
var bm_max = Math.max;
var bm_min = Math.min;
var blitter = 10;

var BMMath = {};
(function(){
    var propertyNames = Object.getOwnPropertyNames(Math);
    var i, len = propertyNames.length;
    for(i=0;i<len;i+=1){
        BMMath[propertyNames[i]] = Math[propertyNames[i]];
    }
}());

function ProjectInterface(){return {}};

BMMath.random = Math.random;
BMMath.abs = function(val){
    var tOfVal = typeof val;
    if(tOfVal === 'object' && val.length){
        var absArr = Array.apply(null,{length:val.length});
        var i, len = val.length;
        for(i=0;i<len;i+=1){
            absArr[i] = Math.abs(val[i]);
        }
        return absArr;
    }
    return Math.abs(val);

}
var defaultCurveSegments = 150;
var degToRads = Math.PI/180;
var roundCorner = 0.5519;

function roundValues(flag){
    if(flag){
        bm_rnd = Math.round;
    }else{
        bm_rnd = function(val){
            return val;
        };
    }
}
roundValues(false);

function roundTo2Decimals(val){
    return Math.round(val*10000)/10000;
}

function roundTo3Decimals(val){
    return Math.round(val*100)/100;
}

function styleDiv(element){
    element.style.position = 'absolute';
    element.style.top = 0;
    element.style.left = 0;
    element.style.display = 'block';
    element.style.transformOrigin = element.style.webkitTransformOrigin = '0 0';
    element.style.backfaceVisibility  = element.style.webkitBackfaceVisibility = 'visible';
    element.style.transformStyle = element.style.webkitTransformStyle = element.style.mozTransformStyle = "preserve-3d";
}

function styleUnselectableDiv(element){
    element.style.userSelect = 'none';
    element.style.MozUserSelect = 'none';
    element.style.webkitUserSelect = 'none';
    element.style.oUserSelect = 'none';

}

function BMEnterFrameEvent(n,c,t,d){
    this.type = n;
    this.currentTime = c;
    this.totalTime = t;
    this.direction = d < 0 ? -1:1;
}

function BMCompleteEvent(n,d){
    this.type = n;
    this.direction = d < 0 ? -1:1;
}

function BMCompleteLoopEvent(n,c,t,d){
    this.type = n;
    this.currentLoop = c;
    this.totalLoops = t;
    this.direction = d < 0 ? -1:1;
}

function BMSegmentStartEvent(n,f,t){
    this.type = n;
    this.firstFrame = f;
    this.totalFrames = t;
}

function BMDestroyEvent(n,t){
    this.type = n;
    this.target = t;
}

function _addEventListener(eventName, callback){

    if (!this._cbs[eventName]){
        this._cbs[eventName] = [];
    }
    this._cbs[eventName].push(callback);

	return function() {
		this.removeEventListener(eventName, callback);
	}.bind(this);
}

function _removeEventListener(eventName,callback){

    if (!callback){
        this._cbs[eventName] = null;
    }else if(this._cbs[eventName]){
        var i = 0, len = this._cbs[eventName].length;
        while(i<len){
            if(this._cbs[eventName][i] === callback){
                this._cbs[eventName].splice(i,1);
                i -=1;
                len -= 1;
            }
            i += 1;
        }
        if(!this._cbs[eventName].length){
            this._cbs[eventName] = null;
        }
    }

}

function _triggerEvent(eventName, args){
    if (this._cbs[eventName]) {
        var len = this._cbs[eventName].length;
        for (var i = 0; i < len; i++){
            this._cbs[eventName][i](args);
        }
    }
}

function randomString(length, chars){
    if(chars === undefined){
        chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    }
    var i;
    var result = '';
    for (i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}

function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return [ r,
        g,
         b ];
}

function RGBtoHSV(r, g, b) {
    if (arguments.length === 1) {
        g = r.g, b = r.b, r = r.r;
    }
    var max = Math.max(r, g, b), min = Math.min(r, g, b),
        d = max - min,
        h,
        s = (max === 0 ? 0 : d / max),
        v = max / 255;

    switch (max) {
        case min: h = 0; break;
        case r: h = (g - b) + d * (g < b ? 6: 0); h /= 6 * d; break;
        case g: h = (b - r) + d * 2; h /= 6 * d; break;
        case b: h = (r - g) + d * 4; h /= 6 * d; break;
    }

    return [
         h,
         s,
         v
    ];
}

function addSaturationToRGB(color,offset){
    var hsv = RGBtoHSV(color[0]*255,color[1]*255,color[2]*255);
    hsv[1] += offset;
    if (hsv[1] > 1) {
        hsv[1] = 1;
    }
    else if (hsv[1] <= 0) {
        hsv[1] = 0;
    }
    return HSVtoRGB(hsv[0],hsv[1],hsv[2]);
}

function addBrightnessToRGB(color,offset){
    var hsv = RGBtoHSV(color[0]*255,color[1]*255,color[2]*255);
    hsv[2] += offset;
    if (hsv[2] > 1) {
        hsv[2] = 1;
    }
    else if (hsv[2] < 0) {
        hsv[2] = 0;
    }
    return HSVtoRGB(hsv[0],hsv[1],hsv[2]);
}

function addHueToRGB(color,offset) {
    var hsv = RGBtoHSV(color[0]*255,color[1]*255,color[2]*255);
    hsv[0] += offset/360;
    if (hsv[0] > 1) {
        hsv[0] -= 1;
    }
    else if (hsv[0] < 0) {
        hsv[0] += 1;
    }
    return HSVtoRGB(hsv[0],hsv[1],hsv[2]);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
}

var rgbToHex = (function(){
    var colorMap = [];
    var i;
    var hex;
    for(i=0;i<256;i+=1){
        hex = i.toString(16);
        colorMap[i] = hex.length == 1 ? '0' + hex : hex;
    }

    return function(r, g, b) {
        if(r<0){
            r = 0;
        }
        if(g<0){
            g = 0;
        }
        if(b<0){
            b = 0;
        }
        return '#' + colorMap[r] + colorMap[g] + colorMap[b];
    };
}());

function fillToRgba(hex,alpha){
    if(!cachedColors[hex]){
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        cachedColors[hex] = parseInt(result[1], 16)+','+parseInt(result[2], 16)+','+parseInt(result[3], 16);
    }
    return 'rgba('+cachedColors[hex]+','+alpha+')';
}

var fillColorToString = (function(){

    var colorMap = [];
    return function(colorArr,alpha){
        if(alpha !== undefined){
            colorArr[3] = alpha;
        }
        if(!colorMap[colorArr[0]]){
            colorMap[colorArr[0]] = {};
        }
        if(!colorMap[colorArr[0]][colorArr[1]]){
            colorMap[colorArr[0]][colorArr[1]] = {};
        }
        if(!colorMap[colorArr[0]][colorArr[1]][colorArr[2]]){
            colorMap[colorArr[0]][colorArr[1]][colorArr[2]] = {};
        }
        if(!colorMap[colorArr[0]][colorArr[1]][colorArr[2]][colorArr[3]]){
            colorMap[colorArr[0]][colorArr[1]][colorArr[2]][colorArr[3]] = 'rgba(' + colorArr.join(',')+')';
        }
        return colorMap[colorArr[0]][colorArr[1]][colorArr[2]][colorArr[3]];
    };
}());

function RenderedFrame(tr,o) {
    this.tr = tr;
    this.o = o;
}

function iterateDynamicProperties(num){
    var i, len = this.dynamicProperties;
    for(i=0;i<len;i+=1){
        this.dynamicProperties[i].getValue(num);
    }
}

function reversePath(paths){
    var newI = [], newO = [], newV = [];
    var i, len, newPaths = {};
    var init = 0;
    if (paths.c) {
        newI[0] = paths.o[0];
        newO[0] = paths.i[0];
        newV[0] = paths.v[0];
        init = 1;
    }
    len = paths.i.length;
    var cnt = len - 1;

    for (i = init; i < len; i += 1) {
        newI.push(paths.o[cnt]);
        newO.push(paths.i[cnt]);
        newV.push(paths.v[cnt]);
        cnt -= 1;
    }

    newPaths.i = newI;
    newPaths.o = newO;
    newPaths.v = newV;

    return newPaths;
}
/*!
 Transformation Matrix v2.0
 (c) Epistemex 2014-2015
 www.epistemex.com
 By Ken Fyrstenberg
 Contributions by leeoniya.
 License: MIT, header required.
 */

/**
 * 2D transformation matrix object initialized with identity matrix.
 *
 * The matrix can synchronize a canvas context by supplying the context
 * as an argument, or later apply current absolute transform to an
 * existing context.
 *
 * All values are handled as floating point values.
 *
 * @param {CanvasRenderingContext2D} [context] - Optional context to sync with Matrix
 * @prop {number} a - scale x
 * @prop {number} b - shear y
 * @prop {number} c - shear x
 * @prop {number} d - scale y
 * @prop {number} e - translate x
 * @prop {number} f - translate y
 * @prop {CanvasRenderingContext2D|null} [context=null] - set or get current canvas context
 * @constructor
 */

var Matrix = (function(){

    function reset(){
        this.props[0] = 1;
        this.props[1] = 0;
        this.props[2] = 0;
        this.props[3] = 0;
        this.props[4] = 0;
        this.props[5] = 1;
        this.props[6] = 0;
        this.props[7] = 0;
        this.props[8] = 0;
        this.props[9] = 0;
        this.props[10] = 1;
        this.props[11] = 0;
        this.props[12] = 0;
        this.props[13] = 0;
        this.props[14] = 0;
        this.props[15] = 1;
        return this;
    }

    function rotate(angle) {
        if(angle === 0){
            return this;
        }
        var mCos = Math.cos(angle);
        var mSin = Math.sin(angle);
        return this._t(mCos, -mSin,  0, 0
            , mSin,  mCos, 0, 0
            , 0,  0,  1, 0
            , 0, 0, 0, 1);
    }

    function rotateX(angle){
        if(angle === 0){
            return this;
        }
        var mCos = Math.cos(angle);
        var mSin = Math.sin(angle);
        return this._t(1, 0, 0, 0
            , 0, mCos, -mSin, 0
            , 0, mSin,  mCos, 0
            , 0, 0, 0, 1);
    }

    function rotateY(angle){
        if(angle === 0){
            return this;
        }
        var mCos = Math.cos(angle);
        var mSin = Math.sin(angle);
        return this._t(mCos,  0,  mSin, 0
            , 0, 1, 0, 0
            , -mSin,  0,  mCos, 0
            , 0, 0, 0, 1);
    }

    function rotateZ(angle){
        if(angle === 0){
            return this;
        }
        var mCos = Math.cos(angle);
        var mSin = Math.sin(angle);
        return this._t(mCos, -mSin,  0, 0
            , mSin,  mCos, 0, 0
            , 0,  0,  1, 0
            , 0, 0, 0, 1);
    }

    function shear(sx,sy){
        return this._t(1, sy, sx, 1, 0, 0);
    }

    function skew(ax, ay){
        return this.shear(Math.tan(ax), Math.tan(ay));
    }

    function skewFromAxis(ax, angle){
        var mCos = Math.cos(angle);
        var mSin = Math.sin(angle);
        return this._t(mCos, mSin,  0, 0
            , -mSin,  mCos, 0, 0
            , 0,  0,  1, 0
            , 0, 0, 0, 1)
            ._t(1, 0,  0, 0
            , Math.tan(ax),  1, 0, 0
            , 0,  0,  1, 0
            , 0, 0, 0, 1)
            ._t(mCos, -mSin,  0, 0
            , mSin,  mCos, 0, 0
            , 0,  0,  1, 0
            , 0, 0, 0, 1);
        //return this._t(mCos, mSin, -mSin, mCos, 0, 0)._t(1, 0, Math.tan(ax), 1, 0, 0)._t(mCos, -mSin, mSin, mCos, 0, 0);
    }

    function scale(sx, sy, sz) {
        sz = isNaN(sz) ? 1 : sz;
        if(sx == 1 && sy == 1 && sz == 1){
            return this;
        }
        return this._t(sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, sz, 0, 0, 0, 0, 1);
    }

    function setTransform(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
        this.props[0] = a;
        this.props[1] = b;
        this.props[2] = c;
        this.props[3] = d;
        this.props[4] = e;
        this.props[5] = f;
        this.props[6] = g;
        this.props[7] = h;
        this.props[8] = i;
        this.props[9] = j;
        this.props[10] = k;
        this.props[11] = l;
        this.props[12] = m;
        this.props[13] = n;
        this.props[14] = o;
        this.props[15] = p;
        return this;
    }

    function translate(tx, ty, tz) {
        tz = tz || 0;
        if(tx !== 0 || ty !== 0 || tz !== 0){
            return this._t(1,0,0,0,0,1,0,0,0,0,1,0,tx,ty,tz,1);
        }
        return this;
    }

    function transform(a2, b2, c2, d2, e2, f2, g2, h2, i2, j2, k2, l2, m2, n2, o2, p2) {

        if(a2 === 1 && b2 === 0 && c2 === 0 && d2 === 0 && e2 === 0 && f2 === 1 && g2 === 0 && h2 === 0 && i2 === 0 && j2 === 0 && k2 === 1 && l2 === 0){
            if(m2 !== 0 || n2 !== 0 || o2 !== 0){

                this.props[12] = this.props[12] * a2 + this.props[13] * e2 + this.props[14] * i2 + this.props[15] * m2 ;
                this.props[13] = this.props[12] * b2 + this.props[13] * f2 + this.props[14] * j2 + this.props[15] * n2 ;
                this.props[14] = this.props[12] * c2 + this.props[13] * g2 + this.props[14] * k2 + this.props[15] * o2 ;
                this.props[15] = this.props[12] * d2 + this.props[13] * h2 + this.props[14] * l2 + this.props[15] * p2 ;
            }
            this._identityCalculated = false;
            return this;
        }

        var a1 = this.props[0];
        var b1 = this.props[1];
        var c1 = this.props[2];
        var d1 = this.props[3];
        var e1 = this.props[4];
        var f1 = this.props[5];
        var g1 = this.props[6];
        var h1 = this.props[7];
        var i1 = this.props[8];
        var j1 = this.props[9];
        var k1 = this.props[10];
        var l1 = this.props[11];
        var m1 = this.props[12];
        var n1 = this.props[13];
        var o1 = this.props[14];
        var p1 = this.props[15];

        /* matrix order (canvas compatible):
         * ace
         * bdf
         * 001
         */
        this.props[0] = a1 * a2 + b1 * e2 + c1 * i2 + d1 * m2;
        this.props[1] = a1 * b2 + b1 * f2 + c1 * j2 + d1 * n2 ;
        this.props[2] = a1 * c2 + b1 * g2 + c1 * k2 + d1 * o2 ;
        this.props[3] = a1 * d2 + b1 * h2 + c1 * l2 + d1 * p2 ;

        this.props[4] = e1 * a2 + f1 * e2 + g1 * i2 + h1 * m2 ;
        this.props[5] = e1 * b2 + f1 * f2 + g1 * j2 + h1 * n2 ;
        this.props[6] = e1 * c2 + f1 * g2 + g1 * k2 + h1 * o2 ;
        this.props[7] = e1 * d2 + f1 * h2 + g1 * l2 + h1 * p2 ;

        this.props[8] = i1 * a2 + j1 * e2 + k1 * i2 + l1 * m2 ;
        this.props[9] = i1 * b2 + j1 * f2 + k1 * j2 + l1 * n2 ;
        this.props[10] = i1 * c2 + j1 * g2 + k1 * k2 + l1 * o2 ;
        this.props[11] = i1 * d2 + j1 * h2 + k1 * l2 + l1 * p2 ;

        this.props[12] = m1 * a2 + n1 * e2 + o1 * i2 + p1 * m2 ;
        this.props[13] = m1 * b2 + n1 * f2 + o1 * j2 + p1 * n2 ;
        this.props[14] = m1 * c2 + n1 * g2 + o1 * k2 + p1 * o2 ;
        this.props[15] = m1 * d2 + n1 * h2 + o1 * l2 + p1 * p2 ;

        this._identityCalculated = false;
        return this;
    }

    function isIdentity() {
        if(!this._identityCalculated){
            this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0
                || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0
                || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0
                || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1);
            this._identityCalculated = true;
        }
        return this._identity;
    }

    function clone(matr){
        var i;
        for(i=0;i<16;i+=1){
            matr.props[i] = this.props[i];
        }
    }

    function cloneFromProps(props){
        var i;
        for(i=0;i<16;i+=1){
            this.props[i] = props[i];
        }
    }

    function applyToPoint(x, y, z) {

        return {
            x: x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12],
            y: x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13],
            z: x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14]
        };
        /*return {
         x: x * me.a + y * me.c + me.e,
         y: x * me.b + y * me.d + me.f
         };*/
    }
    function applyToX(x, y, z) {
        return x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12];
    }
    function applyToY(x, y, z) {
        return x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13];
    }
    function applyToZ(x, y, z) {
        return x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14];
    }

    function inversePoint(pt) {
        var determinant = this.props[0] * this.props[5] - this.props[1] * this.props[4];
        var a = this.props[5]/determinant;
        var b = - this.props[1]/determinant;
        var c = - this.props[4]/determinant;
        var d = this.props[0]/determinant;
        var e = (this.props[4] * this.props[13] - this.props[5] * this.props[12])/determinant;
        var f = - (this.props[0] * this.props[13] - this.props[1] * this.props[12])/determinant;
        return [pt[0] * a + pt[1] * c + e, pt[0] * b + pt[1] * d + f, 0];
    }

    function inversePoints(pts){
        var i, len = pts.length, retPts = [];
        for(i=0;i<len;i+=1){
            retPts[i] = inversePoint(pts[i]);
        }
        return retPts;
    }

    function applyToPointArray(x,y,z,dimensions){
        if(dimensions && dimensions === 2) {
            var arr = point_pool.newPoint();
            arr[0] = x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12]; 
            arr[1] = x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13]; 
            return arr;    
        }
        return [x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12],x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13],x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14]];
    }
    function applyToPointStringified(x, y) {
        if(this.isIdentity()) {
            return x + ',' + y;
        }
        return (bm_rnd(x * this.props[0] + y * this.props[4] + this.props[12]))+','+(bm_rnd(x * this.props[1] + y * this.props[5] + this.props[13]));
    }

    function toArray() {
        return [this.props[0],this.props[1],this.props[2],this.props[3],this.props[4],this.props[5],this.props[6],this.props[7],this.props[8],this.props[9],this.props[10],this.props[11],this.props[12],this.props[13],this.props[14],this.props[15]];
    }

    function toCSS() {
        if(isSafari){
            return "matrix3d(" + roundTo2Decimals(this.props[0]) + ',' + roundTo2Decimals(this.props[1]) + ',' + roundTo2Decimals(this.props[2]) + ',' + roundTo2Decimals(this.props[3]) + ',' + roundTo2Decimals(this.props[4]) + ',' + roundTo2Decimals(this.props[5]) + ',' + roundTo2Decimals(this.props[6]) + ',' + roundTo2Decimals(this.props[7]) + ',' + roundTo2Decimals(this.props[8]) + ',' + roundTo2Decimals(this.props[9]) + ',' + roundTo2Decimals(this.props[10]) + ',' + roundTo2Decimals(this.props[11]) + ',' + roundTo2Decimals(this.props[12]) + ',' + roundTo2Decimals(this.props[13]) + ',' + roundTo2Decimals(this.props[14]) + ',' + roundTo2Decimals(this.props[15]) + ')';
        } else {
            this.cssParts[1] = this.props.join(',');
            return this.cssParts.join('');
        }
    }

    function to2dCSS() {
        return "matrix(" + this.props[0] + ',' + this.props[1] + ',' + this.props[4] + ',' + this.props[5] + ',' + this.props[12] + ',' + this.props[13] + ")";
    }

    function toString() {
        return "" + this.toArray();
    }

    return function(){
        this.reset = reset;
        this.rotate = rotate;
        this.rotateX = rotateX;
        this.rotateY = rotateY;
        this.rotateZ = rotateZ;
        this.skew = skew;
        this.skewFromAxis = skewFromAxis;
        this.shear = shear;
        this.scale = scale;
        this.setTransform = setTransform;
        this.translate = translate;
        this.transform = transform;
        this.applyToPoint = applyToPoint;
        this.applyToX = applyToX;
        this.applyToY = applyToY;
        this.applyToZ = applyToZ;
        this.applyToPointArray = applyToPointArray;
        this.applyToPointStringified = applyToPointStringified;
        this.toArray = toArray;
        this.toCSS = toCSS;
        this.to2dCSS = to2dCSS;
        this.toString = toString;
        this.clone = clone;
        this.cloneFromProps = cloneFromProps;
        this.inversePoints = inversePoints;
        this.inversePoint = inversePoint;
        this._t = this.transform;
        this.isIdentity = isIdentity;
        this._identity = true;
        this._identityCalculated = false;

        this.props = [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];

        this.cssParts = ['matrix3d(','',')'];
    }
}());

function Matrix() {


}

/*
 Copyright 2014 David Bau.

 Permission is hereby granted, free of charge, to any person obtaining
 a copy of this software and associated documentation files (the
 "Software"), to deal in the Software without restriction, including
 without limitation the rights to use, copy, modify, merge, publish,
 distribute, sublicense, and/or sell copies of the Software, and to
 permit persons to whom the Software is furnished to do so, subject to
 the following conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 */

(function (pool, math) {
//
// The following constants are related to IEEE 754 limits.
//
    var global = this,
        width = 256,        // each RC4 output is 0 <= x < 256
        chunks = 6,         // at least six RC4 outputs for each double
        digits = 52,        // there are 52 significant digits in a double
        rngname = 'random', // rngname: name for Math.random and Math.seedrandom
        startdenom = math.pow(width, chunks),
        significance = math.pow(2, digits),
        overflow = significance * 2,
        mask = width - 1,
        nodecrypto;         // node.js crypto module, initialized at the bottom.

//
// seedrandom()
// This is the seedrandom function described above.
//
    function seedrandom(seed, options, callback) {
        var key = [];
        options = (options == true) ? { entropy: true } : (options || {});

        // Flatten the seed string or build one from local entropy if needed.
        var shortseed = mixkey(flatten(
            options.entropy ? [seed, tostring(pool)] :
                (seed == null) ? autoseed() : seed, 3), key);

        // Use the seed to initialize an ARC4 generator.
        var arc4 = new ARC4(key);

        // This function returns a random double in [0, 1) that contains
        // randomness in every bit of the mantissa of the IEEE 754 value.
        var prng = function() {
            var n = arc4.g(chunks),             // Start with a numerator n < 2 ^ 48
                d = startdenom,                 //   and denominator d = 2 ^ 48.
                x = 0;                          //   and no 'extra last byte'.
            while (n < significance) {          // Fill up all significant digits by
                n = (n + x) * width;              //   shifting numerator and
                d *= width;                       //   denominator and generating a
                x = arc4.g(1);                    //   new least-significant-byte.
            }
            while (n >= overflow) {             // To avoid rounding up, before adding
                n /= 2;                           //   last byte, shift everything
                d /= 2;                           //   right using integer math until
                x >>>= 1;                         //   we have exactly the desired bits.
            }
            return (n + x) / d;                 // Form the number within [0, 1).
        };

        prng.int32 = function() { return arc4.g(4) | 0; }
        prng.quick = function() { return arc4.g(4) / 0x100000000; }
        prng.double = prng;

        // Mix the randomness into accumulated entropy.
        mixkey(tostring(arc4.S), pool);

        // Calling convention: what to return as a function of prng, seed, is_math.
        return (options.pass || callback ||
        function(prng, seed, is_math_call, state) {
            if (state) {
                // Load the arc4 state from the given state if it has an S array.
                if (state.S) { copy(state, arc4); }
                // Only provide the .state method if requested via options.state.
                prng.state = function() { return copy(arc4, {}); }
            }

            // If called as a method of Math (Math.seedrandom()), mutate
            // Math.random because that is how seedrandom.js has worked since v1.0.
            if (is_math_call) { math[rngname] = prng; return seed; }

            // Otherwise, it is a newer calling convention, so return the
            // prng directly.
            else return prng;
        })(
            prng,
            shortseed,
            'global' in options ? options.global : (this == math),
            options.state);
    }
    math['seed' + rngname] = seedrandom;

//
// ARC4
//
// An ARC4 implementation.  The constructor takes a key in the form of
// an array of at most (width) integers that should be 0 <= x < (width).
//
// The g(count) method returns a pseudorandom integer that concatenates
// the next (count) outputs from ARC4.  Its return value is a number x
// that is in the range 0 <= x < (width ^ count).
//
    function ARC4(key) {
        var t, keylen = key.length,
            me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];

        // The empty key [] is treated as [0].
        if (!keylen) { key = [keylen++]; }

        // Set up S using the standard key scheduling algorithm.
        while (i < width) {
            s[i] = i++;
        }
        for (i = 0; i < width; i++) {
            s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];
            s[j] = t;
        }

        // The "g" method returns the next (count) outputs as one number.
        (me.g = function(count) {
            // Using instance members instead of closure state nearly doubles speed.
            var t, r = 0,
                i = me.i, j = me.j, s = me.S;
            while (count--) {
                t = s[i = mask & (i + 1)];
                r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))];
            }
            me.i = i; me.j = j;
            return r;
            // For robust unpredictability, the function call below automatically
            // discards an initial batch of values.  This is called RC4-drop[256].
            // See http://google.com/search?q=rsa+fluhrer+response&btnI
        })(width);
    }

//
// copy()
// Copies internal state of ARC4 to or from a plain object.
//
    function copy(f, t) {
        t.i = f.i;
        t.j = f.j;
        t.S = f.S.slice();
        return t;
    };

//
// flatten()
// Converts an object tree to nested arrays of strings.
//
    function flatten(obj, depth) {
        var result = [], typ = (typeof obj), prop;
        if (depth && typ == 'object') {
            for (prop in obj) {
                try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
            }
        }
        return (result.length ? result : typ == 'string' ? obj : obj + '\0');
    }

//
// mixkey()
// Mixes a string seed into a key that is an array of integers, and
// returns a shortened string seed that is equivalent to the result key.
//
    function mixkey(seed, key) {
        var stringseed = seed + '', smear, j = 0;
        while (j < stringseed.length) {
            key[mask & j] =
                mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++));
        }
        return tostring(key);
    }

//
// autoseed()
// Returns an object for autoseeding, using window.crypto and Node crypto
// module if available.
//
    function autoseed() {
        try {
            if (nodecrypto) { return tostring(nodecrypto.randomBytes(width)); }
            var out = new Uint8Array(width);
            (global.crypto || global.msCrypto).getRandomValues(out);
            return tostring(out);
        } catch (e) {
            var browser = global.navigator,
                plugins = browser && browser.plugins;
            return [+new Date, global, plugins, global.screen, tostring(pool)];
        }
    }

//
// tostring()
// Converts an array of charcodes to a string
//
    function tostring(a) {
        return String.fromCharCode.apply(0, a);
    }

//
// When seedrandom.js is loaded, we immediately mix a few bits
// from the built-in RNG into the entropy pool.  Because we do
// not want to interfere with deterministic PRNG state later,
// seedrandom will not call math.random on its own again after
// initialization.
//
    mixkey(math.random(), pool);

//
// Nodejs and AMD support: export the implementation as a module using
// either convention.
//

// End anonymous scope, and pass initial values.
})(
    [],     // pool: entropy pool starts empty
    BMMath    // math: package containing random, pow, and seedrandom
);
var BezierFactory = (function(){
    /**
     * BezierEasing - use bezier curve for transition easing function
     * by Gaëtan Renaudeau 2014 - 2015 – MIT License
     *
     * Credits: is based on Firefox's nsSMILKeySpline.cpp
     * Usage:
     * var spline = BezierEasing([ 0.25, 0.1, 0.25, 1.0 ])
     * spline.get(x) => returns the easing value | x must be in [0, 1] range
     *
     */

        var ob = {};
    ob.getBezierEasing = getBezierEasing;
    var beziers = {};

    function getBezierEasing(a,b,c,d,nm){
        var str = nm || ('bez_' + a+'_'+b+'_'+c+'_'+d).replace(/\./g, 'p');
        if(beziers[str]){
            return beziers[str];
        }
        var bezEasing = new BezierEasing([a,b,c,d]);
        beziers[str] = bezEasing;
        return bezEasing;
    }

// These values are established by empiricism with tests (tradeoff: performance VS precision)
    var NEWTON_ITERATIONS = 4;
    var NEWTON_MIN_SLOPE = 0.001;
    var SUBDIVISION_PRECISION = 0.0000001;
    var SUBDIVISION_MAX_ITERATIONS = 10;

    var kSplineTableSize = 11;
    var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

    var float32ArraySupported = typeof Float32Array === "function";

    function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
    function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
    function C (aA1)      { return 3.0 * aA1; }

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
    function calcBezier (aT, aA1, aA2) {
        return ((A(aA1, aA2)*aT + B(aA1, aA2))*aT + C(aA1))*aT;
    }

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
    function getSlope (aT, aA1, aA2) {
        return 3.0 * A(aA1, aA2)*aT*aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
    }

    function binarySubdivide (aX, aA, aB, mX1, mX2) {
        var currentX, currentT, i = 0;
        do {
            currentT = aA + (aB - aA) / 2.0;
            currentX = calcBezier(currentT, mX1, mX2) - aX;
            if (currentX > 0.0) {
                aB = currentT;
            } else {
                aA = currentT;
            }
        } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
        return currentT;
    }

    function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
        for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
            var currentSlope = getSlope(aGuessT, mX1, mX2);
            if (currentSlope === 0.0) return aGuessT;
            var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
            aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
    }

    /**
     * points is an array of [ mX1, mY1, mX2, mY2 ]
     */
    function BezierEasing (points) {
        this._p = points;
        this._mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
        this._precomputed = false;

        this.get = this.get.bind(this);
    }

    BezierEasing.prototype = {

        get: function (x) {
            var mX1 = this._p[0],
                mY1 = this._p[1],
                mX2 = this._p[2],
                mY2 = this._p[3];
            if (!this._precomputed) this._precompute();
            if (mX1 === mY1 && mX2 === mY2) return x; // linear
            // Because JavaScript number are imprecise, we should guarantee the extremes are right.
            if (x === 0) return 0;
            if (x === 1) return 1;
            return calcBezier(this._getTForX(x), mY1, mY2);
        },

        // Private part

        _precompute: function () {
            var mX1 = this._p[0],
                mY1 = this._p[1],
                mX2 = this._p[2],
                mY2 = this._p[3];
            this._precomputed = true;
            if (mX1 !== mY1 || mX2 !== mY2)
                this._calcSampleValues();
        },

        _calcSampleValues: function () {
            var mX1 = this._p[0],
                mX2 = this._p[2];
            for (var i = 0; i < kSplineTableSize; ++i) {
                this._mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
            }
        },

        /**
         * getTForX chose the fastest heuristic to determine the percentage value precisely from a given X projection.
         */
        _getTForX: function (aX) {
            var mX1 = this._p[0],
                mX2 = this._p[2],
                mSampleValues = this._mSampleValues;

            var intervalStart = 0.0;
            var currentSample = 1;
            var lastSample = kSplineTableSize - 1;

            for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
                intervalStart += kSampleStepSize;
            }
            --currentSample;

            // Interpolate to provide an initial guess for t
            var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample+1] - mSampleValues[currentSample]);
            var guessForT = intervalStart + dist * kSampleStepSize;

            var initialSlope = getSlope(guessForT, mX1, mX2);
            if (initialSlope >= NEWTON_MIN_SLOPE) {
                return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
            } else if (initialSlope === 0.0) {
                return guessForT;
            } else {
                return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
            }
        }
    };

    return ob;

}())


function matrixManagerFunction(){

    var mat = new Matrix();

    var returnMatrix2D = function(rX, scaleX, scaleY, tX, tY){
        return mat.reset().translate(tX,tY).rotate(rX).scale(scaleX,scaleY).toCSS();
    };

    var getMatrix = function(animData){
        return returnMatrix2D(animData.tr.r[2],animData.tr.s[0],animData.tr.s[1],animData.tr.p[0],animData.tr.p[1]);
    };

    return {
        getMatrix : getMatrix
    };

}
var MatrixManager = matrixManagerFunction;
(function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if(!window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () {
                    callback(currTime + timeToCall);
                },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    if(!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
}());
function createElement(parent,child,params){
    if(child){
        child.prototype = Object.create(parent.prototype);
        child.prototype.constructor = child;
        child.prototype._parent = parent.prototype;
    }else{
        var instance = Object.create(parent.prototype,params);
        var getType = {};
        if(instance && getType.toString.call(instance.init) === '[object Function]'){
            instance.init();
        }
        return instance;
    }
}

function extendPrototype(source,destination){
    for (var attr in source.prototype) {
        if (source.prototype.hasOwnProperty(attr)) destination.prototype[attr] = source.prototype[attr];
    }
}
function bezFunction(){

    var easingFunctions = [];
    var math = Math;

    function pointOnLine2D(x1,y1, x2,y2, x3,y3){
        var det1 = (x1*y2) + (y1*x3) + (x2*y3) - (x3*y2) - (y3*x1) - (x2*y1);
        return det1 > -0.0001 && det1 < 0.0001;
    }

    function pointOnLine3D(x1,y1,z1, x2,y2,z2, x3,y3,z3){
        if(z1 === 0 && z2 === 0 && z3 === 0) {
            return pointOnLine2D(x1,y1, x2,y2, x3,y3);
        }
        var dist1 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2));
        var dist2 = Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2) + Math.pow(z3 - z1, 2));
        var dist3 = Math.sqrt(Math.pow(x3 - x2, 2) + Math.pow(y3 - y2, 2) + Math.pow(z3 - z2, 2));
        var diffDist;
        if(dist1 > dist2){
            if(dist1 > dist3){
                diffDist = dist1 - dist2 - dist3;
            } else {
                diffDist = dist3 - dist2 - dist1;
            }
        } else if(dist3 > dist2){
            diffDist = dist3 - dist2 - dist1;
        } else {
            diffDist = dist2 - dist1 - dist3;
        }
        return diffDist > -0.0001 && diffDist < 0.0001;
    }

    /*function getEasingCurve(aa,bb,cc,dd,encodedFuncName) {
        if(!encodedFuncName){
            encodedFuncName = ('bez_' + aa+'_'+bb+'_'+cc+'_'+dd).replace(/\./g, 'p');
        }
        if(easingFunctions[encodedFuncName]){
            return easingFunctions[encodedFuncName];
        }
        var A0, B0, C0;
        var A1, B1, C1;
        easingFunctions[encodedFuncName] = function(tt) {
            var x = tt;
            var i = 0, z;
            while (++i < 20) {
                C0 = 3 * aa;
                B0 = 3 * (cc - aa) - C0;
                A0 = 1 - C0 - B0;
                z = (x * (C0 + x * (B0 + x * A0))) - tt;
                if (bm_abs(z) < 1e-3) break;
                x -= z / (C0 + x * (2 * B0 + 3 * A0 * x));
            }
            C1 = 3 * bb;
            B1 = 3 * (dd - bb) - C1;
            A1 = 1 - C1 - B1;
            var polyB = x * (C1 + x * (B1 + x * A1));
            //return c * polyB + b;
            return polyB;
        };
        return easingFunctions[encodedFuncName];
    }*/
    var getBezierLength = (function(){

        function Segment(l,p){
            this.l = l;
            this.p = p;
        }

        return function(pt1,pt2,pt3,pt4){
            var curveSegments = defaultCurveSegments;
            var k;
            var i, len;
            var ptCoord,perc,addedLength = 0;
            var ptDistance;
            var point = [],lastPoint = [];
            var lengthData = {
                addedLength: 0,
                segments: []
            };
            len = pt3.length;
            for(k=0;k<curveSegments;k+=1){
                perc = k/(curveSegments-1);
                ptDistance = 0;
                for(i=0;i<len;i+=1){
                    ptCoord = bm_pow(1-perc,3)*pt1[i]+3*bm_pow(1-perc,2)*perc*pt3[i]+3*(1-perc)*bm_pow(perc,2)*pt4[i]+bm_pow(perc,3)*pt2[i];
                    point[i] = ptCoord;
                    if(lastPoint[i] !== null){
                        ptDistance += bm_pow(point[i] - lastPoint[i],2);
                    }
                    lastPoint[i] = point[i];
                }
                if(ptDistance){
                    ptDistance = bm_sqrt(ptDistance);
                    addedLength += ptDistance;
                }
                lengthData.segments.push(new Segment(addedLength,perc));
            }
            lengthData.addedLength = addedLength;
            return lengthData;
        };
    }());

    function BezierData(length){
        this.segmentLength = 0;
        this.points = new Array(length);
    }

    function PointData(partial,point){
        this.partialLength = partial;
        this.point = point;
    }

    var buildBezierData = (function(){

        var storedData = {};

        return function (keyData){
            var pt1 = keyData.s;
            var pt2 = keyData.e;
            var pt3 = keyData.to;
            var pt4 = keyData.ti;
            var bezierName = (pt1.join('_')+'_'+pt2.join('_')+'_'+pt3.join('_')+'_'+pt4.join('_')).replace(/\./g, 'p');
            if(storedData[bezierName]){
                keyData.bezierData = storedData[bezierName];
                return;
            }
        var curveSegments = defaultCurveSegments;
        var k, i, len;
            var ptCoord,perc,addedLength = 0;
            var ptDistance;
            var point,lastPoint = null;
            if(pt1.length === 2 && (pt1[0] != pt2[0] || pt1[1] != pt2[1]) && pointOnLine2D(pt1[0],pt1[1],pt2[0],pt2[1],pt1[0]+pt3[0],pt1[1]+pt3[1]) && pointOnLine2D(pt1[0],pt1[1],pt2[0],pt2[1],pt2[0]+pt4[0],pt2[1]+pt4[1])){
                curveSegments = 2;
            }
            var bezierData = new BezierData(curveSegments);
            len = pt3.length;
            for(k=0;k<curveSegments;k+=1){
            point = new Array(len);
                perc = k/(curveSegments-1);
                ptDistance = 0;
                for(i=0;i<len;i+=1){
                ptCoord = bm_pow(1-perc,3)*pt1[i]+3*bm_pow(1-perc,2)*perc*(pt1[i] + pt3[i])+3*(1-perc)*bm_pow(perc,2)*(pt2[i] + pt4[i])+bm_pow(perc,3)*pt2[i];
                point[i] = ptCoord;
                    if(lastPoint !== null){
                    ptDistance += bm_pow(point[i] - lastPoint[i],2);
                    }
                }
            ptDistance = bm_sqrt(ptDistance);
                addedLength += ptDistance;
                bezierData.points[k] = new PointData(ptDistance,point);
                lastPoint = point;
            }
            bezierData.segmentLength = addedLength;
            keyData.bezierData = bezierData;
            storedData[bezierName] = bezierData;

        }
    }());

    function getDistancePerc(perc,bezierData){
        var segments = bezierData.segments;
        var len = segments.length;
        var initPos = bm_floor((len-1)*perc);
        var lengthPos = perc*bezierData.addedLength;
        var lPerc = 0;
        if(lengthPos == segments[initPos].l){
            return segments[initPos].p;
        }else{
            var dir = segments[initPos].l > lengthPos ? -1 : 1;
            var flag = true;
            while(flag){
                if(segments[initPos].l <= lengthPos && segments[initPos+1].l > lengthPos){
                    lPerc = (lengthPos - segments[initPos].l)/(segments[initPos+1].l-segments[initPos].l);
                    flag = false;
                }else{
                    initPos += dir;
                }
                if(initPos < 0 || initPos >= len - 1){
                    flag = false;
                }
            }
            return segments[initPos].p + (segments[initPos+1].p - segments[initPos].p)*lPerc;
        }
    }

    function SegmentPoints(){
        this.pt1 = new Array(2);
        this.pt2 = new Array(2);
        this.pt3 = new Array(2);
        this.pt4 = new Array(2);
    }

    function getNewSegment(pt1,pt2,pt3,pt4,startPerc,endPerc, bezierData){

        var pts = new SegmentPoints();
        startPerc = startPerc < 0 ? 0 : startPerc > 1 ? 1 : startPerc;
        var t0 = getDistancePerc(startPerc,bezierData);
        endPerc = endPerc > 1 ? 1 : endPerc;
        var t1 = getDistancePerc(endPerc,bezierData);
        var i, len = pt1.length;
        var u0 = 1 - t0;
        var u1 = 1 - t1;
        //Math.round(num * 100) / 100
        for(i=0;i<len;i+=1){
            pts.pt1[i] =  Math.round((u0*u0*u0* pt1[i] + (t0*u0*u0 + u0*t0*u0 + u0*u0*t0) * pt3[i] + (t0*t0*u0 + u0*t0*t0 + t0*u0*t0)* pt4[i] + t0*t0*t0* pt2[i])* 1000) / 1000;
            pts.pt3[i] = Math.round((u0*u0*u1*pt1[i] + (t0*u0*u1 + u0*t0*u1 + u0*u0*t1)* pt3[i] + (t0*t0*u1 + u0*t0*t1 + t0*u0*t1)* pt4[i] + t0*t0*t1* pt2[i])* 1000) / 1000;
            pts.pt4[i] = Math.round((u0*u1*u1* pt1[i] + (t0*u1*u1 + u0*t1*u1 + u0*u1*t1)* pt3[i] + (t0*t1*u1 + u0*t1*t1 + t0*u1*t1)* pt4[i] + t0*t1*t1* pt2[i])* 1000) / 1000;
            pts.pt2[i] = Math.round((u1*u1*u1* pt1[i] + (t1*u1*u1 + u1*t1*u1 + u1*u1*t1)* pt3[i] + (t1*t1*u1 + u1*t1*t1 + t1*u1*t1)*pt4[i] + t1*t1*t1* pt2[i])* 1000) / 1000;
        }
        return pts;
    }

    return {
        //getEasingCurve : getEasingCurve,
        getBezierLength : getBezierLength,
        getNewSegment : getNewSegment,
        buildBezierData : buildBezierData,
        pointOnLine2D : pointOnLine2D,
        pointOnLine3D : pointOnLine3D
    };
}

var bez = bezFunction();
function dataFunctionManager(){

    //var tCanvasHelper = document.createElement('canvas').getContext('2d');

    function completeLayers(layers, comps, fontManager){
        var layerData;
        var animArray, lastFrame;
        var i, len = layers.length;
        var j, jLen, k, kLen;
        for(i=0;i<len;i+=1){
            layerData = layers[i];
            if(!('ks' in layerData) || layerData.completed){
                continue;
            }
            layerData.completed = true;
            if(layerData.tt){
                layers[i-1].td = layerData.tt;
            }
            animArray = [];
            lastFrame = -1;
            if(layerData.hasMask){
                var maskProps = layerData.masksProperties;
                jLen = maskProps.length;
                for(j=0;j<jLen;j+=1){
                    if(maskProps[j].pt.k.i){
                        convertPathsToAbsoluteValues(maskProps[j].pt.k);
                    }else{
                        kLen = maskProps[j].pt.k.length;
                        for(k=0;k<kLen;k+=1){
                            if(maskProps[j].pt.k[k].s){
                                convertPathsToAbsoluteValues(maskProps[j].pt.k[k].s[0]);
                            }
                            if(maskProps[j].pt.k[k].e){
                                convertPathsToAbsoluteValues(maskProps[j].pt.k[k].e[0]);
                            }
                        }
                    }
                }
            }
            if(layerData.ty===0){
                layerData.layers = findCompLayers(layerData.refId, comps);
                completeLayers(layerData.layers,comps, fontManager);
            }else if(layerData.ty === 4){
                completeShapes(layerData.shapes);
            }else if(layerData.ty == 5){
                completeText(layerData, fontManager);
            }
        }
    }

    function findCompLayers(id,comps){
        var i = 0, len = comps.length;
        while(i<len){
            if(comps[i].id === id){
                if(!comps[i].layers.__used) {
                    comps[i].layers.__used = true;
                    return comps[i].layers;
                }
                return JSON.parse(JSON.stringify(comps[i].layers));
            }
            i += 1;
        }
    }

    function completeShapes(arr){
        var i, len = arr.length;
        var j, jLen;
        var hasPaths = false;
        for(i=len-1;i>=0;i-=1){
            if(arr[i].ty == 'sh'){
                if(arr[i].ks.k.i){
                    convertPathsToAbsoluteValues(arr[i].ks.k);
                }else{
                    jLen = arr[i].ks.k.length;
                    for(j=0;j<jLen;j+=1){
                        if(arr[i].ks.k[j].s){
                            convertPathsToAbsoluteValues(arr[i].ks.k[j].s[0]);
                        }
                        if(arr[i].ks.k[j].e){
                            convertPathsToAbsoluteValues(arr[i].ks.k[j].e[0]);
                        }
                    }
                }
                hasPaths = true;
            }else if(arr[i].ty == 'gr'){
                completeShapes(arr[i].it);
            }
        }
        /*if(hasPaths){
            //mx: distance
            //ss: sensitivity
            //dc: decay
            arr.splice(arr.length-1,0,{
                "ty": "ms",
                "mx":20,
                "ss":10,
                 "dc":0.001,
                "maxDist":200
            });
        }*/
    }

    function convertPathsToAbsoluteValues(path){
        var i, len = path.i.length;
        for(i=0;i<len;i+=1){
            path.i[i][0] += path.v[i][0];
            path.i[i][1] += path.v[i][1];
            path.o[i][0] += path.v[i][0];
            path.o[i][1] += path.v[i][1];
        }
    }

    function checkVersion(minimum,animVersionString){
        var animVersion = animVersionString ? animVersionString.split('.') : [100,100,100];
        if(minimum[0]>animVersion[0]){
            return true;
        } else if(animVersion[0] > minimum[0]){
            return false;
        }
        if(minimum[1]>animVersion[1]){
            return true;
        } else if(animVersion[1] > minimum[1]){
            return false;
        }
        if(minimum[2]>animVersion[2]){
            return true;
        } else if(animVersion[2] > minimum[2]){
            return false;
        }
    }

    var checkText = (function(){
        var minimumVersion = [4,4,14];

        function updateTextLayer(textLayer){
            var documentData = textLayer.t.d;
            textLayer.t.d = {
                k: [
                    {
                        s:documentData,
                        t:0
                    }
                ]
            }
        }

        function iterateLayers(layers){
            var i, len = layers.length;
            for(i=0;i<len;i+=1){
                if(layers[i].ty === 5){
                    updateTextLayer(layers[i]);
                }
            }
        }

        return function (animationData){
            if(checkVersion(minimumVersion,animationData.v)){
                iterateLayers(animationData.layers);
                if(animationData.assets){
                    var i, len = animationData.assets.length;
                    for(i=0;i<len;i+=1){
                        if(animationData.assets[i].layers){
                            iterateLayers(animationData.assets[i].layers);

                        }
                    }
                }
            }
        }
    }())

    var checkChars = (function() {
        var minimumVersion = [4,7,99];
        return function (animationData){
            if(animationData.chars && !checkVersion(minimumVersion,animationData.v)){
                var i, len = animationData.chars.length, j, jLen, k, kLen;
                var pathData, paths;
                for(i = 0; i < len; i += 1) {
                    if(animationData.chars[i].data && animationData.chars[i].data.shapes) {
                        paths = animationData.chars[i].data.shapes[0].it;
                        jLen = paths.length;

                        for(j = 0; j < jLen; j += 1) {
                            pathData = paths[j].ks.k;
                            convertPathsToAbsoluteValues(paths[j].ks.k);
                        }
                    }
                }
            }
        }

    }())

    var checkColors = (function(){
        var minimumVersion = [4,1,9];

        function iterateShapes(shapes){
            var i, len = shapes.length;
            var j, jLen;
            for(i=0;i<len;i+=1){
                if(shapes[i].ty === 'gr'){
                    iterateShapes(shapes[i].it);
                }else if(shapes[i].ty === 'fl' || shapes[i].ty === 'st'){
                    if(shapes[i].c.k && shapes[i].c.k[0].i){
                        jLen = shapes[i].c.k.length;
                        for(j=0;j<jLen;j+=1){
                            if(shapes[i].c.k[j].s){
                                shapes[i].c.k[j].s[0] /= 255;
                                shapes[i].c.k[j].s[1] /= 255;
                                shapes[i].c.k[j].s[2] /= 255;
                                shapes[i].c.k[j].s[3] /= 255;
                            }
                            if(shapes[i].c.k[j].e){
                                shapes[i].c.k[j].e[0] /= 255;
                                shapes[i].c.k[j].e[1] /= 255;
                                shapes[i].c.k[j].e[2] /= 255;
                                shapes[i].c.k[j].e[3] /= 255;
                            }
                        }
                    } else {
                        shapes[i].c.k[0] /= 255;
                        shapes[i].c.k[1] /= 255;
                        shapes[i].c.k[2] /= 255;
                        shapes[i].c.k[3] /= 255;
                    }
                }
            }
        }

        function iterateLayers(layers){
            var i, len = layers.length;
            for(i=0;i<len;i+=1){
                if(layers[i].ty === 4){
                    iterateShapes(layers[i].shapes);
                }
            }
        }

        return function (animationData){
            if(checkVersion(minimumVersion,animationData.v)){
                iterateLayers(animationData.layers);
                if(animationData.assets){
                    var i, len = animationData.assets.length;
                    for(i=0;i<len;i+=1){
                        if(animationData.assets[i].layers){
                            iterateLayers(animationData.assets[i].layers);

                        }
                    }
                }
            }
        }
    }());

    var checkShapes = (function(){
        var minimumVersion = [4,4,18];



        function completeShapes(arr){
            var i, len = arr.length;
            var j, jLen;
            var hasPaths = false;
            for(i=len-1;i>=0;i-=1){
                if(arr[i].ty == 'sh'){
                    if(arr[i].ks.k.i){
                        arr[i].ks.k.c = arr[i].closed;
                    }else{
                        jLen = arr[i].ks.k.length;
                        for(j=0;j<jLen;j+=1){
                            if(arr[i].ks.k[j].s){
                                arr[i].ks.k[j].s[0].c = arr[i].closed;
                            }
                            if(arr[i].ks.k[j].e){
                                arr[i].ks.k[j].e[0].c = arr[i].closed;
                            }
                        }
                    }
                    hasPaths = true;
                }else if(arr[i].ty == 'gr'){
                    completeShapes(arr[i].it);
                }
            }
        }

        function iterateLayers(layers){
            var layerData;
            var i, len = layers.length;
            var j, jLen, k, kLen;
            for(i=0;i<len;i+=1){
                layerData = layers[i];
                if(layerData.hasMask){
                    var maskProps = layerData.masksProperties;
                    jLen = maskProps.length;
                    for(j=0;j<jLen;j+=1){
                        if(maskProps[j].pt.k.i){
                            maskProps[j].pt.k.c = maskProps[j].cl;
                        }else{
                            kLen = maskProps[j].pt.k.length;
                            for(k=0;k<kLen;k+=1){
                                if(maskProps[j].pt.k[k].s){
                                    maskProps[j].pt.k[k].s[0].c = maskProps[j].cl;
                                }
                                if(maskProps[j].pt.k[k].e){
                                    maskProps[j].pt.k[k].e[0].c = maskProps[j].cl;
                                }
                            }
                        }
                    }
                }
                if(layerData.ty === 4){
                    completeShapes(layerData.shapes);
                }
            }
        }

        return function (animationData){
            if(checkVersion(minimumVersion,animationData.v)){
                iterateLayers(animationData.layers);
                if(animationData.assets){
                    var i, len = animationData.assets.length;
                    for(i=0;i<len;i+=1){
                        if(animationData.assets[i].layers){
                            iterateLayers(animationData.assets[i].layers);

                        }
                    }
                }
            }
        }
    }());

    /*function blitPaths(path){
        var i, len = path.i.length;
        for(i=0;i<len;i+=1){
            path.i[i][0] /= blitter;
            path.i[i][1] /= blitter;
            path.o[i][0] /= blitter;
            path.o[i][1] /= blitter;
            path.v[i][0] /= blitter;
            path.v[i][1] /= blitter;
        }
    }

    function blitShapes(arr){
        var i, len = arr.length;
        var j, jLen;
        var hasPaths = false;
        for(i=len-1;i>=0;i-=1){
            if(arr[i].ty == 'sh'){
                if(arr[i].ks.k.i){
                    blitPaths(arr[i].ks.k);
                }else{
                    jLen = arr[i].ks.k.length;
                    for(j=0;j<jLen;j+=1){
                        if(arr[i].ks.k[j].s){
                            blitPaths(arr[i].ks.k[j].s[0]);
                        }
                        if(arr[i].ks.k[j].e){
                            blitPaths(arr[i].ks.k[j].e[0]);
                        }
                    }
                }
                hasPaths = true;
            }else if(arr[i].ty == 'gr'){
                blitShapes(arr[i].it);
            }else if(arr[i].ty == 'rc'){
                blitProperty(arr[i].p);
                blitProperty(arr[i].s);
            }else if(arr[i].ty == 'st'){
                blitProperty(arr[i].w);
            }else if(arr[i].ty == 'tr'){
                blitProperty(arr[i].p);
                blitProperty(arr[i].sk);
                blitProperty(arr[i].a);
            }else if(arr[i].ty == 'el'){
                blitProperty(arr[i].p);
                blitProperty(arr[i].s);
            }else if(arr[i].ty == 'rd'){
                blitProperty(arr[i].r);
            }else{

                //console.log(arr[i].ty );
            }
        }
    }

    function blitText(data, fontManager){

    }

    function blitValue(val){
        if(typeof(val) === 'number'){
            val /= blitter;
        } else {
            var i = val.length-1;
            while(i>=0){
                val[i] /= blitter;
                i-=1;
            }
        }
        return val;
    }

    function blitProperty(data){
        if(!data.k.length){
            data.k = blitValue(data.k);
        }else if(typeof(data.k[0]) === 'number'){
            data.k = blitValue(data.k);
        } else {
            var i, len = data.k.length;
            for(i=0;i<len;i+=1){
                if(data.k[i].s){
                    //console.log('pre S: ', data.k[i].s);
                    data.k[i].s = blitValue(data.k[i].s);
                    //console.log('post S: ', data.k[i].s);
                }
                if(data.k[i].e){
                    //console.log('pre E: ', data.k[i].e);
                    data.k[i].e = blitValue(data.k[i].e);
                    //console.log('post E: ', data.k[i].e);
                }
            }
        }
    }

    function blitLayers(layers,comps, fontManager){
        var layerData;
        var animArray, lastFrame;
        var i, len = layers.length;
        var j, jLen, k, kLen;
        for(i=0;i<len;i+=1){
            layerData = layers[i];
            if(!('ks' in layerData)){
                continue;
            }
            blitProperty(layerData.ks.a);
            blitProperty(layerData.ks.p);
            layerData.completed = true;
            if(layerData.tt){
                layers[i-1].td = layerData.tt;
            }
            animArray = [];
            lastFrame = -1;
            if(layerData.hasMask){
                var maskProps = layerData.masksProperties;
                jLen = maskProps.length;
                for(j=0;j<jLen;j+=1){
                    if(maskProps[j].pt.k.i){
                        blitPaths(maskProps[j].pt.k);
                    }else{
                        kLen = maskProps[j].pt.k.length;
                        for(k=0;k<kLen;k+=1){
                            if(maskProps[j].pt.k[k].s){
                                blitPaths(maskProps[j].pt.k[k].s[0]);
                            }
                            if(maskProps[j].pt.k[k].e){
                                blitPaths(maskProps[j].pt.k[k].e[0]);
                            }
                        }
                    }
                }
            }
            if(layerData.ty===0){
                layerData.w = Math.round(layerData.w/blitter);
                layerData.h = Math.round(layerData.h/blitter);
                blitLayers(layerData.layers,comps, fontManager);
            }else if(layerData.ty === 4){
                blitShapes(layerData.shapes);
            }else if(layerData.ty == 5){
                blitText(layerData, fontManager);
            }else if(layerData.ty == 1){
                layerData.sh /= blitter;
                layerData.sw /= blitter;
            } else {
            }
        }
    }

    function blitAnimation(animationData,comps, fontManager){
        blitLayers(animationData.layers,comps, fontManager);
    }*/

    function completeData(animationData, fontManager){
        if(animationData.__complete){
            return;
        }
        checkColors(animationData);
        checkText(animationData);
        checkChars(animationData);
        checkShapes(animationData);
        completeLayers(animationData.layers, animationData.assets, fontManager);
        animationData.__complete = true;
        //blitAnimation(animationData, animationData.assets, fontManager);
    }

    function completeText(data, fontManager){
        var letters;
        var keys = data.t.d.k;
        var k, kLen = keys.length;
        for(k=0;k<kLen;k+=1){
            var documentData = data.t.d.k[k].s;
            letters = [];
            var i, len;
            var newLineFlag, index = 0, val;
            var anchorGrouping = data.t.m.g;
            var currentSize = 0, currentPos = 0, currentLine = 0, lineWidths = [];
            var lineWidth = 0;
            var maxLineWidth = 0;
            var j, jLen;
            var fontData = fontManager.getFontByName(documentData.f);
            var charData, cLength = 0;
            var styles = fontData.fStyle.split(' ');

            var fWeight = 'normal', fStyle = 'normal';
            len = styles.length;
            for(i=0;i<len;i+=1){
                if (styles[i].toLowerCase() === 'italic') {
                    fStyle = 'italic';
                }else if (styles[i].toLowerCase() === 'bold') {
                    fWeight = '700';
                } else if (styles[i].toLowerCase() === 'black') {
                    fWeight = '900';
                } else if (styles[i].toLowerCase() === 'medium') {
                    fWeight = '500';
                } else if (styles[i].toLowerCase() === 'regular' || styles[i].toLowerCase() === 'normal') {
                    fWeight = '400';
                } else if (styles[i].toLowerCase() === 'light' || styles[i].toLowerCase() === 'thin') {
                    fWeight = '200';
                }
            }
            documentData.fWeight = fWeight;
            documentData.fStyle = fStyle;
            len = documentData.t.length;
            if(documentData.sz){
                var boxWidth = documentData.sz[0];
                var lastSpaceIndex = -1;
                for(i=0;i<len;i+=1){
                    newLineFlag = false;
                    if(documentData.t.charAt(i) === ' '){
                        lastSpaceIndex = i;
                    }else if(documentData.t.charCodeAt(i) === 13){
                        lineWidth = 0;
                        newLineFlag = true;
                    }
                    if(fontManager.chars){
                        charData = fontManager.getCharData(documentData.t.charAt(i), fontData.fStyle, fontData.fFamily);
                        cLength = newLineFlag ? 0 : charData.w*documentData.s/100;
                    }else{
                        //tCanvasHelper.font = documentData.s + 'px '+ fontData.fFamily;
                        cLength = fontManager.measureText(documentData.t.charAt(i), documentData.f, documentData.s);
                    }
                    if(lineWidth + cLength > boxWidth){
                        if(lastSpaceIndex === -1){
                            //i -= 1;
                            documentData.t = documentData.t.substr(0,i) + "\r" + documentData.t.substr(i);
                            len += 1;
                        } else {
                            i = lastSpaceIndex;
                            documentData.t = documentData.t.substr(0,i) + "\r" + documentData.t.substr(i+1);
                        }
                        lastSpaceIndex = -1;
                        lineWidth = 0;
                    }else {
                        lineWidth += cLength;
                    }
                }
                len = documentData.t.length;
            }
            var trackingOffset = documentData.tr/1000*documentData.s;
            lineWidth = - trackingOffset;
            cLength = 0;
            for (i = 0;i < len ;i += 1) {
                newLineFlag = false;
                if(documentData.t.charAt(i) === ' '){
                    val = '\u00A0';
                }else if(documentData.t.charCodeAt(i) === 13){
                    lineWidths.push(lineWidth);
                    maxLineWidth = lineWidth > maxLineWidth ? lineWidth : maxLineWidth;
                    lineWidth = - 2 * trackingOffset;
                    val = '';
                    newLineFlag = true;
                    currentLine += 1;
                }else{
                    val = documentData.t.charAt(i);
                }
                if(fontManager.chars){
                    charData = fontManager.getCharData(documentData.t.charAt(i), fontData.fStyle, fontManager.getFontByName(documentData.f).fFamily);
                    cLength = newLineFlag ? 0 : charData.w*documentData.s/100;
                }else{
                    //var charWidth = fontManager.measureText(val, documentData.f, documentData.s);
                    //tCanvasHelper.font = documentData.s + 'px '+ fontManager.getFontByName(documentData.f).fFamily;
                    cLength = fontManager.measureText(val, documentData.f, documentData.s);
                }

                //
                lineWidth += cLength + trackingOffset;
                letters.push({l:cLength,an:cLength,add:currentSize,n:newLineFlag, anIndexes:[], val: val, line: currentLine});
                if(anchorGrouping == 2){
                    currentSize += cLength;
                    if(val == '' || val == '\u00A0' || i == len - 1){
                        if(val == '' || val == '\u00A0'){
                            currentSize -= cLength;
                        }
                        while(currentPos<=i){
                            letters[currentPos].an = currentSize;
                            letters[currentPos].ind = index;
                            letters[currentPos].extra = cLength;
                            currentPos += 1;
                        }
                        index += 1;
                        currentSize = 0;
                    }
                }else if(anchorGrouping == 3){
                    currentSize += cLength;
                    if(val == '' || i == len - 1){
                        if(val == ''){
                            currentSize -= cLength;
                        }
                        while(currentPos<=i){
                            letters[currentPos].an = currentSize;
                            letters[currentPos].ind = index;
                            letters[currentPos].extra = cLength;
                            currentPos += 1;
                        }
                        currentSize = 0;
                        index += 1;
                    }
                }else{
                    letters[index].ind = index;
                    letters[index].extra = 0;
                    index += 1;
                }
            }
            documentData.l = letters;
            maxLineWidth = lineWidth > maxLineWidth ? lineWidth : maxLineWidth;
            lineWidths.push(lineWidth);
            if(documentData.sz){
                documentData.boxWidth = documentData.sz[0];
                documentData.justifyOffset = 0;
            }else{
                documentData.boxWidth = maxLineWidth;
                switch(documentData.j){
                    case 1:
                        documentData.justifyOffset = - documentData.boxWidth;
                        break;
                    case 2:
                        documentData.justifyOffset = - documentData.boxWidth/2;
                        break;
                    default:
                        documentData.justifyOffset = 0;
                }
            }
            documentData.lineWidths = lineWidths;

            var animators = data.t.a;
            jLen = animators.length;
            var based, ind, indexes = [];
            for(j=0;j<jLen;j+=1){
                if(animators[j].a.sc){
                    documentData.strokeColorAnim = true;
                }
                if(animators[j].a.sw){
                    documentData.strokeWidthAnim = true;
                }
                if(animators[j].a.fc || animators[j].a.fh || animators[j].a.fs || animators[j].a.fb){
                    documentData.fillColorAnim = true;
                }
                ind = 0;
                based = animators[j].s.b;
                for(i=0;i<len;i+=1){
                    letters[i].anIndexes[j] = ind;
                    if((based == 1 && letters[i].val != '') || (based == 2 && letters[i].val != '' && letters[i].val != '\u00A0') || (based == 3 && (letters[i].n || letters[i].val == '\u00A0' || i == len - 1)) || (based == 4 && (letters[i].n || i == len - 1))){
                        if(animators[j].s.rn === 1){
                            indexes.push(ind);
                        }
                        ind += 1;
                    }
                }
                data.t.a[j].s.totalChars = ind;
                var currentInd = -1, newInd;
                if(animators[j].s.rn === 1){
                    for(i = 0; i < len; i += 1){
                        if(currentInd != letters[i].anIndexes[j]){
                            currentInd = letters[i].anIndexes[j];
                            newInd = indexes.splice(Math.floor(Math.random()*indexes.length),1)[0];
                        }
                        letters[i].anIndexes[j] = newInd;
                    }
                }
            }
            if(jLen === 0 && !('m' in data.t.p)){
                data.singleShape = true;
            }
            documentData.yOffset = documentData.lh || documentData.s*1.2;
            documentData.ls = documentData.ls || 0;
            documentData.ascent = fontData.ascent*documentData.s/100;
        }

    }

    var moduleOb = {};
    moduleOb.completeData = completeData;

    return moduleOb;
}

var dataManager = dataFunctionManager();
var FontManager = (function(){

    var maxWaitingTime = 5000;

    function setUpNode(font, family){
        var parentNode = document.createElement('span');
        parentNode.style.fontFamily    = family;
        var node = document.createElement('span');
        // Characters that vary significantly among different fonts
        node.innerHTML = 'giItT1WQy@!-/#';
        // Visible - so we can measure it - but not on the screen
        parentNode.style.position      = 'absolute';
        parentNode.style.left          = '-10000px';
        parentNode.style.top           = '-10000px';
        // Large font size makes even subtle changes obvious
        parentNode.style.fontSize      = '300px';
        // Reset any font properties
        parentNode.style.fontVariant   = 'normal';
        parentNode.style.fontStyle     = 'normal';
        parentNode.style.fontWeight    = 'normal';
        parentNode.style.letterSpacing = '0';
        parentNode.appendChild(node);
        document.body.appendChild(parentNode);

        // Remember width with no applied web font
        var width = node.offsetWidth;
        node.style.fontFamily = font + ', '+family;
        return {node:node, w:width, parent:parentNode};
    }

    function checkLoadedFonts() {
        var i, len = this.fonts.length;
        var node, w;
        var loadedCount = len;
        for(i=0;i<len; i+= 1){
            if(this.fonts[i].loaded){
                loadedCount -= 1;
                continue;
            }
            if(this.fonts[i].fOrigin === 't' || this.fonts[i].origin === 2){
                if(window.Typekit && window.Typekit.load && this.typekitLoaded === 0){
                    this.typekitLoaded = 1;
                    try{window.Typekit.load({
                        async: true,
                        active: function() {
                            this.typekitLoaded = 2;
                        }.bind(this)
                    });}catch(e){}
                }
                if(this.typekitLoaded === 2) {
                    this.fonts[i].loaded = true;
                }
            } else if(this.fonts[i].fOrigin === 'n' || this.fonts[i].origin === 0){
                this.fonts[i].loaded = true;
            } else{
                node = this.fonts[i].monoCase.node;
                w = this.fonts[i].monoCase.w;
                if(node.offsetWidth !== w){
                    loadedCount -= 1;
                    this.fonts[i].loaded = true;
                }else{
                    node = this.fonts[i].sansCase.node;
                    w = this.fonts[i].sansCase.w;
                    if(node.offsetWidth !== w){
                        loadedCount -= 1;
                        this.fonts[i].loaded = true;
                    }
                }
                if(this.fonts[i].loaded){
                    this.fonts[i].sansCase.parent.parentNode.removeChild(this.fonts[i].sansCase.parent);
                    this.fonts[i].monoCase.parent.parentNode.removeChild(this.fonts[i].monoCase.parent);
                }
            }
        }

        if(loadedCount !== 0 && Date.now() - this.initTime < maxWaitingTime){
            setTimeout(checkLoadedFonts.bind(this),20);
        }else{
            setTimeout(function(){this.loaded = true;}.bind(this),0);

        }
    };

    function createHelper(def, fontData){
        var tHelper = document.createElementNS(svgNS,'text');
        tHelper.style.fontSize = '100px';
        tHelper.style.fontFamily = fontData.fFamily;
        tHelper.textContent = '1';
        if(fontData.fClass){
            tHelper.style.fontFamily = 'inherit';
            tHelper.className = fontData.fClass;
        } else {
            tHelper.style.fontFamily = fontData.fFamily;
        }
        def.appendChild(tHelper);
        var tCanvasHelper = document.createElement('canvas').getContext('2d');
        tCanvasHelper.font = '100px '+ fontData.fFamily;
        return tCanvasHelper;
        return tHelper;
    }

    function addFonts(fontData, defs){
        if(!fontData){
            this.loaded = true;
            return;
        }
        if(this.chars){
            this.loaded = true;
            this.fonts = fontData.list;
            return;
        }

        var fontArr = fontData.list;
        var i, len = fontArr.length;
        for(i=0; i<len; i+= 1){
            fontArr[i].loaded = false;
            fontArr[i].monoCase = setUpNode(fontArr[i].fFamily,'monospace');
            fontArr[i].sansCase = setUpNode(fontArr[i].fFamily,'sans-serif');
            if(!fontArr[i].fPath) {
                fontArr[i].loaded = true;
            }else if(fontArr[i].fOrigin === 'p' || fontArr[i].origin === 3){
                var s = document.createElement('style');
                s.type = "text/css";
                s.innerHTML = "@font-face {" + "font-family: "+fontArr[i].fFamily+"; font-style: normal; src: url('"+fontArr[i].fPath+"');}";
                defs.appendChild(s);
            } else if(fontArr[i].fOrigin === 'g' || fontArr[i].origin === 1){
                //<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
                var l = document.createElement('link');
                l.type = "text/css";
                l.rel = "stylesheet";
                l.href = fontArr[i].fPath;
                defs.appendChild(l);
            } else if(fontArr[i].fOrigin === 't' || fontArr[i].origin === 2){
                //<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
                var sc = document.createElement('script');
                sc.setAttribute('src',fontArr[i].fPath);
                defs.appendChild(sc);
            }
            fontArr[i].helper = createHelper(defs,fontArr[i]);
            this.fonts.push(fontArr[i]);
        }
        checkLoadedFonts.bind(this)();
    }

    function addChars(chars){
        if(!chars){
            return;
        }
        if(!this.chars){
            this.chars = [];
        }
        var i, len = chars.length;
        var j, jLen = this.chars.length, found;
        for(i=0;i<len;i+=1){
            j = 0;
            found = false;
            while(j<jLen){
                if(this.chars[j].style === chars[i].style && this.chars[j].fFamily === chars[i].fFamily && this.chars[j].ch === chars[i].ch){
                    found = true;
                }
                j += 1;
            }
            if(!found){
                this.chars.push(chars[i]);
                jLen += 1;
            }
        }
    }

    function getCharData(char, style, font){
        var i = 0, len = this.chars.length;
        while( i < len) {
            if(this.chars[i].ch === char && this.chars[i].style === style && this.chars[i].fFamily === font){
                return this.chars[i];
            }
            i+= 1;
        }
    }

    function measureText(char, fontName, size){
        var fontData = this.getFontByName(fontName);
        var tHelper = fontData.helper;
        //tHelper.textContent = char;
        return tHelper.measureText(char).width*size/100;
        //return tHelper.getComputedTextLength()*size/100;
    }

    function getFontByName(name){
        var i = 0, len = this.fonts.length;
        while(i<len){
            if(this.fonts[i].fName === name) {
                return this.fonts[i];
            }
            i += 1;
        }
        return 'sans-serif';
    }

    var Font = function(){
        this.fonts = [];
        this.chars = null;
        this.typekitLoaded = 0;
        this.loaded = false;
        this.initTime = Date.now();
    };
    Font.prototype.addChars = addChars;
    Font.prototype.addFonts = addFonts;
    Font.prototype.getCharData = getCharData;
    Font.prototype.getFontByName = getFontByName;
    Font.prototype.measureText = measureText;

    return Font;

}());
var PropertyFactory = (function(){

    var initFrame = -999999;

    function getValue(){
        if(this.elem.globalData.frameId === this.frameId){
            return;
        }
        this.mdf = false;
        var frameNum = this.comp.renderedFrame - this.offsetTime;
        if(!(frameNum === this.lastFrame || (this.lastFrame !== initFrame && ((this.lastFrame >= this.keyframes[this.keyframes.length- 1].t-this.offsetTime && frameNum >= this.keyframes[this.keyframes.length- 1].t-this.offsetTime) || (this.lastFrame < this.keyframes[0].t-this.offsetTime && frameNum < this.keyframes[0].t-this.offsetTime))))){
            var i = this.lastFrame < frameNum ? this._lastIndex : 0;
            var len = this.keyframes.length- 1,flag = true;
            var keyData, nextKeyData;

            while(flag){
                keyData = this.keyframes[i];
                nextKeyData = this.keyframes[i+1];
                if(i == len-1 && frameNum >= nextKeyData.t - this.offsetTime){
                    if(keyData.h){
                        keyData = nextKeyData;
                    }
                    break;
                }
                if((nextKeyData.t - this.offsetTime) > frameNum){
                    break;
                }
                if(i < len - 1){
                    i += 1;
                }else{
                    flag = false;
                }
            }

            this._lastIndex = i;

            var k, kLen,perc,jLen, j, fnc;
            if(keyData.to){

                if(!keyData.bezierData){
                    bez.buildBezierData(keyData);
                }
                var bezierData = keyData.bezierData;
                if(frameNum >= nextKeyData.t-this.offsetTime || frameNum < keyData.t-this.offsetTime){
                    var ind = frameNum >= nextKeyData.t-this.offsetTime ? bezierData.points.length - 1 : 0;
                    kLen = bezierData.points[ind].point.length;
                    for(k = 0; k < kLen; k += 1){
                        this.pv[k] = bezierData.points[ind].point[k];
                        this.v[k] = this.mult ? this.pv[k]*this.mult : this.pv[k];
                        if(this.lastPValue[k] !== this.pv[k]) {
                            this.mdf = true;
                            this.lastPValue[k] = this.pv[k];
                        }
                    }
                    this._lastBezierData = null;
                }else{
                    if(keyData.__fnct){
                        fnc = keyData.__fnct;
                    }else{
                        fnc = BezierFactory.getBezierEasing(keyData.o.x,keyData.o.y,keyData.i.x,keyData.i.y,keyData.n).get;
                        keyData.__fnct = fnc;
                    }
                    perc = fnc((frameNum-(keyData.t-this.offsetTime))/((nextKeyData.t-this.offsetTime)-(keyData.t-this.offsetTime)));
                    var distanceInLine = bezierData.segmentLength*perc;

                    var segmentPerc;
                    var addedLength =  (this.lastFrame < frameNum && this._lastBezierData === bezierData) ? this._lastAddedLength : 0;
                    j =  (this.lastFrame < frameNum && this._lastBezierData === bezierData) ? this._lastPoint : 0;
                    flag = true;
                    jLen = bezierData.points.length;
                    while(flag){
                        addedLength +=bezierData.points[j].partialLength;
                        if(distanceInLine === 0 || perc === 0 || j == bezierData.points.length - 1){
                            kLen = bezierData.points[j].point.length;
                            for(k=0;k<kLen;k+=1){
                                this.pv[k] = bezierData.points[j].point[k];
                                this.v[k] = this.mult ? this.pv[k]*this.mult : this.pv[k];
                                if(this.lastPValue[k] !== this.pv[k]) {
                                    this.mdf = true;
                                    this.lastPValue[k] = this.pv[k];
                                }
                            }
                            break;
                        }else if(distanceInLine >= addedLength && distanceInLine < addedLength + bezierData.points[j+1].partialLength){
                            segmentPerc = (distanceInLine-addedLength)/(bezierData.points[j+1].partialLength);
                            kLen = bezierData.points[j].point.length;
                            for(k=0;k<kLen;k+=1){
                                this.pv[k] = bezierData.points[j].point[k] + (bezierData.points[j+1].point[k] - bezierData.points[j].point[k])*segmentPerc;
                                this.v[k] = this.mult ? this.pv[k] * this.mult : this.pv[k];
                                if(this.lastPValue[k] !== this.pv[k]) {
                                    this.mdf = true;
                                    this.lastPValue[k] = this.pv[k];
                                }
                            }
                            break;
                        }
                        if(j < jLen - 1){
                            j += 1;
                        }else{
                            flag = false;
                        }
                    }
                    this._lastPoint = j;
                    this._lastAddedLength = addedLength - bezierData.points[j].partialLength;
                    this._lastBezierData = bezierData;
                }
            }else{
                var outX,outY,inX,inY, keyValue;
                len = keyData.s.length;
                for(i=0;i<len;i+=1){
                    if(keyData.h !== 1){
                        if(frameNum >= nextKeyData.t-this.offsetTime){
                            perc = 1;
                        }else if(frameNum < keyData.t-this.offsetTime){
                            perc = 0;
                        }else{
                            if(keyData.o.x instanceof Array){
                                if(!keyData.__fnct){
                                    keyData.__fnct = [];
                                }
                                if (!keyData.__fnct[i]) {
                                    outX = keyData.o.x[i] || keyData.o.x[0];
                                    outY = keyData.o.y[i] || keyData.o.y[0];
                                    inX = keyData.i.x[i] || keyData.i.x[0];
                                    inY = keyData.i.y[i] || keyData.i.y[0];
                                    fnc = BezierFactory.getBezierEasing(outX,outY,inX,inY).get;
                                    keyData.__fnct[i] = fnc;
                                } else {
                                    fnc = keyData.__fnct[i];
                                }
                            } else {
                                if (!keyData.__fnct) {
                                    outX = keyData.o.x;
                                    outY = keyData.o.y;
                                    inX = keyData.i.x;
                                    inY = keyData.i.y;
                                    fnc = BezierFactory.getBezierEasing(outX,outY,inX,inY).get;
                                    keyData.__fnct = fnc;
                                } else{
                                    fnc = keyData.__fnct;
                                }
                            }
                            perc = fnc((frameNum-(keyData.t-this.offsetTime))/((nextKeyData.t-this.offsetTime)-(keyData.t-this.offsetTime)));
                        }
                    }
                    if(this.sh && keyData.h !== 1){
                        var initP = keyData.s[i];
                        var endP = keyData.e[i];
                        if(initP-endP < -180){
                            initP += 360;
                        } else if(initP-endP > 180){
                            initP -= 360;
                        }
                        keyValue = initP+(endP-initP)*perc;
                    } else {
                        keyValue = keyData.h === 1 ? keyData.s[i] : keyData.s[i]+(keyData.e[i]-keyData.s[i])*perc;
                    }
                    if(len === 1){
                        this.v = this.mult ? keyValue*this.mult : keyValue;
                        this.pv = keyValue;
                        if(this.lastPValue != this.pv){
                            this.mdf = true;
                            this.lastPValue = this.pv;
                        }
                    }else{
                        this.v[i] = this.mult ? keyValue*this.mult : keyValue;
                        this.pv[i] = keyValue;
                        if(this.lastPValue[i] !== this.pv[i]){
                            this.mdf = true;
                            this.lastPValue[i] = this.pv[i];
                        }
                    }
                }
            }
        }
        this.lastFrame = frameNum;
        this.frameId = this.elem.globalData.frameId;
    }

    function getNoValue(){}

    function ValueProperty(elem,data, mult){
        this.mult = mult;
        this.v = mult ? data.k * mult : data.k;
        this.pv = data.k;
        this.mdf = false;
        this.comp = elem.comp;
        this.k = false;
        this.kf = false;
        this.vel = 0;
        this.getValue = getNoValue;
    }

    function MultiDimensionalProperty(elem,data, mult){
        this.mult = mult;
        this.data = data;
        this.mdf = false;
        this.comp = elem.comp;
        this.k = false;
        this.kf = false;
        this.frameId = -1;
        this.v = Array.apply(null, {length:data.k.length});
        this.pv = Array.apply(null, {length:data.k.length});
        this.lastValue = Array.apply(null, {length:data.k.length});
        var arr = Array.apply(null, {length:data.k.length});
        this.vel = arr.map(function () { return 0 });
        var i, len = data.k.length;
        for(i = 0;i<len;i+=1){
            this.v[i] = mult ? data.k[i] * mult : data.k[i];
            this.pv[i] = data.k[i];
        }
        this.getValue = getNoValue;
    }

    function KeyframedValueProperty(elem, data, mult){
        this.keyframes = data.k;
        this.offsetTime = elem.data.st;
        this.lastValue = -99999;
        this.lastPValue = -99999;
        this.frameId = -1;
        this._lastIndex = 0;
        this.k = true;
        this.kf = true;
        this.data = data;
        this.mult = mult;
        this.elem = elem;
        this.comp = elem.comp;
        this.lastFrame = initFrame;
        this.v = mult ? data.k[0].s[0]*mult : data.k[0].s[0];
        this.pv = data.k[0].s[0];
        this.getValue = getValue;
    }

    function KeyframedMultidimensionalProperty(elem, data, mult){
        var i, len = data.k.length;
        var s, e,to,ti;
        for(i=0;i<len-1;i+=1){
            if(data.k[i].to && data.k[i].s && data.k[i].e ){
                s = data.k[i].s;
                e = data.k[i].e;
                to = data.k[i].to;
                ti = data.k[i].ti;
                if((s.length === 2 && !(s[0] === e[0] && s[1] === e[1]) && bez.pointOnLine2D(s[0],s[1],e[0],e[1],s[0] + to[0],s[1] + to[1]) && bez.pointOnLine2D(s[0],s[1],e[0],e[1],e[0] + ti[0],e[1] + ti[1])) || (s.length === 3 && !(s[0] === e[0] && s[1] === e[1] && s[2] === e[2]) && bez.pointOnLine3D(s[0],s[1],s[2],e[0],e[1],e[2],s[0] + to[0],s[1] + to[1],s[2] + to[2]) && bez.pointOnLine3D(s[0],s[1],s[2],e[0],e[1],e[2],e[0] + ti[0],e[1] + ti[1],e[2] + ti[2]))){
                    data.k[i].to = null;
                    data.k[i].ti = null;
                }
            }
        }
        this.keyframes = data.k;
        this.offsetTime = elem.data.st;
        this.k = true;
        this.kf = true;
        this.mult = mult;
        this.elem = elem;
        this.comp = elem.comp;
        this.getValue = getValue;
        this.frameId = -1;
        this._lastIndex = 0;
        this.v = Array.apply(null, {length:data.k[0].s.length});
        this.pv = Array.apply(null, {length:data.k[0].s.length});
        this.lastValue = Array.apply(null, {length:data.k[0].s.length});
        this.lastPValue = Array.apply(null, {length:data.k[0].s.length});
        this.lastFrame = initFrame;
    }

    var TransformProperty = (function() {
        function positionGetter() {
            if(this.p) {
                return ExpressionValue(this.p);
            } else {
                return [this.px.v, this.py.v, this.pz ? this.pz.v : 0];
            }
        }
        function xPositionGetter() {
            return ExpressionValue(this.px);
        }
        function yPositionGetter() {
            return ExpressionValue(this.py);
        }
        function zPositionGetter() {
            return ExpressionValue(this.pz);
        }
        function anchorGetter() {
            return ExpressionValue(this.a);
        }
        function orientationGetter() {
            return ExpressionValue(this.or);
        }
        function rotationGetter() {
            if(this.r) {
                return ExpressionValue(this.r, 1/degToRads);
            } else {
                return ExpressionValue(this.rz, 1/degToRads);
            }
        }
        function scaleGetter() {
            return ExpressionValue(this.s, 100);
        }
        function opacityGetter() {
            return ExpressionValue(this.o, 100);
        }
        function skewGetter() {
            return ExpressionValue(this.sk);
        }
        function skewAxisGetter() {
            return ExpressionValue(this.sa);
        }
        function applyToMatrix(mat) {
            var i, len = this.dynamicProperties.length;
            for(i = 0; i < len; i += 1) {
                this.dynamicProperties[i].getValue();
                if (this.dynamicProperties[i].mdf) {
                    this.mdf = true;
                }
            }
            if (this.a) {
                mat.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
            }
            if (this.s) {
                mat.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
            }
            if (this.r) {
                mat.rotate(-this.r.v);
            } else {
                mat.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
            }
            if (this.data.p.s) {
                if (this.data.p.z) {
                    mat.translate(this.px.v, this.py.v, -this.pz.v);
                } else {
                    mat.translate(this.px.v, this.py.v, 0);
                }
            } else {
                mat.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
            }
        }
        function processKeys(){
            if (this.elem.globalData.frameId === this.frameId) {
                return;
            }

            this.mdf = false;
            var i, len = this.dynamicProperties.length;

            for(i = 0; i < len; i += 1) {
                this.dynamicProperties[i].getValue();
                if (this.dynamicProperties[i].mdf) {
                    this.mdf = true;
                }
            }
            if (this.mdf) {
                this.v.reset();
                if (this.a) {
                    this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
                }
                if(this.s) {
                    this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
                }
                if (this.sk) {
                    this.v.skewFromAxis(-this.sk.v, this.sa.v);
                }
                if (this.r) {
                    this.v.rotate(-this.r.v);
                } else {
                    this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
                }
                if (this.autoOriented && this.p.keyframes && this.p.getValueAtTime) {
                    var v1,v2;
                    if (this.p.lastFrame+this.p.offsetTime <= this.p.keyframes[0].t) {
                        v1 = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / this.elem.globalData.frameRate,0);
                        v2 = this.p.getValueAtTime(this.p.keyframes[0].t / this.elem.globalData.frameRate, 0);
                    } else if(this.p.lastFrame+this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t) {
                        v1 = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t / this.elem.globalData.frameRate), 0);
                        v2 = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.01) / this.elem.globalData.frameRate, 0);
                    } else {
                        v1 = this.p.pv;
                        v2 = this.p.getValueAtTime((this.p.lastFrame+this.p.offsetTime - 0.01) / this.elem.globalData.frameRate, this.p.offsetTime);
                    }
                    this.v.rotate(-Math.atan2(v1[1] - v2[1], v1[0] - v2[0]));
                }
                if(this.data.p.s){
                    if(this.data.p.z) {
                        this.v.translate(this.px.v, this.py.v, -this.pz.v);
                    } else {
                        this.v.translate(this.px.v, this.py.v, 0);
                    }
                }else{
                    this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2]);
                }
            }
            //console.log(this.v.to2dCSS())
            this.frameId = this.elem.globalData.frameId;
        }

        function setInverted(){
            this.inverted = true;
            this.iv = new Matrix();
            if(!this.k){
                if(this.data.p.s){
                    this.iv.translate(this.px.v,this.py.v,-this.pz.v);
                }else{
                    this.iv.translate(this.p.v[0],this.p.v[1],-this.p.v[2]);
                }
                if(this.r){
                    this.iv.rotate(-this.r.v);
                }else{
                    this.iv.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v);
                }
                if(this.s){
                    this.iv.scale(this.s.v[0],this.s.v[1],1);
                }
                if(this.a){
                    this.iv.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]);
                }
            }
        }

        function autoOrient(){
            //
            //var prevP = this.getValueAtTime();
        }

        return function TransformProperty(elem,data,arr){
            this.elem = elem;
            this.frameId = -1;
            this.type = 'transform';
            this.dynamicProperties = [];
            this.mdf = false;
            this.data = data;
            this.getValue = processKeys;
            this.applyToMatrix = applyToMatrix;
            this.setInverted = setInverted;
            this.autoOrient = autoOrient;
            this.v = new Matrix();
            if(data.p.s){
                this.px = PropertyFactory.getProp(elem,data.p.x,0,0,this.dynamicProperties);
                this.py = PropertyFactory.getProp(elem,data.p.y,0,0,this.dynamicProperties);
                if(data.p.z){
                    this.pz = PropertyFactory.getProp(elem,data.p.z,0,0,this.dynamicProperties);
                }
            }else{
                this.p = PropertyFactory.getProp(elem,data.p,1,0,this.dynamicProperties);
            }
            if(data.r) {
                this.r = PropertyFactory.getProp(elem, data.r, 0, degToRads, this.dynamicProperties);
            } else if(data.rx) {
                this.rx = PropertyFactory.getProp(elem, data.rx, 0, degToRads, this.dynamicProperties);
                this.ry = PropertyFactory.getProp(elem, data.ry, 0, degToRads, this.dynamicProperties);
                this.rz = PropertyFactory.getProp(elem, data.rz, 0, degToRads, this.dynamicProperties);
                this.or = PropertyFactory.getProp(elem, data.or, 1, degToRads, this.dynamicProperties);
            }
            if(data.sk){
                this.sk = PropertyFactory.getProp(elem, data.sk, 0, degToRads, this.dynamicProperties);
                this.sa = PropertyFactory.getProp(elem, data.sa, 0, degToRads, this.dynamicProperties);
            }
            if(data.a) {
                this.a = PropertyFactory.getProp(elem,data.a,1,0,this.dynamicProperties);
            }
            if(data.s) {
                this.s = PropertyFactory.getProp(elem,data.s,1,0.01,this.dynamicProperties);
            }
            if(data.o){
                this.o = PropertyFactory.getProp(elem,data.o,0,0.01,arr);
            } else {
                this.o = {mdf:false,v:1};
            }
            if(this.dynamicProperties.length){
                arr.push(this);
            }else{
                if(this.a){
                    this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]);
                }
                if(this.s){
                    this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]);
                }
                if(this.sk){
                    this.v.skewFromAxis(-this.sk.v,this.sa.v);
                }
                if(this.r){
                    this.v.rotate(-this.r.v);
                }else{
                    this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
                }
                if(this.data.p.s){
                    if(data.p.z) {
                        this.v.translate(this.px.v, this.py.v, -this.pz.v);
                    } else {
                        this.v.translate(this.px.v, this.py.v, 0);
                    }
                }else{
                    this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2]);
                }
            }
            Object.defineProperty(this, "position", { get: positionGetter});
            Object.defineProperty(this, "xPosition", { get: xPositionGetter});
            Object.defineProperty(this, "yPosition", { get: yPositionGetter});
            Object.defineProperty(this, "orientation", { get: orientationGetter});
            Object.defineProperty(this, "anchorPoint", { get: anchorGetter});
            Object.defineProperty(this, "rotation", { get: rotationGetter});
            Object.defineProperty(this, "scale", { get: scaleGetter});
            Object.defineProperty(this, "opacity", { get: opacityGetter});
            Object.defineProperty(this, "skew", { get: skewGetter});
            Object.defineProperty(this, "skewAxis", { get: skewAxisGetter});
        }
    }());

    function getProp(elem,data,type, mult, arr) {
        var p;
        if(type === 2){
            p = new TransformProperty(elem, data, arr);
        } else if(data.a === 0){
            if(type === 0) {
                p = new ValueProperty(elem,data,mult);
            } else {
                p = new MultiDimensionalProperty(elem,data, mult);
            }
        } else if(data.a === 1){
            if(type === 0) {
                p = new KeyframedValueProperty(elem,data,mult);
            } else {
                p = new KeyframedMultidimensionalProperty(elem,data, mult);
            }
        } else if(!data.k.length){
            p = new ValueProperty(elem,data, mult);
        }else if(typeof(data.k[0]) === 'number'){
            p = new MultiDimensionalProperty(elem,data, mult);
        }else{
            switch(type){
                case 0:
                    p = new KeyframedValueProperty(elem,data,mult);
                    break;
                case 1:
                    p = new KeyframedMultidimensionalProperty(elem,data,mult);
                    break;
            }
        }
        if(p.k){
            arr.push(p);
        }
        return p;
    }

    var getGradientProp = (function(){

        function getValue(forceRender){
            this.prop.getValue();
            this.cmdf = false;
            this.omdf = false;
            if(this.prop.mdf || forceRender){
                var i, len = this.data.p*4;
                var mult, val;
                for(i=0;i<len;i+=1){
                    mult = i%4 === 0 ? 100 : 255;
                    val = Math.round(this.prop.v[i]*mult);
                    if(this.c[i] !== val){
                        this.c[i] = val;
                        this.cmdf = true;
                    }
                }
                if(this.o.length){
                    len = this.prop.v.length;
                    for(i=this.data.p*4;i<len;i+=1){
                        mult = i%2 === 0 ? 100 : 1;
                        val = i%2 === 0 ?  Math.round(this.prop.v[i]*100):this.prop.v[i];
                        if(this.o[i-this.data.p*4] !== val){
                            this.o[i-this.data.p*4] = val;
                            this.omdf = true;
                        }
                    }
                }
            }

        }

        function gradientProp(elem,data,arr){
            this.prop = getProp(elem,data.k,1,null,[]);
            this.data = data;
            this.k = this.prop.k;
            this.c = Array.apply(null,{length:data.p*4});
            var cLength = data.k.k[0].s ? (data.k.k[0].s.length - data.p*4) : data.k.k.length - data.p*4;
            this.o = Array.apply(null,{length:cLength});
            this.cmdf = false;
            this.omdf = false;
            this.getValue = getValue;
            if(this.prop.k){
                arr.push(this);
            }
            this.getValue(true);
        }

        return function getGradientProp(elem,data,arr){
            return new gradientProp(elem,data,arr);
        }
    }());




    var DashProperty = (function(){

        function processKeys(forceRender){
            var i = 0, len = this.dataProps.length;

            if(this.elem.globalData.frameId === this.frameId && !forceRender){
                return;
            }
            this.mdf = false;
            this.frameId = this.elem.globalData.frameId;
            while(i<len){
                if(this.dataProps[i].p.mdf){
                    this.mdf = true;
                    break;
                }
                i+=1;
            }
            if(this.mdf || forceRender){
                if(this.renderer === 'svg') {
                    this.dasharray = '';
                }
                for(i=0;i<len;i+=1){
                    if(this.dataProps[i].n != 'o'){
                        if(this.renderer === 'svg') {
                            this.dasharray += ' ' + this.dataProps[i].p.v;
                        }else{
                            this.dasharray[i] = this.dataProps[i].p.v;
                        }
                    }else{
                        this.dashoffset = this.dataProps[i].p.v;
                    }
                }
            }
        }

        return function(elem, data,renderer, dynamicProperties){
            this.elem = elem;
            this.frameId = -1;
            this.dataProps = new Array(data.length);
            this.renderer = renderer;
            this.mdf = false;
            this.k = false;
            if(this.renderer === 'svg'){
                this.dasharray = '';
            }else{

                this.dasharray = new Array(data.length - 1);
            }
            this.dashoffset = 0;
            var i, len = data.length, prop;
            for(i=0;i<len;i+=1){
                prop = PropertyFactory.getProp(elem,data[i].v,0, 0, dynamicProperties);
                this.k = prop.k ? true : this.k;
                this.dataProps[i] = {n:data[i].n,p:prop};
            }
            this.getValue = processKeys;
            if(this.k){
                dynamicProperties.push(this);
            }else{
                this.getValue(true);
            }

        }
    }());

    function getDashProp(elem, data,renderer, dynamicProperties) {
        return new DashProperty(elem, data,renderer, dynamicProperties);
    };

    var TextSelectorProp = (function(){
        var max = Math.max;
        var min = Math.min;
        var floor = Math.floor;
        function updateRange(newCharsFlag){
            this.mdf = newCharsFlag || false;
            if(this.dynamicProperties.length){
                var i, len = this.dynamicProperties.length;
                for(i=0;i<len;i+=1){
                    this.dynamicProperties[i].getValue();
                    if(this.dynamicProperties[i].mdf){
                        this.mdf = true;
                    }
                }
            }
            var totalChars = this.elem.currentTextDocumentData.l.length;
            if(newCharsFlag && this.data.r === 2) {
                this.e.v = totalChars;
            }
            var divisor = this.data.r === 2 ? 1 : 100 / totalChars;
            var o = this.o.v/divisor;
            var s = this.s.v/divisor + o;
            var e = (this.e.v/divisor) + o;
            if(s>e){
                var _s = s;
                s = e;
                e = _s;
            }
            this.finalS = s;
            this.finalE = e;
        }

        function getMult(ind){
            //var easer = bez.getEasingCurve(this.ne.v/100,0,1-this.xe.v/100,1);
            var easer = BezierFactory.getBezierEasing(this.ne.v/100,0,1-this.xe.v/100,1).get;
            var mult = 0;
            var s = this.finalS;
            var e = this.finalE;
            var type = this.data.sh;
            if(type == 2){
                if(e === s){
                    mult = ind >= e ? 1 : 0;
                }else{
                    mult = max(0,min(0.5/(e-s) + (ind-s)/(e-s),1));
                }
                mult = easer(mult);
            }else if(type == 3){
                if(e === s){
                    mult = ind >= e ? 0 : 1;
                }else{
                    mult = 1 - max(0,min(0.5/(e-s) + (ind-s)/(e-s),1));
                }

                mult = easer(mult);
            }else if(type == 4){
                if(e === s){
                    mult = 0;
                }else{
                    mult = max(0,min(0.5/(e-s) + (ind-s)/(e-s),1));
                    if(mult<.5){
                        mult *= 2;
                    }else{
                        mult = 1 - 2*(mult-0.5);
                    }
                }
                mult = easer(mult);
            }else if(type == 5){
                if(e === s){
                    mult = 0;
                }else{
                    var tot = e - s;
                    /*ind += 0.5;
                    mult = -4/(tot*tot)*(ind*ind)+(4/tot)*ind;*/
                    ind = min(max(0,ind+0.5-s),e-s);
                    var x = -tot/2+ind;
                    var a = tot/2;
                    mult = Math.sqrt(1 - (x*x)/(a*a));
                }
                mult = easer(mult);
            }else if(type == 6){
                if(e === s){
                    mult = 0;
                }else{
                    ind = min(max(0,ind+0.5-s),e-s);
                    mult = (1+(Math.cos((Math.PI+Math.PI*2*(ind)/(e-s)))))/2;
                    /*
                     ind = Math.min(Math.max(s,ind),e-1);
                     mult = (1+(Math.cos((Math.PI+Math.PI*2*(ind-s)/(e-1-s)))))/2;
                     mult = Math.max(mult,(1/(e-1-s))/(e-1-s));*/
                }
                mult = easer(mult);
            }else {
                if(ind >= floor(s)){
                    if(ind-s < 0){
                        mult = 1 - (s - ind);
                    }else{
                        mult = max(0,min(e-ind,1));
                    }
                }
                mult = easer(mult);
            }
            return mult*this.a.v;
        }

        return function TextSelectorProp(elem,data, arr){
            this.mdf = false;
            this.k = false;
            this.data = data;
            this.dynamicProperties = [];
            this.getValue = updateRange;
            this.getMult = getMult;
            this.elem = elem;
            this.comp = elem.comp;
            this.finalS = 0;
            this.finalE = 0;
            this.s = PropertyFactory.getProp(elem,data.s || {k:0},0,0,this.dynamicProperties);
            if('e' in data){
                this.e = PropertyFactory.getProp(elem,data.e,0,0,this.dynamicProperties);
            }else{
                this.e = {v:100};
            }
            this.o = PropertyFactory.getProp(elem,data.o || {k:0},0,0,this.dynamicProperties);
            this.xe = PropertyFactory.getProp(elem,data.xe || {k:0},0,0,this.dynamicProperties);
            this.ne = PropertyFactory.getProp(elem,data.ne || {k:0},0,0,this.dynamicProperties);
            this.a = PropertyFactory.getProp(elem,data.a,0,0.01,this.dynamicProperties);
            if(this.dynamicProperties.length){
                arr.push(this);
            }else{
                this.getValue();
            }
        }
    }());

    function getTextSelectorProp(elem, data,arr) {
        return new TextSelectorProp(elem, data, arr);
    };

    var ob = {};
    ob.getProp = getProp;
    ob.getDashProp = getDashProp;
    ob.getTextSelectorProp = getTextSelectorProp;
    ob.getGradientProp = getGradientProp;
    return ob;
}());
function ShapePath(){
	this.c = false;
	this._length = 0;
	this._maxLength = 8;
	this.v = Array.apply(null,{length:this._maxLength});
	this.o = Array.apply(null,{length:this._maxLength});
	this.i = Array.apply(null,{length:this._maxLength});
};

ShapePath.prototype.setPathData = function(closed, len) {
	this.c = closed;
	while(len > this._maxLength){
		this.doubleArrayLength();
	}
	var i = 0;
	while(i < len){
		this.v[i] = point_pool.newPoint();
		this.o[i] = point_pool.newPoint();
		this.i[i] = point_pool.newPoint();
		i += 1;
	}
	this._length = len;
};

ShapePath.prototype.doubleArrayLength = function() {
	this.v = this.v.concat(Array.apply(null,{length:this._maxLength}))
	this.i = this.i.concat(Array.apply(null,{length:this._maxLength}))
	this.o = this.o.concat(Array.apply(null,{length:this._maxLength}))
	this._maxLength *= 2;
};

ShapePath.prototype.setXYAt = function(x, y, type, pos, replace) {
	var arr;
	this._length = Math.max(this._length, pos + 1);
	if(this._length >= this._maxLength) {
		this.doubleArrayLength();
	}
	switch(type){
		case 'v':
			arr = this.v;
			break;
		case 'i':
			arr = this.i;
			break;
		case 'o':
			arr = this.o;
			break;
	}
	if(!arr[pos] || (arr[pos] && !replace)){
		arr[pos] = point_pool.newPoint();
	}
	arr[pos][0] = x;
	arr[pos][1] = y;
};

ShapePath.prototype.setTripleAt = function(vX,vY,oX,oY,iX,iY,pos, replace) {
	this.setXYAt(vX,vY,'v',pos, replace);
	this.setXYAt(oX,oY,'o',pos, replace);
	this.setXYAt(iX,iY,'i',pos, replace);
};
var ShapePropertyFactory = (function(){

    var initFrame = -999999;

    function interpolateShape() {
        if(this.elem.globalData.frameId === this.frameId){
            return;
        }
        this.mdf = false;
        var frameNum = this.comp.renderedFrame - this.offsetTime;
        if(!((this.lastFrame !== initFrame && ((this.lastFrame < this.keyframes[0].t-this.offsetTime && frameNum < this.keyframes[0].t-this.offsetTime) || (this.lastFrame > this.keyframes[this.keyframes.length - 1].t-this.offsetTime && frameNum > this.keyframes[this.keyframes.length - 1].t-this.offsetTime))))){
            var keyPropS,keyPropE,isHold;
            if(frameNum < this.keyframes[0].t-this.offsetTime){
                keyPropS = this.keyframes[0].s[0];
                isHold = true;
                this._lastIndex = 0;
            }else if(frameNum >= this.keyframes[this.keyframes.length - 1].t-this.offsetTime){
                if(this.keyframes[this.keyframes.length - 2].h === 1){
                    keyPropS = this.keyframes[this.keyframes.length - 1].s[0];
                }else{
                    keyPropS = this.keyframes[this.keyframes.length - 2].e[0];
                }
                isHold = true;
            }else{
                var i = this.lastFrame < initFrame ? this._lastIndex : 0;
                var len = this.keyframes.length- 1,flag = true,keyData,nextKeyData, j, jLen, k, kLen;
                while(flag){
                    keyData = this.keyframes[i];
                    nextKeyData = this.keyframes[i+1];
                    if((nextKeyData.t - this.offsetTime) > frameNum){
                        break;
                    }
                    if(i < len - 1){
                        i += 1;
                    }else{
                        flag = false;
                    }
                }
                isHold = keyData.h === 1;
                this._lastIndex = i;

                var perc;
                if(!isHold){
                    if(frameNum >= nextKeyData.t-this.offsetTime){
                        perc = 1;
                    }else if(frameNum < keyData.t-this.offsetTime){
                        perc = 0;
                    }else{
                        var fnc;
                        if(keyData.__fnct){
                            fnc = keyData.__fnct;
                        }else{
                            fnc = BezierFactory.getBezierEasing(keyData.o.x,keyData.o.y,keyData.i.x,keyData.i.y).get;
                            keyData.__fnct = fnc;
                        }
                        perc = fnc((frameNum-(keyData.t-this.offsetTime))/((nextKeyData.t-this.offsetTime)-(keyData.t-this.offsetTime)));
                    }
                    keyPropE = keyData.e[0];
                }
                keyPropS = keyData.s[0];
            }
            jLen = this.v._length;
            kLen = keyPropS.i[0].length;
            var hasModified = false;
            var vertexValue;
            for(j=0;j<jLen;j+=1){
                for(k=0;k<kLen;k+=1){
                    if(isHold){
                        vertexValue = keyPropS.i[j][k];
                        if(this.v.i[j][k] !== vertexValue){
                            this.v.i[j][k] = vertexValue;
                            this.pv.i[j][k] = vertexValue;
                            hasModified = true;
                        }
                        vertexValue = keyPropS.o[j][k];
                        if(this.v.o[j][k] !== vertexValue){
                            this.v.o[j][k] = vertexValue;
                            this.pv.o[j][k] = vertexValue;
                            hasModified = true;
                        }
                        vertexValue = keyPropS.v[j][k];
                        if(this.v.v[j][k] !== vertexValue){
                            this.v.v[j][k] = vertexValue;
                            this.pv.v[j][k] = vertexValue;
                            hasModified = true;
                        }
                    }else{
                        vertexValue = keyPropS.i[j][k]+(keyPropE.i[j][k]-keyPropS.i[j][k])*perc;
                        if(this.v.i[j][k] !== vertexValue){
                            this.v.i[j][k] = vertexValue;
                            this.pv.i[j][k] = vertexValue;
                            hasModified = true;
                        }
                        vertexValue = keyPropS.o[j][k]+(keyPropE.o[j][k]-keyPropS.o[j][k])*perc;
                        if(this.v.o[j][k] !== vertexValue){
                            this.v.o[j][k] = vertexValue;
                            this.pv.o[j][k] = vertexValue;
                            hasModified = true;
                        }
                        vertexValue = keyPropS.v[j][k]+(keyPropE.v[j][k]-keyPropS.v[j][k])*perc;
                        if(this.v.v[j][k] !== vertexValue){
                            this.v.v[j][k] = vertexValue;
                            this.pv.v[j][k] = vertexValue;
                            hasModified = true;
                        }
                    }
                }
            }
            this.mdf = hasModified;
            this.v.c = keyPropS.c;
            this.paths = this.localShapeCollection;
        }

        this.lastFrame = frameNum;
        this.frameId = this.elem.globalData.frameId;
    }

    function getShapeValue(){
        return this.v;
    }

    function resetShape(){
        this.paths = this.localShapeCollection;
        if(!this.k){
            this.mdf = false;
        }
    }

    function ShapeProperty(elem, data, type){
        this.comp = elem.comp;
        this.k = false;
        this.mdf = false;
        this.v = shape_pool.newShape();
        var pathData = type === 3 ? data.pt.k : data.ks.k;
        this.v.v = pathData.v;
        this.v.i = pathData.i;
        this.v.o = pathData.o;
        this.v.c = pathData.c;
        this.v._length = this.v.v.length;
        this.getValue = getShapeValue;
        this.pv = shape_pool.clone(this.v);
        this.localShapeCollection = shapeCollection_pool.newShapeCollection();
        this.paths = this.localShapeCollection;
        this.paths.addShape(this.v);
        this.reset = resetShape;
    }

    function KeyframedShapeProperty(elem,data,type){
        this.comp = elem.comp;
        this.elem = elem;
        this.offsetTime = elem.data.st;
        this._lastIndex = 0;
        this.getValue = interpolateShape;
        this.keyframes = type === 3 ? data.pt.k : data.ks.k;
        this.k = true;
        this.kf = true;
        var i, len = this.keyframes[0].s[0].i.length;
        var jLen = this.keyframes[0].s[0].i[0].length;
        this.v = shape_pool.newShape();
        this.v.setPathData(this.keyframes[0].s[0].c, len);
        this.pv = shape_pool.clone(this.v);
        this.localShapeCollection = shapeCollection_pool.newShapeCollection();
        this.paths = this.localShapeCollection;
        this.paths.addShape(this.v);
        this.lastFrame = initFrame;
        this.reset = resetShape;
    }

    var EllShapeProperty = (function(){

        var cPoint = roundCorner;

        function convertEllToPath(){
            var p0 = this.p.v[0], p1 = this.p.v[1], s0 = this.s.v[0]/2, s1 = this.s.v[1]/2;
            if(this.d !== 3){
                this.v.v[0][0] = p0;
                this.v.v[0][1] = p1-s1;
                this.v.v[1][0] = p0 + s0;
                this.v.v[1][1] = p1;
                this.v.v[2][0] = p0;
                this.v.v[2][1] = p1+s1;
                this.v.v[3][0] = p0 - s0;
                this.v.v[3][1] = p1;
                this.v.i[0][0] = p0 - s0*cPoint;
                this.v.i[0][1] = p1 - s1;
                this.v.i[1][0] = p0 + s0;
                this.v.i[1][1] = p1 - s1*cPoint;
                this.v.i[2][0] = p0 + s0*cPoint;
                this.v.i[2][1] = p1 + s1;
                this.v.i[3][0] = p0 - s0;
                this.v.i[3][1] = p1 + s1*cPoint;
                this.v.o[0][0] = p0 + s0*cPoint;
                this.v.o[0][1] = p1 - s1;
                this.v.o[1][0] = p0 + s0;
                this.v.o[1][1] = p1 + s1*cPoint;
                this.v.o[2][0] = p0 - s0*cPoint;
                this.v.o[2][1] = p1 + s1;
                this.v.o[3][0] = p0 - s0;
                this.v.o[3][1] = p1 - s1*cPoint;
            }else{
                this.v.v[0][0] = p0;
                this.v.v[0][1] = p1-s1;
                this.v.v[1][0] = p0 - s0;
                this.v.v[1][1] = p1;
                this.v.v[2][0] = p0;
                this.v.v[2][1] = p1+s1;
                this.v.v[3][0] = p0 + s0;
                this.v.v[3][1] = p1;
                this.v.i[0][0] = p0 + s0*cPoint;
                this.v.i[0][1] = p1 - s1;
                this.v.i[1][0] = p0 - s0;
                this.v.i[1][1] = p1 - s1*cPoint;
                this.v.i[2][0] = p0 - s0*cPoint;
                this.v.i[2][1] = p1 + s1;
                this.v.i[3][0] = p0 + s0;
                this.v.i[3][1] = p1 + s1*cPoint;
                this.v.o[0][0] = p0 - s0*cPoint;
                this.v.o[0][1] = p1 - s1;
                this.v.o[1][0] = p0 - s0;
                this.v.o[1][1] = p1 + s1*cPoint;
                this.v.o[2][0] = p0 + s0*cPoint;
                this.v.o[2][1] = p1 + s1;
                this.v.o[3][0] = p0 + s0;
                this.v.o[3][1] = p1 - s1*cPoint;
            }
        }

        function processKeys(frameNum){
            var i, len = this.dynamicProperties.length;
            if(this.elem.globalData.frameId === this.frameId){
                return;
            }
            this.mdf = false;
            this.frameId = this.elem.globalData.frameId;

            for(i=0;i<len;i+=1){
                this.dynamicProperties[i].getValue(frameNum);
                if(this.dynamicProperties[i].mdf){
                    this.mdf = true;
                }
            }
            if(this.mdf){
                this.convertEllToPath();
            }
        }

        return function EllShapeProperty(elem,data) {
            /*this.v = {
                v: Array.apply(null,{length:4}),
                i: Array.apply(null,{length:4}),
                o: Array.apply(null,{length:4}),
                c: true
            };*/
            this.v = shape_pool.newShape();
            this.v.setPathData(true, 4);
            this.localShapeCollection = shapeCollection_pool.newShapeCollection();
            this.paths = this.localShapeCollection;
            this.localShapeCollection.addShape(this.v);
            this.d = data.d;
            this.dynamicProperties = [];
            this.elem = elem;
            this.comp = elem.comp;
            this.frameId = -1;
            this.mdf = false;
            this.getValue = processKeys;
            this.convertEllToPath = convertEllToPath;
            this.reset = resetShape;
            this.p = PropertyFactory.getProp(elem,data.p,1,0,this.dynamicProperties);
            this.s = PropertyFactory.getProp(elem,data.s,1,0,this.dynamicProperties);
            if(this.dynamicProperties.length){
                this.k = true;
            }else{
                this.convertEllToPath();
            }
        }
    }());

    var StarShapeProperty = (function() {

        function convertPolygonToPath(){
            var numPts = Math.floor(this.pt.v);
            var angle = Math.PI*2/numPts;
            /*this.v.v.length = numPts;
            this.v.i.length = numPts;
            this.v.o.length = numPts;*/
            var rad = this.or.v;
            var roundness = this.os.v;
            var perimSegment = 2*Math.PI*rad/(numPts*4);
            var i, currentAng = -Math.PI/ 2;
            var dir = this.data.d === 3 ? -1 : 1;
            currentAng += this.r.v;
            this.v._length = 0;
            for(i=0;i<numPts;i+=1){
                var x = rad * Math.cos(currentAng);
                var y = rad * Math.sin(currentAng);
                var ox = x === 0 && y === 0 ? 0 : y/Math.sqrt(x*x + y*y);
                var oy = x === 0 && y === 0 ? 0 : -x/Math.sqrt(x*x + y*y);
                x +=  + this.p.v[0];
                y +=  + this.p.v[1];
                this.v.setTripleAt(x,y,x-ox*perimSegment*roundness*dir,y-oy*perimSegment*roundness*dir,x+ox*perimSegment*roundness*dir,y+oy*perimSegment*roundness*dir, i, true);
                /*this.v.v[i] = [x,y];
                this.v.i[i] = [x+ox*perimSegment*roundness*dir,y+oy*perimSegment*roundness*dir];
                this.v.o[i] = [x-ox*perimSegment*roundness*dir,y-oy*perimSegment*roundness*dir];*/
                currentAng += angle*dir;
            }
            this.paths.length = 0;
            this.paths[0] = this.v;
        }

        function convertStarToPath() {
            var numPts = Math.floor(this.pt.v)*2;
            var angle = Math.PI*2/numPts;
            /*this.v.v.length = numPts;
            this.v.i.length = numPts;
            this.v.o.length = numPts;*/
            var longFlag = true;
            var longRad = this.or.v;
            var shortRad = this.ir.v;
            var longRound = this.os.v;
            var shortRound = this.is.v;
            var longPerimSegment = 2*Math.PI*longRad/(numPts*2);
            var shortPerimSegment = 2*Math.PI*shortRad/(numPts*2);
            var i, rad,roundness,perimSegment, currentAng = -Math.PI/ 2;
            currentAng += this.r.v;
            var dir = this.data.d === 3 ? -1 : 1;
            this.v._length = 0;
            for(i=0;i<numPts;i+=1){
                rad = longFlag ? longRad : shortRad;
                roundness = longFlag ? longRound : shortRound;
                perimSegment = longFlag ? longPerimSegment : shortPerimSegment;
                var x = rad * Math.cos(currentAng);
                var y = rad * Math.sin(currentAng);
                var ox = x === 0 && y === 0 ? 0 : y/Math.sqrt(x*x + y*y);
                var oy = x === 0 && y === 0 ? 0 : -x/Math.sqrt(x*x + y*y);
                x +=  + this.p.v[0];
                y +=  + this.p.v[1];
                this.v.setTripleAt(x,y,x-ox*perimSegment*roundness*dir,y-oy*perimSegment*roundness*dir,x+ox*perimSegment*roundness*dir,y+oy*perimSegment*roundness*dir, i, true);

                /*this.v.v[i] = [x,y];
                this.v.i[i] = [x+ox*perimSegment*roundness*dir,y+oy*perimSegment*roundness*dir];
                this.v.o[i] = [x-ox*perimSegment*roundness*dir,y-oy*perimSegment*roundness*dir];
                this.v._length = numPts;*/
                longFlag = !longFlag;
                currentAng += angle*dir;
            }
        }

        function processKeys() {
            if(this.elem.globalData.frameId === this.frameId){
                return;
            }
            this.mdf = false;
            this.frameId = this.elem.globalData.frameId;
            var i, len = this.dynamicProperties.length;

            for(i=0;i<len;i+=1){
                this.dynamicProperties[i].getValue();
                if(this.dynamicProperties[i].mdf){
                    this.mdf = true;
                }
            }
            if(this.mdf){
                this.convertToPath();
            }
        }

        return function StarShapeProperty(elem,data) {
            /*this.v = {
                v: [],
                i: [],
                o: [],
                c: true
            };*/
            this.v = shape_pool.newShape();
            this.v.setPathData(true, 0);
            this.elem = elem;
            this.comp = elem.comp;
            this.data = data;
            this.frameId = -1;
            this.d = data.d;
            this.dynamicProperties = [];
            this.mdf = false;
            this.getValue = processKeys;
            this.reset = resetShape;
            if(data.sy === 1){
                this.ir = PropertyFactory.getProp(elem,data.ir,0,0,this.dynamicProperties);
                this.is = PropertyFactory.getProp(elem,data.is,0,0.01,this.dynamicProperties);
                this.convertToPath = convertStarToPath;
            } else {
                this.convertToPath = convertPolygonToPath;
            }
            this.pt = PropertyFactory.getProp(elem,data.pt,0,0,this.dynamicProperties);
            this.p = PropertyFactory.getProp(elem,data.p,1,0,this.dynamicProperties);
            this.r = PropertyFactory.getProp(elem,data.r,0,degToRads,this.dynamicProperties);
            this.or = PropertyFactory.getProp(elem,data.or,0,0,this.dynamicProperties);
            this.os = PropertyFactory.getProp(elem,data.os,0,0.01,this.dynamicProperties);
            this.localShapeCollection = shapeCollection_pool.newShapeCollection();
            this.localShapeCollection.addShape(this.v);
            this.paths = this.localShapeCollection;
            if(this.dynamicProperties.length){
                this.k = true;
            }else{
                this.convertToPath();
            }
        }
    }());

    var RectShapeProperty = (function() {
        function processKeys(frameNum){
            if(this.elem.globalData.frameId === this.frameId){
                return;
            }
            this.mdf = false;
            this.frameId = this.elem.globalData.frameId;
            var i, len = this.dynamicProperties.length;

            for(i=0;i<len;i+=1){
                this.dynamicProperties[i].getValue(frameNum);
                if(this.dynamicProperties[i].mdf){
                    this.mdf = true;
                }
            }
            if(this.mdf){
                this.convertRectToPath();
            }

        }

        function convertRectToPath(){
            var p0 = this.p.v[0], p1 = this.p.v[1], v0 = this.s.v[0]/2, v1 = this.s.v[1]/2;
            var round = bm_min(v0,v1,this.r.v);
            var cPoint = round*(1-roundCorner);
            this.v._length = 0;

            if(this.d === 2 || this.d === 1) {
                this.v.setTripleAt(p0+v0, p1-v1+round,p0+v0, p1-v1+round,p0+v0,p1-v1+cPoint,0, true);
                this.v.setTripleAt(p0+v0, p1+v1-round,p0+v0, p1+v1-cPoint,p0+v0, p1+v1-round,1, true);
                if(round!== 0){
                    this.v.setTripleAt(p0+v0-round, p1+v1,p0+v0-round,p1+v1,p0+v0-cPoint,p1+v1,2, true);
                    this.v.setTripleAt(p0-v0+round,p1+v1,p0-v0+cPoint,p1+v1,p0-v0+round,p1+v1,3, true);
                    this.v.setTripleAt(p0-v0,p1+v1-round,p0-v0,p1+v1-round,p0-v0,p1+v1-cPoint,4, true);
                    this.v.setTripleAt(p0-v0,p1-v1+round,p0-v0,p1-v1+cPoint,p0-v0,p1-v1+round,5, true);
                    this.v.setTripleAt(p0-v0+round,p1-v1,p0-v0+round,p1-v1,p0-v0+cPoint,p1-v1,6, true);
                    this.v.setTripleAt(p0+v0-round,p1-v1,p0+v0-cPoint,p1-v1,p0+v0-round,p1-v1,7, true);
                } else {
                    this.v.setTripleAt(p0-v0,p1+v1,p0-v0+cPoint,p1+v1,p0-v0,p1+v1,2);
                    this.v.setTripleAt(p0-v0,p1-v1,p0-v0,p1-v1+cPoint,p0-v0,p1-v1,3);
                }
            }else{
                this.v.setTripleAt(p0+v0,p1-v1+round,p0+v0,p1-v1+cPoint,p0+v0,p1-v1+round,0, true);
                if(round!== 0){
                    this.v.setTripleAt(p0+v0-round,p1-v1,p0+v0-round,p1-v1,p0+v0-cPoint,p1-v1,1, true);
                    this.v.setTripleAt(p0-v0+round,p1-v1,p0-v0+cPoint,p1-v1,p0-v0+round,p1-v1,2, true);
                    this.v.setTripleAt(p0-v0,p1-v1+round,p0-v0,p1-v1+round,p0-v0,p1-v1+cPoint,3, true);
                    this.v.setTripleAt(p0-v0,p1+v1-round,p0-v0,p1+v1-cPoint,p0-v0,p1+v1-round,4, true);
                    this.v.setTripleAt(p0-v0+round,p1+v1,p0-v0+round,p1+v1,p0-v0+cPoint,p1+v1,5, true);
                    this.v.setTripleAt(p0+v0-round,p1+v1,p0+v0-cPoint,p1+v1,p0+v0-round,p1+v1,6, true);
                    this.v.setTripleAt(p0+v0,p1+v1-round,p0+v0,p1+v1-round,p0+v0,p1+v1-cPoint,7, true);
                } else {
                    this.v.setTripleAt(p0-v0,p1-v1,p0-v0+cPoint,p1-v1,p0-v0,p1-v1,1, true);
                    this.v.setTripleAt(p0-v0,p1+v1,p0-v0,p1+v1-cPoint,p0-v0,p1+v1,2, true);
                    this.v.setTripleAt(p0+v0,p1+v1,p0+v0-cPoint,p1+v1,p0+v0,p1+v1,3, true);

                }
            }
        }

        return function RectShapeProperty(elem,data) {
            this.v = shape_pool.newShape();
            this.v.c = true;
            this.localShapeCollection = shapeCollection_pool.newShapeCollection();
            this.localShapeCollection.addShape(this.v);
            this.paths = this.localShapeCollection;
            this.elem = elem;
            this.comp = elem.comp;
            this.frameId = -1;
            this.d = data.d;
            this.dynamicProperties = [];
            this.mdf = false;
            this.getValue = processKeys;
            this.convertRectToPath = convertRectToPath;
            this.reset = resetShape;
            this.p = PropertyFactory.getProp(elem,data.p,1,0,this.dynamicProperties);
            this.s = PropertyFactory.getProp(elem,data.s,1,0,this.dynamicProperties);
            this.r = PropertyFactory.getProp(elem,data.r,0,0,this.dynamicProperties);
            if(this.dynamicProperties.length){
                this.k = true;
            }else{
                this.convertRectToPath();
            }
        }
    }());

    function getShapeProp(elem,data,type, arr){
        var prop;
        if(type === 3 || type === 4){
            var dataProp = type === 3 ? data.pt : data.ks;
            var keys = dataProp.k;
            if(dataProp.a === 1 || keys.length){
                prop = new KeyframedShapeProperty(elem, data, type);
            }else{
                prop = new ShapeProperty(elem, data, type);
            }
        }else if(type === 5){
            prop = new RectShapeProperty(elem, data);
        }else if(type === 6){
            prop = new EllShapeProperty(elem, data);
        }else if(type === 7){
            prop = new StarShapeProperty(elem, data);
        }
        if(prop.k){
            arr.push(prop);
        }
        return prop;
    }

    var ob = {};
    ob.getShapeProp = getShapeProp;
    return ob;
}());
var ShapeModifiers = (function(){
    var ob = {};
    var modifiers = {};
    ob.registerModifier = registerModifier;
    ob.getModifier = getModifier;

    function registerModifier(nm,factory){
        if(!modifiers[nm]){
            modifiers[nm] = factory;
        }
    }

    function getModifier(nm,elem, data, dynamicProperties){
        return new modifiers[nm](elem, data, dynamicProperties);
    }

    return ob;
}());

function ShapeModifier(){}
ShapeModifier.prototype.initModifierProperties = function(){};
ShapeModifier.prototype.addShapeToModifier = function(){};
ShapeModifier.prototype.addShape = function(data){
    if(!this.closed){
        this.shapes.push({shape:data.sh, data: data, localShapeCollection:shapeCollection_pool.newShapeCollection()});
        this.addShapeToModifier(data.sh);
    }
}
ShapeModifier.prototype.init = function(elem,data,dynamicProperties){
    this.elem = elem;
    this.frameId = -1;
    this.shapes = [];
    this.dynamicProperties = [];
    this.mdf = false;
    this.closed = false;
    this.k = false;
    this.comp = elem.comp;
    this.initModifierProperties(elem,data);
    if(this.dynamicProperties.length){
        this.k = true;
        dynamicProperties.push(this);
    }else{
        this.getValue(true);
    }
}
function TrimModifier(){};
extendPrototype(ShapeModifier,TrimModifier);
TrimModifier.prototype.processKeys = function(forceRender){
    if(this.elem.globalData.frameId === this.frameId && !forceRender){
        return;
    }
    this.mdf = forceRender ? true : false;
    this.frameId = this.elem.globalData.frameId;
    var i, len = this.dynamicProperties.length;

    for(i=0;i<len;i+=1){
        this.dynamicProperties[i].getValue();
        if(this.dynamicProperties[i].mdf){
            this.mdf = true;
        }
    }
    if(this.mdf || forceRender){
        var o = (this.o.v%360)/360;
        if(o < 0){
            o += 1;
        }
        var s = this.s.v + o;
        var e = this.e.v + o;
        if(s == e){

        }
        if(s>e){
            var _s = s;
            s = e;
            e = _s;
        }
        this.sValue = s;
        this.eValue = e;
        this.oValue = o;
    }
}
TrimModifier.prototype.initModifierProperties = function(elem,data){
    this.sValue = 0;
    this.eValue = 0;
    this.oValue = 0;
    this.getValue = this.processKeys;
    this.s = PropertyFactory.getProp(elem,data.s,0,0.01,this.dynamicProperties);
    this.e = PropertyFactory.getProp(elem,data.e,0,0.01,this.dynamicProperties);
    this.o = PropertyFactory.getProp(elem,data.o,0,0,this.dynamicProperties);
    this.m = data.m;
    if(!this.dynamicProperties.length){
        this.getValue(true);
    }
};

TrimModifier.prototype.getSegmentsLength = function(shapeData){
    var closed = shapeData.c;
    var pathV = shapeData.v;
    var pathO = shapeData.o;
    var pathI = shapeData.i;
    var i, len = shapeData._length;
    var lengths = [];
    var totalLength = 0;
    for(i=0;i<len-1;i+=1){
        lengths[i] = bez.getBezierLength(pathV[i],pathV[i+1],pathO[i],pathI[i+1]);
        totalLength += lengths[i].addedLength;
    }
    if(closed){
        lengths[i] = bez.getBezierLength(pathV[i],pathV[0],pathO[i],pathI[0]);
        totalLength += lengths[i].addedLength;
    }
    return {lengths:lengths,totalLength:totalLength};
}

TrimModifier.prototype.calculateShapeEdges = function(s, e, shapeLength, addedLength, totalModifierLength) {
    var segments = []
    if(e <= 1){
        segments.push({
            s: s,
            e: e
        })
    }else if(s >= 1){
        segments.push({
            s: s - 1,
            e: e - 1
        })
    }else{
        segments.push({
            s: s,
            e: 1
        })
        segments.push({
            s: 0,
            e: e - 1
        })
    }
    var shapeSegments = [];
    var i, len = segments.length, segmentOb;
    for(i = 0; i < len; i += 1) {
        segmentOb = segments[i];
        if (segmentOb.e * totalModifierLength < addedLength || segmentOb.s * totalModifierLength > addedLength + shapeLength) {
            
        } else {
            var shapeS, shapeE;
            if(segmentOb.s * totalModifierLength <= addedLength) {
                shapeS = 0;
            } else {
                shapeS = (segmentOb.s * totalModifierLength - addedLength) / shapeLength;
            }
            if(segmentOb.e * totalModifierLength >= addedLength + shapeLength) {
                shapeE = 1;
            } else {
                shapeE = ((segmentOb.e * totalModifierLength - addedLength) / shapeLength);
            }
            shapeSegments.push([shapeS, shapeE]);
        }
    }
    if(!shapeSegments.length){
        shapeSegments.push([0,0]);
    }
    return shapeSegments;
}

TrimModifier.prototype.processShapes = function(firstFrame){
    var shapePaths;
    var i, len = this.shapes.length;
    var j, jLen;
    var s = this.sValue;
    var e = this.eValue;
    var pathsData,pathData, totalShapeLength, totalModifierLength = 0;

    if(e === s){
        for(i=0;i<len;i+=1){
            this.shapes[i].localShapeCollection.releaseShapes();
            this.shapes[i].shape.mdf = true;
            this.shapes[i].shape.paths = this.shapes[i].localShapeCollection;
        }
    } else if(!((e === 1 && s === 0) || (e===0 && s === 1))){
        var segments = [], shapeData, localShapeCollection;
        for(i=0;i<len;i+=1){
            shapeData = this.shapes[i];
            if(!shapeData.shape.mdf && !this.mdf && !firstFrame && this.m !== 2){
                shapeData.shape.paths = shapeData.localShapeCollection;
            } else {
                shapePaths = shapeData.shape.paths;
                jLen = shapePaths._length;
                totalShapeLength = 0;
                if(!shapeData.shape.mdf && shapeData.pathsData){
                    totalShapeLength = shapeData.totalShapeLength;
                } else {
                    pathsData = [];
                    for(j=0;j<jLen;j+=1){
                        pathData = this.getSegmentsLength(shapePaths.shapes[j]);
                        pathsData.push(pathData);
                        totalShapeLength += pathData.totalLength;
                    }
                    shapeData.totalShapeLength = totalShapeLength;
                    shapeData.pathsData = pathsData;
                }

                totalModifierLength += totalShapeLength;
                shapeData.shape.mdf = true;
            }
        }
        var shapeS = s, shapeE = e, addedLength = 0;
        var j, jLen;
        for(i = len - 1; i >= 0; i -= 1){
            shapeData = this.shapes[i];
            if (shapeData.shape.mdf) {
                localShapeCollection = shapeData.localShapeCollection;
                localShapeCollection.releaseShapes();
                if(this.m === 2 && len > 1) {
                    var edges = this.calculateShapeEdges(s, e, shapeData.totalShapeLength, addedLength, totalModifierLength);
                    addedLength += shapeData.totalShapeLength;
                } else {
                    edges = [[shapeS, shapeE]]
                }
                jLen = edges.length;
                for (j = 0; j < jLen; j += 1) {
                    shapeS = edges[j][0];
                    shapeE = edges[j][1];
                    segments.length = 0;
                    if(shapeE <= 1){
                        segments.push({
                            s:shapeData.totalShapeLength * shapeS,
                            e:shapeData.totalShapeLength * shapeE
                        })
                    }else if(shapeS >= 1){
                        segments.push({
                            s:shapeData.totalShapeLength * (shapeS - 1),
                            e:shapeData.totalShapeLength * (shapeE - 1)
                        })
                    }else{
                        segments.push({
                            s:shapeData.totalShapeLength * shapeS,
                            e:shapeData.totalShapeLength
                        })
                        segments.push({
                            s:0,
                            e:shapeData.totalShapeLength*(shapeE - 1)
                        })
                    }
                    var newShapesData = this.addShapes(shapeData,segments[0]);
                    if (segments[0].s !== segments[0].e) {
                        var lastPos;
                        if(segments.length > 1){
                            if(shapeData.shape.v.c){
                                var lastShape = newShapesData.pop();
                                this.addPaths(newShapesData, localShapeCollection);
                                newShapesData = this.addShapes(shapeData,segments[1], lastShape);
                            } else {
                                this.addPaths(newShapesData, localShapeCollection);
                                newShapesData = this.addShapes(shapeData,segments[1]);
                            }
                        } 
                        this.addPaths(newShapesData, localShapeCollection);
                    }
                    
                }
                shapeData.shape.paths = localShapeCollection;
            }
        }
    } else if(this.mdf){
        for(i=0;i<len;i+=1){
            this.shapes[i].shape.mdf = true;
        }
    }
    if(!this.dynamicProperties.length){
        this.mdf = false;
    }
}

TrimModifier.prototype.addPaths = function(newPaths, localShapeCollection) {
    var i, len = newPaths.length;
    for(i = 0; i < len; i += 1) {
        localShapeCollection.addShape(newPaths[i])
    }
}

TrimModifier.prototype.addSegment = function(pt1,pt2,pt3,pt4,shapePath,pos, newShape) {
    /*console.log(pt1, 'vertex: v, at: ', pos);
    console.log(pt2, 'vertex: o, at: ', pos);
    console.log(pt3, 'vertex: i, at: ', pos + 1);
    console.log(pt4, 'vertex: v, at: ', pos + 1);
    console.log('newShape: ', newShape);*/
    shapePath.setXYAt(pt2[0],pt2[1],'o',pos);
    shapePath.setXYAt(pt3[0],pt3[1],'i',pos + 1);
    if(newShape){
        shapePath.setXYAt(pt1[0],pt1[1],'v',pos);
    }
    shapePath.setXYAt(pt4[0],pt4[1],'v',pos + 1);
}

TrimModifier.prototype.addShapes = function(shapeData, shapeSegment, shapePath){
    var pathsData = shapeData.pathsData;
    var shapePaths = shapeData.shape.paths.shapes;
    var i, len = shapeData.shape.paths._length, j, jLen;
    var addedLength = 0;
    var currentLengthData,segmentCount;
    var lengths;
    var segment;
    var shapes = [];
    var initPos;
    var newShape = true;
    if(!shapePath){
        shapePath = shape_pool.newShape();
        segmentCount = 0;
        initPos = 0;
    } else {
        segmentCount = shapePath._length;
        initPos = shapePath._length;
    }
    shapes.push(shapePath);
    for(i=0;i<len;i+=1){
        lengths = pathsData[i].lengths;
        shapePath.c = shapePaths[i].c;
        jLen = shapePaths[i].c ? lengths.length : lengths.length + 1;
        for(j=1;j<jLen;j+=1){
            currentLengthData = lengths[j-1];
            if(addedLength + currentLengthData.addedLength < shapeSegment.s){
                addedLength += currentLengthData.addedLength;
                shapePath.c = false;
            } else if(addedLength > shapeSegment.e){
                shapePath.c = false;
                break;
            } else {
                if(shapeSegment.s <= addedLength && shapeSegment.e >= addedLength + currentLengthData.addedLength){
                    this.addSegment(shapePaths[i].v[j-1],shapePaths[i].o[j-1],shapePaths[i].i[j],shapePaths[i].v[j],shapePath,segmentCount,newShape);
                    newShape = false;
                } else {
                    segment = bez.getNewSegment(shapePaths[i].v[j-1],shapePaths[i].v[j],shapePaths[i].o[j-1],shapePaths[i].i[j], (shapeSegment.s - addedLength)/currentLengthData.addedLength,(shapeSegment.e - addedLength)/currentLengthData.addedLength, lengths[j-1]);
                    this.addSegment(segment.pt1,segment.pt3,segment.pt4,segment.pt2,shapePath,segmentCount,newShape);
                    newShape = false;
                    shapePath.c = false;
                }
                addedLength += currentLengthData.addedLength;
                segmentCount += 1;
            }
        }
        if(shapePaths[i].c){
            currentLengthData = lengths[j-1];
            if(addedLength <= shapeSegment.e){
                var segmentLength = lengths[j-1].addedLength;
                if(shapeSegment.s <= addedLength && shapeSegment.e >= addedLength + segmentLength){
                    this.addSegment(shapePaths[i].v[j-1],shapePaths[i].o[j-1],shapePaths[i].i[0],shapePaths[i].v[0],shapePath,segmentCount,newShape);
                    newShape = false;
                }else{
                    segment = bez.getNewSegment(shapePaths[i].v[j-1],shapePaths[i].v[0],shapePaths[i].o[j-1],shapePaths[i].i[0], (shapeSegment.s - addedLength)/segmentLength,(shapeSegment.e - addedLength)/segmentLength, lengths[j-1]);
                    this.addSegment(segment.pt1,segment.pt3,segment.pt4,segment.pt2,shapePath,segmentCount,newShape);
                    newShape = false;
                    shapePath.c = false;
                }
            } else {
                shapePath.c = false;
            }
            addedLength += currentLengthData.addedLength;
            segmentCount += 1;
        }
        if(shapePath._length){
            shapePath.setXYAt(shapePath.v[initPos][0],shapePath.v[initPos][1],'i',initPos);
            shapePath.setXYAt(shapePath.v[shapePath._length - 1][0],shapePath.v[shapePath._length - 1][1],'o',shapePath._length - 1);
        }
        if(addedLength > shapeSegment.e){
            break;
        }
        if(i<len-1){
            shapePath = shape_pool.newShape();
            newShape = true;
            shapes.push(shapePath);
            segmentCount = 0;
        }
    }
    return shapes;

}


ShapeModifiers.registerModifier('tm',TrimModifier);
function RoundCornersModifier(){};
extendPrototype(ShapeModifier,RoundCornersModifier);
RoundCornersModifier.prototype.processKeys = function(forceRender){
    if(this.elem.globalData.frameId === this.frameId && !forceRender){
        return;
    }
    this.mdf = forceRender ? true : false;
    this.frameId = this.elem.globalData.frameId;
    var i, len = this.dynamicProperties.length;

    for(i=0;i<len;i+=1){
        this.dynamicProperties[i].getValue();
        if(this.dynamicProperties[i].mdf){
            this.mdf = true;
        }
    }
}
RoundCornersModifier.prototype.initModifierProperties = function(elem,data){
    this.getValue = this.processKeys;
    this.rd = PropertyFactory.getProp(elem,data.r,0,null,this.dynamicProperties);
    if(!this.dynamicProperties.length){
        this.getValue(true);
    }
};

RoundCornersModifier.prototype.processPath = function(path, round){
    var cloned_path = shape_pool.newShape();
    cloned_path.c = path.c;
    var i, len = path._length;
    var currentV,currentI,currentO,closerV, newV,newO,newI,distance,newPosPerc,index = 0;
    var vX,vY,oX,oY,iX,iY;
    for(i=0;i<len;i+=1){
        currentV = path.v[i];
        currentO = path.o[i];
        currentI = path.i[i];
        if(currentV[0]===currentO[0] && currentV[1]===currentO[1] && currentV[0]===currentI[0] && currentV[1]===currentI[1]){
            if((i===0 || i === len - 1) && !path.c){
                cloned_path.setTripleAt(currentV[0],currentV[1],currentO[0],currentO[1],currentI[0],currentI[1],index);
                /*cloned_path.v[index] = currentV;
                cloned_path.o[index] = currentO;
                cloned_path.i[index] = currentI;*/
                index += 1;
            } else {
                if(i===0){
                    closerV = path.v[len-1];
                } else {
                    closerV = path.v[i-1];
                }
                distance = Math.sqrt(Math.pow(currentV[0]-closerV[0],2)+Math.pow(currentV[1]-closerV[1],2));
                newPosPerc = distance ? Math.min(distance/2,round)/distance : 0;
                vX = iX = currentV[0]+(closerV[0]-currentV[0])*newPosPerc;
                vY = iY = currentV[1]-(currentV[1]-closerV[1])*newPosPerc;
                oX = vX-(vX-currentV[0])*roundCorner;
                oY = vY-(vY-currentV[1])*roundCorner;
                cloned_path.setTripleAt(vX,vY,oX,oY,iX,iY,index);
                /*newV = [currentV[0]+(closerV[0]-currentV[0])*newPosPerc,currentV[1]-(currentV[1]-closerV[1])*newPosPerc];
                newI = newV;
                newO = [newV[0]-(newV[0]-currentV[0])*roundCorner,newV[1]-(newV[1]-currentV[1])*roundCorner];
                cloned_path.v[index] = newV;
                cloned_path.i[index] = newI;
                cloned_path.o[index] = newO;*/
                index += 1;

                if(i === len - 1){
                    closerV = path.v[0];
                } else {
                    closerV = path.v[i+1];
                }
                distance = Math.sqrt(Math.pow(currentV[0]-closerV[0],2)+Math.pow(currentV[1]-closerV[1],2));
                newPosPerc = distance ? Math.min(distance/2,round)/distance : 0;
                vX = oX = currentV[0]+(closerV[0]-currentV[0])*newPosPerc;
                vY = oY = currentV[1]+(closerV[1]-currentV[1])*newPosPerc;
                iX = vX-(vX-currentV[0])*roundCorner;
                iY = vY-(vY-currentV[1])*roundCorner;
                cloned_path.setTripleAt(vX,vY,oX,oY,iX,iY,index);

                /*newV = [currentV[0]+(closerV[0]-currentV[0])*newPosPerc,currentV[1]+(closerV[1]-currentV[1])*newPosPerc];
                newI = [newV[0]-(newV[0]-currentV[0])*roundCorner,newV[1]-(newV[1]-currentV[1])*roundCorner];
                newO = newV;
                cloned_path.v[index] = newV;
                cloned_path.i[index] = newI;
                cloned_path.o[index] = newO;*/
                index += 1;
            }
        } else {
            /*cloned_path.v[index] = path.v[i];
            cloned_path.o[index] = path.o[i];
            cloned_path.i[index] = path.i[i];*/
            cloned_path.setTripleAt(path.v[i][0],path.v[i][1],path.o[i][0],path.o[i][1],path.i[i][0],path.i[i][1],index);
            index += 1;
        }
    }
    return cloned_path;
}

RoundCornersModifier.prototype.processShapes = function(firstFrame){
    var shapePaths;
    var i, len = this.shapes.length;
    var j, jLen;
    var rd = this.rd.v;

    if(rd !== 0){
        var shapeData, newPaths, localShapeCollection;
        for(i=0;i<len;i+=1){
            shapeData = this.shapes[i];
            newPaths = shapeData.shape.paths;
            localShapeCollection = shapeData.localShapeCollection;
            if(!(!shapeData.shape.mdf && !this.mdf && !firstFrame)){
                localShapeCollection.releaseShapes();
                shapeData.shape.mdf = true;
                shapePaths = shapeData.shape.paths.shapes;
                jLen = shapeData.shape.paths._length;
                for(j=0;j<jLen;j+=1){
                    localShapeCollection.addShape(this.processPath(shapePaths[j],rd));
                }
            }
            shapeData.shape.paths = shapeData.localShapeCollection;
        }

    }
    if(!this.dynamicProperties.length){
        this.mdf = false;
    }
}


ShapeModifiers.registerModifier('rd',RoundCornersModifier);
function RepeaterModifier(){};
RepeaterModifier.prototype.processKeys = function(forceRender){
    if(this.elem.globalData.frameId === this.frameId && !forceRender){
        return;
    }
    this.mdf = forceRender ? true : false;
    var i, len = this.dynamicProperties.length;

    for(i=0;i<len;i+=1){
        this.dynamicProperties[i].getValue();
        if(this.dynamicProperties[i].mdf){
            this.mdf = true;
        }
    }
};

RepeaterModifier.prototype.initModifierProperties = function(elem,data){
    this.getValue = this.processKeys;
    this.c = PropertyFactory.getProp(elem,data.c,0,null,this.dynamicProperties);
    this.o = PropertyFactory.getProp(elem,data.o,0,null,this.dynamicProperties);
    this.tr = PropertyFactory.getProp(elem,data.tr,2,null,this.dynamicProperties);
    this.data = data;
    if(!this.dynamicProperties.length){
        this.getValue(true);
    }
    this.pMatrix = new Matrix();
    this.rMatrix = new Matrix();
    this.sMatrix = new Matrix();
    this.tMatrix = new Matrix();
    this.matrix = new Matrix();
};

RepeaterModifier.prototype.applyTransforms = function(pMatrix, rMatrix, sMatrix, transform, perc, inv){
    var dir = inv ? -1 : 1;
    var scaleX = transform.s.v[0] + (1 - transform.s.v[0]) * (1 - perc);
    var scaleY = transform.s.v[1] + (1 - transform.s.v[1]) * (1 - perc);
    pMatrix.translate(transform.p.v[0] * dir * perc, transform.p.v[1] * dir * perc, transform.p.v[2]);
    rMatrix.translate(-transform.a.v[0], -transform.a.v[1], transform.a.v[2]);
    rMatrix.rotate(-transform.r.v * dir * perc);
    rMatrix.translate(transform.a.v[0], transform.a.v[1], transform.a.v[2]);
    sMatrix.translate(-transform.a.v[0], -transform.a.v[1], transform.a.v[2]);
    sMatrix.scale(inv ? 1/scaleX : scaleX, inv ? 1/scaleY : scaleY);
    sMatrix.translate(transform.a.v[0], transform.a.v[1], transform.a.v[2]);
}

RepeaterModifier.prototype.init = function(elem, arr, pos, elemsData, dynamicProperties) {
    this.elem = elem;
    this.arr = arr;
    this.pos = pos;
    this.elemsData = elemsData;
    this._currentCopies = 0;
    this._elements = [];
    this._groups = [];
    this.dynamicProperties = [];
    this.frameId = -1;
    this.initModifierProperties(elem,arr[pos]);
    var cont = 0;
    while(pos>0){
        pos -= 1;
        //this._elements.unshift(arr.splice(pos,1)[0]);
        this._elements.unshift(arr[pos]);
        cont += 1;
    }
    if(this.dynamicProperties.length){
        this.k = true;
        dynamicProperties.push(this);
    }else{
        this.getValue(true);
    }
}

RepeaterModifier.prototype.resetElements = function(elements){
    var i, len = elements.length;
    for(i = 0; i < len; i += 1) {
        elements[i]._processed = false;
        if(elements[i].ty === 'gr'){
            this.resetElements(elements[i].it);
        }
    }
}

RepeaterModifier.prototype.cloneElements = function(elements){
    var i, len = elements.length;
    var newElements = JSON.parse(JSON.stringify(elements));
    this.resetElements(newElements);
    return newElements;
}

RepeaterModifier.prototype.changeGroupRender = function(elements, renderFlag) {
    var i, len = elements.length;
    for(i = 0; i < len ; i += 1) {
        elements[i]._render = renderFlag;
        if(elements[i].ty === 'gr') {
            this.changeGroupRender(elements[i].it, renderFlag);
        }
    }
}

RepeaterModifier.prototype.processShapes = function(firstFrame){

    if(this.elem.globalData.frameId === this.frameId){
        return;
    }
    this.frameId = this.elem.globalData.frameId;
    if(!this.dynamicProperties.length && !firstFrame){
        this.mdf = false;
    }
    if(this.mdf){
        var copies = Math.ceil(this.c.v);
        if(this._groups.length < copies){
            while(this._groups.length < copies){
                var group = {
                    it:this.cloneElements(this._elements),
                    ty:'gr'
                }
                group.it.push({"a":{"a":0,"ix":1,"k":[0,0]},"nm":"Transform","o":{"a":0,"ix":7,"k":100},"p":{"a":0,"ix":2,"k":[0,0]},"r":{"a":0,"ix":6,"k":0},"s":{"a":0,"ix":3,"k":[100,100]},"sa":{"a":0,"ix":5,"k":0},"sk":{"a":0,"ix":4,"k":0},"ty":"tr"});
                
                this.arr.splice(0,0,group);
                this._groups.splice(0,0,group);
                this._currentCopies += 1;
            }
            this.elem.reloadShapes();
        }
        var i, cont = 0, renderFlag;
        for(i = 0; i  <= this._groups.length - 1; i += 1){
            renderFlag = cont < copies;
            this._groups[i]._render = renderFlag;
            this.changeGroupRender(this._groups[i].it, renderFlag);
            cont += 1;
        }
        
        this._currentCopies = copies;
        this.elem.firstFrame = true;
        ////

        var offset = this.o.v;
        var offsetModulo = offset%1;
        var roundOffset = offset > 0 ? Math.floor(offset) : Math.ceil(offset);
        var k;
        var tMat = this.tr.v.props;
        var pProps = this.pMatrix.props;
        var rProps = this.rMatrix.props;
        var sProps = this.sMatrix.props;
        this.pMatrix.reset();
        this.rMatrix.reset();
        this.sMatrix.reset();
        this.tMatrix.reset();
        this.matrix.reset();
        var iteration = 0;

        if(offset > 0) {
            while(iteration<roundOffset){
                this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false);
                iteration += 1;
            }
            if(offsetModulo){
                this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, offsetModulo, false);
                iteration += offsetModulo;
            }
        } else if(offset < 0) {
            while(iteration>roundOffset){
                this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, true);
                iteration -= 1;
            }
            if(offsetModulo){
                this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, - offsetModulo, true);
                iteration -= offsetModulo;
            }
        }
        i = this.data.m === 1 ? 0 : this._currentCopies - 1;
        var dir = this.data.m === 1 ? 1 : -1;
        cont = this._currentCopies;
        while(cont){
            if(iteration !== 0){
                if((i !== 0 && dir === 1) || (i !== this._currentCopies - 1 && dir === -1)){
                    this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false);
                }
                this.matrix.transform(rProps[0],rProps[1],rProps[2],rProps[3],rProps[4],rProps[5],rProps[6],rProps[7],rProps[8],rProps[9],rProps[10],rProps[11],rProps[12],rProps[13],rProps[14],rProps[15]);
                this.matrix.transform(sProps[0],sProps[1],sProps[2],sProps[3],sProps[4],sProps[5],sProps[6],sProps[7],sProps[8],sProps[9],sProps[10],sProps[11],sProps[12],sProps[13],sProps[14],sProps[15]);
                this.matrix.transform(pProps[0],pProps[1],pProps[2],pProps[3],pProps[4],pProps[5],pProps[6],pProps[7],pProps[8],pProps[9],pProps[10],pProps[11],pProps[12],pProps[13],pProps[14],pProps[15]);
                var items = this.elemsData[i].it;
                var itemsTransform = items[items.length - 1].transform.mProps.v.props;
                var j, jLen = itemsTransform.length;
                for(j=0;j<jLen;j+=1) {
                    itemsTransform[j] = this.matrix.props[j];
                }
                this.matrix.reset();
            } else {
                this.matrix.reset();
                var items = this.elemsData[i].it;
                var itemsTransform = items[items.length - 1].transform.mProps.v.props;
                var j, jLen = itemsTransform.length;
                for(j=0;j<jLen;j+=1) {
                    itemsTransform[j] = this.matrix.props[j];
                }
            }
            iteration += 1;
            cont -= 1;
            i += dir;
        }
    }
}

RepeaterModifier.prototype.addShape = function(){}

ShapeModifiers.registerModifier('rp',RepeaterModifier);
function ShapeCollection(){
	this._length = 0;
	this._maxLength = 4;
	this.shapes = Array.apply(null,{length:this._maxLength});
};

ShapeCollection.prototype.addShape = function(shapeData){
	if(this._length === this._maxLength){
		this.shapes = this.shapes.concat(Array.apply(null,{length:this._maxLength}));
		this._maxLength *= 2;
	}
	this.shapes[this._length] = shapeData;
	this._length += 1;
};

ShapeCollection.prototype.releaseShapes = function(){
	var i;
	for(i = 0; i < this._length; i += 1) {
		shape_pool.release(this.shapes[i]);
	}
	this._length = 0;
};
var ImagePreloader = (function(){

    function imageLoaded(){
        this.loadedAssets += 1;
        if(this.loadedAssets === this.totalImages){
        }
    }

    function getAssetsPath(assetData){
        var path = '';
        if(this.assetsPath){
            var imagePath = assetData.p;
            if(imagePath.indexOf('images/') !== -1){
                imagePath = imagePath.split('/')[1];
            }
            path = this.assetsPath + imagePath;
        } else {
            path = this.path;
            path += assetData.u ? assetData.u : '';
            path += assetData.p;
        }
        return path;
    }

    function loadImage(path){
        var img = document.createElement('img');
        img.addEventListener('load', imageLoaded.bind(this), false);
        img.addEventListener('error', imageLoaded.bind(this), false);
        img.src = path;
    }
    function loadAssets(assets){
        this.totalAssets = assets.length;
        var i;
        for(i=0;i<this.totalAssets;i+=1){
            if(!assets[i].layers){
                loadImage.bind(this)(getAssetsPath.bind(this)(assets[i]));
                this.totalImages += 1;
            }
        }
    }

    function setPath(path){
        this.path = path || '';
    }

    function setAssetsPath(path){
        this.assetsPath = path || '';
    }

    return function ImagePreloader(){
        this.loadAssets = loadAssets;
        this.setAssetsPath = setAssetsPath;
        this.setPath = setPath;
        this.assetsPath = '';
        this.path = '';
        this.totalAssets = 0;
        this.totalImages = 0;
        this.loadedAssets = 0;
    }
}());
var featureSupport = (function(){
	var ob = {
		maskType: true
	}
	if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) {
	   ob.maskType = false;
	}
	return ob;
}());
var filtersFactory = (function(){
	var ob = {};
	ob.createFilter = createFilter;
	ob.createAlphaToLuminanceFilter = createAlphaToLuminanceFilter;

	function createFilter(filId){
        	var fil = document.createElementNS(svgNS,'filter');
        	fil.setAttribute('id',filId);
                fil.setAttribute('filterUnits','objectBoundingBox');
                fil.setAttribute('x','0%');
                fil.setAttribute('y','0%');
                fil.setAttribute('width','100%');
                fil.setAttribute('height','100%');
                return fil;
	}

	function createAlphaToLuminanceFilter(){
                var feColorMatrix = document.createElementNS(svgNS,'feColorMatrix');
                feColorMatrix.setAttribute('type','matrix');
                feColorMatrix.setAttribute('color-interpolation-filters','sRGB');
                feColorMatrix.setAttribute('values','0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1');
                return feColorMatrix;
	}

	return ob;
}())
function TextAnimatorProperty(textData, renderType, elem){
    this.mdf = false;
    this._firstFrame = true;
	this._hasMaskedPath = false;
	this._frameId = -1;
	this._dynamicProperties = [];
	this._textData = textData;
	this._renderType = renderType;
	this._elem = elem;
	this._animatorsData = Array.apply(null,{length:this._textData.a.length});
	this._pathData = {}
	this._moreOptions = {
		alignment: {}
	};
	this.renderedLetters = [];
    this.lettersChangedFlag = false;

}

TextAnimatorProperty.prototype.searchProperties = function(dynamicProperties){
    var i, len = this._textData.a.length, animatorData, animatorProps;
    for(i=0;i<len;i+=1){
        animatorProps = this._textData.a[i];
        animatorData = {
            a: {},
            s: {}
        };
        if('r' in animatorProps.a) {
            animatorData.a.r = PropertyFactory.getProp(this._elem,animatorProps.a.r,0,degToRads,this._dynamicProperties);
        }
        if('rx' in animatorProps.a) {
            animatorData.a.rx = PropertyFactory.getProp(this._elem,animatorProps.a.rx,0,degToRads,this._dynamicProperties);
        }
        if('ry' in animatorProps.a) {
            animatorData.a.ry = PropertyFactory.getProp(this._elem,animatorProps.a.ry,0,degToRads,this._dynamicProperties);
        }
        if('sk' in animatorProps.a) {
            animatorData.a.sk = PropertyFactory.getProp(this._elem,animatorProps.a.sk,0,degToRads,this._dynamicProperties);
        }
        if('sa' in animatorProps.a) {
            animatorData.a.sa = PropertyFactory.getProp(this._elem,animatorProps.a.sa,0,degToRads,this._dynamicProperties);
        }
        if('s' in animatorProps.a) {
            animatorData.a.s = PropertyFactory.getProp(this._elem,animatorProps.a.s,1,0.01,this._dynamicProperties);
        }
        if('a' in animatorProps.a) {
            animatorData.a.a = PropertyFactory.getProp(this._elem,animatorProps.a.a,1,0,this._dynamicProperties);
        }
        if('o' in animatorProps.a) {
            animatorData.a.o = PropertyFactory.getProp(this._elem,animatorProps.a.o,0,0.01,this._dynamicProperties);
        }
        if('p' in animatorProps.a) {
            animatorData.a.p = PropertyFactory.getProp(this._elem,animatorProps.a.p,1,0,this._dynamicProperties);
        }
        if('sw' in animatorProps.a) {
            animatorData.a.sw = PropertyFactory.getProp(this._elem,animatorProps.a.sw,0,0,this._dynamicProperties);
        }
        if('sc' in animatorProps.a) {
            animatorData.a.sc = PropertyFactory.getProp(this._elem,animatorProps.a.sc,1,0,this._dynamicProperties);
        }
        if('fc' in animatorProps.a) {
            animatorData.a.fc = PropertyFactory.getProp(this._elem,animatorProps.a.fc,1,0,this._dynamicProperties);
        }
        if('fh' in animatorProps.a) {
            animatorData.a.fh = PropertyFactory.getProp(this._elem,animatorProps.a.fh,0,0,this._dynamicProperties);
        }
        if('fs' in animatorProps.a) {
            animatorData.a.fs = PropertyFactory.getProp(this._elem,animatorProps.a.fs,0,0.01,this._dynamicProperties);
        }
        if('fb' in animatorProps.a) {
            animatorData.a.fb = PropertyFactory.getProp(this._elem,animatorProps.a.fb,0,0.01,this._dynamicProperties);
        }
        if('t' in animatorProps.a) {
            animatorData.a.t = PropertyFactory.getProp(this._elem,animatorProps.a.t,0,0,this._dynamicProperties);
        }
        animatorData.s = PropertyFactory.getTextSelectorProp(this._elem,animatorProps.s,this._dynamicProperties);
        animatorData.s.t = animatorProps.s.t;
        this._animatorsData[i] = animatorData;
    }
    if(this._textData.p && 'm' in this._textData.p){
        this._pathData = {
            f: PropertyFactory.getProp(this._elem,this._textData.p.f,0,0,this._dynamicProperties),
            l: PropertyFactory.getProp(this._elem,this._textData.p.l,0,0,this._dynamicProperties),
            r: this._textData.p.r,
            m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
        };
        this._hasMaskedPath = true;
    } else {
        this._hasMaskedPath = false;
    }
    this._moreOptions.alignment = PropertyFactory.getProp(this._elem,this._textData.m.a,1,0,this._dynamicProperties);
    if(this._dynamicProperties.length) {
    	dynamicProperties.push(this);
    }
}

TextAnimatorProperty.prototype.getMeasures = function(documentData, lettersChangedFlag){
    this.lettersChangedFlag = lettersChangedFlag;
    if(!this.mdf && !this._firstFrame && !lettersChangedFlag && (!this._hasMaskedPath || !this._pathData.m.mdf)) {
        return;
    }
    this._firstFrame = false;
    var alignment = this._moreOptions.alignment.v;
    var animators = this._animatorsData;
    var textData = this._textData;
    var matrixHelper = this.mHelper;
    var renderType = this._renderType;
    var renderedLettersCount = this.renderedLetters.length;
    var data = this.data;
    var xPos,yPos;
    var i, len;
    var letters = documentData.l;
    if(this._hasMaskedPath) {
        var mask = this._pathData.m;
        if(!this._pathData.n || this._pathData.mdf){
            var paths = mask.v;
            if(this._pathData.r){
                paths = reversePath(paths);
            }
            var pathInfo = {
                tLength: 0,
                segments: []
            };
            len = paths._length - 1;
            var pathData;
            var totalLength = 0;
            for (i = 0; i < len; i += 1) {
                pathData = {
                    s: paths.v[i],
                    e: paths.v[i + 1],
                    to: [paths.o[i][0] - paths.v[i][0], paths.o[i][1] - paths.v[i][1]],
                    ti: [paths.i[i + 1][0] - paths.v[i + 1][0], paths.i[i + 1][1] - paths.v[i + 1][1]]
                };
                bez.buildBezierData(pathData);
                pathInfo.tLength += pathData.bezierData.segmentLength;
                pathInfo.segments.push(pathData);
                totalLength += pathData.bezierData.segmentLength;
            }
            i = len;
            if (mask.v.c) {
                pathData = {
                    s: paths.v[i],
                    e: paths.v[0],
                    to: [paths.o[i][0] - paths.v[i][0], paths.o[i][1] - paths.v[i][1]],
                    ti: [paths.i[0][0] - paths.v[0][0], paths.i[0][1] - paths.v[0][1]]
                };
                bez.buildBezierData(pathData);
                pathInfo.tLength += pathData.bezierData.segmentLength;
                pathInfo.segments.push(pathData);
                totalLength += pathData.bezierData.segmentLength;
            }
            this._pathData.pi = pathInfo;
        }
        var pathInfo = this._pathData.pi;

        var currentLength = this._pathData.f.v, segmentInd = 0, pointInd = 1, currentPoint, prevPoint, points;
        var segmentLength = 0, flag = true;
        var segments = pathInfo.segments;
        if (currentLength < 0 && mask.v.c) {
            if (pathInfo.tLength < Math.abs(currentLength)) {
                currentLength = -Math.abs(currentLength) % pathInfo.tLength;
            }
            segmentInd = segments.length - 1;
            points = segments[segmentInd].bezierData.points;
            pointInd = points.length - 1;
            while (currentLength < 0) {
                currentLength += points[pointInd].partialLength;
                pointInd -= 1;
                if (pointInd < 0) {
                    segmentInd -= 1;
                    points = segments[segmentInd].bezierData.points;
                    pointInd = points.length - 1;
                }
            }

        }
        points = segments[segmentInd].bezierData.points;
        prevPoint = points[pointInd - 1];
        currentPoint = points[pointInd];
        var partialLength = currentPoint.partialLength;
        var perc, tanAngle;
    }


    len = letters.length;
    xPos = 0;
    yPos = 0;
    var yOff = documentData.s*1.2*.714;
    var firstLine = true;
    var animatorProps, animatorSelector;
    var j, jLen;
    var lettersValue = Array.apply(null,{length:len}), letterValue;

    jLen = animators.length;
    if (lettersChangedFlag) {
        for (j = 0; j < jLen; j += 1) {
            animatorSelector = animators[j].s;
            animatorSelector.getValue(true);
        }
    }
    var lastLetter;

    var mult, ind = -1, offf, xPathPos, yPathPos;
    var initPathPos = currentLength,initSegmentInd = segmentInd, initPointInd = pointInd, currentLine = -1;
    var elemOpacity;
    var sc,sw,fc,k;
    var lineLength = 0;
    var letterSw,letterSc,letterFc,letterM = '',letterP = this.defaultPropsArray,letterO;
    for( i = 0; i < len; i += 1) {
        matrixHelper.reset();
        elemOpacity = 1;
        if(letters[i].n) {
            xPos = 0;
            yPos += documentData.yOffset;
            yPos += firstLine ? 1 : 0;
            currentLength = initPathPos ;
            firstLine = false;
            lineLength = 0;
            if(this._hasMaskedPath) {
                segmentInd = initSegmentInd;
                pointInd = initPointInd;
                points = segments[segmentInd].bezierData.points;
                prevPoint = points[pointInd - 1];
                currentPoint = points[pointInd];
                partialLength = currentPoint.partialLength;
                segmentLength = 0;
            }
            lettersValue[i] = this.emptyProp;
        }else{
            if(this._hasMaskedPath) {
                if(currentLine !== letters[i].line){
                    switch(documentData.j){
                        case 1:
                            currentLength += totalLength - documentData.lineWidths[letters[i].line];
                            break;
                        case 2:
                            currentLength += (totalLength - documentData.lineWidths[letters[i].line])/2;
                            break;
                    }
                    currentLine = letters[i].line;
                }
                if (ind !== letters[i].ind) {
                    if (letters[ind]) {
                        currentLength += letters[ind].extra;
                    }
                    currentLength += letters[i].an / 2;
                    ind = letters[i].ind;
                }
                currentLength += alignment[0] * letters[i].an / 200;
                var animatorOffset = 0;
                for (j = 0; j < jLen; j += 1) {
                    animatorProps = animators[j].a;
                    if ('p' in animatorProps) {
                        animatorSelector = animators[j].s;
                        mult = animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);
                        if(mult.length){
                            animatorOffset += animatorProps.p.v[0] * mult[0];
                        } else{
                            animatorOffset += animatorProps.p.v[0] * mult;
                        }

                    }
                    if ('a' in animatorProps) {
                        animatorSelector = animators[j].s;
                        mult = animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);
                        if(mult.length){
                            animatorOffset += animatorProps.a.v[0] * mult[0];
                        } else{
                            animatorOffset += animatorProps.a.v[0] * mult;
                        }

                    }
                }
                flag = true;
                while (flag) {
                    if (segmentLength + partialLength >= currentLength + animatorOffset || !points) {
                        perc = (currentLength + animatorOffset - segmentLength) / currentPoint.partialLength;
                        xPathPos = prevPoint.point[0] + (currentPoint.point[0] - prevPoint.point[0]) * perc;
                        yPathPos = prevPoint.point[1] + (currentPoint.point[1] - prevPoint.point[1]) * perc;
                        matrixHelper.translate(-alignment[0]*letters[i].an/200, -(alignment[1] * yOff / 100));
                        flag = false;
                    } else if (points) {
                        segmentLength += currentPoint.partialLength;
                        pointInd += 1;
                        if (pointInd >= points.length) {
                            pointInd = 0;
                            segmentInd += 1;
                            if (!segments[segmentInd]) {
                                if (mask.v.c) {
                                    pointInd = 0;
                                    segmentInd = 0;
                                    points = segments[segmentInd].bezierData.points;
                                } else {
                                    segmentLength -= currentPoint.partialLength;
                                    points = null;
                                }
                            } else {
                                points = segments[segmentInd].bezierData.points;
                            }
                        }
                        if (points) {
                            prevPoint = currentPoint;
                            currentPoint = points[pointInd];
                            partialLength = currentPoint.partialLength;
                        }
                    }
                }
                offf = letters[i].an / 2 - letters[i].add;
                matrixHelper.translate(-offf, 0, 0);
            } else {
                offf = letters[i].an/2 - letters[i].add;
                matrixHelper.translate(-offf,0,0);

                // Grouping alignment
                matrixHelper.translate(-alignment[0]*letters[i].an/200, -alignment[1]*yOff/100, 0);
            }

            lineLength += letters[i].l/2;
            for(j=0;j<jLen;j+=1){
                animatorProps = animators[j].a;
                if ('t' in animatorProps) {
                    animatorSelector = animators[j].s;
                    mult = animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);
                    if(this._hasMaskedPath) {
                        if(mult.length) {
                            currentLength += animatorProps.t*mult[0];
                        } else {
                            currentLength += animatorProps.t*mult;
                        }
                    }else{
                        if(mult.length) {
                            xPos += animatorProps.t.v*mult[0];
                        } else {
                            xPos += animatorProps.t.v*mult;
                        }
                    }
                }
            }
            lineLength += letters[i].l/2;
            if(documentData.strokeWidthAnim) {
                sw = documentData.sw || 0;
            }
            if(documentData.strokeColorAnim) {
                if(documentData.sc){
                    sc = [documentData.sc[0], documentData.sc[1], documentData.sc[2]];
                }else{
                    sc = [0,0,0];
                }
            }
            if(documentData.fillColorAnim && documentData.fc) {
                fc = [documentData.fc[0], documentData.fc[1], documentData.fc[2]];
            }
            for(j=0;j<jLen;j+=1){
                animatorProps = animators[j].a;
                if ('a' in animatorProps) {
                    animatorSelector = animators[j].s;
                    mult = animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);

                    if(mult.length){
                        matrixHelper.translate(-animatorProps.a.v[0]*mult[0], -animatorProps.a.v[1]*mult[1], animatorProps.a.v[2]*mult[2]);
                    } else {
                        matrixHelper.translate(-animatorProps.a.v[0]*mult, -animatorProps.a.v[1]*mult, animatorProps.a.v[2]*mult);
                    }
                }
            }
            for(j=0;j<jLen;j+=1){
                animatorProps = animators[j].a;
                if ('s' in animatorProps) {
                    animatorSelector = animators[j].s;
                    mult = animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);
                    if(mult.length){
                        matrixHelper.scale(1+((animatorProps.s.v[0]-1)*mult[0]),1+((animatorProps.s.v[1]-1)*mult[1]),1);
                    } else {
                        matrixHelper.scale(1+((animatorProps.s.v[0]-1)*mult),1+((animatorProps.s.v[1]-1)*mult),1);
                    }
                }
            }
            for(j=0;j<jLen;j+=1) {
                animatorProps = animators[j].a;
                animatorSelector = animators[j].s;
                mult = animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);
                if ('sk' in animatorProps) {
                    if(mult.length) {
                        matrixHelper.skewFromAxis(-animatorProps.sk.v * mult[0], animatorProps.sa.v * mult[1]);
                    } else {
                        matrixHelper.skewFromAxis(-animatorProps.sk.v * mult, animatorProps.sa.v * mult);
                    }
                }
                if ('r' in animatorProps) {
                    if(mult.length) {
                        matrixHelper.rotateZ(-animatorProps.r.v * mult[2]);
                    } else {
                        matrixHelper.rotateZ(-animatorProps.r.v * mult);
                    }
                }
                if ('ry' in animatorProps) {

                    if(mult.length) {
                        matrixHelper.rotateY(animatorProps.ry.v*mult[1]);
                    }else{
                        matrixHelper.rotateY(animatorProps.ry.v*mult);
                    }
                }
                if ('rx' in animatorProps) {
                    if(mult.length) {
                        matrixHelper.rotateX(animatorProps.rx.v*mult[0]);
                    } else {
                        matrixHelper.rotateX(animatorProps.rx.v*mult);
                    }
                }
                if ('o' in animatorProps) {
                    if(mult.length) {
                        elemOpacity += ((animatorProps.o.v)*mult[0] - elemOpacity)*mult[0];
                    } else {
                        elemOpacity += ((animatorProps.o.v)*mult - elemOpacity)*mult;
                    }
                }
                if (documentData.strokeWidthAnim && 'sw' in animatorProps) {
                    if(mult.length) {
                        sw += animatorProps.sw.v*mult[0];
                    } else {
                        sw += animatorProps.sw.v*mult;
                    }
                }
                if (documentData.strokeColorAnim && 'sc' in animatorProps) {
                    for(k=0;k<3;k+=1){
                        if(mult.length) {
                            sc[k] = Math.round(255*(sc[k] + (animatorProps.sc.v[k] - sc[k])*mult[0]));
                        } else {
                            sc[k] = Math.round(255*(sc[k] + (animatorProps.sc.v[k] - sc[k])*mult));
                        }
                    }
                }
                if (documentData.fillColorAnim && documentData.fc) {
                    if('fc' in animatorProps){
                        for(k=0;k<3;k+=1){
                            if(mult.length) {
                                fc[k] = fc[k] + (animatorProps.fc.v[k] - fc[k])*mult[0];
                            } else {
                                fc[k] = fc[k] + (animatorProps.fc.v[k] - fc[k])*mult;
                                //console.log('mult',mult);
                                //console.log(Math.round(fc[k] + (animatorProps.fc.v[k] - fc[k])*mult));
                            }
                        }
                    }
                    if('fh' in animatorProps){
                        if(mult.length) {
                            fc = addHueToRGB(fc,animatorProps.fh.v*mult[0]);
                        } else {
                            fc = addHueToRGB(fc,animatorProps.fh.v*mult);
                        }
                    }
                    if('fs' in animatorProps){
                        if(mult.length) {
                            fc = addSaturationToRGB(fc,animatorProps.fs.v*mult[0]);
                        } else {
                            fc = addSaturationToRGB(fc,animatorProps.fs.v*mult);
                        }
                    }
                    if('fb' in animatorProps){
                        if(mult.length) {
                            fc = addBrightnessToRGB(fc,animatorProps.fb.v*mult[0]);
                        } else {
                            fc = addBrightnessToRGB(fc,animatorProps.fb.v*mult);
                        }
                    }
                }
            }

            for(j=0;j<jLen;j+=1){
                animatorProps = animators[j].a;

                if ('p' in animatorProps) {
                    animatorSelector = animators[j].s;
                    mult = animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);
                    if(this._hasMaskedPath) {
                        if(mult.length) {
                            matrixHelper.translate(0, animatorProps.p.v[1] * mult[0], -animatorProps.p.v[2] * mult[1]);
                        } else {
                            matrixHelper.translate(0, animatorProps.p.v[1] * mult, -animatorProps.p.v[2] * mult);
                        }
                    }else{
                        if(mult.length) {
                            matrixHelper.translate(animatorProps.p.v[0] * mult[0], animatorProps.p.v[1] * mult[1], -animatorProps.p.v[2] * mult[2]);
                        } else {
                            matrixHelper.translate(animatorProps.p.v[0] * mult, animatorProps.p.v[1] * mult, -animatorProps.p.v[2] * mult);
                        }
                    }
                }
            }
            if(documentData.strokeWidthAnim){
                letterSw = sw < 0 ? 0 : sw;
            }
            if(documentData.strokeColorAnim){
                letterSc = 'rgb('+Math.round(sc[0]*255)+','+Math.round(sc[1]*255)+','+Math.round(sc[2]*255)+')';
            }
            if(documentData.fillColorAnim && documentData.fc){
                letterFc = 'rgb('+Math.round(fc[0]*255)+','+Math.round(fc[1]*255)+','+Math.round(fc[2]*255)+')';
            }

            if(this._hasMaskedPath) {
                matrixHelper.translate(0,-documentData.ls);

                matrixHelper.translate(0, alignment[1]*yOff/100 + yPos,0);
                if (textData.p.p) {
                    tanAngle = (currentPoint.point[1] - prevPoint.point[1]) / (currentPoint.point[0] - prevPoint.point[0]);
                    var rot = Math.atan(tanAngle) * 180 / Math.PI;
                    if (currentPoint.point[0] < prevPoint.point[0]) {
                        rot += 180;
                    }
                    matrixHelper.rotate(-rot * Math.PI / 180);
                }
                matrixHelper.translate(xPathPos, yPathPos, 0);
                currentLength -= alignment[0]*letters[i].an/200;
                if(letters[i+1] && ind !== letters[i+1].ind){
                    currentLength += letters[i].an / 2;
                    currentLength += documentData.tr/1000*documentData.s;
                }
            }else{

                matrixHelper.translate(xPos,yPos,0);

                if(documentData.ps){
                    //matrixHelper.translate(documentData.ps[0],documentData.ps[1],0);
                    matrixHelper.translate(documentData.ps[0],documentData.ps[1] + documentData.ascent,0);
                }
                switch(documentData.j){
                    case 1:
                        matrixHelper.translate(documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[letters[i].line]),0,0);
                        break;
                    case 2:
                        matrixHelper.translate(documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[letters[i].line])/2,0,0);
                        break;
                }
                matrixHelper.translate(0,-documentData.ls);
                matrixHelper.translate(offf,0,0);
                matrixHelper.translate(alignment[0]*letters[i].an/200,alignment[1]*yOff/100,0);
                xPos += letters[i].l + documentData.tr/1000*documentData.s;
            }
            if(renderType === 'html'){
                letterM = matrixHelper.toCSS();
            }else if(renderType === 'svg'){
                letterM = matrixHelper.to2dCSS();
            }else{
                letterP = [matrixHelper.props[0],matrixHelper.props[1],matrixHelper.props[2],matrixHelper.props[3],matrixHelper.props[4],matrixHelper.props[5],matrixHelper.props[6],matrixHelper.props[7],matrixHelper.props[8],matrixHelper.props[9],matrixHelper.props[10],matrixHelper.props[11],matrixHelper.props[12],matrixHelper.props[13],matrixHelper.props[14],matrixHelper.props[15]];
            }
            letterO = elemOpacity;

            if(renderedLettersCount <= i) {
                letterValue = new LetterProps(letterO,letterSw,letterSc,letterFc,letterM,letterP);
                this.renderedLetters.push(letterValue);
                renderedLettersCount += 1;
                this.lettersChangedFlag = true;
            } else {
                letterValue = this.renderedLetters[i];
                this.lettersChangedFlag = letterValue.update(letterO, letterSw, letterSc, letterFc, letterM, letterP) || this.lettersChangedFlag;
            }
        }
    }
}

TextAnimatorProperty.prototype.getValue = function(){
	if(this._elem.globalData.frameId === this._frameId){
        return;
    }
    this._frameId = this._elem.globalData.frameId;
	var i, len = this._dynamicProperties.length;
    this.mdf = false;
	for(i = 0; i < len; i += 1) {
		this._dynamicProperties[i].getValue();
        this.mdf = this._dynamicProperties[i].mdf || this.mdf;
	}
}

TextAnimatorProperty.prototype.mHelper = new Matrix();
TextAnimatorProperty.prototype.defaultPropsArray = [];
function LetterProps(o, sw, sc, fc, m, p){
    this.o = o;
    this.sw = sw;
    this.sc = sc;
    this.fc = fc;
    this.m = m;
    this.p = p;
    this.mdf = {
    	o: true,
    	sw: !!sw,
    	sc: !!sc,
    	fc: !!fc,
    	m: true,
    	p: true
    };
}

LetterProps.prototype.update = function(o, sw, sc, fc, m, p) {
	this.mdf.o = false;
	this.mdf.sw = false;
	this.mdf.sc = false;
	this.mdf.fc = false;
	this.mdf.m = false;
	this.mdf.p = false;
	var updated = false;

	if(this.o !== o) {
		this.o = o;
		this.mdf.o = true;
		updated = true;
	}
	if(this.sw !== sw) {
		this.sw = sw;
		this.mdf.sw = true;
		updated = true;
	}
	if(this.sc !== sc) {
		this.sc = sc;
		this.mdf.sc = true;
		updated = true;
	}
	if(this.fc !== fc) {
		this.fc = fc;
		this.mdf.fc = true;
		updated = true;
	}
	if(this.m !== m) {
		this.m = m;
		this.mdf.m = true;
		updated = true;
	}
	if(p.length && (this.p[0] !== p[0] || this.p[1] !== p[1] || this.p[4] !== p[4] || this.p[5] !== p[5] || this.p[12] !== p[12] || this.p[13] !== p[13])) {

		this.p = p;
		this.mdf.p = true;
		updated = true;
	}
	return updated;
}
var pooling = (function(){

	function double(arr){
		return arr.concat(Array.apply(null,{length:arr.length}))
	}

	return {
		double: double
	}
}());
var point_pool = (function(){
	var ob = {
		newPoint: newPoint,
		release: release
		/*,getLength:function(){return _length}
		,getCont:function(){return cont}*/
	}

	var _length = 0;
	var _maxLength = 8;
	var pool = Array.apply(null,{length:_maxLength});

	//var cont = 0;

	function newPoint(){
		//window.bm_newPoint = window.bm_newPoint ? window.bm_newPoint + 1 : 1;
		var point;
		if(_length){
			_length -= 1;
			point = pool[_length];
			//window.bm_reuse = window.bm_reuse ? window.bm_reuse + 1 : 1;
		} else {
			point = [0.1,0.1];
			//cont++;
			//console.log('new');
			//window.bm_new = window.bm_new ? window.bm_new + 1 : 1;
			//point._tst = cont++;
		}
		return point;
	}

	function release(point) {
		if(_length === _maxLength) {
			pool = pooling.double(pool);
			_maxLength = _maxLength*2;
		}
		pool[_length] = point;
		_length += 1;
		//window.bm_release = window.bm_release ? window.bm_release + 1 : 1;
		//console.log('release');
	}


	return ob;
}());
var shape_pool = (function(){
	var ob = {
		clone: clone,
		newShape: newShape,
		release: release,
		releaseArray: releaseArray
	}

	var _length = 0;
	var _maxLength = 4;
	var pool = Array.apply(null,{length:_maxLength});

	function newShape(){
		var shapePath;
		if(_length){
			_length -= 1;
			shapePath = pool[_length];
		} else {
			shapePath = new ShapePath();
		}
		return shapePath;
	}

	function release(shapePath) {
		if(_length === _maxLength) {
			pool = pooling.double(pool);
			_maxLength = _maxLength*2;
		}
		var len = shapePath._length, i;
		for(i = 0; i < len; i += 1) {
			point_pool.release(shapePath.v[i]);
			point_pool.release(shapePath.i[i]);
			point_pool.release(shapePath.o[i]);
			shapePath.v[i] = null;
			shapePath.i[i] = null;
			shapePath.o[i] = null;
		}
		shapePath._length = 0;
		shapePath.c = false;
		pool[_length] = shapePath;
		_length += 1;
	}

	function releaseArray(shapePathsCollection, length) {
		while(length--) {
			release(shapePathsCollection[length]);
		}
	}

	function clone(shape, transform) {
		var i, len = shape._length;
		var cloned = newShape();
		cloned._length = shape._length;
		cloned.c = shape.c;

		var pt;
		
		for(i = 0; i < len; i += 1) {
			if(transform){
				pt = transform.applyToPointArray(shape.v[i][0],shape.v[i][1],0,2);
				cloned.setXYAt(pt[0],pt[1],'v',i);
				point_pool.release(pt);
				pt = transform.applyToPointArray(shape.o[i][0],shape.o[i][1],0,2);
				cloned.setXYAt(pt[0],pt[1],'o',i);
				point_pool.release(pt);
				pt = transform.applyToPointArray(shape.i[i][0],shape.i[i][1],0,2);
				cloned.setXYAt(pt[0],pt[1],'i',i);
				point_pool.release(pt);
			}else{
				cloned.setTripleAt(shape.v[i][0],shape.v[i][1],shape.o[i][0],shape.o[i][1],shape.i[i][0],shape.i[i][1], i);
			}
		}
		return cloned
	}


	return ob;
}());
var shapeCollection_pool = (function(){
	var ob = {
		newShapeCollection: newShapeCollection,
		release: release,
		clone: clone
	}

	var _length = 0;
	var _maxLength = 4;
	var pool = Array.apply(null,{length:_maxLength});

	var cont = 0;

	function newShapeCollection(){
		var shapeCollection;
		if(_length){
			_length -= 1;
			shapeCollection = pool[_length];
		} else {
			shapeCollection = new ShapeCollection();
		}
		return shapeCollection;
	}

	function release(shapeCollection) {
		var i, len = shapeCollection._length;
		for(i = 0; i < len; i += 1) {
			shape_pool.release(shapeCollection.shapes[i]);
		}
		shapeCollection._length = 0;

		if(_length === _maxLength) {
			pool = pooling.double(pool);
			_maxLength = _maxLength*2;
		}
		pool[_length] = shapeCollection;
		_length += 1;
	}

	function clone(shapeCollection, originCollection) {
		release(shapeCollection);
		if(_length === _maxLength) {
			pool = pooling.double(pool);
			_maxLength = _maxLength*2;
		}
		pool[_length] = shapeCollection;
		_length += 1;
	}


	return ob;
}());
function BaseRenderer(){}
BaseRenderer.prototype.checkLayers = function(num){
    var i, len = this.layers.length, data;
    this.completeLayers = true;
    for (i = len - 1; i >= 0; i--) {
        if (!this.elements[i]) {
            data = this.layers[i];
            if(data.ip - data.st <= (num - this.layers[i].st) && data.op - data.st > (num - this.layers[i].st))
            {
                this.buildItem(i);
            }
        }
        this.completeLayers = this.elements[i] ? this.completeLayers:false;
    }
    this.checkPendingElements();
};

BaseRenderer.prototype.createItem = function(layer){
    switch(layer.ty){
        case 2:
            return this.createImage(layer);
        case 0:
            return this.createComp(layer);
        case 1:
            return this.createSolid(layer);
        case 4:
            return this.createShape(layer);
        case 5:
            return this.createText(layer);
        case 13:
            return this.createCamera(layer);
        case 99:
            return null;
    }
    return this.createBase(layer);
};

BaseRenderer.prototype.createCamera = function(){
    throw new Error('You\'re using a 3d camera. Try the html renderer.');
}

BaseRenderer.prototype.buildAllItems = function(){
    var i, len = this.layers.length;
    for(i=0;i<len;i+=1){
        this.buildItem(i);
    }
    this.checkPendingElements();
};

BaseRenderer.prototype.includeLayers = function(newLayers){
    this.completeLayers = false;
    var i, len = newLayers.length;
    var j, jLen = this.layers.length;
    for(i=0;i<len;i+=1){
        j = 0;
        while(j<jLen){
            if(this.layers[j].id == newLayers[i].id){
                this.layers[j] = newLayers[i];
                break;
            }
            j += 1;
        }
    }
};

BaseRenderer.prototype.setProjectInterface = function(pInterface){
    this.globalData.projectInterface = pInterface;
};

BaseRenderer.prototype.initItems = function(){
    if(!this.globalData.progressiveLoad){
        this.buildAllItems();
    }
};
BaseRenderer.prototype.buildElementParenting = function(element, parentName, hierarchy){
    hierarchy = hierarchy || [];
    var elements = this.elements;
    var layers = this.layers;
    var i=0, len = layers.length;
    while(i<len){
        if(layers[i].ind == parentName){
            if(!elements[i] || elements[i] === true){
                this.buildItem(i);
                this.addPendingElement(element);
            } else if(layers[i].parent !== undefined){
                hierarchy.push(elements[i]);
                elements[i]._isParent = true;
                this.buildElementParenting(element,layers[i].parent, hierarchy);
            } else {
                hierarchy.push(elements[i]);
                elements[i]._isParent = true;
                element.setHierarchy(hierarchy);
            }


        }
        i += 1;
    }
};

BaseRenderer.prototype.addPendingElement = function(element){
    this.pendingElements.push(element);
};
function SVGRenderer(animationItem, config){
    this.animationItem = animationItem;
    this.layers = null;
    this.renderedFrame = -1;
    this.globalData = {
        frameNum: -1
    };
    this.renderConfig = {
        preserveAspectRatio: (config && config.preserveAspectRatio) || 'xMidYMid meet',
        progressiveLoad: (config && config.progressiveLoad) || false,
        hideOnTransparent: (config && config.hideOnTransparent === false) ? false : true,
        viewBoxOnly: (config && config.viewBoxOnly) || false
    };
    this.globalData.renderConfig = this.renderConfig;
    this.elements = [];
    this.pendingElements = [];
    this.destroyed = false;

}

extendPrototype(BaseRenderer,SVGRenderer);

SVGRenderer.prototype.createBase = function (data) {
    return new SVGBaseElement(data, this.layerElement,this.globalData,this);
};

SVGRenderer.prototype.createShape = function (data) {
    return new IShapeElement(data, this.layerElement,this.globalData,this);
};

SVGRenderer.prototype.createText = function (data) {
    return new SVGTextElement(data, this.layerElement,this.globalData,this);

};

SVGRenderer.prototype.createImage = function (data) {
    return new IImageElement(data, this.layerElement,this.globalData,this);
};

SVGRenderer.prototype.createComp = function (data) {
    return new ICompElement(data, this.layerElement,this.globalData,this);

};

SVGRenderer.prototype.createSolid = function (data) {
    return new ISolidElement(data, this.layerElement,this.globalData,this);
};

SVGRenderer.prototype.configAnimation = function(animData){
    this.layerElement = document.createElementNS(svgNS,'svg');
    this.layerElement.setAttribute('xmlns','http://www.w3.org/2000/svg');
    this.layerElement.setAttribute('viewBox','0 0 '+animData.w+' '+animData.h);
    if(!this.renderConfig.viewBoxOnly) {
        this.layerElement.setAttribute('width',animData.w);
        this.layerElement.setAttribute('height',animData.h);
        this.layerElement.style.width = '100%';
        this.layerElement.style.height = '100%';
    }
    this.layerElement.setAttribute('preserveAspectRatio',this.renderConfig.preserveAspectRatio);
    //this.layerElement.style.transform = 'translate3d(0,0,0)';
    //this.layerElement.style.transformOrigin = this.layerElement.style.mozTransformOrigin = this.layerElement.style.webkitTransformOrigin = this.layerElement.style['-webkit-transform'] = "0px 0px 0px";
    this.animationItem.wrapper.appendChild(this.layerElement);
    //Mask animation
    var defs = document.createElementNS(svgNS, 'defs');
    this.globalData.defs = defs;
    this.layerElement.appendChild(defs);
    this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem);
    this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem);
    this.globalData.progressiveLoad = this.renderConfig.progressiveLoad;
    this.globalData.frameId = 0;
    this.globalData.nm = animData.nm;
    this.globalData.compSize = {
        w: animData.w,
        h: animData.h
    };
    this.data = animData;
    this.globalData.frameRate = animData.fr;
    var maskElement = document.createElementNS(svgNS, 'clipPath');
    var rect = document.createElementNS(svgNS,'rect');
    rect.setAttribute('width',animData.w);
    rect.setAttribute('height',animData.h);
    rect.setAttribute('x',0);
    rect.setAttribute('y',0);
    var maskId = 'animationMask_'+randomString(10);
    maskElement.setAttribute('id', maskId);
    maskElement.appendChild(rect);
    var maskedElement = document.createElementNS(svgNS,'g');
    maskedElement.setAttribute("clip-path", "url(" + locationHref + "#"+maskId+")");
    this.layerElement.appendChild(maskedElement);
    defs.appendChild(maskElement);
    this.layerElement = maskedElement;
    this.layers = animData.layers;
    this.globalData.fontManager = new FontManager();
    this.globalData.fontManager.addChars(animData.chars);
    this.globalData.fontManager.addFonts(animData.fonts,defs);
    this.elements = Array.apply(null,{length:animData.layers.length});
};


SVGRenderer.prototype.destroy = function () {
    this.animationItem.wrapper.innerHTML = '';
    this.layerElement = null;
    this.globalData.defs = null;
    var i, len = this.layers ? this.layers.length : 0;
    for (i = 0; i < len; i++) {
        if(this.elements[i]){
            this.elements[i].destroy();
        }
    }
    this.elements.length = 0;
    this.destroyed = true;
    this.animationItem = null;
};

SVGRenderer.prototype.updateContainerSize = function () {
};

SVGRenderer.prototype.buildItem  = function(pos){
    var elements = this.elements;
    if(elements[pos] || this.layers[pos].ty == 99){
        return;
    }
    elements[pos] = true;
    var element = this.createItem(this.layers[pos]);

    elements[pos] = element;
    if(expressionsPlugin){
        if(this.layers[pos].ty === 0){
            this.globalData.projectInterface.registerComposition(element);
        }
        element.initExpressions();
    }
    this.appendElementInPos(element,pos);
    if(this.layers[pos].tt){
        if(!this.elements[pos - 1] || this.elements[pos - 1] === true){
            this.buildItem(pos - 1);
            this.addPendingElement(element);
        } else {
            element.setMatte(elements[pos - 1].layerId);
        }
    }
};

SVGRenderer.prototype.checkPendingElements  = function(){
    while(this.pendingElements.length){
        var element = this.pendingElements.pop();
        element.checkParenting();
        if(element.data.tt){
            var i = 0, len = this.elements.length;
            while(i<len){
                if(this.elements[i] === element){
                    element.setMatte(this.elements[i - 1].layerId);
                    break;
                }
                i += 1;
            }
        }
    }
};

SVGRenderer.prototype.renderFrame = function(num){
    if(this.renderedFrame == num || this.destroyed){
        return;
    }
    if(num === null){
        num = this.renderedFrame;
    }else{
        this.renderedFrame = num;
    }
    //clearPoints();
    /*console.log('-------');
    console.log('FRAME ',num);*/
    this.globalData.frameNum = num;
    this.globalData.frameId += 1;
    this.globalData.projectInterface.currentFrame = num;
    var i, len = this.layers.length;
    if(!this.completeLayers){
        this.checkLayers(num);
    }
    for (i = len - 1; i >= 0; i--) {
        if(this.completeLayers || this.elements[i]){
            this.elements[i].prepareFrame(num - this.layers[i].st);
        }
    }
    for (i = len - 1; i >= 0; i--) {
        if(this.completeLayers || this.elements[i]){
            this.elements[i].renderFrame();
        }
    }
};

SVGRenderer.prototype.appendElementInPos = function(element, pos){
    var newElement = element.getBaseElement();
    if(!newElement){
        return;
    }
    var i = 0;
    var nextElement;
    while(i<pos){
        if(this.elements[i] && this.elements[i]!== true && this.elements[i].getBaseElement()){
            nextElement = this.elements[i].getBaseElement();
        }
        i += 1;
    }
    if(nextElement){
        this.layerElement.insertBefore(newElement, nextElement);
    } else {
        this.layerElement.appendChild(newElement);
    }
};

SVGRenderer.prototype.hide = function(){
    this.layerElement.style.display = 'none';
};

SVGRenderer.prototype.show = function(){
    this.layerElement.style.display = 'block';
};

SVGRenderer.prototype.searchExtraCompositions = function(assets){
    var i, len = assets.length;
    var floatingContainer = document.createElementNS(svgNS,'g');
    for(i=0;i<len;i+=1){
        if(assets[i].xt){
            var comp = this.createComp(assets[i],floatingContainer,this.globalData.comp,null);
            comp.initExpressions();
            //comp.compInterface = CompExpressionInterface(comp);
            //Expressions.addLayersInterface(comp.elements, this.globalData.projectInterface);
            this.globalData.projectInterface.registerComposition(comp);
        }
    }
};

function MaskElement(data,element,globalData) {
    this.dynamicProperties = [];
    this.data = data;
    this.element = element;
    this.globalData = globalData;
    this.paths = [];
    this.storedData = [];
    this.masksProperties = this.data.masksProperties;
    this.viewData = new Array(this.masksProperties.length);
    this.maskElement = null;
    this.firstFrame = true;
    var defs = this.globalData.defs;
    var i, len = this.masksProperties.length;


    var path, properties = this.masksProperties;
    var count = 0;
    var currentMasks = [];
    var j, jLen;
    var layerId = randomString(10);
    var rect, expansor, feMorph,x;
    var maskType = 'clipPath', maskRef = 'clip-path';
    for (i = 0; i < len; i++) {

        if((properties[i].mode !== 'a' && properties[i].mode !== 'n')|| properties[i].inv || properties[i].o.k !== 100){
            maskType = 'mask';
            maskRef = 'mask';
        }

        if((properties[i].mode == 's' || properties[i].mode == 'i') && count == 0){
            rect = document.createElementNS(svgNS, 'rect');
            rect.setAttribute('fill', '#ffffff');
            rect.setAttribute('width', this.element.comp.data.w);
            rect.setAttribute('height', this.element.comp.data.h);
            currentMasks.push(rect);
        } else {
            rect = null;
        }

        path = document.createElementNS(svgNS, 'path');
        if(properties[i].mode == 'n') {
            this.viewData[i] = {
                op: PropertyFactory.getProp(this.element,properties[i].o,0,0.01,this.dynamicProperties),
                prop: ShapePropertyFactory.getShapeProp(this.element,properties[i],3,this.dynamicProperties,null),
                elem: path
            };
            defs.appendChild(path);
            continue;
        }
        count += 1;

        if(properties[i].mode == 's'){
            path.setAttribute('fill', '#000000');
        }else{
            path.setAttribute('fill', '#ffffff');
        }
        path.setAttribute('clip-rule','nonzero');

        if(properties[i].x.k !== 0){
            maskType = 'mask';
            maskRef = 'mask';
            x = PropertyFactory.getProp(this.element,properties[i].x,0,null,this.dynamicProperties);
            var filterID = 'fi_'+randomString(10);
            expansor = document.createElementNS(svgNS,'filter');
            expansor.setAttribute('id',filterID);
            feMorph = document.createElementNS(svgNS,'feMorphology');
            feMorph.setAttribute('operator','dilate');
            feMorph.setAttribute('in','SourceGraphic');
            feMorph.setAttribute('radius','0');
            expansor.appendChild(feMorph);
            defs.appendChild(expansor);
            if(properties[i].mode == 's'){
                path.setAttribute('stroke', '#000000');
            }else{
                path.setAttribute('stroke', '#ffffff');
            }
        }else{
            feMorph = null;
            x = null;
        }


        this.storedData[i] = {
             elem: path,
             x: x,
             expan: feMorph,
            lastPath: '',
            lastOperator:'',
            filterId:filterID,
            lastRadius:0
        };
        if(properties[i].mode == 'i'){
            jLen = currentMasks.length;
            var g = document.createElementNS(svgNS,'g');
            for(j=0;j<jLen;j+=1){
                g.appendChild(currentMasks[j]);
            }
            var mask = document.createElementNS(svgNS,'mask');
            mask.setAttribute('mask-type','alpha');
            mask.setAttribute('id',layerId+'_'+count);
            mask.appendChild(path);
            defs.appendChild(mask);
            g.setAttribute('mask','url(' + locationHref + '#'+layerId+'_'+count+')');

            currentMasks.length = 0;
            currentMasks.push(g);
        }else{
            currentMasks.push(path);
        }
        if(properties[i].inv && !this.solidPath){
            this.solidPath = this.createLayerSolidPath();
        }
        this.viewData[i] = {
            elem: path,
            lastPath: '',
            op: PropertyFactory.getProp(this.element,properties[i].o,0,0.01,this.dynamicProperties),
            prop:ShapePropertyFactory.getShapeProp(this.element,properties[i],3,this.dynamicProperties,null)
        };
        if(rect){
            this.viewData[i].invRect = rect;
        }
        if(!this.viewData[i].prop.k){
            this.drawPath(properties[i],this.viewData[i].prop.v,this.viewData[i]);
        }
    }

    this.maskElement = document.createElementNS(svgNS, maskType);

    len = currentMasks.length;
    for(i=0;i<len;i+=1){
        this.maskElement.appendChild(currentMasks[i]);
    }

    this.maskElement.setAttribute('id', layerId);
    if(count > 0){
        this.element.maskedElement.setAttribute(maskRef, "url(" + locationHref + "#" + layerId + ")");
    }

    defs.appendChild(this.maskElement);
};

MaskElement.prototype.getMaskProperty = function(pos){
    return this.viewData[pos].prop;
};

MaskElement.prototype.prepareFrame = function(){
    var i, len = this.dynamicProperties.length;
    for(i=0;i<len;i+=1){
        this.dynamicProperties[i].getValue();

    }
};

MaskElement.prototype.renderFrame = function (finalMat) {
    var i, len = this.masksProperties.length;
    for (i = 0; i < len; i++) {
        if(this.viewData[i].prop.mdf || this.firstFrame){
            this.drawPath(this.masksProperties[i],this.viewData[i].prop.v,this.viewData[i]);
        }
        if(this.viewData[i].op.mdf || this.firstFrame){
            this.viewData[i].elem.setAttribute('fill-opacity',this.viewData[i].op.v);
        }
        if(this.masksProperties[i].mode !== 'n'){
            if(this.viewData[i].invRect && (this.element.finalTransform.mProp.mdf || this.firstFrame)){
                this.viewData[i].invRect.setAttribute('x', -finalMat.props[12]);
                this.viewData[i].invRect.setAttribute('y', -finalMat.props[13]);
            }
            if(this.storedData[i].x && (this.storedData[i].x.mdf || this.firstFrame)){
                var feMorph = this.storedData[i].expan;
                if(this.storedData[i].x.v < 0){
                    if(this.storedData[i].lastOperator !== 'erode'){
                        this.storedData[i].lastOperator = 'erode';
                        this.storedData[i].elem.setAttribute('filter','url(' + locationHref + '#'+this.storedData[i].filterId+')');
                    }
                    feMorph.setAttribute('radius',-this.storedData[i].x.v);
                }else{
                    if(this.storedData[i].lastOperator !== 'dilate'){
                        this.storedData[i].lastOperator = 'dilate';
                        this.storedData[i].elem.setAttribute('filter',null);
                    }
                    this.storedData[i].elem.setAttribute('stroke-width', this.storedData[i].x.v*2);

                }
            }
        }
    }
    this.firstFrame = false;
};

MaskElement.prototype.getMaskelement = function () {
    return this.maskElement;
};

MaskElement.prototype.createLayerSolidPath = function(){
    var path = 'M0,0 ';
    path += ' h' + this.globalData.compSize.w ;
    path += ' v' + this.globalData.compSize.h ;
    path += ' h-' + this.globalData.compSize.w ;
    path += ' v-' + this.globalData.compSize.h + ' ';
    return path;
};

MaskElement.prototype.drawPath = function(pathData,pathNodes,viewData){
    var pathString = " M"+pathNodes.v[0][0]+','+pathNodes.v[0][1];
    var i, len;
    len = pathNodes._length;
    for(i=1;i<len;i+=1){
        //pathString += " C"+pathNodes.o[i-1][0]+','+pathNodes.o[i-1][1] + " "+pathNodes.i[i][0]+','+pathNodes.i[i][1] + " "+pathNodes.v[i][0]+','+pathNodes.v[i][1];
        pathString += " C"+bm_rnd(pathNodes.o[i-1][0])+','+bm_rnd(pathNodes.o[i-1][1]) + " "+bm_rnd(pathNodes.i[i][0])+','+bm_rnd(pathNodes.i[i][1]) + " "+bm_rnd(pathNodes.v[i][0])+','+bm_rnd(pathNodes.v[i][1]);
    }
        //pathString += " C"+pathNodes.o[i-1][0]+','+pathNodes.o[i-1][1] + " "+pathNodes.i[0][0]+','+pathNodes.i[0][1] + " "+pathNodes.v[0][0]+','+pathNodes.v[0][1];
    if(pathNodes.c && len > 1){
        pathString += " C"+bm_rnd(pathNodes.o[i-1][0])+','+bm_rnd(pathNodes.o[i-1][1]) + " "+bm_rnd(pathNodes.i[0][0])+','+bm_rnd(pathNodes.i[0][1]) + " "+bm_rnd(pathNodes.v[0][0])+','+bm_rnd(pathNodes.v[0][1]);
    }
    //pathNodes.__renderedString = pathString;


    if(viewData.lastPath !== pathString){
        if(viewData.elem){
            if(!pathNodes.c){
                viewData.elem.setAttribute('d','');
            }else if(pathData.inv){
                viewData.elem.setAttribute('d',this.solidPath + pathString);
            }else{
                viewData.elem.setAttribute('d',pathString);
            }
        }
        viewData.lastPath = pathString;
    }
};

MaskElement.prototype.getMask = function(nm){
    var i = 0, len = this.masksProperties.length;
    while(i<len){
        if(this.masksProperties[i].nm === nm){
            return {
                maskPath: this.viewData[i].prop.pv
            }
        }
        i += 1;
    }
};

MaskElement.prototype.destroy = function(){
    this.element = null;
    this.globalData = null;
    this.maskElement = null;
    this.data = null;
    this.paths = null;
    this.masksProperties = null;
};
function BaseElement(){
};
BaseElement.prototype.checkMasks = function(){
    if(!this.data.hasMask){
        return false;
    }
    var i = 0, len = this.data.masksProperties.length;
    while(i<len) {
        if((this.data.masksProperties[i].mode !== 'n' && this.data.masksProperties[i].cl !== false)) {
            return true;
        }
        i += 1;
    }
    return false;
}

BaseElement.prototype.checkParenting = function(){
    if(this.data.parent !== undefined){
        this.comp.buildElementParenting(this, this.data.parent);
    }
}

BaseElement.prototype.prepareFrame = function(num){
    if(this.data.ip - this.data.st <= num && this.data.op - this.data.st > num)
    {
        if(this.isVisible !== true){
            this.elemMdf = true;
            this.globalData.mdf = true;
            this.isVisible = true;
            this.firstFrame = true;
            if(this.data.hasMask){
                this.maskManager.firstFrame = true;
            }
        }
    }else{
        if(this.isVisible !== false){
            this.elemMdf = true;
            this.globalData.mdf = true;
            this.isVisible = false;
        }
    }
    var i, len = this.dynamicProperties.length;
    for(i=0;i<len;i+=1){
        if(this.isVisible || (this._isParent && this.dynamicProperties[i].type === 'transform')){
            this.dynamicProperties[i].getValue();
            if(this.dynamicProperties[i].mdf){
                this.elemMdf = true;
                this.globalData.mdf = true;
            }
        }
    }
    if(this.data.hasMask && this.isVisible){
        this.maskManager.prepareFrame(num*this.data.sr);
    }
    
    /* TODO check this
    if(this.data.sy){
        if(this.data.sy[0].renderedData[num]){
            if(this.data.sy[0].renderedData[num].c){
                this.feFlood.setAttribute('flood-color','rgb('+Math.round(this.data.sy[0].renderedData[num].c[0])+','+Math.round(this.data.sy[0].renderedData[num].c[1])+','+Math.round(this.data.sy[0].renderedData[num].c[2])+')');
            }
            if(this.data.sy[0].renderedData[num].s){
                this.feMorph.setAttribute('radius',this.data.sy[0].renderedData[num].s);
            }
        }
    }
    */


    this.currentFrameNum = num*this.data.sr;
    return this.isVisible;
};

BaseElement.prototype.globalToLocal = function(pt){
    var transforms = [];
    transforms.push(this.finalTransform);
    var flag = true;
    var comp = this.comp;
    while(flag){
        if(comp.finalTransform){
            if(comp.data.hasMask){
                transforms.splice(0,0,comp.finalTransform);
            }
            comp = comp.comp;
        } else {
            flag = false;
        }
    }
    var i, len = transforms.length,ptNew;
    for(i=0;i<len;i+=1){
        ptNew = transforms[i].mat.applyToPointArray(0,0,0);
        //ptNew = transforms[i].mat.applyToPointArray(pt[0],pt[1],pt[2]);
        pt = [pt[0] - ptNew[0],pt[1] - ptNew[1],0];
    }
    return pt;
};

BaseElement.prototype.initExpressions = function(){
    this.layerInterface = LayerExpressionInterface(this);
    //layers[i].layerInterface = LayerExpressionInterface(layers[i]);
    //layers[i].layerInterface = LayerExpressionInterface(layers[i]);
    if(this.data.hasMask){
        this.layerInterface.registerMaskInterface(this.maskManager);
    }
    var effectsInterface = EffectsExpressionInterface.createEffectsInterface(this,this.layerInterface);
    this.layerInterface.registerEffectsInterface(effectsInterface);

    if(this.data.ty === 0 || this.data.xt){
        this.compInterface = CompExpressionInterface(this);
    } else if(this.data.ty === 4){
        this.layerInterface.shapeInterface = ShapeExpressionInterface.createShapeInterface(this.shapesData,this.itemsData,this.layerInterface);
    } else if(this.data.ty === 5){
        this.layerInterface.textInterface = TextExpressionInterface(this);
    }
}

BaseElement.prototype.setBlendMode = function(){
    var blendModeValue = '';
    switch(this.data.bm){
        case 1:
            blendModeValue = 'multiply';
            break;
        case 2:
            blendModeValue = 'screen';
            break;
        case 3:
            blendModeValue = 'overlay';
            break;
        case 4:
            blendModeValue = 'darken';
            break;
        case 5:
            blendModeValue = 'lighten';
            break;
        case 6:
            blendModeValue = 'color-dodge';
            break;
        case 7:
            blendModeValue = 'color-burn';
            break;
        case 8:
            blendModeValue = 'hard-light';
            break;
        case 9:
            blendModeValue = 'soft-light';
            break;
        case 10:
            blendModeValue = 'difference';
            break;
        case 11:
            blendModeValue = 'exclusion';
            break;
        case 12:
            blendModeValue = 'hue';
            break;
        case 13:
            blendModeValue = 'saturation';
            break;
        case 14:
            blendModeValue = 'color';
            break;
        case 15:
            blendModeValue = 'luminosity';
            break;
    }
    var elem = this.baseElement || this.layerElement;

    elem.style['mix-blend-mode'] = blendModeValue;
}

BaseElement.prototype.init = function(){
    if(!this.data.sr){
        this.data.sr = 1;
    }
    this.dynamicProperties = this.dynamicProperties || [];
    if(this.data.ef){
        this.effects = new EffectsManager(this.data,this,this.dynamicProperties);
        //this.effect = this.effectsManager.bind(this.effectsManager);
    }
    //this.elemInterface = buildLayerExpressionInterface(this);
    this.hidden = false;
    this.firstFrame = true;
    this.isVisible = false;
    this._isParent = false;
    this.currentFrameNum = -99999;
    this.lastNum = -99999;
    if(this.data.ks){
        this.finalTransform = {
            mProp: PropertyFactory.getProp(this,this.data.ks,2,null,this.dynamicProperties),
            matMdf: false,
            opMdf: false,
            mat: new Matrix(),
            opacity: 1
        };
        if(this.data.ao){
            this.finalTransform.mProp.autoOriented = true;
        }
        this.finalTransform.op = this.finalTransform.mProp.o;
        this.transform = this.finalTransform.mProp;
        if(this.data.ty !== 11){
            this.createElements();
        }
        if(this.data.hasMask){
            this.addMasks(this.data);
        }
    }
    this.elemMdf = false;
};
BaseElement.prototype.getType = function(){
    return this.type;
};

BaseElement.prototype.resetHierarchy = function(){
    if(!this.hierarchy){
        this.hierarchy = [];
    }else{
        this.hierarchy.length = 0;
    }
};

BaseElement.prototype.getHierarchy = function(){
    if(!this.hierarchy){
        this.hierarchy = [];
    }
    return this.hierarchy;
};

BaseElement.prototype.setHierarchy = function(hierarchy){
    this.hierarchy = hierarchy;
};

BaseElement.prototype.getLayerSize = function(){
    if(this.data.ty === 5){
        return {w:this.data.textData.width,h:this.data.textData.height};
    }else{
        return {w:this.data.width,h:this.data.height};
    }
};

BaseElement.prototype.hide = function(){

};

BaseElement.prototype.sourceRectAtTime = function(){
    return {
        top:0,
        left:0,
        width:100,
        height:100
    }
};

BaseElement.prototype.mHelper = new Matrix();
function SVGBaseElement(data,parentContainer,globalData,comp, placeholder){
    this.globalData = globalData;
    this.comp = comp;
    this.data = data;
    this.matteElement = null;
    this.transformedElement = null;
    this.isTransparent = false;
    this.parentContainer = parentContainer;
    this.layerId = placeholder ? placeholder.layerId : 'ly_'+randomString(10);
    this.placeholder = placeholder;
    this._sizeChanged = false;
    this.init();
};

createElement(BaseElement, SVGBaseElement);

SVGBaseElement.prototype.createElements = function(){
    this.layerElement = document.createElementNS(svgNS,'g');
    this.transformedElement = this.layerElement;
    if(this.data.hasMask){
        this.maskedElement = this.layerElement;
    }
    var layerElementParent = null;
    if(this.data.td){
        if(this.data.td == 3 || this.data.td == 1){
            var masker = document.createElementNS(svgNS,'mask');
            masker.setAttribute('id',this.layerId);
            masker.setAttribute('mask-type',this.data.td == 3 ? 'luminance':'alpha');
            masker.appendChild(this.layerElement);
            layerElementParent = masker;
            this.globalData.defs.appendChild(masker);
            ////// This is only for IE and Edge when mask if of type alpha
            if(!featureSupport.maskType && this.data.td == 1){
                masker.setAttribute('mask-type','luminance');
                var filId = randomString(10);
                var fil = filtersFactory.createFilter(filId);
                this.globalData.defs.appendChild(fil);
                fil.appendChild(filtersFactory.createAlphaToLuminanceFilter());
                var gg = document.createElementNS(svgNS,'g');
                gg.appendChild(this.layerElement);
                layerElementParent = gg;
                masker.appendChild(gg);
                gg.setAttribute('filter','url(' + locationHref + '#'+filId+')');
            }
        }else if(this.data.td == 2){
            var maskGroup = document.createElementNS(svgNS,'mask');
            maskGroup.setAttribute('id',this.layerId);
            maskGroup.setAttribute('mask-type','alpha');
            var maskGrouper = document.createElementNS(svgNS,'g');
            maskGroup.appendChild(maskGrouper);
            var filId = randomString(10);
            var fil = filtersFactory.createFilter(filId);
            ////

            var feColorMatrix = document.createElementNS(svgNS,'feColorMatrix');
            feColorMatrix.setAttribute('type','matrix');
            feColorMatrix.setAttribute('color-interpolation-filters','sRGB');
            feColorMatrix.setAttribute('values','1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 -1 1');
            fil.appendChild(feColorMatrix);

            ////
            /*var feCTr = document.createElementNS(svgNS,'feComponentTransfer');
            feCTr.setAttribute('in','SourceGraphic');
            fil.appendChild(feCTr);
            var feFunc = document.createElementNS(svgNS,'feFuncA');
            feFunc.setAttribute('type','table');
            feFunc.setAttribute('tableValues','1.0 0.0');
            feCTr.appendChild(feFunc);*/
            this.globalData.defs.appendChild(fil);
            var alphaRect = document.createElementNS(svgNS,'rect');
            alphaRect.setAttribute('width',this.comp.data.w);
            alphaRect.setAttribute('height',this.comp.data.h);
            alphaRect.setAttribute('x','0');
            alphaRect.setAttribute('y','0');
            alphaRect.setAttribute('fill','#ffffff');
            alphaRect.setAttribute('opacity','0');
            maskGrouper.setAttribute('filter','url(' + locationHref + '#'+filId+')');
            maskGrouper.appendChild(alphaRect);
            maskGrouper.appendChild(this.layerElement);
            layerElementParent = maskGrouper;
            if(!featureSupport.maskType){
                maskGroup.setAttribute('mask-type','luminance');
                fil.appendChild(filtersFactory.createAlphaToLuminanceFilter());
                var gg = document.createElementNS(svgNS,'g');
                maskGrouper.appendChild(alphaRect);
                gg.appendChild(this.layerElement);
                layerElementParent = gg;
                maskGrouper.appendChild(gg);
            }
            this.globalData.defs.appendChild(maskGroup);
        }
    }else if(this.data.hasMask || this.data.tt){
        if(this.data.tt){
            this.matteElement = document.createElementNS(svgNS,'g');
            this.matteElement.appendChild(this.layerElement);
            layerElementParent = this.matteElement;
            this.baseElement = this.matteElement;
        }else{
            this.baseElement = this.layerElement;
        }
    }else{
        this.baseElement = this.layerElement;
    }
    if((this.data.ln || this.data.cl) && (this.data.ty === 4 || this.data.ty === 0)){
        if(this.data.ln){
            this.layerElement.setAttribute('id',this.data.ln);
        }
        if(this.data.cl){
            this.layerElement.setAttribute('class',this.data.cl);
        }
    }
    if(this.data.ty === 0){
            var cp = document.createElementNS(svgNS, 'clipPath');
            var pt = document.createElementNS(svgNS,'path');
            pt.setAttribute('d','M0,0 L'+this.data.w+',0'+' L'+this.data.w+','+this.data.h+' L0,'+this.data.h+'z');
            var clipId = 'cp_'+randomString(8);
            cp.setAttribute('id',clipId);
            cp.appendChild(pt);
            this.globalData.defs.appendChild(cp);
        if(this.checkMasks()){
            var cpGroup = document.createElementNS(svgNS,'g');
            cpGroup.setAttribute('clip-path','url(' + locationHref + '#'+clipId+')');
            cpGroup.appendChild(this.layerElement);
            this.transformedElement = cpGroup;
            if(layerElementParent){
                layerElementParent.appendChild(this.transformedElement);
            } else {
                this.baseElement = this.transformedElement;
            }
        } else {
            this.layerElement.setAttribute('clip-path','url(' + locationHref + '#'+clipId+')');
        }
        
    }
    if(this.data.bm !== 0){
        this.setBlendMode();
    }
    if(this.layerElement !== this.parentContainer){
        this.placeholder = null;
    }
    /* Todo performance killer
    if(this.data.sy){
        var filterID = 'st_'+randomString(10);
        var c = this.data.sy[0].c.k;
        var r = this.data.sy[0].s.k;
        var expansor = document.createElementNS(svgNS,'filter');
        expansor.setAttribute('id',filterID);
        var feFlood = document.createElementNS(svgNS,'feFlood');
        this.feFlood = feFlood;
        if(!c[0].e){
            feFlood.setAttribute('flood-color','rgb('+c[0]+','+c[1]+','+c[2]+')');
        }
        feFlood.setAttribute('result','base');
        expansor.appendChild(feFlood);
        var feMorph = document.createElementNS(svgNS,'feMorphology');
        feMorph.setAttribute('operator','dilate');
        feMorph.setAttribute('in','SourceGraphic');
        feMorph.setAttribute('result','bigger');
        this.feMorph = feMorph;
        if(!r.length){
            feMorph.setAttribute('radius',this.data.sy[0].s.k);
        }
        expansor.appendChild(feMorph);
        var feColorMatrix = document.createElementNS(svgNS,'feColorMatrix');
        feColorMatrix.setAttribute('result','mask');
        feColorMatrix.setAttribute('in','bigger');
        feColorMatrix.setAttribute('type','matrix');
        feColorMatrix.setAttribute('values','0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0');
        expansor.appendChild(feColorMatrix);
        var feComposite = document.createElementNS(svgNS,'feComposite');
        feComposite.setAttribute('result','drop');
        feComposite.setAttribute('in','base');
        feComposite.setAttribute('in2','mask');
        feComposite.setAttribute('operator','in');
        expansor.appendChild(feComposite);
        var feBlend = document.createElementNS(svgNS,'feBlend');
        feBlend.setAttribute('in','SourceGraphic');
        feBlend.setAttribute('in2','drop');
        feBlend.setAttribute('mode','normal');
        expansor.appendChild(feBlend);
        this.globalData.defs.appendChild(expansor);
        var cont = document.createElementNS(svgNS,'g');
        if(this.layerElement === this.parentContainer){
            this.layerElement = cont;
        }else{
            cont.appendChild(this.layerElement);
        }
        cont.setAttribute('filter','url(#'+filterID+')');
        if(this.data.td){
            cont.setAttribute('data-td',this.data.td);
        }
        if(this.data.td == 3){
            this.globalData.defs.appendChild(cont);
        }else if(this.data.td == 2){
            maskGrouper.appendChild(cont);
        }else if(this.data.td == 1){
            masker.appendChild(cont);
        }else{
            if(this.data.hasMask && this.data.tt){
                this.matteElement.appendChild(cont);
            }else{
                this.appendNodeToParent(cont);
            }
        }
    }*/
    if(this.data.ef){
        this.effectsManager = new SVGEffects(this);
    }
    this.checkParenting();
};


SVGBaseElement.prototype.setBlendMode = BaseElement.prototype.setBlendMode;

SVGBaseElement.prototype.renderFrame = function(parentTransform){
    if(this.data.ty === 3 || this.data.hd || !this.isVisible){
        return false;
    }

    this.lastNum = this.currentFrameNum;
    this.finalTransform.opMdf = this.firstFrame || this.finalTransform.op.mdf;
    this.finalTransform.matMdf = this.firstFrame || this.finalTransform.mProp.mdf;
    this.finalTransform.opacity = this.finalTransform.op.v;

    var mat;
    var finalMat = this.finalTransform.mat;

    if(this.hierarchy){
        var i = 0, len = this.hierarchy.length;
        if(!this.finalTransform.matMdf) {
            while(i < len) {
                if(this.hierarchy[i].finalTransform.mProp.mdf) {
                    this.finalTransform.matMdf = true;
                    break;
                }
                i += 1;
            }
        }
        
        if(this.finalTransform.matMdf) {
            mat = this.finalTransform.mProp.v.props;
            finalMat.cloneFromProps(mat);
            for(i=0;i<len;i+=1){
                mat = this.hierarchy[i].finalTransform.mProp.v.props;
                finalMat.transform(mat[0],mat[1],mat[2],mat[3],mat[4],mat[5],mat[6],mat[7],mat[8],mat[9],mat[10],mat[11],mat[12],mat[13],mat[14],mat[15]);
            }
        }
        
    }else if(this.isVisible){
        finalMat = this.finalTransform.mProp.v;
    }
    if(this.finalTransform.matMdf && this.layerElement){
        this.transformedElement.setAttribute('transform',finalMat.to2dCSS());
    }
    if(this.finalTransform.opMdf && this.layerElement){
        if(this.finalTransform.op.v <= 0) {
            if(!this.isTransparent && this.globalData.renderConfig.hideOnTransparent){
                this.isTransparent = true;
                this.hide();
            }
        } else if(this.hidden && this.isTransparent){
            this.isTransparent = false;
            this.show();
        }
        this.transformedElement.setAttribute('opacity',this.finalTransform.op.v);
    }

    if(this.data.hasMask){
        this.maskManager.renderFrame(finalMat);
    }
    if(this.effectsManager){
        this.effectsManager.renderFrame(this.firstFrame);
    }
    return this.isVisible;
};

SVGBaseElement.prototype.destroy = function(){
    this.layerElement = null;
    this.parentContainer = null;
    if(this.matteElement) {
        this.matteElement = null;
    }
    if(this.maskManager) {
        this.maskManager.destroy();
    }
};

SVGBaseElement.prototype.getBaseElement = function(){
    return this.baseElement;
};
SVGBaseElement.prototype.addMasks = function(data){
    this.maskManager = new MaskElement(data,this,this.globalData);
};

SVGBaseElement.prototype.setMatte = function(id){
    if(!this.matteElement){
        return;
    }
    this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + id + ")");
};

SVGBaseElement.prototype.hide = function(){
    if(!this.hidden){
        this.layerElement.style.display = 'none';
        this.hidden = true;
    }
};

SVGBaseElement.prototype.show = function(){
    if(this.isVisible && !this.isTransparent){
        this.hidden = false;
        this.layerElement.style.display = 'block';
    }
};

function IShapeElement(data,parentContainer,globalData,comp, placeholder){
    this.shapes = [];
    this.shapesData = data.shapes;
    this.stylesList = [];
    this.itemsData = [];
    this.prevViewData = [];
    this.shapeModifiers = [];
    this.processedElements = [];
    this._parent.constructor.call(this,data,parentContainer,globalData,comp, placeholder);
}
createElement(SVGBaseElement, IShapeElement);

IShapeElement.prototype.identityMatrix = new Matrix();

IShapeElement.prototype.lcEnum = {
    '1': 'butt',
    '2': 'round',
    '3': 'square'
}

IShapeElement.prototype.ljEnum = {
    '1': 'miter',
    '2': 'round',
    '3': 'butt'
}

IShapeElement.prototype.searchProcessedElement = function(elem){
    var i = this.processedElements.length;
    while(i){
        i -= 1;
        if(this.processedElements[i].elem === elem){
            return this.processedElements[i].pos;
        }
    }
    return 0;
};

IShapeElement.prototype.addProcessedElement = function(elem, pos){
    var i = this.processedElements.length;
    while(i){
        i -= 1;
        if(this.processedElements[i].elem === elem){
            this.processedElements[i].pos = pos;
            break;
        }
    }
    if(i === 0){
        this.processedElements.push({
            elem: elem,
            pos: pos
        })
    }
};

IShapeElement.prototype.buildExpressionInterface = function(){};

IShapeElement.prototype.createElements = function(){
    //TODO check if I can use symbol so i can set its viewBox
    this._parent.createElements.call(this);
    this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,this.dynamicProperties, 0, [], true);
    if(!this.data.hd || this.data.td){
        styleUnselectableDiv(this.layerElement);
    }
};

IShapeElement.prototype.setGradientData = function(pathElement,arr,data){

    var gradientId = 'gr_'+randomString(10);
    var gfill;
    if(arr.t === 1){
        gfill = document.createElementNS(svgNS,'linearGradient');
    } else {
        gfill = document.createElementNS(svgNS,'radialGradient');
    }
    gfill.setAttribute('id',gradientId);
    gfill.setAttribute('spreadMethod','pad');
    gfill.setAttribute('gradientUnits','userSpaceOnUse');
    var stops = [];
    var stop, j, jLen;
    jLen = arr.g.p*4;
    for(j=0;j<jLen;j+=4){
        stop = document.createElementNS(svgNS,'stop');
        gfill.appendChild(stop);
        stops.push(stop);
    }
    pathElement.setAttribute( arr.ty === 'gf' ? 'fill':'stroke','url(#'+gradientId+')');
    this.globalData.defs.appendChild(gfill);
    data.gf = gfill;
    data.cst = stops;
}

IShapeElement.prototype.setGradientOpacity = function(arr, data, styleOb){
    if((arr.g.k.k[0].s && arr.g.k.k[0].s.length > arr.g.p*4) || arr.g.k.k.length > arr.g.p*4){
        var opFill;
        var stop, j, jLen;
        var mask = document.createElementNS(svgNS,"mask");
        var maskElement = document.createElementNS(svgNS, 'path');
        mask.appendChild(maskElement);
        var opacityId = 'op_'+randomString(10);
        var maskId = 'mk_'+randomString(10);
        mask.setAttribute('id',maskId);
        if(arr.t === 1){
            opFill = document.createElementNS(svgNS,'linearGradient');
        } else {
            opFill = document.createElementNS(svgNS,'radialGradient');
        }
        opFill.setAttribute('id',opacityId);
        opFill.setAttribute('spreadMethod','pad');
        opFill.setAttribute('gradientUnits','userSpaceOnUse');
        jLen = arr.g.k.k[0].s ? arr.g.k.k[0].s.length : arr.g.k.k.length;
        var stops = [];
        for(j=arr.g.p*4;j<jLen;j+=2){
            stop = document.createElementNS(svgNS,'stop');
            stop.setAttribute('stop-color','rgb(255,255,255)');
            //stop.setAttribute('offset',Math.round(arr.y[j][0]*100)+'%');
            //stop.setAttribute('style','stop-color:rgb(255,255,255);stop-opacity:'+arr.y[j][1]);
            opFill.appendChild(stop);
            stops.push(stop);
        }
        maskElement.setAttribute( arr.ty === 'gf' ? 'fill':'stroke','url(#'+opacityId+')');
        this.globalData.defs.appendChild(opFill);
        this.globalData.defs.appendChild(mask);
        data.of = opFill;
        data.ost = stops;
        styleOb.msElem = maskElement;
        return maskId;
    }
};

IShapeElement.prototype.createStyleElement = function(data, level, dynamicProperties){
    var elementData = {
    };
    var styleOb = {
        data: data,
        type: data.ty,
        d: '',
        ld: '',
        lvl: level,
        mdf: false,
        closed: false
    };
    var pathElement = document.createElementNS(svgNS, "path");
    elementData.o = PropertyFactory.getProp(this,data.o,0,0.01,dynamicProperties);
    if(data.ty == 'st' || data.ty == 'gs') {
        pathElement.setAttribute('stroke-linecap', this.lcEnum[data.lc] || 'round');
        ////pathElement.style.strokeLinecap = this.lcEnum[data.lc] || 'round';
        pathElement.setAttribute('stroke-linejoin',this.ljEnum[data.lj] || 'round');
        ////pathElement.style.strokeLinejoin = this.ljEnum[data.lj] || 'round';
        pathElement.setAttribute('fill-opacity','0');
        ////pathElement.style.fillOpacity = 0;
        if(data.lj == 1) {
            pathElement.setAttribute('stroke-miterlimit',data.ml);
            ////pathElement.style.strokeMiterlimit = data.ml;
        }

        elementData.w = PropertyFactory.getProp(this,data.w,0,null,dynamicProperties);
        if(data.d){
            var d = PropertyFactory.getDashProp(this,data.d,'svg',dynamicProperties);
            if(!d.k){
                pathElement.setAttribute('stroke-dasharray', d.dasharray);
                ////pathElement.style.strokeDasharray = d.dasharray;
                pathElement.setAttribute('stroke-dashoffset', d.dashoffset);
                ////pathElement.style.strokeDashoffset = d.dashoffset;
            }
            elementData.d = d;
        }

    }
    if(data.ty == 'fl' || data.ty == 'st'){
        elementData.c = PropertyFactory.getProp(this,data.c,1,255,dynamicProperties);
    } else {
        elementData.g = PropertyFactory.getGradientProp(this,data.g,dynamicProperties);
        if(data.t == 2){
            elementData.h = PropertyFactory.getProp(this,data.h,1,0.01,dynamicProperties);
            elementData.a = PropertyFactory.getProp(this,data.a,1,degToRads,dynamicProperties);
        }
        elementData.s = PropertyFactory.getProp(this,data.s,1,null,dynamicProperties);
        elementData.e = PropertyFactory.getProp(this,data.e,1,null,dynamicProperties);
        this.setGradientData(pathElement,data,elementData, styleOb);
        var maskId = this.setGradientOpacity(data,elementData, styleOb);
        if(maskId){
            pathElement.setAttribute('mask','url(#'+maskId+')');
        }
    }
    elementData.elem = pathElement;
    //container.appendChild(pathElement);
    if(data.r === 2) {
        pathElement.setAttribute('fill-rule', 'evenodd');
    }

    if(data.ln){
        pathElement.setAttribute('id',data.ln);
    }
    if(data.cl){
        pathElement.setAttribute('class',data.cl);
    }
    styleOb.pElem = pathElement;
    this.stylesList.push(styleOb);
    elementData.style = styleOb;
    return elementData;
}

IShapeElement.prototype.createGroupElement = function(data) {
    var elementData = {
        it: [],
        prevViewData: []
    };
    var g = document.createElementNS(svgNS,'g');
    elementData.gr = g;
    if(data.ln){
        elementData.gr.setAttribute('id',data.ln);
    }
    return elementData;
}

IShapeElement.prototype.createTransformElement = function(data, dynamicProperties) {
    var elementData = {
        transform : {
            op: PropertyFactory.getProp(this,data.o,0,0.01,dynamicProperties),
            mProps: PropertyFactory.getProp(this,data,2,null,dynamicProperties)
        },
        elements: []
    };
    return elementData;
}

IShapeElement.prototype.createShapeElement = function(data, ownTransformers, level, dynamicProperties) {
    var elementData = {
        elements : [],
        caches:[],
        styles : [],
        transformers: ownTransformers,
        lStr: ''
    };
    var ty = 4;
    if(data.ty == 'rc'){
        ty = 5;
    }else if(data.ty == 'el'){
        ty = 6;
    }else if(data.ty == 'sr'){
        ty = 7;
    }
    elementData.sh = ShapePropertyFactory.getShapeProp(this,data,ty,dynamicProperties);
    elementData.lvl = level;
    this.shapes.push(elementData.sh);
    this.addShapeToModifiers(elementData);
    return elementData;
}

var cont = 0;

IShapeElement.prototype.setElementStyles = function(){
    var j, jLen = this.stylesList.length;
    var arr = [];
    for(j=0;j<jLen;j+=1){
        if(!this.stylesList[j].closed){
            arr.push(this.stylesList[j]);
        }
    }
    return arr;
}

IShapeElement.prototype.reloadShapes = function(){
    this.firstFrame = true;
    var i, len = this.itemsData.length;
    for(i=0;i<len;i+=1){
        this.prevViewData[i] = this.itemsData[i];
    }
    this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,this.dynamicProperties, 0, [], true);
    var i, len = this.dynamicProperties.length;
    for(i=0;i<len;i+=1){
        this.dynamicProperties[i].getValue();
    }
    this.renderModifiers();
}

IShapeElement.prototype.searchShapes = function(arr,itemsData,prevViewData,container,dynamicProperties, level, transformers, render){
    var ownTransformers = [].concat(transformers);
    var i, len = arr.length - 1;
    var j, jLen;
    var ownStyles = [], ownModifiers = [], styleOb, currentTransform, modifier, processedPos;
    for(i=len;i>=0;i-=1){
        processedPos = this.searchProcessedElement(arr[i]);
        if(!processedPos){
            arr[i]._render = render;
        } else {
            itemsData[i] = prevViewData[processedPos - 1];
        }
        if(arr[i].ty == 'fl' || arr[i].ty == 'st' || arr[i].ty == 'gf' || arr[i].ty == 'gs'){
            if(!processedPos){
                itemsData[i] = this.createStyleElement(arr[i], level, dynamicProperties);
            } else {
                itemsData[i].style.closed = false;
            }
            if(arr[i]._render){
                container.appendChild(itemsData[i].elem);
            }
            ownStyles.push(itemsData[i].style);
        }else if(arr[i].ty == 'gr'){
            if(!processedPos){
                itemsData[i] = this.createGroupElement(arr[i]);
            } else {
                jLen = itemsData[i].it.length;
                for(j=0;j<jLen;j+=1){
                    itemsData[i].prevViewData[j] = itemsData[i].it[j];
                }
            }
            this.searchShapes(arr[i].it,itemsData[i].it,itemsData[i].prevViewData,itemsData[i].gr,dynamicProperties, level + 1, ownTransformers, render);
            if(arr[i]._render){
                container.appendChild(itemsData[i].gr);
            }
        }else if(arr[i].ty == 'tr'){
            if(!processedPos){
                itemsData[i] = this.createTransformElement(arr[i], dynamicProperties);
            }
            currentTransform = itemsData[i].transform;
            ownTransformers.push(currentTransform);
        }else if(arr[i].ty == 'sh' || arr[i].ty == 'rc' || arr[i].ty == 'el' || arr[i].ty == 'sr'){
            if(!processedPos){
                itemsData[i] = this.createShapeElement(arr[i], ownTransformers, level, dynamicProperties);
            }
            itemsData[i].elements = this.setElementStyles();

        }else if(arr[i].ty == 'tm' || arr[i].ty == 'rd' || arr[i].ty == 'ms'){
            if(!processedPos){
                modifier = ShapeModifiers.getModifier(arr[i].ty);
                modifier.init(this,arr[i],dynamicProperties);
                itemsData[i] = modifier;
                this.shapeModifiers.push(modifier);
            } else {
                modifier = itemsData[i];
                modifier.closed = false;
            }
            ownModifiers.push(modifier);
        }else if(arr[i].ty == 'rp'){
            if(!processedPos){
                modifier = ShapeModifiers.getModifier(arr[i].ty);
                itemsData[i] = modifier;
                modifier.init(this,arr,i,itemsData,dynamicProperties);
                this.shapeModifiers.push(modifier);
                render = false;
            }else{
                modifier = itemsData[i];
                modifier.closed = true;
            }
            ownModifiers.push(modifier);
        }
        this.addProcessedElement(arr[i], i + 1);
    }
    len = ownStyles.length;
    for(i=0;i<len;i+=1){
        ownStyles[i].closed = true;
    }
    len = ownModifiers.length;
    for(i=0;i<len;i+=1){
        ownModifiers[i].closed = true;
    }
};

IShapeElement.prototype.addShapeToModifiers = function(data) {
    var i, len = this.shapeModifiers.length;
    for(i=0;i<len;i+=1){
        this.shapeModifiers[i].addShape(data);
    }
};

IShapeElement.prototype.renderModifiers = function() {
    if(!this.shapeModifiers.length){
        return;
    }
    var i, len = this.shapes.length;
    for(i=0;i<len;i+=1){
        this.shapes[i].reset();
    }


    len = this.shapeModifiers.length;

    for(i=len-1;i>=0;i-=1){
        this.shapeModifiers[i].processShapes(this.firstFrame);
    }
};

IShapeElement.prototype.renderFrame = function(parentMatrix){
    //this.reloadShapes();
    var renderParent = this._parent.renderFrame.call(this,parentMatrix);
    if(renderParent===false){
        this.hide();
        return;
    }
    if(this.hidden){
        this.layerElement.style.display = 'block';
        this.hidden = false;
    }
    this.renderModifiers();
    var i, len = this.stylesList.length;
    for(i=0;i<len;i+=1){
        this.stylesList[i].d = '';
        this.stylesList[i].mdf = false;
    }
    this.renderShape(this.shapesData,this.itemsData, null);

    for (i = 0; i < len; i += 1) {
        if (this.stylesList[i].ld === '0') {
            this.stylesList[i].ld = '1';
            this.stylesList[i].pElem.style.display = 'block';
            //this.stylesList[i].parent.appendChild(this.stylesList[i].pElem);
        }
        if (this.stylesList[i].mdf || this.firstFrame) {
            this.stylesList[i].pElem.setAttribute('d', this.stylesList[i].d);
            if(this.stylesList[i].msElem){
                this.stylesList[i].msElem.setAttribute('d', this.stylesList[i].d);
            }
        }
    }
    if (this.firstFrame) {
        this.firstFrame = false;
    }
};

IShapeElement.prototype.hide = function(){
    if(!this.hidden){
        this.layerElement.style.display = 'none';
        var i, len = this.stylesList.length;
        for(i=len-1;i>=0;i-=1){
            if(this.stylesList[i].ld !== '0'){
                this.stylesList[i].ld = '0';
                this.stylesList[i].pElem.style.display = 'none';
                if(this.stylesList[i].pElem.parentNode){
                    this.stylesList[i].parent = this.stylesList[i].pElem.parentNode;
                    //this.stylesList[i].pElem.parentNode.removeChild(this.stylesList[i].pElem);
                }
            }
        }
        this.hidden = true;
    }
};

IShapeElement.prototype.renderShape = function(items,data, container){
    var i, len = items.length - 1;
    var ty;
    for(i=len;i>=0;i-=1){
        ty = items[i].ty;
        if(ty == 'tr'){
            if(this.firstFrame || data[i].transform.op.mdf && container){
                container.setAttribute('opacity',data[i].transform.op.v);
            }
            if(this.firstFrame || data[i].transform.mProps.mdf && container){
                container.setAttribute('transform',data[i].transform.mProps.v.to2dCSS());
            }
        }else if(ty == 'sh' || ty == 'el' || ty == 'rc' || ty == 'sr'){
            this.renderPath(items[i],data[i]);
        }else if(ty == 'fl'){
            this.renderFill(items[i],data[i]);
        }else if(ty == 'gf'){
            this.renderGradient(items[i],data[i]);
        }else if(ty == 'gs'){
            this.renderGradient(items[i],data[i]);
            this.renderStroke(items[i],data[i]);
        }else if(ty == 'st'){
            this.renderStroke(items[i],data[i]);
        }else if(ty == 'gr'){
            this.renderShape(items[i].it,data[i].it, data[i].gr);
        }else if(ty == 'tm'){
            //
        }
    }

};

IShapeElement.prototype.buildShapeString = function(pathNodes, length, closed, mat) {
    var i, shapeString = '';
    for(i = 1; i < length; i += 1) {
        if (i === 1) {
            shapeString += " M" + mat.applyToPointStringified(pathNodes.v[0][0], pathNodes.v[0][1]);
        }
        shapeString += " C" + mat.applyToPointStringified(pathNodes.o[i - 1][0], pathNodes.o[i - 1][1]) + " " + mat.applyToPointStringified(pathNodes.i[i][0], pathNodes.i[i][1]) + " " + mat.applyToPointStringified(pathNodes.v[i][0], pathNodes.v[i][1]);
    }
    if (length === 1) {
        shapeString += " M" + mat.applyToPointStringified(pathNodes.v[0][0], pathNodes.v[0][1]);
    }
    if (closed && length) {
        shapeString += " C" + mat.applyToPointStringified(pathNodes.o[i - 1][0], pathNodes.o[i - 1][1]) + " " + mat.applyToPointStringified(pathNodes.i[0][0], pathNodes.i[0][1]) + " " + mat.applyToPointStringified(pathNodes.v[0][0], pathNodes.v[0][1]);
        shapeString += 'z';
    }
    return shapeString;
};

IShapeElement.prototype.renderPath = function(pathData,itemData){
    var len, i, j, jLen,pathStringTransformed,redraw,pathNodes,l, lLen = itemData.elements.length;
    var lvl = itemData.lvl;
    if(!pathData._render){
        return;
    }
    for(l=0;l<lLen;l+=1){
        if(itemData.elements[l].data._render){
            redraw = itemData.sh.mdf || this.firstFrame;
            pathStringTransformed = 'M0 0';
            var paths = itemData.sh.paths;
            jLen = paths._length;
            if(itemData.elements[l].lvl < lvl){
                var mat = this.mHelper.reset(), props;
                var iterations = lvl - itemData.elements[l].lvl;
                var k = itemData.transformers.length-1;
                while(iterations > 0) {
                    redraw = itemData.transformers[k].mProps.mdf || redraw;
                    props = itemData.transformers[k].mProps.v.props;
                    mat.transform(props[0],props[1],props[2],props[3],props[4],props[5],props[6],props[7],props[8],props[9],props[10],props[11],props[12],props[13],props[14],props[15]);
                    iterations --;
                    k --;
                }
                if(redraw){
                    for(j=0;j<jLen;j+=1){
                        pathNodes = paths.shapes[j];
                        if(pathNodes && pathNodes._length){
                            pathStringTransformed += this.buildShapeString(pathNodes, pathNodes._length, pathNodes.c, mat);
                        }
                    }
                    itemData.caches[l] = pathStringTransformed;
                } else {
                    pathStringTransformed = itemData.caches[l];
                }
            } else {
                if(redraw){
                    for(j=0;j<jLen;j+=1){
                        pathNodes = paths.shapes[j];
                        if(pathNodes && pathNodes._length){
                            pathStringTransformed += this.buildShapeString(pathNodes, pathNodes._length, pathNodes.c, this.identityMatrix);
                        }
                    }
                    itemData.caches[l] = pathStringTransformed;
                } else {
                    pathStringTransformed = itemData.caches[l];
                }
            }
            itemData.elements[l].d += pathStringTransformed;
            itemData.elements[l].mdf = redraw || itemData.elements[l].mdf;
        } else {
            itemData.elements[l].mdf = true;
        }
    }
};

IShapeElement.prototype.renderFill = function(styleData,itemData){
    var styleElem = itemData.style;

    if(itemData.c.mdf || this.firstFrame){
        styleElem.pElem.setAttribute('fill','rgb('+bm_floor(itemData.c.v[0])+','+bm_floor(itemData.c.v[1])+','+bm_floor(itemData.c.v[2])+')');
        ////styleElem.pElem.style.fill = 'rgb('+bm_floor(itemData.c.v[0])+','+bm_floor(itemData.c.v[1])+','+bm_floor(itemData.c.v[2])+')';
    }
    if(itemData.o.mdf || this.firstFrame){
        styleElem.pElem.setAttribute('fill-opacity',itemData.o.v);
    }
};

IShapeElement.prototype.renderGradient = function(styleData,itemData){
    var gfill = itemData.gf;
    var opFill = itemData.of;
    var pt1 = itemData.s.v,pt2 = itemData.e.v;

    if(itemData.o.mdf || this.firstFrame){
        var attr = styleData.ty === 'gf' ? 'fill-opacity':'stroke-opacity';
        itemData.elem.setAttribute(attr,itemData.o.v);
    }
    //clippedElement.setAttribute('transform','matrix(1,0,0,1,-100,0)');
    if(itemData.s.mdf || this.firstFrame){
        var attr1 = styleData.t === 1 ? 'x1':'cx';
        var attr2 = attr1 === 'x1' ? 'y1':'cy';
        gfill.setAttribute(attr1,pt1[0]);
        gfill.setAttribute(attr2,pt1[1]);
        if(opFill){
            opFill.setAttribute(attr1,pt1[0]);
            opFill.setAttribute(attr2,pt1[1]);
        }
    }
    var stops, i, len, stop;
    if(itemData.g.cmdf || this.firstFrame){
        stops = itemData.cst;
        var cValues = itemData.g.c;
        len = stops.length;
        for(i=0;i<len;i+=1){
            stop = stops[i];
            stop.setAttribute('offset',cValues[i*4]+'%');
            stop.setAttribute('stop-color','rgb('+cValues[i*4+1]+','+cValues[i*4+2]+','+cValues[i*4+3]+')');
        }
    }
    if(opFill && (itemData.g.omdf || this.firstFrame)){
        stops = itemData.ost;
        var oValues = itemData.g.o;
        len = stops.length;
        for(i=0;i<len;i+=1){
            stop = stops[i];
            stop.setAttribute('offset',oValues[i*2]+'%');
            stop.setAttribute('stop-opacity',oValues[i*2+1]);
        }
    }
    if(styleData.t === 1){
        if(itemData.e.mdf  || this.firstFrame){
            gfill.setAttribute('x2',pt2[0]);
            gfill.setAttribute('y2',pt2[1]);
            if(opFill){
                opFill.setAttribute('x2',pt2[0]);
                opFill.setAttribute('y2',pt2[1]);
            }
        }
    } else {
        var rad;
        if(itemData.s.mdf || itemData.e.mdf || this.firstFrame){
            rad = Math.sqrt(Math.pow(pt1[0]-pt2[0],2)+Math.pow(pt1[1]-pt2[1],2));
            gfill.setAttribute('r',rad);
            if(opFill){
                opFill.setAttribute('r',rad);
            }
        }
        if(itemData.e.mdf || itemData.h.mdf || itemData.a.mdf || this.firstFrame){
            if(!rad){
                rad = Math.sqrt(Math.pow(pt1[0]-pt2[0],2)+Math.pow(pt1[1]-pt2[1],2));
            }
            var ang = Math.atan2(pt2[1]-pt1[1], pt2[0]-pt1[0]);

            var percent = itemData.h.v >= 1 ? 0.99 : itemData.h.v <= -1 ? -0.99:itemData.h.v;
            var dist = rad*percent;
            var x = Math.cos(ang + itemData.a.v)*dist + pt1[0];
            var y = Math.sin(ang + itemData.a.v)*dist + pt1[1];
            gfill.setAttribute('fx',x);
            gfill.setAttribute('fy',y);
            if(opFill){
                opFill.setAttribute('fx',x);
                opFill.setAttribute('fy',y);
            }
        }
        //gfill.setAttribute('fy','200');
    }
};

IShapeElement.prototype.renderStroke = function(styleData,itemData){
    var styleElem = itemData.style;
    //TODO fix dashes
    var d = itemData.d;
    var dasharray,dashoffset;
    if(d && d.k && (d.mdf || this.firstFrame)){
        styleElem.pElem.setAttribute('stroke-dasharray', d.dasharray);
        ////styleElem.pElem.style.strokeDasharray = d.dasharray;
        styleElem.pElem.setAttribute('stroke-dashoffset', d.dashoffset);
        ////styleElem.pElem.style.strokeDashoffset = d.dashoffset;
    }
    if(itemData.c && (itemData.c.mdf || this.firstFrame)){
        styleElem.pElem.setAttribute('stroke','rgb('+bm_floor(itemData.c.v[0])+','+bm_floor(itemData.c.v[1])+','+bm_floor(itemData.c.v[2])+')');
        ////styleElem.pElem.style.stroke = 'rgb('+bm_floor(itemData.c.v[0])+','+bm_floor(itemData.c.v[1])+','+bm_floor(itemData.c.v[2])+')';
    }
    if(itemData.o.mdf || this.firstFrame){
        styleElem.pElem.setAttribute('stroke-opacity',itemData.o.v);
    }
    if(itemData.w.mdf || this.firstFrame){
        styleElem.pElem.setAttribute('stroke-width',itemData.w.v);
        if(styleElem.msElem){
            styleElem.msElem.setAttribute('stroke-width',itemData.w.v);
        }
        ////styleElem.pElem.style.strokeWidth = itemData.w.v;
    }
};

IShapeElement.prototype.destroy = function(){
    this._parent.destroy.call(this._parent);
    this.shapeData = null;
    this.itemsData = null;
    this.parentContainer = null;
    this.placeholder = null;
};

function ITextElement(data, animationItem,parentContainer,globalData){
}
ITextElement.prototype.init = function(){
    this._frameId = -1;
    this.lettersChangedFlag = true;
    this.currentTextDocumentData = this.data.t.d.k[0].s;
    this.dynamicProperties = this.dynamicProperties || [];
    this.textAnimator = new TextAnimatorProperty(this.data.t, this.renderType, this);
    this._parent.init.call(this);
    this.textAnimator.searchProperties(this.dynamicProperties);
    this.buildNewText();
};

ITextElement.prototype.prepareFrame = function(num) {
    if(this._frameId === this.globalData.frameId) {
         return;
    }
    this._frameId = this.globalData.frameId;
    var textKeys = this.data.t.d.k;
    var i = 0, len = textKeys.length;
    while(i < len) {
        textDocumentData = textKeys[i].s;
        i += 1;
        if(i === len || textKeys[i].t > num){
            break;
        }
    } 
    this.lettersChangedFlag = false;
    if(textDocumentData !== this.currentTextDocumentData){
        this.currentTextDocumentData = textDocumentData;
        this.lettersChangedFlag = true;
        this.buildNewText();
    }
    this._parent.prepareFrame.call(this, num);
}

ITextElement.prototype.createPathShape = function(matrixHelper, shapes) {
    var j,jLen = shapes.length;
    var k, kLen, pathNodes;
    var shapeStr = '';
    for(j=0;j<jLen;j+=1){
        pathNodes = shapes[j].ks.k;
        shapeStr += this.buildShapeString(pathNodes, pathNodes.i.length, true, matrixHelper);
        /*kLen = pathNodes.i.length;
        for(k=1;k<kLen;k+=1){
            if(k==1){
                shapeStr += " M"+matrixHelper.applyToPointStringified(pathNodes.v[0][0],pathNodes.v[0][1]);
            }
            shapeStr += " C"+matrixHelper.applyToPointStringified(pathNodes.o[k-1][0],pathNodes.o[k-1][1]) + " "+matrixHelper.applyToPointStringified(pathNodes.i[k][0],pathNodes.i[k][1]) + " "+matrixHelper.applyToPointStringified(pathNodes.v[k][0],pathNodes.v[k][1]);
        }
        shapeStr += " C"+matrixHelper.applyToPointStringified(pathNodes.o[k-1][0],pathNodes.o[k-1][1]) + " "+matrixHelper.applyToPointStringified(pathNodes.i[0][0],pathNodes.i[0][1]) + " "+matrixHelper.applyToPointStringified(pathNodes.v[0][0],pathNodes.v[0][1]);
        shapeStr += 'z';*/
    }
    return shapeStr;
};

ITextElement.prototype.buildShapeString = IShapeElement.prototype.buildShapeString;

ITextElement.prototype.emptyProp = new LetterProps();

function SVGTextElement(data,parentContainer,globalData,comp, placeholder){
    this.textSpans = [];
    this.renderType = 'svg';
    this._parent.constructor.call(this,data,parentContainer,globalData,comp, placeholder);
}
createElement(SVGBaseElement, SVGTextElement);

SVGTextElement.prototype.init = ITextElement.prototype.init;
SVGTextElement.prototype.createPathShape = ITextElement.prototype.createPathShape;
SVGTextElement.prototype.prepareFrame = ITextElement.prototype.prepareFrame;
SVGTextElement.prototype.buildShapeString = ITextElement.prototype.buildShapeString;

SVGTextElement.prototype.createElements = function(){

    this._parent.createElements.call(this);


    if(this.data.ln){
        this.layerElement.setAttribute('id',this.data.ln);
    }
    if(this.data.cl){
        this.layerElement.setAttribute('class',this.data.cl);
    }
};

SVGTextElement.prototype.buildNewText = function(){
    var i, len;

    var documentData = this.currentTextDocumentData;
    this.renderedLetters = Array.apply(null,{length:this.currentTextDocumentData.l ? this.currentTextDocumentData.l.length : 0});
    if(documentData.fc) {
        this.layerElement.setAttribute('fill', 'rgb(' + Math.round(documentData.fc[0]*255) + ',' + Math.round(documentData.fc[1]*255) + ',' + Math.round(documentData.fc[2]*255) + ')');
    }else{
        this.layerElement.setAttribute('fill', 'rgba(0,0,0,0)');
    }
    if(documentData.sc){
        this.layerElement.setAttribute('stroke', 'rgb(' + Math.round(documentData.sc[0]*255) + ',' + Math.round(documentData.sc[1]*255) + ',' + Math.round(documentData.sc[2]*255) + ')');
        this.layerElement.setAttribute('stroke-width', documentData.sw);
    }
    this.layerElement.setAttribute('font-size', documentData.s);
    var fontData = this.globalData.fontManager.getFontByName(documentData.f);
    if(fontData.fClass){
        this.layerElement.setAttribute('class',fontData.fClass);
    } else {
        this.layerElement.setAttribute('font-family', fontData.fFamily);
        var fWeight = documentData.fWeight, fStyle = documentData.fStyle;
        this.layerElement.setAttribute('font-style', fStyle);
        this.layerElement.setAttribute('font-weight', fWeight);
    }



    var letters = documentData.l || [];
    len = letters.length;
    if(!len){
        return;
    }
    var tSpan;
    var matrixHelper = this.mHelper;
    var shapes, shapeStr = '', singleShape = this.data.singleShape;
    if (singleShape) {
        var xPos = 0, yPos = 0, lineWidths = documentData.lineWidths, boxWidth = documentData.boxWidth, firstLine = true;
        var trackingOffset = documentData.tr/1000*documentData.s;
    }
    var cnt = 0;
    for (i = 0;i < len ;i += 1) {
        if(this.globalData.fontManager.chars){
            if(!singleShape || i === 0){
                tSpan = this.textSpans[cnt] ? this.textSpans[cnt] : document.createElementNS(svgNS,'path');
            }
        }else{
            tSpan = this.textSpans[cnt] ? this.textSpans[cnt] : document.createElementNS(svgNS,'text');
        }
        tSpan.style.display = 'inherit';
        tSpan.setAttribute('stroke-linecap', 'butt');
        tSpan.setAttribute('stroke-linejoin','round');
        tSpan.setAttribute('stroke-miterlimit','4');
        //tSpan.setAttribute('visibility', 'hidden');
        if(singleShape && letters[i].n) {
            xPos = -trackingOffset;
            yPos += documentData.yOffset;
            yPos += firstLine ? 1 : 0;
            firstLine = false;
        }
        matrixHelper.reset();
        if(this.globalData.fontManager.chars) {
            matrixHelper.scale(documentData.s / 100, documentData.s / 100);
        }
        if (singleShape) {
            if(documentData.ps){
                matrixHelper.translate(documentData.ps[0],documentData.ps[1] + documentData.ascent,0);
            }
            matrixHelper.translate(0,-documentData.ls,0);
            switch(documentData.j){
                case 1:
                    matrixHelper.translate(documentData.justifyOffset + (boxWidth - lineWidths[letters[i].line]),0,0);
                    break;
                case 2:
                    matrixHelper.translate(documentData.justifyOffset + (boxWidth - lineWidths[letters[i].line] )/2,0,0);
                    break;
            }
            matrixHelper.translate(xPos, yPos, 0);
        }
        if(this.globalData.fontManager.chars){
            var charData = this.globalData.fontManager.getCharData(documentData.t.charAt(i), fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
            var shapeData;
            if(charData){
                shapeData = charData.data;
            } else {
                shapeData = null;
            }
            if(shapeData && shapeData.shapes){
                shapes = shapeData.shapes[0].it;
                if(!singleShape){
                    shapeStr = '';
                }
                shapeStr += this.createPathShape(matrixHelper,shapes);
                if(!singleShape){

                    tSpan.setAttribute('d',shapeStr);
                }
            }
            if(!singleShape){
                this.layerElement.appendChild(tSpan);
            }
        }else{
            tSpan.textContent = letters[i].val;
            tSpan.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space","preserve");
            this.layerElement.appendChild(tSpan);
            if(singleShape){
                tSpan.setAttribute('transform',matrixHelper.to2dCSS());
            }
        }
        if(singleShape) {
            xPos += letters[i].l || 0;
            xPos += trackingOffset;
        }
        //
        this.textSpans[cnt] = tSpan;
        cnt += 1;
    }
    if(!singleShape){
        while(cnt < this.textSpans.length){
            this.textSpans[cnt].style.display = 'none';
            cnt += 1;
        }
    }
    if(singleShape && this.globalData.fontManager.chars){
        tSpan.setAttribute('d',shapeStr);
        this.layerElement.appendChild(tSpan);
    }
    this._sizeChanged = true;
}

SVGTextElement.prototype.sourceRectAtTime = function(time){
    this.prepareFrame(this.comp.renderedFrame - this.data.st);
    this.renderLetters();
    if(this._sizeChanged){
        this._sizeChanged = false;
        var textBox = this.layerElement.getBBox();
        this.bbox = {
            top: textBox.y,
            left: textBox.x,
            width: textBox.width,
            height: textBox.height
        }
    }
    return this.bbox;
}

SVGTextElement.prototype.renderLetters = function(){

    if(!this.data.singleShape){
        this.textAnimator.getMeasures(this.currentTextDocumentData, this.lettersChangedFlag);
        if(this.lettersChangedFlag || this.textAnimator.lettersChangedFlag){
            this._sizeChanged = true;
            var  i,len,count=0;
            var renderedLetters = this.textAnimator.renderedLetters;

            var letters = this.currentTextDocumentData.l;

            len = letters.length;
            var renderedLetter;
            for(i=0;i<len;i+=1){
                if(letters[i].n){
                    continue;
                }
                renderedLetter = renderedLetters[count];
                count += 1;
                if(renderedLetter.mdf.m) {
                    this.textSpans[i].setAttribute('transform',renderedLetter.m);
                }
                if(renderedLetter.mdf.o) {
                    this.textSpans[i].setAttribute('opacity',renderedLetter.o);
                }
                if(renderedLetter.mdf.sw){
                    this.textSpans[i].setAttribute('stroke-width',renderedLetter.sw);
                }
                if(renderedLetter.mdf.sc){
                    this.textSpans[i].setAttribute('stroke',renderedLetter.sc);
                }
                if(renderedLetter.mdf.fc){
                    this.textSpans[i].setAttribute('fill',renderedLetter.fc);
                }
            }
        }
    }
}

SVGTextElement.prototype.renderFrame = function(parentMatrix){

    var renderParent = this._parent.renderFrame.call(this,parentMatrix);
    if(renderParent===false){
        this.hide();
        return;
    }
    if(this.hidden){
        this.show();
    }
    if(this.firstFrame) {
        this.firstFrame = false;
    }
    this.renderLetters();
}


SVGTextElement.prototype.destroy = function(){
    this._parent.destroy.call(this._parent);
};
function SVGTintFilter(filter, filterManager){
    this.filterManager = filterManager;
    var feColorMatrix = document.createElementNS(svgNS,'feColorMatrix');
    feColorMatrix.setAttribute('type','matrix');
    feColorMatrix.setAttribute('color-interpolation-filters','linearRGB');
    feColorMatrix.setAttribute('values','0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0');
    feColorMatrix.setAttribute('result','f1');
    filter.appendChild(feColorMatrix);
    feColorMatrix = document.createElementNS(svgNS,'feColorMatrix');
    feColorMatrix.setAttribute('type','matrix');
    feColorMatrix.setAttribute('color-interpolation-filters','sRGB');
    feColorMatrix.setAttribute('values','1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0');
    feColorMatrix.setAttribute('result','f2');
    filter.appendChild(feColorMatrix);
    this.matrixFilter = feColorMatrix;
    if(filterManager.effectElements[2].p.v !== 100 || filterManager.effectElements[2].p.k){
        var feMerge = document.createElementNS(svgNS,'feMerge');
        filter.appendChild(feMerge);
        var feMergeNode;
        feMergeNode = document.createElementNS(svgNS,'feMergeNode');
        feMergeNode.setAttribute('in','SourceGraphic');
        feMerge.appendChild(feMergeNode);
        feMergeNode = document.createElementNS(svgNS,'feMergeNode');
        feMergeNode.setAttribute('in','f2');
        feMerge.appendChild(feMergeNode);
    }
}

SVGTintFilter.prototype.renderFrame = function(forceRender){
    if(forceRender || this.filterManager.mdf){
        var colorBlack = this.filterManager.effectElements[0].p.v;
        var colorWhite = this.filterManager.effectElements[1].p.v;
        var opacity = this.filterManager.effectElements[2].p.v/100;
        this.matrixFilter.setAttribute('values',(colorWhite[0]- colorBlack[0])+' 0 0 0 '+ colorBlack[0] +' '+ (colorWhite[1]- colorBlack[1]) +' 0 0 0 '+ colorBlack[1] +' '+ (colorWhite[2]- colorBlack[2]) +' 0 0 0 '+ colorBlack[2] +' 0 0 0 ' + opacity + ' 0');
    }
};
function SVGFillFilter(filter, filterManager){
    this.filterManager = filterManager;
    var feColorMatrix = document.createElementNS(svgNS,'feColorMatrix');
    feColorMatrix.setAttribute('type','matrix');
    feColorMatrix.setAttribute('color-interpolation-filters','sRGB');
    feColorMatrix.setAttribute('values','1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0');
    filter.appendChild(feColorMatrix);
    this.matrixFilter = feColorMatrix;
}
SVGFillFilter.prototype.renderFrame = function(forceRender){
    if(forceRender || this.filterManager.mdf){
        var color = this.filterManager.effectElements[2].p.v;
        var opacity = this.filterManager.effectElements[6].p.v;
        this.matrixFilter.setAttribute('values','0 0 0 0 '+color[0]+' 0 0 0 0 '+color[1]+' 0 0 0 0 '+color[2]+' 0 0 0 '+opacity+' 0');
    }
};
function SVGStrokeEffect(elem, filterManager){
    this.initialized = false;
    this.filterManager = filterManager;
    this.elem = elem;
    this.paths = [];
}

SVGStrokeEffect.prototype.initialize = function(){

    var elemChildren = this.elem.layerElement.children || this.elem.layerElement.childNodes;
    var path,groupPath, i, len;
    if(this.filterManager.effectElements[1].p.v === 1){
        len = this.elem.maskManager.masksProperties.length;
        i = 0;
    } else {
        i = this.filterManager.effectElements[0].p.v - 1;
        len = i + 1;
    }
    groupPath = document.createElementNS(svgNS,'g'); 
    groupPath.setAttribute('fill','none');
    groupPath.setAttribute('stroke-linecap','round');
    groupPath.setAttribute('stroke-dashoffset',1);
    for(i;i<len;i+=1){
        path = document.createElementNS(svgNS,'path');
        groupPath.appendChild(path);
        this.paths.push({p:path,m:i});
    }
    if(this.filterManager.effectElements[10].p.v === 3){
        var mask = document.createElementNS(svgNS,'mask');
        var id = 'stms_' + randomString(10);
        mask.setAttribute('id',id);
        mask.setAttribute('mask-type','alpha');
        mask.appendChild(groupPath);
        this.elem.globalData.defs.appendChild(mask);
        var g = document.createElementNS(svgNS,'g');
        g.setAttribute('mask','url(' + locationHref + '#'+id+')');
        if(elemChildren[0]){
            g.appendChild(elemChildren[0]);
        }
        this.elem.layerElement.appendChild(g);
        this.masker = mask;
        groupPath.setAttribute('stroke','#fff');
    } else if(this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2){
        if(this.filterManager.effectElements[10].p.v === 2){
            var elemChildren = this.elem.layerElement.children || this.elem.layerElement.childNodes;
            while(elemChildren.length){
                this.elem.layerElement.removeChild(elemChildren[0]);
            }
        }
        this.elem.layerElement.appendChild(groupPath);
        this.elem.layerElement.removeAttribute('mask');
        groupPath.setAttribute('stroke','#fff');
    }
    this.initialized = true;
    this.pathMasker = groupPath;
}

SVGStrokeEffect.prototype.renderFrame = function(forceRender){
    if(!this.initialized){
        this.initialize();
    }
    var i, len = this.paths.length;
    var mask, path;
    for(i=0;i<len;i+=1){
        mask = this.elem.maskManager.viewData[this.paths[i].m];
        path = this.paths[i].p;
        if(forceRender || this.filterManager.mdf || mask.prop.mdf){
            path.setAttribute('d',mask.lastPath);
        }
        if(forceRender || this.filterManager.effectElements[9].p.mdf || this.filterManager.effectElements[4].p.mdf || this.filterManager.effectElements[7].p.mdf || this.filterManager.effectElements[8].p.mdf || mask.prop.mdf){
            var dasharrayValue;
            if(this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100){
                var s = Math.min(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)/100;
                var e = Math.max(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)/100;
                var l = path.getTotalLength();
                dasharrayValue = '0 0 0 ' + l*s + ' ';
                var lineLength = l*(e-s);
                var segment = 1+this.filterManager.effectElements[4].p.v*2*this.filterManager.effectElements[9].p.v/100;
                var units = Math.floor(lineLength/segment);
                var j;
                for(j=0;j<units;j+=1){
                    dasharrayValue += '1 ' + this.filterManager.effectElements[4].p.v*2*this.filterManager.effectElements[9].p.v/100 + ' ';
                }
                dasharrayValue += '0 ' + l*10 + ' 0 0';
            } else {
                dasharrayValue = '1 ' + this.filterManager.effectElements[4].p.v*2*this.filterManager.effectElements[9].p.v/100;
            }
            path.setAttribute('stroke-dasharray',dasharrayValue);
        }
    }
    if(forceRender || this.filterManager.effectElements[4].p.mdf){
        this.pathMasker.setAttribute('stroke-width',this.filterManager.effectElements[4].p.v*2);
    }
    
    if(forceRender || this.filterManager.effectElements[6].p.mdf){
        this.pathMasker.setAttribute('opacity',this.filterManager.effectElements[6].p.v);
    }
    if(this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2){
        if(forceRender || this.filterManager.effectElements[3].p.mdf){
            var color = this.filterManager.effectElements[3].p.v;
            this.pathMasker.setAttribute('stroke','rgb('+bm_floor(color[0]*255)+','+bm_floor(color[1]*255)+','+bm_floor(color[2]*255)+')');
        }
    }
};
function SVGTritoneFilter(filter, filterManager){
    this.filterManager = filterManager;
    var feColorMatrix = document.createElementNS(svgNS,'feColorMatrix');
    feColorMatrix.setAttribute('type','matrix');
    feColorMatrix.setAttribute('color-interpolation-filters','linearRGB');
    feColorMatrix.setAttribute('values','0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0');
    feColorMatrix.setAttribute('result','f1');
    filter.appendChild(feColorMatrix);
    var feComponentTransfer = document.createElementNS(svgNS,'feComponentTransfer');
    feComponentTransfer.setAttribute('color-interpolation-filters','sRGB');
    filter.appendChild(feComponentTransfer);
    this.matrixFilter = feComponentTransfer;
    var feFuncR = document.createElementNS(svgNS,'feFuncR');
    feFuncR.setAttribute('type','table');
    feComponentTransfer.appendChild(feFuncR);
    this.feFuncR = feFuncR;
    var feFuncG = document.createElementNS(svgNS,'feFuncG');
    feFuncG.setAttribute('type','table');
    feComponentTransfer.appendChild(feFuncG);
    this.feFuncG = feFuncG;
    var feFuncB = document.createElementNS(svgNS,'feFuncB');
    feFuncB.setAttribute('type','table');
    feComponentTransfer.appendChild(feFuncB);
    this.feFuncB = feFuncB;
}

SVGTritoneFilter.prototype.renderFrame = function(forceRender){
    if(forceRender || this.filterManager.mdf){
        var color1 = this.filterManager.effectElements[0].p.v;
        var color2 = this.filterManager.effectElements[1].p.v;
        var color3 = this.filterManager.effectElements[2].p.v;
        var tableR = color3[0] + ' ' + color2[0] + ' ' + color1[0]
        var tableG = color3[1] + ' ' + color2[1] + ' ' + color1[1]
        var tableB = color3[2] + ' ' + color2[2] + ' ' + color1[2]
        this.feFuncR.setAttribute('tableValues', tableR);
        this.feFuncG.setAttribute('tableValues', tableG);
        this.feFuncB.setAttribute('tableValues', tableB);
        //var opacity = this.filterManager.effectElements[2].p.v/100;
        //this.matrixFilter.setAttribute('values',(colorWhite[0]- colorBlack[0])+' 0 0 0 '+ colorBlack[0] +' '+ (colorWhite[1]- colorBlack[1]) +' 0 0 0 '+ colorBlack[1] +' '+ (colorWhite[2]- colorBlack[2]) +' 0 0 0 '+ colorBlack[2] +' 0 0 0 ' + opacity + ' 0');
    }
};
function SVGProLevelsFilter(filter, filterManager){
    this.filterManager = filterManager;
    var effectElements = this.filterManager.effectElements;
    var feComponentTransfer = document.createElementNS(svgNS,'feComponentTransfer');
    var feFuncR, feFuncG, feFuncB;
    
    if(effectElements[9].p.k || effectElements[9].p.v !== 0 || effectElements[10].p.k || effectElements[10].p.v !== 1 || effectElements[11].p.k || effectElements[11].p.v !== 1 || effectElements[12].p.k || effectElements[12].p.v !== 0 || effectElements[13].p.k || effectElements[13].p.v !== 1){
        this.feFuncR = this.createFeFunc('feFuncR', feComponentTransfer);
    }
    if(effectElements[16].p.k || effectElements[16].p.v !== 0 || effectElements[17].p.k || effectElements[17].p.v !== 1 || effectElements[18].p.k || effectElements[18].p.v !== 1 || effectElements[19].p.k || effectElements[19].p.v !== 0 || effectElements[20].p.k || effectElements[20].p.v !== 1){
        this.feFuncG = this.createFeFunc('feFuncG', feComponentTransfer);
    }
    if(effectElements[23].p.k || effectElements[23].p.v !== 0 || effectElements[24].p.k || effectElements[24].p.v !== 1 || effectElements[25].p.k || effectElements[25].p.v !== 1 || effectElements[26].p.k || effectElements[26].p.v !== 0 || effectElements[27].p.k || effectElements[27].p.v !== 1){
        this.feFuncB = this.createFeFunc('feFuncB', feComponentTransfer);
    }
    if(effectElements[30].p.k || effectElements[30].p.v !== 0 || effectElements[31].p.k || effectElements[31].p.v !== 1 || effectElements[32].p.k || effectElements[32].p.v !== 1 || effectElements[33].p.k || effectElements[33].p.v !== 0 || effectElements[34].p.k || effectElements[34].p.v !== 1){
        this.feFuncA = this.createFeFunc('feFuncA', feComponentTransfer);
    }
    
    if(this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA){
        feComponentTransfer.setAttribute('color-interpolation-filters','sRGB');
        filter.appendChild(feComponentTransfer);
        feComponentTransfer = document.createElementNS(svgNS,'feComponentTransfer');
    }

    if(effectElements[2].p.k || effectElements[2].p.v !== 0 || effectElements[3].p.k || effectElements[3].p.v !== 1 || effectElements[4].p.k || effectElements[4].p.v !== 1 || effectElements[5].p.k || effectElements[5].p.v !== 0 || effectElements[6].p.k || effectElements[6].p.v !== 1){

        feComponentTransfer.setAttribute('color-interpolation-filters','sRGB');
        filter.appendChild(feComponentTransfer);
        this.feFuncRComposed = this.createFeFunc('feFuncR', feComponentTransfer);
        this.feFuncGComposed = this.createFeFunc('feFuncG', feComponentTransfer);
        this.feFuncBComposed = this.createFeFunc('feFuncB', feComponentTransfer);
    }
}

SVGProLevelsFilter.prototype.createFeFunc = function(type, feComponentTransfer) {
    var feFunc = document.createElementNS(svgNS,type);
    feFunc.setAttribute('type','table');
    feComponentTransfer.appendChild(feFunc);
    return feFunc;
};

SVGProLevelsFilter.prototype.getTableValue = function(inputBlack, inputWhite, gamma, outputBlack, outputWhite) {
    var cnt = 0;
    var segments = 256;
    var perc;
    var min = Math.min(inputBlack, inputWhite);
    var max = Math.max(inputBlack, inputWhite);
    var table = Array.call(null,{length:segments});
    var colorValue;
    var pos = 0;
    var outputDelta = outputWhite - outputBlack; 
    var inputDelta = inputWhite - inputBlack; 
    while(cnt <= 256) {
        perc = cnt/256;
        if(perc <= min){
            colorValue = inputDelta < 0 ? outputWhite : outputBlack;
        } else if(perc >= max){
            colorValue = inputDelta < 0 ? outputBlack : outputWhite;
        } else {
            colorValue = (outputBlack + outputDelta * Math.pow((perc - inputBlack) / inputDelta, 1 / gamma));
        }
        table[pos++] = colorValue;
        cnt += 256/(segments-1);
    }
    return table.join(' ');
};

SVGProLevelsFilter.prototype.renderFrame = function(forceRender){
    if(forceRender || this.filterManager.mdf){
        var val, cnt, perc, bezier;
        var effectElements = this.filterManager.effectElements;
        if(this.feFuncRComposed && (forceRender || effectElements[2].p.mdf || effectElements[3].p.mdf || effectElements[4].p.mdf || effectElements[5].p.mdf || effectElements[6].p.mdf)){
            val = this.getTableValue(effectElements[2].p.v,effectElements[3].p.v,effectElements[4].p.v,effectElements[5].p.v,effectElements[6].p.v);
            this.feFuncRComposed.setAttribute('tableValues',val);
            this.feFuncGComposed.setAttribute('tableValues',val);
            this.feFuncBComposed.setAttribute('tableValues',val);
        }

        if(this.feFuncR && (forceRender || effectElements[9].p.mdf || effectElements[10].p.mdf || effectElements[11].p.mdf || effectElements[12].p.mdf || effectElements[13].p.mdf)){
            val = this.getTableValue(effectElements[9].p.v,effectElements[10].p.v,effectElements[11].p.v,effectElements[12].p.v,effectElements[13].p.v);
            this.feFuncR.setAttribute('tableValues',val);
        }

        if(this.feFuncG && (forceRender || effectElements[16].p.mdf || effectElements[17].p.mdf || effectElements[18].p.mdf || effectElements[19].p.mdf || effectElements[20].p.mdf)){
            val = this.getTableValue(effectElements[16].p.v,effectElements[17].p.v,effectElements[18].p.v,effectElements[19].p.v,effectElements[20].p.v);
            this.feFuncG.setAttribute('tableValues',val);
        }

        if(this.feFuncB && (forceRender || effectElements[23].p.mdf || effectElements[24].p.mdf || effectElements[25].p.mdf || effectElements[26].p.mdf || effectElements[27].p.mdf)){
            val = this.getTableValue(effectElements[23].p.v,effectElements[24].p.v,effectElements[25].p.v,effectElements[26].p.v,effectElements[27].p.v);
            this.feFuncB.setAttribute('tableValues',val);
        }

        if(this.feFuncA && (forceRender || effectElements[30].p.mdf || effectElements[31].p.mdf || effectElements[32].p.mdf || effectElements[33].p.mdf || effectElements[34].p.mdf)){
            val = this.getTableValue(effectElements[30].p.v,effectElements[31].p.v,effectElements[32].p.v,effectElements[33].p.v,effectElements[34].p.v);
            this.feFuncA.setAttribute('tableValues',val);
        }
        
    }
};
function SVGDropShadowEffect(filter, filterManager){
    /*<feGaussianBlur in="SourceAlpha" stdDeviation="3"/> <!-- stdDeviation is how much to blur -->
  <feOffset dx="2" dy="2" result="offsetblur"/> <!-- how much to offset -->
  <feMerge> 
    <feMergeNode/> <!-- this contains the offset blurred image -->
    <feMergeNode in="SourceGraphic"/> <!-- this contains the element that the filter is applied to -->
  </feMerge>*/
  /*<feFlood flood-color="#3D4574" flood-opacity="0.5" result="offsetColor"/>*/
    filter.setAttribute('x','-100%');
    filter.setAttribute('y','-100%');
    filter.setAttribute('width','400%');
    filter.setAttribute('height','400%');
    this.filterManager = filterManager;

    var feGaussianBlur = document.createElementNS(svgNS,'feGaussianBlur');
    feGaussianBlur.setAttribute('in','SourceAlpha');
    feGaussianBlur.setAttribute('result','drop_shadow_1');
    feGaussianBlur.setAttribute('stdDeviation','0');
    this.feGaussianBlur = feGaussianBlur;
    filter.appendChild(feGaussianBlur);

    var feOffset = document.createElementNS(svgNS,'feOffset');
    feOffset.setAttribute('dx','25');
    feOffset.setAttribute('dy','0');
    feOffset.setAttribute('in','drop_shadow_1');
    feOffset.setAttribute('result','drop_shadow_2');
    this.feOffset = feOffset;
    filter.appendChild(feOffset);
    var feFlood = document.createElementNS(svgNS,'feFlood');
    feFlood.setAttribute('flood-color','#00ff00');
    feFlood.setAttribute('flood-opacity','1');
    feFlood.setAttribute('result','drop_shadow_3');
    this.feFlood = feFlood;
    filter.appendChild(feFlood);

    var feComposite = document.createElementNS(svgNS,'feComposite');
    feComposite.setAttribute('in','drop_shadow_3');
    feComposite.setAttribute('in2','drop_shadow_2');
    feComposite.setAttribute('operator','in');
    feComposite.setAttribute('result','drop_shadow_4');
    filter.appendChild(feComposite);


    var feMerge = document.createElementNS(svgNS,'feMerge');
    filter.appendChild(feMerge);
    var feMergeNode;
    feMergeNode = document.createElementNS(svgNS,'feMergeNode');
    feMerge.appendChild(feMergeNode);
    feMergeNode = document.createElementNS(svgNS,'feMergeNode');
    feMergeNode.setAttribute('in','SourceGraphic');
    this.feMergeNode = feMergeNode;
    this.feMerge = feMerge;
    this.originalNodeAdded = false;
    feMerge.appendChild(feMergeNode);
}

SVGDropShadowEffect.prototype.renderFrame = function(forceRender){
    if(forceRender || this.filterManager.mdf){
        if(forceRender || this.filterManager.effectElements[4].p.mdf){
            this.feGaussianBlur.setAttribute('stdDeviation', this.filterManager.effectElements[4].p.v / 4);
        }
        if(forceRender || this.filterManager.effectElements[0].p.mdf){
            var col = this.filterManager.effectElements[0].p.v;
            this.feFlood.setAttribute('flood-color',rgbToHex(Math.round(col[0]*255),Math.round(col[1]*255),Math.round(col[2]*255)));
        }
        if(forceRender || this.filterManager.effectElements[1].p.mdf){
            this.feFlood.setAttribute('flood-opacity',this.filterManager.effectElements[1].p.v/255);
        }
        if(forceRender || this.filterManager.effectElements[2].p.mdf || this.filterManager.effectElements[3].p.mdf){
            var distance = this.filterManager.effectElements[3].p.v
            var angle = (this.filterManager.effectElements[2].p.v - 90) * degToRads
            var x = distance * Math.cos(angle)
            var y = distance * Math.sin(angle)
            this.feOffset.setAttribute('dx', x);
            this.feOffset.setAttribute('dy', y);
        }
        /*if(forceRender || this.filterManager.effectElements[5].p.mdf){
            if(this.filterManager.effectElements[5].p.v === 1 && this.originalNodeAdded) {
                this.feMerge.removeChild(this.feMergeNode);
                this.originalNodeAdded = false;
            } else if(this.filterManager.effectElements[5].p.v === 0 && !this.originalNodeAdded) {
                this.feMerge.appendChild(this.feMergeNode);
                this.originalNodeAdded = true;
            }
        }*/
    }
};
function SVGMatte3Effect(filterElem, filterManager, elem){
    this.initialized = false;
    this.filterManager = filterManager;
    this.filterElem = filterElem;
    this.elem = elem;
    elem.matteElement = document.createElementNS(svgNS,'g');
    elem.matteElement.appendChild(elem.layerElement);
    elem.matteElement.appendChild(elem.transformedElement);
    elem.baseElement = elem.matteElement;
}

SVGMatte3Effect.prototype.setElementAsMask = function(elem, mask) {
    var masker = document.createElementNS(svgNS,'mask');
    masker.setAttribute('id',mask.layerId);
    masker.setAttribute('mask-type','alpha');
    masker.appendChild(mask.layerElement);
    elem.setMatte(mask.layerId);
    mask.data.hd = false;
    var defs = elem.globalData.defs;
    defs.appendChild(masker);
}

SVGMatte3Effect.prototype.initialize = function() {
    var ind = this.filterManager.effectElements[0].p.v;
    var i = 0, len = this.elem.comp.elements.length;
    while(i < len) {
    	if(this.elem.comp.elements[i].data.ind === ind) {
    		this.setElementAsMask(this.elem, this.elem.comp.elements[i]);
    	}
    	i += 1;
    }
    this.initialized = true;
}

SVGMatte3Effect.prototype.renderFrame = function() {
	if(!this.initialized) {
		this.initialize();
	}
}
function SVGEffects(elem){
    var i, len = elem.data.ef.length;
    var filId = randomString(10);
    var fil = filtersFactory.createFilter(filId);
    var count = 0;
    this.filters = [];
    var filterManager;
    for(i=0;i<len;i+=1){
        if(elem.data.ef[i].ty === 20){
            count += 1;
            filterManager = new SVGTintFilter(fil, elem.effects.effectElements[i]);
            this.filters.push(filterManager);
        }else if(elem.data.ef[i].ty === 21){
            count += 1;
            filterManager = new SVGFillFilter(fil, elem.effects.effectElements[i]);
            this.filters.push(filterManager);
        }else if(elem.data.ef[i].ty === 22){
            filterManager = new SVGStrokeEffect(elem, elem.effects.effectElements[i]);
            this.filters.push(filterManager);
        }else if(elem.data.ef[i].ty === 23){
            count += 1;
            filterManager = new SVGTritoneFilter(fil, elem.effects.effectElements[i]);
            this.filters.push(filterManager);
        }else if(elem.data.ef[i].ty === 24){
            count += 1;
            filterManager = new SVGProLevelsFilter(fil, elem.effects.effectElements[i]);
            this.filters.push(filterManager);
        }else if(elem.data.ef[i].ty === 25){
            count += 1;
            filterManager = new SVGDropShadowEffect(fil, elem.effects.effectElements[i]);
            this.filters.push(filterManager);
        }else if(elem.data.ef[i].ty === 28){
            //count += 1;
            filterManager = new SVGMatte3Effect(fil, elem.effects.effectElements[i], elem);
            this.filters.push(filterManager);
        }
    }
    if(count){
        elem.globalData.defs.appendChild(fil);
        elem.layerElement.setAttribute('filter','url(' + locationHref + '#'+filId+')');
    }
}

SVGEffects.prototype.renderFrame = function(firstFrame){
    var i, len = this.filters.length;
    for(i=0;i<len;i+=1){
        this.filters[i].renderFrame(firstFrame);
    }
};
function ICompElement(data,parentContainer,globalData,comp, placeholder){
    this._parent.constructor.call(this,data,parentContainer,globalData,comp, placeholder);
    this.layers = data.layers;
    this.supports3d = true;
    this.completeLayers = false;
    this.pendingElements = [];
    this.elements = this.layers ? Array.apply(null,{length:this.layers.length}) : [];
    if(this.data.tm){
        this.tm = PropertyFactory.getProp(this,this.data.tm,0,globalData.frameRate,this.dynamicProperties);
    }
    if(this.data.xt){
        this.layerElement = document.createElementNS(svgNS,'g');
        this.buildAllItems();
    } else if(!globalData.progressiveLoad){
        this.buildAllItems();
    }
}
createElement(SVGBaseElement, ICompElement);

ICompElement.prototype.hide = function(){
    if(!this.hidden){
        this._parent.hide.call(this);
        var i,len = this.elements.length;
        for( i = 0; i < len; i+=1 ){
            if(this.elements[i]){
                this.elements[i].hide();
            }
        }
    }
};

ICompElement.prototype.prepareFrame = function(num){
    this._parent.prepareFrame.call(this,num);
    if(this.isVisible===false && !this.data.xt){
        return;
    }

    if(this.tm){
        var timeRemapped = this.tm.v;
        if(timeRemapped === this.data.op){
            timeRemapped = this.data.op - 1;
        }
        this.renderedFrame = timeRemapped;
    } else {
        this.renderedFrame = num/this.data.sr;
    }
    var i,len = this.elements.length;
    if(!this.completeLayers){
        this.checkLayers(this.renderedFrame);
    }
    for( i = 0; i < len; i+=1 ){
        if(this.completeLayers || this.elements[i]){
            this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st);
        }
    }
};

ICompElement.prototype.renderFrame = function(parentMatrix){
    var renderParent = this._parent.renderFrame.call(this,parentMatrix);
    var i,len = this.layers.length;
    if(renderParent===false){
        this.hide();
        return;
    }

    if(this.hidden) {
        this.show();
    }
    for( i = 0; i < len; i+=1 ){
        if(this.completeLayers || this.elements[i]){
            this.elements[i].renderFrame();
        }
    }
    if(this.firstFrame){
        this.firstFrame = false;
    }
};

ICompElement.prototype.setElements = function(elems){
    this.elements = elems;
};

ICompElement.prototype.getElements = function(){
    return this.elements;
};

ICompElement.prototype.destroy = function(){
    this._parent.destroy.call(this._parent);
    var i,len = this.layers.length;
    for( i = 0; i < len; i+=1 ){
        if(this.elements[i]){
            this.elements[i].destroy();
        }
    }
};

ICompElement.prototype.checkLayers = SVGRenderer.prototype.checkLayers;
ICompElement.prototype.buildItem = SVGRenderer.prototype.buildItem;
ICompElement.prototype.buildAllItems = SVGRenderer.prototype.buildAllItems;
ICompElement.prototype.buildElementParenting = SVGRenderer.prototype.buildElementParenting;
ICompElement.prototype.createItem = SVGRenderer.prototype.createItem;
ICompElement.prototype.createImage = SVGRenderer.prototype.createImage;
ICompElement.prototype.createComp = SVGRenderer.prototype.createComp;
ICompElement.prototype.createSolid = SVGRenderer.prototype.createSolid;
ICompElement.prototype.createShape = SVGRenderer.prototype.createShape;
ICompElement.prototype.createText = SVGRenderer.prototype.createText;
ICompElement.prototype.createBase = SVGRenderer.prototype.createBase;
ICompElement.prototype.appendElementInPos = SVGRenderer.prototype.appendElementInPos;
ICompElement.prototype.checkPendingElements = SVGRenderer.prototype.checkPendingElements;
ICompElement.prototype.addPendingElement = SVGRenderer.prototype.addPendingElement;
function IImageElement(data,parentContainer,globalData,comp,placeholder){
    this.assetData = globalData.getAssetData(data.refId);
    this._parent.constructor.call(this,data,parentContainer,globalData,comp,placeholder);
}
createElement(SVGBaseElement, IImageElement);

IImageElement.prototype.createElements = function(){

    var assetPath = this.globalData.getAssetsPath(this.assetData);

    this._parent.createElements.call(this);

    this.innerElem = document.createElementNS(svgNS,'image');
    this.innerElem.setAttribute('width',this.assetData.w+"px");
    this.innerElem.setAttribute('height',this.assetData.h+"px");
    this.innerElem.setAttribute('preserveAspectRatio','xMidYMid slice');
    this.innerElem.setAttributeNS('http://www.w3.org/1999/xlink','href',assetPath);
    this.maskedElement = this.innerElem;
    this.layerElement.appendChild(this.innerElem);
    if(this.data.ln){
        this.layerElement.setAttribute('id',this.data.ln);
    }
    if(this.data.cl){
        this.layerElement.setAttribute('class',this.data.cl);
    }

};

IImageElement.prototype.renderFrame = function(parentMatrix){
    var renderParent = this._parent.renderFrame.call(this,parentMatrix);
    if(renderParent===false){
        this.hide();
        return;
    }
    if(this.hidden){
        this.show();
    }
    if(this.firstFrame){
        this.firstFrame = false;
    }
};

IImageElement.prototype.destroy = function(){
    this._parent.destroy.call(this._parent);
    this.innerElem =  null;
};
function ISolidElement(data,parentContainer,globalData,comp, placeholder){
    this._parent.constructor.call(this,data,parentContainer,globalData,comp, placeholder);
}
createElement(SVGBaseElement, ISolidElement);

ISolidElement.prototype.createElements = function(){
    this._parent.createElements.call(this);

    var rect = document.createElementNS(svgNS,'rect');
    ////rect.style.width = this.data.sw;
    ////rect.style.height = this.data.sh;
    ////rect.style.fill = this.data.sc;
    rect.setAttribute('width',this.data.sw);
    rect.setAttribute('height',this.data.sh);
    rect.setAttribute('fill',this.data.sc);
    this.layerElement.appendChild(rect);
    this.innerElem = rect;
    if(this.data.ln){
        this.layerElement.setAttribute('id',this.data.ln);
    }
    if(this.data.cl){
        this.layerElement.setAttribute('class',this.data.cl);
    }
};

ISolidElement.prototype.renderFrame = IImageElement.prototype.renderFrame;
ISolidElement.prototype.destroy = IImageElement.prototype.destroy;

var animationManager = (function(){
    var moduleOb = {};
    var registeredAnimations = [];
    var initTime = 0;
    var len = 0;
    var idled = true;
    var playingAnimationsNum = 0;

    function removeElement(ev){
        var i = 0;
        var animItem = ev.target;
        while(i<len) {
            if (registeredAnimations[i].animation === animItem) {
                registeredAnimations.splice(i, 1);
                i -= 1;
                len -= 1;
                if(!animItem.isPaused){
                    subtractPlayingCount();   
                }
            }
            i += 1;
        }
    }

    function registerAnimation(element, animationData){
        if(!element){
            return null;
        }
        var i=0;
        while(i<len){
            if(registeredAnimations[i].elem == element && registeredAnimations[i].elem !== null ){
                return registeredAnimations[i].animation;
            }
            i+=1;
        }
        var animItem = new AnimationItem();
        setupAnimation(animItem, element);
        animItem.setData(element, animationData);
        return animItem;
    }

    function addPlayingCount(){
        playingAnimationsNum += 1;
        activate();
    }

    function subtractPlayingCount(){
        playingAnimationsNum -= 1;
        if(playingAnimationsNum === 0){
            idled = true;
        }
    }

    function setupAnimation(animItem, element){
        animItem.addEventListener('destroy',removeElement);
        animItem.addEventListener('_active',addPlayingCount);
        animItem.addEventListener('_idle',subtractPlayingCount);
        registeredAnimations.push({elem: element,animation:animItem});
        len += 1;
    }

    function loadAnimation(params){
        var animItem = new AnimationItem();
        setupAnimation(animItem, null);
        animItem.setParams(params);
        return animItem;
    }


    function setSpeed(val,animation){
        var i;
        for(i=0;i<len;i+=1){
            registeredAnimations[i].animation.setSpeed(val, animation);
        }
    }

    function setDirection(val, animation){
        var i;
        for(i=0;i<len;i+=1){
            registeredAnimations[i].animation.setDirection(val, animation);
        }
    }

    function play(animation){
        var i;
        for(i=0;i<len;i+=1){
            registeredAnimations[i].animation.play(animation);
        }
    }

    function moveFrame (value, animation) {
        initTime = Date.now();
        var i;
        for(i=0;i<len;i+=1){
            registeredAnimations[i].animation.moveFrame(value,animation);
        }
    }

    function resume(nowTime) {

        var elapsedTime = nowTime - initTime;
        var i;
        for(i=0;i<len;i+=1){
            registeredAnimations[i].animation.advanceTime(elapsedTime);
        }
        initTime = nowTime;
        if(!idled) {
            requestAnimationFrame(resume);
        }
    }

    function first(nowTime){
        initTime = nowTime;
        requestAnimationFrame(resume);
    }

    function pause(animation) {
        var i;
        for(i=0;i<len;i+=1){
            registeredAnimations[i].animation.pause(animation);
        }
    }

    function goToAndStop(value,isFrame,animation) {
        var i;
        for(i=0;i<len;i+=1){
            registeredAnimations[i].animation.goToAndStop(value,isFrame,animation);
        }
    }

    function stop(animation) {
        var i;
        for(i=0;i<len;i+=1){
            registeredAnimations[i].animation.stop(animation);
        }
    }

    function togglePause(animation) {
        var i;
        for(i=0;i<len;i+=1){
            registeredAnimations[i].animation.togglePause(animation);
        }
    }

    function destroy(animation) {
        var i;
        for(i=(len-1);i>=0;i-=1){
            registeredAnimations[i].animation.destroy(animation);
        }
    }

    function searchAnimations(animationData, standalone, renderer){
        var animElements = document.getElementsByClassName('bodymovin');
        var i, len = animElements.length;
        for(i=0;i<len;i+=1){
            if(renderer){
                animElements[i].setAttribute('data-bm-type',renderer);
            }
            registerAnimation(animElements[i], animationData);
        }
        if(standalone && len === 0){
            if(!renderer){
                renderer = 'svg';
            }
            var body = document.getElementsByTagName('body')[0];
            body.innerHTML = '';
            var div = document.createElement('div');
            div.style.width = '100%';
            div.style.height = '100%';
            div.setAttribute('data-bm-type',renderer);
            body.appendChild(div);
            registerAnimation(div, animationData);
        }
    }

    function resize(){
        var i;
        for(i=0;i<len;i+=1){
            registeredAnimations[i].animation.resize();
        }
    }

    function start(){
        requestAnimationFrame(first);
    }

    function activate(){
        if(idled){
            idled = false;
            requestAnimationFrame(first);
        }
    }

    //start();

    setTimeout(start,0);

    moduleOb.registerAnimation = registerAnimation;
    moduleOb.loadAnimation = loadAnimation;
    moduleOb.setSpeed = setSpeed;
    moduleOb.setDirection = setDirection;
    moduleOb.play = play;
    moduleOb.moveFrame = moveFrame;
    moduleOb.pause = pause;
    moduleOb.stop = stop;
    moduleOb.togglePause = togglePause;
    moduleOb.searchAnimations = searchAnimations;
    moduleOb.resize = resize;
    moduleOb.start = start;
    moduleOb.goToAndStop = goToAndStop;
    moduleOb.destroy = destroy;
    return moduleOb;
}());
var AnimationItem = function () {
    this._cbs = [];
    this.name = '';
    this.path = '';
    this.isLoaded = false;
    this.currentFrame = 0;
    this.currentRawFrame = 0;
    this.totalFrames = 0;
    this.frameRate = 0;
    this.frameMult = 0;
    this.playSpeed = 1;
    this.playDirection = 1;
    this.pendingElements = 0;
    this.playCount = 0;
    this.prerenderFramesFlag = true;
    this.animationData = {};
    this.layers = [];
    this.assets = [];
    this.isPaused = true;
    this.autoplay = false;
    this.loop = true;
    this.renderer = null;
    this.animationID = randomString(10);
    this.scaleMode = 'fit';
    this.assetsPath = '';
    this.timeCompleted = 0;
    this.segmentPos = 0;
    this.subframeEnabled = subframeEnabled;
    this.segments = [];
    this.pendingSegment = false;
    this._idle = true;
    this.projectInterface = ProjectInterface();
};

AnimationItem.prototype.setParams = function(params) {
    var self = this;
    if(params.context){
        this.context = params.context;
    }
    if(params.wrapper || params.container){
        this.wrapper = params.wrapper || params.container;
    }
    var animType = params.animType ? params.animType : params.renderer ? params.renderer : 'svg';
    switch(animType){
        case 'canvas':
            this.renderer = new CanvasRenderer(this, params.rendererSettings);
            break;
        case 'svg':
            this.renderer = new SVGRenderer(this, params.rendererSettings);
            break;
        case 'hybrid':
        case 'html':
        default:
            this.renderer = new HybridRenderer(this, params.rendererSettings);
            break;
    }
    this.renderer.setProjectInterface(this.projectInterface);
    this.animType = animType;

    if(params.loop === '' || params.loop === null){
    }else if(params.loop === false){
        this.loop = false;
    }else if(params.loop === true){
        this.loop = true;
    }else{
        this.loop = parseInt(params.loop);
    }
    this.autoplay = 'autoplay' in params ? params.autoplay : true;
    this.name = params.name ? params.name :  '';
    this.prerenderFramesFlag = 'prerender' in params ? params.prerender : true;
    this.autoloadSegments = params.hasOwnProperty('autoloadSegments') ? params.autoloadSegments :  true;
    if(params.animationData){
        self.configAnimation(params.animationData);
    }else if(params.path){
        if(params.path.substr(-4) != 'json'){
            if (params.path.substr(-1, 1) != '/') {
                params.path += '/';
            }
            params.path += 'data.json';
        }

        var xhr = new XMLHttpRequest();
        if(params.path.lastIndexOf('\\') != -1){
            this.path = params.path.substr(0,params.path.lastIndexOf('\\')+1);
        }else{
            this.path = params.path.substr(0,params.path.lastIndexOf('/')+1);
        }
        this.assetsPath = params.assetsPath;
        this.fileName = params.path.substr(params.path.lastIndexOf('/')+1);
        this.fileName = this.fileName.substr(0,this.fileName.lastIndexOf('.json'));
        xhr.open('GET', params.path, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if(xhr.status == 200){
                    self.configAnimation(JSON.parse(xhr.responseText));
                }else{
                    try{
                        var response = JSON.parse(xhr.responseText);
                        self.configAnimation(response);
                    }catch(err){
                    }
                }
            }
        };
    }
};

AnimationItem.prototype.setData = function (wrapper, animationData) {
    var params = {
        wrapper: wrapper,
        animationData: animationData ? (typeof animationData  === "object") ? animationData : JSON.parse(animationData) : null
    };
    var wrapperAttributes = wrapper.attributes;

    params.path = wrapperAttributes.getNamedItem('data-animation-path') ? wrapperAttributes.getNamedItem('data-animation-path').value : wrapperAttributes.getNamedItem('data-bm-path') ? wrapperAttributes.getNamedItem('data-bm-path').value :  wrapperAttributes.getNamedItem('bm-path') ? wrapperAttributes.getNamedItem('bm-path').value : '';
    params.animType = wrapperAttributes.getNamedItem('data-anim-type') ? wrapperAttributes.getNamedItem('data-anim-type').value : wrapperAttributes.getNamedItem('data-bm-type') ? wrapperAttributes.getNamedItem('data-bm-type').value : wrapperAttributes.getNamedItem('bm-type') ? wrapperAttributes.getNamedItem('bm-type').value :  wrapperAttributes.getNamedItem('data-bm-renderer') ? wrapperAttributes.getNamedItem('data-bm-renderer').value : wrapperAttributes.getNamedItem('bm-renderer') ? wrapperAttributes.getNamedItem('bm-renderer').value : 'canvas';

    var loop = wrapperAttributes.getNamedItem('data-anim-loop') ? wrapperAttributes.getNamedItem('data-anim-loop').value :  wrapperAttributes.getNamedItem('data-bm-loop') ? wrapperAttributes.getNamedItem('data-bm-loop').value :  wrapperAttributes.getNamedItem('bm-loop') ? wrapperAttributes.getNamedItem('bm-loop').value : '';
    if(loop === ''){
    }else if(loop === 'false'){
        params.loop = false;
    }else if(loop === 'true'){
        params.loop = true;
    }else{
        params.loop = parseInt(loop);
    }
    var autoplay = wrapperAttributes.getNamedItem('data-anim-autoplay') ? wrapperAttributes.getNamedItem('data-anim-autoplay').value :  wrapperAttributes.getNamedItem('data-bm-autoplay') ? wrapperAttributes.getNamedItem('data-bm-autoplay').value :  wrapperAttributes.getNamedItem('bm-autoplay') ? wrapperAttributes.getNamedItem('bm-autoplay').value : true;
    params.autoplay = autoplay !== "false";

    params.name = wrapperAttributes.getNamedItem('data-name') ? wrapperAttributes.getNamedItem('data-name').value :  wrapperAttributes.getNamedItem('data-bm-name') ? wrapperAttributes.getNamedItem('data-bm-name').value : wrapperAttributes.getNamedItem('bm-name') ? wrapperAttributes.getNamedItem('bm-name').value :  '';
    var prerender = wrapperAttributes.getNamedItem('data-anim-prerender') ? wrapperAttributes.getNamedItem('data-anim-prerender').value :  wrapperAttributes.getNamedItem('data-bm-prerender') ? wrapperAttributes.getNamedItem('data-bm-prerender').value :  wrapperAttributes.getNamedItem('bm-prerender') ? wrapperAttributes.getNamedItem('bm-prerender').value : '';

    if(prerender === 'false'){
        params.prerender = false;
    }
    this.setParams(params);
};

AnimationItem.prototype.includeLayers = function(data) {
    if(data.op > this.animationData.op){
        this.animationData.op = data.op;
        this.totalFrames = Math.floor(data.op - this.animationData.ip);
        this.animationData.tf = this.totalFrames;
    }
    var layers = this.animationData.layers;
    var i, len = layers.length;
    var newLayers = data.layers;
    var j, jLen = newLayers.length;
    for(j=0;j<jLen;j+=1){
        i = 0;
        while(i<len){
            if(layers[i].id == newLayers[j].id){
                layers[i] = newLayers[j];
                break;
            }
            i += 1;
        }
    }
    if(data.chars || data.fonts){
        this.renderer.globalData.fontManager.addChars(data.chars);
        this.renderer.globalData.fontManager.addFonts(data.fonts, this.renderer.globalData.defs);
    }
    if(data.assets){
        len = data.assets.length;
        for(i = 0; i < len; i += 1){
            this.animationData.assets.push(data.assets[i]);
        }
    }
    //this.totalFrames = 50;
    //this.animationData.tf = 50;
    this.animationData.__complete = false;
    dataManager.completeData(this.animationData,this.renderer.globalData.fontManager);
    this.renderer.includeLayers(data.layers);
    if(expressionsPlugin){
        expressionsPlugin.initExpressions(this);
    }
    this.renderer.renderFrame(null);
    this.loadNextSegment();
};

AnimationItem.prototype.loadNextSegment = function() {
    var segments = this.animationData.segments;
    if(!segments || segments.length === 0 || !this.autoloadSegments){
        this.trigger('data_ready');
        this.timeCompleted = this.animationData.tf;
        return;
    }
    var segment = segments.shift();
    this.timeCompleted = segment.time * this.frameRate;
    var xhr = new XMLHttpRequest();
    var self = this;
    var segmentPath = this.path+this.fileName+'_' + this.segmentPos + '.json';
    this.segmentPos += 1;
    xhr.open('GET', segmentPath, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if(xhr.status == 200){
                self.includeLayers(JSON.parse(xhr.responseText));
            }else{
                try{
                    var response = JSON.parse(xhr.responseText);
                    self.includeLayers(response);
                }catch(err){
                }
            }
        }
    };
};

AnimationItem.prototype.loadSegments = function() {
    var segments = this.animationData.segments;
    if(!segments) {
        this.timeCompleted = this.animationData.tf;
    }
    this.loadNextSegment();
};

AnimationItem.prototype.configAnimation = function (animData) {
    if(this.renderer && this.renderer.destroyed){
        return;
    }
    //console.log(JSON.parse(JSON.stringify(animData)));
    //animData.w = Math.round(animData.w/blitter);
    //animData.h = Math.round(animData.h/blitter);
    this.animationData = animData;
    this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip);
    this.animationData.tf = this.totalFrames;
    this.renderer.configAnimation(animData);
    if(!animData.assets){
        animData.assets = [];
    }
    if(animData.comps) {
        animData.assets = animData.assets.concat(animData.comps);
        animData.comps = null;
    }
    this.renderer.searchExtraCompositions(animData.assets);

    this.layers = this.animationData.layers;
    this.assets = this.animationData.assets;
    this.frameRate = this.animationData.fr;
    this.firstFrame = Math.round(this.animationData.ip);
    this.frameMult = this.animationData.fr / 1000;
    this.trigger('config_ready');
    this.imagePreloader = new ImagePreloader();
    this.imagePreloader.setAssetsPath(this.assetsPath);
    this.imagePreloader.setPath(this.path);
    this.imagePreloader.loadAssets(animData.assets);
    this.loadSegments();
    this.updaFrameModifier();
    if(this.renderer.globalData.fontManager){
        this.waitForFontsLoaded();
    }else{
        dataManager.completeData(this.animationData,this.renderer.globalData.fontManager);
        this.checkLoaded();
    }
};

AnimationItem.prototype.waitForFontsLoaded = (function(){
    function checkFontsLoaded(){
        if(this.renderer.globalData.fontManager.loaded){
            dataManager.completeData(this.animationData,this.renderer.globalData.fontManager);
            //this.renderer.buildItems(this.animationData.layers);
            this.checkLoaded();
        }else{
            setTimeout(checkFontsLoaded.bind(this),20);
        }
    }

    return function(){
        checkFontsLoaded.bind(this)();
    }
}());

AnimationItem.prototype.addPendingElement = function () {
    this.pendingElements += 1;
}

AnimationItem.prototype.elementLoaded = function () {
    this.pendingElements--;
    this.checkLoaded();
};

AnimationItem.prototype.checkLoaded = function () {
    if (this.pendingElements === 0) {
        if(expressionsPlugin){
            expressionsPlugin.initExpressions(this);
        }
        this.renderer.initItems();
        setTimeout(function(){
            this.trigger('DOMLoaded');
        }.bind(this),0);
        this.isLoaded = true;
        this.gotoFrame();
        if(this.autoplay){
            this.play();
        }
    }
};

AnimationItem.prototype.resize = function () {
    this.renderer.updateContainerSize();
};

AnimationItem.prototype.setSubframe = function(flag){
    this.subframeEnabled = flag ? true : false;
}

AnimationItem.prototype.gotoFrame = function () {
    if(this.subframeEnabled){
        this.currentFrame = this.currentRawFrame;
    }else{
        this.currentFrame = Math.floor(this.currentRawFrame);
    }

    if(this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted){
        this.currentFrame = this.timeCompleted;
    }
    this.trigger('enterFrame');
    this.renderFrame();
};

AnimationItem.prototype.renderFrame = function () {
    if(this.isLoaded === false){
        return;
    }
    //console.log('this.currentFrame:',this.currentFrame + this.firstFrame);
    this.renderer.renderFrame(this.currentFrame + this.firstFrame);
};

AnimationItem.prototype.play = function (name) {
    if(name && this.name != name){
        return;
    }
    if(this.isPaused === true){
        this.isPaused = false;
        if(this._idle){
            this._idle = false;
            this.trigger('_active');
        }
    }
};

AnimationItem.prototype.pause = function (name) {
    if(name && this.name != name){
        return;
    }
    if(this.isPaused === false){
        this.isPaused = true;
        if(!this.pendingSegment){
            this._idle = true;
            this.trigger('_idle');
        }
    }
};

AnimationItem.prototype.togglePause = function (name) {
    if(name && this.name != name){
        return;
    }
    if(this.isPaused === true){
        this.play();
    }else{
        this.pause();
    }
};

AnimationItem.prototype.stop = function (name) {
    if(name && this.name != name){
        return;
    }
    this.pause();
    this.currentFrame = this.currentRawFrame = 0;
    this.playCount = 0;
    this.gotoFrame();
};

AnimationItem.prototype.goToAndStop = function (value, isFrame, name) {
    if(name && this.name != name){
        return;
    }
    if(isFrame){
        this.setCurrentRawFrameValue(value);
    }else{
        this.setCurrentRawFrameValue(value * this.frameModifier);
    }
    this.pause();
};

AnimationItem.prototype.goToAndPlay = function (value, isFrame, name) {
    this.goToAndStop(value, isFrame, name);
    this.play();
};

AnimationItem.prototype.advanceTime = function (value) {
    if(this.pendingSegment){
        this.pendingSegment = false;
        this.adjustSegment(this.segments.shift());
        if(this.isPaused){
            this.play();
        }
        return;
    }
    if (this.isPaused === true || this.isLoaded === false) {
        return;
    }
    this.setCurrentRawFrameValue(this.currentRawFrame + value * this.frameModifier);
};

AnimationItem.prototype.updateAnimation = function (perc) {
    this.setCurrentRawFrameValue(this.totalFrames * perc);
};

AnimationItem.prototype.moveFrame = function (value, name) {
    if(name && this.name != name){
        return;
    }
    this.setCurrentRawFrameValue(this.currentRawFrame+value);
};

AnimationItem.prototype.adjustSegment = function(arr){
    this.playCount = 0;
    if(arr[1] < arr[0]){
        if(this.frameModifier > 0){
            if(this.playSpeed < 0){
                this.setSpeed(-this.playSpeed);
            } else {
                this.setDirection(-1);
            }
        }
        this.totalFrames = arr[0] - arr[1];
        this.firstFrame = arr[1];
        this.setCurrentRawFrameValue(this.totalFrames - 0.01);
    } else if(arr[1] > arr[0]){
        if(this.frameModifier < 0){
            if(this.playSpeed < 0){
                this.setSpeed(-this.playSpeed);
            } else {
                this.setDirection(1);
            }
        }
        this.totalFrames = arr[1] - arr[0];
        this.firstFrame = arr[0];
        this.setCurrentRawFrameValue(0);
    }
    this.trigger('segmentStart');
};
AnimationItem.prototype.setSegment = function (init,end) {
    var pendingFrame = -1;
    if(this.isPaused) {
        if (this.currentRawFrame + this.firstFrame < init) {
            pendingFrame = init;
        } else if (this.currentRawFrame + this.firstFrame > end) {
            pendingFrame = end - init - 0.01;
        }
    }

    this.firstFrame = init;
    this.totalFrames = end - init;
    if(pendingFrame !== -1) {
        this.goToAndStop(pendingFrame,true);
    }
}

AnimationItem.prototype.playSegments = function (arr,forceFlag) {
    if(typeof arr[0] === 'object'){
        var i, len = arr.length;
        for(i=0;i<len;i+=1){
            this.segments.push(arr[i]);
        }
    }else{
        this.segments.push(arr);
    }
    if(forceFlag){
        this.adjustSegment(this.segments.shift());
    }
    if(this.isPaused){
        this.play();
    }
};

AnimationItem.prototype.resetSegments = function (forceFlag) {
    this.segments.length = 0;
    this.segments.push([this.animationData.ip*this.frameRate,Math.floor(this.animationData.op - this.animationData.ip+this.animationData.ip*this.frameRate)]);
    if(forceFlag){
        this.adjustSegment(this.segments.shift());
    }
};
AnimationItem.prototype.checkSegments = function(){
    if(this.segments.length){
        this.pendingSegment = true;
    }
}

AnimationItem.prototype.remove = function (name) {
    if(name && this.name != name){
        return;
    }
    this.renderer.destroy();
};

AnimationItem.prototype.destroy = function (name) {
    if((name && this.name != name) || (this.renderer && this.renderer.destroyed)){
        return;
    }
    this.renderer.destroy();
    this.trigger('destroy');
    this._cbs = null;
    this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null;
};

AnimationItem.prototype.setCurrentRawFrameValue = function(value){
    this.currentRawFrame = value;
    //console.log(this.totalFrames);
    if (this.currentRawFrame >= this.totalFrames) {
        this.checkSegments();
        if(this.loop === false){
            this.currentRawFrame = this.totalFrames - 0.01;
            this.gotoFrame();
            this.pause();
            this.trigger('complete');
            return;
        }else{
            this.trigger('loopComplete');
            this.playCount += 1;
            if((this.loop !== true && this.playCount == this.loop) || this.pendingSegment){
                this.currentRawFrame = this.totalFrames - 0.01;
                this.gotoFrame();
                this.pause();
                this.trigger('complete');
                return;
            } else {
                this.currentRawFrame = this.currentRawFrame % this.totalFrames;
            }
        }
    } else if (this.currentRawFrame < 0) {
        this.checkSegments();
        this.playCount -= 1;
        if(this.playCount < 0){
            this.playCount = 0;
        }
        if(this.loop === false  || this.pendingSegment){
            this.currentRawFrame = 0;
            this.gotoFrame();
            this.pause();
            this.trigger('complete');
            return;
        }else{
            this.trigger('loopComplete');
            this.currentRawFrame = (this.totalFrames + this.currentRawFrame) % this.totalFrames;
            this.gotoFrame();
            return;
        }
    }

    this.gotoFrame();
};

AnimationItem.prototype.setSpeed = function (val) {
    this.playSpeed = val;
    this.updaFrameModifier();
};

AnimationItem.prototype.setDirection = function (val) {
    this.playDirection = val < 0 ? -1 : 1;
    this.updaFrameModifier();
};

AnimationItem.prototype.updaFrameModifier = function () {
    this.frameModifier = this.frameMult * this.playSpeed * this.playDirection;
};

AnimationItem.prototype.getPath = function () {
    return this.path;
};

AnimationItem.prototype.getAssetsPath = function (assetData) {
    var path = '';
    if(this.assetsPath){
        var imagePath = assetData.p;
        if(imagePath.indexOf('images/') !== -1){
            imagePath = imagePath.split('/')[1];
        }
        path = this.assetsPath + imagePath;
    } else {
        path = this.path;
        path += assetData.u ? assetData.u : '';
        path += assetData.p;
    }
    return path;
};

AnimationItem.prototype.getAssetData = function (id) {
    var i = 0, len = this.assets.length;
    while (i < len) {
        if(id == this.assets[i].id){
            return this.assets[i];
        }
        i += 1;
    }
};

AnimationItem.prototype.hide = function () {
    this.renderer.hide();
};

AnimationItem.prototype.show = function () {
    this.renderer.show();
};

AnimationItem.prototype.getAssets = function () {
    return this.assets;
};

AnimationItem.prototype.trigger = function(name){
    if(this._cbs && this._cbs[name]){
        switch(name){
            case 'enterFrame':
                this.triggerEvent(name,new BMEnterFrameEvent(name,this.currentFrame,this.totalFrames,this.frameMult));
                break;
            case 'loopComplete':
                this.triggerEvent(name,new BMCompleteLoopEvent(name,this.loop,this.playCount,this.frameMult));
                break;
            case 'complete':
                this.triggerEvent(name,new BMCompleteEvent(name,this.frameMult));
                break;
            case 'segmentStart':
                this.triggerEvent(name,new BMSegmentStartEvent(name,this.firstFrame,this.totalFrames));
                break;
            case 'destroy':
                this.triggerEvent(name,new BMDestroyEvent(name,this));
                break;
            default:
                this.triggerEvent(name);
        }
    }
    if(name === 'enterFrame' && this.onEnterFrame){
        this.onEnterFrame.call(this,new BMEnterFrameEvent(name,this.currentFrame,this.totalFrames,this.frameMult));
    }
    if(name === 'loopComplete' && this.onLoopComplete){
        this.onLoopComplete.call(this,new BMCompleteLoopEvent(name,this.loop,this.playCount,this.frameMult));
    }
    if(name === 'complete' && this.onComplete){
        this.onComplete.call(this,new BMCompleteEvent(name,this.frameMult));
    }
    if(name === 'segmentStart' && this.onSegmentStart){
        this.onSegmentStart.call(this,new BMSegmentStartEvent(name,this.firstFrame,this.totalFrames));
    }
    if(name === 'destroy' && this.onDestroy){
        this.onDestroy.call(this,new BMDestroyEvent(name,this));
    }
};

AnimationItem.prototype.addEventListener = _addEventListener;
AnimationItem.prototype.removeEventListener = _removeEventListener;
AnimationItem.prototype.triggerEvent = _triggerEvent;

function CanvasRenderer(animationItem, config){
    this.animationItem = animationItem;
    this.renderConfig = {
        clearCanvas: (config && config.clearCanvas !== undefined) ? config.clearCanvas : true,
        context: (config && config.context) || null,
        progressiveLoad: (config && config.progressiveLoad) || false,
        preserveAspectRatio: (config && config.preserveAspectRatio) || 'xMidYMid meet'
    };
    this.renderConfig.dpr = (config && config.dpr) || 1;
    if (this.animationItem.wrapper) {
        this.renderConfig.dpr = (config && config.dpr) || window.devicePixelRatio || 1;
    }
    this.renderedFrame = -1;
    this.globalData = {
        frameNum: -1
    };
    this.contextData = {
        saved : Array.apply(null,{length:15}),
        savedOp: Array.apply(null,{length:15}),
        cArrPos : 0,
        cTr : new Matrix(),
        cO : 1
    };
    var i, len = 15;
    for(i=0;i<len;i+=1){
        this.contextData.saved[i] = Array.apply(null,{length:16});
    }
    this.elements = [];
    this.pendingElements = [];
    this.transformMat = new Matrix();
    this.completeLayers = false;
}
extendPrototype(BaseRenderer,CanvasRenderer);

CanvasRenderer.prototype.createBase = function (data) {
    return new CVBaseElement(data, this, this.globalData);
};

CanvasRenderer.prototype.createShape = function (data) {
    return new CVShapeElement(data, this, this.globalData);
};

CanvasRenderer.prototype.createText = function (data) {
    return new CVTextElement(data, this, this.globalData);
};

CanvasRenderer.prototype.createImage = function (data) {
    return new CVImageElement(data, this, this.globalData);
};

CanvasRenderer.prototype.createComp = function (data) {
    return new CVCompElement(data, this, this.globalData);
};

CanvasRenderer.prototype.createSolid = function (data) {
    return new CVSolidElement(data, this, this.globalData);
};

CanvasRenderer.prototype.ctxTransform = function(props){
    if(props[0] === 1 && props[1] === 0 && props[4] === 0 && props[5] === 1 && props[12] === 0 && props[13] === 0){
        return;
    }
    if(!this.renderConfig.clearCanvas){
        this.canvasContext.transform(props[0],props[1],props[4],props[5],props[12],props[13]);
        return;
    }
    this.transformMat.cloneFromProps(props);
    this.transformMat.transform(this.contextData.cTr.props[0],this.contextData.cTr.props[1],this.contextData.cTr.props[2],this.contextData.cTr.props[3],this.contextData.cTr.props[4],this.contextData.cTr.props[5],this.contextData.cTr.props[6],this.contextData.cTr.props[7],this.contextData.cTr.props[8],this.contextData.cTr.props[9],this.contextData.cTr.props[10],this.contextData.cTr.props[11],this.contextData.cTr.props[12],this.contextData.cTr.props[13],this.contextData.cTr.props[14],this.contextData.cTr.props[15])
    //this.contextData.cTr.transform(props[0],props[1],props[2],props[3],props[4],props[5],props[6],props[7],props[8],props[9],props[10],props[11],props[12],props[13],props[14],props[15]);
    this.contextData.cTr.cloneFromProps(this.transformMat.props);
    var trProps = this.contextData.cTr.props;
    this.canvasContext.setTransform(trProps[0],trProps[1],trProps[4],trProps[5],trProps[12],trProps[13]);
};

CanvasRenderer.prototype.ctxOpacity = function(op){
    if(op === 1){
        return;
    }
    if(!this.renderConfig.clearCanvas){
        this.canvasContext.globalAlpha *= op < 0 ? 0 : op;
        return;
    }
    this.contextData.cO *= op < 0 ? 0 : op;
    this.canvasContext.globalAlpha = this.contextData.cO;
};

CanvasRenderer.prototype.reset = function(){
    if(!this.renderConfig.clearCanvas){
        this.canvasContext.restore();
        return;
    }
    this.contextData.cArrPos = 0;
    this.contextData.cTr.reset();
    this.contextData.cO = 1;
};

CanvasRenderer.prototype.save = function(actionFlag){
    if(!this.renderConfig.clearCanvas){
        this.canvasContext.save();
        return;
    }
    if(actionFlag){
        this.canvasContext.save();
    }
    var props = this.contextData.cTr.props;
    if(this.contextData.saved[this.contextData.cArrPos] === null || this.contextData.saved[this.contextData.cArrPos] === undefined){
        this.contextData.saved[this.contextData.cArrPos] = new Array(16);
    }
    var i,arr = this.contextData.saved[this.contextData.cArrPos];
    for(i=0;i<16;i+=1){
        arr[i] = props[i];
    }
    this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO;
    this.contextData.cArrPos += 1;
};

CanvasRenderer.prototype.restore = function(actionFlag){
    if(!this.renderConfig.clearCanvas){
        this.canvasContext.restore();
        return;
    }
    if(actionFlag){
        this.canvasContext.restore();
    }
    this.contextData.cArrPos -= 1;
    var popped = this.contextData.saved[this.contextData.cArrPos];
    var i,arr = this.contextData.cTr.props;
    for(i=0;i<16;i+=1){
        arr[i] = popped[i];
    }
    this.canvasContext.setTransform(popped[0],popped[1],popped[4],popped[5],popped[12],popped[13]);
    popped = this.contextData.savedOp[this.contextData.cArrPos];
    this.contextData.cO = popped;
    this.canvasContext.globalAlpha = popped;
};

CanvasRenderer.prototype.configAnimation = function(animData){
    if(this.animationItem.wrapper){
        this.animationItem.container = document.createElement('canvas');
        this.animationItem.container.style.width = '100%';
        this.animationItem.container.style.height = '100%';
        //this.animationItem.container.style.transform = 'translate3d(0,0,0)';
        //this.animationItem.container.style.webkitTransform = 'translate3d(0,0,0)';
        this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style['-webkit-transform'] = "0px 0px 0px";
        this.animationItem.wrapper.appendChild(this.animationItem.container);
        this.canvasContext = this.animationItem.container.getContext('2d');
    }else{
        this.canvasContext = this.renderConfig.context;
    }
    this.data = animData;
    this.globalData.canvasContext = this.canvasContext;
    this.globalData.renderer = this;
    this.globalData.isDashed = false;
    this.globalData.totalFrames = Math.floor(animData.tf);
    this.globalData.compWidth = animData.w;
    this.globalData.compHeight = animData.h;
    this.globalData.frameRate = animData.fr;
    this.globalData.frameId = 0;
    this.globalData.compSize = {
        w: animData.w,
        h: animData.h
    };
    this.globalData.progressiveLoad = this.renderConfig.progressiveLoad;
    this.layers = animData.layers;
    this.transformCanvas = {};
    this.transformCanvas.w = animData.w;
    this.transformCanvas.h = animData.h;
    this.globalData.fontManager = new FontManager();
    this.globalData.fontManager.addChars(animData.chars);
    this.globalData.fontManager.addFonts(animData.fonts,document.body);
    this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem);
    this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem);
    this.globalData.elementLoaded = this.animationItem.elementLoaded.bind(this.animationItem);
    this.globalData.addPendingElement = this.animationItem.addPendingElement.bind(this.animationItem);
    this.globalData.transformCanvas = this.transformCanvas;
    this.elements = Array.apply(null,{length:animData.layers.length});

    this.updateContainerSize();
};

CanvasRenderer.prototype.updateContainerSize = function () {
    var elementWidth,elementHeight;
    if(this.animationItem.wrapper && this.animationItem.container){
        elementWidth = this.animationItem.wrapper.offsetWidth;
        elementHeight = this.animationItem.wrapper.offsetHeight;
        this.animationItem.container.setAttribute('width',elementWidth * this.renderConfig.dpr );
        this.animationItem.container.setAttribute('height',elementHeight * this.renderConfig.dpr);
    }else{
        elementWidth = this.canvasContext.canvas.width * this.renderConfig.dpr;
        elementHeight = this.canvasContext.canvas.height * this.renderConfig.dpr;
    }
    var elementRel,animationRel;
    if(this.renderConfig.preserveAspectRatio.indexOf('meet') !== -1 || this.renderConfig.preserveAspectRatio.indexOf('slice') !== -1){
        var par = this.renderConfig.preserveAspectRatio.split(' ');
        var fillType = par[1] || 'meet';
        var pos = par[0] || 'xMidYMid';
        var xPos = pos.substr(0,4);
        var yPos = pos.substr(4);
        elementRel = elementWidth/elementHeight;
        animationRel = this.transformCanvas.w/this.transformCanvas.h;
        if(animationRel>elementRel && fillType === 'meet' || animationRel<elementRel && fillType === 'slice'){
            this.transformCanvas.sx = elementWidth/(this.transformCanvas.w/this.renderConfig.dpr);
            this.transformCanvas.sy = elementWidth/(this.transformCanvas.w/this.renderConfig.dpr);
        }else{
            this.transformCanvas.sx = elementHeight/(this.transformCanvas.h / this.renderConfig.dpr);
            this.transformCanvas.sy = elementHeight/(this.transformCanvas.h / this.renderConfig.dpr);
        }

        if(xPos === 'xMid' && ((animationRel<elementRel && fillType==='meet') || (animationRel>elementRel && fillType === 'slice'))){
            this.transformCanvas.tx = (elementWidth-this.transformCanvas.w*(elementHeight/this.transformCanvas.h))/2*this.renderConfig.dpr;
        } else if(xPos === 'xMax' && ((animationRel<elementRel && fillType==='meet') || (animationRel>elementRel && fillType === 'slice'))){
            this.transformCanvas.tx = (elementWidth-this.transformCanvas.w*(elementHeight/this.transformCanvas.h))*this.renderConfig.dpr;
        } else {
            this.transformCanvas.tx = 0;
        }
        if(yPos === 'YMid' && ((animationRel>elementRel && fillType==='meet') || (animationRel<elementRel && fillType === 'slice'))){
            this.transformCanvas.ty = ((elementHeight-this.transformCanvas.h*(elementWidth/this.transformCanvas.w))/2)*this.renderConfig.dpr;
        } else if(yPos === 'YMax' && ((animationRel>elementRel && fillType==='meet') || (animationRel<elementRel && fillType === 'slice'))){
            this.transformCanvas.ty = ((elementHeight-this.transformCanvas.h*(elementWidth/this.transformCanvas.w)))*this.renderConfig.dpr;
        } else {
            this.transformCanvas.ty = 0;
        }

    }else if(this.renderConfig.preserveAspectRatio == 'none'){
        this.transformCanvas.sx = elementWidth/(this.transformCanvas.w/this.renderConfig.dpr);
        this.transformCanvas.sy = elementHeight/(this.transformCanvas.h/this.renderConfig.dpr);
        this.transformCanvas.tx = 0;
        this.transformCanvas.ty = 0;
    }else{
        this.transformCanvas.sx = this.renderConfig.dpr;
        this.transformCanvas.sy = this.renderConfig.dpr;
        this.transformCanvas.tx = 0;
        this.transformCanvas.ty = 0;
    }
    this.transformCanvas.props = [this.transformCanvas.sx,0,0,0,0,this.transformCanvas.sy,0,0,0,0,1,0,this.transformCanvas.tx,this.transformCanvas.ty,0,1];
    var i, len = this.elements.length;
    for(i=0;i<len;i+=1){
        if(this.elements[i] && this.elements[i].data.ty === 0){
            this.elements[i].resize(this.globalData.transformCanvas);
        }
    }
};

CanvasRenderer.prototype.destroy = function () {
    if(this.renderConfig.clearCanvas) {
        this.animationItem.wrapper.innerHTML = '';
    }
    var i, len = this.layers ? this.layers.length : 0;
    for (i = len - 1; i >= 0; i-=1) {
        this.elements[i].destroy();
    }
    this.elements.length = 0;
    this.globalData.canvasContext = null;
    this.animationItem.container = null;
    this.destroyed = true;
};

CanvasRenderer.prototype.renderFrame = function(num){
    if((this.renderedFrame == num && this.renderConfig.clearCanvas === true) || this.destroyed || num === null){
        return;
    }
    this.renderedFrame = num;
    this.globalData.frameNum = num - this.animationItem.firstFrame;
    this.globalData.frameId += 1;
    this.globalData.projectInterface.currentFrame = num;
    if(this.renderConfig.clearCanvas === true){
        this.reset();
        this.canvasContext.save();
        //this.canvasContext.canvas.width = this.canvasContext.canvas.width;
        this.canvasContext.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w*this.transformCanvas.sx, this.transformCanvas.h*this.transformCanvas.sy);
    }else{
        this.save();
    }
    this.ctxTransform(this.transformCanvas.props);
    this.canvasContext.beginPath();
    this.canvasContext.rect(0,0,this.transformCanvas.w,this.transformCanvas.h);
    this.canvasContext.closePath();
    this.canvasContext.clip();

    //console.log('--------');
    //console.log('NEW: ',num);
    var i, len = this.layers.length;
    if(!this.completeLayers){
        this.checkLayers(num);
    }

    for (i = 0; i < len; i++) {
        if(this.completeLayers || this.elements[i]){
            this.elements[i].prepareFrame(num - this.layers[i].st);
        }
    }
    for (i = len - 1; i >= 0; i-=1) {
        if(this.completeLayers || this.elements[i]){
            this.elements[i].renderFrame();
        }
    }
    if(this.renderConfig.clearCanvas !== true){
        this.restore();
    } else {
        this.canvasContext.restore();
    }
};

CanvasRenderer.prototype.buildItem = function(pos){
    var elements = this.elements;
    if(elements[pos] || this.layers[pos].ty == 99){
        return;
    }
    var element = this.createItem(this.layers[pos], this,this.globalData);
    elements[pos] = element;
    element.initExpressions();
    if(this.layers[pos].ty === 0){
        element.resize(this.globalData.transformCanvas);
    }
};

CanvasRenderer.prototype.checkPendingElements  = function(){
    while(this.pendingElements.length){
        var element = this.pendingElements.pop();
        element.checkParenting();
    }
};

CanvasRenderer.prototype.hide = function(){
    this.animationItem.container.style.display = 'none';
};

CanvasRenderer.prototype.show = function(){
    this.animationItem.container.style.display = 'block';
};

CanvasRenderer.prototype.searchExtraCompositions = function(assets){
    var i, len = assets.length;
    var floatingContainer = document.createElementNS(svgNS,'g');
    for(i=0;i<len;i+=1){
        if(assets[i].xt){
            var comp = this.createComp(assets[i],this.globalData.comp,this.globalData);
            comp.initExpressions();
            //comp.compInterface = CompExpressionInterface(comp);
            //Expressions.addLayersInterface(comp.elements, this.globalData.projectInterface);
            this.globalData.projectInterface.registerComposition(comp);
        }
    }
};
function HybridRenderer(animationItem){
    this.animationItem = animationItem;
    this.layers = null;
    this.renderedFrame = -1;
    this.globalData = {
        frameNum: -1
    };
    this.pendingElements = [];
    this.elements = [];
    this.threeDElements = [];
    this.destroyed = false;
    this.camera = null;
    this.supports3d = true;

}

extendPrototype(BaseRenderer,HybridRenderer);

HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem;

HybridRenderer.prototype.checkPendingElements  = function(){
    while(this.pendingElements.length){
        var element = this.pendingElements.pop();
        element.checkParenting();
    }
};

HybridRenderer.prototype.appendElementInPos = function(element, pos){
    var newDOMElement = element.getBaseElement();
    if(!newDOMElement){
        return;
    }
    var layer = this.layers[pos];
    if(!layer.ddd || !this.supports3d){
        var i = 0;
        var nextDOMElement, nextLayer;
        while(i<pos){
            if(this.elements[i] && this.elements[i]!== true && this.elements[i].getBaseElement){
                nextLayer = this.elements[i];
                nextDOMElement = this.layers[i].ddd ? this.getThreeDContainerByPos(i) : nextLayer.getBaseElement();
            }
            i += 1;
        }
        if(nextDOMElement){
            if(!layer.ddd || !this.supports3d){
                this.layerElement.insertBefore(newDOMElement, nextDOMElement);
            }
        } else {
            if(!layer.ddd || !this.supports3d){
                this.layerElement.appendChild(newDOMElement);
            }
        }
    } else {
        this.addTo3dContainer(newDOMElement,pos);
    }
};


HybridRenderer.prototype.createBase = function (data) {
    return new SVGBaseElement(data, this.layerElement,this.globalData,this);
};

HybridRenderer.prototype.createShape = function (data) {
    if(!this.supports3d){
        return new IShapeElement(data, this.layerElement,this.globalData,this);
    }
    return new HShapeElement(data, this.layerElement,this.globalData,this);
};

HybridRenderer.prototype.createText = function (data) {
    if(!this.supports3d){
        return new SVGTextElement(data, this.layerElement,this.globalData,this);
    }
    return new HTextElement(data, this.layerElement,this.globalData,this);
};

HybridRenderer.prototype.createCamera = function (data) {
    this.camera = new HCameraElement(data, this.layerElement,this.globalData,this);
    return this.camera;
};

HybridRenderer.prototype.createImage = function (data) {
    if(!this.supports3d){
        return new IImageElement(data, this.layerElement,this.globalData,this);
    }
    return new HImageElement(data, this.layerElement,this.globalData,this);
};

HybridRenderer.prototype.createComp = function (data) {
    if(!this.supports3d){
        return new ICompElement(data, this.layerElement,this.globalData,this);
    }
    return new HCompElement(data, this.layerElement,this.globalData,this);

};

HybridRenderer.prototype.createSolid = function (data) {
    if(!this.supports3d){
        return new ISolidElement(data, this.layerElement,this.globalData,this);
    }
    return new HSolidElement(data, this.layerElement,this.globalData,this);
};

HybridRenderer.prototype.getThreeDContainerByPos = function(pos){
    var i = 0, len = this.threeDElements.length;
    while(i<len) {
        if(this.threeDElements[i].startPos <= pos && this.threeDElements[i].endPos >= pos) {
            return this.threeDElements[i].perspectiveElem;
        }
        i += 1;
    }
}

HybridRenderer.prototype.createThreeDContainer = function(pos){
    var perspectiveElem = document.createElement('div');
    styleDiv(perspectiveElem);
    perspectiveElem.style.width = this.globalData.compSize.w+'px';
    perspectiveElem.style.height = this.globalData.compSize.h+'px';
    perspectiveElem.style.transformOrigin = perspectiveElem.style.mozTransformOrigin = perspectiveElem.style.webkitTransformOrigin = "50% 50%";
    var container = document.createElement('div');
    styleDiv(container);
    container.style.transform = container.style.webkitTransform = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';
    perspectiveElem.appendChild(container);
    this.resizerElem.appendChild(perspectiveElem);
    var threeDContainerData = {
        container:container,
        perspectiveElem:perspectiveElem,
        startPos: pos,
        endPos: pos
    };
    this.threeDElements.push(threeDContainerData);
    return threeDContainerData;
};

HybridRenderer.prototype.build3dContainers = function(){
    var i, len = this.layers.length;
    var lastThreeDContainerData;
    for(i=0;i<len;i+=1){
        if(this.layers[i].ddd){
            if(!lastThreeDContainerData){
                lastThreeDContainerData = this.createThreeDContainer(i);
            }
            lastThreeDContainerData.endPos = Math.max(lastThreeDContainerData.endPos,i);
        } else {
            lastThreeDContainerData = null;
        }
    }
};

HybridRenderer.prototype.addTo3dContainer = function(elem,pos){
    var i = 0, len = this.threeDElements.length;
    while(i<len){
        if(pos <= this.threeDElements[i].endPos){
            var j = this.threeDElements[i].startPos;
            var nextElement;
            while(j<pos){
                if(this.elements[j] && this.elements[j].getBaseElement){
                    nextElement = this.elements[j].getBaseElement();
                }
                j += 1;
            }
            if(nextElement){
                this.threeDElements[i].container.insertBefore(elem, nextElement);
            } else {
                this.threeDElements[i].container.appendChild(elem);
            }
            break;
        }
        i += 1;
    }
};

HybridRenderer.prototype.configAnimation = function(animData){
    var resizerElem = document.createElement('div');
    var wrapper = this.animationItem.wrapper;
    resizerElem.style.width = animData.w+'px';
    resizerElem.style.height = animData.h+'px';
    this.resizerElem = resizerElem;
    styleDiv(resizerElem);
    resizerElem.style.transformStyle = resizerElem.style.webkitTransformStyle = resizerElem.style.mozTransformStyle = "flat";
    wrapper.appendChild(resizerElem);

    resizerElem.style.overflow = 'hidden';
    var svg = document.createElementNS(svgNS,'svg');
    svg.setAttribute('width','1');
    svg.setAttribute('height','1');
    styleDiv(svg);
    this.resizerElem.appendChild(svg);
    var defs = document.createElementNS(svgNS,'defs');
    svg.appendChild(defs);
    this.globalData.defs = defs;
    this.data = animData;
    //Mask animation
    this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem);
    this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem);
    this.globalData.elementLoaded = this.animationItem.elementLoaded.bind(this.animationItem);
    this.globalData.frameId = 0;
    this.globalData.compSize = {
        w: animData.w,
        h: animData.h
    };
    this.globalData.frameRate = animData.fr;
    this.layers = animData.layers;
    this.globalData.fontManager = new FontManager();
    this.globalData.fontManager.addChars(animData.chars);
    this.globalData.fontManager.addFonts(animData.fonts,svg);
    this.layerElement = this.resizerElem;
    this.build3dContainers();
    this.updateContainerSize();
};

HybridRenderer.prototype.destroy = function () {
    this.animationItem.wrapper.innerHTML = '';
    this.animationItem.container = null;
    this.globalData.defs = null;
    var i, len = this.layers ? this.layers.length : 0;
    for (i = 0; i < len; i++) {
        this.elements[i].destroy();
    }
    this.elements.length = 0;
    this.destroyed = true;
    this.animationItem = null;
};

HybridRenderer.prototype.updateContainerSize = function () {
    var elementWidth = this.animationItem.wrapper.offsetWidth;
    var elementHeight = this.animationItem.wrapper.offsetHeight;
    var elementRel = elementWidth/elementHeight;
    var animationRel = this.globalData.compSize.w/this.globalData.compSize.h;
    var sx,sy,tx,ty;
    if(animationRel>elementRel){
        sx = elementWidth/(this.globalData.compSize.w);
        sy = elementWidth/(this.globalData.compSize.w);
        tx = 0;
        ty = ((elementHeight-this.globalData.compSize.h*(elementWidth/this.globalData.compSize.w))/2);
    }else{
        sx = elementHeight/(this.globalData.compSize.h);
        sy = elementHeight/(this.globalData.compSize.h);
        tx = (elementWidth-this.globalData.compSize.w*(elementHeight/this.globalData.compSize.h))/2;
        ty = 0;
    }
    this.resizerElem.style.transform = this.resizerElem.style.webkitTransform = 'matrix3d(' + sx + ',0,0,0,0,'+sy+',0,0,0,0,1,0,'+tx+','+ty+',0,1)';
};

HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame;

HybridRenderer.prototype.hide = function(){
    this.resizerElem.style.display = 'none';
};

HybridRenderer.prototype.show = function(){
    this.resizerElem.style.display = 'block';
};

HybridRenderer.prototype.initItems = function(){
    this.buildAllItems();
    if(this.camera){
        this.camera.setup();
    } else {
        var cWidth = this.globalData.compSize.w;
        var cHeight = this.globalData.compSize.h;
        var i, len = this.threeDElements.length;
        for(i=0;i<len;i+=1){
            this.threeDElements[i].perspectiveElem.style.perspective = this.threeDElements[i].perspectiveElem.style.webkitPerspective = Math.sqrt(Math.pow(cWidth,2) + Math.pow(cHeight,2)) + 'px';
        }
    }
};

HybridRenderer.prototype.searchExtraCompositions = function(assets){
    var i, len = assets.length;
    var floatingContainer = document.createElement('div');
    for(i=0;i<len;i+=1){
        if(assets[i].xt){
            var comp = this.createComp(assets[i],floatingContainer,this.globalData.comp,null);
            comp.initExpressions();
            this.globalData.projectInterface.registerComposition(comp);
        }
    }
};
function CVBaseElement(data, comp,globalData){
    this.globalData = globalData;
    this.data = data;
    this.comp = comp;
    this.canvasContext = globalData.canvasContext;
    this.init();
}

createElement(BaseElement, CVBaseElement);

CVBaseElement.prototype.createElements = function(){
    this.checkParenting();
};

CVBaseElement.prototype.checkBlendMode = function(globalData){
    if(globalData.blendMode !== this.data.bm) {
        globalData.blendMode = this.data.bm;

        var blendModeValue = '';
        switch (this.data.bm) {
            case 0:
                blendModeValue = 'normal';
                break;
            case 1:
                blendModeValue = 'multiply';
                break;
            case 2:
                blendModeValue = 'screen';
                break;
            case 3:
                blendModeValue = 'overlay';
                break;
            case 4:
                blendModeValue = 'darken';
                break;
            case 5:
                blendModeValue = 'lighten';
                break;
            case 6:
                blendModeValue = 'color-dodge';
                break;
            case 7:
                blendModeValue = 'color-burn';
                break;
            case 8:
                blendModeValue = 'hard-light';
                break;
            case 9:
                blendModeValue = 'soft-light';
                break;
            case 10:
                blendModeValue = 'difference';
                break;
            case 11:
                blendModeValue = 'exclusion';
                break;
            case 12:
                blendModeValue = 'hue';
                break;
            case 13:
                blendModeValue = 'saturation';
                break;
            case 14:
                blendModeValue = 'color';
                break;
            case 15:
                blendModeValue = 'luminosity';
                break;
        }
        globalData.canvasContext.globalCompositeOperation = blendModeValue;
    }
};


CVBaseElement.prototype.renderFrame = function(parentTransform){
    if(this.data.ty === 3){
        return false;
    }
        this.checkBlendMode(this.data.ty === 0?this.parentGlobalData:this.globalData);

    if(!this.isVisible){
        return this.isVisible;
    }
    this.finalTransform.opMdf = this.finalTransform.op.mdf;
    this.finalTransform.matMdf = this.finalTransform.mProp.mdf;
    this.finalTransform.opacity = this.finalTransform.op.v;

    var mat;
    var finalMat = this.finalTransform.mat;

    if(this.hierarchy){
        var i, len = this.hierarchy.length;
        mat = this.finalTransform.mProp.v.props;
        finalMat.cloneFromProps(mat);
        for(i=0;i<len;i+=1){
            this.finalTransform.matMdf = this.hierarchy[i].finalTransform.mProp.mdf ? true : this.finalTransform.matMdf;
            mat = this.hierarchy[i].finalTransform.mProp.v.props;
            finalMat.transform(mat[0],mat[1],mat[2],mat[3],mat[4],mat[5],mat[6],mat[7],mat[8],mat[9],mat[10],mat[11],mat[12],mat[13],mat[14],mat[15]);
        }
    }else{
        if(!parentTransform){
            finalMat.cloneFromProps(this.finalTransform.mProp.v.props);
        }else{
            mat = this.finalTransform.mProp.v.props;
            finalMat.cloneFromProps(mat);
        }
    }

    if(parentTransform){
        mat = parentTransform.mat.props;
        finalMat.transform(mat[0],mat[1],mat[2],mat[3],mat[4],mat[5],mat[6],mat[7],mat[8],mat[9],mat[10],mat[11],mat[12],mat[13],mat[14],mat[15]);
        this.finalTransform.opacity *= parentTransform.opacity;
        this.finalTransform.opMdf = parentTransform.opMdf ? true : this.finalTransform.opMdf;
        this.finalTransform.matMdf = parentTransform.matMdf ? true : this.finalTransform.matMdf
    }

    if(this.data.hasMask){
        this.globalData.renderer.save(true);
        this.maskManager.renderFrame(this.data.ty === 0?null:finalMat);
    }
    if(this.data.hd){
        this.isVisible = false;
    }
    return this.isVisible;

};

CVBaseElement.prototype.addMasks = function(data){
    this.maskManager = new CVMaskElement(data,this,this.globalData);
};


CVBaseElement.prototype.destroy = function(){
    this.canvasContext = null;
    this.data = null;
    this.globalData = null;
    if(this.maskManager) {
        this.maskManager.destroy();
    }
};

CVBaseElement.prototype.mHelper = new Matrix();

function CVCompElement(data, comp,globalData){
    this._parent.constructor.call(this,data, comp,globalData);
    var compGlobalData = {};
    for(var s in globalData){
        if(globalData.hasOwnProperty(s)){
            compGlobalData[s] = globalData[s];
        }
    }
    compGlobalData.renderer = this;
    compGlobalData.compHeight = this.data.h;
    compGlobalData.compWidth = this.data.w;
    this.renderConfig = {
        clearCanvas: true
    };
    this.contextData = {
        saved : Array.apply(null,{length:15}),
        savedOp: Array.apply(null,{length:15}),
        cArrPos : 0,
        cTr : new Matrix(),
        cO : 1
    };
    this.completeLayers = false;
    var i, len = 15;
    for(i=0;i<len;i+=1){
        this.contextData.saved[i] = Array.apply(null,{length:16});
    }
    this.transformMat = new Matrix();
    this.parentGlobalData = this.globalData;
    var cv = document.createElement('canvas');
    //document.body.appendChild(cv);
    compGlobalData.canvasContext = cv.getContext('2d');
    this.canvasContext = compGlobalData.canvasContext;
    cv.width = this.data.w;
    cv.height = this.data.h;
    this.canvas = cv;
    this.globalData = compGlobalData;
    this.layers = data.layers;
    this.pendingElements = [];
    this.elements = Array.apply(null,{length:this.layers.length});
    if(this.data.tm){
        this.tm = PropertyFactory.getProp(this,this.data.tm,0,globalData.frameRate,this.dynamicProperties);
    }
    if(this.data.xt || !globalData.progressiveLoad){
        this.buildAllItems();
    }
}
createElement(CVBaseElement, CVCompElement);

CVCompElement.prototype.ctxTransform = CanvasRenderer.prototype.ctxTransform;
CVCompElement.prototype.ctxOpacity = CanvasRenderer.prototype.ctxOpacity;
CVCompElement.prototype.save = CanvasRenderer.prototype.save;
CVCompElement.prototype.restore = CanvasRenderer.prototype.restore;
CVCompElement.prototype.reset =  function(){
    this.contextData.cArrPos = 0;
    this.contextData.cTr.reset();
    this.contextData.cO = 1;
};
CVCompElement.prototype.resize = function(transformCanvas){
    var maxScale = Math.max(transformCanvas.sx,transformCanvas.sy);
    this.canvas.width = this.data.w*maxScale;
    this.canvas.height = this.data.h*maxScale;
    this.transformCanvas = {
        sc:maxScale,
        w:this.data.w*maxScale,
        h:this.data.h*maxScale,
        props:[maxScale,0,0,0,0,maxScale,0,0,0,0,1,0,0,0,0,1]
    }
    var i,len = this.elements.length;
    for( i = 0; i < len; i+=1 ){
        if(this.elements[i] && this.elements[i].data.ty === 0){
            this.elements[i].resize(transformCanvas);
        }
    }
};

CVCompElement.prototype.prepareFrame = function(num){
    this.globalData.frameId = this.parentGlobalData.frameId;
    this.globalData.mdf = false;
    this._parent.prepareFrame.call(this,num);
    if(this.isVisible===false && !this.data.xt){
        return;
    }
    var timeRemapped = num;
    if(this.tm){
        timeRemapped = this.tm.v;
        if(timeRemapped === this.data.op){
            timeRemapped = this.data.op - 1;
        }
    }
    this.renderedFrame = timeRemapped/this.data.sr;
    var i,len = this.elements.length;

    if(!this.completeLayers){
        this.checkLayers(num);
    }

    for( i = 0; i < len; i+=1 ){
        if(this.completeLayers || this.elements[i]){
            this.elements[i].prepareFrame(timeRemapped/this.data.sr - this.layers[i].st);
            if(this.elements[i].data.ty === 0 && this.elements[i].globalData.mdf){
                this.globalData.mdf = true;
            }
        }
    }
    if(this.globalData.mdf && !this.data.xt){
        this.canvasContext.clearRect(0, 0, this.data.w, this.data.h);
        this.ctxTransform(this.transformCanvas.props);
    }
};

CVCompElement.prototype.renderFrame = function(parentMatrix){
    if(this._parent.renderFrame.call(this,parentMatrix)===false){
        return;
    }
    if(this.globalData.mdf){
        var i,len = this.layers.length;
        for( i = len - 1; i >= 0; i -= 1 ){
            if(this.completeLayers || this.elements[i]){
                this.elements[i].renderFrame();
            }
        }
    }
    if(this.data.hasMask){
        this.globalData.renderer.restore(true);
    }
    if(this.firstFrame){
        this.firstFrame = false;
    }
    this.parentGlobalData.renderer.save();
    this.parentGlobalData.renderer.ctxTransform(this.finalTransform.mat.props);
    this.parentGlobalData.renderer.ctxOpacity(this.finalTransform.opacity);
    this.parentGlobalData.renderer.canvasContext.drawImage(this.canvas,0,0,this.data.w,this.data.h);
    this.parentGlobalData.renderer.restore();

    if(this.globalData.mdf){
        this.reset();
    }
};

CVCompElement.prototype.setElements = function(elems){
    this.elements = elems;
};

CVCompElement.prototype.getElements = function(){
    return this.elements;
};

CVCompElement.prototype.destroy = function(){
    var i,len = this.layers.length;
    for( i = len - 1; i >= 0; i -= 1 ){
        this.elements[i].destroy();
    }
    this.layers = null;
    this.elements = null;
    this._parent.destroy.call(this._parent);
};
CVCompElement.prototype.checkLayers = CanvasRenderer.prototype.checkLayers;
CVCompElement.prototype.buildItem = CanvasRenderer.prototype.buildItem;
CVCompElement.prototype.checkPendingElements = CanvasRenderer.prototype.checkPendingElements;
CVCompElement.prototype.addPendingElement = CanvasRenderer.prototype.addPendingElement;
CVCompElement.prototype.buildAllItems = CanvasRenderer.prototype.buildAllItems;
CVCompElement.prototype.createItem = CanvasRenderer.prototype.createItem;
CVCompElement.prototype.createImage = CanvasRenderer.prototype.createImage;
CVCompElement.prototype.createComp = CanvasRenderer.prototype.createComp;
CVCompElement.prototype.createSolid = CanvasRenderer.prototype.createSolid;
CVCompElement.prototype.createShape = CanvasRenderer.prototype.createShape;
CVCompElement.prototype.createText = CanvasRenderer.prototype.createText;
CVCompElement.prototype.createBase = CanvasRenderer.prototype.createBase;
CVCompElement.prototype.buildElementParenting = CanvasRenderer.prototype.buildElementParenting;
function CVImageElement(data, comp,globalData){
    this.assetData = globalData.getAssetData(data.refId);
    this._parent.constructor.call(this,data, comp,globalData);
    this.globalData.addPendingElement();
}
createElement(CVBaseElement, CVImageElement);

CVImageElement.prototype.createElements = function(){
    var imageLoaded = function(){
        this.globalData.elementLoaded();
        if(this.assetData.w !== this.img.width || this.assetData.h !== this.img.height){
            var canvas = document.createElement('canvas');
            canvas.width = this.assetData.w;
            canvas.height = this.assetData.h;
            var ctx = canvas.getContext('2d');

            var imgW = this.img.width;
            var imgH = this.img.height;
            var imgRel = imgW / imgH;
            var canvasRel = this.assetData.w/this.assetData.h;
            var widthCrop, heightCrop;
            if(imgRel>canvasRel){
                heightCrop = imgH;
                widthCrop = heightCrop*canvasRel;
            } else {
                widthCrop = imgW;
                heightCrop = widthCrop/canvasRel;
            }
            ctx.drawImage(this.img,(imgW-widthCrop)/2,(imgH-heightCrop)/2,widthCrop,heightCrop,0,0,this.assetData.w,this.assetData.h);
            this.img = canvas;
        }
    }.bind(this);
    var imageFailed = function(){
        this.failed = true;
        this.globalData.elementLoaded();
    }.bind(this);

    this.img = new Image();
    this.img.addEventListener('load', imageLoaded, false);
    this.img.addEventListener('error', imageFailed, false);
    var assetPath = this.globalData.getAssetsPath(this.assetData);
    this.img.src = assetPath;

    this._parent.createElements.call(this);

};

CVImageElement.prototype.renderFrame = function(parentMatrix){
    if(this.failed){
        return;
    }
    if(this._parent.renderFrame.call(this,parentMatrix)===false){
        return;
    }
    var ctx = this.canvasContext;
    this.globalData.renderer.save();
    var finalMat = this.finalTransform.mat.props;
    this.globalData.renderer.ctxTransform(finalMat);
    this.globalData.renderer.ctxOpacity(this.finalTransform.opacity);
    ctx.drawImage(this.img,0,0);
    this.globalData.renderer.restore(this.data.hasMask);
    if(this.firstFrame){
        this.firstFrame = false;
    }
};

CVImageElement.prototype.destroy = function(){
    this.img = null;
    this._parent.destroy.call(this._parent);
};

function CVMaskElement(data,element){
    this.data = data;
    this.element = element;
    this.dynamicProperties = [];
    this.masksProperties = this.data.masksProperties;
    this.viewData = new Array(this.masksProperties.length);
    var i, len = this.masksProperties.length;
    for (i = 0; i < len; i++) {
        this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element,this.masksProperties[i],3,this.dynamicProperties,null);
    }
}

CVMaskElement.prototype.getMaskProperty = function(pos){
    return this.viewData[pos];
};

CVMaskElement.prototype.prepareFrame = function(num){
    var i, len = this.dynamicProperties.length;
    for(i=0;i<len;i+=1){
        this.dynamicProperties[i].getValue(num);
        if(this.dynamicProperties[i].mdf){
            this.element.globalData.mdf = true;
        }
    }
};

CVMaskElement.prototype.renderFrame = function (transform) {
    var ctx = this.element.canvasContext;
    var i, len = this.data.masksProperties.length;
    var pt,pt2,pt3,data, hasMasks = false;
    for (i = 0; i < len; i++) {
        if(this.masksProperties[i].mode === 'n'){
            continue;
        }
        if(hasMasks === false){
            ctx.beginPath();
            hasMasks = true;
        }
        if (this.masksProperties[i].inv) {
            ctx.moveTo(0, 0);
            ctx.lineTo(this.element.globalData.compWidth, 0);
            ctx.lineTo(this.element.globalData.compWidth, this.element.globalData.compHeight);
            ctx.lineTo(0, this.element.globalData.compHeight);
            ctx.lineTo(0, 0);
        }
        data = this.viewData[i].v;
        pt = transform ? transform.applyToPointArray(data.v[0][0],data.v[0][1],0):data.v[0];
        ctx.moveTo(pt[0], pt[1]);
        var j, jLen = data._length;
        for (j = 1; j < jLen; j++) {
            pt = transform ? transform.applyToPointArray(data.o[j - 1][0],data.o[j - 1][1],0) : data.o[j - 1];
            pt2 = transform ? transform.applyToPointArray(data.i[j][0],data.i[j][1],0) : data.i[j];
            pt3 = transform ? transform.applyToPointArray(data.v[j][0],data.v[j][1],0) : data.v[j];
            ctx.bezierCurveTo(pt[0], pt[1], pt2[0], pt2[1], pt3[0], pt3[1]);
        }
        pt = transform ? transform.applyToPointArray(data.o[j - 1][0],data.o[j - 1][1],0) : data.o[j - 1];
        pt2 = transform ? transform.applyToPointArray(data.i[0][0],data.i[0][1],0) : data.i[0];
        pt3 = transform ? transform.applyToPointArray(data.v[0][0],data.v[0][1],0) : data.v[0];
        ctx.bezierCurveTo(pt[0], pt[1], pt2[0], pt2[1], pt3[0], pt3[1]);
    }
    if(hasMasks){
        ctx.clip();
    }
};

CVMaskElement.prototype.getMask = function(nm){
    var i = 0, len = this.masksProperties.length;
    while(i<len){
        if(this.masksProperties[i].nm === nm){
            return {
                maskPath: this.viewData[i].pv
            }
        }
        i += 1;
    }
};

CVMaskElement.prototype.destroy = function(){
    this.element = null;
};
function CVShapeElement(data, comp,globalData){
    this.shapes = [];
    this.shapesData = data.shapes;
    this.stylesList = [];
    this.itemsData = [];
    this.prevViewData = [];
    this.shapeModifiers = [];
    this.processedElements = [];
    this._parent.constructor.call(this,data, comp,globalData);
}
createElement(CVBaseElement, CVShapeElement);

CVShapeElement.prototype.transformHelper = {opacity:1,mat:new Matrix(),matMdf:false,opMdf:false};

CVShapeElement.prototype.dashResetter = [];

CVShapeElement.prototype.createElements = function(){

    this._parent.createElements.call(this);
    this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.dynamicProperties, true);
};

CVShapeElement.prototype.createStyleElement = function(data, dynamicProperties){
    var styleElem = {
        data: data,
        type: data.ty,
        elements: []
    };
    var elementData = {};
    if(data.ty == 'fl' || data.ty == 'st'){
        elementData.c = PropertyFactory.getProp(this,data.c,1,255,dynamicProperties);
        if(!elementData.c.k){
            styleElem.co = 'rgb('+bm_floor(elementData.c.v[0])+','+bm_floor(elementData.c.v[1])+','+bm_floor(elementData.c.v[2])+')';
        }
    }
    elementData.o = PropertyFactory.getProp(this,data.o,0,0.01,dynamicProperties);
    if(data.ty == 'st') {
        styleElem.lc = this.lcEnum[data.lc] || 'round';
        styleElem.lj = this.ljEnum[data.lj] || 'round';
        if(data.lj == 1) {
            styleElem.ml = data.ml;
        }
        elementData.w = PropertyFactory.getProp(this,data.w,0,null,dynamicProperties);
        if(!elementData.w.k){
            styleElem.wi = elementData.w.v;
        }
        if(data.d){
            var d = PropertyFactory.getDashProp(this,data.d,'canvas',dynamicProperties);
            elementData.d = d;
            if(!elementData.d.k){
                styleElem.da = elementData.d.dasharray;
                styleElem.do = elementData.d.dashoffset;
            }
        }

    } else {

        styleElem.r = data.r === 2 ? 'evenodd' : 'nonzero';
    }
    this.stylesList.push(styleElem);
    elementData.style = styleElem;
    return elementData;
}

CVShapeElement.prototype.createGroupElement = function(data) {
    var elementData = {
        it: [],
        prevViewData: []
    };
    return elementData;
}

CVShapeElement.prototype.createTransformElement = function(data, dynamicProperties) {
    var elementData = {
        transform : {
            mat: new Matrix(),
            opacity: 1,
            matMdf:false,
            opMdf:false,
            op: PropertyFactory.getProp(this,data.o,0,0.01,dynamicProperties),
            mProps: PropertyFactory.getProp(this,data,2,null,dynamicProperties)
        },
        elements: []
    };
    return elementData;
}

CVShapeElement.prototype.createShapeElement = function(data, dynamicProperties) {
    var elementData = {
        nodes:[],
        trNodes:[],
        tr:[0,0,0,0,0,0]
    };
    var ty = 4;
    if(data.ty == 'rc'){
        ty = 5;
    }else if(data.ty == 'el'){
        ty = 6;
    }else if(data.ty == 'sr'){
        ty = 7;
    }
    elementData.sh = ShapePropertyFactory.getShapeProp(this,data,ty,dynamicProperties);
    this.shapes.push(elementData.sh);
    this.addShapeToModifiers(elementData);
    jLen = this.stylesList.length;
    var hasStrokes = false, hasFills = false;
    for(j=0;j<jLen;j+=1){
        if(!this.stylesList[j].closed){
            this.stylesList[j].elements.push(elementData);
            if(this.stylesList[j].type === 'st'){
                hasStrokes = true;
            }else{
                hasFills = true;
            }
        }
    }
    elementData.st = hasStrokes;
    elementData.fl = hasFills;
    return elementData;
}

CVShapeElement.prototype.reloadShapes = function(){
    this.firstFrame = true;
    var i, len = this.itemsData.length;
    for(i=0;i<len;i+=1){
        this.prevViewData[i] = this.itemsData[i];
    }
    this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.dynamicProperties, true);
    var i, len = this.dynamicProperties.length;
    for(i=0;i<len;i+=1){
        this.dynamicProperties[i].getValue();
    }
    this.renderModifiers();
}

CVShapeElement.prototype.searchShapes = function(arr,itemsData, prevViewData,dynamicProperties, render){
    var i, len = arr.length - 1;
    var j, jLen;
    var ownArrays = [], ownModifiers = [], processedPos;
    for(i=len;i>=0;i-=1){
        processedPos = this.searchProcessedElement(arr[i]);
        if(!processedPos){
            arr[i]._render = render;
        } else {
            itemsData[i] = prevViewData[processedPos - 1];
        }
        if(arr[i].ty == 'fl' || arr[i].ty == 'st'){
            if(!processedPos){
                itemsData[i] = this.createStyleElement(arr[i], dynamicProperties);
            } else {
                itemsData[i].style.closed = false;
            }
            
            ownArrays.push(itemsData[i].style);
        }else if(arr[i].ty == 'gr'){
            if(!processedPos){
                itemsData[i] = this.createGroupElement(arr[i]);
            } else {
                jLen = itemsData[i].it.length;
                for(j=0;j<jLen;j+=1){
                    itemsData[i].prevViewData[j] = itemsData[i].it[j];
                }
            }
            this.searchShapes(arr[i].it,itemsData[i].it,itemsData[i].prevViewData,dynamicProperties, render);
        }else if(arr[i].ty == 'tr'){
            if(!processedPos){
                itemsData[i] = this.createTransformElement(arr[i], dynamicProperties);
            }
        }else if(arr[i].ty == 'sh' || arr[i].ty == 'rc' || arr[i].ty == 'el' || arr[i].ty == 'sr'){
            if(!processedPos){
                itemsData[i] = this.createShapeElement(arr[i], dynamicProperties);
            }
            
        }else if(arr[i].ty == 'tm' || arr[i].ty == 'rd'){
            if(!processedPos){
                var modifier = ShapeModifiers.getModifier(arr[i].ty);
                modifier.init(this,arr[i],dynamicProperties);
                itemsData[i] = modifier;
                this.shapeModifiers.push(modifier);
            } else {
                modifier = itemsData[i];
                modifier.closed = false;
            }
            ownModifiers.push(modifier);
        } else if(arr[i].ty == 'rp'){
            if(!processedPos){
                modifier = ShapeModifiers.getModifier(arr[i].ty);
                itemsData[i] = modifier;
                modifier.init(this,arr,i,itemsData,dynamicProperties);
                this.shapeModifiers.push(modifier);
                render = false;
            }else{
                modifier = itemsData[i];
                modifier.closed = true;
            }
            ownModifiers.push(modifier);
        }
        this.addProcessedElement(arr[i], i + 1);
    }
    len = ownArrays.length;
    for(i=0;i<len;i+=1){
        ownArrays[i].closed = true;
    }
    len = ownModifiers.length;
    for(i=0;i<len;i+=1){
        ownModifiers[i].closed = true;
    }
};

CVShapeElement.prototype.addShapeToModifiers = IShapeElement.prototype.addShapeToModifiers;
CVShapeElement.prototype.renderModifiers = IShapeElement.prototype.renderModifiers;
CVShapeElement.prototype.lcEnum = IShapeElement.prototype.lcEnum;
CVShapeElement.prototype.ljEnum = IShapeElement.prototype.ljEnum;
CVShapeElement.prototype.searchProcessedElement = IShapeElement.prototype.searchProcessedElement;
CVShapeElement.prototype.addProcessedElement = IShapeElement.prototype.addProcessedElement;

CVShapeElement.prototype.renderFrame = function(parentMatrix){
    if(this._parent.renderFrame.call(this, parentMatrix)===false){
        return;
    }
    this.transformHelper.mat.reset();
    this.transformHelper.opacity = this.finalTransform.opacity;
    this.transformHelper.matMdf = false;
    this.transformHelper.opMdf = this.finalTransform.opMdf;
    this.renderModifiers();
    this.renderShape(this.transformHelper,null,null,true);
    if(this.data.hasMask){
        this.globalData.renderer.restore(true);
    }
};

CVShapeElement.prototype.renderShape = function(parentTransform,items,data,isMain){
    var i, len;
    if(!items){
        items = this.shapesData;
        len = this.stylesList.length;
        for(i=0;i<len;i+=1){
            this.stylesList[i].d = '';
            this.stylesList[i].mdf = false;
        }
    }
    if(!data){
        data = this.itemsData;
    }
    ///
    ///
    len = items.length - 1;
    var groupTransform,groupMatrix;
    groupTransform = parentTransform;
    for(i=len;i>=0;i-=1){
        if(items[i].ty == 'tr'){
            groupTransform = data[i].transform;
            var mtArr = data[i].transform.mProps.v.props;
            groupTransform.matMdf = groupTransform.mProps.mdf;
            groupTransform.opMdf = groupTransform.op.mdf;
            groupMatrix = groupTransform.mat;
            groupMatrix.cloneFromProps(mtArr);
            if(parentTransform){
                var props = parentTransform.mat.props;
                groupTransform.opacity = parentTransform.opacity;
                groupTransform.opacity *= data[i].transform.op.v;
                groupTransform.matMdf = parentTransform.matMdf ? true : groupTransform.matMdf;
                groupTransform.opMdf = parentTransform.opMdf ? true : groupTransform.opMdf;
                groupMatrix.transform(props[0],props[1],props[2],props[3],props[4],props[5],props[6],props[7],props[8],props[9],props[10],props[11],props[12],props[13],props[14],props[15]);
            }else{
                groupTransform.opacity = groupTransform.op.o;
            }
        }else if(items[i].ty == 'sh' || items[i].ty == 'el' || items[i].ty == 'rc' || items[i].ty == 'sr'){
            this.renderPath(items[i],data[i],groupTransform);
        }else if(items[i].ty == 'fl'){
            this.renderFill(items[i],data[i],groupTransform);
        }else if(items[i].ty == 'st'){
            this.renderStroke(items[i],data[i],groupTransform);
        }else if(items[i].ty == 'gr'){
            this.renderShape(groupTransform,items[i].it,data[i].it);
        }else if(items[i].ty == 'tm'){
            //
        }
    }
    if(!isMain){
        return;
    }
    len = this.stylesList.length;
    var j, jLen, k, kLen,elems,nodes, renderer = this.globalData.renderer, ctx = this.globalData.canvasContext, type;
    renderer.save();
    renderer.ctxTransform(this.finalTransform.mat.props);
    for(i=0;i<len;i+=1){
        type = this.stylesList[i].type;
        if((type === 'st' && this.stylesList[i].wi === 0) || !this.stylesList[i].data._render){
            continue;
        }
        renderer.save();
        elems = this.stylesList[i].elements;
        if(type === 'st'){
            ctx.strokeStyle = this.stylesList[i].co;
            ctx.lineWidth = this.stylesList[i].wi;
            ctx.lineCap = this.stylesList[i].lc;
            ctx.lineJoin = this.stylesList[i].lj;
            ctx.miterLimit = this.stylesList[i].ml || 0;
        }else{
            ctx.fillStyle = this.stylesList[i].co;
        }
        renderer.ctxOpacity(this.stylesList[i].coOp);
        if(type !== 'st'){
            ctx.beginPath();
        }
        jLen = elems.length;
        for(j=0;j<jLen;j+=1){
            if(type === 'st'){
                ctx.beginPath();
                if(this.stylesList[i].da){
                    ctx.setLineDash(this.stylesList[i].da);
                    ctx.lineDashOffset = this.stylesList[i].do;
                    this.globalData.isDashed = true;
                }else if(this.globalData.isDashed){
                    ctx.setLineDash(this.dashResetter);
                    this.globalData.isDashed = false;
                }
            }
            nodes = elems[j].trNodes;
            kLen = nodes.length;

            for(k=0;k<kLen;k+=1){
                if(nodes[k].t == 'm'){
                    ctx.moveTo(nodes[k].p[0],nodes[k].p[1]);
                }else if(nodes[k].t == 'c'){
                    ctx.bezierCurveTo(nodes[k].p1[0],nodes[k].p1[1],nodes[k].p2[0],nodes[k].p2[1],nodes[k].p3[0],nodes[k].p3[1]);
                }else{
                    ctx.closePath();
                }
            }
            if(type === 'st'){
                ctx.stroke();
            }
        }
        if(type !== 'st'){
            ctx.fill(this.stylesList[i].r);
        }
        renderer.restore();
    }
    renderer.restore();
    if(this.firstFrame){
        this.firstFrame = false;
    }
};
CVShapeElement.prototype.renderPath = function(pathData,itemData,groupTransform){
    var len, i, j,jLen;
    var redraw = groupTransform.matMdf || itemData.sh.mdf || this.firstFrame;
    if(redraw) {
        var paths = itemData.sh.paths;
        jLen = paths._length;
        var pathStringTransformed = itemData.trNodes;
        pathStringTransformed.length = 0;
        for(j=0;j<jLen;j+=1){
            var pathNodes = paths.shapes[j];
            if(pathNodes && pathNodes.v){
                len = pathNodes._length;
                for (i = 1; i < len; i += 1) {
                    if (i == 1) {
                        pathStringTransformed.push({
                            t: 'm',
                            p: groupTransform.mat.applyToPointArray(pathNodes.v[0][0], pathNodes.v[0][1], 0)
                        });
                    }
                    pathStringTransformed.push({
                        t: 'c',
                        p1: groupTransform.mat.applyToPointArray(pathNodes.o[i - 1][0], pathNodes.o[i - 1][1], 0),
                        p2: groupTransform.mat.applyToPointArray(pathNodes.i[i][0], pathNodes.i[i][1], 0),
                        p3: groupTransform.mat.applyToPointArray(pathNodes.v[i][0], pathNodes.v[i][1], 0)
                    });
                }
                if (len == 1) {
                    pathStringTransformed.push({
                        t: 'm',
                        p: groupTransform.mat.applyToPointArray(pathNodes.v[0][0], pathNodes.v[0][1], 0)
                    });
                }
                if (pathNodes.c && len) {
                    pathStringTransformed.push({
                        t: 'c',
                        p1: groupTransform.mat.applyToPointArray(pathNodes.o[i - 1][0], pathNodes.o[i - 1][1], 0),
                        p2: groupTransform.mat.applyToPointArray(pathNodes.i[0][0], pathNodes.i[0][1], 0),
                        p3: groupTransform.mat.applyToPointArray(pathNodes.v[0][0], pathNodes.v[0][1], 0)
                    });
                    pathStringTransformed.push({
                        t: 'z'
                    });
                }
                itemData.lStr = pathStringTransformed;
            }

        }

        if (itemData.st) {
            for (i = 0; i < 16; i += 1) {
                itemData.tr[i] = groupTransform.mat.props[i];
            }
        }
        itemData.trNodes = pathStringTransformed;

    }
};



CVShapeElement.prototype.renderFill = function(styleData,itemData, groupTransform){
    var styleElem = itemData.style;

    if(itemData.c.mdf || this.firstFrame){
        styleElem.co = 'rgb('+bm_floor(itemData.c.v[0])+','+bm_floor(itemData.c.v[1])+','+bm_floor(itemData.c.v[2])+')';
    }
    if(itemData.o.mdf || groupTransform.opMdf || this.firstFrame){
        styleElem.coOp = itemData.o.v*groupTransform.opacity;
    }
};

CVShapeElement.prototype.renderStroke = function(styleData,itemData, groupTransform){
    var styleElem = itemData.style;
    //TODO fix dashes
    var d = itemData.d;
    var dasharray,dashoffset;
    if(d && (d.mdf  || this.firstFrame)){
        styleElem.da = d.dasharray;
        styleElem.do = d.dashoffset;
    }
    if(itemData.c.mdf || this.firstFrame){
        styleElem.co = 'rgb('+bm_floor(itemData.c.v[0])+','+bm_floor(itemData.c.v[1])+','+bm_floor(itemData.c.v[2])+')';
    }
    if(itemData.o.mdf || groupTransform.opMdf || this.firstFrame){
        styleElem.coOp = itemData.o.v*groupTransform.opacity;
    }
    if(itemData.w.mdf || this.firstFrame){
        styleElem.wi = itemData.w.v;
    }
};


CVShapeElement.prototype.destroy = function(){
    this.shapesData = null;
    this.globalData = null;
    this.canvasContext = null;
    this.stylesList.length = 0;
    this.itemData.length = 0;
    this._parent.destroy.call(this._parent);
};


function CVSolidElement(data, comp,globalData){
    this._parent.constructor.call(this,data, comp,globalData);
}
createElement(CVBaseElement, CVSolidElement);

CVSolidElement.prototype.renderFrame = function(parentMatrix){
    if(this._parent.renderFrame.call(this, parentMatrix)===false){
        return;
    }
    var ctx = this.canvasContext;
    this.globalData.renderer.save();
    this.globalData.renderer.ctxTransform(this.finalTransform.mat.props);
    this.globalData.renderer.ctxOpacity(this.finalTransform.opacity);
    ctx.fillStyle=this.data.sc;
    ctx.fillRect(0,0,this.data.sw,this.data.sh);
    this.globalData.renderer.restore(this.data.hasMask);
    if(this.firstFrame){
        this.firstFrame = false;
    }
};
function CVTextElement(data, comp, globalData){
    this.textSpans = [];
    this.yOffset = 0;
    this.fillColorAnim = false;
    this.strokeColorAnim = false;
    this.strokeWidthAnim = false;
    this.stroke = false;
    this.fill = false;
    this.justifyOffset = 0;
    this.currentRender = null;
    this.renderType = 'canvas';
    this.values = {
        fill: 'rgba(0,0,0,0)',
        stroke: 'rgba(0,0,0,0)',
        sWidth: 0,
        fValue: ''
    }
    this._parent.constructor.call(this,data,comp, globalData);
}
createElement(CVBaseElement, CVTextElement);

CVTextElement.prototype.init = ITextElement.prototype.init;
CVTextElement.prototype.getMult = ITextElement.prototype.getMult;
CVTextElement.prototype.prepareFrame = ITextElement.prototype.prepareFrame;

CVTextElement.prototype.tHelper = document.createElement('canvas').getContext('2d');

CVTextElement.prototype.createElements = function(){

    this._parent.createElements.call(this);
    //console.log('this.data: ',this.data);

};

CVTextElement.prototype.buildNewText = function(){
    var documentData = this.currentTextDocumentData;
    this.renderedLetters = Array.apply(null,{length:this.currentTextDocumentData.l ? this.currentTextDocumentData.l.length : 0});

    var hasFill = false;
    if(documentData.fc) {
        hasFill = true;
        this.values.fill = 'rgb(' + Math.round(documentData.fc[0]*255) + ',' + Math.round(documentData.fc[1]*255) + ',' + Math.round(documentData.fc[2]*255) + ')';
    }else{
        this.values.fill = 'rgba(0,0,0,0)';
    }
    this.fill = hasFill;
    var hasStroke = false;
    if(documentData.sc){
        hasStroke = true;
        this.values.stroke = 'rgb(' + Math.round(documentData.sc[0]*255) + ',' + Math.round(documentData.sc[1]*255) + ',' + Math.round(documentData.sc[2]*255) + ')';
        this.values.sWidth = documentData.sw;
    }
    var fontData = this.globalData.fontManager.getFontByName(documentData.f);
    var i, len;
    var letters = documentData.l;
    var matrixHelper = this.mHelper;
    this.stroke = hasStroke;
    this.values.fValue = documentData.s + 'px '+ this.globalData.fontManager.getFontByName(documentData.f).fFamily;
    len = documentData.t.length;
    this.tHelper.font = this.values.fValue;
    var charData, shapeData, k, kLen, shapes, j, jLen, pathNodes, commands, pathArr, singleShape = this.data.singleShape;
    if (singleShape) {
        var xPos = 0, yPos = 0, lineWidths = documentData.lineWidths, boxWidth = documentData.boxWidth, firstLine = true;
    }
    var cnt = 0;
    for (i = 0;i < len ;i += 1) {
        charData = this.globalData.fontManager.getCharData(documentData.t.charAt(i), fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
        var shapeData;
        if(charData){
            shapeData = charData.data;
        } else {
            shapeData = null;
        }
        matrixHelper.reset();
        if(singleShape && letters[i].n) {
            xPos = 0;
            yPos += documentData.yOffset;
            yPos += firstLine ? 1 : 0;
            firstLine = false;
        }

        if(shapeData && shapeData.shapes){
            shapes = shapeData.shapes[0].it;
            jLen = shapes.length;
            matrixHelper.scale(documentData.s/100,documentData.s/100);
            if(singleShape){
                if(documentData.ps){
                    matrixHelper.translate(documentData.ps[0],documentData.ps[1] + documentData.ascent,0);
                }
                matrixHelper.translate(0,-documentData.ls,0);
                switch(documentData.j){
                    case 1:
                        matrixHelper.translate(documentData.justifyOffset + (boxWidth - lineWidths[letters[i].line]),0,0);
                        break;
                    case 2:
                        matrixHelper.translate(documentData.justifyOffset + (boxWidth - lineWidths[letters[i].line])/2,0,0);
                        break;
                }
                matrixHelper.translate(xPos,yPos,0);
            }
            commands = new Array(jLen);
            for(j=0;j<jLen;j+=1){
                kLen = shapes[j].ks.k.i.length;
                pathNodes = shapes[j].ks.k;
                pathArr = [];
                for(k=1;k<kLen;k+=1){
                    if(k==1){
                        pathArr.push(matrixHelper.applyToX(pathNodes.v[0][0],pathNodes.v[0][1],0),matrixHelper.applyToY(pathNodes.v[0][0],pathNodes.v[0][1],0));
                    }
                    pathArr.push(matrixHelper.applyToX(pathNodes.o[k-1][0],pathNodes.o[k-1][1],0),matrixHelper.applyToY(pathNodes.o[k-1][0],pathNodes.o[k-1][1],0),matrixHelper.applyToX(pathNodes.i[k][0],pathNodes.i[k][1],0),matrixHelper.applyToY(pathNodes.i[k][0],pathNodes.i[k][1],0),matrixHelper.applyToX(pathNodes.v[k][0],pathNodes.v[k][1],0),matrixHelper.applyToY(pathNodes.v[k][0],pathNodes.v[k][1],0));
                }
                pathArr.push(matrixHelper.applyToX(pathNodes.o[k-1][0],pathNodes.o[k-1][1],0),matrixHelper.applyToY(pathNodes.o[k-1][0],pathNodes.o[k-1][1],0),matrixHelper.applyToX(pathNodes.i[0][0],pathNodes.i[0][1],0),matrixHelper.applyToY(pathNodes.i[0][0],pathNodes.i[0][1],0),matrixHelper.applyToX(pathNodes.v[0][0],pathNodes.v[0][1],0),matrixHelper.applyToY(pathNodes.v[0][0],pathNodes.v[0][1],0));
                commands[j] = pathArr;
            }
        }else{
            commands = [];
        }
        if(singleShape){
            xPos += letters[i].l;
        }
        if(this.textSpans[cnt]){
            this.textSpans[cnt].elem = commands;
        } else {
            this.textSpans[cnt] = {elem: commands};
        }
        cnt +=1;
    }
}

CVTextElement.prototype.renderFrame = function(parentMatrix){
    if(this._parent.renderFrame.call(this, parentMatrix)===false){
        return;
    }
    var ctx = this.canvasContext;
    var finalMat = this.finalTransform.mat.props;
    this.globalData.renderer.save();
    this.globalData.renderer.ctxTransform(finalMat);
    this.globalData.renderer.ctxOpacity(this.finalTransform.opacity);
    ctx.font = this.values.fValue;
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 4;

    if(!this.data.singleShape){
        this.textAnimator.getMeasures(this.currentTextDocumentData, this.lettersChangedFlag);
    }

    var  i,len, j, jLen, k, kLen,count=0;
    var renderedLetters = this.textAnimator.renderedLetters;

    var letters = this.currentTextDocumentData.l;

    len = letters.length;
    var renderedLetter;
    var lastFill = null, lastStroke = null, lastStrokeW = null, commands, pathArr;
    for(i=0;i<len;i+=1){
        if(letters[i].n){
            continue;
        }
        renderedLetter = renderedLetters[count];
        count += 1;
        if(renderedLetter){
            this.globalData.renderer.save();
            this.globalData.renderer.ctxTransform(renderedLetter.p);
            this.globalData.renderer.ctxOpacity(renderedLetter.o);
        }
        if(this.fill){
            if(renderedLetter && renderedLetter.fc){
                if(lastFill !== renderedLetter.fc){
                    lastFill = renderedLetter.fc;
                    ctx.fillStyle = renderedLetter.fc;
                }
            }else if(lastFill !== this.values.fill){
                lastFill = this.values.fill;
                ctx.fillStyle = this.values.fill;
            }
            commands = this.textSpans[i].elem;
            jLen = commands.length;
            this.globalData.canvasContext.beginPath();
            for(j=0;j<jLen;j+=1) {
                pathArr = commands[j];
                kLen = pathArr.length;
                this.globalData.canvasContext.moveTo(pathArr[0], pathArr[1]);
                for (k = 2; k < kLen; k += 6) {
                    this.globalData.canvasContext.bezierCurveTo(pathArr[k], pathArr[k + 1], pathArr[k + 2], pathArr[k + 3], pathArr[k + 4], pathArr[k + 5]);
                }
            }
            this.globalData.canvasContext.closePath();
            this.globalData.canvasContext.fill();
            ///ctx.fillText(this.textSpans[i].val,0,0);
        }
        if(this.stroke){
            if(renderedLetter && renderedLetter.sw){
                if(lastStrokeW !== renderedLetter.sw){
                    lastStrokeW = renderedLetter.sw;
                    ctx.lineWidth = renderedLetter.sw;
                }
            }else if(lastStrokeW !== this.values.sWidth){
                lastStrokeW = this.values.sWidth;
                ctx.lineWidth = this.values.sWidth;
            }
            if(renderedLetter && renderedLetter.sc){
                if(lastStroke !== renderedLetter.sc){
                    lastStroke = renderedLetter.sc;
                    ctx.strokeStyle = renderedLetter.sc;
                }
            }else if(lastStroke !== this.values.stroke){
                lastStroke = this.values.stroke;
                ctx.strokeStyle = this.values.stroke;
            }
            commands = this.textSpans[i].elem;
            jLen = commands.length;
            this.globalData.canvasContext.beginPath();
            for(j=0;j<jLen;j+=1) {
                pathArr = commands[j];
                kLen = pathArr.length;
                this.globalData.canvasContext.moveTo(pathArr[0], pathArr[1]);
                for (k = 2; k < kLen; k += 6) {
                    this.globalData.canvasContext.bezierCurveTo(pathArr[k], pathArr[k + 1], pathArr[k + 2], pathArr[k + 3], pathArr[k + 4], pathArr[k + 5]);
                }
            }
            this.globalData.canvasContext.closePath();
            this.globalData.canvasContext.stroke();
            ///ctx.strokeText(letters[i].val,0,0);
        }
        if(renderedLetter) {
            this.globalData.renderer.restore();
        }
    }
    /*if(this.data.hasMask){
     this.globalData.renderer.restore(true);
     }*/
    this.globalData.renderer.restore(this.data.hasMask);
    if(this.firstFrame){
        this.firstFrame = false;
    }
};
function HBaseElement(data,parentContainer,globalData,comp, placeholder){
    this.globalData = globalData;
    this.comp = comp;
    this.data = data;
    this.matteElement = null;
    this.parentContainer = parentContainer;
    this.layerId = placeholder ? placeholder.layerId : 'ly_'+randomString(10);
    this.placeholder = placeholder;
    this.init();
};

createElement(BaseElement, HBaseElement);
HBaseElement.prototype.checkBlendMode = function(){

};
HBaseElement.prototype.setBlendMode = BaseElement.prototype.setBlendMode;

/*HBaseElement.prototype.appendNodeToParent = function(node) {
    if(this.data.hd){
        return;
    }
    if(this.placeholder){
        var g = this.placeholder.phElement;
        g.parentNode.insertBefore(node, g);
        //g.parentNode.removeChild(g);
    }else{
        this.parentContainer.appendChild(node);
    }
};*/


HBaseElement.prototype.getBaseElement = function(){
    return this.baseElement;
};

HBaseElement.prototype.createElements = function(){
    if(this.data.hasMask){
        this.layerElement = document.createElementNS(svgNS,'svg');
        styleDiv(this.layerElement);
        //this.appendNodeToParent(this.layerElement);
        this.baseElement = this.layerElement;
        this.maskedElement = this.layerElement;
    }else{
        this.layerElement = this.parentContainer;
    }
    this.transformedElement = this.layerElement;
    if(this.data.ln && (this.data.ty === 4 || this.data.ty === 0)){
        if(this.layerElement === this.parentContainer){
            this.layerElement = document.createElementNS(svgNS,'g');
            //this.appendNodeToParent(this.layerElement);
            this.baseElement = this.layerElement;
        }
        this.layerElement.setAttribute('id',this.data.ln);
    }
    this.setBlendMode();
    if(this.layerElement !== this.parentContainer){
        this.placeholder = null;
    }
    this.checkParenting();
};

HBaseElement.prototype.renderFrame = function(parentTransform){
    if(this.data.ty === 3){
        return false;
    }

    if(this.currentFrameNum === this.lastNum || !this.isVisible){
        return this.isVisible;
    }
    this.lastNum = this.currentFrameNum;

    this.finalTransform.opMdf = this.finalTransform.op.mdf;
    this.finalTransform.matMdf = this.finalTransform.mProp.mdf;
    this.finalTransform.opacity = this.finalTransform.op.v;
    if(this.firstFrame){
        this.finalTransform.opMdf = true;
        this.finalTransform.matMdf = true;
    }

    var mat;
    var finalMat = this.finalTransform.mat;

    if(this.hierarchy){
        var i, len = this.hierarchy.length;

        mat = this.finalTransform.mProp.v.props;
        finalMat.cloneFromProps(mat);
        for(i=0;i<len;i+=1){
            this.finalTransform.matMdf = this.hierarchy[i].finalTransform.mProp.mdf ? true : this.finalTransform.matMdf;
            mat = this.hierarchy[i].finalTransform.mProp.v.props;
            finalMat.transform(mat[0],mat[1],mat[2],mat[3],mat[4],mat[5],mat[6],mat[7],mat[8],mat[9],mat[10],mat[11],mat[12],mat[13],mat[14],mat[15]);
        }
    }else{
        if(this.isVisible && this.finalTransform.matMdf){
            if(!parentTransform){
                finalMat.cloneFromProps(this.finalTransform.mProp.v.props);
            }else{
                mat = this.finalTransform.mProp.v.props;
                finalMat.cloneFromProps(mat);
            }
        }
    }
    if(this.data.hasMask){
        this.maskManager.renderFrame(finalMat);
    }

    if(parentTransform){
        mat = parentTransform.mat.props;
        finalMat.cloneFromProps(mat);
        this.finalTransform.opacity *= parentTransform.opacity;
        this.finalTransform.opMdf = parentTransform.opMdf ? true : this.finalTransform.opMdf;
        this.finalTransform.matMdf = parentTransform.matMdf ? true : this.finalTransform.matMdf
    }

    if(this.finalTransform.matMdf){
        this.transformedElement.style.transform = this.transformedElement.style.webkitTransform = finalMat.toCSS();
        this.finalMat = finalMat;
    }
    if(this.finalTransform.opMdf){
        this.transformedElement.style.opacity = this.finalTransform.opacity;
    }
    return this.isVisible;
};

HBaseElement.prototype.destroy = function(){
    this.layerElement = null;
    this.transformedElement = null;
    this.parentContainer = null;
    if(this.matteElement) {
        this.matteElement = null;
    }
    if(this.maskManager) {
        this.maskManager.destroy();
        this.maskManager = null;
    }
};

HBaseElement.prototype.getDomElement = function(){
    return this.layerElement;
};
HBaseElement.prototype.addMasks = function(data){
    this.maskManager = new MaskElement(data,this,this.globalData);
};

HBaseElement.prototype.hide = function(){
};

HBaseElement.prototype.setMatte = function(){

}

HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting;
function HSolidElement(data,parentContainer,globalData,comp, placeholder){
    this._parent.constructor.call(this,data,parentContainer,globalData,comp, placeholder);
}
createElement(HBaseElement, HSolidElement);

HSolidElement.prototype.createElements = function(){
    var parent = document.createElement('div');
    styleDiv(parent);
    var cont = document.createElementNS(svgNS,'svg');
    styleDiv(cont);
    cont.setAttribute('width',this.data.sw);
    cont.setAttribute('height',this.data.sh);
    parent.appendChild(cont);
    this.layerElement = parent;
    this.transformedElement = parent;
    //this.appendNodeToParent(parent);
    this.baseElement = parent;
    this.innerElem = parent;
    if(this.data.ln){
        this.innerElem.setAttribute('id',this.data.ln);
    }
    if(this.data.bm !== 0){
        this.setBlendMode();
    }
    var rect = document.createElementNS(svgNS,'rect');
    rect.setAttribute('width',this.data.sw);
    rect.setAttribute('height',this.data.sh);
    rect.setAttribute('fill',this.data.sc);
    cont.appendChild(rect);
    if(this.data.hasMask){
        this.maskedElement = rect;
    }
    this.checkParenting();
};



HSolidElement.prototype.hide = SVGBaseElement.prototype.hide;
HSolidElement.prototype.show = SVGBaseElement.prototype.show;
HSolidElement.prototype.renderFrame = IImageElement.prototype.renderFrame;
HSolidElement.prototype.destroy = IImageElement.prototype.destroy;
function HCompElement(data,parentContainer,globalData,comp, placeholder){
    this._parent.constructor.call(this,data,parentContainer,globalData,comp, placeholder);
    this.layers = data.layers;
    this.supports3d = true;
    this.completeLayers = false;
    this.pendingElements = [];
    this.elements = Array.apply(null,{length:this.layers.length});
    if(this.data.tm){
        this.tm = PropertyFactory.getProp(this,this.data.tm,0,globalData.frameRate,this.dynamicProperties);
    }
    if(this.data.hasMask) {
        this.supports3d = false;
    }
    if(this.data.xt){
        this.layerElement = document.createElement('div');
    }
    this.buildAllItems();

}
createElement(HBaseElement, HCompElement);

HCompElement.prototype.createElements = function(){
    var divElement = document.createElement('div');
    styleDiv(divElement);
    if(this.data.ln){
        divElement.setAttribute('id',this.data.ln);
    }
    divElement.style.clip = 'rect(0px, '+this.data.w+'px, '+this.data.h+'px, 0px)';
    if(this.data.hasMask){
        var compSvg = document.createElementNS(svgNS,'svg');
        styleDiv(compSvg);
        compSvg.setAttribute('width',this.data.w);
        compSvg.setAttribute('height',this.data.h);
        var g = document.createElementNS(svgNS,'g');
        compSvg.appendChild(g);
        divElement.appendChild(compSvg);
        this.maskedElement = g;
        this.baseElement = divElement;
        this.layerElement = g;
        this.transformedElement = divElement;
    }else{
        this.layerElement = divElement;
        this.baseElement = this.layerElement;
        this.transformedElement = divElement;
    }
    //this.appendNodeToParent(this.layerElement);
    this.checkParenting();
};

HCompElement.prototype.hide = ICompElement.prototype.hide;
HCompElement.prototype.prepareFrame = ICompElement.prototype.prepareFrame;
HCompElement.prototype.setElements = ICompElement.prototype.setElements;
HCompElement.prototype.getElements = ICompElement.prototype.getElements;
HCompElement.prototype.destroy = ICompElement.prototype.destroy;

HCompElement.prototype.renderFrame = function(parentMatrix){
    var renderParent = this._parent.renderFrame.call(this,parentMatrix);
    var i,len = this.layers.length;
    if(renderParent===false){
        this.hide();
        return;
    }

    this.hidden = false;

    for( i = 0; i < len; i+=1 ){
        if(this.completeLayers || this.elements[i]){
            this.elements[i].renderFrame();
        }
    }
    if(this.firstFrame){
        this.firstFrame = false;
    }
};

HCompElement.prototype.checkLayers = BaseRenderer.prototype.checkLayers;
HCompElement.prototype.buildItem = HybridRenderer.prototype.buildItem;
HCompElement.prototype.checkPendingElements = HybridRenderer.prototype.checkPendingElements;
HCompElement.prototype.addPendingElement = HybridRenderer.prototype.addPendingElement;
HCompElement.prototype.buildAllItems = BaseRenderer.prototype.buildAllItems;
HCompElement.prototype.createItem = HybridRenderer.prototype.createItem;
HCompElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting;
HCompElement.prototype.createImage = HybridRenderer.prototype.createImage;
HCompElement.prototype.createComp = HybridRenderer.prototype.createComp;
HCompElement.prototype.createSolid = HybridRenderer.prototype.createSolid;
HCompElement.prototype.createShape = HybridRenderer.prototype.createShape;
HCompElement.prototype.createText = HybridRenderer.prototype.createText;
HCompElement.prototype.createBase = HybridRenderer.prototype.createBase;
HCompElement.prototype.appendElementInPos = HybridRenderer.prototype.appendElementInPos;
function HShapeElement(data,parentContainer,globalData,comp, placeholder){
    this.shapes = [];
    this.shapesData = data.shapes;
    this.stylesList = [];
    this.itemsData = [];
    this.prevViewData = [];
    this.shapeModifiers = [];
    this.processedElements = [];
    this._parent.constructor.call(this,data,parentContainer,globalData,comp, placeholder);
    this.currentBBox = {
        x:999999,
        y: -999999,
        h: 0,
        w: 0
    };
}
createElement(HBaseElement, HShapeElement);
var parent = HShapeElement.prototype._parent;
extendPrototype(IShapeElement, HShapeElement);
HShapeElement.prototype._parent = parent;
HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderFrame;

HShapeElement.prototype.createElements = function(){
    var parent = document.createElement('div');
    styleDiv(parent);
    var cont = document.createElementNS(svgNS,'svg');
    styleDiv(cont);
    var size = this.comp.data ? this.comp.data : this.globalData.compSize;
    cont.setAttribute('width',size.w);
    cont.setAttribute('height',size.h);
    if(this.data.hasMask){
        var g = document.createElementNS(svgNS,'g');
        parent.appendChild(cont);
        cont.appendChild(g);
        this.maskedElement = g;
        this.layerElement = g;
        this.shapesContainer = g;
    }else{
        parent.appendChild(cont);
        this.layerElement = cont;
        this.shapesContainer = document.createElementNS(svgNS,'g');
        this.layerElement.appendChild(this.shapesContainer);
    }
    if(!this.data.hd){
        //this.parentContainer.appendChild(parent);
        this.baseElement = parent;
    }
    this.innerElem = parent;
    if(this.data.ln){
        this.innerElem.setAttribute('id',this.data.ln);
    }

    this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,this.dynamicProperties,0, [], true);
    this.buildExpressionInterface();
    this.layerElement = parent;
    this.transformedElement = parent;
    this.shapeCont = cont;
    if(this.data.bm !== 0){
        this.setBlendMode();
    }
    this.checkParenting();
};

HShapeElement.prototype.renderFrame = function(parentMatrix){
    var firstFrame = this.firstFrame;
    this._renderShapeFrame();

    if(this.isVisible && (this.elemMdf || firstFrame)){
        var boundingBox = this.shapeCont.getBBox();
        var changed = false;
        if(this.currentBBox.w !== boundingBox.width){
            this.currentBBox.w = boundingBox.width;
            this.shapeCont.setAttribute('width',boundingBox.width);
            changed = true;
        }
        if(this.currentBBox.h !== boundingBox.height){
            this.currentBBox.h = boundingBox.height;
            this.shapeCont.setAttribute('height',boundingBox.height);
            changed = true;
        }
        if(changed  || this.currentBBox.x !== boundingBox.x  || this.currentBBox.y !== boundingBox.y){
            this.currentBBox.w = boundingBox.width;
            this.currentBBox.h = boundingBox.height;
            this.currentBBox.x = boundingBox.x;
            this.currentBBox.y = boundingBox.y;

            this.shapeCont.setAttribute('viewBox',this.currentBBox.x+' '+this.currentBBox.y+' '+this.currentBBox.w+' '+this.currentBBox.h);
            this.shapeCont.style.transform = this.shapeCont.style.webkitTransform = 'translate(' + this.currentBBox.x + 'px,' + this.currentBBox.y + 'px)';
        }
    }

};
function HTextElement(data,parentContainer,globalData,comp, placeholder){
    this.textSpans = [];
    this.textPaths = [];
    this.currentBBox = {
        x:999999,
        y: -999999,
        h: 0,
        w: 0
    }
    this.renderType = 'svg';
    this.isMasked = false;
    this._parent.constructor.call(this,data,parentContainer,globalData,comp, placeholder);

}
createElement(HBaseElement, HTextElement);

HTextElement.prototype.init = ITextElement.prototype.init;
HTextElement.prototype.createPathShape = ITextElement.prototype.createPathShape;
HTextElement.prototype.prepareFrame = ITextElement.prototype.prepareFrame;
HTextElement.prototype.buildShapeString = ITextElement.prototype.buildShapeString;

HTextElement.prototype.createElements = function(){
    this.isMasked = this.checkMasks();
    var parent = document.createElement('div');
    styleDiv(parent);
    this.layerElement = parent;
    this.transformedElement = parent;
    if(this.isMasked){
        this.renderType = 'svg';
        var cont = document.createElementNS(svgNS,'svg');
        styleDiv(cont);
        this.cont = cont;
        this.compW = this.comp.data.w;
        this.compH = this.comp.data.h;
        cont.setAttribute('width',this.compW);
        cont.setAttribute('height',this.compH);
        var g = document.createElementNS(svgNS,'g');
        cont.appendChild(g);
        parent.appendChild(cont);
        this.maskedElement = g;
        this.innerElem = g;
    } else {
        this.renderType = 'html';
        this.innerElem = parent;
    }
    this.baseElement = parent;

    this.checkParenting();

};

HTextElement.prototype.buildNewText = function(){
    var documentData = this.currentTextDocumentData;
    this.renderedLetters = Array.apply(null,{length:this.currentTextDocumentData.l ? this.currentTextDocumentData.l.length : 0});
    if(documentData.fc) {
        this.innerElem.style.color = this.innerElem.style.fill = 'rgb(' + Math.round(documentData.fc[0]*255) + ',' + Math.round(documentData.fc[1]*255) + ',' + Math.round(documentData.fc[2]*255) + ')';
        ////this.innerElem.setAttribute('fill', 'rgb(' + documentData.fc[0] + ',' + documentData.fc[1] + ',' + documentData.fc[2] + ')');
    }else{
        this.innerElem.style.color = this.innerElem.style.fill = 'rgba(0,0,0,0)';
        ////this.innerElem.setAttribute('fill', 'rgba(0,0,0,0)');
    }
    if(documentData.sc){
        ////this.innerElem.setAttribute('stroke', 'rgb(' + documentData.sc[0] + ',' + documentData.sc[1] + ',' + documentData.sc[2] + ')');
        this.innerElem.style.stroke = 'rgb(' + Math.round(documentData.sc[0]*255) + ',' + Math.round(documentData.sc[1]*255) + ',' + Math.round(documentData.sc[2]*255) + ')';
        ////this.innerElem.setAttribute('stroke-width', documentData.sw);
        this.innerElem.style.strokeWidth = documentData.sw+'px';
    }
    ////this.innerElem.setAttribute('font-size', documentData.s);
    var fontData = this.globalData.fontManager.getFontByName(documentData.f);
    if(!this.globalData.fontManager.chars){
        this.innerElem.style.fontSize = documentData.s+'px';
        this.innerElem.style.lineHeight = documentData.s+'px';
        if(fontData.fClass){
            this.innerElem.className = fontData.fClass;
        } else {
            ////this.innerElem.setAttribute('font-family', fontData.fFamily);
            this.innerElem.style.fontFamily = fontData.fFamily;
            var fWeight = documentData.fWeight, fStyle = documentData.fStyle;
            ////this.innerElem.setAttribute('font-style', fStyle);
            this.innerElem.style.fontStyle = fStyle;
            ////this.innerElem.setAttribute('font-weight', fWeight);
            this.innerElem.style.fontWeight = fWeight;
        }
    }
    var i, len;

    var letters = documentData.l;
    len = letters.length;
    var tSpan,tParent,tCont;
    var matrixHelper = this.mHelper;
    var shapes, shapeStr = '';
    var cnt = 0;
    for (i = 0;i < len ;i += 1) {
        if(this.globalData.fontManager.chars){
            if(!this.textPaths[cnt]){
                tSpan = document.createElementNS(svgNS,'path');
                tSpan.setAttribute('stroke-linecap', 'butt');
                tSpan.setAttribute('stroke-linejoin','round');
                tSpan.setAttribute('stroke-miterlimit','4');
            } else {
                tSpan = this.textPaths[cnt];
            }
            if(!this.isMasked){
                if(this.textSpans[cnt]){
                    tParent = this.textSpans[cnt];
                    tCont = tParent.children[0];
                } else {

                    tParent = document.createElement('div');
                    tCont = document.createElementNS(svgNS,'svg');
                    tCont.appendChild(tSpan);
                    styleDiv(tParent);
                }
            }
        }else{
            if(!this.isMasked){
                if(this.textSpans[cnt]){
                    tParent = this.textSpans[cnt];
                    tSpan = this.textPaths[cnt];
                } else {
                    tParent = document.createElement('span');
                    styleDiv(tParent);
                    tSpan = document.createElement('span');
                    styleDiv(tSpan);
                    tParent.appendChild(tSpan);
                }
            } else {
                tSpan = this.textPaths[cnt] ? this.textPaths[cnt] : document.createElementNS(svgNS,'text');
            }
        }
        //tSpan.setAttribute('visibility', 'hidden');
        if(this.globalData.fontManager.chars){
            var charData = this.globalData.fontManager.getCharData(documentData.t.charAt(i), fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
            var shapeData;
            if(charData){
                shapeData = charData.data;
            } else {
                shapeData = null;
            }
            matrixHelper.reset();
            if(shapeData && shapeData.shapes){
                shapes = shapeData.shapes[0].it;
                matrixHelper.scale(documentData.s/100,documentData.s/100);
                shapeStr = this.createPathShape(matrixHelper,shapes);
                tSpan.setAttribute('d',shapeStr);
            }
            if(!this.isMasked){
                this.innerElem.appendChild(tParent);
                if(shapeData && shapeData.shapes){
                    document.body.appendChild(tCont);

                    var boundingBox = tCont.getBBox();
                    tCont.setAttribute('width',boundingBox.width);
                    tCont.setAttribute('height',boundingBox.height);
                    tCont.setAttribute('viewBox',boundingBox.x+' '+ boundingBox.y+' '+ boundingBox.width+' '+ boundingBox.height);
                    tCont.style.transform = tCont.style.webkitTransform = 'translate(' + boundingBox.x + 'px,' + boundingBox.y + 'px)';

                    letters[i].yOffset = boundingBox.y;
                    tParent.appendChild(tCont);

                } else{
                    tCont.setAttribute('width',1);
                    tCont.setAttribute('height',1);
                }
            }else{
                this.innerElem.appendChild(tSpan);
            }
        }else{
            tSpan.textContent = letters[i].val;
            tSpan.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space","preserve");
            if(!this.isMasked){
                this.innerElem.appendChild(tParent);
                //
                tSpan.style.transform = tSpan.style.webkitTransform = 'translate3d(0,'+ -documentData.s/1.2+'px,0)';
            } else {
                this.innerElem.appendChild(tSpan);
            }
        }
        //
        if(!this.isMasked){
            this.textSpans[cnt] = tParent;
        }else{
            this.textSpans[cnt] = tSpan;
        }
        this.textSpans[cnt].style.display = 'block';
        this.textPaths[cnt] = tSpan;
        cnt += 1;
    }
    while(cnt < this.textSpans.length){
        this.textSpans[cnt].style.display = 'none';
        cnt += 1;
    }
}

HTextElement.prototype.hide = SVGTextElement.prototype.hide;

HTextElement.prototype.renderFrame = function(parentMatrix){

    var renderParent = this._parent.renderFrame.call(this,parentMatrix);
    if(renderParent===false){
        this.hide();
        return;
    }
    if(this.hidden){
        this.hidden = false;
        this.innerElem.style.display = 'block';
        this.layerElement.style.display = 'block';
    }

    if(this.data.singleShape){
        if(!this.firstFrame && !this.lettersChangedFlag){
            return;
        } else {
            // Todo Benchmark if using this is better than getBBox
             if(this.isMasked && this.finalTransform.matMdf){
                 this.cont.setAttribute('viewBox',-this.finalTransform.mProp.p.v[0]+' '+ -this.finalTransform.mProp.p.v[1]+' '+this.compW+' '+this.compH);
                this.cont.style.transform = this.cont.style.webkitTransform = 'translate(' + -this.finalTransform.mProp.p.v[0] + 'px,' + -this.finalTransform.mProp.p.v[1] + 'px)';
             }
        }
    }

    this.textAnimator.getMeasures(this.currentTextDocumentData, this.lettersChangedFlag);
    if(!this.lettersChangedFlag && !this.textAnimator.lettersChangedFlag){
        return;
    }
    var  i,len, count = 0;
    var renderedLetters = this.textAnimator.renderedLetters;

    var letters = this.currentTextDocumentData.l;

    len = letters.length;
    var renderedLetter;
    for(i=0;i<len;i+=1){
        if(letters[i].n){
            continue;
        }
        renderedLetter = renderedLetters[count];
        count += 1;
        if(!this.isMasked){
            this.textSpans[i].style.transform = this.textSpans[i].style.webkitTransform = renderedLetter.m;
        }else{
            this.textSpans[i].setAttribute('transform',renderedLetter.m);
        }
        ////this.textSpans[i].setAttribute('opacity',renderedLetter.o);
        this.textSpans[i].style.opacity = renderedLetter.o;
        if(renderedLetter.sw){
            this.textPaths[i].setAttribute('stroke-width',renderedLetter.sw);
        }
        if(renderedLetter.sc){
            this.textPaths[i].setAttribute('stroke',renderedLetter.sc);
        }
        if(renderedLetter.fc){
            this.textPaths[i].setAttribute('fill',renderedLetter.fc);
            this.textPaths[i].style.color = renderedLetter.fc;
        }
    }
    if(this.isVisible && (this.elemMdf || this.firstFrame)){
        if(this.innerElem.getBBox){
            var boundingBox = this.innerElem.getBBox();

            if(this.currentBBox.w !== boundingBox.width){
                this.currentBBox.w = boundingBox.width;
                this.cont.setAttribute('width',boundingBox.width);
            }
            if(this.currentBBox.h !== boundingBox.height){
                this.currentBBox.h = boundingBox.height;
                this.cont.setAttribute('height',boundingBox.height);
            }
            if(this.currentBBox.w !== boundingBox.width || this.currentBBox.h !== boundingBox.height  || this.currentBBox.x !== boundingBox.x  || this.currentBBox.y !== boundingBox.y){
                this.currentBBox.w = boundingBox.width;
                this.currentBBox.h = boundingBox.height;
                this.currentBBox.x = boundingBox.x;
                this.currentBBox.y = boundingBox.y;

                this.cont.setAttribute('viewBox',this.currentBBox.x+' '+this.currentBBox.y+' '+this.currentBBox.w+' '+this.currentBBox.h);
                this.cont.style.transform = this.cont.style.webkitTransform = 'translate(' + this.currentBBox.x + 'px,' + this.currentBBox.y + 'px)';
            }
        }
    }
    if(this.firstFrame){
        this.firstFrame = false;
    }
}


HTextElement.prototype.destroy = SVGTextElement.prototype.destroy;
function HImageElement(data,parentContainer,globalData,comp, placeholder){
    this.assetData = globalData.getAssetData(data.refId);
    this._parent.constructor.call(this,data,parentContainer,globalData,comp, placeholder);
}
createElement(HBaseElement, HImageElement);

HImageElement.prototype.createElements = function(){

    var assetPath = this.globalData.getAssetsPath(this.assetData);
    var img = new Image();

    if(this.data.hasMask){
        var parent = document.createElement('div');
        styleDiv(parent);
        var cont = document.createElementNS(svgNS,'svg');
        styleDiv(cont);
        cont.setAttribute('width',this.assetData.w);
        cont.setAttribute('height',this.assetData.h);
        parent.appendChild(cont);
        this.imageElem = document.createElementNS(svgNS,'image');
        this.imageElem.setAttribute('width',this.assetData.w+"px");
        this.imageElem.setAttribute('height',this.assetData.h+"px");
        this.imageElem.setAttributeNS('http://www.w3.org/1999/xlink','href',assetPath);
        cont.appendChild(this.imageElem);
        this.layerElement = parent;
        this.transformedElement = parent;
        this.baseElement = parent;
        this.innerElem = parent;
        this.maskedElement = this.imageElem;
    } else {
        styleDiv(img);
        this.layerElement = img;
        this.baseElement = img;
        this.innerElem = img;
        this.transformedElement = img;
    }
    img.src = assetPath;
    if(this.data.ln){
        this.innerElem.setAttribute('id',this.data.ln);
    }
    this.checkParenting();
};

HImageElement.prototype.hide = HSolidElement.prototype.hide;
HImageElement.prototype.renderFrame = HSolidElement.prototype.renderFrame;
HImageElement.prototype.destroy = HSolidElement.prototype.destroy;
function HCameraElement(data,parentContainer,globalData,comp, placeholder){
    this._parent.constructor.call(this,data,parentContainer,globalData,comp, placeholder);
    this.pe = PropertyFactory.getProp(this,data.pe,0,0,this.dynamicProperties);
    if(data.ks.p.s){
        this.px = PropertyFactory.getProp(this,data.ks.p.x,1,0,this.dynamicProperties);
        this.py = PropertyFactory.getProp(this,data.ks.p.y,1,0,this.dynamicProperties);
        this.pz = PropertyFactory.getProp(this,data.ks.p.z,1,0,this.dynamicProperties);
    }else{
        this.p = PropertyFactory.getProp(this,data.ks.p,1,0,this.dynamicProperties);
    }
    if(data.ks.a){
        this.a = PropertyFactory.getProp(this,data.ks.a,1,0,this.dynamicProperties);
    }
    if(data.ks.or.k.length && data.ks.or.k[0].to){
        var i,len = data.ks.or.k.length;
        for(i=0;i<len;i+=1){
            data.ks.or.k[i].to = null;
            data.ks.or.k[i].ti = null;
        }
    }
    this.or = PropertyFactory.getProp(this,data.ks.or,1,degToRads,this.dynamicProperties);
    this.or.sh = true;
    this.rx = PropertyFactory.getProp(this,data.ks.rx,0,degToRads,this.dynamicProperties);
    this.ry = PropertyFactory.getProp(this,data.ks.ry,0,degToRads,this.dynamicProperties);
    this.rz = PropertyFactory.getProp(this,data.ks.rz,0,degToRads,this.dynamicProperties);
    this.mat = new Matrix();
}
createElement(HBaseElement, HCameraElement);

HCameraElement.prototype.setup = function() {
    var i, len = this.comp.threeDElements.length, comp;
    for(i=0;i<len;i+=1){
        //[perspectiveElem,container]
        comp = this.comp.threeDElements[i];
        comp.perspectiveElem.style.perspective = comp.perspectiveElem.style.webkitPerspective = this.pe.v+'px';
        comp.container.style.transformOrigin = comp.container.style.mozTransformOrigin = comp.container.style.webkitTransformOrigin = "0px 0px 0px";
        comp.perspectiveElem.style.transform = comp.perspectiveElem.style.webkitTransform = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';
    }
};

HCameraElement.prototype.createElements = function(){
};

HCameraElement.prototype.hide = function(){
};

HCameraElement.prototype.renderFrame = function(){
    var mdf = this.firstFrame;
    var i, len;
    if(this.hierarchy){
        len = this.hierarchy.length;
        for(i=0;i<len;i+=1){
            mdf = this.hierarchy[i].finalTransform.mProp.mdf ? true : mdf;
        }
    }
    if(mdf || (this.p && this.p.mdf) || (this.px && (this.px.mdf || this.py.mdf || this.pz.mdf)) || this.rx.mdf || this.ry.mdf || this.rz.mdf || this.or.mdf || (this.a && this.a.mdf)) {
        this.mat.reset();

        if(this.p){
            this.mat.translate(-this.p.v[0],-this.p.v[1],this.p.v[2]);
        }else{
            this.mat.translate(-this.px.v,-this.py.v,this.pz.v);
        }
        if(this.a){
            var diffVector = [this.p.v[0]-this.a.v[0],this.p.v[1]-this.a.v[1],this.p.v[2]-this.a.v[2]];
            var mag = Math.sqrt(Math.pow(diffVector[0],2)+Math.pow(diffVector[1],2)+Math.pow(diffVector[2],2));
            //var lookDir = getNormalizedPoint(getDiffVector(this.a.v,this.p.v));
            var lookDir = [diffVector[0]/mag,diffVector[1]/mag,diffVector[2]/mag];
            var lookLengthOnXZ = Math.sqrt( lookDir[2]*lookDir[2] + lookDir[0]*lookDir[0] );
            var m_rotationX = (Math.atan2( lookDir[1], lookLengthOnXZ ));
            var m_rotationY = (Math.atan2( lookDir[0], -lookDir[2]));
            this.mat.rotateY(m_rotationY).rotateX(-m_rotationX);

        }
        this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v);
        this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]);
        this.mat.translate(this.globalData.compSize.w/2,this.globalData.compSize.h/2,0);
        this.mat.translate(0,0,this.pe.v);
        if(this.hierarchy){
            var mat;
            len = this.hierarchy.length;
            for(i=0;i<len;i+=1){
                mat = this.hierarchy[i].finalTransform.mProp.iv.props;
                this.mat.transform(mat[0],mat[1],mat[2],mat[3],mat[4],mat[5],mat[6],mat[7],mat[8],mat[9],mat[10],mat[11],-mat[12],-mat[13],mat[14],mat[15]);
            }
        }
        len = this.comp.threeDElements.length;
        var comp;
        for(i=0;i<len;i+=1){
            comp = this.comp.threeDElements[i];
            comp.container.style.transform = comp.container.style.webkitTransform = this.mat.toCSS();
        }
    }
    this.firstFrame = false;
};

HCameraElement.prototype.destroy = function(){
};
var Expressions = (function(){
    var ob = {};
    ob.initExpressions = initExpressions;


    function initExpressions(animation){
        animation.renderer.compInterface = CompExpressionInterface(animation.renderer);
        animation.renderer.globalData.projectInterface.registerComposition(animation.renderer);
    }
   return ob;
}());

expressionsPlugin = Expressions;

(function addPropertyDecorator() {

    function getStaticValueAtTime() {
        return this.pv;
    }

    function getValueAtTime(frameNum, offsetTime) {
        frameNum *= this.elem.globalData.frameRate;
        var i = 0,len = this.keyframes.length- 1,dir= 1,flag = true;
        var keyData, nextKeyData;
        offsetTime = offsetTime === undefined ? this.offsetTime : 0;
        //console.log(this.offsetTime);
        var retVal = typeof this.pv === 'object' ? [this.pv.length] : 0;

        while(flag){
            keyData = this.keyframes[i];
            nextKeyData = this.keyframes[i+1];
            if(i == len-1 && frameNum >= nextKeyData.t - offsetTime){
                if(keyData.h){
                    keyData = nextKeyData;
                }
                break;
            }
            if((nextKeyData.t - offsetTime) > frameNum){
                break;
            }
            if(i < len - 1){
                i += dir;
            }else{
                flag = false;
            }
        }

        var k, kLen,perc,jLen, j = 0, fnc;
        if (keyData.to) {

            if (!keyData.bezierData) {
                bez.buildBezierData(keyData);
            }
            var bezierData = keyData.bezierData;
            if (frameNum >= nextKeyData.t-offsetTime || frameNum < keyData.t-offsetTime) {
                var ind = frameNum >= nextKeyData.t-offsetTime ? bezierData.points.length - 1 : 0;
                kLen = bezierData.points[ind].point.length;
                for(k = 0; k < kLen; k += 1){
                    retVal[k] = bezierData.points[ind].point[k];
                }
            } else {
                if (keyData.__fnct) {
                    fnc = keyData.__fnct;
                } else {
                    //fnc = bez.getEasingCurve(keyData.o.x,keyData.o.y,keyData.i.x,keyData.i.y,keyData.n);
                    fnc = BezierFactory.getBezierEasing(keyData.o.x, keyData.o.y, keyData.i.x, keyData.i.y, keyData.n).get;
                    keyData.__fnct = fnc;
                }
                perc = fnc((frameNum - (keyData.t - offsetTime)) / ((nextKeyData.t - offsetTime) - (keyData.t - offsetTime)));
                var distanceInLine = bezierData.segmentLength * perc;

                var segmentPerc;
                var addedLength = 0;
                dir = 1;
                flag = true;
                jLen = bezierData.points.length;
                while(flag) {
                    addedLength += bezierData.points[j].partialLength*dir;
                    if (distanceInLine === 0 || perc === 0 || j == bezierData.points.length - 1) {
                        kLen = bezierData.points[j].point.length;
                        for (k = 0; k < kLen; k += 1) {
                            retVal[k] = bezierData.points[j].point[k];
                        }
                        break;
                    } else if (distanceInLine >= addedLength && distanceInLine < addedLength + bezierData.points[j+1].partialLength){
                        segmentPerc = (distanceInLine - addedLength) / (bezierData.points[j + 1].partialLength);
                        kLen = bezierData.points[j].point.length;
                        for (k = 0; k < kLen; k += 1) {
                            retVal[k] = bezierData.points[j].point[k] + (bezierData.points[j+1].point[k] - bezierData.points[j].point[k]) * segmentPerc;
                        }
                        break;
                    }
                    if (j < jLen - 1 && dir == 1 || j > 0 && dir == -1) {
                        j += dir;
                    } else {
                        flag = false;
                    }
                }
            }
        } else {
            var outX,outY,inX,inY, isArray = false, keyValue;
            len = keyData.s.length;
            for(i=0;i<len;i+=1){
                if(keyData.h !== 1){
                    if(keyData.o.x instanceof Array){
                        isArray = true;
                        if(!keyData.__fnct){
                            keyData.__fnct = [];
                        }
                        if(!keyData.__fnct[i]){
                            outX = keyData.o.x[i] || keyData.o.x[0];
                            outY = keyData.o.y[i] || keyData.o.y[0];
                            inX = keyData.i.x[i] || keyData.i.x[0];
                            inY = keyData.i.y[i] || keyData.i.y[0];
                        }
                    }else{
                        isArray = false;
                        if(!keyData.__fnct) {
                            outX = keyData.o.x;
                            outY = keyData.o.y;
                            inX = keyData.i.x;
                            inY = keyData.i.y;
                        }
                    }
                    if(isArray){
                        if(keyData.__fnct[i]){
                            fnc = keyData.__fnct[i];
                        }else{
                            //fnc = bez.getEasingCurve(outX,outY,inX,inY);
                            fnc = BezierFactory.getBezierEasing(outX,outY,inX,inY).get;
                            keyData.__fnct[i] = fnc;
                        }
                    }else{
                        if(keyData.__fnct){
                            fnc = keyData.__fnct;
                        }else{
                            //fnc = bez.getEasingCurve(outX,outY,inX,inY);
                            fnc = BezierFactory.getBezierEasing(outX,outY,inX,inY).get;
                            keyData.__fnct = fnc;
                        }
                    }
                    if(frameNum >= nextKeyData.t-offsetTime){
                        perc = 1;
                    }else if(frameNum < keyData.t-offsetTime){
                        perc = 0;
                    }else{
                        perc = fnc((frameNum-(keyData.t-offsetTime))/((nextKeyData.t-offsetTime)-(keyData.t-offsetTime)));
                    }
                }
                if(this.sh && keyData.h !== 1){
                    var initP = keyData.s[i];
                    var endP = keyData.e[i];
                    if(initP-endP < -180){
                        initP += 360;
                    } else if(initP-endP > 180){
                        initP -= 360;
                    }
                    keyValue = initP+(endP-initP)*perc;
                } else {
                    keyValue = keyData.h === 1 ? keyData.s[i] : keyData.s[i]+(keyData.e[i]-keyData.s[i])*perc;
                }
                if(len === 1){
                    retVal = keyValue;
                }else{
                    retVal[i] = keyValue;
                }
            }
        }
        return retVal;
    }

    function getVelocityAtTime(frameNum) {
        if(this.vel !== undefined){
            return this.vel;
        }
        var delta = -0.01;
        //frameNum += this.elem.data.st;
        var v1 = this.getValueAtTime(frameNum, 0);
        var v2 = this.getValueAtTime(frameNum + delta, 0);
        var velocity;
        if(v1.length){
            velocity = Array.apply(null,{length:v1.length});
            var i;
            for(i=0;i<v1.length;i+=1){
                //removing frameRate
                //if needed, don't add it here
                //velocity[i] = this.elem.globalData.frameRate*((v2[i] - v1[i])/delta);
                velocity[i] = (v2[i] - v1[i])/delta;
            }
        } else {
            velocity = (v2 - v1)/delta;
        }
        return velocity;
    };

    function setGroupProperty(propertyGroup){
        this.propertyGroup = propertyGroup;
    }

    function searchExpressions(elem,data,prop){
        if(data.x){
            prop.k = true;
            prop.x = true;
            if(prop.getValue) {
                prop.getPreValue = prop.getValue;
            }
            prop.getValue = ExpressionManager.initiateExpression.bind(prop)(elem,data,prop);
        }
    }

    function getTransformValueAtTime(time) {
        console.log('time:', time)
    }

    function getTransformStaticValueAtTime(time) {

    }

    var TextExpressionSelectorProp = (function(){

        function getValueProxy(index,total){
            this.textIndex = index+1;
            this.textTotal = total;
            this.getValue();
            return this.v;
        }

        return function TextExpressionSelectorProp(elem,data){
            this.pv = 1;
            this.comp = elem.comp;
            this.elem = elem;
            this.mult = .01;
            this.type = 'textSelector';
            this.textTotal = data.totalChars;
            this.selectorValue = 100;
            this.lastValue = [1,1,1];
            searchExpressions.bind(this)(elem,data,this);
            this.getMult = getValueProxy;
            this.getVelocityAtTime = getVelocityAtTime;
            if(this.kf){
                this.getValueAtTime = getValueAtTime.bind(this);
            } else {
                this.getValueAtTime = getStaticValueAtTime.bind(this);
            }
            this.setGroupProperty = setGroupProperty;
        }
    }());


    var propertyGetProp = PropertyFactory.getProp;
    PropertyFactory.getProp = function(elem,data,type, mult, arr){
        var prop = propertyGetProp(elem,data,type, mult, arr);
        prop.getVelocityAtTime = getVelocityAtTime;
        if(type === 2) {
            if(prop.dynamicProperties.length) {
                prop.getValueAtTime = getTransformValueAtTime.bind(prop);
            } else {
                prop.getValueAtTime = getTransformStaticValueAtTime.bind(prop);
            }
        } else {
            if(prop.kf){
                prop.getValueAtTime = getValueAtTime.bind(prop);
            } else {
                prop.getValueAtTime = getStaticValueAtTime.bind(prop);
            }
        }
        prop.setGroupProperty = setGroupProperty;
        var isAdded = prop.k;
        if(data.ix !== undefined){
            Object.defineProperty(prop,'propertyIndex',{
                get: function(){
                    return data.ix;
                }
            })
        }
        searchExpressions(elem,data,prop);
        if(!isAdded && prop.x){
            arr.push(prop);
        }

        return prop;
    }

    var propertyGetShapeProp = ShapePropertyFactory.getShapeProp;
    ShapePropertyFactory.getShapeProp = function(elem,data,type, arr, trims){
        var prop = propertyGetShapeProp(elem,data,type, arr, trims);
        prop.setGroupProperty = setGroupProperty;
        if(prop.kf){
            prop.getValueAtTime = getValueAtTime;
        } else {
            prop.getValueAtTime = getStaticValueAtTime;
        }
        var isAdded = prop.k;
        if(data.ix !== undefined){
            Object.defineProperty(prop,'propertyIndex',{
                get: function(){
                    return data.ix;
                }
            })
        }
        if(type === 3){
            searchExpressions(elem,data.pt,prop);
        } else if(type === 4){
            searchExpressions(elem,data.ks,prop);
        }
        if(!isAdded && prop.x){
            arr.push(prop);
        }
        return prop;
    }

    var propertyGetTextProp = PropertyFactory.getTextSelectorProp;
    PropertyFactory.getTextSelectorProp = function(elem, data,arr){
        if(data.t === 1){
            return new TextExpressionSelectorProp(elem, data,arr);
        } else {
            return propertyGetTextProp(elem,data,arr);
        }
    }
}());
var ExpressionManager = (function(){
    var ob = {};
    var Math = BMMath;
    var window = null;
    var document = null;

    function duplicatePropertyValue(value, mult){
        mult = mult || 1;

        if(typeof value === 'number'  || value instanceof Number){
            return value*mult;
        }else if(value.i){
            return JSON.parse(JSON.stringify(value));
        }else{
            var arr = Array.apply(null,{length:value.length});
            var i, len = value.length;
            for(i=0;i<len;i+=1){
                arr[i]=value[i]*mult;
            }
            return arr;
        }
    }

    function shapesEqual(shape1, shape2) {
        if(shape1._length !== shape2._length || shape1.c !== shape2.c){
            return false;
        }
        var i, len = shape1._length;
        for(i = 0; i < len; i += 1) {
            if(shape1.v[i][0] !== shape2.v[i][0] || shape1.v[i][1] !== shape2.v[i][1]
                || shape1.o[i][0] !== shape2.o[i][0] || shape1.o[i][1] !== shape2.o[i][1]
                || shape1.i[i][0] !== shape2.i[i][0] || shape1.i[i][1] !== shape2.i[i][1]){
                return false;
            }
        }
        return true;
    }

    function $bm_neg(a){
        var tOfA = typeof a;
        if(tOfA === 'number' || tOfA === 'boolean'  || a instanceof Number ){
            return -a;
        }
        if(a.constructor === Array){
            var i, lenA = a.length;
            var retArr = [];
            for(i=0;i<lenA;i+=1){
                retArr[i] = -a[i];
            }
            return retArr;
        }
    }

    function sum(a,b) {
        var tOfA = typeof a;
        var tOfB = typeof b;
        if(tOfA === 'string' || tOfB === 'string'){
            return a + b;
        }
        if((tOfA === 'number' || tOfA === 'boolean' || tOfA === 'string' || a instanceof Number) && (tOfB === 'number' || tOfB === 'boolean' || tOfB === 'string'  || b instanceof Number)) {
            return a + b;
        }
        if(a.constructor === Array && (tOfB === 'number' || tOfB === 'boolean' || tOfB === 'string' || b instanceof Number )){
            a[0] = a[0] + b;
            return a;
        }
        if((tOfA === 'number' || tOfA === 'boolean' || tOfA === 'string' || a instanceof Number ) && b.constructor === Array){
            b[0] = a + b[0];
            return b;
        }
        if(a.constructor === Array && b.constructor === Array){
            
            var i = 0, lenA = a.length, lenB = b.length;
            var retArr = [];
            while(i<lenA || i < lenB){
                if((typeof a[i] === 'number' || a[i] instanceof Number) && (typeof b[i] === 'number' || b[i] instanceof Number)){
                    retArr[i] = a[i] + b[i];
                }else{
                    retArr[i] = b[i] == undefined ? a[i] : a[i] || b[i];
                }
                i += 1;
            }
            return retArr;
        }
        return 0;
    }
    var add = sum;

    function sub(a,b) {
        var tOfA = typeof a;
        var tOfB = typeof b;
        if((tOfA === 'number' || tOfA === 'boolean' || tOfA === 'string' || a instanceof Number ) && (tOfB === 'number' || tOfB === 'boolean' || tOfB === 'string' || b instanceof Number )) {
            if(tOfA === 'string') {
                a = parseInt(a);
            }
            if(tOfB === 'string') {
                b = parseInt(b);
            }
            return a - b;
        }
        if( a.constructor === Array && (tOfB === 'number' || tOfB === 'boolean' || tOfB === 'string' || b instanceof Number )){
            a[0] = a[0] - b;
            return a;
        }
        if((tOfA === 'number' || tOfA === 'boolean' || tOfA === 'string' || a instanceof Number ) &&  b.constructor === Array){
            b[0] = a - b[0];
            return b;
        }
        if(a.constructor === Array && b.constructor === Array){
            var i = 0, lenA = a.length, lenB = b.length;
            var retArr = [];
            while(i<lenA || i < lenB){
                if((typeof a[i] === 'number' || a[i] instanceof Number) && typeof (typeof b[i] === 'number' || b[i] instanceof Number)){
                    retArr[i] = a[i] - b[i];
                }else{
                    retArr[i] = b[i] == undefined ? a[i] : a[i] || b[i];
                }
                i += 1;
            }
            return retArr;
        }
        return 0;
    }

    function mul(a,b) {
        var tOfA = typeof a;
        var tOfB = typeof b;
        var arr;
        if((tOfA === 'number' || tOfA === 'boolean' || tOfA === 'string' || a instanceof Number ) && (tOfB === 'number' || tOfB === 'boolean' || tOfB === 'string' || b instanceof Number )) {
            return a * b;
        }

        var i, len;
        if(a.constructor === Array && (tOfB === 'number' || tOfB === 'boolean' || tOfB === 'string' || b instanceof Number )){
            len = a.length;
            arr = Array.apply(null,{length:len});
            for(i=0;i<len;i+=1){
                arr[i] = a[i] * b;
            }
            return arr;
        }
        if((tOfA === 'number' || tOfA === 'boolean' || tOfA === 'string' || a instanceof Number ) && b.constructor === Array){
            len = b.length;
            arr = Array.apply(null,{length:len});
            for(i=0;i<len;i+=1){
                arr[i] = a * b[i];
            }
            return arr;
        }
        return 0;
    }

    function div(a,b) {
        var tOfA = typeof a;
        var tOfB = typeof b;
        var arr;
        if((tOfA === 'number' || tOfA === 'boolean' || tOfA === 'string' || a instanceof Number ) && (tOfB === 'number' || tOfB === 'boolean' || tOfB === 'string' || b instanceof Number )) {
            return a / b;
        }
        var i, len;
        if(a.constructor === Array && (tOfB === 'number' || tOfB === 'boolean' || tOfB === 'string' || b instanceof Number  )){
            len = a.length;
            arr = Array.apply(null,{length:len});
            for(i=0;i<len;i+=1){
                arr[i] = a[i] / b;
            }
            return arr;
        }
        if((tOfA === 'number' || tOfA === 'boolean' || tOfA === 'string' || a instanceof Number ) && b.constructor === Array){
            len = b.length;
            arr = Array.apply(null,{length:len});
            for(i=0;i<len;i+=1){
                arr[i] = a / b[i];
            }
            return arr;
        }
        return 0;
    }
    function mod(a,b) {
        if(typeof a === 'string') {
            a = parseInt(a);
        }
        if(typeof b === 'string') {
            b = parseInt(b);
        }
        return a % b;
    }

    function clamp(num, min, max) {
        if(min > max){
            var mm = max;
            max = min;
            min = mm;
        }
        return Math.min(Math.max(num, min), max);
    }

    function radiansToDegrees(val) {
        return val/degToRads;
    }
    var radians_to_degrees = radiansToDegrees;

    function degreesToRadians(val) {
        return val*degToRads;
    }
    var degrees_to_radians = radiansToDegrees;

    var helperLengthArray = [0,0,0,0,0,0];

    function length(arr1,arr2){
        if(typeof arr1 === 'number' || arr1 instanceof Number){
            arr2 = arr2 || 0;
            return Math.abs(arr1 - arr2);
        }
        if(!arr2){
            arr2 = helperLengthArray;
        }
        var i,len = Math.min(arr1.length,arr2.length);
        var addedLength = 0;
        for(i=0;i<len;i+=1){
            addedLength += Math.pow(arr2[i]-arr1[i],2);
        }
        return Math.sqrt(addedLength);
    }

    function normalize(vec){
        return div(vec, length(vec));
    }

    function rgbToHsl(val){
        var r = val[0]; var g = val[1]; var b = val[2];
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;

        if(max == min){
            h = s = 0; // achromatic
        }else{
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max){
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }

        return [h, s, l,val[3]];
    }
    function hslToRgb(val){
        var h = val[0];
        var s = val[1];
        var l = val[2];

        var r, g, b;

        if(s == 0){
            r = g = b = l; // achromatic
        }else{
            function hue2rgb(p, q, t){
                if(t < 0) t += 1;
                if(t > 1) t -= 1;
                if(t < 1/6) return p + (q - p) * 6 * t;
                if(t < 1/2) return q;
                if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                return p;
            }

            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }

        return [r, g , b, val[3]];
    }

    function linear(t, tMin, tMax, value1, value2){
        if(value1 === undefined || value2 === undefined){
            return linear(t,0,1,tMin,tMax);
        }
        if(t <= tMin) {
            return value1;
        }else if(t >= tMax){
            return value2;
        }
        var perc = tMax === tMin ? 0 : (t-tMin)/(tMax-tMin);
        if(!value1.length){
            return value1 + (value2-value1)*perc;
        }
        var i, len = value1.length;
        var arr = Array.apply( null, { length: len } );
        for(i=0;i<len;i+=1){
            arr[i] = value1[i] + (value2[i]-value1[i])*perc;
        }
        return arr;
    }
    function random(min,max){
        if(max === undefined){
            if(min === undefined){
                min = 0;
                max = 1;
            } else {
                max = min;
                min = undefined;
            }
        }
        if(max.length){
            var i, len = max.length;
            if(!min){
                min = Array.apply(null,{length:len});
            }
            var arr = Array.apply(null,{length:len});
            var rnd = BMMath.random();
            for(i=0;i<len;i+=1){
                arr[i] = min[i] + rnd*(max[i]-min[i])
            }
            return arr;
        }
        if(min === undefined){
            min = 0;
        }
        var rndm = BMMath.random();
        return min + rndm*(max-min);
    }

    function initiateExpression(elem,data,property){
        var val = data.x;
        var needsVelocity = /velocity(?![\w\d])/.test(val);
        var _needsRandom = val.indexOf('random') !== -1;
        var elemType = elem.data.ty;
        var transform,content,effect;
        var thisComp = elem.comp;
        var thisProperty = property;
        elem.comp.frameDuration = 1/elem.comp.globalData.frameRate;
        var inPoint = elem.data.ip/elem.comp.globalData.frameRate;
        var outPoint = elem.data.op/elem.comp.globalData.frameRate;
        var width = elem.data.sw ? elem.data.sw : 0;
        var height = elem.data.sh ? elem.data.sh : 0;
        var toWorld,fromWorld,anchorPoint,thisLayer,thisComp;
        var fn = new Function();
        //var fnStr = 'var fn = function(){'+val+';this.v = $bm_rt;}';
        //eval(fnStr);

        var fn = eval('[function(){' + val+';this.v = $bm_rt;}' + ']')[0];
        var bindedFn = fn.bind(this);
        var numKeys = property.kf ? data.k.length : 0;

        var wiggle = function wiggle(freq,amp){
            var i,j, len = this.pv.length ? this.pv.length : 1;
            var addedAmps = Array.apply(null,{len:len});
            for(j=0;j<len;j+=1){
                addedAmps[j] = 0;
            }
            freq = 5;
            var iterations = Math.floor(time*freq);
            i = 0;
            j = 0;
            while(i<iterations){
                //var rnd = BMMath.random();
                for(j=0;j<len;j+=1){
                    addedAmps[j] += -amp + amp*2*BMMath.random();
                    //addedAmps[j] += -amp + amp*2*rnd;
                }
                i += 1;
            }
            //var rnd2 = BMMath.random();
            var periods = time*freq;
            var perc = periods - Math.floor(periods);
            var arr = Array.apply({length:len});
            if(len>1){
                for(j=0;j<len;j+=1){
                    arr[j] = this.pv[j] + addedAmps[j] + (-amp + amp*2*BMMath.random())*perc;
                    //arr[j] = this.pv[j] + addedAmps[j] + (-amp + amp*2*rnd)*perc;
                    //arr[i] = this.pv[i] + addedAmp + amp1*perc + amp2*(1-perc);
                }
                return arr;
            } else {
                return this.pv + addedAmps[0] + (-amp + amp*2*BMMath.random())*perc;
            }
        }.bind(this);

        var loopIn = function loopIn(type,duration, durationFlag) {
            if(!this.k){
                return this.pv;
            }
            var currentFrame = time*elem.comp.globalData.frameRate;
            var keyframes = this.keyframes;
            var firstKeyFrame = keyframes[0].t;
            if(currentFrame>=firstKeyFrame){
                return this.pv;
            }else{
                var cycleDuration, lastKeyFrame;
                if(!durationFlag){
                    if(!duration || duration > keyframes.length - 1){
                        duration = keyframes.length - 1;
                    }
                    lastKeyFrame = keyframes[duration].t;
                    cycleDuration = lastKeyFrame - firstKeyFrame;
                } else {
                    if(!duration){
                        cycleDuration = Math.max(0,this.elem.data.op - firstKeyFrame);
                    } else {
                        cycleDuration = Math.abs(elem.comp.globalData.frameRate*duration);
                    }
                    lastKeyFrame = firstKeyFrame + cycleDuration;
                }
                var i, len, ret;
                if(type === 'pingpong') {
                    var iterations = Math.floor((firstKeyFrame - currentFrame)/cycleDuration);
                    if(iterations % 2 === 0){
                        return this.getValueAtTime(((firstKeyFrame - currentFrame)%cycleDuration +  firstKeyFrame) / this.comp.globalData.frameRate, 0);
                    }
                } else if(type === 'offset'){
                    var initV = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
                    var endV = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
                    var current = this.getValueAtTime((cycleDuration - (firstKeyFrame - currentFrame)%cycleDuration +  firstKeyFrame) / this.comp.globalData.frameRate, 0);
                    var repeats = Math.floor((firstKeyFrame - currentFrame)/cycleDuration)+1;
                    if(this.pv.length){
                        ret = new Array(initV.length);
                        len = ret.length;
                        for(i=0;i<len;i+=1){
                            ret[i] = current[i]-(endV[i]-initV[i])*repeats;
                        }
                        return ret;
                    }
                    return current-(endV-initV)*repeats;
                } else if(type === 'continue'){
                    var firstValue = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
                    var nextFirstValue = this.getValueAtTime((firstKeyFrame + 0.001) / this.comp.globalData.frameRate, 0);
                    if(this.pv.length){
                        ret = new Array(firstValue.length);
                        len = ret.length;
                        for(i=0;i<len;i+=1){
                            ret[i] = firstValue[i] + (firstValue[i]-nextFirstValue[i])*(firstKeyFrame - currentFrame)/0.001;
                        }
                        return ret;
                    }
                    return firstValue + (firstValue-nextFirstValue)*(firstKeyFrame - currentFrame)/0.001;
                }
                return this.getValueAtTime((cycleDuration - (firstKeyFrame - currentFrame) % cycleDuration +  firstKeyFrame) / this.comp.globalData.frameRate, 0);
            }
        }.bind(this);

        var loopInDuration = function loopInDuration(type,duration){
            return loopIn(type,duration,true);
        }.bind(this);

        var loopOut = function loopOut(type,duration,durationFlag){
            if(!this.k || !this.keyframes){
                return this.pv;
            }
            var currentFrame = time*elem.comp.globalData.frameRate;
            var keyframes = this.keyframes;
            var lastKeyFrame = keyframes[keyframes.length - 1].t;
            if(currentFrame<=lastKeyFrame){
                return this.pv;
            }else{
                var cycleDuration, firstKeyFrame;
                if(!durationFlag){
                    if(!duration || duration > keyframes.length - 1){
                        duration = keyframes.length - 1;
                    }
                    firstKeyFrame = keyframes[keyframes.length - 1 - duration].t;
                    cycleDuration = lastKeyFrame - firstKeyFrame;
                } else {
                    if(!duration){
                        cycleDuration = Math.max(0,lastKeyFrame - this.elem.data.ip);
                    } else {
                        cycleDuration = Math.abs(lastKeyFrame - elem.comp.globalData.frameRate*duration);
                    }
                    firstKeyFrame = lastKeyFrame - cycleDuration;
                }
                var i, len, ret;
                if(type === 'pingpong') {
                    var iterations = Math.floor((currentFrame - firstKeyFrame)/cycleDuration);
                    if(iterations % 2 !== 0){
                        return this.getValueAtTime((cycleDuration - (currentFrame - firstKeyFrame) % cycleDuration +  firstKeyFrame) / this.comp.globalData.frameRate, 0);
                    }
                } else if(type === 'offset'){
                    var initV = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
                    var endV = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
                    var current = this.getValueAtTime(((currentFrame - firstKeyFrame) % cycleDuration +  firstKeyFrame) / this.comp.globalData.frameRate, 0);
                    var repeats = Math.floor((currentFrame - firstKeyFrame)/cycleDuration);
                    if(this.pv.length){
                        ret = new Array(initV.length);
                        len = ret.length;
                        for(i=0;i<len;i+=1){
                            ret[i] = (endV[i]-initV[i])*repeats + current[i];
                        }
                        return ret;
                    }
                    return (endV-initV)*repeats + current;
                } else if(type === 'continue'){
                    var lastValue = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
                    var nextLastValue = this.getValueAtTime((lastKeyFrame - 0.001) / this.comp.globalData.frameRate, 0);
                    if(this.pv.length){
                        ret = new Array(lastValue.length);
                        len = ret.length;
                        for(i=0;i<len;i+=1){
                            ret[i] = lastValue[i] + (lastValue[i]-nextLastValue[i])*((currentFrame - lastKeyFrame)/ this.comp.globalData.frameRate)/0.0005;
                        }
                        return ret;
                    }
                    return lastValue + (lastValue-nextLastValue)*(((currentFrame - lastKeyFrame))/0.001);
                }
                return this.getValueAtTime(((currentFrame - firstKeyFrame) % cycleDuration +  firstKeyFrame) / this.comp.globalData.frameRate, 0);
            }
        }.bind(this);
        var loop_out = loopOut;

        var loopOutDuration = function loopOutDuration(type,duration){
            return loopOut(type,duration,true);
        }.bind(this);

        var valueAtTime = function valueAtTime(t) {
            return this.getValueAtTime(t, 0);
        }.bind(this);

        var velocityAtTime;
        if(this.getVelocityAtTime) {
            velocityAtTime = this.getVelocityAtTime.bind(this);
        }

        var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);

        function lookAt(elem1,elem2){
            var fVec = [elem2[0]-elem1[0],elem2[1]-elem1[1],elem2[2]-elem1[2]];
            var pitch = Math.atan2(fVec[0],Math.sqrt(fVec[1]*fVec[1]+fVec[2]*fVec[2]))/degToRads;
            var yaw = -Math.atan2(fVec[1],fVec[2])/degToRads;
            return [yaw,pitch,0];
        };

        function easeOut(t, val1, val2){
            return -(val2-val1) * t*(t-2) + val1;
        };

        function nearestKey(time){
            var i, len = data.k.length,index,keyTime;
            if(!data.k.length || typeof(data.k[0]) === 'number'){
                index = 0;
                keyTime = 0;
            } else {
                index = -1;
                time *= elem.comp.globalData.frameRate;
                if (time < data.k[0].t) {
                    index = 1;
                    keyTime = data.k[0].t;
                } else {
                    for(i=0;i<len-1;i+=1){
                        if(time === data.k[i].t){
                            index = i + 1;
                            keyTime = data.k[i].t;
                            break;
                        }else if(time>data.k[i].t && time<data.k[i+1].t){
                            if(time-data.k[i].t > data.k[i+1].t - time){
                                index = i + 2;
                                keyTime = data.k[i+1].t;
                            } else {
                                index = i + 1;
                                keyTime = data.k[i].t;
                            }
                            break;
                        }
                    }
                    if(index === -1){
                        index = i + 1;
                        keyTime = data.k[i].t;
                    }
                }
                
            }
            var ob = {};
            ob.index = index;
            ob.time = keyTime/elem.comp.globalData.frameRate;
            return ob;
        };

        function key(ind){
            var ob, i, len;
            if(!data.k.length || typeof(data.k[0]) === 'number'){
                throw new Error('The property has no keyframe at index ' + ind);
            }
            ind -= 1;
            ob = {
                time: data.k[ind].t/elem.comp.globalData.frameRate
            };
            var arr;
            if(ind === data.k.length - 1 && !data.k[ind].h){
                arr = data.k[ind-1].e;
            }else{
                arr = data.k[ind].s;
            }
            len = arr.length;
            for(i=0;i<len;i+=1){
                ob[i] = arr[i];
            }
            return ob;
        };

        function framesToTime(frames,fps){
            if(!fps){
                fps = elem.comp.globalData.frameRate;
            }
            return frames/fps;
        };

        function timeToFrames(t,fps){
            if(!t && t !== 0){
                t = time;
            }
            if(!fps){
                fps = elem.comp.globalData.frameRate;
            }
            return t*fps;
        };

        function seedRandom(seed){
            BMMath.seedrandom(randSeed + seed);
        };

        function sourceRectAtTime() {
            return elem.sourceRectAtTime();
        }

        var time,velocity, value,textIndex,textTotal,selectorValue;
        var index = elem.data.ind;
        var hasParent = !!(elem.hierarchy && elem.hierarchy.length);
        var parent;
        var randSeed = Math.floor(Math.random()*1000000);
        function execute(){
            if(_needsRandom){
                seedRandom(randSeed);
            }
            if(this.frameExpressionId === elem.globalData.frameId && this.type !== 'textSelector'){
                return;
            }
            if(this.lock){
                this.v = duplicatePropertyValue(this.pv,this.mult);
                return true;
            }
            if(this.type === 'textSelector'){
                textIndex = this.textIndex;
                textTotal = this.textTotal;
                selectorValue = this.selectorValue;
            }
            if(!thisLayer){
                thisLayer = elem.layerInterface;
                thisComp = elem.comp.compInterface;
                toWorld = thisLayer.toWorld.bind(thisLayer);
                fromWorld = thisLayer.fromWorld.bind(thisLayer);
            }
            if(!transform){
                transform = elem.layerInterface("ADBE Transform Group");
                anchorPoint = transform.anchorPoint;
            }
            
            if(elemType === 4 && !content){
                content = thisLayer("ADBE Root Vectors Group");
            }
            if(!effect){
                effect = thisLayer(4);
            }
            hasParent = !!(elem.hierarchy && elem.hierarchy.length);
            if(hasParent && !parent){
                parent = elem.hierarchy[0].layerInterface;
            }
            this.lock = true;
            if(this.getPreValue){
                this.getPreValue();
            }
            value = this.pv;
            time = this.comp.renderedFrame/this.comp.globalData.frameRate;
            if(needsVelocity){
                velocity = velocityAtTime(time);
            }
            bindedFn();
            this.frameExpressionId = elem.globalData.frameId;
            var i,len;
            if(this.mult){
                if(typeof this.v === 'number' || this.v instanceof Number || typeof this.v === 'string'){
                    this.v *= this.mult;
                }else if(this.v.length === 1){
                    this.v = this.v[0] * this.mult;
                }else{
                    len = this.v.length;
                    if(value === this.v){
                        this.v = len === 2 ? [value[0],value[1]] : [value[0],value[1],value[2]];
                    }
                    for(i = 0; i < len; i += 1){
                        this.v[i] *= this.mult;
                    }
                }
            }
            if(this.v.length === 1){
                this.v = this.v[0];
            }
            if(typeof this.v === 'number' || this.v instanceof Number || typeof this.v === 'string'){
                if(this.lastValue !== this.v){
                    this.lastValue = this.v;
                    this.mdf = true;
                }
            }else if(this.v._length){
                if(!shapesEqual(this.v,this.localShapeCollection.shapes[0])){
                    this.mdf = true;
                    this.localShapeCollection.releaseShapes();
                    this.localShapeCollection.addShape(shape_pool.clone(this.v));
                }
            }else{
                len = this.v.length;
                for(i = 0; i < len; i += 1){
                    if(this.v[i] !== this.lastValue[i]){
                        this.lastValue[i] = this.v[i];
                        this.mdf = true;
                    }
                }
            }
            this.lock = false;
        }
        return execute;
    };

    ob.initiateExpression = initiateExpression;
    return ob;
}());
var ShapeExpressionInterface = (function(){
    var ob = {
        createShapeInterface:createShapeInterface,
        createGroupInterface:createGroupInterface,
        createTrimInterface:createTrimInterface,
        createStrokeInterface:createStrokeInterface,
        createTransformInterface:createTransformInterface,
        createEllipseInterface:createEllipseInterface,
        createStarInterface:createStarInterface,
        createRectInterface:createRectInterface,
        createRoundedInterface:createRoundedInterface,
        createRepatearInterface:createRepatearInterface,
        createPathInterface:createPathInterface,
        createFillInterface:createFillInterface
    };
    function createShapeInterface(shapes,view,propertyGroup){
        return shapeInterfaceFactory(shapes,view,propertyGroup);
    }
    function createGroupInterface(shapes,view,propertyGroup){
        return groupInterfaceFactory(shapes,view,propertyGroup);
    }
    function createFillInterface(shape,view,propertyGroup){
        return fillInterfaceFactory(shape,view,propertyGroup);
    }
    function createStrokeInterface(shape,view,propertyGroup){
        return strokeInterfaceFactory(shape,view,propertyGroup);
    }
    function createTrimInterface(shape,view,propertyGroup){
        return trimInterfaceFactory(shape,view,propertyGroup);
    }
    function createTransformInterface(shape,view,propertyGroup){
        return transformInterfaceFactory(shape,view,propertyGroup);
    }
    function createEllipseInterface(shape,view,propertyGroup){
        return ellipseInterfaceFactory(shape,view,propertyGroup);
    }
    function createStarInterface(shape,view,propertyGroup){
        return starInterfaceFactory(shape,view,propertyGroup);
    }
    function createRectInterface(shape,view,propertyGroup){
        return rectInterfaceFactory(shape,view,propertyGroup);
    }
    function createRoundedInterface(shape,view,propertyGroup){
        return roundedInterfaceFactory(shape,view,propertyGroup);
    }
    function createRepatearInterface(shape,view,propertyGroup){
        return repeaterInterfaceFactory(shape,view,propertyGroup);
    }
    function createPathInterface(shape,view,propertyGroup){
        return pathInterfaceFactory(shape,view,propertyGroup);
    }

    function iterateElements(shapes,view, propertyGroup){
        var arr = [];
        var i, len = shapes ? shapes.length : 0;
        for(i=0;i<len;i+=1){
            if(shapes[i].ty == 'gr'){
                arr.push(ShapeExpressionInterface.createGroupInterface(shapes[i],view[i],propertyGroup));
            }else if(shapes[i].ty == 'fl'){
                arr.push(ShapeExpressionInterface.createFillInterface(shapes[i],view[i],propertyGroup));
            }else if(shapes[i].ty == 'st'){
                arr.push(ShapeExpressionInterface.createStrokeInterface(shapes[i],view[i],propertyGroup));
            }else if(shapes[i].ty == 'tm'){
                arr.push(ShapeExpressionInterface.createTrimInterface(shapes[i],view[i],propertyGroup));
            }else if(shapes[i].ty == 'tr'){
                //arr.push(ShapeExpressionInterface.createTransformInterface(shapes[i],view[i],propertyGroup));
            }else if(shapes[i].ty == 'el'){
                arr.push(ShapeExpressionInterface.createEllipseInterface(shapes[i],view[i],propertyGroup));
            }else if(shapes[i].ty == 'sr'){
                arr.push(ShapeExpressionInterface.createStarInterface(shapes[i],view[i],propertyGroup));
            } else if(shapes[i].ty == 'sh'){
                arr.push(ShapeExpressionInterface.createPathInterface(shapes[i],view[i],propertyGroup));
            } else if(shapes[i].ty == 'rc'){
                arr.push(ShapeExpressionInterface.createRectInterface(shapes[i],view[i],propertyGroup));
            } else if(shapes[i].ty == 'rd'){
                arr.push(ShapeExpressionInterface.createRoundedInterface(shapes[i],view[i],propertyGroup));
            } else if(shapes[i].ty == 'rp'){
                arr.push(ShapeExpressionInterface.createRepatearInterface(shapes[i],view[i],propertyGroup));
            } else{
                //console.log(shapes[i].ty);
            }
        }
        return arr;
    }

    var shapeInterfaceFactory = (function(){
        return function(shapes,view,propertyGroup){
            var interfaces;
            function _interfaceFunction(value){
                if(typeof value === 'number'){
                    return interfaces[value-1];
                } else {
                    var i = 0, len = interfaces.length;
                    while(i<len){
                        if(interfaces[i]._name === value){
                            return interfaces[i];
                        }
                        i+=1;
                    }
                }
            }
            _interfaceFunction.propertyGroup = propertyGroup;
            interfaces = iterateElements(shapes, view, _interfaceFunction);
            return _interfaceFunction;
        }
    }());

    var contentsInterfaceFactory = (function(){
       return function(shape,view, propertyGroup){
           var interfaces;
           var interfaceFunction = function _interfaceFunction(value){
               var i = 0, len = interfaces.length;
                while(i<len){
                    if(interfaces[i]._name === value || interfaces[i].mn === value || interfaces[i].propertyIndex === value || interfaces[i].ix === value || interfaces[i].ind === value){
                       return interfaces[i];
                    }
                    i+=1;
                }
                if(typeof value === 'number'){
                   return interfaces[value-1];
                }
           };
           interfaceFunction.propertyGroup = function(val){
               if(val === 1){
                   return interfaceFunction;
               } else{
                   return propertyGroup(val-1);
               }
           };
           interfaces = iterateElements(shape.it, view.it, interfaceFunction.propertyGroup);
           interfaceFunction.numProperties = interfaces.length;
           interfaceFunction.propertyIndex = shape.cix;

           return interfaceFunction;
       }
    }());

    var groupInterfaceFactory = (function(){
        return function(shape,view, propertyGroup){
            var interfaceFunction = function _interfaceFunction(value){
                switch(value){
                    case 'ADBE Vectors Group':
                    case 'Contents':
                    case 2:
                        return interfaceFunction.content;
                    case 'ADBE Vector Transform Group':
                    case 3:
                    default:
                        return interfaceFunction.transform;
                }
                /*if(value === 'ADBE Vector Transform Group'){
                    return interfaceFunction.transform;
                    var i = 0, len = interfaces.length;
                    while(i<len){
                        if(interfaces[i].ty === 'tr'){
                            return interfaces[i];
                        }
                        i+=1;
                    }
                    return null;
                }
                if(typeof value === 'number'){
                    return interfaces[value-1];
                } else {
                    var i = 0, len = interfaces.length;
                    while(i<len){
                        if(interfaces[i]._name === value){
                            return interfaces[i];
                        }
                        i+=1;
                    }
                }*/
            }
            interfaceFunction.propertyGroup = function(val){
                if(val === 1){
                    return interfaceFunction;
                } else{
                    return propertyGroup(val-1);
                }
            };
            var content = contentsInterfaceFactory(shape,view,interfaceFunction.propertyGroup);
            var transformInterface = ShapeExpressionInterface.createTransformInterface(shape.it[shape.it.length - 1],view.it[view.it.length - 1],interfaceFunction.propertyGroup);
            interfaceFunction.content = content;
            interfaceFunction.transform = transformInterface;
            Object.defineProperty(interfaceFunction, '_name', {
                get: function(){
                    return shape.nm;
                }
            });
            //interfaceFunction.content = interfaceFunction;
            interfaceFunction.numProperties = shape.np;
            interfaceFunction.propertyIndex = shape.ix;
            interfaceFunction.nm = shape.nm;
            interfaceFunction.mn = shape.mn;
            return interfaceFunction;
        }
    }());

    var fillInterfaceFactory = (function(){
        return function(shape,view,propertyGroup){

            function interfaceFunction(val){
                if(val === 'Color' || val === 'color'){
                    return interfaceFunction.color;
                } else if(val === 'Opacity' || val === 'opacity'){
                    return interfaceFunction.opacity;
                }
            }
            Object.defineProperty(interfaceFunction, 'color', {
                get: function(){
                    return ExpressionValue(view.c, 1 / view.c.mult, 'color');
                }
            });
            Object.defineProperty(interfaceFunction, 'opacity', {
                get: function(){
                    return ExpressionValue(view.o, 100);
                }
            });
            Object.defineProperty(interfaceFunction, '_name', { value: shape.nm });
            Object.defineProperty(interfaceFunction, 'mn', { value: shape.mn });

            view.c.setGroupProperty(propertyGroup);
            view.o.setGroupProperty(propertyGroup);
            return interfaceFunction;
        }
    }());

    var strokeInterfaceFactory = (function(){
        return function(shape,view,propertyGroup){
            function _propertyGroup(val){
                if(val === 1){
                    return ob;
                } else{
                    return propertyGroup(val-1);
                }
            };
            function _dashPropertyGroup(val){
                if(val === 1){
                    return dashOb;
                } else{
                    return _propertyGroup(val-1);
                }
            };
            function addPropertyToDashOb(i) {
                Object.defineProperty(dashOb, shape.d[i].nm, {
                    get: function(){
                        return ExpressionValue(view.d.dataProps[i].p)
                    }
                });
            }
            var i, len = shape.d ? shape.d.length : 0;
            var dashOb = {}
            for (i = 0; i < len; i += 1) {
                addPropertyToDashOb(i);
                view.d.dataProps[i].p.setGroupProperty(_dashPropertyGroup);
            }

            function interfaceFunction(val){
                if(val === 'Color' || val === 'color'){
                    return interfaceFunction.color;
                } else if(val === 'Opacity' || val === 'opacity'){
                    return interfaceFunction.opacity;
                } else if(val === 'Stroke Width' || val === 'stroke width'){
                    return interfaceFunction.strokeWidth;
                }
            }
            Object.defineProperty(interfaceFunction, 'color', {
                get: function(){
                    return ExpressionValue(view.c, 1 / view.c.mult, 'color');
                }
            });
            Object.defineProperty(interfaceFunction, 'opacity', {
                get: function(){
                    return ExpressionValue(view.o, 100);
                }
            });
            Object.defineProperty(interfaceFunction, 'strokeWidth', {
                get: function(){
                    return ExpressionValue(view.w);
                }
            });
            Object.defineProperty(interfaceFunction, 'dash', {
                get: function(){
                    return dashOb;
                }
            });
            Object.defineProperty(interfaceFunction, '_name', { value: shape.nm });
            Object.defineProperty(interfaceFunction, 'mn', { value: shape.mn });

            view.c.setGroupProperty(_propertyGroup);
            view.o.setGroupProperty(_propertyGroup);
            view.w.setGroupProperty(_propertyGroup);
            return interfaceFunction;
        }
    }());

    var trimInterfaceFactory = (function(){
        return function(shape,view,propertyGroup){
            function _propertyGroup(val){
                if(val == 1){
                    return interfaceFunction;
                } else {
                    return propertyGroup(--val);
                }
            }
            interfaceFunction.propertyIndex = shape.ix;

            view.s.setGroupProperty(_propertyGroup);
            view.e.setGroupProperty(_propertyGroup);
            view.o.setGroupProperty(_propertyGroup);

            function interfaceFunction(val){
                if(val === shape.e.ix || val === 'End' || val === 'end'){
                    return interfaceFunction.end;
                }
                if(val === shape.s.ix){
                    return interfaceFunction.start;
                }
                if(val === shape.o.ix){
                    return interfaceFunction.offset;
                }
            }
            interfaceFunction.propertyIndex = shape.ix;
            Object.defineProperty(interfaceFunction, 'start', {
                get: function(){
                    return ExpressionValue(view.s, 1 / view.s.mult);
                }
            });
            Object.defineProperty(interfaceFunction, 'end', {
                get: function(){
                    return ExpressionValue(view.e, 1 / view.e.mult);
                }
            });
            Object.defineProperty(interfaceFunction, 'offset', {
                get: function(){
                    return ExpressionValue(view.o);
                }
            });
            Object.defineProperty(interfaceFunction, '_name', {
                get: function(){
                    return shape.nm;
                }
            });
            interfaceFunction.mn = shape.mn;
            return interfaceFunction;
        }
    }());

    var transformInterfaceFactory = (function(){
        return function(shape,view,propertyGroup){
            function _propertyGroup(val){
                if(val == 1){
                    return interfaceFunction;
                } else {
                    return propertyGroup(--val);
                }
            }
            view.transform.mProps.o.setGroupProperty(_propertyGroup);
            view.transform.mProps.p.setGroupProperty(_propertyGroup);
            view.transform.mProps.a.setGroupProperty(_propertyGroup);
            view.transform.mProps.s.setGroupProperty(_propertyGroup);
            view.transform.mProps.r.setGroupProperty(_propertyGroup);
            if(view.transform.mProps.sk){
                view.transform.mProps.sk.setGroupProperty(_propertyGroup);
                view.transform.mProps.sa.setGroupProperty(_propertyGroup);
            }
            view.transform.op.setGroupProperty(_propertyGroup);

            function interfaceFunction(value){
                if(shape.a.ix === value){
                    return interfaceFunction.anchorPoint;
                }
                if(shape.o.ix === value){
                    return interfaceFunction.opacity;
                }
                if(shape.p.ix === value){
                    return interfaceFunction.position;
                }
                if(shape.r.ix === value){
                    return interfaceFunction.rotation;
                }
                if(shape.s.ix === value){
                    return interfaceFunction.scale;
                }
                if(shape.sk && shape.sk.ix === value){
                    return interfaceFunction.skew;
                }
                if(shape.sa && shape.sa.ix === value){
                    return interfaceFunction.skewAxis;
                }
                if(value === 'Opacity') {
                    return interfaceFunction.opacity;
                }
                if(value === 'Position') {
                    return interfaceFunction.position;
                }
                if(value === 'Anchor Point') {
                    return interfaceFunction.anchorPoint;
                }
                if(value === 'Scale') {
                    return interfaceFunction.scale;
                }
                if(value === 'Rotation' || value === 'ADBE Vector Rotation') {
                    return interfaceFunction.rotation;
                }
                if(value === 'Skew') {
                    return interfaceFunction.skew;
                }
                if(value === 'Skew Axis') {
                    return interfaceFunction.skewAxis;
                }

            }
            Object.defineProperty(interfaceFunction, 'opacity', {
                get: function(){
                    return ExpressionValue(view.transform.mProps.o, 1/view.transform.mProps.o.mult);
                }
            });
            Object.defineProperty(interfaceFunction, 'position', {
                get: function(){
                    return ExpressionValue(view.transform.mProps.p);
                }
            });
            Object.defineProperty(interfaceFunction, 'anchorPoint', {
                get: function(){
                    return ExpressionValue(view.transform.mProps.a);
                }
            });
            var scaleArray = [];
            Object.defineProperty(interfaceFunction, 'scale', {
                get: function(){
                    return ExpressionValue(view.transform.mProps.s, 1 / view.transform.mProps.s.mult);
                }
            });
            Object.defineProperty(interfaceFunction, 'rotation', {
                get: function(){
                    return ExpressionValue(view.transform.mProps.r, 1 / view.transform.mProps.r.mult);
                }
            });
            Object.defineProperty(interfaceFunction, 'skew', {
                get: function(){
                    return ExpressionValue(view.transform.mProps.sk);
                }
            });
            Object.defineProperty(interfaceFunction, 'skewAxis', {
                get: function(){
                    return ExpressionValue(view.transform.mProps.sa);
                }
            });
            Object.defineProperty(interfaceFunction, '_name', {
                get: function(){
                    return shape.nm;
                }
            });
            interfaceFunction.ty = 'tr';
            interfaceFunction.mn = shape.mn;
            return interfaceFunction;
        }
    }());

    var ellipseInterfaceFactory = (function(){
        return function(shape,view,propertyGroup){
            function _propertyGroup(val){
                if(val == 1){
                    return interfaceFunction;
                } else {
                    return propertyGroup(--val);
                }
            }
            interfaceFunction.propertyIndex = shape.ix;
            var prop = view.sh.ty === 'tm' ? view.sh.prop : view.sh;
            prop.s.setGroupProperty(_propertyGroup);
            prop.p.setGroupProperty(_propertyGroup);
            function interfaceFunction(value){
                if(shape.p.ix === value){
                    return interfaceFunction.position;
                }
                if(shape.s.ix === value){
                    return interfaceFunction.size;
                }
            }
            Object.defineProperty(interfaceFunction, 'size', {
                get: function(){
                    return ExpressionValue(prop.s);
                }
            });
            Object.defineProperty(interfaceFunction, 'position', {
                get: function(){
                    return ExpressionValue(prop.p);
                }
            });
            Object.defineProperty(interfaceFunction, '_name', {
                get: function(){
                    return shape.nm;
                }
            });
            interfaceFunction.mn = shape.mn;
            return interfaceFunction;
        }
    }());

    var starInterfaceFactory = (function(){
        return function(shape,view,propertyGroup){
            function _propertyGroup(val){
                if(val == 1){
                    return interfaceFunction;
                } else {
                    return propertyGroup(--val);
                }
            }
            var prop = view.sh.ty === 'tm' ? view.sh.prop : view.sh;
            interfaceFunction.propertyIndex = shape.ix;
            prop.or.setGroupProperty(_propertyGroup);
            prop.os.setGroupProperty(_propertyGroup);
            prop.pt.setGroupProperty(_propertyGroup);
            prop.p.setGroupProperty(_propertyGroup);
            prop.r.setGroupProperty(_propertyGroup);
            if(shape.ir){
                prop.ir.setGroupProperty(_propertyGroup);
                prop.is.setGroupProperty(_propertyGroup);
            }

            function interfaceFunction(value){
                if(shape.p.ix === value){
                    return interfaceFunction.position;
                }
                if(shape.r.ix === value){
                    return interfaceFunction.rotation;
                }
                if(shape.pt.ix === value){
                    return interfaceFunction.points;
                }
                if(shape.or.ix === value || 'ADBE Vector Star Outer Radius' === value){
                    return interfaceFunction.outerRadius;
                }
                if(shape.os.ix === value){
                    return interfaceFunction.outerRoundness;
                }
                if(shape.ir && (shape.ir.ix === value || 'ADBE Vector Star Inner Radius' === value)){
                    return interfaceFunction.innerRadius;
                }
                if(shape.is && shape.is.ix === value){
                    return interfaceFunction.innerRoundness;
                }

            }
            Object.defineProperty(interfaceFunction, 'position', {
                get: function(){
                    return ExpressionValue(prop.p);
                }
            });
            Object.defineProperty(interfaceFunction, 'rotation', {
                get: function(){
                    return ExpressionValue(prop.r, 1 / prop.r.mult);
                }
            });
            Object.defineProperty(interfaceFunction, 'points', {
                get: function(){
                    return ExpressionValue(prop.pt);
                }
            });
            Object.defineProperty(interfaceFunction, 'outerRadius', {
                get: function(){
                    return ExpressionValue(prop.or);
                }
            });
            Object.defineProperty(interfaceFunction, 'outerRoundness', {
                get: function(){
                    return ExpressionValue(prop.os);
                }
            });
            Object.defineProperty(interfaceFunction, 'innerRadius', {
                get: function(){
                    if(!prop.ir){
                        return 0;
                    }
                    return ExpressionValue(prop.ir);
                }
            });
            Object.defineProperty(interfaceFunction, 'innerRoundness', {
                get: function(){
                    if(!prop.is){
                        return 0;
                    }
                    return ExpressionValue(prop.is, 1 / prop.is.mult);
                }
            });
            Object.defineProperty(interfaceFunction, '_name', {
                get: function(){
                    return shape.nm;
                }
            });
            interfaceFunction.mn = shape.mn;
            return interfaceFunction;
        }
    }());

    var rectInterfaceFactory = (function(){
        return function(shape,view,propertyGroup){
            function _propertyGroup(val){
                if(val == 1){
                    return interfaceFunction;
                } else {
                    return propertyGroup(--val);
                }
            }
            var prop = view.sh.ty === 'tm' ? view.sh.prop : view.sh;
            interfaceFunction.propertyIndex = shape.ix;
            prop.p.setGroupProperty(_propertyGroup);
            prop.s.setGroupProperty(_propertyGroup);
            prop.r.setGroupProperty(_propertyGroup);

            function interfaceFunction(value){
                if(shape.p.ix === value){
                    return interfaceFunction.position;
                }
                if(shape.r.ix === value){
                    return interfaceFunction.roundness;
                }
                if(shape.s.ix === value || value === 'Size'){
                    return interfaceFunction.size;
                }

            }
            Object.defineProperty(interfaceFunction, 'position', {
                get: function(){
                    return ExpressionValue(prop.p);
                }
            });
            Object.defineProperty(interfaceFunction, 'roundness', {
                get: function(){
                    return ExpressionValue(prop.r);
                }
            });
            Object.defineProperty(interfaceFunction, 'size', {
                get: function(){
                    return ExpressionValue(prop.s);
                }
            });

            Object.defineProperty(interfaceFunction, '_name', {
                get: function(){
                    return shape.nm;
                }
            });
            interfaceFunction.mn = shape.mn;
            return interfaceFunction;
        }
    }());

    var roundedInterfaceFactory = (function(){
        return function(shape,view,propertyGroup){
            function _propertyGroup(val){
                if(val == 1){
                    return interfaceFunction;
                } else {
                    return propertyGroup(--val);
                }
            }
            var prop = view;
            interfaceFunction.propertyIndex = shape.ix;
            prop.rd.setGroupProperty(_propertyGroup);

            function interfaceFunction(value){
                if(shape.r.ix === value || 'Round Corners 1' === value){
                    return interfaceFunction.radius;
                }

            }
            Object.defineProperty(interfaceFunction, 'radius', {
                get: function(){
                    return ExpressionValue(prop.rd);
                }
            });

            Object.defineProperty(interfaceFunction, '_name', {
                get: function(){
                    return shape.nm;
                }
            });
            interfaceFunction.mn = shape.mn;
            return interfaceFunction;
        }
    }());

    var repeaterInterfaceFactory = (function(){
        return function(shape,view,propertyGroup){
            function _propertyGroup(val){
                if(val == 1){
                    return interfaceFunction;
                } else {
                    return propertyGroup(--val);
                }
            }
            var prop = view;
            interfaceFunction.propertyIndex = shape.ix;
            prop.c.setGroupProperty(_propertyGroup);
            prop.o.setGroupProperty(_propertyGroup);

            function interfaceFunction(value){
                if(shape.c.ix === value || 'Copies' === value){
                    return interfaceFunction.copies;
                } else if(shape.o.ix === value || 'Offset' === value){
                    return interfaceFunction.offset;
                }

            }
            Object.defineProperty(interfaceFunction, 'copies', {
                get: function(){
                    return ExpressionValue(prop.c);
                }
            });

            Object.defineProperty(interfaceFunction, 'offset', {
                get: function(){
                    return ExpressionValue(prop.o);
                }
            });

            Object.defineProperty(interfaceFunction, '_name', {
                get: function(){
                    return shape.nm;
                }
            });
            interfaceFunction.mn = shape.mn;
            return interfaceFunction;
        }
    }());

    var pathInterfaceFactory = (function(){
        return function(shape,view,propertyGroup){
            var prop = view.sh.ty === 'tm' ? view.sh.prop : view.sh;
            function _propertyGroup(val){
                if(val == 1){
                    return interfaceFunction;
                } else {
                    return propertyGroup(--val);
                }
            }
            prop.setGroupProperty(_propertyGroup);

            function interfaceFunction(val){
                if(val === 'Shape' || val === 'shape' || val === 'Path' || val === 'path' || val === 2){
                    return interfaceFunction.path;
                }
            }
            Object.defineProperty(interfaceFunction, 'path', {
                get: function(){
                    if(prop.k){
                        prop.getValue();
                    }
                    return prop.v;
                    //return shape_pool.clone(prop.v);
                }
            });
            Object.defineProperty(interfaceFunction, 'shape', {
                get: function(){
                    if(prop.k){
                        prop.getValue();
                    }
                    return prop.v;
                    //return shape_pool.clone(prop.v);
                }
            });
            Object.defineProperty(interfaceFunction, '_name', { value: shape.nm });
            Object.defineProperty(interfaceFunction, 'ix', { value: shape.ix });
            Object.defineProperty(interfaceFunction, 'mn', { value: shape.mn });
            return interfaceFunction;
        }
    }());


    return ob;
}())

var TextExpressionInterface = (function(){
	return function(elem){
        function _thisLayerFunction(){
        }
        Object.defineProperty(_thisLayerFunction, "sourceText", {
            get: function(){
            	if(!elem.currentTextDocumentData.t) {
            		return ''
            	}
                return elem.currentTextDocumentData.t;
            }
        });
        return _thisLayerFunction;
    }
}())
var LayerExpressionInterface = (function (){
    function toWorld(arr, time){
        var toWorldMat = new Matrix();
        toWorldMat.reset();
        var transformMat;
        if(time) {
            //Todo implement value at time on transform properties
            //transformMat = this._elem.finalTransform.mProp.getValueAtTime(time);
            transformMat = this._elem.finalTransform.mProp;
        } else {
            transformMat = this._elem.finalTransform.mProp;
        }
        transformMat.applyToMatrix(toWorldMat);
        if(this._elem.hierarchy && this._elem.hierarchy.length){
            var i, len = this._elem.hierarchy.length;
            for(i=0;i<len;i+=1){
                this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(toWorldMat);
            }
            return toWorldMat.applyToPointArray(arr[0],arr[1],arr[2]||0);
        }
        return toWorldMat.applyToPointArray(arr[0],arr[1],arr[2]||0);
    }
    function fromWorld(arr, time){
        var toWorldMat = new Matrix();
        toWorldMat.reset();
        var transformMat;
        if(time) {
            //Todo implement value at time on transform properties
            //transformMat = this._elem.finalTransform.mProp.getValueAtTime(time);
            transformMat = this._elem.finalTransform.mProp;
        } else {
            transformMat = this._elem.finalTransform.mProp;
        }
        transformMat.applyToMatrix(toWorldMat);
        if(this._elem.hierarchy && this._elem.hierarchy.length){
            var i, len = this._elem.hierarchy.length;
            for(i=0;i<len;i+=1){
                this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(toWorldMat);
            }
            return toWorldMat.inversePoint(arr);
        }
        return toWorldMat.inversePoint(arr);
    }
    function fromComp(arr){
        var toWorldMat = new Matrix();
        toWorldMat.reset();
        this._elem.finalTransform.mProp.applyToMatrix(toWorldMat);
        if(this._elem.hierarchy && this._elem.hierarchy.length){
            var i, len = this._elem.hierarchy.length;
            for(i=0;i<len;i+=1){
                this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(toWorldMat);
            }
            return toWorldMat.inversePoint(arr);
        }
        return toWorldMat.inversePoint(arr);
    }


    return function(elem){

        var transformInterface = TransformExpressionInterface(elem.transform);

        function _registerMaskInterface(maskManager){
            _thisLayerFunction.mask = maskManager.getMask.bind(maskManager);
        }
        function _registerEffectsInterface(effects){
            _thisLayerFunction.effect = effects;
        }

        function _thisLayerFunction(name){
            switch(name){
                case "ADBE Root Vectors Group":
                case "Contents":
                case 2:
                    return _thisLayerFunction.shapeInterface;
                case 1:
                case 6:
                case "Transform":
                case "transform":
                case "ADBE Transform Group":
                    return transformInterface;
                case 4:
                case "ADBE Effect Parade":
                    return _thisLayerFunction.effect;
            }
        }
        _thisLayerFunction.toWorld = toWorld;
        _thisLayerFunction.fromWorld = fromWorld;
        _thisLayerFunction.toComp = toWorld;
        _thisLayerFunction.fromComp = fromComp;
        _thisLayerFunction.sourceRectAtTime = elem.sourceRectAtTime.bind(elem);
        _thisLayerFunction._elem = elem;
        Object.defineProperty(_thisLayerFunction, 'hasParent', {
            get: function(){
                return !!elem.hierarchy;
            }
        });
        Object.defineProperty(_thisLayerFunction, 'parent', {
            get: function(){
                return elem.hierarchy[0].layerInterface;
            }
        });
        Object.defineProperty(_thisLayerFunction, "rotation", {
            get: function(){
                return transformInterface.rotation;
            }
        });
        Object.defineProperty(_thisLayerFunction, "scale", {
            get: function () {
                return transformInterface.scale;
            }
        });

        Object.defineProperty(_thisLayerFunction, "position", {
            get: function () {
                return transformInterface.position;
            }
        });

        Object.defineProperty(_thisLayerFunction, "anchorPoint", {
            get: function () {
                return transformInterface.anchorPoint;
            }
        });

        Object.defineProperty(_thisLayerFunction, "transform", {
            get: function () {
                return transformInterface;
            }
        });

        Object.defineProperty(_thisLayerFunction, "width", {
            get: function () {
                if(elem.data.ty === 0) {
                    return elem.data.w
                }
                return 100;
            }
        });

        Object.defineProperty(_thisLayerFunction, "height", {
            get: function () {
                if(elem.data.ty === 0) {
                    return elem.data.h
                }
                return 100;
            }
        });

        Object.defineProperty(_thisLayerFunction, "source", {
            get: function () {
                return elem.data.refId;
            }
        });

        Object.defineProperty(_thisLayerFunction, "_name", { value:elem.data.nm });
        Object.defineProperty(_thisLayerFunction, "content", {
            get: function(){
                return _thisLayerFunction.shapeInterface;
            }
        });

        Object.defineProperty(_thisLayerFunction, "active", {
            get: function(){
                return elem.isVisible;
            }
        });

        Object.defineProperty(_thisLayerFunction, "text", {
            get: function(){
                return _thisLayerFunction.textInterface;
            }
        });

        _thisLayerFunction.registerMaskInterface = _registerMaskInterface;
        _thisLayerFunction.registerEffectsInterface = _registerEffectsInterface;
        return _thisLayerFunction;
    }
}());

var CompExpressionInterface = (function (){
    return function(comp){
        function _thisLayerFunction(name){
            var i=0, len = comp.layers.length;
            while(i<len){
                if(comp.layers[i].nm === name || comp.layers[i].ind === name){
                    return comp.elements[i].layerInterface;
                }
                i += 1;
            }
            return {active:false}
        }
        Object.defineProperty(_thisLayerFunction, "_name", { value:comp.data.nm });
        _thisLayerFunction.layer = _thisLayerFunction;
        _thisLayerFunction.pixelAspect = 1;
        _thisLayerFunction.height = comp.globalData.compSize.h;
        _thisLayerFunction.width = comp.globalData.compSize.w;
        _thisLayerFunction.pixelAspect = 1;
        _thisLayerFunction.frameDuration = 1/comp.globalData.frameRate;
        return _thisLayerFunction;
    }
}());
var TransformExpressionInterface = (function (){
    return function(transform){
        function _thisFunction(name){
            switch(name){
                case "scale":
                case "Scale":
                case "ADBE Scale":
                case 6:
                    return _thisFunction.scale;
                case "rotation":
                case "Rotation":
                case "ADBE Rotation":
                case "ADBE Rotate Z":
                case 10:
                    return _thisFunction.rotation;
                case "position":
                case "Position":
                case "ADBE Position":
                case 2:
                    return transform.position;
                case "anchorPoint":
                case "AnchorPoint":
                case "Anchor Point":
                case "ADBE AnchorPoint":
                case 1:
                    return _thisFunction.anchorPoint;
                case "opacity":
                case "Opacity":
                case 11:
                    return _thisFunction.opacity;
            }
        }

        Object.defineProperty(_thisFunction, "rotation", {
            get: function(){
                return transform.rotation;
            }
        });
        Object.defineProperty(_thisFunction, "scale", {
            get: function () {
                return transform.scale;
            }
        });

        Object.defineProperty(_thisFunction, "position", {
            get: function () {
                return transform.position;
            }
        });

        Object.defineProperty(_thisFunction, "xPosition", {
            get: function () {
                return transform.xPosition;
            }
        });

        Object.defineProperty(_thisFunction, "yPosition", {
            get: function () {
                return transform.yPosition;
            }
        });

        Object.defineProperty(_thisFunction, "anchorPoint", {
            get: function () {
                return transform.anchorPoint;
            }
        });

        Object.defineProperty(_thisFunction, "opacity", {
            get: function () {
                return transform.opacity;
            }
        });

        Object.defineProperty(_thisFunction, "skew", {
            get: function () {
                return transform.skew;
            }
        });

        Object.defineProperty(_thisFunction, "skewAxis", {
            get: function () {
                return transform.skewAxis;
            }
        });

        return _thisFunction;
    }
}());
var ProjectInterface = (function (){

    function registerComposition(comp){
        this.compositions.push(comp);
    }

    return function(){
        function _thisProjectFunction(name){
            var i = 0, len = this.compositions.length;
            while(i<len){
                if(this.compositions[i].data && this.compositions[i].data.nm === name){
                    if(this.compositions[i].prepareFrame) {
                        this.compositions[i].prepareFrame(this.currentFrame);
                    }
                    return this.compositions[i].compInterface;
                }
                i+=1;
            }
        }

        _thisProjectFunction.compositions = [];
        _thisProjectFunction.currentFrame = 0;

        _thisProjectFunction.registerComposition = registerComposition;



        return _thisProjectFunction;
    }
}());
var EffectsExpressionInterface = (function (){
    var ob = {
        createEffectsInterface: createEffectsInterface
    };

    function createEffectsInterface(elem, propertyGroup){
        if(elem.effects){

            var effectElements = [];
            var effectsData = elem.data.ef;
            var i, len = elem.effects.effectElements.length;
            for(i=0;i<len;i+=1){
                effectElements.push(createGroupInterface(effectsData[i],elem.effects.effectElements[i],propertyGroup,elem));
            }

            return function(name){
                var effects = elem.data.ef, i = 0, len = effects.length;
                while(i<len) {
                    if(name === effects[i].nm || name === effects[i].mn || name === effects[i].ix){
                        return effectElements[i];
                    }
                    i += 1;
                }
            }
        }
    }

    function createGroupInterface(data,elements, propertyGroup, elem){
        var effectElements = [];
        var i, len = data.ef.length;
        for(i=0;i<len;i+=1){
            if(data.ef[i].ty === 5){
                effectElements.push(createGroupInterface(data.ef[i],elements.effectElements[i],propertyGroup, elem));
            } else {
                effectElements.push(createValueInterface(elements.effectElements[i],data.ef[i].ty, elem));
            }
        }
        var groupInterface = function(name){
            var effects = data.ef, i = 0, len = effects.length;
            while(i<len) {
                if(name === effects[i].nm || name === effects[i].mn || name === effects[i].ix){
                    if(effects[i].ty === 5){
                        return effectElements[i];
                    } else {
                        return effectElements[i]();
                    }
                }
                i += 1;
            }
            return effectElements[0]();
        }
        if(data.mn === 'ADBE Color Control'){
            Object.defineProperty(groupInterface, 'color', {
                get: function(){
                    return effectElements[0]();
                }
            });
        }
        Object.defineProperty(groupInterface, 'numProperties', {
            get: function(){
                return data.np;
            }
        });
        groupInterface.active = data.en !== 0;
        return groupInterface
    }

    function createValueInterface(element, type, elem){
        return function(){
            if(type === 10){
                return elem.comp.compInterface(element.p.v);
            }
            return ExpressionValue(element.p);
        }
    }

    return ob;

}());
var ExpressionValue = (function() {
	return function(elementProp, mult, type) {
        var expressionValue, arrayValue;

		if (elementProp.k) {
            elementProp.getValue();
        }
        var i, len, arrValue;
        if (type) {
        	if(type === 'color') {
        		len = 4;
		        expressionValue = Array.apply(null, {length: len});
		        arrValue = Array.apply(null, {length: len});
		        for (i = 0; i < len; i += 1) {
		            expressionValue[i] = arrValue[i] = (mult && i < 3) ? elementProp.v[i] * mult : 1;
		        }
	        	expressionValue.value = arrValue;
        	}
        } else if (typeof elementProp.v === 'number' || elementProp.v instanceof Number){
            expressionValue = mult ? new Number(elementProp.v * mult) : new Number(elementProp.v);
            expressionValue.value = mult ? elementProp.v * mult : elementProp.v;
        } else {
        	len = elementProp.v.length;
	        expressionValue = Array.apply(null, {length: len});
	        arrValue = Array.apply(null, {length: len});
	        for (i = 0; i < len; i += 1) {
	            expressionValue[i] = arrValue[i] = mult ? elementProp.v[i] * mult : elementProp.v[i];
	        }
	        expressionValue.value = arrValue;
        }
        
        expressionValue.numKeys = elementProp.keyframes ? elementProp.keyframes.length : 0;
        expressionValue.key = function(pos) {
            if (!expressionValue.numKeys) {
                return 0;
            } else {
                return elementProp.keyframes[pos-1].t;
            }
        };
        expressionValue.valueAtTime = elementProp.getValueAtTime;
        expressionValue.propertyGroup = elementProp.propertyGroup;
        return expressionValue;
	}
}())
function SliderEffect(data,elem, dynamicProperties){
    this.p = PropertyFactory.getProp(elem,data.v,0,0,dynamicProperties);
}
function AngleEffect(data,elem, dynamicProperties){
    this.p = PropertyFactory.getProp(elem,data.v,0,0,dynamicProperties);
}
function ColorEffect(data,elem, dynamicProperties){
    this.p = PropertyFactory.getProp(elem,data.v,1,0,dynamicProperties);
}
function PointEffect(data,elem, dynamicProperties){
    this.p = PropertyFactory.getProp(elem,data.v,1,0,dynamicProperties);
}
function LayerIndexEffect(data,elem, dynamicProperties){
    this.p = PropertyFactory.getProp(elem,data.v,0,0,dynamicProperties);
}
function MaskIndexEffect(data,elem, dynamicProperties){
    this.p = PropertyFactory.getProp(elem,data.v,0,0,dynamicProperties);
}
function CheckboxEffect(data,elem, dynamicProperties){
    this.p = PropertyFactory.getProp(elem,data.v,0,0,dynamicProperties);
}
function NoValueEffect(){
    this.p = {};
}
function EffectsManager(data,element,dynamicProperties){
    var effects = data.ef;
    this.effectElements = [];
    var i,len = effects.length;
    var effectItem;
    for(i=0;i<len;i++) {
        effectItem = new GroupEffect(effects[i],element,dynamicProperties);
        this.effectElements.push(effectItem);
    }
}

function GroupEffect(data,element,dynamicProperties){
    this.dynamicProperties = [];
    this.init(data,element,this.dynamicProperties);
    if(this.dynamicProperties.length){
        dynamicProperties.push(this);
    }
}

GroupEffect.prototype.getValue = function(){
    this.mdf = false;
    var i, len = this.dynamicProperties.length;
    for(i=0;i<len;i+=1){
        this.dynamicProperties[i].getValue();
        this.mdf = this.dynamicProperties[i].mdf ? true : this.mdf;
    }
};

GroupEffect.prototype.init = function(data,element,dynamicProperties){
    this.data = data;
    this.mdf = false;
    this.effectElements = [];
    var i, len = this.data.ef.length;
    var eff, effects = this.data.ef;
    for(i=0;i<len;i+=1){
        switch(effects[i].ty){
            case 0:
                eff = new SliderEffect(effects[i],element,dynamicProperties);
                this.effectElements.push(eff);
                break;
            case 1:
                eff = new AngleEffect(effects[i],element,dynamicProperties);
                this.effectElements.push(eff);
                break;
            case 2:
                eff = new ColorEffect(effects[i],element,dynamicProperties);
                this.effectElements.push(eff);
                break;
            case 3:
                eff = new PointEffect(effects[i],element,dynamicProperties);
                this.effectElements.push(eff);
                break;
            case 4:
            case 7:
                eff = new CheckboxEffect(effects[i],element,dynamicProperties);
                this.effectElements.push(eff);
                break;
            case 10:
                eff = new LayerIndexEffect(effects[i],element,dynamicProperties);
                this.effectElements.push(eff);
                break;
            case 11:
                eff = new MaskIndexEffect(effects[i],element,dynamicProperties);
                this.effectElements.push(eff);
                break;
            case 5:
                eff = new EffectsManager(effects[i],element,dynamicProperties);
                this.effectElements.push(eff);
                break;
            case 6:
                eff = new NoValueEffect(effects[i],element,dynamicProperties);
                this.effectElements.push(eff);
                break;
        }
    }
};
    var bodymovinjs = {};

    function setLocationHref (href) {
        locationHref = href;
    }
    function play(animation){
        animationManager.play(animation);
    }

    function pause(animation) {
        animationManager.pause(animation);
    }

    function togglePause(animation) {
        animationManager.togglePause(animation);
    }

    function setSpeed(value, animation) {
        animationManager.setSpeed(value, animation);
    }

    function setDirection(value, animation) {
        animationManager.setDirection(value, animation);
    }

    function stop(animation) {
        animationManager.stop(animation);
    }

    function moveFrame(value) {
        animationManager.moveFrame(value);
    }

    function searchAnimations() {
        if (standalone === true) {
            animationManager.searchAnimations(animationData, standalone, renderer);
        } else {
            animationManager.searchAnimations();
        }
    }

    function registerAnimation(elem) {
        return animationManager.registerAnimation(elem);
    }

    function resize() {
        animationManager.resize();
    }

    function start() {
        animationManager.start();
    }

    function goToAndStop(val, isFrame, animation) {
        animationManager.goToAndStop(val, isFrame, animation);
    }

    function setSubframeRendering(flag) {
        subframeEnabled = flag;
    }

    function loadAnimation(params) {
        if (standalone === true) {
            params.animationData = JSON.parse(animationData);
        }
        return animationManager.loadAnimation(params);
    }

    function destroy(animation) {
        return animationManager.destroy(animation);
    }

    function setQuality(value) {
        if (typeof value === 'string') {
            switch (value) {
                case 'high':
                    defaultCurveSegments = 200;
                    break;
                case 'medium':
                    defaultCurveSegments = 50;
                    break;
                case 'low':
                    defaultCurveSegments = 10;
                    break;
            }
        } else if (!isNaN(value) && value > 1) {
            defaultCurveSegments = value;
        }
        if (defaultCurveSegments >= 50) {
            roundValues(false);
        } else {
            roundValues(true);
        }
    }

    function inBrowser() {
        return typeof navigator !== 'undefined';
    }

    function installPlugin(type, plugin) {
        if (type === 'expressions') {
            expressionsPlugin = plugin;
        }
    }

    function getFactory(name) {
        switch (name) {
            case "propertyFactory":
                return PropertyFactory;
            case "shapePropertyFactory":
                return ShapePropertyFactory;
            case "matrix":
                return Matrix;
        }
    }
    bodymovinjs.play = play;
    bodymovinjs.pause = pause;
    bodymovinjs.setLocationHref = setLocationHref;
    bodymovinjs.togglePause = togglePause;
    bodymovinjs.setSpeed = setSpeed;
    bodymovinjs.setDirection = setDirection;
    bodymovinjs.stop = stop;
    bodymovinjs.moveFrame = moveFrame;
    bodymovinjs.searchAnimations = searchAnimations;
    bodymovinjs.registerAnimation = registerAnimation;
    bodymovinjs.loadAnimation = loadAnimation;
    bodymovinjs.setSubframeRendering = setSubframeRendering;
    bodymovinjs.resize = resize;
    bodymovinjs.start = start;
    bodymovinjs.goToAndStop = goToAndStop;
    bodymovinjs.destroy = destroy;
    bodymovinjs.setQuality = setQuality;
    bodymovinjs.inBrowser = inBrowser;
    bodymovinjs.installPlugin = installPlugin;
    bodymovinjs.__getFactory = getFactory;
    bodymovinjs.version = '4.11.1';

    function checkReady() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);
            searchAnimations();
        }
    }

    function getQueryVariable(variable) {
        var vars = queryString.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (decodeURIComponent(pair[0]) == variable) {
                return decodeURIComponent(pair[1]);
            }
        }
    }
    var standalone = '__[STANDALONE]__';
    var animationData = '__[ANIMATIONDATA]__';
    var renderer = '';
    if (standalone) {
        var scripts = document.getElementsByTagName('script');
        var index = scripts.length - 1;
        var myScript = scripts[index] || {
            src: ''
        };
        var queryString = myScript.src.replace(/^[^\?]+\??/, '');
        renderer = getQueryVariable('renderer');
    }
    var readyStateCheckInterval = setInterval(checkReady, 100);
    return bodymovinjs;
}));
/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=window.getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e||-1!==['HTML','BODY','#document'].indexOf(e.nodeName))return window.document.body;var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll)/.test(r+s+p)?e:n(o(e))}function r(e){var o=e&&e.offsetParent,i=o&&o.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(o.nodeName)&&'static'===t(o,'position')?r(o):o:window.document.documentElement}function p(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||r(e.firstElementChild)===e)}function s(e){return null===e.parentNode?e:s(e.parentNode)}function d(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return window.document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=o?e:t,n=o?t:e,a=document.createRange();a.setStart(i,0),a.setEnd(n,0);var l=a.commonAncestorContainer;if(e!==l&&t!==l||i.contains(n))return p(l)?l:r(l);var f=s(e);return f.host?d(f.host,t):d(e,s(t).host)}function a(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',i=e.nodeName;if('BODY'===i||'HTML'===i){var n=window.document.documentElement,r=window.document.scrollingElement||n;return r[o]}return e[o]}function l(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=a(t,'top'),n=a(t,'left'),r=o?-1:1;return e.top+=i*r,e.bottom+=i*r,e.left+=n*r,e.right+=n*r,e}function f(e,t){var o='x'===t?'Left':'Top',i='Left'==o?'Right':'Bottom';return+e['border'+o+'Width'].split('px')[0]+ +e['border'+i+'Width'].split('px')[0]}function m(e,t,o,i){return X(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],ne()?o['offset'+e]+i['margin'+('Height'===e?'Top':'Left')]+i['margin'+('Height'===e?'Bottom':'Right')]:0)}function c(){var e=window.document.body,t=window.document.documentElement,o=ne()&&window.getComputedStyle(t);return{height:m('Height',e,t,o),width:m('Width',e,t,o)}}function h(e){return de({},e,{right:e.left+e.width,bottom:e.top+e.height})}function g(e){var o={};if(ne())try{o=e.getBoundingClientRect();var i=a(e,'top'),n=a(e,'left');o.top+=i,o.left+=n,o.bottom+=i,o.right+=n}catch(e){}else o=e.getBoundingClientRect();var r={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},p='HTML'===e.nodeName?c():{},s=p.width||e.clientWidth||r.right-r.left,d=p.height||e.clientHeight||r.bottom-r.top,l=e.offsetWidth-s,m=e.offsetHeight-d;if(l||m){var g=t(e);l-=f(g,'x'),m-=f(g,'y'),r.width-=l,r.height-=m}return h(r)}function u(e,o){var i=ne(),r='HTML'===o.nodeName,p=g(e),s=g(o),d=n(e),a=t(o),f=+a.borderTopWidth.split('px')[0],m=+a.borderLeftWidth.split('px')[0],c=h({top:p.top-s.top-f,left:p.left-s.left-m,width:p.width,height:p.height});if(c.marginTop=0,c.marginLeft=0,!i&&r){var u=+a.marginTop.split('px')[0],b=+a.marginLeft.split('px')[0];c.top-=f-u,c.bottom-=f-u,c.left-=m-b,c.right-=m-b,c.marginTop=u,c.marginLeft=b}return(i?o.contains(d):o===d&&'BODY'!==d.nodeName)&&(c=l(c,o)),c}function b(e){var t=window.document.documentElement,o=u(e,t),i=X(t.clientWidth,window.innerWidth||0),n=X(t.clientHeight,window.innerHeight||0),r=a(t),p=a(t,'left'),s={top:r-o.top+o.marginTop,left:p-o.left+o.marginLeft,width:i,height:n};return h(s)}function y(e){var i=e.nodeName;return'BODY'===i||'HTML'===i?!1:'fixed'===t(e,'position')||y(o(e))}function w(e,t,i,r){var p={top:0,left:0},s=d(e,t);if('viewport'===r)p=b(s);else{var a;'scrollParent'===r?(a=n(o(e)),'BODY'===a.nodeName&&(a=window.document.documentElement)):'window'===r?a=window.document.documentElement:a=r;var l=u(a,s);if('HTML'===a.nodeName&&!y(s)){var f=c(),m=f.height,h=f.width;p.top+=l.top-l.marginTop,p.bottom=m+l.top,p.left+=l.left-l.marginLeft,p.right=h+l.left}else p=l}return p.left+=i,p.top+=i,p.right-=i,p.bottom-=i,p}function E(e){var t=e.width,o=e.height;return t*o}function v(e,t,o,i,n){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=w(o,i,r,n),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return de({key:e},s[e],{area:E(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,i=e.height;return t>=o.clientWidth&&i>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function x(e,t,o){var i=d(t,o);return u(o,i)}function O(e){var t=window.getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight),n={width:e.offsetWidth+i,height:e.offsetHeight+o};return n}function L(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function S(e,t,o){o=o.split('-')[0];var i=O(e),n={width:i.width,height:i.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return n[p]=t[p]+t[d]/2-i[d]/2,n[s]=o===s?t[s]-i[a]:t[L(s)],n}function T(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function C(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var i=T(e,function(e){return e[t]===o});return e.indexOf(i)}function N(t,o,i){var n=void 0===i?t:t.slice(0,C(t,'name',i));return n.forEach(function(t){t.function&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var i=t.function||t.fn;t.enabled&&e(i)&&(o.offsets.popper=h(o.offsets.popper),o.offsets.reference=h(o.offsets.reference),o=i(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=x(this.state,this.popper,this.reference),e.placement=v(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=S(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position='absolute',e=N(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,i=e.enabled;return i&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length-1;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof window.document.body.style[r])return r}return null}function P(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.left='',this.popper.style.position='',this.popper.style.top='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function D(e,t,o,i){var r='BODY'===e.nodeName,p=r?window:e;p.addEventListener(t,o,{passive:!0}),r||D(n(p.parentNode),t,o,i),i.push(p)}function H(e,t,o,i){o.updateBound=i,window.addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return D(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function A(){this.state.eventsEnabled||(this.state=H(this.reference,this.options,this.state,this.scheduleUpdate))}function M(e,t){return window.removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function I(){this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=M(this.reference,this.state))}function R(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function U(e,t){Object.keys(t).forEach(function(o){var i='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&R(t[o])&&(i='px'),e.style[o]=t[o]+i})}function Y(e,t){Object.keys(t).forEach(function(o){var i=t[o];!1===i?e.removeAttribute(o):e.setAttribute(o,t[o])})}function F(e,t,o){var i=T(e,function(e){var o=e.name;return o===t}),n=!!i&&e.some(function(e){return e.name===o&&e.enabled&&e.order<i.order});if(!n){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return n}function j(e){return'end'===e?'start':'start'===e?'end':e}function K(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=le.indexOf(e),i=le.slice(o+1).concat(le.slice(0,o));return t?i.reverse():i}function q(e,t,o,i){var n=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+n[1],p=n[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=i;}var d=h(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?X(document.documentElement.clientHeight,window.innerHeight||0):X(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function G(e,t,o,i){var n=[0,0],r=-1!==['right','left'].indexOf(i),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(T(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,i){var n=(1===i?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return q(e,n,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,i){R(o)&&(n[t]+=o*('-'===e[i-1]?-1:1))})}),n}function z(e,t){var o,i=t.offset,n=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=n.split('-')[0];return o=R(+i)?[+i,0]:G(i,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var V=Math.min,_=Math.floor,X=Math.max,Q=['native code','[object MutationObserverConstructor]'],J=function(e){return Q.some(function(t){return-1<(e||'').toString().indexOf(t)})},Z='undefined'!=typeof window,$=['Edge','Trident','Firefox'],ee=0,te=0;te<$.length;te+=1)if(Z&&0<=navigator.userAgent.indexOf($[te])){ee=1;break}var i,oe=Z&&J(window.MutationObserver),ie=oe?function(e){var t=!1,o=0,i=document.createElement('span'),n=new MutationObserver(function(){e(),t=!1});return n.observe(i,{attributes:!0}),function(){t||(t=!0,i.setAttribute('x-index',o),++o)}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},ee))}},ne=function(){return void 0==i&&(i=-1!==navigator.appVersion.indexOf('MSIE 10')),i},re=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},pe=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),se=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},de=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},ae=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],le=ae.slice(3),fe={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},me=function(){function t(o,i){var n=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};re(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=ie(this.update.bind(this)),this.options=de({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o.jquery?o[0]:o,this.popper=i.jquery?i[0]:i,this.options.modifiers={},Object.keys(de({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){n.options.modifiers[e]=de({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return de({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return pe(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return P.call(this)}},{key:'enableEventListeners',value:function(){return A.call(this)}},{key:'disableEventListeners',value:function(){return I.call(this)}}]),t}();return me.Utils=('undefined'==typeof window?global:window).PopperUtils,me.placements=ae,me.Defaults={placement:'bottom',eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],i=t.split('-')[1];if(i){var n=e.offsets,r=n.reference,p=n.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:se({},d,r[d]),end:se({},d,r[d]+r[a]-p[a])};e.offsets.popper=de({},p,l[i])}return e}},offset:{order:200,enabled:!0,fn:z,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||r(e.instance.popper);e.instance.reference===o&&(o=r(o));var i=w(e.instance.popper,e.instance.reference,t.padding,o);t.boundaries=i;var n=t.priority,p=e.offsets.popper,s={primary:function(e){var o=p[e];return p[e]<i[e]&&!t.escapeWithReference&&(o=X(p[e],i[e])),se({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=p[o];return p[e]>i[e]&&!t.escapeWithReference&&(n=V(p[o],i[e]-('right'===e?p.width:p.height))),se({},o,n)}};return n.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';p=de({},p,s[t](e))}),e.offsets.popper=p,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,i=t.reference,n=e.placement.split('-')[0],r=_,p=-1!==['top','bottom'].indexOf(n),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(i[d])&&(e.offsets.popper[d]=r(i[d])-o[a]),o[d]>r(i[s])&&(e.offsets.popper[d]=r(i[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){if(!F(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var n=e.placement.split('-')[0],r=e.offsets,p=r.popper,s=r.reference,d=-1!==['left','right'].indexOf(n),a=d?'height':'width',l=d?'Top':'Left',f=l.toLowerCase(),m=d?'left':'top',c=d?'bottom':'right',g=O(i)[a];s[c]-g<p[f]&&(e.offsets.popper[f]-=p[f]-(s[c]-g)),s[f]+g>p[c]&&(e.offsets.popper[f]+=s[f]+g-p[c]);var u=s[f]+s[a]/2-g/2,b=t(e.instance.popper,'margin'+l).replace('px',''),y=u-h(e.offsets.popper)[f]-b;return y=X(V(p[a]-g,y),0),e.arrowElement=i,e.offsets.arrow={},e.offsets.arrow[f]=Math.round(y),e.offsets.arrow[m]='',e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=w(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),i=e.placement.split('-')[0],n=L(i),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case fe.FLIP:p=[i,n];break;case fe.CLOCKWISE:p=K(i);break;case fe.COUNTERCLOCKWISE:p=K(i,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(i!==s||p.length===d+1)return e;i=e.placement.split('-')[0],n=L(i);var a=e.offsets.popper,l=e.offsets.reference,f=_,m='left'===i&&f(a.right)>f(l.left)||'right'===i&&f(a.left)<f(l.right)||'top'===i&&f(a.bottom)>f(l.top)||'bottom'===i&&f(a.top)<f(l.bottom),c=f(a.left)<f(o.left),h=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===i&&c||'right'===i&&h||'top'===i&&g||'bottom'===i&&u,y=-1!==['top','bottom'].indexOf(i),w=!!t.flipVariations&&(y&&'start'===r&&c||y&&'end'===r&&h||!y&&'start'===r&&g||!y&&'end'===r&&u);(m||b||w)&&(e.flipped=!0,(m||b)&&(i=p[d+1]),w&&(r=j(r)),e.placement=i+(r?'-'+r:''),e.offsets.popper=de({},e.offsets.popper,S(e.instance.popper,e.offsets.reference,e.placement)),e=N(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],i=e.offsets,n=i.popper,r=i.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return n[p?'left':'top']=r[o]-(s?n[p?'width':'height']:0),e.placement=L(t),e.offsets.popper=h(n),e}},hide:{order:800,enabled:!0,fn:function(e){if(!F(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=T(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,i=t.y,n=e.offsets.popper,p=T(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==p&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===p?t.gpuAcceleration:p,l=r(e.instance.popper),f=g(l),m={position:n.position},c={left:_(n.left),top:_(n.top),bottom:_(n.bottom),right:_(n.right)},h='bottom'===o?'top':'bottom',u='right'===i?'left':'right',b=B('transform');if(d='bottom'==h?-f.height+c.bottom:c.top,s='right'==u?-f.width+c.right:c.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[h]=0,m[u]=0,m.willChange='transform';else{var y='bottom'==h?-1:1,w='right'==u?-1:1;m[h]=d*y,m[u]=s*w,m.willChange=h+', '+u}var E={"x-placement":e.placement};return e.attributes=de({},E,e.attributes),e.styles=de({},m,e.styles),e.arrowStyles=de({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return U(e.instance.popper,e.styles),Y(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&U(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,i,n){var r=x(n,t,e),p=v(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),U(t,{position:'absolute'}),o},gpuAcceleration:void 0}}},me});
//# sourceMappingURL=popper.min.js.map

/*!
 * Bootstrap v4.0.0-beta (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.')
}

(function ($) {
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] >= 4)) {
    throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0')
  }
})(jQuery);

(function () {
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Util = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var transition = false;

  var MAX_UID = 1000000;

  var TransitionEndEvent = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'oTransitionEnd otransitionend',
    transition: 'transitionend'

    // shoutout AngusCroll (https://goo.gl/pxwQGp)
  };function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }

  function isElement(obj) {
    return (obj[0] || obj).nodeType;
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: transition.end,
      delegateType: transition.end,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }
        return undefined;
      }
    };
  }

  function transitionEndTest() {
    if (window.QUnit) {
      return false;
    }

    var el = document.createElement('bootstrap');

    for (var name in TransitionEndEvent) {
      if (el.style[name] !== undefined) {
        return {
          end: TransitionEndEvent[name]
        };
      }
    }

    return false;
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;

    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });

    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);

    return this;
  }

  function setTransitionEndSupport() {
    transition = transitionEndTest();

    $.fn.emulateTransitionEnd = transitionEndEmulator;

    if (Util.supportsTransitionEnd()) {
      $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */

  var Util = {

    TRANSITION_END: 'bsTransitionEnd',

    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));
      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');
      if (!selector || selector === '#') {
        selector = element.getAttribute('href') || '';
      }

      try {
        var $selector = $(selector);
        return $selector.length > 0 ? selector : null;
      } catch (error) {
        return null;
      }
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(transition.end);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(transition);
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (configTypes.hasOwnProperty(property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ': ' + ('Option "' + property + '" provided type "' + valueType + '" ') + ('but expected type "' + expectedTypes + '".'));
          }
        }
      }
    }
  };

  setTransitionEndSupport();

  return Util;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Alert = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 150;

  var Selector = {
    DISMISS: '[data-dismiss="alert"]'
  };

  var Event = {
    CLOSE: 'close' + EVENT_KEY,
    CLOSED: 'closed' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var Alert = function () {
    function Alert(element) {
      _classCallCheck(this, Alert);

      this._element = element;
    }

    // getters

    // public

    Alert.prototype.close = function close(element) {
      element = element || this._element;

      var rootElement = this._getRootElement(element);
      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    Alert.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    };

    // private

    Alert.prototype._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = $(selector)[0];
      }

      if (!parent) {
        parent = $(element).closest('.' + ClassName.ALERT)[0];
      }

      return parent;
    };

    Alert.prototype._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $.Event(Event.CLOSE);

      $(element).trigger(closeEvent);
      return closeEvent;
    };

    Alert.prototype._removeElement = function _removeElement(element) {
      var _this2 = this;

      $(element).removeClass(ClassName.SHOW);

      if (!Util.supportsTransitionEnd() || !$(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element);
        return;
      }

      $(element).one(Util.TRANSITION_END, function (event) {
        return _this2._destroyElement(element, event);
      }).emulateTransitionEnd(TRANSITION_DURATION);
    };

    Alert.prototype._destroyElement = function _destroyElement(element) {
      $(element).detach().trigger(Event.CLOSED).remove();
    };

    // static

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  return Alert;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Button = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'button';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.button';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var ClassName = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };

  var Selector = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLE: '[data-toggle="buttons"]',
    INPUT: 'input',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };

  var Event = {
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
    FOCUS_BLUR_DATA_API: 'focus' + EVENT_KEY + DATA_API_KEY + ' ' + ('blur' + EVENT_KEY + DATA_API_KEY)

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var Button = function () {
    function Button(element) {
      _classCallCheck(this, Button);

      this._element = element;
    }

    // getters

    // public

    Button.prototype.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $(this._element).closest(Selector.DATA_TOGGLE)[0];

      if (rootElement) {
        var input = $(this._element).find(Selector.INPUT)[0];

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && $(this._element).hasClass(ClassName.ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = $(rootElement).find(Selector.ACTIVE)[0];

              if (activeElement) {
                $(activeElement).removeClass(ClassName.ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
              return;
            }
            input.checked = !$(this._element).hasClass(ClassName.ACTIVE);
            $(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (addAriaPressed) {
        this._element.setAttribute('aria-pressed', !$(this._element).hasClass(ClassName.ACTIVE));
      }

      if (triggerChangeEvent) {
        $(this._element).toggleClass(ClassName.ACTIVE);
      }
    };

    Button.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    };

    // static

    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        if (!data) {
          data = new Button(this);
          $(this).data(DATA_KEY, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }]);

    return Button;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    event.preventDefault();

    var button = event.target;

    if (!$(button).hasClass(ClassName.BUTTON)) {
      button = $(button).closest(Selector.BUTTON);
    }

    Button._jQueryInterface.call($(button), 'toggle');
  }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(Selector.BUTTON)[0];
    $(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Button._jQueryInterface;
  $.fn[NAME].Constructor = Button;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Button._jQueryInterface;
  };

  return Button;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Carousel = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'carousel';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.carousel';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 600;
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key
  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key
  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true
  };

  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean'
  };

  var Direction = {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
  };

  var Event = {
    SLIDE: 'slide' + EVENT_KEY,
    SLID: 'slid' + EVENT_KEY,
    KEYDOWN: 'keydown' + EVENT_KEY,
    MOUSEENTER: 'mouseenter' + EVENT_KEY,
    MOUSELEAVE: 'mouseleave' + EVENT_KEY,
    TOUCHEND: 'touchend' + EVENT_KEY,
    LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'carousel-item-right',
    LEFT: 'carousel-item-left',
    NEXT: 'carousel-item-next',
    PREV: 'carousel-item-prev',
    ITEM: 'carousel-item'
  };

  var Selector = {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel"]'

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var Carousel = function () {
    function Carousel(element, config) {
      _classCallCheck(this, Carousel);

      this._items = null;
      this._interval = null;
      this._activeElement = null;

      this._isPaused = false;
      this._isSliding = false;

      this.touchTimeout = null;

      this._config = this._getConfig(config);
      this._element = $(element)[0];
      this._indicatorsElement = $(this._element).find(Selector.INDICATORS)[0];

      this._addEventListeners();
    }

    // getters

    // public

    Carousel.prototype.next = function next() {
      if (!this._isSliding) {
        this._slide(Direction.NEXT);
      }
    };

    Carousel.prototype.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      if (!document.hidden) {
        this.next();
      }
    };

    Carousel.prototype.prev = function prev() {
      if (!this._isSliding) {
        this._slide(Direction.PREV);
      }
    };

    Carousel.prototype.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if ($(this._element).find(Selector.NEXT_PREV)[0] && Util.supportsTransitionEnd()) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    Carousel.prototype.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    Carousel.prototype.to = function to(index) {
      var _this3 = this;

      this._activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $(this._element).one(Event.SLID, function () {
          return _this3.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

      this._slide(direction, this._items[index]);
    };

    Carousel.prototype.dispose = function dispose() {
      $(this._element).off(EVENT_KEY);
      $.removeData(this._element, DATA_KEY);

      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    };

    // private

    Carousel.prototype._getConfig = function _getConfig(config) {
      config = $.extend({}, Default, config);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    Carousel.prototype._addEventListeners = function _addEventListeners() {
      var _this4 = this;

      if (this._config.keyboard) {
        $(this._element).on(Event.KEYDOWN, function (event) {
          return _this4._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $(this._element).on(Event.MOUSEENTER, function (event) {
          return _this4.pause(event);
        }).on(Event.MOUSELEAVE, function (event) {
          return _this4.cycle(event);
        });
        if ('ontouchstart' in document.documentElement) {
          // if it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          $(this._element).on(Event.TOUCHEND, function () {
            _this4.pause();
            if (_this4.touchTimeout) {
              clearTimeout(_this4.touchTimeout);
            }
            _this4.touchTimeout = setTimeout(function (event) {
              return _this4.cycle(event);
            }, TOUCHEVENT_COMPAT_WAIT + _this4._config.interval);
          });
        }
      }
    };

    Carousel.prototype._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;
        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
        default:
          return;
      }
    };

    Carousel.prototype._getItemIndex = function _getItemIndex(element) {
      this._items = $.makeArray($(element).parent().find(Selector.ITEM));
      return this._items.indexOf(element);
    };

    Carousel.prototype._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === Direction.NEXT;
      var isPrevDirection = direction === Direction.PREV;
      var activeIndex = this._getItemIndex(activeElement);
      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === Direction.PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;

      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    Carousel.prototype._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);
      var fromIndex = this._getItemIndex($(this._element).find(Selector.ACTIVE_ITEM)[0]);
      var slideEvent = $.Event(Event.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });

      $(this._element).trigger(slideEvent);

      return slideEvent;
    };

    Carousel.prototype._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        $(this._indicatorsElement).find(Selector.ACTIVE).removeClass(ClassName.ACTIVE);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $(nextIndicator).addClass(ClassName.ACTIVE);
        }
      }
    };

    Carousel.prototype._slide = function _slide(direction, element) {
      var _this5 = this;

      var activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];
      var activeElementIndex = this._getItemIndex(activeElement);
      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);
      var nextElementIndex = this._getItemIndex(nextElement);
      var isCycling = Boolean(this._interval);

      var directionalClassName = void 0;
      var orderClassName = void 0;
      var eventDirectionName = void 0;

      if (direction === Direction.NEXT) {
        directionalClassName = ClassName.LEFT;
        orderClassName = ClassName.NEXT;
        eventDirectionName = Direction.LEFT;
      } else {
        directionalClassName = ClassName.RIGHT;
        orderClassName = ClassName.PREV;
        eventDirectionName = Direction.RIGHT;
      }

      if (nextElement && $(nextElement).hasClass(ClassName.ACTIVE)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);
      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $.Event(Event.SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.SLIDE)) {

        $(nextElement).addClass(orderClassName);

        Util.reflow(nextElement);

        $(activeElement).addClass(directionalClassName);
        $(nextElement).addClass(directionalClassName);

        $(activeElement).one(Util.TRANSITION_END, function () {
          $(nextElement).removeClass(directionalClassName + ' ' + orderClassName).addClass(ClassName.ACTIVE);

          $(activeElement).removeClass(ClassName.ACTIVE + ' ' + orderClassName + ' ' + directionalClassName);

          _this5._isSliding = false;

          setTimeout(function () {
            return $(_this5._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        $(activeElement).removeClass(ClassName.ACTIVE);
        $(nextElement).addClass(ClassName.ACTIVE);

        this._isSliding = false;
        $(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    };

    // static

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = $.extend({}, Default, $(this).data());

        if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') {
          $.extend(_config, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (data[action] === undefined) {
            throw new Error('No method named "' + action + '"');
          }
          data[action]();
        } else if (_config.interval) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $(selector)[0];

      if (!target || !$(target).hasClass(ClassName.CAROUSEL)) {
        return;
      }

      var config = $.extend({}, $(target).data(), $(this).data());
      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($(target), config);

      if (slideIndex) {
        $(target).data(DATA_KEY).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);

  $(window).on(Event.LOAD_DATA_API, function () {
    $(Selector.DATA_RIDE).each(function () {
      var $carousel = $(this);
      Carousel._jQueryInterface.call($carousel, $carousel.data());
    });
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Carousel._jQueryInterface;
  $.fn[NAME].Constructor = Carousel;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Carousel._jQueryInterface;
  };

  return Carousel;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Collapse = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'collapse';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.collapse';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 600;

  var Default = {
    toggle: true,
    parent: ''
  };

  var DefaultType = {
    toggle: 'boolean',
    parent: 'string'
  };

  var Event = {
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };

  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };

  var Selector = {
    ACTIVES: '.show, .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var Collapse = function () {
    function Collapse(element, config) {
      _classCallCheck(this, Collapse);

      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = $.makeArray($('[data-toggle="collapse"][href="#' + element.id + '"],' + ('[data-toggle="collapse"][data-target="#' + element.id + '"]')));
      var tabToggles = $(Selector.DATA_TOGGLE);
      for (var i = 0; i < tabToggles.length; i++) {
        var elem = tabToggles[i];
        var selector = Util.getSelectorFromElement(elem);
        if (selector !== null && $(selector).filter(element).length > 0) {
          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    }

    // getters

    // public

    Collapse.prototype.toggle = function toggle() {
      if ($(this._element).hasClass(ClassName.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    Collapse.prototype.show = function show() {
      var _this6 = this;

      if (this._isTransitioning || $(this._element).hasClass(ClassName.SHOW)) {
        return;
      }

      var actives = void 0;
      var activesData = void 0;

      if (this._parent) {
        actives = $.makeArray($(this._parent).children().children(Selector.ACTIVES));
        if (!actives.length) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).data(DATA_KEY);
        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $.Event(Event.SHOW);
      $(this._element).trigger(startEvent);
      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives), 'hide');
        if (!activesData) {
          $(actives).data(DATA_KEY, null);
        }
      }

      var dimension = this._getDimension();

      $(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);

      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $(_this6._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);

        _this6._element.style[dimension] = '';

        _this6.setTransitioning(false);

        $(_this6._element).trigger(Event.SHOWN);
      };

      if (!Util.supportsTransitionEnd()) {
        complete();
        return;
      }

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = 'scroll' + capitalizedDimension;

      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);

      this._element.style[dimension] = this._element[scrollSize] + 'px';
    };

    Collapse.prototype.hide = function hide() {
      var _this7 = this;

      if (this._isTransitioning || !$(this._element).hasClass(ClassName.SHOW)) {
        return;
      }

      var startEvent = $.Event(Event.HIDE);
      $(this._element).trigger(startEvent);
      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + 'px';

      Util.reflow(this._element);

      $(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);

      if (this._triggerArray.length) {
        for (var i = 0; i < this._triggerArray.length; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);
          if (selector !== null) {
            var $elem = $(selector);
            if (!$elem.hasClass(ClassName.SHOW)) {
              $(trigger).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this7.setTransitioning(false);
        $(_this7._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
      };

      this._element.style[dimension] = '';

      if (!Util.supportsTransitionEnd()) {
        complete();
        return;
      }

      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
    };

    Collapse.prototype.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    Collapse.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);

      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    };

    // private

    Collapse.prototype._getConfig = function _getConfig(config) {
      config = $.extend({}, Default, config);
      config.toggle = Boolean(config.toggle); // coerce string values
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    Collapse.prototype._getDimension = function _getDimension() {
      var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    };

    Collapse.prototype._getParent = function _getParent() {
      var _this8 = this;

      var parent = $(this._config.parent)[0];
      var selector = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';

      $(parent).find(selector).each(function (i, element) {
        _this8._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });

      return parent;
    };

    Collapse.prototype._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      if (element) {
        var isOpen = $(element).hasClass(ClassName.SHOW);

        if (triggerArray.length) {
          $(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
        }
      }
    };

    // static

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? $(selector)[0] : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY);
        var _config = $.extend({}, Default, $this.data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return Collapse;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    if (!/input|textarea/i.test(event.target.tagName)) {
      event.preventDefault();
    }

    var $trigger = $(this);
    var selector = Util.getSelectorFromElement(this);
    $(selector).each(function () {
      var $target = $(this);
      var data = $target.data(DATA_KEY);
      var config = data ? 'toggle' : $trigger.data();
      Collapse._jQueryInterface.call($target, config);
    });
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Collapse._jQueryInterface;
  $.fn[NAME].Constructor = Collapse;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Collapse._jQueryInterface;
  };

  return Collapse;
}(jQuery);

/* global Popper */

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Dropdown = function ($) {

  /**
   * Check for Popper dependency
   * Popper - https://popper.js.org
   */
  if (typeof Popper === 'undefined') {
    throw new Error('Bootstrap dropdown require Popper.js (https://popper.js.org)');
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'dropdown';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.dropdown';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key
  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key
  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key
  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key
  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key
  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)
  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + '|' + ARROW_DOWN_KEYCODE + '|' + ESCAPE_KEYCODE);

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    CLICK: 'click' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
    KEYDOWN_DATA_API: 'keydown' + EVENT_KEY + DATA_API_KEY,
    KEYUP_DATA_API: 'keyup' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    DISABLED: 'disabled',
    SHOW: 'show',
    DROPUP: 'dropup',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left'
  };

  var Selector = {
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled)'
  };

  var AttachmentMap = {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end'
  };

  var Default = {
    placement: AttachmentMap.BOTTOM,
    offset: 0,
    flip: true
  };

  var DefaultType = {
    placement: 'string',
    offset: '(number|string)',
    flip: 'boolean'

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var Dropdown = function () {
    function Dropdown(element, config) {
      _classCallCheck(this, Dropdown);

      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    }

    // getters

    // public

    Dropdown.prototype.toggle = function toggle() {
      if (this._element.disabled || $(this._element).hasClass(ClassName.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this._element);
      var isActive = $(this._menu).hasClass(ClassName.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(Event.SHOW, relatedTarget);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      var element = this._element;
      // for dropup with alignment we use the parent as popper container
      if ($(parent).hasClass(ClassName.DROPUP)) {
        if ($(this._menu).hasClass(ClassName.MENULEFT) || $(this._menu).hasClass(ClassName.MENURIGHT)) {
          element = parent;
        }
      }
      this._popper = new Popper(element, this._menu, this._getPopperConfig());

      // if this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
      if ('ontouchstart' in document.documentElement && !$(parent).closest(Selector.NAVBAR_NAV).length) {
        $('body').children().on('mouseover', null, $.noop);
      }

      this._element.focus();
      this._element.setAttribute('aria-expanded', true);

      $(this._menu).toggleClass(ClassName.SHOW);
      $(parent).toggleClass(ClassName.SHOW).trigger($.Event(Event.SHOWN, relatedTarget));
    };

    Dropdown.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      $(this._element).off(EVENT_KEY);
      this._element = null;
      this._menu = null;
      if (this._popper !== null) {
        this._popper.destroy();
      }
      this._popper = null;
    };

    Dropdown.prototype.update = function update() {
      this._inNavbar = this._detectNavbar();
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    };

    // private

    Dropdown.prototype._addEventListeners = function _addEventListeners() {
      var _this9 = this;

      $(this._element).on(Event.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();
        _this9.toggle();
      });
    };

    Dropdown.prototype._getConfig = function _getConfig(config) {
      var elementData = $(this._element).data();
      if (elementData.placement !== undefined) {
        elementData.placement = AttachmentMap[elementData.placement.toUpperCase()];
      }

      config = $.extend({}, this.constructor.Default, $(this._element).data(), config);

      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);

      return config;
    };

    Dropdown.prototype._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);
        this._menu = $(parent).find(Selector.MENU)[0];
      }
      return this._menu;
    };

    Dropdown.prototype._getPlacement = function _getPlacement() {
      var $parentDropdown = $(this._element).parent();
      var placement = this._config.placement;

      // Handle dropup
      if ($parentDropdown.hasClass(ClassName.DROPUP) || this._config.placement === AttachmentMap.TOP) {
        placement = AttachmentMap.TOP;
        if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
          placement = AttachmentMap.TOPEND;
        }
      } else if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
        placement = AttachmentMap.BOTTOMEND;
      }
      return placement;
    };

    Dropdown.prototype._detectNavbar = function _detectNavbar() {
      return $(this._element).closest('.navbar').length > 0;
    };

    Dropdown.prototype._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: {
            offset: this._config.offset
          },
          flip: {
            enabled: this._config.flip
          }
        }

        // Disable Popper.js for Dropdown in Navbar
      };if (this._inNavbar) {
        popperConfig.modifiers.applyStyle = {
          enabled: !this._inNavbar
        };
      }
      return popperConfig;
    };

    // static

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = $.makeArray($(Selector.DATA_TOGGLE));
      for (var i = 0; i < toggles.length; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);
        var context = $(toggles[i]).data(DATA_KEY);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;
        if (!$(parent).hasClass(ClassName.SHOW)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $.Event(Event.HIDE, relatedTarget);
        $(parent).trigger(hideEvent);
        if (hideEvent.isDefaultPrevented()) {
          continue;
        }

        // if this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support
        if ('ontouchstart' in document.documentElement) {
          $('body').children().off('mouseover', null, $.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        $(dropdownMenu).removeClass(ClassName.SHOW);
        $(parent).removeClass(ClassName.SHOW).trigger($.Event(Event.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent = void 0;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = $(selector)[0];
      }

      return parent || element.parentNode;
    };

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      if (!REGEXP_KEYDOWN.test(event.which) || /button/i.test(event.target.tagName) && event.which === SPACE_KEYCODE || /input|textarea/i.test(event.target.tagName)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);
      var isActive = $(parent).hasClass(ClassName.SHOW);

      if (!isActive && (event.which !== ESCAPE_KEYCODE || event.which !== SPACE_KEYCODE) || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {

        if (event.which === ESCAPE_KEYCODE) {
          var toggle = $(parent).find(Selector.DATA_TOGGLE)[0];
          $(toggle).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items = $(parent).find(Selector.VISIBLE_ITEMS).get();

      if (!items.length) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }, {
      key: 'DefaultType',
      get: function get() {
        return DefaultType;
      }
    }]);

    return Dropdown;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + ' ' + Event.KEYUP_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();
    event.stopPropagation();
    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
    e.stopPropagation();
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Dropdown._jQueryInterface;
  $.fn[NAME].Constructor = Dropdown;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Dropdown._jQueryInterface;
  };

  return Dropdown;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Modal = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'modal';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.modal';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 300;
  var BACKDROP_TRANSITION_DURATION = 150;
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };

  var DefaultType = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    FOCUSIN: 'focusin' + EVENT_KEY,
    RESIZE: 'resize' + EVENT_KEY,
    CLICK_DISMISS: 'click.dismiss' + EVENT_KEY,
    KEYDOWN_DISMISS: 'keydown.dismiss' + EVENT_KEY,
    MOUSEUP_DISMISS: 'mouseup.dismiss' + EVENT_KEY,
    MOUSEDOWN_DISMISS: 'mousedown.dismiss' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show'
  };

  var Selector = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    NAVBAR_TOGGLER: '.navbar-toggler'

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var Modal = function () {
    function Modal(element, config) {
      _classCallCheck(this, Modal);

      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = $(element).find(Selector.DIALOG)[0];
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._originalBodyPadding = 0;
      this._scrollbarWidth = 0;
    }

    // getters

    // public

    Modal.prototype.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    Modal.prototype.show = function show(relatedTarget) {
      var _this10 = this;

      if (this._isTransitioning) {
        return;
      }

      if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
        this._isTransitioning = true;
      }

      var showEvent = $.Event(Event.SHOW, {
        relatedTarget: relatedTarget
      });

      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();
      this._setScrollbar();

      $(document.body).addClass(ClassName.OPEN);

      this._setEscapeEvent();
      this._setResizeEvent();

      $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
        return _this10.hide(event);
      });

      $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
        $(_this10._element).one(Event.MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this10._element)) {
            _this10._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this10._showElement(relatedTarget);
      });
    };

    Modal.prototype.hide = function hide(event) {
      var _this11 = this;

      if (event) {
        event.preventDefault();
      }

      if (this._isTransitioning || !this._isShown) {
        return;
      }

      var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);

      if (transition) {
        this._isTransitioning = true;
      }

      var hideEvent = $.Event(Event.HIDE);

      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;

      this._setEscapeEvent();
      this._setResizeEvent();

      $(document).off(Event.FOCUSIN);

      $(this._element).removeClass(ClassName.SHOW);

      $(this._element).off(Event.CLICK_DISMISS);
      $(this._dialog).off(Event.MOUSEDOWN_DISMISS);

      if (transition) {

        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this11._hideModal(event);
        }).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        this._hideModal();
      }
    };

    Modal.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);

      $(window, document, this._element, this._backdrop).off(EVENT_KEY);

      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._scrollbarWidth = null;
    };

    Modal.prototype.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    };

    // private

    Modal.prototype._getConfig = function _getConfig(config) {
      config = $.extend({}, Default, config);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    Modal.prototype._showElement = function _showElement(relatedTarget) {
      var _this12 = this;

      var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // don't move modals dom position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';
      this._element.removeAttribute('aria-hidden');
      this._element.scrollTop = 0;

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(ClassName.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(Event.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this12._config.focus) {
          _this12._element.focus();
        }
        _this12._isTransitioning = false;
        $(_this12._element).trigger(shownEvent);
      };

      if (transition) {
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        transitionComplete();
      }
    };

    Modal.prototype._enforceFocus = function _enforceFocus() {
      var _this13 = this;

      $(document).off(Event.FOCUSIN) // guard against infinite focus loop
      .on(Event.FOCUSIN, function (event) {
        if (document !== event.target && _this13._element !== event.target && !$(_this13._element).has(event.target).length) {
          _this13._element.focus();
        }
      });
    };

    Modal.prototype._setEscapeEvent = function _setEscapeEvent() {
      var _this14 = this;

      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE) {
            event.preventDefault();
            _this14.hide();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(Event.KEYDOWN_DISMISS);
      }
    };

    Modal.prototype._setResizeEvent = function _setResizeEvent() {
      var _this15 = this;

      if (this._isShown) {
        $(window).on(Event.RESIZE, function (event) {
          return _this15.handleUpdate(event);
        });
      } else {
        $(window).off(Event.RESIZE);
      }
    };

    Modal.prototype._hideModal = function _hideModal() {
      var _this16 = this;

      this._element.style.display = 'none';
      this._element.setAttribute('aria-hidden', true);
      this._isTransitioning = false;
      this._showBackdrop(function () {
        $(document.body).removeClass(ClassName.OPEN);
        _this16._resetAdjustments();
        _this16._resetScrollbar();
        $(_this16._element).trigger(Event.HIDDEN);
      });
    };

    Modal.prototype._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    Modal.prototype._showBackdrop = function _showBackdrop(callback) {
      var _this17 = this;

      var animate = $(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

      if (this._isShown && this._config.backdrop) {
        var doAnimate = Util.supportsTransitionEnd() && animate;

        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName.BACKDROP;

        if (animate) {
          $(this._backdrop).addClass(animate);
        }

        $(this._backdrop).appendTo(document.body);

        $(this._element).on(Event.CLICK_DISMISS, function (event) {
          if (_this17._ignoreBackdropClick) {
            _this17._ignoreBackdropClick = false;
            return;
          }
          if (event.target !== event.currentTarget) {
            return;
          }
          if (_this17._config.backdrop === 'static') {
            _this17._element.focus();
          } else {
            _this17.hide();
          }
        });

        if (doAnimate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(ClassName.SHOW);

        if (!callback) {
          return;
        }

        if (!doAnimate) {
          callback();
          return;
        }

        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName.SHOW);

        var callbackRemove = function callbackRemove() {
          _this17._removeBackdrop();
          if (callback) {
            callback();
          }
        };

        if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    };

    // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------

    Modal.prototype._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + 'px';
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + 'px';
      }
    };

    Modal.prototype._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    Modal.prototype._checkScrollbar = function _checkScrollbar() {
      this._isBodyOverflowing = document.body.clientWidth < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    Modal.prototype._setScrollbar = function _setScrollbar() {
      var _this18 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set

        // Adjust fixed content padding
        $(Selector.FIXED_CONTENT).each(function (index, element) {
          var actualPadding = $(element)[0].style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this18._scrollbarWidth + 'px');
        });

        // Adjust navbar-toggler margin
        $(Selector.NAVBAR_TOGGLER).each(function (index, element) {
          var actualMargin = $(element)[0].style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) + _this18._scrollbarWidth + 'px');
        });

        // Adjust body padding
        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $('body').css('padding-right');
        $('body').data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + 'px');
      }
    };

    Modal.prototype._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      $(Selector.FIXED_CONTENT).each(function (index, element) {
        var padding = $(element).data('padding-right');
        if (typeof padding !== 'undefined') {
          $(element).css('padding-right', padding).removeData('padding-right');
        }
      });

      // Restore navbar-toggler margin
      $(Selector.NAVBAR_TOGGLER).each(function (index, element) {
        var margin = $(element).data('margin-right');
        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      });

      // Restore body padding
      var padding = $('body').data('padding-right');
      if (typeof padding !== 'undefined') {
        $('body').css('padding-right', padding).removeData('padding-right');
      }
    };

    Modal.prototype._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    };

    // static

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = $.extend({}, Modal.Default, $(this).data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return Modal;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    var _this19 = this;

    var target = void 0;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = $(selector)[0];
    }

    var config = $(target).data(DATA_KEY) ? 'toggle' : $.extend({}, $(target).data(), $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(Event.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event.HIDDEN, function () {
        if ($(_this19).is(':visible')) {
          _this19.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Modal._jQueryInterface;
  $.fn[NAME].Constructor = Modal;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Modal._jQueryInterface;
  };

  return Modal;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var ScrollSpy = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'scrollspy';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.scrollspy';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var Default = {
    offset: 10,
    method: 'auto',
    target: ''
  };

  var DefaultType = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };

  var Event = {
    ACTIVATE: 'activate' + EVENT_KEY,
    SCROLL: 'scroll' + EVENT_KEY,
    LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    DROPDOWN_ITEM: 'dropdown-item',
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active'
  };

  var Selector = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: '.active',
    NAV_LIST_GROUP: '.nav, .list-group',
    NAV_LINKS: '.nav-link',
    LIST_ITEMS: '.list-group-item',
    DROPDOWN: '.dropdown',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
  };

  var OffsetMethod = {
    OFFSET: 'offset',
    POSITION: 'position'

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var ScrollSpy = function () {
    function ScrollSpy(element, config) {
      var _this20 = this;

      _classCallCheck(this, ScrollSpy);

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + ' ' + Selector.NAV_LINKS + ',' + (this._config.target + ' ' + Selector.LIST_ITEMS + ',') + (this._config.target + ' ' + Selector.DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;

      $(this._scrollElement).on(Event.SCROLL, function (event) {
        return _this20._process(event);
      });

      this.refresh();
      this._process();
    }

    // getters

    // public

    ScrollSpy.prototype.refresh = function refresh() {
      var _this21 = this;

      var autoMethod = this._scrollElement !== this._scrollElement.window ? OffsetMethod.POSITION : OffsetMethod.OFFSET;

      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;

      var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;

      this._offsets = [];
      this._targets = [];

      this._scrollHeight = this._getScrollHeight();

      var targets = $.makeArray($(this._selector));

      targets.map(function (element) {
        var target = void 0;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = $(targetSelector)[0];
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();
          if (targetBCR.width || targetBCR.height) {
            // todo (fat): remove sketch reliance on jQuery position/offset
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }
        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this21._offsets.push(item[0]);
        _this21._targets.push(item[1]);
      });
    };

    ScrollSpy.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      $(this._scrollElement).off(EVENT_KEY);

      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    };

    // private

    ScrollSpy.prototype._getConfig = function _getConfig(config) {
      config = $.extend({}, Default, config);

      if (typeof config.target !== 'string') {
        var id = $(config.target).attr('id');
        if (!id) {
          id = Util.getUID(NAME);
          $(config.target).attr('id', id);
        }
        config.target = '#' + id;
      }

      Util.typeCheckConfig(NAME, config, DefaultType);

      return config;
    };

    ScrollSpy.prototype._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    ScrollSpy.prototype._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    ScrollSpy.prototype._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    ScrollSpy.prototype._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;
      var scrollHeight = this._getScrollHeight();
      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }
        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;
        this._clear();
        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (this._offsets[i + 1] === undefined || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    ScrollSpy.prototype._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',');
      queries = queries.map(function (selector) {
        return selector + '[data-target="' + target + '"],' + (selector + '[href="' + target + '"]');
      });

      var $link = $(queries.join(','));

      if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
        $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
        $link.addClass(ClassName.ACTIVE);
      } else {
        // Set triggered link as active
        $link.addClass(ClassName.ACTIVE);
        // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
        $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_LINKS + ', ' + Selector.LIST_ITEMS).addClass(ClassName.ACTIVE);
      }

      $(this._scrollElement).trigger(Event.ACTIVATE, {
        relatedTarget: target
      });
    };

    ScrollSpy.prototype._clear = function _clear() {
      $(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
    };

    // static

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return ScrollSpy;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(window).on(Event.LOAD_DATA_API, function () {
    var scrollSpys = $.makeArray($(Selector.DATA_SPY));

    for (var i = scrollSpys.length; i--;) {
      var $spy = $(scrollSpys[i]);
      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = ScrollSpy._jQueryInterface;
  $.fn[NAME].Constructor = ScrollSpy;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return ScrollSpy._jQueryInterface;
  };

  return ScrollSpy;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Tab = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'tab';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.tab';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 150;

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
  };

  var Selector = {
    DROPDOWN: '.dropdown',
    NAV_LIST_GROUP: '.nav, .list-group',
    ACTIVE: '.active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var Tab = function () {
    function Tab(element) {
      _classCallCheck(this, Tab);

      this._element = element;
    }

    // getters

    // public

    Tab.prototype.show = function show() {
      var _this22 = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName.ACTIVE) || $(this._element).hasClass(ClassName.DISABLED)) {
        return;
      }

      var target = void 0;
      var previous = void 0;
      var listElement = $(this._element).closest(Selector.NAV_LIST_GROUP)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        previous = $.makeArray($(listElement).find(Selector.ACTIVE));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $.Event(Event.HIDE, {
        relatedTarget: this._element
      });

      var showEvent = $.Event(Event.SHOW, {
        relatedTarget: previous
      });

      if (previous) {
        $(previous).trigger(hideEvent);
      }

      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = $(selector)[0];
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $.Event(Event.HIDDEN, {
          relatedTarget: _this22._element
        });

        var shownEvent = $.Event(Event.SHOWN, {
          relatedTarget: previous
        });

        $(previous).trigger(hiddenEvent);
        $(_this22._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    Tab.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    };

    // private

    Tab.prototype._activate = function _activate(element, container, callback) {
      var _this23 = this;

      var active = $(container).find(Selector.ACTIVE)[0];
      var isTransitioning = callback && Util.supportsTransitionEnd() && active && $(active).hasClass(ClassName.FADE);

      var complete = function complete() {
        return _this23._transitionComplete(element, active, isTransitioning, callback);
      };

      if (active && isTransitioning) {
        $(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        complete();
      }

      if (active) {
        $(active).removeClass(ClassName.SHOW);
      }
    };

    Tab.prototype._transitionComplete = function _transitionComplete(element, active, isTransitioning, callback) {
      if (active) {
        $(active).removeClass(ClassName.ACTIVE);

        var dropdownChild = $(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName.ACTIVE);
        }

        active.setAttribute('aria-expanded', false);
      }

      $(element).addClass(ClassName.ACTIVE);
      element.setAttribute('aria-expanded', true);

      if (isTransitioning) {
        Util.reflow(element);
        $(element).addClass(ClassName.SHOW);
      } else {
        $(element).removeClass(ClassName.FADE);
      }

      if (element.parentNode && $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {

        var dropdownElement = $(element).closest(Selector.DROPDOWN)[0];
        if (dropdownElement) {
          $(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    };

    // static

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }]);

    return Tab;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();
    Tab._jQueryInterface.call($(this), 'show');
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Tab._jQueryInterface;
  $.fn[NAME].Constructor = Tab;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Tab._jQueryInterface;
  };

  return Tab;
}(jQuery);

/* global Popper */

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Tooltip = function ($) {

  /**
   * Check for Popper dependency
   * Popper - https://popper.js.org
   */
  if (typeof Popper === 'undefined') {
    throw new Error('Bootstrap tooltips require Popper.js (https://popper.js.org)');
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'tooltip';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.tooltip';
  var EVENT_KEY = '.' + DATA_KEY;
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 150;
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp('(^|\\s)' + CLASS_PREFIX + '\\S+', 'g');

  var DefaultType = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)'
  };

  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };

  var Default = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip'
  };

  var HoverState = {
    SHOW: 'show',
    OUT: 'out'
  };

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    INSERTED: 'inserted' + EVENT_KEY,
    CLICK: 'click' + EVENT_KEY,
    FOCUSIN: 'focusin' + EVENT_KEY,
    FOCUSOUT: 'focusout' + EVENT_KEY,
    MOUSEENTER: 'mouseenter' + EVENT_KEY,
    MOUSELEAVE: 'mouseleave' + EVENT_KEY
  };

  var ClassName = {
    FADE: 'fade',
    SHOW: 'show'
  };

  var Selector = {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner',
    ARROW: '.arrow'
  };

  var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var Tooltip = function () {
    function Tooltip(element, config) {
      _classCallCheck(this, Tooltip);

      // private
      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null;

      // protected
      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    }

    // getters

    // public

    Tooltip.prototype.enable = function enable() {
      this._isEnabled = true;
    };

    Tooltip.prototype.disable = function disable() {
      this._isEnabled = false;
    };

    Tooltip.prototype.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    Tooltip.prototype.toggle = function toggle(event) {
      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {

        if ($(this.getTipElement()).hasClass(ClassName.SHOW)) {
          this._leave(null, this);
          return;
        }

        this._enter(null, this);
      }
    };

    Tooltip.prototype.dispose = function dispose() {
      clearTimeout(this._timeout);

      $.removeData(this.element, this.constructor.DATA_KEY);

      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal');

      if (this.tip) {
        $(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;
      if (this._popper !== null) {
        this._popper.destroy();
      }
      this._popper = null;

      this.element = null;
      this.config = null;
      this.tip = null;
    };

    Tooltip.prototype.show = function show() {
      var _this24 = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);
      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent);

        var isInTheDom = $.contains(this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);

        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);

        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(ClassName.FADE);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);
        this.addAttachmentClass(attachment);

        var container = this.config.container === false ? document.body : $(this.config.container);

        $(tip).data(this.constructor.DATA_KEY, this);

        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $(tip).appendTo(container);
        }

        $(this.element).trigger(this.constructor.Event.INSERTED);

        this._popper = new Popper(this.element, tip, {
          placement: attachment,
          modifiers: {
            offset: {
              offset: this.config.offset
            },
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: Selector.ARROW
            }
          },
          onCreate: function onCreate(data) {
            if (data.originalPlacement !== data.placement) {
              _this24._handlePopperPlacementChange(data);
            }
          },
          onUpdate: function onUpdate(data) {
            _this24._handlePopperPlacementChange(data);
          }
        });

        $(tip).addClass(ClassName.SHOW);

        // if this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        if ('ontouchstart' in document.documentElement) {
          $('body').children().on('mouseover', null, $.noop);
        }

        var complete = function complete() {
          if (_this24.config.animation) {
            _this24._fixTransition();
          }
          var prevHoverState = _this24._hoverState;
          _this24._hoverState = null;

          $(_this24.element).trigger(_this24.constructor.Event.SHOWN);

          if (prevHoverState === HoverState.OUT) {
            _this24._leave(null, _this24);
          }
        };

        if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
        } else {
          complete();
        }
      }
    };

    Tooltip.prototype.hide = function hide(callback) {
      var _this25 = this;

      var tip = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);
      var complete = function complete() {
        if (_this25._hoverState !== HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this25._cleanTipClass();
        _this25.element.removeAttribute('aria-describedby');
        $(_this25.element).trigger(_this25.constructor.Event.HIDDEN);
        if (_this25._popper !== null) {
          _this25._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(tip).removeClass(ClassName.SHOW);

      // if this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support
      if ('ontouchstart' in document.documentElement) {
        $('body').children().off('mouseover', null, $.noop);
      }

      this._activeTrigger[Trigger.CLICK] = false;
      this._activeTrigger[Trigger.FOCUS] = false;
      this._activeTrigger[Trigger.HOVER] = false;

      if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {

        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    Tooltip.prototype.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    };

    // protected

    Tooltip.prototype.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    Tooltip.prototype.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + '-' + attachment);
    };

    Tooltip.prototype.getTipElement = function getTipElement() {
      return this.tip = this.tip || $(this.config.template)[0];
    };

    Tooltip.prototype.setContent = function setContent() {
      var $tip = $(this.getTipElement());
      this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());
      $tip.removeClass(ClassName.FADE + ' ' + ClassName.SHOW);
    };

    Tooltip.prototype.setElementContent = function setElementContent($element, content) {
      var html = this.config.html;
      if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) === 'object' && (content.nodeType || content.jquery)) {
        // content is a DOM node or a jQuery
        if (html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }
      } else {
        $element[html ? 'html' : 'text'](content);
      }
    };

    Tooltip.prototype.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    };

    // private

    Tooltip.prototype._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    Tooltip.prototype._setListeners = function _setListeners() {
      var _this26 = this;

      var triggers = this.config.trigger.split(' ');

      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(_this26.element).on(_this26.constructor.Event.CLICK, _this26.config.selector, function (event) {
            return _this26.toggle(event);
          });
        } else if (trigger !== Trigger.MANUAL) {
          var eventIn = trigger === Trigger.HOVER ? _this26.constructor.Event.MOUSEENTER : _this26.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ? _this26.constructor.Event.MOUSELEAVE : _this26.constructor.Event.FOCUSOUT;

          $(_this26.element).on(eventIn, _this26.config.selector, function (event) {
            return _this26._enter(event);
          }).on(eventOut, _this26.config.selector, function (event) {
            return _this26._leave(event);
          });
        }

        $(_this26.element).closest('.modal').on('hide.bs.modal', function () {
          return _this26.hide();
        });
      });

      if (this.config.selector) {
        this.config = $.extend({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    Tooltip.prototype._fixTitle = function _fixTitle() {
      var titleType = _typeof(this.element.getAttribute('data-original-title'));
      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    Tooltip.prototype._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;

      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
      }

      if ($(context.getTipElement()).hasClass(ClassName.SHOW) || context._hoverState === HoverState.SHOW) {
        context._hoverState = HoverState.SHOW;
        return;
      }

      clearTimeout(context._timeout);

      context._hoverState = HoverState.SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    Tooltip.prototype._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;

      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);

      context._hoverState = HoverState.OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    Tooltip.prototype._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    Tooltip.prototype._getConfig = function _getConfig(config) {
      config = $.extend({}, this.constructor.Default, $(this.element).data(), config);

      if (config.delay && typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (config.title && typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (config.content && typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);

      return config;
    };

    Tooltip.prototype._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    Tooltip.prototype._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);
      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    Tooltip.prototype._handlePopperPlacementChange = function _handlePopperPlacementChange(data) {
      this._cleanTipClass();
      this.addAttachmentClass(this._getAttachment(data.placement));
    };

    Tooltip.prototype._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;
      if (tip.getAttribute('x-placement') !== null) {
        return;
      }
      $(tip).removeClass(ClassName.FADE);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    };

    // static

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }, {
      key: 'NAME',
      get: function get() {
        return NAME;
      }
    }, {
      key: 'DATA_KEY',
      get: function get() {
        return DATA_KEY;
      }
    }, {
      key: 'Event',
      get: function get() {
        return Event;
      }
    }, {
      key: 'EVENT_KEY',
      get: function get() {
        return EVENT_KEY;
      }
    }, {
      key: 'DefaultType',
      get: function get() {
        return DefaultType;
      }
    }]);

    return Tooltip;
  }();

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Tooltip._jQueryInterface;
  $.fn[NAME].Constructor = Tooltip;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Tooltip._jQueryInterface;
  };

  return Tooltip;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Popover = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'popover';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.popover';
  var EVENT_KEY = '.' + DATA_KEY;
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var CLASS_PREFIX = 'bs-popover';
  var BSCLS_PREFIX_REGEX = new RegExp('(^|\\s)' + CLASS_PREFIX + '\\S+', 'g');

  var Default = $.extend({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType = $.extend({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var ClassName = {
    FADE: 'fade',
    SHOW: 'show'
  };

  var Selector = {
    TITLE: '.popover-header',
    CONTENT: '.popover-body'
  };

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    INSERTED: 'inserted' + EVENT_KEY,
    CLICK: 'click' + EVENT_KEY,
    FOCUSIN: 'focusin' + EVENT_KEY,
    FOCUSOUT: 'focusout' + EVENT_KEY,
    MOUSEENTER: 'mouseenter' + EVENT_KEY,
    MOUSELEAVE: 'mouseleave' + EVENT_KEY

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var Popover = function (_Tooltip) {
    _inherits(Popover, _Tooltip);

    function Popover() {
      _classCallCheck(this, Popover);

      return _possibleConstructorReturn(this, _Tooltip.apply(this, arguments));
    }

    // overrides

    Popover.prototype.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    Popover.prototype.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + '-' + attachment);
    };

    Popover.prototype.getTipElement = function getTipElement() {
      return this.tip = this.tip || $(this.config.template)[0];
    };

    Popover.prototype.setContent = function setContent() {
      var $tip = $(this.getTipElement());

      // we use append for html objects to maintain js events
      this.setElementContent($tip.find(Selector.TITLE), this.getTitle());
      this.setElementContent($tip.find(Selector.CONTENT), this._getContent());

      $tip.removeClass(ClassName.FADE + ' ' + ClassName.SHOW);
    };

    // private

    Popover.prototype._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || (typeof this.config.content === 'function' ? this.config.content.call(this.element) : this.config.content);
    };

    Popover.prototype._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);
      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    // static

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' ? config : null;

        if (!data && /destroy|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: 'VERSION',


      // getters

      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }, {
      key: 'NAME',
      get: function get() {
        return NAME;
      }
    }, {
      key: 'DATA_KEY',
      get: function get() {
        return DATA_KEY;
      }
    }, {
      key: 'Event',
      get: function get() {
        return Event;
      }
    }, {
      key: 'EVENT_KEY',
      get: function get() {
        return EVENT_KEY;
      }
    }, {
      key: 'DefaultType',
      get: function get() {
        return DefaultType;
      }
    }]);

    return Popover;
  }(Tooltip);

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Popover._jQueryInterface;
  $.fn[NAME].Constructor = Popover;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Popover._jQueryInterface;
  };

  return Popover;
}(jQuery);


})();
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
(function() {
  'use strict'

  var keyCounter = 0
  var allWaypoints = {}

  /* http://imakewebthings.com/waypoints/api/waypoint */
  function Waypoint(options) {
    if (!options) {
      throw new Error('No options passed to Waypoint constructor')
    }
    if (!options.element) {
      throw new Error('No element option passed to Waypoint constructor')
    }
    if (!options.handler) {
      throw new Error('No handler option passed to Waypoint constructor')
    }

    this.key = 'waypoint-' + keyCounter
    this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options)
    this.element = this.options.element
    this.adapter = new Waypoint.Adapter(this.element)
    this.callback = options.handler
    this.axis = this.options.horizontal ? 'horizontal' : 'vertical'
    this.enabled = this.options.enabled
    this.triggerPoint = null
    this.group = Waypoint.Group.findOrCreate({
      name: this.options.group,
      axis: this.axis
    })
    this.context = Waypoint.Context.findOrCreateByElement(this.options.context)

    if (Waypoint.offsetAliases[this.options.offset]) {
      this.options.offset = Waypoint.offsetAliases[this.options.offset]
    }
    this.group.add(this)
    this.context.add(this)
    allWaypoints[this.key] = this
    keyCounter += 1
  }

  /* Private */
  Waypoint.prototype.queueTrigger = function(direction) {
    this.group.queueTrigger(this, direction)
  }

  /* Private */
  Waypoint.prototype.trigger = function(args) {
    if (!this.enabled) {
      return
    }
    if (this.callback) {
      this.callback.apply(this, args)
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/destroy */
  Waypoint.prototype.destroy = function() {
    this.context.remove(this)
    this.group.remove(this)
    delete allWaypoints[this.key]
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/disable */
  Waypoint.prototype.disable = function() {
    this.enabled = false
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/enable */
  Waypoint.prototype.enable = function() {
    this.context.refresh()
    this.enabled = true
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/next */
  Waypoint.prototype.next = function() {
    return this.group.next(this)
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/previous */
  Waypoint.prototype.previous = function() {
    return this.group.previous(this)
  }

  /* Private */
  Waypoint.invokeAll = function(method) {
    var allWaypointsArray = []
    for (var waypointKey in allWaypoints) {
      allWaypointsArray.push(allWaypoints[waypointKey])
    }
    for (var i = 0, end = allWaypointsArray.length; i < end; i++) {
      allWaypointsArray[i][method]()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/destroy-all */
  Waypoint.destroyAll = function() {
    Waypoint.invokeAll('destroy')
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/disable-all */
  Waypoint.disableAll = function() {
    Waypoint.invokeAll('disable')
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/enable-all */
  Waypoint.enableAll = function() {
    Waypoint.Context.refreshAll()
    for (var waypointKey in allWaypoints) {
      allWaypoints[waypointKey].enabled = true
    }
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/refresh-all */
  Waypoint.refreshAll = function() {
    Waypoint.Context.refreshAll()
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/viewport-height */
  Waypoint.viewportHeight = function() {
    return window.innerHeight || document.documentElement.clientHeight
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/viewport-width */
  Waypoint.viewportWidth = function() {
    return document.documentElement.clientWidth
  }

  Waypoint.adapters = []

  Waypoint.defaults = {
    context: window,
    continuous: true,
    enabled: true,
    group: 'default',
    horizontal: false,
    offset: 0
  }

  Waypoint.offsetAliases = {
    'bottom-in-view': function() {
      return this.context.innerHeight() - this.adapter.outerHeight()
    },
    'right-in-view': function() {
      return this.context.innerWidth() - this.adapter.outerWidth()
    }
  }

  window.Waypoint = Waypoint
}())
;(function() {
  'use strict'

  function requestAnimationFrameShim(callback) {
    window.setTimeout(callback, 1000 / 60)
  }

  var keyCounter = 0
  var contexts = {}
  var Waypoint = window.Waypoint
  var oldWindowLoad = window.onload

  /* http://imakewebthings.com/waypoints/api/context */
  function Context(element) {
    this.element = element
    this.Adapter = Waypoint.Adapter
    this.adapter = new this.Adapter(element)
    this.key = 'waypoint-context-' + keyCounter
    this.didScroll = false
    this.didResize = false
    this.oldScroll = {
      x: this.adapter.scrollLeft(),
      y: this.adapter.scrollTop()
    }
    this.waypoints = {
      vertical: {},
      horizontal: {}
    }

    element.waypointContextKey = this.key
    contexts[element.waypointContextKey] = this
    keyCounter += 1
    if (!Waypoint.windowContext) {
      Waypoint.windowContext = true
      Waypoint.windowContext = new Context(window)
    }

    this.createThrottledScrollHandler()
    this.createThrottledResizeHandler()
  }

  /* Private */
  Context.prototype.add = function(waypoint) {
    var axis = waypoint.options.horizontal ? 'horizontal' : 'vertical'
    this.waypoints[axis][waypoint.key] = waypoint
    this.refresh()
  }

  /* Private */
  Context.prototype.checkEmpty = function() {
    var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal)
    var verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical)
    var isWindow = this.element == this.element.window
    if (horizontalEmpty && verticalEmpty && !isWindow) {
      this.adapter.off('.waypoints')
      delete contexts[this.key]
    }
  }

  /* Private */
  Context.prototype.createThrottledResizeHandler = function() {
    var self = this

    function resizeHandler() {
      self.handleResize()
      self.didResize = false
    }

    this.adapter.on('resize.waypoints', function() {
      if (!self.didResize) {
        self.didResize = true
        Waypoint.requestAnimationFrame(resizeHandler)
      }
    })
  }

  /* Private */
  Context.prototype.createThrottledScrollHandler = function() {
    var self = this
    function scrollHandler() {
      self.handleScroll()
      self.didScroll = false
    }

    this.adapter.on('scroll.waypoints', function() {
      if (!self.didScroll || Waypoint.isTouch) {
        self.didScroll = true
        Waypoint.requestAnimationFrame(scrollHandler)
      }
    })
  }

  /* Private */
  Context.prototype.handleResize = function() {
    Waypoint.Context.refreshAll()
  }

  /* Private */
  Context.prototype.handleScroll = function() {
    var triggeredGroups = {}
    var axes = {
      horizontal: {
        newScroll: this.adapter.scrollLeft(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left'
      },
      vertical: {
        newScroll: this.adapter.scrollTop(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up'
      }
    }

    for (var axisKey in axes) {
      var axis = axes[axisKey]
      var isForward = axis.newScroll > axis.oldScroll
      var direction = isForward ? axis.forward : axis.backward

      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey]
        if (waypoint.triggerPoint === null) {
          continue
        }
        var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint
        var nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint
        var crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint
        var crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint
        if (crossedForward || crossedBackward) {
          waypoint.queueTrigger(direction)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
      }
    }

    for (var groupKey in triggeredGroups) {
      triggeredGroups[groupKey].flushTriggers()
    }

    this.oldScroll = {
      x: axes.horizontal.newScroll,
      y: axes.vertical.newScroll
    }
  }

  /* Private */
  Context.prototype.innerHeight = function() {
    /*eslint-disable eqeqeq */
    if (this.element == this.element.window) {
      return Waypoint.viewportHeight()
    }
    /*eslint-enable eqeqeq */
    return this.adapter.innerHeight()
  }

  /* Private */
  Context.prototype.remove = function(waypoint) {
    delete this.waypoints[waypoint.axis][waypoint.key]
    this.checkEmpty()
  }

  /* Private */
  Context.prototype.innerWidth = function() {
    /*eslint-disable eqeqeq */
    if (this.element == this.element.window) {
      return Waypoint.viewportWidth()
    }
    /*eslint-enable eqeqeq */
    return this.adapter.innerWidth()
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-destroy */
  Context.prototype.destroy = function() {
    var allWaypoints = []
    for (var axis in this.waypoints) {
      for (var waypointKey in this.waypoints[axis]) {
        allWaypoints.push(this.waypoints[axis][waypointKey])
      }
    }
    for (var i = 0, end = allWaypoints.length; i < end; i++) {
      allWaypoints[i].destroy()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-refresh */
  Context.prototype.refresh = function() {
    /*eslint-disable eqeqeq */
    var isWindow = this.element == this.element.window
    /*eslint-enable eqeqeq */
    var contextOffset = isWindow ? undefined : this.adapter.offset()
    var triggeredGroups = {}
    var axes

    this.handleScroll()
    axes = {
      horizontal: {
        contextOffset: isWindow ? 0 : contextOffset.left,
        contextScroll: isWindow ? 0 : this.oldScroll.x,
        contextDimension: this.innerWidth(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left',
        offsetProp: 'left'
      },
      vertical: {
        contextOffset: isWindow ? 0 : contextOffset.top,
        contextScroll: isWindow ? 0 : this.oldScroll.y,
        contextDimension: this.innerHeight(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up',
        offsetProp: 'top'
      }
    }

    for (var axisKey in axes) {
      var axis = axes[axisKey]
      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey]
        var adjustment = waypoint.options.offset
        var oldTriggerPoint = waypoint.triggerPoint
        var elementOffset = 0
        var freshWaypoint = oldTriggerPoint == null
        var contextModifier, wasBeforeScroll, nowAfterScroll
        var triggeredBackward, triggeredForward

        if (waypoint.element !== waypoint.element.window) {
          elementOffset = waypoint.adapter.offset()[axis.offsetProp]
        }

        if (typeof adjustment === 'function') {
          adjustment = adjustment.apply(waypoint)
        }
        else if (typeof adjustment === 'string') {
          adjustment = parseFloat(adjustment)
          if (waypoint.options.offset.indexOf('%') > - 1) {
            adjustment = Math.ceil(axis.contextDimension * adjustment / 100)
          }
        }

        contextModifier = axis.contextScroll - axis.contextOffset
        waypoint.triggerPoint = Math.floor(elementOffset + contextModifier - adjustment)
        wasBeforeScroll = oldTriggerPoint < axis.oldScroll
        nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll
        triggeredBackward = wasBeforeScroll && nowAfterScroll
        triggeredForward = !wasBeforeScroll && !nowAfterScroll

        if (!freshWaypoint && triggeredBackward) {
          waypoint.queueTrigger(axis.backward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
        else if (!freshWaypoint && triggeredForward) {
          waypoint.queueTrigger(axis.forward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
        else if (freshWaypoint && axis.oldScroll >= waypoint.triggerPoint) {
          waypoint.queueTrigger(axis.forward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
      }
    }

    Waypoint.requestAnimationFrame(function() {
      for (var groupKey in triggeredGroups) {
        triggeredGroups[groupKey].flushTriggers()
      }
    })

    return this
  }

  /* Private */
  Context.findOrCreateByElement = function(element) {
    return Context.findByElement(element) || new Context(element)
  }

  /* Private */
  Context.refreshAll = function() {
    for (var contextId in contexts) {
      contexts[contextId].refresh()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-find-by-element */
  Context.findByElement = function(element) {
    return contexts[element.waypointContextKey]
  }

  window.onload = function() {
    if (oldWindowLoad) {
      oldWindowLoad()
    }
    Context.refreshAll()
  }


  Waypoint.requestAnimationFrame = function(callback) {
    var requestFn = window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      requestAnimationFrameShim
    requestFn.call(window, callback)
  }
  Waypoint.Context = Context
}())
;(function() {
  'use strict'

  function byTriggerPoint(a, b) {
    return a.triggerPoint - b.triggerPoint
  }

  function byReverseTriggerPoint(a, b) {
    return b.triggerPoint - a.triggerPoint
  }

  var groups = {
    vertical: {},
    horizontal: {}
  }
  var Waypoint = window.Waypoint

  /* http://imakewebthings.com/waypoints/api/group */
  function Group(options) {
    this.name = options.name
    this.axis = options.axis
    this.id = this.name + '-' + this.axis
    this.waypoints = []
    this.clearTriggerQueues()
    groups[this.axis][this.name] = this
  }

  /* Private */
  Group.prototype.add = function(waypoint) {
    this.waypoints.push(waypoint)
  }

  /* Private */
  Group.prototype.clearTriggerQueues = function() {
    this.triggerQueues = {
      up: [],
      down: [],
      left: [],
      right: []
    }
  }

  /* Private */
  Group.prototype.flushTriggers = function() {
    for (var direction in this.triggerQueues) {
      var waypoints = this.triggerQueues[direction]
      var reverse = direction === 'up' || direction === 'left'
      waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint)
      for (var i = 0, end = waypoints.length; i < end; i += 1) {
        var waypoint = waypoints[i]
        if (waypoint.options.continuous || i === waypoints.length - 1) {
          waypoint.trigger([direction])
        }
      }
    }
    this.clearTriggerQueues()
  }

  /* Private */
  Group.prototype.next = function(waypoint) {
    this.waypoints.sort(byTriggerPoint)
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    var isLast = index === this.waypoints.length - 1
    return isLast ? null : this.waypoints[index + 1]
  }

  /* Private */
  Group.prototype.previous = function(waypoint) {
    this.waypoints.sort(byTriggerPoint)
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    return index ? this.waypoints[index - 1] : null
  }

  /* Private */
  Group.prototype.queueTrigger = function(waypoint, direction) {
    this.triggerQueues[direction].push(waypoint)
  }

  /* Private */
  Group.prototype.remove = function(waypoint) {
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    if (index > -1) {
      this.waypoints.splice(index, 1)
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/first */
  Group.prototype.first = function() {
    return this.waypoints[0]
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/last */
  Group.prototype.last = function() {
    return this.waypoints[this.waypoints.length - 1]
  }

  /* Private */
  Group.findOrCreate = function(options) {
    return groups[options.axis][options.name] || new Group(options)
  }

  Waypoint.Group = Group
}())
;(function() {
  'use strict'

  var $ = window.jQuery
  var Waypoint = window.Waypoint

  function JQueryAdapter(element) {
    this.$element = $(element)
  }

  $.each([
    'innerHeight',
    'innerWidth',
    'off',
    'offset',
    'on',
    'outerHeight',
    'outerWidth',
    'scrollLeft',
    'scrollTop'
  ], function(i, method) {
    JQueryAdapter.prototype[method] = function() {
      var args = Array.prototype.slice.call(arguments)
      return this.$element[method].apply(this.$element, args)
    }
  })

  $.each([
    'extend',
    'inArray',
    'isEmptyObject'
  ], function(i, method) {
    JQueryAdapter[method] = $[method]
  })

  Waypoint.adapters.push({
    name: 'jquery',
    Adapter: JQueryAdapter
  })
  Waypoint.Adapter = JQueryAdapter
}())
;(function() {
  'use strict'

  var Waypoint = window.Waypoint

  function createExtension(framework) {
    return function() {
      var waypoints = []
      var overrides = arguments[0]

      if (framework.isFunction(arguments[0])) {
        overrides = framework.extend({}, arguments[1])
        overrides.handler = arguments[0]
      }

      this.each(function() {
        var options = framework.extend({}, overrides, {
          element: this
        })
        if (typeof options.context === 'string') {
          options.context = framework(this).closest(options.context)[0]
        }
        waypoints.push(new Waypoint(options))
      })

      return waypoints
    }
  }

  if (window.jQuery) {
    window.jQuery.fn.waypoint = createExtension(window.jQuery)
  }
  if (window.Zepto) {
    window.Zepto.fn.waypoint = createExtension(window.Zepto)
  }
}())
;
/*!
Waypoints Sticky Element Shortcut - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
(function() {
  'use strict'

  var $ = window.jQuery
  var Waypoint = window.Waypoint

  /* http://imakewebthings.com/waypoints/shortcuts/sticky-elements */
  function Sticky(options) {
    this.options = $.extend({}, Waypoint.defaults, Sticky.defaults, options)
    this.element = this.options.element
    this.$element = $(this.element)
    this.createWrapper()
    this.createWaypoint()
  }

  /* Private */
  Sticky.prototype.createWaypoint = function() {
    var originalHandler = this.options.handler

    this.waypoint = new Waypoint($.extend({}, this.options, {
      element: this.wrapper,
      handler: $.proxy(function(direction) {
        var shouldBeStuck = this.options.direction.indexOf(direction) > -1
        var wrapperHeight = shouldBeStuck ? this.$element.outerHeight(true) : ''

        this.$wrapper.height(wrapperHeight)
        this.$element.toggleClass(this.options.stuckClass, shouldBeStuck)

        if (originalHandler) {
          originalHandler.call(this, direction)
        }
      }, this)
    }))
  }

  /* Private */
  Sticky.prototype.createWrapper = function() {
    if (this.options.wrapper) {
      this.$element.wrap(this.options.wrapper)
    }
    this.$wrapper = this.$element.parent()
    this.wrapper = this.$wrapper[0]
  }

  /* Public */
  Sticky.prototype.destroy = function() {
    if (this.$element.parent()[0] === this.wrapper) {
      this.waypoint.destroy()
      this.$element.removeClass(this.options.stuckClass)
      if (this.options.wrapper) {
        this.$element.unwrap()
      }
    }
  }

  Sticky.defaults = {
    wrapper: '<div class="sticky-wrapper" />',
    stuckClass: 'stuck',
    direction: 'down right'
  }

  Waypoint.Sticky = Sticky
}())
;
/*! skrollr 0.6.26 (2014-06-08) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
(function(e,t,r){"use strict";function n(r){if(o=t.documentElement,a=t.body,K(),it=this,r=r||{},ut=r.constants||{},r.easing)for(var n in r.easing)U[n]=r.easing[n];yt=r.edgeStrategy||"set",ct={beforerender:r.beforerender,render:r.render,keyframe:r.keyframe},ft=r.forceHeight!==!1,ft&&(Vt=r.scale||1),mt=r.mobileDeceleration||x,dt=r.smoothScrolling!==!1,gt=r.smoothScrollingDuration||E,vt={targetTop:it.getScrollTop()},Gt=(r.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),Gt?(st=t.getElementById("skrollr-body"),st&&at(),X(),Dt(o,[y,S],[T])):Dt(o,[y,b],[T]),it.refresh(),St(e,"resize orientationchange",function(){var e=o.clientWidth,t=o.clientHeight;(t!==$t||e!==Mt)&&($t=t,Mt=e,_t=!0)});var i=Y();return function l(){Z(),bt=i(l)}(),it}var o,a,i={get:function(){return it},init:function(e){return it||new n(e)},VERSION:"0.6.26"},l=Object.prototype.hasOwnProperty,s=e.Math,c=e.getComputedStyle,f="touchstart",u="touchmove",m="touchcancel",p="touchend",d="skrollable",g=d+"-before",v=d+"-between",h=d+"-after",y="skrollr",T="no-"+y,b=y+"-desktop",S=y+"-mobile",k="linear",w=1e3,x=.004,E=200,A="start",F="end",C="center",D="bottom",H="___skrollable_id",I=/^(?:input|textarea|button|select)$/i,P=/^\s+|\s+$/g,N=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,O=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,V=/^(@?[a-z\-]+)\[(\w+)\]$/,z=/-([a-z0-9_])/g,q=function(e,t){return t.toUpperCase()},L=/[\-+]?[\d]*\.?[\d]+/g,M=/\{\?\}/g,$=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,_=/[a-z\-]+-gradient/g,B="",G="",K=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(c){var t=c(a,null);for(var n in t)if(B=n.match(e)||+n==n&&t[n].match(e))break;if(!B)return B=G="",r;B=B[0],"-"===B.slice(0,1)?(G=B,B={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[B]):G="-"+B.toLowerCase()+"-"}},Y=function(){var t=e.requestAnimationFrame||e[B.toLowerCase()+"RequestAnimationFrame"],r=Pt();return(Gt||!t)&&(t=function(t){var n=Pt()-r,o=s.max(0,1e3/60-n);return e.setTimeout(function(){r=Pt(),t()},o)}),t},R=function(){var t=e.cancelAnimationFrame||e[B.toLowerCase()+"CancelAnimationFrame"];return(Gt||!t)&&(t=function(t){return e.clearTimeout(t)}),t},U={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-s.cos(e*s.PI)/2+.5},sqrt:function(e){return s.sqrt(e)},outCubic:function(e){return s.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-s.abs(3*s.cos(1.028*e*t)/t)}};n.prototype.refresh=function(e){var n,o,a=!1;for(e===r?(a=!0,lt=[],Bt=0,e=t.getElementsByTagName("*")):e.length===r&&(e=[e]),n=0,o=e.length;o>n;n++){var i=e[n],l=i,s=[],c=dt,f=yt,u=!1;if(a&&H in i&&delete i[H],i.attributes){for(var m=0,p=i.attributes.length;p>m;m++){var g=i.attributes[m];if("data-anchor-target"!==g.name)if("data-smooth-scrolling"!==g.name)if("data-edge-strategy"!==g.name)if("data-emit-events"!==g.name){var v=g.name.match(N);if(null!==v){var h={props:g.value,element:i,eventType:g.name.replace(z,q)};s.push(h);var y=v[1];y&&(h.constant=y.substr(1));var T=v[2];/p$/.test(T)?(h.isPercentage=!0,h.offset=(0|T.slice(0,-1))/100):h.offset=0|T;var b=v[3],S=v[4]||b;b&&b!==A&&b!==F?(h.mode="relative",h.anchors=[b,S]):(h.mode="absolute",b===F?h.isEnd=!0:h.isPercentage||(h.offset=h.offset*Vt))}}else u=!0;else f=g.value;else c="off"!==g.value;else if(l=t.querySelector(g.value),null===l)throw'Unable to find anchor target "'+g.value+'"'}if(s.length){var k,w,x;!a&&H in i?(x=i[H],k=lt[x].styleAttr,w=lt[x].classAttr):(x=i[H]=Bt++,k=i.style.cssText,w=Ct(i)),lt[x]={element:i,styleAttr:k,classAttr:w,anchorTarget:l,keyFrames:s,smoothScrolling:c,edgeStrategy:f,emitEvents:u,lastFrameIndex:-1},Dt(i,[d],[])}}}for(Et(),n=0,o=e.length;o>n;n++){var E=lt[e[n][H]];E!==r&&(J(E),et(E))}return it},n.prototype.relativeToAbsolute=function(e,t,r){var n=o.clientHeight,a=e.getBoundingClientRect(),i=a.top,l=a.bottom-a.top;return t===D?i-=n:t===C&&(i-=n/2),r===D?i+=l:r===C&&(i+=l/2),i+=it.getScrollTop(),0|i+.5},n.prototype.animateTo=function(e,t){t=t||{};var n=Pt(),o=it.getScrollTop();return pt={startTop:o,topDiff:e-o,targetTop:e,duration:t.duration||w,startTime:n,endTime:n+(t.duration||w),easing:U[t.easing||k],done:t.done},pt.topDiff||(pt.done&&pt.done.call(it,!1),pt=r),it},n.prototype.stopAnimateTo=function(){pt&&pt.done&&pt.done.call(it,!0),pt=r},n.prototype.isAnimatingTo=function(){return!!pt},n.prototype.isMobile=function(){return Gt},n.prototype.setScrollTop=function(t,r){return ht=r===!0,Gt?Kt=s.min(s.max(t,0),Ot):e.scrollTo(0,t),it},n.prototype.getScrollTop=function(){return Gt?Kt:e.pageYOffset||o.scrollTop||a.scrollTop||0},n.prototype.getMaxScrollTop=function(){return Ot},n.prototype.on=function(e,t){return ct[e]=t,it},n.prototype.off=function(e){return delete ct[e],it},n.prototype.destroy=function(){var e=R();e(bt),wt(),Dt(o,[T],[y,b,S]);for(var t=0,n=lt.length;n>t;t++)ot(lt[t].element);o.style.overflow=a.style.overflow="",o.style.height=a.style.height="",st&&i.setStyle(st,"transform","none"),it=r,st=r,ct=r,ft=r,Ot=0,Vt=1,ut=r,mt=r,zt="down",qt=-1,Mt=0,$t=0,_t=!1,pt=r,dt=r,gt=r,vt=r,ht=r,Bt=0,yt=r,Gt=!1,Kt=0,Tt=r};var X=function(){var n,i,l,c,d,g,v,h,y,T,b,S;St(o,[f,u,m,p].join(" "),function(e){var o=e.changedTouches[0];for(c=e.target;3===c.nodeType;)c=c.parentNode;switch(d=o.clientY,g=o.clientX,T=e.timeStamp,I.test(c.tagName)||e.preventDefault(),e.type){case f:n&&n.blur(),it.stopAnimateTo(),n=c,i=v=d,l=g,y=T;break;case u:I.test(c.tagName)&&t.activeElement!==c&&e.preventDefault(),h=d-v,S=T-b,it.setScrollTop(Kt-h,!0),v=d,b=T;break;default:case m:case p:var a=i-d,k=l-g,w=k*k+a*a;if(49>w){if(!I.test(n.tagName)){n.focus();var x=t.createEvent("MouseEvents");x.initMouseEvent("click",!0,!0,e.view,1,o.screenX,o.screenY,o.clientX,o.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),n.dispatchEvent(x)}return}n=r;var E=h/S;E=s.max(s.min(E,3),-3);var A=s.abs(E/mt),F=E*A+.5*mt*A*A,C=it.getScrollTop()-F,D=0;C>Ot?(D=(Ot-C)/F,C=Ot):0>C&&(D=-C/F,C=0),A*=1-D,it.animateTo(0|C+.5,{easing:"outCubic",duration:A})}}),e.scrollTo(0,0),o.style.overflow=a.style.overflow="hidden"},j=function(){var e,t,r,n,a,i,l,c,f,u,m,p=o.clientHeight,d=At();for(c=0,f=lt.length;f>c;c++)for(e=lt[c],t=e.element,r=e.anchorTarget,n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],u=l.offset,m=d[l.constant]||0,l.frame=u,l.isPercentage&&(u*=p,l.frame=u),"relative"===l.mode&&(ot(t),l.frame=it.relativeToAbsolute(r,l.anchors[0],l.anchors[1])-u,ot(t,!0)),l.frame+=m,ft&&!l.isEnd&&l.frame>Ot&&(Ot=l.frame);for(Ot=s.max(Ot,Ft()),c=0,f=lt.length;f>c;c++){for(e=lt[c],n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],m=d[l.constant]||0,l.isEnd&&(l.frame=Ot-l.offset+m);e.keyFrames.sort(Nt)}},W=function(e,t){for(var r=0,n=lt.length;n>r;r++){var o,a,s=lt[r],c=s.element,f=s.smoothScrolling?e:t,u=s.keyFrames,m=u.length,p=u[0],y=u[u.length-1],T=p.frame>f,b=f>y.frame,S=T?p:y,k=s.emitEvents,w=s.lastFrameIndex;if(T||b){if(T&&-1===s.edge||b&&1===s.edge)continue;switch(T?(Dt(c,[g],[h,v]),k&&w>-1&&(xt(c,p.eventType,zt),s.lastFrameIndex=-1)):(Dt(c,[h],[g,v]),k&&m>w&&(xt(c,y.eventType,zt),s.lastFrameIndex=m)),s.edge=T?-1:1,s.edgeStrategy){case"reset":ot(c);continue;case"ease":f=S.frame;break;default:case"set":var x=S.props;for(o in x)l.call(x,o)&&(a=nt(x[o].value),0===o.indexOf("@")?c.setAttribute(o.substr(1),a):i.setStyle(c,o,a));continue}}else 0!==s.edge&&(Dt(c,[d,v],[g,h]),s.edge=0);for(var E=0;m-1>E;E++)if(f>=u[E].frame&&u[E+1].frame>=f){var A=u[E],F=u[E+1];for(o in A.props)if(l.call(A.props,o)){var C=(f-A.frame)/(F.frame-A.frame);C=A.props[o].easing(C),a=rt(A.props[o].value,F.props[o].value,C),a=nt(a),0===o.indexOf("@")?c.setAttribute(o.substr(1),a):i.setStyle(c,o,a)}k&&w!==E&&("down"===zt?xt(c,A.eventType,zt):xt(c,F.eventType,zt),s.lastFrameIndex=E);break}}},Z=function(){_t&&(_t=!1,Et());var e,t,n=it.getScrollTop(),o=Pt();if(pt)o>=pt.endTime?(n=pt.targetTop,e=pt.done,pt=r):(t=pt.easing((o-pt.startTime)/pt.duration),n=0|pt.startTop+t*pt.topDiff),it.setScrollTop(n,!0);else if(!ht){var a=vt.targetTop-n;a&&(vt={startTop:qt,topDiff:n-qt,targetTop:n,startTime:Lt,endTime:Lt+gt}),vt.endTime>=o&&(t=U.sqrt((o-vt.startTime)/gt),n=0|vt.startTop+t*vt.topDiff)}if(Gt&&st&&i.setStyle(st,"transform","translate(0, "+-Kt+"px) "+Tt),ht||qt!==n){zt=n>qt?"down":qt>n?"up":zt,ht=!1;var l={curTop:n,lastTop:qt,maxTop:Ot,direction:zt},s=ct.beforerender&&ct.beforerender.call(it,l);s!==!1&&(W(n,it.getScrollTop()),qt=n,ct.render&&ct.render.call(it,l)),e&&e.call(it,!1)}Lt=o},J=function(e){for(var t=0,r=e.keyFrames.length;r>t;t++){for(var n,o,a,i,l=e.keyFrames[t],s={};null!==(i=O.exec(l.props));)a=i[1],o=i[2],n=a.match(V),null!==n?(a=n[1],n=n[2]):n=k,o=o.indexOf("!")?Q(o):[o.slice(1)],s[a]={value:o,easing:U[n]};l.props=s}},Q=function(e){var t=[];return $.lastIndex=0,e=e.replace($,function(e){return e.replace(L,function(e){return 100*(e/255)+"%"})}),G&&(_.lastIndex=0,e=e.replace(_,function(e){return G+e})),e=e.replace(L,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},et=function(e){var t,r,n={};for(t=0,r=e.keyFrames.length;r>t;t++)tt(e.keyFrames[t],n);for(n={},t=e.keyFrames.length-1;t>=0;t--)tt(e.keyFrames[t],n)},tt=function(e,t){var r;for(r in t)l.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},rt=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;o>n;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},nt=function(e){var t=1;return M.lastIndex=0,e[0].replace(M,function(){return e[t++]})},ot=function(e,t){e=[].concat(e);for(var r,n,o=0,a=e.length;a>o;o++)n=e[o],r=lt[n[H]],r&&(t?(n.style.cssText=r.dirtyStyleAttr,Dt(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=Ct(n),n.style.cssText=r.styleAttr,Dt(n,r.classAttr)))},at=function(){Tt="translateZ(0)",i.setStyle(st,"transform",Tt);var e=c(st),t=e.getPropertyValue("transform"),r=e.getPropertyValue(G+"transform"),n=t&&"none"!==t||r&&"none"!==r;n||(Tt="")};i.setStyle=function(e,t,r){var n=e.style;if(t=t.replace(z,q).replace("-",""),"zIndex"===t)n[t]=isNaN(r)?r:""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{B&&(n[B+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(o){}};var it,lt,st,ct,ft,ut,mt,pt,dt,gt,vt,ht,yt,Tt,bt,St=i.addEvent=function(t,r,n){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1,t.defaultPrevented=!0}),n.call(this,t)};r=r.split(" ");for(var a,i=0,l=r.length;l>i;i++)a=r[i],t.addEventListener?t.addEventListener(a,n,!1):t.attachEvent("on"+a,o),Yt.push({element:t,name:a,listener:n})},kt=i.removeEvent=function(e,t,r){t=t.split(" ");for(var n=0,o=t.length;o>n;n++)e.removeEventListener?e.removeEventListener(t[n],r,!1):e.detachEvent("on"+t[n],r)},wt=function(){for(var e,t=0,r=Yt.length;r>t;t++)e=Yt[t],kt(e.element,e.name,e.listener);Yt=[]},xt=function(e,t,r){ct.keyframe&&ct.keyframe.call(it,e,t,r)},Et=function(){var e=it.getScrollTop();Ot=0,ft&&!Gt&&(a.style.height=""),j(),ft&&!Gt&&(a.style.height=Ot+o.clientHeight+"px"),Gt?it.setScrollTop(s.min(it.getScrollTop(),Ot)):it.setScrollTop(e,!0),ht=!0},At=function(){var e,t,r=o.clientHeight,n={};for(e in ut)t=ut[e],"function"==typeof t?t=t.call(it):/p$/.test(t)&&(t=t.slice(0,-1)/100*r),n[e]=t;return n},Ft=function(){var e=st&&st.offsetHeight||0,t=s.max(e,a.scrollHeight,a.offsetHeight,o.scrollHeight,o.offsetHeight,o.clientHeight);return t-o.clientHeight},Ct=function(t){var r="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[r],r="baseVal"),t[r]},Dt=function(t,n,o){var a="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[a],a="baseVal"),o===r)return t[a]=n,r;for(var i=t[a],l=0,s=o.length;s>l;l++)i=It(i).replace(It(o[l])," ");i=Ht(i);for(var c=0,f=n.length;f>c;c++)-1===It(i).indexOf(It(n[c]))&&(i+=" "+n[c]);t[a]=Ht(i)},Ht=function(e){return e.replace(P,"")},It=function(e){return" "+e+" "},Pt=Date.now||function(){return+new Date},Nt=function(e,t){return e.frame-t.frame},Ot=0,Vt=1,zt="down",qt=-1,Lt=Pt(),Mt=0,$t=0,_t=!1,Bt=0,Gt=!1,Kt=0,Yt=[];"function"==typeof define&&define.amd?define("skrollr",function(){return i}):"undefined"!=typeof module&&module.exports?module.exports=i:e.skrollr=i})(window,document);
/*!
 * smooth-scroll v12.1.5: Animate scrolling to anchor links
 * (c) 2017 Chris Ferdinandi
 * MIT License
 * http://github.com/cferdinandi/smooth-scroll
 */

(function (root, factory) {
	if ( typeof define === 'function' && define.amd ) {
		define([], (function () {
			return factory(root);
		}));
	} else if ( typeof exports === 'object' ) {
		module.exports = factory(root);
	} else {
		root.SmoothScroll = factory(root);
	}
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, (function (window) {

	'use strict';

	//
	// Feature Test
	//

	var supports =
		'querySelector' in document &&
		'addEventListener' in window &&
		'requestAnimationFrame' in window &&
		'closest' in window.Element.prototype;


	//
	// Default settings
	//

	var defaults = {
		// Selectors
		ignore: '[data-scroll-ignore]',
		header: null,

		// Speed & Easing
		speed: 500,
		offset: 0,
		easing: 'easeInOutCubic',
		customEasing: null,

		// Callback API
		before: function () {},
		after: function () {}
	};


	//
	// Utility Methods
	//

	/**
	 * Merge two or more objects. Returns a new object.
	 * @param {Object}   objects  The objects to merge together
	 * @returns {Object}          Merged values of defaults and options
	 */
	var extend = function () {

		// Variables
		var extended = {};
		var deep = false;
		var i = 0;
		var length = arguments.length;

		// Merge the object into the extended object
		var merge = function (obj) {
			for (var prop in obj) {
				if (obj.hasOwnProperty(prop)) {
					extended[prop] = obj[prop];
				}
			}
		};

		// Loop through each object and conduct a merge
		for ( ; i < length; i++ ) {
			var obj = arguments[i];
			merge(obj);
		}

		return extended;

	};

	/**
	 * Get the height of an element.
	 * @param  {Node} elem The element to get the height of
	 * @return {Number}    The element's height in pixels
	 */
	var getHeight = function (elem) {
		return parseInt(window.getComputedStyle(elem).height, 10);
	};

	/**
	 * Escape special characters for use with querySelector
	 * @param {String} id The anchor ID to escape
	 * @author Mathias Bynens
	 * @link https://github.com/mathiasbynens/CSS.escape
	 */
	var escapeCharacters = function (id) {

		// Remove leading hash
		if (id.charAt(0) === '#') {
			id = id.substr(1);
		}

		var string = String(id);
		var length = string.length;
		var index = -1;
		var codeUnit;
		var result = '';
		var firstCodeUnit = string.charCodeAt(0);
		while (++index < length) {
			codeUnit = string.charCodeAt(index);
			// Note: there’s no need to special-case astral symbols, surrogate
			// pairs, or lone surrogates.

			// If the character is NULL (U+0000), then throw an
			// `InvalidCharacterError` exception and terminate these steps.
			if (codeUnit === 0x0000) {
				throw new InvalidCharacterError(
					'Invalid character: the input contains U+0000.'
				);
			}

			if (
				// If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
				// U+007F, […]
				(codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F ||
				// If the character is the first character and is in the range [0-9]
				// (U+0030 to U+0039), […]
				(index === 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
				// If the character is the second character and is in the range [0-9]
				// (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
				(
					index === 1 &&
					codeUnit >= 0x0030 && codeUnit <= 0x0039 &&
					firstCodeUnit === 0x002D
				)
			) {
				// http://dev.w3.org/csswg/cssom/#escape-a-character-as-code-point
				result += '\\' + codeUnit.toString(16) + ' ';
				continue;
			}

			// If the character is not handled by one of the above rules and is
			// greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
			// is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
			// U+005A), or [a-z] (U+0061 to U+007A), […]
			if (
				codeUnit >= 0x0080 ||
				codeUnit === 0x002D ||
				codeUnit === 0x005F ||
				codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
				codeUnit >= 0x0041 && codeUnit <= 0x005A ||
				codeUnit >= 0x0061 && codeUnit <= 0x007A
			) {
				// the character itself
				result += string.charAt(index);
				continue;
			}

			// Otherwise, the escaped character.
			// http://dev.w3.org/csswg/cssom/#escape-a-character
			result += '\\' + string.charAt(index);

		}

		return '#' + result;

	};

	/**
	 * Calculate the easing pattern
	 * @link https://gist.github.com/gre/1650294
	 * @param {String} type Easing pattern
	 * @param {Number} time Time animation should take to complete
	 * @returns {Number}
	 */
	var easingPattern = function (settings, time) {
		var pattern;

		// Default Easing Patterns
		if (settings.easing === 'easeInQuad') pattern = time * time; // accelerating from zero velocity
		if (settings.easing === 'easeOutQuad') pattern = time * (2 - time); // decelerating to zero velocity
		if (settings.easing === 'easeInOutQuad') pattern = time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time; // acceleration until halfway, then deceleration
		if (settings.easing === 'easeInCubic') pattern = time * time * time; // accelerating from zero velocity
		if (settings.easing === 'easeOutCubic') pattern = (--time) * time * time + 1; // decelerating to zero velocity
		if (settings.easing === 'easeInOutCubic') pattern = time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1; // acceleration until halfway, then deceleration
		if (settings.easing === 'easeInQuart') pattern = time * time * time * time; // accelerating from zero velocity
		if (settings.easing === 'easeOutQuart') pattern = 1 - (--time) * time * time * time; // decelerating to zero velocity
		if (settings.easing === 'easeInOutQuart') pattern = time < 0.5 ? 8 * time * time * time * time : 1 - 8 * (--time) * time * time * time; // acceleration until halfway, then deceleration
		if (settings.easing === 'easeInQuint') pattern = time * time * time * time * time; // accelerating from zero velocity
		if (settings.easing === 'easeOutQuint') pattern = 1 + (--time) * time * time * time * time; // decelerating to zero velocity
		if (settings.easing === 'easeInOutQuint') pattern = time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * (--time) * time * time * time * time; // acceleration until halfway, then deceleration

		// Custom Easing Patterns
		if (!!settings.customEasing) pattern = settings.customEasing(time);

		return pattern || time; // no easing, no acceleration
	};

	/**
	 * Determine the document's height
	 * @returns {Number}
	 */
	var getDocumentHeight = function () {
		return Math.max(
			document.body.scrollHeight, document.documentElement.scrollHeight,
			document.body.offsetHeight, document.documentElement.offsetHeight,
			document.body.clientHeight, document.documentElement.clientHeight
		);
	};

	/**
	 * Calculate how far to scroll
	 * @param {Element} anchor The anchor element to scroll to
	 * @param {Number} headerHeight Height of a fixed header, if any
	 * @param {Number} offset Number of pixels by which to offset scroll
	 * @returns {Number}
	 */
	var getEndLocation = function (anchor, headerHeight, offset) {
		var location = 0;
		if (anchor.offsetParent) {
			do {
				location += anchor.offsetTop;
				anchor = anchor.offsetParent;
			} while (anchor);
		}
		location = Math.max(location - headerHeight - offset, 0);
		return location;
	};

	/**
	 * Get the height of the fixed header
	 * @param  {Node}   header The header
	 * @return {Number}        The height of the header
	 */
	var getHeaderHeight = function (header) {
		return !header ? 0 : (getHeight(header) + header.offsetTop);
	};

	/**
	 * Bring the anchored element into focus
	 * @param {Node}     anchor      The anchor element
	 * @param {Number}   endLocation The end location to scroll to
	 * @param {Boolean}  isNum       If true, scroll is to a position rather than an element
	 */
	var adjustFocus = function (anchor, endLocation, isNum) {

		// Don't run if scrolling to a number on the page
		if (isNum) return;

		// Otherwise, bring anchor element into focus
		anchor.focus();
		if (document.activeElement.id !== anchor.id) {
			anchor.setAttribute('tabindex', '-1');
			anchor.focus();
			anchor.style.outline = 'none';
		}
		window.scrollTo(0 , endLocation);

	};

	/**
	 * Check to see if user prefers reduced motion
	 * @param  {Object} settings Script settings
	 */
	var reduceMotion = function (settings) {
		if ('matchMedia' in window && window.matchMedia('(prefers-reduced-motion)').matches) {
			return true;
		}
		return false;
	};


	//
	// SmoothScroll Constructor
	//

	var SmoothScroll = function (selector, options) {

		//
		// Variables
		//

		var smoothScroll = {}; // Object for public APIs
		var settings, anchor, toggle, fixedHeader, headerHeight, eventTimeout, animationInterval;


		//
		// Methods
		//

		/**
		 * Cancel a scroll-in-progress
		 */
		smoothScroll.cancelScroll = function () {
			// clearInterval(animationInterval);
			cancelAnimationFrame(animationInterval);
		};

		/**
		 * Start/stop the scrolling animation
		 * @param {Node|Number} anchor  The element or position to scroll to
		 * @param {Element}     toggle  The element that toggled the scroll event
		 * @param {Object}      options
		 */
		smoothScroll.animateScroll = function (anchor, toggle, options) {

			// Local settings
			var animateSettings = extend(settings || defaults, options || {}); // Merge user options with defaults

			// Selectors and variables
			var isNum = Object.prototype.toString.call(anchor) === '[object Number]' ? true : false;
			var anchorElem = isNum || !anchor.tagName ? null : anchor;
			if (!isNum && !anchorElem) return;
			var startLocation = window.pageYOffset; // Current location on the page
			if (animateSettings.header && !fixedHeader) {
				// Get the fixed header if not already set
				fixedHeader = document.querySelector( animateSettings.header );
			}
			if (!headerHeight) {
				// Get the height of a fixed header if one exists and not already set
				headerHeight = getHeaderHeight(fixedHeader);
			}
			var endLocation = isNum ? anchor : getEndLocation(anchorElem, headerHeight, parseInt((typeof animateSettings.offset === 'function' ? animateSettings.offset() : animateSettings.offset), 10)); // Location to scroll to
			var distance = endLocation - startLocation; // distance to travel
			var documentHeight = getDocumentHeight();
			var timeLapsed = 0;
			var start, percentage, position;

			/**
			 * Stop the scroll animation when it reaches its target (or the bottom/top of page)
			 * @param {Number} position Current position on the page
			 * @param {Number} endLocation Scroll to location
			 * @param {Number} animationInterval How much to scroll on this loop
			 */
			var stopAnimateScroll = function (position, endLocation) {

				// Get the current location
				var currentLocation = window.pageYOffset;

				// Check if the end location has been reached yet (or we've hit the end of the document)
				if ( position == endLocation || currentLocation == endLocation || ((startLocation < endLocation && window.innerHeight + currentLocation) >= documentHeight )) {

					// Clear the animation timer
					smoothScroll.cancelScroll();

					// Bring the anchored element into focus
					adjustFocus(anchor, endLocation, isNum);

					// Run callback after animation complete
					animateSettings.after(anchor, toggle);

					// Reset start
					start = null;

					return true;

				}
			};

			/**
			 * Loop scrolling animation
			 */
			var loopAnimateScroll = function (timestamp) {
				if (!start) { start = timestamp; }
				timeLapsed += timestamp - start;
				percentage = (timeLapsed / parseInt(animateSettings.speed, 10));
				percentage = (percentage > 1) ? 1 : percentage;
				position = startLocation + (distance * easingPattern(animateSettings, percentage));
				window.scrollTo(0, Math.floor(position));
				if (!stopAnimateScroll(position, endLocation)) {
					window.requestAnimationFrame(loopAnimateScroll);
					start = timestamp;
				}
			};

			/**
			 * Reset position to fix weird iOS bug
			 * @link https://github.com/cferdinandi/smooth-scroll/issues/45
			 */
			if (window.pageYOffset === 0) {
				window.scrollTo( 0, 0 );
			}

			// Run callback before animation starts
			animateSettings.before(anchor, toggle);

			// Start scrolling animation
			smoothScroll.cancelScroll();
			window.requestAnimationFrame(loopAnimateScroll);


		};

		/**
		 * Handle has change event
		 */
		var hashChangeHandler = function (event) {

			// Only run if there's an anchor element to scroll to
			if (!anchor) return;

			// Reset the anchor element's ID
			anchor.id = anchor.getAttribute('data-scroll-id');

			// Scroll to the anchored content
			smoothScroll.animateScroll(anchor, toggle);

			// Reset anchor and toggle
			anchor = null;
			toggle = null;

		};

		/**
		 * If smooth scroll element clicked, animate scroll
		 */
		var clickHandler = function (event) {

			// Don't run if the user prefers reduced motion
			if (reduceMotion(settings)) return;

			// Don't run if right-click or command/control + click
			if (event.button !== 0 || event.metaKey || event.ctrlKey) return;

			// Check if a smooth scroll link was clicked
			toggle = event.target.closest(selector);
			if (!toggle || toggle.tagName.toLowerCase() !== 'a' || event.target.closest(settings.ignore)) return;

			// Only run if link is an anchor and points to the current page
			if (toggle.hostname !== window.location.hostname || toggle.pathname !== window.location.pathname || !/#/.test(toggle.href)) return;

			// Get the sanitized hash
			var hash;
			try {
				hash = escapeCharacters(decodeURIComponent(toggle.hash));
			} catch(e) {
				hash = escapeCharacters(toggle.hash);
			}

			// If the hash is empty, scroll to the top of the page
			if (hash === '#') {

				// Prevent default link behavior
				event.preventDefault();

				// Set the anchored element
				anchor = document.body;

				// Save or create the ID as a data attribute and remove it (prevents scroll jump)
				var id = anchor.id ? anchor.id : 'smooth-scroll-top';
				anchor.setAttribute('data-scroll-id', id);
				anchor.id = '';

				// If no hash change event will happen, fire manually
				// Otherwise, update the hash
				if (window.location.hash.substring(1) === id) {
					hashChangeHandler();
				} else {
					window.location.hash = id;
				}

				return;

			}

			// Get the anchored element
			anchor = document.querySelector(hash);

			// If anchored element exists, save the ID as a data attribute and remove it (prevents scroll jump)
			if (!anchor) return;
			anchor.setAttribute('data-scroll-id', anchor.id);
			anchor.id = '';

			// If no hash change event will happen, fire manually
			if (toggle.hash === window.location.hash) {
				event.preventDefault();
				hashChangeHandler();
			}

		};

		/**
		 * On window scroll and resize, only run events at a rate of 15fps for better performance
		 */
		var resizeThrottler = function (event) {
			if (!eventTimeout) {
				eventTimeout = setTimeout((function() {
					eventTimeout = null; // Reset timeout
					headerHeight = getHeaderHeight(fixedHeader); // Get the height of a fixed header if one exists
				}), 66);
			}
		};

		/**
		 * Destroy the current initialization.
		 */
		smoothScroll.destroy = function () {

			// If plugin isn't already initialized, stop
			if (!settings) return;

			// Remove event listeners
			document.removeEventListener('click', clickHandler, false);
			window.removeEventListener('resize', resizeThrottler, false);

			// Cancel any scrolls-in-progress
			smoothScroll.cancelScroll();

			// Reset variables
			settings = null;
			anchor = null;
			toggle = null;
			fixedHeader = null;
			headerHeight = null;
			eventTimeout = null;
			animationInterval = null;
		};

		/**
		 * Initialize Smooth Scroll
		 * @param {Object} options User settings
		 */
		smoothScroll.init = function (options) {

			// feature test
			if (!supports) return;

			// Destroy any existing initializations
			smoothScroll.destroy();

			// Selectors and variables
			settings = extend(defaults, options || {}); // Merge user options with defaults
			fixedHeader = settings.header ? document.querySelector(settings.header) : null; // Get the fixed header
			headerHeight = getHeaderHeight(fixedHeader);

			// When a toggle is clicked, run the click handler
			document.addEventListener('click', clickHandler, false);

			// Listen for hash changes
			window.addEventListener('hashchange', hashChangeHandler, false);

			// If window is resized and there's a fixed header, recalculate its size
			if (fixedHeader) {
				window.addEventListener('resize', resizeThrottler, false);
			}

		};


		//
		// Initialize plugin
		//

		smoothScroll.init(options);


		//
		// Public APIs
		//

		return smoothScroll;

	};

	return SmoothScroll;

}));
/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-touchevents-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,a,i,r;for(var l in c)if(c.hasOwnProperty(l)){if(e=[],n=c[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],r=i.split("."),1===r.length?Modernizr[r[0]]=s:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=s),f.push((s?"":"no-")+r.join("-"))}}function a(e){var n=u.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?u.className.baseVal=n:u.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=i(p?"svg":"body"),e.fake=!0),e}function l(e,t,o,s){var a,l,f,c,d="modernizr",p=i("div"),h=r();if(parseInt(o,10))for(;o--;)f=i("div"),f.id=s?s[o]:d+(o+1),p.appendChild(f);return a=i("style"),a.type="text/css",a.id="s"+d,(h.fake?h:p).appendChild(a),h.appendChild(p),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),p.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",c=u.style.overflow,u.style.overflow="hidden",u.appendChild(h)),l=t(p,e),h.fake?(h.parentNode.removeChild(h),u.style.overflow=c,u.offsetHeight):p.parentNode.removeChild(p),!!l}var f=[],c=[],d={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){c.push({name:e,fn:n,options:t})},addAsyncTest:function(e){c.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=d,Modernizr=new Modernizr;var u=n.documentElement,p="svg"===u.nodeName.toLowerCase(),h=d._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];d._prefixes=h;var m=d.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",h.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(o,function(e){t=9===e.offsetTop})}return t}),s(),a(f),delete d.addTest,delete d.addAsyncTest;for(var v=0;v<Modernizr._q.length;v++)Modernizr._q[v]();e.Modernizr=Modernizr}(window,document);
var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'data.json'
})


$(document).ready(function () {

  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    easing: 'easeOutCubic'
  });

  if($('html').hasClass('no-touchevents')) {
    var s = skrollr.init()
  }

  var sticky = new Waypoint.Sticky({
    element: $('.header')[0]
  })

  var browserWidth = $(window).width();

  $(window).resize(function () {
    var browserWidth = $(window).width();
    console.log(browserWidth)
  });

  if(browserWidth > 768) {
    console.log('Desktop');
    // Show/Hide Header on scroll
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.header').outerHeight();

    // on scroll, let the interval function know the user has scrolled
    $(window).scroll(function(event){
      didScroll = true;
    });
    // run hasScrolled() and reset didScroll status
    setInterval(function() {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 250);
    function hasScrolled() {
      // do stuff here...
      var st = $(this).scrollTop();
      // var introHeight = 800
      var introHeight = $(window).height();
      // console.log("Window height " + introHeight);
      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
      return;

      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > introHeight){
          // Scroll Down
          $('.header').removeClass('nav-down').addClass('nav-up');
      } else {
          // Scroll Up
          if(st + $(window).height() < $(document).height()) {
              $('.header').removeClass('nav-up').addClass('nav-down');
          }
      }

      lastScrollTop = st;
      // console.log(st);
    }

  }


  // Animated Carousel Progress Bar
  var percent = 0, bar = $('.transition-timer-carousel-progress-bar'), crsl = $('#carouselHowItWorks');
  function progressBarCarousel() {
    bar.css({ width: percent + '%' });
    percent = percent + 0.5;
    if (percent > 100) {
      percent = 0;
      crsl.carousel('next');
    }
  }
  crsl.carousel({
    interval: false,
    pause: true
  }).on('slid.bs.carousel', function () { }); var barInterval = setInterval(progressBarCarousel, 30);
  crsl.hover(
    function () {
      clearInterval(barInterval);
    },
    function () {
      barInterval = setInterval(progressBarCarousel, 30);
    })
});

//# sourceMappingURL=app.js.map
