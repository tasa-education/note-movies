!function(e){var t={};function o(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=11)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t,o){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var o={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var l=c.apply(null,n);l&&e.push(l)}else if("object"===i)for(var r in n)o.call(n,r)&&n[r]&&e.push(r)}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(n=function(){return c}.apply(t,[]))||(e.exports=n)}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.lodash}()},function(e,t){e.exports=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}},function(e){e.exports=JSON.parse('{"wrapperTagName":{"type":"string","default":"div"},"titleTagName":{"type":"string","default":"h2"},"title":{"type":"string","source":"html","selector":".smb-section__title","default":""},"subtitle":{"type":"string","source":"html","selector":".smb-section__subtitle","default":""},"lede":{"type":"string","source":"html","selector":".smb-section__lede","default":""},"backgroundColor":{"type":"string"},"backgroundColor2":{"type":"string"},"backgroundColorAngle":{"type":"number","default":0},"textColor":{"type":"string"},"isSlim":{"type":"boolean","default":false},"headingPosition":{"type":"string","default":"left"},"headingColumnSize":{"type":"string","default":33},"topDividerType":{"type":"string","default":"tilt"},"topDividerLevel":{"type":"number","default":0},"topDividerColor":{"type":"string","default":"#fff"},"bottomDividerType":{"type":"string","default":"tilt"},"bottomDividerLevel":{"type":"number","default":0},"bottomDividerColor":{"type":"string","default":"#fff"}}')},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){!function(){e.exports=this.wp.richText}()},function(e,t){!function(){e.exports=this.wp.plugins}()},function(e,t,o){"use strict";o.r(t);var n={};o.r(n),o.d(n,"name",(function(){return j})),o.d(n,"settings",(function(){return k}));var c=o(6),i=o.n(c),l=o(0),r=o(5),a=o(8);o(9),o(10);var s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e=Number(e),(isNaN(e)||e<t)&&(e=t),null!==o&&e>o&&(e=o),e},m=function(e){var t="1-3",o="2-3";return 75===parseInt(e)?(t="1-4",o="3-4"):66===parseInt(e)?(t="1-3",o="2-3"):50===parseInt(e)?(t="1-2",o="1-2"):33===parseInt(e)?(t="2-3",o="1-3"):25===parseInt(e)&&(t="3-4",o="1-4"),{textColumnWidth:t,imageColumnWidth:o}},b=function(e,t,o){if(o=o||"#fff",0!==t){return Object(l.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"none"},function(){switch(e){case"tilt":return 0>t?Object(l.createElement)("path",{d:"m100,".concat(100+t," L100,100 L0,100 z"),strokeWidth:"0",fill:o}):Object(l.createElement)("path",{d:"m0,".concat(100-t," L100,100 L0,100 z"),strokeWidth:"0",fill:o});case"curve":return 0>t?Object(l.createElement)("path",{d:"m0,100 L100,100 Q50,".concat(2*t+100,",0,100 z"),strokeWidth:"0",fill:o}):Object(l.createElement)("path",{d:"m0,".concat(100-t," q50,").concat(2*t,",100,0 V100 L0,100 z"),strokeWidth:"0",fill:o});case"wave":return 0>t?Object(l.createElement)("path",{d:"m0,".concat(100+t/2," q20,").concat(t,",40,0 t40,0 t40,0 V100 L0,100 z"),strokeWidth:"0",fill:o}):Object(l.createElement)("path",{d:"m0,".concat(100-t/2," q20,").concat(t,",40,0 t40,0 t40,0 V100 L0,100 z"),strokeWidth:"0",fill:o});case"triangle":return t=Math.abs(t),Object(l.createElement)("path",{d:"m".concat((100-t)/2,",100 l").concat(t,",0 l").concat(-1*t/2,",").concat(-1*t," z"),strokeWidth:"0",fill:o})}}())}},d=o(1),u={common:"smb",section:"smb-section"},_="#cd162c",p=o(7),g=o(3),v=o.n(g),O=o(2),f=o(4);function h(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}var y=[{attributes:function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?h(Object(o),!0).forEach((function(t){i()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):h(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},p),save:function(e){var t=e.attributes,o=e.className,n=t.wrapperTagName,c=t.titleTagName,i=t.title,r=t.backgroundColor,a=t.backgroundColor2,s=t.backgroundColorAngle,d=t.textColor,u=t.headingPosition,_=t.headingColumnSize,p=t.isSlim,g=t.topDividerType,f=t.topDividerLevel,h=t.topDividerColor,y=t.bottomDividerType,j=t.bottomDividerLevel,k=t.bottomDividerColor,w=m(_),C=w.textColumnWidth,E=w.imageColumnWidth,N=n,T=v()("smb-section","smb-section-side-heading",o),x=v()("smb-section__divider","smb-section__divider--top","smb-section__divider--".concat(g)),D=v()("smb-section__divider","smb-section__divider--bottom","smb-section__divider--".concat(y)),S=v()("c-container",{"u-slim-width":!!p}),P=v()("c-row","c-row--md-margin",{"c-row--reverse":"right"===u}),B=v()("c-row__col","c-row__col--1-1","c-row__col--md-".concat(E)),L=v()("c-row__col","c-row__col--1-1","c-row__col--md-".concat(C)),R={};d&&(R.color=d),r&&(R.backgroundColor=r,a&&(R.backgroundImage="linear-gradient(".concat(s,"deg, ").concat(r," 0%, ").concat(a," 100%)")));var W={paddingTop:Math.abs(f),paddingBottom:Math.abs(j)};return Object(l.createElement)(N,{className:T,style:R},!!f&&Object(l.createElement)("div",{className:x},b(g,f,h)),!!j&&Object(l.createElement)("div",{className:D},b(y,j,k)),Object(l.createElement)("div",{className:"smb-section__inner",style:W},Object(l.createElement)("div",{className:S},Object(l.createElement)("div",{className:P},Object(l.createElement)("div",{className:B},!O.RichText.isEmpty(i)&&Object(l.createElement)(O.RichText.Content,{tagName:c,className:"smb-section__title",value:i})),Object(l.createElement)("div",{className:L},Object(l.createElement)("div",{className:"smb-section__body"},Object(l.createElement)(O.InnerBlocks.Content,null)))))))}}],j="snow-monkey-blocks/section-side-heading",k={title:Object(d.__)("Section (Side heading)","snow-monkey-blocks"),description:Object(d.__)("Contents can be separated by appropriate margins.","snow-monkey-blocks"),icon:{foreground:_,src:"text"},category:u.section,supports:{align:["wide","full"],anchor:!0},attributes:p,edit:function(e){var t=e.attributes,o=e.setAttributes,n=e.isSelected,c=e.className,i=t.wrapperTagName,a=t.titleTagName,u=t.title,_=t.subtitle,p=t.lede,g=t.backgroundColor,h=t.backgroundColor2,y=t.backgroundColorAngle,j=t.textColor,k=t.headingPosition,w=t.headingColumnSize,C=t.isSlim,E=t.topDividerType,N=t.topDividerLevel,T=t.topDividerColor,x=t.bottomDividerType,D=t.bottomDividerLevel,S=t.bottomDividerColor,P=m(w),B=P.textColumnWidth,L=P.imageColumnWidth,R=["div","section","aside"],W=["h1","h2","h3"],z=i,I=v()("smb-section","smb-section-side-heading",c),M=v()("smb-section__divider","smb-section__divider--top","smb-section__divider--".concat(E)),A=v()("smb-section__divider","smb-section__divider--bottom","smb-section__divider--".concat(x)),q=v()("c-container",{"u-slim-width":!!C}),F=v()("c-row","c-row--md-margin",{"c-row--reverse":"right"===k}),V=v()("c-row__col","c-row__col--1-1","c-row__col--md-".concat(L)),G=v()("c-row__col","c-row__col--1-1","c-row__col--md-".concat(B)),H={};j&&(H.color=j),g&&(H.backgroundColor=g,h&&(H.backgroundImage="linear-gradient(".concat(y,"deg, ").concat(g," 0%, ").concat(h," 100%)")));var J={paddingTop:Math.abs(N),paddingBottom:Math.abs(D)};return Object(l.createElement)(l.Fragment,null,Object(l.createElement)(O.InspectorControls,null,Object(l.createElement)(f.PanelBody,{title:Object(d.__)("Block Settings","snow-monkey-blocks")},Object(l.createElement)(f.BaseControl,{label:Object(d.__)("Wrapper Tag","snow-monkey-blocks"),id:"snow-monkey-blocks/section-side-heading/wrapper-tag-name"},Object(l.createElement)("div",{className:"smb-list-icon-selector"},Object(r.times)(R.length,(function(e){return Object(l.createElement)(f.Button,{isDefault:!0,isPrimary:i===R[e],onClick:function(){return o({wrapperTagName:R[e]})}},R[e])})))),Object(l.createElement)(f.BaseControl,{label:Object(d.__)("Title Tag","snow-monkey-blocks"),id:"snow-monkey-blocks/section-side-heading/title-tag"},Object(l.createElement)("div",{className:"smb-list-icon-selector"},Object(r.times)(W.length,(function(e){return Object(l.createElement)(f.Button,{isDefault:!0,isPrimary:a===W[e],onClick:function(){return o({titleTagName:W[e]})}},W[e])})))),Object(l.createElement)(f.SelectControl,{label:Object(d.__)("Heading Position","snow-monkey-blocks"),value:k,options:[{value:"right",label:Object(d.__)("Right side","snow-monkey-blocks")},{value:"left",label:Object(d.__)("Left side","snow-monkey-blocks")}],onChange:function(e){return o({headingPosition:e})}}),Object(l.createElement)(f.SelectControl,{label:Object(d.__)("Heading column size","snow-monkey-blocks"),value:w,onChange:function(e){return o({headingColumnSize:e})},options:[{value:50,label:Object(d.__)("50%","snow-monkey-blocks")},{value:33,label:Object(d.__)("33%","snow-monkey-blocks")},{value:25,label:Object(d.__)("25%","snow-monkey-blocks")}]}),Object(l.createElement)(f.ToggleControl,{label:Object(d.__)("Make the content width slim","snow-monkey-blocks"),checked:C,onChange:function(e){return o({isSlim:e})}})),Object(l.createElement)(O.PanelColorSettings,{title:Object(d.__)("Color Settings","snow-monkey-blocks"),initialOpen:!1,colorSettings:[{value:g,onChange:function(e){return o({backgroundColor:e})},label:Object(d.__)("Background Color","snow-monkey-blocks")},{value:j,onChange:function(e){return o({textColor:e})},label:Object(d.__)("Text Color","snow-monkey-blocks")}]}),g&&Object(l.createElement)(f.PanelBody,{title:Object(d.__)("Background Gradation Settings","snow-monkey-blocks")},Object(l.createElement)(f.BaseControl,{className:"editor-color-palette-control",label:Object(d.__)("Background Color 2","snow-monkey-blocks"),id:"snow-monkey-blocks/section-side-heading/background-color2"},Object(l.createElement)(O.ColorPalette,{className:"editor-color-palette-control__color-palette",value:h,onChange:function(e){return o({backgroundColor2:e})}})),h&&Object(l.createElement)(f.RangeControl,{label:Object(d.__)("Background Gradation Angle","snow-monkey-blocks"),value:y,onChange:function(e){return o({backgroundColorAngle:s(e,0,360)})},min:"0",max:"360"})),Object(l.createElement)(f.PanelBody,{title:Object(d.__)("Top divider Settings","snow-monkey-blocks"),initialOpen:!1},Object(l.createElement)(f.SelectControl,{label:Object(d.__)("Type","snow-monkey-blocks"),value:E,onChange:function(e){return o({topDividerType:e})},options:[{value:"tilt",label:Object(d.__)("Tilt","snow-monkey-blocks")},{value:"curve",label:Object(d.__)("Curve","snow-monkey-blocks")},{value:"wave",label:Object(d.__)("Wave","snow-monkey-blocks")},{value:"triangle",label:Object(d.__)("Triangle","snow-monkey-blocks")}]}),Object(l.createElement)(f.RangeControl,{label:Object(d.__)("Level","snow-monkey-blocks"),value:N,onChange:function(e){return o({topDividerLevel:s(e,-100,100)})},min:"-100",max:"100"}),Object(l.createElement)(f.BaseControl,{className:"editor-color-palette-control",label:Object(d.__)("Color","snow-monkey-blocks"),id:"snow-monkey-blocks/section-side-heading/top-divider-color"},Object(l.createElement)(O.ColorPalette,{className:"editor-color-palette-control__color-palette",value:T,onChange:function(e){return o({topDividerColor:e})}}))),Object(l.createElement)(f.PanelBody,{title:Object(d.__)("Bottom divider Settings","snow-monkey-blocks"),initialOpen:!1},Object(l.createElement)(f.SelectControl,{label:Object(d.__)("Type","snow-monkey-blocks"),value:x,onChange:function(e){return o({bottomDividerType:e})},options:[{value:"tilt",label:Object(d.__)("Tilt","snow-monkey-blocks")},{value:"curve",label:Object(d.__)("Curve","snow-monkey-blocks")},{value:"wave",label:Object(d.__)("Wave","snow-monkey-blocks")},{value:"triangle",label:Object(d.__)("Triangle","snow-monkey-blocks")}]}),Object(l.createElement)(f.RangeControl,{label:Object(d.__)("Level","snow-monkey-blocks"),value:D,onChange:function(e){return o({bottomDividerLevel:s(e,-100,100)})},min:"-100",max:"100"}),Object(l.createElement)(f.BaseControl,{className:"editor-color-palette-control",label:Object(d.__)("Color","snow-monkey-blocks"),id:"snow-monkey-blocks/section-side-heading/bottom-divider-color"},Object(l.createElement)(O.ColorPalette,{className:"editor-color-palette-control__color-palette",value:S,onChange:function(e){return o({bottomDividerColor:e})}})))),Object(l.createElement)(z,{className:I,style:H},!!N&&Object(l.createElement)("div",{className:M},b(E,N,T)),!!D&&Object(l.createElement)("div",{className:A},b(x,D,S)),Object(l.createElement)("div",{className:"smb-section__inner",style:J},Object(l.createElement)("div",{className:q},Object(l.createElement)("div",{className:F},Object(l.createElement)("div",{className:V},!O.RichText.isEmpty(u)&&(!O.RichText.isEmpty(_)||n)&&Object(l.createElement)(O.RichText,{className:"smb-section__subtitle smb-section-side-heading__subtitle",value:_,onChange:function(e){return o({subtitle:e})},allowedFormats:[],placeholder:Object(d.__)("Write subtitle…","snow-monkey-blocks")}),(!O.RichText.isEmpty(u)||n)&&Object(l.createElement)(O.RichText,{className:"smb-section__title smb-section-side-heading__title",tagName:a,value:u,onChange:function(e){return o({title:e})},allowedFormats:[],placeholder:Object(d.__)("Write title…","snow-monkey-blocks")}),!O.RichText.isEmpty(u)&&(!O.RichText.isEmpty(p)||n)&&Object(l.createElement)(O.RichText,{className:"smb-section__lede smb-section-side-heading__lede",value:p,onChange:function(e){return o({lede:e})},allowedFormats:[],placeholder:Object(d.__)("Write lede…","snow-monkey-blocks")})),Object(l.createElement)("div",{className:G},Object(l.createElement)("div",{className:"smb-section__body smb-section-side-heading__body"},Object(l.createElement)(O.InnerBlocks,null))))))))},save:function(e){var t=e.attributes,o=e.className,n=t.wrapperTagName,c=t.titleTagName,i=t.title,r=t.subtitle,a=t.lede,s=t.backgroundColor,d=t.backgroundColor2,u=t.backgroundColorAngle,_=t.textColor,p=t.headingPosition,g=t.headingColumnSize,f=t.isSlim,h=t.topDividerType,y=t.topDividerLevel,j=t.topDividerColor,k=t.bottomDividerType,w=t.bottomDividerLevel,C=t.bottomDividerColor,E=m(g),N=E.textColumnWidth,T=E.imageColumnWidth,x=n,D=v()("smb-section","smb-section-side-heading",o),S=v()("smb-section__divider","smb-section__divider--top","smb-section__divider--".concat(h)),P=v()("smb-section__divider","smb-section__divider--bottom","smb-section__divider--".concat(k)),B=v()("c-container",{"u-slim-width":!!f}),L=v()("c-row","c-row--md-margin",{"c-row--reverse":"right"===p}),R=v()("c-row__col","c-row__col--1-1","c-row__col--md-".concat(T)),W=v()("c-row__col","c-row__col--1-1","c-row__col--md-".concat(N)),z={};_&&(z.color=_),s&&(z.backgroundColor=s,d&&(z.backgroundImage="linear-gradient(".concat(u,"deg, ").concat(s," 0%, ").concat(d," 100%)")));var I={paddingTop:Math.abs(y),paddingBottom:Math.abs(w)};return Object(l.createElement)(x,{className:D,style:z},!!y&&Object(l.createElement)("div",{className:S},b(h,y,j)),!!w&&Object(l.createElement)("div",{className:P},b(k,w,C)),Object(l.createElement)("div",{className:"smb-section__inner",style:I},Object(l.createElement)("div",{className:B},Object(l.createElement)("div",{className:L},Object(l.createElement)("div",{className:R},!O.RichText.isEmpty(i)&&!O.RichText.isEmpty(r)&&Object(l.createElement)(O.RichText.Content,{tagName:"div",className:"smb-section__subtitle smb-section-side-heading__subtitle",value:r}),!O.RichText.isEmpty(i)&&Object(l.createElement)(O.RichText.Content,{tagName:c,className:"smb-section__title smb-section-side-heading__title",value:i}),!O.RichText.isEmpty(i)&&!O.RichText.isEmpty(a)&&Object(l.createElement)(O.RichText.Content,{tagName:"div",className:"smb-section__lede smb-section-side-heading__lede",value:a})),Object(l.createElement)("div",{className:W},Object(l.createElement)("div",{className:"smb-section__body smb-section-side-heading__body"},Object(l.createElement)(O.InnerBlocks.Content,null)))))))},deprecated:y,example:{attributes:{title:"Lorem"},innerBlocks:[{name:"core/paragraph",attributes:{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}}]}};!function(e){if(e){var t=e.name,o=e.settings;Object(a.registerBlockType)(t,o)}}(n)}]);