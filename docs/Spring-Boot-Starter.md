# Spring Boot Starter

OpenJ starter is a library for easy integration Open SDK and Spring Boot application.

## Installing

Using gradle:

```xml
compile("io.openfuture:spring-boot-starter-sdk:1.0.0")
```

Using maven:

```xml
<dependency>
    <groupId>io.openfuture</groupId>
    <artifactId>spring-boot-starter-sdk</artifactId>
    <version>1.0.0</version>
</dependency>
```

## Get started

`token` - your open key

Inside your application.properties set

```properties
open.token = token
```

After that you can autowire bean `OpenJ`