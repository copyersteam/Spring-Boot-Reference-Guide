### 附录B.2.2 值提供者

提供者是将语义附加到属性上的一种强大的方式。我们在下面的章节里定义了官方的提供者，你可以为你自己的提示使用它们。但是，必须记住：你最喜欢的IDE可能实现了其中的一部分，或者什么也没有实现。它也可以最后提供它自己。

**注** 由于这是一个新特性，IDE供应商必须跟上它的工作方式。采用时间自然会有所不同。

下面👇的表格总结了支持的提供者的列表：

|名称|描述|
|----|:----|
|`any`|允许提供额外的值|
|`class-reference`|自动补全项目里可用的类。通常被一个由`目标`参数指定的基础的类约束|
|`handle-as`|操作属性，就好像它是由强制的`目标`参数定义的类型一样|
|`logger-name`|自动补全有效的记录器名。典型地，目前项目里可用的包名和类名会被自动补全|
|`spring-bean-reference`|自动补全当前项目里可用的bean的名字。通常被一个由`目标`参数指定的基础的类约束|
|`spring-profile-name`|自动补全当前项目里可用的Spring profile的名字|

**注** 对于一个给定的属性，只能有一个有效的提供者。但是，如果可以以某种方式共同管理属性，你也可以指定多个提供者。确保把最强大的提供者放在第一位，因为IDE必须使用它能够处理的JSON部分里的第一个。如果对于一个给定的属性，没有提供者提供支持，也不会有特殊的内容帮助被提供。

**Any**

特殊的**any**提供程序值允许提供任何附加值。如果支持，应该应用基于属性类型的常规值验证。

如果你有一个值列表，并且任何额外的值仍然被认为是有效的，则通常使用此提供程序。

下面的例子提供了`on`和`off`作为`system.state`的自动完成值：
```json
{"hints": [
	{
		"name": "system.state",
		"values": [
			{
				"value": "on"
			},
			{
				"value": "off"
			}
		],
		"providers": [
			{
				"name": "any"
			}
		]
	}
]}
```
注意，在前面的示例中，还允许任何其他值。

**Class Reference**

**class-reference**提供程序自动完成项目中可用的类。该提供程序支持以下参数：
|参数|类型|默认值|描述|
|----|:----|:----|:----|
|`target`|`String`（`Class`）|none|应该分配给所选值的类的完全限定名。通常用于过滤非候选类。请注意，此信息可以由类型本身提供，方法是公开具有适当上限的类。|
|`concrete`|`boolean`|true|指定是否只将具体类视为有效的候选类。|

下面的元数据片段对应于标准的`server.servlet.jsp.class-name`属性定义了要使用的`JspServlet`类名：
```json
{"hints": [
	{
		"name": "server.servlet.jsp.class-name",
		"providers": [
			{
				"name": "class-reference",
				"parameters": {
					"target": "javax.servlet.http.HttpServlet"
				}
			}
		]
	}
]}
```

**Handle As**

**handle-as**提供程序允许您将属性的类型替换为更高级的类型。当属性具有`java.lang.String`类型时，通常会发生这种情况。因为你不希望配置类依赖于可能不在类路径上的类。该提供程序支持以下参数：

|参数|类型|默认值|描述|
|----|:----|:----|:----|
|`target`|`String`（`Class`）|none|要考虑用于属性的类型的完全限定名。这个参数是强制性的。|

可以使用以下类型：

- 任何`java.lang.Enum`：列出属性的可能值。（我们建议使用`Enum`类型定义属性，因为IDE不需要进一步的提示就可以自动完成这些值。）
- `java.nio.charset.Charset`：支持自动完成字符集/编码值（如`UTF-8`）
- `java.util.Locale`：自动完成区域设置（如`en_US`）
- `org.springframework.util.MimeType`：支持自动完成内容类型值（例如`text/plain`）
- `org.springframework.core.io.Resource`：支持自动完成Spring的资源抽象，以引用文件系统或类路径上的文件。（如`classpath:/sample.properties`）

**注** 如果可以提供多个值，则使用`集合`或数组类型来教导IDE。

下面的元数据片段对应于标准的`spring.liquibase.change-log`属性，定义要使用的更改日志的路径。它实际上是作为一个`org.springframework.core.io.Resource`在内部使用的。但是不能这样公开，因为我们需要保留原始的字符串值，以便将它传递给Liquibase API。
```json
{"hints": [
	{
		"name": "spring.liquibase.change-log",
		"providers": [
			{
				"name": "handle-as",
				"parameters": {
					"target": "org.springframework.core.io.Resource"
				}
			}
		]
	}
]}
```

**Logger Name**

**logger-name**提供程序自动完成有效的日志程序名称。通常，当前项目中可用的包名和类名可以自动完成。特定的框架可能有额外的、也可以支持的神奇日志程序名称。

由于记录器名称可以是任意的名称，因此该提供程序应该允许任何值，但是可以突出显示项目的类路径中不可用的有效包和类名称。

下面的元数据片段对应于标准`logging.level`属性。键是记录器名称，值对应于标准日志级别或任何自定义级别。
```json
{"hints": [
	{
		"name": "logging.level.keys",
		"values": [
			{
				"value": "root",
				"description": "Root logger used to assign the default logging level."
			}
		],
		"providers": [
			{
				"name": "logger-name"
			}
		]
	},
	{
		"name": "logging.level.values",
		"values": [
			{
				"value": "trace"
			},
			{
				"value": "debug"
			},
			{
				"value": "info"
			},
			{
				"value": "warn"
			},
			{
				"value": "error"
			},
			{
				"value": "fatal"
			},
			{
				"value": "off"
			}

		],
		"providers": [
			{
				"name": "any"
			}
		]
	}
]}
```

Spring Bean Reference

`spring-bean-reference`提供程序自动完成当前项目配置中定义的bean。该提供程序支持以下参数：

|参数|类型|默认值|描述|
|----|:----|:----|:----|
|`target`|`String`（`Class`）|none|bean类的应可赋值给候选者的完全限定名。通常用于过滤非候选bean。|

下面的元数据片段对应于标准的`spring.jmx.server`属性，定义要使用的`MBeanServer` bean的名称：
```json
{"hints": [
	{
		"name": "spring.jmx.server",
		"providers": [
			{
				"name": "spring-bean-reference",
				"parameters": {
					"target": "javax.management.MBeanServer"
				}
			}
		]
	}
]}
```

**注** 绑定器不知道元数据。如果你提供了那个提示，你仍然需要将bean名称转换为`ApplicationContext`使用的实际bean引用。

Spring Profile Name

`spring-profile-name`提供程序自动完成在当前项目的配置中定义的Spring配置文件。

下面的元数据片段对应于标准的`spring.profiles.active`属性，定义要启用的Spring配置文件的名称：
```json
{"hints": [
	{
		"name": "spring.profiles.active",
		"providers": [
			{
				"name": "spring-profile-name"
			}
		]
	}
]}
```
