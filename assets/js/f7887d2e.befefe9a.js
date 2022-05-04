"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[5261],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,g=m["".concat(l,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78918:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],p={},l=void 0,c={unversionedId:"V. Spring Boot Actuator/54.3.1 Spring MVC Metrics",id:"V. Spring Boot Actuator/54.3.1 Spring MVC Metrics",title:"54.3.1 Spring MVC Metrics",description:"54.3.1 Spring MVC\u6307\u6807",source:"@site/docs/V. Spring Boot Actuator/54.3.1 Spring MVC Metrics.md",sourceDirName:"V. Spring Boot Actuator",slug:"/V. Spring Boot Actuator/54.3.1 Spring MVC Metrics",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/54.3.1 Spring MVC Metrics",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/V. Spring Boot Actuator/54.3.1 Spring MVC Metrics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"54.3 Supported Metrics",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/54.3 Supported Metrics"},next:{title:"54.3.2 Spring WebFlux Metrics",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/54.3.2 Spring WebFlux Metrics"}},u={},s=[{value:"54.3.1 Spring MVC\u6307\u6807",id:"5431-spring-mvc\u6307\u6807",level:3}],m={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"5431-spring-mvc\u6307\u6807"},"54.3.1 Spring MVC\u6307\u6807"),(0,o.kt)("p",null,"\u81ea\u52a8\u914d\u7f6e\u5141\u8bb8\u4f7f\u7528Spring MVC\u5904\u7406\u8bf7\u6c42\u3002\u5f53",(0,o.kt)("inlineCode",{parentName:"p"},"management.metrics.web.server.auto-time-requests"),"\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u6b64\u68c0\u6d4b\u7528\u4e8e\u6240\u6709\u8bf7\u6c42\u3002\u6216\u8005\uff0c\u5f53\u8bbe\u7f6e\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"\u65f6\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5411\u8bf7\u6c42\u5904\u7406\u65b9\u6cd5\u6dfb\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},"@Timed"),"\u6765\u542f\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\n@Timed 1\npublic class MyController {\n\n    @GetMapping("/api/people")\n    @Timed(extraTags = { "region", "us-east-1" }) 2\n    @Timed(value = "all.people", longTask = true) 3\n    public List<Person> listPeople() { ... }\n\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u63a7\u5236\u5668\u7c7b\uff0c\u7528\u4e8e\u5bf9\u63a7\u5236\u5668\u4e2d\u7684\u6bcf\u4e2a\u8bf7\u6c42\u5904\u7406\u7a0b\u5e8f\u542f\u7528\u8ba1\u65f6\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u4e3a\u5355\u4e2a\u7aef\u70b9\u542f\u7528\u7684\u65b9\u6cd5\u3002\u5982\u679c\u4f60\u5728\u7c7b\u4e2d\u6709\u8ba1\u65f6\u5668\uff0c\u5219\u6ca1\u6709\u5fc5\u8981\u8fd9\u6837\u505a\uff0c\u4f46\u662f\u53ef\u4ee5\u4f7f\u7528\u5b83\u8fdb\u4e00\u6b65\u5b9a\u5236\u6b64\u7279\u5b9a\u7aef\u70b9\u7684\u8ba1\u65f6\u5668\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5177\u6709",(0,o.kt)("inlineCode",{parentName:"li"},"longTask = true"),"\u7684\u65b9\u6cd5\uff0c\u7528\u4e8e\u4e3a\u8be5\u65b9\u6cd5\u542f\u7528\u957f\u4efb\u52a1\u8ba1\u65f6\u5668\u3002\u957f\u4efb\u52a1\u8ba1\u65f6\u5668\u9700\u8981\u4e00\u4e2a\u5355\u72ec\u7684\u5ea6\u91cf\u540d\u79f0\uff0c\u53ef\u4ee5\u4f7f\u7528\u77ed\u4efb\u52a1\u8ba1\u65f6\u5668\u8fdb\u884c\u5806\u53e0\u3002")),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"http.server.requests"),"\u6765\u751f\u6210\u5ea6\u91cf\u6807\u51c6\u3002\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"management.metrics.web.server.requests-metric-name"),"\u5c5e\u6027\u6765\u5b9a\u5236\u540d\u79f0\u3002"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e0eSpring MVC\u76f8\u5173\u7684\u6307\u6807\u7528\u4ee5\u4e0b\u4fe1\u606f\u6807\u8bb0\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\u65b9\u6cd5"),"\uff0c\u8bf7\u6c42\u7684\u65b9\u6cd5(\u4f8b\u5982\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"GET"),"\u6216",(0,o.kt)("inlineCode",{parentName:"li"},"POST"),")\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"uri"),"\uff0c\u8bf7\u6c42\u5728\u53d8\u91cf\u66ff\u6362\u4e4b\u524d\u7684uri\u6a21\u677f\uff0c\u5982\u679c\u53ef\u80fd\u7684\u8bdd(\u4f8b\u5982",(0,o.kt)("inlineCode",{parentName:"li"},"/api/person/{id}"),")\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\u72b6\u6001"),"\uff0c\u54cd\u5e94\u7684HTTP\u72b6\u6001\u7801(\u4f8b\u5982\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"200"),"\u6216",(0,o.kt)("inlineCode",{parentName:"li"},"500"),")\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\u5f02\u5e38"),"\uff0c\u5904\u7406\u8bf7\u6c42\u65f6\u629b\u51fa\u7684\u4efb\u4f55\u5f02\u5e38\u7684\u7b80\u5355\u7c7b\u540d\u3002\n\u8981\u81ea\u5b9a\u4e49\u6807\u8bb0\uff0c\u8bf7\u63d0\u4f9b\u4e00\u4e2a\u5b9e\u73b0",(0,o.kt)("inlineCode",{parentName:"li"},"WebMvcTagsProvider"),"\u7684",(0,o.kt)("inlineCode",{parentName:"li"},"@Bean"),"\u3002")))}d.isMDXComponent=!0}}]);