!function(e){var t={};function a(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=12)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.lodash}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t,a){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var i=c.apply(null,n);i&&e.push(i)}else if("object"===r)for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(n=function(){return c}.apply(t,[]))||(e.exports=n)}()},function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e){e.exports=JSON.parse('{"md":{"type":"number","default":2},"lg":{"type":"number","default":2}}')},function(e){e.exports=JSON.parse('{"avatarID":{"type":"number","default":0},"avatarURL":{"type":"string","source":"attribute","selector":".smb-testimonial__item__figure > img","attribute":"src","default":"https://0.gravatar.com/avatar/00000000000000000000000000000000?s=128&d=mp&r=g"},"avatarAlt":{"type":"string","source":"attribute","selector":".smb-testimonial__item__figure > img","attribute":"alt","default":""},"name":{"type":"string","source":"html","selector":".smb-testimonial__item__name","default":""},"lede":{"type":"string","source":"html","selector":".smb-testimonial__item__lede","default":""},"content":{"type":"string","source":"html","selector":".smb-testimonial__item__content","default":""}}')},function(e,t){!function(){e.exports=this.wp.richText}()},function(e,t){!function(){e.exports=this.wp.plugins}()},function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"name",(function(){return h})),a.d(n,"settings",(function(){return w}));var c={};a.r(c),a.d(c,"name",(function(){return R})),a.d(c,"settings",(function(){return C}));var r=a(6),i=a.n(r),s=a(0),m=a(2),o=a(7);a(10),a(11);var l=function(e){if(e){var t=e.name,a=e.settings;Object(o.registerBlockType)(t,a)}},b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e=Number(e),(isNaN(e)||e<t)&&(e=t),null!==a&&e>a&&(e=a),e},u=a(3),_={common:"smb",section:"smb-section"},d="#cd162c",v=a(8),O=a(5),f=a.n(O),p=a(4),j=a(1),g=function(e){var t=e.desktop,a=e.tablet,n=e.mobile,c=[];return t&&c.push({name:"desktop",title:Object(s.createElement)(p.Dashicon,{icon:"desktop"})}),a&&c.push({name:"tablet",title:Object(s.createElement)(p.Dashicon,{icon:"tablet"})}),n&&c.push({name:"mobile",title:Object(s.createElement)(p.Dashicon,{icon:"smartphone"})}),Object(s.createElement)(p.TabPanel,{className:"smb-inspector-tabs",tabs:c},(function(e){if(e.name){if("desktop"===e.name)return t();if("tablet"===e.name)return a();if("mobile"===e.name)return n()}}))};function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var E=[{attributes:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},v),save:function(e){var t=e.className,a=f()("smb-testimonial",t);return Object(s.createElement)("div",{className:a},Object(s.createElement)("div",{className:"smb-testimonial__body"},Object(s.createElement)("div",{className:"c-row c-row--margin","data-columns":"1","data-md-columns":"2"},Object(s.createElement)(j.InnerBlocks.Content,null))))}},{save:function(){return Object(s.createElement)("div",{className:"smb-testimonial"},Object(s.createElement)("div",{className:"smb-testimonial__body"},Object(s.createElement)("div",{className:"c-row c-row--margin","data-columns":"1","data-md-columns":"2"},Object(s.createElement)(j.InnerBlocks.Content,null))))}},{attributes:{items:{type:"array",default:[],selector:".smb-testimonial__item",source:"query",query:{avatarID:{type:"number",source:"attribute",selector:".smb-testimonial__item__figure > img",attribute:"data-image-id",default:0},avatarURL:{type:"string",source:"attribute",selector:".smb-testimonial__item__figure > img",attribute:"src",default:"https://0.gravatar.com/avatar/00000000000000000000000000000000?s=128&d=mp&r=g"},name:{source:"html",selector:".smb-testimonial__item__name"},lede:{source:"html",selector:".smb-testimonial__item__lede"},content:{source:"html",selector:".smb-testimonial__item__content"}}},columns:{type:"number",default:1}},migrate:function(e){var t;return[{},(t=void 0===e.items?0:e.items.length,Object(m.times)(t,(function(t){var a=Object(m.get)(e.items,[t,"avatarID"],0),n=Object(m.get)(e.items,[t,"avatarURL"],"https://0.gravatar.com/avatar/00000000000000000000000000000000?s=128&d=mp&r=g"),c=Object(m.get)(e.items,[t,"name"],""),r=Object(m.get)(e.items,[t,"lede"],""),i=Object(m.get)(e.items,[t,"content"],"");return Object(o.createBlock)("snow-monkey-blocks/testimonial--item",{avatarID:Number(a),avatarURL:n,name:c,lede:r,content:i})})))]},save:function(e){var t=e.attributes,a=t.items,n=void 0===t.items?0:t.items.length;return Object(s.createElement)("div",{className:"smb-testimonial"},Object(s.createElement)("div",{className:"smb-testimonial__body"},Object(s.createElement)("div",{className:"c-row c-row--margin"},Object(m.times)(n,(function(e){var t=Object(m.get)(a,[e,"avatarID"],0),n=Object(m.get)(a,[e,"avatarURL"],"https://0.gravatar.com/avatar/00000000000000000000000000000000?s=128&d=mp&r=g"),c=Object(m.get)(a,[e,"name"],""),r=Object(m.get)(a,[e,"lede"],""),i=Object(m.get)(a,[e,"content"],"");return Object(s.createElement)("div",{className:"c-row__col c-row__col--1-1 c-row__col--md-1-2"},Object(s.createElement)("div",{className:"smb-testimonial__item"},Object(s.createElement)("div",{className:"smb-testimonial__item__figure"},Object(s.createElement)("img",{src:n,alt:"",className:"wp-image-".concat(t),"data-image-id":t})),Object(s.createElement)("div",{className:"smb-testimonial__item__body"},Object(s.createElement)("div",{className:"smb-testimonial__item__content"},Object(s.createElement)(j.RichText.Content,{value:i})),Object(s.createElement)("div",{className:"smb-testimonial__item__name"},Object(s.createElement)(j.RichText.Content,{value:c})),!j.RichText.isEmpty(r)&&Object(s.createElement)("div",{className:"smb-testimonial__item__lede"},Object(s.createElement)(j.RichText.Content,{value:r})))))})))))}},{attributes:{items:{type:"array",default:[],selector:".smb-testimonial__item",source:"query",query:{avatarID:{type:"number",source:"attribute",selector:".smb-testimonial__item__figure > img",attribute:"data-image-id",default:0},avatarURL:{type:"string",source:"attribute",selector:".smb-testimonial__item__figure > img",attribute:"src",default:"https://0.gravatar.com/avatar/00000000000000000000000000000000?s=128&d=mp&r=g"},name:{source:"html",selector:".smb-testimonial__item__name"},lede:{source:"html",selector:".smb-testimonial__item__lede"},content:{source:"html",selector:".smb-testimonial__item__content"}}},columns:{type:"number",default:1}},save:function(e){var t=e.attributes,a=t.items,n=t.columns;return Object(s.createElement)("div",{className:"smb-testimonial"},Object(s.createElement)("div",{className:"smb-testimonial__body"},Object(s.createElement)("div",{className:"c-row c-row--margin"},Object(m.times)(n,(function(e){var t=Object(m.get)(a,[e,"avatarID"],0),n=Object(m.get)(a,[e,"avatarURL"],"https://0.gravatar.com/avatar/00000000000000000000000000000000?s=128&d=mp&r=g"),c=Object(m.get)(a,[e,"name"],""),r=Object(m.get)(a,[e,"lede"],""),i=Object(m.get)(a,[e,"content"],"");return Object(s.createElement)("div",{className:"c-row__col c-row__col--1-1 c-row__col--md-1-2"},Object(s.createElement)("div",{className:"smb-testimonial__item"},Object(s.createElement)("div",{className:"smb-testimonial__item__figure"},Object(s.createElement)("img",{src:n,alt:"","data-image-id":t})),Object(s.createElement)("div",{className:"smb-testimonial__item__body"},Object(s.createElement)("div",{className:"smb-testimonial__item__content"},Object(s.createElement)(j.RichText.Content,{value:i})),Object(s.createElement)("div",{className:"smb-testimonial__item__name"},Object(s.createElement)(j.RichText.Content,{value:c})),!j.RichText.isEmpty(r)&&Object(s.createElement)("div",{className:"smb-testimonial__item__lede"},Object(s.createElement)(j.RichText.Content,{value:r})))))})))))}}],h="snow-monkey-blocks/testimonial",w={title:Object(u.__)("Testimonial","snow-monkey-blocks"),description:Object(u.__)("Let's arrange the voice of the customer.","snow-monkey-blocks"),icon:{foreground:d,src:"admin-comments"},category:_.common,attributes:v,edit:function(e){var t=e.attributes,a=e.setAttributes,n=e.className,c=t.md,r=t.lg,i=f()("smb-testimonial",n),m=function(e){return a({lg:b(e,1,4)})},o=function(e){return a({md:b(e,1,2)})};return Object(s.createElement)(s.Fragment,null,Object(s.createElement)(j.InspectorControls,null,Object(s.createElement)(p.PanelBody,{title:Object(u.__)("Block Settings","snow-monkey-blocks")},Object(s.createElement)(g,{desktop:function(){return Object(s.createElement)(p.RangeControl,{label:Object(u.__)("Columns per row (Large window)","snow-monkey-blocks"),value:r,onChange:m,min:"1",max:"4"})},tablet:function(){return Object(s.createElement)(p.RangeControl,{label:Object(u.__)("Columns per row (Medium window)","snow-monkey-blocks"),value:c,onChange:o,min:"1",max:"2"})}}))),Object(s.createElement)("div",{className:i},Object(s.createElement)("div",{className:"smb-testimonial__body"},Object(s.createElement)("div",{className:"c-row","data-columns":"1","data-md-columns":c,"data-lg-columns":r},Object(s.createElement)(j.InnerBlocks,{allowedBlocks:["snow-monkey-blocks/testimonial--item"],template:[["snow-monkey-blocks/testimonial--item"]],templateLock:!1})))))},save:function(e){var t=e.attributes,a=e.className,n=t.md,c=t.lg,r=f()("smb-testimonial",a);return Object(s.createElement)("div",{className:r},Object(s.createElement)("div",{className:"smb-testimonial__body"},Object(s.createElement)("div",{className:"c-row c-row--margin","data-columns":"1","data-md-columns":n,"data-lg-columns":c},Object(s.createElement)(j.InnerBlocks.Content,null))))},deprecated:E,example:{innerBlocks:[{name:"snow-monkey-blocks/testimonial--item",attributes:{avatarID:1,name:"Lorem",lede:"ipsum",content:"dolor sit amet"}},{name:"snow-monkey-blocks/testimonial--item",attributes:{avatarID:1,name:"consectetur",lede:"adipiscing",content:"sed do eiusmod tempor"}}]}},N=a(9);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var x=[{attributes:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},N),save:function(e){var t=e.attributes,a=t.avatarID,n=t.avatarURL,c=t.name,r=t.lede,i=t.content;return Object(s.createElement)("div",{className:"c-row__col"},Object(s.createElement)("div",{className:"smb-testimonial__item"},Object(s.createElement)("div",{className:"smb-testimonial__item__figure"},Object(s.createElement)("img",{src:n,alt:"",className:"wp-image-".concat(a)})),Object(s.createElement)("div",{className:"smb-testimonial__item__body"},Object(s.createElement)("div",{className:"smb-testimonial__item__content"},Object(s.createElement)(j.RichText.Content,{value:i})),Object(s.createElement)("div",{className:"smb-testimonial__item__name"},Object(s.createElement)(j.RichText.Content,{value:c})),!j.RichText.isEmpty(r)&&Object(s.createElement)("div",{className:"smb-testimonial__item__lede"},Object(s.createElement)(j.RichText.Content,{value:r})))))}}],R="snow-monkey-blocks/testimonial--item",C={title:Object(u.__)("Item","snow-monkey-blocks"),description:Object(u.__)("It is a child block of the testimonial block.","snow-monkey-blocks"),icon:{foreground:d,src:"admin-comments"},category:_.common,parent:["snow-monkey-blocks/testimonial"],attributes:N,edit:function(e){var t=e.attributes,a=e.setAttributes,n=e.isSelected,c=e.className,r=t.avatarID,i=t.avatarURL,m=t.avatarAlt,o=t.name,l=t.lede,b=t.content,_=f()("c-row__col",c);return Object(s.createElement)("div",{className:_},Object(s.createElement)("div",{className:"smb-testimonial__item"},(!!r||n)&&Object(s.createElement)("div",{className:"smb-testimonial__item__figure"},Object(s.createElement)(j.MediaUpload,{onSelect:function(e){var t=e.sizes.thumbnail?e.sizes.thumbnail.url:e.url;a({avatarURL:t,avatarID:e.id,avatarAlt:e.alt})},type:"image",value:r,render:function(e){return Object(s.createElement)(p.Button,{className:"image-button",onClick:e.open,style:{padding:0}},Object(s.createElement)("img",{src:i,alt:m,className:"wp-image-".concat(r)}))}})),Object(s.createElement)("div",{className:"smb-testimonial__item__body"},Object(s.createElement)("div",{className:"smb-testimonial__item__content"},Object(s.createElement)(j.RichText,{placeholder:Object(u.__)("Write content…","snow-monkey-blocks"),value:b,onChange:function(e){return a({content:e})}})),Object(s.createElement)(j.RichText,{className:"smb-testimonial__item__name",placeholder:Object(u.__)("Write name…","snow-monkey-blocks"),value:o,onChange:function(e){return a({name:e})}}),(!j.RichText.isEmpty(l)||n)&&Object(s.createElement)(j.RichText,{className:"smb-testimonial__item__lede",placeholder:Object(u.__)("Write lede…","snow-monkey-blocks"),value:l,onChange:function(e){return a({lede:e})}}))))},save:function(e){var t=e.attributes,a=e.className,n=t.avatarID,c=t.avatarURL,r=t.avatarAlt,i=t.name,m=t.lede,o=t.content,l=f()("c-row__col",a);return Object(s.createElement)("div",{className:l},Object(s.createElement)("div",{className:"smb-testimonial__item"},Object(s.createElement)("div",{className:"smb-testimonial__item__figure"},Object(s.createElement)("img",{src:c,alt:r,className:"wp-image-".concat(n)})),Object(s.createElement)("div",{className:"smb-testimonial__item__body"},Object(s.createElement)("div",{className:"smb-testimonial__item__content"},Object(s.createElement)(j.RichText.Content,{value:o})),Object(s.createElement)("div",{className:"smb-testimonial__item__name"},Object(s.createElement)(j.RichText.Content,{value:i})),!j.RichText.isEmpty(m)&&Object(s.createElement)("div",{className:"smb-testimonial__item__lede"},Object(s.createElement)(j.RichText.Content,{value:m})))))},deprecated:x};l(n),l(c)}]);