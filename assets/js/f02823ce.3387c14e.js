"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[91454],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(t),f=i,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return t?n.createElement(g,a(a({ref:r},s),{},{components:t})):n.createElement(g,a({ref:r},s))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var u={};for(var l in r)hasOwnProperty.call(r,l)&&(u[l]=r[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},10986:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],u={},l=void 0,c={unversionedId:"VIII. Build tool plugins/71.2. Nested Libraries",id:"VIII. Build tool plugins/71.2. Nested Libraries",title:"71.2. Nested Libraries",description:"71.2. \u5185\u5d4c\u5e93",source:"@site/docs/VIII. Build tool plugins/71.2. Nested Libraries.md",sourceDirName:"VIII. Build tool plugins",slug:"/VIII. Build tool plugins/71.2. Nested Libraries",permalink:"/Spring-Boot-Reference-Guide/docs/VIII. Build tool plugins/71.2. Nested Libraries",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/VIII. Build tool plugins/71.2. Nested Libraries.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"71.1. Repackaging Archives",permalink:"/Spring-Boot-Reference-Guide/docs/VIII. Build tool plugins/71.1. Repackaging Archives"},next:{title:"71.3. Finding a Main Class",permalink:"/Spring-Boot-Reference-Guide/docs/VIII. Build tool plugins/71.3. Finding a Main Class"}},s={},p=[{value:"71.2. \u5185\u5d4c\u5e93",id:"712-\u5185\u5d4c\u5e93",level:3}],d={toc:p};function f(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"712-\u5185\u5d4c\u5e93"},"71.2. \u5185\u5d4c\u5e93"),(0,o.kt)("p",null,"\u5f53\u91cd\u65b0\u6253\u5305\u4e00\u4e2a\u5b58\u6863\u65f6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"org.springframework.boot.loader.tools.Libraries"),"\u63a5\u53e3\u6765\u5305\u542b\u5bf9\u4f9d\u8d56\u6587\u4ef6\u7684\u5f15\u7528\u3002\u5728\u8fd9\u91cc\u6211\u4eec\u4e0d\u63d0\u4f9b\u4efb\u4f55\u8be5",(0,o.kt)("inlineCode",{parentName:"p"},"Libraries"),"\u63a5\u53e3\u7684\u5177\u4f53\u5b9e\u73b0\uff0c\u56e0\u4e3a\u5b83\u4eec\u901a\u5e38\u8ddf\u5177\u4f53\u7684\u6784\u5efa\u7cfb\u7edf\u76f8\u5173\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u5b58\u6863\u5df2\u7ecf\u5305\u542blibraries\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"Libraries.NONE"),"\u3002"))}f.isMDXComponent=!0}}]);