"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[14914],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=l(r),f=o,d=g["".concat(c,".").concat(f)]||g[f]||u[f]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},56809:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={},c=void 0,l={unversionedId:"III. Using Spring Boot/20.2.5. Using a Trigger File",id:"III. Using Spring Boot/20.2.5. Using a Trigger File",title:"20.2.5. Using a Trigger File",description:"20.2.5 \u4f7f\u7528\u89e6\u53d1\u5668\u6587\u4ef6",source:"@site/docs/III. Using Spring Boot/20.2.5. Using a Trigger File.md",sourceDirName:"III. Using Spring Boot",slug:"/III. Using Spring Boot/20.2.5. Using a Trigger File",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/20.2.5. Using a Trigger File",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/III. Using Spring Boot/20.2.5. Using a Trigger File.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"20.2.4. Disabling Restart",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/20.2.4. Disabling Restart"},next:{title:"20.2.6. Customizing the Restart Classloader",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/20.2.6. Customizing the Restart Classloader"}},p={},u=[{value:"20.2.5 \u4f7f\u7528\u89e6\u53d1\u5668\u6587\u4ef6",id:"2025-\u4f7f\u7528\u89e6\u53d1\u5668\u6587\u4ef6",level:3}],g={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"2025-\u4f7f\u7528\u89e6\u53d1\u5668\u6587\u4ef6"},"20.2.5 \u4f7f\u7528\u89e6\u53d1\u5668\u6587\u4ef6"),(0,i.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u4e00\u4e2aIDE\u8fde\u7eed\u4e0d\u65ad\u5730\u7f16\u8bd1\u53d8\u5316\u7684\u6587\u4ef6\uff0c\u4f60\u53ef\u80fd\u503e\u5411\u4e8e\u53ea\u5728\u7279\u5b9a\u65f6\u95f4\u89e6\u53d1\u91cd\u542f\uff0c\u89e6\u53d1\u5668\u6587\u4ef6\u53ef\u4ee5\u5e2e\u4f60\u5b9e\u73b0\u8be5\u529f\u80fd\u3002\u89e6\u53d1\u5668\u6587\u4ef6\u662f\u4e00\u4e2a\u7279\u6b8a\u7684\u6587\u4ef6\uff0c\u53ea\u6709\u4fee\u6539\u5b83\u624d\u80fd\u5b9e\u9645\u89e6\u53d1\u4e00\u4e2a\u91cd\u542f\u68c0\u6d4b\u3002\u6539\u53d8\u8be5\u6587\u4ef6\u53ea\u4f1a\u89e6\u53d1\u68c0\u6d4b\uff0c\u5b9e\u9645\u7684\u91cd\u542f\u53ea\u4f1a\u5728Devtools\u53d1\u73b0\u5b83\u5fc5\u987b\u8fd9\u6837\u505a\u7684\u65f6\u5019\u3002\u89e6\u53d1\u5668\u6587\u4ef6\u53ef\u4ee5\u624b\u52a8\u66f4\u65b0\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7IDE\u63d2\u4ef6\u66f4\u65b0\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u4f7f\u7528\u89e6\u53d1\u5668\u6587\u4ef6\uff0c\u628a",(0,i.kt)("inlineCode",{parentName:"p"},"spring.devtools.restart.trigger-file"),"\u5c5e\u6027\u8bbe\u7f6e\u4e3a\u4f60\u7684\u89e6\u53d1\u5668\u6587\u4ef6\u7684\u8def\u5f84\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6ce8")," \u4f60\u53ef\u80fd\u60f3\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"spring.devtools.restart.trigger-file"),"\u5c5e\u6027\u8bbe\u7f6e\u4e3a",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#using-boot-devtools-globalsettings"},"\u5168\u5c40\u8bbe\u7f6e"),"\uff0c\u8fd9\u6837\u6240\u6709\u7684\u5de5\u7a0b\u8868\u73b0\u90fd\u4f1a\u76f8\u540c\u3002"))}f.isMDXComponent=!0}}]);