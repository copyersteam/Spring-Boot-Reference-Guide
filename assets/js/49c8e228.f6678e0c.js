"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[58896],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return m}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=t.createContext({}),l=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(d.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},s=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=l(n),m=o,f=s["".concat(d,".").concat(m)]||s[m]||u[m]||a;return n?t.createElement(f,i(i({ref:r},c),{},{components:n})):t.createElement(f,i({ref:r},c))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var p={};for(var d in r)hasOwnProperty.call(r,d)&&(p[d]=r[d]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},92649:function(e,r,n){n.r(r),n.d(r,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var t=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],p={},d=void 0,l={unversionedId:"IV. Spring Boot features/30.9.3 Embedded In-memory LDAP Server",id:"IV. Spring Boot features/30.9.3 Embedded In-memory LDAP Server",title:"30.9.3 Embedded In-memory LDAP Server",description:"30.9.3 \u5d4c\u5165\u5f0f\u5185\u5b58\u4e2dLDAP\u670d\u52a1\u5668",source:"@site/docs/IV. Spring Boot features/30.9.3 Embedded In-memory LDAP Server.md",sourceDirName:"IV. Spring Boot features",slug:"/IV. Spring Boot features/30.9.3 Embedded In-memory LDAP Server",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/30.9.3 Embedded In-memory LDAP Server",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IV. Spring Boot features/30.9.3 Embedded In-memory LDAP Server.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"30.9.2 Spring Data LDAP Repositories",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/30.9.2 Spring Data LDAP Repositories"},next:{title:"31.1 Supported Cache Providers",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/31.1 Supported Cache Providers"}},c={},u=[{value:"30.9.3 \u5d4c\u5165\u5f0f\u5185\u5b58\u4e2dLDAP\u670d\u52a1\u5668",id:"3093-\u5d4c\u5165\u5f0f\u5185\u5b58\u4e2dldap\u670d\u52a1\u5668",level:3}],s={toc:u};function m(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"3093-\u5d4c\u5165\u5f0f\u5185\u5b58\u4e2dldap\u670d\u52a1\u5668"},"30.9.3 \u5d4c\u5165\u5f0f\u5185\u5b58\u4e2dLDAP\u670d\u52a1\u5668"),(0,a.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u6d4b\u8bd5\uff0cSpring Boot\u652f\u6301",(0,a.kt)("a",{parentName:"p",href:"https://www.ldap.com/unboundid-ldap-sdk-for-java"},"UnboundID")," \u7684\u5d4c\u5165\u5f0f\u5185\u5b58\u4e2dLDAP\u670d\u52a1\u5668\u7684\u81ea\u52a8\u914d\u7f6e\u3002\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"com.unboundid:unboundid-ldapsdk"),"\u91cc\u6dfb\u52a0\u4f9d\u8d56\uff0c\u58f0\u660e",(0,a.kt)("inlineCode",{parentName:"p"},"base-dn"),"\u5c5e\u6027\uff0c\u6765\u914d\u7f6e\u670d\u52a1\u5668\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"spring.ldap.embedded.base-dn=dc=spring,dc=io\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8")," \u5b9a\u4e49\u591a\u4e2abase-dn\u7684\u503c\u662f\u53ef\u884c\u7684\u3002\u4f46\u662f\uff0c\u8bc6\u522b\u540d\u79f0\u901a\u5e38\u5305\u542b\u9017\u53f7\u3002\u5b83\u4eec\u5fc5\u987b\u4f7f\u7528\u6b63\u786e\u7684\u7b26\u53f7\u5b9a\u4e49\u3002"),(0,a.kt)("p",null,"\u5728yaml\u6587\u4ef6\u91cc\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528yaml\u5217\u8868\u7b26\u53f7\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"spring.ldap.embedded.base-dn:\n  - dc=spring,dc=io\n  - dc=pivotal,dc=io\n")),(0,a.kt)("p",null,"\u5728properties\u6587\u4ef6\u91cc\uff0c\u4f60\u5fc5\u987b\u628a\u7d22\u5f15\u4f5c\u4e3a\u5c5e\u6027\u540d\u7684\u4e00\u90e8\u5206\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"spring.ldap.embedded.base-dn[0]=dc=spring,dc=io\nspring.ldap.embedded.base-dn[1]=dc=pivotal,dc=io\n")),(0,a.kt)("p",null,"\u9ed8\u8ba4\u5730\uff0c\u670d\u52a1\u5668\u4f1a\u5728\u4e00\u4e2a\u968f\u673a\u7684\u7aef\u53e3\u4e2d\u5f00\u59cb\u8fd0\u884c\u3002\u5b83\u4eec\u4f1a\u89e6\u53d1\u5e38\u89c4\u7684LDAP\u652f\u6301\uff08\u4e0d\u9700\u8981\u6307\u5b9a",(0,a.kt)("inlineCode",{parentName:"p"},"spring.ldap.urls"),"\u5c5e\u6027\uff09\u3002\n\u5982\u679c\u5728\u4f60\u7684\u7c7b\u8def\u5f84\u4e0b\u5b58\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"schema.ldif"),"\u6587\u4ef6\uff0c\u5b83\u4f1a\u88ab\u7528\u4e8e\u521d\u59cb\u5316\u670d\u52a1\u5668\u3002\u5982\u679c\u4f60\u60f3\u8981\u4ece\u4e0d\u540c\u7684\u8d44\u6e90\u52a0\u8f7d\u521d\u59cb\u5316\u811a\u672c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"pring.ldap.embedded.ldif"),"\u5c5e\u6027\u3002"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u5730\uff0c\u4e00\u4e2a\u6807\u51c6\u7684\u6a21\u5f0f\u4f1a\u88ab\u7528\u4e8e\u9a8c\u8bc1",(0,a.kt)("inlineCode",{parentName:"p"},"LDIF"),"\u6587\u4ef6\uff0c\u4f60\u53ef\u4ee5\u8bbe\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"spring.ldap.embedded.validation.enabled"),"\u5c5e\u6027\u5b8c\u5168\u5730\u5173\u95ed\u9a8c\u8bc1\u3002\u5982\u679c\u4f60\u6709\u81ea\u5b9a\u4e49\u7684\u5c5e\u6027\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"spring.ldap.embedded.validation.schema"),"\u6765\u5b9a\u4e49\u4f60\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u7c7b\u578b\u6216\u5bf9\u8c61\u7c7b\u3002"))}m.isMDXComponent=!0}}]);