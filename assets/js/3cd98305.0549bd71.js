"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[95161],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,d=f["".concat(u,".").concat(m)]||f[m]||l[m]||i;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},82297:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={},u=void 0,p={unversionedId:"IX. \u2018How-to\u2019 guides/75.11 Configure Tomcat",id:"IX. \u2018How-to\u2019 guides/75.11 Configure Tomcat",title:"75.11 Configure Tomcat",description:"75.11 \u914d\u7f6eTomcat",source:"@site/docs/IX. \u2018How-to\u2019 guides/75.11 Configure Tomcat.md",sourceDirName:"IX. \u2018How-to\u2019 guides",slug:"/IX. \u2018How-to\u2019 guides/75.11 Configure Tomcat",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/75.11 Configure Tomcat",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IX. \u2018How-to\u2019 guides/75.11 Configure Tomcat.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"75.10.1 Customize Tomcat\u2019s Proxy Configuration",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/75.10.1 Customize Tomcat\u2019s Proxy Configuration"},next:{title:"75.12 Enable Multiple Connectors with Tomcat",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/75.12 Enable Multiple Connectors with Tomcat"}},s={},l=[{value:"75.11 \u914d\u7f6eTomcat",id:"7511-\u914d\u7f6etomcat",level:3}],f={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"7511-\u914d\u7f6etomcat"},"75.11 \u914d\u7f6eTomcat"),(0,i.kt)("p",null,"\u901a\u5e38\u4f60\u53ef\u4ee5\u9075\u5faa",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#howto-discover-build-in-options-for-external-properties"},"74.8 \u53d1\u73b0\u5916\u90e8\u5c5e\u6027\u7684\u5185\u7f6e\u9009\u9879"),"\u5173\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"@ConfigurationProperties"),"\uff08\u8fd9\u91cc\u4e3b\u8981\u7684\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"ServerProperties"),"\uff09\u7684\u5efa\u8bae\uff0c\u4f46\u4e5f\u770b\u4e0b",(0,i.kt)("inlineCode",{parentName:"p"},"WebServerFactoryCustomizer"),"\u548c\u5404\u79cd\u4f60\u53ef\u4ee5\u6dfb\u52a0\u7684Tomcat\u7279\u5b9a\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"*Customizers"),"\u3002"),(0,i.kt)("p",null,"Tomcat APIs\u76f8\u5f53\u4e30\u5bcc\uff0c\u4e00\u65e6\u83b7\u53d6\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"TomcatServletWebServerFactory"),"\uff0c\u4f60\u5c31\u80fd\u591f\u4ee5\u591a\u79cd\u65b9\u5f0f\u4fee\u6539\u5b83\uff0c\u6216\u66f4\u5f7b\u5e95\u5730\u5c31\u662f\u6dfb\u52a0\u4f60\u81ea\u5df1\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"TomcatServletWebServerFactory"),"\u3002"))}m.isMDXComponent=!0}}]);