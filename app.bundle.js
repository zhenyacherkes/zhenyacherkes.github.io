!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=5)}([function(e,n,t){var o=t(1);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(3)(o,r);o.locals&&(e.exports=o.locals)},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,"* {\n  margin: 0;\n  padding: 0;\n  font-family: 'Noto Sans SC', sans-serif;\n  list-style: none;\n  font-weight: 700;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  min-width: 377px;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  height: 80px;\n  width: 100%;\n  box-shadow: 0px 0px 8px 2px #ccc9c9;\n  min-width: 400px;\n}\n\nform {\n  width: 70%;\n  margin-left: 15px;\n}\n\ninput[type = 'text'] {\n  width: 90%;\n  height: 29.1px;\n  border: 2px solid #CCC;\n  background: #eee;\n  outline: none;\n  font-size: 17px;\n  padding-left: 15px;\n  font-weight: 400;\n}\n\ninput[type = 'text']:focus {\n  border: 2px solid #979797;\n  background: #FFF;\n}\n\n.logo {\n  height: 50px;\n  width: 150px;\n  position: absolute;\n  left: 2%;\n}\n\n.carousel {\n  display: none;\n  position: relative;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-around;\n  width: 1100px;\n  height: 25rem;\n  border: 2px solid #CCC;\n  border-radius: 50px;\n  background: #eee;\n  margin-top: 120px;\n}\n\n.arrow {\n  background: #ddd;\n  border-radius: 50px;\n  border: 2px solid #CCC;\n  font-size: 24px;\n  line-height: 24px;\n  color: #444;\n  padding: 2px;\n}\n\n.arrow:focus {\n  outline: none;\n}\n\n.arrow:hover {\n  background: #ccc;\n  cursor: pointer;\n}\n\n.gallery {\n  width: 1000px;\n  overflow: hidden;\n}\n\n.gallery ul {\n  height: 21rem;\n  width: 999999px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  transition: margin-left 0.7s;\n  font-size: 0;\n}\n\n.gallery li {\n  display: inline-block;\n}\n\n.clipImage {\n  width: 240px;\n  height: 95%;\n  margin-top: 3%;\n  border-radius: 10px;\n}\n\n.elem {\n  width: 240px;\n  height: 19rem;\n  margin: 3px;\n  border: 2px solid #CCC;\n  border-radius: 15px;\n  background-color: #fffefe;\n  transition: all 0.7s;\n}\n\n.elem:hover {\n  transform: scale(0.9);\n  background-color: #e20000;\n  color: #FFF;\n  border: 2px solid #979797;\n  box-shadow: 0 0 10px rgba(0,0,0,0.5);\n}\n\n.mainInfo {\n  display: flex;\n  height: 8rem;\n  position: relative;\n  flex-flow: row wrap;\n}\n\n.additionalInfo {\n  display: flex;\n  height: 11rem;;\n  flex-flow: row wrap;\n}\n\n.currentPage {\n  position: absolute;\n  left: 49.5%;\n  top: 360px;\n  font-size: 20px;\n}\n\n.popUp {\n  position: absolute;\n  bottom: 55%;\n  background-color: #dee200;\n  border: 2px solid black;\n  border-radius: 50%;\n  height: 24px;\n  width: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\na {\n  position: absolute;\n  font-size: 20px;\n  top: 25%;\n  height: 47%;\n  width: 100%;\n  background-color: #dee200;\n  text-align: center;\n  overflow: hidden;\n  text-decoration: none;\n  color: #000000;\n}\n\na:hover {\n  color: #00aaf8;\n}\n\na:active {\n  background-color: #e20000;\n}\n\ni {\n  font-size: 20px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.clipInfo {\n  display: flex;\n  height: 6rem;\n  width: 240px;\n  flex-flow: row wrap;\n}\n\n.clipDescription {\n  height: 5rem;\n  width: 240px;\n}\n\n.description {\n  width: 240px;\n  height: 5rem;\n  font-size: 15px;\n  overflow: hidden;\n  text-align: center;\n  line-height: 19.7px;\n}\n\np {\n  font-size: 15px;\n}\n\n.clipInfo {\n  display: flex;\n  height: 6rem;\n  align-items: center;\n}\n\n.shortInfo {\n  width: 240px;\n  height: 22px;\n  overflow: hidden;\n}\n\n.fa-eye {\n  margin-right: 7px;\n}\n\n.fa-calendar-alt {\n  margin-right: 12px;\n}\n\n.fa-youtube {\n  margin-top: 200px;\n  font-size: 150px;\n  color: #CCC;\n  animation: yt 3s ease infinite;\n}\n\n.fa-search {\n  margin-right: -2px;\n  font-size: 21px;\n}\n\n@keyframes yt{\n  0%{\n      color: #CCC;\n  }\n  50% {\n      color: #CD201F;\n  }\n  100% {\n      color: #CCC;\n  }\n}\n\n@media only screen and (max-width: 1200px) {\n  .carousel {\n    width: 850px;\n  }\n  .gallery {\n    width: 750px;\n  }\n  input[type = 'text'] {\n    width: 88%;\n  }\n  .logo {\n    width: 75px;\n  }\n}\n\n@media only screen and (max-width: 950px) {\n  .carousel {\n    width: 600px;\n  }\n  .gallery {\n    width: 500px;\n  }\n  input[type = 'text'] {\n    width: 84%;\n  }\n  .logo {\n    width: 75px;\n  }\n}\n\n@media only screen and (max-width: 700px) {\n  .carousel {\n    width: 350px;\n  }\n  .gallery {\n    width: 250px;\n  }\n  input[type = 'text'] {\n    width: 74%;\n  }\n  input[type = 'text'] {\n    width: 64%;\n  }\n  form {\n    width: 72%;\n    margin-left: 82px;\n    height: 33px;\n  }\n  .fa-search {\n    opacity: 0;\n  }\n}\n\n@media only screen and (max-width: 390px) {\n  .logo {\n    margin-left: 20px;\n  }\n}\n",""])},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var r=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[t].concat(i).concat([r]).join("\n")}var a;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];null!=a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},function(e,n,t){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),s=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var o=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}n[e]=o}return n[e]}}(),c=null,l=0,d=[],p=t(4);function u(e,n){for(var t=0;t<e.length;t++){var o=e[t],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(w(o.parts[a],n))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(w(o.parts[a],n));i[o.id]={id:o.id,refs:1,parts:s}}}}function f(e,n){for(var t=[],o={},r=0;r<e.length;r++){var i=e[r],a=n.base?i[0]+n.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):t.push(o[a]={id:a,parts:[s]})}return t}function m(e,n){var t=s(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=d[d.length-1];if("top"===e.insertAt)o?o.nextSibling?t.insertBefore(n,o.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),d.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(e.insertAt.before,t);t.insertBefore(n,r)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=d.indexOf(e);n>=0&&d.splice(n,1)}function y(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var o=function(){0;return t.nc}();o&&(e.attrs.nonce=o)}return g(n,e.attrs),m(e,n),n}function g(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function w(e,n){var t,o,r,i;if(n.transform&&e.css){if(!(i="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=i}if(n.singleton){var a=l++;t=c||(c=y(n)),o=b.bind(null,t,a,!1),r=b.bind(null,t,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(n,e.attrs),m(e,n),n}(n),o=function(e,n,t){var o=t.css,r=t.sourceMap,i=void 0===n.convertToAbsoluteUrls&&r;(n.convertToAbsoluteUrls||i)&&(o=p(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,n),r=function(){h(t),t.href&&URL.revokeObjectURL(t.href)}):(t=y(n),o=function(e,n){var t=n.css,o=n.media;o&&e.setAttribute("media",o);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),r=function(){h(t)});return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=f(e,n);return u(t,n),function(e){for(var o=[],r=0;r<t.length;r++){var a=t[r];(s=i[a.id]).refs--,o.push(s)}e&&u(f(e,n),n);for(r=0;r<o.length;r++){var s;if(0===(s=o[r]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var x,v=(x=[],function(e,n){return x[e]=n,x.filter(Boolean).join("\n")});function b(e,n,t,o){var r=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=v(n,r);else{var i=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,o=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var r,i=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,n,t){"use strict";t.r(n);class o{static async getClipInfo(e){const n=`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDwMeq-DyctNGExLZ0UvRazM01yyteqsKE&type=video&part=snippet&maxResults=12&q=${e}`,t=await fetch(n);return await t.json()}static async getClipViewsCount(e){const n=`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDwMeq-DyctNGExLZ0UvRazM01yyteqsKE&id=${e.map(e=>e.id.videoId).join(",")}&part=snippet,statistics`,t=await fetch(n);return await t.json()}static async getNewClipsInfo(e,n){const t=`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDwMeq-DyctNGExLZ0UvRazM01yyteqsKE&type=video&part=snippet&maxResults=12&q=${e}&pageToken=${n}`,o=await fetch(t);return await o.json()}static checkPage(e){const n=document.querySelector(".currentPage");n.innerHTML=Math.max(+n.innerHTML+e,1)}}t(0);var r=class{static starterRender(){document.querySelector("title").innerHTML="YouTube Client";const e=document.createElement("meta");e.name="viewport",e.content="width=device-width, initial-scale=1.0",document.getElementsByTagName("head")[0].appendChild(e);const n=document.createElement("link");n.rel="stylesheet",n.href="https://use.fontawesome.com/releases/v5.8.2/css/all.css",n.crossorigin="anonymous",document.getElementsByTagName("head")[0].appendChild(n);const t=document.createElement("link");t.rel="stylesheet",t.href="https://fonts.googleapis.com/css?family=Noto+Sans+SC&display=swap",document.getElementsByTagName("head")[0].appendChild(t);const o=document.createElement("link");o.rel="shortcut icon",o.href="http://www.iconarchive.com/download/i98467/dakirby309/simply-styled/YouTube.ico",o.typ="image/x-icon",document.getElementsByTagName("head")[0].appendChild(o);const r=document.createElement("header");document.body.appendChild(r);const i=document.createElement("img");i.className="logo",i.src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg",r.appendChild(i);const a=document.createElement("form"),s=document.createElement("i");s.className="fas fa-search",r.appendChild(s);const c=document.createElement("input");c.type="text",c.placeholder="Search",a.appendChild(c),r.appendChild(a);const l=document.createElement("div");l.className="carousel";const d=document.createElement("button");d.className="arrow prev",d.innerHTML="⇦";const p=document.createElement("div");p.className="gallery";const u=document.createElement("ul");u.className="images";const f=document.createElement("button");f.className="arrow next",f.innerHTML="⇨";const m=document.createElement("span");m.className="currentPage",m.innerHTML=1,p.appendChild(u),l.appendChild(d),l.appendChild(p),l.appendChild(f),l.appendChild(m),document.body.appendChild(l)}static addPopUp(e){const n=document.querySelector(".currentPage"),t=document.createElement("span");t.className="popUp",t.innerHTML=n.innerHTML,"p"===e?t.style.left="7px":t.style.right="7px",document.querySelector(".carousel").appendChild(t),setTimeout(()=>{document.querySelector(".carousel").removeChild(t)},100)}static addSlides(e,n){const t=document.querySelector(".images");for(let o=0;o<12;o+=1){const r=document.createElement("li"),i=document.createElement("div");i.className="elem",(()=>{const t=document.createElement("div");t.className="mainInfo";const r=document.createElement("img");r.className="clipImage",r.src=e[o].snippet.thumbnails.high.url;const a=document.createElement("a");a.innerHTML=e[o].snippet.title,a.href=`https://www.youtube.com/watch?v=${e[o].id.videoId}`,a.target="_blank",t.appendChild(r),t.appendChild(a),i.appendChild(t);const s=document.createElement("div");s.className="additionalInfo";const c=document.createElement("div");c.className="clipInfo";const l=document.createElement("p");l.className="shortInfo";const d=document.createElement("i");d.className="fas fa-user-alt";const p=document.createElement("span");p.innerHTML=e[o].snippet.channelTitle,l.appendChild(d),l.appendChild(p),c.appendChild(l);const u=document.createElement("p");u.className="shortInfo";const f=document.createElement("i");f.className="far fa-calendar-alt";const m=document.createElement("span");m.innerHTML=e[o].snippet.publishedAt.substring(0,10),u.appendChild(f),u.appendChild(m),c.appendChild(u);const h=document.createElement("p");h.className="shortInfo";const y=document.createElement("i");y.className="far fa-eye";const g=document.createElement("span");g.innerHTML=n[o].statistics.viewCount,h.appendChild(y),h.appendChild(g),c.appendChild(h);const w=document.createElement("div");w.className="clipDescription";const x=document.createElement("p");x.className="description",x.innerHTML=e[o].snippet.description,w.appendChild(x),s.appendChild(c),s.appendChild(w),i.appendChild(s)})(),r.appendChild(i),t.appendChild(r)}}};(class{static async start(){let e,n,t=12,i=0;r.starterRender();const a=document.querySelector("form"),s=document.querySelector("input"),c=document.querySelector(".carousel"),l=document.querySelector(".images"),d=document.querySelector(".currentPage");function p(){const i=parseInt(window.getComputedStyle(document.querySelector(".gallery")).width,10)/250,a=t/i;+d.innerHTML+1===a&&(async function(){const t=s.value,i=e.nextPageToken;e=await o.getNewClipsInfo(t,i),n=await o.getClipViewsCount(e.items),r.addSlides(e.items,n.items)}(),t+=12)}c.querySelector(".prev").onclick=(()=>{i=Math.min(i+parseInt(window.getComputedStyle(document.querySelector(".gallery")).width,10),0),l.style.marginLeft=`${i}px`,o.checkPage(-1),r.addPopUp("p")}),c.querySelector(".next").onclick=(()=>{e&&(i-=parseInt(window.getComputedStyle(document.querySelector(".gallery")).width,10),l.style.marginLeft=`${i}px`,o.checkPage(1),r.addPopUp("n"),p())}),window.addEventListener("resize",()=>{d.innerHTML=1+Math.ceil(-1*i/parseInt(window.getComputedStyle(document.querySelector(".gallery")).width,10))},!1),a.onsubmit=(()=>{const t=document.querySelector(".images");for(;t.firstChild;)t.removeChild(t.firstChild);return d.innerHTML=1,l.style.marginLeft=0,i=0,c.style.display="none",async function(){const t=s.value,i=document.createElement("i");i.className="fab fa-youtube",document.body.appendChild(i),e=await o.getClipInfo(t),n=await o.getClipViewsCount(e.items),document.body.removeChild(i),c.style.display="flex",r.addSlides(e.items,n.items)}(),!1})}}).start()}]);
//# sourceMappingURL=app.bundle.js.map