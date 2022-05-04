"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[99917],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,g=f["".concat(a,".").concat(d)]||f[d]||s[d]||i;return n?r.createElement(g,u(u({ref:t},p),{},{components:n})):r.createElement(g,u({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var l=2;l<i;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},41117:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),u=["components"],c={},a=void 0,l={unversionedId:"VIII. Build tool plugins/README",id:"VIII. Build tool plugins/README",title:"README",description:"\u6784\u5efa\u5de5\u5177\u63d2\u4ef6",source:"@site/docs/VIII. Build tool plugins/README.md",sourceDirName:"VIII. Build tool plugins",slug:"/VIII. Build tool plugins/",permalink:"/Spring-Boot-Reference-Guide/docs/VIII. Build tool plugins/",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/VIII. Build tool plugins/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"64.6 Adding Extensions to the CLI",permalink:"/Spring-Boot-Reference-Guide/docs/VII. Spring Boot CLI/64.6 Adding Extensions to the CLI"},next:{title:"Spring Boot Maven Plugin",permalink:"/Spring-Boot-Reference-Guide/docs/VIII. Build tool plugins/Spring Boot Maven Plugin"}},p={},s=[{value:"\u6784\u5efa\u5de5\u5177\u63d2\u4ef6",id:"\u6784\u5efa\u5de5\u5177\u63d2\u4ef6",level:3}],f={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u6784\u5efa\u5de5\u5177\u63d2\u4ef6"},"\u6784\u5efa\u5de5\u5177\u63d2\u4ef6"),(0,i.kt)("p",null,"Spring Boot\u4e3aMaven\u548cGradle\u63d0\u4f9b\u6784\u5efa\u5de5\u5177\u63d2\u4ef6\uff0c\u8be5\u63d2\u4ef6\u63d0\u4f9b\u5404\u79cd\u5404\u6837\u7684\u7279\u6027\uff0c\u5305\u62ec\u6253\u5305\u53ef\u6267\u884cjars\u3002\u672c\u7ae0\u8282\u63d0\u4f9b\u5173\u4e8e\u63d2\u4ef6\u7684\u66f4\u591a\u8be6\u60c5\u53ca\u7528\u4e8e\u6269\u5c55\u4e00\u4e2a\u4e0d\u652f\u6301\u7684\u6784\u5efa\u7cfb\u7edf\u6240\u9700\u7684\u5e2e\u52a9\u4fe1\u606f\u3002\u5982\u679c\u4f60\u662f\u521a\u521a\u5f00\u59cb\uff0c\u90a3\u53ef\u80fd\u9700\u8981\u5148\u9605\u8bfb",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#using-boot"},"\u7b2c\u4e09\u90e8\u5206 \u4f7f\u7528Spring Boot"),"\u7ae0\u8282\u7684",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#using-boot-build-systems"},"13. \u6784\u5efa\u7cfb\u7edf"),"\u3002"))}d.isMDXComponent=!0}}]);