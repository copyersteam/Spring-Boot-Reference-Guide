"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[23591],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return g}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(t),g=a,m=d["".concat(l,".").concat(g)]||d[g]||c[g]||o;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},51290:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],p={},l=void 0,s={unversionedId:"IV. Spring Boot features/27.1.11. Error Handling",id:"IV. Spring Boot features/27.1.11. Error Handling",title:"27.1.11. Error Handling",description:"27.1.11 \u9519\u8bef\u5904\u7406",source:"@site/docs/IV. Spring Boot features/27.1.11. Error Handling.md",sourceDirName:"IV. Spring Boot features",slug:"/IV. Spring Boot features/27.1.11. Error Handling",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/27.1.11. Error Handling",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IV. Spring Boot features/27.1.11. Error Handling.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"27.1.10. Template Engines",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/27.1.10. Template Engines"},next:{title:"27.1.12. Spring HATEOAS",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/27.1.12. Spring HATEOAS"}},u={},c=[{value:"27.1.11 \u9519\u8bef\u5904\u7406",id:"27111-\u9519\u8bef\u5904\u7406",level:3}],d={toc:c};function g(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"27111-\u9519\u8bef\u5904\u7406"},"27.1.11 \u9519\u8bef\u5904\u7406"),(0,o.kt)("p",null,"Spring Boot\u9ed8\u8ba4\u63d0\u4f9b\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"/error"),"\u6620\u5c04\u7528\u6765\u4ee5\u5408\u9002\u7684\u65b9\u5f0f\u5904\u7406\u6240\u6709\u7684\u9519\u8bef\uff0c\u5e76\u5c06\u5b83\u6ce8\u518c\u4e3aservlet\u5bb9\u5668\u4e2d\u5168\u5c40\u7684\n\u9519\u8bef\u9875\u9762\u3002\u5bf9\u4e8e\u673a\u5668\u5ba2\u6237\u7aef\uff08\u76f8\u5bf9\u4e8e\u6d4f\u89c8\u5668\u800c\u8a00\uff0c\u6d4f\u89c8\u5668\u504f\u91cd\u4e8e\u4eba\u7684\u884c\u4e3a\uff09\uff0c\u5b83\u4f1a\u4ea7\u751f\u4e00\u4e2a\u5177\u6709\u8be6\u7ec6\u9519\u8bef\uff0cHTTP\u72b6\u6001\uff0c\u5f02\u5e38\u4fe1\u606f\u7684JSON\u54cd\u5e94\u3002\u5bf9\u4e8e\u6d4f\u89c8\u5668\u5ba2\u6237\u7aef\uff0c\u5b83\u4f1a\u4ea7\u751f\u4e00\u4e2a\u767d\u8272\u6807\u7b7e\u6837\u5f0f\uff08whitelabel\uff09\u7684\u9519\u8bef\u89c6\u56fe\uff0c\u8be5\u89c6\u56fe\u5c06\u4ee5HTML\u683c\u5f0f\u663e\u793a\u540c\u6837\u7684\u6570\u636e\uff08\u53ef\u4ee5\u6dfb\u52a0\u4e00\u4e2a\u89e3\u6790\u4e3a'error'\u7684View\u6765\u81ea\u5b9a\u4e49\u5b83\uff09\u3002\u4e3a\u4e86\u5b8c\u5168\u66ff\u6362\u9ed8\u8ba4\u7684\u884c\u4e3a\uff0c\u4f60\u53ef\u4ee5\u5b9e\u73b0",(0,o.kt)("inlineCode",{parentName:"p"},"ErrorController"),"\uff0c\u5e76\u6ce8\u518c\u4e00\u4e2a\u8be5\u7c7b\u578b\u7684bean\u5b9a\u4e49\uff0c\u6216\u7b80\u5355\u5730\u6dfb\u52a0\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"ErrorAttributes"),"\u7c7b\u578b\u7684bean\u4ee5\u4f7f\u7528\u73b0\u5b58\u7684\u673a\u5236\uff0c\u53ea\u662f\u66ff\u6362\u663e\u793a\u7684\u5185\u5bb9\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8")," ",(0,o.kt)("inlineCode",{parentName:"p"},"BasicErrorController"),"\u53ef\u4ee5\u4f5c\u4e3a\u81ea\u5b9a\u4e49",(0,o.kt)("inlineCode",{parentName:"p"},"ErrorController"),"\u7684\u57fa\u7c7b\uff0c\u5982\u679c\u4f60\u60f3\u6dfb\u52a0\u5bf9\u65b0context type\u7684\u5904\u7406\uff08\u9ed8\u8ba4\u5904\u7406",(0,o.kt)("inlineCode",{parentName:"p"},"text/html"),"\uff09\uff0c\u8fd9\u4f1a\u5f88\u6709\u5e2e\u52a9\u3002\u4f60\u53ea\u9700\u8981\u7ee7\u627f",(0,o.kt)("inlineCode",{parentName:"p"},"BasicErrorController"),"\uff0c\u6dfb\u52a0\u4e00\u4e2apublic\u65b9\u6cd5\uff0c\u5e76\u6ce8\u89e3\u5e26\u6709",(0,o.kt)("inlineCode",{parentName:"p"},"produces"),"\u5c5e\u6027\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"@RequestMapping"),"\uff0c\u7136\u540e\u521b\u5efa\u8be5\u65b0\u7c7b\u578b\u7684bean\u3002"),(0,o.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a\u6ce8\u89e3\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"@ControllerAdvice"),"\u7684\u7c7b\u53bb\u81ea\u5b9a\u4e49\u67d0\u4e2a\u7279\u6b8acontroller\u6216exception\u7c7b\u578b\u7684JSON\u6587\u6863\u3002\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@ControllerAdvice(basePackageClasses = AcmeController.class)\npublic class AcmeControllerAdvice extends ResponseEntityExceptionHandler {\n\n    @ExceptionHandler(YourException.class)\n    @ResponseBody\n    ResponseEntity<?> handleControllerException(HttpServletRequest request, Throwable ex) {\n        HttpStatus status = getStatus(request);\n        return new ResponseEntity<>(new CustomErrorType(status.value(), ex.getMessage()), status);\n    }\n\n    private HttpStatus getStatus(HttpServletRequest request) {\n        Integer statusCode = (Integer) request.getAttribute("javax.servlet.error.status_code");\n        if (statusCode == null) {\n            return HttpStatus.INTERNAL_SERVER_ERROR;\n        }\n        return HttpStatus.valueOf(statusCode);\n    }\n\n}\n')),(0,o.kt)("p",null,"\u5728\u4ee5\u4e0a\u793a\u4f8b\u4e2d\uff0c\u5982\u679c\u8ddf",(0,o.kt)("inlineCode",{parentName:"p"},"AcmeController"),"\u76f8\u540cpackage\u7684\u67d0\u4e2acontroller\u629b\u51fa",(0,o.kt)("inlineCode",{parentName:"p"},"YourException"),"\uff0c\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"CustomErrorType"),"\u7c7b\u578b\u7684POJO\u7684JSON\u5c55\u793a\u5c06\u4ee3\u66ff",(0,o.kt)("inlineCode",{parentName:"p"},"ErrorAttributes"),"\u5c55\u793a\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49\u9519\u8bef\u9875\u9762")),(0,o.kt)("p",null,"\u5982\u679c\u60f3\u4e3a\u67d0\u4e2a\u7ed9\u5b9a\u7684\u72b6\u6001\u7801\u5c55\u793a\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684HTML\u9519\u8bef\u9875\u9762\uff0c\u4f60\u9700\u8981\u5c06\u6587\u4ef6\u6dfb\u52a0\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"/error"),"\u6587\u4ef6\u5939\u4e0b\u3002\u9519\u8bef\u9875\u9762\u65e2\u53ef\u4ee5\u662f\u9759\u6001HTML\uff08\u6bd4\u5982\uff0c\u4efb\u4f55\u9759\u6001\u8d44\u6e90\u6587\u4ef6\u5939\u4e0b\u6dfb\u52a0\u7684\uff09\uff0c\u4e5f\u53ef\u4ee5\u662f\u4f7f\u7528\u6a21\u677f\u6784\u5efa\u7684\uff0c\u6587\u4ef6\u540d\u5fc5\u987b\u662f\u660e\u786e\u7684\u72b6\u6001\u7801\u6216\u4e00\u7cfb\u5217\u6807\u7b7e\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u6620\u5c04",(0,o.kt)("inlineCode",{parentName:"p"},"404"),"\u5230\u4e00\u4e2a\u9759\u6001HTML\u6587\u4ef6\uff0c\u4f60\u7684\u76ee\u5f55\u7ed3\u6784\u53ef\u80fd\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"src/\n +- main/\n     +- java/\n     |   + <source code>\n     +- resources/\n         +- public/\n             +- error/\n             |   +- 404.html\n             +- <other public assets>\n")),(0,o.kt)("p",null,"\u4f7f\u7528FreeMarker\u6a21\u677f\u6620\u5c04\u6240\u6709",(0,o.kt)("inlineCode",{parentName:"p"},"5xx"),"\u9519\u8bef\uff0c\u4f60\u9700\u8981\u5982\u4e0b\u7684\u76ee\u5f55\u7ed3\u6784\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"src/\n +- main/\n     +- java/\n     |   + <source code>\n     +- resources/\n         +- templates/\n             +- error/\n             |   +- 5xx.ftl\n             +- <other templates>\n")),(0,o.kt)("p",null,"\u5bf9\u4e8e\u66f4\u590d\u6742\u7684\u6620\u5c04\uff0c\u4f60\u53ef\u4ee5\u6dfb\u52a0\u5b9e\u73b0",(0,o.kt)("inlineCode",{parentName:"p"},"ErrorViewResolver"),"\u63a5\u53e3\u7684beans\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class MyErrorViewResolver implements ErrorViewResolver {\n\n    @Override\n    public ModelAndView resolveErrorView(HttpServletRequest request,\n            HttpStatus status, Map<String, Object> model) {\n        // Use the request or status to optionally return a ModelAndView\n        return ...\n    }\n\n}\n")),(0,o.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528Spring MVC\u7279\u6027\uff0c\u6bd4\u5982",(0,o.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/5.0.4.RELEASE/spring-framework-reference/htmlsingle/#mvc-exceptionhandlers"},"@ExceptionHandler\u65b9\u6cd5"),"\u548c",(0,o.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/5.0.4.RELEASE/spring-framework-reference/htmlsingle/#mvc-ann-controller-advice"},"@ControllerAdvice"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"ErrorController"),"\u5c06\u5904\u7406\u6240\u6709\u672a\u5904\u7406\u7684\u5f02\u5e38\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6620\u5c04Spring MVC\u4ee5\u5916\u7684\u9519\u8bef\u9875\u9762")),(0,o.kt)("p",null,"\u5bf9\u4e8e\u4e0d\u4f7f\u7528Spring MVC\u7684\u5e94\u7528\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"ErrorPageRegistrar"),"\u63a5\u53e3\u76f4\u63a5\u6ce8\u518c",(0,o.kt)("inlineCode",{parentName:"p"},"ErrorPages"),"\u3002\u8be5\u62bd\u8c61\u76f4\u63a5\u5de5\u4f5c\u4e8e\u5e95\u5c42\u5185\u5d4cservlet\u5bb9\u5668\uff0c\u5373\u4f7f\u4f60\u6ca1\u6709Spring MVC\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"DispatcherServlet"),"\uff0c\u5b83\u4eec\u4ecd\u65e7\u53ef\u4ee5\u5de5\u4f5c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Bean\npublic ErrorPageRegistrar errorPageRegistrar(){\n    return new MyErrorPageRegistrar();\n}\n\n// ...\n\nprivate static class MyErrorPageRegistrar implements ErrorPageRegistrar {\n\n    @Override\n    public void registerErrorPages(ErrorPageRegistry registry) {\n        registry.addErrorPages(new ErrorPage(HttpStatus.BAD_REQUEST, "/400"));\n    }\n\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8")," \u5982\u679c\u4f60\u6ce8\u518c\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"ErrorPage"),"\uff0c\u8be5\u9875\u9762\u9700\u8981\u88ab\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"Filter"),"\u5904\u7406\uff08\u5728\u4e00\u4e9b\u975eSpring web\u6846\u67b6\u4e2d\u5f88\u5e38\u89c1\uff0c\u6bd4\u5982Jersey\uff0cWicket\uff09\uff0c\u90a3\u4e48\u8be5",(0,o.kt)("inlineCode",{parentName:"p"},"Filter"),"\u9700\u8981\u660e\u786e\u6ce8\u518c\u4e3a\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"ERROR"),"\u5206\u53d1\u5668\uff08dispatcher\uff09\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic FilterRegistrationBean myFilter() {\n    FilterRegistrationBean registration = new FilterRegistrationBean();\n    registration.setFilter(new MyFilter());\n    ...\n    registration.setDispatcherTypes(EnumSet.allOf(DispatcherType.class));\n    return registration;\n}\n")),(0,o.kt)("p",null,"\u9ed8\u8ba4\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"FilterRegistrationBean"),"\u4e0d\u5305\u542b",(0,o.kt)("inlineCode",{parentName:"p"},"ERROR")," dispatcher\u7c7b\u578b\u3002"),(0,o.kt)("p",null,"\u6ce8\u610f\uff1a\u5f53\u90e8\u7f72\u5230\u4e00\u4e2aservlet\u5bb9\u5668\u65f6\uff0cSpring Boot\u901a\u8fc7\u5b83\u7684\u9519\u8bef\u9875\u9762\u8fc7\u6ee4\u5668\u5c06\u5e26\u6709\u9519\u8bef\u72b6\u6001\u7684\u8bf7\u6c42\u8f6c\u53d1\u5230\u6070\u5f53\u7684\u9519\u8bef\u9875\u9762\u3002request\u53ea\u6709\u5728response\u8fd8\u6ca1\u63d0\u4ea4\u65f6\u624d\u80fd\u8f6c\u53d1\uff08forwarded\uff09\u5230\u6b63\u786e\u7684\u9519\u8bef\u9875\u9762\uff0c\u800cWebSphere\u5e94\u7528\u670d\u52a1\u56688.0\u53ca\u540e\u7eed\u7248\u672c\u9ed8\u8ba4\u60c5\u51b5\u4f1a\u5728servlet\u65b9\u6cd5\u6210\u529f\u6267\u884c\u540e\u63d0\u4ea4response\uff0c\u4f60\u9700\u8981\u8bbe\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"com.ibm.ws.webcontainer.invokeFlushAfterService"),"\u5c5e\u6027\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"\u6765\u5173\u95ed\u8be5\u884c\u4e3a\u3002"))}g.isMDXComponent=!0}}]);