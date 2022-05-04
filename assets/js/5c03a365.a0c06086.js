"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[17950],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=c(r),m=o,f=g["".concat(p,".").concat(m)]||g[m]||s[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},32526:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={},p=void 0,c={unversionedId:"II. Getting Started/10.2.6. Quick-start Spring CLI Example",id:"II. Getting Started/10.2.6. Quick-start Spring CLI Example",title:"10.2.6. Quick-start Spring CLI Example",description:"10.2.6. Spring CLI\u793a\u4f8b\u5feb\u901f\u5165\u95e8",source:"@site/docs/II. Getting Started/10.2.6. Quick-start Spring CLI Example.md",sourceDirName:"II. Getting Started",slug:"/II. Getting Started/10.2.6. Quick-start Spring CLI Example",permalink:"/Spring-Boot-Reference-Guide/docs/II. Getting Started/10.2.6. Quick-start Spring CLI Example",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/II. Getting Started/10.2.6. Quick-start Spring CLI Example.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"10.2.5. Command-line Completion",permalink:"/Spring-Boot-Reference-Guide/docs/II. Getting Started/10.2.5. Command-line Completion"},next:{title:"10.3. Upgrading from an Earlier Version of Spring Boot",permalink:"/Spring-Boot-Reference-Guide/docs/II. Getting Started/10.3. Upgrading from an Earlier Version of Spring Boot"}},u={},s=[{value:"10.2.6. Spring CLI\u793a\u4f8b\u5feb\u901f\u5165\u95e8",id:"1026-spring-cli\u793a\u4f8b\u5feb\u901f\u5165\u95e8",level:3}],g={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1026-spring-cli\u793a\u4f8b\u5feb\u901f\u5165\u95e8"},"10.2.6. Spring CLI\u793a\u4f8b\u5feb\u901f\u5165\u95e8"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684web\u5e94\u7528\uff0c\u6d4b\u8bd5Spring CLI\u5b89\u88c5\u662f\u5426\u6210\u529f\u3002\u521b\u5efa\u4e00\u4e2a\u540d\u53eb",(0,a.kt)("inlineCode",{parentName:"p"},"app.groovy"),"\u7684\u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},'@RestController\nclass ThisWillActuallyRun {\n\n    @RequestMapping("/")\n    String home() {\n        "Hello World!"\n    }\n\n}\n')),(0,a.kt)("p",null,"\u7136\u540e,\u5728shell\u4e2d\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ spring run app.groovy\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8"),"\uff1a\u9996\u6b21\u8fd0\u884c\u8be5\u5e94\u7528\u6bd4\u8f83\u6162\uff0c\u56e0\u4e3a\u9700\u8981\u4e0b\u8f7d\u4f9d\u8d56\uff0c\u540e\u7eed\u8fd0\u884c\u5c06\u4f1a\u5feb\u5f88\u591a\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528\u4f60\u6700\u559c\u6b22\u7684\u6d4f\u89c8\u5668\u6253\u5f00",(0,a.kt)("a",{parentName:"p",href:"localhost:8080"},"localhost:8080"),"\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u770b\u5230\u5982\u4e0b\u8f93\u51fa\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"Hello World!\n")))}m.isMDXComponent=!0}}]);