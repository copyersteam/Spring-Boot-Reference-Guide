### 附录 B.3.1. 内嵌属性

该注解处理器自动将内部类当做内嵌属性处理。例如，下面的类：
```java
@ConfigurationProperties(prefix="server")
public class ServerProperties {

	private String name;

	private Host host;

	// ... getter and setters

	private static class Host {

		private String ip;

		private int port;

		// ... getter and setters

	}

}
```

前面的示例生成`server.name`、`server.host.ip`与`server.host.port`属性的元数据信息。你可以使用字段上的`@NestedConfigurationProperty`注释来指示应该将常规(非内部)类视为嵌套类。

**注** 这对集合和映射没有影响，因为这些类型是自动标识的，并且为每个类型生成一个元数据属性。
