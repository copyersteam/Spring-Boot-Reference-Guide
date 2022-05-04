"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[77238],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(r),g=o,f=d["".concat(s,".").concat(g)]||d[g]||l[g]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},81300:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return l}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],p={},s=void 0,c={unversionedId:"IX. \u2018How-to\u2019 guides/75.1 Use Another Web Server",id:"IX. \u2018How-to\u2019 guides/75.1 Use Another Web Server",title:"75.1 Use Another Web Server",description:"75.1 \u4f7f\u7528\u53e6\u5916\u7684\u7f51\u7edc\u670d\u52a1\u5668",source:"@site/docs/IX. \u2018How-to\u2019 guides/75.1 Use Another Web Server.md",sourceDirName:"IX. \u2018How-to\u2019 guides",slug:"/IX. \u2018How-to\u2019 guides/75.1 Use Another Web Server",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/75.1 Use Another Web Server",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IX. \u2018How-to\u2019 guides/75.1 Use Another Web Server.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"74.8 Discover Built-in Options for External Properties",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/74.8 Discover Built-in Options for External Properties"},next:{title:"75.10 Running Behind a Front-end Proxy Server",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/75.10 Running Behind a Front-end Proxy Server"}},u={},l=[{value:"75.1 \u4f7f\u7528\u53e6\u5916\u7684\u7f51\u7edc\u670d\u52a1\u5668",id:"751-\u4f7f\u7528\u53e6\u5916\u7684\u7f51\u7edc\u670d\u52a1\u5668",level:3}],d={toc:l};function g(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"751-\u4f7f\u7528\u53e6\u5916\u7684\u7f51\u7edc\u670d\u52a1\u5668"},"75.1 \u4f7f\u7528\u53e6\u5916\u7684\u7f51\u7edc\u670d\u52a1\u5668"),(0,i.kt)("p",null,"\u8bb8\u591aSpring Boot\u7a0b\u5e8f\u90fd\u5305\u542b\u9ed8\u8ba4\u7684\u5d4c\u5165\u5f0f\u5bb9\u5668\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"spring-boot-starter-web"),"\u901a\u8fc7\u5305\u542b",(0,i.kt)("inlineCode",{parentName:"p"},"spring-boot-starter-tomcat"),"\u6765\u5305\u542bTomcat\u3002\u4f46\u662f\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"spring-boot-starter-jetty"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"spring-boot-starter-undertow"),"\u6765\u4ee3\u66ff\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"spring-boot-starter-webflux"),"\u901a\u8fc7\u5305\u542b",(0,i.kt)("inlineCode",{parentName:"p"},"spring-boot-starter-reactor-netty"),"\uff0c\u5305\u542b\u4e86Reactor Netty\u3002\u4f46\u662f\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"spring-boot-starter-tomcat"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"spring-boot-starter-jetty"),"\u6216\u8005",(0,i.kt)("inlineCode",{parentName:"p"},"spring-boot-starter-undertow"),"\u6765\u4ee3\u66ff\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6ce8")," \u8bb8\u591astarter\u53ea\u652f\u6301Spring MVC\uff0c\u56e0\u6b64\u5b83\u4eec\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"spring-boot-starter-web"),"\u5f15\u5165\u5230\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u7c7b\u8def\u5f84\u4e2d\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u9700\u8981\u4f7f\u7528\u4e0d\u540c\u7684HTTP\u670d\u52a1\u5668\uff0c\u5219\u9700\u8981\u6392\u9664\u9ed8\u8ba4\u4f9d\u8d56\u9879\uff0c\u5e76\u5305\u542b\u6240\u9700\u7684\u4f9d\u8d56\u9879\u3002Spring Boot\u4e3aHTTP\u670d\u52a1\u5668\u63d0\u4f9b\u4e86\u72ec\u7acb\u7684\u542f\u52a8\u7a0b\u5e8f\uff0c\u4ee5\u5e2e\u52a9\u5c3d\u53ef\u80fd\u7b80\u5316\u8fd9\u4e2a\u8fc7\u7a0b\u3002"),(0,i.kt)("p",null,"\u4e0b\u9762\u7684Maven\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5728Spring MVC\u4e2d\u6392\u9664Tomcat\u5e76\u5305\u542bJetty\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-web</artifactId>\n    <exclusions>\n        \x3c!-- Exclude the Tomcat dependency --\x3e\n        <exclusion>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-tomcat</artifactId>\n        </exclusion>\n    </exclusions>\n</dependency>\n\x3c!-- Use Jetty instead --\x3e\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-jetty</artifactId>\n</dependency>\n")),(0,i.kt)("p",null,"\u4e0b\u9762\u7684Gradle\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u5728Spring WebFlux\u4e2d\u6392\u9664Netty\u5e76\u5305\u542bUndertow\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"configurations {\n    // exclude Reactor Netty\n    compile.exclude module: 'spring-boot-starter-reactor-netty'\n}\n\ndependencies {\n    compile 'org.springframework.boot:spring-boot-starter-webflux'\n    // Use Undertow instead\n    compile 'org.springframework.boot:spring-boot-starter-undertow'\n    // ...\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6ce8")," ",(0,i.kt)("inlineCode",{parentName:"p"},"spring-boot-starter-reactor-netty"),"\u9700\u8981\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"WebClient"),"\u7c7b\uff0c\u6240\u4ee5\u5373\u4f7f\u9700\u8981\u5305\u542b\u4e0d\u540c\u7684HTTP\u670d\u52a1\u5668\uff0c\u4e5f\u53ef\u80fd\u9700\u8981\u4fdd\u6301\u5bf9Netty\u7684\u4f9d\u8d56\u3002"))}g.isMDXComponent=!0}}]);