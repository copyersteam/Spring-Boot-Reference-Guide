"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[5555],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),g=u(t),d=o,f=g["".concat(c,".").concat(d)]||g[d]||l[d]||i;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},30227:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return l}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],p={},c=void 0,u={unversionedId:"III. Using Spring Boot/13.1. Dependency Management",id:"III. Using Spring Boot/13.1. Dependency Management",title:"13.1. Dependency Management",description:"13.1. \u4f9d\u8d56\u7ba1\u7406",source:"@site/docs/III. Using Spring Boot/13.1. Dependency Management.md",sourceDirName:"III. Using Spring Boot",slug:"/III. Using Spring Boot/13.1. Dependency Management",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/13.1. Dependency Management",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/III. Using Spring Boot/13.1. Dependency Management.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What to Read Next",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/What to Read Next"},next:{title:"13.2. Maven",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/13.2. Maven"}},s={},l=[{value:"13.1. \u4f9d\u8d56\u7ba1\u7406",id:"131-\u4f9d\u8d56\u7ba1\u7406",level:3}],g={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"131-\u4f9d\u8d56\u7ba1\u7406"},"13.1. \u4f9d\u8d56\u7ba1\u7406"),(0,i.kt)("p",null,"Spring Boot\u6bcf\u6b21\u53d1\u5e03\u65f6\u90fd\u4f1a\u63d0\u4f9b\u4e00\u4e2a\u5b83\u6240\u652f\u6301\u7684\u7cbe\u9009\u4f9d\u8d56\u5217\u8868\u3002\u5b9e\u9645\u4e0a\uff0c\u5728\u6784\u5efa\u914d\u7f6e\u91cc\u4f60\u4e0d\u9700\u8981\u63d0\u4f9b\u4efb\u4f55\u4f9d\u8d56\u7684\u7248\u672c\uff0c\u56e0\u4e3aSpring Boot\u5df2\u7ecf\u66ff\u4f60\u7ba1\u7406\u597d\u4e86\u3002\u5f53\u66f4\u65b0Spring Boot\u65f6\uff0c\u90a3\u4e9b\u4f9d\u8d56\u4e5f\u4f1a\u4e00\u8d77\u66f4\u65b0\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6ce8")," \u5982\u679c\u6709\u5fc5\u8981\uff0c\u4f60\u53ef\u4ee5\u6307\u5b9a\u4f9d\u8d56\u7684\u7248\u672c\u6765\u8986\u76d6Spring Boot\u9ed8\u8ba4\u7248\u672c\u3002"),(0,i.kt)("p",null,"\u7cbe\u9009\u5217\u8868\u5305\u62ec\u6240\u6709\u80fd\u591f\u8ddfSpring Boot\u4e00\u8d77\u4f7f\u7528\u7684Spring\u6a21\u5757\u53ca\u7b2c\u4e09\u65b9\u5e93\uff0c\u8be5\u5217\u8868\u652f\u6301",(0,i.kt)("a",{parentName:"p",href:"http://docs.spring.io/spring-boot/docs/current-SNAPSHOT/reference/htmlsingle/#using-boot-maven-parent-pom"},"Maven"),"\u548c",(0,i.kt)("a",{parentName:"p",href:"http://docs.spring.io/spring-boot/docs/current-SNAPSHOT/reference/htmlsingle/#build-tool-plugins-gradle-dependency-management"},"Gradle"),"\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4efd\u6807\u51c6\u7684",(0,i.kt)("a",{parentName:"p",href:"http://docs.spring.io/spring-boot/docs/current-SNAPSHOT/reference/htmlsingle/#using-boot-maven-without-a-parent"},"\u6750\u6599\u6e05\u5355(spring-boot-dependencies)"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6ce8")," Spring Boot\u6bcf\u6b21\u53d1\u5e03\u90fd\u5173\u8054\u4e00\u4e2aSpring\u6846\u67b6\u7684\u57fa\u7840\u7248\u672c\u3002\u5f3a\u70c8\u5efa\u8bae\u4f60\u4e0d\u8981\u81ea\u5df1\u6307\u5b9aSpring\u7248\u672c\u3002"))}d.isMDXComponent=!0}}]);