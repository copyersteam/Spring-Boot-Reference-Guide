"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[7792],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(t),d=o,m=f["".concat(p,".").concat(d)]||f[d]||l[d]||a;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},81280:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={},p=void 0,u={unversionedId:"IV. Spring Boot features/32.1.3 Using a JNDI ConnectionFactory",id:"IV. Spring Boot features/32.1.3 Using a JNDI ConnectionFactory",title:"32.1.3 Using a JNDI ConnectionFactory",description:"32.1.3 \u4f7f\u7528JNDI ConnectionFactory",source:"@site/docs/IV. Spring Boot features/32.1.3 Using a JNDI ConnectionFactory.md",sourceDirName:"IV. Spring Boot features",slug:"/IV. Spring Boot features/32.1.3 Using a JNDI ConnectionFactory",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/32.1.3 Using a JNDI ConnectionFactory",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IV. Spring Boot features/32.1.3 Using a JNDI ConnectionFactory.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"32.1.2 Artemis Support",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/32.1.2 Artemis Support"},next:{title:"32.1.4 Sending a Message",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/32.1.4 Sending a Message"}},s={},l=[{value:"32.1.3 \u4f7f\u7528JNDI ConnectionFactory",id:"3213-\u4f7f\u7528jndi-connectionfactory",level:3}],f={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"3213-\u4f7f\u7528jndi-connectionfactory"},"32.1.3 \u4f7f\u7528JNDI ConnectionFactory"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u7684App\u8fd0\u884c\u5728\u5e94\u7528\u670d\u52a1\u5668\u4e2d\uff0cSpring Boot\u5c06\u5c1d\u8bd5\u4f7f\u7528JNDI\u5b9a\u4f4d\u4e00\u4e2aJMS ",(0,a.kt)("inlineCode",{parentName:"p"},"ConnectionFactory"),"\uff0c\u9ed8\u8ba4\u4f1a\u68c0\u67e5",(0,a.kt)("inlineCode",{parentName:"p"},"java:/JmsXA"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"java:/\nXAConnectionFactory"),"\u4e24\u4e2a\u5730\u5740\u3002\u5982\u679c\u9700\u8981\u6307\u5b9a\u66ff\u6362\u4f4d\u7f6e\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"spring.jms.jndi-name"),"\u5c5e\u6027\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"spring.jms.jndi-name=java:/MyConnectionFactory\n")))}d.isMDXComponent=!0}}]);