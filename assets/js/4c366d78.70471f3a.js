"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[64063],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50009:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],p={},l=void 0,c={unversionedId:"IX. \u2018How-to\u2019 guides/80.3 Initialize a Database",id:"IX. \u2018How-to\u2019 guides/80.3 Initialize a Database",title:"80.3 Initialize a Database",description:"80.3 \u521d\u59cb\u5316\u6570\u636e\u5e93",source:"@site/docs/IX. \u2018How-to\u2019 guides/80.3 Initialize a Database.md",sourceDirName:"IX. \u2018How-to\u2019 guides",slug:"/IX. \u2018How-to\u2019 guides/80.3 Initialize a Database",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/80.3 Initialize a Database",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IX. \u2018How-to\u2019 guides/80.3 Initialize a Database.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"80.2 Initialize a Database Using Hibernate",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/80.2 Initialize a Database Using Hibernate"},next:{title:"80.4 Initialize a Spring Batch Database",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/80.4 Initialize a Spring Batch Database"}},s={},u=[{value:"80.3 \u521d\u59cb\u5316\u6570\u636e\u5e93",id:"803-\u521d\u59cb\u5316\u6570\u636e\u5e93",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"803-\u521d\u59cb\u5316\u6570\u636e\u5e93"},"80.3 \u521d\u59cb\u5316\u6570\u636e\u5e93"),(0,i.kt)("p",null,"Spring Boot\u53ef\u4ee5\u81ea\u52a8\u521b\u5efa",(0,i.kt)("inlineCode",{parentName:"p"},"\u6570\u636e\u6e90"),"\u7684\u6a21\u5f0f\uff08DDL\u811a\u672c\uff09\u5e76\u521d\u59cb\u5316\u5b83\uff08DML\u811a\u672c\uff09\u3002\u5b83\u4ece\u6807\u51c6\u7684\u6839\u7c7b\u8def\u5f84\u4f4d\u7f6e\u52a0\u8f7dSQL\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"schema.sql"),"\u4e0e",(0,i.kt)("inlineCode",{parentName:"p"},"data.sql"),"\uff09\u3002\u6b64\u5916\uff0cSpring Boot\u5904\u7406",(0,i.kt)("inlineCode",{parentName:"p"},"schema-${platform}.sql"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"data-${platform}.sql"),"\u6587\u4ef6(\u5982\u679c\u5b58\u5728)\uff0c\u5176\u4e2d",(0,i.kt)("inlineCode",{parentName:"p"},"platform"),"\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"spring.datasource.platform"),"\u7684\u503c\u3002\u8fd9\u5141\u8bb8\u4f60\u5728\u5fc5\u8981\u65f6\u5207\u6362\u5230\u7279\u5b9a\u4e8e\u6570\u636e\u5e93\u7684\u811a\u672c\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u5c06\u5176\u8bbe\u7f6e\u4e3a\u6570\u636e\u5e93\u7684\u4f9b\u5e94\u5546\u540d\u79f0(",(0,i.kt)("inlineCode",{parentName:"p"},"hsqldb"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"h2"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"oracle"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"mysql"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"postgresql"),"\u7b49)\u3002"),(0,i.kt)("p",null,"Spring Boot\u81ea\u52a8\u521b\u5efa\u5d4c\u5165\u5f0f",(0,i.kt)("inlineCode",{parentName:"p"},"\u6570\u636e\u6e90"),"\u7684\u6a21\u5f0f\u3002\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"spring.datasource.initialization-mode"),"\u5c5e\u6027\u5b9a\u5236\u6b64\u884c\u4e3a(\u4e5f\u53ef\u4ee5\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"always"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"never"),")\u3002"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cSpring Boot\u652f\u6301Spring JDBC\u521d\u59cb\u5316\u5668\u7684\u6545\u969c\u5feb\u901f\u7279\u6027\u3002\u8fd9\u610f\u5473\u7740\uff0c\u5982\u679c\u811a\u672c\u5bfc\u81f4\u5f02\u5e38\uff0c\u5e94\u7528\u7a0b\u5e8f\u5c06\u65e0\u6cd5\u542f\u52a8\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e",(0,i.kt)("inlineCode",{parentName:"p"},"spring.datasource.continue-on-error"),"\u6765\u8c03\u6574\u8be5\u884c\u4e3a\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6ce8")," \u5728\u57fa\u4e8eJPA\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u8ba9Hibernate\u521b\u5efa\u6a21\u5f0f\u6216\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"schema.sql"),"\u3002\u4f46\u4f60\u4e0d\u80fd\u4e24\u8005\u90fd\u505a\u3002\u5982\u679c\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"schema.sql"),"\uff0c\u8bf7\u786e\u4fdd\u7981\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"spring.jpa.hibernate.ddl-auto"),"\u3002"))}m.isMDXComponent=!0}}]);