"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[89831],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,g=f["".concat(c,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},36369:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],p={},c=void 0,u={unversionedId:"V. Spring Boot Actuator/54.2.4 Graphite",id:"V. Spring Boot Actuator/54.2.4 Graphite",title:"54.2.4 Graphite",description:"54.2.4 Graphite",source:"@site/docs/V. Spring Boot Actuator/54.2.4 Graphite.md",sourceDirName:"V. Spring Boot Actuator",slug:"/V. Spring Boot Actuator/54.2.4 Graphite",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/54.2.4 Graphite",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/V. Spring Boot Actuator/54.2.4 Graphite.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"54.2.3 Ganglia",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/54.2.3 Ganglia"},next:{title:"54.2.5 Influx",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/54.2.5 Influx"}},l={},s=[{value:"54.2.4 Graphite",id:"5424-graphite",level:3}],f={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"5424-graphite"},"54.2.4 Graphite"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6307\u6807\u88ab\u5bfc\u51fa\u5230\u8fd0\u884c\u5728\u672c\u5730\u673a\u5668\u4e0a\u7684",(0,a.kt)("a",{parentName:"p",href:"http://micrometer.io/docs/registry/graphite"},"Graphite"),"\u3002",(0,a.kt)("a",{parentName:"p",href:"https://graphiteapp.org/"},"Graphite\u670d\u52a1\u5668"),"\u4e3b\u673a\u548c\u7aef\u53e3\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u63d0\u4f9b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"management.metrics.export.graphite.host=graphite.example.com\nmanagement.metrics.export.graphite.post=9004\n")))}m.isMDXComponent=!0}}]);