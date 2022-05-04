"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[51786],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=u(r),d=o,f=g["".concat(s,".").concat(d)]||g[d]||l[d]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},71172:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return l}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],p={},s=void 0,u={unversionedId:"IX. \u2018How-to\u2019 guides/79.3 Use Spring Data Repositories",id:"IX. \u2018How-to\u2019 guides/79.3 Use Spring Data Repositories",title:"79.3 Use Spring Data Repositories",description:"79.3 \u4f7f\u7528Spring Data\u4ed3\u5e93",source:"@site/docs/IX. \u2018How-to\u2019 guides/79.3 Use Spring Data Repositories.md",sourceDirName:"IX. \u2018How-to\u2019 guides",slug:"/IX. \u2018How-to\u2019 guides/79.3 Use Spring Data Repositories",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/79.3 Use Spring Data Repositories",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IX. \u2018How-to\u2019 guides/79.3 Use Spring Data Repositories.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"79.2 Configure Two DataSources",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/79.2 Configure Two DataSources"},next:{title:"79.4 Separate @Entity Definitions from Spring Configuration",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/79.4 Separate @Entity Definitions from Spring Configuration"}},c={},l=[{value:"79.3 \u4f7f\u7528Spring Data\u4ed3\u5e93",id:"793-\u4f7f\u7528spring-data\u4ed3\u5e93",level:3}],g={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"793-\u4f7f\u7528spring-data\u4ed3\u5e93"},"79.3 \u4f7f\u7528Spring Data\u4ed3\u5e93"),(0,i.kt)("p",null,"Spring Data\u53ef\u4ee5\u4e3a\u4f60\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"@Repository"),"\u63a5\u53e3\u521b\u5efa\u5404\u79cd\u98ce\u683c\u7684\u5b9e\u73b0\u3002Spring Boot\u4f1a\u4e3a\u4f60\u5904\u7406\u6240\u6709\u4e8b\u60c5\uff0c\u53ea\u8981\u90a3\u4e9b",(0,i.kt)("inlineCode",{parentName:"p"},"@Repositories"),"\u63a5\u53e3\u8ddf\u4f60\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"@EnableAutoConfiguration"),"\u7c7b\u5904\u4e8e\u76f8\u540c\u7684\u5305\uff08\u6216\u5b50\u5305\uff09\u3002"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u5f88\u591a\u5e94\u7528\u6765\u8bf4\uff0c\u4f60\u9700\u8981\u505a\u7684\u5c31\u662f\u5c06\u6b63\u786e\u7684Spring Data\u4f9d\u8d56\u6dfb\u52a0\u5230classpath\u4e0b\uff08JPA\u5bf9\u5e94",(0,i.kt)("inlineCode",{parentName:"p"},"spring-boot-starter-data-jpa"),"\uff0cMongodb\u5bf9\u5e94",(0,i.kt)("inlineCode",{parentName:"p"},"spring-boot-starter-data-mongodb"),"\uff09\uff0c\u521b\u5efa\u4e00\u4e9brepository\u63a5\u53e3\u6765\u5904\u7406",(0,i.kt)("inlineCode",{parentName:"p"},"@Entity"),"\u5bf9\u8c61\u3002\u76f8\u5e94\u793a\u4f8b\u53ef\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spring-projects/spring-boot/tree/v2.0.0.RELEASE/spring-boot-samples/spring-boot-sample-data-jpa"},"JPA\u6837\u672c"),"\u4e0e",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spring-projects/spring-boot/tree/v2.0.0.RELEASE/spring-boot-samples/spring-boot-sample-data-mongodb"},"Mongodb\u6837\u672c"),"\u3002"),(0,i.kt)("p",null,"Spring Boot\u4f1a\u57fa\u4e8e\u5b83\u627e\u5230\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"@EnableAutoConfiguration"),"\u6765\u5c1d\u8bd5\u731c\u6d4b\u4f60\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"@Repository"),"\u5b9a\u4e49\u7684\u4f4d\u7f6e\u3002\u60f3\u8981\u83b7\u53d6\u66f4\u591a\u63a7\u5236\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"@EnableJpaRepositories"),"\u6ce8\u89e3\uff08\u6765\u81eaSpring Data JPA\uff09\u3002"),(0,i.kt)("p",null,"\u6709\u5173Spring\u6570\u636e\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"https://projects.spring.io/spring-data/"},"Spring Data\u9879\u76ee\u9875\u9762"),"\u3002"))}d.isMDXComponent=!0}}]);