package com.cldbiz.security.config;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.cldbiz.security.interceptor.RequestInterceptor;

@Configuration
@PropertySource("classpath:application.properties")
/* PropertySource will bring application.properties property values into application environment */
public class WebMvcConfiguration implements WebMvcConfigurer  {
	@Autowired
	RequestInterceptor requestInterceptor;
	
	/* Configure application context to include these added interceptors */
	/* this interceptor will initialize thread-locale variables upon each rest api call */
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(requestInterceptor);
	}
	
	/* Since react UI runs as a separate application, in order to avoid CORS errors, we must explicitly
	 * identify allowed origins of the UI.  In this simple case we allow everything.
	 */
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**").allowedOrigins("*").allowedHeaders("*").allowedMethods("*");
	}

	/* 
	 * MODE_THREADLOCAL - SecurityContextHolder/thread
	 * MODE_INHERITABLETHREADLOCAL - SecurityContextHolder incorporated in with new threads (via @EnableAsync configuration and @Async methods)
	 * MODE_GLOBAL - for standalone apps, not for web apps
	 */
	@Bean 
	public InitializingBean initializingBean() {
		return () -> SecurityContextHolder.setStrategyName(SecurityContextHolder.MODE_THREADLOCAL);
	}
	
}
