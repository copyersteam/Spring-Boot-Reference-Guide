"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[59917],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59868:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={},p=void 0,s={unversionedId:"V. Spring Boot Actuator/Metrics",id:"V. Spring Boot Actuator/Metrics",title:"Metrics",description:"54. \u5ea6\u91cf\u6307\u6807\uff08Metrics\uff09",source:"@site/docs/V. Spring Boot Actuator/54. Metrics.md",sourceDirName:"V. Spring Boot Actuator",slug:"/V. Spring Boot Actuator/Metrics",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/Metrics",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/V. Spring Boot Actuator/54. Metrics.md",tags:[],version:"current",sidebarPosition:54,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Loggers",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/Loggers"},next:{title:"Auditing",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/Auditing"}},l={},u=[{value:"54. \u5ea6\u91cf\u6307\u6807\uff08Metrics\uff09",id:"54-\u5ea6\u91cf\u6307\u6807metrics",level:3}],m={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"54-\u5ea6\u91cf\u6307\u6807metrics"},"54. \u5ea6\u91cf\u6307\u6807\uff08Metrics\uff09"),(0,i.kt)("p",null,"Spring Boot\u6267\u884c\u5668\u4e3a",(0,i.kt)("a",{parentName:"p",href:"https://micrometer.io/"},"Micrometer"),"\u63d0\u4f9b\u4e86\u4f9d\u8d56\u7ba1\u7406\u548c\u81ea\u52a8\u914d\u7f6e\u3002Micrometer\u662f\u4e00\u79cd\u5e94\u7528\u5ea6\u91cf\u5916\u89c2\u3002\u5b83\u652f\u6301\u8bb8\u591a\u7684\u76d1\u63a7\u7cfb\u7edf\uff0c\u5305\u62ec\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#production-ready-metrics-export-atlas"},"Atlas")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#production-ready-metrics-export-datadog"},"Datadog")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#production-ready-metrics-export-ganglia"},"Ganglia")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#production-ready-metrics-export-graphite"},"Graphite")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#production-ready-metrics-export-influx"},"Influx")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#production-ready-metrics-export-jmx"},"JMX")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#production-ready-metrics-export-newrelic"},"New Relic")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#production-ready-metrics-export-prometheus"},"Prometheus")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#production-ready-metrics-export-signalfx"},"SignalFx")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#production-ready-metrics-export-simple"},"Simple (in-memory)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#production-ready-metrics-export-statsd"},"StatsD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#production-ready-metrics-export-wavefront"},"Wavefront"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6ce8")," \u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"https://micrometer.io/docs"},"\u6587\u6863"),"\uff0c\u5b66\u4e60\u66f4\u591a\u7684Micrometer\u529f\u80fd\uff0c\u7279\u522b\u662f",(0,i.kt)("a",{parentName:"p",href:"https://micrometer.io/docs/concepts"},"\u6982\u5ff5\u7ae0\u8282"),"\u3002"))}d.isMDXComponent=!0}}]);