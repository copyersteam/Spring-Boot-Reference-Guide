"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[2494],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=u(t),m=o,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||i;return t?r.createElement(d,a(a({ref:n},l),{},{components:t})):r.createElement(d,a({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},50013:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],p={},c=void 0,u={unversionedId:"IV. Spring Boot features/23.6. Web Environment",id:"IV. Spring Boot features/23.6. Web Environment",title:"23.6. Web Environment",description:"23.6. Web\u73af\u5883",source:"@site/docs/IV. Spring Boot features/23.6. Web Environment.md",sourceDirName:"IV. Spring Boot features",slug:"/IV. Spring Boot features/23.6. Web Environment",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/23.6. Web Environment",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IV. Spring Boot features/23.6. Web Environment.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"23.5. Application Events and Listeners",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/23.5. Application Events and Listeners"},next:{title:"23.7. Accessing Application Arguments",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/23.7. Accessing Application Arguments"}},l={},s=[{value:"23.6. Web\u73af\u5883",id:"236-web\u73af\u5883",level:3}],f={toc:s};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"236-web\u73af\u5883"},"23.6. Web\u73af\u5883"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SpringApplication"),"\u5c06\u5c1d\u8bd5\u4e3a\u4f60\u521b\u5efa\u6b63\u786e\u7c7b\u578b\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"ApplicationContext"),"\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6839\u636e\u4f60\u5f00\u53d1\u7684\u662f\u5426\u4e3aweb\u5e94\u7528\u51b3\u5b9a\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"AnnotationConfigApplicationContext"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"AnnotationConfigServletWebServerApplicationContext"),"\u3002"),(0,i.kt)("p",null,"\u7528\u4e8e\u786e\u5b9a\u662f\u5426\u4e3aweb\u73af\u5883\u7684\u7b97\u6cd5\u76f8\u5f53\u7b80\u5355\uff08\u5224\u65ad\u662f\u5426\u5b58\u5728\u67d0\u4e9b\u7c7b\uff09\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"setWebEnvironment(boolean webEnvironment)"),"\u8986\u76d6\u9ed8\u8ba4\u884c\u4e3a\u3002"),(0,i.kt)("p",null,"\u901a\u8fc7\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"setApplicationContextClass(\u2026)"),"\uff0c\u4f60\u53ef\u4ee5\u5b8c\u5168\u63a7\u5236",(0,i.kt)("inlineCode",{parentName:"p"},"ApplicationContext"),"\u7684\u7c7b\u578b\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6ce8")," \u5728Junit\u6d4b\u8bd5\u4e2d\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"SpringApplication"),"\uff0c\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"setWebEnvironment(false)"),"\u662f\u5f88\u6709\u610f\u4e49\u7684\u3002"))}m.isMDXComponent=!0}}]);