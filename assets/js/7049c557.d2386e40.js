"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[57011],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(r),d=a,g=b["".concat(u,".").concat(d)]||b[d]||l[d]||i;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=b;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},11056:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={},u=void 0,p={unversionedId:"IX. \u2018How-to\u2019 guides/80.5.2 Execute Liquibase Database Migrations on Startup",id:"IX. \u2018How-to\u2019 guides/80.5.2 Execute Liquibase Database Migrations on Startup",title:"80.5.2 Execute Liquibase Database Migrations on Startup",description:"80.5.2 \u542f\u52a8\u65f6\u6267\u884cLiquibase\u6570\u636e\u5e93\u8fc1\u79fb",source:"@site/docs/IX. \u2018How-to\u2019 guides/80.5.2 Execute Liquibase Database Migrations on Startup.md",sourceDirName:"IX. \u2018How-to\u2019 guides",slug:"/IX. \u2018How-to\u2019 guides/80.5.2 Execute Liquibase Database Migrations on Startup",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/80.5.2 Execute Liquibase Database Migrations on Startup",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IX. \u2018How-to\u2019 guides/80.5.2 Execute Liquibase Database Migrations on Startup.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"80.5.1 Execute Flyway Database Migrations on Startup",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/80.5.1 Execute Flyway Database Migrations on Startup"},next:{title:"81.1 Disable Transacted JMS Session",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/81.1 Disable Transacted JMS Session"}},c={},l=[{value:"80.5.2 \u542f\u52a8\u65f6\u6267\u884cLiquibase\u6570\u636e\u5e93\u8fc1\u79fb",id:"8052-\u542f\u52a8\u65f6\u6267\u884cliquibase\u6570\u636e\u5e93\u8fc1\u79fb",level:3}],b={toc:l};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"8052-\u542f\u52a8\u65f6\u6267\u884cliquibase\u6570\u636e\u5e93\u8fc1\u79fb"},"80.5.2 \u542f\u52a8\u65f6\u6267\u884cLiquibase\u6570\u636e\u5e93\u8fc1\u79fb"),(0,i.kt)("p",null,"\u60f3\u8981\u5728\u542f\u52a8\u65f6\u81ea\u52a8\u8fd0\u884cLiquibase\u6570\u636e\u5e93\u8fc1\u79fb\uff0c\u4f60\u9700\u8981\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"org.liquibase:liquibase-core"),"\u6dfb\u52a0\u5230classpath\u4e0b\u3002"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u4ece",(0,i.kt)("inlineCode",{parentName:"p"},"db/changelog/db.changelog-master.yaml"),"\u8bfb\u53d6master\u53d8\u5316\u65e5\u5fd7\u3002\u4f60\u53ef\u4ee5\u8bbe\u7f6e",(0,i.kt)("inlineCode",{parentName:"p"},"spring.liquibase.change-log"),"\u6539\u53d8\u4f4d\u7f6e\u3002\u9664\u4e86YAML\uff0cLiquibase\u8fd8\u652f\u6301JSON\u3001XML\u548cSQL\u6539\u53d8\u65e5\u5fd7\u683c\u5f0f\u3002"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0bLiquibase\u5c06\u4f1a\u5728\u4f60\u7684\u4e0a\u4e0b\u6587\u4e2d\u81ea\u52a8\u88c5\u914d\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"@Primary"),"\uff09",(0,i.kt)("inlineCode",{parentName:"p"},"\u6570\u636e\u6e90"),"\uff0c\u5e76\u4f7f\u7528\u6b64\u6570\u636e\u6e90\u8fdb\u884c\u8fc1\u79fb\u3002\u5982\u679c\u4f60\u60f3\u8981\u4f7f\u7528\u4e00\u4e2a\u4e0d\u540c\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"\u6570\u636e\u6e90"),"\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u5e76\u628a\u5b83\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"@Bean"),"\u4f5c\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"@LiquibaseDataSource"),"\u6807\u8bb0\u3002\u5982\u679c\u4f60\u90a3\u6837\u505a\u4e86\uff0c\u5e76\u4e14\u4f60\u8fd8\u60f3\u8981\u521b\u5efa\u4e24\u4e2a\u6570\u636e\u6e90\uff0c\u8bb0\u5f97\u521b\u5efa\u53e6\u5916\u4e00\u4e2a\uff0c\u5e76\u628a\u5b83\u6807\u8bb0\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"@Primary"),"\u3002\u6216\u8005\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u5916\u90e8\u5c5e\u6027\u91cc\u8bbe\u7f6e",(0,i.kt)("inlineCode",{parentName:"p"},"spring.liquibase.[url,user,password]"),"\uff0c\u4f7f\u7528Liquibase\u7684\u672c\u5730",(0,i.kt)("inlineCode",{parentName:"p"},"\u6570\u636e\u6e90"),"\u3002\u8bbe\u7f6e",(0,i.kt)("inlineCode",{parentName:"p"},"spring.flyway.url"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"spring.flyway.user"),"\u8db3\u4ee5\u5bfc\u81f4Liquibase\u4f7f\u7528\u81ea\u5df1\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"\u6570\u636e\u6e90"),"\u3002\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u8fd9\u4e09\u4e2a\u5c5e\u6027\u4e2d\u7684\u4efb\u4f55\u4e00\u4e2a\uff0c\u5219\u5c06\u4f7f\u7528\u4e0e\u5176\u7b49\u6548\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"spring.datasource"),"\u5c5e\u6027\u7684\u503c\u3002"),(0,i.kt)("p",null,"\u66f4\u591a\u7684\u50cf\u4e0a\u4e0b\u6587\u3001\u9ed8\u8ba4\u7684\u6a21\u5f0f\u4e4b\u7c7b\u7684\u7ec6\u8282\uff0c\u8bf7\u67e5\u770b",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spring-projects/spring-boot/tree/v2.0.0.RELEASE/spring-boot-project/spring-boot-autoconfigure/src/main/java/org/springframework/boot/autoconfigure/liquibase/LiquibaseProperties.java"},"LiquibaseProperties"),"\u3002"),(0,i.kt)("p",null,"\u8fd9\u91cc\u6709\u4e2a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spring-projects/spring-boot/tree/v2.0.0.RELEASE/spring-boot-samples/spring-boot-sample-liquibase"},"Liquibase\u793a\u4f8b"),"\u53ef\u4f5c\u4e3a\u53c2\u8003\u3002"))}d.isMDXComponent=!0}}]);