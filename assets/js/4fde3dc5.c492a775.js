"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[62527],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||l[d]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},31338:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return l}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],p={},c=void 0,u={unversionedId:"IV. Spring Boot features/30.9.2 Spring Data LDAP Repositories",id:"IV. Spring Boot features/30.9.2 Spring Data LDAP Repositories",title:"30.9.2 Spring Data LDAP Repositories",description:"30.9.2 Spring Data LDAP\u4ed3\u5e93",source:"@site/docs/IV. Spring Boot features/30.9.2 Spring Data LDAP Repositories.md",sourceDirName:"IV. Spring Boot features",slug:"/IV. Spring Boot features/30.9.2 Spring Data LDAP Repositories",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/30.9.2 Spring Data LDAP Repositories",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IV. Spring Boot features/30.9.2 Spring Data LDAP Repositories.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"30.9.1 Connecting to an LDAP Server",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/30.9.1 Connecting to an LDAP Server"},next:{title:"30.9.3 Embedded In-memory LDAP Server",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/30.9.3 Embedded In-memory LDAP Server"}},s={},l=[{value:"30.9.2 Spring Data LDAP\u4ed3\u5e93",id:"3092-spring-data-ldap\u4ed3\u5e93",level:3}],f={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"3092-spring-data-ldap\u4ed3\u5e93"},"30.9.2 Spring Data LDAP\u4ed3\u5e93"),(0,a.kt)("p",null,"Spring Data\u5305\u542b\u4e86\u652f\u6301LDAP\u7684\u4ed3\u5e93\u3002Spring Data LDAP\u7684\u8be6\u7ec6\u60c5\u51b5\uff0c\u8bf7\u67e5\u770b\u4ed6\u4eec\u7684",(0,a.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-data/ldap/docs/1.0.x/reference/html/"},"\u53c2\u8003\u6587\u6863"),"\u3002"),(0,a.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u50cf\u5176\u5b83Spring Bean\u4e00\u6837\uff0c\u6ce8\u5165\u4e00\u4e2a\u81ea\u52a8\u914d\u7f6e\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"LdapTemplate"),"\u5b9e\u4f8b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Component\npublic class MyBean {\n\n    private final LdapTemplate template;\n\n    @Autowired\n    public MyBean(LdapTemplate template) {\n        this.template = template;\n    }\n\n    // ...\n\n}\n")))}d.isMDXComponent=!0}}]);