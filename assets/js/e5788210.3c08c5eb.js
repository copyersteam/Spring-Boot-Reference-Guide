"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[71837],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return l}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(r),l=o,g=f["".concat(u,".").concat(l)]||f[l]||d[l]||a;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function l(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},46542:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return l},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={},u=void 0,p={unversionedId:"IV. Spring Boot features/43.3.15 Auto-configured Data Redis Tests",id:"IV. Spring Boot features/43.3.15 Auto-configured Data Redis Tests",title:"43.3.15 Auto-configured Data Redis Tests",description:"43.3.15 \u81ea\u52a8\u914d\u7f6e\u7684Data Redis\u6d4b\u8bd5",source:"@site/docs/IV. Spring Boot features/43.3.15 Auto-configured Data Redis Tests.md",sourceDirName:"IV. Spring Boot features",slug:"/IV. Spring Boot features/43.3.15 Auto-configured Data Redis Tests",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/43.3.15 Auto-configured Data Redis Tests",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IV. Spring Boot features/43.3.15 Auto-configured Data Redis Tests.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"43.3.14 Auto-configured Data Neo4j Tests",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/43.3.14 Auto-configured Data Neo4j Tests"},next:{title:"43.3.16 Auto-configured Data LDAP Tests",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/43.3.16 Auto-configured Data LDAP Tests"}},c={},d=[{value:"43.3.15 \u81ea\u52a8\u914d\u7f6e\u7684Data Redis\u6d4b\u8bd5",id:"43315-\u81ea\u52a8\u914d\u7f6e\u7684data-redis\u6d4b\u8bd5",level:3}],f={toc:d};function l(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"43315-\u81ea\u52a8\u914d\u7f6e\u7684data-redis\u6d4b\u8bd5"},"43.3.15 \u81ea\u52a8\u914d\u7f6e\u7684Data Redis\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"@DataRedisTest"),"\u6d4b\u8bd5Redis\u5e94\u7528\u3002\u9ed8\u8ba4\u7684\uff0c\u5b83\u5c06\u4f1a\u626b\u63cf",(0,a.kt)("inlineCode",{parentName:"p"},"@RedisHash"),"\u7c7b\u548c\u914d\u7f6eSpring Data Redis\u4ed3\u5e93\u3002\u5e38\u89c4\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"@Component"),"bean\u5c06\u4e0d\u4f1a\u52a0\u8f7d\u8fdb",(0,a.kt)("inlineCode",{parentName:"p"},"ApplicationContext"),"\u3002\uff08\u5728Spring Boot\u91cc\u4f7f\u7528Redis\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b",(0,a.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#boot-features-redis"},"\u7ae0\u8282 30.1 Redis"),"\u3002\uff09"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\u5c55\u793a\u4e86\u4f7f\u7528\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"@DataRedisTest"),"\u6ce8\u89e3\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import org.junit.runner.RunWith;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.autoconfigure.data.redis.DataRedisTest;\nimport org.springframework.test.context.junit4.SpringRunner;\n\n@RunWith(SpringRunner.class)\n@DataRedisTest\npublic class ExampleDataRedisTests {\n\n    @Autowired\n    private YourRepository repository;\n\n    //\n}\n")),(0,a.kt)("p",null,"\u5728",(0,a.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#test-auto-configuration"},"\u9644\u5f55"),"\u4e2d\u53ef\u4ee5\u67e5\u770b",(0,a.kt)("inlineCode",{parentName:"p"},"@DataRedisTest"),"\u5f00\u542f\u7684\u81ea\u52a8\u914d\u7f6e\u5217\u8868\u3002"))}l.isMDXComponent=!0}}]);