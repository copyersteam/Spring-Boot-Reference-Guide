"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[48285],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,m=f["".concat(u,".").concat(d)]||f[d]||l[d]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},25546:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={},u=void 0,p={unversionedId:"IV. Spring Boot features/29.1.3. Connection to a JNDI DataSource",id:"IV. Spring Boot features/29.1.3. Connection to a JNDI DataSource",title:"29.1.3. Connection to a JNDI DataSource",description:"29.1.3. \u8fde\u63a5JNDI\u6570\u636e\u5e93",source:"@site/docs/IV. Spring Boot features/29.1.3. Connection to a JNDI DataSource.md",sourceDirName:"IV. Spring Boot features",slug:"/IV. Spring Boot features/29.1.3. Connection to a JNDI DataSource",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/29.1.3. Connection to a JNDI DataSource",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IV. Spring Boot features/29.1.3. Connection to a JNDI DataSource.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"29.1.2. Connection to a Production Database",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/29.1.2. Connection to a Production Database"},next:{title:"29.2. Using JdbcTemplate",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/29.2. Using JdbcTemplate"}},s={},l=[{value:"29.1.3. \u8fde\u63a5JNDI\u6570\u636e\u5e93",id:"2913-\u8fde\u63a5jndi\u6570\u636e\u5e93",level:3}],f={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"2913-\u8fde\u63a5jndi\u6570\u636e\u5e93"},"29.1.3. \u8fde\u63a5JNDI\u6570\u636e\u5e93"),(0,a.kt)("p",null,"\u5982\u679c\u6b63\u5728\u5c06Spring Boot\u5e94\u7528\u90e8\u7f72\u5230\u4e00\u4e2a\u5e94\u7528\u670d\u52a1\u5668\uff0c\u4f60\u53ef\u80fd\u60f3\u8981\u7528\u5e94\u7528\u670d\u52a1\u5668\u5185\u5efa\u7684\u7279\u6027\u6765\u914d\u7f6e\u548c\u7ba1\u7406\u4f60\u7684DataSource\uff0c\u5e76\u4f7f\u7528JNDI\u8bbf\u95ee\u5b83\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"spring.datasource.jndi-name"),"\u5c5e\u6027\u53ef\u7528\u6765\u66ff\u4ee3",(0,a.kt)("inlineCode",{parentName:"p"},"spring.datasource.url"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"spring.datasource.username"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"spring.datasource.password"),"\uff0c\u53bb\u4ece\u4e00\u4e2a\u7279\u5b9a\u7684JNDI\u8def\u5f84\u83b7\u53d6",(0,a.kt)("inlineCode",{parentName:"p"},"DataSource"),"\u3002\u6bd4\u5982\uff0c\u4ee5\u4e0b",(0,a.kt)("inlineCode",{parentName:"p"},"application.properties"),"\u4e2d\u7684\u7247\u6bb5\u5c55\u793a\u4e86\u5982\u4f55\u83b7\u53d6JBoss AS\u5b9a\u4e49\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"DataSource"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"spring.datasource.jndi-name=java:jboss/datasources/customers\n")))}d.isMDXComponent=!0}}]);