package com.cldbiz.jpa.config;

import java.util.Locale;

import org.springframework.stereotype.Component;

import com.cldbiz.jpa.dto.UserProfileDto;

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

	public static UserProfileDto getUserProfileDto() {
		return appContext.get().getUserProfileDto();
	}

	public static void setUserProfileDto(UserProfileDto userProfileDto) {
		appContext.get().setUserProfileDto(userProfileDto);
	}

	public static void remove() {
		appContext.remove();
	}
}
