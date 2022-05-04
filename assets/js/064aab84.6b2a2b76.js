"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[80931],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),g=i,d=f["".concat(c,".").concat(g)]||f[g]||p[g]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},87581:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={},c=void 0,l={unversionedId:"IV. Spring Boot features/30.6.1 Connecting to Elasticsearch by Using Jest",id:"IV. Spring Boot features/30.6.1 Connecting to Elasticsearch by Using Jest",title:"30.6.1 Connecting to Elasticsearch by Using Jest",description:"30.6.1 \u4f7f\u7528Jest\u8fde\u63a5Elasticsearch",source:"@site/docs/IV. Spring Boot features/30.6.1 Connecting to Elasticsearch by Using Jest.md",sourceDirName:"IV. Spring Boot features",slug:"/IV. Spring Boot features/30.6.1 Connecting to Elasticsearch by Using Jest",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/30.6.1 Connecting to Elasticsearch by Using Jest",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IV. Spring Boot features/30.6.1 Connecting to Elasticsearch by Using Jest.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"30.6 Elasticsearch",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/30.6 Elasticsearch"},next:{title:"30.6.2 Connecting to Elasticsearch by Using Spring Data",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/30.6.2 Connecting to Elasticsearch by Using Spring Data"}},u={},p=[{value:"30.6.1 \u4f7f\u7528Jest\u8fde\u63a5Elasticsearch",id:"3061-\u4f7f\u7528jest\u8fde\u63a5elasticsearch",level:3}],f={toc:p};function g(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"3061-\u4f7f\u7528jest\u8fde\u63a5elasticsearch"},"30.6.1 \u4f7f\u7528Jest\u8fde\u63a5Elasticsearch"),(0,o.kt)("p",null,"\u5982\u679c\u6dfb\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},"Jest"),"\u4f9d\u8d56\uff0c\u4f60\u53ef\u4ee5\u6ce8\u5165\u4e00\u4e2a\u81ea\u52a8\u914d\u7f6e\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"JestClient"),"\uff0c\u9ed8\u8ba4\u76ee\u6807\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:9200/"),"\u3002\u4f60\u4e5f\u53ef\u4ee5\u8fdb\u4e00\u6b65\u914d\u7f6e\u8be5\u5ba2\u6237\u7aef\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"spring.elasticsearch.jest.uris=http://search.example.com:9200\nspring.elasticsearch.jest.read-timeout=10000\nspring.elasticsearch.jest.username=user\nspring.elasticsearch.jest.password=secret\n")),(0,o.kt)("p",null,"\u4e3a\u4e86\u5b9e\u73b0\u66f4\u9ad8\u7ea7\u7684\u5b9a\u5236\uff0c\u4f60\u4e5f\u53ef\u4ee5\u6ce8\u518c\u4efb\u610f\u6570\u91cf\u7684\u5b9e\u73b0\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"HttpClientConfigBuilderCustomizer"),"\u7684bean\u3002\u4e0b\u9762\u7684\u4f8b\u5b50\u8c03\u6574\u4e86\u989d\u5916\u7684HTTP\u8bbe\u7f6e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"static class HttpSettingsCustomizer implements HttpClientConfigBuilderCustomizer {\n\n    @Override\n    public void customize(HttpClientConfig.Builder builder) {\n        builder.maxTotalConnection(100).defaultMaxTotalConnectionPerRoute(5);\n    }\n\n}\n")),(0,o.kt)("p",null,"\u5b9a\u4e49\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"JestClient")," bean\u4ee5\u5b8c\u5168\u63a7\u5236\u6ce8\u518c\u8fc7\u7a0b\u3002"))}g.isMDXComponent=!0}}]);