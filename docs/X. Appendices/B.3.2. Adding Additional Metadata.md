### 附录 B.3.2. 添加其他的元数据

Spring Boot的配置文件处理非常灵活，通常存在不绑定到`@ConfigurationProperties` bean的属性。你可能还需要调优现有键的一些属性。为了支持这种情况并允许你提供自定义“提示”，注释处理器将自动合并来自`META-INF/additional-spring-configuration-metadata.json`的项，放入主元数据文件。

如果你引用的属性是自动检测到的，则会覆盖描述、默认值和弃用信息(如果指定的话)。如果当前模块中没有标识手动属性声明，则将其作为新属性添加。

`additional-spring-configuration-metadata.json`文件的格式与常规的`spring-configuration-metadata.json`完全相同。附加属性文件是可选的。如果没有任何其他属性，则不要添加该文件。
