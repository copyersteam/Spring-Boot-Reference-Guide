### 附录 E.5. 可执行jar的限制

在使用Spring Boot Loader打包的应用程序时，您需要考虑以下限制：

- Zip条目压缩：嵌套jar的`ZipEntry`必须通过使用`ZipEntry.STORED`方法保存。这是必要的，这样我们就可以直接搜索到嵌套jar中的单个内容。嵌套jar文件本身的内容仍然可以被压缩，外部jar中的任何其他条目也可以被压缩。
- 系统类加载器：已启动的应用程序在加载类时应该使用`Thread.getContextClassLoader()`（大多数库和框架默认都是这样做的）。试图用`ClassLoader.getSystemClassLoader()`加载嵌套的jar类会失败，`java.util.Logging`总是使用系统类加载器。为此，你应该考虑使用不同的日志实现。
