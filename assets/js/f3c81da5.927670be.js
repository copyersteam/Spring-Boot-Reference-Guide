"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[78808],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(t),f=o,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||a;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},47237:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],p={},c=void 0,u={unversionedId:"V. Spring Boot Actuator/50.1 Enabling Endpoints",id:"V. Spring Boot Actuator/50.1 Enabling Endpoints",title:"50.1 Enabling Endpoints",description:"50.1 \u542f\u7528\u7aef\u70b9",source:"@site/docs/V. Spring Boot Actuator/50.1 Enabling Endpoints.md",sourceDirName:"V. Spring Boot Actuator",slug:"/V. Spring Boot Actuator/50.1 Enabling Endpoints",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/50.1 Enabling Endpoints",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/V. Spring Boot Actuator/50.1 Enabling Endpoints.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What to Read Next",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/What to Read Next"},next:{title:"50.10 Application Information",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/50.10 Application Information"}},l={},d=[{value:"50.1 \u542f\u7528\u7aef\u70b9",id:"501-\u542f\u7528\u7aef\u70b9",level:3}],s={toc:d};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"501-\u542f\u7528\u7aef\u70b9"},"50.1 \u542f\u7528\u7aef\u70b9"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u7684\uff0c\u9664\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"shutdown"),"\uff0c\u6240\u6709\u7aef\u70b9\u90fd\u662f\u542f\u7528\u7684\u3002\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"management.endpoint.<id>.enabled"),"\u5c5e\u6027\uff0c\u542f\u7528\u7aef\u70b9\u3002\u4e0b\u9762\u7684\u793a\u4f8b\u542f\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"shutdown"),"\u7aef\u70b9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"management.endpoint.shutdown.enabled=true\n")),(0,a.kt)("p",null,"\u5982\u679c\u76f8\u6bd4\u9009\u62e9\u6027\u9000\u51fa\uff0c\u4f60\u66f4\u559c\u6b22\u9009\u62e9\u6027\u52a0\u5165\u7aef\u70b9\u542f\u7528\uff0c\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"management.endpoints.enabled-by-default"),"\u5c5e\u6027\u8bbe\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u5e76\u4f7f\u7528\u72ec\u7acb\u7684\u7aef\u70b9",(0,a.kt)("inlineCode",{parentName:"p"},"enabled"),"\u5c5e\u6027\u3002\u4e0b\u9762\u7684\u793a\u4f8b\u542f\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"info"),"\u7aef\u70b9\uff0c\u7981\u7528\u4e86\u6240\u6709\u5176\u5b83\u7aef\u70b9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"management.endpoints.enabled-by-default=false\nmanagement.endpoint.info.enabled=true\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8")," \u7981\u7528\u7684\u7aef\u70b9\u4f1a\u5b8c\u5168\u4ece\u5e94\u7528\u4e0a\u4e0b\u6587\u4e2d\u79fb\u9664\u3002\u5982\u679c\u4f60\u60f3\u6539\u53d8\u7aef\u70b9\u66b4\u9732\u7684\u6280\u672f\uff0c\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#production-ready-endpoints-exposing-endpoints"},(0,a.kt)("inlineCode",{parentName:"a"},"include"),"\u4e0e",(0,a.kt)("inlineCode",{parentName:"a"},"exclude"),"\u5c5e\u6027"),"\u4ee3\u66ff\u3002"))}f.isMDXComponent=!0}}]);