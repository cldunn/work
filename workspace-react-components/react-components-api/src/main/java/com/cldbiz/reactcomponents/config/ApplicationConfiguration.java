package com.cldbiz.reactcomponents.config;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.format.FormatterRegistry;
import org.springframework.format.datetime.DateFormatter;
import org.springframework.format.datetime.DateFormatterRegistrar;
import org.springframework.format.support.DefaultFormattingConversionService;
import org.springframework.format.support.FormattingConversionService;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.cldbiz.reactcomponents.dto.MyDateFormatter;
import com.cldbiz.reactcomponents.interceptor.RequestInterceptor;

@Configuration
@PropertySource("classpath:application.properties")
/* PropertySource will bring application.properties property values into application environment */
public class ApplicationConfiguration implements WebMvcConfigurer  {
	@Autowired
	RequestInterceptor requestInterceptor;
	
	/* Configure application context to include these added interceptors */
	/* this interceptor will initialize thread-locale variables upon each rest api call */
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(requestInterceptor);
	}
	
	
	 @Override
     public void addFormatters(FormatterRegistry registry) {
         registry.addFormatterForFieldType(Date.class, new MyDateFormatter());
     }
	 /*	
	@Bean
    public FormattingConversionService conversionService() {
		DefaultFormattingConversionService conversionService = new DefaultFormattingConversionService(false);
		
        // Register date conversion with a specific global format
        DateFormatterRegistrar registrar = new DateFormatterRegistrar();
        registrar.setFormatter(new DateFormatter("yyyy-MM-dd"));
        registrar.registerFormatters(conversionService);

        return conversionService;
	}
	*/
	/* Since react UI runs as a separate application, in order to avoid CORS errors, we must explicitly
	 * identify allowed origins of the UI.  In this simple case we allow everything.
	 */
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**").allowedOrigins("*").allowedHeaders("*").allowedMethods("*");
	}

}
