"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[37373],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),l=u(r),d=o,f=l["".concat(c,".").concat(d)]||l[d]||s[d]||a;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=l;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},39043:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],p={},c=void 0,u={unversionedId:"V. Spring Boot Actuator/54.6 Metrics endpoint",id:"V. Spring Boot Actuator/54.6 Metrics endpoint",title:"54.6 Metrics endpoint",description:"54.6 \u5ea6\u91cf\u7aef\u70b9",source:"@site/docs/V. Spring Boot Actuator/54.6 Metrics endpoint.md",sourceDirName:"V. Spring Boot Actuator",slug:"/V. Spring Boot Actuator/54.6 Metrics endpoint",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/54.6 Metrics endpoint",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/V. Spring Boot Actuator/54.6 Metrics endpoint.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"54.5.1 Per-meter properties",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/54.5.1 Per-meter properties"},next:{title:"56.1 Custom HTTP tracing",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/56.1 Custom HTTP tracing"}},m={},s=[{value:"54.6 \u5ea6\u91cf\u7aef\u70b9",id:"546-\u5ea6\u91cf\u7aef\u70b9",level:3}],l={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"546-\u5ea6\u91cf\u7aef\u70b9"},"54.6 \u5ea6\u91cf\u7aef\u70b9"),(0,a.kt)("p",null,"Spring Boot\u63d0\u4f9b\u4e86\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"metrics"),"\u7aef\u70b9\uff0c\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u68c0\u67e5\u5e94\u7528\u7a0b\u5e8f\u6536\u96c6\u7684\u5ea6\u91cf\u6570\u636e\u3002\u8be5\u7aef\u70b9\u5728\u7f3a\u7701\u60c5\u51b5\u4e0b\u4e0d\u53ef\u7528\uff0c\u5fc5\u987b\u516c\u5f00\u3002\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#production-ready-endpoints-exposing-endpoints"},"\u516c\u5f00\u7aef\u70b9"),"\u3002"),(0,a.kt)("p",null,"\u5bfc\u822a\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"/actuator/metrics"),"\u663e\u793a\u53ef\u7528\u7684meter\u540d\u79f0\u5217\u8868\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u63d0\u4f9b\u4e00\u4e2a\u9009\u62e9\u5668(\u4f8b\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"/actuator/metrics/jvm.memory.max"),")\uff0c\u6765\u67e5\u770b\u5173\u4e8e\u67d0\u4e2a\u7279\u5b9a\u4eea\u8868\u7684\u4fe1\u606f\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8")," \u8fd9\u91cc\u4f7f\u7528\u7684\u540d\u79f0\u5e94\u8be5\u4e0e\u4ee3\u7801\u4e2d\u4f7f\u7528\u7684\u540d\u79f0\u76f8\u5339\u914d\uff0c\u800c\u4e0d\u662f\u7ecf\u8fc7\u7ea6\u5b9a\u4e4b\u540e\u7684\u540d\u79f0\u2014\u2014\u5bf9\u4e8e\u5c06\u5176\u53d1\u9001\u5230\u7684\u76d1\u89c6\u7cfb\u7edf\u6765\u8bf4\uff0c\u8fd9\u662f\u4e00\u79cd\u89c4\u8303\u5316\u7684\u547d\u540d\u7ea6\u5b9a\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u5982\u679c",(0,a.kt)("inlineCode",{parentName:"p"},"jvm.memory.max"),"\u5728Prometheus\u4e2d\u663e\u793a\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"jvm_memory_max"),"\uff0c\u56e0\u4e3a\u5b83\u7684snake case\u547d\u540d\u7ea6\u5b9a\uff0c\u4f60\u4ecd\u7136\u5e94\u8be5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"jvm.memory.max"),"\u3002\u5728\u68c0\u67e5",(0,a.kt)("inlineCode",{parentName:"p"},"metrics"),"\u7aef\u70b9\u4e2d\u7684\u5ea6\u91cf\u6570\u636e\u65f6\uff0c\u5c06\u5176\u4f5c\u4e3a\u9009\u62e9\u5668\u3002"),(0,a.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u5728URL\u7684\u672b\u5c3e\u6dfb\u52a0\u4efb\u610f\u6570\u91cf\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"tag=KEY:VALUE"),"\u67e5\u8be2\u53c2\u6570\uff0c\u4ee5\u4fbf\u6309\u7ef4\u5411\u4e0b\u94bb\u53d6\u4e00\u4e2ameter\uff0c\u4f8b\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"/actuator/metrics/jvm.memory.max?tag=area:nonheap"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8")," \u62a5\u544a\u7684\u6d4b\u91cf\u503c\u662f\u6240\u6709\u4e0emeter\u540d\u79f0\u548c\u6240\u5e94\u7528\u7684\u4efb\u4f55\u6807\u8bb0\u5339\u914d\u7684meter\u7684\u7edf\u8ba1\u6570\u636e\u7684\u603b\u548c\u3002\u56e0\u6b64\uff0c\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u8fd4\u56de\u7684\u201c\u503c\u201d\u7edf\u8ba1\u91cf\u662f\u5806\u7684\u201c\u4ee3\u7801\u7f13\u5b58\u201d\u3001\u201c\u538b\u7f29\u7c7b\u7a7a\u95f4\u201d\u548c\u201c\u5143\u7a7a\u95f4\u201d\u533a\u57df\u7684\u6700\u5927\u5185\u5b58\u5360\u7528\u7684\u603b\u548c\u3002\u5982\u679c\u60a8\u53ea\u662f\u60f3\u67e5\u770b\u201cMetaspace\u201d\u7684\u6700\u5927\u5927\u5c0f\uff0c\u4f60\u53ef\u4ee5\u6dfb\u52a0\u4e00\u4e2a\u989d\u5916\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"tag=id:Metaspace"),"\uff0c\u5373",(0,a.kt)("inlineCode",{parentName:"p"},"/actuator/metrics/jvm.memory.max?tag=area:nonheap&tag=id:Metaspace"),"\u3002"))}d.isMDXComponent=!0}}]);