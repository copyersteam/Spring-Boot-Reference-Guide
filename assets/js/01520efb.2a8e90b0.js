"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[49434],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=p(r),f=o,m=l["".concat(u,".").concat(f)]||l[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=l;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},11738:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={},u=void 0,p={unversionedId:"IV. Spring Boot features/30.3.2 Using the Embedded Mode",id:"IV. Spring Boot features/30.3.2 Using the Embedded Mode",title:"30.3.2 Using the Embedded Mode",description:"30.3.2 \u4f7f\u7528\u5185\u5d4c\u6a21\u5f0f",source:"@site/docs/IV. Spring Boot features/30.3.2 Using the Embedded Mode.md",sourceDirName:"IV. Spring Boot features",slug:"/IV. Spring Boot features/30.3.2 Using the Embedded Mode",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/30.3.2 Using the Embedded Mode",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IV. Spring Boot features/30.3.2 Using the Embedded Mode.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"30.3.1 Connecting to a Neo4j Database",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/30.3.1 Connecting to a Neo4j Database"},next:{title:"30.3.3 Neo4jSession",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/30.3.3 Neo4jSession"}},s={},d=[{value:"30.3.2 \u4f7f\u7528\u5185\u5d4c\u6a21\u5f0f",id:"3032-\u4f7f\u7528\u5185\u5d4c\u6a21\u5f0f",level:3}],l={toc:d};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"3032-\u4f7f\u7528\u5185\u5d4c\u6a21\u5f0f"},"30.3.2 \u4f7f\u7528\u5185\u5d4c\u6a21\u5f0f"),(0,a.kt)("p",null,"\u5982\u679c\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"org.neo4j:neo4j-ogm-embedded-driver"),"\u4f9d\u8d56\u6dfb\u52a0\u5230\u5e94\u7528\u4e2d\uff0cSpring Boot\u4f1a\u81ea\u52a8\u914d\u7f6e\u4e00\u4e2a\u8fdb\u7a0b\u5185\uff08in-process\uff09\u7684\u5185\u5d4cNeo4j\u5b9e\u4f8b\uff0c\u5f53\u5e94\u7528\u5173\u95ed\u65f6\uff0c\u8be5\u5b9e\u4f8b\u4e0d\u4f1a\u6301\u4e45\u5316\u4efb\u4f55\u6570\u636e\u3002\u8bbe\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"spring.data.neo4j.embedded.enabled=false"),"\u53ef\u663e\u5f0f\u5173\u95ed\u8be5\u6a21\u5f0f\u3002\u4f60\u4e5f\u53ef\u4ee5\u63d0\u4f9b\u6307\u5411\u6570\u636e\u5e93\u6587\u4ef6\u7684\u8def\u5f84\uff0c\u6765\u542f\u7528\u5185\u5d4c\u6a21\u5f0f\u7684\u6301\u4e45\u5316\u7279\u6027\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"spring.data.neo4j.uri=file://var/tmp/graph.db\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8")," Neo4j OGM\u5185\u5d4c\u7684\u9a71\u52a8\u4e0d\u63d0\u4f9bNeo4j\u5185\u6838\u3002\u7528\u6237\u9700\u8981\u624b\u52a8\u6dfb\u52a0\u4f9d\u8d56\uff0c\u8be6\u60c5\u8bf7\u67e5\u770b",(0,a.kt)("a",{parentName:"p",href:"http://neo4j.com/docs/ogm-manual/current/reference/#reference:getting-started"},"\u6587\u6863"),"\u3002"))}f.isMDXComponent=!0}}]);