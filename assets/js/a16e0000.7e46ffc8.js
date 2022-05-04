"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[26241],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(p,".").concat(d)]||f[d]||s[d]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},65628:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={},p=void 0,u={unversionedId:"III. Using Spring Boot/20.5.2. Remote Update",id:"III. Using Spring Boot/20.5.2. Remote Update",title:"20.5.2. Remote Update",description:"20.5.2 \u8fdc\u7a0b\u66f4\u65b0",source:"@site/docs/III. Using Spring Boot/20.5.2. Remote Update.md",sourceDirName:"III. Using Spring Boot",slug:"/III. Using Spring Boot/20.5.2. Remote Update",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/20.5.2. Remote Update",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/III. Using Spring Boot/20.5.2. Remote Update.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"20.5.1. Running the Remote Client Application",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/20.5.1. Running the Remote Client Application"},next:{title:"README",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/"}},l={},s=[{value:"20.5.2 \u8fdc\u7a0b\u66f4\u65b0",id:"2052-\u8fdc\u7a0b\u66f4\u65b0",level:3}],f={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"2052-\u8fdc\u7a0b\u66f4\u65b0"},"20.5.2 \u8fdc\u7a0b\u66f4\u65b0"),(0,i.kt)("p",null,"\u8fdc\u7a0b\u5ba2\u6237\u7aef\u5c06\u76d1\u542c\u5e94\u7528\u7684classpath\u53d8\u5316\u3002\u4efb\u4f55\u66f4\u65b0\u7684\u8d44\u6e90\u90fd\u4f1a\u53d1\u5e03\u5230\u8fdc\u7a0b\u5e94\u7528\uff0c\u5e76\u89e6\u53d1\u91cd\u542f\u3002\u8fd9\u5728\u4f60\u4f7f\u7528\u4e91\u670d\u52a1\u8fed\u4ee3\u67d0\u4e2a\u7279\u6027\u65f6\u975e\u5e38\u6709\u7528\u3002\u901a\u5e38\u8fdc\u7a0b\u66f4\u65b0\u548c\u91cd\u542f\u6bd4\u5b8c\u6574rebuild\u548cdeploy\u5feb\u591a\u4e86\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6ce8")," \u6587\u4ef6\u53ea\u6709\u5728\u8fdc\u7a0b\u5ba2\u6237\u7aef\u8fd0\u884c\u65f6\u624d\u76d1\u63a7\u3002\u5982\u679c\u4f60\u5728\u542f\u52a8\u8fdc\u7a0b\u5ba2\u6237\u7aef\u4e4b\u524d\u6539\u53d8\u4e00\u4e2a\u6587\u4ef6\uff0c\u5b83\u662f\u4e0d\u4f1a\u88ab\u53d1\u5e03\u5230\u8fdc\u7a0bserver\u7684\u3002"))}d.isMDXComponent=!0}}]);