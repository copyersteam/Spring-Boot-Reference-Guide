"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[54190],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=c(t),m=a,d=g["".concat(l,".").concat(m)]||g[m]||s[m]||o;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},35884:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],p={},l=void 0,c={unversionedId:"II. Getting Started/11.5. Creating an Executable Jar",id:"II. Getting Started/11.5. Creating an Executable Jar",title:"11.5. Creating an Executable Jar",description:"11.5. \u521b\u5efa\u53ef\u6267\u884cjar",source:"@site/docs/II. Getting Started/11.5. Creating an Executable Jar.md",sourceDirName:"II. Getting Started",slug:"/II. Getting Started/11.5. Creating an Executable Jar",permalink:"/Spring-Boot-Reference-Guide/docs/II. Getting Started/11.5. Creating an Executable Jar",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/II. Getting Started/11.5. Creating an Executable Jar.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"11.4. Running the Example",permalink:"/Spring-Boot-Reference-Guide/docs/II. Getting Started/11.4. Running the Example"},next:{title:"9.1. Servlet Containers",permalink:"/Spring-Boot-Reference-Guide/docs/II. Getting Started/9.1. Servlet Containers"}},u={},s=[{value:"11.5. \u521b\u5efa\u53ef\u6267\u884cjar",id:"115-\u521b\u5efa\u53ef\u6267\u884cjar",level:3}],g={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"115-\u521b\u5efa\u53ef\u6267\u884cjar"},"11.5. \u521b\u5efa\u53ef\u6267\u884cjar"),(0,o.kt)("p",null,'\u6211\u4eec\u901a\u8fc7\u521b\u5efa\u4e00\u4e2a\u5b8c\u5168\u81ea\u5305\u542b\uff0c\u5e76\u53ef\u4ee5\u5728\u751f\u4ea7\u73af\u5883\u8fd0\u884c\u7684\u53ef\u6267\u884cjar\u6765\u7ed3\u675f\u793a\u4f8b\u3002\u53ef\u6267\u884cjars\uff08\u6709\u65f6\u88ab\u79f0\u4e3a\u80d6jars "fat jars"\uff09\u662f\u5305\u542b\u7f16\u8bd1\u540e\u7684\u7c7b\u53ca\u4ee3\u7801\u8fd0\u884c\u6240\u9700\u4f9d\u8d56jar\u7684\u5b58\u6863\u3002'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u53ef\u6267\u884cjars\u548cJava"),'\uff1aJava\u6ca1\u6709\u63d0\u4f9b\u4e00\u4e2a\u6807\u51c6\u65b9\u5f0f\uff0c\u7528\u4e8e\u52a0\u8f7d\u5185\u5d4cjar\u6587\u4ef6\uff08\u5373jar\u6587\u4ef6\u4e2d\u8fd8\u5305\u542bjar\u6587\u4ef6\uff09\uff0c\u8fd9\u5bf9\u5206\u53d1\u81ea\u5305\u542b\u5e94\u7528\u6765\u8bf4\u662f\u4e2a\u95ee\u9898\u3002\u4e3a\u4e86\u89e3\u51b3\u8be5\u95ee\u9898\uff0c\u5f88\u591a\u5f00\u53d1\u8005\u91c7\u7528"\u5171\u4eab\u7684"jars\u3002\u5171\u4eab\u7684jar\u53ea\u662f\u5c06\u6240\u6709\u5e94\u7528\u4f9d\u8d56\u7684\u7c7b\u6253\u5305\u8fdb\u4e00\u4e2a\u5355\u72ec\u7684\u5b58\u6863\uff0c\u8fd9\u79cd\u65b9\u5f0f\u5b58\u5728\u7684\u95ee\u9898\u662f\uff0c\u5f88\u96be\u533a\u5206\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u4e86\u54ea\u4e9b\u5e93\u3002\u5728\u591a\u4e2ajars\u4e2d\u5982\u679c\u5b58\u5728\u76f8\u540c\u7684\u6587\u4ef6\u540d\uff08\u4f46\u5185\u5bb9\u4e0d\u4e00\u6837\uff09\u4e5f\u4f1a\u662f\u4e00\u4e2a\u95ee\u9898\u3002Spring Boot\u91c7\u53d6\u4e00\u4e2a',"[\u4e0d\u540c\u7684\u65b9\u5f0f]","(../X. Appendices/D. The executable jar format.md)\uff0c\u8ba9\u4f60\u771f\u6b63\u7684\u76f4\u63a5\u5185\u5d4cjars\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u521b\u5efa\u53ef\u6267\u884c\u7684jar\uff0c\u6211\u4eec\u9700\u8981\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"spring-boot-maven-plugin"),"\u6dfb\u52a0\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml"),"\u4e2d\uff0c\u5728dependencies\u8282\u70b9\u540e\u9762\u63d2\u5165\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<build>\n    <plugins>\n        <plugin>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-maven-plugin</artifactId>\n        </plugin>\n    </plugins>\n</build>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"spring-boot-starter-parent")," POM\u5305\u542b\u7ed1\u5b9a\u5230repackage\u76ee\u6807\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"<executions>"),"\u914d\u7f6e\u3002\u5982\u679c\u4e0d\u4f7f\u7528parent POM\uff0c\u4f60\u9700\u8981\u81ea\u5df1\u58f0\u660e\u8be5\u914d\u7f6e\uff0c\u5177\u4f53\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/maven-plugin/usage.html"},"\u63d2\u4ef6\u6587\u6863"),"\u3002"),(0,o.kt)("p",null,"\u4fdd\u5b58",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml"),"\uff0c\u5e76\u4ece\u547d\u4ee4\u884c\u8fd0\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"mvn package"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ mvn package\n\n[INFO] Scanning for projects...\n[INFO]\n[INFO] ------------------------------------------------------------------------\n[INFO] Building myproject 0.0.1-SNAPSHOT\n[INFO] ------------------------------------------------------------------------\n[INFO] .... ..\n[INFO] --- maven-jar-plugin:2.4:jar (default-jar) @ myproject ---\n[INFO] Building jar: /Users/developer/example/spring-boot-example/target/myproject-0.0.1-SNAPSHOT.jar\n[INFO]\n[INFO] --- spring-boot-maven-plugin:2.0.0.RELEASE:repackage (default) @ myproject ---\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n")),(0,o.kt)("p",null,"\u5982\u679c\u67e5\u770btarget\u76ee\u5f55\uff0c\u4f60\u5e94\u8be5\u53ef\u4ee5\u770b\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"myproject-0.0.1-SNAPSHOT.jar"),"\uff0c\u8be5\u6587\u4ef6\u5927\u6982\u670910MB\u3002\u60f3\u67e5\u770b\u5185\u90e8\u7ed3\u6784\uff0c\u53ef\u4ee5\u8fd0\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"jar tvf"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ jar tvf target/myproject-0.0.1-SNAPSHOT.jar\n")),(0,o.kt)("p",null,"\u5728\u8be5\u76ee\u5f55\u4e0b\uff0c\u4f60\u5e94\u8be5\u8fd8\u80fd\u770b\u5230\u4e00\u4e2a\u5f88\u5c0f\u7684\u540d\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"myproject-0.0.1-SNAPSHOT.jar.original"),"\u7684\u6587\u4ef6\uff0c\u8fd9\u662f\u5728Spring Boot\u91cd\u65b0\u6253\u5305\u524d\uff0cMaven\u521b\u5efa\u7684\u539f\u59cbjar\u6587\u4ef6\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"java -jar"),"\u547d\u4ee4\u8fd0\u884c\u8be5\u5e94\u7528\u7a0b\u5e8f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ java -jar target/myproject-0.0.1-SNAPSHOT.jar\n\n  .   ____          _            __ _ _\n /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\n( ( )\\___ | '_ | '_| | '_ \\/ _` | \\ \\ \\ \\\n \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )\n  '  |____| .__|_| |_|_| |_\\__, | / / / /\n =========|_|==============|___/=/_/_/_/\n :: Spring Boot ::  (v2.0.0.RELEASE)\n....... . . .\n....... . . . (log output here)\n....... . . .\n........ Started Example in 2.536 seconds (JVM running for 2.864)\n")),(0,o.kt)("p",null,"\u5982\u524d\u6240\u8ff0\uff0c\u70b9\u51fb",(0,o.kt)("inlineCode",{parentName:"p"},"ctrl-c"),"\u9000\u51fa\u5e94\u7528\u3002"))}m.isMDXComponent=!0}}]);