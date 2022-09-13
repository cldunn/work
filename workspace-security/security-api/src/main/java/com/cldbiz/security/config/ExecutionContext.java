package com.cldbiz.security.config;

import java.util.Locale;

import org.springframework.stereotype.Component;

import com.cldbiz.security.spring.UserDetail;

@Component
public class ExecutionContext {

	private static final ThreadLocal<ExecutionContextInfo> appContext =
        new ThreadLocal<ExecutionContextInfo>() {
            @Override protected ExecutionContextInfo initialValue() {
                return new ExecutionContextInfo();
        }
    };

	public static Locale getLocale() {
		return appContext.get().getLocale();
	}

	public static void setLocale(Locale locale) {
		appContext.get().setLocale(locale);
	}
	
	public static UserDetail getUserDetail() {
		return appContext.get().getUserDetail();
	}

	public static void setUserDetail(UserDetail userDetail) {
		appContext.get().setUserDetail(userDetail);
	}

	public static void remove() {
		appContext.remove();
	}
}
