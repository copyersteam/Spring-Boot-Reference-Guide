"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[10486],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94610:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),l=["components"],a={},c=void 0,p={unversionedId:"VII. Spring Boot CLI/64.5 Using the Embedded Shell",id:"VII. Spring Boot CLI/64.5 Using the Embedded Shell",title:"64.5 Using the Embedded Shell",description:"64.5 \u4f7f\u7528\u5185\u5d4cshell",source:"@site/docs/VII. Spring Boot CLI/64.5 Using the Embedded Shell.md",sourceDirName:"VII. Spring Boot CLI",slug:"/VII. Spring Boot CLI/64.5 Using the Embedded Shell",permalink:"/Spring-Boot-Reference-Guide/docs/VII. Spring Boot CLI/64.5 Using the Embedded Shell",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/VII. Spring Boot CLI/64.5 Using the Embedded Shell.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"64.4 Initialize a New Project",permalink:"/Spring-Boot-Reference-Guide/docs/VII. Spring Boot CLI/64.4 Initialize a New Project"},next:{title:"64.6 Adding Extensions to the CLI",permalink:"/Spring-Boot-Reference-Guide/docs/VII. Spring Boot CLI/64.6 Adding Extensions to the CLI"}},s={},u=[{value:"64.5 \u4f7f\u7528\u5185\u5d4cshell",id:"645-\u4f7f\u7528\u5185\u5d4cshell",level:3}],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"645-\u4f7f\u7528\u5185\u5d4cshell"},"64.5 \u4f7f\u7528\u5185\u5d4cshell"),(0,i.kt)("p",null,"Spring Boot\u5305\u62ec\u5b8c\u6574\u7684BASH\u548czsh shells\u7684\u547d\u4ee4\u884c\u811a\u672c\uff0c\u5982\u679c\u8fd9\u4e24\u79cd\u4f60\u90fd\u4e0d\u4f7f\u7528\uff08\u53ef\u80fd\u4f60\u662f\u4e00\u4e2aWindow\u7528\u6237\uff09\uff0c\u90a3\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"shell"),"\u547d\u4ee4\u542f\u7528\u4e00\u4e2a\u96c6\u6210shell\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ spring shell\nSpring Boot (v2.0.0.RELEASE)\nHit TAB to complete. Type \\'help' and hit RETURN for help, and \\'exit' to quit.\n")),(0,i.kt)("p",null,"\u5728\u5185\u5d4cshell\u4e2d\uff0c\u53ef\u4ee5\u76f4\u63a5\u8fd0\u884c\u5176\u4ed6\u547d\u4ee4\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ version\nSpring CLI v2.0.0.RELEASE\n")),(0,i.kt)("p",null,"\u5185\u5d4cshell\u652f\u6301ANSI\u5f69\u8272\u8f93\u51fa\u548ctab\u8865\u5168\u3002\u5982\u679c\u9700\u8981\u8fd0\u884c\u4e00\u4e2a\u539f\u751f\u547d\u4ee4\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"!"),"\u524d\u7f00\uff0c\u70b9\u51fb",(0,i.kt)("inlineCode",{parentName:"p"},"ctrl-c"),"\u5c06\u9000\u51fa\u5185\u5d4cshell\u3002"))}f.isMDXComponent=!0}}]);