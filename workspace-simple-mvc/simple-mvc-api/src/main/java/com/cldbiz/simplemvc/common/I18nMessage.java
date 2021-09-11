package com.cldbiz.simplemvc.common;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;

import com.cldbiz.simplemvc.config.AppExecutionContext;
import com.cldbiz.simplemvc.util.ApplicationContextUtils;
import com.cldbiz.simplemvc.util.MessageSource;

/* Redundant class to MessageSource */
public class I18nMessage {
	// Cannot @Autowire bean in a non-component, use ApplicationContext instead
	private static MessageSource messageSource;
	
	// Manually initialize MessageSource from ApplicationContext
	static {
		// ApplicationContextAware utility class that provide ApplicationContext access 
		ApplicationContext ctx = ApplicationContextUtils.getApplicationContext();
		messageSource = ctx.getBean(MessageSource.class);
	}
	
	private String key;
	private List<String> args = new ArrayList<String>();
	
	public I18nMessage (String key) {
		this.key = key;
	}
	
	public I18nMessage (String key, String... args) {
		this.key = key;
		this.args = Arrays.asList(args);
	}

	public void addArg(String arg) {
		this.args.add(arg);
	}

	public String getText() {
		Locale locale = AppExecutionContext.getLocale();
		
		if (args.size() == 0) {
			return messageSource.getMessage(key, null, locale);
		}
		else {
			String[] argsArray = new String[args.size()];
	        argsArray = args.toArray(argsArray);

	        return messageSource.getMessage(key, argsArray, locale);
		}
	}
}
