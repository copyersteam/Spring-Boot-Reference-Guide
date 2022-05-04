### 附录 E.4. PropertiesLauncher特性

PropertiesLauncher有一些特殊的性质，它们可以通过外部属性来启用（系统属性、环境变量、manifest实体或application.properties）。下面的表格描述了这些属性：

|键|作用|
|----|:-----|
|`loader.path`|逗号分隔的classpath，比如`lib,${HOME}/app/lib`。前面的条目优先，就像`javac`命令行中的常规`-classpath`一样。|
|`loader.home`|用于解析`loader.path`中的相对路径。例如，给定`loader.path=lib`，那么`${loader.home}/lib`是一个类路径位置（以及该目录中的所有 jar文件）。这个属性也用于定位`loader.properties`文件，就像下面的例子`/opt/app`，它的默认值是`${user.dir}`。|
|`loader.args`|main方法的默认参数（以空格分隔）|
|`loader.main`|要启动的main类名称，比如`com.app.Application`|
|`loader.config.name`|属性文件名，比如loader（默认为application）|
|`loader.config.location`|属性文件路径，比如`classpath:loader.properties`（默认为application.properties）|
|`loader.system`|布尔标识，表明所有的属性都应该添加到系统属性中（默认为false）|

当指定为环境变量或清单条目时，应使用以下名称：

|键|清单条目|环境变量|
|----|:-----|:-----|
|`loader.path`|`Loader-Path`|`LOADER_PATH`|
|`loader.home`|`Loader-Home`|`LOADER_HOME`|
|`loader.args`|`Loader-Args`|`LOADER_ARGS`|
|`loader.main`|`Start-Class`|`LOADER_MAIN`|
|`loader.config.location`|`Loader-Config-Location`|`LOADER_CONFIG_LOCATION`|
|`loader.system`|`Loader-System`|`LOADER_SYSTEM`|

**注** 构建插件在胖子jar构建时，会自动将`Main-Class`属性移动到`Start-Class`。如果使用这个，请指定要启动的类的名称，使用`Main-Class`属性而省略`Start-Class`。

以下规则适用于使用`PropertiesLauncher`工作：

- `loader.properties`在`loader.home`中搜索，然后在类路径的根目录中搜索，然后在`classpath:/BOOT-INF/classes`中搜索。首先使用的是存在该名称的文件的第一个位置。
- `loader.home`是一个额外的属性文件的目录位置（覆盖了默认值），只有在没有指定`loader.config.location`时才会使用。
- `loader.path`可以包含目录（递归地扫描jar和zip文件）、归档路径、归档中的目录（例如，`dependencies.jar!/lib`）或通配符模式（用于默认的JVM行为）。存档路径可以是相对于`loader.home`或文件系统中任何带有`jar:file:`前缀的地方。
- `loader.path`(如果为空) 默认为`BOOT-INF/lib`(意思是本地目录，如果从归档中运行，则为嵌套目录)。因此，当没有提供额外的配置时，`PropertiesLauncher`的行为与`JarLauncher`相同。
- `loader.path`不能用来配置`loader.properties`的位置（当启动`PropertiesLauncher`时，用于搜索后者的类路径是JVM的类路径）。
- 在使用前，从System和环境变量加上properties文件本身的所有值上进行占位符替换。
- 对属性的搜索顺序（在不止一个地方查找是有意义的）是环境变量、系统属性、`loader.properties`和档案清单。
