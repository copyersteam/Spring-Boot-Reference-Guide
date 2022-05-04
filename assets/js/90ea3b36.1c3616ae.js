"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[7431],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return g}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=u(t),g=o,d=f["".concat(c,".").concat(g)]||f[g]||l[g]||i;return t?r.createElement(d,a(a({ref:n},s),{},{components:t})):r.createElement(d,a({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},38858:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return l}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],p={},c=void 0,u={unversionedId:"III. Using Spring Boot/15.1. Importing Additional Configuration Classes",id:"III. Using Spring Boot/15.1. Importing Additional Configuration Classes",title:"15.1. Importing Additional Configuration Classes",description:"15.1. \u5bfc\u5165\u5176\u4ed6\u914d\u7f6e\u7c7b",source:"@site/docs/III. Using Spring Boot/15.1. Importing Additional Configuration Classes.md",sourceDirName:"III. Using Spring Boot",slug:"/III. Using Spring Boot/15.1. Importing Additional Configuration Classes",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/15.1. Importing Additional Configuration Classes",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/III. Using Spring Boot/15.1. Importing Additional Configuration Classes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"14.2. Locating the Main Application Class",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/14.2. Locating the Main Application Class"},next:{title:"15.2. Importing XML Configuration",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/15.2. Importing XML Configuration"}},s={},l=[{value:"15.1. \u5bfc\u5165\u5176\u4ed6\u914d\u7f6e\u7c7b",id:"151-\u5bfc\u5165\u5176\u4ed6\u914d\u7f6e\u7c7b",level:3}],f={toc:l};function g(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"151-\u5bfc\u5165\u5176\u4ed6\u914d\u7f6e\u7c7b"},"15.1. \u5bfc\u5165\u5176\u4ed6\u914d\u7f6e\u7c7b"),(0,i.kt)("p",null,"\u4f60\u4e0d\u9700\u8981\u5c06\u6240\u6709\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"@Configuration"),"\u653e\u8fdb\u4e00\u4e2a\u5355\u72ec\u7684\u7c7b\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"@Import"),"\u6ce8\u89e3\u53ef\u4ee5\u7528\u6765\u5bfc\u5165\u5176\u4ed6\u914d\u7f6e\u7c7b\u3002\u53e6\u5916\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"@ComponentScan"),"\u6ce8\u89e3\u81ea\u52a8\u6536\u96c6\u6240\u6709Spring\u7ec4\u4ef6\uff0c\u5305\u62ec",(0,i.kt)("inlineCode",{parentName:"p"},"@Configuration"),"\u7c7b\u3002"))}g.isMDXComponent=!0}}]);