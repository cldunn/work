package com.cldbiz.simplemvc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/* Short-hand annotation for @Configuration, @EnableAutoConfiguration, @ComponentScan */
@SpringBootApplication
public class SimpleMvcApplication {

	/* 
	 * Launch embedded server and 
	 * start application at port/context-path as defined in application.properties 
	 */
	public static void main(String[] args) {
		SpringApplication.run(SimpleMvcApplication.class, args);
	}
}
