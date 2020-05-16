!function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=c.apply(null,r);i&&e.push(i)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(r=function(){return c}.apply(t,[]))||(e.exports=r)}()},function(e,t){!function(){e.exports=this.lodash}()},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){!function(){e.exports=this.wp.richText}()},function(e,t){!function(){e.exports=this.wp.plugins}()},function(e){e.exports=JSON.parse('{"title":{"type":"string","source":"html","selector":".smb-price-menu__item__title","default":""},"price":{"type":"string","source":"html","selector":".smb-price-menu__item__price","default":""}}')},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"name",(function(){return b})),n.d(r,"settings",(function(){return d}));var c={};n.r(c),n.d(c,"name",(function(){return k})),n.d(c,"settings",(function(){return v}));n(5);var o=n(0),i=(n(4),n(6));n(7),n(8);var s=function(e){if(e){var t=e.name,n=e.settings;Object(i.registerBlockType)(t,n)}},l=n(2),u={common:"smb",section:"smb-section"},a="#cd162c",m=n(3),p=n.n(m),f=n(1),b="snow-monkey-blocks/price-menu",d={title:Object(l.__)("Price menu","snow-monkey-blocks"),description:Object(l.__)("Display the menu name and the price.","snow-monkey-blocks"),icon:{foreground:a,src:"warning"},category:u.common,edit:function(e){var t=e.className,n=p()("smb-price-menu",t);return Object(o.createElement)("div",{className:n},Object(o.createElement)(f.InnerBlocks,{allowedBlocks:["snow-monkey-blocks/price-menu--item"],template:[["snow-monkey-blocks/price-menu--item"]],templateLock:!1}))},save:function(e){var t=e.className,n=p()("smb-price-menu",t);return Object(o.createElement)("div",{className:n},Object(o.createElement)(f.InnerBlocks.Content,null))},example:{innerBlocks:[{name:"snow-monkey-blocks/price-menu--item",attributes:{title:"Lorem ipsum",price:"$100"}},{name:"snow-monkey-blocks/price-menu--item",attributes:{title:"dolor sit amet",price:"$200"}}]}},_=n(9),k="snow-monkey-blocks/price-menu--item",v={title:Object(l.__)("Item","snow-monkey-blocks"),description:Object(l.__)("It is a child block of the price menu block.","snow-monkey-blocks"),icon:{foreground:a,src:"warning"},category:u.common,parent:["snow-monkey-blocks/price-menu"],attributes:_,edit:function(e){var t=e.attributes,n=e.setAttributes,r=e.className,c=t.title,i=t.price,s=p()("smb-price-menu__item",r);return Object(o.createElement)("div",{className:s},Object(o.createElement)(f.RichText,{className:"smb-price-menu__item__title",placeholder:Object(l.__)("Write title…","snow-monkey-blocks"),value:c,allowedFormats:[],onChange:function(e){return n({title:e})},keepPlaceholderOnFocus:!0}),Object(o.createElement)(f.RichText,{className:"smb-price-menu__item__price",placeholder:Object(l.__)("Write price…","snow-monkey-blocks"),value:i,allowedFormats:[],onChange:function(e){return n({price:e})},keepPlaceholderOnFocus:!0}))},save:function(e){var t=e.attributes,n=e.className,r=t.title,c=t.price,i=p()("smb-price-menu__item",n);return Object(o.createElement)("div",{className:i},Object(o.createElement)("div",{className:"smb-price-menu__item__title"},Object(o.createElement)(f.RichText.Content,{value:r})),Object(o.createElement)("div",{className:"smb-price-menu__item__price"},Object(o.createElement)(f.RichText.Content,{value:c})))}};s(r),s(c)}]);