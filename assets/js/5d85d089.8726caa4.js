"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[65533],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21286:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={},l=void 0,c={unversionedId:"IX. \u2018How-to\u2019 guides/75.3.2 Add Servlets, Filters, and Listeners by Using Classpath Scanning",id:"IX. \u2018How-to\u2019 guides/75.3.2 Add Servlets, Filters, and Listeners by Using Classpath Scanning",title:"75.3.2 Add Servlets, Filters, and Listeners by Using Classpath Scanning",description:"75.3.2 \u4f7f\u7528\u7c7b\u8def\u5f84\u626b\u63cf\u6dfb\u52a0Servlet\u3001Filter\u548cListener",source:"@site/docs/IX. \u2018How-to\u2019 guides/75.3.2 Add Servlets, Filters, and Listeners by Using Classpath Scanning.md",sourceDirName:"IX. \u2018How-to\u2019 guides",slug:"/IX. \u2018How-to\u2019 guides/75.3.2 Add Servlets, Filters, and Listeners by Using Classpath Scanning",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/75.3.2 Add Servlets, Filters, and Listeners by Using Classpath Scanning",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IX. \u2018How-to\u2019 guides/75.3.2 Add Servlets, Filters, and Listeners by Using Classpath Scanning.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"75.3.1 Add a Servlet, Filter, or Listener by Using a Spring Bean",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/75.3.1 Add a Servlet, Filter, or Listener by Using a Spring Bean"},next:{title:"75.4 Change the HTTP Port",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/75.4 Change the HTTP Port"}},u={},p=[{value:"75.3.2 \u4f7f\u7528\u7c7b\u8def\u5f84\u626b\u63cf\u6dfb\u52a0Servlet\u3001Filter\u548cListener",id:"7532-\u4f7f\u7528\u7c7b\u8def\u5f84\u626b\u63cf\u6dfb\u52a0servletfilter\u548clistener",level:3}],d={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"7532-\u4f7f\u7528\u7c7b\u8def\u5f84\u626b\u63cf\u6dfb\u52a0servletfilter\u548clistener"},"75.3.2 \u4f7f\u7528\u7c7b\u8def\u5f84\u626b\u63cf\u6dfb\u52a0Servlet\u3001Filter\u548cListener"),(0,o.kt)("p",null,"\u901a\u8fc7\u628a",(0,o.kt)("inlineCode",{parentName:"p"},"@ServletComponentScan"),"\u6ce8\u89e3\u5230\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"@Configuration"),"\u7c7b\u5e76\u6307\u5b9a\u5305\u542b\u8981\u6ce8\u518c\u7ec4\u4ef6\u7684\u5305\uff0c\u53ef\u4ee5\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"@WebServlet"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"@WebFilter"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"@WebListener"),"\u6ce8\u89e3\u7684\u7c7b\u81ea\u52a8\u6ce8\u518c\u5230\u5185\u5d4cservlet\u5bb9\u5668\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"@ServletComponentScan"),"\u5c06\u4ece\u88ab\u6ce8\u89e3\u7c7b\u7684\u5305\u5f00\u59cb\u626b\u63cf\u3002"))}f.isMDXComponent=!0}}]);