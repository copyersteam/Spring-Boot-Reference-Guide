"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[94061],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,g=d["".concat(s,".").concat(f)]||d[f]||l[f]||i;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},76728:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return l}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],p={},s=void 0,c={unversionedId:"IX. \u2018How-to\u2019 guides/75.4 Change the HTTP Port",id:"IX. \u2018How-to\u2019 guides/75.4 Change the HTTP Port",title:"75.4 Change the HTTP Port",description:"75.4 \u6539\u53d8HTTP\u7aef\u53e3",source:"@site/docs/IX. \u2018How-to\u2019 guides/75.4 Change the HTTP Port.md",sourceDirName:"IX. \u2018How-to\u2019 guides",slug:"/IX. \u2018How-to\u2019 guides/75.4 Change the HTTP Port",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/75.4 Change the HTTP Port",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IX. \u2018How-to\u2019 guides/75.4 Change the HTTP Port.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"75.3.2 Add Servlets, Filters, and Listeners by Using Classpath Scanning",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/75.3.2 Add Servlets, Filters, and Listeners by Using Classpath Scanning"},next:{title:"75.5 Use a Random Unassigned HTTP Port",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/75.5 Use a Random Unassigned HTTP Port"}},u={},l=[{value:"75.4 \u6539\u53d8HTTP\u7aef\u53e3",id:"754-\u6539\u53d8http\u7aef\u53e3",level:3}],d={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"754-\u6539\u53d8http\u7aef\u53e3"},"75.4 \u6539\u53d8HTTP\u7aef\u53e3"),(0,i.kt)("p",null,"\u5728\u4e00\u4e2a\u5355\u72ec\u7684\u5e94\u7528\u4e2d\uff0c\u4e3bHTTP\u7aef\u53e3\u9ed8\u8ba4\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"8080"),"\uff0c\u4e0d\u8fc7\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"server.port"),"\u8bbe\u7f6e\uff08\u6bd4\u5982\uff0c\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"application.properties"),"\u4e2d\u6216\u4f5c\u4e3a\u7cfb\u7edf\u5c5e\u6027\uff09\u3002\u7531\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"Environment"),"\u503c\u7684\u5bbd\u677e\u7ed1\u5b9a\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"SERVER_PORT"),"\uff08\u6bd4\u5982\uff0c\u4f5c\u4e3aOS\u73af\u5883\u53d8\u91cf\uff09\u3002"),(0,i.kt)("p",null,"\u60f3\u8981\u521b\u5efa",(0,i.kt)("inlineCode",{parentName:"p"},"WebApplicationContext"),"\u4f46\u5b8c\u5168\u5173\u95edHTTP\u7aef\u70b9\uff0c\u4f60\u53ef\u4ee5\u8bbe\u7f6e",(0,i.kt)("inlineCode",{parentName:"p"},"server.port=-1"),"\uff08\u6d4b\u8bd5\u65f6\u53ef\u80fd\u6709\u7528\uff09\u3002\u5177\u4f53\u8be6\u60c5\u53ef\u67e5\u770b'Spring Boot\u7279\u6027'\u7ae0\u8282\u7684",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#boot-features-customizing-embedded-containers"},"27.4.4 \u81ea\u5b9a\u4e49\u5185\u5d4cservlet\u5bb9\u5668"),"\uff0c\u6216",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spring-projects/spring-boot/tree/v2.0.0.RELEASE/spring-boot-project/spring-boot-autoconfigure/src/main/java/org/springframework/boot/autoconfigure/web/ServerProperties.java"},"ServerProperties"),"\u6e90\u7801\u3002"))}f.isMDXComponent=!0}}]);