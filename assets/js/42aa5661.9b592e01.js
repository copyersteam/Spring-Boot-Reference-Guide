"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[59343],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32433:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],u={},c=void 0,l={unversionedId:"II. Getting Started/11.4. Running the Example",id:"II. Getting Started/11.4. Running the Example",title:"11.4. Running the Example",description:"11.4. \u8fd0\u884c\u793a\u4f8b",source:"@site/docs/II. Getting Started/11.4. Running the Example.md",sourceDirName:"II. Getting Started",slug:"/II. Getting Started/11.4. Running the Example",permalink:"/Spring-Boot-Reference-Guide/docs/II. Getting Started/11.4. Running the Example",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/II. Getting Started/11.4. Running the Example.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"11.3.3. The \u201cmain\u201d Method",permalink:"/Spring-Boot-Reference-Guide/docs/II. Getting Started/11.3.3. The \u201cmain\u201d Method"},next:{title:"11.5. Creating an Executable Jar",permalink:"/Spring-Boot-Reference-Guide/docs/II. Getting Started/11.5. Creating an Executable Jar"}},p={},s=[{value:"11.4. \u8fd0\u884c\u793a\u4f8b",id:"114-\u8fd0\u884c\u793a\u4f8b",level:3}],d={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"114-\u8fd0\u884c\u793a\u4f8b"},"11.4. \u8fd0\u884c\u793a\u4f8b"),(0,a.kt)("p",null,"\u5230\u6b64\uff0c\u793a\u4f8b\u5e94\u7528\u53ef\u4ee5\u5de5\u4f5c\u4e86\u3002\u7531\u4e8e\u4f7f\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"spring-boot-starter-parent")," POM\uff0c\u8fd9\u6837\u4f60\u5c31\u6709\u4e86\u4e00\u4e2a\u975e\u5e38\u6709\u7528\u7684run\u76ee\u6807\u6765\u542f\u52a8\u7a0b\u5e8f\u3002\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u8f93\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"mvn spring-boot:run"),"\u542f\u52a8\u5e94\u7528\u3002\u4f60\u4f1a\u770b\u5230\u5982\u4e0b\u7684\u8f93\u51fa\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ mvn spring-boot:run\n\n  .   ____          _            __ _ _\n /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\n( ( )\\___ | '_ | '_| | '_ \\/ _` | \\ \\ \\ \\\n \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )\n  '  |____| .__|_| |_|_| |_\\__, | / / / /\n =========|_|==============|___/=/_/_/_/\n :: Spring Boot ::  (v2.0.0.RELEASE)\n....... . . .\n....... . . . (log output here)\n....... . . .\n........ Started Example in 2.222 seconds (JVM running for 6.514)\n")),(0,a.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u6d4f\u89c8\u5668\u6253\u5f00",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080"},"localhost:8080"),"\uff0c\u4f60\u5e94\u8be5\u53ef\u4ee5\u770b\u5230\u5982\u4e0b\u8f93\u51fa\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Hello World!\n")),(0,a.kt)("p",null,"\u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"p"},"ctrl-c"),"\u6e29\u67d4\u5730\u5173\u95ed\u5e94\u7528\u7a0b\u5e8f\u3002"))}f.isMDXComponent=!0}}]);