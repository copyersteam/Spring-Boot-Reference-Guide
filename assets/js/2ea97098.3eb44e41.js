"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[76592],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),g=c(n),f=i,d=g["".concat(s,".").concat(f)]||g[f]||u[f]||o;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},79748:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],p={},s=void 0,c={unversionedId:"III. Using Spring Boot/20.2.4. Disabling Restart",id:"III. Using Spring Boot/20.2.4. Disabling Restart",title:"20.2.4. Disabling Restart",description:"20.2.4 \u7981\u7528\u91cd\u542f",source:"@site/docs/III. Using Spring Boot/20.2.4. Disabling Restart.md",sourceDirName:"III. Using Spring Boot",slug:"/III. Using Spring Boot/20.2.4. Disabling Restart",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/20.2.4. Disabling Restart",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/III. Using Spring Boot/20.2.4. Disabling Restart.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"20.2.3. Watching Additional Paths",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/20.2.3. Watching Additional Paths"},next:{title:"20.2.5. Using a Trigger File",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/20.2.5. Using a Trigger File"}},l={},u=[{value:"20.2.4 \u7981\u7528\u91cd\u542f",id:"2024-\u7981\u7528\u91cd\u542f",level:3}],g={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"2024-\u7981\u7528\u91cd\u542f"},"20.2.4 \u7981\u7528\u91cd\u542f"),(0,o.kt)("p",null,"\u5982\u679c\u4e0d\u60f3\u4f7f\u7528\u91cd\u542f\u7279\u6027\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"spring.devtools.restart.enabled"),"\u5c5e\u6027\u6765\u7981\u7528\u5b83\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\u53ef\u4ee5\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"application.properties"),"\u6587\u4ef6\u4e2d\u8bbe\u7f6e\uff08\u4f9d\u65e7\u4f1a\u521d\u59cb\u5316\u91cd\u542f\u7c7b\u52a0\u8f7d\u5668\uff0c\u4f46\u5b83\u4e0d\u4f1a\u76d1\u63a7\u6587\u4ef6\u53d8\u5316\uff09\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u9700\u8981\u5f7b\u5e95\u7981\u7528\u91cd\u542f\u652f\u6301\uff08\u6bd4\u5982\uff0c\u4e0d\u80fd\u8ddf\u67d0\u4e2a\u7279\u6b8a\u5e93\u4e00\u5757\u5de5\u4f5c\uff09\uff0c\u4f60\u9700\u8981\u5728\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"SpringApplication.run(\u2026)"),"\u4e4b\u524d\uff0c\u628a\u7cfb\u7edf\u5c5e\u6027",(0,o.kt)("inlineCode",{parentName:"p"},"spring.devtools.restart.enabled"),"\u8bbe\u7f6e\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public static void main(String[] args) {\n    System.setProperty("spring.devtools.restart.enabled", "false");\n    SpringApplication.run(MyApp.class, args);\n}\n')))}f.isMDXComponent=!0}}]);