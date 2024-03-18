!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?t(require("jquery")):t(jQuery)}(function(n){"use strict";function r(t){return"number"==typeof t}function s(t,i){var e=[];return"number"==typeof i&&e.push(i),e.slice.apply(t,e)}function i(t,i){var e=s(arguments,2);return function(){return t.apply(i,e.concat(s(arguments)))}}function o(t,i){this.element=t,this.$element=n(t),this.defaults=n.extend({},o.DEFAULTS,n.isPlainObject(i)?i:{}),this.$original=g,this.ready=D,this.built=D,this.cropped=D,this.rotated=D,this.disabled=D,this.replaced=D,this.init()}var e,h=n(window),a=n(document),d=window.location,$=!0,D=!1,g=null,l="undefined",p="directive",t=".cropper",E=/^(e|n|w|s|ne|nw|sw|se|all|crop|move|zoom)$/,_=/^(x|y|width|height)$/,P=/^(naturalWidth|naturalHeight|width|height|aspectRatio|ratio|rotate)$/,c="cropper-modal",W="cropper-hidden",m="cropper-invisible",f="cropper-crop",u="cropper-disabled",w="mousedown touchstart",v="mousemove touchmove",x="mouseup mouseleave touchend touchleave touchcancel",b="wheel mousewheel DOMMouseScroll",y="resize"+t,H="dblclick",C="build"+t,k="built"+t,R="dragstart"+t,z="dragmove"+t,L="dragend"+t,Y=Math.sqrt,X=Math.min,M=Math.max,T=Math.abs,O=Math.sin,U=Math.cos,I=parseFloat;o.prototype={constructor:o,support:{canvas:n.isFunction(n("<canvas>")[0].getContext)},init:function(){var e=this.defaults;n.each(e,function(t,i){switch(t){case"aspectRatio":e[t]=T(I(i))||NaN;break;case"autoCropArea":e[t]=T(I(i))||.8;break;case"minWidth":case"minHeight":e[t]=T(I(i))||0;break;case"maxWidth":case"maxHeight":e[t]=T(I(i))||1/0}}),this.image={rotate:0},this.load()},load:function(){var t,i,e=this,h=this.$element,a=this.element,s=this.image,r="";h.is("img")?i=h.prop("src"):h.is("canvas")&&this.support.canvas&&(i=a.toDataURL()),i&&(this.replaced&&(s.rotate=0),this.defaults.checkImageOrigin&&(h.prop("crossOrigin")||this.isCrossOriginURL(i))&&(r=" crossOrigin"),this.$clone=t=n("<img"+r+' src="'+i+'">'),t.one("load",function(){s.naturalWidth=this.naturalWidth||t.width(),s.naturalHeight=this.naturalHeight||t.height(),s.aspectRatio=s.naturalWidth/s.naturalHeight,e.url=i,e.ready=$,e.build()}),t.addClass(m).prependTo("body"))},isCrossOriginURL:function(t){t=t.match(/^(https?:)\/\/([^\:\/\?#]+):?(\d*)/i);return!t||t[1]===d.protocol&&t[2]===d.hostname&&t[3]===d.port?D:$},build:function(){var t,i=this.$element,e=this.defaults;this.ready&&(this.built&&this.unbuild(),i.one(C,e.build),t=n.Event(C),i.trigger(t),t.isDefaultPrevented()||(this.$cropper=t=n(o.TEMPLATE),i.addClass(W),this.$clone.removeClass(m).prependTo(t),this.rotated||(this.$original=this.$clone.clone(),this.$original.addClass(W).prependTo(this.$cropper),this.originalImage=n.extend({},this.image)),this.$container=i.parent(),this.$container.append(t),this.$canvas=t.find(".cropper-canvas"),this.$dragger=t.find(".cropper-dragger"),this.$viewer=t.find(".cropper-viewer"),e.autoCrop?this.cropped=$:this.$dragger.addClass(W),e.dragCrop&&this.setDragMode("crop"),e.modal&&this.$canvas.addClass(c),e.dashed||this.$dragger.find(".cropper-dashed").addClass(W),e.movable||this.$dragger.find(".cropper-face").data(p,"move"),e.resizable||this.$dragger.find(".cropper-line, .cropper-point").addClass(W),this.addListeners(),this.initPreview(),this.built=$,this.update(),this.replaced=D,i.one(k,e.built),i.trigger(k)))},unbuild:function(){this.built&&(this.built=D,this.removeListeners(),this.$preview.empty(),this.$preview=g,this.$dragger=g,this.$canvas=g,this.$container=g,this.$cropper.remove(),this.$cropper=g)},update:function(t){this.initContainer(),this.initCropper(),this.initImage(),this.initDragger(),t?(this.setData(t,$),this.setDragMode("crop")):this.setData(this.defaults.data)},resize:function(){clearTimeout(this.resizing),this.resizing=setTimeout(n.proxy(this.update,this,this.getData()),200)},preview:function(){var t=this.image,e=this.dragger,h=t.width,a=t.height,s=e.left-t.left,r=e.top-t.top;this.$viewer.find("img").css({width:h,height:a,marginLeft:-s,marginTop:-r}),this.$preview.each(function(){var t=n(this),i=t.width()/e.width;t.find("img").css({width:h*i,height:a*i,marginLeft:-s*i,marginTop:-r*i})})},addListeners:function(){var t=this.defaults;this.$element.on(R,t.dragstart).on(z,t.dragmove).on(L,t.dragend),this.$cropper.on(w,n.proxy(this.dragstart,this)).on(H,n.proxy(this.dblclick,this)),t.zoomable&&this.$cropper.on(b,n.proxy(this.wheel,this)),t.multiple?this.$cropper.on(v,n.proxy(this.dragmove,this)).on(x,n.proxy(this.dragend,this)):a.on(v,this._dragmove=i(this.dragmove,this)).on(x,this._dragend=i(this.dragend,this)),h.on(y,this._resize=i(this.resize,this))},removeListeners:function(){var t=this.defaults;this.$element.off(R,t.dragstart).off(z,t.dragmove).off(L,t.dragend),this.$cropper.off(w,this.dragstart).off(H,this.dblclick),t.zoomable&&this.$cropper.off(b,this.wheel),t.multiple?this.$cropper.off(v,this.dragmove).off(x,this.dragend):a.off(v,this._dragmove).off(x,this._dragend),h.off(y,this._resize)},initPreview:function(){var t='<img src="'+this.url+'">';this.$preview=n(this.defaults.preview),this.$viewer.html(t),this.$preview.html(t).find("img").css("cssText","min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;")},initContainer:function(){var t=this.$container;t!==g&&(this.container={width:M(t.width(),300),height:M(t.height(),150)})},initCropper:function(){var t,i=this.container,e=this.image;0<=e.naturalWidth*i.height/e.naturalHeight-i.width?(t={width:i.width,height:i.width/e.aspectRatio,left:0}).top=(i.height-t.height)/2:(t={width:i.height*e.aspectRatio,height:i.height,top:0}).left=(i.width-t.width)/2,this.$cropper&&this.$cropper.css({width:t.width,height:t.height,left:t.left,top:t.top}),this.cropper=t},initImage:function(){var t=this.image,i=this.cropper,e={_width:i.width,_height:i.height,width:i.width,height:i.height,left:0,top:0,ratio:i.width/t.naturalWidth};this.defaultImage=n.extend({},t,e),t._width!==i.width||t._height!==i.height?n.extend(t,e):(t=n.extend({},e,t),this.replaced&&(t.ratio=e.ratio)),this.image=t,this.renderImage()},renderImage:function(t){var i=this.image;"zoom"===t&&(i.left-=(i.width-i.oldWidth)/2,i.top-=(i.height-i.oldHeight)/2),i.left=X(M(i.left,i._width-i.width),0),i.top=X(M(i.top,i._height-i.height),0),this.$clone.css({width:i.width,height:i.height,marginLeft:i.left,marginTop:i.top}),t&&(this.defaults.done(this.getData()),this.preview())},initDragger:function(){var t=this.defaults,i=this.cropper,e=t.aspectRatio||this.image.aspectRatio,h=this.image.ratio,a=0<=i.height*e-i.width?{height:i.width/e,width:i.width,left:0,top:(i.height-i.width/e)/2,maxWidth:i.width,maxHeight:i.width/e}:{height:i.height,width:i.height*e,left:(i.width-i.height*e)/2,top:0,maxWidth:i.height*e,maxHeight:i.height};a.minWidth=0,a.minHeight=0,t.aspectRatio?(isFinite(t.maxWidth)?(a.maxWidth=X(a.maxWidth,t.maxWidth*h),a.maxHeight=a.maxWidth/e):isFinite(t.maxHeight)&&(a.maxHeight=X(a.maxHeight,t.maxHeight*h),a.maxWidth=a.maxHeight*e),0<t.minWidth?(a.minWidth=M(0,t.minWidth*h),a.minHeight=a.minWidth/e):0<t.minHeight&&(a.minHeight=M(0,t.minHeight*h),a.minWidth=a.minHeight*e)):(a.maxWidth=X(a.maxWidth,t.maxWidth*h),a.maxHeight=X(a.maxHeight,t.maxHeight*h),a.minWidth=M(0,t.minWidth*h),a.minHeight=M(0,t.minHeight*h)),a.minWidth=X(a.maxWidth,a.minWidth),a.minHeight=X(a.maxHeight,a.minHeight),a.height*=t.autoCropArea,a.width*=t.autoCropArea,a.left=(i.width-a.width)/2,a.top=(i.height-a.height)/2,a.oldLeft=a.left,a.oldTop=a.top,this.defaultDragger=a,this.dragger=n.extend({},a)},renderDragger:function(){var t=this.dragger,i=this.cropper;t.width>t.maxWidth?(t.width=t.maxWidth,t.left=t.oldLeft):t.width<t.minWidth&&(t.width=t.minWidth,t.left=t.oldLeft),t.height>t.maxHeight?(t.height=t.maxHeight,t.top=t.oldTop):t.height<t.minHeight&&(t.height=t.minHeight,t.top=t.oldTop),t.left=X(M(t.left,0),i.width-t.width),t.top=X(M(t.top,0),i.height-t.height),t.oldLeft=t.left,t.oldTop=t.top,this.dragger=t,this.disabled||this.defaults.done(this.getData()),this.$dragger.css({width:t.width,height:t.height,left:t.left,top:t.top}),this.preview()},reset:function(t){this.cropped&&(t&&(this.defaults.data={}),this.image=n.extend({},this.defaultImage),this.renderImage(),this.dragger=n.extend({},this.defaultDragger),this.setData(this.defaults.data))},clear:function(){this.cropped&&(this.cropped=D,this.setData({x:0,y:0,width:0,height:0}),this.$canvas.removeClass(c),this.$dragger.addClass(W))},destroy:function(){var t=this.$element;this.ready&&(this.unbuild(),t.removeClass(W).removeData("cropper"),this.rotated)&&t.attr("src",this.$original.attr("src"))},replace:function(t,i){var e,h=this,a=this.$element,s=this.element;t&&t!==this.url&&t!==a.attr("src")&&(i||(this.rotated=D,this.replaced=$),a.is("img")?(a.attr("src",t),this.load()):a.is("canvas")&&this.support.canvas&&(e=s.getContext("2d"),n('<img src="'+t+'">').one("load",function(){s.width=this.width,s.height=this.height,e.clearRect(0,0,s.width,s.height),e.drawImage(this,0,0),h.load()})))},setData:function(t,i){var e=this.cropper,h=this.dragger,a=this.image,s=this.defaults.aspectRatio;this.built&&typeof t!=l&&(t!==g&&!n.isEmptyObject(t)||(h=n.extend({},this.defaultDragger)),n.isPlainObject(t)&&!n.isEmptyObject(t)&&(i||(this.defaults.data=t),t=this.transformData(t),r(t.x)&&t.x<=e.width-a.left&&(h.left=t.x+a.left),r(t.y)&&t.y<=e.height-a.top&&(h.top=t.y+a.top),s?r(t.width)&&t.width<=h.maxWidth&&t.width>=h.minWidth?(h.width=t.width,h.height=h.width/s):r(t.height)&&t.height<=h.maxHeight&&t.height>=h.minHeight&&(h.height=t.height,h.width=h.height*s):(r(t.width)&&t.width<=h.maxWidth&&t.width>=h.minWidth&&(h.width=t.width),r(t.height)&&t.height<=h.maxHeight&&t.height>=h.minHeight&&(h.height=t.height))),this.dragger=h,this.renderDragger())},getData:function(t){var i=this.dragger,e=this.image,h={};return this.built&&(h={x:i.left-e.left,y:i.top-e.top,width:i.width,height:i.height},h=this.transformData(h,$,t)),h},transformData:function(t,e,h){var a=this.image.ratio,s={};return n.each(t,function(t,i){i=I(i),_.test(t)&&!isNaN(i)&&(s[t]=e?h?Math.round(i/a):i/a:i*a)}),s},setAspectRatio:function(t){var i="auto"===t;t=I(t),(i||!isNaN(t)&&0<t)&&(this.defaults.aspectRatio=i?NaN:t,this.built)&&(this.initDragger(),this.renderDragger())},getImageData:function(){var e={};return this.ready&&n.each(this.image,function(t,i){P.test(t)&&(e[t]=i)}),e},getDataURL:function(t,i,e){var h,a=n("<canvas>")[0],s=this.getData(),r="";return n.isPlainObject(t)||(e=i,i=t,t={}),t=n.extend({width:s.width,height:s.height},t),this.cropped&&this.support.canvas&&(a.width=t.width,a.height=t.height,h=a.getContext("2d"),"image/jpeg"===i&&(h.fillStyle="#fff",h.fillRect(0,0,t.width,t.height)),h.drawImage(this.$clone[0],s.x,s.y,s.width,s.height,0,0,t.width,t.height),r=a.toDataURL(i,e)),r},setDragMode:function(t){var i=this.$canvas,e=this.defaults,h=D,a=D;if(this.built&&!this.disabled){switch(t){case"crop":e.dragCrop&&(h=$,i.data(p,t));break;case"move":a=$,i.data(p,t);break;default:i.removeData(p)}i.toggleClass(f,h).toggleClass("cropper-move",a)}},enable:function(){this.built&&(this.disabled=D,this.$cropper.removeClass(u))},disable:function(){this.built&&(this.disabled=$,this.$cropper.addClass(u))},rotate:function(t){var i=this.image;t=I(t)||0,this.built&&0!==t&&!this.disabled&&this.defaults.rotatable&&this.support.canvas&&(this.rotated=$,t=i.rotate=(i.rotate+t)%360,this.replace(this.getRotatedDataURL(t),!0))},getRotatedDataURL:function(t){var i=n("<canvas>")[0],e=i.getContext("2d"),h=t*Math.PI/180,t=T(t)%180,t=(90<t?180-t:t)*Math.PI/180,a=this.originalImage,s=a.naturalWidth,a=a.naturalHeight,r=T(s*U(t)+a*O(t)),t=T(s*O(t)+a*U(t));return i.width=r,i.height=t,e.save(),e.translate(r/2,t/2),e.rotate(h),e.drawImage(this.$original[0],-s/2,-a/2,s,a),e.restore(),i.toDataURL()},zoom:function(t){var i,e,h=this.image;t=I(t),this.built&&t&&!this.disabled&&this.defaults.zoomable&&(i=h.width*(1+t),t=h.height*(1+t),10<(e=i/h._width)||(e<1&&(i=h._width,t=h._height),e<=1?this.setDragMode("crop"):this.setDragMode("move"),h.oldWidth=h.width,h.oldHeight=h.height,h.width=i,h.height=t,h.ratio=h.width/h.naturalWidth,this.renderImage("zoom")))},dblclick:function(){this.disabled||(this.$canvas.hasClass(f)?this.setDragMode("move"):this.setDragMode("crop"))},wheel:function(t){var i,e=t.originalEvent;this.disabled||(t.preventDefault(),i=e.deltaY?(i=e.deltaY)%5==0?i/5:i%117.25==0?i/117.25:i/166.66665649414062:e.wheelDelta?-e.wheelDelta/120:e.detail?e.detail/3:0,this.zoom(.1*i))},dragstart:function(t){var i,e,h=t.originalEvent.touches,a=t;if(!this.disabled){if(h){if(1<(e=h.length)){if(!this.defaults.zoomable||2!==e)return;a=h[1],this.startX2=a.pageX,this.startY2=a.pageY,i="zoom"}a=h[0]}i=i||n(a.target).data(p),E.test(i)&&(t.preventDefault(),e=n.Event(R),this.$element.trigger(e),e.isDefaultPrevented()||(this.directive=i,this.cropping=D,this.startX=a.pageX,this.startY=a.pageY,"crop"===i&&(this.cropping=$,this.$canvas.addClass(c))))}},dragmove:function(t){var i,e=t.originalEvent.touches,h=t;if(!this.disabled){if(e){if(1<(i=e.length)){if(!this.defaults.zoomable||2!==i)return;h=e[1],this.endX2=h.pageX,this.endY2=h.pageY}h=e[0]}this.directive&&(t.preventDefault(),i=n.Event(z),this.$element.trigger(i),i.isDefaultPrevented()||(this.endX=h.pageX,this.endY=h.pageY,this.dragging()))}},dragend:function(t){this.disabled||this.directive&&(t.preventDefault(),t=n.Event(L),this.$element.trigger(t),t.isDefaultPrevented()||(this.cropping&&(this.cropping=D,this.$canvas.toggleClass(c,this.cropped&&this.defaults.modal)),this.directive=""))},dragging:function(){var t,i,e,h,a,s,r=this.directive,n=this.image,o=this.cropper,d=o.width,g=o.height,l=this.dragger,p=l.width,c=l.height,m=l.left,f=l.top,u=m+p,w=f+c,v=$,x=this.defaults,b=x.aspectRatio,y={x:this.endX-this.startX,y:this.endY-this.startY};switch(b&&(y.X=y.y*b,y.Y=y.x/b),r){case"all":m+=y.x,f+=y.y;break;case"e":0<=y.x&&(d<=u||b&&(f<=0||g<=w))?v=D:(p+=y.x,b&&(c=p/b,f-=y.Y/2),p<0&&(r="w",p=0));break;case"n":y.y<=0&&(f<=0||b&&(m<=0||d<=u))?v=D:(c-=y.y,f+=y.y,b&&(p=c*b,m+=y.X/2),c<0&&(r="s",c=0));break;case"w":y.x<=0&&(m<=0||b&&(f<=0||g<=w))?v=D:(p-=y.x,m+=y.x,b&&(c=p/b,f+=y.Y/2),p<0&&(r="e",p=0));break;case"s":0<=y.y&&(g<=w||b&&(m<=0||d<=u))?v=D:(c+=y.y,b&&(p=c*b,m-=y.X/2),c<0&&(r="n",c=0));break;case"ne":if(b){if(y.y<=0&&(f<=0||d<=u)){v=D;break}f+=y.y,p=(c-=y.y)*b}else!(0<=y.x)||u<d?p+=y.x:y.y<=0&&f<=0&&(v=D),(!(y.y<=0)||0<f)&&(c-=y.y,f+=y.y);c<0&&(r="sw",p=c=0);break;case"nw":if(b){if(y.y<=0&&(f<=0||m<=0)){v=D;break}f+=y.y,p=(c-=y.y)*b,m+=y.X}else!(y.x<=0)||0<m?(p-=y.x,m+=y.x):y.y<=0&&f<=0&&(v=D),(!(y.y<=0)||0<f)&&(c-=y.y,f+=y.y);c<0&&(r="se",p=c=0);break;case"sw":if(b){if(y.x<=0&&(m<=0||g<=w)){v=D;break}m+=y.x,c=(p-=y.x)/b}else!(y.x<=0)||0<m?(p-=y.x,m+=y.x):0<=y.y&&g<=w&&(v=D),(!(0<=y.y)||w<g)&&(c+=y.y);p<0&&(r="ne",p=c=0);break;case"se":if(b){if(0<=y.x&&(d<=u||g<=w)){v=D;break}c=(p+=y.x)/b}else!(0<=y.x)||u<d?p+=y.x:0<=y.y&&g<=w&&(v=D),(!(0<=y.y)||w<g)&&(c+=y.y);p<0&&(r="nw",p=c=0);break;case"move":n.left+=y.x,n.top+=y.y,this.renderImage("move"),v=D;break;case"zoom":x.zoomable&&(this.zoom((t=n.width,i=n.height,e=T(this.startX-this.startX2),h=T(this.startY-this.startY2),a=T(this.endX-this.endX2),s=T(this.endY-this.endY2),(Y(a*a+s*s)-Y(e*e+h*h))/Y(t*t+i*i))),this.endX2=this.startX2,this.endY2=this.startY2);break;case"crop":y.x&&y.y&&(a=this.$cropper.offset(),m=this.startX-a.left,f=this.startY-a.top,p=l.minWidth,c=l.minHeight,0<y.x?0<y.y?r="se":(r="ne",f-=c):0<y.y?(r="sw",m-=p):(r="nw",m-=p,f-=c),this.cropped||(this.cropped=$,this.$dragger.removeClass(W)))}v&&(l.width=p,l.height=c,l.left=m,l.top=f,this.directive=r,this.renderDragger()),this.startX=this.endX,this.startY=this.endY}},o.TEMPLATE=(e="div,span,directive,data,point,cropper,class,line,dashed".split(","),'<0 6="5-container"><0 6="5-canvas"></0><0 6="5-dragger"><1 6="5-viewer"></1><1 6="5-8 8-h"></1><1 6="5-8 8-v"></1><1 6="5-face" 3-2="all"></1><1 6="5-7 7-e" 3-2="e"></1><1 6="5-7 7-n" 3-2="n"></1><1 6="5-7 7-w" 3-2="w"></1><1 6="5-7 7-s" 3-2="s"></1><1 6="5-4 4-e" 3-2="e"></1><1 6="5-4 4-n" 3-2="n"></1><1 6="5-4 4-w" 3-2="w"></1><1 6="5-4 4-s" 3-2="s"></1><1 6="5-4 4-ne" 3-2="ne"></1><1 6="5-4 4-nw" 3-2="nw"></1><1 6="5-4 4-sw" 3-2="sw"></1><1 6="5-4 4-se" 3-2="se"></1></0></0>'.replace(/\d+/g,function(t){return e[t]})),o.DEFAULTS={aspectRatio:"auto",autoCropArea:.8,data:{},done:n.noop,preview:"",multiple:D,autoCrop:$,dragCrop:$,dashed:$,modal:$,movable:$,resizable:$,zoomable:$,rotatable:$,checkImageOrigin:$,minWidth:0,minHeight:0,maxWidth:1/0,maxHeight:1/0,build:g,built:g,dragstart:g,dragmove:g,dragend:g},o.setDefaults=function(t){n.extend(o.DEFAULTS,t)},o.other=n.fn.cropper,n.fn.cropper=function(e){var h,a=s(arguments,1);return this.each(function(){var t=n(this),i=t.data("cropper");i||t.data("cropper",i=new o(this,e)),"string"==typeof e&&n.isFunction(t=i[e])&&(h=t.apply(i,a))}),typeof h!=l?h:this},n.fn.cropper.Constructor=o,n.fn.cropper.setDefaults=o.setDefaults,n.fn.cropper.noConflict=function(){return n.fn.cropper=o.other,this}});