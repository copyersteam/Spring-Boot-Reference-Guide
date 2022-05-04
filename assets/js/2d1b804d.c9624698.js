"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[82092],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(t),d=i,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},46643:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],p={},u=void 0,l={unversionedId:"IV. Spring Boot features/24.7.3. Properties Conversion",id:"IV. Spring Boot features/24.7.3. Properties Conversion",title:"24.7.3. Properties Conversion",description:"24.7.3 \u5c5e\u6027\u8f6c\u6362",source:"@site/docs/IV. Spring Boot features/24.7.3. Properties Conversion.md",sourceDirName:"IV. Spring Boot features",slug:"/IV. Spring Boot features/24.7.3. Properties Conversion",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/24.7.3. Properties Conversion",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IV. Spring Boot features/24.7.3. Properties Conversion.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"24.7.2. Relaxed Binding",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/24.7.2. Relaxed Binding"},next:{title:"24.7.4. @ConfigurationProperties Validation",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/24.7.4. @ConfigurationProperties Validation"}},s={},c=[{value:"24.7.3 \u5c5e\u6027\u8f6c\u6362",id:"2473-\u5c5e\u6027\u8f6c\u6362",level:3}],m={toc:c};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"2473-\u5c5e\u6027\u8f6c\u6362"},"24.7.3 \u5c5e\u6027\u8f6c\u6362"),(0,o.kt)("p",null,"\u5c06\u5916\u90e8\u5e94\u7528\u914d\u7f6e\u7ed1\u5b9a\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"@ConfigurationProperties")," beans\u65f6\uff0cSpring Boot\u4f1a\u5c1d\u8bd5\u5c06\u5c5e\u6027\u5f3a\u5236\u8f6c\u6362\u4e3a\u6b63\u786e\u7684\u7c7b\u578b\u3002\u5982\u679c\u9700\u8981\u81ea\u5b9a\u4e49\u7c7b\u578b\u8f6c\u6362\u5668\uff0c\u4f60\u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"ConversionService")," bean\uff08\u540d\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"conversionService"),"\u7684bean\uff09\uff0c\u6216\u81ea\u5b9a\u4e49\u5c5e\u6027\u7f16\u8f91\u5668\uff08\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"CustomEditorConfigurer")," bean\uff09\uff0c\u6216\u81ea\u5b9a\u4e49",(0,o.kt)("inlineCode",{parentName:"p"},"Converters"),"\uff08bean\u5b9a\u4e49\u65f6\u9700\u8981\u6ce8\u89e3",(0,o.kt)("inlineCode",{parentName:"p"},"@ConfigurationPropertiesBinding"),"\uff09\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8")," \u7531\u4e8e\u8be5bean\u5728\u5e94\u7528\u7a0b\u5e8f\u751f\u547d\u5468\u671f\u7684\u65e9\u671f\u5c31\u9700\u8981\u4f7f\u7528\uff0c\u6240\u4ee5\u786e\u4fdd\u9650\u5236\u4f60\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"ConversionService"),"\u4f7f\u7528\u7684\u4f9d\u8d56\u3002\u901a\u5e38\uff0c\u5728\u521b\u5efa\u65f6\u671f\u4efb\u4f55\u4f60\u9700\u8981\u7684\u4f9d\u8d56\u53ef\u80fd\u90fd\u6ca1\u5b8c\u5168\u521d\u59cb\u5316\u3002\u5982\u679c\u5f3a\u5236\u914d\u7f6e\u5173\u952e\u5b57\u4e0d\u9700\u8981\u5b83\uff0c\u800c\u4e14\u53ea\u4f9d\u8d56\u6ee1\u8db3",(0,o.kt)("inlineCode",{parentName:"p"},"@ConfigurationPropertiesBinding"),"\u7684\u81ea\u5b9a\u4e49\u7684\u8f6c\u6362\u5668\uff0c\u4f60\u53ef\u80fd\u60f3\u8981\u91cd\u547d\u540d\u81ea\u5b9a\u4e49\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"ConversionService"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u65f6\u95f4\u6bb5\u8f6c\u6362")),(0,o.kt)("p",null,"Spring Boot\u5bf9\u8868\u8fbe\u65f6\u95f4\u6bb5\u6709\u4e13\u95e8\u7684\u652f\u6301\u3002 \u5982\u679c\u4f60\u66b4\u9732\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"java.time.Duration"),"\u5c5e\u6027\uff0c\u53ef\u7528\u4e0b\u5217\u683c\u5f0f\u7684\u5e94\u7528\u5c5e\u6027\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5e38\u89c4\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"long"),"\u8868\u793a\uff08\u9ed8\u8ba4\u5355\u4f4d\u4e3a\u6beb\u79d2\uff0c\u9664\u975e\u6307\u5b9a\u4e86",(0,o.kt)("inlineCode",{parentName:"li"},"@DefaultUnit"),"\uff09"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api//java/time/Duration.html#parse-java.lang.CharSequence-"},(0,o.kt)("inlineCode",{parentName:"a"},"java.util.Duration"),"\u4f7f\u7528\u7684"),"\u6807\u51c6\u7684ISO-8601\u683c\u5f0f"),(0,o.kt)("li",{parentName:"ul"},"\u7ec4\u5408\u4e86\u503c\u4e0e\u5355\u4f4d\u7684\u66f4\u52a0\u6613\u8bfb\u7684\u683c\u5f0f\uff08\u6bd4\u5982",(0,o.kt)("inlineCode",{parentName:"li"},"10s"),"\u8868\u793a10\u79d2\uff09")),(0,o.kt)("p",null,"\u8003\u8651\u4e0b\u9762\u7684\u4f8b\u5b50\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@ConfigurationProperties("app.system")\npublic class AppSystemProperties {\n\n    @DurationUnit(ChronoUnit.SECONDS)\n    private Duration sessionTimeout = Duration.ofSeconds(30);\n\n    private Duration readTimeout = Duration.ofMillis(1000);\n\n    public Duration getSessionTimeout() {\n        return this.sessionTimeout;\n    }\n\n    public void setSessionTimeout(Duration sessionTimeout) {\n        this.sessionTimeout = sessionTimeout;\n    }\n\n    public Duration getReadTimeout() {\n        return this.readTimeout;\n    }\n\n    public void setReadTimeout(Duration readTimeout) {\n        this.readTimeout = readTimeout;\n    }\n\n}\n')),(0,o.kt)("p",null,"\u4e3a\u4e86\u5c06\u4f1a\u8bdd\u8d85\u65f6\u6307\u5b9a\u4e3a30\u79d2\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"30"),"\uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"PT30S"),"\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"30s"),"\u90fd\u662f\u7b49\u4ef7\u7684\u3002\u5c06\u8bfb\u53d6\u8d85\u65f6\u6307\u5b9a\u4e3a500\u6beb\u79d2\uff0c\u53ef\u4ee5\u7528\u4e0b\u5217\u683c\u5f0f\u91cc\u7684\u4efb\u4f55\u4e00\u79cd\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"500"),"\uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"PT0.5S"),"\u4e0e",(0,o.kt)("inlineCode",{parentName:"p"},"500ms"),"\u3002"),(0,o.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u652f\u6301\u7684\u5355\u4f4d\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ns\u7528\u4e8e\u7eb3\u79d2"),(0,o.kt)("li",{parentName:"ul"},"ms\u7528\u4e8e\u6beb\u79d2"),(0,o.kt)("li",{parentName:"ul"},"s\u7528\u4e8e\u79d2"),(0,o.kt)("li",{parentName:"ul"},"m\u7528\u4e8e\u5206"),(0,o.kt)("li",{parentName:"ul"},"h\u7528\u4e8e\u5c0f\u65f6"),(0,o.kt)("li",{parentName:"ul"},"d\u5e94\u7528\u65e5")),(0,o.kt)("p",null,"\u9ed8\u8ba4\u5355\u4f4d\u662f\u6beb\u79d2\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"@DefaultUnit"),"\u91cd\u5199\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8")," \u5982\u679c\u4f60\u6b63\u5728\u5347\u7ea7\u4e4b\u524d\u7684\u7248\u672c\uff0c\u4e4b\u524d\u7684\u7248\u672c\u7b80\u5355\u5730\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"Long"),"\u6765\u8868\u8fbe\u65f6\u95f4\u6bb5\uff0c\u5982\u679c\u5207\u6362\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"Duration"),"\u65f6\u4e0d\u662f\u6beb\u79d2\uff0c\u8981\u786e\u4fdd\u5b9a\u4e49\u4e86\u5355\u4f4d\uff08\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"@DefaultUnit"),"\uff09\u3002\u8fd9\u6837\u505a\u7684\u8bdd\uff0c\u5728\u652f\u6301\u66f4\u52a0\u4e30\u5bcc\u7684\u683c\u5f0f\u7684\u540c\u65f6\uff0c\u5347\u7ea7\u4e5f\u80fd\u66f4\u52a0\u900f\u660e\u3002"))}d.isMDXComponent=!0}}]);