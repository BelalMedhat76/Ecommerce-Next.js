(()=>{var e={};e.id=931,e.ids=[931,651],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},9796:e=>{"use strict";e.exports=require("zlib")},6670:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>u,routeModule:()=>m,tree:()=>c}),n(8426),n(2029),n(5866);var r=n(3191),i=n(8716),a=n(7922),o=n.n(a),s=n(5231),l={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);n.d(t,l);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,8426)),"/home/countzero/Ecommerce-Next.js/src/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(n.bind(n,2029)),"/home/countzero/Ecommerce-Next.js/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/home/countzero/Ecommerce-Next.js/src/app/page.tsx"],d="/page",p={require:n,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},5625:(e,t,n)=>{Promise.resolve().then(n.bind(n,4164)),Promise.resolve().then(n.bind(n,9073)),Promise.resolve().then(n.bind(n,1099))},340:(e,t,n)=>{"use strict";var r=n(7577);function i(e){return Array.prototype.slice.call(e)}function a(e,t){var n=Math.floor(e);return n===t||n+1===t?e:t}function o(){return Date.now()}function s(e,t,n){if(t="data-keen-slider-"+t,null===n)return e.removeAttribute(t);e.setAttribute(t,n||"")}function l(e,t){return t=t||document,"function"==typeof e&&(e=e(t)),Array.isArray(e)?e:"string"==typeof e?i(t.querySelectorAll(e)):e instanceof HTMLElement?[e]:e instanceof NodeList?i(e):[]}function c(e){e.raw&&(e=e.raw),e.cancelable&&!e.defaultPrevented&&e.preventDefault()}function u(e){e.raw&&(e=e.raw),e.stopPropagation&&e.stopPropagation()}function d(){var e=[];return{add:function(t,n,r,i){t.addListener?t.addListener(r):t.addEventListener(n,r,i),e.push([t,n,r,i])},input:function(e,t,n,r){this.add(e,t,function(e){e.nativeEvent&&(e=e.nativeEvent);var t=e.changedTouches||[],r=e.targetTouches||[],i=e.detail&&e.detail.x?e.detail:null;return n({id:i?i.identifier?i.identifier:"i":r[0]?r[0]?r[0].identifier:"e":"d",idChanged:i?i.identifier?i.identifier:"i":t[0]?t[0]?t[0].identifier:"e":"d",raw:e,x:i&&i.x?i.x:r[0]?r[0].screenX:i?i.x:e.pageX,y:i&&i.y?i.y:r[0]?r[0].screenY:i?i.y:e.pageY})},r)},purge:function(){e.forEach(function(e){e[0].removeListener?e[0].removeListener(e[2]):e[0].removeEventListener(e[1],e[2],e[3])}),e=[]}}}function p(e,t,n){return Math.min(Math.max(e,t),n)}function m(e){return(e>0?1:0)-(e<0?1:0)||+e}function f(e){var t=e.getBoundingClientRect();return{height:a(t.height,e.offsetHeight),width:a(t.width,e.offsetWidth)}}function x(e,t,n,r){var i=e&&e[t];return null==i?n:r&&"function"==typeof i?i():i}function h(e){return Math.round(1e6*e)/1e6}var g=function(){return(g=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function v(e,t,n){if(n||2==arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}function b(e){var t,n,r,i,a,o,s,l;function c(e){return 1-Math.pow(1-e,3)}function u(){return r?e.track.velocity():0}function d(e,t){void 0===t&&(t=1e3);var n=147e-9+(e=Math.abs(e))/t;return{dist:Math.pow(e,2)/n,dur:e/n}}function f(){var t=e.track.details;t&&(a=t.min,o=t.max,s=t.minIdx,l=t.maxIdx)}function x(){e.animator.stop()}e.on("updated",f),e.on("optionsChanged",f),e.on("created",f),e.on("dragStarted",function(){r=!1,x(),t=n=e.track.details.abs}),e.on("dragChecked",function(){r=!0}),e.on("dragEnded",function(){var r,f,h,g,v,b,y=e.options.mode;"snap"===y&&(r=e.track,h=(f=e.track.details).position,g=m(u()),(h>o||h<a)&&(g=0),v=t+g,0===f.slides[r.absToRel(v)].portion&&(v-=g),t!==n&&(v=n),m(r.idxToDist(v,!0))!==g&&(v+=g),v=p(v,s,l),b=r.idxToDist(v,!0),e.animator.start([{distance:b,duration:500,easing:function(e){return 1+--e*e*e*e*e}}])),"free"!==y&&"free-snap"!==y||function(){x();var t="free-snap"===e.options.mode,n=e.track,r=u();i=m(r);var f=e.track.details,h=[];if(r||!t){var g=d(r),v=g.dist,b=g.dur;if(b*=2,v*=i,t){var y=n.idxToDist(n.distToIdx(v),!0);y&&(v=y)}h.push({distance:v,duration:b,easing:c});var w=f.position,j=w+v;if(j<a||j>o){var k=j<a?a-w:o-w,N=0,M=r;if(m(k)===i){var z=Math.min(Math.abs(k)/Math.abs(v),1),P=(1-Math.pow(1-z,1/3))*b;h[0].earlyExit=P,M=r*(1-z)}else h[0].earlyExit=0,N+=k;var S=d(M,100),C=S.dist*i;e.options.rubberband&&(h.push({distance:C,duration:2*S.dur,easing:c}),h.push({distance:-C+N,duration:500,easing:c}))}e.animator.start(h)}else e.moveToIdx(p(f.abs,s,l),!0,{duration:500,easing:function(e){return 1+--e*e*e*e*e}})}()}),e.on("dragged",function(){n=e.track.details.abs})}function y(e){var t,n,r,i,a,o,s,f,x,h,g,v,b,y,w,j,k,N,M=d();function z(t){if(o&&f===t.id){var l=E(t);if(x){if(!C(t))return S(t);h=l,x=!1,e.emit("dragChecked")}if(j)return h=l;c(t);var d=function(t){if(k===-1/0&&N===1/0)return t;var r=e.track.details,o=r.length,s=r.position,l=p(t,k-s,N-s);if(0===o)return 0;if(!e.options.rubberband)return l;if(s<=N&&s>=k||s<k&&n>0||s>N&&n<0)return t;var c=Math.max(0,1-Math.abs((s<k?s-k:s-N)/o*(i*o))/a*2);return c*c*t}(s(h-l)/i*r);n=m(d);var b=e.track.details.position;(b>k&&b<N||b===k&&n>0||b===N&&n<0)&&u(t),g+=d,!v&&Math.abs(g*i)>5&&(v=!0),e.track.add(d),h=l,e.emit("dragged")}}function P(t){!o&&e.track.details&&e.track.details.length&&(g=0,o=!0,v=!1,x=!0,f=t.id,C(t),h=E(t),e.emit("dragStarted"))}function S(t){o&&f===t.idChanged&&(o=!1,e.emit("dragEnded"))}function C(e){var t=T(),n=t?e.y:e.x,r=t?e.x:e.y,i=void 0!==b&&void 0!==y&&Math.abs(y-r)<=Math.abs(b-n);return b=n,y=r,i}function E(e){return T()?e.y:e.x}function T(){return e.options.vertical}function _(){i=e.size,a=T()?window.innerHeight:window.innerWidth;var t=e.track.details;t&&(k=t.min,N=t.max)}function A(e){v&&(u(e),c(e))}function q(){if(M.purge(),e.options.drag&&!e.options.disabled){s="function"==typeof(i=e.options.dragSpeed||1)?i:function(e){return e*i},r=e.options.rtl?-1:1,_(),t=e.container,n="data-keen-slider-clickable",l("[".concat(n,"]:not([").concat(n,"=false])"),t).map(function(e){M.add(e,"dragstart",u),M.add(e,"mousedown",u),M.add(e,"touchstart",u)}),M.add(t,"dragstart",function(e){c(e)}),M.add(t,"click",A,{capture:!0}),M.input(t,"ksDragStart",P),M.input(t,"ksDrag",z),M.input(t,"ksDragEnd",S),M.input(t,"mousedown",P),M.input(t,"mousemove",z),M.input(t,"mouseleave",S),M.input(t,"mouseup",S),M.input(t,"touchstart",P,{passive:!0}),M.input(t,"touchmove",z,{passive:!1}),M.input(t,"touchend",S),M.input(t,"touchcancel",S),M.add(window,"wheel",function(e){o&&c(e)});var n,i,a="data-keen-slider-scrollable";l("[".concat(a,"]:not([").concat(a,"=false])"),e.container).map(function(e){var t;M.input(e,"touchstart",function(e){t=E(e),j=!0,w=!0},{passive:!0}),M.input(e,"touchmove",function(n){var r=T(),i=r?e.scrollHeight-e.clientHeight:e.scrollWidth-e.clientWidth,a=t-E(n),o=r?e.scrollTop:e.scrollLeft,s=r&&"scroll"===e.style.overflowY||!r&&"scroll"===e.style.overflowX;if(t=E(n),(a<0&&o>0||a>0&&o<i)&&w&&s)return j=!0;w=!1,c(n),j=!1}),M.input(e,"touchend",function(){j=!1})})}}e.on("updated",_),e.on("optionsChanged",q),e.on("created",q),e.on("destroyed",M.purge)}function w(e){var t,n,r=null;function i(t,n,r){e.animator.active?o(t,n,r):requestAnimationFrame(function(){return o(t,n,r)})}function a(){i(!1,!1,n)}function o(n,i,a){var o=0,s=e.size,u=e.track.details;if(u&&t){var d=u.slides;t.forEach(function(e,t){if(n)!r&&i&&l(e,null,a),c(e,null,a);else{if(!d[t])return;var u=d[t].size*s;!r&&i&&l(e,u,a),c(e,d[t].distance*s-o,a),o+=u}})}}function s(t){return"performance"===e.options.renderMode?Math.round(t):t}function l(e,t,n){var r=n?"height":"width";null!==t&&(t=s(t)+"px"),e.style["min-"+r]=t,e.style["max-"+r]=t}function c(e,t,n){if(null!==t){t=s(t);var r=n?t:0;t="translate3d(".concat(n?0:t,"px, ").concat(r,"px, 0)")}e.style.transform=t,e.style["-webkit-transform"]=t}function u(){t&&(o(!0,!0,n),t=null),e.on("detailsChanged",a,!0)}function d(){i(!1,!0,n)}function p(){u(),n=e.options.vertical,e.options.disabled||"custom"===e.options.renderMode||(r="auto"===x(e.options.slides,"perView",null),e.on("detailsChanged",a),(t=e.slides).length&&d())}e.on("created",p),e.on("optionsChanged",p),e.on("beforeOptionsChanged",function(){u()}),e.on("updated",d),e.on("destroyed",u)}var j=function(e,t,n){try{var r,i,a,c;return i=v([(r={drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"},function(t){var n,i,a,o,c,u,p=d();function m(e){var n;s(t.container,"reverse","rtl"!==(n=t.container,window.getComputedStyle(n,null).getPropertyValue("direction"))||e?null:""),s(t.container,"v",t.options.vertical&&!e?"":null),s(t.container,"disabled",t.options.disabled&&!e?"":null)}function h(){v()&&j()}function v(){var e=null;if(o.forEach(function(t){t.matches&&(e=t.__media)}),e===n)return!1;n||t.emit("beforeOptionsChanged"),n=e;var r=e?a.breakpoints[e]:a;return t.options=g(g({},a),r),m(),P(),S(),N(),!0}function b(){return t.options.trackConfig.length}function y(e){for(var s in n=!1,a=g(g({},r),e),p.purge(),i=t.size,o=[],a.breakpoints||[]){var l=window.matchMedia(s);l.__media=s,o.push(l),p.add(l,"change",h)}p.add(window,"orientationchange",z),p.add(window,"resize",M),v()}function w(e){t.animator.stop();var n=t.track.details;t.track.init(null!=e?e:n?n.abs:0)}function j(e){w(e),t.emit("optionsChanged")}function k(e,n){if(e)return y(e),void j(n);P(),S();var r=b();N(),b()!==r?j(n):w(n),t.emit("updated")}function N(){var e=t.options.slides;if("function"==typeof e)return t.options.trackConfig=e(t.size,t.slides);for(var n=t.slides,r=n.length,i="number"==typeof e?e:x(e,"number",r,!0),a=[],o=x(e,"perView",1,!0),s=x(e,"spacing",0,!0)/t.size||0,l="auto"===o?s:s/o,c=x(e,"origin","auto"),u=0,d=0;d<i;d++){var p="auto"===o?function(e){var n=f(e);return(t.options.vertical?n.height:n.width)/t.size||1}(n[d]):1/o-s+l,m="center"===c?.5-p/2:"auto"===c?0:c;a.push({origin:m,size:p,spacing:s}),u+=p}if(u+=s*(i-1),"auto"===c&&!t.options.loop&&1!==o){var h=0;a.map(function(e){var t=u-h;return h+=e.size+s,t>=1||(e.origin=1-t-(u>1?0:1-u)),e})}t.options.trackConfig=a}function M(){P();var e=t.size;t.options.disabled||e===i||(i=e,k())}function z(){M(),setTimeout(M,500),setTimeout(M,2e3)}function P(){var e=f(t.container);t.size=(t.options.vertical?e.height:e.width)||1}function S(){t.slides=l(t.options.selector,t.container)}t.container=(u=l(e,c||document)).length?u[0]:null,t.destroy=function(){p.purge(),t.emit("destroyed"),m(!0)},t.prev=function(){t.moveToIdx(t.track.details.abs-1,!0)},t.next=function(){t.moveToIdx(t.track.details.abs+1,!0)},t.update=k,y(t.options)}),w,y,b],n||[],!0),c={},a={emit:function(e){c[e]&&c[e].forEach(function(e){e(a)});var t=a.options&&a.options[e];t&&t(a)},moveToIdx:function(e,t,n){var r=a.track.idxToDist(e,t);if(r){var i=a.options.defaultAnimation;a.animator.start([{distance:r,duration:x(n||i,"duration",500),easing:x(n||i,"easing",function(e){return 1+--e*e*e*e*e})}])}},on:function(e,t,n){void 0===n&&(n=!1),c[e]||(c[e]=[]);var r=c[e].indexOf(t);r>-1?n&&delete c[e][r]:n||c[e].push(t)},options:t},function(){if(a.track=function(e){var t,n,r,i,a,s,l,c,u,d,f,g,b,y,w=1/0,j=[],k=null,N=0;function M(e){_(N+e)}function z(e){var t=P(N+e).abs;return E(t)===t?t:null}function P(e){var t=Math.floor(Math.abs(h(e/n))),r=h((e%n+n)%n);r===n&&(r=0);var i=m(e),a=l.indexOf(v([],l,!0).reduce(function(e,t){return Math.abs(t-r)<Math.abs(e-r)?t:e})),o=a;return i<0&&t++,a===s&&(o=0,t+=i>0?1:-1),{abs:o+t*s*i,origin:a,rel:o}}function S(e,t,n){if(t||!i.loop)return C(e,n);if(E(e)!==e)return null;var r,a=P(null!=n?n:N),o=a.abs,l=e-a.rel,c=o+l;r=C(c);var u=C(c-s*m(l));return(null!==u&&Math.abs(u)<Math.abs(r)||null===r)&&(r=u),h(r)}function C(e,t){if(null==t&&(t=h(N)),r=e,E(r)!==r||null===e)return null;e=Math.round(e);var r,i=P(t),a=i.abs,o=i.rel,c=i.origin,u=T(e),d=(t%n+n)%n,p=l[c],m=Math.floor((e-(a-o))/s)*n;return h(p-d-p+l[u]+m+(c===s?n:0))}function E(e){return p(e,u,d)}function T(e){return(e%s+s)%s}function _(t){n=t-N,j.push({distance:n,timestamp:o()}),j.length>6&&(j=j.slice(-6)),N=h(t);var n,r=A().abs;if(r!==k){var i=null!==k;k=r,i&&e.emit("slideChanged")}}function A(o){var l=o?null:function(){if(s){var e=i.loop,t=e?(N%n+n)%n:N,o=(e?N%n:N)-a[0][2],l=0-(o<0&&e?n-Math.abs(o):o),c=0,p=P(N),x=p.abs,h=p.rel,v=a[h][2],w=a.map(function(t,r){var a=l+c;(a<0-t[0]||a>1)&&(a+=(Math.abs(a)>n-1&&e?n:0)*m(-a));var o=r-h,u=m(o),d=o+x;e&&(-1===u&&a>v&&(d+=s),1===u&&a<v&&(d-=s),null!==f&&d<f&&(a+=n),null!==g&&d>g&&(a-=n));var p=a+t[0]+t[1],b=Math.max(a>=0&&p<=1?1:p<0||a>1?0:a<0?Math.min(1,(t[0]+a)/t[0]):(1-a)/t[0],0);return c+=t[0]+t[1],{abs:d,distance:i.rtl?-1*a+1-t[0]:a,portion:b,size:t[0]}});return h=T(x=E(x)),{abs:E(x),length:r,max:y,maxIdx:d,min:b,minIdx:u,position:N,progress:e?t/n:N/r,rel:h,slides:w,slidesLength:n}}}();return t.details=l,e.emit("detailsChanged"),l}return t={absToRel:T,add:M,details:null,distToIdx:z,idxToDist:S,init:function(t){var o,p,m,v;if(function(){if(s=(a=((i=e.options).trackConfig||[]).map(function(e){return[x(e,"size",1),x(e,"spacing",0),x(e,"origin",0)]})).length){n=h(a.reduce(function(e,t){return e+t[0]+t[1]},0));var t,o=s-1;r=h(n+a[0][2]-a[o][0]-a[o][2]-a[o][1]),l=a.reduce(function(e,n){if(!e)return[0];var r=a[e.length-1],i=e[e.length-1]+(r[0]+r[2])+r[1];return i-=n[2],e[e.length-1]>i&&(i=e[e.length-1]),i=h(i),e.push(i),(!t||t<i)&&(c=e.length-1),t=i,e},null),0===r&&(c=0),l.push(h(n))}}(),!s)return A(!0);o=e.options.range,f=u=(p=e.options.loop)?x(p,"min",-1/0):0,g=d=p?x(p,"max",w):c,m=x(o,"min",null),v=x(o,"max",null),null!==m&&(u=m),null!==v&&(d=v),b=u===-1/0?u:e.track.idxToDist(u||0,!0,0),y=d===w?d:S(d,!0,0),null===v&&(g=d),x(o,"align",!1)&&d!==w&&0===a[T(d)][2]&&(y-=1-a[T(d)][0],d=z(y-N)),b=h(b),y=h(y),Number(t)===t?M(C(E(t))):A()},to:_,velocity:function(){var e=o(),t=j.reduce(function(t,n){var r=n.distance,i=n.timestamp;return e-i>200||(m(r)!==m(t.distance)&&t.distance&&(t={distance:0,lastTimestamp:0,time:0}),t.time&&(t.distance+=r),t.lastTimestamp&&(t.time+=i-t.lastTimestamp),t.lastTimestamp=i),t},{distance:0,lastTimestamp:0,time:0});return t.distance/t.time||0}}}(a),a.animator=function(e){var t,n,r,i,a,o;function s(e){t.active=e}function l(e){t.targetIdx=e}function c(){var t;t=a,window.cancelAnimationFrame(t),s(!1),l(null),o&&e.emit("animationStopped"),o=null}return t={active:!1,start:function(t){if(c(),e.track.details){var u=0,d=e.track.details.position;n=0,r=0,i=t.map(function(e){var t,n=Number(d),i=null!==(t=e.earlyExit)&&void 0!==t?t:e.duration,a=e.easing,o=e.distance*a(i/e.duration)||0;d+=o;var s=r;return r+=i,u+=o,[n,e.distance,s,r,e.duration,a]}),l(e.track.distToIdx(u)),function t(){var c;c=function a(c){o||(o=c),s(!0);var u=c-o;u>r&&(u=r);var d=i[n];if(d[3]<u)return n++,a(c);var p=d[2],m=d[4],f=d[0],x=d[1]*(0,d[5])(0===m?1:(u-p)/m);if(x&&e.track.to(f+x),u<r)return t();o=null,s(!1),l(null),e.emit("animationEnded")},a=window.requestAnimationFrame(c)}(),e.emit("animationStarted")}},stop:c,targetIdx:null}}(a),i)for(var e=0;e<i.length;e++)(0,i[e])(a);a.track.init(a.options.initial||0),a.emit("created")}(),a}catch(e){console.error(e)}};t.E=function(e,t){var n=r.useRef(null),i=r.useRef(!1),a=r.useRef(e),o=r.useCallback(function(r){r?(a.current=e,n.current=new j(r,e,t),i.current=!1):(n.current&&n.current.destroy&&n.current.destroy(),n.current=null)},[]);return r.useEffect(function(){(function e(t,n){if(t===n)return!0;var r=typeof t;if(r!==typeof n)return!1;if("object"!==r||null===t||null===n)return"function"===r&&t.toString()===n.toString();if(t.length!==n.length||Object.getOwnPropertyNames(t).length!==Object.getOwnPropertyNames(n).length)return!1;for(var i in t)if(!e(t[i],n[i]))return!1;return!0})(a.current,e)||(a.current=e,n.current&&n.current.update(a.current))},[e]),[o,n]}},4164:(e,t,n)=>{"use strict";n.d(t,{default:()=>s});var r=n(326);n(7577);var i=n(340),a=n(6226),o=n(434);n(5449),n(3824);let s=()=>{let[e]=(0,i.E)({loop:!0,slides:{perView:4,spacing:15},breakpoints:{"(max-width: 1024px)":{slides:{perView:3,spacing:10}},"(max-width: 768px)":{slides:{perView:2,spacing:10}},"(max-width: 480px)":{slides:{perView:1,spacing:10}}}});return r.jsx("div",{className:"mt-12 mx-5 md:px-8 flex gap-x-8 gap-y-16 justify-between flex-wrap",children:r.jsx("div",{ref:e,className:"keen-slider",children:[{title:"Faux Velvet Sofa",image:"https://images.pexels.com/photos/12474787/pexels-photo-12474787.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",link:"/list"},{title:"Fllufy Sheep Sofa",image:"https://images.pexels.com/photos/7750027/pexels-photo-7750027.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",link:"/list"},{title:"Sakarias Armchair",image:"https://images.pexels.com/photos/8280276/pexels-photo-8280276.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",link:"/list"},{title:"Modern Arm Sofa",image:"https://images.pexels.com/photos/27459784/pexels-photo-27459784/free-photo-of-a-living-room-with-two-chairs-and-a-yellow-pillow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",link:"/list"},{title:"Baltsar Chair",image:"https://images.pexels.com/photos/9890440/pexels-photo-9890440.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",link:"/list"},{title:"Helmar Chair",image:"https://images.pexels.com/photos/15226148/pexels-photo-15226148/free-photo-of-throw-pillow-on-sofa.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",link:"/list"},{title:"Apple iPhone 12 Pro",image:"https://images.pexels.com/photos/28609810/pexels-photo-28609810/free-photo-of-contemporary-living-room-interior-design-with-minimalist-decor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",link:"/list"},{title:"Sakarias Armchair",image:"https://images.pexels.com/photos/276510/pexels-photo-276510.jpeg?auto=compress&cs=tinysrgb&w=600",link:"/list"},{title:"Baltsar Chair",image:"https://images.pexels.com/photos/1436142/pexels-photo-1436142.jpeg?auto=compress&cs=tinysrgb&w=600",link:"/list"},{title:"Helmar Chair",image:"https://images.pexels.com/photos/3615751/pexels-photo-3615751.jpeg?auto=compress&cs=tinysrgb&w=600",link:"/list"}].map((e,t)=>r.jsx("div",{className:"keen-slider__slide",children:(0,r.jsxs)(o.default,{href:e.link,className:"cardImg flex-shrink-0",children:[r.jsx("div",{className:"relative bg-slate-100 w-full h-96",children:r.jsx(a.default,{src:e.image,alt:e.title,fill:!0,sizes:"20vw",className:"object-cover"})}),r.jsx("h1",{className:"mt-0 p-10 text-center font-light text-xl tracking-wide",children:e.title})]})},t))})})}},9073:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var r=n(326),i=n(7577),a=n(434),o=n(7282),s=n(6226),l=n(6109);function c(){let e=e=>{let t=e.split(" ");return t.slice(0,8).join(" ")+(t.length>10?"...":"")},[t,n]=(0,i.useState)(8);return l.useRouter,(0,r.jsxs)("div",{className:"mt-12 mx-5     md:px-8 flex gap-x-8 gap-y-16 justify-between flex-wrap",children:[o.ZP.slice(0,t).map(t=>(0,r.jsxs)(a.default,{href:`/product/${t.id}`,className:"w-full cardImg flex flex-col gap-4 sm:w-[45%] lg:w-[22%]",children:[(0,r.jsxs)("div",{className:"relative w-full h-80",children:[r.jsx(s.default,{src:t.imgUrl,alt:t.productName,className:"absolute   object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"}),r.jsx(s.default,{src:t.imgUrl,alt:t.productName,className:"absolute object-cover rounded-md "})]}),(0,r.jsxs)("div",{className:"flex justify-between",children:[r.jsx("span",{className:"font-medium",style:{fontSize:"20px"},children:t.category}),(0,r.jsxs)("span",{className:"font-semibold",style:{fontSize:"20px"},children:["$",t.price]})]}),r.jsx("div",{className:"text-sm text-gray-500 ",children:e(t.shortDesc)}),r.jsx("button",{className:"rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white",children:"Add to Cart"})]},t.id)),t<o.ZP.length&&r.jsx("button",{onClick:()=>{n(e=>e+8)},className:"load-more-button",style:{fontSize:"20px"},children:"Read More"})]})}},1099:(e,t,n)=>{"use strict";n.d(t,{default:()=>l});var r=n(326),i=n(6226),a=n(434),o=n(7577);let s=[{id:1,title:"Summer Sale Collections",description:"Sale! Up to 50% off!",img:"https://images.pexels.com/photos/11833895/pexels-photo-11833895.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",url:"/",bg:"bg-gradient-to-r from-yellow-50 to-pink-50"},{id:2,title:"Winter Sale Collections",description:"Sale! Up to 50% off!",img:"https://images.pexels.com/photos/4177668/pexels-photo-4177668.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",url:"/",bg:"bg-gradient-to-r from-pink-50 to-blue-50"},{id:3,title:"Spring Sale Collections",description:"Sale! Up to 50% off!",img:"https://images.pexels.com/photos/6970061/pexels-photo-6970061.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",url:"/",bg:"bg-gradient-to-r from-blue-50 to-yellow-50"}],l=()=>{let[e,t]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=setInterval(()=>{t(e=>e===s.length-1?0:e+1)},3e3);return()=>clearInterval(e)},[]),(0,r.jsxs)("div",{className:"h-[calc(100vh-80px)] overflow-hidden",children:[r.jsx("div",{className:"w-max h-full flex transition-all ease-in-out duration-1000",style:{transform:`translateX(-${100*e}vw)`},children:s.map(e=>(0,r.jsxs)("div",{className:`${e.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`,children:[(0,r.jsxs)("div",{className:"h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center",children:[r.jsx("h2",{className:"text-xl lg:text-3xl 2xl:text-5xl",children:e.description}),r.jsx("h1",{className:"text-5xl lg:text-6xl 2xl:text-8xl font-semibold",children:e.title}),r.jsx(a.default,{href:e.url,children:r.jsx("button",{className:"rounded-md bg-black text-white py-3 px-4 ",children:"SHOP NOW"})})]}),r.jsx("div",{className:"h-1/2 xl:w-1/2 xl:h-full relative",children:r.jsx(i.default,{src:e.img,alt:"",fill:!0,sizes:"100%",className:"object-cover"})})]},e.id))}),r.jsx("div",{className:"absolute m-auto left-1/2 bottom-8 flex gap-4",children:s.map((n,i)=>r.jsx("div",{className:`w-3 h-3  rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${e===i?"scale-150":""}`,onClick:()=>t(i),children:e===i&&r.jsx("div",{className:"w-[6px] h-[6px] bg-gray-600 rounded-full"})},n.id))})]})}},9651:(e,t,n)=>{"use strict";n.r(t),n.d(t,{$$typeof:()=>o,__esModule:()=>a,default:()=>s});var r=n(8570);let i=(0,r.createProxy)(String.raw`/home/countzero/Ecommerce-Next.js/src/app/components/ProductList.tsx`),{__esModule:a,$$typeof:o}=i;i.default;let s=(0,r.createProxy)(String.raw`/home/countzero/Ecommerce-Next.js/src/app/components/ProductList.tsx#default`)},8426:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var r=n(9510),i=n(8570);let a=(0,i.createProxy)(String.raw`/home/countzero/Ecommerce-Next.js/src/app/components/CategoryList.tsx`),{__esModule:o,$$typeof:s}=a;a.default;let l=(0,i.createProxy)(String.raw`/home/countzero/Ecommerce-Next.js/src/app/components/CategoryList.tsx#default`);var c=n(9651);let u=(0,i.createProxy)(String.raw`/home/countzero/Ecommerce-Next.js/src/app/components/Slider.tsx`),{__esModule:d,$$typeof:p}=u;u.default;let m=(0,i.createProxy)(String.raw`/home/countzero/Ecommerce-Next.js/src/app/components/Slider.tsx#default`),f=()=>(0,r.jsxs)("div",{className:"",children:[r.jsx(m,{}),(0,r.jsxs)("div",{className:"mt-24 px-4  md:px-8  lg:px-16 xl:32 2xl:px-64",children:[r.jsx("h1",{className:"text-2xl mt-24 px-4  md:px-8  lg:px-20 xl:32 2xl:px-64",children:" Featured Products"}),r.jsx(c.default,{})]}),(0,r.jsxs)("div",{className:"mt-24 ",children:[r.jsx("h1",{className:"text-2xl mt-24 px-4  md:px-8  lg:px-32 xl:32 2xl:px-64 ",children:"Categories"}),r.jsx(l,{})]}),(0,r.jsxs)("div",{className:"text-2xl mt-24 px-4  md:px-8  lg:px-20 xl:32 2xl:px-64",children:[r.jsx("h1",{className:"text-2xl mt-24 px-4  md:px-8  lg:px-20 xl:32 2xl:px-64",children:" New Products"}),r.jsx(c.default,{})]})]})},5449:()=>{},3824:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[948,24,621,109,972,261],()=>n(6670));module.exports=r})();