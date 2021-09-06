# simple-mvc-api

Server side portion of the simple-mvc application incorporating various spring-framework modules such as spring-boot and spring-mvc.  

It demonstrates spring-boot features such as configuration, environment variables, inititializing thread-local variables, logging, configuration profiles, 
by passig CORS issues between servers, messaging (ReloadableResourceBundleMessageSource), interceptors (HandlerInterceptor, ResponseEntityExceptionHandler) 
and rest api url and parameter resolution.

Purpose of this api is to provide the simple-mvc-ui with rest endpoints demonstrating the invocation, parameterizing and responding to various mvc requests.  

All responses returned will be in a uniform json format encapsulating a message/data object and an http status code, including exceptions.

The first step is to download the demo application and all the actual demos. They all reside in the work repository so all that is needed is to clone the work repository.

# Build simple-mvc-api application deployed in embedded tomcat

java -jar C:\Users\cliff\work\workspace-simple-mvc\simple-mvc-api\target\simple-mvc-api-1.0.jar

1. Navigate to the workspace-simple-mvc/simple-mvc-api directory and run: npm install && npm start
2. Start the simple-mvc-api server side application (see workspace-simple-mvc/simple-mvc-api README.md)
3. Launch in browser: http:/localhost:3001

# Build simple-mvc-api executable jar deploy with embedded tomcat
1. Navigate to the workspace-simple-mvc/simple-mvc-ui directory and run: npm install && npm run build
2. This will create workspace-simple-mvc/simple-mvc-ui/dist directory
3. Go to your tomcat deployment, in the webapps directory create a "simple-mvc-ui" directory 
4. Copy all the contents from the workspace-simple-mvc/simple-mvc-ui/dist directory to the webapps/simple-mvc-ui directory
5. Launch tomcat - application assumes default tomcat settings
6. Start the simple-mvc-api server side application (see workspace-simple-mvc/simple-mvc-api README.md)
7. Launch in browser: http:/localhost:8080/simple-mvc-ui or go to http:/localhost:8080/demos, select the simple-mvc demo and use the launch link
