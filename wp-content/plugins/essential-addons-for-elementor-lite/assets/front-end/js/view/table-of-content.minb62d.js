!function(e){var t={};function n(a){if(t[a])return t[a].exports;var l=t[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(a,l,function(t){return e[t]}.bind(null,l));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=25)}({25:function(e,t){function n(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var l;l=jQuery,jQuery(document).ready((function(){var e,t=l("header").height(),a=null!==(e=0!==(e=l("#eael-toc").data("page_offset"))&&void 0!==e?e:null)?e:void 0!==t&&0!==t?t+10:120;function o(e,t){var a=document.getElementById("eael-toc-list");if(null===e||void 0===t||!a)return null;for(var o=document.getElementById("eael-toc"),r=void 0!==o.dataset.titleurl?o.dataset.titleurl:"false",c=void 0!==o.dataset.excludeSelector?o.dataset.excludeSelector.replace(/^,|,$/g,""):"",d=[],u=document.querySelectorAll(e),f=0,h=0;h<u.length;h++)d=[].concat(n(d),n(u[h].querySelectorAll(t)));(d=Array.from(new Set(d))).forEach((function(e){i(c,e)||(e.id=f+"-"+s(r,e.textContent),e.classList.add("eael-heading-content"),f++)})),function(e,t,n){var a=t,l=n,o=document.getElementById("eael-toc"),r=void 0!==o.dataset.titleurl?o.dataset.titleurl:"false",c=document.getElementById("eael-toc-list"),d=void 0!==o.dataset.excludeselector?o.dataset.excludeselector.replace(/^,|,$/g,""):"",u="",f=u=a.trim().split(",")[0].substr(1,1),h=c;c.innerHTML="",l.length>0&&document.getElementById("eael-toc").classList.remove("eael-toc-disable");for(var m=0,g=l.length;m<g;++m){var p=l[m];if(!i(d,p)){var v=parseInt(p.tagName.substr(1,1)),y=v-u;if(y>0){var b=h.lastChild;if(b){var C=document.createElement("UL");b.appendChild(C),h=C,u=v}}var E=!1;if(y<0){for(;0!=y++;)h.parentNode.parentNode&&(h=h.parentNode.parentNode);u=v,E=!0}if("UL"!==h.tagName&&(h=c),""!==p.textContent.trim()){var A=document.createElement("LI"),w=document.createElement("A"),S=document.createElement("SPAN");(f===u||E)&&(A.setAttribute("itemscope",""),A.setAttribute("itemtype","http://schema.org/ListItem"),A.setAttribute("itemprop","itemListElement"));var I="#"+m+"-"+s(r,p.textContent);w.className="eael-toc-link",w.setAttribute("itemprop","item"),w.setAttribute("href",I),S.appendChild(document.createTextNode(p.textContent)),w.appendChild(S),A.appendChild(w),h.appendChild(A)}}}}(0,t,d);var m=l("ul.eael-toc-list > li");m.length<1&&document.getElementById("eael-toc").classList.add("eael-toc-disable"),m.each((function(){this.classList.add("eael-first-child")}))}l(document).on("click","ul.eael-toc-list a",(function(e){e.preventDefault(),l(document).off("scroll");var t=this.hash;if(history.pushState("",document.title,window.location.pathname+window.location.search),l(this).parent().is(".eael-highlight-parent.eael-highlight-active"))return l("html, body").animate({scrollTop:l(t).offset().top-a},0),!1;l(".eael-highlight-active, .eael-highlight-parent").removeClass("eael-highlight-active eael-highlight-parent"),l(this).closest(".eael-first-child").addClass("eael-highlight-parent"),l(this).parent().addClass("eael-highlight-active"),l("html, body").animate({scrollTop:l(t).offset().top-a},0)})),window.addEventListener("scroll",(function(e){var t;(t=document.getElementById("eael-toc"))&&(r=void 0!==r?r:200,window.pageYOffset>=r&&!t.classList.contains("eael-toc-disable")?(t.classList.add("eael-sticky"),l("#eael-toc-list").hasClass("eael-toc-auto-highlight")&&function(){var e=document.querySelectorAll("#eael-toc-list .eael-toc-link");l("#eael-toc-list .eael-toc-link").removeClass("eael-highlight-active");for(var t=!!l("#eael-toc").hasClass("eael-toc-auto-highlight.eael-toc-highlight-single-item"),n=0;n<e.length;n++){var a=e[n],o=a.getAttribute("href");if(c(document.getElementById(o.substring(1)))&&(l(a).addClass("eael-highlight-active"),t))break}}()):t.classList.remove("eael-sticky"))}));var r=l("#eael-toc").data("stickyscroll");function i(e,t){return l(t).closest(e).length}function c(e){"function"==typeof jQuery&&e instanceof jQuery&&(e=e[0]);var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function s(e,t){return"true"==e&&""!=t?t.toString().toLowerCase().normalize("NFD").trim().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/^-+/,"").replace(/-+$/,"").replace(/-+/g,"-"):"eael-table-of-content"}function d(){var e=document.getElementById("eael-toc");if(e&&e.dataset.contentselector)return e.dataset.contentselector;var t=".site-content";return l(".site-content")[0]?t=".site-content":l(".elementor-inner")[0]?t=".elementor-inner":l("#site-content")[0]?t="#site-content":l(".site-main")&&(t=".site-main"),t}l("body").click((function(e){var t=l(e.target),n=l("#eael-toc");n.hasClass("eael-toc-auto-collapse")&&n.hasClass("eael-sticky")&&!n.hasClass("collapsed")&&0===l(t).closest("#eael-toc").length&&n.toggleClass("collapsed")})),l(document).on("click",".eael-toc-close ,.eael-toc-button",(function(e){e.stopPropagation(),l(".eael-toc").toggleClass("collapsed")})),"undefined"!=typeof ea&&ea.isEditMode&&elementorFrontend.hooks.addAction("frontend/element_ready/widget",(function(e,t){var n=t("#eael-toc #eael-toc-list");if(n.find("li.eael-first-child").length<1&&n.length>=1){var a=t("#eael-toc").data("eaeltoctag");a&&o(d(),a)}}));var u="undefined"!=typeof isEditMode&&isEditMode,f=l("#eael-toc").data("eaeltoctag");""===f||u||o(d(),f)}))}});