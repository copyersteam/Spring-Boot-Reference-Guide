"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[705],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),g=c(n),f=o,d=g["".concat(l,".").concat(f)]||g[f]||s[f]||i;return n?r.createElement(d,p(p({ref:t},u),{},{components:n})):r.createElement(d,p({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,p=new Array(i);p[0]=g;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,p[1]=a;for(var c=2;c<i;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4930:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),p=["components"],a={},l=void 0,c={unversionedId:"VI. Deploying Spring Boot Applications/Deploying to the Cloud",id:"VI. Deploying Spring Boot Applications/Deploying to the Cloud",title:"Deploying to the Cloud",description:"60. \u90e8\u7f72\u5230\u4e91\u7aef",source:"@site/docs/VI. Deploying Spring Boot Applications/60. Deploying to the Cloud.md",sourceDirName:"VI. Deploying Spring Boot Applications",slug:"/VI. Deploying Spring Boot Applications/Deploying to the Cloud",permalink:"/Spring-Boot-Reference-Guide/docs/VI. Deploying Spring Boot Applications/Deploying to the Cloud",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/VI. Deploying Spring Boot Applications/60. Deploying to the Cloud.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/Spring-Boot-Reference-Guide/docs/VI. Deploying Spring Boot Applications/"},next:{title:"Installing Spring Boot Applications",permalink:"/Spring-Boot-Reference-Guide/docs/VI. Deploying Spring Boot Applications/Installing Spring Boot Applications"}},u={},s=[{value:"60. \u90e8\u7f72\u5230\u4e91\u7aef",id:"60-\u90e8\u7f72\u5230\u4e91\u7aef",level:3}],g={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"60-\u90e8\u7f72\u5230\u4e91\u7aef"},"60. \u90e8\u7f72\u5230\u4e91\u7aef"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u5927\u591a\u6570\u6d41\u884c\u4e91PaaS\uff08\u5e73\u53f0\u5373\u670d\u52a1\uff09\u63d0\u4f9b\u5546\uff0cSpring Boot\u7684\u53ef\u6267\u884cjars\u5c31\u662f\u4e3a\u5b83\u4eec\u51c6\u5907\u7684\u3002\u8fd9\u4e9b\u63d0\u4f9b\u5546\u5f80\u5f80\u8981\u6c42\u4f60\u81ea\u5df1\u63d0\u4f9b\u5bb9\u5668\u3002\u5b83\u4eec\u53ea\u8d1f\u8d23\u7ba1\u7406\u5e94\u7528\u7684\u8fdb\u7a0b\uff08\u4e0d\u7279\u522b\u9488\u5bf9Java\u5e94\u7528\u7a0b\u5e8f\uff09\uff0c\u6240\u4ee5\u5b83\u4eec\u9700\u8981\u4e00\u4e2a\u4e2d\u95f4\u5c42\u6765\u5c06\u4f60\u7684\u5e94\u7528\u9002\u914d\u5230\u4e91\u6982\u5ff5\u4e2d\u7684\u4e00\u4e2a\u8fd0\u884c\u8fdb\u7a0b\u3002"),(0,i.kt)("p",null,"\u4e24\u4e2a\u6d41\u884c\u7684\u4e91\u63d0\u4f9b\u5546\uff0cHeroku\u548cCloud Foundry\uff0c\u91c7\u53d6\u4e00\u4e2a\u6253\u5305\uff08'buildpack'\uff09\u65b9\u6cd5\u3002\u4e3a\u4e86\u542f\u52a8\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u4e0d\u7ba1\u9700\u8981\u4ec0\u4e48\uff0cbuildpack\u90fd\u4f1a\u5c06\u5b83\u4eec\u6253\u5305\u5230\u4f60\u7684\u90e8\u7f72\u4ee3\u7801\u3002\u5b83\u53ef\u80fd\u662f\u4e00\u4e2aJDK\u548c\u4e00\u4e2ajava\u8c03\u7528\uff0c\u4e5f\u53ef\u80fd\u662f\u4e00\u4e2a\u5185\u5d4c\u7684webserver\uff0c\u6216\u8005\u662f\u4e00\u4e2a\u6210\u719f\u7684\u5e94\u7528\u670d\u52a1\u5668\u3002buildpack\u662f\u53ef\u63d2\u62d4\u7684\uff0c\u4f46\u4f60\u6700\u597d\u5c3d\u53ef\u80fd\u5c11\u7684\u5bf9\u5b83\u8fdb\u884c\u81ea\u5b9a\u4e49\u8bbe\u7f6e\u3002\u8fd9\u53ef\u4ee5\u51cf\u5c11\u4e0d\u53d7\u4f60\u63a7\u5236\u7684\u529f\u80fd\u8303\u56f4\uff0c\u6700\u5c0f\u5316\u90e8\u7f72\u548c\u751f\u4ea7\u73af\u5883\u7684\u53d1\u6563\u3002"),(0,i.kt)("p",null,"\u7406\u60f3\u60c5\u51b5\u4e0b\uff0c\u4f60\u7684\u5e94\u7528\u5c31\u50cf\u4e00\u4e2aSpring Boot\u53ef\u6267\u884cjar\uff0c\u6240\u6709\u8fd0\u884c\u9700\u8981\u7684\u4e1c\u897f\u90fd\u6253\u5305\u5230\u5b83\u5185\u90e8\u3002"),(0,i.kt)("p",null,"\u672c\u7ae0\u8282\u6211\u4eec\u5c06\u770b\u5230\u5728\u201cGetting Started\u201d\u7ae0\u8282",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#getting-started-first-application"},"\u5f00\u53d1\u7684\u7b80\u5355\u5e94\u7528"),"\u662f\u600e\u4e48\u5728\u4e91\u7aef\u8fd0\u884c\u7684\u3002"))}f.isMDXComponent=!0}}]);