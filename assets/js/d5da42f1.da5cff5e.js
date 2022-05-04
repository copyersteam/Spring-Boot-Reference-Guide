"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[46213],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return d}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=t.createContext({}),p=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},s=function(e){var r=p(e.components);return t.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(n),d=a,b=f["".concat(u,".").concat(d)]||f[d]||l[d]||o;return n?t.createElement(b,i(i({ref:r},s),{},{components:n})):t.createElement(b,i({ref:r},s))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},44827:function(e,r,n){n.r(r),n.d(r,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var t=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={},u=void 0,p={unversionedId:"IX. \u2018How-to\u2019 guides/86.6 Extract Specific Libraries When an Executable Jar Runs",id:"IX. \u2018How-to\u2019 guides/86.6 Extract Specific Libraries When an Executable Jar Runs",title:"86.6 Extract Specific Libraries When an Executable Jar Runs",description:"86.6 \u5728\u53ef\u6267\u884cjar\u8fd0\u884c\u65f6\u63d0\u53d6\u7279\u5b9a\u7684\u7248\u672c",source:"@site/docs/IX. \u2018How-to\u2019 guides/86.6 Extract Specific Libraries When an Executable Jar Runs.md",sourceDirName:"IX. \u2018How-to\u2019 guides",slug:"/IX. \u2018How-to\u2019 guides/86.6 Extract Specific Libraries When an Executable Jar Runs",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/86.6 Extract Specific Libraries When an Executable Jar Runs",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IX. \u2018How-to\u2019 guides/86.6 Extract Specific Libraries When an Executable Jar Runs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"86.5 Use a Spring Boot Application as a Dependency",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/86.5 Use a Spring Boot Application as a Dependency"},next:{title:"86.7 Create a Non-executable JAR with Exclusions",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/86.7 Create a Non-executable JAR with Exclusions"}},s={},l=[{value:"86.6 \u5728\u53ef\u6267\u884cjar\u8fd0\u884c\u65f6\u63d0\u53d6\u7279\u5b9a\u7684\u7248\u672c",id:"866-\u5728\u53ef\u6267\u884cjar\u8fd0\u884c\u65f6\u63d0\u53d6\u7279\u5b9a\u7684\u7248\u672c",level:3}],f={toc:l};function d(e){var r=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"866-\u5728\u53ef\u6267\u884cjar\u8fd0\u884c\u65f6\u63d0\u53d6\u7279\u5b9a\u7684\u7248\u672c"},"86.6 \u5728\u53ef\u6267\u884cjar\u8fd0\u884c\u65f6\u63d0\u53d6\u7279\u5b9a\u7684\u7248\u672c"),(0,o.kt)("p",null,"\u5728\u4e00\u4e2a\u53ef\u6267\u884cjar\u4e2d\uff0c\u4e3a\u4e86\u8fd0\u884c\uff0c\u591a\u6570\u5185\u5d4c\u7684\u5e93\u4e0d\u9700\u8981\u62c6\u5305\uff08unpacked\uff09\uff0c\u7136\u800c\u6709\u4e00\u4e9b\u5e93\u53ef\u80fd\u4f1a\u9047\u5230\u95ee\u9898\u3002\u4f8b\u5982\uff0cJRuby\u5305\u542b\u5b83\u81ea\u5df1\u7684\u5185\u5d4cjar\uff0c\u5b83\u5047\u5b9a",(0,o.kt)("inlineCode",{parentName:"p"},"jruby-complete.jar"),"\u672c\u8eab\u603b\u662f\u80fd\u591f\u76f4\u63a5\u4f5c\u4e3a\u6587\u4ef6\u8bbf\u95ee\u7684\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u5904\u7406\u4efb\u4f55\u6709\u95ee\u9898\u7684\u5e93\uff0c\u4f60\u53ef\u4ee5\u6807\u8bb0\u90a3\u4e9b\u7279\u5b9a\u7684\u5185\u5d4cjars\uff0c\u8ba9\u5b83\u4eec\u5728\u53ef\u6267\u884cjar\u7b2c\u4e00\u6b21\u8fd0\u884c\u65f6\u81ea\u52a8\u89e3\u538b\u5230\u4e00\u4e2a\u4e34\u65f6\u6587\u4ef6\u5939\u4e2d\u3002\u4f8b\u5982\uff0c\u4e3a\u4e86\u5c06JRuby\u6807\u8bb0\u4e3a\u4f7f\u7528Maven\u63d2\u4ef6\u62c6\u5305\uff0c\u4f60\u9700\u8981\u6dfb\u52a0\u5982\u4e0b\u7684\u914d\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<build>\n    <plugins>\n        <plugin>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-maven-plugin</artifactId>\n            <configuration>\n                <requiresUnpack>\n                    <dependency>\n                        <groupId>org.jruby</groupId>\n                        <artifactId>jruby-complete</artifactId>\n                    </dependency>\n                </requiresUnpack>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n")))}d.isMDXComponent=!0}}]);