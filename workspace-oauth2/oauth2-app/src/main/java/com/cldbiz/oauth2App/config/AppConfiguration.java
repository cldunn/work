package com.cldbiz.oauth2App.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.cldbiz.oauth2App.interceptor.RequestInterceptor;

@Configuration
@PropertySource("classpath:application.properties")
/* PropertySource will bring application.properties property values into application environment */
public class AppConfiguration implements WebMvcConfigurer  {
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

}
