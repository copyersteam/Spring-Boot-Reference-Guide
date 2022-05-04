"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[93716],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,u=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=l(r),f=o,y=s["".concat(c,".").concat(f)]||s[f]||d[f]||u;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=r.length,i=new Array(u);i[0]=s;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<u;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},42577:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return d}});var n=r(87462),o=r(63366),u=(r(67294),r(3905)),i=["components"],a={},c=void 0,l={unversionedId:"V. Spring Boot Actuator/58.2 Cloud Foundry Self-signed Certificates",id:"V. Spring Boot Actuator/58.2 Cloud Foundry Self-signed Certificates",title:"58.2 Cloud Foundry Self-signed Certificates",description:"58.2 Cloud Foundry\u81ea\u7b7e\u540d\u8bc1\u4e66",source:"@site/docs/V. Spring Boot Actuator/58.2 Cloud Foundry Self-signed Certificates.md",sourceDirName:"V. Spring Boot Actuator",slug:"/V. Spring Boot Actuator/58.2 Cloud Foundry Self-signed Certificates",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/58.2 Cloud Foundry Self-signed Certificates",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/V. Spring Boot Actuator/58.2 Cloud Foundry Self-signed Certificates.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"58.1 Disabling Extended Cloud Foundry Actuator Support",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/58.1 Disabling Extended Cloud Foundry Actuator Support"},next:{title:"58.3 Custom context path",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/58.3 Custom context path"}},p={},d=[{value:"58.2 Cloud Foundry\u81ea\u7b7e\u540d\u8bc1\u4e66",id:"582-cloud-foundry\u81ea\u7b7e\u540d\u8bc1\u4e66",level:3}],s={toc:d};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,u.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h3",{id:"582-cloud-foundry\u81ea\u7b7e\u540d\u8bc1\u4e66"},"58.2 Cloud Foundry\u81ea\u7b7e\u540d\u8bc1\u4e66"),(0,u.kt)("p",null,"\u9ed8\u8ba4\u5730\uff0c\u5bf9",(0,u.kt)("inlineCode",{parentName:"p"},"/cloudfoundryapplication"),"\u7aef\u70b9\u7684\u5b89\u5168\u9a8c\u8bc1\u4f1a\u4f7f\u7528SSL\u8c03\u7528\u4e0d\u540c\u7684Cloud Foundry\u670d\u52a1\u3002\u5982\u679c\u4f60\u7684Cloud Foundry UAA\u6216\u8005Cloud Controller\u670d\u52a1\u4f7f\u7528\u81ea\u7b7e\u540d\u8bc1\u4e66\uff0c\u4f60\u5c06\u4f1a\u9700\u8981\u8bbe\u7f6e\u5982\u4e0b\u5c5e\u6027\uff1a"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"application.properties.")," "),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-properties"},"management.cloudfoundry.skip-ssl-validation=true\n")))}f.isMDXComponent=!0}}]);