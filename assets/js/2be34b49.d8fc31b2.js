"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[7001],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,m=f["".concat(u,".").concat(d)]||f[d]||l[d]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},51030:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={},u=void 0,s={unversionedId:"IV. Spring Boot features/Distributed Transactions with JTA",id:"IV. Spring Boot features/Distributed Transactions with JTA",title:"Distributed Transactions with JTA",description:"37. \u4f7f\u7528JTA\u5904\u7406\u5206\u5e03\u5f0f\u4e8b\u52a1",source:"@site/docs/IV. Spring Boot features/37. Distributed Transactions with JTA.md",sourceDirName:"IV. Spring Boot features",slug:"/IV. Spring Boot features/Distributed Transactions with JTA",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/Distributed Transactions with JTA",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IV. Spring Boot features/37. Distributed Transactions with JTA.md",tags:[],version:"current",sidebarPosition:37,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sending Email",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/Sending Email"},next:{title:"Hazelcast",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/Hazelcast"}},p={},l=[{value:"37. \u4f7f\u7528JTA\u5904\u7406\u5206\u5e03\u5f0f\u4e8b\u52a1",id:"37-\u4f7f\u7528jta\u5904\u7406\u5206\u5e03\u5f0f\u4e8b\u52a1",level:3}],f={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"37-\u4f7f\u7528jta\u5904\u7406\u5206\u5e03\u5f0f\u4e8b\u52a1"},"37. \u4f7f\u7528JTA\u5904\u7406\u5206\u5e03\u5f0f\u4e8b\u52a1"),(0,i.kt)("p",null,"Spring Boot\u901a\u8fc7",(0,i.kt)("a",{parentName:"p",href:"http://www.atomikos.com/"},"Atomkos"),"\u6216",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bitronix/btm"},"Bitronix"),"\u7684\u5185\u5d4c\u4e8b\u52a1\u7ba1\u7406\u5668\u652f\u6301\u8de8\u591a\u4e2aXA\u8d44\u6e90\u7684\u5206\u5e03\u5f0fJTA\u4e8b\u52a1\uff0c\u5f53\u90e8\u7f72\u5230\u6070\u5f53\u7684J2EE\u5e94\u7528\u670d\u52a1\u5668\u65f6\u4e5f\u4f1a\u652f\u6301JTA\u4e8b\u52a1\u3002"),(0,i.kt)("p",null,"\u5f53\u53d1\u73b0JTA\u73af\u5883\u65f6\uff0cSpring Boot\u5c06\u4f7f\u7528Spring\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"JtaTransactionManager"),"\u6765\u7ba1\u7406\u4e8b\u52a1\u3002\u81ea\u52a8\u914d\u7f6e\u7684JMS\uff0cDataSource\u548cJPA\u3000beans\u5c06\u88ab\u5347\u7ea7\u4ee5\u652f\u6301XA\u4e8b\u52a1\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u6807\u51c6\u7684Spring idioms\uff0c\u6bd4\u5982",(0,i.kt)("inlineCode",{parentName:"p"},"@Transactional"),"\uff0c\u6765\u53c2\u4e0e\u5230\u4e00\u4e2a\u5206\u5e03\u5f0f\u4e8b\u52a1\u4e2d\u3002\u5982\u679c\u5904\u4e8eJTA\u73af\u5883\uff0c\u4f46\u4ecd\u60f3\u4f7f\u7528\u672c\u5730\u4e8b\u52a1\uff0c\u4f60\u53ef\u4ee5\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"spring.jta.enabled"),"\u5c5e\u6027\u8bbe\u7f6e\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\u6765\u7981\u7528JTA\u81ea\u52a8\u914d\u7f6e\u529f\u80fd\u3002"))}d.isMDXComponent=!0}}]);