"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[95701],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(t),f=i,g=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return t?r.createElement(g,a(a({ref:n},s),{},{components:t})):r.createElement(g,a({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},96668:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],p={},l=void 0,c={unversionedId:"IV. Spring Boot features/24.3. Application Property Files",id:"IV. Spring Boot features/24.3. Application Property Files",title:"24.3. Application Property Files",description:"24.3. \u5e94\u7528\u5c5e\u6027\u6587\u4ef6",source:"@site/docs/IV. Spring Boot features/24.3. Application Property Files.md",sourceDirName:"IV. Spring Boot features",slug:"/IV. Spring Boot features/24.3. Application Property Files",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/24.3. Application Property Files",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IV. Spring Boot features/24.3. Application Property Files.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"24.2. Accessing Command Line Properties",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/24.2. Accessing Command Line Properties"},next:{title:"24.4. Profile-specific Properties",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/24.4. Profile-specific Properties"}},s={},m=[{value:"24.3. \u5e94\u7528\u5c5e\u6027\u6587\u4ef6",id:"243-\u5e94\u7528\u5c5e\u6027\u6587\u4ef6",level:3}],u={toc:m};function f(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"243-\u5e94\u7528\u5c5e\u6027\u6587\u4ef6"},"24.3. \u5e94\u7528\u5c5e\u6027\u6587\u4ef6"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SpringApplication"),"\u4ece\u4ee5\u4e0b\u4f4d\u7f6e\u52a0\u8f7d",(0,o.kt)("inlineCode",{parentName:"p"},"application.properties"),"\u6587\u4ef6\uff0c\u5e76\u628a\u5b83\u4eec\u6dfb\u52a0\u5230Spring ",(0,o.kt)("inlineCode",{parentName:"p"},"Environment"),"\u4e2d\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5f53\u524d\u76ee\u5f55\u4e0b\u7684",(0,o.kt)("inlineCode",{parentName:"li"},"/config"),"\u5b50\u76ee\u5f55"),(0,o.kt)("li",{parentName:"ol"},"\u5f53\u524d\u76ee\u5f55"),(0,o.kt)("li",{parentName:"ol"},"classpath\u4e0b\u7684",(0,o.kt)("inlineCode",{parentName:"li"},"/config"),"\u5305"),(0,o.kt)("li",{parentName:"ol"},"classpath\u6839\u8def\u5f84\uff08root\uff09")),(0,o.kt)("p",null,"\u8be5\u5217\u8868\u662f\u6309\u4f18\u5148\u7ea7\u6392\u5e8f\u7684\uff08\u5217\u8868\u4e2d\u4f4d\u7f6e\u9ad8\u7684\u8def\u5f84\u4e0b\u5b9a\u4e49\u7684\u5c5e\u6027\u5c06\u8986\u76d6\u4f4d\u7f6e\u4f4e\u7684\uff09\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8")," \u4f60\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#boot-features-external-config-yaml"},"YAML\uff08'.yml'\uff09\u6587\u4ef6"),"\u66ff\u4ee3'.properties'\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4e0d\u559c\u6b22\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"application.properties"),"\u4f5c\u4e3a\u914d\u7f6e\u6587\u4ef6\u540d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a",(0,o.kt)("inlineCode",{parentName:"p"},"spring.config.name"),"\u73af\u5883\u5c5e\u6027\u6765\u5207\u6362\u5176\u5b83\u7684\u6587\u4ef6\u540d\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"spring.config.location"),"\u73af\u5883\u5c5e\u6027\u5f15\u7528\u4e00\u4e2a\u660e\u786e\u7684\u8def\u5f84\uff08\u76ee\u5f55\u4f4d\u7f6e\u6216\u6587\u4ef6\u8def\u5f84\u5217\u8868\u4ee5\u9017\u53f7\u5206\u5272\uff09\u3002\u4e0b\u9762\u7684\u4f8b\u5b50\u5c55\u793a\u4e86\u600e\u4e48\u6307\u5b9a\u4e00\u4e2a\u4e0d\u540c\u7684\u6587\u4ef6\u540d\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ java -jar myproject.jar --spring.config.name=myproject\n")),(0,o.kt)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\u5c55\u793a\u4e86\u600e\u4e48\u6307\u5b9a\u4e24\u4e2a\u8def\u5f84\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ java -jar myproject.jar --spring.config.location=classpath:/default.properties,classpath:/override.properties\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8")," \u5728\u521d\u671f\u9700\u8981\u6839\u636e",(0,o.kt)("inlineCode",{parentName:"p"},"spring.config.name"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"spring.config.location"),"\u51b3\u5b9a\u52a0\u8f7d\u54ea\u4e2a\u6587\u4ef6\uff0c\u6240\u4ee5\u5b83\u4eec\u5fc5\u987b\u5b9a\u4e49\u4e3a\u73af\u5883\u5c5e\u6027\uff08\u901a\u5e38\u4e3aOS\u73af\u5883\u53d8\u91cf\uff0c\u7cfb\u7edf\u5c5e\u6027\u6216\u547d\u4ee4\u884c\u53c2\u6570\uff09\u3002"),(0,o.kt)("p",null,"\u5982\u679c",(0,o.kt)("inlineCode",{parentName:"p"},"spring.config.location"),"\u5305\u542b\u76ee\u5f55\uff08\u76f8\u5bf9\u4e8e\u6587\u4ef6\uff09\uff0c\u90a3\u5b83\u4eec\u5e94\u8be5\u4ee5",(0,o.kt)("inlineCode",{parentName:"p"},"/"),"\u7ed3\u5c3e\uff08\u8fd0\u884c\u65f6\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"spring.config.name"),"\u5173\u8054\u7684\u540d\u79f0\u4f1a\u5728\u88ab\u52a0\u8f7d\u524d\u88ab\u8ffd\u52a0\u5230\u540e\u9762\uff0c\u5305\u62ecprofile-specific\u7684\u6587\u4ef6\u540d\uff09\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"spring.config.location"),"\u4e0b\u5b9a\u4e49\u7684\u6587\u4ef6\u4f7f\u7528\u65b9\u6cd5\u8ddf\u5f80\u5e38\u4e00\u6837\uff0c\u6ca1\u6709profile-specific\u53d8\u91cf\u652f\u6301\u7684\u5c5e\u6027\uff0c\u4f1a\u88abprofile-specific\u7684\u5c5e\u6027\u8986\u76d6\u3002"),(0,o.kt)("p",null,"\u914d\u7f6e\u4f4d\u7f6e\u6309\u76f8\u53cd\u7684\u987a\u5e8f\u641c\u7d22\u3002\u9ed8\u8ba4\u5730\uff0c\u914d\u7f6e\u597d\u7684\u4f4d\u7f6e\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"classpath:/,classpath:/config/,file:./,file:./config/"),"\u3002\u4ea7\u751f\u7684\u641c\u7d22\u987a\u5e8f\u4e3a\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"file:./config/")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"file:./")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"classpath:/config/")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"classpath:/"))),(0,o.kt)("p",null,"\u5f53\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"spring.config.location"),"\u914d\u7f6e\u597d\u81ea\u5b9a\u4e49\u7684\u914d\u7f6e\u4f4d\u7f6e\u65f6\uff0c\u5b83\u4eec\u4f1a\u4ee3\u66ff\u9ed8\u8ba4\u4f4d\u7f6e\u3002\u6bd4\u5982\uff0c\u5982\u679c\u7528\u503c",(0,o.kt)("inlineCode",{parentName:"p"},"classpath:/custom-config/,file:./custom-config/"),"\u914d\u7f6e\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"spring.config.location"),"\uff0c\u641c\u7d22\u987a\u5e8f\u4f1a\u53d8\u6210\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"file:./custom-config/")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"classpath:custom-config/"))),(0,o.kt)("p",null,"\u6216\u8005\uff0c\u5f53\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"spring.config.additional-location"),"\u914d\u7f6e\u597d\u81ea\u5b9a\u4e49\u7684\u914d\u7f6e\u4f4d\u7f6e\u65f6\uff0c\uff0c\u5b83\u4eec\u4f1a\u5728\u9ed8\u8ba4\u4f4d\u7f6e\u7684\u57fa\u7840\u4e0a\u88ab\u4f7f\u7528\u3002\u81ea\u5b9a\u4e49\u7684\u4f4d\u7f6e\u4f1a\u5728\u9ed8\u8ba4\u4f4d\u7f6e\u4e4b\u524d\u88ab\u641c\u7d22\u3002\u4f8b\u5982\uff0c\u5982\u679c\u914d\u7f6e\u4e86\u81ea\u5b9a\u4e49\u7684\u4f4d\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"classpath:/custom-config/,file:./custom-config/"),"\uff0c\u641c\u7d22\u7684\u987a\u5e8f\u4f1a\u53d8\u6210\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"file:./custom-config/")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"classpath:custom-config/")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"file:./config/")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"file:./")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"classpath:/config/")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"classpath:/"))),(0,o.kt)("p",null,"\u8fd9\u79cd\u641c\u7d22\u6392\u5e8f\u5141\u8bb8\u4f60\u5728\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\u91cc\u6307\u5b9a\u9ed8\u8ba4\u503c\uff0c\u7136\u540e\u6709\u9009\u62e9\u5730\u8986\u76d6\u90a3\u4e9b\u503c\u3002\u4f60\u53ef\u4ee5\u9009\u62e9\u9ed8\u8ba4\u4f4d\u7f6e\u4e2d\u7684\u4e00\u5904\uff0c\u5728\u8fd9\u513f\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"application.properties"),"\uff08\u6216\u8005\u4efb\u4f55\u7531",(0,o.kt)("inlineCode",{parentName:"p"},"spring.config.name"),"\u6307\u5b9a\u7684\u540d\u5b57\uff09\u91cc\u4e3a\u5e94\u7528\u8bbe\u7f6e\u9ed8\u8ba4\u503c\u3002\u7136\u540e\uff0c\u5728\u8fd0\u884c\u65f6\u4f7f\u7528\u5728\u81ea\u5b9a\u4e49\u7684\u4f4d\u7f6e\u4e0a\u7684\u4e0d\u540c\u7684\u6587\u4ef6\uff0c\u8986\u76d6\u8fd9\u4e9b\u9ed8\u8ba4\u503c\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8")," \u5982\u679c\u4f7f\u7528\u73af\u5883\u53d8\u91cf\u800c\u4e0d\u662f\u7cfb\u7edf\u5c5e\u6027\uff0c\u9700\u8981\u6ce8\u610f\u591a\u6570\u64cd\u4f5c\u7cfb\u7edf\u7684key\u540d\u79f0\u4e0d\u5141\u8bb8\u4ee5\u53e5\u53f7\u5206\u5272\uff08period-separated\uff09\uff0c\u4f46\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e0b\u5212\u7ebf\uff08underscores\uff09\u4ee3\u66ff\uff08\u6bd4\u5982\uff0c\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"SPRING_CONFIG_NAME"),"\u4ee3\u66ff",(0,o.kt)("inlineCode",{parentName:"p"},"spring.config.name"),"\uff09\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8")," \u5982\u679c\u4f60\u7684\u5e94\u7528\u8fd0\u884c\u5728\u5bb9\u5668\u4e2d\uff0c\u90a3\u4e48JNDI\u5c5e\u6027\uff08java:comp/env\uff09\u6216servlet\u4e0a\u4e0b\u6587\u521d\u59cb\u5316\u53c2\u6570\u53ef\u4ee5\u7528\u6765\u4ee3\u66ff\u73af\u5883\u53d8\u91cf\u6216\u7cfb\u7edf\u5c5e\u6027\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u4f7f\u7528\u73af\u5883\u53d8\u91cf\u6216\u7cfb\u7edf\u5c5e\u6027\u3002"))}f.isMDXComponent=!0}}]);