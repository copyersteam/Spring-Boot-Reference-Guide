"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[61659],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return _}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=c(t),_=r,g=m["".concat(l,".").concat(_)]||m[_]||u[_]||i;return t?o.createElement(g,p(p({ref:n},s),{},{components:t})):o.createElement(g,p({ref:n},s))}));function _(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,p=new Array(i);p[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,p[1]=a;for(var c=2;c<i;c++)p[c]=t[c];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},53443:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return _},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),p=["components"],a={},l=void 0,c={unversionedId:"III. Using Spring Boot/20.5.1. Running the Remote Client Application",id:"III. Using Spring Boot/20.5.1. Running the Remote Client Application",title:"20.5.1. Running the Remote Client Application",description:"20.5.1 \u8fd0\u884c\u8fdc\u7a0b\u5ba2\u6237\u7aef\u5e94\u7528",source:"@site/docs/III. Using Spring Boot/20.5.1. Running the Remote Client Application.md",sourceDirName:"III. Using Spring Boot",slug:"/III. Using Spring Boot/20.5.1. Running the Remote Client Application",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/20.5.1. Running the Remote Client Application",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/III. Using Spring Boot/20.5.1. Running the Remote Client Application.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"20.5. Remote Applications",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/20.5. Remote Applications"},next:{title:"20.5.2. Remote Update",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/20.5.2. Remote Update"}},s={},u=[{value:"20.5.1 \u8fd0\u884c\u8fdc\u7a0b\u5ba2\u6237\u7aef\u5e94\u7528",id:"2051-\u8fd0\u884c\u8fdc\u7a0b\u5ba2\u6237\u7aef\u5e94\u7528",level:3}],m={toc:u};function _(e){var n=e.components,t=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"2051-\u8fd0\u884c\u8fdc\u7a0b\u5ba2\u6237\u7aef\u5e94\u7528"},"20.5.1 \u8fd0\u884c\u8fdc\u7a0b\u5ba2\u6237\u7aef\u5e94\u7528"),(0,i.kt)("p",null,"\u8fdc\u7a0b\u5ba2\u6237\u7aef\u5e94\u7528\u7a0b\u5e8f\uff08remote client application\uff09\u9700\u8981\u5728\u4f60\u7684IDE\u4e2d\u8fd0\u884c\u3002\u4f60\u9700\u8981\u4f7f\u7528\u8ddf\u5c06\u8981\u8fde\u63a5\u7684\u8fdc\u7a0b\u5e94\u7528\u76f8\u540c\u7684classpath\u8fd0\u884c",(0,i.kt)("inlineCode",{parentName:"p"},"org.springframework.boot.devtools.RemoteSpringApplication"),"\u3002\u5e94\u7528\u9700\u8981\u7684\u552f\u4e00\u4e00\u4e2a\u53c2\u6570\u662f\u4f60\u8981\u8fde\u63a5\u7684\u8fdc\u7a0b\u5e94\u7528URL\u3002\u4f8b\u5982\uff0c\u4f60\u6b63\u5728\u4f7f\u7528Eclipse\u6216STS\uff0c\u5e76\u6709\u4e00\u4e2a\u90e8\u7f72\u5230Cloud Foundry\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"my-app"),"\u5de5\u7a0b\uff0c\u8fdc\u7a0b\u8fde\u63a5\u8be5\u5e94\u7528\u9700\u8981\u505a\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4ece",(0,i.kt)("inlineCode",{parentName:"li"},"Run"),"\u83dc\u5355\u9009\u62e9",(0,i.kt)("inlineCode",{parentName:"li"},"Run Configurations\u2026"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"Java Application"),"\u542f\u52a8\u914d\u7f6e\uff08launch configuration\uff09\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6d4f\u89c8",(0,i.kt)("inlineCode",{parentName:"li"},"my-app"),"\u5de5\u7a0b\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5c06",(0,i.kt)("inlineCode",{parentName:"li"},"org.springframework.boot.devtools.RemoteSpringApplication"),"\u4f5c\u4e3amain\u7c7b\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5c06",(0,i.kt)("inlineCode",{parentName:"li"},"https://myapp.cfapps.io"),"\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9",(0,i.kt)("inlineCode",{parentName:"li"},"RemoteSpringApplication"),"\uff08\u6216\u5176\u4ed6\u4efb\u4f55\u8fdc\u7a0bURL\uff09\u3002")),(0,i.kt)("p",null,"\u8fd0\u884c\u4e2d\u7684\u8fdc\u7a0b\u5ba2\u6237\u7aef\u770b\u8d77\u6765\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," .   ____          _                                              __ _ _\n /\\\\ / ___'_ __ _ _(_)_ __  __ _          ___               _      \\ \\ \\ \\\n( ( )\\___ | '_ | '_| | '_ \\/ _` |        | _ \\___ _ __  ___| |_ ___ \\ \\ \\ \\\n \\\\/  ___)| |_)| | | | | || (_| []::::::[]   / -_) '  \\/ _ \\  _/ -_) ) ) ) )\n  '  |____| .__|_| |_|_| |_\\__, |        |_|_\\___|_|_|_\\___/\\__\\___|/ / / /\n =========|_|==============|___/===================================/_/_/_/\n :: Spring Boot Remote :: 2.0.0.RELEASE\n\n2015-06-10 18:25:06.632  INFO 14938 --- [           main] o.s.b.devtools.RemoteSpringApplication   : Starting RemoteSpringApplication on pwmbp with PID 14938 (/Users/pwebb/projects/spring-boot/code/spring-boot-devtools/target/classes started by pwebb in /Users/pwebb/projects/spring-boot/code/spring-boot-samples/spring-boot-sample-devtools)\n2015-06-10 18:25:06.671  INFO 14938 --- [           main] s.c.a.AnnotationConfigApplicationContext : Refreshing org.springframework.context.annotation.AnnotationConfigApplicationContext@2a17b7b6: startup date [Wed Jun 10 18:25:06 PDT 2015]; root of context hierarchy\n2015-06-10 18:25:07.043  WARN 14938 --- [           main] o.s.b.d.r.c.RemoteClientConfiguration    : The connection to http://localhost:8080 is insecure. You should use a URL starting with 'https://'.\n2015-06-10 18:25:07.074  INFO 14938 --- [           main] o.s.b.d.a.OptionalLiveReloadServer       : LiveReload server is running on port 35729\n2015-06-10 18:25:07.130  INFO 14938 --- [           main] o.s.b.devtools.RemoteSpringApplication   : Started RemoteSpringApplication in 0.74 seconds (JVM running for 1.105)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6ce8")," \u56e0\u4e3a\u8fdc\u7a0b\u5ba2\u6237\u7aef\u4f7f\u7528\u7684classpath\u8ddf\u771f\u5b9e\u5e94\u7528\u76f8\u540c\uff0c\u6240\u4ee5\u5b83\u80fd\u76f4\u63a5\u8bfb\u53d6\u5e94\u7528\u914d\u7f6e\uff0c\u8fd9\u5c31\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"spring.devtools.remote.secret"),"\u5982\u4f55\u88ab\u8bfb\u53d6\u548c\u4f20\u9012\u7ed9\u670d\u52a1\u5668\u505a\u9a8c\u8bc1\u7684\u3002"),(0,i.kt)("p",null,"\u5f3a\u70c8\u5efa\u8bae\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"https://"),"\u4f5c\u4e3a\u8fde\u63a5\u534f\u8bae\uff0c\u8fd9\u6837\u4f20\u8f93\u901a\u9053\u662f\u52a0\u5bc6\u7684\uff0c\u5bc6\u7801\u4e5f\u4e0d\u4f1a\u88ab\u622a\u83b7\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u9700\u8981\u4f7f\u7528\u4ee3\u7406\u8fde\u63a5\u8fdc\u7a0b\u5e94\u7528\uff0c\u4f60\u9700\u8981\u914d\u7f6e",(0,i.kt)("inlineCode",{parentName:"p"},"spring.devtools.remote.proxy.host"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"spring.devtools.remote.proxy.port"),"\u5c5e\u6027\u3002"))}_.isMDXComponent=!0}}]);