"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[29962],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||l[d]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},83704:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return l}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],p={},c=void 0,u={unversionedId:"IV. Spring Boot features/46.3.3 Property Conditions",id:"IV. Spring Boot features/46.3.3 Property Conditions",title:"46.3.3 Property Conditions",description:"46.3.3 Property\u6761\u4ef6",source:"@site/docs/IV. Spring Boot features/46.3.3 Property Conditions.md",sourceDirName:"IV. Spring Boot features",slug:"/IV. Spring Boot features/46.3.3 Property Conditions",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/46.3.3 Property Conditions",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IV. Spring Boot features/46.3.3 Property Conditions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"46.3.2 Bean Conditions",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/46.3.2 Bean Conditions"},next:{title:"46.3.4 Resource Conditions",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/46.3.4 Resource Conditions"}},s={},l=[{value:"46.3.3 Property\u6761\u4ef6",id:"4633-property\u6761\u4ef6",level:3}],f={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"4633-property\u6761\u4ef6"},"46.3.3 Property\u6761\u4ef6"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@ConditionalOnProperty"),"\u6ce8\u89e3\u53ef\u4ee5\u6839\u636e\u4e00\u4e2aSpring ",(0,i.kt)("inlineCode",{parentName:"p"},"Environment"),"\u5c5e\u6027\u6765\u51b3\u5b9a\u662f\u5426\u5305\u542b\u914d\u7f6e\uff0c\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"prefix"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"\u5c5e\u6027\u6307\u5b9a\u8981\u68c0\u67e5\u7684\u914d\u7f6e\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4efb\u4f55\u5b58\u5728\u7684\u53ea\u8981\u4e0d\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\u7684\u5c5e\u6027\u90fd\u4f1a\u5339\u914d\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"havingValue"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"matchIfMissing"),"\u5c5e\u6027\u521b\u5efa\u66f4\u9ad8\u7ea7\u7684\u68c0\u6d4b\u3002"))}d.isMDXComponent=!0}}]);