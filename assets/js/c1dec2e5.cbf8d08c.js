"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[54528],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72381:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],p={},c=void 0,l={unversionedId:"X. Appendices/E.2.1. Compatibility with the Standard Java \u201cJarFile\u201d",id:"X. Appendices/E.2.1. Compatibility with the Standard Java \u201cJarFile\u201d",title:"E.2.1. Compatibility with the Standard Java \u201cJarFile\u201d",description:'\u9644\u5f55 E.2.1 \u5bf9\u6807\u51c6Java "JarFile"\u7684\u517c\u5bb9\u6027',source:"@site/docs/X. Appendices/E.2.1. Compatibility with the Standard Java \u201cJarFile\u201d.md",sourceDirName:"X. Appendices",slug:"/X. Appendices/E.2.1. Compatibility with the Standard Java \u201cJarFile\u201d",permalink:"/Spring-Boot-Reference-Guide/docs/X. Appendices/E.2.1. Compatibility with the Standard Java \u201cJarFile\u201d",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/X. Appendices/E.2.1. Compatibility with the Standard Java \u201cJarFile\u201d.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"E.2. Spring Boot\u2019s \u201cJarFile\u201d Class",permalink:"/Spring-Boot-Reference-Guide/docs/X. Appendices/E.2. Spring Boot\u2019s \u201cJarFile\u201d Class"},next:{title:"E.3. Launching Executable Jars",permalink:"/Spring-Boot-Reference-Guide/docs/X. Appendices/E.3. Launching Executable Jars"}},u={},s=[{value:"\u9644\u5f55 E.2.1 \u5bf9\u6807\u51c6Java &quot;JarFile&quot;\u7684\u517c\u5bb9\u6027",id:"\u9644\u5f55-e21-\u5bf9\u6807\u51c6java-jarfile\u7684\u517c\u5bb9\u6027",level:3}],d={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u9644\u5f55-e21-\u5bf9\u6807\u51c6java-jarfile\u7684\u517c\u5bb9\u6027"},'\u9644\u5f55 E.2.1 \u5bf9\u6807\u51c6Java "JarFile"\u7684\u517c\u5bb9\u6027'),(0,i.kt)("p",null,"Spring Boot Loader\u52aa\u529b\u4fdd\u6301\u5bf9\u5df2\u6709\u4ee3\u7801\u548c\u5e93\u7684\u517c\u5bb9\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"org.springframework.boot.loader.jar.JarFile"),"\u7ee7\u627f\u81ea",(0,i.kt)("inlineCode",{parentName:"p"},"java.util.jar.JarFile"),"\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u964d\u7ea7\u66ff\u6362\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"getURL()"),"\u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u4e0e",(0,i.kt)("inlineCode",{parentName:"p"},"java.net.JarURLConnection"),"\u517c\u5bb9\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"URL"),"\uff0c\u5e76\u53ef\u4e0eJava\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"URLClassLoader"),"\u4e00\u8d77\u4f7f\u7528\u3002"))}f.isMDXComponent=!0}}]);