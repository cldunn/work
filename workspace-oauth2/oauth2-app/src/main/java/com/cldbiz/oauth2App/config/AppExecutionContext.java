package com.cldbiz.oauth2App.config;

import java.util.Locale;

import org.springframework.stereotype.Component;

@Component
public class AppExecutionContext {

	private static final ThreadLocal<AppContext> appContext =
        new ThreadLocal<AppContext>() {
            @Override protected AppContext initialValue() {
                return new AppContext();
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
