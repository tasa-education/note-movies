!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t,n){var o;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)&&o.length){var c=r.apply(null,o);c&&e.push(c)}else if("object"===i)for(var s in o)n.call(o,s)&&o[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.lodash}()},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){!function(){e.exports=this.wp.richText}()},function(e,t){!function(){e.exports=this.wp.plugins}()},function(e){e.exports=JSON.parse('{"isSlim":{"type":"boolean","default":false}}')},function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"name",(function(){return b})),n.d(o,"settings",(function(){return d}));n(5);var r=n(0),i=(n(4),n(7));n(8),n(9);var c=n(1),s={common:"smb",section:"smb-section"},a="#cd162c",l=n(10),u=n(2),f=n.n(u),m=n(3),p=n(6),b="snow-monkey-blocks/container",d={title:Object(c.__)("Container","snow-monkey-blocks"),description:Object(c.__)("Container blocks keep content within a certain width.","snow-monkey-blocks"),icon:{foreground:a,src:"list-view"},category:s.common,attributes:l,edit:function(e){var t=e.attributes,n=e.setAttributes,o=e.className,i=t.isSlim,s=f()("smb-container","c-container",o),a=f()("smb-container__body",{"u-slim-width":!!i});return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(m.InspectorControls,null,Object(r.createElement)(p.PanelBody,{title:Object(c.__)("Block Settings","snow-monkey-blocks")},Object(r.createElement)(p.ToggleControl,{label:Object(c.__)("Make the content width slim","snow-monkey-blocks"),checked:i,onChange:function(e){return n({isSlim:e})}}))),Object(r.createElement)("div",{className:s},Object(r.createElement)("div",{className:a},Object(r.createElement)(m.InnerBlocks,null))))},save:function(e){var t=e.attributes,n=e.className,o=t.isSlim,i=f()("smb-container","c-container",n),c=f()("smb-container__body",{"u-slim-width":!!o});return Object(r.createElement)("div",{className:i},Object(r.createElement)("div",{className:c},Object(r.createElement)(m.InnerBlocks.Content,null)))},example:{innerBlocks:[{name:"core/paragraph",attributes:{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}}]}};!function(e){if(e){var t=e.name,n=e.settings;Object(i.registerBlockType)(t,n)}}(o)}]);