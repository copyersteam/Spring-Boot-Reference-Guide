"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[72011],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||l[d]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59440:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return l}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],u={},c=void 0,p={unversionedId:"IX. \u2018How-to\u2019 guides/75.10.1 Customize Tomcat\u2019s Proxy Configuration",id:"IX. \u2018How-to\u2019 guides/75.10.1 Customize Tomcat\u2019s Proxy Configuration",title:"75.10.1 Customize Tomcat\u2019s Proxy Configuration",description:"75.10.1 \u81ea\u5b9a\u4e49Tomcat\u4ee3\u7406\u914d\u7f6e",source:"@site/docs/IX. \u2018How-to\u2019 guides/75.10.1 Customize Tomcat\u2019s Proxy Configuration.md",sourceDirName:"IX. \u2018How-to\u2019 guides",slug:"/IX. \u2018How-to\u2019 guides/75.10.1 Customize Tomcat\u2019s Proxy Configuration",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/75.10.1 Customize Tomcat\u2019s Proxy Configuration",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IX. \u2018How-to\u2019 guides/75.10.1 Customize Tomcat\u2019s Proxy Configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"75.10 Running Behind a Front-end Proxy Server",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/75.10 Running Behind a Front-end Proxy Server"},next:{title:"75.11 Configure Tomcat",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/75.11 Configure Tomcat"}},s={},l=[{value:"75.10.1 \u81ea\u5b9a\u4e49Tomcat\u4ee3\u7406\u914d\u7f6e",id:"75101-\u81ea\u5b9a\u4e49tomcat\u4ee3\u7406\u914d\u7f6e",level:3}],m={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"75101-\u81ea\u5b9a\u4e49tomcat\u4ee3\u7406\u914d\u7f6e"},"75.10.1 \u81ea\u5b9a\u4e49Tomcat\u4ee3\u7406\u914d\u7f6e"),(0,a.kt)("p",null,'\u5982\u679c\u4f7f\u7528\u7684\u662fTomcat\uff0c\u4f60\u53ef\u4ee5\u914d\u7f6e\u7528\u4e8e\u4f20\u8f93"forwarded"\u4fe1\u606f\u7684headers\u540d\uff1a'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"server.tomcat.remote-ip-header=x-your-remote-ip-header\nserver.tomcat.protocol-header=x-your-protocol-header\n")),(0,a.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u4e3aTomcat\u914d\u7f6e\u4e00\u4e2a\u9ed8\u8ba4\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u7528\u6765\u5339\u914d\u5185\u90e8\u4fe1\u4efb\u7684\u4ee3\u7406\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cIP\u5730\u5740",(0,a.kt)("inlineCode",{parentName:"p"},"10/8"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"192.168/16"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"169.254/16"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"127/8"),"\u662f\u88ab\u4fe1\u4efb\u7684\u3002\u901a\u8fc7\u8bbe\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"server.tomcat.internal-proxies"),"\u5c5e\u6027\u53ef\u4ee5\u81ea\u5b9a\u4e49\uff0c\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"server.tomcat.internal-proxies=192\\\\.168\\\\.\\\\d{1,3}\\\\.\\\\d{1,3}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8")," \u53ea\u6709\u5728\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u65f6\u624d\u9700\u8981\u53cc\u53cd\u659c\u7ebf\uff0c\u5982\u679c\u4f7f\u7528YAML\uff0c\u53ea\u9700\u8981\u5355\u4e2a\u53cd\u659c\u7ebf\uff0c\u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"192\\.168\\.\\d{1,3}\\.\\d{1,3}"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8")," \u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"internal-proxies"),"\u8bbe\u7f6e\u4e3a\u7a7a\u8868\u793a\u4fe1\u4efb\u6240\u6709\u4ee3\u7406\uff0c\u4e0d\u8981\u5728\u751f\u4ea7\u73af\u5883\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5b8c\u5168\u63a7\u5236Tomcat\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"RemoteIpValve"),"\u914d\u7f6e\uff0c\u53ea\u8981\u5173\u6389\u81ea\u52a8\u914d\u7f6e\uff08\u6bd4\u5982\u8bbe\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"server.use-forward-headers=false"),"\uff09\u5e76\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"TomcatServletWebServerFactory")," bean\u6dfb\u52a0\u4e00\u4e2a\u65b0value\u5b9e\u4f8b\u3002"))}d.isMDXComponent=!0}}]);