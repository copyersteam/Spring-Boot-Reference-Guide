"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[67828],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return m}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,d=f["".concat(c,".").concat(m)]||f[m]||l[m]||i;return r?t.createElement(d,a(a({ref:n},s),{},{components:r})):t.createElement(d,a({ref:n},s))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var u=2;u<i;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},33953:function(e,n,r){r.r(n),r.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return l}});var t=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],p={},c=void 0,u={unversionedId:"IV. Spring Boot features/24.2. Accessing Command Line Properties",id:"IV. Spring Boot features/24.2. Accessing Command Line Properties",title:"24.2. Accessing Command Line Properties",description:"24.2. \u8bbf\u95ee\u547d\u4ee4\u884c\u5c5e\u6027",source:"@site/docs/IV. Spring Boot features/24.2. Accessing Command Line Properties.md",sourceDirName:"IV. Spring Boot features",slug:"/IV. Spring Boot features/24.2. Accessing Command Line Properties",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/24.2. Accessing Command Line Properties",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IV. Spring Boot features/24.2. Accessing Command Line Properties.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"24.1. Configuring Random Values",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/24.1. Configuring Random Values"},next:{title:"24.3. Application Property Files",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/24.3. Application Property Files"}},s={},l=[{value:"24.2. \u8bbf\u95ee\u547d\u4ee4\u884c\u5c5e\u6027",id:"242-\u8bbf\u95ee\u547d\u4ee4\u884c\u5c5e\u6027",level:3}],f={toc:l};function m(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"242-\u8bbf\u95ee\u547d\u4ee4\u884c\u5c5e\u6027"},"24.2. \u8bbf\u95ee\u547d\u4ee4\u884c\u5c5e\u6027"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"SpringApplication"),"\u4f1a\u5c06\u6240\u6709\u547d\u4ee4\u884c\u914d\u7f6e\u53c2\u6570\uff08\u4ee5--\u5f00\u5934\uff0c\u6bd4\u5982",(0,i.kt)("inlineCode",{parentName:"p"},"--server.port=9000"),"\uff09\u8f6c\u5316\u6210\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"property"),"\uff0c\u5e76\u5c06\u5176\u6dfb\u52a0\u5230Spring ",(0,i.kt)("inlineCode",{parentName:"p"},"Environment"),"\u4e2d\u3002\u6b63\u5982\u4ee5\u4e0a\u7ae0\u8282\u63d0\u8fc7\u7684\uff0c\u547d\u4ee4\u884c\u5c5e\u6027\u603b\u662f\u4f18\u5148\u4e8e\u5176\u4ed6\u5c5e\u6027\u6e90\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4e0d\u60f3\u5c06\u547d\u4ee4\u884c\u5c5e\u6027\u6dfb\u52a0\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"Environment"),"\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"SpringApplication.setAddCommandLineProperties(false)"),"\u6765\u7981\u7528\u5b83\u4eec\u3002"))}m.isMDXComponent=!0}}]);