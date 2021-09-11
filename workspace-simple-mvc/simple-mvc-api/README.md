# simple-mvc-api

Server side portion of the simple-mvc application incorporating various spring-framework modules such as spring-boot and spring-mvc.  

It demonstrates spring-boot features such as configuration, environment variables, inititializing thread-local variables, logging, configuration profiles, 
by passig CORS issues between servers, messaging (ReloadableResourceBundleMessageSource), interceptors (HandlerInterceptor, ResponseEntityExceptionHandler) 
and rest api url and parameter resolution.

Purpose of this api is to provide the simple-mvc-ui with rest endpoints demonstrating the invocation, parameterizing and responding to various mvc requests.  

All responses returned will be in a uniform json format encapsulating a message/data object and an http status code, including exceptions.

The first step is to download the demo application and all the actual demos. They all reside in the work repository so all that is needed is to clone the work repository.

# Build simple-mvc-api application deployed in embedded tomcat
1. Navigate to the workspace-simple-mvc/simple-mvc-api directory and run: mvn spring-boot:run


# Build simple-mvc-api executable jar and deploy with embedded tomcat
1. Navigate to the workspace-simple-mvc/simple-mvc-api directory
2. run: mvn clean package spring-boot:repackage
3. run: java -jar ./target/simple-mvc-api-1.0.jar
