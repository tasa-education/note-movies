!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t,n){var o;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var c=typeof o;if("string"===c||"number"===c)e.push(o);else if(Array.isArray(o)&&o.length){var a=i.apply(null,o);a&&e.push(a)}else if("object"===c)for(var l in o)n.call(o,l)&&o[l]&&e.push(l)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(o=function(){return i}.apply(t,[]))||(e.exports=o)}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.lodash}()},function(e){e.exports=JSON.parse('{"titleTagName":{"type":"string","default":"h2"},"title":{"type":"string","source":"html","selector":".smb-section__title","default":""},"subtitle":{"type":"string","source":"html","selector":".smb-section__subtitle","default":""},"lede":{"type":"string","source":"html","selector":".smb-section__lede","default":""},"videoURL":{"type":"string","default":""},"videoWidth":{"type":"number","default":640},"videoHeight":{"type":"number","default":360},"height":{"type":"string","default":"fit"},"contentsAlignment":{"type":"string","default":"left"},"maskColor":{"type":"string","default":""},"maskColor2":{"type":"string"},"maskColorAngle":{"type":"number","default":0},"maskOpacity":{"type":"number","default":1},"textColor":{"type":"string","default":"#fff"},"contentsWidth":{"type":"boolean","default":false},"isSlim":{"type":"boolean","default":false}}')},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){!function(){e.exports=this.wp.richText}()},function(e,t){!function(){e.exports=this.wp.plugins}()},function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"name",(function(){return j})),n.d(o,"settings",(function(){return k}));var i=n(7),c=n.n(i),a=n(0),l=n(5),s=n(8);n(9),n(10);var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e=Number(e),(isNaN(e)||e<t)&&(e=t),null!==n&&e>n&&(e=n),e},m=n(2),b={common:"smb",section:"smb-section"},u="#cd162c",d=n(6),g=n(3),p=n.n(g),h=n(4),y=n(1),v=function(e){var t=e.match(/^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/);if(t)return t[1]};function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=[{attributes:O({},d),supports:{align:["wide","full"]},save:function(e){var t=e.attributes,n=e.className,o=t.titleTagName,i=t.title,c=t.videoURL,l=t.videoWidth,s=t.videoHeight,r=t.height,m=t.contentsAlignment,b=t.maskColor,u=t.maskOpacity,d=t.textColor,g=t.isSlim,h=p()("smb-section","smb-section-with-bgvideo","smb-section-with-bgimage","smb-section-with-bgimage--".concat(m),"smb-section-with-bgimage--".concat(r),n),f=p()("smb-section-with-bgimage__bgimage"),O=p()("c-container",{"u-slim-width":!!g}),w={color:d||void 0},j={backgroundColor:b||void 0,opacity:1-u};return Object(a.createElement)("div",{className:h,style:w},Object(a.createElement)("div",{className:f},c&&Object(a.createElement)(a.Fragment,null,Object(a.createElement)("iframe",{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",src:"https://www.youtube.com/embed/".concat(v(c),"?controls=0&autoplay=1&showinfo=0&rel=0&disablekb=1&iv_load_policy=3&loop=1&playlist=").concat(v(c),"&playsinline=1&modestbranding=1"),width:l,height:s,frameBorder:"0",title:c}),Object(a.createElement)("img",{src:"https://i.ytimg.com/vi/".concat(v(c),"/maxresdefault.jpg"),alt:""}))),Object(a.createElement)("div",{className:"smb-section-with-bgimage__mask",style:j}),Object(a.createElement)("div",{className:O},!y.RichText.isEmpty(i)&&"none"!==o&&Object(a.createElement)(y.RichText.Content,{tagName:o,className:"smb-section__title",value:i}),Object(a.createElement)("div",{className:"smb-section__body"},Object(a.createElement)(y.InnerBlocks.Content,null))))}},{attributes:O({},d),supports:{align:["wide","full"]},migrate:function(e){var t=!!e.contentsWidth;return O(O({},e),{},{isSlim:t})},save:function(e){var t=e.attributes,n=e.className,o=t.titleTagName,i=t.title,c=t.videoURL,l=t.videoWidth,s=t.videoHeight,r=t.height,m=t.contentsAlignment,b=t.maskColor,u=t.maskOpacity,d=t.textColor,g=t.contentsWidth,h=p()("smb-section","smb-section-with-bgvideo","smb-section-with-bgimage","smb-section-with-bgimage--".concat(m),"smb-section-with-bgimage--".concat(r),n),f=p()("smb-section-with-bgimage__bgimage"),O=p()("c-container",{"u-slim-width":!!g}),w={color:d||void 0},j={backgroundColor:b||void 0,opacity:1-u};return Object(a.createElement)("div",{className:h,style:w},Object(a.createElement)("div",{className:f},c&&Object(a.createElement)(a.Fragment,null,Object(a.createElement)("iframe",{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",src:"https://www.youtube.com/embed/".concat(v(c),"?controls=0&autoplay=1&showinfo=0&rel=0&disablekb=1&iv_load_policy=3&loop=1&playlist=").concat(v(c),"&playsinline=1&modestbranding=1"),width:l,height:s,frameBorder:"0",title:c}),Object(a.createElement)("img",{src:"http://i.ytimg.com/vi/".concat(v(c),"/maxresdefault.jpg"),alt:""}))),Object(a.createElement)("div",{className:"smb-section-with-bgimage__mask",style:j}),Object(a.createElement)("div",{className:O},!y.RichText.isEmpty(i)&&"none"!==o&&Object(a.createElement)(y.RichText.Content,{tagName:o,className:"smb-section__title",value:i}),Object(a.createElement)("div",{className:"smb-section__body"},Object(a.createElement)(y.InnerBlocks.Content,null))))}},{attributes:O({},d),supports:{align:["wide","full"]},save:function(e){var t=e.attributes,n=e.className,o=t.title,i=t.videoURL,c=t.videoWidth,l=t.videoHeight,s=t.height,r=t.contentsAlignment,m=t.maskColor,b=t.maskOpacity,u=t.textColor,d=p()("smb-section","smb-section-with-bgvideo","smb-section-with-bgimage","smb-section-with-bgimage--".concat(r),"smb-section-with-bgimage--".concat(s),n),g=p()("smb-section-with-bgimage__bgimage"),h={color:u||void 0},f={backgroundColor:m||void 0,opacity:1-b};return Object(a.createElement)("div",{className:d,style:h},Object(a.createElement)("div",{className:g},i&&Object(a.createElement)("iframe",{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",src:"https://www.youtube.com/embed/".concat(v(i),"?controls=0&autoplay=1&showinfo=0&rel=0&disablekb=1&iv_load_policy=3&loop=1&playlist=").concat(v(i),"&playsinline=1&modestbranding=1"),width:c,height:l,frameBorder:"0",title:i})),Object(a.createElement)("div",{className:"smb-section-with-bgimage__mask",style:f}),Object(a.createElement)("div",{className:"c-container"},!y.RichText.isEmpty(o)&&Object(a.createElement)("h2",{className:"smb-section__title"},Object(a.createElement)(y.RichText.Content,{value:o})),Object(a.createElement)("div",{className:"smb-section__body"},Object(a.createElement)(y.InnerBlocks.Content,null))))}}],j="snow-monkey-blocks/section-with-bgvideo",k={title:Object(m.__)("Section (with background YouTube video)","snow-monkey-blocks"),description:Object(m.__)("It is a section with a background YouTube video.","snow-monkey-blocks"),icon:{foreground:u,src:"text"},category:b.section,supports:{align:["wide","full"],anchor:!0},attributes:d,edit:function(e){var t=e.attributes,n=e.setAttributes,o=e.isSelected,i=e.className,c=t.titleTagName,s=t.title,b=t.subtitle,u=t.lede,d=t.videoURL,g=t.videoWidth,f=t.videoHeight,O=t.height,w=t.contentsAlignment,j=t.maskColor,k=t.maskColor2,_=t.maskColorAngle,E=t.maskOpacity,C=t.textColor,x=t.isSlim,N=["h1","h2","h3","none"],T=p()("smb-section","smb-section-with-bgimage","smb-section-with-bgvideo","smb-section-with-bgimage--".concat(w),"smb-section-with-bgimage--".concat(O),i),R=p()("smb-section-with-bgimage__bgimage"),S=p()("c-container",{"u-slim-width":!!x}),P={color:C||void 0},B={};j&&(B.backgroundColor=j,k&&(B.backgroundImage="linear-gradient(".concat(_,"deg, ").concat(j," 0%, ").concat(k," 100%)")));var A={opacity:E};return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(y.InspectorControls,null,Object(a.createElement)(h.PanelBody,{title:Object(m.__)("Block Settings","snow-monkey-blocks")},Object(a.createElement)(h.BaseControl,{label:Object(m.__)("Title Tag","snow-monkey-blocks"),id:"snow-monkey-blocks/section-with-bgvideo/title-tag-name"},Object(a.createElement)("div",{className:"smb-list-icon-selector"},Object(l.times)(N.length,(function(e){return Object(a.createElement)(h.Button,{isDefault:!0,isPrimary:c===N[e],onClick:function(){return n({titleTagName:N[e]})}},N[e])})))),Object(a.createElement)(h.BaseControl,{label:Object(m.__)("YouTube URL","snow-monkey-blocks"),id:"snow-monkey-blocks/section-with-bgvideo/video-url"},Object(a.createElement)(h.TextControl,{value:d,onChange:function(e){return n({videoURL:e})}})),Object(a.createElement)(h.RangeControl,{label:Object(m.__)("Video width","snow-monkey-blocks"),value:g,onChange:function(e){return n({videoWidth:r(e,1,960)})},min:"1",max:"960"}),Object(a.createElement)(h.RangeControl,{label:Object(m.__)("Video height","snow-monkey-blocks"),value:f,onChange:function(e){return n({videoHeight:r(e,1,960)})},min:"1",max:"960"}),Object(a.createElement)(h.SelectControl,{label:Object(m.__)("Height","snow-monkey-blocks"),value:O,options:[{value:"fit",label:Object(m.__)("Fit","snow-monkey-blocks")},{value:"wide",label:Object(m.__)("Wide","snow-monkey-blocks")}],onChange:function(e){return n({height:e})}}),Object(a.createElement)(h.SelectControl,{label:Object(m.__)("Contents alignment","snow-monkey-blocks"),value:w,options:[{value:"left",label:Object(m.__)("Left side","snow-monkey-blocks")},{value:"center",label:Object(m.__)("Center","snow-monkey-blocks")},{value:"right",label:Object(m.__)("Right side","snow-monkey-blocks")}],onChange:function(e){return n({contentsAlignment:e})}}),Object(a.createElement)(h.ToggleControl,{label:Object(m.__)("Make the content width slim","snow-monkey-blocks"),checked:x,onChange:function(e){return n({isSlim:e})}})),Object(a.createElement)(y.PanelColorSettings,{title:Object(m.__)("Color Settings","snow-monkey-blocks"),initialOpen:!1,colorSettings:[{value:j,onChange:function(e){return n({maskColor:e})},label:Object(m.__)("Mask Color","snow-monkey-blocks")},{value:C,onChange:function(e){return n({textColor:e})},label:Object(m.__)("Text Color","snow-monkey-blocks")}]}),Object(a.createElement)(h.PanelBody,{title:Object(m.__)("Mask Settings","snow-monkey-blocks")},Object(a.createElement)(h.RangeControl,{label:Object(m.__)("Mask Opacity","snow-monkey-blocks"),value:E,onChange:function(e){return n({maskOpacity:r(e,0,1)})},min:0,max:1,step:.1}),j&&Object(a.createElement)(h.BaseControl,{className:"editor-color-palette-control",label:Object(m.__)("Mask Color 2","snow-monkey-blocks"),id:"snow-monkey-blocks/section-with-bgvideo/mask-color2"},Object(a.createElement)(y.ColorPalette,{className:"editor-color-palette-control__color-palette",value:k,onChange:function(e){return n({maskColor2:e})}})),j&&k&&Object(a.createElement)(h.RangeControl,{label:Object(m.__)("Mask Gradation Angle","snow-monkey-blocks"),value:_,onChange:function(e){return n({maskColorAngle:r(e,0,360)})},min:"0",max:"360"}))),Object(a.createElement)("div",{className:T,style:P},Object(a.createElement)("div",{className:"smb-section-with-bgimage__mask",style:B}),Object(a.createElement)("div",{className:R,style:A},d&&Object(a.createElement)("img",{src:"https://i.ytimg.com/vi/".concat(v(d),"/maxresdefault.jpg"),alt:""})),Object(a.createElement)("div",{className:S},!y.RichText.isEmpty(s)&&(!y.RichText.isEmpty(b)||o)&&"none"!==c&&Object(a.createElement)(y.RichText,{className:"smb-section__subtitle",value:b,onChange:function(e){return n({subtitle:e})},allowedFormats:[],placeholder:Object(m.__)("Write subtitle…","snow-monkey-blocks")}),(!y.RichText.isEmpty(s)||o)&&"none"!==c&&Object(a.createElement)(y.RichText,{className:"smb-section__title",tagName:c,value:s,onChange:function(e){return n({title:e})},allowedFormats:[],placeholder:Object(m.__)("Write title…","snow-monkey-blocks")}),!y.RichText.isEmpty(s)&&(!y.RichText.isEmpty(u)||o)&&"none"!==c&&Object(a.createElement)(y.RichText,{className:"smb-section__lede",value:u,onChange:function(e){return n({lede:e})},allowedFormats:[],placeholder:Object(m.__)("Write lede…","snow-monkey-blocks")}),Object(a.createElement)("div",{className:"smb-section__body"},Object(a.createElement)(y.InnerBlocks,null)))))},save:function(e){var t=e.attributes,n=e.className,o=t.titleTagName,i=t.title,c=t.subtitle,l=t.lede,s=t.videoURL,r=t.videoWidth,m=t.videoHeight,b=t.height,u=t.contentsAlignment,d=t.maskColor,g=t.maskColor2,h=t.maskColorAngle,f=t.maskOpacity,O=t.textColor,w=t.isSlim,j=p()("smb-section","smb-section-with-bgimage","smb-section-with-bgvideo","smb-section-with-bgimage--".concat(u),"smb-section-with-bgimage--".concat(b),n),k=p()("smb-section-with-bgimage__bgimage"),_=p()("c-container",{"u-slim-width":!!w}),E={color:O||void 0},C={};d&&(C.backgroundColor=d,g&&(C.backgroundImage="linear-gradient(".concat(h,"deg, ").concat(d," 0%, ").concat(g," 100%)")));var x={opacity:f};return Object(a.createElement)("div",{className:j,style:E},Object(a.createElement)("div",{className:"smb-section-with-bgimage__mask",style:C}),Object(a.createElement)("div",{className:k,style:x},s&&Object(a.createElement)(a.Fragment,null,Object(a.createElement)("iframe",{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",src:"https://www.youtube.com/embed/".concat(v(s),"?controls=0&autoplay=1&showinfo=0&rel=0&disablekb=1&iv_load_policy=3&loop=1&playlist=").concat(v(s),"&playsinline=1&modestbranding=1"),width:r,height:m,frameBorder:"0",title:s}),Object(a.createElement)("img",{src:"https://i.ytimg.com/vi/".concat(v(s),"/maxresdefault.jpg"),alt:""}))),Object(a.createElement)("div",{className:_},!y.RichText.isEmpty(i)&&!y.RichText.isEmpty(c)&&"none"!==o&&Object(a.createElement)(y.RichText.Content,{tagName:"div",className:"smb-section__subtitle",value:c}),!y.RichText.isEmpty(i)&&"none"!==o&&Object(a.createElement)(y.RichText.Content,{tagName:o,className:"smb-section__title",value:i}),!y.RichText.isEmpty(i)&&!y.RichText.isEmpty(l)&&"none"!==o&&Object(a.createElement)(y.RichText.Content,{tagName:"div",className:"smb-section__lede",value:l}),Object(a.createElement)("div",{className:"smb-section__body"},Object(a.createElement)(y.InnerBlocks.Content,null))))},deprecated:w,example:{attributes:{title:"Lorem ipsum dolor sit amet",videoURL:"https://www.youtube.com/watch?v=rAnZPQRUTv0",maskColor:"#000",maskOpacity:.7},innerBlocks:[{name:"core/paragraph",attributes:{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}}]}};!function(e){if(e){var t=e.name,n=e.settings;Object(s.registerBlockType)(t,n)}}(o)}]);