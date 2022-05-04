### 附录 E.2.1 对标准Java "JarFile"的兼容性

Spring Boot Loader努力保持对已有代码和库的兼容。`org.springframework.boot.loader.jar.JarFile`继承自`java.util.jar.JarFile`，可以作为降级替换。`getURL()`方法返回一个与`java.net.JarURLConnection`兼容的`URL`，并可与Java的`URLClassLoader`一起使用。
