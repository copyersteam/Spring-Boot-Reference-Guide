"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[24957],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return g}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=u(t),g=o,m=f["".concat(c,".").concat(g)]||f[g]||s[g]||i;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5351:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],p={},c=void 0,u={unversionedId:"IV. Spring Boot features/47.3.1 runApplication",id:"IV. Spring Boot features/47.3.1 runApplication",title:"47.3.1 runApplication",description:"47.3.1 runApplication",source:"@site/docs/IV. Spring Boot features/47.3.1 runApplication.md",sourceDirName:"IV. Spring Boot features",slug:"/IV. Spring Boot features/47.3.1 runApplication",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/47.3.1 runApplication",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IV. Spring Boot features/47.3.1 runApplication.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"47.2 Null-safety",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/47.2 Null-safety"},next:{title:"47.3.2 Extensions",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/47.3.2 Extensions"}},l={},s=[{value:"47.3.1 runApplication",id:"4731-runapplication",level:3}],f={toc:s};function g(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"4731-runapplication"},"47.3.1 runApplication"),(0,i.kt)("p",null,"Spring Boot\u63d0\u4f9b\u4e86\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"runApplication<FooApplication>(*args)"),"\u8fd0\u884c\u5e94\u7528\u7684\u60ef\u7528\u65b9\u5f0f\u3002\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import org.springframework.boot.autoconfigure.SpringBootApplication\nimport org.springframework.boot.runApplication\n\n@SpringBootApplication\nclass FooApplication\n\nfun main(args: Array<String>) {\n    runApplication<FooApplication>(*args)\n}\n")),(0,i.kt)("p",null,"\u8fd9\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"SpringApplication.run(FooApplication::class.java, *args)"),"\u7684\u66ff\u4ee3\u54c1\u3002\u5b83\u4e5f\u5141\u8bb8\u81ea\u5b9a\u4e49\u5e94\u7528\u3002\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"runApplication<FooApplication>(*args) {\n    setBannerMode(OFF)\n}\n")))}g.isMDXComponent=!0}}]);