"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[34755],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=c(r),g=o,d=f["".concat(p,".").concat(g)]||f[g]||s[g]||i;return r?n.createElement(d,a(a({ref:t},l),{},{components:r})):n.createElement(d,a({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},59546:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],u={},p=void 0,c={unversionedId:"IV. Spring Boot features/27.2.1 Spring WebFlux Auto-configuration",id:"IV. Spring Boot features/27.2.1 Spring WebFlux Auto-configuration",title:"27.2.1 Spring WebFlux Auto-configuration",description:"27.2.1 Spring WebFlux\u81ea\u52a8\u914d\u7f6e",source:"@site/docs/IV. Spring Boot features/27.2.1 Spring WebFlux Auto-configuration.md",sourceDirName:"IV. Spring Boot features",slug:"/IV. Spring Boot features/27.2.1 Spring WebFlux Auto-configuration",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/27.2.1 Spring WebFlux Auto-configuration",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IV. Spring Boot features/27.2.1 Spring WebFlux Auto-configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"27.2 The \u201cSpring WebFlux Framework\u201d",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/27.2 The \u201cSpring WebFlux Framework\u201d"},next:{title:"27.2.2 HTTP Codecs with HttpMessageReaders and HttpMessageWriters",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/27.2.2 HTTP Codecs with HttpMessageReaders and HttpMessageWriters"}},l={},s=[{value:"27.2.1 Spring WebFlux\u81ea\u52a8\u914d\u7f6e",id:"2721-spring-webflux\u81ea\u52a8\u914d\u7f6e",level:3}],f={toc:s};function g(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"2721-spring-webflux\u81ea\u52a8\u914d\u7f6e"},"27.2.1 Spring WebFlux\u81ea\u52a8\u914d\u7f6e"),(0,i.kt)("p",null,"Spring Boot\u4e3aSpring WebFlux\u63d0\u4f9b\u4e86\u81ea\u52a8\u914d\u7f6e\u3002\u8fd9\u4e9b\u914d\u7f6e\u5728\u5927\u591a\u6570\u5e94\u7528\u91cc\u80fd\u591f\u5f88\u597d\u5730\u5de5\u4f5c\u3002"),(0,i.kt)("p",null,"\u81ea\u52a8\u914d\u7f6e\u4f1a\u6dfb\u52a0\u4ee5\u4e0b\u7279\u6027\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e3a",(0,i.kt)("inlineCode",{parentName:"li"},"HttpMessageReader"),"\u548c",(0,i.kt)("inlineCode",{parentName:"li"},"HttpMessageWriter"),"\u5b9e\u4f8b\u914d\u7f6e\u7f16\u89e3\u7801\u5668(",(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#boot-features-webflux-httpcodecs"},"\u5728\u6b64\u6587\u6863\u7684\u540e\u9762\u7ae0\u8282"),"\u6709\u63cf\u8ff0)\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u670d\u52a1\u9759\u6001\u5185\u5bb9\uff0c\u5305\u62ec\u5bf9WebJars\u7684\u652f\u6301 (",(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#boot-features-spring-mvc-static-content"},"\u5728\u6b64\u6587\u6863\u7684\u540e\u9762\u7ae0\u8282"),"\u6709\u63cf\u8ff0)\u3002")),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u4fdd\u6301Spring Boot WebFlux\u7279\u6027\uff0c\u5e76\u6dfb\u52a0\u989d\u5916\u7684",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/5.0.4.RELEASE/spring-framework-reference/web.html#web-reactive"},"WebFlux\u914d\u7f6e"),"\uff0c\u4f60\u53ef\u4ee5\u6dfb\u52a0\u4f60\u81ea\u5df1\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"WebFluxConfigurer"),"\u7c7b\u578b\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"@Configuration"),"\u7c7b\uff0c\u4f46\u662f\u4e0d\u52a0",(0,i.kt)("inlineCode",{parentName:"p"},"@EnableWebFlux"),"\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u5b8c\u5168\u63a7\u5236Spring WebFlux\uff0c\u4f60\u53ef\u4ee5\u6dfb\u52a0\u4f60\u81ea\u5df1\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"@Configuration"),"\uff0c\u5e76\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"@EnableWebFlux"),"\u6807\u6ce8\u3002"))}g.isMDXComponent=!0}}]);