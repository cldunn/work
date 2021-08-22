package com.cldbiz.simplemvc.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.cldbiz.simplemvc.interceptor.RequestInterceptor;

@Configuration
@PropertySource("classpath:application.properties")
public class ApplicationConfiguration implements WebMvcConfigurer  {
	@Autowired
	RequestInterceptor requestInterceptor;
	
	@Override
	  public void addInterceptors(InterceptorRegistry registry) {
	    registry.addInterceptor(requestInterceptor);
	   
	}
}
