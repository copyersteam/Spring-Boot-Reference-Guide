"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[93381],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return d}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,g=f["".concat(c,".").concat(d)]||f[d]||s[d]||i;return r?t.createElement(g,a(a({ref:n},p),{},{components:r})):t.createElement(g,a({ref:n},p))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},44974:function(e,n,r){r.r(n),r.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var t=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],l={},c=void 0,u={unversionedId:"IV. Spring Boot features/30.5.1 Connecting to Solr",id:"IV. Spring Boot features/30.5.1 Connecting to Solr",title:"30.5.1 Connecting to Solr",description:"30.5.1 \u8fde\u63a5Solr",source:"@site/docs/IV. Spring Boot features/30.5.1 Connecting to Solr.md",sourceDirName:"IV. Spring Boot features",slug:"/IV. Spring Boot features/30.5.1 Connecting to Solr",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/30.5.1 Connecting to Solr",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IV. Spring Boot features/30.5.1 Connecting to Solr.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"30.5 Solr",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/30.5 Solr"},next:{title:"30.5.2 Spring Data Solr Repositories",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/30.5.2 Spring Data Solr Repositories"}},p={},s=[{value:"30.5.1 \u8fde\u63a5Solr",id:"3051-\u8fde\u63a5solr",level:3}],f={toc:s};function d(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"3051-\u8fde\u63a5solr"},"30.5.1 \u8fde\u63a5Solr"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u6ce8\u5165\u4e00\u4e2a\u81ea\u52a8\u914d\u7f6e\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"SolrClient"),"\u5b9e\u4f8b\u3002\u5c31\u50cf\u5176\u4ed6Spring beans\u90a3\u6837\uff0c\u8be5\u5b9e\u4f8b\u9ed8\u8ba4\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:8983/solr"),"\u8fde\u63a5Solr\u670d\u52a1\u5668\u3002\u4e0b\u9762\u7684\u4f8b\u5b50\u5c55\u793a\u4e86\u600e\u6837\u6ce8\u5165\u4e00\u4e2aSolr bean\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Component\npublic class MyBean {\n\n    private SolrClient solr;\n\n    @Autowired\n    public MyBean(SolrClient solr) {\n        this.solr = solr;\n    }\n\n    // ...\n\n}\n")),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u6dfb\u52a0\u81ea\u5df1\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"SolrClient"),"\u7c7b\u578b\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"@Bean"),"\uff0c\u5b83\u5c06\u4f1a\u66ff\u6362\u9ed8\u8ba4\u5b9e\u4f8b\u3002"))}d.isMDXComponent=!0}}]);