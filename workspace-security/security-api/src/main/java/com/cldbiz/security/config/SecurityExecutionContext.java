package com.cldbiz.security.config;

import java.util.Locale;

import org.springframework.stereotype.Component;

@Component
public class SecurityExecutionContext {

	private static final ThreadLocal<SecurityContext> appContext =
        new ThreadLocal<SecurityContext>() {
            @Override protected SecurityContext initialValue() {
                return new SecurityContext();
        }
    };

	public static Locale getLocale() {
		return appContext.get().getLocale();
	}

	public static void setLocale(Locale locale) {
		appContext.get().setLocale(locale);
	}
	
	public static void remove() {
		appContext.remove();
	}
}
